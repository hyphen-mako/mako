import { NextResponse } from "next/server";
import { clientIp, rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEFAULT_API_BASE_URL = "https://mako-server.hyphen.it.com";

type WaitlistPayload = {
  email?: unknown;
  source?: unknown;
  website?: unknown;
};

async function saveToMakoApi(payload: { email: string; source: string; website?: unknown }) {
  const apiBaseUrl = (process.env.MAKO_API_BASE_URL || DEFAULT_API_BASE_URL).replace(/\/$/, "");
  const response = await fetch(`${apiBaseUrl}/api/v1/waitlist`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
    signal: AbortSignal.timeout(5_000),
  });
  const result = await response.json() as {
    data?: { ok?: boolean; duplicate?: boolean };
    error?: { message?: string };
  };

  if (!response.ok) {
    const message = response.status === 400
      ? result.error?.message || "이메일 주소를 다시 확인해주세요."
      : "신청을 저장하지 못했어요. 잠시 후 다시 시도해주세요.";
    return NextResponse.json({ ok: false, message }, { status: response.status === 400 ? 400 : 502 });
  }
  return NextResponse.json(
    { ok: result.data?.ok === true, duplicate: result.data?.duplicate === true },
    { status: result.data?.duplicate ? 200 : 201 },
  );
}

export async function POST(request: Request) {
  try {
    if (!rateLimit(clientIp(request))) {
      return NextResponse.json(
        { ok: false, message: "요청이 너무 많아요. 잠시 후 다시 시도해주세요." },
        { status: 429 },
      );
    }

    const body = (await request.json()) as WaitlistPayload;

    if (typeof body.website === "string" && body.website.length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const source = typeof body.source === "string" ? body.source.trim().toLowerCase().slice(0, 40) : "landing";

    if (!EMAIL_PATTERN.test(email) || email.length > 254) {
      return NextResponse.json({ ok: false, message: "유효한 이메일 주소를 입력해주세요." }, { status: 400 });
    }

    return saveToMakoApi({ email, source, website: body.website });
  } catch {
    return NextResponse.json(
      { ok: false, message: "신청을 저장하지 못했어요. 잠시 후 다시 시도해주세요." },
      { status: 500 },
    );
  }
}
