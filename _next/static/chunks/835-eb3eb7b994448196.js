"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [835],
  {
    90835: (t, e, a) => {
      a.d(e, { A: () => S });
      var o = a(12115),
        r = a(52596),
        c = a(17472),
        i = a(13209),
        n = a(98963),
        s = a(16742),
        l = a(75955),
        d = a(40680),
        p = a(77856),
        h = a(55170),
        u = a(90870);
      function m(t) {
        return (0, u.Ay)("MuiSwitch", t);
      }
      let g = (0, h.A)("MuiSwitch", [
        "root",
        "edgeStart",
        "edgeEnd",
        "switchBase",
        "colorPrimary",
        "colorSecondary",
        "sizeSmall",
        "sizeMedium",
        "checked",
        "disabled",
        "input",
        "thumb",
        "track",
      ]);
      var w = a(47798),
        v = a(95155);
      let b = (t) => {
          let {
              classes: e,
              edge: a,
              size: o,
              color: r,
              checked: n,
              disabled: s,
            } = t,
            l = {
              root: [
                "root",
                a && "edge".concat((0, i.A)(a)),
                "size".concat((0, i.A)(o)),
              ],
              switchBase: [
                "switchBase",
                "color".concat((0, i.A)(r)),
                n && "checked",
                s && "disabled",
              ],
              thumb: ["thumb"],
              track: ["track"],
              input: ["input"],
            },
            d = (0, c.A)(l, m, e);
          return { ...e, ...d };
        },
        k = (0, l.Ay)("span", {
          name: "MuiSwitch",
          slot: "Root",
          overridesResolver: (t, e) => {
            let { ownerState: a } = t;
            return [
              e.root,
              a.edge && e["edge".concat((0, i.A)(a.edge))],
              e["size".concat((0, i.A)(a.size))],
            ];
          },
        })({
          display: "inline-flex",
          width: 58,
          height: 38,
          overflow: "hidden",
          padding: 12,
          boxSizing: "border-box",
          position: "relative",
          flexShrink: 0,
          zIndex: 0,
          verticalAlign: "middle",
          "@media print": { colorAdjust: "exact" },
          variants: [
            { props: { edge: "start" }, style: { marginLeft: -8 } },
            { props: { edge: "end" }, style: { marginRight: -8 } },
            {
              props: { size: "small" },
              style: {
                width: 40,
                height: 24,
                padding: 7,
                ["& .".concat(g.thumb)]: { width: 16, height: 16 },
                ["& .".concat(g.switchBase)]: {
                  padding: 4,
                  ["&.".concat(g.checked)]: { transform: "translateX(16px)" },
                },
              },
            },
          ],
        }),
        y = (0, l.Ay)(s.A, {
          name: "MuiSwitch",
          slot: "SwitchBase",
          overridesResolver: (t, e) => {
            let { ownerState: a } = t;
            return [
              e.switchBase,
              { ["& .".concat(g.input)]: e.input },
              "default" !== a.color && e["color".concat((0, i.A)(a.color))],
            ];
          },
        })(
          (0, d.A)((t) => {
            let { theme: e } = t;
            return {
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
              color: e.vars
                ? e.vars.palette.Switch.defaultColor
                : "".concat(
                    "light" === e.palette.mode
                      ? e.palette.common.white
                      : e.palette.grey[300],
                  ),
              transition: e.transitions.create(["left", "transform"], {
                duration: e.transitions.duration.shortest,
              }),
              ["&.".concat(g.checked)]: { transform: "translateX(20px)" },
              ["&.".concat(g.disabled)]: {
                color: e.vars
                  ? e.vars.palette.Switch.defaultDisabledColor
                  : "".concat(
                      "light" === e.palette.mode
                        ? e.palette.grey[100]
                        : e.palette.grey[600],
                    ),
              },
              ["&.".concat(g.checked, " + .").concat(g.track)]: {
                opacity: 0.5,
              },
              ["&.".concat(g.disabled, " + .").concat(g.track)]: {
                opacity: e.vars
                  ? e.vars.opacity.switchTrackDisabled
                  : "".concat("light" === e.palette.mode ? 0.12 : 0.2),
              },
              ["& .".concat(g.input)]: { left: "-100%", width: "300%" },
            };
          }),
          (0, d.A)((t) => {
            let { theme: e } = t;
            return {
              "&:hover": {
                backgroundColor: e.alpha(
                  (e.vars || e).palette.action.active,
                  (e.vars || e).palette.action.hoverOpacity,
                ),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
              variants: [
                ...Object.entries(e.palette)
                  .filter((0, n.A)(["light"]))
                  .map((t) => {
                    let [a] = t;
                    return {
                      props: { color: a },
                      style: {
                        ["&.".concat(g.checked)]: {
                          color: (e.vars || e).palette[a].main,
                          "&:hover": {
                            backgroundColor: e.alpha(
                              (e.vars || e).palette[a].main,
                              (e.vars || e).palette.action.hoverOpacity,
                            ),
                            "@media (hover: none)": {
                              backgroundColor: "transparent",
                            },
                          },
                          ["&.".concat(g.disabled)]: {
                            color: e.vars
                              ? e.vars.palette.Switch[
                                  "".concat(a, "DisabledColor")
                                ]
                              : "".concat(
                                  "light" === e.palette.mode
                                    ? e.lighten(e.palette[a].main, 0.62)
                                    : e.darken(e.palette[a].main, 0.55),
                                ),
                          },
                        },
                        ["&.".concat(g.checked, " + .").concat(g.track)]: {
                          backgroundColor: (e.vars || e).palette[a].main,
                        },
                      },
                    };
                  }),
              ],
            };
          }),
        ),
        A = (0, l.Ay)("span", { name: "MuiSwitch", slot: "Track" })(
          (0, d.A)((t) => {
            let { theme: e } = t;
            return {
              height: "100%",
              width: "100%",
              borderRadius: 7,
              zIndex: -1,
              transition: e.transitions.create(
                ["opacity", "background-color"],
                { duration: e.transitions.duration.shortest },
              ),
              backgroundColor: e.vars
                ? e.vars.palette.common.onBackground
                : "".concat(
                    "light" === e.palette.mode
                      ? e.palette.common.black
                      : e.palette.common.white,
                  ),
              opacity: e.vars
                ? e.vars.opacity.switchTrack
                : "".concat("light" === e.palette.mode ? 0.38 : 0.3),
            };
          }),
        ),
        f = (0, l.Ay)("span", { name: "MuiSwitch", slot: "Thumb" })(
          (0, d.A)((t) => {
            let { theme: e } = t;
            return {
              boxShadow: (e.vars || e).shadows[1],
              backgroundColor: "currentColor",
              width: 20,
              height: 20,
              borderRadius: "50%",
            };
          }),
        ),
        S = o.forwardRef(function (t, e) {
          let a = (0, p.b)({ props: t, name: "MuiSwitch" }),
            {
              className: o,
              color: c = "primary",
              edge: i = !1,
              size: n = "medium",
              sx: s,
              slots: l = {},
              slotProps: d = {},
              ...h
            } = a,
            u = { ...a, color: c, edge: i, size: n },
            m = b(u),
            g = { slots: l, slotProps: d },
            [S, x] = (0, w.A)("root", {
              className: (0, r.A)(m.root, o),
              elementType: k,
              externalForwardedProps: g,
              ownerState: u,
              additionalProps: { sx: s },
            }),
            [B, C] = (0, w.A)("thumb", {
              className: m.thumb,
              elementType: f,
              externalForwardedProps: g,
              ownerState: u,
            }),
            z = (0, v.jsx)(B, { ...C }),
            [M, R] = (0, w.A)("track", {
              className: m.track,
              elementType: A,
              externalForwardedProps: g,
              ownerState: u,
            });
          return (0, v.jsxs)(S, {
            ...x,
            children: [
              (0, v.jsx)(y, {
                type: "checkbox",
                icon: z,
                checkedIcon: z,
                ref: e,
                ownerState: u,
                ...h,
                classes: { ...m, root: m.switchBase },
                slots: {
                  ...(l.switchBase && { root: l.switchBase }),
                  ...(l.input && { input: l.input }),
                },
                slotProps: {
                  ...(d.switchBase && {
                    root:
                      "function" == typeof d.switchBase
                        ? d.switchBase(u)
                        : d.switchBase,
                  }),
                  input: { role: "switch" },
                  ...(d.input && {
                    input: "function" == typeof d.input ? d.input(u) : d.input,
                  }),
                },
              }),
              (0, v.jsx)(M, { ...R }),
            ],
          });
        });
    },
  },
]);
