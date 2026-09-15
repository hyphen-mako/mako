import { appendFile, mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LOCAL_STORAGE_PATH = path.join(process.cwd(), "data", "waitlist.jsonl");

type WaitlistPayload = {
  email?: unknown;
  source?: unknown;
  website?: unknown;
};

type WaitlistEntry = {
  email: string;
  source: string;
  createdAt: string;
};

async function saveLocally(entry: WaitlistEntry) {
  await mkdir(path.dirname(LOCAL_STORAGE_PATH), { recursive: true });

  let existing = "";
  try {
    existing = await readFile(LOCAL_STORAGE_PATH, "utf8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;
  }

  const duplicate = existing
    .split("\n")
    .filter(Boolean)
    .some((line) => {
      try {
        return (JSON.parse(line) as WaitlistEntry).email === entry.email;
      } catch {
        return false;
      }
    });

  if (!duplicate) await appendFile(LOCAL_STORAGE_PATH, `${JSON.stringify(entry)}\n`, "utf8");
  return duplicate;
}

async function forwardToWebhook(entry: WaitlistEntry) {
  const webhookUrl = process.env.WAITLIST_WEBHOOK_URL;
  if (!webhookUrl) return null;

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(process.env.WAITLIST_WEBHOOK_SECRET
        ? { Authorization: `Bearer ${process.env.WAITLIST_WEBHOOK_SECRET}` }
        : {}),
    },
    body: JSON.stringify(entry),
  });

  if (!response.ok) throw new Error(`Waitlist webhook returned ${response.status}`);
  return false;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as WaitlistPayload;

    if (body.website) return NextResponse.json({ ok: true });

    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const source = typeof body.source === "string" ? body.source.slice(0, 40) : "landing";

    if (!EMAIL_PATTERN.test(email) || email.length > 254) {
      return NextResponse.json({ ok: false, message: "유효한 이메일 주소를 입력해주세요." }, { status: 400 });
    }

    const entry = { email, source, createdAt: new Date().toISOString() };
    const webhookResult = await forwardToWebhook(entry);
    const duplicate = webhookResult === null ? await saveLocally(entry) : webhookResult;

    return NextResponse.json({ ok: true, duplicate }, { status: duplicate ? 200 : 201 });
  } catch {
    return NextResponse.json(
      { ok: false, message: "신청을 저장하지 못했어요. 잠시 후 다시 시도해주세요." },
      { status: 500 },
    );
  }
}
