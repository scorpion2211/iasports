(self.webpackChunkMiLocal = self.webpackChunkMiLocal || []).push([
  [6158],
  {
    6158: (o, t, e) => {
      "use strict";
      e.r(t), e.d(t, { LoginPageModule: () => w });
      var n = e(8583),
        r = e(665),
        i = e(7338),
        s = e(3083),
        a = e(4762),
        c = e(5304),
        u = e(8259),
        d = e.n(u),
        l = e(639),
        g = e(752),
        p = e(7019),
        m = e(7207);
      const h = [
        {
          path: "",
          component: (() => {
            class o {
              constructor(o, t, e, n, i, s) {
                (this.formBuilder = o),
                  (this.postServices = t),
                  (this.subjects = e),
                  (this.navCtrl = n),
                  (this.vars = i),
                  (this.loadingCtrl = s),
                  (this.showPasswordIcon = "eye-off-outline"),
                  (this.passwordInputType = "password"),
                  (this.loginForm = this.formBuilder.group({
                    username: ["", r.kI.required],
                    password: ["", r.kI.required],
                  }));
              }
              ngOnInit() {
                this.loginForm = this.formBuilder.group({
                  username: ["", r.kI.required],
                  password: ["", r.kI.required],
                });
              }
              onSubmit() {
                return (0, a.mG)(this, void 0, void 0, function* () {
                  if (!this.loginForm.valid)
                    return void d().fire({
                      icon: "info",
                      title: "Complete usuario y clave",
                      text: "El usuario puede ser su correo o n\xfamero de celular",
                    });
                  const o = yield this.loadingCtrl.create({
                    message: "Loading...",
                    duration: 0,
                    cssClass: "custom-loading",
                  });
                  o.present(),
                    this.postServices
                      .initSession(
                        this.loginForm.get("username").value,
                        this.loginForm.get("password").value
                      )
                      .pipe(
                        (0, c.K)((t) => {
                          throw (
                            (d().fire({
                              icon: "error",
                              title: "Error del servidor",
                            }),
                            o.dismiss(),
                            Object.assign({}, t))
                          );
                        })
                      )
                      .subscribe((t) => {
                        if ((o.dismiss(), !t.result))
                          return void d().fire({
                            icon: "warning",
                            title: "Datos incorrectos",
                            text: t.message,
                          });
                        this.subjects.user$.next(t.data);
                        const e = btoa(JSON.stringify(t.data));
                        localStorage.setItem("user", e);
                        const n = this.vars.CrearToken(
                          this.loginForm.get("username").value
                        );
                        localStorage.setItem("token", n),
                          this.navCtrl.navigateForward("/home/schedule");
                      });
                });
              }
              forgotPassword() {
                d().fire({
                  icon: "warning",
                  title: "NO DISPONIBLE",
                  text: "Me encuentro trabajando en el despacho de correos, si necesitas una nueva clave, por favor contactete con el administrador",
                });
              }
              showPassword() {
                if ("password" === this.passwordInputType)
                  return (
                    (this.passwordInputType = "text"),
                    void (this.showPasswordIcon = "eye-outline")
                  );
                (this.passwordInputType = "password"),
                  (this.showPasswordIcon = "eye-off-outline");
              }
            }
            return (
              (o.ɵfac = function (t) {
                return new (t || o)(
                  l.Y36(r.qu),
                  l.Y36(g.P),
                  l.Y36(p.n),
                  l.Y36(s.SH),
                  l.Y36(m.a),
                  l.Y36(s.HT)
                );
              }),
              (o.ɵcmp = l.Xpm({
                type: o,
                selectors: [["app-login"]],
                decls: 24,
                vars: 3,
                consts: [
                  [1, "container"],
                  [1, "login-card"],
                  [
                    "src",
                    "assets/img/logo0.png",
                    "alt",
                    "Logo",
                    1,
                    "login-logo",
                  ],
                  [3, "formGroup", "ngSubmit"],
                  ["slot", "start", "name", "person-outline"],
                  [
                    "type",
                    "text",
                    "placeholder",
                    "Usuario",
                    "formControlName",
                    "username",
                    3,
                    "keyup.enter",
                  ],
                  ["slot", "start", "name", "lock-closed-outline"],
                  [
                    "placeholder",
                    "Contrase\xf1a",
                    "formControlName",
                    "password",
                    3,
                    "type",
                    "keyup.enter",
                  ],
                  [
                    "icon-only",
                    "",
                    "fill",
                    "clear",
                    "color",
                    "dark",
                    3,
                    "click",
                  ],
                  [3, "name"],
                  [1, "ion-margin-top"],
                  [
                    "color",
                    "primary",
                    "expand",
                    "block",
                    1,
                    "login-button",
                    "animate__animated",
                    "animate__lightSpeedInLeft",
                    3,
                    "click",
                  ],
                  [
                    "routerLink",
                    "/register",
                    "color",
                    "dark",
                    "expand",
                    "block",
                    1,
                    "register-button",
                    "animate__animated",
                    "animate__lightSpeedInRight",
                  ],
                  [1, "forgot-button", 3, "click"],
                ],
                template: function (o, t) {
                  1 & o &&
                    (l.TgZ(0, "ion-content"),
                    l.TgZ(1, "div", 0),
                    l.TgZ(2, "ion-card", 1),
                    l._UZ(3, "img", 2),
                    l.TgZ(4, "form", 3),
                    l.NdJ("ngSubmit", function () {
                      return t.onSubmit();
                    }),
                    l.TgZ(5, "ion-item"),
                    l._UZ(6, "ion-icon", 4),
                    l.TgZ(7, "ion-input", 5),
                    l.NdJ("keyup.enter", function () {
                      return t.onSubmit();
                    }),
                    l.qZA(),
                    l.qZA(),
                    l.TgZ(8, "ion-item"),
                    l._UZ(9, "ion-icon", 6),
                    l.TgZ(10, "ion-input", 7),
                    l.NdJ("keyup.enter", function () {
                      return t.onSubmit();
                    }),
                    l.qZA(),
                    l.TgZ(11, "ion-button", 8),
                    l.NdJ("click", function () {
                      return t.showPassword();
                    }),
                    l._UZ(12, "ion-icon", 9),
                    l.qZA(),
                    l.qZA(),
                    l.TgZ(13, "ion-row", 10),
                    l.TgZ(14, "ion-col"),
                    l.TgZ(15, "ion-button", 11),
                    l.NdJ("click", function () {
                      return t.onSubmit();
                    }),
                    l._uU(16, "Ingresar"),
                    l.qZA(),
                    l.qZA(),
                    l.TgZ(17, "ion-col"),
                    l.TgZ(18, "ion-button", 12),
                    l._uU(19, "Registrarse"),
                    l.qZA(),
                    l.qZA(),
                    l.qZA(),
                    l.qZA(),
                    l.TgZ(20, "ion-row", 10),
                    l.TgZ(21, "ion-col"),
                    l.TgZ(22, "a", 13),
                    l.NdJ("click", function () {
                      return t.forgotPassword();
                    }),
                    l._uU(23, "\xbfOlvid\xf3 su contrase\xf1a?"),
                    l.qZA(),
                    l.qZA(),
                    l.qZA(),
                    l.qZA(),
                    l.qZA(),
                    l.qZA()),
                    2 & o &&
                      (l.xp6(4),
                      l.Q6J("formGroup", t.loginForm),
                      l.xp6(6),
                      l.Q6J("type", t.passwordInputType),
                      l.xp6(2),
                      l.s9C("name", t.showPasswordIcon));
                },
                directives: [
                  s.W2,
                  s.PM,
                  r._Y,
                  r.JL,
                  r.sg,
                  s.Ie,
                  s.gu,
                  s.pK,
                  s.j9,
                  r.JJ,
                  r.u,
                  s.YG,
                  s.Nd,
                  s.wI,
                  s.YI,
                  i.rH,
                ],
                styles: [
                  ".container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;background-image:url(./assets/img/b1.jpg);background-size:cover;background-position:50%}.login-card[_ngcontent-%COMP%]{width:90%;max-width:500px;background-color:#ffffffb3;box-shadow:0 0 10px #00000080;border-radius:10px;padding:20px;text-align:center}.login-logo[_ngcontent-%COMP%]{width:200px;margin:20px auto;display:block;border-radius:5px}ion-item[_ngcontent-%COMP%]{margin-bottom:10px;--border-radius:10px}ion-input[_ngcontent-%COMP%]{--padding-start:10px}.forgot-button[_ngcontent-%COMP%]{--border-radius:10px;text-decoration:none}@media (min-width: 768px){.login-card[_ngcontent-%COMP%]{width:50%}}",
                ],
              })),
              o
            );
          })(),
        },
      ];
      let f = (() => {
          class o {}
          return (
            (o.ɵfac = function (t) {
              return new (t || o)();
            }),
            (o.ɵmod = l.oAB({ type: o })),
            (o.ɵinj = l.cJS({ imports: [[i.Bz.forChild(h)], i.Bz] })),
            o
          );
        })(),
        w = (() => {
          class o {}
          return (
            (o.ɵfac = function (t) {
              return new (t || o)();
            }),
            (o.ɵmod = l.oAB({ type: o })),
            (o.ɵinj = l.cJS({ imports: [[n.ez, r.u5, s.Pc, f, r.UX, i.Bz]] })),
            o
          );
        })();
    },
  },
]);
