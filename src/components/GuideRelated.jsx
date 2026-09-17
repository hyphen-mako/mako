import Link from "next/link";
import { GUIDES } from "@/lib/guides";

export default function GuideRelated({ current }) {
  const others = GUIDES.filter((guide) => guide.slug !== current);
  return (
    <nav aria-label="관련 가이드" className="mt-14">
      <p className="text-[13px] font-bold tracking-wide text-[#0f7dff]">MORE GUIDES</p>
      <p className="keep-all mt-1.5 text-[20px] font-black text-[#162033] tablet:text-[22px]">
        함께 읽으면 좋은 가이드
      </p>
      <div className="mt-5 grid gap-4 tablet:grid-cols-2">
        {others.map((guide) => (
          <Link key={guide.slug} href={guide.slug} className="guide-related-card group rounded-2xl px-6 py-5">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="keep-all text-[15px] font-bold text-[#162033] transition-colors group-hover:text-[#0f7dff]">
                  {guide.title}
                </p>
                <p className="keep-all mt-1.5 text-[13px] leading-relaxed text-[#7a899b]">
                  {guide.description}
                </p>
              </div>
              <span className="guide-related-arrow flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                <i className="ri-arrow-right-line text-[16px]" aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
