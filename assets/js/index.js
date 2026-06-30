/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/src/contact.js"
/*!**********************************!*\
  !*** ./assets/js/src/contact.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contactMe() {
  const form = document.querySelector("form");
  form.addEventListener("submit", async event => {
    // prevent the form submit from refreshing the page
    event.preventDefault();

    // Access form elements directly by their IDs
    const senderNameInput = document.getElementById("name");
    const senderEmailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    // Check if the inputs are found before accessing their values
    if (senderNameInput && senderEmailInput && messageInput) {
      const senderName = senderNameInput.value;
      const senderEmail = senderEmailInput.value;
      const message = messageInput.value;

      // Use your API endpoint URL you copied from the previous step
      const endpoint = "https://f1gpiut934.execute-api.us-east-1.amazonaws.com/default/SendContactEmail";

      // We use JSON.stringify here so the data can be sent as a string via HTTP
      const body = JSON.stringify({
        senderName,
        senderEmail,
        message
      });
      const requestOptions = {
        method: "POST",
        body
      };
      try {
        const response = await fetch(endpoint, requestOptions);
        if (!response.ok) {
          throw new Error("Error in fetch");
        }
        const result = await response.json();
        document.getElementById("result-text").innerText = "Email sent successfully!";
      } catch (error) {
        console.error('An unknown error occurred:', error);
        document.getElementById("result-text").innerText = "An unknown error occurred.";
      }
    } else {
      console.error('Form elements not found or undefined.');
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactMe);

/***/ },

/***/ "./assets/js/src/footer.js"
/*!*********************************!*\
  !*** ./assets/js/src/footer.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Footer: () => (/* binding */ Footer)
/* harmony export */ });
class Footer {
  constructor() {
    // Sets copyright year
    function footerDate() {
      const d = new Date();
      const fullYear = d.getFullYear();
      document.querySelector('#currentYear').innerHTML = fullYear;
    }
    return footerDate();
  }
}

/***/ },

/***/ "./assets/js/src/lazyload.js"
/*!***********************************!*\
  !*** ./assets/js/src/lazyload.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function lazyLoad() {
  const config = {
    rootMargin: '0px 0px 50px 0px',
    threshold: 0
  };
  let observer = new IntersectionObserver(function (entries, self) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        preloadImage(entry.target);
        self.unobserve(entry.target);
      }
    });
  }, config);
  const imgs = document.querySelectorAll('[data-src]');
  imgs.forEach(img => {
    observer.observe(img);
  });
  function preloadImage(img) {
    const src = img.getAttribute('data-src');
    if (!src) {
      return;
    }
    img.src = src;
    img.onload = function () {
      img.removeAttribute('data-src');
    };
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lazyLoad);

/***/ },

/***/ "./assets/scss/style.scss"
/*!********************************!*\
  !*** ./assets/scss/style.scss ***!
  \********************************/
() {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nExpected hex digit.\n\u001b[34m     ╷\u001b[0m\n\u001b[34m3488 │\u001b[0m     color: #8a6f3cd\u001b[31m\u001b[0m;\n\u001b[34m     │\u001b[0m \u001b[31m                   ^\u001b[0m\n\u001b[34m     ╵\u001b[0m\n  file:///Users/rehmpke/Repositories/rogerehmpkesite/assets/scss/4-pages/_home.scss 3488:20  @use\n  file:///Users/rehmpke/Repositories/rogerehmpkesite/assets/scss/style.scss 31:1             root stylesheet\n    at tryRunOrWebpackError (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/errors/HookWebpackError.js:122:9)\n    at __webpack_require_module__ (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Compilation.js:5801:14)\n    at __webpack_require__ (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Compilation.js:5744:20)\n    at /Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Compilation.js:5836:22\n    at symbolIterator (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/tapable/lib/HookCodeFactory.js:31:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/tapable/lib/Hook.js:21:14)\n    at /Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Compilation.js:5719:45\n    at symbolIterator (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/neo-async/async.js:3463:5)\n    at /Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Compilation.js:5676:18\n    at symbolIterator (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/neo-async/async.js:3463:5)\n    at /Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Compilation.js:5638:16\n    at symbolIterator (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/neo-async/async.js:3527:9)\n    at /Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Compilation.js:5578:8\n    at /Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Compilation.js:3919:6\n    at /Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/errors/HookWebpackError.js:101:2\n    at Hook.eval [as callAsync] (eval at create (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/tapable/lib/HookCodeFactory.js:31:10), <anonymous>:15:1)\n    at Cache.store (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Cache.js:130:20)\n    at ItemCacheFacade.store (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/CacheFacade.js:153:15)\n    at /Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Compilation.js:3918:11\n    at /Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Cache.js:114:5\n    at Hook.eval [as callAsync] (eval at create (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/tapable/lib/HookCodeFactory.js:31:10), <anonymous>:16:1)\n    at Cache.get (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Cache.js:96:18)\n    at ItemCacheFacade.get (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/CacheFacade.js:125:15)\n    at Compilation._codeGenerationModule (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Compilation.js:3884:9)\n    at codeGen (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Compilation.js:5566:11)\n    at symbolIterator (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/neo-async/async.js:3463:5)\n    at /Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Compilation.js:5596:14\n    at processQueue (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/util/processAsyncTree.js:69:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:85:11)\n-- inner error --\nError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nExpected hex digit.\n\u001b[34m     ╷\u001b[0m\n\u001b[34m3488 │\u001b[0m     color: #8a6f3cd\u001b[31m\u001b[0m;\n\u001b[34m     │\u001b[0m \u001b[31m                   ^\u001b[0m\n\u001b[34m     ╵\u001b[0m\n  file:///Users/rehmpke/Repositories/rogerehmpkesite/assets/scss/4-pages/_home.scss 3488:20  @use\n  file:///Users/rehmpke/Repositories/rogerehmpkesite/assets/scss/style.scss 31:1             root stylesheet\n    at Object.<anonymous> (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!/Users/rehmpke/Repositories/rogerehmpkesite/assets/scss/style.scss:1:7)\n    at /Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:684:10\n    at Hook.eval [as call] (eval at create (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at Hook.CALL_DELEGATE [as _call] (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/tapable/lib/Hook.js:16:14)\n    at /Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Compilation.js:5803:41\n    at tryRunOrWebpackError (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/errors/HookWebpackError.js:117:7)\n    at __webpack_require_module__ (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Compilation.js:5801:14)\n    at __webpack_require__ (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Compilation.js:5744:20)\n    at /Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Compilation.js:5836:22\n    at symbolIterator (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/tapable/lib/HookCodeFactory.js:31:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/tapable/lib/Hook.js:21:14)\n    at /Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Compilation.js:5719:45\n    at symbolIterator (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/neo-async/async.js:3463:5)\n    at /Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Compilation.js:5676:18\n    at symbolIterator (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/neo-async/async.js:3463:5)\n    at /Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Compilation.js:5638:16\n    at symbolIterator (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/neo-async/async.js:3527:9)\n    at /Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Compilation.js:5578:8\n    at /Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Compilation.js:3919:6\n    at /Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/errors/HookWebpackError.js:101:2\n    at Hook.eval [as callAsync] (eval at create (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/tapable/lib/HookCodeFactory.js:31:10), <anonymous>:15:1)\n    at Cache.store (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Cache.js:130:20)\n    at ItemCacheFacade.store (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/CacheFacade.js:153:15)\n    at /Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Compilation.js:3918:11\n    at /Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Cache.js:114:5\n    at Hook.eval [as callAsync] (eval at create (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/tapable/lib/HookCodeFactory.js:31:10), <anonymous>:16:1)\n    at Cache.get (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Cache.js:96:18)\n    at ItemCacheFacade.get (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/CacheFacade.js:125:15)\n    at Compilation._codeGenerationModule (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Compilation.js:3884:9)\n    at codeGen (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Compilation.js:5566:11)\n    at symbolIterator (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/neo-async/async.js:3463:5)\n    at /Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/Compilation.js:5596:14\n    at processQueue (/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/webpack/lib/util/processAsyncTree.js:69:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:85:11)\n\nGenerated code for /Users/rehmpke/Repositories/rogerehmpkesite/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!/Users/rehmpke/Repositories/rogerehmpkesite/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!/Users/rehmpke/Repositories/rogerehmpkesite/assets/scss/style.scss\n1 | throw new Error(\"Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nExpected hex digit.\\n\\u001b[34m     ╷\\u001b[0m\\n\\u001b[34m3488 │\\u001b[0m     color: #8a6f3cd\\u001b[31m\\u001b[0m;\\n\\u001b[34m     │\\u001b[0m \\u001b[31m                   ^\\u001b[0m\\n\\u001b[34m     ╵\\u001b[0m\\n  file:///Users/rehmpke/Repositories/rogerehmpkesite/assets/scss/4-pages/_home.scss 3488:20  @use\\n  file:///Users/rehmpke/Repositories/rogerehmpkesite/assets/scss/style.scss 31:1             root stylesheet\");");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ./assets/js/src/index.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scss/style.scss */ "./assets/scss/style.scss");
/* harmony import */ var _src_contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/contact.js */ "./assets/js/src/contact.js");
/* harmony import */ var _src_footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/footer.js */ "./assets/js/src/footer.js");
/* harmony import */ var _src_lazyload_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/lazyload.js */ "./assets/js/src/lazyload.js");




let footer = new _src_footer_js__WEBPACK_IMPORTED_MODULE_2__.Footer();
footer.footerDate;
document.addEventListener('DOMContentLoaded', function () {
  (0,_src_lazyload_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_src_contact_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map