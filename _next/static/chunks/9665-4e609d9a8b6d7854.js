"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9665],
  {
    9665: (e, t, o) => {
      o.d(t, { A: () => E });
      var r = o(12115),
        l = o(52596),
        a = o(17472),
        n = o(75955),
        i = o(40680),
        s = o(77856),
        c = o(47798),
        d = o(13209),
        p = o(98963),
        u = o(18407),
        A = o(55170),
        h = o(90870);
      function m(e) {
        return (0, h.Ay)("MuiAlert", e);
      }
      let g = (0, A.A)("MuiAlert", [
        "root",
        "action",
        "icon",
        "message",
        "filled",
        "colorSuccess",
        "colorInfo",
        "colorWarning",
        "colorError",
        "filledSuccess",
        "filledInfo",
        "filledWarning",
        "filledError",
        "outlined",
        "outlinedSuccess",
        "outlinedInfo",
        "outlinedWarning",
        "outlinedError",
        "standard",
        "standardSuccess",
        "standardInfo",
        "standardWarning",
        "standardError",
      ]);
      var v = o(86220),
        f = o(31418),
        x = o(95155);
      let y = (0, f.A)(
          (0, x.jsx)("path", {
            d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z",
          }),
          "SuccessOutlined",
        ),
        C = (0, f.A)(
          (0, x.jsx)("path", {
            d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z",
          }),
          "ReportProblemOutlined",
        ),
        M = (0, f.A)(
          (0, x.jsx)("path", {
            d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
          }),
          "ErrorOutline",
        ),
        j = (0, f.A)(
          (0, x.jsx)("path", {
            d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z",
          }),
          "InfoOutlined",
        );
      var S = o(11593);
      let b = (e) => {
          let { variant: t, color: o, severity: r, classes: l } = e,
            n = {
              root: [
                "root",
                "color".concat((0, d.A)(o || r)),
                "".concat(t).concat((0, d.A)(o || r)),
                "".concat(t),
              ],
              icon: ["icon"],
              message: ["message"],
              action: ["action"],
            };
          return (0, a.A)(n, m, l);
        },
        k = (0, n.Ay)(u.A, {
          name: "MuiAlert",
          slot: "Root",
          overridesResolver: (e, t) => {
            let { ownerState: o } = e;
            return [
              t.root,
              t[o.variant],
              t["".concat(o.variant).concat((0, d.A)(o.color || o.severity))],
            ];
          },
        })(
          (0, i.A)((e) => {
            let { theme: t } = e,
              o = "light" === t.palette.mode ? t.darken : t.lighten,
              r = "light" === t.palette.mode ? t.lighten : t.darken;
            return {
              ...t.typography.body2,
              backgroundColor: "transparent",
              display: "flex",
              padding: "6px 16px",
              variants: [
                ...Object.entries(t.palette)
                  .filter((0, p.A)(["light"]))
                  .map((e) => {
                    let [l] = e;
                    return {
                      props: { colorSeverity: l, variant: "standard" },
                      style: {
                        color: t.vars
                          ? t.vars.palette.Alert["".concat(l, "Color")]
                          : o(t.palette[l].light, 0.6),
                        backgroundColor: t.vars
                          ? t.vars.palette.Alert["".concat(l, "StandardBg")]
                          : r(t.palette[l].light, 0.9),
                        ["& .".concat(g.icon)]: t.vars
                          ? {
                              color:
                                t.vars.palette.Alert["".concat(l, "IconColor")],
                            }
                          : { color: t.palette[l].main },
                      },
                    };
                  }),
                ...Object.entries(t.palette)
                  .filter((0, p.A)(["light"]))
                  .map((e) => {
                    let [r] = e;
                    return {
                      props: { colorSeverity: r, variant: "outlined" },
                      style: {
                        color: t.vars
                          ? t.vars.palette.Alert["".concat(r, "Color")]
                          : o(t.palette[r].light, 0.6),
                        border: "1px solid ".concat(
                          (t.vars || t).palette[r].light,
                        ),
                        ["& .".concat(g.icon)]: t.vars
                          ? {
                              color:
                                t.vars.palette.Alert["".concat(r, "IconColor")],
                            }
                          : { color: t.palette[r].main },
                      },
                    };
                  }),
                ...Object.entries(t.palette)
                  .filter((0, p.A)(["dark"]))
                  .map((e) => {
                    let [o] = e;
                    return {
                      props: { colorSeverity: o, variant: "filled" },
                      style: {
                        fontWeight: t.typography.fontWeightMedium,
                        ...(t.vars
                          ? {
                              color:
                                t.vars.palette.Alert[
                                  "".concat(o, "FilledColor")
                                ],
                              backgroundColor:
                                t.vars.palette.Alert["".concat(o, "FilledBg")],
                            }
                          : {
                              backgroundColor:
                                "dark" === t.palette.mode
                                  ? t.palette[o].dark
                                  : t.palette[o].main,
                              color: t.palette.getContrastText(
                                t.palette[o].main,
                              ),
                            }),
                      },
                    };
                  }),
              ],
            };
          }),
        ),
        z = (0, n.Ay)("div", { name: "MuiAlert", slot: "Icon" })({
          marginRight: 12,
          padding: "7px 0",
          display: "flex",
          fontSize: 22,
          opacity: 0.9,
        }),
        I = (0, n.Ay)("div", { name: "MuiAlert", slot: "Message" })({
          padding: "8px 0",
          minWidth: 0,
          overflow: "auto",
        }),
        L = (0, n.Ay)("div", { name: "MuiAlert", slot: "Action" })({
          display: "flex",
          alignItems: "flex-start",
          padding: "4px 0 0 16px",
          marginLeft: "auto",
          marginRight: -8,
        }),
        w = {
          success: (0, x.jsx)(y, { fontSize: "inherit" }),
          warning: (0, x.jsx)(C, { fontSize: "inherit" }),
          error: (0, x.jsx)(M, { fontSize: "inherit" }),
          info: (0, x.jsx)(j, { fontSize: "inherit" }),
        },
        E = r.forwardRef(function (e, t) {
          let o = (0, s.b)({ props: e, name: "MuiAlert" }),
            {
              action: r,
              children: a,
              className: n,
              closeText: i = "Close",
              color: d,
              components: p = {},
              componentsProps: u = {},
              icon: A,
              iconMapping: h = w,
              onClose: m,
              role: g = "alert",
              severity: f = "success",
              slotProps: y = {},
              slots: C = {},
              variant: M = "standard",
              ...j
            } = o,
            E = {
              ...o,
              color: d,
              severity: f,
              variant: M,
              colorSeverity: d || f,
            },
            O = b(E),
            T = {
              slots: {
                closeButton: p.CloseButton,
                closeIcon: p.CloseIcon,
                ...C,
              },
              slotProps: { ...u, ...y },
            },
            [W, N] = (0, c.A)("root", {
              ref: t,
              shouldForwardComponentProp: !0,
              className: (0, l.A)(O.root, n),
              elementType: k,
              externalForwardedProps: { ...T, ...j },
              ownerState: E,
              additionalProps: { role: g, elevation: 0 },
            }),
            [R, B] = (0, c.A)("icon", {
              className: O.icon,
              elementType: z,
              externalForwardedProps: T,
              ownerState: E,
            }),
            [H, P] = (0, c.A)("message", {
              className: O.message,
              elementType: I,
              externalForwardedProps: T,
              ownerState: E,
            }),
            [F, _] = (0, c.A)("action", {
              className: O.action,
              elementType: L,
              externalForwardedProps: T,
              ownerState: E,
            }),
            [V, Z] = (0, c.A)("closeButton", {
              elementType: v.A,
              externalForwardedProps: T,
              ownerState: E,
            }),
            [q, D] = (0, c.A)("closeIcon", {
              elementType: S.A,
              externalForwardedProps: T,
              ownerState: E,
            });
          return (0, x.jsxs)(W, {
            ...N,
            children: [
              !1 !== A
                ? (0, x.jsx)(R, { ...B, children: A || h[f] || w[f] })
                : null,
              (0, x.jsx)(H, { ...P, children: a }),
              null != r ? (0, x.jsx)(F, { ..._, children: r }) : null,
              null == r && m
                ? (0, x.jsx)(F, {
                    ..._,
                    children: (0, x.jsx)(V, {
                      size: "small",
                      "aria-label": i,
                      title: i,
                      color: "inherit",
                      onClick: m,
                      ...Z,
                      children: (0, x.jsx)(q, { fontSize: "small", ...D }),
                    }),
                  })
                : null,
            ],
          });
        });
    },
  },
]);
