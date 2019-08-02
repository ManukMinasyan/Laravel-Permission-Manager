(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/User/UsersComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/User/UsersComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _repositories_RepositoryFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../repositories/RepositoryFactory */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/RepositoryFactory.js");
/* harmony import */ var _helper_components_TabsComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helper-components/TabsComponent */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue");
/* harmony import */ var _helper_components_TabComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helper-components/TabComponent */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabComponent.vue");
/* harmony import */ var _User_EditPermissionsComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../User/EditPermissionsComponent */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/User/EditPermissionsComponent.vue");


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






var UserRepository = _repositories_RepositoryFactory__WEBPACK_IMPORTED_MODULE_3__["RepositoryFactory"].get('user');
var RoleRepository = _repositories_RepositoryFactory__WEBPACK_IMPORTED_MODULE_3__["RepositoryFactory"].get('role');
var PermissionRepository = _repositories_RepositoryFactory__WEBPACK_IMPORTED_MODULE_3__["RepositoryFactory"].get('permission');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UsersComponent",
  components: {
    EditPermissionsComponent: _User_EditPermissionsComponent__WEBPACK_IMPORTED_MODULE_6__["default"],
    TabComponent: _helper_components_TabComponent__WEBPACK_IMPORTED_MODULE_5__["default"],
    TabsComponent: _helper_components_TabsComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      schema: {},
      users: [],
      roles: [],
      permissions: [],
      searchText: null,
      selectedRoleFilter: {
        title: 'All',
        name: 'all'
      },
      selectedPermissionFilter: {
        title: 'All',
        name: 'all'
      },
      currentUser: {}
    };
  },
  created: function created() {
    this.getUsers();
    this.getRoles();
    this.getPermissions();
  },
  methods: {
    getUsers: function () {
      var _getUsers = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.isLoading = true;
                _context.next = 3;
                return UserRepository.get();

              case 3:
                _ref = _context.sent;
                data = _ref.data;
                this.isLoading = false;
                this.users = data.users;
                this.schema = data.schema;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUsers() {
        return _getUsers.apply(this, arguments);
      }

      return getUsers;
    }(),
    getFilteredUsers: function () {
      var _getFilteredUsers = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this$selectedRoleFil, _this$selectedPermiss;

        var filters, _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                filters = {
                  searchText: this.searchText,
                  selectedRoleFilter: (_this$selectedRoleFil = this.selectedRoleFilter.id) !== null && _this$selectedRoleFil !== void 0 ? _this$selectedRoleFil : null,
                  selectedPermissionFilter: (_this$selectedPermiss = this.selectedPermissionFilter.id) !== null && _this$selectedPermiss !== void 0 ? _this$selectedPermiss : null
                };
                this.isLoading = true;
                _context2.next = 4;
                return UserRepository.getFilteredUsers(filters);

              case 4:
                _ref2 = _context2.sent;
                data = _ref2.data;
                this.users = data;

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getFilteredUsers() {
        return _getFilteredUsers.apply(this, arguments);
      }

      return getFilteredUsers;
    }(),
    getRoles: function () {
      var _getRoles = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return RoleRepository.get(true);

              case 2:
                res = _context3.sent;
                this.roles = res.data;

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getRoles() {
        return _getRoles.apply(this, arguments);
      }

      return getRoles;
    }(),
    getPermissions: function () {
      var _getPermissions = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return PermissionRepository.get();

              case 2:
                res = _context4.sent;
                this.permissions = res.data;

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getPermissions() {
        return _getPermissions.apply(this, arguments);
      }

      return getPermissions;
    }(),
    setCurrentUser: function setCurrentUser(user) {
      this.currentUser = user;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/User/UsersComponent.vue?vue&type=template&id=40465848&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/User/UsersComponent.vue?vue&type=template&id=40465848& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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
                { attrs: { name: "Users", selected: true } },
                [
                  _c("div", { staticClass: "row border-bottom pb-1" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("h6", [_vm._v("Filter")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-2" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.searchText,
                            expression: "searchText"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", placeholder: "Live search..." },
                        domProps: { value: _vm.searchText },
                        on: {
                          input: [
                            function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.searchText = $event.target.value
                            },
                            function($event) {
                              return _vm.getFilteredUsers()
                            }
                          ]
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-3" },
                      [
                        _c("v-select", {
                          attrs: {
                            options: [{ title: "All", name: "all" }].concat(
                              _vm.roles
                            ),
                            label: "title"
                          },
                          on: {
                            input: function($event) {
                              return _vm.getFilteredUsers()
                            }
                          },
                          model: {
                            value: _vm.selectedRoleFilter,
                            callback: function($$v) {
                              _vm.selectedRoleFilter = $$v
                            },
                            expression: "selectedRoleFilter"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-3" },
                      [
                        _c("v-select", {
                          attrs: {
                            options: [{ title: "All", name: "all" }].concat(
                              _vm.permissions
                            ),
                            label: "title"
                          },
                          on: {
                            input: function($event) {
                              return _vm.getFilteredUsers()
                            }
                          },
                          model: {
                            value: _vm.selectedPermissionFilter,
                            callback: function($$v) {
                              _vm.selectedPermissionFilter = $$v
                            },
                            expression: "selectedPermissionFilter"
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "table",
                    { staticClass: "table table-striped table-vcenter" },
                    [
                      _c("thead", [
                        _c(
                          "tr",
                          [
                            _vm._l(_vm.schema, function(schema_item) {
                              return _c("th", [_vm._v(_vm._s(schema_item))])
                            }),
                            _vm._v(" "),
                            _c(
                              "th",
                              {
                                staticClass: "text-center",
                                staticStyle: { width: "100px" }
                              },
                              [_vm._v("Actions")]
                            )
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.users, function(user, key) {
                          return _c(
                            "tr",
                            [
                              _vm._l(_vm.schema, function(schema_item) {
                                return _c(
                                  "th",
                                  {
                                    staticClass: "text-center",
                                    attrs: { scope: "row" }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(user[schema_item]) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              }),
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
                                        "data-target":
                                          "#modal-edit-permissions",
                                        title: "Edit permissions"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.setCurrentUser(user)
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "fa fa-lock" })]
                                  )
                                ])
                              ])
                            ],
                            2
                          )
                        }),
                        0
                      )
                    ]
                  )
                ]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("edit-permissions-component", {
        attrs: { "current-user": _vm.currentUser }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/User/UsersComponent.vue":
/*!***************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/User/UsersComponent.vue ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsersComponent_vue_vue_type_template_id_40465848___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersComponent.vue?vue&type=template&id=40465848& */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/User/UsersComponent.vue?vue&type=template&id=40465848&");
/* harmony import */ var _UsersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersComponent.vue?vue&type=script&lang=js& */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/User/UsersComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UsersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UsersComponent_vue_vue_type_template_id_40465848___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UsersComponent_vue_vue_type_template_id_40465848___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/User/UsersComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/User/UsersComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/User/UsersComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/User/UsersComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/User/UsersComponent.vue?vue&type=template&id=40465848&":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/User/UsersComponent.vue?vue&type=template&id=40465848& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersComponent_vue_vue_type_template_id_40465848___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersComponent.vue?vue&type=template&id=40465848& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/User/UsersComponent.vue?vue&type=template&id=40465848&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersComponent_vue_vue_type_template_id_40465848___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersComponent_vue_vue_type_template_id_40465848___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);