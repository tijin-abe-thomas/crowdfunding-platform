"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/management/transactions",{

/***/ "./src/content/Management/Transactions/RecentOrders.tsx":
/*!**************************************************************!*\
  !*** ./src/content/Management/Transactions/RecentOrders.tsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_91905_Desktop_crowdfunding_crowdfunding_web_final_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_91905_Desktop_crowdfunding_crowdfunding_web_final_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_91905_Desktop_crowdfunding_crowdfunding_web_final_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _RecentOrdersTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecentOrdersTable */ \"./src/content/Management/Transactions/RecentOrdersTable.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _artifacts_contracts_Crowdfunding_sol_Crowdfunding_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../artifacts/contracts/Crowdfunding.sol/Crowdfunding.json */ \"./artifacts/contracts/Crowdfunding.sol/Crowdfunding.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar smartContractAddress = \"0x5FbDB2315678afecb367f032d93F642f64180aa3\";\nvar contractAbi = _artifacts_contracts_Crowdfunding_sol_Crowdfunding_json__WEBPACK_IMPORTED_MODULE_4__.abi;\nfunction RecentOrders() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), cryptoOrders1 = ref[0], setCryptoOrders = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), provider1 = ref1[0], setProvider = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), account1 = ref2[0], setAccount = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), balance = ref3[0], setBalance = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), crowdfunding1 = ref4[0], setCrowdfunding = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), campaigns1 = ref5[0], setCampaigns = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), transactions1 = ref6[0], setTransations = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), deadline1 = ref7[0], setDeadline = ref7[1];\n    var ref8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), isClosed = ref8[0], setIsClosed = ref8[1];\n    var ref9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), status = ref9[0], setStatus = ref9[1];\n    // const cryptoOrders: CryptoOrder[] = []\n    // const temp: CryptoOrder[] = [\n    //   {\n    //     id: '10',\n    //     status: 'completed',\n    //     title: '',\n    //     description: '',\n    //     sourceName: '',\n    //     sourceDesc: '',\n    //     amountCrypto: 0\n    //   }\n    // ];\n    var loadBlockchainData = function() {\n        var _ref = _asyncToGenerator(C_Users_91905_Desktop_crowdfunding_crowdfunding_web_final_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var accounts, account, provider, ethbalance, network, crowdfunding, campaigns, i, campaign, cryptoOrders, transactions, i, transaction, deadline, cryptoOrder;\n            return C_Users_91905_Desktop_crowdfunding_crowdfunding_web_final_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return window.ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 2:\n                        accounts = _ctx.sent;\n                        account = ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.getAddress(accounts[0]);\n                        setAccount(account);\n                        console.log(account);\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(window.ethereum);\n                        setProvider(provider);\n                        _ctx.next = 10;\n                        return provider.getBalance(account);\n                    case 10:\n                        ethbalance = _ctx.sent;\n                        setBalance(ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.formatEther(ethbalance).toString());\n                        _ctx.next = 14;\n                        return provider.getNetwork();\n                    case 14:\n                        network = _ctx.sent;\n                        crowdfunding = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(smartContractAddress, contractAbi, provider);\n                        setCrowdfunding(crowdfunding);\n                        campaigns = [];\n                        i = 0;\n                    case 19:\n                        if (!(i < 6)) {\n                            _ctx.next = 27;\n                            break;\n                        }\n                        _ctx.next = 22;\n                        return crowdfunding.campaigns(i + 1);\n                    case 22:\n                        campaign = _ctx.sent;\n                        campaigns.push(campaign);\n                    case 24:\n                        i++;\n                        _ctx.next = 19;\n                        break;\n                    case 27:\n                        setCampaigns(campaigns);\n                        cryptoOrders = [];\n                        transactions = [];\n                        i = 0;\n                    case 31:\n                        if (!(i < 6)) {\n                            _ctx.next = 51;\n                            break;\n                        }\n                        _ctx.next = 34;\n                        return crowdfunding.contributorContributions(account, i + 1);\n                    case 34:\n                        transaction = _ctx.sent;\n                        deadline = parseInt(campaigns[i].campaignDeadline.toString());\n                        setDeadline(deadline);\n                        console.log(deadline < Date.now());\n                        // deadline < Date.now() ? setIsClosed(true) : setIsClosed(false);\n                        if (deadline < Date.now()) {\n                            setIsClosed(\"true\");\n                        } else {\n                            setIsClosed(\"false\");\n                        }\n                        console.log(isClosed);\n                        _ctx.next = 42;\n                        return helperFunc();\n                    case 42:\n                        isClosed && campaigns[i].pledgedAmt < campaigns[i].goal ? setStatus(\"failed\") : setStatus(\"completed\");\n                        isClosed == false ? setStatus(\"pending\") : campaigns[i].pledgedAmt < campaigns[i].goal ? setStatus(\"failed\") : setStatus(\"completed\");\n                        console.log(status);\n                        cryptoOrder = {\n                            id: i.toString(),\n                            status: status,\n                            title: campaigns[i].title,\n                            description: campaigns[i].description,\n                            sourceName: account,\n                            sourceDesc: balance,\n                            amountCrypto: ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.formatUnits(transaction.toString(), \"ether\")\n                        };\n                        console.log(cryptoOrder);\n                        cryptoOrders.push(cryptoOrder);\n                    case 48:\n                        i++;\n                        _ctx.next = 31;\n                        break;\n                    case 51:\n                        setTransations(transactions);\n                        setCryptoOrders(cryptoOrders);\n                    case 53:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function loadBlockchainData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        loadBlockchainData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Card, {\n        children: cryptoOrders1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_RecentOrdersTable__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            cryptoOrders: cryptoOrders1,\n            account: account1,\n            balance: balance\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\91905\\\\Desktop\\\\crowdfunding\\\\crowdfunding\\\\web-final\\\\src\\\\content\\\\Management\\\\Transactions\\\\RecentOrders.tsx\",\n            lineNumber: 122,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\91905\\\\Desktop\\\\crowdfunding\\\\crowdfunding\\\\web-final\\\\src\\\\content\\\\Management\\\\Transactions\\\\RecentOrders.tsx\",\n        lineNumber: 120,\n        columnNumber: 5\n    }, this);\n}\n_s(RecentOrders, \"PNaIsgHqQ9iSyiC0HtuAOuXg+O0=\");\n_c = RecentOrders;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecentOrders);\nvar _c;\n$RefreshReg$(_c, \"RecentOrders\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGVudC9NYW5hZ2VtZW50L1RyYW5zYWN0aW9ucy9SZWNlbnRPcmRlcnMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFFZTtBQUVEO0FBQzJDO0FBQzlEOztBQUVoQyxJQUFNTyxvQkFBb0IsR0FBRyw0Q0FBNEM7QUFDekUsSUFBTUMsV0FBVyxHQUFHSCx3RkFBZ0I7QUFFcEMsU0FBU0ssWUFBWSxHQUFHOztJQUN0QixJQUF3Q04sR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQVp4RCxhQVlxQixHQUFxQkEsR0FBYyxHQUFuQyxFQVpyQixlQVlzQyxHQUFJQSxHQUFjLEdBQWxCO0lBQ3BDLElBQWdDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBYmhELFNBYWlCLEdBQWlCQSxJQUFjLEdBQS9CLEVBYmpCLFdBYThCLEdBQUlBLElBQWMsR0FBbEI7SUFDNUIsSUFBOEJBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFkOUMsUUFjZ0IsR0FBZ0JBLElBQWMsR0FBOUIsRUFkaEIsVUFjNEIsR0FBSUEsSUFBYyxHQUFsQjtJQUMxQixJQUE4QkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQWY5QyxPQWVnQixHQUFnQkEsSUFBYyxHQUE5QixFQWZoQixVQWU0QixHQUFJQSxJQUFjLEdBQWxCO0lBQzFCLElBQXdDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBaEJ4RCxhQWdCcUIsR0FBcUJBLElBQWMsR0FBbkMsRUFoQnJCLGVBZ0JzQyxHQUFJQSxJQUFjLEdBQWxCO0lBQ3BDLElBQWtDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBakJsRCxVQWlCa0IsR0FBa0JBLElBQWMsR0FBaEMsRUFqQmxCLFlBaUJnQyxHQUFJQSxJQUFjLEdBQWxCO0lBQzlCLElBQXVDQSxJQUFj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QixRQUFRLEVBQUU7NEJBQ2hCdEIsTUFBTSxFQUFFQSxNQUFNOzRCQUNkbUMsS0FBSyxFQUFFM0MsU0FBUyxDQUFDYyxDQUFDLENBQUMsQ0FBQzZCLEtBQUs7NEJBQ3pCQyxXQUFXLEVBQUU1QyxTQUFTLENBQUNjLENBQUMsQ0FBQyxDQUFDOEIsV0FBVzs0QkFDckNDLFVBQVUsRUFBRW5ELE9BQU87NEJBQ25Cb0QsVUFBVSxFQUFFbEQsT0FBTzs0QkFDbkJtRCxZQUFZLEVBQUU5RCw0REFBd0IsQ0FBQytCLFdBQVcsQ0FBQ2MsUUFBUSxFQUFFLEVBQUUsT0FBTyxDQUFDO3lCQUN4RSxDQUFDO3dCQUNGTixPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsV0FBVyxDQUFDLENBQUM7d0JBQ3pCM0IsWUFBWSxDQUFDMkMsSUFBSSxDQUFDaEIsV0FBVyxDQUFDLENBQUM7O3dCQXZDVkgsQ0FBQyxFQUFFOzs7O3dCQTBDMUJYLGNBQWMsQ0FBQ0QsWUFBWSxDQUFDLENBQUM7d0JBQzdCWCxlQUFlLENBQUNELFlBQVksQ0FBQyxDQUFDOzs7Ozs7U0FDL0I7d0JBNUVLb0Isa0JBQWtCOzs7T0E0RXZCO0lBRUQ1QixnREFBUyxDQUFDLFdBQU07UUFDZDRCLGtCQUFrQixFQUFFLENBQUM7S0FDdEIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFLDhEQUFDL0IsK0NBQUk7a0JBQ0ZXLGFBQVksa0JBQ1gsOERBQUNWLDBEQUFpQjtZQUNoQlUsWUFBWSxFQUFFQSxhQUFZO1lBQzFCSSxPQUFPLEVBQUVBLFFBQU87WUFDaEJFLE9BQU8sRUFBRUEsT0FBTzs7Ozs7Z0JBQ2hCOzs7OztZQUVDLENBQ1A7Q0FDSDtHQXRIUVAsWUFBWTtBQUFaQSxLQUFBQSxZQUFZO0FBd0hyQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZW50L01hbmFnZW1lbnQvVHJhbnNhY3Rpb25zL1JlY2VudE9yZGVycy50c3g/NDk3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IENyeXB0b09yZGVyIH0gZnJvbSBcIkAvbW9kZWxzL2NyeXB0b19vcmRlclwiO1xuaW1wb3J0IFJlY2VudE9yZGVyc1RhYmxlIGZyb20gXCIuL1JlY2VudE9yZGVyc1RhYmxlXCI7XG5pbXBvcnQgeyBzdWJEYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENyb3dkZnVuZGluZyBmcm9tIFwiLi4vLi4vLi4vLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9Dcm93ZGZ1bmRpbmcuc29sL0Nyb3dkZnVuZGluZy5qc29uXCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5cbmNvbnN0IHNtYXJ0Q29udHJhY3RBZGRyZXNzID0gXCIweDVGYkRCMjMxNTY3OGFmZWNiMzY3ZjAzMmQ5M0Y2NDJmNjQxODBhYTNcIjtcbmNvbnN0IGNvbnRyYWN0QWJpID0gQ3Jvd2RmdW5kaW5nLmFiaTtcblxuZnVuY3Rpb24gUmVjZW50T3JkZXJzKCkge1xuICBjb25zdCBbY3J5cHRvT3JkZXJzLCBzZXRDcnlwdG9PcmRlcnNdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtwcm92aWRlciwgc2V0UHJvdmlkZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2Nyb3dkZnVuZGluZywgc2V0Q3Jvd2RmdW5kaW5nXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY2FtcGFpZ25zLCBzZXRDYW1wYWlnbnNdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt0cmFuc2FjdGlvbnMsIHNldFRyYW5zYXRpb25zXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZGVhZGxpbmUsIHNldERlYWRsaW5lXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNDbG9zZWQsIHNldElzQ2xvc2VkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUobnVsbCk7XG4gIC8vIGNvbnN0IGNyeXB0b09yZGVyczogQ3J5cHRvT3JkZXJbXSA9IFtdXG5cbiAgLy8gY29uc3QgdGVtcDogQ3J5cHRvT3JkZXJbXSA9IFtcbiAgLy8gICB7XG4gIC8vICAgICBpZDogJzEwJyxcbiAgLy8gICAgIHN0YXR1czogJ2NvbXBsZXRlZCcsXG4gIC8vICAgICB0aXRsZTogJycsXG4gIC8vICAgICBkZXNjcmlwdGlvbjogJycsXG4gIC8vICAgICBzb3VyY2VOYW1lOiAnJyxcbiAgLy8gICAgIHNvdXJjZURlc2M6ICcnLFxuICAvLyAgICAgYW1vdW50Q3J5cHRvOiAwXG4gIC8vICAgfVxuICAvLyBdO1xuXG4gIGNvbnN0IGxvYWRCbG9ja2NoYWluRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gICAgfSk7XG4gICAgY29uc3QgYWNjb3VudCA9IGV0aGVycy51dGlscy5nZXRBZGRyZXNzKGFjY291bnRzWzBdKTtcbiAgICBzZXRBY2NvdW50KGFjY291bnQpO1xuICAgIGNvbnNvbGUubG9nKGFjY291bnQpO1xuXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICBzZXRQcm92aWRlcihwcm92aWRlcik7XG5cbiAgICBjb25zdCBldGhiYWxhbmNlID0gYXdhaXQgcHJvdmlkZXIuZ2V0QmFsYW5jZShhY2NvdW50KTtcbiAgICBzZXRCYWxhbmNlKGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihldGhiYWxhbmNlKS50b1N0cmluZygpKTtcblxuICAgIGNvbnN0IG5ldHdvcmsgPSBhd2FpdCBwcm92aWRlci5nZXROZXR3b3JrKCk7XG5cbiAgICBjb25zdCBjcm93ZGZ1bmRpbmcgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuICAgICAgc21hcnRDb250cmFjdEFkZHJlc3MsXG4gICAgICBjb250cmFjdEFiaSxcbiAgICAgIHByb3ZpZGVyXG4gICAgKTtcbiAgICBzZXRDcm93ZGZ1bmRpbmcoY3Jvd2RmdW5kaW5nKTtcblxuICAgIGNvbnN0IGNhbXBhaWducyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICBjb25zdCBjYW1wYWlnbiA9IGF3YWl0IGNyb3dkZnVuZGluZy5jYW1wYWlnbnMoaSArIDEpO1xuICAgICAgY2FtcGFpZ25zLnB1c2goY2FtcGFpZ24pO1xuICAgIH1cbiAgICBzZXRDYW1wYWlnbnMoY2FtcGFpZ25zKTtcblxuICAgIGNvbnN0IGNyeXB0b09yZGVycyA9IFtdO1xuICAgIGNvbnN0IHRyYW5zYWN0aW9ucyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNyb3dkZnVuZGluZy5jb250cmlidXRvckNvbnRyaWJ1dGlvbnMoXG4gICAgICAgIGFjY291bnQsXG4gICAgICAgIGkrMVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRlYWRsaW5lID0gcGFyc2VJbnQoY2FtcGFpZ25zW2ldLmNhbXBhaWduRGVhZGxpbmUudG9TdHJpbmcoKSk7XG4gICAgICBzZXREZWFkbGluZShkZWFkbGluZSk7XG4gICAgICBjb25zb2xlLmxvZyhkZWFkbGluZSA8IERhdGUubm93KCkpXG4gICAgICAvLyBkZWFkbGluZSA8IERhdGUubm93KCkgPyBzZXRJc0Nsb3NlZCh0cnVlKSA6IHNldElzQ2xvc2VkKGZhbHNlKTtcbiAgICAgIGlmKGRlYWRsaW5lIDwgRGF0ZS5ub3coKSkge1xuICAgICAgICBzZXRJc0Nsb3NlZChcInRydWVcIilcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzZXRJc0Nsb3NlZChcImZhbHNlXCIpXG4gICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGlzQ2xvc2VkKVxuXG5cbiAgICAgIGF3YWl0IGhlbHBlckZ1bmMoKVxuICAgICAgaXNDbG9zZWQgJiYgY2FtcGFpZ25zW2ldLnBsZWRnZWRBbXQgPCBjYW1wYWlnbnNbaV0uZ29hbFxuICAgICAgICA/IHNldFN0YXR1cyhcImZhaWxlZFwiKVxuICAgICAgICA6IHNldFN0YXR1cyhcImNvbXBsZXRlZFwiKTtcbiAgICAgIGlzQ2xvc2VkID09IGZhbHNlXG4gICAgICAgID8gc2V0U3RhdHVzKFwicGVuZGluZ1wiKVxuICAgICAgICA6IGNhbXBhaWduc1tpXS5wbGVkZ2VkQW10IDwgY2FtcGFpZ25zW2ldLmdvYWxcbiAgICAgICAgPyBzZXRTdGF0dXMoXCJmYWlsZWRcIilcbiAgICAgICAgOiBzZXRTdGF0dXMoXCJjb21wbGV0ZWRcIik7XG5cbiAgICAgIGNvbnNvbGUubG9nKHN0YXR1cyk7XG4gICAgICBjb25zdCBjcnlwdG9PcmRlciA9IHtcbiAgICAgICAgaWQ6IGkudG9TdHJpbmcoKSxcbiAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgIHRpdGxlOiBjYW1wYWlnbnNbaV0udGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBjYW1wYWlnbnNbaV0uZGVzY3JpcHRpb24sXG4gICAgICAgIHNvdXJjZU5hbWU6IGFjY291bnQsXG4gICAgICAgIHNvdXJjZURlc2M6IGJhbGFuY2UsXG4gICAgICAgIGFtb3VudENyeXB0bzogZXRoZXJzLnV0aWxzLmZvcm1hdFVuaXRzKHRyYW5zYWN0aW9uLnRvU3RyaW5nKCksIFwiZXRoZXJcIiksXG4gICAgICB9O1xuICAgICAgY29uc29sZS5sb2coY3J5cHRvT3JkZXIpO1xuICAgICAgY3J5cHRvT3JkZXJzLnB1c2goY3J5cHRvT3JkZXIpO1xuICAgIH1cblxuICAgIHNldFRyYW5zYXRpb25zKHRyYW5zYWN0aW9ucyk7XG4gICAgc2V0Q3J5cHRvT3JkZXJzKGNyeXB0b09yZGVycyk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkQmxvY2tjaGFpbkRhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQ+XG4gICAgICB7Y3J5cHRvT3JkZXJzICYmIChcbiAgICAgICAgPFJlY2VudE9yZGVyc1RhYmxlXG4gICAgICAgICAgY3J5cHRvT3JkZXJzPXtjcnlwdG9PcmRlcnN9XG4gICAgICAgICAgYWNjb3VudD17YWNjb3VudH1cbiAgICAgICAgICBiYWxhbmNlPXtiYWxhbmNlfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L0NhcmQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2VudE9yZGVycztcbiJdLCJuYW1lcyI6WyJDYXJkIiwiUmVjZW50T3JkZXJzVGFibGUiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ3Jvd2RmdW5kaW5nIiwiZXRoZXJzIiwic21hcnRDb250cmFjdEFkZHJlc3MiLCJjb250cmFjdEFiaSIsImFiaSIsIlJlY2VudE9yZGVycyIsImNyeXB0b09yZGVycyIsInNldENyeXB0b09yZGVycyIsInByb3ZpZGVyIiwic2V0UHJvdmlkZXIiLCJhY2NvdW50Iiwic2V0QWNjb3VudCIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiY3Jvd2RmdW5kaW5nIiwic2V0Q3Jvd2RmdW5kaW5nIiwiY2FtcGFpZ25zIiwic2V0Q2FtcGFpZ25zIiwidHJhbnNhY3Rpb25zIiwic2V0VHJhbnNhdGlvbnMiLCJkZWFkbGluZSIsInNldERlYWRsaW5lIiwiaXNDbG9zZWQiLCJzZXRJc0Nsb3NlZCIsInN0YXR1cyIsInNldFN0YXR1cyIsImxvYWRCbG9ja2NoYWluRGF0YSIsImFjY291bnRzIiwiZXRoYmFsYW5jZSIsIm5ldHdvcmsiLCJpIiwiY2FtcGFpZ24iLCJ0cmFuc2FjdGlvbiIsImNyeXB0b09yZGVyIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwidXRpbHMiLCJnZXRBZGRyZXNzIiwiY29uc29sZSIsImxvZyIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsImdldEJhbGFuY2UiLCJmb3JtYXRFdGhlciIsInRvU3RyaW5nIiwiZ2V0TmV0d29yayIsIkNvbnRyYWN0IiwicHVzaCIsImNvbnRyaWJ1dG9yQ29udHJpYnV0aW9ucyIsInBhcnNlSW50IiwiY2FtcGFpZ25EZWFkbGluZSIsIkRhdGUiLCJub3ciLCJoZWxwZXJGdW5jIiwicGxlZGdlZEFtdCIsImdvYWwiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzb3VyY2VOYW1lIiwic291cmNlRGVzYyIsImFtb3VudENyeXB0byIsImZvcm1hdFVuaXRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/content/Management/Transactions/RecentOrders.tsx\n");

/***/ })

});