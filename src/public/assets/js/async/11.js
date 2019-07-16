(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/RolesPermissionsComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/RolesPermissionsComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\OSPanel\\domains\\laravel-package.loc\\resources\\packages\\ManukMinasyan\\LaravelPermissionManager\\js\\components\\pages\\Role\\RolesPermissionsComponent.vue: Support for the experimental syntax 'nullishCoalescingOperator' isn't currently enabled (281:52):\n\n  279 |         updatePermission(permission) {\n  280 |             this.$set(permission, 'edittable', false);\n> 281 |             permission.group = permission.group[0] ?? {};\n      |                                                    ^\n  282 |             PermissionRepository.update(permission.id, permission);\n  283 |         },\n  284 |         removePermission(key, permissionId) {\n\nAdd @babel/plugin-proposal-nullish-coalescing-operator (https://git.io/vb4Se) to the 'plugins' section of your Babel config to enable transformation.\n    at Parser.raise (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:3851:17)\n    at Parser.expectPlugin (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:5172:18)\n    at Parser.parseExprOp (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:5815:16)\n    at Parser.parseExprOps (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:5791:17)\n    at Parser.parseMaybeConditional (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:5754:23)\n    at Parser.parseMaybeAssign (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:5701:21)\n    at Parser.parseMaybeAssign (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:5740:25)\n    at Parser.parseExpression (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:5649:23)\n    at Parser.parseStatementContent (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:7420:23)\n    at Parser.parseStatement (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:7291:17)\n    at Parser.parseBlockOrModuleBlockBody (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:7868:25)\n    at Parser.parseBlockBody (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:7855:10)\n    at Parser.parseBlock (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:7839:10)\n    at Parser.parseFunctionBody (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:6909:24)\n    at Parser.parseFunctionBodyAndFinish (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:6879:10)\n    at Parser.parseMethod (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:6835:10)\n    at Parser.parseObjectMethod (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:6751:19)\n    at Parser.parseObjPropValue (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:6793:23)\n    at Parser.parseObjectMember (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:6717:10)\n    at Parser.parseObj (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:6641:25)\n    at Parser.parseExprAtom (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:6274:21)\n    at Parser.parseExprSubscripts (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:5914:23)\n    at Parser.parseMaybeUnary (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:5894:21)\n    at Parser.parseExprOps (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:5781:23)\n    at Parser.parseMaybeConditional (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:5754:23)\n    at Parser.parseMaybeAssign (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:5701:21)\n    at Parser.parseObjectProperty (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:6768:101)\n    at Parser.parseObjPropValue (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:6793:101)\n    at Parser.parseObjectMember (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:6717:10)\n    at Parser.parseObj (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:6641:25)\n    at Parser.parseExprAtom (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:6274:21)\n    at Parser.parseExprSubscripts (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:5914:23)\n    at Parser.parseMaybeUnary (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:5894:21)\n    at Parser.parseExprOps (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:5781:23)\n    at Parser.parseMaybeConditional (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:5754:23)\n    at Parser.parseMaybeAssign (D:\\OSPanel\\domains\\laravel-package.loc\\node_modules\\@babel\\parser\\lib\\index.js:5701:21)");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/RolesPermissionsComponent.vue?vue&type=template&id=7f60c6fe&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/RolesPermissionsComponent.vue?vue&type=template&id=7f60c6fe&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
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
                { attrs: { name: "Permissions", selected: true } },
                [
                  _c("div", { staticClass: "row border-bottom pb-1" }, [
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("h6", [_vm._v("Filter")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-3" },
                      [
                        _c("v-select", {
                          attrs: { options: _vm.roles, label: "title" },
                          on: { input: _vm.filterByRole }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-3" },
                      [
                        _c("v-select", { attrs: { options: ["Yeah", "baby"] } })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-1 offset-md-5" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-light",
                          attrs: {
                            title: "Add new permission",
                            "data-toggle": "modal",
                            "data-target": "#modal-edit-permissions"
                          },
                          on: {
                            click: function($event) {
                              _vm.showPermissions = true
                            }
                          }
                        },
                        [_c("i", { staticClass: "si si-plus" })]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "table",
                    { staticClass: "table table-striped table-vcenter mt-5" },
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
                          _c("th", [_vm._v("Title")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Name")]),
                          _vm._v(" "),
                          _c("th", { staticStyle: { width: "25%" } }, [
                            _vm._v("Roles")
                          ]),
                          _vm._v(" "),
                          _c("th", { staticStyle: { width: "25%" } }, [
                            _vm._v("Group")
                          ]),
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
                        _vm._l(_vm.filteredPermissions, function(
                          permission,
                          key
                        ) {
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
                            _c(
                              "td",
                              [
                                permission.edittable
                                  ? [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: permission.title,
                                            expression: "permission.title"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "text" },
                                        domProps: { value: permission.title },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              permission,
                                              "title",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  : [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(permission.title) +
                                          "\n                            "
                                      )
                                    ]
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                permission.edittable
                                  ? [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: permission.name,
                                            expression: "permission.name"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "text" },
                                        domProps: { value: permission.name },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              permission,
                                              "name",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  : [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(permission.name) +
                                          "\n                            "
                                      )
                                    ]
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticStyle: { width: "25%" } },
                              [
                                _c("v-select", {
                                  attrs: {
                                    options: _vm.roles,
                                    label: "title",
                                    multiple: true
                                  },
                                  on: {
                                    input: function($event) {
                                      return _vm.updatePermission(permission)
                                    }
                                  },
                                  model: {
                                    value: permission.roles,
                                    callback: function($$v) {
                                      _vm.$set(permission, "roles", $$v)
                                    },
                                    expression: "permission.roles"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              { staticStyle: { width: "25%" } },
                              [
                                _c("v-select", {
                                  attrs: {
                                    options: _vm.groups,
                                    label: "name",
                                    multiple: true
                                  },
                                  on: {
                                    input: function($event) {
                                      return _vm.updatePermission(permission)
                                    }
                                  },
                                  model: {
                                    value: permission.group,
                                    callback: function($$v) {
                                      _vm.$set(permission, "group", $$v)
                                    },
                                    expression: "permission.group"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _c("div", { staticClass: "btn-group" }, [
                                permission.edittable
                                  ? _c(
                                      "a",
                                      {
                                        staticClass: "btn btn-sm btn-secondary",
                                        attrs: {
                                          "data-toggle": "tooltip",
                                          title: "Update permission"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.updatePermission(
                                              permission
                                            )
                                          }
                                        }
                                      },
                                      [_c("i", { staticClass: "fa fa-save" })]
                                    )
                                  : _c(
                                      "a",
                                      {
                                        staticClass: "btn btn-sm btn-secondary",
                                        attrs: {
                                          "data-toggle": "tooltip",
                                          title: "Edit permission"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.$set(
                                              permission,
                                              "edittable",
                                              true
                                            )
                                          }
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
                                      title: "Delete role"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.removePermission(
                                          key,
                                          permission.id
                                        )
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
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("tab-component", { attrs: { name: "Roles" } }, [
                _c("div", { staticClass: "row border-bottom pb-1" }, [
                  _c("div", { staticClass: "col-md-12" }, [
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
                        [_c("i", { staticClass: "si si-plus" })]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
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
                      _vm._l(_vm.roles, function(role, key) {
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
                          _c(
                            "td",
                            [
                              role.edittable
                                ? [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: role.title,
                                          expression: "role.title"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { type: "text" },
                                      domProps: { value: role.title },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            role,
                                            "title",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                : [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(role.title) +
                                        "\n                            "
                                    )
                                  ]
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              role.edittable
                                ? [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: role.name,
                                          expression: "role.name"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { type: "text" },
                                      domProps: { value: role.name },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            role,
                                            "name",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                : [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(role.name) +
                                        "\n                            "
                                    )
                                  ]
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(role.level))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(role.scope))]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
                            _c("div", { staticClass: "btn-group" }, [
                              role.edittable
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-sm btn-secondary",
                                      attrs: {
                                        "data-toggle": "tooltip",
                                        title: "Update role"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.updateRole(role)
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "fa fa-save" })]
                                  )
                                : _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-sm btn-secondary",
                                      attrs: {
                                        "data-toggle": "tooltip",
                                        title: "Edit role"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.$set(
                                            role,
                                            "edittable",
                                            true
                                          )
                                        }
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
                  ]
                )
              ]),
              _vm._v(" "),
              _c("tab-component", { attrs: { name: "Groups" } }, [
                _c("div", { staticClass: "row border-bottom pb-1" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("div", { staticClass: "btn-group" }, [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-primary btn-sm",
                          attrs: {
                            href: "#",
                            "data-toggle": "modal",
                            "data-target": "#modal-add-group"
                          }
                        },
                        [_c("i", { staticClass: "si si-plus" })]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
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
                        _c("th", [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Comment")]),
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
                      _vm._l(_vm.groups, function(group, key) {
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
                          _c(
                            "td",
                            [
                              group.edittable
                                ? [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: group.name,
                                          expression: "group.name"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { type: "text" },
                                      domProps: { value: group.name },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            group,
                                            "name",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                : [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(group.name) +
                                        "\n                            "
                                    )
                                  ]
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              group.edittable
                                ? [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: group.comment,
                                          expression: "group.comment"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { type: "text" },
                                      domProps: { value: group.comment },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            group,
                                            "comment",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                : [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(group.comment) +
                                        "\n                            "
                                    )
                                  ]
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-center" }, [
                            _c("div", { staticClass: "btn-group" }, [
                              group.edittable
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-sm btn-secondary",
                                      attrs: {
                                        "data-toggle": "tooltip",
                                        title: "Update group"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.updateGroup(group)
                                        }
                                      }
                                    },
                                    [_c("i", { staticClass: "fa fa-save" })]
                                  )
                                : _c(
                                    "a",
                                    {
                                      staticClass: "btn btn-sm btn-secondary",
                                      attrs: {
                                        "data-toggle": "tooltip",
                                        title: "Edit group"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.$set(
                                            group,
                                            "edittable",
                                            true
                                          )
                                        }
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
                                    title: "Delete group"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.removeGroup(key, group.id)
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
                  ]
                )
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("add-role-component"),
      _vm._v(" "),
      _c("add-group-component"),
      _vm._v(" "),
      _vm.showPermissions ? _c("add-permission-component") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/RolesPermissionsComponent.vue":
/*!**************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/RolesPermissionsComponent.vue ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RolesPermissionsComponent_vue_vue_type_template_id_7f60c6fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RolesPermissionsComponent.vue?vue&type=template&id=7f60c6fe&scoped=true& */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/RolesPermissionsComponent.vue?vue&type=template&id=7f60c6fe&scoped=true&");
/* harmony import */ var _RolesPermissionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RolesPermissionsComponent.vue?vue&type=script&lang=js& */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/RolesPermissionsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RolesPermissionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RolesPermissionsComponent_vue_vue_type_template_id_7f60c6fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RolesPermissionsComponent_vue_vue_type_template_id_7f60c6fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7f60c6fe",
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

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/RolesPermissionsComponent.vue?vue&type=template&id=7f60c6fe&scoped=true&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/RolesPermissionsComponent.vue?vue&type=template&id=7f60c6fe&scoped=true& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RolesPermissionsComponent_vue_vue_type_template_id_7f60c6fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RolesPermissionsComponent.vue?vue&type=template&id=7f60c6fe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/RolesPermissionsComponent.vue?vue&type=template&id=7f60c6fe&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RolesPermissionsComponent_vue_vue_type_template_id_7f60c6fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RolesPermissionsComponent_vue_vue_type_template_id_7f60c6fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);