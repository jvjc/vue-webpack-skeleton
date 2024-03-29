/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__ (moduleId) {
        /******/
        /******/ 		// Check if module is in cache
        /******/ 		if(installedModules[moduleId]) {
            /******/ 			return installedModules[moduleId].exports;
            /******/ 		}
        /******/ 		// Create a new module (and put it into the cache)
        /******/ 		var module = installedModules[moduleId] = {
            /******/ 			i: moduleId,
            /******/ 			l: false,
            /******/ 			exports: {}
            /******/ 		};
        /******/
        /******/ 		// Execute the module function
        /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Flag the module as loaded
        /******/ 		module.l = true;
        /******/
        /******/ 		// Return the exports of the module
        /******/ 		return module.exports;
        /******/ 	}
    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;
    /******/
    /******/ 	// define getter function for harmony exports
    /******/ 	__webpack_require__.d = function (exports, name, getter) {
        /******/ 		if(!__webpack_require__.o(exports, name)) {
            /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
            /******/ 		}
        /******/ 	};
    /******/
    /******/ 	// define __esModule on exports
    /******/ 	__webpack_require__.r = function (exports) {
        /******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/ 		}
        /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
        /******/ 	};
    /******/
    /******/ 	// create a fake namespace object
    /******/ 	// mode & 1: value is a module id, require it
    /******/ 	// mode & 2: merge all properties of value into the ns
    /******/ 	// mode & 4: return value when already ns object
    /******/ 	// mode & 8|1: behave like require
    /******/ 	__webpack_require__.t = function (value, mode) {
        /******/ 		if(mode & 1) value = __webpack_require__(value);
        /******/ 		if(mode & 8) return value;
        /******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/ 		var ns = Object.create(null);
        /******/ 		__webpack_require__.r(ns);
        /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
        /******/ 		return ns;
        /******/ 	};
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/ 	__webpack_require__.n = function (module) {
        /******/ 		var getter = module && module.__esModule ?
        /******/ 			function getDefault () { return module['default']; } :
        /******/ 			function getModuleExports () { return module; };
        /******/ 		__webpack_require__.d(getter, 'a', getter);
        /******/ 		return getter;
        /******/ 	};
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = '';
    /******/
    /******/
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(__webpack_require__.s = './src/bundle.js');
/******/ })
/************************************************************************/
/******/ ({

    /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/component-a.vue?vue&type=style&index=0&id=1df1c070&scoped=true&lang=css&':
    /*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/component-a.vue?vue&type=style&index=0&id=1df1c070&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

        eval('exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "\\n.main-component[data-v-1df1c070] {\\n    margin: 5px auto;\\n    font-family: sans-serif;\\n    background-color: #ccf7e2;\\n    padding: 10px;\\n    border-radius: 5px;\\n    max-width: 500px;\\n}\\n", ""]);\n\n\n\n//# sourceURL=webpack:///./src/component-a.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options');

        /***/ }),

    /***/ './node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/component-b.vue?vue&type=style&index=0&id=1dd5916e&scoped=true&lang=css&':
    /*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/component-b.vue?vue&type=style&index=0&id=1dd5916e&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

        eval('exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);\n// Module\nexports.push([module.i, "\\n.main-component[data-v-1dd5916e] {\\n    margin: 5px auto;\\n    font-family: sans-serif;\\n    background-color: #f7d3cc;\\n    padding: 10px;\\n    border-radius: 5px;\\n    max-width: 500px;\\n}\\n", ""]);\n\n\n\n//# sourceURL=webpack:///./src/component-b.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options');

        /***/ }),

    /***/ './node_modules/css-loader/dist/runtime/api.js':
    /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

        'use strict';
        eval('\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \'@media \' + item[2] + \'{\' + content + \'}\';\n      } else {\n        return content;\n      }\n    }).join(\'\');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === \'string\') {\n      modules = [[null, modules, \'\']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \'(\' + item[2] + \') and (\' + mediaQuery + \')\';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || \'\';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === \'function\') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \'/*# sourceURL=\' + cssMapping.sourceRoot + source + \' */\';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join(\'\\n\');\n  }\n\n  return [content].join(\'\\n\');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \'sourceMappingURL=data:application/json;charset=utf-8;base64,\' + base64;\n  return \'/*# \' + data + \' */\';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?');

        /***/ }),

    /***/ './node_modules/vue-loader/lib/index.js?!./src/component-a.vue?vue&type=script&lang=js&':
    /*!********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/component-a.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        'use strict';
        eval('__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__["default"] = ({\n    data: () => ({\n        text: \'Powered by webpack!\',\n    }),\n    props: {\n        componentB: false\n    }\n});\n\n\n//# sourceURL=webpack:///./src/component-a.vue?./node_modules/vue-loader/lib??vue-loader-options');

        /***/ }),

    /***/ './node_modules/vue-loader/lib/index.js?!./src/component-b.vue?vue&type=script&lang=js&':
    /*!********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/component-b.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        'use strict';
        eval('__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__["default"] = ({\n    data: () => ({\n        text: \'Powered by webpack!\',\n    })\n});\n\n\n//# sourceURL=webpack:///./src/component-b.vue?./node_modules/vue-loader/lib??vue-loader-options');

        /***/ }),

    /***/ './node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/component-a.vue?vue&type=template&id=1df1c070&scoped=true&':
    /*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/component-a.vue?vue&type=template&id=1df1c070&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        'use strict';
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    "div",\n    { staticClass: "main-component" },\n    [\n      _c("p", [_vm._v("This is your component-a in Vue")]),\n      _vm._v(" "),\n      _c("p", [_c("b", [_vm._v(_vm._s(_vm.text))])]),\n      _vm._v(" "),\n      _vm.componentB ? _c("component-b") : _vm._e(),\n      _vm._v(" "),\n      _vm._t("default")\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/component-a.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options');

        /***/ }),

    /***/ './node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/component-b.vue?vue&type=template&id=1dd5916e&scoped=true&':
    /*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/component-b.vue?vue&type=template&id=1dd5916e&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        'use strict';
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c("div", { staticClass: "main-component" }, [\n    _c("p", [_vm._v("This is your component-b in Vue")]),\n    _vm._v(" "),\n    _c("p", [_c("b", [_vm._v(_vm._s(_vm.text))])])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/component-b.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options');

        /***/ }),

    /***/ './node_modules/vue-loader/lib/runtime/componentNormalizer.js':
    /*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        'use strict';
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === \'function\'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = \'data-v-\' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== \'undefined\') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn\'t\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-loader/lib/runtime/componentNormalizer.js?');

        /***/ }),

    /***/ './node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/component-a.vue?vue&type=style&index=0&id=1df1c070&scoped=true&lang=css&':
    /*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/component-a.vue?vue&type=style&index=0&id=1df1c070&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

        eval('// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./component-a.vue?vue&type=style&index=0&id=1df1c070&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/component-a.vue?vue&type=style&index=0&id=1df1c070&scoped=true&lang=css&");\nif(typeof content === \'string\') content = [[module.i, content, \'\']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default\nvar update = add("0f5535c8", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/component-a.vue?./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options');

        /***/ }),

    /***/ './node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/component-b.vue?vue&type=style&index=0&id=1dd5916e&scoped=true&lang=css&':
    /*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/component-b.vue?vue&type=style&index=0&id=1dd5916e&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

        eval('// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./component-b.vue?vue&type=style&index=0&id=1dd5916e&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/component-b.vue?vue&type=style&index=0&id=1dd5916e&scoped=true&lang=css&");\nif(typeof content === \'string\') content = [[module.i, content, \'\']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default\nvar update = add("0f476283", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/component-b.vue?./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options');

        /***/ }),

    /***/ './node_modules/vue-style-loader/lib/addStylesClient.js':
    /*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        'use strict';
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });\n/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n  Modified by Evan You @yyx990803\n*/\n\n\n\nvar hasDocument = typeof document !== \'undefined\'\n\nif (typeof DEBUG !== \'undefined\' && DEBUG) {\n  if (!hasDocument) {\n    throw new Error(\n    \'vue-style-loader cannot be used in a non-browser environment. \' +\n    "Use { target: \'node\' } in your Webpack config to indicate a server-rendering environment."\n  ) }\n}\n\n/*\ntype StyleObject = {\n  id: number;\n  parts: Array<StyleObjectPart>\n}\n\ntype StyleObjectPart = {\n  css: string;\n  media: string;\n  sourceMap: ?string\n}\n*/\n\nvar stylesInDom = {/*\n  [id: number]: {\n    id: number,\n    refs: number,\n    parts: Array<(obj?: StyleObjectPart) => void>\n  }\n*/}\n\nvar head = hasDocument && (document.head || document.getElementsByTagName(\'head\')[0])\nvar singletonElement = null\nvar singletonCounter = 0\nvar isProduction = false\nvar noop = function () {}\nvar options = null\nvar ssrIdKey = \'data-vue-ssr-id\'\n\n// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n// tags it will allow on a page\nvar isOldIE = typeof navigator !== \'undefined\' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase())\n\nfunction addStylesClient (parentId, list, _isProduction, _options) {\n  isProduction = _isProduction\n\n  options = _options || {}\n\n  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)\n  addStylesToDom(styles)\n\n  return function update (newList) {\n    var mayRemove = []\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i]\n      var domStyle = stylesInDom[item.id]\n      domStyle.refs--\n      mayRemove.push(domStyle)\n    }\n    if (newList) {\n      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)\n      addStylesToDom(styles)\n    } else {\n      styles = []\n    }\n    for (var i = 0; i < mayRemove.length; i++) {\n      var domStyle = mayRemove[i]\n      if (domStyle.refs === 0) {\n        for (var j = 0; j < domStyle.parts.length; j++) {\n          domStyle.parts[j]()\n        }\n        delete stylesInDom[domStyle.id]\n      }\n    }\n  }\n}\n\nfunction addStylesToDom (styles /* Array<StyleObject> */) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i]\n    var domStyle = stylesInDom[item.id]\n    if (domStyle) {\n      domStyle.refs++\n      for (var j = 0; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j])\n      }\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j]))\n      }\n      if (domStyle.parts.length > item.parts.length) {\n        domStyle.parts.length = item.parts.length\n      }\n    } else {\n      var parts = []\n      for (var j = 0; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j]))\n      }\n      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }\n    }\n  }\n}\n\nfunction createStyleElement () {\n  var styleElement = document.createElement(\'style\')\n  styleElement.type = \'text/css\'\n  head.appendChild(styleElement)\n  return styleElement\n}\n\nfunction addStyle (obj /* StyleObjectPart */) {\n  var update, remove\n  var styleElement = document.querySelector(\'style[\' + ssrIdKey + \'~="\' + obj.id + \'"]\')\n\n  if (styleElement) {\n    if (isProduction) {\n      // has SSR styles and in production mode.\n      // simply do nothing.\n      return noop\n    } else {\n      // has SSR styles but in dev mode.\n      // for some reason Chrome can\'t handle source map in server-rendered\n      // style tags - source maps in <style> only works if the style tag is\n      // created and inserted dynamically. So we remove the server rendered\n      // styles and inject new ones.\n      styleElement.parentNode.removeChild(styleElement)\n    }\n  }\n\n  if (isOldIE) {\n    // use singleton mode for IE9.\n    var styleIndex = singletonCounter++\n    styleElement = singletonElement || (singletonElement = createStyleElement())\n    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)\n    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)\n  } else {\n    // use multi-style-tag mode in all other cases\n    styleElement = createStyleElement()\n    update = applyToTag.bind(null, styleElement)\n    remove = function () {\n      styleElement.parentNode.removeChild(styleElement)\n    }\n  }\n\n  update(obj)\n\n  return function updateStyle (newObj /* StyleObjectPart */) {\n    if (newObj) {\n      if (newObj.css === obj.css &&\n          newObj.media === obj.media &&\n          newObj.sourceMap === obj.sourceMap) {\n        return\n      }\n      update(obj = newObj)\n    } else {\n      remove()\n    }\n  }\n}\n\nvar replaceText = (function () {\n  var textStore = []\n\n  return function (index, replacement) {\n    textStore[index] = replacement\n    return textStore.filter(Boolean).join(\'\\n\')\n  }\n})()\n\nfunction applyToSingletonTag (styleElement, index, remove, obj) {\n  var css = remove ? \'\' : obj.css\n\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = replaceText(index, css)\n  } else {\n    var cssNode = document.createTextNode(css)\n    var childNodes = styleElement.childNodes\n    if (childNodes[index]) styleElement.removeChild(childNodes[index])\n    if (childNodes.length) {\n      styleElement.insertBefore(cssNode, childNodes[index])\n    } else {\n      styleElement.appendChild(cssNode)\n    }\n  }\n}\n\nfunction applyToTag (styleElement, obj) {\n  var css = obj.css\n  var media = obj.media\n  var sourceMap = obj.sourceMap\n\n  if (media) {\n    styleElement.setAttribute(\'media\', media)\n  }\n  if (options.ssrId) {\n    styleElement.setAttribute(ssrIdKey, obj.id)\n  }\n\n  if (sourceMap) {\n    // https://developer.chrome.com/devtools/docs/javascript-debugging\n    // this makes source maps inside style tags work properly in Chrome\n    css += \'\\n/*# sourceURL=\' + sourceMap.sources[0] + \' */\'\n    // http://stackoverflow.com/a/26603875\n    css += \'\\n/*# sourceMappingURL=data:application/json;base64,\' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \' */\'\n  }\n\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild)\n    }\n    styleElement.appendChild(document.createTextNode(css))\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-style-loader/lib/addStylesClient.js?');

        /***/ }),

    /***/ './node_modules/vue-style-loader/lib/listToStyles.js':
    /*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        'use strict';
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });\n/**\n * Translates the list format produced by css-loader into something\n * easier to manipulate.\n */\nfunction listToStyles (parentId, list) {\n  var styles = []\n  var newStyles = {}\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i]\n    var id = item[0]\n    var css = item[1]\n    var media = item[2]\n    var sourceMap = item[3]\n    var part = {\n      id: parentId + \':\' + i,\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    }\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = { id: id, parts: [part] })\n    } else {\n      newStyles[id].parts.push(part)\n    }\n  }\n  return styles\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-style-loader/lib/listToStyles.js?');

        /***/ }),

    /***/ './src sync recursive \\/\\w+-\\w+\\.vue$':
    /*!**********************************!*\
  !*** ./src sync \/\w+-\w+\.vue$ ***!
  \**********************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

        eval('var map = {\n\t"./component-a.vue": "./src/component-a.vue",\n\t"./component-b.vue": "./src/component-b.vue"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error("Cannot find module \'" + req + "\'");\n\t\te.code = \'MODULE_NOT_FOUND\';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = "./src sync recursive \\\\/\\\\w+-\\\\w+\\\\.vue$";\n\n//# sourceURL=webpack:///./src_sync_\\/\\w+-\\w+\\.vue$?');

        /***/ }),

    /***/ './src/bundle.js':
    /*!***********************!*\
  !*** ./src/bundle.js ***!
  \***********************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

        eval('const requireComponents = __webpack_require__("./src sync recursive \\\\/\\\\w+-\\\\w+\\\\.vue$");\n\nrequireComponents.keys().forEach(fileName => {\n    const componentConfig = requireComponents(fileName);\n\n    var componentName = fileName.split(\'/\').pop().replace(/\\.\\w+$/, \'\');\n\n    Vue.component(componentName, componentConfig.default || componentConfig);\n});\n\n//# sourceURL=webpack:///./src/bundle.js?');

        /***/ }),

    /***/ './src/component-a.vue':
    /*!*****************************!*\
  !*** ./src/component-a.vue ***!
  \*****************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        'use strict';
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_a_vue_vue_type_template_id_1df1c070_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component-a.vue?vue&type=template&id=1df1c070&scoped=true& */ "./src/component-a.vue?vue&type=template&id=1df1c070&scoped=true&");\n/* harmony import */ var _component_a_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component-a.vue?vue&type=script&lang=js& */ "./src/component-a.vue?vue&type=script&lang=js&");\n/* empty/unused harmony star reexport *//* harmony import */ var _component_a_vue_vue_type_style_index_0_id_1df1c070_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-a.vue?vue&type=style&index=0&id=1df1c070&scoped=true&lang=css& */ "./src/component-a.vue?vue&type=style&index=0&id=1df1c070&scoped=true&lang=css&");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(\n  _component_a_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],\n  _component_a_vue_vue_type_template_id_1df1c070_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],\n  _component_a_vue_vue_type_template_id_1df1c070_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],\n  false,\n  null,\n  "1df1c070",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = "src/component-a.vue"\n/* harmony default export */ __webpack_exports__["default"] = (component.exports);\n\n//# sourceURL=webpack:///./src/component-a.vue?');

        /***/ }),

    /***/ './src/component-a.vue?vue&type=script&lang=js&':
    /*!******************************************************!*\
  !*** ./src/component-a.vue?vue&type=script&lang=js& ***!
  \******************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        'use strict';
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_component_a_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./component-a.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/component-a.vue?vue&type=script&lang=js&");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_component_a_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); \n\n//# sourceURL=webpack:///./src/component-a.vue?');

        /***/ }),

    /***/ './src/component-a.vue?vue&type=style&index=0&id=1df1c070&scoped=true&lang=css&':
    /*!**************************************************************************************!*\
  !*** ./src/component-a.vue?vue&type=style&index=0&id=1df1c070&scoped=true&lang=css& ***!
  \**************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        'use strict';
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_component_a_vue_vue_type_style_index_0_id_1df1c070_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./component-a.vue?vue&type=style&index=0&id=1df1c070&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/component-a.vue?vue&type=style&index=0&id=1df1c070&scoped=true&lang=css&");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_component_a_vue_vue_type_style_index_0_id_1df1c070_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_component_a_vue_vue_type_style_index_0_id_1df1c070_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_component_a_vue_vue_type_style_index_0_id_1df1c070_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \'default\') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_component_a_vue_vue_type_style_index_0_id_1df1c070_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_component_a_vue_vue_type_style_index_0_id_1df1c070_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/component-a.vue?');

        /***/ }),

    /***/ './src/component-a.vue?vue&type=template&id=1df1c070&scoped=true&':
    /*!************************************************************************!*\
  !*** ./src/component-a.vue?vue&type=template&id=1df1c070&scoped=true& ***!
  \************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        'use strict';
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_component_a_vue_vue_type_template_id_1df1c070_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./component-a.vue?vue&type=template&id=1df1c070&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/component-a.vue?vue&type=template&id=1df1c070&scoped=true&");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_component_a_vue_vue_type_template_id_1df1c070_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_component_a_vue_vue_type_template_id_1df1c070_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });\n\n\n\n//# sourceURL=webpack:///./src/component-a.vue?');

        /***/ }),

    /***/ './src/component-b.vue':
    /*!*****************************!*\
  !*** ./src/component-b.vue ***!
  \*****************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        'use strict';
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_b_vue_vue_type_template_id_1dd5916e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component-b.vue?vue&type=template&id=1dd5916e&scoped=true& */ "./src/component-b.vue?vue&type=template&id=1dd5916e&scoped=true&");\n/* harmony import */ var _component_b_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component-b.vue?vue&type=script&lang=js& */ "./src/component-b.vue?vue&type=script&lang=js&");\n/* empty/unused harmony star reexport *//* harmony import */ var _component_b_vue_vue_type_style_index_0_id_1dd5916e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-b.vue?vue&type=style&index=0&id=1dd5916e&scoped=true&lang=css& */ "./src/component-b.vue?vue&type=style&index=0&id=1dd5916e&scoped=true&lang=css&");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(\n  _component_b_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],\n  _component_b_vue_vue_type_template_id_1dd5916e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],\n  _component_b_vue_vue_type_template_id_1dd5916e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],\n  false,\n  null,\n  "1dd5916e",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = "src/component-b.vue"\n/* harmony default export */ __webpack_exports__["default"] = (component.exports);\n\n//# sourceURL=webpack:///./src/component-b.vue?');

        /***/ }),

    /***/ './src/component-b.vue?vue&type=script&lang=js&':
    /*!******************************************************!*\
  !*** ./src/component-b.vue?vue&type=script&lang=js& ***!
  \******************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        'use strict';
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_component_b_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./component-b.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/component-b.vue?vue&type=script&lang=js&");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_component_b_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); \n\n//# sourceURL=webpack:///./src/component-b.vue?');

        /***/ }),

    /***/ './src/component-b.vue?vue&type=style&index=0&id=1dd5916e&scoped=true&lang=css&':
    /*!**************************************************************************************!*\
  !*** ./src/component-b.vue?vue&type=style&index=0&id=1dd5916e&scoped=true&lang=css& ***!
  \**************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        'use strict';
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_component_b_vue_vue_type_style_index_0_id_1dd5916e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./component-b.vue?vue&type=style&index=0&id=1dd5916e&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/component-b.vue?vue&type=style&index=0&id=1dd5916e&scoped=true&lang=css&");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_component_b_vue_vue_type_style_index_0_id_1dd5916e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_component_b_vue_vue_type_style_index_0_id_1dd5916e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_component_b_vue_vue_type_style_index_0_id_1dd5916e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \'default\') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_component_b_vue_vue_type_style_index_0_id_1dd5916e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_component_b_vue_vue_type_style_index_0_id_1dd5916e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/component-b.vue?');

        /***/ }),

    /***/ './src/component-b.vue?vue&type=template&id=1dd5916e&scoped=true&':
    /*!************************************************************************!*\
  !*** ./src/component-b.vue?vue&type=template&id=1dd5916e&scoped=true& ***!
  \************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        'use strict';
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_component_b_vue_vue_type_template_id_1dd5916e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./component-b.vue?vue&type=template&id=1dd5916e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/component-b.vue?vue&type=template&id=1dd5916e&scoped=true&");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_component_b_vue_vue_type_template_id_1dd5916e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_component_b_vue_vue_type_template_id_1dd5916e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });\n\n\n\n//# sourceURL=webpack:///./src/component-b.vue?');

        /***/ })

/******/ });