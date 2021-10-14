/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_screens_JoinRoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/screens/JoinRoom */ \"./components/screens/JoinRoom/index.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/seo */ \"./components/seo.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/admin/Node/my-project/frontend/pages/chat.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar Chat = function Chat(_ref) {\n  _s();\n\n  var categories = _ref.categories;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      username = _useState[0],\n      setUsername = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      room = _useState3[0],\n      setRoom = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      userID = _useState4[0],\n      setUserID = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      chatroom = _useState5[0],\n      setChatRoom = _useState5[1];\n\n  function onJoinSuccess(data) {\n    var d = {\n      username: data.userData.username,\n      room: data.userData.room,\n      userID: data.userData.id\n    }; // setUserID(data.userData.id);\n    // setUsername(data.userData.username);\n    // setRoom(data.userData.room);\n    //data.data ? setRoom(data.data) : []\n    //NextRouter(true)\n\n    next_router__WEBPACK_IMPORTED_MODULE_6___default().push({\n      pathname: \"/chatrooms/\".concat(data.userData.room),\n      query: d\n    });\n  }\n\n  var seo = {\n    metaTitle: 'Chat',\n    metaDescription: 'Chat'\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_4__.default, {\n    categories: categories,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_seo__WEBPACK_IMPORTED_MODULE_5__.default, {\n      seo: seo\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"uk-section\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"uk-container uk-container-large\",\n        id: \"chat-room\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          children: \"Chat room\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_screens_JoinRoom__WEBPACK_IMPORTED_MODULE_3__.default, {\n          onJoinSuccess: onJoinSuccess\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, _this);\n}; // ReactDOM.render(\n//   <React.StrictMode>\n//       {Chat}\n//   </React.StrictMode>,\n//   document.getElementById('chat-room')\n// );\n\n\n_s(Chat, \"RswvFEIHmMdHSBfCDjj20DWODXw=\");\n\n_c = Chat;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\n\nvar _c;\n\n$RefreshReg$(_c, \"Chat\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcz9hMWI3Il0sIm5hbWVzIjpbIkNoYXQiLCJjYXRlZ29yaWVzIiwidXNlU3RhdGUiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiZGF0YSIsInNldERhdGEiLCJyb29tIiwic2V0Um9vbSIsInVzZXJJRCIsInNldFVzZXJJRCIsImNoYXRyb29tIiwic2V0Q2hhdFJvb20iLCJvbkpvaW5TdWNjZXNzIiwiZCIsInVzZXJEYXRhIiwiaWQiLCJOZXh0Um91dGVyIiwicGF0aG5hbWUiLCJxdWVyeSIsInNlbyIsIm1ldGFUaXRsZSIsIm1ldGFEZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBR0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQW9CO0FBQUE7O0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjs7QUFBQSxrQkFDR0MsK0NBQVEsQ0FBQyxFQUFELENBRFg7QUFBQSxNQUN0QkMsUUFEc0I7QUFBQSxNQUNaQyxXQURZOztBQUFBLG1CQUVMRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGSDtBQUFBLE1BRXRCRyxJQUZzQjtBQUFBLE1BRWhCQyxPQUZnQjs7QUFBQSxtQkFHTEosK0NBQVEsQ0FBQyxFQUFELENBSEg7QUFBQSxNQUd0QkssSUFIc0I7QUFBQSxNQUdoQkMsT0FIZ0I7O0FBQUEsbUJBSUROLCtDQUFRLENBQUMsRUFBRCxDQUpQO0FBQUEsTUFJdEJPLE1BSnNCO0FBQUEsTUFJZEMsU0FKYzs7QUFBQSxtQkFLR1IsK0NBQVEsQ0FBQyxLQUFELENBTFg7QUFBQSxNQUt0QlMsUUFMc0I7QUFBQSxNQUtaQyxXQUxZOztBQU03QixXQUFTQyxhQUFULENBQXVCUixJQUF2QixFQUE2QjtBQUMzQixRQUFNUyxDQUFDLEdBQUc7QUFBQ1gsY0FBUSxFQUFHRSxJQUFJLENBQUNVLFFBQUwsQ0FBY1osUUFBMUI7QUFBb0NJLFVBQUksRUFBR0YsSUFBSSxDQUFDVSxRQUFMLENBQWNSLElBQXpEO0FBQStERSxZQUFNLEVBQUdKLElBQUksQ0FBQ1UsUUFBTCxDQUFjQztBQUF0RixLQUFWLENBRDJCLENBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FDLDJEQUFBLENBQWdCO0FBQUNDLGNBQVEsdUJBQWdCYixJQUFJLENBQUNVLFFBQUwsQ0FBY1IsSUFBOUIsQ0FBVDtBQUErQ1ksV0FBSyxFQUFFTDtBQUF0RCxLQUFoQjtBQUNIOztBQUVILE1BQU1NLEdBQUcsR0FBRztBQUNWQyxhQUFTLEVBQUUsTUFERDtBQUVWQyxtQkFBZSxFQUFFO0FBRlAsR0FBWjtBQUtBLHNCQUNFLDhEQUFDLHVEQUFEO0FBQVEsY0FBVSxFQUFFckIsVUFBcEI7QUFBQSw0QkFDRSw4REFBQyxvREFBRDtBQUFLLFNBQUcsRUFBRW1CO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxpQ0FBZjtBQUFpRCxVQUFFLEVBQUMsV0FBcEQ7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLGlFQUFEO0FBQVUsdUJBQWEsRUFBRVA7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFXRCxDQWhDRCxDLENBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0dBdENNYixJOztLQUFBQSxJOztBQWlETiwrREFBZUEsSUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NoYXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtcbiAgICBSb3V0ZXIsXG4gICAgUm91dGUsXG4gICAgU3dpdGNoLFxuICAgIFJlZGlyZWN0XG59IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgSm9pblJvb20gZnJvbSAnLi4vY29tcG9uZW50cy9zY3JlZW5zL0pvaW5Sb29tJztcblxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vbGliL2FwaVwiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiXG5pbXBvcnQgU2VvIGZyb20gXCIuLi9jb21wb25lbnRzL3Nlb1wiXG5cbmltcG9ydCBOZXh0Um91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBDaGF0ID0gKHsgY2F0ZWdvcmllcyB9KSA9PiB7XG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtyb29tLCBzZXRSb29tXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbdXNlcklELCBzZXRVc2VySURdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtjaGF0cm9vbSwgc2V0Q2hhdFJvb21dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGZ1bmN0aW9uIG9uSm9pblN1Y2Nlc3MoZGF0YSkge1xuICAgICAgY29uc3QgZCA9IHt1c2VybmFtZSA6IGRhdGEudXNlckRhdGEudXNlcm5hbWUsIHJvb20gOiBkYXRhLnVzZXJEYXRhLnJvb20sIHVzZXJJRCA6IGRhdGEudXNlckRhdGEuaWR9XG4gICAgICAgIC8vIHNldFVzZXJJRChkYXRhLnVzZXJEYXRhLmlkKTtcbiAgICAgICAgLy8gc2V0VXNlcm5hbWUoZGF0YS51c2VyRGF0YS51c2VybmFtZSk7XG4gICAgICAgIC8vIHNldFJvb20oZGF0YS51c2VyRGF0YS5yb29tKTtcbiAgICAgICAgLy9kYXRhLmRhdGEgPyBzZXRSb29tKGRhdGEuZGF0YSkgOiBbXVxuICAgICAgICAvL05leHRSb3V0ZXIodHJ1ZSlcbiAgICAgICAgTmV4dFJvdXRlci5wdXNoKHtwYXRobmFtZSA6YC9jaGF0cm9vbXMvJHtkYXRhLnVzZXJEYXRhLnJvb219YCwgcXVlcnk6IGR9KVxuICAgIH1cblxuICBjb25zdCBzZW8gPSB7XG4gICAgbWV0YVRpdGxlOiAnQ2hhdCcsXG4gICAgbWV0YURlc2NyaXB0aW9uOiAnQ2hhdCcsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30+XG4gICAgICA8U2VvIHNlbz17c2VvfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1zZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1sYXJnZVwiIGlkPVwiY2hhdC1yb29tXCI+XG4gICAgICAgICAgPGgxPkNoYXQgcm9vbTwvaDE+XG4gICAgICAgICAgPEpvaW5Sb29tIG9uSm9pblN1Y2Nlc3M9e29uSm9pblN1Y2Nlc3N9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuLy8gUmVhY3RET00ucmVuZGVyKFxuLy8gICA8UmVhY3QuU3RyaWN0TW9kZT5cbi8vICAgICAgIHtDaGF0fVxuLy8gICA8L1JlYWN0LlN0cmljdE1vZGU+LFxuLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhdC1yb29tJylcbi8vICk7XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIC8vIFJ1biBBUEkgY2FsbHMgaW4gcGFyYWxsZWxcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGZldGNoQVBJKFwiL2NhdGVnb3JpZXNcIilcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGNhdGVnb3JpZXMgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});