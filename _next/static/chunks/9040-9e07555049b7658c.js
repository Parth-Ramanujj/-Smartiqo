(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9040],
  {
    15911: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => i });
      var s = r(12115);
      function i() {
        return (
          (0, s.useEffect)(() => {
            window.addEventListener("error", (e) => {
              let { message: t, filename: r } = e;
              ((null == t ? void 0 : t.includes("Loading chunk")) ||
                (null == t ? void 0 : t.includes("ChunkLoadError")) ||
                (null == r ? void 0 : r.includes("/_next/static/chunks/"))) &&
                (console.warn(
                  "[ChunkRetry] Chunk loading error detected, reloading page...",
                ),
                setTimeout(() => {
                  window.location.reload();
                }, 1e3));
            }),
              window.addEventListener("unhandledrejection", (e) => {
                var t, r;
                let s = e.reason;
                ((null == s ? void 0 : s.name) === "ChunkLoadError" ||
                  (null == s || null == (t = s.message)
                    ? void 0
                    : t.includes("Loading chunk")) ||
                  (null == s || null == (r = s.message)
                    ? void 0
                    : r.includes(
                        "Failed to fetch dynamically imported module",
                      ))) &&
                  (console.warn(
                    "[ChunkRetry] Dynamic import error detected, reloading page...",
                  ),
                  e.preventDefault(),
                  setTimeout(() => {
                    window.location.reload();
                  }, 1e3));
              });
          }, []),
          null
        );
      }
    },
    23339: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => a });
      var s = r(95155);
      r(12115);
      var i = r(54581),
        n = r(700),
        o = r(76928);
      function a() {
        var e, t, r;
        let {
          loading: a,
          settings: l,
          globalSettings: u,
          hasPremium: c,
        } = (0, o.Z)();
        if (
          a ||
          (null !=
            (t =
              null != (e = null == l ? void 0 : l.hideFooter)
                ? e
                : null == u
                  ? void 0
                  : u.hideFooter) &&
            t)
        )
          return null;
        let h = !!(null != (r = null == l ? void 0 : l.customUrlEnabled) && r),
          d =
            "string" == typeof (null == l ? void 0 : l.customUrlHandle)
              ? l.customUrlHandle.trim()
              : "",
          p =
            c && h && d
              ? ""
                  .concat(window.location.origin.replace(/\/$/, ""), "/")
                  .concat(d)
              : null,
          f =
            c && "string" == typeof (null == l ? void 0 : l.footerLinkText)
              ? String(l.footerLinkText).trim()
              : "",
          m =
            c && "string" == typeof (null == l ? void 0 : l.footerLinkUrl)
              ? String(l.footerLinkUrl).trim()
              : "",
          g = !!(f && m);
        return (0, s.jsx)(i.A, {
          component: "footer",
          sx: { py: 2, textAlign: "center", bgcolor: "#f5f5f5", mt: "auto" },
          children: (0, s.jsxs)(n.A, {
            variant: "body2",
            sx: { fontWeight: 300 },
            children: [
              "Crafted with",
              " ",
              (0, s.jsx)(i.A, {
                component: "span",
                role: "img",
                "aria-label": "heart",
                sx: { color: "#ff4d6d" },
                children: "❤",
              }),
              " ",
              "by ",
              (0, s.jsx)(i.A, {
                component: "span",
                sx: { fontWeight: "bold" },
                children: "YantraMayaa Designs",
              }),
              g
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      " ",
                      "|",
                      " ",
                      (0, s.jsx)(i.A, {
                        component: "a",
                        href: m,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        sx: { fontWeight: "bold" },
                        children: f,
                      }),
                    ],
                  })
                : p
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        " ",
                        "| Website:",
                        " ",
                        (0, s.jsx)(i.A, {
                          component: "a",
                          href: p,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          sx: { fontWeight: 500 },
                          children: p,
                        }),
                      ],
                    })
                  : null,
              " ",
              "| 2025 \xa9 All Rights Reserved",
            ],
          }),
        });
      }
    },
    30614: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => S });
      var s = r(95155),
        i = r(12115),
        n = r(34540),
        o = r(1743),
        a = r(31448),
        l = r(45292),
        u = r(9700),
        c = r(36863),
        h = r(16324),
        d = r(93789),
        p = r(34742);
      function f(e, t, r) {
        let s = (function (e, t, r) {
          let s,
            i = t.getBoundingClientRect(),
            n = r && r.getBoundingClientRect(),
            o = (0, p.A)(t);
          if (t.fakeTransform) s = t.fakeTransform;
          else {
            let e = o.getComputedStyle(t);
            s =
              e.getPropertyValue("-webkit-transform") ||
              e.getPropertyValue("transform");
          }
          let a = 0,
            l = 0;
          if (s && "none" !== s && "string" == typeof s) {
            let e = s.split("(")[1].split(")")[0].split(",");
            (a = parseInt(e[4], 10)), (l = parseInt(e[5], 10));
          }
          return "left" === e
            ? n
              ? "translateX(".concat(n.right + a - i.left, "px)")
              : "translateX(".concat(o.innerWidth + a - i.left, "px)")
            : "right" === e
              ? n
                ? "translateX(-".concat(i.right - n.left - a, "px)")
                : "translateX(-".concat(i.left + i.width - a, "px)")
              : "up" === e
                ? n
                  ? "translateY(".concat(n.bottom + l - i.top, "px)")
                  : "translateY(".concat(o.innerHeight + l - i.top, "px)")
                : n
                  ? "translateY(-".concat(i.top - n.top + i.height - l, "px)")
                  : "translateY(-".concat(i.top + i.height - l, "px)");
        })(e, t, "function" == typeof r ? r() : r);
        s && ((t.style.webkitTransform = s), (t.style.transform = s));
      }
      let m = i.forwardRef(function (e, t) {
        let r = (0, h.A)(),
          n = {
            enter: r.transitions.easing.easeOut,
            exit: r.transitions.easing.sharp,
          },
          o = {
            enter: r.transitions.duration.enteringScreen,
            exit: r.transitions.duration.leavingScreen,
          },
          {
            addEndListener: m,
            appear: g = !0,
            children: y,
            container: v,
            direction: b = "down",
            easing: S = n,
            in: x,
            onEnter: w,
            onEntered: C,
            onEntering: E,
            onExit: O,
            onExited: T,
            onExiting: A,
            style: P,
            timeout: D = o,
            TransitionComponent: I = a.Ay,
            ...M
          } = e,
          j = i.useRef(null),
          k = (0, c.A)((0, l.A)(y), j, t),
          N = (e) => (t) => {
            e && (void 0 === t ? e(j.current) : e(j.current, t));
          },
          R = N((e, t) => {
            f(b, e, v), (0, d.q)(e), w && w(e, t);
          }),
          q = N((e, t) => {
            let s = (0, d.c)(
              { timeout: D, style: P, easing: S },
              { mode: "enter" },
            );
            (e.style.webkitTransition = r.transitions.create(
              "-webkit-transform",
              { ...s },
            )),
              (e.style.transition = r.transitions.create("transform", {
                ...s,
              })),
              (e.style.webkitTransform = "none"),
              (e.style.transform = "none"),
              E && E(e, t);
          }),
          F = N(C),
          L = N(A),
          U = N((e) => {
            let t = (0, d.c)(
              { timeout: D, style: P, easing: S },
              { mode: "exit" },
            );
            (e.style.webkitTransition = r.transitions.create(
              "-webkit-transform",
              t,
            )),
              (e.style.transition = r.transitions.create("transform", t)),
              f(b, e, v),
              O && O(e);
          }),
          _ = N((e) => {
            (e.style.webkitTransition = ""),
              (e.style.transition = ""),
              T && T(e);
          }),
          Q = i.useCallback(() => {
            j.current && f(b, j.current, v);
          }, [b, v]);
        return (
          i.useEffect(() => {
            if (x || "down" === b || "right" === b) return;
            let e = (0, u.A)(() => {
                j.current && f(b, j.current, v);
              }),
              t = (0, p.A)(j.current);
            return (
              t.addEventListener("resize", e),
              () => {
                e.clear(), t.removeEventListener("resize", e);
              }
            );
          }, [b, x, v]),
          i.useEffect(() => {
            x || Q();
          }, [x, Q]),
          (0, s.jsx)(I, {
            nodeRef: j,
            onEnter: R,
            onEntered: F,
            onEntering: q,
            onExit: U,
            onExited: _,
            onExiting: L,
            addEndListener: (e) => {
              m && m(j.current, e);
            },
            appear: g,
            in: x,
            timeout: D,
            ...M,
            children: (e, t) => {
              let { ownerState: r, ...s } = t;
              return i.cloneElement(y, {
                ref: k,
                style: {
                  visibility: "exited" !== e || x ? void 0 : "hidden",
                  ...P,
                  ...y.props.style,
                },
                ...s,
              });
            },
          })
        );
      });
      var g = r(54581),
        y = r(75824),
        v = r(9665);
      function b(e) {
        return (0, s.jsx)(m, { ...e, direction: "up" });
      }
      function S() {
        let e = (0, n.wA)(),
          {
            message: t,
            severity: r,
            duration: i,
          } = (0, n.d4)((e) => e.extraSlice.alert),
          a = (t, r) => {
            "clickaway" !== r && "escapeKeyDown" !== r && e((0, o.aV)());
          };
        return (0, s.jsx)(g.A, {
          sx: { pointerEvents: "none" },
          children: (0, s.jsx)(y.A, {
            open: !!t && i > 0,
            autoHideDuration: i,
            onClose: a,
            anchorOrigin: { vertical: "bottom", horizontal: "right" },
            TransitionComponent: b,
            sx: {
              pointerEvents: "auto",
              "& .MuiPaper-root": {
                borderRadius: 2,
                boxShadow:
                  "0 10px 25px rgba(0,0,0,0.15), 0 4px 10px rgba(0,0,0,0.08)",
              },
            },
            children: (0, s.jsx)(v.A, {
              onClose: () => a(),
              severity: r,
              variant: "filled",
              sx: {
                alignItems: "center",
                borderRadius: 2,
                fontWeight: 600,
                letterSpacing: 0.2,
                backdropFilter: "blur(8px)",
                backgroundImage:
                  "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.0))",
              },
              children: t,
            }),
          }),
        });
      }
    },
    35786: () => {},
    42163: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => eC });
      var s,
        i = r(95155),
        n = r(12115),
        o = r(34540),
        a = r(12108),
        l = n.createContext(void 0),
        u = (e) => {
          let { client: t, children: r } = e;
          return (
            n.useEffect(
              () => (
                t.mount(),
                () => {
                  t.unmount();
                }
              ),
              [t],
            ),
            (0, i.jsx)(l.Provider, { value: t, children: r })
          );
        },
        c = r(92927),
        h = r(97781),
        d = r(78650),
        p = {
          setTimeout: (e, t) => setTimeout(e, t),
          clearTimeout: (e) => clearTimeout(e),
          setInterval: (e, t) => setInterval(e, t),
          clearInterval: (e) => clearInterval(e),
        },
        f = new (class {
          #e = p;
          #t = !1;
          setTimeoutProvider(e) {
            this.#e = e;
          }
          setTimeout(e, t) {
            return this.#e.setTimeout(e, t);
          }
          clearTimeout(e) {
            this.#e.clearTimeout(e);
          }
          setInterval(e, t) {
            return this.#e.setInterval(e, t);
          }
          clearInterval(e) {
            this.#e.clearInterval(e);
          }
        })(),
        m = "undefined" == typeof window || "Deno" in globalThis;
      function g() {}
      function y(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function v(e, t) {
        let {
          type: r = "all",
          exact: s,
          fetchStatus: i,
          predicate: n,
          queryKey: o,
          stale: a,
        } = e;
        if (o) {
          if (s) {
            if (t.queryHash !== S(o, t.options)) return !1;
          } else if (!w(t.queryKey, o)) return !1;
        }
        if ("all" !== r) {
          let e = t.isActive();
          if (("active" === r && !e) || ("inactive" === r && e)) return !1;
        }
        return (
          ("boolean" != typeof a || t.isStale() === a) &&
          (!i || i === t.state.fetchStatus) &&
          (!n || !!n(t))
        );
      }
      function b(e, t) {
        let { exact: r, status: s, predicate: i, mutationKey: n } = e;
        if (n) {
          if (!t.options.mutationKey) return !1;
          if (r) {
            if (x(t.options.mutationKey) !== x(n)) return !1;
          } else if (!w(t.options.mutationKey, n)) return !1;
        }
        return (!s || t.state.status === s) && (!i || !!i(t));
      }
      function S(e, t) {
        return (t?.queryKeyHashFn || x)(e);
      }
      function x(e) {
        return JSON.stringify(e, (e, t) =>
          O(t)
            ? Object.keys(t)
                .sort()
                .reduce((e, r) => ((e[r] = t[r]), e), {})
            : t,
        );
      }
      function w(e, t) {
        return (
          e === t ||
          (typeof e == typeof t &&
            !!e &&
            !!t &&
            "object" == typeof e &&
            "object" == typeof t &&
            Object.keys(t).every((r) => w(e[r], t[r])))
        );
      }
      var C = Object.prototype.hasOwnProperty;
      function E(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length;
      }
      function O(e) {
        if (!T(e)) return !1;
        let t = e.constructor;
        if (void 0 === t) return !0;
        let r = t.prototype;
        return (
          !!T(r) &&
          !!r.hasOwnProperty("isPrototypeOf") &&
          Object.getPrototypeOf(e) === Object.prototype
        );
      }
      function T(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function A(e, t, r = 0) {
        let s = [...e, t];
        return r && s.length > r ? s.slice(1) : s;
      }
      function P(e, t, r = 0) {
        let s = [t, ...e];
        return r && s.length > r ? s.slice(0, -1) : s;
      }
      var D = Symbol();
      function I(e, t) {
        return !e.queryFn && t?.initialPromise
          ? () => t.initialPromise
          : e.queryFn && e.queryFn !== D
            ? e.queryFn
            : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
      }
      var M = function (e) {
          setTimeout(e, 0);
        },
        j = (function () {
          let e = [],
            t = 0,
            r = (e) => {
              e();
            },
            s = (e) => {
              e();
            },
            i = M,
            n = (s) => {
              t
                ? e.push(s)
                : i(() => {
                    r(s);
                  });
            },
            o = () => {
              let t = e;
              (e = []),
                t.length &&
                  i(() => {
                    s(() => {
                      t.forEach((e) => {
                        r(e);
                      });
                    });
                  });
            };
          return {
            batch: (e) => {
              let r;
              t++;
              try {
                r = e();
              } finally {
                --t || o();
              }
              return r;
            },
            batchCalls:
              (e) =>
              (...t) => {
                n(() => {
                  e(...t);
                });
              },
            schedule: n,
            setNotifyFunction: (e) => {
              r = e;
            },
            setBatchNotifyFunction: (e) => {
              s = e;
            },
            setScheduler: (e) => {
              i = e;
            },
          };
        })(),
        k = class {
          constructor() {
            (this.listeners = new Set()),
              (this.subscribe = this.subscribe.bind(this));
          }
          subscribe(e) {
            return (
              this.listeners.add(e),
              this.onSubscribe(),
              () => {
                this.listeners.delete(e), this.onUnsubscribe();
              }
            );
          }
          hasListeners() {
            return this.listeners.size > 0;
          }
          onSubscribe() {}
          onUnsubscribe() {}
        },
        N = new (class extends k {
          #r;
          #s;
          #i;
          constructor() {
            super(),
              (this.#i = (e) => {
                if (!m && window.addEventListener) {
                  let t = () => e();
                  return (
                    window.addEventListener("visibilitychange", t, !1),
                    () => {
                      window.removeEventListener("visibilitychange", t);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#s || this.setEventListener(this.#i);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#s?.(), (this.#s = void 0));
          }
          setEventListener(e) {
            (this.#i = e),
              this.#s?.(),
              (this.#s = e((e) => {
                "boolean" == typeof e ? this.setFocused(e) : this.onFocus();
              }));
          }
          setFocused(e) {
            this.#r !== e && ((this.#r = e), this.onFocus());
          }
          onFocus() {
            let e = this.isFocused();
            this.listeners.forEach((t) => {
              t(e);
            });
          }
          isFocused() {
            return "boolean" == typeof this.#r
              ? this.#r
              : globalThis.document?.visibilityState !== "hidden";
          }
        })(),
        R = new (class extends k {
          #n = !0;
          #s;
          #i;
          constructor() {
            super(),
              (this.#i = (e) => {
                if (!m && window.addEventListener) {
                  let t = () => e(!0),
                    r = () => e(!1);
                  return (
                    window.addEventListener("online", t, !1),
                    window.addEventListener("offline", r, !1),
                    () => {
                      window.removeEventListener("online", t),
                        window.removeEventListener("offline", r);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#s || this.setEventListener(this.#i);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#s?.(), (this.#s = void 0));
          }
          setEventListener(e) {
            (this.#i = e),
              this.#s?.(),
              (this.#s = e(this.setOnline.bind(this)));
          }
          setOnline(e) {
            this.#n !== e &&
              ((this.#n = e),
              this.listeners.forEach((t) => {
                t(e);
              }));
          }
          isOnline() {
            return this.#n;
          }
        })();
      function q(e) {
        return Math.min(1e3 * 2 ** e, 3e4);
      }
      function F(e) {
        return (e ?? "online") !== "online" || R.isOnline();
      }
      var L = class extends Error {
        constructor(e) {
          super("CancelledError"),
            (this.revert = e?.revert),
            (this.silent = e?.silent);
        }
      };
      function U(e) {
        let t,
          r = !1,
          s = 0,
          i = (function () {
            let e,
              t,
              r = new Promise((r, s) => {
                (e = r), (t = s);
              });
            function s(e) {
              Object.assign(r, e), delete r.resolve, delete r.reject;
            }
            return (
              (r.status = "pending"),
              r.catch(() => {}),
              (r.resolve = (t) => {
                s({ status: "fulfilled", value: t }), e(t);
              }),
              (r.reject = (e) => {
                s({ status: "rejected", reason: e }), t(e);
              }),
              r
            );
          })(),
          n = () => "pending" !== i.status,
          o = () =>
            N.isFocused() &&
            ("always" === e.networkMode || R.isOnline()) &&
            e.canRun(),
          a = () => F(e.networkMode) && e.canRun(),
          l = (e) => {
            n() || (t?.(), i.resolve(e));
          },
          u = (e) => {
            n() || (t?.(), i.reject(e));
          },
          c = () =>
            new Promise((r) => {
              (t = (e) => {
                (n() || o()) && r(e);
              }),
                e.onPause?.();
            }).then(() => {
              (t = void 0), n() || e.onContinue?.();
            }),
          h = () => {
            let t;
            if (n()) return;
            let i = 0 === s ? e.initialPromise : void 0;
            try {
              t = i ?? e.fn();
            } catch (e) {
              t = Promise.reject(e);
            }
            Promise.resolve(t)
              .then(l)
              .catch((t) => {
                if (n()) return;
                let i = e.retry ?? 3 * !m,
                  a = e.retryDelay ?? q,
                  l = "function" == typeof a ? a(s, t) : a,
                  d =
                    !0 === i ||
                    ("number" == typeof i && s < i) ||
                    ("function" == typeof i && i(s, t));
                if (r || !d) return void u(t);
                s++,
                  e.onFail?.(s, t),
                  new Promise((e) => {
                    f.setTimeout(e, l);
                  })
                    .then(() => (o() ? void 0 : c()))
                    .then(() => {
                      r ? u(t) : h();
                    });
              });
          };
        return {
          promise: i,
          status: () => i.status,
          cancel: (t) => {
            if (!n()) {
              let r = new L(t);
              u(r), e.onCancel?.(r);
            }
          },
          continue: () => (t?.(), i),
          cancelRetry: () => {
            r = !0;
          },
          continueRetry: () => {
            r = !1;
          },
          canStart: a,
          start: () => (a() ? h() : c().then(h), i),
        };
      }
      var _ = class {
          #o;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            var e;
            this.clearGcTimeout(),
              "number" == typeof (e = this.gcTime) &&
                e >= 0 &&
                e !== 1 / 0 &&
                (this.#o = f.setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ?? (m ? 1 / 0 : 3e5));
          }
          clearGcTimeout() {
            this.#o && (f.clearTimeout(this.#o), (this.#o = void 0));
          }
        },
        Q = class extends _ {
          #a;
          #l;
          #u;
          #c;
          #h;
          #d;
          #p;
          constructor(e) {
            super(),
              (this.#p = !1),
              (this.#d = e.defaultOptions),
              this.setOptions(e.options),
              (this.observers = []),
              (this.#c = e.client),
              (this.#u = this.#c.getQueryCache()),
              (this.queryKey = e.queryKey),
              (this.queryHash = e.queryHash),
              (this.#a = H(this.options)),
              (this.state = e.state ?? this.#a),
              this.scheduleGc();
          }
          get meta() {
            return this.options.meta;
          }
          get promise() {
            return this.#h?.promise;
          }
          setOptions(e) {
            if (
              ((this.options = { ...this.#d, ...e }),
              this.updateGcTime(this.options.gcTime),
              this.state && void 0 === this.state.data)
            ) {
              let e = H(this.options);
              void 0 !== e.data &&
                (this.setState(K(e.data, e.dataUpdatedAt)), (this.#a = e));
            }
          }
          optionalRemove() {
            this.observers.length ||
              "idle" !== this.state.fetchStatus ||
              this.#u.remove(this);
          }
          setData(e, t) {
            var r, s;
            let i =
              ((r = this.state.data),
              "function" == typeof (s = this.options).structuralSharing
                ? s.structuralSharing(r, e)
                : !1 !== s.structuralSharing
                  ? (function e(t, r) {
                      if (t === r) return t;
                      let s = E(t) && E(r);
                      if (!s && !(O(t) && O(r))) return r;
                      let i = (s ? t : Object.keys(t)).length,
                        n = s ? r : Object.keys(r),
                        o = n.length,
                        a = s ? Array(o) : {},
                        l = 0;
                      for (let u = 0; u < o; u++) {
                        let o = s ? u : n[u],
                          c = t[o],
                          h = r[o];
                        if (c === h) {
                          (a[o] = c), (s ? u < i : C.call(t, o)) && l++;
                          continue;
                        }
                        if (
                          null === c ||
                          null === h ||
                          "object" != typeof c ||
                          "object" != typeof h
                        ) {
                          a[o] = h;
                          continue;
                        }
                        let d = e(c, h);
                        (a[o] = d), d === c && l++;
                      }
                      return i === o && l === i ? t : a;
                    })(r, e)
                  : e);
            return (
              this.#f({
                data: i,
                type: "success",
                dataUpdatedAt: t?.updatedAt,
                manual: t?.manual,
              }),
              i
            );
          }
          setState(e, t) {
            this.#f({ type: "setState", state: e, setStateOptions: t });
          }
          cancel(e) {
            let t = this.#h?.promise;
            return (
              this.#h?.cancel(e), t ? t.then(g).catch(g) : Promise.resolve()
            );
          }
          destroy() {
            super.destroy(), this.cancel({ silent: !0 });
          }
          reset() {
            this.destroy(), this.setState(this.#a);
          }
          isActive() {
            return this.observers.some((e) => {
              var t;
              return (
                !1 !==
                ((t = e.options.enabled), "function" == typeof t ? t(this) : t)
              );
            });
          }
          isDisabled() {
            return this.getObserversCount() > 0
              ? !this.isActive()
              : this.options.queryFn === D ||
                  this.state.dataUpdateCount + this.state.errorUpdateCount ===
                    0;
          }
          isStatic() {
            return (
              this.getObserversCount() > 0 &&
              this.observers.some(
                (e) => "static" === y(e.options.staleTime, this),
              )
            );
          }
          isStale() {
            return this.getObserversCount() > 0
              ? this.observers.some((e) => e.getCurrentResult().isStale)
              : void 0 === this.state.data || this.state.isInvalidated;
          }
          isStaleByTime(e = 0) {
            return (
              void 0 === this.state.data ||
              ("static" !== e &&
                (!!this.state.isInvalidated ||
                  !Math.max(
                    this.state.dataUpdatedAt + (e || 0) - Date.now(),
                    0,
                  )))
            );
          }
          onFocus() {
            let e = this.observers.find((e) => e.shouldFetchOnWindowFocus());
            e?.refetch({ cancelRefetch: !1 }), this.#h?.continue();
          }
          onOnline() {
            let e = this.observers.find((e) => e.shouldFetchOnReconnect());
            e?.refetch({ cancelRefetch: !1 }), this.#h?.continue();
          }
          addObserver(e) {
            this.observers.includes(e) ||
              (this.observers.push(e),
              this.clearGcTimeout(),
              this.#u.notify({
                type: "observerAdded",
                query: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            this.observers.includes(e) &&
              ((this.observers = this.observers.filter((t) => t !== e)),
              this.observers.length ||
                (this.#h &&
                  (this.#p
                    ? this.#h.cancel({ revert: !0 })
                    : this.#h.cancelRetry()),
                this.scheduleGc()),
              this.#u.notify({
                type: "observerRemoved",
                query: this,
                observer: e,
              }));
          }
          getObserversCount() {
            return this.observers.length;
          }
          invalidate() {
            this.state.isInvalidated || this.#f({ type: "invalidate" });
          }
          async fetch(e, t) {
            if (
              "idle" !== this.state.fetchStatus &&
              this.#h?.status() !== "rejected"
            ) {
              if (void 0 !== this.state.data && t?.cancelRefetch)
                this.cancel({ silent: !0 });
              else if (this.#h) return this.#h.continueRetry(), this.#h.promise;
            }
            if ((e && this.setOptions(e), !this.options.queryFn)) {
              let e = this.observers.find((e) => e.options.queryFn);
              e && this.setOptions(e.options);
            }
            let r = new AbortController(),
              s = (e) => {
                Object.defineProperty(e, "signal", {
                  enumerable: !0,
                  get: () => ((this.#p = !0), r.signal),
                });
              },
              i = () => {
                let e = I(this.options, t),
                  r = (() => {
                    let e = {
                      client: this.#c,
                      queryKey: this.queryKey,
                      meta: this.meta,
                    };
                    return s(e), e;
                  })();
                return ((this.#p = !1), this.options.persister)
                  ? this.options.persister(e, r, this)
                  : e(r);
              },
              n = (() => {
                let e = {
                  fetchOptions: t,
                  options: this.options,
                  queryKey: this.queryKey,
                  client: this.#c,
                  state: this.state,
                  fetchFn: i,
                };
                return s(e), e;
              })();
            this.options.behavior?.onFetch(n, this),
              (this.#l = this.state),
              ("idle" === this.state.fetchStatus ||
                this.state.fetchMeta !== n.fetchOptions?.meta) &&
                this.#f({ type: "fetch", meta: n.fetchOptions?.meta }),
              (this.#h = U({
                initialPromise: t?.initialPromise,
                fn: n.fetchFn,
                onCancel: (e) => {
                  e instanceof L &&
                    e.revert &&
                    this.setState({ ...this.#l, fetchStatus: "idle" }),
                    r.abort();
                },
                onFail: (e, t) => {
                  this.#f({ type: "failed", failureCount: e, error: t });
                },
                onPause: () => {
                  this.#f({ type: "pause" });
                },
                onContinue: () => {
                  this.#f({ type: "continue" });
                },
                retry: n.options.retry,
                retryDelay: n.options.retryDelay,
                networkMode: n.options.networkMode,
                canRun: () => !0,
              }));
            try {
              let e = await this.#h.start();
              if (void 0 === e)
                throw Error(`${this.queryHash} data is undefined`);
              return (
                this.setData(e),
                this.#u.config.onSuccess?.(e, this),
                this.#u.config.onSettled?.(e, this.state.error, this),
                e
              );
            } catch (e) {
              if (e instanceof L) {
                if (e.silent) return this.#h.promise;
                else if (e.revert) {
                  if (void 0 === this.state.data) throw e;
                  return this.state.data;
                }
              }
              throw (
                (this.#f({ type: "error", error: e }),
                this.#u.config.onError?.(e, this),
                this.#u.config.onSettled?.(this.state.data, e, this),
                e)
              );
            } finally {
              this.scheduleGc();
            }
          }
          #f(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case "failed":
                  return {
                    ...t,
                    fetchFailureCount: e.failureCount,
                    fetchFailureReason: e.error,
                  };
                case "pause":
                  return { ...t, fetchStatus: "paused" };
                case "continue":
                  return { ...t, fetchStatus: "fetching" };
                case "fetch":
                  var r;
                  return {
                    ...t,
                    ...((r = t.data),
                    {
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                      fetchStatus: F(this.options.networkMode)
                        ? "fetching"
                        : "paused",
                      ...(void 0 === r && { error: null, status: "pending" }),
                    }),
                    fetchMeta: e.meta ?? null,
                  };
                case "success":
                  let s = {
                    ...t,
                    ...K(e.data, e.dataUpdatedAt),
                    dataUpdateCount: t.dataUpdateCount + 1,
                    ...(!e.manual && {
                      fetchStatus: "idle",
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                    }),
                  };
                  return (this.#l = e.manual ? s : void 0), s;
                case "error":
                  let i = e.error;
                  return {
                    ...t,
                    error: i,
                    errorUpdateCount: t.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: t.fetchFailureCount + 1,
                    fetchFailureReason: i,
                    fetchStatus: "idle",
                    status: "error",
                  };
                case "invalidate":
                  return { ...t, isInvalidated: !0 };
                case "setState":
                  return { ...t, ...e.state };
              }
            })(this.state)),
              j.batch(() => {
                this.observers.forEach((e) => {
                  e.onQueryUpdate();
                }),
                  this.#u.notify({ query: this, type: "updated", action: e });
              });
          }
        };
      function K(e, t) {
        return {
          data: e,
          dataUpdatedAt: t ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
        };
      }
      function H(e) {
        let t =
            "function" == typeof e.initialData
              ? e.initialData()
              : e.initialData,
          r = void 0 !== t,
          s = r
            ? "function" == typeof e.initialDataUpdatedAt
              ? e.initialDataUpdatedAt()
              : e.initialDataUpdatedAt
            : 0;
        return {
          data: t,
          dataUpdateCount: 0,
          dataUpdatedAt: r ? (s ?? Date.now()) : 0,
          error: null,
          errorUpdateCount: 0,
          errorUpdatedAt: 0,
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchMeta: null,
          isInvalidated: !1,
          status: r ? "success" : "pending",
          fetchStatus: "idle",
        };
      }
      var X = class extends k {
          constructor(e = {}) {
            super(), (this.config = e), (this.#m = new Map());
          }
          #m;
          build(e, t, r) {
            let s = t.queryKey,
              i = t.queryHash ?? S(s, t),
              n = this.get(i);
            return (
              n ||
                ((n = new Q({
                  client: e,
                  queryKey: s,
                  queryHash: i,
                  options: e.defaultQueryOptions(t),
                  state: r,
                  defaultOptions: e.getQueryDefaults(s),
                })),
                this.add(n)),
              n
            );
          }
          add(e) {
            this.#m.has(e.queryHash) ||
              (this.#m.set(e.queryHash, e),
              this.notify({ type: "added", query: e }));
          }
          remove(e) {
            let t = this.#m.get(e.queryHash);
            t &&
              (e.destroy(),
              t === e && this.#m.delete(e.queryHash),
              this.notify({ type: "removed", query: e }));
          }
          clear() {
            j.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          get(e) {
            return this.#m.get(e);
          }
          getAll() {
            return [...this.#m.values()];
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => v(t, e));
          }
          findAll(e = {}) {
            let t = this.getAll();
            return Object.keys(e).length > 0 ? t.filter((t) => v(e, t)) : t;
          }
          notify(e) {
            j.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          onFocus() {
            j.batch(() => {
              this.getAll().forEach((e) => {
                e.onFocus();
              });
            });
          }
          onOnline() {
            j.batch(() => {
              this.getAll().forEach((e) => {
                e.onOnline();
              });
            });
          }
        },
        W = class extends _ {
          #c;
          #g;
          #y;
          #h;
          constructor(e) {
            super(),
              (this.#c = e.client),
              (this.mutationId = e.mutationId),
              (this.#y = e.mutationCache),
              (this.#g = []),
              (this.state = e.state || {
                context: void 0,
                data: void 0,
                error: null,
                failureCount: 0,
                failureReason: null,
                isPaused: !1,
                status: "idle",
                variables: void 0,
                submittedAt: 0,
              }),
              this.setOptions(e.options),
              this.scheduleGc();
          }
          setOptions(e) {
            (this.options = e), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(e) {
            this.#g.includes(e) ||
              (this.#g.push(e),
              this.clearGcTimeout(),
              this.#y.notify({
                type: "observerAdded",
                mutation: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            (this.#g = this.#g.filter((t) => t !== e)),
              this.scheduleGc(),
              this.#y.notify({
                type: "observerRemoved",
                mutation: this,
                observer: e,
              });
          }
          optionalRemove() {
            this.#g.length ||
              ("pending" === this.state.status
                ? this.scheduleGc()
                : this.#y.remove(this));
          }
          continue() {
            return this.#h?.continue() ?? this.execute(this.state.variables);
          }
          async execute(e) {
            let t = () => {
                this.#f({ type: "continue" });
              },
              r = {
                client: this.#c,
                meta: this.options.meta,
                mutationKey: this.options.mutationKey,
              };
            this.#h = U({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(e, r)
                  : Promise.reject(Error("No mutationFn found")),
              onFail: (e, t) => {
                this.#f({ type: "failed", failureCount: e, error: t });
              },
              onPause: () => {
                this.#f({ type: "pause" });
              },
              onContinue: t,
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#y.canRun(this),
            });
            let s = "pending" === this.state.status,
              i = !this.#h.canStart();
            try {
              if (s) t();
              else {
                this.#f({ type: "pending", variables: e, isPaused: i }),
                  await this.#y.config.onMutate?.(e, this, r);
                let t = await this.options.onMutate?.(e, r);
                t !== this.state.context &&
                  this.#f({
                    type: "pending",
                    context: t,
                    variables: e,
                    isPaused: i,
                  });
              }
              let n = await this.#h.start();
              return (
                await this.#y.config.onSuccess?.(
                  n,
                  e,
                  this.state.context,
                  this,
                  r,
                ),
                await this.options.onSuccess?.(n, e, this.state.context, r),
                await this.#y.config.onSettled?.(
                  n,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                  r,
                ),
                await this.options.onSettled?.(
                  n,
                  null,
                  e,
                  this.state.context,
                  r,
                ),
                this.#f({ type: "success", data: n }),
                n
              );
            } catch (t) {
              try {
                throw (
                  (await this.#y.config.onError?.(
                    t,
                    e,
                    this.state.context,
                    this,
                    r,
                  ),
                  await this.options.onError?.(t, e, this.state.context, r),
                  await this.#y.config.onSettled?.(
                    void 0,
                    t,
                    this.state.variables,
                    this.state.context,
                    this,
                    r,
                  ),
                  await this.options.onSettled?.(
                    void 0,
                    t,
                    e,
                    this.state.context,
                    r,
                  ),
                  t)
                );
              } finally {
                this.#f({ type: "error", error: t });
              }
            } finally {
              this.#y.runNext(this);
            }
          }
          #f(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case "failed":
                  return {
                    ...t,
                    failureCount: e.failureCount,
                    failureReason: e.error,
                  };
                case "pause":
                  return { ...t, isPaused: !0 };
                case "continue":
                  return { ...t, isPaused: !1 };
                case "pending":
                  return {
                    ...t,
                    context: e.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: e.isPaused,
                    status: "pending",
                    variables: e.variables,
                    submittedAt: Date.now(),
                  };
                case "success":
                  return {
                    ...t,
                    data: e.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1,
                  };
                case "error":
                  return {
                    ...t,
                    data: void 0,
                    error: e.error,
                    failureCount: t.failureCount + 1,
                    failureReason: e.error,
                    isPaused: !1,
                    status: "error",
                  };
              }
            })(this.state)),
              j.batch(() => {
                this.#g.forEach((t) => {
                  t.onMutationUpdate(e);
                }),
                  this.#y.notify({
                    mutation: this,
                    type: "updated",
                    action: e,
                  });
              });
          }
        },
        G = class extends k {
          constructor(e = {}) {
            super(),
              (this.config = e),
              (this.#v = new Set()),
              (this.#b = new Map()),
              (this.#S = 0);
          }
          #v;
          #b;
          #S;
          build(e, t, r) {
            let s = new W({
              client: e,
              mutationCache: this,
              mutationId: ++this.#S,
              options: e.defaultMutationOptions(t),
              state: r,
            });
            return this.add(s), s;
          }
          add(e) {
            this.#v.add(e);
            let t = z(e);
            if ("string" == typeof t) {
              let r = this.#b.get(t);
              r ? r.push(e) : this.#b.set(t, [e]);
            }
            this.notify({ type: "added", mutation: e });
          }
          remove(e) {
            if (this.#v.delete(e)) {
              let t = z(e);
              if ("string" == typeof t) {
                let r = this.#b.get(t);
                if (r)
                  if (r.length > 1) {
                    let t = r.indexOf(e);
                    -1 !== t && r.splice(t, 1);
                  } else r[0] === e && this.#b.delete(t);
              }
            }
            this.notify({ type: "removed", mutation: e });
          }
          canRun(e) {
            let t = z(e);
            if ("string" != typeof t) return !0;
            {
              let r = this.#b.get(t),
                s = r?.find((e) => "pending" === e.state.status);
              return !s || s === e;
            }
          }
          runNext(e) {
            let t = z(e);
            if ("string" != typeof t) return Promise.resolve();
            {
              let r = this.#b.get(t)?.find((t) => t !== e && t.state.isPaused);
              return r?.continue() ?? Promise.resolve();
            }
          }
          clear() {
            j.batch(() => {
              this.#v.forEach((e) => {
                this.notify({ type: "removed", mutation: e });
              }),
                this.#v.clear(),
                this.#b.clear();
            });
          }
          getAll() {
            return Array.from(this.#v);
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => b(t, e));
          }
          findAll(e = {}) {
            return this.getAll().filter((t) => b(e, t));
          }
          notify(e) {
            j.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          resumePausedMutations() {
            let e = this.getAll().filter((e) => e.state.isPaused);
            return j.batch(() =>
              Promise.all(e.map((e) => e.continue().catch(g))),
            );
          }
        };
      function z(e) {
        return e.options.scope?.id;
      }
      function J(e) {
        return {
          onFetch: (t, r) => {
            let s = t.options,
              i = t.fetchOptions?.meta?.fetchMore?.direction,
              n = t.state.data?.pages || [],
              o = t.state.data?.pageParams || [],
              a = { pages: [], pageParams: [] },
              l = 0,
              u = async () => {
                let r = !1,
                  u = (e) => {
                    Object.defineProperty(e, "signal", {
                      enumerable: !0,
                      get: () => (
                        t.signal.aborted
                          ? (r = !0)
                          : t.signal.addEventListener("abort", () => {
                              r = !0;
                            }),
                        t.signal
                      ),
                    });
                  },
                  c = I(t.options, t.fetchOptions),
                  h = async (e, s, i) => {
                    if (r) return Promise.reject();
                    if (null == s && e.pages.length) return Promise.resolve(e);
                    let n = (() => {
                        let e = {
                          client: t.client,
                          queryKey: t.queryKey,
                          pageParam: s,
                          direction: i ? "backward" : "forward",
                          meta: t.options.meta,
                        };
                        return u(e), e;
                      })(),
                      o = await c(n),
                      { maxPages: a } = t.options,
                      l = i ? P : A;
                    return {
                      pages: l(e.pages, o, a),
                      pageParams: l(e.pageParams, s, a),
                    };
                  };
                if (i && n.length) {
                  let e = "backward" === i,
                    t = { pages: n, pageParams: o },
                    r = (
                      e
                        ? function (e, { pages: t, pageParams: r }) {
                            return t.length > 0
                              ? e.getPreviousPageParam?.(t[0], t, r[0], r)
                              : void 0;
                          }
                        : B
                    )(s, t);
                  a = await h(t, r, e);
                } else {
                  let t = e ?? n.length;
                  do {
                    let e = 0 === l ? (o[0] ?? s.initialPageParam) : B(s, a);
                    if (l > 0 && null == e) break;
                    (a = await h(a, e)), l++;
                  } while (l < t);
                }
                return a;
              };
            t.options.persister
              ? (t.fetchFn = () =>
                  t.options.persister?.(
                    u,
                    {
                      client: t.client,
                      queryKey: t.queryKey,
                      meta: t.options.meta,
                      signal: t.signal,
                    },
                    r,
                  ))
              : (t.fetchFn = u);
          },
        };
      }
      function B(e, { pages: t, pageParams: r }) {
        let s = t.length - 1;
        return t.length > 0 ? e.getNextPageParam(t[s], t, r[s], r) : void 0;
      }
      let Y = new (class {
        #x;
        #y;
        #d;
        #w;
        #C;
        #E;
        #O;
        #T;
        constructor(e = {}) {
          (this.#x = e.queryCache || new X()),
            (this.#y = e.mutationCache || new G()),
            (this.#d = e.defaultOptions || {}),
            (this.#w = new Map()),
            (this.#C = new Map()),
            (this.#E = 0);
        }
        mount() {
          this.#E++,
            1 === this.#E &&
              ((this.#O = N.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#x.onFocus());
              })),
              (this.#T = R.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#x.onOnline());
              })));
        }
        unmount() {
          this.#E--,
            0 === this.#E &&
              (this.#O?.(),
              (this.#O = void 0),
              this.#T?.(),
              (this.#T = void 0));
        }
        isFetching(e) {
          return this.#x.findAll({ ...e, fetchStatus: "fetching" }).length;
        }
        isMutating(e) {
          return this.#y.findAll({ ...e, status: "pending" }).length;
        }
        getQueryData(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#x.get(t.queryHash)?.state.data;
        }
        ensureQueryData(e) {
          let t = this.defaultQueryOptions(e),
            r = this.#x.build(this, t),
            s = r.state.data;
          return void 0 === s
            ? this.fetchQuery(e)
            : (e.revalidateIfStale &&
                r.isStaleByTime(y(t.staleTime, r)) &&
                this.prefetchQuery(t),
              Promise.resolve(s));
        }
        getQueriesData(e) {
          return this.#x
            .findAll(e)
            .map(({ queryKey: e, state: t }) => [e, t.data]);
        }
        setQueryData(e, t, r) {
          let s = this.defaultQueryOptions({ queryKey: e }),
            i = this.#x.get(s.queryHash),
            n = i?.state.data,
            o = "function" == typeof t ? t(n) : t;
          if (void 0 !== o)
            return this.#x.build(this, s).setData(o, { ...r, manual: !0 });
        }
        setQueriesData(e, t, r) {
          return j.batch(() =>
            this.#x
              .findAll(e)
              .map(({ queryKey: e }) => [e, this.setQueryData(e, t, r)]),
          );
        }
        getQueryState(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#x.get(t.queryHash)?.state;
        }
        removeQueries(e) {
          let t = this.#x;
          j.batch(() => {
            t.findAll(e).forEach((e) => {
              t.remove(e);
            });
          });
        }
        resetQueries(e, t) {
          let r = this.#x;
          return j.batch(
            () => (
              r.findAll(e).forEach((e) => {
                e.reset();
              }),
              this.refetchQueries({ type: "active", ...e }, t)
            ),
          );
        }
        cancelQueries(e, t = {}) {
          let r = { revert: !0, ...t };
          return Promise.all(
            j.batch(() => this.#x.findAll(e).map((e) => e.cancel(r))),
          )
            .then(g)
            .catch(g);
        }
        invalidateQueries(e, t = {}) {
          return j.batch(() =>
            (this.#x.findAll(e).forEach((e) => {
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
          let r = { ...t, cancelRefetch: t.cancelRefetch ?? !0 };
          return Promise.all(
            j.batch(() =>
              this.#x
                .findAll(e)
                .filter((e) => !e.isDisabled() && !e.isStatic())
                .map((e) => {
                  let t = e.fetch(void 0, r);
                  return (
                    r.throwOnError || (t = t.catch(g)),
                    "paused" === e.state.fetchStatus ? Promise.resolve() : t
                  );
                }),
            ),
          ).then(g);
        }
        fetchQuery(e) {
          let t = this.defaultQueryOptions(e);
          void 0 === t.retry && (t.retry = !1);
          let r = this.#x.build(this, t);
          return r.isStaleByTime(y(t.staleTime, r))
            ? r.fetch(t)
            : Promise.resolve(r.state.data);
        }
        prefetchQuery(e) {
          return this.fetchQuery(e).then(g).catch(g);
        }
        fetchInfiniteQuery(e) {
          return (e.behavior = J(e.pages)), this.fetchQuery(e);
        }
        prefetchInfiniteQuery(e) {
          return this.fetchInfiniteQuery(e).then(g).catch(g);
        }
        ensureInfiniteQueryData(e) {
          return (e.behavior = J(e.pages)), this.ensureQueryData(e);
        }
        resumePausedMutations() {
          return R.isOnline()
            ? this.#y.resumePausedMutations()
            : Promise.resolve();
        }
        getQueryCache() {
          return this.#x;
        }
        getMutationCache() {
          return this.#y;
        }
        getDefaultOptions() {
          return this.#d;
        }
        setDefaultOptions(e) {
          this.#d = e;
        }
        setQueryDefaults(e, t) {
          this.#w.set(x(e), { queryKey: e, defaultOptions: t });
        }
        getQueryDefaults(e) {
          let t = [...this.#w.values()],
            r = {};
          return (
            t.forEach((t) => {
              w(e, t.queryKey) && Object.assign(r, t.defaultOptions);
            }),
            r
          );
        }
        setMutationDefaults(e, t) {
          this.#C.set(x(e), { mutationKey: e, defaultOptions: t });
        }
        getMutationDefaults(e) {
          let t = [...this.#C.values()],
            r = {};
          return (
            t.forEach((t) => {
              w(e, t.mutationKey) && Object.assign(r, t.defaultOptions);
            }),
            r
          );
        }
        defaultQueryOptions(e) {
          if (e._defaulted) return e;
          let t = {
            ...this.#d.queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0,
          };
          return (
            t.queryHash || (t.queryHash = S(t.queryKey, t)),
            void 0 === t.refetchOnReconnect &&
              (t.refetchOnReconnect = "always" !== t.networkMode),
            void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
            !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
            t.queryFn === D && (t.enabled = !1),
            t
          );
        }
        defaultMutationOptions(e) {
          return e?._defaulted
            ? e
            : {
                ...this.#d.mutations,
                ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
                ...e,
                _defaulted: !0,
              };
        }
        clear() {
          this.#x.clear(), this.#y.clear();
        }
      })();
      var V = r(1743),
        Z = r(53554),
        $ = r(69344),
        ee = r(78236),
        et = r(53856);
      !(function (e) {
        (e.mouse = "mouse"), (e.touch = "touch"), (e.keyboard = "keyboard");
      })(s || (s = {}));
      class er {
        get delay() {
          var e;
          return null != (e = this.args.delay) ? e : 0;
        }
        get scrollAngleRanges() {
          return this.args.scrollAngleRanges;
        }
        get getDropTargetElementsAtPoint() {
          return this.args.getDropTargetElementsAtPoint;
        }
        get ignoreContextMenu() {
          var e;
          return null != (e = this.args.ignoreContextMenu) && e;
        }
        get enableHoverOutsideTarget() {
          var e;
          return null != (e = this.args.enableHoverOutsideTarget) && e;
        }
        get enableKeyboardEvents() {
          var e;
          return null != (e = this.args.enableKeyboardEvents) && e;
        }
        get enableMouseEvents() {
          var e;
          return null != (e = this.args.enableMouseEvents) && e;
        }
        get enableTouchEvents() {
          var e;
          return null == (e = this.args.enableTouchEvents) || e;
        }
        get touchSlop() {
          return this.args.touchSlop || 0;
        }
        get delayTouchStart() {
          var e, t, r, s;
          return null !=
            (s =
              null != (r = null == (e = this.args) ? void 0 : e.delayTouchStart)
                ? r
                : null == (t = this.args)
                  ? void 0
                  : t.delay)
            ? s
            : 0;
        }
        get delayMouseStart() {
          var e, t, r, s;
          return null !=
            (s =
              null != (r = null == (e = this.args) ? void 0 : e.delayMouseStart)
                ? r
                : null == (t = this.args)
                  ? void 0
                  : t.delay)
            ? s
            : 0;
        }
        get window() {
          return this.context && this.context.window
            ? this.context.window
            : "undefined" != typeof window
              ? window
              : void 0;
        }
        get document() {
          var e;
          return (null == (e = this.context) ? void 0 : e.document)
            ? this.context.document
            : this.window
              ? this.window.document
              : void 0;
        }
        get rootElement() {
          var e;
          return (
            (null == (e = this.args) ? void 0 : e.rootElement) || this.document
          );
        }
        constructor(e, t) {
          (this.args = e), (this.context = t);
        }
      }
      let es = { Left: 1 },
        ei = { Left: 0 };
      function en(e) {
        return void 0 === e.button || e.button === ei.Left;
      }
      function eo(e) {
        return !!e.targetTouches;
      }
      function ea(e, t) {
        return eo(e)
          ? 1 === e.targetTouches.length
            ? ea(e.targetTouches[0])
            : t && 1 === e.touches.length && e.touches[0].target === t.target
              ? ea(e.touches[0])
              : void 0
          : { x: e.clientX, y: e.clientY };
      }
      let el = (() => {
          let e = !1;
          try {
            addEventListener(
              "test",
              () => {},
              Object.defineProperty({}, "passive", {
                get: () => ((e = !0), !0),
              }),
            );
          } catch (e) {}
          return e;
        })(),
        eu = {
          [s.mouse]: {
            start: "mousedown",
            move: "mousemove",
            end: "mouseup",
            contextmenu: "contextmenu",
          },
          [s.touch]: {
            start: "touchstart",
            move: "touchmove",
            end: "touchend",
          },
          [s.keyboard]: { keydown: "keydown" },
        };
      class ec {
        profile() {
          var e;
          return {
            sourceNodes: this.sourceNodes.size,
            sourcePreviewNodes: this.sourcePreviewNodes.size,
            sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
            targetNodes: this.targetNodes.size,
            dragOverTargetIds:
              (null == (e = this.dragOverTargetIds) ? void 0 : e.length) || 0,
          };
        }
        get document() {
          return this.options.document;
        }
        setup() {
          let e = this.options.rootElement;
          e &&
            ((0, et.V)(
              !ec.isSetUp,
              "Cannot have two Touch backends at the same time.",
            ),
            (ec.isSetUp = !0),
            this.addEventListener(e, "start", this.getTopMoveStartHandler()),
            this.addEventListener(
              e,
              "start",
              this.handleTopMoveStartCapture,
              !0,
            ),
            this.addEventListener(e, "move", this.handleTopMove),
            this.addEventListener(e, "move", this.handleTopMoveCapture, !0),
            this.addEventListener(e, "end", this.handleTopMoveEndCapture, !0),
            this.options.enableMouseEvents &&
              !this.options.ignoreContextMenu &&
              this.addEventListener(
                e,
                "contextmenu",
                this.handleTopMoveEndCapture,
              ),
            this.options.enableKeyboardEvents &&
              this.addEventListener(
                e,
                "keydown",
                this.handleCancelOnEscape,
                !0,
              ));
        }
        teardown() {
          let e = this.options.rootElement;
          e &&
            ((ec.isSetUp = !1),
            (this._mouseClientOffset = {}),
            this.removeEventListener(
              e,
              "start",
              this.handleTopMoveStartCapture,
              !0,
            ),
            this.removeEventListener(e, "start", this.handleTopMoveStart),
            this.removeEventListener(e, "move", this.handleTopMoveCapture, !0),
            this.removeEventListener(e, "move", this.handleTopMove),
            this.removeEventListener(
              e,
              "end",
              this.handleTopMoveEndCapture,
              !0,
            ),
            this.options.enableMouseEvents &&
              !this.options.ignoreContextMenu &&
              this.removeEventListener(
                e,
                "contextmenu",
                this.handleTopMoveEndCapture,
              ),
            this.options.enableKeyboardEvents &&
              this.removeEventListener(
                e,
                "keydown",
                this.handleCancelOnEscape,
                !0,
              ),
            this.uninstallSourceNodeRemovalObserver());
        }
        addEventListener(e, t, r, s = !1) {
          let i = el ? { capture: s, passive: !1 } : s;
          this.listenerTypes.forEach(function (s) {
            let n = eu[s][t];
            n && e.addEventListener(n, r, i);
          });
        }
        removeEventListener(e, t, r, s = !1) {
          let i = el ? { capture: s, passive: !1 } : s;
          this.listenerTypes.forEach(function (s) {
            let n = eu[s][t];
            n && e.removeEventListener(n, r, i);
          });
        }
        connectDragSource(e, t) {
          let r = this.handleMoveStart.bind(this, e);
          return (
            this.sourceNodes.set(e, t),
            this.addEventListener(t, "start", r),
            () => {
              this.sourceNodes.delete(e),
                this.removeEventListener(t, "start", r);
            }
          );
        }
        connectDragPreview(e, t, r) {
          return (
            this.sourcePreviewNodeOptions.set(e, r),
            this.sourcePreviewNodes.set(e, t),
            () => {
              this.sourcePreviewNodes.delete(e),
                this.sourcePreviewNodeOptions.delete(e);
            }
          );
        }
        connectDropTarget(e, t) {
          let r = this.options.rootElement;
          if (!this.document || !r) return () => {};
          let s = (s) => {
            let i;
            if (!this.document || !r || !this.monitor.isDragging()) return;
            switch (s.type) {
              case eu.mouse.move:
                i = { x: s.clientX, y: s.clientY };
                break;
              case eu.touch.move:
                var n, o;
                i = {
                  x: (null == (n = s.touches[0]) ? void 0 : n.clientX) || 0,
                  y: (null == (o = s.touches[0]) ? void 0 : o.clientY) || 0,
                };
            }
            let a =
                null != i ? this.document.elementFromPoint(i.x, i.y) : void 0,
              l = a && t.contains(a);
            if (a === t || l) return this.handleMove(s, e);
          };
          return (
            this.addEventListener(this.document.body, "move", s),
            this.targetNodes.set(e, t),
            () => {
              this.document &&
                (this.targetNodes.delete(e),
                this.removeEventListener(this.document.body, "move", s));
            }
          );
        }
        getTopMoveStartHandler() {
          return this.options.delayTouchStart || this.options.delayMouseStart
            ? this.handleTopMoveStartDelay
            : this.handleTopMoveStart;
        }
        installSourceNodeRemovalObserver(e) {
          this.uninstallSourceNodeRemovalObserver(),
            (this.draggedSourceNode = e),
            (this.draggedSourceNodeRemovalObserver = new MutationObserver(
              () => {
                e &&
                  !e.parentElement &&
                  (this.resurrectSourceNode(),
                  this.uninstallSourceNodeRemovalObserver());
              },
            )),
            e &&
              e.parentElement &&
              this.draggedSourceNodeRemovalObserver.observe(e.parentElement, {
                childList: !0,
              });
        }
        resurrectSourceNode() {
          this.document &&
            this.draggedSourceNode &&
            ((this.draggedSourceNode.style.display = "none"),
            this.draggedSourceNode.removeAttribute("data-reactid"),
            this.document.body.appendChild(this.draggedSourceNode));
        }
        uninstallSourceNodeRemovalObserver() {
          this.draggedSourceNodeRemovalObserver &&
            this.draggedSourceNodeRemovalObserver.disconnect(),
            (this.draggedSourceNodeRemovalObserver = void 0),
            (this.draggedSourceNode = void 0);
        }
        constructor(e, t, r) {
          (this.getSourceClientOffset = (e) => {
            let t = this.sourceNodes.get(e);
            return (
              t &&
              (function (e) {
                let t = 1 === e.nodeType ? e : e.parentElement;
                if (!t) return;
                let { top: r, left: s } = t.getBoundingClientRect();
                return { x: s, y: r };
              })(t)
            );
          }),
            (this.handleTopMoveStartCapture = (e) => {
              en(e) && (this.moveStartSourceIds = []);
            }),
            (this.handleMoveStart = (e) => {
              Array.isArray(this.moveStartSourceIds) &&
                this.moveStartSourceIds.unshift(e);
            }),
            (this.handleTopMoveStart = (e) => {
              if (!en(e)) return;
              let t = ea(e);
              t &&
                (eo(e) && (this.lastTargetTouchFallback = e.targetTouches[0]),
                (this._mouseClientOffset = t)),
                (this.waitingForDelay = !1);
            }),
            (this.handleTopMoveStartDelay = (e) => {
              if (!en(e)) return;
              let t =
                e.type === eu.touch.start
                  ? this.options.delayTouchStart
                  : this.options.delayMouseStart;
              (this.timeout = setTimeout(
                this.handleTopMoveStart.bind(this, e),
                t,
              )),
                (this.waitingForDelay = !0);
            }),
            (this.handleTopMoveCapture = () => {
              this.dragOverTargetIds = [];
            }),
            (this.handleMove = (e, t) => {
              this.dragOverTargetIds && this.dragOverTargetIds.unshift(t);
            }),
            (this.handleTopMove = (e) => {
              var t, r;
              if (
                (this.timeout && clearTimeout(this.timeout),
                !this.document || this.waitingForDelay)
              )
                return;
              let { moveStartSourceIds: s, dragOverTargetIds: i } = this,
                n = this.options.enableHoverOutsideTarget,
                o = ea(e, this.lastTargetTouchFallback);
              if (!o) return;
              if (
                this._isScrolling ||
                (!this.monitor.isDragging() &&
                  (function (e, t, r, s, i) {
                    if (!i) return !1;
                    let n = (180 * Math.atan2(s - t, r - e)) / Math.PI + 180;
                    for (let e = 0; e < i.length; ++e) {
                      let t = i[e];
                      if (
                        t &&
                        (null == t.start || n >= t.start) &&
                        (null == t.end || n <= t.end)
                      )
                        return !0;
                    }
                    return !1;
                  })(
                    this._mouseClientOffset.x || 0,
                    this._mouseClientOffset.y || 0,
                    o.x,
                    o.y,
                    this.options.scrollAngleRanges,
                  ))
              ) {
                this._isScrolling = !0;
                return;
              }
              if (
                (!this.monitor.isDragging() &&
                  this._mouseClientOffset.hasOwnProperty("x") &&
                  s &&
                  ((t = this._mouseClientOffset.x || 0),
                  (r = this._mouseClientOffset.y || 0),
                  Math.sqrt(
                    Math.pow(Math.abs(o.x - t), 2) +
                      Math.pow(Math.abs(o.y - r), 2),
                  ) > (this.options.touchSlop ? this.options.touchSlop : 0)) &&
                  ((this.moveStartSourceIds = void 0),
                  this.actions.beginDrag(s, {
                    clientOffset: this._mouseClientOffset,
                    getSourceClientOffset: this.getSourceClientOffset,
                    publishSource: !1,
                  })),
                !this.monitor.isDragging())
              )
                return;
              let a = this.sourceNodes.get(this.monitor.getSourceId());
              this.installSourceNodeRemovalObserver(a),
                this.actions.publishDragSource(),
                e.cancelable && e.preventDefault();
              let l = (i || [])
                  .map((e) => this.targetNodes.get(e))
                  .filter((e) => !!e),
                u = this.options.getDropTargetElementsAtPoint
                  ? this.options.getDropTargetElementsAtPoint(o.x, o.y, l)
                  : this.document.elementsFromPoint(o.x, o.y),
                c = [];
              for (let e in u) {
                if (!u.hasOwnProperty(e)) continue;
                let t = u[e];
                for (null != t && c.push(t); t; )
                  (t = t.parentElement) && -1 === c.indexOf(t) && c.push(t);
              }
              let h = c
                .filter((e) => l.indexOf(e) > -1)
                .map((e) => this._getDropTargetId(e))
                .filter((e) => !!e)
                .filter((e, t, r) => r.indexOf(e) === t);
              if (n)
                for (let e in this.targetNodes) {
                  let t = this.targetNodes.get(e);
                  if (a && t && t.contains(a) && -1 === h.indexOf(e)) {
                    h.unshift(e);
                    break;
                  }
                }
              h.reverse(), this.actions.hover(h, { clientOffset: o });
            }),
            (this._getDropTargetId = (e) => {
              let t = this.targetNodes.keys(),
                r = t.next();
              for (; !1 === r.done; ) {
                let s = r.value;
                if (e === this.targetNodes.get(s)) return s;
                r = t.next();
              }
            }),
            (this.handleTopMoveEndCapture = (e) => {
              if (
                ((this._isScrolling = !1),
                (this.lastTargetTouchFallback = void 0),
                (function (e) {
                  return void 0 === e.buttons || (e.buttons & es.Left) == 0;
                })(e))
              ) {
                if (!this.monitor.isDragging() || this.monitor.didDrop()) {
                  this.moveStartSourceIds = void 0;
                  return;
                }
                e.cancelable && e.preventDefault(),
                  (this._mouseClientOffset = {}),
                  this.uninstallSourceNodeRemovalObserver(),
                  this.actions.drop(),
                  this.actions.endDrag();
              }
            }),
            (this.handleCancelOnEscape = (e) => {
              "Escape" === e.key &&
                this.monitor.isDragging() &&
                ((this._mouseClientOffset = {}),
                this.uninstallSourceNodeRemovalObserver(),
                this.actions.endDrag());
            }),
            (this.options = new er(r, t)),
            (this.actions = e.getActions()),
            (this.monitor = e.getMonitor()),
            (this.sourceNodes = new Map()),
            (this.sourcePreviewNodes = new Map()),
            (this.sourcePreviewNodeOptions = new Map()),
            (this.targetNodes = new Map()),
            (this.listenerTypes = []),
            (this._mouseClientOffset = {}),
            (this._isScrolling = !1),
            this.options.enableMouseEvents && this.listenerTypes.push(s.mouse),
            this.options.enableTouchEvents && this.listenerTypes.push(s.touch),
            this.options.enableKeyboardEvents &&
              this.listenerTypes.push(s.keyboard);
        }
      }
      let eh = function (e, t = {}, r = {}) {
          return new ec(e, t, r);
        },
        ed = () => {
          if (!("ontouchstart" in window || navigator.maxTouchPoints > 0))
            return !1;
          let e =
              window.matchMedia("(pointer: fine)").matches ||
              window.matchMedia("(any-pointer: fine)").matches,
            t =
              window.matchMedia("(hover: hover)").matches ||
              window.matchMedia("(any-hover: hover)").matches;
          return !e && !t;
        };
      function ep(e) {
        let { children: t } = e,
          r = ed();
        return (0, i.jsx)($.Q, {
          backend: r ? eh : ee.t2,
          options: r
            ? {
                enableMouseEvents: !0,
                enableTouchEvents: !0,
                enableKeyboardEvents: !0,
                delayTouchStart: 120,
                touchSlop: 8,
              }
            : void 0,
          children: t,
        });
      }
      var ef = r(2671);
      let em = "cartItems";
      async function eg() {
        let e = [],
          t = 0,
          r = 0,
          s = 0,
          i = 0,
          n = 0;
        try {
          let o = await (0, ef.Jt)("cartItems");
          Array.isArray(o)
            ? ((t = o.length),
              o.forEach((t, r) => {
                t.screenshotDataUrl && "string" == typeof t.screenshotDataUrl
                  ? (s++, (n += t.screenshotDataUrl.length))
                  : (i++,
                    e.push(
                      "Cart item "
                        .concat(r, " (")
                        .concat(t.id || "no-id", ") missing screenshot"),
                    ));
              }))
            : e.push("No cart items found in IndexedDB");
          let a = await (0, ef.Jt)("cartScreenshots");
          a && "object" == typeof a
            ? (r = Object.keys(a).length)
            : e.push("No screenshot map found in IndexedDB"),
            localStorage.getItem("cartItems") ||
              e.push("No localStorage fallback found");
        } catch (t) {
          e.push("Error accessing storage: ".concat(t));
        }
        return {
          cartItemsCount: t,
          screenshotsCount: r,
          itemsWithScreenshots: s,
          itemsWithoutScreenshots: i,
          totalScreenshotSize: n,
          issues: e,
        };
      }
      async function ey() {
        let e = await eg();
        console.group("\uD83D\uDED2 Cart Debug Information"),
          console.log("\uD83D\uDCCA Cart Items:", e.cartItemsCount),
          console.log("\uD83D\uDDBC️ Screenshots in Map:", e.screenshotsCount),
          console.log("✅ Items with Screenshots:", e.itemsWithScreenshots),
          console.log(
            "❌ Items without Screenshots:",
            e.itemsWithoutScreenshots,
          ),
          console.log(
            "\uD83D\uDCBE Total Screenshot Size:",
            "".concat((e.totalScreenshotSize / 1024 / 1024).toFixed(2), " MB"),
          ),
          e.issues.length > 0
            ? (console.warn("⚠️ Issues Found:"),
              e.issues.forEach((e) => console.warn("  - ".concat(e))))
            : console.log("✅ No issues detected"),
          console.groupEnd();
      }
      async function ev() {
        try {
          let [e, t] = await Promise.all([
            (0, ef.Jt)("cartItems"),
            (0, ef.Jt)("cartScreenshots"),
          ]);
          if (e && Array.isArray(e))
            return (
              window.dispatchEvent(
                new StorageEvent("storage", {
                  key: "cartItems",
                  newValue: JSON.stringify(e),
                }),
              ),
              console.log("\uD83D\uDD04 Forced cart reload triggered"),
              !0
            );
          return !1;
        } catch (e) {
          return console.error("Failed to force reload cart:", e), !1;
        }
      }
      async function eb() {
        try {
          let { del: e } = await Promise.resolve().then(r.bind(r, 2671));
          await Promise.all([e("cartItems"), e("cartScreenshots")]),
            localStorage.removeItem("cartItems"),
            console.log("\uD83D\uDDD1️ All cart data cleared");
        } catch (e) {
          console.error("Failed to clear cart data:", e);
        }
      }
      window.cartDebug = { debug: eg, log: ey, reload: ev, clear: eb };
      var eS = r(32069),
        ex = r(65230);
      let ew = (e) =>
        e.map((e) => {
          let { screenshotDataUrl: t, ...r } = e;
          return r;
        });
      function eC(e) {
        let { children: t } = e;
        return (0, i.jsx)(a.SessionProvider, {
          children: (0, i.jsx)(o.Kq, {
            store: c.store,
            children: (0, i.jsx)(u, {
              client: Y,
              children: (0, i.jsx)(ep, {
                children: (0, i.jsx)(eE, { children: t }),
              }),
            }),
          }),
        });
      }
      function eE(e) {
        var t, r, s, o;
        let { children: l } = e,
          { data: u } = (0, a.useSession)();
        return (
          (0, n.useEffect)(() => {
            (window.__store = c.store),
              localStorage.removeItem("state"),
              (async () => {
                try {
                  let e = await fetch("/api/pricing-constants", {
                    cache: "no-store",
                  });
                  if (!e.ok)
                    throw Error("Pricing request failed: ".concat(e.status));
                  let t = await e.json();
                  (0, ex.kQ)(t),
                    c.store.dispatch((0, h.recalculateAllPrices)()),
                    console.log(
                      "[PRICING] Dynamic pricing loaded and cart totals recalculated",
                    );
                } catch (e) {
                  console.error(
                    "[PRICING] Failed to load dynamic pricing; using built-in defaults",
                    e,
                  );
                }
              })(),
              (window.recoverCartScreenshots = async () => {
                try {
                  let [e, t] = await Promise.all([
                    (0, ef.Jt)("cartItems"),
                    (0, ef.Jt)("cartScreenshots"),
                  ]);
                  if (e && t) {
                    let r = e.map((e) => ({
                      ...e,
                      screenshotDataUrl: t[e.id] || e.screenshotDataUrl,
                    }));
                    return (
                      c.store.dispatch((0, h.setCartItems)({ items: r })),
                      console.log("\uD83D\uDD04 Cart screenshots recovered!"),
                      !0
                    );
                  }
                  return !1;
                } catch (e) {
                  return console.error("Failed to recover screenshots:", e), !1;
                }
              }),
              (async () => {
                try {
                  let [e, t, r] = await Promise.all([
                      (0, ef.Jt)("cartItems"),
                      (0, eS.bf)().catch(() => ({})),
                      (0, ef.Jt)("cartScreenshots").catch(() => ({})),
                    ]),
                    s = e,
                    i = {
                      ...(r && "object" == typeof r ? r : {}),
                      ...(t && "object" == typeof t ? t : {}),
                    };
                  if (!s) {
                    let e = localStorage.getItem("cartItems");
                    e
                      ? ((s = JSON.parse(e)),
                        await (0, ef.hZ)("cartItems", ew(s)),
                        console.log(
                          "[CART] Migrated cart items from localStorage to IndexedDB",
                        ))
                      : (s = (function () {
                          try {
                            let e = localStorage.getItem(em);
                            if (!e) return [];
                            let t = JSON.parse(e);
                            if (!Array.isArray(t))
                              return (
                                console.error(
                                  "Invalid cart data format in localStorage",
                                ),
                                []
                              );
                            return t.map((e) => ({
                              ...e,
                              id: e.id || "",
                              cartData: e.cartData || {},
                              dropped: e.dropped || [],
                              quantity: Math.max(1, e.quantity || 1),
                              totalPrice: e.totalPrice || 0,
                              orderName: e.orderName || "",
                              customProductName: e.customProductName || "",
                              productSequence: e.productSequence || "",
                              createdAt:
                                e.createdAt || new Date().toISOString(),
                              screenshotDataUrl: void 0,
                            }));
                          } catch (e) {
                            return (
                              console.error(
                                "Failed to load cart items from localStorage:",
                                e,
                              ),
                              []
                            );
                          }
                        })());
                  }
                  if (s && Array.isArray(s)) {
                    let e = s.map((e) => {
                      let t;
                      (null == e ? void 0 : e.id) && i[e.id]
                        ? ((t = i[e.id]),
                          console.log(
                            "[CART] ✅ Restored screenshot from storage for item ".concat(
                              e.id,
                            ),
                          ))
                        : "string" ==
                              typeof (null == e
                                ? void 0
                                : e.screenshotDataUrl) &&
                            e.screenshotDataUrl.length > 0
                          ? ((t = e.screenshotDataUrl),
                            console.log(
                              "[CART] ✅ Using direct screenshot for item ".concat(
                                e.id,
                              ),
                            ))
                          : console.log(
                              "[CART] ⚠️ No screenshot found for item ".concat(
                                e.id,
                              ),
                            );
                      let r = {
                        ...e,
                        orderName: e.orderName || "",
                        customProductName: e.customProductName || "",
                        productSequence: e.productSequence || "",
                        createdAt: e.createdAt || new Date().toISOString(),
                        screenshotDataUrl: t,
                      };
                      if (!r.productSequence && r.orderName) {
                        let t = s
                          .filter((e) => (e.orderName || "") === r.orderName)
                          .findIndex((t) => t.id === e.id);
                        t >= 0 &&
                          (r.productSequence = ""
                            .concat(r.orderName, "_")
                            .concat(String(t + 1).padStart(2, "0")));
                      }
                      return r;
                    });
                    console.log(
                      "[CART] \uD83D\uDCE6 Loaded "
                        .concat(e.length, " cart items, ")
                        .concat(
                          Object.keys(i).length,
                          " screenshots available",
                        ),
                    ),
                      c.store.dispatch((0, h.setCartItems)({ items: e })),
                      c.store.dispatch((0, h.recalculateAllPrices)()),
                      Object.keys(i).length > 0 &&
                        (0, eS.X5)(i).catch((e) =>
                          console.error(
                            "Failed to migrate screenshots to new system:",
                            e,
                          ),
                        );
                  }
                } catch (e) {
                  console.error("Failed to load cart items:", e);
                }
              })();
            let e = localStorage.getItem("userIcons");
            if (e)
              try {
                let t = JSON.parse(e);
                c.store.dispatch((0, d.Kf)(t));
              } catch (e) {}
            let t = localStorage.getItem("brand_logo_url"),
              r = localStorage.getItem("brand_pdf_logo_url");
            if (t)
              try {
                c.store.dispatch((0, V.bX)({ url: t }));
              } catch (e) {}
            if (r)
              try {
                c.store.dispatch((0, V.fl)({ url: r }));
              } catch (e) {}
            return c.store.subscribe(() => {
              let e = c.store.getState();
              try {
                let t = e.cartData.cartItems;
                (0, ef.hZ)("cartItems", ew(t)).catch((e) =>
                  console.error("IndexedDB save failed", e),
                );
                let r = t.reduce(
                  (e, t) => (
                    t.id &&
                      "string" == typeof t.screenshotDataUrl &&
                      t.screenshotDataUrl.startsWith("data:image") &&
                      (e[t.id] = t.screenshotDataUrl),
                    e
                  ),
                  {},
                );
                Object.keys(r).length > 0 &&
                  ((0, eS.X5)(r).catch((e) =>
                    console.error("New screenshot system save failed:", e),
                  ),
                  (0, ef.hZ)("cartScreenshots", r).catch((e) =>
                    console.error("Legacy screenshot save failed", e),
                  ),
                  console.log(
                    "[CART] \uD83D\uDCBE Saved ".concat(
                      Object.keys(r).length,
                      " screenshots to both systems",
                    ),
                  )),
                  (function (e) {
                    try {
                      let t = e.map((e) => {
                          let { screenshotDataUrl: t, ...r } = e;
                          return r;
                        }),
                        r = JSON.stringify(t);
                      r.length > 4194304 &&
                        console.warn(
                          "Cart data too large (".concat(
                            r.length,
                            " bytes). ",
                          ) +
                            "Consider reducing cart size or clearing old items.",
                        ),
                        localStorage.setItem(em, r);
                    } catch (e) {
                      return (
                        console.error(
                          "Failed to save cart items to localStorage:",
                          e,
                        ),
                        e instanceof DOMException &&
                          "QuotaExceededError" === e.name &&
                          console.error(
                            "localStorage quota exceeded. Cart data NOT deleted - it remains in memory for this session.",
                          ),
                        !1
                      );
                    }
                  })(t);
              } catch (e) {
                console.error("Failed to persist cart items:", e);
              }
              try {
                localStorage.setItem(
                  "userIcons",
                  JSON.stringify(e.userIcons.icons),
                );
              } catch (e) {}
              try {
                let t = e.extraSlice.logoUrl,
                  r = e.extraSlice.pdfLogoUrl;
                t &&
                  "/Image/logoVerni.png" !== t &&
                  localStorage.setItem("brand_logo_url", t),
                  r &&
                    "/Image/logoVerni.png" !== r &&
                    localStorage.setItem("brand_pdf_logo_url", r);
              } catch (e) {}
            });
          }, []),
          (0, n.useEffect)(() => {
            var e, t, r, s;
            if (
              (console.log("\uD83D\uDD0D SESSION DEBUG:", {
                hasSession: !!u,
                hasUser: !!(null == u ? void 0 : u.user),
                userId: null == u || null == (e = u.user) ? void 0 : e.id,
                userEmail: null == u || null == (t = u.user) ? void 0 : t.email,
                userRole: null == u || null == (r = u.user) ? void 0 : r.role,
                isPremium:
                  null == u || null == (s = u.user) ? void 0 : s.isPremium,
                sessionKeys: u ? Object.keys(u) : [],
                userKeys: (null == u ? void 0 : u.user)
                  ? Object.keys(u.user)
                  : [],
              }),
              !(null == u ? void 0 : u.user))
            )
              return void console.log(
                "\uD83D\uDEA8 NO SESSION OR USER - CANNOT SET PREMIUM STATUS",
              );
            let i = !!u.user.isPremium;
            console.log("\uD83D\uDEA8 SETTING PREMIUM STATUS:", i),
              c.store.dispatch((0, h.setPremiumStatus)(i)),
              i
                ? (console.log(
                    "\uD83D\uDEA8 PREMIUM USER DETECTED - FORCING FREE ICONS",
                  ),
                  c.store.dispatch((0, h.setFreeIcons)(!0)))
                : (console.log(
                    "\uD83D\uDEA8 NON-PREMIUM USER - SETTING PAID ICONS",
                  ),
                  c.store.dispatch((0, h.setFreeIcons)(!1))),
              c.store.dispatch((0, h.recalculateAllPrices)()),
              console.log("\uD83D\uDEA8 CART STATE UPDATED FOR USER:", {
                isPremium: i,
                email: u.user.email,
                role: u.user.role,
              });
          }, [
            null == u || null == (t = u.user) ? void 0 : t.id,
            null == u || null == (r = u.user) ? void 0 : r.isPremium,
          ]),
          (0, n.useEffect)(() => {
            var e, t, r;
            if (
              (null == u || null == (e = u.user) ? void 0 : e.role) ===
                "Admin" ||
              (null == u || null == (t = u.user) ? void 0 : t.role) ===
                "SuperAdmin" ||
              (null == u || null == (r = u.user) ? void 0 : r.isPremium)
            )
              return;
            let s = (e) => {
              e.preventDefault(),
                fetch("/api/logs", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ action: "screenshot_attempt" }),
                }).catch(() => {});
            };
            return (
              window.addEventListener("contextmenu", s),
              () => {
                window.removeEventListener("contextmenu", s);
              }
            );
          }, [
            null == u || null == (s = u.user) ? void 0 : s.role,
            null == u || null == (o = u.user) ? void 0 : o.isPremium,
          ]),
          (0, n.useEffect)(() => {
            var e;
            let t =
              null == u || null == (e = u.user) ? void 0 : e.brandingTitle;
            t && "undefined" != typeof document && (document.title = t);
          }, [(null == u ? void 0 : u.user) && u.user.brandingTitle]),
          (0, i.jsx)(Z._, { children: l })
        );
      }
    },
    51643: (e, t, r) => {
      "use strict";
      r.d(t, { SubscriptionExpiryProvider: () => O });
      var s = r(95155),
        i = r(12115),
        n = r(12108);
      let o = "switchcraft_usage_time",
        a = "switchcraft_last_reminder",
        l = "switchcraft_reminder_dismissed";
      var u = r(35695),
        c = r(36114),
        h = r(86220),
        d = r(99927),
        p = r(54581),
        f = r(71803),
        m = r(700),
        g = r(68534),
        y = r(16324),
        v = r(4420),
        b = r(69242),
        S = r(31418);
      let x = (0, S.A)(
          (0, s.jsx)("path", {
            d: "M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6m6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26",
          }),
          "Autorenew",
        ),
        w = (0, S.A)(
          [
            (0, s.jsx)(
              "path",
              {
                d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8",
              },
              "0",
            ),
            (0, s.jsx)(
              "path",
              { d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" },
              "1",
            ),
          ],
          "AccessTime",
        ),
        C = (0, S.A)(
          (0, s.jsx)("path", {
            d: "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
          }),
          "Star",
        );
      function E(e) {
        let { open: t, onClose: r, onRemindLater: i, expiryDate: o } = e,
          a = (0, y.A)(),
          l = (0, u.useRouter)(),
          { data: S } = (0, n.useSession)(),
          E = () => {
            i(), r();
          };
        return (0, s.jsxs)(c.A, {
          open: t,
          onClose: E,
          maxWidth: "sm",
          fullWidth: !0,
          PaperProps: {
            sx: {
              borderRadius: 4,
              overflow: "hidden",
              background: "linear-gradient(135deg, "
                .concat((0, v.X4)(a.palette.warning.main, 0.08), ", ")
                .concat((0, v.X4)(a.palette.background.paper, 0.98), ")"),
              border: "1px solid ".concat(
                (0, v.X4)(a.palette.warning.main, 0.2),
              ),
              boxShadow: "0 24px 48px ".concat(
                (0, v.X4)(a.palette.warning.main, 0.2),
              ),
            },
          },
          children: [
            (0, s.jsx)(h.A, {
              "aria-label": "close",
              onClick: E,
              sx: {
                position: "absolute",
                right: 12,
                top: 12,
                zIndex: 1,
                backgroundColor: (0, v.X4)(a.palette.background.paper, 0.8),
                "&:hover": {
                  backgroundColor: (0, v.X4)(a.palette.background.paper, 0.95),
                },
              },
              children: (0, s.jsx)(b.A, {}),
            }),
            (0, s.jsx)(d.A, {
              sx: { p: 0 },
              children: (0, s.jsxs)(p.A, {
                sx: {
                  position: "relative",
                  px: { xs: 3, sm: 5 },
                  py: { xs: 4, sm: 5 },
                },
                children: [
                  (0, s.jsx)(p.A, {
                    sx: {
                      position: "absolute",
                      inset: 0,
                      opacity: 0.15,
                      background:
                        "radial-gradient(circle at top right, ".concat(
                          (0, v.X4)(a.palette.warning.light, 0.6),
                          ", transparent 60%)",
                        ),
                    },
                  }),
                  (0, s.jsxs)(f.A, {
                    spacing: 3,
                    sx: { position: "relative" },
                    children: [
                      (0, s.jsx)(p.A, {
                        sx: {
                          width: 80,
                          height: 80,
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, "
                            .concat(
                              (0, v.X4)(a.palette.warning.main, 0.25),
                              ", ",
                            )
                            .concat(
                              (0, v.X4)(a.palette.warning.light, 0.15),
                              ")",
                            ),
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto",
                          boxShadow: "0 16px 32px ".concat(
                            (0, v.X4)(a.palette.warning.main, 0.25),
                          ),
                        },
                        children: (0, s.jsx)(C, {
                          sx: { fontSize: 42, color: a.palette.warning.main },
                        }),
                      }),
                      (0, s.jsx)(m.A, {
                        variant: "h5",
                        sx: {
                          fontWeight: 700,
                          textAlign: "center",
                          color: a.palette.text.primary,
                        },
                        children: "Your Premium Subscription Has Expired",
                      }),
                      (0, s.jsxs)(m.A, {
                        variant: "body1",
                        sx: {
                          textAlign: "center",
                          color: (0, v.X4)(a.palette.text.primary, 0.8),
                          lineHeight: 1.7,
                        },
                        children: [
                          "Your SwitchCraft+ Premium subscription expired on",
                          " ",
                          (0, s.jsx)("strong", {
                            children: ((e) => {
                              if (!e) return "recently";
                              try {
                                return new Date(e).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                });
                              } catch (e) {
                                return "recently";
                              }
                            })(o),
                          }),
                          ". Don't worry—your data is safe! However, new PDFs will use the default Varni logo instead of your custom branding.",
                        ],
                      }),
                      (0, s.jsxs)(p.A, {
                        sx: {
                          backgroundColor: (0, v.X4)(
                            a.palette.primary.main,
                            0.05,
                          ),
                          borderRadius: 2,
                          p: 2.5,
                          border: "1px solid ".concat(
                            (0, v.X4)(a.palette.primary.main, 0.1),
                          ),
                        },
                        children: [
                          (0, s.jsx)(m.A, {
                            variant: "subtitle2",
                            sx: {
                              fontWeight: 600,
                              mb: 1.5,
                              color: a.palette.primary.main,
                            },
                            children: "Renew now to restore:",
                          }),
                          (0, s.jsx)(f.A, {
                            spacing: 1,
                            children: [
                              "Custom logo on all PDFs",
                              "Professional branding",
                              "Premium features access",
                              "Priority support",
                            ].map((e, t) =>
                              (0, s.jsxs)(
                                f.A,
                                {
                                  direction: "row",
                                  spacing: 1,
                                  alignItems: "center",
                                  children: [
                                    (0, s.jsx)(p.A, {
                                      sx: {
                                        width: 6,
                                        height: 6,
                                        borderRadius: "50%",
                                        backgroundColor: a.palette.primary.main,
                                      },
                                    }),
                                    (0, s.jsx)(m.A, {
                                      variant: "body2",
                                      sx: {
                                        color: (0, v.X4)(
                                          a.palette.text.primary,
                                          0.85,
                                        ),
                                      },
                                      children: e,
                                    }),
                                  ],
                                },
                                t,
                              ),
                            ),
                          }),
                        ],
                      }),
                      (0, s.jsxs)(f.A, {
                        spacing: 2,
                        sx: { pt: 1 },
                        children: [
                          (0, s.jsx)(g.A, {
                            variant: "contained",
                            size: "large",
                            onClick: () => {
                              r(), l.push("/premium/payment");
                            },
                            startIcon: (0, s.jsx)(x, {}),
                            sx: {
                              py: 1.5,
                              borderRadius: 9999,
                              fontWeight: 600,
                              fontSize: "1rem",
                              boxShadow: "0 16px 32px ".concat(
                                (0, v.X4)(a.palette.primary.main, 0.35),
                              ),
                              background: "linear-gradient(135deg, "
                                .concat(a.palette.primary.main, ", ")
                                .concat(a.palette.primary.dark, ")"),
                              "&:hover": {
                                boxShadow: "0 20px 40px ".concat(
                                  (0, v.X4)(a.palette.primary.main, 0.45),
                                ),
                              },
                            },
                            children: "Renew Subscription",
                          }),
                          (0, s.jsx)(g.A, {
                            variant: "outlined",
                            size: "large",
                            onClick: E,
                            startIcon: (0, s.jsx)(w, {}),
                            sx: {
                              py: 1.5,
                              borderRadius: 9999,
                              fontWeight: 600,
                              borderColor: (0, v.X4)(
                                a.palette.text.primary,
                                0.2,
                              ),
                              color: a.palette.text.secondary,
                              "&:hover": {
                                borderColor: (0, v.X4)(
                                  a.palette.text.primary,
                                  0.3,
                                ),
                                backgroundColor: (0, v.X4)(
                                  a.palette.text.primary,
                                  0.03,
                                ),
                              },
                            },
                            children: "Remind Me Later",
                          }),
                        ],
                      }),
                      (0, s.jsx)(m.A, {
                        variant: "caption",
                        sx: {
                          textAlign: "center",
                          color: (0, v.X4)(a.palette.text.primary, 0.5),
                          fontStyle: "italic",
                        },
                        children:
                          "You'll be reminded again after 10 minutes of active use",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function O(e) {
        let { children: t } = e,
          {
            showModal: r,
            subscriptionStatus: u,
            handleClose: c,
            handleRemindLater: h,
          } = (function () {
            var e;
            let { data: t, status: r } = (0, n.useSession)(),
              [s, u] = (0, i.useState)(!1),
              [c, h] = (0, i.useState)({
                isExpired: !1,
                expiryDate: null,
                isPremium: !1,
              }),
              d = (0, i.useRef)(0),
              p = (0, i.useRef)(0),
              f = (0, i.useRef)(null);
            (0, i.useEffect)(() => {
              let e = localStorage.getItem(o),
                t = localStorage.getItem(a);
              e && (d.current = parseInt(e, 10) || 0),
                t && (p.current = parseInt(t, 10) || 0);
            }, []),
              (0, i.useEffect)(() => {
                var e;
                "authenticated" === r &&
                  (null == t || null == (e = t.user) ? void 0 : e.id) &&
                  (async () => {
                    try {
                      let e = await fetch("/api/subscription/status");
                      if (e.ok) {
                        let t = await e.json();
                        h({
                          isExpired: t.isExpired || !1,
                          expiryDate: t.expiryDate || null,
                          isPremium: t.isPremium || !1,
                        });
                      }
                    } catch (e) {
                      console.error("Failed to check subscription status:", e);
                    }
                  })();
              }, [null == t || null == (e = t.user) ? void 0 : e.id, r]),
              (0, i.useEffect)(() => {
                if ("authenticated" === r)
                  return (
                    (f.current = setInterval(() => {
                      if (
                        ((d.current += 1e3),
                        localStorage.setItem(o, d.current.toString()),
                        c.isExpired)
                      ) {
                        let e = d.current - p.current,
                          t = "true" === localStorage.getItem(l);
                        e >= 6e5 &&
                          !t &&
                          (u(!0),
                          (p.current = d.current),
                          localStorage.setItem(a, p.current.toString()),
                          localStorage.removeItem(l));
                      }
                    }, 1e3)),
                    () => {
                      f.current && clearInterval(f.current);
                    }
                  );
              }, [r, c.isExpired]),
              (0, i.useEffect)(() => {
                c.isExpired &&
                  0 === p.current &&
                  (u(!0),
                  (p.current = d.current),
                  localStorage.setItem(a, p.current.toString()));
              }, [c.isExpired]);
            let m = (0, i.useCallback)(() => {
              u(!1),
                localStorage.setItem(l, "true"),
                (p.current = d.current),
                localStorage.setItem(a, p.current.toString());
            }, []);
            return {
              showModal: s,
              subscriptionStatus: c,
              handleClose: (0, i.useCallback)(() => {
                u(!1);
              }, []),
              handleRemindLater: m,
            };
          })();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            t,
            (0, s.jsx)(E, {
              open: r,
              onClose: c,
              onRemindLater: h,
              expiryDate: u.expiryDate,
            }),
          ],
        });
      }
    },
    51769: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => l });
      var s = r(95155),
        i = r(12115),
        n = r(64453),
        o = r(25041),
        a = r(35695);
      function l(e) {
        let { children: t, options: r } = e,
          [{ cache: l, flush: u }] = i.useState(() => {
            var e;
            let t = (0, o.A)({
              key: null != (e = null == r ? void 0 : r.key) ? e : "mui",
              prepend: !0,
              ...r,
            });
            t.compat = !0;
            let s = t.insert,
              i = [];
            return (
              (t.insert = function () {
                for (var e = arguments.length, r = Array(e), n = 0; n < e; n++)
                  r[n] = arguments[n];
                let o = r[1];
                return t.inserted[o.name] || i.push(o.name), s(...r);
              }),
              {
                cache: t,
                flush: () => {
                  let e = i;
                  return (i = []), e;
                },
              }
            );
          });
        return (
          (0, a.useServerInsertedHTML)(() => {
            let e = u();
            if (0 === e.length) return null;
            let t = "";
            for (let r of e) t += l.inserted[r];
            return (0, s.jsx)("style", {
              "data-emotion": "".concat(l.key, " ").concat(e.join(" ")),
              dangerouslySetInnerHTML: { __html: t },
            });
          }),
          (0, s.jsx)(n.C, { value: l, children: t })
        );
      }
    },
    55912: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => n });
      var s = r(95155),
        i = r(12108);
      function n(e) {
        let { children: t } = e;
        return (0, s.jsx)(i.SessionProvider, { children: t });
      }
    },
    69040: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 55912)),
        Promise.resolve().then(r.bind(r, 51769)),
        Promise.resolve().then(r.bind(r, 42163)),
        Promise.resolve().then(r.bind(r, 15911)),
        Promise.resolve().then(r.bind(r, 88125)),
        Promise.resolve().then(r.bind(r, 15080)),
        Promise.resolve().then(r.bind(r, 76928)),
        Promise.resolve().then(r.bind(r, 23339)),
        Promise.resolve().then(r.bind(r, 51643)),
        Promise.resolve().then(r.bind(r, 30614)),
        Promise.resolve().then(r.t.bind(r, 35786, 23));
    },
    88125: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => m });
      var s = r(95155),
        i = r(12115),
        n = r(12108),
        o = r(36114),
        a = r(99927),
        l = r(54581),
        u = r(700),
        c = r(9665),
        h = r(78449),
        d = r(68534);
      let p = (0, r(19946).A)("building-2", [
        ["path", { d: "M10 12h4", key: "a56b0p" }],
        ["path", { d: "M10 8h4", key: "1sr2af" }],
        ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
        [
          "path",
          {
            d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
            key: "secmi2",
          },
        ],
        [
          "path",
          { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" },
        ],
      ]);
      function f(e) {
        let { open: t, onSubmit: r } = e,
          [n, f] = (0, i.useState)(""),
          [m, g] = (0, i.useState)(""),
          [y, v] = (0, i.useState)(!1),
          b = async () => {
            let e = n.trim();
            if (!e) return void g("Company name is required");
            if (e.length < 2)
              return void g("Company name must be at least 2 characters long");
            v(!0), g("");
            try {
              await r(e);
            } catch (e) {
              g(
                e instanceof Error
                  ? e.message
                  : "Failed to update company name",
              ),
                v(!1);
            }
          };
        return (0, s.jsx)(o.A, {
          open: t,
          maxWidth: "sm",
          fullWidth: !0,
          disableEscapeKeyDown: !0,
          onClose: (e, t) => {
            if ("backdropClick" === t || "escapeKeyDown" === t) return;
          },
          children: (0, s.jsx)(a.A, {
            children: (0, s.jsxs)(l.A, {
              sx: { textAlign: "center", py: 2 },
              children: [
                (0, s.jsx)(l.A, {
                  sx: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 64,
                    height: 64,
                    margin: "0 auto 16px",
                    borderRadius: "50%",
                    backgroundColor: "primary.light",
                    color: "primary.main",
                  },
                  children: (0, s.jsx)(p, { size: 32 }),
                }),
                (0, s.jsx)(u.A, {
                  variant: "h5",
                  fontWeight: "bold",
                  gutterBottom: !0,
                  children: "Company Name Required",
                }),
                (0, s.jsx)(u.A, {
                  variant: "body1",
                  color: "text.secondary",
                  sx: { mb: 3 },
                  children:
                    "Please enter your company name to continue. This is required to access the platform.",
                }),
                m &&
                  (0, s.jsx)(c.A, {
                    severity: "error",
                    sx: { mb: 2 },
                    children: m,
                  }),
                (0, s.jsx)(h.A, {
                  fullWidth: !0,
                  label: "Company Name",
                  variant: "outlined",
                  value: n,
                  onChange: (e) => {
                    f(e.target.value), g("");
                  },
                  onKeyPress: (e) => {
                    "Enter" !== e.key || y || b();
                  },
                  disabled: y,
                  autoFocus: !0,
                  required: !0,
                  error: !!m,
                  sx: { mb: 3 },
                  placeholder: "Enter your company name",
                }),
                (0, s.jsx)(d.A, {
                  fullWidth: !0,
                  variant: "contained",
                  size: "large",
                  onClick: b,
                  disabled: y || !n.trim(),
                  sx: { py: 1.5 },
                  children: y ? "Saving..." : "Continue",
                }),
              ],
            }),
          }),
        });
      }
      function m() {
        var e;
        let { data: t, status: r, update: o } = (0, n.useSession)(),
          [a, l] = (0, i.useState)(!1),
          u = (0, i.useMemo)(() => {
            var e;
            let r = null == t || null == (e = t.user) ? void 0 : e.role;
            return "Customer" === r || "OEM" === r;
          }, [null == t || null == (e = t.user) ? void 0 : e.role]),
          c = (0, i.useMemo)(() => {
            var e;
            let r = null == t || null == (e = t.user) ? void 0 : e.companyName,
              s = "string" == typeof r ? r : null;
            return !s || !s.toString().trim();
          }, [null == t ? void 0 : t.user]),
          h = async (e) => {
            if (!a) {
              l(!0);
              try {
                let t = await fetch("/api/user/update-company-name", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ companyName: e }),
                });
                if (!t.ok) {
                  let e = await t.json().catch(() => ({}));
                  throw Error(
                    (null == e ? void 0 : e.message) ||
                      "Failed to update company name",
                  );
                }
                await o();
              } finally {
                l(!1);
              }
            }
          };
        return "authenticated" === r && u && c
          ? (0, s.jsx)(f, { open: !0, onSubmit: h })
          : null;
      }
    },
  },
]);

