"use client";
import * as t from 'react/jsx-runtime';
import * as i from 'react';
import {motion,AnimatePresence,useScroll} from 'framer-motion';
import {useRouter} from 'next/navigation';
import Image from 'next/image';
import Lenis from 'lenis';
const s={motion},l={AnimatePresence},X={useRouter},q={default:(props)=>t.jsx(Image,{...props,unoptimized:true})};
    export default function ServiceCard({
      title: e,
      headline: i,
      iconType: l,
      bgColor: n,
      textColor: a = "text-white",
      badgeColor: o = "bg-white",
      badgeTextColor: r = "text-blue-600",
      isExpanded: c = !1,
      onHover: d,
      onLeave: h,
    }) {
      return (0, t.jsx)(s.motion.div, {
        className: `relative rounded-[24px] overflow-hidden ${n} ${a} shadow-lg flex flex-col`,
        style: { transformOrigin: "top" },
        animate: { height: c ? 280 : 120 },
        transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
        onMouseEnter: d,
        onMouseLeave: h,
        children: (0, t.jsxs)("div", {
          className: "relative w-full h-full p-6 flex flex-col justify-start",
          children: [
            (0, t.jsxs)("div", {
              className: "flex justify-between items-start w-full mb-4",
              children: [
                (0, t.jsx)("span", {
                  className: `inline-block px-5 py-2 rounded-full text-[16px] font-bold ${o} ${r}`,
                  children: e,
                }),
                (0, t.jsx)("div", {
                  className: "flex-shrink-0",
                  children: (() => {
                    switch (l) {
                      case "pick":
                        return (0, t.jsx)("svg", {
                          className: "w-8 h-8",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: (0, t.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122",
                          }),
                        });
                      case "community":
                        return (0, t.jsx)("svg", {
                          className: "w-8 h-8",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: (0, t.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5",
                          }),
                        });
                      case "mypage":
                        return (0, t.jsx)("svg", {
                          className: "w-8 h-8",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: (0, t.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                          }),
                        });
                    }
                  })(),
                }),
              ],
            }),
            (0, t.jsx)(s.motion.div, {
              className: "flex-1",
              initial: { opacity: 0 },
              animate: { opacity: +!!c, height: c ? "auto" : 0 },
              transition: { duration: 0.4, delay: 0.1 * !!c },
              children:
                c &&
                (0, t.jsx)("h3", {
                  className:
                    "text-[20px] font-bold leading-tight whitespace-pre-line",
                  children: i,
                }),
            }),
          ],
        }),
      });
    }
