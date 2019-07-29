(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddPermissionComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddPermissionComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _repositories_RepositoryFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../repositories/RepositoryFactory */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/RepositoryFactory.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);


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
//
//
//
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
var GroupRepository = _repositories_RepositoryFactory__WEBPACK_IMPORTED_MODULE_1__["RepositoryFactory"].get('group');
var PermissionRepository = _repositories_RepositoryFactory__WEBPACK_IMPORTED_MODULE_1__["RepositoryFactory"].get('permission');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AddPermissionComponent",
  data: function data() {
    return {
      roles: [],
      groups: [],
      permission: {},
      error: ''
    };
  },
  components: {
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  created: function created() {
    this.getRoles();
    this.getGroups();
  },
  methods: {
    getRoles: function () {
      var _getRoles = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return RoleRepository.get();

              case 2:
                res = _context.sent;
                this.roles = res.data;

              case 4:
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
    getGroups: function () {
      var _getGroups = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return GroupRepository.get();

              case 2:
                res = _context2.sent;
                this.groups = res.data;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getGroups() {
        return _getGroups.apply(this, arguments);
      }

      return getGroups;
    }(),
    storePermission: function storePermission(e) {
      e.preventDefault();
      var vm = this;
      vm.error = '';
      PermissionRepository.create(this.permission).then(function (res) {
        vm.permission = {};
      })["catch"](function (error) {
        var errors = error.response.data.errors;
        vm.error = errors[Object.keys(errors)[0]][0];
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddPermissionComponent.vue?vue&type=template&id=9b507916&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddPermissionComponent.vue?vue&type=template&id=9b507916&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
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
        id: "modal-edit-permissions",
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
          staticClass: "modal-dialog modal-dialog-popout modal-md",
          attrs: { role: "document" }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c(
              "div",
              { staticClass: "block block-themed block-transparent mb-0" },
              [
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
                      _c(
                        "form",
                        {
                          attrs: { method: "post" },
                          on: { submit: _vm.storePermission }
                        },
                        [
                          _c("div", { staticClass: "form-group row" }, [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-material" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.permission.name,
                                      expression: "permission.name"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    id: "material-name",
                                    placeholder: "Please enter name"
                                  },
                                  domProps: { value: _vm.permission.name },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.permission,
                                        "name",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  { attrs: { for: "material-name" } },
                                  [_vm._v("Name")]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-material" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.permission.title,
                                      expression: "permission.title"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    id: "material-title",
                                    placeholder: "Please enter title"
                                  },
                                  domProps: { value: _vm.permission.title },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.permission,
                                        "title",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  { attrs: { for: "material-title" } },
                                  [_vm._v("Title")]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-material" },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      id: "inputRoles",
                                      options: _vm.roles,
                                      label: "title",
                                      multiple: true
                                    },
                                    model: {
                                      value: _vm.permission.roles,
                                      callback: function($$v) {
                                        _vm.$set(_vm.permission, "roles", $$v)
                                      },
                                      expression: "permission.roles"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    { attrs: { for: "inputRoles" } },
                                    [_vm._v("Roles")]
                                  )
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c(
                                "div",
                                { staticClass: "form-material" },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      id: "inputGroup",
                                      options: _vm.groups,
                                      label: "name"
                                    },
                                    model: {
                                      value: _vm.permission.group,
                                      callback: function($$v) {
                                        _vm.$set(_vm.permission, "group", $$v)
                                      },
                                      expression: "permission.group"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    { attrs: { for: "inputGroup" } },
                                    [_vm._v("Group")]
                                  )
                                ],
                                1
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _vm._m(1)
                        ]
                      )
                    ]
                  )
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
              )
            ])
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
      _c("h3", { staticClass: "block-title" }, [
        _vm._v(
          "\n                        Add new permission\n                    "
        )
      ]),
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
    return _c("div", { staticClass: "form-group row" }, [
      _c("div", { staticClass: "col-md-9" }, [
        _c(
          "button",
          { staticClass: "btn btn-alt-primary", attrs: { type: "submit" } },
          [_vm._v("Create")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddPermissionComponent.vue":
/*!***********************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddPermissionComponent.vue ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddPermissionComponent_vue_vue_type_template_id_9b507916_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddPermissionComponent.vue?vue&type=template&id=9b507916&scoped=true& */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddPermissionComponent.vue?vue&type=template&id=9b507916&scoped=true&");
/* harmony import */ var _AddPermissionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddPermissionComponent.vue?vue&type=script&lang=js& */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddPermissionComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddPermissionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddPermissionComponent_vue_vue_type_template_id_9b507916_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddPermissionComponent_vue_vue_type_template_id_9b507916_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9b507916",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddPermissionComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddPermissionComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddPermissionComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPermissionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddPermissionComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddPermissionComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPermissionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddPermissionComponent.vue?vue&type=template&id=9b507916&scoped=true&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddPermissionComponent.vue?vue&type=template&id=9b507916&scoped=true& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPermissionComponent_vue_vue_type_template_id_9b507916_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddPermissionComponent.vue?vue&type=template&id=9b507916&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddPermissionComponent.vue?vue&type=template&id=9b507916&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPermissionComponent_vue_vue_type_template_id_9b507916_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPermissionComponent_vue_vue_type_template_id_9b507916_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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