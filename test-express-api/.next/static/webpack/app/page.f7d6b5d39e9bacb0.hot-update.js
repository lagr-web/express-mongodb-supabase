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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n//src/app/page.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [img, setImg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [strength, setStrength] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [lives, setLives] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto p-5 my-10 w-96 shadow-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"name\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            name: \"name\",\n                            type: \"text\",\n                            onChange: (e)=>setName(e.target.value),\n                            value: name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"img\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"img\",\n                            onChange: (e)=>setImg(e.target.value),\n                            value: img\n                        }, void 0, false, {\n                            fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Strength\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            name: \"strength\",\n                            onChange: (e)=>setStrength(e.target.value),\n                            value: strength\n                        }, void 0, false, {\n                            fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Lives\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            name: \"lives\",\n                            onChange: (e)=>setLives(e.target.value),\n                            value: lives\n                        }, void 0, false, {\n                            fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Comment\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"comment\",\n                            onChange: (e)=>setText(e.target.value),\n                            value: text\n                        }, void 0, false, {\n                            fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-end\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-blue-500 text-white px-4 py-2  rounded hover:bg-blue-700 \",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\lars-work\\\\undervisning-avanceret-frontend\\\\node_rest_api\\\\test-express-api\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"gdKo9iR0Y5Jm6Ig+FBAiQbPdFMg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLGtCQUFrQjs7O0FBS3VCO0FBRTFCLFNBQVNDOztJQUV0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQVM7SUFDekMsTUFBTSxDQUFDSSxLQUFLQyxPQUFPLEdBQUdMLCtDQUFRQSxDQUFTO0lBQ3ZDLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBa0I7SUFDMUQsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFrQjtJQUNwRCxNQUFNLENBQUNVLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQVM7SUFFekMscUJBRUU7a0JBRUUsNEVBQUNZO1lBQUlDLFdBQVU7OzhCQUViLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDO3NDQUFNOzs7Ozs7c0NBQ1AsOERBQUNDOzRCQUNDYixNQUFLOzRCQUNMYyxNQUFLOzRCQUNMQyxVQUFVLENBQUNDLElBQU1mLFFBQVFlLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs0QkFDdkNBLE9BQU9sQjs7Ozs7Ozs7Ozs7OzhCQUlYLDhEQUFDVTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDO3NDQUFNOzs7Ozs7c0NBQ1AsOERBQUNDOzRCQUNDQyxNQUFLOzRCQUNMZCxNQUFLOzRCQUNMZSxVQUFVLENBQUNDLElBQU1iLE9BQU9hLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs0QkFDdENBLE9BQU9oQjs7Ozs7Ozs7Ozs7OzhCQUlYLDhEQUFDUTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDO3NDQUFNOzs7Ozs7c0NBQ1AsOERBQUNDOzRCQUNDQyxNQUFLOzRCQUNMZCxNQUFLOzRCQUNMZSxVQUFVLENBQUNDLElBQU1YLFlBQVlXLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs0QkFDM0NBLE9BQU9kOzs7Ozs7Ozs7Ozs7OEJBSVgsOERBQUNNO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0M7c0NBQU07Ozs7OztzQ0FDUCw4REFBQ0M7NEJBQ0NDLE1BQUs7NEJBQ0xkLE1BQUs7NEJBQ0xlLFVBQVUsQ0FBQ0MsSUFBTVQsU0FBU1MsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzRCQUN4Q0EsT0FBT1o7Ozs7Ozs7Ozs7Ozs4QkFJWCw4REFBQ0k7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQztzQ0FBTTs7Ozs7O3NDQUNQLDhEQUFDQzs0QkFDQ0MsTUFBSzs0QkFDTGQsTUFBSzs0QkFDTGUsVUFBVSxDQUFDQyxJQUFNUCxRQUFRTyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7NEJBQ3ZDQSxPQUFPVjs7Ozs7Ozs7Ozs7OzhCQUlYLDhEQUFDRTtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ1E7d0JBQU9MLE1BQUs7d0JBQVNILFdBQVU7a0NBQStEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTekc7R0ExRXdCWjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiLy9zcmMvYXBwL3BhZ2UudHN4XG5cblwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtpbWcsIHNldEltZ10gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW3N0cmVuZ3RoLCBzZXRTdHJlbmd0aF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBzdHJpbmc+KDApO1xuICBjb25zdCBbbGl2ZXMsIHNldExpdmVzXSA9IHVzZVN0YXRlPG51bWJlciB8IHN0cmluZz4oMCk7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtNSBteS0xMCB3LTk2IHNoYWRvdy1tZFwiID5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICA8bGFiZWw+bmFtZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgPGxhYmVsPmltZzwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwiaW1nXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW1nKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHZhbHVlPXtpbWd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICA8bGFiZWw+U3RyZW5ndGg8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBuYW1lPVwic3RyZW5ndGhcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdHJlbmd0aChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICB2YWx1ZT17c3RyZW5ndGh9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgPGxhYmVsPkxpdmVzPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbmFtZT1cImxpdmVzXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGl2ZXMoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgdmFsdWU9e2xpdmVzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICAgIDxsYWJlbD5Db21tZW50PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJjb21tZW50XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGV4dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICB2YWx1ZT17dGV4dH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiAgcm91bmRlZCBob3ZlcjpiZy1ibHVlLTcwMCBcIj5TZW5kPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2RpdiA+XG4gICAgPC8+XG5cblxuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhvbWUiLCJuYW1lIiwic2V0TmFtZSIsImltZyIsInNldEltZyIsInN0cmVuZ3RoIiwic2V0U3RyZW5ndGgiLCJsaXZlcyIsInNldExpdmVzIiwidGV4dCIsInNldFRleHQiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});