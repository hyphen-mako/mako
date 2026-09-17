import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 | MAKO",
  description: "MAKO 웨잇리스트 서비스 이용약관",
};

const TERMS_ITEMS = [
  {
    title: "목적",
    body: "이 약관은 하이픈(이하 \"회사\")이 운영하는 MAKO 웨잇리스트 페이지(이하 \"서비스\")의 이용과 관련하여 회사와 이용자 사이의 권리, 의무 및 책임 사항을 정합니다.",
  },
  {
    title: "서비스 내용",
    body: "서비스는 MAKO 출시 전 웨잇리스트 신청과 관련 안내를 제공합니다. 웨잇리스트에 등록된 이용자에게는 오픈 이벤트 초대와 제품 관련 소식이 안내될 수 있으며, 서비스의 구체적 내용은 출시 시점에 변경될 수 있습니다.",
  },
  {
    title: "웨잇리스트 신청",
    body: "이용자는 유효한 이메일 주소로 웨잇리스트에 신청할 수 있습니다. 타인의 이메일을 무단으로 사용하거나 허위 정보로 신청할 수 없으며, 회사는 부정한 신청을 제한하거나 취소할 수 있습니다.",
  },
  {
    title: "이용자의 의무",
    body: "이용자는 서비스를 이용하며 법령과 이 약관을 위반하는 행위, 서비스의 운영을 방해하는 행위, 회사 또는 제3자의 권리를 침해하는 행위를 해서는 안 됩니다.",
  },
  {
    title: "지식재산권",
    body: "서비스에 게시된 콘텐츠와 MAKO 브랜드, 캐릭터, 로고에 대한 지식재산권은 회사에 귀속됩니다. 이용자는 회사의 사전 동의 없이 이를 복제, 배포, 상업적으로 이용할 수 없습니다.",
  },
  {
    title: "면책",
    body: "회사는 천재지변, 네트워크 장애 등 불가항력으로 서비스를 제공하지 못하는 경우 책임을 지지 않습니다. 웨잇리스트 등록은 서비스 이용이나 오픈 이벤트 참여를 보장하지 않으며, 이벤트 내용과 기간은 사전 안내 후 변경될 수 있습니다.",
  },
  {
    title: "개인정보",
    body: "이용자의 개인정보 수집과 이용에 관한 사항은 개인정보처리방침에 따릅니다.",
  },
  {
    title: "약관의 변경 및 준거법",
    body: "회사는 관계 법령을 위반하지 않는 범위에서 이 약관을 변경할 수 있으며, 변경 시 서비스 내에 공지합니다. 이 약관은 대한민국 법령에 따라 해석되며, 분쟁이 발생한 경우 관할 법원은 민사소송법에 따릅니다.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F5FAFF] px-5 py-8 text-[#162033] tablet:px-8 tablet:py-12">
      <div className="mx-auto w-full max-w-[760px]">
        <a
          href="/"
          className="inline-flex min-h-11 items-center gap-2 text-[15px] font-bold text-[#0B63CE] transition-opacity hover:opacity-70"
        >
          <span aria-hidden="true">←</span>
          MAKO로 돌아가기
        </a>

        <header className="border-b border-[#D8E6F4] pb-8 pt-10">
          <p className="text-[13px] font-black text-[#0F7DFF]">MAKO TERMS</p>
          <h1 className="mt-3 text-[36px] font-black leading-[1.2] tablet:text-[48px]">이용약관</h1>
          <p className="mt-4 max-w-[620px] text-[16px] leading-7 text-[#526477]">
            MAKO 웨잇리스트 서비스 이용과 관련된 기본 약관입니다.
          </p>
          <p className="mt-5 text-[13px] font-semibold text-[#718297]">시행일: 2026년 9월 15일</p>
        </header>

        <div className="divide-y divide-[#D8E6F4]">
          {TERMS_ITEMS.map((item, index) => (
            <section key={item.title} className="grid gap-3 py-8 tablet:grid-cols-[52px_1fr] tablet:gap-5">
              <span className="text-[13px] font-black text-[#0F7DFF]">0{index + 1}</span>
              <div>
                <h2 className="text-[21px] font-black leading-7">{item.title}</h2>
                <p className="mt-3 text-[15px] leading-7 text-[#526477]">{item.body}</p>
              </div>
            </section>
          ))}
        </div>

        <footer className="border-t border-[#D8E6F4] py-8 text-[13px] font-semibold text-[#718297]">
          © 2026 하이픈 (Hyphen). All Rights Reserved.
        </footer>
      </div>
    </main>
  );
}
