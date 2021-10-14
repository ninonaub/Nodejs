/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chatrooms/[slug]",{

/***/ "./pages/chatrooms/[slug].js":
/*!***********************************!*\
  !*** ./pages/chatrooms/[slug].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_admin_Node_my_project_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_admin_Node_my_project_frontend_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/api */ \"./lib/api.js\");\n/* harmony import */ var _config_web_sockets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/web-sockets */ \"./config/web-sockets.js\");\n/* harmony import */ var _components_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/messages */ \"./components/messages.js\");\n/* harmony import */ var _components_UserList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/UserList */ \"./components/UserList.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/seo */ \"./components/seo.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/admin/Node/my-project/frontend/pages/chatrooms/[slug].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar ChatRoom = function ChatRoom(_ref) {\n  _s();\n\n  (0,_Users_admin_Node_my_project_frontend_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__.default)(_ref);\n\n  console.log('router', (next_router__WEBPACK_IMPORTED_MODULE_8___default()));\n  var _Router$router$query = (next_router__WEBPACK_IMPORTED_MODULE_8___default().router.query),\n      username = _Router$router$query.username,\n      room = _Router$router$query.room,\n      userID = _Router$router$query.userID;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      message = _useState[0],\n      setMessage = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      messages = _useState2[0],\n      setMessages = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      users = _useState3[0],\n      setUsers = _useState3[1];\n\n  var seo = {\n    metaTitle: 'ChatRoom',\n    metaDescription: 'ChatRoom'\n  };\n\n  var handleChange = function handleChange(e) {\n    setMessage(e.target.value);\n  };\n\n  var handleClick = function handleClick(e) {\n    console.log('click');\n    sendMessage(message);\n  };\n\n  var sendMessage = function sendMessage(message) {\n    if (message) {\n      _config_web_sockets__WEBPACK_IMPORTED_MODULE_5__.socket.emit('sendMessage', {\n        userId: userID,\n        message: message\n      }, function (error) {\n        if (error) {\n          alert(error);\n          next_router__WEBPACK_IMPORTED_MODULE_8___default().push('/chat');\n        }\n      });\n      setMessage('');\n    } else {\n      alert(\"Message can't be empty\");\n    }\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    if (Object.keys((next_router__WEBPACK_IMPORTED_MODULE_8___default().router.query)).length > 0) {\n      _config_web_sockets__WEBPACK_IMPORTED_MODULE_5__.socket.on('message', function (message, error) {\n        console.log('slug ms', [].concat((0,_Users_admin_Node_my_project_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(messages), [message]));\n        setMessages(function (msgs) {\n          return [].concat((0,_Users_admin_Node_my_project_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(msgs), [message]);\n        });\n      });\n      _config_web_sockets__WEBPACK_IMPORTED_MODULE_5__.socket.on(\"roomInfo\", function (users) {\n        console.log('u', users.users);\n        setUsers(users.users);\n      });\n    } else {\n      next_router__WEBPACK_IMPORTED_MODULE_8___default().push('/chat');\n    } //return () => {setUsers([]); setMessages([])};\n\n  }, {});\n  return (\n    /*#__PURE__*/\n    //<Layout categories={categories}>\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_seo__WEBPACK_IMPORTED_MODULE_10__.default, {\n        seo: seo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 12\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"uk-section\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"uk-container uk-container-large\",\n          id: \"chat-room\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: [\"Room \", room]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            \"uk-grid\": \"true\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"uk-width-2-3@m\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_messages__WEBPACK_IMPORTED_MODULE_6__.default, {\n                messages: messages,\n                username: username\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 25\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_11__.Input, {\n                className: \"uk-input\",\n                type: \"text\",\n                placeholder: \"Type your message\",\n                value: message,\n                onChange: handleChange\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 75,\n                columnNumber: 25\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"uk-button-small uk-button-default uk-margin-small-top\",\n                onClick: handleClick,\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                  className: \"material-icons\",\n                  children: \"send\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 87,\n                  columnNumber: 27\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 83,\n                columnNumber: 25\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 23\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"uk-width-1-3@m\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UserList__WEBPACK_IMPORTED_MODULE_7__.default, {\n                users: users\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 91,\n                columnNumber: 25\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 90,\n              columnNumber: 23\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 21\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 14\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 12\n      }, _this)]\n    }, void 0, true) //</Layout>\n\n  );\n}; // export async function getStaticPaths() {\n//   // Run API calls in parallel\n//   const categories = await fetchAPI(\"/categories\")\n//\n//   return {\n//     paths: categories.map((category) => ({\n//       params: {\n//         slug: category.slug,\n//       },\n//     })),\n//     fallback: false,\n//   }\n// }\n// export async function getStaticProps({ params }) {\n//   const category = (await fetchAPI(`/categories?slug=${params.slug}`))[0]\n//   const categories = await fetchAPI(\"/categories\")\n//\n//   return {\n//     props: { category, categories },\n//     revalidate: 1,\n//   }\n// }\n\n\n_s(ChatRoom, \"ZaOfR5/0SiJHEe90ZsgvwYBMdWU=\");\n\n_c = ChatRoom;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatRoom);\n\nvar _c;\n\n$RefreshReg$(_c, \"ChatRoom\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdHJvb21zL1tzbHVnXS5qcz8xMDc1Il0sIm5hbWVzIjpbIkNoYXRSb29tIiwiY29uc29sZSIsImxvZyIsIlJvdXRlciIsInVzZXJuYW1lIiwicm9vbSIsInVzZXJJRCIsInVzZVN0YXRlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwidXNlcnMiLCJzZXRVc2VycyIsInNlbyIsIm1ldGFUaXRsZSIsIm1ldGFEZXNjcmlwdGlvbiIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNsaWNrIiwic2VuZE1lc3NhZ2UiLCJzb2NrZXQiLCJ1c2VySWQiLCJlcnJvciIsImFsZXJ0IiwidXNlRWZmZWN0IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIm1zZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQU87QUFBQTs7QUFBQTs7QUFDcEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBcUJDLG9EQUFyQjtBQURvQiw2QkFFYUEsaUVBRmI7QUFBQSxNQUViQyxRQUZhLHdCQUViQSxRQUZhO0FBQUEsTUFFSEMsSUFGRyx3QkFFSEEsSUFGRztBQUFBLE1BRUdDLE1BRkgsd0JBRUdBLE1BRkg7O0FBQUEsa0JBR1VDLCtDQUFRLENBQUMsRUFBRCxDQUhsQjtBQUFBLE1BR2JDLE9BSGE7QUFBQSxNQUdKQyxVQUhJOztBQUFBLG1CQUlZRiwrQ0FBUSxDQUFDLEVBQUQsQ0FKcEI7QUFBQSxNQUliRyxRQUphO0FBQUEsTUFJSEMsV0FKRzs7QUFBQSxtQkFLTUosK0NBQVEsQ0FBQyxFQUFELENBTGQ7QUFBQSxNQUtiSyxLQUxhO0FBQUEsTUFLTkMsUUFMTTs7QUFNcEIsTUFBTUMs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O0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFzQkU7QUFBSyx1QkFBUyxFQUFDLGdCQUFmO0FBQUEscUNBQ0UsOERBQUMseURBQUQ7QUFBVSxxQkFBSyxFQUFFVDtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBLG9CQUZGLENBb0NHOztBQXBDSDtBQXNDTixDQXhGRCxDLENBeUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0E5R01aLFE7O0tBQUFBLFE7QUErR04sK0RBQWVBLFFBQWYiLCJmaWxlIjoiLi9wYWdlcy9jaGF0cm9vbXMvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmZXRjaEFQSSB9IGZyb20gXCIuLi8uLi9saWIvYXBpXCJcbmltcG9ydCB7IHNvY2tldCB9IGZyb20gJy4uLy4uL2NvbmZpZy93ZWItc29ja2V0cyc7XG5pbXBvcnQgTWVzc2FnZXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tZXNzYWdlcyc7XG5pbXBvcnQgVXNlckxpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Vc2VyTGlzdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIlxuaW1wb3J0IFNlbyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zZW9cIlxuaW1wb3J0IHsgSW5wdXQsIENhcmQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCBDaGF0Um9vbSA9ICh7fSk9PiB7XG4gICAgY29uc29sZS5sb2coJ3JvdXRlcicsUm91dGVyKVxuICAgIGNvbnN0IHt1c2VybmFtZSwgcm9vbSwgdXNlcklEfSA9IFJvdXRlci5yb3V0ZXIucXVlcnlcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3Qgc2VvID0ge1xuICAgICAgbWV0YVRpdGxlOiAnQ2hhdFJvb20nLFxuICAgICAgbWV0YURlc2NyaXB0aW9uOiAnQ2hhdFJvb20nLFxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY2xpY2snKVxuICAgICAgc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgIGNvbnN0IHNlbmRNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIGlmKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdCgnc2VuZE1lc3NhZ2UnLHsgdXNlcklkOiB1c2VySUQsIG1lc3NhZ2UgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvY2hhdCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZSgnJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJNZXNzYWdlIGNhbid0IGJlIGVtcHR5XCIpXG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZihPYmplY3Qua2V5cyhSb3V0ZXIucm91dGVyLnF1ZXJ5KS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHNvY2tldC5vbignbWVzc2FnZScsIChtZXNzYWdlLCBlcnJvcikgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2x1ZyBtcycsIFsgLi4ubWVzc2FnZXMsIG1lc3NhZ2VdKVxuICAgICAgICAgICAgICBzZXRNZXNzYWdlcyhtc2dzID0+IFsgLi4ubXNncywgbWVzc2FnZV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzb2NrZXQub24oXCJyb29tSW5mb1wiLCAodXNlcnMpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3UnLHVzZXJzLnVzZXJzKVxuICAgICAgICAgICAgICBzZXRVc2Vycyh1c2Vycy51c2VycylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9jaGF0JylcbiAgICAgICAgfVxuICAgICAgICAvL3JldHVybiAoKSA9PiB7c2V0VXNlcnMoW10pOyBzZXRNZXNzYWdlcyhbXSl9O1xuICAgICB9LCB7fSlcblxuICAgICAgIHJldHVybiAoXG4gICAgICAgICAvLzxMYXlvdXQgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc30+XG4gICAgICAgICA8PlxuICAgICAgICAgICA8U2VvIHNlbz17c2VvfSAvPlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLWNvbnRhaW5lciB1ay1jb250YWluZXItbGFyZ2VcIiBpZD1cImNoYXQtcm9vbVwiPlxuICAgICAgICAgICAgICA8aDE+Um9vbSB7cm9vbX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHVrLWdyaWQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay13aWR0aC0yLTNAbVwiID5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXM9e21lc3NhZ2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lPXt1c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1ay1idXR0b24tc21hbGwgdWstYnV0dG9uLWRlZmF1bHQgdWstbWFyZ2luLXNtYWxsLXRvcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnNlbmQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXdpZHRoLTEtM0BtXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJMaXN0IHVzZXJzPXt1c2Vyc30vPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgLy88L0xheW91dD5cbiAgICApXG59O1xuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuLy8gICAvLyBSdW4gQVBJIGNhbGxzIGluIHBhcmFsbGVsXG4vLyAgIGNvbnN0IGNhdGVnb3JpZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9jYXRlZ29yaWVzXCIpXG4vL1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHBhdGhzOiBjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+ICh7XG4vLyAgICAgICBwYXJhbXM6IHtcbi8vICAgICAgICAgc2x1ZzogY2F0ZWdvcnkuc2x1Zyxcbi8vICAgICAgIH0sXG4vLyAgICAgfSkpLFxuLy8gICAgIGZhbGxiYWNrOiBmYWxzZSxcbi8vICAgfVxuLy8gfVxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbi8vICAgY29uc3QgY2F0ZWdvcnkgPSAoYXdhaXQgZmV0Y2hBUEkoYC9jYXRlZ29yaWVzP3NsdWc9JHtwYXJhbXMuc2x1Z31gKSlbMF1cbi8vICAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IGZldGNoQVBJKFwiL2NhdGVnb3JpZXNcIilcbi8vXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHsgY2F0ZWdvcnksIGNhdGVnb3JpZXMgfSxcbi8vICAgICByZXZhbGlkYXRlOiAxLFxuLy8gICB9XG4vLyB9XG5leHBvcnQgZGVmYXVsdCBDaGF0Um9vbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chatrooms/[slug].js\n");

/***/ })

});