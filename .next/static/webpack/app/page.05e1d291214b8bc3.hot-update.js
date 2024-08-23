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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst access_token = \"EAAc8ZC4o09HYBO4XFlBrpp3yeLAc5VgSDoSgvOXZCVAu0JVOJlt0atNjIUZBgCYU9mYVrdnf2rdhTTrZCKtVFJAv84zxzZBQsDPv2r36G5fnEXxBMo00CJNdAGjycRAsI2ea3pBUOanrAVobptZBxc8SI6CDzicZAILG3aZACdLN6HxNNOHapnHi2bvhtNZBPLq2MV5QkarADrMIORhnFmiRoyOn4rH5oeqcvP5mxj2FXv9NT\";\nconst user_id = \"7864910376940435\";\nconst page_id = \"466901410034470\";\nconst endpoint = \"https://graph.facebook.com/v20.0/\".concat(page_id, \"/conversations?access_token=\").concat(access_token);\nconst ConversationsList = ()=>{\n    _s();\n    const [conversations, setConversations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchConversations = async ()=>{\n            try {\n                const response = await fetch(\"/api/page\");\n                const data = await response.json();\n                setConversations(data.data.data);\n            } catch (err) {\n                setError(\"Failed to fetch conversations\");\n            }\n        };\n        fetchConversations();\n    }, []);\n    async function getPage() {\n        try {\n            const response = await fetch(endpoint);\n            console.log(\"fetcing....\");\n            if (response) {\n                const res = await response.json();\n                setConversations(res);\n                console.log(\"response: \", res);\n            } else {\n                setError(\"Failed to fetch conversations\");\n                console.log(\"sorry\");\n            }\n        } catch (error) {\n            console.log(\"error: \", error);\n        }\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: error\n        }, void 0, false, {\n            fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n            lineNumber: 53,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Facebook Conversations\"\n            }, void 0, false, {\n                fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: conversations.map((conversation)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"ID: \",\n                                    conversation.id\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Updated Time: \",\n                                    new Date(conversation.updated_time).toLocaleString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.facebook.com\".concat(conversation.link),\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: \"View Conversation\"\n                            }, void 0, false, {\n                                fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, conversation.id, true, {\n                        fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ConversationsList, \"KD/9U+JmoZ4eou5A6+f2Dc+KGT0=\");\n_c = ConversationsList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConversationsList);\nvar _c;\n$RefreshReg$(_c, \"ConversationsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NvbnZlcnNhdGlvbkxpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUNtRDtBQUduRCxNQUFNRyxlQUFlQyxvUEFBb0M7QUFDekQsTUFBTUcsVUFBVUgsa0JBQStCO0FBQy9DLE1BQU1LLFVBQVVMLGlCQUErQjtBQUMvQyxNQUFNTyxXQUFXLG9DQUEwRVIsT0FBdENNLFNBQVEsZ0NBQTJDLE9BQWJOO0FBSTNGLE1BQU1TLG9CQUE4Qjs7SUFDbEMsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1osK0NBQVFBLENBQWlCLEVBQUU7SUFDckUsTUFBTSxDQUFDYSxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFnQjtJQUVsREQsZ0RBQVNBLENBQUM7UUFDUixNQUFNZ0IscUJBQXFCO1lBQ3pCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO2dCQUM3QixNQUFNQyxPQUE4QixNQUFNRixTQUFTRyxJQUFJO2dCQUV2RFAsaUJBQWlCTSxLQUFLQSxJQUFJLENBQUNBLElBQUk7WUFDakMsRUFBRSxPQUFPRSxLQUFLO2dCQUNaTixTQUFTO1lBQ1g7UUFDRjtRQUVJQztJQUNOLEdBQUcsRUFBRTtJQUVILGVBQWVNO1FBRWIsSUFBRztZQUNELE1BQU1MLFdBQVcsTUFBTUMsTUFBTVI7WUFDN0JhLFFBQVFDLEdBQUcsQ0FBQztZQUVaLElBQUlQLFVBQVM7Z0JBQ1gsTUFBTVEsTUFBTSxNQUFNUixTQUFTRyxJQUFJO2dCQUMvQlAsaUJBQWlCWTtnQkFDakJGLFFBQVFDLEdBQUcsQ0FBQyxjQUFjQztZQUM1QixPQUFLO2dCQUNIVixTQUFTO2dCQUNUUSxRQUFRQyxHQUFHLENBQUM7WUFDZDtRQUNGLEVBQUMsT0FBTVYsT0FBTTtZQUNYUyxRQUFRQyxHQUFHLENBQUMsV0FBV1Y7UUFDekI7SUFDRjtJQUlGLElBQUlBLE9BQU87UUFDVCxxQkFBTyw4REFBQ1k7c0JBQUtaOzs7Ozs7SUFDZjtJQUVBLHFCQUNFLDhEQUFDWTs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUNFaEIsY0FBY2lCLEdBQUcsQ0FBQyxDQUFDQyw2QkFDbEIsOERBQUNDOzswQ0FDQyw4REFBQ0M7O29DQUFFO29DQUFLRixhQUFhRyxFQUFFOzs7Ozs7OzBDQUN2Qiw4REFBQ0Q7O29DQUFFO29DQUFlLElBQUlFLEtBQUtKLGFBQWFLLFlBQVksRUFBRUMsY0FBYzs7Ozs7OzswQ0FDcEUsOERBQUNDO2dDQUFFQyxNQUFNLDJCQUE2QyxPQUFsQlIsYUFBYVMsSUFBSTtnQ0FBSUMsUUFBTztnQ0FBU0MsS0FBSTswQ0FBc0I7Ozs7Ozs7dUJBSDVGWCxhQUFhRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBV2xDO0dBNURNdEI7S0FBQUE7QUE4RE4sK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Db252ZXJzYXRpb25MaXN0LnRzeD9iNzg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udmVyc2F0aW9uLCBDb252ZXJzYXRpb25zUmVzcG9uc2V9IGZyb20gXCIuLi9saWIvdHlwZXMvaW5kZXhcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuY29uc3QgYWNjZXNzX3Rva2VuID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQUNDRVNTX1RPS0VOXG5jb25zdCB1c2VyX2lkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVNFUl9JRFxuY29uc3QgcGFnZV9pZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BBR0VfSURcbmNvbnN0IGVuZHBvaW50ID0gYGh0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tL3YyMC4wLyR7cGFnZV9pZH0vY29udmVyc2F0aW9ucz9hY2Nlc3NfdG9rZW49JHthY2Nlc3NfdG9rZW59YFxuXG5cblxuY29uc3QgQ29udmVyc2F0aW9uc0xpc3Q6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbY29udmVyc2F0aW9ucywgc2V0Q29udmVyc2F0aW9uc10gPSB1c2VTdGF0ZTxDb252ZXJzYXRpb25bXT4oW10pO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hDb252ZXJzYXRpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9wYWdlJyk7XG4gICAgICAgIGNvbnN0IGRhdGE6IENvbnZlcnNhdGlvbnNSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIFxuICAgICAgICBzZXRDb252ZXJzYXRpb25zKGRhdGEuZGF0YS5kYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBzZXRFcnJvcignRmFpbGVkIHRvIGZldGNoIGNvbnZlcnNhdGlvbnMnKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgICAgIGZldGNoQ29udmVyc2F0aW9ucygpO1xuICB9LCBbXSk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRQYWdlKCkge1xuXG4gICAgICB0cnl7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2luZy4uLi5cIik7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlKXtcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgICBzZXRDb252ZXJzYXRpb25zKHJlcyk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZTogXCIsIHJlcyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHNldEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggY29udmVyc2F0aW9ucycpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwic29ycnlcIik7XG4gICAgICAgIH1cbiAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IFwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICBcblxuICBcbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxkaXY+e2Vycm9yfTwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5GYWNlYm9vayBDb252ZXJzYXRpb25zPC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAge2NvbnZlcnNhdGlvbnMubWFwKChjb252ZXJzYXRpb24pID0+IChcbiAgICAgICAgICA8bGkga2V5PXtjb252ZXJzYXRpb24uaWR9PlxuICAgICAgICAgICAgPHA+SUQ6IHtjb252ZXJzYXRpb24uaWR9PC9wPlxuICAgICAgICAgICAgPHA+VXBkYXRlZCBUaW1lOiB7bmV3IERhdGUoY29udmVyc2F0aW9uLnVwZGF0ZWRfdGltZSkudG9Mb2NhbGVTdHJpbmcoKX08L3A+XG4gICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tJHtjb252ZXJzYXRpb24ubGlua31gfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgIFZpZXcgQ29udmVyc2F0aW9uXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udmVyc2F0aW9uc0xpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImFjY2Vzc190b2tlbiIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BQ0NFU1NfVE9LRU4iLCJ1c2VyX2lkIiwiTkVYVF9QVUJMSUNfVVNFUl9JRCIsInBhZ2VfaWQiLCJORVhUX1BVQkxJQ19QQUdFX0lEIiwiZW5kcG9pbnQiLCJDb252ZXJzYXRpb25zTGlzdCIsImNvbnZlcnNhdGlvbnMiLCJzZXRDb252ZXJzYXRpb25zIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoQ29udmVyc2F0aW9ucyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImVyciIsImdldFBhZ2UiLCJjb25zb2xlIiwibG9nIiwicmVzIiwiZGl2IiwiaDEiLCJ1bCIsIm1hcCIsImNvbnZlcnNhdGlvbiIsImxpIiwicCIsImlkIiwiRGF0ZSIsInVwZGF0ZWRfdGltZSIsInRvTG9jYWxlU3RyaW5nIiwiYSIsImhyZWYiLCJsaW5rIiwidGFyZ2V0IiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ConversationList.tsx\n"));

/***/ })

});