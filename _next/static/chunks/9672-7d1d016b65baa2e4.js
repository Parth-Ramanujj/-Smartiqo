"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9672],
  {
    9672: (e, a, s) => {
      s.d(a, {
        Ay: () => p,
        CS: () => u,
        jb: () => o,
        kW: () => n,
        zm: () => l,
      });
      var c,
        r = s(5710);
      let i = s(49880).sR.find((e) => 4 === e.stepNo),
        t = (null != (c = null == i ? void 0 : i.optionsData) ? c : []).flatMap(
          (e) => {
            let { optionType: a, options: s } = e;
            return s.map((e) => {
              var s;
              return {
                id: e.id,
                category: a,
                src: e.src,
                name: null != (s = e.name) ? s : "",
              };
            });
          },
        ),
        l = (0, r.zD)("defaultAccessories/fetch", async () => {
          let e = await fetch("/api/accessories");
          return (await e.json()).flatMap((e) =>
            e.items.map((a) => ({
              id: a.id,
              category: e.category,
              src: a.imageUrl,
              name: a.name,
            })),
          );
        }),
        d = (0, r.Z0)({
          name: "defaultAccessories",
          initialState: { accessories: t },
          reducers: {
            addDefaultAccessory(e, a) {
              e.accessories.push(a.payload);
            },
            replaceDefaultAccessory(e, a) {
              let s = e.accessories.find((e) => e.id === a.payload.id);
              s && ((s.src = a.payload.src), (s.name = a.payload.name));
            },
            removeDefaultAccessory(e, a) {
              e.accessories = e.accessories.filter((e) => e.id !== a.payload);
            },
          },
          extraReducers: (e) => {
            e.addCase(l.fulfilled, (e, a) => {
              let s = [...t];
              a.payload.forEach((e) => {
                s.find((a) => a.id === e.id) || s.push(e);
              }),
                (e.accessories = s);
            });
          },
        }),
        {
          addDefaultAccessory: o,
          replaceDefaultAccessory: n,
          removeDefaultAccessory: u,
        } = d.actions,
        p = d.reducer;
    },
  },
]);
