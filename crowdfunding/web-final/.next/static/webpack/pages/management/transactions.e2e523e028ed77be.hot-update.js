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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_91905_Desktop_crowdfunding_crowdfunding_web_final_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_91905_Desktop_crowdfunding_crowdfunding_web_final_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_91905_Desktop_crowdfunding_crowdfunding_web_final_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _RecentOrdersTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecentOrdersTable */ \"./src/content/Management/Transactions/RecentOrdersTable.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _build_contracts_Crowdfunding_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../build/contracts/Crowdfunding.json */ \"./build/contracts/Crowdfunding.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n// import Crowdfunding from \"../../../../artifacts/contracts/Crowdfunding.sol/Crowdfunding.json\";\n\n\nvar _s = $RefreshSig$();\nvar smartContractAddress = _build_contracts_Crowdfunding_json__WEBPACK_IMPORTED_MODULE_4__.networks[5777].address;\nvar contractAbi = _build_contracts_Crowdfunding_json__WEBPACK_IMPORTED_MODULE_4__.abi;\nfunction RecentOrders() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), cryptoOrders1 = ref[0], setCryptoOrders = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), provider1 = ref1[0], setProvider = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), account1 = ref2[0], setAccount = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), balance = ref3[0], setBalance = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), manager = ref4[0], setManager = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), crowdfunding1 = ref5[0], setCrowdfunding = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), campaigns1 = ref6[0], setCampaigns = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), transactions1 = ref7[0], setTransations = ref7[1];\n    var ref8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), deadline1 = ref8[0], setDeadline = ref8[1];\n    var ref9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), isClosed1 = ref9[0], setIsClosed = ref9[1];\n    var ref10 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), status = ref10[0], setStatus = ref10[1];\n    // const cryptoOrders: CryptoOrder[] = []\n    // const temp: CryptoOrder[] = [\n    //   {\n    //     id: '10',\n    //     status: 'completed',\n    //     title: '',\n    //     description: '',\n    //     sourceName: '',\n    //     sourceDesc: '',\n    //     amountCrypto: 0\n    //   }\n    // ];\n    var helperFunc = function() {\n        var _ref = _asyncToGenerator(C_Users_91905_Desktop_crowdfunding_crowdfunding_web_final_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(isClosed, campaign) {\n            return C_Users_91905_Desktop_crowdfunding_crowdfunding_web_final_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        // isClosed && campaign.pledgedAmt < campaign.goal\n                        //   ? setStatus(\"failed\")\n                        //   : setStatus(\"completed\");\n                        // !isClosed\n                        //   ? setStatus(\"pending\")\n                        //   : campaign.pledgedAmt < campaign.goal\n                        //   ? setStatus(\"failed\")\n                        //   : setStatus(\"completed\");\n                        if (!isClosed) {\n                            setStatus(\"pending\");\n                        } else {\n                            if (campaign.pledgedAmt < campaign.goal) setStatus(\"failed\");\n                            else setStatus(\"completed\");\n                        }\n                        console.log(\"status\");\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function helperFunc(isClosed, campaign) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var loadBlockchainData = function() {\n        var _ref = _asyncToGenerator(C_Users_91905_Desktop_crowdfunding_crowdfunding_web_final_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var accounts, account, provider, ethbalance, crowdfunding, campaigns, noOfCampaigns, total, i, campaign, cryptoOrders, transactions, i, transaction, deadline, cryptoOrder;\n            return C_Users_91905_Desktop_crowdfunding_crowdfunding_web_final_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return window.ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 2:\n                        accounts = _ctx.sent;\n                        account = ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.getAddress(accounts[0]);\n                        setAccount(account);\n                        console.log(account);\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.providers.Web3Provider(window.ethereum);\n                        setProvider(provider);\n                        _ctx.next = 10;\n                        return provider.getBalance(account);\n                    case 10:\n                        ethbalance = _ctx.sent;\n                        setBalance(ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.formatEther(ethbalance).toString());\n                        crowdfunding = new ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.Contract(smartContractAddress, contractAbi, provider);\n                        setCrowdfunding(crowdfunding);\n                        _ctx.t0 = setManager;\n                        _ctx.next = 17;\n                        return crowdfunding.manager();\n                    case 17:\n                        _ctx.t1 = _ctx.sent;\n                        (0, _ctx.t0)(_ctx.t1);\n                        campaigns = [];\n                        _ctx.next = 22;\n                        return crowdfunding.noOfCampaigns();\n                    case 22:\n                        noOfCampaigns = _ctx.sent;\n                        total = parseInt(noOfCampaigns.toString());\n                        console.log(total);\n                        i = 0;\n                    case 26:\n                        if (!(i < total)) {\n                            _ctx.next = 34;\n                            break;\n                        }\n                        _ctx.next = 29;\n                        return crowdfunding.campaigns(i + 1);\n                    case 29:\n                        campaign = _ctx.sent;\n                        campaigns.push(campaign);\n                    case 31:\n                        i++;\n                        _ctx.next = 26;\n                        break;\n                    case 34:\n                        setCampaigns(campaigns);\n                        console.log(campaigns);\n                        cryptoOrders = [];\n                        transactions = [];\n                        i = 0;\n                    case 39:\n                        if (!(i < total)) {\n                            _ctx.next = 57;\n                            break;\n                        }\n                        _ctx.next = 42;\n                        return crowdfunding.contributorContributions(account, i + 1);\n                    case 42:\n                        transaction = _ctx.sent;\n                        deadline = parseInt(campaigns[i].campaignDeadline.toString());\n                        setDeadline(deadline);\n                        console.log(deadline < Date.now());\n                        // deadline < Date.now() ? setIsClosed(true) : setIsClosed(false);\n                        if (deadline < Date.now()) {\n                            setIsClosed(\"true\");\n                        } else {\n                            setIsClosed(\"false\");\n                        }\n                        console.log(\"isclosed\", isClosed1);\n                        _ctx.next = 50;\n                        return helperFunc(isClosed1, campaigns[i]);\n                    case 50:\n                        console.log(status);\n                        cryptoOrder = {\n                            id: i.toString(),\n                            status: status,\n                            title: campaigns[i].title,\n                            description: campaigns[i].description,\n                            sourceName: account,\n                            sourceDesc: balance,\n                            amountCrypto: ethers__WEBPACK_IMPORTED_MODULE_5__.ethers.utils.formatUnits(transaction.toString(), \"ether\")\n                        };\n                        console.log(cryptoOrder);\n                        cryptoOrders.push(cryptoOrder);\n                    case 54:\n                        i++;\n                        _ctx.next = 39;\n                        break;\n                    case 57:\n                        setTransations(transactions);\n                        setCryptoOrders(cryptoOrders);\n                    case 59:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function loadBlockchainData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        loadBlockchainData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Card, {\n        children: cryptoOrders1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_RecentOrdersTable__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            cryptoOrders: cryptoOrders1,\n            account: account1,\n            manager: manager,\n            balance: balance\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\91905\\\\Desktop\\\\crowdfunding\\\\crowdfunding\\\\web-final\\\\src\\\\content\\\\Management\\\\Transactions\\\\RecentOrders.tsx\",\n            lineNumber: 142,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\91905\\\\Desktop\\\\crowdfunding\\\\crowdfunding\\\\web-final\\\\src\\\\content\\\\Management\\\\Transactions\\\\RecentOrders.tsx\",\n        lineNumber: 140,\n        columnNumber: 5\n    }, this);\n}\n_s(RecentOrders, \"VFOOGZ8DHqO2fFQ+uANiAUge0FI=\");\n_c = RecentOrders;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecentOrders);\nvar _c;\n$RefreshReg$(_c, \"RecentOrders\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGVudC9NYW5hZ2VtZW50L1RyYW5zYWN0aW9ucy9SZWNlbnRPcmRlcnMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFFZTtBQUVEO0FBQ25ELGlHQUFpRztBQUN6QjtBQUN4Qzs7QUFFaEMsSUFBTU8sb0JBQW9CLEdBQUdGLHNGQUFtQztBQUNoRSxJQUFNSyxXQUFXLEdBQUdMLG1FQUFnQjtBQUVwQyxTQUFTTyxZQUFZLEdBQUc7O0lBQ3RCLElBQXdDUixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBYnhELGFBYXFCLEdBQXFCQSxHQUFjLEdBQW5DLEVBYnJCLGVBYXNDLEdBQUlBLEdBQWMsR0FBbEI7SUFDcEMsSUFBZ0NBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFkaEQsU0FjaUIsR0FBaUJBLElBQWMsR0FBL0IsRUFkakIsV0FjOEIsR0FBSUEsSUFBYyxHQUFsQjtJQUM1QixJQUE4QkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQWY5QyxRQWVnQixHQUFnQkEsSUFBYyxHQUE5QixFQWZoQixVQWU0QixHQUFJQSxJQUFjLEdBQWxCO0lBQzFCLElBQThCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBaEI5QyxPQWdCZ0IsR0FBZ0JBLElBQWMsR0FBOUIsRUFoQmhCLFVBZ0I0QixHQUFJQSxJQUFjLEdBQWxCO0lBQzFCLElBQThCQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBakI5QyxPQWlCZ0IsR0FBZ0JBLElBQWMsR0FBOUIsRUFqQmhCLFVBaUI0QixHQUFJQSxJQUFjLEdBQWxCO0lBQzFCLElBQXdDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBbEJ4RCxhQWtCcUIsR0FBcUJBLElBQWMsR0FBbkMsRUFsQnJCLGVBa0JzQyxHQUFJQSxJQUFjLEdBQWxC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bEIsY0FBYyxDQUFDRCxZQUFZLENBQUMsQ0FBQzt3QkFDN0JiLGVBQWUsQ0FBQ0QsWUFBWSxDQUFDLENBQUM7Ozs7OztTQUMvQjt3QkF0RUs0QixrQkFBa0I7OztPQXNFdkI7SUFFRHRDLGdEQUFTLENBQUMsV0FBTTtRQUNkc0Msa0JBQWtCLEVBQUUsQ0FBQztLQUN0QixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0UsOERBQUN6QywrQ0FBSTtrQkFDRmEsYUFBWSxrQkFDWCw4REFBQ1osMERBQWlCO1lBQ2hCWSxZQUFZLEVBQUVBLGFBQVk7WUFDMUJJLE9BQU8sRUFBRUEsUUFBTztZQUNoQkksT0FBTyxFQUFJQSxPQUFPO1lBQ2xCRixPQUFPLEVBQUVBLE9BQU87Ozs7O2dCQUNoQjs7Ozs7WUFFQyxDQUNQO0NBQ0g7R0ExSVFQLFlBQVk7QUFBWkEsS0FBQUEsWUFBWTtBQTRJckIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGVudC9NYW5hZ2VtZW50L1RyYW5zYWN0aW9ucy9SZWNlbnRPcmRlcnMudHN4PzQ5NzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBDcnlwdG9PcmRlciB9IGZyb20gXCJAL21vZGVscy9jcnlwdG9fb3JkZXJcIjtcbmltcG9ydCBSZWNlbnRPcmRlcnNUYWJsZSBmcm9tIFwiLi9SZWNlbnRPcmRlcnNUYWJsZVwiO1xuaW1wb3J0IHsgc3ViRGF5cyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBDcm93ZGZ1bmRpbmcgZnJvbSBcIi4uLy4uLy4uLy4uL2FydGlmYWN0cy9jb250cmFjdHMvQ3Jvd2RmdW5kaW5nLnNvbC9Dcm93ZGZ1bmRpbmcuanNvblwiO1xuaW1wb3J0IENyb3dkZnVuZGluZyBmcm9tIFwiLi4vLi4vLi4vLi4vYnVpbGQvY29udHJhY3RzL0Nyb3dkZnVuZGluZy5qc29uXCJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcblxuY29uc3Qgc21hcnRDb250cmFjdEFkZHJlc3MgPSBDcm93ZGZ1bmRpbmcubmV0d29ya3NbNTc3N10uYWRkcmVzcztcbmNvbnN0IGNvbnRyYWN0QWJpID0gQ3Jvd2RmdW5kaW5nLmFiaTtcblxuZnVuY3Rpb24gUmVjZW50T3JkZXJzKCkge1xuICBjb25zdCBbY3J5cHRvT3JkZXJzLCBzZXRDcnlwdG9PcmRlcnNdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtwcm92aWRlciwgc2V0UHJvdmlkZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW21hbmFnZXIsIHNldE1hbmFnZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjcm93ZGZ1bmRpbmcsIHNldENyb3dkZnVuZGluZ10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NhbXBhaWducywgc2V0Q2FtcGFpZ25zXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdHJhbnNhY3Rpb25zLCBzZXRUcmFuc2F0aW9uc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2RlYWRsaW5lLCBzZXREZWFkbGluZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzQ2xvc2VkLCBzZXRJc0Nsb3NlZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKG51bGwpO1xuICAvLyBjb25zdCBjcnlwdG9PcmRlcnM6IENyeXB0b09yZGVyW10gPSBbXVxuXG4gIC8vIGNvbnN0IHRlbXA6IENyeXB0b09yZGVyW10gPSBbXG4gIC8vICAge1xuICAvLyAgICAgaWQ6ICcxMCcsXG4gIC8vICAgICBzdGF0dXM6ICdjb21wbGV0ZWQnLFxuICAvLyAgICAgdGl0bGU6ICcnLFxuICAvLyAgICAgZGVzY3JpcHRpb246ICcnLFxuICAvLyAgICAgc291cmNlTmFtZTogJycsXG4gIC8vICAgICBzb3VyY2VEZXNjOiAnJyxcbiAgLy8gICAgIGFtb3VudENyeXB0bzogMFxuICAvLyAgIH1cbiAgLy8gXTtcblxuICBjb25zdCBoZWxwZXJGdW5jID0gYXN5bmMgKGlzQ2xvc2VkLCBjYW1wYWlnbikgPT4ge1xuICAgIC8vIGlzQ2xvc2VkICYmIGNhbXBhaWduLnBsZWRnZWRBbXQgPCBjYW1wYWlnbi5nb2FsXG4gICAgLy8gICA/IHNldFN0YXR1cyhcImZhaWxlZFwiKVxuICAgIC8vICAgOiBzZXRTdGF0dXMoXCJjb21wbGV0ZWRcIik7XG5cbiAgICAvLyAhaXNDbG9zZWRcbiAgICAvLyAgID8gc2V0U3RhdHVzKFwicGVuZGluZ1wiKVxuICAgIC8vICAgOiBjYW1wYWlnbi5wbGVkZ2VkQW10IDwgY2FtcGFpZ24uZ29hbFxuICAgIC8vICAgPyBzZXRTdGF0dXMoXCJmYWlsZWRcIilcbiAgICAvLyAgIDogc2V0U3RhdHVzKFwiY29tcGxldGVkXCIpO1xuXG4gICAgaWYoIWlzQ2xvc2VkKXtcbiAgICAgIHNldFN0YXR1cyhcInBlbmRpbmdcIilcbiAgICB9ICBcbiAgICBlbHNlXG4gICAge1xuICAgICAgaWYoY2FtcGFpZ24ucGxlZGdlZEFtdCA8IGNhbXBhaWduLmdvYWwpXG4gICAgICBzZXRTdGF0dXMoXCJmYWlsZWRcIilcbiAgICAgIGVsc2VcbiAgICAgIHNldFN0YXR1cyhcImNvbXBsZXRlZFwiKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcInN0YXR1c1wiKVxuICB9O1xuXG4gIGNvbnN0IGxvYWRCbG9ja2NoYWluRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcbiAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gICAgfSk7XG4gICAgY29uc3QgYWNjb3VudCA9IGV0aGVycy51dGlscy5nZXRBZGRyZXNzKGFjY291bnRzWzBdKTtcbiAgICBzZXRBY2NvdW50KGFjY291bnQpO1xuICAgIGNvbnNvbGUubG9nKGFjY291bnQpO1xuXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICBzZXRQcm92aWRlcihwcm92aWRlcik7XG5cbiAgICBjb25zdCBldGhiYWxhbmNlID0gYXdhaXQgcHJvdmlkZXIuZ2V0QmFsYW5jZShhY2NvdW50KTtcbiAgICBzZXRCYWxhbmNlKGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihldGhiYWxhbmNlKS50b1N0cmluZygpKTtcblxuICAgIGNvbnN0IGNyb3dkZnVuZGluZyA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG4gICAgICBzbWFydENvbnRyYWN0QWRkcmVzcyxcbiAgICAgIGNvbnRyYWN0QWJpLFxuICAgICAgcHJvdmlkZXJcbiAgICApO1xuICAgIHNldENyb3dkZnVuZGluZyhjcm93ZGZ1bmRpbmcpO1xuICAgIHNldE1hbmFnZXIoYXdhaXQgY3Jvd2RmdW5kaW5nLm1hbmFnZXIoKSk7XG4gICAgY29uc3QgY2FtcGFpZ25zID0gW107XG5cbiAgICBjb25zdCBub09mQ2FtcGFpZ25zID0gYXdhaXQgY3Jvd2RmdW5kaW5nLm5vT2ZDYW1wYWlnbnMoKTtcbiAgICBjb25zdCB0b3RhbCA9IHBhcnNlSW50KG5vT2ZDYW1wYWlnbnMudG9TdHJpbmcoKSlcbiAgICBjb25zb2xlLmxvZyh0b3RhbClcbiAgICBcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvdGFsOyBpKyspIHtcbiAgICAgIGNvbnN0IGNhbXBhaWduID0gYXdhaXQgY3Jvd2RmdW5kaW5nLmNhbXBhaWducyhpICsgMSk7XG4gICAgICBjYW1wYWlnbnMucHVzaChjYW1wYWlnbik7XG4gICAgfVxuICAgIHNldENhbXBhaWducyhjYW1wYWlnbnMpO1xuICAgIGNvbnNvbGUubG9nKGNhbXBhaWducylcbiAgICBjb25zdCBjcnlwdG9PcmRlcnMgPSBbXTtcbiAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvdGFsOyBpKyspIHtcbiAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgY3Jvd2RmdW5kaW5nLmNvbnRyaWJ1dG9yQ29udHJpYnV0aW9ucyhcbiAgICAgICAgYWNjb3VudCxcbiAgICAgICAgaSArIDFcbiAgICAgICk7XG4gICAgICBcbiAgICAgIGNvbnN0IGRlYWRsaW5lID0gcGFyc2VJbnQoY2FtcGFpZ25zW2ldLmNhbXBhaWduRGVhZGxpbmUudG9TdHJpbmcoKSk7XG4gICAgICBzZXREZWFkbGluZShkZWFkbGluZSk7XG4gICAgICBjb25zb2xlLmxvZyhkZWFkbGluZSA8IERhdGUubm93KCkpO1xuICAgICAgLy8gZGVhZGxpbmUgPCBEYXRlLm5vdygpID8gc2V0SXNDbG9zZWQodHJ1ZSkgOiBzZXRJc0Nsb3NlZChmYWxzZSk7XG4gICAgICBpZiAoZGVhZGxpbmUgPCBEYXRlLm5vdygpKSB7XG4gICAgICAgIHNldElzQ2xvc2VkKFwidHJ1ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldElzQ2xvc2VkKFwiZmFsc2VcIik7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhcImlzY2xvc2VkXCIsaXNDbG9zZWQpO1xuXG4gICAgICBhd2FpdCBoZWxwZXJGdW5jKGlzQ2xvc2VkLCBjYW1wYWlnbnNbaV0pO1xuXG4gICAgICBjb25zb2xlLmxvZyhzdGF0dXMpO1xuICAgICAgY29uc3QgY3J5cHRvT3JkZXIgPSB7XG4gICAgICAgIGlkOiBpLnRvU3RyaW5nKCksXG4gICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgICB0aXRsZTogY2FtcGFpZ25zW2ldLnRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogY2FtcGFpZ25zW2ldLmRlc2NyaXB0aW9uLFxuICAgICAgICBzb3VyY2VOYW1lOiBhY2NvdW50LFxuICAgICAgICBzb3VyY2VEZXNjOiBiYWxhbmNlLFxuICAgICAgICBhbW91bnRDcnlwdG86IGV0aGVycy51dGlscy5mb3JtYXRVbml0cyh0cmFuc2FjdGlvbi50b1N0cmluZygpLCBcImV0aGVyXCIpLFxuICAgICAgfTtcbiAgICAgIGNvbnNvbGUubG9nKGNyeXB0b09yZGVyKTtcbiAgICAgIGNyeXB0b09yZGVycy5wdXNoKGNyeXB0b09yZGVyKTtcbiAgICB9XG5cbiAgICBzZXRUcmFuc2F0aW9ucyh0cmFuc2FjdGlvbnMpO1xuICAgIHNldENyeXB0b09yZGVycyhjcnlwdG9PcmRlcnMpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZEJsb2NrY2hhaW5EYXRhKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkPlxuICAgICAge2NyeXB0b09yZGVycyAmJiAoXG4gICAgICAgIDxSZWNlbnRPcmRlcnNUYWJsZVxuICAgICAgICAgIGNyeXB0b09yZGVycz17Y3J5cHRvT3JkZXJzfVxuICAgICAgICAgIGFjY291bnQ9e2FjY291bnR9XG4gICAgICAgICAgbWFuYWdlciA9IHttYW5hZ2VyfVxuICAgICAgICAgIGJhbGFuY2U9e2JhbGFuY2V9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvQ2FyZD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjZW50T3JkZXJzO1xuIl0sIm5hbWVzIjpbIkNhcmQiLCJSZWNlbnRPcmRlcnNUYWJsZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDcm93ZGZ1bmRpbmciLCJldGhlcnMiLCJzbWFydENvbnRyYWN0QWRkcmVzcyIsIm5ldHdvcmtzIiwiYWRkcmVzcyIsImNvbnRyYWN0QWJpIiwiYWJpIiwiUmVjZW50T3JkZXJzIiwiY3J5cHRvT3JkZXJzIiwic2V0Q3J5cHRvT3JkZXJzIiwicHJvdmlkZXIiLCJzZXRQcm92aWRlciIsImFjY291bnQiLCJzZXRBY2NvdW50IiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJtYW5hZ2VyIiwic2V0TWFuYWdlciIsImNyb3dkZnVuZGluZyIsInNldENyb3dkZnVuZGluZyIsImNhbXBhaWducyIsInNldENhbXBhaWducyIsInRyYW5zYWN0aW9ucyIsInNldFRyYW5zYXRpb25zIiwiZGVhZGxpbmUiLCJzZXREZWFkbGluZSIsImlzQ2xvc2VkIiwic2V0SXNDbG9zZWQiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJoZWxwZXJGdW5jIiwiY2FtcGFpZ24iLCJwbGVkZ2VkQW10IiwiZ29hbCIsImNvbnNvbGUiLCJsb2ciLCJsb2FkQmxvY2tjaGFpbkRhdGEiLCJhY2NvdW50cyIsImV0aGJhbGFuY2UiLCJub09mQ2FtcGFpZ25zIiwidG90YWwiLCJpIiwidHJhbnNhY3Rpb24iLCJjcnlwdG9PcmRlciIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsInV0aWxzIiwiZ2V0QWRkcmVzcyIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsImdldEJhbGFuY2UiLCJmb3JtYXRFdGhlciIsInRvU3RyaW5nIiwiQ29udHJhY3QiLCJwYXJzZUludCIsInB1c2giLCJjb250cmlidXRvckNvbnRyaWJ1dGlvbnMiLCJjYW1wYWlnbkRlYWRsaW5lIiwiRGF0ZSIsIm5vdyIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNvdXJjZU5hbWUiLCJzb3VyY2VEZXNjIiwiYW1vdW50Q3J5cHRvIiwiZm9ybWF0VW5pdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/content/Management/Transactions/RecentOrders.tsx\n");

/***/ })

});