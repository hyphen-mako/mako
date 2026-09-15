export default function SiteFooter() {
  return (
    <footer className="relative z-20 w-full bg-[#F3F7FB] px-6 py-10 tablet:px-10 tablet:py-12 desktop:px-16 desktop:py-14">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="flex flex-col gap-8 tablet:flex-row tablet:items-start tablet:justify-between desktop:flex-row desktop:items-start desktop:justify-between">
          <div>
            <a href="/" className="inline-flex items-center gap-3">
              <img src="/mako/mako-mascot.png" alt="" className="h-11 w-11 object-contain" />
              <span className="text-[24px] font-black leading-none text-[#0F7DFF]">MAKO</span>
            </a>
            <p className="mt-4 max-w-[360px] text-[14px] leading-relaxed text-[#617083]">
              브랜드를 이해하고 카드뉴스와 AI 영상을 함께 만드는 마케팅 스튜디오. 오픈 이벤트로 카드뉴스 무한 생성을 제공합니다.
            </p>
          </div>

          <nav aria-label="푸터 메뉴" className="grid grid-cols-2 gap-x-8 gap-y-4 text-[14px] font-semibold text-[#23344A] tablet:flex tablet:gap-8 desktop:flex desktop:gap-8">
            <a href="#guide" className="transition-colors hover:text-[#0F7DFF]">사용 방법</a>
            <a href="#services" className="transition-colors hover:text-[#0F7DFF]">제작 기능</a>
            <a href="#waitlist-bottom" className="transition-colors hover:text-[#0F7DFF]">오픈 이벤트</a>
            <a href="/privacy" className="transition-colors hover:text-[#0F7DFF]">개인정보처리방침</a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[#D9E3EE] pt-6 text-[12px] text-[#7A899B] tablet:flex-row tablet:items-center tablet:justify-between desktop:flex-row desktop:items-center desktop:justify-between">
          <p>© 2026 Hyphen Inc. All Rights Reserved.</p>
          <p>mako-landing.hyphen.it.com</p>
        </div>
      </div>
    </footer>
  );
}
