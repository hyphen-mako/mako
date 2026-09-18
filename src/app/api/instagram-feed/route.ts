import { NextResponse } from "next/server";
import { clientIp, rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const API_VERSION = "v21.0";
const FIELDS =
  "id,media_type,media_url,thumbnail_url,permalink,caption,timestamp,children{media_type,media_url,thumbnail_url}";

type IgMedia = {
  id?: string;
  media_type?: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
  caption?: string;
  timestamp?: string;
  children?: { data?: IgMedia[] };
};

function mediaUrl(m: IgMedia) {
  if (m.media_type === "VIDEO") return m.thumbnail_url ?? m.media_url;
  if (m.media_url) return m.media_url;
  const child = m.children?.data?.find((c) => c.media_url || c.thumbnail_url);
  return child ? (child.media_type === "VIDEO" ? child.thumbnail_url ?? child.media_url : child.media_url) : undefined;
}

export async function GET(request: Request) {
  const cacheHeaders = {
    "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=86400",
  };

  if (!rateLimit(clientIp(request), 60)) {
    return NextResponse.json({ ok: false, posts: [] }, { status: 429 });
  }

  const token =
    process.env.IG_ACCESS_TOKEN ??
    process.env.INSTAGRAM_ACCESS_TOKEN ??
    process.env.INSTAGRAM_TOKEN ??
    process.env.IG_TOKEN;
  const userId = process.env.IG_USER_ID ?? process.env.INSTAGRAM_USER_ID;

  if (!token) {
    return NextResponse.json({ ok: false, posts: [], configured: false }, { headers: cacheHeaders });
  }

  const base = userId
    ? `https://graph.facebook.com/${API_VERSION}/${encodeURIComponent(userId)}/media`
    : `https://graph.instagram.com/${API_VERSION}/me/media`;

  try {
    const url = `${base}?fields=${encodeURIComponent(FIELDS)}&limit=12&access_token=${encodeURIComponent(token)}`;
    const response = await fetch(url, { cache: "no-store", signal: AbortSignal.timeout(6_000) });
    if (!response.ok) {
      return NextResponse.json({ ok: false, posts: [], configured: true, upstreamStatus: response.status }, { headers: cacheHeaders });
    }

    const data = (await response.json()) as { data?: IgMedia[] };
    const posts = (data.data ?? [])
      .map((m) => {
        const image = mediaUrl(m);
        if (!m.id || !image || !m.permalink) return null;
        return {
          id: m.id,
          image,
          permalink: m.permalink,
          caption: typeof m.caption === "string" ? m.caption.slice(0, 140) : "",
          isVideo: m.media_type === "VIDEO",
          timestamp: m.timestamp ?? "",
        };
      })
      .filter(Boolean)
      .slice(0, 6);

    return NextResponse.json({ ok: true, posts }, { headers: cacheHeaders });
  } catch {
    return NextResponse.json({ ok: false, posts: [], configured: true }, { headers: cacheHeaders });
  }
}
