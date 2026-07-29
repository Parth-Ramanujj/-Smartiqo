(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9805],
  {
    19087: (t) => {
      !(function () {
        "use strict";
        var e = {
            864: function (t) {
              var e,
                o = "object" == typeof Reflect ? Reflect : null,
                i =
                  o && "function" == typeof o.apply
                    ? o.apply
                    : function (t, e, o) {
                        return Function.prototype.apply.call(t, e, o);
                      };
              e =
                o && "function" == typeof o.ownKeys
                  ? o.ownKeys
                  : Object.getOwnPropertySymbols
                    ? function (t) {
                        return Object.getOwnPropertyNames(t).concat(
                          Object.getOwnPropertySymbols(t),
                        );
                      }
                    : function (t) {
                        return Object.getOwnPropertyNames(t);
                      };
              var s =
                Number.isNaN ||
                function (t) {
                  return t != t;
                };
              function r() {
                r.init.call(this);
              }
              (t.exports = r),
                (t.exports.once = function (t, e) {
                  return new Promise(function (o, i) {
                    var s, r, n;
                    function a(o) {
                      t.removeListener(e, l), i(o);
                    }
                    function l() {
                      "function" == typeof t.removeListener &&
                        t.removeListener("error", a),
                        o([].slice.call(arguments));
                    }
                    y(t, e, l, { once: !0 }),
                      "error" !== e &&
                        ((s = t),
                        (r = a),
                        (n = { once: !0 }),
                        "function" == typeof s.on && y(s, "error", r, n));
                  });
                }),
                (r.EventEmitter = r),
                (r.prototype._events = void 0),
                (r.prototype._eventsCount = 0),
                (r.prototype._maxListeners = void 0);
              var n = 10;
              function a(t) {
                if ("function" != typeof t)
                  throw TypeError(
                    'The "listener" argument must be of type Function. Received type ' +
                      typeof t,
                  );
              }
              function l(t) {
                return void 0 === t._maxListeners
                  ? r.defaultMaxListeners
                  : t._maxListeners;
              }
              function u(t, e, o, i) {
                if (
                  (a(o),
                  void 0 === (r = t._events)
                    ? ((r = t._events = Object.create(null)),
                      (t._eventsCount = 0))
                    : (void 0 !== r.newListener &&
                        (t.emit("newListener", e, o.listener ? o.listener : o),
                        (r = t._events)),
                      (n = r[e])),
                  void 0 === n)
                )
                  (n = r[e] = o), ++t._eventsCount;
                else if (
                  ("function" == typeof n
                    ? (n = r[e] = i ? [o, n] : [n, o])
                    : i
                      ? n.unshift(o)
                      : n.push(o),
                  (s = l(t)) > 0 && n.length > s && !n.warned)
                ) {
                  n.warned = !0;
                  var s,
                    r,
                    n,
                    u = Error(
                      "Possible EventEmitter memory leak detected. " +
                        n.length +
                        " " +
                        String(e) +
                        " listeners added. Use emitter.setMaxListeners() to increase limit",
                    );
                  (u.name = "MaxListenersExceededWarning"),
                    (u.emitter = t),
                    (u.type = e),
                    (u.count = n.length),
                    console && console.warn && console.warn(u);
                }
                return t;
              }
              function h() {
                if (!this.fired)
                  return (this.target.removeListener(this.type, this.wrapFn),
                  (this.fired = !0),
                  0 == arguments.length)
                    ? this.listener.call(this.target)
                    : this.listener.apply(this.target, arguments);
              }
              function c(t, e, o) {
                var i = {
                    fired: !1,
                    wrapFn: void 0,
                    target: t,
                    type: e,
                    listener: o,
                  },
                  s = h.bind(i);
                return (s.listener = o), (i.wrapFn = s), s;
              }
              function d(t, e, o) {
                var i = t._events;
                if (void 0 === i) return [];
                var s = i[e];
                return void 0 === s
                  ? []
                  : "function" == typeof s
                    ? o
                      ? [s.listener || s]
                      : [s]
                    : o
                      ? (function (t) {
                          for (
                            var e = Array(t.length), o = 0;
                            o < e.length;
                            ++o
                          )
                            e[o] = t[o].listener || t[o];
                          return e;
                        })(s)
                      : m(s, s.length);
              }
              function p(t) {
                var e = this._events;
                if (void 0 !== e) {
                  var o = e[t];
                  if ("function" == typeof o) return 1;
                  if (void 0 !== o) return o.length;
                }
                return 0;
              }
              function m(t, e) {
                for (var o = Array(e), i = 0; i < e; ++i) o[i] = t[i];
                return o;
              }
              function y(t, e, o, i) {
                if ("function" == typeof t.on)
                  i.once ? t.once(e, o) : t.on(e, o);
                else if ("function" == typeof t.addEventListener)
                  t.addEventListener(e, function s(r) {
                    i.once && t.removeEventListener(e, s), o(r);
                  });
                else
                  throw TypeError(
                    'The "emitter" argument must be of type EventEmitter. Received type ' +
                      typeof t,
                  );
              }
              Object.defineProperty(r, "defaultMaxListeners", {
                enumerable: !0,
                get: function () {
                  return n;
                },
                set: function (t) {
                  if ("number" != typeof t || t < 0 || s(t))
                    throw RangeError(
                      'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                        t +
                        ".",
                    );
                  n = t;
                },
              }),
                (r.init = function () {
                  (void 0 === this._events ||
                    this._events === Object.getPrototypeOf(this)._events) &&
                    ((this._events = Object.create(null)),
                    (this._eventsCount = 0)),
                    (this._maxListeners = this._maxListeners || void 0);
                }),
                (r.prototype.setMaxListeners = function (t) {
                  if ("number" != typeof t || t < 0 || s(t))
                    throw RangeError(
                      'The value of "n" is out of range. It must be a non-negative number. Received ' +
                        t +
                        ".",
                    );
                  return (this._maxListeners = t), this;
                }),
                (r.prototype.getMaxListeners = function () {
                  return l(this);
                }),
                (r.prototype.emit = function (t) {
                  for (var e = [], o = 1; o < arguments.length; o++)
                    e.push(arguments[o]);
                  var s = "error" === t,
                    r = this._events;
                  if (void 0 !== r) s = s && void 0 === r.error;
                  else if (!s) return !1;
                  if (s) {
                    if ((e.length > 0 && (n = e[0]), n instanceof Error))
                      throw n;
                    var n,
                      a = Error(
                        "Unhandled error." + (n ? " (" + n.message + ")" : ""),
                      );
                    throw ((a.context = n), a);
                  }
                  var l = r[t];
                  if (void 0 === l) return !1;
                  if ("function" == typeof l) i(l, this, e);
                  else
                    for (var u = l.length, h = m(l, u), o = 0; o < u; ++o)
                      i(h[o], this, e);
                  return !0;
                }),
                (r.prototype.addListener = function (t, e) {
                  return u(this, t, e, !1);
                }),
                (r.prototype.on = r.prototype.addListener),
                (r.prototype.prependListener = function (t, e) {
                  return u(this, t, e, !0);
                }),
                (r.prototype.once = function (t, e) {
                  return a(e), this.on(t, c(this, t, e)), this;
                }),
                (r.prototype.prependOnceListener = function (t, e) {
                  return a(e), this.prependListener(t, c(this, t, e)), this;
                }),
                (r.prototype.removeListener = function (t, e) {
                  var o, i, s, r, n;
                  if (
                    (a(e),
                    void 0 === (i = this._events) || void 0 === (o = i[t]))
                  )
                    return this;
                  if (o === e || o.listener === e)
                    0 == --this._eventsCount
                      ? (this._events = Object.create(null))
                      : (delete i[t],
                        i.removeListener &&
                          this.emit("removeListener", t, o.listener || e));
                  else if ("function" != typeof o) {
                    for (s = -1, r = o.length - 1; r >= 0; r--)
                      if (o[r] === e || o[r].listener === e) {
                        (n = o[r].listener), (s = r);
                        break;
                      }
                    if (s < 0) return this;
                    0 === s
                      ? o.shift()
                      : (function (t, e) {
                          for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                          t.pop();
                        })(o, s),
                      1 === o.length && (i[t] = o[0]),
                      void 0 !== i.removeListener &&
                        this.emit("removeListener", t, n || e);
                  }
                  return this;
                }),
                (r.prototype.off = r.prototype.removeListener),
                (r.prototype.removeAllListeners = function (t) {
                  var e, o, i;
                  if (void 0 === (o = this._events)) return this;
                  if (void 0 === o.removeListener)
                    return (
                      0 == arguments.length
                        ? ((this._events = Object.create(null)),
                          (this._eventsCount = 0))
                        : void 0 !== o[t] &&
                          (0 == --this._eventsCount
                            ? (this._events = Object.create(null))
                            : delete o[t]),
                      this
                    );
                  if (0 == arguments.length) {
                    var s,
                      r = Object.keys(o);
                    for (i = 0; i < r.length; ++i)
                      "removeListener" !== (s = r[i]) &&
                        this.removeAllListeners(s);
                    return (
                      this.removeAllListeners("removeListener"),
                      (this._events = Object.create(null)),
                      (this._eventsCount = 0),
                      this
                    );
                  }
                  if ("function" == typeof (e = o[t]))
                    this.removeListener(t, e);
                  else if (void 0 !== e)
                    for (i = e.length - 1; i >= 0; i--)
                      this.removeListener(t, e[i]);
                  return this;
                }),
                (r.prototype.listeners = function (t) {
                  return d(this, t, !0);
                }),
                (r.prototype.rawListeners = function (t) {
                  return d(this, t, !1);
                }),
                (r.listenerCount = function (t, e) {
                  return "function" == typeof t.listenerCount
                    ? t.listenerCount(e)
                    : p.call(t, e);
                }),
                (r.prototype.listenerCount = p),
                (r.prototype.eventNames = function () {
                  return this._eventsCount > 0 ? e(this._events) : [];
                });
            },
          },
          o = {};
        function i(t) {
          var s = o[t];
          if (void 0 !== s) return s.exports;
          var r = (o[t] = { exports: {} }),
            n = !0;
          try {
            e[t](r, r.exports, i), (n = !1);
          } finally {
            n && delete o[t];
          }
          return r.exports;
        }
        (i.ab = "//"), (t.exports = i(864));
      })();
    },
    59805: (t, e, o) => {
      "use strict";
      o.d(e, { A: () => d });
      var i = o(19087),
        s = o(92927),
        r = o(97781),
        n = o(1743),
        a = o(99511),
        l = o(27363);
      let u = {
        active: !1,
        step: 0,
        locked: !1,
        overlay: {
          blur: !1,
          logoVisible: !1,
          dotVisible: !1,
          dotTargetId: null,
        },
        audio: { currentKey: null, isPlaying: !1 },
        guards: { allowOnlySelectors: [] },
      };
      class h extends i.EventEmitter {
        subscribe(t) {
          return this.on("change", t), () => this.off("change", t);
        }
        emitChange() {
          this.emit("change");
        }
        setState(t) {
          (this.state = { ...this.state, ...t }), this.emitChange();
        }
        startTutorial() {
          this.preloadAudio(),
            this.setState({
              active: !0,
              step: 0,
              overlay: { ...this.state.overlay, blur: !0, logoVisible: !0 },
            }),
            (this.firstDropId = null),
            this.playAudio("Intro", () => {
              this.showOverlay({ blur: !1, logoVisible: !1 }), this.go(1);
            });
        }
        stopTutorial(t) {
          let { resetToStep1: e } = t;
          this.stopAudio(),
            this.clearHighlights(),
            this.stopSlideLoop(),
            this.destroySlideGhost(),
            (this.firstDropId = null),
            this.setState({ ...u, step: e ? 1 : this.state.step });
        }
        go(t) {
          this.setState({ step: t }), this.runStep(t);
        }
        playAudio(t, e) {
          if (!this.audioEl) return;
          this.stopAudio();
          let o = this.audioMap[t];
          o &&
            ("step5d" === t && (this.stopSlideLoop(), this.destroySlideGhost()),
            (this.audioEl.src = o),
            (this.audioEl.loop = !1),
            (this.audioEl.onended = () => {
              this.setState({ audio: { currentKey: null, isPlaying: !1 } }),
                e && e();
            }),
            this.audioEl.play().catch((t) => {}),
            this.setState({ audio: { currentKey: t, isPlaying: !0 } }));
        }
        stopAudio() {
          this.audioEl &&
            (this.audioEl.pause(), (this.audioEl.currentTime = 0)),
            this.setState({ audio: { currentKey: null, isPlaying: !1 } });
        }
        showOverlay(t) {
          let { blur: e, logoVisible: o } = t;
          this.setState({
            overlay: { ...this.state.overlay, blur: e, logoVisible: o },
          });
        }
        pointAt(t) {
          this.setState({
            overlay: { ...this.state.overlay, dotVisible: !!t, dotTargetId: t },
          });
        }
        lockTo(t) {
          this.setState({ locked: !0, guards: { allowOnlySelectors: t } });
        }
        unlock() {
          this.setState({ locked: !1, guards: { allowOnlySelectors: [] } });
        }
        highlightAndDisable(t) {
          let e = document.querySelector(t);
          e &&
            (e.classList.add("tutorial-shine"),
            e.addEventListener("click", this.disabledHandler, !0));
        }
        clearHighlights() {
          document.querySelectorAll(".tutorial-shine").forEach((t) => {
            t.classList.remove("tutorial-shine"),
              t.removeEventListener("click", this.disabledHandler, !0);
          });
        }
        matches(t, e) {
          if (!t) return !1;
          let o = t;
          for (; o; ) {
            if (o.matches(e)) return !0;
            o = o.parentElement;
          }
          return !1;
        }
        queryHtmlElement(t) {
          let e = document.querySelector(t);
          return e instanceof HTMLElement ? e : null;
        }
        onceClick(t, e) {
          let o = (i) => {
            this.matches(i.target, t) &&
              (document.removeEventListener("click", o, !0), e());
          };
          document.addEventListener("click", o, !0);
        }
        advanceAppNextAndGo(t) {
          let e = this.queryHtmlElement("#tour-next");
          if (!e || e.disabled || e.hasAttribute("disabled"))
            try {
              let t = s.store.getState();
              s.store.dispatch((0, a.sk)(t.cartData.cartData));
            } catch (t) {}
          else requestAnimationFrame(() => e.click());
          this.go(t);
        }
        waitFor(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 6e3,
            o = Date.now();
          return new Promise((i, s) => {
            let r = () => {
              let n = this.queryHtmlElement(t);
              return n
                ? i(n)
                : Date.now() - o > e
                  ? s(Error("waitFor timeout: ".concat(t)))
                  : void setTimeout(r, 60);
            };
            r();
          });
        }
        whenEnabled(t, e) {
          let o = Date.now(),
            i = () => {
              let s = this.queryHtmlElement(t);
              !s || s.disabled || s.hasAttribute("disabled")
                ? Date.now() - o < 5e3 && setTimeout(i, 50)
                : e();
            };
          i();
        }
        animateDot(t, e) {
          let o =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 600;
          return new Promise((i) => {
            this.pointAt(t),
              setTimeout(() => {
                this.pointAt(e), setTimeout(() => i(), o);
              }, 50);
          });
        }
        getCenter(t) {
          let e = document.querySelector(t);
          if (!e) return null;
          let o = e.getBoundingClientRect();
          return { x: o.left + o.width / 2, y: o.top + o.height / 2 };
        }
        ensureSlideGhost() {
          if (this.slideGhost && document.body.contains(this.slideGhost))
            return this.slideGhost;
          let t = document.createElement("div");
          return (
            (t.className = "tutorial-fly-dot"),
            Object.assign(t.style, {
              position: "fixed",
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "#ce3e70",
              boxShadow:
                "0 0 0 8px rgba(206,62,112,0.15), 0 0 18px rgba(206,62,112,0.55)",
              zIndex: "2147483647",
              left: "0px",
              top: "0px",
              transform: "translate(-9999px,-9999px)",
              pointerEvents: "none",
            }),
            document.body.appendChild(t),
            (this.slideGhost = t),
            t
          );
        }
        slideDotOnce(t, e) {
          let o =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 1e3;
          return new Promise((i) => {
            let s = this.getCenter(t),
              r = this.getCenter(e);
            if (!s || !r) return i();
            let n = this.ensureSlideGhost();
            n.style.transform = "translate("
              .concat(s.x - 9, "px, ")
              .concat(s.y - 9, "px)");
            let a = n.animate(
              [
                {
                  transform: "translate("
                    .concat(s.x - 9, "px, ")
                    .concat(s.y - 9, "px)"),
                },
                {
                  transform: "translate("
                    .concat(r.x - 9, "px, ")
                    .concat(r.y - 9, "px)"),
                },
              ],
              {
                duration: o,
                easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
                fill: "forwards",
              },
            );
            (a.onfinish = () => i()), (a.oncancel = () => i());
          });
        }
        destroySlideGhost() {
          if (this.slideGhost) {
            try {
              var t, e;
              null == (t = (e = this.slideGhost).getAnimations) ||
                t.call(e).forEach((t) => t.cancel());
            } catch (t) {}
            this.slideGhost.isConnected && this.slideGhost.remove(),
              (this.slideGhost = null);
          }
        }
        startSlideLoop(t, e) {
          let o = !1;
          (async () => {
            for (; !o; )
              await this.slideDotOnce(t, e, 900),
                await new Promise((t) => setTimeout(t, 300));
          })(),
            (this.slideLoopStop = () => {
              (o = !0), this.destroySlideGhost();
            });
        }
        stopSlideLoop() {
          this.slideLoopStop &&
            (this.slideLoopStop(), (this.slideLoopStop = null)),
            this.destroySlideGhost();
        }
        resolveIconDropSelector() {
          if (
            document.querySelector('[data-slot="1-4 Modular-0-1-item-1-div1"]')
          )
            return '[data-slot="1-4 Modular-0-1-item-1-div1"]';
          if (document.querySelector("#tour-first-2switch-top-drop"))
            return "#tour-first-2switch-top-drop";
          let t = document.querySelector(
            '#drag-drop-area div[style*="border"].cursor-pointer, #drag-drop-area [data-slot]',
          );
          return t
            ? (t.setAttribute("data-tutorial-target", "1"),
              '[data-tutorial-target="1"]')
            : null;
        }
        runStep(t) {
          switch ((5 !== t && this.stopSlideLoop(), t)) {
            case 1:
              this.pointAt("#tour-panel-royal-edge"),
                this.lockTo(["#tour-panel-royal-edge"]),
                this.playAudio("step1"),
                this.onceClick("#tour-panel-royal-edge", () => {
                  this.stopAudio(),
                    this.playAudio("step1d"),
                    this.pointAt("#tour-next"),
                    this.lockTo(["#tour-next"]),
                    this.onceClick("#tour-next", () => this.go(2));
                });
              break;
            case 2:
              this.pointAt("#tour-material-acrylic"),
                this.lockTo(["#tour-material-acrylic"]),
                this.playAudio("step2"),
                this.onceClick("#tour-material-acrylic", () => {
                  this.stopAudio(),
                    this.playAudio("step2d"),
                    s.store.dispatch((0, a.iY)(!1)),
                    this.pointAt("#tour-next"),
                    this.lockTo(["#tour-next"]);
                  let t = () => this.advanceAppNextAndGo(3);
                  this.whenEnabled("#tour-next", () =>
                    this.onceClick("#tour-next", t),
                  ),
                    this.onceClick("#tour-next:not([disabled])", t);
                });
              break;
            case 3: {
              s.store.dispatch((0, a.iY)(!0)), this.pointAt(null);
              let t = () => {
                let e = document.querySelector("#tour-size-6-module");
                if (!e) return void setTimeout(t, 100);
                try {
                  e.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                  });
                } catch (t) {}
                this.pointAt("#tour-size-6-module"),
                  this.lockTo(["#tour-size-6-module"]),
                  this.playAudio("step3"),
                  this.onceClick("#tour-size-6-module", () => {
                    this.stopAudio(),
                      s.store.dispatch(
                        (0, r.addOrUpdateSize)({
                          id: "9",
                          item: "6 Module",
                          price: 0,
                        }),
                      ),
                      s.store.dispatch((0, n.AQ)((0, l.wq)("6 Module"))),
                      s.store.dispatch((0, n.nI)()),
                      s.store.dispatch((0, r.resetAccessory)()),
                      s.store.dispatch((0, a.iY)(!1)),
                      this.pointAt("#tour-next"),
                      this.lockTo(["#tour-next"]);
                    let t = () => this.advanceAppNextAndGo(4);
                    this.whenEnabled("#tour-next", () =>
                      this.onceClick("#tour-next", t),
                    ),
                      this.onceClick("#tour-next:not([disabled])", t);
                  });
              };
              t();
              break;
            }
            case 4:
              this.playAudio("step4"),
                this.waitFor("#tour-4mod-section-title")
                  .then((t) => {
                    try {
                      t.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "center",
                      });
                    } catch (t) {}
                    this.pointAt("#tour-4mod-section-title"),
                      this.lockTo(["#tour-4mod-section-title"]),
                      this.onceClick("#tour-4mod-section-title", () => {
                        this.waitFor("#tour-accessory-4switch1fan")
                          .then((t) => {
                            try {
                              t.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                                inline: "center",
                              });
                            } catch (t) {}
                            this.pointAt("#tour-accessory-4switch1fan"),
                              this.lockTo(["#tour-accessory-4switch1fan"]),
                              this.onceClick(
                                "#tour-accessory-4switch1fan",
                                () => {
                                  this.stopAudio(),
                                    this.playAudio("step4d"),
                                    this.pointAt("#tour-next"),
                                    this.lockTo(["#tour-next"]);
                                  let t = () => this.advanceAppNextAndGo(5);
                                  this.whenEnabled("#tour-next", () =>
                                    this.onceClick("#tour-next", t),
                                  ),
                                    this.onceClick(
                                      "#tour-next:not([disabled])",
                                      t,
                                    );
                                },
                              );
                          })
                          .catch(() => {
                            this.lockTo(["#tour-4mod-section-title"]);
                          });
                      });
                  })
                  .catch(() => {
                    this.lockTo(["#tour-4mod-section-title"]);
                  });
              break;
            case 5: {
              this.playAudio("step5");
              let t = "#tour-icon-drag",
                e = this.resolveIconDropSelector(),
                o = [t];
              e && o.push(e),
                this.lockTo(o),
                this.pointAt(null),
                e && this.startSlideLoop(t, e);
              let i = s.store.getState().cartData.droppedItems.length,
                r = null,
                n = () => {
                  this.stopSlideLoop(),
                    this.destroySlideGhost(),
                    this.stopAudio(),
                    this.playAudio("step5d"),
                    this.pointAt("#tour-next"),
                    this.lockTo(["#tour-next", "#drag-drop-area"]),
                    this.onceClick("#tour-next", () => this.go(6));
                };
              (r = s.store.subscribe(() => {
                if (s.store.getState().cartData.droppedItems.length > i) {
                  try {
                    let t = s.store.getState().cartData.droppedItems,
                      e = t[t.length - 1];
                    this.firstDropId = e && e.id ? String(e.id) : null;
                  } catch (t) {
                    this.firstDropId = null;
                  }
                  r && (r(), (r = null)), n();
                }
              })),
                this.onceClick(t, () => {});
              break;
            }
            case 6:
              this.playAudio("step6"),
                this.pointAt("#tour-color-material-black"),
                this.lockTo(["#tour-color-material-black"]),
                this.onceClick("#tour-color-material-black", () => {
                  this.stopAudio(),
                    this.playAudio("step6d1"),
                    this.pointAt("#tour-frame-color-title"),
                    this.lockTo(["#tour-frame-color-title"]),
                    this.onceClick("#tour-frame-color-title", () => {
                      this.pointAt("#tour-color-frame-gold"),
                        this.lockTo(["#tour-color-frame-gold"]),
                        this.onceClick("#tour-color-frame-gold", () => {
                          this.playAudio("step6d2"),
                            this.pointAt("#tour-next"),
                            this.lockTo(["#tour-next"]),
                            this.onceClick("#tour-next", () => this.go(7));
                        });
                    });
                });
              break;
            case 7:
              this.playAudio("step7"),
                this.pointAt("#tour-technology-zigbee"),
                this.lockTo(["#tour-technology-zigbee"]),
                this.onceClick("#tour-technology-zigbee", () => {
                  this.pointAt("#tour-next"),
                    this.lockTo(["#tour-next"]),
                    this.onceClick("#tour-next", () => this.go(8));
                });
              break;
            case 8:
              this.pointAt(null),
                this.lockTo([]),
                this.playAudio("step8", () => {
                  this.highlightAndDisable("#tour-add-note"),
                    this.lockTo(["#tour-add-note"]),
                    this.playAudio("step8d", () => {
                      this.clearHighlights(),
                        this.highlightAndDisable("#tour-add-to-cart"),
                        this.lockTo(["#tour-add-to-cart"]),
                        this.playAudio("8d1", () => {
                          this.clearHighlights(),
                            this.highlightAndDisable("#tour-place-order"),
                            this.lockTo(["#tour-place-order"]),
                            this.playAudio("8d2", () => {
                              this.clearHighlights(),
                                this.lockTo([]),
                                this.playAudio("8d3"),
                                this.showOverlay({ blur: !0, logoVisible: !1 }),
                                this.go(9);
                            });
                        });
                    });
                });
              break;
            case 9:
              this.pointAt(null), this.lockTo(["#tutorial-start-designing"]);
              break;
            default:
              this.pointAt(null), this.unlock();
          }
        }
        preloadAudio() {
          Object.keys(this.audioMap).length ||
            [
              "Intro",
              "step1",
              "step1d",
              "step2",
              "step2d",
              "step3",
              "step4",
              "step4d",
              "step5",
              "step5d",
              "step6",
              "step6d1",
              "step6d2",
              "step7",
              "step8",
              "step8d",
              "8d1",
              "8d2",
              "8d3",
            ].forEach((t) => {
              let e = t;
              "8d1" === t && (e = "step8d1"),
                "8d2" === t && (e = "step8d2"),
                "8d3" === t && (e = "step8d3"),
                (this.audioMap[t] = ""
                  .concat("/Live%20guide", "/")
                  .concat(e, ".mp3"));
              let o = new Audio();
              (o.src = this.audioMap[t]), (o.preload = "auto"), o.load();
            });
        }
        getFirstDropId() {
          return this.firstDropId;
        }
        isActiveStep5() {
          return this.state.active && 5 === this.state.step;
        }
        constructor() {
          super(),
            (this.state = { ...u }),
            (this.audioEl = null),
            (this.audioMap = {}),
            (this.slideRAF = null),
            (this.slideGhost = null),
            (this.slideLoopStop = null),
            (this.firstDropId = null),
            (this.disabledHandler = (t) => {
              t.preventDefault(),
                t.stopPropagation(),
                alert("Action disabled for tutorial preview.");
            }),
            (this.handleClick = (t) => {
              if (!this.state.active) return;
              let e = this.state.guards.allowOnlySelectors;
              e.length &&
                (e.some((e) => this.matches(t.target, e)) ||
                  (t.stopPropagation(), t.preventDefault()));
            }),
            (this.handleDrop = (t) => {
              if (!this.state.active || 5 !== this.state.step) return;
              let e = t.target;
              e && e.closest("#drag-drop-area") && this.stopSlideLoop();
            }),
            (this.handleKey = (t) => {
              this.state.active &&
                ["Escape"].includes(t.key) &&
                (t.preventDefault(), t.stopPropagation());
            }),
            (this.audioEl = new Audio()),
            (this.audioEl.volume = 1),
            (this.audioEl.preload = "auto"),
            this.preloadAudio(),
            document.addEventListener("click", this.handleClick, !0),
            document.addEventListener("keydown", this.handleKey, !0),
            document.addEventListener("drop", this.handleDrop, !0);
        }
      }
      let c = new h(),
        d = c;
      {
        let t = (t) => {
            let e = document.querySelector(t);
            null == e || e.click();
          },
          e = (t) => new Promise((e) => setTimeout(e, t)),
          o = (t) => {
            let e = document.querySelector(t);
            if (!e) return { name: "target", pass: !1, msg: "not found" };
            let o = e.getBoundingClientRect(),
              i = window.getComputedStyle(e),
              s =
                o.width > 0 &&
                o.height > 0 &&
                "hidden" !== i.visibility &&
                "none" !== i.display;
            return { name: "target", pass: s, msg: s ? "" : "not visible" };
          },
          i = (t) => {
            let e = document.querySelector(t),
              o = document.querySelector("div[style*='tutorial-pulse']");
            if (!e || !o)
              return { name: "dot", pass: !1, msg: "missing element" };
            let i = e.getBoundingClientRect(),
              s = o.getBoundingClientRect(),
              r = i.left + i.width / 2,
              n = i.top + i.height / 2,
              a = Math.hypot(
                r - (s.left + s.width / 2),
                n - (s.top + s.height / 2),
              );
            return {
              name: "dot",
              pass: a <= 24,
              msg: "dist=".concat(a.toFixed(1)),
            };
          },
          n = (t) => {
            let e = c.state.guards.allowOnlySelectors,
              o = JSON.stringify(e) === JSON.stringify(t);
            return {
              name: "lock",
              pass: o,
              msg: o
                ? ""
                : "expected "
                    .concat(JSON.stringify(t), " got ")
                    .concat(JSON.stringify(e)),
            };
          },
          a = (t, e) => {
            let { currentKey: o, isPlaying: i } = c.state.audio,
              s = o === t && i === e;
            return {
              name: "audio",
              pass: s,
              msg: s
                ? ""
                : "expected "
                    .concat(t, "/")
                    .concat(e, " got ")
                    .concat(o, "/")
                    .concat(i),
            };
          },
          l = (t, e) => {
            let o = t(s.store.getState());
            return { name: e, pass: o, msg: o ? "" : "redux state mismatch" };
          },
          u = async (t) => {
            let o = document.querySelector("#tour-next");
            if (!o) return { name: "next", pass: !1, msg: "next not found" };
            if (o.disabled)
              return { name: "next", pass: !1, msg: "next disabled" };
            o.click(), await e(50);
            let i = c.state.step === t;
            return {
              name: "next",
              pass: i,
              msg: i ? "" : "step=".concat(c.state.step),
            };
          },
          h = [],
          d = async () => {
            let s = [];
            s.push(o("#tour-panel-royal-edge")),
              s.push(i("#tour-panel-royal-edge")),
              s.push(n(["#tour-panel-royal-edge"])),
              s.push(a("step1", !0)),
              t("#tour-panel-royal-edge"),
              await e(50),
              s.push(
                l((t) => {
                  var e;
                  return (
                    (null == (e = t.cartData.cartData.panel)
                      ? void 0
                      : e.item) === "Royal Edge"
                  );
                }, "redux"),
              ),
              s.push(a("step1d", !0)),
              s.push(i("#tour-next")),
              s.push(n(["#tour-next"])),
              s.push(await u(2)),
              h.push({ step: 1, assertions: s });
          },
          p = async () => {
            let s = [];
            s.push(o("#tour-material-acrylic")),
              s.push(i("#tour-material-acrylic")),
              s.push(n(["#tour-material-acrylic"])),
              s.push(a("step2", !0)),
              t("#tour-material-acrylic"),
              await e(50),
              s.push(
                l((t) => {
                  var e;
                  return (
                    (null == (e = t.cartData.cartData.material)
                      ? void 0
                      : e.item) === "Acrylic"
                  );
                }, "redux"),
              ),
              s.push(a("step2d", !0)),
              s.push(i("#tour-next")),
              s.push(n(["#tour-next"])),
              s.push(await u(3)),
              h.push({ step: 2, assertions: s });
          },
          m = async () => {
            let s = [];
            s.push(o("#tour-size-6-module")),
              s.push(i("#tour-size-6-module")),
              s.push(n(["#tour-size-6-module"])),
              s.push(a("step3", !0));
            let r = document.querySelector("#tour-size-6-module"),
              c = !!(r && "none" !== window.getComputedStyle(r).pointerEvents);
            s.push({ name: "wrapper", pass: c, msg: c ? "" : "not clickable" }),
              t("#tour-size-6-module"),
              await e(50),
              s.push(
                l((t) => {
                  var e;
                  return (
                    (null == (e = t.cartData.cartData.size)
                      ? void 0
                      : e.item) === "6 Module"
                  );
                }, "redux"),
              ),
              s.push(
                l((t) => !1 === t.selectionData.isNextDisabled, "nextEnabled"),
              ),
              s.push(a(null, !1)),
              s.push(i("#tour-next")),
              s.push(n(["#tour-next"])),
              s.push(await u(4)),
              h.push({ step: 3, assertions: s });
          },
          y = async () => {
            let s = [];
            s.push(a("step4", !0)),
              s.push(o("#tour-2mod-section-title")),
              s.push(i("#tour-2mod-section-title")),
              s.push(n(["#tour-2mod-section-title"])),
              t("#tour-2mod-section-title"),
              await e(50),
              s.push(o("#tour-accessory-4switch1fan")),
              s.push(i("#tour-accessory-4switch1fan")),
              s.push(n(["#tour-accessory-4switch1fan"])),
              t("#tour-accessory-4switch1fan"),
              await e(50),
              s.push(
                l(
                  (t) =>
                    t.cartData.cartData.accessories.some((t) =>
                      t.options.some((t) => "4 Switch + 1 Fan" === t.item),
                    ),
                  "redux",
                ),
              ),
              s.push(a("step4d", !0)),
              s.push(i("#tour-next")),
              s.push(n(["#tour-next"])),
              s.push(await u(5)),
              h.push({ step: 4, assertions: s });
          },
          f = async () => {
            let c = [];
            c.push(a("step5", !0)),
              c.push(o("#tour-icon-drag")),
              c.push(i("#tour-icon-drag")),
              c.push(n(["#tour-icon-drag"])),
              t("#tour-icon-drag"),
              await e(800),
              s.store.dispatch(
                (0, r.addDroppedItem)({ divId: "tutorial-test" }),
              ),
              await e(50),
              c.push(l((t) => t.cartData.droppedItems.length > 0, "redux")),
              c.push(a("step5d", !0)),
              c.push(i("#tour-next")),
              c.push(n(["#tour-next"])),
              c.push(await u(6)),
              h.push({ step: 5, assertions: c });
          },
          g = async () => {
            let s = [];
            s.push(a("step6", !0)),
              s.push(o("#tour-color-material-black")),
              s.push(i("#tour-color-material-black")),
              s.push(n(["#tour-color-material-black"])),
              t("#tour-color-material-black"),
              await e(50),
              s.push(
                l(
                  (t) =>
                    t.cartData.cartData.color.some(
                      (t) =>
                        "Material Color" === t.optionType &&
                        t.options.some((t) => "Black" === t.item),
                    ),
                  "redux",
                ),
              ),
              s.push(a("step6d1", !0)),
              s.push(i("#tour-frame-color-title")),
              s.push(n(["#tour-frame-color-title"])),
              t("#tour-frame-color-title"),
              await e(50),
              s.push(o("#tour-color-frame-gold")),
              s.push(i("#tour-color-frame-gold")),
              s.push(n(["#tour-color-frame-gold"])),
              t("#tour-color-frame-gold"),
              await e(50),
              s.push(
                l(
                  (t) =>
                    t.cartData.cartData.color.some(
                      (t) =>
                        "Frame Color" === t.optionType &&
                        t.options.some((t) => "Gold" === t.item),
                    ),
                  "redux",
                ),
              ),
              s.push(a("step6d2", !0)),
              s.push(i("#tour-next")),
              s.push(n(["#tour-next"])),
              s.push(await u(7)),
              h.push({ step: 6, assertions: s });
          },
          v = async () => {
            let s = [];
            s.push(a("step7", !0)),
              s.push(o("#tour-technology-zigbee")),
              s.push(i("#tour-technology-zigbee")),
              s.push(n(["#tour-technology-zigbee"])),
              t("#tour-technology-zigbee"),
              await e(50),
              s.push(
                l((t) => {
                  var e;
                  return (
                    (null == (e = t.cartData.cartData.technology)
                      ? void 0
                      : e.item) === "Zigbee"
                  );
                }, "redux"),
              ),
              s.push(i("#tour-next")),
              s.push(n(["#tour-next"])),
              s.push(await u(8)),
              h.push({ step: 7, assertions: s });
          },
          w = async () => {
            var o, i, s, r, l, u, d, p, m, y, f, g, v, w;
            let b = [];
            await e(50),
              b.push(a("step8", !0)),
              null == (i = c.audioEl) || null == (o = i.onended) || o.call(i),
              await e(10),
              b.push(n(["#tour-add-note"])),
              b.push({
                name: "highlight1",
                pass:
                  null !=
                    (g =
                      null == (s = document.querySelector("#tour-add-note"))
                        ? void 0
                        : s.classList.contains("tutorial-shine")) && g,
                msg: "",
              }),
              null == (l = c.audioEl) || null == (r = l.onended) || r.call(l),
              await e(10),
              b.push(n(["#tour-add-to-cart"])),
              b.push({
                name: "highlight2",
                pass:
                  null !=
                    (v =
                      null == (u = document.querySelector("#tour-add-to-cart"))
                        ? void 0
                        : u.classList.contains("tutorial-shine")) && v,
                msg: "",
              }),
              null == (p = c.audioEl) || null == (d = p.onended) || d.call(p),
              await e(10),
              b.push(n(["#tour-place-order"])),
              b.push({
                name: "highlight3",
                pass:
                  null !=
                    (w =
                      null == (m = document.querySelector("#tour-place-order"))
                        ? void 0
                        : m.classList.contains("tutorial-shine")) && w,
                msg: "",
              }),
              null == (f = c.audioEl) || null == (y = f.onended) || y.call(f),
              await e(10),
              b.push({
                name: "overlay",
                pass: 9 === c.state.step && c.state.overlay.blur,
                msg: "",
              }),
              t("#tutorial-start-designing"),
              h.push({ step: 8, assertions: b });
          };
        window.__tutorialTest = {
          lastReport: { success: !1 },
          async runAll() {
            (h.length = 0),
              c.startTutorial(),
              await e(1200),
              await d(),
              await p(),
              await m(),
              await y(),
              await f(),
              await g(),
              await v(),
              await w();
            let t = h.every((t) => t.assertions.every((t) => t.pass));
            return (
              (this.lastReport = { success: t, steps: h }), this.lastReport
            );
          },
          goto(t) {
            c.go(t);
          },
          report() {
            return this.lastReport;
          },
        };
      }
    },
  },
]);
