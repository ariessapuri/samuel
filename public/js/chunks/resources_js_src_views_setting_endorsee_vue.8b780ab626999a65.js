(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_setting_endorsee_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/setting/endorsee.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/setting/endorsee.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_file_agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-file-agent */ "./node_modules/vue-file-agent/dist/vue-file-agent.umd.js");
/* harmony import */ var vue_file_agent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_file_agent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var filepond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! filepond */ "./node_modules/filepond/dist/filepond.js");
/* harmony import */ var filepond__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(filepond__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var filepond_dist_filepond_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! filepond/dist/filepond.min.css */ "./node_modules/filepond/dist/filepond.min.css");
/* harmony import */ var filepond_plugin_image_preview_dist_filepond_plugin_image_preview_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css */ "./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css");
/* harmony import */ var filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! filepond-plugin-image-preview */ "./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js");
/* harmony import */ var filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_5__);




 // Import the necessary FilePond plugins

 // Register FilePond plugins

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'endorsee',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;

    __expose();

    filepond__WEBPACK_IMPORTED_MODULE_2__.registerPlugin((filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_5___default())); // Initialize FilePond

    var pond = filepond__WEBPACK_IMPORTED_MODULE_2__.create();
    var files = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var fileAgentOptions = {
      pond: pond // Bind FilePond instance

    };

    var handlePreviewClick = function handlePreviewClick(index) {
      console.log('Preview clicked:', index);
    };

    var __returned__ = {
      pond: pond,
      files: files,
      fileAgentOptions: fileAgentOptions,
      handlePreviewClick: handlePreviewClick,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,

      get VueFileAgent() {
        return (vue_file_agent__WEBPACK_IMPORTED_MODULE_1___default());
      },

      get FilePond() {
        return filepond__WEBPACK_IMPORTED_MODULE_2__;
      },

      get FilePondPluginImagePreview() {
        return (filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_5___default());
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/setting/endorsee.vue?vue&type=template&id=9d08d104":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/setting/endorsee.vue?vue&type=template&id=9d08d104 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["VueFileAgent"], {
    files: $setup.files,
    "onUpdate:files": _cache[0] || (_cache[0] = function ($event) {
      return $setup.files = $event;
    }),
    options: $setup.fileAgentOptions,
    onClick: $setup.handlePreviewClick
  }, null, 8
  /* PROPS */
  , ["files"])]);
}

/***/ }),

/***/ "./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js ***!
  \******************************************************************************************/
/***/ (function(module) {

/*!
 * FilePondPluginImagePreview 4.6.12
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */

/* eslint-disable */

(function(global, factory) {
   true
    ? (module.exports = factory())
    : 0;
})(this, function() {
  'use strict';

  // test if file is of type image and can be viewed in canvas
  var isPreviewableImage = function isPreviewableImage(file) {
    return /^image/.test(file.type);
  };

  function _typeof(obj) {
    if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
      _typeof = function(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function(obj) {
        return obj &&
          typeof Symbol === 'function' &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
          ? 'symbol'
          : typeof obj;
      };
    }

    return _typeof(obj);
  }

  var REACT_ELEMENT_TYPE;

  function _jsx(type, props, key, children) {
    if (!REACT_ELEMENT_TYPE) {
      REACT_ELEMENT_TYPE =
        (typeof Symbol === 'function' &&
          Symbol.for &&
          Symbol.for('react.element')) ||
        0xeac7;
    }

    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;

    if (!props && childrenLength !== 0) {
      props = {
        children: void 0
      };
    }

    if (props && defaultProps) {
      for (var propName in defaultProps) {
        if (props[propName] === void 0) {
          props[propName] = defaultProps[propName];
        }
      }
    } else if (!props) {
      props = defaultProps || {};
    }

    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = new Array(childrenLength);

      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 3];
      }

      props.children = childArray;
    }

    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key === undefined ? null : '' + key,
      ref: null,
      props: props,
      _owner: null
    };
  }

  function _asyncIterator(iterable) {
    var method;

    if (typeof Symbol === 'function') {
      if (Symbol.asyncIterator) {
        method = iterable[Symbol.asyncIterator];
        if (method != null) return method.call(iterable);
      }

      if (Symbol.iterator) {
        method = iterable[Symbol.iterator];
        if (method != null) return method.call(iterable);
      }
    }

    throw new TypeError('Object is not async iterable');
  }

  function _AwaitValue(value) {
    this.wrapped = value;
  }

  function _AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function(resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;
        var wrappedAwait = value instanceof _AwaitValue;
        Promise.resolve(wrappedAwait ? value.wrapped : value).then(
          function(arg) {
            if (wrappedAwait) {
              resume('next', arg);
              return;
            }

            settle(result.done ? 'return' : 'normal', arg);
          },
          function(err) {
            resume('throw', err);
          }
        );
      } catch (err) {
        settle('throw', err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case 'return':
          front.resolve({
            value: value,
            done: true
          });
          break;

        case 'throw':
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== 'function') {
      this.return = undefined;
    }
  }

  if (typeof Symbol === 'function' && Symbol.asyncIterator) {
    _AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
      return this;
    };
  }

  _AsyncGenerator.prototype.next = function(arg) {
    return this._invoke('next', arg);
  };

  _AsyncGenerator.prototype.throw = function(arg) {
    return this._invoke('throw', arg);
  };

  _AsyncGenerator.prototype.return = function(arg) {
    return this._invoke('return', arg);
  };

  function _wrapAsyncGenerator(fn) {
    return function() {
      return new _AsyncGenerator(fn.apply(this, arguments));
    };
  }

  function _awaitAsyncGenerator(value) {
    return new _AwaitValue(value);
  }

  function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {},
      waiting = false;

    function pump(key, value) {
      waiting = true;
      value = new Promise(function(resolve) {
        resolve(inner[key](value));
      });
      return {
        done: false,
        value: awaitWrap(value)
      };
    }

    if (typeof Symbol === 'function' && Symbol.iterator) {
      iter[Symbol.iterator] = function() {
        return this;
      };
    }

    iter.next = function(value) {
      if (waiting) {
        waiting = false;
        return value;
      }

      return pump('next', value);
    };

    if (typeof inner.throw === 'function') {
      iter.throw = function(value) {
        if (waiting) {
          waiting = false;
          throw value;
        }

        return pump('throw', value);
      };
    }

    if (typeof inner.return === 'function') {
      iter.return = function(value) {
        return pump('return', value);
      };
    }

    return iter;
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function() {
      var self = this,
        args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(
            gen,
            resolve,
            reject,
            _next,
            _throw,
            'next',
            value
          );
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineEnumerableProperties(obj, descs) {
    for (var key in descs) {
      var desc = descs[key];
      desc.configurable = desc.enumerable = true;
      if ('value' in desc) desc.writable = true;
      Object.defineProperty(obj, key, desc);
    }

    if (Object.getOwnPropertySymbols) {
      var objectSymbols = Object.getOwnPropertySymbols(descs);

      for (var i = 0; i < objectSymbols.length; i++) {
        var sym = objectSymbols[i];
        var desc = descs[sym];
        desc.configurable = desc.enumerable = true;
        if ('value' in desc) desc.writable = true;
        Object.defineProperty(obj, sym, desc);
      }
    }

    return obj;
  }

  function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = Object.getOwnPropertyDescriptor(defaults, key);

      if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }

    return obj;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends =
      Object.assign ||
      function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

    return _extends.apply(this, arguments);
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(
          Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          })
        );
      }

      ownKeys.forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function');
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf =
      Object.setPrototypeOf ||
      function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === 'function') return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf('[native code]') !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === 'function' ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== 'function') {
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      }

      if (typeof _cache !== 'undefined') {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _instanceof(left, right) {
    if (
      right != null &&
      typeof Symbol !== 'undefined' &&
      right[Symbol.hasInstance]
    ) {
      return right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule
      ? obj
      : {
          default: obj
        };
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc =
              Object.defineProperty && Object.getOwnPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : {};

            if (desc.get || desc.set) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError('Cannot instantiate an arrow function');
    }
  }

  function _objectDestructuringEmpty(obj) {
    if (obj == null) throw new TypeError('Cannot destructure undefined');
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === 'object' || typeof call === 'function')) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== 'undefined' && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function set(target, property, value, receiver) {
    if (typeof Reflect !== 'undefined' && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = _superPropBase(target, property);

        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);

          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            return false;
          }
        }

        desc = Object.getOwnPropertyDescriptor(receiver, property);

        if (desc) {
          if (!desc.writable) {
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          _defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);

    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(
      Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      })
    );
  }

  function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    strings.raw = raw;
    return strings;
  }

  function _temporalRef(val, name) {
    if (val === _temporalUndefined) {
      throw new ReferenceError(name + ' is not defined - temporal dead zone');
    } else {
      return val;
    }
  }

  function _readOnlyError(name) {
    throw new Error('"' + name + '" is read-only');
  }

  function _classNameTDZError(name) {
    throw new Error(
      'Class "' + name + '" cannot be referenced in computed property keys.'
    );
  }

  var _temporalUndefined = {};

  function _slicedToArray(arr, i) {
    return (
      _arrayWithHoles(arr) ||
      _iterableToArrayLimit(arr, i) ||
      _nonIterableRest()
    );
  }

  function _slicedToArrayLoose(arr, i) {
    return (
      _arrayWithHoles(arr) ||
      _iterableToArrayLimitLoose(arr, i) ||
      _nonIterableRest()
    );
  }

  function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return (
      _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
    );
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)
        arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (
      Symbol.iterator in Object(iter) ||
      Object.prototype.toString.call(iter) === '[object Arguments]'
    )
      return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (
        var _i = arr[Symbol.iterator](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i['return'] != null) _i['return']();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _iterableToArrayLimitLoose(arr, i) {
    var _arr = [];

    for (
      var _iterator = arr[Symbol.iterator](), _step;
      !(_step = _iterator.next()).done;

    ) {
      _arr.push(_step.value);

      if (i && _arr.length === i) break;
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError('Invalid attempt to spread non-iterable instance');
  }

  function _nonIterableRest() {
    throw new TypeError('Invalid attempt to destructure non-iterable instance');
  }

  function _skipFirstGeneratorNext(fn) {
    return function() {
      var it = fn.apply(this, arguments);
      it.next();
      return it;
    };
  }

  function _toPrimitive(input, hint) {
    if (typeof input !== 'object' || input === null) return input;
    var prim = input[Symbol.toPrimitive];

    if (prim !== undefined) {
      var res = prim.call(input, hint || 'default');
      if (typeof res !== 'object') return res;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }

    return (hint === 'string' ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, 'string');

    return typeof key === 'symbol' ? key : String(key);
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error(
      'Decorating class property failed. Please ensure that ' +
        'proposal-class-properties is enabled and set to use loose mode. ' +
        'To use proposal-class-properties in spec mode with decorators, wait for ' +
        'the next major version of decorators in stage 2.'
    );
  }

  function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer
        ? descriptor.initializer.call(context)
        : void 0
    });
  }

  function _applyDecoratedDescriptor(
    target,
    property,
    decorators,
    descriptor,
    context
  ) {
    var desc = {};
    Object.keys(descriptor).forEach(function(key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators
      .slice()
      .reverse()
      .reduce(function(desc, decorator) {
        return decorator(target, property, desc) || desc;
      }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object.defineProperty(target, property, desc);
      desc = null;
    }

    return desc;
  }

  var id = 0;

  function _classPrivateFieldLooseKey(name) {
    return '__private_' + id++ + '_' + name;
  }

  function _classPrivateFieldLooseBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
      throw new TypeError('attempted to use private field on non-instance');
    }

    return receiver;
  }

  function _classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError('attempted to get private field on non-instance');
    }

    var descriptor = privateMap.get(receiver);

    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }

    return descriptor.value;
  }

  function _classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
      throw new TypeError('attempted to set private field on non-instance');
    }

    var descriptor = privateMap.get(receiver);

    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        throw new TypeError('attempted to set read only private field');
      }

      descriptor.value = value;
    }

    return value;
  }

  function _classStaticPrivateFieldSpecGet(
    receiver,
    classConstructor,
    descriptor
  ) {
    if (receiver !== classConstructor) {
      throw new TypeError('Private static access of wrong provenance');
    }

    return descriptor.value;
  }

  function _classStaticPrivateFieldSpecSet(
    receiver,
    classConstructor,
    descriptor,
    value
  ) {
    if (receiver !== classConstructor) {
      throw new TypeError('Private static access of wrong provenance');
    }

    if (!descriptor.writable) {
      throw new TypeError('attempted to set read only private field');
    }

    descriptor.value = value;
    return value;
  }

  function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
    if (receiver !== classConstructor) {
      throw new TypeError('Private static access of wrong provenance');
    }

    return method;
  }

  function _classStaticPrivateMethodSet() {
    throw new TypeError('attempted to set read only static private field');
  }

  function _decorate(decorators, factory, superClass, mixins) {
    var api = _getDecoratorsApi();

    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        api = mixins[i](api);
      }
    }

    var r = factory(function initialize(O) {
      api.initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = api.decorateClass(
      _coalesceClassElements(r.d.map(_createElementDescriptor)),
      decorators
    );
    api.initializeClassElements(r.F, decorated.elements);
    return api.runClassFinishers(r.F, decorated.finishers);
  }

  function _getDecoratorsApi() {
    _getDecoratorsApi = function() {
      return api;
    };

    var api = {
      elementsDefinitionOrder: [['method'], ['field']],
      initializeInstanceElements: function(O, elements) {
        ['method', 'field'].forEach(function(kind) {
          elements.forEach(function(element) {
            if (element.kind === kind && element.placement === 'own') {
              this.defineClassElement(O, element);
            }
          }, this);
        }, this);
      },
      initializeClassElements: function(F, elements) {
        var proto = F.prototype;
        ['method', 'field'].forEach(function(kind) {
          elements.forEach(function(element) {
            var placement = element.placement;

            if (
              element.kind === kind &&
              (placement === 'static' || placement === 'prototype')
            ) {
              var receiver = placement === 'static' ? F : proto;
              this.defineClassElement(receiver, element);
            }
          }, this);
        }, this);
      },
      defineClassElement: function(receiver, element) {
        var descriptor = element.descriptor;

        if (element.kind === 'field') {
          var initializer = element.initializer;
          descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver)
          };
        }

        Object.defineProperty(receiver, element.key, descriptor);
      },
      decorateClass: function(elements, decorators) {
        var newElements = [];
        var finishers = [];
        var placements = {
          static: [],
          prototype: [],
          own: []
        };
        elements.forEach(function(element) {
          this.addElementPlacement(element, placements);
        }, this);
        elements.forEach(function(element) {
          if (!_hasDecorators(element)) return newElements.push(element);
          var elementFinishersExtras = this.decorateElement(
            element,
            placements
          );
          newElements.push(elementFinishersExtras.element);
          newElements.push.apply(newElements, elementFinishersExtras.extras);
          finishers.push.apply(finishers, elementFinishersExtras.finishers);
        }, this);

        if (!decorators) {
          return {
            elements: newElements,
            finishers: finishers
          };
        }

        var result = this.decorateConstructor(newElements, decorators);
        finishers.push.apply(finishers, result.finishers);
        result.finishers = finishers;
        return result;
      },
      addElementPlacement: function(element, placements, silent) {
        var keys = placements[element.placement];

        if (!silent && keys.indexOf(element.key) !== -1) {
          throw new TypeError('Duplicated element (' + element.key + ')');
        }

        keys.push(element.key);
      },
      decorateElement: function(element, placements) {
        var extras = [];
        var finishers = [];

        for (
          var decorators = element.decorators, i = decorators.length - 1;
          i >= 0;
          i--
        ) {
          var keys = placements[element.placement];
          keys.splice(keys.indexOf(element.key), 1);
          var elementObject = this.fromElementDescriptor(element);
          var elementFinisherExtras = this.toElementFinisherExtras(
            (0, decorators[i])(elementObject) || elementObject
          );
          element = elementFinisherExtras.element;
          this.addElementPlacement(element, placements);

          if (elementFinisherExtras.finisher) {
            finishers.push(elementFinisherExtras.finisher);
          }

          var newExtras = elementFinisherExtras.extras;

          if (newExtras) {
            for (var j = 0; j < newExtras.length; j++) {
              this.addElementPlacement(newExtras[j], placements);
            }

            extras.push.apply(extras, newExtras);
          }
        }

        return {
          element: element,
          finishers: finishers,
          extras: extras
        };
      },
      decorateConstructor: function(elements, decorators) {
        var finishers = [];

        for (var i = decorators.length - 1; i >= 0; i--) {
          var obj = this.fromClassDescriptor(elements);
          var elementsAndFinisher = this.toClassDescriptor(
            (0, decorators[i])(obj) || obj
          );

          if (elementsAndFinisher.finisher !== undefined) {
            finishers.push(elementsAndFinisher.finisher);
          }

          if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;

            for (var j = 0; j < elements.length - 1; j++) {
              for (var k = j + 1; k < elements.length; k++) {
                if (
                  elements[j].key === elements[k].key &&
                  elements[j].placement === elements[k].placement
                ) {
                  throw new TypeError(
                    'Duplicated element (' + elements[j].key + ')'
                  );
                }
              }
            }
          }
        }

        return {
          elements: elements,
          finishers: finishers
        };
      },
      fromElementDescriptor: function(element) {
        var obj = {
          kind: element.kind,
          key: element.key,
          placement: element.placement,
          descriptor: element.descriptor
        };
        var desc = {
          value: 'Descriptor',
          configurable: true
        };
        Object.defineProperty(obj, Symbol.toStringTag, desc);
        if (element.kind === 'field') obj.initializer = element.initializer;
        return obj;
      },
      toElementDescriptors: function(elementObjects) {
        if (elementObjects === undefined) return;
        return _toArray(elementObjects).map(function(elementObject) {
          var element = this.toElementDescriptor(elementObject);
          this.disallowProperty(
            elementObject,
            'finisher',
            'An element descriptor'
          );
          this.disallowProperty(
            elementObject,
            'extras',
            'An element descriptor'
          );
          return element;
        }, this);
      },
      toElementDescriptor: function(elementObject) {
        var kind = String(elementObject.kind);

        if (kind !== 'method' && kind !== 'field') {
          throw new TypeError(
            'An element descriptor\'s .kind property must be either "method" or' +
              ' "field", but a decorator created an element descriptor with' +
              ' .kind "' +
              kind +
              '"'
          );
        }

        var key = _toPropertyKey(elementObject.key);

        var placement = String(elementObject.placement);

        if (
          placement !== 'static' &&
          placement !== 'prototype' &&
          placement !== 'own'
        ) {
          throw new TypeError(
            'An element descriptor\'s .placement property must be one of "static",' +
              ' "prototype" or "own", but a decorator created an element descriptor' +
              ' with .placement "' +
              placement +
              '"'
          );
        }

        var descriptor = elementObject.descriptor;
        this.disallowProperty(
          elementObject,
          'elements',
          'An element descriptor'
        );
        var element = {
          kind: kind,
          key: key,
          placement: placement,
          descriptor: Object.assign({}, descriptor)
        };

        if (kind !== 'field') {
          this.disallowProperty(
            elementObject,
            'initializer',
            'A method descriptor'
          );
        } else {
          this.disallowProperty(
            descriptor,
            'get',
            'The property descriptor of a field descriptor'
          );
          this.disallowProperty(
            descriptor,
            'set',
            'The property descriptor of a field descriptor'
          );
          this.disallowProperty(
            descriptor,
            'value',
            'The property descriptor of a field descriptor'
          );
          element.initializer = elementObject.initializer;
        }

        return element;
      },
      toElementFinisherExtras: function(elementObject) {
        var element = this.toElementDescriptor(elementObject);

        var finisher = _optionalCallableProperty(elementObject, 'finisher');

        var extras = this.toElementDescriptors(elementObject.extras);
        return {
          element: element,
          finisher: finisher,
          extras: extras
        };
      },
      fromClassDescriptor: function(elements) {
        var obj = {
          kind: 'class',
          elements: elements.map(this.fromElementDescriptor, this)
        };
        var desc = {
          value: 'Descriptor',
          configurable: true
        };
        Object.defineProperty(obj, Symbol.toStringTag, desc);
        return obj;
      },
      toClassDescriptor: function(obj) {
        var kind = String(obj.kind);

        if (kind !== 'class') {
          throw new TypeError(
            'A class descriptor\'s .kind property must be "class", but a decorator' +
              ' created a class descriptor with .kind "' +
              kind +
              '"'
          );
        }

        this.disallowProperty(obj, 'key', 'A class descriptor');
        this.disallowProperty(obj, 'placement', 'A class descriptor');
        this.disallowProperty(obj, 'descriptor', 'A class descriptor');
        this.disallowProperty(obj, 'initializer', 'A class descriptor');
        this.disallowProperty(obj, 'extras', 'A class descriptor');

        var finisher = _optionalCallableProperty(obj, 'finisher');

        var elements = this.toElementDescriptors(obj.elements);
        return {
          elements: elements,
          finisher: finisher
        };
      },
      runClassFinishers: function(constructor, finishers) {
        for (var i = 0; i < finishers.length; i++) {
          var newConstructor = (0, finishers[i])(constructor);

          if (newConstructor !== undefined) {
            if (typeof newConstructor !== 'function') {
              throw new TypeError('Finishers must return a constructor.');
            }

            constructor = newConstructor;
          }
        }

        return constructor;
      },
      disallowProperty: function(obj, name, objectType) {
        if (obj[name] !== undefined) {
          throw new TypeError(
            objectType + " can't have a ." + name + ' property.'
          );
        }
      }
    };
    return api;
  }

  function _createElementDescriptor(def) {
    var key = _toPropertyKey(def.key);

    var descriptor;

    if (def.kind === 'method') {
      descriptor = {
        value: def.value,
        writable: true,
        configurable: true,
        enumerable: false
      };
    } else if (def.kind === 'get') {
      descriptor = {
        get: def.value,
        configurable: true,
        enumerable: false
      };
    } else if (def.kind === 'set') {
      descriptor = {
        set: def.value,
        configurable: true,
        enumerable: false
      };
    } else if (def.kind === 'field') {
      descriptor = {
        configurable: true,
        writable: true,
        enumerable: true
      };
    }

    var element = {
      kind: def.kind === 'field' ? 'field' : 'method',
      key: key,
      placement: def.static
        ? 'static'
        : def.kind === 'field'
        ? 'own'
        : 'prototype',
      descriptor: descriptor
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === 'field') element.initializer = def.value;
    return element;
  }

  function _coalesceGetterSetter(element, other) {
    if (element.descriptor.get !== undefined) {
      other.descriptor.get = element.descriptor.get;
    } else {
      other.descriptor.set = element.descriptor.set;
    }
  }

  function _coalesceClassElements(elements) {
    var newElements = [];

    var isSameElement = function(other) {
      return (
        other.kind === 'method' &&
        other.key === element.key &&
        other.placement === element.placement
      );
    };

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var other;

      if (
        element.kind === 'method' &&
        (other = newElements.find(isSameElement))
      ) {
        if (
          _isDataDescriptor(element.descriptor) ||
          _isDataDescriptor(other.descriptor)
        ) {
          if (_hasDecorators(element) || _hasDecorators(other)) {
            throw new ReferenceError(
              'Duplicated methods (' + element.key + ") can't be decorated."
            );
          }

          other.descriptor = element.descriptor;
        } else {
          if (_hasDecorators(element)) {
            if (_hasDecorators(other)) {
              throw new ReferenceError(
                "Decorators can't be placed on different accessors with for " +
                  'the same property (' +
                  element.key +
                  ').'
              );
            }

            other.decorators = element.decorators;
          }

          _coalesceGetterSetter(element, other);
        }
      } else {
        newElements.push(element);
      }
    }

    return newElements;
  }

  function _hasDecorators(element) {
    return element.decorators && element.decorators.length;
  }

  function _isDataDescriptor(desc) {
    return (
      desc !== undefined &&
      !(desc.value === undefined && desc.writable === undefined)
    );
  }

  function _optionalCallableProperty(obj, name) {
    var value = obj[name];

    if (value !== undefined && typeof value !== 'function') {
      throw new TypeError("Expected '" + name + "' to be a function");
    }

    return value;
  }

  function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError('attempted to get private field on non-instance');
    }

    return fn;
  }

  function _classPrivateMethodSet() {
    throw new TypeError('attempted to reassign private method');
  }

  function _wrapRegExp(re, groups) {
    _wrapRegExp = function(re, groups) {
      return new BabelRegExp(re, groups);
    };

    var _RegExp = _wrapNativeSuper(RegExp);

    var _super = RegExp.prototype;

    var _groups = new WeakMap();

    function BabelRegExp(re, groups) {
      var _this = _RegExp.call(this, re);

      _groups.set(_this, groups);

      return _this;
    }

    _inherits(BabelRegExp, _RegExp);

    BabelRegExp.prototype.exec = function(str) {
      var result = _super.exec.call(this, str);

      if (result) result.groups = buildGroups(result, this);
      return result;
    };

    BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
      if (typeof substitution === 'string') {
        var groups = _groups.get(this);

        return _super[Symbol.replace].call(
          this,
          str,
          substitution.replace(/\$<([^>]+)>/g, function(_, name) {
            return '$' + groups[name];
          })
        );
      } else if (typeof substitution === 'function') {
        var _this = this;

        return _super[Symbol.replace].call(this, str, function() {
          var args = [];
          args.push.apply(args, arguments);

          if (typeof args[args.length - 1] !== 'object') {
            args.push(buildGroups(args, _this));
          }

          return substitution.apply(this, args);
        });
      } else {
        return _super[Symbol.replace].call(this, str, substitution);
      }
    };

    function buildGroups(result, re) {
      var g = _groups.get(re);

      return Object.keys(g).reduce(function(groups, name) {
        groups[name] = result[g[name]];
        return groups;
      }, Object.create(null));
    }

    return _wrapRegExp.apply(this, arguments);
  }

  var vectorMultiply = function vectorMultiply(v, amount) {
    return createVector(v.x * amount, v.y * amount);
  };

  var vectorAdd = function vectorAdd(a, b) {
    return createVector(a.x + b.x, a.y + b.y);
  };

  var vectorNormalize = function vectorNormalize(v) {
    var l = Math.sqrt(v.x * v.x + v.y * v.y);
    if (l === 0) {
      return {
        x: 0,
        y: 0
      };
    }
    return createVector(v.x / l, v.y / l);
  };

  var vectorRotate = function vectorRotate(v, radians, origin) {
    var cos = Math.cos(radians);
    var sin = Math.sin(radians);
    var t = createVector(v.x - origin.x, v.y - origin.y);
    return createVector(
      origin.x + cos * t.x - sin * t.y,
      origin.y + sin * t.x + cos * t.y
    );
  };

  var createVector = function createVector() {
    var x =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return { x: x, y: y };
  };

  var getMarkupValue = function getMarkupValue(value, size) {
    var scalar =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var axis = arguments.length > 3 ? arguments[3] : undefined;
    if (typeof value === 'string') {
      return parseFloat(value) * scalar;
    }
    if (typeof value === 'number') {
      return value * (axis ? size[axis] : Math.min(size.width, size.height));
    }
    return;
  };

  var getMarkupStyles = function getMarkupStyles(markup, size, scale) {
    var lineStyle = markup.borderStyle || markup.lineStyle || 'solid';
    var fill = markup.backgroundColor || markup.fontColor || 'transparent';
    var stroke = markup.borderColor || markup.lineColor || 'transparent';
    var strokeWidth = getMarkupValue(
      markup.borderWidth || markup.lineWidth,
      size,
      scale
    );
    var lineCap = markup.lineCap || 'round';
    var lineJoin = markup.lineJoin || 'round';
    var dashes =
      typeof lineStyle === 'string'
        ? ''
        : lineStyle
            .map(function(v) {
              return getMarkupValue(v, size, scale);
            })
            .join(',');
    var opacity = markup.opacity || 1;
    return {
      'stroke-linecap': lineCap,
      'stroke-linejoin': lineJoin,
      'stroke-width': strokeWidth || 0,
      'stroke-dasharray': dashes,
      stroke: stroke,
      fill: fill,
      opacity: opacity
    };
  };

  var isDefined = function isDefined(value) {
    return value != null;
  };

  var getMarkupRect = function getMarkupRect(rect, size) {
    var scalar =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var left =
      getMarkupValue(rect.x, size, scalar, 'width') ||
      getMarkupValue(rect.left, size, scalar, 'width');
    var top =
      getMarkupValue(rect.y, size, scalar, 'height') ||
      getMarkupValue(rect.top, size, scalar, 'height');
    var width = getMarkupValue(rect.width, size, scalar, 'width');
    var height = getMarkupValue(rect.height, size, scalar, 'height');
    var right = getMarkupValue(rect.right, size, scalar, 'width');
    var bottom = getMarkupValue(rect.bottom, size, scalar, 'height');

    if (!isDefined(top)) {
      if (isDefined(height) && isDefined(bottom)) {
        top = size.height - height - bottom;
      } else {
        top = bottom;
      }
    }

    if (!isDefined(left)) {
      if (isDefined(width) && isDefined(right)) {
        left = size.width - width - right;
      } else {
        left = right;
      }
    }

    if (!isDefined(width)) {
      if (isDefined(left) && isDefined(right)) {
        width = size.width - left - right;
      } else {
        width = 0;
      }
    }

    if (!isDefined(height)) {
      if (isDefined(top) && isDefined(bottom)) {
        height = size.height - top - bottom;
      } else {
        height = 0;
      }
    }

    return {
      x: left || 0,
      y: top || 0,
      width: width || 0,
      height: height || 0
    };
  };

  var pointsToPathShape = function pointsToPathShape(points) {
    return points
      .map(function(point, index) {
        return ''
          .concat(index === 0 ? 'M' : 'L', ' ')
          .concat(point.x, ' ')
          .concat(point.y);
      })
      .join(' ');
  };

  var setAttributes = function setAttributes(element, attr) {
    return Object.keys(attr).forEach(function(key) {
      return element.setAttribute(key, attr[key]);
    });
  };

  var ns = 'http://www.w3.org/2000/svg';
  var svg = function svg(tag, attr) {
    var element = document.createElementNS(ns, tag);
    if (attr) {
      setAttributes(element, attr);
    }
    return element;
  };

  var updateRect = function updateRect(element) {
    return setAttributes(
      element,
      Object.assign({}, element.rect, element.styles)
    );
  };

  var updateEllipse = function updateEllipse(element) {
    var cx = element.rect.x + element.rect.width * 0.5;
    var cy = element.rect.y + element.rect.height * 0.5;
    var rx = element.rect.width * 0.5;
    var ry = element.rect.height * 0.5;
    return setAttributes(
      element,
      Object.assign(
        {
          cx: cx,
          cy: cy,
          rx: rx,
          ry: ry
        },
        element.styles
      )
    );
  };

  var IMAGE_FIT_STYLE = {
    contain: 'xMidYMid meet',
    cover: 'xMidYMid slice'
  };

  var updateImage = function updateImage(element, markup) {
    setAttributes(
      element,
      Object.assign({}, element.rect, element.styles, {
        preserveAspectRatio: IMAGE_FIT_STYLE[markup.fit] || 'none'
      })
    );
  };

  var TEXT_ANCHOR = {
    left: 'start',
    center: 'middle',
    right: 'end'
  };

  var updateText = function updateText(element, markup, size, scale) {
    var fontSize = getMarkupValue(markup.fontSize, size, scale);
    var fontFamily = markup.fontFamily || 'sans-serif';
    var fontWeight = markup.fontWeight || 'normal';
    var textAlign = TEXT_ANCHOR[markup.textAlign] || 'start';

    setAttributes(
      element,
      Object.assign({}, element.rect, element.styles, {
        'stroke-width': 0,
        'font-weight': fontWeight,
        'font-size': fontSize,
        'font-family': fontFamily,
        'text-anchor': textAlign
      })
    );

    // update text
    if (element.text !== markup.text) {
      element.text = markup.text;
      element.textContent = markup.text.length ? markup.text : ' ';
    }
  };

  var updateLine = function updateLine(element, markup, size, scale) {
    setAttributes(
      element,
      Object.assign({}, element.rect, element.styles, {
        fill: 'none'
      })
    );

    var line = element.childNodes[0];
    var begin = element.childNodes[1];
    var end = element.childNodes[2];

    var origin = element.rect;

    var target = {
      x: element.rect.x + element.rect.width,
      y: element.rect.y + element.rect.height
    };

    setAttributes(line, {
      x1: origin.x,
      y1: origin.y,
      x2: target.x,
      y2: target.y
    });

    if (!markup.lineDecoration) return;

    begin.style.display = 'none';
    end.style.display = 'none';

    var v = vectorNormalize({
      x: target.x - origin.x,
      y: target.y - origin.y
    });

    var l = getMarkupValue(0.05, size, scale);

    if (markup.lineDecoration.indexOf('arrow-begin') !== -1) {
      var arrowBeginRotationPoint = vectorMultiply(v, l);
      var arrowBeginCenter = vectorAdd(origin, arrowBeginRotationPoint);
      var arrowBeginA = vectorRotate(origin, 2, arrowBeginCenter);
      var arrowBeginB = vectorRotate(origin, -2, arrowBeginCenter);

      setAttributes(begin, {
        style: 'display:block;',
        d: 'M'
          .concat(arrowBeginA.x, ',')
          .concat(arrowBeginA.y, ' L')
          .concat(origin.x, ',')
          .concat(origin.y, ' L')
          .concat(arrowBeginB.x, ',')
          .concat(arrowBeginB.y)
      });
    }

    if (markup.lineDecoration.indexOf('arrow-end') !== -1) {
      var arrowEndRotationPoint = vectorMultiply(v, -l);
      var arrowEndCenter = vectorAdd(target, arrowEndRotationPoint);
      var arrowEndA = vectorRotate(target, 2, arrowEndCenter);
      var arrowEndB = vectorRotate(target, -2, arrowEndCenter);

      setAttributes(end, {
        style: 'display:block;',
        d: 'M'
          .concat(arrowEndA.x, ',')
          .concat(arrowEndA.y, ' L')
          .concat(target.x, ',')
          .concat(target.y, ' L')
          .concat(arrowEndB.x, ',')
          .concat(arrowEndB.y)
      });
    }
  };

  var updatePath = function updatePath(element, markup, size, scale) {
    setAttributes(
      element,
      Object.assign({}, element.styles, {
        fill: 'none',
        d: pointsToPathShape(
          markup.points.map(function(point) {
            return {
              x: getMarkupValue(point.x, size, scale, 'width'),
              y: getMarkupValue(point.y, size, scale, 'height')
            };
          })
        )
      })
    );
  };

  var createShape = function createShape(node) {
    return function(markup) {
      return svg(node, { id: markup.id });
    };
  };

  var createImage = function createImage(markup) {
    var shape = svg('image', {
      id: markup.id,
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      opacity: '0'
    });

    shape.onload = function() {
      shape.setAttribute('opacity', markup.opacity || 1);
    };
    shape.setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'xlink:href',
      markup.src
    );
    return shape;
  };

  var createLine = function createLine(markup) {
    var shape = svg('g', {
      id: markup.id,
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    });

    var line = svg('line');
    shape.appendChild(line);

    var begin = svg('path');
    shape.appendChild(begin);

    var end = svg('path');
    shape.appendChild(end);

    return shape;
  };

  var CREATE_TYPE_ROUTES = {
    image: createImage,
    rect: createShape('rect'),
    ellipse: createShape('ellipse'),
    text: createShape('text'),
    path: createShape('path'),
    line: createLine
  };

  var UPDATE_TYPE_ROUTES = {
    rect: updateRect,
    ellipse: updateEllipse,
    image: updateImage,
    text: updateText,
    path: updatePath,
    line: updateLine
  };

  var createMarkupByType = function createMarkupByType(type, markup) {
    return CREATE_TYPE_ROUTES[type](markup);
  };

  var updateMarkupByType = function updateMarkupByType(
    element,
    type,
    markup,
    size,
    scale
  ) {
    if (type !== 'path') {
      element.rect = getMarkupRect(markup, size, scale);
    }
    element.styles = getMarkupStyles(markup, size, scale);
    UPDATE_TYPE_ROUTES[type](element, markup, size, scale);
  };

  var MARKUP_RECT = [
    'x',
    'y',
    'left',
    'top',
    'right',
    'bottom',
    'width',
    'height'
  ];

  var toOptionalFraction = function toOptionalFraction(value) {
    return typeof value === 'string' && /%/.test(value)
      ? parseFloat(value) / 100
      : value;
  };

  // adds default markup properties, clones markup
  var prepareMarkup = function prepareMarkup(markup) {
    var _markup = _slicedToArray(markup, 2),
      type = _markup[0],
      props = _markup[1];

    var rect = props.points
      ? {}
      : MARKUP_RECT.reduce(function(prev, curr) {
          prev[curr] = toOptionalFraction(props[curr]);
          return prev;
        }, {});

    return [
      type,
      Object.assign(
        {
          zIndex: 0
        },
        props,
        rect
      )
    ];
  };

  var sortMarkupByZIndex = function sortMarkupByZIndex(a, b) {
    if (a[1].zIndex > b[1].zIndex) {
      return 1;
    }
    if (a[1].zIndex < b[1].zIndex) {
      return -1;
    }
    return 0;
  };

  var createMarkupView = function createMarkupView(_) {
    return _.utils.createView({
      name: 'image-preview-markup',
      tag: 'svg',
      ignoreRect: true,
      mixins: {
        apis: ['width', 'height', 'crop', 'markup', 'resize', 'dirty']
      },

      write: function write(_ref) {
        var root = _ref.root,
          props = _ref.props;

        if (!props.dirty) return;
        var crop = props.crop,
          resize = props.resize,
          markup = props.markup;

        var viewWidth = props.width;
        var viewHeight = props.height;

        var cropWidth = crop.width;
        var cropHeight = crop.height;

        if (resize) {
          var _size = resize.size;

          var outputWidth = _size && _size.width;
          var outputHeight = _size && _size.height;
          var outputFit = resize.mode;
          var outputUpscale = resize.upscale;

          if (outputWidth && !outputHeight) outputHeight = outputWidth;
          if (outputHeight && !outputWidth) outputWidth = outputHeight;

          var shouldUpscale =
            cropWidth < outputWidth && cropHeight < outputHeight;

          if (!shouldUpscale || (shouldUpscale && outputUpscale)) {
            var scalarWidth = outputWidth / cropWidth;
            var scalarHeight = outputHeight / cropHeight;

            if (outputFit === 'force') {
              cropWidth = outputWidth;
              cropHeight = outputHeight;
            } else {
              var scalar;
              if (outputFit === 'cover') {
                scalar = Math.max(scalarWidth, scalarHeight);
              } else if (outputFit === 'contain') {
                scalar = Math.min(scalarWidth, scalarHeight);
              }
              cropWidth = cropWidth * scalar;
              cropHeight = cropHeight * scalar;
            }
          }
        }

        var size = {
          width: viewWidth,
          height: viewHeight
        };

        root.element.setAttribute('width', size.width);
        root.element.setAttribute('height', size.height);

        var scale = Math.min(viewWidth / cropWidth, viewHeight / cropHeight);

        // clear
        root.element.innerHTML = '';

        // get filter
        var markupFilter = root.query('GET_IMAGE_PREVIEW_MARKUP_FILTER');

        // draw new
        markup
          .filter(markupFilter)
          .map(prepareMarkup)
          .sort(sortMarkupByZIndex)
          .forEach(function(markup) {
            var _markup = _slicedToArray(markup, 2),
              type = _markup[0],
              settings = _markup[1];

            // create
            var element = createMarkupByType(type, settings);

            // update
            updateMarkupByType(element, type, settings, size, scale);

            // add
            root.element.appendChild(element);
          });
      }
    });
  };

  var createVector$1 = function createVector(x, y) {
    return { x: x, y: y };
  };

  var vectorDot = function vectorDot(a, b) {
    return a.x * b.x + a.y * b.y;
  };

  var vectorSubtract = function vectorSubtract(a, b) {
    return createVector$1(a.x - b.x, a.y - b.y);
  };

  var vectorDistanceSquared = function vectorDistanceSquared(a, b) {
    return vectorDot(vectorSubtract(a, b), vectorSubtract(a, b));
  };

  var vectorDistance = function vectorDistance(a, b) {
    return Math.sqrt(vectorDistanceSquared(a, b));
  };

  var getOffsetPointOnEdge = function getOffsetPointOnEdge(length, rotation) {
    var a = length;

    var A = 1.5707963267948966;
    var B = rotation;
    var C = 1.5707963267948966 - rotation;

    var sinA = Math.sin(A);
    var sinB = Math.sin(B);
    var sinC = Math.sin(C);
    var cosC = Math.cos(C);
    var ratio = a / sinA;
    var b = ratio * sinB;
    var c = ratio * sinC;

    return createVector$1(cosC * b, cosC * c);
  };

  var getRotatedRectSize = function getRotatedRectSize(rect, rotation) {
    var w = rect.width;
    var h = rect.height;

    var hor = getOffsetPointOnEdge(w, rotation);
    var ver = getOffsetPointOnEdge(h, rotation);

    var tl = createVector$1(rect.x + Math.abs(hor.x), rect.y - Math.abs(hor.y));

    var tr = createVector$1(
      rect.x + rect.width + Math.abs(ver.y),
      rect.y + Math.abs(ver.x)
    );

    var bl = createVector$1(
      rect.x - Math.abs(ver.y),
      rect.y + rect.height - Math.abs(ver.x)
    );

    return {
      width: vectorDistance(tl, tr),
      height: vectorDistance(tl, bl)
    };
  };

  var calculateCanvasSize = function calculateCanvasSize(
    image,
    canvasAspectRatio
  ) {
    var zoom =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var imageAspectRatio = image.height / image.width;

    // determine actual pixels on x and y axis
    var canvasWidth = 1;
    var canvasHeight = canvasAspectRatio;
    var imgWidth = 1;
    var imgHeight = imageAspectRatio;
    if (imgHeight > canvasHeight) {
      imgHeight = canvasHeight;
      imgWidth = imgHeight / imageAspectRatio;
    }

    var scalar = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    var width = image.width / (zoom * scalar * imgWidth);
    var height = width * canvasAspectRatio;

    return {
      width: width,
      height: height
    };
  };

  var getImageRectZoomFactor = function getImageRectZoomFactor(
    imageRect,
    cropRect,
    rotation,
    center
  ) {
    // calculate available space round image center position
    var cx = center.x > 0.5 ? 1 - center.x : center.x;
    var cy = center.y > 0.5 ? 1 - center.y : center.y;
    var imageWidth = cx * 2 * imageRect.width;
    var imageHeight = cy * 2 * imageRect.height;

    // calculate rotated crop rectangle size
    var rotatedCropSize = getRotatedRectSize(cropRect, rotation);

    // calculate scalar required to fit image
    return Math.max(
      rotatedCropSize.width / imageWidth,
      rotatedCropSize.height / imageHeight
    );
  };

  var getCenteredCropRect = function getCenteredCropRect(
    container,
    aspectRatio
  ) {
    var width = container.width;
    var height = width * aspectRatio;
    if (height > container.height) {
      height = container.height;
      width = height / aspectRatio;
    }
    var x = (container.width - width) * 0.5;
    var y = (container.height - height) * 0.5;

    return {
      x: x,
      y: y,
      width: width,
      height: height
    };
  };

  var getCurrentCropSize = function getCurrentCropSize(imageSize) {
    var crop =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var zoom = crop.zoom,
      rotation = crop.rotation,
      center = crop.center,
      aspectRatio = crop.aspectRatio;

    if (!aspectRatio) aspectRatio = imageSize.height / imageSize.width;

    var canvasSize = calculateCanvasSize(imageSize, aspectRatio, zoom);

    var canvasCenter = {
      x: canvasSize.width * 0.5,
      y: canvasSize.height * 0.5
    };

    var stage = {
      x: 0,
      y: 0,
      width: canvasSize.width,
      height: canvasSize.height,
      center: canvasCenter
    };

    var shouldLimit = typeof crop.scaleToFit === 'undefined' || crop.scaleToFit;

    var stageZoomFactor = getImageRectZoomFactor(
      imageSize,
      getCenteredCropRect(stage, aspectRatio),
      rotation,
      shouldLimit ? center : { x: 0.5, y: 0.5 }
    );

    var scale = zoom * stageZoomFactor;

    // start drawing
    return {
      widthFloat: canvasSize.width / scale,
      heightFloat: canvasSize.height / scale,
      width: Math.round(canvasSize.width / scale),
      height: Math.round(canvasSize.height / scale)
    };
  };

  var IMAGE_SCALE_SPRING_PROPS = {
    type: 'spring',
    stiffness: 0.5,
    damping: 0.45,
    mass: 10
  };

  // does horizontal and vertical flipping
  var createBitmapView = function createBitmapView(_) {
    return _.utils.createView({
      name: 'image-bitmap',
      ignoreRect: true,
      mixins: { styles: ['scaleX', 'scaleY'] },
      create: function create(_ref) {
        var root = _ref.root,
          props = _ref.props;
        root.appendChild(props.image);
      }
    });
  };

  // shifts and rotates image
  var createImageCanvasWrapper = function createImageCanvasWrapper(_) {
    return _.utils.createView({
      name: 'image-canvas-wrapper',
      tag: 'div',
      ignoreRect: true,
      mixins: {
        apis: ['crop', 'width', 'height'],

        styles: [
          'originX',
          'originY',
          'translateX',
          'translateY',
          'scaleX',
          'scaleY',
          'rotateZ'
        ],

        animations: {
          originX: IMAGE_SCALE_SPRING_PROPS,
          originY: IMAGE_SCALE_SPRING_PROPS,
          scaleX: IMAGE_SCALE_SPRING_PROPS,
          scaleY: IMAGE_SCALE_SPRING_PROPS,
          translateX: IMAGE_SCALE_SPRING_PROPS,
          translateY: IMAGE_SCALE_SPRING_PROPS,
          rotateZ: IMAGE_SCALE_SPRING_PROPS
        }
      },

      create: function create(_ref2) {
        var root = _ref2.root,
          props = _ref2.props;
        props.width = props.image.width;
        props.height = props.image.height;
        root.ref.bitmap = root.appendChildView(
          root.createChildView(createBitmapView(_), { image: props.image })
        );
      },
      write: function write(_ref3) {
        var root = _ref3.root,
          props = _ref3.props;
        var flip = props.crop.flip;
        var bitmap = root.ref.bitmap;
        bitmap.scaleX = flip.horizontal ? -1 : 1;
        bitmap.scaleY = flip.vertical ? -1 : 1;
      }
    });
  };

  // clips canvas to correct aspect ratio
  var createClipView = function createClipView(_) {
    return _.utils.createView({
      name: 'image-clip',
      tag: 'div',
      ignoreRect: true,
      mixins: {
        apis: [
          'crop',
          'markup',
          'resize',
          'width',
          'height',
          'dirty',
          'background'
        ],

        styles: ['width', 'height', 'opacity'],
        animations: {
          opacity: { type: 'tween', duration: 250 }
        }
      },

      didWriteView: function didWriteView(_ref4) {
        var root = _ref4.root,
          props = _ref4.props;
        if (!props.background) return;
        root.element.style.backgroundColor = props.background;
      },
      create: function create(_ref5) {
        var root = _ref5.root,
          props = _ref5.props;

        root.ref.image = root.appendChildView(
          root.createChildView(
            createImageCanvasWrapper(_),
            Object.assign({}, props)
          )
        );

        root.ref.createMarkup = function() {
          if (root.ref.markup) return;
          root.ref.markup = root.appendChildView(
            root.createChildView(createMarkupView(_), Object.assign({}, props))
          );
        };

        root.ref.destroyMarkup = function() {
          if (!root.ref.markup) return;
          root.removeChildView(root.ref.markup);
          root.ref.markup = null;
        };

        // set up transparency grid
        var transparencyIndicator = root.query(
          'GET_IMAGE_PREVIEW_TRANSPARENCY_INDICATOR'
        );
        if (transparencyIndicator === null) return;

        // grid pattern
        if (transparencyIndicator === 'grid') {
          root.element.dataset.transparencyIndicator = transparencyIndicator;
        }
        // basic color
        else {
          root.element.dataset.transparencyIndicator = 'color';
        }
      },
      write: function write(_ref6) {
        var root = _ref6.root,
          props = _ref6.props,
          shouldOptimize = _ref6.shouldOptimize;
        var crop = props.crop,
          markup = props.markup,
          resize = props.resize,
          dirty = props.dirty,
          width = props.width,
          height = props.height;

        root.ref.image.crop = crop;

        var stage = {
          x: 0,
          y: 0,
          width: width,
          height: height,
          center: {
            x: width * 0.5,
            y: height * 0.5
          }
        };

        var image = {
          width: root.ref.image.width,
          height: root.ref.image.height
        };

        var origin = {
          x: crop.center.x * image.width,
          y: crop.center.y * image.height
        };

        var translation = {
          x: stage.center.x - image.width * crop.center.x,
          y: stage.center.y - image.height * crop.center.y
        };

        var rotation = Math.PI * 2 + (crop.rotation % (Math.PI * 2));

        var cropAspectRatio = crop.aspectRatio || image.height / image.width;

        var shouldLimit =
          typeof crop.scaleToFit === 'undefined' || crop.scaleToFit;

        var stageZoomFactor = getImageRectZoomFactor(
          image,
          getCenteredCropRect(stage, cropAspectRatio),

          rotation,
          shouldLimit ? crop.center : { x: 0.5, y: 0.5 }
        );

        var scale = crop.zoom * stageZoomFactor;

        // update markup view
        if (markup && markup.length) {
          root.ref.createMarkup();
          root.ref.markup.width = width;
          root.ref.markup.height = height;
          root.ref.markup.resize = resize;
          root.ref.markup.dirty = dirty;
          root.ref.markup.markup = markup;
          root.ref.markup.crop = getCurrentCropSize(image, crop);
        } else if (root.ref.markup) {
          root.ref.destroyMarkup();
        }

        // update image view
        var imageView = root.ref.image;

        // don't update clip layout
        if (shouldOptimize) {
          imageView.originX = null;
          imageView.originY = null;
          imageView.translateX = null;
          imageView.translateY = null;
          imageView.rotateZ = null;
          imageView.scaleX = null;
          imageView.scaleY = null;
          return;
        }

        imageView.originX = origin.x;
        imageView.originY = origin.y;
        imageView.translateX = translation.x;
        imageView.translateY = translation.y;
        imageView.rotateZ = rotation;
        imageView.scaleX = scale;
        imageView.scaleY = scale;
      }
    });
  };

  var createImageView = function createImageView(_) {
    return _.utils.createView({
      name: 'image-preview',
      tag: 'div',
      ignoreRect: true,
      mixins: {
        apis: ['image', 'crop', 'markup', 'resize', 'dirty', 'background'],

        styles: ['translateY', 'scaleX', 'scaleY', 'opacity'],

        animations: {
          scaleX: IMAGE_SCALE_SPRING_PROPS,
          scaleY: IMAGE_SCALE_SPRING_PROPS,
          translateY: IMAGE_SCALE_SPRING_PROPS,
          opacity: { type: 'tween', duration: 400 }
        }
      },

      create: function create(_ref7) {
        var root = _ref7.root,
          props = _ref7.props;
        root.ref.clip = root.appendChildView(
          root.createChildView(createClipView(_), {
            id: props.id,
            image: props.image,
            crop: props.crop,
            markup: props.markup,
            resize: props.resize,
            dirty: props.dirty,
            background: props.background
          })
        );
      },
      write: function write(_ref8) {
        var root = _ref8.root,
          props = _ref8.props,
          shouldOptimize = _ref8.shouldOptimize;
        var clip = root.ref.clip;
        var image = props.image,
          crop = props.crop,
          markup = props.markup,
          resize = props.resize,
          dirty = props.dirty;

        clip.crop = crop;
        clip.markup = markup;
        clip.resize = resize;
        clip.dirty = dirty;

        // don't update clip layout
        clip.opacity = shouldOptimize ? 0 : 1;

        // don't re-render if optimizing or hidden (width will be zero resulting in weird animations)
        if (shouldOptimize || root.rect.element.hidden) return;

        // calculate scaled preview image size
        var imageAspectRatio = image.height / image.width;
        var aspectRatio = crop.aspectRatio || imageAspectRatio;

        // calculate container size
        var containerWidth = root.rect.inner.width;
        var containerHeight = root.rect.inner.height;

        var fixedPreviewHeight = root.query('GET_IMAGE_PREVIEW_HEIGHT');
        var minPreviewHeight = root.query('GET_IMAGE_PREVIEW_MIN_HEIGHT');
        var maxPreviewHeight = root.query('GET_IMAGE_PREVIEW_MAX_HEIGHT');

        var panelAspectRatio = root.query('GET_PANEL_ASPECT_RATIO');
        var allowMultiple = root.query('GET_ALLOW_MULTIPLE');

        if (panelAspectRatio && !allowMultiple) {
          fixedPreviewHeight = containerWidth * panelAspectRatio;
          aspectRatio = panelAspectRatio;
        }

        // determine clip width and height
        var clipHeight =
          fixedPreviewHeight !== null
            ? fixedPreviewHeight
            : Math.max(
                minPreviewHeight,
                Math.min(containerWidth * aspectRatio, maxPreviewHeight)
              );

        var clipWidth = clipHeight / aspectRatio;
        if (clipWidth > containerWidth) {
          clipWidth = containerWidth;
          clipHeight = clipWidth * aspectRatio;
        }

        if (clipHeight > containerHeight) {
          clipHeight = containerHeight;
          clipWidth = containerHeight / aspectRatio;
        }

        clip.width = clipWidth;
        clip.height = clipHeight;
      }
    });
  };

  var SVG_MASK =
    '<svg width="500" height="200" viewBox="0 0 500 200" preserveAspectRatio="none">\n    <defs>\n        <radialGradient id="gradient-__UID__" cx=".5" cy="1.25" r="1.15">\n            <stop offset=\'50%\' stop-color=\'#000000\'/>\n            <stop offset=\'56%\' stop-color=\'#0a0a0a\'/>\n            <stop offset=\'63%\' stop-color=\'#262626\'/>\n            <stop offset=\'69%\' stop-color=\'#4f4f4f\'/>\n            <stop offset=\'75%\' stop-color=\'#808080\'/>\n            <stop offset=\'81%\' stop-color=\'#b1b1b1\'/>\n            <stop offset=\'88%\' stop-color=\'#dadada\'/>\n            <stop offset=\'94%\' stop-color=\'#f6f6f6\'/>\n            <stop offset=\'100%\' stop-color=\'#ffffff\'/>\n        </radialGradient>\n        <mask id="mask-__UID__">\n            <rect x="0" y="0" width="500" height="200" fill="url(#gradient-__UID__)"></rect>\n        </mask>\n    </defs>\n    <rect x="0" width="500" height="200" fill="currentColor" mask="url(#mask-__UID__)"></rect>\n</svg>';

  var SVGMaskUniqueId = 0;

  var createImageOverlayView = function createImageOverlayView(fpAPI) {
    return fpAPI.utils.createView({
      name: 'image-preview-overlay',
      tag: 'div',
      ignoreRect: true,
      create: function create(_ref) {
        var root = _ref.root,
          props = _ref.props;
        var mask = SVG_MASK;
        if (document.querySelector('base')) {
          var url = new URL(
            window.location.href.replace(window.location.hash, '')
          ).href;
          mask = mask.replace(/url\(\#/g, 'url(' + url + '#');
        }

        SVGMaskUniqueId++;
        root.element.classList.add(
          'filepond--image-preview-overlay-'.concat(props.status)
        );

        root.element.innerHTML = mask.replace(/__UID__/g, SVGMaskUniqueId);
      },
      mixins: {
        styles: ['opacity'],
        animations: {
          opacity: { type: 'spring', mass: 25 }
        }
      }
    });
  };

  /**
   * Bitmap Worker
   */
  var BitmapWorker = function BitmapWorker() {
    self.onmessage = function(e) {
      createImageBitmap(e.data.message.file).then(function(bitmap) {
        self.postMessage({ id: e.data.id, message: bitmap }, [bitmap]);
      });
    };
  };

  /**
   * ColorMatrix Worker
   */
  var ColorMatrixWorker = function ColorMatrixWorker() {
    self.onmessage = function(e) {
      var imageData = e.data.message.imageData;
      var matrix = e.data.message.colorMatrix;

      var data = imageData.data;
      var l = data.length;

      var m11 = matrix[0];
      var m12 = matrix[1];
      var m13 = matrix[2];
      var m14 = matrix[3];
      var m15 = matrix[4];

      var m21 = matrix[5];
      var m22 = matrix[6];
      var m23 = matrix[7];
      var m24 = matrix[8];
      var m25 = matrix[9];

      var m31 = matrix[10];
      var m32 = matrix[11];
      var m33 = matrix[12];
      var m34 = matrix[13];
      var m35 = matrix[14];

      var m41 = matrix[15];
      var m42 = matrix[16];
      var m43 = matrix[17];
      var m44 = matrix[18];
      var m45 = matrix[19];

      var index = 0,
        r = 0.0,
        g = 0.0,
        b = 0.0,
        a = 0.0;

      for (; index < l; index += 4) {
        r = data[index] / 255;
        g = data[index + 1] / 255;
        b = data[index + 2] / 255;
        a = data[index + 3] / 255;
        data[index] = Math.max(
          0,
          Math.min((r * m11 + g * m12 + b * m13 + a * m14 + m15) * 255, 255)
        );
        data[index + 1] = Math.max(
          0,
          Math.min((r * m21 + g * m22 + b * m23 + a * m24 + m25) * 255, 255)
        );
        data[index + 2] = Math.max(
          0,
          Math.min((r * m31 + g * m32 + b * m33 + a * m34 + m35) * 255, 255)
        );
        data[index + 3] = Math.max(
          0,
          Math.min((r * m41 + g * m42 + b * m43 + a * m44 + m45) * 255, 255)
        );
      }

      self.postMessage({ id: e.data.id, message: imageData }, [
        imageData.data.buffer
      ]);
    };
  };

  var getImageSize = function getImageSize(url, cb) {
    var image = new Image();
    image.onload = function() {
      var width = image.naturalWidth;
      var height = image.naturalHeight;
      image = null;
      cb(width, height);
    };
    image.src = url;
  };

  var transforms = {
    1: function _() {
      return [1, 0, 0, 1, 0, 0];
    },
    2: function _(width) {
      return [-1, 0, 0, 1, width, 0];
    },
    3: function _(width, height) {
      return [-1, 0, 0, -1, width, height];
    },
    4: function _(width, height) {
      return [1, 0, 0, -1, 0, height];
    },
    5: function _() {
      return [0, 1, 1, 0, 0, 0];
    },
    6: function _(width, height) {
      return [0, 1, -1, 0, height, 0];
    },
    7: function _(width, height) {
      return [0, -1, -1, 0, height, width];
    },
    8: function _(width) {
      return [0, -1, 1, 0, 0, width];
    }
  };

  var fixImageOrientation = function fixImageOrientation(
    ctx,
    width,
    height,
    orientation
  ) {
    // no orientation supplied
    if (orientation === -1) {
      return;
    }

    ctx.transform.apply(ctx, transforms[orientation](width, height));
  };

  // draws the preview image to canvas
  var createPreviewImage = function createPreviewImage(
    data,
    width,
    height,
    orientation
  ) {
    // can't draw on half pixels
    width = Math.round(width);
    height = Math.round(height);

    // draw image
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext('2d');

    // if is rotated incorrectly swap width and height
    if (orientation >= 5 && orientation <= 8) {
      var _ref = [height, width];
      width = _ref[0];
      height = _ref[1];
    }

    // correct image orientation
    fixImageOrientation(ctx, width, height, orientation);

    // draw the image
    ctx.drawImage(data, 0, 0, width, height);

    return canvas;
  };

  var isBitmap = function isBitmap(file) {
    return /^image/.test(file.type) && !/svg/.test(file.type);
  };

  var MAX_WIDTH = 10;
  var MAX_HEIGHT = 10;

  var calculateAverageColor = function calculateAverageColor(image) {
    var scalar = Math.min(MAX_WIDTH / image.width, MAX_HEIGHT / image.height);

    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var width = (canvas.width = Math.ceil(image.width * scalar));
    var height = (canvas.height = Math.ceil(image.height * scalar));
    ctx.drawImage(image, 0, 0, width, height);
    var data = null;
    try {
      data = ctx.getImageData(0, 0, width, height).data;
    } catch (e) {
      return null;
    }
    var l = data.length;

    var r = 0;
    var g = 0;
    var b = 0;
    var i = 0;

    for (; i < l; i += 4) {
      r += data[i] * data[i];
      g += data[i + 1] * data[i + 1];
      b += data[i + 2] * data[i + 2];
    }

    r = averageColor(r, l);
    g = averageColor(g, l);
    b = averageColor(b, l);

    return { r: r, g: g, b: b };
  };

  var averageColor = function averageColor(c, l) {
    return Math.floor(Math.sqrt(c / (l / 4)));
  };

  var cloneCanvas = function cloneCanvas(origin, target) {
    target = target || document.createElement('canvas');
    target.width = origin.width;
    target.height = origin.height;
    var ctx = target.getContext('2d');
    ctx.drawImage(origin, 0, 0);
    return target;
  };

  var cloneImageData = function cloneImageData(imageData) {
    var id;
    try {
      id = new ImageData(imageData.width, imageData.height);
    } catch (e) {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      id = ctx.createImageData(imageData.width, imageData.height);
    }
    id.data.set(new Uint8ClampedArray(imageData.data));
    return id;
  };

  var loadImage = function loadImage(url) {
    return new Promise(function(resolve, reject) {
      var img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = function() {
        resolve(img);
      };
      img.onerror = function(e) {
        reject(e);
      };
      img.src = url;
    });
  };

  var createImageWrapperView = function createImageWrapperView(_) {
    // create overlay view
    var OverlayView = createImageOverlayView(_);

    var ImageView = createImageView(_);
    var createWorker = _.utils.createWorker;

    var applyFilter = function applyFilter(root, filter, target) {
      return new Promise(function(resolve) {
        // will store image data for future filter updates
        if (!root.ref.imageData) {
          root.ref.imageData = target
            .getContext('2d')
            .getImageData(0, 0, target.width, target.height);
        }

        // get image data reference
        var imageData = cloneImageData(root.ref.imageData);

        if (!filter || filter.length !== 20) {
          target.getContext('2d').putImageData(imageData, 0, 0);
          return resolve();
        }

        var worker = createWorker(ColorMatrixWorker);
        worker.post(
          {
            imageData: imageData,
            colorMatrix: filter
          },

          function(response) {
            // apply filtered colors
            target.getContext('2d').putImageData(response, 0, 0);

            // stop worker
            worker.terminate();

            // done!
            resolve();
          },
          [imageData.data.buffer]
        );
      });
    };

    var removeImageView = function removeImageView(root, imageView) {
      root.removeChildView(imageView);
      imageView.image.width = 1;
      imageView.image.height = 1;
      imageView._destroy();
    };

    // remove an image
    var shiftImage = function shiftImage(_ref) {
      var root = _ref.root;
      var imageView = root.ref.images.shift();
      imageView.opacity = 0;
      imageView.translateY = -15;
      root.ref.imageViewBin.push(imageView);
      return imageView;
    };

    // add new image
    var pushImage = function pushImage(_ref2) {
      var root = _ref2.root,
        props = _ref2.props,
        image = _ref2.image;
      var id = props.id;
      var item = root.query('GET_ITEM', { id: id });
      if (!item) return;

      var crop = item.getMetadata('crop') || {
        center: {
          x: 0.5,
          y: 0.5
        },

        flip: {
          horizontal: false,
          vertical: false
        },

        zoom: 1,
        rotation: 0,
        aspectRatio: null
      };

      var background = root.query(
        'GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR'
      );

      var markup;
      var resize;
      var dirty = false;
      if (root.query('GET_IMAGE_PREVIEW_MARKUP_SHOW')) {
        markup = item.getMetadata('markup') || [];
        resize = item.getMetadata('resize');
        dirty = true;
      }

      // append image presenter
      var imageView = root.appendChildView(
        root.createChildView(ImageView, {
          id: id,
          image: image,
          crop: crop,
          resize: resize,
          markup: markup,
          dirty: dirty,
          background: background,
          opacity: 0,
          scaleX: 1.15,
          scaleY: 1.15,
          translateY: 15
        }),

        root.childViews.length
      );

      root.ref.images.push(imageView);

      // reveal the preview image
      imageView.opacity = 1;
      imageView.scaleX = 1;
      imageView.scaleY = 1;
      imageView.translateY = 0;

      // the preview is now ready to be drawn
      setTimeout(function() {
        root.dispatch('DID_IMAGE_PREVIEW_SHOW', { id: id });
      }, 250);
    };

    var updateImage = function updateImage(_ref3) {
      var root = _ref3.root,
        props = _ref3.props;
      var item = root.query('GET_ITEM', { id: props.id });
      if (!item) return;
      var imageView = root.ref.images[root.ref.images.length - 1];
      imageView.crop = item.getMetadata('crop');
      imageView.background = root.query(
        'GET_IMAGE_TRANSFORM_CANVAS_BACKGROUND_COLOR'
      );

      if (root.query('GET_IMAGE_PREVIEW_MARKUP_SHOW')) {
        imageView.dirty = true;
        imageView.resize = item.getMetadata('resize');
        imageView.markup = item.getMetadata('markup');
      }
    };

    // replace image preview
    var didUpdateItemMetadata = function didUpdateItemMetadata(_ref4) {
      var root = _ref4.root,
        props = _ref4.props,
        action = _ref4.action;
      // only filter and crop trigger redraw
      if (!/crop|filter|markup|resize/.test(action.change.key)) return;

      // no images to update, exit
      if (!root.ref.images.length) return;

      // no item found, exit
      var item = root.query('GET_ITEM', { id: props.id });
      if (!item) return;

      // for now, update existing image when filtering
      if (/filter/.test(action.change.key)) {
        var imageView = root.ref.images[root.ref.images.length - 1];
        applyFilter(root, action.change.value, imageView.image);
        return;
      }

      if (/crop|markup|resize/.test(action.change.key)) {
        var crop = item.getMetadata('crop');
        var image = root.ref.images[root.ref.images.length - 1];

        // if aspect ratio has changed, we need to create a new image
        if (
          crop &&
          crop.aspectRatio &&
          image.crop &&
          image.crop.aspectRatio &&
          Math.abs(crop.aspectRatio - image.crop.aspectRatio) > 0.00001
        ) {
          var _imageView = shiftImage({ root: root });
          pushImage({
            root: root,
            props: props,
            image: cloneCanvas(_imageView.image)
          });
        }
        // if not, we can update the current image
        else {
          updateImage({ root: root, props: props });
        }
      }
    };

    var canCreateImageBitmap = function canCreateImageBitmap(file) {
      // Firefox versions before 58 will freeze when running createImageBitmap
      // in a Web Worker so we detect those versions and return false for support
      var userAgent = window.navigator.userAgent;
      var isFirefox = userAgent.match(/Firefox\/([0-9]+)\./);
      var firefoxVersion = isFirefox ? parseInt(isFirefox[1]) : null;
      if (firefoxVersion !== null && firefoxVersion <= 58) return false;

      return 'createImageBitmap' in window && isBitmap(file);
    };

    /**
     * Write handler for when preview container has been created
     */
    var didCreatePreviewContainer = function didCreatePreviewContainer(_ref5) {
      var root = _ref5.root,
        props = _ref5.props;
      var id = props.id;

      // we need to get the file data to determine the eventual image size
      var item = root.query('GET_ITEM', id);
      if (!item) return;

      // get url to file (we'll revoke it later on when done)
      var fileURL = URL.createObjectURL(item.file);

      // determine image size of this item
      getImageSize(fileURL, function(width, height) {
        // we can now scale the panel to the final size
        root.dispatch('DID_IMAGE_PREVIEW_CALCULATE_SIZE', {
          id: id,
          width: width,
          height: height
        });
      });
    };

    var drawPreview = function drawPreview(_ref6) {
      var root = _ref6.root,
        props = _ref6.props;
      var id = props.id;

      // we need to get the file data to determine the eventual image size
      var item = root.query('GET_ITEM', id);
      if (!item) return;

      // get url to file (we'll revoke it later on when done)
      var fileURL = URL.createObjectURL(item.file);

      // fallback
      var loadPreviewFallback = function loadPreviewFallback() {
        // let's scale the image in the main thread :(
        loadImage(fileURL).then(previewImageLoaded);
      };

      // image is now ready
      var previewImageLoaded = function previewImageLoaded(imageData) {
        // the file url is no longer needed
        URL.revokeObjectURL(fileURL);

        // draw the scaled down version here and use that as source so bitmapdata can be closed
        // orientation info
        var exif = item.getMetadata('exif') || {};
        var orientation = exif.orientation || -1;

        // get width and height from action, and swap if orientation is incorrect
        var width = imageData.width,
          height = imageData.height;

        // if no width or height, just return early.
        if (!width || !height) return;

        if (orientation >= 5 && orientation <= 8) {
          var _ref7 = [height, width];
          width = _ref7[0];
          height = _ref7[1];
        }

        // scale canvas based on pixel density
        // we multiply by .75 as that creates smaller but still clear images on screens with high res displays
        var pixelDensityFactor = Math.max(1, window.devicePixelRatio * 0.75);

        // we want as much pixels to work with as possible,
        // this multiplies the minimum image resolution,
        // so when zooming in it doesn't get too blurry
        var zoomFactor = root.query('GET_IMAGE_PREVIEW_ZOOM_FACTOR');

        // imaeg scale factor
        var scaleFactor = zoomFactor * pixelDensityFactor;

        // calculate scaled preview image size
        var previewImageRatio = height / width;

        // calculate image preview height and width
        var previewContainerWidth = root.rect.element.width;
        var previewContainerHeight = root.rect.element.height;

        var imageWidth = previewContainerWidth;
        var imageHeight = imageWidth * previewImageRatio;

        if (previewImageRatio > 1) {
          imageWidth = Math.min(width, previewContainerWidth * scaleFactor);
          imageHeight = imageWidth * previewImageRatio;
        } else {
          imageHeight = Math.min(height, previewContainerHeight * scaleFactor);
          imageWidth = imageHeight / previewImageRatio;
        }

        // transfer to image tag so no canvas memory wasted on iOS
        var previewImage = createPreviewImage(
          imageData,
          imageWidth,
          imageHeight,
          orientation
        );

        // done
        var done = function done() {
          // calculate average image color, disabled for now
          var averageColor = root.query(
            'GET_IMAGE_PREVIEW_CALCULATE_AVERAGE_IMAGE_COLOR'
          )
            ? calculateAverageColor(data)
            : null;
          item.setMetadata('color', averageColor, true);

          // data has been transferred to canvas ( if was ImageBitmap )
          if ('close' in imageData) {
            imageData.close();
          }

          // show the overlay
          root.ref.overlayShadow.opacity = 1;

          // create the first image
          pushImage({ root: root, props: props, image: previewImage });
        };

        // apply filter
        var filter = item.getMetadata('filter');
        if (filter) {
          applyFilter(root, filter, previewImage).then(done);
        } else {
          done();
        }
      };

      // if we support scaling using createImageBitmap we use a worker
      if (canCreateImageBitmap(item.file)) {
        // let's scale the image in a worker
        var worker = createWorker(BitmapWorker);

        worker.post(
          {
            file: item.file
          },

          function(imageBitmap) {
            // destroy worker
            worker.terminate();

            // no bitmap returned, must be something wrong,
            // try the oldschool way
            if (!imageBitmap) {
              loadPreviewFallback();
              return;
            }

            // yay we got our bitmap, let's continue showing the preview
            previewImageLoaded(imageBitmap);
          }
        );
      } else {
        // create fallback preview
        loadPreviewFallback();
      }
    };

    /**
     * Write handler for when the preview image is ready to be animated
     */
    var didDrawPreview = function didDrawPreview(_ref8) {
      var root = _ref8.root;
      // get last added image
      var image = root.ref.images[root.ref.images.length - 1];
      image.translateY = 0;
      image.scaleX = 1.0;
      image.scaleY = 1.0;
      image.opacity = 1;
    };

    /**
     * Write handler for when the preview has been loaded
     */
    var restoreOverlay = function restoreOverlay(_ref9) {
      var root = _ref9.root;
      root.ref.overlayShadow.opacity = 1;
      root.ref.overlayError.opacity = 0;
      root.ref.overlaySuccess.opacity = 0;
    };

    var didThrowError = function didThrowError(_ref10) {
      var root = _ref10.root;
      root.ref.overlayShadow.opacity = 0.25;
      root.ref.overlayError.opacity = 1;
    };

    var didCompleteProcessing = function didCompleteProcessing(_ref11) {
      var root = _ref11.root;
      root.ref.overlayShadow.opacity = 0.25;
      root.ref.overlaySuccess.opacity = 1;
    };

    /**
     * Constructor
     */
    var create = function create(_ref12) {
      var root = _ref12.root;
      // image view
      root.ref.images = [];

      // the preview image data (we need this to filter the image)
      root.ref.imageData = null;

      // image bin
      root.ref.imageViewBin = [];

      // image overlays
      root.ref.overlayShadow = root.appendChildView(
        root.createChildView(OverlayView, {
          opacity: 0,
          status: 'idle'
        })
      );

      root.ref.overlaySuccess = root.appendChildView(
        root.createChildView(OverlayView, {
          opacity: 0,
          status: 'success'
        })
      );

      root.ref.overlayError = root.appendChildView(
        root.createChildView(OverlayView, {
          opacity: 0,
          status: 'failure'
        })
      );
    };

    return _.utils.createView({
      name: 'image-preview-wrapper',
      create: create,
      styles: ['height'],
      apis: ['height'],
      destroy: function destroy(_ref13) {
        var root = _ref13.root;
        // we resize the image so memory on iOS 12 is released more quickly (it seems)
        root.ref.images.forEach(function(imageView) {
          imageView.image.width = 1;
          imageView.image.height = 1;
        });
      },
      didWriteView: function didWriteView(_ref14) {
        var root = _ref14.root;
        root.ref.images.forEach(function(imageView) {
          imageView.dirty = false;
        });
      },
      write: _.utils.createRoute(
        {
          // image preview stated
          DID_IMAGE_PREVIEW_DRAW: didDrawPreview,
          DID_IMAGE_PREVIEW_CONTAINER_CREATE: didCreatePreviewContainer,
          DID_FINISH_CALCULATE_PREVIEWSIZE: drawPreview,
          DID_UPDATE_ITEM_METADATA: didUpdateItemMetadata,

          // file states
          DID_THROW_ITEM_LOAD_ERROR: didThrowError,
          DID_THROW_ITEM_PROCESSING_ERROR: didThrowError,
          DID_THROW_ITEM_INVALID: didThrowError,
          DID_COMPLETE_ITEM_PROCESSING: didCompleteProcessing,
          DID_START_ITEM_PROCESSING: restoreOverlay,
          DID_REVERT_ITEM_PROCESSING: restoreOverlay
        },

        function(_ref15) {
          var root = _ref15.root;
          // views on death row
          var viewsToRemove = root.ref.imageViewBin.filter(function(imageView) {
            return imageView.opacity === 0;
          });

          // views to retain
          root.ref.imageViewBin = root.ref.imageViewBin.filter(function(
            imageView
          ) {
            return imageView.opacity > 0;
          });

          // remove these views
          viewsToRemove.forEach(function(imageView) {
            return removeImageView(root, imageView);
          });
          viewsToRemove.length = 0;
        }
      )
    });
  };

  /**
   * Image Preview Plugin
   */
  var plugin = function plugin(fpAPI) {
    var addFilter = fpAPI.addFilter,
      utils = fpAPI.utils;
    var Type = utils.Type,
      createRoute = utils.createRoute,
      isFile = utils.isFile;

    // imagePreviewView
    var imagePreviewView = createImageWrapperView(fpAPI);

    // called for each view that is created right after the 'create' method
    addFilter('CREATE_VIEW', function(viewAPI) {
      // get reference to created view
      var is = viewAPI.is,
        view = viewAPI.view,
        query = viewAPI.query;

      // only hook up to item view and only if is enabled for this cropper
      if (!is('file') || !query('GET_ALLOW_IMAGE_PREVIEW')) return;

      // create the image preview plugin, but only do so if the item is an image
      var didLoadItem = function didLoadItem(_ref) {
        var root = _ref.root,
          props = _ref.props;
        var id = props.id;
        var item = query('GET_ITEM', id);

        // item could theoretically have been removed in the mean time
        if (!item || !isFile(item.file) || item.archived) return;

        // get the file object
        var file = item.file;

        // exit if this is not an image
        if (!isPreviewableImage(file)) return;

        // test if is filtered
        if (!query('GET_IMAGE_PREVIEW_FILTER_ITEM')(item)) return;

        // exit if image size is too high and no createImageBitmap support
        // this would simply bring the browser to its knees and that is not what we want
        var supportsCreateImageBitmap = 'createImageBitmap' in (window || {});
        var maxPreviewFileSize = query('GET_IMAGE_PREVIEW_MAX_FILE_SIZE');
        if (
          !supportsCreateImageBitmap &&
          maxPreviewFileSize &&
          file.size > maxPreviewFileSize
        )
          return;

        // set preview view
        root.ref.imagePreview = view.appendChildView(
          view.createChildView(imagePreviewView, { id: id })
        );

        // update height if is fixed
        var fixedPreviewHeight = root.query('GET_IMAGE_PREVIEW_HEIGHT');
        if (fixedPreviewHeight) {
          root.dispatch('DID_UPDATE_PANEL_HEIGHT', {
            id: item.id,
            height: fixedPreviewHeight
          });
        }

        // now ready
        var queue =
          !supportsCreateImageBitmap &&
          file.size > query('GET_IMAGE_PREVIEW_MAX_INSTANT_PREVIEW_FILE_SIZE');
        root.dispatch('DID_IMAGE_PREVIEW_CONTAINER_CREATE', { id: id }, queue);
      };

      var rescaleItem = function rescaleItem(root, props) {
        if (!root.ref.imagePreview) return;
        var id = props.id;

        // get item
        var item = root.query('GET_ITEM', { id: id });
        if (!item) return;

        // if is fixed height or panel has aspect ratio, exit here, height has already been defined
        var panelAspectRatio = root.query('GET_PANEL_ASPECT_RATIO');
        var itemPanelAspectRatio = root.query('GET_ITEM_PANEL_ASPECT_RATIO');
        var fixedHeight = root.query('GET_IMAGE_PREVIEW_HEIGHT');
        if (panelAspectRatio || itemPanelAspectRatio || fixedHeight) return;

        // no data!
        var _root$ref = root.ref,
          imageWidth = _root$ref.imageWidth,
          imageHeight = _root$ref.imageHeight;
        if (!imageWidth || !imageHeight) return;

        // get height min and max
        var minPreviewHeight = root.query('GET_IMAGE_PREVIEW_MIN_HEIGHT');
        var maxPreviewHeight = root.query('GET_IMAGE_PREVIEW_MAX_HEIGHT');

        // orientation info
        var exif = item.getMetadata('exif') || {};
        var orientation = exif.orientation || -1;

        // get width and height from action, and swap of orientation is incorrect
        if (orientation >= 5 && orientation <= 8) {
          var _ref2 = [imageHeight, imageWidth];
          imageWidth = _ref2[0];
          imageHeight = _ref2[1];
        }

        // scale up width and height when we're dealing with an SVG
        if (!isBitmap(item.file) || root.query('GET_IMAGE_PREVIEW_UPSCALE')) {
          var scalar = 2048 / imageWidth;
          imageWidth *= scalar;
          imageHeight *= scalar;
        }

        // image aspect ratio
        var imageAspectRatio = imageHeight / imageWidth;

        // we need the item to get to the crop size
        var previewAspectRatio =
          (item.getMetadata('crop') || {}).aspectRatio || imageAspectRatio;

        // preview height range
        var previewHeightMax = Math.max(
          minPreviewHeight,
          Math.min(imageHeight, maxPreviewHeight)
        );

        var itemWidth = root.rect.element.width;
        var previewHeight = Math.min(
          itemWidth * previewAspectRatio,
          previewHeightMax
        );

        // request update to panel height
        root.dispatch('DID_UPDATE_PANEL_HEIGHT', {
          id: item.id,
          height: previewHeight
        });
      };

      var didResizeView = function didResizeView(_ref3) {
        var root = _ref3.root;
        // actions in next write operation
        root.ref.shouldRescale = true;
      };

      var didUpdateItemMetadata = function didUpdateItemMetadata(_ref4) {
        var root = _ref4.root,
          action = _ref4.action;
        if (action.change.key !== 'crop') return;

        // actions in next write operation
        root.ref.shouldRescale = true;
      };

      var didCalculatePreviewSize = function didCalculatePreviewSize(_ref5) {
        var root = _ref5.root,
          action = _ref5.action;
        // remember dimensions
        root.ref.imageWidth = action.width;
        root.ref.imageHeight = action.height;

        // actions in next write operation
        root.ref.shouldRescale = true;
        root.ref.shouldDrawPreview = true;

        // as image load could take a while and fire when draw loop is resting we need to give it a kick
        root.dispatch('KICK');
      };

      // start writing
      view.registerWriter(
        createRoute(
          {
            DID_RESIZE_ROOT: didResizeView,
            DID_STOP_RESIZE: didResizeView,
            DID_LOAD_ITEM: didLoadItem,
            DID_IMAGE_PREVIEW_CALCULATE_SIZE: didCalculatePreviewSize,
            DID_UPDATE_ITEM_METADATA: didUpdateItemMetadata
          },

          function(_ref6) {
            var root = _ref6.root,
              props = _ref6.props;
            // no preview view attached
            if (!root.ref.imagePreview) return;

            // don't do anything while hidden
            if (root.rect.element.hidden) return;

            // resize the item panel
            if (root.ref.shouldRescale) {
              rescaleItem(root, props);
              root.ref.shouldRescale = false;
            }

            if (root.ref.shouldDrawPreview) {
              // queue till next frame so we're sure the height has been applied this forces the draw image call inside the wrapper view to use the correct height
              requestAnimationFrame(function() {
                // this requestAnimationFrame nesting is horrible but it fixes an issue with 100hz displays on Chrome
                // https://github.com/pqina/filepond-plugin-image-preview/issues/57
                requestAnimationFrame(function() {
                  root.dispatch('DID_FINISH_CALCULATE_PREVIEWSIZE', {
                    id: props.id
                  });
                });
              });

              root.ref.shouldDrawPreview = false;
            }
          }
        )
      );
    });

    // expose plugin
    return {
      options: {
        // Enable or disable image preview
        allowImagePreview: [true, Type.BOOLEAN],

        // filters file items to determine which are shown as preview
        imagePreviewFilterItem: [
          function() {
            return true;
          },
          Type.FUNCTION
        ],

        // Fixed preview height
        imagePreviewHeight: [null, Type.INT],

        // Min image height
        imagePreviewMinHeight: [44, Type.INT],

        // Max image height
        imagePreviewMaxHeight: [256, Type.INT],

        // Max size of preview file for when createImageBitmap is not supported
        imagePreviewMaxFileSize: [null, Type.INT],

        // The amount of extra pixels added to the image preview to allow comfortable zooming
        imagePreviewZoomFactor: [2, Type.INT],

        // Should we upscale small images to fit the max bounding box of the preview area
        imagePreviewUpscale: [false, Type.BOOLEAN],

        // Max size of preview file that we allow to try to instant preview if createImageBitmap is not supported, else image is queued for loading
        imagePreviewMaxInstantPreviewFileSize: [1000000, Type.INT],

        // Style of the transparancy indicator used behind images
        imagePreviewTransparencyIndicator: [null, Type.STRING],

        // Enables or disables reading average image color
        imagePreviewCalculateAverageImageColor: [false, Type.BOOLEAN],

        // Enables or disables the previewing of markup
        imagePreviewMarkupShow: [true, Type.BOOLEAN],

        // Allows filtering of markup to only show certain shapes
        imagePreviewMarkupFilter: [
          function() {
            return true;
          },
          Type.FUNCTION
        ]
      }
    };
  };

  // fire pluginloaded event if running in browser, this allows registering the plugin when using async script tags
  var isBrowser =
    typeof window !== 'undefined' && typeof window.document !== 'undefined';
  if (isBrowser) {
    document.dispatchEvent(
      new CustomEvent('FilePond:pluginloaded', { detail: plugin })
    );
  }

  return plugin;
});


/***/ }),

/***/ "./node_modules/filepond/dist/filepond.js":
/*!************************************************!*\
  !*** ./node_modules/filepond/dist/filepond.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports) {

/*!
 * FilePond 4.30.6
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */

/* eslint-disable */

(function(global, factory) {
     true
        ? factory(exports)
        : 0;
})(this, function(exports) {
    'use strict';

    var isNode = function isNode(value) {
        return value instanceof HTMLElement;
    };

    var createStore = function createStore(initialState) {
        var queries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var actions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        // internal state
        var state = Object.assign({}, initialState);

        // contains all actions for next frame, is clear when actions are requested
        var actionQueue = [];
        var dispatchQueue = [];

        // returns a duplicate of the current state
        var getState = function getState() {
            return Object.assign({}, state);
        };

        // returns a duplicate of the actions array and clears the actions array
        var processActionQueue = function processActionQueue() {
            // create copy of actions queue
            var queue = [].concat(actionQueue);

            // clear actions queue (we don't want no double actions)
            actionQueue.length = 0;

            return queue;
        };

        // processes actions that might block the main UI thread
        var processDispatchQueue = function processDispatchQueue() {
            // create copy of actions queue
            var queue = [].concat(dispatchQueue);

            // clear actions queue (we don't want no double actions)
            dispatchQueue.length = 0;

            // now dispatch these actions
            queue.forEach(function(_ref) {
                var type = _ref.type,
                    data = _ref.data;
                dispatch(type, data);
            });
        };

        // adds a new action, calls its handler and
        var dispatch = function dispatch(type, data, isBlocking) {
            // is blocking action (should never block if document is hidden)
            if (isBlocking && !document.hidden) {
                dispatchQueue.push({ type: type, data: data });
                return;
            }

            // if this action has a handler, handle the action
            if (actionHandlers[type]) {
                actionHandlers[type](data);
            }

            // now add action
            actionQueue.push({
                type: type,
                data: data,
            });
        };

        var query = function query(str) {
            var _queryHandles;
            for (
                var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
                _key < _len;
                _key++
            ) {
                args[_key - 1] = arguments[_key];
            }
            return queryHandles[str]
                ? (_queryHandles = queryHandles)[str].apply(_queryHandles, args)
                : null;
        };

        var api = {
            getState: getState,
            processActionQueue: processActionQueue,
            processDispatchQueue: processDispatchQueue,
            dispatch: dispatch,
            query: query,
        };

        var queryHandles = {};
        queries.forEach(function(query) {
            queryHandles = Object.assign({}, query(state), {}, queryHandles);
        });

        var actionHandlers = {};
        actions.forEach(function(action) {
            actionHandlers = Object.assign({}, action(dispatch, query, state), {}, actionHandlers);
        });

        return api;
    };

    var defineProperty = function defineProperty(obj, property, definition) {
        if (typeof definition === 'function') {
            obj[property] = definition;
            return;
        }
        Object.defineProperty(obj, property, Object.assign({}, definition));
    };

    var forin = function forin(obj, cb) {
        for (var key in obj) {
            if (!obj.hasOwnProperty(key)) {
                continue;
            }

            cb(key, obj[key]);
        }
    };

    var createObject = function createObject(definition) {
        var obj = {};
        forin(definition, function(property) {
            defineProperty(obj, property, definition[property]);
        });
        return obj;
    };

    var attr = function attr(node, name) {
        var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        if (value === null) {
            return node.getAttribute(name) || node.hasAttribute(name);
        }
        node.setAttribute(name, value);
    };

    var ns = 'http://www.w3.org/2000/svg';
    var svgElements = ['svg', 'path']; // only svg elements used

    var isSVGElement = function isSVGElement(tag) {
        return svgElements.includes(tag);
    };

    var createElement = function createElement(tag, className) {
        var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        if (typeof className === 'object') {
            attributes = className;
            className = null;
        }
        var element = isSVGElement(tag)
            ? document.createElementNS(ns, tag)
            : document.createElement(tag);
        if (className) {
            if (isSVGElement(tag)) {
                attr(element, 'class', className);
            } else {
                element.className = className;
            }
        }
        forin(attributes, function(name, value) {
            attr(element, name, value);
        });
        return element;
    };

    var appendChild = function appendChild(parent) {
        return function(child, index) {
            if (typeof index !== 'undefined' && parent.children[index]) {
                parent.insertBefore(child, parent.children[index]);
            } else {
                parent.appendChild(child);
            }
        };
    };

    var appendChildView = function appendChildView(parent, childViews) {
        return function(view, index) {
            if (typeof index !== 'undefined') {
                childViews.splice(index, 0, view);
            } else {
                childViews.push(view);
            }

            return view;
        };
    };

    var removeChildView = function removeChildView(parent, childViews) {
        return function(view) {
            // remove from child views
            childViews.splice(childViews.indexOf(view), 1);

            // remove the element
            if (view.element.parentNode) {
                parent.removeChild(view.element);
            }

            return view;
        };
    };

    var IS_BROWSER = (function() {
        return typeof window !== 'undefined' && typeof window.document !== 'undefined';
    })();
    var isBrowser = function isBrowser() {
        return IS_BROWSER;
    };

    var testElement = isBrowser() ? createElement('svg') : {};
    var getChildCount =
        'children' in testElement
            ? function(el) {
                  return el.children.length;
              }
            : function(el) {
                  return el.childNodes.length;
              };

    var getViewRect = function getViewRect(elementRect, childViews, offset, scale) {
        var left = offset[0] || elementRect.left;
        var top = offset[1] || elementRect.top;
        var right = left + elementRect.width;
        var bottom = top + elementRect.height * (scale[1] || 1);

        var rect = {
            // the rectangle of the element itself
            element: Object.assign({}, elementRect),

            // the rectangle of the element expanded to contain its children, does not include any margins
            inner: {
                left: elementRect.left,
                top: elementRect.top,
                right: elementRect.right,
                bottom: elementRect.bottom,
            },

            // the rectangle of the element expanded to contain its children including own margin and child margins
            // margins will be added after we've recalculated the size
            outer: {
                left: left,
                top: top,
                right: right,
                bottom: bottom,
            },
        };

        // expand rect to fit all child rectangles
        childViews
            .filter(function(childView) {
                return !childView.isRectIgnored();
            })
            .map(function(childView) {
                return childView.rect;
            })
            .forEach(function(childViewRect) {
                expandRect(rect.inner, Object.assign({}, childViewRect.inner));
                expandRect(rect.outer, Object.assign({}, childViewRect.outer));
            });

        // calculate inner width and height
        calculateRectSize(rect.inner);

        // append additional margin (top and left margins are included in top and left automatically)
        rect.outer.bottom += rect.element.marginBottom;
        rect.outer.right += rect.element.marginRight;

        // calculate outer width and height
        calculateRectSize(rect.outer);

        return rect;
    };

    var expandRect = function expandRect(parent, child) {
        // adjust for parent offset
        child.top += parent.top;
        child.right += parent.left;
        child.bottom += parent.top;
        child.left += parent.left;

        if (child.bottom > parent.bottom) {
            parent.bottom = child.bottom;
        }

        if (child.right > parent.right) {
            parent.right = child.right;
        }
    };

    var calculateRectSize = function calculateRectSize(rect) {
        rect.width = rect.right - rect.left;
        rect.height = rect.bottom - rect.top;
    };

    var isNumber = function isNumber(value) {
        return typeof value === 'number';
    };

    /**
     * Determines if position is at destination
     * @param position
     * @param destination
     * @param velocity
     * @param errorMargin
     * @returns {boolean}
     */
    var thereYet = function thereYet(position, destination, velocity) {
        var errorMargin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.001;
        return Math.abs(position - destination) < errorMargin && Math.abs(velocity) < errorMargin;
    };

    /**
     * Spring animation
     */
    var spring =
        // default options
        function spring() // method definition
        {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref$stiffness = _ref.stiffness,
                stiffness = _ref$stiffness === void 0 ? 0.5 : _ref$stiffness,
                _ref$damping = _ref.damping,
                damping = _ref$damping === void 0 ? 0.75 : _ref$damping,
                _ref$mass = _ref.mass,
                mass = _ref$mass === void 0 ? 10 : _ref$mass;
            var target = null;
            var position = null;
            var velocity = 0;
            var resting = false;

            // updates spring state
            var interpolate = function interpolate(ts, skipToEndState) {
                // in rest, don't animate
                if (resting) return;

                // need at least a target or position to do springy things
                if (!(isNumber(target) && isNumber(position))) {
                    resting = true;
                    velocity = 0;
                    return;
                }

                // calculate spring force
                var f = -(position - target) * stiffness;

                // update velocity by adding force based on mass
                velocity += f / mass;

                // update position by adding velocity
                position += velocity;

                // slow down based on amount of damping
                velocity *= damping;

                // we've arrived if we're near target and our velocity is near zero
                if (thereYet(position, target, velocity) || skipToEndState) {
                    position = target;
                    velocity = 0;
                    resting = true;

                    // we done
                    api.onupdate(position);
                    api.oncomplete(position);
                } else {
                    // progress update
                    api.onupdate(position);
                }
            };

            /**
             * Set new target value
             * @param value
             */
            var setTarget = function setTarget(value) {
                // if currently has no position, set target and position to this value
                if (isNumber(value) && !isNumber(position)) {
                    position = value;
                }

                // next target value will not be animated to
                if (target === null) {
                    target = value;
                    position = value;
                }

                // let start moving to target
                target = value;

                // already at target
                if (position === target || typeof target === 'undefined') {
                    // now resting as target is current position, stop moving
                    resting = true;
                    velocity = 0;

                    // done!
                    api.onupdate(position);
                    api.oncomplete(position);

                    return;
                }

                resting = false;
            };

            // need 'api' to call onupdate callback
            var api = createObject({
                interpolate: interpolate,
                target: {
                    set: setTarget,
                    get: function get() {
                        return target;
                    },
                },

                resting: {
                    get: function get() {
                        return resting;
                    },
                },

                onupdate: function onupdate(value) {},
                oncomplete: function oncomplete(value) {},
            });

            return api;
        };

    var easeLinear = function easeLinear(t) {
        return t;
    };
    var easeInOutQuad = function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    var tween =
        // default values
        function tween() // method definition
        {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref$duration = _ref.duration,
                duration = _ref$duration === void 0 ? 500 : _ref$duration,
                _ref$easing = _ref.easing,
                easing = _ref$easing === void 0 ? easeInOutQuad : _ref$easing,
                _ref$delay = _ref.delay,
                delay = _ref$delay === void 0 ? 0 : _ref$delay;
            var start = null;
            var t;
            var p;
            var resting = true;
            var reverse = false;
            var target = null;

            var interpolate = function interpolate(ts, skipToEndState) {
                if (resting || target === null) return;

                if (start === null) {
                    start = ts;
                }

                if (ts - start < delay) return;

                t = ts - start - delay;

                if (t >= duration || skipToEndState) {
                    t = 1;
                    p = reverse ? 0 : 1;
                    api.onupdate(p * target);
                    api.oncomplete(p * target);
                    resting = true;
                } else {
                    p = t / duration;
                    api.onupdate((t >= 0 ? easing(reverse ? 1 - p : p) : 0) * target);
                }
            };

            // need 'api' to call onupdate callback
            var api = createObject({
                interpolate: interpolate,
                target: {
                    get: function get() {
                        return reverse ? 0 : target;
                    },
                    set: function set(value) {
                        // is initial value
                        if (target === null) {
                            target = value;
                            api.onupdate(value);
                            api.oncomplete(value);
                            return;
                        }

                        // want to tween to a smaller value and have a current value
                        if (value < target) {
                            target = 1;
                            reverse = true;
                        } else {
                            // not tweening to a smaller value
                            reverse = false;
                            target = value;
                        }

                        // let's go!
                        resting = false;
                        start = null;
                    },
                },

                resting: {
                    get: function get() {
                        return resting;
                    },
                },

                onupdate: function onupdate(value) {},
                oncomplete: function oncomplete(value) {},
            });

            return api;
        };

    var animator = {
        spring: spring,
        tween: tween,
    };

    /*
                       { type: 'spring', stiffness: .5, damping: .75, mass: 10 };
                       { translation: { type: 'spring', ... }, ... }
                       { translation: { x: { type: 'spring', ... } } }
                      */
    var createAnimator = function createAnimator(definition, category, property) {
        // default is single definition
        // we check if transform is set, if so, we check if property is set
        var def =
            definition[category] && typeof definition[category][property] === 'object'
                ? definition[category][property]
                : definition[category] || definition;

        var type = typeof def === 'string' ? def : def.type;
        var props = typeof def === 'object' ? Object.assign({}, def) : {};

        return animator[type] ? animator[type](props) : null;
    };

    var addGetSet = function addGetSet(keys, obj, props) {
        var overwrite = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        obj = Array.isArray(obj) ? obj : [obj];
        obj.forEach(function(o) {
            keys.forEach(function(key) {
                var name = key;
                var getter = function getter() {
                    return props[key];
                };
                var setter = function setter(value) {
                    return (props[key] = value);
                };

                if (typeof key === 'object') {
                    name = key.key;
                    getter = key.getter || getter;
                    setter = key.setter || setter;
                }

                if (o[name] && !overwrite) {
                    return;
                }

                o[name] = {
                    get: getter,
                    set: setter,
                };
            });
        });
    };

    // add to state,
    // add getters and setters to internal and external api (if not set)
    // setup animators

    var animations = function animations(_ref) {
        var mixinConfig = _ref.mixinConfig,
            viewProps = _ref.viewProps,
            viewInternalAPI = _ref.viewInternalAPI,
            viewExternalAPI = _ref.viewExternalAPI;
        // initial properties
        var initialProps = Object.assign({}, viewProps);

        // list of all active animations
        var animations = [];

        // setup animators
        forin(mixinConfig, function(property, animation) {
            var animator = createAnimator(animation);
            if (!animator) {
                return;
            }

            // when the animator updates, update the view state value
            animator.onupdate = function(value) {
                viewProps[property] = value;
            };

            // set animator target
            animator.target = initialProps[property];

            // when value is set, set the animator target value
            var prop = {
                key: property,
                setter: function setter(value) {
                    // if already at target, we done!
                    if (animator.target === value) {
                        return;
                    }

                    animator.target = value;
                },
                getter: function getter() {
                    return viewProps[property];
                },
            };

            // add getters and setters
            addGetSet([prop], [viewInternalAPI, viewExternalAPI], viewProps, true);

            // add it to the list for easy updating from the _write method
            animations.push(animator);
        });

        // expose internal write api
        return {
            write: function write(ts) {
                var skipToEndState = document.hidden;
                var resting = true;
                animations.forEach(function(animation) {
                    if (!animation.resting) resting = false;
                    animation.interpolate(ts, skipToEndState);
                });
                return resting;
            },
            destroy: function destroy() {},
        };
    };

    var addEvent = function addEvent(element) {
        return function(type, fn) {
            element.addEventListener(type, fn);
        };
    };

    var removeEvent = function removeEvent(element) {
        return function(type, fn) {
            element.removeEventListener(type, fn);
        };
    };

    // mixin
    var listeners = function listeners(_ref) {
        var mixinConfig = _ref.mixinConfig,
            viewProps = _ref.viewProps,
            viewInternalAPI = _ref.viewInternalAPI,
            viewExternalAPI = _ref.viewExternalAPI,
            viewState = _ref.viewState,
            view = _ref.view;
        var events = [];

        var add = addEvent(view.element);
        var remove = removeEvent(view.element);

        viewExternalAPI.on = function(type, fn) {
            events.push({
                type: type,
                fn: fn,
            });

            add(type, fn);
        };

        viewExternalAPI.off = function(type, fn) {
            events.splice(
                events.findIndex(function(event) {
                    return event.type === type && event.fn === fn;
                }),
                1
            );

            remove(type, fn);
        };

        return {
            write: function write() {
                // not busy
                return true;
            },
            destroy: function destroy() {
                events.forEach(function(event) {
                    remove(event.type, event.fn);
                });
            },
        };
    };

    // add to external api and link to props

    var apis = function apis(_ref) {
        var mixinConfig = _ref.mixinConfig,
            viewProps = _ref.viewProps,
            viewExternalAPI = _ref.viewExternalAPI;
        addGetSet(mixinConfig, viewExternalAPI, viewProps);
    };

    var isDefined = function isDefined(value) {
        return value != null;
    };

    // add to state,
    // add getters and setters to internal and external api (if not set)
    // set initial state based on props in viewProps
    // apply as transforms each frame

    var defaults = {
        opacity: 1,
        scaleX: 1,
        scaleY: 1,
        translateX: 0,
        translateY: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        originX: 0,
        originY: 0,
    };

    var styles = function styles(_ref) {
        var mixinConfig = _ref.mixinConfig,
            viewProps = _ref.viewProps,
            viewInternalAPI = _ref.viewInternalAPI,
            viewExternalAPI = _ref.viewExternalAPI,
            view = _ref.view;
        // initial props
        var initialProps = Object.assign({}, viewProps);

        // current props
        var currentProps = {};

        // we will add those properties to the external API and link them to the viewState
        addGetSet(mixinConfig, [viewInternalAPI, viewExternalAPI], viewProps);

        // override rect on internal and external rect getter so it takes in account transforms
        var getOffset = function getOffset() {
            return [viewProps['translateX'] || 0, viewProps['translateY'] || 0];
        };

        var getScale = function getScale() {
            return [viewProps['scaleX'] || 0, viewProps['scaleY'] || 0];
        };
        var getRect = function getRect() {
            return view.rect
                ? getViewRect(view.rect, view.childViews, getOffset(), getScale())
                : null;
        };
        viewInternalAPI.rect = { get: getRect };
        viewExternalAPI.rect = { get: getRect };

        // apply view props
        mixinConfig.forEach(function(key) {
            viewProps[key] =
                typeof initialProps[key] === 'undefined' ? defaults[key] : initialProps[key];
        });

        // expose api
        return {
            write: function write() {
                // see if props have changed
                if (!propsHaveChanged(currentProps, viewProps)) {
                    return;
                }

                // moves element to correct position on screen
                applyStyles(view.element, viewProps);

                // store new transforms
                Object.assign(currentProps, Object.assign({}, viewProps));

                // no longer busy
                return true;
            },
            destroy: function destroy() {},
        };
    };

    var propsHaveChanged = function propsHaveChanged(currentProps, newProps) {
        // different amount of keys
        if (Object.keys(currentProps).length !== Object.keys(newProps).length) {
            return true;
        }

        // lets analyze the individual props
        for (var prop in newProps) {
            if (newProps[prop] !== currentProps[prop]) {
                return true;
            }
        }

        return false;
    };

    var applyStyles = function applyStyles(element, _ref2) {
        var opacity = _ref2.opacity,
            perspective = _ref2.perspective,
            translateX = _ref2.translateX,
            translateY = _ref2.translateY,
            scaleX = _ref2.scaleX,
            scaleY = _ref2.scaleY,
            rotateX = _ref2.rotateX,
            rotateY = _ref2.rotateY,
            rotateZ = _ref2.rotateZ,
            originX = _ref2.originX,
            originY = _ref2.originY,
            width = _ref2.width,
            height = _ref2.height;

        var transforms = '';
        var styles = '';

        // handle transform origin
        if (isDefined(originX) || isDefined(originY)) {
            styles += 'transform-origin: ' + (originX || 0) + 'px ' + (originY || 0) + 'px;';
        }

        // transform order is relevant
        // 0. perspective
        if (isDefined(perspective)) {
            transforms += 'perspective(' + perspective + 'px) ';
        }

        // 1. translate
        if (isDefined(translateX) || isDefined(translateY)) {
            transforms +=
                'translate3d(' + (translateX || 0) + 'px, ' + (translateY || 0) + 'px, 0) ';
        }

        // 2. scale
        if (isDefined(scaleX) || isDefined(scaleY)) {
            transforms +=
                'scale3d(' +
                (isDefined(scaleX) ? scaleX : 1) +
                ', ' +
                (isDefined(scaleY) ? scaleY : 1) +
                ', 1) ';
        }

        // 3. rotate
        if (isDefined(rotateZ)) {
            transforms += 'rotateZ(' + rotateZ + 'rad) ';
        }

        if (isDefined(rotateX)) {
            transforms += 'rotateX(' + rotateX + 'rad) ';
        }

        if (isDefined(rotateY)) {
            transforms += 'rotateY(' + rotateY + 'rad) ';
        }

        // add transforms
        if (transforms.length) {
            styles += 'transform:' + transforms + ';';
        }

        // add opacity
        if (isDefined(opacity)) {
            styles += 'opacity:' + opacity + ';';

            // if we reach zero, we make the element inaccessible
            if (opacity === 0) {
                styles += 'visibility:hidden;';
            }

            // if we're below 100% opacity this element can't be clicked
            if (opacity < 1) {
                styles += 'pointer-events:none;';
            }
        }

        // add height
        if (isDefined(height)) {
            styles += 'height:' + height + 'px;';
        }

        // add width
        if (isDefined(width)) {
            styles += 'width:' + width + 'px;';
        }

        // apply styles
        var elementCurrentStyle = element.elementCurrentStyle || '';

        // if new styles does not match current styles, lets update!
        if (styles.length !== elementCurrentStyle.length || styles !== elementCurrentStyle) {
            element.style.cssText = styles;
            // store current styles so we can compare them to new styles later on
            // _not_ getting the style value is faster
            element.elementCurrentStyle = styles;
        }
    };

    var Mixins = {
        styles: styles,
        listeners: listeners,
        animations: animations,
        apis: apis,
    };

    var updateRect = function updateRect() {
        var rect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        if (!element.layoutCalculated) {
            rect.paddingTop = parseInt(style.paddingTop, 10) || 0;
            rect.marginTop = parseInt(style.marginTop, 10) || 0;
            rect.marginRight = parseInt(style.marginRight, 10) || 0;
            rect.marginBottom = parseInt(style.marginBottom, 10) || 0;
            rect.marginLeft = parseInt(style.marginLeft, 10) || 0;
            element.layoutCalculated = true;
        }

        rect.left = element.offsetLeft || 0;
        rect.top = element.offsetTop || 0;
        rect.width = element.offsetWidth || 0;
        rect.height = element.offsetHeight || 0;

        rect.right = rect.left + rect.width;
        rect.bottom = rect.top + rect.height;

        rect.scrollTop = element.scrollTop;

        rect.hidden = element.offsetParent === null;

        return rect;
    };

    var createView =
        // default view definition
        function createView() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref$tag = _ref.tag,
                tag = _ref$tag === void 0 ? 'div' : _ref$tag,
                _ref$name = _ref.name,
                name = _ref$name === void 0 ? null : _ref$name,
                _ref$attributes = _ref.attributes,
                attributes = _ref$attributes === void 0 ? {} : _ref$attributes,
                _ref$read = _ref.read,
                read = _ref$read === void 0 ? function() {} : _ref$read,
                _ref$write = _ref.write,
                write = _ref$write === void 0 ? function() {} : _ref$write,
                _ref$create = _ref.create,
                create = _ref$create === void 0 ? function() {} : _ref$create,
                _ref$destroy = _ref.destroy,
                destroy = _ref$destroy === void 0 ? function() {} : _ref$destroy,
                _ref$filterFrameActio = _ref.filterFrameActionsForChild,
                filterFrameActionsForChild =
                    _ref$filterFrameActio === void 0
                        ? function(child, actions) {
                              return actions;
                          }
                        : _ref$filterFrameActio,
                _ref$didCreateView = _ref.didCreateView,
                didCreateView = _ref$didCreateView === void 0 ? function() {} : _ref$didCreateView,
                _ref$didWriteView = _ref.didWriteView,
                didWriteView = _ref$didWriteView === void 0 ? function() {} : _ref$didWriteView,
                _ref$ignoreRect = _ref.ignoreRect,
                ignoreRect = _ref$ignoreRect === void 0 ? false : _ref$ignoreRect,
                _ref$ignoreRectUpdate = _ref.ignoreRectUpdate,
                ignoreRectUpdate = _ref$ignoreRectUpdate === void 0 ? false : _ref$ignoreRectUpdate,
                _ref$mixins = _ref.mixins,
                mixins = _ref$mixins === void 0 ? [] : _ref$mixins;
            return function(
                // each view requires reference to store
                store
            ) {
                var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                // root element should not be changed
                var element = createElement(tag, 'filepond--' + name, attributes);

                // style reference should also not be changed
                var style = window.getComputedStyle(element, null);

                // element rectangle
                var rect = updateRect();
                var frameRect = null;

                // rest state
                var isResting = false;

                // pretty self explanatory
                var childViews = [];

                // loaded mixins
                var activeMixins = [];

                // references to created children
                var ref = {};

                // state used for each instance
                var state = {};

                // list of writers that will be called to update this view
                var writers = [
                    write, // default writer
                ];

                var readers = [
                    read, // default reader
                ];

                var destroyers = [
                    destroy, // default destroy
                ];

                // core view methods
                var getElement = function getElement() {
                    return element;
                };
                var getChildViews = function getChildViews() {
                    return childViews.concat();
                };
                var getReference = function getReference() {
                    return ref;
                };
                var createChildView = function createChildView(store) {
                    return function(view, props) {
                        return view(store, props);
                    };
                };
                var getRect = function getRect() {
                    if (frameRect) {
                        return frameRect;
                    }
                    frameRect = getViewRect(rect, childViews, [0, 0], [1, 1]);
                    return frameRect;
                };
                var getStyle = function getStyle() {
                    return style;
                };

                /**
                 * Read data from DOM
                 * @private
                 */
                var _read = function _read() {
                    frameRect = null;

                    // read child views
                    childViews.forEach(function(child) {
                        return child._read();
                    });

                    var shouldUpdate = !(ignoreRectUpdate && rect.width && rect.height);
                    if (shouldUpdate) {
                        updateRect(rect, element, style);
                    }

                    // readers
                    var api = { root: internalAPI, props: props, rect: rect };
                    readers.forEach(function(reader) {
                        return reader(api);
                    });
                };

                /**
                 * Write data to DOM
                 * @private
                 */
                var _write = function _write(ts, frameActions, shouldOptimize) {
                    // if no actions, we assume that the view is resting
                    var resting = frameActions.length === 0;

                    // writers
                    writers.forEach(function(writer) {
                        var writerResting = writer({
                            props: props,
                            root: internalAPI,
                            actions: frameActions,
                            timestamp: ts,
                            shouldOptimize: shouldOptimize,
                        });

                        if (writerResting === false) {
                            resting = false;
                        }
                    });

                    // run mixins
                    activeMixins.forEach(function(mixin) {
                        // if one of the mixins is still busy after write operation, we are not resting
                        var mixinResting = mixin.write(ts);
                        if (mixinResting === false) {
                            resting = false;
                        }
                    });

                    // updates child views that are currently attached to the DOM
                    childViews
                        .filter(function(child) {
                            return !!child.element.parentNode;
                        })
                        .forEach(function(child) {
                            // if a child view is not resting, we are not resting
                            var childResting = child._write(
                                ts,
                                filterFrameActionsForChild(child, frameActions),
                                shouldOptimize
                            );

                            if (!childResting) {
                                resting = false;
                            }
                        });

                    // append new elements to DOM and update those
                    childViews
                        //.filter(child => !child.element.parentNode)
                        .forEach(function(child, index) {
                            // skip
                            if (child.element.parentNode) {
                                return;
                            }

                            // append to DOM
                            internalAPI.appendChild(child.element, index);

                            // call read (need to know the size of these elements)
                            child._read();

                            // re-call write
                            child._write(
                                ts,
                                filterFrameActionsForChild(child, frameActions),
                                shouldOptimize
                            );

                            // we just added somthing to the dom, no rest
                            resting = false;
                        });

                    // update resting state
                    isResting = resting;

                    didWriteView({
                        props: props,
                        root: internalAPI,
                        actions: frameActions,
                        timestamp: ts,
                    });

                    // let parent know if we are resting
                    return resting;
                };

                var _destroy = function _destroy() {
                    activeMixins.forEach(function(mixin) {
                        return mixin.destroy();
                    });
                    destroyers.forEach(function(destroyer) {
                        destroyer({ root: internalAPI, props: props });
                    });
                    childViews.forEach(function(child) {
                        return child._destroy();
                    });
                };

                // sharedAPI
                var sharedAPIDefinition = {
                    element: {
                        get: getElement,
                    },

                    style: {
                        get: getStyle,
                    },

                    childViews: {
                        get: getChildViews,
                    },
                };

                // private API definition
                var internalAPIDefinition = Object.assign({}, sharedAPIDefinition, {
                    rect: {
                        get: getRect,
                    },

                    // access to custom children references
                    ref: {
                        get: getReference,
                    },

                    // dom modifiers
                    is: function is(needle) {
                        return name === needle;
                    },
                    appendChild: appendChild(element),
                    createChildView: createChildView(store),
                    linkView: function linkView(view) {
                        childViews.push(view);
                        return view;
                    },
                    unlinkView: function unlinkView(view) {
                        childViews.splice(childViews.indexOf(view), 1);
                    },
                    appendChildView: appendChildView(element, childViews),
                    removeChildView: removeChildView(element, childViews),
                    registerWriter: function registerWriter(writer) {
                        return writers.push(writer);
                    },
                    registerReader: function registerReader(reader) {
                        return readers.push(reader);
                    },
                    registerDestroyer: function registerDestroyer(destroyer) {
                        return destroyers.push(destroyer);
                    },
                    invalidateLayout: function invalidateLayout() {
                        return (element.layoutCalculated = false);
                    },

                    // access to data store
                    dispatch: store.dispatch,
                    query: store.query,
                });

                // public view API methods
                var externalAPIDefinition = {
                    element: {
                        get: getElement,
                    },

                    childViews: {
                        get: getChildViews,
                    },

                    rect: {
                        get: getRect,
                    },

                    resting: {
                        get: function get() {
                            return isResting;
                        },
                    },

                    isRectIgnored: function isRectIgnored() {
                        return ignoreRect;
                    },
                    _read: _read,
                    _write: _write,
                    _destroy: _destroy,
                };

                // mixin API methods
                var mixinAPIDefinition = Object.assign({}, sharedAPIDefinition, {
                    rect: {
                        get: function get() {
                            return rect;
                        },
                    },
                });

                // add mixin functionality
                Object.keys(mixins)
                    .sort(function(a, b) {
                        // move styles to the back of the mixin list (so adjustments of other mixins are applied to the props correctly)
                        if (a === 'styles') {
                            return 1;
                        } else if (b === 'styles') {
                            return -1;
                        }
                        return 0;
                    })
                    .forEach(function(key) {
                        var mixinAPI = Mixins[key]({
                            mixinConfig: mixins[key],
                            viewProps: props,
                            viewState: state,
                            viewInternalAPI: internalAPIDefinition,
                            viewExternalAPI: externalAPIDefinition,
                            view: createObject(mixinAPIDefinition),
                        });

                        if (mixinAPI) {
                            activeMixins.push(mixinAPI);
                        }
                    });

                // construct private api
                var internalAPI = createObject(internalAPIDefinition);

                // create the view
                create({
                    root: internalAPI,
                    props: props,
                });

                // append created child views to root node
                var childCount = getChildCount(element); // need to know the current child count so appending happens in correct order
                childViews.forEach(function(child, index) {
                    internalAPI.appendChild(child.element, childCount + index);
                });

                // call did create
                didCreateView(internalAPI);

                // expose public api
                return createObject(externalAPIDefinition);
            };
        };

    var createPainter = function createPainter(read, write) {
        var fps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 60;

        var name = '__framePainter';

        // set global painter
        if (window[name]) {
            window[name].readers.push(read);
            window[name].writers.push(write);
            return;
        }

        window[name] = {
            readers: [read],
            writers: [write],
        };

        var painter = window[name];

        var interval = 1000 / fps;
        var last = null;
        var id = null;
        var requestTick = null;
        var cancelTick = null;

        var setTimerType = function setTimerType() {
            if (document.hidden) {
                requestTick = function requestTick() {
                    return window.setTimeout(function() {
                        return tick(performance.now());
                    }, interval);
                };
                cancelTick = function cancelTick() {
                    return window.clearTimeout(id);
                };
            } else {
                requestTick = function requestTick() {
                    return window.requestAnimationFrame(tick);
                };
                cancelTick = function cancelTick() {
                    return window.cancelAnimationFrame(id);
                };
            }
        };

        document.addEventListener('visibilitychange', function() {
            if (cancelTick) cancelTick();
            setTimerType();
            tick(performance.now());
        });

        var tick = function tick(ts) {
            // queue next tick
            id = requestTick(tick);

            // limit fps
            if (!last) {
                last = ts;
            }

            var delta = ts - last;

            if (delta <= interval) {
                // skip frame
                return;
            }

            // align next frame
            last = ts - (delta % interval);

            // update view
            painter.readers.forEach(function(read) {
                return read();
            });
            painter.writers.forEach(function(write) {
                return write(ts);
            });
        };

        setTimerType();
        tick(performance.now());

        return {
            pause: function pause() {
                cancelTick(id);
            },
        };
    };

    var createRoute = function createRoute(routes, fn) {
        return function(_ref) {
            var root = _ref.root,
                props = _ref.props,
                _ref$actions = _ref.actions,
                actions = _ref$actions === void 0 ? [] : _ref$actions,
                timestamp = _ref.timestamp,
                shouldOptimize = _ref.shouldOptimize;
            actions
                .filter(function(action) {
                    return routes[action.type];
                })
                .forEach(function(action) {
                    return routes[action.type]({
                        root: root,
                        props: props,
                        action: action.data,
                        timestamp: timestamp,
                        shouldOptimize: shouldOptimize,
                    });
                });

            if (fn) {
                fn({
                    root: root,
                    props: props,
                    actions: actions,
                    timestamp: timestamp,
                    shouldOptimize: shouldOptimize,
                });
            }
        };
    };

    var insertBefore = function insertBefore(newNode, referenceNode) {
        return referenceNode.parentNode.insertBefore(newNode, referenceNode);
    };

    var insertAfter = function insertAfter(newNode, referenceNode) {
        return referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    };

    var isArray = function isArray(value) {
        return Array.isArray(value);
    };

    var isEmpty = function isEmpty(value) {
        return value == null;
    };

    var trim = function trim(str) {
        return str.trim();
    };

    var toString = function toString(value) {
        return '' + value;
    };

    var toArray = function toArray(value) {
        var splitter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';
        if (isEmpty(value)) {
            return [];
        }
        if (isArray(value)) {
            return value;
        }
        return toString(value)
            .split(splitter)
            .map(trim)
            .filter(function(str) {
                return str.length;
            });
    };

    var isBoolean = function isBoolean(value) {
        return typeof value === 'boolean';
    };

    var toBoolean = function toBoolean(value) {
        return isBoolean(value) ? value : value === 'true';
    };

    var isString = function isString(value) {
        return typeof value === 'string';
    };

    var toNumber = function toNumber(value) {
        return isNumber(value)
            ? value
            : isString(value)
            ? toString(value).replace(/[a-z]+/gi, '')
            : 0;
    };

    var toInt = function toInt(value) {
        return parseInt(toNumber(value), 10);
    };

    var toFloat = function toFloat(value) {
        return parseFloat(toNumber(value));
    };

    var isInt = function isInt(value) {
        return isNumber(value) && isFinite(value) && Math.floor(value) === value;
    };

    var toBytes = function toBytes(value) {
        var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
        // is in bytes
        if (isInt(value)) {
            return value;
        }

        // is natural file size
        var naturalFileSize = toString(value).trim();

        // if is value in megabytes
        if (/MB$/i.test(naturalFileSize)) {
            naturalFileSize = naturalFileSize.replace(/MB$i/, '').trim();
            return toInt(naturalFileSize) * base * base;
        }

        // if is value in kilobytes
        if (/KB/i.test(naturalFileSize)) {
            naturalFileSize = naturalFileSize.replace(/KB$i/, '').trim();
            return toInt(naturalFileSize) * base;
        }

        return toInt(naturalFileSize);
    };

    var isFunction = function isFunction(value) {
        return typeof value === 'function';
    };

    var toFunctionReference = function toFunctionReference(string) {
        var ref = self;
        var levels = string.split('.');
        var level = null;
        while ((level = levels.shift())) {
            ref = ref[level];
            if (!ref) {
                return null;
            }
        }
        return ref;
    };

    var methods = {
        process: 'POST',
        patch: 'PATCH',
        revert: 'DELETE',
        fetch: 'GET',
        restore: 'GET',
        load: 'GET',
    };

    var createServerAPI = function createServerAPI(outline) {
        var api = {};

        api.url = isString(outline) ? outline : outline.url || '';
        api.timeout = outline.timeout ? parseInt(outline.timeout, 10) : 0;
        api.headers = outline.headers ? outline.headers : {};

        forin(methods, function(key) {
            api[key] = createAction(key, outline[key], methods[key], api.timeout, api.headers);
        });

        // remove process if no url or process on outline
        api.process = outline.process || isString(outline) || outline.url ? api.process : null;

        // special treatment for remove
        api.remove = outline.remove || null;

        // remove generic headers from api object
        delete api.headers;

        return api;
    };

    var createAction = function createAction(name, outline, method, timeout, headers) {
        // is explicitely set to null so disable
        if (outline === null) {
            return null;
        }

        // if is custom function, done! Dev handles everything.
        if (typeof outline === 'function') {
            return outline;
        }

        // build action object
        var action = {
            url: method === 'GET' || method === 'PATCH' ? '?' + name + '=' : '',
            method: method,
            headers: headers,
            withCredentials: false,
            timeout: timeout,
            onload: null,
            ondata: null,
            onerror: null,
        };

        // is a single url
        if (isString(outline)) {
            action.url = outline;
            return action;
        }

        // overwrite
        Object.assign(action, outline);

        // see if should reformat headers;
        if (isString(action.headers)) {
            var parts = action.headers.split(/:(.+)/);
            action.headers = {
                header: parts[0],
                value: parts[1],
            };
        }

        // if is bool withCredentials
        action.withCredentials = toBoolean(action.withCredentials);

        return action;
    };

    var toServerAPI = function toServerAPI(value) {
        return createServerAPI(value);
    };

    var isNull = function isNull(value) {
        return value === null;
    };

    var isObject = function isObject(value) {
        return typeof value === 'object' && value !== null;
    };

    var isAPI = function isAPI(value) {
        return (
            isObject(value) &&
            isString(value.url) &&
            isObject(value.process) &&
            isObject(value.revert) &&
            isObject(value.restore) &&
            isObject(value.fetch)
        );
    };

    var getType = function getType(value) {
        if (isArray(value)) {
            return 'array';
        }

        if (isNull(value)) {
            return 'null';
        }

        if (isInt(value)) {
            return 'int';
        }

        if (/^[0-9]+ ?(?:GB|MB|KB)$/gi.test(value)) {
            return 'bytes';
        }

        if (isAPI(value)) {
            return 'api';
        }

        return typeof value;
    };

    var replaceSingleQuotes = function replaceSingleQuotes(str) {
        return str
            .replace(/{\s*'/g, '{"')
            .replace(/'\s*}/g, '"}')
            .replace(/'\s*:/g, '":')
            .replace(/:\s*'/g, ':"')
            .replace(/,\s*'/g, ',"')
            .replace(/'\s*,/g, '",');
    };

    var conversionTable = {
        array: toArray,
        boolean: toBoolean,
        int: function int(value) {
            return getType(value) === 'bytes' ? toBytes(value) : toInt(value);
        },
        number: toFloat,
        float: toFloat,
        bytes: toBytes,
        string: function string(value) {
            return isFunction(value) ? value : toString(value);
        },
        function: function _function(value) {
            return toFunctionReference(value);
        },
        serverapi: toServerAPI,
        object: function object(value) {
            try {
                return JSON.parse(replaceSingleQuotes(value));
            } catch (e) {
                return null;
            }
        },
    };

    var convertTo = function convertTo(value, type) {
        return conversionTable[type](value);
    };

    var getValueByType = function getValueByType(newValue, defaultValue, valueType) {
        // can always assign default value
        if (newValue === defaultValue) {
            return newValue;
        }

        // get the type of the new value
        var newValueType = getType(newValue);

        // is valid type?
        if (newValueType !== valueType) {
            // is string input, let's attempt to convert
            var convertedValue = convertTo(newValue, valueType);

            // what is the type now
            newValueType = getType(convertedValue);

            // no valid conversions found
            if (convertedValue === null) {
                throw 'Trying to assign value with incorrect type to "' +
                    option +
                    '", allowed type: "' +
                    valueType +
                    '"';
            } else {
                newValue = convertedValue;
            }
        }

        // assign new value
        return newValue;
    };

    var createOption = function createOption(defaultValue, valueType) {
        var currentValue = defaultValue;
        return {
            enumerable: true,
            get: function get() {
                return currentValue;
            },
            set: function set(newValue) {
                currentValue = getValueByType(newValue, defaultValue, valueType);
            },
        };
    };

    var createOptions = function createOptions(options) {
        var obj = {};
        forin(options, function(prop) {
            var optionDefinition = options[prop];
            obj[prop] = createOption(optionDefinition[0], optionDefinition[1]);
        });
        return createObject(obj);
    };

    var createInitialState = function createInitialState(options) {
        return {
            // model
            items: [],

            // timeout used for calling update items
            listUpdateTimeout: null,

            // timeout used for stacking metadata updates
            itemUpdateTimeout: null,

            // queue of items waiting to be processed
            processingQueue: [],

            // options
            options: createOptions(options),
        };
    };

    var fromCamels = function fromCamels(string) {
        var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
        return string
            .split(/(?=[A-Z])/)
            .map(function(part) {
                return part.toLowerCase();
            })
            .join(separator);
    };

    var createOptionAPI = function createOptionAPI(store, options) {
        var obj = {};
        forin(options, function(key) {
            obj[key] = {
                get: function get() {
                    return store.getState().options[key];
                },
                set: function set(value) {
                    store.dispatch('SET_' + fromCamels(key, '_').toUpperCase(), {
                        value: value,
                    });
                },
            };
        });
        return obj;
    };

    var createOptionActions = function createOptionActions(options) {
        return function(dispatch, query, state) {
            var obj = {};
            forin(options, function(key) {
                var name = fromCamels(key, '_').toUpperCase();

                obj['SET_' + name] = function(action) {
                    try {
                        state.options[key] = action.value;
                    } catch (e) {} // nope, failed

                    // we successfully set the value of this option
                    dispatch('DID_SET_' + name, { value: state.options[key] });
                };
            });
            return obj;
        };
    };

    var createOptionQueries = function createOptionQueries(options) {
        return function(state) {
            var obj = {};
            forin(options, function(key) {
                obj['GET_' + fromCamels(key, '_').toUpperCase()] = function(action) {
                    return state.options[key];
                };
            });
            return obj;
        };
    };

    var InteractionMethod = {
        API: 1,
        DROP: 2,
        BROWSE: 3,
        PASTE: 4,
        NONE: 5,
    };

    var getUniqueId = function getUniqueId() {
        return Math.random()
            .toString(36)
            .substring(2, 11);
    };

    function _typeof(obj) {
        if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
            _typeof = function(obj) {
                return typeof obj;
            };
        } else {
            _typeof = function(obj) {
                return obj &&
                    typeof Symbol === 'function' &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj;
            };
        }

        return _typeof(obj);
    }

    var REACT_ELEMENT_TYPE;

    function _jsx(type, props, key, children) {
        if (!REACT_ELEMENT_TYPE) {
            REACT_ELEMENT_TYPE =
                (typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element')) ||
                0xeac7;
        }

        var defaultProps = type && type.defaultProps;
        var childrenLength = arguments.length - 3;

        if (!props && childrenLength !== 0) {
            props = {
                children: void 0,
            };
        }

        if (props && defaultProps) {
            for (var propName in defaultProps) {
                if (props[propName] === void 0) {
                    props[propName] = defaultProps[propName];
                }
            }
        } else if (!props) {
            props = defaultProps || {};
        }

        if (childrenLength === 1) {
            props.children = children;
        } else if (childrenLength > 1) {
            var childArray = new Array(childrenLength);

            for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 3];
            }

            props.children = childArray;
        }

        return {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key === undefined ? null : '' + key,
            ref: null,
            props: props,
            _owner: null,
        };
    }

    function _asyncIterator(iterable) {
        var method;

        if (typeof Symbol !== 'undefined') {
            if (Symbol.asyncIterator) {
                method = iterable[Symbol.asyncIterator];
                if (method != null) return method.call(iterable);
            }

            if (Symbol.iterator) {
                method = iterable[Symbol.iterator];
                if (method != null) return method.call(iterable);
            }
        }

        throw new TypeError('Object is not async iterable');
    }

    function _AwaitValue(value) {
        this.wrapped = value;
    }

    function _AsyncGenerator(gen) {
        var front, back;

        function send(key, arg) {
            return new Promise(function(resolve, reject) {
                var request = {
                    key: key,
                    arg: arg,
                    resolve: resolve,
                    reject: reject,
                    next: null,
                };

                if (back) {
                    back = back.next = request;
                } else {
                    front = back = request;
                    resume(key, arg);
                }
            });
        }

        function resume(key, arg) {
            try {
                var result = gen[key](arg);
                var value = result.value;
                var wrappedAwait = value instanceof _AwaitValue;
                Promise.resolve(wrappedAwait ? value.wrapped : value).then(
                    function(arg) {
                        if (wrappedAwait) {
                            resume('next', arg);
                            return;
                        }

                        settle(result.done ? 'return' : 'normal', arg);
                    },
                    function(err) {
                        resume('throw', err);
                    }
                );
            } catch (err) {
                settle('throw', err);
            }
        }

        function settle(type, value) {
            switch (type) {
                case 'return':
                    front.resolve({
                        value: value,
                        done: true,
                    });
                    break;

                case 'throw':
                    front.reject(value);
                    break;

                default:
                    front.resolve({
                        value: value,
                        done: false,
                    });
                    break;
            }

            front = front.next;

            if (front) {
                resume(front.key, front.arg);
            } else {
                back = null;
            }
        }

        this._invoke = send;

        if (typeof gen.return !== 'function') {
            this.return = undefined;
        }
    }

    if (typeof Symbol === 'function' && Symbol.asyncIterator) {
        _AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
            return this;
        };
    }

    _AsyncGenerator.prototype.next = function(arg) {
        return this._invoke('next', arg);
    };

    _AsyncGenerator.prototype.throw = function(arg) {
        return this._invoke('throw', arg);
    };

    _AsyncGenerator.prototype.return = function(arg) {
        return this._invoke('return', arg);
    };

    function _wrapAsyncGenerator(fn) {
        return function() {
            return new _AsyncGenerator(fn.apply(this, arguments));
        };
    }

    function _awaitAsyncGenerator(value) {
        return new _AwaitValue(value);
    }

    function _asyncGeneratorDelegate(inner, awaitWrap) {
        var iter = {},
            waiting = false;

        function pump(key, value) {
            waiting = true;
            value = new Promise(function(resolve) {
                resolve(inner[key](value));
            });
            return {
                done: false,
                value: awaitWrap(value),
            };
        }

        if (typeof Symbol === 'function' && Symbol.iterator) {
            iter[Symbol.iterator] = function() {
                return this;
            };
        }

        iter.next = function(value) {
            if (waiting) {
                waiting = false;
                return value;
            }

            return pump('next', value);
        };

        if (typeof inner.throw === 'function') {
            iter.throw = function(value) {
                if (waiting) {
                    waiting = false;
                    throw value;
                }

                return pump('throw', value);
            };
        }

        if (typeof inner.return === 'function') {
            iter.return = function(value) {
                return pump('return', value);
            };
        }

        return iter;
    }

    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
            var info = gen[key](arg);
            var value = info.value;
        } catch (error) {
            reject(error);
            return;
        }

        if (info.done) {
            resolve(value);
        } else {
            Promise.resolve(value).then(_next, _throw);
        }
    }

    function _asyncToGenerator(fn) {
        return function() {
            var self = this,
                args = arguments;
            return new Promise(function(resolve, reject) {
                var gen = fn.apply(self, args);

                function _next(value) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
                }

                function _throw(err) {
                    asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
                }

                _next(undefined);
            });
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }

    function _defineEnumerableProperties(obj, descs) {
        for (var key in descs) {
            var desc = descs[key];
            desc.configurable = desc.enumerable = true;
            if ('value' in desc) desc.writable = true;
            Object.defineProperty(obj, key, desc);
        }

        if (Object.getOwnPropertySymbols) {
            var objectSymbols = Object.getOwnPropertySymbols(descs);

            for (var i = 0; i < objectSymbols.length; i++) {
                var sym = objectSymbols[i];
                var desc = descs[sym];
                desc.configurable = desc.enumerable = true;
                if ('value' in desc) desc.writable = true;
                Object.defineProperty(obj, sym, desc);
            }
        }

        return obj;
    }

    function _defaults(obj, defaults) {
        var keys = Object.getOwnPropertyNames(defaults);

        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = Object.getOwnPropertyDescriptor(defaults, key);

            if (value && value.configurable && obj[key] === undefined) {
                Object.defineProperty(obj, key, value);
            }
        }

        return obj;
    }

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true,
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    function _extends() {
        _extends =
            Object.assign ||
            function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];

                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }

                return target;
            };

        return _extends.apply(this, arguments);
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            var ownKeys = Object.keys(source);

            if (typeof Object.getOwnPropertySymbols === 'function') {
                ownKeys = ownKeys.concat(
                    Object.getOwnPropertySymbols(source).filter(function(sym) {
                        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                    })
                );
            }

            ownKeys.forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        }

        return target;
    }

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);

        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
                symbols = symbols.filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                });
            keys.push.apply(keys, symbols);
        }

        return keys;
    }

    function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};

            if (i % 2) {
                ownKeys(source, true).forEach(function(key) {
                    _defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(source).forEach(function(key) {
                    Object.defineProperty(
                        target,
                        key,
                        Object.getOwnPropertyDescriptor(source, key)
                    );
                });
            }
        }

        return target;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function');
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: true,
                configurable: true,
            },
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }

    function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                  return o.__proto__ || Object.getPrototypeOf(o);
              };
        return _getPrototypeOf(o);
    }

    function _setPrototypeOf(o, p) {
        _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
            };

        return _setPrototypeOf(o, p);
    }

    function isNativeReflectConstruct() {
        if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === 'function') return true;

        try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
            return true;
        } catch (e) {
            return false;
        }
    }

    function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
            _construct = Reflect.construct;
        } else {
            _construct = function _construct(Parent, args, Class) {
                var a = [null];
                a.push.apply(a, args);
                var Constructor = Function.bind.apply(Parent, a);
                var instance = new Constructor();
                if (Class) _setPrototypeOf(instance, Class.prototype);
                return instance;
            };
        }

        return _construct.apply(null, arguments);
    }

    function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf('[native code]') !== -1;
    }

    function _wrapNativeSuper(Class) {
        var _cache = typeof Map === 'function' ? new Map() : undefined;

        _wrapNativeSuper = function _wrapNativeSuper(Class) {
            if (Class === null || !_isNativeFunction(Class)) return Class;

            if (typeof Class !== 'function') {
                throw new TypeError('Super expression must either be null or a function');
            }

            if (typeof _cache !== 'undefined') {
                if (_cache.has(Class)) return _cache.get(Class);

                _cache.set(Class, Wrapper);
            }

            function Wrapper() {
                return _construct(Class, arguments, _getPrototypeOf(this).constructor);
            }

            Wrapper.prototype = Object.create(Class.prototype, {
                constructor: {
                    value: Wrapper,
                    enumerable: false,
                    writable: true,
                    configurable: true,
                },
            });
            return _setPrototypeOf(Wrapper, Class);
        };

        return _wrapNativeSuper(Class);
    }

    function _instanceof(left, right) {
        if (right != null && typeof Symbol !== 'undefined' && right[Symbol.hasInstance]) {
            return !!right[Symbol.hasInstance](left);
        } else {
            return left instanceof right;
        }
    }

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule
            ? obj
            : {
                  default: obj,
              };
    }

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
            return obj;
        } else {
            var newObj = {};

            if (obj != null) {
                for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) {
                        var desc =
                            Object.defineProperty && Object.getOwnPropertyDescriptor
                                ? Object.getOwnPropertyDescriptor(obj, key)
                                : {};

                        if (desc.get || desc.set) {
                            Object.defineProperty(newObj, key, desc);
                        } else {
                            newObj[key] = obj[key];
                        }
                    }
                }
            }

            newObj.default = obj;
            return newObj;
        }
    }

    function _newArrowCheck(innerThis, boundThis) {
        if (innerThis !== boundThis) {
            throw new TypeError('Cannot instantiate an arrow function');
        }
    }

    function _objectDestructuringEmpty(obj) {
        if (obj == null) throw new TypeError('Cannot destructure undefined');
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;

        for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
        }

        return target;
    }

    function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};

        var target = _objectWithoutPropertiesLoose(source, excluded);

        var key, i;

        if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

            for (i = 0; i < sourceSymbolKeys.length; i++) {
                key = sourceSymbolKeys[i];
                if (excluded.indexOf(key) >= 0) continue;
                if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
                target[key] = source[key];
            }
        }

        return target;
    }

    function _assertThisInitialized(self) {
        if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
    }

    function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === 'object' || typeof call === 'function')) {
            return call;
        }

        return _assertThisInitialized(self);
    }

    function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
            object = _getPrototypeOf(object);
            if (object === null) break;
        }

        return object;
    }

    function _get(target, property, receiver) {
        if (typeof Reflect !== 'undefined' && Reflect.get) {
            _get = Reflect.get;
        } else {
            _get = function _get(target, property, receiver) {
                var base = _superPropBase(target, property);

                if (!base) return;
                var desc = Object.getOwnPropertyDescriptor(base, property);

                if (desc.get) {
                    return desc.get.call(receiver);
                }

                return desc.value;
            };
        }

        return _get(target, property, receiver || target);
    }

    function set(target, property, value, receiver) {
        if (typeof Reflect !== 'undefined' && Reflect.set) {
            set = Reflect.set;
        } else {
            set = function set(target, property, value, receiver) {
                var base = _superPropBase(target, property);

                var desc;

                if (base) {
                    desc = Object.getOwnPropertyDescriptor(base, property);

                    if (desc.set) {
                        desc.set.call(receiver, value);
                        return true;
                    } else if (!desc.writable) {
                        return false;
                    }
                }

                desc = Object.getOwnPropertyDescriptor(receiver, property);

                if (desc) {
                    if (!desc.writable) {
                        return false;
                    }

                    desc.value = value;
                    Object.defineProperty(receiver, property, desc);
                } else {
                    _defineProperty(receiver, property, value);
                }

                return true;
            };
        }

        return set(target, property, value, receiver);
    }

    function _set(target, property, value, receiver, isStrict) {
        var s = set(target, property, value, receiver || target);

        if (!s && isStrict) {
            throw new Error('failed to set property');
        }

        return value;
    }

    function _taggedTemplateLiteral(strings, raw) {
        if (!raw) {
            raw = strings.slice(0);
        }

        return Object.freeze(
            Object.defineProperties(strings, {
                raw: {
                    value: Object.freeze(raw),
                },
            })
        );
    }

    function _taggedTemplateLiteralLoose(strings, raw) {
        if (!raw) {
            raw = strings.slice(0);
        }

        strings.raw = raw;
        return strings;
    }

    function _temporalRef(val, name) {
        if (val === _temporalUndefined) {
            throw new ReferenceError(name + ' is not defined - temporal dead zone');
        } else {
            return val;
        }
    }

    function _readOnlyError(name) {
        throw new Error('"' + name + '" is read-only');
    }

    function _classNameTDZError(name) {
        throw new Error('Class "' + name + '" cannot be referenced in computed property keys.');
    }

    var _temporalUndefined = {};

    function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
    }

    function _slicedToArrayLoose(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimitLoose(arr, i) || _nonIterableRest();
    }

    function _toArray(arr) {
        return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest();
    }

    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }

    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

            return arr2;
        }
    }

    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
    }

    function _iterableToArray(iter) {
        if (
            Symbol.iterator in Object(iter) ||
            Object.prototype.toString.call(iter) === '[object Arguments]'
        )
            return Array.from(iter);
    }

    function _iterableToArrayLimit(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;

        try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);

                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally {
            try {
                if (!_n && _i['return'] != null) _i['return']();
            } finally {
                if (_d) throw _e;
            }
        }

        return _arr;
    }

    function _iterableToArrayLimitLoose(arr, i) {
        var _arr = [];

        for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done; ) {
            _arr.push(_step.value);

            if (i && _arr.length === i) break;
        }

        return _arr;
    }

    function _nonIterableSpread() {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
    }

    function _nonIterableRest() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
    }

    function _skipFirstGeneratorNext(fn) {
        return function() {
            var it = fn.apply(this, arguments);
            it.next();
            return it;
        };
    }

    function _toPrimitive(input, hint) {
        if (typeof input !== 'object' || input === null) return input;
        var prim = input[Symbol.toPrimitive];

        if (prim !== undefined) {
            var res = prim.call(input, hint || 'default');
            if (typeof res !== 'object') return res;
            throw new TypeError('@@toPrimitive must return a primitive value.');
        }

        return (hint === 'string' ? String : Number)(input);
    }

    function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, 'string');

        return typeof key === 'symbol' ? key : String(key);
    }

    function _initializerWarningHelper(descriptor, context) {
        throw new Error(
            'Decorating class property failed. Please ensure that ' +
                'proposal-class-properties is enabled and set to use loose mode. ' +
                'To use proposal-class-properties in spec mode with decorators, wait for ' +
                'the next major version of decorators in stage 2.'
        );
    }

    function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0,
        });
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function(key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators
            .slice()
            .reverse()
            .reduce(function(desc, decorator) {
                return decorator(target, property, desc) || desc;
            }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object.defineProperty(target, property, desc);
            desc = null;
        }

        return desc;
    }

    var id = 0;

    function _classPrivateFieldLooseKey(name) {
        return '__private_' + id++ + '_' + name;
    }

    function _classPrivateFieldLooseBase(receiver, privateKey) {
        if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
            throw new TypeError('attempted to use private field on non-instance');
        }

        return receiver;
    }

    function _classPrivateFieldGet(receiver, privateMap) {
        var descriptor = privateMap.get(receiver);

        if (!descriptor) {
            throw new TypeError('attempted to get private field on non-instance');
        }

        if (descriptor.get) {
            return descriptor.get.call(receiver);
        }

        return descriptor.value;
    }

    function _classPrivateFieldSet(receiver, privateMap, value) {
        var descriptor = privateMap.get(receiver);

        if (!descriptor) {
            throw new TypeError('attempted to set private field on non-instance');
        }

        if (descriptor.set) {
            descriptor.set.call(receiver, value);
        } else {
            if (!descriptor.writable) {
                throw new TypeError('attempted to set read only private field');
            }

            descriptor.value = value;
        }

        return value;
    }

    function _classPrivateFieldDestructureSet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError('attempted to set private field on non-instance');
        }

        var descriptor = privateMap.get(receiver);

        if (descriptor.set) {
            if (!('__destrObj' in descriptor)) {
                descriptor.__destrObj = {
                    set value(v) {
                        descriptor.set.call(receiver, v);
                    },
                };
            }

            return descriptor.__destrObj;
        } else {
            if (!descriptor.writable) {
                throw new TypeError('attempted to set read only private field');
            }

            return descriptor;
        }
    }

    function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
        if (receiver !== classConstructor) {
            throw new TypeError('Private static access of wrong provenance');
        }

        return descriptor.value;
    }

    function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
        if (receiver !== classConstructor) {
            throw new TypeError('Private static access of wrong provenance');
        }

        if (!descriptor.writable) {
            throw new TypeError('attempted to set read only private field');
        }

        descriptor.value = value;
        return value;
    }

    function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
        if (receiver !== classConstructor) {
            throw new TypeError('Private static access of wrong provenance');
        }

        return method;
    }

    function _classStaticPrivateMethodSet() {
        throw new TypeError('attempted to set read only static private field');
    }

    function _decorate(decorators, factory, superClass, mixins) {
        var api = _getDecoratorsApi();

        if (mixins) {
            for (var i = 0; i < mixins.length; i++) {
                api = mixins[i](api);
            }
        }

        var r = factory(function initialize(O) {
            api.initializeInstanceElements(O, decorated.elements);
        }, superClass);
        var decorated = api.decorateClass(
            _coalesceClassElements(r.d.map(_createElementDescriptor)),
            decorators
        );
        api.initializeClassElements(r.F, decorated.elements);
        return api.runClassFinishers(r.F, decorated.finishers);
    }

    function _getDecoratorsApi() {
        _getDecoratorsApi = function() {
            return api;
        };

        var api = {
            elementsDefinitionOrder: [['method'], ['field']],
            initializeInstanceElements: function(O, elements) {
                ['method', 'field'].forEach(function(kind) {
                    elements.forEach(function(element) {
                        if (element.kind === kind && element.placement === 'own') {
                            this.defineClassElement(O, element);
                        }
                    }, this);
                }, this);
            },
            initializeClassElements: function(F, elements) {
                var proto = F.prototype;
                ['method', 'field'].forEach(function(kind) {
                    elements.forEach(function(element) {
                        var placement = element.placement;

                        if (
                            element.kind === kind &&
                            (placement === 'static' || placement === 'prototype')
                        ) {
                            var receiver = placement === 'static' ? F : proto;
                            this.defineClassElement(receiver, element);
                        }
                    }, this);
                }, this);
            },
            defineClassElement: function(receiver, element) {
                var descriptor = element.descriptor;

                if (element.kind === 'field') {
                    var initializer = element.initializer;
                    descriptor = {
                        enumerable: descriptor.enumerable,
                        writable: descriptor.writable,
                        configurable: descriptor.configurable,
                        value: initializer === void 0 ? void 0 : initializer.call(receiver),
                    };
                }

                Object.defineProperty(receiver, element.key, descriptor);
            },
            decorateClass: function(elements, decorators) {
                var newElements = [];
                var finishers = [];
                var placements = {
                    static: [],
                    prototype: [],
                    own: [],
                };
                elements.forEach(function(element) {
                    this.addElementPlacement(element, placements);
                }, this);
                elements.forEach(function(element) {
                    if (!_hasDecorators(element)) return newElements.push(element);
                    var elementFinishersExtras = this.decorateElement(element, placements);
                    newElements.push(elementFinishersExtras.element);
                    newElements.push.apply(newElements, elementFinishersExtras.extras);
                    finishers.push.apply(finishers, elementFinishersExtras.finishers);
                }, this);

                if (!decorators) {
                    return {
                        elements: newElements,
                        finishers: finishers,
                    };
                }

                var result = this.decorateConstructor(newElements, decorators);
                finishers.push.apply(finishers, result.finishers);
                result.finishers = finishers;
                return result;
            },
            addElementPlacement: function(element, placements, silent) {
                var keys = placements[element.placement];

                if (!silent && keys.indexOf(element.key) !== -1) {
                    throw new TypeError('Duplicated element (' + element.key + ')');
                }

                keys.push(element.key);
            },
            decorateElement: function(element, placements) {
                var extras = [];
                var finishers = [];

                for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) {
                    var keys = placements[element.placement];
                    keys.splice(keys.indexOf(element.key), 1);
                    var elementObject = this.fromElementDescriptor(element);
                    var elementFinisherExtras = this.toElementFinisherExtras(
                        (0, decorators[i])(elementObject) || elementObject
                    );
                    element = elementFinisherExtras.element;
                    this.addElementPlacement(element, placements);

                    if (elementFinisherExtras.finisher) {
                        finishers.push(elementFinisherExtras.finisher);
                    }

                    var newExtras = elementFinisherExtras.extras;

                    if (newExtras) {
                        for (var j = 0; j < newExtras.length; j++) {
                            this.addElementPlacement(newExtras[j], placements);
                        }

                        extras.push.apply(extras, newExtras);
                    }
                }

                return {
                    element: element,
                    finishers: finishers,
                    extras: extras,
                };
            },
            decorateConstructor: function(elements, decorators) {
                var finishers = [];

                for (var i = decorators.length - 1; i >= 0; i--) {
                    var obj = this.fromClassDescriptor(elements);
                    var elementsAndFinisher = this.toClassDescriptor(
                        (0, decorators[i])(obj) || obj
                    );

                    if (elementsAndFinisher.finisher !== undefined) {
                        finishers.push(elementsAndFinisher.finisher);
                    }

                    if (elementsAndFinisher.elements !== undefined) {
                        elements = elementsAndFinisher.elements;

                        for (var j = 0; j < elements.length - 1; j++) {
                            for (var k = j + 1; k < elements.length; k++) {
                                if (
                                    elements[j].key === elements[k].key &&
                                    elements[j].placement === elements[k].placement
                                ) {
                                    throw new TypeError(
                                        'Duplicated element (' + elements[j].key + ')'
                                    );
                                }
                            }
                        }
                    }
                }

                return {
                    elements: elements,
                    finishers: finishers,
                };
            },
            fromElementDescriptor: function(element) {
                var obj = {
                    kind: element.kind,
                    key: element.key,
                    placement: element.placement,
                    descriptor: element.descriptor,
                };
                var desc = {
                    value: 'Descriptor',
                    configurable: true,
                };
                Object.defineProperty(obj, Symbol.toStringTag, desc);
                if (element.kind === 'field') obj.initializer = element.initializer;
                return obj;
            },
            toElementDescriptors: function(elementObjects) {
                if (elementObjects === undefined) return;
                return _toArray(elementObjects).map(function(elementObject) {
                    var element = this.toElementDescriptor(elementObject);
                    this.disallowProperty(elementObject, 'finisher', 'An element descriptor');
                    this.disallowProperty(elementObject, 'extras', 'An element descriptor');
                    return element;
                }, this);
            },
            toElementDescriptor: function(elementObject) {
                var kind = String(elementObject.kind);

                if (kind !== 'method' && kind !== 'field') {
                    throw new TypeError(
                        'An element descriptor\'s .kind property must be either "method" or' +
                            ' "field", but a decorator created an element descriptor with' +
                            ' .kind "' +
                            kind +
                            '"'
                    );
                }

                var key = _toPropertyKey(elementObject.key);

                var placement = String(elementObject.placement);

                if (placement !== 'static' && placement !== 'prototype' && placement !== 'own') {
                    throw new TypeError(
                        'An element descriptor\'s .placement property must be one of "static",' +
                            ' "prototype" or "own", but a decorator created an element descriptor' +
                            ' with .placement "' +
                            placement +
                            '"'
                    );
                }

                var descriptor = elementObject.descriptor;
                this.disallowProperty(elementObject, 'elements', 'An element descriptor');
                var element = {
                    kind: kind,
                    key: key,
                    placement: placement,
                    descriptor: Object.assign({}, descriptor),
                };

                if (kind !== 'field') {
                    this.disallowProperty(elementObject, 'initializer', 'A method descriptor');
                } else {
                    this.disallowProperty(
                        descriptor,
                        'get',
                        'The property descriptor of a field descriptor'
                    );
                    this.disallowProperty(
                        descriptor,
                        'set',
                        'The property descriptor of a field descriptor'
                    );
                    this.disallowProperty(
                        descriptor,
                        'value',
                        'The property descriptor of a field descriptor'
                    );
                    element.initializer = elementObject.initializer;
                }

                return element;
            },
            toElementFinisherExtras: function(elementObject) {
                var element = this.toElementDescriptor(elementObject);

                var finisher = _optionalCallableProperty(elementObject, 'finisher');

                var extras = this.toElementDescriptors(elementObject.extras);
                return {
                    element: element,
                    finisher: finisher,
                    extras: extras,
                };
            },
            fromClassDescriptor: function(elements) {
                var obj = {
                    kind: 'class',
                    elements: elements.map(this.fromElementDescriptor, this),
                };
                var desc = {
                    value: 'Descriptor',
                    configurable: true,
                };
                Object.defineProperty(obj, Symbol.toStringTag, desc);
                return obj;
            },
            toClassDescriptor: function(obj) {
                var kind = String(obj.kind);

                if (kind !== 'class') {
                    throw new TypeError(
                        'A class descriptor\'s .kind property must be "class", but a decorator' +
                            ' created a class descriptor with .kind "' +
                            kind +
                            '"'
                    );
                }

                this.disallowProperty(obj, 'key', 'A class descriptor');
                this.disallowProperty(obj, 'placement', 'A class descriptor');
                this.disallowProperty(obj, 'descriptor', 'A class descriptor');
                this.disallowProperty(obj, 'initializer', 'A class descriptor');
                this.disallowProperty(obj, 'extras', 'A class descriptor');

                var finisher = _optionalCallableProperty(obj, 'finisher');

                var elements = this.toElementDescriptors(obj.elements);
                return {
                    elements: elements,
                    finisher: finisher,
                };
            },
            runClassFinishers: function(constructor, finishers) {
                for (var i = 0; i < finishers.length; i++) {
                    var newConstructor = (0, finishers[i])(constructor);

                    if (newConstructor !== undefined) {
                        if (typeof newConstructor !== 'function') {
                            throw new TypeError('Finishers must return a constructor.');
                        }

                        constructor = newConstructor;
                    }
                }

                return constructor;
            },
            disallowProperty: function(obj, name, objectType) {
                if (obj[name] !== undefined) {
                    throw new TypeError(objectType + " can't have a ." + name + ' property.');
                }
            },
        };
        return api;
    }

    function _createElementDescriptor(def) {
        var key = _toPropertyKey(def.key);

        var descriptor;

        if (def.kind === 'method') {
            descriptor = {
                value: def.value,
                writable: true,
                configurable: true,
                enumerable: false,
            };
        } else if (def.kind === 'get') {
            descriptor = {
                get: def.value,
                configurable: true,
                enumerable: false,
            };
        } else if (def.kind === 'set') {
            descriptor = {
                set: def.value,
                configurable: true,
                enumerable: false,
            };
        } else if (def.kind === 'field') {
            descriptor = {
                configurable: true,
                writable: true,
                enumerable: true,
            };
        }

        var element = {
            kind: def.kind === 'field' ? 'field' : 'method',
            key: key,
            placement: def.static ? 'static' : def.kind === 'field' ? 'own' : 'prototype',
            descriptor: descriptor,
        };
        if (def.decorators) element.decorators = def.decorators;
        if (def.kind === 'field') element.initializer = def.value;
        return element;
    }

    function _coalesceGetterSetter(element, other) {
        if (element.descriptor.get !== undefined) {
            other.descriptor.get = element.descriptor.get;
        } else {
            other.descriptor.set = element.descriptor.set;
        }
    }

    function _coalesceClassElements(elements) {
        var newElements = [];

        var isSameElement = function(other) {
            return (
                other.kind === 'method' &&
                other.key === element.key &&
                other.placement === element.placement
            );
        };

        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var other;

            if (element.kind === 'method' && (other = newElements.find(isSameElement))) {
                if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) {
                    if (_hasDecorators(element) || _hasDecorators(other)) {
                        throw new ReferenceError(
                            'Duplicated methods (' + element.key + ") can't be decorated."
                        );
                    }

                    other.descriptor = element.descriptor;
                } else {
                    if (_hasDecorators(element)) {
                        if (_hasDecorators(other)) {
                            throw new ReferenceError(
                                "Decorators can't be placed on different accessors with for " +
                                    'the same property (' +
                                    element.key +
                                    ').'
                            );
                        }

                        other.decorators = element.decorators;
                    }

                    _coalesceGetterSetter(element, other);
                }
            } else {
                newElements.push(element);
            }
        }

        return newElements;
    }

    function _hasDecorators(element) {
        return element.decorators && element.decorators.length;
    }

    function _isDataDescriptor(desc) {
        return desc !== undefined && !(desc.value === undefined && desc.writable === undefined);
    }

    function _optionalCallableProperty(obj, name) {
        var value = obj[name];

        if (value !== undefined && typeof value !== 'function') {
            throw new TypeError("Expected '" + name + "' to be a function");
        }

        return value;
    }

    function _classPrivateMethodGet(receiver, privateSet, fn) {
        if (!privateSet.has(receiver)) {
            throw new TypeError('attempted to get private field on non-instance');
        }

        return fn;
    }

    function _classPrivateMethodSet() {
        throw new TypeError('attempted to reassign private method');
    }

    function _wrapRegExp(re, groups) {
        _wrapRegExp = function(re, groups) {
            return new BabelRegExp(re, groups);
        };

        var _RegExp = _wrapNativeSuper(RegExp);

        var _super = RegExp.prototype;

        var _groups = new WeakMap();

        function BabelRegExp(re, groups) {
            var _this = _RegExp.call(this, re);

            _groups.set(_this, groups);

            return _this;
        }

        _inherits(BabelRegExp, _RegExp);

        BabelRegExp.prototype.exec = function(str) {
            var result = _super.exec.call(this, str);

            if (result) result.groups = buildGroups(result, this);
            return result;
        };

        BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
            if (typeof substitution === 'string') {
                var groups = _groups.get(this);

                return _super[Symbol.replace].call(
                    this,
                    str,
                    substitution.replace(/\$<([^>]+)>/g, function(_, name) {
                        return '$' + groups[name];
                    })
                );
            } else if (typeof substitution === 'function') {
                var _this = this;

                return _super[Symbol.replace].call(this, str, function() {
                    var args = [];
                    args.push.apply(args, arguments);

                    if (typeof args[args.length - 1] !== 'object') {
                        args.push(buildGroups(args, _this));
                    }

                    return substitution.apply(this, args);
                });
            } else {
                return _super[Symbol.replace].call(this, str, substitution);
            }
        };

        function buildGroups(result, re) {
            var g = _groups.get(re);

            return Object.keys(g).reduce(function(groups, name) {
                groups[name] = result[g[name]];
                return groups;
            }, Object.create(null));
        }

        return _wrapRegExp.apply(this, arguments);
    }

    var arrayRemove = function arrayRemove(arr, index) {
        return arr.splice(index, 1);
    };

    var run = function run(cb, sync) {
        if (sync) {
            cb();
        } else if (document.hidden) {
            Promise.resolve(1).then(cb);
        } else {
            setTimeout(cb, 0);
        }
    };

    var on = function on() {
        var listeners = [];
        var off = function off(event, cb) {
            arrayRemove(
                listeners,
                listeners.findIndex(function(listener) {
                    return listener.event === event && (listener.cb === cb || !cb);
                })
            );
        };
        var _fire = function fire(event, args, sync) {
            listeners
                .filter(function(listener) {
                    return listener.event === event;
                })
                .map(function(listener) {
                    return listener.cb;
                })
                .forEach(function(cb) {
                    return run(function() {
                        return cb.apply(void 0, _toConsumableArray(args));
                    }, sync);
                });
        };
        return {
            fireSync: function fireSync(event) {
                for (
                    var _len = arguments.length,
                        args = new Array(_len > 1 ? _len - 1 : 0),
                        _key = 1;
                    _key < _len;
                    _key++
                ) {
                    args[_key - 1] = arguments[_key];
                }
                _fire(event, args, true);
            },
            fire: function fire(event) {
                for (
                    var _len2 = arguments.length,
                        args = new Array(_len2 > 1 ? _len2 - 1 : 0),
                        _key2 = 1;
                    _key2 < _len2;
                    _key2++
                ) {
                    args[_key2 - 1] = arguments[_key2];
                }
                _fire(event, args, false);
            },
            on: function on(event, cb) {
                listeners.push({ event: event, cb: cb });
            },
            onOnce: function onOnce(event, _cb) {
                listeners.push({
                    event: event,
                    cb: function cb() {
                        off(event, _cb);
                        _cb.apply(void 0, arguments);
                    },
                });
            },
            off: off,
        };
    };

    var copyObjectPropertiesToObject = function copyObjectPropertiesToObject(
        src,
        target,
        excluded
    ) {
        Object.getOwnPropertyNames(src)
            .filter(function(property) {
                return !excluded.includes(property);
            })
            .forEach(function(key) {
                return Object.defineProperty(
                    target,
                    key,
                    Object.getOwnPropertyDescriptor(src, key)
                );
            });
    };

    var PRIVATE = [
        'fire',
        'process',
        'revert',
        'load',
        'on',
        'off',
        'onOnce',
        'retryLoad',
        'extend',
        'archive',
        'archived',
        'release',
        'released',
        'requestProcessing',
        'freeze',
    ];

    var createItemAPI = function createItemAPI(item) {
        var api = {};
        copyObjectPropertiesToObject(item, api, PRIVATE);
        return api;
    };

    var removeReleasedItems = function removeReleasedItems(items) {
        items.forEach(function(item, index) {
            if (item.released) {
                arrayRemove(items, index);
            }
        });
    };

    var ItemStatus = {
        INIT: 1,
        IDLE: 2,
        PROCESSING_QUEUED: 9,
        PROCESSING: 3,
        PROCESSING_COMPLETE: 5,
        PROCESSING_ERROR: 6,
        PROCESSING_REVERT_ERROR: 10,
        LOADING: 7,
        LOAD_ERROR: 8,
    };

    var FileOrigin = {
        INPUT: 1,
        LIMBO: 2,
        LOCAL: 3,
    };

    var getNonNumeric = function getNonNumeric(str) {
        return /[^0-9]+/.exec(str);
    };

    var getDecimalSeparator = function getDecimalSeparator() {
        return getNonNumeric((1.1).toLocaleString())[0];
    };

    var getThousandsSeparator = function getThousandsSeparator() {
        // Added for browsers that do not return the thousands separator (happend on native browser Android 4.4.4)
        // We check against the normal toString output and if they're the same return a comma when decimal separator is a dot
        var decimalSeparator = getDecimalSeparator();
        var thousandsStringWithSeparator = (1000.0).toLocaleString();
        var thousandsStringWithoutSeparator = (1000.0).toString();
        if (thousandsStringWithSeparator !== thousandsStringWithoutSeparator) {
            return getNonNumeric(thousandsStringWithSeparator)[0];
        }
        return decimalSeparator === '.' ? ',' : '.';
    };

    var Type = {
        BOOLEAN: 'boolean',
        INT: 'int',
        NUMBER: 'number',
        STRING: 'string',
        ARRAY: 'array',
        OBJECT: 'object',
        FUNCTION: 'function',
        ACTION: 'action',
        SERVER_API: 'serverapi',
        REGEX: 'regex',
    };

    // all registered filters
    var filters = [];

    // loops over matching filters and passes options to each filter, returning the mapped results
    var applyFilterChain = function applyFilterChain(key, value, utils) {
        return new Promise(function(resolve, reject) {
            // find matching filters for this key
            var matchingFilters = filters
                .filter(function(f) {
                    return f.key === key;
                })
                .map(function(f) {
                    return f.cb;
                });

            // resolve now
            if (matchingFilters.length === 0) {
                resolve(value);
                return;
            }

            // first filter to kick things of
            var initialFilter = matchingFilters.shift();

            // chain filters
            matchingFilters
                .reduce(
                    // loop over promises passing value to next promise
                    function(current, next) {
                        return current.then(function(value) {
                            return next(value, utils);
                        });
                    },

                    // call initial filter, will return a promise
                    initialFilter(value, utils)

                    // all executed
                )
                .then(function(value) {
                    return resolve(value);
                })
                .catch(function(error) {
                    return reject(error);
                });
        });
    };

    var applyFilters = function applyFilters(key, value, utils) {
        return filters
            .filter(function(f) {
                return f.key === key;
            })
            .map(function(f) {
                return f.cb(value, utils);
            });
    };

    // adds a new filter to the list
    var addFilter = function addFilter(key, cb) {
        return filters.push({ key: key, cb: cb });
    };

    var extendDefaultOptions = function extendDefaultOptions(additionalOptions) {
        return Object.assign(defaultOptions, additionalOptions);
    };

    var getOptions = function getOptions() {
        return Object.assign({}, defaultOptions);
    };

    var setOptions = function setOptions(opts) {
        forin(opts, function(key, value) {
            // key does not exist, so this option cannot be set
            if (!defaultOptions[key]) {
                return;
            }
            defaultOptions[key][0] = getValueByType(
                value,
                defaultOptions[key][0],
                defaultOptions[key][1]
            );
        });
    };

    // default options on app
    var defaultOptions = {
        // the id to add to the root element
        id: [null, Type.STRING],

        // input field name to use
        name: ['filepond', Type.STRING],

        // disable the field
        disabled: [false, Type.BOOLEAN],

        // classname to put on wrapper
        className: [null, Type.STRING],

        // is the field required
        required: [false, Type.BOOLEAN],

        // Allow media capture when value is set
        captureMethod: [null, Type.STRING],
        // - "camera", "microphone" or "camcorder",
        // - Does not work with multiple on apple devices
        // - If set, acceptedFileTypes must be made to match with media wildcard "image/*", "audio/*" or "video/*"

        // sync `acceptedFileTypes` property with `accept` attribute
        allowSyncAcceptAttribute: [true, Type.BOOLEAN],

        // Feature toggles
        allowDrop: [true, Type.BOOLEAN], // Allow dropping of files
        allowBrowse: [true, Type.BOOLEAN], // Allow browsing the file system
        allowPaste: [true, Type.BOOLEAN], // Allow pasting files
        allowMultiple: [false, Type.BOOLEAN], // Allow multiple files (disabled by default, as multiple attribute is also required on input to allow multiple)
        allowReplace: [true, Type.BOOLEAN], // Allow dropping a file on other file to replace it (only works when multiple is set to false)
        allowRevert: [true, Type.BOOLEAN], // Allows user to revert file upload
        allowRemove: [true, Type.BOOLEAN], // Allow user to remove a file
        allowProcess: [true, Type.BOOLEAN], // Allows user to process a file, when set to false, this removes the file upload button
        allowReorder: [false, Type.BOOLEAN], // Allow reordering of files
        allowDirectoriesOnly: [false, Type.BOOLEAN], // Allow only selecting directories with browse (no support for filtering dnd at this point)

        // Try store file if `server` not set
        storeAsFile: [false, Type.BOOLEAN],

        // Revert mode
        forceRevert: [false, Type.BOOLEAN], // Set to 'force' to require the file to be reverted before removal

        // Input requirements
        maxFiles: [null, Type.INT], // Max number of files
        checkValidity: [false, Type.BOOLEAN], // Enables custom validity messages

        // Where to put file
        itemInsertLocationFreedom: [true, Type.BOOLEAN], // Set to false to always add items to begin or end of list
        itemInsertLocation: ['before', Type.STRING], // Default index in list to add items that have been dropped at the top of the list
        itemInsertInterval: [75, Type.INT],

        // Drag 'n Drop related
        dropOnPage: [false, Type.BOOLEAN], // Allow dropping of files anywhere on page (prevents browser from opening file if dropped outside of Up)
        dropOnElement: [true, Type.BOOLEAN], // Drop needs to happen on element (set to false to also load drops outside of Up)
        dropValidation: [false, Type.BOOLEAN], // Enable or disable validating files on drop
        ignoredFiles: [['.ds_store', 'thumbs.db', 'desktop.ini'], Type.ARRAY],

        // Upload related
        instantUpload: [true, Type.BOOLEAN], // Should upload files immediately on drop
        maxParallelUploads: [2, Type.INT], // Maximum files to upload in parallel
        allowMinimumUploadDuration: [true, Type.BOOLEAN], // if true uploads take at least 750 ms, this ensures the user sees the upload progress giving trust the upload actually happened

        // Chunks
        chunkUploads: [false, Type.BOOLEAN], // Enable chunked uploads
        chunkForce: [false, Type.BOOLEAN], // Force use of chunk uploads even for files smaller than chunk size
        chunkSize: [5000000, Type.INT], // Size of chunks (5MB default)
        chunkRetryDelays: [[500, 1000, 3000], Type.ARRAY], // Amount of times to retry upload of a chunk when it fails

        // The server api end points to use for uploading (see docs)
        server: [null, Type.SERVER_API],

        // File size calculations, can set to 1024, this is only used for display, properties use file size base 1000
        fileSizeBase: [1000, Type.INT],

        // Labels and status messages
        labelFileSizeBytes: ['bytes', Type.STRING],
        labelFileSizeKilobytes: ['KB', Type.STRING],
        labelFileSizeMegabytes: ['MB', Type.STRING],
        labelFileSizeGigabytes: ['GB', Type.STRING],

        labelDecimalSeparator: [getDecimalSeparator(), Type.STRING], // Default is locale separator
        labelThousandsSeparator: [getThousandsSeparator(), Type.STRING], // Default is locale separator

        labelIdle: [
            'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',
            Type.STRING,
        ],

        labelInvalidField: ['Field contains invalid files', Type.STRING],
        labelFileWaitingForSize: ['Waiting for size', Type.STRING],
        labelFileSizeNotAvailable: ['Size not available', Type.STRING],
        labelFileCountSingular: ['file in list', Type.STRING],
        labelFileCountPlural: ['files in list', Type.STRING],
        labelFileLoading: ['Loading', Type.STRING],
        labelFileAdded: ['Added', Type.STRING], // assistive only
        labelFileLoadError: ['Error during load', Type.STRING],
        labelFileRemoved: ['Removed', Type.STRING], // assistive only
        labelFileRemoveError: ['Error during remove', Type.STRING],
        labelFileProcessing: ['Uploading', Type.STRING],
        labelFileProcessingComplete: ['Upload complete', Type.STRING],
        labelFileProcessingAborted: ['Upload cancelled', Type.STRING],
        labelFileProcessingError: ['Error during upload', Type.STRING],
        labelFileProcessingRevertError: ['Error during revert', Type.STRING],

        labelTapToCancel: ['tap to cancel', Type.STRING],
        labelTapToRetry: ['tap to retry', Type.STRING],
        labelTapToUndo: ['tap to undo', Type.STRING],

        labelButtonRemoveItem: ['Remove', Type.STRING],
        labelButtonAbortItemLoad: ['Abort', Type.STRING],
        labelButtonRetryItemLoad: ['Retry', Type.STRING],
        labelButtonAbortItemProcessing: ['Cancel', Type.STRING],
        labelButtonUndoItemProcessing: ['Undo', Type.STRING],
        labelButtonRetryItemProcessing: ['Retry', Type.STRING],
        labelButtonProcessItem: ['Upload', Type.STRING],

        // make sure width and height plus viewpox are even numbers so icons are nicely centered
        iconRemove: [
            '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"/></svg>',
            Type.STRING,
        ],

        iconProcess: [
            '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M14 10.414v3.585a1 1 0 0 1-2 0v-3.585l-1.293 1.293a1 1 0 0 1-1.414-1.415l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.415L14 10.414zM9 18a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2H9z" fill="currentColor" fill-rule="evenodd"/></svg>',
            Type.STRING,
        ],

        iconRetry: [
            '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M10.81 9.185l-.038.02A4.997 4.997 0 0 0 8 13.683a5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 0 1 2 0A7 7 0 1 1 9.722 7.496l-.842-.21a.999.999 0 1 1 .484-1.94l3.23.806c.535.133.86.675.73 1.21l-.804 3.233a.997.997 0 0 1-1.21.73.997.997 0 0 1-.73-1.21l.23-.928v-.002z" fill="currentColor" fill-rule="nonzero"/></svg>',
            Type.STRING,
        ],

        iconUndo: [
            '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M9.185 10.81l.02-.038A4.997 4.997 0 0 1 13.683 8a5 5 0 0 1 5 5 5 5 0 0 1-5 5 1 1 0 0 0 0 2A7 7 0 1 0 7.496 9.722l-.21-.842a.999.999 0 1 0-1.94.484l.806 3.23c.133.535.675.86 1.21.73l3.233-.803a.997.997 0 0 0 .73-1.21.997.997 0 0 0-1.21-.73l-.928.23-.002-.001z" fill="currentColor" fill-rule="nonzero"/></svg>',
            Type.STRING,
        ],

        iconDone: [
            '<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M18.293 9.293a1 1 0 0 1 1.414 1.414l-7.002 7a1 1 0 0 1-1.414 0l-3.998-4a1 1 0 1 1 1.414-1.414L12 15.586l6.294-6.293z" fill="currentColor" fill-rule="nonzero"/></svg>',
            Type.STRING,
        ],

        // event handlers
        oninit: [null, Type.FUNCTION],
        onwarning: [null, Type.FUNCTION],
        onerror: [null, Type.FUNCTION],
        onactivatefile: [null, Type.FUNCTION],
        oninitfile: [null, Type.FUNCTION],
        onaddfilestart: [null, Type.FUNCTION],
        onaddfileprogress: [null, Type.FUNCTION],
        onaddfile: [null, Type.FUNCTION],
        onprocessfilestart: [null, Type.FUNCTION],
        onprocessfileprogress: [null, Type.FUNCTION],
        onprocessfileabort: [null, Type.FUNCTION],
        onprocessfilerevert: [null, Type.FUNCTION],
        onprocessfile: [null, Type.FUNCTION],
        onprocessfiles: [null, Type.FUNCTION],
        onremovefile: [null, Type.FUNCTION],
        onpreparefile: [null, Type.FUNCTION],
        onupdatefiles: [null, Type.FUNCTION],
        onreorderfiles: [null, Type.FUNCTION],

        // hooks
        beforeDropFile: [null, Type.FUNCTION],
        beforeAddFile: [null, Type.FUNCTION],
        beforeRemoveFile: [null, Type.FUNCTION],
        beforePrepareFile: [null, Type.FUNCTION],

        // styles
        stylePanelLayout: [null, Type.STRING], // null 'integrated', 'compact', 'circle'
        stylePanelAspectRatio: [null, Type.STRING], // null or '3:2' or 1
        styleItemPanelAspectRatio: [null, Type.STRING],
        styleButtonRemoveItemPosition: ['left', Type.STRING],
        styleButtonProcessItemPosition: ['right', Type.STRING],
        styleLoadIndicatorPosition: ['right', Type.STRING],
        styleProgressIndicatorPosition: ['right', Type.STRING],
        styleButtonRemoveItemAlign: [false, Type.BOOLEAN],

        // custom initial files array
        files: [[], Type.ARRAY],

        // show support by displaying credits
        credits: [['https://pqina.nl/', 'Powered by PQINA'], Type.ARRAY],
    };

    var getItemByQuery = function getItemByQuery(items, query) {
        // just return first index
        if (isEmpty(query)) {
            return items[0] || null;
        }

        // query is index
        if (isInt(query)) {
            return items[query] || null;
        }

        // if query is item, get the id
        if (typeof query === 'object') {
            query = query.id;
        }

        // assume query is a string and return item by id
        return (
            items.find(function(item) {
                return item.id === query;
            }) || null
        );
    };

    var getNumericAspectRatioFromString = function getNumericAspectRatioFromString(aspectRatio) {
        if (isEmpty(aspectRatio)) {
            return aspectRatio;
        }
        if (/:/.test(aspectRatio)) {
            var parts = aspectRatio.split(':');
            return parts[1] / parts[0];
        }
        return parseFloat(aspectRatio);
    };

    var getActiveItems = function getActiveItems(items) {
        return items.filter(function(item) {
            return !item.archived;
        });
    };

    var Status = {
        EMPTY: 0,
        IDLE: 1, // waiting
        ERROR: 2, // a file is in error state
        BUSY: 3, // busy processing or loading
        READY: 4, // all files uploaded
    };

    var res = null;
    var canUpdateFileInput = function canUpdateFileInput() {
        if (res === null) {
            try {
                var dataTransfer = new DataTransfer();
                dataTransfer.items.add(new File(['hello world'], 'This_Works.txt'));
                var el = document.createElement('input');
                el.setAttribute('type', 'file');
                el.files = dataTransfer.files;
                res = el.files.length === 1;
            } catch (err) {
                res = false;
            }
        }
        return res;
    };

    var ITEM_ERROR = [
        ItemStatus.LOAD_ERROR,
        ItemStatus.PROCESSING_ERROR,
        ItemStatus.PROCESSING_REVERT_ERROR,
    ];

    var ITEM_BUSY = [
        ItemStatus.LOADING,
        ItemStatus.PROCESSING,
        ItemStatus.PROCESSING_QUEUED,
        ItemStatus.INIT,
    ];

    var ITEM_READY = [ItemStatus.PROCESSING_COMPLETE];

    var isItemInErrorState = function isItemInErrorState(item) {
        return ITEM_ERROR.includes(item.status);
    };
    var isItemInBusyState = function isItemInBusyState(item) {
        return ITEM_BUSY.includes(item.status);
    };
    var isItemInReadyState = function isItemInReadyState(item) {
        return ITEM_READY.includes(item.status);
    };

    var isAsync = function isAsync(state) {
        return (
            isObject(state.options.server) &&
            (isObject(state.options.server.process) || isFunction(state.options.server.process))
        );
    };

    var queries = function queries(state) {
        return {
            GET_STATUS: function GET_STATUS() {
                var items = getActiveItems(state.items);
                var EMPTY = Status.EMPTY,
                    ERROR = Status.ERROR,
                    BUSY = Status.BUSY,
                    IDLE = Status.IDLE,
                    READY = Status.READY;

                if (items.length === 0) return EMPTY;

                if (items.some(isItemInErrorState)) return ERROR;

                if (items.some(isItemInBusyState)) return BUSY;

                if (items.some(isItemInReadyState)) return READY;

                return IDLE;
            },

            GET_ITEM: function GET_ITEM(query) {
                return getItemByQuery(state.items, query);
            },

            GET_ACTIVE_ITEM: function GET_ACTIVE_ITEM(query) {
                return getItemByQuery(getActiveItems(state.items), query);
            },

            GET_ACTIVE_ITEMS: function GET_ACTIVE_ITEMS() {
                return getActiveItems(state.items);
            },

            GET_ITEMS: function GET_ITEMS() {
                return state.items;
            },

            GET_ITEM_NAME: function GET_ITEM_NAME(query) {
                var item = getItemByQuery(state.items, query);
                return item ? item.filename : null;
            },

            GET_ITEM_SIZE: function GET_ITEM_SIZE(query) {
                var item = getItemByQuery(state.items, query);
                return item ? item.fileSize : null;
            },

            GET_STYLES: function GET_STYLES() {
                return Object.keys(state.options)
                    .filter(function(key) {
                        return /^style/.test(key);
                    })
                    .map(function(option) {
                        return {
                            name: option,
                            value: state.options[option],
                        };
                    });
            },

            GET_PANEL_ASPECT_RATIO: function GET_PANEL_ASPECT_RATIO() {
                var isShapeCircle = /circle/.test(state.options.stylePanelLayout);
                var aspectRatio = isShapeCircle
                    ? 1
                    : getNumericAspectRatioFromString(state.options.stylePanelAspectRatio);
                return aspectRatio;
            },

            GET_ITEM_PANEL_ASPECT_RATIO: function GET_ITEM_PANEL_ASPECT_RATIO() {
                return state.options.styleItemPanelAspectRatio;
            },

            GET_ITEMS_BY_STATUS: function GET_ITEMS_BY_STATUS(status) {
                return getActiveItems(state.items).filter(function(item) {
                    return item.status === status;
                });
            },

            GET_TOTAL_ITEMS: function GET_TOTAL_ITEMS() {
                return getActiveItems(state.items).length;
            },

            SHOULD_UPDATE_FILE_INPUT: function SHOULD_UPDATE_FILE_INPUT() {
                return state.options.storeAsFile && canUpdateFileInput() && !isAsync(state);
            },

            IS_ASYNC: function IS_ASYNC() {
                return isAsync(state);
            },

            GET_FILE_SIZE_LABELS: function GET_FILE_SIZE_LABELS(query) {
                return {
                    labelBytes: query('GET_LABEL_FILE_SIZE_BYTES') || undefined,
                    labelKilobytes: query('GET_LABEL_FILE_SIZE_KILOBYTES') || undefined,
                    labelMegabytes: query('GET_LABEL_FILE_SIZE_MEGABYTES') || undefined,
                    labelGigabytes: query('GET_LABEL_FILE_SIZE_GIGABYTES') || undefined,
                };
            },
        };
    };

    var hasRoomForItem = function hasRoomForItem(state) {
        var count = getActiveItems(state.items).length;

        // if cannot have multiple items, to add one item it should currently not contain items
        if (!state.options.allowMultiple) {
            return count === 0;
        }

        // if allows multiple items, we check if a max item count has been set, if not, there's no limit
        var maxFileCount = state.options.maxFiles;
        if (maxFileCount === null) {
            return true;
        }

        // we check if the current count is smaller than the max count, if so, another file can still be added
        if (count < maxFileCount) {
            return true;
        }

        // no more room for another file
        return false;
    };

    var limit = function limit(value, min, max) {
        return Math.max(Math.min(max, value), min);
    };

    var arrayInsert = function arrayInsert(arr, index, item) {
        return arr.splice(index, 0, item);
    };

    var insertItem = function insertItem(items, item, index) {
        if (isEmpty(item)) {
            return null;
        }

        // if index is undefined, append
        if (typeof index === 'undefined') {
            items.push(item);
            return item;
        }

        // limit the index to the size of the items array
        index = limit(index, 0, items.length);

        // add item to array
        arrayInsert(items, index, item);

        // expose
        return item;
    };

    var isBase64DataURI = function isBase64DataURI(str) {
        return /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i.test(
            str
        );
    };

    var getFilenameFromURL = function getFilenameFromURL(url) {
        return ('' + url)
            .split('/')
            .pop()
            .split('?')
            .shift();
    };

    var getExtensionFromFilename = function getExtensionFromFilename(name) {
        return name.split('.').pop();
    };

    var guesstimateExtension = function guesstimateExtension(type) {
        // if no extension supplied, exit here
        if (typeof type !== 'string') {
            return '';
        }

        // get subtype
        var subtype = type.split('/').pop();

        // is svg subtype
        if (/svg/.test(subtype)) {
            return 'svg';
        }

        if (/zip|compressed/.test(subtype)) {
            return 'zip';
        }

        if (/plain/.test(subtype)) {
            return 'txt';
        }

        if (/msword/.test(subtype)) {
            return 'doc';
        }

        // if is valid subtype
        if (/[a-z]+/.test(subtype)) {
            // always use jpg extension
            if (subtype === 'jpeg') {
                return 'jpg';
            }

            // return subtype
            return subtype;
        }

        return '';
    };

    var leftPad = function leftPad(value) {
        var padding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        return (padding + value).slice(-padding.length);
    };

    var getDateString = function getDateString() {
        var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
        return (
            date.getFullYear() +
            '-' +
            leftPad(date.getMonth() + 1, '00') +
            '-' +
            leftPad(date.getDate(), '00') +
            '_' +
            leftPad(date.getHours(), '00') +
            '-' +
            leftPad(date.getMinutes(), '00') +
            '-' +
            leftPad(date.getSeconds(), '00')
        );
    };

    var getFileFromBlob = function getFileFromBlob(blob, filename) {
        var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var extension = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var file =
            typeof type === 'string'
                ? blob.slice(0, blob.size, type)
                : blob.slice(0, blob.size, blob.type);
        file.lastModifiedDate = new Date();

        // copy relative path
        if (blob._relativePath) file._relativePath = blob._relativePath;

        // if blob has name property, use as filename if no filename supplied
        if (!isString(filename)) {
            filename = getDateString();
        }

        // if filename supplied but no extension and filename has extension
        if (filename && extension === null && getExtensionFromFilename(filename)) {
            file.name = filename;
        } else {
            extension = extension || guesstimateExtension(file.type);
            file.name = filename + (extension ? '.' + extension : '');
        }

        return file;
    };

    var getBlobBuilder = function getBlobBuilder() {
        return (window.BlobBuilder =
            window.BlobBuilder ||
            window.WebKitBlobBuilder ||
            window.MozBlobBuilder ||
            window.MSBlobBuilder);
    };

    var createBlob = function createBlob(arrayBuffer, mimeType) {
        var BB = getBlobBuilder();

        if (BB) {
            var bb = new BB();
            bb.append(arrayBuffer);
            return bb.getBlob(mimeType);
        }

        return new Blob([arrayBuffer], {
            type: mimeType,
        });
    };

    var getBlobFromByteStringWithMimeType = function getBlobFromByteStringWithMimeType(
        byteString,
        mimeType
    ) {
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);

        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        return createBlob(ab, mimeType);
    };

    var getMimeTypeFromBase64DataURI = function getMimeTypeFromBase64DataURI(dataURI) {
        return (/^data:(.+);/.exec(dataURI) || [])[1] || null;
    };

    var getBase64DataFromBase64DataURI = function getBase64DataFromBase64DataURI(dataURI) {
        // get data part of string (remove data:image/jpeg...,)
        var data = dataURI.split(',')[1];

        // remove any whitespace as that causes InvalidCharacterError in IE
        return data.replace(/\s/g, '');
    };

    var getByteStringFromBase64DataURI = function getByteStringFromBase64DataURI(dataURI) {
        return atob(getBase64DataFromBase64DataURI(dataURI));
    };

    var getBlobFromBase64DataURI = function getBlobFromBase64DataURI(dataURI) {
        var mimeType = getMimeTypeFromBase64DataURI(dataURI);
        var byteString = getByteStringFromBase64DataURI(dataURI);

        return getBlobFromByteStringWithMimeType(byteString, mimeType);
    };

    var getFileFromBase64DataURI = function getFileFromBase64DataURI(dataURI, filename, extension) {
        return getFileFromBlob(getBlobFromBase64DataURI(dataURI), filename, null, extension);
    };

    var getFileNameFromHeader = function getFileNameFromHeader(header) {
        // test if is content disposition header, if not exit
        if (!/^content-disposition:/i.test(header)) return null;

        // get filename parts
        var matches = header
            .split(/filename=|filename\*=.+''/)
            .splice(1)
            .map(function(name) {
                return name.trim().replace(/^["']|[;"']{0,2}$/g, '');
            })
            .filter(function(name) {
                return name.length;
            });

        return matches.length ? decodeURI(matches[matches.length - 1]) : null;
    };

    var getFileSizeFromHeader = function getFileSizeFromHeader(header) {
        if (/content-length:/i.test(header)) {
            var size = header.match(/[0-9]+/)[0];
            return size ? parseInt(size, 10) : null;
        }
        return null;
    };

    var getTranfserIdFromHeader = function getTranfserIdFromHeader(header) {
        if (/x-content-transfer-id:/i.test(header)) {
            var id = (header.split(':')[1] || '').trim();
            return id || null;
        }
        return null;
    };

    var getFileInfoFromHeaders = function getFileInfoFromHeaders(headers) {
        var info = {
            source: null,
            name: null,
            size: null,
        };

        var rows = headers.split('\n');
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;
        try {
            for (
                var _iterator = rows[Symbol.iterator](), _step;
                !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
                _iteratorNormalCompletion = true
            ) {
                var header = _step.value;

                var name = getFileNameFromHeader(header);
                if (name) {
                    info.name = name;
                    continue;
                }

                var size = getFileSizeFromHeader(header);
                if (size) {
                    info.size = size;
                    continue;
                }

                var source = getTranfserIdFromHeader(header);
                if (source) {
                    info.source = source;
                    continue;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return info;
    };

    var createFileLoader = function createFileLoader(fetchFn) {
        var state = {
            source: null,
            complete: false,
            progress: 0,
            size: null,
            timestamp: null,
            duration: 0,
            request: null,
        };

        var getProgress = function getProgress() {
            return state.progress;
        };
        var abort = function abort() {
            if (state.request && state.request.abort) {
                state.request.abort();
            }
        };

        // load source
        var load = function load() {
            // get quick reference
            var source = state.source;

            api.fire('init', source);

            // Load Files
            if (source instanceof File) {
                api.fire('load', source);
            } else if (source instanceof Blob) {
                // Load blobs, set default name to current date
                api.fire('load', getFileFromBlob(source, source.name));
            } else if (isBase64DataURI(source)) {
                // Load base 64, set default name to current date
                api.fire('load', getFileFromBase64DataURI(source));
            } else {
                // Deal as if is external URL, let's load it!
                loadURL(source);
            }
        };

        // loads a url
        var loadURL = function loadURL(url) {
            // is remote url and no fetch method supplied
            if (!fetchFn) {
                api.fire('error', {
                    type: 'error',
                    body: "Can't load URL",
                    code: 400,
                });

                return;
            }

            // set request start
            state.timestamp = Date.now();

            // load file
            state.request = fetchFn(
                url,
                function(response) {
                    // update duration
                    state.duration = Date.now() - state.timestamp;

                    // done!
                    state.complete = true;

                    // turn blob response into a file
                    if (response instanceof Blob) {
                        response = getFileFromBlob(
                            response,
                            response.name || getFilenameFromURL(url)
                        );
                    }

                    api.fire(
                        'load',
                        // if has received blob, we go with blob, if no response, we return null
                        response instanceof Blob ? response : response ? response.body : null
                    );
                },
                function(error) {
                    api.fire(
                        'error',
                        typeof error === 'string'
                            ? {
                                  type: 'error',
                                  code: 0,
                                  body: error,
                              }
                            : error
                    );
                },
                function(computable, current, total) {
                    // collected some meta data already
                    if (total) {
                        state.size = total;
                    }

                    // update duration
                    state.duration = Date.now() - state.timestamp;

                    // if we can't compute progress, we're not going to fire progress events
                    if (!computable) {
                        state.progress = null;
                        return;
                    }

                    // update progress percentage
                    state.progress = current / total;

                    // expose
                    api.fire('progress', state.progress);
                },
                function() {
                    api.fire('abort');
                },
                function(response) {
                    var fileinfo = getFileInfoFromHeaders(
                        typeof response === 'string' ? response : response.headers
                    );
                    api.fire('meta', {
                        size: state.size || fileinfo.size,
                        filename: fileinfo.name,
                        source: fileinfo.source,
                    });
                }
            );
        };

        var api = Object.assign({}, on(), {
            setSource: function setSource(source) {
                return (state.source = source);
            },
            getProgress: getProgress, // file load progress
            abort: abort, // abort file load
            load: load, // start load
        });

        return api;
    };

    var isGet = function isGet(method) {
        return /GET|HEAD/.test(method);
    };

    var sendRequest = function sendRequest(data, url, options) {
        var api = {
            onheaders: function onheaders() {},
            onprogress: function onprogress() {},
            onload: function onload() {},
            ontimeout: function ontimeout() {},
            onerror: function onerror() {},
            onabort: function onabort() {},
            abort: function abort() {
                aborted = true;
                xhr.abort();
            },
        };

        // timeout identifier, only used when timeout is defined
        var aborted = false;
        var headersReceived = false;

        // set default options
        options = Object.assign(
            {
                method: 'POST',
                headers: {},
                withCredentials: false,
            },
            options
        );

        // encode url
        url = encodeURI(url);

        // if method is GET, add any received data to url

        if (isGet(options.method) && data) {
            url =
                '' +
                url +
                encodeURIComponent(typeof data === 'string' ? data : JSON.stringify(data));
        }

        // create request
        var xhr = new XMLHttpRequest();

        // progress of load
        var process = isGet(options.method) ? xhr : xhr.upload;
        process.onprogress = function(e) {
            // no progress event when aborted ( onprogress is called once after abort() )
            if (aborted) {
                return;
            }

            api.onprogress(e.lengthComputable, e.loaded, e.total);
        };

        // tries to get header info to the app as fast as possible
        xhr.onreadystatechange = function() {
            // not interesting in these states ('unsent' and 'openend' as they don't give us any additional info)
            if (xhr.readyState < 2) {
                return;
            }

            // no server response
            if (xhr.readyState === 4 && xhr.status === 0) {
                return;
            }

            if (headersReceived) {
                return;
            }

            headersReceived = true;

            // we've probably received some useful data in response headers
            api.onheaders(xhr);
        };

        // load successful
        xhr.onload = function() {
            // is classified as valid response
            if (xhr.status >= 200 && xhr.status < 300) {
                api.onload(xhr);
            } else {
                api.onerror(xhr);
            }
        };

        // error during load
        xhr.onerror = function() {
            return api.onerror(xhr);
        };

        // request aborted
        xhr.onabort = function() {
            aborted = true;
            api.onabort();
        };

        // request timeout
        xhr.ontimeout = function() {
            return api.ontimeout(xhr);
        };

        // open up open up!
        xhr.open(options.method, url, true);

        // set timeout if defined (do it after open so IE11 plays ball)
        if (isInt(options.timeout)) {
            xhr.timeout = options.timeout;
        }

        // add headers
        Object.keys(options.headers).forEach(function(key) {
            var value = unescape(encodeURIComponent(options.headers[key]));
            xhr.setRequestHeader(key, value);
        });

        // set type of response
        if (options.responseType) {
            xhr.responseType = options.responseType;
        }

        // set credentials
        if (options.withCredentials) {
            xhr.withCredentials = true;
        }

        // let's send our data
        xhr.send(data);

        return api;
    };

    var createResponse = function createResponse(type, code, body, headers) {
        return {
            type: type,
            code: code,
            body: body,
            headers: headers,
        };
    };

    var createTimeoutResponse = function createTimeoutResponse(cb) {
        return function(xhr) {
            cb(createResponse('error', 0, 'Timeout', xhr.getAllResponseHeaders()));
        };
    };

    var hasQS = function hasQS(str) {
        return /\?/.test(str);
    };
    var buildURL = function buildURL() {
        var url = '';
        for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
            parts[_key] = arguments[_key];
        }
        parts.forEach(function(part) {
            url += hasQS(url) && hasQS(part) ? part.replace(/\?/, '&') : part;
        });
        return url;
    };

    var createFetchFunction = function createFetchFunction() {
        var apiUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments.length > 1 ? arguments[1] : undefined;
        // custom handler (should also handle file, load, error, progress and abort)
        if (typeof action === 'function') {
            return action;
        }

        // no action supplied
        if (!action || !isString(action.url)) {
            return null;
        }

        // set onload hanlder
        var onload =
            action.onload ||
            function(res) {
                return res;
            };
        var onerror =
            action.onerror ||
            function(res) {
                return null;
            };

        // internal handler
        return function(url, load, error, progress, abort, headers) {
            // do local or remote request based on if the url is external
            var request = sendRequest(
                url,
                buildURL(apiUrl, action.url),
                Object.assign({}, action, {
                    responseType: 'blob',
                })
            );

            request.onload = function(xhr) {
                // get headers
                var headers = xhr.getAllResponseHeaders();

                // get filename
                var filename = getFileInfoFromHeaders(headers).name || getFilenameFromURL(url);

                // create response
                load(
                    createResponse(
                        'load',
                        xhr.status,
                        action.method === 'HEAD'
                            ? null
                            : getFileFromBlob(onload(xhr.response), filename),
                        headers
                    )
                );
            };

            request.onerror = function(xhr) {
                error(
                    createResponse(
                        'error',
                        xhr.status,
                        onerror(xhr.response) || xhr.statusText,
                        xhr.getAllResponseHeaders()
                    )
                );
            };

            request.onheaders = function(xhr) {
                headers(createResponse('headers', xhr.status, null, xhr.getAllResponseHeaders()));
            };

            request.ontimeout = createTimeoutResponse(error);
            request.onprogress = progress;
            request.onabort = abort;

            // should return request
            return request;
        };
    };

    var ChunkStatus = {
        QUEUED: 0,
        COMPLETE: 1,
        PROCESSING: 2,
        ERROR: 3,
        WAITING: 4,
    };

    /*
                                                       function signature:
                                                         (file, metadata, load, error, progress, abort, transfer, options) => {
                                                           return {
                                                           abort:() => {}
                                                         }
                                                       }
                                                       */

    // apiUrl, action, name, file, metadata, load, error, progress, abort, transfer, options
    var processFileChunked = function processFileChunked(
        apiUrl,
        action,
        name,
        file,
        metadata,
        load,
        error,
        progress,
        abort,
        transfer,
        options
    ) {
        // all chunks
        var chunks = [];
        var chunkTransferId = options.chunkTransferId,
            chunkServer = options.chunkServer,
            chunkSize = options.chunkSize,
            chunkRetryDelays = options.chunkRetryDelays;

        // default state
        var state = {
            serverId: chunkTransferId,
            aborted: false,
        };

        // set onload handlers
        var ondata =
            action.ondata ||
            function(fd) {
                return fd;
            };
        var onload =
            action.onload ||
            function(xhr, method) {
                return method === 'HEAD' ? xhr.getResponseHeader('Upload-Offset') : xhr.response;
            };
        var onerror =
            action.onerror ||
            function(res) {
                return null;
            };

        // create server hook
        var requestTransferId = function requestTransferId(cb) {
            var formData = new FormData();

            // add metadata under same name
            if (isObject(metadata)) formData.append(name, JSON.stringify(metadata));

            var headers =
                typeof action.headers === 'function'
                    ? action.headers(file, metadata)
                    : Object.assign({}, action.headers, {
                          'Upload-Length': file.size,
                      });

            var requestParams = Object.assign({}, action, {
                headers: headers,
            });

            // send request object
            var request = sendRequest(
                ondata(formData),
                buildURL(apiUrl, action.url),
                requestParams
            );

            request.onload = function(xhr) {
                return cb(onload(xhr, requestParams.method));
            };

            request.onerror = function(xhr) {
                return error(
                    createResponse(
                        'error',
                        xhr.status,
                        onerror(xhr.response) || xhr.statusText,
                        xhr.getAllResponseHeaders()
                    )
                );
            };

            request.ontimeout = createTimeoutResponse(error);
        };

        var requestTransferOffset = function requestTransferOffset(cb) {
            var requestUrl = buildURL(apiUrl, chunkServer.url, state.serverId);

            var headers =
                typeof action.headers === 'function'
                    ? action.headers(state.serverId)
                    : Object.assign({}, action.headers);

            var requestParams = {
                headers: headers,
                method: 'HEAD',
            };

            var request = sendRequest(null, requestUrl, requestParams);

            request.onload = function(xhr) {
                return cb(onload(xhr, requestParams.method));
            };

            request.onerror = function(xhr) {
                return error(
                    createResponse(
                        'error',
                        xhr.status,
                        onerror(xhr.response) || xhr.statusText,
                        xhr.getAllResponseHeaders()
                    )
                );
            };

            request.ontimeout = createTimeoutResponse(error);
        };

        // create chunks
        var lastChunkIndex = Math.floor(file.size / chunkSize);
        for (var i = 0; i <= lastChunkIndex; i++) {
            var offset = i * chunkSize;
            var data = file.slice(offset, offset + chunkSize, 'application/offset+octet-stream');
            chunks[i] = {
                index: i,
                size: data.size,
                offset: offset,
                data: data,
                file: file,
                progress: 0,
                retries: _toConsumableArray(chunkRetryDelays),
                status: ChunkStatus.QUEUED,
                error: null,
                request: null,
                timeout: null,
            };
        }

        var completeProcessingChunks = function completeProcessingChunks() {
            return load(state.serverId);
        };

        var canProcessChunk = function canProcessChunk(chunk) {
            return chunk.status === ChunkStatus.QUEUED || chunk.status === ChunkStatus.ERROR;
        };

        var processChunk = function processChunk(chunk) {
            // processing is paused, wait here
            if (state.aborted) return;

            // get next chunk to process
            chunk = chunk || chunks.find(canProcessChunk);

            // no more chunks to process
            if (!chunk) {
                // all done?
                if (
                    chunks.every(function(chunk) {
                        return chunk.status === ChunkStatus.COMPLETE;
                    })
                ) {
                    completeProcessingChunks();
                }

                // no chunk to handle
                return;
            }

            // now processing this chunk
            chunk.status = ChunkStatus.PROCESSING;
            chunk.progress = null;

            // allow parsing of formdata
            var ondata =
                chunkServer.ondata ||
                function(fd) {
                    return fd;
                };
            var onerror =
                chunkServer.onerror ||
                function(res) {
                    return null;
                };

            // send request object
            var requestUrl = buildURL(apiUrl, chunkServer.url, state.serverId);

            var headers =
                typeof chunkServer.headers === 'function'
                    ? chunkServer.headers(chunk)
                    : Object.assign({}, chunkServer.headers, {
                          'Content-Type': 'application/offset+octet-stream',
                          'Upload-Offset': chunk.offset,
                          'Upload-Length': file.size,
                          'Upload-Name': file.name,
                      });

            var request = (chunk.request = sendRequest(
                ondata(chunk.data),
                requestUrl,
                Object.assign({}, chunkServer, {
                    headers: headers,
                })
            ));

            request.onload = function() {
                // done!
                chunk.status = ChunkStatus.COMPLETE;

                // remove request reference
                chunk.request = null;

                // start processing more chunks
                processChunks();
            };

            request.onprogress = function(lengthComputable, loaded, total) {
                chunk.progress = lengthComputable ? loaded : null;
                updateTotalProgress();
            };

            request.onerror = function(xhr) {
                chunk.status = ChunkStatus.ERROR;
                chunk.request = null;
                chunk.error = onerror(xhr.response) || xhr.statusText;
                if (!retryProcessChunk(chunk)) {
                    error(
                        createResponse(
                            'error',
                            xhr.status,
                            onerror(xhr.response) || xhr.statusText,
                            xhr.getAllResponseHeaders()
                        )
                    );
                }
            };

            request.ontimeout = function(xhr) {
                chunk.status = ChunkStatus.ERROR;
                chunk.request = null;
                if (!retryProcessChunk(chunk)) {
                    createTimeoutResponse(error)(xhr);
                }
            };

            request.onabort = function() {
                chunk.status = ChunkStatus.QUEUED;
                chunk.request = null;
                abort();
            };
        };

        var retryProcessChunk = function retryProcessChunk(chunk) {
            // no more retries left
            if (chunk.retries.length === 0) return false;

            // new retry
            chunk.status = ChunkStatus.WAITING;
            clearTimeout(chunk.timeout);
            chunk.timeout = setTimeout(function() {
                processChunk(chunk);
            }, chunk.retries.shift());

            // we're going to retry
            return true;
        };

        var updateTotalProgress = function updateTotalProgress() {
            // calculate total progress fraction
            var totalBytesTransfered = chunks.reduce(function(p, chunk) {
                if (p === null || chunk.progress === null) return null;
                return p + chunk.progress;
            }, 0);

            // can't compute progress
            if (totalBytesTransfered === null) return progress(false, 0, 0);

            // calculate progress values
            var totalSize = chunks.reduce(function(total, chunk) {
                return total + chunk.size;
            }, 0);

            // can update progress indicator
            progress(true, totalBytesTransfered, totalSize);
        };

        // process new chunks
        var processChunks = function processChunks() {
            var totalProcessing = chunks.filter(function(chunk) {
                return chunk.status === ChunkStatus.PROCESSING;
            }).length;
            if (totalProcessing >= 1) return;
            processChunk();
        };

        var abortChunks = function abortChunks() {
            chunks.forEach(function(chunk) {
                clearTimeout(chunk.timeout);
                if (chunk.request) {
                    chunk.request.abort();
                }
            });
        };

        // let's go!
        if (!state.serverId) {
            requestTransferId(function(serverId) {
                // stop here if aborted, might have happened in between request and callback
                if (state.aborted) return;

                // pass back to item so we can use it if something goes wrong
                transfer(serverId);

                // store internally
                state.serverId = serverId;
                processChunks();
            });
        } else {
            requestTransferOffset(function(offset) {
                // stop here if aborted, might have happened in between request and callback
                if (state.aborted) return;

                // mark chunks with lower offset as complete
                chunks
                    .filter(function(chunk) {
                        return chunk.offset < offset;
                    })
                    .forEach(function(chunk) {
                        chunk.status = ChunkStatus.COMPLETE;
                        chunk.progress = chunk.size;
                    });

                // continue processing
                processChunks();
            });
        }

        return {
            abort: function abort() {
                state.aborted = true;
                abortChunks();
            },
        };
    };

    /*
                                                               function signature:
                                                                 (file, metadata, load, error, progress, abort) => {
                                                                   return {
                                                                   abort:() => {}
                                                                 }
                                                               }
                                                               */
    var createFileProcessorFunction = function createFileProcessorFunction(
        apiUrl,
        action,
        name,
        options
    ) {
        return function(file, metadata, load, error, progress, abort, transfer) {
            // no file received
            if (!file) return;

            // if was passed a file, and we can chunk it, exit here
            var canChunkUpload = options.chunkUploads;
            var shouldChunkUpload = canChunkUpload && file.size > options.chunkSize;
            var willChunkUpload = canChunkUpload && (shouldChunkUpload || options.chunkForce);
            if (file instanceof Blob && willChunkUpload)
                return processFileChunked(
                    apiUrl,
                    action,
                    name,
                    file,
                    metadata,
                    load,
                    error,
                    progress,
                    abort,
                    transfer,
                    options
                );

            // set handlers
            var ondata =
                action.ondata ||
                function(fd) {
                    return fd;
                };
            var onload =
                action.onload ||
                function(res) {
                    return res;
                };
            var onerror =
                action.onerror ||
                function(res) {
                    return null;
                };

            var headers =
                typeof action.headers === 'function'
                    ? action.headers(file, metadata) || {}
                    : Object.assign(
                          {},

                          action.headers
                      );

            var requestParams = Object.assign({}, action, {
                headers: headers,
            });

            // create formdata object
            var formData = new FormData();

            // add metadata under same name
            if (isObject(metadata)) {
                formData.append(name, JSON.stringify(metadata));
            }

            // Turn into an array of objects so no matter what the input, we can handle it the same way
            (file instanceof Blob ? [{ name: null, file: file }] : file).forEach(function(item) {
                formData.append(
                    name,
                    item.file,
                    item.name === null ? item.file.name : '' + item.name + item.file.name
                );
            });

            // send request object
            var request = sendRequest(
                ondata(formData),
                buildURL(apiUrl, action.url),
                requestParams
            );
            request.onload = function(xhr) {
                load(
                    createResponse(
                        'load',
                        xhr.status,
                        onload(xhr.response),
                        xhr.getAllResponseHeaders()
                    )
                );
            };

            request.onerror = function(xhr) {
                error(
                    createResponse(
                        'error',
                        xhr.status,
                        onerror(xhr.response) || xhr.statusText,
                        xhr.getAllResponseHeaders()
                    )
                );
            };

            request.ontimeout = createTimeoutResponse(error);
            request.onprogress = progress;
            request.onabort = abort;

            // should return request
            return request;
        };
    };

    var createProcessorFunction = function createProcessorFunction() {
        var apiUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments.length > 1 ? arguments[1] : undefined;
        var name = arguments.length > 2 ? arguments[2] : undefined;
        var options = arguments.length > 3 ? arguments[3] : undefined;

        // custom handler (should also handle file, load, error, progress and abort)
        if (typeof action === 'function')
            return function() {
                for (
                    var _len = arguments.length, params = new Array(_len), _key = 0;
                    _key < _len;
                    _key++
                ) {
                    params[_key] = arguments[_key];
                }
                return action.apply(void 0, [name].concat(params, [options]));
            };

        // no action supplied
        if (!action || !isString(action.url)) return null;

        // internal handler
        return createFileProcessorFunction(apiUrl, action, name, options);
    };

    /*
                                                      function signature:
                                                      (uniqueFileId, load, error) => { }
                                                      */
    var createRevertFunction = function createRevertFunction() {
        var apiUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments.length > 1 ? arguments[1] : undefined;
        // is custom implementation
        if (typeof action === 'function') {
            return action;
        }

        // no action supplied, return stub function, interface will work, but file won't be removed
        if (!action || !isString(action.url)) {
            return function(uniqueFileId, load) {
                return load();
            };
        }

        // set onload hanlder
        var onload =
            action.onload ||
            function(res) {
                return res;
            };
        var onerror =
            action.onerror ||
            function(res) {
                return null;
            };

        // internal implementation
        return function(uniqueFileId, load, error) {
            var request = sendRequest(
                uniqueFileId,
                apiUrl + action.url,
                action // contains method, headers and withCredentials properties
            );
            request.onload = function(xhr) {
                load(
                    createResponse(
                        'load',
                        xhr.status,
                        onload(xhr.response),
                        xhr.getAllResponseHeaders()
                    )
                );
            };

            request.onerror = function(xhr) {
                error(
                    createResponse(
                        'error',
                        xhr.status,
                        onerror(xhr.response) || xhr.statusText,
                        xhr.getAllResponseHeaders()
                    )
                );
            };

            request.ontimeout = createTimeoutResponse(error);

            return request;
        };
    };

    var getRandomNumber = function getRandomNumber() {
        var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        return min + Math.random() * (max - min);
    };

    var createPerceivedPerformanceUpdater = function createPerceivedPerformanceUpdater(cb) {
        var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
        var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var tickMin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 25;
        var tickMax = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 250;
        var timeout = null;
        var start = Date.now();

        var tick = function tick() {
            var runtime = Date.now() - start;
            var delay = getRandomNumber(tickMin, tickMax);

            if (runtime + delay > duration) {
                delay = runtime + delay - duration;
            }

            var progress = runtime / duration;
            if (progress >= 1 || document.hidden) {
                cb(1);
                return;
            }

            cb(progress);

            timeout = setTimeout(tick, delay);
        };

        if (duration > 0) tick();

        return {
            clear: function clear() {
                clearTimeout(timeout);
            },
        };
    };

    var createFileProcessor = function createFileProcessor(processFn, options) {
        var state = {
            complete: false,
            perceivedProgress: 0,
            perceivedPerformanceUpdater: null,
            progress: null,
            timestamp: null,
            perceivedDuration: 0,
            duration: 0,
            request: null,
            response: null,
        };
        var allowMinimumUploadDuration = options.allowMinimumUploadDuration;

        var process = function process(file, metadata) {
            var progressFn = function progressFn() {
                // we've not yet started the real download, stop here
                // the request might not go through, for instance, there might be some server trouble
                // if state.progress is null, the server does not allow computing progress and we show the spinner instead
                if (state.duration === 0 || state.progress === null) return;

                // as we're now processing, fire the progress event
                api.fire('progress', api.getProgress());
            };

            var completeFn = function completeFn() {
                state.complete = true;
                api.fire('load-perceived', state.response.body);
            };

            // let's start processing
            api.fire('start');

            // set request start
            state.timestamp = Date.now();

            // create perceived performance progress indicator
            state.perceivedPerformanceUpdater = createPerceivedPerformanceUpdater(
                function(progress) {
                    state.perceivedProgress = progress;
                    state.perceivedDuration = Date.now() - state.timestamp;

                    progressFn();

                    // if fake progress is done, and a response has been received,
                    // and we've not yet called the complete method
                    if (state.response && state.perceivedProgress === 1 && !state.complete) {
                        // we done!
                        completeFn();
                    }
                },
                // random delay as in a list of files you start noticing
                // files uploading at the exact same speed
                allowMinimumUploadDuration ? getRandomNumber(750, 1500) : 0
            );

            // remember request so we can abort it later
            state.request = processFn(
                // the file to process
                file,

                // the metadata to send along
                metadata,

                // callbacks (load, error, progress, abort, transfer)
                // load expects the body to be a server id if
                // you want to make use of revert
                function(response) {
                    // we put the response in state so we can access
                    // it outside of this method
                    state.response = isObject(response)
                        ? response
                        : {
                              type: 'load',
                              code: 200,
                              body: '' + response,
                              headers: {},
                          };

                    // update duration
                    state.duration = Date.now() - state.timestamp;

                    // force progress to 1 as we're now done
                    state.progress = 1;

                    // actual load is done let's share results
                    api.fire('load', state.response.body);

                    // we are really done
                    // if perceived progress is 1 ( wait for perceived progress to complete )
                    // or if server does not support progress ( null )
                    if (
                        !allowMinimumUploadDuration ||
                        (allowMinimumUploadDuration && state.perceivedProgress === 1)
                    ) {
                        completeFn();
                    }
                },

                // error is expected to be an object with type, code, body
                function(error) {
                    // cancel updater
                    state.perceivedPerformanceUpdater.clear();

                    // update others about this error
                    api.fire(
                        'error',
                        isObject(error)
                            ? error
                            : {
                                  type: 'error',
                                  code: 0,
                                  body: '' + error,
                              }
                    );
                },

                // actual processing progress
                function(computable, current, total) {
                    // update actual duration
                    state.duration = Date.now() - state.timestamp;

                    // update actual progress
                    state.progress = computable ? current / total : null;

                    progressFn();
                },

                // abort does not expect a value
                function() {
                    // stop updater
                    state.perceivedPerformanceUpdater.clear();

                    // fire the abort event so we can switch visuals
                    api.fire('abort', state.response ? state.response.body : null);
                },

                // register the id for this transfer
                function(transferId) {
                    api.fire('transfer', transferId);
                }
            );
        };

        var abort = function abort() {
            // no request running, can't abort
            if (!state.request) return;

            // stop updater
            state.perceivedPerformanceUpdater.clear();

            // abort actual request
            if (state.request.abort) state.request.abort();

            // if has response object, we've completed the request
            state.complete = true;
        };

        var reset = function reset() {
            abort();
            state.complete = false;
            state.perceivedProgress = 0;
            state.progress = 0;
            state.timestamp = null;
            state.perceivedDuration = 0;
            state.duration = 0;
            state.request = null;
            state.response = null;
        };

        var getProgress = allowMinimumUploadDuration
            ? function() {
                  return state.progress ? Math.min(state.progress, state.perceivedProgress) : null;
              }
            : function() {
                  return state.progress || null;
              };

        var getDuration = allowMinimumUploadDuration
            ? function() {
                  return Math.min(state.duration, state.perceivedDuration);
              }
            : function() {
                  return state.duration;
              };

        var api = Object.assign({}, on(), {
            process: process, // start processing file
            abort: abort, // abort active process request
            getProgress: getProgress,
            getDuration: getDuration,
            reset: reset,
        });

        return api;
    };

    var getFilenameWithoutExtension = function getFilenameWithoutExtension(name) {
        return name.substring(0, name.lastIndexOf('.')) || name;
    };

    var createFileStub = function createFileStub(source) {
        var data = [source.name, source.size, source.type];

        // is blob or base64, then we need to set the name
        if (source instanceof Blob || isBase64DataURI(source)) {
            data[0] = source.name || getDateString();
        } else if (isBase64DataURI(source)) {
            // if is base64 data uri we need to determine the average size and type
            data[1] = source.length;
            data[2] = getMimeTypeFromBase64DataURI(source);
        } else if (isString(source)) {
            // url
            data[0] = getFilenameFromURL(source);
            data[1] = 0;
            data[2] = 'application/octet-stream';
        }

        return {
            name: data[0],
            size: data[1],
            type: data[2],
        };
    };

    var isFile = function isFile(value) {
        return !!(value instanceof File || (value instanceof Blob && value.name));
    };

    var deepCloneObject = function deepCloneObject(src) {
        if (!isObject(src)) return src;
        var target = isArray(src) ? [] : {};
        for (var key in src) {
            if (!src.hasOwnProperty(key)) continue;
            var v = src[key];
            target[key] = v && isObject(v) ? deepCloneObject(v) : v;
        }
        return target;
    };

    var createItem = function createItem() {
        var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var serverFileReference =
            arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        // unique id for this item, is used to identify the item across views
        var id = getUniqueId();

        /**
         * Internal item state
         */
        var state = {
            // is archived
            archived: false,

            // if is frozen, no longer fires events
            frozen: false,

            // removed from view
            released: false,

            // original source
            source: null,

            // file model reference
            file: file,

            // id of file on server
            serverFileReference: serverFileReference,

            // id of file transfer on server
            transferId: null,

            // is aborted
            processingAborted: false,

            // current item status
            status: serverFileReference ? ItemStatus.PROCESSING_COMPLETE : ItemStatus.INIT,

            // active processes
            activeLoader: null,
            activeProcessor: null,
        };

        // callback used when abort processing is called to link back to the resolve method
        var abortProcessingRequestComplete = null;

        /**
         * Externally added item metadata
         */
        var metadata = {};

        // item data
        var setStatus = function setStatus(status) {
            return (state.status = status);
        };

        // fire event unless the item has been archived
        var fire = function fire(event) {
            if (state.released || state.frozen) return;
            for (
                var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
                _key < _len;
                _key++
            ) {
                params[_key - 1] = arguments[_key];
            }
            api.fire.apply(api, [event].concat(params));
        };

        // file data
        var getFileExtension = function getFileExtension() {
            return getExtensionFromFilename(state.file.name);
        };
        var getFileType = function getFileType() {
            return state.file.type;
        };
        var getFileSize = function getFileSize() {
            return state.file.size;
        };
        var getFile = function getFile() {
            return state.file;
        };

        //
        // logic to load a file
        //
        var load = function load(source, loader, onload) {
            // remember the original item source
            state.source = source;

            // source is known
            api.fireSync('init');

            // file stub is already there
            if (state.file) {
                api.fireSync('load-skip');
                return;
            }

            // set a stub file object while loading the actual data
            state.file = createFileStub(source);

            // starts loading
            loader.on('init', function() {
                fire('load-init');
            });

            // we'eve received a size indication, let's update the stub
            loader.on('meta', function(meta) {
                // set size of file stub
                state.file.size = meta.size;

                // set name of file stub
                state.file.filename = meta.filename;

                // if has received source, we done
                if (meta.source) {
                    origin = FileOrigin.LIMBO;
                    state.serverFileReference = meta.source;
                    state.status = ItemStatus.PROCESSING_COMPLETE;
                }

                // size has been updated
                fire('load-meta');
            });

            // the file is now loading we need to update the progress indicators
            loader.on('progress', function(progress) {
                setStatus(ItemStatus.LOADING);

                fire('load-progress', progress);
            });

            // an error was thrown while loading the file, we need to switch to error state
            loader.on('error', function(error) {
                setStatus(ItemStatus.LOAD_ERROR);

                fire('load-request-error', error);
            });

            // user or another process aborted the file load (cannot retry)
            loader.on('abort', function() {
                setStatus(ItemStatus.INIT);
                fire('load-abort');
            });

            // done loading
            loader.on('load', function(file) {
                // as we've now loaded the file the loader is no longer required
                state.activeLoader = null;

                // called when file has loaded succesfully
                var success = function success(result) {
                    // set (possibly) transformed file
                    state.file = isFile(result) ? result : state.file;

                    // file received
                    if (origin === FileOrigin.LIMBO && state.serverFileReference) {
                        setStatus(ItemStatus.PROCESSING_COMPLETE);
                    } else {
                        setStatus(ItemStatus.IDLE);
                    }

                    fire('load');
                };

                var error = function error(result) {
                    // set original file
                    state.file = file;
                    fire('load-meta');

                    setStatus(ItemStatus.LOAD_ERROR);
                    fire('load-file-error', result);
                };

                // if we already have a server file reference, we don't need to call the onload method
                if (state.serverFileReference) {
                    success(file);
                    return;
                }

                // no server id, let's give this file the full treatment
                onload(file, success, error);
            });

            // set loader source data
            loader.setSource(source);

            // set as active loader
            state.activeLoader = loader;

            // load the source data
            loader.load();
        };

        var retryLoad = function retryLoad() {
            if (!state.activeLoader) {
                return;
            }
            state.activeLoader.load();
        };

        var abortLoad = function abortLoad() {
            if (state.activeLoader) {
                state.activeLoader.abort();
                return;
            }
            setStatus(ItemStatus.INIT);
            fire('load-abort');
        };

        //
        // logic to process a file
        //
        var process = function process(processor, onprocess) {
            // processing was aborted
            if (state.processingAborted) {
                state.processingAborted = false;
                return;
            }

            // now processing
            setStatus(ItemStatus.PROCESSING);

            // reset abort callback
            abortProcessingRequestComplete = null;

            // if no file loaded we'll wait for the load event
            if (!(state.file instanceof Blob)) {
                api.on('load', function() {
                    process(processor, onprocess);
                });
                return;
            }

            // setup processor
            processor.on('load', function(serverFileReference) {
                // need this id to be able to revert the upload
                state.transferId = null;
                state.serverFileReference = serverFileReference;
            });

            // register transfer id
            processor.on('transfer', function(transferId) {
                // need this id to be able to revert the upload
                state.transferId = transferId;
            });

            processor.on('load-perceived', function(serverFileReference) {
                // no longer required
                state.activeProcessor = null;

                // need this id to be able to rever the upload
                state.transferId = null;
                state.serverFileReference = serverFileReference;

                setStatus(ItemStatus.PROCESSING_COMPLETE);
                fire('process-complete', serverFileReference);
            });

            processor.on('start', function() {
                fire('process-start');
            });

            processor.on('error', function(error) {
                state.activeProcessor = null;
                setStatus(ItemStatus.PROCESSING_ERROR);
                fire('process-error', error);
            });

            processor.on('abort', function(serverFileReference) {
                state.activeProcessor = null;

                // if file was uploaded but processing was cancelled during perceived processor time store file reference
                state.serverFileReference = serverFileReference;

                setStatus(ItemStatus.IDLE);
                fire('process-abort');

                // has timeout so doesn't interfere with remove action
                if (abortProcessingRequestComplete) {
                    abortProcessingRequestComplete();
                }
            });

            processor.on('progress', function(progress) {
                fire('process-progress', progress);
            });

            // when successfully transformed
            var success = function success(file) {
                // if was archived in the mean time, don't process
                if (state.archived) return;

                // process file!
                processor.process(file, Object.assign({}, metadata));
            };

            // something went wrong during transform phase
            var error = console.error;

            // start processing the file
            onprocess(state.file, success, error);

            // set as active processor
            state.activeProcessor = processor;
        };

        var requestProcessing = function requestProcessing() {
            state.processingAborted = false;
            setStatus(ItemStatus.PROCESSING_QUEUED);
        };

        var abortProcessing = function abortProcessing() {
            return new Promise(function(resolve) {
                if (!state.activeProcessor) {
                    state.processingAborted = true;

                    setStatus(ItemStatus.IDLE);
                    fire('process-abort');

                    resolve();
                    return;
                }

                abortProcessingRequestComplete = function abortProcessingRequestComplete() {
                    resolve();
                };

                state.activeProcessor.abort();
            });
        };

        //
        // logic to revert a processed file
        //
        var revert = function revert(revertFileUpload, forceRevert) {
            return new Promise(function(resolve, reject) {
                // a completed upload will have a serverFileReference, a failed chunked upload where
                // getting a serverId succeeded but >=0 chunks have been uploaded will have transferId set
                var serverTransferId =
                    state.serverFileReference !== null
                        ? state.serverFileReference
                        : state.transferId;

                // cannot revert without a server id for this process
                if (serverTransferId === null) {
                    resolve();
                    return;
                }

                // revert the upload (fire and forget)
                revertFileUpload(
                    serverTransferId,
                    function() {
                        // reset file server id and transfer id as now it's not available on the server
                        state.serverFileReference = null;
                        state.transferId = null;
                        resolve();
                    },
                    function(error) {
                        // don't set error state when reverting is optional, it will always resolve
                        if (!forceRevert) {
                            resolve();
                            return;
                        }

                        // oh no errors
                        setStatus(ItemStatus.PROCESSING_REVERT_ERROR);
                        fire('process-revert-error');
                        reject(error);
                    }
                );

                // fire event
                setStatus(ItemStatus.IDLE);
                fire('process-revert');
            });
        };

        // exposed methods
        var _setMetadata = function setMetadata(key, value, silent) {
            var keys = key.split('.');
            var root = keys[0];
            var last = keys.pop();
            var data = metadata;
            keys.forEach(function(key) {
                return (data = data[key]);
            });

            // compare old value against new value, if they're the same, we're not updating
            if (JSON.stringify(data[last]) === JSON.stringify(value)) return;

            // update value
            data[last] = value;

            // fire update
            fire('metadata-update', {
                key: root,
                value: metadata[root],
                silent: silent,
            });
        };

        var getMetadata = function getMetadata(key) {
            return deepCloneObject(key ? metadata[key] : metadata);
        };

        var api = Object.assign(
            {
                id: {
                    get: function get() {
                        return id;
                    },
                },
                origin: {
                    get: function get() {
                        return origin;
                    },
                    set: function set(value) {
                        return (origin = value);
                    },
                },
                serverId: {
                    get: function get() {
                        return state.serverFileReference;
                    },
                },
                transferId: {
                    get: function get() {
                        return state.transferId;
                    },
                },
                status: {
                    get: function get() {
                        return state.status;
                    },
                },
                filename: {
                    get: function get() {
                        return state.file.name;
                    },
                },
                filenameWithoutExtension: {
                    get: function get() {
                        return getFilenameWithoutExtension(state.file.name);
                    },
                },
                fileExtension: { get: getFileExtension },
                fileType: { get: getFileType },
                fileSize: { get: getFileSize },
                file: { get: getFile },
                relativePath: {
                    get: function get() {
                        return state.file._relativePath;
                    },
                },

                source: {
                    get: function get() {
                        return state.source;
                    },
                },

                getMetadata: getMetadata,
                setMetadata: function setMetadata(key, value, silent) {
                    if (isObject(key)) {
                        var data = key;
                        Object.keys(data).forEach(function(key) {
                            _setMetadata(key, data[key], value);
                        });
                        return key;
                    }
                    _setMetadata(key, value, silent);
                    return value;
                },

                extend: function extend(name, handler) {
                    return (itemAPI[name] = handler);
                },

                abortLoad: abortLoad,
                retryLoad: retryLoad,
                requestProcessing: requestProcessing,
                abortProcessing: abortProcessing,

                load: load,
                process: process,
                revert: revert,
            },

            on(),
            {
                freeze: function freeze() {
                    return (state.frozen = true);
                },

                release: function release() {
                    return (state.released = true);
                },
                released: {
                    get: function get() {
                        return state.released;
                    },
                },

                archive: function archive() {
                    return (state.archived = true);
                },
                archived: {
                    get: function get() {
                        return state.archived;
                    },
                },
            }
        );

        // create it here instead of returning it instantly so we can extend it later
        var itemAPI = createObject(api);

        return itemAPI;
    };

    var getItemIndexByQuery = function getItemIndexByQuery(items, query) {
        // just return first index
        if (isEmpty(query)) {
            return 0;
        }

        // invalid queries
        if (!isString(query)) {
            return -1;
        }

        // return item by id (or -1 if not found)
        return items.findIndex(function(item) {
            return item.id === query;
        });
    };

    var getItemById = function getItemById(items, itemId) {
        var index = getItemIndexByQuery(items, itemId);
        if (index < 0) {
            return;
        }
        return items[index] || null;
    };

    var fetchBlob = function fetchBlob(url, load, error, progress, abort, headers) {
        var request = sendRequest(null, url, {
            method: 'GET',
            responseType: 'blob',
        });

        request.onload = function(xhr) {
            // get headers
            var headers = xhr.getAllResponseHeaders();

            // get filename
            var filename = getFileInfoFromHeaders(headers).name || getFilenameFromURL(url);

            // create response
            load(
                createResponse('load', xhr.status, getFileFromBlob(xhr.response, filename), headers)
            );
        };

        request.onerror = function(xhr) {
            error(createResponse('error', xhr.status, xhr.statusText, xhr.getAllResponseHeaders()));
        };

        request.onheaders = function(xhr) {
            headers(createResponse('headers', xhr.status, null, xhr.getAllResponseHeaders()));
        };

        request.ontimeout = createTimeoutResponse(error);
        request.onprogress = progress;
        request.onabort = abort;

        // should return request
        return request;
    };

    var getDomainFromURL = function getDomainFromURL(url) {
        if (url.indexOf('//') === 0) {
            url = location.protocol + url;
        }
        return url
            .toLowerCase()
            .replace('blob:', '')
            .replace(/([a-z])?:\/\//, '$1')
            .split('/')[0];
    };

    var isExternalURL = function isExternalURL(url) {
        return (
            (url.indexOf(':') > -1 || url.indexOf('//') > -1) &&
            getDomainFromURL(location.href) !== getDomainFromURL(url)
        );
    };

    var dynamicLabel = function dynamicLabel(label) {
        return function() {
            return isFunction(label) ? label.apply(void 0, arguments) : label;
        };
    };

    var isMockItem = function isMockItem(item) {
        return !isFile(item.file);
    };

    var listUpdated = function listUpdated(dispatch, state) {
        clearTimeout(state.listUpdateTimeout);
        state.listUpdateTimeout = setTimeout(function() {
            dispatch('DID_UPDATE_ITEMS', { items: getActiveItems(state.items) });
        }, 0);
    };

    var optionalPromise = function optionalPromise(fn) {
        for (
            var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
            _key < _len;
            _key++
        ) {
            params[_key - 1] = arguments[_key];
        }
        return new Promise(function(resolve) {
            if (!fn) {
                return resolve(true);
            }

            var result = fn.apply(void 0, params);

            if (result == null) {
                return resolve(true);
            }

            if (typeof result === 'boolean') {
                return resolve(result);
            }

            if (typeof result.then === 'function') {
                result.then(resolve);
            }
        });
    };

    var sortItems = function sortItems(state, compare) {
        state.items.sort(function(a, b) {
            return compare(createItemAPI(a), createItemAPI(b));
        });
    };

    // returns item based on state
    var getItemByQueryFromState = function getItemByQueryFromState(state, itemHandler) {
        return function() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var query = _ref.query,
                _ref$success = _ref.success,
                success = _ref$success === void 0 ? function() {} : _ref$success,
                _ref$failure = _ref.failure,
                failure = _ref$failure === void 0 ? function() {} : _ref$failure,
                options = _objectWithoutProperties(_ref, ['query', 'success', 'failure']);
            var item = getItemByQuery(state.items, query);
            if (!item) {
                failure({
                    error: createResponse('error', 0, 'Item not found'),
                    file: null,
                });

                return;
            }
            itemHandler(item, success, failure, options || {});
        };
    };

    var actions = function actions(dispatch, query, state) {
        return {
            /**
             * Aborts all ongoing processes
             */
            ABORT_ALL: function ABORT_ALL() {
                getActiveItems(state.items).forEach(function(item) {
                    item.freeze();
                    item.abortLoad();
                    item.abortProcessing();
                });
            },

            /**
             * Sets initial files
             */
            DID_SET_FILES: function DID_SET_FILES(_ref2) {
                var _ref2$value = _ref2.value,
                    value = _ref2$value === void 0 ? [] : _ref2$value;
                // map values to file objects
                var files = value.map(function(file) {
                    return {
                        source: file.source ? file.source : file,
                        options: file.options,
                    };
                });

                // loop over files, if file is in list, leave it be, if not, remove
                // test if items should be moved
                var activeItems = getActiveItems(state.items);

                activeItems.forEach(function(item) {
                    // if item not is in new value, remove
                    if (
                        !files.find(function(file) {
                            return file.source === item.source || file.source === item.file;
                        })
                    ) {
                        dispatch('REMOVE_ITEM', { query: item, remove: false });
                    }
                });

                // add new files
                activeItems = getActiveItems(state.items);
                files.forEach(function(file, index) {
                    // if file is already in list
                    if (
                        activeItems.find(function(item) {
                            return item.source === file.source || item.file === file.source;
                        })
                    )
                        return;

                    // not in list, add
                    dispatch(
                        'ADD_ITEM',
                        Object.assign({}, file, {
                            interactionMethod: InteractionMethod.NONE,
                            index: index,
                        })
                    );
                });
            },

            DID_UPDATE_ITEM_METADATA: function DID_UPDATE_ITEM_METADATA(_ref3) {
                var id = _ref3.id,
                    action = _ref3.action,
                    change = _ref3.change;
                // don't do anything
                if (change.silent) return;

                // if is called multiple times in close succession we combined all calls together to save resources
                clearTimeout(state.itemUpdateTimeout);
                state.itemUpdateTimeout = setTimeout(function() {
                    var item = getItemById(state.items, id);

                    // only revert and attempt to upload when we're uploading to a server
                    if (!query('IS_ASYNC')) {
                        // should we update the output data
                        applyFilterChain('SHOULD_PREPARE_OUTPUT', false, {
                            item: item,
                            query: query,
                            action: action,
                            change: change,
                        }).then(function(shouldPrepareOutput) {
                            // plugins determined the output data should be prepared (or not), can be adjusted with beforePrepareOutput hook
                            var beforePrepareFile = query('GET_BEFORE_PREPARE_FILE');
                            if (beforePrepareFile)
                                shouldPrepareOutput = beforePrepareFile(item, shouldPrepareOutput);

                            if (!shouldPrepareOutput) return;

                            dispatch(
                                'REQUEST_PREPARE_OUTPUT',
                                {
                                    query: id,
                                    item: item,
                                    success: function success(file) {
                                        dispatch('DID_PREPARE_OUTPUT', { id: id, file: file });
                                    },
                                },

                                true
                            );
                        });

                        return;
                    }

                    // if is local item we need to enable upload button so change can be propagated to server
                    if (item.origin === FileOrigin.LOCAL) {
                        dispatch('DID_LOAD_ITEM', {
                            id: item.id,
                            error: null,
                            serverFileReference: item.source,
                        });
                    }

                    // for async scenarios
                    var upload = function upload() {
                        // we push this forward a bit so the interface is updated correctly
                        setTimeout(function() {
                            dispatch('REQUEST_ITEM_PROCESSING', { query: id });
                        }, 32);
                    };

                    var revert = function revert(doUpload) {
                        item.revert(
                            createRevertFunction(
                                state.options.server.url,
                                state.options.server.revert
                            ),
                            query('GET_FORCE_REVERT')
                        )
                            .then(doUpload ? upload : function() {})
                            .catch(function() {});
                    };

                    var abort = function abort(doUpload) {
                        item.abortProcessing().then(doUpload ? upload : function() {});
                    };

                    // if we should re-upload the file immediately
                    if (item.status === ItemStatus.PROCESSING_COMPLETE) {
                        return revert(state.options.instantUpload);
                    }

                    // if currently uploading, cancel upload
                    if (item.status === ItemStatus.PROCESSING) {
                        return abort(state.options.instantUpload);
                    }

                    if (state.options.instantUpload) {
                        upload();
                    }
                }, 0);
            },

            MOVE_ITEM: function MOVE_ITEM(_ref4) {
                var query = _ref4.query,
                    index = _ref4.index;
                var item = getItemByQuery(state.items, query);
                if (!item) return;
                var currentIndex = state.items.indexOf(item);
                index = limit(index, 0, state.items.length - 1);
                if (currentIndex === index) return;
                state.items.splice(index, 0, state.items.splice(currentIndex, 1)[0]);
            },

            SORT: function SORT(_ref5) {
                var compare = _ref5.compare;
                sortItems(state, compare);
                dispatch('DID_SORT_ITEMS', {
                    items: query('GET_ACTIVE_ITEMS'),
                });
            },

            ADD_ITEMS: function ADD_ITEMS(_ref6) {
                var items = _ref6.items,
                    index = _ref6.index,
                    interactionMethod = _ref6.interactionMethod,
                    _ref6$success = _ref6.success,
                    success = _ref6$success === void 0 ? function() {} : _ref6$success,
                    _ref6$failure = _ref6.failure,
                    failure = _ref6$failure === void 0 ? function() {} : _ref6$failure;
                var currentIndex = index;

                if (index === -1 || typeof index === 'undefined') {
                    var insertLocation = query('GET_ITEM_INSERT_LOCATION');
                    var totalItems = query('GET_TOTAL_ITEMS');
                    currentIndex = insertLocation === 'before' ? 0 : totalItems;
                }

                var ignoredFiles = query('GET_IGNORED_FILES');
                var isValidFile = function isValidFile(source) {
                    return isFile(source)
                        ? !ignoredFiles.includes(source.name.toLowerCase())
                        : !isEmpty(source);
                };
                var validItems = items.filter(isValidFile);

                var promises = validItems.map(function(source) {
                    return new Promise(function(resolve, reject) {
                        dispatch('ADD_ITEM', {
                            interactionMethod: interactionMethod,
                            source: source.source || source,
                            success: resolve,
                            failure: reject,
                            index: currentIndex++,
                            options: source.options || {},
                        });
                    });
                });

                Promise.all(promises)
                    .then(success)
                    .catch(failure);
            },

            /**
             * @param source
             * @param index
             * @param interactionMethod
             */
            ADD_ITEM: function ADD_ITEM(_ref7) {
                var source = _ref7.source,
                    _ref7$index = _ref7.index,
                    index = _ref7$index === void 0 ? -1 : _ref7$index,
                    interactionMethod = _ref7.interactionMethod,
                    _ref7$success = _ref7.success,
                    success = _ref7$success === void 0 ? function() {} : _ref7$success,
                    _ref7$failure = _ref7.failure,
                    failure = _ref7$failure === void 0 ? function() {} : _ref7$failure,
                    _ref7$options = _ref7.options,
                    options = _ref7$options === void 0 ? {} : _ref7$options;
                // if no source supplied
                if (isEmpty(source)) {
                    failure({
                        error: createResponse('error', 0, 'No source'),
                        file: null,
                    });

                    return;
                }

                // filter out invalid file items, used to filter dropped directory contents
                if (
                    isFile(source) &&
                    state.options.ignoredFiles.includes(source.name.toLowerCase())
                ) {
                    // fail silently
                    return;
                }

                // test if there's still room in the list of files
                if (!hasRoomForItem(state)) {
                    // if multiple allowed, we can't replace
                    // or if only a single item is allowed but we're not allowed to replace it we exit
                    if (
                        state.options.allowMultiple ||
                        (!state.options.allowMultiple && !state.options.allowReplace)
                    ) {
                        var error = createResponse('warning', 0, 'Max files');

                        dispatch('DID_THROW_MAX_FILES', {
                            source: source,
                            error: error,
                        });

                        failure({ error: error, file: null });

                        return;
                    }

                    // let's replace the item
                    // id of first item we're about to remove
                    var _item = getActiveItems(state.items)[0];

                    // if has been processed remove it from the server as well
                    if (
                        _item.status === ItemStatus.PROCESSING_COMPLETE ||
                        _item.status === ItemStatus.PROCESSING_REVERT_ERROR
                    ) {
                        var forceRevert = query('GET_FORCE_REVERT');
                        _item
                            .revert(
                                createRevertFunction(
                                    state.options.server.url,
                                    state.options.server.revert
                                ),
                                forceRevert
                            )
                            .then(function() {
                                if (!forceRevert) return;

                                // try to add now
                                dispatch('ADD_ITEM', {
                                    source: source,
                                    index: index,
                                    interactionMethod: interactionMethod,
                                    success: success,
                                    failure: failure,
                                    options: options,
                                });
                            })
                            .catch(function() {}); // no need to handle this catch state for now

                        if (forceRevert) return;
                    }

                    // remove first item as it will be replaced by this item
                    dispatch('REMOVE_ITEM', { query: _item.id });
                }

                // where did the file originate
                var origin =
                    options.type === 'local'
                        ? FileOrigin.LOCAL
                        : options.type === 'limbo'
                        ? FileOrigin.LIMBO
                        : FileOrigin.INPUT;

                // create a new blank item
                var item = createItem(
                    // where did this file come from
                    origin,

                    // an input file never has a server file reference
                    origin === FileOrigin.INPUT ? null : source,

                    // file mock data, if defined
                    options.file
                );

                // set initial meta data
                Object.keys(options.metadata || {}).forEach(function(key) {
                    item.setMetadata(key, options.metadata[key]);
                });

                // created the item, let plugins add methods
                applyFilters('DID_CREATE_ITEM', item, { query: query, dispatch: dispatch });

                // where to insert new items
                var itemInsertLocation = query('GET_ITEM_INSERT_LOCATION');

                // adjust index if is not allowed to pick location
                if (!state.options.itemInsertLocationFreedom) {
                    index = itemInsertLocation === 'before' ? -1 : state.items.length;
                }

                // add item to list
                insertItem(state.items, item, index);

                // sort items in list
                if (isFunction(itemInsertLocation) && source) {
                    sortItems(state, itemInsertLocation);
                }

                // get a quick reference to the item id
                var id = item.id;

                // observe item events
                item.on('init', function() {
                    dispatch('DID_INIT_ITEM', { id: id });
                });

                item.on('load-init', function() {
                    dispatch('DID_START_ITEM_LOAD', { id: id });
                });

                item.on('load-meta', function() {
                    dispatch('DID_UPDATE_ITEM_META', { id: id });
                });

                item.on('load-progress', function(progress) {
                    dispatch('DID_UPDATE_ITEM_LOAD_PROGRESS', { id: id, progress: progress });
                });

                item.on('load-request-error', function(error) {
                    var mainStatus = dynamicLabel(state.options.labelFileLoadError)(error);

                    // is client error, no way to recover
                    if (error.code >= 400 && error.code < 500) {
                        dispatch('DID_THROW_ITEM_INVALID', {
                            id: id,
                            error: error,
                            status: {
                                main: mainStatus,
                                sub: error.code + ' (' + error.body + ')',
                            },
                        });

                        // reject the file so can be dealt with through API
                        failure({ error: error, file: createItemAPI(item) });
                        return;
                    }

                    // is possible server error, so might be possible to retry
                    dispatch('DID_THROW_ITEM_LOAD_ERROR', {
                        id: id,
                        error: error,
                        status: {
                            main: mainStatus,
                            sub: state.options.labelTapToRetry,
                        },
                    });
                });

                item.on('load-file-error', function(error) {
                    dispatch('DID_THROW_ITEM_INVALID', {
                        id: id,
                        error: error.status,
                        status: error.status,
                    });

                    failure({ error: error.status, file: createItemAPI(item) });
                });

                item.on('load-abort', function() {
                    dispatch('REMOVE_ITEM', { query: id });
                });

                item.on('load-skip', function() {
                    dispatch('COMPLETE_LOAD_ITEM', {
                        query: id,
                        item: item,
                        data: {
                            source: source,
                            success: success,
                        },
                    });
                });

                item.on('load', function() {
                    var handleAdd = function handleAdd(shouldAdd) {
                        // no should not add this file
                        if (!shouldAdd) {
                            dispatch('REMOVE_ITEM', {
                                query: id,
                            });

                            return;
                        }

                        // now interested in metadata updates
                        item.on('metadata-update', function(change) {
                            dispatch('DID_UPDATE_ITEM_METADATA', { id: id, change: change });
                        });

                        // let plugins decide if the output data should be prepared at this point
                        // means we'll do this and wait for idle state
                        applyFilterChain('SHOULD_PREPARE_OUTPUT', false, {
                            item: item,
                            query: query,
                        }).then(function(shouldPrepareOutput) {
                            // plugins determined the output data should be prepared (or not), can be adjusted with beforePrepareOutput hook
                            var beforePrepareFile = query('GET_BEFORE_PREPARE_FILE');
                            if (beforePrepareFile)
                                shouldPrepareOutput = beforePrepareFile(item, shouldPrepareOutput);

                            var loadComplete = function loadComplete() {
                                dispatch('COMPLETE_LOAD_ITEM', {
                                    query: id,
                                    item: item,
                                    data: {
                                        source: source,
                                        success: success,
                                    },
                                });

                                listUpdated(dispatch, state);
                            };

                            // exit
                            if (shouldPrepareOutput) {
                                // wait for idle state and then run PREPARE_OUTPUT
                                dispatch(
                                    'REQUEST_PREPARE_OUTPUT',
                                    {
                                        query: id,
                                        item: item,
                                        success: function success(file) {
                                            dispatch('DID_PREPARE_OUTPUT', { id: id, file: file });
                                            loadComplete();
                                        },
                                    },

                                    true
                                );

                                return;
                            }

                            loadComplete();
                        });
                    };

                    // item loaded, allow plugins to
                    // - read data (quickly)
                    // - add metadata
                    applyFilterChain('DID_LOAD_ITEM', item, { query: query, dispatch: dispatch })
                        .then(function() {
                            optionalPromise(query('GET_BEFORE_ADD_FILE'), createItemAPI(item)).then(
                                handleAdd
                            );
                        })
                        .catch(function(e) {
                            if (!e || !e.error || !e.status) return handleAdd(false);
                            dispatch('DID_THROW_ITEM_INVALID', {
                                id: id,
                                error: e.error,
                                status: e.status,
                            });
                        });
                });

                item.on('process-start', function() {
                    dispatch('DID_START_ITEM_PROCESSING', { id: id });
                });

                item.on('process-progress', function(progress) {
                    dispatch('DID_UPDATE_ITEM_PROCESS_PROGRESS', { id: id, progress: progress });
                });

                item.on('process-error', function(error) {
                    dispatch('DID_THROW_ITEM_PROCESSING_ERROR', {
                        id: id,
                        error: error,
                        status: {
                            main: dynamicLabel(state.options.labelFileProcessingError)(error),
                            sub: state.options.labelTapToRetry,
                        },
                    });
                });

                item.on('process-revert-error', function(error) {
                    dispatch('DID_THROW_ITEM_PROCESSING_REVERT_ERROR', {
                        id: id,
                        error: error,
                        status: {
                            main: dynamicLabel(state.options.labelFileProcessingRevertError)(error),
                            sub: state.options.labelTapToRetry,
                        },
                    });
                });

                item.on('process-complete', function(serverFileReference) {
                    dispatch('DID_COMPLETE_ITEM_PROCESSING', {
                        id: id,
                        error: null,
                        serverFileReference: serverFileReference,
                    });

                    dispatch('DID_DEFINE_VALUE', { id: id, value: serverFileReference });
                });

                item.on('process-abort', function() {
                    dispatch('DID_ABORT_ITEM_PROCESSING', { id: id });
                });

                item.on('process-revert', function() {
                    dispatch('DID_REVERT_ITEM_PROCESSING', { id: id });
                    dispatch('DID_DEFINE_VALUE', { id: id, value: null });
                });

                // let view know the item has been inserted
                dispatch('DID_ADD_ITEM', {
                    id: id,
                    index: index,
                    interactionMethod: interactionMethod,
                });

                listUpdated(dispatch, state);

                // start loading the source
                var _ref8 = state.options.server || {},
                    url = _ref8.url,
                    load = _ref8.load,
                    restore = _ref8.restore,
                    fetch = _ref8.fetch;

                item.load(
                    source,

                    // this creates a function that loads the file based on the type of file (string, base64, blob, file) and location of file (local, remote, limbo)
                    createFileLoader(
                        origin === FileOrigin.INPUT
                            ? // input, if is remote, see if should use custom fetch, else use default fetchBlob
                              isString(source) && isExternalURL(source)
                                ? fetch
                                    ? createFetchFunction(url, fetch)
                                    : fetchBlob // remote url
                                : fetchBlob // try to fetch url
                            : // limbo or local
                            origin === FileOrigin.LIMBO
                            ? createFetchFunction(url, restore) // limbo
                            : createFetchFunction(url, load) // local
                    ),

                    // called when the file is loaded so it can be piped through the filters
                    function(file, success, error) {
                        // let's process the file
                        applyFilterChain('LOAD_FILE', file, { query: query })
                            .then(success)
                            .catch(error);
                    }
                );
            },

            REQUEST_PREPARE_OUTPUT: function REQUEST_PREPARE_OUTPUT(_ref9) {
                var item = _ref9.item,
                    success = _ref9.success,
                    _ref9$failure = _ref9.failure,
                    failure = _ref9$failure === void 0 ? function() {} : _ref9$failure;
                // error response if item archived
                var err = {
                    error: createResponse('error', 0, 'Item not found'),
                    file: null,
                };

                // don't handle archived items, an item could have been archived (load aborted) while waiting to be prepared
                if (item.archived) return failure(err);

                // allow plugins to alter the file data
                applyFilterChain('PREPARE_OUTPUT', item.file, { query: query, item: item }).then(
                    function(result) {
                        applyFilterChain('COMPLETE_PREPARE_OUTPUT', result, {
                            query: query,
                            item: item,
                        }).then(function(result) {
                            // don't handle archived items, an item could have been archived (load aborted) while being prepared
                            if (item.archived) return failure(err);

                            // we done!
                            success(result);
                        });
                    }
                );
            },

            COMPLETE_LOAD_ITEM: function COMPLETE_LOAD_ITEM(_ref10) {
                var item = _ref10.item,
                    data = _ref10.data;
                var success = data.success,
                    source = data.source;

                // sort items in list
                var itemInsertLocation = query('GET_ITEM_INSERT_LOCATION');
                if (isFunction(itemInsertLocation) && source) {
                    sortItems(state, itemInsertLocation);
                }

                // let interface know the item has loaded
                dispatch('DID_LOAD_ITEM', {
                    id: item.id,
                    error: null,
                    serverFileReference: item.origin === FileOrigin.INPUT ? null : source,
                });

                // item has been successfully loaded and added to the
                // list of items so can now be safely returned for use
                success(createItemAPI(item));

                // if this is a local server file we need to show a different state
                if (item.origin === FileOrigin.LOCAL) {
                    dispatch('DID_LOAD_LOCAL_ITEM', { id: item.id });
                    return;
                }

                // if is a temp server file we prevent async upload call here (as the file is already on the server)
                if (item.origin === FileOrigin.LIMBO) {
                    dispatch('DID_COMPLETE_ITEM_PROCESSING', {
                        id: item.id,
                        error: null,
                        serverFileReference: source,
                    });

                    dispatch('DID_DEFINE_VALUE', {
                        id: item.id,
                        value: item.serverId || source,
                    });

                    return;
                }

                // id we are allowed to upload the file immediately, lets do it
                if (query('IS_ASYNC') && state.options.instantUpload) {
                    dispatch('REQUEST_ITEM_PROCESSING', { query: item.id });
                }
            },

            RETRY_ITEM_LOAD: getItemByQueryFromState(state, function(item) {
                // try loading the source one more time
                item.retryLoad();
            }),

            REQUEST_ITEM_PREPARE: getItemByQueryFromState(state, function(item, _success, failure) {
                dispatch(
                    'REQUEST_PREPARE_OUTPUT',
                    {
                        query: item.id,
                        item: item,
                        success: function success(file) {
                            dispatch('DID_PREPARE_OUTPUT', { id: item.id, file: file });
                            _success({
                                file: item,
                                output: file,
                            });
                        },
                        failure: failure,
                    },

                    true
                );
            }),

            REQUEST_ITEM_PROCESSING: getItemByQueryFromState(state, function(
                item,
                success,
                failure
            ) {
                // cannot be queued (or is already queued)
                var itemCanBeQueuedForProcessing =
                    // waiting for something
                    item.status === ItemStatus.IDLE ||
                    // processing went wrong earlier
                    item.status === ItemStatus.PROCESSING_ERROR;

                // not ready to be processed
                if (!itemCanBeQueuedForProcessing) {
                    var processNow = function processNow() {
                        return dispatch('REQUEST_ITEM_PROCESSING', {
                            query: item,
                            success: success,
                            failure: failure,
                        });
                    };

                    var process = function process() {
                        return document.hidden ? processNow() : setTimeout(processNow, 32);
                    };

                    // if already done processing or tried to revert but didn't work, try again
                    if (
                        item.status === ItemStatus.PROCESSING_COMPLETE ||
                        item.status === ItemStatus.PROCESSING_REVERT_ERROR
                    ) {
                        item.revert(
                            createRevertFunction(
                                state.options.server.url,
                                state.options.server.revert
                            ),
                            query('GET_FORCE_REVERT')
                        )
                            .then(process)
                            .catch(function() {}); // don't continue with processing if something went wrong
                    } else if (item.status === ItemStatus.PROCESSING) {
                        item.abortProcessing().then(process);
                    }

                    return;
                }

                // already queued for processing
                if (item.status === ItemStatus.PROCESSING_QUEUED) return;

                item.requestProcessing();

                dispatch('DID_REQUEST_ITEM_PROCESSING', { id: item.id });

                dispatch('PROCESS_ITEM', { query: item, success: success, failure: failure }, true);
            }),

            PROCESS_ITEM: getItemByQueryFromState(state, function(item, success, failure) {
                var maxParallelUploads = query('GET_MAX_PARALLEL_UPLOADS');
                var totalCurrentUploads = query('GET_ITEMS_BY_STATUS', ItemStatus.PROCESSING)
                    .length;

                // queue and wait till queue is freed up
                if (totalCurrentUploads === maxParallelUploads) {
                    // queue for later processing
                    state.processingQueue.push({
                        id: item.id,
                        success: success,
                        failure: failure,
                    });

                    // stop it!
                    return;
                }

                // if was not queued or is already processing exit here
                if (item.status === ItemStatus.PROCESSING) return;

                var processNext = function processNext() {
                    // process queueud items
                    var queueEntry = state.processingQueue.shift();

                    // no items left
                    if (!queueEntry) return;

                    // get item reference
                    var id = queueEntry.id,
                        success = queueEntry.success,
                        failure = queueEntry.failure;
                    var itemReference = getItemByQuery(state.items, id);

                    // if item was archived while in queue, jump to next
                    if (!itemReference || itemReference.archived) {
                        processNext();
                        return;
                    }

                    // process queued item
                    dispatch(
                        'PROCESS_ITEM',
                        { query: id, success: success, failure: failure },
                        true
                    );
                };

                // we done function
                item.onOnce('process-complete', function() {
                    success(createItemAPI(item));
                    processNext();

                    // if origin is local, and we're instant uploading, trigger remove of original
                    // as revert will remove file from list
                    var server = state.options.server;
                    var instantUpload = state.options.instantUpload;
                    if (
                        instantUpload &&
                        item.origin === FileOrigin.LOCAL &&
                        isFunction(server.remove)
                    ) {
                        var noop = function noop() {};
                        item.origin = FileOrigin.LIMBO;
                        state.options.server.remove(item.source, noop, noop);
                    }

                    // All items processed? No errors?
                    var allItemsProcessed =
                        query('GET_ITEMS_BY_STATUS', ItemStatus.PROCESSING_COMPLETE).length ===
                        state.items.length;
                    if (allItemsProcessed) {
                        dispatch('DID_COMPLETE_ITEM_PROCESSING_ALL');
                    }
                });

                // we error function
                item.onOnce('process-error', function(error) {
                    failure({ error: error, file: createItemAPI(item) });
                    processNext();
                });

                // start file processing
                var options = state.options;
                item.process(
                    createFileProcessor(
                        createProcessorFunction(
                            options.server.url,
                            options.server.process,
                            options.name,
                            {
                                chunkTransferId: item.transferId,
                                chunkServer: options.server.patch,
                                chunkUploads: options.chunkUploads,
                                chunkForce: options.chunkForce,
                                chunkSize: options.chunkSize,
                                chunkRetryDelays: options.chunkRetryDelays,
                            }
                        ),

                        {
                            allowMinimumUploadDuration: query('GET_ALLOW_MINIMUM_UPLOAD_DURATION'),
                        }
                    ),

                    // called when the file is about to be processed so it can be piped through the transform filters
                    function(file, success, error) {
                        // allow plugins to alter the file data
                        applyFilterChain('PREPARE_OUTPUT', file, { query: query, item: item })
                            .then(function(file) {
                                dispatch('DID_PREPARE_OUTPUT', { id: item.id, file: file });

                                success(file);
                            })
                            .catch(error);
                    }
                );
            }),

            RETRY_ITEM_PROCESSING: getItemByQueryFromState(state, function(item) {
                dispatch('REQUEST_ITEM_PROCESSING', { query: item });
            }),

            REQUEST_REMOVE_ITEM: getItemByQueryFromState(state, function(item) {
                optionalPromise(query('GET_BEFORE_REMOVE_FILE'), createItemAPI(item)).then(function(
                    shouldRemove
                ) {
                    if (!shouldRemove) {
                        return;
                    }
                    dispatch('REMOVE_ITEM', { query: item });
                });
            }),

            RELEASE_ITEM: getItemByQueryFromState(state, function(item) {
                item.release();
            }),

            REMOVE_ITEM: getItemByQueryFromState(state, function(item, success, failure, options) {
                var removeFromView = function removeFromView() {
                    // get id reference
                    var id = item.id;

                    // archive the item, this does not remove it from the list
                    getItemById(state.items, id).archive();

                    // tell the view the item has been removed
                    dispatch('DID_REMOVE_ITEM', { error: null, id: id, item: item });

                    // now the list has been modified
                    listUpdated(dispatch, state);

                    // correctly removed
                    success(createItemAPI(item));
                };

                // if this is a local file and the `server.remove` function has been configured,
                // send source there so dev can remove file from server
                var server = state.options.server;
                if (
                    item.origin === FileOrigin.LOCAL &&
                    server &&
                    isFunction(server.remove) &&
                    options.remove !== false
                ) {
                    dispatch('DID_START_ITEM_REMOVE', { id: item.id });

                    server.remove(
                        item.source,
                        function() {
                            return removeFromView();
                        },
                        function(status) {
                            dispatch('DID_THROW_ITEM_REMOVE_ERROR', {
                                id: item.id,
                                error: createResponse('error', 0, status, null),
                                status: {
                                    main: dynamicLabel(state.options.labelFileRemoveError)(status),
                                    sub: state.options.labelTapToRetry,
                                },
                            });
                        }
                    );
                } else {
                    // if is requesting revert and can revert need to call revert handler (not calling request_ because that would also trigger beforeRemoveHook)
                    if (
                        (options.revert &&
                            item.origin !== FileOrigin.LOCAL &&
                            item.serverId !== null) ||
                        // if chunked uploads are enabled and we're uploading in chunks for this specific file
                        // or if the file isn't big enough for chunked uploads but chunkForce is set then call
                        // revert before removing from the view...
                        (state.options.chunkUploads && item.file.size > state.options.chunkSize) ||
                        (state.options.chunkUploads && state.options.chunkForce)
                    ) {
                        item.revert(
                            createRevertFunction(
                                state.options.server.url,
                                state.options.server.revert
                            ),
                            query('GET_FORCE_REVERT')
                        );
                    }

                    // can now safely remove from view
                    removeFromView();
                }
            }),

            ABORT_ITEM_LOAD: getItemByQueryFromState(state, function(item) {
                item.abortLoad();
            }),

            ABORT_ITEM_PROCESSING: getItemByQueryFromState(state, function(item) {
                // test if is already processed
                if (item.serverId) {
                    dispatch('REVERT_ITEM_PROCESSING', { id: item.id });
                    return;
                }

                // abort
                item.abortProcessing().then(function() {
                    var shouldRemove = state.options.instantUpload;
                    if (shouldRemove) {
                        dispatch('REMOVE_ITEM', { query: item.id });
                    }
                });
            }),

            REQUEST_REVERT_ITEM_PROCESSING: getItemByQueryFromState(state, function(item) {
                // not instant uploading, revert immediately
                if (!state.options.instantUpload) {
                    dispatch('REVERT_ITEM_PROCESSING', { query: item });
                    return;
                }

                // if we're instant uploading the file will also be removed if we revert,
                // so if a before remove file hook is defined we need to run it now
                var handleRevert = function handleRevert(shouldRevert) {
                    if (!shouldRevert) return;
                    dispatch('REVERT_ITEM_PROCESSING', { query: item });
                };

                var fn = query('GET_BEFORE_REMOVE_FILE');
                if (!fn) {
                    return handleRevert(true);
                }

                var requestRemoveResult = fn(createItemAPI(item));
                if (requestRemoveResult == null) {
                    // undefined or null
                    return handleRevert(true);
                }

                if (typeof requestRemoveResult === 'boolean') {
                    return handleRevert(requestRemoveResult);
                }

                if (typeof requestRemoveResult.then === 'function') {
                    requestRemoveResult.then(handleRevert);
                }
            }),

            REVERT_ITEM_PROCESSING: getItemByQueryFromState(state, function(item) {
                item.revert(
                    createRevertFunction(state.options.server.url, state.options.server.revert),
                    query('GET_FORCE_REVERT')
                )
                    .then(function() {
                        var shouldRemove = state.options.instantUpload || isMockItem(item);
                        if (shouldRemove) {
                            dispatch('REMOVE_ITEM', { query: item.id });
                        }
                    })
                    .catch(function() {});
            }),

            SET_OPTIONS: function SET_OPTIONS(_ref11) {
                var options = _ref11.options;
                // get all keys passed
                var optionKeys = Object.keys(options);

                // get prioritized keyed to include (remove once not in options object)
                var prioritizedOptionKeys = PrioritizedOptions.filter(function(key) {
                    return optionKeys.includes(key);
                });

                // order the keys, prioritized first, then rest
                var orderedOptionKeys = [].concat(
                    _toConsumableArray(prioritizedOptionKeys),
                    _toConsumableArray(
                        Object.keys(options).filter(function(key) {
                            return !prioritizedOptionKeys.includes(key);
                        })
                    )
                );

                // dispatch set event for each option
                orderedOptionKeys.forEach(function(key) {
                    dispatch('SET_' + fromCamels(key, '_').toUpperCase(), {
                        value: options[key],
                    });
                });
            },
        };
    };

    var PrioritizedOptions = ['server'];

    var formatFilename = function formatFilename(name) {
        return name;
    };

    var createElement$1 = function createElement(tagName) {
        return document.createElement(tagName);
    };

    var text = function text(node, value) {
        var textNode = node.childNodes[0];
        if (!textNode) {
            textNode = document.createTextNode(value);
            node.appendChild(textNode);
        } else if (value !== textNode.nodeValue) {
            textNode.nodeValue = value;
        }
    };

    var polarToCartesian = function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        var angleInRadians = (((angleInDegrees % 360) - 90) * Math.PI) / 180.0;
        return {
            x: centerX + radius * Math.cos(angleInRadians),
            y: centerY + radius * Math.sin(angleInRadians),
        };
    };

    var describeArc = function describeArc(x, y, radius, startAngle, endAngle, arcSweep) {
        var start = polarToCartesian(x, y, radius, endAngle);
        var end = polarToCartesian(x, y, radius, startAngle);
        return ['M', start.x, start.y, 'A', radius, radius, 0, arcSweep, 0, end.x, end.y].join(' ');
    };

    var percentageArc = function percentageArc(x, y, radius, from, to) {
        var arcSweep = 1;
        if (to > from && to - from <= 0.5) {
            arcSweep = 0;
        }
        if (from > to && from - to >= 0.5) {
            arcSweep = 0;
        }
        return describeArc(
            x,
            y,
            radius,
            Math.min(0.9999, from) * 360,
            Math.min(0.9999, to) * 360,
            arcSweep
        );
    };

    var create = function create(_ref) {
        var root = _ref.root,
            props = _ref.props;
        // start at 0
        props.spin = false;
        props.progress = 0;
        props.opacity = 0;

        // svg
        var svg = createElement('svg');
        root.ref.path = createElement('path', {
            'stroke-width': 2,
            'stroke-linecap': 'round',
        });

        svg.appendChild(root.ref.path);

        root.ref.svg = svg;

        root.appendChild(svg);
    };

    var write = function write(_ref2) {
        var root = _ref2.root,
            props = _ref2.props;
        if (props.opacity === 0) {
            return;
        }

        if (props.align) {
            root.element.dataset.align = props.align;
        }

        // get width of stroke
        var ringStrokeWidth = parseInt(attr(root.ref.path, 'stroke-width'), 10);

        // calculate size of ring
        var size = root.rect.element.width * 0.5;

        // ring state
        var ringFrom = 0;
        var ringTo = 0;

        // now in busy mode
        if (props.spin) {
            ringFrom = 0;
            ringTo = 0.5;
        } else {
            ringFrom = 0;
            ringTo = props.progress;
        }

        // get arc path
        var coordinates = percentageArc(size, size, size - ringStrokeWidth, ringFrom, ringTo);

        // update progress bar
        attr(root.ref.path, 'd', coordinates);

        // hide while contains 0 value
        attr(root.ref.path, 'stroke-opacity', props.spin || props.progress > 0 ? 1 : 0);
    };

    var progressIndicator = createView({
        tag: 'div',
        name: 'progress-indicator',
        ignoreRectUpdate: true,
        ignoreRect: true,
        create: create,
        write: write,
        mixins: {
            apis: ['progress', 'spin', 'align'],
            styles: ['opacity'],
            animations: {
                opacity: { type: 'tween', duration: 500 },
                progress: {
                    type: 'spring',
                    stiffness: 0.95,
                    damping: 0.65,
                    mass: 10,
                },
            },
        },
    });

    var create$1 = function create(_ref) {
        var root = _ref.root,
            props = _ref.props;
        root.element.innerHTML = (props.icon || '') + ('<span>' + props.label + '</span>');

        props.isDisabled = false;
    };

    var write$1 = function write(_ref2) {
        var root = _ref2.root,
            props = _ref2.props;
        var isDisabled = props.isDisabled;
        var shouldDisable = root.query('GET_DISABLED') || props.opacity === 0;

        if (shouldDisable && !isDisabled) {
            props.isDisabled = true;
            attr(root.element, 'disabled', 'disabled');
        } else if (!shouldDisable && isDisabled) {
            props.isDisabled = false;
            root.element.removeAttribute('disabled');
        }
    };

    var fileActionButton = createView({
        tag: 'button',
        attributes: {
            type: 'button',
        },

        ignoreRect: true,
        ignoreRectUpdate: true,
        name: 'file-action-button',
        mixins: {
            apis: ['label'],
            styles: ['translateX', 'translateY', 'scaleX', 'scaleY', 'opacity'],
            animations: {
                scaleX: 'spring',
                scaleY: 'spring',
                translateX: 'spring',
                translateY: 'spring',
                opacity: { type: 'tween', duration: 250 },
            },

            listeners: true,
        },

        create: create$1,
        write: write$1,
    });

    var toNaturalFileSize = function toNaturalFileSize(bytes) {
        var decimalSeparator =
            arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';
        var base = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var _options$labelBytes = options.labelBytes,
            labelBytes = _options$labelBytes === void 0 ? 'bytes' : _options$labelBytes,
            _options$labelKilobyt = options.labelKilobytes,
            labelKilobytes = _options$labelKilobyt === void 0 ? 'KB' : _options$labelKilobyt,
            _options$labelMegabyt = options.labelMegabytes,
            labelMegabytes = _options$labelMegabyt === void 0 ? 'MB' : _options$labelMegabyt,
            _options$labelGigabyt = options.labelGigabytes,
            labelGigabytes = _options$labelGigabyt === void 0 ? 'GB' : _options$labelGigabyt;

        // no negative byte sizes
        bytes = Math.round(Math.abs(bytes));

        var KB = base;
        var MB = base * base;
        var GB = base * base * base;

        // just bytes
        if (bytes < KB) {
            return bytes + ' ' + labelBytes;
        }

        // kilobytes
        if (bytes < MB) {
            return Math.floor(bytes / KB) + ' ' + labelKilobytes;
        }

        // megabytes
        if (bytes < GB) {
            return removeDecimalsWhenZero(bytes / MB, 1, decimalSeparator) + ' ' + labelMegabytes;
        }

        // gigabytes
        return removeDecimalsWhenZero(bytes / GB, 2, decimalSeparator) + ' ' + labelGigabytes;
    };

    var removeDecimalsWhenZero = function removeDecimalsWhenZero(value, decimalCount, separator) {
        return value
            .toFixed(decimalCount)
            .split('.')
            .filter(function(part) {
                return part !== '0';
            })
            .join(separator);
    };

    var create$2 = function create(_ref) {
        var root = _ref.root,
            props = _ref.props;
        // filename
        var fileName = createElement$1('span');
        fileName.className = 'filepond--file-info-main';
        // hide for screenreaders
        // the file is contained in a fieldset with legend that contains the filename
        // no need to read it twice
        attr(fileName, 'aria-hidden', 'true');
        root.appendChild(fileName);
        root.ref.fileName = fileName;

        // filesize
        var fileSize = createElement$1('span');
        fileSize.className = 'filepond--file-info-sub';
        root.appendChild(fileSize);
        root.ref.fileSize = fileSize;

        // set initial values
        text(fileSize, root.query('GET_LABEL_FILE_WAITING_FOR_SIZE'));
        text(fileName, formatFilename(root.query('GET_ITEM_NAME', props.id)));
    };

    var updateFile = function updateFile(_ref2) {
        var root = _ref2.root,
            props = _ref2.props;
        text(
            root.ref.fileSize,
            toNaturalFileSize(
                root.query('GET_ITEM_SIZE', props.id),
                '.',
                root.query('GET_FILE_SIZE_BASE'),
                root.query('GET_FILE_SIZE_LABELS', root.query)
            )
        );

        text(root.ref.fileName, formatFilename(root.query('GET_ITEM_NAME', props.id)));
    };

    var updateFileSizeOnError = function updateFileSizeOnError(_ref3) {
        var root = _ref3.root,
            props = _ref3.props;
        // if size is available don't fallback to unknown size message
        if (isInt(root.query('GET_ITEM_SIZE', props.id))) {
            updateFile({ root: root, props: props });
            return;
        }

        text(root.ref.fileSize, root.query('GET_LABEL_FILE_SIZE_NOT_AVAILABLE'));
    };

    var fileInfo = createView({
        name: 'file-info',
        ignoreRect: true,
        ignoreRectUpdate: true,
        write: createRoute({
            DID_LOAD_ITEM: updateFile,
            DID_UPDATE_ITEM_META: updateFile,
            DID_THROW_ITEM_LOAD_ERROR: updateFileSizeOnError,
            DID_THROW_ITEM_INVALID: updateFileSizeOnError,
        }),

        didCreateView: function didCreateView(root) {
            applyFilters('CREATE_VIEW', Object.assign({}, root, { view: root }));
        },
        create: create$2,
        mixins: {
            styles: ['translateX', 'translateY'],
            animations: {
                translateX: 'spring',
                translateY: 'spring',
            },
        },
    });

    var toPercentage = function toPercentage(value) {
        return Math.round(value * 100);
    };

    var create$3 = function create(_ref) {
        var root = _ref.root;

        // main status
        var main = createElement$1('span');
        main.className = 'filepond--file-status-main';
        root.appendChild(main);
        root.ref.main = main;

        // sub status
        var sub = createElement$1('span');
        sub.className = 'filepond--file-status-sub';
        root.appendChild(sub);
        root.ref.sub = sub;

        didSetItemLoadProgress({ root: root, action: { progress: null } });
    };

    var didSetItemLoadProgress = function didSetItemLoadProgress(_ref2) {
        var root = _ref2.root,
            action = _ref2.action;
        var title =
            action.progress === null
                ? root.query('GET_LABEL_FILE_LOADING')
                : root.query('GET_LABEL_FILE_LOADING') + ' ' + toPercentage(action.progress) + '%';

        text(root.ref.main, title);
        text(root.ref.sub, root.query('GET_LABEL_TAP_TO_CANCEL'));
    };

    var didSetItemProcessProgress = function didSetItemProcessProgress(_ref3) {
        var root = _ref3.root,
            action = _ref3.action;
        var title =
            action.progress === null
                ? root.query('GET_LABEL_FILE_PROCESSING')
                : root.query('GET_LABEL_FILE_PROCESSING') +
                  ' ' +
                  toPercentage(action.progress) +
                  '%';

        text(root.ref.main, title);
        text(root.ref.sub, root.query('GET_LABEL_TAP_TO_CANCEL'));
    };

    var didRequestItemProcessing = function didRequestItemProcessing(_ref4) {
        var root = _ref4.root;
        text(root.ref.main, root.query('GET_LABEL_FILE_PROCESSING'));
        text(root.ref.sub, root.query('GET_LABEL_TAP_TO_CANCEL'));
    };

    var didAbortItemProcessing = function didAbortItemProcessing(_ref5) {
        var root = _ref5.root;
        text(root.ref.main, root.query('GET_LABEL_FILE_PROCESSING_ABORTED'));
        text(root.ref.sub, root.query('GET_LABEL_TAP_TO_RETRY'));
    };

    var didCompleteItemProcessing = function didCompleteItemProcessing(_ref6) {
        var root = _ref6.root;
        text(root.ref.main, root.query('GET_LABEL_FILE_PROCESSING_COMPLETE'));
        text(root.ref.sub, root.query('GET_LABEL_TAP_TO_UNDO'));
    };

    var clear = function clear(_ref7) {
        var root = _ref7.root;
        text(root.ref.main, '');
        text(root.ref.sub, '');
    };

    var error = function error(_ref8) {
        var root = _ref8.root,
            action = _ref8.action;
        text(root.ref.main, action.status.main);
        text(root.ref.sub, action.status.sub);
    };

    var fileStatus = createView({
        name: 'file-status',
        ignoreRect: true,
        ignoreRectUpdate: true,
        write: createRoute({
            DID_LOAD_ITEM: clear,
            DID_REVERT_ITEM_PROCESSING: clear,
            DID_REQUEST_ITEM_PROCESSING: didRequestItemProcessing,
            DID_ABORT_ITEM_PROCESSING: didAbortItemProcessing,
            DID_COMPLETE_ITEM_PROCESSING: didCompleteItemProcessing,
            DID_UPDATE_ITEM_PROCESS_PROGRESS: didSetItemProcessProgress,
            DID_UPDATE_ITEM_LOAD_PROGRESS: didSetItemLoadProgress,
            DID_THROW_ITEM_LOAD_ERROR: error,
            DID_THROW_ITEM_INVALID: error,
            DID_THROW_ITEM_PROCESSING_ERROR: error,
            DID_THROW_ITEM_PROCESSING_REVERT_ERROR: error,
            DID_THROW_ITEM_REMOVE_ERROR: error,
        }),

        didCreateView: function didCreateView(root) {
            applyFilters('CREATE_VIEW', Object.assign({}, root, { view: root }));
        },
        create: create$3,
        mixins: {
            styles: ['translateX', 'translateY', 'opacity'],
            animations: {
                opacity: { type: 'tween', duration: 250 },
                translateX: 'spring',
                translateY: 'spring',
            },
        },
    });

    /**
     * Button definitions for the file view
     */

    var Buttons = {
        AbortItemLoad: {
            label: 'GET_LABEL_BUTTON_ABORT_ITEM_LOAD',
            action: 'ABORT_ITEM_LOAD',
            className: 'filepond--action-abort-item-load',
            align: 'LOAD_INDICATOR_POSITION', // right
        },
        RetryItemLoad: {
            label: 'GET_LABEL_BUTTON_RETRY_ITEM_LOAD',
            action: 'RETRY_ITEM_LOAD',
            icon: 'GET_ICON_RETRY',
            className: 'filepond--action-retry-item-load',
            align: 'BUTTON_PROCESS_ITEM_POSITION', // right
        },
        RemoveItem: {
            label: 'GET_LABEL_BUTTON_REMOVE_ITEM',
            action: 'REQUEST_REMOVE_ITEM',
            icon: 'GET_ICON_REMOVE',
            className: 'filepond--action-remove-item',
            align: 'BUTTON_REMOVE_ITEM_POSITION', // left
        },
        ProcessItem: {
            label: 'GET_LABEL_BUTTON_PROCESS_ITEM',
            action: 'REQUEST_ITEM_PROCESSING',
            icon: 'GET_ICON_PROCESS',
            className: 'filepond--action-process-item',
            align: 'BUTTON_PROCESS_ITEM_POSITION', // right
        },
        AbortItemProcessing: {
            label: 'GET_LABEL_BUTTON_ABORT_ITEM_PROCESSING',
            action: 'ABORT_ITEM_PROCESSING',
            className: 'filepond--action-abort-item-processing',
            align: 'BUTTON_PROCESS_ITEM_POSITION', // right
        },
        RetryItemProcessing: {
            label: 'GET_LABEL_BUTTON_RETRY_ITEM_PROCESSING',
            action: 'RETRY_ITEM_PROCESSING',
            icon: 'GET_ICON_RETRY',
            className: 'filepond--action-retry-item-processing',
            align: 'BUTTON_PROCESS_ITEM_POSITION', // right
        },
        RevertItemProcessing: {
            label: 'GET_LABEL_BUTTON_UNDO_ITEM_PROCESSING',
            action: 'REQUEST_REVERT_ITEM_PROCESSING',
            icon: 'GET_ICON_UNDO',
            className: 'filepond--action-revert-item-processing',
            align: 'BUTTON_PROCESS_ITEM_POSITION', // right
        },
    };

    // make a list of buttons, we can then remove buttons from this list if they're disabled
    var ButtonKeys = [];
    forin(Buttons, function(key) {
        ButtonKeys.push(key);
    });

    var calculateFileInfoOffset = function calculateFileInfoOffset(root) {
        if (getRemoveIndicatorAligment(root) === 'right') return 0;
        var buttonRect = root.ref.buttonRemoveItem.rect.element;
        return buttonRect.hidden ? null : buttonRect.width + buttonRect.left;
    };

    var calculateButtonWidth = function calculateButtonWidth(root) {
        var buttonRect = root.ref.buttonAbortItemLoad.rect.element;
        return buttonRect.width;
    };

    // Force on full pixels so text stays crips
    var calculateFileVerticalCenterOffset = function calculateFileVerticalCenterOffset(root) {
        return Math.floor(root.ref.buttonRemoveItem.rect.element.height / 4);
    };
    var calculateFileHorizontalCenterOffset = function calculateFileHorizontalCenterOffset(root) {
        return Math.floor(root.ref.buttonRemoveItem.rect.element.left / 2);
    };

    var getLoadIndicatorAlignment = function getLoadIndicatorAlignment(root) {
        return root.query('GET_STYLE_LOAD_INDICATOR_POSITION');
    };
    var getProcessIndicatorAlignment = function getProcessIndicatorAlignment(root) {
        return root.query('GET_STYLE_PROGRESS_INDICATOR_POSITION');
    };
    var getRemoveIndicatorAligment = function getRemoveIndicatorAligment(root) {
        return root.query('GET_STYLE_BUTTON_REMOVE_ITEM_POSITION');
    };

    var DefaultStyle = {
        buttonAbortItemLoad: { opacity: 0 },
        buttonRetryItemLoad: { opacity: 0 },
        buttonRemoveItem: { opacity: 0 },
        buttonProcessItem: { opacity: 0 },
        buttonAbortItemProcessing: { opacity: 0 },
        buttonRetryItemProcessing: { opacity: 0 },
        buttonRevertItemProcessing: { opacity: 0 },
        loadProgressIndicator: { opacity: 0, align: getLoadIndicatorAlignment },
        processProgressIndicator: { opacity: 0, align: getProcessIndicatorAlignment },
        processingCompleteIndicator: { opacity: 0, scaleX: 0.75, scaleY: 0.75 },
        info: { translateX: 0, translateY: 0, opacity: 0 },
        status: { translateX: 0, translateY: 0, opacity: 0 },
    };

    var IdleStyle = {
        buttonRemoveItem: { opacity: 1 },
        buttonProcessItem: { opacity: 1 },
        info: { translateX: calculateFileInfoOffset },
        status: { translateX: calculateFileInfoOffset },
    };

    var ProcessingStyle = {
        buttonAbortItemProcessing: { opacity: 1 },
        processProgressIndicator: { opacity: 1 },
        status: { opacity: 1 },
    };

    var StyleMap = {
        DID_THROW_ITEM_INVALID: {
            buttonRemoveItem: { opacity: 1 },
            info: { translateX: calculateFileInfoOffset },
            status: { translateX: calculateFileInfoOffset, opacity: 1 },
        },

        DID_START_ITEM_LOAD: {
            buttonAbortItemLoad: { opacity: 1 },
            loadProgressIndicator: { opacity: 1 },
            status: { opacity: 1 },
        },

        DID_THROW_ITEM_LOAD_ERROR: {
            buttonRetryItemLoad: { opacity: 1 },
            buttonRemoveItem: { opacity: 1 },
            info: { translateX: calculateFileInfoOffset },
            status: { opacity: 1 },
        },

        DID_START_ITEM_REMOVE: {
            processProgressIndicator: { opacity: 1, align: getRemoveIndicatorAligment },
            info: { translateX: calculateFileInfoOffset },
            status: { opacity: 0 },
        },

        DID_THROW_ITEM_REMOVE_ERROR: {
            processProgressIndicator: { opacity: 0, align: getRemoveIndicatorAligment },
            buttonRemoveItem: { opacity: 1 },
            info: { translateX: calculateFileInfoOffset },
            status: { opacity: 1, translateX: calculateFileInfoOffset },
        },

        DID_LOAD_ITEM: IdleStyle,
        DID_LOAD_LOCAL_ITEM: {
            buttonRemoveItem: { opacity: 1 },
            info: { translateX: calculateFileInfoOffset },
            status: { translateX: calculateFileInfoOffset },
        },

        DID_START_ITEM_PROCESSING: ProcessingStyle,
        DID_REQUEST_ITEM_PROCESSING: ProcessingStyle,
        DID_UPDATE_ITEM_PROCESS_PROGRESS: ProcessingStyle,
        DID_COMPLETE_ITEM_PROCESSING: {
            buttonRevertItemProcessing: { opacity: 1 },
            info: { opacity: 1 },
            status: { opacity: 1 },
        },

        DID_THROW_ITEM_PROCESSING_ERROR: {
            buttonRemoveItem: { opacity: 1 },
            buttonRetryItemProcessing: { opacity: 1 },
            status: { opacity: 1 },
            info: { translateX: calculateFileInfoOffset },
        },

        DID_THROW_ITEM_PROCESSING_REVERT_ERROR: {
            buttonRevertItemProcessing: { opacity: 1 },
            status: { opacity: 1 },
            info: { opacity: 1 },
        },

        DID_ABORT_ITEM_PROCESSING: {
            buttonRemoveItem: { opacity: 1 },
            buttonProcessItem: { opacity: 1 },
            info: { translateX: calculateFileInfoOffset },
            status: { opacity: 1 },
        },

        DID_REVERT_ITEM_PROCESSING: IdleStyle,
    };

    // complete indicator view
    var processingCompleteIndicatorView = createView({
        create: function create(_ref) {
            var root = _ref.root;
            root.element.innerHTML = root.query('GET_ICON_DONE');
        },
        name: 'processing-complete-indicator',
        ignoreRect: true,
        mixins: {
            styles: ['scaleX', 'scaleY', 'opacity'],
            animations: {
                scaleX: 'spring',
                scaleY: 'spring',
                opacity: { type: 'tween', duration: 250 },
            },
        },
    });

    /**
     * Creates the file view
     */
    var create$4 = function create(_ref2) {
        var root = _ref2.root,
            props = _ref2.props;
        // copy Buttons object
        var LocalButtons = Object.keys(Buttons).reduce(function(prev, curr) {
            prev[curr] = Object.assign({}, Buttons[curr]);
            return prev;
        }, {});
        var id = props.id;

        // allow reverting upload
        var allowRevert = root.query('GET_ALLOW_REVERT');

        // allow remove file
        var allowRemove = root.query('GET_ALLOW_REMOVE');

        // allow processing upload
        var allowProcess = root.query('GET_ALLOW_PROCESS');

        // is instant uploading, need this to determine the icon of the undo button
        var instantUpload = root.query('GET_INSTANT_UPLOAD');

        // is async set up
        var isAsync = root.query('IS_ASYNC');

        // should align remove item buttons
        var alignRemoveItemButton = root.query('GET_STYLE_BUTTON_REMOVE_ITEM_ALIGN');

        // enabled buttons array
        var buttonFilter;
        if (isAsync) {
            if (allowProcess && !allowRevert) {
                // only remove revert button
                buttonFilter = function buttonFilter(key) {
                    return !/RevertItemProcessing/.test(key);
                };
            } else if (!allowProcess && allowRevert) {
                // only remove process button
                buttonFilter = function buttonFilter(key) {
                    return !/ProcessItem|RetryItemProcessing|AbortItemProcessing/.test(key);
                };
            } else if (!allowProcess && !allowRevert) {
                // remove all process buttons
                buttonFilter = function buttonFilter(key) {
                    return !/Process/.test(key);
                };
            }
        } else {
            // no process controls available
            buttonFilter = function buttonFilter(key) {
                return !/Process/.test(key);
            };
        }

        var enabledButtons = buttonFilter ? ButtonKeys.filter(buttonFilter) : ButtonKeys.concat();

        // update icon and label for revert button when instant uploading
        if (instantUpload && allowRevert) {
            LocalButtons['RevertItemProcessing'].label = 'GET_LABEL_BUTTON_REMOVE_ITEM';
            LocalButtons['RevertItemProcessing'].icon = 'GET_ICON_REMOVE';
        }

        // remove last button (revert) if not allowed
        if (isAsync && !allowRevert) {
            var map = StyleMap['DID_COMPLETE_ITEM_PROCESSING'];
            map.info.translateX = calculateFileHorizontalCenterOffset;
            map.info.translateY = calculateFileVerticalCenterOffset;
            map.status.translateY = calculateFileVerticalCenterOffset;
            map.processingCompleteIndicator = { opacity: 1, scaleX: 1, scaleY: 1 };
        }

        // should align center
        if (isAsync && !allowProcess) {
            [
                'DID_START_ITEM_PROCESSING',
                'DID_REQUEST_ITEM_PROCESSING',
                'DID_UPDATE_ITEM_PROCESS_PROGRESS',
                'DID_THROW_ITEM_PROCESSING_ERROR',
            ].forEach(function(key) {
                StyleMap[key].status.translateY = calculateFileVerticalCenterOffset;
            });
            StyleMap['DID_THROW_ITEM_PROCESSING_ERROR'].status.translateX = calculateButtonWidth;
        }

        // move remove button to right
        if (alignRemoveItemButton && allowRevert) {
            LocalButtons['RevertItemProcessing'].align = 'BUTTON_REMOVE_ITEM_POSITION';
            var _map = StyleMap['DID_COMPLETE_ITEM_PROCESSING'];
            _map.info.translateX = calculateFileInfoOffset;
            _map.status.translateY = calculateFileVerticalCenterOffset;
            _map.processingCompleteIndicator = { opacity: 1, scaleX: 1, scaleY: 1 };
        }

        // show/hide RemoveItem button
        if (!allowRemove) {
            LocalButtons['RemoveItem'].disabled = true;
        }

        // create the button views
        forin(LocalButtons, function(key, definition) {
            // create button
            var buttonView = root.createChildView(fileActionButton, {
                label: root.query(definition.label),
                icon: root.query(definition.icon),
                opacity: 0,
            });

            // should be appended?
            if (enabledButtons.includes(key)) {
                root.appendChildView(buttonView);
            }

            // toggle
            if (definition.disabled) {
                buttonView.element.setAttribute('disabled', 'disabled');
                buttonView.element.setAttribute('hidden', 'hidden');
            }

            // add position attribute
            buttonView.element.dataset.align = root.query('GET_STYLE_' + definition.align);

            // add class
            buttonView.element.classList.add(definition.className);

            // handle interactions
            buttonView.on('click', function(e) {
                e.stopPropagation();
                if (definition.disabled) return;
                root.dispatch(definition.action, { query: id });
            });

            // set reference
            root.ref['button' + key] = buttonView;
        });

        // checkmark
        root.ref.processingCompleteIndicator = root.appendChildView(
            root.createChildView(processingCompleteIndicatorView)
        );

        root.ref.processingCompleteIndicator.element.dataset.align = root.query(
            'GET_STYLE_BUTTON_PROCESS_ITEM_POSITION'
        );

        // create file info view
        root.ref.info = root.appendChildView(root.createChildView(fileInfo, { id: id }));

        // create file status view
        root.ref.status = root.appendChildView(root.createChildView(fileStatus, { id: id }));

        // add progress indicators
        var loadIndicatorView = root.appendChildView(
            root.createChildView(progressIndicator, {
                opacity: 0,
                align: root.query('GET_STYLE_LOAD_INDICATOR_POSITION'),
            })
        );

        loadIndicatorView.element.classList.add('filepond--load-indicator');
        root.ref.loadProgressIndicator = loadIndicatorView;

        var progressIndicatorView = root.appendChildView(
            root.createChildView(progressIndicator, {
                opacity: 0,
                align: root.query('GET_STYLE_PROGRESS_INDICATOR_POSITION'),
            })
        );

        progressIndicatorView.element.classList.add('filepond--process-indicator');
        root.ref.processProgressIndicator = progressIndicatorView;

        // current active styles
        root.ref.activeStyles = [];
    };

    var write$2 = function write(_ref3) {
        var root = _ref3.root,
            actions = _ref3.actions,
            props = _ref3.props;
        // route actions
        route({ root: root, actions: actions, props: props });

        // select last state change action
        var action = actions
            .concat()
            .filter(function(action) {
                return /^DID_/.test(action.type);
            })
            .reverse()
            .find(function(action) {
                return StyleMap[action.type];
            });

        // a new action happened, let's get the matching styles
        if (action) {
            // define new active styles
            root.ref.activeStyles = [];

            var stylesToApply = StyleMap[action.type];
            forin(DefaultStyle, function(name, defaultStyles) {
                // get reference to control
                var control = root.ref[name];

                // loop over all styles for this control
                forin(defaultStyles, function(key, defaultValue) {
                    var value =
                        stylesToApply[name] && typeof stylesToApply[name][key] !== 'undefined'
                            ? stylesToApply[name][key]
                            : defaultValue;
                    root.ref.activeStyles.push({ control: control, key: key, value: value });
                });
            });
        }

        // apply active styles to element
        root.ref.activeStyles.forEach(function(_ref4) {
            var control = _ref4.control,
                key = _ref4.key,
                value = _ref4.value;
            control[key] = typeof value === 'function' ? value(root) : value;
        });
    };

    var route = createRoute({
        DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING: function DID_SET_LABEL_BUTTON_ABORT_ITEM_PROCESSING(
            _ref5
        ) {
            var root = _ref5.root,
                action = _ref5.action;
            root.ref.buttonAbortItemProcessing.label = action.value;
        },
        DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD: function DID_SET_LABEL_BUTTON_ABORT_ITEM_LOAD(_ref6) {
            var root = _ref6.root,
                action = _ref6.action;
            root.ref.buttonAbortItemLoad.label = action.value;
        },
        DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL: function DID_SET_LABEL_BUTTON_ABORT_ITEM_REMOVAL(
            _ref7
        ) {
            var root = _ref7.root,
                action = _ref7.action;
            root.ref.buttonAbortItemRemoval.label = action.value;
        },
        DID_REQUEST_ITEM_PROCESSING: function DID_REQUEST_ITEM_PROCESSING(_ref8) {
            var root = _ref8.root;
            root.ref.processProgressIndicator.spin = true;
            root.ref.processProgressIndicator.progress = 0;
        },
        DID_START_ITEM_LOAD: function DID_START_ITEM_LOAD(_ref9) {
            var root = _ref9.root;
            root.ref.loadProgressIndicator.spin = true;
            root.ref.loadProgressIndicator.progress = 0;
        },
        DID_START_ITEM_REMOVE: function DID_START_ITEM_REMOVE(_ref10) {
            var root = _ref10.root;
            root.ref.processProgressIndicator.spin = true;
            root.ref.processProgressIndicator.progress = 0;
        },
        DID_UPDATE_ITEM_LOAD_PROGRESS: function DID_UPDATE_ITEM_LOAD_PROGRESS(_ref11) {
            var root = _ref11.root,
                action = _ref11.action;
            root.ref.loadProgressIndicator.spin = false;
            root.ref.loadProgressIndicator.progress = action.progress;
        },
        DID_UPDATE_ITEM_PROCESS_PROGRESS: function DID_UPDATE_ITEM_PROCESS_PROGRESS(_ref12) {
            var root = _ref12.root,
                action = _ref12.action;
            root.ref.processProgressIndicator.spin = false;
            root.ref.processProgressIndicator.progress = action.progress;
        },
    });

    var file = createView({
        create: create$4,
        write: write$2,
        didCreateView: function didCreateView(root) {
            applyFilters('CREATE_VIEW', Object.assign({}, root, { view: root }));
        },
        name: 'file',
    });

    /**
     * Creates the file view
     */
    var create$5 = function create(_ref) {
        var root = _ref.root,
            props = _ref.props;

        // filename
        root.ref.fileName = createElement$1('legend');
        root.appendChild(root.ref.fileName);

        // file appended
        root.ref.file = root.appendChildView(root.createChildView(file, { id: props.id }));

        // data has moved to data.js
        root.ref.data = false;
    };

    /**
     * Data storage
     */
    var didLoadItem = function didLoadItem(_ref2) {
        var root = _ref2.root,
            props = _ref2.props;
        // updates the legend of the fieldset so screenreaders can better group buttons
        text(root.ref.fileName, formatFilename(root.query('GET_ITEM_NAME', props.id)));
    };

    var fileWrapper = createView({
        create: create$5,
        ignoreRect: true,
        write: createRoute({
            DID_LOAD_ITEM: didLoadItem,
        }),

        didCreateView: function didCreateView(root) {
            applyFilters('CREATE_VIEW', Object.assign({}, root, { view: root }));
        },
        tag: 'fieldset',
        name: 'file-wrapper',
    });

    var PANEL_SPRING_PROPS = { type: 'spring', damping: 0.6, mass: 7 };

    var create$6 = function create(_ref) {
        var root = _ref.root,
            props = _ref.props;
        [
            {
                name: 'top',
            },

            {
                name: 'center',
                props: {
                    translateY: null,
                    scaleY: null,
                },

                mixins: {
                    animations: {
                        scaleY: PANEL_SPRING_PROPS,
                    },

                    styles: ['translateY', 'scaleY'],
                },
            },

            {
                name: 'bottom',
                props: {
                    translateY: null,
                },

                mixins: {
                    animations: {
                        translateY: PANEL_SPRING_PROPS,
                    },

                    styles: ['translateY'],
                },
            },
        ].forEach(function(section) {
            createSection(root, section, props.name);
        });

        root.element.classList.add('filepond--' + props.name);

        root.ref.scalable = null;
    };

    var createSection = function createSection(root, section, className) {
        var viewConstructor = createView({
            name: 'panel-' + section.name + ' filepond--' + className,
            mixins: section.mixins,
            ignoreRectUpdate: true,
        });

        var view = root.createChildView(viewConstructor, section.props);

        root.ref[section.name] = root.appendChildView(view);
    };

    var write$3 = function write(_ref2) {
        var root = _ref2.root,
            props = _ref2.props;

        // update scalable state
        if (root.ref.scalable === null || props.scalable !== root.ref.scalable) {
            root.ref.scalable = isBoolean(props.scalable) ? props.scalable : true;
            root.element.dataset.scalable = root.ref.scalable;
        }

        // no height, can't set
        if (!props.height) return;

        // get child rects
        var topRect = root.ref.top.rect.element;
        var bottomRect = root.ref.bottom.rect.element;

        // make sure height never is smaller than bottom and top seciton heights combined (will probably never happen, but who knows)
        var height = Math.max(topRect.height + bottomRect.height, props.height);

        // offset center part
        root.ref.center.translateY = topRect.height;

        // scale center part
        // use math ceil to prevent transparent lines because of rounding errors
        root.ref.center.scaleY = (height - topRect.height - bottomRect.height) / 100;

        // offset bottom part
        root.ref.bottom.translateY = height - bottomRect.height;
    };

    var panel = createView({
        name: 'panel',
        read: function read(_ref3) {
            var root = _ref3.root,
                props = _ref3.props;
            return (props.heightCurrent = root.ref.bottom.translateY);
        },
        write: write$3,
        create: create$6,
        ignoreRect: true,
        mixins: {
            apis: ['height', 'heightCurrent', 'scalable'],
        },
    });

    var createDragHelper = function createDragHelper(items) {
        var itemIds = items.map(function(item) {
            return item.id;
        });
        var prevIndex = undefined;
        return {
            setIndex: function setIndex(index) {
                prevIndex = index;
            },
            getIndex: function getIndex() {
                return prevIndex;
            },
            getItemIndex: function getItemIndex(item) {
                return itemIds.indexOf(item.id);
            },
        };
    };

    var ITEM_TRANSLATE_SPRING = {
        type: 'spring',
        stiffness: 0.75,
        damping: 0.45,
        mass: 10,
    };

    var ITEM_SCALE_SPRING = 'spring';

    var StateMap = {
        DID_START_ITEM_LOAD: 'busy',
        DID_UPDATE_ITEM_LOAD_PROGRESS: 'loading',
        DID_THROW_ITEM_INVALID: 'load-invalid',
        DID_THROW_ITEM_LOAD_ERROR: 'load-error',
        DID_LOAD_ITEM: 'idle',
        DID_THROW_ITEM_REMOVE_ERROR: 'remove-error',
        DID_START_ITEM_REMOVE: 'busy',
        DID_START_ITEM_PROCESSING: 'busy processing',
        DID_REQUEST_ITEM_PROCESSING: 'busy processing',
        DID_UPDATE_ITEM_PROCESS_PROGRESS: 'processing',
        DID_COMPLETE_ITEM_PROCESSING: 'processing-complete',
        DID_THROW_ITEM_PROCESSING_ERROR: 'processing-error',
        DID_THROW_ITEM_PROCESSING_REVERT_ERROR: 'processing-revert-error',
        DID_ABORT_ITEM_PROCESSING: 'cancelled',
        DID_REVERT_ITEM_PROCESSING: 'idle',
    };

    /**
     * Creates the file view
     */
    var create$7 = function create(_ref) {
        var root = _ref.root,
            props = _ref.props;

        // select
        root.ref.handleClick = function(e) {
            return root.dispatch('DID_ACTIVATE_ITEM', { id: props.id });
        };

        // set id
        root.element.id = 'filepond--item-' + props.id;
        root.element.addEventListener('click', root.ref.handleClick);

        // file view
        root.ref.container = root.appendChildView(
            root.createChildView(fileWrapper, { id: props.id })
        );

        // file panel
        root.ref.panel = root.appendChildView(root.createChildView(panel, { name: 'item-panel' }));

        // default start height
        root.ref.panel.height = null;

        // by default not marked for removal
        props.markedForRemoval = false;

        // if not allowed to reorder file items, exit here
        if (!root.query('GET_ALLOW_REORDER')) return;

        // set to idle so shows grab cursor
        root.element.dataset.dragState = 'idle';

        var grab = function grab(e) {
            if (!e.isPrimary) return;

            var removedActivateListener = false;

            var origin = {
                x: e.pageX,
                y: e.pageY,
            };

            props.dragOrigin = {
                x: root.translateX,
                y: root.translateY,
            };

            props.dragCenter = {
                x: e.offsetX,
                y: e.offsetY,
            };

            var dragState = createDragHelper(root.query('GET_ACTIVE_ITEMS'));

            root.dispatch('DID_GRAB_ITEM', { id: props.id, dragState: dragState });

            var drag = function drag(e) {
                if (!e.isPrimary) return;

                e.stopPropagation();
                e.preventDefault();

                props.dragOffset = {
                    x: e.pageX - origin.x,
                    y: e.pageY - origin.y,
                };

                // if dragged stop listening to clicks, will re-add when done dragging
                var dist =
                    props.dragOffset.x * props.dragOffset.x +
                    props.dragOffset.y * props.dragOffset.y;
                if (dist > 16 && !removedActivateListener) {
                    removedActivateListener = true;
                    root.element.removeEventListener('click', root.ref.handleClick);
                }

                root.dispatch('DID_DRAG_ITEM', { id: props.id, dragState: dragState });
            };

            var drop = function drop(e) {
                if (!e.isPrimary) return;

                document.removeEventListener('pointermove', drag);
                document.removeEventListener('pointerup', drop);

                props.dragOffset = {
                    x: e.pageX - origin.x,
                    y: e.pageY - origin.y,
                };

                root.dispatch('DID_DROP_ITEM', { id: props.id, dragState: dragState });

                // start listening to clicks again
                if (removedActivateListener) {
                    setTimeout(function() {
                        return root.element.addEventListener('click', root.ref.handleClick);
                    }, 0);
                }
            };

            document.addEventListener('pointermove', drag);
            document.addEventListener('pointerup', drop);
        };

        root.element.addEventListener('pointerdown', grab);
    };

    var route$1 = createRoute({
        DID_UPDATE_PANEL_HEIGHT: function DID_UPDATE_PANEL_HEIGHT(_ref2) {
            var root = _ref2.root,
                action = _ref2.action;
            root.height = action.height;
        },
    });

    var write$4 = createRoute(
        {
            DID_GRAB_ITEM: function DID_GRAB_ITEM(_ref3) {
                var root = _ref3.root,
                    props = _ref3.props;
                props.dragOrigin = {
                    x: root.translateX,
                    y: root.translateY,
                };
            },
            DID_DRAG_ITEM: function DID_DRAG_ITEM(_ref4) {
                var root = _ref4.root;
                root.element.dataset.dragState = 'drag';
            },
            DID_DROP_ITEM: function DID_DROP_ITEM(_ref5) {
                var root = _ref5.root,
                    props = _ref5.props;
                props.dragOffset = null;
                props.dragOrigin = null;
                root.element.dataset.dragState = 'drop';
            },
        },
        function(_ref6) {
            var root = _ref6.root,
                actions = _ref6.actions,
                props = _ref6.props,
                shouldOptimize = _ref6.shouldOptimize;

            if (root.element.dataset.dragState === 'drop') {
                if (root.scaleX <= 1) {
                    root.element.dataset.dragState = 'idle';
                }
            }

            // select last state change action
            var action = actions
                .concat()
                .filter(function(action) {
                    return /^DID_/.test(action.type);
                })
                .reverse()
                .find(function(action) {
                    return StateMap[action.type];
                });

            // no need to set same state twice
            if (action && action.type !== props.currentState) {
                // set current state
                props.currentState = action.type;

                // set state
                root.element.dataset.filepondItemState = StateMap[props.currentState] || '';
            }

            // route actions
            var aspectRatio =
                root.query('GET_ITEM_PANEL_ASPECT_RATIO') || root.query('GET_PANEL_ASPECT_RATIO');
            if (!aspectRatio) {
                route$1({ root: root, actions: actions, props: props });
                if (!root.height && root.ref.container.rect.element.height > 0) {
                    root.height = root.ref.container.rect.element.height;
                }
            } else if (!shouldOptimize) {
                root.height = root.rect.element.width * aspectRatio;
            }

            // sync panel height with item height
            if (shouldOptimize) {
                root.ref.panel.height = null;
            }

            root.ref.panel.height = root.height;
        }
    );

    var item = createView({
        create: create$7,
        write: write$4,
        destroy: function destroy(_ref7) {
            var root = _ref7.root,
                props = _ref7.props;
            root.element.removeEventListener('click', root.ref.handleClick);
            root.dispatch('RELEASE_ITEM', { query: props.id });
        },
        tag: 'li',
        name: 'item',
        mixins: {
            apis: [
                'id',
                'interactionMethod',
                'markedForRemoval',
                'spawnDate',
                'dragCenter',
                'dragOrigin',
                'dragOffset',
            ],
            styles: ['translateX', 'translateY', 'scaleX', 'scaleY', 'opacity', 'height'],

            animations: {
                scaleX: ITEM_SCALE_SPRING,
                scaleY: ITEM_SCALE_SPRING,
                translateX: ITEM_TRANSLATE_SPRING,
                translateY: ITEM_TRANSLATE_SPRING,
                opacity: { type: 'tween', duration: 150 },
            },
        },
    });

    var getItemsPerRow = function(horizontalSpace, itemWidth) {
        // add one pixel leeway, when using percentages for item width total items can be 1.99 per row

        return Math.max(1, Math.floor((horizontalSpace + 1) / itemWidth));
    };

    var getItemIndexByPosition = function getItemIndexByPosition(view, children, positionInView) {
        if (!positionInView) return;

        var horizontalSpace = view.rect.element.width;
        // const children = view.childViews;
        var l = children.length;
        var last = null;

        // -1, don't move items to accomodate (either add to top or bottom)
        if (l === 0 || positionInView.top < children[0].rect.element.top) return -1;

        // let's get the item width
        var item = children[0];
        var itemRect = item.rect.element;
        var itemHorizontalMargin = itemRect.marginLeft + itemRect.marginRight;
        var itemWidth = itemRect.width + itemHorizontalMargin;
        var itemsPerRow = getItemsPerRow(horizontalSpace, itemWidth);

        // stack
        if (itemsPerRow === 1) {
            for (var index = 0; index < l; index++) {
                var child = children[index];
                var childMid = child.rect.outer.top + child.rect.element.height * 0.5;
                if (positionInView.top < childMid) {
                    return index;
                }
            }
            return l;
        }

        // grid
        var itemVerticalMargin = itemRect.marginTop + itemRect.marginBottom;
        var itemHeight = itemRect.height + itemVerticalMargin;
        for (var _index = 0; _index < l; _index++) {
            var indexX = _index % itemsPerRow;
            var indexY = Math.floor(_index / itemsPerRow);

            var offsetX = indexX * itemWidth;
            var offsetY = indexY * itemHeight;

            var itemTop = offsetY - itemRect.marginTop;
            var itemRight = offsetX + itemWidth;
            var itemBottom = offsetY + itemHeight + itemRect.marginBottom;

            if (positionInView.top < itemBottom && positionInView.top > itemTop) {
                if (positionInView.left < itemRight) {
                    return _index;
                } else if (_index !== l - 1) {
                    last = _index;
                } else {
                    last = null;
                }
            }
        }

        if (last !== null) {
            return last;
        }

        return l;
    };

    var dropAreaDimensions = {
        height: 0,
        width: 0,
        get getHeight() {
            return this.height;
        },
        set setHeight(val) {
            if (this.height === 0 || val === 0) this.height = val;
        },
        get getWidth() {
            return this.width;
        },
        set setWidth(val) {
            if (this.width === 0 || val === 0) this.width = val;
        },
        setDimensions: function setDimensions(height, width) {
            if (this.height === 0 || height === 0) this.height = height;
            if (this.width === 0 || width === 0) this.width = width;
        },
    };

    var create$8 = function create(_ref) {
        var root = _ref.root;
        // need to set role to list as otherwise it won't be read as a list by VoiceOver
        attr(root.element, 'role', 'list');

        root.ref.lastItemSpanwDate = Date.now();
    };

    /**
     * Inserts a new item
     * @param root
     * @param action
     */
    var addItemView = function addItemView(_ref2) {
        var root = _ref2.root,
            action = _ref2.action;
        var id = action.id,
            index = action.index,
            interactionMethod = action.interactionMethod;

        root.ref.addIndex = index;

        var now = Date.now();
        var spawnDate = now;
        var opacity = 1;

        if (interactionMethod !== InteractionMethod.NONE) {
            opacity = 0;
            var cooldown = root.query('GET_ITEM_INSERT_INTERVAL');
            var dist = now - root.ref.lastItemSpanwDate;
            spawnDate = dist < cooldown ? now + (cooldown - dist) : now;
        }

        root.ref.lastItemSpanwDate = spawnDate;

        root.appendChildView(
            root.createChildView(
                // view type
                item,

                // props
                {
                    spawnDate: spawnDate,
                    id: id,
                    opacity: opacity,
                    interactionMethod: interactionMethod,
                }
            ),

            index
        );
    };

    var moveItem = function moveItem(item, x, y) {
        var vx = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var vy = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
        // set to null to remove animation while dragging
        if (item.dragOffset) {
            item.translateX = null;
            item.translateY = null;
            item.translateX = item.dragOrigin.x + item.dragOffset.x;
            item.translateY = item.dragOrigin.y + item.dragOffset.y;
            item.scaleX = 1.025;
            item.scaleY = 1.025;
        } else {
            item.translateX = x;
            item.translateY = y;

            if (Date.now() > item.spawnDate) {
                // reveal element
                if (item.opacity === 0) {
                    introItemView(item, x, y, vx, vy);
                }

                // make sure is default scale every frame
                item.scaleX = 1;
                item.scaleY = 1;
                item.opacity = 1;
            }
        }
    };

    var introItemView = function introItemView(item, x, y, vx, vy) {
        if (item.interactionMethod === InteractionMethod.NONE) {
            item.translateX = null;
            item.translateX = x;
            item.translateY = null;
            item.translateY = y;
        } else if (item.interactionMethod === InteractionMethod.DROP) {
            item.translateX = null;
            item.translateX = x - vx * 20;

            item.translateY = null;
            item.translateY = y - vy * 10;

            item.scaleX = 0.8;
            item.scaleY = 0.8;
        } else if (item.interactionMethod === InteractionMethod.BROWSE) {
            item.translateY = null;
            item.translateY = y - 30;
        } else if (item.interactionMethod === InteractionMethod.API) {
            item.translateX = null;
            item.translateX = x - 30;
            item.translateY = null;
        }
    };

    /**
     * Removes an existing item
     * @param root
     * @param action
     */
    var removeItemView = function removeItemView(_ref3) {
        var root = _ref3.root,
            action = _ref3.action;
        var id = action.id;

        // get the view matching the given id
        var view = root.childViews.find(function(child) {
            return child.id === id;
        });

        // if no view found, exit
        if (!view) {
            return;
        }

        // animate view out of view
        view.scaleX = 0.9;
        view.scaleY = 0.9;
        view.opacity = 0;

        // mark for removal
        view.markedForRemoval = true;
    };

    var getItemHeight = function getItemHeight(child) {
        return (
            child.rect.element.height +
            child.rect.element.marginBottom * 0.5 +
            child.rect.element.marginTop * 0.5
        );
    };
    var getItemWidth = function getItemWidth(child) {
        return (
            child.rect.element.width +
            child.rect.element.marginLeft * 0.5 +
            child.rect.element.marginRight * 0.5
        );
    };

    var dragItem = function dragItem(_ref4) {
        var root = _ref4.root,
            action = _ref4.action;
        var id = action.id,
            dragState = action.dragState;

        // reference to item
        var item = root.query('GET_ITEM', { id: id });

        // get the view matching the given id
        var view = root.childViews.find(function(child) {
            return child.id === id;
        });

        var numItems = root.childViews.length;
        var oldIndex = dragState.getItemIndex(item);

        // if no view found, exit
        if (!view) return;

        var dragPosition = {
            x: view.dragOrigin.x + view.dragOffset.x + view.dragCenter.x,
            y: view.dragOrigin.y + view.dragOffset.y + view.dragCenter.y,
        };

        // get drag area dimensions
        var dragHeight = getItemHeight(view);
        var dragWidth = getItemWidth(view);

        // get rows and columns (There will always be at least one row and one column if a file is present)
        var cols = Math.floor(root.rect.outer.width / dragWidth);
        if (cols > numItems) cols = numItems;

        // rows are used to find when we have left the preview area bounding box
        var rows = Math.floor(numItems / cols + 1);

        dropAreaDimensions.setHeight = dragHeight * rows;
        dropAreaDimensions.setWidth = dragWidth * cols;

        // get new index of dragged item
        var location = {
            y: Math.floor(dragPosition.y / dragHeight),
            x: Math.floor(dragPosition.x / dragWidth),
            getGridIndex: function getGridIndex() {
                if (
                    dragPosition.y > dropAreaDimensions.getHeight ||
                    dragPosition.y < 0 ||
                    dragPosition.x > dropAreaDimensions.getWidth ||
                    dragPosition.x < 0
                )
                    return oldIndex;
                return this.y * cols + this.x;
            },
            getColIndex: function getColIndex() {
                var items = root.query('GET_ACTIVE_ITEMS');
                var visibleChildren = root.childViews.filter(function(child) {
                    return child.rect.element.height;
                });
                var children = items.map(function(item) {
                    return visibleChildren.find(function(childView) {
                        return childView.id === item.id;
                    });
                });

                var currentIndex = children.findIndex(function(child) {
                    return child === view;
                });
                var dragHeight = getItemHeight(view);
                var l = children.length;
                var idx = l;
                var childHeight = 0;
                var childBottom = 0;
                var childTop = 0;
                for (var i = 0; i < l; i++) {
                    childHeight = getItemHeight(children[i]);
                    childTop = childBottom;
                    childBottom = childTop + childHeight;
                    if (dragPosition.y < childBottom) {
                        if (currentIndex > i) {
                            if (dragPosition.y < childTop + dragHeight) {
                                idx = i;
                                break;
                            }
                            continue;
                        }
                        idx = i;
                        break;
                    }
                }
                return idx;
            },
        };

        // get new index
        var index = cols > 1 ? location.getGridIndex() : location.getColIndex();
        root.dispatch('MOVE_ITEM', { query: view, index: index });

        // if the index of the item changed, dispatch reorder action
        var currentIndex = dragState.getIndex();

        if (currentIndex === undefined || currentIndex !== index) {
            dragState.setIndex(index);

            if (currentIndex === undefined) return;

            root.dispatch('DID_REORDER_ITEMS', {
                items: root.query('GET_ACTIVE_ITEMS'),
                origin: oldIndex,
                target: index,
            });
        }
    };

    /**
     * Setup action routes
     */
    var route$2 = createRoute({
        DID_ADD_ITEM: addItemView,
        DID_REMOVE_ITEM: removeItemView,
        DID_DRAG_ITEM: dragItem,
    });

    /**
     * Write to view
     * @param root
     * @param actions
     * @param props
     */
    var write$5 = function write(_ref5) {
        var root = _ref5.root,
            props = _ref5.props,
            actions = _ref5.actions,
            shouldOptimize = _ref5.shouldOptimize;
        // route actions
        route$2({ root: root, props: props, actions: actions });
        var dragCoordinates = props.dragCoordinates;

        // available space on horizontal axis
        var horizontalSpace = root.rect.element.width;

        // only draw children that have dimensions
        var visibleChildren = root.childViews.filter(function(child) {
            return child.rect.element.height;
        });

        // sort based on current active items
        var children = root
            .query('GET_ACTIVE_ITEMS')
            .map(function(item) {
                return visibleChildren.find(function(child) {
                    return child.id === item.id;
                });
            })
            .filter(function(item) {
                return item;
            });

        // get index
        var dragIndex = dragCoordinates
            ? getItemIndexByPosition(root, children, dragCoordinates)
            : null;

        // add index is used to reserve the dropped/added item index till the actual item is rendered
        var addIndex = root.ref.addIndex || null;

        // add index no longer needed till possibly next draw
        root.ref.addIndex = null;

        var dragIndexOffset = 0;
        var removeIndexOffset = 0;
        var addIndexOffset = 0;

        if (children.length === 0) return;

        var childRect = children[0].rect.element;
        var itemVerticalMargin = childRect.marginTop + childRect.marginBottom;
        var itemHorizontalMargin = childRect.marginLeft + childRect.marginRight;
        var itemWidth = childRect.width + itemHorizontalMargin;
        var itemHeight = childRect.height + itemVerticalMargin;
        var itemsPerRow = getItemsPerRow(horizontalSpace, itemWidth);

        // stack
        if (itemsPerRow === 1) {
            var offsetY = 0;
            var dragOffset = 0;

            children.forEach(function(child, index) {
                if (dragIndex) {
                    var dist = index - dragIndex;
                    if (dist === -2) {
                        dragOffset = -itemVerticalMargin * 0.25;
                    } else if (dist === -1) {
                        dragOffset = -itemVerticalMargin * 0.75;
                    } else if (dist === 0) {
                        dragOffset = itemVerticalMargin * 0.75;
                    } else if (dist === 1) {
                        dragOffset = itemVerticalMargin * 0.25;
                    } else {
                        dragOffset = 0;
                    }
                }

                if (shouldOptimize) {
                    child.translateX = null;
                    child.translateY = null;
                }

                if (!child.markedForRemoval) {
                    moveItem(child, 0, offsetY + dragOffset);
                }

                var itemHeight = child.rect.element.height + itemVerticalMargin;

                var visualHeight = itemHeight * (child.markedForRemoval ? child.opacity : 1);

                offsetY += visualHeight;
            });
        }
        // grid
        else {
            var prevX = 0;
            var prevY = 0;

            children.forEach(function(child, index) {
                if (index === dragIndex) {
                    dragIndexOffset = 1;
                }

                if (index === addIndex) {
                    addIndexOffset += 1;
                }

                if (child.markedForRemoval && child.opacity < 0.5) {
                    removeIndexOffset -= 1;
                }

                var visualIndex = index + addIndexOffset + dragIndexOffset + removeIndexOffset;

                var indexX = visualIndex % itemsPerRow;
                var indexY = Math.floor(visualIndex / itemsPerRow);

                var offsetX = indexX * itemWidth;
                var offsetY = indexY * itemHeight;

                var vectorX = Math.sign(offsetX - prevX);
                var vectorY = Math.sign(offsetY - prevY);

                prevX = offsetX;
                prevY = offsetY;

                if (child.markedForRemoval) return;

                if (shouldOptimize) {
                    child.translateX = null;
                    child.translateY = null;
                }

                moveItem(child, offsetX, offsetY, vectorX, vectorY);
            });
        }
    };

    /**
     * Filters actions that are meant specifically for a certain child of the list
     * @param child
     * @param actions
     */
    var filterSetItemActions = function filterSetItemActions(child, actions) {
        return actions.filter(function(action) {
            // if action has an id, filter out actions that don't have this child id
            if (action.data && action.data.id) {
                return child.id === action.data.id;
            }

            // allow all other actions
            return true;
        });
    };

    var list = createView({
        create: create$8,
        write: write$5,
        tag: 'ul',
        name: 'list',
        didWriteView: function didWriteView(_ref6) {
            var root = _ref6.root;
            root.childViews
                .filter(function(view) {
                    return view.markedForRemoval && view.opacity === 0 && view.resting;
                })
                .forEach(function(view) {
                    view._destroy();
                    root.removeChildView(view);
                });
        },
        filterFrameActionsForChild: filterSetItemActions,
        mixins: {
            apis: ['dragCoordinates'],
        },
    });

    var create$9 = function create(_ref) {
        var root = _ref.root,
            props = _ref.props;
        root.ref.list = root.appendChildView(root.createChildView(list));
        props.dragCoordinates = null;
        props.overflowing = false;
    };

    var storeDragCoordinates = function storeDragCoordinates(_ref2) {
        var root = _ref2.root,
            props = _ref2.props,
            action = _ref2.action;
        if (!root.query('GET_ITEM_INSERT_LOCATION_FREEDOM')) return;
        props.dragCoordinates = {
            left: action.position.scopeLeft - root.ref.list.rect.element.left,
            top:
                action.position.scopeTop -
                (root.rect.outer.top + root.rect.element.marginTop + root.rect.element.scrollTop),
        };
    };

    var clearDragCoordinates = function clearDragCoordinates(_ref3) {
        var props = _ref3.props;
        props.dragCoordinates = null;
    };

    var route$3 = createRoute({
        DID_DRAG: storeDragCoordinates,
        DID_END_DRAG: clearDragCoordinates,
    });

    var write$6 = function write(_ref4) {
        var root = _ref4.root,
            props = _ref4.props,
            actions = _ref4.actions;

        // route actions
        route$3({ root: root, props: props, actions: actions });

        // current drag position
        root.ref.list.dragCoordinates = props.dragCoordinates;

        // if currently overflowing but no longer received overflow
        if (props.overflowing && !props.overflow) {
            props.overflowing = false;

            // reset overflow state
            root.element.dataset.state = '';
            root.height = null;
        }

        // if is not overflowing currently but does receive overflow value
        if (props.overflow) {
            var newHeight = Math.round(props.overflow);
            if (newHeight !== root.height) {
                props.overflowing = true;
                root.element.dataset.state = 'overflow';
                root.height = newHeight;
            }
        }
    };

    var listScroller = createView({
        create: create$9,
        write: write$6,
        name: 'list-scroller',
        mixins: {
            apis: ['overflow', 'dragCoordinates'],
            styles: ['height', 'translateY'],
            animations: {
                translateY: 'spring',
            },
        },
    });

    var attrToggle = function attrToggle(element, name, state) {
        var enabledValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
        if (state) {
            attr(element, name, enabledValue);
        } else {
            element.removeAttribute(name);
        }
    };

    var resetFileInput = function resetFileInput(input) {
        // no value, no need to reset
        if (!input || input.value === '') {
            return;
        }

        try {
            // for modern browsers
            input.value = '';
        } catch (err) {}

        // for IE10
        if (input.value) {
            // quickly append input to temp form and reset form
            var form = createElement$1('form');
            var parentNode = input.parentNode;
            var ref = input.nextSibling;
            form.appendChild(input);
            form.reset();

            // re-inject input where it originally was
            if (ref) {
                parentNode.insertBefore(input, ref);
            } else {
                parentNode.appendChild(input);
            }
        }
    };

    var create$a = function create(_ref) {
        var root = _ref.root,
            props = _ref.props;

        // set id so can be referenced from outside labels
        root.element.id = 'filepond--browser-' + props.id;

        // set name of element (is removed when a value is set)
        attr(root.element, 'name', root.query('GET_NAME'));

        // we have to link this element to the status element
        attr(root.element, 'aria-controls', 'filepond--assistant-' + props.id);

        // set label, we use labelled by as otherwise the screenreader does not read the "browse" text in the label (as it has tabindex: 0)
        attr(root.element, 'aria-labelledby', 'filepond--drop-label-' + props.id);

        // set configurable props
        setAcceptedFileTypes({
            root: root,
            action: { value: root.query('GET_ACCEPTED_FILE_TYPES') },
        });
        toggleAllowMultiple({ root: root, action: { value: root.query('GET_ALLOW_MULTIPLE') } });
        toggleDirectoryFilter({
            root: root,
            action: { value: root.query('GET_ALLOW_DIRECTORIES_ONLY') },
        });
        toggleDisabled({ root: root });
        toggleRequired({ root: root, action: { value: root.query('GET_REQUIRED') } });
        setCaptureMethod({ root: root, action: { value: root.query('GET_CAPTURE_METHOD') } });

        // handle changes to the input field
        root.ref.handleChange = function(e) {
            if (!root.element.value) {
                return;
            }

            // extract files and move value of webkitRelativePath path to _relativePath
            var files = Array.from(root.element.files).map(function(file) {
                file._relativePath = file.webkitRelativePath;
                return file;
            });

            // we add a little delay so the OS file select window can move out of the way before we add our file
            setTimeout(function() {
                // load files
                props.onload(files);

                // reset input, it's just for exposing a method to drop files, should not retain any state
                resetFileInput(root.element);
            }, 250);
        };

        root.element.addEventListener('change', root.ref.handleChange);
    };

    var setAcceptedFileTypes = function setAcceptedFileTypes(_ref2) {
        var root = _ref2.root,
            action = _ref2.action;
        if (!root.query('GET_ALLOW_SYNC_ACCEPT_ATTRIBUTE')) return;
        attrToggle(
            root.element,
            'accept',
            !!action.value,
            action.value ? action.value.join(',') : ''
        );
    };

    var toggleAllowMultiple = function toggleAllowMultiple(_ref3) {
        var root = _ref3.root,
            action = _ref3.action;
        attrToggle(root.element, 'multiple', action.value);
    };

    var toggleDirectoryFilter = function toggleDirectoryFilter(_ref4) {
        var root = _ref4.root,
            action = _ref4.action;
        attrToggle(root.element, 'webkitdirectory', action.value);
    };

    var toggleDisabled = function toggleDisabled(_ref5) {
        var root = _ref5.root;
        var isDisabled = root.query('GET_DISABLED');
        var doesAllowBrowse = root.query('GET_ALLOW_BROWSE');
        var disableField = isDisabled || !doesAllowBrowse;
        attrToggle(root.element, 'disabled', disableField);
    };

    var toggleRequired = function toggleRequired(_ref6) {
        var root = _ref6.root,
            action = _ref6.action;
        // want to remove required, always possible
        if (!action.value) {
            attrToggle(root.element, 'required', false);
        }
        // if want to make required, only possible when zero items
        else if (root.query('GET_TOTAL_ITEMS') === 0) {
            attrToggle(root.element, 'required', true);
        }
    };

    var setCaptureMethod = function setCaptureMethod(_ref7) {
        var root = _ref7.root,
            action = _ref7.action;
        attrToggle(
            root.element,
            'capture',
            !!action.value,
            action.value === true ? '' : action.value
        );
    };

    var updateRequiredStatus = function updateRequiredStatus(_ref8) {
        var root = _ref8.root;
        var element = root.element;
        // always remove the required attribute when more than zero items
        if (root.query('GET_TOTAL_ITEMS') > 0) {
            attrToggle(element, 'required', false);
            attrToggle(element, 'name', false);
        } else {
            // add name attribute
            attrToggle(element, 'name', true, root.query('GET_NAME'));

            // remove any validation messages
            var shouldCheckValidity = root.query('GET_CHECK_VALIDITY');
            if (shouldCheckValidity) {
                element.setCustomValidity('');
            }

            // we only add required if the field has been deemed required
            if (root.query('GET_REQUIRED')) {
                attrToggle(element, 'required', true);
            }
        }
    };

    var updateFieldValidityStatus = function updateFieldValidityStatus(_ref9) {
        var root = _ref9.root;
        var shouldCheckValidity = root.query('GET_CHECK_VALIDITY');
        if (!shouldCheckValidity) return;
        root.element.setCustomValidity(root.query('GET_LABEL_INVALID_FIELD'));
    };

    var browser = createView({
        tag: 'input',
        name: 'browser',
        ignoreRect: true,
        ignoreRectUpdate: true,
        attributes: {
            type: 'file',
        },

        create: create$a,
        destroy: function destroy(_ref10) {
            var root = _ref10.root;
            root.element.removeEventListener('change', root.ref.handleChange);
        },
        write: createRoute({
            DID_LOAD_ITEM: updateRequiredStatus,
            DID_REMOVE_ITEM: updateRequiredStatus,
            DID_THROW_ITEM_INVALID: updateFieldValidityStatus,

            DID_SET_DISABLED: toggleDisabled,
            DID_SET_ALLOW_BROWSE: toggleDisabled,
            DID_SET_ALLOW_DIRECTORIES_ONLY: toggleDirectoryFilter,
            DID_SET_ALLOW_MULTIPLE: toggleAllowMultiple,
            DID_SET_ACCEPTED_FILE_TYPES: setAcceptedFileTypes,
            DID_SET_CAPTURE_METHOD: setCaptureMethod,
            DID_SET_REQUIRED: toggleRequired,
        }),
    });

    var Key = {
        ENTER: 13,
        SPACE: 32,
    };

    var create$b = function create(_ref) {
        var root = _ref.root,
            props = _ref.props;

        // create the label and link it to the file browser
        var label = createElement$1('label');
        attr(label, 'for', 'filepond--browser-' + props.id);

        // use for labeling file input (aria-labelledby on file input)
        attr(label, 'id', 'filepond--drop-label-' + props.id);

        // hide the label for screenreaders, the input element will read the contents of the label when it's focussed. If we don't set aria-hidden the screenreader will also navigate the contents of the label separately from the input.
        attr(label, 'aria-hidden', 'true');

        // handle keys
        root.ref.handleKeyDown = function(e) {
            var isActivationKey = e.keyCode === Key.ENTER || e.keyCode === Key.SPACE;
            if (!isActivationKey) return;
            // stops from triggering the element a second time
            e.preventDefault();

            // click link (will then in turn activate file input)
            root.ref.label.click();
        };

        root.ref.handleClick = function(e) {
            var isLabelClick = e.target === label || label.contains(e.target);

            // don't want to click twice
            if (isLabelClick) return;

            // click link (will then in turn activate file input)
            root.ref.label.click();
        };

        // attach events
        label.addEventListener('keydown', root.ref.handleKeyDown);
        root.element.addEventListener('click', root.ref.handleClick);

        // update
        updateLabelValue(label, props.caption);

        // add!
        root.appendChild(label);
        root.ref.label = label;
    };

    var updateLabelValue = function updateLabelValue(label, value) {
        label.innerHTML = value;
        var clickable = label.querySelector('.filepond--label-action');
        if (clickable) {
            attr(clickable, 'tabindex', '0');
        }
        return value;
    };

    var dropLabel = createView({
        name: 'drop-label',
        ignoreRect: true,
        create: create$b,
        destroy: function destroy(_ref2) {
            var root = _ref2.root;
            root.ref.label.addEventListener('keydown', root.ref.handleKeyDown);
            root.element.removeEventListener('click', root.ref.handleClick);
        },
        write: createRoute({
            DID_SET_LABEL_IDLE: function DID_SET_LABEL_IDLE(_ref3) {
                var root = _ref3.root,
                    action = _ref3.action;
                updateLabelValue(root.ref.label, action.value);
            },
        }),

        mixins: {
            styles: ['opacity', 'translateX', 'translateY'],
            animations: {
                opacity: { type: 'tween', duration: 150 },
                translateX: 'spring',
                translateY: 'spring',
            },
        },
    });

    var blob = createView({
        name: 'drip-blob',
        ignoreRect: true,
        mixins: {
            styles: ['translateX', 'translateY', 'scaleX', 'scaleY', 'opacity'],
            animations: {
                scaleX: 'spring',
                scaleY: 'spring',
                translateX: 'spring',
                translateY: 'spring',
                opacity: { type: 'tween', duration: 250 },
            },
        },
    });

    var addBlob = function addBlob(_ref) {
        var root = _ref.root;
        var centerX = root.rect.element.width * 0.5;
        var centerY = root.rect.element.height * 0.5;

        root.ref.blob = root.appendChildView(
            root.createChildView(blob, {
                opacity: 0,
                scaleX: 2.5,
                scaleY: 2.5,
                translateX: centerX,
                translateY: centerY,
            })
        );
    };

    var moveBlob = function moveBlob(_ref2) {
        var root = _ref2.root,
            action = _ref2.action;
        if (!root.ref.blob) {
            addBlob({ root: root });
            return;
        }

        root.ref.blob.translateX = action.position.scopeLeft;
        root.ref.blob.translateY = action.position.scopeTop;
        root.ref.blob.scaleX = 1;
        root.ref.blob.scaleY = 1;
        root.ref.blob.opacity = 1;
    };

    var hideBlob = function hideBlob(_ref3) {
        var root = _ref3.root;
        if (!root.ref.blob) {
            return;
        }
        root.ref.blob.opacity = 0;
    };

    var explodeBlob = function explodeBlob(_ref4) {
        var root = _ref4.root;
        if (!root.ref.blob) {
            return;
        }
        root.ref.blob.scaleX = 2.5;
        root.ref.blob.scaleY = 2.5;
        root.ref.blob.opacity = 0;
    };

    var write$7 = function write(_ref5) {
        var root = _ref5.root,
            props = _ref5.props,
            actions = _ref5.actions;
        route$4({ root: root, props: props, actions: actions });
        var blob = root.ref.blob;

        if (actions.length === 0 && blob && blob.opacity === 0) {
            root.removeChildView(blob);
            root.ref.blob = null;
        }
    };

    var route$4 = createRoute({
        DID_DRAG: moveBlob,
        DID_DROP: explodeBlob,
        DID_END_DRAG: hideBlob,
    });

    var drip = createView({
        ignoreRect: true,
        ignoreRectUpdate: true,
        name: 'drip',
        write: write$7,
    });

    var setInputFiles = function setInputFiles(element, files) {
        try {
            // Create a DataTransfer instance and add a newly created file
            var dataTransfer = new DataTransfer();
            files.forEach(function(file) {
                if (file instanceof File) {
                    dataTransfer.items.add(file);
                } else {
                    dataTransfer.items.add(
                        new File([file], file.name, {
                            type: file.type,
                        })
                    );
                }
            });

            // Assign the DataTransfer files list to the file input
            element.files = dataTransfer.files;
        } catch (err) {
            return false;
        }
        return true;
    };

    var create$c = function create(_ref) {
        var root = _ref.root;
        return (root.ref.fields = {});
    };

    var getField = function getField(root, id) {
        return root.ref.fields[id];
    };

    var syncFieldPositionsWithItems = function syncFieldPositionsWithItems(root) {
        root.query('GET_ACTIVE_ITEMS').forEach(function(item) {
            if (!root.ref.fields[item.id]) return;
            root.element.appendChild(root.ref.fields[item.id]);
        });
    };

    var didReorderItems = function didReorderItems(_ref2) {
        var root = _ref2.root;
        return syncFieldPositionsWithItems(root);
    };

    var didAddItem = function didAddItem(_ref3) {
        var root = _ref3.root,
            action = _ref3.action;
        var fileItem = root.query('GET_ITEM', action.id);
        var isLocalFile = fileItem.origin === FileOrigin.LOCAL;
        var shouldUseFileInput = !isLocalFile && root.query('SHOULD_UPDATE_FILE_INPUT');
        var dataContainer = createElement$1('input');
        dataContainer.type = shouldUseFileInput ? 'file' : 'hidden';
        dataContainer.name = root.query('GET_NAME');
        dataContainer.disabled = root.query('GET_DISABLED');
        root.ref.fields[action.id] = dataContainer;
        syncFieldPositionsWithItems(root);
    };

    var didLoadItem$1 = function didLoadItem(_ref4) {
        var root = _ref4.root,
            action = _ref4.action;
        var field = getField(root, action.id);
        if (!field) return;

        // store server ref in hidden input
        if (action.serverFileReference !== null) field.value = action.serverFileReference;

        // store file item in file input
        if (!root.query('SHOULD_UPDATE_FILE_INPUT')) return;

        var fileItem = root.query('GET_ITEM', action.id);
        setInputFiles(field, [fileItem.file]);
    };

    var didPrepareOutput = function didPrepareOutput(_ref5) {
        var root = _ref5.root,
            action = _ref5.action;
        // this timeout pushes the handler after 'load'
        if (!root.query('SHOULD_UPDATE_FILE_INPUT')) return;
        setTimeout(function() {
            var field = getField(root, action.id);
            if (!field) return;
            setInputFiles(field, [action.file]);
        }, 0);
    };

    var didSetDisabled = function didSetDisabled(_ref6) {
        var root = _ref6.root;
        root.element.disabled = root.query('GET_DISABLED');
    };

    var didRemoveItem = function didRemoveItem(_ref7) {
        var root = _ref7.root,
            action = _ref7.action;
        var field = getField(root, action.id);
        if (!field) return;
        if (field.parentNode) field.parentNode.removeChild(field);
        delete root.ref.fields[action.id];
    };

    // only runs for server files. will refuse to update the value if the field
    // is a file field
    var didDefineValue = function didDefineValue(_ref8) {
        var root = _ref8.root,
            action = _ref8.action;
        var field = getField(root, action.id);
        if (!field) return;
        if (action.value === null) {
            // clear field value
            field.removeAttribute('value');
        } else {
            // set field value
            if (field.type != 'file') {
                field.value = action.value;
            }
        }
        syncFieldPositionsWithItems(root);
    };

    var write$8 = createRoute({
        DID_SET_DISABLED: didSetDisabled,
        DID_ADD_ITEM: didAddItem,
        DID_LOAD_ITEM: didLoadItem$1,
        DID_REMOVE_ITEM: didRemoveItem,
        DID_DEFINE_VALUE: didDefineValue,
        DID_PREPARE_OUTPUT: didPrepareOutput,
        DID_REORDER_ITEMS: didReorderItems,
        DID_SORT_ITEMS: didReorderItems,
    });

    var data = createView({
        tag: 'fieldset',
        name: 'data',
        create: create$c,
        write: write$8,
        ignoreRect: true,
    });

    var getRootNode = function getRootNode(element) {
        return 'getRootNode' in element ? element.getRootNode() : document;
    };

    var images = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg', 'tiff'];
    var text$1 = ['css', 'csv', 'html', 'txt'];
    var map = {
        zip: 'zip|compressed',
        epub: 'application/epub+zip',
    };

    var guesstimateMimeType = function guesstimateMimeType() {
        var extension = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        extension = extension.toLowerCase();
        if (images.includes(extension)) {
            return (
                'image/' +
                (extension === 'jpg' ? 'jpeg' : extension === 'svg' ? 'svg+xml' : extension)
            );
        }
        if (text$1.includes(extension)) {
            return 'text/' + extension;
        }

        return map[extension] || '';
    };

    var requestDataTransferItems = function requestDataTransferItems(dataTransfer) {
        return new Promise(function(resolve, reject) {
            // try to get links from transfer, if found we'll exit immediately (unless a file is in the dataTransfer as well, this is because Firefox could represent the file as a URL and a file object at the same time)
            var links = getLinks(dataTransfer);
            if (links.length && !hasFiles(dataTransfer)) {
                return resolve(links);
            }
            // try to get files from the transfer
            getFiles(dataTransfer).then(resolve);
        });
    };

    /**
     * Test if datatransfer has files
     */
    var hasFiles = function hasFiles(dataTransfer) {
        if (dataTransfer.files) return dataTransfer.files.length > 0;
        return false;
    };

    /**
     * Extracts files from a DataTransfer object
     */
    var getFiles = function getFiles(dataTransfer) {
        return new Promise(function(resolve, reject) {
            // get the transfer items as promises
            var promisedFiles = (dataTransfer.items ? Array.from(dataTransfer.items) : [])
                // only keep file system items (files and directories)
                .filter(function(item) {
                    return isFileSystemItem(item);
                })

                // map each item to promise
                .map(function(item) {
                    return getFilesFromItem(item);
                });

            // if is empty, see if we can extract some info from the files property as a fallback
            if (!promisedFiles.length) {
                // TODO: test for directories (should not be allowed)
                // Use FileReader, problem is that the files property gets lost in the process
                resolve(dataTransfer.files ? Array.from(dataTransfer.files) : []);
                return;
            }

            // done!
            Promise.all(promisedFiles)
                .then(function(returnedFileGroups) {
                    // flatten groups
                    var files = [];
                    returnedFileGroups.forEach(function(group) {
                        files.push.apply(files, group);
                    });

                    // done (filter out empty files)!
                    resolve(
                        files
                            .filter(function(file) {
                                return file;
                            })
                            .map(function(file) {
                                if (!file._relativePath)
                                    file._relativePath = file.webkitRelativePath;
                                return file;
                            })
                    );
                })
                .catch(console.error);
        });
    };

    var isFileSystemItem = function isFileSystemItem(item) {
        if (isEntry(item)) {
            var entry = getAsEntry(item);
            if (entry) {
                return entry.isFile || entry.isDirectory;
            }
        }
        return item.kind === 'file';
    };

    var getFilesFromItem = function getFilesFromItem(item) {
        return new Promise(function(resolve, reject) {
            if (isDirectoryEntry(item)) {
                getFilesInDirectory(getAsEntry(item))
                    .then(resolve)
                    .catch(reject);
                return;
            }

            resolve([item.getAsFile()]);
        });
    };

    var getFilesInDirectory = function getFilesInDirectory(entry) {
        return new Promise(function(resolve, reject) {
            var files = [];

            // the total entries to read
            var dirCounter = 0;
            var fileCounter = 0;

            var resolveIfDone = function resolveIfDone() {
                if (fileCounter === 0 && dirCounter === 0) {
                    resolve(files);
                }
            };

            // the recursive function
            var readEntries = function readEntries(dirEntry) {
                dirCounter++;

                var directoryReader = dirEntry.createReader();

                // directories are returned in batches, we need to process all batches before we're done
                var readBatch = function readBatch() {
                    directoryReader.readEntries(function(entries) {
                        if (entries.length === 0) {
                            dirCounter--;
                            resolveIfDone();
                            return;
                        }

                        entries.forEach(function(entry) {
                            // recursively read more directories
                            if (entry.isDirectory) {
                                readEntries(entry);
                            } else {
                                // read as file
                                fileCounter++;

                                entry.file(function(file) {
                                    var correctedFile = correctMissingFileType(file);
                                    if (entry.fullPath)
                                        correctedFile._relativePath = entry.fullPath;
                                    files.push(correctedFile);
                                    fileCounter--;
                                    resolveIfDone();
                                });
                            }
                        });

                        // try to get next batch of files
                        readBatch();
                    }, reject);
                };

                // read first batch of files
                readBatch();
            };

            // go!
            readEntries(entry);
        });
    };

    var correctMissingFileType = function correctMissingFileType(file) {
        if (file.type.length) return file;
        var date = file.lastModifiedDate;
        var name = file.name;
        var type = guesstimateMimeType(getExtensionFromFilename(file.name));
        if (!type.length) return file;
        file = file.slice(0, file.size, type);
        file.name = name;
        file.lastModifiedDate = date;
        return file;
    };

    var isDirectoryEntry = function isDirectoryEntry(item) {
        return isEntry(item) && (getAsEntry(item) || {}).isDirectory;
    };

    var isEntry = function isEntry(item) {
        return 'webkitGetAsEntry' in item;
    };

    var getAsEntry = function getAsEntry(item) {
        return item.webkitGetAsEntry();
    };

    /**
     * Extracts links from a DataTransfer object
     */
    var getLinks = function getLinks(dataTransfer) {
        var links = [];
        try {
            // look in meta data property
            links = getLinksFromTransferMetaData(dataTransfer);
            if (links.length) {
                return links;
            }
            links = getLinksFromTransferURLData(dataTransfer);
        } catch (e) {
            // nope nope nope (probably IE trouble)
        }
        return links;
    };

    var getLinksFromTransferURLData = function getLinksFromTransferURLData(dataTransfer) {
        var data = dataTransfer.getData('url');
        if (typeof data === 'string' && data.length) {
            return [data];
        }
        return [];
    };

    var getLinksFromTransferMetaData = function getLinksFromTransferMetaData(dataTransfer) {
        var data = dataTransfer.getData('text/html');
        if (typeof data === 'string' && data.length) {
            var matches = data.match(/src\s*=\s*"(.+?)"/);
            if (matches) {
                return [matches[1]];
            }
        }
        return [];
    };

    var dragNDropObservers = [];

    var eventPosition = function eventPosition(e) {
        return {
            pageLeft: e.pageX,
            pageTop: e.pageY,
            scopeLeft: e.offsetX || e.layerX,
            scopeTop: e.offsetY || e.layerY,
        };
    };

    var createDragNDropClient = function createDragNDropClient(
        element,
        scopeToObserve,
        filterElement
    ) {
        var observer = getDragNDropObserver(scopeToObserve);

        var client = {
            element: element,
            filterElement: filterElement,
            state: null,
            ondrop: function ondrop() {},
            onenter: function onenter() {},
            ondrag: function ondrag() {},
            onexit: function onexit() {},
            onload: function onload() {},
            allowdrop: function allowdrop() {},
        };

        client.destroy = observer.addListener(client);

        return client;
    };

    var getDragNDropObserver = function getDragNDropObserver(element) {
        // see if already exists, if so, return
        var observer = dragNDropObservers.find(function(item) {
            return item.element === element;
        });
        if (observer) {
            return observer;
        }

        // create new observer, does not yet exist for this element
        var newObserver = createDragNDropObserver(element);
        dragNDropObservers.push(newObserver);
        return newObserver;
    };

    var createDragNDropObserver = function createDragNDropObserver(element) {
        var clients = [];

        var routes = {
            dragenter: dragenter,
            dragover: dragover,
            dragleave: dragleave,
            drop: drop,
        };

        var handlers = {};

        forin(routes, function(event, createHandler) {
            handlers[event] = createHandler(element, clients);
            element.addEventListener(event, handlers[event], false);
        });

        var observer = {
            element: element,
            addListener: function addListener(client) {
                // add as client
                clients.push(client);

                // return removeListener function
                return function() {
                    // remove client
                    clients.splice(clients.indexOf(client), 1);

                    // if no more clients, clean up observer
                    if (clients.length === 0) {
                        dragNDropObservers.splice(dragNDropObservers.indexOf(observer), 1);

                        forin(routes, function(event) {
                            element.removeEventListener(event, handlers[event], false);
                        });
                    }
                };
            },
        };

        return observer;
    };

    var elementFromPoint = function elementFromPoint(root, point) {
        if (!('elementFromPoint' in root)) {
            root = document;
        }
        return root.elementFromPoint(point.x, point.y);
    };

    var isEventTarget = function isEventTarget(e, target) {
        // get root
        var root = getRootNode(target);

        // get element at position
        // if root is not actual shadow DOM and does not have elementFromPoint method, use the one on document
        var elementAtPosition = elementFromPoint(root, {
            x: e.pageX - window.pageXOffset,
            y: e.pageY - window.pageYOffset,
        });

        // test if target is the element or if one of its children is
        return elementAtPosition === target || target.contains(elementAtPosition);
    };

    var initialTarget = null;

    var setDropEffect = function setDropEffect(dataTransfer, effect) {
        // is in try catch as IE11 will throw error if not
        try {
            dataTransfer.dropEffect = effect;
        } catch (e) {}
    };

    var dragenter = function dragenter(root, clients) {
        return function(e) {
            e.preventDefault();

            initialTarget = e.target;

            clients.forEach(function(client) {
                var element = client.element,
                    onenter = client.onenter;

                if (isEventTarget(e, element)) {
                    client.state = 'enter';

                    // fire enter event
                    onenter(eventPosition(e));
                }
            });
        };
    };

    var dragover = function dragover(root, clients) {
        return function(e) {
            e.preventDefault();

            var dataTransfer = e.dataTransfer;

            requestDataTransferItems(dataTransfer).then(function(items) {
                var overDropTarget = false;

                clients.some(function(client) {
                    var filterElement = client.filterElement,
                        element = client.element,
                        onenter = client.onenter,
                        onexit = client.onexit,
                        ondrag = client.ondrag,
                        allowdrop = client.allowdrop;

                    // by default we can drop
                    setDropEffect(dataTransfer, 'copy');

                    // allow transfer of these items
                    var allowsTransfer = allowdrop(items);

                    // only used when can be dropped on page
                    if (!allowsTransfer) {
                        setDropEffect(dataTransfer, 'none');
                        return;
                    }

                    // targetting this client
                    if (isEventTarget(e, element)) {
                        overDropTarget = true;

                        // had no previous state, means we are entering this client
                        if (client.state === null) {
                            client.state = 'enter';
                            onenter(eventPosition(e));
                            return;
                        }

                        // now over element (no matter if it allows the drop or not)
                        client.state = 'over';

                        // needs to allow transfer
                        if (filterElement && !allowsTransfer) {
                            setDropEffect(dataTransfer, 'none');
                            return;
                        }

                        // dragging
                        ondrag(eventPosition(e));
                    } else {
                        // should be over an element to drop
                        if (filterElement && !overDropTarget) {
                            setDropEffect(dataTransfer, 'none');
                        }

                        // might have just left this client?
                        if (client.state) {
                            client.state = null;
                            onexit(eventPosition(e));
                        }
                    }
                });
            });
        };
    };

    var drop = function drop(root, clients) {
        return function(e) {
            e.preventDefault();

            var dataTransfer = e.dataTransfer;

            requestDataTransferItems(dataTransfer).then(function(items) {
                clients.forEach(function(client) {
                    var filterElement = client.filterElement,
                        element = client.element,
                        ondrop = client.ondrop,
                        onexit = client.onexit,
                        allowdrop = client.allowdrop;

                    client.state = null;

                    // if we're filtering on element we need to be over the element to drop
                    if (filterElement && !isEventTarget(e, element)) return;

                    // no transfer for this client
                    if (!allowdrop(items)) return onexit(eventPosition(e));

                    // we can drop these items on this client
                    ondrop(eventPosition(e), items);
                });
            });
        };
    };

    var dragleave = function dragleave(root, clients) {
        return function(e) {
            if (initialTarget !== e.target) {
                return;
            }

            clients.forEach(function(client) {
                var onexit = client.onexit;

                client.state = null;

                onexit(eventPosition(e));
            });
        };
    };

    var createHopper = function createHopper(scope, validateItems, options) {
        // is now hopper scope
        scope.classList.add('filepond--hopper');

        // shortcuts
        var catchesDropsOnPage = options.catchesDropsOnPage,
            requiresDropOnElement = options.requiresDropOnElement,
            _options$filterItems = options.filterItems,
            filterItems =
                _options$filterItems === void 0
                    ? function(items) {
                          return items;
                      }
                    : _options$filterItems;

        // create a dnd client
        var client = createDragNDropClient(
            scope,
            catchesDropsOnPage ? document.documentElement : scope,
            requiresDropOnElement
        );

        // current client state
        var lastState = '';
        var currentState = '';

        // determines if a file may be dropped
        client.allowdrop = function(items) {
            // TODO: if we can, throw error to indicate the items cannot by dropped

            return validateItems(filterItems(items));
        };

        client.ondrop = function(position, items) {
            var filteredItems = filterItems(items);

            if (!validateItems(filteredItems)) {
                api.ondragend(position);
                return;
            }

            currentState = 'drag-drop';

            api.onload(filteredItems, position);
        };

        client.ondrag = function(position) {
            api.ondrag(position);
        };

        client.onenter = function(position) {
            currentState = 'drag-over';

            api.ondragstart(position);
        };

        client.onexit = function(position) {
            currentState = 'drag-exit';

            api.ondragend(position);
        };

        var api = {
            updateHopperState: function updateHopperState() {
                if (lastState !== currentState) {
                    scope.dataset.hopperState = currentState;
                    lastState = currentState;
                }
            },
            onload: function onload() {},
            ondragstart: function ondragstart() {},
            ondrag: function ondrag() {},
            ondragend: function ondragend() {},
            destroy: function destroy() {
                // destroy client
                client.destroy();
            },
        };

        return api;
    };

    var listening = false;
    var listeners$1 = [];

    var handlePaste = function handlePaste(e) {
        // if is pasting in input or textarea and the target is outside of a filepond scope, ignore
        var activeEl = document.activeElement;
        if (activeEl && /textarea|input/i.test(activeEl.nodeName)) {
            // test textarea or input is contained in filepond root
            var inScope = false;
            var element = activeEl;
            while (element !== document.body) {
                if (element.classList.contains('filepond--root')) {
                    inScope = true;
                    break;
                }
                element = element.parentNode;
            }

            if (!inScope) return;
        }

        requestDataTransferItems(e.clipboardData).then(function(files) {
            // no files received
            if (!files.length) {
                return;
            }

            // notify listeners of received files
            listeners$1.forEach(function(listener) {
                return listener(files);
            });
        });
    };

    var listen = function listen(cb) {
        // can't add twice
        if (listeners$1.includes(cb)) {
            return;
        }

        // add initial listener
        listeners$1.push(cb);

        // setup paste listener for entire page
        if (listening) {
            return;
        }

        listening = true;
        document.addEventListener('paste', handlePaste);
    };

    var unlisten = function unlisten(listener) {
        arrayRemove(listeners$1, listeners$1.indexOf(listener));

        // clean up
        if (listeners$1.length === 0) {
            document.removeEventListener('paste', handlePaste);
            listening = false;
        }
    };

    var createPaster = function createPaster() {
        var cb = function cb(files) {
            api.onload(files);
        };

        var api = {
            destroy: function destroy() {
                unlisten(cb);
            },
            onload: function onload() {},
        };

        listen(cb);

        return api;
    };

    /**
     * Creates the file view
     */
    var create$d = function create(_ref) {
        var root = _ref.root,
            props = _ref.props;
        root.element.id = 'filepond--assistant-' + props.id;
        attr(root.element, 'role', 'status');
        attr(root.element, 'aria-live', 'polite');
        attr(root.element, 'aria-relevant', 'additions');
    };

    var addFilesNotificationTimeout = null;
    var notificationClearTimeout = null;

    var filenames = [];

    var assist = function assist(root, message) {
        root.element.textContent = message;
    };

    var clear$1 = function clear(root) {
        root.element.textContent = '';
    };

    var listModified = function listModified(root, filename, label) {
        var total = root.query('GET_TOTAL_ITEMS');
        assist(
            root,
            label +
                ' ' +
                filename +
                ', ' +
                total +
                ' ' +
                (total === 1
                    ? root.query('GET_LABEL_FILE_COUNT_SINGULAR')
                    : root.query('GET_LABEL_FILE_COUNT_PLURAL'))
        );

        // clear group after set amount of time so the status is not read twice
        clearTimeout(notificationClearTimeout);
        notificationClearTimeout = setTimeout(function() {
            clear$1(root);
        }, 1500);
    };

    var isUsingFilePond = function isUsingFilePond(root) {
        return root.element.parentNode.contains(document.activeElement);
    };

    var itemAdded = function itemAdded(_ref2) {
        var root = _ref2.root,
            action = _ref2.action;
        if (!isUsingFilePond(root)) {
            return;
        }

        root.element.textContent = '';
        var item = root.query('GET_ITEM', action.id);
        filenames.push(item.filename);

        clearTimeout(addFilesNotificationTimeout);
        addFilesNotificationTimeout = setTimeout(function() {
            listModified(root, filenames.join(', '), root.query('GET_LABEL_FILE_ADDED'));

            filenames.length = 0;
        }, 750);
    };

    var itemRemoved = function itemRemoved(_ref3) {
        var root = _ref3.root,
            action = _ref3.action;
        if (!isUsingFilePond(root)) {
            return;
        }

        var item = action.item;
        listModified(root, item.filename, root.query('GET_LABEL_FILE_REMOVED'));
    };

    var itemProcessed = function itemProcessed(_ref4) {
        var root = _ref4.root,
            action = _ref4.action;
        // will also notify the user when FilePond is not being used, as the user might be occupied with other activities while uploading a file

        var item = root.query('GET_ITEM', action.id);
        var filename = item.filename;
        var label = root.query('GET_LABEL_FILE_PROCESSING_COMPLETE');

        assist(root, filename + ' ' + label);
    };

    var itemProcessedUndo = function itemProcessedUndo(_ref5) {
        var root = _ref5.root,
            action = _ref5.action;
        var item = root.query('GET_ITEM', action.id);
        var filename = item.filename;
        var label = root.query('GET_LABEL_FILE_PROCESSING_ABORTED');

        assist(root, filename + ' ' + label);
    };

    var itemError = function itemError(_ref6) {
        var root = _ref6.root,
            action = _ref6.action;
        var item = root.query('GET_ITEM', action.id);
        var filename = item.filename;

        // will also notify the user when FilePond is not being used, as the user might be occupied with other activities while uploading a file

        assist(root, action.status.main + ' ' + filename + ' ' + action.status.sub);
    };

    var assistant = createView({
        create: create$d,
        ignoreRect: true,
        ignoreRectUpdate: true,
        write: createRoute({
            DID_LOAD_ITEM: itemAdded,
            DID_REMOVE_ITEM: itemRemoved,
            DID_COMPLETE_ITEM_PROCESSING: itemProcessed,

            DID_ABORT_ITEM_PROCESSING: itemProcessedUndo,
            DID_REVERT_ITEM_PROCESSING: itemProcessedUndo,

            DID_THROW_ITEM_REMOVE_ERROR: itemError,
            DID_THROW_ITEM_LOAD_ERROR: itemError,
            DID_THROW_ITEM_INVALID: itemError,
            DID_THROW_ITEM_PROCESSING_ERROR: itemError,
        }),

        tag: 'span',
        name: 'assistant',
    });

    var toCamels = function toCamels(string) {
        var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
        return string.replace(new RegExp(separator + '.', 'g'), function(sub) {
            return sub.charAt(1).toUpperCase();
        });
    };

    var debounce = function debounce(func) {
        var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
        var immidiateOnly =
            arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var last = Date.now();
        var timeout = null;

        return function() {
            for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
            ) {
                args[_key] = arguments[_key];
            }
            clearTimeout(timeout);

            var dist = Date.now() - last;

            var fn = function fn() {
                last = Date.now();
                func.apply(void 0, args);
            };

            if (dist < interval) {
                // we need to delay by the difference between interval and dist
                // for example: if distance is 10 ms and interval is 16 ms,
                // we need to wait an additional 6ms before calling the function)
                if (!immidiateOnly) {
                    timeout = setTimeout(fn, interval - dist);
                }
            } else {
                // go!
                fn();
            }
        };
    };

    var MAX_FILES_LIMIT = 1000000;

    var prevent = function prevent(e) {
        return e.preventDefault();
    };

    var create$e = function create(_ref) {
        var root = _ref.root,
            props = _ref.props;
        // Add id
        var id = root.query('GET_ID');
        if (id) {
            root.element.id = id;
        }

        // Add className
        var className = root.query('GET_CLASS_NAME');
        if (className) {
            className
                .split(' ')
                .filter(function(name) {
                    return name.length;
                })
                .forEach(function(name) {
                    root.element.classList.add(name);
                });
        }

        // Field label
        root.ref.label = root.appendChildView(
            root.createChildView(
                dropLabel,
                Object.assign({}, props, {
                    translateY: null,
                    caption: root.query('GET_LABEL_IDLE'),
                })
            )
        );

        // List of items
        root.ref.list = root.appendChildView(
            root.createChildView(listScroller, { translateY: null })
        );

        // Background panel
        root.ref.panel = root.appendChildView(root.createChildView(panel, { name: 'panel-root' }));

        // Assistant notifies assistive tech when content changes
        root.ref.assistant = root.appendChildView(
            root.createChildView(assistant, Object.assign({}, props))
        );

        // Data
        root.ref.data = root.appendChildView(root.createChildView(data, Object.assign({}, props)));

        // Measure (tests if fixed height was set)
        // DOCTYPE needs to be set for this to work
        root.ref.measure = createElement$1('div');
        root.ref.measure.style.height = '100%';
        root.element.appendChild(root.ref.measure);

        // information on the root height or fixed height status
        root.ref.bounds = null;

        // apply initial style properties
        root.query('GET_STYLES')
            .filter(function(style) {
                return !isEmpty(style.value);
            })
            .map(function(_ref2) {
                var name = _ref2.name,
                    value = _ref2.value;
                root.element.dataset[name] = value;
            });

        // determine if width changed
        root.ref.widthPrevious = null;
        root.ref.widthUpdated = debounce(function() {
            root.ref.updateHistory = [];
            root.dispatch('DID_RESIZE_ROOT');
        }, 250);

        // history of updates
        root.ref.previousAspectRatio = null;
        root.ref.updateHistory = [];

        // prevent scrolling and zooming on iOS (only if supports pointer events, for then we can enable reorder)
        var canHover = window.matchMedia('(pointer: fine) and (hover: hover)').matches;
        var hasPointerEvents = 'PointerEvent' in window;
        if (root.query('GET_ALLOW_REORDER') && hasPointerEvents && !canHover) {
            root.element.addEventListener('touchmove', prevent, { passive: false });
            root.element.addEventListener('gesturestart', prevent);
        }

        // add credits
        var credits = root.query('GET_CREDITS');
        var hasCredits = credits.length === 2;
        if (hasCredits) {
            var frag = document.createElement('a');
            frag.className = 'filepond--credits';
            frag.setAttribute('aria-hidden', 'true');
            frag.href = credits[0];
            frag.tabindex = -1;
            frag.target = '_blank';
            frag.rel = 'noopener noreferrer';
            frag.textContent = credits[1];
            root.element.appendChild(frag);
            root.ref.credits = frag;
        }
    };

    var write$9 = function write(_ref3) {
        var root = _ref3.root,
            props = _ref3.props,
            actions = _ref3.actions;
        // route actions
        route$5({ root: root, props: props, actions: actions });

        // apply style properties
        actions
            .filter(function(action) {
                return /^DID_SET_STYLE_/.test(action.type);
            })
            .filter(function(action) {
                return !isEmpty(action.data.value);
            })
            .map(function(_ref4) {
                var type = _ref4.type,
                    data = _ref4.data;
                var name = toCamels(type.substring(8).toLowerCase(), '_');
                root.element.dataset[name] = data.value;
                root.invalidateLayout();
            });

        if (root.rect.element.hidden) return;

        if (root.rect.element.width !== root.ref.widthPrevious) {
            root.ref.widthPrevious = root.rect.element.width;
            root.ref.widthUpdated();
        }

        // get box bounds, we do this only once
        var bounds = root.ref.bounds;
        if (!bounds) {
            bounds = root.ref.bounds = calculateRootBoundingBoxHeight(root);

            // destroy measure element
            root.element.removeChild(root.ref.measure);
            root.ref.measure = null;
        }

        // get quick references to various high level parts of the upload tool
        var _root$ref = root.ref,
            hopper = _root$ref.hopper,
            label = _root$ref.label,
            list = _root$ref.list,
            panel = _root$ref.panel;

        // sets correct state to hopper scope
        if (hopper) {
            hopper.updateHopperState();
        }

        // bool to indicate if we're full or not
        var aspectRatio = root.query('GET_PANEL_ASPECT_RATIO');
        var isMultiItem = root.query('GET_ALLOW_MULTIPLE');
        var totalItems = root.query('GET_TOTAL_ITEMS');
        var maxItems = isMultiItem ? root.query('GET_MAX_FILES') || MAX_FILES_LIMIT : 1;
        var atMaxCapacity = totalItems === maxItems;

        // action used to add item
        var addAction = actions.find(function(action) {
            return action.type === 'DID_ADD_ITEM';
        });

        // if reached max capacity and we've just reached it
        if (atMaxCapacity && addAction) {
            // get interaction type
            var interactionMethod = addAction.data.interactionMethod;

            // hide label
            label.opacity = 0;

            if (isMultiItem) {
                label.translateY = -40;
            } else {
                if (interactionMethod === InteractionMethod.API) {
                    label.translateX = 40;
                } else if (interactionMethod === InteractionMethod.BROWSE) {
                    label.translateY = 40;
                } else {
                    label.translateY = 30;
                }
            }
        } else if (!atMaxCapacity) {
            label.opacity = 1;
            label.translateX = 0;
            label.translateY = 0;
        }

        var listItemMargin = calculateListItemMargin(root);

        var listHeight = calculateListHeight(root);

        var labelHeight = label.rect.element.height;
        var currentLabelHeight = !isMultiItem || atMaxCapacity ? 0 : labelHeight;

        var listMarginTop = atMaxCapacity ? list.rect.element.marginTop : 0;
        var listMarginBottom = totalItems === 0 ? 0 : list.rect.element.marginBottom;

        var visualHeight =
            currentLabelHeight + listMarginTop + listHeight.visual + listMarginBottom;
        var boundsHeight =
            currentLabelHeight + listMarginTop + listHeight.bounds + listMarginBottom;

        // link list to label bottom position
        list.translateY =
            Math.max(0, currentLabelHeight - list.rect.element.marginTop) - listItemMargin.top;

        if (aspectRatio) {
            // fixed aspect ratio

            // calculate height based on width
            var width = root.rect.element.width;
            var height = width * aspectRatio;

            // clear history if aspect ratio has changed
            if (aspectRatio !== root.ref.previousAspectRatio) {
                root.ref.previousAspectRatio = aspectRatio;
                root.ref.updateHistory = [];
            }

            // remember this width
            var history = root.ref.updateHistory;
            history.push(width);

            var MAX_BOUNCES = 2;
            if (history.length > MAX_BOUNCES * 2) {
                var l = history.length;
                var bottom = l - 10;
                var bounces = 0;
                for (var i = l; i >= bottom; i--) {
                    if (history[i] === history[i - 2]) {
                        bounces++;
                    }

                    if (bounces >= MAX_BOUNCES) {
                        // dont adjust height
                        return;
                    }
                }
            }

            // fix height of panel so it adheres to aspect ratio
            panel.scalable = false;
            panel.height = height;

            // available height for list
            var listAvailableHeight =
                // the height of the panel minus the label height
                height -
                currentLabelHeight -
                // the room we leave open between the end of the list and the panel bottom
                (listMarginBottom - listItemMargin.bottom) -
                // if we're full we need to leave some room between the top of the panel and the list
                (atMaxCapacity ? listMarginTop : 0);

            if (listHeight.visual > listAvailableHeight) {
                list.overflow = listAvailableHeight;
            } else {
                list.overflow = null;
            }

            // set container bounds (so pushes siblings downwards)
            root.height = height;
        } else if (bounds.fixedHeight) {
            // fixed height

            // fix height of panel
            panel.scalable = false;

            // available height for list
            var _listAvailableHeight =
                // the height of the panel minus the label height
                bounds.fixedHeight -
                currentLabelHeight -
                // the room we leave open between the end of the list and the panel bottom
                (listMarginBottom - listItemMargin.bottom) -
                // if we're full we need to leave some room between the top of the panel and the list
                (atMaxCapacity ? listMarginTop : 0);

            // set list height
            if (listHeight.visual > _listAvailableHeight) {
                list.overflow = _listAvailableHeight;
            } else {
                list.overflow = null;
            }

            // no need to set container bounds as these are handles by CSS fixed height
        } else if (bounds.cappedHeight) {
            // max-height

            // not a fixed height panel
            var isCappedHeight = visualHeight >= bounds.cappedHeight;
            var panelHeight = Math.min(bounds.cappedHeight, visualHeight);
            panel.scalable = true;
            panel.height = isCappedHeight
                ? panelHeight
                : panelHeight - listItemMargin.top - listItemMargin.bottom;

            // available height for list
            var _listAvailableHeight2 =
                // the height of the panel minus the label height
                panelHeight -
                currentLabelHeight -
                // the room we leave open between the end of the list and the panel bottom
                (listMarginBottom - listItemMargin.bottom) -
                // if we're full we need to leave some room between the top of the panel and the list
                (atMaxCapacity ? listMarginTop : 0);

            // set list height (if is overflowing)
            if (visualHeight > bounds.cappedHeight && listHeight.visual > _listAvailableHeight2) {
                list.overflow = _listAvailableHeight2;
            } else {
                list.overflow = null;
            }

            // set container bounds (so pushes siblings downwards)
            root.height = Math.min(
                bounds.cappedHeight,
                boundsHeight - listItemMargin.top - listItemMargin.bottom
            );
        } else {
            // flexible height

            // not a fixed height panel
            var itemMargin = totalItems > 0 ? listItemMargin.top + listItemMargin.bottom : 0;
            panel.scalable = true;
            panel.height = Math.max(labelHeight, visualHeight - itemMargin);

            // set container bounds (so pushes siblings downwards)
            root.height = Math.max(labelHeight, boundsHeight - itemMargin);
        }

        // move credits to bottom
        if (root.ref.credits && panel.heightCurrent)
            root.ref.credits.style.transform = 'translateY(' + panel.heightCurrent + 'px)';
    };

    var calculateListItemMargin = function calculateListItemMargin(root) {
        var item = root.ref.list.childViews[0].childViews[0];
        return item
            ? {
                  top: item.rect.element.marginTop,
                  bottom: item.rect.element.marginBottom,
              }
            : {
                  top: 0,
                  bottom: 0,
              };
    };

    var calculateListHeight = function calculateListHeight(root) {
        var visual = 0;
        var bounds = 0;

        // get file list reference
        var scrollList = root.ref.list;
        var itemList = scrollList.childViews[0];
        var visibleChildren = itemList.childViews.filter(function(child) {
            return child.rect.element.height;
        });
        var children = root
            .query('GET_ACTIVE_ITEMS')
            .map(function(item) {
                return visibleChildren.find(function(child) {
                    return child.id === item.id;
                });
            })
            .filter(function(item) {
                return item;
            });

        // no children, done!
        if (children.length === 0) return { visual: visual, bounds: bounds };

        var horizontalSpace = itemList.rect.element.width;
        var dragIndex = getItemIndexByPosition(itemList, children, scrollList.dragCoordinates);

        var childRect = children[0].rect.element;

        var itemVerticalMargin = childRect.marginTop + childRect.marginBottom;
        var itemHorizontalMargin = childRect.marginLeft + childRect.marginRight;

        var itemWidth = childRect.width + itemHorizontalMargin;
        var itemHeight = childRect.height + itemVerticalMargin;

        var newItem = typeof dragIndex !== 'undefined' && dragIndex >= 0 ? 1 : 0;
        var removedItem = children.find(function(child) {
            return child.markedForRemoval && child.opacity < 0.45;
        })
            ? -1
            : 0;
        var verticalItemCount = children.length + newItem + removedItem;
        var itemsPerRow = getItemsPerRow(horizontalSpace, itemWidth);

        // stack
        if (itemsPerRow === 1) {
            children.forEach(function(item) {
                var height = item.rect.element.height + itemVerticalMargin;
                bounds += height;
                visual += height * item.opacity;
            });
        }
        // grid
        else {
            bounds = Math.ceil(verticalItemCount / itemsPerRow) * itemHeight;
            visual = bounds;
        }

        return { visual: visual, bounds: bounds };
    };

    var calculateRootBoundingBoxHeight = function calculateRootBoundingBoxHeight(root) {
        var height = root.ref.measureHeight || null;
        var cappedHeight = parseInt(root.style.maxHeight, 10) || null;
        var fixedHeight = height === 0 ? null : height;

        return {
            cappedHeight: cappedHeight,
            fixedHeight: fixedHeight,
        };
    };

    var exceedsMaxFiles = function exceedsMaxFiles(root, items) {
        var allowReplace = root.query('GET_ALLOW_REPLACE');
        var allowMultiple = root.query('GET_ALLOW_MULTIPLE');
        var totalItems = root.query('GET_TOTAL_ITEMS');
        var maxItems = root.query('GET_MAX_FILES');

        // total amount of items being dragged
        var totalBrowseItems = items.length;

        // if does not allow multiple items and dragging more than one item
        if (!allowMultiple && totalBrowseItems > 1) {
            root.dispatch('DID_THROW_MAX_FILES', {
                source: items,
                error: createResponse('warning', 0, 'Max files'),
            });

            return true;
        }

        // limit max items to one if not allowed to drop multiple items
        maxItems = allowMultiple ? maxItems : 1;

        if (!allowMultiple && allowReplace) {
            // There is only one item, so there is room to replace or add an item
            return false;
        }

        // no more room?
        var hasMaxItems = isInt(maxItems);
        if (hasMaxItems && totalItems + totalBrowseItems > maxItems) {
            root.dispatch('DID_THROW_MAX_FILES', {
                source: items,
                error: createResponse('warning', 0, 'Max files'),
            });

            return true;
        }

        return false;
    };

    var getDragIndex = function getDragIndex(list, children, position) {
        var itemList = list.childViews[0];
        return getItemIndexByPosition(itemList, children, {
            left: position.scopeLeft - itemList.rect.element.left,
            top:
                position.scopeTop -
                (list.rect.outer.top + list.rect.element.marginTop + list.rect.element.scrollTop),
        });
    };

    /**
     * Enable or disable file drop functionality
     */
    var toggleDrop = function toggleDrop(root) {
        var isAllowed = root.query('GET_ALLOW_DROP');
        var isDisabled = root.query('GET_DISABLED');
        var enabled = isAllowed && !isDisabled;
        if (enabled && !root.ref.hopper) {
            var hopper = createHopper(
                root.element,
                function(items) {
                    // allow quick validation of dropped items
                    var beforeDropFile =
                        root.query('GET_BEFORE_DROP_FILE') ||
                        function() {
                            return true;
                        };

                    // all items should be validated by all filters as valid
                    var dropValidation = root.query('GET_DROP_VALIDATION');
                    return dropValidation
                        ? items.every(function(item) {
                              return (
                                  applyFilters('ALLOW_HOPPER_ITEM', item, {
                                      query: root.query,
                                  }).every(function(result) {
                                      return result === true;
                                  }) && beforeDropFile(item)
                              );
                          })
                        : true;
                },
                {
                    filterItems: function filterItems(items) {
                        var ignoredFiles = root.query('GET_IGNORED_FILES');
                        return items.filter(function(item) {
                            if (isFile(item)) {
                                return !ignoredFiles.includes(item.name.toLowerCase());
                            }
                            return true;
                        });
                    },
                    catchesDropsOnPage: root.query('GET_DROP_ON_PAGE'),
                    requiresDropOnElement: root.query('GET_DROP_ON_ELEMENT'),
                }
            );

            hopper.onload = function(items, position) {
                // get item children elements and sort based on list sort
                var list = root.ref.list.childViews[0];
                var visibleChildren = list.childViews.filter(function(child) {
                    return child.rect.element.height;
                });
                var children = root
                    .query('GET_ACTIVE_ITEMS')
                    .map(function(item) {
                        return visibleChildren.find(function(child) {
                            return child.id === item.id;
                        });
                    })
                    .filter(function(item) {
                        return item;
                    });

                applyFilterChain('ADD_ITEMS', items, { dispatch: root.dispatch }).then(function(
                    queue
                ) {
                    // these files don't fit so stop here
                    if (exceedsMaxFiles(root, queue)) return false;

                    // go
                    root.dispatch('ADD_ITEMS', {
                        items: queue,
                        index: getDragIndex(root.ref.list, children, position),
                        interactionMethod: InteractionMethod.DROP,
                    });
                });

                root.dispatch('DID_DROP', { position: position });

                root.dispatch('DID_END_DRAG', { position: position });
            };

            hopper.ondragstart = function(position) {
                root.dispatch('DID_START_DRAG', { position: position });
            };

            hopper.ondrag = debounce(function(position) {
                root.dispatch('DID_DRAG', { position: position });
            });

            hopper.ondragend = function(position) {
                root.dispatch('DID_END_DRAG', { position: position });
            };

            root.ref.hopper = hopper;

            root.ref.drip = root.appendChildView(root.createChildView(drip));
        } else if (!enabled && root.ref.hopper) {
            root.ref.hopper.destroy();
            root.ref.hopper = null;
            root.removeChildView(root.ref.drip);
        }
    };

    /**
     * Enable or disable browse functionality
     */
    var toggleBrowse = function toggleBrowse(root, props) {
        var isAllowed = root.query('GET_ALLOW_BROWSE');
        var isDisabled = root.query('GET_DISABLED');
        var enabled = isAllowed && !isDisabled;
        if (enabled && !root.ref.browser) {
            root.ref.browser = root.appendChildView(
                root.createChildView(
                    browser,
                    Object.assign({}, props, {
                        onload: function onload(items) {
                            applyFilterChain('ADD_ITEMS', items, {
                                dispatch: root.dispatch,
                            }).then(function(queue) {
                                // these files don't fit so stop here
                                if (exceedsMaxFiles(root, queue)) return false;

                                // add items!
                                root.dispatch('ADD_ITEMS', {
                                    items: queue,
                                    index: -1,
                                    interactionMethod: InteractionMethod.BROWSE,
                                });
                            });
                        },
                    })
                ),

                0
            );
        } else if (!enabled && root.ref.browser) {
            root.removeChildView(root.ref.browser);
            root.ref.browser = null;
        }
    };

    /**
     * Enable or disable paste functionality
     */
    var togglePaste = function togglePaste(root) {
        var isAllowed = root.query('GET_ALLOW_PASTE');
        var isDisabled = root.query('GET_DISABLED');
        var enabled = isAllowed && !isDisabled;
        if (enabled && !root.ref.paster) {
            root.ref.paster = createPaster();
            root.ref.paster.onload = function(items) {
                applyFilterChain('ADD_ITEMS', items, { dispatch: root.dispatch }).then(function(
                    queue
                ) {
                    // these files don't fit so stop here
                    if (exceedsMaxFiles(root, queue)) return false;

                    // add items!
                    root.dispatch('ADD_ITEMS', {
                        items: queue,
                        index: -1,
                        interactionMethod: InteractionMethod.PASTE,
                    });
                });
            };
        } else if (!enabled && root.ref.paster) {
            root.ref.paster.destroy();
            root.ref.paster = null;
        }
    };

    /**
     * Route actions
     */
    var route$5 = createRoute({
        DID_SET_ALLOW_BROWSE: function DID_SET_ALLOW_BROWSE(_ref5) {
            var root = _ref5.root,
                props = _ref5.props;
            toggleBrowse(root, props);
        },
        DID_SET_ALLOW_DROP: function DID_SET_ALLOW_DROP(_ref6) {
            var root = _ref6.root;
            toggleDrop(root);
        },
        DID_SET_ALLOW_PASTE: function DID_SET_ALLOW_PASTE(_ref7) {
            var root = _ref7.root;
            togglePaste(root);
        },
        DID_SET_DISABLED: function DID_SET_DISABLED(_ref8) {
            var root = _ref8.root,
                props = _ref8.props;
            toggleDrop(root);
            togglePaste(root);
            toggleBrowse(root, props);
            var isDisabled = root.query('GET_DISABLED');
            if (isDisabled) {
                root.element.dataset.disabled = 'disabled';
            } else {
                // delete root.element.dataset.disabled; <= this does not work on iOS 10
                root.element.removeAttribute('data-disabled');
            }
        },
    });

    var root = createView({
        name: 'root',
        read: function read(_ref9) {
            var root = _ref9.root;
            if (root.ref.measure) {
                root.ref.measureHeight = root.ref.measure.offsetHeight;
            }
        },
        create: create$e,
        write: write$9,
        destroy: function destroy(_ref10) {
            var root = _ref10.root;
            if (root.ref.paster) {
                root.ref.paster.destroy();
            }
            if (root.ref.hopper) {
                root.ref.hopper.destroy();
            }
            root.element.removeEventListener('touchmove', prevent);
            root.element.removeEventListener('gesturestart', prevent);
        },
        mixins: {
            styles: ['height'],
        },
    });

    // creates the app
    var createApp = function createApp() {
        var initialOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // let element
        var originalElement = null;

        // get default options
        var defaultOptions = getOptions();

        // create the data store, this will contain all our app info
        var store = createStore(
            // initial state (should be serializable)
            createInitialState(defaultOptions),

            // queries
            [queries, createOptionQueries(defaultOptions)],

            // action handlers
            [actions, createOptionActions(defaultOptions)]
        );

        // set initial options
        store.dispatch('SET_OPTIONS', { options: initialOptions });

        // kick thread if visibility changes
        var visibilityHandler = function visibilityHandler() {
            if (document.hidden) return;
            store.dispatch('KICK');
        };
        document.addEventListener('visibilitychange', visibilityHandler);

        // re-render on window resize start and finish
        var resizeDoneTimer = null;
        var isResizing = false;
        var isResizingHorizontally = false;
        var initialWindowWidth = null;
        var currentWindowWidth = null;
        var resizeHandler = function resizeHandler() {
            if (!isResizing) {
                isResizing = true;
            }
            clearTimeout(resizeDoneTimer);
            resizeDoneTimer = setTimeout(function() {
                isResizing = false;
                initialWindowWidth = null;
                currentWindowWidth = null;
                if (isResizingHorizontally) {
                    isResizingHorizontally = false;
                    store.dispatch('DID_STOP_RESIZE');
                }
            }, 500);
        };
        window.addEventListener('resize', resizeHandler);

        // render initial view
        var view = root(store, { id: getUniqueId() });

        //
        // PRIVATE API -------------------------------------------------------------------------------------
        //
        var isResting = false;
        var isHidden = false;

        var readWriteApi = {
            // necessary for update loop

            /**
             * Reads from dom (never call manually)
             * @private
             */
            _read: function _read() {
                // test if we're resizing horizontally
                // TODO: see if we can optimize this by measuring root rect
                if (isResizing) {
                    currentWindowWidth = window.innerWidth;
                    if (!initialWindowWidth) {
                        initialWindowWidth = currentWindowWidth;
                    }

                    if (!isResizingHorizontally && currentWindowWidth !== initialWindowWidth) {
                        store.dispatch('DID_START_RESIZE');
                        isResizingHorizontally = true;
                    }
                }

                if (isHidden && isResting) {
                    // test if is no longer hidden
                    isResting = view.element.offsetParent === null;
                }

                // if resting, no need to read as numbers will still all be correct
                if (isResting) return;

                // read view data
                view._read();

                // if is hidden we need to know so we exit rest mode when revealed
                isHidden = view.rect.element.hidden;
            },

            /**
             * Writes to dom (never call manually)
             * @private
             */
            _write: function _write(ts) {
                // get all actions from store
                var actions = store
                    .processActionQueue()

                    // filter out set actions (these will automatically trigger DID_SET)
                    .filter(function(action) {
                        return !/^SET_/.test(action.type);
                    });

                // if was idling and no actions stop here
                if (isResting && !actions.length) return;

                // some actions might trigger events
                routeActionsToEvents(actions);

                // update the view
                isResting = view._write(ts, actions, isResizingHorizontally);

                // will clean up all archived items
                removeReleasedItems(store.query('GET_ITEMS'));

                // now idling
                if (isResting) {
                    store.processDispatchQueue();
                }
            },
        };

        //
        // EXPOSE EVENTS -------------------------------------------------------------------------------------
        //
        var createEvent = function createEvent(name) {
            return function(data) {
                // create default event
                var event = {
                    type: name,
                };

                // no data to add
                if (!data) {
                    return event;
                }

                // copy relevant props
                if (data.hasOwnProperty('error')) {
                    event.error = data.error ? Object.assign({}, data.error) : null;
                }

                if (data.status) {
                    event.status = Object.assign({}, data.status);
                }

                if (data.file) {
                    event.output = data.file;
                }

                // only source is available, else add item if possible
                if (data.source) {
                    event.file = data.source;
                } else if (data.item || data.id) {
                    var item = data.item ? data.item : store.query('GET_ITEM', data.id);
                    event.file = item ? createItemAPI(item) : null;
                }

                // map all items in a possible items array
                if (data.items) {
                    event.items = data.items.map(createItemAPI);
                }

                // if this is a progress event add the progress amount
                if (/progress/.test(name)) {
                    event.progress = data.progress;
                }

                // copy relevant props
                if (data.hasOwnProperty('origin') && data.hasOwnProperty('target')) {
                    event.origin = data.origin;
                    event.target = data.target;
                }

                return event;
            };
        };

        var eventRoutes = {
            DID_DESTROY: createEvent('destroy'),

            DID_INIT: createEvent('init'),

            DID_THROW_MAX_FILES: createEvent('warning'),

            DID_INIT_ITEM: createEvent('initfile'),
            DID_START_ITEM_LOAD: createEvent('addfilestart'),
            DID_UPDATE_ITEM_LOAD_PROGRESS: createEvent('addfileprogress'),
            DID_LOAD_ITEM: createEvent('addfile'),

            DID_THROW_ITEM_INVALID: [createEvent('error'), createEvent('addfile')],

            DID_THROW_ITEM_LOAD_ERROR: [createEvent('error'), createEvent('addfile')],

            DID_THROW_ITEM_REMOVE_ERROR: [createEvent('error'), createEvent('removefile')],

            DID_PREPARE_OUTPUT: createEvent('preparefile'),

            DID_START_ITEM_PROCESSING: createEvent('processfilestart'),
            DID_UPDATE_ITEM_PROCESS_PROGRESS: createEvent('processfileprogress'),
            DID_ABORT_ITEM_PROCESSING: createEvent('processfileabort'),
            DID_COMPLETE_ITEM_PROCESSING: createEvent('processfile'),
            DID_COMPLETE_ITEM_PROCESSING_ALL: createEvent('processfiles'),
            DID_REVERT_ITEM_PROCESSING: createEvent('processfilerevert'),

            DID_THROW_ITEM_PROCESSING_ERROR: [createEvent('error'), createEvent('processfile')],

            DID_REMOVE_ITEM: createEvent('removefile'),

            DID_UPDATE_ITEMS: createEvent('updatefiles'),

            DID_ACTIVATE_ITEM: createEvent('activatefile'),

            DID_REORDER_ITEMS: createEvent('reorderfiles'),
        };

        var exposeEvent = function exposeEvent(event) {
            // create event object to be dispatched
            var detail = Object.assign({ pond: exports }, event);
            delete detail.type;
            view.element.dispatchEvent(
                new CustomEvent('FilePond:' + event.type, {
                    // event info
                    detail: detail,

                    // event behaviour
                    bubbles: true,
                    cancelable: true,
                    composed: true, // triggers listeners outside of shadow root
                })
            );

            // event object to params used for `on()` event handlers and callbacks `oninit()`
            var params = [];

            // if is possible error event, make it the first param
            if (event.hasOwnProperty('error')) {
                params.push(event.error);
            }

            // file is always section
            if (event.hasOwnProperty('file')) {
                params.push(event.file);
            }

            // append other props
            var filtered = ['type', 'error', 'file'];
            Object.keys(event)
                .filter(function(key) {
                    return !filtered.includes(key);
                })
                .forEach(function(key) {
                    return params.push(event[key]);
                });

            // on(type, () => { })
            exports.fire.apply(exports, [event.type].concat(params));

            // oninit = () => {}
            var handler = store.query('GET_ON' + event.type.toUpperCase());
            if (handler) {
                handler.apply(void 0, params);
            }
        };

        var routeActionsToEvents = function routeActionsToEvents(actions) {
            if (!actions.length) return;
            actions
                .filter(function(action) {
                    return eventRoutes[action.type];
                })
                .forEach(function(action) {
                    var routes = eventRoutes[action.type];
                    (Array.isArray(routes) ? routes : [routes]).forEach(function(route) {
                        // this isn't fantastic, but because of the stacking of settimeouts plugins can handle the did_load before the did_init
                        if (action.type === 'DID_INIT_ITEM') {
                            exposeEvent(route(action.data));
                        } else {
                            setTimeout(function() {
                                exposeEvent(route(action.data));
                            }, 0);
                        }
                    });
                });
        };

        //
        // PUBLIC API -------------------------------------------------------------------------------------
        //
        var setOptions = function setOptions(options) {
            return store.dispatch('SET_OPTIONS', { options: options });
        };

        var getFile = function getFile(query) {
            return store.query('GET_ACTIVE_ITEM', query);
        };

        var prepareFile = function prepareFile(query) {
            return new Promise(function(resolve, reject) {
                store.dispatch('REQUEST_ITEM_PREPARE', {
                    query: query,
                    success: function success(item) {
                        resolve(item);
                    },
                    failure: function failure(error) {
                        reject(error);
                    },
                });
            });
        };

        var addFile = function addFile(source) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return new Promise(function(resolve, reject) {
                addFiles([{ source: source, options: options }], { index: options.index })
                    .then(function(items) {
                        return resolve(items && items[0]);
                    })
                    .catch(reject);
            });
        };

        var isFilePondFile = function isFilePondFile(obj) {
            return obj.file && obj.id;
        };

        var removeFile = function removeFile(query, options) {
            // if only passed options
            if (typeof query === 'object' && !isFilePondFile(query) && !options) {
                options = query;
                query = undefined;
            }

            // request item removal
            store.dispatch('REMOVE_ITEM', Object.assign({}, options, { query: query }));

            // see if item has been removed
            return store.query('GET_ACTIVE_ITEM', query) === null;
        };

        var addFiles = function addFiles() {
            for (
                var _len = arguments.length, args = new Array(_len), _key = 0;
                _key < _len;
                _key++
            ) {
                args[_key] = arguments[_key];
            }
            return new Promise(function(resolve, reject) {
                var sources = [];
                var options = {};

                // user passed a sources array
                if (isArray(args[0])) {
                    sources.push.apply(sources, args[0]);
                    Object.assign(options, args[1] || {});
                } else {
                    // user passed sources as arguments, last one might be options object
                    var lastArgument = args[args.length - 1];
                    if (typeof lastArgument === 'object' && !(lastArgument instanceof Blob)) {
                        Object.assign(options, args.pop());
                    }

                    // add rest to sources
                    sources.push.apply(sources, args);
                }

                store.dispatch('ADD_ITEMS', {
                    items: sources,
                    index: options.index,
                    interactionMethod: InteractionMethod.API,
                    success: resolve,
                    failure: reject,
                });
            });
        };

        var getFiles = function getFiles() {
            return store.query('GET_ACTIVE_ITEMS');
        };

        var processFile = function processFile(query) {
            return new Promise(function(resolve, reject) {
                store.dispatch('REQUEST_ITEM_PROCESSING', {
                    query: query,
                    success: function success(item) {
                        resolve(item);
                    },
                    failure: function failure(error) {
                        reject(error);
                    },
                });
            });
        };

        var prepareFiles = function prepareFiles() {
            for (
                var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
                _key2 < _len2;
                _key2++
            ) {
                args[_key2] = arguments[_key2];
            }
            var queries = Array.isArray(args[0]) ? args[0] : args;
            var items = queries.length ? queries : getFiles();
            return Promise.all(items.map(prepareFile));
        };

        var processFiles = function processFiles() {
            for (
                var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;
                _key3 < _len3;
                _key3++
            ) {
                args[_key3] = arguments[_key3];
            }
            var queries = Array.isArray(args[0]) ? args[0] : args;
            if (!queries.length) {
                var files = getFiles().filter(function(item) {
                    return (
                        !(item.status === ItemStatus.IDLE && item.origin === FileOrigin.LOCAL) &&
                        item.status !== ItemStatus.PROCESSING &&
                        item.status !== ItemStatus.PROCESSING_COMPLETE &&
                        item.status !== ItemStatus.PROCESSING_REVERT_ERROR
                    );
                });

                return Promise.all(files.map(processFile));
            }
            return Promise.all(queries.map(processFile));
        };

        var removeFiles = function removeFiles() {
            for (
                var _len4 = arguments.length, args = new Array(_len4), _key4 = 0;
                _key4 < _len4;
                _key4++
            ) {
                args[_key4] = arguments[_key4];
            }

            var queries = Array.isArray(args[0]) ? args[0] : args;

            var options;
            if (typeof queries[queries.length - 1] === 'object') {
                options = queries.pop();
            } else if (Array.isArray(args[0])) {
                options = args[1];
            }

            var files = getFiles();

            if (!queries.length)
                return Promise.all(
                    files.map(function(file) {
                        return removeFile(file, options);
                    })
                );

            // when removing by index the indexes shift after each file removal so we need to convert indexes to ids
            var mappedQueries = queries
                .map(function(query) {
                    return isNumber(query) ? (files[query] ? files[query].id : null) : query;
                })
                .filter(function(query) {
                    return query;
                });

            return mappedQueries.map(function(q) {
                return removeFile(q, options);
            });
        };

        var exports = Object.assign(
            {},

            on(),
            {},

            readWriteApi,
            {},

            createOptionAPI(store, defaultOptions),
            {
                /**
                 * Override options defined in options object
                 * @param options
                 */
                setOptions: setOptions,

                /**
                 * Load the given file
                 * @param source - the source of the file (either a File, base64 data uri or url)
                 * @param options - object, { index: 0 }
                 */
                addFile: addFile,

                /**
                 * Load the given files
                 * @param sources - the sources of the files to load
                 * @param options - object, { index: 0 }
                 */
                addFiles: addFiles,

                /**
                 * Returns the file objects matching the given query
                 * @param query { string, number, null }
                 */
                getFile: getFile,

                /**
                 * Upload file with given name
                 * @param query { string, number, null  }
                 */
                processFile: processFile,

                /**
                 * Request prepare output for file with given name
                 * @param query { string, number, null  }
                 */
                prepareFile: prepareFile,

                /**
                 * Removes a file by its name
                 * @param query { string, number, null  }
                 */
                removeFile: removeFile,

                /**
                 * Moves a file to a new location in the files list
                 */
                moveFile: function moveFile(query, index) {
                    return store.dispatch('MOVE_ITEM', { query: query, index: index });
                },

                /**
                 * Returns all files (wrapped in public api)
                 */
                getFiles: getFiles,

                /**
                 * Starts uploading all files
                 */
                processFiles: processFiles,

                /**
                 * Clears all files from the files list
                 */
                removeFiles: removeFiles,

                /**
                 * Starts preparing output of all files
                 */
                prepareFiles: prepareFiles,

                /**
                 * Sort list of files
                 */
                sort: function sort(compare) {
                    return store.dispatch('SORT', { compare: compare });
                },

                /**
                 * Browse the file system for a file
                 */
                browse: function browse() {
                    // needs to be trigger directly as user action needs to be traceable (is not traceable in requestAnimationFrame)
                    var input = view.element.querySelector('input[type=file]');
                    if (input) {
                        input.click();
                    }
                },

                /**
                 * Destroys the app
                 */
                destroy: function destroy() {
                    // request destruction
                    exports.fire('destroy', view.element);

                    // stop active processes (file uploads, fetches, stuff like that)
                    // loop over items and depending on states call abort for ongoing processes
                    store.dispatch('ABORT_ALL');

                    // destroy view
                    view._destroy();

                    // stop listening to resize
                    window.removeEventListener('resize', resizeHandler);

                    // stop listening to the visiblitychange event
                    document.removeEventListener('visibilitychange', visibilityHandler);

                    // dispatch destroy
                    store.dispatch('DID_DESTROY');
                },

                /**
                 * Inserts the plugin before the target element
                 */
                insertBefore: function insertBefore$1(element) {
                    return insertBefore(view.element, element);
                },

                /**
                 * Inserts the plugin after the target element
                 */
                insertAfter: function insertAfter$1(element) {
                    return insertAfter(view.element, element);
                },

                /**
                 * Appends the plugin to the target element
                 */
                appendTo: function appendTo(element) {
                    return element.appendChild(view.element);
                },

                /**
                 * Replaces an element with the app
                 */
                replaceElement: function replaceElement(element) {
                    // insert the app before the element
                    insertBefore(view.element, element);

                    // remove the original element
                    element.parentNode.removeChild(element);

                    // remember original element
                    originalElement = element;
                },

                /**
                 * Restores the original element
                 */
                restoreElement: function restoreElement() {
                    if (!originalElement) {
                        return; // no element to restore
                    }

                    // restore original element
                    insertAfter(originalElement, view.element);

                    // remove our element
                    view.element.parentNode.removeChild(view.element);

                    // remove reference
                    originalElement = null;
                },

                /**
                 * Returns true if the app root is attached to given element
                 * @param element
                 */
                isAttachedTo: function isAttachedTo(element) {
                    return view.element === element || originalElement === element;
                },

                /**
                 * Returns the root element
                 */
                element: {
                    get: function get() {
                        return view.element;
                    },
                },

                /**
                 * Returns the current pond status
                 */
                status: {
                    get: function get() {
                        return store.query('GET_STATUS');
                    },
                },
            }
        );

        // Done!
        store.dispatch('DID_INIT');

        // create actual api object
        return createObject(exports);
    };

    var createAppObject = function createAppObject() {
        var customOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // default options
        var defaultOptions = {};
        forin(getOptions(), function(key, value) {
            defaultOptions[key] = value[0];
        });

        // set app options
        var app = createApp(
            Object.assign(
                {},

                defaultOptions,
                {},

                customOptions
            )
        );

        // return the plugin instance
        return app;
    };

    var lowerCaseFirstLetter = function lowerCaseFirstLetter(string) {
        return string.charAt(0).toLowerCase() + string.slice(1);
    };

    var attributeNameToPropertyName = function attributeNameToPropertyName(attributeName) {
        return toCamels(attributeName.replace(/^data-/, ''));
    };

    var mapObject = function mapObject(object, propertyMap) {
        // remove unwanted
        forin(propertyMap, function(selector, mapping) {
            forin(object, function(property, value) {
                // create regexp shortcut
                var selectorRegExp = new RegExp(selector);

                // tests if
                var matches = selectorRegExp.test(property);

                // no match, skip
                if (!matches) {
                    return;
                }

                // if there's a mapping, the original property is always removed
                delete object[property];

                // should only remove, we done!
                if (mapping === false) {
                    return;
                }

                // move value to new property
                if (isString(mapping)) {
                    object[mapping] = value;
                    return;
                }

                // move to group
                var group = mapping.group;
                if (isObject(mapping) && !object[group]) {
                    object[group] = {};
                }

                object[group][lowerCaseFirstLetter(property.replace(selectorRegExp, ''))] = value;
            });

            // do submapping
            if (mapping.mapping) {
                mapObject(object[mapping.group], mapping.mapping);
            }
        });
    };

    var getAttributesAsObject = function getAttributesAsObject(node) {
        var attributeMapping =
            arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        // turn attributes into object
        var attributes = [];
        forin(node.attributes, function(index) {
            attributes.push(node.attributes[index]);
        });

        var output = attributes
            .filter(function(attribute) {
                return attribute.name;
            })
            .reduce(function(obj, attribute) {
                var value = attr(node, attribute.name);

                obj[attributeNameToPropertyName(attribute.name)] =
                    value === attribute.name ? true : value;
                return obj;
            }, {});

        // do mapping of object properties
        mapObject(output, attributeMapping);

        return output;
    };

    var createAppAtElement = function createAppAtElement(element) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        // how attributes of the input element are mapped to the options for the plugin
        var attributeMapping = {
            // translate to other name
            '^class$': 'className',
            '^multiple$': 'allowMultiple',
            '^capture$': 'captureMethod',
            '^webkitdirectory$': 'allowDirectoriesOnly',

            // group under single property
            '^server': {
                group: 'server',
                mapping: {
                    '^process': {
                        group: 'process',
                    },

                    '^revert': {
                        group: 'revert',
                    },

                    '^fetch': {
                        group: 'fetch',
                    },

                    '^restore': {
                        group: 'restore',
                    },

                    '^load': {
                        group: 'load',
                    },
                },
            },

            // don't include in object
            '^type$': false,
            '^files$': false,
        };

        // add additional option translators
        applyFilters('SET_ATTRIBUTE_TO_OPTION_MAP', attributeMapping);

        // create final options object by setting options object and then overriding options supplied on element
        var mergedOptions = Object.assign({}, options);

        var attributeOptions = getAttributesAsObject(
            element.nodeName === 'FIELDSET' ? element.querySelector('input[type=file]') : element,
            attributeMapping
        );

        // merge with options object
        Object.keys(attributeOptions).forEach(function(key) {
            if (isObject(attributeOptions[key])) {
                if (!isObject(mergedOptions[key])) {
                    mergedOptions[key] = {};
                }
                Object.assign(mergedOptions[key], attributeOptions[key]);
            } else {
                mergedOptions[key] = attributeOptions[key];
            }
        });

        // if parent is a fieldset, get files from parent by selecting all input fields that are not file upload fields
        // these will then be automatically set to the initial files
        mergedOptions.files = (options.files || []).concat(
            Array.from(element.querySelectorAll('input:not([type=file])')).map(function(input) {
                return {
                    source: input.value,
                    options: {
                        type: input.dataset.type,
                    },
                };
            })
        );

        // build plugin
        var app = createAppObject(mergedOptions);

        // add already selected files
        if (element.files) {
            Array.from(element.files).forEach(function(file) {
                app.addFile(file);
            });
        }

        // replace the target element
        app.replaceElement(element);

        // expose
        return app;
    };

    // if an element is passed, we create the instance at that element, if not, we just create an up object
    var createApp$1 = function createApp() {
        return isNode(arguments.length <= 0 ? undefined : arguments[0])
            ? createAppAtElement.apply(void 0, arguments)
            : createAppObject.apply(void 0, arguments);
    };

    var PRIVATE_METHODS = ['fire', '_read', '_write'];

    var createAppAPI = function createAppAPI(app) {
        var api = {};

        copyObjectPropertiesToObject(app, api, PRIVATE_METHODS);

        return api;
    };

    /**
     * Replaces placeholders in given string with replacements
     * @param string - "Foo {bar}""
     * @param replacements - { "bar": 10 }
     */
    var replaceInString = function replaceInString(string, replacements) {
        return string.replace(/(?:{([a-zA-Z]+)})/g, function(match, group) {
            return replacements[group];
        });
    };

    var createWorker = function createWorker(fn) {
        var workerBlob = new Blob(['(', fn.toString(), ')()'], {
            type: 'application/javascript',
        });

        var workerURL = URL.createObjectURL(workerBlob);
        var worker = new Worker(workerURL);

        return {
            transfer: function transfer(message, cb) {},
            post: function post(message, cb, transferList) {
                var id = getUniqueId();

                worker.onmessage = function(e) {
                    if (e.data.id === id) {
                        cb(e.data.message);
                    }
                };

                worker.postMessage(
                    {
                        id: id,
                        message: message,
                    },

                    transferList
                );
            },
            terminate: function terminate() {
                worker.terminate();
                URL.revokeObjectURL(workerURL);
            },
        };
    };

    var loadImage = function loadImage(url) {
        return new Promise(function(resolve, reject) {
            var img = new Image();
            img.onload = function() {
                resolve(img);
            };
            img.onerror = function(e) {
                reject(e);
            };
            img.src = url;
        });
    };

    var renameFile = function renameFile(file, name) {
        var renamedFile = file.slice(0, file.size, file.type);
        renamedFile.lastModifiedDate = file.lastModifiedDate;
        renamedFile.name = name;
        return renamedFile;
    };

    var copyFile = function copyFile(file) {
        return renameFile(file, file.name);
    };

    // already registered plugins (can't register twice)
    var registeredPlugins = [];

    // pass utils to plugin
    var createAppPlugin = function createAppPlugin(plugin) {
        // already registered
        if (registeredPlugins.includes(plugin)) {
            return;
        }

        // remember this plugin
        registeredPlugins.push(plugin);

        // setup!
        var pluginOutline = plugin({
            addFilter: addFilter,
            utils: {
                Type: Type,
                forin: forin,
                isString: isString,
                isFile: isFile,
                toNaturalFileSize: toNaturalFileSize,
                replaceInString: replaceInString,
                getExtensionFromFilename: getExtensionFromFilename,
                getFilenameWithoutExtension: getFilenameWithoutExtension,
                guesstimateMimeType: guesstimateMimeType,
                getFileFromBlob: getFileFromBlob,
                getFilenameFromURL: getFilenameFromURL,
                createRoute: createRoute,
                createWorker: createWorker,
                createView: createView,
                createItemAPI: createItemAPI,
                loadImage: loadImage,
                copyFile: copyFile,
                renameFile: renameFile,
                createBlob: createBlob,
                applyFilterChain: applyFilterChain,
                text: text,
                getNumericAspectRatioFromString: getNumericAspectRatioFromString,
            },

            views: {
                fileActionButton: fileActionButton,
            },
        });

        // add plugin options to default options
        extendDefaultOptions(pluginOutline.options);
    };

    // feature detection used by supported() method
    var isOperaMini = function isOperaMini() {
        return Object.prototype.toString.call(window.operamini) === '[object OperaMini]';
    };
    var hasPromises = function hasPromises() {
        return 'Promise' in window;
    };
    var hasBlobSlice = function hasBlobSlice() {
        return 'slice' in Blob.prototype;
    };
    var hasCreateObjectURL = function hasCreateObjectURL() {
        return 'URL' in window && 'createObjectURL' in window.URL;
    };
    var hasVisibility = function hasVisibility() {
        return 'visibilityState' in document;
    };
    var hasTiming = function hasTiming() {
        return 'performance' in window;
    }; // iOS 8.x
    var hasCSSSupports = function hasCSSSupports() {
        return 'supports' in (window.CSS || {});
    }; // use to detect Safari 9+
    var isIE11 = function isIE11() {
        return /MSIE|Trident/.test(window.navigator.userAgent);
    };

    var supported = (function() {
        // Runs immediately and then remembers result for subsequent calls
        var isSupported =
            // Has to be a browser
            isBrowser() &&
            // Can't run on Opera Mini due to lack of everything
            !isOperaMini() &&
            // Require these APIs to feature detect a modern browser
            hasVisibility() &&
            hasPromises() &&
            hasBlobSlice() &&
            hasCreateObjectURL() &&
            hasTiming() &&
            // doesn't need CSSSupports but is a good way to detect Safari 9+ (we do want to support IE11 though)
            (hasCSSSupports() || isIE11());

        return function() {
            return isSupported;
        };
    })();

    /**
     * Plugin internal state (over all instances)
     */
    var state = {
        // active app instances, used to redraw the apps and to find the later
        apps: [],
    };

    // plugin name
    var name = 'filepond';

    /**
     * Public Plugin methods
     */
    var fn = function fn() {};
    exports.Status = {};
    exports.FileStatus = {};
    exports.FileOrigin = {};
    exports.OptionTypes = {};
    exports.create = fn;
    exports.destroy = fn;
    exports.parse = fn;
    exports.find = fn;
    exports.registerPlugin = fn;
    exports.getOptions = fn;
    exports.setOptions = fn;

    // if not supported, no API
    if (supported()) {
        // start painter and fire load event
        createPainter(
            function() {
                state.apps.forEach(function(app) {
                    return app._read();
                });
            },
            function(ts) {
                state.apps.forEach(function(app) {
                    return app._write(ts);
                });
            }
        );

        // fire loaded event so we know when FilePond is available
        var dispatch = function dispatch() {
            // let others know we have area ready
            document.dispatchEvent(
                new CustomEvent('FilePond:loaded', {
                    detail: {
                        supported: supported,
                        create: exports.create,
                        destroy: exports.destroy,
                        parse: exports.parse,
                        find: exports.find,
                        registerPlugin: exports.registerPlugin,
                        setOptions: exports.setOptions,
                    },
                })
            );

            // clean up event
            document.removeEventListener('DOMContentLoaded', dispatch);
        };

        if (document.readyState !== 'loading') {
            // move to back of execution queue, FilePond should have been exported by then
            setTimeout(function() {
                return dispatch();
            }, 0);
        } else {
            document.addEventListener('DOMContentLoaded', dispatch);
        }

        // updates the OptionTypes object based on the current options
        var updateOptionTypes = function updateOptionTypes() {
            return forin(getOptions(), function(key, value) {
                exports.OptionTypes[key] = value[1];
            });
        };

        exports.Status = Object.assign({}, Status);
        exports.FileOrigin = Object.assign({}, FileOrigin);
        exports.FileStatus = Object.assign({}, ItemStatus);

        exports.OptionTypes = {};
        updateOptionTypes();

        // create method, creates apps and adds them to the app array
        exports.create = function create() {
            var app = createApp$1.apply(void 0, arguments);
            app.on('destroy', exports.destroy);
            state.apps.push(app);
            return createAppAPI(app);
        };

        // destroys apps and removes them from the app array
        exports.destroy = function destroy(hook) {
            // returns true if the app was destroyed successfully
            var indexToRemove = state.apps.findIndex(function(app) {
                return app.isAttachedTo(hook);
            });
            if (indexToRemove >= 0) {
                // remove from apps
                var app = state.apps.splice(indexToRemove, 1)[0];

                // restore original dom element
                app.restoreElement();

                return true;
            }

            return false;
        };

        // parses the given context for plugins (does not include the context element itself)
        exports.parse = function parse(context) {
            // get all possible hooks
            var matchedHooks = Array.from(context.querySelectorAll('.' + name));

            // filter out already active hooks
            var newHooks = matchedHooks.filter(function(newHook) {
                return !state.apps.find(function(app) {
                    return app.isAttachedTo(newHook);
                });
            });

            // create new instance for each hook
            return newHooks.map(function(hook) {
                return exports.create(hook);
            });
        };

        // returns an app based on the given element hook
        exports.find = function find(hook) {
            var app = state.apps.find(function(app) {
                return app.isAttachedTo(hook);
            });
            if (!app) {
                return null;
            }
            return createAppAPI(app);
        };

        // adds a plugin extension
        exports.registerPlugin = function registerPlugin() {
            for (
                var _len = arguments.length, plugins = new Array(_len), _key = 0;
                _key < _len;
                _key++
            ) {
                plugins[_key] = arguments[_key];
            }

            // register plugins
            plugins.forEach(createAppPlugin);

            // update OptionTypes, each plugin might have extended the default options
            updateOptionTypes();
        };

        exports.getOptions = function getOptions$1() {
            var opts = {};
            forin(getOptions(), function(key, value) {
                opts[key] = value[0];
            });
            return opts;
        };

        exports.setOptions = function setOptions$1(opts) {
            if (isObject(opts)) {
                // update existing plugins
                state.apps.forEach(function(app) {
                    app.setOptions(opts);
                });

                // override defaults
                setOptions(opts);
            }

            // return new options
            return exports.getOptions();
        };
    }

    exports.supported = supported;

    Object.defineProperty(exports, '__esModule', { value: true });
});


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * FilePondPluginImagePreview 4.6.12\n * Licensed under MIT, https://opensource.org/licenses/MIT/\n * Please visit https://pqina.nl/filepond/ for details.\n */\n\n/* eslint-disable */\n.filepond--image-preview-markup {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.filepond--image-preview-wrapper {\n  z-index: 2;\n}\n.filepond--image-preview-overlay {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  min-height: 5rem;\n  max-height: 7rem;\n  margin: 0;\n  opacity: 0;\n  z-index: 2;\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.filepond--image-preview-overlay svg {\n  width: 100%;\n  height: auto;\n  color: inherit;\n  max-height: inherit;\n}\n.filepond--image-preview-overlay-idle {\n  mix-blend-mode: multiply;\n  color: rgba(40, 40, 40, 0.85);\n}\n.filepond--image-preview-overlay-success {\n  mix-blend-mode: normal;\n  color: rgba(54, 151, 99, 1);\n}\n.filepond--image-preview-overlay-failure {\n  mix-blend-mode: normal;\n  color: rgba(196, 78, 71, 1);\n}\n/* disable for Safari as mix-blend-mode causes the overflow:hidden of the parent container to not work */\n@supports (-webkit-marquee-repetition: infinite) and\n  ((-o-object-fit: fill) or (object-fit: fill)) {\n  .filepond--image-preview-overlay-idle {\n    mix-blend-mode: normal;\n  }\n}\n.filepond--image-preview-wrapper {\n  /* no interaction */\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n  /* have preview fill up all available space */\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 100%;\n  margin: 0;\n\n  /* radius is .05em less to prevent the panel background color from shining through */\n  border-radius: 0.45em;\n  overflow: hidden;\n\n  /* this seems to prevent Chrome from redrawing this layer constantly */\n  background: rgba(0, 0, 0, 0.01);\n}\n.filepond--image-preview {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  display: flex; /* this aligns the graphic vertically if the panel is higher than the image */\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  pointer-events: none;\n  background: #222;\n\n  /* will be animated */\n  will-change: transform, opacity;\n}\n.filepond--image-clip {\n  position: relative;\n  overflow: hidden;\n  margin: 0 auto;\n\n  /* transparency indicator (currently only supports grid or basic color) */\n}\n.filepond--image-clip[data-transparency-indicator='grid'] img,\n.filepond--image-clip[data-transparency-indicator='grid'] canvas {\n  background-color: #fff;\n  background-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' fill='%23eee'%3E%3Cpath d='M0 0 H50 V50 H0'/%3E%3Cpath d='M50 50 H100 V100 H50'/%3E%3C/svg%3E\");\n  background-size: 1.25em 1.25em;\n}\n.filepond--image-bitmap,\n.filepond--image-vector {\n  position: absolute;\n  left: 0;\n  top: 0;\n  will-change: transform;\n}\n.filepond--root[data-style-panel-layout~='integrated']\n  .filepond--image-preview-wrapper {\n  border-radius: 0;\n}\n.filepond--root[data-style-panel-layout~='integrated']\n  .filepond--image-preview {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.filepond--root[data-style-panel-layout~='circle']\n  .filepond--image-preview-wrapper {\n  border-radius: 99999rem;\n}\n.filepond--root[data-style-panel-layout~='circle']\n  .filepond--image-preview-overlay {\n  top: auto;\n  bottom: 0;\n  -webkit-transform: scaleY(-1);\n  transform: scaleY(-1);\n}\n.filepond--root[data-style-panel-layout~='circle']\n  .filepond--file\n  .filepond--file-action-button[data-align*='bottom']:not([data-align*='center']) {\n  margin-bottom: 0.325em;\n}\n.filepond--root[data-style-panel-layout~='circle']\n  .filepond--file\n  [data-align*='left'] {\n  left: calc(50% - 3em);\n}\n.filepond--root[data-style-panel-layout~='circle']\n  .filepond--file\n  [data-align*='right'] {\n  right: calc(50% - 3em);\n}\n.filepond--root[data-style-panel-layout~='circle']\n  .filepond--progress-indicator[data-align*='bottom'][data-align*='left'],\n.filepond--root[data-style-panel-layout~='circle']\n  .filepond--progress-indicator[data-align*='bottom'][data-align*='right'] {\n  margin-bottom: calc(0.325em + 0.1875em);\n}\n.filepond--root[data-style-panel-layout~='circle']\n  .filepond--progress-indicator[data-align*='bottom'][data-align*='center'] {\n  margin-top: 0;\n  margin-bottom: 0.1875em;\n  margin-left: 0.1875em;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/filepond/dist/filepond.min.css":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/filepond/dist/filepond.min.css ***!
  \**************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * FilePond 4.30.6\n * Licensed under MIT, https://opensource.org/licenses/MIT/\n * Please visit https://pqina.nl/filepond/ for details.\n */\n\n/* eslint-disable */\n.filepond--assistant{position:absolute;overflow:hidden;height:1px;width:1px;padding:0;border:0;clip:rect(1px,1px,1px,1px);-webkit-clip-path:inset(50%);clip-path:inset(50%);white-space:nowrap}.filepond--browser.filepond--browser{position:absolute;margin:0;padding:0;left:1em;top:1.75em;width:calc(100% - 2em);opacity:0;font-size:0}.filepond--data{position:absolute;width:0;height:0;padding:0;margin:0;border:none;visibility:hidden;pointer-events:none;contain:strict}.filepond--drip{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;opacity:.1;pointer-events:none;border-radius:.5em;background:rgba(0,0,0,.01)}.filepond--drip-blob{-webkit-transform-origin:center center;transform-origin:center center;width:8em;height:8em;margin-left:-4em;margin-top:-4em;background:#292625;border-radius:50%}.filepond--drip-blob,.filepond--drop-label{position:absolute;top:0;left:0;will-change:transform,opacity}.filepond--drop-label{right:0;margin:0;color:#4f4f4f;display:flex;justify-content:center;align-items:center;height:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.filepond--drop-label.filepond--drop-label label{display:block;margin:0;padding:.5em}.filepond--drop-label label{cursor:default;font-size:.875em;font-weight:400;text-align:center;line-height:1.5}.filepond--label-action{text-decoration:underline;-webkit-text-decoration-skip:ink;text-decoration-skip-ink:auto;-webkit-text-decoration-color:#a7a4a4;text-decoration-color:#a7a4a4;cursor:pointer}.filepond--root[data-disabled] .filepond--drop-label label{opacity:.5}.filepond--file-action-button.filepond--file-action-button{font-size:1em;width:1.625em;height:1.625em;font-family:inherit;line-height:inherit;margin:0;padding:0;border:none;outline:none;will-change:transform,opacity}.filepond--file-action-button.filepond--file-action-button span{position:absolute;overflow:hidden;height:1px;width:1px;padding:0;border:0;clip:rect(1px,1px,1px,1px);-webkit-clip-path:inset(50%);clip-path:inset(50%);white-space:nowrap}.filepond--file-action-button.filepond--file-action-button svg{width:100%;height:100%}.filepond--file-action-button.filepond--file-action-button:after{position:absolute;left:-.75em;right:-.75em;top:-.75em;bottom:-.75em;content:\"\"}.filepond--file-action-button{cursor:auto;color:#fff;border-radius:50%;background-color:rgba(0,0,0,.5);background-image:none;box-shadow:0 0 0 0 hsla(0,0%,100%,0);transition:box-shadow .25s ease-in}.filepond--file-action-button:focus,.filepond--file-action-button:hover{box-shadow:0 0 0 .125em hsla(0,0%,100%,.9)}.filepond--file-action-button[disabled]{color:hsla(0,0%,100%,.5);background-color:rgba(0,0,0,.25)}.filepond--file-action-button[hidden]{display:none}.filepond--action-edit-item.filepond--action-edit-item{width:2em;height:2em;padding:.1875em}.filepond--action-edit-item.filepond--action-edit-item[data-align*=center]{margin-left:-.1875em}.filepond--action-edit-item.filepond--action-edit-item[data-align*=bottom]{margin-bottom:-.1875em}.filepond--action-edit-item-alt{border:none;line-height:inherit;background:transparent;font-family:inherit;color:inherit;outline:none;padding:0;margin:0 0 0 .25em;pointer-events:all;position:absolute}.filepond--action-edit-item-alt svg{width:1.3125em;height:1.3125em}.filepond--action-edit-item-alt span{font-size:0;opacity:0}.filepond--file-info{position:static;display:flex;flex-direction:column;align-items:flex-start;flex:1;margin:0 .5em 0 0;min-width:0;will-change:transform,opacity;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.filepond--file-info *{margin:0}.filepond--file-info .filepond--file-info-main{font-size:.75em;line-height:1.2;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:100%}.filepond--file-info .filepond--file-info-sub{font-size:.625em;opacity:.5;transition:opacity .25s ease-in-out;white-space:nowrap}.filepond--file-info .filepond--file-info-sub:empty{display:none}.filepond--file-status{position:static;display:flex;flex-direction:column;align-items:flex-end;flex-grow:0;flex-shrink:0;margin:0;min-width:2.25em;text-align:right;will-change:transform,opacity;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.filepond--file-status *{margin:0;white-space:nowrap}.filepond--file-status .filepond--file-status-main{font-size:.75em;line-height:1.2}.filepond--file-status .filepond--file-status-sub{font-size:.625em;opacity:.5;transition:opacity .25s ease-in-out}.filepond--file-wrapper.filepond--file-wrapper{border:none;margin:0;padding:0;min-width:0;height:100%}.filepond--file-wrapper.filepond--file-wrapper>legend{position:absolute;overflow:hidden;height:1px;width:1px;padding:0;border:0;clip:rect(1px,1px,1px,1px);-webkit-clip-path:inset(50%);clip-path:inset(50%);white-space:nowrap}.filepond--file{position:static;display:flex;height:100%;align-items:flex-start;padding:.5625em;color:#fff;border-radius:.5em}.filepond--file .filepond--file-status{margin-left:auto;margin-right:2.25em}.filepond--file .filepond--processing-complete-indicator{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:3}.filepond--file .filepond--file-action-button,.filepond--file .filepond--processing-complete-indicator,.filepond--file .filepond--progress-indicator{position:absolute}.filepond--file [data-align*=left]{left:.5625em}.filepond--file [data-align*=right]{right:.5625em}.filepond--file [data-align*=center]{left:calc(50% - .8125em)}.filepond--file [data-align*=bottom]{bottom:1.125em}.filepond--file [data-align=center]{top:calc(50% - .8125em)}.filepond--file .filepond--progress-indicator{margin-top:.1875em}.filepond--file .filepond--progress-indicator[data-align*=right]{margin-right:.1875em}.filepond--file .filepond--progress-indicator[data-align*=left]{margin-left:.1875em}[data-filepond-item-state*=error] .filepond--file-info,[data-filepond-item-state*=invalid] .filepond--file-info,[data-filepond-item-state=cancelled] .filepond--file-info{margin-right:2.25em}[data-filepond-item-state~=processing] .filepond--file-status-sub{opacity:0}[data-filepond-item-state~=processing] .filepond--action-abort-item-processing~.filepond--file-status .filepond--file-status-sub{opacity:.5}[data-filepond-item-state=processing-error] .filepond--file-status-sub{opacity:0}[data-filepond-item-state=processing-error] .filepond--action-retry-item-processing~.filepond--file-status .filepond--file-status-sub{opacity:.5}[data-filepond-item-state=processing-complete] .filepond--action-revert-item-processing svg{-webkit-animation:fall .5s linear .125s both;animation:fall .5s linear .125s both}[data-filepond-item-state=processing-complete] .filepond--file-status-sub{opacity:.5}[data-filepond-item-state=processing-complete] .filepond--file-info-sub,[data-filepond-item-state=processing-complete] .filepond--processing-complete-indicator:not([style*=hidden])~.filepond--file-status .filepond--file-status-sub{opacity:0}[data-filepond-item-state=processing-complete] .filepond--action-revert-item-processing~.filepond--file-info .filepond--file-info-sub{opacity:.5}[data-filepond-item-state*=error] .filepond--file-wrapper,[data-filepond-item-state*=error] .filepond--panel,[data-filepond-item-state*=invalid] .filepond--file-wrapper,[data-filepond-item-state*=invalid] .filepond--panel{-webkit-animation:shake .65s linear both;animation:shake .65s linear both}[data-filepond-item-state*=busy] .filepond--progress-indicator svg{-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes shake{10%,90%{-webkit-transform:translateX(-.0625em);transform:translateX(-.0625em)}20%,80%{-webkit-transform:translateX(.125em);transform:translateX(.125em)}30%,50%,70%{-webkit-transform:translateX(-.25em);transform:translateX(-.25em)}40%,60%{-webkit-transform:translateX(.25em);transform:translateX(.25em)}}@keyframes shake{10%,90%{-webkit-transform:translateX(-.0625em);transform:translateX(-.0625em)}20%,80%{-webkit-transform:translateX(.125em);transform:translateX(.125em)}30%,50%,70%{-webkit-transform:translateX(-.25em);transform:translateX(-.25em)}40%,60%{-webkit-transform:translateX(.25em);transform:translateX(.25em)}}@-webkit-keyframes fall{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}70%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}to{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}@keyframes fall{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}70%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1);-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}to{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}.filepond--hopper[data-hopper-state=drag-over]>*{pointer-events:none}.filepond--hopper[data-hopper-state=drag-over]:after{content:\"\";position:absolute;left:0;top:0;right:0;bottom:0;z-index:100}.filepond--progress-indicator{z-index:103}.filepond--file-action-button{z-index:102}.filepond--file-status{z-index:101}.filepond--file-info{z-index:100}.filepond--item{position:absolute;top:0;left:0;right:0;z-index:1;padding:0;margin:.25em;will-change:transform,opacity}.filepond--item>.filepond--panel{z-index:-1}.filepond--item>.filepond--panel .filepond--panel-bottom{box-shadow:0 .0625em .125em -.0625em rgba(0,0,0,.25)}.filepond--item>.filepond--file-wrapper,.filepond--item>.filepond--panel{transition:opacity .15s ease-out}.filepond--item[data-drag-state]{cursor:-webkit-grab;cursor:grab}.filepond--item[data-drag-state]>.filepond--panel{transition:box-shadow .125s ease-in-out;box-shadow:0 0 0 transparent}.filepond--item[data-drag-state=drag]{cursor:-webkit-grabbing;cursor:grabbing}.filepond--item[data-drag-state=drag]>.filepond--panel{box-shadow:0 .125em .3125em rgba(0,0,0,.325)}.filepond--item[data-drag-state]:not([data-drag-state=idle]){z-index:2}.filepond--item-panel{background-color:#64605e}[data-filepond-item-state=processing-complete] .filepond--item-panel{background-color:#369763}[data-filepond-item-state*=error] .filepond--item-panel,[data-filepond-item-state*=invalid] .filepond--item-panel{background-color:#c44e47}.filepond--item-panel{border-radius:.5em;transition:background-color .25s}.filepond--list-scroller{position:absolute;top:0;left:0;right:0;margin:0;will-change:transform}.filepond--list-scroller[data-state=overflow] .filepond--list{bottom:0;right:0}.filepond--list-scroller[data-state=overflow]{overflow-y:scroll;overflow-x:hidden;-webkit-overflow-scrolling:touch;-webkit-mask:linear-gradient(180deg,#000 calc(100% - .5em),transparent);mask:linear-gradient(180deg,#000 calc(100% - .5em),transparent)}.filepond--list-scroller::-webkit-scrollbar{background:transparent}.filepond--list-scroller::-webkit-scrollbar:vertical{width:1em}.filepond--list-scroller::-webkit-scrollbar:horizontal{height:0}.filepond--list-scroller::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.3);border-radius:99999px;border:.3125em solid transparent;background-clip:content-box}.filepond--list.filepond--list{position:absolute;top:0;margin:0;padding:0;list-style-type:none;will-change:transform}.filepond--list{left:.75em;right:.75em}.filepond--root[data-style-panel-layout~=integrated]{width:100%;height:100%;max-width:none;margin:0}.filepond--root[data-style-panel-layout~=circle] .filepond--panel-root,.filepond--root[data-style-panel-layout~=integrated] .filepond--panel-root{border-radius:0}.filepond--root[data-style-panel-layout~=circle] .filepond--panel-root>*,.filepond--root[data-style-panel-layout~=integrated] .filepond--panel-root>*{display:none}.filepond--root[data-style-panel-layout~=circle] .filepond--drop-label,.filepond--root[data-style-panel-layout~=integrated] .filepond--drop-label{bottom:0;height:auto;display:flex;justify-content:center;align-items:center;z-index:7}.filepond--root[data-style-panel-layout~=circle] .filepond--item-panel,.filepond--root[data-style-panel-layout~=integrated] .filepond--item-panel{display:none}.filepond--root[data-style-panel-layout~=compact] .filepond--list-scroller,.filepond--root[data-style-panel-layout~=integrated] .filepond--list-scroller{overflow:hidden;height:100%;margin-top:0;margin-bottom:0}.filepond--root[data-style-panel-layout~=compact] .filepond--list,.filepond--root[data-style-panel-layout~=integrated] .filepond--list{left:0;right:0;height:100%}.filepond--root[data-style-panel-layout~=compact] .filepond--item,.filepond--root[data-style-panel-layout~=integrated] .filepond--item{margin:0}.filepond--root[data-style-panel-layout~=compact] .filepond--file-wrapper,.filepond--root[data-style-panel-layout~=integrated] .filepond--file-wrapper{height:100%}.filepond--root[data-style-panel-layout~=compact] .filepond--drop-label,.filepond--root[data-style-panel-layout~=integrated] .filepond--drop-label{z-index:7}.filepond--root[data-style-panel-layout~=circle]{border-radius:99999rem;overflow:hidden}.filepond--root[data-style-panel-layout~=circle]>.filepond--panel{border-radius:inherit}.filepond--root[data-style-panel-layout~=circle]>.filepond--panel>*{display:none}.filepond--root[data-style-panel-layout~=circle] .filepond--file-info,.filepond--root[data-style-panel-layout~=circle] .filepond--file-status{display:none}.filepond--root[data-style-panel-layout~=circle] .filepond--action-edit-item{opacity:1!important;visibility:visible!important}@media not all and (-webkit-min-device-pixel-ratio:0), not all and (min-resolution:0.001dpcm){@supports (-webkit-appearance:none) and (stroke-color:transparent){.filepond--root[data-style-panel-layout~=circle]{will-change:transform}}}.filepond--panel-root{border-radius:.5em;background-color:#f1f0ef}.filepond--panel{position:absolute;left:0;top:0;right:0;margin:0;height:100%!important;pointer-events:none}.filepond-panel:not([data-scalable=false]){height:auto!important}.filepond--panel[data-scalable=false]>div{display:none}.filepond--panel[data-scalable=true]{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;background-color:transparent!important;border:none!important}.filepond--panel-bottom,.filepond--panel-center,.filepond--panel-top{position:absolute;left:0;top:0;right:0;margin:0;padding:0}.filepond--panel-bottom,.filepond--panel-top{height:.5em}.filepond--panel-top{border-bottom-left-radius:0!important;border-bottom-right-radius:0!important;border-bottom:none!important}.filepond--panel-top:after{content:\"\";position:absolute;height:2px;left:0;right:0;bottom:-1px;background-color:inherit}.filepond--panel-bottom,.filepond--panel-center{will-change:transform;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:left top;transform-origin:left top;-webkit-transform:translate3d(0,.5em,0);transform:translate3d(0,.5em,0)}.filepond--panel-bottom{border-top-left-radius:0!important;border-top-right-radius:0!important;border-top:none!important}.filepond--panel-bottom:before{content:\"\";position:absolute;height:2px;left:0;right:0;top:-1px;background-color:inherit}.filepond--panel-center{height:100px!important;border-top:none!important;border-bottom:none!important;border-radius:0!important}.filepond--panel-center:not([style]){visibility:hidden}.filepond--progress-indicator{position:static;width:1.25em;height:1.25em;color:#fff;margin:0;pointer-events:none;will-change:transform,opacity}.filepond--progress-indicator svg{width:100%;height:100%;vertical-align:top;transform-box:fill-box}.filepond--progress-indicator path{fill:none;stroke:currentColor}.filepond--list-scroller{z-index:6}.filepond--drop-label{z-index:5}.filepond--drip{z-index:3}.filepond--root>.filepond--panel{z-index:2}.filepond--browser{z-index:1}.filepond--root{box-sizing:border-box;position:relative;margin-bottom:1em;font-size:1rem;line-height:normal;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-weight:450;text-align:left;text-rendering:optimizeLegibility;direction:ltr;contain:layout style size}.filepond--root *{box-sizing:inherit;line-height:inherit}.filepond--root :not(text){font-size:inherit}.filepond--root[data-disabled]{pointer-events:none}.filepond--root[data-disabled] .filepond--list-scroller{pointer-events:all}.filepond--root[data-disabled] .filepond--list{pointer-events:none}.filepond--root .filepond--drop-label{min-height:4.75em}.filepond--root .filepond--list-scroller{margin-top:1em;margin-bottom:1em}.filepond--root .filepond--credits{position:absolute;right:0;opacity:.175;line-height:.85;font-size:11px;color:inherit;text-decoration:none;z-index:3;bottom:-14px}.filepond--root .filepond--credits[style]{top:0;bottom:auto;margin-top:14px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_filepond_plugin_image_preview_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./filepond-plugin-image-preview.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_filepond_plugin_image_preview_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_filepond_plugin_image_preview_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/filepond/dist/filepond.min.css":
/*!*****************************************************!*\
  !*** ./node_modules/filepond/dist/filepond.min.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_filepond_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./filepond.min.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/filepond/dist/filepond.min.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_filepond_min_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_filepond_min_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-file-agent/dist/vue-file-agent.umd.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-file-agent/dist/vue-file-agent.umd.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js"));
	else {}
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_662__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_662__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_662__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_662__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_662__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_662__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_662__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_662__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_662__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_662__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_662__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_662__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_662__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_662__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_662__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_662__(__nested_webpack_require_662__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "6816":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_4150__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_file_agent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_4150__("eb77");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_file_agent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_4150__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_file_agent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_file_agent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    if (document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "eb77":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_9536__) {

"use strict";
// ESM COMPAT FLAG
__nested_webpack_require_9536__.r(__webpack_exports__);

// EXPORTS
__nested_webpack_require_9536__.d(__webpack_exports__, "VueFileAgentPlugin", function() { return /* reexport */ src_VueFileAgentPlugin; });
__nested_webpack_require_9536__.d(__webpack_exports__, "mixin", function() { return /* reexport */ mixin; });
__nested_webpack_require_9536__.d(__webpack_exports__, "VueFileAgentMixin", function() { return /* reexport */ vue_file_agent_mixin; });
__nested_webpack_require_9536__.d(__webpack_exports__, "VueFilePreviewMixin", function() { return /* reexport */ vue_file_preview_mixin; });
__nested_webpack_require_9536__.d(__webpack_exports__, "utils", function() { return /* reexport */ utils; });
__nested_webpack_require_9536__.d(__webpack_exports__, "FileRecord", function() { return /* reexport */ file_record; });
__nested_webpack_require_9536__.d(__webpack_exports__, "plugins", function() { return /* reexport */ plugins; });
__nested_webpack_require_9536__.d(__webpack_exports__, "FileData", function() { return /* reexport */ FileData; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __nested_webpack_require_9536__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __nested_webpack_require_9536__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"72196104-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-file-icon.vue?vue&type=template&id=61d49b70&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"viewBox":_vm.viewBoxComputed}},[_vm._l((_vm.icon.paths),function(d,index){return [(d)?_c('path',{key:index,attrs:{"d":d}}):_vm._e()]})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vue-file-icon.vue?vue&type=template&id=61d49b70&

// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

// CONCATENATED MODULE: ./src/lib/extensions.ts
/* harmony default export */ var extensions = ({
    'audio': [
        'aif',
        'cda',
        'mid',
        'midi',
        // 'mp3',
        'mpa',
        // 'ogg',
        // 'wav',
        'wma',
        'wpl',
    ],
    'audio-playable': ['mp3', 'ogg', 'wav'],
    'archive': ['7z', 'arj', 'deb', 'pkg', 'rar', 'rpm', 'tar.gz', 'z', 'zip'],
    'disc': [
        // 'bin',
        'dmg',
        'iso',
        'toast',
        'vcd',
    ],
    'database': [
        'csv',
        'dat',
        'db',
        'dbf',
        'log',
        'mdb',
        'sav',
        'sql',
        'tar',
    ],
    'executable': ['apk', 'bat', 'bin', 'cgi', 'pl', 'com', 'exe', 'gadget', 'jar', 'py', 'wsf', 'ipa'],
    'font': ['fnt', 'fon', 'otf', 'ttf'],
    'image': ['ai', 'bmp', 'gif', 'ico', 'jpeg', 'jpg', 'png', 'ps', 'psd', 'svg', 'tif', 'tiff'],
    'markup': [
        'asp',
        'aspx',
        'cer',
        'cfm',
        'cgi',
        'pl',
        'css',
        'scss',
        'htm',
        'html',
        'jsp',
        // 'vue',
        'part',
        'php',
        'py',
        'rss',
        'xml',
        'xhtml',
    ],
    'presentation': ['key', 'odp', 'pps', 'ppt', 'pptx'],
    'script': ['c', 'class', 'cpp', 'cs', 'h', 'java', 'js', 'json', 'sh', 'swift', 'vb'],
    'sheet': ['ods', 'xlr', 'xls', 'xlsx'],
    'system': [
        'bak',
        'cab',
        'cfg',
        'cpl',
        'cur',
        'dll',
        'dmp',
        'drv',
        'icns',
        // 'ico',
        'ini',
        'lnk',
        'msi',
        'sys',
        'tmp',
    ],
    'video': [
        '3g2',
        '3gp',
        'avi',
        'flv',
        'h264',
        // 'm4v',
        'mkv',
        // 'mov',
        // 'mp4',
        'mpg',
        'mpeg',
        'rm',
        'swf',
        'vob',
        // 'webm',
        'wmv',
    ],
    'video-playable': ['mp4', 'webm', 'mov'],
    'vue': ['vue'],
    'doc': [
        'doc',
        'docx',
        'odt',
        'rtf',
        'tex',
        // 'txt',
        'wks',
        'wps',
        'wpd',
    ],
    'text': ['txt'],
    'ebook': ['epub'],
    'pdf': ['pdf'],
    'folder': ['folder'],
    'play': ['play'],
});

// CONCATENATED MODULE: ./src/lib/icons.ts
var icons_e_1, icons_a;


var SvgIcon = /** @class */ (function () {
    function SvgIcon(paths, color, viewBox) {
        this.paths = paths;
        this.color = color;
        this.viewBox = viewBox;
        this.category = '';
    }
    return SvgIcon;
}());

var playIconPaths = ['M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-4 29V15l12 9-12 9z'];
var icons = {
    'folder': new SvgIcon([
        'M96.5 93.7h-93c-2 0-3.5-1.5-3.5-3.5V35.4h100v54.8c0 2-1.5 3.5-3.5 3.5z',
        'M44.9 20V9.7c0-2-1.5-3.5-3.5-3.5h-38C1.5 6.3 0 7.8 0 9.7v25.7h100V23.5c0-2-1.5-3.5-3.5-3.5H44.9z',
    ], '#efce4a'),
    'audio': new SvgIcon([
        'M32.5 37.5h-9v25h9L53.6 77V23L32.5 37.5M71.9 50c0 6.8-3.7 12.7-9.1 15.8l2.8 4.9c7.1-4.1 11.9-11.8 11.9-20.7 0-8.8-4.8-16.6-11.9-20.7l-2.8 4.9c5.4 3.1 9.1 9 9.1 15.8z',
        // tslint:disable-next-line
        'M62.1 50c0 3.2-1.7 5.9-4.3 7.4l2.7 4.7c4.2-2.4 7-6.9 7-12.1 0-5.2-2.8-9.7-7-12.1l-2.7 4.7c2.6 1.5 4.3 4.2 4.3 7.4z',
    ], '#039'),
    'video': new SvgIcon([
        'M21 26.4v47.1h58V26.4H21zm10.9 43.5h-7.2v-7.2h7.2v7.2zm0-10.8h-7.2v-7.2h7.2v7.2zm0-10.9h-7.2V41h7.2v7.2zm0-10.9h-7.2v-7.2h7.2v7.2zm10.9 25.4V37.3L60.9 50 42.8 62.7zm32.6 7.2h-7.2v-7.2h7.2v7.2zm0-10.8h-7.2v-7.2h7.2v7.2zm0-10.9h-7.2V41h7.2v7.2zm0-10.9h-7.2v-7.2h7.2v7.2z',
    ], '#ef6f2e'),
    'audio-playable': new SvgIcon(playIconPaths, '#039', '0 0 48 48'),
    'video-playable': new SvgIcon(playIconPaths, '#ef6f2e', '0 0 48 48'),
    'archive': new SvgIcon([
        'M72.4 38.5h-7.9v-7.9l7.9 7.9zm-21.3-7.9v28.8h21.4v-19h-9.9v-9.9H51.1zm3.3-7.6H30.8v5.6h9.3l-5.9 4.5v4.8l8.6-6.6v-2.7h30.1v-2.3L54.4 23zM42.9 35.1l-8.6 6.6v4.8l8.6-6.6v-4.8zm-8.7 20l8.6-6.6v-4.8l-8.6 6.6v4.8zm8.7 2v-4.8l-8.6 6.6v2.6h-3.4v5.6h5.3v3.8H33c-.6-1-1.6-1.6-2.8-1.6-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1.2 0 2.2-.6 2.8-1.6h3.1V77h4.8v-2.9H44c.6 1 1.6 1.6 2.8 1.6 1.8 0 3.2-1.4 3.2-3.2s-1.4-3.2-3.2-3.2c-1.2 0-2.2.6-2.8 1.6h-3.1v-3.8h13.5l18.5-3.3v-2.3H37.1l5.8-4.4z',
    ], '#ba8322'),
    'system': new SvgIcon([
        'M73.6 54.8c-2.1-.7-3.4-2.6-3.4-4.8s1.4-4.1 3.4-4.8c.6-.2 1-.9.8-1.5-.6-2.3-1.5-4.4-2.7-6.5-.3-.6-1.1-.8-1.7-.5-.7.4-1.6.6-2.4.6-2.8 0-5-2.3-5-5 0-.8.2-1.7.6-2.4.3-.6.1-1.3-.5-1.7-2-1.2-4.2-2.1-6.5-2.7-.6-.2-1.3.2-1.5.8-.7 2.1-2.6 3.4-4.8 3.4-2.2 0-4.1-1.4-4.8-3.4-.2-.6-.9-1-1.5-.8-2.3.6-4.4 1.5-6.5 2.7-.6.3-.8 1.1-.5 1.7.4.7.6 1.6.6 2.4 0 2.8-2.3 5-5 5-.8 0-1.7-.2-2.4-.6-.6-.3-1.3-.1-1.7.5-1.2 2-2.1 4.2-2.7 6.5-.2.6.2 1.3.8 1.5 2.1.7 3.4 2.6 3.4 4.8s-1.4 4.1-3.4 4.8c-.6.2-1 .9-.8 1.5.6 2.3 1.5 4.4 2.7 6.5.3.6 1.1.8 1.7.5.7-.4 1.6-.6 2.4-.6 2.8 0 5 2.3 5 5 0 .8-.2 1.7-.6 2.4-.3.6-.1 1.3.5 1.7 2 1.2 4.2 2.1 6.5 2.7h.3c.5 0 1-.3 1.2-.9.7-2.1 2.6-3.4 4.8-3.4 2.2 0 4.1 1.4 4.8 3.4.2.6.9 1 1.5.8 2.3-.6 4.4-1.5 6.5-2.7.6-.3.8-1.1.5-1.7-.4-.7-.6-1.6-.6-2.4 0-2.8 2.3-5 5-5 .8 0 1.7.2 2.4.6.6.3 1.3.1 1.7-.5 1.2-2 2.1-4.2 2.7-6.5.2-.5-.1-1.2-.8-1.4zM50 57.6c-4.2 0-7.6-3.4-7.6-7.6 0-4.2 3.4-7.6 7.6-7.6 4.2 0 7.6 3.4 7.6 7.6 0 4.2-3.4 7.6-7.6 7.6z',
    ], '#999'),
    'image': new SvgIcon([
        'm 40.400002,35 a 8,8 0 0 1 -8,8 8,8 0 0 1 -8,-8 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 z',
        'M78.9 47.3l-9.7-9.6L50 57l-9.6-9.7-19.3 19.3V73h57.8z',
    ], '#5b2d8d'),
    'doc': new SvgIcon([
        'M29.6 53l-5.9-18.2c-.2-.7-.4-1-.5-1-.1-.1-.2-.1-.4-.2l-2.1-.6-.1-2.6h11l.2 2.6-2.1.6v.2c0 .2.1.7.4 1.2l2.2 7 3.9-11.7 3-.1 3.6 11.7 2.5-7c.1-.5.4-1 .4-1.2v-.1l-1.8-.5-.1-2.7h8.6l.2 2.6-2.3.7c-.1 0-.2.1-.4.1 0 .1-.2.2-.4.9L43 52.8l-3.1.2-3.3-11.2-3.9 11-3.1.2z',
        'M57.8 30.2h21.7v3.4H57.8zm0 9.2h21.7v3.4H57.8zm0 9.4h21.7v3.4H57.8zm-36.2 9.6h57.9v3.4H21.6zm0 9.4h57.9v3.4H21.6z',
    ], '#2372ba'),
    'executable': new SvgIcon(['M33.1 29.8l-6.6 6.6L37.2 47 26.5 57.6l6.6 6.6L50.2 47zm18.8 31.1h22.6v9.2H51.9z'], '#333'),
    'ebook': new SvgIcon([
        'M75.8 45.7c-.3-.6-.7-1.2-1.3-1.6-.1.5-.3 1-.6 1.5L58.3 69.8c-.6.9-1.9 1.1-2.9.8l-25-7c-1.5-.4-3.3-1.3-3.4-3 0-.6 0-.9.4-1.1.3-.3.8-.2 1.1-.1L52 66c3.4 1 4.4.2 6.9-3.5l14.4-22.2c.7-1.2.9-2.5.5-3.6s-1.4-2-2.7-2.4l-20.6-5.7c-.5-.1-1-.1-1.5-.1v-.1c-3.2-1.9-4.4 1.7-6 3-.6.5-1.4.8-1.7 1.3-.2.5-.1 1-.3 1.4-.6 1.4-2.4 3.6-3.3 4.3-.6.4-1.2.5-1.6 1.1-.3.4-.2 1.1-.4 1.6-.5 1.2-2.1 3.3-3.2 4.4-.4.4-1 .6-1.3 1.1-.3.4-.2 1.1-.4 1.6-.7 1.3-2.2 3.2-3.4 4.3-.6.6-1.3.9-1.6 1.5-.1.3 0 .7-.2 1.1-.2.6-.5 1.1-.7 1.7-.7.9-1 2.1-.9 3.4.2 3.1 2.5 6 5.3 6.8l25 7c2.3.6 5.2-.5 6.6-2.5l14.4-22.2c.7-1.1.9-2.4.5-3.6zm-28.9-7.9l1.1-1.6c.3-.4.9-.7 1.4-.5l16.5 4.6c.5.1.7.6.4 1l-1.1 1.6c-.3.4-.9.7-1.4.5l-16.5-4.6c-.5-.2-.7-.6-.4-1zM42.7 44l1.1-1.6c.3-.4.9-.7 1.4-.5l16.5 4.6c.5.1.7.6.4 1L60.9 49c-.3.4-.9.7-1.4.5L43.1 45c-.5-.1-.7-.6-.4-1z',
    ], '#963'),
    'markup': new SvgIcon([
        'M21.5 48.3l16.2-14v7.1l-11 9.2v.1l11 9.2V67L21.5 53v-4.7zm30.6-17.6h4.3L48 71.3h-4.2l8.3-40.6zM62.3 60l11-9.2v-.1l-11-9.2v-7.1l16.2 14v4.9l-16.2 14V60z',
    ] /* no color? */),
    'script': new SvgIcon([
        'M42.3 44.2h15.4V48H42.3v-3.8zm0 7.7h15.4v3.8H42.3v-3.8zm0 7.7h15.4v3.8H42.3v-3.8zM69.2 25H38.5c-4.2 0-7.7 3.4-7.7 7.7v34.6h-7.7c0 4.2 3.4 7.7 7.7 7.7h30.8c4.2 0 7.7-3.4 7.7-7.7V36.5H77v-3.8c-.1-4.3-3.5-7.7-7.8-7.7zm-3.8 41.6c0 2.5-2 4.5-4.5 4.5H32.7c1.9-1.3 1.9-3.8 1.9-3.8V32.7c0-2.1 1.7-3.8 3.8-3.8s3.8 1.7 3.8 3.8v3.8h23.1v30.1zM46.2 32.7v-3.8h23.1c3.5 0 3.8 2.2 3.8 3.8H46.2z',
    ] /* no color? */),
    'disc': new SvgIcon([
        'M46.9 50c0 .8.3 1.6.9 2.2 1.2 1.2 3.2 1.2 4.4 0 .6-.6.9-1.4.9-2.2 0-.8-.3-1.6-.9-2.2-.6-.6-1.4-.9-2.2-.9-.8 0-1.6.3-2.2.9-.6.6-.9 1.4-.9 2.2z',
        'M32.3 32.3c-9.8 9.8-9.8 25.6 0 35.4 9.8 9.8 25.6 9.8 35.4 0 9.8-9.8 9.8-25.6 0-35.4-9.8-9.7-25.6-9.7-35.4 0zm37 28.2c-.9 1.7-2.1 3.2-3.5 4.6-1.4 1.4-3 2.6-4.6 3.5l-5.8-11.1s.5-.2 1.6-1.2c1.1-1.1 1.3-1.6 1.3-1.6l11 5.8zM54.4 45.6c1.2 1.2 1.8 2.8 1.8 4.4 0 1.6-.6 3.2-1.8 4.4-2.4 2.4-6.4 2.4-8.8 0-1.2-1.2-1.8-2.8-1.8-4.4 0-1.6.6-3.2 1.8-4.4a6.1 6.1 0 0 1 8.8 0zm-8.5-4.4s-1.2.7-2.2 1.8c-.9 1-1 1.2-1.3 1.7l-11-5.9c.9-1.7 2.1-3.2 3.5-4.6 1.4-1.4 3-2.6 4.6-3.5l6.4 10.5z',
    ], '#c96'),
    'text': new SvgIcon(['M69.4 28.6v5.5H21.5v-5.5M30.6 41h47.9v5.6H30.6zm-9.1 12.4h47.9V59H21.5zm9.1 12.5h47.9v5.6H30.6z'], '#6b533b'),
    'database': new SvgIcon([
        'M48.1 75.5c-6.5-.3-12.3-2.3-15.4-5.4-.9-.9-1.8-2.1-2.2-2.9l-.3-.5v-6.1c0-6 0-6.1.1-5.6.3 1.3 1.1 2.7 2.3 3.7.8.7 2.5 1.8 3.8 2.5 2.4 1.2 5.2 2 8.4 2.5 1.9.3 2.6.3 5.3.3s3.4 0 5.3-.3c3.1-.5 6-1.3 8.3-2.5 1.4-.7 3-1.7 3.8-2.5 1.1-1 2-2.5 2.3-3.8.1-.5.1-.4.1 5.5v6l-.3.6c-1 1.9-2.6 3.6-4.7 4.8-4.3 2.7-10.5 4-16.8 3.7z',
        'M48.1 60.4c-5.7-.3-11-1.9-14.3-4.4-.7-.6-1.8-1.6-2.3-2.2-.4-.6-.8-1.2-1.1-1.8l-.3-.5v-6c0-5.9 0-6 .1-5.5.2.9.7 2 1.5 2.9.4.5 1.1 1.2 1.5 1.4.1.1.5.3.7.5 2.7 1.9 6.5 3.3 10.8 3.9 1.9.3 2.6.3 5.3.3s3.4 0 5.3-.3c3.1-.5 6-1.3 8.4-2.5 1.4-.7 3-1.8 3.9-2.5 1.1-1 2-2.4 2.2-3.7.1-.5.1-.4.1 5.5v5.9l-.4.8c-.7 1.2-1.1 1.8-1.9 2.7-.8.8-1.6 1.5-2.7 2.1-4.3 2.4-10.5 3.7-16.8 3.4z',
        'M47.7 45.4c-3.8-.3-6.8-.9-9.6-2-3.4-1.3-5.8-3.1-7.1-5.2-.3-.4-.5-1-.7-1.6-.2-.6-.3-2-.1-2.7.9-4.3 6.6-7.9 14.5-9 1.9-.3 2.6-.3 5.3-.3s3.4 0 5.3.3c3.1.5 6 1.3 8.4 2.5 3.5 1.7 5.6 4 6.1 6.5.1.7.1 2.1-.1 2.7-.4 1.3-1 2.2-2 3.2-2.8 2.9-7.9 4.9-14.1 5.6-.9-.1-5.1 0-5.9 0z',
    ], '#a03537'),
    'pdf': new SvgIcon([
        'M46.2 21.8c-3.5 0-6.3 2.9-6.3 6.3 0 4.3 2.4 9.6 4.9 14.7-2 6.1-4.1 12.7-7 18.2-5.8 2.3-11 4-14 6.6l-.2.2c-1.1 1.2-1.8 2.7-1.8 4.4 0 3.5 2.9 6.3 6.3 6.3 1.7 0 3.4-.6 4.4-1.8 0 0 .2 0 .2-.2 2.3-2.7 5-7.8 7.5-12.2 5.5-2.1 11.5-4.4 16.9-5.8 4.1 3.4 10.1 5.5 15 5.5 3.5 0 6.3-2.9 6.3-6.3 0-3.5-2.9-6.3-6.3-6.3-4 0-9.6 1.4-13.9 2.9-3.5-3.4-6.7-7.5-9.2-11.9C50.6 37 52.6 32 52.6 28c-.2-3.5-2.9-6.2-6.4-6.2zm0 3.6c1.4 0 2.4 1.1 2.4 2.4 0 1.8-1.1 5.3-2.1 9-1.5-3.7-2.9-7.2-2.9-9 .1-1.2 1.2-2.4 2.6-2.4zm1.1 21.5c1.8 3.1 4.1 5.8 6.6 8.2-3.7 1.1-7.3 2.3-11 3.7 1.8-3.8 3.1-7.9 4.4-11.9zM72 55c1.4 0 2.4 1.1 2.4 2.4 0 1.4-1.1 2.4-2.4 2.4-2.9 0-6.9-1.2-10.1-3.1C65.6 56 69.7 55 72 55zM34.6 66.2c-1.8 3.2-3.5 6.1-4.7 7.6-.5.5-.9.6-1.7.6-1.4 0-2.4-1.1-2.4-2.4 0-.6.3-1.4.6-1.7 1.3-1.2 4.5-2.6 8.2-4.1z',
    ], '#c11e07'),
    'sheet': new SvgIcon([
        'M62.1 30.9h14.1v9.4H62.1zm0 14.5h14.1v9.4H62.1zm0 14.3h14.1v9.4H62.1zm-19.2 0H57v9.4H42.9zm-19 0H38v9.4H23.9zm19.2-14.2h14.1v9.4H43.1zm-19.2 0H38v9.4H23.9zm19.2-14.6h14.1v9.4H43.1zm-19.2 0H38v9.4H23.9z',
    ], '#30723f'),
    'presentation': new SvgIcon([
        'M 73.319289,26.32707 H 26.61477 c -2.335226,0 -4.258353,1.917194 -4.258353,4.245215 v 29.853446 c 0,2.328021 1.923127,4.245215 4.258353,4.245215 h 19.506006 l -1.923128,7.257947 h -2.197859 c -0.961564,0 -1.648395,0.684712 -1.648395,1.643309 0,0.958597 0.686831,1.643309 1.648395,1.643309 h 15.797117 c 0.961563,0 1.648394,-0.684712 1.648394,-1.643309 0,-0.958597 -0.686831,-1.643309 -1.648394,-1.643309 H 55.46168 l -1.923128,-7.39489 h 19.780737 c 2.335226,0 4.258353,-1.917193 4.258353,-4.245214 V 30.572285 c 0,-2.328021 -1.923127,-4.245215 -4.258353,-4.245215 z m 0.412099,34.372546 H 26.202672 V 30.2984 h 47.39135 z',
        'm 38.428266,48.511741 h 3.846255 v 7.668775 h -3.846255 z m 6.456214,-2.464963 h 3.846254 V 56.180516 H 44.88448 Z m 6.318846,-2.601906 h 3.846255 v 12.735644 h -3.846255 z m 6.318847,-2.464964 h 3.846255 v 15.200608 h -3.846255 z m -0.274732,-5.614639 -6.730946,3.697445 -4.945184,-1.643308 -8.379341,4.519099 1.236296,1.369424 7.417777,-3.834387 4.945185,1.643309 7.692509,-4.245215 1.236296,1.369424 2.88469,-4.792984 -6.593578,0.410827 z',
    ], '#c24f32'),
    'font': new SvgIcon([
        'M40.4 56.2H28.7l-1.4 3.1c-.5 1-.7 1.9-.7 2.6 0 .9.4 1.6 1.1 2 .4.3 1.5.4 3.2.6v.9H20v-.9c1.2-.2 2.2-.6 2.9-1.4.8-.8 1.7-2.4 2.8-4.8l11.8-25.6h.5l12 26.2c1.1 2.5 2.1 4.1 2.8 4.7.6.5 1.3.8 2.3.9v.9h-16v-.9h.7c1.3 0 2.2-.2 2.7-.5.4-.3.5-.6.5-1.1 0-.3 0-.6-.1-.9 0-.1-.3-.7-.7-1.8l-1.8-4zm-.8-1.8l-4.9-11-5.1 11h10z',
        'M80 44.2l-4.7 15.7-.5 1.9c0 .2-.1.4-.1.5 0 .2.1.4.2.5.1.2.3.2.4.2.3 0 .8-.3 1.4-.8.2-.2.8-.9 1.8-2.2l.9.4c-1.2 2-2.4 3.5-3.7 4.5-1.3.9-2.7 1.4-4.2 1.4-.9 0-1.6-.2-2.1-.7-.5-.5-.7-1-.7-1.8 0-.6.3-1.8.8-3.4l.6-1.9c-1.9 3.1-3.7 5.4-5.4 6.7-1 .8-2.1 1.1-3.2 1.1-1.5 0-2.6-.6-3.2-1.8-.7-1.2-1-2.5-1-4 0-2.2.7-4.8 2.1-7.6 1.4-2.9 3.2-5.2 5.5-6.9 1.9-1.4 3.6-2.2 5.3-2.2.9 0 1.6.3 2.2.8.6.5 1 1.4 1.2 2.8l.9-2.9 5.5-.3zm-7.8 4.5c0-1.3-.2-2.2-.6-2.8-.3-.4-.7-.6-1.2-.6s-1 .2-1.6.7c-1.1 1-2.3 3-3.5 5.9-1.3 3-1.9 5.6-1.9 7.7 0 .8.1 1.4.4 1.8.3.4.6.6.9.6.7 0 1.5-.4 2.2-1.2 1.1-1.2 2-2.6 2.9-4.3 1.6-2.9 2.4-5.5 2.4-7.8z',
    ], '#7291a1'),
    'vue': new SvgIcon([
        'M 66.425365,28.281905 H 56.751974 L 49.707631,39.427061 43.669624,28.281905 H 21.530262 L 49.707631,76.54823 77.885006,28.281905 Z m -37.888497,4.025337 h 6.767604 L 49.707631,57.239179 64.098226,32.307242 h 6.767597 L 49.707631,68.560446 Z',
    ], '#41B883'),
    'other': new SvgIcon([
        'M71 36.3L57.8 23.1c-.4-.4-.9-.6-1.4-.6h-26c-1.1 0-2 .9-2 2v51.1c0 1.1.9 2 2 2h39.3c1.1 0 2-.9 2-2V37.7c-.1-.5-.3-1-.7-1.4zm-3.9 2.3H55.5V27l11.6 11.6zm.1 34.5H32.8V26.9h18.5v13.3c0 1.4 1.2 2.6 2.6 2.6h13.3v30.3z',
    ] /* no color? */),
    // system icons
    'system-close': new SvgIcon(['M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'], undefined, '0 0 24 24'),
    'system-file-preview-new': new SvgIcon([
        'M745,353c-5.6,0-11.3,0.2-17.2,0.7C687.4,237.3,577.8,157,451,157c-162.1,0-294,131.9-294,294c0,2.1,0,4.1,0,6.2C72.6,479,10,555.8,10,647c0,108.1,87.9,196,196,196h245V618.3l-63.4,63.4c-9.6,9.6-22.1,14.4-34.6,14.4s-25.1-4.8-34.6-14.4c-19.2-19.2-19.2-50.1,0-69.3l147-147c4.6-4.6,9.9-8.1,16-10.6c12-4.9,25.5-4.9,37.4,0c6,2.5,11.4,6.1,16,10.6l147,147c19.2,19.2,19.2,50.1,0,69.3c-9.6,9.6-22.1,14.4-34.6,14.4s-25.1-4.8-34.6-14.4L549,618.3V843h196c135.1,0,245-109.9,245-245S880.1,353,745,353z',
    ], undefined, '0 0 1000 1000'),
    // system icons
    'system-sortable-handle': new SvgIcon(['M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'], undefined, '0 0 24 24'),
    'system-file-av-play': new SvgIcon(['M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-4 29V15l12 9-12 9z'], undefined, '0 0 48 48'),
    // M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-4 29V15l12 9-12 9z
    'system-file-name-edit': new SvgIcon([
        'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
    ], undefined, '0 0 24 24'),
};
for (var category in icons) {
    if (icons.hasOwnProperty(category)) {
        icons[category].category = category;
    }
}
/* harmony default export */ var lib_icons = (icons);
var extensionsMap = {};
for (var cat in extensions) {
    if (extensions.hasOwnProperty(cat)) {
        try {
            for (var icons_b = (icons_e_1 = void 0, __values(extensions[cat])), icons_c = icons_b.next(); !icons_c.done; icons_c = icons_b.next()) {
                var icons_ext = icons_c.value;
                extensionsMap[icons_ext] = cat;
            }
        }
        catch (e_1_1) { icons_e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (icons_c && !icons_c.done && (icons_a = icons_b.return)) icons_a.call(icons_b);
            }
            finally { if (icons_e_1) throw icons_e_1.error; }
        }
    }
}
function getIconByName(name) {
    var svgIcon = icons[name] || icons.other;
    return svgIcon;
}
function getIconFromExt(ext) {
    ext = ext.toLowerCase();
    var cat = extensionsMap[ext];
    return getIconByName(cat);
}

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __nested_webpack_require_9536__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__nested_webpack_require_9536__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--12-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-file-icon.vue?vue&type=script&lang=ts&


/* harmony default export */ var vue_file_iconvue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    props: ['ext', 'name', 'viewBox'],
    computed: {
        viewBoxComputed: function () {
            if (!this.viewBox && this.icon && this.icon.viewBox) {
                return this.icon.viewBox;
            }
            return this.viewBox ? this.viewBox : '0 0 100 100';
        },
        icon: function () {
            if (this.name) {
                return getIconByName(this.name);
            }
            var svgIcon = getIconFromExt(this.ext);
            return svgIcon;
        },
    },
}));

// CONCATENATED MODULE: ./src/components/vue-file-icon.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_vue_file_iconvue_type_script_lang_ts_ = (vue_file_iconvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/vue-file-icon.vue





/* normalize component */

var component = normalizeComponent(
  components_vue_file_iconvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_file_icon = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"72196104-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-file-preview.vue?vue&type=template&id=89d27d16&
var vue_file_previewvue_type_template_id_89d27d16_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
    'file-preview-wrapper-' + _vm.fileRecord.ext(),
    _vm.fileRecord.isImage() ? 'file-preview-wrapper-image' : 'file-preview-wrapper-other',
    'file-category-' + _vm.fileRecord.icon().category,
    { 'file-is-playing-av': _vm.fileRecord.isPlayingAv },
    { 'is-deletable': _vm.deletable === true },
    { 'is-editable': _vm.editable === true },
    { 'is-edit-input-focused': _vm.isEditInputFocused },
    { 'has-error': _vm.fileRecord.error } ]},[(_vm.fileRecord.isPlayableAudio() || _vm.fileRecord.isPlayableVideo())?_c('div',{ref:"wrapper",staticClass:"file-av-wrapper"},[_c('div',{staticClass:"file-av-action",on:{"click":function($event){return _vm.playAv(_vm.fileRecord)}}},[_c('span',{staticClass:"file-av-stop"},[_c('VueFileIcon',{attrs:{"name":"system-close"}})],1),_c('span',{staticClass:"file-av-play"},[_c('VueFileIcon',{attrs:{"name":"system-file-av-play"}})],1)])]):_vm._e(),_c('span',{staticClass:"file-preview",class:{
      'image-preview': _vm.fileRecord.isImage(),
      'other-preview': !_vm.fileRecord.isImage(),
      'dark-content': _vm.fileRecord.isImage() && _vm.fileRecord.isDarkColor(),
    },style:({
      'background-color': _vm.fileRecord.color(),
    })},[(_vm.fileRecord.error)?_c('span',{staticClass:"file-error-wrapper",on:{"click":function($event){return _vm.dismissError()}}},[_c('span',{staticClass:"file-error-message file-error-message-client"},[_vm._v(" "+_vm._s(_vm.fileRecord.getErrorMessage(_vm.errorText))+" ")])]):_vm._e(),_c('span',{staticClass:"file-preview-overlay"}),(_vm.fileRecord.isImage() || _vm.fileRecord.isPlayableVideo())?_c('span',{staticClass:"thumbnail",staticStyle:{"position":"absolute","top":"0","right":"0","bottom":"0","left":"0","overflow":"hidden"}},[(_vm.hasLinkableUrl)?_c('a',{attrs:{"href":_vm.fileRecord.url(),"target":"_blank","title":_vm.fileRecord.name()}},[_c('img',{staticClass:"file-preview-img",attrs:{"src":_vm.fileRecord.src()}})]):_c('img',{staticClass:"file-preview-img",attrs:{"src":_vm.fileRecord.src()}})]):_vm._e(),_c('span',{staticClass:"file-ext"},[_vm._v(_vm._s(_vm.fileRecord.ext()))]),_c('span',{staticClass:"file-size"},[_vm._v(_vm._s(_vm.fileRecord.size()))]),(_vm.deletable)?_c('span',{staticClass:"file-delete",on:{"click":function($event){return _vm.removeFileRecord(_vm.fileRecord)},"touchstart":function($event){return _vm.filenameClearPressed()},"mousedown":function($event){return _vm.filenameClearPressed()}}},[_c('VueFileIcon',{attrs:{"name":"system-close"}})],1):_vm._e(),_c('span',{staticClass:"file-name",on:{"click":function($event){return _vm.editFileName()}}},[(_vm.editable === true)?_c('input',{ref:"input",staticClass:"file-name-input",attrs:{"disabled":_vm.disabled === true,"type":"text"},domProps:{"value":_vm.fileRecord.name(true)},on:{"focus":function($event){return _vm.editInputFocused()},"blur":function($event){return _vm.editInputBlured()},"change":function($event){return _vm.filenameChanged()},"input":function($event){return _vm.filenameChanged()},"keyup":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.filenameChanged(true)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.filenameChanged(false)}]}}):_vm._e(),(_vm.editable === true)?_c('span',{staticClass:"file-name-edit-icon"},[_c('VueFileIcon',{attrs:{"name":"system-file-name-edit"}})],1):_vm._e(),_c('span',{staticClass:"file-name-text"},[_vm._v(_vm._s(_vm.fileRecord.name(true)))])]),(_vm.fileRecord.dimensions.width && _vm.fileRecord.dimensions.height)?_c('span',{staticClass:"image-dimension"},[_c('span',{staticClass:"image-dimension-width"},[_vm._v(_vm._s(_vm.fileRecord.dimensions.width))]),_c('span',{staticClass:"image-dimension-height"},[_vm._v(_vm._s(_vm.fileRecord.dimensions.height))])]):_vm._e(),(_vm.fileRecord.hasProgress())?_c('span',{staticClass:"file-progress",class:{
        'file-progress-full': _vm.fileRecord.progress() >= 99.9999,
        'file-progress-done': _vm.fileRecord.progress() >= 100,
        'has-file-progress': _vm.fileRecord.progress() > 0,
      }},[_c('span',{staticClass:"file-progress-bar",style:({ width: _vm.fileRecord.progress() + '%' })})]):_vm._e(),_c('span',{staticClass:"file-icon"},[(_vm.hasLinkableUrl)?_c('a',{attrs:{"href":_vm.fileRecord.url(),"target":"_blank","title":_vm.fileRecord.name()}},[_c('VueFileIcon',{attrs:{"ext":_vm.fileRecord.ext()}})],1):_c('VueFileIcon',{attrs:{"ext":_vm.fileRecord.ext()}})],1)])])}
var vue_file_previewvue_type_template_id_89d27d16_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vue-file-preview.vue?vue&type=template&id=89d27d16&

// CONCATENATED MODULE: ./src/lib/drop-handler.ts

function getFilesFromDroppedItems(dataTransfer) {
    return new Promise(function (resolve) {
        if (!includesFolder(dataTransfer)) {
            return resolve(dataTransfer.files);
        }
        var files = [];
        var folderReadQueue = [];
        // tslint:disable-next-line
        for (var i = 0; i < dataTransfer.items.length; i++) {
            var item = dataTransfer.items[i];
            if (item.kind !== 'file') {
                continue;
            }
            var fileSystemEntries = getEntries(item);
            if (fileSystemEntries) {
                folderReadQueue.push(fileSystemEntries);
            }
            else {
                var file = item.getAsFile();
                if (file) {
                    files.push(file);
                }
            }
        }
        Promise.all(folderReadQueue).then(function (filesInFolders) {
            resolve(files.concat.apply(files, __spread(filesInFolders)));
        });
    });
}
function getEntries(entry) {
    // convert DataTransferItem to FileSystemEntry first if necessary
    if (entry.getAsEntry) {
        return getEntries(entry.getAsEntry());
    }
    if (entry.webkitGetAsEntry) {
        return getEntries(entry.webkitGetAsEntry());
    }
    // return if item is from a browser that does not support webkitGetAsEntry
    if (entry.getAsFile) {
        return;
    }
    // Processing directories with more than 100 files:
    // https://github.com/lian-yue/vue-upload-component/commit/9c9d8aafbcef005a2cc598454383ec65205d61ee
    return new Promise(function (resolve) {
        if (entry.isFile) {
            entry.file(function (file) { return resolve([file]); });
            return;
        }
        if (entry.isDirectory) {
            var files_1 = [];
            var entryReader_1 = entry.createReader();
            var readEntries_1 = function () {
                entryReader_1.readEntries(function (entries) {
                    var iterateEntry = function (i) {
                        if (!entries[i] && i === 0) {
                            return resolve(files_1);
                        }
                        if (!entries[i]) {
                            return readEntries_1();
                        }
                        getEntries(entries[i]).then(function (entryFiles) {
                            files_1.push.apply(files_1, __spread(entryFiles));
                            iterateEntry(i + 1);
                        });
                    };
                    iterateEntry(0);
                });
            };
            readEntries_1();
        }
        if (!entry.isFile && !entry.isDirectory) {
            resolve([]);
        }
    });
}
function includesFolder(transfer) {
    var e_1, _a;
    if (!transfer.files.length) {
        return true; // if dropping only folders, no files will exist
    }
    try {
        // Loop through the dropped items and log their data
        for (var _b = __values(transfer.items), _c = _b.next(); !_c.done; _c = _b.next()) {
            var item = _c.value;
            if (item.webkitGetAsEntry != null) {
                var entry = item.webkitGetAsEntry();
                if (entry && entry.isDirectory) {
                    return true;
                }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var files = transfer.files;
    // tslint:disable-next-line
    for (var i = 0; i < files.length; i++) {
        // A folder has no type and has a size that is a multiple of 4096
        if (!files[i].type && files[i].size % 4096 === 0) {
            return true;
        }
    }
    return false;
}

// CONCATENATED MODULE: ./src/lib/utils.ts


var ImageOrientation;
(function (ImageOrientation) {
    ImageOrientation[ImageOrientation["NORMAL"] = 1] = "NORMAL";
    ImageOrientation[ImageOrientation["UPSIDE_DOWN"] = 6] = "UPSIDE_DOWN";
})(ImageOrientation || (ImageOrientation = {}));
var utils_Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.prototype.arrayMove = function (arr, previousIndex, newIndex) {
        // https://github.com/Jexordexan/vue-slicksort/blob/master/src/utils.js
        var array = arr.slice(0);
        if (newIndex >= array.length) {
            var k = newIndex - array.length;
            while (k-- + 1) {
                array.push(undefined);
            }
        }
        array.splice(newIndex, 0, array.splice(previousIndex, 1)[0]);
        return array;
    };
    Utils.prototype.getAverageColor = function (arr) {
        var bytesPerPixel = 4;
        var arrLength = arr.length;
        if (arrLength < bytesPerPixel) {
            return;
        }
        var step = 5;
        var len = arrLength - (arrLength % bytesPerPixel);
        var preparedStep = (step || 1) * bytesPerPixel;
        var redTotal = 0;
        var greenTotal = 0;
        var blueTotal = 0;
        var alphaTotal = 0;
        var count = 0;
        for (var i = 0; i < len; i += preparedStep) {
            var alpha = arr[i + 3];
            var red = arr[i] * alpha;
            var green = arr[i + 1] * alpha;
            var blue = arr[i + 2] * alpha;
            redTotal += red;
            greenTotal += green;
            blueTotal += blue;
            alphaTotal += alpha;
            count++;
        }
        return alphaTotal
            ? [
                Math.round(redTotal / alphaTotal),
                Math.round(greenTotal / alphaTotal),
                Math.round(blueTotal / alphaTotal),
                Math.round(alphaTotal / count),
            ]
            : [0, 0, 0, 0];
    };
    Utils.prototype.createVideoThumbnail = function (video, canvas, thumbnailSize, calculateAverageColor) {
        var _this = this;
        video.setAttribute('crossOrigin', 'anonymous'); // fix cross origin issue
        return new Promise(function (resolve, reject) {
            var loadedmetadata = false;
            var loadeddata = false;
            var tryGetThumbnail = function () {
                if (!(loadedmetadata && loadeddata)) {
                    return;
                }
                var context = canvas.getContext('2d');
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                var color;
                if (calculateAverageColor) {
                    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                    color = _this.getAverageColor(imageData.data);
                }
                var url = canvas.toDataURL();
                resolve({
                    url: url,
                    color: color,
                    width: video.videoWidth,
                    height: video.videoHeight,
                });
            };
            // Load metadata of the video to get video duration and dimensions
            video.addEventListener('loadedmetadata', function () {
                // var video_duration = video.duration;
                canvas.width = thumbnailSize;
                canvas.height = (canvas.width / video.videoWidth) * video.videoHeight;
                video.currentTime = 1; // video time
                loadedmetadata = true;
                tryGetThumbnail();
            });
            video.addEventListener('loadeddata', function () {
                loadeddata = true;
                tryGetThumbnail();
            });
        });
    };
    Utils.prototype.getDataURL = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onload = function (event) {
                if (!(event.target && event.target.result)) {
                    return resolve('');
                }
                resolve(event.target.result);
            };
            reader.readAsDataURL(file);
        });
    };
    Utils.prototype.getImageOrientationFromArrayBuffer = function (buffer) {
        // -2: not jpeg
        // -1: not defined
        var view = new DataView(buffer);
        if (view.getUint16(0, false) !== 0xffd8) {
            return -2;
        }
        var length = view.byteLength;
        var offset = 2;
        while (offset < length) {
            if (view.getUint16(offset + 2, false) <= 8) {
                return -1;
            }
            var marker = view.getUint16(offset, false);
            offset += 2;
            if (marker === 0xffe1) {
                if (view.getUint32((offset += 2), false) !== 0x45786966) {
                    return -1;
                }
                var little = view.getUint16((offset += 6), false) === 0x4949;
                offset += view.getUint32(offset + 4, little);
                var tags = view.getUint16(offset, little);
                offset += 2;
                for (var i = 0; i < tags; i++) {
                    if (view.getUint16(offset + i * 12, little) === 0x0112) {
                        return view.getUint16(offset + i * 12 + 8, little);
                    }
                }
                // tslint:disable-next-line
            }
            else if ((marker & 0xff00) !== 0xff00) {
                break;
            }
            else {
                offset += view.getUint16(offset, false);
            }
        }
        return -1;
    };
    Utils.prototype.getImageOrientation = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            if (!reader.readAsArrayBuffer) {
                return resolve(-3);
            }
            reader.onload = function (event) {
                if (!(event.target && event.target.result)) {
                    return resolve(-3);
                }
                resolve(_this.getImageOrientationFromArrayBuffer(event.target.result));
            };
            // https://stackoverflow.com/questions/3248946/what-is-the-maximum-size-of-jpeg-metadata
            // https://twitter.com/jaffathecake/status/1085443592678752256
            // reader.readAsArrayBuffer(file);
            reader.readAsArrayBuffer(file.slice(0, 65536));
        });
    };
    Utils.prototype.rotateCanvas = function (srcOrientation, canvas, ctx, width, height) {
        // set proper canvas dimensions before transform & export
        if (4 < srcOrientation && srcOrientation < 9) {
            canvas.width = height;
            canvas.height = width;
        }
        else {
            canvas.width = width;
            canvas.height = height;
        }
        // transform context before drawing image
        switch (srcOrientation) {
            case 2:
                ctx.transform(-1, 0, 0, 1, width, 0);
                break;
            case 3:
                ctx.transform(-1, 0, 0, -1, width, height);
                break;
            case 4:
                ctx.transform(1, 0, 0, -1, 0, height);
                break;
            case 5:
                ctx.transform(0, 1, 1, 0, 0, 0);
                break;
            case 6:
                ctx.transform(0, 1, -1, 0, height, 0);
                break;
            case 7:
                ctx.transform(0, -1, -1, 0, height, width);
                break;
            case 8:
                ctx.transform(0, -1, 1, 0, 0, width);
                break;
            default:
                break;
        }
    };
    Utils.prototype.getImageResized = function (image, widthLimit, heightLimit, orientation, calculateAverageColor) {
        var width = image.width;
        var height = image.height;
        var thumbnailSize = widthLimit;
        if (widthLimit && heightLimit) {
            width = widthLimit;
            height = heightLimit;
        }
        else {
            if (width > height) {
                if (width > thumbnailSize) {
                    height *= thumbnailSize / width;
                    width = thumbnailSize;
                }
            }
            else {
                if (height > thumbnailSize) {
                    width *= thumbnailSize / height;
                    height = thumbnailSize;
                }
            }
        }
        width = Math.floor(width);
        height = Math.floor(height);
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        if (!context) {
            return null;
        }
        canvas.width = width;
        canvas.height = height;
        if (orientation !== undefined) {
            this.rotateCanvas(orientation, canvas, context, width, height);
        }
        context.drawImage(image, 0, 0, width, height);
        var avgColor = null;
        try {
            var rgba = void 0;
            if (calculateAverageColor) {
                var imageData = context.getImageData(0, 0, width, height);
                rgba = this.getAverageColor(imageData.data);
            }
            if (rgba) {
                avgColor = rgba;
            }
        }
        catch (e) {
            /* security error, img on diff domain */
        }
        return {
            image: image,
            url: canvas.toDataURL('image/png'),
            color: avgColor,
        };
    };
    Utils.prototype.resizeImageUrl = function (image, url, thumbnailSize, calculateAverageColor) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            image.onload = function () {
                if (!calculateAverageColor) {
                    resolve({
                        image: image,
                        url: url,
                        color: undefined,
                    });
                    return;
                }
                var resized = _this.getImageResized(image, thumbnailSize, undefined, undefined, calculateAverageColor);
                if (resized) {
                    resized.url = url;
                }
                resolve(resized);
            };
            image.onerror = function () {
                reject('Image loading failed: ' + url);
            };
            image.src = url;
        });
    };
    Utils.prototype.resizeImageFile = function (image, file, thumbnailSize, calculateAverageColor) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (file.type.indexOf('image') === -1) {
                reject(new Error('Not an image'));
                return;
            }
            var createObjectURL = (window.URL || window.webkitURL || {}).createObjectURL;
            var revokeObjectURL = (window.URL || window.webkitURL || {}).revokeObjectURL;
            var shouldRevoke = false;
            var orientationPromise = _this.getImageOrientation(file);
            image.onload = function () {
                orientationPromise.then(function (orientation) {
                    var resized = _this.getImageResized(image, thumbnailSize, undefined, orientation, calculateAverageColor);
                    if (shouldRevoke) {
                        revokeObjectURL(image.src);
                    }
                    resolve(resized);
                });
            };
            if (!(file instanceof File)) {
                return reject('Invalid file object. Use url or a valid instance of File class');
            }
            if (createObjectURL && revokeObjectURL) {
                shouldRevoke = true;
                image.src = createObjectURL(file);
                return;
            }
            _this.getDataURL(file).then(function (dataUrl) {
                image.src = dataUrl;
            });
        });
    };
    Utils.prototype.resizeImage = function (thumbnailSize, file, url, calculateAverageColor) {
        var image = new Image();
        image.setAttribute('crossOrigin', 'anonymous');
        return url
            ? this.resizeImageUrl(image, url, thumbnailSize, calculateAverageColor)
            : this.resizeImageFile(image, file, thumbnailSize, calculateAverageColor);
    };
    Utils.prototype.getSizeFormatted = function (bytes) {
        var sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
        if (bytes === 0) {
            return '0 B';
        }
        var i = Math.floor(Math.log(bytes) / Math.log(1024));
        i = parseInt('' + i, 10);
        return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
    };
    Utils.prototype.getSizeParsed = function (size) {
        size = ('' + size).toUpperCase();
        var matches = size.match(/([\d|.]+?)\s*?([A-Z]+)/);
        var sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
        if (!matches) {
            return parseFloat(size);
        }
        var i = sizes.indexOf(matches[2]);
        if (i === -1) {
            return parseFloat(size);
        }
        return parseFloat(matches[1]) * Math.pow(1024, i);
    };
    Utils.prototype.getColorForText = function (text) {
        var getHashCode = function (value) {
            var hash = 0;
            if (value.length === 0) {
                return hash;
            }
            for (var i = 0; i < value.length; i++) {
                // tslint:disable-next-line
                hash = value.charCodeAt(i) + ((hash << 5) - hash);
                // tslint:disable-next-line
                hash = hash & hash; // Convert to 32bit integer
            }
            return hash;
        };
        var intToHSL = function (value) {
            var h = value % 360;
            var s = value % 100;
            var l = 50;
            return 'hsl(' + h + ',' + s + '%,' + l + '%, 0.75)';
        };
        return intToHSL(getHashCode(text.toLowerCase()));
    };
    Utils.prototype.validateType = function (file, accept) {
        var e_1, _a;
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
        // https://gitlab.com/meno/dropzone/blob/master/src/dropzone.js#L2511
        if (!accept) {
            return true;
        } // If there are no accepted mime types, it's OK
        var acceptedFiles = accept.split(',');
        var mimeType = file.type;
        var baseMimeType = mimeType.replace(/\/.*$/, '');
        try {
            for (var acceptedFiles_1 = __values(acceptedFiles), acceptedFiles_1_1 = acceptedFiles_1.next(); !acceptedFiles_1_1.done; acceptedFiles_1_1 = acceptedFiles_1.next()) {
                var validType = acceptedFiles_1_1.value;
                validType = validType.trim();
                if (validType.charAt(0) === '.') {
                    // extension
                    if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
                        return true;
                    }
                }
                else if (/\/\*$/.test(validType)) {
                    // This is something like a image/* mime type
                    if (baseMimeType === validType.replace(/\/.*$/, '')) {
                        return true;
                    }
                }
                else {
                    if (mimeType === validType) {
                        return true;
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (acceptedFiles_1_1 && !acceptedFiles_1_1.done && (_a = acceptedFiles_1.return)) _a.call(acceptedFiles_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
    };
    Utils.prototype.validateSize = function (file, maxSize) {
        if (!maxSize) {
            return true;
        }
        var bytes = this.getSizeParsed(maxSize);
        return file.size <= bytes;
    };
    Utils.prototype.getFilesFromDroppedItems = function (dataTransfer) {
        return getFilesFromDroppedItems(dataTransfer);
    };
    return Utils;
}());
/* harmony default export */ var utils = (new utils_Utils());

// CONCATENATED MODULE: ./src/lib/file-record.ts



var file_record_FileRecord = /** @class */ (function () {
    function FileRecord(data, options) {
        this.urlValue = null;
        this.urlResized = null;
        this.image = {};
        this.isPlayingAv = false;
        this.oldFileName = null;
        this.oldCustomName = null;
        this.upload = { data: null, error: false };
        this.urlValue = null;
        this.urlResized = null;
        this.lastKnownSrc = null;
        this.image = {};
        this.isPlayingAv = false;
        this.oldFileName = null;
        this.oldCustomName = null;
        this.raw = data;
        this.file = data.file instanceof File ? data.file : this.createDummyFile(data);
        this.progressInternal = !isNaN(data.progress) ? data.progress : 0;
        // this.width = FileRecord.defaultWidth;
        // this.height = FileRecord.defaultHeight;
        this.thumbnailSize = options.thumbnailSize || 360;
        this.read = !!options.read;
        this.dimensions = data.dimensions || { width: 0, height: 0 };
        this.dimensions.width = this.dimensions.width || 0;
        this.dimensions.height = this.dimensions.height || 0;
        this.error = data.error || false;
        this.options = options;
        this.maxSize = options.maxSize;
        this.accept = options.accept;
        this.id = Math.random() + ':' + new Date().getTime();
        this.videoThumbnail = data.videoThumbnail;
        this.imageColor = data.imageColor;
        this.customName = data.customName;
        this.calculateAverageColor = options.averageColor !== undefined ? options.averageColor : true;
        this.validate();
    }
    FileRecord.getFromRaw = function (rawFileRecord, options, isSync) {
        if (isSync === void 0) { isSync = false; }
        var fileRecord = new FileRecord(rawFileRecord, options);
        var promise = fileRecord.setUrl(rawFileRecord.url);
        rawFileRecord.progress = fileRecord.progress.bind(fileRecord); // convert it as a function
        rawFileRecord.src = fileRecord.src.bind(fileRecord);
        rawFileRecord.name = fileRecord.name.bind(fileRecord); // convert it as a function
        if (isSync) {
            return fileRecord;
        }
        return promise;
    };
    FileRecord.fromRaw = function (rawFileRecord, options) {
        return FileRecord.getFromRaw(rawFileRecord, options, false);
    };
    FileRecord.fromRawSync = function (rawFileRecord, options) {
        return FileRecord.getFromRaw(rawFileRecord, options, true);
    };
    FileRecord.fromRawArray = function (rawFileRecords, options) {
        var e_1, _a;
        var promises = [];
        try {
            for (var rawFileRecords_1 = __values(rawFileRecords), rawFileRecords_1_1 = rawFileRecords_1.next(); !rawFileRecords_1_1.done; rawFileRecords_1_1 = rawFileRecords_1.next()) {
                var rawFileRecord = rawFileRecords_1_1.value;
                promises.push(FileRecord.fromRaw(rawFileRecord, options));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (rawFileRecords_1_1 && !rawFileRecords_1_1.done && (_a = rawFileRecords_1.return)) _a.call(rawFileRecords_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return Promise.all(promises);
    };
    FileRecord.toRawArray = function (fileRecords) {
        var e_2, _a;
        var rawFileRecords = [];
        try {
            for (var fileRecords_1 = __values(fileRecords), fileRecords_1_1 = fileRecords_1.next(); !fileRecords_1_1.done; fileRecords_1_1 = fileRecords_1.next()) {
                var fileRecord = fileRecords_1_1.value;
                rawFileRecords.push(fileRecord.toRaw());
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (fileRecords_1_1 && !fileRecords_1_1.done && (_a = fileRecords_1.return)) _a.call(fileRecords_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return rawFileRecords;
    };
    FileRecord.readFile = function (fileRecord) {
        return new Promise(function (resolve, reject) {
            if (!fileRecord.read) {
                fileRecord.setUrl(null).then(function () {
                    resolve(fileRecord);
                }, function (err) {
                    // ignore error
                    resolve(fileRecord);
                });
                return;
            }
            utils.getDataURL(fileRecord.file).then(function (dataUrl) {
                fileRecord.setUrl(dataUrl).then(function () {
                    resolve(fileRecord);
                }, reject);
            }, reject);
        });
    };
    FileRecord.readFiles = function (fileRecords) {
        var e_3, _a;
        var promises = [];
        try {
            for (var fileRecords_2 = __values(fileRecords), fileRecords_2_1 = fileRecords_2.next(); !fileRecords_2_1.done; fileRecords_2_1 = fileRecords_2.next()) {
                var fileRecord = fileRecords_2_1.value;
                promises.push(FileRecord.readFile(fileRecord));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (fileRecords_2_1 && !fileRecords_2_1.done && (_a = fileRecords_2.return)) _a.call(fileRecords_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return Promise.all(promises);
    };
    // populate(data, options = {}) {}
    FileRecord.prototype.createDummyFile = function (data) {
        var file = {};
        file.lastModified = data.lastModified;
        var d = new Date();
        if (file.lastModified) {
            d.setTime(file.lastModified);
        }
        file.lastModifiedDate = d;
        file.name = typeof data.name === 'function' ? data.name() : data.name;
        file.size = data.size;
        file.type = data.type;
        return file;
    };
    FileRecord.prototype.hasProgress = function () {
        return !isNaN(this.progressInternal); // && this._progress <= 100;
    };
    FileRecord.prototype.progress = function (value) {
        if (value !== undefined) {
            this.progressInternal = value;
            return;
        }
        return this.progressInternal || 0;
    };
    FileRecord.prototype.url = function (value) {
        if (value !== undefined) {
            return this.setUrl(value);
        }
        return this.urlValue || undefined;
    };
    FileRecord.prototype.src = function () {
        if (this.isImage()) {
            return this.urlResized || this.urlValue || this.file.url;
        }
        if (this.isPlayableVideo()) {
            return this.videoThumbnail || '';
        }
        return '';
    };
    FileRecord.prototype.size = function () {
        if (!this.file) {
            return '';
        }
        return utils.getSizeFormatted(this.file.size);
    };
    FileRecord.prototype.ext = function () {
        if (this.file && this.file.name.indexOf('.') !== -1) {
            return this.file.name.split('.').pop();
        }
        return '?';
        // return this.file.type.split('/').shift();
    };
    FileRecord.prototype.name = function (withoutExt) {
        var ext = this.ext();
        if (this.customName) {
            return this.customName + (withoutExt ? '' : ext !== '?' ? '.' + ext : '');
        }
        var name = this.file && this.file.name;
        if (withoutExt) {
            if (ext !== '?') {
                return name.substr(0, name.length - (ext.length + 1));
            }
        }
        return name;
    };
    FileRecord.prototype.isDarkColor = function () {
        if (this.imageColor) {
            var rgb = this.imageColor;
            var darkPoint = 20;
            return rgb[0] <= darkPoint && rgb[1] <= darkPoint && rgb[2] <= darkPoint;
        }
        return false;
    };
    FileRecord.prototype.color = function () {
        if (this.imageColor) {
            var rgb = this.imageColor;
            return 'rgb(' + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + ')';
        }
        if (this.isImage()) {
            return 'transparent';
        }
        var ext = this.ext();
        var svgIcon = this.icon();
        // var svgIcon = getIconFromExt(ext);
        if (svgIcon.color) {
            return svgIcon.color;
        }
        return utils.getColorForText(ext);
    };
    FileRecord.prototype.isImage = function () {
        return this.file && this.file.type.indexOf('image') !== -1;
    };
    FileRecord.prototype.isVideo = function () {
        return this.file && this.file.type.indexOf('video') !== -1;
    };
    FileRecord.prototype.isPlayableVideo = function () {
        return this.icon().category === 'video-playable';
    };
    FileRecord.prototype.isAudio = function () {
        return this.file && this.file.type.indexOf('audio') !== -1;
    };
    FileRecord.prototype.isPlayableAudio = function () {
        return this.icon().category === 'audio-playable';
    };
    FileRecord.prototype.isText = function () {
        return this.file && this.file.type.indexOf('text') !== -1;
    };
    FileRecord.prototype.setUrl = function (url) {
        var _this = this;
        this.urlValue = url;
        return new Promise(function (resolve, reject) {
            if (_this.isImage()) {
                _this.resizeImage().then(function () {
                    resolve(_this);
                }, function (err) {
                    resolve(_this);
                });
                return;
            }
            resolve(_this);
        });
    };
    FileRecord.prototype.imageResized = function (resized) {
        if (!resized) {
            return;
        }
        this.urlResized = resized.url;
        this.image = resized.image;
        if (resized.image && resized.image.width && resized.image.height) {
            this.dimensions.width = resized.image.width;
            this.dimensions.height = resized.image.height;
        }
        this.lastKnownSrc = this.urlResized;
        this.imageColor = resized.color;
    };
    FileRecord.prototype.resizeImage = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            utils
                .resizeImage(_this.thumbnailSize, _this.file, _this.urlValue, _this.calculateAverageColor)
                .then(function (resized) {
                _this.imageResized(resized);
                resolve(_this);
            })
                .catch(reject);
        });
    };
    FileRecord.prototype.icon = function () {
        var ext = this.ext();
        var svgIcon = getIconFromExt(ext);
        return svgIcon;
    };
    FileRecord.prototype.getErrorMessage = function (errorText) {
        var error = this.error;
        if (!error) {
            return '';
        }
        errorText = errorText || {};
        errorText = {
            common: errorText.common || 'Invalid file.',
            type: errorText.type || 'Invalid file type.',
            size: errorText.size || 'Files should not exceed ' + this.maxSize + ' in size',
        };
        if (error.type) {
            return errorText.type;
        }
        else if (error.size) {
            return errorText.size;
        }
        else if (error.upload) {
            return this.upload.error ? this.upload.error : error.upload;
        }
        return errorText.common;
    };
    FileRecord.prototype.toRaw = function () {
        var _this = this;
        var raw = this.raw || {};
        // raw.url = this.urlValue;
        raw.url = this.url.bind(this);
        raw.urlResized = this.urlResized;
        raw.src = this.src.bind(this);
        raw.name = this.name.bind(this);
        raw.lastModified = this.file.lastModified;
        raw.sizeText = this.size();
        raw.size = this.file.size;
        raw.type = this.file.type;
        raw.ext = this.ext();
        raw.color = this.color();
        raw.file = this.file;
        raw.progress = this.progress.bind(this); // pass it as a function
        raw.upload = this.upload;
        if (!('error' in raw)) {
            Object.defineProperty(raw, 'error', {
                get: function () {
                    return _this.error;
                },
            });
        }
        raw.dimensions = this.dimensions;
        return raw;
    };
    FileRecord.prototype.validate = function () {
        var validType = utils.validateType(this.file, this.accept);
        var validSize = utils.validateSize(this.file, this.maxSize);
        if (!validType || !validSize) {
            this.error = {
                type: !validType,
                size: !validSize,
            };
        }
        else {
            this.error = false;
        }
    };
    return FileRecord;
}());
/* harmony default export */ var file_record = (file_record_FileRecord);

// CONCATENATED MODULE: ./src/components/vue-file-preview-mixin.ts




/* harmony default export */ var vue_file_preview_mixin = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    props: ['value', 'deletable', 'editable', 'linkable', 'errorText', 'disabled', 'thumbnailSize', 'averageColor'],
    components: {
        VueFileIcon: vue_file_icon,
    },
    data: function () {
        return {
            isEditInputFocused: false,
            isEditCancelable: true,
            fileRecord: {},
        };
    },
    computed: {
        hasLinkableUrl: function () {
            if (!this.linkable) {
                return false;
            }
            return !!this.fileRecord.url() && !this.fileRecord.isPlayableVideo() && !this.fileRecord.isPlayableAudio();
        },
    },
    methods: {
        updateFileRecord: function () {
            var _this = this;
            if (this.value instanceof file_record) {
                this.fileRecord = this.value;
                return;
            }
            file_record.fromRaw(this.value, {
                thumbnailSize: this.thumbnailSize,
                averageColor: this.averageColor,
            }).then(function (fileRecord) {
                _this.fileRecord = fileRecord;
            });
            this.fileRecord = file_record.fromRawSync(this.value, {
                thumbnailSize: this.thumbnailSize,
                averageColor: this.averageColor,
            });
        },
        createThumbnail: function (fileRecord, video) {
            if (fileRecord.videoThumbnail) {
                video.poster = fileRecord.src();
                return;
            }
            var canvas = document.createElement('canvas');
            utils
                .createVideoThumbnail(video, canvas, this.fileRecord.thumbnailSize, this.averageColor !== false)
                .then(function (thumbnail) {
                fileRecord.imageColor = thumbnail.color;
                fileRecord.videoThumbnail = thumbnail.url;
                fileRecord.dimensions.width = thumbnail.width;
                fileRecord.dimensions.height = thumbnail.height;
                video.poster = fileRecord.src();
            });
        },
        playAv: function (fileRecord) {
            if (fileRecord.stopAv) {
                fileRecord.stopAv();
                return;
            }
            var createObjectURL = (window.URL || window.webkitURL || {}).createObjectURL;
            var revokeObjectURL = (window.URL || window.webkitURL || {}).revokeObjectURL;
            var wrapper = this.$refs.wrapper;
            var player = document.createElement(fileRecord.isAudio() ? 'audio' : 'video');
            if (player instanceof HTMLVideoElement && fileRecord.isPlayableVideo()) {
                this.createThumbnail(fileRecord, player);
            }
            player.controls = true;
            // player.style.width = this.prvWidth + 'px';
            wrapper.appendChild(player);
            var url = fileRecord.url() || createObjectURL(fileRecord.file);
            player.src = url;
            player.play();
            fileRecord.isPlayingAv = true;
            fileRecord.stopAv = function () {
                // player.src = null;
                player.src = '';
                wrapper.removeChild(player);
                revokeObjectURL(url);
                fileRecord.isPlayingAv = false;
                fileRecord.stopAv = null;
            };
        },
        removeFileRecord: function (fileRecord) {
            if (this.clearFilename()) {
                return;
            }
            if (this.disabled === true) {
                return;
            }
            this.$emit('remove', fileRecord);
        },
        editFileName: function () {
            if (this.editable !== true) {
                return;
            }
            if (!this.$refs.input) {
                return;
            }
            this.$refs.input.focus();
        },
        editInputFocused: function () {
            this.isEditInputFocused = true;
            this.isEditCancelable = true;
        },
        editInputBlured: function () {
            var _this = this;
            this.fileRecord.oldFileName = this.fileRecord.name();
            var oldValue = this.fileRecord.name(true);
            var value = this.$refs.input.value;
            this.fileRecord.customName = value;
            var newValue = this.fileRecord.name(true);
            if (newValue !== oldValue) {
                this.fileRecord.oldCustomName = oldValue;
                this.$emit('rename', this.fileRecord);
            }
            var timeout = 100;
            setTimeout(function () {
                _this.$nextTick(function () {
                    if (!_this.isEditCancelable) {
                        return;
                    }
                    _this.isEditInputFocused = false;
                });
            }, timeout);
        },
        filenameChanged: function (completed) {
            if (completed) {
                this.$refs.input.blur(); // @see editInputBlured method
            }
            if (completed === false) {
                this.clearFilename();
            }
        },
        filenameClearPressed: function () {
            if (!(this.editable === true && this.isEditInputFocused)) {
                return;
            }
            this.isEditCancelable = false;
        },
        clearFilename: function () {
            if (!(this.editable === true && this.isEditInputFocused)) {
                return false;
            }
            this.$refs.input.value = '';
            this.isEditCancelable = true;
            this.editInputBlured();
            return true;
        },
        dismissError: function () {
            if (this.fileRecord.error && (this.fileRecord.error.size || this.fileRecord.error.type)) {
                return;
            }
            this.fileRecord.error = false;
        },
    },
    created: function () {
        this.updateFileRecord();
    },
    watch: {
        value: function () {
            this.updateFileRecord();
        },
    },
}));

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--12-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-file-preview.vue?vue&type=script&lang=ts&


/* harmony default export */ var vue_file_previewvue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    mixins: [vue_file_preview_mixin],
}));

// CONCATENATED MODULE: ./src/components/vue-file-preview.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_vue_file_previewvue_type_script_lang_ts_ = (vue_file_previewvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/vue-file-preview.vue





/* normalize component */

var vue_file_preview_component = normalizeComponent(
  components_vue_file_previewvue_type_script_lang_ts_,
  vue_file_previewvue_type_template_id_89d27d16_render,
  vue_file_previewvue_type_template_id_89d27d16_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_file_preview = (vue_file_preview_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"72196104-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-file-list.vue?vue&type=template&id=5ef04e06&
var vue_file_listvue_type_template_id_5ef04e06_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default")],2)}
var vue_file_listvue_type_template_id_5ef04e06_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vue-file-list.vue?vue&type=template&id=5ef04e06&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--12-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-file-list.vue?vue&type=script&lang=ts&

/* harmony default export */ var vue_file_listvue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    props: ['value', 'axis', 'appendTo'],
}));

// CONCATENATED MODULE: ./src/components/vue-file-list.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_vue_file_listvue_type_script_lang_ts_ = (vue_file_listvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/vue-file-list.vue





/* normalize component */

var vue_file_list_component = normalizeComponent(
  components_vue_file_listvue_type_script_lang_ts_,
  vue_file_listvue_type_template_id_5ef04e06_render,
  vue_file_listvue_type_template_id_5ef04e06_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_file_list = (vue_file_list_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"72196104-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-file-list-item.vue?vue&type=template&id=00f7ef53&
var vue_file_list_itemvue_type_template_id_00f7ef53_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default")],2)}
var vue_file_list_itemvue_type_template_id_00f7ef53_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vue-file-list-item.vue?vue&type=template&id=00f7ef53&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--12-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-file-list-item.vue?vue&type=script&lang=ts&

/* harmony default export */ var vue_file_list_itemvue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    props: ['index'],
}));

// CONCATENATED MODULE: ./src/components/vue-file-list-item.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_vue_file_list_itemvue_type_script_lang_ts_ = (vue_file_list_itemvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/vue-file-list-item.vue





/* normalize component */

var vue_file_list_item_component = normalizeComponent(
  components_vue_file_list_itemvue_type_script_lang_ts_,
  vue_file_list_itemvue_type_template_id_00f7ef53_render,
  vue_file_list_itemvue_type_template_id_00f7ef53_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_file_list_item = (vue_file_list_item_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"72196104-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-file-agent.vue?vue&type=template&id=4fc1199c&
var vue_file_agentvue_type_template_id_4fc1199c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
    'is-sortable-' + (_vm.isSortable ? 'enabled' : 'disabled'),
    {
      'is-sortable-hold': _vm.sortable === 'hold',
      'is-sortable-handle': _vm.sortable === 'handle',
      'is-sortable-immediately': _vm.sortable === true,
      'is-sorting': _vm.isSorting,
      'is-sorting-active': _vm.isSortingActive,
      'is-drag-over': _vm.isDragging,
      'is-disabled': _vm.disabled === true,
      'is-readonly': _vm.readonly === true,
      'is-drag-valid': !(_vm.disabled === true || _vm.readonly === true || (_vm.hasMultiple && !_vm.canAddMore)),
    },
    'theme-' + _vm.theme ],attrs:{"id":'vfa-' + _vm.uniqueId},on:{"dragover":_vm.dragOver,"dragenter":_vm.dragEnter,"dragleave":_vm.dragLeave,"drop":_vm.drop}},[_vm._t("before-outer"),_c('div',{staticClass:"grid-block-wrapper vue-file-agent file-input-wrapper",class:{
      'is-compact': !!_vm.compact,
      'is-single': !_vm.hasMultiple,
      'has-multiple': _vm.hasMultiple,
      'no-meta': _vm.meta === false,
    }},[_vm._t("before-inner"),_c('canvas',{ref:"thumbnailCanvas",staticStyle:{"position":"fixed","visibility":"hidden","z-index":"-3"}}),(_vm.overallProgress)?_c('div',{staticClass:"overall-progress",class:{ 'overall-progress-full': _vm.overallProgress >= 100 }},[_c('div',{staticClass:"overall-progress-bar",style:({ width: _vm.overallProgress + '%' })}),_c('div',{staticClass:"overall-progress-left",style:({ width: 100 - _vm.overallProgress + '%' })})]):_vm._e(),_c(_vm.isSortable ? 'vfa-sortable-list' : 'VueFileList',{tag:"component",attrs:{"axis":_vm.theme == 'list' ? 'y' : 'xy',"appendTo":'#vfa-' + _vm.uniqueId + ' .vue-file-agent',"transitionDuration":_vm.transitionDuration,"pressDelay":_vm.sortable === 'hold' ? 200 : 0,"useDragHandle":_vm.sortable === 'handle',"helperClass":'active-sorting-item'},on:{"sort-start":function($event){return _vm.sortStart()},"sort-end":function($event){return _vm.sortEnd($event)}},model:{value:(_vm.fileRecords),callback:function ($$v) {_vm.fileRecords=$$v},expression:"fileRecords"}},[_c('transition-group',{attrs:{"name":"grid-box","tag":"div"}},[_vm._l((_vm.fileRecords),function(fileRecord,index){return _c(_vm.isSortable ? 'vfa-sortable-item' : 'VueFileListItem',{key:fileRecord.id,tag:"component",staticClass:"file-preview-wrapper grid-box-item grid-block",attrs:{"index":index}},[(_vm.sortable === 'handle')?_c('span',{directives:[{name:"vfa-sortable-handle",rawName:"v-vfa-sortable-handle"}],staticClass:"file-sortable-handle"},[_vm._t("sortable-handle",[_c('VueFileIcon',{attrs:{"name":"system-sortable-handle"}})])],2):_vm._e(),_vm._t("file-preview",[_c('VueFilePreview',{attrs:{"averageColor":_vm.averageColor,"value":fileRecord,"deletable":_vm.isDeletable,"editable":_vm.editable === true,"linkable":_vm.linkable === true,"errorText":_vm.errorText,"disabled":_vm.disabled,"thumbnailSize":_vm.thumbnailSize},on:{"remove":function($event){return _vm.removeFileRecord($event)},"rename":function($event){return _vm.filenameChanged($event)}}})],{"fileRecord":fileRecord,"fileData":fileRecord,"index":index})],2)}),(_vm.canAddMore && _vm.readonly !== true)?[_vm._t("file-preview-new",[_c('div',{key:"new",staticClass:"file-preview-wrapper grid-box-item grid-block file-preview-new"},[_c('span',{staticClass:"file-preview"},[_c('span',{staticStyle:{"position":"absolute","top":"0","right":"0","bottom":"0","left":"0"}},[_c('VueFileIcon',{attrs:{"name":"system-file-preview-new"}}),_c('span',{staticClass:"help-text"},[_vm._v(_vm._s(_vm.helpTextComputed))])],1)])])])]:_vm._e()],2)],1),(_vm.readonly !== true)?_c('input',{ref:"fileInput",staticClass:"file-input",attrs:{"title":"","disabled":_vm.disabled === true || (_vm.hasMultiple && !_vm.canAddMore),"type":"file","multiple":_vm.hasMultiple,"accept":_vm.accept || '*',"capture":_vm.capture || undefined},on:{"change":_vm.filesChanged}}):_vm._e(),_vm._t("after-inner")],2),_vm._t("after-outer")],2)}
var vue_file_agentvue_type_template_id_4fc1199c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/vue-file-agent.vue?vue&type=template&id=4fc1199c&

// CONCATENATED MODULE: ./src/lib/ajax-request.ts
/* inspired by axios */
var AjaxRequest = /** @class */ (function () {
    function AjaxRequest() {
    }
    AjaxRequest.prototype.createError = function (message, code, request, response) {
        var error = new Error(message);
        error.error = true;
        if (code) {
            error.code = code;
        }
        error.request = request;
        error.response = response;
        return error;
    };
    AjaxRequest.prototype.settle = function (resolve, reject, response) {
        var validateStatus = function (status) {
            return status >= 200 && status < 300;
        };
        // Note: status is not exposed by XDomainRequest
        if (!response.status || !validateStatus || validateStatus(response.status)) {
            resolve(response);
        }
        else {
            reject(this.createError('Request failed with status code ' + response.status, null, response.request, response));
        }
    };
    AjaxRequest.prototype.request = function (method, url, formData, configureFn) {
        var _this = this;
        if (formData === void 0) { formData = null; }
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line
            var request = new XMLHttpRequest();
            var loadEvent = 'onreadystatechange';
            request.open(method, url, true);
            // Listen for ready state
            request[loadEvent] = function () {
                if (!request || request.readyState !== 4) {
                    return;
                }
                // The request errored out and we didn't get a response, this will be
                // handled by onerror instead
                // With one exception: request that using file: protocol, most browsers
                // will return status as 0 even though it's a successful request
                if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                    return;
                }
                // Prepare the response
                var responseHeaders = request.getAllResponseHeaders();
                var responseData = request.responseText;
                var contentType = request.getResponseHeader('Content-Type');
                if (contentType && contentType.indexOf('application/json') !== -1) {
                    responseData = JSON.parse(responseData);
                }
                else {
                    try {
                        responseData = JSON.parse(responseData);
                    }
                    catch (e) {
                        /* ignore, possibly non json response */
                    }
                }
                var response = {
                    data: responseData,
                    // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
                    status: request.status === 1223 ? 204 : request.status,
                    statusText: request.status === 1223 ? 'No Content' : request.statusText,
                    headers: responseHeaders,
                    request: request,
                };
                _this.settle(resolve, reject, response);
                // Clean up request
                request = null;
            };
            // Handle browser request cancellation (as opposed to a manual cancellation)
            request.onabort = function () {
                if (!request) {
                    return;
                }
                reject(_this.createError('Request aborted', 'ECONNABORTED', request));
                // Clean up request
                request = null;
            };
            // Handle low level network errors
            request.onerror = function () {
                // Real errors are hidden from us by the browser
                // onerror should only fire if it's a network error
                reject(_this.createError('Network Error', null, request));
                // Clean up request
                request = null;
            };
            // Handle timeout
            request.ontimeout = function () {
                reject(_this.createError('timeout exceeded', 'ECONNABORTED', request));
                // Clean up request
                request = null;
            };
            // // Handle progress if needed
            // if (typeof config.onDownloadProgress === 'function') {
            //   request.addEventListener('progress', config.onDownloadProgress);
            // }
            // Not all browsers support upload events
            // if (typeof progressCallback === 'function' && request.upload) {
            //   request.upload.addEventListener('progress', progressCallback);
            // }
            if (typeof configureFn === 'function') {
                configureFn(request);
            }
            request.send(formData);
        });
    };
    AjaxRequest.prototype.post = function (url, formData, configureFn) {
        return this.request('POST', url, formData, configureFn);
    };
    AjaxRequest.prototype.delete = function (url, formData, configureFn) {
        return this.request('DELETE', url, formData, configureFn);
    };
    AjaxRequest.prototype.put = function (url, formData, configureFn) {
        return this.request('PUT', url, formData, configureFn);
    };
    return AjaxRequest;
}());
/* harmony default export */ var ajax_request = (new AjaxRequest());

// CONCATENATED MODULE: ./src/lib/upload-helper.ts


var upload_helper_UploadHelper = /** @class */ (function () {
    function UploadHelper() {
    }
    // useAxios(axios){
    //   this.axios = axios;
    // }
    UploadHelper.prototype.addHeaders = function (xhr, headers) {
        xhr.setRequestHeader('Accept', 'application/json');
        if (headers) {
            for (var key in headers) {
                if (headers.hasOwnProperty(key)) {
                    xhr.setRequestHeader(key, headers[key]);
                }
            }
        }
        return xhr;
    };
    UploadHelper.prototype.doUpload = function (url, headers, formData, progressCallback, configureFn) {
        var _this = this;
        return ajax_request.post(url, formData, function (xhr) {
            _this.addHeaders(xhr, headers);
            xhr.upload.addEventListener('progress', progressCallback, false);
            if (typeof configureFn === 'function') {
                configureFn(xhr);
            }
        });
    };
    UploadHelper.prototype.doDeleteUpload = function (url, headers, uploadData, configureFn) {
        var _this = this;
        if (typeof uploadData !== 'string') {
            uploadData = JSON.stringify(uploadData);
        }
        return ajax_request.delete(url, uploadData, function (xhr) {
            xhr.setRequestHeader('Content-Type', 'application/json');
            _this.addHeaders(xhr, headers);
            if (typeof configureFn === 'function') {
                configureFn(xhr);
            }
        });
    };
    UploadHelper.prototype.doUpdateUpload = function (url, headers, uploadData, configureFn) {
        var _this = this;
        if (typeof uploadData !== 'string') {
            uploadData = JSON.stringify(uploadData);
        }
        return ajax_request.put(url, uploadData, function (xhr) {
            xhr.setRequestHeader('Content-Type', 'application/json');
            _this.addHeaders(xhr, headers);
            if (typeof configureFn === 'function') {
                configureFn(xhr);
            }
        });
    };
    // doUploadAxios(axios, formData, progressCallback){
    //   return axios.post('/upload', formData, {
    //     onUploadProgress: progressCallback,
    //   });
    // }
    // doDeleteUploadAxios(axios, data, configureFn){
    //   return axios.delete('/upload', data, {
    //   });
    // }
    UploadHelper.prototype.prepareUploadError = function (fileRecord, err, timeout) {
        var errorText = err.message;
        if (err.response && err.response.data) {
            try {
                var errorMsg = err.response.data.error || JSON.parse(err.response.data).error;
                errorText = errorMsg;
            }
            catch (e) {
                // ignore
            }
        }
        if (!fileRecord.error) {
            fileRecord.error = {};
        }
        fileRecord.error.upload = errorText;
        fileRecord.upload.data = undefined;
        fileRecord.upload.error = errorText;
        if (timeout) {
            setTimeout(function () {
                if (!fileRecord.error) {
                    fileRecord.error = {};
                }
                fileRecord.error.upload = false;
                if (!fileRecord.error.size && !fileRecord.error.type) {
                    fileRecord.error = false;
                }
            }, timeout);
        }
    };
    UploadHelper.prototype.upload = function (url, headers, fileRecords, createFormData, progressFn, configureFn) {
        var e_1, _a;
        var _this = this;
        var updateOverallProgress = function () {
            /* no op */
        };
        if (progressFn) {
            updateOverallProgress = function () {
                var e_2, _a;
                var prgTotal = 0;
                try {
                    for (var fileRecords_2 = __values(fileRecords), fileRecords_2_1 = fileRecords_2.next(); !fileRecords_2_1.done; fileRecords_2_1 = fileRecords_2.next()) {
                        var fileRecord = fileRecords_2_1.value;
                        prgTotal += fileRecord.progress();
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (fileRecords_2_1 && !fileRecords_2_1.done && (_a = fileRecords_2.return)) _a.call(fileRecords_2);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                progressFn(prgTotal / fileRecords.length);
            };
        }
        var promises = [];
        var failedUploadsCount = 0;
        var _loop_1 = function (fileRecord) {
            var formData = void 0;
            if (typeof createFormData === 'function') {
                formData = createFormData(fileRecord);
            }
            else {
                formData = new FormData();
                formData.append('file', fileRecord.file);
                formData.append('filename', fileRecord.name());
            }
            // ((fileRecord) => {
            var promise = this_1.doUpload(url, headers, formData, function (progressEvent) {
                var percentCompleted = (progressEvent.loaded * 100) / progressEvent.total;
                // do not complete until promise resolved
                fileRecord.progress(percentCompleted >= 100 ? 99.9999 : percentCompleted);
                updateOverallProgress();
            }, function (xhr) {
                fileRecord.xhr = xhr;
                if (typeof configureFn === 'function') {
                    configureFn(xhr);
                }
            });
            promises.push(new Promise(function (resolve, reject) {
                promise.then(function (response) {
                    delete fileRecord.xhr;
                    fileRecord.upload.data = response.data;
                    fileRecord.upload.error = false;
                    fileRecord.progress(100);
                    if (fileRecord.xhrQueue) {
                        fileRecord.xhrQueue();
                        delete fileRecord.xhrQueue;
                    }
                    resolve(response);
                } /* */, function (err) {
                    _this.prepareUploadError(fileRecord, err);
                    resolve(err);
                    failedUploadsCount++;
                } /* */);
            }));
        };
        var this_1 = this;
        try {
            for (var fileRecords_1 = __values(fileRecords), fileRecords_1_1 = fileRecords_1.next(); !fileRecords_1_1.done; fileRecords_1_1 = fileRecords_1.next()) {
                var fileRecord = fileRecords_1_1.value;
                _loop_1(fileRecord);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (fileRecords_1_1 && !fileRecords_1_1.done && (_a = fileRecords_1.return)) _a.call(fileRecords_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // return Promise.all(promises);
        return new Promise(function (resolve, reject) {
            Promise.all(promises).then(function (responses) {
                if (failedUploadsCount === promises.length) {
                    // all uploads failed
                    reject(responses);
                    return;
                }
                resolve(responses);
            }, reject);
        });
    };
    UploadHelper.prototype.deleteUpload = function (url, headers, fileRecord, uploadData, configureFn) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (fileRecord.xhr) {
                fileRecord.xhr.abort();
            }
            if (uploadData === undefined) {
                uploadData = fileRecord.upload.data;
            }
            if (uploadData) {
                _this.doDeleteUpload(url, headers, uploadData, function (xhr) {
                    if (typeof configureFn === 'function') {
                        configureFn(xhr);
                    }
                }).then(function (result) {
                    resolve(result);
                }, function (err) {
                    _this.prepareUploadError(fileRecord, err);
                    reject(err);
                });
            }
        });
    };
    UploadHelper.prototype.updateUpload = function (url, headers, fileRecord, uploadData, configureFn) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (fileRecord.xhr) {
                // probably updated while being uploaded.
                fileRecord.xhrQueue = function () {
                    _this.updateUpload(url, headers, fileRecord, uploadData);
                };
                return resolve();
            }
            if (uploadData === undefined) {
                uploadData = fileRecord.upload.data || {};
                uploadData.old_filename = fileRecord.oldFileName;
                uploadData.filename = fileRecord.name();
            }
            if (uploadData) {
                _this.doUpdateUpload(url, headers, uploadData, function (xhr) {
                    if (typeof configureFn === 'function') {
                        configureFn(xhr);
                    }
                }).then(function (response) {
                    fileRecord.upload.data = response.data;
                    fileRecord.upload.error = false;
                    resolve(response);
                }, function (err) {
                    _this.prepareUploadError(fileRecord, err);
                    reject(err);
                });
            }
        });
    };
    UploadHelper.prototype.doTusUpload = function (tus, url, fileRecord, headers, progressCallback, tusOptionsFn) {
        var tusOptions = tusOptionsFn ? tusOptionsFn(fileRecord) : {};
        return new Promise(function (resolve, reject) {
            if (!tus) {
                return reject(new Error('tus required. Please install tus-js-client'));
            }
            // https://github.com/tus/tus-js-client
            // Create a new tus upload
            var file = fileRecord.file;
            var upload = new tus.Upload(file, {
                endpoint: url,
                headers: headers,
                retryDelays: tusOptions.retryDelays ? tusOptions.retryDelays : [0, 3000, 5000, 10000, 20000],
                metadata: tusOptions.metadata
                    ? tusOptions.metadata
                    : {
                        filename: file.name,
                        filetype: file.type,
                    },
                onError: function (error) {
                    reject(error);
                    // console.log("Failed because: " + error)
                },
                onProgress: function (bytesUploaded, bytesTotal) {
                    var event = { loaded: bytesUploaded, total: bytesTotal };
                    progressCallback(event);
                },
                onSuccess: function () {
                    resolve(upload);
                },
            });
            fileRecord.tusUpload = upload;
            // Start the upload
            upload.start();
        });
    };
    UploadHelper.prototype.tusUpload = function (tus, url, headers, fileRecords, progressFn, tusOptionsFn) {
        var e_3, _a;
        var _this = this;
        var updateOverallProgress = function () {
            /* no op */
        };
        if (progressFn) {
            updateOverallProgress = function () {
                var e_4, _a;
                var prgTotal = 0;
                try {
                    for (var fileRecords_4 = __values(fileRecords), fileRecords_4_1 = fileRecords_4.next(); !fileRecords_4_1.done; fileRecords_4_1 = fileRecords_4.next()) {
                        var fileRecord = fileRecords_4_1.value;
                        prgTotal += fileRecord.progress();
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (fileRecords_4_1 && !fileRecords_4_1.done && (_a = fileRecords_4.return)) _a.call(fileRecords_4);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                progressFn(prgTotal / fileRecords.length);
            };
        }
        var promises = [];
        var _loop_2 = function (fileRecord) {
            var promise = this_2.doTusUpload(tus, url, fileRecord, headers, function (progressEvent) {
                var percentCompleted = (progressEvent.loaded * 100) / progressEvent.total;
                // do not complete until promise resolved
                fileRecord.progress(percentCompleted >= 100 ? 99.9999 : percentCompleted);
                updateOverallProgress();
            }, tusOptionsFn);
            promise.then(function (response) {
                // delete fileRecord.tusUpload;
                fileRecord.progress(100);
            }, function (err) {
                _this.prepareUploadError(fileRecord, err);
            });
            promises.push(promise);
        };
        var this_2 = this;
        try {
            for (var fileRecords_3 = __values(fileRecords), fileRecords_3_1 = fileRecords_3.next(); !fileRecords_3_1.done; fileRecords_3_1 = fileRecords_3.next()) {
                var fileRecord = fileRecords_3_1.value;
                _loop_2(fileRecord);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (fileRecords_3_1 && !fileRecords_3_1.done && (_a = fileRecords_3.return)) _a.call(fileRecords_3);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return Promise.all(promises);
    };
    UploadHelper.prototype.tusDeleteUpload = function (tus, url, headers, fileRecord) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!tus) {
                return reject('tus required');
            }
            if (!fileRecord.tusUpload) {
                return resolve();
            }
            // const shouldTerminate = true;
            var abort = function (shouldTerminate) {
                return new Promise(function (res, rej) {
                    fileRecord.tusUpload.abort(shouldTerminate, function (err) {
                        if (err) {
                            _this.prepareUploadError(fileRecord, err);
                            rej(err);
                            return;
                        }
                        res();
                    });
                });
            };
            abort(false).then(function () {
                setTimeout(function () {
                    abort(true).then(resolve, reject);
                }, 1000);
            });
        });
    };
    return UploadHelper;
}());
/* harmony default export */ var upload_helper = (new upload_helper_UploadHelper());

// CONCATENATED MODULE: ./src/lib/plugins.ts
/* harmony default export */ var plugins = ({
    tus: null,
});

// CONCATENATED MODULE: ./src/components/vue-file-agent-mixin.ts










// tslint:disable-next-line
var dragCounter = 0;
/* harmony default export */ var vue_file_agent_mixin = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    props: [
        'accept',
        'auto',
        'averageColor',
        'capture',
        'compact',
        'deletable',
        'disabled',
        'editable',
        'errorText',
        'helpText',
        'linkable',
        'maxFiles',
        'maxSize',
        'meta',
        'multiple',
        'progress',
        'read',
        'readonly',
        'resumable',
        'sortable',
        'theme',
        'thumbnailSize',
        'uploadConfig',
        'uploadHeaders',
        'uploadUrl',
        'uploadWithCredentials',
        'value',
    ],
    components: {
        VueFileIcon: vue_file_icon,
        VueFilePreview: vue_file_preview,
        VueFileList: vue_file_list,
        VueFileListItem: vue_file_list_item,
    },
    directives: {
        // https://github.com/Jexordexan/vue-slicksort/blob/master/src/HandleDirective.js
        vfaSortableHandle: {
            bind: function (el) {
                el.sortableHandle = true;
            },
        },
    },
    data: function () {
        return {
            fileRecords: [],
            rawFileRecords: [],
            isDragging: false,
            isSorting: false,
            isSortingActive: false,
            transitionDuration: 300,
            overallProgress: 0,
            uniqueId: '',
            sortTimeout: 0,
        };
    },
    computed: {
        canAddMore: function () {
            if (!this.hasMultiple) {
                return this.fileRecords.length === 0;
            }
            if (!this.maxFiles) {
                return true;
            }
            return this.fileRecords.length < this.maxFiles;
        },
        helpTextComputed: function () {
            if (this.helpText) {
                return this.helpText;
            }
            return 'Choose ' + (this.hasMultiple ? 'files' : 'file') + ' or drag & drop here';
        },
        isDeletable: function () {
            if (typeof this.deletable === 'string') {
                return this.deletable !== 'false';
            }
            return !!this.deletable;
        },
        isSortable: function () {
            return !!this.sortable;
        },
        hasMultiple: function () {
            if (typeof this.multiple === 'string') {
                return this.multiple !== 'false';
            }
            if (this.multiple === undefined) {
                return Array.isArray(this.value);
            }
            return !!this.multiple;
        },
        shouldRead: function () {
            if (typeof this.read === 'string') {
                return this.read === 'true';
            }
            return !!this.read;
        },
    },
    methods: {
        createThumbnail: function (fileRecord, video) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var canvas = document.createElement('canvas');
                utils
                    .createVideoThumbnail(video, canvas, fileRecord.thumbnailSize, _this.averageColor !== false)
                    .then(function (thumbnail) {
                    fileRecord.imageColor = thumbnail.color;
                    fileRecord.videoThumbnail = thumbnail.url;
                    fileRecord.dimensions.width = thumbnail.width;
                    fileRecord.dimensions.height = thumbnail.height;
                    resolve();
                }, reject);
            });
        },
        initVideo: function (fileRecord) {
            if (!fileRecord.isPlayableVideo()) {
                return;
            }
            var createObjectURL = (window.URL || window.webkitURL || {}).createObjectURL;
            var revokeObjectURL = (window.URL || window.webkitURL || {}).revokeObjectURL;
            var video = document.createElement('video');
            video.src = createObjectURL(fileRecord.file);
            this.createThumbnail(fileRecord, video).then(function () {
                revokeObjectURL(video.src);
            });
            video.load();
        },
        getFileRecordOrRawInstance: function (fileRecordOrRaw, raw) {
            var i;
            if (fileRecordOrRaw instanceof file_record) {
                i = this.fileRecords.indexOf(fileRecordOrRaw);
            }
            else {
                i = this.rawFileRecords.indexOf(fileRecordOrRaw);
            }
            if (i === -1) {
                return fileRecordOrRaw;
            }
            return raw ? this.rawFileRecords[i] : this.fileRecords[i];
        },
        getFileRecordRawInstance: function (fileRecordOrRaw) {
            return this.getFileRecordOrRawInstance(fileRecordOrRaw, true);
        },
        getFileRecordInstance: function (fileRecordOrRaw) {
            return this.getFileRecordOrRawInstance(fileRecordOrRaw, false);
        },
        prepareConfigureFn: function (configureXhr) {
            var uploadWithCredentials = this.uploadWithCredentials;
            if (uploadWithCredentials !== true && uploadWithCredentials !== false) {
                return configureXhr;
            }
            return function (request) {
                request.withCredentials = uploadWithCredentials;
                if (typeof configureXhr === 'function') {
                    configureXhr(request);
                }
            };
        },
        upload: function (url, headers, fileRecordsOrRaw, createFormData, configureXhr) {
            var e_1, _a;
            var _this = this;
            var validFileRecords = [];
            var validFilesRawData = [];
            try {
                for (var fileRecordsOrRaw_1 = __values(fileRecordsOrRaw), fileRecordsOrRaw_1_1 = fileRecordsOrRaw_1.next(); !fileRecordsOrRaw_1_1.done; fileRecordsOrRaw_1_1 = fileRecordsOrRaw_1.next()) {
                    var fileRecordOrRaw = fileRecordsOrRaw_1_1.value;
                    var fileRecord = this.getFileRecordInstance(fileRecordOrRaw);
                    if (!fileRecord.error) {
                        validFileRecords.push(fileRecord);
                        validFilesRawData.push(this.getFileRecordRawInstance(fileRecord));
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (fileRecordsOrRaw_1_1 && !fileRecordsOrRaw_1_1.done && (_a = fileRecordsOrRaw_1.return)) _a.call(fileRecordsOrRaw_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (this.resumable) {
                return upload_helper.tusUpload(plugins.tus, url, headers, validFileRecords, function (overallProgress) {
                    _this.overallProgress = overallProgress;
                }, this.resumable === true ? undefined : this.resumable);
            }
            return new Promise(function (resolve, reject) {
                upload_helper
                    .upload(url, headers, validFileRecords, createFormData, function (overallProgress) {
                    _this.overallProgress = overallProgress;
                }, _this.prepareConfigureFn(configureXhr))
                    .then(function (res) {
                    for (var i = 0; i < res.length; i++) {
                        res[i].fileRecord = validFilesRawData[i];
                    }
                    _this.$emit('upload', res);
                    resolve(res);
                }, function (err) {
                    for (var i = 0; i < err.length; i++) {
                        err[i].fileRecord = validFilesRawData[i];
                    }
                    _this.$emit('upload:error', err);
                    reject(err);
                });
            });
        },
        deleteUpload: function (url, headers, fileRecordOrRaw, uploadData, configureXhr) {
            var _this = this;
            if (this.fileRecords.length < 1) {
                this.overallProgress = 0;
            }
            var fileRecord = this.getFileRecordInstance(fileRecordOrRaw);
            var rawFileRecord = this.getFileRecordRawInstance(fileRecordOrRaw);
            if (this.resumable) {
                return upload_helper.tusDeleteUpload(plugins.tus, url, headers, fileRecord);
            }
            return new Promise(function (resolve, reject) {
                upload_helper
                    .deleteUpload(url, headers, fileRecord, uploadData, _this.prepareConfigureFn(configureXhr))
                    .then(function (res) {
                    res.fileRecord = rawFileRecord;
                    _this.$emit('upload:delete', res);
                    resolve(res);
                }, function (err) {
                    err.fileRecord = rawFileRecord;
                    _this.$emit('upload:delete:error', err);
                    reject(err);
                });
            });
        },
        updateUpload: function (url, headers, fileRecord, uploadData, configureXhr) {
            var _this = this;
            fileRecord = this.getFileRecordInstance(fileRecord);
            var rawFileRecord = this.getFileRecordRawInstance(fileRecord);
            return new Promise(function (resolve, reject) {
                upload_helper
                    .updateUpload(url, headers, fileRecord, uploadData, _this.prepareConfigureFn(configureXhr))
                    .then(function (res) {
                    res.fileRecords = rawFileRecord;
                    _this.$emit('upload:update', res);
                    resolve(res);
                }, function (err) {
                    err.fileRecords = rawFileRecord;
                    _this.$emit('upload:update:error', err);
                    reject(err);
                });
            });
        },
        autoUpload: function (fileRecords) {
            if (!this.uploadUrl || this.auto === false) {
                return Promise.resolve(false);
            }
            return this.upload(this.uploadUrl, this.uploadHeaders, fileRecords, this.uploadConfig);
        },
        autoDeleteUpload: function (fileRecord) {
            if (!this.uploadUrl || this.auto === false) {
                return Promise.resolve(false);
            }
            return this.deleteUpload(this.uploadUrl, this.uploadHeaders, fileRecord, this.uploadConfig);
        },
        autoUpdateUpload: function (fileRecord) {
            if (!this.uploadUrl || this.auto === false) {
                return Promise.resolve(false);
            }
            return this.updateUpload(this.uploadUrl, this.uploadHeaders, fileRecord, this.uploadConfig);
        },
        equalFiles: function (file1, file2) {
            return (  true &&
                file1.name === file2.name &&
                file1.size === file2.size &&
                file1.type === file2.type &&
                // file1.lastModifiedDate.getTime() === file2.lastModifiedDate.getTime() &&
                file1.lastModified === file2.lastModified);
        },
        isFileAddedAlready: function (file) {
            var e_2, _a;
            try {
                for (var _b = __values(this.fileRecords), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var fileRecord = _c.value;
                    if (this.equalFiles(file, fileRecord.file)) {
                        return true;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return false;
        },
        handleFiles: function (files) {
            var e_3, _a, e_4, _b, _c;
            var _this = this;
            if (this.disabled === true || this.readonly === true) {
                return;
            }
            if (this.hasMultiple && !this.canAddMore) {
                return;
            }
            var fileRecords = [];
            var filesFiltered = [];
            // tslint:disable-next-line
            for (var i = 0; i < files.length; i++) {
                if (this.hasMultiple && this.isFileAddedAlready(files[i])) {
                    continue;
                }
                filesFiltered.push(files[i]);
            }
            files = filesFiltered;
            if (this.hasMultiple && this.maxFiles && files.length > this.maxFiles - this.fileRecords.length) {
                files = files.slice(0, this.maxFiles - this.fileRecords.length);
            }
            try {
                for (var files_1 = __values(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                    var file = files_1_1.value;
                    fileRecords.push(new file_record({
                        file: file,
                    }, {
                        read: this.shouldRead,
                        maxSize: this.maxSize,
                        accept: this.accept,
                        thumbnailSize: this.thumbnailSize,
                        averageColor: this.averageColor,
                    }));
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            try {
                for (var fileRecords_1 = __values(fileRecords), fileRecords_1_1 = fileRecords_1.next(); !fileRecords_1_1.done; fileRecords_1_1 = fileRecords_1.next()) {
                    var fileRecord = fileRecords_1_1.value;
                    if (fileRecord.file.size <= 20 * 1024 * 1024) {
                        // <= 20MB
                        this.initVideo(fileRecord);
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (fileRecords_1_1 && !fileRecords_1_1.done && (_b = fileRecords_1.return)) _b.call(fileRecords_1);
                }
                finally { if (e_4) throw e_4.error; }
            }
            if (this.hasMultiple) {
                // splice: for list transitions to work properly
                (_c = this.fileRecords).splice.apply(_c, __spread([this.fileRecords.length, 0], fileRecords));
            }
            else {
                this.fileRecords = fileRecords;
            }
            file_record.readFiles(fileRecords).then(function (fileRecordsNew) {
                var allFileRecordsRaw = file_record.toRawArray(_this.fileRecords);
                _this.rawFileRecords = allFileRecordsRaw;
                _this.$emit('input', Array.isArray(_this.value) ? allFileRecordsRaw : allFileRecordsRaw[0]);
                _this.$emit('select', file_record.toRawArray(fileRecordsNew));
            });
            this.autoUpload(fileRecords);
        },
        filesChanged: function (event) {
            var files = event.target.files;
            this.$emit('change', event);
            if (!files[0]) {
                return;
            }
            if (!this.hasMultiple) {
                files = [files[0]];
            }
            this.handleFiles(files);
            if (this.$refs.fileInput) {
                this.$refs.fileInput.value = null; // do not use ''
                // because chrome won't fire change event for same file
            }
        },
        drop: function (event) {
            var _this = this;
            event.stopPropagation();
            event.preventDefault();
            dragCounter = 0;
            this.isDragging = false;
            if (this.disabled === true || this.readonly === true) {
                return;
            }
            if (!event.dataTransfer) {
                return;
            }
            utils.getFilesFromDroppedItems(event.dataTransfer).then(function (files) {
                _this.$emit('drop', event);
                if (!files || !files[0]) {
                    return;
                }
                if (!_this.hasMultiple) {
                    files = [files[0]];
                }
                _this.handleFiles(files);
            });
        },
        dragEnter: function (event) {
            if (!event.dataTransfer) {
                return;
            }
            this.isDragging = true;
            event.stopPropagation();
            event.preventDefault();
            dragCounter++;
            event.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
        },
        dragOver: function (event) {
            if (!event.dataTransfer) {
                return;
            }
            this.isDragging = true;
            event.stopPropagation();
            event.preventDefault();
            event.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
        },
        dragLeave: function (event) {
            if (!event.dataTransfer) {
                return;
            }
            dragCounter--;
            if (dragCounter === 0) {
                this.isDragging = false;
            }
        },
        removeFileRecord: function (fileRecordOrRaw) {
            var rawFileRecord = this.getFileRecordRawInstance(fileRecordOrRaw);
            this.$emit('beforedelete', rawFileRecord);
            if (!this.uploadUrl || this.auto === false) {
                return;
            }
            this.deleteFileRecord(fileRecordOrRaw);
        },
        deleteFileRecord: function (fileRecordOrRaw) {
            var _this = this;
            var i;
            if (fileRecordOrRaw instanceof file_record) {
                i = this.fileRecords.indexOf(fileRecordOrRaw);
            }
            else {
                i = this.rawFileRecords.indexOf(fileRecordOrRaw);
            }
            var fileRecord = this.fileRecords[i];
            var rawFileRecord = this.rawFileRecords[i];
            this.$emit('input', this.rawFileRecords);
            this.$emit('delete', rawFileRecord);
            fileRecord = this.fileRecords.splice(i, 1)[0];
            rawFileRecord = this.rawFileRecords.splice(i, 1)[0];
            this.autoDeleteUpload(fileRecord).then(function (res) {
                /* no op */
            }, function (err) {
                _this.fileRecords.splice(i, 1, fileRecord);
                _this.rawFileRecords.splice(i, 1, rawFileRecord);
            });
        },
        filenameChanged: function (fileRecord) {
            this.$emit('rename', file_record.toRawArray([fileRecord])[0]);
            this.autoUpdateUpload(fileRecord).then(function (res) {
                /* no op */
            }, function (err) {
                fileRecord.customName = fileRecord.oldCustomName;
            });
        },
        checkValue: function () {
            var _this = this;
            var rawFileRecords = this.value || [];
            rawFileRecords = Array.isArray(rawFileRecords) ? rawFileRecords : [rawFileRecords];
            var fdPromises = [];
            var rawFileRecordsNew = [];
            for (var i = 0; i < rawFileRecords.length; i++) {
                var existingIndex = this.rawFileRecords.indexOf(rawFileRecords[i]);
                if (existingIndex !== -1) {
                    fdPromises.push(Promise.resolve(this.fileRecords[existingIndex]));
                    rawFileRecordsNew[i] = this.rawFileRecords[existingIndex];
                }
                else {
                    fdPromises.push(file_record.fromRaw(rawFileRecords[i], {
                        read: this.shouldRead,
                        maxSize: this.maxSize,
                        accept: this.accept,
                        thumbnailSize: this.thumbnailSize,
                        averageColor: this.averageColor,
                    }));
                    rawFileRecordsNew.push(rawFileRecords[i]);
                }
            }
            this.rawFileRecords = rawFileRecordsNew;
            Promise.all(fdPromises).then(function (fileRecords) {
                _this.fileRecords = fileRecords;
            });
        },
        sortStart: function () {
            if (this.sortTimeout) {
                clearTimeout(this.sortTimeout);
            }
            this.isSorting = true;
            this.isSortingActive = true;
        },
        sortEnd: function (sortData) {
            var _this = this;
            this.isSortingActive = false;
            if (this.sortTimeout) {
                clearTimeout(this.sortTimeout);
            }
            this.sortTimeout = setTimeout(function () {
                _this.isSorting = false;
            }, this.transitionDuration + 100);
            if (sortData.oldIndex !== sortData.newIndex) {
                this.rawFileRecords = utils.arrayMove(this.rawFileRecords, sortData.oldIndex, sortData.newIndex);
                this.$nextTick(function () {
                    _this.$emit('input', _this.rawFileRecords);
                    _this.$emit('sort', {
                        oldIndex: sortData.oldIndex,
                        newIndex: sortData.newIndex,
                    });
                });
            }
        },
    },
    created: function () {
        this.uniqueId = new Date().getTime().toString(36) + Math.random().toString(36).slice(2);
        this.checkValue();
    },
    watch: {
        value: function () {
            this.checkValue();
        },
    },
}));

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--12-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/vue-file-agent.vue?vue&type=script&lang=ts&


/* harmony default export */ var vue_file_agentvue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    mixins: [vue_file_agent_mixin],
}));

// CONCATENATED MODULE: ./src/components/vue-file-agent.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_vue_file_agentvue_type_script_lang_ts_ = (vue_file_agentvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/vue-file-agent.vue?vue&type=style&index=0&lang=scss&
var vue_file_agentvue_type_style_index_0_lang_scss_ = __nested_webpack_require_9536__("6816");

// CONCATENATED MODULE: ./src/components/vue-file-agent.vue






/* normalize component */

var vue_file_agent_component = normalizeComponent(
  components_vue_file_agentvue_type_script_lang_ts_,
  vue_file_agentvue_type_template_id_4fc1199c_render,
  vue_file_agentvue_type_template_id_4fc1199c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_file_agent = (vue_file_agent_component.exports);
// CONCATENATED MODULE: ./src/index.ts










var src_VueFileAgentPlugin = /** @class */ (function () {
    function VueFileAgentPlugin() {
        this.VueFileIcon = vue_file_icon;
        this.VueFilePreview = vue_file_preview;
        this.VueFileAgent = vue_file_agent;
        this.component = vue_file_agent;
        this.mixin = vue_file_agent_mixin;
        this.plugins = plugins;
        this.VueFileAgentMixin = vue_file_agent_mixin;
        this.VueFilePreviewMixin = vue_file_preview_mixin;
        this.install = function (Vue, options) {
            Vue.component('VueFileIcon', vue_file_icon);
            Vue.component('VueFilePreview', vue_file_preview);
            Vue.component('VueFileList', vue_file_list);
            Vue.component('VueFileListItem', vue_file_list_item);
            Vue.component('VueFileAgent', vue_file_agent);
            Vue.prototype.$vueFileAgent = {
                mixin: vue_file_agent_mixin,
            };
        };
    }
    return VueFileAgentPlugin;
}());

var vfaPlugin = new src_VueFileAgentPlugin();
// auto install
if (typeof window !== 'undefined' && window.Vue) {
    vfaPlugin.install(window.Vue, {});
    window.VueFileAgent = vfaPlugin;
}
var mixin = vue_file_agent_mixin;


var FileData = file_record; // for backward compatibility
/* harmony default export */ var src_0 = (vfaPlugin);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ })

/******/ });
});
//# sourceMappingURL=vue-file-agent.umd.js.map

/***/ }),

/***/ "./resources/js/src/views/setting/endorsee.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/setting/endorsee.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _endorsee_vue_vue_type_template_id_9d08d104__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endorsee.vue?vue&type=template&id=9d08d104 */ "./resources/js/src/views/setting/endorsee.vue?vue&type=template&id=9d08d104");
/* harmony import */ var _endorsee_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endorsee.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/setting/endorsee.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_endorsee_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_endorsee_vue_vue_type_template_id_9d08d104__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/setting/endorsee.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/setting/endorsee.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/setting/endorsee.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_endorsee_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_endorsee_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./endorsee.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/setting/endorsee.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/setting/endorsee.vue?vue&type=template&id=9d08d104":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/setting/endorsee.vue?vue&type=template&id=9d08d104 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_endorsee_vue_vue_type_template_id_9d08d104__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_endorsee_vue_vue_type_template_id_9d08d104__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./endorsee.vue?vue&type=template&id=9d08d104 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/setting/endorsee.vue?vue&type=template&id=9d08d104");


/***/ })

}]);