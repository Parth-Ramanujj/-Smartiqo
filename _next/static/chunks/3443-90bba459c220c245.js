"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3443],
  {
    75824: (t, e, n) => {
      n.d(e, { A: () => j });
      var r = n(12115),
        o = n(17472),
        a = n(10704),
        i = n(48908),
        l = n(40428);
      let s = function () {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            autoHideDuration: e = null,
            disableWindowBlurListener: n = !1,
            onClose: o,
            open: s,
            resumeHideDuration: c,
          } = t,
          u = (0, i.A)();
        r.useEffect(() => {
          if (s)
            return (
              document.addEventListener("keydown", t),
              () => {
                document.removeEventListener("keydown", t);
              }
            );
          function t(t) {
            t.defaultPrevented ||
              "Escape" !== t.key ||
              null == o ||
              o(t, "escapeKeyDown");
          }
        }, [s, o]);
        let p = (0, a.A)((t, e) => {
            null == o || o(t, e);
          }),
          d = (0, a.A)((t) => {
            o &&
              null != t &&
              u.start(t, () => {
                p(null, "timeout");
              });
          });
        r.useEffect(() => (s && d(e), u.clear), [s, e, d, u]);
        let f = u.clear,
          g = r.useCallback(() => {
            null != e && d(null != c ? c : 0.5 * e);
          }, [e, c, d]),
          h = (t) => (e) => {
            let n = t.onBlur;
            null == n || n(e), g();
          },
          m = (t) => (e) => {
            let n = t.onFocus;
            null == n || n(e), f();
          },
          A = (t) => (e) => {
            let n = t.onMouseEnter;
            null == n || n(e), f();
          },
          v = (t) => (e) => {
            let n = t.onMouseLeave;
            null == n || n(e), g();
          };
        return (
          r.useEffect(() => {
            if (!n && s)
              return (
                window.addEventListener("focus", g),
                window.addEventListener("blur", f),
                () => {
                  window.removeEventListener("focus", g),
                    window.removeEventListener("blur", f);
                }
              );
          }, [n, s, g, f]),
          {
            getRootProps: function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = { ...(0, l.A)(t), ...(0, l.A)(e) };
              return {
                role: "presentation",
                ...e,
                ...n,
                onBlur: h(n),
                onFocus: m(n),
                onMouseEnter: A(n),
                onMouseLeave: v(n),
              };
            },
            onClickAway: (t) => {
              null == o || o(t, "clickaway");
            },
          }
        );
      };
      var c = n(90136),
        u = n(75955),
        p = n(16324),
        d = n(40680),
        f = n(77856),
        g = n(13209),
        h = n(18560),
        m = n(52596),
        A = n(4420),
        v = n(18407),
        y = n(55170),
        k = n(90870);
      function b(t) {
        return (0, k.Ay)("MuiSnackbarContent", t);
      }
      (0, y.A)("MuiSnackbarContent", ["root", "message", "action"]);
      var w = n(95155);
      let x = (t) => {
          let { classes: e } = t;
          return (0, o.A)(
            { root: ["root"], action: ["action"], message: ["message"] },
            b,
            e,
          );
        },
        C = (0, u.Ay)(v.A, { name: "MuiSnackbarContent", slot: "Root" })(
          (0, d.A)((t) => {
            let { theme: e } = t,
              n = "light" === e.palette.mode ? 0.8 : 0.98;
            return {
              ...e.typography.body2,
              color: e.vars
                ? e.vars.palette.SnackbarContent.color
                : e.palette.getContrastText(
                    (0, A.tL)(e.palette.background.default, n),
                  ),
              backgroundColor: e.vars
                ? e.vars.palette.SnackbarContent.bg
                : (0, A.tL)(e.palette.background.default, n),
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              padding: "6px 16px",
              flexGrow: 1,
              [e.breakpoints.up("sm")]: { flexGrow: "initial", minWidth: 288 },
            };
          }),
        ),
        S = (0, u.Ay)("div", { name: "MuiSnackbarContent", slot: "Message" })({
          padding: "8px 0",
        }),
        E = (0, u.Ay)("div", { name: "MuiSnackbarContent", slot: "Action" })({
          display: "flex",
          alignItems: "center",
          marginLeft: "auto",
          paddingLeft: 16,
          marginRight: -8,
        }),
        L = r.forwardRef(function (t, e) {
          let n = (0, f.b)({ props: t, name: "MuiSnackbarContent" }),
            {
              action: r,
              className: o,
              message: a,
              role: i = "alert",
              ...l
            } = n,
            s = x(n);
          return (0, w.jsxs)(C, {
            role: i,
            elevation: 6,
            className: (0, m.A)(s.root, o),
            ownerState: n,
            ref: e,
            ...l,
            children: [
              (0, w.jsx)(S, {
                className: s.message,
                ownerState: n,
                children: a,
              }),
              r
                ? (0, w.jsx)(E, {
                    className: s.action,
                    ownerState: n,
                    children: r,
                  })
                : null,
            ],
          });
        });
      function O(t) {
        return (0, k.Ay)("MuiSnackbar", t);
      }
      (0, y.A)("MuiSnackbar", [
        "root",
        "anchorOriginTopCenter",
        "anchorOriginBottomCenter",
        "anchorOriginTopRight",
        "anchorOriginBottomRight",
        "anchorOriginTopLeft",
        "anchorOriginBottomLeft",
      ]);
      var M = n(47798);
      let P = (t) => {
          let { classes: e, anchorOrigin: n } = t,
            r = {
              root: [
                "root",
                "anchorOrigin"
                  .concat((0, g.A)(n.vertical))
                  .concat((0, g.A)(n.horizontal)),
              ],
            };
          return (0, o.A)(r, O, e);
        },
        T = (0, u.Ay)("div", {
          name: "MuiSnackbar",
          slot: "Root",
          overridesResolver: (t, e) => {
            let { ownerState: n } = t;
            return [
              e.root,
              e[
                "anchorOrigin"
                  .concat((0, g.A)(n.anchorOrigin.vertical))
                  .concat((0, g.A)(n.anchorOrigin.horizontal))
              ],
            ];
          },
        })(
          (0, d.A)((t) => {
            let { theme: e } = t;
            return {
              zIndex: (e.vars || e).zIndex.snackbar,
              position: "fixed",
              display: "flex",
              left: 8,
              right: 8,
              justifyContent: "center",
              alignItems: "center",
              variants: [
                {
                  props: (t) => {
                    let { ownerState: e } = t;
                    return "top" === e.anchorOrigin.vertical;
                  },
                  style: { top: 8, [e.breakpoints.up("sm")]: { top: 24 } },
                },
                {
                  props: (t) => {
                    let { ownerState: e } = t;
                    return "top" !== e.anchorOrigin.vertical;
                  },
                  style: {
                    bottom: 8,
                    [e.breakpoints.up("sm")]: { bottom: 24 },
                  },
                },
                {
                  props: (t) => {
                    let { ownerState: e } = t;
                    return "left" === e.anchorOrigin.horizontal;
                  },
                  style: {
                    justifyContent: "flex-start",
                    [e.breakpoints.up("sm")]: { left: 24, right: "auto" },
                  },
                },
                {
                  props: (t) => {
                    let { ownerState: e } = t;
                    return "right" === e.anchorOrigin.horizontal;
                  },
                  style: {
                    justifyContent: "flex-end",
                    [e.breakpoints.up("sm")]: { right: 24, left: "auto" },
                  },
                },
                {
                  props: (t) => {
                    let { ownerState: e } = t;
                    return "center" === e.anchorOrigin.horizontal;
                  },
                  style: {
                    [e.breakpoints.up("sm")]: {
                      left: "50%",
                      right: "auto",
                      transform: "translateX(-50%)",
                    },
                  },
                },
              ],
            };
          }),
        ),
        j = r.forwardRef(function (t, e) {
          let n = (0, f.b)({ props: t, name: "MuiSnackbar" }),
            o = (0, p.A)(),
            a = {
              enter: o.transitions.duration.enteringScreen,
              exit: o.transitions.duration.leavingScreen,
            },
            {
              action: i,
              anchorOrigin: { vertical: l, horizontal: u } = {
                vertical: "bottom",
                horizontal: "left",
              },
              autoHideDuration: d = null,
              children: g,
              className: m,
              ClickAwayListenerProps: A,
              ContentProps: v,
              disableWindowBlurListener: y = !1,
              message: k,
              onBlur: b,
              onClose: x,
              onFocus: C,
              onMouseEnter: S,
              onMouseLeave: E,
              open: O,
              resumeHideDuration: j,
              slots: R = {},
              slotProps: z = {},
              TransitionComponent: N,
              transitionDuration: B = a,
              TransitionProps: { onEnter: I, onExited: F, ..._ } = {},
              ...G
            } = n,
            W = {
              ...n,
              anchorOrigin: { vertical: l, horizontal: u },
              autoHideDuration: d,
              disableWindowBlurListener: y,
              TransitionComponent: N,
              transitionDuration: B,
            },
            D = P(W),
            { getRootProps: K, onClickAway: X } = s(W),
            [q, H] = r.useState(!0),
            J = (t) => {
              H(!0), F && F(t);
            },
            Q = (t, e) => {
              H(!1), I && I(t, e);
            },
            U = {
              slots: { transition: N, ...R },
              slotProps: {
                content: v,
                clickAwayListener: A,
                transition: _,
                ...z,
              },
            },
            [V, Y] = (0, M.A)("root", {
              ref: e,
              className: [D.root, m],
              elementType: T,
              getSlotProps: K,
              externalForwardedProps: { ...U, ...G },
              ownerState: W,
            }),
            [Z, { ownerState: $, ...tt }] = (0, M.A)("clickAwayListener", {
              elementType: c.x,
              externalForwardedProps: U,
              getSlotProps: (t) => ({
                onClickAway: function () {
                  for (
                    var e, n = arguments.length, r = Array(n), o = 0;
                    o < n;
                    o++
                  )
                    r[o] = arguments[o];
                  let a = r[0];
                  null == (e = t.onClickAway) || e.call(t, ...r),
                    (null != a && a.defaultMuiPrevented) || X(...r);
                },
              }),
              ownerState: W,
            }),
            [te, tn] = (0, M.A)("content", {
              elementType: L,
              shouldForwardComponentProp: !0,
              externalForwardedProps: U,
              additionalProps: { message: k, action: i },
              ownerState: W,
            }),
            [tr, to] = (0, M.A)("transition", {
              elementType: h.A,
              externalForwardedProps: U,
              getSlotProps: (t) => ({
                onEnter: function () {
                  for (
                    var e, n = arguments.length, r = Array(n), o = 0;
                    o < n;
                    o++
                  )
                    r[o] = arguments[o];
                  null == (e = t.onEnter) || e.call(t, ...r), Q(...r);
                },
                onExited: function () {
                  for (
                    var e, n = arguments.length, r = Array(n), o = 0;
                    o < n;
                    o++
                  )
                    r[o] = arguments[o];
                  null == (e = t.onExited) || e.call(t, ...r), J(...r);
                },
              }),
              additionalProps: {
                appear: !0,
                in: O,
                timeout: B,
                direction: "top" === l ? "down" : "up",
              },
              ownerState: W,
            });
          return !O && q
            ? null
            : (0, w.jsx)(Z, {
                ...tt,
                ...(R.clickAwayListener && { ownerState: $ }),
                children: (0, w.jsx)(V, {
                  ...Y,
                  children: (0, w.jsx)(tr, {
                    ...to,
                    children: g || (0, w.jsx)(te, { ...tn }),
                  }),
                }),
              });
        });
    },
  },
]);
