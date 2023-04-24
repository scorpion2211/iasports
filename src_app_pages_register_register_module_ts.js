(self["webpackChunkMiLocal"] = self["webpackChunkMiLocal"] || []).push([["src_app_pages_register_register_module_ts"],{

/***/ 1557:
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 6690);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 207:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 1557);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 6690);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage],
    })
], RegisterPageModule);



/***/ }),

/***/ 6690:
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.page.html */ 4315);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 3436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_services_abm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/abm.service */ 167);
/* harmony import */ var src_app_services_tools_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tools.service */ 7526);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_subjects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/subjects */ 7019);











let RegisterPage = class RegisterPage {
    constructor(navCtrl, abmService, subjects, loadingCtrl, tools, fb) {
        this.navCtrl = navCtrl;
        this.abmService = abmService;
        this.subjects = subjects;
        this.loadingCtrl = loadingCtrl;
        this.tools = tools;
        this.fb = fb;
        this.provinces = [];
        this.cities = [];
        this.registerForm = this.fb.group({
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            full_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            cellphone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
            pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            birthdate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            province: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            expose_phone: [true],
            expose_email: [true],
            province_id: [-1, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            city_id: [-2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        });
    }
    ionViewDidEnter() {
        this.loadProvinces();
    }
    loadProvinces() {
        this.subjects.provinces$.subscribe((data) => {
            this.provinces = [...data];
            setTimeout(() => {
                this.registerForm.get('province_id').setValue(3435907);
                this.loadCities();
            }, 50);
        });
    }
    loadCities() {
        const prov = this.provinces.find((x) => x.geonameId === this.registerForm.get('province_id').value);
        this.cities = [...prov.cities];
    }
    get isValidName() {
        let firstName = this.tools.capitalizeAllWords(this.registerForm.get('first_name').value);
        this.registerForm.get('first_name').setValue(firstName);
        return (this.registerForm.get('first_name').value.length > 0 ||
            !this.registerForm.get('first_name').touched);
    }
    get isValidLastName() {
        let last_name = this.tools.capitalizeAllWords(this.registerForm.get('last_name').value);
        this.registerForm.get('last_name').setValue(last_name);
        return (this.registerForm.get('last_name').value.length > 0 ||
            !this.registerForm.get('last_name').touched);
    }
    get isValidPhone() {
        let cellphone = this.tools.validatePhoneNumber(this.registerForm.get('cellphone').value);
        this.registerForm.get('cellphone').setValue(cellphone);
        return (this.registerForm.get('cellphone').value.length >= 10 ||
            !this.registerForm.get('cellphone').touched);
    }
    get isValidEmail() {
        return ((this.registerForm.value.email.length > 0 &&
            this.tools.validEmail(this.registerForm.value.email)) ||
            !this.registerForm.get('email').touched);
    }
    get isValidPass() {
        return (this.registerForm.get('pass').value.length > 3 ||
            !this.registerForm.get('pass').touched);
    }
    get isValidBirthdate() {
        return (this.registerForm.get('birthdate').value.length === 10 ||
            !this.registerForm.get('birthdate').touched);
    }
    get isValidProvince() {
        return (this.registerForm.get('province_id').value > -2 ||
            !this.registerForm.get('province_id').touched);
    }
    get isValidCity() {
        return (this.registerForm.get('city_id').value > -2 ||
            !this.registerForm.get('city_id').touched);
    }
    get ValidForm() {
        return (this.isValidName &&
            this.isValidLastName &&
            this.isValidPhone &&
            this.isValidEmail &&
            this.isValidPass &&
            this.isValidBirthdate &&
            this.isValidProvince &&
            this.isValidCity);
    }
    register() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let type = 'create';
            let mjs = 'registrar';
            Object.keys(this.registerForm.controls).forEach((key) => {
                this.registerForm.get(key).markAsTouched();
            });
            if (!this.ValidForm) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                    icon: 'warning',
                    title: 'Campos incompletos',
                });
                return;
            }
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...',
                duration: 0,
                cssClass: 'custom-loading',
            });
            loading.present();
            this.registerForm
                .get('province')
                .setValue(this.tools.getNameListCountries([...this.provinces], this.registerForm.get('province_id').value, 'name'));
            this.registerForm
                .get('city')
                .setValue(this.tools.getNameListCountries([...this.cities], this.registerForm.get('city_id').value, 'toponymName'));
            let form = new FormData();
            form.append('id_user', '-1');
            form.append('first_name', this.registerForm.get('first_name').value);
            form.append('last_name', this.registerForm.get('last_name').value);
            form.append('full_name', this.registerForm.get('first_name').value +
                ' ' +
                this.registerForm.get('last_name').value);
            form.append('birthdate', this.registerForm.get('birthdate').value);
            form.append('cellphone', this.registerForm.get('cellphone').value);
            form.append('email', this.registerForm.get('email').value);
            form.append('pass', this.registerForm.get('pass').value);
            form.append('province', this.registerForm.get('province').value);
            form.append('city', this.registerForm.get('city').value);
            form.append('province_id', this.registerForm.get('province_id').value.toString());
            form.append('city_id', this.registerForm.get('city_id').value.toString());
            form.append('expose_phone', this.registerForm.get('expose_phone').value.toString());
            form.append('expose_email', this.registerForm.get('expose_email').value.toString());
            form.append('type', type);
            this.abmService
                .ABMUsers(form)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)((error) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                    icon: 'error',
                    title: 'Error del servidor',
                });
                loading.dismiss();
                throw Object.assign({}, error);
            }))
                .subscribe((response) => {
                loading.dismiss();
                if (response.result) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                        icon: 'success',
                        title: 'Usuario registrado',
                    });
                    const sessionEncrypted = btoa(JSON.stringify(response.data));
                    localStorage.setItem('token', sessionEncrypted);
                    this.navCtrl.navigateForward('/home/schedule');
                    return;
                }
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                    icon: 'error',
                    title: 'Error al ' + mjs + ' usuario',
                    text: response.message,
                });
            });
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: src_app_services_abm_service__WEBPACK_IMPORTED_MODULE_2__.AbmService },
    { type: src_app_services_subjects__WEBPACK_IMPORTED_MODULE_5__.SubjectsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: src_app_services_tools_service__WEBPACK_IMPORTED_MODULE_3__.ToolsService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterPage);



/***/ }),

/***/ 3436:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  background-image: url(\"/assets/img/b1.jpg\");\n  background-size: cover;\n  background-position: center;\n}\n\n.register-card {\n  width: 90%;\n  max-width: 500px;\n  background-color: rgba(255, 255, 255, 0.7);\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  padding: 10px 20px;\n  text-align: center;\n}\n\n.register-card h1 {\n  font-size: 35px;\n  font-family: Autodex, sans-serif;\n  color: #222222;\n  margin-top: 5px;\n}\n\n.checks {\n  display: flex;\n}\n\nion-button {\n  margin: 0;\n}\n\nion-item {\n  --background: rgba(255, 255, 255, 0.7);\n}\n\n@media (max-width: 768px) {\n  .register-card {\n    width: 100%;\n    max-width: none;\n    margin: 0;\n    border-radius: 0;\n    padding: 10px 20px;\n    height: 100vh;\n    overflow-y: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFFQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUNFO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFHQTtFQUNFLFNBQUE7QUFBRjs7QUFFQTtFQUNFLHNDQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxlQUFBO0lBQ0EsU0FBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7RUFDRjtBQUNGIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvYjEuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItY2FyZCB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICAvL2JhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEF1dG9kZXgsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcbn1cclxuXHJcbi5jaGVja3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5yZWdpc3Rlci1jYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 4315:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"container\">\n    <ion-card class=\"register-card\">\n      <form [formGroup]=\"registerForm\">\n        <h1>Registro</h1>\n        <ion-item [class]=\"isValidName ? '':'form-invalid'\">\n          <ion-label position=\"floating\"><b>Nombre</b></ion-label>\n          <ion-input type=\"text\" formControlName=\"first_name\"></ion-input>\n        </ion-item>\n\n        <ion-item [class]=\"isValidLastName ? '':'form-invalid'\">\n          <ion-label position=\"floating\"><b>Apellido</b></ion-label>\n          <ion-input type=\"text\" formControlName=\"last_name\"></ion-input>\n        </ion-item>\n\n        <ion-item [class]=\"isValidPhone ? '':'form-invalid'\">\n          <ion-label position=\"floating\"\n            ><b>Celular</b> (con código de area)</ion-label\n          >\n          <ion-input\n            type=\"text\"\n            formControlName=\"cellphone\"\n            placeholder=\"sin 0 y sin el 15\"\n          ></ion-input>\n        </ion-item>\n\n        <ion-item [class]=\"isValidEmail ? '':'form-invalid'\">\n          <ion-label position=\"floating\"><b>Correo Electrónico</b></ion-label>\n          <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n        </ion-item>\n        <ion-item [class]=\"isValidPass ? '':'form-invalid'\">\n          <ion-label position=\"floating\"><b>Clave</b></ion-label>\n          <ion-input type=\"text\" formControlName=\"pass\"></ion-input>\n        </ion-item>\n        <ion-item [class]=\"isValidBirthdate ? '':'form-invalid'\">\n          <ion-label><b>Fecha de nacimiento</b></ion-label>\n          <ion-input\n            style=\"text-align: right\"\n            type=\"date\"\n            formControlName=\"birthdate\"\n          ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label title=\"Hará visible el número para los demás usuarios\"\n            ><b>Compartir celular</b></ion-label\n          >\n          <ion-checkbox\n            mode=\"ios\"\n            formControlName=\"expose_phone\"\n          ></ion-checkbox>\n        </ion-item>\n        <ion-item>\n          <ion-label title=\"Hará visible el número para los demás usuarios\"\n            ><b>Compartir correo</b></ion-label\n          >\n          <ion-checkbox\n            mode=\"ios\"\n            formControlName=\"expose_email\"\n          ></ion-checkbox>\n        </ion-item>\n        <ion-item [class]=\"isValidProvince ? '':'form-invalid'\">\n          <ion-label><b>Provincia</b></ion-label>\n          <ion-select\n            formControlName=\"province_id\"\n            (ionChange)=\"loadCities()\"\n            interface=\"popover\"\n            mode=\"ios\"\n          >\n            <ion-select-option\n              *ngFor=\"let item of provinces\"\n              [value]=\"item.geonameId\"\n              >{{item.name}}</ion-select-option\n            >\n          </ion-select>\n        </ion-item>\n\n        <ion-item [class]=\"isValidCity ? '':'form-invalid'\">\n          <ion-label><b>Partido/Barrio</b></ion-label>\n          <ion-select formControlName=\"city_id\" interface=\"popover\" mode=\"ios\">\n            <ion-select-option [value]=\"-1\">Otro</ion-select-option>\n            <ion-select-option\n              *ngFor=\"let item of cities\"\n              [value]=\"item.geonameId\"\n              >{{item.toponymName}}</ion-select-option\n            >\n          </ion-select>\n        </ion-item>\n\n        <ion-row class=\"ion-margin-top\">\n          <ion-col>\n            <ion-button\n              class=\"animate__animated animate__lightSpeedInLeft\"\n              expand=\"block\"\n              (click)=\"register()\"\n              >Registrarse</ion-button\n            >\n          </ion-col>\n          <ion-col>\n            <ion-button\n              class=\"animate__animated animate__lightSpeedInRight\"\n              routerLink=\"/login\"\n              color=\"dark\"\n              expand=\"block\"\n              >Cancelar</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_register_register_module_ts.js.map