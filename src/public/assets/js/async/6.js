(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/RoutesComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/RoutesComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _repositories_RepositoryFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../repositories/RepositoryFactory */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/RepositoryFactory.js");
/* harmony import */ var _helper_components_TabsComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helper-components/TabsComponent */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue");
/* harmony import */ var _helper_components_TabComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helper-components/TabComponent */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabComponent.vue");
/* harmony import */ var _Route_EditPermissionsComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Route/EditPermissionsComponent */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/EditPermissionsComponent.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var RouteRepository = _repositories_RepositoryFactory__WEBPACK_IMPORTED_MODULE_1__["RepositoryFactory"].get('route');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "RoutesComponent",
  components: {
    EditPermissionsComponent: _Route_EditPermissionsComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
    TabComponent: _helper_components_TabComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
    TabsComponent: _helper_components_TabsComponent__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      routes: [],
      currentRoute: {}
    };
  },
  created: function created() {
    this.getRoutes();
    this.getAcitvatedRoutes();
  },
  methods: {
    getRoutes: function () {
      var _getRoutes = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.isLoading = true;
                _context.next = 3;
                return RouteRepository.get();

              case 3:
                _ref = _context.sent;
                data = _ref.data;
                this.isLoading = false;
                this.routes = data;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getRoutes() {
        return _getRoutes.apply(this, arguments);
      }

      return getRoutes;
    }(),
    getAcitvatedRoutes: function () {
      var _getAcitvatedRoutes = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.isLoading = true;
                _context2.next = 3;
                return RouteRepository.getActivated();

              case 3:
                _ref2 = _context2.sent;
                data = _ref2.data;
                this.isLoading = false;
                this.activatedRoutes = data;

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getAcitvatedRoutes() {
        return _getAcitvatedRoutes.apply(this, arguments);
      }

      return getAcitvatedRoutes;
    }(),
    setCurrentRoute: function setCurrentRoute(route) {
      this.currentRoute = route;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TabComponent",
  props: {
    name: {
      required: true
    },
    selected: {
      "default": false
    },
    setMlAuto: {
      "default": false
    }
  },
  data: function data() {
    return {
      isActive: false
    };
  },
  computed: {
    href: function href() {
      return '#' + this.name.toLowerCase().replace(/ /g, '-');
    }
  },
  mounted: function mounted() {
    this.isActive = this.selected;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TabsComponent",
  data: function data() {
    return {
      tabs: []
    };
  },
  created: function created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab: function selectTab(selectedTab) {
      this.tabs.forEach(function (tab) {
        tab.isActive = tab.name === selectedTab.name;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue?vue&type=style&index=0&id=539fbe22&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue?vue&type=style&index=0&id=539fbe22&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.nav-item .nav-link[data-v-539fbe22] {\n    cursor: pointer;\n}\n.nav-tabs-block .nav-link[data-v-539fbe22]:focus, .nav-tabs-block .nav-link[data-v-539fbe22]:hover {\n    cursor: pointer;\n    color: #42a5f5;\n    background-color: transparent;\n    border-color: transparent;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue?vue&type=style&index=0&id=539fbe22&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue?vue&type=style&index=0&id=539fbe22&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TabsComponent.vue?vue&type=style&index=0&id=539fbe22&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue?vue&type=style&index=0&id=539fbe22&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/RoutesComponent.vue?vue&type=template&id=2af44288&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/RoutesComponent.vue?vue&type=template&id=2af44288& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "content" },
    [
      _c(
        "div",
        { staticClass: "block" },
        [
          _c(
            "tabs-component",
            [
              _c(
                "tab-component",
                { attrs: { name: "All routes", selected: true } },
                [
                  _c(
                    "table",
                    { staticClass: "table table-striped table-vcenter" },
                    [
                      _c("thead", [
                        _c("tr", [
                          _c(
                            "th",
                            {
                              staticClass: "text-center",
                              staticStyle: { width: "50px" }
                            },
                            [_vm._v("#")]
                          ),
                          _vm._v(" "),
                          _c("th", [_vm._v("URI")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("ACTION/NAME")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("ACTION/METHOD")]),
                          _vm._v(" "),
                          _c(
                            "th",
                            {
                              staticClass: "text-center",
                              staticStyle: { width: "100px" }
                            },
                            [_vm._v("Actions")]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.routes, function(route, key) {
                          return _c("tr", [
                            _c(
                              "th",
                              {
                                staticClass: "text-center",
                                attrs: { scope: "row" }
                              },
                              [_vm._v(_vm._s(key + 1))]
                            ),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(route.uri))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(route.action["as"]))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(route.action["uses"]))]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _c("div", { staticClass: "btn-group" }, [
                                _c(
                                  "a",
                                  {
                                    staticClass: "btn btn-sm btn-primary",
                                    attrs: {
                                      href: "",
                                      "data-toggle": "modal",
                                      "data-target": "#modal-edit-permissions",
                                      title: "Edit permissions"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.setCurrentRoute(route)
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fa fa-lock" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-sm btn-secondary",
                                    attrs: {
                                      type: "button",
                                      "data-toggle": "tooltip",
                                      title: "Edit"
                                    }
                                  },
                                  [_c("i", { staticClass: "fa fa-pencil" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-sm btn-secondary",
                                    attrs: {
                                      type: "button",
                                      "data-toggle": "tooltip",
                                      title: "Delete"
                                    }
                                  },
                                  [_c("i", { staticClass: "fa fa-times" })]
                                )
                              ])
                            ])
                          ])
                        }),
                        0
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("tab-component", { attrs: { name: "Activated routes" } }, [
                _c("h1", [_vm._v("Hello 10")])
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("edit-permissions-component", {
        attrs: { "current-route": _vm.currentRoute }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabComponent.vue?vue&type=template&id=6dbe2396&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabComponent.vue?vue&type=template&id=6dbe2396&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isActive,
          expression: "isActive"
        }
      ]
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue?vue&type=template&id=539fbe22&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue?vue&type=template&id=539fbe22&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "ul",
      {
        staticClass: "nav nav-tabs nav-tabs-block",
        attrs: { "data-toggle": "tabs", role: "tablist" }
      },
      _vm._l(_vm.tabs, function(tab) {
        return _c(
          "li",
          { staticClass: "nav-item", class: { "ml-auto": tab.setMlAuto } },
          [
            _c("a", {
              staticClass: "nav-link",
              class: { active: tab.isActive },
              attrs: { "data-href": tab.href },
              domProps: { innerHTML: _vm._s(tab.name) },
              on: {
                click: function($event) {
                  return _vm.selectTab(tab)
                }
              }
            })
          ]
        )
      }),
      0
    ),
    _vm._v(" "),
    _c("div", { staticClass: "block-content tab-content" }, [
      _c(
        "div",
        {
          staticClass: "tab-pane active",
          attrs: { id: "btabs-static-home", role: "tabpanel" }
        },
        [_vm._t("default")],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/RoutesComponent.vue":
/*!*****************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/RoutesComponent.vue ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoutesComponent_vue_vue_type_template_id_2af44288___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoutesComponent.vue?vue&type=template&id=2af44288& */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/RoutesComponent.vue?vue&type=template&id=2af44288&");
/* harmony import */ var _RoutesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoutesComponent.vue?vue&type=script&lang=js& */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/RoutesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RoutesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoutesComponent_vue_vue_type_template_id_2af44288___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RoutesComponent_vue_vue_type_template_id_2af44288___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/RoutesComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/RoutesComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/RoutesComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoutesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoutesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/RoutesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoutesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/RoutesComponent.vue?vue&type=template&id=2af44288&":
/*!************************************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/RoutesComponent.vue?vue&type=template&id=2af44288& ***!
  \************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoutesComponent_vue_vue_type_template_id_2af44288___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RoutesComponent.vue?vue&type=template&id=2af44288& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Route/RoutesComponent.vue?vue&type=template&id=2af44288&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoutesComponent_vue_vue_type_template_id_2af44288___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoutesComponent_vue_vue_type_template_id_2af44288___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabComponent.vue":
/*!*********************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabComponent.vue ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TabComponent_vue_vue_type_template_id_6dbe2396_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabComponent.vue?vue&type=template&id=6dbe2396&scoped=true& */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabComponent.vue?vue&type=template&id=6dbe2396&scoped=true&");
/* harmony import */ var _TabComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabComponent.vue?vue&type=script&lang=js& */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TabComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TabComponent_vue_vue_type_template_id_6dbe2396_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TabComponent_vue_vue_type_template_id_6dbe2396_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6dbe2396",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TabComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabComponent.vue?vue&type=template&id=6dbe2396&scoped=true&":
/*!****************************************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabComponent.vue?vue&type=template&id=6dbe2396&scoped=true& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabComponent_vue_vue_type_template_id_6dbe2396_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TabComponent.vue?vue&type=template&id=6dbe2396&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabComponent.vue?vue&type=template&id=6dbe2396&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabComponent_vue_vue_type_template_id_6dbe2396_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabComponent_vue_vue_type_template_id_6dbe2396_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue":
/*!**********************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TabsComponent_vue_vue_type_template_id_539fbe22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabsComponent.vue?vue&type=template&id=539fbe22&scoped=true& */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue?vue&type=template&id=539fbe22&scoped=true&");
/* harmony import */ var _TabsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabsComponent.vue?vue&type=script&lang=js& */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TabsComponent_vue_vue_type_style_index_0_id_539fbe22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabsComponent.vue?vue&type=style&index=0&id=539fbe22&scoped=true&lang=css& */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue?vue&type=style&index=0&id=539fbe22&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TabsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TabsComponent_vue_vue_type_template_id_539fbe22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TabsComponent_vue_vue_type_template_id_539fbe22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "539fbe22",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TabsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue?vue&type=style&index=0&id=539fbe22&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue?vue&type=style&index=0&id=539fbe22&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TabsComponent_vue_vue_type_style_index_0_id_539fbe22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TabsComponent.vue?vue&type=style&index=0&id=539fbe22&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue?vue&type=style&index=0&id=539fbe22&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TabsComponent_vue_vue_type_style_index_0_id_539fbe22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TabsComponent_vue_vue_type_style_index_0_id_539fbe22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TabsComponent_vue_vue_type_style_index_0_id_539fbe22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TabsComponent_vue_vue_type_style_index_0_id_539fbe22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TabsComponent_vue_vue_type_style_index_0_id_539fbe22_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue?vue&type=template&id=539fbe22&scoped=true&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue?vue&type=template&id=539fbe22&scoped=true& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabsComponent_vue_vue_type_template_id_539fbe22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TabsComponent.vue?vue&type=template&id=539fbe22&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue?vue&type=template&id=539fbe22&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabsComponent_vue_vue_type_template_id_539fbe22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TabsComponent_vue_vue_type_template_id_539fbe22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);