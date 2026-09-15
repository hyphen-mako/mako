"use client";
import * as t from 'react/jsx-runtime';
import * as i from 'react';
import {motion,AnimatePresence,useTransform,useMotionTemplate} from 'framer-motion';
import {useRouter} from 'next/navigation';
import Image from 'next/image';
import Lenis from 'lenis';
import {recordHomeCommit} from './PerformanceProbe';
const s={motion},l={AnimatePresence},X={useRouter:()=>({push:(path)=>{window.location.href='https://pickcare.co.kr'+path}})},q={default:(props)=>t.jsx(Image,{...props,unoptimized:true})};
import {useVisualValue,useEntranceFade} from '../lib/useVisualValue';
import FloatingQuestion from './FloatingQuestion';
import er from './ServiceCard';
import eo from './QuestionInput';
import eb,{CardHoverContext as ew} from './GuideCard';
const GUIDE_CARDS = [
                                  {
                                    step: "STEP 1",
                                    title:
                                      "반려동물에 대해\n궁금한 걸 물어보세요",
                                    desc: "질환, 행동, 식습관, 산책, 제품 추천까지\n물어보면 바로 답변드려요.",
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
                                      "반려견 프로필 기반으로\n더 정확한 정보를 제공해요",
                                    desc: "품종, 나이, 질환, 환경에 따라\n완전히 다른 맞춤 답변을 드려요.",
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
                                      "반려견이 여러 마리라면\n쉽게 변경하면서 대화하세요",
                                    desc: "아이별로 각각 다른\n정보 기록 추천을 받을 수 있어요.",
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
                                      "제품 서비스와\n매장 정보까지 확인해보세요",
                                    desc: "브랜드 컨텐츠, 커뮤니티, 근처 매장,\n병원 정보까지 자동 연결돼요.",
                                    bg: "bg-[#00316B]",
                                    badgeTextClass: "text-[#00316B]",
                                    titleTextClass: "text-white",
                                    descTextClass: "text-white/90",
                                    rotate: 4,
                                    zIndex: 4,
                                  },
                                ];
const QUESTION_PLACEHOLDERS = [
          "사료를 안 먹고 간식만 찾아요",
          "강아지가 자꾸 발을 핥아요",
          "고양이 화장실 모래 추천해주세요",
          "반려견 분리불안 훈련법 알려줘",
          "노령견 건강검진 주기 공금해요",
        ];
// Scroll thresholds, timing sequences, responsive markup and content extracted
// from the public Pickcare home page. Backend/auth/analytics intentionally isolated.
    export default function HomeExperience() {
      i.useEffect(recordHomeCommit);
      let e = (0, X.useRouter)(),
        [a, r] = (0, i.useState)(!1),
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
            (v.current && v.current.scrollTo(0, { immediate: true, force: true }),
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
      let tw = i.useCallback((t) => {
          t.preventDefault();
          let i = new FormData(t.currentTarget).get("query");
          (i?.trim()
            ? e.push(`/chat?message=${encodeURIComponent(i.trim())}`)
            : e.push("/chat"),
            _(""));
        }, []),
        tb = QUESTION_PLACEHOLDERS;
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
                  children: "픽케어(PiCKCARE) - 반려동물 맞춤형 AI 케어 서비스",
                }),
                (0, t.jsxs)("section", {
                  ref: F,
                  className:
                    "sticky top-0 h-screen mobile:min-h-[120svh] w-full flex items-center justify-center overflow-hidden z-0 relative",
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
                            src: "/images/main/watermark.svg",
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
                                                    src: "/images/main/picky_hover_face.webp",
                                                    alt: "픽키",
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
                                                  "안녕하세요! 저는 픽키에요.",
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
                                                      "다양한 정보를 바탕으로 우리 아이에게 딱 맞는 정보를",
                                                  }),
                                                  (0, t.jsx)("br", {}),
                                                  (0, t.jsx)("span", {
                                                    className:
                                                      "whitespace-nowrap",
                                                    children:
                                                      "쉽고 빠르게 알려드릴게요.",
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
                                                "반려견에 대해 궁금한 걸 물어보세요!",
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
                        src: "/images/main/picky_3d_face_lookup.webp",
                        alt: "픽키",
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
                            src: "/images/main/picky_3d_face1.webp",
                            alt: "픽키 캐릭터",
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
                                        "tablet:text-[36px] text-[52px] font-semibold text-gray-900 dark:text-white leading-tight tracking-tight",
                                      children: "반려생활의 모든 궁금증,",
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
                                            src: "/images/main/picky_3d_arrow.svg",
                                            alt: "",
                                            width: "90",
                                            height: "60",
                                            className:
                                              "w-[90px] h-[60px] tablet:w-[72px] tablet:h-[48px]",
                                          }),
                                        }),
                                        (0, t.jsx)("span", {
                                          className:
                                            "bg-[#3B82F6] text-white px-2 py-0.5 rounded-xl tablet:text-[36px] text-[52px] font-semibold leading-tight shadow-lg",
                                          children: "픽키",
                                        }),
                                        (0, t.jsx)("span", {
                                          className:
                                            "tablet:text-[36px] text-[52px] font-semibold text-gray-900 dark:text-white leading-tight tracking-tight",
                                          children: "에게 물어보세요",
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
                                      children: "반려생활의",
                                    }),
                                    (0, t.jsx)("h2", {
                                      className:
                                        "text-[28px] font-semibold text-gray-900 dark:text-white leading-tight tracking-tight",
                                      children: "모든 궁금증,",
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: "flex items-center gap-2 mt-1",
                                      children: [
                                        (0, t.jsx)("span", {
                                          className:
                                            "bg-[#3B82F6] text-white px-2 py-0.5 rounded-lg text-[28px] font-semibold leading-tight shadow-lg",
                                          children: "픽키",
                                        }),
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-[28px] font-semibold text-gray-900 dark:text-white leading-tight tracking-tight",
                                          children: "에게 물어보세요",
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
                                "대화로 완성되는 나만의 반려 생활 가이드",
                            }),
                            (0, t.jsx)("div", {
                              className:
                                "w-full mobile:max-w-none max-w-[700px] desktop:scale-100 origin-left",
                              children: (0, t.jsx)(eo, {
                                onSubmit: tw,
                                placeholders: tb,
                                inputValue: C,
                                onInputChange: _,
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
                                children: "픽키와 함께하는",
                              }),
                              (0, t.jsx)("img", {
                                src: "/images/main/adobestock.webp",
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
                                  src: "/images/Character_Official_Source/03.set_motion.002.webp",
                                  alt: "픽키 캐릭터",
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
                                        children: "스마트 반려생활",
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
                                              "반려동물에 대해\n궁금한 걸 물어보세요",
                                            desc: "질환, 행동, 식습관, 산책, 제품 추천까지\n물어보면 바로 답변드려요.",
                                            bg: "bg-[#0F7DFF]",
                                            badgeTextClass: "text-[#0F7DFF]",
                                            titleTextClass: "text-white",
                                            descTextClass: "text-white/90",
                                            iconSrc:
                                              "/images/Character_Official_Source/01.main_motion.001.webp",
                                            iconClass:
                                              "absolute -top-8 right-3 w-[140px] h-auto",
                                          },
                                          {
                                            step: "STEP 2",
                                            title:
                                              "반려견 프로필 기반으로\n더 정확한 정보를 제공해요",
                                            desc: "품종, 나이, 질환, 환경에 따라\n완전히 다른 맞춤 답변을 드려요.",
                                            bg: "bg-[#295BB7]",
                                            badgeTextClass: "text-[#295BB7]",
                                            titleTextClass: "text-white",
                                            descTextClass: "text-white/90",
                                            iconSrc:
                                              "/images/main/sec2_profile.webp",
                                            iconClass:
                                              "absolute top-3 right-3 w-[140px] h-auto",
                                          },
                                          {
                                            step: "STEP 3",
                                            title:
                                              "반려견이 여러 마리라면\n쉽게 변경하면서 대화하세요",
                                            desc: "아이별로 각각 다른\n정보 기록 추천을 받을 수 있어요.",
                                            bg: "bg-[#DDEDFF]",
                                            badgeTextClass: "text-[#00316B]",
                                            titleTextClass: "text-[#00316B]",
                                            descTextClass: "text-[#00316B]",
                                            iconSrc:
                                              "/images/main/sec2_multi_family.webp",
                                            iconClass:
                                              "absolute top-3 right-3 w-[150px] h-auto",
                                          },
                                          {
                                            step: "STEP 4",
                                            title:
                                              "제품 서비스와\n매장 정보까지 확인해보세요",
                                            desc: "브랜드 컨텐츠, 커뮤니티, 근처 매장,\n병원 정보까지 자동 연결돼요.",
                                            bg: "bg-[#00316B]",
                                            badgeTextClass: "text-[#00316B]",
                                            titleTextClass: "text-white",
                                            descTextClass: "text-white/90",
                                            iconSrc:
                                              "/images/main/sec2_service_cloud.webp",
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
                                        children: "픽키와",
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
                                      src: "/images/Character_Official_Source/03.set_motion.002.webp",
                                      alt: "픽키 캐릭터",
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
                                          children: "스마트 반려생활",
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
                                  children: "픽라운지",
                                }),
                                (0, t.jsx)("h3", {
                                  className:
                                    "text-[20px] font-semibold text-white leading-tight whitespace-pre-line",
                                  children: `반려생활 콘텐츠가
한 곳에 모이는 순간`,
                                }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: "w-[180px] h-[180px]",
                              children: (0, t.jsx)("img", {
                                src: "/images/Character_Official_Source/01.main_motion.002.webp",
                                alt: "픽라운지",
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
                                    "전문 에디터가 정리한",
                                    " ",
                                    (0, t.jsx)("span", {
                                      className: "text-blue-600 font-semibold",
                                      children: "반려생활 팁",
                                    }),
                                    "부터 반려인들이 많이 찾는 산책 코스, 여행지, 오프라인 매장 추천까지",
                                    (0, t.jsxs)("span", {
                                      className: "text-blue-600 font-semibold",
                                      children: [" ", "픽라운지"],
                                    }),
                                    "에서 모두 확인해요.",
                                  ],
                                }),
                                (0, t.jsx)("a", {
                                  href: "https://pickcare.co.kr/lounge",
                                  className:
                                    "block w-full py-3 text-white text-center font-bold rounded-xl bg-[#2563EB] shadow-[0_3px_0_#1E4ACC] active:translate-y-[2px] active:shadow-[0_1px_0_#1E4ACC]",
                                  children: "픽라운지 둘러보기",
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
                                  children: "커뮤니티",
                                }),
                                (0, t.jsx)("h3", {
                                  className:
                                    "text-[20px] font-semibold text-blue-900 leading-tight whitespace-pre-line",
                                  children: `반려인들의 생생한
경험이 모이는 곳`,
                                }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: "w-[180px] h-[180px]",
                              children: (0, t.jsx)("img", {
                                src: "/images/Character_Official_Source/community-hero.webp",
                                alt: "커뮤니티",
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
                                    "반려생활에 대해 궁금한 점, 자랑하고 싶은 순간, 정보가 필요한 문제 상황까지 다른",
                                    " ",
                                    (0, t.jsx)("span", {
                                      className: "text-blue-600 font-semibold",
                                      children: "반려인들의 이야기와 경험",
                                    }),
                                    "을 공유할 수 있어요.",
                                  ],
                                }),
                                (0, t.jsx)("a", {
                                  href: "https://pickcare.co.kr/community",
                                  className:
                                    "block w-full py-3 text-white text-center font-bold rounded-xl bg-[#2563EB] shadow-[0_3px_0_#1E4ACC] active:translate-y-[2px] active:shadow-[0_1px_0_#1E4ACC]",
                                  children: "커뮤니티 구경하기",
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
                                  children: "마이페이지",
                                }),
                                (0, t.jsx)("h3", {
                                  className:
                                    "text-[20px] font-semibold text-white leading-tight whitespace-pre-line",
                                  children: `나와 반려동물의
기록을 담는 곳`,
                                }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: "w-[180px] h-[180px]",
                              children: (0, t.jsx)("img", {
                                src: "/images/Character_Official_Source/01.main_motion.004.webp",
                                alt: "마이페이지",
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
                                    "반려동물",
                                    " ",
                                    (0, t.jsx)("span", {
                                      className: "text-blue-600 font-semibold",
                                      children: "프로필 등록",
                                    }),
                                    ", 나의 활동 기록, 작성한 글과 저장한 콘텐츠까지 내 반려생활을",
                                    " ",
                                    (0, t.jsx)("span", {
                                      className: "text-blue-600 font-semibold",
                                      children: "정리하고 관리",
                                    }),
                                    "할 수 있어요.",
                                  ],
                                }),
                                (0, t.jsx)("a", {
                                  href: "https://pickcare.co.kr/mypage",
                                  className:
                                    "block w-full py-3 text-white text-center font-bold rounded-xl bg-[#2563EB] shadow-[0_3px_0_#1E4ACC] active:translate-y-[2px] active:shadow-[0_1px_0_#1E4ACC]",
                                  children: "마이페이지 바로가기",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                (0, t.jsx)("section", {
                  id: "section3",
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
                              title: "픽라운지",
                              headline: `반려생활 콘텐츠가
한 곳에 모이는 순간`,
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
                              title: "커뮤니티",
                              headline: `반려인들의 생생한
경험이 모이는 곳`,
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
                              title: "마이페이지",
                              headline: `나와 반려동물의
기록을 담는 곳`,
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
                                  src: "/images/Character_Official_Source/01.main_motion.002.webp",
                                  alt: "픽라운지",
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
                                  src: "/images/Character_Official_Source/community-hero.webp",
                                  alt: "커뮤니티",
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
                                  src: "/images/Character_Official_Source/01.main_motion.004.webp",
                                  alt: "마이페이지",
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
                                              "전문 에디터가 정리한",
                                              (0, t.jsx)("br", {}),
                                              (0, t.jsx)("span", {
                                                className:
                                                  "inline-block bg-blue-50 text-blue-600 font-semibold px-1 py-0.5 rounded",
                                                children: "반려생활 팁부터",
                                              }),
                                              "부터",
                                              (0, t.jsx)("br", {}),
                                              "반려인들이 많이 찾는 산책 코스,",
                                              (0, t.jsx)("br", {}),
                                              "여행지, 오프라인 매장 추천까지",
                                              (0, t.jsx)("br", {}),
                                              (0, t.jsx)("span", {
                                                className:
                                                  "inline-block bg-blue-50 text-blue-600 font-semibold px-1 py-0.5 rounded",
                                                children: "픽라운지",
                                              }),
                                              "에서 모두 확인해요.",
                                              (0, t.jsx)("br", {}),
                                              (0, t.jsx)("br", {}),
                                              "필요한 정보만 골라보는 게 아니라",
                                              (0, t.jsx)("br", {}),
                                              (0, t.jsx)("span", {
                                                className:
                                                  "inline-block bg-blue-50 text-blue-600 font-semibold px-1 py-0.5 rounded",
                                                children:
                                                  "내 반려동물에게 맞는 콘텐츠",
                                              }),
                                              "를",
                                              (0, t.jsx)("br", {}),
                                              "더 쉽게 만날 수 있어요.",
                                            ],
                                          }),
                                        }),
                                        (0, t.jsx)("a", {
                                          href: "https://pickcare.co.kr/lounge",
                                          className:
                                            " w-full py-4 text-white text-lg font-bold  rounded-xl relative overflow-hidden bg-[#2563EB] transition-all duration-150 shadow-[0_4px_0_#1E4ACC] active:translate-y-[3px] active:shadow-[0_1px_0_#1E4ACC] mt-auto flex items-center justify-center no-underline ",
                                          children: (0, t.jsx)("span", {
                                            className: "relative z-10",
                                            children: "픽라운지 둘러보기",
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
                                                "반려생활에 대해 궁금한 점,",
                                                (0, t.jsx)("br", {}),
                                                "자랑하고 싶은 순간,",
                                                (0, t.jsx)("br", {}),
                                                "정보가 필요한 문제 상황까지",
                                                (0, t.jsx)("br", {}),
                                                "다른",
                                                (0, t.jsx)("span", {
                                                  className:
                                                    "inline-block bg-blue-50 text-blue-600 font-semibold px-1 py-0.5 rounded",
                                                  children:
                                                    "반려인들의 이야기와 경험",
                                                }),
                                                "을 공유할 수 있어요.",
                                              ],
                                            }),
                                            (0, t.jsxs)("p", {
                                              className:
                                                "text-[18px] text-gray-900 leading-relaxed font-medium",
                                              children: [
                                                "사진 후기, Q&A, 공감 스토리가",
                                                (0, t.jsx)("br", {}),
                                                "모여",
                                                (0, t.jsx)("span", {
                                                  className:
                                                    "inline-block bg-blue-50 text-blue-600 font-semibold px-1 py-0.5 rounded",
                                                  children:
                                                    "진짜 반려생활 정보",
                                                }),
                                                "를",
                                                (0, t.jsx)("br", {}),
                                                "찾기 쉬운 공간입니다.",
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, t.jsx)("a", {
                                          href: "https://pickcare.co.kr/community",
                                          className:
                                            " w-full py-4 text-white text-lg font-bold  rounded-xl relative overflow-hidden bg-[#2563EB] transition-all duration-150 shadow-[0_4px_0_#1E4ACC] active:translate-y-[3px] active:shadow-[0_1px_0_#1E4ACC] mt-auto flex items-center justify-center no-underline ",
                                          children: (0, t.jsx)("span", {
                                            className: "relative z-10",
                                            children: "커뮤니티 구경하기",
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
                                                "반려동물",
                                                " ",
                                                (0, t.jsx)("span", {
                                                  className:
                                                    "inline-block bg-blue-50 text-blue-600 font-semibold px-1 py-0.5 rounded",
                                                  children: "프로필 등록",
                                                }),
                                                ",",
                                                (0, t.jsx)("br", {}),
                                                "나의 활동 기록, 작성한 글과",
                                                (0, t.jsx)("br", {}),
                                                "저장한 콘텐츠까지 내 반려생활을",
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
                                                "여러 마리와 반려 중이어도",
                                                (0, t.jsx)("br", {}),
                                                "프로필을 바꿔가며",
                                                (0, t.jsx)("br", {}),
                                                (0, t.jsx)("span", {
                                                  className:
                                                    "inline-block bg-blue-50 text-blue-600 font-semibold px-1 py-0.5 rounded",
                                                  children:
                                                    "각 반려동물에게 맞는 케어",
                                                }),
                                                "를",
                                                (0, t.jsx)("br", {}),
                                                "받을 수 있어요.",
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, t.jsx)("a", {
                                          href: "https://pickcare.co.kr/mypage",
                                          className:
                                            " w-full py-4 text-white text-lg font-bold  rounded-xl relative overflow-hidden bg-[#2563EB] transition-all duration-150 shadow-[0_4px_0_#1E4ACC] active:translate-y-[3px] active:shadow-[0_1px_0_#1E4ACC] mt-auto flex items-center justify-center no-underline ",
                                          children: (0, t.jsx)("span", {
                                            className: "relative z-10",
                                            children: "마이페이지 바로가기",
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
                      src: "/images/main/footer_3dface_picky.webp",
                      alt: "픽키",
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
                      onSubmit: tw,
                      placeholders: tb,
                      inputValue: C,
                      onInputChange: _,
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
