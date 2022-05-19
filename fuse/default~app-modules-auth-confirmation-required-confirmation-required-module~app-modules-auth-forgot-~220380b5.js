(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-modules-auth-confirmation-required-confirmation-required-module~app-modules-auth-forgot-~220380b5"],{

/***/ "++01":
/*!*****************************************************!*\
  !*** ./src/@fuse/components/card/card.component.ts ***!
  \*****************************************************/
/*! exports provided: FuseCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseCardComponent", function() { return FuseCardComponent; });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ "PVWW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function FuseCardComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function FuseCardComponent_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@expandCollapse", undefined);
} }
function FuseCardComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FuseCardComponent_ng_container_1_div_2_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.expanded);
} }
const _c0 = [[["", "fuseCardFront", ""]], [["", "fuseCardBack", ""]], "*", [["", "fuseCardExpansion", ""]]];
const _c1 = ["[fuseCardFront]", "[fuseCardBack]", "*", "[fuseCardExpansion]"];
class FuseCardComponent {
    /**
     * Constructor
     */
    constructor() {
        this.expanded = false;
        this.face = 'front';
        this.flippable = false;
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------
    /**
     * Host binding for component classes
     */
    get classList() {
        return {
            'fuse-card-expanded': this.expanded,
            'fuse-card-face-back': this.flippable && this.face === 'back',
            'fuse-card-face-front': this.flippable && this.face === 'front',
            'fuse-card-flippable': this.flippable
        };
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On changes
     *
     * @param changes
     */
    ngOnChanges(changes) {
        // Expanded
        if ('expanded' in changes) {
            // Coerce the value to a boolean
            this.expanded = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(changes.expanded.currentValue);
        }
        // Flippable
        if ('flippable' in changes) {
            // Coerce the value to a boolean
            this.flippable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(changes.flippable.currentValue);
        }
    }
}
FuseCardComponent.ɵfac = function FuseCardComponent_Factory(t) { return new (t || FuseCardComponent)(); };
FuseCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FuseCardComponent, selectors: [["fuse-card"]], hostVars: 2, hostBindings: function FuseCardComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.classList);
    } }, inputs: { expanded: "expanded", face: "face", flippable: "flippable" }, exportAs: ["fuseCard"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "fuse-card-front"], [1, "fuse-card-back"], ["class", "fuse-card-expansion", 4, "ngIf"], [1, "fuse-card-expansion"]], template: function FuseCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, FuseCardComponent_ng_container_0_Template, 5, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FuseCardComponent_ng_container_1_Template, 3, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.flippable);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.flippable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["fuse-card {\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--fuse-bg-card-rgb), var(--tw-bg-opacity));\n  border-radius: 1rem;\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  /* Flippable */\n}\n\nfuse-card.fuse-card-flippable {\n  border-radius: 0;\n  overflow: visible;\n  transform-style: preserve-3d;\n  transition: transform 1s;\n  perspective: 600px;\n  background: transparent;\n  --tw-shadow: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\nfuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-front {\n  visibility: hidden;\n  opacity: 0;\n  transform: rotateY(180deg);\n}\n\nfuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-back {\n  visibility: visible;\n  opacity: 1;\n  transform: rotateY(360deg);\n}\n\nfuse-card.fuse-card-flippable .fuse-card-front,\nfuse-card.fuse-card-flippable .fuse-card-back {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  z-index: 10;\n  transition: transform 0.5s ease-out 0s, visibility 0s ease-in 0.2s, opacity 0s ease-in 0.2s;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\nfuse-card.fuse-card-flippable .fuse-card-front, fuse-card.fuse-card-flippable .fuse-card-back {\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--fuse-bg-card-rgb), var(--tw-bg-opacity));\n  border-radius: 1rem;\n  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\nfuse-card.fuse-card-flippable .fuse-card-front {\n  position: relative;\n  opacity: 1;\n  visibility: visible;\n  transform: rotateY(0deg);\n  overflow: hidden;\n}\n\nfuse-card.fuse-card-flippable .fuse-card-back {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  visibility: hidden;\n  transform: rotateY(180deg);\n  overflow: hidden auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhcmQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdGFpbHdpbmRjc3MvbGliL2xpYi9zdWJzdGl0dXRlQ2xhc3NBcHBseUF0UnVsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQ0ZKLGtCQUFvQjtFQUFwQixxRUFBb0I7RUFDcEIsbUJBQW1CO0VBQW5CLDRFQUFtQjtFQUFuQix1R0FBbUI7RURJZixjQUFBO0FBQUo7O0FBQ0k7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUNYUixzQkFBbUI7RUFBbkIsdUdBQW1CO0FEYW5COztBQUdZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUFEaEI7O0FBSVk7RUFDSSxtQkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtBQUZoQjs7QUFNUTs7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDJGQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQUhaOztBQ2xDQTtFQUFBLGtCQUFvQjtFQUFwQixxRUFBb0I7RUFDcEIsbUJBQW1CO0VBQW5CLDRFQUFtQjtFQUFuQjtBQURvQjs7QUR5Q1o7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFMWjs7QUFRUTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUFOWiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZnVzZS1jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIEBhcHBseSByb3VuZGVkLTJ4bCBzaGFkb3cgYmctY2FyZDtcblxuICAgIC8qIEZsaXBwYWJsZSAqL1xuICAgICYuZnVzZS1jYXJkLWZsaXBwYWJsZSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gICAgICAgIHBlcnNwZWN0aXZlOiA2MDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIEBhcHBseSBzaGFkb3ctbm9uZTtcblxuICAgICAgICAmLmZ1c2UtY2FyZC1mYWNlLWJhY2sge1xuXG4gICAgICAgICAgICAuZnVzZS1jYXJkLWZyb250IHtcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZ1c2UtY2FyZC1iYWNrIHtcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZnVzZS1jYXJkLWZyb250LFxuICAgICAgICAuZnVzZS1jYXJkLWJhY2sge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQgMHMsIHZpc2liaWxpdHkgMHMgZWFzZS1pbiAwLjJzLCBvcGFjaXR5IDBzIGVhc2UtaW4gMC4ycztcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgIEBhcHBseSByb3VuZGVkLTJ4bCBzaGFkb3cgYmctY2FyZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mdXNlLWNhcmQtZnJvbnQge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZ1c2UtY2FyZC1iYWNrIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkB0YWlsd2luZCBiYXNlO1xuQHRhaWx3aW5kIGNvbXBvbmVudHM7XG5AdGFpbHdpbmQgdXRpbGl0aWVzOyJdfQ== */"], encapsulation: 2, data: { animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["FuseAnimations"] } });


/***/ }),

/***/ "C1J2":
/*!********************************************!*\
  !*** ./src/@fuse/components/card/index.ts ***!
  \********************************************/
/*! exports provided: FuseCardComponent, FuseCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fuse_components_card_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/card/public-api */ "Pnwa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FuseCardComponent", function() { return _fuse_components_card_public_api__WEBPACK_IMPORTED_MODULE_0__["FuseCardComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FuseCardModule", function() { return _fuse_components_card_public_api__WEBPACK_IMPORTED_MODULE_0__["FuseCardModule"]; });




/***/ }),

/***/ "Nrj0":
/*!**************************************************!*\
  !*** ./src/@fuse/components/card/card.module.ts ***!
  \**************************************************/
/*! exports provided: FuseCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseCardModule", function() { return FuseCardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fuse_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/card/card.component */ "++01");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class FuseCardModule {
}
FuseCardModule.ɵfac = function FuseCardModule_Factory(t) { return new (t || FuseCardModule)(); };
FuseCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FuseCardModule });
FuseCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FuseCardModule, { declarations: [_fuse_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["FuseCardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_fuse_components_card_card_component__WEBPACK_IMPORTED_MODULE_1__["FuseCardComponent"]] }); })();


/***/ }),

/***/ "Pnwa":
/*!*************************************************!*\
  !*** ./src/@fuse/components/card/public-api.ts ***!
  \*************************************************/
/*! exports provided: FuseCardComponent, FuseCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fuse_components_card_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/card/card.component */ "++01");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FuseCardComponent", function() { return _fuse_components_card_card_component__WEBPACK_IMPORTED_MODULE_0__["FuseCardComponent"]; });

/* harmony import */ var _fuse_components_card_card_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/card/card.module */ "Nrj0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FuseCardModule", function() { return _fuse_components_card_card_module__WEBPACK_IMPORTED_MODULE_1__["FuseCardModule"]; });





/***/ })

}]);
//# sourceMappingURL=default~app-modules-auth-confirmation-required-confirmation-required-module~app-modules-auth-forgot-~220380b5.js.map