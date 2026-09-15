# GlobalMascotEffects Specification

## Overview
- Target: `src/components/GlobalMascotEffects.jsx`.
- Source authority: `work/source/70b2616b3c88fdb6.js`, module 998655, exported through module 945635; mounted as F by `work/source/shell.pretty.js` on public pages including `/`.
- Interaction model: keyboard sequence, inactivity timer, calendar/date plus sessionStorage.
- Source markup and motion props are retained verbatim; no server or authentication dependency.
- Screenshot: hidden by default; visual reference is exact original source states.

## DOM Structure and Exact Classes
Three AnimatePresence siblings: parade overlay, idle mascot, holiday confetti/toast.

### Parade
- Outer: `fixed inset-0 pointer-events-none z-[9999] overflow-hidden`.
- Six motion.img: `absolute w-16 h-16 object-contain`, alt `픽케어 캐릭터`.
- Initial x=-80, y=100+70*index. Animate x=[-80,window.innerWidth+80], y=[100+70*index,100+70*index-20,100+70*index].
- Transition: duration 4s, delay .3*index, ease linear; y duration .6s, repeat6, repeatType reverse, ease easeInOut.
- Banner: `absolute top-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl px-6 py-3 border border-gray-100`.
- Banner initial opacity0/y-20; animate opacity1/y0; exit opacity0.
- Banner p: `text-[15px] font-bold text-gray-800`.
- Text: `🎮 코나미 코드 발동! 픽케어 퍼레이드! 🐾`.

### Idle Mascot
- Outer: `fixed bottom-6 right-6 z-[9998] pointer-events-none flex flex-col items-center`.
- Initial x80/opacity0; animate x0/opacity1; exit x80/opacity0; spring stiffness200 damping20.
- Bubble: `bg-white rounded-xl shadow-lg px-4 py-2 mb-2 border border-gray-100`.
- p: `text-[12px] text-gray-600 whitespace-nowrap`; text `뭐 하고 있어요? 👀`.
- Image: /characters/[2D]set_motion_04.webp, alt `궁금한 픽케어`, width64 height64, `w-16 h-16 object-contain`.

### Calendar Greeting
- Confetti wrapper: `fixed inset-0 pointer-events-none z-[9999] overflow-hidden`.
- 30 span elements: `absolute animate-confetti-fall`, text ●.
- Per confetti random left0–100%, delay0–2s, duration2–4s, fontSize12–24px.
- Color randomly one of #FF6B6B,#4ECDC4,#FFE66D,#95E1D3,#F38181,#0066FF.
- Toast: `fixed top-20 left-1/2 -translate-x-1/2 z-[10000] pointer-events-none`.
- Initial opacity0/y-30/scale.8; animate opacity1/y0/scale1; exit opacity0/y-20; spring stiffness200 damping15.
- Inner: `bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl px-8 py-4 border border-gray-100`.
- p: `text-[16px] font-bold text-gray-800 text-center`.

## States and Behaviors
- Key sequence by KeyboardEvent.code: ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,KeyB,KeyA.
- Matching sequence opens parade for6000ms; sequence mismatch resets index0; completed sequence resets index0.
- Every keydown also resets idle clock.
- Idle timer resets on mousemove,mousedown,touchstart,scroll and keydown. Timer initializes on mount.
- After180000ms without activity, show idle mascot for4000ms. Any activity immediately hides mascot and restarts timer.
- Local calendar date01-01: `새해 복 많이 받으세요! 🎉`.
- Local calendar date10-04: `세계 동물의 날을 축하합니다! 🐾`.
- Local calendar date12-25: `메리 크리스마스! 🎄`.
- Once per session per date: sessionStorage `pickcare-confetti-MM-DD` set `shown`; greeting/confetti visible5000ms.
- Event listeners and main inactivity timer removed on unmount exactly as source.
- No clickable or hover state; all overlays pointer-events-none.

## Assets
- `/characters/[2D]set_motion_01.webp` through `/characters/[2D]set_motion_06.webp`.
- Preserve original local binary files. Idle mascot uses04 from same set.

## Responsive Behavior
- Source uses identical dimensions at all viewport widths; no media-specific classes in this component.
- Parade end x reads current window.innerWidth+80.
- Global CSS reference supplies classes and `animate-confetti-fall` keyframes.
