(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-auth-sign-out-sign-out-module"],{

/***/ "0su9":
/*!***********************************************************!*\
  !*** ./src/app/modules/auth/sign-out/sign-out.routing.ts ***!
  \***********************************************************/
/*! exports provided: authSignOutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authSignOutRoutes", function() { return authSignOutRoutes; });
/* harmony import */ var app_modules_auth_sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/auth/sign-out/sign-out.component */ "ipHZ");

const authSignOutRoutes = [
    {
        path: '',
        component: app_modules_auth_sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_0__["AuthSignOutComponent"]
    }
];


/***/ }),

/***/ "ipHZ":
/*!*************************************************************!*\
  !*** ./src/app/modules/auth/sign-out/sign-out.component.ts ***!
  \*************************************************************/
/*! exports provided: AuthSignOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSignOutComponent", function() { return AuthSignOutComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/auth/auth.service */ "Vurf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AuthSignOutComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "i18nPlural");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Redirecting in ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r0.countdown, ctx_r0.countdownMapping), " ");
} }
function AuthSignOutComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " You are now being redirected! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
const _c0 = function () { return ["/sign-in"]; };
class AuthSignOutComponent {
    /**
     * Constructor
     */
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.countdown = 5;
        this.countdownMapping = {
            '=1': '# second',
            'other': '# seconds'
        };
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Sign out
        this._authService.signOut();
        // Redirect after the countdown
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["timer"])(1000, 1000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            this._router.navigate(['sign-in']);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeWhile"])(() => this.countdown > 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._unsubscribeAll), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => this.countdown--))
            .subscribe();
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
AuthSignOutComponent.ɵfac = function AuthSignOutComponent_Factory(t) { return new (t || AuthSignOutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthSignOutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AuthSignOutComponent, selectors: [["auth-sign-out"]], decls: 15, vars: 4, consts: [[1, "flex", "flex-col", "flex-auto", "items-center", "sm:justify-center", "min-w-0"], [1, "w-full", "sm:w-auto", "py-8", "px-4", "sm:p-12", "sm:rounded-2xl", "sm:shadow", "sm:bg-card"], [1, "w-full", "max-w-80", "sm:w-80", "mx-auto", "sm:mx-0"], [1, "w-12", "mx-auto"], ["src", "assets/images/logo/logo.svg"], [1, "mt-8", "text-4xl", "font-extrabold", "tracking-tight", "leading-tight", "text-center"], [1, "flex", "justify-center", "mt-0.5", "font-medium"], [4, "ngIf"], [1, "mt-8", "text-md", "font-medium", "text-secondary", "text-center"], [1, "ml-1", "text-primary-500", "hover:underline", 3, "routerLink"]], template: function AuthSignOutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "You have signed out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AuthSignOutComponent_ng_container_8_Template, 3, 4, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AuthSignOutComponent_ng_container_9_Template, 2, 0, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Go to");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "sign in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.countdown > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.countdown === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["I18nPluralPipe"]], encapsulation: 2 });


/***/ }),

/***/ "mqcg":
/*!**********************************************************!*\
  !*** ./src/app/modules/auth/sign-out/sign-out.module.ts ***!
  \**********************************************************/
/*! exports provided: AuthSignOutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSignOutModule", function() { return AuthSignOutModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _fuse_components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/components/card */ "C1J2");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/shared.module */ "PCNd");
/* harmony import */ var app_modules_auth_sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/modules/auth/sign-out/sign-out.component */ "ipHZ");
/* harmony import */ var app_modules_auth_sign_out_sign_out_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/modules/auth/sign-out/sign-out.routing */ "0su9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AuthSignOutModule {
}
AuthSignOutModule.ɵfac = function AuthSignOutModule_Factory(t) { return new (t || AuthSignOutModule)(); };
AuthSignOutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AuthSignOutModule });
AuthSignOutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(app_modules_auth_sign_out_sign_out_routing__WEBPACK_IMPORTED_MODULE_5__["authSignOutRoutes"]),
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _fuse_components_card__WEBPACK_IMPORTED_MODULE_2__["FuseCardModule"],
            app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AuthSignOutModule, { declarations: [app_modules_auth_sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_4__["AuthSignOutComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _fuse_components_card__WEBPACK_IMPORTED_MODULE_2__["FuseCardModule"],
        app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=app-modules-auth-sign-out-sign-out-module.js.map