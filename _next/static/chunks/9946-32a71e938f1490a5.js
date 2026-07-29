"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9946],
  {
    19946: (e, r, t) => {
      t.d(r, { A: () => d });
      var a = t(12115);
      let i = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        l = (e) =>
          e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, r, t) =>
            t ? t.toUpperCase() : r.toLowerCase(),
          ),
        n = (e) => {
          let r = l(e);
          return r.charAt(0).toUpperCase() + r.slice(1);
        },
        o = function () {
          for (var e = arguments.length, r = Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          return r
            .filter((e, r, t) => !!e && "" !== e.trim() && t.indexOf(e) === r)
            .join(" ")
            .trim();
        },
        s = (e) => {
          for (let r in e)
            if (r.startsWith("aria-") || "role" === r || "title" === r)
              return !0;
        };
      var c = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let u = (0, a.forwardRef)((e, r) => {
          let {
            color: t = "currentColor",
            size: i = 24,
            strokeWidth: l = 2,
            absoluteStrokeWidth: n,
            className: u = "",
            children: d,
            iconNode: h,
            ...w
          } = e;
          return (0, a.createElement)(
            "svg",
            {
              ref: r,
              ...c,
              width: i,
              height: i,
              stroke: t,
              strokeWidth: n ? (24 * Number(l)) / Number(i) : l,
              className: o("lucide", u),
              ...(!d && !s(w) && { "aria-hidden": "true" }),
              ...w,
            },
            [
              ...h.map((e) => {
                let [r, t] = e;
                return (0, a.createElement)(r, t);
              }),
              ...(Array.isArray(d) ? d : [d]),
            ],
          );
        }),
        d = (e, r) => {
          let t = (0, a.forwardRef)((t, l) => {
            let { className: s, ...c } = t;
            return (0, a.createElement)(u, {
              ref: l,
              iconNode: r,
              className: o("lucide-".concat(i(n(e))), "lucide-".concat(e), s),
              ...c,
            });
          });
          return (t.displayName = n(e)), t;
        };
    },
  },
]);
