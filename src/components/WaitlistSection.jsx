"use client";

import QuestionInput from "./QuestionInput";

export default function WaitlistSection() {
  return (
    <section id="waitlist-bottom" className="waitlist-section relative z-20 overflow-hidden px-6 py-16 text-white tablet:px-10 tablet:py-20 desktop:px-16 desktop:py-24">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-10 tablet:flex-row tablet:justify-between desktop:flex-row desktop:justify-between">
        <div className="max-w-[640px] text-center tablet:text-left desktop:text-left">
          <p className="mb-3 text-[14px] font-bold text-white">MAKO OPEN EVENT</p>
          <h2 className="keep-all text-[34px] font-black leading-[1.2] tablet:text-[44px] desktop:text-[52px]">
            카드뉴스 무한 생성,
            <br />
            오픈 이벤트로 시작하세요.
          </h2>
          <p className="keep-all mt-5 text-[16px] leading-relaxed text-white tablet:text-[18px] desktop:text-[18px]">
            웨잇리스트에 등록하면 카드뉴스를 제한 없이 만들 수 있는
            <br className="mobile:hidden" /> 오픈 이벤트 초대를 가장 먼저 보내드려요.
          </p>
          <div className="mt-7">
            <QuestionInput source="footer" maxWidth="620px" borderColor="#FFFFFF" buttonColor="#162033" inverted />
          </div>
        </div>
        <img
          src="/mako/poses/mako-celebrate.webp"
          width={1254}
          height={1254}
          alt="출시를 축하하는 마코"
          className="h-auto w-[260px] shrink-0 object-contain tablet:w-[300px] desktop:w-[360px]"
          loading="lazy"
        />
      </div>
    </section>
  );
}
