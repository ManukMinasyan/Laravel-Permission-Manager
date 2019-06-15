(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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
//
//
//
//
//
//

var RouteRepository = _repositories_RepositoryFactory__WEBPACK_IMPORTED_MODULE_1__["RepositoryFactory"].get('route');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "RoutesComponent",
  data: function data() {
    return {
      routes: []
    };
  },
  created: function created() {
    this.getRoutes();
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
    }()
  }
});

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
  return _c("div", { staticClass: "content" }, [
    _c("div", { staticClass: "block" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "block-content tab-content" }, [
        _c(
          "div",
          {
            staticClass: "tab-pane active",
            attrs: { id: "btabs-static-home", role: "tabpanel" }
          },
          [
            _c("table", { staticClass: "table table-striped table-vcenter" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.routes, function(route, key) {
                  return _c("tr", [
                    _c(
                      "th",
                      { staticClass: "text-center", attrs: { scope: "row" } },
                      [_vm._v(_vm._s(key + 1))]
                    ),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(route.uri))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(route.action["as"]))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(route.action["uses"]))]),
                    _vm._v(" "),
                    _vm._m(2, true),
                    _vm._v(" "),
                    _vm._m(3, true)
                  ])
                }),
                0
              )
            ])
          ]
        ),
        _vm._v(" "),
        _vm._m(4)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      {
        staticClass: "nav nav-tabs nav-tabs-block",
        attrs: { "data-toggle": "tabs", role: "tablist" }
      },
      [
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link active",
              attrs: { href: "#btabs-static-home" }
            },
            [_vm._v("All routes")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: { href: "#btabs-static-profile" }
            },
            [_vm._v("Activated routes")]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "50px" } },
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
            staticClass: "d-none d-sm-table-cell",
            staticStyle: { width: "15%" }
          },
          [_vm._v("Access")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "100px" } },
          [_vm._v("Actions")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "d-none d-sm-table-cell" }, [
      _c("span", { staticClass: "badge badge-primary" }, [_vm._v("Personal")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "text-center" }, [
      _c("div", { staticClass: "btn-group" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-sm btn-secondary",
            attrs: { type: "button", "data-toggle": "tooltip", title: "Edit" }
          },
          [_c("i", { staticClass: "fa fa-pencil" })]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-sm btn-secondary",
            attrs: { type: "button", "data-toggle": "tooltip", title: "Delete" }
          },
          [_c("i", { staticClass: "fa fa-times" })]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "tab-pane",
        attrs: { id: "btabs-static-profile", role: "tabpanel" }
      },
      [
        _c("h4", { staticClass: "font-w400" }, [_vm._v("Profile Content")]),
        _vm._v(" "),
        _c("p", [_vm._v("...")])
      ]
    )
  }
]
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

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/Repository.js":
/*!*************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/Repository.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var baseDomain = window.location.protocol + '//' + window.location.hostname + '/laravel-permission-manager-route-api';
var baseURL = "".concat(baseDomain);
/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: baseURL
}));

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/RepositoryFactory.js":
/*!********************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/RepositoryFactory.js ***!
  \********************************************************************************************************/
/*! exports provided: RepositoryFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoryFactory", function() { return RepositoryFactory; });
/* harmony import */ var _modelRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modelRepository */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/modelRepository.js");
/* harmony import */ var _roleRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roleRepository */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/roleRepository.js");
/* harmony import */ var _permissionRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permissionRepository */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/permissionRepository.js");
/* harmony import */ var _routeRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routeRepository */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/routeRepository.js");




var repositories = {
  model: _modelRepository__WEBPACK_IMPORTED_MODULE_0__["default"],
  role: _roleRepository__WEBPACK_IMPORTED_MODULE_1__["default"],
  permission: _permissionRepository__WEBPACK_IMPORTED_MODULE_2__["default"],
  route: _routeRepository__WEBPACK_IMPORTED_MODULE_3__["default"]
};
var RepositoryFactory = {
  get: function get(name) {
    return repositories[name];
  }
};

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/modelRepository.js":
/*!******************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/modelRepository.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/Repository.js");

var resource = "/models";
/* harmony default export */ __webpack_exports__["default"] = ({
  get: function get() {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(resource));
  }
});

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/permissionRepository.js":
/*!***********************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/permissionRepository.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/Repository.js");

var resource = "/permissions";
/* harmony default export */ __webpack_exports__["default"] = ({
  get: function get() {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(resource));
  },
  create: function create(payload) {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(resource), payload);
  },
  "delete": function _delete(id) {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("".concat(resource, "/").concat(id));
  }
});

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/roleRepository.js":
/*!*****************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/roleRepository.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/Repository.js");

var resource = "/roles";
/* harmony default export */ __webpack_exports__["default"] = ({
  get: function get() {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(resource));
  },
  createRole: function createRole(payload) {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(resource), payload);
  },
  assignPermission: function assignPermission(payload) {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(resource), payload);
  },
  unassignPermission: function unassignPermission(payload) {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(resource), payload);
  },
  removeRole: function removeRole(roleId) {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("".concat(resource, "/").concat(roleId));
  }
});

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/routeRepository.js":
/*!******************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/routeRepository.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/Repository.js");

var resource = "/routes";
/* harmony default export */ __webpack_exports__["default"] = ({
  get: function get() {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(resource));
  }
});

/***/ })

}]);