(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-landing-home-home-module"],{

/***/ "CkrH":
/*!******************************************************!*\
  !*** ./src/app/modules/landing/home/home.routing.ts ***!
  \******************************************************/
/*! exports provided: landingHomeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "landingHomeRoutes", function() { return landingHomeRoutes; });
/* harmony import */ var app_modules_landing_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/landing/home/home.component */ "saKc");

const landingHomeRoutes = [
    {
        path: '',
        component: app_modules_landing_home_home_component__WEBPACK_IMPORTED_MODULE_0__["LandingHomeComponent"]
    }
];


/***/ }),

/***/ "FTCe":
/*!*****************************************************!*\
  !*** ./src/app/modules/landing/home/home.module.ts ***!
  \*****************************************************/
/*! exports provided: LandingHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingHomeModule", function() { return LandingHomeModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/shared.module */ "PCNd");
/* harmony import */ var app_modules_landing_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/modules/landing/home/home.component */ "saKc");
/* harmony import */ var app_modules_landing_home_home_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/modules/landing/home/home.routing */ "CkrH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








class LandingHomeModule {
}
LandingHomeModule.ɵfac = function LandingHomeModule_Factory(t) { return new (t || LandingHomeModule)(); };
LandingHomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: LandingHomeModule });
LandingHomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(app_modules_landing_home_home_routing__WEBPACK_IMPORTED_MODULE_5__["landingHomeRoutes"]),
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](LandingHomeModule, { declarations: [app_modules_landing_home_home_component__WEBPACK_IMPORTED_MODULE_4__["LandingHomeComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();


/***/ }),

/***/ "saKc":
/*!********************************************************!*\
  !*** ./src/app/modules/landing/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: LandingHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingHomeComponent", function() { return LandingHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




class LandingHomeComponent {
    /**
     * Constructor
     */
    constructor() {
    }
}
LandingHomeComponent.ɵfac = function LandingHomeComponent_Factory(t) { return new (t || LandingHomeComponent)(); };
LandingHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingHomeComponent, selectors: [["landing-home"]], decls: 15, vars: 3, consts: [[1, "flex", "flex-col", "items-center", "justify-center", "w-full", "h-full"], [1, "w-full", "max-w-3xl"], [1, "max-w-none", "mx-auto", "prose", "prose-sm"], ["src", "assets/images/logo/logo.svg", "alt", "Logo image", 1, "w-20"], ["mat-flat-button", "", 1, "mt-8", 3, "color", "routerLink"], [1, "ml-2", "icon-size-5", 3, "svgIcon"]], template: function LandingHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Landing Module");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " This can be the landing or the welcome page of your application. If you have an SSR (Server Side Rendering) setup, or if you don't need to have Search engine visibility and optimizations, you can even use this page as your primary landing page. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " This is a separate \"module\", it has its own directory and routing setup and also it's completely separated from the actual application. This is also a simple example of a multiple applications setup that uses the same codebase. You can have different entry points and essentially have different applications within the same codebase. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Launch the App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary")("routerLink", "/dashboards/project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", "heroicons_solid:arrow-narrow-right");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=app-modules-landing-home-home-module.js.map