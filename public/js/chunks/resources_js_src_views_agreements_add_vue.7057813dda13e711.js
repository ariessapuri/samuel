"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_agreements_add_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/agreements/add.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/agreements/add.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _composables_use_meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/composables/use-meta */ "./resources/js/src/composables/use-meta.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config/config.js */ "./resources/js/src/config/config.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'add',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;

    __expose();

    axios__WEBPACK_IMPORTED_MODULE_3__["default"].defaults.headers.common.Accept = 'application/json';
    var errorMessage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var type = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var client_code = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var client_detail = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var profit_guarantee = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var share_profit_investor_value = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var share_profit_guarantor_value = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var realized_gain = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var share_profit_investor_percentage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var share_profit_guarantor_percentage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var isReadonly = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
    var investment_period = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var total_days = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var referral_fee_1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var referral_fee_2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var routing_new_client = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('/clients/add');
    var routing_to_endorsee = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('/setting/endorsee');
    var endorsee_id = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var endorsee_name = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    var todayISO = new Date().toISOString().split('T')[0];

    function formatToDDMMYYYY(dateISO) {
      var _dateISO$split = dateISO.split('-'),
          _dateISO$split2 = _slicedToArray(_dateISO$split, 3),
          year = _dateISO$split2[0],
          month = _dateISO$split2[1],
          day = _dateISO$split2[2];

      return "".concat(day, "/").concat(month, "/").concat(year);
    }

    var date = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(todayISO);
    var start_investment_date = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(todayISO);
    var end_investment_date = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var showSuggestions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var searchTerm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var suggestions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var filteredSuggestions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      if (searchTerm.value === '') {
        return [];
      }

      return suggestions.value.filter(function (s) {
        return s.toLowerCase().includes(searchTerm.value.toLowerCase());
      });
    });

    var onInput = function onInput() {
      showSuggestions.value = true;
    };

    var onBlur = function onBlur() {
      setTimeout(function () {
        showSuggestions.value = false;
      }, 100);
    };

    var GetEndInvestment = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!investment_period.value) {
                  _context.next = 12;
                  break;
                }

                _context.prev = 1;
                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("".concat(_config_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].baseAPIURL, "agreement/get_end_investment"), {
                  headers: {
                    Authorization: "Bearer ".concat(token)
                  },
                  params: {
                    investment_period: investment_period.value,
                    start_investment_date: start_investment_date.value
                  }
                });

              case 4:
                response = _context.sent;
                end_investment_date.value = response.data.end_investment_date;
                total_days.value = response.data.days_difference;
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                console.error("Error fetching agreement data:", _context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9]]);
      }));

      return function GetEndInvestment() {
        return _ref2.apply(this, arguments);
      };
    }();

    var generateAgreement = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!investment_value.value) {
                  _context2.next = 17;
                  break;
                }

                _context2.prev = 1;
                _context2.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("".concat(_config_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].baseAPIURL, "agreement/generate_agreement_value"), {
                  headers: {
                    Authorization: "Bearer ".concat(token)
                  },
                  params: {
                    nominal: investment_value.value,
                    investor_percentage: share_profit_investor_percentage.value || 70
                  }
                });

              case 4:
                response = _context2.sent;
                profit_guarantee.value = response.data.random_percent;
                share_profit_investor_value.value = response.data.profit_sharing_investor;
                share_profit_guarantor_value.value = response.data.profit_sharing_guarantor;
                realized_gain.value = response.data.realized_gain;
                share_profit_investor_percentage.value = response.data.profit_investor_percentage;
                share_profit_guarantor_percentage.value = response.data.profit_guarantor_percentage;
                isReadonly.value = false;
                _context2.next = 17;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](1);
                console.error("Error fetching agreement data:", _context2.t0);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 14]]);
      }));

      return function generateAgreement() {
        return _ref3.apply(this, arguments);
      };
    }();

    var selectSuggestion = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(suggestion) {
        var selected_client, response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                searchTerm.value = suggestion;
                showSuggestions.value = false;
                selected_client = suggestion.split(" - ");
                client_code.value = selected_client[0];
                _context3.prev = 4;
                _context3.next = 7;
                return axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("".concat(_config_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].baseAPIURL, "clients/getClientDetail/").concat(client_code.value), {
                  headers: {
                    Authorization: "Bearer ".concat(token)
                  }
                }).then(function (response) {
                  var client_data = response.data;
                  client_detail.value += client_data.title + " " + client_data.name + "\n";
                  client_detail.value += client_data.email + " - " + client_data.phone + "\n\n";
                  var addressObject = JSON.parse(client_data.address);
                  client_detail.value += addressObject.street_address + "\n";
                  client_detail.value += addressObject.subdistrict + " - " + addressObject.district + "\n";
                  client_detail.value += addressObject.province + " - " + addressObject.city + " - " + addressObject.postcode;
                })["catch"](function (error) {
                  console.error(error);
                });

              case 7:
                response = _context3.sent;
                _context3.next = 13;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](4);
                // Handle errors
                errorMessage.value = _context3.t0.response.data.message;

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[4, 10]]);
      }));

      return function selectSuggestion(_x) {
        return _ref4.apply(this, arguments);
      };
    }();

    var originalInput = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var investment_value = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');

    var formatNumber = function formatNumber(num) {
      return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    var formatInput = function formatInput(event) {
      var input = event.target.value;
      var rawNumber = input.replace(/,/g, '');

      if (!isNaN(rawNumber) || rawNumber === '') {
        originalInput.value = rawNumber;
        investment_value.value = formatNumber(rawNumber);
      } else {
        investment_value.value = '';
      }
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(originalInput, function (newVal) {
      investment_value.value = formatNumber(newVal);
    });
    (0,_composables_use_meta__WEBPACK_IMPORTED_MODULE_1__.useMeta)({
      title: 'Agreements - Add'
    });
    var token = localStorage.getItem('token');
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var response, _response, endorseeData;

      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("".concat(_config_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].baseAPIURL, "clients/getClient"), {
                headers: {
                  Authorization: "Bearer ".concat(token)
                }
              }).then(function (response) {
                var clients = response.data;
                suggestions.value = clients.map(function (client) {
                  return client.code_name;
                });
              })["catch"](function (error) {
                console.error(error);
              });

            case 3:
              response = _context4.sent;
              _context4.prev = 4;
              _context4.next = 7;
              return axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("".concat(_config_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].baseAPIURL, "endorsee"), {
                headers: {
                  Authorization: "Bearer ".concat(token)
                }
              });

            case 7:
              _response = _context4.sent;
              endorseeData = _response.data.data;
              endorsee_id.value = endorseeData.id;
              endorsee_name.value = endorseeData.name;
              _context4.next = 16;
              break;

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](4);
              console.error(_context4.t0);

            case 16:
              _context4.next = 21;
              break;

            case 18:
              _context4.prev = 18;
              _context4.t1 = _context4["catch"](0);
              // Handle errors
              errorMessage.value = _context4.t1.response.data.message;

            case 21:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 18], [4, 13]]);
    })));

    function handleSubmit() {
      return _handleSubmit.apply(this, arguments);
    }

    function _handleSubmit() {
      _handleSubmit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var formData, response, agreementId;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                // Form data
                formData = {
                  type: type.value,
                  date: date.value,
                  client_code: client_code.value,
                  investment_value: investment_value.value,
                  profit_guarantee: profit_guarantee.value,
                  share_profit_investor_percentage: share_profit_investor_percentage.value,
                  share_profit_guarantor_percentage: share_profit_guarantor_percentage.value,
                  realized_gain: realized_gain.value,
                  share_profit_investor_value: share_profit_investor_value.value,
                  share_profit_guarantor_value: share_profit_guarantor_value.value,
                  total_days: total_days.value,
                  investment_period: investment_period.value,
                  start_investment_date: start_investment_date.value,
                  end_investment_date: end_investment_date.value,
                  referral_fee_1: referral_fee_1.value,
                  referral_fee_2: referral_fee_2.value,
                  endorsee_id: endorsee_id.value
                };
                _context5.prev = 1;
                _context5.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("".concat(_config_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].baseAPIURL, "agreement/store"), formData, {
                  headers: {
                    'Authorization': "Bearer ".concat(token)
                  }
                });

              case 4:
                response = _context5.sent;
                agreementId = response.data.id;
                router.push({
                  name: 'agreementsEdit',
                  params: {
                    agreementId: agreementId
                  },
                  query: {
                    successMessage: 'Agreement created successfully'
                  }
                });
                _context5.next = 12;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](1);
                // Handle errors
                errorMessage.value = _context5.t0.response.data.message;

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 9]]);
      }));
      return _handleSubmit.apply(this, arguments);
    }

    var __returned__ = {
      errorMessage: errorMessage,
      type: type,
      client_code: client_code,
      client_detail: client_detail,
      profit_guarantee: profit_guarantee,
      share_profit_investor_value: share_profit_investor_value,
      share_profit_guarantor_value: share_profit_guarantor_value,
      realized_gain: realized_gain,
      share_profit_investor_percentage: share_profit_investor_percentage,
      share_profit_guarantor_percentage: share_profit_guarantor_percentage,
      isReadonly: isReadonly,
      investment_period: investment_period,
      total_days: total_days,
      referral_fee_1: referral_fee_1,
      referral_fee_2: referral_fee_2,
      routing_new_client: routing_new_client,
      routing_to_endorsee: routing_to_endorsee,
      endorsee_id: endorsee_id,
      endorsee_name: endorsee_name,
      router: router,
      todayISO: todayISO,
      formatToDDMMYYYY: formatToDDMMYYYY,
      date: date,
      start_investment_date: start_investment_date,
      end_investment_date: end_investment_date,
      showSuggestions: showSuggestions,
      searchTerm: searchTerm,
      suggestions: suggestions,
      filteredSuggestions: filteredSuggestions,
      onInput: onInput,
      onBlur: onBlur,
      GetEndInvestment: GetEndInvestment,
      generateAgreement: generateAgreement,
      selectSuggestion: selectSuggestion,
      originalInput: originalInput,
      investment_value: investment_value,
      formatNumber: formatNumber,
      formatInput: formatInput,
      token: token,
      handleSubmit: handleSubmit,

      get axios() {
        return axios__WEBPACK_IMPORTED_MODULE_3__["default"];
      },

      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      watch: vue__WEBPACK_IMPORTED_MODULE_0__.watch,

      get useMeta() {
        return _composables_use_meta__WEBPACK_IMPORTED_MODULE_1__.useMeta;
      },

      get useRouter() {
        return vue_router__WEBPACK_IMPORTED_MODULE_4__.useRouter;
      },

      get config() {
        return _config_config_js__WEBPACK_IMPORTED_MODULE_2__["default"];
      }

    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/agreements/add.vue?vue&type=template&id=06beb576&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/agreements/add.vue?vue&type=template&id=06beb576&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-06beb576"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "layout-px-spacing"
};

var _hoisted_2 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    "class": "navbar-nav flex-row"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "page-header"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", {
    "class": "breadcrumb-one",
    "aria-label": "breadcrumb"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", {
    "class": "breadcrumb"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "breadcrumb-item"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "javascript:;"
  }, "Agreements")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
    "class": "breadcrumb-item active",
    "aria-current": "page"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Add")])])])])])], -1
  /* HOISTED */
  );
});

var _hoisted_3 = {
  "class": "row layout-top-spacing"
};
var _hoisted_4 = {
  "class": "col-xl-12 col-lg-12 col-sm-12 layout-spacing"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row pb-4\" data-v-06beb576><div class=\"col-12\" data-v-06beb576><a href=\"/users\" class=\"btn btn-primary\" data-v-06beb576><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6 inline-block ml-1\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" data-v-06beb576><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 19l-7-7m0 0l7-7m-7 7h18\" data-v-06beb576></path></svg> Back to agreement list </a></div></div>", 1);

var _hoisted_6 = {
  "class": "panel br-6 p-0"
};
var _hoisted_7 = {
  id: "flFormsGrid",
  "class": "col-lg-12 layout-spacing"
};
var _hoisted_8 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_9 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-xl-12 col-md-12 col-sm-12 col-12"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "badge-title badge badge-dark badge-classic"
  }, "add agreement")])], -1
  /* HOISTED */
  );
});

var _hoisted_10 = {
  "class": "panel-body"
};
var _hoisted_11 = {
  key: 0,
  "class": "alert alert-danger"
};
var _hoisted_12 = {
  "class": "row"
};
var _hoisted_13 = {
  "class": "form-group col-md-4"
};

var _hoisted_14 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inputType"
  }, "Type", -1
  /* HOISTED */
  );
});

var _hoisted_15 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    selected: ""
  }, "Choose", -1
  /* HOISTED */
  );
});

var _hoisted_16 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "protected"
  }, "protected", -1
  /* HOISTED */
  );
});

var _hoisted_17 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "non protected"
  }, "non protected", -1
  /* HOISTED */
  );
});

var _hoisted_18 = [_hoisted_15, _hoisted_16, _hoisted_17];
var _hoisted_19 = {
  "class": "form-group col-md-4"
};

var _hoisted_20 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inputDate"
  }, "Date", -1
  /* HOISTED */
  );
});

var _hoisted_21 = {
  "class": "form-group col-md-4"
};
var _hoisted_22 = {
  "for": "inputEndorseeName"
};
var _hoisted_23 = ["href"];

var _hoisted_24 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "class": "feather feather-edit-2 align-middle me-1"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\" data-v-06beb576><div class=\"panel-heading\" data-v-06beb576><div class=\"row\" data-v-06beb576><div class=\"col-xl-12 col-md-12 col-sm-12 col-12 ps-0\" data-v-06beb576><h4 class=\"text-decoration-underline\" data-v-06beb576>Client </h4></div></div></div></div>", 1);

var _hoisted_26 = {
  "class": "row"
};
var _hoisted_27 = {
  "class": "mt-2 mb-2"
};
var _hoisted_28 = ["href"];
var _hoisted_29 = {
  "class": "form-group col-md-6"
};
var _hoisted_30 = {
  "class": "autocomplete-container"
};
var _hoisted_31 = {
  key: 0,
  "class": "suggestions-list"
};
var _hoisted_32 = ["onMousedown"];
var _hoisted_33 = {
  "class": "row mb-4"
};
var _hoisted_34 = {
  "class": "col-md-12"
};

var _hoisted_35 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
  /* HOISTED */
  );
});

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\" data-v-06beb576><div class=\"panel-heading\" data-v-06beb576><div class=\"row\" data-v-06beb576><div class=\"col-xl-12 col-md-12 col-sm-12 col-12 ps-0\" data-v-06beb576><h4 class=\"text-decoration-underline\" data-v-06beb576>Investment</h4></div></div></div></div>", 1);

var _hoisted_37 = {
  "class": "row"
};
var _hoisted_38 = {
  "class": "form-group col-md-6"
};

var _hoisted_39 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inputInvestmentValue"
  }, "Value", -1
  /* HOISTED */
  );
});

var _hoisted_40 = {
  "class": "input-group mb-4"
};

var _hoisted_41 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "input-group-text"
  }, "Rp.", -1
  /* HOISTED */
  );
});

var _hoisted_42 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "input-group-text"
  }, ".00", -1
  /* HOISTED */
  );
});

var _hoisted_43 = {
  "class": "row"
};
var _hoisted_44 = {
  "class": "form-group col-md-4"
};

var _hoisted_45 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inputProfitGuarantee"
  }, "Profit Guarantee", -1
  /* HOISTED */
  );
});

var _hoisted_46 = {
  "class": "input-group mb-4"
};

var _hoisted_47 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "input-group-text"
  }, "%", -1
  /* HOISTED */
  );
});

var _hoisted_48 = {
  "class": "form-group col-md-4"
};

var _hoisted_49 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inputShareProfitInvestor"
  }, "Share Profit Investor", -1
  /* HOISTED */
  );
});

var _hoisted_50 = {
  "class": "input-group mb-4"
};
var _hoisted_51 = ["readonly"];

var _hoisted_52 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "input-group-text"
  }, "%", -1
  /* HOISTED */
  );
});

var _hoisted_53 = {
  "class": "form-group col-md-4"
};

var _hoisted_54 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inputShareProfitInvestor"
  }, "Share Profit Guarantor", -1
  /* HOISTED */
  );
});

var _hoisted_55 = {
  "class": "input-group mb-4"
};

var _hoisted_56 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "input-group-text"
  }, "%", -1
  /* HOISTED */
  );
});

var _hoisted_57 = {
  "class": "row"
};
var _hoisted_58 = {
  "class": "form-group col-md-4"
};

var _hoisted_59 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inputRealiazedGain"
  }, "Realiazed Gain", -1
  /* HOISTED */
  );
});

var _hoisted_60 = {
  "class": "input-group mb-4"
};

var _hoisted_61 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "input-group-text"
  }, "Rp.", -1
  /* HOISTED */
  );
});

var _hoisted_62 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "input-group-text"
  }, ".00", -1
  /* HOISTED */
  );
});

var _hoisted_63 = {
  "class": "form-group col-md-4"
};

var _hoisted_64 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inputProfitInvestor"
  }, "Profit Investor", -1
  /* HOISTED */
  );
});

var _hoisted_65 = {
  "class": "input-group mb-4"
};

var _hoisted_66 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "input-group-text"
  }, "Rp.", -1
  /* HOISTED */
  );
});

var _hoisted_67 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "input-group-text"
  }, ".00", -1
  /* HOISTED */
  );
});

var _hoisted_68 = {
  "class": "form-group col-md-4"
};

var _hoisted_69 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inputProfitGuarantor"
  }, "Profit Guarantor", -1
  /* HOISTED */
  );
});

var _hoisted_70 = {
  "class": "input-group mb-4"
};

var _hoisted_71 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "input-group-text"
  }, "Rp.", -1
  /* HOISTED */
  );
});

var _hoisted_72 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "input-group-text"
  }, ".00", -1
  /* HOISTED */
  );
});

var _hoisted_73 = {
  "class": "row"
};
var _hoisted_74 = {
  "class": "form-group col-md-4"
};

var _hoisted_75 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inputInvestmentPeriod"
  }, "Investment Period", -1
  /* HOISTED */
  );
});

var _hoisted_76 = {
  "class": "input-group mb-4"
};

var _hoisted_77 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "input-group-text"
  }, "month", -1
  /* HOISTED */
  );
});

var _hoisted_78 = {
  "class": "form-group col-md-4"
};

var _hoisted_79 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inputStartInvestment"
  }, "Start Investment", -1
  /* HOISTED */
  );
});

var _hoisted_80 = {
  "class": "form-group col-md-4"
};

var _hoisted_81 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inputEndInvestment"
  }, "End Investment", -1
  /* HOISTED */
  );
});

var _hoisted_82 = {
  key: 0,
  "class": "text-muted"
};

var _hoisted_83 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\" data-v-06beb576><div class=\"panel-heading\" data-v-06beb576><div class=\"row\" data-v-06beb576><div class=\"col-xl-12 col-md-12 col-sm-12 col-12 ps-0\" data-v-06beb576><h4 class=\"text-decoration-underline\" data-v-06beb576>Referral</h4></div></div></div></div>", 1);

var _hoisted_84 = {
  "class": "row"
};
var _hoisted_85 = {
  "class": "form-group col-md-6"
};

var _hoisted_86 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inputReferralFee1"
  }, "Referral Fee 1", -1
  /* HOISTED */
  );
});

var _hoisted_87 = {
  "class": "form-group col-md-6"
};

var _hoisted_88 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
    "for": "inputReferralFee2"
  }, "Referral Fee 2", -1
  /* HOISTED */
  );
});

var _hoisted_89 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "btn btn-primary mt-3"
  }, "Create", -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_comma_format = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("comma-format");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.handleSubmit, ["prevent"])
  }, [$setup.errorMessage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errorMessage), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "type",
    "class": "form-select",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.type = $event;
    }),
    required: "required"
  }, [].concat(_hoisted_18), 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.type]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "date",
    "class": "form-control",
    id: "date",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.date = $event;
    }),
    placeholder: "Date",
    required: "required"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.date]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Endorsee "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: $setup.routing_to_endorsee,
    "class": "text-white badge badge-primary d-inline align-middle ms-2"
  }, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" edit ")], 8
  /* PROPS */
  , _hoisted_23)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.endorsee_id = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.endorsee_id]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    id: "endorsee_name",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.endorsee_name = $event;
    }),
    required: "required",
    readonly: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.endorsee_name]])])]), _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: $setup.routing_new_client,
    "class": "text-white badge badge-primary d-inline align-middle ms-2"
  }, "add client ", 8
  /* PROPS */
  , _hoisted_28)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.client_code = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.client_code]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.searchTerm = $event;
    }),
    onInput: $setup.onInput,
    onBlur: $setup.onBlur,
    placeholder: "type client code",
    required: ""
  }, null, 544
  /* NEED_HYDRATION, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.searchTerm]]), $setup.showSuggestions && $setup.filteredSuggestions.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_31, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.filteredSuggestions, function (suggestion, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: index,
      onMousedown: function onMousedown($event) {
        return $setup.selectSuggestion(suggestion);
      }
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(suggestion), 41
    /* TEXT, PROPS, NEED_HYDRATION */
    , _hoisted_32);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "class": "form-control",
    rows: "6",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.client_detail = $event;
    }),
    readonly: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.client_detail]])]), _hoisted_35]), _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [_hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    onInput: $setup.formatInput,
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $setup.investment_value = $event;
    }),
    onBlur: $setup.generateAgreement,
    "aria-label": "Amount",
    required: ""
  }, null, 544
  /* NEED_HYDRATION, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.investment_value]]), _hoisted_42])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $setup.profit_guarantee = $event;
    }),
    readonly: "",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.profit_guarantee]]), _hoisted_47])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [_hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    "class": "form-control",
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $setup.share_profit_investor_percentage = $event;
    }),
    onBlur: $setup.generateAgreement,
    readonly: $setup.isReadonly,
    min: "0",
    max: "100",
    required: ""
  }, null, 40
  /* PROPS, NEED_HYDRATION */
  , _hoisted_51), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.share_profit_investor_percentage]]), _hoisted_52])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [_hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $setup.share_profit_guarantor_percentage = $event;
    }),
    readonly: "",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.share_profit_guarantor_percentage]]), _hoisted_56])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [_hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [_hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $setup.realized_gain = $event;
    }),
    "aria-label": "Realized Gain",
    readonly: "",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.realized_gain]]), _hoisted_62])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [_hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [_hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $setup.share_profit_investor_value = $event;
    }),
    "aria-label": "Amount",
    readonly: "",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.share_profit_investor_value]]), _hoisted_67])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [_hoisted_69, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [_hoisted_71, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $setup.share_profit_guarantor_value = $event;
    }),
    "aria-label": "Amount",
    readonly: "",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.share_profit_guarantor_value], [_directive_comma_format]]), _hoisted_72])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "hidden",
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $setup.total_days = $event;
    })
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.total_days]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [_hoisted_75, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return $setup.investment_period = $event;
    }),
    "aria-label": "Period",
    onBlur: $setup.GetEndInvestment,
    required: ""
  }, null, 544
  /* NEED_HYDRATION, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.investment_period]]), _hoisted_77])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [_hoisted_79, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "date",
    "class": "form-control",
    id: "date",
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return $setup.start_investment_date = $event;
    }),
    onBlur: $setup.GetEndInvestment,
    placeholder: "Date",
    required: "required"
  }, null, 544
  /* NEED_HYDRATION, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.start_investment_date]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [_hoisted_81, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "date",
    "class": "form-control",
    id: "date",
    "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
      return $setup.end_investment_date = $event;
    }),
    placeholder: "Date",
    required: "required"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.end_investment_date]]), $setup.total_days !== null && $setup.total_days !== '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", _hoisted_82, "Total Days: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.total_days), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), _hoisted_83, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, [_hoisted_86, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    "class": "form-control",
    id: "date",
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return $setup.referral_fee_1 = $event;
    }),
    placeholder: "Fee"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.referral_fee_1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_87, [_hoisted_88, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "number",
    "class": "form-control",
    id: "date",
    "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
      return $setup.referral_fee_2 = $event;
    }),
    placeholder: "Fee"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.referral_fee_2]])])]), _hoisted_89], 32
  /* NEED_HYDRATION */
  )])])])])])])]);
}

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/agreements/add.vue?vue&type=style&index=0&id=06beb576&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/agreements/add.vue?vue&type=style&index=0&id=06beb576&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.autocomplete-container[data-v-06beb576] {\n    position: relative;\n}\n.suggestions-list[data-v-06beb576] {\n    position: absolute;\n    top: 100%;\n    left: 0;\n    background: white;\n    border: 1px solid #ccc;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    width: 100%;\n    padding-left: 12px;\n}\n.suggestions-list li[data-v-06beb576] {\n    padding: 8px;\n    cursor: pointer;\n}\n.suggestions-list li[data-v-06beb576]:hover {\n    background-color: #f0f0f0;\n}\n.badge-title[data-v-06beb576] {\n    font-size: 14px;\n    text-transform: uppercase;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/agreements/add.vue?vue&type=style&index=0&id=06beb576&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/agreements/add.vue?vue&type=style&index=0&id=06beb576&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_add_vue_vue_type_style_index_0_id_06beb576_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./add.vue?vue&type=style&index=0&id=06beb576&scoped=true&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/agreements/add.vue?vue&type=style&index=0&id=06beb576&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_add_vue_vue_type_style_index_0_id_06beb576_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_add_vue_vue_type_style_index_0_id_06beb576_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/agreements/add.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/agreements/add.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_vue_vue_type_template_id_06beb576_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=06beb576&scoped=true */ "./resources/js/src/views/agreements/add.vue?vue&type=template&id=06beb576&scoped=true");
/* harmony import */ var _add_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/agreements/add.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _add_vue_vue_type_style_index_0_id_06beb576_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add.vue?vue&type=style&index=0&id=06beb576&scoped=true&lang=css */ "./resources/js/src/views/agreements/add.vue?vue&type=style&index=0&id=06beb576&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_add_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_add_vue_vue_type_template_id_06beb576_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-06beb576"],['__file',"resources/js/src/views/agreements/add.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/agreements/add.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/agreements/add.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_add_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_add_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./add.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/agreements/add.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/agreements/add.vue?vue&type=template&id=06beb576&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/agreements/add.vue?vue&type=template&id=06beb576&scoped=true ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_add_vue_vue_type_template_id_06beb576_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_add_vue_vue_type_template_id_06beb576_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./add.vue?vue&type=template&id=06beb576&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/agreements/add.vue?vue&type=template&id=06beb576&scoped=true");


/***/ }),

/***/ "./resources/js/src/views/agreements/add.vue?vue&type=style&index=0&id=06beb576&scoped=true&lang=css":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/agreements/add.vue?vue&type=style&index=0&id=06beb576&scoped=true&lang=css ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_add_vue_vue_type_style_index_0_id_06beb576_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./add.vue?vue&type=style&index=0&id=06beb576&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/agreements/add.vue?vue&type=style&index=0&id=06beb576&scoped=true&lang=css");


/***/ })

}]);