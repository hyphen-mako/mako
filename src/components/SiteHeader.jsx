"use client";
// Homepage header reconstructed from the public site's captured render tree.
import * as t from "react/jsx-runtime";
import * as c from "react";
import {motion, AnimatePresence} from "framer-motion";
const h={motion}, u={AnimatePresence};
const r={default:({href,children,...props})=> <a {...props} href={href==='/'?'/':`https://pickcare.co.kr${href}`}>{children}</a>};
const s={default:({src,...props})=><img src={src} {...props}/>};
const E={default:({name,size,className})=><i className={`${name} ${className||''} inline-block`} style={{display:'inline-flex',alignItems:'center',justifyContent:'center',fontSize:size}}/>};
const providerData=[
 {id:'kakao',label:'카카오 로그인',color:'bg-[#FEE500] hover:bg-[#F4DC00] text-[#3C1E1E]',path:'M12 3C6.48 3 2 6.58 2 11c0 2.8 1.86 5.26 4.64 6.67-.2.74-.72 2.68-.83 3.1-.14.53.2.52.42.38.17-.11 2.76-1.88 3.87-2.65.62.09 1.26.14 1.9.14 5.52 0 10-3.58 10-8s-4.48-8-10-8z'},
 {id:'apple',label:'Apple로 로그인',color:'bg-[#000000] hover:bg-[#1A1A1A] text-white',path:'M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z'}
];
function SocialButtons({size='md',grouped=false,elevated=false,iconLayout='pinned',onBeforeNavigate}){
 const small=size==='sm';
 return <div className="w-full"><div className={grouped?'w-full overflow-hidden rounded-xl shadow-[0_12px_28px_-10px_rgba(16,24,40,0.4)]':'space-y-2'}>{providerData.map(provider=>{
 const icon=<svg className={small?'w-[18px] h-[18px]':'w-5 h-5'} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={provider.path}/></svg>;
 return <motion.button key={provider.id} type="button" aria-label={provider.label} onClick={()=>{onBeforeNavigate?.(); window.location.assign('https://pickcare.co.kr/login');}} className={`relative w-full flex items-center justify-center whitespace-nowrap font-semibold transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${grouped?'':'rounded-xl shadow-sm'} ${small?'h-11 text-[14px] px-3.5':'h-[52px] text-[15px] px-4'} ${provider.color}`} whileHover={grouped?undefined:{scale:1.01}} whileTap={grouped?undefined:{scale:.99}}>{iconLayout==='inline'?<span className="flex items-center gap-2">{icon}{provider.label}</span>:<><span className={`absolute ${small?'left-3.5':'left-4'} flex items-center justify-center`}>{icon}</span>{provider.label}</>}</motion.button>;
 })}</div></div>
}
const m={default:SocialButtons};
    let f = {
        hero: "px-5 h-[48px] min-w-[148px] text-[16px] gap-2 shadow-md hover:shadow-lg",
        compact: "px-4 py-2 min-w-[134px] text-[14px] gap-2 shadow-md",
      },
      x = { hero: "w-4 h-4", compact: "w-3 h-3" },
      p = {
        hero: { offset: "mt-2", buttonSize: "sm", shortLabel: !1 },
        compact: { offset: "mt-1.5", buttonSize: "xs", shortLabel: !0 },
      };
    function g({ variant: e = "hero", className: i = "" }) {
      let [a, s] = (0, c.useState)(!1),
        r = (0, c.useRef)(null),
        n = p[e];
      return (
        (0, c.useEffect)(() => {
          if (!a) return;
          let e = (e) => {
              !r.current || r.current.contains(e.target) || s(!1);
            },
            t = (e) => {
              "Escape" === e.key && s(!1);
            };
          return (
            document.addEventListener("mousedown", e),
            document.addEventListener("touchstart", e),
            document.addEventListener("keydown", t),
            () => {
              (document.removeEventListener("mousedown", e),
                document.removeEventListener("touchstart", e),
                document.removeEventListener("keydown", t));
            }
          );
        }, [a]),
        (0, t.jsxs)("div", {
          ref: r,
          className: `relative w-fit ${i}`,
          children: [
            (0, t.jsxs)(h.motion.button, {
              type: "button",
              onClick: () => s((e) => !e),
              "aria-haspopup": "menu",
              "aria-expanded": a,
              className: `flex items-center justify-center rounded-xl bg-white/90 hover:bg-white backdrop-blur-md text-main font-semibold leading-none transition-all whitespace-nowrap ${f[e]}`,
              whileHover: { scale: 1.02 },
              whileTap: { scale: 0.98 },
              children: [
                "로그인",
                (0, t.jsx)("svg", {
                  className: `${x[e]} shrink-0 transition-transform duration-200 ${a ? "rotate-180" : ""}`,
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: 2,
                  viewBox: "0 0 24 24",
                  "aria-hidden": "true",
                  children: (0, t.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M19 9l-7 7-7-7",
                  }),
                }),
              ],
            }),
            (0, t.jsx)(u.AnimatePresence, {
              children:
                a &&
                (0, t.jsx)(h.motion.div, {
                  role: "menu",
                  className: `absolute top-full right-0 z-50 w-max min-w-full max-w-[260px] origin-top-right ${n.offset}`,
                  initial: { opacity: 0, y: -4, scale: 0.96 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  exit: { opacity: 0, y: -4, scale: 0.96 },
                  transition: { duration: 0.16, ease: "easeOut" },
                  children: (0, t.jsx)(m.default, {
                    size: n.buttonSize,
                    shortLabel: n.shortLabel,
                    elevated: !0,
                    grouped: !0,
                    iconLayout: "inline",
                    onBeforeNavigate: () => s(!1),
                  }),
                }),
            }),
          ],
        })
      );
    }

export default function SiteHeader(){
 const e=null, K=true, p='/', S=false, eo=false, ed='0', em=[];
 const er=c.useRef(null), en=c.useRef(0), v=c.useRef(0), j=c.useRef(null), k=c.useRef(null);
 const [U,G]=c.useState(false),[V,Z]=c.useState(false),[J,Y]=c.useState(false),[X,ee]=c.useState(false),[et,ei]=c.useState(false),[ea,es]=c.useState(false),[N,O]=c.useState(false);
 const eu=()=>{};
 c.useEffect(()=>{
   const show=()=>Y(true),scroll=()=>{const y=window.scrollY; Z(y>en.current&&y>100); G(y>50);en.current=y;};
   window.addEventListener('showHeader',show);window.addEventListener('scroll',scroll,{passive:true});
   return()=>{window.removeEventListener('showHeader',show);window.removeEventListener('scroll',scroll);clearTimeout(j.current);clearTimeout(k.current);};
 },[]);
 c.useEffect(()=>{const previous=document.body.style.overflow; if(X)document.body.style.overflow='hidden';const escape=ev=>{if(ev.key==='Escape')ee(false)};document.addEventListener('keydown',escape);return()=>{document.body.style.overflow=previous;document.removeEventListener('keydown',escape)};},[X]);
 const M=ev=>{if(ev.metaKey||ev.ctrlKey||ev.altKey||ev.shiftKey)return;ev.preventDefault();v.current+=1;clearTimeout(j.current);if(v.current>=5){v.current=0;O(true);clearTimeout(k.current);k.current=setTimeout(()=>O(false),3000);return;}j.current=setTimeout(()=>{v.current=0;window.scrollTo({top:0,behavior:'smooth'});},400);};
 const eh=[{text:'대화하기',href:'/chat',isButton:true},{text:'픽라운지',href:'/lounge'},{text:'커뮤니티',href:'/community'}];
 const ex=`fixed top-0 left-0 right-0 z-[200] px-6 mobile:pt-4 mobile:pb-3 flex items-center justify-center mobile:gap-3 tablet:gap-[10px] desktop:gap-[13px] w-full desktop:h-20 tablet:h-[72px] mobile:h-auto mobile:min-h-[68px] transition-all duration-300 ease-in-out bg-transparent ${V?'-translate-y-full':'translate-y-0'}`;
 const ep={initial:{y:-100,opacity:0},animate:J&&!V?{y:0,opacity:1}:{y:-100,opacity:0},transition:J?{duration:.4,ease:'easeOut',delay:.05*!V}:{duration:0}};
      return (0, t.jsxs)(t.Fragment, {
        children: [
          (0, t.jsx)(h.motion.header, {
            className: `
          fixed top-0 left-0 right-0 z-[200] transition-all duration-300
          ${U ? "h-16" : "h-[80px]"}
          ${ex}
          ${S ? "header-dark-mode" : ""}
        `,
            style: { pointerEvents: "none" },
            ...ep,
            children: (0, t.jsxs)("div", {
              ref: er,
              className: `
            w-full h-full mx-auto flex items-center justify-between transition-all duration-300
            px-0
          `,
              children: [
                (0, t.jsxs)(h.motion.div, {
                  className:
                    "mobile:hidden tablet:flex desktop:flex items-center justify-between w-full",
                  initial: { y: -20, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
                  children: [
                    (0, t.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, t.jsxs)(r.default, {
                          href: "/",
                          onClick: M,
                          className:
                            "flex items-center gap-4 bg-white/90 dark:bg-dark-bg-secondary/90 backdrop-blur-md rounded-xl px-1.5 h-[60px] shadow-md hover:shadow-lg transition-all",
                          style: { pointerEvents: "auto" },
                          children: [
                            (0, t.jsx)(s.default, {
                              src: "/logo.svg",
                              alt: "PiCKCARE icon",
                              width: 48,
                              height: 48,
                              className: "w-12 h-12 rounded-xl",
                            }),
                            (0, t.jsx)(s.default, {
                              src: "/op-image.svg",
                              alt: "PiCKCARE",
                              width: 140,
                              height: 26,
                              className: "w-[140px] h-auto",
                            }),
                          ],
                        }),
                        (0, t.jsx)(u.AnimatePresence, {
                          children:
                            N &&
                            (0, t.jsxs)(h.motion.div, {
                              className:
                                "absolute -bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center z-[9999]",
                              initial: { opacity: 0, y: 20, scale: 0.5 },
                              animate: { opacity: 1, y: 0, scale: 1 },
                              exit: { opacity: 0, y: -10, scale: 0.5 },
                              transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                              },
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "bg-white rounded-xl shadow-lg px-4 py-2 mb-1 whitespace-nowrap border border-gray-100",
                                  children: (0, t.jsx)("p", {
                                    className:
                                      "text-[13px] font-semibold text-gray-800",
                                    children: "반가워요! 🐾 저는 픽케어예요!",
                                  }),
                                }),
                                (0, t.jsx)(s.default, {
                                  src: "/characters/[2D]set_motion_01.webp",
                                  alt: "픽케어 캐릭터",
                                  width: 56,
                                  height: 56,
                                  className:
                                    "w-14 h-14 object-contain animate-bounce",
                                }),
                              ],
                            }),
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "flex items-center gap-0 bg-black/90 dark:bg-black/80 backdrop-blur-md rounded-xl px-1.5 h-[60px] shadow-md hover:shadow-lg transition-all",
                      style: { pointerEvents: "auto" },
                      children: eh.map((e) =>
                        e.isButton
                          ? (0, t.jsx)(
                              r.default,
                              {
                                href: e.href,
                                children: (0, t.jsxs)(h.motion.button, {
                                  className:
                                    "flex items-center justify-center gap-1.5 w-[121px] h-12 bg-main text-white font-semibold text-[18px] leading-none rounded-lg transition-all duration-200 hover:bg-blue-600",
                                  whileHover: { scale: 1.02 },
                                  whileTap: { scale: 0.98 },
                                  children: [
                                    (0, t.jsx)(E.default, {
                                      name: "ri-chat-ai-line",
                                      className: "w-5 h-5",
                                    }),
                                    e.text,
                                  ],
                                }),
                              },
                              e.href,
                            )
                          : "/lounge" === e.href
                            ? (0, t.jsxs)(
                                "div",
                                {
                                  className: "relative group",
                                  children: [
                                    (0, t.jsx)(r.default, {
                                      href: e.href,
                                      children: (0, t.jsxs)(h.motion.div, {
                                        className:
                                          "flex items-center justify-center gap-1 w-[95px] h-12 font-semibold text-[18px] leading-none transition-all duration-200 text-white hover:bg-white/10 rounded-lg",
                                        whileHover: { scale: 1.02 },
                                        whileTap: { scale: 0.98 },
                                        children: [
                                          e.text,
                                          (0, t.jsx)("svg", {
                                            className:
                                              "w-3 h-3 shrink-0 opacity-50 group-hover:opacity-100 transition-opacity",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            viewBox: "0 0 24 24",
                                            children: (0, t.jsx)("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              d: "M19 9l-7 7-7-7",
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, t.jsx)("div", {
                                      className:
                                        "absolute top-full left-1/2 -translate-x-1/2 pt-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200",
                                      children: (0, t.jsxs)("div", {
                                        className:
                                          "bg-black/60 backdrop-blur-xl rounded-b-xl shadow-xl py-2 w-[110px]",
                                        children: [
                                          (0, t.jsx)(r.default, {
                                            href: "/lounge/magazine",
                                            className:
                                              "flex items-center justify-center h-11 text-[15px] font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors no-underline",
                                            children: "매거진",
                                          }),
                                          (0, t.jsx)(r.default, {
                                            href: "/lounge/pickspot",
                                            className:
                                              "flex items-center justify-center h-11 text-[15px] font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors no-underline",
                                            children: "픽스팟",
                                          }),
                                          (0, t.jsx)(r.default, {
                                            href: "/lounge/market",
                                            className:
                                              "flex items-center justify-center h-11 text-[15px] font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors no-underline",
                                            children: "픽마켓",
                                          }),
                                          (0, t.jsx)(r.default, {
                                            href: "/peteventhub",
                                            className:
                                              "flex items-center justify-center h-11 text-[15px] font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors no-underline",
                                            children: "픽페어",
                                          }),
                                          (0, t.jsx)("div", {
                                            className:
                                              "mx-4 my-1.5 border-t border-white/10",
                                          }),
                                          (0, t.jsx)(r.default, {
                                            href: "/picky-lab",
                                            className:
                                              "flex items-center justify-center h-11 text-[15px] font-medium text-blue-400 hover:text-blue-300 hover:bg-white/10 transition-colors no-underline whitespace-nowrap",
                                            children: "픽키랩",
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                },
                                e.href,
                              )
                            : (0, t.jsx)(
                                r.default,
                                {
                                  href: e.href,
                                  children: (0, t.jsx)(h.motion.div, {
                                    className:
                                      "flex items-center justify-center w-[95px] h-12 font-semibold text-[18px] leading-none transition-all duration-200 text-white hover:bg-white/10 rounded-lg",
                                    whileHover: { scale: 1.02 },
                                    whileTap: { scale: 0.98 },
                                    children: e.text,
                                  }),
                                },
                                e.href,
                              ),
                      ),
                    }),
                    (0, t.jsx)("div", {
                      className: "flex items-center gap-3",
                      style: { pointerEvents: "auto" },
                      children:
                        K &&
                        (e
                          ? (0, t.jsx)(t.Fragment, {
                              children: (0, t.jsxs)("div", {
                                className:
                                  "flex items-center gap-2 bg-black/15 dark:bg-black/20 backdrop-blur-md rounded-xl px-1.5 h-[60px] shadow-md hover:shadow-lg transition-all",
                                children: [
                                  (0, t.jsx)(r.default, {
                                    href: "/notifications",
                                    children: (0, t.jsxs)(h.motion.div, {
                                      className:
                                        "relative flex items-center justify-center w-12 h-12 bg-main hover:bg-blue-600 rounded-xl transition-all duration-200",
                                      whileHover: { scale: 1.05 },
                                      whileTap: { scale: 0.95 },
                                      children: [
                                        (0, t.jsx)(E.default, {
                                          name: "ri-notification-3-line",
                                          size: 20,
                                          className: "text-white",
                                        }),
                                        eo &&
                                          (0, t.jsx)("div", {
                                            className:
                                              "absolute -top-2 -right-2 min-w-[24px] h-[24px] px-1 bg-main-blue-dark rounded-full flex items-center justify-center text-[12px] font-bold text-white border-2 border-white",
                                            children: ed,
                                          }),
                                      ],
                                    }),
                                  }),
                                  p.includes("mypage")
                                    ? (0, t.jsx)(h.motion.button, {
                                        onClick: eu,
                                        className:
                                          "flex items-center justify-center w-[110px] h-12 bg-white text-main font-semibold text-[18px] leading-none hover:bg-gray-50 rounded-full transition-all shadow-sm",
                                        whileHover: { scale: 1.02 },
                                        whileTap: { scale: 0.98 },
                                        children: "로그아웃",
                                      })
                                    : (0, t.jsx)(r.default, {
                                        href: "/mypage",
                                        children: (0, t.jsx)(h.motion.div, {
                                          className:
                                            "flex items-center justify-center w-[110px] h-12 bg-white text-main font-semibold text-[18px] leading-none hover:bg-gray-50 rounded-full transition-all shadow-sm",
                                          whileHover: { scale: 1.02 },
                                          whileTap: { scale: 0.98 },
                                          children: "마이페이지",
                                        }),
                                      }),
                                ],
                              }),
                            })
                          : (0, t.jsx)(g, { variant: "hero" })),
                    }),
                  ],
                }),
                (0, t.jsxs)(h.motion.div, {
                  className:
                    "desktop:hidden tablet:hidden flex items-center justify-between w-full",
                  initial: { y: -20, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
                  children: [
                    (0, t.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, t.jsx)(r.default, {
                          href: "/",
                          onClick: M,
                          className: "flex items-center",
                          style: { pointerEvents: "auto" },
                          children: (0, t.jsx)(s.default, {
                            src: "/logo.svg",
                            alt: "PiCKCARE icon",
                            width: 40,
                            height: 40,
                            className: "rounded-lg",
                          }),
                        }),
                        (0, t.jsx)(u.AnimatePresence, {
                          children:
                            N &&
                            (0, t.jsxs)(h.motion.div, {
                              className:
                                "absolute -bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center z-[9999]",
                              initial: { opacity: 0, y: 20, scale: 0.5 },
                              animate: { opacity: 1, y: 0, scale: 1 },
                              exit: { opacity: 0, y: -10, scale: 0.5 },
                              transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                              },
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "bg-white rounded-xl shadow-lg px-4 py-2 mb-1 whitespace-nowrap border border-gray-100",
                                  children: (0, t.jsx)("p", {
                                    className:
                                      "text-[13px] font-semibold text-gray-800",
                                    children: "반가워요! 🐾 저는 픽케어예요!",
                                  }),
                                }),
                                (0, t.jsx)(s.default, {
                                  src: "/characters/[2D]set_motion_01.webp",
                                  alt: "픽케어 캐릭터",
                                  width: 56,
                                  height: 56,
                                  className:
                                    "w-14 h-14 object-contain animate-bounce",
                                }),
                              ],
                            }),
                        }),
                      ],
                    }),
                    (0, t.jsx)(h.motion.button, {
                      onClick: () => ee(!X),
                      className:
                        "flex items-center justify-center w-10 h-10 rounded-lg bg-white/90 dark:bg-dark-bg-secondary/90 backdrop-blur-md shadow-md hover:shadow-lg transition-all",
                      style: { pointerEvents: "auto" },
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      "aria-label": "메뉴 열기",
                      children: (0, t.jsx)("svg", {
                        className: "w-6 h-6 text-gray-800 dark:text-gray-200",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        viewBox: "0 0 24 24",
                        children: X
                          ? (0, t.jsx)("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              d: "M6 18L18 6M6 6l12 12",
                            })
                          : (0, t.jsx)("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              d: "M4 6h16M4 12h16M4 18h16",
                            }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, t.jsx)(u.AnimatePresence, {
            children:
              X &&
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(h.motion.div, {
                    className:
                      "desktop:hidden tablet:hidden fixed inset-0 z-[190] bg-black/50 backdrop-blur-sm",
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    transition: { duration: 0.2 },
                    onClick: () => ee(!1),
                  }),
                  (0, t.jsx)(h.motion.div, {
                    className:
                      "desktop:hidden tablet:hidden fixed top-[68px] left-0 right-0 z-[195] bg-white dark:bg-dark-bg-primary shadow-2xl mx-4 rounded-2xl overflow-hidden",
                    initial: { opacity: 0, y: -20, scale: 0.95 },
                    animate: { opacity: 1, y: 0, scale: 1 },
                    exit: { opacity: 0, y: -20, scale: 0.95 },
                    transition: { duration: 0.3, ease: "easeOut" },
                    children: (0, t.jsxs)("div", {
                      className: "p-4 flex flex-col gap-2.5",
                      children: [
                        eh.map((e) => {
                          let i =
                            p === e.href ||
                            ("/lounge" === e.href && p.includes("/lounge"));
                          return "/lounge" === e.href
                            ? (0, t.jsxs)(
                                "div",
                                {
                                  children: [
                                    (0, t.jsx)("button", {
                                      onClick: () => ei(!et),
                                      className: "w-full block",
                                      children: (0, t.jsxs)(h.motion.div, {
                                        className: `flex items-center justify-between px-4 py-3 rounded-xl font-medium text-[15px] transition-all duration-200 ${i ? "bg-main/10 dark:bg-dark-main/10 text-main dark:text-dark-main" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}`,
                                        whileTap: { scale: 0.98 },
                                        children: [
                                          e.text,
                                          (0, t.jsx)(h.motion.svg, {
                                            className: "w-4 h-4 opacity-50",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            viewBox: "0 0 24 24",
                                            animate: { rotate: 180 * !!et },
                                            transition: { duration: 0.2 },
                                            children: (0, t.jsx)("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              d: "M19 9l-7 7-7-7",
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, t.jsx)(u.AnimatePresence, {
                                      children:
                                        et &&
                                        (0, t.jsx)(h.motion.div, {
                                          className:
                                            "ml-4 flex flex-col gap-1 overflow-hidden",
                                          initial: { height: 0, opacity: 0 },
                                          animate: {
                                            height: "auto",
                                            opacity: 1,
                                          },
                                          exit: { height: 0, opacity: 0 },
                                          transition: { duration: 0.2 },
                                          children: [
                                            {
                                              text: "픽라운지 홈",
                                              href: "/lounge",
                                            },
                                            {
                                              text: "매거진",
                                              href: "/lounge/magazine",
                                            },
                                            {
                                              text: "픽스팟",
                                              href: "/lounge/pickspot",
                                            },
                                            {
                                              text: "픽마켓",
                                              href: "/lounge/market",
                                            },
                                            {
                                              text: "픽페어",
                                              href: "/peteventhub",
                                            },
                                            {
                                              text: "픽키랩",
                                              href: "/picky-lab",
                                              highlight: !0,
                                            },
                                          ].map((e) =>
                                            (0, t.jsx)(
                                              r.default,
                                              {
                                                href: e.href,
                                                onClick: () => ee(!1),
                                                className: "block",
                                                children: (0, t.jsx)("div", {
                                                  className: `px-4 py-2.5 rounded-lg text-[13px] font-medium transition-colors ${p === e.href || p.includes(e.href) ? "text-main dark:text-dark-main" : e.highlight ? "text-blue-500 dark:text-blue-400" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"}`,
                                                  children: e.text,
                                                }),
                                              },
                                              e.href,
                                            ),
                                          ),
                                        }),
                                    }),
                                  ],
                                },
                                e.href,
                              )
                            : (0, t.jsx)(
                                r.default,
                                {
                                  href: e.href,
                                  onClick: () => ee(!1),
                                  className: "block",
                                  children: (0, t.jsxs)(h.motion.div, {
                                    className: `flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-[15px] transition-all duration-200 ${e.isButton ? "bg-main dark:bg-dark-main text-white shadow-md" : i ? "bg-main/10 dark:bg-dark-main/10 text-main dark:text-dark-main" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}`,
                                    whileHover: { scale: 1.02 },
                                    whileTap: { scale: 0.98 },
                                    children: [
                                      e.isButton &&
                                        (0, t.jsx)(E.default, {
                                          name: "ri-chat-ai-line",
                                          className: "w-5 h-5",
                                        }),
                                      e.text,
                                    ],
                                  }),
                                },
                                e.href,
                              );
                        }),
                        (0, t.jsx)("div", {
                          className: "h-px bg-gray-200 dark:bg-gray-700 my-2",
                        }),
                        K &&
                          (e
                            ? (0, t.jsx)("div", {
                                className: "space-y-2",
                                children: em.map((e, i) => {
                                  let a = p === e.href,
                                    s = e.isNotification
                                      ? "알림"
                                      : "/mypage" === e.href
                                        ? "마이페이지"
                                        : "로그아웃";
                                  return e.onClick
                                    ? (0, t.jsxs)(
                                        h.motion.button,
                                        {
                                          onClick: () => {
                                            (e.onClick(), ee(!1));
                                          },
                                          className:
                                            "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200",
                                          whileHover: { scale: 1.02 },
                                          whileTap: { scale: 0.98 },
                                          children: [
                                            (0, t.jsx)("div", {
                                              className:
                                                "w-5 h-5 flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5 [&>svg>*]:!fill-current [&_path]:!fill-current [&_*]:!fill-current",
                                              children: e.icon,
                                            }),
                                            (0, t.jsx)("span", {
                                              className:
                                                "font-medium text-[15px]",
                                              children: s,
                                            }),
                                          ],
                                        },
                                        i,
                                      )
                                    : (0, t.jsx)(
                                        r.default,
                                        {
                                          href: e.href,
                                          onClick: () => ee(!1),
                                          children: (0, t.jsxs)(h.motion.div, {
                                            className: `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${a ? "bg-main/10 dark:bg-dark-main/10 text-main dark:text-dark-main" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}`,
                                            whileHover: { scale: 1.02 },
                                            whileTap: { scale: 0.98 },
                                            children: [
                                              (0, t.jsx)("div", {
                                                className:
                                                  "relative w-5 h-5 flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5 [&>svg>*]:!fill-current [&_path]:!fill-current [&_*]:!fill-current",
                                                children: e.icon,
                                              }),
                                              (0, t.jsx)("span", {
                                                className:
                                                  "font-medium text-[15px]",
                                                children: s,
                                              }),
                                              e.isNotification &&
                                                eo &&
                                                (0, t.jsx)("div", {
                                                  className:
                                                    "ml-auto w-2 h-2 bg-red-500 rounded-full",
                                                }),
                                            ],
                                          }),
                                        },
                                        e.href,
                                      );
                                }),
                              })
                            : (0, t.jsx)("div", {
                                className: "space-y-2",
                                children: (0, t.jsx)(m.default, {
                                  size: "md",
                                  onBeforeNavigate: () => ee(!1),
                                }),
                              })),
                      ],
                    }),
                  }),
                ],
              }),
          }),
          ea &&
            (0, t.jsx)("div", {
              className:
                "fixed inset-0 z-[300] flex items-center justify-center bg-black/50",
              children: (0, t.jsxs)(h.motion.div, {
                className:
                  "bg-white dark:bg-dark-bg-secondary rounded-[16px] p-6 w-[300px] text-center shadow-xl",
                initial: { scale: 0.9, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                transition: { duration: 0.2 },
                children: [
                  (0, t.jsx)("div", {
                    className:
                      "text-[18px] font-bold text-[#111827] dark:text-dark-text-primary mb-2",
                    children: "개발 예정",
                  }),
                  (0, t.jsx)("p", {
                    className:
                      "text-[14px] text-[#6B7280] dark:text-dark-text-secondary mb-5",
                    children: "해당 기능은 현재 개발 중입니다.",
                  }),
                  (0, t.jsx)("button", {
                    type: "button",
                    onClick: () => es(!1),
                    className:
                      "h-10 px-6 rounded-[10px] bg-main text-white text-[14px] font-semibold hover:bg-main/90 transition-colors",
                    children: "확인",
                  }),
                ],
              }),
            }),
        ],
      });
    }
