"use client";

import QuestionInput from "./QuestionInput";

export default function WaitlistSection() {
  return (
    <section id="waitlist-bottom" className="relative z-20 overflow-hidden bg-[#0F7DFF] px-6 py-16 text-white tablet:px-10 tablet:py-20 desktop:px-16 desktop:py-24">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-10 tablet:flex-row tablet:justify-between desktop:flex-row desktop:justify-between">
        <div className="max-w-[640px] text-center tablet:text-left desktop:text-left">
          <p className="mb-3 text-[14px] font-bold text-white/70">MAKO EARLY ACCESS</p>
          <h2 className="text-[34px] font-black leading-[1.2] tablet:text-[44px] desktop:text-[52px]">
            첫 콘텐츠를 만드는 날,
            <br />
            가장 먼저 초대할게요.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-white/80 tablet:text-[18px] desktop:text-[18px]">
            카드뉴스와 AI 영상의 출시 소식을
            <br className="mobile:block tablet:hidden desktop:hidden" /> 가장 먼저 받아보세요.
          </p>
          <div className="mt-7">
            <QuestionInput source="footer" maxWidth="620px" borderColor="#FFFFFF" buttonColor="#162033" inverted />
          </div>
        </div>
        <img
          src="/mako/poses/mako-celebrate.png"
          alt="출시를 축하하는 마코"
          className="h-auto w-[260px] shrink-0 object-contain tablet:w-[300px] desktop:w-[360px]"
          loading="lazy"
        />
      </div>
    </section>
  );
}
