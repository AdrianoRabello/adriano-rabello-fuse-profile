(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-admin-example-example-module"],{

/***/ "2Bot":
/*!************************************************************!*\
  !*** ./src/app/modules/admin/example/example.component.ts ***!
  \************************************************************/
/*! exports provided: ExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleComponent", function() { return ExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ExampleComponent {
    /**
     * Constructor
     */
    constructor() {
    }
}
ExampleComponent.ɵfac = function ExampleComponent_Factory(t) { return new (t || ExampleComponent)(); };
ExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleComponent, selectors: [["example"]], decls: 3, vars: 0, consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]], template: function ExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "usge":
/*!*********************************************************!*\
  !*** ./src/app/modules/admin/example/example.module.ts ***!
  \*********************************************************/
/*! exports provided: ExampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleModule", function() { return ExampleModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_modules_admin_example_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/modules/admin/example/example.component */ "2Bot");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const exampleRoutes = [
    {
        path: '',
        component: app_modules_admin_example_example_component__WEBPACK_IMPORTED_MODULE_1__["ExampleComponent"]
    }
];
class ExampleModule {
}
ExampleModule.ɵfac = function ExampleModule_Factory(t) { return new (t || ExampleModule)(); };
ExampleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ExampleModule });
ExampleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(exampleRoutes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ExampleModule, { declarations: [app_modules_admin_example_example_component__WEBPACK_IMPORTED_MODULE_1__["ExampleComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=app-modules-admin-example-example-module.js.map