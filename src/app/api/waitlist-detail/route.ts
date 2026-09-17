import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DISCORD_WEBHOOK_URL =
  process.env.MAKO_DISCORD_WEBHOOK_URL ||
  "https://discord.com/api/webhooks/1550074431785926708/o8d9211u-hLt-J1v0M9ky0N3tgW8JYmbU0RretjPKEo6auZqDKpvblNIlFkwzUfmrzhH";

type DetailPayload = {
  email?: unknown;
  name?: unknown;
  phone?: unknown;
  company?: unknown;
  note?: unknown;
  website?: unknown;
};

const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as DetailPayload;

    if (typeof body.website === "string" && body.website.length > 0) {
      return NextResponse.json({ ok: true });
    }

    const email = clean(body.email, 254).toLowerCase();
    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ ok: false, message: "유효한 이메일 주소를 입력해주세요." }, { status: 400 });
    }

    const name = clean(body.name, 60);
    const phone = clean(body.phone, 40);
    if (!name || !phone) {
      return NextResponse.json({ ok: false, message: "이름과 연락처를 입력해주세요." }, { status: 400 });
    }

    const fields = [
      { name: "이메일", value: email, inline: true },
      { name: "이름", value: name, inline: true },
      { name: "연락처", value: phone, inline: true },
      { name: "회사/브랜드", value: clean(body.company, 80) || "-", inline: true },
      { name: "요청사항", value: clean(body.note, 500) || "-", inline: false },
    ];

    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "MAKO Waitlist",
        allowed_mentions: { parse: [] },
        embeds: [
          {
            title: "웨이트리스트 추가 정보",
            color: 0x0f7dff,
            fields,
            timestamp: new Date().toISOString(),
          },
        ],
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(5_000),
    });

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, message: "전송에 실패했어요. 잠시 후 다시 시도해주세요." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "전송에 실패했어요. 잠시 후 다시 시도해주세요." },
      { status: 500 },
    );
  }
}
