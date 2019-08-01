(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_zhuye_zhuye_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/zhuye/zhuye.component */ "./src/app/page/zhuye/zhuye.component.ts");
/* harmony import */ var _page_matchlist_matchlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/matchlist/matchlist.component */ "./src/app/page/matchlist/matchlist.component.ts");
/* harmony import */ var _page_newslist_newslist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/newslist/newslist.component */ "./src/app/page/newslist/newslist.component.ts");
/* harmony import */ var _page_curture_curture_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/curture/curture.component */ "./src/app/page/curture/curture.component.ts");
/* harmony import */ var _page_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page/register/register.component */ "./src/app/page/register/register.component.ts");
/* harmony import */ var _page_registersuccess_registersuccess_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page/registersuccess/registersuccess.component */ "./src/app/page/registersuccess/registersuccess.component.ts");
/* harmony import */ var _page_notifylist_notifylist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page/notifylist/notifylist.component */ "./src/app/page/notifylist/notifylist.component.ts");
/* harmony import */ var _page_person_person_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page/person/person.component */ "./src/app/page/person/person.component.ts");
/* harmony import */ var _page_person_pay_pay_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page/person/pay/pay.component */ "./src/app/page/person/pay/pay.component.ts");
/* harmony import */ var _page_person_editinfo_editinfo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page/person/editinfo/editinfo.component */ "./src/app/page/person/editinfo/editinfo.component.ts");
/* harmony import */ var _page_person_modifypwd_modifypwd_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page/person/modifypwd/modifypwd.component */ "./src/app/page/person/modifypwd/modifypwd.component.ts");
/* harmony import */ var _page_person_mymatch_mymatch_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page/person/mymatch/mymatch.component */ "./src/app/page/person/mymatch/mymatch.component.ts");
/* harmony import */ var _page_matchdetail_matchdetail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./page/matchdetail/matchdetail.component */ "./src/app/page/matchdetail/matchdetail.component.ts");
/* harmony import */ var _page_newsdetail_newsdetail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./page/newsdetail/newsdetail.component */ "./src/app/page/newsdetail/newsdetail.component.ts");

















var routes = [
    { path: "home", component: _page_zhuye_zhuye_component__WEBPACK_IMPORTED_MODULE_3__["ZhuyeComponent"] },
    { path: "matchlist", component: _page_matchlist_matchlist_component__WEBPACK_IMPORTED_MODULE_4__["MatchlistComponent"] },
    { path: "newslist", component: _page_newslist_newslist_component__WEBPACK_IMPORTED_MODULE_5__["NewslistComponent"] },
    { path: "notifylist", component: _page_notifylist_notifylist_component__WEBPACK_IMPORTED_MODULE_9__["NotifylistComponent"] },
    { path: "culture", component: _page_curture_curture_component__WEBPACK_IMPORTED_MODULE_6__["CurtureComponent"] },
    { path: "register", component: _page_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: "registersuccess", component: _page_registersuccess_registersuccess_component__WEBPACK_IMPORTED_MODULE_8__["RegistersuccessComponent"] },
    { path: "matchdetail", component: _page_matchdetail_matchdetail_component__WEBPACK_IMPORTED_MODULE_15__["MatchdetailComponent"] },
    { path: "newsdetail", component: _page_newsdetail_newsdetail_component__WEBPACK_IMPORTED_MODULE_16__["NewsdetailComponent"] },
    {
        path: "person", component: _page_person_person_component__WEBPACK_IMPORTED_MODULE_10__["PersonComponent"],
        children: [
            { path: "pay", component: _page_person_pay_pay_component__WEBPACK_IMPORTED_MODULE_11__["PayComponent"] },
            { path: "edit", component: _page_person_editinfo_editinfo_component__WEBPACK_IMPORTED_MODULE_12__["EditinfoComponent"] },
            { path: "modifypwd", component: _page_person_modifypwd_modifypwd_component__WEBPACK_IMPORTED_MODULE_13__["ModifypwdComponent"] },
            { path: "mymatch", component: _page_person_mymatch_mymatch_component__WEBPACK_IMPORTED_MODULE_14__["MymatchComponent"] },
            { path: "**", component: _page_person_editinfo_editinfo_component__WEBPACK_IMPORTED_MODULE_12__["EditinfoComponent"] },
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    onSameUrlNavigation: "reload",
                    useHash: true
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [ /* 配置路由策略 */
            // { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-home></app-home>\n<!-- <router-outlet></router-outlet> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = '福建省围棋协会';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page/home/home.component */ "./src/app/page/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _providers_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./providers/http.service */ "./src/app/providers/http.service.ts");
/* harmony import */ var _providers_util_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./providers/util.service */ "./src/app/providers/util.service.ts");
/* harmony import */ var _providers_toast_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./providers/toast.service */ "./src/app/providers/toast.service.ts");
/* harmony import */ var _page_zhuye_zhuye_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./page/zhuye/zhuye.component */ "./src/app/page/zhuye/zhuye.component.ts");
/* harmony import */ var _page_matchlist_matchlist_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./page/matchlist/matchlist.component */ "./src/app/page/matchlist/matchlist.component.ts");
/* harmony import */ var _page_newslist_newslist_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./page/newslist/newslist.component */ "./src/app/page/newslist/newslist.component.ts");
/* harmony import */ var _components_adswiper_adswiper_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/adswiper/adswiper.component */ "./src/app/components/adswiper/adswiper.component.ts");
/* harmony import */ var _page_curture_curture_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./page/curture/curture.component */ "./src/app/page/curture/curture.component.ts");
/* harmony import */ var _page_register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./page/register/register.component */ "./src/app/page/register/register.component.ts");
/* harmony import */ var _page_registersuccess_registersuccess_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./page/registersuccess/registersuccess.component */ "./src/app/page/registersuccess/registersuccess.component.ts");
/* harmony import */ var _page_notifylist_notifylist_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./page/notifylist/notifylist.component */ "./src/app/page/notifylist/notifylist.component.ts");
/* harmony import */ var _page_person_person_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./page/person/person.component */ "./src/app/page/person/person.component.ts");
/* harmony import */ var _page_person_pay_pay_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./page/person/pay/pay.component */ "./src/app/page/person/pay/pay.component.ts");
/* harmony import */ var _page_person_editinfo_editinfo_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./page/person/editinfo/editinfo.component */ "./src/app/page/person/editinfo/editinfo.component.ts");
/* harmony import */ var _page_person_modifypwd_modifypwd_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./page/person/modifypwd/modifypwd.component */ "./src/app/page/person/modifypwd/modifypwd.component.ts");
/* harmony import */ var _page_person_mymatch_mymatch_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./page/person/mymatch/mymatch.component */ "./src/app/page/person/mymatch/mymatch.component.ts");
/* harmony import */ var _page_matchdetail_matchdetail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./page/matchdetail/matchdetail.component */ "./src/app/page/matchdetail/matchdetail.component.ts");
/* harmony import */ var _page_newsdetail_newsdetail_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./page/newsdetail/newsdetail.component */ "./src/app/page/newsdetail/newsdetail.component.ts");










/** 配置 angular i18n **/


Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_11___default.a);
//swiper
//服务



//自定义组件















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _page_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _page_zhuye_zhuye_component__WEBPACK_IMPORTED_MODULE_15__["ZhuyeComponent"],
                _page_matchlist_matchlist_component__WEBPACK_IMPORTED_MODULE_16__["MatchlistComponent"],
                _page_newslist_newslist_component__WEBPACK_IMPORTED_MODULE_17__["NewslistComponent"],
                _components_adswiper_adswiper_component__WEBPACK_IMPORTED_MODULE_18__["AdswiperComponent"],
                _page_curture_curture_component__WEBPACK_IMPORTED_MODULE_19__["CurtureComponent"],
                _page_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
                _page_registersuccess_registersuccess_component__WEBPACK_IMPORTED_MODULE_21__["RegistersuccessComponent"],
                _page_notifylist_notifylist_component__WEBPACK_IMPORTED_MODULE_22__["NotifylistComponent"],
                _page_person_person_component__WEBPACK_IMPORTED_MODULE_23__["PersonComponent"],
                _page_person_pay_pay_component__WEBPACK_IMPORTED_MODULE_24__["PayComponent"],
                _page_person_editinfo_editinfo_component__WEBPACK_IMPORTED_MODULE_25__["EditinfoComponent"],
                _page_person_modifypwd_modifypwd_component__WEBPACK_IMPORTED_MODULE_26__["ModifypwdComponent"],
                _page_person_mymatch_mymatch_component__WEBPACK_IMPORTED_MODULE_27__["MymatchComponent"],
                _page_matchdetail_matchdetail_component__WEBPACK_IMPORTED_MODULE_28__["MatchdetailComponent"],
                _page_newsdetail_newsdetail_component__WEBPACK_IMPORTED_MODULE_29__["NewsdetailComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NgZorroAntdModule"]
            ],
            providers: [
                { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["zh_CN"] },
                _providers_http_service__WEBPACK_IMPORTED_MODULE_12__["HttpService"],
                _providers_toast_service__WEBPACK_IMPORTED_MODULE_14__["ToastService"],
                _providers_util_service__WEBPACK_IMPORTED_MODULE_13__["UtilService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/appConfig.ts":
/*!******************************!*\
  !*** ./src/app/appConfig.ts ***!
  \******************************/
/*! exports provided: AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    //测试路径
    // public static webRootPath = 'http://chessrace.vc/web/AppEntrance/';
    //实际路径
    AppConfig.webRootPath = 'http://api.fjswqxh.com/web/AppEntrance/';
    AppConfig.ossUrl = 'http://onepiecej.oss-cn-shenzhen.aliyuncs.com';
    AppConfig.userInfo = 'userInfo';
    return AppConfig;
}());



/***/ }),

/***/ "./src/app/components/adswiper/adswiper.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/adswiper/adswiper.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRzd2lwZXIvYWRzd2lwZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/adswiper/adswiper.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/adswiper/adswiper.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 轮播图 -->\n<div>\n  <div id=\"ad-div\">\n    <div class=\"swiper-container\" style=\"position: relative\" id=\"ad-swiper\">\n      <div class=\"swiper-wrapper\">\n        <div class=\"swiper-slide\">\n          <img src=\"../../assets/imgs/banner04.jpg\" alt=\"\" width=\"100%\">\n        </div>\n        <div class=\"swiper-slide\">\n          <img src=\"../../assets/imgs/banner01.jpg\" alt=\"\" width=\"100%\">\n        </div>\n        <div class=\"swiper-slide\">\n          <img src=\"../../assets/imgs/banner03.jpg\" alt=\"\" width=\"100%\">\n        </div>\n      </div>\n      <div class=\"swiper-pagination\" id=\"ad-pagination\"></div>\n      <div class=\"swiper-button-prev\"></div>\n      <div class=\"swiper-button-next\"></div>\n    </div>\n    <!-- <nz-carousel nzAutoPlay>\n      <div nz-carousel-content>\n        <img src=\"../../assets/imgs/banner04.jpg\" alt=\"\" width=\"100%\">\n      </div>\n      <div nz-carousel-content>\n        <img src=\"../../assets/imgs/banner01.jpg\" alt=\"\" width=\"100%\">\n      </div>\n      <div nz-carousel-content>\n        <img src=\"../../assets/imgs/banner03.jpg\" alt=\"\" width=\"100%\">\n      </div>\n    </nz-carousel> -->\n  </div>\n  <!-- <div class=\"swiper-container\" [swiper]=\"adSwiper\">\n    <div class=\"swiper-wrapper\">\n      <div class=\"swiper-slide\">slider1</div>\n      <div class=\"swiper-slide\">slider2</div>\n      <div class=\"swiper-slide\">slider3</div>\n    </div>\n  </div> -->\n</div>"

/***/ }),

/***/ "./src/app/components/adswiper/adswiper.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/adswiper/adswiper.component.ts ***!
  \***********************************************************/
/*! exports provided: AdswiperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdswiperComponent", function() { return AdswiperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_2__);



var AdswiperComponent = /** @class */ (function () {
    function AdswiperComponent() {
    }
    AdswiperComponent.prototype.ngOnInit = function () {
    };
    AdswiperComponent.prototype.ngAfterViewInit = function () {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this.initAdSwiper();
        // console.log(this.adSwiper)
    };
    AdswiperComponent.prototype.ngOnDestroy = function () {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        console.log("swiper destroy");
        this.adSwiper.destroy(true, true);
    };
    //初始化广告轮播swiper
    AdswiperComponent.prototype.initAdSwiper = function () {
        this.adSwiper = new swiper__WEBPACK_IMPORTED_MODULE_2__('#ad-swiper', {
            autoplay: 4000,
            effect: "slide",
            loop: true,
            pagination: '#ad-pagination',
            // paginationType :'bullets',//类型
            paginationClickable: true,
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next',
        });
    };
    AdswiperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adswiper',
            template: __webpack_require__(/*! ./adswiper.component.html */ "./src/app/components/adswiper/adswiper.component.html"),
            styles: [__webpack_require__(/*! ./adswiper.component.css */ "./src/app/components/adswiper/adswiper.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdswiperComponent);
    return AdswiperComponent;
}());



/***/ }),

/***/ "./src/app/page/curture/curture.component.css":
/*!****************************************************!*\
  !*** ./src/app/page/curture/curture.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvY3VydHVyZS9jdXJ0dXJlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page/curture/curture.component.html":
/*!*****************************************************!*\
  !*** ./src/app/page/curture/curture.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pageContainer\">\n  <img src=\"../../../assets/imgs/build4.png\" alt=\"\" width=\"720px\" height=\"510px\">\n  <h2>页面建设中...</h2>\n</div>"

/***/ }),

/***/ "./src/app/page/curture/curture.component.ts":
/*!***************************************************!*\
  !*** ./src/app/page/curture/curture.component.ts ***!
  \***************************************************/
/*! exports provided: CurtureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurtureComponent", function() { return CurtureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CurtureComponent = /** @class */ (function () {
    function CurtureComponent() {
    }
    CurtureComponent.prototype.ngOnInit = function () {
    };
    CurtureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-curture',
            template: __webpack_require__(/*! ./curture.component.html */ "./src/app/page/curture/curture.component.html"),
            styles: [__webpack_require__(/*! ./curture.component.css */ "./src/app/page/curture/curture.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CurtureComponent);
    return CurtureComponent;
}());



/***/ }),

/***/ "./src/app/page/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/page/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* app-home { */\r\n\r\n.layout {\r\n    /* height: 100vh; */\r\n    /* min-width: 980px; */\r\n    min-width: 70vw;\r\n    background-color: #ececec;\r\n}\r\n\r\n.logo {\r\n    width: 375px;\r\n    height: 50px;\r\n    /* background: rgba(255, 255, 255, 0.2); */\r\n    margin: 6px 24px 6px 0;\r\n    float: left;\r\n}\r\n\r\n.logo div {\r\n    line-height: initial;\r\n}\r\n\r\n.logoname {\r\n    color: #fff;\r\n    font-size: 25px;\r\n    vertical-align: middle;\r\n    letter-spacing: 2px;\r\n    display: inline-block;\r\n    padding-left: 16px;\r\n    font-family: inherit;\r\n}\r\n\r\n.userInfo {}\r\n\r\n.loginlink {\r\n    display: inline-block;\r\n    float: right;\r\n    width: 68px;\r\n    text-align: center;\r\n    margin-right: 100px;\r\n}\r\n\r\n.userInfo .loginlink:hover {\r\n    color: rgba(255, 255, 255, 0.65);\r\n    /* color: black; */\r\n}\r\n\r\nnz-header {\r\n    position: fixed;\r\n    width: 100%;\r\n    color: #fff;\r\n    /* background-color: #1976d2 */\r\n}\r\n\r\n[nz-menu] {\r\n    line-height: 64px;\r\n}\r\n\r\n[nz-menu] a {\r\n    color: #fff;\r\n}\r\n\r\n[nz-menu] li:hover a {\r\n    color: rgba(255, 255, 255, 0.65);\r\n}\r\n\r\n.userInfo .ant-menu.ant-menu-dark .ant-menu-item-selected {\r\n    background-color: rgb(0, 21, 41);\r\n}\r\n\r\n.userInfo .ant-menu-item-selected, .userInfo .ant-menu-item {\r\n    background-color: rgb(0, 21, 41);\r\n}\r\n\r\n.ant-menu-item {\r\n    background-color: rgb(0, 21, 41);\r\n}\r\n\r\n.subTitle {\r\n    color: #fff;\r\n}\r\n\r\n.subTitle:hover {\r\n    color: rgba(255, 255, 255, 0.65);\r\n}\r\n\r\nnz-content {\r\n    padding: 0 50px;\r\n    margin-top: 64px;\r\n}\r\n\r\nnz-breadcrumb {\r\n    margin: 16px 0;\r\n}\r\n\r\n.inner-content {\r\n    background: #fff;\r\n    padding: 24px;\r\n    min-height: 380px;\r\n}\r\n\r\nnz-footer {\r\n    text-align: center;\r\n    /* background-color: #1976d2; */\r\n    background-color: rgb(0, 21, 41);\r\n    color: #fff;\r\n    min-width: 1380px;\r\n}\r\n\r\n.ken_footerlink {\r\n    margin: 0 0px 40px 0px;\r\n    /* width: 600px; */\r\n    font-size: 16px;\r\n}\r\n\r\n.ken_footerlink_content {\r\n    /* margin: 0 0 20px 0; */\r\n    font-size: 14px;\r\n}\r\n\r\n.ken_footerlink_content div {\r\n    padding: 2px 0;\r\n}\r\n\r\n.ken_footerlink_content a {\r\n    color: #fff;\r\n}\r\n\r\n.ken_footerlink_content a:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.ken_footerlink_list {\r\n    margin: 0px 36px;\r\n    text-align: left;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n}\r\n\r\n.ken_footer_info div {\r\n    padding: 2px 0;\r\n}\r\n\r\n.modalTitle h3 {\r\n    color: #000;\r\n    font-family: inherit;\r\n    font-weight: bolder;\r\n}\r\n\r\n.modalBody {\r\n    text-align: center;\r\n}\r\n\r\n.login-form {\r\n    /* max-width: 300px; */\r\n}\r\n\r\n.login-form-forgot {\r\n    float: right;\r\n}\r\n\r\n.login-form-button {\r\n    width: 100%;\r\n}\r\n\r\n/* } */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlOztBQUVmO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWiwwQ0FBMEM7SUFDMUMsc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQSxXQUFXOztBQUVYO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7SUFDWCw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUEsTUFBTSIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBhcHAtaG9tZSB7ICovXHJcblxyXG4ubGF5b3V0IHtcclxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXHJcbiAgICAvKiBtaW4td2lkdGg6IDk4MHB4OyAqL1xyXG4gICAgbWluLXdpZHRoOiA3MHZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgd2lkdGg6IDM3NXB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgLyogYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpOyAqL1xyXG4gICAgbWFyZ2luOiA2cHggMjRweCA2cHggMDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ubG9nbyBkaXYge1xyXG4gICAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XHJcbn1cclxuXHJcbi5sb2dvbmFtZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi51c2VySW5mbyB7fVxyXG5cclxuLmxvZ2lubGluayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogNjhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi51c2VySW5mbyAubG9naW5saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpO1xyXG4gICAgLyogY29sb3I6IGJsYWNrOyAqL1xyXG59XHJcblxyXG5uei1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDIgKi9cclxufVxyXG5cclxuW256LW1lbnVdIHtcclxuICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xyXG59XHJcblxyXG5bbnotbWVudV0gYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuW256LW1lbnVdIGxpOmhvdmVyIGEge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NSk7XHJcbn1cclxuXHJcbi51c2VySW5mbyAuYW50LW1lbnUuYW50LW1lbnUtZGFyayAuYW50LW1lbnUtaXRlbS1zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjEsIDQxKTtcclxufVxyXG5cclxuLnVzZXJJbmZvIC5hbnQtbWVudS1pdGVtLXNlbGVjdGVkLCAudXNlckluZm8gLmFudC1tZW51LWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDIxLCA0MSk7XHJcbn1cclxuXHJcbi5hbnQtbWVudS1pdGVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyMSwgNDEpO1xyXG59XHJcblxyXG4uc3ViVGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zdWJUaXRsZTpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1KTtcclxufVxyXG5cclxubnotY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwIDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2NHB4O1xyXG59XHJcblxyXG5uei1icmVhZGNydW1iIHtcclxuICAgIG1hcmdpbjogMTZweCAwO1xyXG59XHJcblxyXG4uaW5uZXItY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIG1pbi1oZWlnaHQ6IDM4MHB4O1xyXG59XHJcblxyXG5uei1mb290ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyMSwgNDEpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtaW4td2lkdGg6IDEzODBweDtcclxufVxyXG5cclxuLmtlbl9mb290ZXJsaW5rIHtcclxuICAgIG1hcmdpbjogMCAwcHggNDBweCAwcHg7XHJcbiAgICAvKiB3aWR0aDogNjAwcHg7ICovXHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5rZW5fZm9vdGVybGlua19jb250ZW50IHtcclxuICAgIC8qIG1hcmdpbjogMCAwIDIwcHggMDsgKi9cclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmtlbl9mb290ZXJsaW5rX2NvbnRlbnQgZGl2IHtcclxuICAgIHBhZGRpbmc6IDJweCAwO1xyXG59XHJcblxyXG4ua2VuX2Zvb3RlcmxpbmtfY29udGVudCBhIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ua2VuX2Zvb3RlcmxpbmtfY29udGVudCBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ua2VuX2Zvb3RlcmxpbmtfbGlzdCB7XHJcbiAgICBtYXJnaW46IDBweCAzNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbi5rZW5fZm9vdGVyX2luZm8gZGl2IHtcclxuICAgIHBhZGRpbmc6IDJweCAwO1xyXG59XHJcblxyXG4ubW9kYWxUaXRsZSBoMyB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuLm1vZGFsQm9keSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIHtcclxuICAgIC8qIG1heC13aWR0aDogMzAwcHg7ICovXHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtLWZvcmdvdCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogfSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/page/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/page/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"layout\">\n  <nz-header style=\"position:fixed; width:100%;z-index: 10;\">\n    <div style=\"min-width: 980px;margin:auto;\">\n      <div class=\"logo\">\n        <div>\n          <a href=\"http://www.fjswqxh.com/\" target=\"_blank\">\n            <img src=\"../../../assets/imgs/logo_fj.png\" alt=\"\" style=\"width: 50px;height: 50px;\">\n            <span class=\"logoname\">福建省围棋协会管理系统</span>\n          </a>\n        </div>\n      </div>\n      <ul nz-menu [nzTheme]=\"'dark'\" [nzMode]=\"'horizontal'\" style=\"line-height: 64px;\">\n        <li nz-menu-item>\n          <a routerLink=\"/home\">首页</a></li>\n        <li nz-menu-item>\n          <a routerLink=\"/matchlist\">赛事报名</a>\n        </li>\n        <li nz-menu-item>\n          <a routerLink=\"/newslist\">新闻/通知</a>\n        </li>\n        <!-- <li nz-menu-item>\n          <a routerLink=\"/notifylist\">通知</a>\n        </li> -->\n        <!-- <li nz-menu-item>\n          <a routerLink=\"/culture\">围棋文化</a>\n        </li> -->\n        <span class=\"userInfo\" *ngIf=\"!this.utilService.getLS('userInfo')\">\n          <a class=\"loginlink\" (click)=\"showModal()\">登录</a>\n          <li nz-menu-item style=\"float: right;margin-top: 0;\">\n            <a routerLink=\"/register\">注册</a>\n          </li>\n        </span>\n        <span class=\"userInfo\" *ngIf=\"this.utilService.getLS('userInfo')\">\n          <li nz-submenu style=\"float: right;margin-top: 0;margin-right: 100px;\">\n            <span title class=\"subTitle\"><i nz-icon nzType=\"user\"\n                nzTheme=\"outline\"></i>{{this.utilService.getLS('userInfo').user_name}}</span>\n            <ul>\n              <li nz-menu-item>\n                <a routerLink=\"/person\">个人中心</a>\n              </li>\n              <li nz-menu-item>\n                <a (click)=\"loginOut()\">退出</a>\n              </li>\n            </ul>\n          </li>\n        </span>\n      </ul>\n    </div>\n  </nz-header>\n  <div style=\"padding:0;margin-top:64px;min-width: 1380px;\">\n    <app-adswiper #adswiperChild></app-adswiper>\n  </div>\n  <div style=\"padding:24px 150px;margin:0 auto;text-align: center;min-height: 500px;\">\n    <!-- <nz-breadcrumb style=\"margin:16px 0;\">\n      <nz-breadcrumb-item>Home</nz-breadcrumb-item>\n      <nz-breadcrumb-item>List</nz-breadcrumb-item>\n      <nz-breadcrumb-item>App</nz-breadcrumb-item>\n    </nz-breadcrumb> -->\n    <!-- <div style=\"padding: 24px; min-height: 500px;margin:0 auto;\"> -->\n    <router-outlet></router-outlet>\n    <!-- </div> -->\n  </div>\n  <nz-footer style=\"text-align: center;\">\n    <div class=\"ken_footerlink\">\n      <div nz-row>\n        <div nz-col nzSpan=\"24\">\n          <div class=\"ken_footerlink_list\">\n            <div style=\"margin-bottom: 10px\">重要链接</div>\n            <div class=\"ken_footerlink_content\">\n              <div><a href=\"http://www.sport.gov.cn/\" target=\"_blank\">国家体育总局</a></div>\n              <div><a href=\"http://www.sport.org.cn/\" target=\"_blank\">中华全国体育总会</a></div>\n              <div><a href=\"http://tyj.fujian.gov.cn/\" target=\"_blank\">福建省体育局</a></div>\n            </div>\n          </div>\n          <div class=\"ken_footerlink_list\">\n            <div style=\"margin-bottom: 10px\">管理机构</div>\n            <div class=\"ken_footerlink_content\">\n              <div><a href=\"http://weiqi.sport.org.cn/\" target=\"_blank\">中国围棋协会</a></div>\n              <div><a href=\"http://www.zgqyhzfy.com/web/index.do\" target=\"_blank\">中国棋院杭州分院</a></div>\n              <div><a href=\"http://www.sdqipai.com/\" target=\"_blank\">山东省棋牌管理中心</a></div>\n              <div><a href=\"http://www.hunanqixie.com/\" target=\"_blank\">湖南棋院</a></div>\n            </div>\n          </div>\n          <div class=\"ken_footerlink_list\">\n            <div style=\"margin-bottom: 10px\">友情链接</div>\n            <div class=\"ken_footerlink_content\">\n              <div><a href=\"http://weiqi.sina.com.cn/\" target=\"_blank\">新浪棋牌</a></div>\n              <div><a href=\"http://sports.sohu.com/s/chess\" target=\"_blank\">搜狐棋牌</a></div>\n              <div><a href=\"http://sports.163.com/qp/\" target=\"_blank\">网易棋牌</a></div>\n              <div><a href=\"http://sports.titan24.com/qipai/\" target=\"_blank\">体坛网棋牌</a></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"ken_footer_info\">\n      <div>Copyright 2001 EWEIQI Corporation, All Rights Reserved</div>\n      <div> ©2019 福建省围棋协会版权所有 ICP经营许可证：闽ICP备 14011136号-1</div>\n      <div> 主办单位：福建省围棋协会&nbsp;&nbsp;&nbsp;&nbsp; 联系电话：059183751771 &nbsp;&nbsp;&nbsp;&nbsp;通信地址：福州市鼓楼区铜盘软件园B区12栋网讯科技二楼\n      </div>\n    </div>\n  </nz-footer>\n</nz-layout>\n<!-- 登录框 -->\n<nz-modal [nzWidth]=\"420\" [nzBodyStyle]=\"loginBodyStyle\" [(nzVisible)]=\"this.utilService.LoginIsVisible\"\n  [nzTitle]=\"loginTitle\" [nzContent]=\"loginBody\" (nzOnCancel)=\"handleCancel()\" (nzOnOk)=\"handleOk()\"\n  [nzOkLoading]=\"isOkLoading\" [nzClosable]=\"true\" [nzFooter]=\"null\">\n  <ng-template #loginTitle>\n    <div class=\"modalTitle\">\n      <h3>登录</h3>\n    </div>\n  </ng-template>\n  <ng-template #loginBody>\n    <div class=\"modalBody\">\n      <form nz-form [formGroup]=\"validateForm\" class=\"login-form\" (ngSubmit)=\"submitForm()\">\n        <nz-form-item>\n          <nz-form-control>\n            <nz-input-group [nzPrefix]=\"prefixUser\">\n              <input type=\"text\" nz-input formControlName=\"phone\" placeholder=\"请输入手机号\" />\n            </nz-input-group>\n            <nz-form-explain style=\"text-align: left\"\n              *ngIf=\"validateForm.get('phone')?.dirty && validateForm.get('phone')?.errors\">请输入手机号 </nz-form-explain>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-control>\n            <nz-input-group [nzPrefix]=\"prefixLock\">\n              <input type=\"password\" nz-input formControlName=\"pwd\" placeholder=\"请输入密码\" />\n            </nz-input-group>\n            <nz-form-explain style=\"text-align: left\"\n              *ngIf=\"validateForm.get('pwd')?.dirty && validateForm.get('pwd')?.errors\">请输入密码 </nz-form-explain>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-control>\n            <!-- <label nz-checkbox formControlName=\"remember\">\n              <span>Remember me</span>\n            </label> -->\n            <a class=\"login-form-forgot\" (click)=\"showModal1()\">忘记密码</a>\n            <button nz-button class=\"login-form-button\" [nzType]=\"'primary'\">登录</button>\n            <div style=\"text-align: left\">或者 <a (click)=\"goRegister()\">马上注册!</a></div>\n          </nz-form-control>\n        </nz-form-item>\n      </form>\n      <ng-template #prefixUser><i nz-icon type=\"user\"></i></ng-template>\n      <ng-template #prefixLock><i nz-icon type=\"lock\"></i></ng-template>\n    </div>\n  </ng-template>\n</nz-modal>\n<!-- 忘记密码 -->\n<nz-modal [nzWidth]=\"420\" [nzBodyStyle]=\"loginBodyStyle\" [(nzVisible)]=\"isVisible1\" [nzTitle]=\"loginTitle1\"\n  [nzContent]=\"loginBody1\" (nzOnCancel)=\"handleCancel1()\" (nzOnOk)=\"handleOk1()\" [nzOkLoading]=\"isOkLoading1\"\n  [nzClosable]=\"true\" [nzFooter]=\"null\">\n  <ng-template #loginTitle1>\n    <div class=\"modalTitle\">\n      <h3>忘记密码</h3>\n    </div>\n  </ng-template>\n  <ng-template #loginBody1>\n    <!-- 验证码 -->\n    <div class=\"modalBody\" *ngIf=\"showYZMdialog\">\n      <form nz-form [formGroup]=\"validateForm1\" class=\"login-form\" (ngSubmit)=\"submitForm1()\">\n        <nz-form-item>\n          <nz-form-control>\n            <nz-input-group [nzPrefix]=\"prefixUser\">\n              <input type=\"text\" nz-input formControlName=\"phone2\" placeholder=\"请输入手机号\" />\n            </nz-input-group>\n            <nz-form-explain style=\"text-align: left\"\n              *ngIf=\"validateForm1.get('phone2')?.dirty && validateForm1.get('phone2')?.errors\">请输入手机号\n            </nz-form-explain>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-control>\n            <div nz-row [nzGutter]=\"8\">\n              <div nz-col [nzSpan]=\"12\">\n                <nz-input-group [nzPrefix]=\"prefixLock\">\n                  <input type=\"text\" nz-input formControlName=\"code\" placeholder=\"请输入验证码\" />\n                </nz-input-group>\n              </div>\n              <div nz-col [nzSpan]=\"12\">\n                <button nz-button (click)=\"getCaptcha($event)\" [disabled]=\"sendSmsActive\">{{sendSmsText}}</button>\n              </div>\n            </div>\n            <nz-form-explain style=\"text-align: left\"\n              *ngIf=\"validateForm1.get('code')?.dirty && validateForm1.get('code')?.errors\">请输入验证码 </nz-form-explain>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-control>\n            <button nz-button class=\"login-form-button\" [nzType]=\"'primary'\">提交</button>\n          </nz-form-control>\n        </nz-form-item>\n      </form>\n      <ng-template #prefixUser><i nz-icon type=\"phone\"></i></ng-template>\n      <ng-template #prefixLock><i nz-icon type=\"lock\"></i></ng-template>\n    </div>\n    <!-- 改密码 -->\n    <div class=\"modalBody\" *ngIf=\"showModifydialog\">\n      <form nz-form [formGroup]=\"validateForm2\" class=\"login-form\" (ngSubmit)=\"submitForm2()\">\n        <nz-form-item>\n          <nz-form-control>\n            <nz-input-group [nzPrefix]=\"prefixUser\">\n              <input type=\"password\" nz-input formControlName=\"new_pwd\" placeholder=\"请输入新密码\" />\n            </nz-input-group>\n            <nz-form-explain style=\"text-align: left\"\n              *ngIf=\"validateForm2.get('new_pwd')?.dirty && validateForm2.get('new_pwd')?.errors\">请输入新密码\n            </nz-form-explain>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-control>\n            <nz-input-group [nzPrefix]=\"prefixUser\">\n              <input type=\"password\" nz-input formControlName=\"confirm_pwd\" placeholder=\"请再次输入新密码\" />\n            </nz-input-group>\n            <nz-form-explain style=\"text-align: left\"\n              *ngIf=\"validateForm2.get('confirm_pwd')?.dirty && validateForm2.get('confirm_pwd')?.errors\">请再次输入新密码\n            </nz-form-explain>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-control>\n            <button nz-button class=\"login-form-button\" [nzType]=\"'primary'\">确定</button>\n          </nz-form-control>\n        </nz-form-item>\n      </form>\n      <ng-template #prefixUser><i nz-icon type=\"lock\"></i></ng-template>\n      <ng-template #prefixLock><i nz-icon type=\"lock\"></i></ng-template>\n    </div>\n  </ng-template>\n</nz-modal>"

/***/ }),

/***/ "./src/app/page/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/http.service */ "./src/app/providers/http.service.ts");
/* harmony import */ var _providers_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/toast.service */ "./src/app/providers/toast.service.ts");
/* harmony import */ var _providers_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/util.service */ "./src/app/providers/util.service.ts");







var HomeComponent = /** @class */ (function () {
    function HomeComponent(fb, router, httpService, toastService, utilService) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.httpService = httpService;
        this.toastService = toastService;
        this.utilService = utilService;
        this.isLogin = false;
        this.isOkLoading = false;
        this.isVisible1 = false;
        this.isOkLoading1 = false;
        this.loginBodyStyle = {
            padding: "12px 24px"
        };
        this.sendSmsText = "获取验证码";
        this.sendSmsActive = false;
        this.showYZMdialog = true;
        this.showModifydialog = false;
        this.loginSucCb = function (res) {
            console.log(res);
            if (res.statusCode == 0) {
                _this.toastService.showMessage("success", res.msg);
                _this.utilService.LoginIsVisible = false;
                _this.utilService.setLS('userInfo', res.data);
                // localStorage.setItem('userInfo', JSON.stringify(res.data));
                // this.isLogin=true;
            }
            else {
                _this.toastService.showMessage("error", res.msg);
            }
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.initLoginForm();
        this.initLoginForm1();
        this.initLoginForm2();
    };
    HomeComponent.prototype.initLoginForm = function () {
        this.validateForm = this.fb.group({
            phone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pwd: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    //登录
    HomeComponent.prototype.submitForm = function () {
        console.log("提交登录");
        for (var i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        if (this.validateForm.status == 'VALID') { /* 通过验证 */
            // console.log(this.validateForm.value);
            var data = {
                phone: this.validateForm.value.phone,
                pwd: this.validateForm.value.pwd,
            };
            // console.log(data);
            this.httpService.post('login', data, this.loginSucCb);
        }
    };
    HomeComponent.prototype.initLoginForm1 = function () {
        this.validateForm1 = this.fb.group({
            phone2: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            code: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    HomeComponent.prototype.submitForm1 = function () {
        var _this = this;
        console.log("提交忘记密码-验证码");
        for (var i in this.validateForm1.controls) {
            this.validateForm1.controls[i].markAsDirty();
            this.validateForm1.controls[i].updateValueAndValidity();
        }
        if (this.validateForm1.status == 'VALID') {
            var data = {
                phone: this.validateForm1.value.phone2,
                code: this.validateForm1.value.code,
            };
            // console.log(data);
            this.httpService.post('validatePhoneCode', data, function (res) {
                console.log(res);
                if (res.statusCode == 0) {
                    _this.showYZMdialog = false;
                    _this.showModifydialog = true;
                }
                else {
                    _this.toastService.showMessage("error", res.msg);
                }
            });
        }
    };
    HomeComponent.prototype.initLoginForm2 = function () {
        this.validateForm2 = this.fb.group({
            new_pwd: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            confirm_pwd: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    //提交保存密码
    HomeComponent.prototype.submitForm2 = function () {
        var _this = this;
        console.log("提交忘记密码-设置新密码");
        for (var i in this.validateForm2.controls) {
            this.validateForm2.controls[i].markAsDirty();
            this.validateForm2.controls[i].updateValueAndValidity();
        }
        if (this.validateForm2.status == 'VALID') {
            if (this.validateForm2.value.new_pwd != this.validateForm2.value.confirm_pwd) {
                this.toastService.showMessage("error", "两次密码输入不一致");
                return;
            }
            var data = {
                phone: this.validateForm1.value.phone2,
                pwd: this.validateForm2.value.new_pwd
            };
            this.httpService.post('changePwd', data, function (res) {
                console.log(res);
                _this.toastService.showMessage("info", res.msg);
                _this.showYZMdialog = true;
                _this.showModifydialog = false;
                _this.isVisible1 = false;
                _this.utilService.LoginIsVisible = true;
            });
        }
    };
    HomeComponent.prototype.showModal = function () {
        this.utilService.LoginIsVisible = true;
    };
    HomeComponent.prototype.showModal1 = function () {
        this.utilService.LoginIsVisible = false;
        this.isVisible1 = true;
    };
    //跳转注册页
    HomeComponent.prototype.goRegister = function () {
        console.log("跳转注册页");
        this.utilService.LoginIsVisible = false;
        this.router.navigate(['/register']);
    };
    //获取验证码
    HomeComponent.prototype.getCaptcha = function (e) {
        var _this = this;
        e.preventDefault();
        console.log(this.validateForm1);
        //30s冷却发送验证码按钮
        var count = 30;
        this.sendSmsActive = true;
        var time = window.setInterval(function () {
            _this.sendSmsText = count + "秒后再次发送";
            count--;
            if (count < 0) {
                window.clearInterval(time);
                _this.sendSmsActive = false;
                _this.sendSmsText = "获取验证码";
            }
        }, 1000);
        var data = {
            phone: this.validateForm1.value.phone2,
            type: 2 //获取忘记密码验证码
        };
        this.httpService.post('sendSMS', data, function (res) {
            console.log(res);
            if (res.statusCode != 0) {
                _this.toastService.showMessage("error", res.msg);
            }
        });
    };
    HomeComponent.prototype.handleOk = function () {
        var _this = this;
        this.isOkLoading = true;
        setTimeout(function () {
            _this.utilService.LoginIsVisible = false;
            _this.isOkLoading = false;
        }, 3000);
    };
    HomeComponent.prototype.handleOk1 = function () {
        console.log("ok1");
    };
    HomeComponent.prototype.handleCancel = function () {
        this.utilService.LoginIsVisible = false;
    };
    HomeComponent.prototype.handleCancel1 = function () {
        this.isVisible1 = false;
    };
    HomeComponent.prototype.loginOut = function () {
        console.log("退出");
        this.utilService.delLS("userInfo");
        this.router.navigate(['/home']);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/page/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/page/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _providers_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _providers_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
            _providers_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/page/matchdetail/matchdetail.component.css":
/*!************************************************************!*\
  !*** ./src/app/page/matchdetail/matchdetail.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nz-page-header-content {\r\n    text-align: left;\r\n}\r\n\r\nnz-page-header {\r\n    /* border: 1px solid rgb(235, 237, 240); */\r\n}\r\n\r\n.wrap {\r\n    display: flex;\r\n}\r\n\r\n.content {\r\n    flex: 1;\r\n}\r\n\r\n.content p {\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.content-link {\r\n    padding-top: 16px;\r\n}\r\n\r\n.content-link a {\r\n    display: inline-block;\r\n    vertical-align: text-top;\r\n    margin-right: 32px;\r\n}\r\n\r\n.content-link a img {\r\n    margin-right: 8px;\r\n}\r\n\r\n.extra-content {\r\n    min-width: 240px;\r\n    text-align: right;\r\n}\r\n\r\n.extra-content img {\r\n    width: 220px;\r\n    height: 100%;\r\n}\r\n\r\n.ken-link {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 32px;\r\n}\r\n\r\n.ken-link i {\r\n    font-size: 24px;\r\n    margin-right: 8px;\r\n    vertical-align: middle;\r\n}\r\n\r\n::ng-deep .ant-collapse-content>.ant-collapse-content-box {\r\n    padding: 0;\r\n}\r\n\r\n::ng-deep .ant-table-thead>tr>th {\r\n    background-color: #fff;\r\n}\r\n\r\n.ken-div {\r\n    margin: 0 0 14px;\r\n    padding: 0 24px;\r\n}\r\n\r\n#zzbm {\r\n    background-color: #ff4d4f;\r\n    color: #fff;\r\n    border-color: #ff4d4f;\r\n    width: 110px;\r\n    /* height: 40px; */\r\n}\r\n\r\n#zzbm:hover {\r\n    /* border-color: #ff4d4f;\r\n    color: #ff4d4f; */\r\n}\r\n\r\n#zzbm:disabled {\r\n    color: rgba(0, 0, 0, .25);\r\n    background-color: #f5f5f5;\r\n    border-color: #d9d9d9;\r\n    text-shadow: none;\r\n    box-shadow: none;\r\n}\r\n\r\n#score span {\r\n    display: inline-block;\r\n    margin: 0 28px 8px 0;\r\n    min-width: 60px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9tYXRjaGRldGFpbC9tYXRjaGRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO3FCQUNpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlL21hdGNoZGV0YWlsL21hdGNoZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuei1wYWdlLWhlYWRlci1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbm56LXBhZ2UtaGVhZGVyIHtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzUsIDIzNywgMjQwKTsgKi9cclxufVxyXG5cclxuLndyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuLmNvbnRlbnQgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWxpbmsge1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWxpbmsgYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWxpbmsgYSBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5leHRyYS1jb250ZW50IHtcclxuICAgIG1pbi13aWR0aDogMjQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmV4dHJhLWNvbnRlbnQgaW1nIHtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmtlbi1saW5rIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbi5rZW4tbGluayBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5hbnQtY29sbGFwc2UtY29udGVudD4uYW50LWNvbGxhcHNlLWNvbnRlbnQtYm94IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYW50LXRhYmxlLXRoZWFkPnRyPnRoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5rZW4tZGl2IHtcclxuICAgIG1hcmdpbjogMCAwIDE0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDI0cHg7XHJcbn1cclxuXHJcbiN6emJtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjRkNGY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmNGQ0ZjtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIC8qIGhlaWdodDogNDBweDsgKi9cclxufVxyXG5cclxuI3p6Ym06aG92ZXIge1xyXG4gICAgLyogYm9yZGVyLWNvbG9yOiAjZmY0ZDRmO1xyXG4gICAgY29sb3I6ICNmZjRkNGY7ICovXHJcbn1cclxuXHJcbiN6emJtOmRpc2FibGVkIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZDlkOWQ5O1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4jc2NvcmUgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgMjhweCA4cHggMDtcclxuICAgIG1pbi13aWR0aDogNjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/page/matchdetail/matchdetail.component.html":
/*!*************************************************************!*\
  !*** ./src/app/page/matchdetail/matchdetail.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"min-width: 1080px;\">\n  <!-- 比赛列表 -->\n  <div class=\"pageContainer\" style=\"min-height: 600px;max-width: 980px;margin: 0 auto\">\n    <div *ngIf=\"!selected_match\">\n      <nz-empty nzNotFoundContent=\"数据加载中~\"></nz-empty>\n    </div>\n    <div *ngIf=\"selected_match\">\n      <nz-page-header [nzTitle]=\"selected_match.match_name\">\n        <nz-page-header-content>\n          <div class=\"wrap\">\n            <div class=\"content\">\n              <div class=\"content\" style=\"font-size: 15px\">\n                <div nz-row>\n                  <div nz-col nzSpan=\"12\">\n                    <p>报名开始时间:{{selected_match.enlist_begin}}</p>\n                    <p>比赛时间:{{selected_match.begin_time+' '}}至{{' '+selected_match.end_time}}</p>\n                  </div>\n                  <div nz-col nzSpan=\"12\">\n                    <p>报名结束时间:{{selected_match.enlist_end}}</p>\n                  </div>\n                </div>\n                <p>比赛地点:{{selected_match.match_address}}</p>\n                <p>赛事通知:</p>\n                <p [innerHTML]=\"selected_match.introduce\"></p>\n                <p>裁判长:{{selected_match.referee_boss}}</p>\n                <p>编排长:{{selected_match.order_boss}}</p>\n                <p>报名联系人:{{selected_match.enlist_name}}</p>\n                <p>联系人电话:{{selected_match.enlist_phone}}</p>\n                <p class=\"content-link\">\n                  <span class=\"ken-link\" style=\"color: #1976d2\">\n                    <i nz-icon nzType=\"info-circle\" nzTheme=\"outline\"></i>\n                    <span><a (click)=\"queryEnlist_list()\">查看报名选手</a> </span>\n                  </span>\n                </p>\n              </div>\n            </div>\n            <div class=\"extra-content\">\n              <img [src]=\"selected_match.img_url\" alt=\"content\" style=\" width: 240px;height: auto;\" />\n            </div>\n          </div>\n        </nz-page-header-content>\n      </nz-page-header>\n      <p style=\"text-align: left;padding: 0 24px;\" *ngIf=\"selected_match.is_enlist==2||selected_match.is_enlist==3\">\n        <span class=\"ken-link\" style=\"color: #1976d2;display: block;margin-bottom: 8px\">\n          <i nz-icon nzType=\"profile\" nzTheme=\"outline\"></i>\n          <span style=\"font-size: 15px;\">查看随机分组情况</span>\n        </span>\n        <button style=\"margin: 0 24px 8px 0;width:150px\" nz-button nzType=\"default\"\n          *ngFor=\"let item of selected_match.match_group\" (click)=\" queryRandomGroup(item.id, item)\">\n          <i nz-icon nzType=\"forward\" nzTheme=\"fill\"></i>{{item.group_name}}</button>\n      </p>\n      <div class=\"ken-div\">\n        <div>\n          <nz-dropdown [nzDisabled]=\"selected_match.is_enlist!=1\" [nzPlacement]=\"'bottomLeft'\">\n            <button *ngIf=\"selected_match.is_enlist==0\" nzSize=\"large\" id=\"zzbm\" nz-button nz-dropdown>未开放</button>\n            <button *ngIf=\"selected_match.is_enlist==1\" nzSize=\"large\" id=\"zzbm\" nz-button nz-dropdown>正在报名</button>\n            <button *ngIf=\"selected_match.is_enlist==2\" nzSize=\"large\" id=\"zzbm\" nz-button nz-dropdown>报名结束</button>\n            <button *ngIf=\"selected_match.is_enlist==3\" nzSize=\"large\" id=\"zzbm\" nz-button nz-dropdown>比赛结束</button>\n            <ul nz-menu style=\"min-width: 110px;\">\n              <li nz-menu-item *ngFor=\"let item of selected_match.match_group\">\n                <a style=\"color: #000;\" (click)=\"signUp(item.id,item.group_price)\">{{item.group_name}}</a>\n              </li>\n            </ul>\n          </nz-dropdown>\n        </div>\n      </div>\n      <nz-divider></nz-divider>\n      <div class=\"ken-div\" style=\"text-align: left\">\n        <nz-radio-group [(ngModel)]=\"radioValue\" [nzButtonStyle]=\"'solid'\">\n          <label nz-radio-button nzValue=\"rule\">赛规赛程</label>\n          <label nz-radio-button nzValue=\"rule_add\">补充规则</label>\n          <label nz-radio-button nzValue=\"rank\">赛事排名</label>\n        </nz-radio-group>\n      </div>\n      <div class=\"ken-div\" style=\"text-align: left;min-height: 400px;\">\n        <div *ngIf=\"radioValue=='rule'\">\n          <div [innerHTML]=\"selected_match.rule\"></div>\n        </div>\n        <div *ngIf=\"radioValue=='rule_add'\">\n          <div [innerHTML]=\"selected_match.rule_add\"></div>\n        </div>\n        <div *ngIf=\"radioValue=='rank'\">\n          <div style=\"margin-bottom: 14px;\">\n            <nz-page-header [nzTitle]=\"query_rank_group.group_name+' 排位表'\">\n              <nz-page-header-extra>\n                <nz-select style=\"width: 200px;\" (ngModelChange)=\"rankGroupChange($event)\"\n                  [(ngModel)]=\"query_rank_group\" nzPlaceHolder=\"请选择组别\">\n                  <nz-option *ngFor=\"let item of selected_match.match_group\" [nzValue]=\"item\"\n                    [nzLabel]=\"item.group_name\"></nz-option>\n                </nz-select>\n              </nz-page-header-extra>\n            </nz-page-header>\n          </div>\n          <div>\n            <!-- 表格 -->\n            <nz-table #headerTable [nzData]=\"matchScore_list\" [nzScroll]=\"{ y: '800px' }\" nzPageSize=\"20\">\n              <thead>\n                <tr>\n                  <th nzShowExpand nzWidth=\"50px\"></th>\n                  <th nzWidth=\"150px\">名次</th>\n                  <th nzWidth=\"150px\">姓名</th>\n                  <th nzWidth=\"150px\">是否升级</th>\n                  <th nzWidth=\"100px\">赛后等级</th>\n                  <th nzWidth=\"150px\">对手</th>\n                  <th>备注</th>\n                </tr>\n              </thead>\n              <tbody id=\"score\">\n                <ng-template ngFor let-data [ngForOf]=\"headerTable.data\">\n                  <tr>\n                    <td nzShowExpand [(nzExpand)]=\"data.expand\"></td>\n                    <td>{{ data.rank }}</td>\n                    <td>{{ data.user_name }}</td>\n                    <td>{{ data.is_uplv==0?'':data.is_uplv }}</td>\n                    <td>{{ data.to_level==0?'':data.to_level }}</td>\n                    <td>{{ data.total_rival }}</td>\n                    <td>{{ data.remark }}</td>\n                  </tr>\n                  <tr [nzExpand]=\"data.expand\">\n                    <td></td>\n                    <td colspan=\"6\">\n                      <div>\n                        <div nz-row>\n                          <div nz-col nzSpan=\"12\">\n                            <div>\n                              <span>一轮得分:</span><span>{{data.score1}}</span>\n                              <span>一轮对手:</span><span>{{data.rival1}}</span>\n                            </div>\n                            <div>\n                              <span>二轮得分:</span><span>{{data.score2}}</span>\n                              <span>二轮对手:</span><span>{{data.rival2}}</span>\n                            </div>\n                            <div>\n                              <span>三轮得分:</span><span>{{data.score3}}</span>\n                              <span>三轮对手:</span><span>{{data.rival3}}</span>\n                            </div>\n                            <div>\n                              <span>四轮得分:</span><span>{{data.score4}}</span>\n                              <span>四轮对手:</span><span>{{data.rival4}}</span>\n                            </div>\n                            <div>\n                              <span>五轮得分:</span><span>{{data.score5}}</span>\n                              <span>五轮对手:</span><span>{{data.rival5}}</span>\n                            </div>\n                            <div>\n                              <span>六轮得分:</span><span>{{data.score6}}</span>\n                              <span>六轮对手:</span><span>{{data.rival6}}</span>\n                            </div>\n                          </div>\n                          <div nz-col nzSpan=\"12\">\n                            <div>\n                              <span>七轮得分:</span><span>{{data.score7}}</span>\n                              <span>七轮对手:</span><span>{{data.rival7}}</span>\n                            </div>\n                            <div>\n                              <span>八轮得分:</span><span>{{data.score8}}</span>\n                              <span>八轮对手:</span><span>{{data.rival8}}</span>\n                            </div>\n                            <div>\n                              <span>九轮得分:</span><span>{{data.score9}}</span>\n                              <span>九轮对手:</span><span>{{data.rival9}}</span>\n                            </div>\n                            <div>\n                              <span>10轮得分:</span><span>{{data.score10}}</span>\n                              <span>10轮对手:</span><span>{{data.rival10}}</span>\n                            </div>\n                            <div>\n                              <span>11轮得分:</span><span>{{data.score11}}</span>\n                              <span>11轮对手:</span><span>{{data.rival11}}</span>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </td>\n                  </tr>\n                </ng-template>\n              </tbody>\n            </nz-table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--查看报名选手 对话框 -->\n<nz-modal [(nzVisible)]=\"isVisible\" nzTitle=\"已报名参赛选手\" (nzOnCancel)=\"handleCancel()\" (nzOnOk)=\"handleOk()\"\n  [nzFooter]=\"null\" nzWidth=\"600\">\n  <div>\n    <div *ngIf=\"enlist_list.length==0\">\n      <nz-empty nzNotFoundContent=\"数据加载中~\"></nz-empty>\n    </div>\n    <div *ngIf=\"enlist_list.length>0\">\n      <nz-collapse>\n        <nz-collapse-panel *ngFor=\"let panel of enlist_list;let i=index\"\n          [nzHeader]=\"panel.group_name+'('+panel.group_arr.length+'人)'\" [nzActive]=\"i==0\"\n          [nzExpandedIcon]=\"'double-right'\">\n          <!-- 表格 -->\n          <nz-table #headerTable [nzData]=\"panel.group_arr\" [nzScroll]=\"{ y: '300px' }\" nzPageSize=\"50\">\n            <thead>\n              <tr>\n                <th nzWidth=\"10%\">#</th>\n                <th nzWidth=\"20%\">姓名</th>\n                <th>机构</th>\n                <th nzWidth=\"15%\">棋力</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let data of headerTable.data;let j=index\">\n                <td>{{ j+1 }}</td>\n                <td>{{ data.user_name }}</td>\n                <td>{{ data.org_name }}</td>\n                <td>{{ data.level }}</td>\n              </tr>\n            </tbody>\n          </nz-table>\n        </nz-collapse-panel>\n      </nz-collapse>\n    </div>\n  </div>\n</nz-modal>\n<!--查看随机分组 对话框 -->\n<nz-modal [(nzVisible)]=\"isVisible1\" [nzTitle]=\"selected_group?selected_group.group_name:''+'的随机分组表'\"\n  (nzOnCancel)=\"handleCancel1()\" (nzOnOk)=\"handleOk1()\" [nzFooter]=\"null\" nzWidth=\"600\">\n  <div>\n    <div *ngIf=\"random_list.length==0\">\n      <nz-empty nzNotFoundContent=\"数据加载中~\"></nz-empty>\n    </div>\n    <div *ngIf=\"random_list.length>0\">\n      <nz-collapse>\n        <nz-collapse-panel *ngFor=\"let panel of random_list;let i=index\"\n          [nzHeader]=\"panel.org_name+'('+panel.arr.length+'人)'\" [nzActive]=\"i==0\" [nzExpandedIcon]=\"'double-right'\">\n          <!-- 表格 -->\n          <nz-table #headerTable [nzData]=\"panel.arr\" [nzScroll]=\"{ y: '300px' }\" nzPageSize=\"50\">\n            <thead>\n              <tr>\n                <th nzWidth=\"10%\">#</th>\n                <th nzWidth=\"20%\">姓名</th>\n                <th>机构</th>\n                <th nzWidth=\"18%\">棋力</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let data of headerTable.data;let j=index\">\n                <td>{{ j+1 }}</td>\n                <td>{{ data.user_name }}</td>\n                <td>{{ data.org_name }}</td>\n                <td>{{ data.user_level }}</td>\n              </tr>\n            </tbody>\n          </nz-table>\n        </nz-collapse-panel>\n      </nz-collapse>\n    </div>\n  </div>\n</nz-modal>"

/***/ }),

/***/ "./src/app/page/matchdetail/matchdetail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/page/matchdetail/matchdetail.component.ts ***!
  \***********************************************************/
/*! exports provided: MatchdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchdetailComponent", function() { return MatchdetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/http.service */ "./src/app/providers/http.service.ts");
/* harmony import */ var _providers_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/toast.service */ "./src/app/providers/toast.service.ts");
/* harmony import */ var _providers_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/util.service */ "./src/app/providers/util.service.ts");






var MatchdetailComponent = /** @class */ (function () {
    function MatchdetailComponent(router, httpService, toastService, utilService, activatedRoute) {
        this.router = router;
        this.httpService = httpService;
        this.toastService = toastService;
        this.utilService = utilService;
        this.activatedRoute = activatedRoute;
        this.enlist_list = [];
        this.random_list = [];
        // 对话框
        this.isVisible = false;
        this.isVisible1 = false;
        //赛规赛程-赛事排名切换按钮
        this.radioValue = "rule";
        this.matchScore_list = [];
    }
    MatchdetailComponent.prototype.ngOnInit = function () {
        this.init();
    };
    MatchdetailComponent.prototype.init = function () {
        this.getGameDetails();
    };
    //判断是否有登录，是否有userinfo
    MatchdetailComponent.prototype.checkLogin = function () {
        this.userInfo = this.utilService.getLS("userInfo");
        if (!this.userInfo) {
            this.toastService.showMessage("info", "请您先登录");
            this.router.navigate(['/home']);
            this.utilService.LoginIsVisible = true;
        }
    };
    MatchdetailComponent.prototype.getGameDetails = function () {
        var _this = this;
        //rxjs(Observable)对象,订阅获取数据
        this.activatedRoute.queryParams.subscribe(function (data) {
            console.log(data);
            _this.match_id = data.match_id;
            if (data.match_id) {
                var param = {
                    match_id: data.match_id
                };
                _this.httpService.post('getMatchById', param, function (res) {
                    console.log(res);
                    if (res.statusCode == 0) {
                        var data = res.data;
                        _this.selected_match = data;
                        _this.query_rank_group = _this.selected_match.match_group[0];
                        _this.getGameRank(_this.query_rank_group.id); //获取排名信息
                    }
                    else {
                        _this.toastService.showMessage("error", res.msg);
                    }
                });
            }
        });
    };
    //查看报名选手
    MatchdetailComponent.prototype.queryEnlist_list = function () {
        var _this = this;
        this.isVisible = true; //打开对话框
        var match_id = this.match_id;
        var data = {
            match_id: match_id,
        };
        this.httpService.post('queryEnlist_list', data, function (res) {
            console.log(res);
            if (res.statusCode == 0) {
                var data = res.data;
                _this.enlist_list = data;
            }
            else {
                _this.toastService.showMessage("error", res.msg);
            }
        });
    };
    //查看随机分组情况
    MatchdetailComponent.prototype.queryRandomGroup = function (match_group_id, selectGroup) {
        var _this = this;
        this.isVisible1 = true;
        this.selected_group = selectGroup;
        var data = {
            match_id: this.selected_match.id,
            match_group_id: match_group_id
        };
        this.httpService.post('queryRandom', data, function (res) {
            console.log(res);
            if (res.statusCode == 0) {
                var data = res.data;
                _this.random_list = data;
            }
            else {
                _this.toastService.showMessage("error", res.msg);
            }
        });
    };
    //报名跳转扫码缴费页面
    MatchdetailComponent.prototype.signUp = function (match_group_id, group_price) {
        var _this = this;
        this.checkLogin();
        var data = {
            match_id: this.match_id,
            user_id: this.userInfo.id
        };
        this.httpService.post('doEnlist', data, function (res) {
            console.log(res);
            if (res.statusCode == 0) {
                var haveWxAcc = 0;
                if (res.data.wx_acc != "" && res.data.wx_acc != null && res.data.wx_acc != undefined) {
                    haveWxAcc = 1;
                }
                var order;
                if (_this.selected_match.type == '段级位赛') {
                    order = 3;
                }
                else if (_this.selected_match.type == '1-3段位赛') {
                    order = 4;
                }
                else if (_this.selected_match.type == '4-6段位赛') {
                    order = 5;
                }
                else {
                    order = 6;
                }
                var navigationExtras = {
                    queryParams: {
                        'order': order,
                        'match_id': match_group_id,
                        'price': _this.selected_match.price,
                        'group_price': group_price,
                        'haveWxAcc': haveWxAcc,
                        'orgid': res.data.id,
                    },
                };
                _this.router.navigate(['/person/pay'], navigationExtras);
            }
            else {
                _this.toastService.showMessage("info", res.msg);
            }
        });
    };
    //分组查询排名change
    MatchdetailComponent.prototype.rankGroupChange = function (val) {
        console.log(val);
        this.getGameRank(val.id);
    };
    //获取赛事分数排名
    MatchdetailComponent.prototype.getGameRank = function (group_id) {
        var _this = this;
        var match_id = group_id; //传赛段组id
        var url = URL + 'getMatchScore';
        var data = {
            match_id: match_id,
        };
        this.httpService.post('getMatchScore', data, function (res) {
            console.log(res);
            if (res.statusCode == 0) {
                var data = res.data;
                _this.matchScore_list = data.list;
                for (var i = 0; i < _this.matchScore_list.length; i++) {
                    _this.matchScore_list[i].expand = false;
                }
            }
            else {
                _this.toastService.showMessage("error", res.msg);
            }
        });
    };
    MatchdetailComponent.prototype.handleOk = function () {
        console.log('Button ok clicked!');
        this.isVisible = false;
    };
    MatchdetailComponent.prototype.handleCancel = function () {
        console.log('Button cancel clicked!');
        this.isVisible = false;
    };
    MatchdetailComponent.prototype.handleOk1 = function () {
        console.log('Button1 ok clicked!');
        this.isVisible1 = false;
    };
    MatchdetailComponent.prototype.handleCancel1 = function () {
        console.log('Button1 cancel clicked!');
        this.isVisible1 = false;
    };
    MatchdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-matchdetail',
            template: __webpack_require__(/*! ./matchdetail.component.html */ "./src/app/page/matchdetail/matchdetail.component.html"),
            styles: [__webpack_require__(/*! ./matchdetail.component.css */ "./src/app/page/matchdetail/matchdetail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _providers_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            _providers_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MatchdetailComponent);
    return MatchdetailComponent;
}());



/***/ }),

/***/ "./src/app/page/matchlist/matchlist.component.css":
/*!********************************************************!*\
  !*** ./src/app/page/matchlist/matchlist.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nz-page-header {\r\n    text-align: left;\r\n}\r\n\r\n#matchlist nz-page-header {\r\n    border: 1px solid rgb(235, 237, 240);\r\n    border-bottom: none;\r\n}\r\n\r\n.wrap {\r\n    display: flex;\r\n}\r\n\r\n.content {\r\n    flex: 1;\r\n}\r\n\r\n.content p {\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.content-link {\r\n    padding-top: 16px;\r\n}\r\n\r\n.content-link a {\r\n    display: inline-block;\r\n    vertical-align: text-top;\r\n    margin-right: 32px;\r\n}\r\n\r\n.content-link a img {\r\n    margin-right: 8px;\r\n}\r\n\r\n.extra-content {\r\n    min-width: 240px;\r\n    text-align: left;\r\n}\r\n\r\n.extra-content img {\r\n    width: 220px;\r\n    height: 100%;\r\n}\r\n\r\n.matchItem:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.ken-link {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 32px;\r\n}\r\n\r\n.ken-link i {\r\n    font-size: 18px;\r\n    margin-right: 8px;\r\n    vertical-align: top;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9tYXRjaGxpc3QvbWF0Y2hsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlL21hdGNobGlzdC9tYXRjaGxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm56LXBhZ2UtaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbiNtYXRjaGxpc3QgbnotcGFnZS1oZWFkZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzNSwgMjM3LCAyNDApO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLndyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuLmNvbnRlbnQgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWxpbmsge1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWxpbmsgYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWxpbmsgYSBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5leHRyYS1jb250ZW50IHtcclxuICAgIG1pbi13aWR0aDogMjQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uZXh0cmEtY29udGVudCBpbWcge1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWF0Y2hJdGVtOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmtlbi1saW5rIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbi5rZW4tbGluayBpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/page/matchlist/matchlist.component.html":
/*!*********************************************************!*\
  !*** ./src/app/page/matchlist/matchlist.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"min-width: 1080px;\">\n  <!-- 比赛列表 -->\n  <div class=\"pageContainer\" style=\"min-height: 600px;\">\n    <div>\n      <nz-page-header nzTitle=\"围棋赛事\">\n        <nz-page-header-extra>\n          <nz-select style=\"width: 200px;\" (ngModelChange)=\"cityChange($event)\" [(ngModel)]=\"cityId\" nzAllowClear\n            nzPlaceHolder=\"请选择地区\">\n            <nz-option nzValue=\"0\" nzLabel=\"全省\"></nz-option>\n            <nz-option *ngFor=\"let item of cityList\" [nzValue]=\"item.id\" [nzLabel]=\"item.name\"></nz-option>\n          </nz-select>\n        </nz-page-header-extra>\n      </nz-page-header>\n    </div>\n    <!-- 暂无数据 -->\n    <div *ngIf=\"matchList.length==0\" style=\"margin-top: 10px;padding: 150px 0\">\n      <nz-empty nzNotFoundContent=\"此地区暂无赛事哦~\"></nz-empty>\n    </div>\n    <div id=\"matchlist\" *ngIf=\"matchList.length>0\">\n      <div *ngFor=\"let item of matchList;let i=index\">\n        <nz-page-header [nzTitle]=\"item.match_name\">\n          <nz-page-header-content>\n            <div class=\"wrap\">\n              <div class=\"extra-content\">\n                <img [src]=\"item.img_url\" alt=\"content\" />\n              </div>\n              <div class=\"content\">\n                <div class=\"content\">\n                  <div nz-row>\n                    <div nz-col nzSpan=\"16\">\n                      <p>主办单位:{{item.host_unit}}</p>\n                      <p>承办单位:{{item.host_unit_c}}</p>\n                      <p>协办单位:{{item.host_unit_x}}</p>\n                    </div>\n                    <div nz-col nzSpan=\"8\">\n                      <p>比赛日期:{{item.begin_time+' '}}至{{' '+item.end_time}}</p>\n                      <p>报名截止:{{item.enlist_end}}</p>\n                    </div>\n                  </div>\n                  <p>比赛地点:{{item.match_address}}</p>\n                  <div class=\"content-link\" style=\"margin-bottom: 8px;\">\n                    <div nz-row>\n                      <div nz-col nzSpan=\"16\">\n                        <span class=\"ken-link\">\n                          <i [style.color]=\"item.isEnlist==0?'#faad14':'#52c41a'\" nz-icon\n                            [nzType]=\"item.isEnlist==0?'bulb':'check-circle'\"\n                            nzTheme=\"outline\"></i><span>{{item.isEnlist==0?'未报名':'已报名'}}</span>\n                        </span>\n                      </div>\n                      <div nz-col nzSpan=\"8\">\n                        <!-- 报名状态 -->\n                        <span class=\"ken-link\" *ngIf=\"item.is_enlist==0\">\n                          <i nz-icon nzType=\"stop\" nzTheme=\"outline\"></i>\n                          <span>未开放</span>\n                        </span>\n                        <span class=\"ken-link\" *ngIf=\"item.is_enlist==1\">\n                          <i [style.color]=\"'#ff4d4f'\" nz-icon nzType=\"fire\" nzTheme=\"fill\"></i>\n                          <span>正在报名</span>\n                        </span>\n                        <span class=\"ken-link\" *ngIf=\"item.is_enlist==2\">\n                          <i [style.color]=\"'#000000'\" nz-icon nzType=\"thunderbolt\" nzTheme=\"fill\"></i>\n                          <span>结束报名</span>\n                        </span>\n                        <span class=\"ken-link\" *ngIf=\"item.is_enlist==3\">\n                          <i nz-icon nzType=\"poweroff\" nzTheme=\"outline\"></i>\n                          <span>比赛结束</span>\n                        </span>\n                        <button (click)=\"goMatchDetail(item.id)\" nz-button nzType=\"primary\"\n                          style=\"background-color: #ff4d4f;border-color: #ff4d4f\"><i nz-icon nzType=\"forward\"\n                            nzTheme=\"fill\"></i>进入比赛</button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </nz-page-header-content>\n        </nz-page-header>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/page/matchlist/matchlist.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/page/matchlist/matchlist.component.ts ***!
  \*******************************************************/
/*! exports provided: MatchlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchlistComponent", function() { return MatchlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/http.service */ "./src/app/providers/http.service.ts");
/* harmony import */ var _providers_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/toast.service */ "./src/app/providers/toast.service.ts");
/* harmony import */ var _providers_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/util.service */ "./src/app/providers/util.service.ts");






var MatchlistComponent = /** @class */ (function () {
    function MatchlistComponent(router, httpService, toastService, utilService) {
        this.router = router;
        this.httpService = httpService;
        this.toastService = toastService;
        this.utilService = utilService;
        this.matchList = [];
        this.cityList = [];
        this.cityId = "0";
    }
    MatchlistComponent.prototype.ngOnInit = function () {
        this.init();
    };
    MatchlistComponent.prototype.init = function () {
        this.getGameList(this.cityId);
        this.getCity();
    };
    //判断是否有登录，是否有userinfo
    MatchlistComponent.prototype.checkLogin = function () {
        this.userInfo = this.utilService.getLS("userInfo");
        if (!this.userInfo) {
            this.toastService.showMessage("info", "请您先登录");
            this.router.navigate(['/home']);
            this.utilService.LoginIsVisible = true;
        }
    };
    //获取比赛列表
    MatchlistComponent.prototype.getGameList = function (cityId) {
        var _this = this;
        if (cityId == null || cityId == '' || cityId == undefined) {
            cityId = 0;
        }
        this.checkLogin();
        var param = {
            cityId: cityId,
            user_id: this.userInfo.id
        };
        this.httpService.post('getMatchList', param, function (res) {
            console.log(res);
            if (res.statusCode == 0) {
                var data = res.data;
                _this.matchList = data;
            }
            else {
                _this.toastService.showMessage("error", res.msg);
            }
        });
    };
    //获取城市下拉框
    MatchlistComponent.prototype.getCity = function () {
        var _this = this;
        this.httpService.post('getCity', {}, function (res) {
            console.log(res);
            if (res.statusCode == 0) {
                var data = res.data;
                _this.cityList = data;
                // this.cityList.unshift({ id: 0, name: '全省' })
            }
            else {
                _this.toastService.showMessage("error", res.msg);
            }
        });
    };
    MatchlistComponent.prototype.cityChange = function (v) {
        console.log(v);
        this.getGameList(v);
    };
    MatchlistComponent.prototype.goMatchDetail = function (id) {
        var navigationExtras = {
            queryParams: { 'match_id': id },
        };
        this.router.navigate(['/matchdetail'], navigationExtras);
    };
    MatchlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-matchlist',
            template: __webpack_require__(/*! ./matchlist.component.html */ "./src/app/page/matchlist/matchlist.component.html"),
            styles: [__webpack_require__(/*! ./matchlist.component.css */ "./src/app/page/matchlist/matchlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _providers_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            _providers_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]])
    ], MatchlistComponent);
    return MatchlistComponent;
}());



/***/ }),

/***/ "./src/app/page/newsdetail/newsdetail.component.css":
/*!**********************************************************!*\
  !*** ./src/app/page/newsdetail/newsdetail.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nz-page-header {\r\n    border: none;\r\n    border-bottom: 1px solid rgb(235, 237, 240);\r\n}\r\n\r\nnz-page-header {\r\n    text-align: left;\r\n}\r\n\r\n.wrap {\r\n    /* display: flex; */\r\n}\r\n\r\n.content {\r\n    /* flex: 1; */\r\n}\r\n\r\n.content p {\r\n    margin-bottom: 80px;\r\n}\r\n\r\n.content-link {\r\n    padding-top: 16px;\r\n}\r\n\r\n.content-link a {\r\n    display: inline-block;\r\n    vertical-align: text-top;\r\n    margin-right: 32px;\r\n}\r\n\r\n.content-link a img {\r\n    margin-right: 8px;\r\n}\r\n\r\n.extra-content {\r\n    min-width: 240px;\r\n    text-align: right;\r\n}\r\n\r\n.ken-link {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 32px;\r\n}\r\n\r\n.ken-link i {\r\n    font-size: 18px;\r\n    margin-right: 8px;\r\n    vertical-align: top;\r\n}\r\n\r\n/* 解决innerHtml，css不生效 */\r\n\r\n:host ::ng-deep #nr img {\r\n    width: 100% !important;\r\n}\r\n\r\n/* .content img {\r\n    max-width: 100%;\r\n    max-height: 100%\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9uZXdzZGV0YWlsL25ld3NkZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQSx1QkFBdUI7O0FBRXZCO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBOzs7R0FHRyIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvbmV3c2RldGFpbC9uZXdzZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuei1wYWdlLWhlYWRlciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzNSwgMjM3LCAyNDApO1xyXG59XHJcblxyXG5uei1wYWdlLWhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ud3JhcCB7XHJcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICAvKiBmbGV4OiAxOyAqL1xyXG59XHJcblxyXG4uY29udGVudCBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWxpbmsge1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWxpbmsgYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWxpbmsgYSBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5leHRyYS1jb250ZW50IHtcclxuICAgIG1pbi13aWR0aDogMjQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmtlbi1saW5rIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbi5rZW4tbGluayBpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLyog6Kej5YazaW5uZXJIdG1s77yMY3Nz5LiN55Sf5pWIICovXHJcblxyXG46aG9zdCA6Om5nLWRlZXAgI25yIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAuY29udGVudCBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJVxyXG59ICovIl19 */"

/***/ }),

/***/ "./src/app/page/newsdetail/newsdetail.component.html":
/*!***********************************************************!*\
  !*** ./src/app/page/newsdetail/newsdetail.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"min-width: 1080px;\">\n  <!-- 比赛列表 -->\n  <div class=\"pageContainer\" style=\"min-height: 600px;max-width: 980px;margin: 0 auto\">\n    <!-- 暂无数据 -->\n    <div *ngIf=\"!select_news\" style=\"margin-top: 10px;padding: 150px 0\">\n      <nz-empty nzNotFoundContent=\"暂无新闻数据~\"></nz-empty>\n    </div>\n    <div *ngIf=\"select_news\">\n      <div>\n        <nz-page-header [nzSubtitle]=\"select_news.sub_title\">\n          <nz-page-header-title> <span id=\"bt\">{{select_news.title}}</span>\n          </nz-page-header-title>\n          <nz-divider></nz-divider>\n          <nz-page-header-content>\n            <div class=\"wrap\">\n              <div class=\"content\">\n                <div class=\"content\">\n                  <div id=\"nr\" style=\"margin: 0 auto\" [innerHtml]=\"select_news.content\"></div>\n                </div>\n              </div>\n              <!-- <div class=\"extra-content\">\n                <img\n                  src=\"https://gw.alipayobjects.com/mdn/mpaas_user/afts/img/A*KsfVQbuLRlYAAAAAAAAAAABjAQAAAQ/original\"\n                  alt=\"content\" />\n              </div> -->\n            </div>\n          </nz-page-header-content>\n        </nz-page-header>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/page/newsdetail/newsdetail.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/page/newsdetail/newsdetail.component.ts ***!
  \*********************************************************/
/*! exports provided: NewsdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsdetailComponent", function() { return NewsdetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/http.service */ "./src/app/providers/http.service.ts");
/* harmony import */ var _providers_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/toast.service */ "./src/app/providers/toast.service.ts");
/* harmony import */ var _providers_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/util.service */ "./src/app/providers/util.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");







var NewsdetailComponent = /** @class */ (function () {
    function NewsdetailComponent(router, httpService, toastService, utilService, activatedRoute, sanitizer) {
        this.router = router;
        this.httpService = httpService;
        this.toastService = toastService;
        this.utilService = utilService;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
    }
    NewsdetailComponent.prototype.ngOnInit = function () {
        this.init();
    };
    NewsdetailComponent.prototype.init = function () {
        this.getNewsDetail();
    };
    NewsdetailComponent.prototype.getNewsDetail = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (data) {
            console.log(data);
            _this.news_id = data.news_id;
            if (data.news_id) {
                var param = {
                    news_id: data.news_id
                };
                _this.httpService.post('getNewsDetail', param, function (res) {
                    console.log(res);
                    if (res.statusCode == 0) {
                        var data = res.data;
                        _this.select_news = data;
                        // this.select_news.content = this.sanitizer.bypassSecurityTrustHtml(this.select_news.content);
                    }
                    else {
                        _this.toastService.showMessage("error", res.msg);
                    }
                });
            }
        });
    };
    NewsdetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newsdetail',
            template: __webpack_require__(/*! ./newsdetail.component.html */ "./src/app/page/newsdetail/newsdetail.component.html"),
            styles: [__webpack_require__(/*! ./newsdetail.component.css */ "./src/app/page/newsdetail/newsdetail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _providers_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            _providers_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])
    ], NewsdetailComponent);
    return NewsdetailComponent;
}());



/***/ }),

/***/ "./src/app/page/newslist/newslist.component.css":
/*!******************************************************!*\
  !*** ./src/app/page/newslist/newslist.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nz-page-header {\r\n    border: none;\r\n    border-bottom: 1px solid rgb(235, 237, 240);\r\n}\r\n\r\nnz-page-header {\r\n    text-align: left;\r\n}\r\n\r\n.wrap {\r\n    display: flex;\r\n}\r\n\r\n.content {\r\n    flex: 1;\r\n}\r\n\r\n.content p {\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.content-link {\r\n    padding-top: 16px;\r\n}\r\n\r\n.content-link a {\r\n    display: inline-block;\r\n    vertical-align: text-top;\r\n    margin-right: 32px;\r\n}\r\n\r\n.content-link a img {\r\n    margin-right: 8px;\r\n}\r\n\r\n.extra-content {\r\n    min-width: 240px;\r\n    text-align: right;\r\n}\r\n\r\n.ken-link {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 32px;\r\n}\r\n\r\n.ken-link i {\r\n    font-size: 18px;\r\n    margin-right: 8px;\r\n    vertical-align: top;\r\n}\r\n\r\n#bt:hover {\r\n    cursor: pointer;\r\n    color: #8d8ba6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9uZXdzbGlzdC9uZXdzbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlL25ld3NsaXN0L25ld3NsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuei1wYWdlLWhlYWRlciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzNSwgMjM3LCAyNDApO1xyXG59XHJcblxyXG5uei1wYWdlLWhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ud3JhcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4uY29udGVudCBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLmNvbnRlbnQtbGluayB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxufVxyXG5cclxuLmNvbnRlbnQtbGluayBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICAgIG1hcmdpbi1yaWdodDogMzJweDtcclxufVxyXG5cclxuLmNvbnRlbnQtbGluayBhIGltZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmV4dHJhLWNvbnRlbnQge1xyXG4gICAgbWluLXdpZHRoOiAyNDBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ua2VuLWxpbmsge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi1yaWdodDogMzJweDtcclxufVxyXG5cclxuLmtlbi1saW5rIGkge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4jYnQ6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICM4ZDhiYTY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/newslist/newslist.component.html":
/*!*******************************************************!*\
  !*** ./src/app/page/newslist/newslist.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"min-width: 1080px;\">\n  <!-- 比赛列表 -->\n  <div class=\"pageContainer\" style=\"min-height: 600px;max-width: 980px;margin: 0 auto\">\n    <!-- 暂无数据 -->\n    <div *ngIf=\"list.length==0\" style=\"margin-top: 10px;padding: 150px 0\">\n      <nz-empty nzNotFoundContent=\"暂无新闻数据~\"></nz-empty>\n    </div>\n    <div *ngIf=\"list.length!=0\">\n      <div *ngFor=\"let item of list\">\n        <nz-page-header [nzSubtitle]=\"item.sub_title\">\n          <nz-page-header-title> <span id=\"bt\" (click)=\"goNewsDetail(item.id)\">{{item.title}}</span>\n          </nz-page-header-title>\n          <nz-page-header-content>\n            <div class=\"wrap\">\n              <div class=\"content\">\n                <div class=\"content\">\n                  <p>{{item.content}}</p>\n                  <div class=\"content-link\" style=\"margin-bottom: 8px;\">\n                    <span class=\"ken-link\">\n                      <i nz-icon nzType=\"calendar\" nzTheme=\"outline\"></i><span>{{item.release_time}}</span>\n                    </span>\n                  </div>\n                </div>\n              </div>\n              <!-- <div class=\"extra-content\">\n                <img\n                  src=\"https://gw.alipayobjects.com/mdn/mpaas_user/afts/img/A*KsfVQbuLRlYAAAAAAAAAAABjAQAAAQ/original\"\n                  alt=\"content\" />\n              </div> -->\n            </div>\n          </nz-page-header-content>\n        </nz-page-header>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/page/newslist/newslist.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/page/newslist/newslist.component.ts ***!
  \*****************************************************/
/*! exports provided: NewslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewslistComponent", function() { return NewslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/http.service */ "./src/app/providers/http.service.ts");
/* harmony import */ var _providers_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/toast.service */ "./src/app/providers/toast.service.ts");
/* harmony import */ var _providers_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/util.service */ "./src/app/providers/util.service.ts");






var NewslistComponent = /** @class */ (function () {
    function NewslistComponent(router, httpService, toastService, utilService) {
        this.router = router;
        this.httpService = httpService;
        this.toastService = toastService;
        this.utilService = utilService;
        this.list = [];
    }
    NewslistComponent.prototype.ngOnInit = function () {
        this.init();
    };
    NewslistComponent.prototype.init = function () {
        this.getNewsList();
    };
    NewslistComponent.prototype.getNewsList = function () {
        var _this = this;
        this.httpService.post('getNewsList', {}, function (res) {
            console.log(res);
            if (res.statusCode == 0) {
                var data = res.data;
                for (var i = 0; i < data.length; i++) {
                    // var time = data[i].release_time;
                    if (!data[i].author) {
                        data[i].author = "福建省围棋协会";
                    }
                    if (data[i].author == "个人注册") {
                        data[i].author = "系统管理员";
                    }
                    var dd = data[i].content.replace(/<\/?.+?>/g, "");
                    data[i].content = dd.replace(/ /g, ""); //dds为得到后的内容
                    data[i].content = data[i].content.substr(0, 100) + "......";
                    // if (time) {
                    //   time = time.split(' ');
                    //   time = time[0].split('-')
                    // }
                }
                _this.list = data;
            }
            else {
                _this.toastService.showMessage("error", res.msg);
            }
        });
    };
    NewslistComponent.prototype.goNewsDetail = function (id) {
        var navigationExtras = {
            queryParams: { 'news_id': id },
        };
        this.router.navigate(['/newsdetail'], navigationExtras);
    };
    NewslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newslist',
            template: __webpack_require__(/*! ./newslist.component.html */ "./src/app/page/newslist/newslist.component.html"),
            styles: [__webpack_require__(/*! ./newslist.component.css */ "./src/app/page/newslist/newslist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _providers_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            _providers_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]])
    ], NewslistComponent);
    return NewslistComponent;
}());



/***/ }),

/***/ "./src/app/page/notifylist/notifylist.component.css":
/*!**********************************************************!*\
  !*** ./src/app/page/notifylist/notifylist.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Uvbm90aWZ5bGlzdC9ub3RpZnlsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page/notifylist/notifylist.component.html":
/*!***********************************************************!*\
  !*** ./src/app/page/notifylist/notifylist.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  notifylist works!\n</p>\n"

/***/ }),

/***/ "./src/app/page/notifylist/notifylist.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/page/notifylist/notifylist.component.ts ***!
  \*********************************************************/
/*! exports provided: NotifylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifylistComponent", function() { return NotifylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotifylistComponent = /** @class */ (function () {
    function NotifylistComponent() {
    }
    NotifylistComponent.prototype.ngOnInit = function () {
    };
    NotifylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notifylist',
            template: __webpack_require__(/*! ./notifylist.component.html */ "./src/app/page/notifylist/notifylist.component.html"),
            styles: [__webpack_require__(/*! ./notifylist.component.css */ "./src/app/page/notifylist/notifylist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotifylistComponent);
    return NotifylistComponent;
}());



/***/ }),

/***/ "./src/app/page/person/editinfo/editinfo.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page/person/editinfo/editinfo.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[nz-form] {\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n}\r\n\r\nnz-form-explain {\r\n    text-align: left;\r\n}\r\n\r\n.ken-date-picker {\r\n    width: inherit;\r\n    text-align: left;\r\n}\r\n\r\n.ken-pic-preview {\r\n    margin-top: 5px;\r\n    width: 150px;\r\n    height: 100px;\r\n    display: block;\r\n}\r\n\r\n.ken-pic-preview:hover {\r\n    cursor: pointer;\r\n    transform: scale(2);\r\n    -ms-transform: scale(2);\r\n    /* IE 9 */\r\n    -moz-transform: scale(2);\r\n    /* Firefox */\r\n    -webkit-transform: scale(2);\r\n    /* Safari 和 Chrome */\r\n    -o-transform: scale(2);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9wZXJzb24vZWRpdGluZm8vZWRpdGluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcGVyc29uL2VkaXRpbmZvL2VkaXRpbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbbnotZm9ybV0ge1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5uei1mb3JtLWV4cGxhaW4ge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmtlbi1kYXRlLXBpY2tlciB7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5rZW4tcGljLXByZXZpZXcge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ua2VuLXBpYy1wcmV2aWV3OmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxuICAgIC8qIElFIDkgKi9cclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxuICAgIC8qIEZpcmVmb3ggKi9cclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxuICAgIC8qIFNhZmFyaSDlkowgQ2hyb21lICovXHJcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/page/person/editinfo/editinfo.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page/person/editinfo/editinfo.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pageContainer\">\n  <h1 style=\"font-weight: bolder;\">你好，{{userInfo.user_name?userInfo.user_name:''}}</h1>\n  <form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm()\">\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"user_name\">用户姓名</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n        <input nz-input formControlName=\"user_name\" id=\"user_name\" />\n        <nz-form-explain *ngIf=\"validateForm.get('user_name')?.dirty && validateForm.get('user_name')?.errors\"> 请输入用户名!\n        </nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"identification\" nzRequired>身份证</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n        <input nz-input id=\"identification\" formControlName=\"identification\" placeholder=\"请输入身份证号\" />\n        <nz-form-explain\n          *ngIf=\"validateForm.get('identification')?.dirty && validateForm.get('identification')?.errors\">请输入身份证号!\n        </nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"nation\" nzRequired>民族</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n        <input nz-input id=\"nation\" formControlName=\"nation\" placeholder='民族，例:\"汉族\"' />\n        <nz-form-explain *ngIf=\"validateForm.get('nation')?.dirty && validateForm.get('nation')?.errors\">请输入民族!\n        </nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"sex\" nzRequired>性别</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n        <nz-select id=\"sex\" formControlName=\"sex\" nzPlaceHolder=\"请选择性别\">\n          <nz-option nzValue=\"1\" nzLabel=\"男\"></nz-option>\n          <nz-option nzValue=\"2\" nzLabel=\"女\"></nz-option>\n        </nz-select>\n        <nz-form-explain *ngIf=\"validateForm.get('sex')?.dirty && validateForm.get('sex')?.errors\">请选择性别!\n        </nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired>出生年月</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" style=\"text-align: left;\">\n        <nz-date-picker [nzClassName]=\"'ken-date-picker'\" formControlName=\"birthday\"></nz-date-picker>\n        <nz-form-explain *ngIf=\"validateForm.get('birthday')?.dirty && validateForm.get('birthday')?.errors\">请填写出生年月!\n        </nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\">学棋时间</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" style=\"text-align: left;\">\n        <nz-date-picker [nzClassName]=\"'ken-date-picker'\" formControlName=\"study_time\"></nz-date-picker>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"first_teacher\">启蒙老师</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n        <input nz-input id=\"first_teacher\" formControlName=\"first_teacher\" placeholder=\"您的启蒙老师是谁\" />\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"organization\" nzRequired>归属机构</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" style=\"text-align: left;\">\n        <nz-cascader formControlName=\"organization\" [nzExpandTrigger]=\"'hover'\" [nzOptions]=\"organizationList\"\n          [nzLabelProperty]=\"'name'\" [nzValueProperty]=\"'id'\">\n        </nz-cascader>\n        <nz-form-explain *ngIf=\"validateForm.get('organization')?.dirty && validateForm.get('organization')?.errors\">\n          请选择归属机构! </nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"address\">邮寄地址</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n        <input nz-input id=\"address\" formControlName=\"address\" placeholder=\"常住邮寄地址\" />\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"level\" nzRequired>棋力</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n        <nz-select nzAllowClear=\"true\" id=\"level\" formControlName=\"level\" nzPlaceHolder=\"请选择棋力\">\n          <nz-option [nzValue]=\"item.id\" [nzLabel]=\"item.level\" *ngFor=\"let item of levelOption\"></nz-option>\n        </nz-select>\n        <nz-form-explain *ngIf=\"validateForm.get('level')?.dirty && validateForm.get('level')?.errors\">请选择棋力!\n        </nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"certificate_number\">段级位证书编号</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n        <input nz-input id=\"certificate_number\" formControlName=\"certificate_number\"\n          placeholder=\"请输入段级位证书编号(未获得段级位可不填写)\" />\n      </nz-form-control>\n    </nz-form-item>\n    <!-- 段级位证书 -->\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"certificate_lv\">段级位证书上传</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" style=\"text-align: left;\">\n        <nz-upload nzAction=\"http://onepiecej.oss-cn-shenzhen.aliyuncs.com\" nzListType=\"picture\"\n          [(nzFileList)]=\"fileList\" [nzShowButton]=\"fileList.length < 1\" [nzBeforeUpload]=\"beforeUpload\">\n          <button nz-button (click)=\"uploadClick($event)\"><i nz-icon nzType=\"upload\"></i><span>段级位证书上传</span></button>\n          <img *ngIf=\"show_img\" class=\"ken-pic-preview\" [src]=\"show_img\" />\n        </nz-upload>\n      </nz-form-control>\n    </nz-form-item>\n    <!-- 一寸证件照 -->\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"certificate\">一寸证件照上传</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" style=\"text-align: left;\">\n        <nz-upload nzAction=\"http://onepiecej.oss-cn-shenzhen.aliyuncs.com\" nzListType=\"picture\"\n          [(nzFileList)]=\"fileList1\" [nzShowButton]=\"fileList1.length < 1\" [nzBeforeUpload]=\"beforeUpload1\">\n          <button nz-button (click)=\"uploadClick($event)\"><i nz-icon nzType=\"upload\"></i><span>一寸证件照上传</span></button>\n          <img *ngIf=\"show_img1\" class=\"ken-pic-preview\" [src]=\"show_img1\" />\n        </nz-upload>\n      </nz-form-control>\n    </nz-form-item>\n    <!-- 是否有教练证 -->\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\">是否持有教练证</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" style=\"text-align: left;\">\n        <nz-switch formControlName=\"user_type_c\"></nz-switch>\n      </nz-form-control>\n    </nz-form-item>\n    <!-- 是否有裁判证 -->\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\">是否持有裁判证</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" style=\"text-align: left;\">\n        <nz-switch formControlName=\"user_type_r\"></nz-switch>\n      </nz-form-control>\n    </nz-form-item>\n    <!-- 教练信息 -->\n    <div *ngIf=\"validateForm.value.user_type_c\">\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"certificate_type_c\">教练员等级</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <nz-select nzAllowClear=\"true\" id=\"certificate_type_c\" formControlName=\"certificate_type_c\"\n            nzPlaceHolder=\"请选择教练员等级\">\n            <nz-option nzValue=\"1\" nzLabel=\"初级\"></nz-option>\n            <nz-option nzValue=\"2\" nzLabel=\"中级\"></nz-option>\n            <nz-option nzValue=\"3\" nzLabel=\"高级\"></nz-option>\n          </nz-select>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"certificate_number_c\">教练资格证编号</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <input nz-input id=\"certificate_number_c\" formControlName=\"certificate_number_c\" placeholder=\"请输入教练资格证编号\" />\n        </nz-form-control>\n      </nz-form-item>\n      <!-- 教练员证书 -->\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"certificate_lv_c\">教练资格证上传</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" style=\"text-align: left;\">\n          <nz-upload nzAction=\"http://onepiecej.oss-cn-shenzhen.aliyuncs.com\" nzListType=\"picture\"\n            [(nzFileList)]=\"fileList_c\" [nzShowButton]=\"fileList_c.length < 1\" [nzBeforeUpload]=\"beforeUpload_c\">\n            <button nz-button (click)=\"uploadClick($event)\"><i nz-icon nzType=\"upload\"></i><span>教练资格证上传</span></button>\n            <img *ngIf=\"show_img_c\" class=\"ken-pic-preview\" [src]=\"show_img_c\" />\n          </nz-upload>\n        </nz-form-control>\n      </nz-form-item>\n    </div>\n    <!-- 裁判员信息 -->\n    <div *ngIf=\"validateForm.value.user_type_r\">\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"certificate_type_r\">裁判员等级</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <nz-select nzAllowClear=\"true\" id=\"certificate_type_r\" formControlName=\"certificate_type_r\"\n            nzPlaceHolder=\"请选择裁判员等级\">\n            <nz-option nzValue=\"4\" nzLabel=\"国家级\"></nz-option>\n            <nz-option nzValue=\"5\" nzLabel=\"一级\"></nz-option>\n            <nz-option nzValue=\"6\" nzLabel=\"二级\"></nz-option>\n            <nz-option nzValue=\"7\" nzLabel=\"三级\"></nz-option>\n          </nz-select>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"certificate_number_r\">裁判资格证编号</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <input nz-input id=\"certificate_number_r\" formControlName=\"certificate_number_r\" placeholder=\"请输入裁判资格证编号\" />\n        </nz-form-control>\n      </nz-form-item>\n      <!-- 裁判员证书 -->\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"certificate_lv_r\">裁判资格证上传</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" style=\"text-align: left;\">\n          <nz-upload nzAction=\"http://onepiecej.oss-cn-shenzhen.aliyuncs.com\" nzListType=\"picture\"\n            [(nzFileList)]=\"fileList_r\" [nzShowButton]=\"fileList_r.length < 1\" [nzBeforeUpload]=\"beforeUpload_r\">\n            <button nz-button (click)=\"uploadClick($event)\"><i nz-icon nzType=\"upload\"></i><span>裁判资格证上传</span></button>\n            <img *ngIf=\"show_img_r\" class=\"ken-pic-preview\" [src]=\"show_img_r\" />\n          </nz-upload>\n        </nz-form-control>\n      </nz-form-item>\n    </div>\n    <nz-form-item nz-row style=\"margin-bottom:8px;\">\n      <nz-form-control [nzSpan]=\"18\" [nzOffset]=\"6\">\n        <button nz-button nzType=\"primary\">提交修改</button>\n      </nz-form-control>\n    </nz-form-item>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/page/person/editinfo/editinfo.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page/person/editinfo/editinfo.component.ts ***!
  \************************************************************/
/*! exports provided: EditinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditinfoComponent", function() { return EditinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/http.service */ "./src/app/providers/http.service.ts");
/* harmony import */ var _providers_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/toast.service */ "./src/app/providers/toast.service.ts");
/* harmony import */ var _providers_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/util.service */ "./src/app/providers/util.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");








var EditinfoComponent = /** @class */ (function () {
    function EditinfoComponent(fb, router, httpService, toastService, utilService, _d // 图片路径转换使用，使用见HMTL文件,防止xss
    ) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.httpService = httpService;
        this.toastService = toastService;
        this.utilService = utilService;
        this._d = _d;
        this.organizationList = [];
        this.levelOption = [];
        //段级位证书
        this.fileList = [];
        this.img_name = '';
        this.show_img = '';
        //证件照
        this.fileList1 = [];
        this.img_name1 = '';
        this.show_img1 = '';
        //教练证
        this.fileList_c = [];
        this.img_name_c = '';
        this.show_img_c = '';
        //裁判证
        this.fileList_r = [];
        this.img_name_r = '';
        this.show_img_r = '';
        //上传段级位证书
        this.beforeUpload = function (file) {
            console.log(file);
            var isJPG = file.type === "image/jpeg";
            var isPNG = file.type === "image/png";
            var isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG && !isPNG) {
                _this.toastService.showMessage("error", "上传图片只能是JPG或PNG格式!");
                return false;
            }
            if (!isLt2M) {
                _this.toastService.showMessage("error", "上传图片大小不能超过 2MB!");
                return false;
            }
            _this.file = file;
            var tempFilePaths = _this.file.name;
            // =======================================
            var rnd = "";
            for (var i = 0; i < 3; i++) {
                rnd += Math.floor(Math.random() * 10);
            }
            _this.img_name =
                rnd +
                    Date.parse(Date()) +
                    tempFilePaths.substr(tempFilePaths.lastIndexOf("."));
            // =======================================
            _this.validateForm.patchValue({
                certificate_lv: _this.oss_info.host + "/" + _this.oss_info.dir + _this.img_name
            });
            _this.show_img = window.URL.createObjectURL(file);
            _this.show_img = _this._d.bypassSecurityTrustUrl(_this.show_img);
            // console.log(this.show_img);
            // this.upload(file, this.img_name);
            return false;
        };
        //上传证件照
        this.beforeUpload1 = function (file) {
            console.log(file);
            var isJPG = file.type === "image/jpeg";
            var isPNG = file.type === "image/png";
            var isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG && !isPNG) {
                _this.toastService.showMessage("error", "上传图片只能是JPG或PNG格式!");
                return false;
            }
            if (!isLt2M) {
                _this.toastService.showMessage("error", "上传图片大小不能超过 2MB!");
                return false;
            }
            _this.file1 = file;
            var tempFilePaths = _this.file1.name;
            // =======================================
            var rnd = "";
            for (var i = 0; i < 3; i++) {
                rnd += Math.floor(Math.random() * 10);
            }
            _this.img_name1 =
                rnd +
                    Date.parse(Date()) +
                    tempFilePaths.substr(tempFilePaths.lastIndexOf("."));
            // =======================================
            _this.validateForm.patchValue({
                certificate: _this.oss_info.host + "/" + _this.oss_info.dir + _this.img_name1
            });
            _this.show_img1 = window.URL.createObjectURL(file);
            _this.show_img1 = _this._d.bypassSecurityTrustUrl(_this.show_img1);
            // console.log(this.show_img);
            // this.upload(file, this.img_name);
            return false;
        };
        //上传裁判员证书
        this.beforeUpload_c = function (file) {
            console.log(file);
            var isJPG = file.type === "image/jpeg";
            var isPNG = file.type === "image/png";
            var isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG && !isPNG) {
                _this.toastService.showMessage("error", "上传图片只能是JPG或PNG格式!");
                return false;
            }
            if (!isLt2M) {
                _this.toastService.showMessage("error", "上传图片大小不能超过 2MB!");
                return false;
            }
            _this.file_c = file;
            var tempFilePaths = _this.file_c.name;
            // =======================================
            var rnd = "";
            for (var i = 0; i < 3; i++) {
                rnd += Math.floor(Math.random() * 10);
            }
            _this.img_name_c =
                rnd +
                    Date.parse(Date()) +
                    tempFilePaths.substr(tempFilePaths.lastIndexOf("."));
            // =======================================
            _this.validateForm.patchValue({
                certificate_lv_c: _this.oss_info.host + "/" + _this.oss_info.dir + _this.img_name_c
            });
            _this.show_img_c = window.URL.createObjectURL(file);
            _this.show_img_c = _this._d.bypassSecurityTrustUrl(_this.show_img_c);
            // console.log(this.show_img);
            // this.upload(file, this.img_name);
            return false;
        };
        //上传裁判员证书
        this.beforeUpload_r = function (file) {
            console.log(file);
            var isJPG = file.type === "image/jpeg";
            var isPNG = file.type === "image/png";
            var isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG && !isPNG) {
                _this.toastService.showMessage("error", "上传图片只能是JPG或PNG格式!");
                return false;
            }
            if (!isLt2M) {
                _this.toastService.showMessage("error", "上传图片大小不能超过 2MB!");
                return false;
            }
            _this.file_r = file;
            var tempFilePaths = _this.file_r.name;
            // =======================================
            var rnd = "";
            for (var i = 0; i < 3; i++) {
                rnd += Math.floor(Math.random() * 10);
            }
            _this.img_name_r =
                rnd +
                    Date.parse(Date()) +
                    tempFilePaths.substr(tempFilePaths.lastIndexOf("."));
            // =======================================
            _this.validateForm.patchValue({
                certificate_lv_r: _this.oss_info.host + "/" + _this.oss_info.dir + _this.img_name_r
            });
            _this.show_img_r = window.URL.createObjectURL(file);
            _this.show_img_r = _this._d.bypassSecurityTrustUrl(_this.show_img_r);
            // console.log(this.show_img);
            // this.upload(file, this.img_name);
            return false;
        };
    }
    EditinfoComponent.prototype.ngOnInit = function () {
        this.init();
    };
    EditinfoComponent.prototype.init = function () {
        this.getOssInfo();
        this.initForm();
        this.getOrganList();
        this.getLevel();
        this.checkLogin();
        this.readUserInfo();
    };
    //判断是否有登录，是否有userinfo
    EditinfoComponent.prototype.checkLogin = function () {
        this.userInfo = this.utilService.getLS("userInfo");
        if (!this.userInfo) {
            this.router.navigate(['/home']);
        }
    };
    EditinfoComponent.prototype.initForm = function () {
        this.validateForm = this.fb.group({
            user_id: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            user_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            identification: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            nation: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            sex: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            birthday: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            organization: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: [''],
            level: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            certificate_number: ['',],
            certificate_lv: [''],
            certificate: [''],
            user_type: [1],
            user_type_c: [false],
            user_type_r: [false],
            certificate_type_c: [''],
            certificate_number_c: [''],
            certificate_lv_c: [''],
            certificate_type_r: [''],
            certificate_number_r: [''],
            certificate_lv_r: [''],
            study_time: [null],
            first_teacher: [''],
        });
    };
    EditinfoComponent.prototype.submitForm = function () {
        var _this = this;
        console.log(this.validateForm);
        for (var i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        if (this.validateForm.status == 'VALID') { //验证通过
            if (this.file) {
                this.upload(this.file, this.img_name);
            }
            if (this.file1) {
                this.upload(this.file1, this.img_name1);
            }
            if (this.file_c) {
                this.upload(this.file_c, this.img_name_c);
            }
            if (this.file_r) {
                this.upload(this.file_r, this.img_name_r);
            }
            //格式化表单数据
            var data = this.validateForm.value;
            console.log(data);
            data.organization = data.organization[1];
            data.nation = data.nation.indexOf("族") == -1 ? data.nation + "族" : data.nation;
            data.certificate_number = data.certificate_number == "" ? "未填写" : data.certificate_number;
            data.user_type_c = data.user_type_c ? 1 : 0;
            data.user_type_r = data.user_type_r ? 1 : 0;
            console.log(111);
            console.log(this.validateForm);
            this.httpService.post('updateuser', data, function (res) {
                console.log(res);
                if (res.statusCode == 0) {
                    _this.toastService.showMessage("success", res.msg);
                    _this.utilService.setLS('userInfo', res.data);
                    // this.init();
                    window.location.reload();
                }
            });
        }
    };
    EditinfoComponent.prototype.readUserInfo = function () {
        if (this.userInfo) {
            console.log(this.userInfo);
            this.validateForm.setValue({
                user_id: this.userInfo.id,
                user_name: this.userInfo.user_name,
                identification: this.userInfo.identification,
                nation: this.userInfo.nation,
                sex: this.userInfo.sex,
                birthday: this.userInfo.birthday,
                phone: this.userInfo.phone,
                organization: [parseInt(this.userInfo.city), parseInt(this.userInfo.organization)],
                address: this.userInfo.address,
                level: this.userInfo.level,
                certificate_number: this.userInfo.certificate_number,
                certificate_lv: this.userInfo.certificate_lv,
                certificate: this.userInfo.certificate,
                user_type: this.userInfo.user_type,
                user_type_c: this.userInfo.user_type_c == 0 ? false : true,
                user_type_r: this.userInfo.user_type_r == 0 ? false : true,
                certificate_type_c: this.userInfo.certificate_type_c + "",
                certificate_number_c: this.userInfo.certificate_number_c,
                certificate_lv_c: this.userInfo.certificate_lv_c,
                certificate_type_r: this.userInfo.certificate_type_r + "",
                certificate_number_r: this.userInfo.certificate_number_r,
                certificate_lv_r: this.userInfo.certificate_lv_r,
                study_time: this.userInfo.study_time,
                first_teacher: this.userInfo.first_teacher,
            });
        }
        if (this.validateForm.value.certificate_lv) {
            this.show_img = this._d.bypassSecurityTrustUrl(this.validateForm.value.certificate_lv);
        }
        if (this.validateForm.value.certificate) {
            this.show_img1 = this._d.bypassSecurityTrustUrl(this.validateForm.value.certificate);
        }
        if (this.validateForm.value.certificate_lv_c) {
            this.show_img_c = this._d.bypassSecurityTrustUrl(this.validateForm.value.certificate_lv_c);
        }
        if (this.validateForm.value.certificate_lv_r) {
            this.show_img_r = this._d.bypassSecurityTrustUrl(this.validateForm.value.certificate_lv_r);
        }
    };
    //获取所有组织机构
    EditinfoComponent.prototype.getOrganList = function () {
        var _this = this;
        this.httpService.post('getOrgByCity', {}, function (res) {
            console.log(res);
            if (res.statusCode == 0 && res.data.length > 0) {
                _this.organizationList = res.data;
            }
        });
    };
    //获取棋力列表
    EditinfoComponent.prototype.getLevel = function () {
        var _this = this;
        this.httpService.post('getLevel', {}, function (res) {
            console.log(res);
            if (res.statusCode == 0 && res.data.length > 0) {
                _this.levelOption = res.data;
            }
        });
    };
    //获取oss信息
    EditinfoComponent.prototype.getOssInfo = function () {
        var _this = this;
        this.httpService.post('getOssAccount', {}, function (res) {
            console.log(res);
            _this.oss_info = res.data;
        });
    };
    //上传
    EditinfoComponent.prototype.upload = function (file, img_name) {
        var request = new FormData();
        request.append("key", this.oss_info.dir + img_name);
        request.append("policy", this.oss_info.policy);
        request.append("OSSAccessKeyId", this.oss_info.accessid);
        request.append("success_action_status", "200");
        request.append("callback", this.oss_info.callback);
        request.append("Signature", this.oss_info.signature);
        request.append("file", file);
        console.log(request);
        this.httpService.postOss(this.oss_info.host, request, function (res) {
            console.log(res);
        });
    };
    EditinfoComponent.prototype.uploadClick = function (e) {
        e.preventDefault();
    };
    EditinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editinfo',
            template: __webpack_require__(/*! ./editinfo.component.html */ "./src/app/page/person/editinfo/editinfo.component.html"),
            styles: [__webpack_require__(/*! ./editinfo.component.css */ "./src/app/page/person/editinfo/editinfo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _providers_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _providers_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
            _providers_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] // 图片路径转换使用，使用见HMTL文件,防止xss
        ])
    ], EditinfoComponent);
    return EditinfoComponent;
}());



/***/ }),

/***/ "./src/app/page/person/modifypwd/modifypwd.component.css":
/*!***************************************************************!*\
  !*** ./src/app/page/person/modifypwd/modifypwd.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[nz-form] {\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n}\r\n\r\nnz-form-explain {\r\n    text-align: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9wZXJzb24vbW9kaWZ5cHdkL21vZGlmeXB3ZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlL3BlcnNvbi9tb2RpZnlwd2QvbW9kaWZ5cHdkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbbnotZm9ybV0ge1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5uei1mb3JtLWV4cGxhaW4ge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/page/person/modifypwd/modifypwd.component.html":
/*!****************************************************************!*\
  !*** ./src/app/page/person/modifypwd/modifypwd.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pageContainer\">\n  <!-- 验证码 -->\n  <div class=\"modalBody\" *ngIf=\"showYZMdialog\">\n    <form nz-form [formGroup]=\"validateForm1\" class=\"login-form\" (ngSubmit)=\"submitForm1()\">\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"phone2\">手机号</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <input type=\"text\" nz-input formControlName=\"phone2\" placeholder=\"请输入手机号\" />\n          <nz-form-explain style=\"text-align: left\"\n            *ngIf=\"validateForm1.get('phone2')?.dirty && validateForm1.get('phone2')?.errors\">请输入手机号 </nz-form-explain>\n          <nz-form-explain [style.color]=\"hasPhoneNum?'#52c41a':'#f5222d'\"> {{sendSmsTip}} </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"code\" nzRequired>验证码</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <div nz-row [nzGutter]=\"8\">\n            <div nz-col [nzSpan]=\"12\">\n              <input type=\"text\" nz-input formControlName=\"code\" placeholder=\"请输入验证码\" />\n            </div>\n            <div nz-col [nzSpan]=\"12\">\n              <button nz-button (click)=\"getCaptcha($event)\" [disabled]=\"sendSmsActive\">{{sendSmsText}}</button>\n            </div>\n          </div>\n          <nz-form-explain style=\"text-align: left\"\n            *ngIf=\"validateForm1.get('code')?.dirty && validateForm1.get('code')?.errors\">请输入验证码 </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-control>\n          <button nz-button class=\"login-form-button\" [nzType]=\"'primary'\">提交</button>\n        </nz-form-control>\n      </nz-form-item>\n    </form>\n    <ng-template #prefixUser><i nz-icon type=\"phone\"></i></ng-template>\n    <ng-template #prefixLock><i nz-icon type=\"lock\"></i></ng-template>\n  </div>\n  <!-- 改密码 -->\n  <div class=\"modalBody\" *ngIf=\"showModifydialog\">\n    <form nz-form [formGroup]=\"validateForm2\" class=\"login-form\" (ngSubmit)=\"submitForm2()\">\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"new_pwd\" nzRequired>新密码</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <input type=\"password\" nz-input formControlName=\"new_pwd\" placeholder=\"请输入新密码\" />\n          <nz-form-explain style=\"text-align: left\"\n            *ngIf=\"validateForm2.get('new_pwd')?.dirty && validateForm2.get('new_pwd')?.errors\">请输入新密码\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"new_pwd\" nzRequired>再次输入新密码</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <input type=\"password\" nz-input formControlName=\"confirm_pwd\" placeholder=\"请再次输入新密码\" />\n          <nz-form-explain style=\"text-align: left\"\n            *ngIf=\"validateForm2.get('confirm_pwd')?.dirty && validateForm2.get('confirm_pwd')?.errors\">请再次输入新密码\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-control>\n          <button nz-button class=\"login-form-button\" [nzType]=\"'primary'\">确定</button>\n        </nz-form-control>\n      </nz-form-item>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/page/person/modifypwd/modifypwd.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/page/person/modifypwd/modifypwd.component.ts ***!
  \**************************************************************/
/*! exports provided: ModifypwdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifypwdComponent", function() { return ModifypwdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/http.service */ "./src/app/providers/http.service.ts");
/* harmony import */ var _providers_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/toast.service */ "./src/app/providers/toast.service.ts");
/* harmony import */ var _providers_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/util.service */ "./src/app/providers/util.service.ts");







var ModifypwdComponent = /** @class */ (function () {
    function ModifypwdComponent(fb, router, httpService, toastService, utilService) {
        this.fb = fb;
        this.router = router;
        this.httpService = httpService;
        this.toastService = toastService;
        this.utilService = utilService;
        this.sendSmsText = "获取验证码";
        this.sendSmsActive = false;
        this.sendSmsTip = "";
        this.hasPhoneNum = true;
        this.showYZMdialog = true;
        this.showModifydialog = false;
    }
    ModifypwdComponent.prototype.ngOnInit = function () {
        this.initLoginForm1();
        this.initLoginForm2();
    };
    ModifypwdComponent.prototype.initLoginForm1 = function () {
        this.validateForm1 = this.fb.group({
            phone2: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            code: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    ModifypwdComponent.prototype.submitForm1 = function () {
        var _this = this;
        console.log("提交忘记密码-验证码");
        for (var i in this.validateForm1.controls) {
            this.validateForm1.controls[i].markAsDirty();
            this.validateForm1.controls[i].updateValueAndValidity();
        }
        if (this.validateForm1.status == 'VALID') {
            var data = {
                phone: this.validateForm1.value.phone2,
                code: this.validateForm1.value.code,
            };
            // console.log(data);
            this.httpService.post('validatePhoneCode', data, function (res) {
                console.log(res);
                if (res.statusCode == 0) {
                    _this.showYZMdialog = false;
                    _this.showModifydialog = true;
                }
                else {
                    _this.toastService.showMessage("error", res.msg);
                }
            });
        }
    };
    ModifypwdComponent.prototype.initLoginForm2 = function () {
        this.validateForm2 = this.fb.group({
            new_pwd: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            confirm_pwd: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    //提交保存密码
    ModifypwdComponent.prototype.submitForm2 = function () {
        var _this = this;
        console.log("提交忘记密码-设置新密码");
        for (var i in this.validateForm2.controls) {
            this.validateForm2.controls[i].markAsDirty();
            this.validateForm2.controls[i].updateValueAndValidity();
        }
        if (this.validateForm2.status == 'VALID') {
            if (this.validateForm2.value.new_pwd != this.validateForm2.value.confirm_pwd) {
                this.toastService.showMessage("error", "两次密码输入不一致");
                return;
            }
            var data = {
                phone: this.validateForm1.value.phone2,
                pwd: this.validateForm2.value.new_pwd
            };
            this.httpService.post('changePwd', data, function (res) {
                console.log(res);
                _this.toastService.showMessage("info", res.msg);
                _this.showYZMdialog = true;
                _this.showModifydialog = false;
                _this.utilService.delLS("userInfo");
                _this.router.navigate(['/home']);
                _this.utilService.LoginIsVisible = true;
            });
        }
    };
    //获取验证码
    ModifypwdComponent.prototype.getCaptcha = function (e) {
        var _this = this;
        e.preventDefault();
        console.log(this.validateForm1);
        //30s冷却发送验证码按钮
        var count = 30;
        this.sendSmsActive = true;
        var time = window.setInterval(function () {
            _this.sendSmsText = count + "秒后再次发送";
            count--;
            if (count < 0) {
                window.clearInterval(time);
                _this.sendSmsActive = false;
                _this.sendSmsText = "获取验证码";
            }
        }, 1000);
        var data = {
            phone: this.validateForm1.value.phone2,
            type: 2 //获取忘记密码验证码
        };
        this.httpService.post('sendSMS', data, function (res) {
            console.log(res);
            _this.sendSmsTip = res.msg;
            if (res.statusCode != 0) {
                _this.hasPhoneNum = false;
            }
            else {
                _this.hasPhoneNum = true;
            }
        });
    };
    ModifypwdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modifypwd',
            template: __webpack_require__(/*! ./modifypwd.component.html */ "./src/app/page/person/modifypwd/modifypwd.component.html"),
            styles: [__webpack_require__(/*! ./modifypwd.component.css */ "./src/app/page/person/modifypwd/modifypwd.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _providers_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _providers_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
            _providers_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]])
    ], ModifypwdComponent);
    return ModifypwdComponent;
}());



/***/ }),

/***/ "./src/app/page/person/mymatch/mymatch.component.css":
/*!***********************************************************!*\
  !*** ./src/app/page/person/mymatch/mymatch.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nz-page-header {\r\n    text-align: left;\r\n}\r\n\r\n#myMatchlist nz-page-header {\r\n    border: 1px solid rgb(235, 237, 240);\r\n    width: 800px;\r\n}\r\n\r\n.wrap {\r\n    display: flex;\r\n}\r\n\r\n.content {\r\n    flex: 1;\r\n}\r\n\r\n.content.padding {\r\n    padding-left: 40px;\r\n}\r\n\r\n.content p {\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.content .description {\r\n    display: table;\r\n}\r\n\r\n.description .term {\r\n    display: table-cell;\r\n    margin-right: 8px;\r\n    padding-bottom: 8px;\r\n    white-space: nowrap;\r\n    line-height: 20px;\r\n}\r\n\r\n.description .term:after {\r\n    position: relative;\r\n    top: -0.5px;\r\n    margin: 0 8px 0 2px;\r\n    content: ':';\r\n}\r\n\r\n.description .detail {\r\n    display: table-cell;\r\n    padding-bottom: 8px;\r\n    width: 100%;\r\n    line-height: 20px;\r\n}\r\n\r\n.extra-content {\r\n    min-width: 240px;\r\n    text-align: right;\r\n}\r\n\r\n.extra-content .label {\r\n    font-size: 14px;\r\n    color: rgba(0, 0, 0, 0.45);\r\n    line-height: 22px;\r\n}\r\n\r\n.extra-content .detail {\r\n    font-size: 20px;\r\n    color: rgba(0, 0, 0, 0.85);\r\n    line-height: 28px;\r\n}\r\n\r\n::ng-deep .ant-page-header-footer {\r\n    padding-top: 0px\r\n}\r\n\r\n#score span {\r\n    display: inline-block;\r\n    margin: 0 28px 8px 0;\r\n    min-width: 60px;\r\n}\r\n\r\n#ggzb {\r\n    background-color: #ff4d4f;\r\n    color: #fff;\r\n    border-color: #ff4d4f;\r\n    /* width: 110px; */\r\n    /* height: 40px; */\r\n}\r\n\r\n#ggzb:hover {\r\n    /* border-color: #ff4d4f;\r\n    color: #ff4d4f; */\r\n}\r\n\r\n#ggzb:disabled {\r\n    color: rgba(0, 0, 0, .25);\r\n    background-color: #f5f5f5;\r\n    border-color: #d9d9d9;\r\n    text-shadow: none;\r\n    box-shadow: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9wZXJzb24vbXltYXRjaC9teW1hdGNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7cUJBQ2lCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcGVyc29uL215bWF0Y2gvbXltYXRjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibnotcGFnZS1oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuI215TWF0Y2hsaXN0IG56LXBhZ2UtaGVhZGVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzUsIDIzNywgMjQwKTtcclxuICAgIHdpZHRoOiA4MDBweDtcclxufVxyXG5cclxuLndyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuLmNvbnRlbnQucGFkZGluZyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4uY29udGVudCAuZGVzY3JpcHRpb24ge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiAudGVybSB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24gLnRlcm06YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMC41cHg7XHJcbiAgICBtYXJnaW46IDAgOHB4IDAgMnB4O1xyXG4gICAgY29udGVudDogJzonO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24gLmRldGFpbCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5leHRyYS1jb250ZW50IHtcclxuICAgIG1pbi13aWR0aDogMjQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmV4dHJhLWNvbnRlbnQgLmxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi5leHRyYS1jb250ZW50IC5kZXRhaWwge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5hbnQtcGFnZS1oZWFkZXItZm9vdGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHhcclxufVxyXG5cclxuI3Njb3JlIHNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIDI4cHggOHB4IDA7XHJcbiAgICBtaW4td2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbiNnZ3piIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjRkNGY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmNGQ0ZjtcclxuICAgIC8qIHdpZHRoOiAxMTBweDsgKi9cclxuICAgIC8qIGhlaWdodDogNDBweDsgKi9cclxufVxyXG5cclxuI2dnemI6aG92ZXIge1xyXG4gICAgLyogYm9yZGVyLWNvbG9yOiAjZmY0ZDRmO1xyXG4gICAgY29sb3I6ICNmZjRkNGY7ICovXHJcbn1cclxuXHJcbiNnZ3piOmRpc2FibGVkIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZDlkOWQ5O1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/page/person/mymatch/mymatch.component.html":
/*!************************************************************!*\
  !*** ./src/app/page/person/mymatch/mymatch.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"min-width: 1080px;\">\n  <!-- 我的比赛列表 -->\n  <div class=\"pageContainer\" style=\"min-height: 600px;max-width: 980px;\">\n    <div>\n    </div>\n    <!-- 暂无数据 -->\n    <div *ngIf=\"myMatch_list.length==0\" style=\"margin-top: 10px;padding: 150px 0\">\n      <nz-empty nzNotFoundContent=\"没有您报名的比赛哦~\"></nz-empty>\n    </div>\n    <div id=\"myMatchlist\" *ngIf=\"myMatch_list.length>0\">\n      <div *ngFor=\"let item of myMatch_list;let i=index\">\n        <nz-page-header>\n          <nz-page-header-title style=\"width: 400px;\">{{item.match_name}}</nz-page-header-title>\n          <!-- <nz-page-header-subtitle>This is a subtitle</nz-page-header-subtitle> -->\n          <nz-page-header-tags>\n            <nz-tag *ngIf=\"item.is_enlist==0\" [nzColor]=\"'red'\">未开放</nz-tag>\n            <nz-tag *ngIf=\"item.is_enlist==1\" [nzColor]=\"'green'\">正在报名</nz-tag>\n            <nz-tag *ngIf=\"item.is_enlist==2\" [nzColor]=\"'red'\">截止报名</nz-tag>\n            <nz-tag *ngIf=\"item.is_enlist==3\" [nzColor]=\"'red'\">比赛结束</nz-tag>\n          </nz-page-header-tags>\n          <nz-page-header-extra>\n            <button nz-button nzType=\"primary\" (click)=\"goMatchDetail(item.id)\">查看详情</button>\n            <!-- 参赛状态，且处于报名阶段才可以退赛 -->\n            <button *ngIf=\"item.is_return == 0&&item.is_enlist==1\" nz-button nzType=\"danger\"\n              (click)=\"returnMatch(item.enlist_id)\">申请退赛</button>\n            <button *ngIf=\"item.is_return == 0&&item.is_enlist!=1\" nz-button nzType=\"danger\" disabled\n              (click)=\"returnMatch(item.enlist_id)\">申请退赛</button>\n            <button *ngIf=\"item.is_return == 1\" nz-button nzType=\"danger\" disabled\n              (click)=\"returnMatch(item.enlist_id)\">已退赛</button>\n          </nz-page-header-extra>\n          <nz-page-header-content>\n            <div class=\"wrap\">\n              <div nz-row class=\"content padding\">\n                <div nz-col nzSpan=\"12\">\n                  <div class=\"description\">\n                    <span class=\"term\">赛事联系人:</span>\n                    <p class=\"detail\">{{item.enlist_name}}</p>\n                  </div>\n                </div>\n                <div nz-col nzSpan=\"12\">\n                  <div class=\"description\">\n                    <span class=\"term\">联系电话:</span>\n                    <a class=\"detail\">{{item.enlist_phone}}</a>\n                  </div>\n                </div>\n                <div nz-col nzSpan=\"12\">\n                  <div class=\"description\">\n                    <span class=\"term\">赛事开始时间:</span>\n                    <p class=\"detail\">{{item.begin_time}}</p>\n                  </div>\n                </div>\n                <div nz-col nzSpan=\"12\">\n                  <div class=\"description\">\n                    <span class=\"term\">赛事结束时间:</span>\n                    <p class=\"detail\">{{item.end_time}}</p>\n                  </div>\n                </div>\n                <div nz-col nzSpan=\"12\">\n                  <div class=\"description\">\n                    <span class=\"term\">赛事地点:</span>\n                    <p class=\"detail\">{{item.match_address}}</p>\n                  </div>\n                </div>\n              </div>\n              <div nz-row class=\"extra-content\">\n                <div nz-col nzSpan=\"12\">\n                  <span class=\"label\">参赛组别</span>\n                  <p class=\"detail\">{{item.group_name}}</p>\n                </div>\n                <div nz-col nzSpan=\"12\">\n                  <span class=\"label\"></span>\n                  <!-- <p class=\"detail\">$ 568.08</p> -->\n                  <div>\n                    <nz-dropdown [nzDisabled]=\"false\" [nzPlacement]=\"'bottomLeft'\">\n                      <button nzSize=\"default\" id=\"ggzb\" nz-button nz-dropdown>更改组别</button>\n                      <ul nz-menu style=\"min-width: 110px;\">\n                        <li nz-menu-item *ngFor=\"let g of item.match_group_arr\">\n                          <a *ngIf=\"g.id!=item.match_group_id\" style=\"color: #000;\"\n                            (click)=\"modifyGroup(g)\">{{g.group_name}}</a>\n                        </li>\n                      </ul>\n                    </nz-dropdown>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </nz-page-header-content>\n          <nz-page-header-footer>\n            <!-- <nz-tabset [nzSelectedIndex]=\"1\">\n              <nz-tab nzTitle=\"Details\"></nz-tab>\n              <nz-tab nzTitle=\"Rule\"></nz-tab>\n            </nz-tabset> -->\n            <nz-collapse [nzBordered]=\"false\">\n              <nz-collapse-panel [ngStyle]=\"customStyle\" nzHeader=\"成绩表\">\n                <div id=\"score\">\n                  <div nz-row>\n                    <div nz-col nzSpan=\"12\">\n                      <div>\n                        <span>一轮得分:</span><span>{{item.score1}}</span>\n                        <span>一轮对手:</span><span>{{item.rival1}}</span>\n                      </div>\n                      <div>\n                        <span>二轮得分:</span><span>{{item.score2}}</span>\n                        <span>二轮对手:</span><span>{{item.rival2}}</span>\n                      </div>\n                      <div>\n                        <span>三轮得分:</span><span>{{item.score3}}</span>\n                        <span>三轮对手:</span><span>{{item.rival3}}</span>\n                      </div>\n                      <div>\n                        <span>四轮得分:</span><span>{{item.score4}}</span>\n                        <span>四轮对手:</span><span>{{item.rival4}}</span>\n                      </div>\n                      <div>\n                        <span>五轮得分:</span><span>{{item.score5}}</span>\n                        <span>五轮对手:</span><span>{{item.rival5}}</span>\n                      </div>\n                      <div>\n                        <span>六轮得分:</span><span>{{item.score6}}</span>\n                        <span>六轮对手:</span><span>{{item.rival6}}</span>\n                      </div>\n                    </div>\n                    <div nz-col nzSpan=\"12\">\n                      <div>\n                        <span>七轮得分:</span><span>{{item.score7}}</span>\n                        <span>七轮对手:</span><span>{{item.rival7}}</span>\n                      </div>\n                      <div>\n                        <span>八轮得分:</span><span>{{item.score8}}</span>\n                        <span>八轮对手:</span><span>{{item.rival8}}</span>\n                      </div>\n                      <div>\n                        <span>九轮得分:</span><span>{{item.score9}}</span>\n                        <span>九轮对手:</span><span>{{item.rival9}}</span>\n                      </div>\n                      <div>\n                        <span>10轮得分:</span><span>{{item.score10}}</span>\n                        <span>10轮对手:</span><span>{{item.rival10}}</span>\n                      </div>\n                      <div>\n                        <span>11轮得分:</span><span>{{item.score11}}</span>\n                        <span>11轮对手:</span><span>{{item.rival11}}</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </nz-collapse-panel>\n            </nz-collapse>\n          </nz-page-header-footer>\n        </nz-page-header>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/page/person/mymatch/mymatch.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/page/person/mymatch/mymatch.component.ts ***!
  \**********************************************************/
/*! exports provided: MymatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MymatchComponent", function() { return MymatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/http.service */ "./src/app/providers/http.service.ts");
/* harmony import */ var _providers_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/toast.service */ "./src/app/providers/toast.service.ts");
/* harmony import */ var _providers_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/util.service */ "./src/app/providers/util.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");







var MymatchComponent = /** @class */ (function () {
    function MymatchComponent(router, httpService, toastService, utilService, modalService) {
        this.router = router;
        this.httpService = httpService;
        this.toastService = toastService;
        this.utilService = utilService;
        this.modalService = modalService;
        this.myMatch_list = [];
        //折叠面板样式
        this.customStyle = {
            border: '0px'
        };
    }
    MymatchComponent.prototype.ngOnInit = function () {
        this.init();
    };
    MymatchComponent.prototype.init = function () {
        this.getMyGame();
    };
    //判断是否有登录，是否有userinfo
    MymatchComponent.prototype.checkLogin = function () {
        this.userInfo = this.utilService.getLS("userInfo");
        if (!this.userInfo) {
            this.toastService.showMessage("info", "请您先登录");
            this.router.navigate(['/home']);
            this.utilService.LoginIsVisible = true;
        }
    };
    MymatchComponent.prototype.getMyGame = function (pagenow) {
        var _this = this;
        if (pagenow === void 0) { pagenow = 1; }
        this.checkLogin();
        var data = {
            user_id: this.userInfo.id,
        };
        this.httpService.post('getMyMatch', data, function (res) {
            console.log(res);
            if (res.statusCode == 0) {
                var data = res.data;
                _this.myMatch_list = data;
            }
            else {
                _this.toastService.showMessage("error", res.msg);
            }
        });
    };
    MymatchComponent.prototype.goMatchDetail = function (id) {
        var navigationExtras = {
            queryParams: { 'match_id': id },
        };
        this.router.navigate(['/matchdetail'], navigationExtras);
    };
    //退赛申请
    MymatchComponent.prototype.returnMatch = function (enlist_id) {
        var _this = this;
        console.log(enlist_id);
        this.modalService.confirm({
            nzTitle: '<i>确定退赛吗?</i>',
            nzContent: '<b>退赛后如想再参赛需联系您所在机构的管理员</b>',
            nzOnOk: function () {
                var data = {
                    enlist_id: enlist_id
                };
                _this.httpService.post('returnMatch', data, function (res) {
                    console.log(res);
                    if (res.statusCode == 0) {
                        _this.toastService.showMessage("info", res.msg);
                        ;
                        _this.getMyGame();
                    }
                    else {
                        _this.toastService.showMessage("error", res.msg);
                    }
                });
            }
        });
    };
    MymatchComponent.prototype.modifyGroup = function (item) {
        var _this = this;
        console.log(item);
        this.modalService.confirm({
            nzTitle: '<i>确定更换到 ' + item.group_name + ' 吗?</i>',
            nzContent: '',
            nzOnOk: function () {
                var data = {
                    match_id: item.match_id,
                    user_id: _this.userInfo.id,
                    match_group_id: item.id
                };
                _this.httpService.post('modifyMyMatchGroup', data, function (res) {
                    console.log(res);
                    if (res.statusCode == 0) {
                        _this.toastService.showMessage("info", res.msg);
                        ;
                        _this.getMyGame();
                    }
                    else {
                        _this.toastService.showMessage("error", res.msg);
                    }
                });
            }
        });
    };
    MymatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mymatch',
            template: __webpack_require__(/*! ./mymatch.component.html */ "./src/app/page/person/mymatch/mymatch.component.html"),
            styles: [__webpack_require__(/*! ./mymatch.component.css */ "./src/app/page/person/mymatch/mymatch.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _providers_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            _providers_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzModalService"]])
    ], MymatchComponent);
    return MymatchComponent;
}());



/***/ }),

/***/ "./src/app/page/person/pay/pay.component.css":
/*!***************************************************!*\
  !*** ./src/app/page/person/pay/pay.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ant-card-head {\r\n    color: #000;\r\n}\r\n\r\n.payImg {\r\n    width: 100px;\r\n    height: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9wZXJzb24vcGF5L3BheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlL3BlcnNvbi9wYXkvcGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW50LWNhcmQtaGVhZCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLnBheUltZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/person/pay/pay.component.html":
/*!****************************************************!*\
  !*** ./src/app/page/person/pay/pay.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div style=\"margin-bottom:20px;\">\n    <nz-card style=\"width:100%;text-align: left;\" nzTitle=\"支付订单\" nzBordered=\"false\">\n      <div style=\"text-align: center\">\n        <p *ngIf=\"!orderData.order\">暂无订单信息</p>\n        <div *ngIf=\"orderData.order\" style=\"width: 180px;margin:0 auto; text-align: left;\">\n          <div>收款方:福建省围棋协会</div>\n          <div>支付内容:赛事服务费</div>\n          <div>赛事类型:围棋段级位赛</div>\n          <div>支付金额: <span style=\"color:#ff7e00\">{{' '+orderData.group_price+' '}}</span> 元</div>\n          <div>支付时间:{{this.utilService.getDate()}}</div>\n        </div>\n      </div>\n    </nz-card>\n  </div>\n  <div style=\"margin-bottom:20px;\">\n    <nz-card style=\"width:100%;text-align: left;\" nzTitle=\"支持以下支付方式\" nzBordered=\"false\">\n      <div style=\"text-align: center\">\n        <nz-radio-group [(ngModel)]=\"pay_type\" nzName=\"pay_type\">\n          <label *ngIf=\"orderData.haveWxAcc!=1\" style=\"margin-right: 50px;\" nz-radio nzValue=\"1\">\n            <img class=\"payImg\" src=\"../../../../assets/imgs/zhifubaoPay.jpg\" alt=\"\">\n          </label>\n          <label *ngIf=\"orderData.haveWxAcc==1\" nz-radio nzValue=\" 2\">\n            <img class=\"payImg\" src=\"../../../../assets/imgs/weixinPay.jpg\" alt=\"\">\n          </label>\n        </nz-radio-group>\n      </div>\n    </nz-card>\n  </div>\n  <div style=\"margin-bottom:20px;\" *ngIf=\"orderData.order\">\n    <nz-card style=\"width:100%;text-align: left;\" nzTitle=\"温馨提示：请仔细核对收款机构和转账金额信息，为了确保订单有效，请及时支付。\" nzBordered=\"false\">\n      <div style=\"text-align: right ;\">\n        <div style=\"margin-bottom: 8px;\">支付总额: <span style=\"color:#ff7e00;\">{{' '+orderData.group_price+' '}}</span> 元\n        </div>\n        <div>\n          <button nz-button nzSize=\"large\" nzType=\"primary\" (click)=\"payFun()\">确定支付</button>\n        </div>\n      </div>\n    </nz-card>\n  </div>\n  <div>\n    <form id=\"formPay\" style=\"visibility:hidden;\" method=\"POST\" action=\"http://api.fjswqxh.com/web/AppEntrance/BuyApi\"\n      target=\"_self\">\n      <!-- <form id=\"formPay\" style=\"visibility:hidden;\" method=\"POST\" action=\"http://chessrace.vc/web/AppEntrance/BuyApi\"\n      target=\"_blank\"> -->\n      <input hidden name=\"type\" id=\"type\" [value]=\"1\" />\n      <input *ngIf=\"userInfo\" hidden name=\"user_id\" id=\"user_id\" [value]=\"userInfo.id\" />\n      <input hidden name=\"pay_id\" id=\"pay_id\" [value]=\"orderData.match_id\" />\n      <input hidden name=\"orgid\" id=\"orgid\" [value]=\"orderData.orgid\" />\n      <input hidden name=\"pay_type\" id=\"pay_type\" [value]=\"pay_type\" />\n      <input hidden name=\"type2\" id=\"type2\" [value]=\"1\" />\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/page/person/pay/pay.component.ts":
/*!**************************************************!*\
  !*** ./src/app/page/person/pay/pay.component.ts ***!
  \**************************************************/
/*! exports provided: PayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayComponent", function() { return PayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/http.service */ "./src/app/providers/http.service.ts");
/* harmony import */ var _providers_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/toast.service */ "./src/app/providers/toast.service.ts");
/* harmony import */ var _providers_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/util.service */ "./src/app/providers/util.service.ts");






var PayComponent = /** @class */ (function () {
    function PayComponent(router, httpService, toastService, utilService, activatedRoute, el) {
        this.router = router;
        this.httpService = httpService;
        this.toastService = toastService;
        this.utilService = utilService;
        this.activatedRoute = activatedRoute;
        this.el = el;
        this.pay_type = '1';
    }
    PayComponent.prototype.ngOnInit = function () {
        this.init();
    };
    PayComponent.prototype.init = function () {
        this.generateOrder();
        // this.checkLogin();
    };
    //生成订单
    PayComponent.prototype.generateOrder = function () {
        var _this = this;
        //rxjs(Observable)对象,订阅获取数据
        this.activatedRoute.queryParams.subscribe(function (data) {
            console.log(data);
            _this.orderData = data;
        });
    };
    //判断是否有登录，是否有userinfo
    PayComponent.prototype.checkLogin = function () {
        this.userInfo = this.utilService.getLS("userInfo");
        if (!this.userInfo) {
            this.toastService.showMessage("info", "请您先登录");
            this.router.navigate(['/home']);
            this.utilService.LoginIsVisible = true;
        }
    };
    PayComponent.prototype.payFun = function () {
        var _this = this;
        this.checkLogin();
        //判断是否已经报名
        var param = {
            match_group_id: this.orderData.match_id,
            user_id: this.userInfo.id
        };
        this.httpService.post('queryIsEnlist_pay', param, function (res) {
            console.log(res);
            if (res.statusCode == 0) {
                _this.toastService.showMessage("info", "您已报名此赛事，请勿重复报名");
            }
            else { //还未报名
                _this.pay_type = _this.orderData.haveWxAcc != '1' ? '1' : '2';
                _this.el.nativeElement.querySelector('#user_id').value = _this.userInfo.id;
                _this.el.nativeElement.querySelector('#pay_id').value = _this.orderData.match_id;
                _this.el.nativeElement.querySelector('#orgid').value = _this.orderData.orgid;
                _this.el.nativeElement.querySelector('#pay_type').value = _this.pay_type;
                console.log('paytype:' + _this.pay_type);
                console.log(_this.el.nativeElement.querySelector('#pay_type').value);
                _this.el.nativeElement.querySelector('#formPay').submit();
            }
        });
    };
    PayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pay',
            template: __webpack_require__(/*! ./pay.component.html */ "./src/app/page/person/pay/pay.component.html"),
            styles: [__webpack_require__(/*! ./pay.component.css */ "./src/app/page/person/pay/pay.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _providers_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            _providers_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], PayComponent);
    return PayComponent;
}());



/***/ }),

/***/ "./src/app/page/person/person.component.css":
/*!**************************************************!*\
  !*** ./src/app/page/person/person.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[nz-menu] {\r\n    min-height: 800px;\r\n}\r\n\r\n[nz-menu] a {\r\n    color: #fff;\r\n}\r\n\r\n[nz-menu] li:hover a {\r\n    color: rgba(255, 255, 255, 0.65);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9wZXJzb24vcGVyc29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9wYWdlL3BlcnNvbi9wZXJzb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIltuei1tZW51XSB7XHJcbiAgICBtaW4taGVpZ2h0OiA4MDBweDtcclxufVxyXG5cclxuW256LW1lbnVdIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbltuei1tZW51XSBsaTpob3ZlciBhIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/page/person/person.component.html":
/*!***************************************************!*\
  !*** ./src/app/page/person/person.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"min-width: 1080px;\">\n  <div class=\"pageContainer\" style=\"padding: 0\">\n    <!-- 侧边菜单 -->\n    <nz-layout class=\"layout\">\n      <nz-sider [nzWidth]=\"240\">\n        <ul nz-menu [nzMode]=\"'inline'\" nzTheme=\"dark\">\n          <li nz-submenu nzOpen=\"true\">\n            <span title>\n              <i nz-icon type=\"appstore\"></i>\n              <span>个人中心</span>\n            </span>\n            <ul>\n              <li nz-menu-item>\n                <a routerLink=\"/person/pay\">在线支付</a>\n              </li>\n              <li nz-menu-item>\n                <a routerLink=\"/person/edit\">修改资料</a>\n              </li>\n              <li nz-menu-item>\n                <a routerLink=\"/person/modifypwd\">修改密码</a>\n              </li>\n            </ul>\n          </li>\n          <li nz-submenu nzOpen=\"true\">\n            <span title>\n              <i nz-icon type=\"calendar\"></i>\n              <span>我的比赛</span>\n            </span>\n            <ul>\n              <li nz-menu-item>\n                <a routerLink=\"/person/mymatch\">比赛详情</a>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </nz-sider>\n      <nz-content style=\"padding:24px; min-height: 280px;background-color: #ffffff;\">\n        <!-- <span>Content </span> -->\n        <router-outlet></router-outlet>\n      </nz-content>\n    </nz-layout>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/page/person/person.component.ts":
/*!*************************************************!*\
  !*** ./src/app/page/person/person.component.ts ***!
  \*************************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/util.service */ "./src/app/providers/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PersonComponent = /** @class */ (function () {
    function PersonComponent(utilService, router) {
        this.utilService = utilService;
        this.router = router;
    }
    PersonComponent.prototype.ngOnInit = function () {
        console.log("个人中心init");
        this.init();
    };
    PersonComponent.prototype.ngOnDestroy = function () {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        console.log("个人中心destroy");
    };
    PersonComponent.prototype.init = function () {
        this.checkLogin();
    };
    //判断是否有登录，是否有userinfo
    PersonComponent.prototype.checkLogin = function () {
        var userInfo = this.utilService.getLS("userInfo");
        if (!userInfo) {
            this.router.navigate(['/home']);
        }
    };
    PersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-person',
            template: __webpack_require__(/*! ./person.component.html */ "./src/app/page/person/person.component.html"),
            styles: [__webpack_require__(/*! ./person.component.css */ "./src/app/page/person/person.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PersonComponent);
    return PersonComponent;
}());



/***/ }),

/***/ "./src/app/page/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/page/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[nz-form] {\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n}\r\n\r\nnz-form-explain {\r\n    text-align: left;\r\n}\r\n\r\n.ken-date-picker {\r\n    width: inherit;\r\n    text-align: left;\r\n}\r\n\r\n.ken-pic-preview {\r\n    margin-top: 5px;\r\n    width: 150px;\r\n    height: 100px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIltuei1mb3JtXSB7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbm56LWZvcm0tZXhwbGFpbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ua2VuLWRhdGUtcGlja2VyIHtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmtlbi1waWMtcHJldmlldyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/page/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"min-width: 1080px;\">\n  <div class=\"pageContainer\">\n    <h1 style=\"font-weight: bolder;\">福建省围棋协会，欢迎注册</h1>\n    <form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm()\">\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"user_name\">用户姓名</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <input nz-input formControlName=\"user_name\" id=\"user_name\" />\n          <nz-form-explain *ngIf=\"validateForm.get('user_name')?.dirty && validateForm.get('user_name')?.errors\">\n            请输入用户名! </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"pwd\" nzRequired>登录密码</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <input nz-input type=\"password\" id=\"pwd\" formControlName=\"pwd\" (ngModelChange)=\"updateConfirmValidator()\" />\n          <nz-form-explain *ngIf=\"validateForm.get('pwd')?.dirty && validateForm.get('pwd')?.errors\">请输入密码!\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"checkPassword\" nzRequired>确认密码</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <input nz-input type=\"password\" formControlName=\"checkPassword\" id=\"checkPassword\" />\n          <nz-form-explain\n            *ngIf=\"validateForm.get('checkPassword')?.dirty && validateForm.get('checkPassword')?.errors\">\n            <ng-container *ngIf=\"validateForm.get('checkPassword')?.hasError('required')\"> 请确认您的密码! </ng-container>\n            <ng-container *ngIf=\"validateForm.get('checkPassword')?.hasError('confirm')\">两次密码输入不一致! </ng-container>\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"phone\" nzRequired>手机号</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" [nzValidateStatus]=\"validateForm.controls['phone']\">\n          <nz-input-group [nzAddOnBefore]=\"addOnBeforeTemplate\">\n            <ng-template #addOnBeforeTemplate>\n              <nz-select formControlName=\"phoneNumberPrefix\" style=\"width: 70px;\">\n                <nz-option nzLabel=\"+86\" nzValue=\"+86\"></nz-option>\n                <!-- <nz-option nzLabel=\"+87\" nzValue=\"+87\"></nz-option> -->\n              </nz-select>\n            </ng-template>\n            <input formControlName=\"phone\" id=\"'phone'\" nz-input />\n          </nz-input-group>\n          <nz-form-explain *ngIf=\"(validateForm.get('phone')?.dirty && validateForm.get('phone')?.errors)\"> 请输入手机号!\n          </nz-form-explain>\n          <nz-form-explain [style.color]=\"hasPhoneNum?'#52c41a':'#f5222d'\"> {{sendSmsTip}} </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"captcha\" nzRequired>验证码</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <div nz-row [nzGutter]=\"8\">\n            <div nz-col [nzSpan]=\"12\">\n              <input nz-input formControlName=\"code\" id=\"captcha\" />\n            </div>\n            <div nz-col [nzSpan]=\"12\">\n              <button nz-button (click)=\"getCaptcha($event)\" [disabled]=\"sendSmsActive\">{{sendSmsText}}</button>\n            </div>\n          </div>\n          <nz-form-explain *ngIf=\"validateForm.get('code')?.dirty && validateForm.get('code')?.errors\">请输入验证码!\n          </nz-form-explain>\n          <nz-form-extra style=\"text-align: left;\">我们需要验证您的手机号.</nz-form-extra>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"identification\" nzRequired>身份证</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <input nz-input id=\"identification\" formControlName=\"identification\" placeholder=\"请输入身份证号\" />\n          <nz-form-explain\n            *ngIf=\"validateForm.get('identification')?.dirty && validateForm.get('identification')?.errors\">请输入身份证号!\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"nation\" nzRequired>民族</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <input nz-input id=\"nation\" formControlName=\"nation\" placeholder='民族，例:\"汉族\"' />\n          <nz-form-explain *ngIf=\"validateForm.get('nation')?.dirty && validateForm.get('nation')?.errors\">请输入民族!\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"sex\" nzRequired>性别</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <nz-select id=\"sex\" formControlName=\"sex\" nzPlaceHolder=\"请选择性别\">\n            <nz-option nzValue=\"1\" nzLabel=\"男\"></nz-option>\n            <nz-option nzValue=\"2\" nzLabel=\"女\"></nz-option>\n          </nz-select>\n          <nz-form-explain *ngIf=\"validateForm.get('sex')?.dirty && validateForm.get('sex')?.errors\">请选择性别!\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired>出生年月</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" style=\"text-align: left;\">\n          <nz-date-picker [nzClassName]=\"'ken-date-picker'\" formControlName=\"birthday\"></nz-date-picker>\n          <nz-form-explain *ngIf=\"validateForm.get('birthday')?.dirty && validateForm.get('birthday')?.errors\">请填写出生年月!\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\">学棋时间</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" style=\"text-align: left;\">\n          <nz-date-picker [nzClassName]=\"'ken-date-picker'\" formControlName=\"study_time\"></nz-date-picker>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"first_teacher\">启蒙老师</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <input nz-input id=\"first_teacher\" formControlName=\"first_teacher\" placeholder=\"您的启蒙老师是谁\" />\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"organization\" nzRequired>归属机构</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" style=\"text-align: left;\">\n          <nz-cascader formControlName=\"organization\" [nzExpandTrigger]=\"'hover'\" [nzOptions]=\"organizationList\"\n            [nzLabelProperty]=\"'name'\" [nzValueProperty]=\"'id'\">\n          </nz-cascader>\n          <nz-form-explain *ngIf=\"validateForm.get('organization')?.dirty && validateForm.get('organization')?.errors\">\n            请选择归属机构! </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"address\">邮寄地址</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <input nz-input id=\"address\" formControlName=\"address\" placeholder=\"常住邮寄地址\" />\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"level\" nzRequired>棋力</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <nz-select nzAllowClear=\"true\" id=\"level\" formControlName=\"level\" nzPlaceHolder=\"请选择棋力\">\n            <nz-option [nzValue]=\"item.id\" [nzLabel]=\"item.level\" *ngFor=\"let item of levelOption\"></nz-option>\n          </nz-select>\n          <nz-form-explain *ngIf=\"validateForm.get('level')?.dirty && validateForm.get('level')?.errors\">请选择棋力!\n          </nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"certificate_number\">段级位证书编号</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n          <input nz-input id=\"certificate_number\" formControlName=\"certificate_number\"\n            placeholder=\"请输入段级位证书编号(未获得段级位可不填写)\" />\n        </nz-form-control>\n      </nz-form-item>\n      <!-- 段级位证书 -->\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"certificate_lv\">段级位证书上传</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" style=\"text-align: left;\">\n          <nz-upload nzAction=\"http://onepiecej.oss-cn-shenzhen.aliyuncs.com\" nzListType=\"picture\"\n            [(nzFileList)]=\"fileList\" [nzShowButton]=\"fileList.length < 1\" [nzBeforeUpload]=\"beforeUpload\">\n            <button nz-button (click)=\"uploadClick($event)\"><i nz-icon nzType=\"upload\"></i><span>段级位证书上传</span></button>\n            <img *ngIf=\"show_img\" class=\"ken-pic-preview\" [src]=\"show_img\" />\n          </nz-upload>\n        </nz-form-control>\n      </nz-form-item>\n      <!-- 一寸证件照 -->\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"certificate\">一寸证件照上传</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" style=\"text-align: left;\">\n          <nz-upload nzAction=\"http://onepiecej.oss-cn-shenzhen.aliyuncs.com\" nzListType=\"picture\"\n            [(nzFileList)]=\"fileList1\" [nzShowButton]=\"fileList1.length < 1\" [nzBeforeUpload]=\"beforeUpload1\">\n            <button nz-button (click)=\"uploadClick($event)\"><i nz-icon nzType=\"upload\"></i><span>一寸证件照上传</span></button>\n            <img *ngIf=\"show_img1\" class=\"ken-pic-preview\" [src]=\"show_img1\" />\n          </nz-upload>\n        </nz-form-control>\n      </nz-form-item>\n      <!-- 是否有教练证 -->\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\">是否持有教练证</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" style=\"text-align: left;\">\n          <nz-switch formControlName=\"user_type_c\"></nz-switch>\n        </nz-form-control>\n      </nz-form-item>\n      <!-- 是否有裁判证 -->\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\">是否持有裁判证</nz-form-label>\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" style=\"text-align: left;\">\n          <nz-switch formControlName=\"user_type_r\"></nz-switch>\n        </nz-form-control>\n      </nz-form-item>\n      <!-- 教练信息 -->\n      <div *ngIf=\"validateForm.value.user_type_c\">\n        <nz-form-item>\n          <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"certificate_type_c\">教练员等级</nz-form-label>\n          <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n            <nz-select nzAllowClear=\"true\" id=\"certificate_type_c\" formControlName=\"certificate_type_c\"\n              nzPlaceHolder=\"请选择教练员等级\">\n              <nz-option nzValue=\"1\" nzLabel=\"初级\"></nz-option>\n              <nz-option nzValue=\"2\" nzLabel=\"中级\"></nz-option>\n              <nz-option nzValue=\"3\" nzLabel=\"高级\"></nz-option>\n            </nz-select>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"certificate_number_c\">教练资格证编号</nz-form-label>\n          <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n            <input nz-input id=\"certificate_number_c\" formControlName=\"certificate_number_c\" placeholder=\"请输入教练资格证编号\" />\n          </nz-form-control>\n        </nz-form-item>\n        <!-- 教练员证书 -->\n        <nz-form-item>\n          <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"certificate_lv_c\">教练资格证上传</nz-form-label>\n          <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" style=\"text-align: left;\">\n            <nz-upload nzAction=\"http://onepiecej.oss-cn-shenzhen.aliyuncs.com\" nzListType=\"picture\"\n              [(nzFileList)]=\"fileList_c\" [nzShowButton]=\"fileList_c.length < 1\" [nzBeforeUpload]=\"beforeUpload_c\">\n              <button nz-button (click)=\"uploadClick($event)\"><i nz-icon\n                  nzType=\"upload\"></i><span>教练资格证上传</span></button>\n              <img *ngIf=\"show_img_c\" class=\"ken-pic-preview\" [src]=\"show_img_c\" />\n            </nz-upload>\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n      <!-- 裁判员信息 -->\n      <div *ngIf=\"validateForm.value.user_type_r\">\n        <nz-form-item>\n          <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"certificate_type_r\">裁判员等级</nz-form-label>\n          <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n            <nz-select nzAllowClear=\"true\" id=\"certificate_type_r\" formControlName=\"certificate_type_r\"\n              nzPlaceHolder=\"请选择裁判员等级\">\n              <nz-option nzValue=\"4\" nzLabel=\"国家级\"></nz-option>\n              <nz-option nzValue=\"5\" nzLabel=\"一级\"></nz-option>\n              <nz-option nzValue=\"6\" nzLabel=\"二级\"></nz-option>\n              <nz-option nzValue=\"7\" nzLabel=\"三级\"></nz-option>\n            </nz-select>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"certificate_number_r\">裁判资格证编号</nz-form-label>\n          <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\n            <input nz-input id=\"certificate_number_r\" formControlName=\"certificate_number_r\" placeholder=\"请输入裁判资格证编号\" />\n          </nz-form-control>\n        </nz-form-item>\n        <!-- 裁判员证书 -->\n        <nz-form-item>\n          <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"certificate_lv_r\">裁判资格证上传</nz-form-label>\n          <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\" style=\"text-align: left;\">\n            <nz-upload nzAction=\"http://onepiecej.oss-cn-shenzhen.aliyuncs.com\" nzListType=\"picture\"\n              [(nzFileList)]=\"fileList_r\" [nzShowButton]=\"fileList_r.length < 1\" [nzBeforeUpload]=\"beforeUpload_r\">\n              <button nz-button (click)=\"uploadClick($event)\"><i nz-icon\n                  nzType=\"upload\"></i><span>裁判资格证上传</span></button>\n              <img *ngIf=\"show_img_r\" class=\"ken-pic-preview\" [src]=\"show_img_r\" />\n            </nz-upload>\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n      <nz-form-item nz-row style=\"margin-bottom:8px;\">\n        <nz-form-control [nzSpan]=\"14\" [nzOffset]=\"6\">\n          <button nz-button nzType=\"primary\">注册</button>\n        </nz-form-control>\n      </nz-form-item>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/page/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/page/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/http.service */ "./src/app/providers/http.service.ts");
/* harmony import */ var _providers_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/toast.service */ "./src/app/providers/toast.service.ts");
/* harmony import */ var _providers_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/util.service */ "./src/app/providers/util.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");








var RegisterComponent = /** @class */ (function () {
    //是否有教练证
    function RegisterComponent(fb, router, httpService, toastService, utilService, _d // 图片路径转换使用，使用见HMTL文件,防止xss
    ) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this.httpService = httpService;
        this.toastService = toastService;
        this.utilService = utilService;
        this._d = _d;
        this.sendSmsText = "获取验证码";
        this.sendSmsActive = false;
        this.hasPhoneNum = true;
        this.sendSmsTip = "";
        this.organizationList = [];
        this.levelOption = [];
        //段级位证书
        this.fileList = [];
        this.img_name = '';
        this.show_img = '';
        //证件照
        this.fileList1 = [];
        this.img_name1 = '';
        this.show_img1 = '';
        //教练证
        this.fileList_c = [];
        this.img_name_c = '';
        this.show_img_c = '';
        //裁判证
        this.fileList_r = [];
        this.img_name_r = '';
        this.show_img_r = '';
        this.confirmationValidator = function (control) {
            if (!control.value) {
                return { required: true };
            }
            else if (control.value !== _this.validateForm.controls.pwd.value) {
                return { confirm: true, error: true };
            }
            return {};
        };
        //上传段级位证书
        this.beforeUpload = function (file) {
            console.log(file);
            var isJPG = file.type === "image/jpeg";
            var isPNG = file.type === "image/png";
            var isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG && !isPNG) {
                _this.toastService.showMessage("error", "上传图片只能是JPG或PNG格式!");
                return false;
            }
            if (!isLt2M) {
                _this.toastService.showMessage("error", "上传图片大小不能超过 2MB!");
                return false;
            }
            _this.file = file;
            var tempFilePaths = _this.file.name;
            // =======================================
            var rnd = "";
            for (var i = 0; i < 3; i++) {
                rnd += Math.floor(Math.random() * 10);
            }
            _this.img_name =
                rnd +
                    Date.parse(Date()) +
                    tempFilePaths.substr(tempFilePaths.lastIndexOf("."));
            // =======================================
            _this.validateForm.patchValue({
                certificate_lv: _this.oss_info.host + "/" + _this.oss_info.dir + _this.img_name
            });
            _this.show_img = window.URL.createObjectURL(file);
            _this.show_img = _this._d.bypassSecurityTrustUrl(_this.show_img);
            // console.log(this.show_img);
            // this.upload(file, this.img_name);
            return false;
        };
        //上传证件照
        this.beforeUpload1 = function (file) {
            console.log(file);
            var isJPG = file.type === "image/jpeg";
            var isPNG = file.type === "image/png";
            var isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG && !isPNG) {
                _this.toastService.showMessage("error", "上传图片只能是JPG或PNG格式!");
                return false;
            }
            if (!isLt2M) {
                _this.toastService.showMessage("error", "上传图片大小不能超过 2MB!");
                return false;
            }
            _this.file1 = file;
            var tempFilePaths = _this.file1.name;
            // =======================================
            var rnd = "";
            for (var i = 0; i < 3; i++) {
                rnd += Math.floor(Math.random() * 10);
            }
            _this.img_name1 =
                rnd +
                    Date.parse(Date()) +
                    tempFilePaths.substr(tempFilePaths.lastIndexOf("."));
            // =======================================
            _this.validateForm.patchValue({
                certificate: _this.oss_info.host + "/" + _this.oss_info.dir + _this.img_name1
            });
            _this.show_img1 = window.URL.createObjectURL(file);
            _this.show_img1 = _this._d.bypassSecurityTrustUrl(_this.show_img1);
            // console.log(this.show_img);
            // this.upload(file, this.img_name);
            return false;
        };
        //上传裁判员证书
        this.beforeUpload_c = function (file) {
            console.log(file);
            var isJPG = file.type === "image/jpeg";
            var isPNG = file.type === "image/png";
            var isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG && !isPNG) {
                _this.toastService.showMessage("error", "上传图片只能是JPG或PNG格式!");
                return false;
            }
            if (!isLt2M) {
                _this.toastService.showMessage("error", "上传图片大小不能超过 2MB!");
                return false;
            }
            _this.file_c = file;
            var tempFilePaths = _this.file_c.name;
            // =======================================
            var rnd = "";
            for (var i = 0; i < 3; i++) {
                rnd += Math.floor(Math.random() * 10);
            }
            _this.img_name_c =
                rnd +
                    Date.parse(Date()) +
                    tempFilePaths.substr(tempFilePaths.lastIndexOf("."));
            // =======================================
            _this.validateForm.patchValue({
                certificate_lv_c: _this.oss_info.host + "/" + _this.oss_info.dir + _this.img_name_c
            });
            _this.show_img_c = window.URL.createObjectURL(file);
            _this.show_img_c = _this._d.bypassSecurityTrustUrl(_this.show_img_c);
            // console.log(this.show_img);
            // this.upload(file, this.img_name);
            return false;
        };
        //上传裁判员证书
        this.beforeUpload_r = function (file) {
            console.log(file);
            var isJPG = file.type === "image/jpeg";
            var isPNG = file.type === "image/png";
            var isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG && !isPNG) {
                _this.toastService.showMessage("error", "上传图片只能是JPG或PNG格式!");
                return false;
            }
            if (!isLt2M) {
                _this.toastService.showMessage("error", "上传图片大小不能超过 2MB!");
                return false;
            }
            _this.file_r = file;
            var tempFilePaths = _this.file_r.name;
            // =======================================
            var rnd = "";
            for (var i = 0; i < 3; i++) {
                rnd += Math.floor(Math.random() * 10);
            }
            _this.img_name_r =
                rnd +
                    Date.parse(Date()) +
                    tempFilePaths.substr(tempFilePaths.lastIndexOf("."));
            // =======================================
            _this.validateForm.patchValue({
                certificate_lv_r: _this.oss_info.host + "/" + _this.oss_info.dir + _this.img_name_r
            });
            _this.show_img_r = window.URL.createObjectURL(file);
            _this.show_img_r = _this._d.bypassSecurityTrustUrl(_this.show_img_r);
            // console.log(this.show_img);
            // this.upload(file, this.img_name);
            return false;
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.getOssInfo();
        this.initForm();
        this.getOrganList();
        this.getLevel();
    };
    RegisterComponent.prototype.initForm = function () {
        this.validateForm = this.fb.group({
            user_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pwd: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            checkPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.confirmationValidator]],
            phoneNumberPrefix: ['+86'],
            phone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            code: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            identification: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            nation: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            sex: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            birthday: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            organization: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: [''],
            level: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            certificate_number: ['',],
            certificate_lv: [''],
            certificate: [''],
            user_type: [1],
            user_type_c: [false],
            user_type_r: [false],
            certificate_type_c: [''],
            certificate_number_c: [''],
            certificate_lv_c: [''],
            certificate_type_r: [''],
            certificate_number_r: [''],
            certificate_lv_r: [''],
            study_time: [null],
            first_teacher: [''],
        });
    };
    RegisterComponent.prototype.submitForm = function () {
        var _this = this;
        console.log(this.validateForm);
        for (var i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        if (this.validateForm.status == 'VALID') { //验证通过
            if (this.file) {
                this.upload(this.file, this.img_name);
            }
            if (this.file1) {
                this.upload(this.file1, this.img_name1);
            }
            if (this.file_c) {
                this.upload(this.file_c, this.img_name_c);
            }
            if (this.file_r) {
                this.upload(this.file_r, this.img_name_r);
            }
            //格式化表单数据
            var data = this.validateForm.value;
            console.log(data);
            // data.birthday = this.utilService.getDate(data.birthday);
            data.organization = data.organization[1];
            data.nation = data.nation.indexOf("族") == -1 ? data.nation + "族" : data.nation;
            data.certificate_number = data.certificate_number == "" ? "未填写" : data.certificate_number;
            data.user_type_c = data.user_type_c ? 1 : 0;
            data.user_type_r = data.user_type_r ? 1 : 0;
            // this.validateForm.patchValue({
            //   birthday: this.utilService.getDate(this.validateForm.value.birthday),
            //   organization: this.validateForm.value.organization[1],
            //   nation: this.validateForm.value.nation.indexOf("族") == -1 ? this.validateForm.value.nation + "族" : this.validateForm.value.nation,
            //   certificate_number: this.validateForm.value.certificate_number == "" ? "未填写" : this.validateForm.value.certificate_number,
            //   user_type_c: this.validateForm.value.user_type_c ? 1 : 0,
            //   user_type_r: this.validateForm.value.user_type_r ? 1 : 0
            // });
            // var data = this.validateForm.value;
            console.log(111);
            console.log(this.validateForm);
            this.httpService.post('register', data, function (res) {
                console.log(res);
                if (res.statusCode == 0) {
                    _this.router.navigate(['/registersuccess']);
                }
                else if (res.statusCode == 1) {
                    _this.toastService.showMessage("error", res.msg);
                }
                else {
                    if (res.msg == '验证码无效!' || res.msg == '验证码超时!') {
                        _this.toastService.showMessage("error", res.msg);
                    }
                    else {
                        _this.toastService.showMessage("error", '注册失败,检查信息是否完整');
                    }
                }
            });
        }
    };
    RegisterComponent.prototype.updateConfirmValidator = function () {
        var _this = this;
        /** wait for refresh value */
        Promise.resolve().then(function () { return _this.validateForm.controls.checkPassword.updateValueAndValidity(); });
    };
    RegisterComponent.prototype.getCaptcha = function (e) {
        var _this = this;
        e.preventDefault();
        console.log(this.validateForm);
        //30s冷却发送验证码按钮
        var count = 3;
        this.sendSmsActive = true;
        var time = window.setInterval(function () {
            _this.sendSmsText = count + "秒后再次发送";
            count--;
            if (count < 0) {
                window.clearInterval(time);
                _this.sendSmsActive = false;
                _this.sendSmsText = "获取验证码";
            }
        }, 1000);
        var data = {
            phone: this.validateForm.value.phone,
            type: 1 //获取忘记密码验证码
        };
        this.httpService.post('sendSMS', data, function (res) {
            console.log(res);
            _this.sendSmsTip = res.msg;
            if (res.statusCode != 0) {
                _this.hasPhoneNum = false;
            }
            else {
                _this.hasPhoneNum = true;
            }
        });
    };
    //获取所有组织机构
    RegisterComponent.prototype.getOrganList = function () {
        var _this = this;
        this.httpService.post('getOrgByCity', {}, function (res) {
            console.log(res);
            if (res.statusCode == 0 && res.data.length > 0) {
                _this.organizationList = res.data;
            }
        });
    };
    //获取棋力列表
    RegisterComponent.prototype.getLevel = function () {
        var _this = this;
        this.httpService.post('getLevel', {}, function (res) {
            console.log(res);
            if (res.statusCode == 0 && res.data.length > 0) {
                _this.levelOption = res.data;
            }
        });
    };
    //获取oss信息
    RegisterComponent.prototype.getOssInfo = function () {
        var _this = this;
        this.httpService.post('getOssAccount', {}, function (res) {
            console.log(res);
            _this.oss_info = res.data;
        });
    };
    //上传
    RegisterComponent.prototype.upload = function (file, img_name) {
        var request = new FormData();
        request.append("key", this.oss_info.dir + img_name);
        request.append("policy", this.oss_info.policy);
        request.append("OSSAccessKeyId", this.oss_info.accessid);
        request.append("success_action_status", "200");
        request.append("callback", this.oss_info.callback);
        request.append("Signature", this.oss_info.signature);
        request.append("file", file);
        console.log(request);
        this.httpService.postOss(this.oss_info.host, request, function (res) {
            console.log(res);
        });
    };
    RegisterComponent.prototype.uploadClick = function (e) {
        e.preventDefault();
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/page/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/page/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _providers_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _providers_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
            _providers_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] // 图片路径转换使用，使用见HMTL文件,防止xss
        ])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/page/registersuccess/registersuccess.component.css":
/*!********************************************************************!*\
  !*** ./src/app/page/registersuccess/registersuccess.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcmVnaXN0ZXJzdWNjZXNzL3JlZ2lzdGVyc3VjY2Vzcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/page/registersuccess/registersuccess.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/page/registersuccess/registersuccess.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"min-width: 1080px;\">\n  <div class=\"pageContainer\">\n    <h1 style=\"font-weight: bolder;\">注册完成</h1>\n    <img src=\"../../../assets/imgs/reigster.png\" class=\"successpic\">\n    <div style=\"text-align: left\" class=\"ken-text\">\n      <h2 nz-title>尊敬的用户:</h2>\n      <p nz-paragraph> 您已成为福建省围棋协会成员，欢迎登录参与赛事报名. </p>\n    </div>\n    <div style=\"margin: 50px 0 30px;\">\n      <button style=\"width: 200px;\" nz-button nzSize=\"large\" nzType=\"primary\" (click)=\"goLogin($event)\">去登录</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/page/registersuccess/registersuccess.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/page/registersuccess/registersuccess.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegistersuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistersuccessComponent", function() { return RegistersuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/util.service */ "./src/app/providers/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegistersuccessComponent = /** @class */ (function () {
    function RegistersuccessComponent(utilService, router) {
        this.utilService = utilService;
        this.router = router;
    }
    RegistersuccessComponent.prototype.ngOnInit = function () {
    };
    RegistersuccessComponent.prototype.goLogin = function (e) {
        this.utilService.LoginIsVisible = true;
        this.router.navigate(['/zhuye']);
    };
    RegistersuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registersuccess',
            template: __webpack_require__(/*! ./registersuccess.component.html */ "./src/app/page/registersuccess/registersuccess.component.html"),
            styles: [__webpack_require__(/*! ./registersuccess.component.css */ "./src/app/page/registersuccess/registersuccess.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegistersuccessComponent);
    return RegistersuccessComponent;
}());



/***/ }),

/***/ "./src/app/page/zhuye/zhuye.component.css":
/*!************************************************!*\
  !*** ./src/app/page/zhuye/zhuye.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[nz-icon] {\r\n    margin-right: 6px;\r\n    font-size: 24px;\r\n    vertical-align: middle;\r\n}\r\n\r\n.ken_enter_a {\r\n    text-align: center;\r\n    /* float: right; */\r\n    font-size: 12px;\r\n    background-color: #515151;\r\n    border-radius: 10px;\r\n    padding: 4px 10px;\r\n    width: 76px;\r\n    color: #ffffff;\r\n    line-height: 16px;\r\n    /* margin-right: 5px; */\r\n    margin: 0 auto;\r\n}\r\n\r\n.ken_enter_a a {\r\n    color: #ffffff;\r\n    line-height: 16px;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n}\r\n\r\n#bt1:hover, #bt2:hover {\r\n    cursor: pointer;\r\n    color: #e4031a;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS96aHV5ZS96aHV5ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcGFnZS96aHV5ZS96aHV5ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW256LWljb25dIHtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmtlbl9lbnRlcl9hIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8qIGZsb2F0OiByaWdodDsgKi9cclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTUxNTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICB3aWR0aDogNzZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDVweDsgKi9cclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ua2VuX2VudGVyX2EgYSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuI2J0MTpob3ZlciwgI2J0Mjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2U0MDMxYTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/page/zhuye/zhuye.component.html":
/*!*************************************************!*\
  !*** ./src/app/page/zhuye/zhuye.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"min-width: 1080px;\">\r\n    <!-- 新闻公告 -->\r\n    <div class=\"pageContainer\">\r\n        <div nz-row>\r\n            <div nz-col nzSpan=\"11\">\r\n                <div nz-row>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div style=\"text-align: left;\">\r\n                            <i nz-icon [nzIconfont]=\"'iconplay'\"></i>\r\n                            <span class=\"ken_title1\">热门新闻</span>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div style=\"text-align: right;\">\r\n                            <a routerLink=\"/newslist\">\r\n                                <i nz-icon [nzIconfont]=\"'icongengduo'\" style=\"font-size: 16px;\"></i>\r\n                                <span class=\"ken_title2\">更多</span></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div style=\"margin-top: 10px;\">\r\n                    <div nz-row *ngFor=\"let item of newsList\" style=\"padding: 2px 0\">\r\n                        <div nz-col nzSpan=\"18\">\r\n                            <div class=\"ken_title3\" id=\"bt1\" (click)=\"goNewsDetail(item.id)\">{{item.title}}</div>\r\n                        </div>\r\n                        <div nz-col nzSpan=\"6\">\r\n                            <div class=\"ken_title4\"><em>{{item.time}}</em></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div nz-col nzSpan=\"2\">\r\n                <nz-divider nzType=\"vertical\" style=\"height: 158px;\"></nz-divider>\r\n            </div>\r\n            <div nz-col nzSpan=\"11\">\r\n                <div nz-row>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div style=\"text-align: left;\">\r\n                            <i nz-icon [nzIconfont]=\"'iconplay'\"></i>\r\n                            <span class=\"ken_title1\">公告</span>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-col nzSpan=\"12\">\r\n                        <div style=\"text-align: right;\">\r\n                            <a routerLink=\"/newslist\">\r\n                                <i nz-icon [nzIconfont]=\"'icongengduo'\" style=\"font-size: 16px;\"></i>\r\n                                <span class=\"ken_title2\">更多</span></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div style=\"margin-top: 10px;\">\r\n                    <div nz-row *ngFor=\"let item of notifyList\" style=\"padding: 2px 0\">\r\n                        <div nz-col nzSpan=\"18\">\r\n                            <div class=\"ken_title3\" id=\"bt2\" (click)=\"goNewsDetail(item.id)\">{{item.title}}</div>\r\n                        </div>\r\n                        <div nz-col nzSpan=\"6\">\r\n                            <div class=\"ken_title4\"><em>{{item.time}}</em></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ken_emptyDiv\">\r\n    </div>\r\n    <!-- 赛事 -->\r\n    <div class=\"pageContainer\">\r\n        <div nz-row>\r\n            <div nz-col nzSpan=\"18\">\r\n                <div style=\"text-align: left;\">\r\n                    <i nz-icon [nzIconfont]=\"'iconplay'\"></i>\r\n                    <span class=\"ken_title1\">近期赛事</span>\r\n                </div>\r\n            </div>\r\n            <div nz-col nzSpan=\"6\">\r\n                <div style=\"text-align: right;\">\r\n                    <a routerLink=\"/matchlist\">\r\n                        <i nz-icon [nzIconfont]=\"'icongengduo'\" style=\"font-size: 16px;\"></i>\r\n                        <span class=\"ken_title2\">更多</span></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <nz-divider></nz-divider>\r\n        <div style=\"margin-top: 10px\">\r\n            <div nz-row nzGutter=\"24\">\r\n                <div nz-col nzSpan=\"6\" *ngFor=\"let item of recentMatchList1\">\r\n                    <div style=\"text-align:center;\">\r\n                        <div>\r\n                            <img src=\"{{item.img_url}}\" alt=\"\" style=\"width:200px;height:140px;\" />\r\n                        </div>\r\n                        <div style=\"text-align: center; margin: 10px auto 0;\">\r\n                            <span class=\"ken_title3\" style=\"width: 250px;display: inline-block\" nz-tooltip\r\n                                nzTitle=\"{{item.match_name}}\">{{item.match_name}}</span>\r\n                        </div>\r\n                        <div class=\"ken_enter_a\" style=\"margin-top: 10px;\">\r\n                            <a [routerLink]=\"['/matchdetail']\" [queryParams]=\"{match_id:item.id}\">赛事详情</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div style=\" margin-top: 10px\">\r\n            <div nz-row nzGutter=\"24\">\r\n                <div nz-col nzSpan=\"6\" *ngFor=\"let item of recentMatchList2\">\r\n                    <div style=\"text-align:center;\">\r\n                        <div>\r\n                            <img src=\"{{item.img_url}}\" alt=\"\" style=\"width:200px;height:140px;\" />\r\n                        </div>\r\n                        <div style=\"text-align: center; margin: 10px auto 0;\">\r\n                            <span class=\"ken_title3\" style=\"width: 250px;display: inline-block\" nz-tooltip\r\n                                nzTitle=\"{{item.match_name}}\">{{item.match_name}}</span>\r\n                        </div>\r\n                        <div class=\"ken_enter_a\" style=\"margin-top: 10px;\">\r\n                            <a [routerLink]=\"['/matchdetail']\" [queryParams]=\"{match_id:item.id}\">赛事详情</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/page/zhuye/zhuye.component.ts":
/*!***********************************************!*\
  !*** ./src/app/page/zhuye/zhuye.component.ts ***!
  \***********************************************/
/*! exports provided: ZhuyeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZhuyeComponent", function() { return ZhuyeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/http.service */ "./src/app/providers/http.service.ts");
/* harmony import */ var _providers_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/toast.service */ "./src/app/providers/toast.service.ts");
/* harmony import */ var _providers_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers/util.service */ "./src/app/providers/util.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");









var ZhuyeComponent = /** @class */ (function () {
    function ZhuyeComponent(_iconService, fb, router, httpService, toastService, utilService, _d // 图片路径转换使用，使用见HMTL文件,防止xss
    ) {
        this._iconService = _iconService;
        this.fb = fb;
        this.router = router;
        this.httpService = httpService;
        this.toastService = toastService;
        this.utilService = utilService;
        this._d = _d;
        // @ViewChild("adswiperChild") adswiperChild;
        this.newsList = [];
        this.notifyList = [];
        this.recentMatchList1 = [];
        this.recentMatchList2 = [];
        this._iconService.fetchFromIconfont({
            // scriptUrl: 'https://at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
            scriptUrl: 'https:////at.alicdn.com/t/font_1304347_v9bi6fabttp.js'
        });
    }
    ZhuyeComponent.prototype.ngOnInit = function () {
        this.init();
    };
    ZhuyeComponent.prototype.init = function () {
        this.getNewsAndNotify();
        this.getRecentMatch();
    };
    ZhuyeComponent.prototype.ngAfterViewInit = function () {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
    };
    ZhuyeComponent.prototype.ngOnDestroy = function () {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        console.log("zhuye destroy");
        // this.adswiperChild.adSwiper.destroy(true, true);
    };
    //首页获取n条新闻n条通知
    ZhuyeComponent.prototype.getNewsAndNotify = function () {
        var _this = this;
        this.httpService.post('getNewsAndNotify', {}, function (res) {
            console.log(res);
            var data = res.data;
            if (res.statusCode == 0) {
                for (var i = 0; i < data.news.length; i++) {
                    data.news[i].time = data.news[i].release_time.substr(0, 10);
                }
                for (var i = 0; i < data.notify.length; i++) {
                    data.notify[i].time = data.notify[i].release_time.substr(0, 10);
                }
                _this.newsList = data.news;
                _this.notifyList = data.notify;
            }
        });
    };
    //首页获取8条近期赛事
    ZhuyeComponent.prototype.getRecentMatch = function () {
        var _this = this;
        this.httpService.post('getRecentMatch', {}, function (res) {
            console.log(res);
            var data = res.data;
            _this.recentMatchList1.push(data[0], data[1], data[2], data[3]);
            _this.recentMatchList2.push(data[4], data[5], data[6], data[7]);
        });
    };
    ZhuyeComponent.prototype.goNewsDetail = function (id) {
        var navigationExtras = {
            queryParams: { 'news_id': id },
        };
        this.router.navigate(['/newsdetail'], navigationExtras);
    };
    ZhuyeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-zhuye',
            template: __webpack_require__(/*! ./zhuye.component.html */ "./src/app/page/zhuye/zhuye.component.html"),
            styles: [__webpack_require__(/*! ./zhuye.component.css */ "./src/app/page/zhuye/zhuye.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzIconService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _providers_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"],
            _providers_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
            _providers_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] // 图片路径转换使用，使用见HMTL文件,防止xss
        ])
    ], ZhuyeComponent);
    return ZhuyeComponent;
}());



/***/ }),

/***/ "./src/app/providers/http.service.ts":
/*!*******************************************!*\
  !*** ./src/app/providers/http.service.ts ***!
  \*******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../appConfig */ "./src/app/appConfig.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toast.service */ "./src/app/providers/toast.service.ts");





var HttpService = /** @class */ (function () {
    function HttpService(http, toastService) {
        var _this = this;
        this.http = http;
        this.toastService = toastService;
        this.webRootPath = _appConfig__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].webRootPath; //服务器根路径
        this.isLoadingData = false; //加载数据标志
        this.errorFn = function (err) {
            // this.isLoadingData = false;//关闭加载
            console.log("http错误");
            console.log(err);
            _this.toastService.showMessage("error", "数据加载错误,请检查网络");
        };
        this.ossErrorFn = function (err) {
            // this.isLoadingData = false;//关闭加载
            console.log("上传http错误");
            console.log(err);
            // this.toastService.showMessage("error", "连接超时，上传失败");
        };
        console.log('Hello HttpServiceProvider Provider');
    }
    //request请求
    HttpService.prototype.request = function (method, url, successFn, data, responseType) {
        var _this = this;
        if (method === void 0) { method = 'get'; }
        if (data === void 0) { data = null; }
        if (responseType === void 0) { responseType = 'json'; }
        this.http.request(method, url, {
            params: data,
            responseType: responseType,
        }).subscribe(
        //成功的方法
        successFn, 
        //调用错误
        function (err) {
            //隐藏加载
            // this.toastServiceProvider.hideLoding();
            console.log("http错误");
            console.log(err);
            _this.toastService.showMessage("error", "数据加载错误");
        }, 
        //完成
        function () {
            //隐藏加载
            // this.toastServiceProvider.hideLoding();
            console.log("http完成");
        });
    };
    // post请求
    HttpService.prototype.post = function (url, data, successFn, errorFn) {
        if (errorFn === void 0) { errorFn = this.errorFn; }
        // this.isLoadingData = true;//加载数据
        // var authKey = window.localStorage.getItem("authKey") ? JSON.parse(window.localStorage.getItem("authKey")) : '';
        // var sessionId = window.localStorage.getItem("sessionId") ? JSON.parse(window.localStorage.getItem("sessionId")) : '';
        // var userInfo = window.localStorage.getItem("userinfo") ? JSON.parse(window.localStorage.getItem("userinfo")) : '';
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            'Content-Type': 'application/json;charset=utf-8',
        });
        this.http.post(
        // "http://haha.cc",
        this.webRootPath + url, 
        // this.getWwwFormData(data),
        // JSON.stringify(data),
        data, {
            headers: header,
        }).subscribe(
        //成功的方法
        successFn, 
        //调用错误
        errorFn, 
        //完成
        function () {
            // this.isLoadingData = false;//关闭加载
            console.log("http完成");
        });
    };
    HttpService.prototype.postOss = function (url, data, successFn, errorFn) {
        if (errorFn === void 0) { errorFn = this.ossErrorFn; }
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', url, data, {
        // reportProgress: true
        });
        this.http.request(req)
            .subscribe(
        //成功的方法
        successFn, 
        //调用错误
        errorFn, 
        //完成
        function () {
            //隐藏加载
            // this.toastServiceProvider.hideLoding();
            console.log("http完成");
        });
    };
    //获取x-www-form-urlencoded格式的数据
    HttpService.prototype.getWwwFormData = function (data) {
        if (data == null) {
            return null;
        }
        var dataStr = "";
        for (var key in data) {
            dataStr += key + "=" + data[key] + "&";
        }
        dataStr = dataStr.substring(0, dataStr.length - 1);
        return dataStr;
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/providers/toast.service.ts":
/*!********************************************!*\
  !*** ./src/app/providers/toast.service.ts ***!
  \********************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");



var ToastService = /** @class */ (function () {
    function ToastService(_toast) {
        var _this = this;
        this._toast = _toast;
        this.showMessage = function (type, text) {
            _this._toast.create(type, text);
        };
        this.showInfo = function (text) {
            _this._toast.info(text);
        };
    }
    ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]])
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "./src/app/providers/util.service.ts":
/*!*******************************************!*\
  !*** ./src/app/providers/util.service.ts ***!
  \*******************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UtilService = /** @class */ (function () {
    function UtilService() {
        this.islogin = false; //登录标志
        this.LoginIsVisible = false; //登录窗开启关闭标志
    }
    /**
     * 封装localstorage
     */
    UtilService.prototype.getLS = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };
    UtilService.prototype.setLS = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    UtilService.prototype.delLS = function (key) {
        localStorage.removeItem(key);
    };
    /**
     * 时间日期格式化
     */
    //获取时间"年-月-日"格式
    UtilService.prototype.getDate = function (now) {
        if (now === void 0) { now = new Date(); }
        // var now = new Date(),
        var y = now.getFullYear();
        var m = now.getMonth() + 1;
        var d = now.getDate();
        return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d);
    };
    //获取时间"时:分:秒"格式
    UtilService.prototype.getTime = function (now) {
        if (now === void 0) { now = new Date(); }
        var h = now.getHours();
        var m = now.getMinutes();
        var s = now.getSeconds();
        return (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
    };
    //获取时间"年-月-日 时:分:秒"格式
    UtilService.prototype.getDateTime = function (now) {
        if (now === void 0) { now = new Date(); }
        var y = now.getFullYear();
        var mo = now.getMonth() + 1;
        var d = now.getDate();
        var h = now.getHours();
        var m = now.getMinutes();
        var s = now.getSeconds();
        return y + "-" + (mo < 10 ? "0" + mo : mo) + "-" + (d < 10 ? "0" + d : d) + " " + (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
    };
    UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UtilService);
    return UtilService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Administrator\Desktop\fjweiqixiehui\emberken1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map