"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [620],
  {
    50620: (e, l, t) => {
      t.d(l, {
        AZ: () => c,
        Ay: () => p,
        F$: () => y,
        bn: () => g,
        fg: () => d,
      });
      var a,
        r = t(5710),
        o = t(49880);
      let n = o.sR.find((e) => 5 === e.stepNo);
      o.Zw.map((e) => [e.id, e.label]);
      let i = (
          null != (a = null == n ? void 0 : n.optionsData) ? a : []
        ).flatMap((e) => {
          let { optionType: l, options: t } = e;
          return t.map((e) => {
            var t;
            return {
              id: e.id,
              optionType: l,
              src: e.src,
              name: null != (t = e.name) ? t : "",
              categoryLabel: l,
              categoryId: null,
            };
          });
        }),
        d = (0, r.zD)("defaultIcons/fetchIcons", async () => {
          let e = await fetch("/api/icons");
          if (!e.ok) throw Error("Fetch icons failed (".concat(e.status, ")"));
          let l = await e.json();
          if (!Array.isArray(l)) return { icons: [], categories: [] };
          let t = (e) =>
              e
                .trim()
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 191),
            a = [],
            r = new Map(),
            o = new Map(),
            n = (e, l, t) => {
              var a;
              if (!e) return;
              let n = r.get(e);
              r.set(e, {
                id: e,
                label: null != (a = null == n ? void 0 : n.label) ? a : l,
                sortOrder:
                  "number" == typeof (null == n ? void 0 : n.sortOrder)
                    ? n.sortOrder
                    : t,
              });
              let i = l.trim().toLowerCase();
              i.length && !o.has(i) && o.set(i, e);
            };
          for (let e of l) {
            if (!e) continue;
            let l =
                "string" == typeof (null == e ? void 0 : e.categoryLabel) &&
                e.categoryLabel.length
                  ? e.categoryLabel
                  : "string" == typeof (null == e ? void 0 : e.category) &&
                      e.category.length
                    ? e.category
                    : "Uncategorized",
              r =
                "string" == typeof (null == e ? void 0 : e.categoryId) &&
                e.categoryId.length
                  ? e.categoryId
                  : null,
              i =
                "number" == typeof (null == e ? void 0 : e.sortOrder) &&
                Number.isFinite(e.sortOrder)
                  ? e.sortOrder
                  : 0;
            for (let d of (n(r, l, i),
            Array.isArray(null == e ? void 0 : e.icons) ? e.icons : [])) {
              if (
                "string" != typeof (null == d ? void 0 : d.id) ||
                "string" != typeof (null == d ? void 0 : d.imageUrl) ||
                !d.imageUrl.length
              )
                continue;
              let e =
                  "string" == typeof (null == d ? void 0 : d.categoryLabel) &&
                  d.categoryLabel.length
                    ? d.categoryLabel
                    : l,
                s =
                  "string" == typeof (null == d ? void 0 : d.categoryId) &&
                  d.categoryId.length
                    ? d.categoryId
                    : r,
                c = e.trim().toLowerCase();
              if (!s && c.length) {
                let e = o.get(c);
                e && (s = e);
              }
              if (!s && c.length) {
                let l = t(e);
                l.length && n((s = l), e, i);
              }
              n(s, e, i),
                a.push({
                  id: d.id,
                  optionType: e,
                  src: d.imageUrl,
                  name:
                    "string" == typeof (null == d ? void 0 : d.name)
                      ? d.name
                      : "",
                  categoryId: null != s ? s : null,
                  categoryLabel: e,
                  origin: "custom",
                });
            }
          }
          return {
            icons: a,
            categories: Array.from(r.values()).sort(
              (e, l) =>
                e.sortOrder - l.sortOrder || e.label.localeCompare(l.label),
            ),
          };
        }),
        s = (0, r.Z0)({
          name: "defaultIcons",
          initialState: { icons: i, categories: o.Zw.map((e) => ({ ...e })) },
          reducers: {
            addDefaultIcon(e, l) {
              e.icons.push(l.payload);
            },
            replaceDefaultIcon(e, l) {
              let t = e.icons.find((e) => e.id === l.payload.id);
              if (t) {
                var a, r;
                "string" == typeof l.payload.src && (t.src = l.payload.src),
                  "string" == typeof l.payload.name &&
                    (t.name = l.payload.name),
                  "string" == typeof l.payload.optionType &&
                    (t.optionType = l.payload.optionType),
                  "categoryId" in l.payload &&
                    (t.categoryId =
                      null != (a = l.payload.categoryId) ? a : null),
                  "categoryLabel" in l.payload &&
                    (t.categoryLabel =
                      null != (r = l.payload.categoryLabel) ? r : null);
              }
            },
            removeDefaultIcon(e, l) {
              e.icons = e.icons.filter((e) => e.id !== l.payload);
            },
          },
          extraReducers: (e) => {
            e.addCase(d.fulfilled, (e, l) => {
              let { payload: t } = l,
                a = i.map((e) => ({ ...e }));
              for (let e of t.icons) {
                let l = a.findIndex((l) => l.id === e.id);
                l >= 0 ? (a[l] = e) : a.push(e);
              }
              let r = new Map(e.categories.map((e) => [e.id, { ...e }]));
              for (let e of t.categories) {
                var n, d, s;
                let l = r.get(e.id);
                r.set(e.id, {
                  id: e.id,
                  label:
                    null !=
                    (d =
                      null != (n = e.label) ? n : null == l ? void 0 : l.label)
                      ? d
                      : e.id,
                  sortOrder:
                    "number" == typeof e.sortOrder
                      ? e.sortOrder
                      : null != (s = null == l ? void 0 : l.sortOrder)
                        ? s
                        : 0,
                });
              }
              for (let e of o.Zw) r.has(e.id) || r.set(e.id, { ...e });
              e.categories = Array.from(r.values()).sort(
                (e, l) =>
                  e.sortOrder - l.sortOrder || e.label.localeCompare(l.label),
              );
              let c = new Map(e.categories.map((e) => [e.id, e.label])),
                g = new Map(
                  e.categories.map((e) => [e.label.trim().toLowerCase(), e.id]),
                );
              e.icons = a.map((e) => {
                var l, t, a, r, o;
                let n = (
                    null !=
                    (l =
                      "string" == typeof e.categoryLabel &&
                      e.categoryLabel.length
                        ? e.categoryLabel
                        : e.optionType)
                      ? l
                      : ""
                  )
                    .trim()
                    .toLowerCase(),
                  i =
                    null != (a = e.categoryId)
                      ? a
                      : n.length && null != (t = g.get(n))
                        ? t
                        : null,
                  d =
                    null !=
                    (o =
                      null != (r = i ? c.get(i) : void 0) ? r : e.categoryLabel)
                      ? o
                      : e.optionType;
                return {
                  ...e,
                  categoryId: null != i ? i : null,
                  categoryLabel: null != d ? d : null,
                  optionType: null != d ? d : e.optionType,
                };
              });
            });
          },
        }),
        {
          addDefaultIcon: c,
          replaceDefaultIcon: g,
          removeDefaultIcon: y,
        } = s.actions,
        p = s.reducer;
    },
  },
]);
