"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [img, setImg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [strength, setStrength] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [lives, setLives] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const notLoggedIn = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto p-5 my-10 w-96 shadow-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"name\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            name: \"name\",\n                            type: \"text\",\n                            onChange: (e)=>setName(e.target.value),\n                            value: name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"img\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"img\",\n                            onChange: (e)=>setImg(e.target.value),\n                            value: img\n                        }, void 0, false, {\n                            fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Strength\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            name: \"strength\",\n                            onChange: (e)=>setStrength(e.target.value),\n                            value: strength\n                        }, void 0, false, {\n                            fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Lives\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            name: \"lives\",\n                            onChange: (e)=>setLives(e.target.value),\n                            value: lives\n                        }, void 0, false, {\n                            fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Comment\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"comment\",\n                            onChange: (e)=>setText(e.target.value),\n                            value: text\n                        }, void 0, false, {\n                            fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: notLoggedIn,\n                    id: \"feedback\",\n                    children: \"Fejl i login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"V1pSKOO/8V7h8QPxxlfV6zNJjSg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBR3lDO0FBRTFCLFNBQVNFOztJQUV0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQVM7SUFDekMsTUFBTSxDQUFDSSxLQUFLQyxPQUFPLEdBQUdMLCtDQUFRQSxDQUFTO0lBQ3ZDLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBa0I7SUFDMUQsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFrQjtJQUNwRCxNQUFNLENBQUNVLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQVM7SUFFekMsTUFBTVksY0FBY2IsNkNBQU1BLENBQXdCO0lBR2xELHFCQUVFO2tCQUVFLDRFQUFDYztZQUFJQyxXQUFVOzs4QkFFYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUViLDhEQUFDQztzQ0FBTTs7Ozs7O3NDQUNQLDhEQUFDQzs0QkFDQ2QsTUFBSzs0QkFDTGUsTUFBSzs0QkFDTEMsVUFBVSxDQUFDQyxJQUFNaEIsUUFBUWdCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs0QkFDdkNBLE9BQU9uQjs7Ozs7Ozs7Ozs7OzhCQUdYLDhEQUFDVztvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDO3NDQUFNOzs7Ozs7c0NBQ1AsOERBQUNDOzRCQUNDQyxNQUFLOzRCQUNMZixNQUFLOzRCQUNMZ0IsVUFBVSxDQUFDQyxJQUFNZCxPQUFPYyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7NEJBQ3RDQSxPQUFPakI7Ozs7Ozs7Ozs7Ozs4QkFHWCw4REFBQ1M7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQztzQ0FBTTs7Ozs7O3NDQUNQLDhEQUFDQzs0QkFDQ0MsTUFBSzs0QkFDTGYsTUFBSzs0QkFDTGdCLFVBQVUsQ0FBQ0MsSUFBTVosWUFBWVksRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzRCQUMzQ0EsT0FBT2Y7Ozs7Ozs7Ozs7Ozs4QkFJWCw4REFBQ087b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQztzQ0FBTTs7Ozs7O3NDQUNQLDhEQUFDQzs0QkFDQ0MsTUFBSzs0QkFDTGYsTUFBSzs0QkFDTGdCLFVBQVUsQ0FBQ0MsSUFBTVYsU0FBU1UsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzRCQUN4Q0EsT0FBT2I7Ozs7Ozs7Ozs7Ozs4QkFJWCw4REFBQ0s7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQztzQ0FBTTs7Ozs7O3NDQUNQLDhEQUFDQzs0QkFDQ0MsTUFBSzs0QkFDTGYsTUFBSzs0QkFDTGdCLFVBQVUsQ0FBQ0MsSUFBTVIsUUFBUVEsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzRCQUN2Q0EsT0FBT1g7Ozs7Ozs7Ozs7Ozs4QkFJWCw4REFBQ0c7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNRO3dCQUFPTCxNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs4QkFFeEIsOERBQUNKO29CQUFJVSxLQUFLWDtvQkFBYVksSUFBRzs4QkFBVzs7Ozs7Ozs7Ozs7OztBQU83QztHQTVFd0J2QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW2ltZywgc2V0SW1nXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICBjb25zdCBbc3RyZW5ndGgsIHNldFN0cmVuZ3RoXSA9IHVzZVN0YXRlPG51bWJlciB8IHN0cmluZz4oMCk7XG4gIGNvbnN0IFtsaXZlcywgc2V0TGl2ZXNdID0gdXNlU3RhdGU8bnVtYmVyIHwgc3RyaW5nPigwKTtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG5cbiAgY29uc3Qgbm90TG9nZ2VkSW4gPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcblxuXG4gIHJldHVybiAoXG5cbiAgICA8PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtNSBteS0xMCB3LTk2IHNoYWRvdy1tZFwiID5cbiAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgXG4gICAgICAgICAgPGxhYmVsPm5hbWU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgICA8bGFiZWw+aW1nPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJpbWdcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbWcoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgdmFsdWU9e2ltZ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XG4gICAgICAgICAgPGxhYmVsPlN0cmVuZ3RoPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbmFtZT1cInN0cmVuZ3RoXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3RyZW5ndGgoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgdmFsdWU9e3N0cmVuZ3RofVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICAgIDxsYWJlbD5MaXZlczwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG5hbWU9XCJsaXZlc1wiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExpdmVzKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHZhbHVlPXtsaXZlc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgICA8bGFiZWw+Q29tbWVudDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwiY29tbWVudFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2VuZDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiByZWY9e25vdExvZ2dlZElufSBpZD1cImZlZWRiYWNrXCI+RmVqbCBpIGxvZ2luPC9kaXY+XG4gICAgICA8L2RpdiA+XG4gICAgPC8+XG5cbiAgICBcblxuICApXG59XG4iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlU3RhdGUiLCJIb21lIiwibmFtZSIsInNldE5hbWUiLCJpbWciLCJzZXRJbWciLCJzdHJlbmd0aCIsInNldFN0cmVuZ3RoIiwibGl2ZXMiLCJzZXRMaXZlcyIsInRleHQiLCJzZXRUZXh0Iiwibm90TG9nZ2VkSW4iLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwicmVmIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});