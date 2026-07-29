"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1950],
  {
    91950: (n, i, o) => {
      o.d(i, { d: () => c });
      var l,
        t = o(49509);
      let e =
        void 0 !== t
          ? null == (l = t.env.NEXT_PUBLIC_LOGIN_URL)
            ? void 0
            : l.trim()
          : void 0;
      function c() {
        var n;
        return e && e.length > 0
          ? e
          : (null == (n = window.location) ? void 0 : n.origin)
            ? "".concat(window.location.origin, "/Login")
            : "/Login";
      }
    },
  },
]);
