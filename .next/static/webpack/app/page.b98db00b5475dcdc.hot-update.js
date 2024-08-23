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

/***/ "(app-pages-browser)/./app/components/ConversationList.tsx":
/*!*********************************************!*\
  !*** ./app/components/ConversationList.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ConversationsList = ()=>{\n    _s();\n    const [conversations, setConversations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchConversations = async ()=>{\n            try {\n                const response = await fetch(\"/api/page\");\n                const data = await response.json();\n                setConversations(data.data.data);\n            } catch (err) {\n                setError(\"Failed to fetch conversations\");\n            }\n        };\n        fetchConversations();\n    }, []);\n    async function getPage() {\n        try {\n            const response = await fetch(endpoint);\n            console.log(\"fetcing....\");\n            if (response) {\n                const res = await response.json();\n                setConversations(res);\n                console.log(\"response: \", res);\n            } else {\n                setError(\"Failed to fetch conversations\");\n                console.log(\"sorry\");\n            }\n        } catch (error) {\n            console.log(\"error: \", error);\n        }\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: error\n        }, void 0, false, {\n            fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n            lineNumber: 44,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Facebook Conversations\"\n            }, void 0, false, {\n                fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: conversations.map((conversation)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"ID: \",\n                                    conversation.id\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Updated Time: \",\n                                    new Date(conversation.updated_time).toLocaleString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.facebook.com\".concat(conversation.link),\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: \"View Conversation\"\n                            }, void 0, false, {\n                                fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, conversation.id, true, {\n                        fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ConversationsList, \"KD/9U+JmoZ4eou5A6+f2Dc+KGT0=\");\n_c = ConversationsList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConversationsList);\nvar _c;\n$RefreshReg$(_c, \"ConversationsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NvbnZlcnNhdGlvbkxpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUNtRDtBQUVuRCxNQUFNRyxvQkFBOEI7O0lBQ2xDLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdILCtDQUFRQSxDQUFpQixFQUFFO0lBQ3JFLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBZ0I7SUFFbERELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8scUJBQXFCO1lBQ3pCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO2dCQUM3QixNQUFNQyxPQUE4QixNQUFNRixTQUFTRyxJQUFJO2dCQUN2RFAsaUJBQWlCTSxLQUFLQSxJQUFJLENBQUNBLElBQUk7WUFDakMsRUFBRSxPQUFPRSxLQUFLO2dCQUNaTixTQUFTO1lBQ1g7UUFDRjtRQUVJQztJQUNOLEdBQUcsRUFBRTtJQUVILGVBQWVNO1FBRWIsSUFBRztZQUNELE1BQU1MLFdBQVcsTUFBTUMsTUFBTUs7WUFDN0JDLFFBQVFDLEdBQUcsQ0FBQztZQUVaLElBQUlSLFVBQVM7Z0JBQ1gsTUFBTVMsTUFBTSxNQUFNVCxTQUFTRyxJQUFJO2dCQUMvQlAsaUJBQWlCYTtnQkFDakJGLFFBQVFDLEdBQUcsQ0FBQyxjQUFjQztZQUM1QixPQUFLO2dCQUNIWCxTQUFTO2dCQUNUUyxRQUFRQyxHQUFHLENBQUM7WUFDZDtRQUNGLEVBQUMsT0FBTVgsT0FBTTtZQUNYVSxRQUFRQyxHQUFHLENBQUMsV0FBV1g7UUFDekI7SUFDRjtJQUlGLElBQUlBLE9BQU87UUFDVCxxQkFBTyw4REFBQ2E7c0JBQUtiOzs7Ozs7SUFDZjtJQUVBLHFCQUNFLDhEQUFDYTs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUNFakIsY0FBY2tCLEdBQUcsQ0FBQyxDQUFDQyw2QkFDbEIsOERBQUNDOzswQ0FDQyw4REFBQ0M7O29DQUFFO29DQUFLRixhQUFhRyxFQUFFOzs7Ozs7OzBDQUN2Qiw4REFBQ0Q7O29DQUFFO29DQUFlLElBQUlFLEtBQUtKLGFBQWFLLFlBQVksRUFBRUMsY0FBYzs7Ozs7OzswQ0FDcEUsOERBQUNDO2dDQUFFQyxNQUFNLDJCQUE2QyxPQUFsQlIsYUFBYVMsSUFBSTtnQ0FBSUMsUUFBTztnQ0FBU0MsS0FBSTswQ0FBc0I7Ozs7Ozs7dUJBSDVGWCxhQUFhRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBV2xDO0dBM0RNdkI7S0FBQUE7QUE2RE4sK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Db252ZXJzYXRpb25MaXN0LnRzeD9iNzg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udmVyc2F0aW9uLCBDb252ZXJzYXRpb25zUmVzcG9uc2V9IGZyb20gXCIuLi9saWIvdHlwZXMvaW5kZXhcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENvbnZlcnNhdGlvbnNMaXN0OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2NvbnZlcnNhdGlvbnMsIHNldENvbnZlcnNhdGlvbnNdID0gdXNlU3RhdGU8Q29udmVyc2F0aW9uW10+KFtdKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoQ29udmVyc2F0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcGFnZScpO1xuICAgICAgICBjb25zdCBkYXRhOiBDb252ZXJzYXRpb25zUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldENvbnZlcnNhdGlvbnMoZGF0YS5kYXRhLmRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHNldEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggY29udmVyc2F0aW9ucycpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAgICAgZmV0Y2hDb252ZXJzYXRpb25zKCk7XG4gIH0sIFtdKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFBhZ2UoKSB7XG5cbiAgICAgIHRyeXtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRwb2ludClcbiAgICAgICAgY29uc29sZS5sb2coXCJmZXRjaW5nLi4uLlwiKTtcblxuICAgICAgICBpZiAocmVzcG9uc2Upe1xuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgIHNldENvbnZlcnNhdGlvbnMocmVzKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlOiBcIiwgcmVzKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgc2V0RXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBjb252ZXJzYXRpb25zJyk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJzb3JyeVwiKTtcbiAgICAgICAgfVxuICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogXCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuXG4gIFxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdj57ZXJyb3J9PC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkZhY2Vib29rIENvbnZlcnNhdGlvbnM8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICB7Y29udmVyc2F0aW9ucy5tYXAoKGNvbnZlcnNhdGlvbikgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2NvbnZlcnNhdGlvbi5pZH0+XG4gICAgICAgICAgICA8cD5JRDoge2NvbnZlcnNhdGlvbi5pZH08L3A+XG4gICAgICAgICAgICA8cD5VcGRhdGVkIFRpbWU6IHtuZXcgRGF0ZShjb252ZXJzYXRpb24udXBkYXRlZF90aW1lKS50b0xvY2FsZVN0cmluZygpfTwvcD5cbiAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL3d3dy5mYWNlYm9vay5jb20ke2NvbnZlcnNhdGlvbi5saW5rfWB9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgVmlldyBDb252ZXJzYXRpb25cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb252ZXJzYXRpb25zTGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udmVyc2F0aW9uc0xpc3QiLCJjb252ZXJzYXRpb25zIiwic2V0Q29udmVyc2F0aW9ucyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaENvbnZlcnNhdGlvbnMiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJlcnIiLCJnZXRQYWdlIiwiZW5kcG9pbnQiLCJjb25zb2xlIiwibG9nIiwicmVzIiwiZGl2IiwiaDEiLCJ1bCIsIm1hcCIsImNvbnZlcnNhdGlvbiIsImxpIiwicCIsImlkIiwiRGF0ZSIsInVwZGF0ZWRfdGltZSIsInRvTG9jYWxlU3RyaW5nIiwiYSIsImhyZWYiLCJsaW5rIiwidGFyZ2V0IiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ConversationList.tsx\n"));

/***/ })

});