webpackHotUpdate("main",{

/***/ "./assets/js/src/lazyload.js":
/*!***********************************!*\
  !*** ./assets/js/src/lazyload.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction lazyLoad() {\n  //   const lazyLoadImages = document.querySelectorAll('img[data-src]');\n  //   lazyLoadImages.forEach((img) => {\n  //     img.src = img.dataset.src;\n  //     img.onload = () => img.removeAttribute('data-src');\n  //   });\n  // }\n  //\n  // create config object: rootMargin and threshold\n  // are two properties exposed by the interface\n  const config = {\n    rootMargin: '0px 0px 50px 0px',\n    threshold: 0\n  }; // register the config object with an instance\n  // of intersectionObserver\n\n  let observer = new IntersectionObserver(function (entries, self) {\n    // iterate over each entry\n    entries.forEach(entry => {\n      // process just the images that are intersecting.\n      // isIntersecting is a property exposed by the interface\n      if (entry.isIntersecting) {\n        // custom function that copies the path to the img\n        // from data-src to src\n        preloadImage(entry.target); // the image is now in place, stop watching\n\n        self.unobserve(entry.target);\n      }\n    });\n  }, config);\n  const imgs = document.querySelectorAll('[data-src]');\n  imgs.forEach(img => {\n    observer.observe(img);\n  });\n\n  function preloadImage(img) {\n    const src = img.getAttribute('data-src');\n\n    if (!src) {\n      return;\n    }\n\n    img.src = src;\n\n    _updateMonitoring();\n  } // Just for the monitoring purpose. Isn't needed in real projects\n\n\n  function _updateMonitoring() {// const container = document.getElementById('isIntersecting');\n    // const placeholder = container.querySelector('.placeholder')\n    // loaded += 1;\n    // placeholder.innerHTML = loaded;\n    // container.style.opacity = 1;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (lazyLoad);\n\n//# sourceURL=webpack:///./assets/js/src/lazyload.js?");

/***/ })

})