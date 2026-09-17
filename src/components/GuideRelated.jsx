import Link from "next/link";
import { GUIDES } from "@/lib/guides";

export default function GuideRelated({ current }) {
  const others = GUIDES.filter((guide) => guide.slug !== current);
  return (
    <nav aria-label="관련 가이드" className="mt-12 border-t border-[#e3ecf5] pt-6">
      <p className="text-[13px] font-bold text-[#7a899b]">함께 읽기</p>
      <ul className="mt-3 flex flex-col gap-2">
        {others.map((guide) => (
          <li key={guide.slug}>
            <Link href={guide.slug} className="text-[14px] font-bold text-[#0f7dff] underline underline-offset-2">
              {guide.title}
            </Link>
            <span className="ml-2 text-[13px] text-[#7a899b]">{guide.description}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
