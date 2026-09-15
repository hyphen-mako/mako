!(function () {
  try {
    var e =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof global
            ? global
            : "undefined" != typeof window
              ? window
              : "undefined" != typeof self
                ? self
                : {},
      n = new e.Error().stack;
    n &&
      ((e._debugIds || (e._debugIds = {}))[n] =
        "9d815418-5f54-3cf0-dddb-f774785bd79d");
  } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  952683,
  (e) => {
    "use strict";
    var t = e.i(843476),
      i = e.i(271645),
      s = e.i(846932),
      l = e.i(88653),
      n = e.i(930551),
      a = e.i(486427),
      o = e.i(965566),
      r = e.i(260830),
      c = e.i(287022);
    function d(e, t) {
      let i,
        s = () => {
          let { currentTime: s } = t,
            l = (null === s ? 0 : s.value) / 100;
          (i !== l && e(l), (i = l));
        };
      return (c.frame.preUpdate(s, !0), () => (0, c.cancelFrame)(s));
    }
    function h(e) {
      return (
        "undefined" != typeof window &&
        (e ? (0, n.supportsViewTimeline)() : (0, n.supportsScrollTimeline)())
      );
    }
    var p = e.i(661327),
      u = e.i(783920),
      m = e.i(325791);
    let x = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0,
      }),
      f = {
        x: { length: "Width", position: "Left" },
        y: { length: "Height", position: "Top" },
      };
    function g(e, t, i, s) {
      let l = i[t],
        { length: n, position: a } = f[t],
        o = l.current,
        r = i.time;
      ((l.current = Math.abs(e[`scroll${a}`])),
        (l.scrollLength = e[`scroll${n}`] - e[`client${n}`]),
        (l.offset.length = 0),
        (l.offset[0] = 0),
        (l.offset[1] = l.scrollLength),
        (l.progress = (0, u.progress)(0, l.scrollLength, l.current)));
      let c = s - r;
      l.velocity = c > 50 ? 0 : (0, m.velocityPerSecond)(l.current - o, c);
    }
    e.i(247167);
    var w = e.i(344230),
      b = e.i(515923),
      y = e.i(476959),
      v = e.i(772846);
    let j = { start: 0, center: 0.5, end: 1 };
    function N(e, t, i = 0) {
      let s = 0;
      if ((e in j && (e = j[e]), "string" == typeof e)) {
        let t = parseFloat(e);
        e.endsWith("px")
          ? (s = t)
          : e.endsWith("%")
            ? (e = t / 100)
            : e.endsWith("vw")
              ? (s = (t / 100) * document.documentElement.clientWidth)
              : e.endsWith("vh")
                ? (s = (t / 100) * document.documentElement.clientHeight)
                : (e = t);
      }
      return ("number" == typeof e && (s = t * e), i + s);
    }
    let S = [0, 0],
      k = [
        [0, 0],
        [1, 1],
      ],
      E = { x: 0, y: 0 },
      T = new WeakMap(),
      C = new WeakMap(),
      _ = new WeakMap(),
      z = new WeakMap(),
      L = new WeakMap(),
      F = (e) => (e === document.scrollingElement ? window : e);
    function A(
      e,
      {
        container: t = document.scrollingElement,
        trackContentSize: i = !1,
        ...s
      } = {},
    ) {
      if (!t) return r.noop;
      let l = _.get(t);
      l || ((l = new Set()), _.set(t, l));
      let n = (function (e, t, i, s = {}) {
        return {
          measure: (t) => {
            (!(function (e, t = e, i) {
              if (((i.x.targetOffset = 0), (i.y.targetOffset = 0), t !== e)) {
                let s = t;
                for (; s && s !== e;)
                  ((i.x.targetOffset += s.offsetLeft),
                    (i.y.targetOffset += s.offsetTop),
                    (s = s.offsetParent));
              }
              ((i.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
                (i.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
                (i.x.containerLength = e.clientWidth),
                (i.y.containerLength = e.clientHeight));
            })(e, s.target, i),
              g(e, "x", i, t),
              g(e, "y", i, t),
              (i.time = t),
              (s.offset || s.target) &&
                (function (e, t, i) {
                  let { offset: s = k } = i,
                    { target: l = e, axis: n = "y" } = i,
                    a = "y" === n ? "height" : "width",
                    o =
                      l !== e
                        ? (function (e, t) {
                            let i = { x: 0, y: 0 },
                              s = e;
                            for (; s && s !== t;)
                              if ((0, v.isHTMLElement)(s))
                                ((i.x += s.offsetLeft),
                                  (i.y += s.offsetTop),
                                  (s = s.offsetParent));
                              else if ("svg" === s.tagName) {
                                let e = s.getBoundingClientRect(),
                                  t = (s =
                                    s.parentElement).getBoundingClientRect();
                                ((i.x += e.left - t.left),
                                  (i.y += e.top - t.top));
                              } else if (s instanceof SVGGraphicsElement) {
                                let { x: e, y: t } = s.getBBox();
                                ((i.x += e), (i.y += t));
                                let l = null,
                                  n = s.parentNode;
                                for (; !l;)
                                  ("svg" === n.tagName && (l = n),
                                    (n = s.parentNode));
                                s = l;
                              } else break;
                            return i;
                          })(l, e)
                        : E,
                    r =
                      l === e
                        ? { width: e.scrollWidth, height: e.scrollHeight }
                        : "getBBox" in l && "svg" !== l.tagName
                          ? l.getBBox()
                          : { width: l.clientWidth, height: l.clientHeight },
                    c = { width: e.clientWidth, height: e.clientHeight };
                  t[n].offset.length = 0;
                  let d = !t[n].interpolate,
                    h = s.length;
                  for (let e = 0; e < h; e++) {
                    let i = (function (e, t, i, s) {
                      let l = Array.isArray(e) ? e : S,
                        n = 0;
                      return (
                        "number" == typeof e
                          ? (l = [e, e])
                          : "string" == typeof e &&
                            (l = (e = e.trim()).includes(" ")
                              ? e.split(" ")
                              : [e, j[e] ? e : "0"]),
                        (n = N(l[0], i, s)) - N(l[1], t)
                      );
                    })(s[e], c[a], r[a], o[n]);
                    (d || i === t[n].interpolatorOffsets[e] || (d = !0),
                      (t[n].offset[e] = i));
                  }
                  (d &&
                    ((t[n].interpolate = (0, w.interpolate)(
                      t[n].offset,
                      (0, b.defaultOffset)(s),
                      { clamp: !1 },
                    )),
                    (t[n].interpolatorOffsets = [...t[n].offset])),
                    (t[n].progress = (0, y.clamp)(
                      0,
                      1,
                      t[n].interpolate(t[n].current),
                    )));
                })(e, i, s));
          },
          notify: () => t(i),
        };
      })(t, e, { time: 0, x: x(), y: x() }, s);
      if ((l.add(n), !T.has(t))) {
        let e = () => {
            for (let e of l) e.measure(c.frameData.timestamp);
            c.frame.preUpdate(i);
          },
          i = () => {
            for (let e of l) e.notify();
          },
          s = () => c.frame.read(e);
        T.set(t, s);
        let n = F(t);
        (window.addEventListener("resize", s),
          t !== document.documentElement && C.set(t, (0, p.resize)(t, s)),
          n.addEventListener("scroll", s),
          s());
      }
      if (i && !L.has(t)) {
        let e = T.get(t),
          i = { width: t.scrollWidth, height: t.scrollHeight };
        z.set(t, i);
        let s = c.frame.read(() => {
          let s = t.scrollWidth,
            l = t.scrollHeight;
          (i.width !== s || i.height !== l) &&
            (e(), (i.width = s), (i.height = l));
        }, !0);
        L.set(t, s);
      }
      let a = T.get(t);
      return (
        c.frame.read(a, !1, !0),
        () => {
          (0, c.cancelFrame)(a);
          let e = _.get(t);
          if (!e || (e.delete(n), e.size)) return;
          let i = T.get(t);
          (T.delete(t),
            i &&
              (F(t).removeEventListener("scroll", i),
              C.get(t)?.(),
              window.removeEventListener("resize", i)));
          let s = L.get(t);
          (s && ((0, c.cancelFrame)(s), L.delete(t)), z.delete(t));
        }
      );
    }
    let M = [
        [
          [
            [0, 1],
            [1, 1],
          ],
          "entry",
        ],
        [
          [
            [0, 0],
            [1, 0],
          ],
          "exit",
        ],
        [
          [
            [1, 0],
            [0, 1],
          ],
          "cover",
        ],
        [k, "contain"],
      ],
      O = { start: 0, end: 1 };
    function W(e) {
      if (!e) return { rangeStart: "contain 0%", rangeEnd: "contain 100%" };
      for (let [t, i] of M)
        if (
          (function (e, t) {
            let i = (function (e) {
              if (2 !== e.length) return;
              let t = [];
              for (let i of e)
                if (Array.isArray(i)) t.push(i);
                else {
                  if ("string" != typeof i) return;
                  let e = (function (e) {
                    let t = e.trim().split(/\s+/);
                    if (2 !== t.length) return;
                    let i = O[t[0]],
                      s = O[t[1]];
                    if (void 0 !== i && void 0 !== s) return [i, s];
                  })(i);
                  if (!e) return;
                  t.push(e);
                }
              return t;
            })(e);
            if (!i) return !1;
            for (let e = 0; e < 2; e++) {
              let s = i[e],
                l = t[e];
              if (s[0] !== l[0] || s[1] !== l[1]) return !1;
            }
            return !0;
          })(e, t)
        )
          return { rangeStart: `${i} 0%`, rangeEnd: `${i} 100%` };
    }
    let R = new Map();
    function H(e) {
      let t = { value: 0 },
        i = A((i) => {
          t.value = 100 * i[e.axis].progress;
        }, e);
      return { currentTime: t, cancel: i };
    }
    function B({ source: e, container: t, ...i }) {
      let { axis: s } = i;
      e && (t = e);
      let l = R.get(t);
      l || ((l = new Map()), R.set(t, l));
      let n = i.target ?? "self",
        a = l.get(n);
      a || ((a = {}), l.set(n, a));
      let o = s + (i.offset ?? []).join(",");
      return (
        a[o] ||
          (i.target && h(i.target)
            ? W(i.offset)
              ? (a[o] = new ViewTimeline({ subject: i.target, axis: s }))
              : (a[o] = H({ container: t, ...i }))
            : h()
              ? (a[o] = new ScrollTimeline({ source: t, axis: s }))
              : (a[o] = H({ container: t, ...i }))),
        a[o]
      );
    }
    function P(
      e,
      { axis: t = "y", container: i = document.scrollingElement, ...s } = {},
    ) {
      var l, n;
      let a, o, c;
      if (!i) return r.noop;
      let p = { axis: t, container: i, ...s };
      return "function" == typeof e
        ? ((l = e),
          (n = p),
          2 === l.length
            ? A((e) => {
                l(e[n.axis].progress, e);
              }, n)
            : d(l, B(n)))
        : ((a = B(p)),
          (o = p.target ? W(p.offset) : void 0),
          (c = p.target ? h(p.target) && !!o : h()),
          e.attachTimeline({
            timeline: c ? a : void 0,
            ...(o && c && { rangeStart: o.rangeStart, rangeEnd: o.rangeEnd }),
            observe: (e) => (
              e.pause(),
              d((t) => {
                e.time = e.iterationDuration * t;
              }, a)
            ),
          }));
    }
    var D = e.i(947414),
      I = e.i(674008);
    let $ = () => ({
        scrollX: (0, a.motionValue)(0),
        scrollY: (0, a.motionValue)(0),
        scrollXProgress: (0, a.motionValue)(0),
        scrollYProgress: (0, a.motionValue)(0),
      }),
      V = (e) => !!e && !e.current;
    function Y(e, t, i, s) {
      return {
        factory: (l) =>
          P(l, {
            ...t,
            axis: e,
            container: i?.current || void 0,
            target: s?.current || void 0,
          }),
        times: [0, 1],
        keyframes: [0, 1],
        ease: (e) => e,
        duration: 1,
      };
    }
    var X = e.i(618566),
      q = e.i(657688),
      U = e.i(37727),
      K = e.i(136388),
      Z = e.i(754984);
    let G = "pcf_welcome_tutorial_seen_v1",
      J = [
        {
          image: "/images/Character_Official_Source/01.main_motion.001.webp",
          alt: "픽케어 마스코트 Picky 캐릭터",
          title: "안녕! 나는 Picky야",
          body: "반려 생활의 모든 순간,\nPicky가 네 곁에서 함께할게.",
        },
        {
          image: "/images/main/sec2_picky_computer.svg",
          alt: "Picky가 컴퓨터로 정보를 찾는 일러스트",
          title: "궁금한 건 바로 물어봐!",
          body: '홈 화면의 질문창에 편하게 말해봐.\n"우리 아이 사료 추천해줘"처럼 자유롭게!',
        },
        {
          image: "/images/Character_Official_Source/03.set_motion.005.webp",
          alt: "반려동물과 함께하는 Picky 일러스트",
          title: "그럼 첫 질문 해볼까?",
          body: "반려 생활의 어떤 고민이든\nPicky가 답해줄게.",
        },
      ];
    function Q() {
      try {
        window.localStorage.setItem(G, "1");
      } catch {}
    }
    function ee() {
      let e = (0, X.useRouter)(),
        n = !!(0, K.useUserId)(),
        [a, o] = (0, i.useState)(!1),
        [r, c] = (0, i.useState)(0),
        [d, h] = (0, i.useState)(!0),
        p = (0, i.useRef)(!1);
      (0, i.useEffect)(() => {
        if (
          (function () {
            try {
              return "1" === window.localStorage.getItem(G);
            } catch {
              return !0;
            }
          })()
        )
          return;
        let e = null,
          t = !1,
          i = () => {
            t || ((t = !0), o(!0), (0, Z.trackTutorialShow)());
          },
          s = () => {
            (e && clearTimeout(e), (e = setTimeout(i, 300)));
          };
        window.addEventListener("home-scroll-unlocked", s, { once: !0 });
        let l = setTimeout(i, 5e3);
        return () => {
          (window.removeEventListener("home-scroll-unlocked", s),
            e && clearTimeout(e),
            clearTimeout(l));
        };
      }, []);
      let u = (0, i.useCallback)(
        (e) => {
          p.current ||
            ((p.current = !0),
            (0, Z.trackTutorialSkip)(e, r + 1, d),
            d && Q(),
            o(!1));
        },
        [r, d],
      );
      (0, i.useEffect)(() => {
        if (!a) return;
        let e = (e) => {
          "Escape" === e.key && u("esc");
        };
        return (
          window.addEventListener("keydown", e),
          () => window.removeEventListener("keydown", e)
        );
      }, [a, u]);
      let m = (e) => {
          e !== r &&
            ((0, Z.trackTutorialStep)(r + 1, e + 1, e > r ? "next" : "prev"),
            c(e));
        },
        x = J[r],
        f = 0 === r,
        g = r === J.length - 1;
      return (0, t.jsx)(l.AnimatePresence, {
        children:
          a &&
          (0, t.jsx)(s.motion.div, {
            className:
              "fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4 py-6",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.22 },
            onClick: (e) => {
              e.target === e.currentTarget && u("overlay");
            },
            role: "presentation",
            children: (0, t.jsxs)(s.motion.div, {
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": "welcome-tutorial-title",
              initial: { scale: 0.95, opacity: 0, y: 10 },
              animate: { scale: 1, opacity: 1, y: 0 },
              exit: { scale: 0.95, opacity: 0 },
              transition: { type: "spring", duration: 0.4, bounce: 0.2 },
              className:
                "relative w-full max-w-[92vw] overflow-hidden rounded-[20px] bg-white shadow-[0_12px_32px_rgba(15,125,255,0.14)] tablet:max-w-[480px] desktop:max-w-[560px]",
              children: [
                (0, t.jsx)("button", {
                  type: "button",
                  "aria-label": "튜토리얼 닫기",
                  onClick: () => u("x"),
                  className:
                    "absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-sub4 backdrop-blur-sm transition-colors hover:bg-white hover:text-black",
                  children: (0, t.jsx)(U.X, { size: 18, strokeWidth: 2.2 }),
                }),
                (0, t.jsxs)("div", {
                  className:
                    "flex min-h-[420px] flex-col tablet:min-h-[340px] tablet:flex-row desktop:min-h-[360px] desktop:flex-row",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-br from-sub2 via-white to-[#FFE7DD] p-4 tablet:w-[45%] tablet:p-6 desktop:w-[45%] desktop:p-6",
                      style: { minHeight: 160 },
                      children: (0, t.jsx)(l.AnimatePresence, {
                        mode: "wait",
                        children: (0, t.jsx)(
                          s.motion.div,
                          {
                            initial: { opacity: 0, scale: 0.92 },
                            animate: { opacity: 1, scale: 1 },
                            exit: { opacity: 0, scale: 0.92 },
                            transition: { duration: 0.3 },
                            className:
                              "relative h-28 w-28 tablet:h-40 tablet:w-40 desktop:h-48 desktop:w-48",
                            children: (0, t.jsx)(q.default, {
                              src: x.image,
                              alt: x.alt,
                              fill: !0,
                              sizes:
                                "(max-width: 767px) 112px, (max-width: 1079px) 160px, 192px",
                              className:
                                "object-contain drop-shadow-[0_8px_20px_rgba(15,125,255,0.15)]",
                              priority: !0,
                            }),
                          },
                          `img-${r}`,
                        ),
                      }),
                    }),
                    (0, t.jsxs)("div", {
                      className:
                        "flex flex-1 flex-col p-5 tablet:p-6 desktop:p-7",
                      children: [
                        (0, t.jsx)("div", {
                          className: "mb-5 flex gap-1.5",
                          role: "tablist",
                          "aria-label": "튜토리얼 진행",
                          children: J.map((e, i) =>
                            (0, t.jsx)(
                              "button",
                              {
                                type: "button",
                                role: "tab",
                                "aria-selected": i === r,
                                "aria-label": `스텝 ${i + 1} / ${J.length}`,
                                onClick: () => m(i),
                                className: `h-1 rounded-full transition-all ${i === r ? "w-8 bg-main" : "w-5 bg-sub2 hover:bg-sub3"}`,
                              },
                              i,
                            ),
                          ),
                        }),
                        (0, t.jsx)(l.AnimatePresence, {
                          mode: "wait",
                          children: (0, t.jsxs)(
                            s.motion.div,
                            {
                              initial: { opacity: 0, y: 8 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, y: -8 },
                              transition: { duration: 0.25 },
                              className: "flex-1",
                              children: [
                                (0, t.jsx)("h2", {
                                  id: "welcome-tutorial-title",
                                  className:
                                    "mb-3 break-keep text-[18px] font-black leading-tight text-black tablet:text-[20px] desktop:text-[22px]",
                                  children: x.title,
                                }),
                                (0, t.jsx)("p", {
                                  className:
                                    "whitespace-pre-line break-keep text-[13px] leading-relaxed text-sub4 tablet:text-[14px] desktop:text-[14px]",
                                  children: x.body,
                                }),
                              ],
                            },
                            `content-${r}`,
                          ),
                        }),
                        (0, t.jsxs)("div", {
                          className: "mt-6 flex flex-col gap-3",
                          children: [
                            (0, t.jsxs)("div", {
                              className: "flex gap-2",
                              children: [
                                !f &&
                                  (0, t.jsx)("button", {
                                    type: "button",
                                    onClick: () => m(r - 1),
                                    className:
                                      "flex h-11 items-center justify-center rounded-[10px] border border-sub2 bg-white px-4 text-[13px] font-bold text-sub4 transition-colors hover:bg-sub2/40",
                                    children: "이전",
                                  }),
                                g
                                  ? (0, t.jsx)("button", {
                                      type: "button",
                                      onClick: () => {
                                        (Q(),
                                          (0, Z.trackTutorialComplete)(
                                            "chat",
                                            n,
                                          ),
                                          o(!1),
                                          e.push("/chat"));
                                      },
                                      autoFocus: !0,
                                      className:
                                        "flex h-11 flex-1 items-center justify-center rounded-[10px] bg-main px-4 text-[13px] font-bold text-white transition-colors hover:bg-[#1A8CFF]",
                                      children: "Picky에게 물어보기",
                                    })
                                  : (0, t.jsx)("button", {
                                      type: "button",
                                      onClick: () => m(r + 1),
                                      autoFocus: !0,
                                      className:
                                        "flex h-11 flex-1 items-center justify-center rounded-[10px] bg-main px-4 text-[13px] font-bold text-white transition-colors hover:bg-[#1A8CFF]",
                                      children: "다음",
                                    }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "flex items-center justify-between text-[11px]",
                              children: [
                                (0, t.jsxs)("label", {
                                  className:
                                    "flex cursor-pointer items-center gap-1.5 text-sub4 select-none",
                                  children: [
                                    (0, t.jsx)("input", {
                                      type: "checkbox",
                                      checked: d,
                                      onChange: (e) => h(e.target.checked),
                                      className: "h-3.5 w-3.5 accent-main",
                                    }),
                                    "다시 보지 않기",
                                  ],
                                }),
                                (0, t.jsx)("button", {
                                  type: "button",
                                  onClick: () => u("skip"),
                                  className:
                                    "text-sub4 underline-offset-2 hover:text-black hover:underline",
                                  children: "건너뛰기",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      });
    }
    var et = e.i(934055),
      ei = e.i(193750),
      es = e.i(835533);
    let el = "signup_reminder_dismissed";
    function en() {
      let e = (0, et.useAppDispatch)(),
        t = (0, X.useRouter)(),
        s = (0, X.usePathname)(),
        l = (0, et.useAppSelector)((e) => e.auth.user),
        n = (0, et.useAppSelector)((e) => e.modal.isOpen),
        a = (0, i.useRef)(!1);
      return (
        (0, i.useEffect)(() => {
          if (
            "/" !== s ||
            !l ||
            !(0, es.isSignupIncomplete)(l) ||
            n ||
            a.current
          )
            return;
          try {
            if (
              "1" === window.sessionStorage.getItem(el) ||
              "1" !==
                window.localStorage.getItem("pcf_welcome_tutorial_seen_v1")
            )
              return;
          } catch {
            return;
          }
          a.current = !0;
          let i = () => {
            try {
              window.sessionStorage.setItem(el, "1");
            } catch {}
          };
          e(
            (0, ei.openModal)({
              modalType: "default",
              mainText: "아직 본인인증이 되지 않았어요",
              subText:
                "본인인증을 완료하면 우리 아이에게\n더 꼭 맞는 정보를 받아볼 수 있어요",
              cancelText: "나중에",
              confirmText: "본인인증 하러 가기",
              onCancel: i,
              onConfirm: () => {
                i();
                try {
                  window.sessionStorage.setItem("signupVerifyIntroSkip", "1");
                } catch {}
                t.push("/signup");
              },
            }),
          );
        }, [s, l, n, e, t]),
        (0, i.useEffect)(
          () => () => {
            a.current && e((0, ei.closeModal)());
          },
          [e],
        ),
        null
      );
    }
    var ea = e.i(619167);
    function eo({
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
    function er({
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
    function ec(e, t, i) {
      return Math.max(e, Math.min(t, i));
    }
    var ed = class {
        isRunning = !1;
        value = 0;
        from = 0;
        to = 0;
        currentTime = 0;
        lerp;
        duration;
        easing;
        onUpdate;
        advance(e) {
          if (!this.isRunning) return;
          let t = !1;
          if (this.duration && this.easing) {
            this.currentTime += e;
            let i = ec(0, this.currentTime / this.duration, 1),
              s = (t = i >= 1) ? 1 : this.easing(i);
            this.value = this.from + (this.to - this.from) * s;
          } else if (this.lerp) {
            var i, s, l, n;
            ((this.value =
              ((i = this.value),
              (s = this.to),
              (l = 60 * this.lerp),
              (1 - (n = 1 - Math.exp(-l * e))) * i + n * s)),
              Math.round(this.value) === this.to &&
                ((this.value = this.to), (t = !0)));
          } else ((this.value = this.to), (t = !0));
          (t && this.stop(), this.onUpdate?.(this.value, t));
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(
          e,
          t,
          { lerp: i, duration: s, easing: l, onStart: n, onUpdate: a },
        ) {
          ((this.from = this.value = e),
            (this.to = t),
            (this.lerp = i),
            (this.duration = s),
            (this.easing = l),
            (this.currentTime = 0),
            (this.isRunning = !0),
            n?.(),
            (this.onUpdate = a));
        }
      },
      eh = class {
        constructor(e, t, { autoResize: i = !0, debounce: s = 250 } = {}) {
          ((this.wrapper = e),
            (this.content = t),
            i &&
              ((this.debouncedResize = (function (e, t) {
                let i;
                return function (...s) {
                  let l = this;
                  (clearTimeout(i),
                    (i = setTimeout(() => {
                      ((i = void 0), e.apply(l, s));
                    }, t)));
                };
              })(this.resize, s)),
              this.wrapper instanceof Window
                ? window.addEventListener("resize", this.debouncedResize, !1)
                : ((this.wrapperResizeObserver = new ResizeObserver(
                    this.debouncedResize,
                  )),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(
                this.debouncedResize,
              )),
              this.contentResizeObserver.observe(this.content)),
            this.resize());
        }
        width = 0;
        height = 0;
        scrollHeight = 0;
        scrollWidth = 0;
        debouncedResize;
        wrapperResizeObserver;
        contentResizeObserver;
        destroy() {
          (this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            this.wrapper === window &&
              this.debouncedResize &&
              window.removeEventListener("resize", this.debouncedResize, !1));
        }
        resize = () => {
          (this.onWrapperResize(), this.onContentResize());
        };
        onWrapperResize = () => {
          this.wrapper instanceof Window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        };
        onContentResize = () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        };
        get limit() {
          return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height,
          };
        }
      },
      ep = class {
        events = {};
        emit(e, ...t) {
          let i = this.events[e] || [];
          for (let e = 0, s = i.length; e < s; e++) i[e]?.(...t);
        }
        on(e, t) {
          return (
            this.events[e]?.push(t) || (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
      },
      eu = 100 / 6,
      em = { passive: !1 },
      ex = class {
        constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
          ((this.element = e),
            (this.options = t),
            window.addEventListener("resize", this.onWindowResize, !1),
            this.onWindowResize(),
            this.element.addEventListener("wheel", this.onWheel, em),
            this.element.addEventListener("touchstart", this.onTouchStart, em),
            this.element.addEventListener("touchmove", this.onTouchMove, em),
            this.element.addEventListener("touchend", this.onTouchEnd, em));
        }
        touchStart = { x: 0, y: 0 };
        lastDelta = { x: 0, y: 0 };
        window = { width: 0, height: 0 };
        emitter = new ep();
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          (this.emitter.destroy(),
            window.removeEventListener("resize", this.onWindowResize, !1),
            this.element.removeEventListener("wheel", this.onWheel, em),
            this.element.removeEventListener(
              "touchstart",
              this.onTouchStart,
              em,
            ),
            this.element.removeEventListener("touchmove", this.onTouchMove, em),
            this.element.removeEventListener("touchend", this.onTouchEnd, em));
        }
        onTouchStart = (e) => {
          let { clientX: t, clientY: i } = e.targetTouches
            ? e.targetTouches[0]
            : e;
          ((this.touchStart.x = t),
            (this.touchStart.y = i),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: e }));
        };
        onTouchMove = (e) => {
          let { clientX: t, clientY: i } = e.targetTouches
              ? e.targetTouches[0]
              : e,
            s = -(t - this.touchStart.x) * this.options.touchMultiplier,
            l = -(i - this.touchStart.y) * this.options.touchMultiplier;
          ((this.touchStart.x = t),
            (this.touchStart.y = i),
            (this.lastDelta = { x: s, y: l }),
            this.emitter.emit("scroll", { deltaX: s, deltaY: l, event: e }));
        };
        onTouchEnd = (e) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: e,
          });
        };
        onWheel = (e) => {
          let { deltaX: t, deltaY: i, deltaMode: s } = e,
            l = 1 === s ? eu : 2 === s ? this.window.width : 1,
            n = 1 === s ? eu : 2 === s ? this.window.height : 1;
          ((t *= l),
            (i *= n),
            (t *= this.options.wheelMultiplier),
            (i *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: t, deltaY: i, event: e }));
        };
        onWindowResize = () => {
          this.window = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        };
      },
      ef = (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
      eg = class {
        _isScrolling = !1;
        _isStopped = !1;
        _isLocked = !1;
        _preventNextNativeScrollEvent = !1;
        _resetVelocityTimeout = null;
        __rafID = null;
        isTouching;
        time = 0;
        userData = {};
        lastVelocity = 0;
        velocity = 0;
        direction = 0;
        options;
        targetScroll;
        animatedScroll;
        animate = new ed();
        emitter = new ep();
        dimensions;
        virtualScroll;
        constructor({
          wrapper: e = window,
          content: t = document.documentElement,
          eventsTarget: i = e,
          smoothWheel: s = !0,
          syncTouch: l = !1,
          syncTouchLerp: n = 0.075,
          touchInertiaExponent: a = 1.7,
          duration: o,
          easing: r,
          lerp: c = 0.1,
          infinite: d = !1,
          orientation: h = "vertical",
          gestureOrientation: p = "horizontal" === h ? "both" : "vertical",
          touchMultiplier: u = 1,
          wheelMultiplier: m = 1,
          autoResize: x = !0,
          prevent: f,
          virtualScroll: g,
          overscroll: w = !0,
          autoRaf: b = !1,
          anchors: y = !1,
          autoToggle: v = !1,
          allowNestedScroll: j = !1,
          __experimental__naiveDimensions: N = !1,
        } = {}) {
          ((window.lenisVersion = "1.3.15"),
            (e && e !== document.documentElement) || (e = window),
            "number" == typeof o && "function" != typeof r
              ? (r = ef)
              : "function" == typeof r && "number" != typeof o && (o = 1),
            (this.options = {
              wrapper: e,
              content: t,
              eventsTarget: i,
              smoothWheel: s,
              syncTouch: l,
              syncTouchLerp: n,
              touchInertiaExponent: a,
              duration: o,
              easing: r,
              lerp: c,
              infinite: d,
              gestureOrientation: p,
              orientation: h,
              touchMultiplier: u,
              wheelMultiplier: m,
              autoResize: x,
              prevent: f,
              virtualScroll: g,
              overscroll: w,
              autoRaf: b,
              anchors: y,
              autoToggle: v,
              allowNestedScroll: j,
              __experimental__naiveDimensions: N,
            }),
            (this.dimensions = new eh(e, t, { autoResize: x })),
            this.updateClassName(),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(
              "scroll",
              this.onNativeScroll,
              !1,
            ),
            this.options.wrapper.addEventListener(
              "scrollend",
              this.onScrollEnd,
              { capture: !0 },
            ),
            this.options.anchors &&
              this.options.wrapper === window &&
              this.options.wrapper.addEventListener("click", this.onClick, !1),
            this.options.wrapper.addEventListener(
              "pointerdown",
              this.onPointerDown,
              !1,
            ),
            (this.virtualScroll = new ex(i, {
              touchMultiplier: u,
              wheelMultiplier: m,
            })),
            this.virtualScroll.on("scroll", this.onVirtualScroll),
            this.options.autoToggle &&
              this.rootElement.addEventListener(
                "transitionend",
                this.onTransitionEnd,
                { passive: !0 },
              ),
            this.options.autoRaf &&
              (this.__rafID = requestAnimationFrame(this.raf)));
        }
        destroy() {
          (this.emitter.destroy(),
            this.options.wrapper.removeEventListener(
              "scroll",
              this.onNativeScroll,
              !1,
            ),
            this.options.wrapper.removeEventListener(
              "scrollend",
              this.onScrollEnd,
              { capture: !0 },
            ),
            this.options.wrapper.removeEventListener(
              "pointerdown",
              this.onPointerDown,
              !1,
            ),
            this.options.anchors &&
              this.options.wrapper === window &&
              this.options.wrapper.removeEventListener(
                "click",
                this.onClick,
                !1,
              ),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName(),
            this.__rafID && cancelAnimationFrame(this.__rafID));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        onScrollEnd = (e) => {
          e instanceof CustomEvent ||
            ("smooth" !== this.isScrolling && !1 !== this.isScrolling) ||
            e.stopPropagation();
        };
        dispatchScrollendEvent = () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent("scrollend", {
              bubbles: this.options.wrapper === window,
              detail: { lenisScrollEnd: !0 },
            }),
          );
        };
        onTransitionEnd = (e) => {
          if (e.propertyName.includes("overflow")) {
            let e = this.isHorizontal ? "overflow-x" : "overflow-y";
            ["hidden", "clip"].includes(getComputedStyle(this.rootElement)[e])
              ? this.internalStop()
              : this.internalStart();
          }
        };
        setScroll(e) {
          this.isHorizontal
            ? this.options.wrapper.scrollTo({ left: e, behavior: "instant" })
            : this.options.wrapper.scrollTo({ top: e, behavior: "instant" });
        }
        onClick = (e) => {
          let t = e
            .composedPath()
            .find(
              (e) =>
                e instanceof HTMLAnchorElement &&
                e.getAttribute("href")?.includes("#"),
            );
          if (t) {
            let e = t.getAttribute("href");
            if (e) {
              let t =
                  "object" == typeof this.options.anchors &&
                  this.options.anchors
                    ? this.options.anchors
                    : void 0,
                i = `#${e.split("#")[1]}`;
              this.scrollTo(i, t);
            }
          }
        };
        onPointerDown = (e) => {
          1 === e.button && this.reset();
        };
        onVirtualScroll = (e) => {
          if (
            "function" == typeof this.options.virtualScroll &&
            !1 === this.options.virtualScroll(e)
          )
            return;
          let { deltaX: t, deltaY: i, event: s } = e;
          if (
            (this.emitter.emit("virtual-scroll", {
              deltaX: t,
              deltaY: i,
              event: s,
            }),
            s.ctrlKey || s.lenisStopPropagation)
          )
            return;
          let l = s.type.includes("touch"),
            n = s.type.includes("wheel");
          this.isTouching = "touchstart" === s.type || "touchmove" === s.type;
          let a = 0 === t && 0 === i;
          if (
            this.options.syncTouch &&
            l &&
            "touchstart" === s.type &&
            a &&
            !this.isStopped &&
            !this.isLocked
          )
            return void this.reset();
          let o =
            ("vertical" === this.options.gestureOrientation && 0 === i) ||
            ("horizontal" === this.options.gestureOrientation && 0 === t);
          if (a || o) return;
          let r = s.composedPath();
          r = r.slice(0, r.indexOf(this.rootElement));
          let c = this.options.prevent;
          if (
            r.find(
              (e) =>
                e instanceof HTMLElement &&
                (("function" == typeof c && c?.(e)) ||
                  e.hasAttribute?.("data-lenis-prevent") ||
                  (l && e.hasAttribute?.("data-lenis-prevent-touch")) ||
                  (n && e.hasAttribute?.("data-lenis-prevent-wheel")) ||
                  (this.options.allowNestedScroll &&
                    this.checkNestedScroll(e, { deltaX: t, deltaY: i }))),
            )
          )
            return;
          if (this.isStopped || this.isLocked) {
            s.cancelable && s.preventDefault();
            return;
          }
          if (!(
            (this.options.syncTouch && l) ||
            (this.options.smoothWheel && n)
          )) {
            ((this.isScrolling = "native"),
              this.animate.stop(),
              (s.lenisStopPropagation = !0));
            return;
          }
          let d = i;
          ("both" === this.options.gestureOrientation
            ? (d = Math.abs(i) > Math.abs(t) ? i : t)
            : "horizontal" === this.options.gestureOrientation && (d = t),
            (!this.options.overscroll ||
              this.options.infinite ||
              (this.options.wrapper !== window &&
                this.limit > 0 &&
                ((this.animatedScroll > 0 &&
                  this.animatedScroll < this.limit) ||
                  (0 === this.animatedScroll && i > 0) ||
                  (this.animatedScroll === this.limit && i < 0)))) &&
              (s.lenisStopPropagation = !0),
            s.cancelable && s.preventDefault());
          let h = l && this.options.syncTouch,
            p = l && "touchend" === s.type;
          (p &&
            (d =
              Math.sign(this.velocity) *
              Math.pow(
                Math.abs(this.velocity),
                this.options.touchInertiaExponent,
              )),
            this.scrollTo(this.targetScroll + d, {
              programmatic: !1,
              ...(h
                ? { lerp: p ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  }),
            }));
        };
        resize() {
          (this.dimensions.resize(),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            this.emit());
        }
        emit() {
          this.emitter.emit("scroll", this);
        }
        onNativeScroll = () => {
          if (
            (null !== this._resetVelocityTimeout &&
              (clearTimeout(this._resetVelocityTimeout),
              (this._resetVelocityTimeout = null)),
            this._preventNextNativeScrollEvent)
          ) {
            this._preventNextNativeScrollEvent = !1;
            return;
          }
          if (!1 === this.isScrolling || "native" === this.isScrolling) {
            let e = this.animatedScroll;
            ((this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - e),
              (this.direction = Math.sign(this.animatedScroll - e)),
              this.isStopped || (this.isScrolling = "native"),
              this.emit(),
              0 !== this.velocity &&
                (this._resetVelocityTimeout = setTimeout(() => {
                  ((this.lastVelocity = this.velocity),
                    (this.velocity = 0),
                    (this.isScrolling = !1),
                    this.emit());
                }, 400)));
          }
        };
        reset() {
          ((this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop());
        }
        start() {
          if (this.isStopped) {
            if (this.options.autoToggle)
              return void this.rootElement.style.removeProperty("overflow");
            this.internalStart();
          }
        }
        internalStart() {
          this.isStopped && (this.reset(), (this.isStopped = !1), this.emit());
        }
        stop() {
          if (!this.isStopped) {
            if (this.options.autoToggle)
              return void this.rootElement.style.setProperty(
                "overflow",
                "clip",
              );
            this.internalStop();
          }
        }
        internalStop() {
          this.isStopped || (this.reset(), (this.isStopped = !0), this.emit());
        }
        raf = (e) => {
          let t = e - (this.time || e);
          ((this.time = e),
            this.animate.advance(0.001 * t),
            this.options.autoRaf &&
              (this.__rafID = requestAnimationFrame(this.raf)));
        };
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: i = !1,
            lock: s = !1,
            duration: l = this.options.duration,
            easing: n = this.options.easing,
            lerp: a = this.options.lerp,
            onStart: o,
            onComplete: r,
            force: c = !1,
            programmatic: d = !0,
            userData: h,
          } = {},
        ) {
          if ((!this.isStopped && !this.isLocked) || c) {
            if (
              "string" == typeof e &&
              ["top", "left", "start", "#"].includes(e)
            )
              e = 0;
            else if (
              "string" == typeof e &&
              ["bottom", "right", "end"].includes(e)
            )
              e = this.limit;
            else {
              let i;
              if (
                ("string" == typeof e
                  ? (i = document.querySelector(e)) ||
                    ("#top" === e
                      ? (e = 0)
                      : console.warn("Lenis: Target not found", e))
                  : e instanceof HTMLElement && e?.nodeType && (i = e),
                i)
              ) {
                if (this.options.wrapper !== window) {
                  let e = this.rootElement.getBoundingClientRect();
                  t -= this.isHorizontal ? e.left : e.top;
                }
                let s = i.getBoundingClientRect();
                e = (this.isHorizontal ? s.left : s.top) + this.animatedScroll;
              }
            }
            if ("number" == typeof e) {
              if (((e += t), (e = Math.round(e)), this.options.infinite)) {
                if (d) {
                  this.targetScroll = this.animatedScroll = this.scroll;
                  let t = e - this.animatedScroll;
                  t > this.limit / 2
                    ? (e -= this.limit)
                    : t < -this.limit / 2 && (e += this.limit);
                }
              } else e = ec(0, e, this.limit);
              if (e === this.targetScroll) {
                (o?.(this), r?.(this));
                return;
              }
              if (((this.userData = h ?? {}), i)) {
                ((this.animatedScroll = this.targetScroll = e),
                  this.setScroll(this.scroll),
                  this.reset(),
                  this.preventNextNativeScrollEvent(),
                  this.emit(),
                  r?.(this),
                  (this.userData = {}),
                  requestAnimationFrame(() => {
                    this.dispatchScrollendEvent();
                  }));
                return;
              }
              (d || (this.targetScroll = e),
                "number" == typeof l && "function" != typeof n
                  ? (n = ef)
                  : "function" == typeof n && "number" != typeof l && (l = 1),
                this.animate.fromTo(this.animatedScroll, e, {
                  duration: l,
                  easing: n,
                  lerp: a,
                  onStart: () => {
                    (s && (this.isLocked = !0),
                      (this.isScrolling = "smooth"),
                      o?.(this));
                  },
                  onUpdate: (e, t) => {
                    ((this.isScrolling = "smooth"),
                      (this.lastVelocity = this.velocity),
                      (this.velocity = e - this.animatedScroll),
                      (this.direction = Math.sign(this.velocity)),
                      (this.animatedScroll = e),
                      this.setScroll(this.scroll),
                      d && (this.targetScroll = e),
                      t || this.emit(),
                      t &&
                        (this.reset(),
                        this.emit(),
                        r?.(this),
                        (this.userData = {}),
                        requestAnimationFrame(() => {
                          this.dispatchScrollendEvent();
                        }),
                        this.preventNextNativeScrollEvent()));
                  },
                }));
            }
          }
        }
        preventNextNativeScrollEvent() {
          ((this._preventNextNativeScrollEvent = !0),
            requestAnimationFrame(() => {
              this._preventNextNativeScrollEvent = !1;
            }));
        }
        checkNestedScroll(e, { deltaX: t, deltaY: i }) {
          let s,
            l,
            n,
            a,
            o,
            r,
            c,
            d,
            h,
            p,
            u,
            m,
            x,
            f,
            g = Date.now(),
            w = (e._lenis ??= {}),
            b = this.options.gestureOrientation;
          if (g - (w.time ?? 0) > 2e3) {
            w.time = Date.now();
            let t = window.getComputedStyle(e);
            w.computedStyle = t;
            let i = t.overflowX,
              h = t.overflowY;
            if (
              ((s = ["auto", "overlay", "scroll"].includes(i)),
              (l = ["auto", "overlay", "scroll"].includes(h)),
              (w.hasOverflowX = s),
              (w.hasOverflowY = l),
              (!s && !l) ||
                ("vertical" === b && !l) ||
                ("horizontal" === b && !s))
            )
              return !1;
            ((o = e.scrollWidth),
              (r = e.scrollHeight),
              (c = e.clientWidth),
              (d = e.clientHeight),
              (n = o > c),
              (a = r > d),
              (w.isScrollableX = n),
              (w.isScrollableY = a),
              (w.scrollWidth = o),
              (w.scrollHeight = r),
              (w.clientWidth = c),
              (w.clientHeight = d));
          } else
            ((n = w.isScrollableX),
              (a = w.isScrollableY),
              (s = w.hasOverflowX),
              (l = w.hasOverflowY),
              (o = w.scrollWidth),
              (r = w.scrollHeight),
              (c = w.clientWidth),
              (d = w.clientHeight));
          if (
            (!s && !l) ||
            (!n && !a) ||
            ("vertical" === b && (!l || !a)) ||
            ("horizontal" === b && (!s || !n)) ||
            ("horizontal" === b
              ? (h = "x")
              : "vertical" === b
                ? (h = "y")
                : (0 !== t && s && n && (h = "x"),
                  0 !== i && l && a && (h = "y")),
            !h)
          )
            return !1;
          if ("x" === h)
            ((p = e.scrollLeft), (u = o - c), (m = t), (x = s), (f = n));
          else {
            if ("y" !== h) return !1;
            ((p = e.scrollTop), (u = r - d), (m = i), (x = l), (f = a));
          }
          return (m > 0 ? p < u : p > 0) && x && f;
        }
        get rootElement() {
          return this.options.wrapper === window
            ? document.documentElement
            : this.options.wrapper;
        }
        get limit() {
          return this.options.__experimental__naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
        }
        get isHorizontal() {
          return "horizontal" === this.options.orientation;
        }
        get actualScroll() {
          let e = this.options.wrapper;
          return this.isHorizontal
            ? (e.scrollX ?? e.scrollLeft)
            : (e.scrollY ?? e.scrollTop);
        }
        get scroll() {
          var e;
          return this.options.infinite
            ? ((this.animatedScroll % (e = this.limit)) + e) % e
            : this.animatedScroll;
        }
        get progress() {
          return 0 === this.limit ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this._isScrolling;
        }
        set isScrolling(e) {
          this._isScrolling !== e &&
            ((this._isScrolling = e), this.updateClassName());
        }
        get isStopped() {
          return this._isStopped;
        }
        set isStopped(e) {
          this._isStopped !== e &&
            ((this._isStopped = e), this.updateClassName());
        }
        get isLocked() {
          return this._isLocked;
        }
        set isLocked(e) {
          this._isLocked !== e &&
            ((this._isLocked = e), this.updateClassName());
        }
        get isSmooth() {
          return "smooth" === this.isScrolling;
        }
        get className() {
          let e = "lenis";
          return (
            this.options.autoToggle && (e += " lenis-autoToggle"),
            this.isStopped && (e += " lenis-stopped"),
            this.isLocked && (e += " lenis-locked"),
            this.isScrolling && (e += " lenis-scrolling"),
            "smooth" === this.isScrolling && (e += " lenis-smooth"),
            e
          );
        }
        updateClassName() {
          (this.cleanUpClassName(),
            (this.rootElement.className =
              `${this.rootElement.className} ${this.className}`.trim()));
        }
        cleanUpClassName() {
          this.rootElement.className = this.rootElement.className
            .replace(/lenis(-\w+)?/g, "")
            .trim();
        }
      };
    let ew = (0, i.createContext)({
      hoveredIndex: -1,
      setHoveredIndex: () => {},
    });
    function eb({ card: e, idx: l, isVisible: n, totalCards: a, onSettle: o }) {
      let { hoveredIndex: r, setHoveredIndex: c } = (0, i.useContext)(ew),
        d = r === l,
        h = (0, i.useRef)(!1);
      n && (h.current = !0);
      let p =
          0 === l
            ? {
                src: "/images/Character_Official_Source/01.main_motion.001.webp",
                className:
                  "absolute -top-14 right-6 w-[220px] desktop:w-[250px] h-auto",
              }
            : 1 === l
              ? {
                  src: "/images/main/sec2_profile.webp",
                  className:
                    "absolute top-6 right-6 w-[220px] desktop:w-[250px] h-auto",
                }
              : 2 === l
                ? {
                    src: "/images/main/sec2_multi_family.webp",
                    className:
                      "absolute top-6 right-6 w-[240px] desktop:w-[270px] h-auto",
                  }
                : {
                    src: "/images/main/sec2_service_cloud.webp",
                    className:
                      "absolute top-6 right-6 w-[240px] desktop:w-[270px] h-auto",
                  },
        u = 0;
      return (
        -1 !== r && r !== l && (l < r ? (u = -30) : l > r && (u = 30)),
        (0, t.jsxs)(s.motion.div, {
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
    function ey() {
      let e = (0, X.useRouter)(),
        [a, r] = (0, i.useState)(!1),
        [c, d] = (0, i.useState)(!1),
        [h, p] = (0, i.useState)(!1),
        [u, m] = (0, i.useState)(!1),
        [x, f] = (0, i.useState)(!1),
        [g, w] = (0, i.useState)(0),
        [b, y] = (0, i.useState)(!0),
        v = (0, i.useRef)(null),
        [j, N] = (0, i.useState)(1),
        [S, k] = (0, i.useState)(0),
        [E, T] = (0, i.useState)(1),
        [C, _] = (0, i.useState)(""),
        [z, L] = (0, i.useState)(-1),
        F = (0, i.useRef)(null),
        A = (0, i.useRef)(null),
        [M, O] = (0, i.useState)(null),
        R = (0, i.useRef)([]),
        H = (0, i.useRef)(null),
        B = (0, i.useRef)(!1);
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
        [e_, ez] = (0, i.useState)(1),
        [eL, eF] = (0, i.useState)(0),
        [eA, eM] = (0, i.useState)(!1),
        [eO, eW] = (0, i.useState)(100),
        [eR, eH] = (0, i.useState)(!1),
        [eB, eP] = (0, i.useState)(0),
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
        { scrollYProgress: e4 } = (function ({
          container: e,
          target: t,
          ...s
        } = {}) {
          var l;
          let a = (0, D.useConstant)($);
          ((l = s.offset),
            "undefined" != typeof window &&
              (t
                ? (0, n.supportsViewTimeline)() && !!W(l)
                : (0, n.supportsScrollTimeline)()) &&
              ((a.scrollXProgress.accelerate = Y("x", s, e, t)),
              (a.scrollYProgress.accelerate = Y("y", s, e, t))));
          let r = (0, i.useRef)(null),
            c = (0, i.useRef)(!1),
            d = (0, i.useCallback)(
              () => (
                (r.current = P(
                  (e, { x: t, y: i }) => {
                    (a.scrollX.set(t.current),
                      a.scrollXProgress.set(t.progress),
                      a.scrollY.set(i.current),
                      a.scrollYProgress.set(i.progress));
                  },
                  {
                    ...s,
                    container: e?.current || void 0,
                    target: t?.current || void 0,
                  },
                )),
                () => {
                  r.current?.();
                }
              ),
              [e, t, JSON.stringify(s.offset)],
            );
          return (
            (0, I.useIsomorphicLayoutEffect)(() => {
              if (((c.current = !1), !(V(e) || V(t)))) return d();
              c.current = !0;
            }, [d]),
            (0, i.useEffect)(
              () =>
                c.current
                  ? ((0, o.invariant)(
                      !V(e),
                      "Container ref is defined but not hydrated",
                      "use-scroll-ref",
                    ),
                    (0, o.invariant)(
                      !V(t),
                      "Target ref is defined but not hydrated",
                      "use-scroll-ref",
                    ),
                    d())
                  : void 0,
              [d],
            ),
            a
          );
        })({ target: e2, offset: ["start start", "end end"] }),
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
      let to = (0, i.useRef)(null),
        [tr, tc] = (0, i.useState)(1),
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
      }, []),
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
        }, []),
        (0, i.useEffect)(() => {
          window.scrollTo(0, 0);
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
            (y(!1),
              window.dispatchEvent(new CustomEvent("home-scroll-unlocked")));
            return;
          }
          let e = new eg({
            duration: 1.2,
            easing: (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
            smoothWheel: !0,
          });
          return (
            (v.current = e),
            e.stop(),
            requestAnimationFrame(function t(i) {
              (e.raf(i), requestAnimationFrame(t));
            }),
            () => {
              (e.destroy(), (v.current = null));
            }
          );
        }, []));
      let tg = (0, i.useRef)(!1);
      ((0, i.useEffect)(() => {
        let e = setTimeout(() => {
            r(!0);
          }, 300),
          t = setTimeout(() => {
            p(!0);
          }, 1200),
          i = setTimeout(() => {
            (y(!1),
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
      let tw = (t) => {
          t.preventDefault();
          let i = new FormData(t.currentTarget).get("query");
          (i?.trim()
            ? e.push(`/chat?message=${encodeURIComponent(i.trim())}`)
            : e.push("/chat"),
            _(""));
        },
        tb = [
          "사료를 안 먹고 간식만 찾아요",
          "강아지가 자꾸 발을 핥아요",
          "고양이 화장실 모래 추천해주세요",
          "반려견 분리불안 훈련법 알려줘",
          "노령견 건강검진 주기 공금해요",
        ];
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
            b || window.addEventListener("scroll", e, { passive: !0 }),
            () => {
              window.removeEventListener("scroll", e);
            }
          );
        }, [b, Z]),
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
        }, [Z]),
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
        }, [em]),
        (0, i.useEffect)(() => {
          !(window.innerWidth < 1080) &&
            et &&
            es &&
            ea &&
            em &&
            J &&
            (Q(!1), v.current && v.current.start());
        }, [et, es, ea, em, J]),
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
        }, [J, ev, eN, ek, eT, eR]),
        (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(ee, {}),
            (0, t.jsx)(en, {}),
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
                    (0, t.jsx)("div", {
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
                      style: { opacity: j },
                      children: (0, t.jsx)("div", {
                        className: "w-full flex justify-center",
                        style: { transform: `translateY(${S}px)` },
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
                            children: (0, t.jsx)("div", {
                              style: {
                                transform: `translate(${null === M ? "-50%" : "-60px"}, ${S}px)`,
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
                      style: { opacity: j },
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
                      style: { opacity: j },
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
                    (0, t.jsxs)("div", {
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
                  (0, t.jsxs)("div", {
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
                  children: (0, t.jsxs)("div", {
                    className:
                      "sticky top-0 h-screen w-full relative overflow-visible",
                    style: { transform: `translateY(${eO}vh)` },
                    children: [
                      (0, t.jsx)("div", {
                        className:
                          "absolute inset-0 bg-white dark:bg-dark-bg-primary cloud-wave-top",
                        children: (0, t.jsx)("div", {
                          "aria-hidden": !0,
                          className:
                            "absolute bottom-0 left-0 w-full pointer-events-none",
                          style: {
                            transform: `translateY(${(1 - eB) * 110}%)`,
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
                            (0, t.jsx)("div", {
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
                              value: { hoveredIndex: z, setHoveredIndex: L },
                              children: (0, t.jsx)("div", {
                                className:
                                  "flex absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center gap-0 z-20",
                                style: { perspective: "2000px" },
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
                                ].map((e, i) => {
                                  let s = i < eL;
                                  return (0, t.jsx)(
                                    eb,
                                    {
                                      card: e,
                                      idx: i,
                                      isVisible: s,
                                      totalCards: 4,
                                      onSettle: (e) => {
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
                                      },
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
                                  href: "/lounge",
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
                                  href: "/community",
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
                                  href: "/mypage",
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
                                          href: "/lounge",
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
                                          href: "/community",
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
                                          href: "/mypage",
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
                ef &&
                  (0, t.jsx)(s.motion.div, {
                    className:
                      "fixed bottom-20 left-0 right-0 mx-auto w-full max-w-[700px] px-6 z-[100]",
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: tr, y: 0 },
                    transition: { duration: 0.6, ease: "easeOut" },
                    style: { pointerEvents: tr < 0.1 ? "none" : "auto" },
                    children: (0, t.jsx)(eo, {
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
                  }),
              ],
            }),
          ],
        })
      );
    }
    e.s(["default", () => ey], 952683);
  },
]);

//# debugId=9d815418-5f54-3cf0-dddb-f774785bd79d
