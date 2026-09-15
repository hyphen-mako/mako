"use client";
import * as t from 'react/jsx-runtime';
import * as i from 'react';
import {motion,AnimatePresence,useScroll} from 'framer-motion';
import {useRouter} from 'next/navigation';
import Image from 'next/image';
import Lenis from 'lenis';
const s={motion},l={AnimatePresence},X={useRouter},q={default:(props)=>t.jsx(Image,{...props,unoptimized:true})};
const ea={default:({name,size,className})=>t.jsx('i',{className:`${name} ${className||''} inline-block`,style:{fontSize:size,display:'inline-flex',alignItems:'center',justifyContent:'center'},'aria-hidden':true})};
    function QuestionInput({
      onSubmit: e,
      placeholder: n = "사료를 안 먹고 간식만 찾아요",
      placeholders: a,
      inputValue: o,
      onInputChange: r,
      maxWidth: c = "700px",
      borderColor: d = "#3B82F6",
      buttonColor: h = "#1E3A8A",
      buttonHoverColor: p = "#3B82F6",
      disableInitialAnimation: u = !1,
    }) {
      let [m, x] = (0, i.useState)(!1),
        [f, g] = (0, i.useState)(0),
        [w, b] = (0, i.useState)(""),
        [y, v] = (0, i.useState)(!1);
      (0, i.useEffect)(() => {
        let e = () => {
          v(window.matchMedia("(min-width: 1080px)").matches);
        };
        return (
          e(),
          window.addEventListener("resize", e),
          () => window.removeEventListener("resize", e)
        );
      }, []);
      let j = void 0 !== o,
        N = j ? o : w;
      (0, i.useEffect)(() => {
        if (a && a.length > 0) {
          let e = setInterval(() => {
            g((e) => (e + 1) % a.length);
          }, 3e3);
          return () => clearInterval(e);
        }
      }, [a]);
      let S = a ? a[f] : n;
      return (0, t.jsx)(s.motion.form, {
        onSubmit: e,
        className: "w-full",
        style: { maxWidth: c },
        initial: u ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: u
          ? { duration: 0 }
          : { duration: 0.7, ease: "easeOut", delay: 0.9 },
        children: (0, t.jsxs)("div", {
          className: "relative flex items-center",
          onMouseEnter: () => y && x(!0),
          onMouseLeave: () => y && x(!1),
          children: [
            (0, t.jsxs)("div", {
              className:
                "w-full h-[52px] tablet:h-[62px] desktop:h-[72px] bg-white dark:bg-dark-bg-secondary border-2 rounded-full pl-5 tablet:pl-6 desktop:pl-8 pr-[100px] tablet:pr-[130px] desktop:pr-[160px] flex items-center overflow-hidden shadow-lg transition-all [@media(hover:hover)]:hover:shadow-xl [@media(hover:hover)]:hover:border-blue-400",
              style: { borderColor: d },
              children: [
                !N &&
                  a &&
                  (0, t.jsx)(l.AnimatePresence, {
                    mode: "wait",
                    children: (0, t.jsx)(
                      s.motion.span,
                      {
                        initial: { y: 20, opacity: 0 },
                        animate: { y: 0, opacity: 1 },
                        exit: { y: -20, opacity: 0 },
                        transition: { duration: 0.3 },
                        className:
                          "text-[14px] tablet:text-[17px] desktop:text-[20px] text-gray-400 dark:text-gray-500 w-full truncate pointer-events-none",
                        children: S,
                      },
                      f,
                    ),
                  }),
                (0, t.jsx)("input", {
                  type: "text",
                  name: "query",
                  "aria-label": "반려동물 관련 질문 입력",
                  value: N,
                  onChange: (e) => {
                    var t;
                    return ((t = e.target.value), void (j && r ? r(t) : b(t)));
                  },
                  placeholder: a ? "" : S,
                  className:
                    "absolute inset-0 w-full h-full bg-transparent pl-5 tablet:pl-6 desktop:pl-8 pr-[100px] tablet:pr-[130px] desktop:pr-[160px] text-[14px] tablet:text-[17px] desktop:text-[20px] text-gray-800 dark:text-gray-200 focus:outline-none z-10",
                }),
              ],
            }),
            (0, t.jsx)(s.motion.button, {
              type: "submit",
              className:
                "absolute right-1.5 tablet:right-2 desktop:right-2 h-[40px] tablet:h-[48px] desktop:h-[56px] rounded-full flex items-center justify-center text-white shadow-md overflow-hidden z-20",
              animate: { width: m ? 180 : 56, backgroundColor: m ? p : h },
              transition: { duration: 0.3, ease: "easeInOut" },
              children: (0, t.jsxs)("div", {
                className:
                  "flex items-center justify-center gap-0.5 px-3 tablet:px-4 desktop:px-5 whitespace-nowrap",
                children: [
                  (0, t.jsx)(ea.default, {
                    name: "ri-chat-ai-line",
                    size: 20,
                    className:
                      "shrink-0 tablet:w-[22px] tablet:h-[22px] desktop:w-6 desktop:h-6",
                  }),
                  (0, t.jsx)(s.motion.span, {
                    className:
                      "text-[14px] tablet:text-[16px] desktop:text-[18px] font-bold whitespace-nowrap",
                    animate: { opacity: +!!m, width: m ? "auto" : 0 },
                    transition: { duration: 0.3 },
                    children: "질문하러가기",
                  }),
                ],
              }),
            }),
          ],
        }),
      });
    }

export default i.memo(QuestionInput);
