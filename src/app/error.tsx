"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F5FAFF] px-5 text-center text-[#162033]">
      <img src="/mako/mako-mascot.webp" alt="" className="h-24 w-24 object-contain" />
      <h1 className="mt-6 text-[32px] font-black tablet:text-[40px]">문제가 발생했어요</h1>
      <p className="mt-3 max-w-[420px] text-[15px] leading-7 text-[#526477]">
        일시적인 오류입니다. 잠시 후 다시 시도해주세요.
      </p>
      <div className="mt-8 flex gap-3">
        <button
          onClick={reset}
          className="inline-flex min-h-12 items-center rounded-lg bg-[#0F7DFF] px-6 text-[15px] font-bold text-white transition-opacity hover:opacity-85"
        >
          다시 시도
        </button>
        <a
          href="/"
          className="inline-flex min-h-12 items-center rounded-lg border border-[#0F7DFF] px-6 text-[15px] font-bold text-[#0F7DFF] transition-opacity hover:opacity-70"
        >
          홈으로
        </a>
      </div>
    </main>
  );
}
