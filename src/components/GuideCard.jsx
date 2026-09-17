"use client";
import * as t from 'react/jsx-runtime';
import * as i from 'react';
import {m,AnimatePresence,useScroll} from 'framer-motion';
import {useRouter} from 'next/navigation';
import Image from 'next/image';
import Lenis from 'lenis';
const s={m},l={AnimatePresence},X={useRouter},q={default:(props)=>t.jsx(Image,{...props,unoptimized:true})};
    export const CardHoverContext = (0, i.createContext)({
      hoveredIndex: -1,
      setHoveredIndex: () => {},
    });
    function GuideCard({ card: e, idx: l, isVisible: n, totalCards: a, onSettle: o }) {
      let { hoveredIndex: r, setHoveredIndex: c } = (0, i.useContext)(CardHoverContext),
        d = r === l,
        h = (0, i.useRef)(!1);
      n && (h.current = !0);
      let p =
          0 === l
            ? {
                src: "/mako/poses/mako-analytics.webp",
                className:
                  "absolute -top-14 right-6 w-[220px] desktop:w-[250px] h-auto",
              }
            : 1 === l
              ? {
                  src: "/mako/poses/mako-create.webp",
                  className:
                    "absolute -top-8 right-5 w-[220px] desktop:w-[250px] h-auto",
                }
              : 2 === l
                ? {
                    src: "/mako/poses/mako-celebrate.webp",
                    className:
                      "absolute -top-8 right-5 w-[220px] desktop:w-[250px] h-auto",
                  }
                : {
                    src: "/mako/poses/mako-sad.webp",
                    className:
                      "absolute -top-8 right-5 w-[220px] desktop:w-[250px] h-auto",
                  },
        u = 0;
      return (
        -1 !== r && r !== l && (l < r ? (u = -30) : l > r && (u = 30)),
        (0, t.jsxs)(s.m.div, {
          className: `relative w-[280px] h-[380px] mobile:w-[280px] mobile:h-[380px] tablet:w-[320px] tablet:h-[420px] desktop:w-[385px] desktop:h-[485px] ${e.bg} rounded-[24px] p-6 shadow-2xl flex flex-col cursor-pointer`,
          style: {
            marginLeft: 0 === l ? 0 : "-50px",
            zIndex: d ? 100 : e.zIndex,
          },
          initial: { opacity: 0, y: 100, rotateZ: e.rotate },
          animate: n
            ? {
                opacity: 1,
                y: 0,
                rotateZ: d ? 0 : e.rotate,
                scale: d ? 1.05 : 1,
                x: u,
              }
            : { opacity: 0, y: 100, rotateZ: e.rotate },
          transition: { duration: 0.5, ease: "easeOut" },
          onAnimationComplete: () => {
            n && o?.(l);
          },
          onHoverStart: () => c(l),
          onHoverEnd: () => c(-1),
          children: [
            (0, t.jsx)("img", {
              src: p.src,
              alt: "",
              "aria-hidden": "true",
              draggable: !1,
              className: `pointer-events-none select-none ${p.className}`,
            }),
            (0, t.jsxs)("div", {
              className: "absolute bottom-14 left-6 max-w-[75%]",
              children: [
                (0, t.jsx)("div", {
                  className: "mb-3",
                  children: (0, t.jsx)("span", {
                    className: `inline-block px-3.5 py-1.5 rounded-full text-[13px] font-bold bg-white ${e.badgeTextClass ?? "text-[#00316B]"}`,
                    children: e.step,
                  }),
                }),
                (0, t.jsx)("h3", {
                  className: `text-[20px] font-semibold mb-2.5 whitespace-pre-line leading-[1.35] ${e.titleTextClass ?? "text-white"}`,
                  children: e.title,
                }),
                (0, t.jsx)("p", {
                  className: `text-[14px] leading-relaxed whitespace-pre-line ${e.descTextClass ?? "text-white/85"}`,
                  children: e.desc,
                }),
              ],
            }),
          ],
        })
      );
    }

export default i.memo(GuideCard);
