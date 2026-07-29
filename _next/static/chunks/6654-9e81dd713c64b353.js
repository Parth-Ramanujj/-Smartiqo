"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6654],
  {
    6654: (e, u, t) => {
      Object.defineProperty(u, "__esModule", { value: !0 }),
        Object.defineProperty(u, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let l = t(12115);
      function n(e, u) {
        let t = (0, l.useRef)(null),
          n = (0, l.useRef)(null);
        return (0, l.useCallback)(
          (l) => {
            if (null === l) {
              let e = t.current;
              e && ((t.current = null), e());
              let u = n.current;
              u && ((n.current = null), u());
            } else e && (t.current = r(e, l)), u && (n.current = r(u, l));
          },
          [e, u],
        );
      }
      function r(e, u) {
        if ("function" != typeof e)
          return (
            (e.current = u),
            () => {
              e.current = null;
            }
          );
        {
          let t = e(u);
          return "function" == typeof t ? t : () => e(null);
        }
      }
      ("function" == typeof u.default ||
        ("object" == typeof u.default && null !== u.default)) &&
        void 0 === u.default.__esModule &&
        (Object.defineProperty(u.default, "__esModule", { value: !0 }),
        Object.assign(u.default, u),
        (e.exports = u.default));
    },
  },
]);
