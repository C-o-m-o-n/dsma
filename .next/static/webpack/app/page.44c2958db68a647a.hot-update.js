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

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// import Image from \"next/image\";\n\n// const access_token = process.env.NEXT_PUBLIC_ACCESS_TOKEN\n// const user_id = process.env.NEXT_PUBLIC_USER_ID\n// const page_id = process.env.NEXT_PUBLIC_PAGE_ID\n// const endpoint = `https://graph.facebook.com/v20.0/${user_id}/accounts?access_token=${access_token}`\nfunction Home() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getPage();\n    }, []);\n    async function getPage() {\n        try {\n            const response = await fetch(\"/api/page\");\n            console.log(\"res: \", response);\n        } catch (error) {\n            console.log(error);\n        }\n    }\n    //   async function getPage() {\n    //     try{\n    //       const response = await fetch(endpoint)\n    //       console.log(\"fetcing....\");\n    //       if (response){\n    //         const res = await response.json()\n    //         console.log(\"response: \", res.data[0]);\n    //       }else{\n    //         console.log(\"sorry\");\n    //       }\n    //     }catch(error){\n    //       console.log(\"error: \", error);\n    //     }\n    //   }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Welcome to dayliff social media manager\"\n            }, void 0, false, {\n                fileName: \"/home/runner/dsma/app/page.tsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/runner/dsma/app/page.tsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/runner/dsma/app/page.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxrQ0FBa0M7QUFDQTtBQUdsQyw0REFBNEQ7QUFDNUQsa0RBQWtEO0FBQ2xELGtEQUFrRDtBQUNsRCx1R0FBdUc7QUFHeEYsU0FBU0M7O0lBQ3RCRCxnREFBU0EsQ0FBQztRQUNSRTtJQUNGLEdBQUcsRUFBRTtJQUVMLGVBQWVBO1FBRVgsSUFBRztZQUNELE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUU3QkMsUUFBUUMsR0FBRyxDQUFDLFNBQVNIO1FBR3ZCLEVBQUMsT0FBTUksT0FBTTtZQUNYRixRQUFRQyxHQUFHLENBQUNDO1FBQ2Q7SUFDSjtJQUVGLCtCQUErQjtJQUUvQixXQUFXO0lBQ1gsK0NBQStDO0lBQy9DLG9DQUFvQztJQUVwQyx1QkFBdUI7SUFDdkIsNENBQTRDO0lBQzVDLGtEQUFrRDtJQUNsRCxlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsdUNBQXVDO0lBQ3ZDLFFBQVE7SUFDUixNQUFNO0lBR0oscUJBQ0UsOERBQUNDO2tCQUNDLDRFQUFDQztzQkFDQyw0RUFBQ0M7MEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLWDtHQTVDd0JUO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuLy8gaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb252ZXJzYXRpb25zTGlzdCBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnZlcnNhdGlvbkxpc3RcIlxuXG4vLyBjb25zdCBhY2Nlc3NfdG9rZW4gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BQ0NFU1NfVE9LRU5cbi8vIGNvbnN0IHVzZXJfaWQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VU0VSX0lEXG4vLyBjb25zdCBwYWdlX2lkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUEFHRV9JRFxuLy8gY29uc3QgZW5kcG9pbnQgPSBgaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vdjIwLjAvJHt1c2VyX2lkfS9hY2NvdW50cz9hY2Nlc3NfdG9rZW49JHthY2Nlc3NfdG9rZW59YFxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UGFnZSgpXG4gIH0sIFtdKTtcbiAgXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFBhZ2UoKSB7XG5cbiAgICAgIHRyeXtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9wYWdlJylcbiAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhcInJlczogXCIsIHJlc3BvbnNlKVxuICAgICAgXG5cbiAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgfVxuICB9XG5cbi8vICAgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnZSgpIHtcblxuLy8gICAgIHRyeXtcbi8vICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQpXG4vLyAgICAgICBjb25zb2xlLmxvZyhcImZldGNpbmcuLi4uXCIpO1xuICAgICAgXG4vLyAgICAgICBpZiAocmVzcG9uc2Upe1xuLy8gICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZTogXCIsIHJlcy5kYXRhWzBdKTtcbi8vICAgICAgIH1lbHNle1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhcInNvcnJ5XCIpO1xuLy8gICAgICAgfVxuLy8gICAgIH1jYXRjaChlcnJvcil7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBcIiwgZXJyb3IpO1xuLy8gICAgIH1cbi8vICAgfVxuXG4gIFxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+V2VsY29tZSB0byBkYXlsaWZmIHNvY2lhbCBtZWRpYSBtYW5hZ2VyPC9wPlxuICAgICAgICB7LyogPENvbnZlcnNhdGlvbnNMaXN0IC8+ICovfVxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIkhvbWUiLCJnZXRQYWdlIiwicmVzcG9uc2UiLCJmZXRjaCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1haW4iLCJkaXYiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});