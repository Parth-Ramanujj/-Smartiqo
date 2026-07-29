"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2927],
  {
    78650: (t, e, a) => {
      a.d(e, { A0: () => r, Ay: () => o, Kf: () => n, NL: () => i });
      let s = (0, a(5710).Z0)({
          name: "userIcons",
          initialState: { icons: [] },
          reducers: {
            addUserIcon(t, e) {
              var a, s, r, i;
              let n = e.payload,
                o = (null != (s = null != (a = n.url) ? a : n.src) ? s : "")
                  .toString()
                  .trim();
              n.id &&
                o &&
                (t.icons.some((t) => t.id === n.id) ||
                  t.icons.push({
                    id: n.id,
                    category: null != (r = n.category) ? r : "Uncategorized",
                    name: null != (i = n.name) ? i : n.id,
                    src: o,
                    url: o,
                  }));
            },
            removeUserIcon(t, e) {
              var a;
              let s = null == (a = e.payload) ? void 0 : a.toString().trim();
              s && (t.icons = t.icons.filter((t) => t.id !== s));
            },
            setUserIcons(t, e) {
              t.icons = e.payload;
            },
          },
        }),
        { addUserIcon: r, removeUserIcon: i, setUserIcons: n } = s.actions,
        o = s.reducer;
    },
    92927: (t, e, a) => {
      a.r(e), a.d(e, { store: () => E });
      var s = a(5710),
        r = a(99511),
        i = a(97781),
        n = a(1743),
        o = a(17070);
      let d = (0, s.Z0)({
          name: "loginSignUp",
          initialState: { userType: 0 },
          reducers: {
            setUserType(t, e) {
              t.userType = e.payload;
            },
          },
        }),
        { setUserType: c } = d.actions,
        l = d.reducer;
      var u = a(78650),
        g = a(50620),
        p = a(9672);
      let y = (0, s.zD)("orders/fetch", async () => {
          let t = await fetch("/api/admin/orders");
          if (!t.ok) throw Error(await t.text());
          return await t.json();
        }),
        m = (0, s.zD)("orders/updateStatus", async (t) => {
          let { id: e, status: a } = t,
            s = await fetch("/api/admin/orders/".concat(e), {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ status: a }),
            });
          if (!s.ok) throw Error(await s.text());
          return { id: e, status: a };
        }),
        f = (0, s.Z0)({
          name: "orders",
          initialState: {
            list: [],
            counts: { Pending: 0, Production: 0, Dispatched: 0 },
          },
          reducers: {},
          extraReducers: (t) => {
            t.addCase(y.fulfilled, (t, e) => {
              let { payload: a } = e;
              (t.list = a),
                (t.counts = { Pending: 0, Production: 0, Dispatched: 0 }),
                a.forEach((e) => {
                  e.status in t.counts && t.counts[e.status]++;
                });
            }).addCase(m.fulfilled, (t, e) => {
              let { payload: a } = e,
                s = t.list.find((t) => t.id === a.id);
              s &&
                (s.status in t.counts && t.counts[s.status]--,
                (s.status = a.status),
                s.status in t.counts && t.counts[s.status]++);
            });
          },
        }).reducer;
      function h(t, e, a) {
        return Math.max(e, Math.min(a, t));
      }
      let D = (0, s.Z0)({
          name: "tags",
          initialState: { tags: [], entityTags: {} },
          reducers: {
            loadState(t, e) {
              let { payload: a } = e;
              a.tags && (t.tags = a.tags),
                a.entityTags && (t.entityTags = a.entityTags);
            },
            addTag(t, e) {
              let { payload: a } = e,
                r = t.tags.map((t) => t.color),
                i =
                  a.color ||
                  (function (t) {
                    let e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "#3b82f6",
                      a = e.replace("#", ""),
                      s = parseInt(a.substring(0, 2), 16) || 59,
                      r = parseInt(a.substring(2, 4), 16) || 130,
                      i = parseInt(a.substring(4, 6), 16) || 246;
                    for (let e = 0; e < 36; e++) {
                      let a = (e % 12) / 12,
                        n = e % 2 == 0 ? 1 : -1,
                        o = 0.15 + 0.6 * a,
                        d = h(Math.round(s + n * o * (255 - s)), 0, 255),
                        c = h(Math.round(r + n * o * (255 - r)), 0, 255),
                        l = h(Math.round(i + n * o * (255 - i)), 0, 255),
                        u = "#"
                          .concat(d.toString(16).padStart(2, "0"))
                          .concat(c.toString(16).padStart(2, "0"))
                          .concat(l.toString(16).padStart(2, "0"));
                      if (!t.some((t) => t.toLowerCase() === u.toLowerCase()))
                        return u;
                    }
                    let n = Math.floor(360 * Math.random()),
                      o = ((1 - Math.abs(1.2 - 1)) * 70) / 100,
                      d = o * (1 - Math.abs(((n / 60) % 2) - 1)),
                      c = 0.6 - o / 2,
                      [l, u, g] = [0, 0, 0];
                    n < 60
                      ? ([l, u, g] = [o, d, 0])
                      : n < 120
                        ? ([l, u, g] = [d, o, 0])
                        : n < 180
                          ? ([l, u, g] = [0, o, d])
                          : n < 240
                            ? ([l, u, g] = [0, d, o])
                            : n < 300
                              ? ([l, u, g] = [d, 0, o])
                              : ([l, u, g] = [o, 0, d]);
                    let p = Math.round((l + c) * 255),
                      y = Math.round((u + c) * 255),
                      m = Math.round((g + c) * 255);
                    return "#"
                      .concat(p.toString(16).padStart(2, "0"))
                      .concat(y.toString(16).padStart(2, "0"))
                      .concat(m.toString(16).padStart(2, "0"));
                  })(r, a.themePrimary),
                n = (0, s.Ak)(),
                o = (a.assignees || []).slice(0, 2).filter(Boolean);
              t.tags.push({
                id: n,
                name: a.name.trim(),
                color: i,
                assignees: o,
                userId: a.userId,
                createdAt: new Date().toISOString(),
              });
            },
            renameTag(t, e) {
              let { payload: a } = e,
                s = t.tags.find((t) => t.id === a.id);
              s && (s.name = a.name.trim());
            },
            setTagAssignees(t, e) {
              let { payload: a } = e,
                s = t.tags.find((t) => t.id === a.id);
              s && (s.assignees = a.assignees.slice(0, 2).filter(Boolean));
            },
            removeTag(t, e) {
              let { payload: a } = e;
              for (let e of ((t.tags = t.tags.filter((t) => t.id !== a.id)),
              Object.keys(t.entityTags)))
                (t.entityTags[e] = t.entityTags[e].filter((t) => t !== a.id)),
                  0 === t.entityTags[e].length && delete t.entityTags[e];
            },
            assignTag(t, e) {
              var a;
              let { payload: s } = e,
                { entityId: r, tagId: i } = s,
                n = new Set(null != (a = t.entityTags[r]) ? a : []);
              n.add(i), (t.entityTags[r] = Array.from(n));
            },
            unassignTag(t, e) {
              let { payload: a } = e,
                { entityId: s, tagId: r } = a;
              t.entityTags[s] &&
                ((t.entityTags[s] = t.entityTags[s].filter((t) => t !== r)),
                0 === t.entityTags[s].length && delete t.entityTags[s]);
            },
            clearAssignments(t, e) {
              let { payload: a } = e;
              delete t.entityTags[a.entityId];
            },
            resetAll(t) {
              (t.tags = []), (t.entityTags = {});
            },
          },
        }),
        {
          loadState: S,
          addTag: T,
          renameTag: A,
          setTagAssignees: C,
          removeTag: w,
          assignTag: I,
          unassignTag: v,
          clearAssignments: b,
          resetAll: k,
        } = D.actions,
        U = D.reducer;
      var M = a(96898),
        P = a(41699),
        x = a(32069);
      let j = (t) => (e) => async (a) => {
          let s = e(a);
          switch (a.type) {
            case "cartData/addToCart": {
              var r;
              let e =
                  (null == (r = t.getState().cartData)
                    ? void 0
                    : r.cartItems) || [],
                a = e[e.length - 1];
              (null == a ? void 0 : a.screenshotDataUrl) &&
                a.id &&
                (await (0, x.Se)(a.id, a.screenshotDataUrl),
                console.log(
                  "\uD83D\uDCF8 Auto-saved screenshot for new cart item: ".concat(
                    a.id,
                  ),
                ));
              break;
            }
            case "cartData/updateCartItem": {
              let { id: t, screenshotDataUrl: e } = a.payload;
              e &&
                t &&
                (await (0, x.Se)(t, e),
                console.log(
                  "\uD83D\uDCF8 Auto-saved updated screenshot for cart item: ".concat(
                    t,
                  ),
                ));
              break;
            }
            case "cartData/removeCartItemById": {
              let { id: t } = a.payload;
              t &&
                (await (0, x.er)(t),
                console.log(
                  "\uD83D\uDDD1️ Auto-deleted screenshot for removed cart item: ".concat(
                    t,
                  ),
                ));
              break;
            }
            case "cartData/clearAllCartItems":
              console.log(
                "\uD83E\uDDF9 Cart cleared - screenshots preserved for recovery",
              );
              break;
            case "cartData/setCartItems": {
              let { items: e } = a.payload;
              if (Array.isArray(e)) {
                let a = await (0, x.bf)(),
                  s = 0,
                  r = e.map((t) =>
                    !t.screenshotDataUrl && t.id && a[t.id]
                      ? (s++, { ...t, screenshotDataUrl: a[t.id] })
                      : t,
                  );
                s > 0 &&
                  (t.dispatch({
                    type: "cartData/setCartItems",
                    payload: { items: r },
                  }),
                  console.log(
                    "\uD83D\uDCF8 Auto-restored ".concat(
                      s,
                      " screenshots from IndexedDB",
                    ),
                  ));
              }
            }
          }
          return s;
        },
        E = (0, s.U1)({
          reducer: {
            selectionData: r.Ay,
            cartData: i.default,
            extraSlice: n.Ay,
            adminSlice: o.Ay,
            loginSignUpSlice: l,
            userIcons: u.Ay,
            defaultIcons: g.Ay,
            defaultAccessories: p.Ay,
            orders: f,
            tags: U,
            prices: M.Ay,
            adminSettings: P.Ay,
          },
          middleware: (t) =>
            t({
              serializableCheck: {
                ignoredActions: [
                  "cartData/addToCart",
                  "cartData/updateCartItem",
                  "cartData/setCartItems",
                ],
                ignoredPaths: ["cartData.cartItems.screenshotDataUrl"],
              },
            }).concat(j),
          preloadedState: void 0,
        });
    },
    96898: (t, e, a) => {
      a.d(e, { $B: () => r, Ay: () => c, Gg: () => d, I0: () => o });
      var s = a(5710);
      let r = (0, s.zD)("prices/fetchPrices", async () => {
          let t = await fetch("/api/prices");
          if (!t.ok) throw Error("Failed to fetch prices");
          return await t.json();
        }),
        i = (0, s.zD)("prices/updatePrice", async (t) => {
          let { id: e, base_price: a } = t,
            s = await fetch("/api/prices/".concat(e), {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ base_price: a }),
            });
          if (!s.ok) throw Error("Failed to update price");
          return await s.json();
        }),
        n = (0, s.Z0)({
          name: "prices",
          initialState: { items: [], status: "idle" },
          reducers: {},
          extraReducers: (t) => {
            t.addCase(r.pending, (t) => {
              t.status = "loading";
            })
              .addCase(r.fulfilled, (t, e) => {
                (t.items = e.payload), (t.status = "succeeded");
              })
              .addCase(r.rejected, (t) => {
                t.status = "failed";
              })
              .addCase(i.fulfilled, (t, e) => {
                let a = e.payload,
                  s = t.items.findIndex((t) => t.id === a.id);
                s >= 0 && (t.items[s] = a);
              });
          },
        }),
        o = (t) => t.prices.items,
        d = (t) => t.prices.status,
        c = n.reducer;
    },
  },
]);
