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
        "f66df01e-21b2-4899-caaa-b45560ee784b");
  } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  808341,
  (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 });
    var a = {
      cancelIdleCallback: function () {
        return n;
      },
      requestIdleCallback: function () {
        return r;
      },
    };
    for (var s in a) Object.defineProperty(i, s, { enumerable: !0, get: a[s] });
    let r =
        ("undefined" != typeof self &&
          self.requestIdleCallback &&
          self.requestIdleCallback.bind(window)) ||
        function (e) {
          let t = Date.now();
          return self.setTimeout(function () {
            e({
              didTimeout: !1,
              timeRemaining: function () {
                return Math.max(0, 50 - (Date.now() - t));
              },
            });
          }, 1);
        },
      n =
        ("undefined" != typeof self &&
          self.cancelIdleCallback &&
          self.cancelIdleCallback.bind(window)) ||
        function (e) {
          return clearTimeout(e);
        };
    ("function" == typeof i.default ||
      ("object" == typeof i.default && null !== i.default)) &&
      void 0 === i.default.__esModule &&
      (Object.defineProperty(i.default, "__esModule", { value: !0 }),
      Object.assign(i.default, i),
      (t.exports = i.default));
  },
  479520,
  (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", { value: !0 });
    var a = {
      default: function () {
        return b;
      },
      handleClientScriptLoad: function () {
        return p;
      },
      initScriptLoader: function () {
        return g;
      },
    };
    for (var s in a) Object.defineProperty(i, s, { enumerable: !0, get: a[s] });
    let r = e.r(555682),
      n = e.r(190809),
      l = e.r(843476),
      o = r._(e.r(174080)),
      d = n._(e.r(271645)),
      c = e.r(742732),
      u = e.r(922737),
      h = e.r(808341),
      m = new Map(),
      f = new Set(),
      x = (e) => {
        let {
            src: t,
            id: i,
            onLoad: a = () => {},
            onReady: s = null,
            dangerouslySetInnerHTML: r,
            children: n = "",
            strategy: l = "afterInteractive",
            onError: d,
            stylesheets: c,
          } = e,
          h = i || t;
        if (h && f.has(h)) return;
        if (m.has(t)) {
          (f.add(h), m.get(t).then(a, d));
          return;
        }
        let x = () => {
            (s && s(), f.add(h));
          },
          p = document.createElement("script"),
          g = new Promise((e, t) => {
            (p.addEventListener("load", function (t) {
              (e(), a && a.call(this, t), x());
            }),
              p.addEventListener("error", function (e) {
                t(e);
              }));
          }).catch(function (e) {
            d && d(e);
          });
        (r
          ? ((p.innerHTML = r.__html || ""), x())
          : n
            ? ((p.textContent =
                "string" == typeof n ? n : Array.isArray(n) ? n.join("") : ""),
              x())
            : t && ((p.src = t), m.set(t, g)),
          (0, u.setAttributesFromProps)(p, e),
          "worker" === l && p.setAttribute("type", "text/partytown"),
          p.setAttribute("data-nscript", l),
          c &&
            ((e) => {
              if (o.default.preinit)
                return e.forEach((e) => {
                  o.default.preinit(e, { as: "style" });
                });
              if ("undefined" != typeof window) {
                let t = document.head;
                e.forEach((e) => {
                  let i = document.createElement("link");
                  ((i.type = "text/css"),
                    (i.rel = "stylesheet"),
                    (i.href = e),
                    t.appendChild(i));
                });
              }
            })(c),
          document.body.appendChild(p));
      };
    function p(e) {
      let { strategy: t = "afterInteractive" } = e;
      "lazyOnload" === t
        ? window.addEventListener("load", () => {
            (0, h.requestIdleCallback)(() => x(e));
          })
        : x(e);
    }
    function g(e) {
      (e.forEach(p),
        [
          ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
          ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
        ].forEach((e) => {
          let t = e.id || e.getAttribute("src");
          f.add(t);
        }));
    }
    function y(e) {
      let {
          id: t,
          src: i = "",
          onLoad: a = () => {},
          onReady: s = null,
          strategy: r = "afterInteractive",
          onError: n,
          stylesheets: u,
          ...m
        } = e,
        {
          updateScripts: p,
          scripts: g,
          getIsSsr: y,
          appDir: b,
          nonce: w,
        } = (0, d.useContext)(c.HeadManagerContext);
      w = m.nonce || w;
      let v = (0, d.useRef)(!1);
      (0, d.useEffect)(() => {
        let e = t || i;
        v.current || (s && e && f.has(e) && s(), (v.current = !0));
      }, [s, t, i]);
      let j = (0, d.useRef)(!1);
      if (
        ((0, d.useEffect)(() => {
          if (!j.current) {
            if ("afterInteractive" === r) x(e);
            else
              "lazyOnload" === r &&
                ("complete" === document.readyState
                  ? (0, h.requestIdleCallback)(() => x(e))
                  : window.addEventListener("load", () => {
                      (0, h.requestIdleCallback)(() => x(e));
                    }));
            j.current = !0;
          }
        }, [e, r]),
        ("beforeInteractive" === r || "worker" === r) &&
          (p
            ? ((g[r] = (g[r] || []).concat([
                {
                  id: t,
                  src: i,
                  onLoad: a,
                  onReady: s,
                  onError: n,
                  ...m,
                  nonce: w,
                },
              ])),
              p(g))
            : y && y()
              ? f.add(t || i)
              : y && !y() && x({ ...e, nonce: w })),
        b)
      ) {
        if (
          (u &&
            u.forEach((e) => {
              o.default.preinit(e, { as: "style" });
            }),
          "beforeInteractive" === r)
        )
          if (!i)
            return (
              m.dangerouslySetInnerHTML &&
                ((m.children = m.dangerouslySetInnerHTML.__html),
                delete m.dangerouslySetInnerHTML),
              (0, l.jsx)("script", {
                nonce: w,
                dangerouslySetInnerHTML: {
                  __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([0, { ...m, id: t }])})`,
                },
              })
            );
          else
            return (
              o.default.preload(
                i,
                m.integrity
                  ? {
                      as: "script",
                      integrity: m.integrity,
                      nonce: w,
                      crossOrigin: m.crossOrigin,
                    }
                  : { as: "script", nonce: w, crossOrigin: m.crossOrigin },
              ),
              (0, l.jsx)("script", {
                nonce: w,
                dangerouslySetInnerHTML: {
                  __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([i, { ...m, id: t }])})`,
                },
              })
            );
        "afterInteractive" === r &&
          i &&
          o.default.preload(
            i,
            m.integrity
              ? {
                  as: "script",
                  integrity: m.integrity,
                  nonce: w,
                  crossOrigin: m.crossOrigin,
                }
              : { as: "script", nonce: w, crossOrigin: m.crossOrigin },
          );
      }
      return null;
    }
    Object.defineProperty(y, "__nextScript", { value: !0 });
    let b = y;
    ("function" == typeof i.default ||
      ("object" == typeof i.default && null !== i.default)) &&
      void 0 === i.default.__esModule &&
      (Object.defineProperty(i.default, "__esModule", { value: !0 }),
      Object.assign(i.default, i),
      (t.exports = i.default));
  },
  227088,
  (e) => {
    "use strict";
    e.i(247167);
    var t = e.i(843476),
      i = e.i(271645),
      a = e.i(618566),
      s = e.i(155487),
      r = e.i(619273),
      n = e.i(286491),
      l = e.i(540143),
      o = e.i(915823),
      d = class extends o.Subscribable {
        constructor(e = {}) {
          (super(), (this.config = e), (this.#e = new Map()));
        }
        #e;
        build(e, t, i) {
          let a = t.queryKey,
            s = t.queryHash ?? (0, r.hashQueryKeyByOptions)(a, t),
            l = this.get(s);
          return (
            l ||
              ((l = new n.Query({
                client: e,
                queryKey: a,
                queryHash: s,
                options: e.defaultQueryOptions(t),
                state: i,
                defaultOptions: e.getQueryDefaults(a),
              })),
              this.add(l)),
            l
          );
        }
        add(e) {
          this.#e.has(e.queryHash) ||
            (this.#e.set(e.queryHash, e),
            this.notify({ type: "added", query: e }));
        }
        remove(e) {
          let t = this.#e.get(e.queryHash);
          t &&
            (e.destroy(),
            t === e && this.#e.delete(e.queryHash),
            this.notify({ type: "removed", query: e }));
        }
        clear() {
          l.notifyManager.batch(() => {
            this.getAll().forEach((e) => {
              this.remove(e);
            });
          });
        }
        get(e) {
          return this.#e.get(e);
        }
        getAll() {
          return [...this.#e.values()];
        }
        find(e) {
          let t = { exact: !0, ...e };
          return this.getAll().find((e) => (0, r.matchQuery)(t, e));
        }
        findAll(e = {}) {
          let t = this.getAll();
          return Object.keys(e).length > 0
            ? t.filter((t) => (0, r.matchQuery)(e, t))
            : t;
        }
        notify(e) {
          l.notifyManager.batch(() => {
            this.listeners.forEach((t) => {
              t(e);
            });
          });
        }
        onFocus() {
          l.notifyManager.batch(() => {
            this.getAll().forEach((e) => {
              e.onFocus();
            });
          });
        }
        onOnline() {
          l.notifyManager.batch(() => {
            this.getAll().forEach((e) => {
              e.onOnline();
            });
          });
        }
      },
      c = e.i(114272),
      u = o,
      h = class extends u.Subscribable {
        constructor(e = {}) {
          (super(),
            (this.config = e),
            (this.#t = new Set()),
            (this.#i = new Map()),
            (this.#a = 0));
        }
        #t;
        #i;
        #a;
        build(e, t, i) {
          let a = new c.Mutation({
            client: e,
            mutationCache: this,
            mutationId: ++this.#a,
            options: e.defaultMutationOptions(t),
            state: i,
          });
          return (this.add(a), a);
        }
        add(e) {
          this.#t.add(e);
          let t = m(e);
          if ("string" == typeof t) {
            let i = this.#i.get(t);
            i ? i.push(e) : this.#i.set(t, [e]);
          }
          this.notify({ type: "added", mutation: e });
        }
        remove(e) {
          if (this.#t.delete(e)) {
            let t = m(e);
            if ("string" == typeof t) {
              let i = this.#i.get(t);
              if (i)
                if (i.length > 1) {
                  let t = i.indexOf(e);
                  -1 !== t && i.splice(t, 1);
                } else i[0] === e && this.#i.delete(t);
            }
          }
          this.notify({ type: "removed", mutation: e });
        }
        canRun(e) {
          let t = m(e);
          if ("string" != typeof t) return !0;
          {
            let i = this.#i.get(t),
              a = i?.find((e) => "pending" === e.state.status);
            return !a || a === e;
          }
        }
        runNext(e) {
          let t = m(e);
          if ("string" != typeof t) return Promise.resolve();
          {
            let i = this.#i.get(t)?.find((t) => t !== e && t.state.isPaused);
            return i?.continue() ?? Promise.resolve();
          }
        }
        clear() {
          l.notifyManager.batch(() => {
            (this.#t.forEach((e) => {
              this.notify({ type: "removed", mutation: e });
            }),
              this.#t.clear(),
              this.#i.clear());
          });
        }
        getAll() {
          return Array.from(this.#t);
        }
        find(e) {
          let t = { exact: !0, ...e };
          return this.getAll().find((e) => (0, r.matchMutation)(t, e));
        }
        findAll(e = {}) {
          return this.getAll().filter((t) => (0, r.matchMutation)(e, t));
        }
        notify(e) {
          l.notifyManager.batch(() => {
            this.listeners.forEach((t) => {
              t(e);
            });
          });
        }
        resumePausedMutations() {
          let e = this.getAll().filter((e) => e.state.isPaused);
          return l.notifyManager.batch(() =>
            Promise.all(e.map((e) => e.continue().catch(r.noop))),
          );
        }
      };
    function m(e) {
      return e.options.scope?.id;
    }
    var f = e.i(175555),
      x = e.i(814448),
      p = e.i(992571),
      g = class {
        #s;
        #r;
        #n;
        #l;
        #o;
        #d;
        #c;
        #u;
        constructor(e = {}) {
          ((this.#s = e.queryCache || new d()),
            (this.#r = e.mutationCache || new h()),
            (this.#n = e.defaultOptions || {}),
            (this.#l = new Map()),
            (this.#o = new Map()),
            (this.#d = 0));
        }
        mount() {
          (this.#d++,
            1 === this.#d &&
              ((this.#c = f.focusManager.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#s.onFocus());
              })),
              (this.#u = x.onlineManager.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#s.onOnline());
              }))));
        }
        unmount() {
          (this.#d--,
            0 === this.#d &&
              (this.#c?.(),
              (this.#c = void 0),
              this.#u?.(),
              (this.#u = void 0)));
        }
        isFetching(e) {
          return this.#s.findAll({ ...e, fetchStatus: "fetching" }).length;
        }
        isMutating(e) {
          return this.#r.findAll({ ...e, status: "pending" }).length;
        }
        getQueryData(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#s.get(t.queryHash)?.state.data;
        }
        ensureQueryData(e) {
          let t = this.defaultQueryOptions(e),
            i = this.#s.build(this, t),
            a = i.state.data;
          return void 0 === a
            ? this.fetchQuery(e)
            : (e.revalidateIfStale &&
                i.isStaleByTime((0, r.resolveStaleTime)(t.staleTime, i)) &&
                this.prefetchQuery(t),
              Promise.resolve(a));
        }
        getQueriesData(e) {
          return this.#s
            .findAll(e)
            .map(({ queryKey: e, state: t }) => [e, t.data]);
        }
        setQueryData(e, t, i) {
          let a = this.defaultQueryOptions({ queryKey: e }),
            s = this.#s.get(a.queryHash),
            n = s?.state.data,
            l = (0, r.functionalUpdate)(t, n);
          if (void 0 !== l)
            return this.#s.build(this, a).setData(l, { ...i, manual: !0 });
        }
        setQueriesData(e, t, i) {
          return l.notifyManager.batch(() =>
            this.#s
              .findAll(e)
              .map(({ queryKey: e }) => [e, this.setQueryData(e, t, i)]),
          );
        }
        getQueryState(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#s.get(t.queryHash)?.state;
        }
        removeQueries(e) {
          let t = this.#s;
          l.notifyManager.batch(() => {
            t.findAll(e).forEach((e) => {
              t.remove(e);
            });
          });
        }
        resetQueries(e, t) {
          let i = this.#s;
          return l.notifyManager.batch(
            () => (
              i.findAll(e).forEach((e) => {
                e.reset();
              }),
              this.refetchQueries({ type: "active", ...e }, t)
            ),
          );
        }
        cancelQueries(e, t = {}) {
          let i = { revert: !0, ...t };
          return Promise.all(
            l.notifyManager.batch(() =>
              this.#s.findAll(e).map((e) => e.cancel(i)),
            ),
          )
            .then(r.noop)
            .catch(r.noop);
        }
        invalidateQueries(e, t = {}) {
          return l.notifyManager.batch(() =>
            (this.#s.findAll(e).forEach((e) => {
              e.invalidate();
            }),
            e?.refetchType === "none")
              ? Promise.resolve()
              : this.refetchQueries(
                  { ...e, type: e?.refetchType ?? e?.type ?? "active" },
                  t,
                ),
          );
        }
        refetchQueries(e, t = {}) {
          let i = { ...t, cancelRefetch: t.cancelRefetch ?? !0 };
          return Promise.all(
            l.notifyManager.batch(() =>
              this.#s
                .findAll(e)
                .filter((e) => !e.isDisabled() && !e.isStatic())
                .map((e) => {
                  let t = e.fetch(void 0, i);
                  return (
                    i.throwOnError || (t = t.catch(r.noop)),
                    "paused" === e.state.fetchStatus ? Promise.resolve() : t
                  );
                }),
            ),
          ).then(r.noop);
        }
        fetchQuery(e) {
          let t = this.defaultQueryOptions(e);
          void 0 === t.retry && (t.retry = !1);
          let i = this.#s.build(this, t);
          return i.isStaleByTime((0, r.resolveStaleTime)(t.staleTime, i))
            ? i.fetch(t)
            : Promise.resolve(i.state.data);
        }
        prefetchQuery(e) {
          return this.fetchQuery(e).then(r.noop).catch(r.noop);
        }
        fetchInfiniteQuery(e) {
          return (
            (e.behavior = (0, p.infiniteQueryBehavior)(e.pages)),
            this.fetchQuery(e)
          );
        }
        prefetchInfiniteQuery(e) {
          return this.fetchInfiniteQuery(e).then(r.noop).catch(r.noop);
        }
        ensureInfiniteQueryData(e) {
          return (
            (e.behavior = (0, p.infiniteQueryBehavior)(e.pages)),
            this.ensureQueryData(e)
          );
        }
        resumePausedMutations() {
          return x.onlineManager.isOnline()
            ? this.#r.resumePausedMutations()
            : Promise.resolve();
        }
        getQueryCache() {
          return this.#s;
        }
        getMutationCache() {
          return this.#r;
        }
        getDefaultOptions() {
          return this.#n;
        }
        setDefaultOptions(e) {
          this.#n = e;
        }
        setQueryDefaults(e, t) {
          this.#l.set((0, r.hashKey)(e), { queryKey: e, defaultOptions: t });
        }
        getQueryDefaults(e) {
          let t = [...this.#l.values()],
            i = {};
          return (
            t.forEach((t) => {
              (0, r.partialMatchKey)(e, t.queryKey) &&
                Object.assign(i, t.defaultOptions);
            }),
            i
          );
        }
        setMutationDefaults(e, t) {
          this.#o.set((0, r.hashKey)(e), { mutationKey: e, defaultOptions: t });
        }
        getMutationDefaults(e) {
          let t = [...this.#o.values()],
            i = {};
          return (
            t.forEach((t) => {
              (0, r.partialMatchKey)(e, t.mutationKey) &&
                Object.assign(i, t.defaultOptions);
            }),
            i
          );
        }
        defaultQueryOptions(e) {
          if (e._defaulted) return e;
          let t = {
            ...this.#n.queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0,
          };
          return (
            t.queryHash ||
              (t.queryHash = (0, r.hashQueryKeyByOptions)(t.queryKey, t)),
            void 0 === t.refetchOnReconnect &&
              (t.refetchOnReconnect = "always" !== t.networkMode),
            void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
            !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
            t.queryFn === r.skipToken && (t.enabled = !1),
            t
          );
        }
        defaultMutationOptions(e) {
          return e?._defaulted
            ? e
            : {
                ...this.#n.mutations,
                ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
                ...e,
                _defaulted: !0,
              };
        }
        clear() {
          (this.#s.clear(), this.#r.clear());
        }
      },
      y = e.i(912598),
      b = e.i(881881),
      w = e.i(934055),
      v = e.i(976204),
      j = e.i(588447),
      k = e.i(853571),
      N = e.i(477481),
      C = e.i(701513),
      L = e.i(657688);
    function A() {
      let {
          isOpen: e,
          images: a,
          currentIndex: s,
          user: r,
          closeViewer: n,
          goToIndex: l,
          goToPrev: o,
          goToNext: d,
        } = (0, C.useImageViewer)(),
        c = (0, i.useCallback)(
          (e) => {
            ("Escape" === e.key && n(),
              "ArrowLeft" === e.key && o(),
              "ArrowRight" === e.key && d());
          },
          [n, o, d],
        );
      return ((0, i.useEffect)(
        () => (
          e &&
            (document.addEventListener("keydown", c),
            (document.body.style.overflow = "hidden")),
          () => {
            (document.removeEventListener("keydown", c),
              (document.body.style.overflow = ""));
          }
        ),
        [e, c],
      ),
      e && 0 !== a.length)
        ? (0, t.jsxs)("div", {
            className:
              "fixed inset-0 bg-black/95 flex items-center justify-center z-[9999]",
            onClick: n,
            children: [
              (0, t.jsx)("button", {
                className:
                  "absolute top-5 right-5 w-11 h-11 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors",
                onClick: n,
                children: (0, t.jsx)("svg", {
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  children: (0, t.jsx)("path", { d: "M18 6L6 18M6 6l12 12" }),
                }),
              }),
              a.length > 1 &&
                (0, t.jsx)("button", {
                  className:
                    "absolute left-5 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white/70 hover:text-white rounded-full transition-colors",
                  onClick: (e) => {
                    (e.stopPropagation(), o());
                  },
                  children: (0, t.jsx)("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    children: (0, t.jsx)("path", { d: "M15 18l-6-6 6-6" }),
                  }),
                }),
              a.length > 1 &&
                (0, t.jsx)("button", {
                  className:
                    "absolute right-5 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white/70 hover:text-white rounded-full transition-colors",
                  onClick: (e) => {
                    (e.stopPropagation(), d());
                  },
                  children: (0, t.jsx)("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    children: (0, t.jsx)("path", { d: "M9 18l6-6-6-6" }),
                  }),
                }),
              (0, t.jsxs)("div", {
                className:
                  "flex flex-col items-center max-w-[90vw] max-h-[90dvh]",
                onClick: (e) => e.stopPropagation(),
                children: [
                  r &&
                    (0, t.jsxs)("div", {
                      className: "flex items-center gap-2.5 mb-3 self-start",
                      children: [
                        r.avatar
                          ? (0, t.jsx)(L.default, {
                              src: r.avatar,
                              alt: r.name,
                              width: 36,
                              height: 36,
                              className: "rounded-full object-cover",
                            })
                          : (0, t.jsx)("div", {
                              className:
                                "w-9 h-9 rounded-full bg-gray-600 flex items-center justify-center text-white text-sm font-medium",
                              children: r.name.charAt(0),
                            }),
                        (0, t.jsx)("span", {
                          className: "text-white text-sm font-medium",
                          children: r.name,
                        }),
                      ],
                    }),
                  (0, t.jsx)("div", {
                    className: "flex items-center justify-center",
                    children: (0, t.jsx)(
                      "img",
                      {
                        src: a[s],
                        alt: `이미지 ${s + 1}`,
                        className:
                          "max-w-[65vw] max-h-[65dvh] object-contain rounded-sm",
                      },
                      s,
                    ),
                  }),
                  a.length > 1 &&
                    (0, t.jsx)("div", {
                      className: "flex gap-2 mt-5",
                      children: a.map((e, i) =>
                        (0, t.jsx)(
                          "button",
                          {
                            onClick: () => l(i),
                            className: `w-[52px] h-[52px] rounded overflow-hidden transition-all ${i === s ? "ring-2 ring-white opacity-100" : "ring-2 ring-transparent opacity-50 hover:opacity-75"}`,
                            children: (0, t.jsx)("img", {
                              src: e,
                              alt: `썸네일 ${i + 1}`,
                              className: "w-full h-full object-cover",
                            }),
                          },
                          i,
                        ),
                      ),
                    }),
                  a.length > 1 &&
                    (0, t.jsxs)("div", {
                      className: "mt-3 text-white/60 text-sm",
                      children: [s + 1, " / ", a.length],
                    }),
                ],
              }),
            ],
          })
        : null;
    }
    let E = (0, i.createContext)(null);
    function O({ children: e }) {
      let [a, s] = (0, i.useState)([]),
        [r, n] = (0, i.useState)(null),
        [l, o] = (0, i.useState)([]),
        d = (0, i.useRef)(new Map()),
        c = (0, i.useCallback)((e) => {
          s((t) => [...t, e]);
          let t = setTimeout(() => {
            (s((t) => t.filter((t) => t.id !== e.id)), d.current.delete(e.id));
          }, 3e3);
          d.current.set(e.id, t);
        }, []),
        u = (0, i.useCallback)((e) => {
          let t = d.current.get(e);
          (t && (clearTimeout(t), d.current.delete(e)),
            s((t) => t.filter((t) => t.id !== e)));
        }, []),
        h = (0, i.useCallback)((e) => {
          n(e);
        }, []),
        m = (0, i.useCallback)(() => {
          n(null);
        }, []),
        f = (0, i.useCallback)((e) => {
          o(e);
        }, []),
        x = (0, i.useCallback)(() => {
          o([]);
        }, []);
      return (0, t.jsx)(E.Provider, {
        value: {
          cpToasts: a,
          showCpToast: c,
          dismissCpToast: u,
          levelUpData: r,
          showLevelUp: h,
          dismissLevelUp: m,
          achievedTrophies: l,
          showTrophyAchieved: f,
          dismissTrophyAchieved: x,
        },
        children: e,
      });
    }
    var M = e.i(846932),
      T = e.i(88653),
      S = e.i(284885);
    function _() {
      let { levelUpData: e, dismissLevelUp: a } = (function () {
        let e = (0, i.useContext)(E);
        if (!e) throw Error("useGrowthUI must be used within a GrowthProvider");
        return e;
      })();
      return (0, t.jsx)(T.AnimatePresence, {
        children:
          e &&
          (0, t.jsx)(M.motion.div, {
            className:
              "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            children: (0, t.jsxs)(M.motion.div, {
              className:
                "relative mx-4 w-full max-w-sm rounded-3xl bg-white dark:bg-gray-800 p-8 shadow-2xl text-center",
              initial: { scale: 0.7, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              exit: { scale: 0.7, opacity: 0 },
              transition: { type: "spring", damping: 20, stiffness: 300 },
              children: [
                (0, t.jsx)("div", {
                  className: `mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full text-5xl ${S.TIER_INFO[e.newTier].bgColor}`,
                  children: S.TIER_INFO[e.newTier].icon,
                }),
                (0, t.jsx)("h2", {
                  className:
                    "mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100",
                  children: "레벨 업!",
                }),
                (0, t.jsxs)("p", {
                  className: `text-lg font-semibold ${S.TIER_INFO[e.newTier].color}`,
                  children: [S.TIER_INFO[e.newTier].label, " Lv.", e.newLevel],
                }),
                (0, t.jsx)("p", {
                  className: "mt-2 text-sm text-gray-500 dark:text-gray-400",
                  children: "축하합니다! 새로운 레벨에 도달했어요.",
                }),
                (0, t.jsx)("button", {
                  type: "button",
                  onClick: a,
                  className:
                    "mt-6 w-full rounded-xl bg-indigo-500 py-3 font-semibold text-white hover:bg-indigo-600 transition-colors",
                  children: "확인",
                }),
              ],
            }),
          }),
      });
    }
    function q({ children: e }) {
      let r = (0, w.useAppDispatch)(),
        n = (0, s.useSelector)((e) => e.auth.isAuthenticated),
        l = (0, i.useRef)(!1),
        o = (0, a.usePathname)(),
        d = "/kpetfair" === o || o.startsWith("/kpetfair/");
      return (
        (0, i.useEffect)(() => {
          l.current ||
            (d || ((l.current = !0), b.store.getState().auth.isAuthenticated)
              ? r((0, j.finishAuthBootstrap)())
              : (async () => {
                  try {
                    let e = await v.userApi.getMe();
                    r((0, j.setUser)(e));
                  } catch {
                    r((0, j.finishAuthBootstrap)());
                  }
                })());
        }, [r, d]),
        (0, i.useEffect)(() => {
          if (n)
            try {
              window.localStorage.setItem("pickcare_has_member", "1");
            } catch (e) {}
        }, [n]),
        (0, i.useEffect)(
          () =>
            (0, k.subscribeAuthBroadcast)((e) => {
              "logout" !== e.type ||
                (b.store.getState().auth.isAuthenticated &&
                  ("/" !== window.location.pathname &&
                    (0, N.setRedirectAfterLogin)(
                      window.location.pathname + window.location.search,
                    ),
                  r((0, j.clearToken)())));
            }),
          [r],
        ),
        (0, t.jsx)(t.Fragment, { children: e })
      );
    }
    (!(function () {
      let e = [];
      if (0 !== e.length)
        throw Error(
          `[ENV] 필수 환경변수가 설정되지 않았습니다: ${e.join(", ")}`,
        );
    })(),
      e.s(
        [
          "Providers",
          0,
          ({ children: e }) => {
            let [a] = (0, i.useState)(
              () =>
                new g({
                  defaultOptions: {
                    queries: {
                      staleTime: 3e5,
                      gcTime: 18e5,
                      retry: 1,
                      refetchOnWindowFocus: !1,
                    },
                  },
                }),
            );
            return (0, t.jsx)(y.QueryClientProvider, {
              client: a,
              children: (0, t.jsx)(s.Provider, {
                store: b.store,
                children: (0, t.jsxs)(C.ImageViewerProvider, {
                  children: [
                    (0, t.jsxs)(O, {
                      children: [
                        (0, t.jsx)(q, { children: e }),
                        (0, t.jsx)(_, {}),
                      ],
                    }),
                    (0, t.jsx)(A, {}),
                  ],
                }),
              }),
            });
          },
        ],
        227088,
      ));
  },
  38246,
  (e) => {
    "use strict";
    var t = e.i(843476),
      i = e.i(271645);
    let a = (0, i.createContext)(void 0);
    e.s([
      "ThemeProvider",
      0,
      ({
        children: e,
        defaultTheme: s = "light",
        storageKey: r = "pickcare-theme",
      }) => {
        let [n, l] = (0, i.useState)(s),
          [o, d] = (0, i.useState)(!1);
        return ((0, i.useEffect)(() => {
          try {
            let e = localStorage.getItem(r);
            e && ("light" === e || "dark" === e) ? l(e) : l("light");
          } catch (e) {}
          d(!0);
        }, [r]),
        (0, i.useEffect)(() => {
          if (!o) return;
          let e = window.document.documentElement;
          (e.classList.remove("light", "dark"), e.classList.add(n));
          try {
            localStorage.setItem(r, n);
          } catch (e) {}
        }, [n, o, r]),
        o)
          ? (0, t.jsx)(a.Provider, {
              value: {
                theme: n,
                setTheme: (e) => {
                  l(e);
                },
                toggleTheme: () => {
                  l((e) => ("light" === e ? "dark" : "light"));
                },
              },
              children: e,
            })
          : (0, t.jsx)(a.Provider, {
              value: {
                theme: "light",
                setTheme: () => {},
                toggleTheme: () => {},
              },
              children: e,
            });
      },
      "useTheme",
      0,
      () => {
        let e = (0, i.useContext)(a);
        if (void 0 === e)
          throw Error("useTheme must be used within a ThemeProvider");
        return e;
      },
    ]);
  },
  608444,
  (e) => {
    "use strict";
    var t = e.i(843476),
      i = e.i(618566),
      a = e.i(770703);
    e.i(247167);
    var s = e.i(657688),
      r = e.i(522016),
      n = e.i(155487),
      l = e.i(588447),
      o = e.i(199544),
      d = e.i(853571),
      c = e.i(271645),
      u = e.i(88653),
      h = e.i(846932),
      m = e.i(612299);
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
    var y = e.i(356247),
      b = e.i(511352),
      w = e.i(136388),
      v = e.i(261238);
    let j = async (e) => {
        await v.default.post("/api/push-subscriptions", e);
      },
      k = !1,
      N = !1,
      C = async (e) => {
        if (!k && !N) {
          if (((k = !0), !("serviceWorker" in navigator))) {
            k = !1;
            return;
          }
          try {
            let e = await navigator.serviceWorker.register("/sw.js"),
              i = await Notification.requestPermission();
            if ("granted" !== i) {
              k = !1;
              return;
            }
            if (await e.pushManager.getSubscription()) {
              ((N = !0), (k = !1));
              return;
            }
            try {
              var t;
              let i,
                a,
                s =
                  ((t =
                    "BIUbBLM_By1o4YOI_K2Zbx6d2yUGuxJ2QGc1c46BF-9gSEeAZQt2bUNB6AWMp4ZbW9Rld7ASGUaQKgr2Lnuayfk"),
                  (i = "=".repeat((4 - (t.length % 4)) % 4)),
                  (a = (t + i).replace(/-/g, "+").replace(/_/g, "/")),
                  new Uint8Array(
                    [...window.atob(a)].map((e) => e.charCodeAt(0)),
                  )),
                r = await e.pushManager.subscribe({
                  userVisibleOnly: !0,
                  applicationServerKey: s,
                });
              if (!r || !r.endpoint)
                throw Error("Failed to get push subscription");
              let n = {
                endpoint: r.endpoint,
                keys: { p256dh: r.getKey("p256dh"), auth: r.getKey("auth") },
              };
              if (!n.keys.p256dh || !n.keys.auth)
                throw Error("Missing push subscription keys");
              let l = new Uint8Array(n.keys.p256dh),
                o = new Uint8Array(n.keys.auth);
              (await j({
                endpoint: n.endpoint,
                keys: {
                  p256dh: btoa(String.fromCharCode(...Array.from(l))),
                  auth: btoa(String.fromCharCode(...Array.from(o))),
                },
              }),
                (N = !0));
            } catch (e) {}
          } catch (e) {
          } finally {
            k = !1;
          }
        }
      };
    var L = e.i(881881),
      A = e.i(358019),
      E = e.i(619167);
    function O() {
      let e = (0, w.useUserId)(),
        a = (0, n.useSelector)((e) => e.auth.isLoading),
        f = (0, n.useDispatch)(),
        x = (0, i.useRouter)(),
        p = (0, i.usePathname)(),
        v = (0, c.useRef)(0),
        j = (0, c.useRef)(null),
        k = (0, c.useRef)(null),
        [N, O] = (0, c.useState)(!1);
      (0, c.useEffect)(
        () => () => {
          (j.current && clearTimeout(j.current),
            k.current && clearTimeout(k.current));
        },
        [],
      );
      let M = (0, c.useCallback)(
          (e) => {
            if (!e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey) {
              if (
                (e.preventDefault(),
                (v.current += 1),
                j.current && clearTimeout(j.current),
                v.current >= 5)
              ) {
                ((v.current = 0),
                  O(!0),
                  k.current && clearTimeout(k.current),
                  (k.current = setTimeout(() => O(!1), 3e3)));
                return;
              }
              j.current = setTimeout(() => {
                ((v.current = 0), x.push("/"));
              }, 400);
            }
          },
          [x],
        ),
        T = "/" === p,
        S = "/picky-lab" === p,
        _ = "/chat" === p || p.startsWith("/chat/"),
        q = "/map" === p || p.startsWith("/map/"),
        P = _ || q,
        I = p.startsWith("/community"),
        Q = p.split("/").filter(Boolean),
        F =
          2 === Q.length &&
          "community" === Q[0] &&
          !["new", "draft", "search", "legacy"].includes(Q[1]),
        W =
          p.startsWith("/community/new") ||
          p.startsWith("/community/draft") ||
          /^\/community\/[^/]+\/edit\/?$/.test(p),
        D = (0, c.useRef)(null),
        [B, H] = (0, c.useState)(!1),
        $ = (0, c.useCallback)(() => {
          (D.current && (clearTimeout(D.current), (D.current = null)),
            H(!0),
            (D.current = setTimeout(() => {
              H(!1);
            }, 4500)));
        }, [4500]);
      (0, c.useEffect)(
        () => (
          P && H(!1),
          () => {
            D.current && (clearTimeout(D.current), (D.current = null));
          }
        ),
        [P],
      );
      let [z, R] = (0, c.useState)(!1),
        K = z && !a,
        [U, G] = (0, c.useState)(!1),
        [V, Z] = (0, c.useState)(!1),
        [J, Y] = (0, c.useState)(!T),
        [X, ee] = (0, c.useState)(!1),
        [et, ei] = (0, c.useState)(!1),
        [ea, es] = (0, c.useState)(!1),
        er = (0, c.useRef)(null),
        en = (0, c.useRef)(0),
        el = (0, n.useSelector)((e) => e.notification.unreadCount),
        eo = el > 0,
        ed = el > 99 ? "99+" : String(el),
        ec = (0, c.useCallback)(() => {
          let e = window.scrollY;
          (e > en.current && e > 100 ? Z(!0) : Z(!1),
            G(e > 50),
            (en.current = e));
        }, []);
      ((0, c.useEffect)(() => {
        let e = () => {
          if (er.current) {
            let e = er.current.getBoundingClientRect().left;
            f((0, A.setLeft)(e));
          }
        };
        return (
          e(),
          window.addEventListener("resize", e),
          window.addEventListener("scroll", ec, { passive: !0 }),
          () => {
            (window.removeEventListener("resize", e),
              window.removeEventListener("scroll", ec));
          }
        );
      }, [f, ec]),
        (0, c.useEffect)(() => {
          let e =
            p.includes("signup") ||
            "/admin" === p ||
            p.startsWith("/partner") ||
            p.startsWith("/mypet/register") ||
            p.startsWith("/mypet/add") ||
            q;
          ("/" === p || p.startsWith("/chat") || e
            ? document.body.classList.remove("has-fixed-header")
            : document.body.classList.add("has-fixed-header"),
            F
              ? (document.body.classList.add("community-detail-bg"),
                document.body.classList.remove("community-bg"))
              : (I && !W
                  ? document.body.classList.add("community-bg")
                  : document.body.classList.remove("community-bg"),
                document.body.classList.remove("community-detail-bg")),
            p.startsWith("/lounge/magazine")
              ? (document.body.classList.add("magazine-bg"),
                document.body.classList.remove("pickspot-bg", "market-bg"))
              : p.startsWith("/lounge/pickspot")
                ? (document.body.classList.add("pickspot-bg"),
                  document.body.classList.remove("magazine-bg", "market-bg"))
                : p.startsWith("/lounge/market")
                  ? (document.body.classList.add("market-bg"),
                    document.body.classList.remove(
                      "magazine-bg",
                      "pickspot-bg",
                    ))
                  : document.body.classList.remove(
                      "magazine-bg",
                      "pickspot-bg",
                      "market-bg",
                    ));
          let t = /^\/mypet\/[^/]+\/edit/.test(p);
          return (
            p.startsWith("/mypage/daily-record")
              ? (document.body.classList.add("dailyrecord-bg"),
                document.body.classList.remove("mypage-bg"))
              : (p.startsWith("/mypage") || t
                  ? document.body.classList.add("mypage-bg")
                  : document.body.classList.remove("mypage-bg"),
                document.body.classList.remove("dailyrecord-bg")),
            p.startsWith("/notifications")
              ? document.body.classList.add("notifications-bg")
              : document.body.classList.remove("notifications-bg"),
            () => {
              (document.body.classList.remove("has-fixed-header"),
                document.body.classList.remove("community-bg"),
                document.body.classList.remove("community-detail-bg"),
                document.body.classList.remove("magazine-bg"),
                document.body.classList.remove("pickspot-bg"),
                document.body.classList.remove("market-bg"),
                document.body.classList.remove("mypage-bg"),
                document.body.classList.remove("dailyrecord-bg"),
                document.body.classList.remove("notifications-bg"));
            }
          );
        }, [p, I, W, F, q]),
        (0, c.useEffect)(() => {
          (async () => {
            if (!e) return f((0, o.setUnreadCount)(0));
            try {
              let e = (await b.notificationApi.getNotifications()).filter(
                (e) => !e.isRead,
              ).length;
              f((0, o.setUnreadCount)(e));
            } catch (e) {
              f((0, o.setUnreadCount)(0));
            }
          })();
        }, [f, e]),
        (0, c.useEffect)(() => {
          R(!0);
        }, []),
        (0, c.useEffect)(() => {
          if ("/" === p) {
            let e = () => {
              Y(!0);
            };
            return (
              window.addEventListener("showHeader", e),
              () => {
                window.removeEventListener("showHeader", e);
              }
            );
          }
          Y(!0);
        }, [p]));
      let eu = async () => {
          f((0, l.startLogout)());
          let e = L.store.getState().auth.userId;
          try {
            await y.authApi.logout(e);
          } catch {}
          (f((0, l.clearToken)()),
            (0, d.broadcastAuthMessage)({ type: "logout" }),
            x.push("/"),
            setTimeout(() => {
              f((0, l.endLogout)());
            }, 200));
        },
        eh = [
          { text: "대화하기", href: "/chat", isButton: !0 },
          { text: "픽라운지", href: "/lounge" },
          { text: "커뮤니티", href: "/community" },
        ];
      (E.default, p.includes("mypage"));
      let em = [
        {
          icon: (0, t.jsxs)("div", {
            className: "relative",
            children: [
              (0, t.jsx)(E.default, {
                name: "ri-notification-3-line",
                size: 20,
                className: "text-current",
              }),
              eo &&
                (0, t.jsx)("div", {
                  className:
                    "absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse",
                }),
            ],
          }),
          href: "/notifications",
          isNotification: !0,
        },
        p.includes("mypage")
          ? {
              icon: (0, t.jsx)(s.default, {
                src: "/assets/header/logout.svg",
                alt: "로그아웃",
                width: 24,
                height: 24,
                className: "w-6 h-6",
              }),
              onClick: eu,
            }
          : {
              icon: (0, t.jsx)(s.default, {
                src: "/assets/header/account_circle.svg",
                alt: "마이페이지",
                width: 24,
                height: 24,
                className: "w-6 h-6",
              }),
              href: "/mypage",
            },
      ];
      ((0, c.useEffect)(() => {
        e && C(e);
      }, [e]),
        (0, c.useEffect)(() => {
          if (!("serviceWorker" in navigator)) return;
          let e = (e) => {
            if (e.data?.type === "NOTIFICATION_CLICK") {
              let t = e.data.payload?.url;
              t && x.push(t);
            }
          };
          return (
            navigator.serviceWorker.addEventListener("message", e),
            () => {
              navigator.serviceWorker.removeEventListener("message", e);
            }
          );
        }, [x]),
        (0, c.useEffect)(() => {
          ee(!1);
        }, [p]),
        (0, c.useEffect)(
          () => (
            X
              ? (document.body.style.overflow = "hidden")
              : (document.body.style.overflow = ""),
            () => {
              document.body.style.overflow = "";
            }
          ),
          [X],
        ));
      let ef = W ? "bg-white dark:bg-dark-bg-primary" : "bg-transparent",
        ex = `
    fixed top-0 left-0 right-0 z-[200]
    px-6 mobile:pt-4 mobile:pb-3
    flex items-center justify-center
    mobile:gap-3 tablet:gap-[10px] desktop:gap-[13px]
    w-full desktop:h-20 tablet:h-[72px] mobile:h-auto mobile:min-h-[68px]
    transition-all duration-300 ease-in-out
    ${ef}
    ${V && !_ && !F ? "-translate-y-full" : "translate-y-0"}
    ${p.includes("signup") || "/admin" === p || p.startsWith("/partner") || p.startsWith("/mypet/register") || p.startsWith("/mypet/add") ? "hidden" : ""}
    ${_ ? (B ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none") : ""}
  `,
        ep = T
          ? {
              initial: { y: -100, opacity: 0 },
              animate:
                J && (!V || _ || F)
                  ? { y: 0, opacity: 1 }
                  : { y: -100, opacity: 0 },
              transition: J
                ? { duration: 0.4, ease: "easeOut", delay: 0.05 * !V }
                : { duration: 0 },
            }
          : {};
      if (P) {
        let i = q ? eh : eh.filter((e) => !e.isButton),
          a = [
            { icon: "ri-chat-ai-line", label: "대화하기", href: "/chat" },
            { icon: "ri-compass-3-line", label: "픽라운지", href: "/lounge" },
            { icon: "ri-chat-3-line", label: "커뮤니티", href: "/community" },
            {
              icon: "ri-notification-3-line",
              label: "알림",
              href: "/notifications",
              isNotification: !0,
            },
            { icon: "ri-user-3-line", label: "마이페이지", href: "/mypage" },
          ];
        return (0, t.jsx)(u.AnimatePresence, {
          initial: !1,
          children: B
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(h.motion.div, {
                    className: "fixed inset-0 z-[205] md:hidden",
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    onClick: () => H(!1),
                  }),
                  (0, t.jsx)(
                    h.motion.div,
                    {
                      className: `fixed z-[210] ${q ? "top-14 right-4 md:top-5 md:right-5 md:flex md:flex-row md:items-center md:gap-3" : "top-[60px] right-4 md:top-5 md:right-5 md:flex md:flex-row md:items-center md:gap-3"}`,
                      initial: { opacity: 0, y: -6 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -6 },
                      transition: { duration: 0.2, ease: "easeInOut" },
                      children: q
                        ? (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsxs)("div", {
                                className:
                                  "md:hidden bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden min-w-[180px]",
                                children: [
                                  a.map((e, i) =>
                                    (0, t.jsxs)(
                                      r.default,
                                      {
                                        href: e.href,
                                        onClick: () => H(!1),
                                        className: `flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${i !== a.length - 1 ? "border-b border-gray-50" : ""}`,
                                        children: [
                                          (0, t.jsxs)("div", {
                                            className: "relative",
                                            children: [
                                              (0, t.jsx)("i", {
                                                className: `${e.icon} text-[18px] text-gray-500`,
                                              }),
                                              e.isNotification &&
                                                eo &&
                                                (0, t.jsx)("div", {
                                                  className:
                                                    "absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full",
                                                }),
                                            ],
                                          }),
                                          (0, t.jsx)("span", {
                                            className:
                                              "text-[14px] font-medium text-gray-700",
                                            children: e.label,
                                          }),
                                        ],
                                      },
                                      e.href,
                                    ),
                                  ),
                                  K &&
                                    (e
                                      ? (0, t.jsxs)("button", {
                                          onClick: () => {
                                            (eu(), H(!1));
                                          },
                                          className:
                                            "w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-t border-gray-100",
                                          children: [
                                            (0, t.jsx)("i", {
                                              className:
                                                "ri-logout-box-r-line text-[18px] text-gray-400",
                                            }),
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-[14px] font-medium text-gray-400",
                                              children: "로그아웃",
                                            }),
                                          ],
                                        })
                                      : (0, t.jsx)("div", {
                                          className:
                                            "border-t border-gray-100 p-3",
                                          children: (0, t.jsx)(m.default, {
                                            size: "sm",
                                            shortLabel: !0,
                                            onBeforeNavigate: () => H(!1),
                                          }),
                                        })),
                                ],
                              }),
                              (0, t.jsx)("div", {
                                className:
                                  "hidden md:flex items-center gap-0 bg-black/90 dark:bg-black/80 backdrop-blur-md rounded-md px-1 h-12 shadow-md",
                                children: i.map((e) =>
                                  e.isButton
                                    ? (0, t.jsx)(
                                        r.default,
                                        {
                                          href: e.href,
                                          children: (0, t.jsxs)(h.motion.div, {
                                            className:
                                              "flex items-center gap-1.5 px-3 py-2 bg-main text-white font-semibold text-[14px] rounded-lg transition-all duration-200 hover:bg-blue-600",
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
                                    : (0, t.jsx)(
                                        r.default,
                                        {
                                          href: e.href,
                                          children: (0, t.jsx)(h.motion.div, {
                                            className:
                                              "px-3 py-1.5 font-medium text-[14px] transition-all duration-200 text-white hover:bg-white/10 rounded-lg whitespace-nowrap",
                                            whileHover: { scale: 1.02 },
                                            whileTap: { scale: 0.98 },
                                            children: e.text,
                                          }),
                                        },
                                        e.href,
                                      ),
                                ),
                              }),
                              K &&
                                (e
                                  ? (0, t.jsxs)("div", {
                                      className:
                                        "hidden md:flex items-center gap-1.5 bg-black/15 dark:bg-black/20 backdrop-blur-md rounded-xl px-1.5 h-12 shadow-md",
                                      children: [
                                        (0, t.jsx)(r.default, {
                                          href: "/notifications",
                                          children: (0, t.jsxs)(h.motion.div, {
                                            className:
                                              "relative flex items-center justify-center w-9 h-9 bg-main hover:bg-blue-600 rounded-md transition-all duration-200",
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
                                                    "absolute -top-0.5 -right-0.5 min-w-[16px] h-[16px] px-1 bg-main rounded-full flex items-center justify-center text-[9px] font-bold text-white border-2 border-white",
                                                  children: ed,
                                                }),
                                            ],
                                          }),
                                        }),
                                        (0, t.jsx)(r.default, {
                                          href: "/mypage",
                                          children: (0, t.jsx)(h.motion.div, {
                                            className:
                                              "px-4 py-2.5 bg-white text-main font-semibold text-[14px] hover:bg-gray-50 rounded-full transition-all shadow-sm whitespace-nowrap",
                                            whileHover: { scale: 1.02 },
                                            whileTap: { scale: 0.98 },
                                            children: "마이페이지",
                                          }),
                                        }),
                                      ],
                                    })
                                  : (0, t.jsx)(g, {
                                      variant: "compact",
                                      className: "hidden md:block",
                                    })),
                            ],
                          })
                        : (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsxs)("div", {
                                className:
                                  "md:hidden bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden min-w-[180px]",
                                children: [
                                  a.map((e, i) =>
                                    (0, t.jsxs)(
                                      r.default,
                                      {
                                        href: e.href,
                                        onClick: () => H(!1),
                                        className: `flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${i !== a.length - 1 ? "border-b border-gray-50" : ""}`,
                                        children: [
                                          (0, t.jsxs)("div", {
                                            className: "relative",
                                            children: [
                                              (0, t.jsx)("i", {
                                                className: `${e.icon} text-[18px] text-gray-500`,
                                              }),
                                              e.isNotification &&
                                                eo &&
                                                (0, t.jsx)("div", {
                                                  className:
                                                    "absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full",
                                                }),
                                            ],
                                          }),
                                          (0, t.jsx)("span", {
                                            className:
                                              "text-[14px] font-medium text-gray-700",
                                            children: e.label,
                                          }),
                                        ],
                                      },
                                      e.href,
                                    ),
                                  ),
                                  K &&
                                    (e
                                      ? (0, t.jsxs)("button", {
                                          onClick: () => {
                                            (eu(), H(!1));
                                          },
                                          className:
                                            "w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-t border-gray-100",
                                          children: [
                                            (0, t.jsx)("i", {
                                              className:
                                                "ri-logout-box-r-line text-[18px] text-gray-400",
                                            }),
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-[14px] font-medium text-gray-400",
                                              children: "로그아웃",
                                            }),
                                          ],
                                        })
                                      : (0, t.jsx)("div", {
                                          className:
                                            "border-t border-gray-100 p-3",
                                          children: (0, t.jsx)(m.default, {
                                            size: "sm",
                                            shortLabel: !0,
                                            onBeforeNavigate: () => H(!1),
                                          }),
                                        })),
                                ],
                              }),
                              (0, t.jsx)("div", {
                                className:
                                  "hidden md:flex items-center gap-0 bg-black/90 dark:bg-black/80 backdrop-blur-md rounded-md px-1 h-12 shadow-md",
                                children: i.map((e) =>
                                  e.isButton
                                    ? (0, t.jsx)(
                                        r.default,
                                        {
                                          href: e.href,
                                          children: (0, t.jsxs)(h.motion.div, {
                                            className:
                                              "flex items-center gap-1.5 px-3 py-2 bg-main text-white font-semibold text-[14px] rounded-lg transition-all duration-200 hover:bg-blue-600",
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
                                    : (0, t.jsx)(
                                        r.default,
                                        {
                                          href: e.href,
                                          children: (0, t.jsx)(h.motion.div, {
                                            className:
                                              "px-3 py-1.5 font-medium text-[14px] transition-all duration-200 text-white hover:bg-white/10 rounded-lg whitespace-nowrap",
                                            whileHover: { scale: 1.02 },
                                            whileTap: { scale: 0.98 },
                                            children: e.text,
                                          }),
                                        },
                                        e.href,
                                      ),
                                ),
                              }),
                              K &&
                                (e
                                  ? (0, t.jsxs)("div", {
                                      className:
                                        "hidden md:flex items-center gap-1.5 bg-black/15 dark:bg-black/20 backdrop-blur-md rounded-xl px-1.5 h-12 shadow-md",
                                      children: [
                                        (0, t.jsx)(r.default, {
                                          href: "/notifications",
                                          children: (0, t.jsxs)(h.motion.div, {
                                            className:
                                              "relative flex items-center justify-center w-9 h-9 bg-main hover:bg-blue-600 rounded-md transition-all duration-200",
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
                                                    "absolute -top-0.5 -right-0.5 min-w-[16px] h-[16px] px-1 bg-main rounded-full flex items-center justify-center text-[9px] font-bold text-white border-2 border-white",
                                                  children: ed,
                                                }),
                                            ],
                                          }),
                                        }),
                                        (0, t.jsx)(r.default, {
                                          href: "/mypage",
                                          children: (0, t.jsx)(h.motion.div, {
                                            className:
                                              "px-4 py-2.5 bg-white text-main font-semibold text-[14px] hover:bg-gray-50 rounded-full transition-all shadow-sm whitespace-nowrap",
                                            whileHover: { scale: 1.02 },
                                            whileTap: { scale: 0.98 },
                                            children: "마이페이지",
                                          }),
                                        }),
                                      ],
                                    })
                                  : (0, t.jsx)(g, {
                                      variant: "compact",
                                      className: "hidden md:block",
                                    })),
                            ],
                          }),
                    },
                    "compact-mini-header",
                  ),
                ],
              })
            : (0, t.jsx)(
                h.motion.button,
                {
                  type: "button",
                  "aria-label": "헤더 메뉴 열기",
                  onClick: $,
                  className: `fixed z-[210] flex items-center justify-center ${q ? "top-3 right-4 w-9 h-9 rounded-full bg-gray-100 md:top-5 md:right-5 md:w-11 md:h-11 md:rounded-full md:bg-white/90 md:dark:bg-gray-800/90 md:backdrop-blur-md md:border md:border-gray-200 md:dark:border-gray-700 md:shadow-lg" : "top-4 right-4 w-10 h-10 rounded-xl bg-white border border-gray-200 shadow-sm md:top-5 md:right-5 md:w-11 md:h-11 md:rounded-full md:bg-white/90 md:dark:bg-gray-800/90 md:backdrop-blur-md md:shadow-lg"}`,
                  initial: { opacity: 1 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  whileHover: { scale: 1.03 },
                  whileTap: { scale: 0.97 },
                  children: (0, t.jsx)("svg", {
                    className: `${q ? "w-[18px] h-[18px] md:w-5 md:h-5" : "w-5 h-5"} text-gray-600 md:text-main dark:text-gray-100`,
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    viewBox: "0 0 24 24",
                    children: (0, t.jsx)("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M4 6h16M4 12h16M4 18h16",
                    }),
                  }),
                },
                "compact-mini-header-toggle",
              ),
        });
      }
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
    var M = e.i(868127);
    function T() {
      let e = (0, i.usePathname)(),
        a = [
          {
            name: "인스타그램",
            url: "https://www.instagram.com/pickcare.official/",
            icon: M.SiInstagram,
          },
          {
            name: "네이버 블로그",
            url: "https://blog.naver.com/pickcare",
            icon: M.SiNaver,
          },
        ];
      if (
        e.includes("signup") ||
        "/admin" === e ||
        "/chat" === e ||
        e.startsWith("/chat/") ||
        "/map" === e ||
        e.startsWith("/map/")
      )
        return null;
      let n = "/lounge/magazine" === e || "/lounge/pickspot" === e,
        l = (0, t.jsxs)("div", {
          className:
            "w-full min-h-[520px] tablet:min-h-[360px] desktop:min-h-[280px] flex flex-col justify-between",
          children: [
            (0, t.jsxs)("div", {
              className:
                "flex flex-col gap-8 tablet:flex-row tablet:items-center tablet:justify-between desktop:flex-row desktop:items-center desktop:justify-between",
              children: [
                (0, t.jsx)("div", {
                  className:
                    "inline-flex w-fit items-center gap-1.5 bg-black/15 rounded-xl p-2",
                  children: a.map((e) => {
                    let i = "인스타그램" === e.name;
                    return (0, t.jsx)(
                      r.default,
                      {
                        href: e.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: `flex items-center justify-center w-9 h-9 md:w-10 md:h-10 transition-colors ${i ? "rounded-md bg-[#1C2B3A] hover:bg-[#2A3A4F]" : "rounded-full bg-white hover:bg-gray-50"}`,
                        "aria-label": e.name,
                        children: (0, t.jsx)(e.icon, {
                          className: `w-[12px] h-[12px] md:w-[14px] md:h-[14px] ${i ? "text-white" : "text-[#1C2B3A]"}`,
                        }),
                      },
                      e.url,
                    );
                  }),
                }),
                (0, t.jsx)("div", {
                  className:
                    "w-full flex flex-col gap-3 text-[15px] font-semibold text-[#1C2B3A] tablet:w-auto tablet:flex-row tablet:flex-wrap tablet:gap-x-[40px] tablet:gap-y-3 tablet:justify-start tablet:items-center tablet:text-[15px] tablet:font-normal desktop:w-[730px] desktop:flex-row desktop:flex-wrap desktop:gap-x-[40px] desktop:gap-y-3 desktop:justify-start desktop:items-center desktop:text-[16px] desktop:font-normal",
                  children: [
                    { text: "고객센터", link: "/support" },
                    { text: "이용약관", link: "/terms-of-service" },
                    {
                      text: "위치정보서비스 이용약관",
                      link: "/location-service-terms",
                    },
                    { text: "개인정보처리방침", link: "/privacy-policy" },
                    { text: "제휴 및 광고 문의", link: "/contact" },
                  ].map((e, i) =>
                    (0, t.jsx)(
                      c.default.Fragment,
                      {
                        children: (0, t.jsx)(r.default, {
                          href: e.link,
                          className:
                            "hover:text-[#0066FF] transition-colors whitespace-nowrap",
                          children: e.text,
                        }),
                      },
                      i,
                    ),
                  ),
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className:
                "flex flex-col-reverse gap-6 tablet:flex-row tablet:items-end tablet:justify-between desktop:flex-row desktop:items-end desktop:justify-between",
              children: [
                (0, t.jsx)("div", {
                  className:
                    "text-[14px] tablet:text-[15px] desktop:text-[16px] text-[#1C2B3A] text-left",
                  children: (0, t.jsx)("p", {
                    children: "© 2024–2026 PickCare Inc. All Rights Reserved.",
                  }),
                }),
                (0, t.jsx)("div", {
                  className:
                    "flex justify-start tablet:justify-end desktop:justify-end",
                  children: (0, t.jsx)(s.default, {
                    src: "/op-image.svg",
                    alt: "PiCKCARE",
                    width: 730,
                    height: 114,
                    className:
                      "w-full max-w-[340px] tablet:max-w-[480px] desktop:max-w-none desktop:w-[730px] h-auto",
                  }),
                }),
              ],
            }),
          ],
        });
      return (0, t.jsxs)("footer", {
        className: `w-full bg-[#F7F7F7] px-6 sm:px-8 md:px-10 lg:px-16 relative z-0 ${n ? "pt-[140px] tablet:pt-[180px] desktop:pt-[220px] pb-12" : "py-10 md:py-12"}`,
        children: [
          l,
          (0, t.jsx)("div", {
            className:
              "mt-8 flex justify-center opacity-0 hover:opacity-100 transition-opacity duration-700 select-none",
            children: (0, t.jsx)("p", {
              className: "text-[11px] text-gray-300 tracking-widest",
              children:
                "여기까지 내려오다니... 당신은 진정한 픽케어 탐험가! 🐾",
            }),
          }),
        ],
      });
    }
    var S = e.i(884099);
    function _({
      title: e = "서비스 점검 중입니다",
      message:
        i = "더 나은 서비스를 위해 점검을 진행하고 있습니다.\n잠시 후 다시 방문해 주세요.",
      estimatedTime: a,
    }) {
      return (0, t.jsxs)("div", {
        className:
          "fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-[#F0F6FF] to-white",
        children: [
          (0, t.jsx)("div", {
            className:
              "absolute top-[10%] left-[15%] w-[300px] h-[300px] rounded-full bg-[#DDEDFF]/40 blur-[80px]",
          }),
          (0, t.jsx)("div", {
            className:
              "absolute bottom-[15%] right-[10%] w-[250px] h-[250px] rounded-full bg-[#E8D5FF]/30 blur-[80px]",
          }),
          (0, t.jsxs)("div", {
            className:
              "relative flex flex-col items-center px-6 text-center max-w-[420px]",
            children: [
              (0, t.jsx)(h.motion.div, {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, ease: "easeOut" },
                children: (0, t.jsx)(s.default, {
                  src: "/characters/[2D]set_motion_03.webp",
                  alt: "점검 중인 픽키",
                  width: 160,
                  height: 160,
                  className:
                    "w-[140px] h-[140px] mobile:w-[120px] mobile:h-[120px] object-contain",
                  priority: !0,
                }),
              }),
              (0, t.jsxs)(h.motion.div, {
                className: "mt-6",
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.15, ease: "easeOut" },
                children: [
                  (0, t.jsx)("h1", {
                    className:
                      "text-[22px] mobile:text-[19px] font-bold text-gray-900 tracking-tight",
                    children: e,
                  }),
                  (0, t.jsx)("p", {
                    className:
                      "mt-3 text-[15px] mobile:text-[14px] text-gray-500 leading-relaxed whitespace-pre-line",
                    children: i,
                  }),
                ],
              }),
              a &&
                (0, t.jsxs)(h.motion.div, {
                  className:
                    "mt-5 px-5 py-3 rounded-2xl bg-white border border-gray-100 shadow-sm",
                  initial: { opacity: 0, y: 12 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.3, ease: "easeOut" },
                  children: [
                    (0, t.jsx)("p", {
                      className: "text-[12px] text-gray-400 font-medium",
                      children: "예상 점검 시간",
                    }),
                    (0, t.jsx)("p", {
                      className: "mt-1 text-[16px] font-semibold text-main",
                      children: a,
                    }),
                  ],
                }),
              (0, t.jsxs)(h.motion.div, {
                className: "mt-8 flex items-center gap-1.5",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.6, delay: 0.45 },
                children: [
                  (0, t.jsx)("span", {
                    className:
                      "w-1.5 h-1.5 rounded-full bg-main/60 animate-pulse",
                  }),
                  (0, t.jsx)("span", {
                    className:
                      "w-1.5 h-1.5 rounded-full bg-main/60 animate-pulse",
                    style: { animationDelay: "0.3s" },
                  }),
                  (0, t.jsx)("span", {
                    className:
                      "w-1.5 h-1.5 rounded-full bg-main/60 animate-pulse",
                    style: { animationDelay: "0.6s" },
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    let q = (0, a.default)(() => e.A(383108), {
        loadableGenerated: { modules: [90906] },
        ssr: !1,
      }),
      P = (0, a.default)(() => e.A(718012), {
        loadableGenerated: { modules: [352269] },
        ssr: !1,
      }),
      I = (0, a.default)(() => e.A(302508), {
        loadableGenerated: { modules: [502552] },
        ssr: !1,
      }),
      Q = (0, a.default)(() => e.A(379885), {
        loadableGenerated: { modules: [678903] },
        ssr: !1,
      }),
      F = (0, a.default)(() => e.A(190990), {
        loadableGenerated: { modules: [945635] },
        ssr: !1,
      }),
      W = (0, a.default)(() => e.A(641137), {
        loadableGenerated: { modules: [474671] },
        ssr: !1,
      }),
      D = (0, a.default)(() => e.A(272305), {
        loadableGenerated: { modules: [604107] },
        ssr: !1,
      }),
      B = (0, a.default)(() => e.A(454353), {
        loadableGenerated: { modules: [427663] },
        ssr: !1,
      }),
      H = (0, a.default)(() => e.A(805067), {
        loadableGenerated: { modules: [591499] },
        ssr: !1,
      }),
      $ = (0, a.default)(() => e.A(55191), {
        loadableGenerated: { modules: [722086] },
        ssr: !1,
      });
    function z({ children: e }) {
      let a = (0, i.usePathname)(),
        s = "/admin" === a || a.startsWith("/admin/"),
        r = "/business" === a,
        n = "/en" === a,
        l = "/pet-district" === a,
        o = "/pet-job" === a || "/dog-match" === a,
        d = "/picky-lab/saju" === a || a.startsWith("/picky-lab/saju/"),
        c = "/picky-lab" === a || a.startsWith("/picky-lab/"),
        u = "/kpetfair" === a || a.startsWith("/kpetfair/"),
        h = "/peteventhub" === a || a.startsWith("/peteventhub/"),
        m =
          "/mypage/daily-record" === a || a.startsWith("/mypage/daily-record/"),
        f = "/mypage/daily-record/today" === a,
        x = a.startsWith("/v/"),
        p = "/invite" === a || a.startsWith("/invite/"),
        g = "/mypage/vendors" === a,
        y = "/login" === a,
        b = s || r || n || l || o || d || f || x || p || y,
        { notices: w, hasAllMaintenance: v } = (0, S.useMaintenanceCheck)();
      if (u || h) return (0, t.jsx)(t.Fragment, { children: e });
      if (v && !s) {
        let e = w.find((e) => "ALL" === e.target),
          i = (e) => {
            let t = new Date(e),
              i = /Z$|[+-]\d{2}:\d{2}$/.test(e),
              a = i ? t.getUTCHours() : t.getHours(),
              s = i ? t.getUTCMinutes() : t.getMinutes();
            return `${String(a).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
          },
          a = e ? i(e.startedAt) : "",
          s = e ? i(e.endedAt) : "";
        return (0, t.jsx)(_, {
          title: e?.title,
          message: e?.content,
          estimatedTime: a && s ? `${a} ~ ${s}` : void 0,
        });
      }
      return (0, t.jsxs)(t.Fragment, {
        children: [
          (0, t.jsx)("a", {
            href: "#main-content",
            className:
              "sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#0F7DFF] focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold",
            children: "본문 바로가기",
          }),
          (0, t.jsx)($, {}),
          (0, t.jsx)(Q, {}),
          !b && (0, t.jsx)(O, {}),
          (0, t.jsx)("main", {
            id: "main-content",
            className: "w-full",
            children: e,
          }),
          (0, t.jsx)(q, {}),
          (0, t.jsx)(P, {}),
          (0, t.jsx)(I, {}),
          !(b || c || m || g) && (0, t.jsx)(T, {}),
          !b && (0, t.jsx)(F, {}),
          !b && (0, t.jsx)(W, {}),
          !b && (0, t.jsx)(D, {}),
          !b && (0, t.jsx)(B, {}),
          !b && (0, t.jsx)(H, {}),
        ],
      });
    }
    e.s(["default", () => z], 608444);
  },
]);

//# debugId=f66df01e-21b2-4899-caaa-b45560ee784b
