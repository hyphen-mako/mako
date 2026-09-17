import Link from "next/link";

export default function GuideHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-[200] px-4 pt-4 tablet:px-6">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-3">
        <Link
          href="/"
          aria-label="MAKO 홈"
          className="flex h-[52px] items-center gap-2 rounded-lg bg-white/95 px-2 pr-4 shadow-md backdrop-blur-md transition-shadow hover:shadow-lg"
        >
          <img src="/mako/mako-mascot.webp" alt="" className="h-10 w-10 object-contain" />
          <span className="text-[22px] font-black leading-none text-[#0F7DFF]">MAKO</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href="/guide"
            className="guide-header-link h-[52px] items-center rounded-lg bg-white/95 px-5 text-[15px] font-bold text-[#162033] shadow-md backdrop-blur-md transition-shadow hover:shadow-lg"
          >
            전체 가이드
          </Link>
          <Link
            href="/#waitlist"
            className="flex h-[52px] items-center gap-2 rounded-lg bg-[#0f7dff] px-5 text-[15px] font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            이벤트 신청
            <i className="ri-arrow-right-line text-[18px]" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
}
