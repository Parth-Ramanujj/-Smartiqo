"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [136],
  {
    90136: (e, t, n) => {
      n.d(t, { x: () => l });
      var r = n(12115),
        u = n(14810),
        c = n(81616),
        s = n(10704),
        i = n(45292);
      function o(e) {
        return e.substring(2).toLowerCase();
      }
      function l(e) {
        let {
            children: t,
            disableReactTree: n = !1,
            mouseEvent: l = "onClick",
            onClickAway: f,
            touchEvent: E = "onTouchEnd",
          } = e,
          d = r.useRef(!1),
          m = r.useRef(null),
          a = r.useRef(!1),
          v = r.useRef(!1);
        r.useEffect(
          () => (
            setTimeout(() => {
              a.current = !0;
            }, 0),
            () => {
              a.current = !1;
            }
          ),
          [],
        );
        let h = (0, c.A)((0, i.A)(t), m),
          p = (0, s.A)((e) => {
            let t,
              r = v.current;
            v.current = !1;
            let c = (0, u.A)(m.current);
            if (
              !(
                !a.current ||
                !m.current ||
                ("clientX" in e &&
                  (c.documentElement.clientWidth < e.clientX ||
                    c.documentElement.clientHeight < e.clientY))
              )
            ) {
              if (d.current) {
                d.current = !1;
                return;
              }
              (e.composedPath
                ? e.composedPath().includes(m.current)
                : !c.documentElement.contains(e.target) ||
                  m.current.contains(e.target)) ||
                (!n && r) ||
                f(e);
            }
          }),
          L = (e) => (n) => {
            v.current = !0;
            let r = t.props[e];
            r && r(n);
          },
          A = { ref: h };
        return (
          !1 !== E && (A[E] = L(E)),
          r.useEffect(() => {
            if (!1 !== E) {
              let e = o(E),
                t = (0, u.A)(m.current),
                n = () => {
                  d.current = !0;
                };
              return (
                t.addEventListener(e, p),
                t.addEventListener("touchmove", n),
                () => {
                  t.removeEventListener(e, p),
                    t.removeEventListener("touchmove", n);
                }
              );
            }
          }, [p, E]),
          !1 !== l && (A[l] = L(l)),
          r.useEffect(() => {
            if (!1 !== l) {
              let e = o(l),
                t = (0, u.A)(m.current);
              return (
                t.addEventListener(e, p),
                () => {
                  t.removeEventListener(e, p);
                }
              );
            }
          }, [p, l]),
          r.cloneElement(t, A)
        );
      }
    },
  },
]);
