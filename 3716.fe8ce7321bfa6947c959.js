(self.webpackChunkMiLocal = self.webpackChunkMiLocal || []).push([
  [3716],
  {
    5167: (e, n, t) => {
      "use strict";
      t.d(n, { S: () => i });
      var o = t(639);
      let i = (() => {
        class e {
          constructor() {}
          ngOnInit() {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵcmp = o.Xpm({
            type: e,
            selectors: [["app-background"]],
            decls: 1,
            vars: 0,
            consts: [[1, "gb-general"]],
            template: function (e, n) {
              1 & e && o._UZ(0, "div", 0);
            },
            styles: [
              ".gb-general[_ngcontent-%COMP%]{position:fixed;top:0;width:100%;height:100vh;background-image:url(./assets/img/b1.jpg);background-repeat:no-repeat;background-size:cover;z-index:-1;opacity:.7;filter:blur(2px)}",
            ],
          })),
          e
        );
      })();
    },
    3716: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, { HomePageModule: () => b });
      var o = t(8583),
        i = t(665),
        a = t(3083),
        s = t(7338),
        r = t(639),
        c = t(7702),
        l = t(4762),
        d = t(7371);
      let u = (() => {
        class e {
          constructor(e, n) {
            (this.asCtrl = e), (this.popCtrl = n);
          }
          ngOnInit() {}
          Opciones(e) {
            return (0, l.mG)(this, void 0, void 0, function* () {
              const n = yield this.popCtrl.create({
                component: d.q,
                cssClass: "my-custom-class",
                event: e,
                translucent: !0,
                mode: "ios",
              });
              yield n.present(), yield n.onDidDismiss();
            });
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(r.Y36(a.BX), r.Y36(a.Dh));
          }),
          (e.ɵcmp = r.Xpm({
            type: e,
            selectors: [["app-header"]],
            inputs: { title: "title" },
            decls: 10,
            vars: 1,
            consts: [
              ["mode", "md", 1, "header"],
              [
                "mode",
                "md",
                "id",
                "cabeceras",
                1,
                "flex_row",
                "flex_between",
                "flex_center_vertical",
                "header",
              ],
              [
                "src",
                "./assets/img/logo0.png",
                "width",
                "50px",
                "alt",
                "logo",
                "slot",
                "start",
              ],
              ["mode", "md", 1, "header__title"],
              ["slot", "start", "mode", "md"],
              ["slot", "end"],
              [3, "click"],
              ["name", "settings"],
            ],
            template: function (e, n) {
              1 & e &&
                (r.TgZ(0, "ion-header", 0),
                r.TgZ(1, "ion-toolbar", 1),
                r._UZ(2, "img", 2),
                r.TgZ(3, "ion-title", 3),
                r._uU(4),
                r.qZA(),
                r._UZ(5, "div"),
                r._UZ(6, "ion-menu-button", 4),
                r.TgZ(7, "ion-buttons", 5),
                r.TgZ(8, "ion-button", 6),
                r.NdJ("click", function (e) {
                  return n.Opciones(e);
                }),
                r._UZ(9, "ion-icon", 7),
                r.qZA(),
                r.qZA(),
                r.qZA(),
                r.qZA()),
                2 & e && (r.xp6(4), r.Oqu(n.title));
            },
            directives: [a.Gu, a.sr, a.wd, a.fG, a.Sm, a.YG, a.gu],
            styles: [
              "ion-toolbar{--background:var(--violte);--background:linear-gradient(270deg,var(--red-cris) 0%,#190e34 63%,#000 100%);--color:#fff}.header__title[_ngcontent-%COMP%]{font-family:Autodex,sans-serif;font-size:35px}",
            ],
          })),
          e
        );
      })();
      var g = t(5167);
      function p(e, n) {
        if (
          (1 & e &&
            (r.TgZ(0, "ion-tab-button", 5),
            r._UZ(1, "ion-icon", 6),
            r.TgZ(2, "ion-label"),
            r._uU(3),
            r.qZA(),
            r.qZA()),
          2 & e)
        ) {
          const e = n.$implicit;
          r.Q6J("tab", e.value),
            r.xp6(1),
            r.Q6J("name", e.icon),
            r.xp6(2),
            r.Oqu(e.name);
        }
      }
      const m = [
        {
          path: "",
          component: (() => {
            class e {
              constructor(e) {
                (this.subjects = e),
                  (this.tabs = [
                    { value: "schedule", name: "Horarios", icon: "time" },
                    { value: "players", name: "Jugadores", icon: "people" },
                    { value: "profile", name: "Perfil", icon: "person-circle" },
                  ]),
                  this.subjects.LoadList(),
                  this.subjects.loadSession();
              }
              ngOnInit() {}
            }
            return (
              (e.ɵfac = function (n) {
                return new (n || e)(r.Y36(c.n));
              }),
              (e.ɵcmp = r.Xpm({
                type: e,
                selectors: [["app-home"]],
                decls: 9,
                vars: 1,
                consts: [
                  ["title", "IA SPORTS"],
                  [1, "container"],
                  [1, "tabs"],
                  ["slot", "bottom", "mode", "ios"],
                  ["class", "active", 3, "tab", 4, "ngFor", "ngForOf"],
                  [1, "active", 3, "tab"],
                  [3, "name"],
                ],
                template: function (e, n) {
                  1 & e &&
                    (r._UZ(0, "app-header", 0),
                    r.TgZ(1, "ion-content"),
                    r.TgZ(2, "div", 1),
                    r._UZ(3, "app-background"),
                    r.TgZ(4, "h1"),
                    r._uU(5, "Bienvenido"),
                    r.qZA(),
                    r.qZA(),
                    r.TgZ(6, "ion-tabs", 2),
                    r.TgZ(7, "ion-tab-bar", 3),
                    r.YNc(8, p, 4, 3, "ion-tab-button", 4),
                    r.qZA(),
                    r.qZA(),
                    r.qZA()),
                    2 & e && (r.xp6(8), r.Q6J("ngForOf", n.tabs));
                },
                directives: [u, a.W2, g.S, a.UN, a.yq, o.sg, a.ZU, a.gu, a.Q$],
                styles: [
                  ".container[_ngcontent-%COMP%]{background-color:#e5e9e5;background-image:url(./assets/img/logo2.png);background-size:cover;background-repeat:no-repeat;background-position:50%;height:calc(100vh - 106px);overflow:hidden}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:Autodex,sans-serif;font-size:105px}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:auto;text-align:center}.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Blacksword,sans-serif;font-size:45px}@media (max-width: 500px){.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:55px}.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:25px}}@media (min-width: 1360px){.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:155px;color:#fff;display:none}}",
                ],
              })),
              e
            );
          })(),
          children: [
            {
              path: "schedule",
              loadChildren: () =>
                Promise.all([t.e(8592), t.e(2830)])
                  .then(t.bind(t, 2830))
                  .then((e) => e.SchedulePageModule),
            },
            {
              path: "players",
              loadChildren: () =>
                Promise.all([t.e(8592), t.e(7657)])
                  .then(t.bind(t, 7657))
                  .then((e) => e.PlayersPageModule),
            },
            {
              path: "profile",
              loadChildren: () =>
                Promise.all([t.e(8592), t.e(5190)])
                  .then(t.bind(t, 5190))
                  .then((e) => e.ProfilePageModule),
            },
          ],
        },
      ];
      let h = (() => {
        class e {}
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵmod = r.oAB({ type: e })),
          (e.ɵinj = r.cJS({ imports: [[s.Bz.forChild(m)], s.Bz] })),
          e
        );
      })();
      var f = t(5642);
      let b = (() => {
        class e {}
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵmod = r.oAB({ type: e })),
          (e.ɵinj = r.cJS({ imports: [[o.ez, i.u5, a.Pc, h, f.K]] })),
          e
        );
      })();
    },
  },
]);
