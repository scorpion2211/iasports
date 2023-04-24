(self.webpackChunkMiLocal = self.webpackChunkMiLocal || []).push([
  [4174],
  {
    4174: (e, i, t) => {
      "use strict";
      t.r(i), t.d(i, { RegisterPageModule: () => _ });
      var r = t(8583),
        o = t(665),
        s = t(3083),
        n = t(7338),
        a = t(4762),
        l = t(5304),
        g = t(8259),
        m = t.n(g),
        c = t(639),
        d = t(167),
        p = t(7019),
        u = t(7526);
      function h(e, i) {
        if (
          (1 & e && (c.TgZ(0, "ion-select-option", 16), c._uU(1), c.qZA()),
          2 & e)
        ) {
          const e = i.$implicit;
          c.Q6J("value", e.geonameId), c.xp6(1), c.Oqu(e.name);
        }
      }
      function Z(e, i) {
        if (
          (1 & e && (c.TgZ(0, "ion-select-option", 16), c._uU(1), c.qZA()),
          2 & e)
        ) {
          const e = i.$implicit;
          c.Q6J("value", e.geonameId), c.xp6(1), c.Oqu(e.toponymName);
        }
      }
      const v = [
        {
          path: "",
          component: (() => {
            class e {
              constructor(e, i, t, r, s, n) {
                (this.navCtrl = e),
                  (this.abmService = i),
                  (this.subjects = t),
                  (this.loadingCtrl = r),
                  (this.tools = s),
                  (this.fb = n),
                  (this.provinces = []),
                  (this.cities = []),
                  (this.registerForm = this.fb.group({
                    first_name: ["", o.kI.required],
                    last_name: ["", o.kI.required],
                    full_name: ["", o.kI.required],
                    cellphone: ["", o.kI.required],
                    email: ["", [o.kI.required, o.kI.email]],
                    pass: ["", o.kI.required],
                    birthdate: ["", o.kI.required],
                    province: ["", o.kI.required],
                    city: ["", o.kI.required],
                    expose_phone: [!0],
                    expose_email: [!0],
                    province_id: [-1, o.kI.required],
                    city_id: [-2, o.kI.required],
                  }));
              }
              ionViewDidEnter() {
                this.loadProvinces();
              }
              loadProvinces() {
                this.subjects.provinces$.subscribe((e) => {
                  (this.provinces = [...e]),
                    setTimeout(() => {
                      this.registerForm.get("province_id").setValue(3435907),
                        this.loadCities();
                    }, 50);
                });
              }
              loadCities() {
                const e = this.provinces.find(
                  (e) =>
                    e.geonameId === this.registerForm.get("province_id").value
                );
                this.cities = [...e.cities];
              }
              get isValidName() {
                let e = this.tools.capitalizeAllWords(
                  this.registerForm.get("first_name").value
                );
                return (
                  this.registerForm.get("first_name").setValue(e),
                  this.registerForm.get("first_name").value.length > 0 ||
                    !this.registerForm.get("first_name").touched
                );
              }
              get isValidLastName() {
                let e = this.tools.capitalizeAllWords(
                  this.registerForm.get("last_name").value
                );
                return (
                  this.registerForm.get("last_name").setValue(e),
                  this.registerForm.get("last_name").value.length > 0 ||
                    !this.registerForm.get("last_name").touched
                );
              }
              get isValidPhone() {
                let e = this.tools.validatePhoneNumber(
                  this.registerForm.get("cellphone").value
                );
                return (
                  this.registerForm.get("cellphone").setValue(e),
                  this.registerForm.get("cellphone").value.length >= 10 ||
                    !this.registerForm.get("cellphone").touched
                );
              }
              get isValidEmail() {
                return (
                  (this.registerForm.value.email.length > 0 &&
                    this.tools.validEmail(this.registerForm.value.email)) ||
                  !this.registerForm.get("email").touched
                );
              }
              get isValidPass() {
                return (
                  this.registerForm.get("pass").value.length > 3 ||
                  !this.registerForm.get("pass").touched
                );
              }
              get isValidBirthdate() {
                return (
                  10 === this.registerForm.get("birthdate").value.length ||
                  !this.registerForm.get("birthdate").touched
                );
              }
              get isValidProvince() {
                return (
                  this.registerForm.get("province_id").value > -2 ||
                  !this.registerForm.get("province_id").touched
                );
              }
              get isValidCity() {
                return (
                  this.registerForm.get("city_id").value > -2 ||
                  !this.registerForm.get("city_id").touched
                );
              }
              get ValidForm() {
                return (
                  this.isValidName &&
                  this.isValidLastName &&
                  this.isValidPhone &&
                  this.isValidEmail &&
                  this.isValidPass &&
                  this.isValidBirthdate &&
                  this.isValidProvince &&
                  this.isValidCity
                );
              }
              register() {
                return (0, a.mG)(this, void 0, void 0, function* () {
                  if (
                    (Object.keys(this.registerForm.controls).forEach((e) => {
                      this.registerForm.get(e).markAsTouched();
                    }),
                    !this.ValidForm)
                  )
                    return void m().fire({
                      icon: "warning",
                      title: "Campos incompletos",
                    });
                  const e = yield this.loadingCtrl.create({
                    message: "Loading...",
                    duration: 0,
                    cssClass: "custom-loading",
                  });
                  e.present(),
                    this.registerForm
                      .get("province")
                      .setValue(
                        this.tools.getNameListCountries(
                          [...this.provinces],
                          this.registerForm.get("province_id").value,
                          "name"
                        )
                      ),
                    this.registerForm
                      .get("city")
                      .setValue(
                        this.tools.getNameListCountries(
                          [...this.cities],
                          this.registerForm.get("city_id").value,
                          "toponymName"
                        )
                      );
                  let i = new FormData();
                  i.append("id_user", "-1"),
                    i.append(
                      "first_name",
                      this.registerForm.get("first_name").value
                    ),
                    i.append(
                      "last_name",
                      this.registerForm.get("last_name").value
                    ),
                    i.append(
                      "full_name",
                      this.registerForm.get("first_name").value +
                        " " +
                        this.registerForm.get("last_name").value
                    ),
                    i.append(
                      "birthdate",
                      this.registerForm.get("birthdate").value
                    ),
                    i.append(
                      "cellphone",
                      this.registerForm.get("cellphone").value
                    ),
                    i.append("email", this.registerForm.get("email").value),
                    i.append("pass", this.registerForm.get("pass").value),
                    i.append(
                      "province",
                      this.registerForm.get("province").value
                    ),
                    i.append("city", this.registerForm.get("city").value),
                    i.append(
                      "province_id",
                      this.registerForm.get("province_id").value.toString()
                    ),
                    i.append(
                      "city_id",
                      this.registerForm.get("city_id").value.toString()
                    ),
                    i.append(
                      "expose_phone",
                      this.registerForm.get("expose_phone").value.toString()
                    ),
                    i.append(
                      "expose_email",
                      this.registerForm.get("expose_email").value.toString()
                    ),
                    i.append("type", "create"),
                    this.abmService
                      .ABMUsers(i)
                      .pipe(
                        (0, l.K)((i) => {
                          throw (
                            (m().fire({
                              icon: "error",
                              title: "Error del servidor",
                            }),
                            e.dismiss(),
                            Object.assign({}, i))
                          );
                        })
                      )
                      .subscribe((i) => {
                        if ((e.dismiss(), i.result)) {
                          m().fire({
                            icon: "success",
                            title: "Usuario registrado",
                          });
                          const e = btoa(JSON.stringify(i.data));
                          return (
                            localStorage.setItem("user", e),
                            void this.navCtrl.navigateForward("/home/schedule")
                          );
                        }
                        m().fire({
                          icon: "error",
                          title: "Error al registrar usuario",
                          text: i.message,
                        });
                      });
                });
              }
            }
            return (
              (e.ɵfac = function (i) {
                return new (i || e)(
                  c.Y36(s.SH),
                  c.Y36(d.b),
                  c.Y36(p.n),
                  c.Y36(s.HT),
                  c.Y36(u.G),
                  c.Y36(o.qu)
                );
              }),
              (e.ɵcmp = c.Xpm({
                type: e,
                selectors: [["app-register"]],
                decls: 68,
                vars: 20,
                consts: [
                  [1, "container"],
                  [1, "register-card"],
                  [3, "formGroup"],
                  ["position", "floating"],
                  ["type", "text", "formControlName", "first_name"],
                  ["type", "text", "formControlName", "last_name"],
                  [
                    "type",
                    "text",
                    "formControlName",
                    "cellphone",
                    "placeholder",
                    "sin 0 y sin el 15",
                  ],
                  ["type", "email", "formControlName", "email"],
                  ["type", "text", "formControlName", "pass"],
                  [
                    "type",
                    "date",
                    "formControlName",
                    "birthdate",
                    2,
                    "text-align",
                    "right",
                  ],
                  [
                    "title",
                    "Har\xe1 visible el n\xfamero para los dem\xe1s usuarios",
                  ],
                  ["mode", "ios", "formControlName", "expose_phone"],
                  ["mode", "ios", "formControlName", "expose_email"],
                  [
                    "formControlName",
                    "province_id",
                    "interface",
                    "popover",
                    "mode",
                    "ios",
                    3,
                    "ionChange",
                  ],
                  [3, "value", 4, "ngFor", "ngForOf"],
                  [
                    "formControlName",
                    "city_id",
                    "interface",
                    "popover",
                    "mode",
                    "ios",
                  ],
                  [3, "value"],
                  [1, "ion-margin-top"],
                  [
                    "expand",
                    "block",
                    1,
                    "animate__animated",
                    "animate__lightSpeedInLeft",
                    3,
                    "click",
                  ],
                  [
                    "routerLink",
                    "/login",
                    "color",
                    "dark",
                    "expand",
                    "block",
                    1,
                    "animate__animated",
                    "animate__lightSpeedInRight",
                  ],
                ],
                template: function (e, i) {
                  1 & e &&
                    (c.TgZ(0, "ion-content"),
                    c.TgZ(1, "div", 0),
                    c.TgZ(2, "ion-card", 1),
                    c.TgZ(3, "form", 2),
                    c.TgZ(4, "h1"),
                    c._uU(5, "Registro"),
                    c.qZA(),
                    c.TgZ(6, "ion-item"),
                    c.TgZ(7, "ion-label", 3),
                    c.TgZ(8, "b"),
                    c._uU(9, "Nombre"),
                    c.qZA(),
                    c.qZA(),
                    c._UZ(10, "ion-input", 4),
                    c.qZA(),
                    c.TgZ(11, "ion-item"),
                    c.TgZ(12, "ion-label", 3),
                    c.TgZ(13, "b"),
                    c._uU(14, "Apellido"),
                    c.qZA(),
                    c.qZA(),
                    c._UZ(15, "ion-input", 5),
                    c.qZA(),
                    c.TgZ(16, "ion-item"),
                    c.TgZ(17, "ion-label", 3),
                    c.TgZ(18, "b"),
                    c._uU(19, "Celular"),
                    c.qZA(),
                    c._uU(20, " (con c\xf3digo de area)"),
                    c.qZA(),
                    c._UZ(21, "ion-input", 6),
                    c.qZA(),
                    c.TgZ(22, "ion-item"),
                    c.TgZ(23, "ion-label", 3),
                    c.TgZ(24, "b"),
                    c._uU(25, "Correo Electr\xf3nico"),
                    c.qZA(),
                    c.qZA(),
                    c._UZ(26, "ion-input", 7),
                    c.qZA(),
                    c.TgZ(27, "ion-item"),
                    c.TgZ(28, "ion-label", 3),
                    c.TgZ(29, "b"),
                    c._uU(30, "Clave"),
                    c.qZA(),
                    c.qZA(),
                    c._UZ(31, "ion-input", 8),
                    c.qZA(),
                    c.TgZ(32, "ion-item"),
                    c.TgZ(33, "ion-label"),
                    c.TgZ(34, "b"),
                    c._uU(35, "Fecha de nacimiento"),
                    c.qZA(),
                    c.qZA(),
                    c._UZ(36, "ion-input", 9),
                    c.qZA(),
                    c.TgZ(37, "ion-item"),
                    c.TgZ(38, "ion-label", 10),
                    c.TgZ(39, "b"),
                    c._uU(40, "Compartir celular"),
                    c.qZA(),
                    c.qZA(),
                    c._UZ(41, "ion-checkbox", 11),
                    c.qZA(),
                    c.TgZ(42, "ion-item"),
                    c.TgZ(43, "ion-label", 10),
                    c.TgZ(44, "b"),
                    c._uU(45, "Compartir correo"),
                    c.qZA(),
                    c.qZA(),
                    c._UZ(46, "ion-checkbox", 12),
                    c.qZA(),
                    c.TgZ(47, "ion-item"),
                    c.TgZ(48, "ion-label"),
                    c.TgZ(49, "b"),
                    c._uU(50, "Provincia"),
                    c.qZA(),
                    c.qZA(),
                    c.TgZ(51, "ion-select", 13),
                    c.NdJ("ionChange", function () {
                      return i.loadCities();
                    }),
                    c.YNc(52, h, 2, 2, "ion-select-option", 14),
                    c.qZA(),
                    c.qZA(),
                    c.TgZ(53, "ion-item"),
                    c.TgZ(54, "ion-label"),
                    c.TgZ(55, "b"),
                    c._uU(56, "Partido/Barrio"),
                    c.qZA(),
                    c.qZA(),
                    c.TgZ(57, "ion-select", 15),
                    c.TgZ(58, "ion-select-option", 16),
                    c._uU(59, "Otro"),
                    c.qZA(),
                    c.YNc(60, Z, 2, 2, "ion-select-option", 14),
                    c.qZA(),
                    c.qZA(),
                    c.TgZ(61, "ion-row", 17),
                    c.TgZ(62, "ion-col"),
                    c.TgZ(63, "ion-button", 18),
                    c.NdJ("click", function () {
                      return i.register();
                    }),
                    c._uU(64, "Registrarse"),
                    c.qZA(),
                    c.qZA(),
                    c.TgZ(65, "ion-col"),
                    c.TgZ(66, "ion-button", 19),
                    c._uU(67, "Cancelar"),
                    c.qZA(),
                    c.qZA(),
                    c.qZA(),
                    c.qZA(),
                    c.qZA(),
                    c.qZA(),
                    c.qZA()),
                    2 & e &&
                      (c.xp6(3),
                      c.Q6J("formGroup", i.registerForm),
                      c.xp6(3),
                      c.Tol(i.isValidName ? "" : "form-invalid"),
                      c.xp6(5),
                      c.Tol(i.isValidLastName ? "" : "form-invalid"),
                      c.xp6(5),
                      c.Tol(i.isValidPhone ? "" : "form-invalid"),
                      c.xp6(6),
                      c.Tol(i.isValidEmail ? "" : "form-invalid"),
                      c.xp6(5),
                      c.Tol(i.isValidPass ? "" : "form-invalid"),
                      c.xp6(5),
                      c.Tol(i.isValidBirthdate ? "" : "form-invalid"),
                      c.xp6(15),
                      c.Tol(i.isValidProvince ? "" : "form-invalid"),
                      c.xp6(5),
                      c.Q6J("ngForOf", i.provinces),
                      c.xp6(1),
                      c.Tol(i.isValidCity ? "" : "form-invalid"),
                      c.xp6(5),
                      c.Q6J("value", -1),
                      c.xp6(2),
                      c.Q6J("ngForOf", i.cities));
                },
                directives: [
                  s.W2,
                  s.PM,
                  o._Y,
                  o.JL,
                  o.sg,
                  s.Ie,
                  s.Q$,
                  s.pK,
                  s.j9,
                  o.JJ,
                  o.u,
                  s.nz,
                  s.w,
                  s.t9,
                  s.QI,
                  r.sg,
                  s.n0,
                  s.Nd,
                  s.wI,
                  s.YG,
                  s.YI,
                  n.rH,
                ],
                styles: [
                  ".container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%;background-image:url(./assets/img/b1.jpg);background-size:cover;background-position:50%}.register-card[_ngcontent-%COMP%]{width:90%;max-width:500px;background-color:#ffffffb3;box-shadow:0 0 10px #00000080;border-radius:10px;padding:10px 20px;text-align:center}.register-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:35px;font-family:Autodex,sans-serif;color:#222;margin-top:5px}.checks[_ngcontent-%COMP%]{display:flex}ion-button[_ngcontent-%COMP%]{margin:0}ion-item[_ngcontent-%COMP%]{--background:#ffffffb3}@media (max-width: 768px){.register-card[_ngcontent-%COMP%]{width:100%;max-width:none;margin:0;border-radius:0;padding:10px 20px;height:100vh;overflow-y:auto}}",
                ],
              })),
              e
            );
          })(),
        },
      ];
      let f = (() => {
          class e {}
          return (
            (e.ɵfac = function (i) {
              return new (i || e)();
            }),
            (e.ɵmod = c.oAB({ type: e })),
            (e.ɵinj = c.cJS({ imports: [[n.Bz.forChild(v)], n.Bz] })),
            e
          );
        })(),
        _ = (() => {
          class e {}
          return (
            (e.ɵfac = function (i) {
              return new (i || e)();
            }),
            (e.ɵmod = c.oAB({ type: e })),
            (e.ɵinj = c.cJS({ imports: [[r.ez, o.u5, s.Pc, f, o.UX]] })),
            e
          );
        })();
    },
  },
]);
