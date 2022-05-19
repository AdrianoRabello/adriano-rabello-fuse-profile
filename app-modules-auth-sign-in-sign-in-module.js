(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-auth-sign-in-sign-in-module"],{

/***/ "E+s+":
/*!********************************************************!*\
  !*** ./src/app/modules/auth/sign-in/sign-in.module.ts ***!
  \********************************************************/
/*! exports provided: AuthSignInModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSignInModule", function() { return AuthSignInModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _fuse_components_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/components/card */ "C1J2");
/* harmony import */ var _fuse_components_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/components/alert */ "GazI");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/shared.module */ "PCNd");
/* harmony import */ var app_modules_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/modules/auth/sign-in/sign-in.component */ "NRLc");
/* harmony import */ var app_modules_auth_sign_in_sign_in_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/modules/auth/sign-in/sign-in.routing */ "cOKI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AuthSignInModule {
}
AuthSignInModule.ɵfac = function AuthSignInModule_Factory(t) { return new (t || AuthSignInModule)(); };
AuthSignInModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AuthSignInModule });
AuthSignInModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(app_modules_auth_sign_in_sign_in_routing__WEBPACK_IMPORTED_MODULE_11__["authSignInRoutes"]),
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
            _fuse_components_card__WEBPACK_IMPORTED_MODULE_7__["FuseCardModule"],
            _fuse_components_alert__WEBPACK_IMPORTED_MODULE_8__["FuseAlertModule"],
            app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AuthSignInModule, { declarations: [app_modules_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__["AuthSignInComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
        _fuse_components_card__WEBPACK_IMPORTED_MODULE_7__["FuseCardModule"],
        _fuse_components_alert__WEBPACK_IMPORTED_MODULE_8__["FuseAlertModule"],
        app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]] }); })();


/***/ }),

/***/ "NRLc":
/*!***********************************************************!*\
  !*** ./src/app/modules/auth/sign-in/sign-in.component.ts ***!
  \***********************************************************/
/*! exports provided: AuthSignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSignInComponent", function() { return AuthSignInComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ "PVWW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/core/auth/auth.service */ "Vurf");
/* harmony import */ var _fuse_services_config_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../@fuse/services/config/config.service */ "0+BO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fuse/components/alert/alert.component */ "5GsA");











const _c0 = ["signInNgForm"];
function AuthSignInComponent_fuse_alert_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "fuse-alert", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("appearance", "outline")("showIcon", false)("type", ctx_r0.alert.type)("@shake", ctx_r0.alert.type === "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.alert.message, " ");
} }
class AuthSignInComponent {
    /**
     * Constructor
     */
    constructor(_activatedRoute, _authService, _formBuilder, _router, _fuseConfigService) {
        this._activatedRoute = _activatedRoute;
        this._authService = _authService;
        this._formBuilder = _formBuilder;
        this._router = _router;
        this._fuseConfigService = _fuseConfigService;
        this.alert = {
            type: 'success',
            message: ''
        };
        this.showAlert = false;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Create the form
        this.signInForm = this._formBuilder.group({
            email: ['hughes.brian@company.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: ['admin', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            rememberMe: ['']
        });
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Sign in
     */
    signIn() {
        // Return if the form is invalid
        if (this.signInForm.invalid) {
            return;
        }
        // Disable the form
        this.signInForm.disable();
        // Hide the alert
        this.showAlert = false;
        // Sign in
        this._authService.signIn(this.signInForm.value)
            .subscribe(() => {
            // Set the redirect url.
            // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
            // to the correct page after a successful sign in. This way, that url can be set via
            // routing file and we don't have to touch here.
            const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';
            // Navigate to the redirect url
            this._router.navigateByUrl(redirectURL);
        }, (response) => {
            // Re-enable the form
            this.signInForm.enable();
            // Reset the form
            this.signInNgForm.resetForm();
            // Set the alert
            this.alert = {
                type: 'error',
                message: 'Wrong email or password'
            };
            // Show the alert
            this.showAlert = true;
        });
    }
    setScheme(scheme) {
        this._fuseConfigService.config = { scheme };
    }
}
AuthSignInComponent.ɵfac = function AuthSignInComponent_Factory(t) { return new (t || AuthSignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_fuse_services_config_config_service__WEBPACK_IMPORTED_MODULE_5__["FuseConfigService"])); };
AuthSignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AuthSignInComponent, selectors: [["auth-sign-in"]], viewQuery: function AuthSignInComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.signInNgForm = _t.first);
    } }, decls: 103, vars: 3, consts: [[1, "flex", "flex-col", "sm:flex-row", "items-center", "md:items-start", "sm:justify-center", "md:justify-start", "flex-auto", "min-w-0"], [1, "md:flex", "md:justify-center", "w-full", "sm:w-auto", "md:h-full", "md:w-1/2", "py-2", "px-4", "sm:p-12", "md:p-16", "sm:rounded-2xl", "md:rounded-none", "sm:shadow", "md:shadow-none", "sm:bg-card"], [1, "w-full", "max-w-80", "mx-auto", "sm:mx-0"], [1, "rounded-full"], ["src", "assets/images/profile/adriano_rabello_photo.jpg", 1, "rounded-full", "h-80", "shadow-lg"], [1, "text-4xl", "font-extrabold", "tracking-tight", "leading-tight", "pt-4", "text-center", "shadow-2x"], [1, "flex", "justify-center", "mt-0.5", "font-medium"], [1, "text-center", "shadow-2x"], ["class", "mt-8 -mb-4", 3, "appearance", "showIcon", "type", 4, "ngIf"], [1, "flex", "items-center", "mt-8"], [1, "flex-auto", "mt-px", "border-t", "shadow-2xl"], [1, "mx-2", "text-secondary"], [1, "flex", "items-center", "mt-8", "space-x-4"], ["mat-stroked-button", "", "href", "https://www.linkedin.com/in/adriano-rabello-4151a0106/", "target", "_blank", 1, "flex-auto"], [1, "icon-size-5", 3, "svgIcon"], ["mat-stroked-button", "", "href", "https://github.com/AdrianoRabello/", 1, "flex-auto"], ["target", "_blank", 1, "icon-size-5", 3, "svgIcon"], [1, "relative", "hidden", "md:flex", "flex-auto", "justify-center", "w-1/2", "h-full", "p-10", "lg:px-28", "overflow-hidden", "bg-gray-800", "dark:border-l"], ["viewBox", "0 0 960 540", "width", "100%", "height", "100%", "preserveAspectRatio", "xMidYMax slice", "xmlns", "http://www.w3.org/2000/svg", 1, "absolute", "inset-0", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "stroke-width", "100", 1, "text-gray-700", "opacity-25"], ["r", "234", "cx", "196", "cy", "23"], ["r", "234", "cx", "790", "cy", "491"], ["viewBox", "0 0 220 192", "width", "220", "height", "192", "fill", "none", 1, "absolute", "-top-16", "-right-16", "text-gray-700"], ["id", "837c3e70-6c3a-44e6-8854-cc48c737b659", "x", "0", "y", "0", "width", "20", "height", "20", "patternUnits", "userSpaceOnUse"], ["x", "0", "y", "0", "width", "4", "height", "4", "fill", "currentColor"], ["width", "220", "height", "192", "fill", "url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"], [1, "z-10", "relative", "w-full"], [1, "text-7xl", "font-bold", "leading-none", "text-gray-100"], [1, ""], [1, "mt-6", "text-lg", "tracking-tight", "leading-6", "text-gray-400"], [1, "text-gray-50"], [1, "font-extrabold", "mt-2", "pl-2"], [1, "flex", "items-center", "mt-2"], [1, "px-2"], [1, "font-extrabold"], [1, "pt-1"], [1, "mt-1"], ["href", "https://inovacaogov.com.br/", "type", "button", "mat-stroked-button", "", "target", "_blank"], [1, "mt-6"], [1, "font-medium", "mt-2", "pl-2"], [1, "font-bold"], ["href", "https://www.spassu.com.br/", "type", "button", "mat-stroked-button", "", "target", "_blank"], [1, "items-center", "mt-2"], ["href", "https://cb.es.gov.br/", "type", "button", "mat-stroked-button", "", "target", "_blank"], [1, "mt-8", "-mb-4", 3, "appearance", "showIcon", "type"]], template: function AuthSignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Adriano Rabello");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Java / Angular Software Enginner");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AuthSignInComponent_fuse_alert_10_Template, 2, 5, "fuse-alert", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "My Profile in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "svg", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "circle", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "circle", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "pattern", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "rect", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "rect", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "My experiences");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Java / Angular Mid Senior Software Enginner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Inova\u00E7\u00E3ogov");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "MAY 2021 - currently");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Technologies:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Java (8, 11), Spring MVC, Spring Boot, Junit, Mockito, API integration, Angular2, SCRUM, Jhipster, Tailwind css, AWS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Company page");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Java / Angular Mid Senior Software Enginner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Spasso Tecnologia");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "FEB 2021 - ABR 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Tecnologies:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, " Java (8, 11), Junit, Mockito, Rest API's, Rest API's documentation, Angular2, PrimeNG, SCRUM, Jira, Git. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Activities:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, " I worked on projects for the Esp\u00EDrito Santo State Bank (BANESTES). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Company page");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Java Software Enginner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Corpo de Bombeiros Militar ES");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "JAN 2017 - FEB 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Tecnologies:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, " Java (8, 11), Spring MVC, Spring Boot, API's, Spring Security, Angular2, Git, Javascript, Jquery, HTML, CSS, Bootstrap, Angular Material, Hibernate, SQL, MySQL, OracleDB, Docker. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Activities:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, " I worked on the main projects of the corporation: Budget Management System, Online Human Resources System, I was project leader in the Water Rescue System. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Company page");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showAlert);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "feather:linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", "feather:github");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__["FuseAlertComponent"]], encapsulation: 2, data: { animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["FuseAnimations"] } });


/***/ }),

/***/ "cOKI":
/*!*********************************************************!*\
  !*** ./src/app/modules/auth/sign-in/sign-in.routing.ts ***!
  \*********************************************************/
/*! exports provided: authSignInRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authSignInRoutes", function() { return authSignInRoutes; });
/* harmony import */ var app_modules_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/auth/sign-in/sign-in.component */ "NRLc");

const authSignInRoutes = [
    {
        path: '',
        component: app_modules_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_0__["AuthSignInComponent"]
    },
    {
        path: 'adriano-rabello',
        component: app_modules_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_0__["AuthSignInComponent"],
    }
];


/***/ })

}]);
//# sourceMappingURL=app-modules-auth-sign-in-sign-in-module.js.map