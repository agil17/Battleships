/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/* ---------------------------------------- */
/* My additions at the very bottom */
/* ---------------------------------------- */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

 html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
  
  /* Sections
     ========================================================================== */
  
  /**
   * Remove the margin in all browsers.
   */
  
  body {
    margin: 0;
  }
  
  /**
   * Render the \`main\` element consistently in IE.
   */
  
  main {
    display: block;
  }
  
  /**
   * Correct the font size and margin on \`h1\` elements within \`section\` and
   * \`article\` contexts in Chrome, Firefox, and Safari.
   */
  
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  
  /* Grouping content
     ========================================================================== */
  
  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */
  
  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }
  
  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */
  
  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  /* Text-level semantics
     ========================================================================== */
  
  /**
   * Remove the gray background on active links in IE 10.
   */
  
  a {
    background-color: transparent;
  }
  
  /**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */
  
  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }
  
  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */
  
  b,
  strong {
    font-weight: bolder;
  }
  
  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */
  
  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  
  /**
   * Add the correct font size in all browsers.
   */
  
  small {
    font-size: 80%;
  }
  
  /**
   * Prevent \`sub\` and \`sup\` elements from affecting the line height in
   * all browsers.
   */
  
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  
  sub {
    bottom: -0.25em;
  }
  
  sup {
    top: -0.5em;
  }
  
  /* Embedded content
     ========================================================================== */
  
  /**
   * Remove the border on images inside links in IE 10.
   */
  
  img {
    border-style: none;
  }
  
  /* Forms
     ========================================================================== */
  
  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */
  
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }
  
  /**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */
  
  button,
  input { /* 1 */
    overflow: visible;
  }
  
  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */
  
  button,
  select { /* 1 */
    text-transform: none;
  }
  
  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */
  
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  
  /**
   * Remove the inner border and padding in Firefox.
   */
  
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  
  /**
   * Restore the focus styles unset by the previous rule.
   */
  
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  
  /**
   * Correct the padding in Firefox.
   */
  
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  
  /**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from \`fieldset\` elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    \`fieldset\` elements in all browsers.
   */
  
  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }
  
  /**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */
  
  progress {
    vertical-align: baseline;
  }
  
  /**
   * Remove the default vertical scrollbar in IE 10+.
   */
  
  textarea {
    overflow: auto;
  }
  
  /**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */
  
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }
  
  /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */
  
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  
  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */
  
  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }
  
  /**
   * Remove the inner padding in Chrome and Safari on macOS.
   */
  
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  
  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to \`inherit\` in Safari.
   */
  
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }
  
  /* Interactive
     ========================================================================== */
  
  /*
   * Add the correct display in Edge, IE 10+, and Firefox.
   */
  
  details {
    display: block;
  }
  
  /*
   * Add the correct display in all browsers.
   */
  
  summary {
    display: list-item;
  }
  
  /* Misc
     ========================================================================== */
  
  /**
   * Add the correct display in IE 10+.
   */
  
  template {
    display: none;
  }
  
  /**
   * Add the correct display in IE 10.
   */
  
  [hidden] {
    display: none;
  }
  
  /* ---------------------------------------- */
  /* Stu's Addition */
  
  /* makes sizing simpler */
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  /* no margins or padding */
  
  * {
    margin: 0;
    padding: 0;
  }
  /* ---------------------------------------- */`, "",{"version":3,"sources":["webpack://./src/styles/normalize.css"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/* ---------------------------------------- */\n/* My additions at the very bottom */\n/* ---------------------------------------- */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type=\"button\"],\n  [type=\"reset\"],\n  [type=\"submit\"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type=\"button\"]:-moz-focusring,\n  [type=\"reset\"]:-moz-focusring,\n  [type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type=\"checkbox\"],\n  [type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type=\"number\"]::-webkit-inner-spin-button,\n  [type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }\n  \n  /* ---------------------------------------- */\n  /* Stu's Addition */\n  \n  /* makes sizing simpler */\n  \n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  \n  /* no margins or padding */\n  \n  * {\n    margin: 0;\n    padding: 0;\n  }\n  /* ---------------------------------------- */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* body {
  color: red;
} */

html {
  height: 100vh;
  width: 100vw;
}

body {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(55,54,113,1) 49%);
  font-family: "Goldman", Arial, Helvetica, sans-serif;
}

body > h1 {
  color: white;
  text-align: center;
  font-size: 4rem;
}

body > .game-message {
  color: white;
  text-align: center;
  font-size: 2rem;
}

.player-boards-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  column-gap: 100px;
  flex-wrap: wrap;
}

.player-container > h1, .cpu-container > h1 {
  text-align: center;
  color: white;
}

.player-board, .cpu-board {
  display: grid;
  place-content: center;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  border: solid red 2px;
  width: 400px;
  height: 400px;
}

.player-board > button:hover {
  background-color: gray;
}

.player-board > .player-square.ship {
  background-color: blue;
}

.player-board > .player-square.miss, .cpu-board > .cpu-square.miss {
  background-color: red;
}

.player-board > .player-square.hit, .cpu-board > .cpu-square.hit {
  background-color: green;
}



.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  margin-top: 16px;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;;GAEG;;AAEH;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,4EAA4E;EAC5E,oDAAoD;AACtD;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,sCAAsC;EACtC,mCAAmC;EACnC,qBAAqB;EACrB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;AACzB;;;;AAIA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,gBAAgB;AAClB","sourcesContent":["/* body {\n  color: red;\n} */\n\nhtml {\n  height: 100vh;\n  width: 100vw;\n}\n\nbody {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(55,54,113,1) 49%);\n  font-family: \"Goldman\", Arial, Helvetica, sans-serif;\n}\n\nbody > h1 {\n  color: white;\n  text-align: center;\n  font-size: 4rem;\n}\n\nbody > .game-message {\n  color: white;\n  text-align: center;\n  font-size: 2rem;\n}\n\n.player-boards-container {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  column-gap: 100px;\n  flex-wrap: wrap;\n}\n\n.player-container > h1, .cpu-container > h1 {\n  text-align: center;\n  color: white;\n}\n\n.player-board, .cpu-board {\n  display: grid;\n  place-content: center;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: solid red 2px;\n  width: 400px;\n  height: 400px;\n}\n\n.player-board > button:hover {\n  background-color: gray;\n}\n\n.player-board > .player-square.ship {\n  background-color: blue;\n}\n\n.player-board > .player-square.miss, .cpu-board > .cpu-square.miss {\n  background-color: red;\n}\n\n.player-board > .player-square.hit, .cpu-board > .cpu-square.hit {\n  background-color: green;\n}\n\n\n\n.btn-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 8px;\n  margin-top: 16px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/normalize.css":
/*!**********************************!*\
  !*** ./src/styles/normalize.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/classes/Dom.js":
/*!************************************!*\
  !*** ./src/modules/classes/Dom.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dom)
/* harmony export */ });
/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoard */ "./src/modules/classes/GameBoard.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/modules/classes/Player.js");



class Dom {
  static players = [new _Player__WEBPACK_IMPORTED_MODULE_1__["default"]("Player"), new _Player__WEBPACK_IMPORTED_MODULE_1__["default"]()];

  constructor() {
    this.shipIndex = 0;
    this.playerGameBoard = new _GameBoard__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.cpuGameBoard = new _GameBoard__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.ships = Object.values(this.playerGameBoard.ships);
    this.gameOver = false;
  }

  initializeDom() {
    this.createPlayerContainer();
    this.createCpuContainer();
    this.addEventListenerToDirBtn();
    this.addEventListenerToResetBtn();
  }

  addEventListenerToCpuShips() {
    const cpuSquares = document.querySelectorAll(".cpu-square");
    cpuSquares.forEach((square) => {
      square.addEventListener("click", (e) => {
        this.attackCpuShipsEventListener(e);
      });
    });
  }

  addEventListenerToDirBtn() {
    const shipDirBtn = document.querySelector(".ship-dir-btn");
    shipDirBtn.addEventListener("click", this.changeDirectionEvent);
  }

  addEventListenerToResetBtn() {
    const reset = document.querySelector(".reset-game");
    // reset.addEventListener("click", () => {
    //   this.shipIndex = 0;
    //   this.gameOver = false;
    //   this.playerGameBoard = new GameBoard();
    //   this.cpuGameBoard = new GameBoard();
    //   this.initializeDom();
    // });
    reset.addEventListener("click", () => {this.resetGameEventListener(this)});
  }

  changeDirectionEvent() {
    const shipDirBtn = document.querySelector(".ship-dir-btn");
    shipDirBtn.textContent =
      shipDirBtn.textContent === "vertical" ? "horizontal" : "vertical";
  }

  attackCpuShipsEventListener(e) {
    const row = parseInt(e.target.dataset.row);
    const col = parseInt(e.target.dataset.col);
    const gameMessage = document.querySelector(".game-message");

    if (
      this.cpuGameBoard.board[row][col] &&
      this.cpuGameBoard.board[row][col] !== "hit" &&
      this.cpuGameBoard.board[row][col] !== "miss"
    ) {
      // console.log(this.cpuGameBoard.board[row][col]);
      this.cpuGameBoard.ships[this.cpuGameBoard.board[row][col]].hit();
      // console.log(this.cpuGameBoard.ships[this.cpuGameBoard.board[row][col]]);
      gameMessage.textContent = "CPU SHIP WAS HIT!";
      this.cpuGameBoard.board[row][col] = "hit";
      // console.log("CPU", this.cpuGameBoard.board);
      if (this.cpuGameBoard.allSunk()) {
        this.gameOver = true;
        gameMessage.textContent = "PLAYER HAS WON!";
      }
      this.renderCpuBoard();
      

      Dom.players[1].randomAttack();
      const ranRow = Dom.players[1].getRow();
      const ranCol = Dom.players[1].getCol();
      if (this.playerGameBoard.board[ranRow][ranCol]) {
        this.playerGameBoard.board[ranRow][ranCol] = "hit";
        // console.log("Player", this.playerGameBoard.board);
        if (this.playerGameBoard.allSunk()) {
          this.gameOver = true;
          gameMessage.textContent = "CPU HAS WON!";
        }
        this.renderPlayerBoard();
      } else {
        this.playerGameBoard.board[ranRow][ranCol] = "miss";
        // console.log("Player", this.playerGameBoard.board);
        this.renderPlayerBoard();
      }
    } else {
      gameMessage.textContent = "MISS!";
      this.cpuGameBoard.board[row][col] = "miss";
      // console.log("CPU", this.cpuGameBoard.board);
      this.renderCpuBoard();
      Dom.players[1].randomAttack();
      const ranRow = Dom.players[1].getRow();
      const ranCol = Dom.players[1].getCol();
      if (this.playerGameBoard.board[ranRow][ranCol]) {
        this.playerGameBoard.board[ranRow][ranCol] = "hit";
        // console.log("Player", this.playerGameBoard.board);
        this.renderPlayerBoard();
      } else {
        this.playerGameBoard.board[ranRow][ranCol] = "miss";
        // console.log("Player", this.playerGameBoard.board);
        this.renderPlayerBoard();
      }
    }
  }

  createCpuContainer() {
    const playerContainers = document.querySelector(".player-boards-container");
    const cpuContainer = document.createElement("div");
    cpuContainer.classList.add("cpu-container");
    playerContainers.appendChild(cpuContainer);
    this.createCpuHeader();
    const cpuBoard = document.createElement("div");
    cpuBoard.classList.add("cpu-board");
    cpuContainer.appendChild(cpuBoard);
    this.renderCpuBoard();
  }

  createPlayerContainer() {
    const gameMessage = document.querySelector(".game-message");
    gameMessage.textContent = "Waiting...";
    const playerContainers = document.querySelector(".player-boards-container");
    while (playerContainers.firstChild) {
      playerContainers.removeChild(playerContainers.firstChild);
    }
    const playerContainer = document.createElement("div");
    playerContainer.classList.add("player-container");
    playerContainers.appendChild(playerContainer);
    this.createPlayerHeader();
    const playerBoard = document.createElement("div");
    playerBoard.classList.add("player-board");
    playerContainer.appendChild(playerBoard);
    this.renderPlayerBoard();
  }

  createCpuHeader() {
    const cpuContainer = document.querySelector(".cpu-container");
    const cpuHeader = document.createElement("h1");
    cpuHeader.textContent = "Cpu Board";
    cpuContainer.appendChild(cpuHeader);
  }

  createPlayerHeader() {
    const playerContainer = document.querySelector(".player-container");
    const playerHeader = document.createElement("h1");
    playerHeader.textContent = "Player Board";
    playerContainer.appendChild(playerHeader);
  }

  placePlayerShipsEventListener(e) {
    const row = parseInt(e.target.dataset.row);
    const col = parseInt(e.target.dataset.col);
    const orientation = document.querySelector(".ship-dir-btn").textContent;
    const ship = this.ships[this.shipIndex];
    try {
      this.playerGameBoard.placeShip(row, col, ship, orientation);
      this.shipIndex++;
      this.renderPlayerBoard();
      if (this.shipIndex >= 5) {
        this.cpuGameBoard.randomlyPlaceShip();
        // console.log(this.cpuGameBoard.board);
        const gameMessage = document.querySelector(".game-message");
        gameMessage.textContent = "Begin Game!";
        this.addEventListenerToCpuShips();
      }
    } catch (error) {
      console.log(error);
    }
  }

  renderCpuBoard() {
    const cpuBoard = document.querySelector(".cpu-board");
    while (cpuBoard.firstChild) {
      cpuBoard.removeChild(cpuBoard.firstChild);
    }
    for (let i = 0; i < this.cpuGameBoard.board.length; i++) {
      for (let j = 0; j < this.cpuGameBoard.board[i].length; j++) {
        const square = document.createElement("button");
        square.classList.add("cpu-square");
        square.dataset.row = i;
        square.dataset.col = j;
        if (this.cpuGameBoard.board[i][j] !== null) {
          if (this.cpuGameBoard.board[i][j] === "hit") {
            square.classList.add("hit");
          } else if (this.cpuGameBoard.board[i][j] === "miss") {
            square.classList.add("miss");
          } else {
            if (this.shipIndex >= 5) {
              square.addEventListener("click", (e) => {
                this.attackCpuShipsEventListener(e);
              });
            }
            square.classList.add("ship");
          }
        } else if (this.shipIndex >= 5 && this.gameOver === false) {
          square.addEventListener("click", (e) => {
            this.attackCpuShipsEventListener(e);
          });
        }
        cpuBoard.appendChild(square);
      }
    }
  }

  renderPlayerBoard() {
    const playerBoard = document.querySelector(".player-board");
    while (playerBoard.firstChild) {
      playerBoard.removeChild(playerBoard.firstChild);
    }
    for (let i = 0; i < this.playerGameBoard.board.length; i++) {
      for (let j = 0; j < this.playerGameBoard.board[i].length; j++) {
        const square = document.createElement("button");
        square.classList.add("player-square");
        square.dataset.row = i;
        square.dataset.col = j;
        if (this.playerGameBoard.board[i][j] !== null) {
          if (this.playerGameBoard.board[i][j] === "hit") {
            square.classList.add("hit");
          } else if (this.playerGameBoard.board[i][j] === "miss") {
            square.classList.add("miss");
          } else {
            square.classList.add("ship");
          }
        } else if (this.shipIndex < 5) {
          square.addEventListener("click", (e) => {
            this.placePlayerShipsEventListener(e);
          });
        }
        playerBoard.appendChild(square);
      }
    }
  }

  resetGameEventListener(dom) {
    this.shipIndex = 0;
    this.gameOver = false;
    this.playerGameBoard = new _GameBoard__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.cpuGameBoard = new _GameBoard__WEBPACK_IMPORTED_MODULE_0__["default"]();
    dom.initializeDom();
  }
}


/***/ }),

/***/ "./src/modules/classes/GameBoard.js":
/*!******************************************!*\
  !*** ./src/modules/classes/GameBoard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/modules/classes/Ship.js");


class GameBoard {
  constructor() {
    this.board = this.createBoard();
    this.ships = {
      Carrier: new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"]("Carrier", 5),
      Battleship: new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"]("Battleship", 4),
      Destroyer: new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"]("Destroyer", 3),
      Submarine: new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"]("Submarine", 3),
      PatrolBoat: new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"]("PatrolBoat", 2),
    };
  }

  allSunk() {
    const ships = Object.values(this.ships);
    let isAllSunk = true;
    ships.forEach((ship) => {
      if (ship.isSunk() === false) {
        isAllSunk = false;
      }
    });
    return isAllSunk;
  }

  createBoard() {
    const newBoard = [...new Array(10)].map(() => new Array(10).fill(null));
    return newBoard;
  }

  placeShip(row, col, ship, orientation = "vertical") {
    if (row < 0 || row >= this.board.length) {
      throw new Error('Row out of board');
    }
    if (col < 0 || col >= this.board.length) {
      throw new Error('Column out of board');
    }

    const shipLength = ship.length;
    if (orientation === 'vertical') {
      if (row + shipLength > this.board.length) {
        throw new Error('Ship does not fit');
      }
    } else if (col + shipLength > this.board.length) {
      throw new Error('Ship does not fit');
    }

    if (orientation === 'vertical') {
      for (let i = row; i < row + shipLength; i += 1) {
        if (this.board[i][col]) {
          throw new Error('A ship already exists');
        }
      }

      for (let i = row; i < row + shipLength; i += 1) {
        this.board[i][col] = ship.name;
      }
    } else {
      for (let i = col; i < col + shipLength; i += 1) {
        if (this.board[row][i]) {
          throw new Error('A ship already exists');
        }
      }

      for (let i = col; i < col + shipLength; i += 1) {
        this.board[row][i] = ship.name;
      }
    }

    // if (
    //   row < 0 ||
    //   row >= 10 ||
    //   row + ship.length >= 10 ||
    //   col < 0 ||
    //   col >= 10 ||
    //   col + ship.length >= 10
    // ) {
    //   throw new Error("Invalid placement of ship");
    // }
    // if (orientation === "vertical") {
    //   for (let i = row; i < row + ship.length; i++) {
    //     if (this.board[i][col]) {
    //       throw new Error("Invalid ship placement");
    //     }
    //   }
    //   for (let i = row; i < row + ship.length; i++) {
    //     this.board[i][col] = ship.name;
    //   }
    // } else if (orientation === "horizontal") {
    //   for (let i = col; i < col + ship.length; i++) {
    //     if (this.board[row][i]) {
    //       throw new Error("Invalid ship placement");
    //     }
    //   }
    //   for (let i = col; i < col + ship.length; i++) {
    //     this.board[row][i] = ship.name;
    //   }
    // }
  }

  randomlyPlaceShip() {
    const orientation = ["horizonal", "vertical"];
    Object.values(this.ships).forEach((ship) => {
      let placed = false;
      while (!placed) {
        const row = Math.floor(Math.random() * 10);
        const col = Math.floor(Math.random() * 10);
        const dir = orientation[Math.floor(Math.random() * orientation.length)];
        try {
          this.placeShip(row, col, ship, dir);
          placed = true;
        } catch (error) {
          // PlaceShip throws error before placed becomes true and tries again with the same ship
        }
      }
    });
  }
}


/***/ }),

/***/ "./src/modules/classes/Player.js":
/*!***************************************!*\
  !*** ./src/modules/classes/Player.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
class Player {
  constructor(name = "CPU") {
    this.name = name;
    this.previouslyAttacked = [];
    this.row = null;
    this.col = null;
  }

  randomAttack() {
    let ranRow = Math.floor(Math.random() * 10);
    let ranCol = Math.floor(Math.random() * 10);
    this.setCol(ranCol);
    this.setRow(ranRow);
    let pair = `${ranRow},${ranCol}`;

    while (this.previouslyAttacked.includes(pair)) {
      ranRow = Math.floor(Math.random() * 10);
      ranCol = Math.floor(Math.random() * 10);
      this.setRow(ranRow);
      this.setCol(ranCol);
      pair = `${ranRow},${ranCol}`;
      if (!this.previouslyAttacked.includes(pair)) {
        this.previouslyAttacked.push(pair);
      }
    }
    // return { ranRow, ranCol };
  }

  getRow() {
    return this.row;
  }

  getCol() {
    return this.col;
  }

  setRow(row) {
    this.row = row;
  }

  setCol(col) {
    this.col = col;
  }
}


/***/ }),

/***/ "./src/modules/classes/Ship.js":
/*!*************************************!*\
  !*** ./src/modules/classes/Ship.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.hits = 0;
  }

  hit() {
    this.hits++;
  }

  isSunk() {
    return this.hits >= this.length;
  }
}

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/normalize.css */ "./src/styles/normalize.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _modules_classes_Dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes/Dom */ "./src/modules/classes/Dom.js");





const dom = new _modules_classes_Dom__WEBPACK_IMPORTED_MODULE_2__["default"]();

dom.initializeDom();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQWdDO0FBQ0o7O0FBRVk7O0FBRXhDLGdCQUFnQiw0REFBRzs7QUFFbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YW5pbGxhdGVtcGxhdGUvLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vdmFuaWxsYXRlbXBsYXRlLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdmFuaWxsYXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly92YW5pbGxhdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly92YW5pbGxhdGVtcGxhdGUvLi9zcmMvc3R5bGVzL25vcm1hbGl6ZS5jc3M/NDNmNCIsIndlYnBhY2s6Ly92YW5pbGxhdGVtcGxhdGUvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3ZhbmlsbGF0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly92YW5pbGxhdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3ZhbmlsbGF0ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly92YW5pbGxhdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvY2xhc3Nlcy9Eb20uanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvY2xhc3Nlcy9HYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvY2xhc3Nlcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvY2xhc3Nlcy9TaGlwLmpzIiwid2VicGFjazovL3ZhbmlsbGF0ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92YW5pbGxhdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdmFuaWxsYXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly92YW5pbGxhdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92YW5pbGxhdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly92YW5pbGxhdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3ZhbmlsbGF0ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xuXG4vKiBEb2N1bWVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogTXkgYWRkaXRpb25zIGF0IHRoZSB2ZXJ5IGJvdHRvbSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuICovXG5cbiBodG1sIHtcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xuICB9XG4gIFxuICAvKiBTZWN0aW9uc1xuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICBcbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbiAgICovXG4gIFxuICBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIFxcYG1haW5cXGAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXG4gICAqL1xuICBcbiAgbWFpbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBcXGBoMVxcYCBlbGVtZW50cyB3aXRoaW4gXFxgc2VjdGlvblxcYCBhbmRcbiAgICogXFxgYXJ0aWNsZVxcYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXG4gICAqL1xuICBcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIG1hcmdpbjogMC42N2VtIDA7XG4gIH1cbiAgXG4gIC8qIEdyb3VwaW5nIGNvbnRlbnRcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiAgXG4gIC8qKlxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxuICAgKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cbiAgICovXG4gIFxuICBociB7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cbiAgICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xuICB9XG4gIFxuICAvKipcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAgICovXG4gIFxuICBwcmUge1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG4gIH1cbiAgXG4gIC8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gIFxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxuICAgKi9cbiAgXG4gIGEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIFxuICAvKipcbiAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cbiAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cbiAgICovXG4gIFxuICBhYmJyW3RpdGxlXSB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXG4gIH1cbiAgXG4gIC8qKlxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuICAgKi9cbiAgXG4gIGIsXG4gIHN0cm9uZyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgfVxuICBcbiAgLyoqXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gICAqL1xuICBcbiAgY29kZSxcbiAga2JkLFxuICBzYW1wIHtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xuICB9XG4gIFxuICAvKipcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gICAqL1xuICBcbiAgc21hbGwge1xuICAgIGZvbnQtc2l6ZTogODAlO1xuICB9XG4gIFxuICAvKipcbiAgICogUHJldmVudCBcXGBzdWJcXGAgYW5kIFxcYHN1cFxcYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cbiAgICogYWxsIGJyb3dzZXJzLlxuICAgKi9cbiAgXG4gIHN1YixcbiAgc3VwIHtcbiAgICBmb250LXNpemU6IDc1JTtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICB9XG4gIFxuICBzdWIge1xuICAgIGJvdHRvbTogLTAuMjVlbTtcbiAgfVxuICBcbiAgc3VwIHtcbiAgICB0b3A6IC0wLjVlbTtcbiAgfVxuICBcbiAgLyogRW1iZWRkZWQgY29udGVudFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICBcbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXG4gICAqL1xuICBcbiAgaW1nIHtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIH1cbiAgXG4gIC8qIEZvcm1zXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gIFxuICAvKipcbiAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4gICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbiAgICovXG4gIFxuICBidXR0b24sXG4gIGlucHV0LFxuICBvcHRncm91cCxcbiAgc2VsZWN0LFxuICB0ZXh0YXJlYSB7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICAgIG1hcmdpbjogMDsgLyogMiAqL1xuICB9XG4gIFxuICAvKipcbiAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXG4gICAqL1xuICBcbiAgYnV0dG9uLFxuICBpbnB1dCB7IC8qIDEgKi9cbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxuICAgKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXG4gICAqL1xuICBcbiAgYnV0dG9uLFxuICBzZWxlY3QgeyAvKiAxICovXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICAgKi9cbiAgXG4gIGJ1dHRvbixcbiAgW3R5cGU9XCJidXR0b25cIl0sXG4gIFt0eXBlPVwicmVzZXRcIl0sXG4gIFt0eXBlPVwic3VibWl0XCJdIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgfVxuICBcbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXG4gICAqL1xuICBcbiAgYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuICBbdHlwZT1cImJ1dHRvblwiXTo6LW1vei1mb2N1cy1pbm5lcixcbiAgW3R5cGU9XCJyZXNldFwiXTo6LW1vei1mb2N1cy1pbm5lcixcbiAgW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAvKipcbiAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxuICAgKi9cbiAgXG4gIGJ1dHRvbjotbW96LWZvY3VzcmluZyxcbiAgW3R5cGU9XCJidXR0b25cIl06LW1vei1mb2N1c3JpbmcsXG4gIFt0eXBlPVwicmVzZXRcIl06LW1vei1mb2N1c3JpbmcsXG4gIFt0eXBlPVwic3VibWl0XCJdOi1tb3otZm9jdXNyaW5nIHtcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXG4gICAqL1xuICBcbiAgZmllbGRzZXQge1xuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXG4gICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gXFxgZmllbGRzZXRcXGAgZWxlbWVudHMgaW4gSUUuXG4gICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcbiAgICogICAgXFxgZmllbGRzZXRcXGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxuICAgKi9cbiAgXG4gIGxlZ2VuZCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICAgIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gICAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cbiAgICBwYWRkaW5nOiAwOyAvKiAzICovXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xuICB9XG4gIFxuICAvKipcbiAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cbiAgICovXG4gIFxuICBwcm9ncmVzcyB7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICB9XG4gIFxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXG4gICAqL1xuICBcbiAgdGV4dGFyZWEge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gIFxuICAvKipcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXG4gICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cbiAgICovXG4gIFxuICBbdHlwZT1cImNoZWNrYm94XCJdLFxuICBbdHlwZT1cInJhZGlvXCJdIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gICAgcGFkZGluZzogMDsgLyogMiAqL1xuICB9XG4gIFxuICAvKipcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxuICAgKi9cbiAgXG4gIFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuICBbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIFxuICAvKipcbiAgICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4gICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuICAgKi9cbiAgXG4gIFt0eXBlPVwic2VhcmNoXCJdIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG4gIH1cbiAgXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXG4gICAqL1xuICBcbiAgW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gXFxgaW5oZXJpdFxcYCBpbiBTYWZhcmkuXG4gICAqL1xuICBcbiAgOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgICBmb250OiBpbmhlcml0OyAvKiAyICovXG4gIH1cbiAgXG4gIC8qIEludGVyYWN0aXZlXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gIFxuICAvKlxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxuICAgKi9cbiAgXG4gIGRldGFpbHMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAvKlxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXG4gICAqL1xuICBcbiAgc3VtbWFyeSB7XG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xuICB9XG4gIFxuICAvKiBNaXNjXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gIFxuICAvKipcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxuICAgKi9cbiAgXG4gIHRlbXBsYXRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAvKipcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXG4gICAqL1xuICBcbiAgW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgLyogU3R1J3MgQWRkaXRpb24gKi9cbiAgXG4gIC8qIG1ha2VzIHNpemluZyBzaW1wbGVyICovXG4gIFxuICAqLFxuICAqOjpiZWZvcmUsXG4gICo6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIFxuICAvKiBubyBtYXJnaW5zIG9yIHBhZGRpbmcgKi9cbiAgXG4gICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9z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SUFDbEMsYUFBYSxFQUFFLE1BQU07RUFDdkI7O0VBRUE7aUZBQytFOztFQUUvRTs7SUFFRTs7RUFFRjtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7O0lBRUU7O0VBRUY7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7aUZBQytFOztFQUUvRTs7SUFFRTs7RUFFRjtJQUNFLGFBQWE7RUFDZjs7RUFFQTs7SUFFRTs7RUFFRjtJQUNFLGFBQWE7RUFDZjs7RUFFQSw2Q0FBNkM7RUFDN0MsbUJBQW1COztFQUVuQix5QkFBeUI7O0VBRXpCOzs7SUFHRSxzQkFBc0I7RUFDeEI7O0VBRUEsMEJBQTBCOztFQUUxQjtJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQSw2Q0FBNkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogTXkgYWRkaXRpb25zIGF0IHRoZSB2ZXJ5IGJvdHRvbSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuIGh0bWwge1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyogU2VjdGlvbnNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIGJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICAgKi9cXG4gIFxcbiAgbWFpbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gICAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgaDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXG4gIH1cXG4gIFxcbiAgLyogR3JvdXBpbmcgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICAgKi9cXG4gIFxcbiAgaHIge1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIHByZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbiAgfVxcbiAgXFxuICAvKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG4gIFxcbiAgYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGFiYnJbdGl0bGVdIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGIsXFxuICBzdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgY29kZSxcXG4gIGtiZCxcXG4gIHNhbXAge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBzbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAgICogYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuICBcXG4gIHN1YixcXG4gIHN1cCB7XFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICB9XFxuICBcXG4gIHN1YiB7XFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXG4gIH1cXG4gIFxcbiAgc3VwIHtcXG4gICAgdG9wOiAtMC41ZW07XFxuICB9XFxuICBcXG4gIC8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qKlxcbiAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcbiAgXFxuICBpbWcge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qIEZvcm1zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbixcXG4gIGlucHV0LFxcbiAgb3B0Z3JvdXAsXFxuICBzZWxlY3QsXFxuICB0ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uLFxcbiAgaW5wdXQgeyAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbixcXG4gIHNlbGVjdCB7IC8qIDEgKi9cXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqL1xcbiAgXFxuICBidXR0b24sXFxuICBbdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuICBbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG4gIFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG4gIFxcbiAgYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcbiAgW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcbiAgW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuICBbdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAgICovXFxuICBcXG4gIGJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG4gIFt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG4gIFt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcbiAgW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcbiAgXFxuICBmaWVsZHNldCB7XFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAgICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG4gIFxcbiAgbGVnZW5kIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gICAqL1xcbiAgXFxuICBwcm9ncmVzcyB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gICAqL1xcbiAgXFxuICB0ZXh0YXJlYSB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAgICovXFxuICBcXG4gIFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbiAgW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICAgKi9cXG4gIFxcbiAgW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbiAgW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICAgKi9cXG4gIFxcbiAgW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgfVxcbiAgXFxuICAvKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICAgKi9cXG4gIFxcbiAgOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICAgIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIH1cXG4gIFxcbiAgLyogSW50ZXJhY3RpdmVcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuICBcXG4gIC8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAgICovXFxuICBcXG4gIGRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIFxcbiAgLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbiAgXFxuICBzdW1tYXJ5IHtcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcbiAgfVxcbiAgXFxuICAvKiBNaXNjXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiAgXFxuICAvKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gICAqL1xcbiAgXFxuICB0ZW1wbGF0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBcXG4gIC8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICAgKi9cXG4gIFxcbiAgW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgXFxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuICAvKiBTdHUncyBBZGRpdGlvbiAqL1xcbiAgXFxuICAvKiBtYWtlcyBzaXppbmcgc2ltcGxlciAqL1xcbiAgXFxuICAqLFxcbiAgKjo6YmVmb3JlLFxcbiAgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcbiAgXFxuICAvKiBubyBtYXJnaW5zIG9yIHBhZGRpbmcgKi9cXG4gIFxcbiAgKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGJvZHkge1xuICBjb2xvcjogcmVkO1xufSAqL1xuXG5odG1sIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIsMCwzNiwxKSAwJSwgcmdiYSg1NSw1NCwxMTMsMSkgNDklKTtcbiAgZm9udC1mYW1pbHk6IFwiR29sZG1hblwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5ID4gaDEge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0cmVtO1xufVxuXG5ib2R5ID4gLmdhbWUtbWVzc2FnZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5wbGF5ZXItYm9hcmRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAxMDBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucGxheWVyLWNvbnRhaW5lciA+IGgxLCAuY3B1LWNvbnRhaW5lciA+IGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wbGF5ZXItYm9hcmQsIC5jcHUtYm9hcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgYm9yZGVyOiBzb2xpZCByZWQgMnB4O1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG59XG5cbi5wbGF5ZXItYm9hcmQgPiBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuXG4ucGxheWVyLWJvYXJkID4gLnBsYXllci1zcXVhcmUuc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi5wbGF5ZXItYm9hcmQgPiAucGxheWVyLXNxdWFyZS5taXNzLCAuY3B1LWJvYXJkID4gLmNwdS1zcXVhcmUubWlzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnBsYXllci1ib2FyZCA+IC5wbGF5ZXItc3F1YXJlLmhpdCwgLmNwdS1ib2FyZCA+IC5jcHUtc3F1YXJlLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG5cblxuLmJ0bi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogOHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0dBRUc7O0FBRUg7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEVBQTRFO0VBQzVFLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7OztBQUlBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBib2R5IHtcXG4gIGNvbG9yOiByZWQ7XFxufSAqL1xcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMiwwLDM2LDEpIDAlLCByZ2JhKDU1LDU0LDExMywxKSA0OSUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHb2xkbWFuXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSA+IGgxIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuYm9keSA+IC5nYW1lLW1lc3NhZ2Uge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbHVtbi1nYXA6IDEwMHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ucGxheWVyLWNvbnRhaW5lciA+IGgxLCAuY3B1LWNvbnRhaW5lciA+IGgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnBsYXllci1ib2FyZCwgLmNwdS1ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGJvcmRlcjogc29saWQgcmVkIDJweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxufVxcblxcbi5wbGF5ZXItYm9hcmQgPiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLnBsYXllci1ib2FyZCA+IC5wbGF5ZXItc3F1YXJlLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLnBsYXllci1ib2FyZCA+IC5wbGF5ZXItc3F1YXJlLm1pc3MsIC5jcHUtYm9hcmQgPiAuY3B1LXNxdWFyZS5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnBsYXllci1ib2FyZCA+IC5wbGF5ZXItc3F1YXJlLmhpdCwgLmNwdS1ib2FyZCA+IC5jcHUtc3F1YXJlLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuXFxuXFxuLmJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbHVtbi1nYXA6IDhweDtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vR2FtZUJvYXJkXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb20ge1xuICBzdGF0aWMgcGxheWVycyA9IFtuZXcgUGxheWVyKFwiUGxheWVyXCIpLCBuZXcgUGxheWVyKCldO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2hpcEluZGV4ID0gMDtcbiAgICB0aGlzLnBsYXllckdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgICB0aGlzLmNwdUdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgICB0aGlzLnNoaXBzID0gT2JqZWN0LnZhbHVlcyh0aGlzLnBsYXllckdhbWVCb2FyZC5zaGlwcyk7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICB9XG5cbiAgaW5pdGlhbGl6ZURvbSgpIHtcbiAgICB0aGlzLmNyZWF0ZVBsYXllckNvbnRhaW5lcigpO1xuICAgIHRoaXMuY3JlYXRlQ3B1Q29udGFpbmVyKCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyVG9EaXJCdG4oKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJUb1Jlc2V0QnRuKCk7XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyVG9DcHVTaGlwcygpIHtcbiAgICBjb25zdCBjcHVTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jcHUtc3F1YXJlXCIpO1xuICAgIGNwdVNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIHRoaXMuYXR0YWNrQ3B1U2hpcHNFdmVudExpc3RlbmVyKGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyVG9EaXJCdG4oKSB7XG4gICAgY29uc3Qgc2hpcERpckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1kaXItYnRuXCIpO1xuICAgIHNoaXBEaXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2hhbmdlRGlyZWN0aW9uRXZlbnQpO1xuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lclRvUmVzZXRCdG4oKSB7XG4gICAgY29uc3QgcmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2V0LWdhbWVcIik7XG4gICAgLy8gcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyAgIHRoaXMuc2hpcEluZGV4ID0gMDtcbiAgICAvLyAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAvLyAgIHRoaXMucGxheWVyR2FtZUJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xuICAgIC8vICAgdGhpcy5jcHVHYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gICAgLy8gICB0aGlzLmluaXRpYWxpemVEb20oKTtcbiAgICAvLyB9KTtcbiAgICByZXNldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge3RoaXMucmVzZXRHYW1lRXZlbnRMaXN0ZW5lcih0aGlzKX0pO1xuICB9XG5cbiAgY2hhbmdlRGlyZWN0aW9uRXZlbnQoKSB7XG4gICAgY29uc3Qgc2hpcERpckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1kaXItYnRuXCIpO1xuICAgIHNoaXBEaXJCdG4udGV4dENvbnRlbnQgPVxuICAgICAgc2hpcERpckJ0bi50ZXh0Q29udGVudCA9PT0gXCJ2ZXJ0aWNhbFwiID8gXCJob3Jpem9udGFsXCIgOiBcInZlcnRpY2FsXCI7XG4gIH1cblxuICBhdHRhY2tDcHVTaGlwc0V2ZW50TGlzdGVuZXIoZSkge1xuICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQucm93KTtcbiAgICBjb25zdCBjb2wgPSBwYXJzZUludChlLnRhcmdldC5kYXRhc2V0LmNvbCk7XG4gICAgY29uc3QgZ2FtZU1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtbWVzc2FnZVwiKTtcblxuICAgIGlmIChcbiAgICAgIHRoaXMuY3B1R2FtZUJvYXJkLmJvYXJkW3Jvd11bY29sXSAmJlxuICAgICAgdGhpcy5jcHVHYW1lQm9hcmQuYm9hcmRbcm93XVtjb2xdICE9PSBcImhpdFwiICYmXG4gICAgICB0aGlzLmNwdUdhbWVCb2FyZC5ib2FyZFtyb3ddW2NvbF0gIT09IFwibWlzc1wiXG4gICAgKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNwdUdhbWVCb2FyZC5ib2FyZFtyb3ddW2NvbF0pO1xuICAgICAgdGhpcy5jcHVHYW1lQm9hcmQuc2hpcHNbdGhpcy5jcHVHYW1lQm9hcmQuYm9hcmRbcm93XVtjb2xdXS5oaXQoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY3B1R2FtZUJvYXJkLnNoaXBzW3RoaXMuY3B1R2FtZUJvYXJkLmJvYXJkW3Jvd11bY29sXV0pO1xuICAgICAgZ2FtZU1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIkNQVSBTSElQIFdBUyBISVQhXCI7XG4gICAgICB0aGlzLmNwdUdhbWVCb2FyZC5ib2FyZFtyb3ddW2NvbF0gPSBcImhpdFwiO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJDUFVcIiwgdGhpcy5jcHVHYW1lQm9hcmQuYm9hcmQpO1xuICAgICAgaWYgKHRoaXMuY3B1R2FtZUJvYXJkLmFsbFN1bmsoKSkge1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgZ2FtZU1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlBMQVlFUiBIQVMgV09OIVwiO1xuICAgICAgfVxuICAgICAgdGhpcy5yZW5kZXJDcHVCb2FyZCgpO1xuICAgICAgXG5cbiAgICAgIERvbS5wbGF5ZXJzWzFdLnJhbmRvbUF0dGFjaygpO1xuICAgICAgY29uc3QgcmFuUm93ID0gRG9tLnBsYXllcnNbMV0uZ2V0Um93KCk7XG4gICAgICBjb25zdCByYW5Db2wgPSBEb20ucGxheWVyc1sxXS5nZXRDb2woKTtcbiAgICAgIGlmICh0aGlzLnBsYXllckdhbWVCb2FyZC5ib2FyZFtyYW5Sb3ddW3JhbkNvbF0pIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJHYW1lQm9hcmQuYm9hcmRbcmFuUm93XVtyYW5Db2xdID0gXCJoaXRcIjtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJQbGF5ZXJcIiwgdGhpcy5wbGF5ZXJHYW1lQm9hcmQuYm9hcmQpO1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXJHYW1lQm9hcmQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgICAgICAgZ2FtZU1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIkNQVSBIQVMgV09OIVwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyUGxheWVyQm9hcmQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGxheWVyR2FtZUJvYXJkLmJvYXJkW3JhblJvd11bcmFuQ29sXSA9IFwibWlzc1wiO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlBsYXllclwiLCB0aGlzLnBsYXllckdhbWVCb2FyZC5ib2FyZCk7XG4gICAgICAgIHRoaXMucmVuZGVyUGxheWVyQm9hcmQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZ2FtZU1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIk1JU1MhXCI7XG4gICAgICB0aGlzLmNwdUdhbWVCb2FyZC5ib2FyZFtyb3ddW2NvbF0gPSBcIm1pc3NcIjtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ1BVXCIsIHRoaXMuY3B1R2FtZUJvYXJkLmJvYXJkKTtcbiAgICAgIHRoaXMucmVuZGVyQ3B1Qm9hcmQoKTtcbiAgICAgIERvbS5wbGF5ZXJzWzFdLnJhbmRvbUF0dGFjaygpO1xuICAgICAgY29uc3QgcmFuUm93ID0gRG9tLnBsYXllcnNbMV0uZ2V0Um93KCk7XG4gICAgICBjb25zdCByYW5Db2wgPSBEb20ucGxheWVyc1sxXS5nZXRDb2woKTtcbiAgICAgIGlmICh0aGlzLnBsYXllckdhbWVCb2FyZC5ib2FyZFtyYW5Sb3ddW3JhbkNvbF0pIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJHYW1lQm9hcmQuYm9hcmRbcmFuUm93XVtyYW5Db2xdID0gXCJoaXRcIjtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJQbGF5ZXJcIiwgdGhpcy5wbGF5ZXJHYW1lQm9hcmQuYm9hcmQpO1xuICAgICAgICB0aGlzLnJlbmRlclBsYXllckJvYXJkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBsYXllckdhbWVCb2FyZC5ib2FyZFtyYW5Sb3ddW3JhbkNvbF0gPSBcIm1pc3NcIjtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJQbGF5ZXJcIiwgdGhpcy5wbGF5ZXJHYW1lQm9hcmQuYm9hcmQpO1xuICAgICAgICB0aGlzLnJlbmRlclBsYXllckJvYXJkKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlQ3B1Q29udGFpbmVyKCkge1xuICAgIGNvbnN0IHBsYXllckNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1ib2FyZHMtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGNwdUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY3B1Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjcHUtY29udGFpbmVyXCIpO1xuICAgIHBsYXllckNvbnRhaW5lcnMuYXBwZW5kQ2hpbGQoY3B1Q29udGFpbmVyKTtcbiAgICB0aGlzLmNyZWF0ZUNwdUhlYWRlcigpO1xuICAgIGNvbnN0IGNwdUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjcHVCb2FyZC5jbGFzc0xpc3QuYWRkKFwiY3B1LWJvYXJkXCIpO1xuICAgIGNwdUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcHVCb2FyZCk7XG4gICAgdGhpcy5yZW5kZXJDcHVCb2FyZCgpO1xuICB9XG5cbiAgY3JlYXRlUGxheWVyQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IGdhbWVNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLW1lc3NhZ2VcIik7XG4gICAgZ2FtZU1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIldhaXRpbmcuLi5cIjtcbiAgICBjb25zdCBwbGF5ZXJDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItYm9hcmRzLWNvbnRhaW5lclwiKTtcbiAgICB3aGlsZSAocGxheWVyQ29udGFpbmVycy5maXJzdENoaWxkKSB7XG4gICAgICBwbGF5ZXJDb250YWluZXJzLnJlbW92ZUNoaWxkKHBsYXllckNvbnRhaW5lcnMuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGNvbnN0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGxheWVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItY29udGFpbmVyXCIpO1xuICAgIHBsYXllckNvbnRhaW5lcnMuYXBwZW5kQ2hpbGQocGxheWVyQ29udGFpbmVyKTtcbiAgICB0aGlzLmNyZWF0ZVBsYXllckhlYWRlcigpO1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWJvYXJkXCIpO1xuICAgIHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZCk7XG4gICAgdGhpcy5yZW5kZXJQbGF5ZXJCb2FyZCgpO1xuICB9XG5cbiAgY3JlYXRlQ3B1SGVhZGVyKCkge1xuICAgIGNvbnN0IGNwdUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3B1LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBjcHVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgY3B1SGVhZGVyLnRleHRDb250ZW50ID0gXCJDcHUgQm9hcmRcIjtcbiAgICBjcHVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3B1SGVhZGVyKTtcbiAgfVxuXG4gIGNyZWF0ZVBsYXllckhlYWRlcigpIHtcbiAgICBjb25zdCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1jb250YWluZXJcIik7XG4gICAgY29uc3QgcGxheWVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHBsYXllckhlYWRlci50ZXh0Q29udGVudCA9IFwiUGxheWVyIEJvYXJkXCI7XG4gICAgcGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckhlYWRlcik7XG4gIH1cblxuICBwbGFjZVBsYXllclNoaXBzRXZlbnRMaXN0ZW5lcihlKSB7XG4gICAgY29uc3Qgcm93ID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5yb3cpO1xuICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuY29sKTtcbiAgICBjb25zdCBvcmllbnRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1kaXItYnRuXCIpLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHNoaXAgPSB0aGlzLnNoaXBzW3RoaXMuc2hpcEluZGV4XTtcbiAgICB0cnkge1xuICAgICAgdGhpcy5wbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwKHJvdywgY29sLCBzaGlwLCBvcmllbnRhdGlvbik7XG4gICAgICB0aGlzLnNoaXBJbmRleCsrO1xuICAgICAgdGhpcy5yZW5kZXJQbGF5ZXJCb2FyZCgpO1xuICAgICAgaWYgKHRoaXMuc2hpcEluZGV4ID49IDUpIHtcbiAgICAgICAgdGhpcy5jcHVHYW1lQm9hcmQucmFuZG9tbHlQbGFjZVNoaXAoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jcHVHYW1lQm9hcmQuYm9hcmQpO1xuICAgICAgICBjb25zdCBnYW1lTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1tZXNzYWdlXCIpO1xuICAgICAgICBnYW1lTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiQmVnaW4gR2FtZSFcIjtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyVG9DcHVTaGlwcygpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyQ3B1Qm9hcmQoKSB7XG4gICAgY29uc3QgY3B1Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNwdS1ib2FyZFwiKTtcbiAgICB3aGlsZSAoY3B1Qm9hcmQuZmlyc3RDaGlsZCkge1xuICAgICAgY3B1Qm9hcmQucmVtb3ZlQ2hpbGQoY3B1Qm9hcmQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jcHVHYW1lQm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jcHVHYW1lQm9hcmQuYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJjcHUtc3F1YXJlXCIpO1xuICAgICAgICBzcXVhcmUuZGF0YXNldC5yb3cgPSBpO1xuICAgICAgICBzcXVhcmUuZGF0YXNldC5jb2wgPSBqO1xuICAgICAgICBpZiAodGhpcy5jcHVHYW1lQm9hcmQuYm9hcmRbaV1bal0gIT09IG51bGwpIHtcbiAgICAgICAgICBpZiAodGhpcy5jcHVHYW1lQm9hcmQuYm9hcmRbaV1bal0gPT09IFwiaGl0XCIpIHtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jcHVHYW1lQm9hcmQuYm9hcmRbaV1bal0gPT09IFwibWlzc1wiKSB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNoaXBJbmRleCA+PSA1KSB7XG4gICAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja0NwdVNoaXBzRXZlbnRMaXN0ZW5lcihlKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2hpcEluZGV4ID49IDUgJiYgdGhpcy5nYW1lT3ZlciA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmF0dGFja0NwdVNoaXBzRXZlbnRMaXN0ZW5lcihlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjcHVCb2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlclBsYXllckJvYXJkKCkge1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItYm9hcmRcIik7XG4gICAgd2hpbGUgKHBsYXllckJvYXJkLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHBsYXllckJvYXJkLnJlbW92ZUNoaWxkKHBsYXllckJvYXJkLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxheWVyR2FtZUJvYXJkLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucGxheWVyR2FtZUJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwicGxheWVyLXNxdWFyZVwiKTtcbiAgICAgICAgc3F1YXJlLmRhdGFzZXQucm93ID0gaTtcbiAgICAgICAgc3F1YXJlLmRhdGFzZXQuY29sID0gajtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyR2FtZUJvYXJkLmJvYXJkW2ldW2pdICE9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKHRoaXMucGxheWVyR2FtZUJvYXJkLmJvYXJkW2ldW2pdID09PSBcImhpdFwiKSB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGxheWVyR2FtZUJvYXJkLmJvYXJkW2ldW2pdID09PSBcIm1pc3NcIikge1xuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2hpcEluZGV4IDwgNSkge1xuICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGxhY2VQbGF5ZXJTaGlwc0V2ZW50TGlzdGVuZXIoZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyQm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXNldEdhbWVFdmVudExpc3RlbmVyKGRvbSkge1xuICAgIHRoaXMuc2hpcEluZGV4ID0gMDtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5wbGF5ZXJHYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gICAgdGhpcy5jcHVHYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gICAgZG9tLmluaXRpYWxpemVEb20oKTtcbiAgfVxufVxuIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gdGhpcy5jcmVhdGVCb2FyZCgpO1xuICAgIHRoaXMuc2hpcHMgPSB7XG4gICAgICBDYXJyaWVyOiBuZXcgU2hpcChcIkNhcnJpZXJcIiwgNSksXG4gICAgICBCYXR0bGVzaGlwOiBuZXcgU2hpcChcIkJhdHRsZXNoaXBcIiwgNCksXG4gICAgICBEZXN0cm95ZXI6IG5ldyBTaGlwKFwiRGVzdHJveWVyXCIsIDMpLFxuICAgICAgU3VibWFyaW5lOiBuZXcgU2hpcChcIlN1Ym1hcmluZVwiLCAzKSxcbiAgICAgIFBhdHJvbEJvYXQ6IG5ldyBTaGlwKFwiUGF0cm9sQm9hdFwiLCAyKSxcbiAgICB9O1xuICB9XG5cbiAgYWxsU3VuaygpIHtcbiAgICBjb25zdCBzaGlwcyA9IE9iamVjdC52YWx1ZXModGhpcy5zaGlwcyk7XG4gICAgbGV0IGlzQWxsU3VuayA9IHRydWU7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKHNoaXAuaXNTdW5rKCkgPT09IGZhbHNlKSB7XG4gICAgICAgIGlzQWxsU3VuayA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBpc0FsbFN1bms7XG4gIH1cblxuICBjcmVhdGVCb2FyZCgpIHtcbiAgICBjb25zdCBuZXdCb2FyZCA9IFsuLi5uZXcgQXJyYXkoMTApXS5tYXAoKCkgPT4gbmV3IEFycmF5KDEwKS5maWxsKG51bGwpKTtcbiAgICByZXR1cm4gbmV3Qm9hcmQ7XG4gIH1cblxuICBwbGFjZVNoaXAocm93LCBjb2wsIHNoaXAsIG9yaWVudGF0aW9uID0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgaWYgKHJvdyA8IDAgfHwgcm93ID49IHRoaXMuYm9hcmQubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JvdyBvdXQgb2YgYm9hcmQnKTtcbiAgICB9XG4gICAgaWYgKGNvbCA8IDAgfHwgY29sID49IHRoaXMuYm9hcmQubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbHVtbiBvdXQgb2YgYm9hcmQnKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcC5sZW5ndGg7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBpZiAocm93ICsgc2hpcExlbmd0aCA+IHRoaXMuYm9hcmQubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2hpcCBkb2VzIG5vdCBmaXQnKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbCArIHNoaXBMZW5ndGggPiB0aGlzLmJvYXJkLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwIGRvZXMgbm90IGZpdCcpO1xuICAgIH1cblxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgZm9yIChsZXQgaSA9IHJvdzsgaSA8IHJvdyArIHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtjb2xdKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIHNoaXAgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gcm93OyBpIDwgcm93ICsgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaV1bY29sXSA9IHNoaXAubmFtZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IGNvbDsgaSA8IGNvbCArIHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3ddW2ldKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIHNoaXAgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gY29sOyBpIDwgY29sICsgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbcm93XVtpXSA9IHNoaXAubmFtZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiAoXG4gICAgLy8gICByb3cgPCAwIHx8XG4gICAgLy8gICByb3cgPj0gMTAgfHxcbiAgICAvLyAgIHJvdyArIHNoaXAubGVuZ3RoID49IDEwIHx8XG4gICAgLy8gICBjb2wgPCAwIHx8XG4gICAgLy8gICBjb2wgPj0gMTAgfHxcbiAgICAvLyAgIGNvbCArIHNoaXAubGVuZ3RoID49IDEwXG4gICAgLy8gKSB7XG4gICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBsYWNlbWVudCBvZiBzaGlwXCIpO1xuICAgIC8vIH1cbiAgICAvLyBpZiAob3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgIC8vICAgZm9yIChsZXQgaSA9IHJvdzsgaSA8IHJvdyArIHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgaWYgKHRoaXMuYm9hcmRbaV1bY29sXSkge1xuICAgIC8vICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgc2hpcCBwbGFjZW1lbnRcIik7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyAgIGZvciAobGV0IGkgPSByb3c7IGkgPCByb3cgKyBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgIHRoaXMuYm9hcmRbaV1bY29sXSA9IHNoaXAubmFtZTtcbiAgICAvLyAgIH1cbiAgICAvLyB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgIC8vICAgZm9yIChsZXQgaSA9IGNvbDsgaSA8IGNvbCArIHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtpXSkge1xuICAgIC8vICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgc2hpcCBwbGFjZW1lbnRcIik7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyAgIGZvciAobGV0IGkgPSBjb2w7IGkgPCBjb2wgKyBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgIHRoaXMuYm9hcmRbcm93XVtpXSA9IHNoaXAubmFtZTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH1cblxuICByYW5kb21seVBsYWNlU2hpcCgpIHtcbiAgICBjb25zdCBvcmllbnRhdGlvbiA9IFtcImhvcml6b25hbFwiLCBcInZlcnRpY2FsXCJdO1xuICAgIE9iamVjdC52YWx1ZXModGhpcy5zaGlwcykuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgbGV0IHBsYWNlZCA9IGZhbHNlO1xuICAgICAgd2hpbGUgKCFwbGFjZWQpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBjb25zdCBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGNvbnN0IGRpciA9IG9yaWVudGF0aW9uW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG9yaWVudGF0aW9uLmxlbmd0aCldO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMucGxhY2VTaGlwKHJvdywgY29sLCBzaGlwLCBkaXIpO1xuICAgICAgICAgIHBsYWNlZCA9IHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8gUGxhY2VTaGlwIHRocm93cyBlcnJvciBiZWZvcmUgcGxhY2VkIGJlY29tZXMgdHJ1ZSBhbmQgdHJpZXMgYWdhaW4gd2l0aCB0aGUgc2FtZSBzaGlwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSA9IFwiQ1BVXCIpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJldmlvdXNseUF0dGFja2VkID0gW107XG4gICAgdGhpcy5yb3cgPSBudWxsO1xuICAgIHRoaXMuY29sID0gbnVsbDtcbiAgfVxuXG4gIHJhbmRvbUF0dGFjaygpIHtcbiAgICBsZXQgcmFuUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGxldCByYW5Db2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgdGhpcy5zZXRDb2wocmFuQ29sKTtcbiAgICB0aGlzLnNldFJvdyhyYW5Sb3cpO1xuICAgIGxldCBwYWlyID0gYCR7cmFuUm93fSwke3JhbkNvbH1gO1xuXG4gICAgd2hpbGUgKHRoaXMucHJldmlvdXNseUF0dGFja2VkLmluY2x1ZGVzKHBhaXIpKSB7XG4gICAgICByYW5Sb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICByYW5Db2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICB0aGlzLnNldFJvdyhyYW5Sb3cpO1xuICAgICAgdGhpcy5zZXRDb2wocmFuQ29sKTtcbiAgICAgIHBhaXIgPSBgJHtyYW5Sb3d9LCR7cmFuQ29sfWA7XG4gICAgICBpZiAoIXRoaXMucHJldmlvdXNseUF0dGFja2VkLmluY2x1ZGVzKHBhaXIpKSB7XG4gICAgICAgIHRoaXMucHJldmlvdXNseUF0dGFja2VkLnB1c2gocGFpcik7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHJldHVybiB7IHJhblJvdywgcmFuQ29sIH07XG4gIH1cblxuICBnZXRSb3coKSB7XG4gICAgcmV0dXJuIHRoaXMucm93O1xuICB9XG5cbiAgZ2V0Q29sKCkge1xuICAgIHJldHVybiB0aGlzLmNvbDtcbiAgfVxuXG4gIHNldFJvdyhyb3cpIHtcbiAgICB0aGlzLnJvdyA9IHJvdztcbiAgfVxuXG4gIHNldENvbChjb2wpIHtcbiAgICB0aGlzLmNvbCA9IGNvbDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGxlbmd0aCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRzID0gMDtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdHMrKztcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5oaXRzID49IHRoaXMubGVuZ3RoO1xuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMvbm9ybWFsaXplLmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5cbmltcG9ydCBEb20gZnJvbSBcIi4vbW9kdWxlcy9jbGFzc2VzL0RvbVwiO1xuXG5jb25zdCBkb20gPSBuZXcgRG9tKCk7XG5cbmRvbS5pbml0aWFsaXplRG9tKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==