'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

const STORAGE_KEY = 'pcf_welcome_tutorial_seen_v1';
const STEPS = [
  { image: '/images/Character_Official_Source/01.main_motion.001.webp', alt: '픽케어 마스코트 Picky 캐릭터', title: '안녕! 나는 Picky야', body: '반려 생활의 모든 순간,\nPicky가 네 곁에서 함께할게.' },
  { image: '/images/main/sec2_picky_computer.svg', alt: 'Picky가 컴퓨터로 정보를 찾는 일러스트', title: '궁금한 건 바로 물어봐!', body: '홈 화면의 질문창에 편하게 말해봐.\n"우리 아이 사료 추천해줘"처럼 자유롭게!' },
  { image: '/images/Character_Official_Source/03.set_motion.005.webp', alt: '반려동물과 함께하는 Picky 일러스트', title: '그럼 첫 질문 해볼까?', body: '반려 생활의 어떤 고민이든\nPicky가 답해줄게.' },
];

function markSeen() { try { window.localStorage.setItem(STORAGE_KEY, '1'); } catch {} }

export default function WelcomeTutorial() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [remember, setRemember] = useState(true);
  const dismissed = useRef(false);

  useEffect(() => {
    try { if (window.localStorage.getItem(STORAGE_KEY) === '1') return; } catch { return; }
    let timer = null;
    let shown = false;
    const show = () => { if (!shown) { shown = true; setOpen(true); } };
    const unlocked = () => { if (timer) clearTimeout(timer); timer = setTimeout(show, 300); };
    window.addEventListener('home-scroll-unlocked', unlocked, { once: true });
    const fallback = setTimeout(show, 5000);
    return () => { window.removeEventListener('home-scroll-unlocked', unlocked); if (timer) clearTimeout(timer); clearTimeout(fallback); };
  }, []);

  const dismiss = useCallback(() => {
    if (dismissed.current) return;
    dismissed.current = true;
    if (remember) markSeen();
    setOpen(false);
  }, [remember]);

  useEffect(() => {
    if (!open) return;
    const keydown = (event) => { if (event.key === 'Escape') dismiss(); };
    window.addEventListener('keydown', keydown);
    return () => window.removeEventListener('keydown', keydown);
  }, [open, dismiss]);

  const item = STEPS[step];
  const buttonClass = 'flex h-11 flex-1 items-center justify-center rounded-[10px] bg-main px-4 text-[13px] font-bold text-white transition-colors hover:bg-[#1A8CFF]';

  return <AnimatePresence>{open && <motion.div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4 py-6"
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }}
    onClick={(event) => { if (event.target === event.currentTarget) dismiss(); }} role="presentation">
    <motion.div role="dialog" aria-modal="true" aria-labelledby="welcome-tutorial-title"
      initial={{ scale: 0.95, opacity: 0, y: 10 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0 }}
      transition={{ type: 'spring', duration: 0.4, bounce: 0.2 }}
      className="relative w-full max-w-[92vw] overflow-hidden rounded-[20px] bg-white shadow-[0_12px_32px_rgba(15,125,255,0.14)] tablet:max-w-[480px] desktop:max-w-[560px]">
      <button type="button" aria-label="튜토리얼 닫기" onClick={dismiss}
        className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-sub4 backdrop-blur-sm transition-colors hover:bg-white hover:text-black">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
      </button>
      <div className="flex min-h-[420px] flex-col tablet:min-h-[340px] tablet:flex-row desktop:min-h-[360px] desktop:flex-row">
        <div className="relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-br from-sub2 via-white to-[#FFE7DD] p-4 tablet:w-[45%] tablet:p-6 desktop:w-[45%] desktop:p-6" style={{ minHeight: 160 }}>
          <AnimatePresence mode="wait"><motion.div key={`img-${step}`} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.3 }} className="relative h-28 w-28 tablet:h-40 tablet:w-40 desktop:h-48 desktop:w-48">
            <Image src={item.image} alt={item.alt} fill sizes="(max-width: 767px) 112px, (max-width: 1079px) 160px, 192px" className="object-contain drop-shadow-[0_8px_20px_rgba(15,125,255,0.15)]" priority unoptimized />
          </motion.div></AnimatePresence>
        </div>
        <div className="flex flex-1 flex-col p-5 tablet:p-6 desktop:p-7">
          <div className="mb-5 flex gap-1.5" role="tablist" aria-label="튜토리얼 진행">
            {STEPS.map((_, index) => <button key={index} type="button" role="tab" aria-selected={index === step} aria-label={`스텝 ${index + 1} / ${STEPS.length}`} onClick={() => setStep(index)} className={`h-1 rounded-full transition-all ${index === step ? 'w-8 bg-main' : 'w-5 bg-sub2 hover:bg-sub3'}`} />)}
          </div>
          <AnimatePresence mode="wait"><motion.div key={`content-${step}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="flex-1">
            <h2 id="welcome-tutorial-title" className="mb-3 break-keep text-[18px] font-black leading-tight text-black tablet:text-[20px] desktop:text-[22px]">{item.title}</h2>
            <p className="whitespace-pre-line break-keep text-[13px] leading-relaxed text-sub4 tablet:text-[14px] desktop:text-[14px]">{item.body}</p>
          </motion.div></AnimatePresence>
          <div className="mt-6 flex flex-col gap-3">
            <div className="flex gap-2">
              {step !== 0 && <button type="button" onClick={() => setStep(step - 1)} className="flex h-11 items-center justify-center rounded-[10px] border border-sub2 bg-white px-4 text-[13px] font-bold text-sub4 transition-colors hover:bg-sub2/40">이전</button>}
              {step === STEPS.length - 1 ? <button type="button" autoFocus className={buttonClass} onClick={() => { markSeen(); setOpen(false); window.location.assign('https://pickcare.co.kr/chat'); }}>Picky에게 물어보기</button> : <button type="button" autoFocus className={buttonClass} onClick={() => setStep(step + 1)}>다음</button>}
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <label className="flex cursor-pointer items-center gap-1.5 text-sub4 select-none"><input type="checkbox" checked={remember} onChange={(event) => setRemember(event.target.checked)} className="h-3.5 w-3.5 accent-main" />다시 보지 않기</label>
              <button type="button" onClick={dismiss} className="text-sub4 underline-offset-2 hover:text-black hover:underline">건너뛰기</button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>}</AnimatePresence>;
}
