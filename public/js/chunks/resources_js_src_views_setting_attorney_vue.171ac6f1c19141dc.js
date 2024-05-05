(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_setting_attorney_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/setting/attorney.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/setting/attorney.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var _composables_use_meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/composables/use-meta */ "./resources/js/src/composables/use-meta.js");
/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config/config.js */ "./resources/js/src/config/config.js");
/* harmony import */ var _router_loading_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/router/loading_router */ "./resources/js/src/router/loading_router.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.mjs");
/* harmony import */ var dropzone_dist_dropzone_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dropzone/dist/dropzone.css */ "./node_modules/dropzone/dist/dropzone.css");
/* harmony import */ var baguettebox_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! baguettebox.js */ "./node_modules/baguettebox.js/dist/baguetteBox.min.js");
/* harmony import */ var baguettebox_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(baguettebox_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var baguettebox_js_dist_baguetteBox_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! baguettebox.js/dist/baguetteBox.min.css */ "./node_modules/baguettebox.js/dist/baguetteBox.min.css");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'attorney',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;

    __expose();

    (0,_composables_use_meta__WEBPACK_IMPORTED_MODULE_1__.useMeta)({
      title: 'Setting - Attorney'
    });
    var token = localStorage.getItem('token'); // token

    var successMessage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var failedMessage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var fullAddressData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false); // assign parameters

    var errorMessage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var title = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var name = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var position = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var email = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var phone = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var id_type = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var id_number = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var nationality = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(''); // variable

    var provinces = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var cities = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var districts = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var subdistricts = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var data_province = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var data_city = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var data_district = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var data_subdistrict = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var data_postcode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var data_address = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var attachments = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var selectedProvince = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var selectedProvince_text = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var selectedCity = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var selectedCity_text = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var selectedDistrict = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var selectedDistrict_text = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var selectedSubDistrict = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var selectedSubDistrict_text = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var selectedAddress = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var selectedPostcode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(''); // upload images

    var dropzoneRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var fileInput = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var uploadedFiles = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var myDropzone;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      myDropzone = new dropzone__WEBPACK_IMPORTED_MODULE_4__["default"](dropzoneRef.value, {
        url: '/upload',
        autoProcessQueue: false,
        uploadMultiple: true,
        addRemoveLinks: true,
        renameFile: true,
        maxFiles: 1,
        acceptedFiles: 'image/*',
        init: function init() {
          this.on('addedfile', function (file) {
            if (!uploadedFiles.value.some(function (f) {
              return f.name === file.name;
            })) {
              uploadedFiles.value.push(file);
            }
          });
          this.on('removedfile', function (file) {
            var index = uploadedFiles.value.findIndex(function (f) {
              return f.name === file.name;
            });

            if (index !== -1) {
              uploadedFiles.value.splice(index, 1);
            }
          });
          this.on('complete', function (file) {
            this.removeFile(file);
          });
          this.on('error', function (file, errorMessage) {
            console.error('Error uploading file:', errorMessage);
          });
        }
      });
    });

    var removeFile = function removeFile(index) {
      myDropzone.removeFile(uploadedFiles.value[index]);
      uploadedFiles.value.splice(index, 1);
    }; // end upload images
    // start upload


    var submitForm = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var formData, response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                formData = new FormData();
                uploadedFiles.value.forEach(function (file) {
                  formData.append('files[]', file);
                });
                formData.append('title', title.value);
                formData.append('name', name.value);
                formData.append('position', name.value);
                formData.append('email', email.value);
                formData.append('phone', phone.value);
                formData.append('id_type', id_type.value);
                formData.append('id_number', id_number.value);
                formData.append('nationality', nationality.value);

                if (!selectedProvince_text.value && !selectedCity_text.value && !selectedDistrict_text.value && !selectedSubDistrict_text.value && !selectedAddress.value) {
                  formData.append('province', data_province.value);
                  formData.append('city', data_city.value);
                  formData.append('subdistrict', data_subdistrict.value);
                  formData.append('district', data_district.value);
                  formData.append('address', data_address.value);
                  formData.append('postcode', data_postcode.value);
                } else {
                  formData.append('province', selectedProvince_text.value);
                  formData.append('city', selectedCity_text.value);
                  formData.append('subdistrict', selectedDistrict_text.value);
                  formData.append('district', selectedSubDistrict_text.value);
                  formData.append('postcode', selectedPostcode.value);
                  formData.append('address', selectedAddress.value);
                }

                _context.prev = 11;
                loading.value = true;
                _context.next = 15;
                return axios__WEBPACK_IMPORTED_MODULE_8__["default"].post("".concat(_config_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].baseAPIURL, "attorney/update"), formData, {
                  headers: {
                    Authorization: "Bearer ".concat(token),
                    'Content-Type': 'multipart/form-data'
                  }
                });

              case 15:
                response = _context.sent;
                loading.value = false;

                if (response.data.message) {
                  successMessage.value = response.data.message;
                  failedMessage.value = '';
                }

                _context.next = 24;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context["catch"](11);
                loading.value = false;

                if (_context.t0.response && _context.t0.response.data && _context.t0.response.data.message) {
                  failedMessage.value = _context.t0.response.data.message;
                  successMessage.value = '';
                } else {
                  console.error('Error submitting form:', _context.t0);
                }

              case 24:
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[11, 20]]);
      }));

      return function submitForm() {
        return _ref2.apply(this, arguments);
      };
    }(); // end form submit
    // edit mode address


    var isEditMode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);

    var toggleEditMode = function toggleEditMode() {
      isEditMode.value = !isEditMode.value;
    }; // end edit mode address


    var fetchCities = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                selectedProvince_text.value = event.target.options[event.target.selectedIndex].text;
                _context2.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_8__["default"].get("".concat(_config_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].baseAPIURL, "zone/city/").concat(selectedProvince.value), {
                  headers: {
                    Authorization: "Bearer ".concat(token)
                  }
                });

              case 4:
                response = _context2.sent;
                cities.value = response.data;
                selectedCity.value = '';
                selectedDistrict.value = '';
                selectedSubDistrict.value = '';
                selectedPostcode.value = '';
                _context2.next = 15;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 12]]);
      }));

      return function fetchCities(_x) {
        return _ref3.apply(this, arguments);
      };
    }();

    var fetchDistricts = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(event) {
        var response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                selectedCity_text.value = event.target.options[event.target.selectedIndex].text;
                _context3.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_8__["default"].get("".concat(_config_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].baseAPIURL, "zone/district/").concat(selectedCity.value), {
                  headers: {
                    Authorization: "Bearer ".concat(token)
                  }
                });

              case 4:
                response = _context3.sent;
                districts.value = response.data;
                selectedDistrict.value = '';
                selectedSubDistrict.value = '';
                selectedPostcode.value = '';
                _context3.next = 14;
                break;

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);
                console.error(_context3.t0);

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 11]]);
      }));

      return function fetchDistricts(_x2) {
        return _ref4.apply(this, arguments);
      };
    }();

    var fetchSubdistricts = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(event) {
        var response;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                selectedDistrict_text.value = event.target.options[event.target.selectedIndex].text;
                _context4.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_8__["default"].get("".concat(_config_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].baseAPIURL, "zone/subdistrict/").concat(selectedDistrict.value), {
                  headers: {
                    Authorization: "Bearer ".concat(token)
                  }
                });

              case 4:
                response = _context4.sent;
                subdistricts.value = response.data;
                selectedSubDistrict.value = '';
                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);
                console.error(_context4.t0);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 9]]);
      }));

      return function fetchSubdistricts(_x3) {
        return _ref5.apply(this, arguments);
      };
    }();

    var fetchPostcode = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(event) {
        var response;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                selectedSubDistrict_text.value = event.target.options[event.target.selectedIndex].text;
                _context5.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_8__["default"].get("".concat(_config_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].baseAPIURL, "zone/postcode/").concat(selectedSubDistrict.value), {
                  headers: {
                    Authorization: "Bearer ".concat(token)
                  }
                });

              case 4:
                response = _context5.sent;
                selectedPostcode.value = '';
                if (response.data.pos == 'NULL') selectedPostcode.value = "";else selectedPostcode.value = response.data.pos;
                _context5.next = 12;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
                console.error(_context5.t0);

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 9]]);
      }));

      return function fetchPostcode(_x4) {
        return _ref6.apply(this, arguments);
      };
    }();

    function getImageUrl(imageName) {
      return __webpack_require__("./resources/js/src/assets/images sync recursive ^\\.\\/.*$")("./".concat(imageName));
    }

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var response, _response, attorneyData, addressObject;

      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_8__["default"].get("".concat(_config_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].baseAPIURL, "zone/province"), {
                headers: {
                  Authorization: "Bearer ".concat(token)
                }
              });

            case 3:
              response = _context6.sent;
              provinces.value = response.data;
              _context6.next = 10;
              break;

            case 7:
              _context6.prev = 7;
              _context6.t0 = _context6["catch"](0);
              console.error(_context6.t0);

            case 10:
              _context6.prev = 10;
              _context6.next = 13;
              return axios__WEBPACK_IMPORTED_MODULE_8__["default"].get("".concat(_config_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].baseAPIURL, "attorney"), {
                headers: {
                  Authorization: "Bearer ".concat(token)
                }
              });

            case 13:
              _response = _context6.sent;
              attorneyData = _response.data.data;
              title.value = attorneyData.title;
              name.value = attorneyData.name;
              email.value = attorneyData.email;
              phone.value = attorneyData.phone;
              id_type.value = attorneyData.id_type;
              id_number.value = attorneyData.id_number;
              nationality.value = attorneyData.nationality;
              attachments.value = _response.data.attachment_urls;
              addressObject = JSON.parse(attorneyData.address);
              data_province.value = addressObject.province;
              data_city.value = addressObject.city;
              data_district.value = addressObject.district;
              data_subdistrict.value = addressObject.subdistrict;
              data_postcode.value = addressObject.postcode;
              data_address.value = addressObject.street_address;
              attachments.value.forEach(function (filePath) {
                var file = {
                  name: filePath.split('/').pop(),
                  size: 0,
                  url: "".concat(_config_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].baseAPIURL, "storage/uploads/").concat(filePath.split('/').pop())
                };
                var imgElement = document.createElement('img');
                imgElement.setAttribute('src', file.url);
                var imageLink = document.createElement('a');
                imageLink.setAttribute('href', file.url);
                imageLink.setAttribute('data-baguettebox', 'gallery');
                imageLink.appendChild(imgElement);
                var removeLink = document.createElement('a');
                removeLink.setAttribute('href', 'javascript:void(0)');
                removeLink.className = 'dz-remove';
                removeLink.textContent = 'Remove file';
                removeLink.addEventListener('click', function () {
                  var index = myDropzone.files.findIndex(function (f) {
                    return f.url === file.url;
                  });

                  if (index !== -1) {
                    myDropzone.files.splice(index, 1);
                    dzPreviewDiv.remove();
                  }
                });
                var dzImageDiv = document.createElement('div');
                dzImageDiv.className = 'dz-image';
                dzImageDiv.appendChild(imageLink);
                var dzPreviewDiv = document.createElement('div');
                dzPreviewDiv.className = 'dz-preview dz-image-preview';
                dzPreviewDiv.appendChild(dzImageDiv);
                dzPreviewDiv.appendChild(removeLink);
                myDropzone.element.appendChild(dzPreviewDiv);
                myDropzone.files.push(file);
              });
              baguettebox_js__WEBPACK_IMPORTED_MODULE_6___default().run('.dz-image a[data-baguettebox="gallery"]');
              _context6.next = 37;
              break;

            case 34:
              _context6.prev = 34;
              _context6.t1 = _context6["catch"](10);
              errorMessage.value = _context6.t1.response.data.message;

            case 37:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 7], [10, 34]]);
    })));
    var __returned__ = {
      token: token,
      successMessage: successMessage,
      failedMessage: failedMessage,
      fullAddressData: fullAddressData,
      loading: loading,
      errorMessage: errorMessage,
      title: title,
      name: name,
      position: position,
      email: email,
      phone: phone,
      id_type: id_type,
      id_number: id_number,
      nationality: nationality,
      provinces: provinces,
      cities: cities,
      districts: districts,
      subdistricts: subdistricts,
      data_province: data_province,
      data_city: data_city,
      data_district: data_district,
      data_subdistrict: data_subdistrict,
      data_postcode: data_postcode,
      data_address: data_address,
      attachments: attachments,
      selectedProvince: selectedProvince,
      selectedProvince_text: selectedProvince_text,
      selectedCity: selectedCity,
      selectedCity_text: selectedCity_text,
      selectedDistrict: selectedDistrict,
      selectedDistrict_text: selectedDistrict_text,
      selectedSubDistrict: selectedSubDistrict,
      selectedSubDistrict_text: selectedSubDistrict_text,
      selectedAddress: selectedAddress,
      selectedPostcode: selectedPostcode,
      dropzoneRef: dropzoneRef,
      fileInput: fileInput,
      uploadedFiles: uploadedFiles,

      get myDropzone() {
        return myDropzone;
      },

      set myDropzone(v) {
        myDropzone = v;
      },

      removeFile: removeFile,
      submitForm: submitForm,
      isEditMode: isEditMode,
      toggleEditMode: toggleEditMode,
      fetchCities: fetchCities,
      fetchDistricts: fetchDistricts,
      fetchSubdistricts: fetchSubdistricts,
      fetchPostcode: fetchPostcode,
      getImageUrl: getImageUrl,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,

      get axios() {
        return axios__WEBPACK_IMPORTED_MODULE_8__["default"];
      },

      get useRouter() {
        return vue_router__WEBPACK_IMPORTED_MODULE_9__.useRouter;
      },

      get useMeta() {
        return _composables_use_meta__WEBPACK_IMPORTED_MODULE_1__.useMeta;
      },

      get config() {
        return _config_config_js__WEBPACK_IMPORTED_MODULE_2__["default"];
      },

      get isLoading() {
        return _router_loading_router__WEBPACK_IMPORTED_MODULE_3__.isLoading;
      },

      get Dropzone() {
        return dropzone__WEBPACK_IMPORTED_MODULE_4__["default"];
      },

      get baguetteBox() {
        return (baguettebox_js__WEBPACK_IMPORTED_MODULE_6___default());
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/setting/attorney.vue?vue&type=template&id=4d42f247":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/setting/attorney.vue?vue&type=template&id=4d42f247 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "layout-px-spacing"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
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
}, "Setting")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "breadcrumb-item active",
  "aria-current": "page"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Attorney")])])])])])], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "row layout-top-spacing"
};
var _hoisted_4 = {
  "class": "col-xl-12 col-lg-12 col-sm-12 layout-spacing"
};
var _hoisted_5 = {
  "class": "panel br-6 p-0"
};
var _hoisted_6 = {
  id: "flFormsGrid",
  "class": "col-lg-12"
};
var _hoisted_7 = {
  "class": "statbox panel box box-shadow"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge-title badge badge-dark badge-classic"
}, "attorney")])], -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "panel-body"
};
var _hoisted_10 = {
  key: 0,
  "class": "alert alert-light-primary alert-dismissible border-0 mb-4"
};
var _hoisted_11 = {
  key: 1,
  "class": "alert alert-danger alert-dismissible border-0 mb-4"
};
var _hoisted_12 = {
  key: 0,
  "class": "alert alert-danger"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"panel-heading\"><div class=\"row\"><div class=\"col-xl-12 col-md-12 col-sm-12 col-12 ps-0\"><h4 class=\"text-decoration-underline\">General</h4></div></div></div></div>", 1);

var _hoisted_14 = {
  "class": "row"
};
var _hoisted_15 = {
  "class": "form-group col-md-6"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "inputTitle"
}, "Title", -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Bapak"
}, "Bapak", -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Ibu"
}, "Ibu", -1
/* HOISTED */
);

var _hoisted_19 = [_hoisted_17, _hoisted_18];
var _hoisted_20 = {
  "class": "form-group col-md-6"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "inputName"
}, "Name", -1
/* HOISTED */
);

var _hoisted_22 = {
  "class": "row"
};
var _hoisted_23 = {
  "class": "form-group col-md-6"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "inputEmail"
}, "Email", -1
/* HOISTED */
);

var _hoisted_25 = {
  "class": "form-group col-md-6"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "inputTelephone"
}, "Telephone", -1
/* HOISTED */
);

var _hoisted_27 = {
  "class": "row"
};

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"row\"><div class=\"panel-heading\"><div class=\"row\"><div class=\"col-xl-12 col-md-12 col-sm-12 col-12 ps-0\"><h4 class=\"text-decoration-underline\">Identity</h4></div></div></div></div>", 1);

var _hoisted_29 = {
  "class": "form-group col-md-4"
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "inputIdType"
}, "ID Type", -1
/* HOISTED */
);

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "KTP"
}, "KTP", -1
/* HOISTED */
);

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "Passport"
}, "Passport", -1
/* HOISTED */
);

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "NPWP"
}, "NPWP", -1
/* HOISTED */
);

var _hoisted_34 = [_hoisted_31, _hoisted_32, _hoisted_33];
var _hoisted_35 = {
  "class": "form-group col-md-4"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "inputIdNumber"
}, "ID Number", -1
/* HOISTED */
);

var _hoisted_37 = {
  "class": "form-group col-md-4"
};

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "inputIdNationality"
}, "Nationality", -1
/* HOISTED */
);

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "WNI"
}, "WNI", -1
/* HOISTED */
);

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "WNA"
}, "WNA", -1
/* HOISTED */
);

var _hoisted_41 = [_hoisted_39, _hoisted_40];

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "text-decoration-underline d-inline"
}, "Address", -1
/* HOISTED */
);

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_44 = {
  key: 1
};
var _hoisted_45 = {
  "class": "row"
};
var _hoisted_46 = {
  "class": "form-group col-md-6"
};

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "",
  disabled: "",
  selected: ""
}, "Select Province", -1
/* HOISTED */
);

var _hoisted_48 = ["value"];

var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  id: "sh-text1",
  "class": "block text-muted"
}, "Province", -1
/* HOISTED */
);

var _hoisted_50 = {
  "class": "form-group col-md-6"
};
var _hoisted_51 = ["disabled"];

var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "",
  selected: ""
}, "Select City", -1
/* HOISTED */
);

var _hoisted_53 = ["value"];

var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  id: "sh-text1",
  "class": "block text-muted"
}, "City", -1
/* HOISTED */
);

var _hoisted_55 = {
  "class": "row"
};
var _hoisted_56 = {
  "class": "form-group col-md-4"
};
var _hoisted_57 = ["disabled"];

var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "",
  selected: ""
}, "Select district", -1
/* HOISTED */
);

var _hoisted_59 = ["value"];

var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  id: "sh-text1",
  "class": "block text-muted"
}, "District", -1
/* HOISTED */
);

var _hoisted_61 = {
  "class": "form-group col-md-4"
};
var _hoisted_62 = ["disabled"];

var _hoisted_63 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
  value: "",
  selected: ""
}, "Select subdistrict", -1
/* HOISTED */
);

var _hoisted_64 = ["value"];

var _hoisted_65 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  id: "sh-text1",
  "class": "block text-muted"
}, "Subdistrict", -1
/* HOISTED */
);

var _hoisted_66 = {
  "class": "form-group col-md-4"
};
var _hoisted_67 = ["disabled"];

var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  id: "sh-text1",
  "class": "block text-muted"
}, "Postcode", -1
/* HOISTED */
);

var _hoisted_69 = {
  "class": "row"
};
var _hoisted_70 = {
  "class": "form-group col-md-12"
};
var _hoisted_71 = ["disabled"];

var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  id: "sh-text1",
  "class": "block text-muted"
}, "Address", -1
/* HOISTED */
);

var _hoisted_73 = {
  key: 2
};
var _hoisted_74 = {
  "class": "row"
};
var _hoisted_75 = {
  "class": "form-group col-md-6"
};

var _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  id: "sh-text1",
  "class": "block text-muted"
}, "Province", -1
/* HOISTED */
);

var _hoisted_77 = {
  "class": "form-group col-md-6"
};

var _hoisted_78 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  id: "sh-text1",
  "class": "block text-muted"
}, "City", -1
/* HOISTED */
);

var _hoisted_79 = {
  "class": "row"
};
var _hoisted_80 = {
  "class": "form-group col-md-4"
};

var _hoisted_81 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  id: "sh-text1",
  "class": "block text-muted"
}, "District", -1
/* HOISTED */
);

var _hoisted_82 = {
  "class": "form-group col-md-4"
};

var _hoisted_83 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  id: "sh-text1",
  "class": "block text-muted"
}, "Subdistrict", -1
/* HOISTED */
);

var _hoisted_84 = {
  "class": "form-group col-md-4"
};

var _hoisted_85 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  id: "sh-text1",
  "class": "block text-muted"
}, "Postcode", -1
/* HOISTED */
);

var _hoisted_86 = {
  "class": "row"
};
var _hoisted_87 = {
  "class": "form-group col-md-12"
};

var _hoisted_88 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", {
  id: "sh-text1",
  "class": "block text-muted"
}, "Address", -1
/* HOISTED */
);

var _hoisted_89 = {
  "class": "row"
};

var _hoisted_90 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "panel-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12 ps-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "text-decoration-underline"
}, "Documents")])])], -1
/* HOISTED */
);

var _hoisted_91 = {
  "class": "row"
};
var _hoisted_92 = {
  "class": "col-md-12 col-sm-12 col-12 ps-0"
};
var _hoisted_93 = {
  "class": "dropzone",
  ref: "dropzoneRef"
};
var _hoisted_94 = {
  "class": "fallback"
};
var _hoisted_95 = {
  ref: "fileInput",
  type: "file",
  multiple: ""
};

var _hoisted_96 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dz-message"
}, " Drag files here or click to upload. ", -1
/* HOISTED */
);

var _hoisted_97 = {
  "class": "row mt-2"
};
var _hoisted_98 = {
  "class": "col-xl-12 col-md-12 col-sm-12 col-12 ps-0"
};
var _hoisted_99 = {
  key: 0,
  type: "submit",
  "class": "btn btn-primary"
};
var _hoisted_100 = {
  key: 1,
  type: "button",
  "class": "btn btn-danger btn-lg mb-3 me-3",
  disabled: ""
};

var _hoisted_101 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "spinner-border text-white me-2 align-self-center loader-sm"
}, "Loading...", -1
/* HOISTED */
);

var _hoisted_102 = {
  key: 0,
  "class": "loading-overlay"
};

var _hoisted_103 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "spinner-border text-success align-self-center"
}, "Loading...", -1
/* HOISTED */
);

var _hoisted_104 = [_hoisted_103];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [$setup.successMessage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.successMessage), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.failedMessage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.failedMessage), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submitForm, ["prevent"])
  }, [$setup.errorMessage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.errorMessage), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "title",
    "class": "form-select",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.title = $event;
    }),
    required: "required"
  }, [].concat(_hoisted_19), 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.title]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    id: "inputClientCode",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.name = $event;
    }),
    placeholder: "Name",
    required: "required"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.name]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    "class": "form-control",
    id: "inputEmail",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.email = $event;
    }),
    placeholder: "Email",
    required: "required"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.email]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    id: "inputTelephone",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.phone = $event;
    }),
    placeholder: "Telephone",
    required: "required"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.phone]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [_hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "id_type",
    "class": "form-select",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.id_type = $event;
    }),
    required: "required"
  }, [].concat(_hoisted_34), 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.id_type]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    id: "inputIdNumber",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.id_number = $event;
    }),
    placeholder: "ID Number",
    required: "required"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.id_number]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [_hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "nationality",
    "class": "form-select",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.nationality = $event;
    }),
    required: "required"
  }, [].concat(_hoisted_41), 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.nationality]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "panel-heading"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "row"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "col-xl-12 col-md-12 col-sm-12 col-12 ps-0 d-inline"
  }, [_hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "expand_collapse text-white badge badge-primary d-inline align-middle ms-2",
    onClick: $setup.toggleEditMode
  }, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" edit ")])])])])]), $setup.isEditMode ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control",
    id: "inputProvince",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $setup.selectedProvince = $event;
    }),
    onChange: $setup.fetchCities,
    required: "required"
  }, [_hoisted_47, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.provinces, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: item.id,
      value: item.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 9
    /* TEXT, PROPS */
    , _hoisted_48);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 544
  /* NEED_HYDRATION, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.selectedProvince]]), _hoisted_49]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control",
    id: "inputCity",
    disabled: !$setup.selectedProvince,
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $setup.selectedCity = $event;
    }),
    onChange: $setup.fetchDistricts,
    required: "required"
  }, [_hoisted_52, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.cities, function (value, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: key,
      key: key
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(value), 9
    /* TEXT, PROPS */
    , _hoisted_53);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 40
  /* PROPS, NEED_HYDRATION */
  , _hoisted_51), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.selectedCity]]), _hoisted_54])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control",
    id: "inputDistrict",
    disabled: !$setup.selectedCity,
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $setup.selectedDistrict = $event;
    }),
    onChange: $setup.fetchSubdistricts,
    required: "required"
  }, [_hoisted_58, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.districts, function (value, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: key,
      key: key
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(value), 9
    /* TEXT, PROPS */
    , _hoisted_59);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 40
  /* PROPS, NEED_HYDRATION */
  , _hoisted_57), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.selectedDistrict]]), _hoisted_60]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control",
    id: "inputSubdistrict",
    disabled: !$setup.selectedDistrict,
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $setup.selectedSubDistrict = $event;
    }),
    onChange: $setup.fetchPostcode,
    required: "required"
  }, [_hoisted_63, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.subdistricts, function (value, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: key,
      key: key
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(value), 9
    /* TEXT, PROPS */
    , _hoisted_64);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 40
  /* PROPS, NEED_HYDRATION */
  , _hoisted_62), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.selectedSubDistrict]]), _hoisted_65]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    id: "inputPostcode",
    disabled: !$setup.selectedDistrict,
    "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
      return $setup.selectedPostcode = $event;
    }),
    placeholder: "Postcode"
  }, null, 8
  /* PROPS */
  , _hoisted_67), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.selectedPostcode]]), _hoisted_68])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    id: "inputAddress",
    disabled: !$setup.selectedDistrict,
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $setup.selectedAddress = $event;
    }),
    placeholder: "Address",
    required: "required"
  }, null, 8
  /* PROPS */
  , _hoisted_71), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.selectedAddress]]), _hoisted_72])])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    id: "inputProvince",
    "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
      return $setup.data_province = $event;
    }),
    readonly: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.data_province]]), _hoisted_76]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    id: "inputCity",
    "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
      return $setup.data_city = $event;
    }),
    readonly: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.data_city]]), _hoisted_78])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    id: "inputDistrict",
    "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
      return $setup.data_district = $event;
    }),
    readonly: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.data_district]]), _hoisted_81]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    id: "inputSubdistrict",
    "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
      return $setup.data_subdistrict = $event;
    }),
    readonly: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.data_subdistrict]]), _hoisted_83]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    id: "inputPostcode",
    "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
      return $setup.data_postcode = $event;
    }),
    readonly: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.data_postcode]]), _hoisted_85])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_86, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_87, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control",
    id: "inputAddress",
    "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
      return $setup.data_address = $event;
    }),
    readonly: "readonly"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.data_address]]), _hoisted_88])])])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_89, [_hoisted_90, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_91, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_92, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_93, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_94, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", _hoisted_95, null, 512
  /* NEED_PATCH */
  )]), _hoisted_96], 512
  /* NEED_PATCH */
  )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_97, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_98, [!$setup.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_99, "Save")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_100, [_hoisted_101, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Loading")]))])])], 32
  /* NEED_HYDRATION */
  )])])])])])]), $setup.isLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_102, [].concat(_hoisted_104))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./resources/js/src/router/loading_router.js":
/*!***************************************************!*\
  !*** ./resources/js/src/router/loading_router.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isLoading": () => (/* binding */ isLoading),
/* harmony export */   "router": () => (/* binding */ router)
/* harmony export */ });
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
// router.js

var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_0__.createRouter)({
  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_0__.createWebHistory)(),
  routes: [// Daftar rute Anda di sini
  ]
}); // Gunakan reactive untuk nilai loading


var isLoading = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
router.beforeEach(function (to, from, next) {
  isLoading.value = true;
  next();
});
router.afterEach(function () {
  isLoading.value = false;
});


/***/ }),

/***/ "./node_modules/baguettebox.js/dist/baguetteBox.min.js":
/*!*************************************************************!*\
  !*** ./node_modules/baguettebox.js/dist/baguetteBox.min.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * baguetteBox.js
 * @author  feimosi
 * @version 1.11.1
 * @url https://github.com/feimosi/baguetteBox.js
 */
!function(e,t){"use strict"; true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}(this,function(){"use strict";var r,l,u,c,d,f='<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',g='<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',p='<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>',b={},v={captions:!0,buttons:"auto",fullScreen:!1,noScrollbars:!1,bodyClass:"baguetteBox-open",titleTag:!1,async:!1,preload:2,animation:"slideIn",afterShow:null,afterHide:null,onChange:null,overlayBackgroundColor:"rgba(0,0,0,.8)"},m={},h=[],o=0,n=!1,i={},a=!1,y=/.+\.(gif|jpe?g|png|webp)/i,w={},k=[],s=null,x=function(e){-1!==e.target.id.indexOf("baguette-img")&&j()},E=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,D()},C=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,X()},B=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,j()},T=function(e){i.count++,1<i.count&&(i.multitouch=!0),i.startX=e.changedTouches[0].pageX,i.startY=e.changedTouches[0].pageY},N=function(e){if(!a&&!i.multitouch){e.preventDefault?e.preventDefault():e.returnValue=!1;var t=e.touches[0]||e.changedTouches[0];40<t.pageX-i.startX?(a=!0,D()):t.pageX-i.startX<-40?(a=!0,X()):100<i.startY-t.pageY&&j()}},L=function(){i.count--,i.count<=0&&(i.multitouch=!1),a=!1},A=function(){L()},P=function(e){"block"===r.style.display&&r.contains&&!r.contains(e.target)&&(e.stopPropagation(),Y())};function S(e){if(w.hasOwnProperty(e)){var t=w[e].galleries;[].forEach.call(t,function(e){[].forEach.call(e,function(e){W(e.imageElement,"click",e.eventHandler)}),h===e&&(h=[])}),delete w[e]}}function F(e){switch(e.keyCode){case 37:D();break;case 39:X();break;case 27:j();break;case 36:!function t(e){e&&e.preventDefault();return M(0)}(e);break;case 35:!function n(e){e&&e.preventDefault();return M(h.length-1)}(e)}}function H(e,t){if(h!==e){for(h=e,function s(e){e=e||{};for(var t in v)b[t]=v[t],"undefined"!=typeof e[t]&&(b[t]=e[t]);l.style.transition=l.style.webkitTransition="fadeIn"===b.animation?"opacity .4s ease":"slideIn"===b.animation?"":"none","auto"===b.buttons&&("ontouchstart"in window||1===h.length)&&(b.buttons=!1);u.style.display=c.style.display=b.buttons?"":"none";try{r.style.backgroundColor=b.overlayBackgroundColor}catch(n){}}(t);l.firstChild;)l.removeChild(l.firstChild);for(var n,o=[],i=[],a=k.length=0;a<e.length;a++)(n=J("div")).className="full-image",n.id="baguette-img-"+a,k.push(n),o.push("baguetteBox-figure-"+a),i.push("baguetteBox-figcaption-"+a),l.appendChild(k[a]);r.setAttribute("aria-labelledby",o.join(" ")),r.setAttribute("aria-describedby",i.join(" "))}}function I(e){b.noScrollbars&&(document.documentElement.style.overflowY="hidden",document.body.style.overflowY="scroll"),"block"!==r.style.display&&(U(document,"keydown",F),i={count:0,startX:null,startY:null},q(o=e,function(){z(o),V(o)}),R(),r.style.display="block",b.fullScreen&&function t(){r.requestFullscreen?r.requestFullscreen():r.webkitRequestFullscreen?r.webkitRequestFullscreen():r.mozRequestFullScreen&&r.mozRequestFullScreen()}(),setTimeout(function(){r.className="visible",b.bodyClass&&document.body.classList&&document.body.classList.add(b.bodyClass),b.afterShow&&b.afterShow()},50),b.onChange&&b.onChange(o,k.length),s=document.activeElement,Y(),n=!0)}function Y(){b.buttons?u.focus():d.focus()}function j(){b.noScrollbars&&(document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto"),"none"!==r.style.display&&(W(document,"keydown",F),r.className="",setTimeout(function(){r.style.display="none",document.fullscreen&&function e(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}(),b.bodyClass&&document.body.classList&&document.body.classList.remove(b.bodyClass),b.afterHide&&b.afterHide(),s&&s.focus(),n=!1},500))}function q(t,n){var e=k[t],o=h[t];if(void 0!==e&&void 0!==o)if(e.getElementsByTagName("img")[0])n&&n();else{var i=o.imageElement,a=i.getElementsByTagName("img")[0],s="function"==typeof b.captions?b.captions.call(h,i):i.getAttribute("data-caption")||i.title,r=function d(e){var t=e.href;if(e.dataset){var n=[];for(var o in e.dataset)"at-"!==o.substring(0,3)||isNaN(o.substring(3))||(n[o.replace("at-","")]=e.dataset[o]);for(var i=Object.keys(n).sort(function(e,t){return parseInt(e,10)<parseInt(t,10)?-1:1}),a=window.innerWidth*window.devicePixelRatio,s=0;s<i.length-1&&i[s]<a;)s++;t=n[i[s]]||t}return t}(i),l=J("figure");if(l.id="baguetteBox-figure-"+t,l.innerHTML='<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>',b.captions&&s){var u=J("figcaption");u.id="baguetteBox-figcaption-"+t,u.innerHTML=s,l.appendChild(u)}e.appendChild(l);var c=J("img");c.onload=function(){var e=document.querySelector("#baguette-img-"+t+" .baguetteBox-spinner");l.removeChild(e),!b.async&&n&&n()},c.setAttribute("src",r),c.alt=a&&a.alt||"",b.titleTag&&s&&(c.title=s),l.appendChild(c),b.async&&n&&n()}}function X(){return M(o+1)}function D(){return M(o-1)}function M(e,t){return!n&&0<=e&&e<t.length?(H(t,b),I(e),!0):e<0?(b.animation&&O("left"),!1):e>=k.length?(b.animation&&O("right"),!1):(q(o=e,function(){z(o),V(o)}),R(),b.onChange&&b.onChange(o,k.length),!0)}function O(e){l.className="bounce-from-"+e,setTimeout(function(){l.className=""},400)}function R(){var e=100*-o+"%";"fadeIn"===b.animation?(l.style.opacity=0,setTimeout(function(){m.transforms?l.style.transform=l.style.webkitTransform="translate3d("+e+",0,0)":l.style.left=e,l.style.opacity=1},400)):m.transforms?l.style.transform=l.style.webkitTransform="translate3d("+e+",0,0)":l.style.left=e}function z(e){e-o>=b.preload||q(e+1,function(){z(e+1)})}function V(e){o-e>=b.preload||q(e-1,function(){V(e-1)})}function U(e,t,n,o){e.addEventListener?e.addEventListener(t,n,o):e.attachEvent("on"+t,function(e){(e=e||window.event).target=e.target||e.srcElement,n(e)})}function W(e,t,n,o){e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent("on"+t,n)}function G(e){return document.getElementById(e)}function J(e){return document.createElement(e)}return[].forEach||(Array.prototype.forEach=function(e,t){for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),[].filter||(Array.prototype.filter=function(e,t,n,o,i){for(n=this,o=[],i=0;i<n.length;i++)e.call(t,n[i],i,n)&&o.push(n[i]);return o}),{run:function K(e,t){return m.transforms=function n(){var e=J("div");return"undefined"!=typeof e.style.perspective||"undefined"!=typeof e.style.webkitPerspective}(),m.svg=function o(){var e=J("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"===(e.firstChild&&e.firstChild.namespaceURI)}(),m.passiveEvents=function i(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(n){}return e}(),function a(){if(r=G("baguetteBox-overlay"))return l=G("baguetteBox-slider"),u=G("previous-button"),c=G("next-button"),void(d=G("close-button"));(r=J("div")).setAttribute("role","dialog"),r.id="baguetteBox-overlay",document.getElementsByTagName("body")[0].appendChild(r),(l=J("div")).id="baguetteBox-slider",r.appendChild(l),(u=J("button")).setAttribute("type","button"),u.id="previous-button",u.setAttribute("aria-label","Previous"),u.innerHTML=m.svg?f:"&lt;",r.appendChild(u),(c=J("button")).setAttribute("type","button"),c.id="next-button",c.setAttribute("aria-label","Next"),c.innerHTML=m.svg?g:"&gt;",r.appendChild(c),(d=J("button")).setAttribute("type","button"),d.id="close-button",d.setAttribute("aria-label","Close"),d.innerHTML=m.svg?p:"&times;",r.appendChild(d),u.className=c.className=d.className="baguetteBox-button",function n(){var e=m.passiveEvents?{passive:!1}:null,t=m.passiveEvents?{passive:!0}:null;U(r,"click",x),U(u,"click",E),U(c,"click",C),U(d,"click",B),U(l,"contextmenu",A),U(r,"touchstart",T,t),U(r,"touchmove",N,e),U(r,"touchend",L),U(document,"focus",P,!0)}()}(),S(e),function s(e,a){var t=document.querySelectorAll(e),n={galleries:[],nodeList:t};return w[e]=n,[].forEach.call(t,function(e){a&&a.filter&&(y=a.filter);var t=[];if(t="A"===e.tagName?[e]:e.getElementsByTagName("a"),0!==(t=[].filter.call(t,function(e){if(-1===e.className.indexOf(a&&a.ignoreClass))return y.test(e.href)})).length){var i=[];[].forEach.call(t,function(e,t){var n=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,H(i,a),I(t)},o={eventHandler:n,imageElement:e};U(e,"click",n),i.push(o)}),n.galleries.push(i)}}),n.galleries}(e,t)},show:M,showNext:X,showPrevious:D,hide:j,destroy:function e(){!function n(){var e=m.passiveEvents?{passive:!1}:null,t=m.passiveEvents?{passive:!0}:null;W(r,"click",x),W(u,"click",E),W(c,"click",C),W(d,"click",B),W(l,"contextmenu",A),W(r,"touchstart",T,t),W(r,"touchmove",N,e),W(r,"touchend",L),W(document,"focus",P,!0)}(),function t(){for(var e in w)w.hasOwnProperty(e)&&S(e)}(),W(document,"keydown",F),document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")),w={},h=[],o=0}}});

/***/ }),

/***/ "./resources/js/src/assets/images/1.jpeg":
/*!***********************************************!*\
  !*** ./resources/js/src/assets/images/1.jpeg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "/images/1-a080a7f9eb66a38e9a743a83d73bc4a9.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/2.jpg":
/*!**********************************************!*\
  !*** ./resources/js/src/assets/images/2.jpg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "/images/2-6164a93971d43388ae96086025483860.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/3.jpeg":
/*!***********************************************!*\
  !*** ./resources/js/src/assets/images/3.jpeg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "/images/3-94fefea456f1f8eec6ab44de06e4f2b0.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/ab-1.jpeg":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/ab-1.jpeg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/ab-1-f76d20289d31c7855a30c6beef0f110e.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/arrow-down.png":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/arrow-down.png ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/arrow-down-6e28c00974a9f0162a4537313d280f2d.png";

/***/ }),

/***/ "./resources/js/src/assets/images/bg.png":
/*!***********************************************!*\
  !*** ./resources/js/src/assets/images/bg.png ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "/images/bg-bc33c69023a3b8c24ec178f8f9cf0727.png";

/***/ }),

/***/ "./resources/js/src/assets/images/boy-1.png":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/boy-1.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/boy-1-53c544afe5a0a1aaa0daa30a07456756.png";

/***/ }),

/***/ "./resources/js/src/assets/images/boy-2.png":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/boy-2.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/boy-2-96e049f9116c570e0d5f7efc6b95adee.png";

/***/ }),

/***/ "./resources/js/src/assets/images/boy.png":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/boy.png ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/boy-27753654bafbb25eb114093e19fcbfb6.png";

/***/ }),

/***/ "./resources/js/src/assets/images/contact-us-map-pin.svg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/contact-us-map-pin.svg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "/images/contact-us-map-pin-5f681666850dcf169e8a3287e7502dee.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/cork-logo.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/cork-logo.png ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/cork-logo-21142feea95359d716b06f39abd00112.png";

/***/ }),

/***/ "./resources/js/src/assets/images/delete-user-11.jpeg":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/delete-user-11.jpeg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "/images/delete-user-11-7e3615a862613ff94b8fceb1909991ad.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/delete-user-12.jpeg":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/delete-user-12.jpeg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "/images/delete-user-12-0e18482b4e9eb73bded410ab963cf344.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/delete-user-15.jpeg":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/delete-user-15.jpeg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "/images/delete-user-15-a7de86fcceaab8853231b08234536c9e.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/delete-user-16.jpeg":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/delete-user-16.jpeg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "/images/delete-user-16-b1c443ea0275f7d829d08b5219d64f60.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/delete-user-17.jpeg":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/delete-user-17.jpeg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "/images/delete-user-17-614b919a7b457a2d1e301e006e84de0d.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/delete-user-4.jpeg":
/*!***********************************************************!*\
  !*** ./resources/js/src/assets/images/delete-user-4.jpeg ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "/images/delete-user-4-a7a7099a65307fdaaf37259542bc152d.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/drag-1.jpeg":
/*!****************************************************!*\
  !*** ./resources/js/src/assets/images/drag-1.jpeg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "/images/drag-1-34fbae9ceaed6d5e5c054c90d9b57c6c.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/drag-2.jpeg":
/*!****************************************************!*\
  !*** ./resources/js/src/assets/images/drag-2.jpeg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "/images/drag-2-c651fd792a65c6dba42f0b515e91116d.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/drag-4.jpg":
/*!***************************************************!*\
  !*** ./resources/js/src/assets/images/drag-4.jpg ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/drag-4-f5c9dcedeeff8a69d5af37f41eb55708.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/dragp-1.jpeg":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/dragp-1.jpeg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/dragp-1-c87ba41b8a029bac4e55b09f49233850.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/dragp-4.jpeg":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/dragp-4.jpeg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/dragp-4-aecf5b0b8744c049e7efc6f22c940ca6.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/dragp-6.jpeg":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/dragp-6.jpeg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/dragp-6-edab66c6391a0cb0989bbc7d00def25d.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/dragp-7.jpeg":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/dragp-7.jpeg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/dragp-7-9e6e9718926cb5fddc4f57627fca2d63.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/example.png":
/*!****************************************************!*\
  !*** ./resources/js/src/assets/images/example.png ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "/images/example-4af478d2dce8c0e2c3b11a67ddc023b0.png";

/***/ }),

/***/ "./resources/js/src/assets/images/faq.svg":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/faq.svg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/faq-33762470b9228292d59d83d7c59197ef.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/features_overview.svg":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/features_overview.svg ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "/images/features_overview-71862ac4115d9b272d6c0bf32e4d6943.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/file-preview.png":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/images/file-preview.png ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "/images/file-preview-2e32eeb4e07ef1e3ea1d2bdca01064da.png";

/***/ }),

/***/ "./resources/js/src/assets/images/flags/brl.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/flags/brl.png ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/flags/brl-2ad52dfcea08d3bb525017ccf37602f0.png";

/***/ }),

/***/ "./resources/js/src/assets/images/flags/da.png":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/flags/da.png ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/flags/da-ffa22e6bbb0cac01d1a5db76acdba2b8.png";

/***/ }),

/***/ "./resources/js/src/assets/images/flags/de.png":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/flags/de.png ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/flags/de-79533ce9c8ed6c79abfac7ed134476ab.png";

/***/ }),

/***/ "./resources/js/src/assets/images/flags/el.png":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/flags/el.png ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/flags/el-57b9ae6c3893dfebaac3b0c129429836.png";

/***/ }),

/***/ "./resources/js/src/assets/images/flags/en.png":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/flags/en.png ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/flags/en-0bf4ad0d28f63b642778f95dd9fc6798.png";

/***/ }),

/***/ "./resources/js/src/assets/images/flags/es.png":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/flags/es.png ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/flags/es-0199c4d1a04215dab0805d77d9552ba7.png";

/***/ }),

/***/ "./resources/js/src/assets/images/flags/fr.png":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/flags/fr.png ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/flags/fr-74f8f17f23babcd88c358505418f9e53.png";

/***/ }),

/***/ "./resources/js/src/assets/images/flags/gbp.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/flags/gbp.png ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/flags/gbp-22c3b45322c8bfbf914d897fe3456888.png";

/***/ }),

/***/ "./resources/js/src/assets/images/flags/hu.png":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/flags/hu.png ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/flags/hu-c9fae00d70793c90f5cf6d34f827b365.png";

/***/ }),

/***/ "./resources/js/src/assets/images/flags/idr.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/flags/idr.png ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/flags/idr-8a883e29bff7e593fa72aac52de34ea4.png";

/***/ }),

/***/ "./resources/js/src/assets/images/flags/inr.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/flags/inr.png ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/flags/inr-a12a8f35bafc95e3b8efd77ccdf776f7.png";

/***/ }),

/***/ "./resources/js/src/assets/images/flags/it.png":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/flags/it.png ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/flags/it-4b7b3694f266ce144565f775ca23c06a.png";

/***/ }),

/***/ "./resources/js/src/assets/images/flags/ja.png":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/flags/ja.png ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/flags/ja-e921cd518f61c580d95dd43d678ee515.png";

/***/ }),

/***/ "./resources/js/src/assets/images/flags/jp.png":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/flags/jp.png ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/flags/jp-e921cd518f61c580d95dd43d678ee515.png";

/***/ }),

/***/ "./resources/js/src/assets/images/flags/pl.png":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/flags/pl.png ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/flags/pl-b3b82dba19a04821475c734fa513aed9.png";

/***/ }),

/***/ "./resources/js/src/assets/images/flags/pt.png":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/flags/pt.png ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/flags/pt-0ee734c1de9487d276da7a8287889e2a.png";

/***/ }),

/***/ "./resources/js/src/assets/images/flags/ru.png":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/flags/ru.png ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/flags/ru-9384cfed48a9f596e8b4961635ff7397.png";

/***/ }),

/***/ "./resources/js/src/assets/images/flags/sv.png":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/flags/sv.png ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/flags/sv-98fd7e14274c4a44e51bcaef8cd3c225.png";

/***/ }),

/***/ "./resources/js/src/assets/images/flags/tr.png":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/flags/tr.png ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/flags/tr-c540f7fcb34f9a89524fd63db23a6898.png";

/***/ }),

/***/ "./resources/js/src/assets/images/flags/zh.png":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/flags/zh.png ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/flags/zh-c09baeaa5e808f1d39bd305e33fd7c65.png";

/***/ }),

/***/ "./resources/js/src/assets/images/g-7.png":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/g-7.png ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/g-7-28878337cafb842760fb3b9fae20b8d5.png";

/***/ }),

/***/ "./resources/js/src/assets/images/g-8.png":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/g-8.png ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/g-8-2277c5980263c72654cf6f869f7defa8.png";

/***/ }),

/***/ "./resources/js/src/assets/images/girl-1.png":
/*!***************************************************!*\
  !*** ./resources/js/src/assets/images/girl-1.png ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/girl-1-8ebb38107b9efc2ec8d59973b1fcfd8d.png";

/***/ }),

/***/ "./resources/js/src/assets/images/girl-2.png":
/*!***************************************************!*\
  !*** ./resources/js/src/assets/images/girl-2.png ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/girl-2-b4dc5606d3306ffb8f3da2ea8315dad5.png";

/***/ }),

/***/ "./resources/js/src/assets/images/girl-3.png":
/*!***************************************************!*\
  !*** ./resources/js/src/assets/images/girl-3.png ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/girl-3-becc5f3e0d0c4045e47f14234c5f61e1.png";

/***/ }),

/***/ "./resources/js/src/assets/images/girl-4.png":
/*!***************************************************!*\
  !*** ./resources/js/src/assets/images/girl-4.png ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "/images/girl-4-8032d38ab7a47d3145ce4f3d07383cc4.png";

/***/ }),

/***/ "./resources/js/src/assets/images/grid-blog-style-1.jpg":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/grid-blog-style-1.jpg ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "/images/grid-blog-style-1-10f902ed6f3d00d3e32ea1709e9efe30.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/grid-blog-style-2.jpeg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/grid-blog-style-2.jpeg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "/images/grid-blog-style-2-4ac09a936be48fed1dc0065d344b8a22.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/grid-blog-style-3.jpg":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/grid-blog-style-3.jpg ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "/images/grid-blog-style-3-c02981be7be80b0bde5d4fdb3445aaa7.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-1.jpg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-1.jpg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-1-288fd31634eceac740f5b15a41e4c51e.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-14.jpeg":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-14.jpeg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-14-e0023d7f5bb8c52f5f7b127c14181547.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-15.jpeg":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-15.jpeg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-15-229153c205256cea21ce4ee7b0957184.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-2.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-2.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-2-f70f0b025fe23e6f6d33bbf85f154c83.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-3.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-3.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-3-36ae681041ecad857f106fc1db4ad72b.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/lightbox-8.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/lightbox-8.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/lightbox-8-90d2e47bf1c35fb9893f6466dd03bce1.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/list-blog-style-2.jpeg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/list-blog-style-2.jpeg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "/images/list-blog-style-2-f61ecd800eb1a8b022f5bef87c687119.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/list-blog-style-3.jpeg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/list-blog-style-3.jpeg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "/images/list-blog-style-3-1f2aa575cd7c57cd65536bb0047054b1.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/logo.svg":
/*!*************************************************!*\
  !*** ./resources/js/src/assets/images/logo.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "/images/logo-26e5abdbb67a5f6a0b02ca86a0c789ee.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/logo2.svg":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/logo2.svg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/logo2-4321aa724612f5c36db258e45cd2234d.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/masonry-blog-style-3.jpeg":
/*!******************************************************************!*\
  !*** ./resources/js/src/assets/images/masonry-blog-style-3.jpeg ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "/images/masonry-blog-style-3-4820d7499bffdbab29c142d81d2dcc08.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/masonry-blog-style-4.jpeg":
/*!******************************************************************!*\
  !*** ./resources/js/src/assets/images/masonry-blog-style-4.jpeg ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "/images/masonry-blog-style-4-24d1c0a3088ca3d99bad05193b188475.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/mindset.svg":
/*!****************************************************!*\
  !*** ./resources/js/src/assets/images/mindset.svg ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "/images/mindset-fd1f9ed63187ab156c4aa2839c892f8e.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/p6.jpeg":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/p6.jpeg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/p6-43f1ed0ef83ab9a65e8a7bd067273cef.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/p7.jpeg":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/p7.jpeg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/p7-c6307ff10253921b4389d53d89905220.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/p9.jpeg":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/p9.jpeg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/p9-e8a19bb6eff565d2f470b0b686a3f256.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/product-camera.jpg":
/*!***********************************************************!*\
  !*** ./resources/js/src/assets/images/product-camera.jpg ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "/images/product-camera-18c4d47be8f6e1262099669611bf73a9.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/product-headphones.jpg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/product-headphones.jpg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "/images/product-headphones-98afa574e3e39c76ab8ef8c6b9ab7333.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/product-laptop.jpg":
/*!***********************************************************!*\
  !*** ./resources/js/src/assets/images/product-laptop.jpg ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "/images/product-laptop-10a375ed7252da64296515557fa78a88.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/product-shoes.jpg":
/*!**********************************************************!*\
  !*** ./resources/js/src/assets/images/product-shoes.jpg ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/product-shoes-bb208df6b3feb6a275aba0792f3911d5.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/product-watch.jpg":
/*!**********************************************************!*\
  !*** ./resources/js/src/assets/images/product-watch.jpg ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/product-watch-7ce41da4d6689a530e7bbf73f3bcda0e.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-1.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-1.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-1-257264577e3ac7a7b25153ebfca17337.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-10.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-10.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-10-8ed024b4035189204ca907fef8be93fe.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-11.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-11.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-11-80d0de0e88aaadff32fac5df9ac84ff6.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-12.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-12.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-12-a7808c08c8cc0f64bc17e498a0434f91.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-13.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-13.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-13-8d35c0a20b5d253c2d7a849a86bd4fa8.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-14.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-14.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-14-f5211f56123bc5c5cf8a08c1cc9ba73f.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-15.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-15.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-15-327abbec0495f24f6f4d2c7c5103e200.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-16.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-16.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-16-68a87b53e613292be0fb23a42db51310.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-17.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-17.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-17-74e6f302b478c2f4dd2eec28ce5b683e.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-18.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-18.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-18-33caa941558688a7272acbd11ca60e14.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-19.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-19.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-19-1de6117cbebe6c6e4dc692d3bf17ec32.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-2.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-2.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-2-706e5fed5903a761ae977b6bda77609c.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-20.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-20.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-20-68853e6bb47e58a9d1119509ace445d1.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-21.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-21.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-21-272bfe80c3a1d475eabcda0bcbfebbcf.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-23.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-23.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-23-d938f6d10c69bbd6da25df74a5dec17c.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-24.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-24.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-24-414615b31fb264ca3fc51a20b8e5682a.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-25.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-25.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-25-d0da243804afbe20770754be0361d387.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-26.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-26.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-26-3dd07f6f919c2ec138580dd6dc439b7e.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-28.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-28.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-28-793c7ef7226ad2d7ebd057fbfe924579.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-29.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-29.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-29-c225c542244808337734e6a99b8561ad.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-3.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-3.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-3-ab2d579c360f31c986d98f5bdcffbcdb.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-30.png":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-30.png ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-30-76391bd594bf370fd6349b438e2355cd.png";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-31.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-31.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-31-97bac4c12c959639ccda0ba9c6335a4b.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-32.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-32.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-32-868df2c85b88c8f83554b2245237d5c9.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-33.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-33.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-33-78f25ba375c31f14fd6dfc3fd0ef55c4.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-34.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-34.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-34-9de2bdb81a413eaef30270f6d33e8c54.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-4.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-4.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-4-8a4c33cc905139db289ede8060640b69.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-5.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-5.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-5-05b70ad96255ec3cdf0a840f74fa41d3.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-6.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-6.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-6-c53ec44e2743a6cb8b5865ebd91e3a70.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-7.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-7.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-7-72dcc5961b1b6ee0a1e6284c72fae404.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-8.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-8.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-8-82d3e90e675362b74a84f1771c017a3c.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-9.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-9.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-9-47e0e1da65fe2d8b2e18a0637e3dc5cb.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/scroll-6.jpeg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/scroll-6.jpeg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/scroll-6-2a207158889cde36be932cf0f96559fd.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/scroll-7.jpeg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/scroll-7.jpeg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/scroll-7-7a0b6bfcada30e73a6f120c401292314.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/scroll-8.jpeg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/scroll-8.jpeg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/scroll-8-787e6f2ac4211e9a4aae6946dd82f345.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider-1.jpeg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider-1.jpeg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/slider-1-fb5e919a99b10f3d6ec50fc0c89365ab.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider-2.jpeg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider-2.jpeg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/slider-2-c8f15060fb0ca38fa24e916693cdf8fd.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider-3.jpeg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider-3.jpeg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/slider-3-2293f2deb0b569bf52f834be08261863.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/sweet-bg.jpg":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/sweet-bg.jpg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "/images/sweet-bg-89377d8efef5027f9900385176c99a7e.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/taskboard.jpg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/taskboard.jpg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/taskboard-fb3689d13f1caf87151a3387ec937aaa.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/thumbs-up.jpg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/thumbs-up.jpg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/images/thumbs-up-9ace5b7ae799ba8d143de7cd1cfee527.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/tl-2.jpeg":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/tl-2.jpeg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/tl-2-a9ee53554096ae2dcff3d894f5b92438.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/tl-3.jpeg":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/tl-3.jpeg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/tl-3-53911a7b915144bfc3a38e7c96d1dfc2.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/tl-4.jpeg":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/tl-4.jpeg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/tl-4-b2ccd09abc679c5c4f17ec98d67fb6b4.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/tl-5.jpeg":
/*!**************************************************!*\
  !*** ./resources/js/src/assets/images/tl-5.jpeg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/images/tl-5-23ad563aaa057ba4a71f1a9b004f120d.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/user-avtar.svg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/user-avtar.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/user-avtar-32e9d54af3e24aea78b217bf57d8aba1.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/user-profile.jpeg":
/*!**********************************************************!*\
  !*** ./resources/js/src/assets/images/user-profile.jpeg ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/user-profile-26fc32107d4b21a1d5adb117f1edf4e1.jpeg";

/***/ }),

/***/ "./node_modules/just-extend/index.esm.js":
/*!***********************************************!*\
  !*** ./node_modules/just-extend/index.esm.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ objectExtend)
/* harmony export */ });
var objectExtend = extend;

/*
  var obj = {a: 3, b: 5};
  extend(obj, {a: 4, c: 8}); // {a: 4, b: 5, c: 8}
  obj; // {a: 4, b: 5, c: 8}

  var obj = {a: 3, b: 5};
  extend({}, obj, {a: 4, c: 8}); // {a: 4, b: 5, c: 8}
  obj; // {a: 3, b: 5}

  var arr = [1, 2, 3];
  var obj = {a: 3, b: 5};
  extend(obj, {c: arr}); // {a: 3, b: 5, c: [1, 2, 3]}
  arr.push(4);
  obj; // {a: 3, b: 5, c: [1, 2, 3, 4]}

  var arr = [1, 2, 3];
  var obj = {a: 3, b: 5};
  extend(true, obj, {c: arr}); // {a: 3, b: 5, c: [1, 2, 3]}
  arr.push(4);
  obj; // {a: 3, b: 5, c: [1, 2, 3]}

  extend({a: 4, b: 5}); // {a: 4, b: 5}
  extend({a: 4, b: 5}, 3); {a: 4, b: 5}
  extend({a: 4, b: 5}, true); {a: 4, b: 5}
  extend('hello', {a: 4, b: 5}); // throws
  extend(3, {a: 4, b: 5}); // throws
*/

function extend(/* [deep], obj1, obj2, [objn] */) {
  var args = [].slice.call(arguments);
  var deep = false;
  if (typeof args[0] == 'boolean') {
    deep = args.shift();
  }
  var result = args[0];
  if (isUnextendable(result)) {
    throw new Error('extendee must be an object');
  }
  var extenders = args.slice(1);
  var len = extenders.length;
  for (var i = 0; i < len; i++) {
    var extender = extenders[i];
    for (var key in extender) {
      if (Object.prototype.hasOwnProperty.call(extender, key)) {
        var value = extender[key];
        if (deep && isCloneable(value)) {
          var base = Array.isArray(value) ? [] : {};
          result[key] = extend(
            true,
            Object.prototype.hasOwnProperty.call(result, key) && !isUnextendable(result[key])
              ? result[key]
              : base,
            value
          );
        } else {
          result[key] = value;
        }
      }
    }
  }
  return result;
}

function isCloneable(obj) {
  return Array.isArray(obj) || {}.toString.call(obj) == '[object Object]';
}

function isUnextendable(val) {
  return !val || (typeof val != 'object' && typeof val != 'function');
}




/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/baguettebox.js/dist/baguetteBox.min.css":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/baguettebox.js/dist/baguetteBox.min.css ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * baguetteBox.js\n * @author  feimosi\n * @version 1.11.1\n * @url https://github.com/feimosi/baguetteBox.js\n */#baguetteBox-overlay{display:none;opacity:0;position:fixed;overflow:hidden;top:0;left:0;width:100%;height:100%;z-index:1000000;background-color:#222;background-color:rgba(0,0,0,.8);transition:opacity .5s ease}#baguetteBox-overlay.visible{opacity:1}#baguetteBox-overlay .full-image{display:inline-block;position:relative;width:100%;height:100%;text-align:center}#baguetteBox-overlay .full-image figure{display:inline;margin:0;height:100%}#baguetteBox-overlay .full-image img{display:inline-block;width:auto;height:auto;max-height:100%;max-width:100%;vertical-align:middle;box-shadow:0 0 8px rgba(0,0,0,.6)}#baguetteBox-overlay .full-image figcaption{display:block;position:absolute;bottom:0;width:100%;text-align:center;line-height:1.8;white-space:normal;color:#ccc;background-color:#000;background-color:rgba(0,0,0,.6);font-family:sans-serif}#baguetteBox-overlay .full-image:before{content:\"\";display:inline-block;height:50%;width:1px;margin-right:-1px}#baguetteBox-slider{position:absolute;left:0;top:0;height:100%;width:100%;white-space:nowrap;transition:left .4s ease,transform .4s ease}#baguetteBox-slider.bounce-from-right{-webkit-animation:bounceFromRight .4s ease-out;animation:bounceFromRight .4s ease-out}#baguetteBox-slider.bounce-from-left{-webkit-animation:bounceFromLeft .4s ease-out;animation:bounceFromLeft .4s ease-out}@-webkit-keyframes bounceFromRight{0%,100%{margin-left:0}50%{margin-left:-30px}}@keyframes bounceFromRight{0%,100%{margin-left:0}50%{margin-left:-30px}}@-webkit-keyframes bounceFromLeft{0%,100%{margin-left:0}50%{margin-left:30px}}@keyframes bounceFromLeft{0%,100%{margin-left:0}50%{margin-left:30px}}.baguetteBox-button#next-button,.baguetteBox-button#previous-button{top:50%;top:calc(50% - 30px);width:44px;height:60px}.baguetteBox-button{position:absolute;cursor:pointer;outline:0;padding:0;margin:0;border:0;border-radius:15%;background-color:#323232;background-color:rgba(50,50,50,.5);color:#ddd;font:1.6em sans-serif;transition:background-color .4s ease}.baguetteBox-button:focus,.baguetteBox-button:hover{background-color:rgba(50,50,50,.9)}.baguetteBox-button#next-button{right:2%}.baguetteBox-button#previous-button{left:2%}.baguetteBox-button#close-button{top:20px;right:2%;right:calc(2% + 6px);width:30px;height:30px}.baguetteBox-button svg{position:absolute;left:0;top:0}.baguetteBox-spinner{width:40px;height:40px;display:inline-block;position:absolute;top:50%;left:50%;margin-top:-20px;margin-left:-20px}.baguetteBox-double-bounce1,.baguetteBox-double-bounce2{width:100%;height:100%;border-radius:50%;background-color:#fff;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:bounce 2s infinite ease-in-out;animation:bounce 2s infinite ease-in-out}.baguetteBox-double-bounce2{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}@keyframes bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/dropzone/dist/dropzone.css":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/dropzone/dist/dropzone.css ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@-webkit-keyframes passing-through{0%{opacity:0;-webkit-transform:translateY(40px);transform:translateY(40px)}30%,70%{opacity:1;-webkit-transform:translateY(0px);transform:translateY(0px)}100%{opacity:0;-webkit-transform:translateY(-40px);transform:translateY(-40px)}}@keyframes passing-through{0%{opacity:0;-webkit-transform:translateY(40px);transform:translateY(40px)}30%,70%{opacity:1;-webkit-transform:translateY(0px);transform:translateY(0px)}100%{opacity:0;-webkit-transform:translateY(-40px);transform:translateY(-40px)}}@-webkit-keyframes slide-in{0%{opacity:0;-webkit-transform:translateY(40px);transform:translateY(40px)}30%{opacity:1;-webkit-transform:translateY(0px);transform:translateY(0px)}}@keyframes slide-in{0%{opacity:0;-webkit-transform:translateY(40px);transform:translateY(40px)}30%{opacity:1;-webkit-transform:translateY(0px);transform:translateY(0px)}}@-webkit-keyframes pulse{0%{-webkit-transform:scale(1);transform:scale(1)}10%{-webkit-transform:scale(1.1);transform:scale(1.1)}20%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes pulse{0%{-webkit-transform:scale(1);transform:scale(1)}10%{-webkit-transform:scale(1.1);transform:scale(1.1)}20%{-webkit-transform:scale(1);transform:scale(1)}}.dropzone,.dropzone *{box-sizing:border-box}.dropzone{min-height:150px;border:1px solid rgba(0,0,0,.8);border-radius:5px;padding:20px 20px}.dropzone.dz-clickable{cursor:pointer}.dropzone.dz-clickable *{cursor:default}.dropzone.dz-clickable .dz-message,.dropzone.dz-clickable .dz-message *{cursor:pointer}.dropzone.dz-started .dz-message{display:none}.dropzone.dz-drag-hover{border-style:solid}.dropzone.dz-drag-hover .dz-message{opacity:.5}.dropzone .dz-message{text-align:center;margin:3em 0}.dropzone .dz-message .dz-button{background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit}.dropzone .dz-preview{position:relative;display:inline-block;vertical-align:top;margin:16px;min-height:100px}.dropzone .dz-preview:hover{z-index:1000}.dropzone .dz-preview:hover .dz-details{opacity:1}.dropzone .dz-preview.dz-file-preview .dz-image{border-radius:20px;background:#999;background:linear-gradient(to bottom, #eee, #ddd)}.dropzone .dz-preview.dz-file-preview .dz-details{opacity:1}.dropzone .dz-preview.dz-image-preview{background:#fff}.dropzone .dz-preview.dz-image-preview .dz-details{transition:opacity .2s linear}.dropzone .dz-preview .dz-remove{font-size:14px;text-align:center;display:block;cursor:pointer;border:none}.dropzone .dz-preview .dz-remove:hover{text-decoration:underline}.dropzone .dz-preview:hover .dz-details{opacity:1}.dropzone .dz-preview .dz-details{z-index:20;position:absolute;top:0;left:0;opacity:0;font-size:13px;min-width:100%;max-width:100%;padding:2em 1em;text-align:center;color:rgba(0,0,0,.9);line-height:150%}.dropzone .dz-preview .dz-details .dz-size{margin-bottom:1em;font-size:16px}.dropzone .dz-preview .dz-details .dz-filename{white-space:nowrap}.dropzone .dz-preview .dz-details .dz-filename:hover span{border:1px solid rgba(200,200,200,.8);background-color:rgba(255,255,255,.8)}.dropzone .dz-preview .dz-details .dz-filename:not(:hover){overflow:hidden;text-overflow:ellipsis}.dropzone .dz-preview .dz-details .dz-filename:not(:hover) span{border:1px solid transparent}.dropzone .dz-preview .dz-details .dz-filename span,.dropzone .dz-preview .dz-details .dz-size span{background-color:rgba(255,255,255,.4);padding:0 .4em;border-radius:3px}.dropzone .dz-preview:hover .dz-image img{-webkit-transform:scale(1.05, 1.05);transform:scale(1.05, 1.05);-webkit-filter:blur(8px);filter:blur(8px)}.dropzone .dz-preview .dz-image{border-radius:20px;overflow:hidden;width:120px;height:120px;position:relative;display:block;z-index:10}.dropzone .dz-preview .dz-image img{display:block}.dropzone .dz-preview.dz-success .dz-success-mark{-webkit-animation:passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);animation:passing-through 3s cubic-bezier(0.77, 0, 0.175, 1)}.dropzone .dz-preview.dz-error .dz-error-mark{opacity:1;-webkit-animation:slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);animation:slide-in 3s cubic-bezier(0.77, 0, 0.175, 1)}.dropzone .dz-preview .dz-success-mark,.dropzone .dz-preview .dz-error-mark{pointer-events:none;opacity:0;z-index:500;position:absolute;display:block;top:50%;left:50%;margin-left:-27px;margin-top:-27px;background:rgba(0,0,0,.8);border-radius:50%}.dropzone .dz-preview .dz-success-mark svg,.dropzone .dz-preview .dz-error-mark svg{display:block;width:54px;height:54px;fill:#fff}.dropzone .dz-preview.dz-processing .dz-progress{opacity:1;transition:all .2s linear}.dropzone .dz-preview.dz-complete .dz-progress{opacity:0;transition:opacity .4s ease-in}.dropzone .dz-preview:not(.dz-processing) .dz-progress{-webkit-animation:pulse 6s ease infinite;animation:pulse 6s ease infinite}.dropzone .dz-preview .dz-progress{opacity:1;z-index:1000;pointer-events:none;position:absolute;height:20px;top:50%;margin-top:-10px;left:15%;right:15%;border:3px solid rgba(0,0,0,.8);background:rgba(0,0,0,.8);border-radius:10px;overflow:hidden}.dropzone .dz-preview .dz-progress .dz-upload{background:#fff;display:block;position:relative;height:100%;width:0;transition:width 300ms ease-in-out;border-radius:17px}.dropzone .dz-preview.dz-error .dz-error-message{display:block}.dropzone .dz-preview.dz-error:hover .dz-error-message{opacity:1;pointer-events:auto}.dropzone .dz-preview .dz-error-message{pointer-events:none;z-index:1000;position:absolute;display:block;display:none;opacity:0;transition:opacity .3s ease;border-radius:8px;font-size:13px;top:130px;left:-10px;width:140px;background:#b10606;padding:.5em 1em;color:#fff}.dropzone .dz-preview .dz-error-message:after{content:\"\";position:absolute;top:-6px;left:64px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #b10606}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/setting/attorney.vue?vue&type=style&index=0&id=4d42f247&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/setting/attorney.vue?vue&type=style&index=0&id=4d42f247&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.dropzone {\n  border: 2px dashed #ccc;\n  padding: 20px;\n}\n.dz-preview {\n  display: inline-block;\n  position: relative;\n  margin: 10px;\n}\n.dz-remove-btn {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  font-size: 16px;\n  color: #fff;\n  background-color: #f00;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  cursor: pointer;\n  z-index:9999;\n}\n.dz-image {\n  cursor: pointer;\n}\n.dz-progress {\n    display:none;\n}\n.dropzone .dz-preview .dz-image img {\n    max-width:200px;\n}\n.dropzone .dz-preview:hover .dz-image img {\n    transform: none;\n    filter: none;\n    cursor: pointer;\n}\n.expand_collapse {\n    cursor:pointer;\n}\n.badge-title {\n    font-size: 14px;\n    text-transform: uppercase;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/baguettebox.js/dist/baguetteBox.min.css":
/*!**************************************************************!*\
  !*** ./node_modules/baguettebox.js/dist/baguetteBox.min.css ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_baguetteBox_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./baguetteBox.min.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/baguettebox.js/dist/baguetteBox.min.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_baguetteBox_min_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_baguetteBox_min_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/dropzone/dist/dropzone.css":
/*!*************************************************!*\
  !*** ./node_modules/dropzone/dist/dropzone.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_dropzone_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./dropzone.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/dropzone/dist/dropzone.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_dropzone_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_dropzone_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/setting/attorney.vue?vue&type=style&index=0&id=4d42f247&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/setting/attorney.vue?vue&type=style&index=0&id=4d42f247&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_attorney_vue_vue_type_style_index_0_id_4d42f247_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./attorney.vue?vue&type=style&index=0&id=4d42f247&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/setting/attorney.vue?vue&type=style&index=0&id=4d42f247&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_attorney_vue_vue_type_style_index_0_id_4d42f247_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_attorney_vue_vue_type_style_index_0_id_4d42f247_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/setting/attorney.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/setting/attorney.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _attorney_vue_vue_type_template_id_4d42f247__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attorney.vue?vue&type=template&id=4d42f247 */ "./resources/js/src/views/setting/attorney.vue?vue&type=template&id=4d42f247");
/* harmony import */ var _attorney_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attorney.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/setting/attorney.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _attorney_vue_vue_type_style_index_0_id_4d42f247_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attorney.vue?vue&type=style&index=0&id=4d42f247&lang=css */ "./resources/js/src/views/setting/attorney.vue?vue&type=style&index=0&id=4d42f247&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_attorney_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_attorney_vue_vue_type_template_id_4d42f247__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/setting/attorney.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/setting/attorney.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/setting/attorney.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_attorney_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_attorney_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./attorney.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/setting/attorney.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/setting/attorney.vue?vue&type=template&id=4d42f247":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/setting/attorney.vue?vue&type=template&id=4d42f247 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_attorney_vue_vue_type_template_id_4d42f247__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_attorney_vue_vue_type_template_id_4d42f247__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./attorney.vue?vue&type=template&id=4d42f247 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/setting/attorney.vue?vue&type=template&id=4d42f247");


/***/ }),

/***/ "./resources/js/src/views/setting/attorney.vue?vue&type=style&index=0&id=4d42f247&lang=css":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/setting/attorney.vue?vue&type=style&index=0&id=4d42f247&lang=css ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_attorney_vue_vue_type_style_index_0_id_4d42f247_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./attorney.vue?vue&type=style&index=0&id=4d42f247&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/setting/attorney.vue?vue&type=style&index=0&id=4d42f247&lang=css");


/***/ }),

/***/ "./resources/js/src/assets/images sync recursive ^\\.\\/.*$":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/ sync ^\.\/.*$ ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./1.jpeg": "./resources/js/src/assets/images/1.jpeg",
	"./2.jpg": "./resources/js/src/assets/images/2.jpg",
	"./3.jpeg": "./resources/js/src/assets/images/3.jpeg",
	"./ab-1.jpeg": "./resources/js/src/assets/images/ab-1.jpeg",
	"./arrow-down.png": "./resources/js/src/assets/images/arrow-down.png",
	"./bg.png": "./resources/js/src/assets/images/bg.png",
	"./boy-1.png": "./resources/js/src/assets/images/boy-1.png",
	"./boy-2.png": "./resources/js/src/assets/images/boy-2.png",
	"./boy.png": "./resources/js/src/assets/images/boy.png",
	"./contact-us-map-pin.svg": "./resources/js/src/assets/images/contact-us-map-pin.svg",
	"./cork-logo.png": "./resources/js/src/assets/images/cork-logo.png",
	"./default-avatar.png": "./resources/js/src/assets/images/default-avatar.png",
	"./delete-user-11.jpeg": "./resources/js/src/assets/images/delete-user-11.jpeg",
	"./delete-user-12.jpeg": "./resources/js/src/assets/images/delete-user-12.jpeg",
	"./delete-user-15.jpeg": "./resources/js/src/assets/images/delete-user-15.jpeg",
	"./delete-user-16.jpeg": "./resources/js/src/assets/images/delete-user-16.jpeg",
	"./delete-user-17.jpeg": "./resources/js/src/assets/images/delete-user-17.jpeg",
	"./delete-user-4.jpeg": "./resources/js/src/assets/images/delete-user-4.jpeg",
	"./drag-1.jpeg": "./resources/js/src/assets/images/drag-1.jpeg",
	"./drag-2.jpeg": "./resources/js/src/assets/images/drag-2.jpeg",
	"./drag-4.jpg": "./resources/js/src/assets/images/drag-4.jpg",
	"./dragp-1.jpeg": "./resources/js/src/assets/images/dragp-1.jpeg",
	"./dragp-4.jpeg": "./resources/js/src/assets/images/dragp-4.jpeg",
	"./dragp-6.jpeg": "./resources/js/src/assets/images/dragp-6.jpeg",
	"./dragp-7.jpeg": "./resources/js/src/assets/images/dragp-7.jpeg",
	"./example.png": "./resources/js/src/assets/images/example.png",
	"./faq.svg": "./resources/js/src/assets/images/faq.svg",
	"./features_overview.svg": "./resources/js/src/assets/images/features_overview.svg",
	"./file-preview.png": "./resources/js/src/assets/images/file-preview.png",
	"./flags/brl.png": "./resources/js/src/assets/images/flags/brl.png",
	"./flags/da.png": "./resources/js/src/assets/images/flags/da.png",
	"./flags/de.png": "./resources/js/src/assets/images/flags/de.png",
	"./flags/el.png": "./resources/js/src/assets/images/flags/el.png",
	"./flags/en.png": "./resources/js/src/assets/images/flags/en.png",
	"./flags/es.png": "./resources/js/src/assets/images/flags/es.png",
	"./flags/fr.png": "./resources/js/src/assets/images/flags/fr.png",
	"./flags/gbp.png": "./resources/js/src/assets/images/flags/gbp.png",
	"./flags/hu.png": "./resources/js/src/assets/images/flags/hu.png",
	"./flags/idr.png": "./resources/js/src/assets/images/flags/idr.png",
	"./flags/inr.png": "./resources/js/src/assets/images/flags/inr.png",
	"./flags/it.png": "./resources/js/src/assets/images/flags/it.png",
	"./flags/ja.png": "./resources/js/src/assets/images/flags/ja.png",
	"./flags/jp.png": "./resources/js/src/assets/images/flags/jp.png",
	"./flags/pl.png": "./resources/js/src/assets/images/flags/pl.png",
	"./flags/pt.png": "./resources/js/src/assets/images/flags/pt.png",
	"./flags/ru.png": "./resources/js/src/assets/images/flags/ru.png",
	"./flags/sv.png": "./resources/js/src/assets/images/flags/sv.png",
	"./flags/tr.png": "./resources/js/src/assets/images/flags/tr.png",
	"./flags/zh.png": "./resources/js/src/assets/images/flags/zh.png",
	"./g-7.png": "./resources/js/src/assets/images/g-7.png",
	"./g-8.png": "./resources/js/src/assets/images/g-8.png",
	"./girl-1.png": "./resources/js/src/assets/images/girl-1.png",
	"./girl-2.png": "./resources/js/src/assets/images/girl-2.png",
	"./girl-3.png": "./resources/js/src/assets/images/girl-3.png",
	"./girl-4.png": "./resources/js/src/assets/images/girl-4.png",
	"./grid-blog-style-1.jpg": "./resources/js/src/assets/images/grid-blog-style-1.jpg",
	"./grid-blog-style-2.jpeg": "./resources/js/src/assets/images/grid-blog-style-2.jpeg",
	"./grid-blog-style-3.jpg": "./resources/js/src/assets/images/grid-blog-style-3.jpg",
	"./lightbox-1.jpg": "./resources/js/src/assets/images/lightbox-1.jpg",
	"./lightbox-14.jpeg": "./resources/js/src/assets/images/lightbox-14.jpeg",
	"./lightbox-15.jpeg": "./resources/js/src/assets/images/lightbox-15.jpeg",
	"./lightbox-2.jpeg": "./resources/js/src/assets/images/lightbox-2.jpeg",
	"./lightbox-3.jpeg": "./resources/js/src/assets/images/lightbox-3.jpeg",
	"./lightbox-8.jpeg": "./resources/js/src/assets/images/lightbox-8.jpeg",
	"./list-blog-style-2.jpeg": "./resources/js/src/assets/images/list-blog-style-2.jpeg",
	"./list-blog-style-3.jpeg": "./resources/js/src/assets/images/list-blog-style-3.jpeg",
	"./logo.svg": "./resources/js/src/assets/images/logo.svg",
	"./logo2.svg": "./resources/js/src/assets/images/logo2.svg",
	"./masonry-blog-style-3.jpeg": "./resources/js/src/assets/images/masonry-blog-style-3.jpeg",
	"./masonry-blog-style-4.jpeg": "./resources/js/src/assets/images/masonry-blog-style-4.jpeg",
	"./mindset.svg": "./resources/js/src/assets/images/mindset.svg",
	"./p6.jpeg": "./resources/js/src/assets/images/p6.jpeg",
	"./p7.jpeg": "./resources/js/src/assets/images/p7.jpeg",
	"./p9.jpeg": "./resources/js/src/assets/images/p9.jpeg",
	"./product-camera.jpg": "./resources/js/src/assets/images/product-camera.jpg",
	"./product-headphones.jpg": "./resources/js/src/assets/images/product-headphones.jpg",
	"./product-laptop.jpg": "./resources/js/src/assets/images/product-laptop.jpg",
	"./product-shoes.jpg": "./resources/js/src/assets/images/product-shoes.jpg",
	"./product-watch.jpg": "./resources/js/src/assets/images/product-watch.jpg",
	"./profile-1.jpeg": "./resources/js/src/assets/images/profile-1.jpeg",
	"./profile-10.jpeg": "./resources/js/src/assets/images/profile-10.jpeg",
	"./profile-11.jpeg": "./resources/js/src/assets/images/profile-11.jpeg",
	"./profile-12.jpeg": "./resources/js/src/assets/images/profile-12.jpeg",
	"./profile-13.jpeg": "./resources/js/src/assets/images/profile-13.jpeg",
	"./profile-14.jpeg": "./resources/js/src/assets/images/profile-14.jpeg",
	"./profile-15.jpeg": "./resources/js/src/assets/images/profile-15.jpeg",
	"./profile-16.jpeg": "./resources/js/src/assets/images/profile-16.jpeg",
	"./profile-17.jpeg": "./resources/js/src/assets/images/profile-17.jpeg",
	"./profile-18.jpeg": "./resources/js/src/assets/images/profile-18.jpeg",
	"./profile-19.jpeg": "./resources/js/src/assets/images/profile-19.jpeg",
	"./profile-2.jpeg": "./resources/js/src/assets/images/profile-2.jpeg",
	"./profile-20.jpeg": "./resources/js/src/assets/images/profile-20.jpeg",
	"./profile-21.jpeg": "./resources/js/src/assets/images/profile-21.jpeg",
	"./profile-23.jpeg": "./resources/js/src/assets/images/profile-23.jpeg",
	"./profile-24.jpeg": "./resources/js/src/assets/images/profile-24.jpeg",
	"./profile-25.jpeg": "./resources/js/src/assets/images/profile-25.jpeg",
	"./profile-26.jpeg": "./resources/js/src/assets/images/profile-26.jpeg",
	"./profile-28.jpeg": "./resources/js/src/assets/images/profile-28.jpeg",
	"./profile-29.jpeg": "./resources/js/src/assets/images/profile-29.jpeg",
	"./profile-3.jpeg": "./resources/js/src/assets/images/profile-3.jpeg",
	"./profile-30.png": "./resources/js/src/assets/images/profile-30.png",
	"./profile-31.jpeg": "./resources/js/src/assets/images/profile-31.jpeg",
	"./profile-32.jpeg": "./resources/js/src/assets/images/profile-32.jpeg",
	"./profile-33.jpeg": "./resources/js/src/assets/images/profile-33.jpeg",
	"./profile-34.jpeg": "./resources/js/src/assets/images/profile-34.jpeg",
	"./profile-4.jpeg": "./resources/js/src/assets/images/profile-4.jpeg",
	"./profile-5.jpeg": "./resources/js/src/assets/images/profile-5.jpeg",
	"./profile-6.jpeg": "./resources/js/src/assets/images/profile-6.jpeg",
	"./profile-7.jpeg": "./resources/js/src/assets/images/profile-7.jpeg",
	"./profile-8.jpeg": "./resources/js/src/assets/images/profile-8.jpeg",
	"./profile-9.jpeg": "./resources/js/src/assets/images/profile-9.jpeg",
	"./scroll-6.jpeg": "./resources/js/src/assets/images/scroll-6.jpeg",
	"./scroll-7.jpeg": "./resources/js/src/assets/images/scroll-7.jpeg",
	"./scroll-8.jpeg": "./resources/js/src/assets/images/scroll-8.jpeg",
	"./slider-1.jpeg": "./resources/js/src/assets/images/slider-1.jpeg",
	"./slider-2.jpeg": "./resources/js/src/assets/images/slider-2.jpeg",
	"./slider-3.jpeg": "./resources/js/src/assets/images/slider-3.jpeg",
	"./sweet-bg.jpg": "./resources/js/src/assets/images/sweet-bg.jpg",
	"./taskboard.jpg": "./resources/js/src/assets/images/taskboard.jpg",
	"./thumbs-up.jpg": "./resources/js/src/assets/images/thumbs-up.jpg",
	"./tl-2.jpeg": "./resources/js/src/assets/images/tl-2.jpeg",
	"./tl-3.jpeg": "./resources/js/src/assets/images/tl-3.jpeg",
	"./tl-4.jpeg": "./resources/js/src/assets/images/tl-4.jpeg",
	"./tl-5.jpeg": "./resources/js/src/assets/images/tl-5.jpeg",
	"./user-avtar.svg": "./resources/js/src/assets/images/user-avtar.svg",
	"./user-profile.jpeg": "./resources/js/src/assets/images/user-profile.jpeg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/src/assets/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/dropzone/dist/dropzone.mjs":
/*!*************************************************!*\
  !*** ./node_modules/dropzone/dist/dropzone.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dropzone": () => (/* binding */ $3ed269f2f0fb224b$export$2e2bcd8739ae039),
/* harmony export */   "default": () => (/* binding */ $3ed269f2f0fb224b$export$2e2bcd8739ae039)
/* harmony export */ });
/* harmony import */ var just_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! just-extend */ "./node_modules/just-extend/index.esm.js");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

class $4040acfd8584338d$export$2e2bcd8739ae039 {
    // Add an event listener for given event
    on(event, fn) {
        this._callbacks = this._callbacks || {
        };
        // Create namespace for this event
        if (!this._callbacks[event]) this._callbacks[event] = [];
        this._callbacks[event].push(fn);
        return this;
    }
    emit(event, ...args) {
        this._callbacks = this._callbacks || {
        };
        let callbacks = this._callbacks[event];
        if (callbacks) for (let callback of callbacks)callback.apply(this, args);
        // trigger a corresponding DOM event
        if (this.element) this.element.dispatchEvent(this.makeEvent("dropzone:" + event, {
            args: args
        }));
        return this;
    }
    makeEvent(eventName, detail) {
        let params = {
            bubbles: true,
            cancelable: true,
            detail: detail
        };
        if (typeof window.CustomEvent === "function") return new CustomEvent(eventName, params);
        else {
            // IE 11 support
            // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
            var evt = document.createEvent("CustomEvent");
            evt.initCustomEvent(eventName, params.bubbles, params.cancelable, params.detail);
            return evt;
        }
    }
    // Remove event listener for given event. If fn is not provided, all event
    // listeners for that event will be removed. If neither is provided, all
    // event listeners will be removed.
    off(event, fn) {
        if (!this._callbacks || arguments.length === 0) {
            this._callbacks = {
            };
            return this;
        }
        // specific event
        let callbacks = this._callbacks[event];
        if (!callbacks) return this;
        // remove all handlers
        if (arguments.length === 1) {
            delete this._callbacks[event];
            return this;
        }
        // remove specific handler
        for(let i = 0; i < callbacks.length; i++){
            let callback = callbacks[i];
            if (callback === fn) {
                callbacks.splice(i, 1);
                break;
            }
        }
        return this;
    }
}



var $fd6031f88dce2e32$exports = {};
$fd6031f88dce2e32$exports = "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail=\"\"></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size=\"\"></span></div>\n    <div class=\"dz-filename\"><span data-dz-name=\"\"></span></div>\n  </div>\n  <div class=\"dz-progress\">\n    <span class=\"dz-upload\" data-dz-uploadprogress=\"\"></span>\n  </div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage=\"\"></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54\" height=\"54\" viewBox=\"0 0 54 54\" fill=\"white\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M10.2071 29.7929L14.2929 25.7071C14.6834 25.3166 15.3166 25.3166 15.7071 25.7071L21.2929 31.2929C21.6834 31.6834 22.3166 31.6834 22.7071 31.2929L38.2929 15.7071C38.6834 15.3166 39.3166 15.3166 39.7071 15.7071L43.7929 19.7929C44.1834 20.1834 44.1834 20.8166 43.7929 21.2071L22.7071 42.2929C22.3166 42.6834 21.6834 42.6834 21.2929 42.2929L10.2071 31.2071C9.81658 30.8166 9.81658 30.1834 10.2071 29.7929Z\"></path>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54\" height=\"54\" viewBox=\"0 0 54 54\" fill=\"white\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M26.2929 20.2929L19.2071 13.2071C18.8166 12.8166 18.1834 12.8166 17.7929 13.2071L13.2071 17.7929C12.8166 18.1834 12.8166 18.8166 13.2071 19.2071L20.2929 26.2929C20.6834 26.6834 20.6834 27.3166 20.2929 27.7071L13.2071 34.7929C12.8166 35.1834 12.8166 35.8166 13.2071 36.2071L17.7929 40.7929C18.1834 41.1834 18.8166 41.1834 19.2071 40.7929L26.2929 33.7071C26.6834 33.3166 27.3166 33.3166 27.7071 33.7071L34.7929 40.7929C35.1834 41.1834 35.8166 41.1834 36.2071 40.7929L40.7929 36.2071C41.1834 35.8166 41.1834 35.1834 40.7929 34.7929L33.7071 27.7071C33.3166 27.3166 33.3166 26.6834 33.7071 26.2929L40.7929 19.2071C41.1834 18.8166 41.1834 18.1834 40.7929 17.7929L36.2071 13.2071C35.8166 12.8166 35.1834 12.8166 34.7929 13.2071L27.7071 20.2929C27.3166 20.6834 26.6834 20.6834 26.2929 20.2929Z\"></path>\n    </svg>\n  </div>\n</div>\n";


let $4ca367182776f80b$var$defaultOptions = {
    /**
   * Has to be specified on elements other than form (or when the form doesn't
   * have an `action` attribute).
   *
   * You can also provide a function that will be called with `files` and
   * `dataBlocks`  and must return the url as string.
   */ url: null,
    /**
   * Can be changed to `"put"` if necessary. You can also provide a function
   * that will be called with `files` and must return the method (since `v3.12.0`).
   */ method: "post",
    /**
   * Will be set on the XHRequest.
   */ withCredentials: false,
    /**
   * The timeout for the XHR requests in milliseconds (since `v4.4.0`).
   * If set to null or 0, no timeout is going to be set.
   */ timeout: null,
    /**
   * How many file uploads to process in parallel (See the
   * Enqueuing file uploads documentation section for more info)
   */ parallelUploads: 2,
    /**
   * Whether to send multiple files in one request. If
   * this it set to true, then the fallback file input element will
   * have the `multiple` attribute as well. This option will
   * also trigger additional events (like `processingmultiple`). See the events
   * documentation section for more information.
   */ uploadMultiple: false,
    /**
   * Whether you want files to be uploaded in chunks to your server. This can't be
   * used in combination with `uploadMultiple`.
   *
   * See [chunksUploaded](#config-chunksUploaded) for the callback to finalise an upload.
   */ chunking: false,
    /**
   * If `chunking` is enabled, this defines whether **every** file should be chunked,
   * even if the file size is below chunkSize. This means, that the additional chunk
   * form data will be submitted and the `chunksUploaded` callback will be invoked.
   */ forceChunking: false,
    /**
   * If `chunking` is `true`, then this defines the chunk size in bytes.
   */ chunkSize: 2097152,
    /**
   * If `true`, the individual chunks of a file are being uploaded simultaneously.
   */ parallelChunkUploads: false,
    /**
   * Whether a chunk should be retried if it fails.
   */ retryChunks: false,
    /**
   * If `retryChunks` is true, how many times should it be retried.
   */ retryChunksLimit: 3,
    /**
   * The maximum filesize (in MiB) that is allowed to be uploaded.
   */ maxFilesize: 256,
    /**
   * The name of the file param that gets transferred.
   * **NOTE**: If you have the option  `uploadMultiple` set to `true`, then
   * Dropzone will append `[]` to the name.
   */ paramName: "file",
    /**
   * Whether thumbnails for images should be generated
   */ createImageThumbnails: true,
    /**
   * In MB. When the filename exceeds this limit, the thumbnail will not be generated.
   */ maxThumbnailFilesize: 10,
    /**
   * If `null`, the ratio of the image will be used to calculate it.
   */ thumbnailWidth: 120,
    /**
   * The same as `thumbnailWidth`. If both are null, images will not be resized.
   */ thumbnailHeight: 120,
    /**
   * How the images should be scaled down in case both, `thumbnailWidth` and `thumbnailHeight` are provided.
   * Can be either `contain` or `crop`.
   */ thumbnailMethod: "crop",
    /**
   * If set, images will be resized to these dimensions before being **uploaded**.
   * If only one, `resizeWidth` **or** `resizeHeight` is provided, the original aspect
   * ratio of the file will be preserved.
   *
   * The `options.transformFile` function uses these options, so if the `transformFile` function
   * is overridden, these options don't do anything.
   */ resizeWidth: null,
    /**
   * See `resizeWidth`.
   */ resizeHeight: null,
    /**
   * The mime type of the resized image (before it gets uploaded to the server).
   * If `null` the original mime type will be used. To force jpeg, for example, use `image/jpeg`.
   * See `resizeWidth` for more information.
   */ resizeMimeType: null,
    /**
   * The quality of the resized images. See `resizeWidth`.
   */ resizeQuality: 0.8,
    /**
   * How the images should be scaled down in case both, `resizeWidth` and `resizeHeight` are provided.
   * Can be either `contain` or `crop`.
   */ resizeMethod: "contain",
    /**
   * The base that is used to calculate the **displayed** filesize. You can
   * change this to 1024 if you would rather display kibibytes, mebibytes,
   * etc... 1024 is technically incorrect, because `1024 bytes` are `1 kibibyte`
   * not `1 kilobyte`. You can change this to `1024` if you don't care about
   * validity.
   */ filesizeBase: 1000,
    /**
   * If not `null` defines how many files this Dropzone handles. If it exceeds,
   * the event `maxfilesexceeded` will be called. The dropzone element gets the
   * class `dz-max-files-reached` accordingly so you can provide visual
   * feedback.
   */ maxFiles: null,
    /**
   * An optional object to send additional headers to the server. Eg:
   * `{ "My-Awesome-Header": "header value" }`
   */ headers: null,
    /**
   * Should the default headers be set or not?
   * Accept: application/json <- for requesting json response
   * Cache-Control: no-cache <- Request shouldnt be cached
   * X-Requested-With: XMLHttpRequest <- We sent the request via XMLHttpRequest
   */ defaultHeaders: true,
    /**
   * If `true`, the dropzone element itself will be clickable, if `false`
   * nothing will be clickable.
   *
   * You can also pass an HTML element, a CSS selector (for multiple elements)
   * or an array of those. In that case, all of those elements will trigger an
   * upload when clicked.
   */ clickable: true,
    /**
   * Whether hidden files in directories should be ignored.
   */ ignoreHiddenFiles: true,
    /**
   * The default implementation of `accept` checks the file's mime type or
   * extension against this list. This is a comma separated list of mime
   * types or file extensions.
   *
   * Eg.: `image/*,application/pdf,.psd`
   *
   * If the Dropzone is `clickable` this option will also be used as
   * [`accept`](https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept)
   * parameter on the hidden file input as well.
   */ acceptedFiles: null,
    /**
   * **Deprecated!**
   * Use acceptedFiles instead.
   */ acceptedMimeTypes: null,
    /**
   * If false, files will be added to the queue but the queue will not be
   * processed automatically.
   * This can be useful if you need some additional user input before sending
   * files (or if you want want all files sent at once).
   * If you're ready to send the file simply call `myDropzone.processQueue()`.
   *
   * See the [enqueuing file uploads](#enqueuing-file-uploads) documentation
   * section for more information.
   */ autoProcessQueue: true,
    /**
   * If false, files added to the dropzone will not be queued by default.
   * You'll have to call `enqueueFile(file)` manually.
   */ autoQueue: true,
    /**
   * If `true`, this will add a link to every file preview to remove or cancel (if
   * already uploading) the file. The `dictCancelUpload`, `dictCancelUploadConfirmation`
   * and `dictRemoveFile` options are used for the wording.
   */ addRemoveLinks: false,
    /**
   * Defines where to display the file previews – if `null` the
   * Dropzone element itself is used. Can be a plain `HTMLElement` or a CSS
   * selector. The element should have the `dropzone-previews` class so
   * the previews are displayed properly.
   */ previewsContainer: null,
    /**
   * Set this to `true` if you don't want previews to be shown.
   */ disablePreviews: false,
    /**
   * This is the element the hidden input field (which is used when clicking on the
   * dropzone to trigger file selection) will be appended to. This might
   * be important in case you use frameworks to switch the content of your page.
   *
   * Can be a selector string, or an element directly.
   */ hiddenInputContainer: "body",
    /**
   * If null, no capture type will be specified
   * If camera, mobile devices will skip the file selection and choose camera
   * If microphone, mobile devices will skip the file selection and choose the microphone
   * If camcorder, mobile devices will skip the file selection and choose the camera in video mode
   * On apple devices multiple must be set to false.  AcceptedFiles may need to
   * be set to an appropriate mime type (e.g. "image/*", "audio/*", or "video/*").
   */ capture: null,
    /**
   * **Deprecated**. Use `renameFile` instead.
   */ renameFilename: null,
    /**
   * A function that is invoked before the file is uploaded to the server and renames the file.
   * This function gets the `File` as argument and can use the `file.name`. The actual name of the
   * file that gets used during the upload can be accessed through `file.upload.filename`.
   */ renameFile: null,
    /**
   * If `true` the fallback will be forced. This is very useful to test your server
   * implementations first and make sure that everything works as
   * expected without dropzone if you experience problems, and to test
   * how your fallbacks will look.
   */ forceFallback: false,
    /**
   * The text used before any files are dropped.
   */ dictDefaultMessage: "Drop files here to upload",
    /**
   * The text that replaces the default message text it the browser is not supported.
   */ dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
    /**
   * The text that will be added before the fallback form.
   * If you provide a  fallback element yourself, or if this option is `null` this will
   * be ignored.
   */ dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
    /**
   * If the filesize is too big.
   * `{{filesize}}` and `{{maxFilesize}}` will be replaced with the respective configuration values.
   */ dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
    /**
   * If the file doesn't match the file type.
   */ dictInvalidFileType: "You can't upload files of this type.",
    /**
   * If the server response was invalid.
   * `{{statusCode}}` will be replaced with the servers status code.
   */ dictResponseError: "Server responded with {{statusCode}} code.",
    /**
   * If `addRemoveLinks` is true, the text to be used for the cancel upload link.
   */ dictCancelUpload: "Cancel upload",
    /**
   * The text that is displayed if an upload was manually canceled
   */ dictUploadCanceled: "Upload canceled.",
    /**
   * If `addRemoveLinks` is true, the text to be used for confirmation when cancelling upload.
   */ dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
    /**
   * If `addRemoveLinks` is true, the text to be used to remove a file.
   */ dictRemoveFile: "Remove file",
    /**
   * If this is not null, then the user will be prompted before removing a file.
   */ dictRemoveFileConfirmation: null,
    /**
   * Displayed if `maxFiles` is st and exceeded.
   * The string `{{maxFiles}}` will be replaced by the configuration value.
   */ dictMaxFilesExceeded: "You can not upload any more files.",
    /**
   * Allows you to translate the different units. Starting with `tb` for terabytes and going down to
   * `b` for bytes.
   */ dictFileSizeUnits: {
        tb: "TB",
        gb: "GB",
        mb: "MB",
        kb: "KB",
        b: "b"
    },
    /**
   * Called when dropzone initialized
   * You can add event listeners here
   */ init () {
    },
    /**
   * Can be an **object** of additional parameters to transfer to the server, **or** a `Function`
   * that gets invoked with the `files`, `xhr` and, if it's a chunked upload, `chunk` arguments. In case
   * of a function, this needs to return a map.
   *
   * The default implementation does nothing for normal uploads, but adds relevant information for
   * chunked uploads.
   *
   * This is the same as adding hidden input fields in the form element.
   */ params (files, xhr, chunk) {
        if (chunk) return {
            dzuuid: chunk.file.upload.uuid,
            dzchunkindex: chunk.index,
            dztotalfilesize: chunk.file.size,
            dzchunksize: this.options.chunkSize,
            dztotalchunkcount: chunk.file.upload.totalChunkCount,
            dzchunkbyteoffset: chunk.index * this.options.chunkSize
        };
    },
    /**
   * A function that gets a [file](https://developer.mozilla.org/en-US/docs/DOM/File)
   * and a `done` function as parameters.
   *
   * If the done function is invoked without arguments, the file is "accepted" and will
   * be processed. If you pass an error message, the file is rejected, and the error
   * message will be displayed.
   * This function will not be called if the file is too big or doesn't match the mime types.
   */ accept (file, done) {
        return done();
    },
    /**
   * The callback that will be invoked when all chunks have been uploaded for a file.
   * It gets the file for which the chunks have been uploaded as the first parameter,
   * and the `done` function as second. `done()` needs to be invoked when everything
   * needed to finish the upload process is done.
   */ chunksUploaded: function(file, done) {
        done();
    },
    /**
   * Sends the file as binary blob in body instead of form data.
   * If this is set, the `params` option will be ignored.
   * It's an error to set this to `true` along with `uploadMultiple` since
   * multiple files cannot be in a single binary body.
   */ binaryBody: false,
    /**
   * Gets called when the browser is not supported.
   * The default implementation shows the fallback input field and adds
   * a text.
   */ fallback () {
        // This code should pass in IE7... :(
        let messageElement;
        this.element.className = `${this.element.className} dz-browser-not-supported`;
        for (let child of this.element.getElementsByTagName("div"))if (/(^| )dz-message($| )/.test(child.className)) {
            messageElement = child;
            child.className = "dz-message"; // Removes the 'dz-default' class
            break;
        }
        if (!messageElement) {
            messageElement = $3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement('<div class="dz-message"><span></span></div>');
            this.element.appendChild(messageElement);
        }
        let span = messageElement.getElementsByTagName("span")[0];
        if (span) {
            if (span.textContent != null) span.textContent = this.options.dictFallbackMessage;
            else if (span.innerText != null) span.innerText = this.options.dictFallbackMessage;
        }
        return this.element.appendChild(this.getFallbackForm());
    },
    /**
   * Gets called to calculate the thumbnail dimensions.
   *
   * It gets `file`, `width` and `height` (both may be `null`) as parameters and must return an object containing:
   *
   *  - `srcWidth` & `srcHeight` (required)
   *  - `trgWidth` & `trgHeight` (required)
   *  - `srcX` & `srcY` (optional, default `0`)
   *  - `trgX` & `trgY` (optional, default `0`)
   *
   * Those values are going to be used by `ctx.drawImage()`.
   */ resize (file, width, height, resizeMethod) {
        let info = {
            srcX: 0,
            srcY: 0,
            srcWidth: file.width,
            srcHeight: file.height
        };
        let srcRatio = file.width / file.height;
        // Automatically calculate dimensions if not specified
        if (width == null && height == null) {
            width = info.srcWidth;
            height = info.srcHeight;
        } else if (width == null) width = height * srcRatio;
        else if (height == null) height = width / srcRatio;
        // Make sure images aren't upscaled
        width = Math.min(width, info.srcWidth);
        height = Math.min(height, info.srcHeight);
        let trgRatio = width / height;
        if (info.srcWidth > width || info.srcHeight > height) {
            // Image is bigger and needs rescaling
            if (resizeMethod === "crop") {
                if (srcRatio > trgRatio) {
                    info.srcHeight = file.height;
                    info.srcWidth = info.srcHeight * trgRatio;
                } else {
                    info.srcWidth = file.width;
                    info.srcHeight = info.srcWidth / trgRatio;
                }
            } else if (resizeMethod === "contain") {
                // Method 'contain'
                if (srcRatio > trgRatio) height = width / srcRatio;
                else width = height * srcRatio;
            } else throw new Error(`Unknown resizeMethod '${resizeMethod}'`);
        }
        info.srcX = (file.width - info.srcWidth) / 2;
        info.srcY = (file.height - info.srcHeight) / 2;
        info.trgWidth = width;
        info.trgHeight = height;
        return info;
    },
    /**
   * Can be used to transform the file (for example, resize an image if necessary).
   *
   * The default implementation uses `resizeWidth` and `resizeHeight` (if provided) and resizes
   * images according to those dimensions.
   *
   * Gets the `file` as the first parameter, and a `done()` function as the second, that needs
   * to be invoked with the file when the transformation is done.
   */ transformFile (file, done) {
        if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/)) return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done);
        else return done(file);
    },
    /**
   * A string that contains the template used for each dropped
   * file. Change it to fulfill your needs but make sure to properly
   * provide all elements.
   *
   * If you want to use an actual HTML element instead of providing a String
   * as a config option, you could create a div with the id `tpl`,
   * put the template inside it and provide the element like this:
   *
   *     document
   *       .querySelector('#tpl')
   *       .innerHTML
   *
   */ previewTemplate: (/*@__PURE__*/$parcel$interopDefault($fd6031f88dce2e32$exports)),
    /*
   Those functions register themselves to the events on init and handle all
   the user interface specific stuff. Overwriting them won't break the upload
   but can break the way it's displayed.
   You can overwrite them if you don't like the default behavior. If you just
   want to add an additional event handler, register it on the dropzone object
   and don't overwrite those options.
   */ // Those are self explanatory and simply concern the DragnDrop.
    drop (e) {
        return this.element.classList.remove("dz-drag-hover");
    },
    dragstart (e) {
    },
    dragend (e) {
        return this.element.classList.remove("dz-drag-hover");
    },
    dragenter (e) {
        return this.element.classList.add("dz-drag-hover");
    },
    dragover (e) {
        return this.element.classList.add("dz-drag-hover");
    },
    dragleave (e) {
        return this.element.classList.remove("dz-drag-hover");
    },
    paste (e) {
    },
    // Called whenever there are no files left in the dropzone anymore, and the
    // dropzone should be displayed as if in the initial state.
    reset () {
        return this.element.classList.remove("dz-started");
    },
    // Called when a file is added to the queue
    // Receives `file`
    addedfile (file) {
        if (this.element === this.previewsContainer) this.element.classList.add("dz-started");
        if (this.previewsContainer && !this.options.disablePreviews) {
            file.previewElement = $3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement(this.options.previewTemplate.trim());
            file.previewTemplate = file.previewElement; // Backwards compatibility
            this.previewsContainer.appendChild(file.previewElement);
            for (var node of file.previewElement.querySelectorAll("[data-dz-name]"))node.textContent = file.name;
            for (node of file.previewElement.querySelectorAll("[data-dz-size]"))node.innerHTML = this.filesize(file.size);
            if (this.options.addRemoveLinks) {
                file._removeLink = $3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement(`<a class="dz-remove" href="javascript:undefined;" data-dz-remove>${this.options.dictRemoveFile}</a>`);
                file.previewElement.appendChild(file._removeLink);
            }
            let removeFileEvent = (e)=>{
                e.preventDefault();
                e.stopPropagation();
                if (file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING) return $3ed269f2f0fb224b$export$2e2bcd8739ae039.confirm(this.options.dictCancelUploadConfirmation, ()=>this.removeFile(file)
                );
                else {
                    if (this.options.dictRemoveFileConfirmation) return $3ed269f2f0fb224b$export$2e2bcd8739ae039.confirm(this.options.dictRemoveFileConfirmation, ()=>this.removeFile(file)
                    );
                    else return this.removeFile(file);
                }
            };
            for (let removeLink of file.previewElement.querySelectorAll("[data-dz-remove]"))removeLink.addEventListener("click", removeFileEvent);
        }
    },
    // Called whenever a file is removed.
    removedfile (file) {
        if (file.previewElement != null && file.previewElement.parentNode != null) file.previewElement.parentNode.removeChild(file.previewElement);
        return this._updateMaxFilesReachedClass();
    },
    // Called when a thumbnail has been generated
    // Receives `file` and `dataUrl`
    thumbnail (file, dataUrl) {
        if (file.previewElement) {
            file.previewElement.classList.remove("dz-file-preview");
            for (let thumbnailElement of file.previewElement.querySelectorAll("[data-dz-thumbnail]")){
                thumbnailElement.alt = file.name;
                thumbnailElement.src = dataUrl;
            }
            return setTimeout(()=>file.previewElement.classList.add("dz-image-preview")
            , 1);
        }
    },
    // Called whenever an error occurs
    // Receives `file` and `message`
    error (file, message) {
        if (file.previewElement) {
            file.previewElement.classList.add("dz-error");
            if (typeof message !== "string" && message.error) message = message.error;
            for (let node of file.previewElement.querySelectorAll("[data-dz-errormessage]"))node.textContent = message;
        }
    },
    errormultiple () {
    },
    // Called when a file gets processed. Since there is a cue, not all added
    // files are processed immediately.
    // Receives `file`
    processing (file) {
        if (file.previewElement) {
            file.previewElement.classList.add("dz-processing");
            if (file._removeLink) return file._removeLink.innerHTML = this.options.dictCancelUpload;
        }
    },
    processingmultiple () {
    },
    // Called whenever the upload progress gets updated.
    // Receives `file`, `progress` (percentage 0-100) and `bytesSent`.
    // To get the total number of bytes of the file, use `file.size`
    uploadprogress (file, progress, bytesSent) {
        if (file.previewElement) for (let node of file.previewElement.querySelectorAll("[data-dz-uploadprogress]"))node.nodeName === "PROGRESS" ? node.value = progress : node.style.width = `${progress}%`;
    },
    // Called whenever the total upload progress gets updated.
    // Called with totalUploadProgress (0-100), totalBytes and totalBytesSent
    totaluploadprogress () {
    },
    // Called just before the file is sent. Gets the `xhr` object as second
    // parameter, so you can modify it (for example to add a CSRF token) and a
    // `formData` object to add additional information.
    sending () {
    },
    sendingmultiple () {
    },
    // When the complete upload is finished and successful
    // Receives `file`
    success (file) {
        if (file.previewElement) return file.previewElement.classList.add("dz-success");
    },
    successmultiple () {
    },
    // When the upload is canceled.
    canceled (file) {
        return this.emit("error", file, this.options.dictUploadCanceled);
    },
    canceledmultiple () {
    },
    // When the upload is finished, either with success or an error.
    // Receives `file`
    complete (file) {
        if (file._removeLink) file._removeLink.innerHTML = this.options.dictRemoveFile;
        if (file.previewElement) return file.previewElement.classList.add("dz-complete");
    },
    completemultiple () {
    },
    maxfilesexceeded () {
    },
    maxfilesreached () {
    },
    queuecomplete () {
    },
    addedfiles () {
    }
};
var $4ca367182776f80b$export$2e2bcd8739ae039 = $4ca367182776f80b$var$defaultOptions;


class $3ed269f2f0fb224b$export$2e2bcd8739ae039 extends $4040acfd8584338d$export$2e2bcd8739ae039 {
    static initClass() {
        // Exposing the emitter class, mainly for tests
        this.prototype.Emitter = $4040acfd8584338d$export$2e2bcd8739ae039;
        /*
     This is a list of all available events you can register on a dropzone object.

     You can register an event handler like this:

     dropzone.on("dragEnter", function() { });

     */ this.prototype.events = [
            "drop",
            "dragstart",
            "dragend",
            "dragenter",
            "dragover",
            "dragleave",
            "addedfile",
            "addedfiles",
            "removedfile",
            "thumbnail",
            "error",
            "errormultiple",
            "processing",
            "processingmultiple",
            "uploadprogress",
            "totaluploadprogress",
            "sending",
            "sendingmultiple",
            "success",
            "successmultiple",
            "canceled",
            "canceledmultiple",
            "complete",
            "completemultiple",
            "reset",
            "maxfilesexceeded",
            "maxfilesreached",
            "queuecomplete", 
        ];
        this.prototype._thumbnailQueue = [];
        this.prototype._processingThumbnail = false;
    }
    // Returns all files that have been accepted
    getAcceptedFiles() {
        return this.files.filter((file)=>file.accepted
        ).map((file)=>file
        );
    }
    // Returns all files that have been rejected
    // Not sure when that's going to be useful, but added for completeness.
    getRejectedFiles() {
        return this.files.filter((file)=>!file.accepted
        ).map((file)=>file
        );
    }
    getFilesWithStatus(status) {
        return this.files.filter((file)=>file.status === status
        ).map((file)=>file
        );
    }
    // Returns all files that are in the queue
    getQueuedFiles() {
        return this.getFilesWithStatus($3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED);
    }
    getUploadingFiles() {
        return this.getFilesWithStatus($3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING);
    }
    getAddedFiles() {
        return this.getFilesWithStatus($3ed269f2f0fb224b$export$2e2bcd8739ae039.ADDED);
    }
    // Files that are either queued or uploading
    getActiveFiles() {
        return this.files.filter((file)=>file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING || file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED
        ).map((file)=>file
        );
    }
    // The function that gets called when Dropzone is initialized. You
    // can (and should) setup event listeners inside this function.
    init() {
        // In case it isn't set already
        if (this.element.tagName === "form") this.element.setAttribute("enctype", "multipart/form-data");
        if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) this.element.appendChild($3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement(`<div class="dz-default dz-message"><button class="dz-button" type="button">${this.options.dictDefaultMessage}</button></div>`));
        if (this.clickableElements.length) {
            let setupHiddenFileInput = ()=>{
                if (this.hiddenFileInput) this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
                this.hiddenFileInput = document.createElement("input");
                this.hiddenFileInput.setAttribute("type", "file");
                if (this.options.maxFiles === null || this.options.maxFiles > 1) this.hiddenFileInput.setAttribute("multiple", "multiple");
                this.hiddenFileInput.className = "dz-hidden-input";
                if (this.options.acceptedFiles !== null) this.hiddenFileInput.setAttribute("accept", this.options.acceptedFiles);
                if (this.options.capture !== null) this.hiddenFileInput.setAttribute("capture", this.options.capture);
                // Making sure that no one can "tab" into this field.
                this.hiddenFileInput.setAttribute("tabindex", "-1");
                // Not setting `display="none"` because some browsers don't accept clicks
                // on elements that aren't displayed.
                this.hiddenFileInput.style.visibility = "hidden";
                this.hiddenFileInput.style.position = "absolute";
                this.hiddenFileInput.style.top = "0";
                this.hiddenFileInput.style.left = "0";
                this.hiddenFileInput.style.height = "0";
                this.hiddenFileInput.style.width = "0";
                $3ed269f2f0fb224b$export$2e2bcd8739ae039.getElement(this.options.hiddenInputContainer, "hiddenInputContainer").appendChild(this.hiddenFileInput);
                this.hiddenFileInput.addEventListener("change", ()=>{
                    let { files: files  } = this.hiddenFileInput;
                    if (files.length) for (let file of files)this.addFile(file);
                    this.emit("addedfiles", files);
                    setupHiddenFileInput();
                });
            };
            setupHiddenFileInput();
        }
        this.URL = window.URL !== null ? window.URL : window.webkitURL;
        // Setup all event listeners on the Dropzone object itself.
        // They're not in @setupEventListeners() because they shouldn't be removed
        // again when the dropzone gets disabled.
        for (let eventName of this.events)this.on(eventName, this.options[eventName]);
        this.on("uploadprogress", ()=>this.updateTotalUploadProgress()
        );
        this.on("removedfile", ()=>this.updateTotalUploadProgress()
        );
        this.on("canceled", (file)=>this.emit("complete", file)
        );
        // Emit a `queuecomplete` event if all files finished uploading.
        this.on("complete", (file)=>{
            if (this.getAddedFiles().length === 0 && this.getUploadingFiles().length === 0 && this.getQueuedFiles().length === 0) // This needs to be deferred so that `queuecomplete` really triggers after `complete`
            return setTimeout(()=>this.emit("queuecomplete")
            , 0);
        });
        const containsFiles = function(e) {
            if (e.dataTransfer.types) // Because e.dataTransfer.types is an Object in
            // IE, we need to iterate like this instead of
            // using e.dataTransfer.types.some()
            for(var i = 0; i < e.dataTransfer.types.length; i++){
                if (e.dataTransfer.types[i] === "Files") return true;
            }
            return false;
        };
        let noPropagation = function(e) {
            // If there are no files, we don't want to stop
            // propagation so we don't interfere with other
            // drag and drop behaviour.
            if (!containsFiles(e)) return;
            e.stopPropagation();
            if (e.preventDefault) return e.preventDefault();
            else return e.returnValue = false;
        };
        // Create the listeners
        this.listeners = [
            {
                element: this.element,
                events: {
                    dragstart: (e)=>{
                        return this.emit("dragstart", e);
                    },
                    dragenter: (e)=>{
                        noPropagation(e);
                        return this.emit("dragenter", e);
                    },
                    dragover: (e)=>{
                        // Makes it possible to drag files from chrome's download bar
                        // http://stackoverflow.com/questions/19526430/drag-and-drop-file-uploads-from-chrome-downloads-bar
                        // Try is required to prevent bug in Internet Explorer 11 (SCRIPT65535 exception)
                        let efct;
                        try {
                            efct = e.dataTransfer.effectAllowed;
                        } catch (error) {
                        }
                        e.dataTransfer.dropEffect = "move" === efct || "linkMove" === efct ? "move" : "copy";
                        noPropagation(e);
                        return this.emit("dragover", e);
                    },
                    dragleave: (e)=>{
                        return this.emit("dragleave", e);
                    },
                    drop: (e)=>{
                        noPropagation(e);
                        return this.drop(e);
                    },
                    dragend: (e)=>{
                        return this.emit("dragend", e);
                    }
                }
            }, 
        ];
        this.clickableElements.forEach((clickableElement)=>{
            return this.listeners.push({
                element: clickableElement,
                events: {
                    click: (evt)=>{
                        // Only the actual dropzone or the message element should trigger file selection
                        if (clickableElement !== this.element || evt.target === this.element || $3ed269f2f0fb224b$export$2e2bcd8739ae039.elementInside(evt.target, this.element.querySelector(".dz-message"))) this.hiddenFileInput.click(); // Forward the click
                        return true;
                    }
                }
            });
        });
        this.enable();
        return this.options.init.call(this);
    }
    // Not fully tested yet
    destroy() {
        this.disable();
        this.removeAllFiles(true);
        if (this.hiddenFileInput != null ? this.hiddenFileInput.parentNode : undefined) {
            this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
            this.hiddenFileInput = null;
        }
        delete this.element.dropzone;
        return $3ed269f2f0fb224b$export$2e2bcd8739ae039.instances.splice($3ed269f2f0fb224b$export$2e2bcd8739ae039.instances.indexOf(this), 1);
    }
    updateTotalUploadProgress() {
        let totalUploadProgress;
        let totalBytesSent = 0;
        let totalBytes = 0;
        let activeFiles = this.getActiveFiles();
        if (activeFiles.length) {
            for (let file of this.getActiveFiles()){
                totalBytesSent += file.upload.bytesSent;
                totalBytes += file.upload.total;
            }
            totalUploadProgress = 100 * totalBytesSent / totalBytes;
        } else totalUploadProgress = 100;
        return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
    }
    // @options.paramName can be a function taking one parameter rather than a string.
    // A parameter name for a file is obtained simply by calling this with an index number.
    _getParamName(n) {
        if (typeof this.options.paramName === "function") return this.options.paramName(n);
        else return `${this.options.paramName}${this.options.uploadMultiple ? `[${n}]` : ""}`;
    }
    // If @options.renameFile is a function,
    // the function will be used to rename the file.name before appending it to the formData
    _renameFile(file) {
        if (typeof this.options.renameFile !== "function") return file.name;
        return this.options.renameFile(file);
    }
    // Returns a form that can be used as fallback if the browser does not support DragnDrop
    //
    // If the dropzone is already a form, only the input field and button are returned. Otherwise a complete form element is provided.
    // This code has to pass in IE7 :(
    getFallbackForm() {
        let existingFallback, form;
        if (existingFallback = this.getExistingFallback()) return existingFallback;
        let fieldsString = '<div class="dz-fallback">';
        if (this.options.dictFallbackText) fieldsString += `<p>${this.options.dictFallbackText}</p>`;
        fieldsString += `<input type="file" name="${this._getParamName(0)}" ${this.options.uploadMultiple ? 'multiple="multiple"' : undefined} /><input type="submit" value="Upload!"></div>`;
        let fields = $3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement(fieldsString);
        if (this.element.tagName !== "FORM") {
            form = $3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement(`<form action="${this.options.url}" enctype="multipart/form-data" method="${this.options.method}"></form>`);
            form.appendChild(fields);
        } else {
            // Make sure that the enctype and method attributes are set properly
            this.element.setAttribute("enctype", "multipart/form-data");
            this.element.setAttribute("method", this.options.method);
        }
        return form != null ? form : fields;
    }
    // Returns the fallback elements if they exist already
    //
    // This code has to pass in IE7 :(
    getExistingFallback() {
        let getFallback = function(elements) {
            for (let el of elements){
                if (/(^| )fallback($| )/.test(el.className)) return el;
            }
        };
        for (let tagName of [
            "div",
            "form"
        ]){
            var fallback;
            if (fallback = getFallback(this.element.getElementsByTagName(tagName))) return fallback;
        }
    }
    // Activates all listeners stored in @listeners
    setupEventListeners() {
        return this.listeners.map((elementListeners)=>(()=>{
                let result = [];
                for(let event in elementListeners.events){
                    let listener = elementListeners.events[event];
                    result.push(elementListeners.element.addEventListener(event, listener, false));
                }
                return result;
            })()
        );
    }
    // Deactivates all listeners stored in @listeners
    removeEventListeners() {
        return this.listeners.map((elementListeners)=>(()=>{
                let result = [];
                for(let event in elementListeners.events){
                    let listener = elementListeners.events[event];
                    result.push(elementListeners.element.removeEventListener(event, listener, false));
                }
                return result;
            })()
        );
    }
    // Removes all event listeners and cancels all files in the queue or being processed.
    disable() {
        this.clickableElements.forEach((element)=>element.classList.remove("dz-clickable")
        );
        this.removeEventListeners();
        this.disabled = true;
        return this.files.map((file)=>this.cancelUpload(file)
        );
    }
    enable() {
        delete this.disabled;
        this.clickableElements.forEach((element)=>element.classList.add("dz-clickable")
        );
        return this.setupEventListeners();
    }
    // Returns a nicely formatted filesize
    filesize(size) {
        let selectedSize = 0;
        let selectedUnit = "b";
        if (size > 0) {
            let units = [
                "tb",
                "gb",
                "mb",
                "kb",
                "b"
            ];
            for(let i = 0; i < units.length; i++){
                let unit = units[i];
                let cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;
                if (size >= cutoff) {
                    selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
                    selectedUnit = unit;
                    break;
                }
            }
            selectedSize = Math.round(10 * selectedSize) / 10; // Cutting of digits
        }
        return `<strong>${selectedSize}</strong> ${this.options.dictFileSizeUnits[selectedUnit]}`;
    }
    // Adds or removes the `dz-max-files-reached` class from the form.
    _updateMaxFilesReachedClass() {
        if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
            if (this.getAcceptedFiles().length === this.options.maxFiles) this.emit("maxfilesreached", this.files);
            return this.element.classList.add("dz-max-files-reached");
        } else return this.element.classList.remove("dz-max-files-reached");
    }
    drop(e) {
        if (!e.dataTransfer) return;
        this.emit("drop", e);
        // Convert the FileList to an Array
        // This is necessary for IE11
        let files = [];
        for(let i = 0; i < e.dataTransfer.files.length; i++)files[i] = e.dataTransfer.files[i];
        // Even if it's a folder, files.length will contain the folders.
        if (files.length) {
            let { items: items  } = e.dataTransfer;
            if (items && items.length && items[0].webkitGetAsEntry != null) // The browser supports dropping of folders, so handle items instead of files
            this._addFilesFromItems(items);
            else this.handleFiles(files);
        }
        this.emit("addedfiles", files);
    }
    paste(e) {
        if ($3ed269f2f0fb224b$var$__guard__(e != null ? e.clipboardData : undefined, (x)=>x.items
        ) == null) return;
        this.emit("paste", e);
        let { items: items  } = e.clipboardData;
        if (items.length) return this._addFilesFromItems(items);
    }
    handleFiles(files) {
        for (let file of files)this.addFile(file);
    }
    // When a folder is dropped (or files are pasted), items must be handled
    // instead of files.
    _addFilesFromItems(items) {
        return (()=>{
            let result = [];
            for (let item of items){
                var entry;
                if (item.webkitGetAsEntry != null && (entry = item.webkitGetAsEntry())) {
                    if (entry.isFile) result.push(this.addFile(item.getAsFile()));
                    else if (entry.isDirectory) // Append all files from that directory to files
                    result.push(this._addFilesFromDirectory(entry, entry.name));
                    else result.push(undefined);
                } else if (item.getAsFile != null) {
                    if (item.kind == null || item.kind === "file") result.push(this.addFile(item.getAsFile()));
                    else result.push(undefined);
                } else result.push(undefined);
            }
            return result;
        })();
    }
    // Goes through the directory, and adds each file it finds recursively
    _addFilesFromDirectory(directory, path) {
        let dirReader = directory.createReader();
        let errorHandler = (error)=>$3ed269f2f0fb224b$var$__guardMethod__(console, "log", (o)=>o.log(error)
            )
        ;
        var readEntries = ()=>{
            return dirReader.readEntries((entries)=>{
                if (entries.length > 0) {
                    for (let entry of entries){
                        if (entry.isFile) entry.file((file)=>{
                            if (this.options.ignoreHiddenFiles && file.name.substring(0, 1) === ".") return;
                            file.fullPath = `${path}/${file.name}`;
                            return this.addFile(file);
                        });
                        else if (entry.isDirectory) this._addFilesFromDirectory(entry, `${path}/${entry.name}`);
                    }
                    // Recursively call readEntries() again, since browser only handle
                    // the first 100 entries.
                    // See: https://developer.mozilla.org/en-US/docs/Web/API/DirectoryReader#readEntries
                    readEntries();
                }
                return null;
            }, errorHandler);
        };
        return readEntries();
    }
    // If `done()` is called without argument the file is accepted
    // If you call it with an error message, the file is rejected
    // (This allows for asynchronous validation)
    //
    // This function checks the filesize, and if the file.type passes the
    // `acceptedFiles` check.
    accept(file, done) {
        if (this.options.maxFilesize && file.size > this.options.maxFilesize * 1048576) done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
        else if (!$3ed269f2f0fb224b$export$2e2bcd8739ae039.isValidFile(file, this.options.acceptedFiles)) done(this.options.dictInvalidFileType);
        else if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
            done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
            this.emit("maxfilesexceeded", file);
        } else this.options.accept.call(this, file, done);
    }
    addFile(file) {
        file.upload = {
            uuid: $3ed269f2f0fb224b$export$2e2bcd8739ae039.uuidv4(),
            progress: 0,
            // Setting the total upload size to file.size for the beginning
            // It's actual different than the size to be transmitted.
            total: file.size,
            bytesSent: 0,
            filename: this._renameFile(file)
        };
        this.files.push(file);
        file.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.ADDED;
        this.emit("addedfile", file);
        this._enqueueThumbnail(file);
        this.accept(file, (error)=>{
            if (error) {
                file.accepted = false;
                this._errorProcessing([
                    file
                ], error); // Will set the file.status
            } else {
                file.accepted = true;
                if (this.options.autoQueue) this.enqueueFile(file);
                 // Will set .accepted = true
            }
            this._updateMaxFilesReachedClass();
        });
    }
    // Wrapper for enqueueFile
    enqueueFiles(files) {
        for (let file of files)this.enqueueFile(file);
        return null;
    }
    enqueueFile(file) {
        if (file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.ADDED && file.accepted === true) {
            file.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED;
            if (this.options.autoProcessQueue) return setTimeout(()=>this.processQueue()
            , 0); // Deferring the call
        } else throw new Error("This file can't be queued because it has already been processed or was rejected.");
    }
    _enqueueThumbnail(file) {
        if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1048576) {
            this._thumbnailQueue.push(file);
            return setTimeout(()=>this._processThumbnailQueue()
            , 0); // Deferring the call
        }
    }
    _processThumbnailQueue() {
        if (this._processingThumbnail || this._thumbnailQueue.length === 0) return;
        this._processingThumbnail = true;
        let file = this._thumbnailQueue.shift();
        return this.createThumbnail(file, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, true, (dataUrl)=>{
            this.emit("thumbnail", file, dataUrl);
            this._processingThumbnail = false;
            return this._processThumbnailQueue();
        });
    }
    // Can be called by the user to remove a file
    removeFile(file) {
        if (file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING) this.cancelUpload(file);
        this.files = $3ed269f2f0fb224b$var$without(this.files, file);
        this.emit("removedfile", file);
        if (this.files.length === 0) return this.emit("reset");
    }
    // Removes all files that aren't currently processed from the list
    removeAllFiles(cancelIfNecessary) {
        // Create a copy of files since removeFile() changes the @files array.
        if (cancelIfNecessary == null) cancelIfNecessary = false;
        for (let file of this.files.slice())if (file.status !== $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING || cancelIfNecessary) this.removeFile(file);
        return null;
    }
    // Resizes an image before it gets sent to the server. This function is the default behavior of
    // `options.transformFile` if `resizeWidth` or `resizeHeight` are set. The callback is invoked with
    // the resized blob.
    resizeImage(file, width, height, resizeMethod, callback) {
        return this.createThumbnail(file, width, height, resizeMethod, true, (dataUrl, canvas)=>{
            if (canvas == null) // The image has not been resized
            return callback(file);
            else {
                let { resizeMimeType: resizeMimeType  } = this.options;
                if (resizeMimeType == null) resizeMimeType = file.type;
                let resizedDataURL = canvas.toDataURL(resizeMimeType, this.options.resizeQuality);
                if (resizeMimeType === "image/jpeg" || resizeMimeType === "image/jpg") // Now add the original EXIF information
                resizedDataURL = $3ed269f2f0fb224b$var$ExifRestore.restore(file.dataURL, resizedDataURL);
                return callback($3ed269f2f0fb224b$export$2e2bcd8739ae039.dataURItoBlob(resizedDataURL));
            }
        });
    }
    createThumbnail(file, width, height, resizeMethod, fixOrientation, callback) {
        let fileReader = new FileReader();
        fileReader.onload = ()=>{
            file.dataURL = fileReader.result;
            // Don't bother creating a thumbnail for SVG images since they're vector
            if (file.type === "image/svg+xml") {
                if (callback != null) callback(fileReader.result);
                return;
            }
            this.createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback);
        };
        fileReader.readAsDataURL(file);
    }
    // `mockFile` needs to have these attributes:
    //
    //     { name: 'name', size: 12345, imageUrl: '' }
    //
    // `callback` will be invoked when the image has been downloaded and displayed.
    // `crossOrigin` will be added to the `img` tag when accessing the file.
    displayExistingFile(mockFile, imageUrl, callback, crossOrigin, resizeThumbnail = true) {
        this.emit("addedfile", mockFile);
        this.emit("complete", mockFile);
        if (!resizeThumbnail) {
            this.emit("thumbnail", mockFile, imageUrl);
            if (callback) callback();
        } else {
            let onDone = (thumbnail)=>{
                this.emit("thumbnail", mockFile, thumbnail);
                if (callback) callback();
            };
            mockFile.dataURL = imageUrl;
            this.createThumbnailFromUrl(mockFile, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, this.options.fixOrientation, onDone, crossOrigin);
        }
    }
    createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback, crossOrigin) {
        // Not using `new Image` here because of a bug in latest Chrome versions.
        // See https://github.com/enyo/dropzone/pull/226
        let img = document.createElement("img");
        if (crossOrigin) img.crossOrigin = crossOrigin;
        // fixOrientation is not needed anymore with browsers handling imageOrientation
        fixOrientation = getComputedStyle(document.body)["imageOrientation"] == "from-image" ? false : fixOrientation;
        img.onload = ()=>{
            let loadExif = (callback)=>callback(1)
            ;
            if (typeof EXIF !== "undefined" && EXIF !== null && fixOrientation) loadExif = (callback)=>EXIF.getData(img, function() {
                    return callback(EXIF.getTag(this, "Orientation"));
                })
            ;
            return loadExif((orientation)=>{
                file.width = img.width;
                file.height = img.height;
                let resizeInfo = this.options.resize.call(this, file, width, height, resizeMethod);
                let canvas = document.createElement("canvas");
                let ctx = canvas.getContext("2d");
                canvas.width = resizeInfo.trgWidth;
                canvas.height = resizeInfo.trgHeight;
                if (orientation > 4) {
                    canvas.width = resizeInfo.trgHeight;
                    canvas.height = resizeInfo.trgWidth;
                }
                switch(orientation){
                    case 2:
                        // horizontal flip
                        ctx.translate(canvas.width, 0);
                        ctx.scale(-1, 1);
                        break;
                    case 3:
                        // 180° rotate left
                        ctx.translate(canvas.width, canvas.height);
                        ctx.rotate(Math.PI);
                        break;
                    case 4:
                        // vertical flip
                        ctx.translate(0, canvas.height);
                        ctx.scale(1, -1);
                        break;
                    case 5:
                        // vertical flip + 90 rotate right
                        ctx.rotate(0.5 * Math.PI);
                        ctx.scale(1, -1);
                        break;
                    case 6:
                        // 90° rotate right
                        ctx.rotate(0.5 * Math.PI);
                        ctx.translate(0, -canvas.width);
                        break;
                    case 7:
                        // horizontal flip + 90 rotate right
                        ctx.rotate(0.5 * Math.PI);
                        ctx.translate(canvas.height, -canvas.width);
                        ctx.scale(-1, 1);
                        break;
                    case 8:
                        // 90° rotate left
                        ctx.rotate(-0.5 * Math.PI);
                        ctx.translate(-canvas.height, 0);
                        break;
                }
                // This is a bugfix for iOS' scaling bug.
                $3ed269f2f0fb224b$var$drawImageIOSFix(ctx, img, resizeInfo.srcX != null ? resizeInfo.srcX : 0, resizeInfo.srcY != null ? resizeInfo.srcY : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, resizeInfo.trgX != null ? resizeInfo.trgX : 0, resizeInfo.trgY != null ? resizeInfo.trgY : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
                let thumbnail = canvas.toDataURL("image/png");
                if (callback != null) return callback(thumbnail, canvas);
            });
        };
        if (callback != null) img.onerror = callback;
        return img.src = file.dataURL;
    }
    // Goes through the queue and processes files if there aren't too many already.
    processQueue() {
        let { parallelUploads: parallelUploads  } = this.options;
        let processingLength = this.getUploadingFiles().length;
        let i = processingLength;
        // There are already at least as many files uploading than should be
        if (processingLength >= parallelUploads) return;
        let queuedFiles = this.getQueuedFiles();
        if (!(queuedFiles.length > 0)) return;
        if (this.options.uploadMultiple) // The files should be uploaded in one request
        return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
        else while(i < parallelUploads){
            if (!queuedFiles.length) return;
             // Nothing left to process
            this.processFile(queuedFiles.shift());
            i++;
        }
    }
    // Wrapper for `processFiles`
    processFile(file) {
        return this.processFiles([
            file
        ]);
    }
    // Loads the file, then calls finishedLoading()
    processFiles(files) {
        for (let file of files){
            file.processing = true; // Backwards compatibility
            file.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING;
            this.emit("processing", file);
        }
        if (this.options.uploadMultiple) this.emit("processingmultiple", files);
        return this.uploadFiles(files);
    }
    _getFilesWithXhr(xhr) {
        let files;
        return files = this.files.filter((file)=>file.xhr === xhr
        ).map((file)=>file
        );
    }
    // Cancels the file upload and sets the status to CANCELED
    // **if** the file is actually being uploaded.
    // If it's still in the queue, the file is being removed from it and the status
    // set to CANCELED.
    cancelUpload(file) {
        if (file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING) {
            let groupedFiles = this._getFilesWithXhr(file.xhr);
            for (let groupedFile of groupedFiles)groupedFile.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.CANCELED;
            if (typeof file.xhr !== "undefined") file.xhr.abort();
            for (let groupedFile1 of groupedFiles)this.emit("canceled", groupedFile1);
            if (this.options.uploadMultiple) this.emit("canceledmultiple", groupedFiles);
        } else if (file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.ADDED || file.status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED) {
            file.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.CANCELED;
            this.emit("canceled", file);
            if (this.options.uploadMultiple) this.emit("canceledmultiple", [
                file
            ]);
        }
        if (this.options.autoProcessQueue) return this.processQueue();
    }
    resolveOption(option, ...args) {
        if (typeof option === "function") return option.apply(this, args);
        return option;
    }
    uploadFile(file) {
        return this.uploadFiles([
            file
        ]);
    }
    uploadFiles(files) {
        this._transformFiles(files, (transformedFiles)=>{
            if (this.options.chunking) {
                // Chunking is not allowed to be used with `uploadMultiple` so we know
                // that there is only __one__file.
                let transformedFile = transformedFiles[0];
                files[0].upload.chunked = this.options.chunking && (this.options.forceChunking || transformedFile.size > this.options.chunkSize);
                files[0].upload.totalChunkCount = Math.ceil(transformedFile.size / this.options.chunkSize);
            }
            if (files[0].upload.chunked) {
                // This file should be sent in chunks!
                // If the chunking option is set, we **know** that there can only be **one** file, since
                // uploadMultiple is not allowed with this option.
                let file = files[0];
                let transformedFile = transformedFiles[0];
                let startedChunkCount = 0;
                file.upload.chunks = [];
                let handleNextChunk = ()=>{
                    let chunkIndex = 0;
                    // Find the next item in file.upload.chunks that is not defined yet.
                    while(file.upload.chunks[chunkIndex] !== undefined)chunkIndex++;
                    // This means, that all chunks have already been started.
                    if (chunkIndex >= file.upload.totalChunkCount) return;
                    startedChunkCount++;
                    let start = chunkIndex * this.options.chunkSize;
                    let end = Math.min(start + this.options.chunkSize, transformedFile.size);
                    let dataBlock = {
                        name: this._getParamName(0),
                        data: transformedFile.webkitSlice ? transformedFile.webkitSlice(start, end) : transformedFile.slice(start, end),
                        filename: file.upload.filename,
                        chunkIndex: chunkIndex
                    };
                    file.upload.chunks[chunkIndex] = {
                        file: file,
                        index: chunkIndex,
                        dataBlock: dataBlock,
                        status: $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING,
                        progress: 0,
                        retries: 0
                    };
                    this._uploadData(files, [
                        dataBlock
                    ]);
                };
                file.upload.finishedChunkUpload = (chunk, response)=>{
                    let allFinished = true;
                    chunk.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.SUCCESS;
                    // Clear the data from the chunk
                    chunk.dataBlock = null;
                    chunk.response = chunk.xhr.responseText;
                    chunk.responseHeaders = chunk.xhr.getAllResponseHeaders();
                    // Leaving this reference to xhr will cause memory leaks.
                    chunk.xhr = null;
                    for(let i = 0; i < file.upload.totalChunkCount; i++){
                        if (file.upload.chunks[i] === undefined) return handleNextChunk();
                        if (file.upload.chunks[i].status !== $3ed269f2f0fb224b$export$2e2bcd8739ae039.SUCCESS) allFinished = false;
                    }
                    if (allFinished) this.options.chunksUploaded(file, ()=>{
                        this._finished(files, response, null);
                    });
                };
                if (this.options.parallelChunkUploads) for(let i = 0; i < file.upload.totalChunkCount; i++)handleNextChunk();
                else handleNextChunk();
            } else {
                let dataBlocks = [];
                for(let i = 0; i < files.length; i++)dataBlocks[i] = {
                    name: this._getParamName(i),
                    data: transformedFiles[i],
                    filename: files[i].upload.filename
                };
                this._uploadData(files, dataBlocks);
            }
        });
    }
    /// Returns the right chunk for given file and xhr
    _getChunk(file, xhr) {
        for(let i = 0; i < file.upload.totalChunkCount; i++){
            if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].xhr === xhr) return file.upload.chunks[i];
        }
    }
    // This function actually uploads the file(s) to the server.
    //
    //  If dataBlocks contains the actual data to upload (meaning, that this could
    // either be transformed files, or individual chunks for chunked upload) then
    // they will be used for the actual data to upload.
    _uploadData(files, dataBlocks) {
        let xhr = new XMLHttpRequest();
        // Put the xhr object in the file objects to be able to reference it later.
        for (let file of files)file.xhr = xhr;
        if (files[0].upload.chunked) // Put the xhr object in the right chunk object, so it can be associated
        // later, and found with _getChunk.
        files[0].upload.chunks[dataBlocks[0].chunkIndex].xhr = xhr;
        let method = this.resolveOption(this.options.method, files, dataBlocks);
        let url = this.resolveOption(this.options.url, files, dataBlocks);
        xhr.open(method, url, true);
        // Setting the timeout after open because of IE11 issue: https://gitlab.com/meno/dropzone/issues/8
        let timeout = this.resolveOption(this.options.timeout, files);
        if (timeout) xhr.timeout = this.resolveOption(this.options.timeout, files);
        // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179
        xhr.withCredentials = !!this.options.withCredentials;
        xhr.onload = (e)=>{
            this._finishedUploading(files, xhr, e);
        };
        xhr.ontimeout = ()=>{
            this._handleUploadError(files, xhr, `Request timedout after ${this.options.timeout / 1000} seconds`);
        };
        xhr.onerror = ()=>{
            this._handleUploadError(files, xhr);
        };
        // Some browsers do not have the .upload property
        let progressObj = xhr.upload != null ? xhr.upload : xhr;
        progressObj.onprogress = (e)=>this._updateFilesUploadProgress(files, xhr, e)
        ;
        let headers = this.options.defaultHeaders ? {
            Accept: "application/json",
            "Cache-Control": "no-cache",
            "X-Requested-With": "XMLHttpRequest"
        } : {
        };
        if (this.options.binaryBody) headers["Content-Type"] = files[0].type;
        if (this.options.headers) (0,just_extend__WEBPACK_IMPORTED_MODULE_0__["default"])(headers, this.options.headers);
        for(let headerName in headers){
            let headerValue = headers[headerName];
            if (headerValue) xhr.setRequestHeader(headerName, headerValue);
        }
        if (this.options.binaryBody) {
            // Since the file is going to be sent as binary body, it doesn't make
            // any sense to generate `FormData` for it.
            for (let file of files)this.emit("sending", file, xhr);
            if (this.options.uploadMultiple) this.emit("sendingmultiple", files, xhr);
            this.submitRequest(xhr, null, files);
        } else {
            let formData = new FormData();
            // Adding all @options parameters
            if (this.options.params) {
                let additionalParams = this.options.params;
                if (typeof additionalParams === "function") additionalParams = additionalParams.call(this, files, xhr, files[0].upload.chunked ? this._getChunk(files[0], xhr) : null);
                for(let key in additionalParams){
                    let value = additionalParams[key];
                    if (Array.isArray(value)) // The additional parameter contains an array,
                    // so lets iterate over it to attach each value
                    // individually.
                    for(let i = 0; i < value.length; i++)formData.append(key, value[i]);
                    else formData.append(key, value);
                }
            }
            // Let the user add additional data if necessary
            for (let file of files)this.emit("sending", file, xhr, formData);
            if (this.options.uploadMultiple) this.emit("sendingmultiple", files, xhr, formData);
            this._addFormElementData(formData);
            // Finally add the files
            // Has to be last because some servers (eg: S3) expect the file to be the last parameter
            for(let i = 0; i < dataBlocks.length; i++){
                let dataBlock = dataBlocks[i];
                formData.append(dataBlock.name, dataBlock.data, dataBlock.filename);
            }
            this.submitRequest(xhr, formData, files);
        }
    }
    // Transforms all files with this.options.transformFile and invokes done with the transformed files when done.
    _transformFiles(files, done) {
        let transformedFiles = [];
        // Clumsy way of handling asynchronous calls, until I get to add a proper Future library.
        let doneCounter = 0;
        for(let i = 0; i < files.length; i++)this.options.transformFile.call(this, files[i], (transformedFile)=>{
            transformedFiles[i] = transformedFile;
            if (++doneCounter === files.length) done(transformedFiles);
        });
    }
    // Takes care of adding other input elements of the form to the AJAX request
    _addFormElementData(formData) {
        // Take care of other input elements
        if (this.element.tagName === "FORM") for (let input of this.element.querySelectorAll("input, textarea, select, button")){
            let inputName = input.getAttribute("name");
            let inputType = input.getAttribute("type");
            if (inputType) inputType = inputType.toLowerCase();
            // If the input doesn't have a name, we can't use it.
            if (typeof inputName === "undefined" || inputName === null) continue;
            if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
                // Possibly multiple values
                for (let option of input.options)if (option.selected) formData.append(inputName, option.value);
            } else if (!inputType || inputType !== "checkbox" && inputType !== "radio" || input.checked) formData.append(inputName, input.value);
        }
    }
    // Invoked when there is new progress information about given files.
    // If e is not provided, it is assumed that the upload is finished.
    _updateFilesUploadProgress(files, xhr, e) {
        if (!files[0].upload.chunked) // Handle file uploads without chunking
        for (let file of files){
            if (file.upload.total && file.upload.bytesSent && file.upload.bytesSent == file.upload.total) continue;
            if (e) {
                file.upload.progress = 100 * e.loaded / e.total;
                file.upload.total = e.total;
                file.upload.bytesSent = e.loaded;
            } else {
                // No event, so we're at 100%
                file.upload.progress = 100;
                file.upload.bytesSent = file.upload.total;
            }
            this.emit("uploadprogress", file, file.upload.progress, file.upload.bytesSent);
        }
        else {
            // Handle chunked file uploads
            // Chunked upload is not compatible with uploading multiple files in one
            // request, so we know there's only one file.
            let file = files[0];
            // Since this is a chunked upload, we need to update the appropriate chunk
            // progress.
            let chunk = this._getChunk(file, xhr);
            if (e) {
                chunk.progress = 100 * e.loaded / e.total;
                chunk.total = e.total;
                chunk.bytesSent = e.loaded;
            } else {
                // No event, so we're at 100%
                chunk.progress = 100;
                chunk.bytesSent = chunk.total;
            }
            // Now tally the *file* upload progress from its individual chunks
            file.upload.progress = 0;
            file.upload.total = 0;
            file.upload.bytesSent = 0;
            for(let i = 0; i < file.upload.totalChunkCount; i++)if (file.upload.chunks[i] && typeof file.upload.chunks[i].progress !== "undefined") {
                file.upload.progress += file.upload.chunks[i].progress;
                file.upload.total += file.upload.chunks[i].total;
                file.upload.bytesSent += file.upload.chunks[i].bytesSent;
            }
            // Since the process is a percentage, we need to divide by the amount of
            // chunks we've used.
            file.upload.progress = file.upload.progress / file.upload.totalChunkCount;
            this.emit("uploadprogress", file, file.upload.progress, file.upload.bytesSent);
        }
    }
    _finishedUploading(files, xhr, e) {
        let response;
        if (files[0].status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.CANCELED) return;
        if (xhr.readyState !== 4) return;
        if (xhr.responseType !== "arraybuffer" && xhr.responseType !== "blob") {
            response = xhr.responseText;
            if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) try {
                response = JSON.parse(response);
            } catch (error) {
                e = error;
                response = "Invalid JSON response from server.";
            }
        }
        this._updateFilesUploadProgress(files, xhr);
        if (!(200 <= xhr.status && xhr.status < 300)) this._handleUploadError(files, xhr, response);
        else if (files[0].upload.chunked) files[0].upload.finishedChunkUpload(this._getChunk(files[0], xhr), response);
        else this._finished(files, response, e);
    }
    _handleUploadError(files, xhr, response) {
        if (files[0].status === $3ed269f2f0fb224b$export$2e2bcd8739ae039.CANCELED) return;
        if (files[0].upload.chunked && this.options.retryChunks) {
            let chunk = this._getChunk(files[0], xhr);
            if ((chunk.retries++) < this.options.retryChunksLimit) {
                this._uploadData(files, [
                    chunk.dataBlock
                ]);
                return;
            } else console.warn("Retried this chunk too often. Giving up.");
        }
        this._errorProcessing(files, response || this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr);
    }
    submitRequest(xhr, formData, files) {
        if (xhr.readyState != 1) {
            console.warn("Cannot send this request because the XMLHttpRequest.readyState is not OPENED.");
            return;
        }
        if (this.options.binaryBody) {
            if (files[0].upload.chunked) {
                const chunk = this._getChunk(files[0], xhr);
                xhr.send(chunk.dataBlock.data);
            } else xhr.send(files[0]);
        } else xhr.send(formData);
    }
    // Called internally when processing is finished.
    // Individual callbacks have to be called in the appropriate sections.
    _finished(files, responseText, e) {
        for (let file of files){
            file.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.SUCCESS;
            this.emit("success", file, responseText, e);
            this.emit("complete", file);
        }
        if (this.options.uploadMultiple) {
            this.emit("successmultiple", files, responseText, e);
            this.emit("completemultiple", files);
        }
        if (this.options.autoProcessQueue) return this.processQueue();
    }
    // Called internally when processing is finished.
    // Individual callbacks have to be called in the appropriate sections.
    _errorProcessing(files, message, xhr) {
        for (let file of files){
            file.status = $3ed269f2f0fb224b$export$2e2bcd8739ae039.ERROR;
            this.emit("error", file, message, xhr);
            this.emit("complete", file);
        }
        if (this.options.uploadMultiple) {
            this.emit("errormultiple", files, message, xhr);
            this.emit("completemultiple", files);
        }
        if (this.options.autoProcessQueue) return this.processQueue();
    }
    static uuidv4() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
            let r = Math.random() * 16 | 0, v = c === "x" ? r : r & 3 | 8;
            return v.toString(16);
        });
    }
    constructor(el, options){
        super();
        let fallback, left;
        this.element = el;
        this.clickableElements = [];
        this.listeners = [];
        this.files = []; // All files
        if (typeof this.element === "string") this.element = document.querySelector(this.element);
        // Not checking if instance of HTMLElement or Element since IE9 is extremely weird.
        if (!this.element || this.element.nodeType == null) throw new Error("Invalid dropzone element.");
        if (this.element.dropzone) throw new Error("Dropzone already attached.");
        // Now add this dropzone to the instances.
        $3ed269f2f0fb224b$export$2e2bcd8739ae039.instances.push(this);
        // Put the dropzone inside the element itself.
        this.element.dropzone = this;
        let elementOptions = (left = $3ed269f2f0fb224b$export$2e2bcd8739ae039.optionsForElement(this.element)) != null ? left : {
        };
        this.options = (0,just_extend__WEBPACK_IMPORTED_MODULE_0__["default"])(true, {
        }, $4ca367182776f80b$export$2e2bcd8739ae039, elementOptions, options != null ? options : {
        });
        this.options.previewTemplate = this.options.previewTemplate.replace(/\n*/g, "");
        // If the browser failed, just call the fallback and leave
        if (this.options.forceFallback || !$3ed269f2f0fb224b$export$2e2bcd8739ae039.isBrowserSupported()) return this.options.fallback.call(this);
        // @options.url = @element.getAttribute "action" unless @options.url?
        if (this.options.url == null) this.options.url = this.element.getAttribute("action");
        if (!this.options.url) throw new Error("No URL provided.");
        if (this.options.acceptedFiles && this.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
        if (this.options.uploadMultiple && this.options.chunking) throw new Error("You cannot set both: uploadMultiple and chunking.");
        if (this.options.binaryBody && this.options.uploadMultiple) throw new Error("You cannot set both: binaryBody and uploadMultiple.");
        // Backwards compatibility
        if (this.options.acceptedMimeTypes) {
            this.options.acceptedFiles = this.options.acceptedMimeTypes;
            delete this.options.acceptedMimeTypes;
        }
        // Backwards compatibility
        if (this.options.renameFilename != null) this.options.renameFile = (file)=>this.options.renameFilename.call(this, file.name, file)
        ;
        if (typeof this.options.method === "string") this.options.method = this.options.method.toUpperCase();
        if ((fallback = this.getExistingFallback()) && fallback.parentNode) // Remove the fallback
        fallback.parentNode.removeChild(fallback);
        // Display previews in the previewsContainer element or the Dropzone element unless explicitly set to false
        if (this.options.previewsContainer !== false) {
            if (this.options.previewsContainer) this.previewsContainer = $3ed269f2f0fb224b$export$2e2bcd8739ae039.getElement(this.options.previewsContainer, "previewsContainer");
            else this.previewsContainer = this.element;
        }
        if (this.options.clickable) {
            if (this.options.clickable === true) this.clickableElements = [
                this.element
            ];
            else this.clickableElements = $3ed269f2f0fb224b$export$2e2bcd8739ae039.getElements(this.options.clickable, "clickable");
        }
        this.init();
    }
}
$3ed269f2f0fb224b$export$2e2bcd8739ae039.initClass();
// This is a map of options for your different dropzones. Add configurations
// to this object for your different dropzone elemens.
//
// Example:
//
//     Dropzone.options.myDropzoneElementId = { maxFilesize: 1 };
//
// And in html:
//
//     <form action="/upload" id="my-dropzone-element-id" class="dropzone"></form>
$3ed269f2f0fb224b$export$2e2bcd8739ae039.options = {
};
// Returns the options for an element or undefined if none available.
$3ed269f2f0fb224b$export$2e2bcd8739ae039.optionsForElement = function(element) {
    // Get the `Dropzone.options.elementId` for this element if it exists
    if (element.getAttribute("id")) return $3ed269f2f0fb224b$export$2e2bcd8739ae039.options[$3ed269f2f0fb224b$var$camelize(element.getAttribute("id"))];
    else return undefined;
};
// Holds a list of all dropzone instances
$3ed269f2f0fb224b$export$2e2bcd8739ae039.instances = [];
// Returns the dropzone for given element if any
$3ed269f2f0fb224b$export$2e2bcd8739ae039.forElement = function(element) {
    if (typeof element === "string") element = document.querySelector(element);
    if ((element != null ? element.dropzone : undefined) == null) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
    return element.dropzone;
};
// Looks for all .dropzone elements and creates a dropzone for them
$3ed269f2f0fb224b$export$2e2bcd8739ae039.discover = function() {
    let dropzones;
    if (document.querySelectorAll) dropzones = document.querySelectorAll(".dropzone");
    else {
        dropzones = [];
        // IE :(
        let checkElements = (elements)=>(()=>{
                let result = [];
                for (let el of elements)if (/(^| )dropzone($| )/.test(el.className)) result.push(dropzones.push(el));
                else result.push(undefined);
                return result;
            })()
        ;
        checkElements(document.getElementsByTagName("div"));
        checkElements(document.getElementsByTagName("form"));
    }
    return (()=>{
        let result = [];
        for (let dropzone of dropzones)// Create a dropzone unless auto discover has been disabled for specific element
        if ($3ed269f2f0fb224b$export$2e2bcd8739ae039.optionsForElement(dropzone) !== false) result.push(new $3ed269f2f0fb224b$export$2e2bcd8739ae039(dropzone));
        else result.push(undefined);
        return result;
    })();
};
// Some browsers support drag and drog functionality, but not correctly.
//
// So I created a blocklist of userAgents. Yes, yes. Browser sniffing, I know.
// But what to do when browsers *theoretically* support an API, but crash
// when using it.
//
// This is a list of regular expressions tested against navigator.userAgent
//
// ** It should only be used on browser that *do* support the API, but
// incorrectly **
$3ed269f2f0fb224b$export$2e2bcd8739ae039.blockedBrowsers = [
    // The mac os and windows phone version of opera 12 seems to have a problem with the File drag'n'drop API.
    /opera.*(Macintosh|Windows Phone).*version\/12/i, 
];
// Checks if the browser is supported
$3ed269f2f0fb224b$export$2e2bcd8739ae039.isBrowserSupported = function() {
    let capableBrowser = true;
    if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
        if (!("classList" in document.createElement("a"))) capableBrowser = false;
        else {
            if ($3ed269f2f0fb224b$export$2e2bcd8739ae039.blacklistedBrowsers !== undefined) // Since this has been renamed, this makes sure we don't break older
            // configuration.
            $3ed269f2f0fb224b$export$2e2bcd8739ae039.blockedBrowsers = $3ed269f2f0fb224b$export$2e2bcd8739ae039.blacklistedBrowsers;
            // The browser supports the API, but may be blocked.
            for (let regex of $3ed269f2f0fb224b$export$2e2bcd8739ae039.blockedBrowsers)if (regex.test(navigator.userAgent)) {
                capableBrowser = false;
                continue;
            }
        }
    } else capableBrowser = false;
    return capableBrowser;
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.dataURItoBlob = function(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    let byteString = atob(dataURI.split(",")[1]);
    // separate out the mime component
    let mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    // write the bytes of the string to an ArrayBuffer
    let ab = new ArrayBuffer(byteString.length);
    let ia = new Uint8Array(ab);
    for(let i = 0, end = byteString.length, asc = 0 <= end; asc ? i <= end : i >= end; asc ? i++ : i--)ia[i] = byteString.charCodeAt(i);
    // write the ArrayBuffer to a blob
    return new Blob([
        ab
    ], {
        type: mimeString
    });
};
// Returns an array without the rejected item
const $3ed269f2f0fb224b$var$without = (list, rejectedItem)=>list.filter((item)=>item !== rejectedItem
    ).map((item)=>item
    )
;
// abc-def_ghi -> abcDefGhi
const $3ed269f2f0fb224b$var$camelize = (str)=>str.replace(/[\-_](\w)/g, (match)=>match.charAt(1).toUpperCase()
    )
;
// Creates an element from string
$3ed269f2f0fb224b$export$2e2bcd8739ae039.createElement = function(string) {
    let div = document.createElement("div");
    div.innerHTML = string;
    return div.childNodes[0];
};
// Tests if given element is inside (or simply is) the container
$3ed269f2f0fb224b$export$2e2bcd8739ae039.elementInside = function(element, container) {
    if (element === container) return true;
     // Coffeescript doesn't support do/while loops
    while(element = element.parentNode){
        if (element === container) return true;
    }
    return false;
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.getElement = function(el, name) {
    let element;
    if (typeof el === "string") element = document.querySelector(el);
    else if (el.nodeType != null) element = el;
    if (element == null) throw new Error(`Invalid \`${name}\` option provided. Please provide a CSS selector or a plain HTML element.`);
    return element;
};
$3ed269f2f0fb224b$export$2e2bcd8739ae039.getElements = function(els, name) {
    let el, elements;
    if (els instanceof Array) {
        elements = [];
        try {
            for (el of els)elements.push(this.getElement(el, name));
        } catch (e) {
            elements = null;
        }
    } else if (typeof els === "string") {
        elements = [];
        for (el of document.querySelectorAll(els))elements.push(el);
    } else if (els.nodeType != null) elements = [
        els
    ];
    if (elements == null || !elements.length) throw new Error(`Invalid \`${name}\` option provided. Please provide a CSS selector, a plain HTML element or a list of those.`);
    return elements;
};
// Asks the user the question and calls accepted or rejected accordingly
//
// The default implementation just uses `window.confirm` and then calls the
// appropriate callback.
$3ed269f2f0fb224b$export$2e2bcd8739ae039.confirm = function(question, accepted, rejected) {
    if (window.confirm(question)) return accepted();
    else if (rejected != null) return rejected();
};
// Validates the mime type like this:
//
// https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept
$3ed269f2f0fb224b$export$2e2bcd8739ae039.isValidFile = function(file, acceptedFiles) {
    if (!acceptedFiles) return true;
     // If there are no accepted mime types, it's OK
    acceptedFiles = acceptedFiles.split(",");
    let mimeType = file.type;
    let baseMimeType = mimeType.replace(/\/.*$/, "");
    for (let validType of acceptedFiles){
        validType = validType.trim();
        if (validType.charAt(0) === ".") {
            if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) return true;
        } else if (/\/\*$/.test(validType)) {
            // This is something like a image/* mime type
            if (baseMimeType === validType.replace(/\/.*$/, "")) return true;
        } else {
            if (mimeType === validType) return true;
        }
    }
    return false;
};
// Augment jQuery
if (typeof jQuery !== "undefined" && jQuery !== null) jQuery.fn.dropzone = function(options) {
    return this.each(function() {
        return new $3ed269f2f0fb224b$export$2e2bcd8739ae039(this, options);
    });
};
// Dropzone file status codes
$3ed269f2f0fb224b$export$2e2bcd8739ae039.ADDED = "added";
$3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED = "queued";
// For backwards compatibility. Now, if a file is accepted, it's either queued
// or uploading.
$3ed269f2f0fb224b$export$2e2bcd8739ae039.ACCEPTED = $3ed269f2f0fb224b$export$2e2bcd8739ae039.QUEUED;
$3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING = "uploading";
$3ed269f2f0fb224b$export$2e2bcd8739ae039.PROCESSING = $3ed269f2f0fb224b$export$2e2bcd8739ae039.UPLOADING; // alias
$3ed269f2f0fb224b$export$2e2bcd8739ae039.CANCELED = "canceled";
$3ed269f2f0fb224b$export$2e2bcd8739ae039.ERROR = "error";
$3ed269f2f0fb224b$export$2e2bcd8739ae039.SUCCESS = "success";
/*

 Bugfix for iOS 6 and 7
 Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
 based on the work of https://github.com/stomita/ios-imagefile-megapixel

 */ // Detecting vertical squash in loaded image.
// Fixes a bug which squash image vertically while drawing into canvas for some images.
// This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel
let $3ed269f2f0fb224b$var$detectVerticalSquash = function(img) {
    let iw = img.naturalWidth;
    let ih = img.naturalHeight;
    let canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = ih;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    let { data: data  } = ctx.getImageData(1, 0, 1, ih);
    // search image edge pixel position in case it is squashed vertically.
    let sy = 0;
    let ey = ih;
    let py = ih;
    while(py > sy){
        let alpha = data[(py - 1) * 4 + 3];
        if (alpha === 0) ey = py;
        else sy = py;
        py = ey + sy >> 1;
    }
    let ratio = py / ih;
    if (ratio === 0) return 1;
    else return ratio;
};
// A replacement for context.drawImage
// (args are for source and destination).
var $3ed269f2f0fb224b$var$drawImageIOSFix = function(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
    let vertSquashRatio = $3ed269f2f0fb224b$var$detectVerticalSquash(img);
    return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
};
// Based on MinifyJpeg
// Source: http://www.perry.cz/files/ExifRestorer.js
// http://elicon.blog57.fc2.com/blog-entry-206.html
class $3ed269f2f0fb224b$var$ExifRestore {
    static initClass() {
        this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    }
    static encode64(input) {
        let output = "";
        let chr1 = undefined;
        let chr2 = undefined;
        let chr3 = "";
        let enc1 = undefined;
        let enc2 = undefined;
        let enc3 = undefined;
        let enc4 = "";
        let i = 0;
        while(true){
            chr1 = input[i++];
            chr2 = input[i++];
            chr3 = input[i++];
            enc1 = chr1 >> 2;
            enc2 = (chr1 & 3) << 4 | chr2 >> 4;
            enc3 = (chr2 & 15) << 2 | chr3 >> 6;
            enc4 = chr3 & 63;
            if (isNaN(chr2)) enc3 = enc4 = 64;
            else if (isNaN(chr3)) enc4 = 64;
            output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);
            chr1 = chr2 = chr3 = "";
            enc1 = enc2 = enc3 = enc4 = "";
            if (!(i < input.length)) break;
        }
        return output;
    }
    static restore(origFileBase64, resizedFileBase64) {
        if (!origFileBase64.match("data:image/jpeg;base64,")) return resizedFileBase64;
        let rawImage = this.decode64(origFileBase64.replace("data:image/jpeg;base64,", ""));
        let segments = this.slice2Segments(rawImage);
        let image = this.exifManipulation(resizedFileBase64, segments);
        return `data:image/jpeg;base64,${this.encode64(image)}`;
    }
    static exifManipulation(resizedFileBase64, segments) {
        let exifArray = this.getExifArray(segments);
        let newImageArray = this.insertExif(resizedFileBase64, exifArray);
        let aBuffer = new Uint8Array(newImageArray);
        return aBuffer;
    }
    static getExifArray(segments) {
        let seg = undefined;
        let x = 0;
        while(x < segments.length){
            seg = segments[x];
            if (seg[0] === 255 & seg[1] === 225) return seg;
            x++;
        }
        return [];
    }
    static insertExif(resizedFileBase64, exifArray) {
        let imageData = resizedFileBase64.replace("data:image/jpeg;base64,", "");
        let buf = this.decode64(imageData);
        let separatePoint = buf.indexOf(255, 3);
        let mae = buf.slice(0, separatePoint);
        let ato = buf.slice(separatePoint);
        let array = mae;
        array = array.concat(exifArray);
        array = array.concat(ato);
        return array;
    }
    static slice2Segments(rawImageArray) {
        let head = 0;
        let segments = [];
        while(true){
            var length;
            if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218) break;
            if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216) head += 2;
            else {
                length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3];
                let endPoint = head + length + 2;
                let seg = rawImageArray.slice(head, endPoint);
                segments.push(seg);
                head = endPoint;
            }
            if (head > rawImageArray.length) break;
        }
        return segments;
    }
    static decode64(input) {
        let output = "";
        let chr1 = undefined;
        let chr2 = undefined;
        let chr3 = "";
        let enc1 = undefined;
        let enc2 = undefined;
        let enc3 = undefined;
        let enc4 = "";
        let i = 0;
        let buf = [];
        // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
        let base64test = /[^A-Za-z0-9\+\/\=]/g;
        if (base64test.exec(input)) console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding.");
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while(true){
            enc1 = this.KEY_STR.indexOf(input.charAt(i++));
            enc2 = this.KEY_STR.indexOf(input.charAt(i++));
            enc3 = this.KEY_STR.indexOf(input.charAt(i++));
            enc4 = this.KEY_STR.indexOf(input.charAt(i++));
            chr1 = enc1 << 2 | enc2 >> 4;
            chr2 = (enc2 & 15) << 4 | enc3 >> 2;
            chr3 = (enc3 & 3) << 6 | enc4;
            buf.push(chr1);
            if (enc3 !== 64) buf.push(chr2);
            if (enc4 !== 64) buf.push(chr3);
            chr1 = chr2 = chr3 = "";
            enc1 = enc2 = enc3 = enc4 = "";
            if (!(i < input.length)) break;
        }
        return buf;
    }
}
$3ed269f2f0fb224b$var$ExifRestore.initClass();
/*
 * contentloaded.js
 *
 * Author: Diego Perini (diego.perini at gmail.com)
 * Summary: cross-browser wrapper for DOMContentLoaded
 * Updated: 20101020
 * License: MIT
 * Version: 1.2
 *
 * URL:
 * http://javascript.nwbox.com/ContentLoaded/
 * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
 */ // @win window reference
// @fn function reference
let $3ed269f2f0fb224b$var$contentLoaded = function(win, fn) {
    let done = false;
    let top = true;
    let doc = win.document;
    let root = doc.documentElement;
    let add = doc.addEventListener ? "addEventListener" : "attachEvent";
    let rem = doc.addEventListener ? "removeEventListener" : "detachEvent";
    let pre = doc.addEventListener ? "" : "on";
    var init = function(e) {
        if (e.type === "readystatechange" && doc.readyState !== "complete") return;
        (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);
        if (!done && (done = true)) return fn.call(win, e.type || e);
    };
    var poll = function() {
        try {
            root.doScroll("left");
        } catch (e) {
            setTimeout(poll, 50);
            return;
        }
        return init("poll");
    };
    if (doc.readyState !== "complete") {
        if (doc.createEventObject && root.doScroll) {
            try {
                top = !win.frameElement;
            } catch (error) {
            }
            if (top) poll();
        }
        doc[add](pre + "DOMContentLoaded", init, false);
        doc[add](pre + "readystatechange", init, false);
        return win[add](pre + "load", init, false);
    }
};
function $3ed269f2f0fb224b$var$__guard__(value, transform) {
    return typeof value !== "undefined" && value !== null ? transform(value) : undefined;
}
function $3ed269f2f0fb224b$var$__guardMethod__(obj, methodName, transform) {
    if (typeof obj !== "undefined" && obj !== null && typeof obj[methodName] === "function") return transform(obj, methodName);
    else return undefined;
}



//# sourceMappingURL=dropzone.mjs.map


/***/ })

}]);