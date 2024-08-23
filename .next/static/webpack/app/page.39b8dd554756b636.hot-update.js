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

/***/ "(app-pages-browser)/./app/components/PostList.tsx":
/*!*************************************!*\
  !*** ./app/components/PostList.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst PostList = ()=>{\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchPosts = async ()=>{\n            try {\n                const response = await fetch(\"/api/page/posts\");\n                const data = await response.json();\n                setPosts(data.data.data);\n            } catch (err) {\n                setError(\"Failed to fetch Posts\");\n            }\n        };\n        fetchPosts();\n    }, []);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: error\n        }, void 0, false, {\n            fileName: \"/home/runner/dsma/app/components/PostList.tsx\",\n            lineNumber: 22,\n            columnNumber: 12\n        }, undefined);\n    }\n    const showPosts = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"ID: \",\n                                    post.id\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/runner/dsma/app/components/PostList.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Updated Time: \",\n                                    new Date(post.created_time).toLocaleString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/runner/dsma/app/components/PostList.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \" \",\n                                    post === null || post === void 0 ? void 0 : post.message,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/runner/dsma/app/components/PostList.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, post.id, true, {\n                        fileName: \"/home/runner/dsma/app/components/PostList.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/runner/dsma/app/components/PostList.tsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/runner/dsma/app/components/PostList.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#202020] rounded p-4 m-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Posts\"\n            }, void 0, false, {\n                fileName: \"/home/runner/dsma/app/components/PostList.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            posts ? posts === null || posts === void 0 ? void 0 : posts.length : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/runner/dsma/app/components/PostList.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PostList, \"k/i6/CQ9z/20h34rTderKnfEXI4=\");\n_c = PostList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostList);\nvar _c;\n$RefreshReg$(_c, \"PostList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1Bvc3RMaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDbUQ7QUFFbkQsTUFBTUcsV0FBcUI7O0lBQ3pCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBUyxFQUFFO0lBQzdDLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBZ0I7SUFFbERELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8sYUFBYTtZQUNqQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtnQkFDN0IsTUFBTUMsT0FBc0IsTUFBTUYsU0FBU0csSUFBSTtnQkFDL0NQLFNBQVNNLEtBQUtBLElBQUksQ0FBQ0EsSUFBSTtZQUN6QixFQUFFLE9BQU9FLEtBQUs7Z0JBQ1pOLFNBQVM7WUFDWDtRQUNGO1FBQ0lDO0lBQ04sR0FBRyxFQUFFO0lBRUwsSUFBSUYsT0FBTztRQUNULHFCQUFPLDhEQUFDUTtzQkFBS1I7Ozs7OztJQUNmO0lBRUEsTUFBTVMsWUFBWTtRQUNoQixxQkFDRSw4REFBQ0Q7c0JBQ0MsNEVBQUNFOzBCQUNFWixNQUFNYSxHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNDOzswQ0FDQyw4REFBQ0M7O29DQUFFO29DQUFLRixLQUFLRyxFQUFFOzs7Ozs7OzBDQUNmLDhEQUFDRDs7b0NBQUU7b0NBQWUsSUFBSUUsS0FBS0osS0FBS0ssWUFBWSxFQUFFQyxjQUFjOzs7Ozs7OzBDQUM1RCw4REFBQ0o7O29DQUFFO29DQUFFRixpQkFBQUEsMkJBQUFBLEtBQU1PLE9BQU87b0NBQUM7Ozs7Ozs7O3VCQUhaUCxLQUFLRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7SUFTMUI7SUFFQSxxQkFDRSw4REFBQ1A7UUFBSVksV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFHOzs7Ozs7WUFDSHZCLFFBQVNBLGtCQUFBQSw0QkFBQUEsTUFBT3dCLE1BQU0sR0FBRzs7Ozs7OztBQUdoQztHQTNDTXpCO0tBQUFBO0FBNkNOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1Bvc3RMaXN0LnRzeD8zNmI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UG9zdCwgUG9zdHNSZXNwb25zZX0gZnJvbSBcIi4uL2xpYi90eXBlcy9pbmRleFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUG9zdExpc3Q6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlPFBvc3RbXT4oW10pO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hQb3N0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcGFnZS9wb3N0cycpO1xuICAgICAgICBjb25zdCBkYXRhOiBQb3N0c1Jlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRQb3N0cyhkYXRhLmRhdGEuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgc2V0RXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBQb3N0cycpO1xuICAgICAgfVxuICAgIH07XG4gICAgICAgIGZldGNoUG9zdHMoKTtcbiAgfSwgW10pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2PntlcnJvcn08L2Rpdj47XG4gIH1cblxuICBjb25zdCBzaG93UG9zdHMgPSAoKSA9PntcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICAgIDxwPklEOiB7cG9zdC5pZH08L3A+XG4gICAgICAgICAgICAgIDxwPlVwZGF0ZWQgVGltZToge25ldyBEYXRlKHBvc3QuY3JlYXRlZF90aW1lKS50b0xvY2FsZVN0cmluZygpfTwvcD5cbiAgICAgICAgICAgICAgPHA+IHtwb3N0Py5tZXNzYWdlfSA8L3A+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMjAyMDIwXSByb3VuZGVkIHAtNCBtLTJcIj5cbiAgICAgIDxoMT5Qb3N0czwvaDE+XG4gICAgICB7cG9zdHMgPyAocG9zdHM/Lmxlbmd0aCk6IFwiXCJ9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0TGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUG9zdExpc3QiLCJwb3N0cyIsInNldFBvc3RzIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoUG9zdHMiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJlcnIiLCJkaXYiLCJzaG93UG9zdHMiLCJ1bCIsIm1hcCIsInBvc3QiLCJsaSIsInAiLCJpZCIsIkRhdGUiLCJjcmVhdGVkX3RpbWUiLCJ0b0xvY2FsZVN0cmluZyIsIm1lc3NhZ2UiLCJjbGFzc05hbWUiLCJoMSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/PostList.tsx\n"));

/***/ })

});