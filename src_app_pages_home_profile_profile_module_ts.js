(self["webpackChunkMiLocal"] = self["webpackChunkMiLocal"] || []).push([["src_app_pages_home_profile_profile_module_ts"],{

/***/ 7341:
/*!**************************************************************!*\
  !*** ./src/app/pages/home/profile/profile-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 4565);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 8334:
/*!******************************************************!*\
  !*** ./src/app/pages/home/profile/profile.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 7341);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 4565);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage],
    })
], ProfilePageModule);



/***/ }),

/***/ 4565:
/*!****************************************************!*\
  !*** ./src/app/pages/home/profile/profile.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 7974);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 3521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_services_abm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/abm.service */ 167);
/* harmony import */ var src_app_services_tools_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tools.service */ 7526);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 8259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_subjects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/subjects */ 7019);











let ProfilePage = class ProfilePage {
    constructor(navCtrl, abmService, loadingCtrl, tools, fb, subjects) {
        this.navCtrl = navCtrl;
        this.abmService = abmService;
        this.loadingCtrl = loadingCtrl;
        this.tools = tools;
        this.fb = fb;
        this.subjects = subjects;
        this.provinces = [];
        this.cities = [];
        this.profileForm = this.fb.group({
            id_user: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            full_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            cellphone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
            pass: [''],
            birthdate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            province: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            expose_phone: [true],
            expose_email: [true],
            province_id: [-1, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            city_id: [-2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        });
    }
    ngOnInit() {
        this.subjects.user$.subscribe((user) => {
            this.user = user;
            if (user) {
                this.setDataUser();
            }
        });
    }
    loadProvinces() {
        this.subjects.provinces$.subscribe((data) => {
            this.provinces = [...data];
            setTimeout(() => {
                this.profileForm.get('province_id').setValue(this.user.province_id);
                this.loadCities();
            }, 50);
        });
    }
    loadCities() {
        if (this.provinces.length > 0) {
            const prov = this.provinces.find((x) => x.geonameId === this.profileForm.get('province_id').value);
            this.cities = [...prov.cities];
            setTimeout(() => {
                this.profileForm.get('city_id').setValue(this.user.city_id);
                this.profileForm.get('city_id').markAsTouched();
            }, 500);
        }
    }
    get isValidName() {
        let firstName = this.tools.capitalizeAllWords(this.profileForm.get('first_name').value);
        this.profileForm.get('first_name').setValue(firstName);
        return (this.profileForm.get('first_name').value.length > 0 ||
            !this.profileForm.get('first_name').touched);
    }
    get isValidLastName() {
        let last_name = this.tools.capitalizeAllWords(this.profileForm.get('last_name').value);
        this.profileForm.get('last_name').setValue(last_name);
        return (this.profileForm.get('last_name').value.length > 0 ||
            !this.profileForm.get('last_name').touched);
    }
    get isValidPhone() {
        let cellphone = this.tools.validatePhoneNumber(this.profileForm.get('cellphone').value);
        this.profileForm.get('cellphone').setValue(cellphone);
        return (this.profileForm.get('cellphone').value.length >= 10 ||
            !this.profileForm.get('cellphone').touched);
    }
    get isValidEmail() {
        return ((this.profileForm.value.email.length > 0 &&
            this.tools.validEmail(this.profileForm.value.email)) ||
            !this.profileForm.get('email').touched);
    }
    get isValidPass() {
        return (this.profileForm.get('pass').value.length > 3 ||
            this.profileForm.get('pass').value.length === 0);
    }
    get isValidBirthdate() {
        return (this.profileForm.get('birthdate').value.length === 10 ||
            !this.profileForm.get('birthdate').touched);
    }
    get isValidProvince() {
        return (this.profileForm.get('province_id').value > -2 ||
            !this.profileForm.get('province_id').touched);
    }
    get isValidCity() {
        return (this.profileForm.get('city_id').value > -2 ||
            !this.profileForm.get('city_id').touched);
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
    sendData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let type = 'update';
            let mjs = 'actualizar';
            Object.keys(this.profileForm.controls).forEach((key) => {
                this.profileForm.get(key).markAsTouched();
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
            this.profileForm
                .get('province')
                .setValue(this.tools.getNameListCountries([...this.provinces], this.profileForm.get('province_id').value, 'toponymName'));
            this.profileForm
                .get('city')
                .setValue(this.tools.getNameListCountries([...this.cities], this.profileForm.get('city_id').value, 'toponymName'));
            let form = new FormData();
            form.append('id_user', this.profileForm.get('id_user').value);
            form.append('first_name', this.profileForm.get('first_name').value);
            form.append('last_name', this.profileForm.get('last_name').value);
            form.append('full_name', this.profileForm.get('first_name').value +
                ' ' +
                this.profileForm.get('last_name').value);
            form.append('birthdate', this.profileForm.get('birthdate').value);
            form.append('cellphone', this.profileForm.get('cellphone').value);
            form.append('email', this.profileForm.get('email').value);
            form.append('pass', this.profileForm.get('pass').value);
            form.append('province', this.profileForm.get('province').value);
            form.append('city', this.profileForm.get('city').value);
            form.append('province_id', this.profileForm.get('province_id').value.toString());
            form.append('city_id', this.profileForm.get('city_id').value.toString());
            form.append('expose_phone', this.profileForm.get('expose_phone').value.toString());
            form.append('expose_email', this.profileForm.get('expose_email').value.toString());
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
    setDataUser() {
        this.profileForm.get('id_user').setValue(this.user.id_user);
        this.profileForm.get('first_name').setValue(this.user.first_name);
        this.profileForm.get('last_name').setValue(this.user.last_name);
        this.profileForm.get('full_name').setValue(this.user.full_name);
        this.profileForm.get('cellphone').setValue(this.user.cellphone);
        this.profileForm.get('email').setValue(this.user.email);
        this.profileForm.get('birthdate').setValue(this.user.birthdate);
        this.profileForm.get('province').setValue(this.user.province);
        this.profileForm.get('city').setValue(this.user.city);
        this.profileForm.get('expose_phone').setValue(this.user.expose_phone);
        this.profileForm.get('expose_email').setValue(this.user.expose_email);
        this.loadProvinces();
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: src_app_services_abm_service__WEBPACK_IMPORTED_MODULE_2__.AbmService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: src_app_services_tools_service__WEBPACK_IMPORTED_MODULE_3__.ToolsService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_subjects__WEBPACK_IMPORTED_MODULE_5__.SubjectsService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 3521:
/*!******************************************************!*\
  !*** ./src/app/pages/home/profile/profile.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  background-image: url(\"/assets/img/b1.jpg\");\n  background-size: cover;\n  background-position: center;\n}\n\n.profile-card {\n  width: 90%;\n  max-width: 500px;\n  background-color: rgba(255, 255, 255, 0.7);\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  padding: 10px 20px;\n  text-align: center;\n}\n\n.profile-card h1 {\n  font-size: 35px;\n  font-family: Autodex, sans-serif;\n  color: #222222;\n  margin-top: 5px;\n}\n\n.checks {\n  display: flex;\n}\n\nion-button {\n  margin: 0;\n}\n\nion-item {\n  --background: rgba(255, 255, 255, 0.7);\n}\n\n@media (max-width: 768px) {\n  .profile-card {\n    width: 100%;\n    max-width: none;\n    margin: 0;\n    border-radius: 0;\n    padding: 10px 20px;\n    height: 100vh;\n    overflow-y: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUVBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0UsU0FBQTtBQUFGOztBQUVBO0VBQ0Usc0NBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGVBQUE7SUFDQSxTQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2IxLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2ZpbGUtY2FyZCB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICAvL2JhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEF1dG9kZXgsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcbn1cclxuXHJcbi5jaGVja3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5wcm9maWxlLWNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 7974:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/profile/profile.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"container\">\n    <ion-card class=\"profile-card\">\n      <form [formGroup]=\"profileForm\">\n        <h1>Mi Perfil</h1>\n        <ion-item [class]=\"isValidName ? '':'form-invalid'\">\n          <ion-label position=\"floating\"><b>Nombre</b></ion-label>\n          <ion-input type=\"text\" formControlName=\"first_name\"></ion-input>\n        </ion-item>\n\n        <ion-item [class]=\"isValidLastName ? '':'form-invalid'\">\n          <ion-label position=\"floating\"><b>Apellido</b></ion-label>\n          <ion-input type=\"text\" formControlName=\"last_name\"></ion-input>\n        </ion-item>\n\n        <ion-item [class]=\"isValidPhone ? '':'form-invalid'\">\n          <ion-label position=\"floating\"\n            ><b>Celular</b> (con código de area)</ion-label\n          >\n          <ion-input\n            type=\"text\"\n            formControlName=\"cellphone\"\n            placeholder=\"sin 0 y sin el 15\"\n          ></ion-input>\n        </ion-item>\n\n        <ion-item [class]=\"isValidEmail ? '':'form-invalid'\">\n          <ion-label position=\"floating\"><b>Correo Electrónico</b></ion-label>\n          <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n        </ion-item>\n        <ion-item [class]=\"isValidPass ? '':'form-invalid'\">\n          <ion-label position=\"floating\"><b>Clave</b></ion-label>\n          <ion-input type=\"text\" formControlName=\"pass\"></ion-input>\n        </ion-item>\n        <ion-item [class]=\"isValidBirthdate ? '':'form-invalid'\">\n          <ion-label><b>Fecha de nacimiento</b></ion-label>\n          <ion-input\n            style=\"text-align: right\"\n            type=\"date\"\n            formControlName=\"birthdate\"\n          ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label title=\"Hará visible el número para los demás usuarios\"\n            ><b>Compartir celular</b></ion-label\n          >\n          <ion-checkbox\n            mode=\"ios\"\n            formControlName=\"expose_phone\"\n          ></ion-checkbox>\n        </ion-item>\n        <ion-item>\n          <ion-label title=\"Hará visible el número para los demás usuarios\"\n            ><b>Compartir correo</b></ion-label\n          >\n          <ion-checkbox\n            mode=\"ios\"\n            formControlName=\"expose_email\"\n          ></ion-checkbox>\n        </ion-item>\n\n        <ion-item [class]=\"isValidProvince ? '':'form-invalid'\">\n          <ion-label><b>Provincia</b></ion-label>\n          <ion-select\n            formControlName=\"province_id\"\n            (ionChange)=\"loadCities()\"\n            interface=\"popover\"\n            mode=\"ios\"\n          >\n            <ion-select-option\n              *ngFor=\"let item of provinces\"\n              [value]=\"item.geonameId\"\n              >{{item.toponymName}}</ion-select-option\n            >\n          </ion-select>\n        </ion-item>\n\n        <ion-item [class]=\"isValidCity ? '':'form-invalid'\">\n          <ion-label><b>Partido/Barrio</b></ion-label>\n          <ion-select formControlName=\"city_id\" interface=\"popover\" mode=\"ios\">\n            <ion-select-option [value]=\"-1\">Otro</ion-select-option>\n            <ion-select-option\n              *ngFor=\"let item of cities\"\n              [value]=\"item.geonameId\"\n              >{{item.toponymName}}</ion-select-option\n            >\n          </ion-select>\n        </ion-item>\n\n        <ion-row class=\"ion-margin-top\">\n          <ion-col>\n            <ion-button\n              class=\"animate__animated animate__lightSpeedInLeft\"\n              expand=\"block\"\n              (click)=\"sendData()\"\n              >Actualizar</ion-button\n            >\n          </ion-col>\n          <ion-col>\n            <ion-button\n              class=\"animate__animated animate__lightSpeedInRight\"\n              (click)=\"setDataUser()\"\n              color=\"dark\"\n              expand=\"block\"\n              >Cancelar</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_profile_profile_module_ts.js.map