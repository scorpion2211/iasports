(self["webpackChunkMiLocal"] = self["webpackChunkMiLocal"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage],
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 1021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 8781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/posts.service */ 752);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_subjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/subjects */ 7019);










let LoginPage = class LoginPage {
    constructor(formBuilder, postServices, subjects, navCtrl, loadingCtrl) {
        this.formBuilder = formBuilder;
        this.postServices = postServices;
        this.subjects = subjects;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.showPasswordIcon = 'eye-off-outline';
        this.passwordInputType = 'password';
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        });
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        });
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.loginForm.valid) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                    icon: 'info',
                    title: 'Complete usuario y clave',
                    text: 'El usuario puede ser su correo o número de celular',
                });
                return;
            }
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...',
                duration: 0,
                cssClass: 'custom-loading',
            });
            loading.present();
            this.postServices
                .initSession(this.loginForm.get('username').value, this.loginForm.get('password').value)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                    icon: 'error',
                    title: 'Error del servidor',
                });
                loading.dismiss();
                throw Object.assign({}, error);
            }))
                .subscribe((response) => {
                loading.dismiss();
                if (!response.result) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                        icon: 'warning',
                        title: 'Datos incorrectos',
                        text: response.message,
                    });
                    return;
                }
                this.subjects.user$.next(response.data);
                const sessionEncrypted = btoa(JSON.stringify(response.data));
                localStorage.setItem('token', sessionEncrypted);
                this.navCtrl.navigateForward('/home/schedule');
            });
        });
    }
    forgotPassword() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
            icon: 'warning',
            title: 'NO DISPONIBLE',
            text: 'Me encuentro trabajando en el despacho de correos, si necesitas una nueva clave, por favor contactete con el administrador',
        });
        /* Swal.fire({
          title: 'Coloque su usuario',
          input: 'text',
          inputAttributes: {
            autocapitalize: 'off',
          },
          showCancelButton: true,
          confirmButtonText: 'Look up',
          showLoaderOnConfirm: true,
          preConfirm: (login) => {
            return fetch(`//api.github.com/users/${login}`)
              .then((response) => {
                if (!response.ok) {
                  throw new Error(response.statusText);
                }
                return response.json();
              })
              .catch((error) => {
                Swal.showValidationMessage(`Request failed: ${error}`);
              });
          },
          allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: `${result.value.login}'s avatar`,
              imageUrl: result.value.avatar_url,
            });
          }
        }); */
    }
    showPassword() {
        if (this.passwordInputType === 'password') {
            this.passwordInputType = 'text';
            this.showPasswordIcon = 'eye-outline';
            return;
        }
        this.passwordInputType = 'password';
        this.showPasswordIcon = 'eye-off-outline';
        return;
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_posts_service__WEBPACK_IMPORTED_MODULE_2__.PostsService },
    { type: src_app_services_subjects__WEBPACK_IMPORTED_MODULE_4__.SubjectsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 8781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  background-image: url(\"/assets/img/b1.jpg\");\n  background-size: cover;\n  background-position: center;\n}\n\n.login-card {\n  width: 90%;\n  max-width: 500px;\n  background-color: rgba(255, 255, 255, 0.7);\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  padding: 20px;\n  text-align: center;\n}\n\n.login-logo {\n  width: 200px;\n  margin: 20px auto;\n  display: block;\n  border-radius: 5px;\n}\n\nion-item {\n  margin-bottom: 10px;\n  --border-radius: 10px;\n}\n\nion-input {\n  --padding-start: 10px;\n}\n\n.forgot-button {\n  --border-radius: 10px;\n  text-decoration: none;\n}\n\n@media (min-width: 768px) {\n  .login-card {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQUE7RUFDRjtBQUNGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvYjEuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW4tY2FyZCB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1sb2dvIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG59XHJcblxyXG4uZm9yZ290LWJ1dHRvbiB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmxvZ2luLWNhcmQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 1021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"container\">\n    <ion-card class=\"login-card\">\n      <img src=\"assets/img/logo0.png\" alt=\"Logo\" class=\"login-logo\" />\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n        <ion-item>\n          <ion-icon slot=\"start\" name=\"person-outline\"></ion-icon>\n          <ion-input\n            type=\"text\"\n            placeholder=\"Usuario\"\n            formControlName=\"username\"\n            (keyup.enter)=\"onSubmit()\"\n          ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-icon slot=\"start\" name=\"lock-closed-outline\"></ion-icon>\n          <ion-input\n            [type]=\"passwordInputType\"\n            placeholder=\"Contraseña\"\n            formControlName=\"password\"\n            (keyup.enter)=\"onSubmit()\"\n          ></ion-input>\n          <ion-button\n            icon-only\n            fill=\"clear\"\n            color=\"dark\"\n            (click)=\"showPassword()\"\n          >\n            <ion-icon name=\"{{ showPasswordIcon }}\"></ion-icon>\n          </ion-button>\n        </ion-item>\n        <ion-row class=\"ion-margin-top\">\n          <ion-col>\n            <ion-button\n              color=\"primary\"\n              expand=\"block\"\n              class=\"login-button animate__animated animate__lightSpeedInLeft\"\n              (click)=\"onSubmit()\"\n              >Ingresar</ion-button\n            >\n          </ion-col>\n          <ion-col>\n            <ion-button\n              routerLink=\"/register\"\n              color=\"dark\"\n              expand=\"block\"\n              class=\"register-button animate__animated animate__lightSpeedInRight\"\n              >Registrarse</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </form>\n      <ion-row class=\"ion-margin-top\">\n        <ion-col>\n          <a (click)=\"forgotPassword()\" class=\"forgot-button\"\n            >¿Olvidó su contraseña?</a\n          >\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map