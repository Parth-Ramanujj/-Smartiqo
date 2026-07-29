"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7070],
  {
    17070: (e, r, a) => {
      let o;
      a.d(r, {
        Ay: () => O,
        IJ: () => V,
        R4: () => T,
        e: () => k,
        w3: () => R,
        uj: () => E,
      });
      var d = a(5710);
      let t = {
          randomUUID:
            "undefined" != typeof crypto &&
            crypto.randomUUID &&
            crypto.randomUUID.bind(crypto),
        },
        i = new Uint8Array(16),
        s = [];
      for (let e = 0; e < 256; ++e) s.push((e + 256).toString(16).slice(1));
      let n = function (e, r, a) {
          if (t.randomUUID && !r && !e) return t.randomUUID();
          var d = e,
            n = a;
          let c =
            (d = d || {}).random ??
            d.rng?.() ??
            (function () {
              if (!o) {
                if ("undefined" == typeof crypto || !crypto.getRandomValues)
                  throw Error(
                    "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
                  );
                o = crypto.getRandomValues.bind(crypto);
              }
              return o(i);
            })();
          if (c.length < 16) throw Error("Random bytes length must be >= 16");
          if (((c[6] = (15 & c[6]) | 64), (c[8] = (63 & c[8]) | 128), r)) {
            if ((n = n || 0) < 0 || n + 16 > r.length)
              throw RangeError(
                `UUID byte range ${n}:${n + 15} is out of buffer bounds`,
              );
            for (let e = 0; e < 16; ++e) r[n + e] = c[e];
            return r;
          }
          return (function (e, r = 0) {
            return (
              s[e[r + 0]] +
              s[e[r + 1]] +
              s[e[r + 2]] +
              s[e[r + 3]] +
              "-" +
              s[e[r + 4]] +
              s[e[r + 5]] +
              "-" +
              s[e[r + 6]] +
              s[e[r + 7]] +
              "-" +
              s[e[r + 8]] +
              s[e[r + 9]] +
              "-" +
              s[e[r + 10]] +
              s[e[r + 11]] +
              s[e[r + 12]] +
              s[e[r + 13]] +
              s[e[r + 14]] +
              s[e[r + 15]]
            ).toLowerCase();
          })(c);
        },
        c = {
          orders: [{ ordersColumns: [], ordersRows: [] }],
          productsPricing: [
            {
              id: n(),
              productCategory: "",
              productType: "",
              productPrice: "",
              productDiscount: "",
            },
          ],
          salesPerson: [{ salesPersonColumns: [], salesPersonRows: [] }],
          userCreation: [
            {
              id: n(),
              firstName: "",
              lastName: "",
              emailId: "",
              phoneNo: "",
              priceVisibility: "",
            },
          ],
          addAccessory: [
            {
              id: n(),
              accessoryType: "",
              accessoryCategory: "",
              accessoryImage: void 0,
            },
          ],
          adminProfile: [
            {
              firstName: "Pankaj",
              lastName: "Kushwaha",
              emailId: "kushwahap255@gmail.com",
              phoneNo: "9265241462",
            },
            {
              firstName: "Pankaj",
              lastName: "Kushwaha",
              emailId: "kushwahap255@gmail.com",
              phoneNo: "9265241462",
            },
          ],
        },
        p = (0, d.Z0)({
          name: "admin",
          initialState: c,
          reducers: {
            addUndefinedObjectInProductPriceArr: (e) => {
              let r = {
                id: n(),
                productCategory: "",
                productType: "",
                productPrice: "",
                productDiscount: "",
              };
              e.productsPricing.push(r);
            },
            removeObjectInProductPriceArr: (e, r) => {
              let a = r.payload;
              e.productsPricing = e.productsPricing.filter((e) => e.id !== a);
            },
            updateProductCategory: (e, r) => {
              let { id: a, productCategory: o } = r.payload,
                d = e.productsPricing.find((e) => e.id === a);
              d && (d.productCategory = o);
            },
            updateProductType: (e, r) => {
              let { id: a, productType: o } = r.payload,
                d = e.productsPricing.find((e) => e.id === a);
              d && (d.productType = o);
            },
            updateProductPrice: (e, r) => {
              let { id: a, productPrice: o } = r.payload,
                d = e.productsPricing.find((e) => e.id === a);
              d && (d.productPrice = o);
            },
            updateProductDiscount: (e, r) => {
              let { id: a, productDiscount: o } = r.payload,
                d = e.productsPricing.find((e) => e.id === a);
              d && (d.productDiscount = o);
            },
            addUndefinedObjectInUserCreationArr: (e) => {
              let r = {
                id: n(),
                firstName: "",
                lastName: "",
                emailId: "",
                phoneNo: "",
                priceVisibility: "",
              };
              e.userCreation.push(r);
            },
            removeObjectInUserCreationArr: (e, r) => {
              let a = r.payload;
              e.userCreation = e.userCreation.filter((e) => e.id !== a);
            },
            updateUserFirstName: (e, r) => {
              let { id: a, firstName: o } = r.payload,
                d = e.userCreation.find((e) => e.id === a);
              d && (d.firstName = o);
            },
            updateUserLastName: (e, r) => {
              let { id: a, lastName: o } = r.payload,
                d = e.userCreation.find((e) => e.id === a);
              d && (d.lastName = o);
            },
            updateUserEmail: (e, r) => {
              let { id: a, emailId: o } = r.payload,
                d = e.userCreation.find((e) => e.id === a);
              d && (d.emailId = o);
            },
            updateUserPhoneNo: (e, r) => {
              let { id: a, phoneNo: o } = r.payload,
                d = e.userCreation.find((e) => e.id === a);
              d && (d.phoneNo = o);
            },
            updateUserPriceVisibility: (e, r) => {
              let { id: a, priceVisibility: o } = r.payload,
                d = e.userCreation.find((e) => e.id === a);
              d && o && (d.priceVisibility = o);
            },
            addUndefinedObjectInAddAccessoryArr: (e) => {
              let r = {
                id: n(),
                accessoryType: "",
                accessoryCategory: "",
                accessoryImage: void 0,
              };
              e.addAccessory.push(r);
            },
            removeObjectInAddAccessoryArr: (e, r) => {
              let a = r.payload;
              e.addAccessory = e.addAccessory.filter((e) => e.id !== a);
            },
            updateAccessoryType: (e, r) => {
              let { id: a, accessoryType: o } = r.payload,
                d = e.addAccessory.find((e) => e.id === a);
              d && (d.accessoryType = o);
            },
            updateAccessoryCategory: (e, r) => {
              let { id: a, accessoryCategory: o } = r.payload,
                d = e.addAccessory.find((e) => e.id === a);
              d && (d.accessoryCategory = o);
            },
            updateAccessoryImage: (e, r) => {
              let { id: a, accessoryImage: o } = r.payload,
                d = e.addAccessory.find((e) => e.id === a);
              d && (d.accessoryImage = o);
            },
            updateAdminFirstName: (e, r) => {
              e.adminProfile[1].firstName = r.payload;
            },
            updateAdminLastName: (e, r) => {
              e.adminProfile[1].lastName = r.payload;
            },
            updateAdminEmail: (e, r) => {
              e.adminProfile[1].emailId = r.payload;
            },
            updateAdminPhoneNo: (e, r) => {
              e.adminProfile[1].phoneNo = r.payload;
            },
            revertChanges: (e) => {
              let r = e.adminProfile[0],
                a = e.adminProfile[1];
              (a.firstName = r.firstName),
                (a.lastName = r.lastName),
                (a.emailId = r.emailId),
                (a.phoneNo = r.phoneNo);
            },
          },
        }),
        {
          addUndefinedObjectInProductPriceArr: u,
          removeObjectInProductPriceArr: l,
          updateProductCategory: y,
          updateProductType: m,
          updateProductPrice: f,
          updateProductDiscount: g,
          addUndefinedObjectInUserCreationArr: P,
          removeObjectInUserCreationArr: h,
          updateUserFirstName: N,
          updateUserLastName: A,
          updateUserEmail: C,
          updateUserPhoneNo: I,
          updateUserPriceVisibility: U,
          addUndefinedObjectInAddAccessoryArr: b,
          removeObjectInAddAccessoryArr: w,
          updateAccessoryType: j,
          updateAccessoryCategory: D,
          updateAccessoryImage: v,
          updateAdminFirstName: k,
          updateAdminLastName: R,
          updateAdminEmail: T,
          updateAdminPhoneNo: E,
          revertChanges: V,
        } = p.actions,
        O = p.reducer;
    },
  },
]);
