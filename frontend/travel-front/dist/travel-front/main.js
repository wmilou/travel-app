"use strict";
(self["webpackChunktravel_front"] = self["webpackChunktravel_front"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _components_travel_list_travel_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/travel-list/travel-list.component */ 6304);
/* harmony import */ var _components_travel_page_travel_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/travel-page/travel-page.component */ 5493);
/* harmony import */ var _components_login_register_login_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login-register/login-register.component */ 2014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);






const routes = [{
  path: '',
  component: _components_travel_list_travel_list_component__WEBPACK_IMPORTED_MODULE_0__.TravelListComponent
}, {
  path: 'travel/',
  component: _components_travel_list_travel_list_component__WEBPACK_IMPORTED_MODULE_0__.TravelListComponent
}, {
  path: 'travel/view/:id',
  component: _components_travel_page_travel_page_component__WEBPACK_IMPORTED_MODULE_1__.TravelPageComponent
}, {
  path: 'travel/register',
  component: _components_login_register_login_register_component__WEBPACK_IMPORTED_MODULE_2__.LoginRegisterComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);




class AppComponent {
  constructor() {
    this.title = 'travel-front';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header")(1, "router-outlet")(2, "app-footer");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2162);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _components_travel_list_travel_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/travel-list/travel-list.component */ 6304);
/* harmony import */ var _components_travel_page_travel_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/travel-page/travel-page.component */ 5493);
/* harmony import */ var _components_login_register_login_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login-register/login-register.component */ 2014);
/* harmony import */ var _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/payment/payment.component */ 3253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6839);











class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _components_travel_list_travel_list_component__WEBPACK_IMPORTED_MODULE_4__.TravelListComponent, _components_travel_page_travel_page_component__WEBPACK_IMPORTED_MODULE_5__.TravelPageComponent, _components_login_register_login_register_component__WEBPACK_IMPORTED_MODULE_6__.LoginRegisterComponent, _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_7__.PaymentComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeModule]
  });
})();

/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 49,
  vars: 0,
  consts: [["id", "newsletter", 1, ""], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "inner-container", "d-flex", "align-center", "justify-content-center"], ["src", "https://123milhas.com/_next/image?url=%2Fillustrations%2Fnewsletter-robot.png&w=1920&q=75", "alt", ""], [1, "newsletter-form"], ["type", "text", "placeholder", "Nome"], ["type", "text", "placeholder", "Seu melhor E-mail"], [1, "bg-dark"], [1, "col-lg-4"], [1, "box-info"], [1, "head"], ["href", "#", 1, "navbar-brand", 2, "color", "#fff"], [1, "color-text-primary"], [1, "body"], [1, "box-categories"], [1, "box-contact"], [1, "fa", "fa-info-circle"], [1, "tsx_dados_telefoneDivulgacao_2"], [1, "tsx_dados_emailDivulgacao_2"], [1, "tsx_dados_razaoSocial_1"], [1, "tsx_dados_cnpj_1"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Inscreva-se para receber ofertas incr\u00EDveis");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7)(11, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Eu quero!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "footer", 9)(15, "div", 1)(16, "div", 2)(17, "div", 10)(18, "div", 11)(19, "div", 12)(20, "a", 13)(21, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "T");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "ravel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15)(25, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit ornare tellus, vitae sagittis sem. Nunc sed turpis tristique nisl gravida lobortis. In pharetra, orci in fringilla pretium, sapien odio venenatis mi, bibendum semper neque augue ut risus. Nullam non justo risus. Nam rutrum felis ut convallis interdum. In est nunc, semper vel tortor in, viverra pretium ligula. Nunc mattis tincidunt sem at faucibus. Vestibulum faucibus luctus lorem, eget tincidunt nunc molestie in. Aenean sagittis suscipit ligula id tincidunt.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10)(30, "div", 17)(31, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Informa\u00E7\u00F5es da Ag\u00EAncia");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Tel.: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "(11) 1111-1111 / 0800 111 1111");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "E-mail: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "reservas@travel.com.br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p")(43, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "TRAVEL VIAGENS E TURISMO LTDA");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "CNPJ: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "00.000.000/0000-00");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
  },
  styles: ["footer[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    padding: .5rem 0;\r\n}\r\nfooter[_ngcontent-%COMP%]   .box-info[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\nfooter[_ngcontent-%COMP%]   .box-info[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 33px;\r\n}\r\nfooter[_ngcontent-%COMP%]   .box-info[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .box-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    text-align: justify;\r\n    margin: 0;\r\n}\r\nfooter[_ngcontent-%COMP%]   .box-contact[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n}\r\nfooter[_ngcontent-%COMP%]   .box-contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 23px;\r\n}\r\nfooter[_ngcontent-%COMP%]   .box-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-bottom: 10px;\r\n}\r\n\r\n#newsletter[_ngcontent-%COMP%]{\r\n    background: linear-gradient(308.6deg, var(--color-primary) -7.94%,  var(--color-secondary) 79.38%);\r\n    padding: 2rem 0;\r\n}\r\n#newsletter[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]{\r\n    gap: 60px\r\n}\r\n\r\n#newsletter[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 15px;\r\n}\r\n\r\n#newsletter[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 26px;\r\n    color: #fff;\r\n    margin: 0;\r\n}\r\n#newsletter[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n#newsletter[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    border: none;\r\n    border-radius: 10px;\r\n    padding: 10px 15px;\r\n}\r\n\r\n#newsletter[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background: none;\r\n    border: 1px solid #fff;\r\n    border-radius: 10px;\r\n    color: #fff;\r\n    padding: 10px 20px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtHQUFrRztJQUNsRyxlQUFlO0FBQ25CO0FBQ0E7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVye1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAwO1xyXG59XHJcbmZvb3RlciAuYm94LWluZm97XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5mb290ZXIgLmJveC1pbmZvIC5oZWFkIGF7XHJcbiAgICBmb250LXNpemU6IDMzcHg7XHJcbn1cclxuZm9vdGVyIC5ib3gtaW5mbyAuYm9keSBwLFxyXG5mb290ZXIgLmJveC1jb250YWN0IHB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbmZvb3RlciAuYm94LWNvbnRhY3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbmZvb3RlciAuYm94LWNvbnRhY3QgaDJ7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuZm9vdGVyIC5ib3gtY29udGFjdCBwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuI25ld3NsZXR0ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzA4LjZkZWcsIHZhcigtLWNvbG9yLXByaW1hcnkpIC03Ljk0JSwgIHZhcigtLWNvbG9yLXNlY29uZGFyeSkgNzkuMzglKTtcclxuICAgIHBhZGRpbmc6IDJyZW0gMDtcclxufVxyXG4jbmV3c2xldHRlciAuaW5uZXItY29udGFpbmVye1xyXG4gICAgZ2FwOiA2MHB4XHJcbn1cclxuXHJcbiNuZXdzbGV0dGVyIC5pbm5lci1jb250YWluZXIgLm5ld3NsZXR0ZXItZm9ybXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAxNXB4O1xyXG59XHJcblxyXG4jbmV3c2xldHRlciAuaW5uZXItY29udGFpbmVyIC5uZXdzbGV0dGVyLWZvcm0gcHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbiNuZXdzbGV0dGVyIC5uZXdzbGV0dGVyLWZvcm0gZm9ybXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcbiNuZXdzbGV0dGVyIC5uZXdzbGV0dGVyLWZvcm0gZm9ybSBpbnB1dHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbn1cclxuXHJcbiNuZXdzbGV0dGVyIC5uZXdzbGV0dGVyLWZvcm0gZm9ybSBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 2162);




const _c0 = function () {
  return ["travel", "register"];
};
class HeaderComponent {
  constructor() {
    this.faPlane = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faPlane;
    this.faCircleUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCircleUser;
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)();
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 67,
  vars: 4,
  consts: [[1, "navbar", "navbar-expand-lg", "bg-dark"], [1, "container"], ["href", "#", 1, "navbar-brand", 2, "color", "#fff"], [1, "color-text-primary"], [3, "icon"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "user-role"], [1, "fidelidade"], ["height", "800px", "width", "800px", "version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 291.764 291.764", 0, "xml", "space", "preserve"], ["d", "M145.882,0c80.573,0,145.882,65.319,145.882,145.882s-65.31,145.882-145.882,145.882\n                      S0,226.446,0,145.882S65.31,0,145.882,0z", 2, "fill", "#EFC75E"], ["d", "M145.882,27.353c-65.465,0-118.529,53.065-118.529,118.529s53.065,118.529,118.529,118.529\n                      s118.529-53.065,118.529-118.529S211.347,27.353,145.882,27.353z M145.882,246.176c-55.39,0-100.294-44.904-100.294-100.294\n                      S90.493,45.588,145.882,45.588s100.294,44.904,100.294,100.294S201.281,246.176,145.882,246.176z M158.009,138.269\n                      c-5.452-2.289-25.493-5.452-25.493-14.214c0-6.464,7.495-8.334,11.99-8.334c4.094,0,8.999,1.295,11.589,3.875\n                      c1.641,1.577,2.316,2.726,2.854,4.313c0.684,1.869,1.094,3.875,3.684,3.875h13.357c3.136,0,3.957-0.574,3.957-4.021\n                      c0-14.789-11.589-23.122-24.809-25.994V86.28c0-2.58-0.821-4.167-3.957-4.167h-10.64c-3.136,0-3.957,1.577-3.957,4.167v11.051\n                      c-14.178,2.726-26.031,11.634-26.031,27.718c0,18.235,12.683,23.979,26.441,28.566c11.589,3.884,23.724,4.021,23.724,12.063\n                      s-5.99,9.765-13.357,9.765c-5.051,0-10.631-1.304-13.366-4.741c-1.769-2.152-2.453-4.021-2.58-5.89\n                      c-0.274-3.592-1.769-4.021-4.914-4.021H113.28c-3.136,0-3.957,0.729-3.957,4.021c0,16.366,13.093,26.286,27.262,29.441v11.206\n                      c0,2.58,0.821,4.167,3.957,4.167h10.64c3.136,0,3.957-1.586,3.957-4.167v-10.905c16.084-2.453,27.125-12.209,27.125-29.441\n                      C182.28,145.591,167.829,141.424,158.009,138.269z", 2, "fill", "#CC9933"], [1, "separator"], [1, "questions"], [1, "fa-solid", "fa-circle-question"], [1, "user"], [3, "routerLink"], ["id", "categories"], [1, "navbar", "navbar-expand-lg", "bg-body-tertiary"], [1, "nav-item"], ["aria-current", "page", "href", "#", 1, "nav-link", "active"], ["href", "#", 1, "nav-link"], [1, "nav-item", "dropdown"], ["href", "#", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], [1, "dropdown-divider"], [1, "nav-link", "disabled"], ["role", "search", 1, "d-flex"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "me-2"], ["type", "submit", 1, "btn", "btn-outline-success"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header")(1, "nav", 0)(2, "div", 1)(3, "a", 2)(4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "T");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "ravel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "fa-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ul", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9)(13, "ul")(14, "li", 10)(15, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Travel");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "svg", 11)(18, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "path", 12)(20, "path", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Fidelidade");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "li", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 15)(25, "a");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Ajuda ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li", 17)(29, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "fa-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "section", 19)(32, "nav", 20)(33, "div", 1)(34, "div", 7)(35, "ul", 8)(36, "li", 21)(37, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li", 21)(40, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Viagens");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li", 21)(43, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Link");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li", 24)(46, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Dropdown ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ul", 26)(49, "li")(50, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "li")(53, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Another action");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "hr", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "li")(58, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Something else here");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li", 21)(61, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Disabled");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "form", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faPlane);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faCircleUser);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent],
  styles: ["header[_ngcontent-%COMP%]{\r\n    position: sticky;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 9999;\r\n    box-shadow: 0 0px 15px 5px rgba(0,0,0,.3);\r\n\r\n}\r\n.navbar-brand[_ngcontent-%COMP%]{\r\n    font-size: 28px;\r\n    font-weight: 400;\r\n}\r\n\r\n.navbar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-weight: 700;\r\n}\r\n.user-role[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    padding: 0;\r\n    list-style: none;\r\n    margin: 0;\r\n}\r\n.user[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n}\r\n.user[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n}\r\n\r\n\r\n.topbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    gap: 1.5rem;\r\n\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.topbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: #212529\r\n}\r\n.user-role[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 40px;\r\n}\r\n.user-role[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 10px;\r\n}\r\n.user-role[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n    color: #fff;\r\n    margin: 0;\r\n}\r\n\r\n.questions[_ngcontent-%COMP%]{\r\n    color: #fff\r\n}\r\n\r\n.separator[_ngcontent-%COMP%]{\r\n    width: 2px;\r\n    height: 35px;\r\n    background: #fff;\r\n}\r\n.user-role[_ngcontent-%COMP%]   .fidelidade[_ngcontent-%COMP%]{\r\n    gap: 2px;\r\n}\r\n.fidelidade[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n}\r\n.fidelidade[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{\r\n    background: linear-gradient(308.6deg, var(--color-primary) -7.94%,  var(--color-secondary) 79.38%);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    font-weight: 600;\r\n}\r\n\r\n.fidelidade[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{\r\n    width: 20px;\r\n    height: auto;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2IseUNBQXlDOztBQUU3QztBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsV0FBVzs7SUFFWCxVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxRQUFRO0FBQ1o7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0dBQWtHO0lBQ2xHLDZCQUE2QjtJQUM3QixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJ7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICBib3gtc2hhZG93OiAwIDBweCAxNXB4IDVweCByZ2JhKDAsMCwwLC4zKTtcclxuXHJcbn1cclxuLm5hdmJhci1icmFuZHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQgc3BhbntcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLnVzZXItcm9sZSB1bHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi51c2Vye1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi51c2VyIGZhLWljb257XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tICovXHJcbi50b3BiYXIgdWx7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgZ2FwOiAxLjVyZW07XHJcblxyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnRvcGJhciB1bCBsaSBhe1xyXG4gICAgY29sb3I6ICMyMTI1MjlcclxufVxyXG4udXNlci1yb2xlIHVse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogNDBweDtcclxufVxyXG4udXNlci1yb2xlIGxpe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG4udXNlci1yb2xlIHB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnF1ZXN0aW9uc3tcclxuICAgIGNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi5zZXBhcmF0b3J7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4udXNlci1yb2xlIC5maWRlbGlkYWRle1xyXG4gICAgZ2FwOiAycHg7XHJcbn1cclxuLmZpZGVsaWRhZGUgc3BhbntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5maWRlbGlkYWRlIHNwYW46Zmlyc3QtY2hpbGR7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzA4LjZkZWcsIHZhcigtLWNvbG9yLXByaW1hcnkpIC03Ljk0JSwgIHZhcigtLWNvbG9yLXNlY29uZGFyeSkgNzkuMzglKTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmZpZGVsaWRhZGUgc3Zne1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 2014:
/*!***********************************************************************!*\
  !*** ./src/app/components/login-register/login-register.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRegisterComponent": () => (/* binding */ LoginRegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6477);


function LoginRegisterComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "form")(5, "div", 6)(6, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Senha");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11)(14, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginRegisterComponent_section_0_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.changeView("register"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "N\u00E3o possui um cadastro? Clique aqui!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Entrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
  }
}
function LoginRegisterComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 14)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "form")(5, "div", 6)(6, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6)(14, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Senha");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6)(18, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Telefone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6)(22, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "CPF/CNPJ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11)(26, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginRegisterComponent_section_1_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.changeView("login"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "J\u00E1 possui um cadastro? Clique aqui!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Cadastrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
  }
}
class LoginRegisterComponent {
  constructor() {
    this.currentPage = 'login';
  }
  changeView(page) {
    this.currentPage = page;
  }
}
LoginRegisterComponent.ɵfac = function LoginRegisterComponent_Factory(t) {
  return new (t || LoginRegisterComponent)();
};
LoginRegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoginRegisterComponent,
  selectors: [["app-login-register"]],
  decls: 2,
  vars: 2,
  consts: [["id", "login", "class", "pt-5 pb-5", 4, "ngIf"], ["id", "register", "class", "pt-5 pb-5", 4, "ngIf"], ["id", "login", 1, "pt-5", "pb-5"], [1, "container"], [1, "row", "d-flex", "align-center", "justify-content-center"], [1, "col-lg-8", "d-flex", "align-center", "justify-content-center"], [1, "mb-3"], ["for", "exampleInputEmail1", 1, "form-label"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", 1, "form-control"], ["for", "exampleInputPassword1", 1, "form-label"], ["type", "password", "id", "exampleInputPassword1", 1, "form-control"], [1, "d-flex", "align-center", "justify-content-center", "column-gap-3"], [1, "change-view", 3, "click"], ["type", "submit", 1, "btn", "btn-primary"], ["id", "register", 1, "pt-5", "pb-5"], ["for", "name", 1, "form-label"], ["type", "text", "id", "name", 1, "form-control"], ["for", "email1", 1, "form-label"], ["type", "email", "id", "email", "aria-describedby", "emailHelp", 1, "form-control"], ["for", "password", 1, "form-label"], ["type", "password", "id", "password", 1, "form-control"], ["for", "telefone", 1, "form-label"], ["type", "tel", "id", "telefone", 1, "form-control"], ["for", "cadastro", 1, "form-label"], ["type", "text", "id", "cadastro", 1, "form-control"]],
  template: function LoginRegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginRegisterComponent_section_0_Template, 18, 0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginRegisterComponent_section_1_Template, 30, 0, "section", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPage == "login");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPage == "register");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: ["button.change-view[_ngcontent-%COMP%]{\r\n    background: none;\r\n    border: none;\r\n    border-bottom: 2px solid var(--color-primary);\r\n    color: var(--color-primary);\r\n    font-size: 12px;\r\n\r\n}\r\n\r\n#login[_ngcontent-%COMP%], #register[_ngcontent-%COMP%]{\r\n    background-color: rgb(248, 246, 247);\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1yZWdpc3Rlci9sb2dpbi1yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiw2Q0FBNkM7SUFDN0MsMkJBQTJCO0lBQzNCLGVBQWU7O0FBRW5COztBQUVBOztJQUVJLG9DQUFvQztBQUN4QyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbi5jaGFuZ2Utdmlld3tcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG59XHJcblxyXG4jbG9naW4sXHJcbiNyZWdpc3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDI0NiwgMjQ3KTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 3253:
/*!*********************************************************!*\
  !*** ./src/app/components/payment/payment.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentComponent": () => (/* binding */ PaymentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class PaymentComponent {}
PaymentComponent.ɵfac = function PaymentComponent_Factory(t) {
  return new (t || PaymentComponent)();
};
PaymentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PaymentComponent,
  selectors: [["app-payment"]],
  decls: 2,
  vars: 0,
  template: function PaymentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "payment works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 6304:
/*!*****************************************************************!*\
  !*** ./src/app/components/travel-list/travel-list.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravelListComponent": () => (/* binding */ TravelListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);



const _c0 = function (a2) {
  return ["travel", "view", a2];
};
function TravelListComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18)(5, "div", 19)(6, "p", 20)(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "A partir de ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 21)(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "R$ 400");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 22)(15, "div")(16, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Saiba mais");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const travel_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", travel_r1.imagem_1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](travel_r1.local);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, travel_r1.id));
  }
}
class TravelListComponent {
  constructor() {
    this.travels = [{
      id: 0,
      local: 'Casa do André',
      vagas: 8,
      local_partida: 'Universidade Adventista de São Paulo',
      hora_partida: '23:00',
      hora_volta: 'Sem hora',
      imagem_1: 'https://123milhas.com/_next/image?url=https%3A%2F%2F123milhas.com%2Fimg%2Ftravel-packages%2Frio-1.jpg&w=1920&q=100',
      imagem_2: 'Lorem ipsum',
      imagem_3: 'Lorem ipsum'
    }, {
      id: 1,
      local: 'Lorem ipsum',
      vagas: 1,
      local_partida: 'Lorem ipsum',
      hora_partida: 'Lorem ipsum',
      hora_volta: 'Lorem ipsum',
      imagem_1: 'https://123milhas.com/_next/image?url=https%3A%2F%2F123milhas.com%2Fimg%2Ftravel-packages%2Frio-1.jpg&w=1920&q=100',
      imagem_2: 'Lorem ipsum',
      imagem_3: 'Lorem ipsum'
    }, {
      id: 2,
      local: 'Lorem ipsum',
      vagas: 6,
      local_partida: 'Lorem ipsum',
      hora_partida: 'Lorem ipsum',
      hora_volta: 'Lorem ipsum',
      imagem_1: 'https://123milhas.com/_next/image?url=https%3A%2F%2F123milhas.com%2Fimg%2Ftravel-packages%2Frio-1.jpg&w=1920&q=100',
      imagem_2: 'Lorem ipsum',
      imagem_3: 'Lorem ipsum'
    }, {
      id: 3,
      local: 'Lorem ipsum',
      vagas: 7,
      local_partida: 'Lorem ipsum',
      hora_partida: 'Lorem ipsum',
      hora_volta: 'Lorem ipsum',
      imagem_1: 'https://123milhas.com/_next/image?url=https%3A%2F%2F123milhas.com%2Fimg%2Ftravel-packages%2Frio-1.jpg&w=1920&q=100',
      imagem_2: 'Lorem ipsum',
      imagem_3: 'Lorem ipsum'
    }, {
      id: 4,
      local: 'Lorem ipsum',
      vagas: 7,
      local_partida: 'Lorem ipsum',
      hora_partida: 'Lorem ipsum',
      hora_volta: 'Lorem ipsum',
      imagem_1: 'https://123milhas.com/_next/image?url=https%3A%2F%2F123milhas.com%2Fimg%2Ftravel-packages%2Frio-1.jpg&w=1920&q=100',
      imagem_2: 'Lorem ipsum',
      imagem_3: 'Lorem ipsum'
    }, {
      id: 5,
      local: 'Lorem ipsum',
      vagas: 7,
      local_partida: 'Lorem ipsum',
      hora_partida: 'Lorem ipsum',
      hora_volta: 'Lorem ipsum',
      imagem_1: 'https://123milhas.com/_next/image?url=https%3A%2F%2F123milhas.com%2Fimg%2Ftravel-packages%2Frio-1.jpg&w=1920&q=100',
      imagem_2: 'Lorem ipsum',
      imagem_3: 'Lorem ipsum'
    }, {
      id: 6,
      local: 'Lorem ipsum',
      vagas: 7,
      local_partida: 'Lorem ipsum',
      hora_partida: 'Lorem ipsum',
      hora_volta: 'Lorem ipsum',
      imagem_1: 'https://123milhas.com/_next/image?url=https%3A%2F%2F123milhas.com%2Fimg%2Ftravel-packages%2Frio-1.jpg&w=1920&q=100',
      imagem_2: 'Lorem ipsum',
      imagem_3: 'Lorem ipsum'
    }, {
      id: 7,
      local: 'Lorem ipsum',
      vagas: 7,
      local_partida: 'Lorem ipsum',
      hora_partida: 'Lorem ipsum',
      hora_volta: 'Lorem ipsum',
      imagem_1: 'https://123milhas.com/_next/image?url=https%3A%2F%2F123milhas.com%2Fimg%2Ftravel-packages%2Frio-1.jpg&w=1920&q=100',
      imagem_2: 'Lorem ipsum',
      imagem_3: 'Lorem ipsum'
    }];
  }
  ngOnInit() {
    this.travels.push();
  }
}
TravelListComponent.ɵfac = function TravelListComponent_Factory(t) {
  return new (t || TravelListComponent)();
};
TravelListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TravelListComponent,
  selectors: [["app-travel-list"]],
  decls: 20,
  vars: 1,
  consts: [["id", "travel-list", 1, "pt-5"], [1, "container"], [1, "row", "row-gap-4"], ["class", "col-lg-3", 4, "ngFor", "ngForOf"], [1, "row", "mt-5", "mb-5"], [1, "col-lg-12"], [1, "separator", "d-flex", "align-center", "justify-content-center"], [1, "btn"], ["id", "connection", 1, "mb-5"], [1, "row"], [1, "col-12"], [1, "inner-container", "d-flex", "align-center"], [1, "title", "h2"], [1, "btn-conhecer"], [1, "col-lg-3"], [1, "card"], [1, "card--image"], ["alt", "", 3, "src"], [1, "card--body"], [1, "blockquote", "mb-0"], [1, "h5"], [1, "h4"], [1, "router-container", "d-flex", "align-center", "justify-content-center", "mt-2", "mb-2"], [1, "btn", "btn-light", 3, "routerLink"]],
  template: function TravelListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TravelListComponent_div_3_Template, 18, 5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ver todos os destinos");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 8)(10, "div", 1)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Traveller");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Conhe\u00E7a nossa plataforma de conte\u00FAdo sobre viagens");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Quero conhecer!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.travels);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: [".card[_ngcontent-%COMP%]{\r\n    border-radius: 25px;\r\n    box-shadow: 0 0px 15px 0px rgba(0,0,0,.2);\r\n    overflow: hidden;\r\n\r\n    position: relative;\r\n    height: 300px;\r\n    transition: all .3s ease-in-out;\r\n    cursor: pointer;\r\n}\r\n.card[_ngcontent-%COMP%]:hover{\r\n    transform: scale(1.05);\r\n}\r\n.card[_ngcontent-%COMP%]::before{\r\n    content: \"\";\r\n    background-image: linear-gradient(360deg, rgba(0, 0, 0, 0.8) -0.08%, rgba(0, 0, 0, 0) 100.96%);\r\n    mix-blend-mode: multiply;\r\n    width: 100%;\r\n    height: 100%;\r\n    pointer-events: none;\r\n    border-radius: 1rem;\r\n    position: absolute;\r\n}\r\n\r\n.card--image[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.card--image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n\r\n    object-fit: cover;\r\n}\r\n\r\n.card--body[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.card--body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n\r\n.card--body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    background: none;\r\n    border-radius: 35px;\r\n    color: #fff;\r\n    padding: 5px 30px 5px;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    transition: all .3s ease-in-out;\r\n}\r\n\r\n.card--body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    background: #fff;\r\n    border-radius: 35px;\r\n    color: var(--bs-dark-rgb);\r\n    padding: 5px 30px 5px;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n}\r\n\r\n.separator[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\r\n    border: 2px solid var(--color-primary);\r\n    color: var(--color-primary);\r\n    border-radius: 35px;\r\n    font-size: 18px;\r\n    text-transform: uppercase;\r\n    transition: all .3s ease-in-out;\r\n}\r\n\r\n.separator[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{\r\n    border: 2px solid var(--color-primary);\r\n    background: var(--color-primary);\r\n    color: #fff;\r\n}\r\n\r\n#connection[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]{\r\n    background: #000;\r\n    border-radius: 10px;\r\n    padding: 15px 65px;\r\n\r\n    justify-content: space-between;\r\n}\r\n\r\n#connection[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    color: #fff;\r\n    font-size: 18px;\r\n    display: flex;\r\n    align-items: center; \r\n}\r\n\r\n#connection[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]   p.h2[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    background: -webkit-linear-gradient(90deg, #eee, var(--color-primary));\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n#connection[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background: linear-gradient(308.6deg, var(--color-primary) -7.94%,  var(--color-secondary) 79.38%);\r\n    border: none;\r\n    border-radius: 20px;\r\n    width: 20%;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90cmF2ZWwtbGlzdC90cmF2ZWwtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6QyxnQkFBZ0I7O0lBRWhCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLDhGQUE4RjtJQUM5Rix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVzs7SUFFWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsZ0NBQWdDO0lBQ2hDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCOztJQUVsQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNFQUFzRTtJQUN0RSw2QkFBNkI7SUFDN0Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksa0dBQWtHO0lBQ2xHLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsVUFBVTs7QUFFZCIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMHB4IDE1cHggMHB4IHJnYmEoMCwwLDAsLjIpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY2FyZDpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuLmNhcmQ6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCByZ2JhKDAsIDAsIDAsIDAuOCkgLTAuMDglLCByZ2JhKDAsIDAsIDAsIDApIDEwMC45NiUpO1xyXG4gICAgbWl4LWJsZW5kLW1vZGU6IG11bHRpcGx5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5jYXJkLS1pbWFnZXtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZC0taW1hZ2UgaW1ne1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5jYXJkLS1ib2R5e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmNhcmQtLWJvZHkgcHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC0tYm9keSBhe1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDVweCAzMHB4IDVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uY2FyZC0tYm9keSBhOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tYnMtZGFyay1yZ2IpO1xyXG4gICAgcGFkZGluZzogNXB4IDMwcHggNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLnNlcGFyYXRvciAuYnRue1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5zZXBhcmF0b3IgLmJ0bjpob3ZlcntcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuI2Nvbm5lY3Rpb24gLmlubmVyLWNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTVweCA2NXB4O1xyXG5cclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuI2Nvbm5lY3Rpb24gLmlubmVyLWNvbnRhaW5lciBwe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbn1cclxuXHJcbiNjb25uZWN0aW9uIC5pbm5lci1jb250YWluZXIgcC5oMntcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZWVlLCB2YXIoLS1jb2xvci1wcmltYXJ5KSk7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuI2Nvbm5lY3Rpb24gLmlubmVyLWNvbnRhaW5lciBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzA4LjZkZWcsIHZhcigtLWNvbG9yLXByaW1hcnkpIC03Ljk0JSwgIHZhcigtLWNvbG9yLXNlY29uZGFyeSkgNzkuMzglKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB3aWR0aDogMjAlO1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 5493:
/*!*****************************************************************!*\
  !*** ./src/app/components/travel-page/travel-page.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravelPageComponent": () => (/* binding */ TravelPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class TravelPageComponent {
  constructor() {
    this.travelDetails = {
      id: 0,
      local: '',
      vagas: 0,
      local_partida: '',
      hora_partida: '',
      hora_volta: '',
      imagem_1: '',
      imagem_2: '',
      imagem_3: ''
    };
  }
}
TravelPageComponent.ɵfac = function TravelPageComponent_Factory(t) {
  return new (t || TravelPageComponent)();
};
TravelPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TravelPageComponent,
  selectors: [["app-travel-page"]],
  decls: 37,
  vars: 0,
  consts: [["id", "travel-page", 1, "pt-4", "pb-4"], [1, "container"], [1, "row"], [1, "col-lg-6"], [1, "inner-container"], [1, "travel-info"], [1, "box", "box--partida"], [1, "icon"], [1, "fa-regular", "fa-circle"], [1, "title"], [1, "box", "box--destino"], [1, "fa-solid", "fa-location-dot"], [1, "dates"], [1, "box", "box-date-ida"], [1, "box", "box-date-volta"], ["src", "https://placehold.co/600x400", "alt", ""]],
  template: function TravelPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nome da viagem");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Partida");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p")(14, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Campinas, Vira os copo");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10)(17, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Destino");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p")(22, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Campinas, Vira os copo");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12)(25, "div", 13)(26, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Ida");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "sex, 17 de Jun. 12h");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14)(31, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Ida");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "sex, 17 de Jun. 12h");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  styles: ["#travel-page[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]{\r\n    background: var(--color-primary);\r\n    padding: 2rem 1rem;\r\n}\r\n\r\n#travel-page[_ngcontent-%COMP%]   .inner-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n\r\n.travel-info[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n#travel-page[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{\r\n    background: #fff;\r\n    padding: 15px 6rem;\r\n    border-radius: 20px;\r\n    position: relative;\r\n}\r\n#travel-page[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n}\r\n#travel-page[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{\r\n    font-size: 25px;\r\n}\r\n\r\n#travel-page[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 40px;\r\n    transform: translate(0, -50%);\r\n    font-size: 28px;\r\n}\r\n\r\n#travel-page[_ngcontent-%COMP%]   .dates[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 30px;\r\n}\r\n\r\n#travel-page[_ngcontent-%COMP%]   .dates[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{\r\n    padding: 15px 3rem;\r\n    width: 50%;\r\n}\r\n\r\n#travel-page[_ngcontent-%COMP%]   .dates[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    font-size: 12px;\r\n}\r\n\r\n#travel-page[_ngcontent-%COMP%]   .dates[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{\r\n    font-size: 18px;\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90cmF2ZWwtcGFnZS90cmF2ZWwtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksU0FBUztJQUNULGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiI3RyYXZlbC1wYWdlIC5pbm5lci1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcclxufVxyXG5cclxuI3RyYXZlbC1wYWdlIC5pbm5lci1jb250YWluZXIgaDJ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRyYXZlbC1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4jdHJhdmVsLXBhZ2UgLmJveHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDZyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiN0cmF2ZWwtcGFnZSAuYm94IHB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuI3RyYXZlbC1wYWdlIC5ib3ggcDpsYXN0LWNoaWxke1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4jdHJhdmVsLXBhZ2UgLmJveCAuaWNvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNDBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcblxyXG4jdHJhdmVsLXBhZ2UgLmRhdGVze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMzBweDtcclxufVxyXG5cclxuI3RyYXZlbC1wYWdlIC5kYXRlcyAuYm94e1xyXG4gICAgcGFkZGluZzogMTVweCAzcmVtO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuI3RyYXZlbC1wYWdlIC5kYXRlcyAuYm94IHB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbiN0cmF2ZWwtcGFnZSAuZGF0ZXMgLmJveCBwOmxhc3QtY2hpbGR7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map