"use client";
import * as t from 'react/jsx-runtime';
import * as i from 'react';
import {motion,AnimatePresence,useTransform,useMotionTemplate} from 'framer-motion';
import Image from 'next/image';
import Lenis from 'lenis';
import {recordHomeCommit} from './PerformanceProbe';
const s={motion},l={AnimatePresence},q={default:(props)=>t.jsx(Image,{...props,unoptimized:true})};
import {useVisualValue,useEntranceFade} from '../lib/useVisualValue';
import FloatingQuestion from './FloatingQuestion';
import er from './ServiceCard';
import eo from './QuestionInput';
import eb,{CardHoverContext as ew} from './GuideCard';
const GUIDE_CARDS = [
                                  {
                                    step: "STEP 1",
                                    title:
                                      "만들고 싶은 콘텐츠를\n한 문장으로 알려주세요",
                                    desc: "주제, 채널, 목적, 톤앤매너까지\n말하면 바로 초안을 만들어요.",
                                    bg: "bg-[#0F7DFF]",
                                    badgeTextClass: "text-[#0F7DFF]",
                                    titleTextClass: "text-white",
                                    descTextClass: "text-white/90",
                                    rotate: -5,
                                    zIndex: 1,
                                  },
                                  {
                                    step: "STEP 2",
                                    title:
                                      "브랜드 정보를 바탕으로\n더 정확하게 제작해요",
                                    desc: "제품, 타깃, 말투, 핵심 메시지를 반영해\n브랜드다운 결과를 만들어요.",
                                    bg: "bg-[#295BB7]",
                                    badgeTextClass: "text-[#295BB7]",
                                    titleTextClass: "text-white",
                                    descTextClass: "text-white/90",
                                    rotate: 5,
                                    zIndex: 2,
                                  },
                                  {
                                    step: "STEP 3",
                                    title:
                                      "카드뉴스와 숏폼을\n한 번에 제작하세요",
                                    desc: "채널에 맞는 구성과 비율로\n여러 포맷을 빠르게 만들어요.",
                                    bg: "bg-[#DDEDFF]",
                                    badgeTextClass: "text-[#00316B]",
                                    titleTextClass: "text-[#00316B]",
                                    descTextClass: "text-[#00316B]",
                                    rotate: -2,
                                    zIndex: 3,
                                  },
                                  {
                                    step: "STEP 4",
                                    title:
                                      "마음에 들 때까지\n수정하고 관리하세요",
                                    desc: "아쉬운 초안은 바로 수정하고\n캠페인별로 이어서 관리해요.",
                                    bg: "bg-[#00316B]",
                                    badgeTextClass: "text-[#00316B]",
                                    titleTextClass: "text-white",
                                    descTextClass: "text-white/90",
                                    rotate: 4,
                                    zIndex: 4,
                                  },
                                ];
// Scroll thresholds, timing sequences, and responsive markup preserve the
// source landing experience. Backend, auth, and analytics remain isolated.
    export default function HomeExperience() {
      i.useEffect(recordHomeCommit);
      let [a, r] = (0, i.useState)(!1),
        [c, d] = (0, i.useState)(!1),
        [h, p] = (0, i.useState)(!1),
        [u, m] = (0, i.useState)(!1),
        [x, f] = (0, i.useState)(!1),
        [g, w] = (0, i.useState)(0),
        [b, y] = (0, i.useState)(!0),
        v = (0, i.useRef)(null),
        [j, N] = useVisualValue(1),
        [S, k] = useVisualValue(0),
        [E, T] = useVisualValue(1),
        [C, _] = (0, i.useState)(""),
        [z, L] = (0, i.useState)(-1),
        F = (0, i.useRef)(null),
        A = (0, i.useRef)(null),
        [M, O] = (0, i.useState)(null),
        R = (0, i.useRef)([]),
        H = (0, i.useRef)(null),
        B = (0, i.useRef)(!1);
      const watermarkFade = useEntranceFade(j);
      const mobileFaceFade = useEntranceFade(j);
      const desktopFaceFade = useEntranceFade(j);
      const watermarkY = useMotionTemplate`translateY(${S}px)`;
      const bubblePosition = useMotionTemplate`translate(${null === M ? "-50%" : "-60px"}, ${S}px)`;
      (0, i.useEffect)(() => {
        B.current = u;
      }, [u]);
      let U = () => {
          (R.current.forEach((e) => clearTimeout(e)), (R.current = []));
        },
        K = () => {
          H.current && (clearTimeout(H.current), (H.current = null));
        };
      ((0, i.useEffect)(
        () =>
          (U(), u)
            ? (w(0),
              (R.current = [
                setTimeout(() => w(1), 0),
                setTimeout(() => w(2), 900),
                setTimeout(() => w(3), 1800),
              ]),
              () => {
                U();
              })
            : void 0,
        [u],
      ),
        (0, i.useEffect)(
          () => () => {
            (U(), K());
          },
          [],
        ));
      let [Z, G] = (0, i.useState)(!1),
        [J, Q] = (0, i.useState)(!1),
        [et, ei] = (0, i.useState)(!1),
        [es, el] = (0, i.useState)(!1),
        [ea, ec] = (0, i.useState)(!1),
        [ed, eh] = (0, i.useState)(!1),
        [ep, eu] = (0, i.useState)(!1),
        [em, ex] = (0, i.useState)(!1),
        [ef, ey] = (0, i.useState)(!1),
        [ev, ej] = (0, i.useState)(!1),
        [eN, eS] = (0, i.useState)(!1),
        [ek, eE] = (0, i.useState)(!1),
        [eT, eC] = (0, i.useState)(!1),
        [e_, ez] = useVisualValue(1),
        [eL, eF] = (0, i.useState)(0),
        [eA, eM] = (0, i.useState)(!1),
        [eO, eW] = useVisualValue(100),
        [eR, eH] = (0, i.useState)(!1),
        [eB, eP] = useVisualValue(0),
        [eD, eI] = (0, i.useState)(!1),
        [e$, eV] = (0, i.useState)(!1),
        [eY, eX] = (0, i.useState)(!1),
        [eq, eU] = (0, i.useState)(!1),
        [eK, eZ] = (0, i.useState)(!1),
        [eG, eJ] = (0, i.useState)(!1),
        [eQ, e0] = (0, i.useState)(!1),
        e1 = (0, i.useRef)(null),
        e2 = (0, i.useRef)(null),
        e5 = (0, i.useRef)(!1),
        e3 = (0, i.useRef)(!1),
        e6 = (0, i.useRef)(null),
        [e8, e7] = (0, i.useState)(0),
        [e9, te] = (0, i.useState)(0),
        [tt, ti] = (0, i.useState)(null),
        ts = (0, i.useRef)(null),
        tl = () => {
          ts.current && (clearTimeout(ts.current), (ts.current = null));
        },
        tn = 6e5,
        ta = (e = tn) => {
          (tl(),
            (ts.current = setTimeout(() => {
              ti(null);
            }, e)));
        };
      (0, i.useEffect)(
        () => () => {
          tl();
        },
        [],
      );
      const guideY = useMotionTemplate`translateY(${eO}vh)`;
      const waveY = useTransform(eB, value => `translateY(${(1 - value) * 110}%)`);
      let to = (0, i.useRef)(null),
        [tr, tc] = useVisualValue(1),
        td = (e) => (null !== tt ? tt === e : e8 === e),
        th = (e) => {
          let t = td(e);
          td(2);
          let i = td(3) ? 280 : 120,
            s = td(4) ? 280 : 120,
            l = 0;
          return (
            2 === e
              ? (l = i + 12 + s + 12 + 50)
              : 3 === e
                ? (l = s + 12 + 50)
                : 4 === e && (l = 50),
            { bottom: l, height: t ? 280 : 120 }
          );
        },
        tp = th(2),
        tu = th(3),
        tm = th(4),
        tx = null !== tt ? tt : e9 >= 8 ? 4 : e9 >= 5 ? 3 : 2 * (e9 >= 2),
        tf = null !== tt ? tt : e9 >= 8 ? 4 : e9 >= 5 ? 3 : 2 * (e9 >= 2);
      ((0, i.useEffect)(() => {
        if (window.innerWidth < 1080) return;
        let e = () => {
          if (!e6.current) return;
          let e = e6.current.offsetTop,
            t = window.innerHeight,
            i = window.scrollY - e;
          if (i < 0) {
            (te(0), e7(0));
            return;
          }
          let s = 9;
          (te(
            (s =
              i < 0.25 * t
                ? 1
                : i < 0.55 * t
                  ? 2
                  : i < 0.9 * t
                    ? 3
                    : i < 1.15 * t
                      ? 4
                      : i < 1.45 * t
                        ? 5
                        : i < 1.8 * t
                          ? 6
                          : i < 2.05 * t
                            ? 7
                            : i < 2.35 * t
                              ? 8
                              : 9),
          ),
            e7(s >= 8 ? 4 : s >= 5 ? 3 : 2 * (s >= 2)));
        };
        return (
          window.addEventListener("scroll", e, { passive: !0 }),
          e(),
          () => window.removeEventListener("scroll", e)
        );
      }, [eD]),
        (0, i.useEffect)(() => {
          if (window.innerWidth < 1080) return;
          let e = () => {
            if (!to.current) return;
            let e = to.current.offsetTop,
              t = window.scrollY,
              i = window.innerHeight,
              s = t - (e - i),
              l = 0.5 * i;
            s < 0 ? tc(1) : s < l ? tc(1 - s / l) : tc(0);
          };
          return (
            window.addEventListener("scroll", e, { passive: !0 }),
            () => window.removeEventListener("scroll", e)
          );
        }, [eD]),
        (0, i.useLayoutEffect)(() => {
          // The home animation starts at the top. Prevent browser restoration
          // after hydration from leaving its initial scene at an old scroll offset.
          const restoration = window.history.scrollRestoration;
          window.history.scrollRestoration = "manual";
          window.scrollTo(0, 0);
          return () => { window.history.scrollRestoration = restoration; };
        }, []),
        (0, i.useEffect)(() => {
          const handleSectionLink = (event) => {
            if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            const anchor = event.target.closest?.('a[href^="#"]');
            const href = anchor?.getAttribute("href");
            const target = href && href.length > 1 ? document.querySelector(href) : null;
            if (!target) return;

            event.preventDefault();
            window.history.pushState(null, "", href);
            if (v.current) {
              v.current.scrollTo(target, { duration: 1.2, force: true });
            } else {
              target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          };

          document.addEventListener("click", handleSectionLink);
          return () => document.removeEventListener("click", handleSectionLink);
        }, []),
        (0, i.useEffect)(() => {
          if (!h) return;
          let e = () => {
              let e = F.current,
                t = A.current;
              if (!e || !t) return;
              let i = t.querySelector("svg");
              if (i)
                try {
                  let t = Array.from(i.querySelectorAll("path"));
                  if (0 === t.length) return;
                  let s = t
                    .map((e) => {
                      let t = e.getBBox();
                      return { left: t.x, right: t.x + t.width };
                    })
                    .filter(
                      (e) =>
                        Number.isFinite(e.left) &&
                        Number.isFinite(e.right) &&
                        e.right > e.left,
                    )
                    .sort((e, t) => e.left - t.left);
                  if (0 === s.length) return;
                  let l = [];
                  for (let e of s) {
                    let t = l[l.length - 1];
                    if (!t) {
                      l.push({ left: e.left, right: e.right });
                      continue;
                    }
                    Math.min(t.right, e.right) - Math.max(t.left, e.left) > 0
                      ? ((t.left = Math.min(t.left, e.left)),
                        (t.right = Math.max(t.right, e.right)))
                      : l.push({ left: e.left, right: e.right });
                  }
                  if (l.length < 4) return;
                  let n = l[2],
                    a = l[3],
                    o = (n.right + a.left) / 2,
                    r = i.getScreenCTM();
                  if (!r) return;
                  let c = i.viewBox?.baseVal,
                    d = c ? c.y + c.height / 2 : 0,
                    h = new DOMPoint(o, d).matrixTransform(r),
                    p = e.getBoundingClientRect();
                  O(h.x - p.left);
                } catch {}
            },
            t = () => {
              requestAnimationFrame(e);
            };
          return (
            t(),
            window.addEventListener("resize", t),
            () => {
              window.removeEventListener("resize", t);
            }
          );
        }, [h]),
        (0, i.useEffect)(() => {
          if (window.innerWidth < 1080) {
            (y(!1), N(1), k(0), T(1), eW(100),
              window.dispatchEvent(new CustomEvent("home-scroll-unlocked")));
            return;
          }
          let e = new Lenis({
            duration: 1.2,
            easing: (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
            smoothWheel: !0,
          });
          v.current = e;
          if (b || J || e3.current) e.stop();
          let frame = 0, disposed = false;
          const tick = time => {
            if (disposed) return;
            e.raf(time);
            frame = requestAnimationFrame(tick);
          };
          frame = requestAnimationFrame(tick);
          return () => {
            disposed = true;
            cancelAnimationFrame(frame);
            e.destroy();
            v.current = null;
            e3.current = false;
          };
        }, [eD]));
      let tg = (0, i.useRef)(!1);
      ((0, i.useEffect)(() => {
        let e = setTimeout(() => {
            r(!0);
          }, 300),
          t = setTimeout(() => {
            p(!0);
          }, 1200),
          i = setTimeout(() => {
            (v.current && v.current.scrollTo(window.location.hash ? document.querySelector(window.location.hash) || 0 : 0, { immediate: true, force: true }),
              y(!1),
              v.current && v.current.start(),
              window.dispatchEvent(new CustomEvent("home-scroll-unlocked")));
          }, 3e3);
        return () => {
          (clearTimeout(e), clearTimeout(t), clearTimeout(i));
        };
      }, []),
        (0, i.useEffect)(() => {
          let e = () => {
            (eI(window.innerWidth < 1080), eV(window.innerWidth < 768));
          };
          return (
            e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, []),
        (0, i.useEffect)(() => {
          if (!eD || !e1.current) return;
          let e = new IntersectionObserver(
            (e) => {
              e.forEach((e) => {
                e.isIntersecting
                  ? eX(!0)
                  : (eX(!1), eU(!1), eZ(!1), eJ(!1), e0(!1));
              });
            },
            { threshold: 0.3 },
          );
          return (e.observe(e1.current), () => e.disconnect());
        }, [eD]),
        (0, i.useEffect)(() => {
          if (!eY) return;
          let e = setTimeout(() => {
              eU(!0);
            }, 100),
            t = setTimeout(() => {
              eZ(!0);
            }, 300),
            i = setTimeout(() => {
              eJ(!0);
            }, 500),
            s = setTimeout(() => {
              e0(!0);
            }, 1400);
          return () => {
            (clearTimeout(e),
              clearTimeout(t),
              clearTimeout(i),
              clearTimeout(s));
          };
        }, [eY]));
      const hoverContext = i.useMemo(() => ({hoveredIndex:z,setHoveredIndex:L}), [z]);
      const onCardSettled = i.useCallback((e) => {
                                        if (3 === e) {
                                          if (((e5.current = !0), e2.current)) {
                                            let e = e2.current.offsetTop,
                                              t = window.innerHeight;
                                            window.scrollY - e - t >= 1050 &&
                                              !eR &&
                                              eH(!0);
                                          }
                                          v.current &&
                                            e3.current &&
                                            ((e3.current = !1),
                                            v.current.start());
                                        }
                                      }, [eR]);
      return (
        (0, i.useEffect)(() => {
          if (window.innerWidth < 1080) return;
          let e = () => {
            let e = window.scrollY,
              t = window.innerHeight,
              i = t - 120 - 200,
              s = t + 300,
              l = t + 400,
              n = 0.5 * t,
              a = 1.2 * t;
            if (
              (e < n
                ? eW(100)
                : e >= a
                  ? eW(0)
                  : eW(100 - ((e - n) / (a - n)) * 100),
              e <= i)
            )
              (N(1), k(0));
            else if (e >= s) (N(0), k(-300));
            else {
              let t = (e - i) / (s - i);
              (N(1 - t), k(-300 * t));
            }
            e <= i
              ? T(1)
              : e >= l
                ? (T(0),
                  !Z &&
                    (G(!0),
                    window.innerWidth >= 1080 &&
                      (Q(!0), v.current && v.current.stop())))
                : T(1 - (e - i) / (l - i));
          };
          return (
            b || (window.addEventListener("scroll", e, { passive: !0 }), e()),
            () => {
              window.removeEventListener("scroll", e);
            }
          );
        }, [b, Z, eD]),
        (0, i.useEffect)(() => {
          if (window.innerWidth < 1080 || !Z) return;
          let e = setTimeout(() => {
              ei(!0);
            }, 100),
            t = setTimeout(() => {
              ec(!0);
            }, 300),
            i = setTimeout(() => {
              eh(!0);
            }, 450),
            s = setTimeout(() => {
              el(!0);
            }, 600),
            l = setTimeout(() => {
              eu(!0);
            }, 750),
            n = setTimeout(() => {
              ex(!0);
            }, 900);
          return () => {
            (clearTimeout(e),
              clearTimeout(t),
              clearTimeout(i),
              clearTimeout(s),
              clearTimeout(l),
              clearTimeout(n));
          };
        }, [Z, eD]),
        (0, i.useEffect)(() => {
          if (window.innerWidth < 1080) return;
          let e = () => {
            let e = window.scrollY,
              t = window.innerHeight,
              i = em && e >= 0.8 * t;
            ey((e) => (e === i ? e : i));
          };
          return (
            window.addEventListener("scroll", e, { passive: !0 }),
            e(),
            () => {
              window.removeEventListener("scroll", e);
            }
          );
        }, [em, eD]),
        (0, i.useEffect)(() => {
          !(window.innerWidth < 1080) &&
            et &&
            es &&
            ea &&
            em &&
            J &&
            (Q(!1), v.current && v.current.start());
        }, [et, es, ea, em, J, eD]),
        (0, i.useEffect)(() => {
          if (window.innerWidth < 1080 || J || !e2.current) return;
          let e = () => {
            if (!e2.current) return;
            let e = e2.current.offsetTop,
              t = window.scrollY,
              i = window.innerHeight,
              s = t - e - i;
            if (s > 0) {
              ez(1 - 0.8 * Math.min(s / 300, 1));
              let l = 0;
              (s > 50 && ((l = 1), s > 150 && !ev && ej(!0)),
                s > 350 && ((l = 2), s > 450 && !eN && eS(!0)),
                s > 650 && ((l = 3), s > 750 && !ek && eE(!0)),
                s > 950 && ((l = 4), s >= 1050 && !eT && eC(!0)),
                eF(l));
              let n = e + i + 1050,
                a = s >= 1050,
                o = a && e5.current;
              (a &&
                !o &&
                (v.current &&
                  !e3.current &&
                  ((e3.current = !0), v.current.stop()),
                t > n + 2 && window.scrollTo(0, n)),
                o &&
                  !eR &&
                  (eH(!0),
                  v.current &&
                    e3.current &&
                    ((e3.current = !1), v.current.start())));
              let r = e2.current.offsetHeight - 2 * i,
                c = Math.min(1050, r),
                d = Math.max(1, r - c),
                h = o ? Math.max(0, Math.min(1, (s - c) / d)) : 0;
              eP((e) => {
                let t = Math.round(100 * h) / 100;
                return e === t ? e : t;
              });
            } else
              (ez(1),
                eF(0),
                eR && eH(!1),
                (e5.current = !1),
                e3.current &&
                  v.current &&
                  ((e3.current = !1), v.current.start()),
                eP(0));
          };
          return (
            window.addEventListener("scroll", e, { passive: !0 }),
            e(),
            () => {
              window.removeEventListener("scroll", e);
            }
          );
        }, [J, ev, eN, ek, eT, eR, eD]),
        (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)("main", {
              className: "relative w-full",
              children: [
                (0, t.jsx)("h1", {
                  className: "sr-only",
                  children: "MAKO - 브랜드를 아는 AI 마케팅 스튜디오",
                }),
                (0, t.jsxs)("section", {
                  ref: F,
                  id: "waitlist",
                  className:
                    "sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-0 relative",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "absolute inset-0 bg-white dark:bg-dark-bg-primary",
                    }),
                    (0, t.jsx)(s.motion.div, {
                      className:
                        "absolute inset-0 transition-opacity duration-300",
                      style: {
                        opacity: E,
                        background:
                          "linear-gradient(to bottom, #D4EBFA 0%, #E8F4FD 30%, #F5F9FD 60%, #FAFCFE 80%, #FFFFFF 100%)",
                      },
                    }),
                    (0, t.jsx)(s.motion.div, {
                      className:
                        "absolute inset-x-0 mobile:top-[60px] top-[120px] w-full flex justify-center pointer-events-none select-none mobile:z-[5] z-0 px-6",
                      initial: { y: -40, opacity: 0 },
                      animate: h
                        ? { opacity: 1, y: [-40, -10, 0, -6, 3, 0] }
                        : {},
                      transition: {
                        opacity: { duration: 0.45, ease: "easeOut" },
                        y: {
                          duration: 0.85,
                          ease: "easeOut",
                          times: [0, 0.25, 0.45, 0.7, 0.88, 1],
                        },
                      },
                      onAnimationComplete: () => {
                        h &&
                          !tg.current &&
                          ((tg.current = !0),
                          window.dispatchEvent(new CustomEvent("showHeader")));
                      },
                      style: { opacity: watermarkFade },
                      children: (0, t.jsx)(s.motion.div, {
                        className: "w-full flex justify-center",
                        style: { transform: watermarkY },
                        children: (0, t.jsx)("div", {
                          ref: A,
                          className: "w-full desktop:max-w-none mobile:mt-10",
                          children: (0, t.jsx)("img", {
                            src: "/mako/mako-wordmark.svg",
                            alt: "",
                            "aria-hidden": "true",
                            draggable: !1,
                            className: "w-full h-auto",
                          }),
                        }),
                      }),
                    }),
                    (0, t.jsx)(l.AnimatePresence, {
                      children:
                        x &&
                        (0, t.jsx)(
                          s.motion.div,
                          {
                            className:
                              "pointer-events-none absolute top-[240px] z-30",
                            style: {
                              left:
                                null === M ? "calc(46% + -440px)" : M + -440,
                            },
                            initial: { opacity: 0, y: 8 },
                            animate: { opacity: 1, y: 0 },
                            exit: { opacity: 0, y: 14 },
                            transition: {
                              duration: 0.45,
                              ease: [0.4, 0, 0.2, 1],
                            },
                            children: (0, t.jsx)(s.motion.div, {
                              style: {
                                transform: bubblePosition,
                                opacity: j,
                                willChange: "transform, opacity",
                              },
                              children: (0, t.jsx)(s.motion.div, {
                                layout: !0,
                                className: "relative h-[220px]",
                                transition: {
                                  layout: {
                                    duration: 0.55,
                                    ease: [0.4, 0, 0.2, 1],
                                  },
                                },
                                children: (0, t.jsx)(s.motion.div, {
                                  layout: !0,
                                  className:
                                    "absolute bottom-0 left-0 flex flex-col items-start gap-2.5",
                                  transition: {
                                    layout: {
                                      duration: 0.55,
                                      ease: [0.4, 0, 0.2, 1],
                                    },
                                  },
                                  children: (0, t.jsxs)(l.AnimatePresence, {
                                    children: [
                                      g >= 1 &&
                                        (0, t.jsxs)(
                                          s.motion.div,
                                          {
                                            layout: "position",
                                            className: "flex items-start gap-3",
                                            initial: { opacity: 0, y: 24 },
                                            animate: { opacity: 1, y: 0 },
                                            exit: { opacity: 0, y: 80 },
                                            transition: {
                                              duration: 0.55,
                                              ease: [0.4, 0, 0.2, 1],
                                            },
                                            children: [
                                              (0, t.jsx)(s.motion.div, {
                                                className:
                                                  "mt-1 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center ring-2 ring-[#C7D2FE]",
                                                initial: {
                                                  opacity: 0,
                                                  scale: 0.85,
                                                },
                                                animate: {
                                                  opacity: 1,
                                                  scale: 1,
                                                },
                                                exit: {
                                                  opacity: 0,
                                                  scale: 0.85,
                                                },
                                                transition: { duration: 0.25 },
                                                children: (0, t.jsx)(
                                                  q.default,
                                                  {
                                                    src: "/mako/poses/mako-curious.png",
                                                    alt: "마코",
                                                    width: 32,
                                                    height: 32,
                                                    draggable: !1,
                                                    className:
                                                      "w-8 h-8 object-contain",
                                                  },
                                                ),
                                              }),
                                              (0, t.jsx)(s.motion.div, {
                                                layout: "position",
                                                className: `bg-[#67ADFF] text-white px-6 py-3.5 shadow-lg text-[15px] font-medium leading-[1.45] whitespace-nowrap rounded-[20px] ${g >= 2 ? "rounded-bl-[6px]" : ""}`,
                                                transition: {
                                                  layout: {
                                                    duration: 0.55,
                                                    ease: [0.4, 0, 0.2, 1],
                                                  },
                                                },
                                                children:
                                                  "안녕하세요! 저는 마코예요.",
                                              }),
                                            ],
                                          },
                                          "bubble-row-1",
                                        ),
                                      g >= 2 &&
                                        (0, t.jsx)(
                                          s.motion.div,
                                          {
                                            layout: "position",
                                            className: "pl-[60px]",
                                            initial: { opacity: 0, y: 24 },
                                            animate: { opacity: 1, y: 0 },
                                            exit: { opacity: 0, y: 55 },
                                            transition: {
                                              duration: 0.55,
                                              ease: [0.4, 0, 0.2, 1],
                                            },
                                            children: (0, t.jsxs)(
                                              s.motion.div,
                                              {
                                                layout: "position",
                                                className: `bg-[#3B95FF] text-white px-6 py-3.5 shadow-lg text-[15px] font-medium leading-[1.45] rounded-[20px] rounded-tl-[6px] w-[360px] ${g >= 3 ? "rounded-bl-[6px]" : ""}`,
                                                transition: {
                                                  layout: {
                                                    duration: 0.55,
                                                    ease: [0.4, 0, 0.2, 1],
                                                  },
                                                },
                                                children: [
                                                  (0, t.jsx)("span", {
                                                    className:
                                                      "whitespace-nowrap",
                                                    children:
                                                      "브랜드와 제품 정보를 바탕으로 딱 맞는 콘텐츠를",
                                                  }),
                                                  (0, t.jsx)("br", {}),
                                                  (0, t.jsx)("span", {
                                                    className:
                                                      "whitespace-nowrap",
                                                    children:
                                                      "쉽고 빠르게 만들어드릴게요.",
                                                  }),
                                                ],
                                              },
                                            ),
                                          },
                                          "bubble-row-2",
                                        ),
                                      g >= 3 &&
                                        (0, t.jsx)(
                                          s.motion.div,
                                          {
                                            layout: "position",
                                            className: "pl-[60px]",
                                            initial: { opacity: 0, y: 24 },
                                            animate: { opacity: 1, y: 0 },
                                            exit: { opacity: 0, y: 25 },
                                            transition: {
                                              duration: 0.55,
                                              ease: [0.4, 0, 0.2, 1],
                                            },
                                            children: (0, t.jsx)(s.motion.div, {
                                              layout: "position",
                                              className:
                                                "bg-[#0F7DFF] text-white px-6 py-3.5 shadow-lg text-[15px] font-medium leading-[1.45] rounded-[20px] rounded-tl-[6px] whitespace-nowrap",
                                              transition: {
                                                layout: {
                                                  duration: 0.55,
                                                  ease: [0.4, 0, 0.2, 1],
                                                },
                                              },
                                              children:
                                                "만들고 싶은 콘텐츠를 말해보세요!",
                                            }),
                                          },
                                          "bubble-row-3",
                                        ),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                          },
                          "section1-bubbles",
                        ),
                    }),
                    (0, t.jsx)(s.motion.div, {
                      className:
                        "desktop:hidden tablet:hidden absolute inset-x-0 bottom-[-60px] w-full pointer-events-none z-[1] flex justify-center",
                      style: { opacity: mobileFaceFade },
                      initial: { opacity: 0, y: 20 },
                      animate: a ? { opacity: 1, y: 0 } : {},
                      transition: {
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 1.2,
                      },
                      children: (0, t.jsx)("img", {
                        src: "/mako/mako-mascot.png",
                        alt: "마코",
                        draggable: !1,
                        className: "w-full h-auto object-contain",
                      }),
                    }),
                    (0, t.jsxs)(s.motion.div, {
                      className:
                        "hidden desktop:block absolute left-0 bottom-0 z-20 pointer-events-none select-none",
                      style: { opacity: desktopFaceFade },
                      initial: { opacity: 0 },
                      animate: a ? { opacity: 1 } : {},
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 2.5,
                      },
                      children: [
                        (0, t.jsx)(s.motion.div, {
                          className: "will-change-transform",
                          initial: { x: "-42vh", y: "42vh" },
                          animate: u
                            ? { x: "-60vh", y: "60vh" }
                            : { x: "-42vh", y: "42vh" },
                          transition: { duration: 0.55, ease: "easeOut" },
                          children: (0, t.jsx)("img", {
                            src: "/mako/mako-mascot.png",
                            alt: "마코 캐릭터",
                            draggable: !1,
                            className:
                              "h-[155vh] w-auto object-contain object-left-bottom",
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "absolute bottom-0 left-0 w-[420px] h-[380px] pointer-events-none desktop:pointer-events-auto desktop:cursor-pointer",
                          onMouseEnter: () => {
                            (K(), f(!0), m(!0));
                          },
                          onMouseLeave: () => {
                            (m(!1),
                              w(0),
                              U(),
                              K(),
                              (H.current = setTimeout(() => {
                                B.current || f(!1);
                              }, 750)));
                          },
                        }),
                      ],
                    }),
                    (0, t.jsxs)(s.motion.div, {
                      className:
                        "relative mobile:z-[1] z-10 w-full max-w-full tablet:max-w-[1080px] desktop:max-w-[1400px] mx-auto flex mobile:items-start items-center justify-between px-6 tablet:px-8 desktop:px-[5vw] h-full mobile:pt-[220px] pt-[30vh]",
                      style: { opacity: j },
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "hidden tablet:flex tablet:w-[45%] desktop:flex desktop:w-[55%] h-full",
                          "aria-hidden": !0,
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "w-full tablet:w-[55%] desktop:w-[45%] flex flex-col items-start z-20",
                          children: [
                            (0, t.jsxs)(s.motion.div, {
                              className: "mb-3 desktop:mb-3 relative text-left",
                              initial: { opacity: 0, y: 50 },
                              animate: a ? { opacity: 1, y: 0 } : {},
                              transition: {
                                duration: 0.7,
                                ease: "easeOut",
                                delay: 0,
                              },
                              children: [
                                (0, t.jsxs)("div", {
                                  className:
                                    "hidden tablet:block desktop:block",
                                  children: [
                                    (0, t.jsx)("h2", {
                                      className:
                                        "mako-hero-heading tablet:text-[36px] font-semibold text-gray-900 dark:text-white leading-tight whitespace-nowrap",
                                      children: "콘텐츠의 새로운 시작,",
                                    }),
                                    (0, t.jsxs)("div", {
                                      className:
                                        "flex items-center justify-start gap-5 mt-1",
                                      children: [
                                        (0, t.jsx)(s.motion.div, {
                                          className:
                                            "absolute -left-20 top-16 tablet:-left-16 tablet:top-12 transform -rotate-6",
                                          initial: { opacity: 0, scale: 0 },
                                          animate: a
                                            ? { opacity: 1, scale: 1 }
                                            : {},
                                          transition: {
                                            duration: 0.5,
                                            ease: "backOut",
                                            delay: 4.8,
                                          },
                                          children: (0, t.jsx)("img", {
                                            src: "/mako/mako-arrow.svg",
                                            alt: "",
                                            width: "90",
                                            height: "60",
                                            className:
                                              "w-[90px] h-[60px] tablet:w-[72px] tablet:h-[48px]",
                                          }),
                                        }),
                                        (0, t.jsx)("span", {
                                          className:
                                            "mako-hero-heading bg-[#3B82F6] text-white px-2 py-0.5 rounded-lg tablet:text-[36px] font-semibold leading-tight shadow-lg",
                                          children: "MAKO",
                                        }),
                                        (0, t.jsx)("span", {
                                          className:
                                            "mako-hero-heading tablet:text-[36px] font-semibold text-gray-900 dark:text-white leading-tight whitespace-nowrap",
                                          children: "를 먼저 만나보세요",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className:
                                    "desktop:hidden tablet:hidden flex flex-col gap-0",
                                  children: [
                                    (0, t.jsx)("h2", {
                                      className:
                                        "text-[28px] font-semibold text-gray-900 dark:text-white leading-tight tracking-tight",
                                      children: "콘텐츠의 새로운 시작,",
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: "flex items-center gap-2 mt-1",
                                      children: [
                                        (0, t.jsx)("span", {
                                          className:
                                            "bg-[#3B82F6] text-white px-2 py-0.5 rounded-lg text-[28px] font-semibold leading-tight shadow-lg",
                                          children: "MAKO",
                                        }),
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-[28px] font-semibold text-gray-900 dark:text-white leading-tight tracking-tight",
                                          children: "를 먼저 만나보세요",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsx)(s.motion.p, {
                              className:
                                "text-[14px] tablet:text-[17px] desktop:text-[20px] text-gray-600 dark:text-gray-400 mb-8 desktop:mb-10 font-medium text-left",
                              initial: { opacity: 0, y: 50 },
                              animate: a ? { opacity: 1, y: 0 } : {},
                              transition: {
                                duration: 0.7,
                                ease: "easeOut",
                                delay: 0.6,
                              },
                              children:
                                "출시 소식과 얼리 액세스를 가장 먼저 받아보세요",
                            }),
                            (0, t.jsx)("div", {
                              className:
                                "w-full mobile:max-w-none max-w-[700px] desktop:scale-100 origin-left",
                              children: (0, t.jsx)(eo, {
                                inputValue: C,
                                onInputChange: _,
                                source: "hero",
                                maxWidth: "100%",
                                borderColor: "#3B82F6",
                                buttonColor: "#1E3A8A",
                                buttonHoverColor: "#3B82F6",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                a &&
                  (0, t.jsxs)(s.motion.div, {
                    className:
                      "hidden tablet:block desktop:block fixed bottom-32 left-1/2 -translate-x-1/2 scroll-indicator cursor-pointer z-[100]",
                    style: { opacity: j },
                    onClick: () => {
                      window.scrollTo({
                        top: window.innerHeight,
                        behavior: "smooth",
                      });
                    },
                    children: [
                      (0, t.jsx)("span", {
                        className: "scroll-indicator-arrow",
                      }),
                      (0, t.jsx)("span", {
                        className: "scroll-indicator-arrow",
                      }),
                      (0, t.jsx)("span", {
                        className: "scroll-indicator-arrow",
                      }),
                    ],
                  }),
                eD &&
                  (0, t.jsx)("section", {
                    id: "guide",
                    ref: e1,
                    className:
                      "relative w-full bg-white dark:bg-dark-bg-primary z-30 pt-12 pb-8 cloud-wave-top min-h-[500px]",
                    children: (0, t.jsx)("div", {
                      className: "w-full mx-auto px-4",
                      children: (0, t.jsxs)("div", {
                        className: "relative flex flex-col items-center",
                        children: [
                          (0, t.jsxs)(s.motion.div, {
                            className:
                              "relative flex flex-col items-center text-center mb-4",
                            initial: { opacity: 0, y: 20 },
                            animate: eq
                              ? { opacity: eQ ? 0.3 : 1, y: 0 }
                              : { opacity: 0, y: 20 },
                            transition: { duration: 0.7, ease: "easeOut" },
                            children: [
                              (0, t.jsx)("h2", {
                                className:
                                  "text-[28px] font-semibold text-gray-900 dark:text-white leading-[1.15] whitespace-nowrap",
                                children: "마코와 함께하는",
                              }),
                              (0, t.jsx)("img", {
                                src: "/mako/poses/mako-celebrate.png",
                                alt: "",
                                "aria-hidden": "true",
                                draggable: !1,
                                className:
                                  "pointer-events-none absolute top-4 -right-16 w-[70px] h-auto object-contain",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "relative w-full min-h-[420px] flex flex-col items-center",
                            children: [
                              (0, t.jsx)(s.motion.div, {
                                className:
                                  "relative w-[220px] h-[220px] z-0 flex items-center justify-center",
                                initial: { opacity: 0, scale: 0.8 },
                                animate: eK
                                  ? { opacity: eQ ? 0.3 : 1, scale: 1 }
                                  : { opacity: 0, scale: 0.8 },
                                transition: { duration: 0.8, ease: "easeOut" },
                                children: (0, t.jsx)("img", {
                                  src: "/mako/poses/mako-create.png",
                                  alt: "마코 캐릭터",
                                  draggable: !1,
                                  className: "w-full h-full object-contain",
                                }),
                              }),
                              (0, t.jsx)(s.motion.div, {
                                className: "relative z-0 mt-2",
                                initial: { opacity: 0, y: 20 },
                                animate: eG
                                  ? { opacity: eQ ? 0.3 : 1, y: 0 }
                                  : { opacity: 0, y: 20 },
                                transition: { duration: 0.7, ease: "easeOut" },
                                children: (0, t.jsxs)("div", {
                                  className:
                                    "relative flex flex-col gap-1 items-center text-center",
                                  children: [
                                    (0, t.jsx)("div", {
                                      className:
                                        "bg-[#3B82F6] text-white px-4 py-1.5 rounded-lg",
                                      children: (0, t.jsx)("h2", {
                                        className:
                                          "text-[24px] font-semibold leading-[1.1] whitespace-nowrap",
                                        children: "스마트 콘텐츠 제작",
                                      }),
                                    }),
                                    (0, t.jsx)("h2", {
                                      className:
                                        "text-[24px] font-semibold text-gray-900 dark:text-white leading-[1.15] whitespace-nowrap",
                                      children: "가이드",
                                    }),
                                  ],
                                }),
                              }),
                              (0, t.jsx)(l.AnimatePresence, {
                                children:
                                  eQ &&
                                  (0, t.jsx)(s.motion.div, {
                                    className:
                                      "absolute inset-x-0 top-[80px] z-10",
                                    initial: { opacity: 0, y: 60 },
                                    animate: { opacity: 1, y: 0 },
                                    transition: {
                                      duration: 0.8,
                                      ease: "easeOut",
                                    },
                                    children: (0, t.jsx)("div", {
                                      className:
                                        "relative w-full overflow-visible tablet:overflow-hidden",
                                      children: (0, t.jsx)(s.motion.div, {
                                        className:
                                          "flex gap-3 px-4 tablet:flex-wrap tablet:justify-center tablet:gap-3 tablet:px-0",
                                        drag: !!e$ && "x",
                                        dragConstraints: {
                                          left: -870,
                                          right: 0,
                                        },
                                        style: {
                                          cursor: e$ ? "grab" : "default",
                                        },
                                        children: [
                                          {
                                            step: "STEP 1",
                                            title:
                                              "만들고 싶은 콘텐츠를\n한 문장으로 알려주세요",
                                            desc: "주제, 채널, 목적, 톤앤매너까지\n말하면 바로 초안을 만들어요.",
                                            bg: "bg-[#0F7DFF]",
                                            badgeTextClass: "text-[#0F7DFF]",
                                            titleTextClass: "text-white",
                                            descTextClass: "text-white/90",
                                            iconSrc:
                                              "/mako/poses/mako-analytics.png",
                                            iconClass:
                                              "absolute -top-8 right-3 w-[140px] h-auto",
                                          },
                                          {
                                            step: "STEP 2",
                                            title:
                                              "브랜드 정보를 바탕으로\n더 정확하게 제작해요",
                                            desc: "제품, 타깃, 말투, 핵심 메시지를 반영해\n브랜드다운 결과를 만들어요.",
                                            bg: "bg-[#295BB7]",
                                            badgeTextClass: "text-[#295BB7]",
                                            titleTextClass: "text-white",
                                            descTextClass: "text-white/90",
                                            iconSrc:
                                              "/mako/poses/mako-create.png",
                                            iconClass:
                                              "absolute top-3 right-3 w-[140px] h-auto",
                                          },
                                          {
                                            step: "STEP 3",
                                            title:
                                              "카드뉴스와 숏폼을\n한 번에 제작하세요",
                                            desc: "채널에 맞는 구성과 비율로\n여러 포맷을 빠르게 만들어요.",
                                            bg: "bg-[#DDEDFF]",
                                            badgeTextClass: "text-[#00316B]",
                                            titleTextClass: "text-[#00316B]",
                                            descTextClass: "text-[#00316B]",
                                            iconSrc:
                                              "/mako/poses/mako-celebrate.png",
                                            iconClass:
                                              "absolute top-3 right-3 w-[150px] h-auto",
                                          },
                                          {
                                            step: "STEP 4",
                                            title:
                                              "마음에 들 때까지\n수정하고 관리하세요",
                                            desc: "아쉬운 초안은 바로 수정하고\n캠페인별로 이어서 관리해요.",
                                            bg: "bg-[#00316B]",
                                            badgeTextClass: "text-[#00316B]",
                                            titleTextClass: "text-white",
                                            descTextClass: "text-white/90",
                                            iconSrc:
                                              "/mako/poses/mako-sad.png",
                                            iconClass:
                                              "absolute top-3 right-3 w-[150px] h-auto",
                                          },
                                        ].map((e, i) =>
                                          (0, t.jsxs)(
                                            "div",
                                            {
                                              className: `relative flex-shrink-0 w-[240px] h-[280px] tablet:w-[200px] tablet:h-[240px] desktop:w-[280px] desktop:h-[320px] ${e.bg} rounded-[20px] p-5 shadow-2xl`,
                                              children: [
                                                (0, t.jsx)("img", {
                                                  src: e.iconSrc,
                                                  alt: "",
                                                  "aria-hidden": "true",
                                                  draggable: !1,
                                                  loading: "lazy",
                                                  decoding: "async",
                                                  className: `pointer-events-none select-none ${e.iconClass}`,
                                                }),
                                                (0, t.jsxs)("div", {
                                                  className:
                                                    "absolute bottom-5 left-5 max-w-[70%] tablet:bottom-3 tablet:left-3 tablet:max-w-[85%]",
                                                  children: [
                                                    (0, t.jsx)("div", {
                                                      className:
                                                        "mb-2 tablet:mb-1",
                                                      children: (0, t.jsx)(
                                                        "span",
                                                        {
                                                          className: `inline-block px-3 py-1 tablet:px-2 tablet:py-0.5 rounded-full text-[12px] tablet:text-[10px] font-bold bg-white ${e.badgeTextClass}`,
                                                          children: e.step,
                                                        },
                                                      ),
                                                    }),
                                                    (0, t.jsx)("h3", {
                                                      className: `text-[16px] tablet:text-[13px] font-semibold mb-2 tablet:mb-1 whitespace-pre-line tablet:whitespace-normal leading-[1.35] ${e.titleTextClass}`,
                                                      children: e.title,
                                                    }),
                                                    (0, t.jsx)("p", {
                                                      className: `text-[12px] tablet:text-[10px] leading-relaxed whitespace-pre-line tablet:whitespace-normal ${e.descTextClass}`,
                                                      children: e.desc,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            i,
                                          ),
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                (0, t.jsx)("section", {
                  id: eD ? void 0 : "guide",
                  ref: e2,
                  className: `relative w-full h-[400vh] z-30 ${eD ? "hidden" : ""}`,
                  children: (0, t.jsxs)(s.motion.div, {
                    className:
                      "sticky top-0 h-screen w-full relative overflow-visible",
                    style: { transform: guideY },
                    children: [
                      (0, t.jsx)("div", {
                        className:
                          "absolute inset-0 bg-white dark:bg-dark-bg-primary cloud-wave-top",
                        children: (0, t.jsx)(s.motion.div, {
                          "aria-hidden": !0,
                          className:
                            "absolute bottom-0 left-0 w-full pointer-events-none",
                          style: {
                            transform: waveY,
                            opacity: eB,
                            willChange: "transform, opacity",
                          },
                          children: (0, t.jsx)("div", {
                            className:
                              "relative w-full h-[220px] bg-[#FAFAFA] dark:bg-dark-bg-secondary",
                            children: (0, t.jsx)("div", {
                              className: "cloud-wave-bottom",
                            }),
                          }),
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "absolute inset-0 flex items-center justify-center",
                        children: (0, t.jsxs)("div", {
                          className: "relative w-full max-w-[1400px] px-6",
                          children: [
                            (0, t.jsx)(s.motion.div, {
                              className:
                                "flex flex-col items-center gap-6 relative h-full justify-center transition-opacity duration-700",
                              style: { opacity: e_ },
                              children: (0, t.jsxs)("div", {
                                className:
                                  "flex flex-row items-center justify-center gap-12",
                                children: [
                                  (0, t.jsxs)(s.motion.div, {
                                    className:
                                      "flex flex-col gap-2 items-start text-left",
                                    initial: { opacity: 0, y: 20 },
                                    animate: et ? { opacity: 1, y: 0 } : {},
                                    transition: {
                                      duration: 0.6,
                                      ease: "easeOut",
                                    },
                                    children: [
                                      (0, t.jsx)("h2", {
                                        className:
                                          "text-[58px] font-semibold text-gray-900 dark:text-white leading-[1.15] whitespace-nowrap",
                                        children: "마코와",
                                      }),
                                      (0, t.jsx)("h2", {
                                        className:
                                          "text-[58px] font-semibold text-gray-900 dark:text-white leading-[1.15] whitespace-nowrap",
                                        children: "함께하는",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsx)("div", {
                                    className:
                                      "relative flex-shrink-0 w-[450px] h-[450px]",
                                    children: (0, t.jsx)(s.motion.img, {
                                      src: "/mako/poses/mako-create.png",
                                      alt: "마코 캐릭터",
                                      draggable: !1,
                                      className: "w-full h-full object-contain",
                                      initial: { opacity: 0, y: 48 },
                                      animate: ea
                                        ? { opacity: 1, y: 0 }
                                        : { opacity: 0, y: 48 },
                                      transition: {
                                        duration: 0.7,
                                        ease: "easeOut",
                                      },
                                    }),
                                  }),
                                  (0, t.jsxs)(s.motion.div, {
                                    className:
                                      "relative flex flex-col gap-2 items-end text-right",
                                    initial: { opacity: 0, y: 20 },
                                    animate: es ? { opacity: 1, y: 0 } : {},
                                    transition: {
                                      duration: 0.6,
                                      ease: "easeOut",
                                    },
                                    children: [
                                      (0, t.jsx)(s.motion.img, {
                                        src: "/images/main/adobestock.webp",
                                        alt: "",
                                        "aria-hidden": "true",
                                        draggable: !1,
                                        className:
                                          "pointer-events-none absolute bottom-40 -left-44 w-[194px] h-auto object-contain",
                                        initial: { opacity: 0, y: 36 },
                                        animate: ep
                                          ? { opacity: 1, y: 0 }
                                          : { opacity: 0, y: 36 },
                                        transition: {
                                          duration: 0.7,
                                          ease: "easeOut",
                                        },
                                      }),
                                      (0, t.jsx)("div", {
                                        className:
                                          "bg-[#3B82F6] text-white px-5 py-2 rounded-xl",
                                        children: (0, t.jsx)("h2", {
                                          className:
                                            "text-[58px] font-semibold leading-[1.1] whitespace-nowrap",
                                          children: "스마트 콘텐츠 제작",
                                        }),
                                      }),
                                      (0, t.jsx)("h2", {
                                        className:
                                          "pr-5 text-[58px] font-semibold text-gray-900 dark:text-white leading-[1.15] whitespace-nowrap",
                                        children: "가이드",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, t.jsx)(ew.Provider, {
                              value: hoverContext,
                              children: (0, t.jsx)("div", {
                                className:
                                  "flex absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center gap-0 z-20",
                                style: { perspective: "2000px" },
                                children: GUIDE_CARDS.map((e, i) => {
                                  let s = i < eL;
                                  return (0, t.jsx)(
                                    eb,
                                    {
                                      card: e,
                                      idx: i,
                                      isVisible: s,
                                      totalCards: 4,
                                      onSettle: onCardSettled,
                                    },
                                    i,
                                  );
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                eD &&
                  (0, t.jsx)("section", {
                    id: "services",
                    className:
                      "relative w-full bg-[#FAFAFA] dark:bg-dark-bg-secondary py-12 z-10",
                    children: (0, t.jsxs)("div", {
                      className:
                        "w-full max-w-[400px] mx-auto px-4 flex flex-col gap-16",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "flex flex-col items-center gap-4",
                          children: [
                            (0, t.jsxs)("div", {
                              className:
                                "w-full bg-[#2563EB] rounded-[20px] p-5 shadow-xl",
                              children: [
                                (0, t.jsx)("span", {
                                  className:
                                    "inline-block px-3 py-1 bg-white text-blue-600 rounded-full text-[12px] font-bold mb-3",
                                  children: "카드뉴스",
                                }),
                                (0, t.jsx)("h3", {
                                  className:
                                    "text-[20px] font-semibold text-white leading-tight whitespace-pre-line",
                                  children: `브랜드다운 카드뉴스가
몇 분 만에 완성되는 순간`,
                                }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: "w-[180px] h-[180px]",
                              children: (0, t.jsx)("img", {
                                src: "/mako/poses/mako-analytics.png",
                                alt: "카드뉴스를 분석하는 마코",
                                draggable: !1,
                                loading: "lazy",
                                decoding: "async",
                                className: "w-full h-full object-contain",
                              }),
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "w-full bg-white rounded-[20px] border border-gray-200 p-5 shadow-lg",
                              children: [
                                (0, t.jsxs)("p", {
                                  className:
                                    "text-[14px] text-gray-700 leading-relaxed mb-4",
                                  children: [
                                    "제품 정보와 한 줄 아이디어만 입력하면",
                                    " ",
                                    (0, t.jsx)("span", {
                                      className: "text-blue-600 font-semibold",
                                      children: "브랜드다운 카드뉴스",
                                    }),
                                    "의 구성과 카피, 이미지까지 한 번에 만들 수 있어요.",
                                    (0, t.jsxs)("span", {
                                      className: "text-blue-600 font-semibold",
                                      children: [" ", "MAKO"],
                                    }),
                                    "가 채널에 맞는 비율로 정리해드려요.",
                                  ],
                                }),
                                (0, t.jsx)("a", {
                                  href: "#waitlist-bottom",
                                  className:
                                    "block w-full py-3 text-white text-center font-bold rounded-xl bg-[#2563EB] shadow-[0_3px_0_#1E4ACC] active:translate-y-[2px] active:shadow-[0_1px_0_#1E4ACC]",
                                  children: "카드뉴스 얼리 액세스",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "flex flex-col items-center gap-4",
                          children: [
                            (0, t.jsxs)("div", {
                              className:
                                "w-full bg-[#DBEAFE] rounded-[20px] p-5 shadow-xl",
                              children: [
                                (0, t.jsx)("span", {
                                  className:
                                    "inline-block px-3 py-1 bg-white text-blue-600 rounded-full text-[12px] font-bold mb-3",
                                  children: "AI 영상",
                                }),
                                (0, t.jsx)("h3", {
                                  className:
                                    "text-[20px] font-semibold text-blue-900 leading-tight whitespace-pre-line",
                                  children: `스크립트와 장면이
한 번에 영상이 되는 곳`,
                                }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: "w-[180px] h-[180px]",
                              children: (0, t.jsx)("img", {
                                src: "/mako/poses/mako-create.png",
                                alt: "영상을 만드는 마코",
                                draggable: !1,
                                loading: "lazy",
                                decoding: "async",
                                className: "w-full h-full object-contain",
                              }),
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "w-full bg-white rounded-[20px] border border-gray-200 p-5 shadow-lg",
                              children: [
                                (0, t.jsxs)("p", {
                                  className:
                                    "text-[14px] text-gray-700 leading-relaxed mb-4",
                                  children: [
                                    "전달하고 싶은 메시지와 제품 이미지를 바탕으로",
                                    " ",
                                    (0, t.jsx)("span", {
                                      className: "text-blue-600 font-semibold",
                                      children: "숏폼 영상의 장면과 흐름",
                                    }),
                                    "을 자동으로 설계하고 제작해요.",
                                  ],
                                }),
                                (0, t.jsx)("a", {
                                  href: "#waitlist-bottom",
                                  className:
                                    "block w-full py-3 text-white text-center font-bold rounded-xl bg-[#2563EB] shadow-[0_3px_0_#1E4ACC] active:translate-y-[2px] active:shadow-[0_1px_0_#1E4ACC]",
                                  children: "AI 영상 얼리 액세스",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "flex flex-col items-center gap-4",
                          children: [
                            (0, t.jsxs)("div", {
                              className:
                                "w-full bg-[#172554] rounded-[20px] p-5 shadow-xl",
                              children: [
                                (0, t.jsx)("span", {
                                  className:
                                    "inline-block px-3 py-1 bg-white text-[#172554] rounded-full text-[12px] font-bold mb-3",
                                  children: "내 작업",
                                }),
                                (0, t.jsx)("h3", {
                                  className:
                                    "text-[20px] font-semibold text-white leading-tight whitespace-pre-line",
                                  children: `브랜드의 모든 콘텐츠를
한곳에 담는 곳`,
                                }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: "w-[180px] h-[180px]",
                              children: (0, t.jsx)("img", {
                                src: "/mako/poses/mako-curious.png",
                                alt: "작업을 살펴보는 마코",
                                draggable: !1,
                                loading: "lazy",
                                decoding: "async",
                                className: "w-full h-full object-contain",
                              }),
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "w-full bg-white rounded-[20px] border border-gray-200 p-5 shadow-lg",
                              children: [
                                (0, t.jsxs)("p", {
                                  className:
                                    "text-[14px] text-gray-700 leading-relaxed mb-4",
                                  children: [
                                    "브랜드",
                                    " ",
                                    (0, t.jsx)("span", {
                                      className: "text-blue-600 font-semibold",
                                      children: "프로필과 에셋",
                                    }),
                                    ", 생성한 카드뉴스와 영상, 저장한 템플릿까지 모든 콘텐츠를",
                                    " ",
                                    (0, t.jsx)("span", {
                                      className: "text-blue-600 font-semibold",
                                      children: "정리하고 관리",
                                    }),
                                    "할 수 있어요.",
                                  ],
                                }),
                                (0, t.jsx)("a", {
                                  href: "#waitlist-bottom",
                                  className:
                                    "block w-full py-3 text-white text-center font-bold rounded-xl bg-[#2563EB] shadow-[0_3px_0_#1E4ACC] active:translate-y-[2px] active:shadow-[0_1px_0_#1E4ACC]",
                                  children: "출시 알림 신청",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                (0, t.jsx)("section", {
                  id: eD ? void 0 : "services",
                  ref: e6,
                  className: `relative w-full h-[500vh] bg-[#FAFAFA] dark:bg-dark-bg-secondary flex items-start justify-center pt-0 z-10 ${eD ? "hidden" : ""}`,
                  children: (0, t.jsxs)("div", {
                    className:
                      "sticky top-0 h-screen w-full max-w-[1400px] mx-auto px-6 flex items-start justify-between pt-[calc(50vh-300px)]",
                    children: [
                      (0, t.jsxs)("div", {
                        className:
                          "w-[330px] h-[600px] flex flex-col items-start relative",
                        onMouseEnter: tl,
                        onMouseLeave: () => ta(),
                        children: [
                          (0, t.jsx)(s.motion.div, {
                            className: "absolute left-0 z-10 w-full",
                            initial: { opacity: 0, bottom: -150 },
                            animate: {
                              opacity: +(e9 >= 2),
                              bottom: e9 >= 2 ? tp.bottom : -150,
                              height: tp.height,
                            },
                            style: { zIndex: 2 === tt ? 50 : 10 },
                            transition: {
                              duration: 0.8,
                              ease: [0.33, 1, 0.68, 1],
                            },
                            children: (0, t.jsx)(er, {
                              title: "카드뉴스",
                              headline: `브랜드다운 카드뉴스가
몇 분 만에 완성되는 순간`,
                              iconType: "pick",
                              bgColor: "bg-[#2563EB]",
                              badgeColor: "bg-white",
                              badgeTextColor: "text-blue-600",
                              isExpanded: td(2),
                              onHover: () => {
                                (tl(), ti(2));
                              },
                              onLeave: () => ta(),
                            }),
                          }),
                          (0, t.jsx)(s.motion.div, {
                            className: "absolute left-0 z-20 w-full",
                            initial: { opacity: 0, bottom: -150 },
                            animate: {
                              opacity: +(e9 >= 5),
                              bottom: e9 >= 5 ? tu.bottom : -150,
                              height: tu.height,
                            },
                            style: { zIndex: 3 === tt ? 50 : 20 },
                            transition: {
                              duration: 0.8,
                              ease: [0.33, 1, 0.68, 1],
                            },
                            children: (0, t.jsx)(er, {
                              title: "AI 영상",
                              headline: `스크립트와 장면이
한 번에 영상이 되는 곳`,
                              iconType: "community",
                              bgColor: "bg-[#DBEAFE]",
                              textColor: "text-blue-900",
                              badgeColor: "bg-white",
                              badgeTextColor: "text-blue-600",
                              isExpanded: td(3),
                              onHover: () => {
                                (tl(), ti(3));
                              },
                              onLeave: () => ta(),
                            }),
                          }),
                          (0, t.jsx)(s.motion.div, {
                            className: "absolute left-0 z-30 w-full",
                            initial: { opacity: 0, bottom: -150 },
                            animate: {
                              opacity: +(e9 >= 8),
                              bottom: e9 >= 8 ? tm.bottom : -150,
                              height: tm.height,
                            },
                            style: { zIndex: 4 === tt ? 50 : 30 },
                            transition: {
                              duration: 0.8,
                              ease: [0.33, 1, 0.68, 1],
                            },
                            children: (0, t.jsx)(er, {
                              title: "내 작업",
                              headline: `브랜드의 모든 콘텐츠를
한곳에 담는 곳`,
                              iconType: "mypage",
                              bgColor: "bg-[#172554]",
                              badgeColor: "bg-white",
                              badgeTextColor: "text-[#172554]",
                              isExpanded: td(4),
                              onHover: () => {
                                (tl(), ti(4));
                              },
                              onLeave: () => ta(),
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "flex-1 flex justify-center items-center h-full relative px-10",
                        children: (0, t.jsxs)(l.AnimatePresence, {
                          mode: "wait",
                          children: [
                            2 === tx &&
                              (0, t.jsx)(
                                s.motion.img,
                                {
                                  src: "/mako/poses/mako-analytics.png",
                                  alt: "카드뉴스를 분석하는 마코",
                                  draggable: !1,
                                  loading: "lazy",
                                  decoding: "async",
                                  className:
                                    "w-[400px] h-[400px] tablet:w-[420px] tablet:h-[420px] desktop:w-[460px] desktop:h-[460px] object-contain -mt-40",
                                  initial: { opacity: 0, y: -60, scale: 0.95 },
                                  animate: { opacity: 1, y: 0, scale: 1 },
                                  exit: { opacity: 0, y: 20, scale: 0.98 },
                                  transition: {
                                    duration: 0.55,
                                    ease: [0.33, 1, 0.68, 1],
                                  },
                                },
                                "char-pick",
                              ),
                            3 === tx &&
                              (0, t.jsx)(
                                s.motion.img,
                                {
                                  src: "/mako/poses/mako-create.png",
                                  alt: "영상을 만드는 마코",
                                  draggable: !1,
                                  loading: "lazy",
                                  decoding: "async",
                                  className:
                                    "w-[400px] h-[400px] tablet:w-[420px] tablet:h-[420px] desktop:w-[460px] desktop:h-[460px] object-contain -mt-40",
                                  initial: { opacity: 0, y: 60, scale: 0.95 },
                                  animate: { opacity: 1, y: 0, scale: 1 },
                                  exit: { opacity: 0, y: -20, scale: 0.98 },
                                  transition: {
                                    duration: 0.55,
                                    ease: [0.33, 1, 0.68, 1],
                                  },
                                },
                                "char-community",
                              ),
                            4 === tx &&
                              (0, t.jsx)(
                                s.motion.img,
                                {
                                  src: "/mako/poses/mako-curious.png",
                                  alt: "작업을 살펴보는 마코",
                                  draggable: !1,
                                  loading: "lazy",
                                  decoding: "async",
                                  className:
                                    "w-[400px] h-[400px] tablet:w-[420px] tablet:h-[420px] desktop:w-[460px] desktop:h-[460px] object-contain -mt-40",
                                  initial: { opacity: 0, y: 60, scale: 0.95 },
                                  animate: { opacity: 1, y: 0, scale: 1 },
                                  exit: { opacity: 0, y: -20, scale: 0.98 },
                                  transition: {
                                    duration: 0.55,
                                    ease: [0.33, 1, 0.68, 1],
                                  },
                                },
                                "char-mypage",
                              ),
                          ],
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "w-[320px] h-[550px] flex flex-col items-start relative",
                        onMouseEnter: tl,
                        onMouseLeave: () => ta(),
                        children: (0, t.jsx)(l.AnimatePresence, {
                          mode: "wait",
                          children:
                            (null !== tt || e9 >= 2) &&
                            (0, t.jsxs)(
                              s.motion.div,
                              {
                                className:
                                  "w-full h-full bg-white rounded-[24px] border border-black shadow-xl p-10 flex flex-col justify-between relative overflow-hidden",
                                initial: { opacity: 0, y: 100 },
                                animate: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: 100 },
                                transition: {
                                  duration: 0.8,
                                  ease: [0.33, 1, 0.68, 1],
                                },
                                children: [
                                  2 === tf &&
                                    (0, t.jsxs)("div", {
                                      className:
                                        "text-left flex flex-col h-full",
                                      children: [
                                        (0, t.jsx)("div", {
                                          className: "flex-1",
                                          children: (0, t.jsxs)("p", {
                                            className:
                                              "text-[18px] text-gray-900 leading-relaxed font-medium mb-6",
                                            children: [
                                              "제품 정보와 한 줄 아이디어로",
                                              (0, t.jsx)("br", {}),
                                              (0, t.jsx)("span", {
                                                className:
                                                  "inline-block bg-blue-50 text-blue-600 font-semibold px-1 py-0.5 rounded",
                                                children: "브랜드다운 카드뉴스",
                                              }),
                                              "를 만들고",
                                              (0, t.jsx)("br", {}),
                                              "구성, 카피, 이미지 스타일을",
                                              (0, t.jsx)("br", {}),
                                              "채널에 맞게 한 번에 완성해요.",
                                              (0, t.jsx)("br", {}),
                                              (0, t.jsx)("span", {
                                                className:
                                                  "inline-block bg-blue-50 text-blue-600 font-semibold px-1 py-0.5 rounded",
                                                children: "MAKO",
                                              }),
                                              "가 브랜드 맥락을 기억합니다.",
                                              (0, t.jsx)("br", {}),
                                              (0, t.jsx)("br", {}),
                                              "매번 처음부터 설명하지 않아도",
                                              (0, t.jsx)("br", {}),
                                              (0, t.jsx)("span", {
                                                className:
                                                  "inline-block bg-blue-50 text-blue-600 font-semibold px-1 py-0.5 rounded",
                                                children:
                                                  "우리 브랜드에 맞는 콘텐츠",
                                              }),
                                              "를",
                                              (0, t.jsx)("br", {}),
                                              "를 더 빠르게 만들 수 있어요.",
                                            ],
                                          }),
                                        }),
                                        (0, t.jsx)("a", {
                                          href: "#waitlist-bottom",
                                          className:
                                            " w-full py-4 text-white text-lg font-bold  rounded-xl relative overflow-hidden bg-[#2563EB] transition-all duration-150 shadow-[0_4px_0_#1E4ACC] active:translate-y-[3px] active:shadow-[0_1px_0_#1E4ACC] mt-auto flex items-center justify-center no-underline ",
                                          children: (0, t.jsx)("span", {
                                            className: "relative z-10",
                                            children: "카드뉴스 얼리 액세스",
                                          }),
                                        }),
                                      ],
                                    }),
                                  3 === tf &&
                                    (0, t.jsxs)("div", {
                                      className:
                                        "text-left flex flex-col h-full",
                                      children: [
                                        (0, t.jsxs)("div", {
                                          className: "flex-1",
                                          children: [
                                            (0, t.jsxs)("p", {
                                              className:
                                                "text-[18px] text-gray-900 leading-relaxed font-medium mb-6",
                                              children: [
                                                "전달하고 싶은 핵심 메시지,",
                                                (0, t.jsx)("br", {}),
                                                "제품 이미지와 참고 자료,",
                                                (0, t.jsx)("br", {}),
                                                "원하는 영상 분위기까지",
                                                (0, t.jsx)("br", {}),
                                                "입력하면",
                                                (0, t.jsx)("span", {
                                                  className:
                                                    "inline-block bg-blue-50 text-blue-600 font-semibold px-1 py-0.5 rounded",
                                                  children:
                                                    "숏폼 영상의 장면과 흐름",
                                                }),
                                                "을 자동으로 설계해요.",
                                              ],
                                            }),
                                            (0, t.jsxs)("p", {
                                              className:
                                                "text-[18px] text-gray-900 leading-relaxed font-medium",
                                              children: [
                                                "스크립트, 이미지, 장면 전환이",
                                                (0, t.jsx)("br", {}),
                                                "이어져",
                                                (0, t.jsx)("span", {
                                                  className:
                                                    "inline-block bg-blue-50 text-blue-600 font-semibold px-1 py-0.5 rounded",
                                                  children:
                                                    "바로 게시할 수 있는 영상",
                                                }),
                                                "를",
                                                (0, t.jsx)("br", {}),
                                                "으로 완성됩니다.",
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, t.jsx)("a", {
                                          href: "#waitlist-bottom",
                                          className:
                                            " w-full py-4 text-white text-lg font-bold  rounded-xl relative overflow-hidden bg-[#2563EB] transition-all duration-150 shadow-[0_4px_0_#1E4ACC] active:translate-y-[3px] active:shadow-[0_1px_0_#1E4ACC] mt-auto flex items-center justify-center no-underline ",
                                          children: (0, t.jsx)("span", {
                                            className: "relative z-10",
                                            children: "AI 영상 얼리 액세스",
                                          }),
                                        }),
                                      ],
                                    }),
                                  4 === tf &&
                                    (0, t.jsxs)("div", {
                                      className:
                                        "text-left flex flex-col h-full",
                                      children: [
                                        (0, t.jsxs)("div", {
                                          className: "flex-1",
                                          children: [
                                            (0, t.jsxs)("p", {
                                              className:
                                                "text-[18px] text-gray-900 leading-relaxed font-medium mb-6",
                                              children: [
                                                "브랜드",
                                                " ",
                                                (0, t.jsx)("span", {
                                                  className:
                                                    "inline-block bg-blue-50 text-blue-600 font-semibold px-1 py-0.5 rounded",
                                                  children: "프로필과 에셋",
                                                }),
                                                ",",
                                                (0, t.jsx)("br", {}),
                                                "생성한 카드뉴스와 영상,",
                                                (0, t.jsx)("br", {}),
                                                "저장한 템플릿까지 모든 결과물을",
                                                (0, t.jsx)("br", {}),
                                                (0, t.jsx)("span", {
                                                  className:
                                                    "inline-block bg-blue-50 text-blue-600 font-semibold px-1 py-0.5 rounded",
                                                  children: "정리하고 관리",
                                                }),
                                                "할 수 있어요.",
                                              ],
                                            }),
                                            (0, t.jsxs)("p", {
                                              className:
                                                "text-[18px] text-gray-900 leading-relaxed font-medium",
                                              children: [
                                                "여러 캠페인을 진행 중이어도",
                                                (0, t.jsx)("br", {}),
                                                "작업을 바꿔가며",
                                                (0, t.jsx)("br", {}),
                                                (0, t.jsx)("span", {
                                                  className:
                                                    "inline-block bg-blue-50 text-blue-600 font-semibold px-1 py-0.5 rounded",
                                                  children:
                                                    "캠페인별 콘텐츠와 히스토리",
                                                }),
                                                "를",
                                                (0, t.jsx)("br", {}),
                                                "를 이어서 관리할 수 있어요.",
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, t.jsx)("a", {
                                          href: "#waitlist-bottom",
                                          className:
                                            " w-full py-4 text-white text-lg font-bold  rounded-xl relative overflow-hidden bg-[#2563EB] transition-all duration-150 shadow-[0_4px_0_#1E4ACC] active:translate-y-[3px] active:shadow-[0_1px_0_#1E4ACC] mt-auto flex items-center justify-center no-underline ",
                                          children: (0, t.jsx)("span", {
                                            className: "relative z-10",
                                            children: "출시 알림 신청",
                                          }),
                                        }),
                                      ],
                                    }),
                                ],
                              },
                              `service-desc-${tf}`,
                            ),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, t.jsx)("section", {
                  ref: to,
                  className: "relative w-full",
                  children: (0, t.jsx)("div", {
                    className:
                      "relative left-1/2 -translate-x-1/2 w-screen bg-gradient-to-b from-[#FAFAFA] to-[#F7F7F7] pointer-events-none",
                    children: (0, t.jsx)("img", {
                      src: "/mako/poses/mako-sleep.png",
                      alt: "휴식하는 마코",
                      draggable: !1,
                      loading: "lazy",
                      decoding: "async",
                      className:
                        "pointer-events-none select-none block w-screen h-auto",
                    }),
                  }),
                }),
                ef && (0, t.jsx)(FloatingQuestion, {
                  targetOpacity: tr,
                      inputValue: C,
                      onInputChange: _,
                      compact: !0,
                      source: "floating",
                      maxWidth: "700px",
                      borderColor: "#1E3A8A",
                      buttonColor: "#1E3A8A",
                      buttonHoverColor: "#3B82F6",
                      disableInitialAnimation: !0,
                }),
              ],
            }),
          ],
        })
      );
    }
