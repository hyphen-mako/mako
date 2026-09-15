export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#F7F7F7] px-6 sm:px-8 md:px-10 lg:px-16 relative z-0 py-10 md:py-12">
      <div className="w-full min-h-[520px] tablet:min-h-[360px] desktop:min-h-[280px] flex flex-col justify-between">
        <div className="flex flex-col gap-8 tablet:flex-row tablet:items-center tablet:justify-between desktop:flex-row desktop:items-center desktop:justify-between">
          <a
            href="https://mako.hyphen.it.com"
            className="inline-flex w-fit items-center gap-3 rounded-xl bg-white px-3 py-2 shadow-sm"
          >
            <img src="/mako/mako-mascot.png" alt="" className="h-10 w-10 object-contain" />
            <span className="text-[20px] font-black text-[#0F7DFF]">MAKO</span>
          </a>
          <div className="w-full flex flex-col gap-3 text-[15px] font-semibold text-[#1C2B3A] tablet:w-auto tablet:flex-row tablet:flex-wrap tablet:gap-x-[40px] tablet:gap-y-3 tablet:justify-start tablet:items-center tablet:text-[15px] tablet:font-normal desktop:w-[730px] desktop:flex-row desktop:flex-wrap desktop:gap-x-[40px] desktop:gap-y-3 desktop:justify-start desktop:items-center desktop:text-[16px] desktop:font-normal">
            <a className="hover:text-[#0066FF] transition-colors whitespace-nowrap" href="https://mako.hyphen.it.com/support">고객센터</a>
            <a className="hover:text-[#0066FF] transition-colors whitespace-nowrap" href="https://mako.hyphen.it.com/terms">이용약관</a>
            <a className="hover:text-[#0066FF] transition-colors whitespace-nowrap" href="https://mako.hyphen.it.com/privacy">개인정보처리방침</a>
            <a className="hover:text-[#0066FF] transition-colors whitespace-nowrap" href="https://mako.hyphen.it.com/contact">제휴 및 문의</a>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-6 tablet:flex-row tablet:items-end tablet:justify-between desktop:flex-row desktop:items-end desktop:justify-between">
          <div className="text-[14px] tablet:text-[15px] desktop:text-[16px] text-[#1C2B3A] text-left">
            <p>© 2026 Hyphen Inc. All Rights Reserved.</p>
          </div>
          <div className="flex justify-start tablet:justify-end desktop:justify-end">
            <p className="text-[64px] tablet:text-[92px] desktop:text-[128px] leading-none font-black text-[#0F7DFF]">MAKO</p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center opacity-0 hover:opacity-100 transition-opacity duration-700 select-none">
        <p className="text-[11px] text-gray-300">끝까지 함께한 당신, 이제 만들 차례예요.</p>
      </div>
    </footer>
  );
}
