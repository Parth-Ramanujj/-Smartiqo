"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3729],
  {
    9049: (e, t, o) => {
      o.d(t, { A: () => eR });
      var r = o(32299),
        n = o(12115),
        i = o(14810),
        a = o(43430),
        p = o(81616);
      function s(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function l(e) {
        var t = s(e).Element;
        return e instanceof t || e instanceof Element;
      }
      function c(e) {
        var t = s(e).HTMLElement;
        return e instanceof t || e instanceof HTMLElement;
      }
      function f(e) {
        if ("undefined" == typeof ShadowRoot) return !1;
        var t = s(e).ShadowRoot;
        return e instanceof t || e instanceof ShadowRoot;
      }
      var u = Math.max,
        d = Math.min,
        m = Math.round;
      function h() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands)
          ? e.brands
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function v() {
        return !/^((?!chrome|android).)*safari/i.test(h());
      }
      function g(e, t, o) {
        void 0 === t && (t = !1), void 0 === o && (o = !1);
        var r = e.getBoundingClientRect(),
          n = 1,
          i = 1;
        t &&
          c(e) &&
          ((n = (e.offsetWidth > 0 && m(r.width) / e.offsetWidth) || 1),
          (i = (e.offsetHeight > 0 && m(r.height) / e.offsetHeight) || 1));
        var a = (l(e) ? s(e) : window).visualViewport,
          p = !v() && o,
          f = (r.left + (p && a ? a.offsetLeft : 0)) / n,
          u = (r.top + (p && a ? a.offsetTop : 0)) / i,
          d = r.width / n,
          h = r.height / i;
        return {
          width: d,
          height: h,
          top: u,
          right: f + d,
          bottom: u + h,
          left: f,
          x: f,
          y: u,
        };
      }
      function y(e) {
        var t = s(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function b(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function w(e) {
        return ((l(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function x(e) {
        return g(w(e)).left + y(e).scrollLeft;
      }
      function O(e) {
        return s(e).getComputedStyle(e);
      }
      function A(e) {
        var t = O(e),
          o = t.overflow,
          r = t.overflowX,
          n = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(o + n + r);
      }
      function E(e) {
        var t = g(e),
          o = e.offsetWidth,
          r = e.offsetHeight;
        return (
          1 >= Math.abs(t.width - o) && (o = t.width),
          1 >= Math.abs(t.height - r) && (r = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: o, height: r }
        );
      }
      function R(e) {
        return "html" === b(e)
          ? e
          : e.assignedSlot || e.parentNode || (f(e) ? e.host : null) || w(e);
      }
      function T(e, t) {
        void 0 === t && (t = []);
        var o,
          r = (function e(t) {
            return ["html", "body", "#document"].indexOf(b(t)) >= 0
              ? t.ownerDocument.body
              : c(t) && A(t)
                ? t
                : e(R(t));
          })(e),
          n = r === (null == (o = e.ownerDocument) ? void 0 : o.body),
          i = s(r),
          a = n ? [i].concat(i.visualViewport || [], A(r) ? r : []) : r,
          p = t.concat(a);
        return n ? p : p.concat(T(R(a)));
      }
      function j(e) {
        return c(e) && "fixed" !== O(e).position ? e.offsetParent : null;
      }
      function M(e) {
        for (
          var t = s(e), o = j(e);
          o &&
          ["table", "td", "th"].indexOf(b(o)) >= 0 &&
          "static" === O(o).position;

        )
          o = j(o);
        return o &&
          ("html" === b(o) || ("body" === b(o) && "static" === O(o).position))
          ? t
          : o ||
              (function (e) {
                var t = /firefox/i.test(h());
                if (/Trident/i.test(h()) && c(e) && "fixed" === O(e).position)
                  return null;
                var o = R(e);
                for (
                  f(o) && (o = o.host);
                  c(o) && 0 > ["html", "body"].indexOf(b(o));

                ) {
                  var r = O(o);
                  if (
                    "none" !== r.transform ||
                    "none" !== r.perspective ||
                    "paint" === r.contain ||
                    -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
                    (t && "filter" === r.willChange) ||
                    (t && r.filter && "none" !== r.filter)
                  )
                    return o;
                  o = o.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      var P = "bottom",
        k = "right",
        L = "left",
        S = "auto",
        W = ["top", P, k, L],
        D = "start",
        B = "viewport",
        C = "popper",
        H = W.reduce(function (e, t) {
          return e.concat([t + "-" + D, t + "-end"]);
        }, []),
        N = [].concat(W, [S]).reduce(function (e, t) {
          return e.concat([t, t + "-" + D, t + "-end"]);
        }, []),
        I = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ],
        V = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function F() {
        for (var e = arguments.length, t = Array(e), o = 0; o < e; o++)
          t[o] = arguments[o];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      var q = { passive: !0 };
      function U(e) {
        return e.split("-")[0];
      }
      function z(e) {
        return e.split("-")[1];
      }
      function _(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function X(e) {
        var t,
          o = e.reference,
          r = e.element,
          n = e.placement,
          i = n ? U(n) : null,
          a = n ? z(n) : null,
          p = o.x + o.width / 2 - r.width / 2,
          s = o.y + o.height / 2 - r.height / 2;
        switch (i) {
          case "top":
            t = { x: p, y: o.y - r.height };
            break;
          case P:
            t = { x: p, y: o.y + o.height };
            break;
          case k:
            t = { x: o.x + o.width, y: s };
            break;
          case L:
            t = { x: o.x - r.width, y: s };
            break;
          default:
            t = { x: o.x, y: o.y };
        }
        var l = i ? _(i) : null;
        if (null != l) {
          var c = "y" === l ? "height" : "width";
          switch (a) {
            case D:
              t[l] = t[l] - (o[c] / 2 - r[c] / 2);
              break;
            case "end":
              t[l] = t[l] + (o[c] / 2 - r[c] / 2);
          }
        }
        return t;
      }
      var Y = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function G(e) {
        var t,
          o,
          r,
          n,
          i,
          a,
          p,
          l = e.popper,
          c = e.popperRect,
          f = e.placement,
          u = e.variation,
          d = e.offsets,
          h = e.position,
          v = e.gpuAcceleration,
          g = e.adaptive,
          y = e.roundOffsets,
          b = e.isFixed,
          x = d.x,
          A = void 0 === x ? 0 : x,
          E = d.y,
          R = void 0 === E ? 0 : E,
          T = "function" == typeof y ? y({ x: A, y: R }) : { x: A, y: R };
        (A = T.x), (R = T.y);
        var j = d.hasOwnProperty("x"),
          S = d.hasOwnProperty("y"),
          W = L,
          D = "top",
          B = window;
        if (g) {
          var C = M(l),
            H = "clientHeight",
            N = "clientWidth";
          C === s(l) &&
            "static" !== O((C = w(l))).position &&
            "absolute" === h &&
            ((H = "scrollHeight"), (N = "scrollWidth")),
            ("top" === f || ((f === L || f === k) && "end" === u)) &&
              ((D = P),
              (R -=
                (b && C === B && B.visualViewport
                  ? B.visualViewport.height
                  : C[H]) - c.height),
              (R *= v ? 1 : -1)),
            (f === L || (("top" === f || f === P) && "end" === u)) &&
              ((W = k),
              (A -=
                (b && C === B && B.visualViewport
                  ? B.visualViewport.width
                  : C[N]) - c.width),
              (A *= v ? 1 : -1));
        }
        var I = Object.assign({ position: h }, g && Y),
          V =
            !0 === y
              ? ((t = { x: A, y: R }),
                (o = s(l)),
                (r = t.x),
                (n = t.y),
                {
                  x: m(r * (i = o.devicePixelRatio || 1)) / i || 0,
                  y: m(n * i) / i || 0,
                })
              : { x: A, y: R };
        return ((A = V.x), (R = V.y), v)
          ? Object.assign(
              {},
              I,
              (((p = {})[D] = S ? "0" : ""),
              (p[W] = j ? "0" : ""),
              (p.transform =
                1 >= (B.devicePixelRatio || 1)
                  ? "translate(" + A + "px, " + R + "px)"
                  : "translate3d(" + A + "px, " + R + "px, 0)"),
              p),
            )
          : Object.assign(
              {},
              I,
              (((a = {})[D] = S ? R + "px" : ""),
              (a[W] = j ? A + "px" : ""),
              (a.transform = ""),
              a),
            );
      }
      var J = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function K(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return J[e];
        });
      }
      var Q = { start: "end", end: "start" };
      function Z(e) {
        return e.replace(/start|end/g, function (e) {
          return Q[e];
        });
      }
      function $(e, t) {
        var o = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (o && f(o)) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function ee(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function et(e, t, o) {
        var r, n, i, a, p, c, f, d, m, h;
        return t === B
          ? ee(
              (function (e, t) {
                var o = s(e),
                  r = w(e),
                  n = o.visualViewport,
                  i = r.clientWidth,
                  a = r.clientHeight,
                  p = 0,
                  l = 0;
                if (n) {
                  (i = n.width), (a = n.height);
                  var c = v();
                  (c || (!c && "fixed" === t)) &&
                    ((p = n.offsetLeft), (l = n.offsetTop));
                }
                return { width: i, height: a, x: p + x(e), y: l };
              })(e, o),
            )
          : l(t)
            ? (((r = g(t, !1, "fixed" === o)).top = r.top + t.clientTop),
              (r.left = r.left + t.clientLeft),
              (r.bottom = r.top + t.clientHeight),
              (r.right = r.left + t.clientWidth),
              (r.width = t.clientWidth),
              (r.height = t.clientHeight),
              (r.x = r.left),
              (r.y = r.top),
              r)
            : ee(
                ((n = w(e)),
                (a = w(n)),
                (p = y(n)),
                (c = null == (i = n.ownerDocument) ? void 0 : i.body),
                (f = u(
                  a.scrollWidth,
                  a.clientWidth,
                  c ? c.scrollWidth : 0,
                  c ? c.clientWidth : 0,
                )),
                (d = u(
                  a.scrollHeight,
                  a.clientHeight,
                  c ? c.scrollHeight : 0,
                  c ? c.clientHeight : 0,
                )),
                (m = -p.scrollLeft + x(n)),
                (h = -p.scrollTop),
                "rtl" === O(c || a).direction &&
                  (m += u(a.clientWidth, c ? c.clientWidth : 0) - f),
                { width: f, height: d, x: m, y: h }),
              );
      }
      function eo() {
        return { top: 0, right: 0, bottom: 0, left: 0 };
      }
      function er(e) {
        return Object.assign({}, eo(), e);
      }
      function en(e, t) {
        return t.reduce(function (t, o) {
          return (t[o] = e), t;
        }, {});
      }
      function ei(e, t) {
        void 0 === t && (t = {});
        var o,
          r,
          n,
          i,
          a,
          p,
          s,
          f,
          m = t,
          h = m.placement,
          v = void 0 === h ? e.placement : h,
          y = m.strategy,
          x = void 0 === y ? e.strategy : y,
          A = m.boundary,
          E = m.rootBoundary,
          j = m.elementContext,
          L = void 0 === j ? C : j,
          S = m.altBoundary,
          D = m.padding,
          H = void 0 === D ? 0 : D,
          N = er("number" != typeof H ? H : en(H, W)),
          I = e.rects.popper,
          V = e.elements[void 0 !== S && S ? (L === C ? "reference" : C) : L],
          F =
            ((o = l(V) ? V : V.contextElement || w(e.elements.popper)),
            (r = void 0 === A ? "clippingParents" : A),
            (n = void 0 === E ? B : E),
            (s = (p = [].concat(
              "clippingParents" === r
                ? ((i = T(R(o))),
                  !l(
                    (a =
                      ["absolute", "fixed"].indexOf(O(o).position) >= 0 && c(o)
                        ? M(o)
                        : o),
                  )
                    ? []
                    : i.filter(function (e) {
                        return l(e) && $(e, a) && "body" !== b(e);
                      }))
                : [].concat(r),
              [n],
            ))[0]),
            ((f = p.reduce(
              function (e, t) {
                var r = et(o, t, x);
                return (
                  (e.top = u(r.top, e.top)),
                  (e.right = d(r.right, e.right)),
                  (e.bottom = d(r.bottom, e.bottom)),
                  (e.left = u(r.left, e.left)),
                  e
                );
              },
              et(o, s, x),
            )).width = f.right - f.left),
            (f.height = f.bottom - f.top),
            (f.x = f.left),
            (f.y = f.top),
            f),
          q = g(e.elements.reference),
          U = X({
            reference: q,
            element: I,
            strategy: "absolute",
            placement: v,
          }),
          z = ee(Object.assign({}, I, U)),
          _ = L === C ? z : q,
          Y = {
            top: F.top - _.top + N.top,
            bottom: _.bottom - F.bottom + N.bottom,
            left: F.left - _.left + N.left,
            right: _.right - F.right + N.right,
          },
          G = e.modifiersData.offset;
        if (L === C && G) {
          var J = G[v];
          Object.keys(Y).forEach(function (e) {
            var t = [k, P].indexOf(e) >= 0 ? 1 : -1,
              o = ["top", P].indexOf(e) >= 0 ? "y" : "x";
            Y[e] += J[o] * t;
          });
        }
        return Y;
      }
      function ea(e, t, o) {
        return u(e, d(t, o));
      }
      function ep(e, t, o) {
        return (
          void 0 === o && (o = { x: 0, y: 0 }),
          {
            top: e.top - t.height - o.y,
            right: e.right - t.width + o.x,
            bottom: e.bottom - t.height + o.y,
            left: e.left - t.width - o.x,
          }
        );
      }
      function es(e) {
        return ["top", k, P, L].some(function (t) {
          return e[t] >= 0;
        });
      }
      var el = (function (e) {
          void 0 === e && (e = {});
          var t = e,
            o = t.defaultModifiers,
            r = void 0 === o ? [] : o,
            n = t.defaultOptions,
            i = void 0 === n ? V : n;
          return function (e, t, o) {
            void 0 === o && (o = i);
            var n,
              a,
              p = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, V, i),
                modifiersData: {},
                elements: { reference: e, popper: t },
                attributes: {},
                styles: {},
              },
              f = [],
              u = !1,
              d = {
                state: p,
                setOptions: function (o) {
                  var n,
                    a,
                    s,
                    c,
                    u,
                    m,
                    v = "function" == typeof o ? o(p.options) : o;
                  h(),
                    (p.options = Object.assign({}, i, p.options, v)),
                    (p.scrollParents = {
                      reference: l(e)
                        ? T(e)
                        : e.contextElement
                          ? T(e.contextElement)
                          : [],
                      popper: T(t),
                    });
                  var g =
                    ((a = Object.keys(
                      (n = [].concat(r, p.options.modifiers).reduce(function (
                        e,
                        t,
                      ) {
                        var o = e[t.name];
                        return (
                          (e[t.name] = o
                            ? Object.assign({}, o, t, {
                                options: Object.assign(
                                  {},
                                  o.options,
                                  t.options,
                                ),
                                data: Object.assign({}, o.data, t.data),
                              })
                            : t),
                          e
                        );
                      }, {})),
                    ).map(function (e) {
                      return n[e];
                    })),
                    (s = new Map()),
                    (c = new Set()),
                    (u = []),
                    a.forEach(function (e) {
                      s.set(e.name, e);
                    }),
                    a.forEach(function (e) {
                      c.has(e.name) ||
                        (function e(t) {
                          c.add(t.name),
                            []
                              .concat(
                                t.requires || [],
                                t.requiresIfExists || [],
                              )
                              .forEach(function (t) {
                                if (!c.has(t)) {
                                  var o = s.get(t);
                                  o && e(o);
                                }
                              }),
                            u.push(t);
                        })(e);
                    }),
                    (m = u),
                    I.reduce(function (e, t) {
                      return e.concat(
                        m.filter(function (e) {
                          return e.phase === t;
                        }),
                      );
                    }, []));
                  return (
                    (p.orderedModifiers = g.filter(function (e) {
                      return e.enabled;
                    })),
                    p.orderedModifiers.forEach(function (e) {
                      var t = e.name,
                        o = e.options,
                        r = e.effect;
                      if ("function" == typeof r) {
                        var n = r({
                          state: p,
                          name: t,
                          instance: d,
                          options: void 0 === o ? {} : o,
                        });
                        f.push(n || function () {});
                      }
                    }),
                    d.update()
                  );
                },
                forceUpdate: function () {
                  if (!u) {
                    var e = p.elements,
                      t = e.reference,
                      o = e.popper;
                    if (F(t, o)) {
                      (p.rects = {
                        reference:
                          ((r = M(o)),
                          (n = "fixed" === p.options.strategy),
                          (i = c(r)),
                          (h =
                            c(r) &&
                            ((l =
                              m((a = r.getBoundingClientRect()).width) /
                                r.offsetWidth || 1),
                            (f = m(a.height) / r.offsetHeight || 1),
                            1 !== l || 1 !== f)),
                          (v = w(r)),
                          (O = g(t, h, n)),
                          (R = { scrollLeft: 0, scrollTop: 0 }),
                          (T = { x: 0, y: 0 }),
                          (i || (!i && !n)) &&
                            (("body" !== b(r) || A(v)) &&
                              (R = (function (e) {
                                return e !== s(e) && c(e)
                                  ? {
                                      scrollLeft: e.scrollLeft,
                                      scrollTop: e.scrollTop,
                                    }
                                  : y(e);
                              })(r)),
                            c(r)
                              ? ((T = g(r, !0)),
                                (T.x += r.clientLeft),
                                (T.y += r.clientTop))
                              : v && (T.x = x(v))),
                          {
                            x: O.left + R.scrollLeft - T.x,
                            y: O.top + R.scrollTop - T.y,
                            width: O.width,
                            height: O.height,
                          }),
                        popper: E(o),
                      }),
                        (p.reset = !1),
                        (p.placement = p.options.placement),
                        p.orderedModifiers.forEach(function (e) {
                          return (p.modifiersData[e.name] = Object.assign(
                            {},
                            e.data,
                          ));
                        });
                      for (
                        var r, n, i, a, l, f, h, v, O, R, T, j = 0;
                        j < p.orderedModifiers.length;
                        j++
                      ) {
                        if (!0 === p.reset) {
                          (p.reset = !1), (j = -1);
                          continue;
                        }
                        var P = p.orderedModifiers[j],
                          k = P.fn,
                          L = P.options,
                          S = void 0 === L ? {} : L,
                          W = P.name;
                        "function" == typeof k &&
                          (p =
                            k({ state: p, options: S, name: W, instance: d }) ||
                            p);
                      }
                    }
                  }
                },
                update:
                  ((n = function () {
                    return new Promise(function (e) {
                      d.forceUpdate(), e(p);
                    });
                  }),
                  function () {
                    return (
                      a ||
                        (a = new Promise(function (e) {
                          Promise.resolve().then(function () {
                            (a = void 0), e(n());
                          });
                        })),
                      a
                    );
                  }),
                destroy: function () {
                  h(), (u = !0);
                },
              };
            if (!F(e, t)) return d;
            function h() {
              f.forEach(function (e) {
                return e();
              }),
                (f = []);
            }
            return (
              d.setOptions(o).then(function (e) {
                !u && o.onFirstUpdate && o.onFirstUpdate(e);
              }),
              d
            );
          };
        })({
          defaultModifiers: [
            {
              name: "eventListeners",
              enabled: !0,
              phase: "write",
              fn: function () {},
              effect: function (e) {
                var t = e.state,
                  o = e.instance,
                  r = e.options,
                  n = r.scroll,
                  i = void 0 === n || n,
                  a = r.resize,
                  p = void 0 === a || a,
                  l = s(t.elements.popper),
                  c = [].concat(
                    t.scrollParents.reference,
                    t.scrollParents.popper,
                  );
                return (
                  i &&
                    c.forEach(function (e) {
                      e.addEventListener("scroll", o.update, q);
                    }),
                  p && l.addEventListener("resize", o.update, q),
                  function () {
                    i &&
                      c.forEach(function (e) {
                        e.removeEventListener("scroll", o.update, q);
                      }),
                      p && l.removeEventListener("resize", o.update, q);
                  }
                );
              },
              data: {},
            },
            {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function (e) {
                var t = e.state,
                  o = e.name;
                t.modifiersData[o] = X({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            {
              name: "computeStyles",
              enabled: !0,
              phase: "beforeWrite",
              fn: function (e) {
                var t = e.state,
                  o = e.options,
                  r = o.gpuAcceleration,
                  n = o.adaptive,
                  i = o.roundOffsets,
                  a = void 0 === i || i,
                  p = {
                    placement: U(t.placement),
                    variation: z(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: void 0 === r || r,
                    isFixed: "fixed" === t.options.strategy,
                  };
                null != t.modifiersData.popperOffsets &&
                  (t.styles.popper = Object.assign(
                    {},
                    t.styles.popper,
                    G(
                      Object.assign({}, p, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: void 0 === n || n,
                        roundOffsets: a,
                      }),
                    ),
                  )),
                  null != t.modifiersData.arrow &&
                    (t.styles.arrow = Object.assign(
                      {},
                      t.styles.arrow,
                      G(
                        Object.assign({}, p, {
                          offsets: t.modifiersData.arrow,
                          position: "absolute",
                          adaptive: !1,
                          roundOffsets: a,
                        }),
                      ),
                    )),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    { "data-popper-placement": t.placement },
                  ));
              },
              data: {},
            },
            {
              name: "applyStyles",
              enabled: !0,
              phase: "write",
              fn: function (e) {
                var t = e.state;
                Object.keys(t.elements).forEach(function (e) {
                  var o = t.styles[e] || {},
                    r = t.attributes[e] || {},
                    n = t.elements[e];
                  c(n) &&
                    b(n) &&
                    (Object.assign(n.style, o),
                    Object.keys(r).forEach(function (e) {
                      var t = r[e];
                      !1 === t
                        ? n.removeAttribute(e)
                        : n.setAttribute(e, !0 === t ? "" : t);
                    }));
                });
              },
              effect: function (e) {
                var t = e.state,
                  o = {
                    popper: {
                      position: t.options.strategy,
                      left: "0",
                      top: "0",
                      margin: "0",
                    },
                    arrow: { position: "absolute" },
                    reference: {},
                  };
                return (
                  Object.assign(t.elements.popper.style, o.popper),
                  (t.styles = o),
                  t.elements.arrow &&
                    Object.assign(t.elements.arrow.style, o.arrow),
                  function () {
                    Object.keys(t.elements).forEach(function (e) {
                      var r = t.elements[e],
                        n = t.attributes[e] || {},
                        i = Object.keys(
                          t.styles.hasOwnProperty(e) ? t.styles[e] : o[e],
                        ).reduce(function (e, t) {
                          return (e[t] = ""), e;
                        }, {});
                      c(r) &&
                        b(r) &&
                        (Object.assign(r.style, i),
                        Object.keys(n).forEach(function (e) {
                          r.removeAttribute(e);
                        }));
                    });
                  }
                );
              },
              requires: ["computeStyles"],
            },
            {
              name: "offset",
              enabled: !0,
              phase: "main",
              requires: ["popperOffsets"],
              fn: function (e) {
                var t = e.state,
                  o = e.options,
                  r = e.name,
                  n = o.offset,
                  i = void 0 === n ? [0, 0] : n,
                  a = N.reduce(function (e, o) {
                    var r, n, a, p, s, l;
                    return (
                      (e[o] =
                        ((r = t.rects),
                        (a = [L, "top"].indexOf((n = U(o))) >= 0 ? -1 : 1),
                        (s = (p =
                          "function" == typeof i
                            ? i(Object.assign({}, r, { placement: o }))
                            : i)[0]),
                        (l = p[1]),
                        (s = s || 0),
                        (l = (l || 0) * a),
                        [L, k].indexOf(n) >= 0
                          ? { x: l, y: s }
                          : { x: s, y: l })),
                      e
                    );
                  }, {}),
                  p = a[t.placement],
                  s = p.x,
                  l = p.y;
                null != t.modifiersData.popperOffsets &&
                  ((t.modifiersData.popperOffsets.x += s),
                  (t.modifiersData.popperOffsets.y += l)),
                  (t.modifiersData[r] = a);
              },
            },
            {
              name: "flip",
              enabled: !0,
              phase: "main",
              fn: function (e) {
                var t = e.state,
                  o = e.options,
                  r = e.name;
                if (!t.modifiersData[r]._skip) {
                  for (
                    var n = o.mainAxis,
                      i = void 0 === n || n,
                      a = o.altAxis,
                      p = void 0 === a || a,
                      s = o.fallbackPlacements,
                      l = o.padding,
                      c = o.boundary,
                      f = o.rootBoundary,
                      u = o.altBoundary,
                      d = o.flipVariations,
                      m = void 0 === d || d,
                      h = o.allowedAutoPlacements,
                      v = t.options.placement,
                      g = U(v) === v,
                      y =
                        s ||
                        (g || !m
                          ? [K(v)]
                          : (function (e) {
                              if (U(e) === S) return [];
                              var t = K(e);
                              return [Z(e), t, Z(t)];
                            })(v)),
                      b = [v].concat(y).reduce(function (e, o) {
                        var r, n, i, a, p, s, u, d, v, g, y, b;
                        return e.concat(
                          U(o) === S
                            ? ((n = (r = {
                                placement: o,
                                boundary: c,
                                rootBoundary: f,
                                padding: l,
                                flipVariations: m,
                                allowedAutoPlacements: h,
                              }).placement),
                              (i = r.boundary),
                              (a = r.rootBoundary),
                              (p = r.padding),
                              (s = r.flipVariations),
                              (d =
                                void 0 === (u = r.allowedAutoPlacements)
                                  ? N
                                  : u),
                              0 ===
                                (y = (g = (v = z(n))
                                  ? s
                                    ? H
                                    : H.filter(function (e) {
                                        return z(e) === v;
                                      })
                                  : W).filter(function (e) {
                                  return d.indexOf(e) >= 0;
                                })).length && (y = g),
                              Object.keys(
                                (b = y.reduce(function (e, o) {
                                  return (
                                    (e[o] = ei(t, {
                                      placement: o,
                                      boundary: i,
                                      rootBoundary: a,
                                      padding: p,
                                    })[U(o)]),
                                    e
                                  );
                                }, {})),
                              ).sort(function (e, t) {
                                return b[e] - b[t];
                              }))
                            : o,
                        );
                      }, []),
                      w = t.rects.reference,
                      x = t.rects.popper,
                      O = new Map(),
                      A = !0,
                      E = b[0],
                      R = 0;
                    R < b.length;
                    R++
                  ) {
                    var T = b[R],
                      j = U(T),
                      M = z(T) === D,
                      B = ["top", P].indexOf(j) >= 0,
                      C = B ? "width" : "height",
                      I = ei(t, {
                        placement: T,
                        boundary: c,
                        rootBoundary: f,
                        altBoundary: u,
                        padding: l,
                      }),
                      V = B ? (M ? k : L) : M ? P : "top";
                    w[C] > x[C] && (V = K(V));
                    var F = K(V),
                      q = [];
                    if (
                      (i && q.push(I[j] <= 0),
                      p && q.push(I[V] <= 0, I[F] <= 0),
                      q.every(function (e) {
                        return e;
                      }))
                    ) {
                      (E = T), (A = !1);
                      break;
                    }
                    O.set(T, q);
                  }
                  if (A)
                    for (
                      var _ = m ? 3 : 1,
                        X = function (e) {
                          var t = b.find(function (t) {
                            var o = O.get(t);
                            if (o)
                              return o.slice(0, e).every(function (e) {
                                return e;
                              });
                          });
                          if (t) return (E = t), "break";
                        },
                        Y = _;
                      Y > 0 && "break" !== X(Y);
                      Y--
                    );
                  t.placement !== E &&
                    ((t.modifiersData[r]._skip = !0),
                    (t.placement = E),
                    (t.reset = !0));
                }
              },
              requiresIfExists: ["offset"],
              data: { _skip: !1 },
            },
            {
              name: "preventOverflow",
              enabled: !0,
              phase: "main",
              fn: function (e) {
                var t = e.state,
                  o = e.options,
                  r = e.name,
                  n = o.mainAxis,
                  i = o.altAxis,
                  a = o.boundary,
                  p = o.rootBoundary,
                  s = o.altBoundary,
                  l = o.padding,
                  c = o.tether,
                  f = void 0 === c || c,
                  m = o.tetherOffset,
                  h = void 0 === m ? 0 : m,
                  v = ei(t, {
                    boundary: a,
                    rootBoundary: p,
                    padding: l,
                    altBoundary: s,
                  }),
                  g = U(t.placement),
                  y = z(t.placement),
                  b = !y,
                  w = _(g),
                  x = "x" === w ? "y" : "x",
                  O = t.modifiersData.popperOffsets,
                  A = t.rects.reference,
                  R = t.rects.popper,
                  T =
                    "function" == typeof h
                      ? h(
                          Object.assign({}, t.rects, {
                            placement: t.placement,
                          }),
                        )
                      : h,
                  j =
                    "number" == typeof T
                      ? { mainAxis: T, altAxis: T }
                      : Object.assign({ mainAxis: 0, altAxis: 0 }, T),
                  S = t.modifiersData.offset
                    ? t.modifiersData.offset[t.placement]
                    : null,
                  W = { x: 0, y: 0 };
                if (O) {
                  if (void 0 === n || n) {
                    var B,
                      C = "y" === w ? "top" : L,
                      H = "y" === w ? P : k,
                      N = "y" === w ? "height" : "width",
                      I = O[w],
                      V = I + v[C],
                      F = I - v[H],
                      q = f ? -R[N] / 2 : 0,
                      X = y === D ? A[N] : R[N],
                      Y = y === D ? -R[N] : -A[N],
                      G = t.elements.arrow,
                      J = f && G ? E(G) : { width: 0, height: 0 },
                      K = t.modifiersData["arrow#persistent"]
                        ? t.modifiersData["arrow#persistent"].padding
                        : eo(),
                      Q = K[C],
                      Z = K[H],
                      $ = ea(0, A[N], J[N]),
                      ee = b
                        ? A[N] / 2 - q - $ - Q - j.mainAxis
                        : X - $ - Q - j.mainAxis,
                      et = b
                        ? -A[N] / 2 + q + $ + Z + j.mainAxis
                        : Y + $ + Z + j.mainAxis,
                      er = t.elements.arrow && M(t.elements.arrow),
                      en = er
                        ? "y" === w
                          ? er.clientTop || 0
                          : er.clientLeft || 0
                        : 0,
                      ep = null != (B = null == S ? void 0 : S[w]) ? B : 0,
                      es = ea(
                        f ? d(V, I + ee - ep - en) : V,
                        I,
                        f ? u(F, I + et - ep) : F,
                      );
                    (O[w] = es), (W[w] = es - I);
                  }
                  if (void 0 !== i && i) {
                    var el,
                      ec,
                      ef = "x" === w ? "top" : L,
                      eu = "x" === w ? P : k,
                      ed = O[x],
                      em = "y" === x ? "height" : "width",
                      eh = ed + v[ef],
                      ev = ed - v[eu],
                      eg = -1 !== ["top", L].indexOf(g),
                      ey = null != (ec = null == S ? void 0 : S[x]) ? ec : 0,
                      eb = eg ? eh : ed - A[em] - R[em] - ey + j.altAxis,
                      ew = eg ? ed + A[em] + R[em] - ey - j.altAxis : ev,
                      ex =
                        f && eg
                          ? (el = ea(eb, ed, ew)) > ew
                            ? ew
                            : el
                          : ea(f ? eb : eh, ed, f ? ew : ev);
                    (O[x] = ex), (W[x] = ex - ed);
                  }
                  t.modifiersData[r] = W;
                }
              },
              requiresIfExists: ["offset"],
            },
            {
              name: "arrow",
              enabled: !0,
              phase: "main",
              fn: function (e) {
                var t,
                  o = e.state,
                  r = e.name,
                  n = e.options,
                  i = o.elements.arrow,
                  a = o.modifiersData.popperOffsets,
                  p = U(o.placement),
                  s = _(p),
                  l = [L, k].indexOf(p) >= 0 ? "height" : "width";
                if (i && a) {
                  var c,
                    f =
                      ((c = n.padding),
                      er(
                        "number" !=
                          typeof (c =
                            "function" == typeof c
                              ? c(
                                  Object.assign({}, o.rects, {
                                    placement: o.placement,
                                  }),
                                )
                              : c)
                          ? c
                          : en(c, W),
                      )),
                    u = E(i),
                    d = "y" === s ? "top" : L,
                    m = "y" === s ? P : k,
                    h =
                      o.rects.reference[l] +
                      o.rects.reference[s] -
                      a[s] -
                      o.rects.popper[l],
                    v = a[s] - o.rects.reference[s],
                    g = M(i),
                    y = g
                      ? "y" === s
                        ? g.clientHeight || 0
                        : g.clientWidth || 0
                      : 0,
                    b = f[d],
                    w = y - u[l] - f[m],
                    x = y / 2 - u[l] / 2 + (h / 2 - v / 2),
                    O = ea(b, x, w);
                  o.modifiersData[r] =
                    (((t = {})[s] = O), (t.centerOffset = O - x), t);
                }
              },
              effect: function (e) {
                var t = e.state,
                  o = e.options.element,
                  r = void 0 === o ? "[data-popper-arrow]" : o;
                if (null != r)
                  ("string" != typeof r ||
                    (r = t.elements.popper.querySelector(r))) &&
                    $(t.elements.popper, r) &&
                    (t.elements.arrow = r);
              },
              requires: ["popperOffsets"],
              requiresIfExists: ["preventOverflow"],
            },
            {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (e) {
                var t = e.state,
                  o = e.name,
                  r = t.rects.reference,
                  n = t.rects.popper,
                  i = t.modifiersData.preventOverflow,
                  a = ei(t, { elementContext: "reference" }),
                  p = ei(t, { altBoundary: !0 }),
                  s = ep(a, r),
                  l = ep(p, n, i),
                  c = es(s),
                  f = es(l);
                (t.modifiersData[o] = {
                  referenceClippingOffsets: s,
                  popperEscapeOffsets: l,
                  isReferenceHidden: c,
                  hasPopperEscaped: f,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": c,
                      "data-popper-escaped": f,
                    },
                  ));
              },
            },
          ],
        }),
        ec = o(17472),
        ef = o(50422),
        eu = o(4722),
        ed = o(55170),
        em = o(90870);
      function eh(e) {
        return (0, em.Ay)("MuiPopper", e);
      }
      (0, ed.A)("MuiPopper", ["root"]);
      var ev = o(95155);
      function eg(e) {
        return "function" == typeof e ? e() : e;
      }
      let ey = (e) => {
          let { classes: t } = e;
          return (0, ec.A)({ root: ["root"] }, eh, t);
        },
        eb = {},
        ew = n.forwardRef(function (e, t) {
          var o;
          let {
              anchorEl: r,
              children: i,
              direction: s,
              disablePortal: l,
              modifiers: c,
              open: f,
              placement: u,
              popperOptions: d,
              popperRef: m,
              slotProps: h = {},
              slots: v = {},
              TransitionProps: g,
              ownerState: y,
              ...b
            } = e,
            w = n.useRef(null),
            x = (0, p.A)(w, t),
            O = n.useRef(null),
            A = (0, p.A)(O, m),
            E = n.useRef(A);
          (0, a.A)(() => {
            E.current = A;
          }, [A]),
            n.useImperativeHandle(m, () => O.current, []);
          let R = (function (e, t) {
              if ("ltr" === t) return e;
              switch (e) {
                case "bottom-end":
                  return "bottom-start";
                case "bottom-start":
                  return "bottom-end";
                case "top-end":
                  return "top-start";
                case "top-start":
                  return "top-end";
                default:
                  return e;
              }
            })(u, s),
            [T, j] = n.useState(R),
            [M, P] = n.useState(eg(r));
          n.useEffect(() => {
            O.current && O.current.forceUpdate();
          }),
            n.useEffect(() => {
              r && P(eg(r));
            }, [r]),
            (0, a.A)(() => {
              if (!M || !f) return;
              let e = (e) => {
                  j(e.placement);
                },
                t = [
                  { name: "preventOverflow", options: { altBoundary: l } },
                  { name: "flip", options: { altBoundary: l } },
                  {
                    name: "onUpdate",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: (t) => {
                      let { state: o } = t;
                      e(o);
                    },
                  },
                ];
              null != c && (t = t.concat(c)),
                d && null != d.modifiers && (t = t.concat(d.modifiers));
              let o = el(M, w.current, { placement: R, ...d, modifiers: t });
              return (
                E.current(o),
                () => {
                  o.destroy(), E.current(null);
                }
              );
            }, [M, l, c, f, d, R]);
          let k = { placement: T };
          null !== g && (k.TransitionProps = g);
          let L = ey(e),
            S = null != (o = v.root) ? o : "div",
            W = (0, ef.A)({
              elementType: S,
              externalSlotProps: h.root,
              externalForwardedProps: b,
              additionalProps: { role: "tooltip", ref: x },
              ownerState: e,
              className: L.root,
            });
          return (0, ev.jsx)(S, {
            ...W,
            children: "function" == typeof i ? i(k) : i,
          });
        }),
        ex = n.forwardRef(function (e, t) {
          let o,
            {
              anchorEl: r,
              children: a,
              container: p,
              direction: s = "ltr",
              disablePortal: l = !1,
              keepMounted: c = !1,
              modifiers: f,
              open: u,
              placement: d = "bottom",
              popperOptions: m = eb,
              popperRef: h,
              style: v,
              transition: g = !1,
              slotProps: y = {},
              slots: b = {},
              ...w
            } = e,
            [x, O] = n.useState(!0);
          if (!c && !u && (!g || x)) return null;
          if (p) o = p;
          else if (r) {
            let e = eg(r);
            o =
              e && void 0 !== e.nodeType
                ? (0, i.A)(e).body
                : (0, i.A)(null).body;
          }
          let A = !u && c && (!g || x) ? "none" : void 0,
            E = g
              ? {
                  in: u,
                  onEnter: () => {
                    O(!1);
                  },
                  onExited: () => {
                    O(!0);
                  },
                }
              : void 0;
          return (0, ev.jsx)(eu.A, {
            disablePortal: l,
            container: o,
            children: (0, ev.jsx)(ew, {
              anchorEl: r,
              direction: s,
              disablePortal: l,
              modifiers: f,
              ref: t,
              open: g ? !x : u,
              placement: d,
              popperOptions: m,
              popperRef: h,
              slotProps: y,
              slots: b,
              ...w,
              style: { position: "fixed", top: 0, left: 0, display: A, ...v },
              TransitionProps: E,
              children: a,
            }),
          });
        });
      var eO = o(75955),
        eA = o(77856);
      let eE = (0, eO.Ay)(ex, { name: "MuiPopper", slot: "Root" })({}),
        eR = n.forwardRef(function (e, t) {
          var o;
          let n = (0, r.I)(),
            {
              anchorEl: i,
              component: a,
              components: p,
              componentsProps: s,
              container: l,
              disablePortal: c,
              keepMounted: f,
              modifiers: u,
              open: d,
              placement: m,
              popperOptions: h,
              popperRef: v,
              transition: g,
              slots: y,
              slotProps: b,
              ...w
            } = (0, eA.b)({ props: e, name: "MuiPopper" }),
            x =
              null != (o = null == y ? void 0 : y.root)
                ? o
                : null == p
                  ? void 0
                  : p.Root,
            O = {
              anchorEl: i,
              container: l,
              disablePortal: c,
              keepMounted: f,
              modifiers: u,
              open: d,
              placement: m,
              popperOptions: h,
              popperRef: v,
              transition: g,
              ...w,
            };
          return (0, ev.jsx)(eE, {
            as: a,
            direction: n ? "rtl" : "ltr",
            slots: { root: x },
            slotProps: null != b ? b : s,
            ...O,
            ref: t,
          });
        });
    },
    83729: (e, t, o) => {
      o.d(t, { A: () => B });
      var r = o(12115),
        n = o(52596),
        i = o(48908),
        a = o(17472),
        p = o(32299),
        s = o(60848),
        l = o(45292),
        c = o(75955),
        f = o(16324),
        u = o(40680),
        d = o(77856),
        m = o(13209),
        h = o(18560),
        v = o(9049),
        g = o(37573),
        y = o(36863),
        b = o(74739),
        w = o(49800),
        x = o(47798),
        O = o(55170),
        A = o(90870);
      function E(e) {
        return (0, A.Ay)("MuiTooltip", e);
      }
      let R = (0, O.A)("MuiTooltip", [
        "popper",
        "popperInteractive",
        "popperArrow",
        "popperClose",
        "tooltip",
        "tooltipArrow",
        "touch",
        "tooltipPlacementLeft",
        "tooltipPlacementRight",
        "tooltipPlacementTop",
        "tooltipPlacementBottom",
        "arrow",
      ]);
      var T = o(95155);
      let j = (e) => {
          let {
              classes: t,
              disableInteractive: o,
              arrow: r,
              touch: n,
              placement: i,
            } = e,
            p = {
              popper: ["popper", !o && "popperInteractive", r && "popperArrow"],
              tooltip: [
                "tooltip",
                r && "tooltipArrow",
                n && "touch",
                "tooltipPlacement".concat((0, m.A)(i.split("-")[0])),
              ],
              arrow: ["arrow"],
            };
          return (0, a.A)(p, E, t);
        },
        M = (0, c.Ay)(v.A, {
          name: "MuiTooltip",
          slot: "Popper",
          overridesResolver: (e, t) => {
            let { ownerState: o } = e;
            return [
              t.popper,
              !o.disableInteractive && t.popperInteractive,
              o.arrow && t.popperArrow,
              !o.open && t.popperClose,
            ];
          },
        })(
          (0, u.A)((e) => {
            let { theme: t } = e;
            return {
              zIndex: (t.vars || t).zIndex.tooltip,
              pointerEvents: "none",
              variants: [
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return !t.disableInteractive;
                  },
                  style: { pointerEvents: "auto" },
                },
                {
                  props: (e) => {
                    let { open: t } = e;
                    return !t;
                  },
                  style: { pointerEvents: "none" },
                },
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return t.arrow;
                  },
                  style: {
                    ['&[data-popper-placement*="bottom"] .'.concat(R.arrow)]: {
                      top: 0,
                      marginTop: "-0.71em",
                      "&::before": { transformOrigin: "0 100%" },
                    },
                    ['&[data-popper-placement*="top"] .'.concat(R.arrow)]: {
                      bottom: 0,
                      marginBottom: "-0.71em",
                      "&::before": { transformOrigin: "100% 0" },
                    },
                    ['&[data-popper-placement*="right"] .'.concat(R.arrow)]: {
                      height: "1em",
                      width: "0.71em",
                      "&::before": { transformOrigin: "100% 100%" },
                    },
                    ['&[data-popper-placement*="left"] .'.concat(R.arrow)]: {
                      height: "1em",
                      width: "0.71em",
                      "&::before": { transformOrigin: "0 0" },
                    },
                  },
                },
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return t.arrow && !t.isRtl;
                  },
                  style: {
                    ['&[data-popper-placement*="right"] .'.concat(R.arrow)]: {
                      left: 0,
                      marginLeft: "-0.71em",
                    },
                  },
                },
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return t.arrow && !!t.isRtl;
                  },
                  style: {
                    ['&[data-popper-placement*="right"] .'.concat(R.arrow)]: {
                      right: 0,
                      marginRight: "-0.71em",
                    },
                  },
                },
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return t.arrow && !t.isRtl;
                  },
                  style: {
                    ['&[data-popper-placement*="left"] .'.concat(R.arrow)]: {
                      right: 0,
                      marginRight: "-0.71em",
                    },
                  },
                },
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return t.arrow && !!t.isRtl;
                  },
                  style: {
                    ['&[data-popper-placement*="left"] .'.concat(R.arrow)]: {
                      left: 0,
                      marginLeft: "-0.71em",
                    },
                  },
                },
              ],
            };
          }),
        ),
        P = (0, c.Ay)("div", {
          name: "MuiTooltip",
          slot: "Tooltip",
          overridesResolver: (e, t) => {
            let { ownerState: o } = e;
            return [
              t.tooltip,
              o.touch && t.touch,
              o.arrow && t.tooltipArrow,
              t["tooltipPlacement".concat((0, m.A)(o.placement.split("-")[0]))],
            ];
          },
        })(
          (0, u.A)((e) => {
            let { theme: t } = e;
            return {
              backgroundColor: t.vars
                ? t.vars.palette.Tooltip.bg
                : t.alpha(t.palette.grey[700], 0.92),
              borderRadius: (t.vars || t).shape.borderRadius,
              color: (t.vars || t).palette.common.white,
              fontFamily: t.typography.fontFamily,
              padding: "4px 8px",
              fontSize: t.typography.pxToRem(11),
              maxWidth: 300,
              margin: 2,
              wordWrap: "break-word",
              fontWeight: t.typography.fontWeightMedium,
              [".".concat(R.popper, '[data-popper-placement*="left"] &')]: {
                transformOrigin: "right center",
              },
              [".".concat(R.popper, '[data-popper-placement*="right"] &')]: {
                transformOrigin: "left center",
              },
              [".".concat(R.popper, '[data-popper-placement*="top"] &')]: {
                transformOrigin: "center bottom",
                marginBottom: "14px",
              },
              [".".concat(R.popper, '[data-popper-placement*="bottom"] &')]: {
                transformOrigin: "center top",
                marginTop: "14px",
              },
              variants: [
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return t.arrow;
                  },
                  style: { position: "relative", margin: 0 },
                },
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return t.touch;
                  },
                  style: {
                    padding: "8px 16px",
                    fontSize: t.typography.pxToRem(14),
                    lineHeight: "".concat(
                      Math.round((16 / 14) * 1e5) / 1e5,
                      "em",
                    ),
                    fontWeight: t.typography.fontWeightRegular,
                  },
                },
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return !t.isRtl;
                  },
                  style: {
                    [".".concat(R.popper, '[data-popper-placement*="left"] &')]:
                      { marginRight: "14px" },
                    [".".concat(
                      R.popper,
                      '[data-popper-placement*="right"] &',
                    )]: { marginLeft: "14px" },
                  },
                },
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return !t.isRtl && t.touch;
                  },
                  style: {
                    [".".concat(R.popper, '[data-popper-placement*="left"] &')]:
                      { marginRight: "24px" },
                    [".".concat(
                      R.popper,
                      '[data-popper-placement*="right"] &',
                    )]: { marginLeft: "24px" },
                  },
                },
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return !!t.isRtl;
                  },
                  style: {
                    [".".concat(R.popper, '[data-popper-placement*="left"] &')]:
                      { marginLeft: "14px" },
                    [".".concat(
                      R.popper,
                      '[data-popper-placement*="right"] &',
                    )]: { marginRight: "14px" },
                  },
                },
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return !!t.isRtl && t.touch;
                  },
                  style: {
                    [".".concat(R.popper, '[data-popper-placement*="left"] &')]:
                      { marginLeft: "24px" },
                    [".".concat(
                      R.popper,
                      '[data-popper-placement*="right"] &',
                    )]: { marginRight: "24px" },
                  },
                },
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return t.touch;
                  },
                  style: {
                    [".".concat(R.popper, '[data-popper-placement*="top"] &')]:
                      { marginBottom: "24px" },
                  },
                },
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return t.touch;
                  },
                  style: {
                    [".".concat(
                      R.popper,
                      '[data-popper-placement*="bottom"] &',
                    )]: { marginTop: "24px" },
                  },
                },
              ],
            };
          }),
        ),
        k = (0, c.Ay)("span", { name: "MuiTooltip", slot: "Arrow" })(
          (0, u.A)((e) => {
            let { theme: t } = e;
            return {
              overflow: "hidden",
              position: "absolute",
              width: "1em",
              height: "0.71em",
              boxSizing: "border-box",
              color: t.vars
                ? t.vars.palette.Tooltip.bg
                : t.alpha(t.palette.grey[700], 0.9),
              "&::before": {
                content: '""',
                margin: "auto",
                display: "block",
                width: "100%",
                height: "100%",
                backgroundColor: "currentColor",
                transform: "rotate(45deg)",
              },
            };
          }),
        ),
        L = !1,
        S = new i.E(),
        W = { x: 0, y: 0 };
      function D(e, t) {
        return function (o) {
          for (
            var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1;
            i < r;
            i++
          )
            n[i - 1] = arguments[i];
          t && t(o, ...n), e(o, ...n);
        };
      }
      let B = r.forwardRef(function (e, t) {
        var o, a, c;
        let u = (0, d.b)({ props: e, name: "MuiTooltip" }),
          {
            arrow: m = !1,
            children: O,
            classes: A,
            components: E = {},
            componentsProps: R = {},
            describeChild: B = !1,
            disableFocusListener: C = !1,
            disableHoverListener: H = !1,
            disableInteractive: N = !1,
            disableTouchListener: I = !1,
            enterDelay: V = 100,
            enterNextDelay: F = 0,
            enterTouchDelay: q = 700,
            followCursor: U = !1,
            id: z,
            leaveDelay: _ = 0,
            leaveTouchDelay: X = 1500,
            onClose: Y,
            onOpen: G,
            open: J,
            placement: K = "bottom",
            PopperComponent: Q,
            PopperProps: Z = {},
            slotProps: $ = {},
            slots: ee = {},
            title: et,
            TransitionComponent: eo,
            TransitionProps: er,
            ...en
          } = u,
          ei = r.isValidElement(O) ? O : (0, T.jsx)("span", { children: O }),
          ea = (0, f.A)(),
          ep = (0, p.I)(),
          [es, el] = r.useState(),
          [ec, ef] = r.useState(null),
          eu = r.useRef(!1),
          ed = N || U,
          em = (0, i.A)(),
          eh = (0, i.A)(),
          ev = (0, i.A)(),
          eg = (0, i.A)(),
          [ey, eb] = (0, w.A)({
            controlled: J,
            default: !1,
            name: "Tooltip",
            state: "open",
          }),
          ew = ey,
          ex = (0, b.A)(z),
          eO = r.useRef(),
          eA = (0, g.A)(() => {
            void 0 !== eO.current &&
              ((document.body.style.WebkitUserSelect = eO.current),
              (eO.current = void 0)),
              eg.clear();
          });
        r.useEffect(() => eA, [eA]);
        let eE = (e) => {
            S.clear(), (L = !0), eb(!0), G && !ew && G(e);
          },
          eR = (0, g.A)((e) => {
            S.start(800 + _, () => {
              L = !1;
            }),
              eb(!1),
              Y && ew && Y(e),
              em.start(ea.transitions.duration.shortest, () => {
                eu.current = !1;
              });
          }),
          eT = (e) => {
            (eu.current && "touchstart" !== e.type) ||
              (es && es.removeAttribute("title"),
              eh.clear(),
              ev.clear(),
              V || (L && F)
                ? eh.start(L ? F : V, () => {
                    eE(e);
                  })
                : eE(e));
          },
          ej = (e) => {
            eh.clear(),
              ev.start(_, () => {
                eR(e);
              });
          },
          [, eM] = r.useState(!1),
          eP = (e) => {
            (0, s.A)(e.target) || (eM(!1), ej(e));
          },
          ek = (e) => {
            es || el(e.currentTarget), (0, s.A)(e.target) && (eM(!0), eT(e));
          },
          eL = (e) => {
            eu.current = !0;
            let t = ei.props;
            t.onTouchStart && t.onTouchStart(e);
          };
        r.useEffect(() => {
          if (ew)
            return (
              document.addEventListener("keydown", e),
              () => {
                document.removeEventListener("keydown", e);
              }
            );
          function e(e) {
            "Escape" === e.key && eR(e);
          }
        }, [eR, ew]);
        let eS = (0, y.A)((0, l.A)(ei), el, t);
        et || 0 === et || (ew = !1);
        let eW = r.useRef(),
          eD = {},
          eB = "string" == typeof et;
        B
          ? ((eD.title = ew || !eB || H ? null : et),
            (eD["aria-describedby"] = ew ? ex : null))
          : ((eD["aria-label"] = eB ? et : null),
            (eD["aria-labelledby"] = ew && !eB ? ex : null));
        let eC = {
            ...eD,
            ...en,
            ...ei.props,
            className: (0, n.A)(en.className, ei.props.className),
            onTouchStart: eL,
            ref: eS,
            ...(U
              ? {
                  onMouseMove: (e) => {
                    let t = ei.props;
                    t.onMouseMove && t.onMouseMove(e),
                      (W = { x: e.clientX, y: e.clientY }),
                      eW.current && eW.current.update();
                  },
                }
              : {}),
          },
          eH = {};
        I ||
          ((eC.onTouchStart = (e) => {
            eL(e),
              ev.clear(),
              em.clear(),
              eA(),
              (eO.current = document.body.style.WebkitUserSelect),
              (document.body.style.WebkitUserSelect = "none"),
              eg.start(q, () => {
                (document.body.style.WebkitUserSelect = eO.current), eT(e);
              });
          }),
          (eC.onTouchEnd = (e) => {
            ei.props.onTouchEnd && ei.props.onTouchEnd(e),
              eA(),
              ev.start(X, () => {
                eR(e);
              });
          })),
          !H &&
            ((eC.onMouseOver = D(eT, eC.onMouseOver)),
            (eC.onMouseLeave = D(ej, eC.onMouseLeave)),
            ed || ((eH.onMouseOver = eT), (eH.onMouseLeave = ej))),
          !C &&
            ((eC.onFocus = D(ek, eC.onFocus)),
            (eC.onBlur = D(eP, eC.onBlur)),
            ed || ((eH.onFocus = ek), (eH.onBlur = eP)));
        let eN = {
            ...u,
            isRtl: ep,
            arrow: m,
            disableInteractive: ed,
            placement: K,
            PopperComponentProp: Q,
            touch: eu.current,
          },
          eI = "function" == typeof $.popper ? $.popper(eN) : $.popper,
          eV = r.useMemo(() => {
            var e, t;
            let o = [
              {
                name: "arrow",
                enabled: !!ec,
                options: { element: ec, padding: 4 },
              },
            ];
            return (
              (null == (e = Z.popperOptions) ? void 0 : e.modifiers) &&
                (o = o.concat(Z.popperOptions.modifiers)),
              (null == eI || null == (t = eI.popperOptions)
                ? void 0
                : t.modifiers) && (o = o.concat(eI.popperOptions.modifiers)),
              {
                ...Z.popperOptions,
                ...(null == eI ? void 0 : eI.popperOptions),
                modifiers: o,
              }
            );
          }, [ec, Z.popperOptions, null == eI ? void 0 : eI.popperOptions]),
          eF = j(eN),
          eq =
            "function" == typeof $.transition ? $.transition(eN) : $.transition,
          eU = {
            slots: {
              popper: E.Popper,
              transition: null != (o = E.Transition) ? o : eo,
              tooltip: E.Tooltip,
              arrow: E.Arrow,
              ...ee,
            },
            slotProps: {
              arrow: null != (a = $.arrow) ? a : R.arrow,
              popper: { ...Z, ...(null != eI ? eI : R.popper) },
              tooltip: null != (c = $.tooltip) ? c : R.tooltip,
              transition: { ...er, ...(null != eq ? eq : R.transition) },
            },
          },
          [ez, e_] = (0, x.A)("popper", {
            elementType: M,
            externalForwardedProps: eU,
            ownerState: eN,
            className: (0, n.A)(eF.popper, null == Z ? void 0 : Z.className),
          }),
          [eX, eY] = (0, x.A)("transition", {
            elementType: h.A,
            externalForwardedProps: eU,
            ownerState: eN,
          }),
          [eG, eJ] = (0, x.A)("tooltip", {
            elementType: P,
            className: eF.tooltip,
            externalForwardedProps: eU,
            ownerState: eN,
          }),
          [eK, eQ] = (0, x.A)("arrow", {
            elementType: k,
            className: eF.arrow,
            externalForwardedProps: eU,
            ownerState: eN,
            ref: ef,
          });
        return (0, T.jsxs)(r.Fragment, {
          children: [
            r.cloneElement(ei, eC),
            (0, T.jsx)(ez, {
              as: null != Q ? Q : v.A,
              placement: K,
              anchorEl: U
                ? {
                    getBoundingClientRect: () => ({
                      top: W.y,
                      left: W.x,
                      right: W.x,
                      bottom: W.y,
                      width: 0,
                      height: 0,
                    }),
                  }
                : es,
              popperRef: eW,
              open: !!es && ew,
              id: ex,
              transition: !0,
              ...eH,
              ...e_,
              popperOptions: eV,
              children: (e) => {
                let { TransitionProps: t } = e;
                return (0, T.jsx)(eX, {
                  timeout: ea.transitions.duration.shorter,
                  ...t,
                  ...eY,
                  children: (0, T.jsxs)(eG, {
                    ...eJ,
                    children: [et, m ? (0, T.jsx)(eK, { ...eQ }) : null],
                  }),
                });
              },
            }),
          ],
        });
      });
    },
  },
]);
