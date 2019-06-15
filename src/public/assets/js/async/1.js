(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/EditPermissionsComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/EditPermissionsComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _repositories_RepositoryFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../repositories/RepositoryFactory */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/RepositoryFactory.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_2__);


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var PermissionRepository = _repositories_RepositoryFactory__WEBPACK_IMPORTED_MODULE_1__["RepositoryFactory"].get('permission');

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "EditPermissionsComponent",
  components: {
    VueTagsInput: _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      roleTag: '',
      roleTags: [],
      permission: {},
      permissions: [],
      autocompleteRoles: [],
      showAddEditPermission: false,
      error: ''
    };
  },
  props: {
    currentRole: {}
  },
  created: function created() {
    this.getAllPermissions();
    this.setAutoCompleteAndCurrentRoles();
  },
  computed: {
    filteredItems: function filteredItems() {
      var _this = this;

      return this.autocompleteRoles.filter(function (i) {
        return i.text.toLowerCase().indexOf(_this.roleTag.toLowerCase()) !== -1;
      });
    }
  },
  methods: {
    getAllPermissions: function () {
      var _getAllPermissions = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return PermissionRepository.get();

              case 2:
                res = _context.sent;
                this.permissions = res.data;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAllPermissions() {
        return _getAllPermissions.apply(this, arguments);
      }

      return getAllPermissions;
    }(),
    addNewPermission: function addNewPermission(e) {
      e.preventDefault();
      var vm = this;
      vm.error = '';
      vm.permission.roles = vm.roleTags;
      PermissionRepository.create(this.permission).then(function (res) {})["catch"](function (error) {
        var errors = error.response.data.errors;
        vm.error = errors[Object.keys(errors)[0]][0];
      });
    },
    setAutoCompleteAndCurrentRoles: function setAutoCompleteAndCurrentRoles() {
      var vm = this;
      this.$parent.roles.forEach(function (role) {
        vm.autocompleteRoles.push({
          id: role.id,
          text: role.title
        });
      });
      vm.roleTags.push({
        id: vm.currentRole.id,
        text: vm.currentRole.title
      });
    },
    deletePermission: function deletePermission(id) {
      PermissionRepository["delete"](id);
    },
    closeModal: function closeModal() {
      this.$parent.showPermissions = !this.$parent.showPermissions;
    },
    showAddEditPermissionBlock: function showAddEditPermissionBlock() {
      this.showAddEditPermission = !this.showAddEditPermission;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/EditPermissionsComponent.vue?vue&type=template&id=332808eb&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/EditPermissionsComponent.vue?vue&type=template&id=332808eb&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
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
          staticClass: "modal-dialog modal-dialog-popout modal-lg",
          attrs: { role: "document" }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c(
              "div",
              { staticClass: "block block-themed block-transparent mb-0" },
              [
                _c("div", { staticClass: "block-header bg-primary-dark" }, [
                  _c("h3", { staticClass: "block-title" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.currentRole.title) +
                        " | Permissions\n                        "
                    ),
                    _c(
                      "button",
                      {
                        staticClass: "btn-block-option",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.showAddEditPermissionBlock()
                          }
                        }
                      },
                      [_c("i", { staticClass: "si si-plus text-primary" })]
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
                        },
                        on: {
                          click: function($event) {
                            return _vm.closeModal()
                          }
                        }
                      },
                      [_c("i", { staticClass: "si si-close" })]
                    )
                  ])
                ]),
                _vm._v(" "),
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
                        "table",
                        {
                          staticClass:
                            "table table-bordered table-striped table-vcenter js-dataTable-full"
                        },
                        [
                          _vm._m(1),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.permissions, function(permission, key) {
                              return _c("tr", [
                                _c("td", { staticClass: "text-center" }, [
                                  _vm._v(_vm._s(key + 1))
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "font-w600" }, [
                                  _vm._v(_vm._s(permission.name))
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "d-none d-sm-table-cell" },
                                  [_vm._v(_vm._s(permission.title))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "d-none d-sm-table-cell" },
                                  [_vm._v(_vm._s(permission.entity_type))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "d-none d-sm-table-cell" },
                                  _vm._l(permission.roles, function(role) {
                                    return _c(
                                      "span",
                                      { staticClass: "badge badge-success" },
                                      [_vm._v(_vm._s(role.name))]
                                    )
                                  }),
                                  0
                                ),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  _vm._m(2, true),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-sm btn-secondary",
                                      attrs: {
                                        type: "button",
                                        "data-toggle": "tooltip",
                                        title: "Delete permission"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.deletePermission(
                                            permission.id
                                          )
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "fa fa-remove" })]
                                  )
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
                  _vm._m(3),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "tab-pane",
                      attrs: { id: "btabs-static-settings", role: "tabpanel" }
                    },
                    [
                      _c("h4", { staticClass: "font-w400" }, [
                        _vm._v("Create new permission")
                      ]),
                      _vm._v(" "),
                      _c(
                        "form",
                        {
                          attrs: { method: "post" },
                          on: { submit: _vm.addNewPermission }
                        },
                        [
                          _c("div", { staticClass: "form-group row" }, [
                            _c("div", { staticClass: "col-md-4" }, [
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
                            _c("div", { staticClass: "col-md-4" }, [
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
                            _c("div", { staticClass: "col-md-4" }, [
                              _c(
                                "div",
                                { staticClass: "form-material" },
                                [
                                  _c("vue-tags-input", {
                                    attrs: {
                                      tags: _vm.roleTags,
                                      "autocomplete-items": _vm.filteredItems,
                                      "add-only-from-autocomplete": true
                                    },
                                    on: {
                                      "tags-changed": function(newTags) {
                                        return (_vm.roleTags = newTags)
                                      }
                                    },
                                    model: {
                                      value: _vm.roleTag,
                                      callback: function($$v) {
                                        _vm.roleTag = $$v
                                      },
                                      expression: "roleTag"
                                    }
                                  })
                                ],
                                1
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _vm._m(4)
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
            [_vm._v("All")]
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
            [_vm._v("Current")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item ml-auto" }, [
          _c(
            "a",
            {
              staticClass: "nav-link",
              attrs: {
                href: "#btabs-static-settings",
                title: "Create new permission"
              }
            },
            [_c("i", { staticClass: "si si-plus" })]
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
        _c("th", { staticClass: "text-center" }),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { staticClass: "d-none d-sm-table-cell" }, [_vm._v("Title")]),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "d-none d-sm-table-cell",
            staticStyle: { width: "15%" }
          },
          [_vm._v("Entity Type")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "d-none d-sm-table-cell",
            staticStyle: { width: "15%" }
          },
          [_vm._v("Roles")]
        ),
        _vm._v(" "),
        _c(
          "th",
          { staticClass: "text-center", staticStyle: { width: "15%" } },
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
      "button",
      {
        staticClass: "btn btn-sm btn-secondary",
        attrs: {
          type: "button",
          "data-toggle": "tooltip",
          title: "Edit permission"
        }
      },
      [_c("i", { staticClass: "fa fa-edit" })]
    )
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

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/EditPermissionsComponent.vue":
/*!*************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/EditPermissionsComponent.vue ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditPermissionsComponent_vue_vue_type_template_id_332808eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditPermissionsComponent.vue?vue&type=template&id=332808eb&scoped=true& */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/EditPermissionsComponent.vue?vue&type=template&id=332808eb&scoped=true&");
/* harmony import */ var _EditPermissionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditPermissionsComponent.vue?vue&type=script&lang=js& */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/EditPermissionsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditPermissionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditPermissionsComponent_vue_vue_type_template_id_332808eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditPermissionsComponent_vue_vue_type_template_id_332808eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "332808eb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/EditPermissionsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/EditPermissionsComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/EditPermissionsComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPermissionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditPermissionsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/EditPermissionsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPermissionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/EditPermissionsComponent.vue?vue&type=template&id=332808eb&scoped=true&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/EditPermissionsComponent.vue?vue&type=template&id=332808eb&scoped=true& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPermissionsComponent_vue_vue_type_template_id_332808eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditPermissionsComponent.vue?vue&type=template&id=332808eb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/EditPermissionsComponent.vue?vue&type=template&id=332808eb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPermissionsComponent_vue_vue_type_template_id_332808eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPermissionsComponent_vue_vue_type_template_id_332808eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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