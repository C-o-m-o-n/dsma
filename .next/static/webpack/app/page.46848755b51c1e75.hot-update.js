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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ConversationsList = ()=>{\n    _s();\n    const [conversations, setConversations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchConversations = async ()=>{\n            try {\n                const response = await fetch(\"/api/page/conversations\");\n                const data = await response.json();\n                setConversations(data.data.data);\n            } catch (err) {\n                setError(\"Failed to fetch conversations\");\n            }\n        };\n        fetchConversations();\n    }, []);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: error\n        }, void 0, false, {\n            fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n            lineNumber: 22,\n            columnNumber: 12\n        }, undefined);\n    }\n    const showConversations = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: conversations.map((conversation)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"ID: \",\n                                    conversation.id\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Updated Time: \",\n                                    new Date(conversation.updated_time).toLocaleString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.facebook.com\".concat(conversation.link),\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: \"View Conversation\"\n                            }, void 0, false, {\n                                fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, conversation.id, true, {\n                        fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"All Page Conversations\"\n            }, void 0, false, {\n                fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            conversations.length\n        ]\n    }, void 0, true, {\n        fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ConversationsList, \"KD/9U+JmoZ4eou5A6+f2Dc+KGT0=\");\n_c = ConversationsList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConversationsList);\nvar _c;\n$RefreshReg$(_c, \"ConversationsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NvbnZlcnNhdGlvbkxpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUNtRDtBQUVuRCxNQUFNRyxvQkFBOEI7O0lBQ2xDLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdILCtDQUFRQSxDQUFpQixFQUFFO0lBQ3JFLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBZ0I7SUFFbERELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8scUJBQXFCO1lBQ3pCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO2dCQUM3QixNQUFNQyxPQUE4QixNQUFNRixTQUFTRyxJQUFJO2dCQUN2RFAsaUJBQWlCTSxLQUFLQSxJQUFJLENBQUNBLElBQUk7WUFDakMsRUFBRSxPQUFPRSxLQUFLO2dCQUNaTixTQUFTO1lBQ1g7UUFDRjtRQUNJQztJQUNOLEdBQUcsRUFBRTtJQUVMLElBQUlGLE9BQU87UUFDVCxxQkFBTyw4REFBQ1E7c0JBQUtSOzs7Ozs7SUFDZjtJQUVBLE1BQU1TLG9CQUFvQjtRQUN4QixxQkFDRSw4REFBQ0Q7c0JBQ0MsNEVBQUNFOzBCQUNFWixjQUFjYSxHQUFHLENBQUMsQ0FBQ0MsNkJBQ2xCLDhEQUFDQzs7MENBQ0MsOERBQUNDOztvQ0FBRTtvQ0FBS0YsYUFBYUcsRUFBRTs7Ozs7OzswQ0FDdkIsOERBQUNEOztvQ0FBRTtvQ0FBZSxJQUFJRSxLQUFLSixhQUFhSyxZQUFZLEVBQUVDLGNBQWM7Ozs7Ozs7MENBQ3BFLDhEQUFDQztnQ0FBRUMsTUFBTSwyQkFBNkMsT0FBbEJSLGFBQWFTLElBQUk7Z0NBQUlDLFFBQU87Z0NBQVNDLEtBQUk7MENBQXNCOzs7Ozs7O3VCQUg1RlgsYUFBYUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0lBV2xDO0lBRUEscUJBQ0UsOERBQUNQOzswQkFDQyw4REFBQ2dCOzBCQUFHOzs7Ozs7WUFDSDFCLGNBQWMyQixNQUFNOzs7Ozs7O0FBRzNCO0dBN0NNNUI7S0FBQUE7QUErQ04sK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Db252ZXJzYXRpb25MaXN0LnRzeD9iNzg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udmVyc2F0aW9uLCBDb252ZXJzYXRpb25zUmVzcG9uc2V9IGZyb20gXCIuLi9saWIvdHlwZXMvaW5kZXhcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENvbnZlcnNhdGlvbnNMaXN0OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2NvbnZlcnNhdGlvbnMsIHNldENvbnZlcnNhdGlvbnNdID0gdXNlU3RhdGU8Q29udmVyc2F0aW9uW10+KFtdKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoQ29udmVyc2F0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcGFnZS9jb252ZXJzYXRpb25zJyk7XG4gICAgICAgIGNvbnN0IGRhdGE6IENvbnZlcnNhdGlvbnNSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0Q29udmVyc2F0aW9ucyhkYXRhLmRhdGEuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgc2V0RXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBjb252ZXJzYXRpb25zJyk7XG4gICAgICB9XG4gICAgfTtcbiAgICAgICAgZmV0Y2hDb252ZXJzYXRpb25zKCk7XG4gIH0sIFtdKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdj57ZXJyb3J9PC9kaXY+O1xuICB9XG5cbiAgY29uc3Qgc2hvd0NvbnZlcnNhdGlvbnMgPSAoKSA9PntcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAge2NvbnZlcnNhdGlvbnMubWFwKChjb252ZXJzYXRpb24pID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2NvbnZlcnNhdGlvbi5pZH0+XG4gICAgICAgICAgICAgIDxwPklEOiB7Y29udmVyc2F0aW9uLmlkfTwvcD5cbiAgICAgICAgICAgICAgPHA+VXBkYXRlZCBUaW1lOiB7bmV3IERhdGUoY29udmVyc2F0aW9uLnVwZGF0ZWRfdGltZSkudG9Mb2NhbGVTdHJpbmcoKX08L3A+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL3d3dy5mYWNlYm9vay5jb20ke2NvbnZlcnNhdGlvbi5saW5rfWB9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICBWaWV3IENvbnZlcnNhdGlvblxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkFsbCBQYWdlIENvbnZlcnNhdGlvbnM8L2gxPlxuICAgICAge2NvbnZlcnNhdGlvbnMubGVuZ3RofVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udmVyc2F0aW9uc0xpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbnZlcnNhdGlvbnNMaXN0IiwiY29udmVyc2F0aW9ucyIsInNldENvbnZlcnNhdGlvbnMiLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2hDb252ZXJzYXRpb25zIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZXJyIiwiZGl2Iiwic2hvd0NvbnZlcnNhdGlvbnMiLCJ1bCIsIm1hcCIsImNvbnZlcnNhdGlvbiIsImxpIiwicCIsImlkIiwiRGF0ZSIsInVwZGF0ZWRfdGltZSIsInRvTG9jYWxlU3RyaW5nIiwiYSIsImhyZWYiLCJsaW5rIiwidGFyZ2V0IiwicmVsIiwiaDEiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ConversationList.tsx\n"));

/***/ })

});