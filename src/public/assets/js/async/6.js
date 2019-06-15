(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddNewRoleComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddNewRoleComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repositories_RepositoryFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../repositories/RepositoryFactory */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/RepositoryFactory.js");
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

var RoleRepository = _repositories_RepositoryFactory__WEBPACK_IMPORTED_MODULE_0__["RepositoryFactory"].get('role');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AddNewRoleComponent",
  data: function data() {
    return {
      role: {
        title: '',
        name: ''
      },
      error: ''
    };
  },
  methods: {
    createNewRole: function createNewRole(e) {
      var _this = this;

      e.preventDefault();
      var vm = this;
      vm.error = '';
      RoleRepository.createRole(this.role).then(function (res) {
        vm.$parent.roles.push(res.data.data);
        vm.role = {};
        $('#modal-add-role').modal('toggle');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
      })["catch"](function (error) {
        var errors = error.response.data.errors;
        _this.error = errors[Object.keys(errors)[0]][0];
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/RolesPermissionsComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/RolesPermissionsComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _repositories_RepositoryFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../repositories/RepositoryFactory */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/RepositoryFactory.js");
/* harmony import */ var _AddNewRoleComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddNewRoleComponent */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddNewRoleComponent.vue");
/* harmony import */ var _EditPermissionsComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditPermissionsComponent */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/EditPermissionsComponent.vue");


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



var RoleRepository = _repositories_RepositoryFactory__WEBPACK_IMPORTED_MODULE_1__["RepositoryFactory"].get('role');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "RolesPermissionsComponent",
  components: {
    EditPermissionsComponent: _EditPermissionsComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
    AddNewRoleComponent: _AddNewRoleComponent__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      roles: [],
      currentRole: {},
      showPermissions: false
    };
  },
  created: function created() {
    this.getRoles();
  },
  methods: {
    getRoles: function () {
      var _getRoles = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.isLoading = true;
                _context.next = 3;
                return RoleRepository.get();

              case 3:
                _ref = _context.sent;
                data = _ref.data;
                this.isLoading = false;
                this.roles = data;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getRoles() {
        return _getRoles.apply(this, arguments);
      }

      return getRoles;
    }(),
    removeRole: function removeRole(key, roleId) {
      RoleRepository.removeRole(roleId);
      this.roles.splice(key, 1);
    },
    setCurrentRole: function setCurrentRole(role) {
      this.currentRole = role;
      this.showPermissions = !this.showPermissions;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddNewRoleComponent.vue?vue&type=template&id=0b4d28f0&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddNewRoleComponent.vue?vue&type=template&id=0b4d28f0&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
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
      staticClass: "modal fade",
      attrs: {
        id: "modal-add-role",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "modal-popout",
        "aria-hidden": "true"
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "modal-dialog modal-dialog-popout",
          attrs: { role: "document" }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c(
              "form",
              { attrs: { method: "post" }, on: { submit: _vm.createNewRole } },
              [
                _c(
                  "div",
                  { staticClass: "block block-themed block-transparent mb-0" },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", { staticClass: "block-content" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "role-title" } }, [
                          _vm._v("Title")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.role.title,
                              expression: "role.title"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "role-title",
                            placeholder: "Enter Title.."
                          },
                          domProps: { value: _vm.role.title },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.role, "title", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "role-name" } }, [
                          _vm._v("Name")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.role.name,
                              expression: "role.name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "role-name",
                            placeholder: "Enter Name.."
                          },
                          domProps: { value: _vm.role.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.role, "name", $event.target.value)
                            }
                          }
                        })
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c("div", { staticClass: "w-100 text-danger" }, [
                    _vm._v(_vm._s(_vm.error))
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-alt-secondary",
                      attrs: { type: "button", "data-dismiss": "modal" }
                    },
                    [_vm._v("Close")]
                  ),
                  _vm._v(" "),
                  _vm._m(1)
                ])
              ]
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "block-header bg-primary-dark" }, [
      _c("h3", { staticClass: "block-title" }, [_vm._v("Create new role")]),
      _vm._v(" "),
      _c("div", { staticClass: "block-options" }, [
        _c(
          "button",
          {
            staticClass: "btn-block-option",
            attrs: {
              type: "button",
              "data-dismiss": "modal",
              "aria-label": "Close"
            }
          },
          [_c("i", { staticClass: "si si-close" })]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-alt-success", attrs: { type: "submit" } },
      [
        _c("i", { staticClass: "fa fa-check" }),
        _vm._v(" Create\n                    ")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/RolesPermissionsComponent.vue?vue&type=template&id=7f60c6fe&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/RolesPermissionsComponent.vue?vue&type=template&id=7f60c6fe& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "block" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "block-content" }, [
          _c("table", { staticClass: "table table-striped table-vcenter" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.roles, function(role, key) {
                return _c("tr", [
                  _c(
                    "th",
                    { staticClass: "text-center", attrs: { scope: "row" } },
                    [_vm._v(_vm._s(key + 1))]
                  ),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(role.title))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(role.name))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(role.level))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(role.scope))]),
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
                              return _vm.setCurrentRole(role)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fa fa-lock" })]
                      ),
                      _vm._v(" "),
                      _vm._m(2, true),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-secondary",
                          attrs: {
                            type: "button",
                            "data-toggle": "tooltip",
                            title: "Delete role"
                          },
                          on: {
                            click: function($event) {
                              return _vm.removeRole(key, role.id)
                            }
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
          ])
        ])
      ]),
      _vm._v(" "),
      _c("add-new-role-component"),
      _vm._v(" "),
      _vm.showPermissions
        ? _c("edit-permissions-component", {
            attrs: { "current-role": _vm.currentRole }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "block-header block-header-default" }, [
      _c("h3", { staticClass: "block-title" }, [_vm._v("Roles & Permissions")]),
      _vm._v(" "),
      _c("div", { staticClass: "btn-group" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-primary btn-sm",
            attrs: {
              href: "#",
              "data-toggle": "modal",
              "data-target": "#modal-add-role"
            }
          },
          [_vm._v("Create")]
        )
      ])
    ])
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
        _c("th", [_vm._v("Title")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Level")]),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "d-none d-sm-table-cell",
            staticStyle: { width: "15%" }
          },
          [_vm._v("Scope")]
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
    return _c(
      "a",
      {
        staticClass: "btn btn-sm btn-secondary",
        attrs: { href: "", "data-toggle": "tooltip", title: "Edit role" }
      },
      [_c("i", { staticClass: "fa fa-pencil" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddNewRoleComponent.vue":
/*!********************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddNewRoleComponent.vue ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddNewRoleComponent_vue_vue_type_template_id_0b4d28f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddNewRoleComponent.vue?vue&type=template&id=0b4d28f0&scoped=true& */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddNewRoleComponent.vue?vue&type=template&id=0b4d28f0&scoped=true&");
/* harmony import */ var _AddNewRoleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddNewRoleComponent.vue?vue&type=script&lang=js& */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddNewRoleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddNewRoleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddNewRoleComponent_vue_vue_type_template_id_0b4d28f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddNewRoleComponent_vue_vue_type_template_id_0b4d28f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0b4d28f0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddNewRoleComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddNewRoleComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddNewRoleComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewRoleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddNewRoleComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddNewRoleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewRoleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddNewRoleComponent.vue?vue&type=template&id=0b4d28f0&scoped=true&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddNewRoleComponent.vue?vue&type=template&id=0b4d28f0&scoped=true& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewRoleComponent_vue_vue_type_template_id_0b4d28f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddNewRoleComponent.vue?vue&type=template&id=0b4d28f0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddNewRoleComponent.vue?vue&type=template&id=0b4d28f0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewRoleComponent_vue_vue_type_template_id_0b4d28f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewRoleComponent_vue_vue_type_template_id_0b4d28f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/RolesPermissionsComponent.vue":
/*!**************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/RolesPermissionsComponent.vue ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RolesPermissionsComponent_vue_vue_type_template_id_7f60c6fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RolesPermissionsComponent.vue?vue&type=template&id=7f60c6fe& */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/RolesPermissionsComponent.vue?vue&type=template&id=7f60c6fe&");
/* harmony import */ var _RolesPermissionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RolesPermissionsComponent.vue?vue&type=script&lang=js& */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/RolesPermissionsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RolesPermissionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RolesPermissionsComponent_vue_vue_type_template_id_7f60c6fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RolesPermissionsComponent_vue_vue_type_template_id_7f60c6fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/RolesPermissionsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/RolesPermissionsComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/RolesPermissionsComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RolesPermissionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RolesPermissionsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/RolesPermissionsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RolesPermissionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/RolesPermissionsComponent.vue?vue&type=template&id=7f60c6fe&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/RolesPermissionsComponent.vue?vue&type=template&id=7f60c6fe& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RolesPermissionsComponent_vue_vue_type_template_id_7f60c6fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RolesPermissionsComponent.vue?vue&type=template&id=7f60c6fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/RolesPermissionsComponent.vue?vue&type=template&id=7f60c6fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RolesPermissionsComponent_vue_vue_type_template_id_7f60c6fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RolesPermissionsComponent_vue_vue_type_template_id_7f60c6fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);