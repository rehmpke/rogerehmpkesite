/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
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
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/src/footer.js":
/*!*********************************!*\
  !*** ./assets/js/src/footer.js ***!
  \*********************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\nclass Footer {\n  constructor() {\n    // Sets copyright year\n    function footerDate() {\n      const d = new Date();\n      const fullYear = d.getFullYear();\n      document.querySelector('#currentYear').innerHTML = fullYear;\n    }\n\n    return footerDate();\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/src/footer.js?");

/***/ }),

/***/ "./assets/js/src/index.js":
/*!********************************!*\
  !*** ./assets/js/src/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scss/style.scss */ \"./assets/scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/footer.js */ \"./assets/js/src/footer.js\");\n/* harmony import */ var _src_lazyload_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/lazyload.js */ \"./assets/js/src/lazyload.js\");\n\n\n\nlet footer = new _src_footer_js__WEBPACK_IMPORTED_MODULE_1__[\"Footer\"]();\nfooter.footerDate;\ndocument.addEventListener('DOMContentLoaded', function () {\n  Object(_src_lazyload_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n//# sourceURL=webpack:///./assets/js/src/index.js?");

/***/ }),

/***/ "./assets/js/src/lazyload.js":
/*!***********************************!*\
  !*** ./assets/js/src/lazyload.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction lazyLoad() {\n  //   const lazyLoadImages = document.querySelectorAll('img[data-src]');\n  //   lazyLoadImages.forEach((img) => {\n  //     img.src = img.dataset.src;\n  //     img.onload = () => img.removeAttribute('data-src');\n  //   });\n  // }\n  //\n  // create config object: rootMargin and threshold\n  // are two properties exposed by the interface\n  const config = {\n    rootMargin: '0px 0px 50px 0px',\n    threshold: 0\n  }; // register the config object with an instance\n  // of intersectionObserver\n\n  let observer = new IntersectionObserver(function (entries, self) {\n    // iterate over each entry\n    entries.forEach(entry => {\n      // process just the images that are intersecting.\n      // isIntersecting is a property exposed by the interface\n      if (entry.isIntersecting) {\n        // custom function that copies the path to the img\n        // from data-src to src\n        preloadImage(entry.target); // the image is now in place, stop watching\n\n        self.unobserve(entry.target);\n      }\n    });\n  }, config);\n  const imgs = document.querySelectorAll('[data-src]');\n  imgs.forEach(img => {\n    observer.observe(img);\n  });\n\n  function preloadImage(img) {\n    const src = img.getAttribute('data-src');\n\n    if (!src) {\n      return;\n    }\n\n    img.src = src;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (lazyLoad);\n\n//# sourceURL=webpack:///./assets/js/src/lazyload.js?");

/***/ }),

/***/ "./assets/scss/style.scss":
/*!********************************!*\
  !*** ./assets/scss/style.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./assets/scss/style.scss?");

/***/ })

/******/ });