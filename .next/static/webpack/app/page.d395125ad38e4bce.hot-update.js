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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// import Image from \"next/image\";\n\n// const access_token = process.env.NEXT_PUBLIC_ACCESS_TOKEN\n// const user_id = process.env.NEXT_PUBLIC_USER_ID\n// const page_id = process.env.NEXT_PUBLIC_PAGE_ID\n// const endpoint = `https://graph.facebook.com/v20.0/${user_id}/accounts?access_token=${access_token}`\nfunction Home() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getPage();\n    }, []);\n    async function getPage() {\n        try {\n            const response = await fetch(\"/api/page\");\n            const res = await response.json();\n            console.log(\"res: \", res);\n        } catch (error) {\n            console.log(error);\n        }\n    }\n    //   async function getPage() {\n    //     try{\n    //       const response = await fetch(endpoint)\n    //       console.log(\"fetcing....\");\n    //       if (response){\n    //         const res = await response.json()\n    //         console.log(\"response: \", res.data[0]);\n    //       }else{\n    //         console.log(\"sorry\");\n    //       }\n    //     }catch(error){\n    //       console.log(\"error: \", error);\n    //     }\n    //   }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Welcome to dayliff social media manager\"\n            }, void 0, false, {\n                fileName: \"/home/runner/dsma/app/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/runner/dsma/app/page.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/runner/dsma/app/page.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxrQ0FBa0M7QUFDQTtBQUdsQyw0REFBNEQ7QUFDNUQsa0RBQWtEO0FBQ2xELGtEQUFrRDtBQUNsRCx1R0FBdUc7QUFHeEYsU0FBU0M7O0lBQ3RCRCxnREFBU0EsQ0FBQztRQUNSRTtJQUNGLEdBQUcsRUFBRTtJQUVMLGVBQWVBO1FBRVgsSUFBRztZQUNELE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixNQUFNQyxNQUFNLE1BQU1GLFNBQVNHLElBQUk7WUFFL0JDLFFBQVFDLEdBQUcsQ0FBQyxTQUFTSDtRQUd2QixFQUFDLE9BQU1JLE9BQU07WUFDWEYsUUFBUUMsR0FBRyxDQUFDQztRQUNkO0lBQ0o7SUFFRiwrQkFBK0I7SUFFL0IsV0FBVztJQUNYLCtDQUErQztJQUMvQyxvQ0FBb0M7SUFFcEMsdUJBQXVCO0lBQ3ZCLDRDQUE0QztJQUM1QyxrREFBa0Q7SUFDbEQsZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLHVDQUF1QztJQUN2QyxRQUFRO0lBQ1IsTUFBTTtJQUdKLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ0M7c0JBQ0MsNEVBQUNDOzBCQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBS1g7R0E3Q3dCWDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbi8vIGltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29udmVyc2F0aW9uc0xpc3QgZnJvbSBcIi4vY29tcG9uZW50cy9Db252ZXJzYXRpb25MaXN0XCJcblxuLy8gY29uc3QgYWNjZXNzX3Rva2VuID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQUNDRVNTX1RPS0VOXG4vLyBjb25zdCB1c2VyX2lkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVNFUl9JRFxuLy8gY29uc3QgcGFnZV9pZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BBR0VfSURcbi8vIGNvbnN0IGVuZHBvaW50ID0gYGh0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tL3YyMC4wLyR7dXNlcl9pZH0vYWNjb3VudHM/YWNjZXNzX3Rva2VuPSR7YWNjZXNzX3Rva2VufWBcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFBhZ2UoKVxuICB9LCBbXSk7XG4gIFxuICBhc3luYyBmdW5jdGlvbiBnZXRQYWdlKCkge1xuXG4gICAgICB0cnl7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcGFnZScpXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzOiBcIiwgcmVzKVxuICAgICAgXG5cbiAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgfVxuICB9XG5cbi8vICAgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnZSgpIHtcblxuLy8gICAgIHRyeXtcbi8vICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQpXG4vLyAgICAgICBjb25zb2xlLmxvZyhcImZldGNpbmcuLi4uXCIpO1xuICAgICAgXG4vLyAgICAgICBpZiAocmVzcG9uc2Upe1xuLy8gICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZTogXCIsIHJlcy5kYXRhWzBdKTtcbi8vICAgICAgIH1lbHNle1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhcInNvcnJ5XCIpO1xuLy8gICAgICAgfVxuLy8gICAgIH1jYXRjaChlcnJvcil7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBcIiwgZXJyb3IpO1xuLy8gICAgIH1cbi8vICAgfVxuXG4gIFxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+V2VsY29tZSB0byBkYXlsaWZmIHNvY2lhbCBtZWRpYSBtYW5hZ2VyPC9wPlxuICAgICAgICB7LyogPENvbnZlcnNhdGlvbnNMaXN0IC8+ICovfVxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIkhvbWUiLCJnZXRQYWdlIiwicmVzcG9uc2UiLCJmZXRjaCIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJtYWluIiwiZGl2IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});