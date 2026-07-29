"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2069],
  {
    32069: (e, t, n) => {
      let r, o;
      n.d(t, { er: () => k, bf: () => x, Se: () => S, X5: () => j });
      let s = (e, t) => t.some((t) => e instanceof t),
        a = new WeakMap(),
        i = new WeakMap(),
        c = new WeakMap(),
        l = {
          get(e, t, n) {
            if (e instanceof IDBTransaction) {
              if ("done" === t) return a.get(e);
              if ("store" === t)
                return n.objectStoreNames[1]
                  ? void 0
                  : n.objectStore(n.objectStoreNames[0]);
            }
            return u(e[t]);
          },
          set: (e, t, n) => ((e[t] = n), !0),
          has: (e, t) =>
            (e instanceof IDBTransaction && ("done" === t || "store" === t)) ||
            t in e,
        };
      function u(e) {
        if (e instanceof IDBRequest) {
          let t = new Promise((t, n) => {
            let r = () => {
                e.removeEventListener("success", o),
                  e.removeEventListener("error", s);
              },
              o = () => {
                t(u(e.result)), r();
              },
              s = () => {
                n(e.error), r();
              };
            e.addEventListener("success", o), e.addEventListener("error", s);
          });
          return c.set(t, e), t;
        }
        if (i.has(e)) return i.get(e);
        let t = (function (e) {
          if ("function" == typeof e)
            return (
              o ||
              (o = [
                IDBCursor.prototype.advance,
                IDBCursor.prototype.continue,
                IDBCursor.prototype.continuePrimaryKey,
              ])
            ).includes(e)
              ? function (...t) {
                  return e.apply(d(this), t), u(this.request);
                }
              : function (...t) {
                  return u(e.apply(d(this), t));
                };
          return (e instanceof IDBTransaction &&
            (function (e) {
              if (a.has(e)) return;
              let t = new Promise((t, n) => {
                let r = () => {
                    e.removeEventListener("complete", o),
                      e.removeEventListener("error", s),
                      e.removeEventListener("abort", s);
                  },
                  o = () => {
                    t(), r();
                  },
                  s = () => {
                    n(e.error || new DOMException("AbortError", "AbortError")),
                      r();
                  };
                e.addEventListener("complete", o),
                  e.addEventListener("error", s),
                  e.addEventListener("abort", s);
              });
              a.set(e, t);
            })(e),
          s(
            e,
            r ||
              (r = [
                IDBDatabase,
                IDBObjectStore,
                IDBIndex,
                IDBCursor,
                IDBTransaction,
              ]),
          ))
            ? new Proxy(e, l)
            : e;
        })(e);
        return t !== e && (i.set(e, t), c.set(t, e)), t;
      }
      let d = (e) => c.get(e),
        f = ["get", "getKey", "getAll", "getAllKeys", "count"],
        h = ["put", "add", "delete", "clear"],
        p = new Map();
      function w(e, t) {
        if (!(e instanceof IDBDatabase && !(t in e) && "string" == typeof t))
          return;
        if (p.get(t)) return p.get(t);
        let n = t.replace(/FromIndex$/, ""),
          r = t !== n,
          o = h.includes(n);
        if (
          !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
          !(o || f.includes(n))
        )
          return;
        let s = async function (e, ...t) {
          let s = this.transaction(e, o ? "readwrite" : "readonly"),
            a = s.store;
          return (
            r && (a = a.index(t.shift())),
            (await Promise.all([a[n](...t), o && s.done]))[0]
          );
        };
        return p.set(t, s), s;
      }
      l = ((e) => ({
        ...e,
        get: (t, n, r) => w(t, n) || e.get(t, n, r),
        has: (t, n) => !!w(t, n) || e.has(t, n),
      }))(l);
      let y = ["continue", "continuePrimaryKey", "advance"],
        m = {},
        g = new WeakMap(),
        D = new WeakMap(),
        I = {
          get(e, t) {
            if (!y.includes(t)) return e[t];
            let n = m[t];
            return (
              n ||
                (n = m[t] =
                  function (...e) {
                    g.set(this, D.get(this)[t](...e));
                  }),
              n
            );
          },
        };
      async function* v(...e) {
        let t = this;
        if ((t instanceof IDBCursor || (t = await t.openCursor(...e)), !t))
          return;
        let n = new Proxy(t, I);
        for (D.set(n, t), c.set(n, d(t)); t; )
          yield n, (t = await (g.get(n) || t.continue())), g.delete(n);
      }
      function B(e, t) {
        return (
          (t === Symbol.asyncIterator &&
            s(e, [IDBIndex, IDBObjectStore, IDBCursor])) ||
          ("iterate" === t && s(e, [IDBIndex, IDBObjectStore]))
        );
      }
      l = ((e) => ({
        ...e,
        get: (t, n, r) => (B(t, n) ? v : e.get(t, n, r)),
        has: (t, n) => B(t, n) || e.has(t, n),
      }))(l);
      let b = "screenshots",
        E = null;
      async function L() {
        return (
          null === E &&
            (E = (function (
              e,
              t,
              { blocked: n, upgrade: r, blocking: o, terminated: s } = {},
            ) {
              let a = indexedDB.open(e, 1),
                i = u(a);
              return (
                r &&
                  a.addEventListener("upgradeneeded", (e) => {
                    r(
                      u(a.result),
                      e.oldVersion,
                      e.newVersion,
                      u(a.transaction),
                      e,
                    );
                  }),
                n &&
                  a.addEventListener("blocked", (e) =>
                    n(e.oldVersion, e.newVersion, e),
                  ),
                i
                  .then((e) => {
                    s && e.addEventListener("close", () => s()),
                      o &&
                        e.addEventListener("versionchange", (e) =>
                          o(e.oldVersion, e.newVersion, e),
                        );
                  })
                  .catch(() => {}),
                i
              );
            })("SwitchCraftScreenshots", 0, {
              upgrade(e) {
                e.objectStoreNames.contains(b) ||
                  e
                    .createObjectStore(b, { keyPath: "id" })
                    .createIndex("timestamp", "timestamp");
              },
            })),
          E
        );
      }
      async function S(e, t) {
        try {
          if (!t || !e) return !1;
          let n = await L(),
            r = { id: e, dataUrl: t, timestamp: Date.now(), size: t.length };
          return (
            await n.put(b, r),
            console.log(
              "✅ Saved screenshot for item "
                .concat(e, " (")
                .concat((r.size / 1024).toFixed(1), "KB)"),
            ),
            !0
          );
        } catch (t) {
          return (
            console.error(
              "❌ Failed to save screenshot for item ".concat(e, ":"),
              t,
            ),
            !1
          );
        }
      }
      async function x() {
        try {
          let e = await L(),
            t = await e.getAll(b),
            n = {};
          for (let e of t) n[e.id] = e.dataUrl;
          return (
            console.log(
              "✅ Loaded ".concat(t.length, " screenshots from IndexedDB"),
            ),
            n
          );
        } catch (e) {
          return console.error("❌ Failed to load screenshots:", e), {};
        }
      }
      async function k(e) {
        try {
          if (!e) return !1;
          let t = await L();
          return (
            await t.delete(b, e),
            console.log("✅ Deleted screenshot for item ".concat(e)),
            !0
          );
        } catch (t) {
          return (
            console.error(
              "❌ Failed to delete screenshot for item ".concat(e, ":"),
              t,
            ),
            !1
          );
        }
      }
      async function j(e) {
        try {
          let t = (await L()).transaction(b, "readwrite"),
            n = 0;
          for (let [r, o] of Object.entries(e))
            if (o && r) {
              let e = {
                id: r,
                dataUrl: o,
                timestamp: Date.now(),
                size: o.length,
              };
              await t.store.put(e), n++;
            }
          return (
            await t.done,
            console.log("✅ Batch saved ".concat(n, " screenshots")),
            n
          );
        } catch (e) {
          return console.error("❌ Failed to batch save screenshots:", e), 0;
        }
      }
    },
  },
]);
