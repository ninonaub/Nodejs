/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chatrooms/[slug]",{

/***/ "./components/messages.js":
/*!********************************!*\
  !*** ./components/messages.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_admin_Node_my_project_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_web_sockets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/web-sockets */ \"./config/web-sockets.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/admin/Node/my-project/frontend/components/messages.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Messages = function Messages(props) {\n  _s();\n\n  // const{messages, username} = props;\n  var username = props.username;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),\n      messages = _useState[0],\n      setMessages = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (Object.keys((next_router__WEBPACK_IMPORTED_MODULE_3___default().router.query)).length > 0) {\n      _config_web_sockets__WEBPACK_IMPORTED_MODULE_4__.socket.on('message', function (message, error) {\n        console.log(5555);\n        console.log('slug ms', [].concat((0,_Users_admin_Node_my_project_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(messages), [message]));\n        setMessages(function (msgs) {\n          return [].concat((0,_Users_admin_Node_my_project_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs), [message]);\n        });\n      });\n    } else {\n      next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/chat');\n    } //return () => {setUsers([]); setMessages([])};\n\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: messages.map(function (message, i) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"uk-background-muted uk-margin-small\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"\\n                              uk-padding-small\\n                              \".concat((next_router__WEBPACK_IMPORTED_MODULE_3___default().router.query.username) ? next_router__WEBPACK_IMPORTED_MODULE_3___default().router.query.username.trim().toLowerCase() === message.user.trim().toLowerCase() ? 'uk-background-primary ' : 'uk-background-secondary' : '', \"\\n                              \"),\n          style: \"color: #fff\",\n          children: [\"By \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n            children: message.user\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 28\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 23\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"uk-padding-small\",\n          children: message.text\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 23\n        }, _this)]\n      }, i, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 21\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Messages, \"RyA59LRbn9goj/9N7rELX+NWNVI=\");\n\n_c = Messages;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Messages);\n\nvar _c;\n\n$RefreshReg$(_c, \"Messages\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZXNzYWdlcy5qcz85YmYxIl0sIm5hbWVzIjpbIk1lc3NhZ2VzIiwicHJvcHMiLCJ1c2VybmFtZSIsInVzZVN0YXRlIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInVzZUVmZmVjdCIsIk9iamVjdCIsImtleXMiLCJSb3V0ZXIiLCJsZW5ndGgiLCJzb2NrZXQiLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibXNncyIsIm1hcCIsImkiLCJ0b0xvd2VyQ2FzZSIsInVzZXIiLCJ0cmltIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzFCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHRCxLQUFLLENBQUNDLFFBQXZCOztBQUYwQixrQkFHTUMsK0NBQVEsQ0FBQyxFQUFELENBSGQ7QUFBQSxNQUduQkMsUUFIbUI7QUFBQSxNQUdUQyxXQUhTOztBQUkxQkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlDLGlFQUFaLEVBQWlDQyxNQUFqQyxHQUEwQyxDQUE3QyxFQUErQztBQUN6Q0MsZ0VBQUEsQ0FBVSxTQUFWLEVBQXFCLFVBQUNDLE9BQUQsRUFBVUMsS0FBVixFQUFvQjtBQUN2Q0MsZUFBTyxDQUFDQyxHQUFSLENBQVksSUFBWjtBQUNBRCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLG9KQUE0QlgsUUFBNUIsSUFBc0NRLE9BQXRDO0FBQ0FQLG1CQUFXLENBQUMsVUFBQVcsSUFBSTtBQUFBLG1LQUFTQSxJQUFULElBQWVKLE9BQWY7QUFBQSxTQUFMLENBQVg7QUFDRCxPQUpEO0FBTUgsS0FQSCxNQVFPO0FBQ0RILDZEQUFBLENBQVksT0FBWjtBQUNILEtBWFcsQ0FZWjs7QUFDRixHQWJPLENBQVQ7QUFjRSxzQkFDSTtBQUFBLGNBRU1MLFFBQVEsQ0FBQ2EsR0FBVCxDQUFhLFVBQUNMLE9BQUQsRUFBVU0sQ0FBVixFQUFnQjtBQUMzQiwwQkFDSTtBQUFLLGlCQUFTLEVBQUMscUNBQWY7QUFBQSxnQ0FDRTtBQUNBLG1CQUFTLDRGQUVDVCwwRUFBQSxHQUErQkEsNkVBQUEsR0FBb0NVLFdBQXBDLE9BQXNEUCxPQUFPLENBQUNRLElBQVIsQ0FBYUMsSUFBYixHQUFvQkYsV0FBcEIsRUFBdEQsR0FBMEYsd0JBQTFGLEdBQW9ILHlCQUFuSixHQUE4SyxFQUYvSyxxQ0FEVDtBQUtBLGVBQUssRUFBQyxhQUxOO0FBQUEseUNBT0s7QUFBQSxzQkFBSVAsT0FBTyxDQUFDUTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBVUU7QUFBSyxtQkFBUyxFQUFDLGtCQUFmO0FBQUEsb0JBQW1DUixPQUFPLENBQUNVO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkY7QUFBQSxTQUEwREosQ0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBY0QsS0FmRDtBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXNCSCxDQXhDRDs7R0FBTWxCLFE7O0tBQUFBLFE7QUF5Q04sK0RBQWVBLFFBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lc3NhZ2VzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgc29ja2V0IH0gZnJvbSAnLi4vY29uZmlnL3dlYi1zb2NrZXRzJztcblxuXG5jb25zdCBNZXNzYWdlcyA9IChwcm9wcykgPT4ge1xuICAvLyBjb25zdHttZXNzYWdlcywgdXNlcm5hbWV9ID0gcHJvcHM7XG4gIGNvbnN0IHVzZXJuYW1lID0gcHJvcHMudXNlcm5hbWVcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYoT2JqZWN0LmtleXMoUm91dGVyLnJvdXRlci5xdWVyeSkubGVuZ3RoID4gMCl7XG4gICAgICAgICAgc29ja2V0Lm9uKCdtZXNzYWdlJywgKG1lc3NhZ2UsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyg1NTU1KVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NsdWcgbXMnLCBbIC4uLm1lc3NhZ2VzLCBtZXNzYWdlXSlcbiAgICAgICAgICAgIHNldE1lc3NhZ2VzKG1zZ3MgPT4gWyAuLi5tc2dzLCBtZXNzYWdlXSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAgIFJvdXRlci5wdXNoKCcvY2hhdCcpXG4gICAgICB9XG4gICAgICAvL3JldHVybiAoKSA9PiB7c2V0VXNlcnMoW10pOyBzZXRNZXNzYWdlcyhbXSl9O1xuICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWJhY2tncm91bmQtbXV0ZWQgdWstbWFyZ2luLXNtYWxsXCIga2V5PXtpfSA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdWstcGFkZGluZy1zbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtSb3V0ZXIucm91dGVyLnF1ZXJ5LnVzZXJuYW1lID8gUm91dGVyLnJvdXRlci5xdWVyeS51c2VybmFtZS50cmltKCkudG9Mb3dlckNhc2UoKSA9PT0gbWVzc2FnZS51c2VyLnRyaW0oKS50b0xvd2VyQ2FzZSgpID8gJ3VrLWJhY2tncm91bmQtcHJpbWFyeSAnOiAndWstYmFja2dyb3VuZC1zZWNvbmRhcnknOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJjb2xvcjogI2ZmZlwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQnkgPGk+e21lc3NhZ2UudXNlcn08L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1wYWRkaW5nLXNtYWxsXCI+e21lc3NhZ2UudGV4dH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/messages.js\n");

/***/ })

});