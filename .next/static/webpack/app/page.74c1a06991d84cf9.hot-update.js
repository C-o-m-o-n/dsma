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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// import Image from \"next/image\";\n\n// const access_token = process.env.NEXT_PUBLIC_ACCESS_TOKEN\n// const user_id = process.env.NEXT_PUBLIC_USER_ID\n// const page_id = process.env.NEXT_PUBLIC_PAGE_ID\n// const endpoint = `https://graph.facebook.com/v20.0/${user_id}/accounts?access_token=${access_token}`\nfunction Home() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getPage();\n    }, []);\n    async function getPage() {\n        try {\n            const response = await fetch(\"/api/page\");\n            const res = response.json();\n            console.log(\"res: \", res);\n        } catch (error) {\n            console.log(error);\n        }\n    }\n    //   async function getPage() {\n    //     try{\n    //       const response = await fetch(endpoint)\n    //       console.log(\"fetcing....\");\n    //       if (response){\n    //         const res = await response.json()\n    //         console.log(\"response: \", res.data[0]);\n    //       }else{\n    //         console.log(\"sorry\");\n    //       }\n    //     }catch(error){\n    //       console.log(\"error: \", error);\n    //     }\n    //   }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Welcome to dayliff social media manager\"\n            }, void 0, false, {\n                fileName: \"/home/runner/dsma/app/page.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/runner/dsma/app/page.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/runner/dsma/app/page.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxrQ0FBa0M7QUFDQTtBQUdsQyw0REFBNEQ7QUFDNUQsa0RBQWtEO0FBQ2xELGtEQUFrRDtBQUNsRCx1R0FBdUc7QUFHeEYsU0FBU0M7O0lBQ3RCRCxnREFBU0EsQ0FBQztRQUNSRTtJQUNGLEdBQUcsRUFBRTtJQUNMLGVBQWVBO1FBRVgsSUFBRztZQUNELE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixNQUFNQyxNQUFNRixTQUFTRyxJQUFJO1lBQ3pCQyxRQUFRQyxHQUFHLENBQUMsU0FBU0g7UUFFdkIsRUFBQyxPQUFNSSxPQUFNO1lBQ1hGLFFBQVFDLEdBQUcsQ0FBQ0M7UUFDZDtJQUNKO0lBRUYsK0JBQStCO0lBRS9CLFdBQVc7SUFDWCwrQ0FBK0M7SUFDL0Msb0NBQW9DO0lBRXBDLHVCQUF1QjtJQUN2Qiw0Q0FBNEM7SUFDNUMsa0RBQWtEO0lBQ2xELGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQix1Q0FBdUM7SUFDdkMsUUFBUTtJQUNSLE1BQU07SUFHSixxQkFDRSw4REFBQ0M7a0JBQ0MsNEVBQUNDO3NCQUNDLDRFQUFDQzswQkFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQUtYO0dBMUN3Qlg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnZlcnNhdGlvbnNMaXN0IGZyb20gXCIuL2NvbXBvbmVudHMvQ29udmVyc2F0aW9uTGlzdFwiXG5cbi8vIGNvbnN0IGFjY2Vzc190b2tlbiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FDQ0VTU19UT0tFTlxuLy8gY29uc3QgdXNlcl9pZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VTRVJfSURcbi8vIGNvbnN0IHBhZ2VfaWQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QQUdFX0lEXG4vLyBjb25zdCBlbmRwb2ludCA9IGBodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS92MjAuMC8ke3VzZXJfaWR9L2FjY291bnRzP2FjY2Vzc190b2tlbj0ke2FjY2Vzc190b2tlbn1gXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRQYWdlKClcbiAgfSwgW10pO1xuICBhc3luYyBmdW5jdGlvbiBnZXRQYWdlKCkge1xuXG4gICAgICB0cnl7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcGFnZScpXG4gICAgICAgIGNvbnN0IHJlcyA9IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICBjb25zb2xlLmxvZyhcInJlczogXCIsIHJlcylcblxuICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICB9XG4gIH1cblxuLy8gICBhc3luYyBmdW5jdGlvbiBnZXRQYWdlKCkge1xuXG4vLyAgICAgdHJ5e1xuLy8gICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRwb2ludClcbi8vICAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2luZy4uLi5cIik7XG4gICAgICBcbi8vICAgICAgIGlmIChyZXNwb25zZSl7XG4vLyAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuLy8gICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlOiBcIiwgcmVzLmRhdGFbMF0pO1xuLy8gICAgICAgfWVsc2V7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwic29ycnlcIik7XG4vLyAgICAgICB9XG4vLyAgICAgfWNhdGNoKGVycm9yKXtcbi8vICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IFwiLCBlcnJvcik7XG4vLyAgICAgfVxuLy8gICB9XG5cbiAgXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cD5XZWxjb21lIHRvIGRheWxpZmYgc29jaWFsIG1lZGlhIG1hbmFnZXI8L3A+XG4gICAgICAgIHsvKiA8Q29udmVyc2F0aW9uc0xpc3QgLz4gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiSG9tZSIsImdldFBhZ2UiLCJyZXNwb25zZSIsImZldGNoIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1haW4iLCJkaXYiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});