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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst access_token = \"EAAc8ZC4o09HYBO4XFlBrpp3yeLAc5VgSDoSgvOXZCVAu0JVOJlt0atNjIUZBgCYU9mYVrdnf2rdhTTrZCKtVFJAv84zxzZBQsDPv2r36G5fnEXxBMo00CJNdAGjycRAsI2ea3pBUOanrAVobptZBxc8SI6CDzicZAILG3aZACdLN6HxNNOHapnHi2bvhtNZBPLq2MV5QkarADrMIORhnFmiRoyOn4rH5oeqcvP5mxj2FXv9NT\";\nconst user_id = \"7864910376940435\";\nconst page_id = \"466901410034470\";\nconst endpoint = \"https://graph.facebook.com/v20.0/\".concat(page_id, \"/conversations?access_token=\").concat(access_token);\nconst ConversationsList = ()=>{\n    _s();\n    const [conversations, setConversations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchConversations = async ()=>{\n            try {\n                const response = await fetch(\"/api/page\");\n                const data = await response.json();\n                console.log(\"DATTAHH\", data.data.data);\n                setConversations(data.data.data);\n            } catch (err) {\n                setError(\"Failed to fetch conversations\");\n            }\n        };\n        fetchConversations();\n    }, []);\n    async function getPage() {\n        try {\n            const response = await fetch(endpoint);\n            console.log(\"fetcing....\");\n            if (response) {\n                const res = await response.json();\n                setConversations(res);\n                console.log(\"response: \", res);\n            } else {\n                setError(\"Failed to fetch conversations\");\n                console.log(\"sorry\");\n            }\n        } catch (error) {\n            console.log(\"error: \", error);\n        }\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: error\n        }, void 0, false, {\n            fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n            lineNumber: 53,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Facebook Conversations\"\n            }, void 0, false, {\n                fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: conversations.map((conversation)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"ID: \",\n                                    conversation.id\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Updated Time: \",\n                                    new Date(conversation.updated_time).toLocaleString()\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.facebook.com\".concat(conversation.link),\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: \"View Conversation\"\n                            }, void 0, false, {\n                                fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, conversation.id, true, {\n                        fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/runner/dsma/app/components/ConversationList.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ConversationsList, \"KD/9U+JmoZ4eou5A6+f2Dc+KGT0=\");\n_c = ConversationsList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConversationsList);\nvar _c;\n$RefreshReg$(_c, \"ConversationsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NvbnZlcnNhdGlvbkxpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUNtRDtBQUduRCxNQUFNRyxlQUFlQyxvUEFBb0M7QUFDekQsTUFBTUcsVUFBVUgsa0JBQStCO0FBQy9DLE1BQU1LLFVBQVVMLGlCQUErQjtBQUMvQyxNQUFNTyxXQUFXLG9DQUEwRVIsT0FBdENNLFNBQVEsZ0NBQTJDLE9BQWJOO0FBSTNGLE1BQU1TLG9CQUE4Qjs7SUFDbEMsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1osK0NBQVFBLENBQWlCLEVBQUU7SUFDckUsTUFBTSxDQUFDYSxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFnQjtJQUVsREQsZ0RBQVNBLENBQUM7UUFDUixNQUFNZ0IscUJBQXFCO1lBQ3pCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO2dCQUM3QixNQUFNQyxPQUE4QixNQUFNRixTQUFTRyxJQUFJO2dCQUN2REMsUUFBUUMsR0FBRyxDQUFDLFdBQVdILEtBQUtBLElBQUksQ0FBQ0EsSUFBSTtnQkFDckNOLGlCQUFpQk0sS0FBS0EsSUFBSSxDQUFDQSxJQUFJO1lBQ2pDLEVBQUUsT0FBT0ksS0FBSztnQkFDWlIsU0FBUztZQUNYO1FBQ0Y7UUFFSUM7SUFDTixHQUFHLEVBQUU7SUFFSCxlQUFlUTtRQUViLElBQUc7WUFDRCxNQUFNUCxXQUFXLE1BQU1DLE1BQU1SO1lBQzdCVyxRQUFRQyxHQUFHLENBQUM7WUFFWixJQUFJTCxVQUFTO2dCQUNYLE1BQU1RLE1BQU0sTUFBTVIsU0FBU0csSUFBSTtnQkFDL0JQLGlCQUFpQlk7Z0JBQ2pCSixRQUFRQyxHQUFHLENBQUMsY0FBY0c7WUFDNUIsT0FBSztnQkFDSFYsU0FBUztnQkFDVE0sUUFBUUMsR0FBRyxDQUFDO1lBQ2Q7UUFDRixFQUFDLE9BQU1SLE9BQU07WUFDWE8sUUFBUUMsR0FBRyxDQUFDLFdBQVdSO1FBQ3pCO0lBQ0Y7SUFJRixJQUFJQSxPQUFPO1FBQ1QscUJBQU8sOERBQUNZO3NCQUFLWjs7Ozs7O0lBQ2Y7SUFFQSxxQkFDRSw4REFBQ1k7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFDRWhCLGNBQWNpQixHQUFHLENBQUMsQ0FBQ0MsNkJBQ2xCLDhEQUFDQzs7MENBQ0MsOERBQUNDOztvQ0FBRTtvQ0FBS0YsYUFBYUcsRUFBRTs7Ozs7OzswQ0FDdkIsOERBQUNEOztvQ0FBRTtvQ0FBZSxJQUFJRSxLQUFLSixhQUFhSyxZQUFZLEVBQUVDLGNBQWM7Ozs7Ozs7MENBQ3BFLDhEQUFDQztnQ0FBRUMsTUFBTSwyQkFBNkMsT0FBbEJSLGFBQWFTLElBQUk7Z0NBQUlDLFFBQU87Z0NBQVNDLEtBQUk7MENBQXNCOzs7Ozs7O3VCQUg1RlgsYUFBYUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQVdsQztHQTVETXRCO0tBQUFBO0FBOEROLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvQ29udmVyc2F0aW9uTGlzdC50c3g/Yjc4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnZlcnNhdGlvbiwgQ29udmVyc2F0aW9uc1Jlc3BvbnNlfSBmcm9tIFwiLi4vbGliL3R5cGVzL2luZGV4XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5cbmNvbnN0IGFjY2Vzc190b2tlbiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FDQ0VTU19UT0tFTlxuY29uc3QgdXNlcl9pZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VTRVJfSURcbmNvbnN0IHBhZ2VfaWQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QQUdFX0lEXG5jb25zdCBlbmRwb2ludCA9IGBodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS92MjAuMC8ke3BhZ2VfaWR9L2NvbnZlcnNhdGlvbnM/YWNjZXNzX3Rva2VuPSR7YWNjZXNzX3Rva2VufWBcblxuXG5cbmNvbnN0IENvbnZlcnNhdGlvbnNMaXN0OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2NvbnZlcnNhdGlvbnMsIHNldENvbnZlcnNhdGlvbnNdID0gdXNlU3RhdGU8Q29udmVyc2F0aW9uW10+KFtdKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoQ29udmVyc2F0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcGFnZScpO1xuICAgICAgICBjb25zdCBkYXRhOiBDb252ZXJzYXRpb25zUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiREFUVEFISFwiLCBkYXRhLmRhdGEuZGF0YSlcbiAgICAgICAgc2V0Q29udmVyc2F0aW9ucyhkYXRhLmRhdGEuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgc2V0RXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBjb252ZXJzYXRpb25zJyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgICAgICBmZXRjaENvbnZlcnNhdGlvbnMoKTtcbiAgfSwgW10pO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnZSgpIHtcblxuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZHBvaW50KVxuICAgICAgICBjb25zb2xlLmxvZyhcImZldGNpbmcuLi4uXCIpO1xuXG4gICAgICAgIGlmIChyZXNwb25zZSl7XG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgc2V0Q29udmVyc2F0aW9ucyhyZXMpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2U6IFwiLCByZXMpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBzZXRFcnJvcignRmFpbGVkIHRvIGZldGNoIGNvbnZlcnNhdGlvbnMnKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInNvcnJ5XCIpO1xuICAgICAgICB9XG4gICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgXG5cbiAgXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2PntlcnJvcn08L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+RmFjZWJvb2sgQ29udmVyc2F0aW9uczwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIHtjb252ZXJzYXRpb25zLm1hcCgoY29udmVyc2F0aW9uKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17Y29udmVyc2F0aW9uLmlkfT5cbiAgICAgICAgICAgIDxwPklEOiB7Y29udmVyc2F0aW9uLmlkfTwvcD5cbiAgICAgICAgICAgIDxwPlVwZGF0ZWQgVGltZToge25ldyBEYXRlKGNvbnZlcnNhdGlvbi51cGRhdGVkX3RpbWUpLnRvTG9jYWxlU3RyaW5nKCl9PC9wPlxuICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbSR7Y29udmVyc2F0aW9uLmxpbmt9YH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICBWaWV3IENvbnZlcnNhdGlvblxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnZlcnNhdGlvbnNMaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhY2Nlc3NfdG9rZW4iLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQUNDRVNTX1RPS0VOIiwidXNlcl9pZCIsIk5FWFRfUFVCTElDX1VTRVJfSUQiLCJwYWdlX2lkIiwiTkVYVF9QVUJMSUNfUEFHRV9JRCIsImVuZHBvaW50IiwiQ29udmVyc2F0aW9uc0xpc3QiLCJjb252ZXJzYXRpb25zIiwic2V0Q29udmVyc2F0aW9ucyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaENvbnZlcnNhdGlvbnMiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZ2V0UGFnZSIsInJlcyIsImRpdiIsImgxIiwidWwiLCJtYXAiLCJjb252ZXJzYXRpb24iLCJsaSIsInAiLCJpZCIsIkRhdGUiLCJ1cGRhdGVkX3RpbWUiLCJ0b0xvY2FsZVN0cmluZyIsImEiLCJocmVmIiwibGluayIsInRhcmdldCIsInJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ConversationList.tsx\n"));

/***/ })

});