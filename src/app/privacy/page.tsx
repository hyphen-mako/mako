import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | MAKO",
  description: "MAKO 웨잇리스트 개인정보 수집 및 이용 안내",
};

const POLICY_ITEMS = [
  {
    title: "수집하는 개인정보",
    body: "웨잇리스트 신청 시 이메일 주소를 수집합니다. 서비스는 신청 경로, 최초 신청 시각, 최근 신청 시각과 재신청 횟수를 함께 기록할 수 있습니다.",
  },
  {
    title: "수집 및 이용 목적",
    body: "MAKO 출시 소식, 얼리 액세스 초대와 제품 관련 주요 안내를 전달하기 위해 사용합니다.",
  },
  {
    title: "보유 및 이용 기간",
    body: "수집 목적이 달성되거나 동의를 철회할 때까지 보관하며, 관계 법령에 따라 보존할 필요가 있는 경우에는 해당 기간 동안 보관합니다.",
  },
  {
    title: "동의 거부 및 철회",
    body: "개인정보 수집에 동의하지 않을 수 있으나 웨잇리스트 신청은 제한됩니다. 안내 메일의 수신 거부 기능을 이용하거나 운영팀에 요청해 동의를 철회할 수 있습니다.",
  },
  {
    title: "문의 및 삭제 요청",
    body: "개인정보 열람, 정정, 삭제 또는 처리 정지는 hyphendev2025@gmail.com으로 요청할 수 있습니다.",
  },
  {
    title: "개인정보 보호책임자",
    body: "개인정보 처리에 관한 문의는 개인정보 보호책임자에게 연락해주세요. 책임자: 박준원 · 이메일: hyphendev2025@gmail.com · 전화: 010-9145-5226",
  },
];

export default function PrivacyPage() {
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
          <p className="text-[13px] font-black text-[#0F7DFF]">MAKO PRIVACY</p>
          <h1 className="mt-3 text-[36px] font-black leading-[1.2] tablet:text-[48px]">개인정보처리방침</h1>
          <p className="mt-4 max-w-[620px] text-[16px] leading-7 text-[#526477]">
            MAKO는 웨잇리스트 신청에 필요한 최소한의 정보만 수집하고, 아래 목적 안에서 안전하게 처리합니다.
          </p>
          <p className="mt-5 text-[13px] font-semibold text-[#718297]">시행일: 2026년 9월 15일</p>
        </header>

        <div className="divide-y divide-[#D8E6F4]">
          {POLICY_ITEMS.map((item, index) => (
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
