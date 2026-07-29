"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6380],
  {
    9546: (e, t, o) => {
      o.d(t, { A: () => i, b: () => n });
      var a = o(55170),
        r = o(90870);
      function n(e) {
        return (0, r.Ay)("MuiListItemText", e);
      }
      let i = (0, a.A)("MuiListItemText", [
        "root",
        "multiline",
        "dense",
        "inset",
        "primary",
        "secondary",
      ]);
    },
    72562: (e, t, o) => {
      o.d(t, { A: () => i, f: () => n });
      var a = o(55170),
        r = o(90870);
      function n(e) {
        return (0, r.Ay)("MuiListItemIcon", e);
      }
      let i = (0, a.A)("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
    },
    76380: (e, t, o) => {
      o.d(t, { A: () => C });
      var a = o(12115),
        r = o(52596),
        n = o(17472),
        i = o(36437),
        s = o(75955),
        c = o(40680),
        d = o(77856),
        l = o(99801),
        p = o(25466),
        u = o(21329),
        m = o(36863),
        v = o(44324),
        g = o(72562),
        b = o(9546),
        y = o(55170),
        f = o(90870);
      function A(e) {
        return (0, f.Ay)("MuiMenuItem", e);
      }
      let h = (0, y.A)("MuiMenuItem", [
        "root",
        "focusVisible",
        "dense",
        "disabled",
        "divider",
        "gutters",
        "selected",
      ]);
      var x = o(95155);
      let I = (e) => {
          let {
              disabled: t,
              dense: o,
              divider: a,
              disableGutters: r,
              selected: i,
              classes: s,
            } = e,
            c = (0, n.A)(
              {
                root: [
                  "root",
                  o && "dense",
                  t && "disabled",
                  !r && "gutters",
                  a && "divider",
                  i && "selected",
                ],
              },
              A,
              s,
            );
          return { ...s, ...c };
        },
        k = (0, s.Ay)(p.A, {
          shouldForwardProp: (e) => (0, i.A)(e) || "classes" === e,
          name: "MuiMenuItem",
          slot: "Root",
          overridesResolver: (e, t) => {
            let { ownerState: o } = e;
            return [
              t.root,
              o.dense && t.dense,
              o.divider && t.divider,
              !o.disableGutters && t.gutters,
            ];
          },
        })(
          (0, c.A)((e) => {
            let { theme: t } = e;
            return {
              ...t.typography.body1,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              position: "relative",
              textDecoration: "none",
              minHeight: 48,
              paddingTop: 6,
              paddingBottom: 6,
              boxSizing: "border-box",
              whiteSpace: "nowrap",
              "&:hover": {
                textDecoration: "none",
                backgroundColor: (t.vars || t).palette.action.hover,
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
              ["&.".concat(h.selected)]: {
                backgroundColor: t.alpha(
                  (t.vars || t).palette.primary.main,
                  (t.vars || t).palette.action.selectedOpacity,
                ),
                ["&.".concat(h.focusVisible)]: {
                  backgroundColor: t.alpha(
                    (t.vars || t).palette.primary.main,
                    ""
                      .concat(
                        (t.vars || t).palette.action.selectedOpacity,
                        " + ",
                      )
                      .concat((t.vars || t).palette.action.focusOpacity),
                  ),
                },
              },
              ["&.".concat(h.selected, ":hover")]: {
                backgroundColor: t.alpha(
                  (t.vars || t).palette.primary.main,
                  ""
                    .concat((t.vars || t).palette.action.selectedOpacity, " + ")
                    .concat((t.vars || t).palette.action.hoverOpacity),
                ),
                "@media (hover: none)": {
                  backgroundColor: t.alpha(
                    (t.vars || t).palette.primary.main,
                    (t.vars || t).palette.action.selectedOpacity,
                  ),
                },
              },
              ["&.".concat(h.focusVisible)]: {
                backgroundColor: (t.vars || t).palette.action.focus,
              },
              ["&.".concat(h.disabled)]: {
                opacity: (t.vars || t).palette.action.disabledOpacity,
              },
              ["& + .".concat(v.A.root)]: {
                marginTop: t.spacing(1),
                marginBottom: t.spacing(1),
              },
              ["& + .".concat(v.A.inset)]: { marginLeft: 52 },
              ["& .".concat(b.A.root)]: { marginTop: 0, marginBottom: 0 },
              ["& .".concat(b.A.inset)]: { paddingLeft: 36 },
              ["& .".concat(g.A.root)]: { minWidth: 36 },
              variants: [
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return !t.disableGutters;
                  },
                  style: { paddingLeft: 16, paddingRight: 16 },
                },
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return t.divider;
                  },
                  style: {
                    borderBottom: "1px solid ".concat(
                      (t.vars || t).palette.divider,
                    ),
                    backgroundClip: "padding-box",
                  },
                },
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return !t.dense;
                  },
                  style: { [t.breakpoints.up("sm")]: { minHeight: "auto" } },
                },
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return t.dense;
                  },
                  style: {
                    minHeight: 32,
                    paddingTop: 4,
                    paddingBottom: 4,
                    ...t.typography.body2,
                    ["& .".concat(g.A.root, " svg")]: { fontSize: "1.25rem" },
                  },
                },
              ],
            };
          }),
        ),
        C = a.forwardRef(function (e, t) {
          let o,
            n = (0, d.b)({ props: e, name: "MuiMenuItem" }),
            {
              autoFocus: i = !1,
              component: s = "li",
              dense: c = !1,
              divider: p = !1,
              disableGutters: v = !1,
              focusVisibleClassName: g,
              role: b = "menuitem",
              tabIndex: y,
              className: f,
              ...A
            } = n,
            h = a.useContext(l.A),
            C = a.useMemo(
              () => ({ dense: c || h.dense || !1, disableGutters: v }),
              [h.dense, c, v],
            ),
            M = a.useRef(null);
          (0, u.A)(() => {
            i && M.current && M.current.focus();
          }, [i]);
          let w = { ...n, dense: C.dense, divider: p, disableGutters: v },
            L = I(n),
            O = (0, m.A)(M, t);
          return (
            n.disabled || (o = void 0 !== y ? y : -1),
            (0, x.jsx)(l.A.Provider, {
              value: C,
              children: (0, x.jsx)(k, {
                ref: O,
                role: b,
                tabIndex: o,
                component: s,
                focusVisibleClassName: (0, r.A)(L.focusVisible, g),
                className: (0, r.A)(L.root, f),
                ...A,
                ownerState: w,
                classes: L,
              }),
            })
          );
        });
    },
  },
]);
