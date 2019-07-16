(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddNewRoleComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddRoleComponent.vue?vue&type=script&lang=js& ***!
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
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _repositories_RepositoryFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../repositories/RepositoryFactory */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/repositories/RepositoryFactory.js");
/* harmony import */ var _AddNewRoleComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddNewRoleComponent */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddRoleComponent.vue");
/* harmony import */ var _AddPermissionComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddPermissionComponent */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddPermissionComponent.vue");
/* harmony import */ var _helper_components_TabsComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helper-components/TabsComponent */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabsComponent.vue");
/* harmony import */ var _helper_components_TabComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helper-components/TabComponent */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/helper-components/TabComponent.vue");


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
//
//
//
//
//
//
//
//
//
//
//
//







var RoleRepository = _repositories_RepositoryFactory__WEBPACK_IMPORTED_MODULE_3__["RepositoryFactory"].get('role');
var PermissionRepository = _repositories_RepositoryFactory__WEBPACK_IMPORTED_MODULE_3__["RepositoryFactory"].get('permission');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "RolesPermissionsComponent",
  components: {
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a,
    AddPermissionComponent: _AddPermissionComponent__WEBPACK_IMPORTED_MODULE_5__["default"],
    AddNewRoleComponent: _AddNewRoleComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
    TabsComponent: _helper_components_TabsComponent__WEBPACK_IMPORTED_MODULE_6__["default"],
    TabComponent: _helper_components_TabComponent__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      roles: [],
      currentRole: {},
      permissions: [],
      filteredPermissions: [],
      newPermission: {},
      showPermissions: false,
      error: ''
    };
  },
  created: function created() {
    this.getRoles();
    this.getPermissions();
  },
  watch: {
    permissions: function permissions() {
      this.filteredPermissions = this.permissions;
    }
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
    getPermissions: function () {
      var _getPermissions = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _ref2, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.isLoading = true;
                _context2.next = 3;
                return PermissionRepository.get();

              case 3:
                _ref2 = _context2.sent;
                data = _ref2.data;
                this.isLoading = false;
                this.permissions = data;

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getPermissions() {
        return _getPermissions.apply(this, arguments);
      }

      return getPermissions;
    }(),
    addNewPermission: function addNewPermission(e) {
      e.preventDefault();
      var vm = this;
      vm.error = '';
      vm.newPermission.roles = vm.roleTags;
      PermissionRepository.create(this.newPermission).then(function (res) {})["catch"](function (error) {
        var errors = error.response.data.errors;
        vm.error = errors[Object.keys(errors)[0]][0];
      });
    },
    updatePermission: function updatePermission(permission) {
      this.$set(permission, 'edittable', false);
      PermissionRepository.update(permission.id, permission);
    },
    removePermission: function removePermission(key, permissionId) {
      PermissionRepository["delete"](permissionId);
      this.permissions.splice(key, 1);
    },
    removeRole: function removeRole(key, roleId) {
      RoleRepository.removeRole(roleId);
      this.roles.splice(key, 1);
    },
    setCurrentRole: function setCurrentRole(role) {
      this.currentRole = role;
      this.showPermissions = !this.showPermissions;
    },
    filterByRole: function filterByRole(role) {
      if (role === null) {
        this.filteredPermissions = this.permissions;
      } else {
        this.filteredPermissions = this.permissions.filter(function (item) {
          return item.roles.some(function (r) {
            return r.name === role.name;
          });
        });
      }
    },
    filterByGroup: function filterByGroup(group) {
      if (group === null) {
        this.filteredPermissions = this.permissions;
      } else {
        this.filteredPermissions = this.permissions.filter(function (item) {
          return item.roles.some(function (r) {
            return r.name === role.name;
          });
        });
      }
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-select/dist/vue-select.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-select/dist/vue-select.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-select{position:relative;font-family:inherit}.v-select,.v-select *{box-sizing:border-box}@-webkit-keyframes vSelectSpinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes vSelectSpinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.vs__fade-enter-active,.vs__fade-leave-active{transition:opacity .15s cubic-bezier(1,.5,.8,1)}.vs__fade-enter,.vs__fade-leave-to{opacity:0}.vs--disabled .vs__clear,.vs--disabled .vs__dropdown-toggle,.vs--disabled .vs__open-indicator,.vs--disabled .vs__search,.vs--disabled .vs__selected{cursor:not-allowed;background-color:#f8f8f8}.v-select[dir=rtl] .vs__actions{padding:0 3px 0 6px}.v-select[dir=rtl] .vs__clear{margin-left:6px;margin-right:0}.v-select[dir=rtl] .vs__deselect{margin-left:0;margin-right:2px}.v-select[dir=rtl] .vs__dropdown-menu{text-align:right}.vs__dropdown-toggle{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:flex;padding:0 0 4px;background:none;border:1px solid rgba(60,60,60,.26);border-radius:4px;white-space:normal}.vs__selected-options{display:flex;flex-basis:100%;flex-grow:1;flex-wrap:wrap;padding:0 2px;position:relative}.vs__actions{display:flex;align-items:center;padding:4px 6px 0 3px}.vs--searchable .vs__dropdown-toggle{cursor:text}.vs--unsearchable .vs__dropdown-toggle{cursor:pointer}.vs--open .vs__dropdown-toggle{border-bottom-color:transparent;border-bottom-left-radius:0;border-bottom-right-radius:0}.vs__open-indicator{fill:rgba(60,60,60,.5);-webkit-transform:scale(1);transform:scale(1);transition:-webkit-transform .15s cubic-bezier(1,-.115,.975,.855);transition:transform .15s cubic-bezier(1,-.115,.975,.855);transition:transform .15s cubic-bezier(1,-.115,.975,.855),-webkit-transform .15s cubic-bezier(1,-.115,.975,.855);transition-timing-function:cubic-bezier(1,-.115,.975,.855)}.vs--open .vs__open-indicator{-webkit-transform:rotate(180deg) scale(1);transform:rotate(180deg) scale(1)}.vs--loading .vs__open-indicator{opacity:0}.vs__clear{fill:rgba(60,60,60,.5);padding:0;border:0;background-color:transparent;cursor:pointer;margin-right:8px}.vs__dropdown-menu{display:block;position:absolute;top:calc(100% - 1px);left:0;z-index:1000;padding:5px 0;margin:0;width:100%;max-height:350px;min-width:160px;overflow-y:auto;box-shadow:0 3px 6px 0 rgba(0,0,0,.15);border:1px solid rgba(60,60,60,.26);border-top-style:none;border-radius:0 0 4px 4px;text-align:left;list-style:none;background:#fff}.vs__no-options{text-align:center}.vs__dropdown-option{line-height:1.42857143;display:block;padding:3px 20px;clear:both;color:#333;white-space:nowrap}.vs__dropdown-option:hover{cursor:pointer}.vs__dropdown-option--highlight{background:#5897fb;color:#fff}.vs__selected{display:flex;align-items:center;background-color:#f0f0f0;border:1px solid rgba(60,60,60,.26);border-radius:4px;color:#333;line-height:1.4;margin:4px 2px 0;padding:0 .25em}.vs__deselect{display:inline-flex;-webkit-appearance:none;-moz-appearance:none;appearance:none;margin-left:4px;padding:0;border:0;cursor:pointer;background:none;fill:rgba(60,60,60,.5);text-shadow:0 1px 0 #fff}.vs--single .vs__selected{background-color:transparent;border-color:transparent}.vs--single.vs--open .vs__selected{position:absolute;opacity:.4}.vs--single.vs--searching .vs__selected{display:none}.vs__search::-ms-clear,.vs__search::-webkit-search-cancel-button,.vs__search::-webkit-search-decoration,.vs__search::-webkit-search-results-button,.vs__search::-webkit-search-results-decoration{display:none}.vs__search,.vs__search:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;line-height:1.4;font-size:1em;border:1px solid transparent;border-left:none;outline:none;margin:4px 0 0;padding:0 7px;background:none;box-shadow:none;width:0;max-width:100%;flex-grow:1}.vs__search::-webkit-input-placeholder{color:inherit}.vs__search:-ms-input-placeholder{color:inherit}.vs__search::-ms-input-placeholder{color:inherit}.vs__search::placeholder{color:inherit}.vs--unsearchable .vs__search{opacity:1}.vs--unsearchable .vs__search:hover{cursor:pointer}.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search{opacity:.2}.vs__spinner{align-self:center;opacity:0;font-size:5px;text-indent:-9999em;overflow:hidden;border:.9em solid hsla(0,0%,39.2%,.1);border-left-color:rgba(60,60,60,.45);-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:vSelectSpinner 1.1s linear infinite;animation:vSelectSpinner 1.1s linear infinite;transition:opacity .1s}.vs__spinner,.vs__spinner:after{border-radius:50%;width:5em;height:5em}.vs--loading .vs__spinner{opacity:1}", ""]);

// exports


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddNewRoleComponent.vue?vue&type=template&id=0b4d28f0&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddRoleComponent.vue?vue&type=template&id=0b4d28f0&scoped=true& ***!
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
                                    options: ["Canada", "United States"]
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
                                  staticClass: "btn btn-sm btn-secondary",
                                  attrs: {
                                    href: "",
                                    "data-toggle": "tooltip",
                                    title: "Edit role"
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
                _c("h1", [_vm._v("Hello 10")])
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("add-new-role-component"),
      _vm._v(" "),
      _vm.showPermissions ? _c("add-permission-component") : _vm._e()
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

/***/ "./node_modules/vue-select/dist/vue-select.css":
/*!*****************************************************!*\
  !*** ./node_modules/vue-select/dist/vue-select.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--5-1!../../postcss-loader/src??ref--5-2!./vue-select.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-select/dist/vue-select.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddNewRoleComponent.vue":
/*!********************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddRoleComponent.vue ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddNewRoleComponent_vue_vue_type_template_id_0b4d28f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddRoleComponent.vue?vue&type=template&id=0b4d28f0&scoped=true& */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddRoleComponent.vue?vue&type=template&id=0b4d28f0&scoped=true&");
/* harmony import */ var _AddNewRoleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddRoleComponent.vue?vue&type=script&lang=js& */ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddRoleComponent.vue?vue&type=script&lang=js&");
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
component.options.__file = "resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddRoleComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddNewRoleComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddRoleComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewRoleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddRoleComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddRoleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewRoleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddNewRoleComponent.vue?vue&type=template&id=0b4d28f0&scoped=true&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddRoleComponent.vue?vue&type=template&id=0b4d28f0&scoped=true& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddNewRoleComponent_vue_vue_type_template_id_0b4d28f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddRoleComponent.vue?vue&type=template&id=0b4d28f0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/packages/ManukMinasyan/LaravelPermissionManager/js/components/pages/Role/AddRoleComponent.vue?vue&type=template&id=0b4d28f0&scoped=true&");
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