"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2663],
  {
    42663: (e, r, t) => {
      t.d(r, { A: () => b });
      var a = t(12115),
        o = t(52596),
        l = t(17472),
        n = t(75955),
        i = t(40680),
        s = t(77856),
        u = t(31418),
        c = t(95155);
      let d = (0, u.A)(
        (0, c.jsx)("path", {
          d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
        }),
        "Person",
      );
      var p = t(55170),
        f = t(90870);
      function g(e) {
        return (0, f.Ay)("MuiAvatar", e);
      }
      (0, p.A)("MuiAvatar", [
        "root",
        "colorDefault",
        "circular",
        "rounded",
        "square",
        "img",
        "fallback",
      ]);
      var m = t(47798);
      let v = (e) => {
          let { classes: r, variant: t, colorDefault: a } = e;
          return (0, l.A)(
            {
              root: ["root", t, a && "colorDefault"],
              img: ["img"],
              fallback: ["fallback"],
            },
            g,
            r,
          );
        },
        y = (0, n.Ay)("div", {
          name: "MuiAvatar",
          slot: "Root",
          overridesResolver: (e, r) => {
            let { ownerState: t } = e;
            return [r.root, r[t.variant], t.colorDefault && r.colorDefault];
          },
        })(
          (0, i.A)((e) => {
            let { theme: r } = e;
            return {
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              width: 40,
              height: 40,
              fontFamily: r.typography.fontFamily,
              fontSize: r.typography.pxToRem(20),
              lineHeight: 1,
              borderRadius: "50%",
              overflow: "hidden",
              userSelect: "none",
              variants: [
                {
                  props: { variant: "rounded" },
                  style: { borderRadius: (r.vars || r).shape.borderRadius },
                },
                { props: { variant: "square" }, style: { borderRadius: 0 } },
                {
                  props: { colorDefault: !0 },
                  style: {
                    color: (r.vars || r).palette.background.default,
                    ...(r.vars
                      ? { backgroundColor: r.vars.palette.Avatar.defaultBg }
                      : {
                          backgroundColor: r.palette.grey[400],
                          ...r.applyStyles("dark", {
                            backgroundColor: r.palette.grey[600],
                          }),
                        }),
                  },
                },
              ],
            };
          }),
        ),
        h = (0, n.Ay)("img", { name: "MuiAvatar", slot: "Img" })({
          width: "100%",
          height: "100%",
          textAlign: "center",
          objectFit: "cover",
          color: "transparent",
          textIndent: 1e4,
        }),
        A = (0, n.Ay)(d, { name: "MuiAvatar", slot: "Fallback" })({
          width: "75%",
          height: "75%",
        }),
        b = a.forwardRef(function (e, r) {
          let t = (0, s.b)({ props: e, name: "MuiAvatar" }),
            {
              alt: l,
              children: n,
              className: i,
              component: u = "div",
              slots: d = {},
              slotProps: p = {},
              imgProps: f,
              sizes: g,
              src: b,
              srcSet: k,
              variant: w = "circular",
              ...x
            } = t,
            F = null,
            P = { ...t, component: u, variant: w },
            R = (function (e) {
              let { crossOrigin: r, referrerPolicy: t, src: o, srcSet: l } = e,
                [n, i] = a.useState(!1);
              return (
                a.useEffect(() => {
                  if (!o && !l) return;
                  i(!1);
                  let e = !0,
                    a = new Image();
                  return (
                    (a.onload = () => {
                      e && i("loaded");
                    }),
                    (a.onerror = () => {
                      e && i("error");
                    }),
                    (a.crossOrigin = r),
                    (a.referrerPolicy = t),
                    (a.src = o),
                    l && (a.srcset = l),
                    () => {
                      e = !1;
                    }
                  );
                }, [r, t, o, l]),
                n
              );
            })({
              ...f,
              ...("function" == typeof p.img ? p.img(P) : p.img),
              src: b,
              srcSet: k,
            }),
            C = b || k,
            M = C && "error" !== R;
          (P.colorDefault = !M), delete P.ownerState;
          let j = v(P),
            [D, S] = (0, m.A)("root", {
              ref: r,
              className: (0, o.A)(j.root, i),
              elementType: y,
              externalForwardedProps: {
                slots: d,
                slotProps: p,
                component: u,
                ...x,
              },
              ownerState: P,
            }),
            [N, I] = (0, m.A)("img", {
              className: j.img,
              elementType: h,
              externalForwardedProps: {
                slots: d,
                slotProps: { img: { ...f, ...p.img } },
              },
              additionalProps: { alt: l, src: b, srcSet: k, sizes: g },
              ownerState: P,
            }),
            [T, _] = (0, m.A)("fallback", {
              className: j.fallback,
              elementType: A,
              externalForwardedProps: { slots: d, slotProps: p },
              shouldForwardComponentProp: !0,
              ownerState: P,
            });
          return (
            (F = M
              ? (0, c.jsx)(N, { ...I })
              : n || 0 === n
                ? n
                : C && l
                  ? l[0]
                  : (0, c.jsx)(T, { ..._ })),
            (0, c.jsx)(D, { ...S, children: F })
          );
        });
    },
  },
]);
