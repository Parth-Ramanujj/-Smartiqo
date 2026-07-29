"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4964],
  {
    74964: (t, e, r) => {
      r.d(e, { A: () => f });
      var i = r(12115),
        l = r(52596),
        a = r(17472),
        o = r(75955),
        n = r(40680),
        s = r(77856),
        p = r(44324),
        c = r(95155);
      let d = (t) => {
          let {
            absolute: e,
            children: r,
            classes: i,
            flexItem: l,
            light: o,
            orientation: n,
            textAlign: s,
            variant: c,
          } = t;
          return (0, a.A)(
            {
              root: [
                "root",
                e && "absolute",
                c,
                o && "light",
                "vertical" === n && "vertical",
                l && "flexItem",
                r && "withChildren",
                r && "vertical" === n && "withChildrenVertical",
                "right" === s && "vertical" !== n && "textAlignRight",
                "left" === s && "vertical" !== n && "textAlignLeft",
              ],
              wrapper: ["wrapper", "vertical" === n && "wrapperVertical"],
            },
            p.K,
            i,
          );
        },
        h = (0, o.Ay)("div", {
          name: "MuiDivider",
          slot: "Root",
          overridesResolver: (t, e) => {
            let { ownerState: r } = t;
            return [
              e.root,
              r.absolute && e.absolute,
              e[r.variant],
              r.light && e.light,
              "vertical" === r.orientation && e.vertical,
              r.flexItem && e.flexItem,
              r.children && e.withChildren,
              r.children &&
                "vertical" === r.orientation &&
                e.withChildrenVertical,
              "right" === r.textAlign &&
                "vertical" !== r.orientation &&
                e.textAlignRight,
              "left" === r.textAlign &&
                "vertical" !== r.orientation &&
                e.textAlignLeft,
            ];
          },
        })(
          (0, n.A)((t) => {
            let { theme: e } = t;
            return {
              margin: 0,
              flexShrink: 0,
              borderWidth: 0,
              borderStyle: "solid",
              borderColor: (e.vars || e).palette.divider,
              borderBottomWidth: "thin",
              variants: [
                {
                  props: { absolute: !0 },
                  style: {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                  },
                },
                {
                  props: { light: !0 },
                  style: {
                    borderColor: e.alpha((e.vars || e).palette.divider, 0.08),
                  },
                },
                { props: { variant: "inset" }, style: { marginLeft: 72 } },
                {
                  props: { variant: "middle", orientation: "horizontal" },
                  style: {
                    marginLeft: e.spacing(2),
                    marginRight: e.spacing(2),
                  },
                },
                {
                  props: { variant: "middle", orientation: "vertical" },
                  style: {
                    marginTop: e.spacing(1),
                    marginBottom: e.spacing(1),
                  },
                },
                {
                  props: { orientation: "vertical" },
                  style: {
                    height: "100%",
                    borderBottomWidth: 0,
                    borderRightWidth: "thin",
                  },
                },
                {
                  props: { flexItem: !0 },
                  style: { alignSelf: "stretch", height: "auto" },
                },
                {
                  props: (t) => {
                    let { ownerState: e } = t;
                    return !!e.children;
                  },
                  style: {
                    display: "flex",
                    textAlign: "center",
                    border: 0,
                    borderTopStyle: "solid",
                    borderLeftStyle: "solid",
                    "&::before, &::after": {
                      content: '""',
                      alignSelf: "center",
                    },
                  },
                },
                {
                  props: (t) => {
                    let { ownerState: e } = t;
                    return e.children && "vertical" !== e.orientation;
                  },
                  style: {
                    "&::before, &::after": {
                      width: "100%",
                      borderTop: "thin solid ".concat(
                        (e.vars || e).palette.divider,
                      ),
                      borderTopStyle: "inherit",
                    },
                  },
                },
                {
                  props: (t) => {
                    let { ownerState: e } = t;
                    return "vertical" === e.orientation && e.children;
                  },
                  style: {
                    flexDirection: "column",
                    "&::before, &::after": {
                      height: "100%",
                      borderLeft: "thin solid ".concat(
                        (e.vars || e).palette.divider,
                      ),
                      borderLeftStyle: "inherit",
                    },
                  },
                },
                {
                  props: (t) => {
                    let { ownerState: e } = t;
                    return (
                      "right" === e.textAlign && "vertical" !== e.orientation
                    );
                  },
                  style: {
                    "&::before": { width: "90%" },
                    "&::after": { width: "10%" },
                  },
                },
                {
                  props: (t) => {
                    let { ownerState: e } = t;
                    return (
                      "left" === e.textAlign && "vertical" !== e.orientation
                    );
                  },
                  style: {
                    "&::before": { width: "10%" },
                    "&::after": { width: "90%" },
                  },
                },
              ],
            };
          }),
        ),
        v = (0, o.Ay)("span", {
          name: "MuiDivider",
          slot: "Wrapper",
          overridesResolver: (t, e) => {
            let { ownerState: r } = t;
            return [
              e.wrapper,
              "vertical" === r.orientation && e.wrapperVertical,
            ];
          },
        })(
          (0, n.A)((t) => {
            let { theme: e } = t;
            return {
              display: "inline-block",
              paddingLeft: "calc(".concat(e.spacing(1), " * 1.2)"),
              paddingRight: "calc(".concat(e.spacing(1), " * 1.2)"),
              whiteSpace: "nowrap",
              variants: [
                {
                  props: { orientation: "vertical" },
                  style: {
                    paddingTop: "calc(".concat(e.spacing(1), " * 1.2)"),
                    paddingBottom: "calc(".concat(e.spacing(1), " * 1.2)"),
                  },
                },
              ],
            };
          }),
        ),
        g = i.forwardRef(function (t, e) {
          let r = (0, s.b)({ props: t, name: "MuiDivider" }),
            {
              absolute: i = !1,
              children: a,
              className: o,
              orientation: n = "horizontal",
              component: p = a || "vertical" === n ? "div" : "hr",
              flexItem: g = !1,
              light: f = !1,
              role: b = "hr" !== p ? "separator" : void 0,
              textAlign: u = "center",
              variant: m = "fullWidth",
              ...w
            } = r,
            y = {
              ...r,
              absolute: i,
              component: p,
              flexItem: g,
              light: f,
              orientation: n,
              role: b,
              textAlign: u,
              variant: m,
            },
            x = d(y);
          return (0, c.jsx)(h, {
            as: p,
            className: (0, l.A)(x.root, o),
            role: b,
            ref: e,
            ownerState: y,
            "aria-orientation":
              "separator" === b && ("hr" !== p || "vertical" === n)
                ? n
                : void 0,
            ...w,
            children: a
              ? (0, c.jsx)(v, {
                  className: x.wrapper,
                  ownerState: y,
                  children: a,
                })
              : null,
          });
        });
      g && (g.muiSkipListHighlight = !0);
      let f = g;
    },
  },
]);
