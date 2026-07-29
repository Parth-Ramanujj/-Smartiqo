"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1101],
  {
    41101: (e, a, o) => {
      o.d(a, { A: () => x });
      var t = o(12115),
        l = o(52596),
        c = o(17472),
        r = o(31418),
        n = o(95155);
      let i = (0, r.A)(
        (0, n.jsx)("path", {
          d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",
        }),
        "Cancel",
      );
      var s = o(36863),
        d = o(13209),
        p = o(25466),
        v = o(75955),
        m = o(40680),
        u = o(98963),
        g = o(77856),
        b = o(55170),
        y = o(90870);
      function h(e) {
        return (0, y.Ay)("MuiChip", e);
      }
      let C = (0, b.A)("MuiChip", [
        "root",
        "sizeSmall",
        "sizeMedium",
        "colorDefault",
        "colorError",
        "colorInfo",
        "colorPrimary",
        "colorSecondary",
        "colorSuccess",
        "colorWarning",
        "disabled",
        "clickable",
        "clickableColorPrimary",
        "clickableColorSecondary",
        "deletable",
        "deletableColorPrimary",
        "deletableColorSecondary",
        "outlined",
        "filled",
        "outlinedPrimary",
        "outlinedSecondary",
        "filledPrimary",
        "filledSecondary",
        "avatar",
        "avatarSmall",
        "avatarMedium",
        "avatarColorPrimary",
        "avatarColorSecondary",
        "icon",
        "iconSmall",
        "iconMedium",
        "iconColorPrimary",
        "iconColorSecondary",
        "label",
        "labelSmall",
        "labelMedium",
        "deleteIcon",
        "deleteIconSmall",
        "deleteIconMedium",
        "deleteIconColorPrimary",
        "deleteIconColorSecondary",
        "deleteIconOutlinedColorPrimary",
        "deleteIconOutlinedColorSecondary",
        "deleteIconFilledColorPrimary",
        "deleteIconFilledColorSecondary",
        "focusVisible",
      ]);
      var f = o(47798);
      let A = (e) => {
          let {
              classes: a,
              disabled: o,
              size: t,
              color: l,
              iconColor: r,
              onDelete: n,
              clickable: i,
              variant: s,
            } = e,
            p = {
              root: [
                "root",
                s,
                o && "disabled",
                "size".concat((0, d.A)(t)),
                "color".concat((0, d.A)(l)),
                i && "clickable",
                i && "clickableColor".concat((0, d.A)(l)),
                n && "deletable",
                n && "deletableColor".concat((0, d.A)(l)),
                "".concat(s).concat((0, d.A)(l)),
              ],
              label: ["label", "label".concat((0, d.A)(t))],
              avatar: [
                "avatar",
                "avatar".concat((0, d.A)(t)),
                "avatarColor".concat((0, d.A)(l)),
              ],
              icon: [
                "icon",
                "icon".concat((0, d.A)(t)),
                "iconColor".concat((0, d.A)(r)),
              ],
              deleteIcon: [
                "deleteIcon",
                "deleteIcon".concat((0, d.A)(t)),
                "deleteIconColor".concat((0, d.A)(l)),
                "deleteIcon".concat((0, d.A)(s), "Color").concat((0, d.A)(l)),
              ],
            };
          return (0, c.A)(p, h, a);
        },
        k = (0, v.Ay)("div", {
          name: "MuiChip",
          slot: "Root",
          overridesResolver: (e, a) => {
            let { ownerState: o } = e,
              {
                color: t,
                iconColor: l,
                clickable: c,
                onDelete: r,
                size: n,
                variant: i,
              } = o;
            return [
              { ["& .".concat(C.avatar)]: a.avatar },
              { ["& .".concat(C.avatar)]: a["avatar".concat((0, d.A)(n))] },
              {
                ["& .".concat(C.avatar)]: a["avatarColor".concat((0, d.A)(t))],
              },
              { ["& .".concat(C.icon)]: a.icon },
              { ["& .".concat(C.icon)]: a["icon".concat((0, d.A)(n))] },
              { ["& .".concat(C.icon)]: a["iconColor".concat((0, d.A)(l))] },
              { ["& .".concat(C.deleteIcon)]: a.deleteIcon },
              {
                ["& .".concat(C.deleteIcon)]:
                  a["deleteIcon".concat((0, d.A)(n))],
              },
              {
                ["& .".concat(C.deleteIcon)]:
                  a["deleteIconColor".concat((0, d.A)(t))],
              },
              {
                ["& .".concat(C.deleteIcon)]:
                  a[
                    "deleteIcon"
                      .concat((0, d.A)(i), "Color")
                      .concat((0, d.A)(t))
                  ],
              },
              a.root,
              a["size".concat((0, d.A)(n))],
              a["color".concat((0, d.A)(t))],
              c && a.clickable,
              c && "default" !== t && a["clickableColor".concat((0, d.A)(t))],
              r && a.deletable,
              r && "default" !== t && a["deletableColor".concat((0, d.A)(t))],
              a[i],
              a["".concat(i).concat((0, d.A)(t))],
            ];
          },
        })(
          (0, m.A)((e) => {
            let { theme: a } = e,
              o =
                "light" === a.palette.mode
                  ? a.palette.grey[700]
                  : a.palette.grey[300];
            return {
              maxWidth: "100%",
              fontFamily: a.typography.fontFamily,
              fontSize: a.typography.pxToRem(13),
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: 32,
              lineHeight: 1.5,
              color: (a.vars || a).palette.text.primary,
              backgroundColor: (a.vars || a).palette.action.selected,
              borderRadius: 16,
              whiteSpace: "nowrap",
              transition: a.transitions.create([
                "background-color",
                "box-shadow",
              ]),
              cursor: "unset",
              outline: 0,
              textDecoration: "none",
              border: 0,
              padding: 0,
              verticalAlign: "middle",
              boxSizing: "border-box",
              ["&.".concat(C.disabled)]: {
                opacity: (a.vars || a).palette.action.disabledOpacity,
                pointerEvents: "none",
              },
              ["& .".concat(C.avatar)]: {
                marginLeft: 5,
                marginRight: -6,
                width: 24,
                height: 24,
                color: a.vars ? a.vars.palette.Chip.defaultAvatarColor : o,
                fontSize: a.typography.pxToRem(12),
              },
              ["& .".concat(C.avatarColorPrimary)]: {
                color: (a.vars || a).palette.primary.contrastText,
                backgroundColor: (a.vars || a).palette.primary.dark,
              },
              ["& .".concat(C.avatarColorSecondary)]: {
                color: (a.vars || a).palette.secondary.contrastText,
                backgroundColor: (a.vars || a).palette.secondary.dark,
              },
              ["& .".concat(C.avatarSmall)]: {
                marginLeft: 4,
                marginRight: -4,
                width: 18,
                height: 18,
                fontSize: a.typography.pxToRem(10),
              },
              ["& .".concat(C.icon)]: { marginLeft: 5, marginRight: -6 },
              ["& .".concat(C.deleteIcon)]: {
                WebkitTapHighlightColor: "transparent",
                color: a.alpha((a.vars || a).palette.text.primary, 0.26),
                fontSize: 22,
                cursor: "pointer",
                margin: "0 5px 0 -6px",
                "&:hover": {
                  color: a.alpha((a.vars || a).palette.text.primary, 0.4),
                },
              },
              variants: [
                {
                  props: { size: "small" },
                  style: {
                    height: 24,
                    ["& .".concat(C.icon)]: {
                      fontSize: 18,
                      marginLeft: 4,
                      marginRight: -4,
                    },
                    ["& .".concat(C.deleteIcon)]: {
                      fontSize: 16,
                      marginRight: 4,
                      marginLeft: -4,
                    },
                  },
                },
                ...Object.entries(a.palette)
                  .filter((0, u.A)(["contrastText"]))
                  .map((e) => {
                    let [o] = e;
                    return {
                      props: { color: o },
                      style: {
                        backgroundColor: (a.vars || a).palette[o].main,
                        color: (a.vars || a).palette[o].contrastText,
                        ["& .".concat(C.deleteIcon)]: {
                          color: a.alpha(
                            (a.vars || a).palette[o].contrastText,
                            0.7,
                          ),
                          "&:hover, &:active": {
                            color: (a.vars || a).palette[o].contrastText,
                          },
                        },
                      },
                    };
                  }),
                {
                  props: (e) => e.iconColor === e.color,
                  style: {
                    ["& .".concat(C.icon)]: {
                      color: a.vars ? a.vars.palette.Chip.defaultIconColor : o,
                    },
                  },
                },
                {
                  props: (e) =>
                    e.iconColor === e.color && "default" !== e.color,
                  style: { ["& .".concat(C.icon)]: { color: "inherit" } },
                },
                {
                  props: { onDelete: !0 },
                  style: {
                    ["&.".concat(C.focusVisible)]: {
                      backgroundColor: a.alpha(
                        (a.vars || a).palette.action.selected,
                        ""
                          .concat(
                            (a.vars || a).palette.action.selectedOpacity,
                            " + ",
                          )
                          .concat((a.vars || a).palette.action.focusOpacity),
                      ),
                    },
                  },
                },
                ...Object.entries(a.palette)
                  .filter((0, u.A)(["dark"]))
                  .map((e) => {
                    let [o] = e;
                    return {
                      props: { color: o, onDelete: !0 },
                      style: {
                        ["&.".concat(C.focusVisible)]: {
                          background: (a.vars || a).palette[o].dark,
                        },
                      },
                    };
                  }),
                {
                  props: { clickable: !0 },
                  style: {
                    userSelect: "none",
                    WebkitTapHighlightColor: "transparent",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: a.alpha(
                        (a.vars || a).palette.action.selected,
                        ""
                          .concat(
                            (a.vars || a).palette.action.selectedOpacity,
                            " + ",
                          )
                          .concat((a.vars || a).palette.action.hoverOpacity),
                      ),
                    },
                    ["&.".concat(C.focusVisible)]: {
                      backgroundColor: a.alpha(
                        (a.vars || a).palette.action.selected,
                        ""
                          .concat(
                            (a.vars || a).palette.action.selectedOpacity,
                            " + ",
                          )
                          .concat((a.vars || a).palette.action.focusOpacity),
                      ),
                    },
                    "&:active": { boxShadow: (a.vars || a).shadows[1] },
                  },
                },
                ...Object.entries(a.palette)
                  .filter((0, u.A)(["dark"]))
                  .map((e) => {
                    let [o] = e;
                    return {
                      props: { color: o, clickable: !0 },
                      style: {
                        ["&:hover, &.".concat(C.focusVisible)]: {
                          backgroundColor: (a.vars || a).palette[o].dark,
                        },
                      },
                    };
                  }),
                {
                  props: { variant: "outlined" },
                  style: {
                    backgroundColor: "transparent",
                    border: a.vars
                      ? "1px solid ".concat(a.vars.palette.Chip.defaultBorder)
                      : "1px solid ".concat(
                          "light" === a.palette.mode
                            ? a.palette.grey[400]
                            : a.palette.grey[700],
                        ),
                    ["&.".concat(C.clickable, ":hover")]: {
                      backgroundColor: (a.vars || a).palette.action.hover,
                    },
                    ["&.".concat(C.focusVisible)]: {
                      backgroundColor: (a.vars || a).palette.action.focus,
                    },
                    ["& .".concat(C.avatar)]: { marginLeft: 4 },
                    ["& .".concat(C.avatarSmall)]: { marginLeft: 2 },
                    ["& .".concat(C.icon)]: { marginLeft: 4 },
                    ["& .".concat(C.iconSmall)]: { marginLeft: 2 },
                    ["& .".concat(C.deleteIcon)]: { marginRight: 5 },
                    ["& .".concat(C.deleteIconSmall)]: { marginRight: 3 },
                  },
                },
                ...Object.entries(a.palette)
                  .filter((0, u.A)())
                  .map((e) => {
                    let [o] = e;
                    return {
                      props: { variant: "outlined", color: o },
                      style: {
                        color: (a.vars || a).palette[o].main,
                        border: "1px solid ".concat(
                          a.alpha((a.vars || a).palette[o].main, 0.7),
                        ),
                        ["&.".concat(C.clickable, ":hover")]: {
                          backgroundColor: a.alpha(
                            (a.vars || a).palette[o].main,
                            (a.vars || a).palette.action.hoverOpacity,
                          ),
                        },
                        ["&.".concat(C.focusVisible)]: {
                          backgroundColor: a.alpha(
                            (a.vars || a).palette[o].main,
                            (a.vars || a).palette.action.focusOpacity,
                          ),
                        },
                        ["& .".concat(C.deleteIcon)]: {
                          color: a.alpha((a.vars || a).palette[o].main, 0.7),
                          "&:hover, &:active": {
                            color: (a.vars || a).palette[o].main,
                          },
                        },
                      },
                    };
                  }),
              ],
            };
          }),
        ),
        I = (0, v.Ay)("span", {
          name: "MuiChip",
          slot: "Label",
          overridesResolver: (e, a) => {
            let { ownerState: o } = e,
              { size: t } = o;
            return [a.label, a["label".concat((0, d.A)(t))]];
          },
        })({
          overflow: "hidden",
          textOverflow: "ellipsis",
          paddingLeft: 12,
          paddingRight: 12,
          whiteSpace: "nowrap",
          variants: [
            {
              props: { variant: "outlined" },
              style: { paddingLeft: 11, paddingRight: 11 },
            },
            {
              props: { size: "small" },
              style: { paddingLeft: 8, paddingRight: 8 },
            },
            {
              props: { size: "small", variant: "outlined" },
              style: { paddingLeft: 7, paddingRight: 7 },
            },
          ],
        });
      function S(e) {
        return "Backspace" === e.key || "Delete" === e.key;
      }
      let x = t.forwardRef(function (e, a) {
        let o = (0, g.b)({ props: e, name: "MuiChip" }),
          {
            avatar: c,
            className: r,
            clickable: d,
            color: v = "default",
            component: m,
            deleteIcon: u,
            disabled: b = !1,
            icon: y,
            label: h,
            onClick: C,
            onDelete: x,
            onKeyDown: R,
            onKeyUp: w,
            size: z = "medium",
            variant: O = "filled",
            tabIndex: P,
            skipFocusWhenDisabled: L = !1,
            slots: T = {},
            slotProps: V = {},
            ...N
          } = o,
          E = t.useRef(null),
          M = (0, s.A)(E, a),
          j = (e) => {
            e.stopPropagation(), x && x(e);
          },
          D = (e) => {
            e.currentTarget === e.target && S(e) && e.preventDefault(),
              R && R(e);
          },
          F = (e) => {
            e.currentTarget === e.target && x && S(e) && x(e), w && w(e);
          },
          K = (!1 !== d && !!C) || d,
          W = K || x ? p.A : m || "div",
          _ = {
            ...o,
            component: W,
            disabled: b,
            size: z,
            color: v,
            iconColor: (t.isValidElement(y) && y.props.color) || v,
            onDelete: !!x,
            clickable: K,
            variant: O,
          },
          H = A(_),
          B =
            W === p.A
              ? {
                  component: m || "div",
                  focusVisibleClassName: H.focusVisible,
                  ...(x && { disableRipple: !0 }),
                }
              : {},
          U = null;
        x &&
          (U =
            u && t.isValidElement(u)
              ? t.cloneElement(u, {
                  className: (0, l.A)(u.props.className, H.deleteIcon),
                  onClick: j,
                })
              : (0, n.jsx)(i, { className: H.deleteIcon, onClick: j }));
        let q = null;
        c &&
          t.isValidElement(c) &&
          (q = t.cloneElement(c, {
            className: (0, l.A)(H.avatar, c.props.className),
          }));
        let G = null;
        y &&
          t.isValidElement(y) &&
          (G = t.cloneElement(y, {
            className: (0, l.A)(H.icon, y.props.className),
          }));
        let J = { slots: T, slotProps: V },
          [Q, X] = (0, f.A)("root", {
            elementType: k,
            externalForwardedProps: { ...J, ...N },
            ownerState: _,
            shouldForwardComponentProp: !0,
            ref: M,
            className: (0, l.A)(H.root, r),
            additionalProps: {
              disabled: (!!K && !!b) || void 0,
              tabIndex: L && b ? -1 : P,
              ...B,
            },
            getSlotProps: (e) => ({
              ...e,
              onClick: (a) => {
                var o;
                null == (o = e.onClick) || o.call(e, a), null == C || C(a);
              },
              onKeyDown: (a) => {
                var o;
                null == (o = e.onKeyDown) || o.call(e, a), D(a);
              },
              onKeyUp: (a) => {
                var o;
                null == (o = e.onKeyUp) || o.call(e, a), F(a);
              },
            }),
          }),
          [Y, Z] = (0, f.A)("label", {
            elementType: I,
            externalForwardedProps: J,
            ownerState: _,
            className: H.label,
          });
        return (0, n.jsxs)(Q, {
          as: W,
          ...X,
          children: [q || G, (0, n.jsx)(Y, { ...Z, children: h }), U],
        });
      });
    },
  },
]);
