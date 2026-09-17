const SOCIAL_LINKS = [
  {
    name: '인스타그램',
    url: 'https://www.instagram.com/mako_platform',
    icon: 'ri-instagram-line',
  },
  {
    name: '스레드',
    url: 'https://www.threads.com/@mako_platform',
    icon: 'ri-threads-line',
  },
];

const BUSINESS_INFO = [
  '상호: 하이픈',
  '대표: 박준원',
  '사업자등록번호: 325-30-02020',
  '주소: 경기도 구리시 건원대로 67, 3층 (인창동, 한진빌딩)',
  '대표전화: 010-9145-5226',
];

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
            <div className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-xl bg-black/10 p-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-[#1C2B3A] text-white transition-colors hover:bg-[#2A3A4F] tablet:h-10 tablet:w-10"
                >
                  <i className={`${social.icon} inline-flex h-4 w-4 items-center justify-center text-[14px]`} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="푸터 메뉴" className="grid grid-cols-2 gap-x-8 gap-y-4 text-[14px] font-semibold text-[#23344A] tablet:flex tablet:gap-8 desktop:flex desktop:gap-8">
            <a href="#guide" className="transition-colors hover:text-[#0F7DFF]">사용 방법</a>
            <a href="#services" className="transition-colors hover:text-[#0F7DFF]">제작 기능</a>
            <a href="#waitlist-bottom" className="transition-colors hover:text-[#0F7DFF]">오픈 이벤트</a>
            <a href="/terms" className="transition-colors hover:text-[#0F7DFF]">이용약관</a>
            <a href="/privacy" className="transition-colors hover:text-[#0F7DFF]">개인정보처리방침</a>
          </nav>
        </div>

        <div className="mt-10 border-t border-[#D9E3EE] pt-6">
          <address className="flex flex-wrap gap-x-3 gap-y-1 text-[12px] not-italic leading-relaxed text-[#7A899B]">
            {BUSINESS_INFO.map((info) => (
              <span key={info} className="whitespace-nowrap">{info}</span>
            ))}
            <a
              href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=3253002020"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap underline decoration-[#B9C6D4] underline-offset-2 transition-colors hover:text-[#0F7DFF]"
            >
              사업자정보확인
            </a>
          </address>
        </div>

        <div className="mt-4 flex flex-col gap-2 text-[12px] text-[#7A899B] tablet:flex-row tablet:items-center tablet:justify-between desktop:flex-row desktop:items-center desktop:justify-between">
          <p>© 2026 하이픈 (Hyphen). All Rights Reserved.</p>
          <p>mako-landing.hyphen.it.com</p>
        </div>
      </div>
    </footer>
  );
}
