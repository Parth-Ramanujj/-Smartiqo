"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9199],
  {
    69344: (e, t, r) => {
      r.d(t, { Q: () => J });
      var n,
        i = r(95155);
      function s(e) {
        return (
          "Minified Redux error #" +
          e +
          "; visit https://redux.js.org/Errors?code=" +
          e +
          " for the full message or use the non-minified dev environment for full errors. "
        );
      }
      var o =
          ("function" == typeof Symbol && Symbol.observable) || "@@observable",
        a = function () {
          return Math.random().toString(36).substring(7).split("").join(".");
        },
        u = {
          INIT: "@@redux/INIT" + a(),
          REPLACE: "@@redux/REPLACE" + a(),
          PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + a();
          },
        },
        l = r(53856);
      function d(e) {
        return "object" == typeof e;
      }
      let c = "dnd-core/INIT_COORDS",
        h = "dnd-core/BEGIN_DRAG",
        g = "dnd-core/PUBLISH_DRAG_SOURCE",
        f = "dnd-core/HOVER",
        p = "dnd-core/DROP",
        v = "dnd-core/END_DRAG";
      function y(e, t) {
        return {
          type: c,
          payload: { sourceClientOffset: t || null, clientOffset: e || null },
        };
      }
      let m = {
        type: c,
        payload: { clientOffset: null, sourceClientOffset: null },
      };
      function D(e, t) {
        return null === t
          ? null === e
          : Array.isArray(e)
            ? e.some((e) => e === t)
            : e === t;
      }
      class E {
        receiveBackend(e) {
          this.backend = e;
        }
        getMonitor() {
          return this.monitor;
        }
        getBackend() {
          return this.backend;
        }
        getRegistry() {
          return this.monitor.registry;
        }
        getActions() {
          var e, t, r, n, i;
          let s = this,
            { dispatch: o } = this.store,
            a = {
              beginDrag:
                ((e = this),
                function (t = [], r = { publishSource: !0 }) {
                  var n, i, s, o, a;
                  let {
                      publishSource: u = !0,
                      clientOffset: c,
                      getSourceClientOffset: g,
                    } = r,
                    f = e.getMonitor(),
                    p = e.getRegistry();
                  e.dispatch(y(c)),
                    (n = t),
                    (i = f),
                    (s = p),
                    (0, l.V)(
                      !i.isDragging(),
                      "Cannot call beginDrag while dragging.",
                    ),
                    n.forEach(function (e) {
                      (0, l.V)(
                        s.getSource(e),
                        "Expected sourceIds to be registered.",
                      );
                    });
                  let v = (function (e, t) {
                    let r = null;
                    for (let n = e.length - 1; n >= 0; n--)
                      if (t.canDragSource(e[n])) {
                        r = e[n];
                        break;
                      }
                    return r;
                  })(t, f);
                  if (null == v) return void e.dispatch(m);
                  let D = null;
                  if (c) {
                    if (!g)
                      throw Error("getSourceClientOffset must be defined");
                    (o = g),
                      (0, l.V)(
                        "function" == typeof o,
                        "When clientOffset is provided, getSourceClientOffset must be a function.",
                      ),
                      (D = g(v));
                  }
                  e.dispatch(y(c, D));
                  let E = p.getSource(v).beginDrag(f, v);
                  if (null != E) {
                    return (
                      (a = E),
                      (0, l.V)(d(a), "Item must be an object."),
                      p.pinSource(v),
                      {
                        type: h,
                        payload: {
                          itemType: p.getSourceType(v),
                          item: E,
                          sourceId: v,
                          clientOffset: c || null,
                          sourceClientOffset: D || null,
                          isSourcePublic: !!u,
                        },
                      }
                    );
                  }
                }),
              publishDragSource:
                ((t = this),
                function () {
                  if (t.getMonitor().isDragging()) return { type: g };
                }),
              hover:
                ((r = this),
                function (e, { clientOffset: t } = {}) {
                  var n, i, s, o;
                  (n = e),
                    (0, l.V)(
                      Array.isArray(n),
                      "Expected targetIds to be an array.",
                    );
                  let a = e.slice(0),
                    u = r.getMonitor(),
                    d = r.getRegistry();
                  return (
                    (function (e, t, r) {
                      for (let n = e.length - 1; n >= 0; n--) {
                        let i = e[n];
                        D(t.getTargetType(i), r) || e.splice(n, 1);
                      }
                    })(a, d, u.getItemType()),
                    (function (e, t, r) {
                      (0, l.V)(
                        t.isDragging(),
                        "Cannot call hover while not dragging.",
                      ),
                        (0, l.V)(!t.didDrop(), "Cannot call hover after drop.");
                      for (let t = 0; t < e.length; t++) {
                        let n = e[t];
                        (0, l.V)(
                          e.lastIndexOf(n) === t,
                          "Expected targetIds to be unique in the passed array.",
                        );
                        let i = r.getTarget(n);
                        (0, l.V)(i, "Expected targetIds to be registered.");
                      }
                    })(a, u, d),
                    (i = a),
                    (s = u),
                    (o = d),
                    i.forEach(function (e) {
                      o.getTarget(e).hover(s, e);
                    }),
                    {
                      type: f,
                      payload: { targetIds: a, clientOffset: t || null },
                    }
                  );
                }),
              drop:
                ((n = this),
                function (e = {}) {
                  var t;
                  let r = n.getMonitor(),
                    i = n.getRegistry();
                  (t = r),
                    (0, l.V)(
                      t.isDragging(),
                      "Cannot call drop while not dragging.",
                    ),
                    (0, l.V)(
                      !t.didDrop(),
                      "Cannot call drop twice during one drag operation.",
                    ),
                    (function (e) {
                      let t = e.getTargetIds().filter(e.canDropOnTarget, e);
                      return t.reverse(), t;
                    })(r).forEach((t, s) => {
                      let o = {
                        type: p,
                        payload: {
                          dropResult: (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                              var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                              "function" ==
                                typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                  Object.getOwnPropertySymbols(r).filter(
                                    function (e) {
                                      return Object.getOwnPropertyDescriptor(
                                        r,
                                        e,
                                      ).enumerable;
                                    },
                                  ),
                                )),
                                n.forEach(function (t) {
                                  var n;
                                  (n = r[t]),
                                    t in e
                                      ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                        })
                                      : (e[t] = n);
                                });
                            }
                            return e;
                          })(
                            {},
                            e,
                            (function (e, t, r, n) {
                              var i;
                              let s = r.getTarget(e),
                                o = s ? s.drop(n, e) : void 0;
                              return (
                                (i = o),
                                (0, l.V)(
                                  void 0 === i || d(i),
                                  "Drop result must either be an object or undefined.",
                                ),
                                void 0 === o &&
                                  (o = 0 === t ? {} : n.getDropResult()),
                                o
                              );
                            })(t, s, i, r),
                          ),
                        },
                      };
                      n.dispatch(o);
                    });
                }),
              endDrag:
                ((i = this),
                function () {
                  var e;
                  let t = i.getMonitor(),
                    r = i.getRegistry();
                  (e = t),
                    (0, l.V)(
                      e.isDragging(),
                      "Cannot call endDrag while not dragging.",
                    );
                  let n = t.getSourceId();
                  return (
                    null != n &&
                      (r.getSource(n, !0).endDrag(t, n), r.unpinSource()),
                    { type: v }
                  );
                }),
            };
          return Object.keys(a).reduce((e, t) => {
            let r = a[t];
            return (
              (e[t] = (...e) => {
                let t = r.apply(s, e);
                void 0 !== t && o(t);
              }),
              e
            );
          }, {});
        }
        dispatch(e) {
          this.store.dispatch(e);
        }
        constructor(e, t) {
          (this.isSetUp = !1),
            (this.handleRefCountChange = () => {
              let e = this.store.getState().refCount > 0;
              this.backend &&
                (e && !this.isSetUp
                  ? (this.backend.setup(), (this.isSetUp = !0))
                  : !e &&
                    this.isSetUp &&
                    (this.backend.teardown(), (this.isSetUp = !1)));
            }),
            (this.store = e),
            (this.monitor = t),
            e.subscribe(this.handleRefCountChange);
        }
      }
      function T(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      let O = [],
        S = [];
      (O.__IS_NONE__ = !0), (S.__IS_ALL__ = !0);
      class b {
        subscribeToStateChange(e, t = {}) {
          let { handlerIds: r } = t;
          (0, l.V)("function" == typeof e, "listener must be a function."),
            (0, l.V)(
              void 0 === r || Array.isArray(r),
              "handlerIds, when specified, must be an array of strings.",
            );
          let n = this.store.getState().stateId;
          return this.store.subscribe(() => {
            let t = this.store.getState(),
              i = t.stateId;
            try {
              i === n ||
                (i === n + 1 &&
                  !(function (e, t) {
                    return (
                      e !== O &&
                      (e === S ||
                        void 0 === t ||
                        t.filter((t) => e.indexOf(t) > -1).length > 0)
                    );
                  })(t.dirtyHandlerIds, r)) ||
                e();
            } finally {
              n = i;
            }
          });
        }
        subscribeToOffsetChange(e) {
          (0, l.V)("function" == typeof e, "listener must be a function.");
          let t = this.store.getState().dragOffset;
          return this.store.subscribe(() => {
            let r = this.store.getState().dragOffset;
            r !== t && ((t = r), e());
          });
        }
        canDragSource(e) {
          if (!e) return !1;
          let t = this.registry.getSource(e);
          return (
            (0, l.V)(t, `Expected to find a valid source. sourceId=${e}`),
            !this.isDragging() && t.canDrag(this, e)
          );
        }
        canDropOnTarget(e) {
          if (!e) return !1;
          let t = this.registry.getTarget(e);
          return (
            (0, l.V)(t, `Expected to find a valid target. targetId=${e}`),
            !(!this.isDragging() || this.didDrop()) &&
              D(this.registry.getTargetType(e), this.getItemType()) &&
              t.canDrop(this, e)
          );
        }
        isDragging() {
          return !!this.getItemType();
        }
        isDraggingSource(e) {
          if (!e) return !1;
          let t = this.registry.getSource(e, !0);
          return (
            (0, l.V)(t, `Expected to find a valid source. sourceId=${e}`),
            !!this.isDragging() &&
              !!this.isSourcePublic() &&
              this.registry.getSourceType(e) === this.getItemType() &&
              t.isDragging(this, e)
          );
        }
        isOverTarget(e, t = { shallow: !1 }) {
          if (!e) return !1;
          let { shallow: r } = t;
          if (!this.isDragging()) return !1;
          let n = this.registry.getTargetType(e),
            i = this.getItemType();
          if (i && !D(n, i)) return !1;
          let s = this.getTargetIds();
          if (!s.length) return !1;
          let o = s.indexOf(e);
          return r ? o === s.length - 1 : o > -1;
        }
        getItemType() {
          return this.store.getState().dragOperation.itemType;
        }
        getItem() {
          return this.store.getState().dragOperation.item;
        }
        getSourceId() {
          return this.store.getState().dragOperation.sourceId;
        }
        getTargetIds() {
          return this.store.getState().dragOperation.targetIds;
        }
        getDropResult() {
          return this.store.getState().dragOperation.dropResult;
        }
        didDrop() {
          return this.store.getState().dragOperation.didDrop;
        }
        isSourcePublic() {
          return !!this.store.getState().dragOperation.isSourcePublic;
        }
        getInitialClientOffset() {
          return this.store.getState().dragOffset.initialClientOffset;
        }
        getInitialSourceClientOffset() {
          return this.store.getState().dragOffset.initialSourceClientOffset;
        }
        getClientOffset() {
          return this.store.getState().dragOffset.clientOffset;
        }
        getSourceClientOffset() {
          return (function (e) {
            let {
              clientOffset: t,
              initialClientOffset: r,
              initialSourceClientOffset: n,
            } = e;
            return t && r && n ? T({ x: t.x + n.x, y: t.y + n.y }, r) : null;
          })(this.store.getState().dragOffset);
        }
        getDifferenceFromInitialOffset() {
          let { clientOffset: e, initialClientOffset: t } =
            this.store.getState().dragOffset;
          return e && t ? T(e, t) : null;
        }
        constructor(e, t) {
          (this.store = e), (this.registry = t);
        }
      }
      let I = "undefined" != typeof global ? global : self,
        w = I.MutationObserver || I.WebKitMutationObserver;
      function N(e) {
        return function () {
          let t = setTimeout(n, 0),
            r = setInterval(n, 50);
          function n() {
            clearTimeout(t), clearInterval(r), e();
          }
        };
      }
      let C =
        "function" == typeof w
          ? function (e) {
              let t = 1,
                r = new w(e),
                n = document.createTextNode("");
              return (
                r.observe(n, { characterData: !0 }),
                function () {
                  n.data = t = -t;
                }
              );
            }
          : N;
      class x {
        enqueueTask(e) {
          let { queue: t, requestFlush: r } = this;
          t.length || (r(), (this.flushing = !0)), (t[t.length] = e);
        }
        constructor() {
          (this.queue = []),
            (this.pendingErrors = []),
            (this.flushing = !1),
            (this.index = 0),
            (this.capacity = 1024),
            (this.flush = () => {
              let { queue: e } = this;
              for (; this.index < e.length; ) {
                let t = this.index;
                if ((this.index++, e[t].call(), this.index > this.capacity)) {
                  for (let t = 0, r = e.length - this.index; t < r; t++)
                    e[t] = e[t + this.index];
                  (e.length -= this.index), (this.index = 0);
                }
              }
              (e.length = 0), (this.index = 0), (this.flushing = !1);
            }),
            (this.registerPendingError = (e) => {
              this.pendingErrors.push(e), this.requestErrorThrow();
            }),
            (this.requestFlush = C(this.flush)),
            (this.requestErrorThrow = N(() => {
              if (this.pendingErrors.length) throw this.pendingErrors.shift();
            }));
        }
      }
      class P {
        call() {
          try {
            this.task && this.task();
          } catch (e) {
            this.onError(e);
          } finally {
            (this.task = null), this.release(this);
          }
        }
        constructor(e, t) {
          (this.onError = e), (this.release = t), (this.task = null);
        }
      }
      class R {
        create(e) {
          let t = this.freeTasks,
            r = t.length
              ? t.pop()
              : new P(this.onError, (e) => (t[t.length] = e));
          return (r.task = e), r;
        }
        constructor(e) {
          (this.onError = e), (this.freeTasks = []);
        }
      }
      let _ = new x(),
        L = new R(_.registerPendingError),
        A = "dnd-core/ADD_SOURCE",
        j = "dnd-core/ADD_TARGET",
        V = "dnd-core/REMOVE_SOURCE",
        k = "dnd-core/REMOVE_TARGET";
      function M(e, t) {
        if (t && Array.isArray(e)) return void e.forEach((e) => M(e, !1));
        (0, l.V)(
          "string" == typeof e || "symbol" == typeof e,
          t
            ? "Type can only be a string, a symbol, or an array of either."
            : "Type can only be a string or a symbol.",
        );
      }
      !(function (e) {
        (e.SOURCE = "SOURCE"), (e.TARGET = "TARGET");
      })(n || (n = {}));
      let H = 0;
      function U(e) {
        switch (e[0]) {
          case "S":
            return n.SOURCE;
          case "T":
            return n.TARGET;
          default:
            throw Error(`Cannot parse handler ID: ${e}`);
        }
      }
      function F(e, t) {
        let r = e.entries(),
          n = !1;
        do {
          let {
            done: e,
            value: [, i],
          } = r.next();
          if (i === t) return !0;
          n = !!e;
        } while (!n);
        return !1;
      }
      class G {
        addSource(e, t) {
          M(e),
            (0, l.V)(
              "function" == typeof t.canDrag,
              "Expected canDrag to be a function.",
            ),
            (0, l.V)(
              "function" == typeof t.beginDrag,
              "Expected beginDrag to be a function.",
            ),
            (0, l.V)(
              "function" == typeof t.endDrag,
              "Expected endDrag to be a function.",
            );
          let r = this.addHandler(n.SOURCE, e, t);
          return this.store.dispatch({ type: A, payload: { sourceId: r } }), r;
        }
        addTarget(e, t) {
          M(e, !0),
            (0, l.V)(
              "function" == typeof t.canDrop,
              "Expected canDrop to be a function.",
            ),
            (0, l.V)(
              "function" == typeof t.hover,
              "Expected hover to be a function.",
            ),
            (0, l.V)(
              "function" == typeof t.drop,
              "Expected beginDrag to be a function.",
            );
          let r = this.addHandler(n.TARGET, e, t);
          return this.store.dispatch({ type: j, payload: { targetId: r } }), r;
        }
        containsHandler(e) {
          return F(this.dragSources, e) || F(this.dropTargets, e);
        }
        getSource(e, t = !1) {
          return (
            (0, l.V)(this.isSourceId(e), "Expected a valid source ID."),
            t && e === this.pinnedSourceId
              ? this.pinnedSource
              : this.dragSources.get(e)
          );
        }
        getTarget(e) {
          return (
            (0, l.V)(this.isTargetId(e), "Expected a valid target ID."),
            this.dropTargets.get(e)
          );
        }
        getSourceType(e) {
          return (
            (0, l.V)(this.isSourceId(e), "Expected a valid source ID."),
            this.types.get(e)
          );
        }
        getTargetType(e) {
          return (
            (0, l.V)(this.isTargetId(e), "Expected a valid target ID."),
            this.types.get(e)
          );
        }
        isSourceId(e) {
          return U(e) === n.SOURCE;
        }
        isTargetId(e) {
          return U(e) === n.TARGET;
        }
        removeSource(e) {
          (0, l.V)(this.getSource(e), "Expected an existing source."),
            this.store.dispatch({ type: V, payload: { sourceId: e } }),
            _.enqueueTask(
              L.create(() => {
                this.dragSources.delete(e), this.types.delete(e);
              }),
            );
        }
        removeTarget(e) {
          (0, l.V)(this.getTarget(e), "Expected an existing target."),
            this.store.dispatch({ type: k, payload: { targetId: e } }),
            this.dropTargets.delete(e),
            this.types.delete(e);
        }
        pinSource(e) {
          let t = this.getSource(e);
          (0, l.V)(t, "Expected an existing source."),
            (this.pinnedSourceId = e),
            (this.pinnedSource = t);
        }
        unpinSource() {
          (0, l.V)(this.pinnedSource, "No source is pinned at the time."),
            (this.pinnedSourceId = null),
            (this.pinnedSource = null);
        }
        addHandler(e, t, r) {
          let i = (function (e) {
            let t = (H++).toString();
            switch (e) {
              case n.SOURCE:
                return `S${t}`;
              case n.TARGET:
                return `T${t}`;
              default:
                throw Error(`Unknown Handler Role: ${e}`);
            }
          })(e);
          return (
            this.types.set(i, t),
            e === n.SOURCE
              ? this.dragSources.set(i, r)
              : e === n.TARGET && this.dropTargets.set(i, r),
            i
          );
        }
        constructor(e) {
          (this.types = new Map()),
            (this.dragSources = new Map()),
            (this.dropTargets = new Map()),
            (this.pinnedSourceId = null),
            (this.pinnedSource = null),
            (this.store = e);
        }
      }
      let B = (e, t) => e === t,
        q = {
          initialSourceClientOffset: null,
          initialClientOffset: null,
          clientOffset: null,
        };
      function K(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              }),
            )),
            n.forEach(function (t) {
              var n;
              (n = r[t]),
                t in e
                  ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = n);
            });
        }
        return e;
      }
      let $ = {
        itemType: null,
        item: null,
        sourceId: null,
        targetIds: [],
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
      };
      function W(e = {}, t) {
        var r;
        return {
          dirtyHandlerIds: (function (e = O, t) {
            switch (t.type) {
              case f:
                break;
              case A:
              case j:
              case k:
              case V:
                return O;
              default:
                return S;
            }
            let { targetIds: r = [], prevTargetIds: n = [] } = t.payload,
              i = (function (e, t) {
                let r = new Map(),
                  n = (e) => {
                    r.set(e, r.has(e) ? r.get(e) + 1 : 1);
                  };
                e.forEach(n), t.forEach(n);
                let i = [];
                return (
                  r.forEach((e, t) => {
                    1 === e && i.push(t);
                  }),
                  i
                );
              })(r, n);
            if (
              !(
                i.length > 0 ||
                !(function (e, t, r = B) {
                  if (e.length !== t.length) return !1;
                  for (let n = 0; n < e.length; ++n)
                    if (!r(e[n], t[n])) return !1;
                  return !0;
                })(r, n)
              )
            )
              return O;
            let s = n[n.length - 1],
              o = r[r.length - 1];
            return s !== o && (s && i.push(s), o && i.push(o)), i;
          })(e.dirtyHandlerIds, {
            type: t.type,
            payload: (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                  n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                  (n = n.concat(
                    Object.getOwnPropertySymbols(r).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(r, e).enumerable;
                    }),
                  )),
                  n.forEach(function (t) {
                    var n;
                    (n = r[t]),
                      t in e
                        ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (e[t] = n);
                  });
              }
              return e;
            })({}, t.payload, {
              prevTargetIds:
                ((r = []),
                "dragOperation.targetIds"
                  .split(".")
                  .reduce((e, t) => (e && e[t] ? e[t] : r || null), e)),
            }),
          }),
          dragOffset: (function (e = q, t) {
            let { payload: r } = t;
            switch (t.type) {
              case c:
              case h:
                return {
                  initialSourceClientOffset: r.sourceClientOffset,
                  initialClientOffset: r.clientOffset,
                  clientOffset: r.clientOffset,
                };
              case f:
                var n, i;
                if (
                  ((n = e.clientOffset),
                  (i = r.clientOffset),
                  (!n && !i) || (n && i && n.x === i.x && n.y === i.y))
                )
                  return e;
                return (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                      n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols &&
                      (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                          return Object.getOwnPropertyDescriptor(r, e)
                            .enumerable;
                        }),
                      )),
                      n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                          t in e
                            ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                              })
                            : (e[t] = n);
                      });
                  }
                  return e;
                })({}, e, { clientOffset: r.clientOffset });
              case v:
              case p:
                return q;
              default:
                return e;
            }
          })(e.dragOffset, t),
          refCount: (function (e = 0, t) {
            switch (t.type) {
              case A:
              case j:
                return e + 1;
              case V:
              case k:
                return e - 1;
              default:
                return e;
            }
          })(e.refCount, t),
          dragOperation: (function (e = $, t) {
            let { payload: r } = t;
            switch (t.type) {
              case h:
                return K({}, e, {
                  itemType: r.itemType,
                  item: r.item,
                  sourceId: r.sourceId,
                  isSourcePublic: r.isSourcePublic,
                  dropResult: null,
                  didDrop: !1,
                });
              case g:
                return K({}, e, { isSourcePublic: !0 });
              case f:
                return K({}, e, { targetIds: r.targetIds });
              case k:
                var n, i;
                if (-1 === e.targetIds.indexOf(r.targetId)) return e;
                return K({}, e, {
                  targetIds:
                    ((n = e.targetIds),
                    (i = r.targetId),
                    n.filter((e) => e !== i)),
                });
              case p:
                return K({}, e, {
                  dropResult: r.dropResult,
                  didDrop: !0,
                  targetIds: [],
                });
              case v:
                return K({}, e, {
                  itemType: null,
                  item: null,
                  sourceId: null,
                  dropResult: null,
                  didDrop: !1,
                  isSourcePublic: null,
                  targetIds: [],
                });
              default:
                return e;
            }
          })(e.dragOperation, t),
          stateId: (function (e = 0) {
            return e + 1;
          })(e.stateId),
        };
      }
      var X = r(12115),
        z = r(47550);
      let Y = 0,
        Q = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
      var J = (0, X.memo)(function (e) {
        var t,
          { children: r } = e;
        let [n, a] =
          "manager" in
          (t = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  i = {},
                  s = Object.keys(e);
                for (n = 0; n < s.length; n++)
                  (r = s[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                return i;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var s = Object.getOwnPropertySymbols(e);
              for (n = 0; n < s.length; n++)
                (r = s[n]),
                  !(t.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (i[r] = e[r]);
            }
            return i;
          })(e, ["children"]))
            ? [{ dragDropManager: t.manager }, !1]
            : [
                (function (e, t = Z(), r, n) {
                  return (
                    t[Q] ||
                      (t[Q] = {
                        dragDropManager: (function (e, t, r = {}, n = !1) {
                          let i = (function (e) {
                              let t =
                                "undefined" != typeof window &&
                                window.__REDUX_DEVTOOLS_EXTENSION__;
                              return (function e(t, r, n) {
                                if (
                                  ("function" == typeof r &&
                                    "function" == typeof n) ||
                                  ("function" == typeof n &&
                                    "function" == typeof arguments[3])
                                )
                                  throw Error(s(0));
                                if (
                                  ("function" == typeof r &&
                                    void 0 === n &&
                                    ((n = r), (r = void 0)),
                                  void 0 !== n)
                                ) {
                                  if ("function" != typeof n) throw Error(s(1));
                                  return n(e)(t, r);
                                }
                                if ("function" != typeof t) throw Error(s(2));
                                var i,
                                  a = t,
                                  l = r,
                                  d = [],
                                  c = d,
                                  h = !1;
                                function g() {
                                  c === d && (c = d.slice());
                                }
                                function f() {
                                  if (h) throw Error(s(3));
                                  return l;
                                }
                                function p(e) {
                                  if ("function" != typeof e) throw Error(s(4));
                                  if (h) throw Error(s(5));
                                  var t = !0;
                                  return (
                                    g(),
                                    c.push(e),
                                    function () {
                                      if (t) {
                                        if (h) throw Error(s(6));
                                        (t = !1), g();
                                        var r = c.indexOf(e);
                                        c.splice(r, 1), (d = null);
                                      }
                                    }
                                  );
                                }
                                function v(e) {
                                  if (
                                    !(function (e) {
                                      if ("object" != typeof e || null === e)
                                        return !1;
                                      for (
                                        var t = e;
                                        null !== Object.getPrototypeOf(t);

                                      )
                                        t = Object.getPrototypeOf(t);
                                      return Object.getPrototypeOf(e) === t;
                                    })(e)
                                  )
                                    throw Error(s(7));
                                  if (void 0 === e.type) throw Error(s(8));
                                  if (h) throw Error(s(9));
                                  try {
                                    (h = !0), (l = a(l, e));
                                  } finally {
                                    h = !1;
                                  }
                                  for (
                                    var t = (d = c), r = 0;
                                    r < t.length;
                                    r++
                                  )
                                    (0, t[r])();
                                  return e;
                                }
                                return (
                                  v({ type: u.INIT }),
                                  ((i = {
                                    dispatch: v,
                                    subscribe: p,
                                    getState: f,
                                    replaceReducer: function (e) {
                                      if ("function" != typeof e)
                                        throw Error(s(10));
                                      (a = e), v({ type: u.REPLACE });
                                    },
                                  })[o] = function () {
                                    var e;
                                    return (
                                      ((e = {
                                        subscribe: function (e) {
                                          if (
                                            "object" != typeof e ||
                                            null === e
                                          )
                                            throw Error(s(11));
                                          function t() {
                                            e.next && e.next(f());
                                          }
                                          return t(), { unsubscribe: p(t) };
                                        },
                                      })[o] = function () {
                                        return this;
                                      }),
                                      e
                                    );
                                  }),
                                  i
                                );
                              })(
                                W,
                                e &&
                                  t &&
                                  t({
                                    name: "dnd-core",
                                    instanceId: "dnd-core",
                                  }),
                              );
                            })(n),
                            a = new b(i, new G(i)),
                            l = new E(i, a),
                            d = e(l, t, r);
                          return l.receiveBackend(d), l;
                        })(e, t, r, n),
                      }),
                    t[Q]
                  );
                })(t.backend, t.context, t.options, t.debugMode),
                !t.context,
              ];
        return (
          (0, X.useEffect)(() => {
            if (a) {
              let e = Z();
              return (
                ++Y,
                () => {
                  0 == --Y && (e[Q] = null);
                }
              );
            }
          }, []),
          (0, i.jsx)(z.M.Provider, { value: n, children: r })
        );
      });
      function Z() {
        return "undefined" != typeof global ? global : window;
      }
    },
    78236: (e, t, r) => {
      r.d(t, { t2: () => O });
      var n = {};
      function i(e) {
        let t = null;
        return () => (null == t && (t = e()), t);
      }
      r.r(n),
        r.d(n, { FILE: () => a, HTML: () => d, TEXT: () => l, URL: () => u });
      class s {
        enter(e) {
          let t = this.entered.length;
          return (
            (this.entered = (function (e, t) {
              let r = new Set(),
                n = (e) => r.add(e);
              e.forEach(n), t.forEach(n);
              let i = [];
              return r.forEach((e) => i.push(e)), i;
            })(
              this.entered.filter(
                (t) =>
                  this.isNodeInDocument(t) && (!t.contains || t.contains(e)),
              ),
              [e],
            )),
            0 === t && this.entered.length > 0
          );
        }
        leave(e) {
          var t;
          let r = this.entered.length;
          return (
            (this.entered =
              ((t = this.entered.filter(this.isNodeInDocument)),
              t.filter((t) => t !== e))),
            r > 0 && 0 === this.entered.length
          );
        }
        reset() {
          this.entered = [];
        }
        constructor(e) {
          (this.entered = []), (this.isNodeInDocument = e);
        }
      }
      class o {
        initializeExposedProperties() {
          Object.keys(this.config.exposeProperties).forEach((e) => {
            Object.defineProperty(this.item, e, {
              configurable: !0,
              enumerable: !0,
              get: () => (
                console.warn(
                  `Browser doesn't allow reading "${e}" until the drop event.`,
                ),
                null
              ),
            });
          });
        }
        loadDataTransfer(e) {
          if (e) {
            let t = {};
            Object.keys(this.config.exposeProperties).forEach((r) => {
              let n = this.config.exposeProperties[r];
              null != n &&
                (t[r] = {
                  value: n(e, this.config.matchesTypes),
                  configurable: !0,
                  enumerable: !0,
                });
            }),
              Object.defineProperties(this.item, t);
          }
        }
        canDrag() {
          return !0;
        }
        beginDrag() {
          return this.item;
        }
        isDragging(e, t) {
          return t === e.getSourceId();
        }
        endDrag() {}
        constructor(e) {
          (this.config = e),
            (this.item = {}),
            this.initializeExposedProperties();
        }
      }
      let a = "__NATIVE_FILE__",
        u = "__NATIVE_URL__",
        l = "__NATIVE_TEXT__",
        d = "__NATIVE_HTML__";
      function c(e, t, r) {
        let n = t.reduce((t, r) => t || e.getData(r), "");
        return null != n ? n : r;
      }
      let h = {
        [a]: {
          exposeProperties: {
            files: (e) => Array.prototype.slice.call(e.files),
            items: (e) => e.items,
            dataTransfer: (e) => e,
          },
          matchesTypes: ["Files"],
        },
        [d]: {
          exposeProperties: {
            html: (e, t) => c(e, t, ""),
            dataTransfer: (e) => e,
          },
          matchesTypes: ["Html", "text/html"],
        },
        [u]: {
          exposeProperties: {
            urls: (e, t) => c(e, t, "").split("\n"),
            dataTransfer: (e) => e,
          },
          matchesTypes: ["Url", "text/uri-list"],
        },
        [l]: {
          exposeProperties: {
            text: (e, t) => c(e, t, ""),
            dataTransfer: (e) => e,
          },
          matchesTypes: ["Text", "text/plain"],
        },
      };
      function g(e) {
        if (!e) return null;
        let t = Array.prototype.slice.call(e.types || []);
        return (
          Object.keys(h).filter((e) => {
            let r = h[e];
            return (
              !!(null == r ? void 0 : r.matchesTypes) &&
              r.matchesTypes.some((e) => t.indexOf(e) > -1)
            );
          })[0] || null
        );
      }
      let f = i(() => /firefox/i.test(navigator.userAgent)),
        p = i(() => !!window.safari);
      class v {
        interpolate(e) {
          let t,
            { xs: r, ys: n, c1s: i, c2s: s, c3s: o } = this,
            a = r.length - 1;
          if (e === r[a]) return n[a];
          let u = 0,
            l = o.length - 1;
          for (; u <= l; ) {
            let i = r[(t = Math.floor(0.5 * (u + l)))];
            if (i < e) u = t + 1;
            else {
              if (!(i > e)) return n[t];
              l = t - 1;
            }
          }
          let d = e - r[(a = Math.max(0, l))],
            c = d * d;
          return n[a] + i[a] * d + s[a] * c + o[a] * d * c;
        }
        constructor(e, t) {
          let r,
            n,
            i,
            { length: s } = e,
            o = [];
          for (let e = 0; e < s; e++) o.push(e);
          o.sort((t, r) => (e[t] < e[r] ? -1 : 1));
          let a = [],
            u = [],
            l = [];
          for (let i = 0; i < s - 1; i++)
            (r = e[i + 1] - e[i]),
              (n = t[i + 1] - t[i]),
              u.push(r),
              a.push(n),
              l.push(n / r);
          let d = [l[0]];
          for (let e = 0; e < u.length - 1; e++) {
            let t = l[e],
              n = l[e + 1];
            if (t * n <= 0) d.push(0);
            else {
              r = u[e];
              let i = u[e + 1],
                s = r + i;
              d.push((3 * s) / ((s + i) / t + (s + r) / n));
            }
          }
          d.push(l[l.length - 1]);
          let c = [],
            h = [];
          for (let e = 0; e < d.length - 1; e++) {
            i = l[e];
            let t = d[e],
              r = 1 / u[e],
              n = t + d[e + 1] - i - i;
            c.push((i - t - n) * r), h.push(n * r * r);
          }
          (this.xs = e),
            (this.ys = t),
            (this.c1s = d),
            (this.c2s = c),
            (this.c3s = h);
        }
      }
      function y(e) {
        let t = 1 === e.nodeType ? e : e.parentElement;
        if (!t) return null;
        let { top: r, left: n } = t.getBoundingClientRect();
        return { x: n, y: r };
      }
      function m(e) {
        return { x: e.clientX, y: e.clientY };
      }
      class D {
        get window() {
          return this.globalContext
            ? this.globalContext
            : "undefined" != typeof window
              ? window
              : void 0;
        }
        get document() {
          var e;
          return (null == (e = this.globalContext) ? void 0 : e.document)
            ? this.globalContext.document
            : this.window
              ? this.window.document
              : void 0;
        }
        get rootElement() {
          var e;
          return (
            (null == (e = this.optionsArgs) ? void 0 : e.rootElement) ||
            this.window
          );
        }
        constructor(e, t) {
          (this.ownerDocument = null),
            (this.globalContext = e),
            (this.optionsArgs = t);
        }
      }
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              }),
            )),
            n.forEach(function (t) {
              var n;
              (n = r[t]),
                t in e
                  ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = n);
            });
        }
        return e;
      }
      class T {
        profile() {
          var e, t;
          return {
            sourcePreviewNodes: this.sourcePreviewNodes.size,
            sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
            sourceNodeOptions: this.sourceNodeOptions.size,
            sourceNodes: this.sourceNodes.size,
            dragStartSourceIds:
              (null == (e = this.dragStartSourceIds) ? void 0 : e.length) || 0,
            dropTargetIds: this.dropTargetIds.length,
            dragEnterTargetIds: this.dragEnterTargetIds.length,
            dragOverTargetIds:
              (null == (t = this.dragOverTargetIds) ? void 0 : t.length) || 0,
          };
        }
        get window() {
          return this.options.window;
        }
        get document() {
          return this.options.document;
        }
        get rootElement() {
          return this.options.rootElement;
        }
        setup() {
          let e = this.rootElement;
          if (void 0 !== e) {
            if (e.__isReactDndBackendSetUp)
              throw Error("Cannot have two HTML5 backends at the same time.");
            (e.__isReactDndBackendSetUp = !0), this.addEventListeners(e);
          }
        }
        teardown() {
          let e = this.rootElement;
          if (
            void 0 !== e &&
            ((e.__isReactDndBackendSetUp = !1),
            this.removeEventListeners(this.rootElement),
            this.clearCurrentDragSourceNode(),
            this.asyncEndDragFrameId)
          ) {
            var t;
            null == (t = this.window) ||
              t.cancelAnimationFrame(this.asyncEndDragFrameId);
          }
        }
        connectDragPreview(e, t, r) {
          return (
            this.sourcePreviewNodeOptions.set(e, r),
            this.sourcePreviewNodes.set(e, t),
            () => {
              this.sourcePreviewNodes.delete(e),
                this.sourcePreviewNodeOptions.delete(e);
            }
          );
        }
        connectDragSource(e, t, r) {
          this.sourceNodes.set(e, t), this.sourceNodeOptions.set(e, r);
          let n = (t) => this.handleDragStart(t, e),
            i = (e) => this.handleSelectStart(e);
          return (
            t.setAttribute("draggable", "true"),
            t.addEventListener("dragstart", n),
            t.addEventListener("selectstart", i),
            () => {
              this.sourceNodes.delete(e),
                this.sourceNodeOptions.delete(e),
                t.removeEventListener("dragstart", n),
                t.removeEventListener("selectstart", i),
                t.setAttribute("draggable", "false");
            }
          );
        }
        connectDropTarget(e, t) {
          let r = (t) => this.handleDragEnter(t, e),
            n = (t) => this.handleDragOver(t, e),
            i = (t) => this.handleDrop(t, e);
          return (
            t.addEventListener("dragenter", r),
            t.addEventListener("dragover", n),
            t.addEventListener("drop", i),
            () => {
              t.removeEventListener("dragenter", r),
                t.removeEventListener("dragover", n),
                t.removeEventListener("drop", i);
            }
          );
        }
        addEventListeners(e) {
          e.addEventListener &&
            (e.addEventListener("dragstart", this.handleTopDragStart),
            e.addEventListener("dragstart", this.handleTopDragStartCapture, !0),
            e.addEventListener("dragend", this.handleTopDragEndCapture, !0),
            e.addEventListener("dragenter", this.handleTopDragEnter),
            e.addEventListener("dragenter", this.handleTopDragEnterCapture, !0),
            e.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0),
            e.addEventListener("dragover", this.handleTopDragOver),
            e.addEventListener("dragover", this.handleTopDragOverCapture, !0),
            e.addEventListener("drop", this.handleTopDrop),
            e.addEventListener("drop", this.handleTopDropCapture, !0));
        }
        removeEventListeners(e) {
          e.removeEventListener &&
            (e.removeEventListener("dragstart", this.handleTopDragStart),
            e.removeEventListener(
              "dragstart",
              this.handleTopDragStartCapture,
              !0,
            ),
            e.removeEventListener("dragend", this.handleTopDragEndCapture, !0),
            e.removeEventListener("dragenter", this.handleTopDragEnter),
            e.removeEventListener(
              "dragenter",
              this.handleTopDragEnterCapture,
              !0,
            ),
            e.removeEventListener(
              "dragleave",
              this.handleTopDragLeaveCapture,
              !0,
            ),
            e.removeEventListener("dragover", this.handleTopDragOver),
            e.removeEventListener(
              "dragover",
              this.handleTopDragOverCapture,
              !0,
            ),
            e.removeEventListener("drop", this.handleTopDrop),
            e.removeEventListener("drop", this.handleTopDropCapture, !0));
        }
        getCurrentSourceNodeOptions() {
          let e = this.monitor.getSourceId(),
            t = this.sourceNodeOptions.get(e);
          return E(
            { dropEffect: this.altKeyPressed ? "copy" : "move" },
            t || {},
          );
        }
        getCurrentDropEffect() {
          return this.isDraggingNativeItem()
            ? "copy"
            : this.getCurrentSourceNodeOptions().dropEffect;
        }
        getCurrentSourcePreviewNodeOptions() {
          let e = this.monitor.getSourceId();
          return E(
            { anchorX: 0.5, anchorY: 0.5, captureDraggingState: !1 },
            this.sourcePreviewNodeOptions.get(e) || {},
          );
        }
        isDraggingNativeItem() {
          let e = this.monitor.getItemType();
          return Object.keys(n).some((t) => n[t] === e);
        }
        beginDragNativeItem(e, t) {
          this.clearCurrentDragSourceNode(),
            (this.currentNativeSource = (function (e, t) {
              let r = h[e];
              if (!r) throw Error(`native type ${e} has no configuration`);
              let n = new o(r);
              return n.loadDataTransfer(t), n;
            })(e, t)),
            (this.currentNativeHandle = this.registry.addSource(
              e,
              this.currentNativeSource,
            )),
            this.actions.beginDrag([this.currentNativeHandle]);
        }
        setCurrentDragSourceNode(e) {
          this.clearCurrentDragSourceNode(),
            (this.currentDragSourceNode = e),
            (this.mouseMoveTimeoutTimer = setTimeout(() => {
              var e;
              return null == (e = this.rootElement)
                ? void 0
                : e.addEventListener(
                    "mousemove",
                    this.endDragIfSourceWasRemovedFromDOM,
                    !0,
                  );
            }, 1e3));
        }
        clearCurrentDragSourceNode() {
          if (this.currentDragSourceNode) {
            if (((this.currentDragSourceNode = null), this.rootElement)) {
              var e;
              null == (e = this.window) ||
                e.clearTimeout(this.mouseMoveTimeoutTimer || void 0),
                this.rootElement.removeEventListener(
                  "mousemove",
                  this.endDragIfSourceWasRemovedFromDOM,
                  !0,
                );
            }
            return (this.mouseMoveTimeoutTimer = null), !0;
          }
          return !1;
        }
        handleDragStart(e, t) {
          e.defaultPrevented ||
            (this.dragStartSourceIds || (this.dragStartSourceIds = []),
            this.dragStartSourceIds.unshift(t));
        }
        handleDragEnter(e, t) {
          this.dragEnterTargetIds.unshift(t);
        }
        handleDragOver(e, t) {
          null === this.dragOverTargetIds && (this.dragOverTargetIds = []),
            this.dragOverTargetIds.unshift(t);
        }
        handleDrop(e, t) {
          this.dropTargetIds.unshift(t);
        }
        constructor(e, t, r) {
          (this.sourcePreviewNodes = new Map()),
            (this.sourcePreviewNodeOptions = new Map()),
            (this.sourceNodes = new Map()),
            (this.sourceNodeOptions = new Map()),
            (this.dragStartSourceIds = null),
            (this.dropTargetIds = []),
            (this.dragEnterTargetIds = []),
            (this.currentNativeSource = null),
            (this.currentNativeHandle = null),
            (this.currentDragSourceNode = null),
            (this.altKeyPressed = !1),
            (this.mouseMoveTimeoutTimer = null),
            (this.asyncEndDragFrameId = null),
            (this.dragOverTargetIds = null),
            (this.lastClientOffset = null),
            (this.hoverRafId = null),
            (this.getSourceClientOffset = (e) => {
              let t = this.sourceNodes.get(e);
              return (t && y(t)) || null;
            }),
            (this.endDragNativeItem = () => {
              this.isDraggingNativeItem() &&
                (this.actions.endDrag(),
                this.currentNativeHandle &&
                  this.registry.removeSource(this.currentNativeHandle),
                (this.currentNativeHandle = null),
                (this.currentNativeSource = null));
            }),
            (this.isNodeInDocument = (e) =>
              !!(
                e &&
                this.document &&
                this.document.body &&
                this.document.body.contains(e)
              )),
            (this.endDragIfSourceWasRemovedFromDOM = () => {
              let e = this.currentDragSourceNode;
              null == e ||
                this.isNodeInDocument(e) ||
                (this.clearCurrentDragSourceNode() &&
                  this.monitor.isDragging() &&
                  this.actions.endDrag(),
                this.cancelHover());
            }),
            (this.scheduleHover = (e) => {
              null === this.hoverRafId &&
                "undefined" != typeof requestAnimationFrame &&
                (this.hoverRafId = requestAnimationFrame(() => {
                  this.monitor.isDragging() &&
                    this.actions.hover(e || [], {
                      clientOffset: this.lastClientOffset,
                    }),
                    (this.hoverRafId = null);
                }));
            }),
            (this.cancelHover = () => {
              null !== this.hoverRafId &&
                "undefined" != typeof cancelAnimationFrame &&
                (cancelAnimationFrame(this.hoverRafId),
                (this.hoverRafId = null));
            }),
            (this.handleTopDragStartCapture = () => {
              this.clearCurrentDragSourceNode(), (this.dragStartSourceIds = []);
            }),
            (this.handleTopDragStart = (e) => {
              if (e.defaultPrevented) return;
              let { dragStartSourceIds: t } = this;
              this.dragStartSourceIds = null;
              let r = m(e);
              this.monitor.isDragging() &&
                (this.actions.endDrag(), this.cancelHover()),
                this.actions.beginDrag(t || [], {
                  publishSource: !1,
                  getSourceClientOffset: this.getSourceClientOffset,
                  clientOffset: r,
                });
              let { dataTransfer: n } = e,
                i = g(n);
              if (this.monitor.isDragging()) {
                if (n && "function" == typeof n.setDragImage) {
                  let e = this.monitor.getSourceId(),
                    t = this.sourceNodes.get(e),
                    i = this.sourcePreviewNodes.get(e) || t;
                  if (i) {
                    let {
                        anchorX: e,
                        anchorY: s,
                        offsetX: o,
                        offsetY: a,
                      } = this.getCurrentSourcePreviewNodeOptions(),
                      u = (function (e, t, r, n, i) {
                        var s;
                        let o,
                          a,
                          u,
                          l =
                            "IMG" === t.nodeName &&
                            (f() ||
                              !(null == (s = document.documentElement)
                                ? void 0
                                : s.contains(t))),
                          d = y(l ? e : t),
                          c = { x: r.x - d.x, y: r.y - d.y },
                          { offsetWidth: h, offsetHeight: g } = e,
                          { anchorX: m, anchorY: D } = n,
                          { dragPreviewWidth: E, dragPreviewHeight: T } =
                            ((o = l ? t.width : h),
                            (a = l ? t.height : g),
                            p() &&
                              l &&
                              ((a /= window.devicePixelRatio),
                              (o /= window.devicePixelRatio)),
                            { dragPreviewWidth: o, dragPreviewHeight: a }),
                          { offsetX: O, offsetY: S } = i;
                        return {
                          x:
                            0 === O || O
                              ? O
                              : new v(
                                  [0, 0.5, 1],
                                  [c.x, (c.x / h) * E, c.x + E - h],
                                ).interpolate(m),
                          y:
                            0 === S || S
                              ? S
                              : ((u = new v(
                                  [0, 0.5, 1],
                                  [c.y, (c.y / g) * T, c.y + T - g],
                                ).interpolate(D)),
                                p() &&
                                  l &&
                                  (u += (window.devicePixelRatio - 1) * T),
                                u),
                        };
                      })(
                        t,
                        i,
                        r,
                        { anchorX: e, anchorY: s },
                        { offsetX: o, offsetY: a },
                      );
                    n.setDragImage(i, u.x, u.y);
                  }
                }
                try {
                  null == n || n.setData("application/json", {});
                } catch (e) {}
                this.setCurrentDragSourceNode(e.target);
                let { captureDraggingState: t } =
                  this.getCurrentSourcePreviewNodeOptions();
                t
                  ? this.actions.publishDragSource()
                  : setTimeout(() => this.actions.publishDragSource(), 0);
              } else if (i) this.beginDragNativeItem(i);
              else {
                if (
                  n &&
                  !n.types &&
                  ((e.target && !e.target.hasAttribute) ||
                    !e.target.hasAttribute("draggable"))
                )
                  return;
                e.preventDefault();
              }
            }),
            (this.handleTopDragEndCapture = () => {
              this.clearCurrentDragSourceNode() &&
                this.monitor.isDragging() &&
                this.actions.endDrag(),
                this.cancelHover();
            }),
            (this.handleTopDragEnterCapture = (e) => {
              if (
                ((this.dragEnterTargetIds = []), this.isDraggingNativeItem())
              ) {
                var t;
                null == (t = this.currentNativeSource) ||
                  t.loadDataTransfer(e.dataTransfer);
              }
              if (
                !this.enterLeaveCounter.enter(e.target) ||
                this.monitor.isDragging()
              )
                return;
              let { dataTransfer: r } = e,
                n = g(r);
              n && this.beginDragNativeItem(n, r);
            }),
            (this.handleTopDragEnter = (e) => {
              let { dragEnterTargetIds: t } = this;
              (this.dragEnterTargetIds = []),
                this.monitor.isDragging() &&
                  ((this.altKeyPressed = e.altKey),
                  t.length > 0 && this.actions.hover(t, { clientOffset: m(e) }),
                  t.some((e) => this.monitor.canDropOnTarget(e)) &&
                    (e.preventDefault(),
                    e.dataTransfer &&
                      (e.dataTransfer.dropEffect =
                        this.getCurrentDropEffect())));
            }),
            (this.handleTopDragOverCapture = (e) => {
              if (
                ((this.dragOverTargetIds = []), this.isDraggingNativeItem())
              ) {
                var t;
                null == (t = this.currentNativeSource) ||
                  t.loadDataTransfer(e.dataTransfer);
              }
            }),
            (this.handleTopDragOver = (e) => {
              let { dragOverTargetIds: t } = this;
              if (((this.dragOverTargetIds = []), !this.monitor.isDragging())) {
                e.preventDefault(),
                  e.dataTransfer && (e.dataTransfer.dropEffect = "none");
                return;
              }
              (this.altKeyPressed = e.altKey),
                (this.lastClientOffset = m(e)),
                this.scheduleHover(t),
                (t || []).some((e) => this.monitor.canDropOnTarget(e))
                  ? (e.preventDefault(),
                    e.dataTransfer &&
                      (e.dataTransfer.dropEffect = this.getCurrentDropEffect()))
                  : this.isDraggingNativeItem()
                    ? e.preventDefault()
                    : (e.preventDefault(),
                      e.dataTransfer && (e.dataTransfer.dropEffect = "none"));
            }),
            (this.handleTopDragLeaveCapture = (e) => {
              this.isDraggingNativeItem() && e.preventDefault(),
                this.enterLeaveCounter.leave(e.target) &&
                  (this.isDraggingNativeItem() &&
                    setTimeout(() => this.endDragNativeItem(), 0),
                  this.cancelHover());
            }),
            (this.handleTopDropCapture = (e) => {
              if (((this.dropTargetIds = []), this.isDraggingNativeItem())) {
                var t;
                e.preventDefault(),
                  null == (t = this.currentNativeSource) ||
                    t.loadDataTransfer(e.dataTransfer);
              } else g(e.dataTransfer) && e.preventDefault();
              this.enterLeaveCounter.reset();
            }),
            (this.handleTopDrop = (e) => {
              let { dropTargetIds: t } = this;
              (this.dropTargetIds = []),
                this.actions.hover(t, { clientOffset: m(e) }),
                this.actions.drop({ dropEffect: this.getCurrentDropEffect() }),
                this.isDraggingNativeItem()
                  ? this.endDragNativeItem()
                  : this.monitor.isDragging() && this.actions.endDrag(),
                this.cancelHover();
            }),
            (this.handleSelectStart = (e) => {
              let t = e.target;
              "function" == typeof t.dragDrop &&
                ("INPUT" === t.tagName ||
                  "SELECT" === t.tagName ||
                  "TEXTAREA" === t.tagName ||
                  t.isContentEditable ||
                  (e.preventDefault(), t.dragDrop()));
            }),
            (this.options = new D(t, r)),
            (this.actions = e.getActions()),
            (this.monitor = e.getMonitor()),
            (this.registry = e.getRegistry()),
            (this.enterLeaveCounter = new s(this.isNodeInDocument));
        }
      }
      let O = function (e, t, r) {
        return new T(e, t, r);
      };
    },
  },
]);
