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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_91905_Desktop_crowdfunding_crowdfunding_web_final_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_91905_Desktop_crowdfunding_crowdfunding_web_final_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_91905_Desktop_crowdfunding_crowdfunding_web_final_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _RecentOrdersTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecentOrdersTable */ \"./src/content/Management/Transactions/RecentOrdersTable.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _artifacts_contracts_Crowdfunding_sol_Crowdfunding_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../artifacts/contracts/Crowdfunding.sol/Crowdfunding.json */ \"./artifacts/contracts/Crowdfunding.sol/Crowdfunding.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar smartContractAddress = \"0x5FbDB2315678afecb367f032d93F642f64180aa3\";\nvar contractAbi = _artifacts_contracts_Crowdfunding_sol_Crowdfunding_json__WEBPACK_IMPORTED_MODULE_4__.abi;\nfunction RecentOrders() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), cryptoOrders1 = ref[0], setCryptoOrders = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), provider1 = ref1[0], setProvider = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), account1 = ref2[0], setAccount = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), balance = ref3[0], setBalance = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), crowdfunding1 = ref4[0], setCrowdfunding = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), campaigns1 = ref5[0], setCampaigns = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), transactions1 = ref6[0], setTransations = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), deadline1 = ref7[0], setDeadline = ref7[1];\n    var ref8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), isClosed1 = ref8[0], setIsClosed = ref8[1];\n    var ref9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), status = ref9[0], setStatus = ref9[1];\n    // const cryptoOrders: CryptoOrder[] = []\n    // const temp: CryptoOrder[] = [\n    //   {\n    //     id: '10',\n    //     status: 'completed',\n    //     title: '',\n    //     description: '',\n    //     sourceName: '',\n    //     sourceDesc: '',\n    //     amountCrypto: 0\n    //   }\n    // ];\n    var helperFunc = function() {\n        var _ref = _asyncToGenerator(C_Users_91905_Desktop_crowdfunding_crowdfunding_web_final_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(isClosed, campaign) {\n            return C_Users_91905_Desktop_crowdfunding_crowdfunding_web_final_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        // isClosed && campaign.pledgedAmt < campaign.goal\n                        //   ? setStatus(\"failed\")\n                        //   : setStatus(\"completed\");\n                        // !isClosed\n                        //   ? setStatus(\"pending\")\n                        //   : campaign.pledgedAmt < campaign.goal\n                        //   ? setStatus(\"failed\")\n                        //   : setStatus(\"completed\");\n                        if (!isClosed) {\n                            setStatus(\"pending\");\n                        } else {\n                            if (campaign.pledgedAmt < campaign.goal) setStatus(\"failed\");\n                            else setStatus(\"completed\");\n                        }\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function helperFunc(isClosed, campaign) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var loadBlockchainData = function() {\n            var _ref = _asyncToGenerator(C_Users_91905_Desktop_crowdfunding_crowdfunding_web_final_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var accounts, account, provider, ethbalance, network, crowdfunding, campaigns, i, campaign, cryptoOrders, transactions, i, transaction, deadline, cryptoOrder;\n                return C_Users_91905_Desktop_crowdfunding_crowdfunding_web_final_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return window.ethereum.request({\n                                method: \"eth_requestAccounts\"\n                            });\n                        case 2:\n                            accounts = _ctx.sent;\n                            account = ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.getAddress(accounts[0]);\n                            setAccount(account);\n                            console.log(account);\n                            provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(window.ethereum);\n                            setProvider(provider);\n                            _ctx.next = 10;\n                            return provider.getBalance(account);\n                        case 10:\n                            ethbalance = _ctx.sent;\n                            setBalance(ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.formatEther(ethbalance).toString());\n                            _ctx.next = 14;\n                            return provider.getNetwork();\n                        case 14:\n                            network = _ctx.sent;\n                            crowdfunding = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(smartContractAddress, contractAbi, provider);\n                            setCrowdfunding(crowdfunding);\n                            campaigns = [];\n                            i = 0;\n                        case 19:\n                            if (!(i < 6)) {\n                                _ctx.next = 27;\n                                break;\n                            }\n                            _ctx.next = 22;\n                            return crowdfunding.campaigns(i + 1);\n                        case 22:\n                            campaign = _ctx.sent;\n                            campaigns.push(campaign);\n                        case 24:\n                            i++;\n                            _ctx.next = 19;\n                            break;\n                        case 27:\n                            setCampaigns(campaigns);\n                            cryptoOrders = [];\n                            transactions = [];\n                            i = 0;\n                        case 31:\n                            if (!(i < 6)) {\n                                _ctx.next = 49;\n                                break;\n                            }\n                            _ctx.next = 34;\n                            return crowdfunding.contributorContributions(account, i + 1);\n                        case 34:\n                            transaction = _ctx.sent;\n                            deadline = parseInt(campaigns[i].campaignDeadline.toString());\n                            setDeadline(deadline);\n                            console.log(deadline < Date.now());\n                            // deadline < Date.now() ? setIsClosed(true) : setIsClosed(false);\n                            if (deadline < Date.now()) {\n                                setIsClosed(\"true\");\n                            } else {\n                                setIsClosed(\"false\");\n                            }\n                            console.log(isClosed1);\n                            _ctx.next = 42;\n                            return helperFunc(isClosed1, campaigns[i]);\n                        case 42:\n                            console.log(status);\n                            cryptoOrder = {\n                                id: i.toString(),\n                                status: status,\n                                title: campaigns[i].title,\n                                description: campaigns[i].description,\n                                sourceName: account,\n                                sourceDesc: balance,\n                                amountCrypto: ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.formatUnits(transaction.toString(), \"ether\")\n                            };\n                            console.log(cryptoOrder);\n                            cryptoOrders.push(cryptoOrder);\n                        case 46:\n                            i++;\n                            _ctx.next = 31;\n                            break;\n                        case 49:\n                            setTransations(transactions);\n                            setCryptoOrders(cryptoOrders);\n                        case 51:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function loadBlockchainData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        loadBlockchainData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Card, {\n        children: cryptoOrders1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_RecentOrdersTable__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            cryptoOrders: cryptoOrders1,\n            account: account1,\n            balance: balance\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\91905\\\\Desktop\\\\crowdfunding\\\\crowdfunding\\\\web-final\\\\src\\\\content\\\\Management\\\\Transactions\\\\RecentOrders.tsx\",\n            lineNumber: 137,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\91905\\\\Desktop\\\\crowdfunding\\\\crowdfunding\\\\web-final\\\\src\\\\content\\\\Management\\\\Transactions\\\\RecentOrders.tsx\",\n        lineNumber: 135,\n        columnNumber: 5\n    }, this);\n}\n_s(RecentOrders, \"PNaIsgHqQ9iSyiC0HtuAOuXg+O0=\");\n_c = RecentOrders;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecentOrders);\nvar _c;\n$RefreshReg$(_c, \"RecentOrders\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGVudC9NYW5hZ2VtZW50L1RyYW5zYWN0aW9ucy9SZWNlbnRPcmRlcnMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFFZTtBQUVEO0FBQzJDO0FBQzlEOztBQUVoQyxJQUFNTyxvQkFBb0IsR0FBRyw0Q0FBNEM7QUFDekUsSUFBTUMsV0FBVyxHQUFHSCx3RkFBZ0I7QUFFcEMsU0FBU0ssWUFBWSxHQUFHOztJQUN0QixJQUF3Q04sR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQVp4RCxhQVlxQixHQUFxQkEsR0FBYyxHQUFuQyxFQVpyQixlQVlzQyxHQUFJQSxHQUFjLEdBQWxCO0lBQ3BDLElBQWdDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBYmhELFNBYWlCLEdBQWlCQSxJQUFjLEdBQS9CLEVBYmpCLFdBYThCLEdBQUlBLElBQWMsR0FBbEI7SUFDNUIsSUFBOEJBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFkOUMsUUFjZ0IsR0FBZ0JBLElBQWMsR0FBOUIsRUFkaEIsVUFjNEIsR0FBSUEsSUFBYyxHQUFsQjtJQUMxQixJQUE4QkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQWY5QyxPQWVnQixHQUFnQkEsSUFBYyxHQUE5QixFQWZoQixVQWU0QixHQUFJQSxJQUFjLEdBQWxCO0lBQzFCLElBQXdDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBaEJ4RCxhQWdCcUIsR0FBcUJBLElBQWMsR0FBbkMsRUFoQnJCLGVBZ0JzQyxHQUFJQSxJQUFjLEdBQWxCO0lBQ3BDLElBQWtDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBakJsRCxVQWlCa0IsR0FBa0JBLElBQWMsR0FBaEMsRUFqQmxCLFlBaUJnQyxHQUFJQSxJQUFjLEdBQWxCO0lBQzlCLElBQXVDQSxJQUFj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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZW50L01hbmFnZW1lbnQvVHJhbnNhY3Rpb25zL1JlY2VudE9yZGVycy50c3g/NDk3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IENyeXB0b09yZGVyIH0gZnJvbSBcIkAvbW9kZWxzL2NyeXB0b19vcmRlclwiO1xuaW1wb3J0IFJlY2VudE9yZGVyc1RhYmxlIGZyb20gXCIuL1JlY2VudE9yZGVyc1RhYmxlXCI7XG5pbXBvcnQgeyBzdWJEYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENyb3dkZnVuZGluZyBmcm9tIFwiLi4vLi4vLi4vLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9Dcm93ZGZ1bmRpbmcuc29sL0Nyb3dkZnVuZGluZy5qc29uXCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5cbmNvbnN0IHNtYXJ0Q29udHJhY3RBZGRyZXNzID0gXCIweDVGYkRCMjMxNTY3OGFmZWNiMzY3ZjAzMmQ5M0Y2NDJmNjQxODBhYTNcIjtcbmNvbnN0IGNvbnRyYWN0QWJpID0gQ3Jvd2RmdW5kaW5nLmFiaTtcblxuZnVuY3Rpb24gUmVjZW50T3JkZXJzKCkge1xuICBjb25zdCBbY3J5cHRvT3JkZXJzLCBzZXRDcnlwdG9PcmRlcnNdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtwcm92aWRlciwgc2V0UHJvdmlkZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2Nyb3dkZnVuZGluZywgc2V0Q3Jvd2RmdW5kaW5nXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY2FtcGFpZ25zLCBzZXRDYW1wYWlnbnNdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt0cmFuc2FjdGlvbnMsIHNldFRyYW5zYXRpb25zXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZGVhZGxpbmUsIHNldERlYWRsaW5lXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNDbG9zZWQsIHNldElzQ2xvc2VkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUobnVsbCk7XG4gIC8vIGNvbnN0IGNyeXB0b09yZGVyczogQ3J5cHRvT3JkZXJbXSA9IFtdXG5cbiAgLy8gY29uc3QgdGVtcDogQ3J5cHRvT3JkZXJbXSA9IFtcbiAgLy8gICB7XG4gIC8vICAgICBpZDogJzEwJyxcbiAgLy8gICAgIHN0YXR1czogJ2NvbXBsZXRlZCcsXG4gIC8vICAgICB0aXRsZTogJycsXG4gIC8vICAgICBkZXNjcmlwdGlvbjogJycsXG4gIC8vICAgICBzb3VyY2VOYW1lOiAnJyxcbiAgLy8gICAgIHNvdXJjZURlc2M6ICcnLFxuICAvLyAgICAgYW1vdW50Q3J5cHRvOiAwXG4gIC8vICAgfVxuICAvLyBdO1xuXG4gIGNvbnN0IGhlbHBlckZ1bmMgPSBhc3luYyAoaXNDbG9zZWQsIGNhbXBhaWduKSA9PiB7XG4gICAgLy8gaXNDbG9zZWQgJiYgY2FtcGFpZ24ucGxlZGdlZEFtdCA8IGNhbXBhaWduLmdvYWxcbiAgICAvLyAgID8gc2V0U3RhdHVzKFwiZmFpbGVkXCIpXG4gICAgLy8gICA6IHNldFN0YXR1cyhcImNvbXBsZXRlZFwiKTtcblxuICAgIC8vICFpc0Nsb3NlZFxuICAgIC8vICAgPyBzZXRTdGF0dXMoXCJwZW5kaW5nXCIpXG4gICAgLy8gICA6IGNhbXBhaWduLnBsZWRnZWRBbXQgPCBjYW1wYWlnbi5nb2FsXG4gICAgLy8gICA/IHNldFN0YXR1cyhcImZhaWxlZFwiKVxuICAgIC8vICAgOiBzZXRTdGF0dXMoXCJjb21wbGV0ZWRcIik7XG5cbiAgICBpZighaXNDbG9zZWQpe1xuICAgICAgc2V0U3RhdHVzKFwicGVuZGluZ1wiKVxuICAgIH0gIFxuICAgIGVsc2VcbiAgICB7XG4gICAgICBpZihjYW1wYWlnbi5wbGVkZ2VkQW10IDwgY2FtcGFpZ24uZ29hbClcbiAgICAgIHNldFN0YXR1cyhcImZhaWxlZFwiKVxuICAgICAgZWxzZVxuICAgICAgc2V0U3RhdHVzKFwiY29tcGxldGVkXCIpXG4gICAgfVxuICB9O1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBcbiAgY29uc3QgbG9hZEJsb2NrY2hhaW5EYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIixcbiAgICB9KTtcbiAgICBjb25zdCBhY2NvdW50ID0gZXRoZXJzLnV0aWxzLmdldEFkZHJlc3MoYWNjb3VudHNbMF0pO1xuICAgIHNldEFjY291bnQoYWNjb3VudCk7XG4gICAgY29uc29sZS5sb2coYWNjb3VudCk7XG5cbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgIHNldFByb3ZpZGVyKHByb3ZpZGVyKTtcblxuICAgIGNvbnN0IGV0aGJhbGFuY2UgPSBhd2FpdCBwcm92aWRlci5nZXRCYWxhbmNlKGFjY291bnQpO1xuICAgIHNldEJhbGFuY2UoZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKGV0aGJhbGFuY2UpLnRvU3RyaW5nKCkpO1xuXG4gICAgY29uc3QgbmV0d29yayA9IGF3YWl0IHByb3ZpZGVyLmdldE5ldHdvcmsoKTtcblxuICAgIGNvbnN0IGNyb3dkZnVuZGluZyA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICBzbWFydENvbnRyYWN0QWRkcmVzcyxcbiAgICAgIGNvbnRyYWN0QWJpLFxuICAgICAgcHJvdmlkZXJcbiAgICApO1xuICAgIHNldENyb3dkZnVuZGluZyhjcm93ZGZ1bmRpbmcpO1xuXG4gICAgY29uc3QgY2FtcGFpZ25zID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgIGNvbnN0IGNhbXBhaWduID0gYXdhaXQgY3Jvd2RmdW5kaW5nLmNhbXBhaWducyhpICsgMSk7XG4gICAgICBjYW1wYWlnbnMucHVzaChjYW1wYWlnbik7XG4gICAgfVxuICAgIHNldENhbXBhaWducyhjYW1wYWlnbnMpO1xuXG4gICAgY29uc3QgY3J5cHRvT3JkZXJzID0gW107XG4gICAgY29uc3QgdHJhbnNhY3Rpb25zID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgY3Jvd2RmdW5kaW5nLmNvbnRyaWJ1dG9yQ29udHJpYnV0aW9ucyhcbiAgICAgICAgYWNjb3VudCxcbiAgICAgICAgaSArIDFcbiAgICAgICk7XG4gICAgICBcbiAgICAgIGNvbnN0IGRlYWRsaW5lID0gcGFyc2VJbnQoY2FtcGFpZ25zW2ldLmNhbXBhaWduRGVhZGxpbmUudG9TdHJpbmcoKSk7XG4gICAgICBzZXREZWFkbGluZShkZWFkbGluZSk7XG4gICAgICBjb25zb2xlLmxvZyhkZWFkbGluZSA8IERhdGUubm93KCkpO1xuICAgICAgLy8gZGVhZGxpbmUgPCBEYXRlLm5vdygpID8gc2V0SXNDbG9zZWQodHJ1ZSkgOiBzZXRJc0Nsb3NlZChmYWxzZSk7XG4gICAgICBpZiAoZGVhZGxpbmUgPCBEYXRlLm5vdygpKSB7XG4gICAgICAgIHNldElzQ2xvc2VkKFwidHJ1ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldElzQ2xvc2VkKFwiZmFsc2VcIik7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhpc0Nsb3NlZCk7XG5cbiAgICAgIGF3YWl0IGhlbHBlckZ1bmMoaXNDbG9zZWQsIGNhbXBhaWduc1tpXSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKHN0YXR1cyk7XG4gICAgICBjb25zdCBjcnlwdG9PcmRlciA9IHtcbiAgICAgICAgaWQ6IGkudG9TdHJpbmcoKSxcbiAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgIHRpdGxlOiBjYW1wYWlnbnNbaV0udGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBjYW1wYWlnbnNbaV0uZGVzY3JpcHRpb24sXG4gICAgICAgIHNvdXJjZU5hbWU6IGFjY291bnQsXG4gICAgICAgIHNvdXJjZURlc2M6IGJhbGFuY2UsXG4gICAgICAgIGFtb3VudENyeXB0bzogZXRoZXJzLnV0aWxzLmZvcm1hdFVuaXRzKHRyYW5zYWN0aW9uLnRvU3RyaW5nKCksIFwiZXRoZXJcIiksXG4gICAgICB9O1xuICAgICAgY29uc29sZS5sb2coY3J5cHRvT3JkZXIpO1xuICAgICAgY3J5cHRvT3JkZXJzLnB1c2goY3J5cHRvT3JkZXIpO1xuICAgIH1cblxuICAgIHNldFRyYW5zYXRpb25zKHRyYW5zYWN0aW9ucyk7XG4gICAgc2V0Q3J5cHRvT3JkZXJzKGNyeXB0b09yZGVycyk7XG4gIH07XG4gICAgbG9hZEJsb2NrY2hhaW5EYXRhKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkPlxuICAgICAge2NyeXB0b09yZGVycyAmJiAoXG4gICAgICAgIDxSZWNlbnRPcmRlcnNUYWJsZVxuICAgICAgICAgIGNyeXB0b09yZGVycz17Y3J5cHRvT3JkZXJzfVxuICAgICAgICAgIGFjY291bnQ9e2FjY291bnR9XG4gICAgICAgICAgYmFsYW5jZT17YmFsYW5jZX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9DYXJkPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNlbnRPcmRlcnM7XG4iXSwibmFtZXMiOlsiQ2FyZCIsIlJlY2VudE9yZGVyc1RhYmxlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNyb3dkZnVuZGluZyIsImV0aGVycyIsInNtYXJ0Q29udHJhY3RBZGRyZXNzIiwiY29udHJhY3RBYmkiLCJhYmkiLCJSZWNlbnRPcmRlcnMiLCJjcnlwdG9PcmRlcnMiLCJzZXRDcnlwdG9PcmRlcnMiLCJwcm92aWRlciIsInNldFByb3ZpZGVyIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImNyb3dkZnVuZGluZyIsInNldENyb3dkZnVuZGluZyIsImNhbXBhaWducyIsInNldENhbXBhaWducyIsInRyYW5zYWN0aW9ucyIsInNldFRyYW5zYXRpb25zIiwiZGVhZGxpbmUiLCJzZXREZWFkbGluZSIsImlzQ2xvc2VkIiwic2V0SXNDbG9zZWQiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJoZWxwZXJGdW5jIiwiY2FtcGFpZ24iLCJwbGVkZ2VkQW10IiwiZ29hbCIsImxvYWRCbG9ja2NoYWluRGF0YSIsImFjY291bnRzIiwiZXRoYmFsYW5jZSIsIm5ldHdvcmsiLCJpIiwidHJhbnNhY3Rpb24iLCJjcnlwdG9PcmRlciIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsInV0aWxzIiwiZ2V0QWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJnZXRCYWxhbmNlIiwiZm9ybWF0RXRoZXIiLCJ0b1N0cmluZyIsImdldE5ldHdvcmsiLCJDb250cmFjdCIsInB1c2giLCJjb250cmlidXRvckNvbnRyaWJ1dGlvbnMiLCJwYXJzZUludCIsImNhbXBhaWduRGVhZGxpbmUiLCJEYXRlIiwibm93IiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic291cmNlTmFtZSIsInNvdXJjZURlc2MiLCJhbW91bnRDcnlwdG8iLCJmb3JtYXRVbml0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/content/Management/Transactions/RecentOrders.tsx\n");

/***/ })

});