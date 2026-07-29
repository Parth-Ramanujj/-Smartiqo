"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6166],
  {
    27943: (e, t, n) => {
      n.d(t, { A: () => d });
      var r = n(12115),
        i = n.t(r, 2),
        u = n(43430),
        s = n(72579),
        a = n(10340);
      let o = { ...i }.useSyncExternalStore;
      function c() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { themeId: t } = e;
        return function (e) {
          let n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            i = (0, a.A)();
          i && t && (i = i[t] || i);
          let c = "undefined" != typeof window && void 0 !== window.matchMedia,
            {
              defaultMatches: d = !1,
              matchMedia: l = c ? window.matchMedia : null,
              ssrMatchMedia: h = null,
              noSsr: m = !1,
            } = (0, s.A)({ name: "MuiUseMediaQuery", props: n, theme: i }),
            p = "function" == typeof e ? e(i) : e;
          return (
            (p = p.replace(/^@media( ?)/m, "")).includes("print") &&
              console.warn(
                "MUI: You have provided a `print` query to the `useMediaQuery` hook.\nUsing the print media query to modify print styles can lead to unexpected results.\nConsider using the `displayPrint` field in the `sx` prop instead.\nMore information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print.",
              ),
            (void 0 !== o
              ? function (e, t, n, i, u) {
                  let s = r.useCallback(() => t, [t]),
                    a = r.useMemo(() => {
                      if (u && n) return () => n(e).matches;
                      if (null !== i) {
                        let { matches: t } = i(e);
                        return () => t;
                      }
                      return s;
                    }, [s, e, i, u, n]),
                    [c, d] = r.useMemo(() => {
                      if (null === n) return [s, () => () => {}];
                      let t = n(e);
                      return [
                        () => t.matches,
                        (e) => (
                          t.addEventListener("change", e),
                          () => {
                            t.removeEventListener("change", e);
                          }
                        ),
                      ];
                    }, [s, n, e]);
                  return o(d, c, a);
                }
              : function (e, t, n, i, s) {
                  let [a, o] = r.useState(() =>
                    s && n ? n(e).matches : i ? i(e).matches : t,
                  );
                  return (
                    (0, u.A)(() => {
                      if (!n) return;
                      let t = n(e),
                        r = () => {
                          o(t.matches);
                        };
                      return (
                        r(),
                        t.addEventListener("change", r),
                        () => {
                          t.removeEventListener("change", r);
                        }
                      );
                    }, [e, n]),
                    a
                  );
                })(p, d, l, h, m)
          );
        };
      }
      c();
      let d = c({ themeId: n(54107).A });
    },
    28794: (e, t, n) => {
      n.d(t, { A: () => u });
      var r = n(31418),
        i = n(95155);
      let u = (0, r.A)(
        (0, i.jsx)("path", {
          d: "M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5zm4-3H19v1h1.5V11H19v2h-1.5V7h3zM9 9.5h1v-1H9zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm10 5.5h1v-3h-1z",
        }),
        "PictureAsPdf",
      );
    },
  },
]);
