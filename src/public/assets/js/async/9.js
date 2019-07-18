(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddRoleComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddRoleComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  name: "AddRoleComponent",
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
    storeRole: function storeRole(e) {
      var _this = this;

      e.preventDefault();
      var vm = this;
      vm.error = '';
      RoleRepository.create(this.role).then(function (res) {
        vm.$parent.roles.push(res.data.data);
        vm.role = {};
        $('#modal-add-role').modal('hide');
        $('.modal-backdrop').remove();
      })["catch"](function (error) {
        var errors = error.response.data.errors;
        _this.error = errors[Object.keys(errors)[0]][0];
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddRoleComponent.vue?vue&type=template&id=84dda124&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddRoleComponent.vue?vue&type=template&id=84dda124&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
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
              { attrs: { method: "post" }, on: { submit: _vm.storeRole } },
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

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddRoleComponent.vue":
/*!*****************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddRoleComponent.vue ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddRoleComponent_vue_vue_type_template_id_84dda124_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddRoleComponent.vue?vue&type=template&id=84dda124&scoped=true& */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddRoleComponent.vue?vue&type=template&id=84dda124&scoped=true&");
/* harmony import */ var _AddRoleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddRoleComponent.vue?vue&type=script&lang=js& */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddRoleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddRoleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddRoleComponent_vue_vue_type_template_id_84dda124_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddRoleComponent_vue_vue_type_template_id_84dda124_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "84dda124",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddRoleComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddRoleComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddRoleComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRoleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddRoleComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddRoleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRoleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddRoleComponent.vue?vue&type=template&id=84dda124&scoped=true&":
/*!************************************************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddRoleComponent.vue?vue&type=template&id=84dda124&scoped=true& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRoleComponent_vue_vue_type_template_id_84dda124_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddRoleComponent.vue?vue&type=template&id=84dda124&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddRoleComponent.vue?vue&type=template&id=84dda124&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRoleComponent_vue_vue_type_template_id_84dda124_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddRoleComponent_vue_vue_type_template_id_84dda124_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _groupRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./groupRepository */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/groupRepository.js");
/* harmony import */ var _permissionRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./permissionRepository */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/permissionRepository.js");
/* harmony import */ var _routeRepository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routeRepository */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/routeRepository.js");





var repositories = {
  model: _modelRepository__WEBPACK_IMPORTED_MODULE_0__["default"],
  role: _roleRepository__WEBPACK_IMPORTED_MODULE_1__["default"],
  group: _groupRepository__WEBPACK_IMPORTED_MODULE_2__["default"],
  permission: _permissionRepository__WEBPACK_IMPORTED_MODULE_3__["default"],
  route: _routeRepository__WEBPACK_IMPORTED_MODULE_4__["default"]
};
var RepositoryFactory = {
  get: function get(name) {
    return repositories[name];
  }
};

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/groupRepository.js":
/*!******************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/groupRepository.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/Repository.js");

var resource = "/groups";
/* harmony default export */ __webpack_exports__["default"] = ({
  get: function get() {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(resource));
  },
  create: function create(payload) {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(resource), payload);
  },
  update: function update(id, payload) {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].patch("".concat(resource, "/").concat(id), payload);
  },
  "delete": function _delete(id) {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("".concat(resource, "/").concat(id));
  }
});

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
    var group_by = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var uri = "".concat(resource);

    if (group_by) {
      uri = "".concat(resource, "?group_by_group=1");
    }

    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(uri);
  },
  create: function create(payload) {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(resource), payload);
  },
  update: function update(id, payload) {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].patch("".concat(resource, "/").concat(id), payload);
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
  create: function create(payload) {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(resource), payload);
  },
  update: function update(id, payload) {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].patch("".concat(resource, "/").concat(id), payload);
  },
  "delete": function _delete(id) {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("".concat(resource, "/").concat(id));
  },
  assignPermission: function assignPermission(payload) {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(resource), payload);
  },
  unassignPermission: function unassignPermission(payload) {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(resource), payload);
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
  },
  getActivated: function getActivated() {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(resource, "/activated"));
  },
  detachAbility: function detachAbility(payload) {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(resource, "/detach-ability"), payload);
  },
  create: function create(payload) {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(resource), payload);
  },
  update: function update(id, payload) {
    return _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].patch("".concat(resource, "/").concat(id), payload);
  }
});

/***/ })

}]);