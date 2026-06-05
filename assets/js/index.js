/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/src/contact.js":
/*!**********************************!*\
  !*** ./assets/js/src/contact.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./assets/js/src/footer.js":
/*!*********************************!*\
  !*** ./assets/js/src/footer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./assets/js/src/lazyload.js":
/*!***********************************!*\
  !*** ./assets/js/src/lazyload.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./assets/scss/style.scss":
/*!********************************!*\
  !*** ./assets/scss/style.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
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