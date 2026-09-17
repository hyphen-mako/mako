import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없어요 | MAKO",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F5FAFF] px-5 text-center text-[#162033]">
      <img src="/mako/mako-mascot.png" alt="" className="h-24 w-24 object-contain" />
      <h1 className="mt-6 text-[32px] font-black tablet:text-[40px]">페이지를 찾을 수 없어요</h1>
      <p className="mt-3 max-w-[420px] text-[15px] leading-7 text-[#526477]">
        요청하신 주소가 변경되었거나 존재하지 않습니다.
      </p>
      <a
        href="/"
        className="mt-8 inline-flex min-h-12 items-center rounded-lg bg-[#0F7DFF] px-6 text-[15px] font-bold text-white transition-opacity hover:opacity-85"
      >
        MAKO 홈으로 돌아가기
      </a>
    </main>
  );
}
