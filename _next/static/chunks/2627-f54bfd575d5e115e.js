"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2627],
  {
    22627: (e, t, r) => {
      let n;
      r.d(t, { A: () => m });
      var i = r(95155),
        s = r(12115),
        o = r(53856),
        a = r(58190),
        c = r(20343),
        d = r(66964),
        l = r(96107),
        u = r(19607);
      class g {
        receiveHandlerId(e) {
          this.handlerId !== e && ((this.handlerId = e), this.reconnect());
        }
        get connectTarget() {
          return this.dragSource;
        }
        get dragSourceOptions() {
          return this.dragSourceOptionsInternal;
        }
        set dragSourceOptions(e) {
          this.dragSourceOptionsInternal = e;
        }
        get dragPreviewOptions() {
          return this.dragPreviewOptionsInternal;
        }
        set dragPreviewOptions(e) {
          this.dragPreviewOptionsInternal = e;
        }
        reconnect() {
          let e = this.reconnectDragSource();
          this.reconnectDragPreview(e);
        }
        reconnectDragSource() {
          let e = this.dragSource,
            t =
              this.didHandlerIdChange() ||
              this.didConnectedDragSourceChange() ||
              this.didDragSourceOptionsChange();
          return (
            t && this.disconnectDragSource(),
            this.handlerId &&
              (e
                ? t &&
                  ((this.lastConnectedHandlerId = this.handlerId),
                  (this.lastConnectedDragSource = e),
                  (this.lastConnectedDragSourceOptions =
                    this.dragSourceOptions),
                  (this.dragSourceUnsubscribe = this.backend.connectDragSource(
                    this.handlerId,
                    e,
                    this.dragSourceOptions,
                  )))
                : (this.lastConnectedDragSource = e)),
            t
          );
        }
        reconnectDragPreview(e = !1) {
          let t = this.dragPreview,
            r =
              e ||
              this.didHandlerIdChange() ||
              this.didConnectedDragPreviewChange() ||
              this.didDragPreviewOptionsChange();
          if ((r && this.disconnectDragPreview(), this.handlerId)) {
            if (!t) {
              this.lastConnectedDragPreview = t;
              return;
            }
            r &&
              ((this.lastConnectedHandlerId = this.handlerId),
              (this.lastConnectedDragPreview = t),
              (this.lastConnectedDragPreviewOptions = this.dragPreviewOptions),
              (this.dragPreviewUnsubscribe = this.backend.connectDragPreview(
                this.handlerId,
                t,
                this.dragPreviewOptions,
              )));
          }
        }
        didHandlerIdChange() {
          return this.lastConnectedHandlerId !== this.handlerId;
        }
        didConnectedDragSourceChange() {
          return this.lastConnectedDragSource !== this.dragSource;
        }
        didConnectedDragPreviewChange() {
          return this.lastConnectedDragPreview !== this.dragPreview;
        }
        didDragSourceOptionsChange() {
          return !(0, d.b)(
            this.lastConnectedDragSourceOptions,
            this.dragSourceOptions,
          );
        }
        didDragPreviewOptionsChange() {
          return !(0, d.b)(
            this.lastConnectedDragPreviewOptions,
            this.dragPreviewOptions,
          );
        }
        disconnectDragSource() {
          this.dragSourceUnsubscribe &&
            (this.dragSourceUnsubscribe(),
            (this.dragSourceUnsubscribe = void 0));
        }
        disconnectDragPreview() {
          this.dragPreviewUnsubscribe &&
            (this.dragPreviewUnsubscribe(),
            (this.dragPreviewUnsubscribe = void 0),
            (this.dragPreviewNode = null),
            (this.dragPreviewRef = null));
        }
        get dragSource() {
          return (
            this.dragSourceNode ||
            (this.dragSourceRef && this.dragSourceRef.current)
          );
        }
        get dragPreview() {
          return (
            this.dragPreviewNode ||
            (this.dragPreviewRef && this.dragPreviewRef.current)
          );
        }
        clearDragSource() {
          (this.dragSourceNode = null), (this.dragSourceRef = null);
        }
        clearDragPreview() {
          (this.dragPreviewNode = null), (this.dragPreviewRef = null);
        }
        constructor(e) {
          (this.hooks = (0, u.i)({
            dragSource: (e, t) => {
              this.clearDragSource(),
                (this.dragSourceOptions = t || null),
                (0, l.i)(e)
                  ? (this.dragSourceRef = e)
                  : (this.dragSourceNode = e),
                this.reconnectDragSource();
            },
            dragPreview: (e, t) => {
              this.clearDragPreview(),
                (this.dragPreviewOptions = t || null),
                (0, l.i)(e)
                  ? (this.dragPreviewRef = e)
                  : (this.dragPreviewNode = e),
                this.reconnectDragPreview();
            },
          })),
            (this.handlerId = null),
            (this.dragSourceRef = null),
            (this.dragSourceOptionsInternal = null),
            (this.dragPreviewRef = null),
            (this.dragPreviewOptionsInternal = null),
            (this.lastConnectedHandlerId = null),
            (this.lastConnectedDragSource = null),
            (this.lastConnectedDragSourceOptions = null),
            (this.lastConnectedDragPreview = null),
            (this.lastConnectedDragPreviewOptions = null),
            (this.backend = e);
        }
      }
      var h = r(53767),
        p = r(46885);
      let f = !1,
        D = !1;
      class v {
        receiveHandlerId(e) {
          this.sourceId = e;
        }
        getHandlerId() {
          return this.sourceId;
        }
        canDrag() {
          (0, o.V)(
            !f,
            "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor",
          );
          try {
            return (f = !0), this.internalMonitor.canDragSource(this.sourceId);
          } finally {
            f = !1;
          }
        }
        isDragging() {
          if (!this.sourceId) return !1;
          (0, o.V)(
            !D,
            "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor",
          );
          try {
            return (
              (D = !0), this.internalMonitor.isDraggingSource(this.sourceId)
            );
          } finally {
            D = !1;
          }
        }
        subscribeToStateChange(e, t) {
          return this.internalMonitor.subscribeToStateChange(e, t);
        }
        isDraggingSource(e) {
          return this.internalMonitor.isDraggingSource(e);
        }
        isOverTarget(e, t) {
          return this.internalMonitor.isOverTarget(e, t);
        }
        getTargetIds() {
          return this.internalMonitor.getTargetIds();
        }
        isSourcePublic() {
          return this.internalMonitor.isSourcePublic();
        }
        getSourceId() {
          return this.internalMonitor.getSourceId();
        }
        subscribeToOffsetChange(e) {
          return this.internalMonitor.subscribeToOffsetChange(e);
        }
        canDragSource(e) {
          return this.internalMonitor.canDragSource(e);
        }
        canDropOnTarget(e) {
          return this.internalMonitor.canDropOnTarget(e);
        }
        getItemType() {
          return this.internalMonitor.getItemType();
        }
        getItem() {
          return this.internalMonitor.getItem();
        }
        getDropResult() {
          return this.internalMonitor.getDropResult();
        }
        didDrop() {
          return this.internalMonitor.didDrop();
        }
        getInitialClientOffset() {
          return this.internalMonitor.getInitialClientOffset();
        }
        getInitialSourceClientOffset() {
          return this.internalMonitor.getInitialSourceClientOffset();
        }
        getSourceClientOffset() {
          return this.internalMonitor.getSourceClientOffset();
        }
        getClientOffset() {
          return this.internalMonitor.getClientOffset();
        }
        getDifferenceFromInitialOffset() {
          return this.internalMonitor.getDifferenceFromInitialOffset();
        }
        constructor(e) {
          (this.sourceId = null), (this.internalMonitor = e.getMonitor());
        }
      }
      var S = r(8903);
      class w {
        beginDrag() {
          let e = this.spec,
            t = this.monitor,
            r = null;
          return null !=
            (r =
              "object" == typeof e.item
                ? e.item
                : "function" == typeof e.item
                  ? e.item(t)
                  : {})
            ? r
            : null;
        }
        canDrag() {
          let e = this.spec,
            t = this.monitor;
          return "boolean" == typeof e.canDrag
            ? e.canDrag
            : "function" != typeof e.canDrag || e.canDrag(t);
        }
        isDragging(e, t) {
          let r = this.spec,
            n = this.monitor,
            { isDragging: i } = r;
          return i ? i(n) : t === e.getSourceId();
        }
        endDrag() {
          let e = this.spec,
            t = this.monitor,
            r = this.connector,
            { end: n } = e;
          n && n(t.getItem(), t), r.reconnect();
        }
        constructor(e, t, r) {
          (this.spec = e), (this.monitor = t), (this.connector = r);
        }
      }
      var b = r(34540);
      function m(e) {
        var t, r, d, l;
        let u,
          {
            data: f,
            size: D = 50,
            currentOptionType: m,
            tourId: I,
            className: P,
            disableMargin: C = !1,
          } = e,
          O = null != (r = null != (t = f.url) ? t : f.src) ? r : "";
        u =
          /^(blob:|data:|https?:\/\/)/.test(O) || O.startsWith("/")
            ? O
            : O.startsWith("uploads/")
              ? "/".concat(O)
              : "/uploads/icons/".concat(O);
        let [y, M] = s.useState(!1),
          A = (0, b.d4)((e) => e.defaultIcons.categories),
          R = (0, b.d4)((e) => e.cartData.cartData),
          T = s.useMemo(() => {
            let e = new Map();
            for (let t of A)
              if (null == t ? void 0 : t.id) {
                let r =
                  "string" == typeof t.label && t.label.trim().length
                    ? t.label.trim()
                    : t.id;
                e.set(t.id, r);
              }
            return e;
          }, [A]),
          H = s.useMemo(() => {
            let e = "string" == typeof f.category ? f.category.trim() : "";
            if (e.length) return e;
            let t = T.get(m);
            return t && t.trim().length
              ? t.trim()
              : "__my_icons__" === m
                ? "My Icons"
                : m;
          }, [f.category, T, m]),
          k = "number" == typeof f.price ? f.price : 0,
          [{ isDragging: E }, x, N] = (function (e, t) {
            let r = (0, c.I)(e, t);
            (0, o.V)(
              !r.begin,
              "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)",
            );
            let n = (function () {
                let e = (0, h.u)();
                return (0, s.useMemo)(() => new v(e), [e]);
              })(),
              i = (function (e, t) {
                let r = (0, h.u)(),
                  n = (0, s.useMemo)(() => new g(r.getBackend()), [r]);
                return (
                  (0, p.E)(
                    () => (
                      (n.dragSourceOptions = e || null),
                      n.reconnect(),
                      () => n.disconnectDragSource()
                    ),
                    [n, e],
                  ),
                  (0, p.E)(
                    () => (
                      (n.dragPreviewOptions = t || null),
                      n.reconnect(),
                      () => n.disconnectDragPreview()
                    ),
                    [n, t],
                  ),
                  n
                );
              })(r.options, r.previewOptions);
            let d = (0, h.u)(),
              l = (function (e, t, r) {
                let n = (0, s.useMemo)(() => new w(e, t, r), [t, r]);
                return (
                  (0, s.useEffect)(() => {
                    n.spec = e;
                  }, [e]),
                  n
                );
              })(r, n, i),
              u = (0, s.useMemo)(() => {
                let e = r.type;
                return (0, o.V)(null != e, "spec.type must be defined"), e;
              }, [r]);
            return (
              (0, p.E)(
                function () {
                  if (null != u) {
                    let [e, t] = (0, S.V)(u, l, d);
                    return n.receiveHandlerId(e), i.receiveHandlerId(e), t;
                  }
                },
                [d, n, i, l, u],
              ),
              [
                (0, a.j)(r.collect, n, i),
                (0, s.useMemo)(() => i.hooks.dragSource(), [i]),
                (0, s.useMemo)(() => i.hooks.dragPreview(), [i]),
              ]
            );
          })(
            {
              type: "icon",
              item: () => ({ id: f.id, src: u, iconType: H, price: k }),
              collect: (e) => ({ isDragging: e.isDragging() }),
            },
            [f.id, u, H, k],
          );
        if (
          (s.useEffect(() => {
            N(
              (n ||
                ((n = new Image()).src =
                  "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
              n),
              { captureDraggingState: !0 },
            );
          }, [N]),
          !f.id || !O)
        )
          return null;
        let j = (null != (d = null == R ? void 0 : R.icons) ? d : []).some(
            (e) => e.options.some((e) => e.id === f.id),
          ),
          _ = Math.floor(0.8 * D),
          U = [
            "bg-white rounded-md shadow cursor-pointer",
            "border hover:border-blue-600",
            j ? "border-blue-600" : "border-transparent",
            E ? "opacity-50" : "opacity-100",
            "flex items-center justify-center",
            P,
          ]
            .filter((e) => !!e)
            .join(" ");
        return (0, i.jsx)("div", {
          ref: x,
          id: I,
          className: U,
          style: {
            width: D,
            height: D,
            margin: 4 * !C,
            boxSizing: "border-box",
            touchAction: "none",
            userSelect: "none",
          },
          children: (0, i.jsxs)("div", {
            style: { position: "relative", width: _, height: _ },
            children: [
              !y &&
                (0, i.jsx)("img", {
                  src: u,
                  alt: null != (l = f.name) ? l : f.id,
                  style: {
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  },
                  onError: () => M(!0),
                }),
              y &&
                (0, i.jsx)("div", {
                  className:
                    "text-[10px] text-red-500 flex items-center justify-center w-full h-full",
                  children: "broken icon",
                }),
            ],
          }),
        });
      }
    },
  },
]);
