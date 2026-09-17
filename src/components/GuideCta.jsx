import Link from "next/link";

export default function GuideCta({
  title = "웨이트리스트 등록하고 카드뉴스 무한 생성 받기",
  buttonLabel = "이벤트 신청하기",
}) {
  return (
    <div className="guide-cta-band mt-10 rounded-3xl px-7 py-8 tablet:px-10 tablet:py-9">
      <div className="guide-cta-inner">
        <div className="min-w-0">
          <p className="text-[13px] font-bold text-white/70">MAKO OPEN EVENT</p>
          <p className="keep-all mt-1.5 text-[20px] font-black leading-snug text-white tablet:text-[23px]">
            {title}
          </p>
        </div>
        <Link
          href="/#waitlist"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-bold text-[#0b63ce] shadow-lg transition hover:-translate-y-0.5"
        >
          {buttonLabel}
          <i className="ri-arrow-right-line text-[18px]" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
