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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// import Image from \"next/image\";\n\nconst access_token = \"EAAc8ZC4o09HYBO24fWI662AZBVFZAU6AkOcraBXT5yHZBELERaz261ZCuXjTO1czcvBzWZBot7N01V5s02MToLM2eE1FKqwVgYASyTWr1yzjUmEBmz8K2CSVZB67bXtBhE9EzHX4eLTMOBq7doNB7cttpRRl0tQNVapeHRg8lWKbLpT1n1EZCgMeOg7ZA2ZBmFRc1Atqdx1kc7A1F6Im1mGQBdVl3KxksRzZATfkAZDZD\";\nconst user_id = \"7864910376940435\";\nconst page_id = \"466901410034470\";\nconst endpoint = \"https://graph.facebook.com/v20.0/\".concat(page_id, \"/conversations?access_token=\").concat(access_token);\nfunction Home() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getPage();\n    }, []);\n    // async function getPage() {\n    //   try{\n    //     const response = await fetch(endpoint)\n    //     console.log(\"fetcing....\");\n    //     if (response){\n    //       const res = await response.json()\n    //       console.log(\"response: \", res.data[0]);\n    //     }else{\n    //       console.log(\"sorry\");\n    //     }\n    //   }catch(error){\n    //     console.log(\"error: \", error);\n    //   }\n    // }\n    async function getPageConversations() {\n        try {\n            const response = await fetch(endpoint);\n            console.log(\"fetcing....\");\n            if (response) {\n                const res = await response.json();\n                console.log(\"response: \", res.data[0]);\n            } else {\n                console.log(\"sorry\");\n            }\n        } catch (error) {\n            console.log(\"error: \", error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Welcome to dayliff social media manager\"\n            }, void 0, false, {\n                fileName: \"/home/runner/dsma/app/page.tsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/runner/dsma/app/page.tsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/runner/dsma/app/page.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxrQ0FBa0M7QUFDQTtBQUdsQyxNQUFNQyxlQUFlQyxnUEFBb0M7QUFDekQsTUFBTUcsVUFBVUgsa0JBQStCO0FBQy9DLE1BQU1LLFVBQVVMLGlCQUErQjtBQUMvQyxNQUFNTyxXQUFXLG9DQUEwRVIsT0FBdENNLFNBQVEsZ0NBQTJDLE9BQWJOO0FBRTVFLFNBQVNTOztJQUN0QlYsZ0RBQVNBLENBQUM7UUFDUlc7SUFDRixHQUFHLEVBQUU7SUFFTCw2QkFBNkI7SUFDN0IsU0FBUztJQUNULDZDQUE2QztJQUM3QyxrQ0FBa0M7SUFFbEMscUJBQXFCO0lBQ3JCLDBDQUEwQztJQUMxQyxnREFBZ0Q7SUFDaEQsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxNQUFNO0lBQ04sSUFBSTtJQUVKLGVBQWVDO1FBQ2IsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTUw7WUFDN0JNLFFBQVFDLEdBQUcsQ0FBQztZQUVaLElBQUlILFVBQVU7Z0JBQ1osTUFBTUksTUFBTSxNQUFNSixTQUFTSyxJQUFJO2dCQUMvQkgsUUFBUUMsR0FBRyxDQUFDLGNBQWNDLElBQUlFLElBQUksQ0FBQyxFQUFFO1lBQ3ZDLE9BQU87Z0JBQ0xKLFFBQVFDLEdBQUcsQ0FBQztZQUNkO1FBQ0YsRUFBRSxPQUFPSSxPQUFPO1lBQ2RMLFFBQVFDLEdBQUcsQ0FBQyxXQUFXSTtRQUN6QjtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO2tCQUNDLDRFQUFDQztzQkFDQyw0RUFBQ0M7MEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLWDtHQTdDd0JiO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuLy8gaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb252ZXJzYXRpb25zTGlzdCBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnZlcnNhdGlvbkxpc3RcIjtcblxuY29uc3QgYWNjZXNzX3Rva2VuID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQUNDRVNTX1RPS0VOO1xuY29uc3QgdXNlcl9pZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VTRVJfSUQ7XG5jb25zdCBwYWdlX2lkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUEFHRV9JRDtcbmNvbnN0IGVuZHBvaW50ID0gYGh0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tL3YyMC4wLyR7cGFnZV9pZH0vY29udmVyc2F0aW9ucz9hY2Nlc3NfdG9rZW49JHthY2Nlc3NfdG9rZW59YDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRQYWdlKCk7XG4gIH0sIFtdKTtcblxuICAvLyBhc3luYyBmdW5jdGlvbiBnZXRQYWdlKCkge1xuICAvLyAgIHRyeXtcbiAgLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQpXG4gIC8vICAgICBjb25zb2xlLmxvZyhcImZldGNpbmcuLi4uXCIpO1xuXG4gIC8vICAgICBpZiAocmVzcG9uc2Upe1xuICAvLyAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgLy8gICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZTogXCIsIHJlcy5kYXRhWzBdKTtcbiAgLy8gICAgIH1lbHNle1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhcInNvcnJ5XCIpO1xuICAvLyAgICAgfVxuICAvLyAgIH1jYXRjaChlcnJvcil7XG4gIC8vICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBcIiwgZXJyb3IpO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFBhZ2VDb252ZXJzYXRpb25zKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZHBvaW50KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2luZy4uLi5cIik7XG5cbiAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2U6IFwiLCByZXMuZGF0YVswXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNvcnJ5XCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBcIiwgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cD5XZWxjb21lIHRvIGRheWxpZmYgc29jaWFsIG1lZGlhIG1hbmFnZXI8L3A+XG4gICAgICAgIHsvKiA8Q29udmVyc2F0aW9uc0xpc3QgLz4gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiYWNjZXNzX3Rva2VuIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FDQ0VTU19UT0tFTiIsInVzZXJfaWQiLCJORVhUX1BVQkxJQ19VU0VSX0lEIiwicGFnZV9pZCIsIk5FWFRfUFVCTElDX1BBR0VfSUQiLCJlbmRwb2ludCIsIkhvbWUiLCJnZXRQYWdlIiwiZ2V0UGFnZUNvbnZlcnNhdGlvbnMiLCJyZXNwb25zZSIsImZldGNoIiwiY29uc29sZSIsImxvZyIsInJlcyIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJtYWluIiwiZGl2IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});