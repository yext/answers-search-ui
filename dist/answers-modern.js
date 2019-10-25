(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.ANSWERS = factory());
}(this, function () { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
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

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
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
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
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

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
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
    if (typeof Reflect !== "undefined" && Reflect.get) {
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

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
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
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
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
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  /** @module HttpRequester */

  /* global fetch */

  /**
   * Types of HTTP requests
   */
  var Methods = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
  };
  /**
   * HttpRequester is a wrapper around the native implementation of AJAX
   * related matters. It's used to make all types of network requests
   * and exposes a promise interface.
   */

  var HttpRequester =
  /*#__PURE__*/
  function () {
    function HttpRequester() {
      _classCallCheck(this, HttpRequester);
    }

    _createClass(HttpRequester, [{
      key: "get",

      /**
       * Create a GET HTTP request
       * @param {string} url The url to make a request to
       * @param {Object} data The data to provide (gets encoded into the URL)
       * @param {Object} opts Configuration options to use for the request
       */
      value: function get(url, data, opts) {
        return this.request(Methods.GET, this.encodeParams(url, data), opts);
      }
      /**
       * Create a POST HTTP request
       * @param {string} url The url to make a request to
       * @param {Object} urlParams The params to encode into the URL
       * @param {Object} jsonBody The request body (json) to provide with the POST request
       * @param {Object} requestConfig Configuration options to use for the request
       */

    }, {
      key: "post",
      value: function post(url, urlParams, jsonBody, requestConfig) {
        return this.request(Methods.POST, this.encodeParams(url, urlParams), Object.assign({
          body: JSON.stringify(jsonBody),
          credentials: undefined
        }, requestConfig));
      }
    }, {
      key: "request",
      value: function request(method, url, opts) {
        return fetch(url, Object.assign({
          method: method,
          credentials: 'include'
        }, opts));
      }
      /**
       * Send a beacon to the provided url which will send a non-blocking request
       * to the server that is guaranteed to send before page load. No response is returned,
       * so beacons are primarily used for analytics reporting.
       * @param {string} url The url to send the beacon to
       * @param {object} data The data payload to send in the beacon
       * @return {boolean} true if the request is successfully queued
       */

    }, {
      key: "beacon",
      value: function beacon(url, data) {
        return navigator.sendBeacon(url, JSON.stringify(data));
      }
    }, {
      key: "encodeParams",
      value: function encodeParams(url, params) {
        if (_typeof(params) !== 'object') {
          return;
        }

        var hasParam = url.indexOf('?') > -1;
        var searchQuery = '';

        for (var key in params) {
          if (!hasParam) {
            hasParam = true;
            searchQuery += '?';
          } else {
            searchQuery += '&';
          }

          searchQuery += key + '=' + encodeURIComponent(params[key]);
        }

        return url + searchQuery;
      }
    }]);

    return HttpRequester;
  }();

  /** @module */

  /** The current lib version, reported with errors and analytics */
  var LIB_VERSION = 'v0.9.2';
  /** The base url for the api backend */

  var API_BASE_URL = 'https://liveapi.yext.com';
  /** The default url for compiled component templates */

  var COMPILED_TEMPLATES_URL = "https://assets.sitescdn.net/answers/".concat(LIB_VERSION, "/answerstemplates.compiled.min.js");
  /** The base url for the analytics backend  */

  var ANALYTICS_BASE_URL = 'https://realtimeanalytics.yext.com';

  /** @module SearchParams */

  /* global window */

  /**
   * SearchParams is a class to get the search params in a URL.
   * It is a replacement for URL.searchParams and URLSearchParams for browsers like IE11
   */
  var SearchParams =
  /*#__PURE__*/
  function () {
    function SearchParams(url) {
      _classCallCheck(this, SearchParams);

      /**
       * Mapping of all query parameters in the given url, query param -> value
       * Only used if URLSearchParams does not exist in the window
       * @type {Object}
       * @private
       */
      this._params = {};

      if (window && window.URLSearchParams) {
        return new URLSearchParams(url);
      } else {
        this._params = this.parse(url);
      }
    }
    /**
     * parse creates a mapping of all query params in a given url
     * The query param values are decoded before being put in the map
     * Three types of input are supported
     *   (1) full URL e.g. http://www.yext.com/?q=hello
     *   (2) params with ? e.g. ?q=hello
     *   (1) params without ? e.g. q=hello
     * @param {string} url The url
     * @returns {Object} mapping from query param -> value where value is '' if no value is provided
     */


    _createClass(SearchParams, [{
      key: "parse",
      value: function parse(url) {
        var params = {};
        var search = url;

        if (search === '') {
          return params;
        } // Normalize all url inputs to string of query params separated by &


        if (url.indexOf('?') > -1) {
          search = url.slice(url.indexOf('?') + 1);
        }

        var encodedParams = search.split('&');

        for (var i = 0; i < encodedParams.length; i++) {
          var keyVal = encodedParams[i].split('=');

          if (keyVal.length > 1) {
            params[keyVal[0]] = SearchParams.decode(keyVal[1]);
          } else {
            params[keyVal[0]] = '';
          }
        }

        return params;
      }
      /**
       * get returns the value of the given query param
       * @param {string} query the query param key to get the value of
       * @return {string} param value, null otherwise
       */

    }, {
      key: "get",
      value: function get(query) {
        if (typeof this._params[String(query)] === 'undefined') {
          return null;
        }

        return this._params[query];
      }
      /**
       * set changes the value of a given query param
       * @param {string} name the query param key
       * @param {string} value the value of the query param update with
       */

    }, {
      key: "set",
      value: function set(name, value) {
        this._params[String(name)] = String(value);
      }
      /**
       * has checks to see if the given query param key exists in the params object
       * @param {string} query the query param to check
       * @return {boolean} true if the query param is in the params object, false o/w
       */

    }, {
      key: "has",
      value: function has(query) {
        return query in this._params;
      }
      /**
       * toString returns a url with all the query params in the params object (without a ?)
       * @return {string}
       */

    }, {
      key: "toString",
      value: function toString() {
        var string = [];

        for (var key in this._params) {
          string.push("".concat(key, "=").concat(SearchParams.encode(this._params[key])));
        }

        return string.join('&');
      }
    }, {
      key: "entries",
      value: function entries() {
        var entries = [];

        for (var key in this._params) {
          entries.push([key, this._params[key]]);
        }

        return entries;
      }
      /**
       * decode returns the decoded representation of the given string
       * @param {string} string the string to decode
       * @return {string}
       */

    }], [{
      key: "decode",
      value: function decode(string) {
        return decodeURIComponent(string.replace(/[ +]/g, '%20'));
      }
      /**
       * decode returns the encoded representation of the given string (e.g. + -> %2B)
       * @param {string} string the string to encode
       * @return {string}
       */

    }, {
      key: "encode",
      value: function encode(string) {
        var replace = {
          '!': '%21',
          "'": '%27',
          '(': '%28',
          ')': '%29',
          '%20': '+'
        };
        return encodeURIComponent(string).replace(/[!'()]|%20/g, function (match) {
          return replace[match];
        });
      }
    }]);

    return SearchParams;
  }();

  /**
   * ApiRequest is the base class for all API requests.
   * It defines all of the core properties required to make a request
   */

  var ApiRequest =
  /*#__PURE__*/
  function () {
    function ApiRequest() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, ApiRequest);

      /**
       * An abstraction used for making network request and handling errors
       * @type {HttpRequester}
       * @private
       */
      this._requester = new HttpRequester();
      /**
       * The baseUrl to use for making a request
       * @type {string}
       * @private
       */

      this._baseUrl = opts.baseUrl || API_BASE_URL;
      /**
       * The endpoint to use in the url (appended to the {baseUrl})
       * @type {string}
       * @private
       */

      this._endpoint = opts.endpoint || null;
      /**
       * The API Key to use for the request
       * @type {string}
       * @private
       */

      this._apiKey = opts.apiKey || null;
      /**
       * The version of the API to make a request to
       * @type {string}
       * @private
       */

      this._version = opts.version || 20190101;
      /**
       * Additional data params that are sent along with the request
       * @type {string}
       * @private
       */

      this._params = opts.params || {};
    }
    /**
     * get creates a new `GET` request to the server using the configuration of the request class
     * @returns {Promise}
     */


    _createClass(ApiRequest, [{
      key: "get",
      value: function get() {
        return this._requester.get(this._baseUrl + this._endpoint, Object.assign({}, this.baseParams(), this.sanitizeParams(this._params)));
      }
    }, {
      key: "post",
      value: function post(opts) {
        return this._requester.post(this._baseUrl + this._endpoint, this.baseParams()
        /* urlParams */
        , this.sanitizeParams(this._params)
        /* jsonBody */
        , opts
        /* requestConfig */
        );
      }
    }, {
      key: "baseParams",
      value: function baseParams() {
        var baseParams = {
          'v': this._version,
          'api_key': this._apiKey,
          'jsLibVersion': LIB_VERSION
        };
        var urlParams = new SearchParams(window.location.search.substring(1));

        if (urlParams.has('beta')) {
          baseParams['beta'] = urlParams.get('beta');
        }

        return baseParams;
      }
    }, {
      key: "sanitizeParams",
      value: function sanitizeParams() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        // Remove any paramaters whos value is `undefined`.
        //
        // NOTE(billy) Probably better to be explicit about how to handle this at the request building level,
        // but I can't see any cases where we'd ever want to send 'undefined' as a value to the server.
        // So it's probably fine to 'clean' the params object here
        Object.keys(params).forEach(function (key) {
          if (params[key] === undefined || params[key] === null) {
            delete params[key];
          }
        });
        return params;
      }
    }]);

    return ApiRequest;
  }();

  /** @module Errors */

  /**
   * AnswersBaseError is an extension of the base Error object.
   * This is the object that is used to when reporting to the server.
   * @extends Error
   *
   * Error codes fall into one of four categories:
   * 1XX errors: Basic errors
   * 2XX errors: UI errors
   * 3XX errors: Endpoint errors
   * 4XX errors: Core errors
   */
  var AnswersBaseError =
  /*#__PURE__*/
  function (_Error) {
    _inherits(AnswersBaseError, _Error);

    function AnswersBaseError(errorCode, message, boundary, causedBy) {
      var _this;

      _classCallCheck(this, AnswersBaseError);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AnswersBaseError).call(this, message));
      _this.errorCode = errorCode;
      _this.errorMessage = message;
      _this.boundary = boundary;
      _this.reported = false;

      if (causedBy) {
        _this.causedBy = causedBy instanceof AnswersBaseError ? causedBy : AnswersBaseError.from(causedBy);
      }

      return _this;
    }

    _createClass(AnswersBaseError, [{
      key: "toJson",
      value: function toJson() {
        return JSON.stringify(this);
      }
    }, {
      key: "toString",
      value: function toString() {
        var string = "".concat(this.errorMessage, " (").concat(this.boundary, ")");

        if (this.causedBy) {
          string += "\n  Caused By: ".concat(this.causedBy.toString());
        }

        return string;
      }
    }], [{
      key: "from",
      value: function from(builtinError, boundary) {
        var error = new AnswersBasicError(builtinError.message, boundary);
        error.stack = builtinError.stack;
        return error;
      }
    }]);

    return AnswersBaseError;
  }(_wrapNativeSuper(Error));
  /**
   * AnswersBasicError is a wrapper around all the built-in errors
   * e.g. undefined variables, incorrect syntax, types, missing methods, etc.
   * @extends AnswersBaseError
   */

  var AnswersBasicError =
  /*#__PURE__*/
  function (_AnswersBaseError) {
    _inherits(AnswersBasicError, _AnswersBaseError);

    function AnswersBasicError(message, boundary, causedBy) {
      _classCallCheck(this, AnswersBasicError);

      return _possibleConstructorReturn(this, _getPrototypeOf(AnswersBasicError).call(this, 100, message, boundary, causedBy));
    }

    return AnswersBasicError;
  }(AnswersBaseError);
  /**
   * AnswersComponentError is used for Component oriented errors
   * e.g. failure to render, or catching unknowns.
   * @extends AnswersBaseError
   */

  var AnswersComponentError =
  /*#__PURE__*/
  function (_AnswersBaseError3) {
    _inherits(AnswersComponentError, _AnswersBaseError3);

    function AnswersComponentError(message, component, causedBy) {
      _classCallCheck(this, AnswersComponentError);

      return _possibleConstructorReturn(this, _getPrototypeOf(AnswersComponentError).call(this, 201, message, component, causedBy));
    }

    return AnswersComponentError;
  }(AnswersBaseError);
  /**
   * AnswersEndpointError represents all network related errors.
   * @extends AnswersBaseError
   */

  var AnswersEndpointError =
  /*#__PURE__*/
  function (_AnswersBaseError4) {
    _inherits(AnswersEndpointError, _AnswersBaseError4);

    function AnswersEndpointError(message, boundary, causedBy) {
      _classCallCheck(this, AnswersEndpointError);

      return _possibleConstructorReturn(this, _getPrototypeOf(AnswersEndpointError).call(this, 300, message, boundary, causedBy));
    }

    return AnswersEndpointError;
  }(AnswersBaseError);
  /**
   * AnswersCoreError represents errors for precondition failures in the core library
   * @extends AnswersBaseError
   */

  var AnswersCoreError =
  /*#__PURE__*/
  function (_AnswersBaseError5) {
    _inherits(AnswersCoreError, _AnswersBaseError5);

    function AnswersCoreError(message, boundary, causedBy) {
      _classCallCheck(this, AnswersCoreError);

      return _possibleConstructorReturn(this, _getPrototypeOf(AnswersCoreError).call(this, 400, message, boundary, causedBy));
    }

    return AnswersCoreError;
  }(AnswersBaseError);
  /**
   * AnswersStorageError represents storage related errors
   * @extends AnswersBaseError
   */

  var AnswersStorageError =
  /*#__PURE__*/
  function (_AnswersBaseError6) {
    _inherits(AnswersStorageError, _AnswersBaseError6);

    function AnswersStorageError(message, storageKey, data, causedBy) {
      var _this2;

      _classCallCheck(this, AnswersStorageError);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AnswersStorageError).call(this, 401, message, 'Storage', causedBy));
      _this2.storageKey = storageKey;
      _this2.data = data;
      return _this2;
    }

    return AnswersStorageError;
  }(AnswersBaseError);
  /**
   * AnswersAnalyticsError is used for errors when reporting analytics
   * @extends AnswersBaseError
   */

  var AnswersAnalyticsError =
  /*#__PURE__*/
  function (_AnswersBaseError7) {
    _inherits(AnswersAnalyticsError, _AnswersBaseError7);

    function AnswersAnalyticsError(message, event, causedBy) {
      var _this3;

      _classCallCheck(this, AnswersAnalyticsError);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(AnswersAnalyticsError).call(this, 402, message, 'Analytics', causedBy));
      _this3.event = event;
      return _this3;
    }

    return AnswersAnalyticsError;
  }(AnswersBaseError);

  /**
   * SearchApi is the API for doing various types of search
   * over the network (e.g. vertical or universal)
   */

  var SearchApi =
  /*#__PURE__*/
  function () {
    function SearchApi() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, SearchApi);

      /**
       * A local reference to the API Key to use for the request
       * @type {string}
       * @private
       */
      if (!config.apiKey) {
        throw new AnswersBasicError('Api Key is required', 'Search');
      }

      this._apiKey = config.apiKey;
      /**
       * A local reference to the Answers Key to use for the request
       * @type {string}
       * @private
       */

      if (!config.experienceKey) {
        throw new AnswersBasicError('Answers Key is required', 'Search');
      }

      this._experienceKey = config.experienceKey;
      /**
       * The answers config version to use for all requests
       * @type {string}
       * @private
       */

      this._experienceVersion = config.experienceVersion;
      /**
       * The version of the API to make a request to
       * @type {string}
       * @private
       */

      this._version = config.version || 20190101 || 20190301;
      /**
       * A local reference to the locale to use for the request
       * @type {string}
       * @private
       */

      if (!config.locale) {
        throw new AnswersBasicError('Locale is required', 'Search');
      }

      this._locale = config.locale;
    }
    /**
     * Search in the context of a vertical
     * @param {string} verticalKey vertical ID for the search
     * @param {object} query The query details
     * @param {string} query.input The input to search for
     * @param {string} query.filter The filter to use in the search
     * @param {string} query.facetFilter The facet filter to use in the search
     * @param {number} query.limit The max number of results to include, max of 50
     * @param {number} query.offset The results offset, for fetching more results of the same query
     * @param {string} query.id The query ID to use. If paging within a query, the same ID should be used
     * @param {Object} query.geolocation The user's geolocation position used to bias the results
     * @param {boolean} query.isDynamicFiltersEnabled If true, asks the server to return dynamic filters
     * @param {string} query.skipSpellCheck The boolean as string to indicate if it should skip spell checking
     * @param {string} query.queryTrigger The source that triggers query such as suggest
     */


    _createClass(SearchApi, [{
      key: "verticalSearch",
      value: function verticalSearch(verticalKey, _ref) {
        var input = _ref.input,
            filter = _ref.filter,
            facetFilter = _ref.facetFilter,
            limit = _ref.limit,
            offset = _ref.offset,
            id = _ref.id,
            geolocation = _ref.geolocation,
            isDynamicFiltersEnabled = _ref.isDynamicFiltersEnabled,
            skipSpellCheck = _ref.skipSpellCheck,
            queryTrigger = _ref.queryTrigger;

        if (limit > 50) {
          throw new AnswersCoreError('Provided search limit unsupported', 'SearchApi');
        }

        var request = new ApiRequest({
          endpoint: '/v2/accounts/me/answers/vertical/query',
          apiKey: this._apiKey,
          version: this._version,
          params: {
            'input': input,
            'experienceKey': this._experienceKey,
            'version': this._experienceVersion,
            'filters': filter,
            'facetFilters': facetFilter,
            'verticalKey': verticalKey,
            'limit': limit,
            'offset': offset,
            'location': geolocation ? "".concat(geolocation.lat, ",").concat(geolocation.lng) : null,
            'radius': geolocation ? geolocation.radius : null,
            'queryId': id,
            'retrieveFacets': isDynamicFiltersEnabled,
            'locale': this._locale,
            'skipSpellCheck': skipSpellCheck,
            'queryTrigger': queryTrigger
          }
        });
        return request.get().then(function (response) {
          return response.json();
        });
      }
      /**
       * Search across all verticals
       * @param {string} queryString The input to search for
       * @param {Object} params.geolocation the user's geolocation position used to bias the results
       * @param {string} params.skipSpellCheck The boolean as string to indicate if it should skip spell checking
       * @param {string} params.queryTrigger The source that triggers query such as suggest
       */

    }, {
      key: "universalSearch",
      value: function universalSearch(queryString, params) {
        var request = new ApiRequest({
          endpoint: '/v2/accounts/me/answers/query',
          apiKey: this._apiKey,
          version: this._version,
          params: {
            'input': queryString,
            'experienceKey': this._experienceKey,
            'location': params.geolocation ? "".concat(params.geolocation.lat, ",").concat(params.geolocation.lng) : null,
            'radius': params.geolocation ? params.geolocation.radius : null,
            'version': this._experienceVersion,
            'locale': this._locale,
            'skipSpellCheck': params.skipSpellCheck,
            'queryTrigger': params.queryTrigger
          }
        });
        return request.get().then(function (response) {
          return response.json();
        });
      }
    }]);

    return SearchApi;
  }();

  /** @module HighlightedValue */

  /**
   * Model representing a highlighted value.
   */
  var HighlightedValue =
  /*#__PURE__*/
  function () {
    function HighlightedValue() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, HighlightedValue);

      this.value = data.value || data.shortValue || '';
      this.matchedSubstrings = data.matchedSubstrings || [];
    }
    /**
     * get highlighted value string
     * @returns {string}
     */


    _createClass(HighlightedValue, [{
      key: "get",
      value: function get() {
        this._sortMatchedSubstrings();

        return this._buildHighlightedValue(this.value, this.matchedSubstrings);
      }
      /**
       * get inverted highlighted value string
       * @returns {string}
       */

    }, {
      key: "getInverted",
      value: function getInverted() {
        this._sortMatchedSubstrings();

        var invertedSubstrings = this._getInvertedSubstrings(this.matchedSubstrings, this.value.length);

        return this._buildHighlightedValue(this.value, invertedSubstrings);
      }
    }, {
      key: "_sortMatchedSubstrings",
      value: function _sortMatchedSubstrings() {
        this.matchedSubstrings.sort(function (a, b) {
          if (a.offset < b.offset) {
            return -1;
          }

          if (a.offset > b.offset) {
            return 1;
          }

          return 0;
        });
      }
    }, {
      key: "_getInvertedSubstrings",
      value: function _getInvertedSubstrings(matchedSubstrings, valueLength) {
        var invertedSubstrings = [];

        for (var i = 0; i < matchedSubstrings.length; i++) {
          var substring = matchedSubstrings[i];
          var nextOffset = substring.offset + substring.length;

          if (i === 0 && substring.offset !== 0) {
            invertedSubstrings.push({
              offset: 0,
              length: substring.offset
            });
          }

          if (valueLength > nextOffset) {
            invertedSubstrings.push({
              offset: nextOffset,
              length: i < matchedSubstrings.length - 1 ? matchedSubstrings[i + 1].offset - nextOffset : valueLength - nextOffset
            });
          }
        }

        return invertedSubstrings;
      }
    }, {
      key: "_buildHighlightedValue",
      value: function _buildHighlightedValue(val, highlightedSubstrings) {
        var highlightedValue = '';
        var nextStart = 0;

        if (highlightedSubstrings.length === 0) {
          return val;
        }

        for (var j = 0; j < highlightedSubstrings.length; j++) {
          var start = Number(highlightedSubstrings[j].offset);
          var end = start + highlightedSubstrings[j].length;
          highlightedValue += [val.slice(nextStart, start), '<strong>', val.slice(start, end), '</strong>'].join('');

          if (j === highlightedSubstrings.length - 1 && end < val.length) {
            highlightedValue += val.slice(end);
          }

          nextStart = end;
        }

        return highlightedValue;
      }
    }]);

    return HighlightedValue;
  }();

  var AutoCompleteData =
  /*#__PURE__*/
  function () {
    function AutoCompleteData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, AutoCompleteData);

      this.sections = data.sections || [];
      this.queryId = data.queryId || '';
      Object.freeze(this);
    }

    _createClass(AutoCompleteData, null, [{
      key: "from",
      value: function from(response) {
        var sections;

        if (response.sections) {
          sections = response.sections.map(function (s) {
            return {
              label: s.label,
              results: s.results.map(function (r) {
                return new AutoCompleteResult(r);
              })
            };
          });
        } else {
          sections = [{
            results: response.results.map(function (r) {
              return new AutoCompleteResult(r);
            })
          }];
        }

        return new AutoCompleteData({
          sections: sections,
          queryId: response.queryId
        });
      }
    }]);

    return AutoCompleteData;
  }();
  var AutoCompleteResult = function AutoCompleteResult() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, AutoCompleteResult);

    this.filter = data.filter || {};
    this.highlightedValue = new HighlightedValue(data).getInverted();
    this.key = data.key || '';
    this.matchedSubstrings = data.matchedSubstrings || [];
    this.value = data.value || '';
    this.shortValue = data.shortValue || this.value;
    Object.freeze(this);
  };

  /**
   * A Data Transformer that takes the response object from a AutoComplete request
   * And transforms in to a front-end oriented data structure that our
   * component library and core storage understand.
   *
   * TODO(billy) Create our own front-end data models
   */

  var AutoCompleteDataTransformer =
  /*#__PURE__*/
  function () {
    function AutoCompleteDataTransformer() {
      _classCallCheck(this, AutoCompleteDataTransformer);
    }

    _createClass(AutoCompleteDataTransformer, null, [{
      key: "clean",
      value: function clean(moduleId, data) {
        if (data.sections && data.sections.length === 0) {
          delete data.sections;
        }

        if (data.sections && data.sections.length === 1 && data.sections[0].results.length === 0) {
          delete data.sections;
        }

        return _defineProperty({}, moduleId, data);
      }
    }, {
      key: "universal",
      value: function universal(response) {
        return AutoCompleteData.from(response);
      }
    }, {
      key: "filter",
      value: function filter(response) {
        return AutoCompleteData.from(response);
      }
    }, {
      key: "vertical",
      value: function vertical(response) {
        return AutoCompleteData.from(response);
      }
    }]);

    return AutoCompleteDataTransformer;
  }();

  /**
   * AutoCompleteApi exposes an interface for network related matters
   * for all the autocomplete endpoints.
   */

  var AutoCompleteApi =
  /*#__PURE__*/
  function () {
    function AutoCompleteApi() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, AutoCompleteApi);

      /**
       * The API Key to use for the request
       * @type {string}
       * @private
       */
      if (!config.apiKey) {
        throw new AnswersBasicError('Api Key is required', 'AutoComplete');
      }

      this._apiKey = config.apiKey;
      /**
       * The Answers Key to use for the request
       * @type {string}
       * @private
       */

      if (!config.experienceKey) {
        throw new AnswersBasicError('Answers Key is required', 'AutoComplete');
      }

      this._experienceKey = config.experienceKey;
      /**
       * The version of the API to make a request to
       * @type {string}
       * @private
       */

      this._version = config.version || 20190101 || 20190301;
      /**
       * The answers config version to use for all requests
       * @type {string}
       * @private
       */

      this._experienceVersion = config.experienceVersion;
      /**
       * The locale to use for the request
       * @type {string}
       * @private
       */

      if (!config.locale) {
        throw new AnswersBasicError('Locale is required', 'AutoComplete');
      }

      this._locale = config.locale;
    }
    /**
     * Autocomplete filters
     * @param {string} input The input to use for auto complete
     * @param {object} config The config to use for filters
     * @param {string} config.verticalKey The vertical key for the config
     * @param {string} config.barKey The bar key for the config v1
     * @param {object} config.searchParameters The search parameters for the config v2
     */


    _createClass(AutoCompleteApi, [{
      key: "queryFilter",
      value: function queryFilter(input, config) {
        var request = new ApiRequest({
          endpoint: '/v2/accounts/me/answers/filtersearch',
          apiKey: this._apiKey,
          version: this._version,
          params: {
            'input': input,
            'experienceKey': this._experienceKey,
            'version': this._experienceVersion,
            'verticalKey': config.verticalKey,
            'inputKey': config.barKey,
            'locale': this._locale,
            'search_parameters': JSON.stringify(config.searchParameters)
          }
        });
        return request.get().then(function (response) {
          return response.json();
        }).then(function (response) {
          return AutoCompleteDataTransformer.filter(response.response, config.barKey);
        })["catch"](function (error) {
          throw new AnswersEndpointError('Filter search request failed', 'AutoComplete', error);
        });
      }
    }, {
      key: "queryVertical",
      value: function queryVertical(input, verticalKey, barKey) {
        var request = new ApiRequest({
          endpoint: '/v2/accounts/me/answers/vertical/autocomplete',
          apiKey: this._apiKey,
          version: this._version,
          params: {
            'input': input,
            'experienceKey': this._experienceKey,
            'version': this._experienceVersion,
            'verticalKey': verticalKey,
            'barKey': barKey,
            'locale': this._locale
          }
        });
        return request.get().then(function (response) {
          return response.json();
        }).then(function (response) {
          return AutoCompleteDataTransformer.vertical(response.response, request._params.barKey);
        })["catch"](function (error) {
          throw new AnswersEndpointError('Vertical search request failed', 'AutoComplete', error);
        });
      }
    }, {
      key: "queryUniversal",
      value: function queryUniversal(queryString) {
        var request = new ApiRequest({
          endpoint: '/v2/accounts/me/answers/autocomplete',
          apiKey: this._apiKey,
          version: this._version,
          params: {
            'input': queryString,
            'experienceKey': this._experienceKey,
            'version': this._experienceVersion,
            'locale': this._locale
          }
        });
        return request.get(queryString).then(function (response) {
          return response.json();
        }).then(function (response) {
          return AutoCompleteDataTransformer.universal(response.response);
        })["catch"](function (error) {
          throw new AnswersEndpointError('Universal search request failed', 'AutoComplete', error);
        });
      }
    }]);

    return AutoCompleteApi;
  }();

  /**
   * QuestionAnswerApi exposes an interface to do networky things against
   * the Q&A REST API
   */

  var QuestionAnswerApi =
  /*#__PURE__*/
  function () {
    function QuestionAnswerApi() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, QuestionAnswerApi);

      /**
       * The API Key to use for the request
       * @type {string}
       * @private
       */
      if (!config.apiKey) {
        throw new AnswersBasicError('Api Key is required', 'QuestionAnswerApi');
      }

      this._apiKey = config.apiKey;
    }
    /**
     * submitQuestion will create a network request to
     * create a question for Q&A.
     * @param {object} question The question object to submit to the server
     * @param {number} question.entityId The entity to associate with the question (required)
     * @param {string} question.lanuage The language of the question
     * @param {string} question.site The "publisher" of the (e.g. 'FIRST_PARTY')
     * @param {string} question.name The name of the author
     * @param {string} question.email The email address of the author
     * @param {string} question.questionText The question
     * @param {string} question.questionDescription Additional information about the question
     */


    _createClass(QuestionAnswerApi, [{
      key: "submitQuestion",
      value: function submitQuestion(question) {
        var request = new ApiRequest({
          endpoint: '/v2/accounts/me/questions',
          apiKey: this._apiKey,
          params: {
            'entityId': question.entityId,
            'site': question.site,
            'name': question.name,
            'email': question.email,
            'questionText': question.questionText,
            'questionDescription': question.questionDescription,
            'questionLanguage': question.questionLanguage
          }
        });
        return request.post().then(function (response) {
          return response.json();
        })["catch"](function (error) {
          throw new AnswersEndpointError('Question submit failed', 'QuestionAnswerApi', error);
        });
      }
    }]);

    return QuestionAnswerApi;
  }();

  /** @module SearchStates */

  /**
   * SearchStates is an ENUM for the various stages of searching,
   * used to show different templates
   * @enum {string}
   */
  var SearchStates = {
    PRE_SEARCH: 'pre-search',
    SEARCH_LOADING: 'search-loading',
    SEARCH_COMPLETE: 'search-complete'
  };

  /** @module Result */
  var Result = function Result() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Result);

    /**
     * The raw profile data
     * @type {Object}
     * @private
     */
    this._raw = data.raw || null;
    /**
     * The formatted profile data
     * @type {Object}
     * @private
     */

    this._formatted = data.formatted;
    /**
     * The index number of the result
     * @type {Number}
     */

    this.ordinal = data.ordinal || null;
    /**
     * The title of the result card
     * @type {string|null}
     */

    this.title = data.title || null;
    /**
     * The body of the details section of the result card, can contain HTML
     * @type {string| null}
     */

    this.details = data.details || null;
    /**
     * The destination link for the title of the result card
     * @type {string|null}
     */

    this.link = data.link || null;
    /**
     * The Entity ID, or other unique identifier, used for to power interactivity
     * @type {string|null}
     */

    this.id = data.id || null;
    /**
     * The subtitle on the result card
     * @type {string|null}
     */

    this.subtitle = data.subtitle || null;
    /**
     * The class modifier, usually derived from the vertical configuration ID
     * Used to apply different styling to different result card types
     * @type {string|null}
     */

    this.modifier = data.modifier || null;
    /**
     * A large date, of the format { month: 'Jan', day: '01' }
     * @type {Object|null}
     */

    this.bigDate = data.bigDate || null;
    /**
     * An image profile object, expected to have a url property
     * @type {Object|null}
     */

    this.image = data.image || null;
    /**
     * An array of calls to action, of the format:
     * { icon: '', url: '', text: '', eventType: '', eventOptions: {}}
     * @type {Array}
     */

    this.callsToAction = data.callsToAction || [];
    /**
     * Determines if an accordian result should be collapsed by default
     * @type {boolean}
     */

    this.collapsed = data.collapsed || true;
  };

  var ResultFactory =
  /*#__PURE__*/
  function () {
    function ResultFactory() {
      _classCallCheck(this, ResultFactory);
    }

    _createClass(ResultFactory, null, [{
      key: "from",

      /**
       * Converts an API result object into a Result view model.
       * Includes default mappings of GoogleCustomSearchEngine results to
       * the fields exposed by the template.
       * @param resultsData  {Array} expected format: { data: { ... }, highlightedFields: { ... }}
       * @param {Object.<string, function>} formatters The formatters to apply to the result
       * @param {string} verticalId The vertical of these results
       * @param {string} source Backend source of these results
       * @returns {Result[]}
       */
      value: function from(resultsData, formatters, verticalId, source) {
        var results = [];

        var _loop = function _loop(i) {
          // TODO use resultData.highlightedFields to
          // transform resultData.data into html-friendly strings that highlight values.
          // Check for new data format, otherwise fallback to legacy
          var data = resultsData[i].data || resultsData[i];
          var formattedData = {};

          if (Object.keys(formatters).length > 0) {
            Object.entries(data).forEach(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  key = _ref2[0],
                  val = _ref2[1];

              if (formatters[key]) {
                formattedData[key] = formatters[key](val, data, verticalId, false);
              }
            });
          }

          switch (source) {
            case 'GOOGLE_CSE':
              results.push(ResultFactory.fromGoogleCustomSearchEngine(data));
              break;

            case 'BING_CSE':
              results.push(ResultFactory.fromBingCustomSearchEngine(data));
              break;

            case 'ZENDESK':
              results.push(ResultFactory.fromZendeskSearchEngine(data));
              break;

            case 'ALGOLIA':
              results.push(ResultFactory.fromAlgoliaSearchEngine(data));
              break;

            default:
              results.push(ResultFactory.fromGeneric(data, formattedData, i));
          }
        };

        for (var i = 0; i < resultsData.length; i++) {
          _loop(i);
        }

        return results;
      }
      /**
       * Converts an API result object into a generic result view model.
       * @param data
       * @param formattedData
       * @param index
       * @returns {Result}
       */

    }, {
      key: "fromGeneric",
      value: function fromGeneric(data, formattedData, index) {
        return new Result({
          raw: data,
          formatted: formattedData,
          title: formattedData.name || data.name,
          details: formattedData.description || this.truncate(data.description),
          link: data.website,
          id: data.id,
          ordinal: index + 1
        });
      }
      /**
       * Converts an API result object into a result view model.
       * Maps view model fields based on the API data for a Google Custom Search Engine object.
       * @param data
       * @returns {Result}
       */

    }, {
      key: "fromGoogleCustomSearchEngine",
      value: function fromGoogleCustomSearchEngine(data) {
        return new Result({
          raw: data,
          title: data.htmlTitle.replace(/(<([^>]+)>)/ig, ''),
          details: data.htmlSnippet,
          link: data.link
        });
      }
      /**
       * Converts an API result object into a result view model.
       * Maps view model fields based on the API data for a Bing Custom Search Engine object.
       * @param data
       * @returns {Result}
       */

    }, {
      key: "fromBingCustomSearchEngine",
      value: function fromBingCustomSearchEngine(data) {
        return new Result({
          raw: data,
          title: data.name,
          details: data.snippet,
          link: data.url
        });
      }
      /**
       * Converts an API result object into a result view model.
       * Maps view model fields based on the API data for a Zendesk Search Engine object.
       * @param data
       * @returns {Result}
       */

    }, {
      key: "fromZendeskSearchEngine",
      value: function fromZendeskSearchEngine(data) {
        return new Result({
          raw: data,
          title: data.title,
          details: data.snippet,
          link: data.html_url
        });
      }
      /**
       * Converts an API result object into a result view model.
       * Maps view model fields based on the API data for a Algolia Search Engine object.
       * Details field is set to objectID since response has only one general field objectID.
       * @param data
       * @returns {Result}
       */

    }, {
      key: "fromAlgoliaSearchEngine",
      value: function fromAlgoliaSearchEngine(data) {
        return new Result({
          raw: data,
          details: data.objectID,
          id: data.objectID
        });
      }
      /**
       * Truncates strings to 250 characters, attempting to preserve whole words
       * @param str {string} the string to truncate
       * @param limit {Number} the maximum character length to return
       * @param trailing {string} a trailing string to denote truncation, e.g. '...'
       * @param sep {string} the word separator
       * @returns {string}
       */

    }, {
      key: "truncate",
      value: function truncate(str) {
        var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
        var trailing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '...';
        var sep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ' ';

        if (!str || str.length <= limit) {
          return str;
        } // TODO (bmcginnis): split punctuation too so we don't end up with "foo,..."


        var words = str.split(sep);
        var max = limit - trailing.length;
        var truncated = '';

        for (var i = 0; i < words.length; i++) {
          var word = words[i];

          if (truncated.length + word.length > max || i !== 0 && truncated.length + word.length + sep.length > max) {
            truncated += trailing;
            break;
          }

          truncated += i === 0 ? word : sep + word;
        }

        return truncated;
      }
    }]);

    return ResultFactory;
  }();

  var Section =
  /*#__PURE__*/
  function () {
    function Section(data, url, formatters) {
      _classCallCheck(this, Section);

      this.searchState = SearchStates.SEARCH_COMPLETE;
      this.verticalConfigId = data.verticalConfigId || null;
      this.resultsCount = data.resultsCount || 0;
      this.encodedState = data.encodedState || '';
      this.appliedQueryFilters = AppliedQueryFilter.from(data.appliedQueryFilters);
      this.facets = data.facets || null;
      this.results = ResultFactory.from(data.results, formatters, this.verticalConfigId, data.source);
      this.map = Section.parseMap(data.results);
      this.verticalURL = url || null;
    }

    _createClass(Section, null, [{
      key: "parseMap",
      value: function parseMap(results) {
        var mapMarkers = [];
        var centerCoordinates = {};

        for (var j = 0; j < results.length; j++) {
          // TODO(billy) Remove legacy fallback from all data format
          var result = results[j].data || results[j];

          if (result && result.yextDisplayCoordinate) {
            if (!centerCoordinates.latitude) {
              centerCoordinates = {
                latitude: result.yextDisplayCoordinate.latitude,
                longitude: result.yextDisplayCoordinate.longitude
              };
            }

            mapMarkers.push({
              item: result,
              label: mapMarkers.length + 1,
              latitude: result.yextDisplayCoordinate.latitude,
              longitude: result.yextDisplayCoordinate.longitude
            });
          }
        }

        return {
          'mapCenter': centerCoordinates,
          'mapMarkers': mapMarkers
        };
      }
      /**
       * Create a section from the provided data
       * @param {Object|Array} modules The result modules
       * @param {Object} urls The tab urls
       * @param {Object.<string, function>} formatters Field formatters for results
       */

    }, {
      key: "from",
      value: function from(modules, urls, formatters) {
        var sections = [];

        if (!modules) {
          return sections;
        }

        if (!Array.isArray(modules)) {
          return new Section(modules, null, formatters);
        } // Our sections should contain a property of mapMarker objects


        for (var i = 0; i < modules.length; i++) {
          sections.push(new Section(modules[i], urls[modules[i].verticalConfigId], formatters));
        }

        return sections;
      }
    }]);

    return Section;
  }();

  var AppliedQueryFilter =
  /*#__PURE__*/
  function () {
    // Support legacy model and new model until fully migrated.
    // TODO(billy) Remove the left expression during assignment when migrated.
    function AppliedQueryFilter(appliedQueryFilter) {
      _classCallCheck(this, AppliedQueryFilter);

      this.key = appliedQueryFilter.key || appliedQueryFilter.displayKey;
      this.value = appliedQueryFilter.value || appliedQueryFilter.displayValue;
    }

    _createClass(AppliedQueryFilter, null, [{
      key: "from",
      value: function from(appliedQueryFilters) {
        var filters = [];

        for (var i = 0; i < appliedQueryFilters.length; i++) {
          filters.push(new AppliedQueryFilter(appliedQueryFilters[i]));
        }

        return filters;
      }
    }]);

    return AppliedQueryFilter;
  }();

  var UniversalResults =
  /*#__PURE__*/
  function () {
    function UniversalResults(data) {
      _classCallCheck(this, UniversalResults);

      this.queryId = data.queryId || null;
      this.sections = data.sections || [];
      /**
       * The current state of the search, used to render different templates before, during,
       * and after loading
       * @type {string}
       */

      this.searchState = data.searchState || SearchStates.SEARCH_COMPLETE;
    }
    /**
     * Create universal results from server data
     * @param {Object} response The server response
     * @param {Object} urls The tab urls
     * @param {Object.<string, function>} formatters The field formatters to use
     */


    _createClass(UniversalResults, null, [{
      key: "from",
      value: function from(response, urls, formatters) {
        return new UniversalResults({
          queryId: response.queryId,
          sections: Section.from(response.modules, urls, formatters)
        });
      }
      /**
       * Construct a UnivervalResults object representing loading results
       * @return {UniversalResults}
       */

    }, {
      key: "searchLoading",
      value: function searchLoading() {
        return new UniversalResults({
          searchState: SearchStates.SEARCH_LOADING
        });
      }
    }]);

    return UniversalResults;
  }();

  /** @module DirectAnswer */
  var DirectAnswer =
  /*#__PURE__*/
  function () {
    function DirectAnswer() {
      var directAnswer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, DirectAnswer);

      Object.assign(this, directAnswer);
      Object.freeze(this);
    }
    /**
     * Create a DirectAnswer model from the given server data and formatters
     * @param {Object} response The server direct answer
     * @param {Object.<string, function>} formatters The formatters to apply to this direct answer
     */


    _createClass(DirectAnswer, null, [{
      key: "from",
      value: function from(response, formatters) {
        var data = _objectSpread({}, response);

        var answer = data.answer,
            relatedItem = data.relatedItem;

        if (answer && formatters[answer.fieldApiName]) {
          answer.value = formatters[answer.fieldApiName](answer.value, relatedItem.data.fieldValues, relatedItem.verticalConfigId, true);
        }

        return new DirectAnswer(data);
      }
    }]);

    return DirectAnswer;
  }();

  /** @module Navigation */
  var Navigation =
  /*#__PURE__*/
  function () {
    function Navigation(tabOrder) {
      _classCallCheck(this, Navigation);

      this.tabOrder = tabOrder || [];
      Object.freeze(this);
    }

    _createClass(Navigation, null, [{
      key: "from",
      value: function from(modules) {
        var nav = [];

        if (!modules || !Array.isArray(modules)) {
          return nav;
        }

        for (var i = 0; i < modules.length; i++) {
          nav.push(modules[i].verticalConfigId);
        }

        return new Navigation(nav);
      }
    }]);

    return Navigation;
  }();

  var VerticalResults =
  /*#__PURE__*/
  function () {
    function VerticalResults() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, VerticalResults);

      Object.assign(this, {
        searchState: SearchStates.SEARCH_COMPLETE
      }, data);
      Object.freeze(this);
    }
    /**
     * Append the provided results to the current results
     * @param {VerticalResults} results the results to append to the current results
     */


    _createClass(VerticalResults, [{
      key: "append",
      value: function append(results) {
        var merged = _objectSpread({}, this);

        merged.results = this.results.concat(results.results);
        merged.map.mapMarkers = this.map.mapMarkers.concat(results.map.mapMarkers);
        return new VerticalResults(merged);
      }
      /**
       * Create vertical results from server data
       * @param {Object} response The server response
       * @param {Object.<string, function>} formatters The field formatters to use
       */

    }], [{
      key: "from",
      value: function from(response, formatters) {
        return new VerticalResults(Section.from(response, null, formatters));
      }
      /**
       * Construct a VerticalResults object representing loading results
       * @return {VerticalResults}
       */

    }, {
      key: "searchLoading",
      value: function searchLoading() {
        return new VerticalResults({
          searchState: SearchStates.SEARCH_LOADING
        });
      }
    }, {
      key: "areDuplicateNamesAllowed",
      value: function areDuplicateNamesAllowed() {
        return true;
      }
    }]);

    return VerticalResults;
  }();

  /**
   * SpellCheck is the core state model
   * to power the SpellCheck component
   */

  var SpellCheck =
  /*#__PURE__*/
  function () {
    function SpellCheck(data) {
      _classCallCheck(this, SpellCheck);

      /**
       * The original query
       * @type {string}
       */
      this.query = data.query || null;
      /**
       * The corrected query
       * @type {string}
       */

      this.correctedQuery = data.correctedQuery || null;
      /**
       * The corrected query with highlighted tags
       * @type {string}
       */

      this.correctedQueryDisplay = data.correctedQueryDisplay || null;
      /**
       * The spell check type
       * @type {string}
       */

      this.type = data.type || null;
      /**
       * Should show spell check or not
       * @type {boolean}
       */

      this.shouldShow = this.correctedQuery !== null;
    }
    /**
     * Create a spell check model from the provided data
     * @param {Object} response The spell check response
     */


    _createClass(SpellCheck, null, [{
      key: "from",
      value: function from(response) {
        if (!response) {
          return {};
        }

        return new SpellCheck({
          query: response.originalQuery,
          correctedQuery: response.correctedQuery,
          correctedQueryDisplay: new HighlightedValue(response.correctedQuery).get(),
          type: response.type
        });
      }
    }]);

    return SpellCheck;
  }();

  /** @module StorageKeys */

  /**
   * StorageKeys is an ENUM are considered the root context
   * for how data is stored and scoped in the storage.
   *
   * @enum {string}
   */
  var StorageKeys = {
    NAVIGATION: 'navigation',
    UNIVERSAL_RESULTS: 'universal-results',
    VERTICAL_RESULTS: 'vertical-results',
    AUTOCOMPLETE: 'autocomplete',
    DIRECT_ANSWER: 'direct-answer',
    FILTER: 'filter',
    QUERY: 'query',
    QUERY_ID: 'query-id',
    FACET_FILTER: 'facet-filter',
    DYNAMIC_FILTERS: 'dynamic-filters',
    SEARCH_LIMIT: 'search-limit',
    PARAMS: 'params',
    GEOLOCATION: 'geolocation',
    INTENTS: 'intents',
    QUESTION_SUBMISSION: 'question-submission',
    SPELL_CHECK: 'spell-check'
  };

  /** @module DynamicFilters */

  /**
   * Model representing a set of dynamic filters
   */
  var DynamicFilters =
  /*#__PURE__*/
  function () {
    function DynamicFilters(data) {
      _classCallCheck(this, DynamicFilters);

      /**
       * The list of filters this model holds
       * @type {{label: string, fieldId: string, options: object[]}}
       */
      this.filters = data.filters || [];
      Object.freeze(this);
    }
    /**
     * Organize 'facets' from the api response into dynamic filters
     * @param {Object} response dynamic filter response from the api
     * @returns {DynamicFilters}
     */


    _createClass(DynamicFilters, null, [{
      key: "from",
      value: function from(response) {
        var facets = response.facets;
        var dynamicFilters = facets.map(function (f) {
          return {
            label: f['displayName'],
            fieldId: f['fieldId'],
            options: f.options.map(function (o) {
              return {
                label: o['displayName'],
                countLabel: o['count'],
                selected: o['selected'],
                filter: o['filter']
              };
            })
          };
        });
        return new DynamicFilters({
          filters: dynamicFilters
        });
      }
    }]);

    return DynamicFilters;
  }();

  /** @module SearchIntents */
  var SearchIntents =
  /*#__PURE__*/
  function () {
    function SearchIntents(intents) {
      _classCallCheck(this, SearchIntents);

      /**
       * The intent to find results based on the user's location
       * @type {boolean}
       */
      this.nearMe = intents.nearMe;
      Object.freeze(this);
    }
    /**
     * Create SearchIntents from server response
     * @param {Object} response The server response intents
     * @returns {SearchIntents}
     */


    _createClass(SearchIntents, null, [{
      key: "from",
      value: function from(response) {
        var intents = response || [];
        return new SearchIntents({
          nearMe: intents.includes('NEAR_ME')
        });
      }
    }]);

    return SearchIntents;
  }();

  /**
   * A Data Transformer that takes the response object from a Search request
   * And transforms in to a front-end oriented data structure that our
   * component library and core storage understand.
   */

  var SearchDataTransformer =
  /*#__PURE__*/
  function () {
    function SearchDataTransformer() {
      _classCallCheck(this, SearchDataTransformer);
    }

    _createClass(SearchDataTransformer, null, [{
      key: "transform",
      value: function transform(data) {
        var _ref;

        var urls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var formatters = arguments.length > 2 ? arguments[2] : undefined;
        var response = data.response;
        return _ref = {}, _defineProperty(_ref, StorageKeys.QUERY_ID, response.queryId), _defineProperty(_ref, StorageKeys.NAVIGATION, Navigation.from(response.modules)), _defineProperty(_ref, StorageKeys.DIRECT_ANSWER, DirectAnswer.from(response.directAnswer, formatters)), _defineProperty(_ref, StorageKeys.UNIVERSAL_RESULTS, UniversalResults.from(response, urls, formatters)), _defineProperty(_ref, StorageKeys.INTENTS, SearchIntents.from(response.searchIntents)), _defineProperty(_ref, StorageKeys.SPELL_CHECK, SpellCheck.from(response.spellCheck)), _ref;
      }
    }, {
      key: "transformVertical",
      value: function transformVertical(data, formatters) {
        var _ref2;

        return _ref2 = {}, _defineProperty(_ref2, StorageKeys.QUERY_ID, data.response.queryId), _defineProperty(_ref2, StorageKeys.NAVIGATION, new Navigation()), _defineProperty(_ref2, StorageKeys.VERTICAL_RESULTS, VerticalResults.from(data.response, formatters)), _defineProperty(_ref2, StorageKeys.DYNAMIC_FILTERS, DynamicFilters.from(data.response)), _defineProperty(_ref2, StorageKeys.INTENTS, SearchIntents.from(data.response.searchIntents)), _defineProperty(_ref2, StorageKeys.SPELL_CHECK, SpellCheck.from(data.response.spellCheck)), _ref2;
      }
    }]);

    return SearchDataTransformer;
  }();

  /** @module QuestionSubmission */

  /**
   * QuestionSubmission is the core state model
   * to power the QuestionSubmission component
   */
  var QuestionSubmission =
  /*#__PURE__*/
  function () {
    function QuestionSubmission() {
      var question = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var errors = arguments.length > 1 ? arguments[1] : undefined;

      _classCallCheck(this, QuestionSubmission);

      /**
       * The author of the question
       * @type {string}
       */
      this.name = question.name || null;
      /**
       * The email address of the question
       * @type {string}
       */

      this.email = question.email || null;
      /**
       * True if the privacy policy was approved
       * @type {boolean}
       */

      this.privacyPolicy = question.privacyPolicy || null;
      /**
       * The question to be sent to the server
       * @type {string}
       */

      this.questionText = question.questionText || null;
      /**
       * Alternative question meta information
       * @type {string}
       */

      this.questionDescription = question.questionDescription || null;
      /**
       * Contains any errors about the question submission
       * @type {object}
       */

      this.errors = errors || null;
      Object.freeze(this);
    }

    _createClass(QuestionSubmission, null, [{
      key: "submitted",
      value: function submitted() {
        return {
          questionSubmitted: true
        };
      }
    }, {
      key: "errors",
      value: function errors(question, _errors) {
        return QuestionSubmission(question, _errors);
      }
    }]);

    return QuestionSubmission;
  }();

  /**
   * Core is the main application container for all of the network and storage
   * related behaviors of the application.
   */

  var Core =
  /*#__PURE__*/
  function () {
    function Core() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Core);

      if (typeof config.apiKey !== 'string') {
        throw new Error('Missing required `apiKey`. Type must be {string}');
      }

      if (typeof config.experienceKey !== 'string') {
        throw new Error('Missing required `experienceKey`. Type must be {string}');
      }
      /**
       * A reference to the client API Key used for all requests
       * @type {string}
       * @private
       */


      this._apiKey = config.apiKey;
      /**
       * A reference to the client Answers Key used for all requests
       * @type {string}
       * @private
       */

      this._experienceKey = config.experienceKey;
      /**
       * The answers config version to use for all requests
       * @type {string}
       * @private
       */

      this._experienceVersion = config.experienceVersion;
      /**
       * A reference to the client locale used for all requests. If not specified, defaults to "en" (for
       * backwards compatibility).
       * @type {string}
       * @private
       */

      this._locale = config.locale || 'en';
      /**
       * A map of field formatters used to format results, if present
       * @type {Object.<string, function>}
       * @private
       */

      this._fieldFormatters = config.fieldFormatters || {};
      /**
       * A reference to the core data storage that powers the UI
       * @type {GlobalStorage}
       * @private
       */

      this.globalStorage = config.globalStorage;
      /**
       * A reference to the core persistent storage
       * @type {PersistentStorage}
       * @private
       */

      this.persistentStorage = config.persistentStorage;
      /**
       * An abstraction containing the integration with the RESTful search API
       * For both vertical and universal search
       * @type {Search}
       * @private
       */

      this._searcher = new SearchApi({
        apiKey: this._apiKey,
        experienceKey: this._experienceKey,
        experienceVersion: this._experienceVersion,
        locale: this._locale
      });
      /**
       * An abstraction containing the integration with the RESTful autocomplete API
       * For filter search, vertical autocomplete, and universal autocomplete
       * @type {Autocomplete}
       * @private
       */

      this._autoComplete = new AutoCompleteApi({
        apiKey: this._apiKey,
        experienceKey: this._experienceKey,
        experienceVersion: this._experienceVersion,
        locale: this._locale
      });
      /**
       * An abstraction for interacting with the Q&A rest interface
       * @type {QuestionAnswerApi}
       * @private
       */

      this._questionAnswer = new QuestionAnswerApi({
        apiKey: this._apiKey
      });
    }
    /**
     * Search in the context of a vertical
     * @param {string} verticalKey vertical ID for the search
     * @param {object} query The query details
     * @param {string} query.input The input to search for
     * @param {string} query.filter The filter to use in the search
     * @param {string} query.facetFilter The facet filter to use in the search
     * @param {number} query.limit The max number of results to include, max of 50
     * @param {number} query.offset The results offset, for fetching more results of the same query
     * @param {string} query.id The query ID to use. If paging within a query, the same ID should be used
     * @param {boolean} query.append If true, adds the results of this query to the end of the current results, defaults false
     */


    _createClass(Core, [{
      key: "verticalSearch",
      value: function verticalSearch(verticalKey, query) {
        var _this = this;

        if (!query.append) {
          this.globalStorage.set(StorageKeys.VERTICAL_RESULTS, VerticalResults.searchLoading());
          this.globalStorage.set(StorageKeys.SPELL_CHECK, {});
        }

        return this._searcher.verticalSearch(verticalKey, _objectSpread({
          limit: this.globalStorage.getState(StorageKeys.SEARCH_LIMIT),
          geolocation: this.globalStorage.getState(StorageKeys.GEOLOCATION)
        }, query, {
          isDynamicFiltersEnabled: this._isDynamicFiltersEnabled,
          skipSpellCheck: this.globalStorage.getState('skipSpellCheck'),
          queryTrigger: this.globalStorage.getState('queryTrigger')
        })).then(function (response) {
          return SearchDataTransformer.transformVertical(response, _this._fieldFormatters);
        }).then(function (data) {
          _this.globalStorage.set(StorageKeys.QUERY_ID, data[StorageKeys.QUERY_ID]);

          _this.globalStorage.set(StorageKeys.NAVIGATION, data[StorageKeys.NAVIGATION]);

          _this.globalStorage.set(StorageKeys.INTENTS, data[StorageKeys.INTENTS]);

          if (query.append) {
            var mergedResults = _this.globalStorage.getState(StorageKeys.VERTICAL_RESULTS).append(data[StorageKeys.VERTICAL_RESULTS]);

            _this.globalStorage.set(StorageKeys.VERTICAL_RESULTS, mergedResults);
          } else {
            _this.globalStorage.set(StorageKeys.VERTICAL_RESULTS, data[StorageKeys.VERTICAL_RESULTS]);
          }

          if (data[StorageKeys.DYNAMIC_FILTERS]) {
            _this.globalStorage.set(StorageKeys.DYNAMIC_FILTERS, data[StorageKeys.DYNAMIC_FILTERS]);
          }

          if (data[StorageKeys.SPELL_CHECK]) {
            _this.globalStorage.set(StorageKeys.SPELL_CHECK, data[StorageKeys.SPELL_CHECK]);
          }

          _this.globalStorage["delete"]('skipSpellCheck');

          _this.globalStorage["delete"]('queryTrigger');
        });
      }
    }, {
      key: "search",
      value: function search(queryString, urls) {
        var _this2 = this;

        this.globalStorage.set(StorageKeys.UNIVERSAL_RESULTS, UniversalResults.searchLoading());
        this.globalStorage.set(StorageKeys.SPELL_CHECK, {});
        return this._searcher.universalSearch(queryString, {
          geolocation: this.globalStorage.getState(StorageKeys.GEOLOCATION),
          skipSpellCheck: this.globalStorage.getState('skipSpellCheck'),
          queryTrigger: this.globalStorage.getState('queryTrigger')
        }).then(function (response) {
          return SearchDataTransformer.transform(response, urls, _this2._fieldFormatters);
        }).then(function (data) {
          _this2.globalStorage.set(StorageKeys.QUERY_ID, data[StorageKeys.QUERY_ID]);

          _this2.globalStorage.set(StorageKeys.NAVIGATION, data[StorageKeys.NAVIGATION]);

          _this2.globalStorage.set(StorageKeys.DIRECT_ANSWER, data[StorageKeys.DIRECT_ANSWER]);

          _this2.globalStorage.set(StorageKeys.UNIVERSAL_RESULTS, data[StorageKeys.UNIVERSAL_RESULTS], urls);

          _this2.globalStorage.set(StorageKeys.INTENTS, data[StorageKeys.INTENTS]);

          _this2.globalStorage.set(StorageKeys.QUESTION_SUBMISSION, new QuestionSubmission({
            questionText: queryString
          }));

          _this2.globalStorage.set(StorageKeys.SPELL_CHECK, data[StorageKeys.SPELL_CHECK]);

          _this2.globalStorage["delete"]('skipSpellCheck');

          _this2.globalStorage["delete"]('queryTrigger');
        });
      }
      /**
       * Given an input, query for a list of similar results and set into storage
       *
       * @param {string} input     the string to autocomplete
       * @param {string} namespace the namespace to use for the storage key
       */

    }, {
      key: "autoCompleteUniversal",
      value: function autoCompleteUniversal(input, namespace) {
        var _this3 = this;

        return this._autoComplete.queryUniversal(input).then(function (data) {
          _this3.globalStorage.set("".concat(StorageKeys.AUTOCOMPLETE, ".").concat(namespace), data);
        });
      }
      /**
       * Given an input, query for a list of similar results in the provided vertical
       * and set into storage
       *
       * @param {string} input       the string to autocomplete
       * @param {string} namespace the namespace to use for the storage key
       * @param {string} verticalKey the vertical key for the experience
       * @param {string} barKey      the bar key for the experience
       */

    }, {
      key: "autoCompleteVertical",
      value: function autoCompleteVertical(input, namespace, verticalKey, barKey) {
        var _this4 = this;

        return this._autoComplete.queryVertical(input, verticalKey, barKey).then(function (data) {
          _this4.globalStorage.set("".concat(StorageKeys.AUTOCOMPLETE, ".").concat(namespace), data);
        });
      }
      /**
       * Given an input, provide a list of suitable filters for autocompletion
       *
       * @param {string} input  the string to search for filters with
       * @param {object} config  the config to serach for filters with
       * @param {string} config.namespace  the namespace to use for the storage key
       * @param {string} config.verticalKey the vertical key for the config
       * @param {string} config.barKey  the bar key for the config v1
       * @param {object} config.searchParameters  the search parameters for the config v2
       */

    }, {
      key: "autoCompleteFilter",
      value: function autoCompleteFilter(input, config) {
        var _this5 = this;

        return this._autoComplete.queryFilter(input, config).then(function (data) {
          _this5.globalStorage.set("".concat(StorageKeys.AUTOCOMPLETE, ".").concat(config.namespace), data);
        });
      }
      /**
       * Submits a question to the server and updates the underlying question model
       * @param {object} question The question object to submit to the server
       * @param {number} question.entityId The entity to associate with the question (required)
       * @param {string} question.lanuage The language of the question
       * @param {string} question.site The "publisher" of the (e.g. 'FIRST_PARTY')
       * @param {string} question.name The name of the author
       * @param {string} question.email The email address of the author
       * @param {string} question.questionText The question
       * @param {string} question.questionDescription Additional information about the question
       */

    }, {
      key: "submitQuestion",
      value: function submitQuestion(question) {
        var _this6 = this;

        return this._questionAnswer.submitQuestion(question).then(function (data) {
          _this6.globalStorage.set(StorageKeys.QUESTION_SUBMISSION, QuestionSubmission.submitted());
        });
      }
      /**
       * Stores the given query into storage, to be used for the next search
       * @param {string} query the query to store
       */

    }, {
      key: "setQuery",
      value: function setQuery(query) {
        this.globalStorage.set(StorageKeys.QUERY, query);
      }
      /**
       * Stores the provided query ID, to be used in analytics
       * @param {string} queryId The query id to store
       */

    }, {
      key: "setQueryId",
      value: function setQueryId(queryId) {
        this.globalStorage.set(StorageKeys.QUERY_ID, queryId);
      }
      /**
       * Stores the given filter into storage, to be used for the next search
       *
       * @param {string} namespace the namespace to use for the storage key
       * @param {Filter} filter    the filter to set
       */

    }, {
      key: "setFilter",
      value: function setFilter(namespace, filter) {
        this.globalStorage.set("".concat(StorageKeys.FILTER, ".").concat(namespace), filter);
      }
    }, {
      key: "setFacetFilter",
      value: function setFacetFilter(namespace, filter) {
        this.globalStorage.set("".concat(StorageKeys.FACET_FILTER, ".").concat(namespace), filter);
      }
    }, {
      key: "enableDynamicFilters",
      value: function enableDynamicFilters() {
        this._isDynamicFiltersEnabled = true;
      }
    }, {
      key: "setSearchLimit",
      value: function setSearchLimit(limit) {
        this.globalStorage.set(StorageKeys.SEARCH_LIMIT, limit);
      }
    }, {
      key: "on",
      value: function on(evt, moduleId, cb) {
        return this.globalStorage.on(evt, moduleId, cb);
      }
    }]);

    return Core;
  }();

  /**
   * ComponentManager is a Singletone that contains both an internal registry of
   * eligible components to be created, as well as keeps track of the current
   * instantiated and active components.
   *
   * ALL components should be constructed using the {ComponentManager} via its `create` method.
   */

  var ComponentManager =
  /*#__PURE__*/
  function () {
    function ComponentManager() {
      _classCallCheck(this, ComponentManager);

      if (!ComponentManager.setInstance(this)) {
        return ComponentManager.getInstance();
      }
      /**
       * The component registry is an internal map, that contains
       * all available component CLASSES used for creation or override.
       * Each component class has a unique TYPE, which is used as the key for the registry
       * @type {Object}
       */


      this._componentRegistry = {};
      /**
       * The active components is an internal container to keep track
       * of all of the components that have been constructed
       */

      this._activeComponents = [];
      /**
       * A local reference to the core library dependency
       *
       * The Core contains both the storage AND services that are needed for performing operations
       * like search and auto complete.
       *
       * The storage is the source of truth for the state of ALL components.
       * Whenever the storage is updated, the state gets pushed down to the necessary components.
       * @type {Core}
       */

      this._core = null;
      /**
       * The primary renderer to use for all components
       * @type {HandlebarsRenderer}
       */

      this._renderer = null;
      /**
       * A local reference to the analytics reporter dependency
       */

      this._analyticsReporter = null;
    }

    _createClass(ComponentManager, [{
      key: "setRenderer",
      value: function setRenderer(renderer) {
        this._renderer = renderer;
        return this;
      }
    }, {
      key: "setCore",
      value: function setCore(core) {
        this._core = core;
        return this;
      }
    }, {
      key: "setAnalyticsReporter",
      value: function setAnalyticsReporter(reporter) {
        this._analyticsReporter = reporter;
        return this;
      }
      /**
       * registers a component to be eligible for creation and override.
       * @param {Component} The Component Class to register
       */

    }, {
      key: "register",
      value: function register(componentClazz) {
        this._componentRegistry[componentClazz.type] = componentClazz;
        return this;
      }
      /**
       * create is the entry point for constructing any and all components.
       * It will instantiate a new instance of the component, and both apply
       * initial state from the storage and bind it to the storage for updates.
       * @param {string} componentType The component type to create
       * @param {Object} opts The options to pipe to the construction of the component
       */

    }, {
      key: "create",
      value: function create(componentType, opts) {
        // Every component needs local access to the component manager
        // because sometimes components have subcomponents that need to be
        // constructed during creation
        var systemOpts = {
          core: this._core,
          renderer: this._renderer,
          analyticsReporter: this._analyticsReporter,
          componentManager: this
        };
        var componentClass = this._componentRegistry[componentType];

        if (!componentClass.areDuplicateNamesAllowed() && this._activeComponents.some(function (c) {
          return c.name === opts.name;
        })) {
          throw new AnswersComponentError("Another component with name ".concat(opts.name, " already exists"), componentType);
        }

        var config = _objectSpread({
          isTwin: this._activeComponents.some(function (component) {
            return component.constructor.type === componentType;
          })
        }, opts); // Instantiate our new component and keep track of it


        var component = new this._componentRegistry[componentType](config, systemOpts).init(config);

        this._activeComponents.push(component); // If there is a global storage to power state, apply the state
        // from the storage to the component, and then bind the component
        // state to the storage via its updates


        if (this._core && this._core.globalStorage !== null) {
          if (component.moduleId === undefined || component.moduleId === null) {
            return component;
          }

          this._core.globalStorage.on('update', component.moduleId, function (data) {
            component.setState(data);
          });
        }

        return component;
      }
      /**
       * Remove the provided component from the list of active components and remove
       * the associated storage event listener
       * @param {Component} component The component to remove
       */

    }, {
      key: "remove",
      value: function remove(component) {
        this._core.globalStorage.off('update', component.moduleId);

        var index = this._activeComponents.findIndex(function (c) {
          return c.name === component.name;
        });

        this._activeComponents.splice(index, 1);
      }
      /**
       * Remove the component with the given name
       * @param {string} name The name of the compnent to remove
       */

    }, {
      key: "removeByName",
      value: function removeByName(name) {
        var component = this._activeComponents.find(function (c) {
          return c.name === name;
        });

        component.remove();
        DOM.empty(component._container);
      }
    }, {
      key: "getActiveComponent",
      value: function getActiveComponent(type) {
        return this._activeComponents.find(function (c) {
          return c.constructor.type === type;
        });
      }
    }], [{
      key: "setInstance",
      value: function setInstance(instance) {
        if (!this.instance) {
          this.instance = instance;
          return true;
        }

        return false;
      }
    }, {
      key: "getInstance",
      value: function getInstance() {
        return this.instance;
      }
    }]);

    return ComponentManager;
  }();

  /** @module Renderer */

  /**
   * Renderer is an abstract class that all Renderers should extend and implement
   */
  var Renderer =
  /*#__PURE__*/
  function () {
    function Renderer() {
      _classCallCheck(this, Renderer);
    }

    _createClass(Renderer, [{
      key: "render",

      /**
       * render is a core method for all renderers.
       * All implementations should override this class
       * @param {string} template
       * @param {object} data
       */
      value: function render(template, data) {
        return template;
      }
    }, {
      key: "registerHelper",
      value: function registerHelper(name, cb) {}
    }, {
      key: "compile",
      value: function compile(template) {}
    }]);

    return Renderer;
  }();

  /**
   * HandlebarsRenderer is a wrapper around the nativate handlebars renderer.
   * @extends Renderer
   */

  var HandlebarsRenderer =
  /*#__PURE__*/
  function (_Renderer) {
    _inherits(HandlebarsRenderer, _Renderer);

    function HandlebarsRenderer() {
      var _this;

      var templates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, HandlebarsRenderer);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(HandlebarsRenderer).call(this));
      /**
       * A local reference to the handlebars compiler
       * @type {Handlebars}
       * @private
       */

      _this._handlebars = templates._hb || null;
      /**
       * A local reference to the pre-compiled handlebars templates
       * @type {Handlebars}
       * @private
       */

      _this._templates = templates || {};
      return _this;
    }

    _createClass(HandlebarsRenderer, [{
      key: "init",
      value: function init(templates) {
        // Assign the handlebars compiler and templates based on
        // information provided from external dep (in default case, it comes from external server request)
        this._handlebars = templates._hb;
        this._templates = templates; // TODO(billy) Once we re-write templates using the new helpers library
        // we probably don't need these custom helpers anymore

        this._registerCustomHelpers();
      }
      /**
       * registerHelper is a public interface for external dependencies to
       * register their own custom helpers to our internal Handlebars Compiler
       */

    }, {
      key: "registerHelper",
      value: function registerHelper(name, cb) {
        this._handlebars.registerHelper(name, cb);
      }
      /**
       * compile a handlebars template so that it can be rendered,
       * using the {Handlebars} compiler
       * @param {string} template The template string to compile
       */

    }, {
      key: "compile",
      value: function compile(template) {
        if (typeof template !== 'string') {
          return '';
        }

        return this._handlebars.compile(template);
      }
      /**
       * render will render a template with data
       * @param {Object} config Provide either a templateName or a pre-compiled template
       * @param {Object} data The data to provide to the template
       */

    }, {
      key: "render",
      value: function render(config, data) {
        // If a custom template is provided, use it,
        // otherwise fall back to the template name
        // TODO(billy) This interface should probably be less ugly
        if (config.template !== null) {
          return config.template(data);
        }

        try {
          return this._templates[config.templateName](data);
        } catch (e) {
          throw new Error('Can not find/render template: ' + config.templateName, e);
        }
      }
    }, {
      key: "_registerCustomHelpers",
      value: function _registerCustomHelpers() {
        this.registerHelper('ifeq', function (arg1, arg2, options) {
          return arg1 === arg2 ? options.fn(this) : options.inverse(this);
        });
        this.registerHelper('ifnoteq', function (arg1, arg2, options) {
          return arg1 !== arg2 ? options.fn(this) : options.inverse(this);
        });
        this.registerHelper('formatPhoneNumber', function (phoneNumberString) {
          var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
          var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);

          if (match) {
            var intlCode = match[1] ? '+1 ' : '';
            return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
          }

          return null;
        });
        this.registerHelper('assign', function (name, value, options) {
          var args = arguments;
          options = args[args.length - 1];

          if (!options.data.root) {
            options.data.root = {};
          }

          var v = '';

          for (var i = 1; i < args.length - 1; i++) {
            v = v + args[i];
          }

          options.data.root[name] = v;
        });
        this.registerHelper('json', function (name, value, options) {
          return name === undefined ? '' : JSON.stringify(name);
        });
      }
    }]);

    return HandlebarsRenderer;
  }(Renderer);

  /** @module */
  // E.g. Mustache, SOY, HandleBars, React, etc.

  var Renderers = {
    SOY: Renderer,
    Handlebars: HandlebarsRenderer
  };

  /** @module DOM */

  /* global HTMLElement, HTMLDocument, Window, Event */
  var document$1 = window.document;
  /**
   * Static interface for interacting with the DOM API.
   * @namespace
   */

  var DOM =
  /*#__PURE__*/
  function () {
    function DOM() {
      _classCallCheck(this, DOM);
    }

    _createClass(DOM, null, [{
      key: "setup",
      value: function setup(d, p) {
        document$1 = d;
      }
      /**
       * create a HTMLElement from and HTML string
       * @param {string} html The HTML to parse to a DOM node.
       * @return {HTMLElement}
       */

    }, {
      key: "create",
      value: function create(html) {
        if ('createRange' in document$1) {
          // prefer this implementation as it has wider browser support
          // and it's better performing.
          // see https://davidwalsh.name/convert-html-stings-dom-nodes
          var container = document$1.createElement('div');
          var frag = document$1.createRange().createContextualFragment(html);
          container.appendChild(frag);
          return container;
        } // fallback to this because of a bug in jsdom that causes tests to fail
        // see: https://github.com/jsdom/jsdom/issues/399


        return new DOMParser().parseFromString(html, 'text/html').body;
      }
      /**
       * query the DOM for a given css selector
       * @param {HTMLElement} parent Optional context to use for a search. Defaults to document if not provided.
       * @param {string} selector the CSS selector to query for
       *
       * @returns {HTMLElement} the FIRST node it finds, if any
       */

    }, {
      key: "query",
      value: function query(parent, selector) {
        // Facade, shifting the selector to the parent argument if only one
        // argument is provided
        if (selector === undefined) {
          selector = parent;
          parent = document$1;
        }

        if (selector instanceof HTMLElement || selector instanceof Window || selector instanceof HTMLDocument) {
          return selector;
        }

        return parent.querySelector(selector);
      }
      /**
       * query the DOM for a given css selector
       * @param {HTMLElement} parent Optional context to use for a search. Defaults to document if not provided.
       * @param {string} selector the CSS selector to query for
       *
       * @returns {Array} the FIRST node it finds, if any
       */

    }, {
      key: "queryAll",
      value: function queryAll(parent, selector) {
        // Facade, shifting the selector to the parent argument if only one
        // argument is provided
        if (selector === undefined) {
          selector = parent;
          parent = document$1;
        } // handle the case where client code is using a pointer to a dom node and it's null, e.g. this._container


        if (parent == null) {
          parent = document$1;
        }

        if (selector instanceof HTMLElement || selector instanceof HTMLDocument || selector instanceof Window) {
          return [selector];
        }

        return Array.from(parent.querySelectorAll(selector));
      }
    }, {
      key: "onReady",
      value: function onReady(cb) {
        if (document$1.readyState === 'complete' || document$1.readyState === 'loaded' || document$1.readyState === 'interactive') {
          cb();
          return;
        }

        DOM.on(document$1, 'DOMContentLoaded', cb);
      }
      /**
       * createEle will create a {HTMLElement} and apply the properties attributes through an object provided.
       * @param {string} el The element `tag` name to construct
       * @param {Object} opts_data Optional attributes to apply to the new HTMLElement
       */

    }, {
      key: "createEl",
      value: function createEl(el) {
        var opts_data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var node = document$1.createElement(el);
        var props = Object.keys(opts_data);

        for (var i = 0; i < props.length; i++) {
          if (props[i] === 'class') {
            DOM.addClass(node, opts_data[props[i]]);
            continue;
          }

          node[props[i]] = opts_data[props[i]];
        }

        return node;
      }
    }, {
      key: "append",
      value: function append(parent, node) {
        if (node === undefined) {
          node = parent;
          parent = document$1;
        }

        if (typeof parent === 'string') {
          parent = DOM.query(parent);
        } // Support HTML injection as well as HTMLElement appends


        if (typeof node === 'string') {
          parent.insertAdjacentHTML('afterBegin', node);
        } else {
          parent.appendChild(node);
        }
      }
    }, {
      key: "addClass",
      value: function addClass(node, className) {
        var classes = className.split(',');
        var len = classes.length;

        for (var i = 0; i < len; i++) {
          node.classList.add(classes[i]);
        }
      }
    }, {
      key: "empty",
      value: function empty(parent) {
        parent.innerHTML = '';
      }
    }, {
      key: "css",
      value: function css(selector, styles) {
        var node = DOM.query(selector);

        for (var prop in styles) {
          node.style[prop] = styles[prop];
        }
      }
    }, {
      key: "attr",
      value: function attr(selector, _attr, val) {
        DOM.query(selector).setAttribute(_attr, val);
      }
    }, {
      key: "attributes",
      value: function attributes(selector, attrs) {
        var _this = this;

        Object.entries(attrs).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              attr = _ref2[0],
              val = _ref2[1];

          return _this.attr(selector, attr, val);
        });
      }
    }, {
      key: "trigger",
      value: function trigger(selector, event, settings) {
        var e = new Event(event, Object.assign({
          'bubbles': true,
          'cancelable': true
        }, settings || {}));
        DOM.query(selector).dispatchEvent(e);
      }
    }, {
      key: "on",
      value: function on(selector, evt, handler) {
        DOM.query(selector).addEventListener(evt, handler);
      }
    }, {
      key: "once",
      value: function once(selector, evt, handler) {
        DOM.query(selector).addEventListener(evt, handler, {
          once: true
        });
      }
    }, {
      key: "off",
      value: function off(selector, evt, handler) {
        DOM.query(selector).removeEventListener(evt, handler);
      }
    }, {
      key: "delegate",
      value: function delegate(ctxt, selector, evt, handler) {
        var el = DOM.query(ctxt);
        el.addEventListener(evt, function (event) {
          var target = event.target;

          while (!target.isEqualNode(el)) {
            if (target.matches(selector)) {
              handler(event, target);
              break;
            }

            target = target.parentNode;
          }
        });
      }
    }]);

    return DOM;
  }();

  /** @module EventEmitter */

  /**
   * EventEmitter is a base class for any object that wants to expose
   * a pub/sub interface, for emitting messages and providing listeners.
   */
  var EventEmitter =
  /*#__PURE__*/
  function () {
    function EventEmitter() {
      _classCallCheck(this, EventEmitter);

      /**
       * The subscribers of messages
       * @type {object[]}
       * @private
       */
      this._listeners = {};
    }
    /**
     * on is the public interface for subscribing events that are emitted.
     * @param {string} evt the event name to listen to
     * @param {function} cb The callback to invoke when the {evt} is emitted
     * @param {boolean} once Optional value which will only handle the message once
     */


    _createClass(EventEmitter, [{
      key: "on",
      value: function on(evt, cb, once) {
        if (typeof cb !== 'function') {
          throw new Error('callback handler should be of type {function}');
        }

        if (this._listeners[evt] === undefined) {
          this._listeners[evt] = [];
        }

        this._listeners[evt].push({
          event: evt,
          cb: cb,
          once: once || false
        });

        return this;
      }
      /**
       * once is the public interface for subscribing events that are emitted.
       * The handler will only be triggered once.
       *
       * @param {string} evt the event name to listen to
       * @param {function} cb The callback to invoke when the {evt} is emitted
       * @param {boolean} once Optional value which will only handle the message once
       */

    }, {
      key: "once",
      value: function once(evt, cb) {
        return this.on(evt, cb, true);
      }
      /**
       * off is the public interface for unsubscribing from an event
       * @param {string} evt the event name to unsubscribe from
       */

    }, {
      key: "off",
      value: function off(evt) {
        delete this._listeners[evt];
        return this;
      }
      /**
       * emit is the public interface for broadcasting messages/events
       * @param {string} evt the event name to publish from
       * @param {Object} data the data to send along to the subscribers
       */

    }, {
      key: "emit",
      value: function emit(evt, data) {
        var listeners = this._listeners[evt];

        if (listeners === undefined) {
          return;
        } // Invoke each of all the listener handlers and remove the ones that should fire only once.


        var keep = [];

        for (var i = 0; i < listeners.length; i++) {
          listeners[i].cb(data);

          if (listeners[i].once === true) {
            continue;
          } // Instead of having a 'dirty' array with deleted or 'undefined' entries,
          // we just create a brand new array without the listeners that were removed


          keep.push(listeners[i]);
        } // Update our old list of listeners to the newly created array


        this._listeners[evt] = keep;
        return this;
      }
    }]);

    return EventEmitter;
  }();

  /**
   * State contains the data for the component
   * and exposes an {EventEmitter} interface so that external
   * dependencies can listen/hook subscribe to messages/updates.
   * @extends EventEmitter
   */

  var State =
  /*#__PURE__*/
  function (_EventEmitter) {
    _inherits(State, _EventEmitter);

    function State(data) {
      var _this;

      _classCallCheck(this, State);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(State).call(this));
      /**
       * The initial state of the component
       * @type {Object}
       * @private
       */

      _this._state = data || {};
      return _this;
    }
    /**
     * Set the initial state of the component.
     * NOTE(billy): Does not fire an update message
     */


    _createClass(State, [{
      key: "init",
      value: function init(prop, optVal) {
        this._set(prop, optVal);
      }
      /**
       * setter for the state
       * @param prop {string|Object} The property to set
       * @param optVal Optional, if prop is a {string}, it will assign the value to that property
       */

    }, {
      key: "set",
      value: function set(prop, optVal) {
        this._set(prop, optVal);

        this.emit('update');
      }
      /**
       * setter for the state enables you to update a single property, or complete state
       * depending on the arguments provided.
       * @param prop {string|Object} The property to set
       * @param optVal If prop is a {string}, provide its value
       * @private
       */

    }, {
      key: "_set",
      value: function _set(prop, optVal) {
        if (optVal === undefined) {
          this._state = prop;
        } else {
          this._state[prop] = optVal;
        }
      }
    }, {
      key: "update",
      value: function update(data) {
        this._state = data;
        this.emit('update');
      }
      /**
       * Retrieve a properties value from the state
       * If no property provided, return the full state
       * @param {string} optProp optional property to retrieve
       */

    }, {
      key: "get",
      value: function get(optProp) {
        if (optProp === undefined) {
          return this._state;
        }

        return this._state[optProp];
      }
    }, {
      key: "has",
      value: function has(prop) {
        return this._state[prop] !== undefined;
      }
    }, {
      key: "asJSON",
      value: function asJSON() {
        return this._state;
      }
    }]);

    return State;
  }(EventEmitter);

  /**
   * Model for the analytics event type
   */
  var AnalyticsEvent =
  /*#__PURE__*/
  function () {
    function AnalyticsEvent(type, label) {
      _classCallCheck(this, AnalyticsEvent);

      /**
       * The type of event to report
       * @type {string}
       */
      this.eventType = type.toUpperCase();
      /**
       * An optional label to be provided for the event
       * @type {string}
       */

      if (label) {
        this.label = label;
      }
    }
    /**
     * Adds the provided options to the event
     * @param {object} options Additional options for the event
     */


    _createClass(AnalyticsEvent, [{
      key: "addOptions",
      value: function addOptions(options) {
        Object.assign(this, options);
        return this;
      }
      /**
       * Return the event in the api format, typically for reporting to the api
       */

    }, {
      key: "toApiEvent",
      value: function toApiEvent() {
        return Object.assign({}, this);
      }
    }]);

    return AnalyticsEvent;
  }();

  /**
   * Class for reporting analytics events to the server
   */

  var AnalyticsReporter =
  /*#__PURE__*/
  function () {
    function AnalyticsReporter(core, experienceKey, experienceVersion, businessId) {
      var _this = this;

      var globalOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      _classCallCheck(this, AnalyticsReporter);

      /**
       * The internal business identifier used for reporting
       * @type {number}
       */
      this._businessId = businessId;
      /**
       * Options to include with every analytic event reported to the server
       * @type {object}
       * @private
       */

      this._globalOptions = Object.assign({}, globalOptions, {
        experienceKey: experienceKey
      });

      if (experienceVersion) {
        this._globalOptions.experienceVersion = experienceVersion;
      } // listen to query id updates


      core.globalStorage.on('update', StorageKeys.QUERY_ID, function (id) {
        return _this.setQueryId(id);
      });
    }

    _createClass(AnalyticsReporter, [{
      key: "setQueryId",
      value: function setQueryId(queryId) {
        this._globalOptions.queryId = queryId;
      }
    }, {
      key: "report",
      value: function report(event) {
        if (!(event instanceof AnalyticsEvent)) {
          throw new AnswersAnalyticsError('Tried to send invalid analytics event', event);
        }

        event.addOptions(this._globalOptions);
        return new HttpRequester().beacon("".concat(ANALYTICS_BASE_URL, "/realtimeanalytics/data/answers/").concat(this._businessId), {
          'data': event.toApiEvent()
        });
      }
    }]);

    return AnalyticsReporter;
  }();

  /**
   * ModuleData is used as a generic model for Storage.
   * Typically an instance of ModuleData powers a single component.

   * A data model that exposes an event emitter interface.
   * @extends EventEmitter
   */

  var ModuleData =
  /*#__PURE__*/
  function (_EventEmitter) {
    _inherits(ModuleData, _EventEmitter);

    function ModuleData(id) {
      var _this;

      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, ModuleData);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ModuleData).call(this));
      _this._id = id;
      _this._history = [];
      _this._data = data;

      _this.set(data);

      return _this;
    }
    /**
     * replaces the currently held data with the given data
     * @param {*} data the data to replace the current data
     */


    _createClass(ModuleData, [{
      key: "set",
      value: function set(data) {
        this.capturePrevious();

        if (_typeof(data) !== 'object' || Array.isArray(data) || Object.keys(data).length !== Object.keys(this._data).length) {
          this._data = data;
          this.emit('update', this._data);
          return;
        } // check for shallow equality


        for (var _i = 0, _Object$keys = Object.keys(data); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];

          if (this._data[key] !== data[key]) {
            this._data = data;
            this.emit('update', this._data);
            return;
          }
        }
      }
    }, {
      key: "capturePrevious",
      value: function capturePrevious() {
        if (this._history === undefined) {
          this._history = [];
        }

        if (this._history.length + 1 > 5) {
          this._history.shift();
        } // If data is ever undefined, we default to empty object


        this._history.push(JSON.stringify(this._data || {}));
      }
    }, {
      key: "undo",
      value: function undo() {
        var previous = {};

        if (this._previous.length > 0) {
          previous = JSON.parse(this._previous.pop());
        }

        this._data.set(previous);
      }
    }, {
      key: "raw",
      value: function raw() {
        return this._data;
      }
    }]);

    return ModuleData;
  }(EventEmitter);

  /**
   * Storage is a container around application state.
   * It exposes an interface for CRUD operations as well as listening
   * for stateful changes.
   */

  var GlobalStorage =
  /*#__PURE__*/
  function () {
    function GlobalStorage() {
      _classCallCheck(this, GlobalStorage);

      this._moduleDataContainer = {};
      this._futureListeners = {};
    }
    /**
     * Set the data in storage with the given key to the provided data,
     * completely overwriting any existing data.
     * @param {string} key the storage key to set
     * @param {*} data the data to set
     */


    _createClass(GlobalStorage, [{
      key: "set",
      value: function set(key, data) {
        this._initDataContainer(key, data);

        this._moduleDataContainer[key].set(data);
      }
      /**
       * Add all key/value pairs in the provided map to the storage
       * @param {*} data The key/value pairs to set in the storage
       */

    }, {
      key: "setAll",
      value: function setAll(data) {
        for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              val = _Object$entries$_i[1];

          this.set(key, val);
        }
      }
    }, {
      key: "_initDataContainer",
      value: function _initDataContainer(key, data) {
        if (key === undefined || key === null || typeof key !== 'string') {
          throw new AnswersStorageError('Invalid storage key provided', key, data);
        }

        if (data === undefined || data === null) {
          throw new AnswersStorageError('No data provided', key, data);
        }

        if (this._moduleDataContainer[key] === undefined) {
          this._moduleDataContainer[key] = new ModuleData(key);

          this._applyFutureListeners(key);
        }
      }
    }, {
      key: "getState",
      value: function getState(moduleId) {
        if (this._moduleDataContainer[moduleId]) {
          return this._moduleDataContainer[moduleId].raw();
        }

        return null;
      }
    }, {
      key: "getAll",
      value: function getAll(key) {
        var data = [];

        for (var _i2 = 0, _Object$keys = Object.keys(this._moduleDataContainer); _i2 < _Object$keys.length; _i2++) {
          var dataKey = _Object$keys[_i2];

          if (dataKey.startsWith(key) && this._moduleDataContainer[dataKey].raw() !== null) {
            data.push(this._moduleDataContainer[dataKey].raw());
          }
        }

        return data;
      }
      /**
       * Remove the data in storage with the given key to the provided data,
       * @param {string} key the storage key to delete
       */

    }, {
      key: "delete",
      value: function _delete(key) {
        // Note: Do we need to clean up listeners here?
        delete this._moduleDataContainer[key];
      }
    }, {
      key: "on",
      value: function on(evt, moduleId, cb) {
        var moduleData = this._moduleDataContainer[moduleId];

        if (moduleData === undefined) {
          if (this._futureListeners[moduleId] === undefined) {
            this._futureListeners[moduleId] = [];
          }

          this._futureListeners[moduleId].push({
            event: evt,
            cb: cb
          });

          return;
        }

        this._moduleDataContainer[moduleId].on(evt, cb);

        return this;
      }
    }, {
      key: "off",
      value: function off(evt, moduleId, cb) {
        var moduleData = this._moduleDataContainer[moduleId];

        if (moduleData === undefined) {
          if (this._futureListeners[moduleId] !== undefined) {
            this._futureListeners[moduleId].pop();
          }

          return this;
        }

        this._moduleDataContainer[moduleId].off(evt, cb);

        return this;
      }
    }, {
      key: "_applyFutureListeners",
      value: function _applyFutureListeners(moduleId) {
        var futures = this._futureListeners[moduleId];

        if (!futures) {
          return;
        }

        for (var i = 0; i < futures.length; i++) {
          var future = futures[i];
          this.on(future.event, moduleId, future.cb);
        }

        delete this._futureListeners[moduleId];
      }
    }]);

    return GlobalStorage;
  }();

  /** @module */

  /**
   * Component is an abstraction that encapsulates state, behavior,
   * and view for a particular chunk of functionality on the page.
   *
   * The API exposes event life cycle hooks for when things are rendered,
   * mounted, created, etc.
   */

  var Component =
  /*#__PURE__*/
  function () {
    function Component() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Component);

      this.moduleId = null;
      /**
       * Unique name of this component instance
       * Used to distinguish between other components of the same type
       * @type {String}
       */

      this.name = config.name || this.constructor.type;
      /**
       * Cache the options so that we can propogate properly to child components
       * @type {Object}
       */

      this._config = config;
      /**
       * An identifier used to classify the type of component.
       * The component manager uses this information in order to persist and organize components
       * @type {string|ComponentType}
       */

      this._type = this.constructor.name;
      /**
       * A local reference to the parent component, if exists
       * @type {Component}
       */

      this._parentContainer = config.parentContainer || null;
      /**
       * A container for all the child components
       * @type {Component[]}
       */

      this._children = [];
      /**
       * The state (data) of the component to be provided to the template for rendering
       * @type {object}
       */

      this._state = new State(config.state);
      /**
       * TODO(billy) This should be 'services'
       */

      this.core = systemConfig.core || null;
      /**
       * A local reference to the component manager, which contains all of the component classes
       * eligible to be created
       * @type {ComponentManager}
       */

      this.componentManager = systemConfig.componentManager || null;
      /**
       * A local reference to the analytics reporter, used to report events for this component
       * @type {AnalyticsReporter}
       */

      this.analyticsReporter = systemConfig.analyticsReporter || null;
      /**
       * Options to include with all analytic events sent by this component
       * @type {object}
       * @private
       */

      this._analyticsOptions = config.analyticsOptions || {};
      /**
       * A reference to the DOM node that the component will be appended to when mounted/rendered.
       * @type {HTMLElement}
       */

      if (this._parentContainer === null) {
        if (typeof config.container !== 'string') {
          throw new Error('Missing `container` option for component configuration. Must be of type `string`.');
        }

        this._container = DOM.query(config.container) || null;
      } else {
        this._container = DOM.query(this._parentContainer, config.container); // If we have a parent, and the container is missing from the DOM,
        // we construct the container and append it to the parent

        if (this._container === null) {
          this._container = DOM.createEl('div', {
            "class": config.container.substring(1, config.container.length)
          });
          DOM.append(this._parentContainer, this._container);
        }
      }

      if (this._container === null) {
        throw new Error('Cannot find container DOM node: ' + config.container);
      }
      /**
       * A custom class to be applied to {this._container} node
       * @type {string}
       */


      this._className = config["class"] || 'component';
      /**
       * A custom render function to be used instead of using the default renderer
       * @type {Renderer}
       */

      this._render = config.render || null;
      /**
       * A local reference to the default {Renderer} that will be used for rendering the template
       * @type {Renderer}
       */

      this._renderer = systemConfig.renderer || Renderers.Handlebars;
      /**
       * The template string to use for rendering the component
       * If this is left empty, we lookup the template the base templates using the templateName
       * @type {string}
       */

      this._template = config.template ? this._renderer.compile(config.template) : null;
      /**
       * The templateName to use for rendering the component.
       * This is only used if _template is empty.
       * @type {string}
       */

      this._templateName = config.templateName || this.constructor.defaultTemplateName(config);
      /**
       * An internal state indicating whether or not the component has been mounted to the DOM
       * @type {boolean}
       */

      this._isMounted = false;
      /**
       * A local reference to the callback, thats used to transform the internal data
       * models of the components, before it gets applied to the component state.
       * By default, no transformation happens.
       * @type {function}
       */

      this.transformData = config.transformData || this.transformData || function () {};
      /**
       * The a local reference to the callback that will be invoked when a component is created.
       * @type {function}
       */


      this.onCreate = config.onCreateOverride || this.onCreate || function () {};

      this.onCreate = this.onCreate.bind(this);
      /**
       * The a local reference to the callback that will be invoked when a component is Mounted.
       * @type {function}
       */

      this.onMount = config.onMountOverride || this.onMount || function () {};

      this.onMount = this.onMount.bind(this);
      /**
       * The a local reference to the callback that will be invoked when a components state is updated.
       * @type {function}
       */

      this.onUpdate = config.onUpdateOverride || this.onUpdate || function () {};

      this.onUpdate = this.onUpdate.bind(this);
      /**
       * A user provided onCreate callback
       * @type {function}
       */

      this.userOnCreate = config.onCreate || function () {};
      /**
       * A user provided onMount callback
       * @type {function}
       */


      this.userOnMount = config.onMount || function () {};
      /**
       * A user provided onUpdate callback
       * @type {function}
       */


      this.userOnUpdate = config.onUpdate || function () {};
    }
    /**
     * The template to render
     * @returns {string}
     * @override
     */


    _createClass(Component, [{
      key: "init",
      value: function init(opts) {
        var _this = this;

        try {
          this.setState(opts.data || opts.state || {});
          this.onCreate();
          this.userOnCreate();
        } catch (e) {
          throw new AnswersComponentError('Error initializing component', this.constructor.type, e);
        }

        this._state.on('update', function () {
          try {
            _this.onUpdate();

            _this.userOnUpdate();

            _this.unMount();

            _this.mount();
          } catch (e) {
            throw new AnswersComponentError('Error updating component', _this.constructor.type, e);
          }
        });

        DOM.addClass(this._container, this._className);
        return this;
      }
    }, {
      key: "setState",
      value: function setState(data) {
        var newState = Object.assign({}, {
          _config: this._config
        }, data);

        this._state.set(newState);

        return this;
      }
    }, {
      key: "getState",
      value: function getState(prop) {
        return this._state.get(prop);
      }
    }, {
      key: "hasState",
      value: function hasState(prop) {
        return this._state.has(prop);
      }
    }, {
      key: "transformData",
      value: function transformData(data) {
        return data;
      }
    }, {
      key: "addChild",
      value: function addChild(data, type, opts) {
        var childComponent = this.componentManager.create(type, Object.assign({
          name: data.name,
          parentContainer: this._container,
          data: data
        }, opts || {}, {
          _parentOpts: this._config
        }));

        this._children.push(childComponent);

        return childComponent;
      }
      /**
       * Unmount and remove this component and its children from the list
       * of active components
       */

    }, {
      key: "remove",
      value: function remove() {
        this._children.forEach(function (c) {
          return c.remove();
        });

        this.componentManager.remove(this);
      }
      /**
       * Set the render method to be used for rendering the component
       * @param {Function} render
       * @return {string}
       */

    }, {
      key: "setRender",
      value: function setRender(render) {
        this._render = render;
        return this;
      }
      /**
       * Set the renderer for the component
       * @param {RendererType} renderer
       */

    }, {
      key: "setRenderer",
      value: function setRenderer(renderer) {
        this._renderer = Renderers[renderer];
        return this;
      }
      /**
       * Sets the template for the component to use when rendering
       * @param {string} template
       */

    }, {
      key: "setTemplate",
      value: function setTemplate(template) {
        this._template = this._renderer.compile(template);
      }
    }, {
      key: "unMount",
      value: function unMount() {
        if (!this._container) {
          return this;
        }

        this._children.forEach(function (child) {
          child.unMount();
        });

        DOM.empty(this._container);

        this._children.forEach(function (c) {
          return c.remove();
        });

        this._children = [];
        this.onUnMount();
      }
    }, {
      key: "mount",
      value: function mount() {
        var _this2 = this;

        if (!this._container) {
          return this;
        }

        if (this.beforeMount() === false) {
          return this;
        }

        DOM.append(this._container, this.render(this._state.asJSON())); // Process the DOM to determine if we should create
        // in-memory sub-components for rendering

        var domComponents = DOM.queryAll(this._container, '[data-component]:not([data-is-component-mounted])');
        var data = this.transformData(JSON.parse(JSON.stringify(this._state.get())));
        domComponents.forEach(function (c) {
          return _this2._createSubcomponent(c, data);
        });

        this._children.forEach(function (child) {
          child.mount();
        }); // Attach analytics hooks as necessary


        if (this.analyticsReporter) {
          var domHooks = DOM.queryAll(this._container, '[data-eventtype]:not([data-is-analytics-attached])');
          domHooks.forEach(this._createAnalyticsHook.bind(this));
        }

        this._isMounted = true;
        this.onMount(this);
        this.userOnMount(this);
        return this;
      }
      /**
       * render the template using the {Renderer} with the current state and template of the component
       * @returns {string}
       */

    }, {
      key: "render",
      value: function render() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._state.get();
        this.beforeRender(); // Temporary fix for passing immutable data to transformData().

        data = this.transformData(JSON.parse(JSON.stringify(data)));
        var html = ''; // Use either the custom render function or the internal renderer
        // dependant on the component configuration

        if (typeof this._render === 'function') {
          html = this._render(data);

          if (typeof html !== 'string') {
            throw new Error('Render method must return HTML as type {string}');
          }
        } else {
          // Render the existing templates as a string
          html = this._renderer.render({
            template: this._template,
            templateName: this._templateName
          }, data);
        } // We create an HTML Document fragment with the rendered string
        // So that we can query it for processing of sub components


        var el = DOM.create(html);
        this.afterRender();
        return el.innerHTML;
      }
    }, {
      key: "_createSubcomponent",
      value: function _createSubcomponent(domComponent, data) {
        var _this3 = this;

        domComponent.dataset.isComponentMounted = true;
        var dataset = domComponent.dataset;
        var type = dataset.component;
        var prop = dataset.prop;
        var opts = dataset.opts ? JSON.parse(dataset.opts) : {};
        var childData = data[prop] || {};
        opts = _objectSpread({}, opts, {
          container: domComponent
        }); // TODO(billy) Right now, if we provide an array as the data prop,
        // the behavior is to create many components for each item in the array.
        // THAT interface SHOULD change to use a different property that defines
        // whether to array data should be used for a single component or
        // to create many components for each item.
        // Overloading and having this side effect is unintuitive and WRONG

        if (!Array.isArray(childData)) {
          // Rendering a sub component should be within the context,
          // of the node that we processed it from
          this.addChild(childData, type, opts);
          return;
        }

        childData.reverse();
        childData.forEach(function (data) {
          _this3.addChild(data, type, opts);
        });
      }
    }, {
      key: "_createAnalyticsHook",
      value: function _createAnalyticsHook(domComponent) {
        var _this4 = this;

        domComponent.dataset.isAnalyticsAttached = true;
        var dataset = domComponent.dataset;
        var type = dataset.eventtype;
        var label = dataset.eventlabel;
        var options = dataset.eventoptions ? JSON.parse(dataset.eventoptions) : {};
        DOM.on(domComponent, 'click', function (e) {
          var event = new AnalyticsEvent(type, label);
          event.addOptions(_this4._analyticsOptions);
          event.addOptions(options);

          _this4.analyticsReporter.report(event);
        });
      }
      /**
       * onCreate is triggered when the component is constructed
       * @param {function} the callback to invoke upon emit
       */

    }, {
      key: "onCreate",
      value: function onCreate(cb) {}
      /**
       * onUpdate is triggered when the state of the component changes
       * @param {function} the callback to invoke upon emit
       */

    }, {
      key: "onUpdate",
      value: function onUpdate(cb) {}
      /**
       * beforeRender event is triggered before the component is rendered
       * @param {function} the callback to invoke upon emit
       */

    }, {
      key: "beforeRender",
      value: function beforeRender(cb) {}
      /**
       * afterRender event is triggered after the component is rendered
       * @param {function} the callback to invoke upon emit
       */

    }, {
      key: "afterRender",
      value: function afterRender(cb) {}
      /**
       * onMount is triggered when the component is appended to the DOM
       * @param {function} the callback to invoke upon emit
       */

    }, {
      key: "onMount",
      value: function onMount(cb) {}
      /**
       * onUnMount is triggered when the component is removed from the DOM
       * @param {function} the callback to invoke upon emit
       */

    }, {
      key: "onUnMount",
      value: function onUnMount(cb) {}
      /**
       * beforeMount is triggered before the component is mounted to the DOM
       * @param {function} the callback to invoke upon emit
       */

    }, {
      key: "beforeMount",
      value: function beforeMount(cb) {}
      /**
       * onDestroy is triggered when the component is destroyed
       * @param {function} the callback to invoke upon emit
       */

    }, {
      key: "onDestroy",
      value: function onDestroy(cb) {}
    }], [{
      key: "defaultTemplateName",
      value: function defaultTemplateName(config) {
        return 'default';
      }
    }, {
      key: "areDuplicateNamesAllowed",
      value: function areDuplicateNamesAllowed() {
        return false;
      }
    }, {
      key: "type",
      get: function get() {
        return 'Component';
      }
    }]);

    return Component;
  }();

  /**
   * The debounce duration for resize events
   * @type {number}
   */

  var RESIZE_DEBOUNCE = 100;
  /**
   * The Tab is a model that is used to power the Navigation tabs in the view.
   * It's initialized through the configuration provided to the component.
   */

  var Tab =
  /*#__PURE__*/
  function () {
    function Tab(config) {
      _classCallCheck(this, Tab);

      /**
       * The name of the tab that is exposed for the link
       * @type {string}
       */
      this.label = config.label;

      if (typeof this.label !== 'string') {
        throw new AnswersComponentError('label is a required configuration option for tab.', 'NavigationComponent');
      }
      /**
       * The complete URL, including the params
       * @type {string}
       */


      this.url = config.url;

      if (typeof this.url !== 'string') {
        throw new AnswersComponentError('url is a required configuration option for tab.', 'NavigationComponent');
      }
      /**
       * The serverside vertical config id that this is referenced to.
       * By providing this, enables dynamic sorting based on results.
       * @type {string}
       */


      this.configId = config.configId || null;
      /**
       * The base URL used for constructing the URL with params
       * @type {string}
       */

      this.baseUrl = config.url;
      /**
       * Determines whether to show this tab first in the order
       * @type {boolean}
       */

      this.isFirst = config.isFirst || false;
      /**
       * Determines whether or not to apply a special class to the
       * markup to determine if it's an active tab
       * @type {boolean}
       */

      this.isActive = config.isActive || false;
    }
    /**
     * from will construct a map of configId to {Tab} from
     * a configuration file
     * @param {object} tabsConfig the configuration to use
     */


    _createClass(Tab, null, [{
      key: "from",
      value: function from(tabsConfig) {
        var tabs = {}; // Parse the options and build out our tabs and

        for (var i = 0; i < tabsConfig.length; i++) {
          var tab = tabsConfig[i]; // For tabs without config ids, map their URL to the configID
          // to avoid duplication of renders

          if (tab.configId === undefined && tabs[tab.configId] === undefined) {
            tab.configId = tab.url;
          }

          tabs[tab.configId] = new Tab(tab);
        }

        return tabs;
      }
    }]);

    return Tab;
  }();
  /**
   * NavigationComponent exposes an interface for building a dynamic
   * navigation that is powered by universal search updates.
   * @extends Component
   */

  var NavigationComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(NavigationComponent, _Component);

    function NavigationComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, NavigationComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(NavigationComponent).call(this, config, systemConfig));
      /**
       * The label to show on the dropdown menu button
       * @type {string}
       */

      _this.dropdownLabel = config.dropdownLabel || 'More';
      /**
       * The optional icon to show on the dropdown menu button
       * @type {string}
       */

      _this.dropdownIcon = config.dropdownIcon || 'kabob';
      /**
       * If true, render a static navigation with no "more" menu
       * @type {boolean}
       */

      _this["static"] = config["static"] || false;
      /**
       * The data storage key
       * @type {string}
       */

      _this.moduleId = StorageKeys.NAVIGATION;
      /**
       * Unordered map of each tab, keyed by VS configId
       * @type {Object.<String, Object>}
       * @private
       */

      _this._tabs = Tab.from(config.tabs);
      /**
       * The order of the tabs, parsed from configuration or URL.
       * This gets updated based on the server results
       * @type {Array.<String>} The list of VS configIds
       * @private
       */

      _this._tabOrder = _this.getDefaultTabOrder(config.tabs, _this.getUrlParams());
      /**
       * Breakpoints at which navigation items move to the "more" dropdown
       * @type {number[]}
       * @private
       */

      _this._navBreakpoints = [];
      return _this;
    }

    _createClass(NavigationComponent, [{
      key: "onCreate",
      value: function onCreate() {
        var _this2 = this;

        if (!this["static"]) {
          DOM.on(window, 'resize', function () {
            if (_this2._debounceTimer) {
              clearTimeout(_this2._debounceTimer);
            }

            _this2._debounceTimer = setTimeout(_this2.refitNav.bind(_this2), RESIZE_DEBOUNCE);
          });
          DOM.on(window, 'click', this.checkOutsideClick.bind(this));
        }
      }
    }, {
      key: "onMount",
      value: function onMount() {
        if (!this["static"]) {
          this.refitNav();
          DOM.on(DOM.query(this._container, '.yxt-Nav-more'), 'click', this.toggleMoreDropdown.bind(this));
        }
      }
    }, {
      key: "refitNav",
      value: function refitNav() {
        var container = DOM.query(this._container, '.yxt-Nav-container');
        var moreButton = DOM.query(this._container, '.yxt-Nav-more');
        var mainLinks = DOM.query(this._container, '.yxt-Nav-expanded');
        var collapsedLinks = DOM.query(this._container, '.yxt-Nav-modal');
        var navWidth = moreButton.classList.contains('yxt-Nav-item--more') ? container.offsetWidth : container.offsetWidth - moreButton.offsetWidth;
        var numBreakpoints = this._navBreakpoints.length; // sum child widths instead of using parent's width to avoid
        // browser inconsistencies

        var mainLinksWidth = 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = mainLinks.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var el = _step.value;
            mainLinksWidth += el.offsetWidth;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (mainLinksWidth > navWidth) {
          this._navBreakpoints.push(mainLinksWidth);

          var lastLink = mainLinks.children.item(mainLinks.children.length - 1);

          if (lastLink === null) {
            return;
          }

          collapsedLinks.prepend(lastLink);

          if (moreButton.classList.contains('yxt-Nav-item--more')) {
            moreButton.classList.remove('yxt-Nav-item--more');
          }
        } else {
          if (numBreakpoints && navWidth > this._navBreakpoints[numBreakpoints - 1]) {
            var firstLink = collapsedLinks.children.item(0);

            if (firstLink === null) {
              return;
            }

            mainLinks.append(firstLink);

            this._navBreakpoints.pop();

            numBreakpoints--;
          }

          if (collapsedLinks.children.length === 0) {
            moreButton.classList.add('yxt-Nav-item--more');
          }
        }

        this.closeMoreDropdown();

        if (mainLinksWidth > navWidth || numBreakpoints > 0 && navWidth > this._navBreakpoints[numBreakpoints - 1]) {
          this.refitNav();
        }
      }
    }, {
      key: "closeMoreDropdown",
      value: function closeMoreDropdown() {
        var collapsed = DOM.query(this._container, '.yxt-Nav-modal');
        collapsed.classList.remove('is-active');
        var moreButton = DOM.query(this._container, '.yxt-Nav-more');
        moreButton.setAttribute('aria-expanded', false);
      }
    }, {
      key: "openMoreDropdown",
      value: function openMoreDropdown() {
        var collapsed = DOM.query(this._container, '.yxt-Nav-modal');
        collapsed.classList.add('is-active');
        var moreButton = DOM.query(this._container, '.yxt-Nav-more');
        moreButton.setAttribute('aria-expanded', true);
      }
    }, {
      key: "toggleMoreDropdown",
      value: function toggleMoreDropdown() {
        var collapsed = DOM.query(this._container, '.yxt-Nav-modal');
        collapsed.classList.toggle('is-active');
        var moreButton = DOM.query(this._container, '.yxt-Nav-more');
        moreButton.setAttribute('aria-expanded', collapsed.classList.contains('is-active'));
      }
    }, {
      key: "checkOutsideClick",
      value: function checkOutsideClick(e) {
        if (e.target.closest('.yxt-Nav-container')) {
          return;
        }

        this.closeMoreDropdown();
      }
      /**
       * Since the server data only provides a list of
       * VS configIds, we need to compute and transform
       * the data into the proper format for rendering.
       *
       * @override
       */

    }, {
      key: "setState",
      value: function setState(data) {
        if (data.tabOrder !== undefined) {
          this._tabOrder = this.mergeTabOrder(data.tabOrder, this._tabOrder);
        } // Since the tab ordering can change based on the server data
        // we need to update each tabs URL to include the order as part of their params.
        // This helps with persisting state across verticals.


        var tabs = [];

        for (var i = 0; i < this._tabOrder.length; i++) {
          var tab = this._tabs[this._tabOrder[i]];

          if (tab !== undefined) {
            tab.url = this.generateTabUrl(tab.baseUrl, this.getUrlParams());
            tabs.push(tab);
          }
        }

        return _get(_getPrototypeOf(NavigationComponent.prototype), "setState", this).call(this, {
          tabs: tabs,
          dropdownLabel: this.dropdownLabel,
          dropdownIcon: this.dropdownIcon,
          "static": this["static"]
        });
      }
    }, {
      key: "getUrlParams",
      value: function getUrlParams() {
        return new SearchParams(window.location.search.substring(1));
      }
      /**
       * getDefaultTabOrder will compute the initial tab ordering based
       * on a combination of the configuration provided directly to the component
       * and the url params.
       * @param {Object[]} tabsConfig
       * @param {SearchParams}
       */

    }, {
      key: "getDefaultTabOrder",
      value: function getDefaultTabOrder(tabsConfig, urlParams) {
        var tabOrder = []; // Use the ordering from the URL as the primary configuration
        // And then merge it with the local configuration, if provided.

        if (urlParams && urlParams.has('tabOrder')) {
          tabOrder = urlParams.get('tabOrder').split(',');
        }

        for (var i = 0; i < tabsConfig.length; i++) {
          var tab = tabsConfig[i]; // Some tabs don't have configId, so we map it from URL

          if (tab.configId === undefined) {
            tab.configId = tab.url;
          } // Avoid duplicates if config was provided from URL


          if (tabOrder.includes(tab.configId)) {
            continue;
          } // isFirst should always be the first element in the list


          if (tab.isFirst) {
            tabOrder.unshift(tab.configId);
          } else {
            tabOrder.push(tab.configId);
          }
        }

        return tabOrder;
      }
      /**
       * mergeTabOrder merges two arrays into one
       * by appending additional tabs to the end of the original array
       * @param {string[]} tabOrder Tab order provided by the server
       * @param {string[]} otherTabOrder Tab order provided by configuration
       * @return {string[]}
       */

    }, {
      key: "mergeTabOrder",
      value: function mergeTabOrder(tabOrder, otherTabOrder) {
        for (var i = 0; i < otherTabOrder.length; i++) {
          var tabConfig = otherTabOrder[i];

          if (tabOrder.includes(tabConfig)) {
            continue;
          } // isFirst should be an override to dynamic tab ordering.


          if (this._tabs[tabConfig] && this._tabs[tabConfig].isFirst) {
            tabOrder.unshift(tabConfig);
          } else {
            tabOrder.push(tabConfig);
          }
        }

        return tabOrder;
      }
    }, {
      key: "generateTabUrl",
      value: function generateTabUrl(baseUrl) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new URLSearchParams();
        // We want to persist the params from the existing URL to the new
        // URLS we create.
        params.set('tabOrder', this._tabOrder);
        return baseUrl + '?' + params.toString();
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
        return 'navigation/navigation';
      }
    }, {
      key: "type",
      get: function get() {
        return 'Navigation';
      }
    }]);

    return NavigationComponent;
  }(Component);

  /** @module Filter */

  /**
   * Represents an api filter and provides static methods for easily constructing Filters.
   * See https://developer.yext.com/docs/api-reference/#operation/listEntities for structure details
   */
  var Filter =
  /*#__PURE__*/
  function () {
    function Filter() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Filter);

      Object.assign(this, data);
      Object.freeze(this);
    }
    /**
     * Parse a JSON format filter returned from the server into a Filter
     * @param {*} responseFilter A filter in JSON format returned from the backend
     * @returns {Filter}
     */


    _createClass(Filter, null, [{
      key: "fromResponse",
      value: function fromResponse(responseFilter) {
        return new Filter(JSON.parse(responseFilter));
      }
      /**
       * Return a new Filter representing the OR of all provided filters
       * @param  {...Filter} filters The filters to OR together
       * @returns {Filter}
       */

    }, {
      key: "or",
      value: function or() {
        for (var _len = arguments.length, filters = new Array(_len), _key = 0; _key < _len; _key++) {
          filters[_key] = arguments[_key];
        }

        return new Filter({
          '$or': filters
        });
      }
      /**
       * Return a new Filter representing the AND of all provided filters
       * @param  {...Filter} filters The filters to AND together
       * @returns {Filter}
       */

    }, {
      key: "and",
      value: function and() {
        for (var _len2 = arguments.length, filters = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          filters[_key2] = arguments[_key2];
        }

        return new Filter({
          '$and': filters
        });
      }
      /**
       * OR filters with the same keys, then AND the resulting groups
       * @param  {...Filter} filters The filters to group
       * @returns {Filter}
       */

    }, {
      key: "group",
      value: function group() {
        var groups = {};

        for (var _len3 = arguments.length, filters = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          filters[_key3] = arguments[_key3];
        }

        for (var _i = 0, _filters = filters; _i < _filters.length; _i++) {
          var filter = _filters[_i];
          var key = Object.keys(filter)[0];

          if (!groups[key]) {
            groups[key] = [];
          }

          groups[key].push(filter);
        }

        var groupFilters = [];

        for (var _i2 = 0, _Object$keys = Object.keys(groups); _i2 < _Object$keys.length; _i2++) {
          var field = _Object$keys[_i2];
          groupFilters.push(groups[field].length > 1 ? Filter.or.apply(Filter, _toConsumableArray(groups[field])) : groups[field][0]);
        }

        return groupFilters.length > 1 ? Filter.and.apply(Filter, groupFilters) : groupFilters[0];
      }
      /**
       * Create a new "equal to" filter for a field
       * @param {string} field The subject field of the filter
       * @param {*} value The value the field should be equal to
       * @returns {Filter}
       */

    }, {
      key: "equal",
      value: function equal(field, value) {
        return Filter._fromMatcher(field, '$eq', value);
      }
      /**
       * Create a new "less than" filter for a field
       * @param {string} field The subject field of the filter
       * @param {*} value The value the field should be less than
       * @returns {Filter}
       */

    }, {
      key: "lessThan",
      value: function lessThan(field, value) {
        return Filter._fromMatcher(field, '$lt', value);
      }
      /**
       * Create a new "less than or equal to" filter for a field
       * @param {string} field The subject field of the filter
       * @param {*} value The value the field should be less than or equal to
       * @returns {Filter}
       */

    }, {
      key: "lessThanEqual",
      value: function lessThanEqual(field, value) {
        return Filter._fromMatcher(field, '$le', value);
      }
      /**
       * Create a new "greater than" filter for a field
       * @param {string} field The subject field of the filter
       * @param {*} value The value the field should be greater than
       * @returns {Filter}
       */

    }, {
      key: "greaterThan",
      value: function greaterThan(field, value) {
        return Filter._fromMatcher(field, '$gt', value);
      }
      /**
       * Create a new "greater than or equal to" filter for a field
       * @param {string} field The subject field of the filter
       * @param {*} value The value the field should be greater than or equal to
       * @returns {Filter}
       */

    }, {
      key: "greaterThanEqual",
      value: function greaterThanEqual(field, value) {
        return Filter._fromMatcher(field, '$ge', value);
      }
      /**
       * Create a new inclusive range filter
       * @param {string} field The subject field of the filter
       * @param {*} min The minimum value
       * @param {*} max The maximum value
       * @returns {Filter}
       */

    }, {
      key: "inclusiveRange",
      value: function inclusiveRange(field, min, max) {
        return new Filter(_defineProperty({}, field, {
          '$ge': min,
          '$le': max
        }));
      }
      /**
       * Create a new exclusive range filter
       * @param {string} field The subject field of the filter
       * @param {*} min The minimum value
       * @param {*} max The maximum value
       * @returns {Filter}
       */

    }, {
      key: "exclusiveRange",
      value: function exclusiveRange(field, min, max) {
        return new Filter(_defineProperty({}, field, {
          '$gt': min,
          '$lt': max
        }));
      }
      /**
       * Create a new position filter
       * @param {number} lat The latitude of the position
       * @param {number} lng The longitude of the position
       * @param {number} radius The search radius (in meters)
       */

    }, {
      key: "position",
      value: function position(lat, lng, radius) {
        return Filter._fromMatcher('builtin.location', '$near', {
          lat: lat,
          lng: lng,
          radius: radius
        });
      }
      /**
       * Create a new filter with the given matcher
       * @private
       * @param {string} field The subject field of the filter
       * @param {string} matcher The matcher for the filer
       * @param {*} value The value for the filter
       * @returns {Filter}
       */

    }, {
      key: "_fromMatcher",
      value: function _fromMatcher(field, matcher, value) {
        return new Filter(_defineProperty({}, field, _defineProperty({}, matcher, value)));
      }
    }]);

    return Filter;
  }();

  /**
   * SearchComponent exposes an interface in order to create
   * a UI Search experience for vertical and universal search.
   *
   * @extends Component
   */

  var SearchComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(SearchComponent, _Component);

    function SearchComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, SearchComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchComponent).call(this, config, systemConfig));
      /**
       * The optional input key for the vertical search configuration
       * If not provided, auto-complete and search will be based on universal
       * @type {string}
       */

      _this._barKey = config.barKey || null;
      /**
       * The optional vertical key for vertical search configuration
       * If not provided, auto-complete and search will be based on universal
       * @type {string}
       */

      _this._verticalKey = config.verticalKey || null;
      /**
       * Query submission is based on a form as context.
       * Optionally provided, otherwise defaults to native form node within container
       * @type {string} CSS selector
       */

      _this._formEl = config.formSelector || 'form';
      /**
       * The input element used for searching and wires up the keyboard interaction
       * Optionally provided.
       * @type {string} CSS selector
       */

      _this._inputEl = config.inputEl || '.js-yext-query';
      /**
       * The title used, provided to the template as a data point
       * Optionally provided.
       * @type {string}
       */

      _this.title = config.title || 'Answers Universal Search';
      /**
       * The label text is used for labeling the input box, also provided to template.
       * Optionally provided
       * @type {string}
       */

      _this.labelText = config.labelText || 'What are you interested in?';
      /**
       * The submit text is used for labeling the submit button, also provided to the template.
       * @type {string}
       */

      _this.submitText = config.submitText || 'Submit';
      /**
       * The submit icon is an icon for the submit button, if provided it will be displayed and the
       * submit text will be used for screen readers.
       * @type {string|null}
       */

      _this.submitIcon = config.submitIcon || null;
      /**
       * The query text to show as the first item for auto complete.
       * Optionally provided
       * @type {string}
       */

      _this.promptHeader = config.promptHeader || null;
      /**
       * Auto focuses the input box if set to true.
       * Optionally provided, defaults to false.
       * @type {boolean}
       */

      _this.autoFocus = config.autoFocus === true;
      /**
       * If true, show an "x" that allows the user to clear the current
       * query
       * @type {boolean}
       */

      _this.clearButton = config.clearButton === undefined ? true : config.clearButton;
      /**
       * When autofocusing on load, optionally open the autocomplete
       * (preset prompts)
       * @type {boolean}
       */

      _this.autocompleteOnLoad = config.autocompleteOnLoad || false;
      /**
       * submitURL will force the search query submission to get
       * redirected to the URL provided.
       * Optional, defaults to null.
       *
       * If no redirectUrl provided, we keep the page as a single page app.
       *
       * @type {boolean}
       */

      _this.redirectUrl = config.redirectUrl || null;
      /**
       * true if there is another search bar present on the page.
       * Twins only update the query, and do not search
       */

      _this._isTwin = config.isTwin;
      /**
       * The query string to use for the input box, provided to template for rendering.
       * Optionally provided
       * @type {string}
       */

      _this.query = config.query || _this.core.globalStorage.getState(StorageKeys.QUERY) || '';

      _this.core.globalStorage.on('update', StorageKeys.QUERY, function (q) {
        _this.query = q;

        _this.setState();

        _this.search(q);
      });
      /**
       * The minimum time allowed in milliseconds between searches to prevent
       * many duplicate searches back-to-back
       * @type {number}
       * @private
       */


      _this._searchCooldown = config.searchCooldown || 300;
      /**
       * When true and "near me" intent is expressed, prompt the user for their geolocation
       * @type {boolean}
       * @private
       */

      _this._promptForLocation = config.promptForLocation === undefined ? true : Boolean(config.promptForLocation);
      /**
       * Controls showing and hiding the search clear button
       */

      _this._showClearButton = _this.clearButton && _this.query;
      return _this;
    }

    _createClass(SearchComponent, [{
      key: "onCreate",
      value: function onCreate() {
        if (this.query && !this.redirectUrl) {
          this.core.setQuery(this.query);
        }

        if (this._promptForLocation) {
          this.initLocationPrompt();
        }
      }
    }, {
      key: "onMount",
      value: function onMount() {
        if (this.autoFocus === true && this.query.length === 0 && !this.autocompleteOnLoad) {
          DOM.query(this._container, this._inputEl).focus();
        } // Wire up our search handling and auto complete


        this.initSearch(this._formEl);
        this.initAutoComplete(this._inputEl);

        if (this.clearButton) {
          this.initClearButton();
        }

        if (this.autoFocus === true && this.query.length === 0 && this.autocompleteOnLoad) {
          DOM.query(this._container, this._inputEl).focus();
        }
      }
    }, {
      key: "remove",
      value: function remove() {
        this._autocomplete.remove();

        _get(_getPrototypeOf(SearchComponent.prototype), "remove", this).call(this);
      }
    }, {
      key: "initClearButton",
      value: function initClearButton() {
        var _this2 = this;

        var button = DOM.query(this._container, '.js-yxt-SearchBar-clear');
        this._showClearButton = this._showClearButton || this.query;
        button.classList.toggle('yxt-SearchBar--hidden', !this._showClearButton);
        DOM.on(button, 'click', function () {
          _this2.query = '';
          _this2._showClearButton = false;
          button.classList.add('yxt-SearchBar--hidden');

          _this2.setState({});

          _this2.core.persistentStorage.set(StorageKeys.QUERY, _this2.query);

          _this2.core.setQuery(_this2.query);
        });
        DOM.on(this._inputEl, 'input', function (e) {
          var input = e.target.value;

          if (!_this2._showClearButton && input.length > 0) {
            _this2._showClearButton = true;
            button.classList.remove('yxt-SearchBar--hidden');
          } else if (_this2._showClearButton && input.length === 0) {
            _this2._showClearButton = false;
            button.classList.add('yxt-SearchBar--hidden');
          }
        });
      }
    }, {
      key: "initLocationPrompt",
      value: function initLocationPrompt() {
        var _this3 = this;

        this.core.globalStorage.on('update', StorageKeys.INTENTS, function (intent) {
          if (!intent.nearMe || _this3.core.globalStorage.getState(StorageKeys.GEOLOCATION) !== null) {
            return;
          }

          navigator.geolocation.getCurrentPosition(function (position) {
            _this3.core.globalStorage.set(StorageKeys.GEOLOCATION, {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              radius: position.coords.accuracy
            });

            _this3.search(_this3.query);
          });
        });
      }
      /**
       * A helper method to use for wiring up searching on form submission
       * @param {string} formSelector CSS selector to bind our submit handling to
       */

    }, {
      key: "initSearch",
      value: function initSearch(formSelector) {
        var _this4 = this;

        this._formEl = formSelector;

        this._container.classList.add('yxt-SearchBar-wrapper');

        var form = DOM.query(this._container, formSelector);

        if (!form) {
          throw new Error('Could not initialize SearchBar; Can not find {HTMLElement} `', this._formEl, '`.');
        }

        DOM.on(form, 'submit', function (e) {
          e.preventDefault();
          var inputEl = form.querySelector(_this4._inputEl);
          var query = inputEl.value;
          var params = new SearchParams(window.location.search.substring(1));
          params.set('query', query); // If we have a redirectUrl, we want the form to be
          // serialized and submitted.

          if (typeof _this4.redirectUrl === 'string') {
            window.location.href = _this4.redirectUrl + '?' + params.toString();
            return false;
          }

          inputEl.blur();

          _this4.core.persistentStorage.set(StorageKeys.QUERY, query);

          _this4.core.setQuery(query);

          _this4.search(query);

          return false;
        });
      }
      /**
       * A helper method to wire up our auto complete on an input selector
       * @param {string} inputSelector CSS selector to bind our auto complete component to
       */

    }, {
      key: "initAutoComplete",
      value: function initAutoComplete(inputSelector) {
        var _this5 = this;

        this._inputEl = inputSelector;

        if (this._autocomplete) {
          this._autocomplete.remove();
        }

        this._autocomplete = this.componentManager.create('AutoComplete', {
          parentContainer: this._container,
          name: "".concat(this.name, ".autocomplete"),
          container: '.yxt-SearchBar-autocomplete',
          barKey: this._barKey,
          autoFocus: this.autoFocus && !this.autocompleteOnLoad,
          verticalKey: this._verticalKey,
          promptHeader: this.promptHeader,
          originalQuery: this.query,
          inputEl: inputSelector,
          onSubmit: function onSubmit() {
            DOM.trigger(DOM.query(_this5._container, _this5._formEl), 'submit');
          }
        });
      }
    }, {
      key: "search",
      value: function search(query) {
        var _this6 = this;

        // Don't search if we recently searched,
        // if there's no query for universal search,
        // or if this is a twin searchbar
        if (this._throttled || !query && !this._verticalKey || this._isTwin) {
          return;
        }

        this._throttled = true;
        setTimeout(function () {
          _this6._throttled = false;
        }, this._searchCooldown);

        if (this._verticalKey) {
          var allFilters = this.core.globalStorage.getAll(StorageKeys.FILTER);
          var totalFilter = allFilters.length > 1 ? Filter.and.apply(Filter, _toConsumableArray(allFilters)) : allFilters[0];
          var facetFilter = this.core.globalStorage.getAll(StorageKeys.FACET_FILTER)[0];
          return this.core.verticalSearch(this._verticalKey, {
            input: query,
            filter: JSON.stringify(totalFilter),
            facetFilter: JSON.stringify(facetFilter)
          });
        } else {
          // NOTE(billy) Temporary hack for DEMO
          // Remove me after the demo
          var nav = this.componentManager.getActiveComponent('Navigation');

          if (nav) {
            var tabs = nav.getState('tabs');
            var urls = {};

            if (tabs && Array.isArray(tabs)) {
              for (var i = 0; i < tabs.length; i++) {
                var params = new SearchParams(tabs[i].url.split('?')[1]);
                params.set('query', query);
                var url = tabs[i].baseUrl;

                if (params.toString().length > 0) {
                  url += '?' + params.toString();
                }

                urls[tabs[i].configId] = url;
              }
            }

            return this.core.search(query, urls);
          }

          return this.core.search(query);
        }
      }
    }, {
      key: "setState",
      value: function setState(data) {
        return _get(_getPrototypeOf(SearchComponent.prototype), "setState", this).call(this, Object.assign({
          title: this.title,
          labelText: this.labelText,
          submitIcon: this.submitIcon,
          submitText: this.submitText,
          showClearButton: this._showClearButton,
          query: this.query
        }, data));
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName() {
        return 'search/search';
      }
    }, {
      key: "type",
      get: function get() {
        return 'SearchBar';
      }
    }]);

    return SearchComponent;
  }(Component);

  /**
   * FilterSearchComponent is used for autocomplete using the FilterSearch backend.
   * It'll allow you to pick pre-set filters that are setup on the backend within
   * a vertical search context.
   *
   * @extends Component
   */

  var FilterSearchComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(FilterSearchComponent, _Component);

    function FilterSearchComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, FilterSearchComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterSearchComponent).call(this, config, systemConfig));
      /**
       * The input key for the vertical search configuration
       * @type {string}
       */

      _this._barKey = config.barKey || config.inputKey || null;
      /**
       * The vertical key for vertical search configuration
       * @type {string}
       */

      _this._verticalKey = config.verticalKey || null;
      /**
       * If true, store the filter value but do not search on change
       * @type {boolean}
       * @private
       */

      _this._storeOnChange = config.storeOnChange || false;
      /**
       * Query submission is based on a form as context.
       * Optionally provided, otherwise defaults to native form node within container
       * @type {string} CSS selector
       */

      _this._formEl = config.formSelector || 'form';
      /**
       * The input element used for searching and wires up the keyboard interaction
       * Optionally provided.
       * @type {string} CSS selector
       */

      _this._inputEl = config.inputEl || '.js-yext-query';
      /**
       * The title used, provided to the template as a data point
       * Optionally provided.
       * @type {string}
       */

      _this.title = config.title;
      /**
       * The search text used for labeling the input box, also provided to template.
       * Optionally provided
       * @type {string}
       */

      _this.searchText = config.searchText || 'What are you interested in?';
      /**
       * The query text to show as the first item for auto complete.
       * Optionally provided
       * @type {string}
       */

      _this.promptHeader = config.promptHeader || null;
      /**
       * Auto focuses the input box if set to true.
       * Optionally provided, defaults to false.
       * @type {boolean}
       */

      _this.autoFocus = config.autoFocus === true;
      /**
       * submitURL will force the search query submission to get
       * redirected to the URL provided.
       * Optional, defaults to null.
       *
       * If no redirectUrl provided, we keep the page as a single page app.
       *
       * @type {boolean}
       */

      _this.redirectUrl = config.redirectUrl || null;
      /**
       * The query string to use for the input box, provided to template for rendering.
       * Optionally provided
       * @type {string}
       */

      _this.query = config.query || _this.core.globalStorage.getState("".concat(StorageKeys.QUERY, ".").concat(_this.name)) || '';

      _this.core.globalStorage.on('update', "".concat(StorageKeys.QUERY, ".").concat(_this.name), function (q) {
        _this.query = q;

        _this.search();
      });
      /**
       * The filter string to use for the provided query
       * Optionally provided
       * @type {string}
       */


      _this.filter = config.filter || _this.core.globalStorage.getState("".concat(StorageKeys.FILTER, ".").concat(_this.name)) || '';

      if (typeof _this.filter === 'string') {
        try {
          _this.filter = JSON.parse(_this.filter);
        } catch (e) {}
      }

      _this.searchParameters = _this._buildSearchParameters(config.searchParameters);

      _this.core.globalStorage.on('update', "".concat(StorageKeys.FILTER, ".").concat(_this.name), function (f) {
        _this.filter = f;
      });

      return _this;
    }

    _createClass(FilterSearchComponent, [{
      key: "onCreate",
      value: function onCreate() {
        if (this.query && this.filter) {
          this.search();
        }
      }
    }, {
      key: "onMount",
      value: function onMount() {
        // Wire up our search handling and auto complete
        this.initAutoComplete(this._inputEl);

        if (this.autoFocus === true && this.query.length === 0) {
          DOM.query(this._container, this._inputEl).focus();
        }
      }
      /**
       * A helper method to wire up our auto complete on an input selector
       * @param {string} inputSelector CSS selector to bind our auto complete component to
       */

    }, {
      key: "initAutoComplete",
      value: function initAutoComplete(inputSelector) {
        var _this2 = this;

        this._inputEl = inputSelector;
        this.componentManager.create('AutoComplete', {
          parentContainer: this._container,
          name: "".concat(this.name, ".autocomplete"),
          isFilterSearch: true,
          container: '.yxt-SearchBar-autocomplete',
          promptHeader: this.promptHeader,
          originalQuery: this.query,
          originalFilter: this.filter,
          inputEl: inputSelector,
          verticalKey: this._verticalKey,
          barKey: this._barKey,
          searchParameters: this.searchParameters,
          onSubmit: function onSubmit(query, filter) {
            var params = new SearchParams(window.location.search.substring(1));
            params.set("".concat(_this2.name, ".query"), query);
            params.set("".concat(_this2.name, ".filter"), filter); // If we have a redirectUrl, we want the params to be
            // serialized and submitted.

            if (typeof _this2.redirectUrl === 'string') {
              window.location.href = _this2.redirectUrl + '?' + params.toString();
              return false;
            } // save the filter to storage for the next search


            _this2.query = query;
            _this2.filter = Filter.fromResponse(filter);

            _this2.core.persistentStorage.set("".concat(StorageKeys.QUERY, ".").concat(_this2.name), _this2.query);

            _this2.core.persistentStorage.set("".concat(StorageKeys.FILTER, ".").concat(_this2.name), _this2.filter);

            _this2.core.setFilter(_this2.name, _this2.filter);

            _this2.search();
          }
        });
      }
      /**
       * Perform the vertical search with all saved filters and query,
       * optionally redirecting based on config
       */

    }, {
      key: "search",
      value: function search() {
        if (this._storeOnChange) {
          return;
        }

        var filters = this.core.globalStorage.getAll(StorageKeys.FILTER);
        var totalFilter = filters[0];

        if (filters.length > 1) {
          totalFilter = Filter.and.apply(Filter, _toConsumableArray(filters));
        }

        var searchQuery = this.core.globalStorage.getState(StorageKeys.QUERY) || '';
        var facetFilter = this.core.globalStorage.getAll(StorageKeys.FACET_FILTER)[0];
        this.core.verticalSearch(this._verticalKey, {
          input: searchQuery,
          filter: JSON.stringify(totalFilter),
          facetFilter: JSON.stringify(facetFilter)
        });
      }
    }, {
      key: "setState",
      value: function setState(data) {
        return _get(_getPrototypeOf(FilterSearchComponent.prototype), "setState", this).call(this, Object.assign({
          title: this.title,
          searchText: this.searchText,
          query: this.query,
          filter: this.filter
        }, data));
      }
    }, {
      key: "_buildSearchParameters",
      value: function _buildSearchParameters(searchParameterConfigs) {
        var searchParameters = {
          sectioned: false,
          fields: []
        };

        if (searchParameterConfigs === undefined) {
          return searchParameters;
        }

        if (searchParameterConfigs.sectioned) {
          searchParameters.sectioned = searchParameterConfigs.sectioned;
        }

        searchParameters.fields = this._buildFields(searchParameterConfigs.fields);
        return searchParameters;
      }
    }, {
      key: "_buildFields",
      value: function _buildFields(fieldConfigs) {
        if (fieldConfigs === undefined) {
          return [];
        }

        return fieldConfigs.map(function (fc) {
          return _objectSpread({
            fetchEntities: false
          }, fc);
        });
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName() {
        return 'search/filtersearch';
      }
    }, {
      key: "type",
      get: function get() {
        return 'FilterSearch';
      }
    }]);

    return FilterSearchComponent;
  }(Component);

  var Keys = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESCAPE: 27,
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DELETE: 46,
    DOWN: 40,
    LEFT_OS_KEY: 91,
    RIGHT_OS_KEY: 92,
    SELECT_KEY: 93
  };

  var AutoCompleteComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(AutoCompleteComponent, _Component);

    function AutoCompleteComponent() {
      var _this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, AutoCompleteComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AutoCompleteComponent).call(this, opts, systemOpts));
      /**
       * Whether autocomplete is simple or filter
       * @type {boolean}
       */

      _this.isFilterSearch = opts.isFilterSearch || false;
      /**
       * The `barKey` in the vertical search to use for auto-complete
       * @type {string}
       */

      _this._barKey = opts.barKey || null;
      /**
       * The `verticalKey` of the vertical search to use for auto-complete
       * @type {string}
       */

      _this._verticalKey = opts.verticalKey || null;
      /**
       * A reference to the input el selector for auto complete
       * @type {string}
       */

      _this._inputEl = opts.inputEl || '.js-yext-query';
      /**
       * A selector for the autocomplete elementes
       * @type {string}
       */

      _this._autocompleteEls = opts.autoCompleteEls || '.js-yext-autocomlete-option';
      /**
       * An internal reference for the data-storage to listen for updates from the server
       * @type {string}
       */

      _this.moduleId = "".concat(StorageKeys.AUTOCOMPLETE, ".").concat(_this.name);
      /**
       * An internal reference to the input value when typing.
       * We use this for resetting the state of the input value when other interactions (e.g. result navigation)
       * change based on interactions. For instance, hitting escape should reset the value to the original typed query.
       * @type {string}
       */

      _this._originalQuery = opts.originalQuery || '';
      /**
       * Used for keyboard navigation through results.
       * An internal reference to the current section we're navigating in.
       * @type {number}
       */

      _this._sectionIndex = 0;
      /**
       * Used for keyboard navigation through results.
       * An internal reference to the current result index we're navigating on.
       * @type {number}
       */

      _this._resultIndex = -1;
      /**
       * The query text to show as the first item for auto complete.
       * Optionally provided
       * @type {string}
       */

      _this.promptHeader = opts.promptHeader || null;
      /**
       * Whether the input is autocomatically focused or not
       * @type {boolean}
       */

      _this._autoFocus = opts.autoFocus || false;
      /**
       * Callback invoked when the `Enter` key is pressed on auto complete.
       */

      _this._onSubmit = opts.onSubmit || function () {};

      _this._searchParameters = opts.searchParameters || null;
      return _this;
    }
    /**
     * The aliased used by the component manager for creation.
     */


    _createClass(AutoCompleteComponent, [{
      key: "setState",

      /**
       * setState is overridden so that we can provide additional meta data
       * to the template (e.g. the sectionIndex and resultIndex), since
       * those are client-interaction specific values and aren't returned from the server.
       */
      value: function setState(data) {
        _get(_getPrototypeOf(AutoCompleteComponent.prototype), "setState", this).call(this, Object.assign({}, data, {
          hasResults: this.hasResults(data),
          sectionIndex: this._sectionIndex,
          resultIndex: this._resultIndex,
          promptHeader: this._originalQuery.length === 0 ? this.promptHeader : null
        }));
      }
      /**
       * updateState is a helper to apply the current state with new client-state.
       */

    }, {
      key: "updateState",
      value: function updateState() {
        this.setState(this._state.get());
      }
      /**
       * onCreate is triggered when the component is constructed from the framework.
       * Once we're initalized, we wire up all of our user interactions
       */

    }, {
      key: "onCreate",
      value: function onCreate() {
        var _this2 = this;

        // Use the context of the parent component to find the input node.
        var queryInput = DOM.query(this._parentContainer, this._inputEl);

        if (!queryInput) {
          throw new Error('Could not initialize AutoComplete. Can not find {HTMLElement} `', this._inputEl, '`.');
        } // Disable the native autocomplete, autocorrect & spellcheck


        DOM.attributes(queryInput, {
          autocomplete: 'off',
          autocorrect: 'off',
          spellcheck: 'false'
        }); // The user exits the input, so we want to reset the state and close
        // the auto complete
        // TODO(jdelerme): Close logic to be moved to parent

        DOM.on(document, 'click', function (e) {
          if (e.target.matches('.js-yxt-AutoComplete-wrapper *') || e.target.matches(_this2._inputEl)) {
            return;
          }

          _this2.close();
        }); // When a user focuses the input, we should populate the autocomplete based
        // on the current value

        DOM.on(queryInput, 'focus', function () {
          _this2.reset();

          _this2.autoComplete(queryInput.value);
        }); // Allow the user to navigate between the results using the keyboard

        DOM.on(queryInput, 'keydown', function (e) {
          _this2.handleNavigateResults(e.keyCode, e);

          _this2.handleSubmitResult(e.keyCode, queryInput.value, e);
        });

        if (this._autoFocus) {
          DOM.once(queryInput, 'click', function () {
            _this2.autoComplete(queryInput.value);
          });
        } // Allow the user to select a result with the mouse


        DOM.delegate(this._container, '.js-yext-autocomplete-option', 'click', function (evt, target) {
          var data = target.dataset;
          var val = data["short"];

          _this2.updateQuery(val);

          _this2._onSubmit(val, data.filter);

          _this2.close();
        }); // When the user is typing in the input, process the auto complete.

        DOM.on(queryInput, 'keyup', function (e) {
          _this2.handleTyping(e.keyCode, queryInput.value, e);
        });
      }
      /**
       * close will hide the auto complete results and reset the state.
       */

    }, {
      key: "close",
      value: function close() {
        this.setState({});
        this.reset();
      }
      /**
       * resets the client state to their original values and triggers
       * a template-rerender via updateState
       */

    }, {
      key: "reset",
      value: function reset() {
        this._sectionIndex = 0;
        this._resultIndex = -1;
        this.updateState();
      }
      /**
       * Helper method to update the input text
       * @param {string} optValue Option value provided.
       * If no value provided, we'll try to find it based on the selection indexes.
       */

    }, {
      key: "updateQuery",
      value: function updateQuery(optValue) {
        // Only want to update the query string if theres a value.
        // If one is provided, great.
        // Otherwise, lets try to find it from the current selection in the results.
        if (optValue === undefined) {
          var sections = this._state.get('sections');

          var results = sections[this._sectionIndex].results;
          optValue = results[this._resultIndex].shortValue;
        }

        var queryEl = DOM.query(this._parentContainer, this._inputEl);
        queryEl.value = optValue;
      }
    }, {
      key: "handleTyping",
      value: function handleTyping(key, value, e) {
        var ignoredKeys = [Keys.DOWN, Keys.UP, Keys.CTRL, Keys.ALT, Keys.SHIFT, Keys.LEFT, Keys.RIGHT, Keys.LEFT_OS_KEY, Keys.RIGHT_OS_KEY, Keys.ENTER, Keys.TAB, Keys.SELECT_KEY];

        if (ignoredKeys.indexOf(key) > -1) {
          return;
        } // User escapes out of auto complete, so we reset it to the original input


        if (key === Keys.ESCAPE) {
          this.updateQuery(this._originalQuery);
          this.close();
          return;
        } // Update the original value based on the user input


        this._originalQuery = value;
        this.reset();
        this.autoComplete(value);
      }
    }, {
      key: "autoComplete",
      value: function autoComplete(input) {
        if (this.isFilterSearch) {
          this.core.autoCompleteFilter(input, {
            namespace: this.name,
            verticalKey: this._verticalKey,
            barKey: this._barKey,
            searchParameters: this._searchParameters
          });
        } else if (this._verticalKey || this._barKey) {
          this.core.autoCompleteVertical(input, this.name, this._verticalKey, this._barKey);
        } else {
          this.core.autoCompleteUniversal(input, this.name);
        }
      }
      /**
       * returns true if we have results in any section
       * @returns boolean
       */

    }, {
      key: "hasResults",
      value: function hasResults(data) {
        if (!data) {
          return false;
        }

        var sections = data['sections'];

        if (!sections) {
          return false;
        }

        for (var i = 0; i < sections.length; i++) {
          var _data = sections[i];

          if (!_data) {
            continue;
          }

          var results = _data.results;

          if (!results) {
            continue;
          }

          if (results.length > 0) {
            return true;
          }
        }

        return false;
      }
    }, {
      key: "handleNavigateResults",
      value: function handleNavigateResults(key, e) {
        var sections = this._state.get('sections');

        if (sections === undefined || sections.length <= 0) {
          return;
        } // Tabbing out or enter should close the auto complete.


        if (key === Keys.TAB) {
          this.close();
          return;
        }

        var results = sections[this._sectionIndex].results;

        if (key === Keys.UP) {
          e.preventDefault();

          if (this._resultIndex <= 0) {
            if (this._sectionIndex > 0) {
              this._sectionIndex--;
              this._resultIndex = sections[this._sectionIndex].results.length - 1;
            } else {
              this.updateQuery(this._originalQuery);
              this.reset();
              return;
            }

            this.updateQuery();
            this.updateState();
            return;
          }

          this._resultIndex--;
          this.updateState();
          this.updateQuery();
          return;
        }

        if (key === Keys.DOWN) {
          e.preventDefault();

          if (this._resultIndex >= results.length - 1) {
            if (this._sectionIndex < sections.length - 1) {
              this._sectionIndex++;
              this._resultIndex = 0;
            }

            this.updateQuery();
            this.updateState();
            return;
          }

          this._resultIndex++;
          this.updateQuery();
          this.updateState();
        }
      }
    }, {
      key: "handleSubmitResult",
      value: function handleSubmitResult(key, value, e) {
        var sections = this._state.get('sections');

        if (sections === undefined || sections.length <= 0) {
          if (this.isFilterSearch) {
            this.autoComplete(value);
          }

          return;
        } // submit the search on enter


        if (key === Keys.ENTER) {
          e.preventDefault();

          if (this.isFilterSearch && this._resultIndex === -1) {
            return;
          }

          var filter = '';

          if (this._sectionIndex >= 0 && this._resultIndex >= 0) {
            filter = JSON.stringify(sections[this._sectionIndex].results[this._resultIndex].filter);
          }

          this.updateQuery(value);
          this._originalQuery = value;

          this._onSubmit(value, filter);

          this.close();
        }
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
        return 'search/autocomplete';
      }
    }, {
      key: "type",
      get: function get() {
        return 'AutoComplete';
      }
    }]);

    return AutoCompleteComponent;
  }(Component);

  /**
   * SpellCheckComponent will support displaying suggestion, autocorrect and combined(maybe in the future)
   * provided from spelling correction.
   *
   * @extends Component
   */

  var SpellCheckComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(SpellCheckComponent, _Component);

    function SpellCheckComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, SpellCheckComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(SpellCheckComponent).call(this, config, systemConfig));
      _this.moduleId = StorageKeys.SPELL_CHECK;
      return _this;
    }

    _createClass(SpellCheckComponent, [{
      key: "onCreate",
      value: function onCreate() {
        this.core.persistentStorage["delete"]('skipSpellCheck');
        this.core.persistentStorage["delete"]('queryTrigger');
      }
    }, {
      key: "setState",
      value: function setState(data, val) {
        return _get(_getPrototypeOf(SpellCheckComponent.prototype), "setState", this).call(this, Object.assign({}, data, {
          shouldShow: data.correctedQuery !== undefined,
          correctedQueryUrl: this._buildRedirectQueryUrl(data.correctedQuery, data.type),
          helpText: this._getHelpText(data.type)
        }, val));
      }
    }, {
      key: "_buildRedirectQueryUrl",
      value: function _buildRedirectQueryUrl(query, type) {
        if (query === undefined) {
          return '';
        }

        var params = new SearchParams(window.location.search.substring(1));
        params.set('query', query.value);
        params.set('skipSpellCheck', true);
        params.set('queryTrigger', type.toLowerCase());
        return '?' + params.toString();
      }
    }, {
      key: "_getHelpText",
      value: function _getHelpText(type) {
        switch (type) {
          case 'SUGGEST':
            return 'Did you mean:';

          default:
            return '';
        }
      }
    }], [{
      key: "defaultTemplateName",
      value: function defaultTemplateName() {
        return 'search/spellcheck';
      }
    }, {
      key: "type",
      get: function get() {
        return 'SpellCheck';
      }
    }]);

    return SpellCheckComponent;
  }(Component);

  /** @module Facet */

  /**
   * Model representing a facet filter with the format of
   * {
   *   "field_name": [ Filters... ],
   *   ...
   * }
   *
   * @see {@link Filter}
   */
  var Facet =
  /*#__PURE__*/
  function () {
    function Facet() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Facet);

      Object.assign(this, data);
      Object.freeze(this);
    }
    /**
     * Create a facet filter from a list of Filters
     * @param  {...Filter} filters The filters to use in this facet
     * @returns {Facet}
     */


    _createClass(Facet, null, [{
      key: "fromFilters",
      value: function fromFilters() {
        var groups = {};

        for (var _len = arguments.length, filters = new Array(_len), _key = 0; _key < _len; _key++) {
          filters[_key] = arguments[_key];
        }

        var flatFilters = filters.flatMap(function (f) {
          return f.$or || f;
        });
        flatFilters.forEach(function (f) {
          var key = Object.keys(f)[0];

          if (!groups[key]) {
            groups[key] = [];
          }

          groups[key].push(f);
        });
        return new Facet(groups);
      }
    }]);

    return Facet;
  }();

  /**
   * Renders a set of filters, and searches with them when applied.
   * Multiple FilterBox components will AND together but will not share state.
   * @extends Component
   */

  var FilterBoxComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(FilterBoxComponent, _Component);

    function FilterBoxComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, FilterBoxComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterBoxComponent).call(this, config, systemConfig));

      if (!config.filters || !(config.filters instanceof Array)) {
        throw new AnswersComponentError('FilterBox requires filters to be provided as an array', 'FilterBox');
      }
      /**
       * The list of filters to display and control
       * @type {object[]}
       * @private
       */


      _this._filterConfigs = config.filters;
      /**
       * The vertical key for the search
       * @type {string}
       * @private
       */

      _this._verticalKey = config.verticalKey || null;
      /**
       * If true, trigger a search on each change to a filter
       * @type {boolean}
       * @private
       */

      _this._searchOnChange = config.searchOnChange || false;
      /**
       * The selector of the apply button
       * @type {string}
       * @private
       */

      _this._applyButtonSelector = config.applyButtonSelector || '.js-yext-filterbox-apply';
      /**
       * The components created for each filter config
       * @type {Component[]}
       * @private
       */

      _this._filterComponents = [];
      /**
       * The current state of the filter components in the box
       * @type {Filter}
       * @private
       */

      _this._filters = [];
      /**
       * Whether or not this filterbox contains dynamic filters. This affects the
       * the way the filters are used in the search
       * @type {boolean}
       * @private
       */

      _this._isDynamic = config.isDynamic || false;
      /**
       * The template to render
       * @type {string}
       * @private
       */

      _this._templateName = "filters/filterbox";
      return _this;
    }

    _createClass(FilterBoxComponent, [{
      key: "setState",
      value: function setState(data) {
        _get(_getPrototypeOf(FilterBoxComponent.prototype), "setState", this).call(this, Object.assign(data, {
          filterConfigs: this._filterConfigs,
          showApplyButton: !this._searchOnChange
        }));
      }
    }, {
      key: "onMount",
      value: function onMount() {
        var _this2 = this;

        if (this._filterComponents.length) {
          this._filterComponents.forEach(function (c) {
            return c.remove();
          });

          this._filterComponents = [];
          this._filters = [];
        } // Initialize filters from configs


        var _loop = function _loop(i) {
          var config = _this2._filterConfigs[i];

          var component = _this2.componentManager.create(config.type, Object.assign({}, config, {
            parentContainer: _this2._container,
            name: "".concat(_this2.name, ".filter").concat(i),
            storeOnChange: false,
            container: ".js-yext-filterbox-filter".concat(i),
            onChange: function onChange(filter) {
              _this2.onFilterChange(i, filter);
            }
          }));

          component.mount();

          _this2._filterComponents.push(component);

          _this2._filters[i] = component.getFilter();

          _this2._saveFiltersToStorage();
        };

        for (var i = 0; i < this._filterConfigs.length; i++) {
          _loop(i);
        } // Initialize apply button


        if (!this._searchOnChange) {
          var button = DOM.query(this._container, this._applyButtonSelector);

          if (button) {
            DOM.on(button, 'click', function () {
              _this2._saveFiltersToStorage();

              _this2._search();
            });
          }
        }
      }
      /**
       * Handle changes to child filter components
       * @param {number} index The index of the changed filter
       * @param {Filter} filter The new filter
       */

    }, {
      key: "onFilterChange",
      value: function onFilterChange(index, filter) {
        this._filters[index] = filter;

        if (this._searchOnChange) {
          this._saveFiltersToStorage();

          this._search();
        }
      }
      /**
       * Remove all filter components along with this component
       */

    }, {
      key: "remove",
      value: function remove() {
        this._filterComponents.forEach(function (c) {
          return c.remove();
        });

        _get(_getPrototypeOf(FilterBoxComponent.prototype), "remove", this).call(this);
      }
      /**
       * Save current filters to storage to be used in the next search
       * @private
       */

    }, {
      key: "_saveFiltersToStorage",
      value: function _saveFiltersToStorage() {
        var validFilters = this._filters.filter(function (f) {
          return f !== undefined && f !== null && Object.keys(f).length > 0;
        });

        if (this._isDynamic) {
          var combinedFilter = Facet.fromFilters.apply(Facet, _toConsumableArray(validFilters));
          this.core.setFacetFilter(this.name, combinedFilter || {});
        } else {
          var _combinedFilter = validFilters.length > 1 ? Filter.and.apply(Filter, _toConsumableArray(validFilters)) : validFilters[0];

          this.core.setFilter(this.name, _combinedFilter || {});
        }
      }
      /**
       * Trigger a search with all filters in storage
       */

    }, {
      key: "_search",
      value: function _search() {
        var allFilters = this.core.globalStorage.getAll(StorageKeys.FILTER);
        var totalFilter = allFilters.length > 1 ? Filter.and.apply(Filter, _toConsumableArray(allFilters)) : allFilters[0];
        var query = this.core.globalStorage.getState(StorageKeys.QUERY);
        var facetFilter = this.core.globalStorage.getAll(StorageKeys.FACET_FILTER)[0];
        this.core.verticalSearch(this._verticalKey, {
          input: query,
          filter: JSON.stringify(totalFilter),
          facetFilter: JSON.stringify(facetFilter)
        });
      }
    }], [{
      key: "type",
      get: function get() {
        return 'FilterBox';
      }
    }]);

    return FilterBoxComponent;
  }(Component);

  /**
   * The currently supported controls
   * @type {string[]}
   */

  var SUPPORTED_CONTROLS = ['singleoption', 'multioption'];
  /**
   * Renders a set of options, each one representing a filter in a search.
   */

  var FilterOptionsComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(FilterOptionsComponent, _Component);

    function FilterOptionsComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, FilterOptionsComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterOptionsComponent).call(this, config, systemConfig));

      if (!config.control || !SUPPORTED_CONTROLS.includes(config.control)) {
        throw new AnswersComponentError('FilterOptions requires a valid "control" to be provided', 'FilterOptions');
      }

      if (!config.options) {
        throw new AnswersComponentError('FilterOptions component requires options to be provided', 'FilterOptions');
      }

      var previousOptions = _this.core.globalStorage.getState(_this.name);

      if (typeof previousOptions === 'string') {
        try {
          previousOptions = JSON.parse(previousOptions);
        } catch (e) {}
      }

      var selectedOptions = previousOptions || [];
      /**
       * The list of filter options to display with checked status
       * @type {object[]}
       * @private
       */

      _this._options = config.options.map(function (o) {
        return _objectSpread({}, o, {
          selected: selectedOptions.length ? selectedOptions.includes(o.label) : o.selected
        });
      });
      /**
       * The type of control to display
       * @type {string}
       * @private
       */

      _this._control = config.control;
      /**
       * The selector used for options in the template
       * @type {string}
       * @private
       */

      _this._optionSelector = config.optionSelector || '.js-yext-filter-option';
      /**
       * If true, stores the filter to storage on each change
       * @type {boolean}
       * @private
       */

      _this._storeOnChange = config.storeOnChange || false;
      /**
       * The callback function to call when changed
       * @type {function}
       * @private
       */

      _this._onChange = config.onChange || function () {};
      /**
       * The label to be used in the legend
       * @type {string}
       * @private
       */


      _this._label = config.label || 'Filters';
      return _this;
    }

    _createClass(FilterOptionsComponent, [{
      key: "setState",
      value: function setState(data) {
        _get(_getPrototypeOf(FilterOptionsComponent.prototype), "setState", this).call(this, Object.assign({}, data, {
          name: this.name.toLowerCase(),
          options: this._options,
          label: this._label
        }));
      }
    }, {
      key: "onMount",
      value: function onMount() {
        var _this2 = this;

        DOM.delegate(DOM.query(this._container, ".".concat(this._control, "-fieldset")), this._optionSelector, 'click', function (event) {
          _this2._updateOption(parseInt(event.target.dataset.index), event.target.checked);

          var filter = _this2._buildFilter();

          if (_this2._storeOnChange) {
            _this2.core.setFilter(_this2.name, filter);
          }

          _this2._onChange(filter);
        });
      }
    }, {
      key: "_updateOption",
      value: function _updateOption(index, selected) {
        if (this._control === 'singleoption') {
          this._options = this._options.map(function (o) {
            return Object.assign({}, o, {
              selected: false
            });
          });
        }

        this._options[index] = Object.assign({}, this._options[index], {
          selected: selected
        });
        this.setState();
      }
    }, {
      key: "getFilter",
      value: function getFilter() {
        return this._buildFilter();
      }
      /**
       * Clear all options
       */

    }, {
      key: "clear",
      value: function clear() {
        var elements = DOM.queryAll(this._container, this._optionSelector);
        elements.forEach(function (e) {
          return e.setAttribute('checked', 'false');
        });

        this._applyFilter();
      }
      /**
       * Build and return the Filter that represents the current state
       * @returns {Filter}
       * @private
       */

    }, {
      key: "_buildFilter",
      value: function _buildFilter() {
        var filters = this._options.filter(function (o) {
          return o.selected;
        }).map(function (o) {
          return o.filter ? o.filter : Filter.equal(o.field, o.value);
        });

        this.core.persistentStorage.set(this.name, this._options.filter(function (o) {
          return o.selected;
        }).map(function (o) {
          return o.label;
        }));
        return filters.length > 0 ? Filter.group.apply(Filter, _toConsumableArray(filters)) : {};
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render, based on the control
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
        return "controls/".concat(config.control);
      }
    }, {
      key: "type",
      get: function get() {
        return 'FilterOptions';
      }
    }]);

    return FilterOptionsComponent;
  }(Component);

  var RangeFilterComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(RangeFilterComponent, _Component);

    function RangeFilterComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, RangeFilterComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(RangeFilterComponent).call(this, config, systemConfig));
      /**
       * The field to filter on
       * @type {string}
       * @private
       */

      _this._field = config.field;
      /**
       * The callback function to call when the filter value changes
       * @type {function}
       * @private
       */

      _this._onChange = config.onChange || function () {};
      /**
       * If true, stores the filter to storage on each change
       * @type {boolean}
       * @private
       */


      _this._storeOnChange = config.storeOnChange || false;

      var minVal = _this.core.globalStorage.getState("".concat(_this.name, ".min"));

      if (typeof minVal === 'string') {
        try {
          minVal = Number.parseInt(minVal);
        } catch (e) {}
      }

      var maxVal = _this.core.globalStorage.getState("".concat(_this.name, ".max"));

      if (typeof minVal === 'string') {
        try {
          maxVal = Number.parseInt(maxVal);
        } catch (e) {}
      }
      /**
       * The current range represented
       * @type {object}
       * @private
       */


      _this._range = {
        min: minVal || config.initialMin || 0,
        max: maxVal || config.initialMax || 10
      };
      /**
       * The title to display for the range control
       * @type {string}
       * @private
       */

      _this._title = config.title;
      /**
       * The optional label to display for the min input
       * @type {string}
       * @private
       */

      _this._minLabel = config.minLabel || null;
      /**
       * The optional label to display for the max input
       * @type {string}
       * @private
       */

      _this._maxLabel = config.maxLabel || null;
      /**
       * The template to render
       * @type {string}
       * @private
       */

      _this._templateName = "controls/range";
      return _this;
    }

    _createClass(RangeFilterComponent, [{
      key: "setState",
      value: function setState(data) {
        _get(_getPrototypeOf(RangeFilterComponent.prototype), "setState", this).call(this, Object.assign({}, data, {
          name: this.name,
          title: this._title,
          minLabel: this._minLabel,
          maxLabel: this._maxLabel,
          minValue: this._range.min,
          maxValue: this._range.max
        }));
      }
    }, {
      key: "onCreate",
      value: function onCreate() {
        var _this2 = this;

        DOM.delegate(this._container, '.js-yext-range', 'change', function (event) {
          _this2._updateRange(event.target.dataset.key, Number.parseInt(event.target.value));
        });
      }
    }, {
      key: "setMin",
      value: function setMin(value) {
        this._updateRange('min', value);
      }
    }, {
      key: "setMax",
      value: function setMax(value) {
        this._updateRange('max', value);
      }
    }, {
      key: "getFilter",
      value: function getFilter() {
        return this._buildFilter();
      }
      /**
       * Update the current range state
       * @param {string} key The range key to update
       * @param {number} value The new value for the key
       */

    }, {
      key: "_updateRange",
      value: function _updateRange(key, value) {
        this._range = Object.assign({}, this._range, _defineProperty({}, key, value));
        this.setState();

        var filter = this._buildFilter();

        if (this._storeOnChange) {
          this.core.setFilter(this.name, filter);
        }

        this.core.persistentStorage.set("".concat(this.name, ".min"), this._range.min);
        this.core.persistentStorage.set("".concat(this.name, ".max"), this._range.max);

        this._onChange(filter);
      }
      /**
       * Build the filter representation of the current state
       * @returns {Filter}
       */

    }, {
      key: "_buildFilter",
      value: function _buildFilter() {
        return Filter.inclusiveRange(this._field, this._range.min, this._range.max);
      }
    }], [{
      key: "type",
      get: function get() {
        return 'RangeFilter';
      }
    }]);

    return RangeFilterComponent;
  }(Component);

  /**
   * A filter for a range of dates
   */

  var DateRangeFilterComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(DateRangeFilterComponent, _Component);

    function DateRangeFilterComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, DateRangeFilterComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DateRangeFilterComponent).call(this, config, systemConfig));
      /**
       * The api field this filter controls
       * @type {string}
       * @private
       */

      _this._field = config.field;
      /**
       * The title to display for the date range
       * @type {string}
       * @private
       */

      _this._title = config.title;
      /**
       * The optional label to show for the min date input
       * @type {string}
       * @private
       */

      _this._minLabel = config.minLabel || null;
      /**
       * The optional label to show for the max date input
       * @type {string}
       * @private
       */

      _this._maxLabel = config.maxLabel || null;
      /**
       * The callback used when a date is changed
       * @type {function}
       * @private
       */

      _this._onChange = config.onChange || function () {};
      /**
       * If true, stores the filter to storage on each change
       * @type {boolean}
       * @private
       */


      _this._storeOnChange = config.storeOnChange || false;
      /**
       * If true, this filter represents an exclusive range, rather than an inclusive one
       * @type {boolean}
       * @private
       */

      _this._isExclusive = config.isExclusive;
      /**
       * The template for this component
       * @private
       */

      _this._templateName = "controls/date";
      var today = new Date();
      var todayString = "".concat(today.getFullYear(), "-").concat("".concat(today.getMonth() + 1).padStart(2, '0'), "-").concat("".concat(today.getDate()).padStart(2, '0'));

      var minDate = _this.core.globalStorage.getState("".concat(_this.name, ".min"));

      var maxDate = _this.core.globalStorage.getState("".concat(_this.name, ".max"));
      /**
       * The current date range
       * @private
       */


      _this._date = {
        min: minDate || config.initialMin || todayString,
        max: maxDate || config.initialMax || todayString
      };
      return _this;
    }

    _createClass(DateRangeFilterComponent, [{
      key: "setState",
      value: function setState(data) {
        _get(_getPrototypeOf(DateRangeFilterComponent.prototype), "setState", this).call(this, Object.assign({}, data, {
          name: this.name,
          title: this._title,
          minLabel: this._minLabel,
          maxLabel: this._maxLabel,
          dateMin: this._date.min,
          dateMax: this._date.max
        }));
      }
    }, {
      key: "onCreate",
      value: function onCreate() {
        var _this2 = this;

        DOM.delegate(this._container, '.js-yext-date', 'change', function (event) {
          _this2._updateRange(event.target.dataset.key, event.target.value);
        });
      }
      /**
       * Set the min date to the one provided
       * @param {string} date Date to set in yyyy-mm-dd string format
       */

    }, {
      key: "setMin",
      value: function setMin(date) {
        this._updateRange('min', date);
      }
      /**
       * Set the max date to the one provided
       * @param {string} date Date to set in yyyy-mm-dd string format
       */

    }, {
      key: "setMax",
      value: function setMax(date) {
        this._updateRange('max', date);
      }
    }, {
      key: "getFilter",
      value: function getFilter() {
        return this._buildFilter();
      }
      /**
       * Updates the current state of the date range
       * @param {string} key The key for the date value
       * @param {string} value The string date value
       * @private
       */

    }, {
      key: "_updateRange",
      value: function _updateRange(key, value) {
        this._date = Object.assign({}, this._date, _defineProperty({}, key, value));
        this.setState();

        var filter = this._buildFilter();

        if (this._storeOnChange) {
          this.core.setFilter(this.name, filter);
        }

        this.core.persistentStorage.set("".concat(this.name, ".min"), this._date.min);
        this.core.persistentStorage.set("".concat(this.name, ".max"), this._date.max);

        this._onChange(filter);
      }
      /**
       * Construct an api filter with the current date state
       * @private
       */

    }, {
      key: "_buildFilter",
      value: function _buildFilter() {
        if (this._date.min === '' || this._date.max === '') {
          return {};
        }

        return this._isExclusive ? Filter.exclusiveRange(this._field, this._date.min, this._date.max) : Filter.inclusiveRange(this._field, this._date.min, this._date.max);
      }
    }], [{
      key: "type",
      get: function get() {
        return 'DateRangeFilter';
      }
    }]);

    return DateRangeFilterComponent;
  }(Component);

  /**
   * Displays a set of dynamic filters returned from the backend
   * @extends Component
   */

  var DynamicFiltersComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(DynamicFiltersComponent, _Component);

    function DynamicFiltersComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, DynamicFiltersComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DynamicFiltersComponent).call(this, config, systemConfig));
      /**
       * The vertical key for the search
       * @type {string}
       * @private
       */

      _this._verticalKey = config.verticalKey || null;
      /**
       * If true, trigger a search on each change to a filter
       * @type {boolean}
       * @private
       */

      _this._searchOnChange = config.searchOnChange || false;
      /**
       * The selector of the apply button
       * @type {string}
       * @private
       */

      _this._applyButtonSelector = config.applyButtonSelector || null;
      /**
       * The controls to use for each field. Each type of filter has a default
       * $eq : multioption (checkbox)
       * @type {Object}
       */

      _this._fieldControls = config.fieldControls || {};
      /**
       * The template to render
       * @type {string}
       * @private
       */

      _this._templateName = 'filters/dynamic';
      /**
       * An internal reference for the data storage to listen for updates from the server
       * @type {string}
       */

      _this.moduleId = StorageKeys.DYNAMIC_FILTERS;
      /**
       * The filter box that displays the dynamic filters
       * @type {FilterBoxComponent}
       * @private
       */

      _this._filterbox = null;
      return _this;
    }

    _createClass(DynamicFiltersComponent, [{
      key: "onMount",
      value: function onMount() {
        var _this2 = this;

        this.core.enableDynamicFilters();

        if (this._filterbox) {
          this._filterbox.remove();
        }

        var _this$_state$get = this._state.get(),
            filters = _this$_state$get.filters;

        if (!filters) {
          return;
        }

        filters = filters.map(function (f) {
          return Object.assign({}, f, {
            type: 'FilterOptions',
            control: _this2._fieldControls[f.fieldId] || 'multioption'
          });
        });
        this._filterbox = this.componentManager.create('FilterBox', Object.assign({}, {
          parentContainer: this._container,
          name: "".concat(this.name, ".filterbox"),
          container: '.js-yext-dynamic-filters',
          searchOnChange: this._searchOnChange,
          verticalKey: this._verticalKey,
          isDynamic: true,
          filters: filters
        }));

        this._filterbox.mount();
      }
    }], [{
      key: "type",
      get: function get() {
        return 'DynamicFilters';
      }
    }]);

    return DynamicFiltersComponent;
  }(Component);

  var METERS_PER_MILE = 1609.344;
  var DEFAULT_CONFIG = {
    /**
     * The radius, in miles, around the user's location to find results.
     * If location accuracy is low, a larger radius may be used automatically
     * @type {number}
     */
    radius: 50,

    /**
     * The vertical key to use
     * @type {string}
     */
    verticalKey: null,

    /**
     * If true, submits a search when the value is changed
     * @type {boolean}
     */
    searchOnChange: false,

    /**
     * The title to display
     * @type {string}
     */
    title: 'Location',

    /**
     * The label to display
     * @type {string}
     */
    label: 'Location',

    /**
     * The icon url to show in the geo button
     * @type {string}
     */
    geoButtonIcon: '',

    /**
     * The text to show in the geo button
     * @type {string}
     */
    geoButtonText: 'Use My Location',

    /**
     * The text to show when geolocation is enabled
     * @type {string}
     */
    enabledText: 'Current Location',

    /**
     * The text to show when loading the user's location
     * @type {string}
     */
    loadingText: 'Finding Your Location...',

    /**
     * The text to show if the user's location cannot be found
     * @type {string}
     */
    errorText: 'Could Not Find Your Location',

    /**
     * The CSS selector of the toggle button
     * @type {string}
     */
    buttonSelector: '.js-yxt-GeoLocationFilter-button',

    /**
     * The CSS selector of the query input
     * @type {string}
     */
    inputSelector: '.js-yxt-GeoLocationFilter-input'
  };
  /**
   * Renders a button that when clicked adds a static filter representing the user's location
   * @extends Component
   */

  var GeoLocationComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(GeoLocationComponent, _Component);

    function GeoLocationComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, GeoLocationComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(GeoLocationComponent).call(this, _objectSpread({}, DEFAULT_CONFIG, {}, config), systemConfig));
      /**
       * The query string to use for the input box, provided to template for rendering.
       * @type {string}
       */

      _this.query = _this.core.globalStorage.getState("".concat(StorageKeys.QUERY, ".").concat(_this.name)) || '';

      _this.core.globalStorage.on('update', "".concat(StorageKeys.QUERY, ".").concat(_this.name), function (q) {
        _this.query = q;

        _this.setState();
      });
      /**
       * The filter to use for the current query
       * @type {Filter}
       */


      _this.filter = _this.core.globalStorage.getState("".concat(StorageKeys.FILTER, ".").concat(_this.name)) || {};

      if (typeof _this.filter === 'string') {
        try {
          _this.filter = JSON.parse(_this.filter);
        } catch (e) {}
      }

      _this.core.globalStorage.on('update', "".concat(StorageKeys.FILTER, ".").concat(_this.name), function (f) {
        _this.filter = f;
      });

      return _this;
    }

    _createClass(GeoLocationComponent, [{
      key: "setState",
      value: function setState(data) {
        var placeholder = '';

        if (this._enabled) {
          placeholder = this._config.enabledText;
        }

        if (data.geoLoading) {
          placeholder = this._config.loadingText;
        }

        if (data.geoError) {
          placeholder = this._config.errorText;
        }

        _get(_getPrototypeOf(GeoLocationComponent.prototype), "setState", this).call(this, _objectSpread({}, data, {
          title: this._config.title,
          geoEnabled: this._enabled,
          query: this.query,
          labelText: this._config.label,
          enabledText: this._config.enabledText,
          loadingText: this._config.loadingText,
          errorText: this._config.errorText,
          geoButtonIcon: this._config.geoButtonIcon,
          geoValue: this._enabled || data.geoLoading || data.geoError ? '' : this.query,
          geoPlaceholder: placeholder,
          geoButtonText: this._config.geoButtonText
        }));
      }
    }, {
      key: "onMount",
      value: function onMount() {
        var _this2 = this;

        if (this._autocomplete) {
          this._autocomplete.remove();
        }

        this._initAutoComplete(this._config.inputSelector);

        DOM.on(this._config.buttonSelector, 'click', function () {
          return _this2._toggleGeoFilter();
        });
      }
      /**
       * A helper method to wire up our auto complete on an input selector
       * @param {string} inputSelector CSS selector to bind our auto complete component to
       * @private
       */

    }, {
      key: "_initAutoComplete",
      value: function _initAutoComplete(inputSelector) {
        var _this3 = this;

        if (this._autocomplete) {
          this._autocomplete.remove();
        }

        this._autocomplete = this.componentManager.create('AutoComplete', {
          parentContainer: this._container,
          name: "".concat(this.name, ".autocomplete"),
          isFilterSearch: true,
          container: '.js-yxt-GeoLocationFilter-autocomplete',
          originalQuery: this.query,
          originalFilter: this.filter,
          inputEl: inputSelector,
          verticalKey: this._verticalKey,
          onSubmit: function onSubmit(query, filter) {
            _this3.query = query;
            _this3.filter = Filter.fromResponse(filter);

            _this3._saveDataToStorage(query, _this3.filter);

            _this3._enabled = false;
          }
        });
      }
      /**
       * Toggles the static filter representing the user's location
       * @private
       */

    }, {
      key: "_toggleGeoFilter",
      value: function _toggleGeoFilter() {
        var _this4 = this;

        if (!navigator.geolocation) {
          this.setState({
            geoError: true
          });
          return;
        }

        if (!this._enabled) {
          this.setState({
            geoLoading: true
          });
          navigator.geolocation.getCurrentPosition(function (position) {
            var filter = _this4._buildFilter(position);

            _this4._saveDataToStorage('', filter, position);

            _this4._enabled = true;

            _this4.setState({});

            _this4.core.persistentStorage["delete"]("".concat(StorageKeys.QUERY, ".").concat(_this4.name));

            _this4.core.persistentStorage["delete"]("".concat(StorageKeys.FILTER, ".").concat(_this4.name));
          }, function () {
            return _this4.setState({
              geoError: true
            });
          });
        }
      }
      /**
       * Saves the provided filter under this component's name
       * @param {string} query The query to save
       * @param {Filter} filter The filter to save
       * @param {Object} position The position to save
       * @private
       */

    }, {
      key: "_saveDataToStorage",
      value: function _saveDataToStorage(query, filter, position) {
        this.core.persistentStorage.set("".concat(StorageKeys.QUERY, ".").concat(this.name), query);
        this.core.persistentStorage.set("".concat(StorageKeys.FILTER, ".").concat(this.name), filter);
        this.core.setFilter(this.name, filter);

        if (position) {
          this.core.globalStorage.set(StorageKeys.GEOLOCATION, {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            radius: position.coords.accuracy
          });
        }

        if (this._config.searchOnChange) {
          var filters = this.core.globalStorage.getAll(StorageKeys.FILTER);
          var totalFilter = filters[0];

          if (filters.length > 1) {
            totalFilter = Filter.and.apply(Filter, _toConsumableArray(filters));
          }

          var searchQuery = this.core.globalStorage.getState(StorageKeys.QUERY) || '';
          var facetFilter = this.core.globalStorage.getAll(StorageKeys.FACET_FILTER)[0];
          this.core.verticalSearch(this._config.verticalKey, {
            input: searchQuery,
            filter: JSON.stringify(totalFilter),
            facetFilter: JSON.stringify(facetFilter)
          });
        }
      }
      /**
       * Given a position, construct a Filter object
       * @param {Postition} position The position
       * @returns {Filter}
       * @private
       */

    }, {
      key: "_buildFilter",
      value: function _buildFilter(position) {
        var _position$coords = position.coords,
            latitude = _position$coords.latitude,
            longitude = _position$coords.longitude,
            accuracy = _position$coords.accuracy;
        var radius = Math.max(accuracy, this._config.radius * METERS_PER_MILE);
        return Filter.position(latitude, longitude, radius);
      }
    }], [{
      key: "defaultTemplateName",
      value: function defaultTemplateName() {
        return 'controls/geolocation';
      }
    }, {
      key: "type",
      get: function get() {
        return 'GeoLocationFilter';
      }
    }]);

    return GeoLocationComponent;
  }(Component);

  /**
   * EventTypes are explicit strings defined
   * for what the server expects for analytics.
   *
   * @enum
   */

  var EventTypes = {
    THUMBS_UP: 'THUMBS_UP',
    THUMBS_DOWN: 'THUMBS_DOWN'
  };

  var DirectAnswerComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(DirectAnswerComponent, _Component);

    function DirectAnswerComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, DirectAnswerComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DirectAnswerComponent).call(this, config, systemConfig));
      /**
       * Recieve updates from storage based on this index
       * @type {StorageKey}
       */

      _this.moduleId = StorageKeys.DIRECT_ANSWER;
      /**
       * The form used for submitting the feedback
       * @type {string}
       */

      _this._formEl = config.formEl || '.js-directAnswer-feedback-form';
      /**
       * The `thumbs up` css selector to bind ui interaction to for reporting
       * @type {string}
       */

      _this._thumbsUpSelector = config.thumbsUpSelector || '.js-directAnswer-thumbUp';
      /**
       * The `thumbs down` css selector to bind ui interaction to for reporting
       * @type {string}
       */

      _this._thumbsDownSelector = config.thumbsDownSelector || '.js-directAnswer-thumbDown';
      /**
       * The display text for the View Details click to action link
       * @type {string}
       */

      _this._viewDetailsText = config.viewDetailsText || 'View Details';
      return _this;
    }

    _createClass(DirectAnswerComponent, [{
      key: "beforeMount",

      /**
       * beforeMount, only display the direct answer component if it has data
       */
      value: function beforeMount() {
        if (!this.hasState('answer')) {
          return false;
        }

        return true;
      }
      /**
       * When the DOM is constructed,
       * we want to wire up the behavior for interacting with the quality feedback reporting (thumbsup/down)
       */

    }, {
      key: "onMount",
      value: function onMount() {
        var _this2 = this;

        // Avoid bindings if the feedback has previously been submitted
        if (this.getState('feedbackSubmitted') === true) {
          return this;
        } // For WCAG compliance, the feedback should be a submittable form


        DOM.on(this._formEl, 'submit', function (e) {
          var formEl = e.target;
          var checkedValue = DOM.query(formEl, 'input:checked').value === 'true';

          _this2.reportQuality(checkedValue);

          _this2.updateState({
            'feedbackSubmitted': true
          });
        }); // Is this actually necessary? I guess it's only necessary if the
        // submit button is hidden.

        DOM.on(this._thumbsUpSelector, 'click', function () {
          DOM.trigger(_this2._formEl, 'submit');
        });
        DOM.on(this._thumbsDownSelector, 'click', function () {
          DOM.trigger(_this2._formEl, 'submit');
        });
      }
      /**
       * updateState enables for partial updates (the delta between the old and new)
       * @type {object} The new state to apply to the old
       */

    }, {
      key: "updateState",
      value: function updateState() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var newState = Object.assign({}, this.getState(), state);
        this.setState(newState);
      }
    }, {
      key: "setState",
      value: function setState(data) {
        return _get(_getPrototypeOf(DirectAnswerComponent.prototype), "setState", this).call(this, Object.assign({}, data, {
          eventOptions: this.eventOptions(data),
          viewDetailsText: this._viewDetailsText
        }));
      }
    }, {
      key: "eventOptions",
      value: function eventOptions(data) {
        if (!data || Object.keys(data).length === 0) {
          return data;
        }

        return JSON.stringify({
          verticalConfigId: data.relatedItem.verticalConfigId,
          searcher: 'UNIVERSAL',
          entityId: data.relatedItem.data.id,
          ctaLabel: this._viewDetailsText.toUpperCase().replace(' ', '_')
        });
      }
      /**
       * reportQuality will send the quality feedback to analytics
       * @param {boolean} isGood true if the answer is what you were looking for
       */

    }, {
      key: "reportQuality",
      value: function reportQuality(isGood) {
        var eventType = isGood === true ? EventTypes.THUMBS_UP : EventTypes.THUMBS_DOWN;
        var event = new AnalyticsEvent(eventType).addOptions({
          'directAnswer': true
        });
        this.analyticsReporter.report(event);
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
        return 'results/directanswer';
      }
    }, {
      key: "type",
      get: function get() {
        return 'DirectAnswer';
      }
    }]);

    return DirectAnswerComponent;
  }(Component);

  var ResultsItemComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(ResultsItemComponent, _Component);

    function ResultsItemComponent() {
      var _this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, ResultsItemComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ResultsItemComponent).call(this, opts, systemConfig));
      /**
       * verticalConfigId used for analytics and passed to children
       * @type {string}
       * @private
       */

      _this._verticalConfigId = opts.verticalConfigId;
      /**
       * isUniversal is used for analytics and passed to children and is set to
       * true if this component is added by the UniversalResultsComponent
       * @type {boolean}
       * @private
       */

      _this._isUniversal = opts.isUniversal || false;
      return _this;
    }

    _createClass(ResultsItemComponent, [{
      key: "eventOptions",

      /**
       * helper to construct the eventOptions object for the title link
       * @param entityId The ID of the result item, if present
       * @param url The url of the result item, if present
       * @returns {string}
       */
      value: function eventOptions(entityId, url) {
        var options = {
          verticalConfigId: this._verticalConfigId,
          searcher: this._isUniversal ? 'UNIVERSAL' : 'VERTICAL'
        };

        if (entityId) {
          options.entityId = entityId;
        } else {
          options.url = url;
        }

        return JSON.stringify(options);
      }
      /**
       * passes eventOptions to the viewModel
       * @override
       * @param data
       * @returns {ResultsItemComponent}
       */

    }, {
      key: "setState",
      value: function setState(data) {
        return _get(_getPrototypeOf(ResultsItemComponent.prototype), "setState", this).call(this, Object.assign(data, {
          eventOptions: this.eventOptions(data.id, data.link)
        }));
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
        return 'results/resultsitem';
      }
    }, {
      key: "areDuplicateNamesAllowed",
      value: function areDuplicateNamesAllowed() {
        return true;
      }
    }, {
      key: "type",
      get: function get() {
        return 'ResultsItemComponent';
      }
    }]);

    return ResultsItemComponent;
  }(Component);

  var LocationResultsItemComponent =
  /*#__PURE__*/
  function (_ResultsItemComponent) {
    _inherits(LocationResultsItemComponent, _ResultsItemComponent);

    function LocationResultsItemComponent() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, LocationResultsItemComponent);

      return _possibleConstructorReturn(this, _getPrototypeOf(LocationResultsItemComponent).call(this, opts, systemConfig));
    }

    _createClass(LocationResultsItemComponent, null, [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
        return 'results/locationresultsitem';
      }
    }, {
      key: "areDuplicateNamesAllowed",
      value: function areDuplicateNamesAllowed() {
        return true;
      }
    }, {
      key: "type",
      get: function get() {
        return 'LocationResultsItemComponent';
      }
    }]);

    return LocationResultsItemComponent;
  }(ResultsItemComponent);

  var EventResultsItemComponent =
  /*#__PURE__*/
  function (_ResultsItemComponent) {
    _inherits(EventResultsItemComponent, _ResultsItemComponent);

    function EventResultsItemComponent() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, EventResultsItemComponent);

      return _possibleConstructorReturn(this, _getPrototypeOf(EventResultsItemComponent).call(this, opts, systemConfig));
    }

    _createClass(EventResultsItemComponent, null, [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
        return 'results/eventresultsitem';
      }
    }, {
      key: "areDuplicateNamesAllowed",
      value: function areDuplicateNamesAllowed() {
        return true;
      }
    }, {
      key: "type",
      get: function get() {
        return 'EventResultsItemComponent';
      }
    }]);

    return EventResultsItemComponent;
  }(ResultsItemComponent);

  var PeopleResultsItemComponent =
  /*#__PURE__*/
  function (_ResultsItemComponent) {
    _inherits(PeopleResultsItemComponent, _ResultsItemComponent);

    function PeopleResultsItemComponent() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, PeopleResultsItemComponent);

      return _possibleConstructorReturn(this, _getPrototypeOf(PeopleResultsItemComponent).call(this, opts, systemOpts));
    }

    _createClass(PeopleResultsItemComponent, null, [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
        return 'results/peopleresultsitem';
      }
    }, {
      key: "areDuplicateNamesAllowed",
      value: function areDuplicateNamesAllowed() {
        return true;
      }
    }, {
      key: "type",
      get: function get() {
        return 'PeopleResultsItemComponent';
      }
    }]);

    return PeopleResultsItemComponent;
  }(ResultsItemComponent);

  /** @module MapProvider */

  /**
   * A MapProvider is an interface that represents that should be implemented
   * in order to integrate with a Third Party Map provider for
   * interactive maps. MapProviders are used by the MapComponent.
   *
   * Implementations should extend this interface.
   */
  var MapProvider =
  /*#__PURE__*/
  function () {
    function MapProvider() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, MapProvider);

      /**
       * The API Key used for interacting with the map provider
       * @type {string}
       */
      this._apiKey = config.apiKey;
      /**
       * The zoom level of the map, defaults to 9
       * @type {number}
       */

      this._zoom = config.zoom || 9;
      /**
       * The default coordinates to display if there are no results returned
       * Only used if showEmptyMap is set to true
       * @type {Object}
       */

      this._defaultPosition = config.defaultPosition || {
        lat: 37.0902,
        lng: -95.7129
      };
      /**
       * Determines if an empty map should be shown when there are no results
       * @type {boolean}
       */

      this._showEmptyMap = config.showEmptyMap || false;
      /**
       * A reference to the underlying map instance, created by the external lib.
       * @type {number}
       */

      this._map = null;
      /**
       * Temporary boolean tracking whether or not the external JS library is loaded (see TODO below)
       * @type {boolean}
       */

      this._isLoaded = false;
      /**
       * Callback to invoke when a pin is clicked. The clicked item(s) are passed to the callback
       * @type {function}
       */

      this._onPinClick = config.onPinClick || null;
      /**
       * Callback to invoke once the Javascript is loaded
       * @type {function}
       */

      this._onLoaded = config.onLoaded || function () {};
      /**
       * The custom configuration override to use for the map markers
       * @type {Object|Function}
       */


      this._pinConfig = typeof config.pin === 'function' ? config.pin : Object.assign(MapProvider.DEFAULT_PIN_CONFIG, config.pin);
      /**
       * Determines whether or not to collapse pins at the same lat/lng
       * @type {boolean}
       */

      this._collapsePins = config.collapsePins || false;
    }
    /**
     * The default configuration to use for the map markers
     * @type {Object}
     * TODO(billy) Create a configuration model
     */


    _createClass(MapProvider, [{
      key: "onLoaded",
      value: function onLoaded(cb) {
        if (typeof cb !== 'function') {
          return;
        }

        this._onLoaded = cb;

        if (this.isLoaded()) {
          this._onLoaded();
        }
      }
    }, {
      key: "isLoaded",
      value: function isLoaded() {
        return this._isLoaded;
      }
    }, {
      key: "loadJS",
      value: function loadJS() {
        throw new Error('Unimplemented Method: loadJS');
      }
    }, {
      key: "init",
      value: function init(mapData) {
        // TODO(billy) This should be based off a promise that gets created from loadJS
        throw new Error('Unimplemented Method: init');
      }
      /**
       * Given a list of markers, combine markers with the same lat/lng into a single marker
       * @param {object[]} markers The markers to collapse
       */

    }, {
      key: "_collapseMarkers",
      value: function _collapseMarkers(markers) {
        var locationToItem = {};
        markers.forEach(function (m) {
          locationToItem["".concat(m.latitude).concat(m.longitude)] ? locationToItem["".concat(m.latitude).concat(m.longitude)].push(m) : locationToItem["".concat(m.latitude).concat(m.longitude)] = [m];
        });
        var collapsedMarkers = [];

        for (var _i = 0, _Object$entries = Object.entries(locationToItem); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              _markers = _Object$entries$_i[1];

          if (_markers.length > 1) {
            var collapsedMarker = {
              item: _markers.map(function (m) {
                return m.item;
              }),
              label: _markers.length,
              latitude: _markers[0].latitude,
              longitude: _markers[0].longitude
            };
            collapsedMarkers.push(collapsedMarker);
          } else {
            collapsedMarkers.push(_markers[0]);
          }
        }

        return collapsedMarkers;
      }
    }], [{
      key: "DEFAULT_PIN_CONFIG",
      get: function get() {
        return {
          icon: {
            anchor: null,
            // e.g. { x: 1, y: 1 }
            svg: null,
            url: null,
            scaledSize: null // e.g. { w: 20, h: 20 }

          },
          labelType: 'numeric'
        };
      }
    }]);

    return MapProvider;
  }();

  /* global google */

  /**
   * GoogleMapProvider is an implementation of a MapProvider
   * that handles the integration with the third party API to expose maps.
   * @extends MapProvider
   */

  var GoogleMapProvider =
  /*#__PURE__*/
  function (_MapProvider) {
    _inherits(GoogleMapProvider, _MapProvider);

    function GoogleMapProvider(opts) {
      var _this;

      _classCallCheck(this, GoogleMapProvider);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(GoogleMapProvider).call(this, opts));
      _this._clientId = opts.clientId;
      _this._signature = opts.signature;

      if (!_this.hasValidClientCredentials() && !_this._apiKey) {
        throw new Error('GoogleMapsProvider: Missing `apiKey` or {`clientId`, `signature`}');
      }

      return _this;
    }

    _createClass(GoogleMapProvider, [{
      key: "loadJS",
      value: function loadJS(onLoad) {
        var _this2 = this;

        if (DOM.query('#yext-map-js')) {
          this._isLoaded = true;

          if (typeof onLoad === 'function') {
            onLoad();
          }

          return;
        }

        var script = DOM.createEl('script', {
          id: 'yext-map-js',
          onload: function onload() {
            _this2._isLoaded = true;

            _this2._onLoaded();
          },
          async: true,
          src: "https://maps.googleapis.com/maps/api/js?".concat(this.generateCredentials())
        });
        DOM.append('body', script);
      }
    }, {
      key: "generateCredentials",
      value: function generateCredentials() {
        if (this.hasValidClientCredentials()) {
          return "client=".concat(this._clientId);
        } else {
          return "key=".concat(this._apiKey);
        }
      }
    }, {
      key: "hasValidClientCredentials",
      value: function hasValidClientCredentials() {
        return this._clientId;
      }
    }, {
      key: "init",
      value: function init(el, mapData) {
        var _this3 = this;

        if ((!mapData || mapData.mapMarkers.length <= 0) && !this._showEmptyMap) {
          this._map = null;
          return this;
        } // NOTE(billy) This timeout is a hack for dealing with async nature.
        // Only here for demo purposes, so we'll fix later.


        setTimeout(function () {
          var container = DOM.query(el);
          _this3.map = new google.maps.Map(container, {
            zoom: _this3._zoom
          }); // Apply our search data to our GoogleMap

          var bounds = new google.maps.LatLngBounds();

          if (mapData && mapData.mapMarkers.length) {
            (function () {
              var collapsedMarkers = _this3._collapsePins ? _this3._collapseMarkers(mapData.mapMarkers) : mapData.mapMarkers;
              var googleMapMarkerConfigs = GoogleMapMarkerConfig.from(collapsedMarkers, _this3._pinConfig, _this3.map);

              var _loop = function _loop(i) {
                var marker = new google.maps.Marker(googleMapMarkerConfigs[i]);

                if (_this3._onPinClick) {
                  marker.addListener('click', function () {
                    return _this3._onPinClick(collapsedMarkers[i].item);
                  });
                }

                bounds.extend(marker.position);
              };

              for (var i = 0; i < googleMapMarkerConfigs.length; i++) {
                _loop(i);
              }

              _this3.map.fitBounds(bounds);
            })();
          } else {
            _this3.map.setCenter(new google.maps.LatLng(_this3._defaultPosition.lat, _this3._defaultPosition.lng));
          }
        }, 100);
      }
    }]);

    return GoogleMapProvider;
  }(MapProvider); // TODO(billy) Move to own class
  var GoogleMapMarkerConfig =
  /*#__PURE__*/
  function () {
    function GoogleMapMarkerConfig(opts) {
      _classCallCheck(this, GoogleMapMarkerConfig);

      /**
       * A reference to the google map, that the marker is appended to
       * @type {GoogleMap}
       */
      this.map = opts.map || undefined;
      /**
       * The coordinates of the marker (lat/lng)
       * @type {Object}
       */

      this.position = opts.position || {
        lat: undefined,
        lng: undefined
      };
      /**
       * The properties/settings of the icon used for the marker
       * e.g. {
       *        anchor: { x: 0, y: 0 }
       *        url: 'path/to/url.jpg'
       *        scaledSize: { w: 0, h: 0 }
       *       }
       *
       * @type {object}
       */

      this.icon = opts.icon || undefined;
      /**
       * The label of the marker to use
       * @type {string}
       */

      this.label = opts.label || undefined;
    }
    /**
     * Serializes an array of marker configs
     * @param {GoogleMapMarkerConfig[]} googleMapMarkerConfigs
     * @returns {string[]}
     */


    _createClass(GoogleMapMarkerConfig, null, [{
      key: "serialize",
      value: function serialize(googleMapMarkerConfigs) {
        var serializedMarkers = [];
        googleMapMarkerConfigs.forEach(function (marker) {
          serializedMarkers.push("markers=label:".concat(marker.label, "|").concat(marker.position.lat, ",").concat(marker.position.lng));
        });
        return serializedMarkers.join('&');
      }
      /**
       * Converts the storage data model of markers into GoogleAPIMarker
       * @param {object[]} markers The data of the marker
       * @param {(Object|function)} pinConfig The configuration to apply to the marker
       * @param {GoogleMap} map reference to the google map to apply the marker to
       * @returns {GoogleMapMarkerConfig[]}
       */

    }, {
      key: "from",
      value: function from(markers, pinConfig, map) {
        var googleMapMarkerConfigs = [];

        if (!Array.isArray(markers)) {
          markers = [markers];
        }

        markers.forEach(function (marker) {
          // Support configuration as a function
          var pinConfigObj = pinConfig;

          if (typeof pinConfig === 'function') {
            pinConfigObj = pinConfig(marker.item, MapProvider.DEFAULT_PIN_CONFIG, marker);
          } // Transform our Configuration Object into the expected
          // Google API format.


          var icon = {};

          if (pinConfigObj.anchor) {
            icon.anchor = google.maps.Point(pinConfigObj.anchor.x, pinConfigObj.anchor.y);
          }

          if (pinConfigObj.scaledSize) {
            icon.scaledSize = new google.maps.Size(pinConfigObj.scaledSize.w, pinConfigObj.scaledSize.h);
          }

          if (pinConfigObj.url) {
            icon.url = pinConfigObj.url;
          }

          if (pinConfigObj.svg) {
            icon.url = "data:image/svg+xml;charset=utf-8, ".concat(encodeURIComponent(pinConfigObj.svg));
          }

          var label;

          if (pinConfigObj.label) {
            label = pinConfigObj.label;
          } else {
            label = marker.label.toString();
          } // NOTE(billy) Google maps doesn't handle empty icon objects nicely
          // Make google maps happy if no settings for icon are provided;


          if (Object.keys(icon).length === 0) {
            icon = undefined;
          }

          googleMapMarkerConfigs.push(new GoogleMapMarkerConfig({
            map: map,
            position: {
              lat: marker.latitude,
              lng: marker.longitude
            },
            icon: icon,
            label: label
          }));
        });
        return googleMapMarkerConfigs;
      }
    }]);

    return GoogleMapMarkerConfig;
  }();

  /* global mapboxgl */

  /**
   * MapBoxMapProvider is an implementation of a MapProvider
   * that handles the integration with the third party API to expose maps.
   * @extends MapProvider
   */

  var MapBoxMapProvider =
  /*#__PURE__*/
  function (_MapProvider) {
    _inherits(MapBoxMapProvider, _MapProvider);

    function MapBoxMapProvider() {
      _classCallCheck(this, MapBoxMapProvider);

      return _possibleConstructorReturn(this, _getPrototypeOf(MapBoxMapProvider).apply(this, arguments));
    }

    _createClass(MapBoxMapProvider, [{
      key: "loadJS",

      /**
       * Load the external JS Library
       * @param {function} onLoad An optional callback to invoke once the JS is loaded.
       */
      value: function loadJS(onLoad) {
        var _this = this;

        var script = DOM.createEl('script', {
          id: 'yext-map-js',
          onload: function onload() {
            _this._isLoaded = true;
            mapboxgl.accessToken = _this._apiKey;

            if (typeof onLoad === 'function') {
              onLoad();
            }

            if (typeof _this._onLoaded === 'function') {
              _this._onLoaded();
            }
          },
          async: true,
          src: 'https://api.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.js'
        });
        var css = DOM.createEl('link', {
          id: 'yext-map-css',
          rel: 'stylesheet',
          href: 'https://api.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.css'
        });
        DOM.append('body', css);
        DOM.append('body', script);
      }
    }, {
      key: "init",
      value: function init(el, mapData) {
        var _this2 = this;

        if ((!mapData || mapData.mapMarkers.length <= 0) && !this._showEmptyMap) {
          this._map = null;
          return this;
        }

        var container = DOM.query(el);
        this._map = new mapboxgl.Map({
          container: container,
          zoom: this._zoom,
          style: 'mapbox://styles/mapbox/streets-v9',
          center: this.getCenterMarker(mapData)
        });

        if (mapData) {
          (function () {
            var collapsedMarkers = _this2._collapsePins ? _this2._collapseMarkers(mapData.mapMarkers) : mapData.mapMarkers;
            var mapboxMapMarkerConfigs = MapBoxMarkerConfig.from(collapsedMarkers, _this2._pinConfig, _this2._map);

            var _loop = function _loop(i) {
              var wrapper = mapboxMapMarkerConfigs[i].wrapper;
              var coords = new mapboxgl.LngLat(mapboxMapMarkerConfigs[i].position.longitude, mapboxMapMarkerConfigs[i].position.latitude);
              var marker = new mapboxgl.Marker(wrapper).setLngLat(coords);
              marker.addTo(_this2._map);

              if (_this2._onPinClick) {
                marker.getElement().addEventListener('click', function () {
                  return _this2._onPinClick(collapsedMarkers[i].item);
                });
              }
            };

            for (var i = 0; i < mapboxMapMarkerConfigs.length; i++) {
              _loop(i);
            }
          })();
        }
      }
    }, {
      key: "getCenterMarker",
      value: function getCenterMarker(mapData) {
        return mapData && mapData.mapCenter && mapData.mapCenter.longitude && mapData.mapCenter.latitude ? [mapData.mapCenter.longitude, mapData.mapCenter.latitude] : {
          lng: this._defaultPosition.lng,
          lat: this._defaultPosition.lat
        };
      }
    }]);

    return MapBoxMapProvider;
  }(MapProvider);
  var MapBoxMarkerConfig =
  /*#__PURE__*/
  function () {
    function MapBoxMarkerConfig(opts) {
      _classCallCheck(this, MapBoxMarkerConfig);

      /**
       * A reference to the mapbox map, that the marker is appended to
       * @type {MapBox}
       */
      this.map = opts.map || undefined;
      /**
       * The coordinates of the marker (lat/lng)
       * @type {Object}
       */

      this.position = opts.position || {
        latitude: undefined,
        longitude: undefined
      };
      /**
       * The html element to be used as the map marker
       * @type {object}
       */

      this.wrapper = opts.wrapper || undefined;
      /**
       * The label of the marker to use
       * @type {string}
       */

      this.label = opts.label || undefined;
      /**
       * The url of the pin for the static map
       * @type {string}
       */

      this.staticMapPin = opts.staticMapPin || undefined;
    }
    /**
     * Serializes an array of marker configs
     * @param {MapBoxMarkerConfig[]} mapboxMapMarkerConfigs
     * @returns {string[]}
     */


    _createClass(MapBoxMarkerConfig, null, [{
      key: "serialize",
      value: function serialize(mapboxMapMarkerConfigs) {
        var serializedMarkers = [];
        mapboxMapMarkerConfigs.forEach(function (marker) {
          if (marker.staticMapPin) {
            serializedMarkers.push("url-".concat(marker.staticMapPin, "(").concat(marker.position.longitude, ",").concat(marker.position.latitude, ")"));
          } else {
            serializedMarkers.push("pin-s-".concat(marker.label, "(").concat(marker.position.longitude, ",").concat(marker.position.latitude, ")"));
          }
        });
        return serializedMarkers.join(',');
      }
      /**
       * Converts the storage data model of markers into GoogleAPIMarker
       * @param {MapBox} A reference to the google map to apply the marker to
       * @param {object[]} markers The data of the marker
       * @param {Object} pinConfig The configuration to apply to the marker
       * @returns {MapBoxMarkerConfig[]}
       */

    }, {
      key: "from",
      value: function from(markers, pinConfig, map) {
        var mapboxMapMarkerConfigs = [];

        if (!Array.isArray(markers)) {
          markers = [markers];
        }

        markers.forEach(function (marker) {
          // Support configuration as a function
          var pinConfigObj = pinConfig;

          if (typeof pinConfig === 'function') {
            pinConfigObj = pinConfig(marker.item, MapProvider.DEFAULT_PIN_CONFIG, marker);
          }

          var wrapper = pinConfigObj.wrapper ? pinConfigObj.wrapper : null;
          var staticMapPin = pinConfigObj.staticMapPin ? pinConfigObj.staticMapPin : null;
          mapboxMapMarkerConfigs.push(new MapBoxMarkerConfig({
            map: map,
            position: {
              latitude: marker.latitude,
              longitude: marker.longitude
            },
            wrapper: wrapper,
            label: marker.label,
            staticMapPin: staticMapPin
          }));
        });
        return mapboxMapMarkerConfigs;
      }
    }]);

    return MapBoxMarkerConfig;
  }();

  var ProviderTypes = {
    'google': GoogleMapProvider,
    'mapbox': MapBoxMapProvider
  };

  var MapComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(MapComponent, _Component);

    function MapComponent() {
      var _this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, MapComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MapComponent).call(this, opts, systemOpts));
      /**
       * Bind this component to listen to the storage based on this key
       */

      _this.moduleId = StorageKeys.VERTICAL_RESULTS;
      /**
       * An aliased used to determine the type of map provider to use
       * @type {string}
       */

      _this._mapProvider = opts.mapProvider;

      if (!_this._mapProvider || !(_this._mapProvider.toLowerCase() in ProviderTypes)) {
        throw new Error('MapComponent: Invalid Map Provider; must be `google` or `mapBox`');
      }
      /**
       * A reference to an instance of the {MapProvider} that's constructed
       * @type {MapProvider}
       */


      _this._map = null;
      return _this;
    }

    _createClass(MapComponent, [{
      key: "getProviderInstance",
      // TODO(billy) Make ProviderTypes a factory class
      value: function getProviderInstance(type) {
        return new ProviderTypes[type.toLowerCase()](this._config);
      }
    }, {
      key: "onCreate",
      value: function onCreate() {
        this._map = this.getProviderInstance(this._mapProvider);

        this._map.loadJS();
      }
    }, {
      key: "onMount",
      value: function onMount() {
        var _this2 = this;

        this._map.onLoaded(function () {
          _this2._map.init(_this2._container, _this2.getState('map'));
        });
      }
    }, {
      key: "setState",
      value: function setState(data, val) {
        if (Object.keys(data).length === 0) {
          return this;
        }

        return _get(_getPrototypeOf(MapComponent.prototype), "setState", this).call(this, data, val);
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
        return 'results/map';
      }
    }, {
      key: "type",
      get: function get() {
        return 'Map';
      }
    }]);

    return MapComponent;
  }(Component);

  var ResultType = {
    EVENT: 'event',
    LOCATION: 'location',
    PEOPLE: 'people'
  };

  var ResultsComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(ResultsComponent, _Component);

    function ResultsComponent() {
      var _this$_itemConfig;

      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, ResultsComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ResultsComponent).call(this, config, systemConfig));
      /**
       * verticalConfigId used for analytics and passed to children
       * @type {string}
       * @private
       */

      _this._verticalConfigId = config.verticalConfigId;
      /**
       * isUniversal is set to true if this component is added by the UniversalResultsComponent
       * @type {boolean}
       * @private
       */

      _this._isUniversal = config.isUniversal || false;
      _this.moduleId = StorageKeys.VERTICAL_RESULTS;
      _this._itemConfig = (_this$_itemConfig = {
        global: {
          render: null,
          template: null
        }
      }, _defineProperty(_this$_itemConfig, EventResultsItemComponent.type, {
        render: null,
        template: null
      }), _defineProperty(_this$_itemConfig, LocationResultsItemComponent.type, {
        render: null,
        template: null
      }), _defineProperty(_this$_itemConfig, PeopleResultsItemComponent.type, {
        render: null,
        template: null
      }), _this$_itemConfig);

      if (config.renderItem === undefined && config._parentOpts !== undefined) {
        config.renderItem = config._parentOpts.renderItem;
      }

      if (config.itemTemplate === undefined && config._parentOpts !== undefined) {
        config.itemTemplate = config._parentOpts.itemTemplate;
      }

      if (config.limit) {
        var limit = config.limit;

        if (typeof limit !== 'number' || limit < 1 || limit > 50) {
          throw new AnswersComponentError('Search Limit must be between 1 and 50', 'VerticalResults');
        }

        _this.core.setSearchLimit(limit);
      }

      _this.configureItem({
        render: config.renderItem,
        template: config.itemTemplate
      });
      /**
       * The url to the universal page for the no results page to link back to with current query
       * @type {string|null}
       */


      _this._universalUrl = config.universalUrl;
      return _this;
    }

    _createClass(ResultsComponent, [{
      key: "mount",
      value: function mount() {
        if (Object.keys(this.getState()).length > 0) {
          _get(_getPrototypeOf(ResultsComponent.prototype), "mount", this).call(this);
        }

        return this;
      }
    }, {
      key: "setState",
      value: function setState(data, val) {
        var results = data.results || [];
        var searchState = data.searchState || SearchStates.PRE_SEARCH;
        return _get(_getPrototypeOf(ResultsComponent.prototype), "setState", this).call(this, Object.assign({
          results: []
        }, data, {
          isPreSearch: searchState === SearchStates.PRE_SEARCH,
          isSearchLoading: searchState === SearchStates.SEARCH_LOADING,
          isSearchComplete: searchState === SearchStates.SEARCH_COMPLETE,
          includeMap: this._config.includeMap,
          mapConfig: this._config.mapConfig,
          eventOptions: this.eventOptions(),
          universalUrl: this._universalUrl ? this._universalUrl + window.location.search : '',
          showNoResults: results.length === 0,
          query: this.core.globalStorage.getState(StorageKeys.QUERY)
        }), val);
      }
      /**
       * helper to construct the eventOptions object for the view all link
       * @returns {string}
       */

    }, {
      key: "eventOptions",
      value: function eventOptions() {
        return JSON.stringify({
          verticalConfigId: this._verticalConfigId
        });
      }
    }, {
      key: "configureItem",
      value: function configureItem(config) {
        if (typeof config.render === 'function') {
          this._itemConfig.global.render = config.render;
        } else {
          for (var key in config.render) {
            this.setItemRender(key, config.render[key]);
          }
        }

        if (typeof config.template === 'string') {
          this._itemConfig.global.template = config.template;
        } else {
          for (var _key in config.template) {
            this.setItemTemplate(_key, config.template[_key]);
          }
        }
      }
    }, {
      key: "setItemTemplate",
      value: function setItemTemplate(type, template) {
        var clazz = this.getItemComponent(type);
        this._itemConfig[clazz.type].template = template;
      }
    }, {
      key: "setItemRender",
      value: function setItemRender(type, render) {
        var clazz = this.getItemComponent(type);
        this._itemConfig[clazz.type].render = render;
      }
    }, {
      key: "getItemComponent",
      value: function getItemComponent(type) {
        var comp = ResultsItemComponent;

        switch (type) {
          case ResultType.EVENT:
            comp = EventResultsItemComponent;
            break;

          case ResultType.LOCATION:
            comp = LocationResultsItemComponent;
            break;

          case ResultType.PEOPLE:
            comp = PeopleResultsItemComponent;
            break;
        }

        return comp;
      }
    }, {
      key: "addChild",
      value: function addChild(data, type, opts) {
        // TODO(billy) Refactor the way configuration and data flows
        // through top level components to child components.
        if (type === ResultsItemComponent.type) {
          var clazz = this.getItemComponent(data.type);

          if (clazz) {
            type = clazz.type;
          }
        } else if (type === MapComponent.type) {
          data = {
            map: data
          };
          var newOpts = Object.assign({}, this._config.mapConfig, opts);
          return _get(_getPrototypeOf(ResultsComponent.prototype), "addChild", this).call(this, data, type, newOpts);
        } // Apply the proper item renders to the the components
        // have just been constructed. Prioritize global over individual items.


        var comp = _get(_getPrototypeOf(ResultsComponent.prototype), "addChild", this).call(this, data, type, Object.assign(opts, {
          verticalConfigId: this._verticalConfigId,
          isUniversal: this._isUniversal
        }));

        var globalConfig = this._itemConfig.global;
        var itemConfig = this._itemConfig[comp.type];
        var hasGlobalRender = typeof globalConfig.render === 'function';
        var hasGlobalTemplate = typeof globalConfig.template === 'string';

        if (hasGlobalRender) {
          comp.setRender(globalConfig.render);
        }

        if (hasGlobalTemplate) {
          comp.setTemplate(globalConfig.template);
        }

        if (!itemConfig) {
          return comp;
        }

        if (!hasGlobalRender && itemConfig.render) {
          comp.setRender(itemConfig.render);
        } // Apply template specific situation


        if (!hasGlobalTemplate && itemConfig.template) {
          comp.setTemplate(itemConfig.template);
        }

        return comp;
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
        return 'results/results';
      }
    }, {
      key: "duplicatesAllowed",
      get: function get() {
        return true;
      }
    }, {
      key: "type",
      get: function get() {
        return 'VerticalResults';
      }
    }]);

    return ResultsComponent;
  }(Component);

  var AccordionResultsComponent =
  /*#__PURE__*/
  function (_ResultsComponent) {
    _inherits(AccordionResultsComponent, _ResultsComponent);

    function AccordionResultsComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, AccordionResultsComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AccordionResultsComponent).call(this, config, systemConfig));
      /**
       * base selector to use when finding DOM targets
       * @type {string}
       */

      _this._selectorBase = config.selectorBase || '.js-yxt-AccordionResult';
      /**
       * collapsed state class
       * @type {string}
       */

      _this.collapsedClass = config.collapsedClass || 'is-collapsed';
      /**
       * vertical config id is required for analytics
       * @type {string|null}
       */

      _this.verticalConfigId = config.verticalConfigId || config._parentOpts.verticalConfigId || null;
      return _this;
    }
    /**
     * the component type
     * @returns {string}
     * @override
     */


    _createClass(AccordionResultsComponent, [{
      key: "onMount",

      /**
       * overrides onMount to add bindings to change the height on click
       * @returns {AccordionResultsComponent}
       * @override
       */
      value: function onMount() {
        var _this2 = this;

        _get(_getPrototypeOf(AccordionResultsComponent.prototype), "onMount", this).call(this);

        var accordionEls = DOM.queryAll(this._container, this._selectorBase);
        accordionEls.forEach(function (accordionEl) {
          var toggleEl = DOM.query(accordionEl, _this2.toggleSelector());
          var contentEl = DOM.query(accordionEl, _this2.bodySelector());

          _this2.changeHeight(contentEl, accordionEl);

          toggleEl.addEventListener('click', function () {
            _this2.handleClick(accordionEl, toggleEl, contentEl);
          });
        });
        return this;
      }
    }, {
      key: "setState",
      value: function setState(data) {
        return _get(_getPrototypeOf(AccordionResultsComponent.prototype), "setState", this).call(this, Object.assign({}, data, {
          modifier: this.verticalConfigId
        }));
      }
      /**
       * click handler for the accordion toggle button
       * @param wrapperEl {HTMLElement} the toggle container
       * @param toggleEl {HTMLElement} the button
       * @param contentEl {HTMLElement} the toggle target
       */

    }, {
      key: "handleClick",
      value: function handleClick(wrapperEl, toggleEl, contentEl) {
        var event = new AnalyticsEvent(this.isCollapsed(wrapperEl) ? 'ROW_EXPAND' : 'ROW_COLLAPSE').addOptions({
          verticalConfigId: this.verticalConfigId,
          entityId: toggleEl.dataset.entityId
        });
        wrapperEl.classList.toggle(this.collapsedClass);
        this.changeHeight(contentEl, wrapperEl);
        toggleEl.setAttribute('aria-expanded', this.isCollapsed(wrapperEl) ? 'false' : 'true');
        this.analyticsReporter.report(event);
      }
      /**
       * returns true if the element is currently collapsed
       * @param wrapperEl {HTMLElement} the toggle container
       * @returns {boolean}
       */

    }, {
      key: "isCollapsed",
      value: function isCollapsed(wrapperEl) {
        if (!wrapperEl) {
          return false;
        }

        return wrapperEl.classList.contains(this.collapsedClass);
      }
      /**
       * toggles the height between 0 and the content height for smooth animation
       * @param targetEl {HTMLElement}
       * @param wrapperEl {HTMLElement}
       */

    }, {
      key: "changeHeight",
      value: function changeHeight(targetEl, wrapperEl) {
        targetEl.style.height = "".concat(this.isCollapsed(wrapperEl) ? 0 : targetEl.scrollHeight, "px");
      }
      /**
       * helper for composing child element selectors
       * @param child {string}
       * @returns {string}
       */

    }, {
      key: "buildSelector",
      value: function buildSelector(child) {
        return "".concat(this._selectorBase).concat(child);
      }
      /**
       * helper for the toggle button selector
       * @returns {string}
       */

    }, {
      key: "toggleSelector",
      value: function toggleSelector() {
        return this.buildSelector('-toggle');
      }
      /**
       * helper for the content element selector
       * @returns {string}
       */

    }, {
      key: "bodySelector",
      value: function bodySelector() {
        return this.buildSelector('-body');
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
        return 'results/resultsaccordion';
      }
    }, {
      key: "type",
      get: function get() {
        return 'AccordionResults';
      }
    }]);

    return AccordionResultsComponent;
  }(ResultsComponent);

  var UniversalResultsComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(UniversalResultsComponent, _Component);

    function UniversalResultsComponent() {
      var _this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, UniversalResultsComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(UniversalResultsComponent).call(this, opts, systemOpts));
      _this.moduleId = StorageKeys.UNIVERSAL_RESULTS;
      _this._limit = opts.limit || 10;
      return _this;
    }

    _createClass(UniversalResultsComponent, [{
      key: "init",
      value: function init(opts) {
        _get(_getPrototypeOf(UniversalResultsComponent.prototype), "init", this).call(this, opts);

        return this;
      }
    }, {
      key: "setState",
      value: function setState(data, val) {
        var sections = data.sections || [];
        var searchState = data.searchState || SearchStates.PRE_SEARCH;
        return _get(_getPrototypeOf(UniversalResultsComponent.prototype), "setState", this).call(this, Object.assign({
          sections: []
        }, data, {
          isPreSearch: searchState === SearchStates.PRE_SEARCH,
          isSearchLoading: searchState === SearchStates.SEARCH_LOADING,
          isSearchComplete: searchState === SearchStates.SEARCH_COMPLETE,
          showNoResults: sections.length === 0,
          query: this.core.globalStorage.getState(StorageKeys.QUERY)
        }), val);
      }
    }, {
      key: "addChild",
      value: function addChild() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var type = arguments.length > 1 ? arguments[1] : undefined;
        var opts = arguments.length > 2 ? arguments[2] : undefined;

        var childOpts = _objectSpread({}, opts, {}, this.getChildConfig([data['verticalConfigId']]));

        if (childOpts.useAccordion === true) {
          return _get(_getPrototypeOf(UniversalResultsComponent.prototype), "addChild", this).call(this, data, AccordionResultsComponent.type, childOpts);
        }

        return _get(_getPrototypeOf(UniversalResultsComponent.prototype), "addChild", this).call(this, data, type, childOpts);
      }
    }, {
      key: "getChildConfig",
      value: function getChildConfig(configId) {
        var defaultConfig = {
          verticalConfigId: configId,
          isUniversal: true
        };
        var config = this._config.config;

        if (config === undefined) {
          return defaultConfig;
        }

        return Object.assign(defaultConfig, this._config['config'][configId] || this._config['config']);
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
        return 'results/universalresults';
      }
    }, {
      key: "areDuplicateNamesAllowed",
      value: function areDuplicateNamesAllowed() {
        return true;
      }
    }, {
      key: "type",
      get: function get() {
        return 'UniversalResults';
      }
    }]);

    return UniversalResultsComponent;
  }(Component);

  /**
   * Configurable options for the component
   * @type {Object}
   */

  var DEFAULT_CONFIG$1 = {
    /**
     * The entity identifier that the question is associated with.
     * This is typically an organization object
     * @type {number}
     */
    'entityId': null,

    /**
     * The default language of the question
     * @type {string}
     */
    'language': 'EN',

    /**
     * The main CSS selector used to reference the form for the component.
     * @type {string} CSS selector
     */
    'formSelector': 'form',

    /**
     * An optional label to use for the e-mail address input
     * @type {string}
     */
    'emailLabel': 'Email Address:',

    /**
     * An optional label to use for the name input
     * @type {string}
     */
    'nameLabel': 'Name:',

    /**
     * An optional label to use for the question
     * @type {string}
     */
    'questionLabel': 'What is your question?',

    /**
     * An optional label to use for the Privacy Policy
     * @type {string}
     */
    'privacyPolicyLabel': 'I agree to our Privacy Policy:',

    /**
     * The label to use for the Submit button
     * @type {string}
     */
    'buttonLabel': 'Submit'
  };
  /**
   * QuestionSubmissionComponent is a component that creates a form
   * thats displayed whenever a query is run. It enables the user
   * to submit questions that they cant find the answer for.
   */

  var QuestionSubmissionComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(QuestionSubmissionComponent, _Component);

    function QuestionSubmissionComponent() {
      var _this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, QuestionSubmissionComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(QuestionSubmissionComponent).call(this, Object.assign({}, DEFAULT_CONFIG$1, config), systemConfig));
      /**
       * Reference to the storage model
       * @type {string}
       */

      _this.moduleId = StorageKeys.QUESTION_SUBMISSION;
      /**
       * NOTE(billy) if this is a pattern we want to follow for configuration
       * we should bake it into the core class.
       */

      _this.validateConfig();

      return _this;
    }
    /**
     * The template to render
     * @returns {string}
     * @override
     */


    _createClass(QuestionSubmissionComponent, [{
      key: "validateConfig",

      /**
       * validationConfig contains a bunch of rules
       * that are used to validate aginst configuration provided by the user
       */
      value: function validateConfig() {
        if (this._config.entityId === null || typeof this._config.entityId !== 'number') {
          throw new AnswersComponentError('`entityId` is a required configuration option for Question Submission', 'QuestionSubmission');
        }
      }
    }, {
      key: "beforeMount",
      value: function beforeMount() {
        // Avoid mounting the component if theres no data
        // Note, 1 because `config` is always part of the state.
        return Object.keys(this.getState()).length > 1;
      }
    }, {
      key: "onMount",
      value: function onMount() {
        var formEl = DOM.query(this._container, this._config.formSelector);

        if (formEl === null) {
          return;
        }

        this.bindAnalytics(formEl);
        this.bindFormSubmit(formEl);
      }
      /**
       * bindAnalytics will wire up DOM event hooks to serverside reporting
       * @param {HTMLElement} formEl
       */

    }, {
      key: "bindAnalytics",
      value: function bindAnalytics(formEl) {
        var _this2 = this;

        if (this.analyticsReporter === null) {
          return;
        }

        var questionTextEl = DOM.query(formEl, '.js-question-text');
        DOM.on(questionTextEl, 'focus', function () {
          _this2.analyticsReporter.report(new AnalyticsEvent('QUESTION_FOCUS'));
        });
      }
      /**
       * bindFormSubmit handles submitting the question to the server.
       * @param {HTMLElement} formEl
       */

    }, {
      key: "bindFormSubmit",
      value: function bindFormSubmit(formEl) {
        var _this3 = this;

        DOM.on(formEl, 'submit', function (e) {
          e.preventDefault(); // TODO(billy) we probably want to disable the form from being submitted twice

          var formData = _this3.parse(formEl);

          var errors = _this3.validateRequired(formData);

          if (errors) {
            return _this3.setState(new QuestionSubmission(formData, errors));
          }

          _this3.core.submitQuestion({
            'entityId': _this3._config.entityId,
            'questionLanguage': _this3._config.language,
            'site': 'FIRSTPARTY',
            'name': formData.name,
            'email': formData.email,
            'questionText': formData.questionText,
            'questionDescription': formData.questionDescription
          })["catch"](function (error) {
            _this3.setState(new QuestionSubmission(formData, {
              'network': 'There was a problem submitting your question. Please try again.'
            }));

            throw error;
          });
        });
      }
      /**
       * Takes the form, and builds a object that represents the input names
       * and text fields.
       * @param {HTMLElement} formEl
       * @returns {object}
       */

    }, {
      key: "parse",
      value: function parse(formEl) {
        var inputFields = DOM.queryAll(formEl, '.js-question-field');

        if (!inputFields || inputFields.length === 0) {
          return {};
        }

        var obj = {};

        for (var i = 0; i < inputFields.length; i++) {
          var val = inputFields[i].value;

          if (inputFields[i].type === 'checkbox' && val === 'true') {
            val = true;
          }

          obj[inputFields[i].name] = val;
        }

        return obj;
      }
      /**
       * Validates the required fields (or rules) for the form data
       * @param {Object} formData
       * @returns {Object|boolean} errors object if any errors found
       */

    }, {
      key: "validateRequired",
      value: function validateRequired(formData) {
        var errors = {};

        if (!formData.email || typeof formData.email !== 'string') {
          errors['email'] = 'Missing email address!';
        }

        if (!formData.privacyPolicy || formData.privacyPolicy !== true) {
          errors['privacyPolicy'] = 'Approving our privacy policy terms is required!';
        }

        if (!formData.questionText || typeof formData.questionText !== 'string') {
          errors['questionText'] = 'Question text is required!';
        }

        return Object.keys(errors).length > 0 ? errors : null;
      }
    }], [{
      key: "defaultTemplateName",
      value: function defaultTemplateName(config) {
        return 'questions/questionsubmission';
      }
      /**
       * The public interface alias for the component
       * @returns {string}
       * @override
       */

    }, {
      key: "type",
      get: function get() {
        return 'QASubmission';
      }
    }]);

    return QuestionSubmissionComponent;
  }(Component);

  var SVGIcon =
  /*#__PURE__*/
  function () {
    /**
     * @param config
     * @param config.name
     * @param config.path
     * @param config.complexContents
     * @param config.viewBox
     * @constructor
     */
    function SVGIcon(config) {
      _classCallCheck(this, SVGIcon);

      /**
       * the name of the icon
       */
      this.name = config.name;
      /**
       * an svg path definition
       */

      this.path = config.path;
      /**
       * if not using a path, a the markup for a complex SVG
       */

      this.complexContents = config.complexContents;
      /**
       * the view box definition, defaults to 24x24
       * @type {string}
       */

      this.viewBox = config.viewBox || '0 0 24 24';
      /**
       * actual contents used
       */

      this.contents = this.pathDefinition();
    }

    _createClass(SVGIcon, [{
      key: "pathDefinition",
      value: function pathDefinition() {
        if (this.complexContents) {
          return this.complexContents;
        }

        return "<path d=\"".concat(this.path, "\"></path>");
      }
      /**
       * returns the svg markup
       */

    }, {
      key: "markup",
      value: function markup() {
        return "<svg viewBox=\"".concat(this.viewBox, "\" xmlns=\"http://www.w3.org/2000/svg\">").concat(this.contents, "</svg>");
      }
    }]);

    return SVGIcon;
  }();

  var thumbIcon = new SVGIcon({
    name: 'thumb',
    viewBox: '0 0 24 22',
    path: 'M15.273 1H5.455c-.906 0-1.68.55-2.008 1.342L.153 10.097A2.19 2.19 0 000 10.9v2.2c0 1.21.982 2.2 2.182 2.2h6.883L8.03 20.327l-.033.352c0 .451.186.869.48 1.166L9.633 23l7.178-7.249a2.16 2.16 0 00.644-1.551v-11c0-1.21-.982-2.2-2.182-2.2zm0 13.2l-4.735 4.774L11.75 13.1H2.182v-2.2l3.273-7.7h9.818v11zM19.636 1H24v13.2h-4.364V1z'
  });

  var receiptIcon = new SVGIcon({
    name: 'receipt',
    path: 'M14.606 9.5c-.671-.515-1.591-.833-2.606-.833 1.015 0 1.935.318 2.606.833zm-7.985 0H1.655A1.66 1.66 0 010 7.833V3.667C0 2.747.741 2 1.655 2h20.69A1.66 1.66 0 0124 3.667v4.166A1.66 1.66 0 0122.345 9.5h-4.966V22H6.621V9.5h2.773H6.62zm10.758-1.667h4.966V3.667H1.655v4.166h4.966v-2.5h10.758v2.5z'
  });

  var pantheonIcon = new SVGIcon({
    name: 'pantheon',
    path: 'M9.947 16.598h.252V9.412h-.252a.432.432 0 01-.23-.065c-.07-.043-.106-.093-.106-.15L9.15 7.82v-.15c0-.044.028-.08.084-.109a.691.691 0 01.105-.086.254.254 0 01.146-.043H13.6c.056 0 .104.015.146.043.042.03.091.058.147.086a.271.271 0 01.063.108c.014.043.007.093-.02.15l-.42 1.378a.374.374 0 01-.147.15.37.37 0 01-.19.065h-.251v7.186h.252a.37.37 0 01.189.065c.07.043.119.093.147.15l.42 1.378c.027.028.034.071.02.129a.275.275 0 01-.063.129 1.364 1.364 0 00-.147.086.254.254 0 01-.146.043H9.485a.254.254 0 01-.146-.043.691.691 0 01-.105-.086c-.056-.029-.084-.072-.084-.13v-.128l.461-1.377c0-.058.035-.108.105-.151a.432.432 0 01.231-.065zm5.792 0h.252V9.412h-.252a.432.432 0 01-.23-.065.374.374 0 01-.148-.15l-.42-1.377c-.027-.029-.034-.072-.02-.13a.275.275 0 01.063-.129c.056-.028.105-.057.146-.086a.254.254 0 01.147-.043h4.114c.055 0 .104.015.146.043a.691.691 0 01.105.086c.056.03.084.072.084.13v.129l-.42 1.377a.374.374 0 01-.146.15.432.432 0 01-.231.065h-.21v7.186h.21a.43.43 0 01.23.065c.07.043.12.093.148.15l.42 1.378v.15c0 .043-.029.08-.085.108a.691.691 0 01-.105.086.254.254 0 01-.146.043h-4.114a.254.254 0 01-.147-.043 1.364 1.364 0 00-.146-.086.271.271 0 01-.063-.108c-.014-.043-.007-.093.02-.15l.42-1.377a.374.374 0 01.147-.151.432.432 0 01.231-.065zm-11.794-.086h.252V9.498h-.252a.334.334 0 01-.21-.065.386.386 0 01-.126-.193l-.42-1.377a.248.248 0 01-.02-.172.854.854 0 01.063-.173c.028-.057.07-.1.126-.129a.365.365 0 01.168-.043h4.07c.057 0 .113.015.169.043a.278.278 0 01.126.13.854.854 0 01.062.172.248.248 0 01-.02.172l-.42 1.377a.386.386 0 01-.126.193.334.334 0 01-.21.065h-.21v7.014h.21c.084 0 .154.029.21.086a.673.673 0 01.126.172l.42 1.378a.248.248 0 01.02.172.854.854 0 01-.062.172.278.278 0 01-.126.129.365.365 0 01-.168.043H3.526a.365.365 0 01-.168-.043.278.278 0 01-.126-.13.854.854 0 01-.063-.171.248.248 0 01.02-.172l.42-1.378a.673.673 0 01.126-.172.281.281 0 01.21-.086zM1.763 6.658a.717.717 0 01-.504-.194.644.644 0 01-.21-.495v-.43a.73.73 0 01.105-.387.68.68 0 01.273-.259C4.309 3.402 6.54 2.276 8.121 1.515 9.702.755 10.493.361 10.493.332c.531-.258.972-.366 1.322-.323.35.043.734.165 1.154.366l8.31 4.518c.14.058.245.144.315.259a.73.73 0 01.105.387v.43c0 .201-.07.366-.21.495a.717.717 0 01-.504.194H1.763zm-.714 13.34a.54.54 0 01.168-.387.516.516 0 01.378-.172h19.642c.168 0 .308.057.42.172a.541.541 0 01.168.387v.818a.522.522 0 01-.168.408.605.605 0 01-.42.151H1.595a.551.551 0 01-.378-.15.522.522 0 01-.168-.41v-.817zm21.405 2.022c.14 0 .266.058.378.173a.592.592 0 01.168.43v.818a.541.541 0 01-.168.387.516.516 0 01-.378.172L.546 23.957a.516.516 0 01-.378-.172.541.541 0 01-.168-.387v-.818a.59.59 0 01.168-.43.516.516 0 01.378-.173l21.908.043z'
  });

  var micIcon = new SVGIcon({
    name: 'mic',
    path: 'M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.41 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z'
  });

  var directionsIcon = new SVGIcon({
    name: 'directions',
    path: 'M23.649 11.154L12.846.35a1.195 1.195 0 00-1.692 0L.35 11.154a1.195 1.195 0 000 1.692L11.154 23.65a1.195 1.195 0 001.692 0L23.65 12.846c.468-.456.468-1.212 0-1.692zm-9.254 3.853v-3.001H9.593v3.6h-2.4v-4.8c0-.66.54-1.2 1.2-1.2h6.002V6.604l4.2 4.2-4.2 4.202z'
  });

  var calendarIcon = new SVGIcon({
    name: 'calendar',
    path: 'M18.111 13.2H12v6h6.111v-6zM16.89 0v2.4H7.11V0H4.667v2.4H3.444c-1.356 0-2.432 1.08-2.432 2.4L1 21.6C1 22.92 2.088 24 3.444 24h17.112C21.9 24 23 22.92 23 21.6V4.8c0-1.32-1.1-2.4-2.444-2.4h-1.223V0H16.89zm3.667 21.6H3.444V8.4h17.112v13.2z'
  });

  var calloutIcon = new SVGIcon({
    name: 'callout',
    path: 'M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z'
  });

  var infoIcon = new SVGIcon({
    name: 'info',
    path: 'M12 8.4A1.2 1.2 0 1012 6a1.2 1.2 0 000 2.4zM12 0c6.624 0 12 5.376 12 12s-5.376 12-12 12S0 18.624 0 12 5.376 0 12 0zm0 18c.66 0 1.2-.54 1.2-1.2V12c0-.66-.54-1.2-1.2-1.2-.66 0-1.2.54-1.2 1.2v4.8c0 .66.54 1.2 1.2 1.2z'
  });

  var briefcaseIcon = new SVGIcon({
    name: 'briefcase',
    path: 'M20 7h-4V5c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 20c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V9c0-1.11-.89-2-2-2zm-6 0h-4V5h4v2z'
  });

  var kabobIcon = new SVGIcon({
    name: 'kabob',
    viewBox: '0 0 3 11',
    complexContents: "<circle cx=\"1.5\" cy=\"1.5\" r=\"1.5\"/><circle cx=\"1.5\" cy=\"5.5\" r=\"1.5\"/><circle cx=\"1.5\" cy=\"9.5\" r=\"1.5\"/>"
  });

  var personIcon = new SVGIcon({
    name: 'person',
    viewBox: '0 0 18 18',
    path: 'M9 9c2.486 0 4.5-2.014 4.5-4.5S11.486 0 9 0a4.499 4.499 0 00-4.5 4.5C4.5 6.986 6.514 9 9 9zm0 2.25c-3.004 0-9 1.508-9 4.5v1.125C0 17.494.506 18 1.125 18h15.75c.619 0 1.125-.506 1.125-1.125V15.75c0-2.992-5.996-4.5-9-4.5z'
  });

  var magnifyingGlassIcon = new SVGIcon({
    name: 'magnifying_glass',
    path: 'M16.124 13.051a5.154 5.154 0 110-10.308 5.154 5.154 0 010 10.308M16.114 0a7.886 7.886 0 00-6.46 12.407L0 22.06 1.94 24l9.653-9.653A7.886 7.886 0 1016.113 0'
  });

  var officeIcon = new SVGIcon({
    name: 'office',
    path: 'M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z'
  });

  var linkIcon = new SVGIcon({
    name: 'link',
    path: 'M2.28 12A3.723 3.723 0 016 8.28h4.8V6H6c-3.312 0-6 2.688-6 6s2.688 6 6 6h4.8v-2.28H6A3.723 3.723 0 012.28 12zm4.92 1.2h9.6v-2.4H7.2v2.4zM18 6h-4.8v2.28H18A3.723 3.723 0 0121.72 12 3.723 3.723 0 0118 15.72h-4.8V18H18c3.312 0 6-2.688 6-6s-2.688-6-6-6z'
  });

  var windowIcon = new SVGIcon({
    name: 'window',
    path: 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z'
  });

  var phoneIcon = new SVGIcon({
    name: 'phone',
    path: 'M4.827 10.387a20.198 20.198 0 008.786 8.786l2.934-2.933c.36-.36.893-.48 1.36-.32a15.21 15.21 0 004.76.76c.733 0 1.333.6 1.333 1.333v4.654C24 23.4 23.4 24 22.667 24 10.147 24 0 13.853 0 1.333 0 .6.6 0 1.333 0H6c.733 0 1.333.6 1.333 1.333 0 1.667.267 3.267.76 4.76.147.467.04.987-.333 1.36l-2.933 2.934z'
  });

  var tagIcon = new SVGIcon({
    name: 'tag',
    viewBox: '0 0 18 18',
    path: 'M17.469 8.622l-8.1-8.1A1.789 1.789 0 008.1 0H1.8C.81 0 0 .81 0 1.8v6.3c0 .495.198.945.531 1.278l8.1 8.1c.324.324.774.522 1.269.522a1.76 1.76 0 001.269-.531l6.3-6.3A1.76 1.76 0 0018 9.9c0-.495-.207-.954-.531-1.278zM3.15 4.5c-.747 0-1.35-.603-1.35-1.35 0-.747.603-1.35 1.35-1.35.747 0 1.35.603 1.35 1.35 0 .747-.603 1.35-1.35 1.35z'
  });

  var documentIcon = new SVGIcon({
    name: 'document',
    path: 'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z'
  });

  var chevronIcon = new SVGIcon({
    name: 'chevron',
    viewBox: '0 0 7 9',
    complexContents: "<g fill-rule=\"evenodd\" transform=\"translate(-1 -8)\"><path d=\"m2.6417004 8-1.1417004 1.0575 3.70850202 3.4425-3.70850202 3.4425 1.1417004 1.0575 4.8582996-4.5z\"/></g>"
  });

  var supportIcon = new SVGIcon({
    name: 'support',
    path: 'M12.5 2C7.81 2 4 5.81 4 10.5c0 4.69 3.81 8.5 8.5 8.5h.5v3c4.86-2.34 8-7 8-11.5C21 5.81 17.19 2 12.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z'
  });

  var yextIcon = new SVGIcon({
    name: 'yext',
    viewBox: '0 0 30 30',
    path: 'M25.517 28.142v.095h-.204v.905h-.066v-.905h-.197v-.095h.467zm.667 0h.066v1h-.066v-.825l-.24.595h-.013l-.24-.595v.825h-.066v-1h.066l.247.61.246-.61zM15 28.8c7.622 0 13.8-6.178 13.8-13.8 0-7.622-6.178-13.8-13.8-13.8C7.378 1.2 1.2 7.378 1.2 15c0 7.622 6.178 13.8 13.8 13.8zM15 0c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C0 6.716 6.716 0 15 0zm.45 16.65v-1.2h6.6v1.2h-2.7v5.4h-1.2v-5.4h-2.7zm-1.599-1.35l.849.849-2.601 2.601 2.601 2.601-.849.849-2.601-2.601L8.649 22.2l-.849-.849 2.601-2.601L7.8 16.149l.849-.849 2.601 2.601 2.601-2.601zM18.675 9a2.175 2.175 0 00-1.847 3.323l2.995-2.995A2.163 2.163 0 0018.675 9zm0 5.55a3.375 3.375 0 112.833-5.209l-3.789 3.788a2.175 2.175 0 003.13-1.954h1.201a3.375 3.375 0 01-3.375 3.375zm-7.425-3.734L13.78 7.8l.92.771-2.85 3.397v2.582h-1.2v-2.582L7.8 8.57l.92-.771 2.53 3.016z'
  });

  var pinIcon = new SVGIcon({
    name: 'pin',
    viewBox: '0 0 13 18',
    path: 'm9.375 0c-3.52446429 0-6.375 2.817-6.375 6.3 0 4.725 6.375 11.7 6.375 11.7s6.375-6.975 6.375-11.7c0-3.483-2.8505357-6.3-6.375-6.3zm.00000018 8.55000007c-1.25678576 0-2.27678579-1.008-2.27678579-2.25s1.02000003-2.25 2.27678579-2.25c1.25678572 0 2.27678582 1.008 2.27678582 2.25s-1.0200001 2.25-2.27678582 2.25z'
  });

  var gearIcon = new SVGIcon({
    name: 'gear',
    path: 'M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42a.353.353 0 01.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16a.353.353 0 01-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z'
  });

  var lightBulbIcon = new SVGIcon({
    name: 'light_bulb',
    viewBox: '0 0 32 35',
    path: 'M11.585 31.056l8.38-.493v-.986l-8.38.493zM11.585 33.028L15.775 35l4.19-1.972V31.55l-8.38.493v.986zm6.926-.407l-2.736 1.29-2.13-1.004 4.866-.286zM15.775 7.394c-4.63 0-8.38 3.205-8.38 8.38 0 5.177 4.19 6.902 4.19 12.818v.493l8.38-.493c0-5.916 4.19-8.188 4.19-12.817a8.38 8.38 0 00-8.38-8.38zm5.617 13.48c-1.025 1.837-2.174 3.892-2.381 6.786l-6.44.38c-.129-3.01-1.29-5.021-2.32-6.808-.493-.8-.928-1.636-1.299-2.5h13.556c-.325.708-.704 1.403-1.116 2.142zm1.479-3.128H8.627a7.793 7.793 0 01-.247-1.971c0-4.353 3.042-7.395 7.395-7.395a7.394 7.394 0 017.394 7.395 6.739 6.739 0 01-.3 1.971h.002zM26.62 15.282h4.93v1h-4.93zM23.094 7.756l2.091-2.091.698.697-2.092 2.092zM15.282 0h1v4.93h-1zM5.666 6.362l.697-.697 2.091 2.091-.697.697zM0 15.282h4.93v1H0z'
  });

  var starIcon = new SVGIcon({
    name: 'receipt',
    viewBox: '0 0 18 18',
    path: 'M8.991 0C4.023 0 0 4.032 0 9s4.023 9 8.991 9C13.968 18 18 13.968 18 9s-4.032-9-9.009-9zm3.816 14.4L9 12.105 5.193 14.4l1.008-4.329-3.357-2.907 4.428-.378L9 2.7l1.728 4.077 4.428.378-3.357 2.907z'
  });

  var close = new SVGIcon({
    name: 'close',
    complexContents: "\n    <path d=\"M7 8l9.716 9.716m0-9.716L7 17.716\" \n          stroke=\"currentColor\" \n          stroke-width=\"2\"/>\n  "
  });

  var iconsArray = [thumbIcon, receiptIcon, pantheonIcon, micIcon, directionsIcon, calendarIcon, calloutIcon, infoIcon, briefcaseIcon, kabobIcon, personIcon, magnifyingGlassIcon, officeIcon, linkIcon, windowIcon, phoneIcon, tagIcon, documentIcon, chevronIcon, supportIcon, yextIcon, pinIcon, gearIcon, lightBulbIcon, close];
  var Icons = {};
  iconsArray.forEach(function (icon) {
    Icons[icon.name] = icon.markup();
  });
  Icons["default"] = starIcon.markup();

  var IconComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(IconComponent, _Component);

    /**
     * IconComponent
     * @param opts
     * @param opts.iconName {string}
     * @param opts.customIcon {string}
     * @param opts.iconUrl {string}
     */
    function IconComponent() {
      var _this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var systemOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, IconComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(IconComponent).call(this, opts, systemOpts));
      /**
       * name of an icon from the default icon set
       * @type {string}
       */

      _this.iconName = opts.iconName || 'default';
      /**
       * the markup for a fully custom icon
       * @type {*|null}
       */

      _this.customIcon = opts.customIcon || null;
      /**
       * the url to a custom image icon
       * @type {null}
       */

      _this.iconUrl = opts.iconUrl || null;
      return _this;
    }
    /**
     * getter for the image pasted to handlebars
     * @returns {string}
     */


    _createClass(IconComponent, [{
      key: "setState",

      /**
       * overrides default functionality to provide name and markup
       * @param data
       * @returns {IconComponent}
       */
      value: function setState(data) {
        return _get(_getPrototypeOf(IconComponent.prototype), "setState", this).call(this, Object.assign(data, {
          image: this.image,
          name: this.iconName ? this.iconName : 'custom'
        }));
      }
    }, {
      key: "image",
      get: function get() {
        if (this.customIcon) {
          return this.customIcon;
        }

        if (this.iconUrl) {
          return "<img src=\"".concat(this.iconUrl, "\" alt=\"\" class=\"Icon-image\">");
        }

        if (Icons[this.iconName]) {
          return Icons[this.iconName];
        }

        return Icons["default"];
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
        return 'icons/icon';
      }
      /**
       * allowing duplicates
       * @returns {boolean}
       * @override
       */

    }, {
      key: "areDuplicateNamesAllowed",
      value: function areDuplicateNamesAllowed() {
        return true;
      }
    }, {
      key: "type",
      get: function get() {
        return 'IconComponent';
      }
    }]);

    return IconComponent;
  }(Component);

  /** @module */
  var COMPONENT_MANAGER = new ComponentManager() // Core Component
  .register(Component) // Navigation Components
  .register(NavigationComponent) // Search Components
  .register(SearchComponent).register(FilterSearchComponent).register(AutoCompleteComponent).register(SpellCheckComponent) // Filter Components
  .register(FilterBoxComponent).register(FilterOptionsComponent).register(RangeFilterComponent).register(DateRangeFilterComponent).register(DynamicFiltersComponent).register(GeoLocationComponent) // Results Components
  .register(DirectAnswerComponent).register(UniversalResultsComponent).register(ResultsComponent).register(ResultsItemComponent).register(AccordionResultsComponent).register(LocationResultsItemComponent).register(EventResultsItemComponent).register(PeopleResultsItemComponent).register(MapComponent) // Questions Components
  .register(QuestionSubmissionComponent) // Helper Components
  .register(IconComponent);

  /**
   * TemplateLoader exposes an interface for loading templates asynchronously
   * from the server and registers them with the proper renderer.
   * It also allows you to assign them synchronously.
   */

  var TemplateLoader =
  /*#__PURE__*/
  function () {
    function TemplateLoader(config) {
      _classCallCheck(this, TemplateLoader);

      if (!TemplateLoader.setInstance(this)) {
        return TemplateLoader.getInstance();
      }
      /**
       * The template url to fetch compiled templates from
       * @type {string}
       * @private
       */


      this._templateUrl = config.templateUrl || COMPILED_TEMPLATES_URL;
      this._templates = {};

      this._onLoaded = function () {};

      this._init();
    }

    _createClass(TemplateLoader, [{
      key: "_init",
      value: function _init() {
        this.fetchTemplates();
      }
    }, {
      key: "fetchTemplates",
      value: function fetchTemplates() {
        var _this = this;

        // If we already have templates loaded, do nothing
        var node = DOM.query('#yext-answers-templates');

        if (node) {
          return;
        } // Inject a script to fetch the compiled templates,
        // wrapping it a Promise for cleanliness


        new Promise(function (resolve, reject) {
          var script = DOM.createEl('script', {
            id: 'yext-answers-templates',
            onload: resolve,
            onerror: reject,
            async: true,
            src: _this._templateUrl
          });
          DOM.append('body', script);
        }).then(function (response) {
          // TODO(billy) Implmenet error handling here (e.g. request could fail)
          console.log('Templates loaded successfully!');
        });
        return this;
      }
      /**
       * register the templates internally so that they can be later consumed
       * (e.g. by components and renderers) with convienience.
       *
       * `fetchTemplates` will automatically call this, providing the compiled templates from the server.
       */

    }, {
      key: "register",
      value: function register(templates) {
        this._templates = templates; // Notify our consumers that the templates are here :)

        this._onLoaded(this._templates);

        return this;
      }
    }, {
      key: "onLoaded",
      value: function onLoaded(cb) {
        this._onLoaded = cb;
        return this;
      }
    }, {
      key: "get",
      value: function get(templateName) {
        return this._templates[templateName];
      }
      /**
       * @return The internal template collection
       */

    }, {
      key: "getTemplates",
      value: function getTemplates() {
        return this._templates;
      }
    }], [{
      key: "setInstance",
      value: function setInstance(instance) {
        if (!this.instance) {
          this.instance = instance;
          return true;
        }

        return false;
      }
    }, {
      key: "getInstance",
      value: function getInstance() {
        return this.instance;
      }
    }]);

    return TemplateLoader;
  }();

  /** @module */

  /**
   * ErrorReporter is used for reporting errors to the console and server
   */

  var ErrorReporter =
  /*#__PURE__*/
  function () {
    function ErrorReporter(config) {
      var _this = this;

      _classCallCheck(this, ErrorReporter);

      /**
       * The apiKey to use for reporting
       * @type {string}
       */
      this.apiKey = config.apiKey;
      /**
       * The experienceKey to use when reporting
       * @type {string}
       */

      this.experienceKey = config.experienceKey;
      /**
       * The answers config version used for api requests
       * @type {string|number}
       */

      this.experienceVersion = config.experienceVersion || 'config1.0';
      /**
       * If true, print entire error objects to the console for inspection
       * @type {boolean}
       */

      this.printVerbose = config.printVerbose;
      /**
       * If true, report the error the server for logging and monitoring
       * @type {boolean}
       */

      this.sendToServer = config.sendToServer; // Attach reporting listeners to window

      window.addEventListener('error', function (e) {
        return _this.report(e.error);
      });
      window.addEventListener('unhandledrejection', function (e) {
        return _this.report(e.error);
      });
    }
    /**
     * report pretty prints the error to the console, optionally
     * prints the entire error if `printVerbose` is true, and sends the
     * error to the server to be logged if `sendToServer` is true
     * @param {AnswersBaseError} err The error to be reported
     * @returns {AnswersBaseError} The reported error
     */


    _createClass(ErrorReporter, [{
      key: "report",
      value: function report(err) {
        if (!(err instanceof AnswersBaseError) || err.reported) {
          return;
        }

        err.reported = true;
        this.printError(err);

        if (this.sendToServer) {
          var request = new ApiRequest({
            endpoint: '/v2/accounts/me/answers/errors',
            apiKey: this.apiKey,
            version: 20190301,
            params: {
              'error': err.toJson(),
              'libVersion': LIB_VERSION,
              'experienceVersion': this.experienceVersion,
              'experienceKey': this.experienceKey
            }
          });
          request.get()["catch"](console.err);
        }

        return err;
      }
      /**
       * prints the given error to the browser console
       * @param {AnswersBaseError} err The error to be printed
       */

    }, {
      key: "printError",
      value: function printError(err) {
        console.error(err.toString());

        if (this.printVerbose) {
          console.log(_objectSpread({}, err));
        }
      }
    }]);

    return ErrorReporter;
  }();

  /** @module PersistentStorage */

  var PersistentStorage =
  /*#__PURE__*/
  function () {
    function PersistentStorage() {
      var _this = this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, PersistentStorage);

      /**
       * The current params model
       * @type {SearchParams}
       */
      this._params = new SearchParams(window.location.search.substring(1));
      /**
       * The current history edit timer, if any
       * @type {number}
       */

      this._historyTimer = null;
      /**
       * The list of listeners to every storage update
       * @type {function[]}
       */

      this._updateListener = config.updateListener || function () {};
      /**
       * The list of listeners to storage resets
       * @type {function[]}
       */


      this._resetListener = config.resetListener || function () {};

      window.onpopstate = function () {
        _this._params = new SearchParams(window.location.search.substring(1));

        _this._callListener(_this._updateListener);

        _this._callListener(_this._resetListener);
      };
    }
    /**
     * Insert the given key/value pair into storage
     * @param {string} key The key to insert the data in
     * @param {*} data The data to insert
     */


    _createClass(PersistentStorage, [{
      key: "set",
      value: function set(key, data) {
        if (typeof key !== 'string') {
          throw new AnswersStorageError('Storage data key must be a string', key, data);
        }

        var newData = data;

        if (typeof data !== 'string') {
          newData = JSON.stringify(data);
        }

        this._params.set(key, newData);

        this._updateHistory();
      }
      /**
       * Delete the given key from storage
       * @param {string} key The key to delete
       */

    }, {
      key: "delete",
      value: function _delete(key) {
        this._params["delete"](key);

        this._updateHistory();
      }
    }, {
      key: "_updateHistory",
      value: function _updateHistory() {
        var _this2 = this;

        if (this._historyTimer) {
          clearTimeout(this._historyTimer);
        } // batch update calls across components to avoid updating the url too much


        this._historyTimer = setTimeout(function () {
          _this2._historyTimer = null;
          window.history.pushState(null, null, "?".concat(_this2._params.toString()));

          _this2._callListener(_this2._updateListener);
        }, 100);
      }
      /**
       * Invoke the given list of callbacks with the current storage data
       * @param {function[]} listeners The callbacks to invoke
       * @private
       */

    }, {
      key: "_callListener",
      value: function _callListener(listener) {
        listener(this.getAll(), this._params.toString());
      }
      /**
       * Get all the key/value pairs in storage
       */

    }, {
      key: "getAll",
      value: function getAll() {
        var allParams = {};
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this._params.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2),
                key = _step$value[0],
                val = _step$value[1];

            allParams[key] = val;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return allParams;
      }
    }]);

    return PersistentStorage;
  }();

  /**
   * The main Answers interface
   */

  var Answers =
  /*#__PURE__*/
  function () {
    function Answers() {
      _classCallCheck(this, Answers);

      if (!Answers.setInstance(this)) {
        return Answers.getInstance();
      }
      /**
       * A reference to the Component base class for custom
       * components to extend
       */


      this.Component = Component;
      /**
       * A reference to the AnalyticsEvent base class for reporting
       * custom analytics
       */

      this.AnalyticsEvent = AnalyticsEvent;
      /**
       * A reference of the renderer to use for the components
       * This is provided during initialization.
       * @type {Renderer}
       */

      this.renderer = new Renderers.Handlebars();
      /**
       * A local reference to the component manager
       * @type {ComponentManager}
       */

      this.components = COMPONENT_MANAGER;
      /**
       * A local reference to the core api
       * @type {Core}
       */

      this.core = null;
      /**
       * A callback function to invoke once the library is ready.
       * Typically fired after templates are fetched from server for rendering.
       */

      this._onReady = function () {};
    }

    _createClass(Answers, [{
      key: "init",
      value: function init(config) {
        var _this = this;

        var globalStorage = new GlobalStorage();
        var persistentStorage = new PersistentStorage({
          updateListener: config.onStateChange,
          resetListener: function resetListener(data) {
            return globalStorage.setAll(data);
          }
        });
        globalStorage.setAll(persistentStorage.getAll());
        this.core = new Core({
          apiKey: config.apiKey,
          globalStorage: globalStorage,
          persistentStorage: persistentStorage,
          experienceKey: config.experienceKey,
          fieldFormatters: config.fieldFormatters,
          experienceVersion: config.experienceVersion,
          locale: config.locale
        });

        if (config.onStateChange && typeof config.onStateChange === 'function') {
          config.onStateChange(persistentStorage.getAll(), window.location.search.substr(1));
        }

        this.components.setCore(this.core).setRenderer(this.renderer);

        if (config.businessId) {
          var reporter = new AnalyticsReporter(this.core, config.experienceKey, config.experienceVersion, config.businessId, config.analyticsOptions);
          this.AnalyticsReporter = reporter;
          this.components.setAnalyticsReporter(reporter);
          initScrollListener(reporter);
        }

        this._onReady = config.onReady || function () {};

        if (config.useTemplates === false || config.templateBundle) {
          if (config.templateBundle) {
            this.renderer.init(config.templateBundle);
          }

          this._onReady();

          return this;
        } // Templates are currently downloaded separately from the CORE and UI bundle.
        // Future enhancement is to ship the components with templates in a separate bundle.


        this.templates = new TemplateLoader({
          templateUrl: config.templateUrl
        }).onLoaded(function (templates) {
          _this.renderer.init(templates);

          _this._onReady();
        }); // Report errors to console & server

        this._errorReporter = new ErrorReporter({
          apiKey: config.apiKey,
          experienceKey: config.experienceKey,
          experienceVersion: config.experienceVersion,
          printVerbose: config.debug,
          sendToServer: !config.suppressErrorReports
        });
        return this;
      }
    }, {
      key: "domReady",
      value: function domReady(cb) {
        DOM.onReady(cb);
      }
    }, {
      key: "onReady",
      value: function onReady(cb) {
        this._onReady = cb;
        return this;
      }
      /**
       * Register a custom component type so it can be created via
       * addComponent and used as a child component
       * @param {Component} componentClass
       */

    }, {
      key: "registerComponentType",
      value: function registerComponentType(componentClass) {
        this.components.register(componentClass);
      }
    }, {
      key: "addComponent",
      value: function addComponent(type, opts) {
        if (typeof opts === 'string') {
          opts = {
            container: opts
          };
        }

        try {
          this.components.create(type, opts).mount();
        } catch (e) {
          throw new AnswersComponentError('Failed to add component', type, e);
        }

        return this;
      }
      /**
       * Remove the component - and all of its children - with the given name
       * @param {string} name The name of the component to remove
       */

    }, {
      key: "removeComponent",
      value: function removeComponent(name) {
        this.components.removeByName(name);
      }
    }, {
      key: "createComponent",
      value: function createComponent(opts) {
        return this.components.create('Component', opts).mount();
      }
    }, {
      key: "registerHelper",
      value: function registerHelper(name, cb) {
        this.renderer.registerHelper(name, cb);
        return this;
      }
    }], [{
      key: "setInstance",
      value: function setInstance(instance) {
        if (!this.instance) {
          this.instance = instance;
          return true;
        }

        return false;
      }
    }, {
      key: "getInstance",
      value: function getInstance() {
        return this.instance;
      }
    }]);

    return Answers;
  }();
  /**
   * Initialize the scroll event listener to send analytics events
   * when the user scrolls to the bottom. Debounces scroll events so
   * they are processed after the user stops scrolling
   */


  function initScrollListener(reporter) {
    var DEBOUNCE_TIME = 100;
    var timeout = null;

    var sendEvent = function sendEvent() {
      if (window.innerHeight + window.pageYOffset >= document.body.scrollHeight) {
        var event = new AnalyticsEvent('SCROLL_TO_BOTTOM_OF_PAGE');
        reporter.report(event);
      }
    };

    document.addEventListener('scroll', function () {
      clearTimeout(timeout);
      timeout = setTimeout(sendEvent, DEBOUNCE_TIME);
    });
  }

  var ANSWERS = new Answers();

  return ANSWERS;

}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2Vycy11bWQuanMiLCJzb3VyY2VzIjpbInNyYy9jb3JlL2h0dHAvaHR0cHJlcXVlc3Rlci5qcyIsInNyYy9jb3JlL2NvbnN0YW50cy5qcyIsInNyYy91aS9kb20vc2VhcmNocGFyYW1zLmpzIiwic3JjL2NvcmUvaHR0cC9hcGlyZXF1ZXN0LmpzIiwic3JjL2NvcmUvZXJyb3JzL2Vycm9ycy5qcyIsInNyYy9jb3JlL3NlYXJjaC9zZWFyY2hhcGkuanMiLCJzcmMvY29yZS9tb2RlbHMvaGlnaGxpZ2h0ZWR2YWx1ZS5qcyIsInNyYy9jb3JlL21vZGVscy9hdXRvY29tcGxldGVkYXRhLmpzIiwic3JjL2NvcmUvc2VhcmNoL2F1dG9jb21wbGV0ZWRhdGF0cmFuc2Zvcm1lci5qcyIsInNyYy9jb3JlL3NlYXJjaC9hdXRvY29tcGxldGVhcGkuanMiLCJzcmMvY29yZS9zZWFyY2gvcXVlc3Rpb25hbnN3ZXJhcGkuanMiLCJzcmMvY29yZS9zdG9yYWdlL3NlYXJjaHN0YXRlcy5qcyIsInNyYy9jb3JlL21vZGVscy9yZXN1bHQuanMiLCJzcmMvY29yZS9tb2RlbHMvcmVzdWx0ZmFjdG9yeS5qcyIsInNyYy9jb3JlL21vZGVscy9zZWN0aW9uLmpzIiwic3JjL2NvcmUvbW9kZWxzL3VuaXZlcnNhbHJlc3VsdHMuanMiLCJzcmMvY29yZS9tb2RlbHMvZGlyZWN0YW5zd2VyLmpzIiwic3JjL2NvcmUvbW9kZWxzL25hdmlnYXRpb24uanMiLCJzcmMvY29yZS9tb2RlbHMvdmVydGljYWxyZXN1bHRzLmpzIiwic3JjL2NvcmUvbW9kZWxzL3NwZWxsY2hlY2suanMiLCJzcmMvY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzLmpzIiwic3JjL2NvcmUvbW9kZWxzL2R5bmFtaWNmaWx0ZXJzLmpzIiwic3JjL2NvcmUvbW9kZWxzL3NlYXJjaGludGVudHMuanMiLCJzcmMvY29yZS9zZWFyY2gvc2VhcmNoZGF0YXRyYW5zZm9ybWVyLmpzIiwic3JjL2NvcmUvbW9kZWxzL3F1ZXN0aW9uc3VibWlzc2lvbi5qcyIsInNyYy9jb3JlL2NvcmUuanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnRtYW5hZ2VyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9yZW5kZXJlci5qcyIsInNyYy91aS9yZW5kZXJpbmcvaGFuZGxlYmFyc3JlbmRlcmVyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9jb25zdC5qcyIsInNyYy91aS9kb20vZG9tLmpzIiwic3JjL2NvcmUvZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL3N0YXRlLmpzIiwic3JjL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50LmpzIiwic3JjL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc3JlcG9ydGVyLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9tb2R1bGVkYXRhLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9nbG9iYWxzdG9yYWdlLmpzIiwic3JjL2NvcmUvaW5kZXguanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb25jb21wb25lbnQuanMiLCJzcmMvY29yZS9tb2RlbHMvZmlsdGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3NlYXJjaC9maWx0ZXJzZWFyY2hjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9zZWFyY2gvYXV0b2NvbXBsZXRlY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL3NwZWxsY2hlY2tjb21wb25lbnQuanMiLCJzcmMvY29yZS9tb2RlbHMvZmFjZXQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcmJveGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyb3B0aW9uc2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcnMvcmFuZ2VmaWx0ZXJjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2RhdGVyYW5nZWZpbHRlcmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcnMvZHluYW1pY2ZpbHRlcnNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2dlb2xvY2F0aW9uY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9kaXJlY3RhbnN3ZXJjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9wZW9wbGVyZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9wcm92aWRlcnMvbWFwcHJvdmlkZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvcHJvdmlkZXJzL2dvb2dsZW1hcHByb3ZpZGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL3Byb3ZpZGVycy9tYXBib3htYXBwcm92aWRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9tYXBjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL2FjY29yZGlvbnJlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9xdWVzdGlvbnMvcXVlc3Rpb25zdWJtaXNzaW9uY29tcG9uZW50LmpzIiwic3JjL3VpL2ljb25zL2ljb24uanMiLCJzcmMvdWkvaWNvbnMvdGh1bWIuanMiLCJzcmMvdWkvaWNvbnMvcmVjZWlwdC5qcyIsInNyYy91aS9pY29ucy9wYW50aGVvbi5qcyIsInNyYy91aS9pY29ucy9taWMuanMiLCJzcmMvdWkvaWNvbnMvZGlyZWN0aW9ucy5qcyIsInNyYy91aS9pY29ucy9jYWxlbmRhci5qcyIsInNyYy91aS9pY29ucy9jYWxsb3V0LmpzIiwic3JjL3VpL2ljb25zL2luZm8uanMiLCJzcmMvdWkvaWNvbnMvYnJpZWZjYXNlLmpzIiwic3JjL3VpL2ljb25zL2thYm9iLmpzIiwic3JjL3VpL2ljb25zL3BlcnNvbi5qcyIsInNyYy91aS9pY29ucy9tYWduaWZ5aW5nX2dsYXNzLmpzIiwic3JjL3VpL2ljb25zL29mZmljZS5qcyIsInNyYy91aS9pY29ucy9saW5rLmpzIiwic3JjL3VpL2ljb25zL3dpbmRvdy5qcyIsInNyYy91aS9pY29ucy9waG9uZS5qcyIsInNyYy91aS9pY29ucy90YWcuanMiLCJzcmMvdWkvaWNvbnMvZG9jdW1lbnQuanMiLCJzcmMvdWkvaWNvbnMvY2hldnJvbi5qcyIsInNyYy91aS9pY29ucy9zdXBwb3J0LmpzIiwic3JjL3VpL2ljb25zL3lleHQuanMiLCJzcmMvdWkvaWNvbnMvcGluLmpzIiwic3JjL3VpL2ljb25zL2dlYXIuanMiLCJzcmMvdWkvaWNvbnMvbGlnaHRfYnVsYi5qcyIsInNyYy91aS9pY29ucy9zdGFyLmpzIiwic3JjL3VpL2ljb25zL2Nsb3NlLmpzIiwic3JjL3VpL2ljb25zL2luZGV4LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvaWNvbnMvaWNvbmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2NvbnN0LmpzIiwic3JjL3VpL3JlbmRlcmluZy90ZW1wbGF0ZWxvYWRlci5qcyIsInNyYy91aS9pbmRleC5qcyIsInNyYy9jb3JlL2Vycm9ycy9lcnJvcnJlcG9ydGVyLmpzIiwic3JjL3VpL3N0b3JhZ2UvcGVyc2lzdGVudHN0b3JhZ2UuanMiLCJzcmMvYW5zd2Vycy11bWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBtb2R1bGUgSHR0cFJlcXVlc3RlciAqL1xuXG4vKiBnbG9iYWwgZmV0Y2ggKi9cblxuLyoqXG4gKiBUeXBlcyBvZiBIVFRQIHJlcXVlc3RzXG4gKi9cbmNvbnN0IE1ldGhvZHMgPSB7XG4gIEdFVDogJ2dldCcsXG4gIFBPU1Q6ICdwb3N0JyxcbiAgUFVUOiAncHV0JyxcbiAgREVMRVRFOiAnZGVsZXRlJ1xufTtcblxuLyoqXG4gKiBIdHRwUmVxdWVzdGVyIGlzIGEgd3JhcHBlciBhcm91bmQgdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiBvZiBBSkFYXG4gKiByZWxhdGVkIG1hdHRlcnMuIEl0J3MgdXNlZCB0byBtYWtlIGFsbCB0eXBlcyBvZiBuZXR3b3JrIHJlcXVlc3RzXG4gKiBhbmQgZXhwb3NlcyBhIHByb21pc2UgaW50ZXJmYWNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwUmVxdWVzdGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIEdFVCBIVFRQIHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHByb3ZpZGUgKGdldHMgZW5jb2RlZCBpbnRvIHRoZSBVUkwpXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIENvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAqL1xuICBnZXQgKHVybCwgZGF0YSwgb3B0cykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoTWV0aG9kcy5HRVQsIHRoaXMuZW5jb2RlUGFyYW1zKHVybCwgZGF0YSksIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIFBPU1QgSFRUUCByZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0ge09iamVjdH0gdXJsUGFyYW1zIFRoZSBwYXJhbXMgdG8gZW5jb2RlIGludG8gdGhlIFVSTFxuICAgKiBAcGFyYW0ge09iamVjdH0ganNvbkJvZHkgVGhlIHJlcXVlc3QgYm9keSAoanNvbikgdG8gcHJvdmlkZSB3aXRoIHRoZSBQT1NUIHJlcXVlc3RcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlcXVlc3RDb25maWcgQ29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICovXG4gIHBvc3QgKHVybCwgdXJsUGFyYW1zLCBqc29uQm9keSwgcmVxdWVzdENvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXG4gICAgICBNZXRob2RzLlBPU1QsXG4gICAgICB0aGlzLmVuY29kZVBhcmFtcyh1cmwsIHVybFBhcmFtcyksXG4gICAgICBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoanNvbkJvZHkpLFxuICAgICAgICBjcmVkZW50aWFsczogdW5kZWZpbmVkXG4gICAgICB9LCByZXF1ZXN0Q29uZmlnKVxuICAgICk7XG4gIH1cblxuICByZXF1ZXN0IChtZXRob2QsIHVybCwgb3B0cykge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgbWV0aG9kLFxuICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICAgIH0sIG9wdHMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgYmVhY29uIHRvIHRoZSBwcm92aWRlZCB1cmwgd2hpY2ggd2lsbCBzZW5kIGEgbm9uLWJsb2NraW5nIHJlcXVlc3RcbiAgICogdG8gdGhlIHNlcnZlciB0aGF0IGlzIGd1YXJhbnRlZWQgdG8gc2VuZCBiZWZvcmUgcGFnZSBsb2FkLiBObyByZXNwb25zZSBpcyByZXR1cm5lZCxcbiAgICogc28gYmVhY29ucyBhcmUgcHJpbWFyaWx5IHVzZWQgZm9yIGFuYWx5dGljcyByZXBvcnRpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBzZW5kIHRoZSBiZWFjb24gdG9cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgVGhlIGRhdGEgcGF5bG9hZCB0byBzZW5kIGluIHRoZSBiZWFjb25cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgcmVxdWVzdCBpcyBzdWNjZXNzZnVsbHkgcXVldWVkXG4gICAqL1xuICBiZWFjb24gKHVybCwgZGF0YSkge1xuICAgIHJldHVybiBuYXZpZ2F0b3Iuc2VuZEJlYWNvbih1cmwsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgfVxuXG4gIGVuY29kZVBhcmFtcyAodXJsLCBwYXJhbXMpIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtcyAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgaGFzUGFyYW0gPSB1cmwuaW5kZXhPZignPycpID4gLTE7XG5cbiAgICBsZXQgc2VhcmNoUXVlcnkgPSAnJztcbiAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICBpZiAoIWhhc1BhcmFtKSB7XG4gICAgICAgIGhhc1BhcmFtID0gdHJ1ZTtcbiAgICAgICAgc2VhcmNoUXVlcnkgKz0gJz8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VhcmNoUXVlcnkgKz0gJyYnO1xuICAgICAgfVxuXG4gICAgICBzZWFyY2hRdWVyeSArPSBrZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gdXJsICsgc2VhcmNoUXVlcnk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbi8qKiBUaGUgY3VycmVudCBsaWIgdmVyc2lvbiwgcmVwb3J0ZWQgd2l0aCBlcnJvcnMgYW5kIGFuYWx5dGljcyAqL1xuZXhwb3J0IGNvbnN0IExJQl9WRVJTSU9OID0gJ3YwLjkuMic7XG5cbi8qKiBUaGUgYmFzZSB1cmwgZm9yIHRoZSBhcGkgYmFja2VuZCAqL1xuZXhwb3J0IGNvbnN0IEFQSV9CQVNFX1VSTCA9ICdodHRwczovL2xpdmVhcGkueWV4dC5jb20nO1xuXG4vKiogVGhlIGRlZmF1bHQgdXJsIGZvciBjb21waWxlZCBjb21wb25lbnQgdGVtcGxhdGVzICovXG5leHBvcnQgY29uc3QgQ09NUElMRURfVEVNUExBVEVTX1VSTCA9IGBodHRwczovL2Fzc2V0cy5zaXRlc2Nkbi5uZXQvYW5zd2Vycy8ke0xJQl9WRVJTSU9OfS9hbnN3ZXJzdGVtcGxhdGVzLmNvbXBpbGVkLm1pbi5qc2A7XG5cbi8qKiBUaGUgYmFzZSB1cmwgZm9yIHRoZSBhbmFseXRpY3MgYmFja2VuZCAgKi9cbmV4cG9ydCBjb25zdCBBTkFMWVRJQ1NfQkFTRV9VUkwgPSAnaHR0cHM6Ly9yZWFsdGltZWFuYWx5dGljcy55ZXh0LmNvbSc7XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hQYXJhbXMgKi9cblxuLyogZ2xvYmFsIHdpbmRvdyAqL1xuXG4vKipcbiAqIFNlYXJjaFBhcmFtcyBpcyBhIGNsYXNzIHRvIGdldCB0aGUgc2VhcmNoIHBhcmFtcyBpbiBhIFVSTC5cbiAqIEl0IGlzIGEgcmVwbGFjZW1lbnQgZm9yIFVSTC5zZWFyY2hQYXJhbXMgYW5kIFVSTFNlYXJjaFBhcmFtcyBmb3IgYnJvd3NlcnMgbGlrZSBJRTExXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0cnVjdG9yICh1cmwpIHtcbiAgICAvKipcbiAgICAgKiBNYXBwaW5nIG9mIGFsbCBxdWVyeSBwYXJhbWV0ZXJzIGluIHRoZSBnaXZlbiB1cmwsIHF1ZXJ5IHBhcmFtIC0+IHZhbHVlXG4gICAgICogT25seSB1c2VkIGlmIFVSTFNlYXJjaFBhcmFtcyBkb2VzIG5vdCBleGlzdCBpbiB0aGUgd2luZG93XG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3BhcmFtcyA9IHt9O1xuXG4gICAgaWYgKHdpbmRvdyAmJiB3aW5kb3cuVVJMU2VhcmNoUGFyYW1zKSB7XG4gICAgICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyh1cmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wYXJhbXMgPSB0aGlzLnBhcnNlKHVybCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHBhcnNlIGNyZWF0ZXMgYSBtYXBwaW5nIG9mIGFsbCBxdWVyeSBwYXJhbXMgaW4gYSBnaXZlbiB1cmxcbiAgICogVGhlIHF1ZXJ5IHBhcmFtIHZhbHVlcyBhcmUgZGVjb2RlZCBiZWZvcmUgYmVpbmcgcHV0IGluIHRoZSBtYXBcbiAgICogVGhyZWUgdHlwZXMgb2YgaW5wdXQgYXJlIHN1cHBvcnRlZFxuICAgKiAgICgxKSBmdWxsIFVSTCBlLmcuIGh0dHA6Ly93d3cueWV4dC5jb20vP3E9aGVsbG9cbiAgICogICAoMikgcGFyYW1zIHdpdGggPyBlLmcuID9xPWhlbGxvXG4gICAqICAgKDEpIHBhcmFtcyB3aXRob3V0ID8gZS5nLiBxPWhlbGxvXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybFxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBtYXBwaW5nIGZyb20gcXVlcnkgcGFyYW0gLT4gdmFsdWUgd2hlcmUgdmFsdWUgaXMgJycgaWYgbm8gdmFsdWUgaXMgcHJvdmlkZWRcbiAgICovXG4gIHBhcnNlICh1cmwpIHtcbiAgICBsZXQgcGFyYW1zID0ge307XG4gICAgbGV0IHNlYXJjaCA9IHVybDtcblxuICAgIGlmIChzZWFyY2ggPT09ICcnKSB7XG4gICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cblxuICAgIC8vIE5vcm1hbGl6ZSBhbGwgdXJsIGlucHV0cyB0byBzdHJpbmcgb2YgcXVlcnkgcGFyYW1zIHNlcGFyYXRlZCBieSAmXG4gICAgaWYgKHVybC5pbmRleE9mKCc/JykgPiAtMSkge1xuICAgICAgc2VhcmNoID0gdXJsLnNsaWNlKHVybC5pbmRleE9mKCc/JykgKyAxKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbmNvZGVkUGFyYW1zID0gc2VhcmNoLnNwbGl0KCcmJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmNvZGVkUGFyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrZXlWYWwgPSBlbmNvZGVkUGFyYW1zW2ldLnNwbGl0KCc9Jyk7XG4gICAgICBpZiAoa2V5VmFsLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcGFyYW1zW2tleVZhbFswXV0gPSBTZWFyY2hQYXJhbXMuZGVjb2RlKGtleVZhbFsxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXNba2V5VmFsWzBdXSA9ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJhbXM7XG4gIH1cblxuICAvKipcbiAgICogZ2V0IHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBxdWVyeSBwYXJhbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgdGhlIHF1ZXJ5IHBhcmFtIGtleSB0byBnZXQgdGhlIHZhbHVlIG9mXG4gICAqIEByZXR1cm4ge3N0cmluZ30gcGFyYW0gdmFsdWUsIG51bGwgb3RoZXJ3aXNlXG4gICAqL1xuICBnZXQgKHF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl9wYXJhbXNbU3RyaW5nKHF1ZXJ5KV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtc1txdWVyeV07XG4gIH1cblxuICAvKipcbiAgICogc2V0IGNoYW5nZXMgdGhlIHZhbHVlIG9mIGEgZ2l2ZW4gcXVlcnkgcGFyYW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgdGhlIHF1ZXJ5IHBhcmFtIGtleVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgdGhlIHZhbHVlIG9mIHRoZSBxdWVyeSBwYXJhbSB1cGRhdGUgd2l0aFxuICAgKi9cbiAgc2V0IChuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMuX3BhcmFtc1tTdHJpbmcobmFtZSldID0gU3RyaW5nKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoYXMgY2hlY2tzIHRvIHNlZSBpZiB0aGUgZ2l2ZW4gcXVlcnkgcGFyYW0ga2V5IGV4aXN0cyBpbiB0aGUgcGFyYW1zIG9iamVjdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgdGhlIHF1ZXJ5IHBhcmFtIHRvIGNoZWNrXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIHF1ZXJ5IHBhcmFtIGlzIGluIHRoZSBwYXJhbXMgb2JqZWN0LCBmYWxzZSBvL3dcbiAgICovXG4gIGhhcyAocXVlcnkpIHtcbiAgICByZXR1cm4gcXVlcnkgaW4gdGhpcy5fcGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIHRvU3RyaW5nIHJldHVybnMgYSB1cmwgd2l0aCBhbGwgdGhlIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgcGFyYW1zIG9iamVjdCAod2l0aG91dCBhID8pXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvU3RyaW5nICgpIHtcbiAgICBsZXQgc3RyaW5nID0gW107XG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuX3BhcmFtcykge1xuICAgICAgc3RyaW5nLnB1c2goYCR7a2V5fT0ke1NlYXJjaFBhcmFtcy5lbmNvZGUodGhpcy5fcGFyYW1zW2tleV0pfWApO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGVudHJpZXMgKCkge1xuICAgIGxldCBlbnRyaWVzID0gW107XG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuX3BhcmFtcykge1xuICAgICAgZW50cmllcy5wdXNoKFtrZXksIHRoaXMuX3BhcmFtc1trZXldXSk7XG4gICAgfVxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgLyoqXG4gICAqIGRlY29kZSByZXR1cm5zIHRoZSBkZWNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBzdHJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyB0aGUgc3RyaW5nIHRvIGRlY29kZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZGVjb2RlIChzdHJpbmcpIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cmluZy5yZXBsYWNlKC9bICtdL2csICclMjAnKSk7XG4gIH1cblxuICAvKipcbiAgICogZGVjb2RlIHJldHVybnMgdGhlIGVuY29kZWQgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIHN0cmluZyAoZS5nLiArIC0+ICUyQilcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyB0aGUgc3RyaW5nIHRvIGVuY29kZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZW5jb2RlIChzdHJpbmcpIHtcbiAgICBsZXQgcmVwbGFjZSA9IHtcbiAgICAgICchJzogJyUyMScsXG4gICAgICBcIidcIjogJyUyNycsXG4gICAgICAnKCc6ICclMjgnLFxuICAgICAgJyknOiAnJTI5JyxcbiAgICAgICclMjAnOiAnKydcbiAgICB9O1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5nKS5yZXBsYWNlKC9bIScoKV18JTIwL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgcmV0dXJuIHJlcGxhY2VbbWF0Y2hdO1xuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBcGlSZXF1ZXN0ICovXG5cbmltcG9ydCBIdHRwUmVxdWVzdGVyIGZyb20gJy4vaHR0cHJlcXVlc3Rlcic7XG5pbXBvcnQgeyBBUElfQkFTRV9VUkwsIExJQl9WRVJTSU9OIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vdWkvZG9tL3NlYXJjaHBhcmFtcyc7IC8vIFRPRE8gaWRlYWxseSB0aGlzIHdvdWxkIGJlIHBhc3NlZCBpbiBhcyBhIHBhcmFtXG5cbi8qKlxuICogQXBpUmVxdWVzdCBpcyB0aGUgYmFzZSBjbGFzcyBmb3IgYWxsIEFQSSByZXF1ZXN0cy5cbiAqIEl0IGRlZmluZXMgYWxsIG9mIHRoZSBjb3JlIHByb3BlcnRpZXMgcmVxdWlyZWQgdG8gbWFrZSBhIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpUmVxdWVzdCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiB1c2VkIGZvciBtYWtpbmcgbmV0d29yayByZXF1ZXN0IGFuZCBoYW5kbGluZyBlcnJvcnNcbiAgICAgKiBAdHlwZSB7SHR0cFJlcXVlc3Rlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3JlcXVlc3RlciA9IG5ldyBIdHRwUmVxdWVzdGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYmFzZVVybCB0byB1c2UgZm9yIG1ha2luZyBhIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYmFzZVVybCA9IG9wdHMuYmFzZVVybCB8fCBBUElfQkFTRV9VUkw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZW5kcG9pbnQgdG8gdXNlIGluIHRoZSB1cmwgKGFwcGVuZGVkIHRvIHRoZSB7YmFzZVVybH0pXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2VuZHBvaW50ID0gb3B0cy5lbmRwb2ludCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnNpb24gb2YgdGhlIEFQSSB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJzaW9uID0gb3B0cy52ZXJzaW9uIHx8IDIwMTkwMTAxO1xuXG4gICAgLyoqXG4gICAgICogQWRkaXRpb25hbCBkYXRhIHBhcmFtcyB0aGF0IGFyZSBzZW50IGFsb25nIHdpdGggdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcGFyYW1zID0gb3B0cy5wYXJhbXMgfHwge307XG4gIH1cblxuICAvKipcbiAgICogZ2V0IGNyZWF0ZXMgYSBuZXcgYEdFVGAgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSByZXF1ZXN0IGNsYXNzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZ2V0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdGVyLmdldChcbiAgICAgIHRoaXMuX2Jhc2VVcmwgKyB0aGlzLl9lbmRwb2ludCxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuYmFzZVBhcmFtcygpLCB0aGlzLnNhbml0aXplUGFyYW1zKHRoaXMuX3BhcmFtcykpXG4gICAgKTtcbiAgfVxuXG4gIHBvc3QgKG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdGVyLnBvc3QoXG4gICAgICB0aGlzLl9iYXNlVXJsICsgdGhpcy5fZW5kcG9pbnQsXG4gICAgICB0aGlzLmJhc2VQYXJhbXMoKSAvKiB1cmxQYXJhbXMgKi8sXG4gICAgICB0aGlzLnNhbml0aXplUGFyYW1zKHRoaXMuX3BhcmFtcykgLyoganNvbkJvZHkgKi8sXG4gICAgICBvcHRzIC8qIHJlcXVlc3RDb25maWcgKi8pO1xuICB9XG5cbiAgYmFzZVBhcmFtcyAoKSB7XG4gICAgbGV0IGJhc2VQYXJhbXMgPSB7XG4gICAgICAndic6IHRoaXMuX3ZlcnNpb24sXG4gICAgICAnYXBpX2tleSc6IHRoaXMuX2FwaUtleSxcbiAgICAgICdqc0xpYlZlcnNpb24nOiBMSUJfVkVSU0lPTlxuICAgIH07XG5cbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICBpZiAodXJsUGFyYW1zLmhhcygnYmV0YScpKSB7XG4gICAgICBiYXNlUGFyYW1zWydiZXRhJ10gPSB1cmxQYXJhbXMuZ2V0KCdiZXRhJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2VQYXJhbXM7XG4gIH1cblxuICBzYW5pdGl6ZVBhcmFtcyAocGFyYW1zID0ge30pIHtcbiAgICAvLyBSZW1vdmUgYW55IHBhcmFtYXRlcnMgd2hvcyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC5cbiAgICAvL1xuICAgIC8vIE5PVEUoYmlsbHkpIFByb2JhYmx5IGJldHRlciB0byBiZSBleHBsaWNpdCBhYm91dCBob3cgdG8gaGFuZGxlIHRoaXMgYXQgdGhlIHJlcXVlc3QgYnVpbGRpbmcgbGV2ZWwsXG4gICAgLy8gYnV0IEkgY2FuJ3Qgc2VlIGFueSBjYXNlcyB3aGVyZSB3ZSdkIGV2ZXIgd2FudCB0byBzZW5kICd1bmRlZmluZWQnIGFzIGEgdmFsdWUgdG8gdGhlIHNlcnZlci5cbiAgICAvLyBTbyBpdCdzIHByb2JhYmx5IGZpbmUgdG8gJ2NsZWFuJyB0aGUgcGFyYW1zIG9iamVjdCBoZXJlXG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAocGFyYW1zW2tleV0gPT09IHVuZGVmaW5lZCB8fCBwYXJhbXNba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgcGFyYW1zW2tleV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBFcnJvcnMgKi9cblxuLyoqXG4gKiBBbnN3ZXJzQmFzZUVycm9yIGlzIGFuIGV4dGVuc2lvbiBvZiB0aGUgYmFzZSBFcnJvciBvYmplY3QuXG4gKiBUaGlzIGlzIHRoZSBvYmplY3QgdGhhdCBpcyB1c2VkIHRvIHdoZW4gcmVwb3J0aW5nIHRvIHRoZSBzZXJ2ZXIuXG4gKiBAZXh0ZW5kcyBFcnJvclxuICpcbiAqIEVycm9yIGNvZGVzIGZhbGwgaW50byBvbmUgb2YgZm91ciBjYXRlZ29yaWVzOlxuICogMVhYIGVycm9yczogQmFzaWMgZXJyb3JzXG4gKiAyWFggZXJyb3JzOiBVSSBlcnJvcnNcbiAqIDNYWCBlcnJvcnM6IEVuZHBvaW50IGVycm9yc1xuICogNFhYIGVycm9yczogQ29yZSBlcnJvcnNcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNCYXNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChlcnJvckNvZGUsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMuZXJyb3JDb2RlID0gZXJyb3JDb2RlO1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLmJvdW5kYXJ5ID0gYm91bmRhcnk7XG4gICAgdGhpcy5yZXBvcnRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKGNhdXNlZEJ5KSB7XG4gICAgICB0aGlzLmNhdXNlZEJ5ID0gY2F1c2VkQnkgaW5zdGFuY2VvZiBBbnN3ZXJzQmFzZUVycm9yXG4gICAgICAgID8gY2F1c2VkQnlcbiAgICAgICAgOiBBbnN3ZXJzQmFzZUVycm9yLmZyb20oY2F1c2VkQnkpO1xuICAgIH1cbiAgfVxuXG4gIHRvSnNvbiAoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMpO1xuICB9XG5cbiAgdG9TdHJpbmcgKCkge1xuICAgIGxldCBzdHJpbmcgPSBgJHt0aGlzLmVycm9yTWVzc2FnZX0gKCR7dGhpcy5ib3VuZGFyeX0pYDtcbiAgICBpZiAodGhpcy5jYXVzZWRCeSkge1xuICAgICAgc3RyaW5nICs9IGBcXG4gIENhdXNlZCBCeTogJHt0aGlzLmNhdXNlZEJ5LnRvU3RyaW5nKCl9YDtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChidWlsdGluRXJyb3IsIGJvdW5kYXJ5KSB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoYnVpbHRpbkVycm9yLm1lc3NhZ2UsIGJvdW5kYXJ5KTtcbiAgICBlcnJvci5zdGFjayA9IGJ1aWx0aW5FcnJvci5zdGFjaztcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzQmFzaWNFcnJvciBpcyBhIHdyYXBwZXIgYXJvdW5kIGFsbCB0aGUgYnVpbHQtaW4gZXJyb3JzXG4gKiBlLmcuIHVuZGVmaW5lZCB2YXJpYWJsZXMsIGluY29ycmVjdCBzeW50YXgsIHR5cGVzLCBtaXNzaW5nIG1ldGhvZHMsIGV0Yy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNCYXNpY0Vycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigxMDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzVWlFcnJvciB1c2VkIGZvciB0aGluZ3MgbGlrZSBET00gZXJyb3JzLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc1VpRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDIwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNDb21wb25lbnRFcnJvciBpcyB1c2VkIGZvciBDb21wb25lbnQgb3JpZW50ZWQgZXJyb3JzXG4gKiBlLmcuIGZhaWx1cmUgdG8gcmVuZGVyLCBvciBjYXRjaGluZyB1bmtub3ducy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNDb21wb25lbnRFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgY29tcG9uZW50LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDIwMSwgbWVzc2FnZSwgY29tcG9uZW50LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzRW5kcG9pbnRFcnJvciByZXByZXNlbnRzIGFsbCBuZXR3b3JrIHJlbGF0ZWQgZXJyb3JzLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0VuZHBvaW50RXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDMwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNDb3JlRXJyb3IgcmVwcmVzZW50cyBlcnJvcnMgZm9yIHByZWNvbmRpdGlvbiBmYWlsdXJlcyBpbiB0aGUgY29yZSBsaWJyYXJ5XG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQ29yZUVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcig0MDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzU3RvcmFnZUVycm9yIHJlcHJlc2VudHMgc3RvcmFnZSByZWxhdGVkIGVycm9yc1xuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc1N0b3JhZ2VFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgc3RvcmFnZUtleSwgZGF0YSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcig0MDEsIG1lc3NhZ2UsICdTdG9yYWdlJywgY2F1c2VkQnkpO1xuICAgIHRoaXMuc3RvcmFnZUtleSA9IHN0b3JhZ2VLZXk7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNBbmFseXRpY3NFcnJvciBpcyB1c2VkIGZvciBlcnJvcnMgd2hlbiByZXBvcnRpbmcgYW5hbHl0aWNzXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGV2ZW50LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDQwMiwgbWVzc2FnZSwgJ0FuYWx5dGljcycsIGNhdXNlZEJ5KTtcbiAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaEFwaSAqL1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IHsgQW5zd2Vyc0Jhc2ljRXJyb3IsIEFuc3dlcnNDb3JlRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBTZWFyY2hBcGkgaXMgdGhlIEFQSSBmb3IgZG9pbmcgdmFyaW91cyB0eXBlcyBvZiBzZWFyY2hcbiAqIG92ZXIgdGhlIG5ldHdvcmsgKGUuZy4gdmVydGljYWwgb3IgdW5pdmVyc2FsKVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hBcGkge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgQVBJIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghY29uZmlnLmFwaUtleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBcGkgS2V5IGlzIHJlcXVpcmVkJywgJ1NlYXJjaCcpO1xuICAgIH1cbiAgICB0aGlzLl9hcGlLZXkgPSBjb25maWcuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIEFuc3dlcnMgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFjb25maWcuZXhwZXJpZW5jZUtleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBbnN3ZXJzIEtleSBpcyByZXF1aXJlZCcsICdTZWFyY2gnKTtcbiAgICB9XG4gICAgdGhpcy5fZXhwZXJpZW5jZUtleSA9IGNvbmZpZy5leHBlcmllbmNlS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFuc3dlcnMgY29uZmlnIHZlcnNpb24gdG8gdXNlIGZvciBhbGwgcmVxdWVzdHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24gPSBjb25maWcuZXhwZXJpZW5jZVZlcnNpb247XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgQVBJIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnNpb24gPSBjb25maWcudmVyc2lvbiB8fCAyMDE5MDEwMSB8fCAyMDE5MDMwMTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBsb2NhbGUgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIWNvbmZpZy5sb2NhbGUpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignTG9jYWxlIGlzIHJlcXVpcmVkJywgJ1NlYXJjaCcpO1xuICAgIH1cbiAgICB0aGlzLl9sb2NhbGUgPSBjb25maWcubG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBpbiB0aGUgY29udGV4dCBvZiBhIHZlcnRpY2FsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbEtleSB2ZXJ0aWNhbCBJRCBmb3IgdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge29iamVjdH0gcXVlcnkgVGhlIHF1ZXJ5IGRldGFpbHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmlucHV0IFRoZSBpbnB1dCB0byBzZWFyY2ggZm9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5maWx0ZXIgVGhlIGZpbHRlciB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuZmFjZXRGaWx0ZXIgVGhlIGZhY2V0IGZpbHRlciB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlcnkubGltaXQgVGhlIG1heCBudW1iZXIgb2YgcmVzdWx0cyB0byBpbmNsdWRlLCBtYXggb2YgNTBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1ZXJ5Lm9mZnNldCBUaGUgcmVzdWx0cyBvZmZzZXQsIGZvciBmZXRjaGluZyBtb3JlIHJlc3VsdHMgb2YgdGhlIHNhbWUgcXVlcnlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmlkIFRoZSBxdWVyeSBJRCB0byB1c2UuIElmIHBhZ2luZyB3aXRoaW4gYSBxdWVyeSwgdGhlIHNhbWUgSUQgc2hvdWxkIGJlIHVzZWRcbiAgICogQHBhcmFtIHtPYmplY3R9IHF1ZXJ5Lmdlb2xvY2F0aW9uIFRoZSB1c2VyJ3MgZ2VvbG9jYXRpb24gcG9zaXRpb24gdXNlZCB0byBiaWFzIHRoZSByZXN1bHRzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcXVlcnkuaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQgSWYgdHJ1ZSwgYXNrcyB0aGUgc2VydmVyIHRvIHJldHVybiBkeW5hbWljIGZpbHRlcnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LnNraXBTcGVsbENoZWNrIFRoZSBib29sZWFuIGFzIHN0cmluZyB0byBpbmRpY2F0ZSBpZiBpdCBzaG91bGQgc2tpcCBzcGVsbCBjaGVja2luZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkucXVlcnlUcmlnZ2VyIFRoZSBzb3VyY2UgdGhhdCB0cmlnZ2VycyBxdWVyeSBzdWNoIGFzIHN1Z2dlc3RcbiAgICovXG4gIHZlcnRpY2FsU2VhcmNoICh2ZXJ0aWNhbEtleSwgeyBpbnB1dCwgZmlsdGVyLCBmYWNldEZpbHRlciwgbGltaXQsIG9mZnNldCwgaWQsIGdlb2xvY2F0aW9uLCBpc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCwgc2tpcFNwZWxsQ2hlY2ssIHF1ZXJ5VHJpZ2dlciB9KSB7XG4gICAgaWYgKGxpbWl0ID4gNTApIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29yZUVycm9yKCdQcm92aWRlZCBzZWFyY2ggbGltaXQgdW5zdXBwb3J0ZWQnLCAnU2VhcmNoQXBpJyk7XG4gICAgfVxuXG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL3ZlcnRpY2FsL3F1ZXJ5JyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBpbnB1dCxcbiAgICAgICAgJ2V4cGVyaWVuY2VLZXknOiB0aGlzLl9leHBlcmllbmNlS2V5LFxuICAgICAgICAndmVyc2lvbic6IHRoaXMuX2V4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgICAnZmlsdGVycyc6IGZpbHRlcixcbiAgICAgICAgJ2ZhY2V0RmlsdGVycyc6IGZhY2V0RmlsdGVyLFxuICAgICAgICAndmVydGljYWxLZXknOiB2ZXJ0aWNhbEtleSxcbiAgICAgICAgJ2xpbWl0JzogbGltaXQsXG4gICAgICAgICdvZmZzZXQnOiBvZmZzZXQsXG4gICAgICAgICdsb2NhdGlvbic6IGdlb2xvY2F0aW9uID8gYCR7Z2VvbG9jYXRpb24ubGF0fSwke2dlb2xvY2F0aW9uLmxuZ31gIDogbnVsbCxcbiAgICAgICAgJ3JhZGl1cyc6IGdlb2xvY2F0aW9uID8gZ2VvbG9jYXRpb24ucmFkaXVzIDogbnVsbCxcbiAgICAgICAgJ3F1ZXJ5SWQnOiBpZCxcbiAgICAgICAgJ3JldHJpZXZlRmFjZXRzJzogaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQsXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGUsXG4gICAgICAgICdza2lwU3BlbGxDaGVjayc6IHNraXBTcGVsbENoZWNrLFxuICAgICAgICAncXVlcnlUcmlnZ2VyJzogcXVlcnlUcmlnZ2VyXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggYWNyb3NzIGFsbCB2ZXJ0aWNhbHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5U3RyaW5nIFRoZSBpbnB1dCB0byBzZWFyY2ggZm9yXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMuZ2VvbG9jYXRpb24gdGhlIHVzZXIncyBnZW9sb2NhdGlvbiBwb3NpdGlvbiB1c2VkIHRvIGJpYXMgdGhlIHJlc3VsdHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5za2lwU3BlbGxDaGVjayBUaGUgYm9vbGVhbiBhcyBzdHJpbmcgdG8gaW5kaWNhdGUgaWYgaXQgc2hvdWxkIHNraXAgc3BlbGwgY2hlY2tpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5xdWVyeVRyaWdnZXIgVGhlIHNvdXJjZSB0aGF0IHRyaWdnZXJzIHF1ZXJ5IHN1Y2ggYXMgc3VnZ2VzdFxuICAgKi9cbiAgdW5pdmVyc2FsU2VhcmNoIChxdWVyeVN0cmluZywgcGFyYW1zKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL3F1ZXJ5JyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBxdWVyeVN0cmluZyxcbiAgICAgICAgJ2V4cGVyaWVuY2VLZXknOiB0aGlzLl9leHBlcmllbmNlS2V5LFxuICAgICAgICAnbG9jYXRpb24nOiBwYXJhbXMuZ2VvbG9jYXRpb24gPyBgJHtwYXJhbXMuZ2VvbG9jYXRpb24ubGF0fSwke3BhcmFtcy5nZW9sb2NhdGlvbi5sbmd9YCA6IG51bGwsXG4gICAgICAgICdyYWRpdXMnOiBwYXJhbXMuZ2VvbG9jYXRpb24gPyBwYXJhbXMuZ2VvbG9jYXRpb24ucmFkaXVzIDogbnVsbCxcbiAgICAgICAgJ3ZlcnNpb24nOiB0aGlzLl9leHBlcmllbmNlVmVyc2lvbixcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZSxcbiAgICAgICAgJ3NraXBTcGVsbENoZWNrJzogcGFyYW1zLnNraXBTcGVsbENoZWNrLFxuICAgICAgICAncXVlcnlUcmlnZ2VyJzogcGFyYW1zLnF1ZXJ5VHJpZ2dlclxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEhpZ2hsaWdodGVkVmFsdWUgKi9cblxuLyoqXG4gKiBNb2RlbCByZXByZXNlbnRpbmcgYSBoaWdobGlnaHRlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGlnaGxpZ2h0ZWRWYWx1ZSB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICB0aGlzLnZhbHVlID0gZGF0YS52YWx1ZSB8fCBkYXRhLnNob3J0VmFsdWUgfHwgJyc7XG4gICAgdGhpcy5tYXRjaGVkU3Vic3RyaW5ncyA9IGRhdGEubWF0Y2hlZFN1YnN0cmluZ3MgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogZ2V0IGhpZ2hsaWdodGVkIHZhbHVlIHN0cmluZ1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0ICgpIHtcbiAgICB0aGlzLl9zb3J0TWF0Y2hlZFN1YnN0cmluZ3MoKTtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRIaWdobGlnaHRlZFZhbHVlKHRoaXMudmFsdWUsIHRoaXMubWF0Y2hlZFN1YnN0cmluZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCBpbnZlcnRlZCBoaWdobGlnaHRlZCB2YWx1ZSBzdHJpbmdcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldEludmVydGVkICgpIHtcbiAgICB0aGlzLl9zb3J0TWF0Y2hlZFN1YnN0cmluZ3MoKTtcbiAgICBjb25zdCBpbnZlcnRlZFN1YnN0cmluZ3MgPSB0aGlzLl9nZXRJbnZlcnRlZFN1YnN0cmluZ3ModGhpcy5tYXRjaGVkU3Vic3RyaW5ncywgdGhpcy52YWx1ZS5sZW5ndGgpO1xuICAgIHJldHVybiB0aGlzLl9idWlsZEhpZ2hsaWdodGVkVmFsdWUodGhpcy52YWx1ZSwgaW52ZXJ0ZWRTdWJzdHJpbmdzKTtcbiAgfVxuXG4gIF9zb3J0TWF0Y2hlZFN1YnN0cmluZ3MgKCkge1xuICAgIHRoaXMubWF0Y2hlZFN1YnN0cmluZ3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGEub2Zmc2V0IDwgYi5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuXG4gICAgICBpZiAoYS5vZmZzZXQgPiBiLm9mZnNldCkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gIH1cblxuICBfZ2V0SW52ZXJ0ZWRTdWJzdHJpbmdzIChtYXRjaGVkU3Vic3RyaW5ncywgdmFsdWVMZW5ndGgpIHtcbiAgICBjb25zdCBpbnZlcnRlZFN1YnN0cmluZ3MgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdGNoZWRTdWJzdHJpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzdWJzdHJpbmcgPSBtYXRjaGVkU3Vic3RyaW5nc1tpXTtcbiAgICAgIGNvbnN0IG5leHRPZmZzZXQgPSBzdWJzdHJpbmcub2Zmc2V0ICsgc3Vic3RyaW5nLmxlbmd0aDtcbiAgICAgIGlmIChpID09PSAwICYmIHN1YnN0cmluZy5vZmZzZXQgIT09IDApIHtcbiAgICAgICAgaW52ZXJ0ZWRTdWJzdHJpbmdzLnB1c2goeyBvZmZzZXQ6IDAsIGxlbmd0aDogc3Vic3RyaW5nLm9mZnNldCB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlTGVuZ3RoID4gbmV4dE9mZnNldCkge1xuICAgICAgICBpbnZlcnRlZFN1YnN0cmluZ3MucHVzaCh7XG4gICAgICAgICAgb2Zmc2V0OiBuZXh0T2Zmc2V0LFxuICAgICAgICAgIGxlbmd0aDogaSA8IG1hdGNoZWRTdWJzdHJpbmdzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgID8gbWF0Y2hlZFN1YnN0cmluZ3NbaSArIDFdLm9mZnNldCAtIG5leHRPZmZzZXRcbiAgICAgICAgICAgIDogdmFsdWVMZW5ndGggLSBuZXh0T2Zmc2V0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW52ZXJ0ZWRTdWJzdHJpbmdzO1xuICB9XG5cbiAgX2J1aWxkSGlnaGxpZ2h0ZWRWYWx1ZSAodmFsLCBoaWdobGlnaHRlZFN1YnN0cmluZ3MpIHtcbiAgICBsZXQgaGlnaGxpZ2h0ZWRWYWx1ZSA9ICcnO1xuICAgIGxldCBuZXh0U3RhcnQgPSAwO1xuXG4gICAgaWYgKGhpZ2hsaWdodGVkU3Vic3RyaW5ncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBoaWdobGlnaHRlZFN1YnN0cmluZ3MubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBzdGFydCA9IE51bWJlcihoaWdobGlnaHRlZFN1YnN0cmluZ3Nbal0ub2Zmc2V0KTtcbiAgICAgIGxldCBlbmQgPSBzdGFydCArIGhpZ2hsaWdodGVkU3Vic3RyaW5nc1tqXS5sZW5ndGg7XG5cbiAgICAgIGhpZ2hsaWdodGVkVmFsdWUgKz0gW3ZhbC5zbGljZShuZXh0U3RhcnQsIHN0YXJ0KSwgJzxzdHJvbmc+JywgdmFsLnNsaWNlKHN0YXJ0LCBlbmQpLCAnPC9zdHJvbmc+J10uam9pbignJyk7XG5cbiAgICAgIGlmIChqID09PSBoaWdobGlnaHRlZFN1YnN0cmluZ3MubGVuZ3RoIC0gMSAmJiBlbmQgPCB2YWwubGVuZ3RoKSB7XG4gICAgICAgIGhpZ2hsaWdodGVkVmFsdWUgKz0gdmFsLnNsaWNlKGVuZCk7XG4gICAgICB9XG5cbiAgICAgIG5leHRTdGFydCA9IGVuZDtcbiAgICB9XG5cbiAgICByZXR1cm4gaGlnaGxpZ2h0ZWRWYWx1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlRGF0YSAqL1xuXG5pbXBvcnQgSGlnaGxpZ2h0ZWRWYWx1ZSBmcm9tICcuL2hpZ2hsaWdodGVkdmFsdWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVEYXRhIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIHRoaXMuc2VjdGlvbnMgPSBkYXRhLnNlY3Rpb25zIHx8IFtdO1xuICAgIHRoaXMucXVlcnlJZCA9IGRhdGEucXVlcnlJZCB8fCAnJztcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlKSB7XG4gICAgbGV0IHNlY3Rpb25zO1xuICAgIGlmIChyZXNwb25zZS5zZWN0aW9ucykge1xuICAgICAgc2VjdGlvbnMgPSByZXNwb25zZS5zZWN0aW9ucy5tYXAocyA9PiAoe1xuICAgICAgICBsYWJlbDogcy5sYWJlbCxcbiAgICAgICAgcmVzdWx0czogcy5yZXN1bHRzLm1hcChyID0+IG5ldyBBdXRvQ29tcGxldGVSZXN1bHQocikpXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlY3Rpb25zID0gW3sgcmVzdWx0czogcmVzcG9uc2UucmVzdWx0cy5tYXAociA9PiBuZXcgQXV0b0NvbXBsZXRlUmVzdWx0KHIpKSB9XTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBBdXRvQ29tcGxldGVEYXRhKHsgc2VjdGlvbnMsIHF1ZXJ5SWQ6IHJlc3BvbnNlLnF1ZXJ5SWQgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9Db21wbGV0ZVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICB0aGlzLmZpbHRlciA9IGRhdGEuZmlsdGVyIHx8IHt9O1xuICAgIHRoaXMuaGlnaGxpZ2h0ZWRWYWx1ZSA9IG5ldyBIaWdobGlnaHRlZFZhbHVlKGRhdGEpLmdldEludmVydGVkKCk7XG4gICAgdGhpcy5rZXkgPSBkYXRhLmtleSB8fCAnJztcbiAgICB0aGlzLm1hdGNoZWRTdWJzdHJpbmdzID0gZGF0YS5tYXRjaGVkU3Vic3RyaW5ncyB8fCBbXTtcbiAgICB0aGlzLnZhbHVlID0gZGF0YS52YWx1ZSB8fCAnJztcbiAgICB0aGlzLnNob3J0VmFsdWUgPSBkYXRhLnNob3J0VmFsdWUgfHwgdGhpcy52YWx1ZTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIgKi9cblxuaW1wb3J0IEF1dG9Db21wbGV0ZURhdGEgZnJvbSAnLi4vbW9kZWxzL2F1dG9jb21wbGV0ZWRhdGEnO1xuXG4vKipcbiAqIEEgRGF0YSBUcmFuc2Zvcm1lciB0aGF0IHRha2VzIHRoZSByZXNwb25zZSBvYmplY3QgZnJvbSBhIEF1dG9Db21wbGV0ZSByZXF1ZXN0XG4gKiBBbmQgdHJhbnNmb3JtcyBpbiB0byBhIGZyb250LWVuZCBvcmllbnRlZCBkYXRhIHN0cnVjdHVyZSB0aGF0IG91clxuICogY29tcG9uZW50IGxpYnJhcnkgYW5kIGNvcmUgc3RvcmFnZSB1bmRlcnN0YW5kLlxuICpcbiAqIFRPRE8oYmlsbHkpIENyZWF0ZSBvdXIgb3duIGZyb250LWVuZCBkYXRhIG1vZGVsc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIge1xuICBzdGF0aWMgY2xlYW4gKG1vZHVsZUlkLCBkYXRhKSB7XG4gICAgaWYgKGRhdGEuc2VjdGlvbnMgJiYgZGF0YS5zZWN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBkYXRhLnNlY3Rpb25zO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnNlY3Rpb25zICYmIGRhdGEuc2VjdGlvbnMubGVuZ3RoID09PSAxICYmIGRhdGEuc2VjdGlvbnNbMF0ucmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBkYXRhLnNlY3Rpb25zO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBbbW9kdWxlSWRdOiBkYXRhXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB1bml2ZXJzYWwgKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIEF1dG9Db21wbGV0ZURhdGEuZnJvbShyZXNwb25zZSk7XG4gIH1cblxuICBzdGF0aWMgZmlsdGVyIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG5cbiAgc3RhdGljIHZlcnRpY2FsIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVBcGkgKi9cblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIgZnJvbSAnLi9hdXRvY29tcGxldGVkYXRhdHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgQW5zd2Vyc0Jhc2ljRXJyb3IsIEFuc3dlcnNFbmRwb2ludEVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogQXV0b0NvbXBsZXRlQXBpIGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBuZXR3b3JrIHJlbGF0ZWQgbWF0dGVyc1xuICogZm9yIGFsbCB0aGUgYXV0b2NvbXBsZXRlIGVuZHBvaW50cy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlQXBpIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIWNvbmZpZy5hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQXBpIEtleSBpcyByZXF1aXJlZCcsICdBdXRvQ29tcGxldGUnKTtcbiAgICB9XG4gICAgdGhpcy5fYXBpS2V5ID0gY29uZmlnLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBBbnN3ZXJzIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghY29uZmlnLmV4cGVyaWVuY2VLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQW5zd2VycyBLZXkgaXMgcmVxdWlyZWQnLCAnQXV0b0NvbXBsZXRlJyk7XG4gICAgfVxuICAgIHRoaXMuX2V4cGVyaWVuY2VLZXkgPSBjb25maWcuZXhwZXJpZW5jZUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBBUEkgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVyc2lvbiA9IGNvbmZpZy52ZXJzaW9uIHx8IDIwMTkwMTAxIHx8IDIwMTkwMzAxO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFuc3dlcnMgY29uZmlnIHZlcnNpb24gdG8gdXNlIGZvciBhbGwgcmVxdWVzdHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24gPSBjb25maWcuZXhwZXJpZW5jZVZlcnNpb247XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbG9jYWxlIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFjb25maWcubG9jYWxlKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0xvY2FsZSBpcyByZXF1aXJlZCcsICdBdXRvQ29tcGxldGUnKTtcbiAgICB9XG4gICAgdGhpcy5fbG9jYWxlID0gY29uZmlnLmxvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdXRvY29tcGxldGUgZmlsdGVyc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgVGhlIGlucHV0IHRvIHVzZSBmb3IgYXV0byBjb21wbGV0ZVxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdG8gdXNlIGZvciBmaWx0ZXJzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcudmVydGljYWxLZXkgVGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIGNvbmZpZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLmJhcktleSBUaGUgYmFyIGtleSBmb3IgdGhlIGNvbmZpZyB2MVxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnLnNlYXJjaFBhcmFtZXRlcnMgVGhlIHNlYXJjaCBwYXJhbWV0ZXJzIGZvciB0aGUgY29uZmlnIHYyXG4gICAqL1xuICBxdWVyeUZpbHRlciAoaW5wdXQsIGNvbmZpZykge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9maWx0ZXJzZWFyY2gnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IGlucHV0LFxuICAgICAgICAnZXhwZXJpZW5jZUtleSc6IHRoaXMuX2V4cGVyaWVuY2VLZXksXG4gICAgICAgICd2ZXJzaW9uJzogdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24sXG4gICAgICAgICd2ZXJ0aWNhbEtleSc6IGNvbmZpZy52ZXJ0aWNhbEtleSxcbiAgICAgICAgJ2lucHV0S2V5JzogY29uZmlnLmJhcktleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZSxcbiAgICAgICAgJ3NlYXJjaF9wYXJhbWV0ZXJzJzogSlNPTi5zdHJpbmdpZnkoY29uZmlnLnNlYXJjaFBhcmFtZXRlcnMpXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLmZpbHRlcihyZXNwb25zZS5yZXNwb25zZSwgY29uZmlnLmJhcktleSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoJ0ZpbHRlciBzZWFyY2ggcmVxdWVzdCBmYWlsZWQnLCAnQXV0b0NvbXBsZXRlJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICBxdWVyeVZlcnRpY2FsIChpbnB1dCwgdmVydGljYWxLZXksIGJhcktleSkge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy92ZXJ0aWNhbC9hdXRvY29tcGxldGUnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IGlucHV0LFxuICAgICAgICAnZXhwZXJpZW5jZUtleSc6IHRoaXMuX2V4cGVyaWVuY2VLZXksXG4gICAgICAgICd2ZXJzaW9uJzogdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24sXG4gICAgICAgICd2ZXJ0aWNhbEtleSc6IHZlcnRpY2FsS2V5LFxuICAgICAgICAnYmFyS2V5JzogYmFyS2V5LFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLnZlcnRpY2FsKHJlc3BvbnNlLnJlc3BvbnNlLCByZXF1ZXN0Ll9wYXJhbXMuYmFyS2V5KSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzRW5kcG9pbnRFcnJvcignVmVydGljYWwgc2VhcmNoIHJlcXVlc3QgZmFpbGVkJywgJ0F1dG9Db21wbGV0ZScsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcXVlcnlVbml2ZXJzYWwgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL2F1dG9jb21wbGV0ZScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogcXVlcnlTdHJpbmcsXG4gICAgICAgICdleHBlcmllbmNlS2V5JzogdGhpcy5fZXhwZXJpZW5jZUtleSxcbiAgICAgICAgJ3ZlcnNpb24nOiB0aGlzLl9leHBlcmllbmNlVmVyc2lvbixcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHF1ZXJ5U3RyaW5nKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLnVuaXZlcnNhbChyZXNwb25zZS5yZXNwb25zZSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoJ1VuaXZlcnNhbCBzZWFyY2ggcmVxdWVzdCBmYWlsZWQnLCAnQXV0b0NvbXBsZXRlJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFF1ZXN0aW9uQW5zd2VyQXBpICovXG5cbmltcG9ydCBBcGlSZXF1ZXN0IGZyb20gJy4uL2h0dHAvYXBpcmVxdWVzdCc7XG5pbXBvcnQgeyBBbnN3ZXJzQmFzaWNFcnJvciwgQW5zd2Vyc0VuZHBvaW50RXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBRdWVzdGlvbkFuc3dlckFwaSBleHBvc2VzIGFuIGludGVyZmFjZSB0byBkbyBuZXR3b3JreSB0aGluZ3MgYWdhaW5zdFxuICogdGhlIFEmQSBSRVNUIEFQSVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdGlvbkFuc3dlckFwaSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFjb25maWcuYXBpS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0FwaSBLZXkgaXMgcmVxdWlyZWQnLCAnUXVlc3Rpb25BbnN3ZXJBcGknKTtcbiAgICB9XG4gICAgdGhpcy5fYXBpS2V5ID0gY29uZmlnLmFwaUtleTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzdWJtaXRRdWVzdGlvbiB3aWxsIGNyZWF0ZSBhIG5ldHdvcmsgcmVxdWVzdCB0b1xuICAgKiBjcmVhdGUgYSBxdWVzdGlvbiBmb3IgUSZBLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcXVlc3Rpb24gVGhlIHF1ZXN0aW9uIG9iamVjdCB0byBzdWJtaXQgdG8gdGhlIHNlcnZlclxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlc3Rpb24uZW50aXR5SWQgVGhlIGVudGl0eSB0byBhc3NvY2lhdGUgd2l0aCB0aGUgcXVlc3Rpb24gKHJlcXVpcmVkKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ubGFudWFnZSBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIHF1ZXN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5zaXRlIFRoZSBcInB1Ymxpc2hlclwiIG9mIHRoZSAoZS5nLiAnRklSU1RfUEFSVFknKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ubmFtZSBUaGUgbmFtZSBvZiB0aGUgYXV0aG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5lbWFpbCBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgYXV0aG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5xdWVzdGlvblRleHQgVGhlIHF1ZXN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5xdWVzdGlvbkRlc2NyaXB0aW9uIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHF1ZXN0aW9uXG4gICAqL1xuICBzdWJtaXRRdWVzdGlvbiAocXVlc3Rpb24pIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL3F1ZXN0aW9ucycsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnZW50aXR5SWQnOiBxdWVzdGlvbi5lbnRpdHlJZCxcbiAgICAgICAgJ3NpdGUnOiBxdWVzdGlvbi5zaXRlLFxuICAgICAgICAnbmFtZSc6IHF1ZXN0aW9uLm5hbWUsXG4gICAgICAgICdlbWFpbCc6IHF1ZXN0aW9uLmVtYWlsLFxuICAgICAgICAncXVlc3Rpb25UZXh0JzogcXVlc3Rpb24ucXVlc3Rpb25UZXh0LFxuICAgICAgICAncXVlc3Rpb25EZXNjcmlwdGlvbic6IHF1ZXN0aW9uLnF1ZXN0aW9uRGVzY3JpcHRpb24sXG4gICAgICAgICdxdWVzdGlvbkxhbmd1YWdlJzogcXVlc3Rpb24ucXVlc3Rpb25MYW5ndWFnZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QucG9zdCgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoXG4gICAgICAgICAgJ1F1ZXN0aW9uIHN1Ym1pdCBmYWlsZWQnLFxuICAgICAgICAgICdRdWVzdGlvbkFuc3dlckFwaScsXG4gICAgICAgICAgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaFN0YXRlcyAqL1xuXG4vKipcbiAqIFNlYXJjaFN0YXRlcyBpcyBhbiBFTlVNIGZvciB0aGUgdmFyaW91cyBzdGFnZXMgb2Ygc2VhcmNoaW5nLFxuICogdXNlZCB0byBzaG93IGRpZmZlcmVudCB0ZW1wbGF0ZXNcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUFJFX1NFQVJDSDogJ3ByZS1zZWFyY2gnLFxuICBTRUFSQ0hfTE9BRElORzogJ3NlYXJjaC1sb2FkaW5nJyxcbiAgU0VBUkNIX0NPTVBMRVRFOiAnc2VhcmNoLWNvbXBsZXRlJ1xufTtcbiIsIi8qKiBAbW9kdWxlIFJlc3VsdCAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHQge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJhdyBwcm9maWxlIGRhdGFcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcmF3ID0gZGF0YS5yYXcgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmb3JtYXR0ZWQgcHJvZmlsZSBkYXRhXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Zvcm1hdHRlZCA9IGRhdGEuZm9ybWF0dGVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluZGV4IG51bWJlciBvZiB0aGUgcmVzdWx0XG4gICAgICogQHR5cGUge051bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLm9yZGluYWwgPSBkYXRhLm9yZGluYWwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSBvZiB0aGUgcmVzdWx0IGNhcmRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBib2R5IG9mIHRoZSBkZXRhaWxzIHNlY3Rpb24gb2YgdGhlIHJlc3VsdCBjYXJkLCBjYW4gY29udGFpbiBIVE1MXG4gICAgICogQHR5cGUge3N0cmluZ3wgbnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmRldGFpbHMgPSBkYXRhLmRldGFpbHMgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZXN0aW5hdGlvbiBsaW5rIGZvciB0aGUgdGl0bGUgb2YgdGhlIHJlc3VsdCBjYXJkXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMubGluayA9IGRhdGEubGluayB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIEVudGl0eSBJRCwgb3Igb3RoZXIgdW5pcXVlIGlkZW50aWZpZXIsIHVzZWQgZm9yIHRvIHBvd2VyIGludGVyYWN0aXZpdHlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5pZCA9IGRhdGEuaWQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdWJ0aXRsZSBvbiB0aGUgcmVzdWx0IGNhcmRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5zdWJ0aXRsZSA9IGRhdGEuc3VidGl0bGUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjbGFzcyBtb2RpZmllciwgdXN1YWxseSBkZXJpdmVkIGZyb20gdGhlIHZlcnRpY2FsIGNvbmZpZ3VyYXRpb24gSURcbiAgICAgKiBVc2VkIHRvIGFwcGx5IGRpZmZlcmVudCBzdHlsaW5nIHRvIGRpZmZlcmVudCByZXN1bHQgY2FyZCB0eXBlc1xuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLm1vZGlmaWVyID0gZGF0YS5tb2RpZmllciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsYXJnZSBkYXRlLCBvZiB0aGUgZm9ybWF0IHsgbW9udGg6ICdKYW4nLCBkYXk6ICcwMScgfVxuICAgICAqIEB0eXBlIHtPYmplY3R8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmJpZ0RhdGUgPSBkYXRhLmJpZ0RhdGUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFuIGltYWdlIHByb2ZpbGUgb2JqZWN0LCBleHBlY3RlZCB0byBoYXZlIGEgdXJsIHByb3BlcnR5XG4gICAgICogQHR5cGUge09iamVjdHxudWxsfVxuICAgICAqL1xuICAgIHRoaXMuaW1hZ2UgPSBkYXRhLmltYWdlIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBjYWxscyB0byBhY3Rpb24sIG9mIHRoZSBmb3JtYXQ6XG4gICAgICogeyBpY29uOiAnJywgdXJsOiAnJywgdGV4dDogJycsIGV2ZW50VHlwZTogJycsIGV2ZW50T3B0aW9uczoge319XG4gICAgICogQHR5cGUge0FycmF5fVxuICAgICAqL1xuICAgIHRoaXMuY2FsbHNUb0FjdGlvbiA9IGRhdGEuY2FsbHNUb0FjdGlvbiB8fCBbXTtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYW4gYWNjb3JkaWFuIHJlc3VsdCBzaG91bGQgYmUgY29sbGFwc2VkIGJ5IGRlZmF1bHRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbGxhcHNlZCA9IGRhdGEuY29sbGFwc2VkIHx8IHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlc3VsdEZhY3RvcnkgKi9cblxuaW1wb3J0IFJlc3VsdCBmcm9tICcuL3Jlc3VsdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdEZhY3Rvcnkge1xuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIFJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBJbmNsdWRlcyBkZWZhdWx0IG1hcHBpbmdzIG9mIEdvb2dsZUN1c3RvbVNlYXJjaEVuZ2luZSByZXN1bHRzIHRvXG4gICAqIHRoZSBmaWVsZHMgZXhwb3NlZCBieSB0aGUgdGVtcGxhdGUuXG4gICAqIEBwYXJhbSByZXN1bHRzRGF0YSAge0FycmF5fSBleHBlY3RlZCBmb3JtYXQ6IHsgZGF0YTogeyAuLi4gfSwgaGlnaGxpZ2h0ZWRGaWVsZHM6IHsgLi4uIH19XG4gICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn0gZm9ybWF0dGVycyBUaGUgZm9ybWF0dGVycyB0byBhcHBseSB0byB0aGUgcmVzdWx0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbElkIFRoZSB2ZXJ0aWNhbCBvZiB0aGVzZSByZXN1bHRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgQmFja2VuZCBzb3VyY2Ugb2YgdGhlc2UgcmVzdWx0c1xuICAgKiBAcmV0dXJucyB7UmVzdWx0W119XG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzdWx0c0RhdGEsIGZvcm1hdHRlcnMsIHZlcnRpY2FsSWQsIHNvdXJjZSkge1xuICAgIGxldCByZXN1bHRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gVE9ETyB1c2UgcmVzdWx0RGF0YS5oaWdobGlnaHRlZEZpZWxkcyB0b1xuICAgICAgLy8gdHJhbnNmb3JtIHJlc3VsdERhdGEuZGF0YSBpbnRvIGh0bWwtZnJpZW5kbHkgc3RyaW5ncyB0aGF0IGhpZ2hsaWdodCB2YWx1ZXMuXG4gICAgICAvLyBDaGVjayBmb3IgbmV3IGRhdGEgZm9ybWF0LCBvdGhlcndpc2UgZmFsbGJhY2sgdG8gbGVnYWN5XG5cbiAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHRzRGF0YVtpXS5kYXRhIHx8IHJlc3VsdHNEYXRhW2ldO1xuICAgICAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IHt9O1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGZvcm1hdHRlcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoW2tleSwgdmFsXSkgPT4ge1xuICAgICAgICAgIGlmIChmb3JtYXR0ZXJzW2tleV0pIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZERhdGFba2V5XSA9IGZvcm1hdHRlcnNba2V5XSh2YWwsIGRhdGEsIHZlcnRpY2FsSWQsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHNvdXJjZSkge1xuICAgICAgICBjYXNlICdHT09HTEVfQ1NFJzpcbiAgICAgICAgICByZXN1bHRzLnB1c2goUmVzdWx0RmFjdG9yeS5mcm9tR29vZ2xlQ3VzdG9tU2VhcmNoRW5naW5lKGRhdGEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQklOR19DU0UnOlxuICAgICAgICAgIHJlc3VsdHMucHVzaChSZXN1bHRGYWN0b3J5LmZyb21CaW5nQ3VzdG9tU2VhcmNoRW5naW5lKGRhdGEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnWkVOREVTSyc6XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKFJlc3VsdEZhY3RvcnkuZnJvbVplbmRlc2tTZWFyY2hFbmdpbmUoZGF0YSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBTEdPTElBJzpcbiAgICAgICAgICByZXN1bHRzLnB1c2goUmVzdWx0RmFjdG9yeS5mcm9tQWxnb2xpYVNlYXJjaEVuZ2luZShkYXRhKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKFJlc3VsdEZhY3RvcnkuZnJvbUdlbmVyaWMoZGF0YSwgZm9ybWF0dGVkRGF0YSwgaSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIEFQSSByZXN1bHQgb2JqZWN0IGludG8gYSBnZW5lcmljIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcGFyYW0gZm9ybWF0dGVkRGF0YVxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICogQHJldHVybnMge1Jlc3VsdH1cbiAgICovXG4gIHN0YXRpYyBmcm9tR2VuZXJpYyAoZGF0YSwgZm9ybWF0dGVkRGF0YSwgaW5kZXgpIHtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh7XG4gICAgICByYXc6IGRhdGEsXG4gICAgICBmb3JtYXR0ZWQ6IGZvcm1hdHRlZERhdGEsXG4gICAgICB0aXRsZTogZm9ybWF0dGVkRGF0YS5uYW1lIHx8IGRhdGEubmFtZSxcbiAgICAgIGRldGFpbHM6IGZvcm1hdHRlZERhdGEuZGVzY3JpcHRpb24gfHwgdGhpcy50cnVuY2F0ZShkYXRhLmRlc2NyaXB0aW9uKSxcbiAgICAgIGxpbms6IGRhdGEud2Vic2l0ZSxcbiAgICAgIGlkOiBkYXRhLmlkLFxuICAgICAgb3JkaW5hbDogaW5kZXggKyAxXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBNYXBzIHZpZXcgbW9kZWwgZmllbGRzIGJhc2VkIG9uIHRoZSBBUEkgZGF0YSBmb3IgYSBHb29nbGUgQ3VzdG9tIFNlYXJjaCBFbmdpbmUgb2JqZWN0LlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0fVxuICAgKi9cbiAgc3RhdGljIGZyb21Hb29nbGVDdXN0b21TZWFyY2hFbmdpbmUgKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh7XG4gICAgICByYXc6IGRhdGEsXG4gICAgICB0aXRsZTogZGF0YS5odG1sVGl0bGUucmVwbGFjZSgvKDwoW14+XSspPikvaWcsICcnKSxcbiAgICAgIGRldGFpbHM6IGRhdGEuaHRtbFNuaXBwZXQsXG4gICAgICBsaW5rOiBkYXRhLmxpbmtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBBUEkgcmVzdWx0IG9iamVjdCBpbnRvIGEgcmVzdWx0IHZpZXcgbW9kZWwuXG4gICAqIE1hcHMgdmlldyBtb2RlbCBmaWVsZHMgYmFzZWQgb24gdGhlIEFQSSBkYXRhIGZvciBhIEJpbmcgQ3VzdG9tIFNlYXJjaCBFbmdpbmUgb2JqZWN0LlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0fVxuICAgKi9cbiAgc3RhdGljIGZyb21CaW5nQ3VzdG9tU2VhcmNoRW5naW5lIChkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBSZXN1bHQoe1xuICAgICAgcmF3OiBkYXRhLFxuICAgICAgdGl0bGU6IGRhdGEubmFtZSxcbiAgICAgIGRldGFpbHM6IGRhdGEuc25pcHBldCxcbiAgICAgIGxpbms6IGRhdGEudXJsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBNYXBzIHZpZXcgbW9kZWwgZmllbGRzIGJhc2VkIG9uIHRoZSBBUEkgZGF0YSBmb3IgYSBaZW5kZXNrIFNlYXJjaCBFbmdpbmUgb2JqZWN0LlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0fVxuICAgKi9cbiAgc3RhdGljIGZyb21aZW5kZXNrU2VhcmNoRW5naW5lIChkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBSZXN1bHQoe1xuICAgICAgcmF3OiBkYXRhLFxuICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgICBkZXRhaWxzOiBkYXRhLnNuaXBwZXQsXG4gICAgICBsaW5rOiBkYXRhLmh0bWxfdXJsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBNYXBzIHZpZXcgbW9kZWwgZmllbGRzIGJhc2VkIG9uIHRoZSBBUEkgZGF0YSBmb3IgYSBBbGdvbGlhIFNlYXJjaCBFbmdpbmUgb2JqZWN0LlxuICAgKiBEZXRhaWxzIGZpZWxkIGlzIHNldCB0byBvYmplY3RJRCBzaW5jZSByZXNwb25zZSBoYXMgb25seSBvbmUgZ2VuZXJhbCBmaWVsZCBvYmplY3RJRC5cbiAgICogQHBhcmFtIGRhdGFcbiAgICogQHJldHVybnMge1Jlc3VsdH1cbiAgICovXG4gIHN0YXRpYyBmcm9tQWxnb2xpYVNlYXJjaEVuZ2luZSAoZGF0YSkge1xuICAgIHJldHVybiBuZXcgUmVzdWx0KHtcbiAgICAgIHJhdzogZGF0YSxcbiAgICAgIGRldGFpbHM6IGRhdGEub2JqZWN0SUQsXG4gICAgICBpZDogZGF0YS5vYmplY3RJRFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRydW5jYXRlcyBzdHJpbmdzIHRvIDI1MCBjaGFyYWN0ZXJzLCBhdHRlbXB0aW5nIHRvIHByZXNlcnZlIHdob2xlIHdvcmRzXG4gICAqIEBwYXJhbSBzdHIge3N0cmluZ30gdGhlIHN0cmluZyB0byB0cnVuY2F0ZVxuICAgKiBAcGFyYW0gbGltaXQge051bWJlcn0gdGhlIG1heGltdW0gY2hhcmFjdGVyIGxlbmd0aCB0byByZXR1cm5cbiAgICogQHBhcmFtIHRyYWlsaW5nIHtzdHJpbmd9IGEgdHJhaWxpbmcgc3RyaW5nIHRvIGRlbm90ZSB0cnVuY2F0aW9uLCBlLmcuICcuLi4nXG4gICAqIEBwYXJhbSBzZXAge3N0cmluZ30gdGhlIHdvcmQgc2VwYXJhdG9yXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgdHJ1bmNhdGUgKHN0ciwgbGltaXQgPSAyNTAsIHRyYWlsaW5nID0gJy4uLicsIHNlcCA9ICcgJykge1xuICAgIGlmICghc3RyIHx8IHN0ci5sZW5ndGggPD0gbGltaXQpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgLy8gVE9ETyAoYm1jZ2lubmlzKTogc3BsaXQgcHVuY3R1YXRpb24gdG9vIHNvIHdlIGRvbid0IGVuZCB1cCB3aXRoIFwiZm9vLC4uLlwiXG4gICAgY29uc3Qgd29yZHMgPSBzdHIuc3BsaXQoc2VwKTtcbiAgICBjb25zdCBtYXggPSBsaW1pdCAtIHRyYWlsaW5nLmxlbmd0aDtcbiAgICBsZXQgdHJ1bmNhdGVkID0gJyc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB3b3JkID0gd29yZHNbaV07XG4gICAgICBpZiAodHJ1bmNhdGVkLmxlbmd0aCArIHdvcmQubGVuZ3RoID4gbWF4IHx8XG4gICAgICAgIChpICE9PSAwICYmIHRydW5jYXRlZC5sZW5ndGggKyB3b3JkLmxlbmd0aCArIHNlcC5sZW5ndGggPiBtYXgpKSB7XG4gICAgICAgIHRydW5jYXRlZCArPSB0cmFpbGluZztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHRydW5jYXRlZCArPSBpID09PSAwID8gd29yZCA6IHNlcCArIHdvcmQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydW5jYXRlZDtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VjdGlvbiAqL1xuXG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcbmltcG9ydCBSZXN1bHRGYWN0b3J5IGZyb20gJy4vcmVzdWx0ZmFjdG9yeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3RvciAoZGF0YSwgdXJsLCBmb3JtYXR0ZXJzKSB7XG4gICAgdGhpcy5zZWFyY2hTdGF0ZSA9IFNlYXJjaFN0YXRlcy5TRUFSQ0hfQ09NUExFVEU7XG4gICAgdGhpcy52ZXJ0aWNhbENvbmZpZ0lkID0gZGF0YS52ZXJ0aWNhbENvbmZpZ0lkIHx8IG51bGw7XG4gICAgdGhpcy5yZXN1bHRzQ291bnQgPSBkYXRhLnJlc3VsdHNDb3VudCB8fCAwO1xuICAgIHRoaXMuZW5jb2RlZFN0YXRlID0gZGF0YS5lbmNvZGVkU3RhdGUgfHwgJyc7XG4gICAgdGhpcy5hcHBsaWVkUXVlcnlGaWx0ZXJzID0gQXBwbGllZFF1ZXJ5RmlsdGVyLmZyb20oZGF0YS5hcHBsaWVkUXVlcnlGaWx0ZXJzKTtcbiAgICB0aGlzLmZhY2V0cyA9IGRhdGEuZmFjZXRzIHx8IG51bGw7XG4gICAgdGhpcy5yZXN1bHRzID0gUmVzdWx0RmFjdG9yeS5mcm9tKGRhdGEucmVzdWx0cywgZm9ybWF0dGVycywgdGhpcy52ZXJ0aWNhbENvbmZpZ0lkLCBkYXRhLnNvdXJjZSk7XG4gICAgdGhpcy5tYXAgPSBTZWN0aW9uLnBhcnNlTWFwKGRhdGEucmVzdWx0cyk7XG4gICAgdGhpcy52ZXJ0aWNhbFVSTCA9IHVybCB8fCBudWxsO1xuICB9XG5cbiAgc3RhdGljIHBhcnNlTWFwIChyZXN1bHRzKSB7XG4gICAgbGV0IG1hcE1hcmtlcnMgPSBbXTtcblxuICAgIGxldCBjZW50ZXJDb29yZGluYXRlcyA9IHt9O1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCByZXN1bHRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAvLyBUT0RPKGJpbGx5KSBSZW1vdmUgbGVnYWN5IGZhbGxiYWNrIGZyb20gYWxsIGRhdGEgZm9ybWF0XG4gICAgICBsZXQgcmVzdWx0ID0gcmVzdWx0c1tqXS5kYXRhIHx8IHJlc3VsdHNbal07XG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUpIHtcbiAgICAgICAgaWYgKCFjZW50ZXJDb29yZGluYXRlcy5sYXRpdHVkZSkge1xuICAgICAgICAgIGNlbnRlckNvb3JkaW5hdGVzID0ge1xuICAgICAgICAgICAgbGF0aXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubGF0aXR1ZGUsXG4gICAgICAgICAgICBsb25naXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubG9uZ2l0dWRlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBtYXBNYXJrZXJzLnB1c2goe1xuICAgICAgICAgIGl0ZW06IHJlc3VsdCxcbiAgICAgICAgICBsYWJlbDogbWFwTWFya2Vycy5sZW5ndGggKyAxLFxuICAgICAgICAgIGxhdGl0dWRlOiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlLmxhdGl0dWRlLFxuICAgICAgICAgIGxvbmdpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sb25naXR1ZGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICdtYXBDZW50ZXInOiBjZW50ZXJDb29yZGluYXRlcyxcbiAgICAgICdtYXBNYXJrZXJzJzogbWFwTWFya2Vyc1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc2VjdGlvbiBmcm9tIHRoZSBwcm92aWRlZCBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBtb2R1bGVzIFRoZSByZXN1bHQgbW9kdWxlc1xuICAgKiBAcGFyYW0ge09iamVjdH0gdXJscyBUaGUgdGFiIHVybHNcbiAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fSBmb3JtYXR0ZXJzIEZpZWxkIGZvcm1hdHRlcnMgZm9yIHJlc3VsdHNcbiAgICovXG4gIHN0YXRpYyBmcm9tIChtb2R1bGVzLCB1cmxzLCBmb3JtYXR0ZXJzKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gW107XG4gICAgaWYgKCFtb2R1bGVzKSB7XG4gICAgICByZXR1cm4gc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmV3IFNlY3Rpb24obW9kdWxlcywgbnVsbCwgZm9ybWF0dGVycyk7XG4gICAgfVxuXG4gICAgLy8gT3VyIHNlY3Rpb25zIHNob3VsZCBjb250YWluIGEgcHJvcGVydHkgb2YgbWFwTWFya2VyIG9iamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNlY3Rpb25zLnB1c2goXG4gICAgICAgIG5ldyBTZWN0aW9uKFxuICAgICAgICAgIG1vZHVsZXNbaV0sXG4gICAgICAgICAgdXJsc1ttb2R1bGVzW2ldLnZlcnRpY2FsQ29uZmlnSWRdLFxuICAgICAgICAgIGZvcm1hdHRlcnNcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VjdGlvbnM7XG4gIH1cbn1cblxuY2xhc3MgQXBwbGllZFF1ZXJ5RmlsdGVyIHtcbiAgLy8gU3VwcG9ydCBsZWdhY3kgbW9kZWwgYW5kIG5ldyBtb2RlbCB1bnRpbCBmdWxseSBtaWdyYXRlZC5cbiAgLy8gVE9ETyhiaWxseSkgUmVtb3ZlIHRoZSBsZWZ0IGV4cHJlc3Npb24gZHVyaW5nIGFzc2lnbm1lbnQgd2hlbiBtaWdyYXRlZC5cbiAgY29uc3RydWN0b3IgKGFwcGxpZWRRdWVyeUZpbHRlcikge1xuICAgIHRoaXMua2V5ID0gYXBwbGllZFF1ZXJ5RmlsdGVyLmtleSB8fCBhcHBsaWVkUXVlcnlGaWx0ZXIuZGlzcGxheUtleTtcbiAgICB0aGlzLnZhbHVlID0gYXBwbGllZFF1ZXJ5RmlsdGVyLnZhbHVlIHx8IGFwcGxpZWRRdWVyeUZpbHRlci5kaXNwbGF5VmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbSAoYXBwbGllZFF1ZXJ5RmlsdGVycykge1xuICAgIGxldCBmaWx0ZXJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBsaWVkUXVlcnlGaWx0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmaWx0ZXJzLnB1c2gobmV3IEFwcGxpZWRRdWVyeUZpbHRlcihhcHBsaWVkUXVlcnlGaWx0ZXJzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXJzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBVbml2ZXJzYWxSZXN1bHRzICovXG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vc2VjdGlvbic7XG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pdmVyc2FsUmVzdWx0cyB7XG4gIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgdGhpcy5xdWVyeUlkID0gZGF0YS5xdWVyeUlkIHx8IG51bGw7XG4gICAgdGhpcy5zZWN0aW9ucyA9IGRhdGEuc2VjdGlvbnMgfHwgW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc2VhcmNoLCB1c2VkIHRvIHJlbmRlciBkaWZmZXJlbnQgdGVtcGxhdGVzIGJlZm9yZSwgZHVyaW5nLFxuICAgICAqIGFuZCBhZnRlciBsb2FkaW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnNlYXJjaFN0YXRlID0gZGF0YS5zZWFyY2hTdGF0ZSB8fCBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB1bml2ZXJzYWwgcmVzdWx0cyBmcm9tIHNlcnZlciBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZSBUaGUgc2VydmVyIHJlc3BvbnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB1cmxzIFRoZSB0YWIgdXJsc1xuICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59IGZvcm1hdHRlcnMgVGhlIGZpZWxkIGZvcm1hdHRlcnMgdG8gdXNlXG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UsIHVybHMsIGZvcm1hdHRlcnMpIHtcbiAgICByZXR1cm4gbmV3IFVuaXZlcnNhbFJlc3VsdHMoe1xuICAgICAgcXVlcnlJZDogcmVzcG9uc2UucXVlcnlJZCxcbiAgICAgIHNlY3Rpb25zOiBTZWN0aW9uLmZyb20ocmVzcG9uc2UubW9kdWxlcywgdXJscywgZm9ybWF0dGVycylcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBVbml2ZXJ2YWxSZXN1bHRzIG9iamVjdCByZXByZXNlbnRpbmcgbG9hZGluZyByZXN1bHRzXG4gICAqIEByZXR1cm4ge1VuaXZlcnNhbFJlc3VsdHN9XG4gICAqL1xuICBzdGF0aWMgc2VhcmNoTG9hZGluZyAoKSB7XG4gICAgcmV0dXJuIG5ldyBVbml2ZXJzYWxSZXN1bHRzKHsgc2VhcmNoU3RhdGU6IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRGlyZWN0QW5zd2VyICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdEFuc3dlciB7XG4gIGNvbnN0cnVjdG9yIChkaXJlY3RBbnN3ZXIgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGlyZWN0QW5zd2VyKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERpcmVjdEFuc3dlciBtb2RlbCBmcm9tIHRoZSBnaXZlbiBzZXJ2ZXIgZGF0YSBhbmQgZm9ybWF0dGVyc1xuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2UgVGhlIHNlcnZlciBkaXJlY3QgYW5zd2VyXG4gICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn0gZm9ybWF0dGVycyBUaGUgZm9ybWF0dGVycyB0byBhcHBseSB0byB0aGlzIGRpcmVjdCBhbnN3ZXJcbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSwgZm9ybWF0dGVycykge1xuICAgIGNvbnN0IGRhdGEgPSB7IC4uLnJlc3BvbnNlIH07XG4gICAgY29uc3QgeyBhbnN3ZXIsIHJlbGF0ZWRJdGVtIH0gPSBkYXRhO1xuXG4gICAgaWYgKGFuc3dlciAmJiBmb3JtYXR0ZXJzW2Fuc3dlci5maWVsZEFwaU5hbWVdKSB7XG4gICAgICBhbnN3ZXIudmFsdWUgPSBmb3JtYXR0ZXJzW2Fuc3dlci5maWVsZEFwaU5hbWVdKFxuICAgICAgICBhbnN3ZXIudmFsdWUsXG4gICAgICAgIHJlbGF0ZWRJdGVtLmRhdGEuZmllbGRWYWx1ZXMsXG4gICAgICAgIHJlbGF0ZWRJdGVtLnZlcnRpY2FsQ29uZmlnSWQsXG4gICAgICAgIHRydWUpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGlyZWN0QW5zd2VyKGRhdGEpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBOYXZpZ2F0aW9uICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24ge1xuICBjb25zdHJ1Y3RvciAodGFiT3JkZXIpIHtcbiAgICB0aGlzLnRhYk9yZGVyID0gdGFiT3JkZXIgfHwgW107XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChtb2R1bGVzKSB7XG4gICAgbGV0IG5hdiA9IFtdO1xuICAgIGlmICghbW9kdWxlcyB8fCAhQXJyYXkuaXNBcnJheShtb2R1bGVzKSkge1xuICAgICAgcmV0dXJuIG5hdjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBuYXYucHVzaChtb2R1bGVzW2ldLnZlcnRpY2FsQ29uZmlnSWQpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE5hdmlnYXRpb24obmF2KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgVmVydGljYWxSZXN1bHRzICovXG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vc2VjdGlvbic7XG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGljYWxSZXN1bHRzIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyBzZWFyY2hTdGF0ZTogU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURSB9LCBkYXRhKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZCB0aGUgcHJvdmlkZWQgcmVzdWx0cyB0byB0aGUgY3VycmVudCByZXN1bHRzXG4gICAqIEBwYXJhbSB7VmVydGljYWxSZXN1bHRzfSByZXN1bHRzIHRoZSByZXN1bHRzIHRvIGFwcGVuZCB0byB0aGUgY3VycmVudCByZXN1bHRzXG4gICAqL1xuICBhcHBlbmQgKHJlc3VsdHMpIHtcbiAgICBjb25zdCBtZXJnZWQgPSB7IC4uLnRoaXMgfTtcbiAgICBtZXJnZWQucmVzdWx0cyA9IHRoaXMucmVzdWx0cy5jb25jYXQocmVzdWx0cy5yZXN1bHRzKTtcbiAgICBtZXJnZWQubWFwLm1hcE1hcmtlcnMgPSB0aGlzLm1hcC5tYXBNYXJrZXJzLmNvbmNhdChyZXN1bHRzLm1hcC5tYXBNYXJrZXJzKTtcbiAgICByZXR1cm4gbmV3IFZlcnRpY2FsUmVzdWx0cyhtZXJnZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB2ZXJ0aWNhbCByZXN1bHRzIGZyb20gc2VydmVyIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlIFRoZSBzZXJ2ZXIgcmVzcG9uc2VcbiAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fSBmb3JtYXR0ZXJzIFRoZSBmaWVsZCBmb3JtYXR0ZXJzIHRvIHVzZVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlLCBmb3JtYXR0ZXJzKSB7XG4gICAgcmV0dXJuIG5ldyBWZXJ0aWNhbFJlc3VsdHMoU2VjdGlvbi5mcm9tKHJlc3BvbnNlLCBudWxsLCBmb3JtYXR0ZXJzKSk7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0IGEgVmVydGljYWxSZXN1bHRzIG9iamVjdCByZXByZXNlbnRpbmcgbG9hZGluZyByZXN1bHRzXG4gICAqIEByZXR1cm4ge1ZlcnRpY2FsUmVzdWx0c31cbiAgICovXG4gIHN0YXRpYyBzZWFyY2hMb2FkaW5nICgpIHtcbiAgICByZXR1cm4gbmV3IFZlcnRpY2FsUmVzdWx0cyh7IHNlYXJjaFN0YXRlOiBTZWFyY2hTdGF0ZXMuU0VBUkNIX0xPQURJTkcgfSk7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU3BlbGxDaGVjayAqL1xuXG5pbXBvcnQgSGlnaGxpZ2h0ZWRWYWx1ZSBmcm9tICcuL2hpZ2hsaWdodGVkdmFsdWUnO1xuXG4vKipcbiAqIFNwZWxsQ2hlY2sgaXMgdGhlIGNvcmUgc3RhdGUgbW9kZWxcbiAqIHRvIHBvd2VyIHRoZSBTcGVsbENoZWNrIGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGVsbENoZWNrIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgb3JpZ2luYWwgcXVlcnlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlcnkgPSBkYXRhLnF1ZXJ5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29ycmVjdGVkIHF1ZXJ5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmNvcnJlY3RlZFF1ZXJ5ID0gZGF0YS5jb3JyZWN0ZWRRdWVyeSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvcnJlY3RlZCBxdWVyeSB3aXRoIGhpZ2hsaWdodGVkIHRhZ3NcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuY29ycmVjdGVkUXVlcnlEaXNwbGF5ID0gZGF0YS5jb3JyZWN0ZWRRdWVyeURpc3BsYXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzcGVsbCBjaGVjayB0eXBlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnR5cGUgPSBkYXRhLnR5cGUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFNob3VsZCBzaG93IHNwZWxsIGNoZWNrIG9yIG5vdFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuc2hvdWxkU2hvdyA9IHRoaXMuY29ycmVjdGVkUXVlcnkgIT09IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc3BlbGwgY2hlY2sgbW9kZWwgZnJvbSB0aGUgcHJvdmlkZWQgZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2UgVGhlIHNwZWxsIGNoZWNrIHJlc3BvbnNlXG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UpIHtcbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBTcGVsbENoZWNrKHtcbiAgICAgIHF1ZXJ5OiByZXNwb25zZS5vcmlnaW5hbFF1ZXJ5LFxuICAgICAgY29ycmVjdGVkUXVlcnk6IHJlc3BvbnNlLmNvcnJlY3RlZFF1ZXJ5LFxuICAgICAgY29ycmVjdGVkUXVlcnlEaXNwbGF5OiBuZXcgSGlnaGxpZ2h0ZWRWYWx1ZShyZXNwb25zZS5jb3JyZWN0ZWRRdWVyeSkuZ2V0KCksXG4gICAgICB0eXBlOiByZXNwb25zZS50eXBlXG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFN0b3JhZ2VLZXlzICovXG5cbi8qKlxuICogU3RvcmFnZUtleXMgaXMgYW4gRU5VTSBhcmUgY29uc2lkZXJlZCB0aGUgcm9vdCBjb250ZXh0XG4gKiBmb3IgaG93IGRhdGEgaXMgc3RvcmVkIGFuZCBzY29wZWQgaW4gdGhlIHN0b3JhZ2UuXG4gKlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBOQVZJR0FUSU9OOiAnbmF2aWdhdGlvbicsXG4gIFVOSVZFUlNBTF9SRVNVTFRTOiAndW5pdmVyc2FsLXJlc3VsdHMnLFxuICBWRVJUSUNBTF9SRVNVTFRTOiAndmVydGljYWwtcmVzdWx0cycsXG4gIEFVVE9DT01QTEVURTogJ2F1dG9jb21wbGV0ZScsXG4gIERJUkVDVF9BTlNXRVI6ICdkaXJlY3QtYW5zd2VyJyxcbiAgRklMVEVSOiAnZmlsdGVyJyxcbiAgUVVFUlk6ICdxdWVyeScsXG4gIFFVRVJZX0lEOiAncXVlcnktaWQnLFxuICBGQUNFVF9GSUxURVI6ICdmYWNldC1maWx0ZXInLFxuICBEWU5BTUlDX0ZJTFRFUlM6ICdkeW5hbWljLWZpbHRlcnMnLFxuICBTRUFSQ0hfTElNSVQ6ICdzZWFyY2gtbGltaXQnLFxuICBQQVJBTVM6ICdwYXJhbXMnLFxuICBHRU9MT0NBVElPTjogJ2dlb2xvY2F0aW9uJyxcbiAgSU5URU5UUzogJ2ludGVudHMnLFxuICBRVUVTVElPTl9TVUJNSVNTSU9OOiAncXVlc3Rpb24tc3VibWlzc2lvbicsXG4gIFNQRUxMX0NIRUNLOiAnc3BlbGwtY2hlY2snXG59O1xuIiwiLyoqIEBtb2R1bGUgRHluYW1pY0ZpbHRlcnMgKi9cblxuLyoqXG4gKiBNb2RlbCByZXByZXNlbnRpbmcgYSBzZXQgb2YgZHluYW1pYyBmaWx0ZXJzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNGaWx0ZXJzIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBmaWx0ZXJzIHRoaXMgbW9kZWwgaG9sZHNcbiAgICAgKiBAdHlwZSB7e2xhYmVsOiBzdHJpbmcsIGZpZWxkSWQ6IHN0cmluZywgb3B0aW9uczogb2JqZWN0W119fVxuICAgICAqL1xuICAgIHRoaXMuZmlsdGVycyA9IGRhdGEuZmlsdGVycyB8fCBbXTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9yZ2FuaXplICdmYWNldHMnIGZyb20gdGhlIGFwaSByZXNwb25zZSBpbnRvIGR5bmFtaWMgZmlsdGVyc1xuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2UgZHluYW1pYyBmaWx0ZXIgcmVzcG9uc2UgZnJvbSB0aGUgYXBpXG4gICAqIEByZXR1cm5zIHtEeW5hbWljRmlsdGVyc31cbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSkge1xuICAgIGNvbnN0IHsgZmFjZXRzIH0gPSByZXNwb25zZTtcbiAgICBjb25zdCBkeW5hbWljRmlsdGVycyA9IGZhY2V0cy5tYXAoZiA9PiAoe1xuICAgICAgbGFiZWw6IGZbJ2Rpc3BsYXlOYW1lJ10sXG4gICAgICBmaWVsZElkOiBmWydmaWVsZElkJ10sXG4gICAgICBvcHRpb25zOiBmLm9wdGlvbnMubWFwKG8gPT4gKHtcbiAgICAgICAgbGFiZWw6IG9bJ2Rpc3BsYXlOYW1lJ10sXG4gICAgICAgIGNvdW50TGFiZWw6IG9bJ2NvdW50J10sXG4gICAgICAgIHNlbGVjdGVkOiBvWydzZWxlY3RlZCddLFxuICAgICAgICBmaWx0ZXI6IG9bJ2ZpbHRlciddXG4gICAgICB9KSlcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gbmV3IER5bmFtaWNGaWx0ZXJzKHsgZmlsdGVyczogZHluYW1pY0ZpbHRlcnMgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaEludGVudHMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoSW50ZW50cyB7XG4gIGNvbnN0cnVjdG9yIChpbnRlbnRzKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGludGVudCB0byBmaW5kIHJlc3VsdHMgYmFzZWQgb24gdGhlIHVzZXIncyBsb2NhdGlvblxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMubmVhck1lID0gaW50ZW50cy5uZWFyTWU7XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBTZWFyY2hJbnRlbnRzIGZyb20gc2VydmVyIHJlc3BvbnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZSBUaGUgc2VydmVyIHJlc3BvbnNlIGludGVudHNcbiAgICogQHJldHVybnMge1NlYXJjaEludGVudHN9XG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UpIHtcbiAgICBjb25zdCBpbnRlbnRzID0gcmVzcG9uc2UgfHwgW107XG5cbiAgICByZXR1cm4gbmV3IFNlYXJjaEludGVudHMoe1xuICAgICAgbmVhck1lOiBpbnRlbnRzLmluY2x1ZGVzKCdORUFSX01FJylcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VhcmNoRGF0YVRyYW5zZm9ybWVyICovXG5cbmltcG9ydCBVbml2ZXJzYWxSZXN1bHRzIGZyb20gJy4uL21vZGVscy91bml2ZXJzYWxyZXN1bHRzJztcbmltcG9ydCBEaXJlY3RBbnN3ZXIgZnJvbSAnLi4vbW9kZWxzL2RpcmVjdGFuc3dlcic7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9tb2RlbHMvbmF2aWdhdGlvbic7XG5pbXBvcnQgVmVydGljYWxSZXN1bHRzIGZyb20gJy4uL21vZGVscy92ZXJ0aWNhbHJlc3VsdHMnO1xuaW1wb3J0IFNwZWxsQ2hlY2sgZnJvbSAnLi4vbW9kZWxzL3NwZWxsY2hlY2snO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IER5bmFtaWNGaWx0ZXJzIGZyb20gJy4uL21vZGVscy9keW5hbWljZmlsdGVycyc7XG5pbXBvcnQgU2VhcmNoSW50ZW50cyBmcm9tICcuLi9tb2RlbHMvc2VhcmNoaW50ZW50cyc7XG5cbi8qKlxuICogQSBEYXRhIFRyYW5zZm9ybWVyIHRoYXQgdGFrZXMgdGhlIHJlc3BvbnNlIG9iamVjdCBmcm9tIGEgU2VhcmNoIHJlcXVlc3RcbiAqIEFuZCB0cmFuc2Zvcm1zIGluIHRvIGEgZnJvbnQtZW5kIG9yaWVudGVkIGRhdGEgc3RydWN0dXJlIHRoYXQgb3VyXG4gKiBjb21wb25lbnQgbGlicmFyeSBhbmQgY29yZSBzdG9yYWdlIHVuZGVyc3RhbmQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaERhdGFUcmFuc2Zvcm1lciB7XG4gIHN0YXRpYyB0cmFuc2Zvcm0gKGRhdGEsIHVybHMgPSB7fSwgZm9ybWF0dGVycykge1xuICAgIGxldCByZXNwb25zZSA9IGRhdGEucmVzcG9uc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtTdG9yYWdlS2V5cy5RVUVSWV9JRF06IHJlc3BvbnNlLnF1ZXJ5SWQsXG4gICAgICBbU3RvcmFnZUtleXMuTkFWSUdBVElPTl06IE5hdmlnYXRpb24uZnJvbShyZXNwb25zZS5tb2R1bGVzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSXTogRGlyZWN0QW5zd2VyLmZyb20ocmVzcG9uc2UuZGlyZWN0QW5zd2VyLCBmb3JtYXR0ZXJzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUU106IFVuaXZlcnNhbFJlc3VsdHMuZnJvbShyZXNwb25zZSwgdXJscywgZm9ybWF0dGVycyksXG4gICAgICBbU3RvcmFnZUtleXMuSU5URU5UU106IFNlYXJjaEludGVudHMuZnJvbShyZXNwb25zZS5zZWFyY2hJbnRlbnRzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5TUEVMTF9DSEVDS106IFNwZWxsQ2hlY2suZnJvbShyZXNwb25zZS5zcGVsbENoZWNrKVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgdHJhbnNmb3JtVmVydGljYWwgKGRhdGEsIGZvcm1hdHRlcnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXTogZGF0YS5yZXNwb25zZS5xdWVyeUlkLFxuICAgICAgW1N0b3JhZ2VLZXlzLk5BVklHQVRJT05dOiBuZXcgTmF2aWdhdGlvbigpLCAvLyBWZXJ0aWNhbCBkb2Vzbid0IHJlc3BvbmQgd2l0aCBvcmRlcmluZywgc28gdXNlIGVtcHR5IG5hdi5cbiAgICAgIFtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXTogVmVydGljYWxSZXN1bHRzLmZyb20oZGF0YS5yZXNwb25zZSwgZm9ybWF0dGVycyksXG4gICAgICBbU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTXTogRHluYW1pY0ZpbHRlcnMuZnJvbShkYXRhLnJlc3BvbnNlKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5JTlRFTlRTXTogU2VhcmNoSW50ZW50cy5mcm9tKGRhdGEucmVzcG9uc2Uuc2VhcmNoSW50ZW50cyksXG4gICAgICBbU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0tdOiBTcGVsbENoZWNrLmZyb20oZGF0YS5yZXNwb25zZS5zcGVsbENoZWNrKVxuICAgIH07XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFF1ZXN0aW9uU3VibWlzc2lvbiAqL1xuXG4vKipcbiAqIFF1ZXN0aW9uU3VibWlzc2lvbiBpcyB0aGUgY29yZSBzdGF0ZSBtb2RlbFxuICogdG8gcG93ZXIgdGhlIFF1ZXN0aW9uU3VibWlzc2lvbiBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb25TdWJtaXNzaW9uIHtcbiAgY29uc3RydWN0b3IgKHF1ZXN0aW9uID0ge30sIGVycm9ycykge1xuICAgIC8qKlxuICAgICAqIFRoZSBhdXRob3Igb2YgdGhlIHF1ZXN0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSBxdWVzdGlvbi5uYW1lIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgcXVlc3Rpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZW1haWwgPSBxdWVzdGlvbi5lbWFpbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgcHJpdmFjeSBwb2xpY3kgd2FzIGFwcHJvdmVkXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5wcml2YWN5UG9saWN5ID0gcXVlc3Rpb24ucHJpdmFjeVBvbGljeSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXN0aW9uIHRvIGJlIHNlbnQgdG8gdGhlIHNlcnZlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5xdWVzdGlvblRleHQgPSBxdWVzdGlvbi5xdWVzdGlvblRleHQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFsdGVybmF0aXZlIHF1ZXN0aW9uIG1ldGEgaW5mb3JtYXRpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlc3Rpb25EZXNjcmlwdGlvbiA9IHF1ZXN0aW9uLnF1ZXN0aW9uRGVzY3JpcHRpb24gfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIENvbnRhaW5zIGFueSBlcnJvcnMgYWJvdXQgdGhlIHF1ZXN0aW9uIHN1Ym1pc3Npb25cbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzIHx8IG51bGw7XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIHN1Ym1pdHRlZCAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXN0aW9uU3VibWl0dGVkOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBlcnJvcnMgKHF1ZXN0aW9uLCBlcnJvcnMpIHtcbiAgICByZXR1cm4gUXVlc3Rpb25TdWJtaXNzaW9uKHF1ZXN0aW9uLCBlcnJvcnMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBDb3JlICovXG5cbmltcG9ydCBTZWFyY2hBcGkgZnJvbSAnLi9zZWFyY2gvc2VhcmNoYXBpJztcbmltcG9ydCBBdXRvQ29tcGxldGVBcGkgZnJvbSAnLi9zZWFyY2gvYXV0b2NvbXBsZXRlYXBpJztcbmltcG9ydCBRdWVzdGlvbkFuc3dlckFwaSBmcm9tICcuL3NlYXJjaC9xdWVzdGlvbmFuc3dlcmFwaSc7XG5cbmltcG9ydCBTZWFyY2hEYXRhVHJhbnNmb3JtZXIgZnJvbSAnLi9zZWFyY2gvc2VhcmNoZGF0YXRyYW5zZm9ybWVyJztcblxuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4vc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgVmVydGljYWxSZXN1bHRzIGZyb20gJy4vbW9kZWxzL3ZlcnRpY2FscmVzdWx0cyc7XG5pbXBvcnQgVW5pdmVyc2FsUmVzdWx0cyBmcm9tICcuL21vZGVscy91bml2ZXJzYWxyZXN1bHRzJztcbmltcG9ydCBRdWVzdGlvblN1Ym1pc3Npb24gZnJvbSAnLi9tb2RlbHMvcXVlc3Rpb25zdWJtaXNzaW9uJztcblxuLyoqXG4gKiBDb3JlIGlzIHRoZSBtYWluIGFwcGxpY2F0aW9uIGNvbnRhaW5lciBmb3IgYWxsIG9mIHRoZSBuZXR3b3JrIGFuZCBzdG9yYWdlXG4gKiByZWxhdGVkIGJlaGF2aW9ycyBvZiB0aGUgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmUge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5hcGlLZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYGFwaUtleWAuIFR5cGUgbXVzdCBiZSB7c3RyaW5nfScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmV4cGVyaWVuY2VLZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYGV4cGVyaWVuY2VLZXlgLiBUeXBlIG11c3QgYmUge3N0cmluZ30nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IEFQSSBLZXkgdXNlZCBmb3IgYWxsIHJlcXVlc3RzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwaUtleSA9IGNvbmZpZy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IEFuc3dlcnMgS2V5IHVzZWQgZm9yIGFsbCByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9leHBlcmllbmNlS2V5ID0gY29uZmlnLmV4cGVyaWVuY2VLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYW5zd2VycyBjb25maWcgdmVyc2lvbiB0byB1c2UgZm9yIGFsbCByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9leHBlcmllbmNlVmVyc2lvbiA9IGNvbmZpZy5leHBlcmllbmNlVmVyc2lvbjtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjbGllbnQgbG9jYWxlIHVzZWQgZm9yIGFsbCByZXF1ZXN0cy4gSWYgbm90IHNwZWNpZmllZCwgZGVmYXVsdHMgdG8gXCJlblwiIChmb3JcbiAgICAgKiBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSkuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xvY2FsZSA9IGNvbmZpZy5sb2NhbGUgfHwgJ2VuJztcblxuICAgIC8qKlxuICAgICAqIEEgbWFwIG9mIGZpZWxkIGZvcm1hdHRlcnMgdXNlZCB0byBmb3JtYXQgcmVzdWx0cywgaWYgcHJlc2VudFxuICAgICAqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmllbGRGb3JtYXR0ZXJzID0gY29uZmlnLmZpZWxkRm9ybWF0dGVycyB8fCB7fTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjb3JlIGRhdGEgc3RvcmFnZSB0aGF0IHBvd2VycyB0aGUgVUlcbiAgICAgKiBAdHlwZSB7R2xvYmFsU3RvcmFnZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZSA9IGNvbmZpZy5nbG9iYWxTdG9yYWdlO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNvcmUgcGVyc2lzdGVudCBzdG9yYWdlXG4gICAgICogQHR5cGUge1BlcnNpc3RlbnRTdG9yYWdlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5wZXJzaXN0ZW50U3RvcmFnZSA9IGNvbmZpZy5wZXJzaXN0ZW50U3RvcmFnZTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIGNvbnRhaW5pbmcgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIFJFU1RmdWwgc2VhcmNoIEFQSVxuICAgICAqIEZvciBib3RoIHZlcnRpY2FsIGFuZCB1bml2ZXJzYWwgc2VhcmNoXG4gICAgICogQHR5cGUge1NlYXJjaH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaGVyID0gbmV3IFNlYXJjaEFwaSh7XG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIGV4cGVyaWVuY2VLZXk6IHRoaXMuX2V4cGVyaWVuY2VLZXksXG4gICAgICBleHBlcmllbmNlVmVyc2lvbjogdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24sXG4gICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3Rpb24gY29udGFpbmluZyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgUkVTVGZ1bCBhdXRvY29tcGxldGUgQVBJXG4gICAgICogRm9yIGZpbHRlciBzZWFyY2gsIHZlcnRpY2FsIGF1dG9jb21wbGV0ZSwgYW5kIHVuaXZlcnNhbCBhdXRvY29tcGxldGVcbiAgICAgKiBAdHlwZSB7QXV0b2NvbXBsZXRlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXV0b0NvbXBsZXRlID0gbmV3IEF1dG9Db21wbGV0ZUFwaSh7XG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIGV4cGVyaWVuY2VLZXk6IHRoaXMuX2V4cGVyaWVuY2VLZXksXG4gICAgICBleHBlcmllbmNlVmVyc2lvbjogdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24sXG4gICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3Rpb24gZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIFEmQSByZXN0IGludGVyZmFjZVxuICAgICAqIEB0eXBlIHtRdWVzdGlvbkFuc3dlckFwaX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3F1ZXN0aW9uQW5zd2VyID0gbmV3IFF1ZXN0aW9uQW5zd2VyQXBpKHtcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoIGluIHRoZSBjb250ZXh0IG9mIGEgdmVydGljYWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnRpY2FsS2V5IHZlcnRpY2FsIElEIGZvciB0aGUgc2VhcmNoXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBxdWVyeSBUaGUgcXVlcnkgZGV0YWlsc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuaW5wdXQgVGhlIGlucHV0IHRvIHNlYXJjaCBmb3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmZpbHRlciBUaGUgZmlsdGVyIHRvIHVzZSBpbiB0aGUgc2VhcmNoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5mYWNldEZpbHRlciBUaGUgZmFjZXQgZmlsdGVyIHRvIHVzZSBpbiB0aGUgc2VhcmNoXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBxdWVyeS5saW1pdCBUaGUgbWF4IG51bWJlciBvZiByZXN1bHRzIHRvIGluY2x1ZGUsIG1heCBvZiA1MFxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlcnkub2Zmc2V0IFRoZSByZXN1bHRzIG9mZnNldCwgZm9yIGZldGNoaW5nIG1vcmUgcmVzdWx0cyBvZiB0aGUgc2FtZSBxdWVyeVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuaWQgVGhlIHF1ZXJ5IElEIHRvIHVzZS4gSWYgcGFnaW5nIHdpdGhpbiBhIHF1ZXJ5LCB0aGUgc2FtZSBJRCBzaG91bGQgYmUgdXNlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHF1ZXJ5LmFwcGVuZCBJZiB0cnVlLCBhZGRzIHRoZSByZXN1bHRzIG9mIHRoaXMgcXVlcnkgdG8gdGhlIGVuZCBvZiB0aGUgY3VycmVudCByZXN1bHRzLCBkZWZhdWx0cyBmYWxzZVxuICAgKi9cbiAgdmVydGljYWxTZWFyY2ggKHZlcnRpY2FsS2V5LCBxdWVyeSkge1xuICAgIGlmICghcXVlcnkuYXBwZW5kKSB7XG4gICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFMsIFZlcnRpY2FsUmVzdWx0cy5zZWFyY2hMb2FkaW5nKCkpO1xuICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5TUEVMTF9DSEVDSywge30pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9zZWFyY2hlclxuICAgICAgLnZlcnRpY2FsU2VhcmNoKHZlcnRpY2FsS2V5LCB7XG4gICAgICAgIGxpbWl0OiB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuU0VBUkNIX0xJTUlUKSxcbiAgICAgICAgZ2VvbG9jYXRpb246IHRoaXMuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5HRU9MT0NBVElPTiksXG4gICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICBpc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZDogdGhpcy5faXNEeW5hbWljRmlsdGVyc0VuYWJsZWQsXG4gICAgICAgIHNraXBTcGVsbENoZWNrOiB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoJ3NraXBTcGVsbENoZWNrJyksXG4gICAgICAgIHF1ZXJ5VHJpZ2dlcjogdGhpcy5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKCdxdWVyeVRyaWdnZXInKVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IFNlYXJjaERhdGFUcmFuc2Zvcm1lci50cmFuc2Zvcm1WZXJ0aWNhbChyZXNwb25zZSwgdGhpcy5fZmllbGRGb3JtYXR0ZXJzKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBkYXRhW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuTkFWSUdBVElPTiwgZGF0YVtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuSU5URU5UUywgZGF0YVtTdG9yYWdlS2V5cy5JTlRFTlRTXSk7XG5cbiAgICAgICAgaWYgKHF1ZXJ5LmFwcGVuZCkge1xuICAgICAgICAgIGNvbnN0IG1lcmdlZFJlc3VsdHMgPSB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUylcbiAgICAgICAgICAgIC5hcHBlbmQoZGF0YVtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXSk7XG4gICAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTLCBtZXJnZWRSZXN1bHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFMsIGRhdGFbU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUU10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGFbU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTXSkge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTLCBkYXRhW1N0b3JhZ2VLZXlzLkRZTkFNSUNfRklMVEVSU10pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhW1N0b3JhZ2VLZXlzLlNQRUxMX0NIRUNLXSkge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0ssIGRhdGFbU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0tdKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2UuZGVsZXRlKCdza2lwU3BlbGxDaGVjaycpO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2UuZGVsZXRlKCdxdWVyeVRyaWdnZXInKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoIChxdWVyeVN0cmluZywgdXJscykge1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFMsIFVuaXZlcnNhbFJlc3VsdHMuc2VhcmNoTG9hZGluZygpKTtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlNQRUxMX0NIRUNLLCB7fSk7XG5cbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoZXJcbiAgICAgIC51bml2ZXJzYWxTZWFyY2gocXVlcnlTdHJpbmcsIHtcbiAgICAgICAgZ2VvbG9jYXRpb246IHRoaXMuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5HRU9MT0NBVElPTiksXG4gICAgICAgIHNraXBTcGVsbENoZWNrOiB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoJ3NraXBTcGVsbENoZWNrJyksXG4gICAgICAgIHF1ZXJ5VHJpZ2dlcjogdGhpcy5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKCdxdWVyeVRyaWdnZXInKVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IFNlYXJjaERhdGFUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVzcG9uc2UsIHVybHMsIHRoaXMuX2ZpZWxkRm9ybWF0dGVycykpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWV9JRCwgZGF0YVtTdG9yYWdlS2V5cy5RVUVSWV9JRF0pO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLk5BVklHQVRJT04sIGRhdGFbU3RvcmFnZUtleXMuTkFWSUdBVElPTl0pO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVIsIGRhdGFbU3RvcmFnZUtleXMuRElSRUNUX0FOU1dFUl0pO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTLCBkYXRhW1N0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTXSwgdXJscyk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuSU5URU5UUywgZGF0YVtTdG9yYWdlS2V5cy5JTlRFTlRTXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFU1RJT05fU1VCTUlTU0lPTiwgbmV3IFF1ZXN0aW9uU3VibWlzc2lvbih7XG4gICAgICAgICAgcXVlc3Rpb25UZXh0OiBxdWVyeVN0cmluZ1xuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0ssIGRhdGFbU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0tdKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLmRlbGV0ZSgnc2tpcFNwZWxsQ2hlY2snKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLmRlbGV0ZSgncXVlcnlUcmlnZ2VyJyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhbiBpbnB1dCwgcXVlcnkgZm9yIGEgbGlzdCBvZiBzaW1pbGFyIHJlc3VsdHMgYW5kIHNldCBpbnRvIHN0b3JhZ2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0ICAgICB0aGUgc3RyaW5nIHRvIGF1dG9jb21wbGV0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIHRoZSBuYW1lc3BhY2UgdG8gdXNlIGZvciB0aGUgc3RvcmFnZSBrZXlcbiAgICovXG4gIGF1dG9Db21wbGV0ZVVuaXZlcnNhbCAoaW5wdXQsIG5hbWVzcGFjZSkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvQ29tcGxldGVcbiAgICAgIC5xdWVyeVVuaXZlcnNhbChpbnB1dClcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkFVVE9DT01QTEVURX0uJHtuYW1lc3BhY2V9YCwgZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhbiBpbnB1dCwgcXVlcnkgZm9yIGEgbGlzdCBvZiBzaW1pbGFyIHJlc3VsdHMgaW4gdGhlIHByb3ZpZGVkIHZlcnRpY2FsXG4gICAqIGFuZCBzZXQgaW50byBzdG9yYWdlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCAgICAgICB0aGUgc3RyaW5nIHRvIGF1dG9jb21wbGV0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIHRoZSBuYW1lc3BhY2UgdG8gdXNlIGZvciB0aGUgc3RvcmFnZSBrZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnRpY2FsS2V5IHRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBleHBlcmllbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiYXJLZXkgICAgICB0aGUgYmFyIGtleSBmb3IgdGhlIGV4cGVyaWVuY2VcbiAgICovXG4gIGF1dG9Db21wbGV0ZVZlcnRpY2FsIChpbnB1dCwgbmFtZXNwYWNlLCB2ZXJ0aWNhbEtleSwgYmFyS2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5VmVydGljYWwoaW5wdXQsIHZlcnRpY2FsS2V5LCBiYXJLZXkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5BVVRPQ09NUExFVEV9LiR7bmFtZXNwYWNlfWAsIGRhdGEpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYW4gaW5wdXQsIHByb3ZpZGUgYSBsaXN0IG9mIHN1aXRhYmxlIGZpbHRlcnMgZm9yIGF1dG9jb21wbGV0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCAgdGhlIHN0cmluZyB0byBzZWFyY2ggZm9yIGZpbHRlcnMgd2l0aFxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnICB0aGUgY29uZmlnIHRvIHNlcmFjaCBmb3IgZmlsdGVycyB3aXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcubmFtZXNwYWNlICB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcudmVydGljYWxLZXkgdGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIGNvbmZpZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLmJhcktleSAgdGhlIGJhciBrZXkgZm9yIHRoZSBjb25maWcgdjFcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZy5zZWFyY2hQYXJhbWV0ZXJzICB0aGUgc2VhcmNoIHBhcmFtZXRlcnMgZm9yIHRoZSBjb25maWcgdjJcbiAgICovXG4gIGF1dG9Db21wbGV0ZUZpbHRlciAoaW5wdXQsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLl9hdXRvQ29tcGxldGVcbiAgICAgIC5xdWVyeUZpbHRlcihpbnB1dCwgY29uZmlnKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke2NvbmZpZy5uYW1lc3BhY2V9YCwgZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJtaXRzIGEgcXVlc3Rpb24gdG8gdGhlIHNlcnZlciBhbmQgdXBkYXRlcyB0aGUgdW5kZXJseWluZyBxdWVzdGlvbiBtb2RlbFxuICAgKiBAcGFyYW0ge29iamVjdH0gcXVlc3Rpb24gVGhlIHF1ZXN0aW9uIG9iamVjdCB0byBzdWJtaXQgdG8gdGhlIHNlcnZlclxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlc3Rpb24uZW50aXR5SWQgVGhlIGVudGl0eSB0byBhc3NvY2lhdGUgd2l0aCB0aGUgcXVlc3Rpb24gKHJlcXVpcmVkKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ubGFudWFnZSBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIHF1ZXN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5zaXRlIFRoZSBcInB1Ymxpc2hlclwiIG9mIHRoZSAoZS5nLiAnRklSU1RfUEFSVFknKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ubmFtZSBUaGUgbmFtZSBvZiB0aGUgYXV0aG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5lbWFpbCBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgYXV0aG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5xdWVzdGlvblRleHQgVGhlIHF1ZXN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5xdWVzdGlvbkRlc2NyaXB0aW9uIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHF1ZXN0aW9uXG4gICAqL1xuICBzdWJtaXRRdWVzdGlvbiAocXVlc3Rpb24pIHtcbiAgICByZXR1cm4gdGhpcy5fcXVlc3Rpb25BbnN3ZXJcbiAgICAgIC5zdWJtaXRRdWVzdGlvbihxdWVzdGlvbilcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFxuICAgICAgICAgIFN0b3JhZ2VLZXlzLlFVRVNUSU9OX1NVQk1JU1NJT04sXG4gICAgICAgICAgUXVlc3Rpb25TdWJtaXNzaW9uLnN1Ym1pdHRlZCgpKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgZ2l2ZW4gcXVlcnkgaW50byBzdG9yYWdlLCB0byBiZSB1c2VkIGZvciB0aGUgbmV4dCBzZWFyY2hcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBxdWVyeSB0byBzdG9yZVxuICAgKi9cbiAgc2V0UXVlcnkgKHF1ZXJ5KSB7XG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWSwgcXVlcnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgcHJvdmlkZWQgcXVlcnkgSUQsIHRvIGJlIHVzZWQgaW4gYW5hbHl0aWNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeUlkIFRoZSBxdWVyeSBpZCB0byBzdG9yZVxuICAgKi9cbiAgc2V0UXVlcnlJZCAocXVlcnlJZCkge1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFUllfSUQsIHF1ZXJ5SWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgZ2l2ZW4gZmlsdGVyIGludG8gc3RvcmFnZSwgdG8gYmUgdXNlZCBmb3IgdGhlIG5leHQgc2VhcmNoXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKiBAcGFyYW0ge0ZpbHRlcn0gZmlsdGVyICAgIHRoZSBmaWx0ZXIgdG8gc2V0XG4gICAqL1xuICBzZXRGaWx0ZXIgKG5hbWVzcGFjZSwgZmlsdGVyKSB7XG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7bmFtZXNwYWNlfWAsIGZpbHRlcik7XG4gIH1cblxuICBzZXRGYWNldEZpbHRlciAobmFtZXNwYWNlLCBmaWx0ZXIpIHtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkZBQ0VUX0ZJTFRFUn0uJHtuYW1lc3BhY2V9YCwgZmlsdGVyKTtcbiAgfVxuXG4gIGVuYWJsZUR5bmFtaWNGaWx0ZXJzICgpIHtcbiAgICB0aGlzLl9pc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBzZXRTZWFyY2hMaW1pdCAobGltaXQpIHtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlNFQVJDSF9MSU1JVCwgbGltaXQpO1xuICB9XG5cbiAgb24gKGV2dCwgbW9kdWxlSWQsIGNiKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2xvYmFsU3RvcmFnZS5vbihldnQsIG1vZHVsZUlkLCBjYik7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIENvbXBvbmVudE1hbmFnZXIgKi9cblxuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCB7IERPTSB9IGZyb20gJy4uJztcblxuLyoqXG4gKiBDb21wb25lbnRNYW5hZ2VyIGlzIGEgU2luZ2xldG9uZSB0aGF0IGNvbnRhaW5zIGJvdGggYW4gaW50ZXJuYWwgcmVnaXN0cnkgb2ZcbiAqIGVsaWdpYmxlIGNvbXBvbmVudHMgdG8gYmUgY3JlYXRlZCwgYXMgd2VsbCBhcyBrZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudFxuICogaW5zdGFudGlhdGVkIGFuZCBhY3RpdmUgY29tcG9uZW50cy5cbiAqXG4gKiBBTEwgY29tcG9uZW50cyBzaG91bGQgYmUgY29uc3RydWN0ZWQgdXNpbmcgdGhlIHtDb21wb25lbnRNYW5hZ2VyfSB2aWEgaXRzIGBjcmVhdGVgIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50TWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBpZiAoIUNvbXBvbmVudE1hbmFnZXIuc2V0SW5zdGFuY2UodGhpcykpIHtcbiAgICAgIHJldHVybiBDb21wb25lbnRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudCByZWdpc3RyeSBpcyBhbiBpbnRlcm5hbCBtYXAsIHRoYXQgY29udGFpbnNcbiAgICAgKiBhbGwgYXZhaWxhYmxlIGNvbXBvbmVudCBDTEFTU0VTIHVzZWQgZm9yIGNyZWF0aW9uIG9yIG92ZXJyaWRlLlxuICAgICAqIEVhY2ggY29tcG9uZW50IGNsYXNzIGhhcyBhIHVuaXF1ZSBUWVBFLCB3aGljaCBpcyB1c2VkIGFzIHRoZSBrZXkgZm9yIHRoZSByZWdpc3RyeVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5fY29tcG9uZW50UmVnaXN0cnkgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhY3RpdmUgY29tcG9uZW50cyBpcyBhbiBpbnRlcm5hbCBjb250YWluZXIgdG8ga2VlcCB0cmFja1xuICAgICAqIG9mIGFsbCBvZiB0aGUgY29tcG9uZW50cyB0aGF0IGhhdmUgYmVlbiBjb25zdHJ1Y3RlZFxuICAgICAqL1xuICAgIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb3JlIGxpYnJhcnkgZGVwZW5kZW5jeVxuICAgICAqXG4gICAgICogVGhlIENvcmUgY29udGFpbnMgYm90aCB0aGUgc3RvcmFnZSBBTkQgc2VydmljZXMgdGhhdCBhcmUgbmVlZGVkIGZvciBwZXJmb3JtaW5nIG9wZXJhdGlvbnNcbiAgICAgKiBsaWtlIHNlYXJjaCBhbmQgYXV0byBjb21wbGV0ZS5cbiAgICAgKlxuICAgICAqIFRoZSBzdG9yYWdlIGlzIHRoZSBzb3VyY2Ugb2YgdHJ1dGggZm9yIHRoZSBzdGF0ZSBvZiBBTEwgY29tcG9uZW50cy5cbiAgICAgKiBXaGVuZXZlciB0aGUgc3RvcmFnZSBpcyB1cGRhdGVkLCB0aGUgc3RhdGUgZ2V0cyBwdXNoZWQgZG93biB0byB0aGUgbmVjZXNzYXJ5IGNvbXBvbmVudHMuXG4gICAgICogQHR5cGUge0NvcmV9XG4gICAgICovXG4gICAgdGhpcy5fY29yZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcHJpbWFyeSByZW5kZXJlciB0byB1c2UgZm9yIGFsbCBjb21wb25lbnRzXG4gICAgICogQHR5cGUge0hhbmRsZWJhcnNSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXJlciA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgYW5hbHl0aWNzIHJlcG9ydGVyIGRlcGVuZGVuY3lcbiAgICAgKi9cbiAgICB0aGlzLl9hbmFseXRpY3NSZXBvcnRlciA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgc2V0SW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIHNldFJlbmRlcmVyIChyZW5kZXJlcikge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRDb3JlIChjb3JlKSB7XG4gICAgdGhpcy5fY29yZSA9IGNvcmU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRBbmFseXRpY3NSZXBvcnRlciAocmVwb3J0ZXIpIHtcbiAgICB0aGlzLl9hbmFseXRpY3NSZXBvcnRlciA9IHJlcG9ydGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlZ2lzdGVycyBhIGNvbXBvbmVudCB0byBiZSBlbGlnaWJsZSBmb3IgY3JlYXRpb24gYW5kIG92ZXJyaWRlLlxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gVGhlIENvbXBvbmVudCBDbGFzcyB0byByZWdpc3RlclxuICAgKi9cbiAgcmVnaXN0ZXIgKGNvbXBvbmVudENsYXp6KSB7XG4gICAgdGhpcy5fY29tcG9uZW50UmVnaXN0cnlbY29tcG9uZW50Q2xhenoudHlwZV0gPSBjb21wb25lbnRDbGF6ejtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGUgaXMgdGhlIGVudHJ5IHBvaW50IGZvciBjb25zdHJ1Y3RpbmcgYW55IGFuZCBhbGwgY29tcG9uZW50cy5cbiAgICogSXQgd2lsbCBpbnN0YW50aWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgY29tcG9uZW50LCBhbmQgYm90aCBhcHBseVxuICAgKiBpbml0aWFsIHN0YXRlIGZyb20gdGhlIHN0b3JhZ2UgYW5kIGJpbmQgaXQgdG8gdGhlIHN0b3JhZ2UgZm9yIHVwZGF0ZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnRUeXBlIFRoZSBjb21wb25lbnQgdHlwZSB0byBjcmVhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgVGhlIG9wdGlvbnMgdG8gcGlwZSB0byB0aGUgY29uc3RydWN0aW9uIG9mIHRoZSBjb21wb25lbnRcbiAgICovXG4gIGNyZWF0ZSAoY29tcG9uZW50VHlwZSwgb3B0cykge1xuICAgIC8vIEV2ZXJ5IGNvbXBvbmVudCBuZWVkcyBsb2NhbCBhY2Nlc3MgdG8gdGhlIGNvbXBvbmVudCBtYW5hZ2VyXG4gICAgLy8gYmVjYXVzZSBzb21ldGltZXMgY29tcG9uZW50cyBoYXZlIHN1YmNvbXBvbmVudHMgdGhhdCBuZWVkIHRvIGJlXG4gICAgLy8gY29uc3RydWN0ZWQgZHVyaW5nIGNyZWF0aW9uXG4gICAgbGV0IHN5c3RlbU9wdHMgPSB7XG4gICAgICBjb3JlOiB0aGlzLl9jb3JlLFxuICAgICAgcmVuZGVyZXI6IHRoaXMuX3JlbmRlcmVyLFxuICAgICAgYW5hbHl0aWNzUmVwb3J0ZXI6IHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyLFxuICAgICAgY29tcG9uZW50TWFuYWdlcjogdGhpc1xuICAgIH07XG5cbiAgICBsZXQgY29tcG9uZW50Q2xhc3MgPSB0aGlzLl9jb21wb25lbnRSZWdpc3RyeVtjb21wb25lbnRUeXBlXTtcblxuICAgIGlmIChcbiAgICAgICFjb21wb25lbnRDbGFzcy5hcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQoKSAmJlxuICAgICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5zb21lKGMgPT4gYy5uYW1lID09PSBvcHRzLm5hbWUpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICBgQW5vdGhlciBjb21wb25lbnQgd2l0aCBuYW1lICR7b3B0cy5uYW1lfSBhbHJlYWR5IGV4aXN0c2AsXG4gICAgICAgIGNvbXBvbmVudFR5cGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGlzVHdpbjogdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5zb21lKGNvbXBvbmVudCA9PiBjb21wb25lbnQuY29uc3RydWN0b3IudHlwZSA9PT0gY29tcG9uZW50VHlwZSksXG4gICAgICAuLi5vcHRzXG4gICAgfTtcblxuICAgIC8vIEluc3RhbnRpYXRlIG91ciBuZXcgY29tcG9uZW50IGFuZCBrZWVwIHRyYWNrIG9mIGl0XG4gICAgbGV0IGNvbXBvbmVudCA9XG4gICAgICBuZXcgdGhpcy5fY29tcG9uZW50UmVnaXN0cnlbY29tcG9uZW50VHlwZV0oY29uZmlnLCBzeXN0ZW1PcHRzKVxuICAgICAgICAuaW5pdChjb25maWcpO1xuXG4gICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIGdsb2JhbCBzdG9yYWdlIHRvIHBvd2VyIHN0YXRlLCBhcHBseSB0aGUgc3RhdGVcbiAgICAvLyBmcm9tIHRoZSBzdG9yYWdlIHRvIHRoZSBjb21wb25lbnQsIGFuZCB0aGVuIGJpbmQgdGhlIGNvbXBvbmVudFxuICAgIC8vIHN0YXRlIHRvIHRoZSBzdG9yYWdlIHZpYSBpdHMgdXBkYXRlc1xuICAgIGlmICh0aGlzLl9jb3JlICYmIHRoaXMuX2NvcmUuZ2xvYmFsU3RvcmFnZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKGNvbXBvbmVudC5tb2R1bGVJZCA9PT0gdW5kZWZpbmVkIHx8IGNvbXBvbmVudC5tb2R1bGVJZCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jb3JlLmdsb2JhbFN0b3JhZ2VcbiAgICAgICAgLm9uKCd1cGRhdGUnLCBjb21wb25lbnQubW9kdWxlSWQsIChkYXRhKSA9PiB7XG4gICAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgcHJvdmlkZWQgY29tcG9uZW50IGZyb20gdGhlIGxpc3Qgb2YgYWN0aXZlIGNvbXBvbmVudHMgYW5kIHJlbW92ZVxuICAgKiB0aGUgYXNzb2NpYXRlZCBzdG9yYWdlIGV2ZW50IGxpc3RlbmVyXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCB0byByZW1vdmVcbiAgICovXG4gIHJlbW92ZSAoY29tcG9uZW50KSB7XG4gICAgdGhpcy5fY29yZS5nbG9iYWxTdG9yYWdlLm9mZigndXBkYXRlJywgY29tcG9uZW50Lm1vZHVsZUlkKTtcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5maW5kSW5kZXgoYyA9PiBjLm5hbWUgPT09IGNvbXBvbmVudC5uYW1lKTtcbiAgICB0aGlzLl9hY3RpdmVDb21wb25lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjb21wb25lbnQgd2l0aCB0aGUgZ2l2ZW4gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgY29tcG5lbnQgdG8gcmVtb3ZlXG4gICAqL1xuICByZW1vdmVCeU5hbWUgKG5hbWUpIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLl9hY3RpdmVDb21wb25lbnRzLmZpbmQoYyA9PiBjLm5hbWUgPT09IG5hbWUpO1xuICAgIGNvbXBvbmVudC5yZW1vdmUoKTtcbiAgICBET00uZW1wdHkoY29tcG9uZW50Ll9jb250YWluZXIpO1xuICB9XG5cbiAgZ2V0QWN0aXZlQ29tcG9uZW50ICh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMuZmluZChjID0+IGMuY29uc3RydWN0b3IudHlwZSA9PT0gdHlwZSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlbmRlcmVyICovXG5cbi8qKlxuICogUmVuZGVyZXIgaXMgYW4gYWJzdHJhY3QgY2xhc3MgdGhhdCBhbGwgUmVuZGVyZXJzIHNob3VsZCBleHRlbmQgYW5kIGltcGxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciB7XG4gIC8qKlxuICAgKiByZW5kZXIgaXMgYSBjb3JlIG1ldGhvZCBmb3IgYWxsIHJlbmRlcmVycy5cbiAgICogQWxsIGltcGxlbWVudGF0aW9ucyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBjbGFzc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICovXG4gIHJlbmRlciAodGVtcGxhdGUsIGRhdGEpIHtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICByZWdpc3RlckhlbHBlciAobmFtZSwgY2IpIHtcblxuICB9XG5cbiAgY29tcGlsZSAodGVtcGxhdGUpIHtcblxuICB9XG59XG4iLCIvKiogQG1vZHVsZSBIYW5kbGViYXJzUmVuZGVyZXIgKi9cblxuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG4vKipcbiAqIEhhbmRsZWJhcnNSZW5kZXJlciBpcyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBuYXRpdmF0ZSBoYW5kbGViYXJzIHJlbmRlcmVyLlxuICogQGV4dGVuZHMgUmVuZGVyZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFuZGxlYmFyc1JlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvciAodGVtcGxhdGVzID0ge30sIG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgaGFuZGxlYmFycyBjb21waWxlclxuICAgICAqIEB0eXBlIHtIYW5kbGViYXJzfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faGFuZGxlYmFycyA9IHRlbXBsYXRlcy5faGIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBwcmUtY29tcGlsZWQgaGFuZGxlYmFycyB0ZW1wbGF0ZXNcbiAgICAgKiBAdHlwZSB7SGFuZGxlYmFyc31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHRlbXBsYXRlcyB8fCB7fTtcbiAgfVxuXG4gIGluaXQgKHRlbXBsYXRlcykge1xuICAgIC8vIEFzc2lnbiB0aGUgaGFuZGxlYmFycyBjb21waWxlciBhbmQgdGVtcGxhdGVzIGJhc2VkIG9uXG4gICAgLy8gaW5mb3JtYXRpb24gcHJvdmlkZWQgZnJvbSBleHRlcm5hbCBkZXAgKGluIGRlZmF1bHQgY2FzZSwgaXQgY29tZXMgZnJvbSBleHRlcm5hbCBzZXJ2ZXIgcmVxdWVzdClcbiAgICB0aGlzLl9oYW5kbGViYXJzID0gdGVtcGxhdGVzLl9oYjtcbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXM7XG5cbiAgICAvLyBUT0RPKGJpbGx5KSBPbmNlIHdlIHJlLXdyaXRlIHRlbXBsYXRlcyB1c2luZyB0aGUgbmV3IGhlbHBlcnMgbGlicmFyeVxuICAgIC8vIHdlIHByb2JhYmx5IGRvbid0IG5lZWQgdGhlc2UgY3VzdG9tIGhlbHBlcnMgYW55bW9yZVxuICAgIHRoaXMuX3JlZ2lzdGVyQ3VzdG9tSGVscGVycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlZ2lzdGVySGVscGVyIGlzIGEgcHVibGljIGludGVyZmFjZSBmb3IgZXh0ZXJuYWwgZGVwZW5kZW5jaWVzIHRvXG4gICAqIHJlZ2lzdGVyIHRoZWlyIG93biBjdXN0b20gaGVscGVycyB0byBvdXIgaW50ZXJuYWwgSGFuZGxlYmFycyBDb21waWxlclxuICAgKi9cbiAgcmVnaXN0ZXJIZWxwZXIgKG5hbWUsIGNiKSB7XG4gICAgdGhpcy5faGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihuYW1lLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogY29tcGlsZSBhIGhhbmRsZWJhcnMgdGVtcGxhdGUgc28gdGhhdCBpdCBjYW4gYmUgcmVuZGVyZWQsXG4gICAqIHVzaW5nIHRoZSB7SGFuZGxlYmFyc30gY29tcGlsZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlIFRoZSB0ZW1wbGF0ZSBzdHJpbmcgdG8gY29tcGlsZVxuICAgKi9cbiAgY29tcGlsZSAodGVtcGxhdGUpIHtcbiAgICBpZiAodHlwZW9mIHRlbXBsYXRlICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faGFuZGxlYmFycy5jb21waWxlKHRlbXBsYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZW5kZXIgd2lsbCByZW5kZXIgYSB0ZW1wbGF0ZSB3aXRoIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBQcm92aWRlIGVpdGhlciBhIHRlbXBsYXRlTmFtZSBvciBhIHByZS1jb21waWxlZCB0ZW1wbGF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBwcm92aWRlIHRvIHRoZSB0ZW1wbGF0ZVxuICAgKi9cbiAgcmVuZGVyIChjb25maWcsIGRhdGEpIHtcbiAgICAvLyBJZiBhIGN1c3RvbSB0ZW1wbGF0ZSBpcyBwcm92aWRlZCwgdXNlIGl0LFxuICAgIC8vIG90aGVyd2lzZSBmYWxsIGJhY2sgdG8gdGhlIHRlbXBsYXRlIG5hbWVcbiAgICAvLyBUT0RPKGJpbGx5KSBUaGlzIGludGVyZmFjZSBzaG91bGQgcHJvYmFibHkgYmUgbGVzcyB1Z2x5XG4gICAgaWYgKGNvbmZpZy50ZW1wbGF0ZSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNvbmZpZy50ZW1wbGF0ZShkYXRhKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlc1tjb25maWcudGVtcGxhdGVOYW1lXShkYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgZmluZC9yZW5kZXIgdGVtcGxhdGU6ICcgKyBjb25maWcudGVtcGxhdGVOYW1lLCBlKTtcbiAgICB9XG4gIH1cblxuICBfcmVnaXN0ZXJDdXN0b21IZWxwZXJzICgpIHtcbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdpZmVxJywgZnVuY3Rpb24gKGFyZzEsIGFyZzIsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiAoYXJnMSA9PT0gYXJnMikgPyBvcHRpb25zLmZuKHRoaXMpIDogb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignaWZub3RlcScsIGZ1bmN0aW9uIChhcmcxLCBhcmcyLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gKGFyZzEgIT09IGFyZzIpID8gb3B0aW9ucy5mbih0aGlzKSA6IG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2Zvcm1hdFBob25lTnVtYmVyJywgZnVuY3Rpb24gKHBob25lTnVtYmVyU3RyaW5nKSB7XG4gICAgICB2YXIgY2xlYW5lZCA9ICgnJyArIHBob25lTnVtYmVyU3RyaW5nKS5yZXBsYWNlKC9cXEQvZywgJycpO1xuICAgICAgdmFyIG1hdGNoID0gY2xlYW5lZC5tYXRjaCgvXigxfCk/KFxcZHszfSkoXFxkezN9KShcXGR7NH0pJC8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHZhciBpbnRsQ29kZSA9IChtYXRjaFsxXSA/ICcrMSAnIDogJycpO1xuICAgICAgICByZXR1cm4gW2ludGxDb2RlLCAnKCcsIG1hdGNoWzJdLCAnKSAnLCBtYXRjaFszXSwgJy0nLCBtYXRjaFs0XV0uam9pbignJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2Fzc2lnbicsIGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBvcHRpb25zID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAoIW9wdGlvbnMuZGF0YS5yb290KSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YS5yb290ID0ge307XG4gICAgICB9XG5cbiAgICAgIGxldCB2ID0gJyc7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIHYgPSB2ICsgYXJnc1tpXTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5kYXRhLnJvb3RbbmFtZV0gPSB2O1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignanNvbicsIGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG5hbWUgPT09IHVuZGVmaW5lZFxuICAgICAgICA/ICcnXG4gICAgICAgIDogSlNPTi5zdHJpbmdpZnkobmFtZSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBIYW5kbGViYXJzUmVuZGVyZXIgZnJvbSAnLi9oYW5kbGViYXJzcmVuZGVyZXInO1xuXG4vLyBJbiB0aGUgZnV0dXJlLCB0aGlzIHdpbGwgY29udGFpbiBhbGwgZGlmZmVyZW50IHR5cGVzIG9mIHJlbmRlcmVyc1xuLy8gRS5nLiBNdXN0YWNoZSwgU09ZLCBIYW5kbGVCYXJzLCBSZWFjdCwgZXRjLlxuZXhwb3J0IGNvbnN0IFJlbmRlcmVycyA9IHtcbiAgU09ZOiBSZW5kZXJlcixcbiAgSGFuZGxlYmFyczogSGFuZGxlYmFyc1JlbmRlcmVyXG59O1xuIiwiLyoqIEBtb2R1bGUgRE9NICovXG5cbi8qIGdsb2JhbCBIVE1MRWxlbWVudCwgSFRNTERvY3VtZW50LCBXaW5kb3csIEV2ZW50ICovXG5cbmxldCBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcblxuLyoqXG4gKiBTdGF0aWMgaW50ZXJmYWNlIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBET00gQVBJLlxuICogQG5hbWVzcGFjZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBET00ge1xuICBzdGF0aWMgc2V0dXAgKGQsIHApIHtcbiAgICBkb2N1bWVudCA9IGQ7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIGEgSFRNTEVsZW1lbnQgZnJvbSBhbmQgSFRNTCBzdHJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IGh0bWwgVGhlIEhUTUwgdG8gcGFyc2UgdG8gYSBET00gbm9kZS5cbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlIChodG1sKSB7XG4gICAgaWYgKCdjcmVhdGVSYW5nZScgaW4gZG9jdW1lbnQpIHtcbiAgICAgIC8vIHByZWZlciB0aGlzIGltcGxlbWVudGF0aW9uIGFzIGl0IGhhcyB3aWRlciBicm93c2VyIHN1cHBvcnRcbiAgICAgIC8vIGFuZCBpdCdzIGJldHRlciBwZXJmb3JtaW5nLlxuICAgICAgLy8gc2VlIGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2NvbnZlcnQtaHRtbC1zdGluZ3MtZG9tLW5vZGVzXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChodG1sKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnKTtcbiAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgLy8gZmFsbGJhY2sgdG8gdGhpcyBiZWNhdXNlIG9mIGEgYnVnIGluIGpzZG9tIHRoYXQgY2F1c2VzIHRlc3RzIHRvIGZhaWxcbiAgICAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qc2RvbS9qc2RvbS9pc3N1ZXMvMzk5XG4gICAgcmV0dXJuIG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoaHRtbCwgJ3RleHQvaHRtbCcpLmJvZHk7XG4gIH1cblxuICAvKipcbiAgICogcXVlcnkgdGhlIERPTSBmb3IgYSBnaXZlbiBjc3Mgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50IE9wdGlvbmFsIGNvbnRleHQgdG8gdXNlIGZvciBhIHNlYXJjaC4gRGVmYXVsdHMgdG8gZG9jdW1lbnQgaWYgbm90IHByb3ZpZGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgdGhlIENTUyBzZWxlY3RvciB0byBxdWVyeSBmb3JcbiAgICpcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSB0aGUgRklSU1Qgbm9kZSBpdCBmaW5kcywgaWYgYW55XG4gICAqL1xuICBzdGF0aWMgcXVlcnkgKHBhcmVudCwgc2VsZWN0b3IpIHtcbiAgICAvLyBGYWNhZGUsIHNoaWZ0aW5nIHRoZSBzZWxlY3RvciB0byB0aGUgcGFyZW50IGFyZ3VtZW50IGlmIG9ubHkgb25lXG4gICAgLy8gYXJndW1lbnQgaXMgcHJvdmlkZWRcbiAgICBpZiAoc2VsZWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2VsZWN0b3IgPSBwYXJlbnQ7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIFdpbmRvdyB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxEb2N1bWVudCkge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogcXVlcnkgdGhlIERPTSBmb3IgYSBnaXZlbiBjc3Mgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50IE9wdGlvbmFsIGNvbnRleHQgdG8gdXNlIGZvciBhIHNlYXJjaC4gRGVmYXVsdHMgdG8gZG9jdW1lbnQgaWYgbm90IHByb3ZpZGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgdGhlIENTUyBzZWxlY3RvciB0byBxdWVyeSBmb3JcbiAgICpcbiAgICogQHJldHVybnMge0FycmF5fSB0aGUgRklSU1Qgbm9kZSBpdCBmaW5kcywgaWYgYW55XG4gICAqL1xuICBzdGF0aWMgcXVlcnlBbGwgKHBhcmVudCwgc2VsZWN0b3IpIHtcbiAgICAvLyBGYWNhZGUsIHNoaWZ0aW5nIHRoZSBzZWxlY3RvciB0byB0aGUgcGFyZW50IGFyZ3VtZW50IGlmIG9ubHkgb25lXG4gICAgLy8gYXJndW1lbnQgaXMgcHJvdmlkZWRcbiAgICBpZiAoc2VsZWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2VsZWN0b3IgPSBwYXJlbnQ7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgY2xpZW50IGNvZGUgaXMgdXNpbmcgYSBwb2ludGVyIHRvIGEgZG9tIG5vZGUgYW5kIGl0J3MgbnVsbCwgZS5nLiB0aGlzLl9jb250YWluZXJcbiAgICBpZiAocGFyZW50ID09IG51bGwpIHtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTERvY3VtZW50IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgV2luZG93KSB7XG4gICAgICByZXR1cm4gW3NlbGVjdG9yXTtcbiAgICB9XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuICB9XG5cbiAgc3RhdGljIG9uUmVhZHkgKGNiKSB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRlZCcgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJykge1xuICAgICAgY2IoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBET00ub24oZG9jdW1lbnQsICdET01Db250ZW50TG9hZGVkJywgY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZUVsZSB3aWxsIGNyZWF0ZSBhIHtIVE1MRWxlbWVudH0gYW5kIGFwcGx5IHRoZSBwcm9wZXJ0aWVzIGF0dHJpYnV0ZXMgdGhyb3VnaCBhbiBvYmplY3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbCBUaGUgZWxlbWVudCBgdGFnYCBuYW1lIHRvIGNvbnN0cnVjdFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c19kYXRhIE9wdGlvbmFsIGF0dHJpYnV0ZXMgdG8gYXBwbHkgdG8gdGhlIG5ldyBIVE1MRWxlbWVudFxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUVsIChlbCwgb3B0c19kYXRhID0ge30pIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwpO1xuICAgIGxldCBwcm9wcyA9IE9iamVjdC5rZXlzKG9wdHNfZGF0YSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocHJvcHNbaV0gPT09ICdjbGFzcycpIHtcbiAgICAgICAgRE9NLmFkZENsYXNzKG5vZGUsIG9wdHNfZGF0YVtwcm9wc1tpXV0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbm9kZVtwcm9wc1tpXV0gPSBvcHRzX2RhdGFbcHJvcHNbaV1dO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIGFwcGVuZCAocGFyZW50LCBub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbm9kZSA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcGFyZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgcGFyZW50ID0gRE9NLnF1ZXJ5KHBhcmVudCk7XG4gICAgfVxuXG4gICAgLy8gU3VwcG9ydCBIVE1MIGluamVjdGlvbiBhcyB3ZWxsIGFzIEhUTUxFbGVtZW50IGFwcGVuZHNcbiAgICBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlckJlZ2luJywgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYWRkQ2xhc3MgKG5vZGUsIGNsYXNzTmFtZSkge1xuICAgIGxldCBjbGFzc2VzID0gY2xhc3NOYW1lLnNwbGl0KCcsJyk7XG4gICAgbGV0IGxlbiA9IGNsYXNzZXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzZXNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBlbXB0eSAocGFyZW50KSB7XG4gICAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgc3RhdGljIGNzcyAoc2VsZWN0b3IsIHN0eWxlcykge1xuICAgIGxldCBub2RlID0gRE9NLnF1ZXJ5KHNlbGVjdG9yKTtcblxuICAgIGZvciAobGV0IHByb3AgaW4gc3R5bGVzKSB7XG4gICAgICBub2RlLnN0eWxlW3Byb3BdID0gc3R5bGVzW3Byb3BdO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhdHRyIChzZWxlY3RvciwgYXR0ciwgdmFsKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsKTtcbiAgfVxuXG4gIHN0YXRpYyBhdHRyaWJ1dGVzIChzZWxlY3RvciwgYXR0cnMpIHtcbiAgICBPYmplY3QuZW50cmllcyhhdHRycylcbiAgICAgIC5mb3JFYWNoKChbYXR0ciwgdmFsXSkgPT4gdGhpcy5hdHRyKHNlbGVjdG9yLCBhdHRyLCB2YWwpKTtcbiAgfVxuXG4gIHN0YXRpYyB0cmlnZ2VyIChzZWxlY3RvciwgZXZlbnQsIHNldHRpbmdzKSB7XG4gICAgbGV0IGUgPSBuZXcgRXZlbnQoZXZlbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgJ2J1YmJsZXMnOiB0cnVlLFxuICAgICAgJ2NhbmNlbGFibGUnOiB0cnVlXG4gICAgfSwgc2V0dGluZ3MgfHwge30pKTtcblxuICAgIERPTS5xdWVyeShzZWxlY3RvcikuZGlzcGF0Y2hFdmVudChlKTtcbiAgfVxuXG4gIHN0YXRpYyBvbiAoc2VsZWN0b3IsIGV2dCwgaGFuZGxlcikge1xuICAgIERPTS5xdWVyeShzZWxlY3RvcikuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIG9uY2UgKHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpIHtcbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCB7IG9uY2U6IHRydWUgfSk7XG4gIH1cblxuICBzdGF0aWMgb2ZmIChzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZGVsZWdhdGUgKGN0eHQsIHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpIHtcbiAgICBsZXQgZWwgPSBET00ucXVlcnkoY3R4dCk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIHdoaWxlICghdGFyZ2V0LmlzRXF1YWxOb2RlKGVsKSkge1xuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgaGFuZGxlcihldmVudCwgdGFyZ2V0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRXZlbnRFbWl0dGVyICovXG5cbi8qKlxuICogRXZlbnRFbWl0dGVyIGlzIGEgYmFzZSBjbGFzcyBmb3IgYW55IG9iamVjdCB0aGF0IHdhbnRzIHRvIGV4cG9zZVxuICogYSBwdWIvc3ViIGludGVyZmFjZSwgZm9yIGVtaXR0aW5nIG1lc3NhZ2VzIGFuZCBwcm92aWRpbmcgbGlzdGVuZXJzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLyoqXG4gICAgICogVGhlIHN1YnNjcmliZXJzIG9mIG1lc3NhZ2VzXG4gICAgICogQHR5cGUge29iamVjdFtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbGlzdGVuZXJzID0ge307XG4gIH1cblxuICAvKipcbiAgICogb24gaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIHN1YnNjcmliaW5nIGV2ZW50cyB0aGF0IGFyZSBlbWl0dGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIGxpc3RlbiB0b1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gdGhlIHtldnR9IGlzIGVtaXR0ZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBvbmNlIE9wdGlvbmFsIHZhbHVlIHdoaWNoIHdpbGwgb25seSBoYW5kbGUgdGhlIG1lc3NhZ2Ugb25jZVxuICAgKi9cbiAgb24gKGV2dCwgY2IsIG9uY2UpIHtcbiAgICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbGxiYWNrIGhhbmRsZXIgc2hvdWxkIGJlIG9mIHR5cGUge2Z1bmN0aW9ufScpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9saXN0ZW5lcnNbZXZ0XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XSA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuX2xpc3RlbmVyc1tldnRdLnB1c2goe1xuICAgICAgZXZlbnQ6IGV2dCxcbiAgICAgIGNiOiBjYixcbiAgICAgIG9uY2U6IG9uY2UgfHwgZmFsc2VcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uY2UgaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIHN1YnNjcmliaW5nIGV2ZW50cyB0aGF0IGFyZSBlbWl0dGVkLlxuICAgKiBUaGUgaGFuZGxlciB3aWxsIG9ubHkgYmUgdHJpZ2dlcmVkIG9uY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gbGlzdGVuIHRvXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIFRoZSBjYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUge2V2dH0gaXMgZW1pdHRlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uY2UgT3B0aW9uYWwgdmFsdWUgd2hpY2ggd2lsbCBvbmx5IGhhbmRsZSB0aGUgbWVzc2FnZSBvbmNlXG4gICAqL1xuICBvbmNlIChldnQsIGNiKSB7XG4gICAgcmV0dXJuIHRoaXMub24oZXZ0LCBjYiwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogb2ZmIGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciB1bnN1YnNjcmliaW5nIGZyb20gYW4gZXZlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byB1bnN1YnNjcmliZSBmcm9tXG4gICAqL1xuICBvZmYgKGV2dCkge1xuICAgIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcnNbZXZ0XTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBlbWl0IGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciBicm9hZGNhc3RpbmcgbWVzc2FnZXMvZXZlbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gcHVibGlzaCBmcm9tXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIHRoZSBkYXRhIHRvIHNlbmQgYWxvbmcgdG8gdGhlIHN1YnNjcmliZXJzXG4gICAqL1xuICBlbWl0IChldnQsIGRhdGEpIHtcbiAgICBsZXQgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2dF07XG4gICAgaWYgKGxpc3RlbmVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSW52b2tlIGVhY2ggb2YgYWxsIHRoZSBsaXN0ZW5lciBoYW5kbGVycyBhbmQgcmVtb3ZlIHRoZSBvbmVzIHRoYXQgc2hvdWxkIGZpcmUgb25seSBvbmNlLlxuICAgIGxldCBrZWVwID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpc3RlbmVyc1tpXS5jYihkYXRhKTtcbiAgICAgIGlmIChsaXN0ZW5lcnNbaV0ub25jZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gSW5zdGVhZCBvZiBoYXZpbmcgYSAnZGlydHknIGFycmF5IHdpdGggZGVsZXRlZCBvciAndW5kZWZpbmVkJyBlbnRyaWVzLFxuICAgICAgLy8gd2UganVzdCBjcmVhdGUgYSBicmFuZCBuZXcgYXJyYXkgd2l0aG91dCB0aGUgbGlzdGVuZXJzIHRoYXQgd2VyZSByZW1vdmVkXG4gICAgICBrZWVwLnB1c2gobGlzdGVuZXJzW2ldKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgb3VyIG9sZCBsaXN0IG9mIGxpc3RlbmVycyB0byB0aGUgbmV3bHkgY3JlYXRlZCBhcnJheVxuICAgIHRoaXMuX2xpc3RlbmVyc1tldnRdID0ga2VlcDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU3RhdGUgKi9cblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi8uLi9jb3JlL2V2ZW50ZW1pdHRlci9ldmVudGVtaXR0ZXInO1xuXG4vKipcbiAqIFN0YXRlIGNvbnRhaW5zIHRoZSBkYXRhIGZvciB0aGUgY29tcG9uZW50XG4gKiBhbmQgZXhwb3NlcyBhbiB7RXZlbnRFbWl0dGVyfSBpbnRlcmZhY2Ugc28gdGhhdCBleHRlcm5hbFxuICogZGVwZW5kZW5jaWVzIGNhbiBsaXN0ZW4vaG9vayBzdWJzY3JpYmUgdG8gbWVzc2FnZXMvdXBkYXRlcy5cbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RhdGUgPSBkYXRhIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKiBOT1RFKGJpbGx5KTogRG9lcyBub3QgZmlyZSBhbiB1cGRhdGUgbWVzc2FnZVxuICAgKi9cbiAgaW5pdCAocHJvcCwgb3B0VmFsKSB7XG4gICAgdGhpcy5fc2V0KHByb3AsIG9wdFZhbCk7XG4gIH1cblxuICAvKipcbiAgICogc2V0dGVyIGZvciB0aGUgc3RhdGVcbiAgICogQHBhcmFtIHByb3Age3N0cmluZ3xPYmplY3R9IFRoZSBwcm9wZXJ0eSB0byBzZXRcbiAgICogQHBhcmFtIG9wdFZhbCBPcHRpb25hbCwgaWYgcHJvcCBpcyBhIHtzdHJpbmd9LCBpdCB3aWxsIGFzc2lnbiB0aGUgdmFsdWUgdG8gdGhhdCBwcm9wZXJ0eVxuICAgKi9cbiAgc2V0IChwcm9wLCBvcHRWYWwpIHtcbiAgICB0aGlzLl9zZXQocHJvcCwgb3B0VmFsKTtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldHRlciBmb3IgdGhlIHN0YXRlIGVuYWJsZXMgeW91IHRvIHVwZGF0ZSBhIHNpbmdsZSBwcm9wZXJ0eSwgb3IgY29tcGxldGUgc3RhdGVcbiAgICogZGVwZW5kaW5nIG9uIHRoZSBhcmd1bWVudHMgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSBwcm9wIHtzdHJpbmd8T2JqZWN0fSBUaGUgcHJvcGVydHkgdG8gc2V0XG4gICAqIEBwYXJhbSBvcHRWYWwgSWYgcHJvcCBpcyBhIHtzdHJpbmd9LCBwcm92aWRlIGl0cyB2YWx1ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NldCAocHJvcCwgb3B0VmFsKSB7XG4gICAgaWYgKG9wdFZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9zdGF0ZSA9IHByb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0YXRlW3Byb3BdID0gb3B0VmFsO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSAoZGF0YSkge1xuICAgIHRoaXMuX3N0YXRlID0gZGF0YTtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGEgcHJvcGVydGllcyB2YWx1ZSBmcm9tIHRoZSBzdGF0ZVxuICAgKiBJZiBubyBwcm9wZXJ0eSBwcm92aWRlZCwgcmV0dXJuIHRoZSBmdWxsIHN0YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRQcm9wIG9wdGlvbmFsIHByb3BlcnR5IHRvIHJldHJpZXZlXG4gICAqL1xuICBnZXQgKG9wdFByb3ApIHtcbiAgICBpZiAob3B0UHJvcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zdGF0ZVtvcHRQcm9wXTtcbiAgfVxuXG4gIGhhcyAocHJvcCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZVtwcm9wXSAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgYXNKU09OICgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gIH1cbn1cbiIsIi8qKlxuICogTW9kZWwgZm9yIHRoZSBhbmFseXRpY3MgZXZlbnQgdHlwZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmFseXRpY3NFdmVudCB7XG4gIGNvbnN0cnVjdG9yICh0eXBlLCBsYWJlbCkge1xuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIGV2ZW50IHRvIHJlcG9ydFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5ldmVudFR5cGUgPSB0eXBlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBvcHRpb25hbCBsYWJlbCB0byBiZSBwcm92aWRlZCBmb3IgdGhlIGV2ZW50XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgcHJvdmlkZWQgb3B0aW9ucyB0byB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgQWRkaXRpb25hbCBvcHRpb25zIGZvciB0aGUgZXZlbnRcbiAgICovXG4gIGFkZE9wdGlvbnMgKG9wdGlvbnMpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZXZlbnQgaW4gdGhlIGFwaSBmb3JtYXQsIHR5cGljYWxseSBmb3IgcmVwb3J0aW5nIHRvIHRoZSBhcGlcbiAgICovXG4gIHRvQXBpRXZlbnQgKCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQW5hbHl0aWNzUmVwb3J0ZXIgKi9cblxuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4vYW5hbHl0aWNzZXZlbnQnO1xuaW1wb3J0IHsgQW5zd2Vyc0FuYWx5dGljc0Vycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgeyBBTkFMWVRJQ1NfQkFTRV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IEh0dHBSZXF1ZXN0ZXIgZnJvbSAnLi4vaHR0cC9odHRwcmVxdWVzdGVyJztcblxuLyoqXG4gKiBDbGFzcyBmb3IgcmVwb3J0aW5nIGFuYWx5dGljcyBldmVudHMgdG8gdGhlIHNlcnZlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmFseXRpY3NSZXBvcnRlciB7XG4gIGNvbnN0cnVjdG9yIChjb3JlLCBleHBlcmllbmNlS2V5LCBleHBlcmllbmNlVmVyc2lvbiwgYnVzaW5lc3NJZCwgZ2xvYmFsT3B0aW9ucyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIGludGVybmFsIGJ1c2luZXNzIGlkZW50aWZpZXIgdXNlZCBmb3IgcmVwb3J0aW5nXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9idXNpbmVzc0lkID0gYnVzaW5lc3NJZDtcblxuICAgIC8qKlxuICAgICAqIE9wdGlvbnMgdG8gaW5jbHVkZSB3aXRoIGV2ZXJ5IGFuYWx5dGljIGV2ZW50IHJlcG9ydGVkIHRvIHRoZSBzZXJ2ZXJcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZ2xvYmFsT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGdsb2JhbE9wdGlvbnMsIHsgZXhwZXJpZW5jZUtleSB9KTtcblxuICAgIGlmIChleHBlcmllbmNlVmVyc2lvbikge1xuICAgICAgdGhpcy5fZ2xvYmFsT3B0aW9ucy5leHBlcmllbmNlVmVyc2lvbiA9IGV4cGVyaWVuY2VWZXJzaW9uO1xuICAgIH1cblxuICAgIC8vIGxpc3RlbiB0byBxdWVyeSBpZCB1cGRhdGVzXG4gICAgY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBTdG9yYWdlS2V5cy5RVUVSWV9JRCwgaWQgPT4gdGhpcy5zZXRRdWVyeUlkKGlkKSk7XG4gIH1cblxuICBzZXRRdWVyeUlkIChxdWVyeUlkKSB7XG4gICAgdGhpcy5fZ2xvYmFsT3B0aW9ucy5xdWVyeUlkID0gcXVlcnlJZDtcbiAgfVxuXG4gIHJlcG9ydCAoZXZlbnQpIHtcbiAgICBpZiAoIShldmVudCBpbnN0YW5jZW9mIEFuYWx5dGljc0V2ZW50KSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNBbmFseXRpY3NFcnJvcignVHJpZWQgdG8gc2VuZCBpbnZhbGlkIGFuYWx5dGljcyBldmVudCcsIGV2ZW50KTtcbiAgICB9XG5cbiAgICBldmVudC5hZGRPcHRpb25zKHRoaXMuX2dsb2JhbE9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIG5ldyBIdHRwUmVxdWVzdGVyKCkuYmVhY29uKFxuICAgICAgYCR7QU5BTFlUSUNTX0JBU0VfVVJMfS9yZWFsdGltZWFuYWx5dGljcy9kYXRhL2Fuc3dlcnMvJHt0aGlzLl9idXNpbmVzc0lkfWAsXG4gICAgICB7XG4gICAgICAgICdkYXRhJzogZXZlbnQudG9BcGlFdmVudCgpXG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTW9kdWxlRGF0YSAqL1xuXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50ZW1pdHRlci9ldmVudGVtaXR0ZXInO1xuXG4vKipcbiAqIE1vZHVsZURhdGEgaXMgdXNlZCBhcyBhIGdlbmVyaWMgbW9kZWwgZm9yIFN0b3JhZ2UuXG4gKiBUeXBpY2FsbHkgYW4gaW5zdGFuY2Ugb2YgTW9kdWxlRGF0YSBwb3dlcnMgYSBzaW5nbGUgY29tcG9uZW50LlxuXG4gKiBBIGRhdGEgbW9kZWwgdGhhdCBleHBvc2VzIGFuIGV2ZW50IGVtaXR0ZXIgaW50ZXJmYWNlLlxuICogQGV4dGVuZHMgRXZlbnRFbWl0dGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZHVsZURhdGEgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoaWQsIGRhdGEgPSB7fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLl9pZCA9IGlkO1xuICAgIHRoaXMuX2hpc3RvcnkgPSBbXTtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB0aGlzLnNldChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXBsYWNlcyB0aGUgY3VycmVudGx5IGhlbGQgZGF0YSB3aXRoIHRoZSBnaXZlbiBkYXRhXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSB0aGUgZGF0YSB0byByZXBsYWNlIHRoZSBjdXJyZW50IGRhdGFcbiAgICovXG4gIHNldCAoZGF0YSkge1xuICAgIHRoaXMuY2FwdHVyZVByZXZpb3VzKCk7XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkoZGF0YSkgfHwgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoICE9PSBPYmplY3Qua2V5cyh0aGlzLl9kYXRhKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLl9kYXRhKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBmb3Igc2hhbGxvdyBlcXVhbGl0eVxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGRhdGEpKSB7XG4gICAgICBpZiAodGhpcy5fZGF0YVtrZXldICE9PSBkYXRhW2tleV0pIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5fZGF0YSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjYXB0dXJlUHJldmlvdXMgKCkge1xuICAgIGlmICh0aGlzLl9oaXN0b3J5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2hpc3RvcnkgPSBbXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faGlzdG9yeS5sZW5ndGggKyAxID4gNSkge1xuICAgICAgdGhpcy5faGlzdG9yeS5zaGlmdCgpO1xuICAgIH1cblxuICAgIC8vIElmIGRhdGEgaXMgZXZlciB1bmRlZmluZWQsIHdlIGRlZmF1bHQgdG8gZW1wdHkgb2JqZWN0XG4gICAgdGhpcy5faGlzdG9yeS5wdXNoKEpTT04uc3RyaW5naWZ5KHRoaXMuX2RhdGEgfHwge30pKTtcbiAgfVxuXG4gIHVuZG8gKCkge1xuICAgIGxldCBwcmV2aW91cyA9IHt9O1xuICAgIGlmICh0aGlzLl9wcmV2aW91cy5sZW5ndGggPiAwKSB7XG4gICAgICBwcmV2aW91cyA9IEpTT04ucGFyc2UodGhpcy5fcHJldmlvdXMucG9wKCkpO1xuICAgIH1cblxuICAgIHRoaXMuX2RhdGEuc2V0KHByZXZpb3VzKTtcbiAgfVxuXG4gIHJhdyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEdsb2JhbFN0b3JhZ2UgKi9cblxuaW1wb3J0IE1vZHVsZURhdGEgZnJvbSAnLi9tb2R1bGVkYXRhJztcbmltcG9ydCB7IEFuc3dlcnNTdG9yYWdlRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBTdG9yYWdlIGlzIGEgY29udGFpbmVyIGFyb3VuZCBhcHBsaWNhdGlvbiBzdGF0ZS5cbiAqIEl0IGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBDUlVEIG9wZXJhdGlvbnMgYXMgd2VsbCBhcyBsaXN0ZW5pbmdcbiAqIGZvciBzdGF0ZWZ1bCBjaGFuZ2VzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWxTdG9yYWdlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXIgPSB7fTtcbiAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGRhdGEgaW4gc3RvcmFnZSB3aXRoIHRoZSBnaXZlbiBrZXkgdG8gdGhlIHByb3ZpZGVkIGRhdGEsXG4gICAqIGNvbXBsZXRlbHkgb3ZlcndyaXRpbmcgYW55IGV4aXN0aW5nIGRhdGEuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdGhlIHN0b3JhZ2Uga2V5IHRvIHNldFxuICAgKiBAcGFyYW0geyp9IGRhdGEgdGhlIGRhdGEgdG8gc2V0XG4gICAqL1xuICBzZXQgKGtleSwgZGF0YSkge1xuICAgIHRoaXMuX2luaXREYXRhQ29udGFpbmVyKGtleSwgZGF0YSk7XG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltrZXldLnNldChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYWxsIGtleS92YWx1ZSBwYWlycyBpbiB0aGUgcHJvdmlkZWQgbWFwIHRvIHRoZSBzdG9yYWdlXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUga2V5L3ZhbHVlIHBhaXJzIHRvIHNldCBpbiB0aGUgc3RvcmFnZVxuICAgKi9cbiAgc2V0QWxsIChkYXRhKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XG4gICAgICB0aGlzLnNldChrZXksIHZhbCk7XG4gICAgfVxuICB9XG5cbiAgX2luaXREYXRhQ29udGFpbmVyIChrZXksIGRhdGEpIHtcbiAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQgfHwga2V5ID09PSBudWxsIHx8IHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc1N0b3JhZ2VFcnJvcignSW52YWxpZCBzdG9yYWdlIGtleSBwcm92aWRlZCcsIGtleSwgZGF0YSk7XG4gICAgfVxuICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQgfHwgZGF0YSA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNTdG9yYWdlRXJyb3IoJ05vIGRhdGEgcHJvdmlkZWQnLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltrZXldID0gbmV3IE1vZHVsZURhdGEoa2V5KTtcbiAgICAgIHRoaXMuX2FwcGx5RnV0dXJlTGlzdGVuZXJzKGtleSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3RhdGUgKG1vZHVsZUlkKSB7XG4gICAgaWYgKHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0ucmF3KCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0QWxsIChrZXkpIHtcbiAgICBjb25zdCBkYXRhID0gW107XG4gICAgZm9yIChjb25zdCBkYXRhS2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuX21vZHVsZURhdGFDb250YWluZXIpKSB7XG4gICAgICBpZiAoZGF0YUtleS5zdGFydHNXaXRoKGtleSkgJiYgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltkYXRhS2V5XS5yYXcoKSAhPT0gbnVsbCkge1xuICAgICAgICBkYXRhLnB1c2godGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltkYXRhS2V5XS5yYXcoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgZGF0YSBpbiBzdG9yYWdlIHdpdGggdGhlIGdpdmVuIGtleSB0byB0aGUgcHJvdmlkZWQgZGF0YSxcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSB0aGUgc3RvcmFnZSBrZXkgdG8gZGVsZXRlXG4gICAqL1xuICBkZWxldGUgKGtleSkge1xuICAgIC8vIE5vdGU6IERvIHdlIG5lZWQgdG8gY2xlYW4gdXAgbGlzdGVuZXJzIGhlcmU/XG4gICAgZGVsZXRlIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJba2V5XTtcbiAgfVxuXG4gIG9uIChldnQsIG1vZHVsZUlkLCBjYikge1xuICAgIGxldCBtb2R1bGVEYXRhID0gdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF07XG4gICAgaWYgKG1vZHVsZURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdID0gW107XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0ucHVzaCh7XG4gICAgICAgIGV2ZW50OiBldnQsXG4gICAgICAgIGNiOiBjYlxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5vbihldnQsIGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9mZiAoZXZ0LCBtb2R1bGVJZCwgY2IpIHtcbiAgICBsZXQgbW9kdWxlRGF0YSA9IHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdO1xuICAgIGlmIChtb2R1bGVEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXS5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0ub2ZmKGV2dCwgY2IpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2FwcGx5RnV0dXJlTGlzdGVuZXJzIChtb2R1bGVJZCkge1xuICAgIGxldCBmdXR1cmVzID0gdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXTtcbiAgICBpZiAoIWZ1dHVyZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZ1dHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBmdXR1cmUgPSBmdXR1cmVzW2ldO1xuICAgICAgdGhpcy5vbihmdXR1cmUuZXZlbnQsIG1vZHVsZUlkLCBmdXR1cmUuY2IpO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2hBcGkgfSBmcm9tICcuL3NlYXJjaC9zZWFyY2hhcGknO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBbmFseXRpY3NSZXBvcnRlciB9IGZyb20gJy4vYW5hbHl0aWNzL2FuYWx5dGljc3JlcG9ydGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kdWxlRGF0YSB9IGZyb20gJy4vc3RvcmFnZS9tb2R1bGVkYXRhJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZS9nbG9iYWxzdG9yYWdlJztcbiIsIi8qKiBAbW9kdWxlIENvbXBvbmVudCAqL1xuXG5pbXBvcnQgeyBSZW5kZXJlcnMgfSBmcm9tICcuLi9yZW5kZXJpbmcvY29uc3QnO1xuXG5pbXBvcnQgRE9NIGZyb20gJy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0YXRlIGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgQW5hbHl0aWNzUmVwb3J0ZXIgfSBmcm9tICcuLi8uLi9jb3JlJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGlzIGFuIGFic3RyYWN0aW9uIHRoYXQgZW5jYXBzdWxhdGVzIHN0YXRlLCBiZWhhdmlvcixcbiAqIGFuZCB2aWV3IGZvciBhIHBhcnRpY3VsYXIgY2h1bmsgb2YgZnVuY3Rpb25hbGl0eSBvbiB0aGUgcGFnZS5cbiAqXG4gKiBUaGUgQVBJIGV4cG9zZXMgZXZlbnQgbGlmZSBjeWNsZSBob29rcyBmb3Igd2hlbiB0aGluZ3MgYXJlIHJlbmRlcmVkLFxuICogbW91bnRlZCwgY3JlYXRlZCwgZXRjLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgdGhpcy5tb2R1bGVJZCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBVbmlxdWUgbmFtZSBvZiB0aGlzIGNvbXBvbmVudCBpbnN0YW5jZVxuICAgICAqIFVzZWQgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBvdGhlciBjb21wb25lbnRzIG9mIHRoZSBzYW1lIHR5cGVcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubmFtZSA9IGNvbmZpZy5uYW1lIHx8IHRoaXMuY29uc3RydWN0b3IudHlwZTtcblxuICAgIC8qKlxuICAgICAqIENhY2hlIHRoZSBvcHRpb25zIHNvIHRoYXQgd2UgY2FuIHByb3BvZ2F0ZSBwcm9wZXJseSB0byBjaGlsZCBjb21wb25lbnRzXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpZGVudGlmaWVyIHVzZWQgdG8gY2xhc3NpZnkgdGhlIHR5cGUgb2YgY29tcG9uZW50LlxuICAgICAqIFRoZSBjb21wb25lbnQgbWFuYWdlciB1c2VzIHRoaXMgaW5mb3JtYXRpb24gaW4gb3JkZXIgdG8gcGVyc2lzdCBhbmQgb3JnYW5pemUgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtzdHJpbmd8Q29tcG9uZW50VHlwZX1cbiAgICAgKi9cbiAgICB0aGlzLl90eXBlID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIHBhcmVudCBjb21wb25lbnQsIGlmIGV4aXN0c1xuICAgICAqIEB0eXBlIHtDb21wb25lbnR9XG4gICAgICovXG4gICAgdGhpcy5fcGFyZW50Q29udGFpbmVyID0gY29uZmlnLnBhcmVudENvbnRhaW5lciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBjb250YWluZXIgZm9yIGFsbCB0aGUgY2hpbGQgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtDb21wb25lbnRbXX1cbiAgICAgKi9cbiAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN0YXRlIChkYXRhKSBvZiB0aGUgY29tcG9uZW50IHRvIGJlIHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9zdGF0ZSA9IG5ldyBTdGF0ZShjb25maWcuc3RhdGUpO1xuXG4gICAgLyoqXG4gICAgICogVE9ETyhiaWxseSkgVGhpcyBzaG91bGQgYmUgJ3NlcnZpY2VzJ1xuICAgICAqL1xuICAgIHRoaXMuY29yZSA9IHN5c3RlbUNvbmZpZy5jb3JlIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IG1hbmFnZXIsIHdoaWNoIGNvbnRhaW5zIGFsbCBvZiB0aGUgY29tcG9uZW50IGNsYXNzZXNcbiAgICAgKiBlbGlnaWJsZSB0byBiZSBjcmVhdGVkXG4gICAgICogQHR5cGUge0NvbXBvbmVudE1hbmFnZXJ9XG4gICAgICovXG4gICAgdGhpcy5jb21wb25lbnRNYW5hZ2VyID0gc3lzdGVtQ29uZmlnLmNvbXBvbmVudE1hbmFnZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBhbmFseXRpY3MgcmVwb3J0ZXIsIHVzZWQgdG8gcmVwb3J0IGV2ZW50cyBmb3IgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7QW5hbHl0aWNzUmVwb3J0ZXJ9XG4gICAgICovXG4gICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlciA9IHN5c3RlbUNvbmZpZy5hbmFseXRpY3NSZXBvcnRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogT3B0aW9ucyB0byBpbmNsdWRlIHdpdGggYWxsIGFuYWx5dGljIGV2ZW50cyBzZW50IGJ5IHRoaXMgY29tcG9uZW50XG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FuYWx5dGljc09wdGlvbnMgPSBjb25maWcuYW5hbHl0aWNzT3B0aW9ucyB8fCB7fTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBET00gbm9kZSB0aGF0IHRoZSBjb21wb25lbnQgd2lsbCBiZSBhcHBlbmRlZCB0byB3aGVuIG1vdW50ZWQvcmVuZGVyZWQuXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGlmICh0aGlzLl9wYXJlbnRDb250YWluZXIgPT09IG51bGwpIHtcbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRhaW5lciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGBjb250YWluZXJgIG9wdGlvbiBmb3IgY29tcG9uZW50IGNvbmZpZ3VyYXRpb24uIE11c3QgYmUgb2YgdHlwZSBgc3RyaW5nYC4nKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IERPTS5xdWVyeShjb25maWcuY29udGFpbmVyKSB8fCBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb250YWluZXIgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Q29udGFpbmVyLCBjb25maWcuY29udGFpbmVyKTtcblxuICAgICAgLy8gSWYgd2UgaGF2ZSBhIHBhcmVudCwgYW5kIHRoZSBjb250YWluZXIgaXMgbWlzc2luZyBmcm9tIHRoZSBET00sXG4gICAgICAvLyB3ZSBjb25zdHJ1Y3QgdGhlIGNvbnRhaW5lciBhbmQgYXBwZW5kIGl0IHRvIHRoZSBwYXJlbnRcbiAgICAgIGlmICh0aGlzLl9jb250YWluZXIgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gRE9NLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IGNvbmZpZy5jb250YWluZXIuc3Vic3RyaW5nKDEsIGNvbmZpZy5jb250YWluZXIubGVuZ3RoKVxuICAgICAgICB9KTtcbiAgICAgICAgRE9NLmFwcGVuZCh0aGlzLl9wYXJlbnRDb250YWluZXIsIHRoaXMuX2NvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBjb250YWluZXIgRE9NIG5vZGU6ICcgKyBjb25maWcuY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIGN1c3RvbSBjbGFzcyB0byBiZSBhcHBsaWVkIHRvIHt0aGlzLl9jb250YWluZXJ9IG5vZGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2NsYXNzTmFtZSA9IGNvbmZpZy5jbGFzcyB8fCAnY29tcG9uZW50JztcblxuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIHJlbmRlciBmdW5jdGlvbiB0byBiZSB1c2VkIGluc3RlYWQgb2YgdXNpbmcgdGhlIGRlZmF1bHQgcmVuZGVyZXJcbiAgICAgKiBAdHlwZSB7UmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyID0gY29uZmlnLnJlbmRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGRlZmF1bHQge1JlbmRlcmVyfSB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgcmVuZGVyaW5nIHRoZSB0ZW1wbGF0ZVxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXJlciA9IHN5c3RlbUNvbmZpZy5yZW5kZXJlciB8fCBSZW5kZXJlcnMuSGFuZGxlYmFycztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSBzdHJpbmcgdG8gdXNlIGZvciByZW5kZXJpbmcgdGhlIGNvbXBvbmVudFxuICAgICAqIElmIHRoaXMgaXMgbGVmdCBlbXB0eSwgd2UgbG9va3VwIHRoZSB0ZW1wbGF0ZSB0aGUgYmFzZSB0ZW1wbGF0ZXMgdXNpbmcgdGhlIHRlbXBsYXRlTmFtZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGUgPSBjb25maWcudGVtcGxhdGUgPyB0aGlzLl9yZW5kZXJlci5jb21waWxlKGNvbmZpZy50ZW1wbGF0ZSkgOiBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlTmFtZSB0byB1c2UgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50LlxuICAgICAqIFRoaXMgaXMgb25seSB1c2VkIGlmIF90ZW1wbGF0ZSBpcyBlbXB0eS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IGNvbmZpZy50ZW1wbGF0ZU5hbWUgfHwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0VGVtcGxhdGVOYW1lKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCBzdGF0ZSBpbmRpY2F0aW5nIHdoZXRoZXIgb3Igbm90IHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbW91bnRlZCB0byB0aGUgRE9NXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2ssIHRoYXRzIHVzZWQgdG8gdHJhbnNmb3JtIHRoZSBpbnRlcm5hbCBkYXRhXG4gICAgICogbW9kZWxzIG9mIHRoZSBjb21wb25lbnRzLCBiZWZvcmUgaXQgZ2V0cyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQgc3RhdGUuXG4gICAgICogQnkgZGVmYXVsdCwgbm8gdHJhbnNmb3JtYXRpb24gaGFwcGVucy5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy50cmFuc2Zvcm1EYXRhID0gY29uZmlnLnRyYW5zZm9ybURhdGEgfHwgdGhpcy50cmFuc2Zvcm1EYXRhIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIGEgY29tcG9uZW50IGlzIGNyZWF0ZWQuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMub25DcmVhdGUgPSBjb25maWcub25DcmVhdGVPdmVycmlkZSB8fCB0aGlzLm9uQ3JlYXRlIHx8IGZ1bmN0aW9uICgpIHt9O1xuICAgIHRoaXMub25DcmVhdGUgPSB0aGlzLm9uQ3JlYXRlLmJpbmQodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnQgaXMgTW91bnRlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vbk1vdW50ID0gY29uZmlnLm9uTW91bnRPdmVycmlkZSB8fCB0aGlzLm9uTW91bnQgfHwgZnVuY3Rpb24gKCkge307XG4gICAgdGhpcy5vbk1vdW50ID0gdGhpcy5vbk1vdW50LmJpbmQodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnRzIHN0YXRlIGlzIHVwZGF0ZWQuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMub25VcGRhdGUgPSBjb25maWcub25VcGRhdGVPdmVycmlkZSB8fCB0aGlzLm9uVXBkYXRlIHx8IGZ1bmN0aW9uICgpIHsgfTtcbiAgICB0aGlzLm9uVXBkYXRlID0gdGhpcy5vblVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogQSB1c2VyIHByb3ZpZGVkIG9uQ3JlYXRlIGNhbGxiYWNrXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMudXNlck9uQ3JlYXRlID0gY29uZmlnLm9uQ3JlYXRlIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogQSB1c2VyIHByb3ZpZGVkIG9uTW91bnQgY2FsbGJhY2tcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy51c2VyT25Nb3VudCA9IGNvbmZpZy5vbk1vdW50IHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogQSB1c2VyIHByb3ZpZGVkIG9uVXBkYXRlIGNhbGxiYWNrXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMudXNlck9uVXBkYXRlID0gY29uZmlnLm9uVXBkYXRlIHx8IGZ1bmN0aW9uICgpIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdkZWZhdWx0JztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdDb21wb25lbnQnO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaW5pdCAob3B0cykge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnNldFN0YXRlKG9wdHMuZGF0YSB8fCBvcHRzLnN0YXRlIHx8IHt9KTtcbiAgICAgIHRoaXMub25DcmVhdGUoKTtcbiAgICAgIHRoaXMudXNlck9uQ3JlYXRlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0Vycm9yIGluaXRpYWxpemluZyBjb21wb25lbnQnLFxuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnR5cGUsXG4gICAgICAgIGUpO1xuICAgIH1cblxuICAgIHRoaXMuX3N0YXRlLm9uKCd1cGRhdGUnLCAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLm9uVXBkYXRlKCk7XG4gICAgICAgIHRoaXMudXNlck9uVXBkYXRlKCk7XG4gICAgICAgIHRoaXMudW5Nb3VudCgpO1xuICAgICAgICB0aGlzLm1vdW50KCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICAgJ0Vycm9yIHVwZGF0aW5nIGNvbXBvbmVudCcsXG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci50eXBlLFxuICAgICAgICAgIGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgRE9NLmFkZENsYXNzKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB7IF9jb25maWc6IHRoaXMuX2NvbmZpZyB9LCBkYXRhKTtcbiAgICB0aGlzLl9zdGF0ZS5zZXQobmV3U3RhdGUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0U3RhdGUgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuZ2V0KHByb3ApO1xuICB9XG5cbiAgaGFzU3RhdGUgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuaGFzKHByb3ApO1xuICB9XG5cbiAgdHJhbnNmb3JtRGF0YSAoZGF0YSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYWRkQ2hpbGQgKGRhdGEsIHR5cGUsIG9wdHMpIHtcbiAgICBsZXQgY2hpbGRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKFxuICAgICAgdHlwZSxcbiAgICAgIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgIHBhcmVudENvbnRhaW5lcjogdGhpcy5fY29udGFpbmVyLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9LCBvcHRzIHx8IHt9LCB7XG4gICAgICAgIF9wYXJlbnRPcHRzOiB0aGlzLl9jb25maWdcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGRDb21wb25lbnQpO1xuICAgIHJldHVybiBjaGlsZENvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbm1vdW50IGFuZCByZW1vdmUgdGhpcyBjb21wb25lbnQgYW5kIGl0cyBjaGlsZHJlbiBmcm9tIHRoZSBsaXN0XG4gICAqIG9mIGFjdGl2ZSBjb21wb25lbnRzXG4gICAqL1xuICByZW1vdmUgKCkge1xuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goYyA9PiBjLnJlbW92ZSgpKTtcbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIucmVtb3ZlKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgcmVuZGVyIG1ldGhvZCB0byBiZSB1c2VkIGZvciByZW5kZXJpbmcgdGhlIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZW5kZXJcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc2V0UmVuZGVyIChyZW5kZXIpIHtcbiAgICB0aGlzLl9yZW5kZXIgPSByZW5kZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSByZW5kZXJlciBmb3IgdGhlIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge1JlbmRlcmVyVHlwZX0gcmVuZGVyZXJcbiAgICovXG4gIHNldFJlbmRlcmVyIChyZW5kZXJlcikge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gUmVuZGVyZXJzW3JlbmRlcmVyXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0ZW1wbGF0ZSBmb3IgdGhlIGNvbXBvbmVudCB0byB1c2Ugd2hlbiByZW5kZXJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gICAqL1xuICBzZXRUZW1wbGF0ZSAodGVtcGxhdGUpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZSA9IHRoaXMuX3JlbmRlcmVyLmNvbXBpbGUodGVtcGxhdGUpO1xuICB9XG5cbiAgdW5Nb3VudCAoKSB7XG4gICAgaWYgKCF0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgY2hpbGQudW5Nb3VudCgpO1xuICAgIH0pO1xuXG4gICAgRE9NLmVtcHR5KHRoaXMuX2NvbnRhaW5lcik7XG4gICAgdGhpcy5fY2hpbGRyZW4uZm9yRWFjaChjID0+IGMucmVtb3ZlKCkpO1xuICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG4gICAgdGhpcy5vblVuTW91bnQoKTtcbiAgfVxuXG4gIG1vdW50ICgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYmVmb3JlTW91bnQoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIERPTS5hcHBlbmQodGhpcy5fY29udGFpbmVyLCB0aGlzLnJlbmRlcih0aGlzLl9zdGF0ZS5hc0pTT04oKSkpO1xuXG4gICAgLy8gUHJvY2VzcyB0aGUgRE9NIHRvIGRldGVybWluZSBpZiB3ZSBzaG91bGQgY3JlYXRlXG4gICAgLy8gaW4tbWVtb3J5IHN1Yi1jb21wb25lbnRzIGZvciByZW5kZXJpbmdcbiAgICBjb25zdCBkb21Db21wb25lbnRzID0gRE9NLnF1ZXJ5QWxsKHRoaXMuX2NvbnRhaW5lciwgJ1tkYXRhLWNvbXBvbmVudF06bm90KFtkYXRhLWlzLWNvbXBvbmVudC1tb3VudGVkXSknKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy50cmFuc2Zvcm1EYXRhKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5fc3RhdGUuZ2V0KCkpKSk7XG4gICAgZG9tQ29tcG9uZW50cy5mb3JFYWNoKGMgPT4gdGhpcy5fY3JlYXRlU3ViY29tcG9uZW50KGMsIGRhdGEpKTtcblxuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgY2hpbGQubW91bnQoKTtcbiAgICB9KTtcblxuICAgIC8vIEF0dGFjaCBhbmFseXRpY3MgaG9va3MgYXMgbmVjZXNzYXJ5XG4gICAgaWYgKHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIpIHtcbiAgICAgIGxldCBkb21Ib29rcyA9IERPTS5xdWVyeUFsbCh0aGlzLl9jb250YWluZXIsICdbZGF0YS1ldmVudHR5cGVdOm5vdChbZGF0YS1pcy1hbmFseXRpY3MtYXR0YWNoZWRdKScpO1xuICAgICAgZG9tSG9va3MuZm9yRWFjaCh0aGlzLl9jcmVhdGVBbmFseXRpY3NIb29rLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy5vbk1vdW50KHRoaXMpO1xuICAgIHRoaXMudXNlck9uTW91bnQodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZW5kZXIgdGhlIHRlbXBsYXRlIHVzaW5nIHRoZSB7UmVuZGVyZXJ9IHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgYW5kIHRlbXBsYXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHJlbmRlciAoZGF0YSA9IHRoaXMuX3N0YXRlLmdldCgpKSB7XG4gICAgdGhpcy5iZWZvcmVSZW5kZXIoKTtcbiAgICAvLyBUZW1wb3JhcnkgZml4IGZvciBwYXNzaW5nIGltbXV0YWJsZSBkYXRhIHRvIHRyYW5zZm9ybURhdGEoKS5cbiAgICBkYXRhID0gdGhpcy50cmFuc2Zvcm1EYXRhKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpKTtcblxuICAgIGxldCBodG1sID0gJyc7XG4gICAgLy8gVXNlIGVpdGhlciB0aGUgY3VzdG9tIHJlbmRlciBmdW5jdGlvbiBvciB0aGUgaW50ZXJuYWwgcmVuZGVyZXJcbiAgICAvLyBkZXBlbmRhbnQgb24gdGhlIGNvbXBvbmVudCBjb25maWd1cmF0aW9uXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGh0bWwgPSB0aGlzLl9yZW5kZXIoZGF0YSk7XG4gICAgICBpZiAodHlwZW9mIGh0bWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVuZGVyIG1ldGhvZCBtdXN0IHJldHVybiBIVE1MIGFzIHR5cGUge3N0cmluZ30nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVuZGVyIHRoZSBleGlzdGluZyB0ZW1wbGF0ZXMgYXMgYSBzdHJpbmdcbiAgICAgIGh0bWwgPSB0aGlzLl9yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgICB0ZW1wbGF0ZTogdGhpcy5fdGVtcGxhdGUsXG4gICAgICAgIHRlbXBsYXRlTmFtZTogdGhpcy5fdGVtcGxhdGVOYW1lXG4gICAgICB9LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvLyBXZSBjcmVhdGUgYW4gSFRNTCBEb2N1bWVudCBmcmFnbWVudCB3aXRoIHRoZSByZW5kZXJlZCBzdHJpbmdcbiAgICAvLyBTbyB0aGF0IHdlIGNhbiBxdWVyeSBpdCBmb3IgcHJvY2Vzc2luZyBvZiBzdWIgY29tcG9uZW50c1xuICAgIGxldCBlbCA9IERPTS5jcmVhdGUoaHRtbCk7XG5cbiAgICB0aGlzLmFmdGVyUmVuZGVyKCk7XG4gICAgcmV0dXJuIGVsLmlubmVySFRNTDtcbiAgfVxuXG4gIF9jcmVhdGVTdWJjb21wb25lbnQgKGRvbUNvbXBvbmVudCwgZGF0YSkge1xuICAgIGRvbUNvbXBvbmVudC5kYXRhc2V0LmlzQ29tcG9uZW50TW91bnRlZCA9IHRydWU7XG4gICAgY29uc3QgZGF0YXNldCA9IGRvbUNvbXBvbmVudC5kYXRhc2V0O1xuICAgIGNvbnN0IHR5cGUgPSBkYXRhc2V0LmNvbXBvbmVudDtcbiAgICBjb25zdCBwcm9wID0gZGF0YXNldC5wcm9wO1xuICAgIGxldCBvcHRzID0gZGF0YXNldC5vcHRzID8gSlNPTi5wYXJzZShkYXRhc2V0Lm9wdHMpIDoge307XG5cbiAgICBsZXQgY2hpbGREYXRhID0gZGF0YVtwcm9wXSB8fCB7fTtcblxuICAgIG9wdHMgPSB7XG4gICAgICAuLi5vcHRzLFxuICAgICAgY29udGFpbmVyOiBkb21Db21wb25lbnRcbiAgICB9O1xuXG4gICAgLy8gVE9ETyhiaWxseSkgUmlnaHQgbm93LCBpZiB3ZSBwcm92aWRlIGFuIGFycmF5IGFzIHRoZSBkYXRhIHByb3AsXG4gICAgLy8gdGhlIGJlaGF2aW9yIGlzIHRvIGNyZWF0ZSBtYW55IGNvbXBvbmVudHMgZm9yIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkuXG4gICAgLy8gVEhBVCBpbnRlcmZhY2UgU0hPVUxEIGNoYW5nZSB0byB1c2UgYSBkaWZmZXJlbnQgcHJvcGVydHkgdGhhdCBkZWZpbmVzXG4gICAgLy8gd2hldGhlciB0byBhcnJheSBkYXRhIHNob3VsZCBiZSB1c2VkIGZvciBhIHNpbmdsZSBjb21wb25lbnQgb3JcbiAgICAvLyB0byBjcmVhdGUgbWFueSBjb21wb25lbnRzIGZvciBlYWNoIGl0ZW0uXG4gICAgLy8gT3ZlcmxvYWRpbmcgYW5kIGhhdmluZyB0aGlzIHNpZGUgZWZmZWN0IGlzIHVuaW50dWl0aXZlIGFuZCBXUk9OR1xuICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZERhdGEpKSB7XG4gICAgICAvLyBSZW5kZXJpbmcgYSBzdWIgY29tcG9uZW50IHNob3VsZCBiZSB3aXRoaW4gdGhlIGNvbnRleHQsXG4gICAgICAvLyBvZiB0aGUgbm9kZSB0aGF0IHdlIHByb2Nlc3NlZCBpdCBmcm9tXG4gICAgICB0aGlzLmFkZENoaWxkKGNoaWxkRGF0YSwgdHlwZSwgb3B0cyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2hpbGREYXRhLnJldmVyc2UoKTtcbiAgICBjaGlsZERhdGEuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIHRoaXMuYWRkQ2hpbGQoZGF0YSwgdHlwZSwgb3B0cyk7XG4gICAgfSk7XG4gIH1cblxuICBfY3JlYXRlQW5hbHl0aWNzSG9vayAoZG9tQ29tcG9uZW50KSB7XG4gICAgZG9tQ29tcG9uZW50LmRhdGFzZXQuaXNBbmFseXRpY3NBdHRhY2hlZCA9IHRydWU7XG4gICAgY29uc3QgZGF0YXNldCA9IGRvbUNvbXBvbmVudC5kYXRhc2V0O1xuICAgIGNvbnN0IHR5cGUgPSBkYXRhc2V0LmV2ZW50dHlwZTtcbiAgICBjb25zdCBsYWJlbCA9IGRhdGFzZXQuZXZlbnRsYWJlbDtcbiAgICBjb25zdCBvcHRpb25zID0gZGF0YXNldC5ldmVudG9wdGlvbnMgPyBKU09OLnBhcnNlKGRhdGFzZXQuZXZlbnRvcHRpb25zKSA6IHt9O1xuXG4gICAgRE9NLm9uKGRvbUNvbXBvbmVudCwgJ2NsaWNrJywgZSA9PiB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBBbmFseXRpY3NFdmVudCh0eXBlLCBsYWJlbCk7XG4gICAgICBldmVudC5hZGRPcHRpb25zKHRoaXMuX2FuYWx5dGljc09wdGlvbnMpO1xuICAgICAgZXZlbnQuYWRkT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgIHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIucmVwb3J0KGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbkNyZWF0ZSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGNvbnN0cnVjdGVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvbkNyZWF0ZSAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uVXBkYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGNoYW5nZXNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uVXBkYXRlIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlUmVuZGVyIGV2ZW50IGlzIHRyaWdnZXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYmVmb3JlUmVuZGVyIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYWZ0ZXJSZW5kZXIgZXZlbnQgaXMgdHJpZ2dlcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIGFmdGVyUmVuZGVyIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25Nb3VudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFwcGVuZGVkIHRvIHRoZSBET01cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvblVuTW91bnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyByZW1vdmVkIGZyb20gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25Vbk1vdW50IChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlTW91bnQgaXMgdHJpZ2dlcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQgdG8gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYmVmb3JlTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvbkRlc3Ryb3kgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uRGVzdHJveSAoY2IpIHtcblxuICB9XG59XG4iLCIvKiogQG1vZHVsZSBOYXZpZ2F0aW9uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIFRoZSBkZWJvdW5jZSBkdXJhdGlvbiBmb3IgcmVzaXplIGV2ZW50c1xuICogQHR5cGUge251bWJlcn1cbiAqL1xuY29uc3QgUkVTSVpFX0RFQk9VTkNFID0gMTAwO1xuXG4vKipcbiAqIFRoZSBUYWIgaXMgYSBtb2RlbCB0aGF0IGlzIHVzZWQgdG8gcG93ZXIgdGhlIE5hdmlnYXRpb24gdGFicyBpbiB0aGUgdmlldy5cbiAqIEl0J3MgaW5pdGlhbGl6ZWQgdGhyb3VnaCB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50LlxuICovXG5leHBvcnQgY2xhc3MgVGFiIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSB0YWIgdGhhdCBpcyBleHBvc2VkIGZvciB0aGUgbGlua1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbCA9IGNvbmZpZy5sYWJlbDtcbiAgICBpZiAodHlwZW9mIHRoaXMubGFiZWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCdsYWJlbCBpcyBhIHJlcXVpcmVkIGNvbmZpZ3VyYXRpb24gb3B0aW9uIGZvciB0YWIuJywgJ05hdmlnYXRpb25Db21wb25lbnQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcGxldGUgVVJMLCBpbmNsdWRpbmcgdGhlIHBhcmFtc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy51cmwgPSBjb25maWcudXJsO1xuICAgIGlmICh0eXBlb2YgdGhpcy51cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCd1cmwgaXMgYSByZXF1aXJlZCBjb25maWd1cmF0aW9uIG9wdGlvbiBmb3IgdGFiLicsICdOYXZpZ2F0aW9uQ29tcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlcnZlcnNpZGUgdmVydGljYWwgY29uZmlnIGlkIHRoYXQgdGhpcyBpcyByZWZlcmVuY2VkIHRvLlxuICAgICAqIEJ5IHByb3ZpZGluZyB0aGlzLCBlbmFibGVzIGR5bmFtaWMgc29ydGluZyBiYXNlZCBvbiByZXN1bHRzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5jb25maWdJZCA9IGNvbmZpZy5jb25maWdJZCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhc2UgVVJMIHVzZWQgZm9yIGNvbnN0cnVjdGluZyB0aGUgVVJMIHdpdGggcGFyYW1zXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmJhc2VVcmwgPSBjb25maWcudXJsO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHNob3cgdGhpcyB0YWIgZmlyc3QgaW4gdGhlIG9yZGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc0ZpcnN0ID0gY29uZmlnLmlzRmlyc3QgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRvIGFwcGx5IGEgc3BlY2lhbCBjbGFzcyB0byB0aGVcbiAgICAgKiBtYXJrdXAgdG8gZGV0ZXJtaW5lIGlmIGl0J3MgYW4gYWN0aXZlIHRhYlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNBY3RpdmUgPSBjb25maWcuaXNBY3RpdmUgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogZnJvbSB3aWxsIGNvbnN0cnVjdCBhIG1hcCBvZiBjb25maWdJZCB0byB7VGFifSBmcm9tXG4gICAqIGEgY29uZmlndXJhdGlvbiBmaWxlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0YWJzQ29uZmlnIHRoZSBjb25maWd1cmF0aW9uIHRvIHVzZVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHRhYnNDb25maWcpIHtcbiAgICBsZXQgdGFicyA9IHt9O1xuICAgIC8vIFBhcnNlIHRoZSBvcHRpb25zIGFuZCBidWlsZCBvdXQgb3VyIHRhYnMgYW5kXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzQ29uZmlnLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdGFiID0gdGFic0NvbmZpZ1tpXTtcbiAgICAgIC8vIEZvciB0YWJzIHdpdGhvdXQgY29uZmlnIGlkcywgbWFwIHRoZWlyIFVSTCB0byB0aGUgY29uZmlnSURcbiAgICAgIC8vIHRvIGF2b2lkIGR1cGxpY2F0aW9uIG9mIHJlbmRlcnNcbiAgICAgIGlmICh0YWIuY29uZmlnSWQgPT09IHVuZGVmaW5lZCAmJiB0YWJzW3RhYi5jb25maWdJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YWIuY29uZmlnSWQgPSB0YWIudXJsO1xuICAgICAgfVxuXG4gICAgICB0YWJzW3RhYi5jb25maWdJZF0gPSBuZXcgVGFiKHRhYik7XG4gICAgfVxuICAgIHJldHVybiB0YWJzO1xuICB9XG59XG5cbi8qKlxuICogTmF2aWdhdGlvbkNvbXBvbmVudCBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgYnVpbGRpbmcgYSBkeW5hbWljXG4gKiBuYXZpZ2F0aW9uIHRoYXQgaXMgcG93ZXJlZCBieSB1bml2ZXJzYWwgc2VhcmNoIHVwZGF0ZXMuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gc2hvdyBvbiB0aGUgZHJvcGRvd24gbWVudSBidXR0b25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZHJvcGRvd25MYWJlbCA9IGNvbmZpZy5kcm9wZG93bkxhYmVsIHx8ICdNb3JlJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBpY29uIHRvIHNob3cgb24gdGhlIGRyb3Bkb3duIG1lbnUgYnV0dG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmRyb3Bkb3duSWNvbiA9IGNvbmZpZy5kcm9wZG93bkljb24gfHwgJ2thYm9iJztcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHJlbmRlciBhIHN0YXRpYyBuYXZpZ2F0aW9uIHdpdGggbm8gXCJtb3JlXCIgbWVudVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuc3RhdGljID0gY29uZmlnLnN0YXRpYyB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkYXRhIHN0b3JhZ2Uga2V5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuTkFWSUdBVElPTjtcblxuICAgIC8qKlxuICAgICAqIFVub3JkZXJlZCBtYXAgb2YgZWFjaCB0YWIsIGtleWVkIGJ5IFZTIGNvbmZpZ0lkXG4gICAgICogQHR5cGUge09iamVjdC48U3RyaW5nLCBPYmplY3Q+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGFicyA9IFRhYi5mcm9tKGNvbmZpZy50YWJzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcmRlciBvZiB0aGUgdGFicywgcGFyc2VkIGZyb20gY29uZmlndXJhdGlvbiBvciBVUkwuXG4gICAgICogVGhpcyBnZXRzIHVwZGF0ZWQgYmFzZWQgb24gdGhlIHNlcnZlciByZXN1bHRzXG4gICAgICogQHR5cGUge0FycmF5LjxTdHJpbmc+fSBUaGUgbGlzdCBvZiBWUyBjb25maWdJZHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RhYk9yZGVyID0gdGhpcy5nZXREZWZhdWx0VGFiT3JkZXIoY29uZmlnLnRhYnMsIHRoaXMuZ2V0VXJsUGFyYW1zKCkpO1xuXG4gICAgLyoqXG4gICAgICogQnJlYWtwb2ludHMgYXQgd2hpY2ggbmF2aWdhdGlvbiBpdGVtcyBtb3ZlIHRvIHRoZSBcIm1vcmVcIiBkcm9wZG93blxuICAgICAqIEB0eXBlIHtudW1iZXJbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX25hdkJyZWFrcG9pbnRzID0gW107XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTmF2aWdhdGlvbic7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ25hdmlnYXRpb24vbmF2aWdhdGlvbic7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgRE9NLm9uKHdpbmRvdywgJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2RlYm91bmNlVGltZXIpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGVib3VuY2VUaW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kZWJvdW5jZVRpbWVyID0gc2V0VGltZW91dCh0aGlzLnJlZml0TmF2LmJpbmQodGhpcyksIFJFU0laRV9ERUJPVU5DRSk7XG4gICAgICB9KTtcbiAgICAgIERPTS5vbih3aW5kb3csICdjbGljaycsIHRoaXMuY2hlY2tPdXRzaWRlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgdGhpcy5yZWZpdE5hdigpO1xuICAgICAgRE9NLm9uKERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb3JlJyksICdjbGljaycsIHRoaXMudG9nZ2xlTW9yZURyb3Bkb3duLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHJlZml0TmF2ICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtY29udGFpbmVyJyk7XG4gICAgY29uc3QgbW9yZUJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb3JlJyk7XG4gICAgY29uc3QgbWFpbkxpbmtzID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LWV4cGFuZGVkJyk7XG4gICAgY29uc3QgY29sbGFwc2VkTGlua3MgPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9kYWwnKTtcblxuICAgIGNvbnN0IG5hdldpZHRoID0gbW9yZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3l4dC1OYXYtaXRlbS0tbW9yZScpXG4gICAgICA/IGNvbnRhaW5lci5vZmZzZXRXaWR0aFxuICAgICAgOiBjb250YWluZXIub2Zmc2V0V2lkdGggLSBtb3JlQnV0dG9uLm9mZnNldFdpZHRoO1xuICAgIGxldCBudW1CcmVha3BvaW50cyA9IHRoaXMuX25hdkJyZWFrcG9pbnRzLmxlbmd0aDtcblxuICAgIC8vIHN1bSBjaGlsZCB3aWR0aHMgaW5zdGVhZCBvZiB1c2luZyBwYXJlbnQncyB3aWR0aCB0byBhdm9pZFxuICAgIC8vIGJyb3dzZXIgaW5jb25zaXN0ZW5jaWVzXG4gICAgbGV0IG1haW5MaW5rc1dpZHRoID0gMDtcbiAgICBmb3IgKGxldCBlbCBvZiBtYWluTGlua3MuY2hpbGRyZW4pIHtcbiAgICAgIG1haW5MaW5rc1dpZHRoICs9IGVsLm9mZnNldFdpZHRoO1xuICAgIH1cblxuICAgIGlmIChtYWluTGlua3NXaWR0aCA+IG5hdldpZHRoKSB7XG4gICAgICB0aGlzLl9uYXZCcmVha3BvaW50cy5wdXNoKG1haW5MaW5rc1dpZHRoKTtcbiAgICAgIGNvbnN0IGxhc3RMaW5rID0gbWFpbkxpbmtzLmNoaWxkcmVuLml0ZW0obWFpbkxpbmtzLmNoaWxkcmVuLmxlbmd0aCAtIDEpO1xuICAgICAgaWYgKGxhc3RMaW5rID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbGxhcHNlZExpbmtzLnByZXBlbmQobGFzdExpbmspO1xuXG4gICAgICBpZiAobW9yZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3l4dC1OYXYtaXRlbS0tbW9yZScpKSB7XG4gICAgICAgIG1vcmVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgneXh0LU5hdi1pdGVtLS1tb3JlJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChudW1CcmVha3BvaW50cyAmJiBuYXZXaWR0aCA+IHRoaXMuX25hdkJyZWFrcG9pbnRzW251bUJyZWFrcG9pbnRzIC0gMV0pIHtcbiAgICAgICAgY29uc3QgZmlyc3RMaW5rID0gY29sbGFwc2VkTGlua3MuY2hpbGRyZW4uaXRlbSgwKTtcbiAgICAgICAgaWYgKGZpcnN0TGluayA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBtYWluTGlua3MuYXBwZW5kKGZpcnN0TGluayk7XG4gICAgICAgIHRoaXMuX25hdkJyZWFrcG9pbnRzLnBvcCgpO1xuICAgICAgICBudW1CcmVha3BvaW50cy0tO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29sbGFwc2VkTGlua3MuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIG1vcmVCdXR0b24uY2xhc3NMaXN0LmFkZCgneXh0LU5hdi1pdGVtLS1tb3JlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZU1vcmVEcm9wZG93bigpO1xuICAgIGlmIChtYWluTGlua3NXaWR0aCA+IG5hdldpZHRoIHx8XG4gICAgICAobnVtQnJlYWtwb2ludHMgPiAwICYmIG5hdldpZHRoID4gdGhpcy5fbmF2QnJlYWtwb2ludHNbbnVtQnJlYWtwb2ludHMgLSAxXSkpIHtcbiAgICAgIHRoaXMucmVmaXROYXYoKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZU1vcmVEcm9wZG93biAoKSB7XG4gICAgY29uc3QgY29sbGFwc2VkID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vZGFsJyk7XG4gICAgY29sbGFwc2VkLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgIGNvbnN0IG1vcmVCdXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9yZScpO1xuICAgIG1vcmVCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICB9XG5cbiAgb3Blbk1vcmVEcm9wZG93biAoKSB7XG4gICAgY29uc3QgY29sbGFwc2VkID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vZGFsJyk7XG4gICAgY29sbGFwc2VkLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgIGNvbnN0IG1vcmVCdXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9yZScpO1xuICAgIG1vcmVCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gIH1cblxuICB0b2dnbGVNb3JlRHJvcGRvd24gKCkge1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb2RhbCcpO1xuICAgIGNvbGxhcHNlZC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICBjb25zdCBtb3JlQnV0dG9uID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vcmUnKTtcbiAgICBtb3JlQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGNvbGxhcHNlZC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKTtcbiAgfVxuXG4gIGNoZWNrT3V0c2lkZUNsaWNrIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy55eHQtTmF2LWNvbnRhaW5lcicpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZU1vcmVEcm9wZG93bigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbmNlIHRoZSBzZXJ2ZXIgZGF0YSBvbmx5IHByb3ZpZGVzIGEgbGlzdCBvZlxuICAgKiBWUyBjb25maWdJZHMsIHdlIG5lZWQgdG8gY29tcHV0ZSBhbmQgdHJhbnNmb3JtXG4gICAqIHRoZSBkYXRhIGludG8gdGhlIHByb3BlciBmb3JtYXQgZm9yIHJlbmRlcmluZy5cbiAgICpcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIGlmIChkYXRhLnRhYk9yZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3RhYk9yZGVyID0gdGhpcy5tZXJnZVRhYk9yZGVyKGRhdGEudGFiT3JkZXIsIHRoaXMuX3RhYk9yZGVyKTtcbiAgICB9XG5cbiAgICAvLyBTaW5jZSB0aGUgdGFiIG9yZGVyaW5nIGNhbiBjaGFuZ2UgYmFzZWQgb24gdGhlIHNlcnZlciBkYXRhXG4gICAgLy8gd2UgbmVlZCB0byB1cGRhdGUgZWFjaCB0YWJzIFVSTCB0byBpbmNsdWRlIHRoZSBvcmRlciBhcyBwYXJ0IG9mIHRoZWlyIHBhcmFtcy5cbiAgICAvLyBUaGlzIGhlbHBzIHdpdGggcGVyc2lzdGluZyBzdGF0ZSBhY3Jvc3MgdmVydGljYWxzLlxuICAgIGxldCB0YWJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90YWJPcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRhYiA9IHRoaXMuX3RhYnNbdGhpcy5fdGFiT3JkZXJbaV1dO1xuICAgICAgaWYgKHRhYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhYi51cmwgPSB0aGlzLmdlbmVyYXRlVGFiVXJsKHRhYi5iYXNlVXJsLCB0aGlzLmdldFVybFBhcmFtcygpKTtcbiAgICAgICAgdGFicy5wdXNoKHRhYik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKHtcbiAgICAgIHRhYnM6IHRhYnMsXG4gICAgICBkcm9wZG93bkxhYmVsOiB0aGlzLmRyb3Bkb3duTGFiZWwsXG4gICAgICBkcm9wZG93bkljb246IHRoaXMuZHJvcGRvd25JY29uLFxuICAgICAgc3RhdGljOiB0aGlzLnN0YXRpY1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VXJsUGFyYW1zICgpIHtcbiAgICByZXR1cm4gbmV3IFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0RGVmYXVsdFRhYk9yZGVyIHdpbGwgY29tcHV0ZSB0aGUgaW5pdGlhbCB0YWIgb3JkZXJpbmcgYmFzZWRcbiAgICogb24gYSBjb21iaW5hdGlvbiBvZiB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZCBkaXJlY3RseSB0byB0aGUgY29tcG9uZW50XG4gICAqIGFuZCB0aGUgdXJsIHBhcmFtcy5cbiAgICogQHBhcmFtIHtPYmplY3RbXX0gdGFic0NvbmZpZ1xuICAgKiBAcGFyYW0ge1NlYXJjaFBhcmFtc31cbiAgICovXG4gIGdldERlZmF1bHRUYWJPcmRlciAodGFic0NvbmZpZywgdXJsUGFyYW1zKSB7XG4gICAgbGV0IHRhYk9yZGVyID0gW107XG5cbiAgICAvLyBVc2UgdGhlIG9yZGVyaW5nIGZyb20gdGhlIFVSTCBhcyB0aGUgcHJpbWFyeSBjb25maWd1cmF0aW9uXG4gICAgLy8gQW5kIHRoZW4gbWVyZ2UgaXQgd2l0aCB0aGUgbG9jYWwgY29uZmlndXJhdGlvbiwgaWYgcHJvdmlkZWQuXG4gICAgaWYgKHVybFBhcmFtcyAmJiB1cmxQYXJhbXMuaGFzKCd0YWJPcmRlcicpKSB7XG4gICAgICB0YWJPcmRlciA9IHVybFBhcmFtcy5nZXQoJ3RhYk9yZGVyJykuc3BsaXQoJywnKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNDb25maWcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhYiA9IHRhYnNDb25maWdbaV07XG4gICAgICAvLyBTb21lIHRhYnMgZG9uJ3QgaGF2ZSBjb25maWdJZCwgc28gd2UgbWFwIGl0IGZyb20gVVJMXG4gICAgICBpZiAodGFiLmNvbmZpZ0lkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGFiLmNvbmZpZ0lkID0gdGFiLnVybDtcbiAgICAgIH1cblxuICAgICAgLy8gQXZvaWQgZHVwbGljYXRlcyBpZiBjb25maWcgd2FzIHByb3ZpZGVkIGZyb20gVVJMXG4gICAgICBpZiAodGFiT3JkZXIuaW5jbHVkZXModGFiLmNvbmZpZ0lkKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gaXNGaXJzdCBzaG91bGQgYWx3YXlzIGJlIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBsaXN0XG4gICAgICBpZiAodGFiLmlzRmlyc3QpIHtcbiAgICAgICAgdGFiT3JkZXIudW5zaGlmdCh0YWIuY29uZmlnSWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFiT3JkZXIucHVzaCh0YWIuY29uZmlnSWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YWJPcmRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBtZXJnZVRhYk9yZGVyIG1lcmdlcyB0d28gYXJyYXlzIGludG8gb25lXG4gICAqIGJ5IGFwcGVuZGluZyBhZGRpdGlvbmFsIHRhYnMgdG8gdGhlIGVuZCBvZiB0aGUgb3JpZ2luYWwgYXJyYXlcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdGFiT3JkZXIgVGFiIG9yZGVyIHByb3ZpZGVkIGJ5IHRoZSBzZXJ2ZXJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gb3RoZXJUYWJPcmRlciBUYWIgb3JkZXIgcHJvdmlkZWQgYnkgY29uZmlndXJhdGlvblxuICAgKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAgICovXG4gIG1lcmdlVGFiT3JkZXIgKHRhYk9yZGVyLCBvdGhlclRhYk9yZGVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdGhlclRhYk9yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YWJDb25maWcgPSBvdGhlclRhYk9yZGVyW2ldO1xuICAgICAgaWYgKHRhYk9yZGVyLmluY2x1ZGVzKHRhYkNvbmZpZykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIGlzRmlyc3Qgc2hvdWxkIGJlIGFuIG92ZXJyaWRlIHRvIGR5bmFtaWMgdGFiIG9yZGVyaW5nLlxuICAgICAgaWYgKHRoaXMuX3RhYnNbdGFiQ29uZmlnXSAmJiB0aGlzLl90YWJzW3RhYkNvbmZpZ10uaXNGaXJzdCkge1xuICAgICAgICB0YWJPcmRlci51bnNoaWZ0KHRhYkNvbmZpZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWJPcmRlci5wdXNoKHRhYkNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYk9yZGVyO1xuICB9XG5cbiAgZ2VuZXJhdGVUYWJVcmwgKGJhc2VVcmwsIHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKSkge1xuICAgIC8vIFdlIHdhbnQgdG8gcGVyc2lzdCB0aGUgcGFyYW1zIGZyb20gdGhlIGV4aXN0aW5nIFVSTCB0byB0aGUgbmV3XG4gICAgLy8gVVJMUyB3ZSBjcmVhdGUuXG4gICAgcGFyYW1zLnNldCgndGFiT3JkZXInLCB0aGlzLl90YWJPcmRlcik7XG4gICAgcmV0dXJuIGJhc2VVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyICovXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBhcGkgZmlsdGVyIGFuZCBwcm92aWRlcyBzdGF0aWMgbWV0aG9kcyBmb3IgZWFzaWx5IGNvbnN0cnVjdGluZyBGaWx0ZXJzLlxuICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLnlleHQuY29tL2RvY3MvYXBpLXJlZmVyZW5jZS8jb3BlcmF0aW9uL2xpc3RFbnRpdGllcyBmb3Igc3RydWN0dXJlIGRldGFpbHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBhIEpTT04gZm9ybWF0IGZpbHRlciByZXR1cm5lZCBmcm9tIHRoZSBzZXJ2ZXIgaW50byBhIEZpbHRlclxuICAgKiBAcGFyYW0geyp9IHJlc3BvbnNlRmlsdGVyIEEgZmlsdGVyIGluIEpTT04gZm9ybWF0IHJldHVybmVkIGZyb20gdGhlIGJhY2tlbmRcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBmcm9tUmVzcG9uc2UgKHJlc3BvbnNlRmlsdGVyKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoSlNPTi5wYXJzZShyZXNwb25zZUZpbHRlcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIG5ldyBGaWx0ZXIgcmVwcmVzZW50aW5nIHRoZSBPUiBvZiBhbGwgcHJvdmlkZWQgZmlsdGVyc1xuICAgKiBAcGFyYW0gIHsuLi5GaWx0ZXJ9IGZpbHRlcnMgVGhlIGZpbHRlcnMgdG8gT1IgdG9nZXRoZXJcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBvciAoLi4uZmlsdGVycykge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgICckb3InOiBmaWx0ZXJzXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgbmV3IEZpbHRlciByZXByZXNlbnRpbmcgdGhlIEFORCBvZiBhbGwgcHJvdmlkZWQgZmlsdGVyc1xuICAgKiBAcGFyYW0gIHsuLi5GaWx0ZXJ9IGZpbHRlcnMgVGhlIGZpbHRlcnMgdG8gQU5EIHRvZ2V0aGVyXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgYW5kICguLi5maWx0ZXJzKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgJyRhbmQnOiBmaWx0ZXJzXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT1IgZmlsdGVycyB3aXRoIHRoZSBzYW1lIGtleXMsIHRoZW4gQU5EIHRoZSByZXN1bHRpbmcgZ3JvdXBzXG4gICAqIEBwYXJhbSAgey4uLkZpbHRlcn0gZmlsdGVycyBUaGUgZmlsdGVycyB0byBncm91cFxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGdyb3VwICguLi5maWx0ZXJzKSB7XG4gICAgY29uc3QgZ3JvdXBzID0ge307XG4gICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgZmlsdGVycykge1xuICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMoZmlsdGVyKVswXTtcbiAgICAgIGlmICghZ3JvdXBzW2tleV0pIHtcbiAgICAgICAgZ3JvdXBzW2tleV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1trZXldLnB1c2goZmlsdGVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBncm91cEZpbHRlcnMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIE9iamVjdC5rZXlzKGdyb3VwcykpIHtcbiAgICAgIGdyb3VwRmlsdGVycy5wdXNoKGdyb3Vwc1tmaWVsZF0ubGVuZ3RoID4gMSA/IEZpbHRlci5vciguLi5ncm91cHNbZmllbGRdKSA6IGdyb3Vwc1tmaWVsZF1bMF0pO1xuICAgIH1cblxuICAgIHJldHVybiBncm91cEZpbHRlcnMubGVuZ3RoID4gMSA/IEZpbHRlci5hbmQoLi4uZ3JvdXBGaWx0ZXJzKSA6IGdyb3VwRmlsdGVyc1swXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJlcXVhbCB0b1wiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGVxdWFsIHRvXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZXF1YWwgKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGVxJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImxlc3MgdGhhblwiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGxlc3MgdGhhblxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGxlc3NUaGFuIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRsdCcsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJsZXNzIHRoYW4gb3IgZXF1YWwgdG9cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG9cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBsZXNzVGhhbkVxdWFsIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRsZScsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJncmVhdGVyIHRoYW5cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBncmVhdGVyIHRoYW5cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBncmVhdGVyVGhhbiAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckZ3QnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwiZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ3JlYXRlclRoYW5FcXVhbCAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckZ2UnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGluY2x1c2l2ZSByYW5nZSBmaWx0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSBtaW4gVGhlIG1pbmltdW0gdmFsdWVcbiAgICogQHBhcmFtIHsqfSBtYXggVGhlIG1heGltdW0gdmFsdWVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBpbmNsdXNpdmVSYW5nZSAoZmllbGQsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgW2ZpZWxkXToge1xuICAgICAgICAnJGdlJzogbWluLFxuICAgICAgICAnJGxlJzogbWF4XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGV4Y2x1c2l2ZSByYW5nZSBmaWx0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSBtaW4gVGhlIG1pbmltdW0gdmFsdWVcbiAgICogQHBhcmFtIHsqfSBtYXggVGhlIG1heGltdW0gdmFsdWVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBleGNsdXNpdmVSYW5nZSAoZmllbGQsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgW2ZpZWxkXToge1xuICAgICAgICAnJGd0JzogbWluLFxuICAgICAgICAnJGx0JzogbWF4XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IHBvc2l0aW9uIGZpbHRlclxuICAgKiBAcGFyYW0ge251bWJlcn0gbGF0IFRoZSBsYXRpdHVkZSBvZiB0aGUgcG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxuZyBUaGUgbG9uZ2l0dWRlIG9mIHRoZSBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIFRoZSBzZWFyY2ggcmFkaXVzIChpbiBtZXRlcnMpXG4gICAqL1xuICBzdGF0aWMgcG9zaXRpb24gKGxhdCwgbG5nLCByYWRpdXMpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcignYnVpbHRpbi5sb2NhdGlvbicsICckbmVhcicsIHsgbGF0LCBsbmcsIHJhZGl1cyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgZmlsdGVyIHdpdGggdGhlIGdpdmVuIG1hdGNoZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1hdGNoZXIgVGhlIG1hdGNoZXIgZm9yIHRoZSBmaWxlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBmb3IgdGhlIGZpbHRlclxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIF9mcm9tTWF0Y2hlciAoZmllbGQsIG1hdGNoZXIsIHZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgW2ZpZWxkXToge1xuICAgICAgICBbbWF0Y2hlcl06IHZhbHVlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaENvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uL2RvbS9zZWFyY2hwYXJhbXMnO1xuXG4vKipcbiAqIFNlYXJjaENvbXBvbmVudCBleHBvc2VzIGFuIGludGVyZmFjZSBpbiBvcmRlciB0byBjcmVhdGVcbiAqIGEgVUkgU2VhcmNoIGV4cGVyaWVuY2UgZm9yIHZlcnRpY2FsIGFuZCB1bml2ZXJzYWwgc2VhcmNoLlxuICpcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGlucHV0IGtleSBmb3IgdGhlIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCBhdXRvLWNvbXBsZXRlIGFuZCBzZWFyY2ggd2lsbCBiZSBiYXNlZCBvbiB1bml2ZXJzYWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2JhcktleSA9IGNvbmZpZy5iYXJLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCB2ZXJ0aWNhbCBrZXkgZm9yIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCBhdXRvLWNvbXBsZXRlIGFuZCBzZWFyY2ggd2lsbCBiZSBiYXNlZCBvbiB1bml2ZXJzYWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBRdWVyeSBzdWJtaXNzaW9uIGlzIGJhc2VkIG9uIGEgZm9ybSBhcyBjb250ZXh0LlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBuYXRpdmUgZm9ybSBub2RlIHdpdGhpbiBjb250YWluZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9mb3JtRWwgPSBjb25maWcuZm9ybVNlbGVjdG9yIHx8ICdmb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBlbGVtZW50IHVzZWQgZm9yIHNlYXJjaGluZyBhbmQgd2lyZXMgdXAgdGhlIGtleWJvYXJkIGludGVyYWN0aW9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gY29uZmlnLmlucHV0RWwgfHwgJy5qcy15ZXh0LXF1ZXJ5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB1c2VkLCBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgYXMgYSBkYXRhIHBvaW50XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudGl0bGUgPSBjb25maWcudGl0bGUgfHwgJ0Fuc3dlcnMgVW5pdmVyc2FsIFNlYXJjaCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdGV4dCBpcyB1c2VkIGZvciBsYWJlbGluZyB0aGUgaW5wdXQgYm94LCBhbHNvIHByb3ZpZGVkIHRvIHRlbXBsYXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWxUZXh0ID0gY29uZmlnLmxhYmVsVGV4dCB8fCAnV2hhdCBhcmUgeW91IGludGVyZXN0ZWQgaW4/JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdWJtaXQgdGV4dCBpcyB1c2VkIGZvciBsYWJlbGluZyB0aGUgc3VibWl0IGJ1dHRvbiwgYWxzbyBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnN1Ym1pdFRleHQgPSBjb25maWcuc3VibWl0VGV4dCB8fCAnU3VibWl0JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdWJtaXQgaWNvbiBpcyBhbiBpY29uIGZvciB0aGUgc3VibWl0IGJ1dHRvbiwgaWYgcHJvdmlkZWQgaXQgd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHRoZVxuICAgICAqIHN1Ym1pdCB0ZXh0IHdpbGwgYmUgdXNlZCBmb3Igc2NyZWVuIHJlYWRlcnMuXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMuc3VibWl0SWNvbiA9IGNvbmZpZy5zdWJtaXRJY29uIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgdGV4dCB0byBzaG93IGFzIHRoZSBmaXJzdCBpdGVtIGZvciBhdXRvIGNvbXBsZXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucHJvbXB0SGVhZGVyID0gY29uZmlnLnByb21wdEhlYWRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQXV0byBmb2N1c2VzIHRoZSBpbnB1dCBib3ggaWYgc2V0IHRvIHRydWUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvRm9jdXMgPSBjb25maWcuYXV0b0ZvY3VzID09PSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc2hvdyBhbiBcInhcIiB0aGF0IGFsbG93cyB0aGUgdXNlciB0byBjbGVhciB0aGUgY3VycmVudFxuICAgICAqIHF1ZXJ5XG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5jbGVhckJ1dHRvbiA9IGNvbmZpZy5jbGVhckJ1dHRvbiA9PT0gdW5kZWZpbmVkXG4gICAgICA/IHRydWVcbiAgICAgIDogY29uZmlnLmNsZWFyQnV0dG9uO1xuXG4gICAgLyoqXG4gICAgICogV2hlbiBhdXRvZm9jdXNpbmcgb24gbG9hZCwgb3B0aW9uYWxseSBvcGVuIHRoZSBhdXRvY29tcGxldGVcbiAgICAgKiAocHJlc2V0IHByb21wdHMpXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvY29tcGxldGVPbkxvYWQgPSBjb25maWcuYXV0b2NvbXBsZXRlT25Mb2FkIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogc3VibWl0VVJMIHdpbGwgZm9yY2UgdGhlIHNlYXJjaCBxdWVyeSBzdWJtaXNzaW9uIHRvIGdldFxuICAgICAqIHJlZGlyZWN0ZWQgdG8gdGhlIFVSTCBwcm92aWRlZC5cbiAgICAgKiBPcHRpb25hbCwgZGVmYXVsdHMgdG8gbnVsbC5cbiAgICAgKlxuICAgICAqIElmIG5vIHJlZGlyZWN0VXJsIHByb3ZpZGVkLCB3ZSBrZWVwIHRoZSBwYWdlIGFzIGEgc2luZ2xlIHBhZ2UgYXBwLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZWRpcmVjdFVybCA9IGNvbmZpZy5yZWRpcmVjdFVybCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogdHJ1ZSBpZiB0aGVyZSBpcyBhbm90aGVyIHNlYXJjaCBiYXIgcHJlc2VudCBvbiB0aGUgcGFnZS5cbiAgICAgKiBUd2lucyBvbmx5IHVwZGF0ZSB0aGUgcXVlcnksIGFuZCBkbyBub3Qgc2VhcmNoXG4gICAgICovXG4gICAgdGhpcy5faXNUd2luID0gY29uZmlnLmlzVHdpbjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSBzdHJpbmcgdG8gdXNlIGZvciB0aGUgaW5wdXQgYm94LCBwcm92aWRlZCB0byB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlcnkgPSBjb25maWcucXVlcnkgfHwgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpIHx8ICcnO1xuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBTdG9yYWdlS2V5cy5RVUVSWSwgcSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gcTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKTtcbiAgICAgIHRoaXMuc2VhcmNoKHEpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG1pbmltdW0gdGltZSBhbGxvd2VkIGluIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHNlYXJjaGVzIHRvIHByZXZlbnRcbiAgICAgKiBtYW55IGR1cGxpY2F0ZSBzZWFyY2hlcyBiYWNrLXRvLWJhY2tcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc2VhcmNoQ29vbGRvd24gPSBjb25maWcuc2VhcmNoQ29vbGRvd24gfHwgMzAwO1xuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlIGFuZCBcIm5lYXIgbWVcIiBpbnRlbnQgaXMgZXhwcmVzc2VkLCBwcm9tcHQgdGhlIHVzZXIgZm9yIHRoZWlyIGdlb2xvY2F0aW9uXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9wcm9tcHRGb3JMb2NhdGlvbiA9IGNvbmZpZy5wcm9tcHRGb3JMb2NhdGlvbiA9PT0gdW5kZWZpbmVkXG4gICAgICA/IHRydWVcbiAgICAgIDogQm9vbGVhbihjb25maWcucHJvbXB0Rm9yTG9jYXRpb24pO1xuXG4gICAgLyoqXG4gICAgICogQ29udHJvbHMgc2hvd2luZyBhbmQgaGlkaW5nIHRoZSBzZWFyY2ggY2xlYXIgYnV0dG9uXG4gICAgICovXG4gICAgdGhpcy5fc2hvd0NsZWFyQnV0dG9uID0gdGhpcy5jbGVhckJ1dHRvbiAmJiB0aGlzLnF1ZXJ5O1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1NlYXJjaEJhcic7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lICgpIHtcbiAgICByZXR1cm4gJ3NlYXJjaC9zZWFyY2gnO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIGlmICh0aGlzLnF1ZXJ5ICYmICF0aGlzLnJlZGlyZWN0VXJsKSB7XG4gICAgICB0aGlzLmNvcmUuc2V0UXVlcnkodGhpcy5xdWVyeSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcm9tcHRGb3JMb2NhdGlvbikge1xuICAgICAgdGhpcy5pbml0TG9jYXRpb25Qcm9tcHQoKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMgPT09IHRydWUgJiYgdGhpcy5xdWVyeS5sZW5ndGggPT09IDAgJiYgIXRoaXMuYXV0b2NvbXBsZXRlT25Mb2FkKSB7XG4gICAgICBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKS5mb2N1cygpO1xuICAgIH1cblxuICAgIC8vIFdpcmUgdXAgb3VyIHNlYXJjaCBoYW5kbGluZyBhbmQgYXV0byBjb21wbGV0ZVxuICAgIHRoaXMuaW5pdFNlYXJjaCh0aGlzLl9mb3JtRWwpO1xuICAgIHRoaXMuaW5pdEF1dG9Db21wbGV0ZSh0aGlzLl9pbnB1dEVsKTtcblxuICAgIGlmICh0aGlzLmNsZWFyQnV0dG9uKSB7XG4gICAgICB0aGlzLmluaXRDbGVhckJ1dHRvbigpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cyA9PT0gdHJ1ZSAmJiB0aGlzLnF1ZXJ5Lmxlbmd0aCA9PT0gMCAmJiB0aGlzLmF1dG9jb21wbGV0ZU9uTG9hZCkge1xuICAgICAgRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5faW5wdXRFbCkuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUgKCkge1xuICAgIHRoaXMuX2F1dG9jb21wbGV0ZS5yZW1vdmUoKTtcbiAgICBzdXBlci5yZW1vdmUoKTtcbiAgfVxuXG4gIGluaXRDbGVhckJ1dHRvbiAoKSB7XG4gICAgY29uc3QgYnV0dG9uID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy5qcy15eHQtU2VhcmNoQmFyLWNsZWFyJyk7XG4gICAgdGhpcy5fc2hvd0NsZWFyQnV0dG9uID0gdGhpcy5fc2hvd0NsZWFyQnV0dG9uIHx8IHRoaXMucXVlcnk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ3l4dC1TZWFyY2hCYXItLWhpZGRlbicsICF0aGlzLl9zaG93Q2xlYXJCdXR0b24pO1xuXG4gICAgRE9NLm9uKGJ1dHRvbiwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5xdWVyeSA9ICcnO1xuICAgICAgdGhpcy5fc2hvd0NsZWFyQnV0dG9uID0gZmFsc2U7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgneXh0LVNlYXJjaEJhci0taGlkZGVuJyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHt9KTtcbiAgICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFUlksIHRoaXMucXVlcnkpO1xuICAgICAgdGhpcy5jb3JlLnNldFF1ZXJ5KHRoaXMucXVlcnkpO1xuICAgIH0pO1xuXG4gICAgRE9NLm9uKHRoaXMuX2lucHV0RWwsICdpbnB1dCcsIGUgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGlmICghdGhpcy5fc2hvd0NsZWFyQnV0dG9uICYmIGlucHV0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5fc2hvd0NsZWFyQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3l4dC1TZWFyY2hCYXItLWhpZGRlbicpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9zaG93Q2xlYXJCdXR0b24gJiYgaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuX3Nob3dDbGVhckJ1dHRvbiA9IGZhbHNlO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgneXh0LVNlYXJjaEJhci0taGlkZGVuJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0TG9jYXRpb25Qcm9tcHQgKCkge1xuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBTdG9yYWdlS2V5cy5JTlRFTlRTLCBpbnRlbnQgPT4ge1xuICAgICAgaWYgKCFpbnRlbnQubmVhck1lIHx8IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLkdFT0xPQ0FUSU9OKSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ocG9zaXRpb24gPT4ge1xuICAgICAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuR0VPTE9DQVRJT04sIHtcbiAgICAgICAgICBsYXQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICBsbmc6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgICAgcmFkaXVzOiBwb3NpdGlvbi5jb29yZHMuYWNjdXJhY3lcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VhcmNoKHRoaXMucXVlcnkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHVzZSBmb3Igd2lyaW5nIHVwIHNlYXJjaGluZyBvbiBmb3JtIHN1Ym1pc3Npb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGZvcm1TZWxlY3RvciBDU1Mgc2VsZWN0b3IgdG8gYmluZCBvdXIgc3VibWl0IGhhbmRsaW5nIHRvXG4gICAqL1xuICBpbml0U2VhcmNoIChmb3JtU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9mb3JtRWwgPSBmb3JtU2VsZWN0b3I7XG5cbiAgICB0aGlzLl9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgneXh0LVNlYXJjaEJhci13cmFwcGVyJyk7XG5cbiAgICBsZXQgZm9ybSA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIGZvcm1TZWxlY3Rvcik7XG4gICAgaWYgKCFmb3JtKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBpbml0aWFsaXplIFNlYXJjaEJhcjsgQ2FuIG5vdCBmaW5kIHtIVE1MRWxlbWVudH0gYCcsIHRoaXMuX2Zvcm1FbCwgJ2AuJyk7XG4gICAgfVxuXG4gICAgRE9NLm9uKGZvcm0sICdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBsZXQgaW5wdXRFbCA9IGZvcm0ucXVlcnlTZWxlY3Rvcih0aGlzLl9pbnB1dEVsKTtcblxuICAgICAgbGV0IHF1ZXJ5ID0gaW5wdXRFbC52YWx1ZTtcbiAgICAgIGxldCBwYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICAgIHBhcmFtcy5zZXQoJ3F1ZXJ5JywgcXVlcnkpO1xuXG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgcmVkaXJlY3RVcmwsIHdlIHdhbnQgdGhlIGZvcm0gdG8gYmVcbiAgICAgIC8vIHNlcmlhbGl6ZWQgYW5kIHN1Ym1pdHRlZC5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5yZWRpcmVjdFVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLnJlZGlyZWN0VXJsICsgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaW5wdXRFbC5ibHVyKCk7XG5cbiAgICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFUlksIHF1ZXJ5KTtcbiAgICAgIHRoaXMuY29yZS5zZXRRdWVyeShxdWVyeSk7XG4gICAgICB0aGlzLnNlYXJjaChxdWVyeSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHdpcmUgdXAgb3VyIGF1dG8gY29tcGxldGUgb24gYW4gaW5wdXQgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIGF1dG8gY29tcGxldGUgY29tcG9uZW50IHRvXG4gICAqL1xuICBpbml0QXV0b0NvbXBsZXRlIChpbnB1dFNlbGVjdG9yKSB7XG4gICAgdGhpcy5faW5wdXRFbCA9IGlucHV0U2VsZWN0b3I7XG5cbiAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlKSB7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGUucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fYXV0b2NvbXBsZXRlID0gdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZSgnQXV0b0NvbXBsZXRlJywge1xuICAgICAgcGFyZW50Q29udGFpbmVyOiB0aGlzLl9jb250YWluZXIsXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmF1dG9jb21wbGV0ZWAsXG4gICAgICBjb250YWluZXI6ICcueXh0LVNlYXJjaEJhci1hdXRvY29tcGxldGUnLFxuICAgICAgYmFyS2V5OiB0aGlzLl9iYXJLZXksXG4gICAgICBhdXRvRm9jdXM6IHRoaXMuYXV0b0ZvY3VzICYmICF0aGlzLmF1dG9jb21wbGV0ZU9uTG9hZCxcbiAgICAgIHZlcnRpY2FsS2V5OiB0aGlzLl92ZXJ0aWNhbEtleSxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5wcm9tcHRIZWFkZXIsXG4gICAgICBvcmlnaW5hbFF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgaW5wdXRFbDogaW5wdXRTZWxlY3RvcixcbiAgICAgIG9uU3VibWl0OiAoKSA9PiB7XG4gICAgICAgIERPTS50cmlnZ2VyKERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2Zvcm1FbCksICdzdWJtaXQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaCAocXVlcnkpIHtcbiAgICAvLyBEb24ndCBzZWFyY2ggaWYgd2UgcmVjZW50bHkgc2VhcmNoZWQsXG4gICAgLy8gaWYgdGhlcmUncyBubyBxdWVyeSBmb3IgdW5pdmVyc2FsIHNlYXJjaCxcbiAgICAvLyBvciBpZiB0aGlzIGlzIGEgdHdpbiBzZWFyY2hiYXJcbiAgICBpZiAodGhpcy5fdGhyb3R0bGVkIHx8ICghcXVlcnkgJiYgIXRoaXMuX3ZlcnRpY2FsS2V5KSB8fCB0aGlzLl9pc1R3aW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl90aHJvdHRsZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLl90aHJvdHRsZWQgPSBmYWxzZTsgfSwgdGhpcy5fc2VhcmNoQ29vbGRvd24pO1xuXG4gICAgaWYgKHRoaXMuX3ZlcnRpY2FsS2V5KSB7XG4gICAgICBjb25zdCBhbGxGaWx0ZXJzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgICBjb25zdCB0b3RhbEZpbHRlciA9IGFsbEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgICA/IEZpbHRlci5hbmQoLi4uYWxsRmlsdGVycylcbiAgICAgICAgOiBhbGxGaWx0ZXJzWzBdO1xuICAgICAgY29uc3QgZmFjZXRGaWx0ZXIgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRkFDRVRfRklMVEVSKVswXTtcbiAgICAgIHJldHVybiB0aGlzLmNvcmUudmVydGljYWxTZWFyY2godGhpcy5fdmVydGljYWxLZXksIHtcbiAgICAgICAgaW5wdXQ6IHF1ZXJ5LFxuICAgICAgICBmaWx0ZXI6IEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSxcbiAgICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5PVEUoYmlsbHkpIFRlbXBvcmFyeSBoYWNrIGZvciBERU1PXG4gICAgICAvLyBSZW1vdmUgbWUgYWZ0ZXIgdGhlIGRlbW9cbiAgICAgIGxldCBuYXYgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXJcbiAgICAgICAgLmdldEFjdGl2ZUNvbXBvbmVudCgnTmF2aWdhdGlvbicpO1xuXG4gICAgICBpZiAobmF2KSB7XG4gICAgICAgIGxldCB0YWJzID0gbmF2LmdldFN0YXRlKCd0YWJzJyk7XG4gICAgICAgIGxldCB1cmxzID0ge307XG5cbiAgICAgICAgaWYgKHRhYnMgJiYgQXJyYXkuaXNBcnJheSh0YWJzKSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXModGFic1tpXS51cmwuc3BsaXQoJz8nKVsxXSk7XG4gICAgICAgICAgICBwYXJhbXMuc2V0KCdxdWVyeScsIHF1ZXJ5KTtcblxuICAgICAgICAgICAgbGV0IHVybCA9IHRhYnNbaV0uYmFzZVVybDtcbiAgICAgICAgICAgIGlmIChwYXJhbXMudG9TdHJpbmcoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHVybCArPSAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVybHNbdGFic1tpXS5jb25maWdJZF0gPSB1cmw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvcmUuc2VhcmNoKHF1ZXJ5LCB1cmxzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29yZS5zZWFyY2gocXVlcnkpO1xuICAgIH1cbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBsYWJlbFRleHQ6IHRoaXMubGFiZWxUZXh0LFxuICAgICAgc3VibWl0SWNvbjogdGhpcy5zdWJtaXRJY29uLFxuICAgICAgc3VibWl0VGV4dDogdGhpcy5zdWJtaXRUZXh0LFxuICAgICAgc2hvd0NsZWFyQnV0dG9uOiB0aGlzLl9zaG93Q2xlYXJCdXR0b24sXG4gICAgICBxdWVyeTogdGhpcy5xdWVyeVxuICAgIH0sIGRhdGEpKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyU2VhcmNoQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5cbi8qKlxuICogRmlsdGVyU2VhcmNoQ29tcG9uZW50IGlzIHVzZWQgZm9yIGF1dG9jb21wbGV0ZSB1c2luZyB0aGUgRmlsdGVyU2VhcmNoIGJhY2tlbmQuXG4gKiBJdCdsbCBhbGxvdyB5b3UgdG8gcGljayBwcmUtc2V0IGZpbHRlcnMgdGhhdCBhcmUgc2V0dXAgb24gdGhlIGJhY2tlbmQgd2l0aGluXG4gKiBhIHZlcnRpY2FsIHNlYXJjaCBjb250ZXh0LlxuICpcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlucHV0IGtleSBmb3IgdGhlIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9iYXJLZXkgPSBjb25maWcuYmFyS2V5IHx8IGNvbmZpZy5pbnB1dEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnRpY2FsIGtleSBmb3IgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzdG9yZSB0aGUgZmlsdGVyIHZhbHVlIGJ1dCBkbyBub3Qgc2VhcmNoIG9uIGNoYW5nZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RvcmVPbkNoYW5nZSA9IGNvbmZpZy5zdG9yZU9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogUXVlcnkgc3VibWlzc2lvbiBpcyBiYXNlZCBvbiBhIGZvcm0gYXMgY29udGV4dC5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gbmF0aXZlIGZvcm0gbm9kZSB3aXRoaW4gY29udGFpbmVyXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5fZm9ybUVsID0gY29uZmlnLmZvcm1TZWxlY3RvciB8fCAnZm9ybSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5wdXQgZWxlbWVudCB1c2VkIGZvciBzZWFyY2hpbmcgYW5kIHdpcmVzIHVwIHRoZSBrZXlib2FyZCBpbnRlcmFjdGlvblxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5faW5wdXRFbCA9IGNvbmZpZy5pbnB1dEVsIHx8ICcuanMteWV4dC1xdWVyeSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgdXNlZCwgcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlIGFzIGEgZGF0YSBwb2ludFxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnRpdGxlID0gY29uZmlnLnRpdGxlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlYXJjaCB0ZXh0IHVzZWQgZm9yIGxhYmVsaW5nIHRoZSBpbnB1dCBib3gsIGFsc28gcHJvdmlkZWQgdG8gdGVtcGxhdGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gY29uZmlnLnNlYXJjaFRleHQgfHwgJ1doYXQgYXJlIHlvdSBpbnRlcmVzdGVkIGluPyc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgdGV4dCB0byBzaG93IGFzIHRoZSBmaXJzdCBpdGVtIGZvciBhdXRvIGNvbXBsZXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucHJvbXB0SGVhZGVyID0gY29uZmlnLnByb21wdEhlYWRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQXV0byBmb2N1c2VzIHRoZSBpbnB1dCBib3ggaWYgc2V0IHRvIHRydWUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvRm9jdXMgPSBjb25maWcuYXV0b0ZvY3VzID09PSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogc3VibWl0VVJMIHdpbGwgZm9yY2UgdGhlIHNlYXJjaCBxdWVyeSBzdWJtaXNzaW9uIHRvIGdldFxuICAgICAqIHJlZGlyZWN0ZWQgdG8gdGhlIFVSTCBwcm92aWRlZC5cbiAgICAgKiBPcHRpb25hbCwgZGVmYXVsdHMgdG8gbnVsbC5cbiAgICAgKlxuICAgICAqIElmIG5vIHJlZGlyZWN0VXJsIHByb3ZpZGVkLCB3ZSBrZWVwIHRoZSBwYWdlIGFzIGEgc2luZ2xlIHBhZ2UgYXBwLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZWRpcmVjdFVybCA9IGNvbmZpZy5yZWRpcmVjdFVybCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHN0cmluZyB0byB1c2UgZm9yIHRoZSBpbnB1dCBib3gsIHByb3ZpZGVkIHRvIHRlbXBsYXRlIGZvciByZW5kZXJpbmcuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5xdWVyeSA9IGNvbmZpZy5xdWVyeSB8fCB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCkgfHwgJyc7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gLCBxID0+IHtcbiAgICAgIHRoaXMucXVlcnkgPSBxO1xuICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaWx0ZXIgc3RyaW5nIHRvIHVzZSBmb3IgdGhlIHByb3ZpZGVkIHF1ZXJ5XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5maWx0ZXIgPSBjb25maWcuZmlsdGVyIHx8IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCkgfHwgJyc7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpbHRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gSlNPTi5wYXJzZSh0aGlzLmZpbHRlcik7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIHRoaXMuc2VhcmNoUGFyYW1ldGVycyA9IHRoaXMuX2J1aWxkU2VhcmNoUGFyYW1ldGVycyhjb25maWcuc2VhcmNoUGFyYW1ldGVycyk7XG5cbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke3RoaXMubmFtZX1gLCBmID0+IHsgdGhpcy5maWx0ZXIgPSBmOyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdGaWx0ZXJTZWFyY2gnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoKSB7XG4gICAgcmV0dXJuICdzZWFyY2gvZmlsdGVyc2VhcmNoJztcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICBpZiAodGhpcy5xdWVyeSAmJiB0aGlzLmZpbHRlcikge1xuICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICAvLyBXaXJlIHVwIG91ciBzZWFyY2ggaGFuZGxpbmcgYW5kIGF1dG8gY29tcGxldGVcbiAgICB0aGlzLmluaXRBdXRvQ29tcGxldGUodGhpcy5faW5wdXRFbCk7XG5cbiAgICBpZiAodGhpcy5hdXRvRm9jdXMgPT09IHRydWUgJiYgdGhpcy5xdWVyeS5sZW5ndGggPT09IDApIHtcbiAgICAgIERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2lucHV0RWwpLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgaGVscGVyIG1ldGhvZCB0byB3aXJlIHVwIG91ciBhdXRvIGNvbXBsZXRlIG9uIGFuIGlucHV0IHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBhdXRvIGNvbXBsZXRlIGNvbXBvbmVudCB0b1xuICAgKi9cbiAgaW5pdEF1dG9Db21wbGV0ZSAoaW5wdXRTZWxlY3Rvcikge1xuICAgIHRoaXMuX2lucHV0RWwgPSBpbnB1dFNlbGVjdG9yO1xuXG4gICAgdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZSgnQXV0b0NvbXBsZXRlJywge1xuICAgICAgcGFyZW50Q29udGFpbmVyOiB0aGlzLl9jb250YWluZXIsXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmF1dG9jb21wbGV0ZWAsXG4gICAgICBpc0ZpbHRlclNlYXJjaDogdHJ1ZSxcbiAgICAgIGNvbnRhaW5lcjogJy55eHQtU2VhcmNoQmFyLWF1dG9jb21wbGV0ZScsXG4gICAgICBwcm9tcHRIZWFkZXI6IHRoaXMucHJvbXB0SGVhZGVyLFxuICAgICAgb3JpZ2luYWxRdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgIG9yaWdpbmFsRmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgIGlucHV0RWw6IGlucHV0U2VsZWN0b3IsXG4gICAgICB2ZXJ0aWNhbEtleTogdGhpcy5fdmVydGljYWxLZXksXG4gICAgICBiYXJLZXk6IHRoaXMuX2JhcktleSxcbiAgICAgIHNlYXJjaFBhcmFtZXRlcnM6IHRoaXMuc2VhcmNoUGFyYW1ldGVycyxcbiAgICAgIG9uU3VibWl0OiAocXVlcnksIGZpbHRlcikgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICAgICAgcGFyYW1zLnNldChgJHt0aGlzLm5hbWV9LnF1ZXJ5YCwgcXVlcnkpO1xuICAgICAgICBwYXJhbXMuc2V0KGAke3RoaXMubmFtZX0uZmlsdGVyYCwgZmlsdGVyKTtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgcmVkaXJlY3RVcmwsIHdlIHdhbnQgdGhlIHBhcmFtcyB0byBiZVxuICAgICAgICAvLyBzZXJpYWxpemVkIGFuZCBzdWJtaXR0ZWQuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5yZWRpcmVjdFVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMucmVkaXJlY3RVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzYXZlIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBmb3IgdGhlIG5leHQgc2VhcmNoXG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBGaWx0ZXIuZnJvbVJlc3BvbnNlKGZpbHRlcik7XG4gICAgICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWAsIHRoaXMucXVlcnkpO1xuICAgICAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCwgdGhpcy5maWx0ZXIpO1xuICAgICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgdGhpcy5maWx0ZXIpO1xuICAgICAgICB0aGlzLnNlYXJjaCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gdGhlIHZlcnRpY2FsIHNlYXJjaCB3aXRoIGFsbCBzYXZlZCBmaWx0ZXJzIGFuZCBxdWVyeSxcbiAgICogb3B0aW9uYWxseSByZWRpcmVjdGluZyBiYXNlZCBvbiBjb25maWdcbiAgICovXG4gIHNlYXJjaCAoKSB7XG4gICAgaWYgKHRoaXMuX3N0b3JlT25DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgbGV0IHRvdGFsRmlsdGVyID0gZmlsdGVyc1swXTtcbiAgICBpZiAoZmlsdGVycy5sZW5ndGggPiAxKSB7XG4gICAgICB0b3RhbEZpbHRlciA9IEZpbHRlci5hbmQoLi4uZmlsdGVycyk7XG4gICAgfVxuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpIHx8ICcnO1xuICAgIGNvbnN0IGZhY2V0RmlsdGVyID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZBQ0VUX0ZJTFRFUilbMF07XG5cbiAgICB0aGlzLmNvcmUudmVydGljYWxTZWFyY2godGhpcy5fdmVydGljYWxLZXksIHtcbiAgICAgIGlucHV0OiBzZWFyY2hRdWVyeSxcbiAgICAgIGZpbHRlcjogSlNPTi5zdHJpbmdpZnkodG90YWxGaWx0ZXIpLFxuICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKVxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIHNlYXJjaFRleHQ6IHRoaXMuc2VhcmNoVGV4dCxcbiAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlclxuICAgIH0sIGRhdGEpKTtcbiAgfVxuXG4gIF9idWlsZFNlYXJjaFBhcmFtZXRlcnMgKHNlYXJjaFBhcmFtZXRlckNvbmZpZ3MpIHtcbiAgICBsZXQgc2VhcmNoUGFyYW1ldGVycyA9IHtcbiAgICAgIHNlY3Rpb25lZDogZmFsc2UsXG4gICAgICBmaWVsZHM6IFtdXG4gICAgfTtcbiAgICBpZiAoc2VhcmNoUGFyYW1ldGVyQ29uZmlncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gc2VhcmNoUGFyYW1ldGVycztcbiAgICB9XG4gICAgaWYgKHNlYXJjaFBhcmFtZXRlckNvbmZpZ3Muc2VjdGlvbmVkKSB7XG4gICAgICBzZWFyY2hQYXJhbWV0ZXJzLnNlY3Rpb25lZCA9IHNlYXJjaFBhcmFtZXRlckNvbmZpZ3Muc2VjdGlvbmVkO1xuICAgIH1cbiAgICBzZWFyY2hQYXJhbWV0ZXJzLmZpZWxkcyA9IHRoaXMuX2J1aWxkRmllbGRzKHNlYXJjaFBhcmFtZXRlckNvbmZpZ3MuZmllbGRzKTtcbiAgICByZXR1cm4gc2VhcmNoUGFyYW1ldGVycztcbiAgfVxuXG4gIF9idWlsZEZpZWxkcyAoZmllbGRDb25maWdzKSB7XG4gICAgaWYgKGZpZWxkQ29uZmlncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpZWxkQ29uZmlncy5tYXAoZmMgPT4gKHsgZmV0Y2hFbnRpdGllczogZmFsc2UsIC4uLmZjIH0pKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuY29uc3QgS2V5cyA9IHtcbiAgQkFDS1NQQUNFOiA4LFxuICBUQUI6IDksXG4gIEVOVEVSOiAxMyxcbiAgU0hJRlQ6IDE2LFxuICBDVFJMOiAxNyxcbiAgQUxUOiAxOCxcbiAgRVNDQVBFOiAyNyxcblxuICBMRUZUOiAzNyxcbiAgUklHSFQ6IDM5LFxuICBVUDogMzgsXG5cbiAgREVMRVRFOiA0NixcbiAgRE9XTjogNDAsXG4gIExFRlRfT1NfS0VZOiA5MSxcbiAgUklHSFRfT1NfS0VZOiA5MixcbiAgU0VMRUNUX0tFWTogOTNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Db21wbGV0ZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30sIHN5c3RlbU9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMsIHN5c3RlbU9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBhdXRvY29tcGxldGUgaXMgc2ltcGxlIG9yIGZpbHRlclxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNGaWx0ZXJTZWFyY2ggPSBvcHRzLmlzRmlsdGVyU2VhcmNoIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGBiYXJLZXlgIGluIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggdG8gdXNlIGZvciBhdXRvLWNvbXBsZXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9iYXJLZXkgPSBvcHRzLmJhcktleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGB2ZXJ0aWNhbEtleWAgb2YgdGhlIHZlcnRpY2FsIHNlYXJjaCB0byB1c2UgZm9yIGF1dG8tY29tcGxldGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gb3B0cy52ZXJ0aWNhbEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGlucHV0IGVsIHNlbGVjdG9yIGZvciBhdXRvIGNvbXBsZXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gb3B0cy5pbnB1dEVsIHx8ICcuanMteWV4dC1xdWVyeSc7XG5cbiAgICAvKipcbiAgICAgKiBBIHNlbGVjdG9yIGZvciB0aGUgYXV0b2NvbXBsZXRlIGVsZW1lbnRlc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYXV0b2NvbXBsZXRlRWxzID0gb3B0cy5hdXRvQ29tcGxldGVFbHMgfHwgJy5qcy15ZXh0LWF1dG9jb21sZXRlLW9wdGlvbic7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgZm9yIHRoZSBkYXRhLXN0b3JhZ2UgdG8gbGlzdGVuIGZvciB1cGRhdGVzIGZyb20gdGhlIHNlcnZlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IGAke1N0b3JhZ2VLZXlzLkFVVE9DT01QTEVURX0uJHt0aGlzLm5hbWV9YDtcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgaW5wdXQgdmFsdWUgd2hlbiB0eXBpbmcuXG4gICAgICogV2UgdXNlIHRoaXMgZm9yIHJlc2V0dGluZyB0aGUgc3RhdGUgb2YgdGhlIGlucHV0IHZhbHVlIHdoZW4gb3RoZXIgaW50ZXJhY3Rpb25zIChlLmcuIHJlc3VsdCBuYXZpZ2F0aW9uKVxuICAgICAqIGNoYW5nZSBiYXNlZCBvbiBpbnRlcmFjdGlvbnMuIEZvciBpbnN0YW5jZSwgaGl0dGluZyBlc2NhcGUgc2hvdWxkIHJlc2V0IHRoZSB2YWx1ZSB0byB0aGUgb3JpZ2luYWwgdHlwZWQgcXVlcnkuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gb3B0cy5vcmlnaW5hbFF1ZXJ5IHx8ICcnO1xuXG4gICAgLyoqXG4gICAgICogVXNlZCBmb3Iga2V5Ym9hcmQgbmF2aWdhdGlvbiB0aHJvdWdoIHJlc3VsdHMuXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IHNlY3Rpb24gd2UncmUgbmF2aWdhdGluZyBpbi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3NlY3Rpb25JbmRleCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uIHRocm91Z2ggcmVzdWx0cy5cbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgcmVzdWx0IGluZGV4IHdlJ3JlIG5hdmlnYXRpbmcgb24uXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZXN1bHRJbmRleCA9IC0xO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHRleHQgdG8gc2hvdyBhcyB0aGUgZmlyc3QgaXRlbSBmb3IgYXV0byBjb21wbGV0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnByb21wdEhlYWRlciA9IG9wdHMucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBpbnB1dCBpcyBhdXRvY29tYXRpY2FsbHkgZm9jdXNlZCBvciBub3RcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9hdXRvRm9jdXMgPSBvcHRzLmF1dG9Gb2N1cyB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGludm9rZWQgd2hlbiB0aGUgYEVudGVyYCBrZXkgaXMgcHJlc3NlZCBvbiBhdXRvIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIHRoaXMuX29uU3VibWl0ID0gb3B0cy5vblN1Ym1pdCB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIHRoaXMuX3NlYXJjaFBhcmFtZXRlcnMgPSBvcHRzLnNlYXJjaFBhcmFtZXRlcnMgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYWxpYXNlZCB1c2VkIGJ5IHRoZSBjb21wb25lbnQgbWFuYWdlciBmb3IgY3JlYXRpb24uXG4gICAqL1xuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnQXV0b0NvbXBsZXRlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAnc2VhcmNoL2F1dG9jb21wbGV0ZSc7XG4gIH1cblxuICAvKipcbiAgICogc2V0U3RhdGUgaXMgb3ZlcnJpZGRlbiBzbyB0aGF0IHdlIGNhbiBwcm92aWRlIGFkZGl0aW9uYWwgbWV0YSBkYXRhXG4gICAqIHRvIHRoZSB0ZW1wbGF0ZSAoZS5nLiB0aGUgc2VjdGlvbkluZGV4IGFuZCByZXN1bHRJbmRleCksIHNpbmNlXG4gICAqIHRob3NlIGFyZSBjbGllbnQtaW50ZXJhY3Rpb24gc3BlY2lmaWMgdmFsdWVzIGFuZCBhcmVuJ3QgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyLlxuICAgKi9cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBoYXNSZXN1bHRzOiB0aGlzLmhhc1Jlc3VsdHMoZGF0YSksXG4gICAgICBzZWN0aW9uSW5kZXg6IHRoaXMuX3NlY3Rpb25JbmRleCxcbiAgICAgIHJlc3VsdEluZGV4OiB0aGlzLl9yZXN1bHRJbmRleCxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5fb3JpZ2luYWxRdWVyeS5sZW5ndGggPT09IDAgPyB0aGlzLnByb21wdEhlYWRlciA6IG51bGxcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogdXBkYXRlU3RhdGUgaXMgYSBoZWxwZXIgdG8gYXBwbHkgdGhlIGN1cnJlbnQgc3RhdGUgd2l0aCBuZXcgY2xpZW50LXN0YXRlLlxuICAgKi9cbiAgdXBkYXRlU3RhdGUgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fc3RhdGUuZ2V0KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uQ3JlYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgY29uc3RydWN0ZWQgZnJvbSB0aGUgZnJhbWV3b3JrLlxuICAgKiBPbmNlIHdlJ3JlIGluaXRhbGl6ZWQsIHdlIHdpcmUgdXAgYWxsIG9mIG91ciB1c2VyIGludGVyYWN0aW9uc1xuICAgKi9cbiAgb25DcmVhdGUgKCkge1xuICAgIC8vIFVzZSB0aGUgY29udGV4dCBvZiB0aGUgcGFyZW50IGNvbXBvbmVudCB0byBmaW5kIHRoZSBpbnB1dCBub2RlLlxuICAgIGxldCBxdWVyeUlucHV0ID0gRE9NLnF1ZXJ5KHRoaXMuX3BhcmVudENvbnRhaW5lciwgdGhpcy5faW5wdXRFbCk7XG4gICAgaWYgKCFxdWVyeUlucHV0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBpbml0aWFsaXplIEF1dG9Db21wbGV0ZS4gQ2FuIG5vdCBmaW5kIHtIVE1MRWxlbWVudH0gYCcsIHRoaXMuX2lucHV0RWwsICdgLicpO1xuICAgIH1cblxuICAgIC8vIERpc2FibGUgdGhlIG5hdGl2ZSBhdXRvY29tcGxldGUsIGF1dG9jb3JyZWN0ICYgc3BlbGxjaGVja1xuICAgIERPTS5hdHRyaWJ1dGVzKHF1ZXJ5SW5wdXQsIHtcbiAgICAgIGF1dG9jb21wbGV0ZTogJ29mZicsXG4gICAgICBhdXRvY29ycmVjdDogJ29mZicsXG4gICAgICBzcGVsbGNoZWNrOiAnZmFsc2UnXG4gICAgfSk7XG5cbiAgICAvLyBUaGUgdXNlciBleGl0cyB0aGUgaW5wdXQsIHNvIHdlIHdhbnQgdG8gcmVzZXQgdGhlIHN0YXRlIGFuZCBjbG9zZVxuICAgIC8vIHRoZSBhdXRvIGNvbXBsZXRlXG4gICAgLy8gVE9ETyhqZGVsZXJtZSk6IENsb3NlIGxvZ2ljIHRvIGJlIG1vdmVkIHRvIHBhcmVudFxuICAgIERPTS5vbihkb2N1bWVudCwgJ2NsaWNrJywgZSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmpzLXl4dC1BdXRvQ29tcGxldGUtd3JhcHBlciAqJykgfHwgZS50YXJnZXQubWF0Y2hlcyh0aGlzLl9pbnB1dEVsKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIGEgdXNlciBmb2N1c2VzIHRoZSBpbnB1dCwgd2Ugc2hvdWxkIHBvcHVsYXRlIHRoZSBhdXRvY29tcGxldGUgYmFzZWRcbiAgICAvLyBvbiB0aGUgY3VycmVudCB2YWx1ZVxuICAgIERPTS5vbihxdWVyeUlucHV0LCAnZm9jdXMnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmF1dG9Db21wbGV0ZShxdWVyeUlucHV0LnZhbHVlKTtcbiAgICB9KTtcblxuICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIG5hdmlnYXRlIGJldHdlZW4gdGhlIHJlc3VsdHMgdXNpbmcgdGhlIGtleWJvYXJkXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlTmF2aWdhdGVSZXN1bHRzKGUua2V5Q29kZSwgZSk7XG4gICAgICB0aGlzLmhhbmRsZVN1Ym1pdFJlc3VsdChlLmtleUNvZGUsIHF1ZXJ5SW5wdXQudmFsdWUsIGUpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuX2F1dG9Gb2N1cykge1xuICAgICAgRE9NLm9uY2UocXVlcnlJbnB1dCwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZShxdWVyeUlucHV0LnZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIHNlbGVjdCBhIHJlc3VsdCB3aXRoIHRoZSBtb3VzZVxuICAgIERPTS5kZWxlZ2F0ZSh0aGlzLl9jb250YWluZXIsICcuanMteWV4dC1hdXRvY29tcGxldGUtb3B0aW9uJywgJ2NsaWNrJywgKGV2dCwgdGFyZ2V0KSA9PiB7XG4gICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhc2V0O1xuICAgICAgbGV0IHZhbCA9IGRhdGEuc2hvcnQ7XG5cbiAgICAgIHRoaXMudXBkYXRlUXVlcnkodmFsKTtcbiAgICAgIHRoaXMuX29uU3VibWl0KHZhbCwgZGF0YS5maWx0ZXIpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gV2hlbiB0aGUgdXNlciBpcyB0eXBpbmcgaW4gdGhlIGlucHV0LCBwcm9jZXNzIHRoZSBhdXRvIGNvbXBsZXRlLlxuICAgIERPTS5vbihxdWVyeUlucHV0LCAna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVUeXBpbmcoZS5rZXlDb2RlLCBxdWVyeUlucHV0LnZhbHVlLCBlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjbG9zZSB3aWxsIGhpZGUgdGhlIGF1dG8gY29tcGxldGUgcmVzdWx0cyBhbmQgcmVzZXQgdGhlIHN0YXRlLlxuICAgKi9cbiAgY2xvc2UgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe30pO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXNldHMgdGhlIGNsaWVudCBzdGF0ZSB0byB0aGVpciBvcmlnaW5hbCB2YWx1ZXMgYW5kIHRyaWdnZXJzXG4gICAqIGEgdGVtcGxhdGUtcmVyZW5kZXIgdmlhIHVwZGF0ZVN0YXRlXG4gICAqL1xuICByZXNldCAoKSB7XG4gICAgdGhpcy5fc2VjdGlvbkluZGV4ID0gMDtcbiAgICB0aGlzLl9yZXN1bHRJbmRleCA9IC0xO1xuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHRvIHVwZGF0ZSB0aGUgaW5wdXQgdGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0VmFsdWUgT3B0aW9uIHZhbHVlIHByb3ZpZGVkLlxuICAgKiBJZiBubyB2YWx1ZSBwcm92aWRlZCwgd2UnbGwgdHJ5IHRvIGZpbmQgaXQgYmFzZWQgb24gdGhlIHNlbGVjdGlvbiBpbmRleGVzLlxuICAgKi9cbiAgdXBkYXRlUXVlcnkgKG9wdFZhbHVlKSB7XG4gICAgLy8gT25seSB3YW50IHRvIHVwZGF0ZSB0aGUgcXVlcnkgc3RyaW5nIGlmIHRoZXJlcyBhIHZhbHVlLlxuICAgIC8vIElmIG9uZSBpcyBwcm92aWRlZCwgZ3JlYXQuXG4gICAgLy8gT3RoZXJ3aXNlLCBsZXRzIHRyeSB0byBmaW5kIGl0IGZyb20gdGhlIGN1cnJlbnQgc2VsZWN0aW9uIGluIHRoZSByZXN1bHRzLlxuICAgIGlmIChvcHRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG5cbiAgICAgIGxldCByZXN1bHRzID0gc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzO1xuICAgICAgb3B0VmFsdWUgPSByZXN1bHRzW3RoaXMuX3Jlc3VsdEluZGV4XS5zaG9ydFZhbHVlO1xuICAgIH1cblxuICAgIGxldCBxdWVyeUVsID0gRE9NLnF1ZXJ5KHRoaXMuX3BhcmVudENvbnRhaW5lciwgdGhpcy5faW5wdXRFbCk7XG4gICAgcXVlcnlFbC52YWx1ZSA9IG9wdFZhbHVlO1xuICB9XG5cbiAgaGFuZGxlVHlwaW5nIChrZXksIHZhbHVlLCBlKSB7XG4gICAgbGV0IGlnbm9yZWRLZXlzID0gW1xuICAgICAgS2V5cy5ET1dOLFxuICAgICAgS2V5cy5VUCxcbiAgICAgIEtleXMuQ1RSTCxcbiAgICAgIEtleXMuQUxULFxuICAgICAgS2V5cy5TSElGVCxcbiAgICAgIEtleXMuTEVGVCxcbiAgICAgIEtleXMuUklHSFQsXG4gICAgICBLZXlzLkxFRlRfT1NfS0VZLFxuICAgICAgS2V5cy5SSUdIVF9PU19LRVksXG4gICAgICBLZXlzLkVOVEVSLFxuICAgICAgS2V5cy5UQUIsXG4gICAgICBLZXlzLlNFTEVDVF9LRVlcbiAgICBdO1xuXG4gICAgaWYgKGlnbm9yZWRLZXlzLmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVXNlciBlc2NhcGVzIG91dCBvZiBhdXRvIGNvbXBsZXRlLCBzbyB3ZSByZXNldCBpdCB0byB0aGUgb3JpZ2luYWwgaW5wdXRcbiAgICBpZiAoa2V5ID09PSBLZXlzLkVTQ0FQRSkge1xuICAgICAgdGhpcy51cGRhdGVRdWVyeSh0aGlzLl9vcmlnaW5hbFF1ZXJ5KTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIG9yaWdpbmFsIHZhbHVlIGJhc2VkIG9uIHRoZSB1c2VyIGlucHV0XG4gICAgdGhpcy5fb3JpZ2luYWxRdWVyeSA9IHZhbHVlO1xuXG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHRoaXMuYXV0b0NvbXBsZXRlKHZhbHVlKTtcbiAgfVxuXG4gIGF1dG9Db21wbGV0ZSAoaW5wdXQpIHtcbiAgICBpZiAodGhpcy5pc0ZpbHRlclNlYXJjaCkge1xuICAgICAgdGhpcy5jb3JlLmF1dG9Db21wbGV0ZUZpbHRlcihpbnB1dCwge1xuICAgICAgICBuYW1lc3BhY2U6IHRoaXMubmFtZSxcbiAgICAgICAgdmVydGljYWxLZXk6IHRoaXMuX3ZlcnRpY2FsS2V5LFxuICAgICAgICBiYXJLZXk6IHRoaXMuX2JhcktleSxcbiAgICAgICAgc2VhcmNoUGFyYW1ldGVyczogdGhpcy5fc2VhcmNoUGFyYW1ldGVyc1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl92ZXJ0aWNhbEtleSB8fCB0aGlzLl9iYXJLZXkpIHtcbiAgICAgIHRoaXMuY29yZS5hdXRvQ29tcGxldGVWZXJ0aWNhbChpbnB1dCwgdGhpcy5uYW1lLCB0aGlzLl92ZXJ0aWNhbEtleSwgdGhpcy5fYmFyS2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb3JlLmF1dG9Db21wbGV0ZVVuaXZlcnNhbChpbnB1dCwgdGhpcy5uYW1lKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0cnVlIGlmIHdlIGhhdmUgcmVzdWx0cyBpbiBhbnkgc2VjdGlvblxuICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAqL1xuICBoYXNSZXN1bHRzIChkYXRhKSB7XG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBzZWN0aW9ucyA9IGRhdGFbJ3NlY3Rpb25zJ107XG4gICAgaWYgKCFzZWN0aW9ucykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBzZWN0aW9uc1tpXTtcbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBkYXRhLnJlc3VsdHM7XG4gICAgICBpZiAoIXJlc3VsdHMpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaGFuZGxlTmF2aWdhdGVSZXN1bHRzIChrZXksIGUpIHtcbiAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG4gICAgaWYgKHNlY3Rpb25zID09PSB1bmRlZmluZWQgfHwgc2VjdGlvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUYWJiaW5nIG91dCBvciBlbnRlciBzaG91bGQgY2xvc2UgdGhlIGF1dG8gY29tcGxldGUuXG4gICAgaWYgKGtleSA9PT0gS2V5cy5UQUIpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0cyA9IHNlY3Rpb25zW3RoaXMuX3NlY3Rpb25JbmRleF0ucmVzdWx0cztcbiAgICBpZiAoa2V5ID09PSBLZXlzLlVQKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5fcmVzdWx0SW5kZXggPD0gMCkge1xuICAgICAgICBpZiAodGhpcy5fc2VjdGlvbkluZGV4ID4gMCkge1xuICAgICAgICAgIHRoaXMuX3NlY3Rpb25JbmRleC0tO1xuICAgICAgICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzLmxlbmd0aCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVRdWVyeSh0aGlzLl9vcmlnaW5hbFF1ZXJ5KTtcbiAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3Jlc3VsdEluZGV4LS07XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gS2V5cy5ET1dOKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5fcmVzdWx0SW5kZXggPj0gcmVzdWx0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPCBzZWN0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgdGhpcy5fc2VjdGlvbkluZGV4Kys7XG4gICAgICAgICAgdGhpcy5fcmVzdWx0SW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3Jlc3VsdEluZGV4Kys7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU3VibWl0UmVzdWx0IChrZXksIHZhbHVlLCBlKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gdGhpcy5fc3RhdGUuZ2V0KCdzZWN0aW9ucycpO1xuICAgIGlmIChzZWN0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IHNlY3Rpb25zLmxlbmd0aCA8PSAwKSB7XG4gICAgICBpZiAodGhpcy5pc0ZpbHRlclNlYXJjaCkge1xuICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gc3VibWl0IHRoZSBzZWFyY2ggb24gZW50ZXJcbiAgICBpZiAoa2V5ID09PSBLZXlzLkVOVEVSKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICh0aGlzLmlzRmlsdGVyU2VhcmNoICYmIHRoaXMuX3Jlc3VsdEluZGV4ID09PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBmaWx0ZXIgPSAnJztcbiAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPj0gMCAmJiB0aGlzLl9yZXN1bHRJbmRleCA+PSAwKSB7XG4gICAgICAgIGZpbHRlciA9IEpTT04uc3RyaW5naWZ5KHNlY3Rpb25zW3RoaXMuX3NlY3Rpb25JbmRleF0ucmVzdWx0c1t0aGlzLl9yZXN1bHRJbmRleF0uZmlsdGVyKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGVRdWVyeSh2YWx1ZSk7XG4gICAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gdmFsdWU7XG4gICAgICB0aGlzLl9vblN1Ym1pdCh2YWx1ZSwgZmlsdGVyKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNwZWxsQ2hlY2tDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi9kb20vc2VhcmNocGFyYW1zJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG4vKipcbiAqIFNwZWxsQ2hlY2tDb21wb25lbnQgd2lsbCBzdXBwb3J0IGRpc3BsYXlpbmcgc3VnZ2VzdGlvbiwgYXV0b2NvcnJlY3QgYW5kIGNvbWJpbmVkKG1heWJlIGluIHRoZSBmdXR1cmUpXG4gKiBwcm92aWRlZCBmcm9tIHNwZWxsaW5nIGNvcnJlY3Rpb24uXG4gKlxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwZWxsQ2hlY2tDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlNQRUxMX0NIRUNLO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1NwZWxsQ2hlY2snO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKCkge1xuICAgIHJldHVybiAnc2VhcmNoL3NwZWxsY2hlY2snO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5kZWxldGUoJ3NraXBTcGVsbENoZWNrJyk7XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLmRlbGV0ZSgncXVlcnlUcmlnZ2VyJyk7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSwgdmFsKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIHNob3VsZFNob3c6IGRhdGEuY29ycmVjdGVkUXVlcnkgIT09IHVuZGVmaW5lZCxcbiAgICAgIGNvcnJlY3RlZFF1ZXJ5VXJsOiB0aGlzLl9idWlsZFJlZGlyZWN0UXVlcnlVcmwoZGF0YS5jb3JyZWN0ZWRRdWVyeSwgZGF0YS50eXBlKSxcbiAgICAgIGhlbHBUZXh0OiB0aGlzLl9nZXRIZWxwVGV4dChkYXRhLnR5cGUpXG4gICAgfSwgdmFsKSk7XG4gIH1cblxuICBfYnVpbGRSZWRpcmVjdFF1ZXJ5VXJsIChxdWVyeSwgdHlwZSkge1xuICAgIGlmIChxdWVyeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGxldCBwYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICBwYXJhbXMuc2V0KCdxdWVyeScsIHF1ZXJ5LnZhbHVlKTtcbiAgICBwYXJhbXMuc2V0KCdza2lwU3BlbGxDaGVjaycsIHRydWUpO1xuICAgIHBhcmFtcy5zZXQoJ3F1ZXJ5VHJpZ2dlcicsIHR5cGUudG9Mb3dlckNhc2UoKSk7XG4gICAgcmV0dXJuICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICB9XG5cbiAgX2dldEhlbHBUZXh0ICh0eXBlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdTVUdHRVNUJzpcbiAgICAgICAgcmV0dXJuICdEaWQgeW91IG1lYW46JztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZhY2V0ICovXG5cbi8qKlxuICogTW9kZWwgcmVwcmVzZW50aW5nIGEgZmFjZXQgZmlsdGVyIHdpdGggdGhlIGZvcm1hdCBvZlxuICoge1xuICogICBcImZpZWxkX25hbWVcIjogWyBGaWx0ZXJzLi4uIF0sXG4gKiAgIC4uLlxuICogfVxuICpcbiAqIEBzZWUge0BsaW5rIEZpbHRlcn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZXQge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGZhY2V0IGZpbHRlciBmcm9tIGEgbGlzdCBvZiBGaWx0ZXJzXG4gICAqIEBwYXJhbSAgey4uLkZpbHRlcn0gZmlsdGVycyBUaGUgZmlsdGVycyB0byB1c2UgaW4gdGhpcyBmYWNldFxuICAgKiBAcmV0dXJucyB7RmFjZXR9XG4gICAqL1xuICBzdGF0aWMgZnJvbUZpbHRlcnMgKC4uLmZpbHRlcnMpIHtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBjb25zdCBmbGF0RmlsdGVycyA9IGZpbHRlcnMuZmxhdE1hcChmID0+IGYuJG9yIHx8IGYpO1xuICAgIGZsYXRGaWx0ZXJzLmZvckVhY2goZiA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhmKVswXTtcbiAgICAgIGlmICghZ3JvdXBzW2tleV0pIHtcbiAgICAgICAgZ3JvdXBzW2tleV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1trZXldLnB1c2goZik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IEZhY2V0KGdyb3Vwcyk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZpbHRlckJveENvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IEZhY2V0IGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZhY2V0JztcblxuLyoqXG4gKiBSZW5kZXJzIGEgc2V0IG9mIGZpbHRlcnMsIGFuZCBzZWFyY2hlcyB3aXRoIHRoZW0gd2hlbiBhcHBsaWVkLlxuICogTXVsdGlwbGUgRmlsdGVyQm94IGNvbXBvbmVudHMgd2lsbCBBTkQgdG9nZXRoZXIgYnV0IHdpbGwgbm90IHNoYXJlIHN0YXRlLlxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlckJveENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICBpZiAoIWNvbmZpZy5maWx0ZXJzIHx8ICEoY29uZmlnLmZpbHRlcnMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICdGaWx0ZXJCb3ggcmVxdWlyZXMgZmlsdGVycyB0byBiZSBwcm92aWRlZCBhcyBhbiBhcnJheScsXG4gICAgICAgICdGaWx0ZXJCb3gnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBmaWx0ZXJzIHRvIGRpc3BsYXkgYW5kIGNvbnRyb2xcbiAgICAgKiBAdHlwZSB7b2JqZWN0W119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWx0ZXJDb25maWdzID0gY29uZmlnLmZpbHRlcnM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVydGljYWwga2V5IGZvciB0aGUgc2VhcmNoXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0cmlnZ2VyIGEgc2VhcmNoIG9uIGVhY2ggY2hhbmdlIHRvIGEgZmlsdGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zZWFyY2hPbkNoYW5nZSA9IGNvbmZpZy5zZWFyY2hPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RvciBvZiB0aGUgYXBwbHkgYnV0dG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwcGx5QnV0dG9uU2VsZWN0b3IgPSBjb25maWcuYXBwbHlCdXR0b25TZWxlY3RvciB8fCAnLmpzLXlleHQtZmlsdGVyYm94LWFwcGx5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnRzIGNyZWF0ZWQgZm9yIGVhY2ggZmlsdGVyIGNvbmZpZ1xuICAgICAqIEB0eXBlIHtDb21wb25lbnRbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlckNvbXBvbmVudHMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBmaWx0ZXIgY29tcG9uZW50cyBpbiB0aGUgYm94XG4gICAgICogQHR5cGUge0ZpbHRlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlcnMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRoaXMgZmlsdGVyYm94IGNvbnRhaW5zIGR5bmFtaWMgZmlsdGVycy4gVGhpcyBhZmZlY3RzIHRoZVxuICAgICAqIHRoZSB3YXkgdGhlIGZpbHRlcnMgYXJlIHVzZWQgaW4gdGhlIHNlYXJjaFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faXNEeW5hbWljID0gY29uZmlnLmlzRHluYW1pYyB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gYGZpbHRlcnMvZmlsdGVyYm94YDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdGaWx0ZXJCb3gnO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgIGZpbHRlckNvbmZpZ3M6IHRoaXMuX2ZpbHRlckNvbmZpZ3MsXG4gICAgICBzaG93QXBwbHlCdXR0b246ICF0aGlzLl9zZWFyY2hPbkNoYW5nZVxuICAgIH0pKTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIGlmICh0aGlzLl9maWx0ZXJDb21wb25lbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cy5mb3JFYWNoKGMgPT4gYy5yZW1vdmUoKSk7XG4gICAgICB0aGlzLl9maWx0ZXJDb21wb25lbnRzID0gW107XG4gICAgICB0aGlzLl9maWx0ZXJzID0gW107XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBmaWx0ZXJzIGZyb20gY29uZmlnc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZmlsdGVyQ29uZmlncy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5fZmlsdGVyQ29uZmlnc1tpXTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoY29uZmlnLnR5cGUsIE9iamVjdC5hc3NpZ24oe30sXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmVudENvbnRhaW5lcjogdGhpcy5fY29udGFpbmVyLFxuICAgICAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0uZmlsdGVyJHtpfWAsXG4gICAgICAgICAgc3RvcmVPbkNoYW5nZTogZmFsc2UsXG4gICAgICAgICAgY29udGFpbmVyOiBgLmpzLXlleHQtZmlsdGVyYm94LWZpbHRlciR7aX1gLFxuICAgICAgICAgIG9uQ2hhbmdlOiAoZmlsdGVyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uRmlsdGVyQ2hhbmdlKGksIGZpbHRlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICBjb21wb25lbnQubW91bnQoKTtcbiAgICAgIHRoaXMuX2ZpbHRlckNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgdGhpcy5fZmlsdGVyc1tpXSA9IGNvbXBvbmVudC5nZXRGaWx0ZXIoKTtcbiAgICAgIHRoaXMuX3NhdmVGaWx0ZXJzVG9TdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBhcHBseSBidXR0b25cbiAgICBpZiAoIXRoaXMuX3NlYXJjaE9uQ2hhbmdlKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9hcHBseUJ1dHRvblNlbGVjdG9yKTtcblxuICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICBET00ub24oYnV0dG9uLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fc2F2ZUZpbHRlcnNUb1N0b3JhZ2UoKTtcbiAgICAgICAgICB0aGlzLl9zZWFyY2goKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBjaGFuZ2VzIHRvIGNoaWxkIGZpbHRlciBjb21wb25lbnRzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGNoYW5nZWQgZmlsdGVyXG4gICAqIEBwYXJhbSB7RmlsdGVyfSBmaWx0ZXIgVGhlIG5ldyBmaWx0ZXJcbiAgICovXG4gIG9uRmlsdGVyQ2hhbmdlIChpbmRleCwgZmlsdGVyKSB7XG4gICAgdGhpcy5fZmlsdGVyc1tpbmRleF0gPSBmaWx0ZXI7XG4gICAgaWYgKHRoaXMuX3NlYXJjaE9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLl9zYXZlRmlsdGVyc1RvU3RvcmFnZSgpO1xuICAgICAgdGhpcy5fc2VhcmNoKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgZmlsdGVyIGNvbXBvbmVudHMgYWxvbmcgd2l0aCB0aGlzIGNvbXBvbmVudFxuICAgKi9cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLl9maWx0ZXJDb21wb25lbnRzLmZvckVhY2goYyA9PiBjLnJlbW92ZSgpKTtcbiAgICBzdXBlci5yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIGN1cnJlbnQgZmlsdGVycyB0byBzdG9yYWdlIHRvIGJlIHVzZWQgaW4gdGhlIG5leHQgc2VhcmNoXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2F2ZUZpbHRlcnNUb1N0b3JhZ2UgKCkge1xuICAgIGNvbnN0IHZhbGlkRmlsdGVycyA9IHRoaXMuX2ZpbHRlcnMuZmlsdGVyKGYgPT5cbiAgICAgIGYgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgZiAhPT0gbnVsbCAmJlxuICAgICAgT2JqZWN0LmtleXMoZikubGVuZ3RoID4gMCk7XG5cbiAgICBpZiAodGhpcy5faXNEeW5hbWljKSB7XG4gICAgICBjb25zdCBjb21iaW5lZEZpbHRlciA9IEZhY2V0LmZyb21GaWx0ZXJzKC4uLnZhbGlkRmlsdGVycyk7XG4gICAgICB0aGlzLmNvcmUuc2V0RmFjZXRGaWx0ZXIodGhpcy5uYW1lLCBjb21iaW5lZEZpbHRlciB8fCB7fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbWJpbmVkRmlsdGVyID0gdmFsaWRGaWx0ZXJzLmxlbmd0aCA+IDFcbiAgICAgICAgPyBGaWx0ZXIuYW5kKC4uLnZhbGlkRmlsdGVycylcbiAgICAgICAgOiB2YWxpZEZpbHRlcnNbMF07XG4gICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgY29tYmluZWRGaWx0ZXIgfHwge30pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGEgc2VhcmNoIHdpdGggYWxsIGZpbHRlcnMgaW4gc3RvcmFnZVxuICAgKi9cbiAgX3NlYXJjaCAoKSB7XG4gICAgY29uc3QgYWxsRmlsdGVycyA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GSUxURVIpO1xuICAgIGNvbnN0IHRvdGFsRmlsdGVyID0gYWxsRmlsdGVycy5sZW5ndGggPiAxXG4gICAgICA/IEZpbHRlci5hbmQoLi4uYWxsRmlsdGVycylcbiAgICAgIDogYWxsRmlsdGVyc1swXTtcblxuICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpO1xuXG4gICAgY29uc3QgZmFjZXRGaWx0ZXIgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRkFDRVRfRklMVEVSKVswXTtcblxuICAgIHRoaXMuY29yZS52ZXJ0aWNhbFNlYXJjaCh0aGlzLl92ZXJ0aWNhbEtleSwge1xuICAgICAgaW5wdXQ6IHF1ZXJ5LFxuICAgICAgZmlsdGVyOiBKU09OLnN0cmluZ2lmeSh0b3RhbEZpbHRlciksXG4gICAgICBmYWNldEZpbHRlcjogSlNPTi5zdHJpbmdpZnkoZmFjZXRGaWx0ZXIpXG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZpbHRlck9wdGlvbnNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5cbi8qKlxuICogVGhlIGN1cnJlbnRseSBzdXBwb3J0ZWQgY29udHJvbHNcbiAqIEB0eXBlIHtzdHJpbmdbXX1cbiAqL1xuY29uc3QgU1VQUE9SVEVEX0NPTlRST0xTID0gW1xuICAnc2luZ2xlb3B0aW9uJyxcbiAgJ211bHRpb3B0aW9uJ1xuXTtcblxuLyoqXG4gKiBSZW5kZXJzIGEgc2V0IG9mIG9wdGlvbnMsIGVhY2ggb25lIHJlcHJlc2VudGluZyBhIGZpbHRlciBpbiBhIHNlYXJjaC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyT3B0aW9uc0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICBpZiAoIWNvbmZpZy5jb250cm9sIHx8ICFTVVBQT1JURURfQ09OVFJPTFMuaW5jbHVkZXMoY29uZmlnLmNvbnRyb2wpKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICAnRmlsdGVyT3B0aW9ucyByZXF1aXJlcyBhIHZhbGlkIFwiY29udHJvbFwiIHRvIGJlIHByb3ZpZGVkJyxcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMnKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmZpZy5vcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICAnRmlsdGVyT3B0aW9ucyBjb21wb25lbnQgcmVxdWlyZXMgb3B0aW9ucyB0byBiZSBwcm92aWRlZCcsXG4gICAgICAgICdGaWx0ZXJPcHRpb25zJyk7XG4gICAgfVxuXG4gICAgbGV0IHByZXZpb3VzT3B0aW9ucyA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKHRoaXMubmFtZSk7XG4gICAgaWYgKHR5cGVvZiBwcmV2aW91c09wdGlvbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBwcmV2aW91c09wdGlvbnMgPSBKU09OLnBhcnNlKHByZXZpb3VzT3B0aW9ucyk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgICBsZXQgc2VsZWN0ZWRPcHRpb25zID0gcHJldmlvdXNPcHRpb25zIHx8IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxpc3Qgb2YgZmlsdGVyIG9wdGlvbnMgdG8gZGlzcGxheSB3aXRoIGNoZWNrZWQgc3RhdHVzXG4gICAgICogQHR5cGUge29iamVjdFtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb3B0aW9ucyA9IGNvbmZpZy5vcHRpb25zLm1hcChvID0+ICh7XG4gICAgICAuLi5vLFxuICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkT3B0aW9ucy5sZW5ndGhcbiAgICAgICAgPyBzZWxlY3RlZE9wdGlvbnMuaW5jbHVkZXMoby5sYWJlbClcbiAgICAgICAgOiBvLnNlbGVjdGVkXG4gICAgfSkpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgY29udHJvbCB0byBkaXNwbGF5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2NvbnRyb2wgPSBjb25maWcuY29udHJvbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RvciB1c2VkIGZvciBvcHRpb25zIGluIHRoZSB0ZW1wbGF0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vcHRpb25TZWxlY3RvciA9IGNvbmZpZy5vcHRpb25TZWxlY3RvciB8fCAnLmpzLXlleHQtZmlsdGVyLW9wdGlvbic7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzdG9yZXMgdGhlIGZpbHRlciB0byBzdG9yYWdlIG9uIGVhY2ggY2hhbmdlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdG9yZU9uQ2hhbmdlID0gY29uZmlnLnN0b3JlT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNoYW5nZWRcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vbkNoYW5nZSA9IGNvbmZpZy5vbkNoYW5nZSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB0byBiZSB1c2VkIGluIHRoZSBsZWdlbmRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbGFiZWwgPSBjb25maWcubGFiZWwgfHwgJ0ZpbHRlcnMnO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0ZpbHRlck9wdGlvbnMnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXIsIGJhc2VkIG9uIHRoZSBjb250cm9sXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiBgY29udHJvbHMvJHtjb25maWcuY29udHJvbH1gO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgIG9wdGlvbnM6IHRoaXMuX29wdGlvbnMsXG4gICAgICBsYWJlbDogdGhpcy5fbGFiZWxcbiAgICB9KSk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICBET00uZGVsZWdhdGUoXG4gICAgICBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCBgLiR7dGhpcy5fY29udHJvbH0tZmllbGRzZXRgKSxcbiAgICAgIHRoaXMuX29wdGlvblNlbGVjdG9yLFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlT3B0aW9uKHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4KSwgZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xuXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuX2J1aWxkRmlsdGVyKCk7XG4gICAgICAgIGlmICh0aGlzLl9zdG9yZU9uQ2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGZpbHRlcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9vbkNoYW5nZShmaWx0ZXIpO1xuICAgICAgfSk7XG4gIH1cblxuICBfdXBkYXRlT3B0aW9uIChpbmRleCwgc2VsZWN0ZWQpIHtcbiAgICBpZiAodGhpcy5fY29udHJvbCA9PT0gJ3NpbmdsZW9wdGlvbicpIHtcbiAgICAgIHRoaXMuX29wdGlvbnMgPSB0aGlzLl9vcHRpb25zLm1hcChvID0+IE9iamVjdC5hc3NpZ24oe30sIG8sIHsgc2VsZWN0ZWQ6IGZhbHNlIH0pKTtcbiAgICB9XG5cbiAgICB0aGlzLl9vcHRpb25zW2luZGV4XSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX29wdGlvbnNbaW5kZXhdLCB7IHNlbGVjdGVkIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoKTtcbiAgfVxuXG4gIGdldEZpbHRlciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkRmlsdGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIG9wdGlvbnNcbiAgICovXG4gIGNsZWFyICgpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IERPTS5xdWVyeUFsbCh0aGlzLl9jb250YWluZXIsIHRoaXMuX29wdGlvblNlbGVjdG9yKTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGUgPT4gZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnZmFsc2UnKSk7XG4gICAgdGhpcy5fYXBwbHlGaWx0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCBhbmQgcmV0dXJuIHRoZSBGaWx0ZXIgdGhhdCByZXByZXNlbnRzIHRoZSBjdXJyZW50IHN0YXRlXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYnVpbGRGaWx0ZXIgKCkge1xuICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLl9vcHRpb25zXG4gICAgICAuZmlsdGVyKG8gPT4gby5zZWxlY3RlZClcbiAgICAgIC5tYXAobyA9PiBvLmZpbHRlclxuICAgICAgICA/IG8uZmlsdGVyXG4gICAgICAgIDogRmlsdGVyLmVxdWFsKG8uZmllbGQsIG8udmFsdWUpKTtcblxuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQodGhpcy5uYW1lLCB0aGlzLl9vcHRpb25zLmZpbHRlcihvID0+IG8uc2VsZWN0ZWQpLm1hcChvID0+IG8ubGFiZWwpKTtcbiAgICByZXR1cm4gZmlsdGVycy5sZW5ndGggPiAwXG4gICAgICA/IEZpbHRlci5ncm91cCguLi5maWx0ZXJzKVxuICAgICAgOiB7fTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmFuZ2VGaWx0ZXJDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZ2VGaWx0ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpZWxkIHRvIGZpbHRlciBvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWVsZCA9IGNvbmZpZy5maWVsZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGZpbHRlciB2YWx1ZSBjaGFuZ2VzXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBjb25maWcub25DaGFuZ2UgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzdG9yZXMgdGhlIGZpbHRlciB0byBzdG9yYWdlIG9uIGVhY2ggY2hhbmdlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdG9yZU9uQ2hhbmdlID0gY29uZmlnLnN0b3JlT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICBsZXQgbWluVmFsID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7dGhpcy5uYW1lfS5taW5gKTtcbiAgICBpZiAodHlwZW9mIG1pblZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG1pblZhbCA9IE51bWJlci5wYXJzZUludChtaW5WYWwpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gICAgbGV0IG1heFZhbCA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke3RoaXMubmFtZX0ubWF4YCk7XG4gICAgaWYgKHR5cGVvZiBtaW5WYWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBtYXhWYWwgPSBOdW1iZXIucGFyc2VJbnQobWF4VmFsKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgcmFuZ2UgcmVwcmVzZW50ZWRcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcmFuZ2UgPSB7XG4gICAgICBtaW46IG1pblZhbCB8fCBjb25maWcuaW5pdGlhbE1pbiB8fCAwLFxuICAgICAgbWF4OiBtYXhWYWwgfHwgY29uZmlnLmluaXRpYWxNYXggfHwgMTBcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIHRvIGRpc3BsYXkgZm9yIHRoZSByYW5nZSBjb250cm9sXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RpdGxlID0gY29uZmlnLnRpdGxlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGxhYmVsIHRvIGRpc3BsYXkgZm9yIHRoZSBtaW4gaW5wdXRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbWluTGFiZWwgPSBjb25maWcubWluTGFiZWwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBsYWJlbCB0byBkaXNwbGF5IGZvciB0aGUgbWF4IGlucHV0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX21heExhYmVsID0gY29uZmlnLm1heExhYmVsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IGBjb250cm9scy9yYW5nZWA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUmFuZ2VGaWx0ZXInO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB0aXRsZTogdGhpcy5fdGl0bGUsXG4gICAgICBtaW5MYWJlbDogdGhpcy5fbWluTGFiZWwsXG4gICAgICBtYXhMYWJlbDogdGhpcy5fbWF4TGFiZWwsXG4gICAgICBtaW5WYWx1ZTogdGhpcy5fcmFuZ2UubWluLFxuICAgICAgbWF4VmFsdWU6IHRoaXMuX3JhbmdlLm1heFxuICAgIH0pKTtcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICBET00uZGVsZWdhdGUodGhpcy5fY29udGFpbmVyLCAnLmpzLXlleHQtcmFuZ2UnLCAnY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl91cGRhdGVSYW5nZShldmVudC50YXJnZXQuZGF0YXNldC5rZXksIE51bWJlci5wYXJzZUludChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldE1pbiAodmFsdWUpIHtcbiAgICB0aGlzLl91cGRhdGVSYW5nZSgnbWluJywgdmFsdWUpO1xuICB9XG5cbiAgc2V0TWF4ICh2YWx1ZSkge1xuICAgIHRoaXMuX3VwZGF0ZVJhbmdlKCdtYXgnLCB2YWx1ZSk7XG4gIH1cblxuICBnZXRGaWx0ZXIgKCkge1xuICAgIHJldHVybiB0aGlzLl9idWlsZEZpbHRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgY3VycmVudCByYW5nZSBzdGF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByYW5nZSBrZXkgdG8gdXBkYXRlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgbmV3IHZhbHVlIGZvciB0aGUga2V5XG4gICAqL1xuICBfdXBkYXRlUmFuZ2UgKGtleSwgdmFsdWUpIHtcbiAgICB0aGlzLl9yYW5nZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX3JhbmdlLCB7IFtrZXldOiB2YWx1ZSB9KTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG5cbiAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLl9idWlsZEZpbHRlcigpO1xuICAgIGlmICh0aGlzLl9zdG9yZU9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgZmlsdGVyKTtcbiAgICB9XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHt0aGlzLm5hbWV9Lm1pbmAsIHRoaXMuX3JhbmdlLm1pbik7XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHt0aGlzLm5hbWV9Lm1heGAsIHRoaXMuX3JhbmdlLm1heCk7XG5cbiAgICB0aGlzLl9vbkNoYW5nZShmaWx0ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHRoZSBmaWx0ZXIgcmVwcmVzZW50YXRpb24gb2YgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIF9idWlsZEZpbHRlciAoKSB7XG4gICAgcmV0dXJuIEZpbHRlci5pbmNsdXNpdmVSYW5nZSh0aGlzLl9maWVsZCwgdGhpcy5fcmFuZ2UubWluLCB0aGlzLl9yYW5nZS5tYXgpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEYXRlRmlsdGVyQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5cbi8qKlxuICogQSBmaWx0ZXIgZm9yIGEgcmFuZ2Ugb2YgZGF0ZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVJhbmdlRmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZywgc3lzdGVtQ29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcGkgZmllbGQgdGhpcyBmaWx0ZXIgY29udHJvbHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmllbGQgPSBjb25maWcuZmllbGQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgdG8gZGlzcGxheSBmb3IgdGhlIGRhdGUgcmFuZ2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGl0bGUgPSBjb25maWcudGl0bGU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgbGFiZWwgdG8gc2hvdyBmb3IgdGhlIG1pbiBkYXRlIGlucHV0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX21pbkxhYmVsID0gY29uZmlnLm1pbkxhYmVsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgbGFiZWwgdG8gc2hvdyBmb3IgdGhlIG1heCBkYXRlIGlucHV0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX21heExhYmVsID0gY29uZmlnLm1heExhYmVsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2FsbGJhY2sgdXNlZCB3aGVuIGEgZGF0ZSBpcyBjaGFuZ2VkXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBjb25maWcub25DaGFuZ2UgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzdG9yZXMgdGhlIGZpbHRlciB0byBzdG9yYWdlIG9uIGVhY2ggY2hhbmdlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdG9yZU9uQ2hhbmdlID0gY29uZmlnLnN0b3JlT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGlzIGZpbHRlciByZXByZXNlbnRzIGFuIGV4Y2x1c2l2ZSByYW5nZSwgcmF0aGVyIHRoYW4gYW4gaW5jbHVzaXZlIG9uZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faXNFeGNsdXNpdmUgPSBjb25maWcuaXNFeGNsdXNpdmU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgZm9yIHRoaXMgY29tcG9uZW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSBgY29udHJvbHMvZGF0ZWA7XG5cbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdG9kYXlTdHJpbmcgPSBgJHt0b2RheS5nZXRGdWxsWWVhcigpfS0ke2Ake3RvZGF5LmdldE1vbnRoKCkgKyAxfWAucGFkU3RhcnQoMiwgJzAnKX0tJHtgJHt0b2RheS5nZXREYXRlKCl9YC5wYWRTdGFydCgyLCAnMCcpfWA7XG4gICAgY29uc3QgbWluRGF0ZSA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke3RoaXMubmFtZX0ubWluYCk7XG4gICAgY29uc3QgbWF4RGF0ZSA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke3RoaXMubmFtZX0ubWF4YCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBkYXRlIHJhbmdlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9kYXRlID0ge1xuICAgICAgbWluOiBtaW5EYXRlIHx8IGNvbmZpZy5pbml0aWFsTWluIHx8IHRvZGF5U3RyaW5nLFxuICAgICAgbWF4OiBtYXhEYXRlIHx8IGNvbmZpZy5pbml0aWFsTWF4IHx8IHRvZGF5U3RyaW5nXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdEYXRlUmFuZ2VGaWx0ZXInO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB0aXRsZTogdGhpcy5fdGl0bGUsXG4gICAgICBtaW5MYWJlbDogdGhpcy5fbWluTGFiZWwsXG4gICAgICBtYXhMYWJlbDogdGhpcy5fbWF4TGFiZWwsXG4gICAgICBkYXRlTWluOiB0aGlzLl9kYXRlLm1pbixcbiAgICAgIGRhdGVNYXg6IHRoaXMuX2RhdGUubWF4XG4gICAgfSkpO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIERPTS5kZWxlZ2F0ZSh0aGlzLl9jb250YWluZXIsICcuanMteWV4dC1kYXRlJywgJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdXBkYXRlUmFuZ2UoZXZlbnQudGFyZ2V0LmRhdGFzZXQua2V5LCBldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbWluIGRhdGUgdG8gdGhlIG9uZSBwcm92aWRlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0ZSBEYXRlIHRvIHNldCBpbiB5eXl5LW1tLWRkIHN0cmluZyBmb3JtYXRcbiAgICovXG4gIHNldE1pbiAoZGF0ZSkge1xuICAgIHRoaXMuX3VwZGF0ZVJhbmdlKCdtaW4nLCBkYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG1heCBkYXRlIHRvIHRoZSBvbmUgcHJvdmlkZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGUgRGF0ZSB0byBzZXQgaW4geXl5eS1tbS1kZCBzdHJpbmcgZm9ybWF0XG4gICAqL1xuICBzZXRNYXggKGRhdGUpIHtcbiAgICB0aGlzLl91cGRhdGVSYW5nZSgnbWF4JywgZGF0ZSk7XG4gIH1cblxuICBnZXRGaWx0ZXIgKCkge1xuICAgIHJldHVybiB0aGlzLl9idWlsZEZpbHRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGRhdGUgcmFuZ2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IGZvciB0aGUgZGF0ZSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIHN0cmluZyBkYXRlIHZhbHVlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdXBkYXRlUmFuZ2UgKGtleSwgdmFsdWUpIHtcbiAgICB0aGlzLl9kYXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZGF0ZSwgeyBba2V5XTogdmFsdWUgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSgpO1xuXG4gICAgY29uc3QgZmlsdGVyID0gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgICBpZiAodGhpcy5fc3RvcmVPbkNoYW5nZSkge1xuICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGZpbHRlcik7XG4gICAgfVxuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7dGhpcy5uYW1lfS5taW5gLCB0aGlzLl9kYXRlLm1pbik7XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHt0aGlzLm5hbWV9Lm1heGAsIHRoaXMuX2RhdGUubWF4KTtcblxuICAgIHRoaXMuX29uQ2hhbmdlKGZpbHRlcik7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0IGFuIGFwaSBmaWx0ZXIgd2l0aCB0aGUgY3VycmVudCBkYXRlIHN0YXRlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYnVpbGRGaWx0ZXIgKCkge1xuICAgIGlmICh0aGlzLl9kYXRlLm1pbiA9PT0gJycgfHwgdGhpcy5fZGF0ZS5tYXggPT09ICcnKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9pc0V4Y2x1c2l2ZVxuICAgICAgPyBGaWx0ZXIuZXhjbHVzaXZlUmFuZ2UodGhpcy5fZmllbGQsIHRoaXMuX2RhdGUubWluLCB0aGlzLl9kYXRlLm1heClcbiAgICAgIDogRmlsdGVyLmluY2x1c2l2ZVJhbmdlKHRoaXMuX2ZpZWxkLCB0aGlzLl9kYXRlLm1pbiwgdGhpcy5fZGF0ZS5tYXgpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEeW5hbWljRmlsdGVyc0NvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuLyoqXG4gKiBEaXNwbGF5cyBhIHNldCBvZiBkeW5hbWljIGZpbHRlcnMgcmV0dXJuZWQgZnJvbSB0aGUgYmFja2VuZFxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNGaWx0ZXJzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZywgc3lzdGVtQ29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBzZWFyY2hcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRyaWdnZXIgYSBzZWFyY2ggb24gZWFjaCBjaGFuZ2UgdG8gYSBmaWx0ZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaE9uQ2hhbmdlID0gY29uZmlnLnNlYXJjaE9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdG9yIG9mIHRoZSBhcHBseSBidXR0b25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBwbHlCdXR0b25TZWxlY3RvciA9IGNvbmZpZy5hcHBseUJ1dHRvblNlbGVjdG9yIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29udHJvbHMgdG8gdXNlIGZvciBlYWNoIGZpZWxkLiBFYWNoIHR5cGUgb2YgZmlsdGVyIGhhcyBhIGRlZmF1bHRcbiAgICAgKiAkZXEgOiBtdWx0aW9wdGlvbiAoY2hlY2tib3gpXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9maWVsZENvbnRyb2xzID0gY29uZmlnLmZpZWxkQ29udHJvbHMgfHwge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdmaWx0ZXJzL2R5bmFtaWMnO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIGZvciB0aGUgZGF0YSBzdG9yYWdlIHRvIGxpc3RlbiBmb3IgdXBkYXRlcyBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5EWU5BTUlDX0ZJTFRFUlM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmlsdGVyIGJveCB0aGF0IGRpc3BsYXlzIHRoZSBkeW5hbWljIGZpbHRlcnNcbiAgICAgKiBAdHlwZSB7RmlsdGVyQm94Q29tcG9uZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVyYm94ID0gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdEeW5hbWljRmlsdGVycyc7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICB0aGlzLmNvcmUuZW5hYmxlRHluYW1pY0ZpbHRlcnMoKTtcblxuICAgIGlmICh0aGlzLl9maWx0ZXJib3gpIHtcbiAgICAgIHRoaXMuX2ZpbHRlcmJveC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBsZXQgeyBmaWx0ZXJzIH0gPSB0aGlzLl9zdGF0ZS5nZXQoKTtcblxuICAgIGlmICghZmlsdGVycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZpbHRlcnMgPSBmaWx0ZXJzLm1hcChmID0+IHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBmLCB7XG4gICAgICAgIHR5cGU6ICdGaWx0ZXJPcHRpb25zJyxcbiAgICAgICAgY29udHJvbDogdGhpcy5fZmllbGRDb250cm9sc1tmLmZpZWxkSWRdIHx8ICdtdWx0aW9wdGlvbidcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fZmlsdGVyYm94ID0gdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZShcbiAgICAgICdGaWx0ZXJCb3gnLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgICBwYXJlbnRDb250YWluZXI6IHRoaXMuX2NvbnRhaW5lcixcbiAgICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfS5maWx0ZXJib3hgLFxuICAgICAgICBjb250YWluZXI6ICcuanMteWV4dC1keW5hbWljLWZpbHRlcnMnLFxuICAgICAgICBzZWFyY2hPbkNoYW5nZTogdGhpcy5fc2VhcmNoT25DaGFuZ2UsXG4gICAgICAgIHZlcnRpY2FsS2V5OiB0aGlzLl92ZXJ0aWNhbEtleSxcbiAgICAgICAgaXNEeW5hbWljOiB0cnVlLFxuICAgICAgICBmaWx0ZXJzXG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLl9maWx0ZXJib3gubW91bnQoKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgR2VvTG9jYXRpb25Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG5jb25zdCBNRVRFUlNfUEVSX01JTEUgPSAxNjA5LjM0NDtcblxuY29uc3QgREVGQVVMVF9DT05GSUcgPSB7XG4gIC8qKlxuICAgKiBUaGUgcmFkaXVzLCBpbiBtaWxlcywgYXJvdW5kIHRoZSB1c2VyJ3MgbG9jYXRpb24gdG8gZmluZCByZXN1bHRzLlxuICAgKiBJZiBsb2NhdGlvbiBhY2N1cmFjeSBpcyBsb3csIGEgbGFyZ2VyIHJhZGl1cyBtYXkgYmUgdXNlZCBhdXRvbWF0aWNhbGx5XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICByYWRpdXM6IDUwLFxuXG4gIC8qKlxuICAgKiBUaGUgdmVydGljYWwga2V5IHRvIHVzZVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdmVydGljYWxLZXk6IG51bGwsXG5cbiAgLyoqXG4gICAqIElmIHRydWUsIHN1Ym1pdHMgYSBzZWFyY2ggd2hlbiB0aGUgdmFsdWUgaXMgY2hhbmdlZFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHNlYXJjaE9uQ2hhbmdlOiBmYWxzZSxcblxuICAvKipcbiAgICogVGhlIHRpdGxlIHRvIGRpc3BsYXlcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHRpdGxlOiAnTG9jYXRpb24nLFxuXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgdG8gZGlzcGxheVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgbGFiZWw6ICdMb2NhdGlvbicsXG5cbiAgLyoqXG4gICAqIFRoZSBpY29uIHVybCB0byBzaG93IGluIHRoZSBnZW8gYnV0dG9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZW9CdXR0b25JY29uOiAnJyxcblxuICAvKipcbiAgICogVGhlIHRleHQgdG8gc2hvdyBpbiB0aGUgZ2VvIGJ1dHRvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2VvQnV0dG9uVGV4dDogJ1VzZSBNeSBMb2NhdGlvbicsXG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IHRvIHNob3cgd2hlbiBnZW9sb2NhdGlvbiBpcyBlbmFibGVkXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBlbmFibGVkVGV4dDogJ0N1cnJlbnQgTG9jYXRpb24nLFxuXG4gIC8qKlxuICAgKiBUaGUgdGV4dCB0byBzaG93IHdoZW4gbG9hZGluZyB0aGUgdXNlcidzIGxvY2F0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBsb2FkaW5nVGV4dDogJ0ZpbmRpbmcgWW91ciBMb2NhdGlvbi4uLicsXG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IHRvIHNob3cgaWYgdGhlIHVzZXIncyBsb2NhdGlvbiBjYW5ub3QgYmUgZm91bmRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGVycm9yVGV4dDogJ0NvdWxkIE5vdCBGaW5kIFlvdXIgTG9jYXRpb24nLFxuXG4gIC8qKlxuICAgKiBUaGUgQ1NTIHNlbGVjdG9yIG9mIHRoZSB0b2dnbGUgYnV0dG9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBidXR0b25TZWxlY3RvcjogJy5qcy15eHQtR2VvTG9jYXRpb25GaWx0ZXItYnV0dG9uJyxcblxuICAvKipcbiAgICogVGhlIENTUyBzZWxlY3RvciBvZiB0aGUgcXVlcnkgaW5wdXRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGlucHV0U2VsZWN0b3I6ICcuanMteXh0LUdlb0xvY2F0aW9uRmlsdGVyLWlucHV0J1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIGEgYnV0dG9uIHRoYXQgd2hlbiBjbGlja2VkIGFkZHMgYSBzdGF0aWMgZmlsdGVyIHJlcHJlc2VudGluZyB0aGUgdXNlcidzIGxvY2F0aW9uXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VvTG9jYXRpb25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoeyAuLi5ERUZBVUxUX0NPTkZJRywgLi4uY29uZmlnIH0sIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgc3RyaW5nIHRvIHVzZSBmb3IgdGhlIGlucHV0IGJveCwgcHJvdmlkZWQgdG8gdGVtcGxhdGUgZm9yIHJlbmRlcmluZy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlcnkgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCkgfHwgJyc7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gLCBxID0+IHtcbiAgICAgIHRoaXMucXVlcnkgPSBxO1xuICAgICAgdGhpcy5zZXRTdGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpbHRlciB0byB1c2UgZm9yIHRoZSBjdXJyZW50IHF1ZXJ5XG4gICAgICogQHR5cGUge0ZpbHRlcn1cbiAgICAgKi9cbiAgICB0aGlzLmZpbHRlciA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCkgfHwge307XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpbHRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gSlNPTi5wYXJzZSh0aGlzLmZpbHRlcik7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWAsIGYgPT4geyB0aGlzLmZpbHRlciA9IGY7IH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0dlb0xvY2F0aW9uRmlsdGVyJztcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lICgpIHtcbiAgICByZXR1cm4gJ2NvbnRyb2xzL2dlb2xvY2F0aW9uJztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgbGV0IHBsYWNlaG9sZGVyID0gJyc7XG4gICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcbiAgICAgIHBsYWNlaG9sZGVyID0gdGhpcy5fY29uZmlnLmVuYWJsZWRUZXh0O1xuICAgIH1cbiAgICBpZiAoZGF0YS5nZW9Mb2FkaW5nKSB7XG4gICAgICBwbGFjZWhvbGRlciA9IHRoaXMuX2NvbmZpZy5sb2FkaW5nVGV4dDtcbiAgICB9XG4gICAgaWYgKGRhdGEuZ2VvRXJyb3IpIHtcbiAgICAgIHBsYWNlaG9sZGVyID0gdGhpcy5fY29uZmlnLmVycm9yVGV4dDtcbiAgICB9XG4gICAgc3VwZXIuc2V0U3RhdGUoe1xuICAgICAgLi4uZGF0YSxcbiAgICAgIHRpdGxlOiB0aGlzLl9jb25maWcudGl0bGUsXG4gICAgICBnZW9FbmFibGVkOiB0aGlzLl9lbmFibGVkLFxuICAgICAgcXVlcnk6IHRoaXMucXVlcnksXG4gICAgICBsYWJlbFRleHQ6IHRoaXMuX2NvbmZpZy5sYWJlbCxcbiAgICAgIGVuYWJsZWRUZXh0OiB0aGlzLl9jb25maWcuZW5hYmxlZFRleHQsXG4gICAgICBsb2FkaW5nVGV4dDogdGhpcy5fY29uZmlnLmxvYWRpbmdUZXh0LFxuICAgICAgZXJyb3JUZXh0OiB0aGlzLl9jb25maWcuZXJyb3JUZXh0LFxuICAgICAgZ2VvQnV0dG9uSWNvbjogdGhpcy5fY29uZmlnLmdlb0J1dHRvbkljb24sXG4gICAgICBnZW9WYWx1ZTogdGhpcy5fZW5hYmxlZCB8fCBkYXRhLmdlb0xvYWRpbmcgfHwgZGF0YS5nZW9FcnJvciA/ICcnIDogdGhpcy5xdWVyeSxcbiAgICAgIGdlb1BsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgIGdlb0J1dHRvblRleHQ6IHRoaXMuX2NvbmZpZy5nZW9CdXR0b25UZXh0XG4gICAgfSk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlKSB7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGUucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5faW5pdEF1dG9Db21wbGV0ZSh0aGlzLl9jb25maWcuaW5wdXRTZWxlY3Rvcik7XG4gICAgRE9NLm9uKHRoaXMuX2NvbmZpZy5idXR0b25TZWxlY3RvciwgJ2NsaWNrJywgKCkgPT4gdGhpcy5fdG9nZ2xlR2VvRmlsdGVyKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgaGVscGVyIG1ldGhvZCB0byB3aXJlIHVwIG91ciBhdXRvIGNvbXBsZXRlIG9uIGFuIGlucHV0IHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBhdXRvIGNvbXBsZXRlIGNvbXBvbmVudCB0b1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luaXRBdXRvQ29tcGxldGUgKGlucHV0U2VsZWN0b3IpIHtcbiAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlKSB7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGUucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fYXV0b2NvbXBsZXRlID0gdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZSgnQXV0b0NvbXBsZXRlJywge1xuICAgICAgcGFyZW50Q29udGFpbmVyOiB0aGlzLl9jb250YWluZXIsXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmF1dG9jb21wbGV0ZWAsXG4gICAgICBpc0ZpbHRlclNlYXJjaDogdHJ1ZSxcbiAgICAgIGNvbnRhaW5lcjogJy5qcy15eHQtR2VvTG9jYXRpb25GaWx0ZXItYXV0b2NvbXBsZXRlJyxcbiAgICAgIG9yaWdpbmFsUXVlcnk6IHRoaXMucXVlcnksXG4gICAgICBvcmlnaW5hbEZpbHRlcjogdGhpcy5maWx0ZXIsXG4gICAgICBpbnB1dEVsOiBpbnB1dFNlbGVjdG9yLFxuICAgICAgdmVydGljYWxLZXk6IHRoaXMuX3ZlcnRpY2FsS2V5LFxuICAgICAgb25TdWJtaXQ6IChxdWVyeSwgZmlsdGVyKSA9PiB7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBGaWx0ZXIuZnJvbVJlc3BvbnNlKGZpbHRlcik7XG4gICAgICAgIHRoaXMuX3NhdmVEYXRhVG9TdG9yYWdlKHF1ZXJ5LCB0aGlzLmZpbHRlcik7XG4gICAgICAgIHRoaXMuX2VuYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBzdGF0aWMgZmlsdGVyIHJlcHJlc2VudGluZyB0aGUgdXNlcidzIGxvY2F0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdG9nZ2xlR2VvRmlsdGVyICgpIHtcbiAgICBpZiAoIW5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdlb0Vycm9yOiB0cnVlIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fZW5hYmxlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdlb0xvYWRpbmc6IHRydWUgfSk7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxuICAgICAgICBwb3NpdGlvbiA9PiB7XG4gICAgICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5fYnVpbGRGaWx0ZXIocG9zaXRpb24pO1xuICAgICAgICAgIHRoaXMuX3NhdmVEYXRhVG9TdG9yYWdlKCcnLCBmaWx0ZXIsIHBvc2l0aW9uKTtcbiAgICAgICAgICB0aGlzLl9lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHt9KTtcbiAgICAgICAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2UuZGVsZXRlKGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gKTtcbiAgICAgICAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2UuZGVsZXRlKGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCk7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHRoaXMuc2V0U3RhdGUoeyBnZW9FcnJvcjogdHJ1ZSB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2F2ZXMgdGhlIHByb3ZpZGVkIGZpbHRlciB1bmRlciB0aGlzIGNvbXBvbmVudCdzIG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IFRoZSBxdWVyeSB0byBzYXZlXG4gICAqIEBwYXJhbSB7RmlsdGVyfSBmaWx0ZXIgVGhlIGZpbHRlciB0byBzYXZlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwb3NpdGlvbiBUaGUgcG9zaXRpb24gdG8gc2F2ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NhdmVEYXRhVG9TdG9yYWdlIChxdWVyeSwgZmlsdGVyLCBwb3NpdGlvbikge1xuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWAsIHF1ZXJ5KTtcbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCwgZmlsdGVyKTtcbiAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgZmlsdGVyKTtcblxuICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLkdFT0xPQ0FUSU9OLCB7XG4gICAgICAgIGxhdDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICBsbmc6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgIHJhZGl1czogcG9zaXRpb24uY29vcmRzLmFjY3VyYWN5XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnNlYXJjaE9uQ2hhbmdlKSB7XG4gICAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgICBsZXQgdG90YWxGaWx0ZXIgPSBmaWx0ZXJzWzBdO1xuICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICB0b3RhbEZpbHRlciA9IEZpbHRlci5hbmQoLi4uZmlsdGVycyk7XG4gICAgICB9XG4gICAgICBjb25zdCBzZWFyY2hRdWVyeSA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKSB8fCAnJztcbiAgICAgIGNvbnN0IGZhY2V0RmlsdGVyID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZBQ0VUX0ZJTFRFUilbMF07XG5cbiAgICAgIHRoaXMuY29yZS52ZXJ0aWNhbFNlYXJjaCh0aGlzLl9jb25maWcudmVydGljYWxLZXksIHtcbiAgICAgICAgaW5wdXQ6IHNlYXJjaFF1ZXJ5LFxuICAgICAgICBmaWx0ZXI6IEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSxcbiAgICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGEgcG9zaXRpb24sIGNvbnN0cnVjdCBhIEZpbHRlciBvYmplY3RcbiAgICogQHBhcmFtIHtQb3N0aXRpb259IHBvc2l0aW9uIFRoZSBwb3NpdGlvblxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2J1aWxkRmlsdGVyIChwb3NpdGlvbikge1xuICAgIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSwgYWNjdXJhY3kgfSA9IHBvc2l0aW9uLmNvb3JkcztcbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1heChhY2N1cmFjeSwgdGhpcy5fY29uZmlnLnJhZGl1cyAqIE1FVEVSU19QRVJfTUlMRSk7XG4gICAgcmV0dXJuIEZpbHRlci5wb3NpdGlvbihsYXRpdHVkZSwgbG9uZ2l0dWRlLCByYWRpdXMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEaXJlY3RBbnN3ZXJDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuLyoqXG4gKiBFdmVudFR5cGVzIGFyZSBleHBsaWNpdCBzdHJpbmdzIGRlZmluZWRcbiAqIGZvciB3aGF0IHRoZSBzZXJ2ZXIgZXhwZWN0cyBmb3IgYW5hbHl0aWNzLlxuICpcbiAqIEBlbnVtXG4gKi9cbmNvbnN0IEV2ZW50VHlwZXMgPSB7XG4gIFRIVU1CU19VUDogJ1RIVU1CU19VUCcsXG4gIFRIVU1CU19ET1dOOiAnVEhVTUJTX0RPV04nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RBbnN3ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogUmVjaWV2ZSB1cGRhdGVzIGZyb20gc3RvcmFnZSBiYXNlZCBvbiB0aGlzIGluZGV4XG4gICAgICogQHR5cGUge1N0b3JhZ2VLZXl9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZm9ybSB1c2VkIGZvciBzdWJtaXR0aW5nIHRoZSBmZWVkYmFja1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fZm9ybUVsID0gY29uZmlnLmZvcm1FbCB8fCAnLmpzLWRpcmVjdEFuc3dlci1mZWVkYmFjay1mb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBgdGh1bWJzIHVwYCBjc3Mgc2VsZWN0b3IgdG8gYmluZCB1aSBpbnRlcmFjdGlvbiB0byBmb3IgcmVwb3J0aW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90aHVtYnNVcFNlbGVjdG9yID0gY29uZmlnLnRodW1ic1VwU2VsZWN0b3IgfHwgJy5qcy1kaXJlY3RBbnN3ZXItdGh1bWJVcCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYHRodW1icyBkb3duYCBjc3Mgc2VsZWN0b3IgdG8gYmluZCB1aSBpbnRlcmFjdGlvbiB0byBmb3IgcmVwb3J0aW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90aHVtYnNEb3duU2VsZWN0b3IgPSBjb25maWcudGh1bWJzRG93blNlbGVjdG9yIHx8ICcuanMtZGlyZWN0QW5zd2VyLXRodW1iRG93bic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlzcGxheSB0ZXh0IGZvciB0aGUgVmlldyBEZXRhaWxzIGNsaWNrIHRvIGFjdGlvbiBsaW5rXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92aWV3RGV0YWlsc1RleHQgPSBjb25maWcudmlld0RldGFpbHNUZXh0IHx8ICdWaWV3IERldGFpbHMnO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0RpcmVjdEFuc3dlcic7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvZGlyZWN0YW5zd2VyJztcbiAgfVxuXG4gIC8qKlxuICAgKiBiZWZvcmVNb3VudCwgb25seSBkaXNwbGF5IHRoZSBkaXJlY3QgYW5zd2VyIGNvbXBvbmVudCBpZiBpdCBoYXMgZGF0YVxuICAgKi9cbiAgYmVmb3JlTW91bnQgKCkge1xuICAgIGlmICghdGhpcy5oYXNTdGF0ZSgnYW5zd2VyJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBET00gaXMgY29uc3RydWN0ZWQsXG4gICAqIHdlIHdhbnQgdG8gd2lyZSB1cCB0aGUgYmVoYXZpb3IgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIHF1YWxpdHkgZmVlZGJhY2sgcmVwb3J0aW5nICh0aHVtYnN1cC9kb3duKVxuICAgKi9cbiAgb25Nb3VudCAoKSB7XG4gICAgLy8gQXZvaWQgYmluZGluZ3MgaWYgdGhlIGZlZWRiYWNrIGhhcyBwcmV2aW91c2x5IGJlZW4gc3VibWl0dGVkXG4gICAgaWYgKHRoaXMuZ2V0U3RhdGUoJ2ZlZWRiYWNrU3VibWl0dGVkJykgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIEZvciBXQ0FHIGNvbXBsaWFuY2UsIHRoZSBmZWVkYmFjayBzaG91bGQgYmUgYSBzdWJtaXR0YWJsZSBmb3JtXG4gICAgRE9NLm9uKHRoaXMuX2Zvcm1FbCwgJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBsZXQgZm9ybUVsID0gZS50YXJnZXQ7XG4gICAgICBsZXQgY2hlY2tlZFZhbHVlID0gRE9NLnF1ZXJ5KGZvcm1FbCwgJ2lucHV0OmNoZWNrZWQnKS52YWx1ZSA9PT0gJ3RydWUnO1xuXG4gICAgICB0aGlzLnJlcG9ydFF1YWxpdHkoY2hlY2tlZFZhbHVlKTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAnZmVlZGJhY2tTdWJtaXR0ZWQnOiB0cnVlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIElzIHRoaXMgYWN0dWFsbHkgbmVjZXNzYXJ5PyBJIGd1ZXNzIGl0J3Mgb25seSBuZWNlc3NhcnkgaWYgdGhlXG4gICAgLy8gc3VibWl0IGJ1dHRvbiBpcyBoaWRkZW4uXG4gICAgRE9NLm9uKHRoaXMuX3RodW1ic1VwU2VsZWN0b3IsICdjbGljaycsICgpID0+IHsgRE9NLnRyaWdnZXIodGhpcy5fZm9ybUVsLCAnc3VibWl0Jyk7IH0pO1xuICAgIERPTS5vbih0aGlzLl90aHVtYnNEb3duU2VsZWN0b3IsICdjbGljaycsICgpID0+IHsgRE9NLnRyaWdnZXIodGhpcy5fZm9ybUVsLCAnc3VibWl0Jyk7IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHVwZGF0ZVN0YXRlIGVuYWJsZXMgZm9yIHBhcnRpYWwgdXBkYXRlcyAodGhlIGRlbHRhIGJldHdlZW4gdGhlIG9sZCBhbmQgbmV3KVxuICAgKiBAdHlwZSB7b2JqZWN0fSBUaGUgbmV3IHN0YXRlIHRvIGFwcGx5IHRvIHRoZSBvbGRcbiAgICovXG4gIHVwZGF0ZVN0YXRlIChzdGF0ZSA9IHt9KSB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmdldFN0YXRlKCksIHN0YXRlKTtcbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIGV2ZW50T3B0aW9uczogdGhpcy5ldmVudE9wdGlvbnMoZGF0YSksXG4gICAgICB2aWV3RGV0YWlsc1RleHQ6IHRoaXMuX3ZpZXdEZXRhaWxzVGV4dFxuICAgIH0pKTtcbiAgfVxuXG4gIGV2ZW50T3B0aW9ucyAoZGF0YSkge1xuICAgIGlmICghZGF0YSB8fCBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdmVydGljYWxDb25maWdJZDogZGF0YS5yZWxhdGVkSXRlbS52ZXJ0aWNhbENvbmZpZ0lkLFxuICAgICAgc2VhcmNoZXI6ICdVTklWRVJTQUwnLFxuICAgICAgZW50aXR5SWQ6IGRhdGEucmVsYXRlZEl0ZW0uZGF0YS5pZCxcbiAgICAgIGN0YUxhYmVsOiB0aGlzLl92aWV3RGV0YWlsc1RleHQudG9VcHBlckNhc2UoKS5yZXBsYWNlKCcgJywgJ18nKVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcG9ydFF1YWxpdHkgd2lsbCBzZW5kIHRoZSBxdWFsaXR5IGZlZWRiYWNrIHRvIGFuYWx5dGljc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzR29vZCB0cnVlIGlmIHRoZSBhbnN3ZXIgaXMgd2hhdCB5b3Ugd2VyZSBsb29raW5nIGZvclxuICAgKi9cbiAgcmVwb3J0UXVhbGl0eSAoaXNHb29kKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gaXNHb29kID09PSB0cnVlID8gRXZlbnRUeXBlcy5USFVNQlNfVVAgOiBFdmVudFR5cGVzLlRIVU1CU19ET1dOO1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEFuYWx5dGljc0V2ZW50KGV2ZW50VHlwZSlcbiAgICAgIC5hZGRPcHRpb25zKHtcbiAgICAgICAgJ2RpcmVjdEFuc3dlcic6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlci5yZXBvcnQoZXZlbnQpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBSZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihvcHRzLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogdmVydGljYWxDb25maWdJZCB1c2VkIGZvciBhbmFseXRpY3MgYW5kIHBhc3NlZCB0byBjaGlsZHJlblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbENvbmZpZ0lkID0gb3B0cy52ZXJ0aWNhbENvbmZpZ0lkO1xuXG4gICAgLyoqXG4gICAgICogaXNVbml2ZXJzYWwgaXMgdXNlZCBmb3IgYW5hbHl0aWNzIGFuZCBwYXNzZWQgdG8gY2hpbGRyZW4gYW5kIGlzIHNldCB0b1xuICAgICAqIHRydWUgaWYgdGhpcyBjb21wb25lbnQgaXMgYWRkZWQgYnkgdGhlIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2lzVW5pdmVyc2FsID0gb3B0cy5pc1VuaXZlcnNhbCB8fCBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdSZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvcmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogaGVscGVyIHRvIGNvbnN0cnVjdCB0aGUgZXZlbnRPcHRpb25zIG9iamVjdCBmb3IgdGhlIHRpdGxlIGxpbmtcbiAgICogQHBhcmFtIGVudGl0eUlkIFRoZSBJRCBvZiB0aGUgcmVzdWx0IGl0ZW0sIGlmIHByZXNlbnRcbiAgICogQHBhcmFtIHVybCBUaGUgdXJsIG9mIHRoZSByZXN1bHQgaXRlbSwgaWYgcHJlc2VudFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZXZlbnRPcHRpb25zIChlbnRpdHlJZCwgdXJsKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHZlcnRpY2FsQ29uZmlnSWQ6IHRoaXMuX3ZlcnRpY2FsQ29uZmlnSWQsXG4gICAgICBzZWFyY2hlcjogdGhpcy5faXNVbml2ZXJzYWwgPyAnVU5JVkVSU0FMJyA6ICdWRVJUSUNBTCdcbiAgICB9O1xuXG4gICAgaWYgKGVudGl0eUlkKSB7XG4gICAgICBvcHRpb25zLmVudGl0eUlkID0gZW50aXR5SWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIH1cblxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXNzZXMgZXZlbnRPcHRpb25zIHRvIHRoZSB2aWV3TW9kZWxcbiAgICogQG92ZXJyaWRlXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEByZXR1cm5zIHtSZXN1bHRzSXRlbUNvbXBvbmVudH1cbiAgICovXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgZXZlbnRPcHRpb25zOiB0aGlzLmV2ZW50T3B0aW9ucyhkYXRhLmlkLCBkYXRhLmxpbmspXG4gICAgfSkpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50ICovXG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNJdGVtQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihvcHRzLCBzeXN0ZW1Db25maWcpO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0xvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL2xvY2F0aW9ucmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMsIHN5c3RlbUNvbmZpZyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvZXZlbnRyZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNJdGVtQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSwgc3lzdGVtT3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cywgc3lzdGVtT3B0cyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL3Blb3BsZXJlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNYXBQcm92aWRlciAqL1xuXG4vKipcbiAqIEEgTWFwUHJvdmlkZXIgaXMgYW4gaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB0aGF0IHNob3VsZCBiZSBpbXBsZW1lbnRlZFxuICogaW4gb3JkZXIgdG8gaW50ZWdyYXRlIHdpdGggYSBUaGlyZCBQYXJ0eSBNYXAgcHJvdmlkZXIgZm9yXG4gKiBpbnRlcmFjdGl2ZSBtYXBzLiBNYXBQcm92aWRlcnMgYXJlIHVzZWQgYnkgdGhlIE1hcENvbXBvbmVudC5cbiAqXG4gKiBJbXBsZW1lbnRhdGlvbnMgc2hvdWxkIGV4dGVuZCB0aGlzIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBUaGUgQVBJIEtleSB1c2VkIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBtYXAgcHJvdmlkZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2FwaUtleSA9IGNvbmZpZy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgem9vbSBsZXZlbCBvZiB0aGUgbWFwLCBkZWZhdWx0cyB0byA5XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl96b29tID0gY29uZmlnLnpvb20gfHwgOTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGNvb3JkaW5hdGVzIHRvIGRpc3BsYXkgaWYgdGhlcmUgYXJlIG5vIHJlc3VsdHMgcmV0dXJuZWRcbiAgICAgKiBPbmx5IHVzZWQgaWYgc2hvd0VtcHR5TWFwIGlzIHNldCB0byB0cnVlXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9kZWZhdWx0UG9zaXRpb24gPSBjb25maWcuZGVmYXVsdFBvc2l0aW9uIHx8IHsgbGF0OiAzNy4wOTAyLCBsbmc6IC05NS43MTI5IH07XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGFuIGVtcHR5IG1hcCBzaG91bGQgYmUgc2hvd24gd2hlbiB0aGVyZSBhcmUgbm8gcmVzdWx0c1xuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX3Nob3dFbXB0eU1hcCA9IGNvbmZpZy5zaG93RW1wdHlNYXAgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgdW5kZXJseWluZyBtYXAgaW5zdGFuY2UsIGNyZWF0ZWQgYnkgdGhlIGV4dGVybmFsIGxpYi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX21hcCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUZW1wb3JhcnkgYm9vbGVhbiB0cmFja2luZyB3aGV0aGVyIG9yIG5vdCB0aGUgZXh0ZXJuYWwgSlMgbGlicmFyeSBpcyBsb2FkZWQgKHNlZSBUT0RPIGJlbG93KVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2lzTG9hZGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiBhIHBpbiBpcyBjbGlja2VkLiBUaGUgY2xpY2tlZCBpdGVtKHMpIGFyZSBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMuX29uUGluQ2xpY2sgPSBjb25maWcub25QaW5DbGljayB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIG9uY2UgdGhlIEphdmFzY3JpcHQgaXMgbG9hZGVkXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMuX29uTG9hZGVkID0gY29uZmlnLm9uTG9hZGVkIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1c3RvbSBjb25maWd1cmF0aW9uIG92ZXJyaWRlIHRvIHVzZSBmb3IgdGhlIG1hcCBtYXJrZXJzXG4gICAgICogQHR5cGUge09iamVjdHxGdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLl9waW5Db25maWcgPSB0eXBlb2YgY29uZmlnLnBpbiA9PT0gJ2Z1bmN0aW9uJyA/IGNvbmZpZy5waW4gOiBPYmplY3QuYXNzaWduKE1hcFByb3ZpZGVyLkRFRkFVTFRfUElOX0NPTkZJRywgY29uZmlnLnBpbik7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRvIGNvbGxhcHNlIHBpbnMgYXQgdGhlIHNhbWUgbGF0L2xuZ1xuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2NvbGxhcHNlUGlucyA9IGNvbmZpZy5jb2xsYXBzZVBpbnMgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgY29uZmlndXJhdGlvbiB0byB1c2UgZm9yIHRoZSBtYXAgbWFya2Vyc1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKiBUT0RPKGJpbGx5KSBDcmVhdGUgYSBjb25maWd1cmF0aW9uIG1vZGVsXG4gICAqL1xuICBzdGF0aWMgZ2V0IERFRkFVTFRfUElOX0NPTkZJRyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGljb246IHtcbiAgICAgICAgYW5jaG9yOiBudWxsLCAvLyBlLmcuIHsgeDogMSwgeTogMSB9XG4gICAgICAgIHN2ZzogbnVsbCxcbiAgICAgICAgdXJsOiBudWxsLFxuICAgICAgICBzY2FsZWRTaXplOiBudWxsIC8vIGUuZy4geyB3OiAyMCwgaDogMjAgfVxuICAgICAgfSxcbiAgICAgIGxhYmVsVHlwZTogJ251bWVyaWMnXG4gICAgfTtcbiAgfVxuXG4gIG9uTG9hZGVkIChjYikge1xuICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9vbkxvYWRlZCA9IGNiO1xuICAgIGlmICh0aGlzLmlzTG9hZGVkKCkpIHtcbiAgICAgIHRoaXMuX29uTG9hZGVkKCk7XG4gICAgfVxuICB9XG5cbiAgaXNMb2FkZWQgKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0xvYWRlZDtcbiAgfVxuXG4gIGxvYWRKUyAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmltcGxlbWVudGVkIE1ldGhvZDogbG9hZEpTJyk7XG4gIH1cblxuICBpbml0IChtYXBEYXRhKSB7XG4gICAgLy8gVE9ETyhiaWxseSkgVGhpcyBzaG91bGQgYmUgYmFzZWQgb2ZmIGEgcHJvbWlzZSB0aGF0IGdldHMgY3JlYXRlZCBmcm9tIGxvYWRKU1xuICAgIHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCBNZXRob2Q6IGluaXQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhIGxpc3Qgb2YgbWFya2VycywgY29tYmluZSBtYXJrZXJzIHdpdGggdGhlIHNhbWUgbGF0L2xuZyBpbnRvIGEgc2luZ2xlIG1hcmtlclxuICAgKiBAcGFyYW0ge29iamVjdFtdfSBtYXJrZXJzIFRoZSBtYXJrZXJzIHRvIGNvbGxhcHNlXG4gICAqL1xuICBfY29sbGFwc2VNYXJrZXJzIChtYXJrZXJzKSB7XG4gICAgY29uc3QgbG9jYXRpb25Ub0l0ZW0gPSB7fTtcbiAgICBtYXJrZXJzLmZvckVhY2gobSA9PiB7XG4gICAgICBsb2NhdGlvblRvSXRlbVtgJHttLmxhdGl0dWRlfSR7bS5sb25naXR1ZGV9YF1cbiAgICAgICAgPyBsb2NhdGlvblRvSXRlbVtgJHttLmxhdGl0dWRlfSR7bS5sb25naXR1ZGV9YF0ucHVzaChtKVxuICAgICAgICA6IGxvY2F0aW9uVG9JdGVtW2Ake20ubGF0aXR1ZGV9JHttLmxvbmdpdHVkZX1gXSA9IFttXTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbGxhcHNlZE1hcmtlcnMgPSBbXTtcbiAgICBmb3IgKGxldCBbLCBtYXJrZXJzXSBvZiBPYmplY3QuZW50cmllcyhsb2NhdGlvblRvSXRlbSkpIHtcbiAgICAgIGlmIChtYXJrZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2VkTWFya2VyID0ge1xuICAgICAgICAgIGl0ZW06IG1hcmtlcnMubWFwKG0gPT4gbS5pdGVtKSxcbiAgICAgICAgICBsYWJlbDogbWFya2Vycy5sZW5ndGgsXG4gICAgICAgICAgbGF0aXR1ZGU6IG1hcmtlcnNbMF0ubGF0aXR1ZGUsXG4gICAgICAgICAgbG9uZ2l0dWRlOiBtYXJrZXJzWzBdLmxvbmdpdHVkZVxuICAgICAgICB9O1xuICAgICAgICBjb2xsYXBzZWRNYXJrZXJzLnB1c2goY29sbGFwc2VkTWFya2VyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxhcHNlZE1hcmtlcnMucHVzaChtYXJrZXJzWzBdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29sbGFwc2VkTWFya2VycztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgR29vZ2xlTWFwUHJvdmlkZXIgKi9cblxuaW1wb3J0IE1hcFByb3ZpZGVyIGZyb20gJy4vbWFwcHJvdmlkZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi8uLi9kb20vZG9tJztcblxuLyogZ2xvYmFsIGdvb2dsZSAqL1xuXG4vKipcbiAqIEdvb2dsZU1hcFByb3ZpZGVyIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIGEgTWFwUHJvdmlkZXJcbiAqIHRoYXQgaGFuZGxlcyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgdGhpcmQgcGFydHkgQVBJIHRvIGV4cG9zZSBtYXBzLlxuICogQGV4dGVuZHMgTWFwUHJvdmlkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29vZ2xlTWFwUHJvdmlkZXIgZXh0ZW5kcyBNYXBQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl9jbGllbnRJZCA9IG9wdHMuY2xpZW50SWQ7XG4gICAgdGhpcy5fc2lnbmF0dXJlID0gb3B0cy5zaWduYXR1cmU7XG5cbiAgICBpZiAoIXRoaXMuaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscygpICYmICF0aGlzLl9hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignR29vZ2xlTWFwc1Byb3ZpZGVyOiBNaXNzaW5nIGBhcGlLZXlgIG9yIHtgY2xpZW50SWRgLCBgc2lnbmF0dXJlYH0nKTtcbiAgICB9XG4gIH1cblxuICBsb2FkSlMgKG9uTG9hZCkge1xuICAgIGlmIChET00ucXVlcnkoJyN5ZXh0LW1hcC1qcycpKSB7XG4gICAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7XG4gICAgICBpZiAodHlwZW9mIG9uTG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvbkxvYWQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWpzJyxcbiAgICAgIG9ubG9hZDogKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX29uTG9hZGVkKCk7XG4gICAgICB9LFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzcmM6IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/JHt0aGlzLmdlbmVyYXRlQ3JlZGVudGlhbHMoKX1gXG4gICAgfSk7XG5cbiAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgfVxuXG4gIGdlbmVyYXRlQ3JlZGVudGlhbHMgKCkge1xuICAgIGlmICh0aGlzLmhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMoKSkge1xuICAgICAgcmV0dXJuIGBjbGllbnQ9JHt0aGlzLl9jbGllbnRJZH1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYGtleT0ke3RoaXMuX2FwaUtleX1gO1xuICAgIH1cbiAgfVxuXG4gIGhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMgKCkge1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRJZDtcbiAgfVxuXG4gIGluaXQgKGVsLCBtYXBEYXRhKSB7XG4gICAgaWYgKCghbWFwRGF0YSB8fCBtYXBEYXRhLm1hcE1hcmtlcnMubGVuZ3RoIDw9IDApICYmICF0aGlzLl9zaG93RW1wdHlNYXApIHtcbiAgICAgIHRoaXMuX21hcCA9IG51bGw7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLy8gTk9URShiaWxseSkgVGhpcyB0aW1lb3V0IGlzIGEgaGFjayBmb3IgZGVhbGluZyB3aXRoIGFzeW5jIG5hdHVyZS5cbiAgICAvLyBPbmx5IGhlcmUgZm9yIGRlbW8gcHVycG9zZXMsIHNvIHdlJ2xsIGZpeCBsYXRlci5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBjb250YWluZXIgPSBET00ucXVlcnkoZWwpO1xuICAgICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGNvbnRhaW5lciwge1xuICAgICAgICB6b29tOiB0aGlzLl96b29tXG4gICAgICB9KTtcblxuICAgICAgLy8gQXBwbHkgb3VyIHNlYXJjaCBkYXRhIHRvIG91ciBHb29nbGVNYXBcbiAgICAgIGxldCBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG5cbiAgICAgIGlmIChtYXBEYXRhICYmIG1hcERhdGEubWFwTWFya2Vycy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2VkTWFya2VycyA9IHRoaXMuX2NvbGxhcHNlUGluc1xuICAgICAgICAgID8gdGhpcy5fY29sbGFwc2VNYXJrZXJzKG1hcERhdGEubWFwTWFya2VycylcbiAgICAgICAgICA6IG1hcERhdGEubWFwTWFya2VycztcbiAgICAgICAgbGV0IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MgPSBHb29nbGVNYXBNYXJrZXJDb25maWcuZnJvbShcbiAgICAgICAgICBjb2xsYXBzZWRNYXJrZXJzLFxuICAgICAgICAgIHRoaXMuX3BpbkNvbmZpZyxcbiAgICAgICAgICB0aGlzLm1hcCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnb29nbGVNYXBNYXJrZXJDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoZ29vZ2xlTWFwTWFya2VyQ29uZmlnc1tpXSk7XG4gICAgICAgICAgaWYgKHRoaXMuX29uUGluQ2xpY2spIHtcbiAgICAgICAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9vblBpbkNsaWNrKGNvbGxhcHNlZE1hcmtlcnNbaV0uaXRlbSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib3VuZHMuZXh0ZW5kKG1hcmtlci5wb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1hcC5maXRCb3VuZHMoYm91bmRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWFwLnNldENlbnRlcihuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHRoaXMuX2RlZmF1bHRQb3NpdGlvbi5sYXQsIHRoaXMuX2RlZmF1bHRQb3NpdGlvbi5sbmcpKTtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuICB9XG59XG5cbi8vIFRPRE8oYmlsbHkpIE1vdmUgdG8gb3duIGNsYXNzXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwTWFya2VyQ29uZmlnIHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgZ29vZ2xlIG1hcCwgdGhhdCB0aGUgbWFya2VyIGlzIGFwcGVuZGVkIHRvXG4gICAgICogQHR5cGUge0dvb2dsZU1hcH1cbiAgICAgKi9cbiAgICB0aGlzLm1hcCA9IG9wdHMubWFwIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb29yZGluYXRlcyBvZiB0aGUgbWFya2VyIChsYXQvbG5nKVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5wb3NpdGlvbiA9IG9wdHMucG9zaXRpb24gfHwge1xuICAgICAgbGF0OiB1bmRlZmluZWQsXG4gICAgICBsbmc6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcHJvcGVydGllcy9zZXR0aW5ncyBvZiB0aGUgaWNvbiB1c2VkIGZvciB0aGUgbWFya2VyXG4gICAgICogZS5nLiB7XG4gICAgICogICAgICAgIGFuY2hvcjogeyB4OiAwLCB5OiAwIH1cbiAgICAgKiAgICAgICAgdXJsOiAncGF0aC90by91cmwuanBnJ1xuICAgICAqICAgICAgICBzY2FsZWRTaXplOiB7IHc6IDAsIGg6IDAgfVxuICAgICAqICAgICAgIH1cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5pY29uID0gb3B0cy5pY29uIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCBvZiB0aGUgbWFya2VyIHRvIHVzZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbCA9IG9wdHMubGFiZWwgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYW4gYXJyYXkgb2YgbWFya2VyIGNvbmZpZ3NcbiAgICogQHBhcmFtIHtHb29nbGVNYXBNYXJrZXJDb25maWdbXX0gZ29vZ2xlTWFwTWFya2VyQ29uZmlnc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplIChnb29nbGVNYXBNYXJrZXJDb25maWdzKSB7XG4gICAgbGV0IHNlcmlhbGl6ZWRNYXJrZXJzID0gW107XG4gICAgZ29vZ2xlTWFwTWFya2VyQ29uZmlncy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIHNlcmlhbGl6ZWRNYXJrZXJzLnB1c2goYG1hcmtlcnM9bGFiZWw6JHttYXJrZXIubGFiZWx9fCR7bWFya2VyLnBvc2l0aW9uLmxhdH0sJHttYXJrZXIucG9zaXRpb24ubG5nfWApO1xuICAgIH0pO1xuICAgIHJldHVybiBzZXJpYWxpemVkTWFya2Vycy5qb2luKCcmJyk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIHN0b3JhZ2UgZGF0YSBtb2RlbCBvZiBtYXJrZXJzIGludG8gR29vZ2xlQVBJTWFya2VyXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IG1hcmtlcnMgVGhlIGRhdGEgb2YgdGhlIG1hcmtlclxuICAgKiBAcGFyYW0geyhPYmplY3R8ZnVuY3Rpb24pfSBwaW5Db25maWcgVGhlIGNvbmZpZ3VyYXRpb24gdG8gYXBwbHkgdG8gdGhlIG1hcmtlclxuICAgKiBAcGFyYW0ge0dvb2dsZU1hcH0gbWFwIHJlZmVyZW5jZSB0byB0aGUgZ29vZ2xlIG1hcCB0byBhcHBseSB0aGUgbWFya2VyIHRvXG4gICAqIEByZXR1cm5zIHtHb29nbGVNYXBNYXJrZXJDb25maWdbXX1cbiAgICovXG4gIHN0YXRpYyBmcm9tIChtYXJrZXJzLCBwaW5Db25maWcsIG1hcCkge1xuICAgIGxldCBnb29nbGVNYXBNYXJrZXJDb25maWdzID0gW107XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1hcmtlcnMpKSB7XG4gICAgICBtYXJrZXJzID0gW21hcmtlcnNdO1xuICAgIH1cblxuICAgIG1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICAvLyBTdXBwb3J0IGNvbmZpZ3VyYXRpb24gYXMgYSBmdW5jdGlvblxuICAgICAgbGV0IHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZztcbiAgICAgIGlmICh0eXBlb2YgcGluQ29uZmlnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZyhcbiAgICAgICAgICBtYXJrZXIuaXRlbSxcbiAgICAgICAgICBNYXBQcm92aWRlci5ERUZBVUxUX1BJTl9DT05GSUcsXG4gICAgICAgICAgbWFya2VyKTtcbiAgICAgIH1cblxuICAgICAgLy8gVHJhbnNmb3JtIG91ciBDb25maWd1cmF0aW9uIE9iamVjdCBpbnRvIHRoZSBleHBlY3RlZFxuICAgICAgLy8gR29vZ2xlIEFQSSBmb3JtYXQuXG4gICAgICBsZXQgaWNvbiA9IHt9O1xuICAgICAgaWYgKHBpbkNvbmZpZ09iai5hbmNob3IpIHtcbiAgICAgICAgaWNvbi5hbmNob3IgPSBnb29nbGUubWFwcy5Qb2ludChwaW5Db25maWdPYmouYW5jaG9yLngsIHBpbkNvbmZpZ09iai5hbmNob3IueSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW5Db25maWdPYmouc2NhbGVkU2l6ZSkge1xuICAgICAgICBpY29uLnNjYWxlZFNpemUgPSBuZXcgZ29vZ2xlLm1hcHMuU2l6ZShwaW5Db25maWdPYmouc2NhbGVkU2l6ZS53LCBwaW5Db25maWdPYmouc2NhbGVkU2l6ZS5oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpbkNvbmZpZ09iai51cmwpIHtcbiAgICAgICAgaWNvbi51cmwgPSBwaW5Db25maWdPYmoudXJsO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluQ29uZmlnT2JqLnN2Zykge1xuICAgICAgICBpY29uLnVybCA9IGBkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwgJHtlbmNvZGVVUklDb21wb25lbnQocGluQ29uZmlnT2JqLnN2Zyl9YDtcbiAgICAgIH1cblxuICAgICAgbGV0IGxhYmVsO1xuICAgICAgaWYgKHBpbkNvbmZpZ09iai5sYWJlbCkge1xuICAgICAgICBsYWJlbCA9IHBpbkNvbmZpZ09iai5sYWJlbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhYmVsID0gbWFya2VyLmxhYmVsLnRvU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIE5PVEUoYmlsbHkpIEdvb2dsZSBtYXBzIGRvZXNuJ3QgaGFuZGxlIGVtcHR5IGljb24gb2JqZWN0cyBuaWNlbHlcbiAgICAgIC8vIE1ha2UgZ29vZ2xlIG1hcHMgaGFwcHkgaWYgbm8gc2V0dGluZ3MgZm9yIGljb24gYXJlIHByb3ZpZGVkO1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGljb24pLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpY29uID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBnb29nbGVNYXBNYXJrZXJDb25maWdzLnB1c2goXG4gICAgICAgIG5ldyBHb29nbGVNYXBNYXJrZXJDb25maWcoe1xuICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICBsYXQ6IG1hcmtlci5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxuZzogbWFya2VyLmxvbmdpdHVkZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaWNvbjogaWNvbixcbiAgICAgICAgICBsYWJlbDogbGFiZWxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZ29vZ2xlTWFwTWFya2VyQ29uZmlncztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTWFwQm94TWFwUHJvdmlkZXIgKi9cblxuaW1wb3J0IE1hcFByb3ZpZGVyIGZyb20gJy4vbWFwcHJvdmlkZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi8uLi9kb20vZG9tJztcblxuLyogZ2xvYmFsIG1hcGJveGdsICovXG5cbi8qKlxuICogTWFwQm94TWFwUHJvdmlkZXIgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgYSBNYXBQcm92aWRlclxuICogdGhhdCBoYW5kbGVzIHRoZSBpbnRlZ3JhdGlvbiB3aXRoIHRoZSB0aGlyZCBwYXJ0eSBBUEkgdG8gZXhwb3NlIG1hcHMuXG4gKiBAZXh0ZW5kcyBNYXBQcm92aWRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBCb3hNYXBQcm92aWRlciBleHRlbmRzIE1hcFByb3ZpZGVyIHtcbiAgLyoqXG4gICAqIExvYWQgdGhlIGV4dGVybmFsIEpTIExpYnJhcnlcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25Mb2FkIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRvIGludm9rZSBvbmNlIHRoZSBKUyBpcyBsb2FkZWQuXG4gICAqL1xuICBsb2FkSlMgKG9uTG9hZCkge1xuICAgIGxldCBzY3JpcHQgPSBET00uY3JlYXRlRWwoJ3NjcmlwdCcsIHtcbiAgICAgIGlkOiAneWV4dC1tYXAtanMnLFxuICAgICAgb25sb2FkOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgbWFwYm94Z2wuYWNjZXNzVG9rZW4gPSB0aGlzLl9hcGlLZXk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvbkxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBvbkxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fb25Mb2FkZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLl9vbkxvYWRlZCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzcmM6ICdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MC40NC4xL21hcGJveC1nbC5qcydcbiAgICB9KTtcblxuICAgIGxldCBjc3MgPSBET00uY3JlYXRlRWwoJ2xpbmsnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWNzcycsXG4gICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgIGhyZWY6ICdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MC40NC4xL21hcGJveC1nbC5jc3MnXG4gICAgfSk7XG5cbiAgICBET00uYXBwZW5kKCdib2R5JywgY3NzKTtcbiAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgfVxuXG4gIGluaXQgKGVsLCBtYXBEYXRhKSB7XG4gICAgaWYgKCghbWFwRGF0YSB8fCBtYXBEYXRhLm1hcE1hcmtlcnMubGVuZ3RoIDw9IDApICYmICF0aGlzLl9zaG93RW1wdHlNYXApIHtcbiAgICAgIHRoaXMuX21hcCA9IG51bGw7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBsZXQgY29udGFpbmVyID0gRE9NLnF1ZXJ5KGVsKTtcbiAgICB0aGlzLl9tYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgem9vbTogdGhpcy5fem9vbSxcbiAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXY5JyxcbiAgICAgIGNlbnRlcjogdGhpcy5nZXRDZW50ZXJNYXJrZXIobWFwRGF0YSlcbiAgICB9KTtcblxuICAgIGlmIChtYXBEYXRhKSB7XG4gICAgICBjb25zdCBjb2xsYXBzZWRNYXJrZXJzID0gdGhpcy5fY29sbGFwc2VQaW5zXG4gICAgICAgID8gdGhpcy5fY29sbGFwc2VNYXJrZXJzKG1hcERhdGEubWFwTWFya2VycylcbiAgICAgICAgOiBtYXBEYXRhLm1hcE1hcmtlcnM7XG4gICAgICBjb25zdCBtYXBib3hNYXBNYXJrZXJDb25maWdzID0gTWFwQm94TWFya2VyQ29uZmlnLmZyb20oXG4gICAgICAgIGNvbGxhcHNlZE1hcmtlcnMsXG4gICAgICAgIHRoaXMuX3BpbkNvbmZpZyxcbiAgICAgICAgdGhpcy5fbWFwKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXBib3hNYXBNYXJrZXJDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB3cmFwcGVyID0gbWFwYm94TWFwTWFya2VyQ29uZmlnc1tpXS53cmFwcGVyO1xuICAgICAgICBsZXQgY29vcmRzID0gbmV3IG1hcGJveGdsLkxuZ0xhdChcbiAgICAgICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzW2ldLnBvc2l0aW9uLmxvbmdpdHVkZSxcbiAgICAgICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzW2ldLnBvc2l0aW9uLmxhdGl0dWRlKTtcbiAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBtYXBib3hnbC5NYXJrZXIod3JhcHBlcikuc2V0TG5nTGF0KGNvb3Jkcyk7XG4gICAgICAgIG1hcmtlci5hZGRUbyh0aGlzLl9tYXApO1xuICAgICAgICBpZiAodGhpcy5fb25QaW5DbGljaykge1xuICAgICAgICAgIG1hcmtlci5nZXRFbGVtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9vblBpbkNsaWNrKGNvbGxhcHNlZE1hcmtlcnNbaV0uaXRlbSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2VudGVyTWFya2VyIChtYXBEYXRhKSB7XG4gICAgcmV0dXJuIG1hcERhdGEgJiYgbWFwRGF0YS5tYXBDZW50ZXIgJiYgbWFwRGF0YS5tYXBDZW50ZXIubG9uZ2l0dWRlICYmIG1hcERhdGEubWFwQ2VudGVyLmxhdGl0dWRlXG4gICAgICA/IFttYXBEYXRhLm1hcENlbnRlci5sb25naXR1ZGUsIG1hcERhdGEubWFwQ2VudGVyLmxhdGl0dWRlXVxuICAgICAgOiB7IGxuZzogdGhpcy5fZGVmYXVsdFBvc2l0aW9uLmxuZywgbGF0OiB0aGlzLl9kZWZhdWx0UG9zaXRpb24ubGF0IH07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hcEJveE1hcmtlckNvbmZpZyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIG1hcGJveCBtYXAsIHRoYXQgdGhlIG1hcmtlciBpcyBhcHBlbmRlZCB0b1xuICAgICAqIEB0eXBlIHtNYXBCb3h9XG4gICAgICovXG4gICAgdGhpcy5tYXAgPSBvcHRzLm1hcCB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1hcmtlciAobGF0L2xuZylcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMucG9zaXRpb24gPSBvcHRzLnBvc2l0aW9uIHx8IHtcbiAgICAgIGxhdGl0dWRlOiB1bmRlZmluZWQsXG4gICAgICBsb25naXR1ZGU6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaHRtbCBlbGVtZW50IHRvIGJlIHVzZWQgYXMgdGhlIG1hcCBtYXJrZXJcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMud3JhcHBlciA9IG9wdHMud3JhcHBlciB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgb2YgdGhlIG1hcmtlciB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWwgPSBvcHRzLmxhYmVsIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB1cmwgb2YgdGhlIHBpbiBmb3IgdGhlIHN0YXRpYyBtYXBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc3RhdGljTWFwUGluID0gb3B0cy5zdGF0aWNNYXBQaW4gfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYW4gYXJyYXkgb2YgbWFya2VyIGNvbmZpZ3NcbiAgICogQHBhcmFtIHtNYXBCb3hNYXJrZXJDb25maWdbXX0gbWFwYm94TWFwTWFya2VyQ29uZmlnc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplIChtYXBib3hNYXBNYXJrZXJDb25maWdzKSB7XG4gICAgbGV0IHNlcmlhbGl6ZWRNYXJrZXJzID0gW107XG4gICAgbWFwYm94TWFwTWFya2VyQ29uZmlncy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIGlmIChtYXJrZXIuc3RhdGljTWFwUGluKSB7XG4gICAgICAgIHNlcmlhbGl6ZWRNYXJrZXJzLnB1c2goYHVybC0ke21hcmtlci5zdGF0aWNNYXBQaW59KCR7bWFya2VyLnBvc2l0aW9uLmxvbmdpdHVkZX0sJHttYXJrZXIucG9zaXRpb24ubGF0aXR1ZGV9KWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VyaWFsaXplZE1hcmtlcnMucHVzaChgcGluLXMtJHttYXJrZXIubGFiZWx9KCR7bWFya2VyLnBvc2l0aW9uLmxvbmdpdHVkZX0sJHttYXJrZXIucG9zaXRpb24ubGF0aXR1ZGV9KWApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZXJpYWxpemVkTWFya2Vycy5qb2luKCcsJyk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIHN0b3JhZ2UgZGF0YSBtb2RlbCBvZiBtYXJrZXJzIGludG8gR29vZ2xlQVBJTWFya2VyXG4gICAqIEBwYXJhbSB7TWFwQm94fSBBIHJlZmVyZW5jZSB0byB0aGUgZ29vZ2xlIG1hcCB0byBhcHBseSB0aGUgbWFya2VyIHRvXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IG1hcmtlcnMgVGhlIGRhdGEgb2YgdGhlIG1hcmtlclxuICAgKiBAcGFyYW0ge09iamVjdH0gcGluQ29uZmlnIFRoZSBjb25maWd1cmF0aW9uIHRvIGFwcGx5IHRvIHRoZSBtYXJrZXJcbiAgICogQHJldHVybnMge01hcEJveE1hcmtlckNvbmZpZ1tdfVxuICAgKi9cbiAgc3RhdGljIGZyb20gKG1hcmtlcnMsIHBpbkNvbmZpZywgbWFwKSB7XG4gICAgbGV0IG1hcGJveE1hcE1hcmtlckNvbmZpZ3MgPSBbXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobWFya2VycykpIHtcbiAgICAgIG1hcmtlcnMgPSBbbWFya2Vyc107XG4gICAgfVxuXG4gICAgbWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIC8vIFN1cHBvcnQgY29uZmlndXJhdGlvbiBhcyBhIGZ1bmN0aW9uXG4gICAgICBsZXQgcGluQ29uZmlnT2JqID0gcGluQ29uZmlnO1xuICAgICAgaWYgKHR5cGVvZiBwaW5Db25maWcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcGluQ29uZmlnT2JqID0gcGluQ29uZmlnKFxuICAgICAgICAgIG1hcmtlci5pdGVtLFxuICAgICAgICAgIE1hcFByb3ZpZGVyLkRFRkFVTFRfUElOX0NPTkZJRyxcbiAgICAgICAgICBtYXJrZXIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB3cmFwcGVyID0gcGluQ29uZmlnT2JqLndyYXBwZXIgPyBwaW5Db25maWdPYmoud3JhcHBlciA6IG51bGw7XG4gICAgICBjb25zdCBzdGF0aWNNYXBQaW4gPSBwaW5Db25maWdPYmouc3RhdGljTWFwUGluID8gcGluQ29uZmlnT2JqLnN0YXRpY01hcFBpbiA6IG51bGw7XG5cbiAgICAgIG1hcGJveE1hcE1hcmtlckNvbmZpZ3MucHVzaChcbiAgICAgICAgbmV3IE1hcEJveE1hcmtlckNvbmZpZyh7XG4gICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIGxhdGl0dWRlOiBtYXJrZXIubGF0aXR1ZGUsXG4gICAgICAgICAgICBsb25naXR1ZGU6IG1hcmtlci5sb25naXR1ZGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHdyYXBwZXI6IHdyYXBwZXIsXG4gICAgICAgICAgbGFiZWw6IG1hcmtlci5sYWJlbCxcbiAgICAgICAgICBzdGF0aWNNYXBQaW46IHN0YXRpY01hcFBpblxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtYXBib3hNYXBNYXJrZXJDb25maWdzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNYXBDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5pbXBvcnQgR29vZ2xlTWFwUHJvdmlkZXIgZnJvbSAnLi9wcm92aWRlcnMvZ29vZ2xlbWFwcHJvdmlkZXInO1xuaW1wb3J0IE1hcEJveE1hcFByb3ZpZGVyIGZyb20gJy4vcHJvdmlkZXJzL21hcGJveG1hcHByb3ZpZGVyJztcblxuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbmNvbnN0IFByb3ZpZGVyVHlwZXMgPSB7XG4gICdnb29nbGUnOiBHb29nbGVNYXBQcm92aWRlcixcbiAgJ21hcGJveCc6IE1hcEJveE1hcFByb3ZpZGVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9LCBzeXN0ZW1PcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzLCBzeXN0ZW1PcHRzKTtcblxuICAgIC8qKlxuICAgICAqIEJpbmQgdGhpcyBjb21wb25lbnQgdG8gbGlzdGVuIHRvIHRoZSBzdG9yYWdlIGJhc2VkIG9uIHRoaXMga2V5XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFM7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhbGlhc2VkIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSB0eXBlIG9mIG1hcCBwcm92aWRlciB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX21hcFByb3ZpZGVyID0gb3B0cy5tYXBQcm92aWRlcjtcbiAgICBpZiAoIXRoaXMuX21hcFByb3ZpZGVyIHx8ICEodGhpcy5fbWFwUHJvdmlkZXIudG9Mb3dlckNhc2UoKSBpbiBQcm92aWRlclR5cGVzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXBDb21wb25lbnQ6IEludmFsaWQgTWFwIFByb3ZpZGVyOyBtdXN0IGJlIGBnb29nbGVgIG9yIGBtYXBCb3hgJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gYW4gaW5zdGFuY2Ugb2YgdGhlIHtNYXBQcm92aWRlcn0gdGhhdCdzIGNvbnN0cnVjdGVkXG4gICAgICogQHR5cGUge01hcFByb3ZpZGVyfVxuICAgICAqL1xuICAgIHRoaXMuX21hcCA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTWFwJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9tYXAnO1xuICB9XG5cbiAgLy8gVE9ETyhiaWxseSkgTWFrZSBQcm92aWRlclR5cGVzIGEgZmFjdG9yeSBjbGFzc1xuICBnZXRQcm92aWRlckluc3RhbmNlICh0eXBlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm92aWRlclR5cGVzW3R5cGUudG9Mb3dlckNhc2UoKV0odGhpcy5fY29uZmlnKTtcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICB0aGlzLl9tYXAgPSB0aGlzLmdldFByb3ZpZGVySW5zdGFuY2UodGhpcy5fbWFwUHJvdmlkZXIpO1xuICAgIHRoaXMuX21hcC5sb2FkSlMoKTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIHRoaXMuX21hcC5vbkxvYWRlZCgoKSA9PiB7XG4gICAgICB0aGlzLl9tYXAuaW5pdCh0aGlzLl9jb250YWluZXIsIHRoaXMuZ2V0U3RhdGUoJ21hcCcpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhLCB2YWwpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoZGF0YSwgdmFsKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVzdWx0c0NvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vbG9jYXRpb25yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL2V2ZW50cmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcGVvcGxlcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IE1hcENvbXBvbmVudCBmcm9tICcuLi9tYXAvbWFwY29tcG9uZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFNlYXJjaFN0YXRlcyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5cbmNvbnN0IFJlc3VsdFR5cGUgPSB7XG4gIEVWRU5UOiAnZXZlbnQnLFxuICBMT0NBVElPTjogJ2xvY2F0aW9uJyxcbiAgUEVPUExFOiAncGVvcGxlJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0c0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiB2ZXJ0aWNhbENvbmZpZ0lkIHVzZWQgZm9yIGFuYWx5dGljcyBhbmQgcGFzc2VkIHRvIGNoaWxkcmVuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsQ29uZmlnSWQgPSBjb25maWcudmVydGljYWxDb25maWdJZDtcblxuICAgIC8qKlxuICAgICAqIGlzVW5pdmVyc2FsIGlzIHNldCB0byB0cnVlIGlmIHRoaXMgY29tcG9uZW50IGlzIGFkZGVkIGJ5IHRoZSBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50XG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9pc1VuaXZlcnNhbCA9IGNvbmZpZy5pc1VuaXZlcnNhbCB8fCBmYWxzZTtcblxuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTO1xuICAgIHRoaXMuX2l0ZW1Db25maWcgPSB7XG4gICAgICBnbG9iYWw6IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIFtFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50LnR5cGVdOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH0sXG4gICAgICBbTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlXToge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9LFxuICAgICAgW1Blb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50LnR5cGVdOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGNvbmZpZy5yZW5kZXJJdGVtID09PSB1bmRlZmluZWQgJiYgY29uZmlnLl9wYXJlbnRPcHRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbmZpZy5yZW5kZXJJdGVtID0gY29uZmlnLl9wYXJlbnRPcHRzLnJlbmRlckl0ZW07XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5pdGVtVGVtcGxhdGUgPT09IHVuZGVmaW5lZCAmJiBjb25maWcuX3BhcmVudE9wdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uZmlnLml0ZW1UZW1wbGF0ZSA9IGNvbmZpZy5fcGFyZW50T3B0cy5pdGVtVGVtcGxhdGU7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5saW1pdCkge1xuICAgICAgY29uc3QgbGltaXQgPSBjb25maWcubGltaXQ7XG4gICAgICBpZiAodHlwZW9mIGxpbWl0ICE9PSAnbnVtYmVyJyB8fCBsaW1pdCA8IDEgfHwgbGltaXQgPiA1MCkge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCdTZWFyY2ggTGltaXQgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDUwJywgJ1ZlcnRpY2FsUmVzdWx0cycpO1xuICAgICAgfVxuICAgICAgdGhpcy5jb3JlLnNldFNlYXJjaExpbWl0KGxpbWl0KTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbmZpZ3VyZUl0ZW0oe1xuICAgICAgcmVuZGVyOiBjb25maWcucmVuZGVySXRlbSxcbiAgICAgIHRlbXBsYXRlOiBjb25maWcuaXRlbVRlbXBsYXRlXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdXJsIHRvIHRoZSB1bml2ZXJzYWwgcGFnZSBmb3IgdGhlIG5vIHJlc3VsdHMgcGFnZSB0byBsaW5rIGJhY2sgdG8gd2l0aCBjdXJyZW50IHF1ZXJ5XG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMuX3VuaXZlcnNhbFVybCA9IGNvbmZpZy51bml2ZXJzYWxVcmw7XG4gIH1cblxuICBtb3VudCAoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZ2V0U3RhdGUoKSkubGVuZ3RoID4gMCkge1xuICAgICAgc3VwZXIubW91bnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZHVwbGljYXRlc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBkYXRhLnJlc3VsdHMgfHwgW107XG4gICAgY29uc3Qgc2VhcmNoU3RhdGUgPSBkYXRhLnNlYXJjaFN0YXRlIHx8IFNlYXJjaFN0YXRlcy5QUkVfU0VBUkNIO1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHsgcmVzdWx0czogW10gfSwgZGF0YSwge1xuICAgICAgaXNQcmVTZWFyY2g6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuUFJFX1NFQVJDSCxcbiAgICAgIGlzU2VhcmNoTG9hZGluZzogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyxcbiAgICAgIGlzU2VhcmNoQ29tcGxldGU6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFLFxuICAgICAgaW5jbHVkZU1hcDogdGhpcy5fY29uZmlnLmluY2x1ZGVNYXAsXG4gICAgICBtYXBDb25maWc6IHRoaXMuX2NvbmZpZy5tYXBDb25maWcsXG4gICAgICBldmVudE9wdGlvbnM6IHRoaXMuZXZlbnRPcHRpb25zKCksXG4gICAgICB1bml2ZXJzYWxVcmw6IHRoaXMuX3VuaXZlcnNhbFVybCA/IHRoaXMuX3VuaXZlcnNhbFVybCArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggOiAnJyxcbiAgICAgIHNob3dOb1Jlc3VsdHM6IHJlc3VsdHMubGVuZ3RoID09PSAwLFxuICAgICAgcXVlcnk6IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKVxuICAgIH0pLCB2YWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIGhlbHBlciB0byBjb25zdHJ1Y3QgdGhlIGV2ZW50T3B0aW9ucyBvYmplY3QgZm9yIHRoZSB2aWV3IGFsbCBsaW5rXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBldmVudE9wdGlvbnMgKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiB0aGlzLl92ZXJ0aWNhbENvbmZpZ0lkXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnVmVydGljYWxSZXN1bHRzJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9yZXN1bHRzJztcbiAgfVxuXG4gIGNvbmZpZ3VyZUl0ZW0gKGNvbmZpZykge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5faXRlbUNvbmZpZy5nbG9iYWwucmVuZGVyID0gY29uZmlnLnJlbmRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbmZpZy5yZW5kZXIpIHtcbiAgICAgICAgdGhpcy5zZXRJdGVtUmVuZGVyKGtleSwgY29uZmlnLnJlbmRlcltrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2l0ZW1Db25maWcuZ2xvYmFsLnRlbXBsYXRlID0gY29uZmlnLnRlbXBsYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29uZmlnLnRlbXBsYXRlKSB7XG4gICAgICAgIHRoaXMuc2V0SXRlbVRlbXBsYXRlKGtleSwgY29uZmlnLnRlbXBsYXRlW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldEl0ZW1UZW1wbGF0ZSAodHlwZSwgdGVtcGxhdGUpIHtcbiAgICBsZXQgY2xhenogPSB0aGlzLmdldEl0ZW1Db21wb25lbnQodHlwZSk7XG4gICAgdGhpcy5faXRlbUNvbmZpZ1tjbGF6ei50eXBlXS50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICB9XG5cbiAgc2V0SXRlbVJlbmRlciAodHlwZSwgcmVuZGVyKSB7XG4gICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KHR5cGUpO1xuICAgIHRoaXMuX2l0ZW1Db25maWdbY2xhenoudHlwZV0ucmVuZGVyID0gcmVuZGVyO1xuICB9XG5cbiAgZ2V0SXRlbUNvbXBvbmVudCAodHlwZSkge1xuICAgIGxldCBjb21wID0gUmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFJlc3VsdFR5cGUuRVZFTlQ6XG4gICAgICAgIGNvbXAgPSBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUmVzdWx0VHlwZS5MT0NBVElPTjpcbiAgICAgICAgY29tcCA9IExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSZXN1bHRUeXBlLlBFT1BMRTpcbiAgICAgICAgY29tcCA9IFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcDtcbiAgfVxuXG4gIGFkZENoaWxkIChkYXRhLCB0eXBlLCBvcHRzKSB7XG4gICAgLy8gVE9ETyhiaWxseSkgUmVmYWN0b3IgdGhlIHdheSBjb25maWd1cmF0aW9uIGFuZCBkYXRhIGZsb3dzXG4gICAgLy8gdGhyb3VnaCB0b3AgbGV2ZWwgY29tcG9uZW50cyB0byBjaGlsZCBjb21wb25lbnRzLlxuICAgIGlmICh0eXBlID09PSBSZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlKSB7XG4gICAgICBsZXQgY2xhenogPSB0aGlzLmdldEl0ZW1Db21wb25lbnQoZGF0YS50eXBlKTtcbiAgICAgIGlmIChjbGF6eikge1xuICAgICAgICB0eXBlID0gY2xhenoudHlwZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IE1hcENvbXBvbmVudC50eXBlKSB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICBtYXA6IGRhdGFcbiAgICAgIH07XG4gICAgICBjb25zdCBuZXdPcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLm1hcENvbmZpZywgb3B0cyk7XG4gICAgICByZXR1cm4gc3VwZXIuYWRkQ2hpbGQoZGF0YSwgdHlwZSwgbmV3T3B0cyk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdGhlIHByb3BlciBpdGVtIHJlbmRlcnMgdG8gdGhlIHRoZSBjb21wb25lbnRzXG4gICAgLy8gaGF2ZSBqdXN0IGJlZW4gY29uc3RydWN0ZWQuIFByaW9yaXRpemUgZ2xvYmFsIG92ZXIgaW5kaXZpZHVhbCBpdGVtcy5cbiAgICBsZXQgY29tcCA9IHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIE9iamVjdC5hc3NpZ24ob3B0cywge1xuICAgICAgdmVydGljYWxDb25maWdJZDogdGhpcy5fdmVydGljYWxDb25maWdJZCxcbiAgICAgIGlzVW5pdmVyc2FsOiB0aGlzLl9pc1VuaXZlcnNhbFxuICAgIH0pKTtcbiAgICBsZXQgZ2xvYmFsQ29uZmlnID0gdGhpcy5faXRlbUNvbmZpZy5nbG9iYWw7XG4gICAgbGV0IGl0ZW1Db25maWcgPSB0aGlzLl9pdGVtQ29uZmlnW2NvbXAudHlwZV07XG4gICAgbGV0IGhhc0dsb2JhbFJlbmRlciA9IHR5cGVvZiBnbG9iYWxDb25maWcucmVuZGVyID09PSAnZnVuY3Rpb24nO1xuICAgIGxldCBoYXNHbG9iYWxUZW1wbGF0ZSA9IHR5cGVvZiBnbG9iYWxDb25maWcudGVtcGxhdGUgPT09ICdzdHJpbmcnO1xuXG4gICAgaWYgKGhhc0dsb2JhbFJlbmRlcikge1xuICAgICAgY29tcC5zZXRSZW5kZXIoZ2xvYmFsQ29uZmlnLnJlbmRlcik7XG4gICAgfVxuXG4gICAgaWYgKGhhc0dsb2JhbFRlbXBsYXRlKSB7XG4gICAgICBjb21wLnNldFRlbXBsYXRlKGdsb2JhbENvbmZpZy50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKCFpdGVtQ29uZmlnKSB7XG4gICAgICByZXR1cm4gY29tcDtcbiAgICB9XG5cbiAgICBpZiAoIWhhc0dsb2JhbFJlbmRlciAmJiBpdGVtQ29uZmlnLnJlbmRlcikge1xuICAgICAgY29tcC5zZXRSZW5kZXIoaXRlbUNvbmZpZy5yZW5kZXIpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHRlbXBsYXRlIHNwZWNpZmljIHNpdHVhdGlvblxuICAgIGlmICghaGFzR2xvYmFsVGVtcGxhdGUgJiYgaXRlbUNvbmZpZy50ZW1wbGF0ZSkge1xuICAgICAgY29tcC5zZXRUZW1wbGF0ZShpdGVtQ29uZmlnLnRlbXBsYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXA7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEFjY29yZGlvblJlc3VsdHNDb21wb25lbnQgKi9cbmltcG9ydCBSZXN1bHRzQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogYmFzZSBzZWxlY3RvciB0byB1c2Ugd2hlbiBmaW5kaW5nIERPTSB0YXJnZXRzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9zZWxlY3RvckJhc2UgPSBjb25maWcuc2VsZWN0b3JCYXNlIHx8ICcuanMteXh0LUFjY29yZGlvblJlc3VsdCc7XG5cbiAgICAvKipcbiAgICAgKiBjb2xsYXBzZWQgc3RhdGUgY2xhc3NcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuY29sbGFwc2VkQ2xhc3MgPSBjb25maWcuY29sbGFwc2VkQ2xhc3MgfHwgJ2lzLWNvbGxhcHNlZCc7XG5cbiAgICAvKipcbiAgICAgKiB2ZXJ0aWNhbCBjb25maWcgaWQgaXMgcmVxdWlyZWQgZm9yIGFuYWx5dGljc1xuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnZlcnRpY2FsQ29uZmlnSWQgPSBjb25maWcudmVydGljYWxDb25maWdJZCB8fCBjb25maWcuX3BhcmVudE9wdHMudmVydGljYWxDb25maWdJZCB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIHRoZSBjb21wb25lbnQgdHlwZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdBY2NvcmRpb25SZXN1bHRzJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9yZXN1bHRzYWNjb3JkaW9uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBvdmVycmlkZXMgb25Nb3VudCB0byBhZGQgYmluZGluZ3MgdG8gY2hhbmdlIHRoZSBoZWlnaHQgb24gY2xpY2tcbiAgICogQHJldHVybnMge0FjY29yZGlvblJlc3VsdHNDb21wb25lbnR9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgb25Nb3VudCAoKSB7XG4gICAgc3VwZXIub25Nb3VudCgpO1xuXG4gICAgY29uc3QgYWNjb3JkaW9uRWxzID0gRE9NLnF1ZXJ5QWxsKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fc2VsZWN0b3JCYXNlKTtcbiAgICBhY2NvcmRpb25FbHMuZm9yRWFjaCgoYWNjb3JkaW9uRWwpID0+IHtcbiAgICAgIGNvbnN0IHRvZ2dsZUVsID0gRE9NLnF1ZXJ5KGFjY29yZGlvbkVsLCB0aGlzLnRvZ2dsZVNlbGVjdG9yKCkpO1xuICAgICAgY29uc3QgY29udGVudEVsID0gRE9NLnF1ZXJ5KGFjY29yZGlvbkVsLCB0aGlzLmJvZHlTZWxlY3RvcigpKTtcbiAgICAgIHRoaXMuY2hhbmdlSGVpZ2h0KGNvbnRlbnRFbCwgYWNjb3JkaW9uRWwpO1xuICAgICAgdG9nZ2xlRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2soYWNjb3JkaW9uRWwsIHRvZ2dsZUVsLCBjb250ZW50RWwpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIG1vZGlmaWVyOiB0aGlzLnZlcnRpY2FsQ29uZmlnSWRcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogY2xpY2sgaGFuZGxlciBmb3IgdGhlIGFjY29yZGlvbiB0b2dnbGUgYnV0dG9uXG4gICAqIEBwYXJhbSB3cmFwcGVyRWwge0hUTUxFbGVtZW50fSB0aGUgdG9nZ2xlIGNvbnRhaW5lclxuICAgKiBAcGFyYW0gdG9nZ2xlRWwge0hUTUxFbGVtZW50fSB0aGUgYnV0dG9uXG4gICAqIEBwYXJhbSBjb250ZW50RWwge0hUTUxFbGVtZW50fSB0aGUgdG9nZ2xlIHRhcmdldFxuICAgKi9cbiAgaGFuZGxlQ2xpY2sgKHdyYXBwZXJFbCwgdG9nZ2xlRWwsIGNvbnRlbnRFbCkge1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEFuYWx5dGljc0V2ZW50KHRoaXMuaXNDb2xsYXBzZWQod3JhcHBlckVsKSA/ICdST1dfRVhQQU5EJyA6ICdST1dfQ09MTEFQU0UnKVxuICAgICAgLmFkZE9wdGlvbnMoe1xuICAgICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiB0aGlzLnZlcnRpY2FsQ29uZmlnSWQsXG4gICAgICAgIGVudGl0eUlkOiB0b2dnbGVFbC5kYXRhc2V0LmVudGl0eUlkXG4gICAgICB9KTtcbiAgICB3cmFwcGVyRWwuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLmNvbGxhcHNlZENsYXNzKTtcbiAgICB0aGlzLmNoYW5nZUhlaWdodChjb250ZW50RWwsIHdyYXBwZXJFbCk7XG4gICAgdG9nZ2xlRWwuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdGhpcy5pc0NvbGxhcHNlZCh3cmFwcGVyRWwpID8gJ2ZhbHNlJyA6ICd0cnVlJyk7XG4gICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlci5yZXBvcnQoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdHJ1ZSBpZiB0aGUgZWxlbWVudCBpcyBjdXJyZW50bHkgY29sbGFwc2VkXG4gICAqIEBwYXJhbSB3cmFwcGVyRWwge0hUTUxFbGVtZW50fSB0aGUgdG9nZ2xlIGNvbnRhaW5lclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzQ29sbGFwc2VkICh3cmFwcGVyRWwpIHtcbiAgICBpZiAoIXdyYXBwZXJFbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB3cmFwcGVyRWwuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY29sbGFwc2VkQ2xhc3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIHRvZ2dsZXMgdGhlIGhlaWdodCBiZXR3ZWVuIDAgYW5kIHRoZSBjb250ZW50IGhlaWdodCBmb3Igc21vb3RoIGFuaW1hdGlvblxuICAgKiBAcGFyYW0gdGFyZ2V0RWwge0hUTUxFbGVtZW50fVxuICAgKiBAcGFyYW0gd3JhcHBlckVsIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIGNoYW5nZUhlaWdodCAodGFyZ2V0RWwsIHdyYXBwZXJFbCkge1xuICAgIHRhcmdldEVsLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuaXNDb2xsYXBzZWQod3JhcHBlckVsKSA/IDAgOiB0YXJnZXRFbC5zY3JvbGxIZWlnaHR9cHhgO1xuICB9XG5cbiAgLyoqXG4gICAqIGhlbHBlciBmb3IgY29tcG9zaW5nIGNoaWxkIGVsZW1lbnQgc2VsZWN0b3JzXG4gICAqIEBwYXJhbSBjaGlsZCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgYnVpbGRTZWxlY3RvciAoY2hpbGQpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5fc2VsZWN0b3JCYXNlfSR7Y2hpbGR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBoZWxwZXIgZm9yIHRoZSB0b2dnbGUgYnV0dG9uIHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICB0b2dnbGVTZWxlY3RvciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRTZWxlY3RvcignLXRvZ2dsZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIGhlbHBlciBmb3IgdGhlIGNvbnRlbnQgZWxlbWVudCBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgYm9keVNlbGVjdG9yICgpIHtcbiAgICByZXR1cm4gdGhpcy5idWlsZFNlbGVjdG9yKCctYm9keScpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFNlYXJjaFN0YXRlcyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcbmltcG9ydCBBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50IGZyb20gJy4vYWNjb3JkaW9ucmVzdWx0c2NvbXBvbmVudC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9LCBzeXN0ZW1PcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzLCBzeXN0ZW1PcHRzKTtcblxuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUUztcbiAgICB0aGlzLl9saW1pdCA9IG9wdHMubGltaXQgfHwgMTA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnVW5pdmVyc2FsUmVzdWx0cyc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvdW5pdmVyc2FscmVzdWx0cyc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGluaXQgKG9wdHMpIHtcbiAgICBzdXBlci5pbml0KG9wdHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIGNvbnN0IHNlY3Rpb25zID0gZGF0YS5zZWN0aW9ucyB8fCBbXTtcbiAgICBjb25zdCBzZWFyY2hTdGF0ZSA9IGRhdGEuc2VhcmNoU3RhdGUgfHwgU2VhcmNoU3RhdGVzLlBSRV9TRUFSQ0g7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oeyBzZWN0aW9uczogW10gfSwgZGF0YSwge1xuICAgICAgaXNQcmVTZWFyY2g6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuUFJFX1NFQVJDSCxcbiAgICAgIGlzU2VhcmNoTG9hZGluZzogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyxcbiAgICAgIGlzU2VhcmNoQ29tcGxldGU6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFLFxuICAgICAgc2hvd05vUmVzdWx0czogc2VjdGlvbnMubGVuZ3RoID09PSAwLFxuICAgICAgcXVlcnk6IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKVxuICAgIH0pLCB2YWwpO1xuICB9XG5cbiAgYWRkQ2hpbGQgKGRhdGEgPSB7fSwgdHlwZSwgb3B0cykge1xuICAgIGNvbnN0IGNoaWxkT3B0cyA9IHsgLi4ub3B0cywgLi4udGhpcy5nZXRDaGlsZENvbmZpZyhbZGF0YVsndmVydGljYWxDb25maWdJZCddXSkgfTtcbiAgICBpZiAoY2hpbGRPcHRzLnVzZUFjY29yZGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLmFkZENoaWxkKGRhdGEsIEFjY29yZGlvblJlc3VsdHNDb21wb25lbnQudHlwZSwgY2hpbGRPcHRzKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIGNoaWxkT3B0cyk7XG4gIH1cblxuICBnZXRDaGlsZENvbmZpZyAoY29uZmlnSWQpIHtcbiAgICBjb25zdCBkZWZhdWx0Q29uZmlnID0ge1xuICAgICAgdmVydGljYWxDb25maWdJZDogY29uZmlnSWQsXG4gICAgICBpc1VuaXZlcnNhbDogdHJ1ZVxuICAgIH07XG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuX2NvbmZpZy5jb25maWc7XG4gICAgaWYgKGNvbmZpZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdENvbmZpZztcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgdGhpcy5fY29uZmlnWydjb25maWcnXVtjb25maWdJZF0gfHwgdGhpcy5fY29uZmlnWydjb25maWcnXSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgUXVlc3Rpb25TdWJtaXNzaW9uIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL3F1ZXN0aW9uc3VibWlzc2lvbic7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcblxuLyoqXG4gKiBDb25maWd1cmFibGUgb3B0aW9ucyBmb3IgdGhlIGNvbXBvbmVudFxuICogQHR5cGUge09iamVjdH1cbiAqL1xuY29uc3QgREVGQVVMVF9DT05GSUcgPSB7XG4gIC8qKlxuICAgKiBUaGUgZW50aXR5IGlkZW50aWZpZXIgdGhhdCB0aGUgcXVlc3Rpb24gaXMgYXNzb2NpYXRlZCB3aXRoLlxuICAgKiBUaGlzIGlzIHR5cGljYWxseSBhbiBvcmdhbml6YXRpb24gb2JqZWN0XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICAnZW50aXR5SWQnOiBudWxsLFxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBsYW5ndWFnZSBvZiB0aGUgcXVlc3Rpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICdsYW5ndWFnZSc6ICdFTicsXG5cbiAgLyoqXG4gICAqIFRoZSBtYWluIENTUyBzZWxlY3RvciB1c2VkIHRvIHJlZmVyZW5jZSB0aGUgZm9ybSBmb3IgdGhlIGNvbXBvbmVudC5cbiAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAqL1xuICAnZm9ybVNlbGVjdG9yJzogJ2Zvcm0nLFxuXG4gIC8qKlxuICAgKiBBbiBvcHRpb25hbCBsYWJlbCB0byB1c2UgZm9yIHRoZSBlLW1haWwgYWRkcmVzcyBpbnB1dFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgJ2VtYWlsTGFiZWwnOiAnRW1haWwgQWRkcmVzczonLFxuXG4gIC8qKlxuICAgKiBBbiBvcHRpb25hbCBsYWJlbCB0byB1c2UgZm9yIHRoZSBuYW1lIGlucHV0XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICAnbmFtZUxhYmVsJzogJ05hbWU6JyxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgbGFiZWwgdG8gdXNlIGZvciB0aGUgcXVlc3Rpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICdxdWVzdGlvbkxhYmVsJzogJ1doYXQgaXMgeW91ciBxdWVzdGlvbj8nLFxuXG4gIC8qKlxuICAgKiBBbiBvcHRpb25hbCBsYWJlbCB0byB1c2UgZm9yIHRoZSBQcml2YWN5IFBvbGljeVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgJ3ByaXZhY3lQb2xpY3lMYWJlbCc6ICdJIGFncmVlIHRvIG91ciBQcml2YWN5IFBvbGljeTonLFxuXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgU3VibWl0IGJ1dHRvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgJ2J1dHRvbkxhYmVsJzogJ1N1Ym1pdCdcbn07XG5cbi8qKlxuICogUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IGlzIGEgY29tcG9uZW50IHRoYXQgY3JlYXRlcyBhIGZvcm1cbiAqIHRoYXRzIGRpc3BsYXllZCB3aGVuZXZlciBhIHF1ZXJ5IGlzIHJ1bi4gSXQgZW5hYmxlcyB0aGUgdXNlclxuICogdG8gc3VibWl0IHF1ZXN0aW9ucyB0aGF0IHRoZXkgY2FudCBmaW5kIHRoZSBhbnN3ZXIgZm9yLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9DT05GSUcsIGNvbmZpZyksIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBSZWZlcmVuY2UgdG8gdGhlIHN0b3JhZ2UgbW9kZWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5RVUVTVElPTl9TVUJNSVNTSU9OO1xuXG4gICAgLyoqXG4gICAgICogTk9URShiaWxseSkgaWYgdGhpcyBpcyBhIHBhdHRlcm4gd2Ugd2FudCB0byBmb2xsb3cgZm9yIGNvbmZpZ3VyYXRpb25cbiAgICAgKiB3ZSBzaG91bGQgYmFrZSBpdCBpbnRvIHRoZSBjb3JlIGNsYXNzLlxuICAgICAqL1xuICAgIHRoaXMudmFsaWRhdGVDb25maWcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncXVlc3Rpb25zL3F1ZXN0aW9uc3VibWlzc2lvbic7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHB1YmxpYyBpbnRlcmZhY2UgYWxpYXMgZm9yIHRoZSBjb21wb25lbnRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUUFTdWJtaXNzaW9uJztcbiAgfVxuXG4gIC8qKlxuICAgKiB2YWxpZGF0aW9uQ29uZmlnIGNvbnRhaW5zIGEgYnVuY2ggb2YgcnVsZXNcbiAgICogdGhhdCBhcmUgdXNlZCB0byB2YWxpZGF0ZSBhZ2luc3QgY29uZmlndXJhdGlvbiBwcm92aWRlZCBieSB0aGUgdXNlclxuICAgKi9cbiAgdmFsaWRhdGVDb25maWcgKCkge1xuICAgIGlmICh0aGlzLl9jb25maWcuZW50aXR5SWQgPT09IG51bGwgfHxcbiAgICAgICAgdHlwZW9mIHRoaXMuX2NvbmZpZy5lbnRpdHlJZCAhPT0gJ251bWJlcicpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICdgZW50aXR5SWRgIGlzIGEgcmVxdWlyZWQgY29uZmlndXJhdGlvbiBvcHRpb24gZm9yIFF1ZXN0aW9uIFN1Ym1pc3Npb24nLFxuICAgICAgICAnUXVlc3Rpb25TdWJtaXNzaW9uJyk7XG4gICAgfVxuICB9XG5cbiAgYmVmb3JlTW91bnQgKCkge1xuICAgIC8vIEF2b2lkIG1vdW50aW5nIHRoZSBjb21wb25lbnQgaWYgdGhlcmVzIG5vIGRhdGFcbiAgICAvLyBOb3RlLCAxIGJlY2F1c2UgYGNvbmZpZ2AgaXMgYWx3YXlzIHBhcnQgb2YgdGhlIHN0YXRlLlxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldFN0YXRlKCkpLmxlbmd0aCA+IDE7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICBsZXQgZm9ybUVsID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fY29uZmlnLmZvcm1TZWxlY3Rvcik7XG4gICAgaWYgKGZvcm1FbCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYmluZEFuYWx5dGljcyhmb3JtRWwpO1xuICAgIHRoaXMuYmluZEZvcm1TdWJtaXQoZm9ybUVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBiaW5kQW5hbHl0aWNzIHdpbGwgd2lyZSB1cCBET00gZXZlbnQgaG9va3MgdG8gc2VydmVyc2lkZSByZXBvcnRpbmdcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybUVsXG4gICAqL1xuICBiaW5kQW5hbHl0aWNzIChmb3JtRWwpIHtcbiAgICBpZiAodGhpcy5hbmFseXRpY3NSZXBvcnRlciA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHF1ZXN0aW9uVGV4dEVsID0gRE9NLnF1ZXJ5KGZvcm1FbCwgJy5qcy1xdWVzdGlvbi10ZXh0Jyk7XG4gICAgRE9NLm9uKHF1ZXN0aW9uVGV4dEVsLCAnZm9jdXMnLCAoKSA9PiB7XG4gICAgICB0aGlzLmFuYWx5dGljc1JlcG9ydGVyLnJlcG9ydChuZXcgQW5hbHl0aWNzRXZlbnQoJ1FVRVNUSU9OX0ZPQ1VTJykpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGJpbmRGb3JtU3VibWl0IGhhbmRsZXMgc3VibWl0dGluZyB0aGUgcXVlc3Rpb24gdG8gdGhlIHNlcnZlci5cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybUVsXG4gICAqL1xuICBiaW5kRm9ybVN1Ym1pdCAoZm9ybUVsKSB7XG4gICAgRE9NLm9uKGZvcm1FbCwgJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAvLyBUT0RPKGJpbGx5KSB3ZSBwcm9iYWJseSB3YW50IHRvIGRpc2FibGUgdGhlIGZvcm0gZnJvbSBiZWluZyBzdWJtaXR0ZWQgdHdpY2VcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gdGhpcy5wYXJzZShmb3JtRWwpO1xuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy52YWxpZGF0ZVJlcXVpcmVkKGZvcm1EYXRhKTtcbiAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUobmV3IFF1ZXN0aW9uU3VibWlzc2lvbihmb3JtRGF0YSwgZXJyb3JzKSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29yZS5zdWJtaXRRdWVzdGlvbih7XG4gICAgICAgICdlbnRpdHlJZCc6IHRoaXMuX2NvbmZpZy5lbnRpdHlJZCxcbiAgICAgICAgJ3F1ZXN0aW9uTGFuZ3VhZ2UnOiB0aGlzLl9jb25maWcubGFuZ3VhZ2UsXG4gICAgICAgICdzaXRlJzogJ0ZJUlNUUEFSVFknLFxuICAgICAgICAnbmFtZSc6IGZvcm1EYXRhLm5hbWUsXG4gICAgICAgICdlbWFpbCc6IGZvcm1EYXRhLmVtYWlsLFxuICAgICAgICAncXVlc3Rpb25UZXh0JzogZm9ybURhdGEucXVlc3Rpb25UZXh0LFxuICAgICAgICAncXVlc3Rpb25EZXNjcmlwdGlvbic6IGZvcm1EYXRhLnF1ZXN0aW9uRGVzY3JpcHRpb25cbiAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIG5ldyBRdWVzdGlvblN1Ym1pc3Npb24oZm9ybURhdGEsIHtcbiAgICAgICAgICAgICAgJ25ldHdvcmsnOiAnVGhlcmUgd2FzIGEgcHJvYmxlbSBzdWJtaXR0aW5nIHlvdXIgcXVlc3Rpb24uIFBsZWFzZSB0cnkgYWdhaW4uJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUYWtlcyB0aGUgZm9ybSwgYW5kIGJ1aWxkcyBhIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGlucHV0IG5hbWVzXG4gICAqIGFuZCB0ZXh0IGZpZWxkcy5cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybUVsXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBwYXJzZSAoZm9ybUVsKSB7XG4gICAgY29uc3QgaW5wdXRGaWVsZHMgPSBET00ucXVlcnlBbGwoZm9ybUVsLCAnLmpzLXF1ZXN0aW9uLWZpZWxkJyk7XG4gICAgaWYgKCFpbnB1dEZpZWxkcyB8fCBpbnB1dEZpZWxkcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBsZXQgb2JqID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dEZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHZhbCA9IGlucHV0RmllbGRzW2ldLnZhbHVlO1xuICAgICAgaWYgKGlucHV0RmllbGRzW2ldLnR5cGUgPT09ICdjaGVja2JveCcgJiYgdmFsID09PSAndHJ1ZScpIHtcbiAgICAgICAgdmFsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIG9ialtpbnB1dEZpZWxkc1tpXS5uYW1lXSA9IHZhbDtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyB0aGUgcmVxdWlyZWQgZmllbGRzIChvciBydWxlcykgZm9yIHRoZSBmb3JtIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IGZvcm1EYXRhXG4gICAqIEByZXR1cm5zIHtPYmplY3R8Ym9vbGVhbn0gZXJyb3JzIG9iamVjdCBpZiBhbnkgZXJyb3JzIGZvdW5kXG4gICAqL1xuICB2YWxpZGF0ZVJlcXVpcmVkIChmb3JtRGF0YSkge1xuICAgIGxldCBlcnJvcnMgPSB7fTtcbiAgICBpZiAoIWZvcm1EYXRhLmVtYWlsIHx8IHR5cGVvZiBmb3JtRGF0YS5lbWFpbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9yc1snZW1haWwnXSA9ICdNaXNzaW5nIGVtYWlsIGFkZHJlc3MhJztcbiAgICB9XG5cbiAgICBpZiAoIWZvcm1EYXRhLnByaXZhY3lQb2xpY3kgfHwgZm9ybURhdGEucHJpdmFjeVBvbGljeSAhPT0gdHJ1ZSkge1xuICAgICAgZXJyb3JzWydwcml2YWN5UG9saWN5J10gPSAnQXBwcm92aW5nIG91ciBwcml2YWN5IHBvbGljeSB0ZXJtcyBpcyByZXF1aXJlZCEnO1xuICAgIH1cblxuICAgIGlmICghZm9ybURhdGEucXVlc3Rpb25UZXh0IHx8IHR5cGVvZiBmb3JtRGF0YS5xdWVzdGlvblRleHQgIT09ICdzdHJpbmcnKSB7XG4gICAgICBlcnJvcnNbJ3F1ZXN0aW9uVGV4dCddID0gJ1F1ZXN0aW9uIHRleHQgaXMgcmVxdWlyZWQhJztcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPiAwID8gZXJyb3JzIDogbnVsbDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1ZHSWNvbiB7XG4gIC8qKlxuICAgKiBAcGFyYW0gY29uZmlnXG4gICAqIEBwYXJhbSBjb25maWcubmFtZVxuICAgKiBAcGFyYW0gY29uZmlnLnBhdGhcbiAgICogQHBhcmFtIGNvbmZpZy5jb21wbGV4Q29udGVudHNcbiAgICogQHBhcmFtIGNvbmZpZy52aWV3Qm94XG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIC8qKlxuICAgICAqIHRoZSBuYW1lIG9mIHRoZSBpY29uXG4gICAgICovXG4gICAgdGhpcy5uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgLyoqXG4gICAgICogYW4gc3ZnIHBhdGggZGVmaW5pdGlvblxuICAgICAqL1xuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoO1xuICAgIC8qKlxuICAgICAqIGlmIG5vdCB1c2luZyBhIHBhdGgsIGEgdGhlIG1hcmt1cCBmb3IgYSBjb21wbGV4IFNWR1xuICAgICAqL1xuICAgIHRoaXMuY29tcGxleENvbnRlbnRzID0gY29uZmlnLmNvbXBsZXhDb250ZW50cztcbiAgICAvKipcbiAgICAgKiB0aGUgdmlldyBib3ggZGVmaW5pdGlvbiwgZGVmYXVsdHMgdG8gMjR4MjRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudmlld0JveCA9IGNvbmZpZy52aWV3Qm94IHx8ICcwIDAgMjQgMjQnO1xuICAgIC8qKlxuICAgICAqIGFjdHVhbCBjb250ZW50cyB1c2VkXG4gICAgICovXG4gICAgdGhpcy5jb250ZW50cyA9IHRoaXMucGF0aERlZmluaXRpb24oKTtcbiAgfVxuXG4gIHBhdGhEZWZpbml0aW9uICgpIHtcbiAgICBpZiAodGhpcy5jb21wbGV4Q29udGVudHMpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXhDb250ZW50cztcbiAgICB9XG5cbiAgICByZXR1cm4gYDxwYXRoIGQ9XCIke3RoaXMucGF0aH1cIj48L3BhdGg+YDtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRoZSBzdmcgbWFya3VwXG4gICAqL1xuICBtYXJrdXAgKCkge1xuICAgIHJldHVybiBgPHN2ZyB2aWV3Qm94PVwiJHt0aGlzLnZpZXdCb3h9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPiR7dGhpcy5jb250ZW50c308L3N2Zz5gO1xuICB9XG59XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAndGh1bWInLFxuICB2aWV3Qm94OiAnMCAwIDI0IDIyJyxcbiAgcGF0aDogJ00xNS4yNzMgMUg1LjQ1NWMtLjkwNiAwLTEuNjguNTUtMi4wMDggMS4zNDJMLjE1MyAxMC4wOTdBMi4xOSAyLjE5IDAgMDAwIDEwLjl2Mi4yYzAgMS4yMS45ODIgMi4yIDIuMTgyIDIuMmg2Ljg4M0w4LjAzIDIwLjMyN2wtLjAzMy4zNTJjMCAuNDUxLjE4Ni44NjkuNDggMS4xNjZMOS42MzMgMjNsNy4xNzgtNy4yNDlhMi4xNiAyLjE2IDAgMDAuNjQ0LTEuNTUxdi0xMWMwLTEuMjEtLjk4Mi0yLjItMi4xODItMi4yem0wIDEzLjJsLTQuNzM1IDQuNzc0TDExLjc1IDEzLjFIMi4xODJ2LTIuMmwzLjI3My03LjdoOS44MTh2MTF6TTE5LjYzNiAxSDI0djEzLjJoLTQuMzY0VjF6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncmVjZWlwdCcsXG4gIHBhdGg6ICdNMTQuNjA2IDkuNWMtLjY3MS0uNTE1LTEuNTkxLS44MzMtMi42MDYtLjgzMyAxLjAxNSAwIDEuOTM1LjMxOCAyLjYwNi44MzN6bS03Ljk4NSAwSDEuNjU1QTEuNjYgMS42NiAwIDAxMCA3LjgzM1YzLjY2N0MwIDIuNzQ3Ljc0MSAyIDEuNjU1IDJoMjAuNjlBMS42NiAxLjY2IDAgMDEyNCAzLjY2N3Y0LjE2NkExLjY2IDEuNjYgMCAwMTIyLjM0NSA5LjVoLTQuOTY2VjIySDYuNjIxVjkuNWgyLjc3M0g2LjYyem0xMC43NTgtMS42NjdoNC45NjZWMy42NjdIMS42NTV2NC4xNjZoNC45NjZ2LTIuNWgxMC43NTh2Mi41eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3BhbnRoZW9uJyxcbiAgcGF0aDogJ005Ljk0NyAxNi41OThoLjI1MlY5LjQxMmgtLjI1MmEuNDMyLjQzMiAwIDAxLS4yMy0uMDY1Yy0uMDctLjA0My0uMTA2LS4wOTMtLjEwNi0uMTVMOS4xNSA3Ljgydi0uMTVjMC0uMDQ0LjAyOC0uMDguMDg0LS4xMDlhLjY5MS42OTEgMCAwMS4xMDUtLjA4Ni4yNTQuMjU0IDAgMDEuMTQ2LS4wNDNIMTMuNmMuMDU2IDAgLjEwNC4wMTUuMTQ2LjA0My4wNDIuMDMuMDkxLjA1OC4xNDcuMDg2YS4yNzEuMjcxIDAgMDEuMDYzLjEwOGMuMDE0LjA0My4wMDcuMDkzLS4wMi4xNWwtLjQyIDEuMzc4YS4zNzQuMzc0IDAgMDEtLjE0Ny4xNS4zNy4zNyAwIDAxLS4xOS4wNjVoLS4yNTF2Ny4xODZoLjI1MmEuMzcuMzcgMCAwMS4xODkuMDY1Yy4wNy4wNDMuMTE5LjA5My4xNDcuMTVsLjQyIDEuMzc4Yy4wMjcuMDI4LjAzNC4wNzEuMDIuMTI5YS4yNzUuMjc1IDAgMDEtLjA2My4xMjkgMS4zNjQgMS4zNjQgMCAwMC0uMTQ3LjA4Ni4yNTQuMjU0IDAgMDEtLjE0Ni4wNDNIOS40ODVhLjI1NC4yNTQgMCAwMS0uMTQ2LS4wNDMuNjkxLjY5MSAwIDAxLS4xMDUtLjA4NmMtLjA1Ni0uMDI5LS4wODQtLjA3Mi0uMDg0LS4xM3YtLjEyOGwuNDYxLTEuMzc3YzAtLjA1OC4wMzUtLjEwOC4xMDUtLjE1MWEuNDMyLjQzMiAwIDAxLjIzMS0uMDY1em01Ljc5MiAwaC4yNTJWOS40MTJoLS4yNTJhLjQzMi40MzIgMCAwMS0uMjMtLjA2NS4zNzQuMzc0IDAgMDEtLjE0OC0uMTVsLS40Mi0xLjM3N2MtLjAyNy0uMDI5LS4wMzQtLjA3Mi0uMDItLjEzYS4yNzUuMjc1IDAgMDEuMDYzLS4xMjljLjA1Ni0uMDI4LjEwNS0uMDU3LjE0Ni0uMDg2YS4yNTQuMjU0IDAgMDEuMTQ3LS4wNDNoNC4xMTRjLjA1NSAwIC4xMDQuMDE1LjE0Ni4wNDNhLjY5MS42OTEgMCAwMS4xMDUuMDg2Yy4wNTYuMDMuMDg0LjA3Mi4wODQuMTN2LjEyOWwtLjQyIDEuMzc3YS4zNzQuMzc0IDAgMDEtLjE0Ni4xNS40MzIuNDMyIDAgMDEtLjIzMS4wNjVoLS4yMXY3LjE4NmguMjFhLjQzLjQzIDAgMDEuMjMuMDY1Yy4wNy4wNDMuMTIuMDkzLjE0OC4xNWwuNDIgMS4zNzh2LjE1YzAgLjA0My0uMDI5LjA4LS4wODUuMTA4YS42OTEuNjkxIDAgMDEtLjEwNS4wODYuMjU0LjI1NCAwIDAxLS4xNDYuMDQzaC00LjExNGEuMjU0LjI1NCAwIDAxLS4xNDctLjA0MyAxLjM2NCAxLjM2NCAwIDAwLS4xNDYtLjA4Ni4yNzEuMjcxIDAgMDEtLjA2My0uMTA4Yy0uMDE0LS4wNDMtLjAwNy0uMDkzLjAyLS4xNWwuNDItMS4zNzdhLjM3NC4zNzQgMCAwMS4xNDctLjE1MS40MzIuNDMyIDAgMDEuMjMxLS4wNjV6bS0xMS43OTQtLjA4NmguMjUyVjkuNDk4aC0uMjUyYS4zMzQuMzM0IDAgMDEtLjIxLS4wNjUuMzg2LjM4NiAwIDAxLS4xMjYtLjE5M2wtLjQyLTEuMzc3YS4yNDguMjQ4IDAgMDEtLjAyLS4xNzIuODU0Ljg1NCAwIDAxLjA2My0uMTczYy4wMjgtLjA1Ny4wNy0uMS4xMjYtLjEyOWEuMzY1LjM2NSAwIDAxLjE2OC0uMDQzaDQuMDdjLjA1NyAwIC4xMTMuMDE1LjE2OS4wNDNhLjI3OC4yNzggMCAwMS4xMjYuMTMuODU0Ljg1NCAwIDAxLjA2Mi4xNzIuMjQ4LjI0OCAwIDAxLS4wMi4xNzJsLS40MiAxLjM3N2EuMzg2LjM4NiAwIDAxLS4xMjYuMTkzLjMzNC4zMzQgMCAwMS0uMjEuMDY1aC0uMjF2Ny4wMTRoLjIxYy4wODQgMCAuMTU0LjAyOS4yMS4wODZhLjY3My42NzMgMCAwMS4xMjYuMTcybC40MiAxLjM3OGEuMjQ4LjI0OCAwIDAxLjAyLjE3Mi44NTQuODU0IDAgMDEtLjA2Mi4xNzIuMjc4LjI3OCAwIDAxLS4xMjYuMTI5LjM2NS4zNjUgMCAwMS0uMTY4LjA0M0gzLjUyNmEuMzY1LjM2NSAwIDAxLS4xNjgtLjA0My4yNzguMjc4IDAgMDEtLjEyNi0uMTMuODU0Ljg1NCAwIDAxLS4wNjMtLjE3MS4yNDguMjQ4IDAgMDEuMDItLjE3MmwuNDItMS4zNzhhLjY3My42NzMgMCAwMS4xMjYtLjE3Mi4yODEuMjgxIDAgMDEuMjEtLjA4NnpNMS43NjMgNi42NThhLjcxNy43MTcgMCAwMS0uNTA0LS4xOTQuNjQ0LjY0NCAwIDAxLS4yMS0uNDk1di0uNDNhLjczLjczIDAgMDEuMTA1LS4zODcuNjguNjggMCAwMS4yNzMtLjI1OUM0LjMwOSAzLjQwMiA2LjU0IDIuMjc2IDguMTIxIDEuNTE1IDkuNzAyLjc1NSAxMC40OTMuMzYxIDEwLjQ5My4zMzJjLjUzMS0uMjU4Ljk3Mi0uMzY2IDEuMzIyLS4zMjMuMzUuMDQzLjczNC4xNjUgMS4xNTQuMzY2bDguMzEgNC41MThjLjE0LjA1OC4yNDUuMTQ0LjMxNS4yNTlhLjczLjczIDAgMDEuMTA1LjM4N3YuNDNjMCAuMjAxLS4wNy4zNjYtLjIxLjQ5NWEuNzE3LjcxNyAwIDAxLS41MDQuMTk0SDEuNzYzem0tLjcxNCAxMy4zNGEuNTQuNTQgMCAwMS4xNjgtLjM4Ny41MTYuNTE2IDAgMDEuMzc4LS4xNzJoMTkuNjQyYy4xNjggMCAuMzA4LjA1Ny40Mi4xNzJhLjU0MS41NDEgMCAwMS4xNjguMzg3di44MThhLjUyMi41MjIgMCAwMS0uMTY4LjQwOC42MDUuNjA1IDAgMDEtLjQyLjE1MUgxLjU5NWEuNTUxLjU1MSAwIDAxLS4zNzgtLjE1LjUyMi41MjIgMCAwMS0uMTY4LS40MXYtLjgxN3ptMjEuNDA1IDIuMDIyYy4xNCAwIC4yNjYuMDU4LjM3OC4xNzNhLjU5Mi41OTIgMCAwMS4xNjguNDN2LjgxOGEuNTQxLjU0MSAwIDAxLS4xNjguMzg3LjUxNi41MTYgMCAwMS0uMzc4LjE3MkwuNTQ2IDIzLjk1N2EuNTE2LjUxNiAwIDAxLS4zNzgtLjE3Mi41NDEuNTQxIDAgMDEtLjE2OC0uMzg3di0uODE4YS41OS41OSAwIDAxLjE2OC0uNDMuNTE2LjUxNiAwIDAxLjM3OC0uMTczbDIxLjkwOC4wNDN6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnbWljJyxcbiAgcGF0aDogJ00xMiAxNWMxLjY2IDAgMi45OS0xLjM0IDIuOTktM0wxNSA2YzAtMS42Ni0xLjM0LTMtMy0zUzkgNC4zNCA5IDZ2NmMwIDEuNjYgMS4zNCAzIDMgM3ptNS4zLTNjMCAzLTIuNTQgNS4xLTUuMyA1LjFTNi43IDE1IDYuNyAxMkg1YzAgMy40MSAyLjcyIDYuMjMgNiA2LjcyVjIyaDJ2LTMuMjhjMy4yOC0uNDggNi0zLjMgNi02LjcyaC0xLjd6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnZGlyZWN0aW9ucycsXG4gIHBhdGg6ICdNMjMuNjQ5IDExLjE1NEwxMi44NDYuMzVhMS4xOTUgMS4xOTUgMCAwMC0xLjY5MiAwTC4zNSAxMS4xNTRhMS4xOTUgMS4xOTUgMCAwMDAgMS42OTJMMTEuMTU0IDIzLjY1YTEuMTk1IDEuMTk1IDAgMDAxLjY5MiAwTDIzLjY1IDEyLjg0NmMuNDY4LS40NTYuNDY4LTEuMjEyIDAtMS42OTJ6bS05LjI1NCAzLjg1M3YtMy4wMDFIOS41OTN2My42aC0yLjR2LTQuOGMwLS42Ni41NC0xLjIgMS4yLTEuMmg2LjAwMlY2LjYwNGw0LjIgNC4yLTQuMiA0LjIwMnonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdjYWxlbmRhcicsXG4gIHBhdGg6ICdNMTguMTExIDEzLjJIMTJ2Nmg2LjExMXYtNnpNMTYuODkgMHYyLjRINy4xMVYwSDQuNjY3djIuNEgzLjQ0NGMtMS4zNTYgMC0yLjQzMiAxLjA4LTIuNDMyIDIuNEwxIDIxLjZDMSAyMi45MiAyLjA4OCAyNCAzLjQ0NCAyNGgxNy4xMTJDMjEuOSAyNCAyMyAyMi45MiAyMyAyMS42VjQuOGMwLTEuMzItMS4xLTIuNC0yLjQ0NC0yLjRoLTEuMjIzVjBIMTYuODl6bTMuNjY3IDIxLjZIMy40NDRWOC40aDE3LjExMnYxMy4yeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2NhbGxvdXQnLFxuICBwYXRoOiAnTTIxLjk5IDRjMC0xLjEtLjg5LTItMS45OS0ySDRjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoMTRsNCA0LS4wMS0xOHonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdpbmZvJyxcbiAgcGF0aDogJ00xMiA4LjRBMS4yIDEuMiAwIDEwMTIgNmExLjIgMS4yIDAgMDAwIDIuNHpNMTIgMGM2LjYyNCAwIDEyIDUuMzc2IDEyIDEycy01LjM3NiAxMi0xMiAxMlMwIDE4LjYyNCAwIDEyIDUuMzc2IDAgMTIgMHptMCAxOGMuNjYgMCAxLjItLjU0IDEuMi0xLjJWMTJjMC0uNjYtLjU0LTEuMi0xLjItMS4yLS42NiAwLTEuMi41NC0xLjIgMS4ydjQuOGMwIC42Ni41NCAxLjIgMS4yIDEuMnonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdicmllZmNhc2UnLFxuICBwYXRoOiAnTTIwIDdoLTRWNWMwLTEuMTEtLjg5LTItMi0yaC00Yy0xLjExIDAtMiAuODktMiAydjJINGMtMS4xMSAwLTEuOTkuODktMS45OSAyTDIgMjBjMCAxLjExLjg5IDIgMiAyaDE2YzEuMTEgMCAyLS44OSAyLTJWOWMwLTEuMTEtLjg5LTItMi0yem0tNiAwaC00VjVoNHYyeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2thYm9iJyxcbiAgdmlld0JveDogJzAgMCAzIDExJyxcbiAgY29tcGxleENvbnRlbnRzOiBgPGNpcmNsZSBjeD1cIjEuNVwiIGN5PVwiMS41XCIgcj1cIjEuNVwiLz48Y2lyY2xlIGN4PVwiMS41XCIgY3k9XCI1LjVcIiByPVwiMS41XCIvPjxjaXJjbGUgY3g9XCIxLjVcIiBjeT1cIjkuNVwiIHI9XCIxLjVcIi8+YFxufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncGVyc29uJyxcbiAgdmlld0JveDogJzAgMCAxOCAxOCcsXG4gIHBhdGg6ICdNOSA5YzIuNDg2IDAgNC41LTIuMDE0IDQuNS00LjVTMTEuNDg2IDAgOSAwYTQuNDk5IDQuNDk5IDAgMDAtNC41IDQuNUM0LjUgNi45ODYgNi41MTQgOSA5IDl6bTAgMi4yNWMtMy4wMDQgMC05IDEuNTA4LTkgNC41djEuMTI1QzAgMTcuNDk0LjUwNiAxOCAxLjEyNSAxOGgxNS43NWMuNjE5IDAgMS4xMjUtLjUwNiAxLjEyNS0xLjEyNVYxNS43NWMwLTIuOTkyLTUuOTk2LTQuNS05LTQuNXonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdtYWduaWZ5aW5nX2dsYXNzJyxcbiAgcGF0aDogJ00xNi4xMjQgMTMuMDUxYTUuMTU0IDUuMTU0IDAgMTEwLTEwLjMwOCA1LjE1NCA1LjE1NCAwIDAxMCAxMC4zMDhNMTYuMTE0IDBhNy44ODYgNy44ODYgMCAwMC02LjQ2IDEyLjQwN0wwIDIyLjA2IDEuOTQgMjRsOS42NTMtOS42NTNBNy44ODYgNy44ODYgMCAxMDE2LjExMyAwJ1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnb2ZmaWNlJyxcbiAgcGF0aDogJ00xMiA3VjNIMnYxOGgyMFY3SDEyek02IDE5SDR2LTJoMnYyem0wLTRINHYtMmgydjJ6bTAtNEg0VjloMnYyem0wLTRINFY1aDJ2MnptNCAxMkg4di0yaDJ2MnptMC00SDh2LTJoMnYyem0wLTRIOFY5aDJ2MnptMC00SDhWNWgydjJ6bTEwIDEyaC04di0yaDJ2LTJoLTJ2LTJoMnYtMmgtMlY5aDh2MTB6bS0yLThoLTJ2Mmgydi0yem0wIDRoLTJ2Mmgydi0yeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2xpbmsnLFxuICBwYXRoOiAnTTIuMjggMTJBMy43MjMgMy43MjMgMCAwMTYgOC4yOGg0LjhWNkg2Yy0zLjMxMiAwLTYgMi42ODgtNiA2czIuNjg4IDYgNiA2aDQuOHYtMi4yOEg2QTMuNzIzIDMuNzIzIDAgMDEyLjI4IDEyem00LjkyIDEuMmg5LjZ2LTIuNEg3LjJ2Mi40ek0xOCA2aC00Ljh2Mi4yOEgxOEEzLjcyMyAzLjcyMyAwIDAxMjEuNzIgMTIgMy43MjMgMy43MjMgMCAwMTE4IDE1LjcyaC00LjhWMThIMThjMy4zMTIgMCA2LTIuNjg4IDYtNnMtMi42ODgtNi02LTZ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnd2luZG93JyxcbiAgcGF0aDogJ00zIDEzaDhWM0gzdjEwem0wIDhoOHYtNkgzdjZ6bTEwIDBoOFYxMWgtOHYxMHptMC0xOHY2aDhWM2gtOHonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdwaG9uZScsXG4gIHBhdGg6ICdNNC44MjcgMTAuMzg3YTIwLjE5OCAyMC4xOTggMCAwMDguNzg2IDguNzg2bDIuOTM0LTIuOTMzYy4zNi0uMzYuODkzLS40OCAxLjM2LS4zMmExNS4yMSAxNS4yMSAwIDAwNC43Ni43NmMuNzMzIDAgMS4zMzMuNiAxLjMzMyAxLjMzM3Y0LjY1NEMyNCAyMy40IDIzLjQgMjQgMjIuNjY3IDI0IDEwLjE0NyAyNCAwIDEzLjg1MyAwIDEuMzMzIDAgLjYuNiAwIDEuMzMzIDBINmMuNzMzIDAgMS4zMzMuNiAxLjMzMyAxLjMzMyAwIDEuNjY3LjI2NyAzLjI2Ny43NiA0Ljc2LjE0Ny40NjcuMDQuOTg3LS4zMzMgMS4zNmwtMi45MzMgMi45MzR6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAndGFnJyxcbiAgdmlld0JveDogJzAgMCAxOCAxOCcsXG4gIHBhdGg6ICdNMTcuNDY5IDguNjIybC04LjEtOC4xQTEuNzg5IDEuNzg5IDAgMDA4LjEgMEgxLjhDLjgxIDAgMCAuODEgMCAxLjh2Ni4zYzAgLjQ5NS4xOTguOTQ1LjUzMSAxLjI3OGw4LjEgOC4xYy4zMjQuMzI0Ljc3NC41MjIgMS4yNjkuNTIyYTEuNzYgMS43NiAwIDAwMS4yNjktLjUzMWw2LjMtNi4zQTEuNzYgMS43NiAwIDAwMTggOS45YzAtLjQ5NS0uMjA3LS45NTQtLjUzMS0xLjI3OHpNMy4xNSA0LjVjLS43NDcgMC0xLjM1LS42MDMtMS4zNS0xLjM1IDAtLjc0Ny42MDMtMS4zNSAxLjM1LTEuMzUuNzQ3IDAgMS4zNS42MDMgMS4zNSAxLjM1IDAgLjc0Ny0uNjAzIDEuMzUtMS4zNSAxLjM1eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2RvY3VtZW50JyxcbiAgcGF0aDogJ000IDZIMnYxNGMwIDEuMS45IDIgMiAyaDE0di0ySDRWNnptMTYtNEg4Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDEyYzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS0xIDlIOVY5aDEwdjJ6bS00IDRIOXYtMmg2djJ6bTQtOEg5VjVoMTB2MnonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdjaGV2cm9uJyxcbiAgdmlld0JveDogJzAgMCA3IDknLFxuICBjb21wbGV4Q29udGVudHM6IGA8ZyBmaWxsLXJ1bGU9XCJldmVub2RkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xIC04KVwiPjxwYXRoIGQ9XCJtMi42NDE3MDA0IDgtMS4xNDE3MDA0IDEuMDU3NSAzLjcwODUwMjAyIDMuNDQyNS0zLjcwODUwMjAyIDMuNDQyNSAxLjE0MTcwMDQgMS4wNTc1IDQuODU4Mjk5Ni00LjV6XCIvPjwvZz5gXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdzdXBwb3J0JyxcbiAgcGF0aDogJ00xMi41IDJDNy44MSAyIDQgNS44MSA0IDEwLjVjMCA0LjY5IDMuODEgOC41IDguNSA4LjVoLjV2M2M0Ljg2LTIuMzQgOC03IDgtMTEuNUMyMSA1LjgxIDE3LjE5IDIgMTIuNSAyem0xIDE0LjVoLTJ2LTJoMnYyem0wLTMuNWgtMmMwLTMuMjUgMy0zIDMtNSAwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDJoLTJjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNGMwIDIuNS0zIDIuNzUtMyA1eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3lleHQnLFxuICB2aWV3Qm94OiAnMCAwIDMwIDMwJyxcbiAgcGF0aDogJ00yNS41MTcgMjguMTQydi4wOTVoLS4yMDR2LjkwNWgtLjA2NnYtLjkwNWgtLjE5N3YtLjA5NWguNDY3em0uNjY3IDBoLjA2NnYxaC0uMDY2di0uODI1bC0uMjQuNTk1aC0uMDEzbC0uMjQtLjU5NXYuODI1aC0uMDY2di0xaC4wNjZsLjI0Ny42MS4yNDYtLjYxek0xNSAyOC44YzcuNjIyIDAgMTMuOC02LjE3OCAxMy44LTEzLjggMC03LjYyMi02LjE3OC0xMy44LTEzLjgtMTMuOEM3LjM3OCAxLjIgMS4yIDcuMzc4IDEuMiAxNWMwIDcuNjIyIDYuMTc4IDEzLjggMTMuOCAxMy44ek0xNSAwYzguMjg0IDAgMTUgNi43MTYgMTUgMTUgMCA4LjI4NC02LjcxNiAxNS0xNSAxNS04LjI4NCAwLTE1LTYuNzE2LTE1LTE1QzAgNi43MTYgNi43MTYgMCAxNSAwem0uNDUgMTYuNjV2LTEuMmg2LjZ2MS4yaC0yLjd2NS40aC0xLjJ2LTUuNGgtMi43em0tMS41OTktMS4zNWwuODQ5Ljg0OS0yLjYwMSAyLjYwMSAyLjYwMSAyLjYwMS0uODQ5Ljg0OS0yLjYwMS0yLjYwMUw4LjY0OSAyMi4ybC0uODQ5LS44NDkgMi42MDEtMi42MDFMNy44IDE2LjE0OWwuODQ5LS44NDkgMi42MDEgMi42MDEgMi42MDEtMi42MDF6TTE4LjY3NSA5YTIuMTc1IDIuMTc1IDAgMDAtMS44NDcgMy4zMjNsMi45OTUtMi45OTVBMi4xNjMgMi4xNjMgMCAwMDE4LjY3NSA5em0wIDUuNTVhMy4zNzUgMy4zNzUgMCAxMTIuODMzLTUuMjA5bC0zLjc4OSAzLjc4OGEyLjE3NSAyLjE3NSAwIDAwMy4xMy0xLjk1NGgxLjIwMWEzLjM3NSAzLjM3NSAwIDAxLTMuMzc1IDMuMzc1em0tNy40MjUtMy43MzRMMTMuNzggNy44bC45Mi43NzEtMi44NSAzLjM5N3YyLjU4MmgtMS4ydi0yLjU4Mkw3LjggOC41N2wuOTItLjc3MSAyLjUzIDMuMDE2eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3BpbicsXG4gIHZpZXdCb3g6ICcwIDAgMTMgMTgnLFxuICBwYXRoOiAnbTkuMzc1IDBjLTMuNTI0NDY0MjkgMC02LjM3NSAyLjgxNy02LjM3NSA2LjMgMCA0LjcyNSA2LjM3NSAxMS43IDYuMzc1IDExLjdzNi4zNzUtNi45NzUgNi4zNzUtMTEuN2MwLTMuNDgzLTIuODUwNTM1Ny02LjMtNi4zNzUtNi4zem0uMDAwMDAwMTggOC41NTAwMDAwN2MtMS4yNTY3ODU3NiAwLTIuMjc2Nzg1NzktMS4wMDgtMi4yNzY3ODU3OS0yLjI1czEuMDIwMDAwMDMtMi4yNSAyLjI3Njc4NTc5LTIuMjVjMS4yNTY3ODU3MiAwIDIuMjc2Nzg1ODIgMS4wMDggMi4yNzY3ODU4MiAyLjI1cy0xLjAyMDAwMDEgMi4yNS0yLjI3Njc4NTgyIDIuMjV6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnZ2VhcicsXG4gIHBhdGg6ICdNMTIgMTBjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yem03LTdINWEyIDIgMCAwMC0yIDJ2MTRhMiAyIDAgMDAyIDJoMTRhMiAyIDAgMDAyLTJWNWEyIDIgMCAwMC0yLTJ6bS0xLjc1IDljMCAuMjMtLjAyLjQ2LS4wNS42OGwxLjQ4IDEuMTZjLjEzLjExLjE3LjMuMDguNDVsLTEuNCAyLjQyYy0uMDkuMTUtLjI3LjIxLS40My4xNWwtMS43NC0uN2MtLjM2LjI4LS43Ni41MS0xLjE4LjY5bC0uMjYgMS44NWMtLjAzLjE3LS4xOC4zLS4zNS4zaC0yLjhjLS4xNyAwLS4zMi0uMTMtLjM1LS4yOWwtLjI2LTEuODVjLS40My0uMTgtLjgyLS40MS0xLjE4LS42OWwtMS43NC43Yy0uMTYuMDYtLjM0IDAtLjQzLS4xNWwtMS40LTIuNDJhLjM1My4zNTMgMCAwMS4wOC0uNDVsMS40OC0xLjE2Yy0uMDMtLjIzLS4wNS0uNDYtLjA1LS42OSAwLS4yMy4wMi0uNDYuMDUtLjY4bC0xLjQ4LTEuMTZhLjM1My4zNTMgMCAwMS0uMDgtLjQ1bDEuNC0yLjQyYy4wOS0uMTUuMjctLjIxLjQzLS4xNWwxLjc0LjdjLjM2LS4yOC43Ni0uNTEgMS4xOC0uNjlsLjI2LTEuODVjLjAzLS4xNy4xOC0uMy4zNS0uM2gyLjhjLjE3IDAgLjMyLjEzLjM1LjI5bC4yNiAxLjg1Yy40My4xOC44Mi40MSAxLjE4LjY5bDEuNzQtLjdjLjE2LS4wNi4zNCAwIC40My4xNWwxLjQgMi40MmMuMDkuMTUuMDUuMzQtLjA4LjQ1bC0xLjQ4IDEuMTZjLjAzLjIzLjA1LjQ2LjA1LjY5eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2xpZ2h0X2J1bGInLFxuICB2aWV3Qm94OiAnMCAwIDMyIDM1JyxcbiAgcGF0aDogJ00xMS41ODUgMzEuMDU2bDguMzgtLjQ5M3YtLjk4NmwtOC4zOC40OTN6TTExLjU4NSAzMy4wMjhMMTUuNzc1IDM1bDQuMTktMS45NzJWMzEuNTVsLTguMzguNDkzdi45ODZ6bTYuOTI2LS40MDdsLTIuNzM2IDEuMjktMi4xMy0xLjAwNCA0Ljg2Ni0uMjg2ek0xNS43NzUgNy4zOTRjLTQuNjMgMC04LjM4IDMuMjA1LTguMzggOC4zOCAwIDUuMTc3IDQuMTkgNi45MDIgNC4xOSAxMi44MTh2LjQ5M2w4LjM4LS40OTNjMC01LjkxNiA0LjE5LTguMTg4IDQuMTktMTIuODE3YTguMzggOC4zOCAwIDAwLTguMzgtOC4zOHptNS42MTcgMTMuNDhjLTEuMDI1IDEuODM3LTIuMTc0IDMuODkyLTIuMzgxIDYuNzg2bC02LjQ0LjM4Yy0uMTI5LTMuMDEtMS4yOS01LjAyMS0yLjMyLTYuODA4LS40OTMtLjgtLjkyOC0xLjYzNi0xLjI5OS0yLjVoMTMuNTU2Yy0uMzI1LjcwOC0uNzA0IDEuNDAzLTEuMTE2IDIuMTQyem0xLjQ3OS0zLjEyOEg4LjYyN2E3Ljc5MyA3Ljc5MyAwIDAxLS4yNDctMS45NzFjMC00LjM1MyAzLjA0Mi03LjM5NSA3LjM5NS03LjM5NWE3LjM5NCA3LjM5NCAwIDAxNy4zOTQgNy4zOTUgNi43MzkgNi43MzkgMCAwMS0uMyAxLjk3MWguMDAyek0yNi42MiAxNS4yODJoNC45M3YxaC00Ljkzek0yMy4wOTQgNy43NTZsMi4wOTEtMi4wOTEuNjk4LjY5Ny0yLjA5MiAyLjA5MnpNMTUuMjgyIDBoMXY0LjkzaC0xek01LjY2NiA2LjM2MmwuNjk3LS42OTcgMi4wOTEgMi4wOTEtLjY5Ny42OTd6TTAgMTUuMjgyaDQuOTN2MUgweidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3JlY2VpcHQnLFxuICB2aWV3Qm94OiAnMCAwIDE4IDE4JyxcbiAgcGF0aDogJ004Ljk5MSAwQzQuMDIzIDAgMCA0LjAzMiAwIDlzNC4wMjMgOSA4Ljk5MSA5QzEzLjk2OCAxOCAxOCAxMy45NjggMTggOXMtNC4wMzItOS05LjAwOS05em0zLjgxNiAxNC40TDkgMTIuMTA1IDUuMTkzIDE0LjRsMS4wMDgtNC4zMjktMy4zNTctMi45MDcgNC40MjgtLjM3OEw5IDIuN2wxLjcyOCA0LjA3NyA0LjQyOC4zNzgtMy4zNTcgMi45MDd6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnY2xvc2UnLFxuICBjb21wbGV4Q29udGVudHM6IGBcbiAgICA8cGF0aCBkPVwiTTcgOGw5LjcxNiA5LjcxNm0wLTkuNzE2TDcgMTcuNzE2XCIgXG4gICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiLz5cbiAgYFxufSk7XG4iLCJpbXBvcnQgdGh1bWJJY29uIGZyb20gJy4vdGh1bWIuanMnO1xuaW1wb3J0IHJlY2VpcHRJY29uIGZyb20gJy4vcmVjZWlwdC5qcyc7XG5pbXBvcnQgcGFudGhlb25JY29uIGZyb20gJy4vcGFudGhlb24uanMnO1xuaW1wb3J0IG1pY0ljb24gZnJvbSAnLi9taWMuanMnO1xuaW1wb3J0IGRpcmVjdGlvbnNJY29uIGZyb20gJy4vZGlyZWN0aW9ucy5qcyc7XG5pbXBvcnQgY2FsZW5kYXJJY29uIGZyb20gJy4vY2FsZW5kYXIuanMnO1xuaW1wb3J0IGNhbGxvdXRJY29uIGZyb20gJy4vY2FsbG91dC5qcyc7XG5pbXBvcnQgaW5mb0ljb24gZnJvbSAnLi9pbmZvLmpzJztcbmltcG9ydCBicmllZmNhc2VJY29uIGZyb20gJy4vYnJpZWZjYXNlLmpzJztcbmltcG9ydCBrYWJvYkljb24gZnJvbSAnLi9rYWJvYi5qcyc7XG5pbXBvcnQgcGVyc29uSWNvbiBmcm9tICcuL3BlcnNvbi5qcyc7XG5pbXBvcnQgbWFnbmlmeWluZ0dsYXNzSWNvbiBmcm9tICcuL21hZ25pZnlpbmdfZ2xhc3MuanMnO1xuaW1wb3J0IG9mZmljZUljb24gZnJvbSAnLi9vZmZpY2UuanMnO1xuaW1wb3J0IGxpbmtJY29uIGZyb20gJy4vbGluay5qcyc7XG5pbXBvcnQgd2luZG93SWNvbiBmcm9tICcuL3dpbmRvdy5qcyc7XG5pbXBvcnQgcGhvbmVJY29uIGZyb20gJy4vcGhvbmUuanMnO1xuaW1wb3J0IHRhZ0ljb24gZnJvbSAnLi90YWcuanMnO1xuaW1wb3J0IGRvY3VtZW50SWNvbiBmcm9tICcuL2RvY3VtZW50LmpzJztcbmltcG9ydCBjaGV2cm9uSWNvbiBmcm9tICcuL2NoZXZyb24uanMnO1xuaW1wb3J0IHN1cHBvcnRJY29uIGZyb20gJy4vc3VwcG9ydC5qcyc7XG5pbXBvcnQgeWV4dEljb24gZnJvbSAnLi95ZXh0LmpzJztcbmltcG9ydCBwaW5JY29uIGZyb20gJy4vcGluLmpzJztcbmltcG9ydCBnZWFySWNvbiBmcm9tICcuL2dlYXIuanMnO1xuaW1wb3J0IGxpZ2h0QnVsYkljb24gZnJvbSAnLi9saWdodF9idWxiLmpzJztcbmltcG9ydCBzdGFySWNvbiBmcm9tICcuL3N0YXIuanMnO1xuaW1wb3J0IGNsb3NlIGZyb20gJy4vY2xvc2UuanMnO1xuXG5jb25zdCBpY29uc0FycmF5ID0gW1xuICB0aHVtYkljb24sXG4gIHJlY2VpcHRJY29uLFxuICBwYW50aGVvbkljb24sXG4gIG1pY0ljb24sXG4gIGRpcmVjdGlvbnNJY29uLFxuICBjYWxlbmRhckljb24sXG4gIGNhbGxvdXRJY29uLFxuICBpbmZvSWNvbixcbiAgYnJpZWZjYXNlSWNvbixcbiAga2Fib2JJY29uLFxuICBwZXJzb25JY29uLFxuICBtYWduaWZ5aW5nR2xhc3NJY29uLFxuICBvZmZpY2VJY29uLFxuICBsaW5rSWNvbixcbiAgd2luZG93SWNvbixcbiAgcGhvbmVJY29uLFxuICB0YWdJY29uLFxuICBkb2N1bWVudEljb24sXG4gIGNoZXZyb25JY29uLFxuICBzdXBwb3J0SWNvbixcbiAgeWV4dEljb24sXG4gIHBpbkljb24sXG4gIGdlYXJJY29uLFxuICBsaWdodEJ1bGJJY29uLFxuICBjbG9zZVxuXTtcblxuY29uc3QgSWNvbnMgPSB7fTtcblxuaWNvbnNBcnJheS5mb3JFYWNoKGljb24gPT4ge1xuICBJY29uc1tpY29uLm5hbWVdID0gaWNvbi5tYXJrdXAoKTtcbn0pO1xuXG5JY29ucy5kZWZhdWx0ID0gc3Rhckljb24ubWFya3VwKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEljb25zO1xuIiwiLyoqIEBtb2R1bGUgSWNvbkNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgSWNvbnMgZnJvbSAnLi4vLi4vaWNvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJY29uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEljb25Db21wb25lbnRcbiAgICogQHBhcmFtIG9wdHNcbiAgICogQHBhcmFtIG9wdHMuaWNvbk5hbWUge3N0cmluZ31cbiAgICogQHBhcmFtIG9wdHMuY3VzdG9tSWNvbiB7c3RyaW5nfVxuICAgKiBAcGFyYW0gb3B0cy5pY29uVXJsIHtzdHJpbmd9XG4gICAqL1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9LCBzeXN0ZW1PcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzLCBzeXN0ZW1PcHRzKTtcblxuICAgIC8qKlxuICAgICAqIG5hbWUgb2YgYW4gaWNvbiBmcm9tIHRoZSBkZWZhdWx0IGljb24gc2V0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmljb25OYW1lID0gb3B0cy5pY29uTmFtZSB8fCAnZGVmYXVsdCc7XG5cbiAgICAvKipcbiAgICAgKiB0aGUgbWFya3VwIGZvciBhIGZ1bGx5IGN1c3RvbSBpY29uXG4gICAgICogQHR5cGUgeyp8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmN1c3RvbUljb24gPSBvcHRzLmN1c3RvbUljb24gfHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiB0aGUgdXJsIHRvIGEgY3VzdG9tIGltYWdlIGljb25cbiAgICAgKiBAdHlwZSB7bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmljb25VcmwgPSBvcHRzLmljb25VcmwgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXR0ZXIgZm9yIHRoZSBpbWFnZSBwYXN0ZWQgdG8gaGFuZGxlYmFyc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGltYWdlICgpIHtcbiAgICBpZiAodGhpcy5jdXN0b21JY29uKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXN0b21JY29uO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmljb25VcmwpIHtcbiAgICAgIHJldHVybiBgPGltZyBzcmM9XCIke3RoaXMuaWNvblVybH1cIiBhbHQ9XCJcIiBjbGFzcz1cIkljb24taW1hZ2VcIj5gO1xuICAgIH1cblxuICAgIGlmIChJY29uc1t0aGlzLmljb25OYW1lXSkge1xuICAgICAgcmV0dXJuIEljb25zW3RoaXMuaWNvbk5hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiBJY29ucy5kZWZhdWx0O1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0ljb25Db21wb25lbnQnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdpY29ucy9pY29uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBhbGxvd2luZyBkdXBsaWNhdGVzXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIG92ZXJyaWRlcyBkZWZhdWx0IGZ1bmN0aW9uYWxpdHkgdG8gcHJvdmlkZSBuYW1lIGFuZCBtYXJrdXBcbiAgICogQHBhcmFtIGRhdGFcbiAgICogQHJldHVybnMge0ljb25Db21wb25lbnR9XG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgbmFtZTogdGhpcy5pY29uTmFtZSA/IHRoaXMuaWNvbk5hbWUgOiAnY3VzdG9tJ1xuICAgIH0pKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi9jb21wb25lbnRtYW5hZ2VyJztcblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XG5cbmltcG9ydCBOYXZpZ2F0aW9uQ29tcG9uZW50IGZyb20gJy4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uY29tcG9uZW50JztcblxuaW1wb3J0IFNlYXJjaENvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9zZWFyY2hjb21wb25lbnQnO1xuaW1wb3J0IEZpbHRlclNlYXJjaENvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9maWx0ZXJzZWFyY2hjb21wb25lbnQnO1xuaW1wb3J0IEF1dG9Db21wbGV0ZUNvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9hdXRvY29tcGxldGVjb21wb25lbnQnO1xuaW1wb3J0IFNwZWxsQ2hlY2tDb21wb25lbnQgZnJvbSAnLi9zZWFyY2gvc3BlbGxjaGVja2NvbXBvbmVudCc7XG5cbmltcG9ydCBGaWx0ZXJCb3hDb21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL2ZpbHRlcmJveGNvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyT3B0aW9uc0NvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZmlsdGVyb3B0aW9uc2NvbXBvbmVudCc7XG5pbXBvcnQgUmFuZ2VGaWx0ZXJDb21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL3JhbmdlZmlsdGVyY29tcG9uZW50JztcbmltcG9ydCBEYXRlUmFuZ2VGaWx0ZXJDb21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL2RhdGVyYW5nZWZpbHRlcmNvbXBvbmVudCc7XG5pbXBvcnQgRHluYW1pY0ZpbHRlcnNDb21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL2R5bmFtaWNmaWx0ZXJzY29tcG9uZW50JztcbmltcG9ydCBHZW9Mb2NhdGlvbkNvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZ2VvbG9jYXRpb25jb21wb25lbnQnO1xuXG5pbXBvcnQgRGlyZWN0QW5zd2VyQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9kaXJlY3RhbnN3ZXJjb21wb25lbnQnO1xuaW1wb3J0IFJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Jlc3VsdHNjb21wb25lbnQnO1xuaW1wb3J0IEFjY29yZGlvblJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2FjY29yZGlvbnJlc3VsdHNjb21wb25lbnQuanMnO1xuaW1wb3J0IFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHNjb21wb25lbnQnO1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50JztcblxuaW1wb3J0IFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9wZW9wbGVyZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmltcG9ydCBNYXBDb21wb25lbnQgZnJvbSAnLi9tYXAvbWFwY29tcG9uZW50JztcbmltcG9ydCBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgZnJvbSAnLi9xdWVzdGlvbnMvcXVlc3Rpb25zdWJtaXNzaW9uY29tcG9uZW50JztcblxuaW1wb3J0IEljb25Db21wb25lbnQgZnJvbSAnLi9pY29ucy9pY29uY29tcG9uZW50LmpzJztcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9NQU5BR0VSID0gbmV3IENvbXBvbmVudE1hbmFnZXIoKVxuLy8gQ29yZSBDb21wb25lbnRcbiAgLnJlZ2lzdGVyKENvbXBvbmVudClcblxuLy8gTmF2aWdhdGlvbiBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihOYXZpZ2F0aW9uQ29tcG9uZW50KVxuXG4vLyBTZWFyY2ggQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoU2VhcmNoQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRmlsdGVyU2VhcmNoQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoQXV0b0NvbXBsZXRlQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoU3BlbGxDaGVja0NvbXBvbmVudClcblxuLy8gRmlsdGVyIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKEZpbHRlckJveENvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEZpbHRlck9wdGlvbnNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihSYW5nZUZpbHRlckNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKERhdGVSYW5nZUZpbHRlckNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKER5bmFtaWNGaWx0ZXJzQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoR2VvTG9jYXRpb25Db21wb25lbnQpXG5cbi8vIFJlc3VsdHMgQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoRGlyZWN0QW5zd2VyQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFJlc3VsdHNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihSZXN1bHRzSXRlbUNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEFjY29yZGlvblJlc3VsdHNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50KVxuXG4gIC5yZWdpc3RlcihNYXBDb21wb25lbnQpXG5cbi8vIFF1ZXN0aW9ucyBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQpXG5cbi8vIEhlbHBlciBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihJY29uQ29tcG9uZW50KTtcbiIsIi8qKiBAbW9kdWxlIFRlbXBsYXRlTG9hZGVyICovXG5cbmltcG9ydCBET00gZnJvbSAnLi4vZG9tL2RvbSc7XG5pbXBvcnQgeyBDT01QSUxFRF9URU1QTEFURVNfVVJMIH0gZnJvbSAnLi4vLi4vY29yZS9jb25zdGFudHMnO1xuXG4vKipcbiAqIFRlbXBsYXRlTG9hZGVyIGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBsb2FkaW5nIHRlbXBsYXRlcyBhc3luY2hyb25vdXNseVxuICogZnJvbSB0aGUgc2VydmVyIGFuZCByZWdpc3RlcnMgdGhlbSB3aXRoIHRoZSBwcm9wZXIgcmVuZGVyZXIuXG4gKiBJdCBhbHNvIGFsbG93cyB5b3UgdG8gYXNzaWduIHRoZW0gc3luY2hyb25vdXNseS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVMb2FkZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgaWYgKCFUZW1wbGF0ZUxvYWRlci5zZXRJbnN0YW5jZSh0aGlzKSkge1xuICAgICAgcmV0dXJuIFRlbXBsYXRlTG9hZGVyLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHVybCB0byBmZXRjaCBjb21waWxlZCB0ZW1wbGF0ZXMgZnJvbVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZVVybCA9IGNvbmZpZy50ZW1wbGF0ZVVybCB8fCBDT01QSUxFRF9URU1QTEFURVNfVVJMO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVzID0ge307XG4gICAgdGhpcy5fb25Mb2FkZWQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB0aGlzLl9pbml0KCk7XG4gIH1cblxuICBzdGF0aWMgc2V0SW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIF9pbml0ICgpIHtcbiAgICB0aGlzLmZldGNoVGVtcGxhdGVzKCk7XG4gIH1cblxuICBmZXRjaFRlbXBsYXRlcyAoKSB7XG4gICAgLy8gSWYgd2UgYWxyZWFkeSBoYXZlIHRlbXBsYXRlcyBsb2FkZWQsIGRvIG5vdGhpbmdcbiAgICBsZXQgbm9kZSA9IERPTS5xdWVyeSgnI3lleHQtYW5zd2Vycy10ZW1wbGF0ZXMnKTtcbiAgICBpZiAobm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEluamVjdCBhIHNjcmlwdCB0byBmZXRjaCB0aGUgY29tcGlsZWQgdGVtcGxhdGVzLFxuICAgIC8vIHdyYXBwaW5nIGl0IGEgUHJvbWlzZSBmb3IgY2xlYW5saW5lc3NcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICAgIGlkOiAneWV4dC1hbnN3ZXJzLXRlbXBsYXRlcycsXG4gICAgICAgIG9ubG9hZDogcmVzb2x2ZSxcbiAgICAgICAgb25lcnJvcjogcmVqZWN0LFxuICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgc3JjOiB0aGlzLl90ZW1wbGF0ZVVybFxuICAgICAgfSk7XG5cbiAgICAgIERPTS5hcHBlbmQoJ2JvZHknLCBzY3JpcHQpO1xuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIEltcGxtZW5ldCBlcnJvciBoYW5kbGluZyBoZXJlIChlLmcuIHJlcXVlc3QgY291bGQgZmFpbClcbiAgICAgICAgY29uc29sZS5sb2coJ1RlbXBsYXRlcyBsb2FkZWQgc3VjY2Vzc2Z1bGx5IScpO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXIgdGhlIHRlbXBsYXRlcyBpbnRlcm5hbGx5IHNvIHRoYXQgdGhleSBjYW4gYmUgbGF0ZXIgY29uc3VtZWRcbiAgICogKGUuZy4gYnkgY29tcG9uZW50cyBhbmQgcmVuZGVyZXJzKSB3aXRoIGNvbnZpZW5pZW5jZS5cbiAgICpcbiAgICogYGZldGNoVGVtcGxhdGVzYCB3aWxsIGF1dG9tYXRpY2FsbHkgY2FsbCB0aGlzLCBwcm92aWRpbmcgdGhlIGNvbXBpbGVkIHRlbXBsYXRlcyBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICByZWdpc3RlciAodGVtcGxhdGVzKSB7XG4gICAgdGhpcy5fdGVtcGxhdGVzID0gdGVtcGxhdGVzO1xuXG4gICAgLy8gTm90aWZ5IG91ciBjb25zdW1lcnMgdGhhdCB0aGUgdGVtcGxhdGVzIGFyZSBoZXJlIDopXG4gICAgdGhpcy5fb25Mb2FkZWQodGhpcy5fdGVtcGxhdGVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9uTG9hZGVkIChjYikge1xuICAgIHRoaXMuX29uTG9hZGVkID0gY2I7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgKHRlbXBsYXRlTmFtZSkge1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXNbdGVtcGxhdGVOYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIFRoZSBpbnRlcm5hbCB0ZW1wbGF0ZSBjb2xsZWN0aW9uXG4gICAqL1xuICBnZXRUZW1wbGF0ZXMgKCkge1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbmV4cG9ydCB7IENPTVBPTkVOVF9NQU5BR0VSIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRE9NIH0gZnJvbSAnLi9kb20vZG9tJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi9kb20vc2VhcmNocGFyYW1zJztcblxuZXhwb3J0IHsgUmVuZGVyZXJzIH0gZnJvbSAnLi9yZW5kZXJpbmcvY29uc3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZW1wbGF0ZUxvYWRlciB9IGZyb20gJy4vcmVuZGVyaW5nL3RlbXBsYXRlbG9hZGVyJztcbiIsIi8qKiBAbW9kdWxlIEVycm9yUmVwb3J0ZXIgKi9cblxuaW1wb3J0IHsgQW5zd2Vyc0Jhc2VFcnJvciB9IGZyb20gJy4vZXJyb3JzJztcblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCB7IExJQl9WRVJTSU9OIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBFcnJvclJlcG9ydGVyIGlzIHVzZWQgZm9yIHJlcG9ydGluZyBlcnJvcnMgdG8gdGhlIGNvbnNvbGUgYW5kIHNlcnZlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvclJlcG9ydGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIC8qKlxuICAgICAqIFRoZSBhcGlLZXkgdG8gdXNlIGZvciByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuYXBpS2V5ID0gY29uZmlnLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBleHBlcmllbmNlS2V5IHRvIHVzZSB3aGVuIHJlcG9ydGluZ1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5leHBlcmllbmNlS2V5ID0gY29uZmlnLmV4cGVyaWVuY2VLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYW5zd2VycyBjb25maWcgdmVyc2lvbiB1c2VkIGZvciBhcGkgcmVxdWVzdHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmV4cGVyaWVuY2VWZXJzaW9uID0gY29uZmlnLmV4cGVyaWVuY2VWZXJzaW9uIHx8ICdjb25maWcxLjAnO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgcHJpbnQgZW50aXJlIGVycm9yIG9iamVjdHMgdG8gdGhlIGNvbnNvbGUgZm9yIGluc3BlY3Rpb25cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnByaW50VmVyYm9zZSA9IGNvbmZpZy5wcmludFZlcmJvc2U7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCByZXBvcnQgdGhlIGVycm9yIHRoZSBzZXJ2ZXIgZm9yIGxvZ2dpbmcgYW5kIG1vbml0b3JpbmdcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnNlbmRUb1NlcnZlciA9IGNvbmZpZy5zZW5kVG9TZXJ2ZXI7XG5cbiAgICAvLyBBdHRhY2ggcmVwb3J0aW5nIGxpc3RlbmVycyB0byB3aW5kb3dcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlID0+IHRoaXMucmVwb3J0KGUuZXJyb3IpKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndW5oYW5kbGVkcmVqZWN0aW9uJywgZSA9PiB0aGlzLnJlcG9ydChlLmVycm9yKSk7XG4gIH1cblxuICAvKipcbiAgICogcmVwb3J0IHByZXR0eSBwcmludHMgdGhlIGVycm9yIHRvIHRoZSBjb25zb2xlLCBvcHRpb25hbGx5XG4gICAqIHByaW50cyB0aGUgZW50aXJlIGVycm9yIGlmIGBwcmludFZlcmJvc2VgIGlzIHRydWUsIGFuZCBzZW5kcyB0aGVcbiAgICogZXJyb3IgdG8gdGhlIHNlcnZlciB0byBiZSBsb2dnZWQgaWYgYHNlbmRUb1NlcnZlcmAgaXMgdHJ1ZVxuICAgKiBAcGFyYW0ge0Fuc3dlcnNCYXNlRXJyb3J9IGVyciBUaGUgZXJyb3IgdG8gYmUgcmVwb3J0ZWRcbiAgICogQHJldHVybnMge0Fuc3dlcnNCYXNlRXJyb3J9IFRoZSByZXBvcnRlZCBlcnJvclxuICAgKi9cbiAgcmVwb3J0IChlcnIpIHtcbiAgICBpZiAoIShlcnIgaW5zdGFuY2VvZiBBbnN3ZXJzQmFzZUVycm9yKSB8fCBlcnIucmVwb3J0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnIucmVwb3J0ZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5wcmludEVycm9yKGVycik7XG5cbiAgICBpZiAodGhpcy5zZW5kVG9TZXJ2ZXIpIHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvZXJyb3JzJyxcbiAgICAgICAgYXBpS2V5OiB0aGlzLmFwaUtleSxcbiAgICAgICAgdmVyc2lvbjogMjAxOTAzMDEsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICdlcnJvcic6IGVyci50b0pzb24oKSxcbiAgICAgICAgICAnbGliVmVyc2lvbic6IExJQl9WRVJTSU9OLFxuICAgICAgICAgICdleHBlcmllbmNlVmVyc2lvbic6IHRoaXMuZXhwZXJpZW5jZVZlcnNpb24sXG4gICAgICAgICAgJ2V4cGVyaWVuY2VLZXknOiB0aGlzLmV4cGVyaWVuY2VLZXlcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlcXVlc3QuZ2V0KClcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyO1xuICB9XG5cbiAgLyoqXG4gICAqIHByaW50cyB0aGUgZ2l2ZW4gZXJyb3IgdG8gdGhlIGJyb3dzZXIgY29uc29sZVxuICAgKiBAcGFyYW0ge0Fuc3dlcnNCYXNlRXJyb3J9IGVyciBUaGUgZXJyb3IgdG8gYmUgcHJpbnRlZFxuICAgKi9cbiAgcHJpbnRFcnJvciAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIudG9TdHJpbmcoKSk7XG4gICAgaWYgKHRoaXMucHJpbnRWZXJib3NlKSB7XG4gICAgICBjb25zb2xlLmxvZyh7IC4uLmVyciB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5pbXBvcnQgeyBBbnN3ZXJzU3RvcmFnZUVycm9yIH0gZnJvbSAnLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcblxuLyoqIEBtb2R1bGUgUGVyc2lzdGVudFN0b3JhZ2UgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVyc2lzdGVudFN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBwYXJhbXMgbW9kZWxcbiAgICAgKiBAdHlwZSB7U2VhcmNoUGFyYW1zfVxuICAgICAqL1xuICAgIHRoaXMuX3BhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgaGlzdG9yeSBlZGl0IHRpbWVyLCBpZiBhbnlcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX2hpc3RvcnlUaW1lciA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBsaXN0ZW5lcnMgdG8gZXZlcnkgc3RvcmFnZSB1cGRhdGVcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb25bXX1cbiAgICAgKi9cbiAgICB0aGlzLl91cGRhdGVMaXN0ZW5lciA9IGNvbmZpZy51cGRhdGVMaXN0ZW5lciB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGxpc3RlbmVycyB0byBzdG9yYWdlIHJlc2V0c1xuICAgICAqIEB0eXBlIHtmdW5jdGlvbltdfVxuICAgICAqL1xuICAgIHRoaXMuX3Jlc2V0TGlzdGVuZXIgPSBjb25maWcucmVzZXRMaXN0ZW5lciB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIHdpbmRvdy5vbnBvcHN0YXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fcGFyYW1zID0gbmV3IFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG4gICAgICB0aGlzLl9jYWxsTGlzdGVuZXIodGhpcy5fdXBkYXRlTGlzdGVuZXIpO1xuICAgICAgdGhpcy5fY2FsbExpc3RlbmVyKHRoaXMuX3Jlc2V0TGlzdGVuZXIpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0IHRoZSBnaXZlbiBrZXkvdmFsdWUgcGFpciBpbnRvIHN0b3JhZ2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IHRvIGluc2VydCB0aGUgZGF0YSBpblxuICAgKiBAcGFyYW0geyp9IGRhdGEgVGhlIGRhdGEgdG8gaW5zZXJ0XG4gICAqL1xuICBzZXQgKGtleSwgZGF0YSkge1xuICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNTdG9yYWdlRXJyb3IoJ1N0b3JhZ2UgZGF0YSBrZXkgbXVzdCBiZSBhIHN0cmluZycsIGtleSwgZGF0YSk7XG4gICAgfVxuXG4gICAgbGV0IG5ld0RhdGEgPSBkYXRhO1xuICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG5ld0RhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgdGhpcy5fcGFyYW1zLnNldChrZXksIG5ld0RhdGEpO1xuICAgIHRoaXMuX3VwZGF0ZUhpc3RvcnkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgdGhlIGdpdmVuIGtleSBmcm9tIHN0b3JhZ2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IHRvIGRlbGV0ZVxuICAgKi9cbiAgZGVsZXRlIChrZXkpIHtcbiAgICB0aGlzLl9wYXJhbXMuZGVsZXRlKGtleSk7XG4gICAgdGhpcy5fdXBkYXRlSGlzdG9yeSgpO1xuICB9XG5cbiAgX3VwZGF0ZUhpc3RvcnkgKCkge1xuICAgIGlmICh0aGlzLl9oaXN0b3J5VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9oaXN0b3J5VGltZXIpO1xuICAgIH1cblxuICAgIC8vIGJhdGNoIHVwZGF0ZSBjYWxscyBhY3Jvc3MgY29tcG9uZW50cyB0byBhdm9pZCB1cGRhdGluZyB0aGUgdXJsIHRvbyBtdWNoXG4gICAgdGhpcy5faGlzdG9yeVRpbWVyID0gc2V0VGltZW91dChcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5faGlzdG9yeVRpbWVyID0gbnVsbDtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGA/JHt0aGlzLl9wYXJhbXMudG9TdHJpbmcoKX1gKTtcbiAgICAgICAgdGhpcy5fY2FsbExpc3RlbmVyKHRoaXMuX3VwZGF0ZUxpc3RlbmVyKTtcbiAgICAgIH0sXG4gICAgICAxMDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZSB0aGUgZ2l2ZW4gbGlzdCBvZiBjYWxsYmFja3Mgd2l0aCB0aGUgY3VycmVudCBzdG9yYWdlIGRhdGFcbiAgICogQHBhcmFtIHtmdW5jdGlvbltdfSBsaXN0ZW5lcnMgVGhlIGNhbGxiYWNrcyB0byBpbnZva2VcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jYWxsTGlzdGVuZXIgKGxpc3RlbmVyKSB7XG4gICAgbGlzdGVuZXIodGhpcy5nZXRBbGwoKSwgdGhpcy5fcGFyYW1zLnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgdGhlIGtleS92YWx1ZSBwYWlycyBpbiBzdG9yYWdlXG4gICAqL1xuICBnZXRBbGwgKCkge1xuICAgIGNvbnN0IGFsbFBhcmFtcyA9IHt9O1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiB0aGlzLl9wYXJhbXMuZW50cmllcygpKSB7XG4gICAgICBhbGxQYXJhbXNba2V5XSA9IHZhbDtcbiAgICB9XG4gICAgcmV0dXJuIGFsbFBhcmFtcztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuaW1wb3J0IENvcmUgZnJvbSAnLi9jb3JlL2NvcmUnO1xuXG5pbXBvcnQge1xuICBUZW1wbGF0ZUxvYWRlcixcbiAgQ09NUE9ORU5UX01BTkFHRVIsXG4gIFJlbmRlcmVycyxcbiAgRE9NXG59IGZyb20gJy4vdWkvaW5kZXgnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL3VpL2NvbXBvbmVudHMvY29tcG9uZW50JztcblxuaW1wb3J0IEVycm9yUmVwb3J0ZXIgZnJvbSAnLi9jb3JlL2Vycm9ycy9lcnJvcnJlcG9ydGVyJztcbmltcG9ydCB7IEFuYWx5dGljc1JlcG9ydGVyIH0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCBQZXJzaXN0ZW50U3RvcmFnZSBmcm9tICcuL3VpL3N0b3JhZ2UvcGVyc2lzdGVudHN0b3JhZ2UnO1xuaW1wb3J0IEdsb2JhbFN0b3JhZ2UgZnJvbSAnLi9jb3JlL3N0b3JhZ2UvZ2xvYmFsc3RvcmFnZSc7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgQW5hbHl0aWNzRXZlbnQgZnJvbSAnLi9jb3JlL2FuYWx5dGljcy9hbmFseXRpY3NldmVudCc7XG5cbi8qKlxuICogVGhlIG1haW4gQW5zd2VycyBpbnRlcmZhY2VcbiAqL1xuY2xhc3MgQW5zd2VycyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBpZiAoIUFuc3dlcnMuc2V0SW5zdGFuY2UodGhpcykpIHtcbiAgICAgIHJldHVybiBBbnN3ZXJzLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIENvbXBvbmVudCBiYXNlIGNsYXNzIGZvciBjdXN0b21cbiAgICAgKiBjb21wb25lbnRzIHRvIGV4dGVuZFxuICAgICAqL1xuICAgIHRoaXMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIEFuYWx5dGljc0V2ZW50IGJhc2UgY2xhc3MgZm9yIHJlcG9ydGluZ1xuICAgICAqIGN1c3RvbSBhbmFseXRpY3NcbiAgICAgKi9cbiAgICB0aGlzLkFuYWx5dGljc0V2ZW50ID0gQW5hbHl0aWNzRXZlbnQ7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSBvZiB0aGUgcmVuZGVyZXIgdG8gdXNlIGZvciB0aGUgY29tcG9uZW50c1xuICAgICAqIFRoaXMgaXMgcHJvdmlkZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uLlxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVycy5IYW5kbGViYXJzKCk7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IG1hbmFnZXJcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50TWFuYWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbXBvbmVudHMgPSBDT01QT05FTlRfTUFOQUdFUjtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb3JlIGFwaVxuICAgICAqIEB0eXBlIHtDb3JlfVxuICAgICAqL1xuICAgIHRoaXMuY29yZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGludm9rZSBvbmNlIHRoZSBsaWJyYXJ5IGlzIHJlYWR5LlxuICAgICAqIFR5cGljYWxseSBmaXJlZCBhZnRlciB0ZW1wbGF0ZXMgYXJlIGZldGNoZWQgZnJvbSBzZXJ2ZXIgZm9yIHJlbmRlcmluZy5cbiAgICAgKi9cbiAgICB0aGlzLl9vblJlYWR5ID0gZnVuY3Rpb24gKCkge307XG4gIH1cblxuICBzdGF0aWMgc2V0SW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIGluaXQgKGNvbmZpZykge1xuICAgIGNvbnN0IGdsb2JhbFN0b3JhZ2UgPSBuZXcgR2xvYmFsU3RvcmFnZSgpO1xuICAgIGNvbnN0IHBlcnNpc3RlbnRTdG9yYWdlID0gbmV3IFBlcnNpc3RlbnRTdG9yYWdlKHtcbiAgICAgIHVwZGF0ZUxpc3RlbmVyOiBjb25maWcub25TdGF0ZUNoYW5nZSxcbiAgICAgIHJlc2V0TGlzdGVuZXI6IGRhdGEgPT4gZ2xvYmFsU3RvcmFnZS5zZXRBbGwoZGF0YSlcbiAgICB9KTtcbiAgICBnbG9iYWxTdG9yYWdlLnNldEFsbChwZXJzaXN0ZW50U3RvcmFnZS5nZXRBbGwoKSk7XG5cbiAgICB0aGlzLmNvcmUgPSBuZXcgQ29yZSh7XG4gICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgICBnbG9iYWxTdG9yYWdlOiBnbG9iYWxTdG9yYWdlLFxuICAgICAgcGVyc2lzdGVudFN0b3JhZ2U6IHBlcnNpc3RlbnRTdG9yYWdlLFxuICAgICAgZXhwZXJpZW5jZUtleTogY29uZmlnLmV4cGVyaWVuY2VLZXksXG4gICAgICBmaWVsZEZvcm1hdHRlcnM6IGNvbmZpZy5maWVsZEZvcm1hdHRlcnMsXG4gICAgICBleHBlcmllbmNlVmVyc2lvbjogY29uZmlnLmV4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgbG9jYWxlOiBjb25maWcubG9jYWxlXG4gICAgfSk7XG5cbiAgICBpZiAoY29uZmlnLm9uU3RhdGVDaGFuZ2UgJiYgdHlwZW9mIGNvbmZpZy5vblN0YXRlQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25maWcub25TdGF0ZUNoYW5nZShwZXJzaXN0ZW50U3RvcmFnZS5nZXRBbGwoKSwgd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSkpO1xuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1xuICAgICAgLnNldENvcmUodGhpcy5jb3JlKVxuICAgICAgLnNldFJlbmRlcmVyKHRoaXMucmVuZGVyZXIpO1xuXG4gICAgaWYgKGNvbmZpZy5idXNpbmVzc0lkKSB7XG4gICAgICBjb25zdCByZXBvcnRlciA9IG5ldyBBbmFseXRpY3NSZXBvcnRlcihcbiAgICAgICAgdGhpcy5jb3JlLFxuICAgICAgICBjb25maWcuZXhwZXJpZW5jZUtleSxcbiAgICAgICAgY29uZmlnLmV4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgICBjb25maWcuYnVzaW5lc3NJZCxcbiAgICAgICAgY29uZmlnLmFuYWx5dGljc09wdGlvbnMpO1xuXG4gICAgICB0aGlzLkFuYWx5dGljc1JlcG9ydGVyID0gcmVwb3J0ZXI7XG5cbiAgICAgIHRoaXMuY29tcG9uZW50cy5zZXRBbmFseXRpY3NSZXBvcnRlcihyZXBvcnRlcik7XG4gICAgICBpbml0U2Nyb2xsTGlzdGVuZXIocmVwb3J0ZXIpO1xuICAgIH1cblxuICAgIHRoaXMuX29uUmVhZHkgPSBjb25maWcub25SZWFkeSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIGlmIChjb25maWcudXNlVGVtcGxhdGVzID09PSBmYWxzZSB8fCBjb25maWcudGVtcGxhdGVCdW5kbGUpIHtcbiAgICAgIGlmIChjb25maWcudGVtcGxhdGVCdW5kbGUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbml0KGNvbmZpZy50ZW1wbGF0ZUJ1bmRsZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX29uUmVhZHkoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIFRlbXBsYXRlcyBhcmUgY3VycmVudGx5IGRvd25sb2FkZWQgc2VwYXJhdGVseSBmcm9tIHRoZSBDT1JFIGFuZCBVSSBidW5kbGUuXG4gICAgLy8gRnV0dXJlIGVuaGFuY2VtZW50IGlzIHRvIHNoaXAgdGhlIGNvbXBvbmVudHMgd2l0aCB0ZW1wbGF0ZXMgaW4gYSBzZXBhcmF0ZSBidW5kbGUuXG4gICAgdGhpcy50ZW1wbGF0ZXMgPSBuZXcgVGVtcGxhdGVMb2FkZXIoe1xuICAgICAgdGVtcGxhdGVVcmw6IGNvbmZpZy50ZW1wbGF0ZVVybFxuICAgIH0pLm9uTG9hZGVkKCh0ZW1wbGF0ZXMpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuaW5pdCh0ZW1wbGF0ZXMpO1xuXG4gICAgICB0aGlzLl9vblJlYWR5KCk7XG4gICAgfSk7XG5cbiAgICAvLyBSZXBvcnQgZXJyb3JzIHRvIGNvbnNvbGUgJiBzZXJ2ZXJcbiAgICB0aGlzLl9lcnJvclJlcG9ydGVyID0gbmV3IEVycm9yUmVwb3J0ZXIoe1xuICAgICAgYXBpS2V5OiBjb25maWcuYXBpS2V5LFxuICAgICAgZXhwZXJpZW5jZUtleTogY29uZmlnLmV4cGVyaWVuY2VLZXksXG4gICAgICBleHBlcmllbmNlVmVyc2lvbjogY29uZmlnLmV4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgcHJpbnRWZXJib3NlOiBjb25maWcuZGVidWcsXG4gICAgICBzZW5kVG9TZXJ2ZXI6ICFjb25maWcuc3VwcHJlc3NFcnJvclJlcG9ydHNcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZG9tUmVhZHkgKGNiKSB7XG4gICAgRE9NLm9uUmVhZHkoY2IpO1xuICB9XG5cbiAgb25SZWFkeSAoY2IpIHtcbiAgICB0aGlzLl9vblJlYWR5ID0gY2I7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBjdXN0b20gY29tcG9uZW50IHR5cGUgc28gaXQgY2FuIGJlIGNyZWF0ZWQgdmlhXG4gICAqIGFkZENvbXBvbmVudCBhbmQgdXNlZCBhcyBhIGNoaWxkIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50Q2xhc3NcbiAgICovXG4gIHJlZ2lzdGVyQ29tcG9uZW50VHlwZSAoY29tcG9uZW50Q2xhc3MpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMucmVnaXN0ZXIoY29tcG9uZW50Q2xhc3MpO1xuICB9XG5cbiAgYWRkQ29tcG9uZW50ICh0eXBlLCBvcHRzKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuICAgICAgb3B0cyA9IHtcbiAgICAgICAgY29udGFpbmVyOiBvcHRzXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuY3JlYXRlKHR5cGUsIG9wdHMpLm1vdW50KCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcignRmFpbGVkIHRvIGFkZCBjb21wb25lbnQnLCB0eXBlLCBlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjb21wb25lbnQgLSBhbmQgYWxsIG9mIGl0cyBjaGlsZHJlbiAtIHdpdGggdGhlIGdpdmVuIG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvbXBvbmVudCB0byByZW1vdmVcbiAgICovXG4gIHJlbW92ZUNvbXBvbmVudCAobmFtZSkge1xuICAgIHRoaXMuY29tcG9uZW50cy5yZW1vdmVCeU5hbWUobmFtZSk7XG4gIH1cblxuICBjcmVhdGVDb21wb25lbnQgKG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzLmNyZWF0ZSgnQ29tcG9uZW50Jywgb3B0cykubW91bnQoKTtcbiAgfVxuXG4gIHJlZ2lzdGVySGVscGVyIChuYW1lLCBjYikge1xuICAgIHRoaXMucmVuZGVyZXIucmVnaXN0ZXJIZWxwZXIobmFtZSwgY2IpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyIHRvIHNlbmQgYW5hbHl0aWNzIGV2ZW50c1xuICogd2hlbiB0aGUgdXNlciBzY3JvbGxzIHRvIHRoZSBib3R0b20uIERlYm91bmNlcyBzY3JvbGwgZXZlbnRzIHNvXG4gKiB0aGV5IGFyZSBwcm9jZXNzZWQgYWZ0ZXIgdGhlIHVzZXIgc3RvcHMgc2Nyb2xsaW5nXG4gKi9cbmZ1bmN0aW9uIGluaXRTY3JvbGxMaXN0ZW5lciAocmVwb3J0ZXIpIHtcbiAgY29uc3QgREVCT1VOQ0VfVElNRSA9IDEwMDtcbiAgbGV0IHRpbWVvdXQgPSBudWxsO1xuXG4gIGNvbnN0IHNlbmRFdmVudCA9ICgpID0+IHtcbiAgICBpZiAoKHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5wYWdlWU9mZnNldCkgPj0gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpIHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEFuYWx5dGljc0V2ZW50KCdTQ1JPTExfVE9fQk9UVE9NX09GX1BBR0UnKTtcbiAgICAgIHJlcG9ydGVyLnJlcG9ydChldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoc2VuZEV2ZW50LCBERUJPVU5DRV9USU1FKTtcbiAgfSk7XG59XG5cbmNvbnN0IEFOU1dFUlMgPSBuZXcgQW5zd2VycygpO1xuZXhwb3J0IGRlZmF1bHQgQU5TV0VSUztcbiJdLCJuYW1lcyI6WyJNZXRob2RzIiwiR0VUIiwiUE9TVCIsIlBVVCIsIkRFTEVURSIsIkh0dHBSZXF1ZXN0ZXIiLCJ1cmwiLCJkYXRhIiwib3B0cyIsInJlcXVlc3QiLCJlbmNvZGVQYXJhbXMiLCJ1cmxQYXJhbXMiLCJqc29uQm9keSIsInJlcXVlc3RDb25maWciLCJPYmplY3QiLCJhc3NpZ24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNyZWRlbnRpYWxzIiwidW5kZWZpbmVkIiwibWV0aG9kIiwiZmV0Y2giLCJuYXZpZ2F0b3IiLCJzZW5kQmVhY29uIiwicGFyYW1zIiwiaGFzUGFyYW0iLCJpbmRleE9mIiwic2VhcmNoUXVlcnkiLCJrZXkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJMSUJfVkVSU0lPTiIsIkFQSV9CQVNFX1VSTCIsIkNPTVBJTEVEX1RFTVBMQVRFU19VUkwiLCJBTkFMWVRJQ1NfQkFTRV9VUkwiLCJTZWFyY2hQYXJhbXMiLCJfcGFyYW1zIiwid2luZG93IiwiVVJMU2VhcmNoUGFyYW1zIiwicGFyc2UiLCJzZWFyY2giLCJzbGljZSIsImVuY29kZWRQYXJhbXMiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJrZXlWYWwiLCJkZWNvZGUiLCJxdWVyeSIsIlN0cmluZyIsIm5hbWUiLCJ2YWx1ZSIsInN0cmluZyIsInB1c2giLCJlbmNvZGUiLCJqb2luIiwiZW50cmllcyIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJtYXRjaCIsIkFwaVJlcXVlc3QiLCJfcmVxdWVzdGVyIiwiX2Jhc2VVcmwiLCJiYXNlVXJsIiwiX2VuZHBvaW50IiwiZW5kcG9pbnQiLCJfYXBpS2V5IiwiYXBpS2V5IiwiX3ZlcnNpb24iLCJ2ZXJzaW9uIiwiZ2V0IiwiYmFzZVBhcmFtcyIsInNhbml0aXplUGFyYW1zIiwicG9zdCIsImxvY2F0aW9uIiwic3Vic3RyaW5nIiwiaGFzIiwia2V5cyIsImZvckVhY2giLCJBbnN3ZXJzQmFzZUVycm9yIiwiZXJyb3JDb2RlIiwibWVzc2FnZSIsImJvdW5kYXJ5IiwiY2F1c2VkQnkiLCJlcnJvck1lc3NhZ2UiLCJyZXBvcnRlZCIsImZyb20iLCJ0b1N0cmluZyIsImJ1aWx0aW5FcnJvciIsImVycm9yIiwiQW5zd2Vyc0Jhc2ljRXJyb3IiLCJzdGFjayIsIkVycm9yIiwiQW5zd2Vyc0NvbXBvbmVudEVycm9yIiwiY29tcG9uZW50IiwiQW5zd2Vyc0VuZHBvaW50RXJyb3IiLCJBbnN3ZXJzQ29yZUVycm9yIiwiQW5zd2Vyc1N0b3JhZ2VFcnJvciIsInN0b3JhZ2VLZXkiLCJBbnN3ZXJzQW5hbHl0aWNzRXJyb3IiLCJldmVudCIsIlNlYXJjaEFwaSIsImNvbmZpZyIsImV4cGVyaWVuY2VLZXkiLCJfZXhwZXJpZW5jZUtleSIsIl9leHBlcmllbmNlVmVyc2lvbiIsImV4cGVyaWVuY2VWZXJzaW9uIiwibG9jYWxlIiwiX2xvY2FsZSIsInZlcnRpY2FsS2V5IiwiaW5wdXQiLCJmaWx0ZXIiLCJmYWNldEZpbHRlciIsImxpbWl0Iiwib2Zmc2V0IiwiaWQiLCJnZW9sb2NhdGlvbiIsImlzRHluYW1pY0ZpbHRlcnNFbmFibGVkIiwic2tpcFNwZWxsQ2hlY2siLCJxdWVyeVRyaWdnZXIiLCJsYXQiLCJsbmciLCJyYWRpdXMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicXVlcnlTdHJpbmciLCJIaWdobGlnaHRlZFZhbHVlIiwic2hvcnRWYWx1ZSIsIm1hdGNoZWRTdWJzdHJpbmdzIiwiX3NvcnRNYXRjaGVkU3Vic3RyaW5ncyIsIl9idWlsZEhpZ2hsaWdodGVkVmFsdWUiLCJpbnZlcnRlZFN1YnN0cmluZ3MiLCJfZ2V0SW52ZXJ0ZWRTdWJzdHJpbmdzIiwic29ydCIsImEiLCJiIiwidmFsdWVMZW5ndGgiLCJuZXh0T2Zmc2V0IiwidmFsIiwiaGlnaGxpZ2h0ZWRTdWJzdHJpbmdzIiwiaGlnaGxpZ2h0ZWRWYWx1ZSIsIm5leHRTdGFydCIsImoiLCJzdGFydCIsIk51bWJlciIsImVuZCIsIkF1dG9Db21wbGV0ZURhdGEiLCJzZWN0aW9ucyIsInF1ZXJ5SWQiLCJmcmVlemUiLCJtYXAiLCJzIiwibGFiZWwiLCJyZXN1bHRzIiwiciIsIkF1dG9Db21wbGV0ZVJlc3VsdCIsImdldEludmVydGVkIiwiQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyIiwibW9kdWxlSWQiLCJBdXRvQ29tcGxldGVBcGkiLCJiYXJLZXkiLCJzZWFyY2hQYXJhbWV0ZXJzIiwidmVydGljYWwiLCJ1bml2ZXJzYWwiLCJRdWVzdGlvbkFuc3dlckFwaSIsInF1ZXN0aW9uIiwiZW50aXR5SWQiLCJzaXRlIiwiZW1haWwiLCJxdWVzdGlvblRleHQiLCJxdWVzdGlvbkRlc2NyaXB0aW9uIiwicXVlc3Rpb25MYW5ndWFnZSIsIlBSRV9TRUFSQ0giLCJTRUFSQ0hfTE9BRElORyIsIlNFQVJDSF9DT01QTEVURSIsIlJlc3VsdCIsIl9yYXciLCJyYXciLCJfZm9ybWF0dGVkIiwiZm9ybWF0dGVkIiwib3JkaW5hbCIsInRpdGxlIiwiZGV0YWlscyIsImxpbmsiLCJzdWJ0aXRsZSIsIm1vZGlmaWVyIiwiYmlnRGF0ZSIsImltYWdlIiwiY2FsbHNUb0FjdGlvbiIsImNvbGxhcHNlZCIsIlJlc3VsdEZhY3RvcnkiLCJyZXN1bHRzRGF0YSIsImZvcm1hdHRlcnMiLCJ2ZXJ0aWNhbElkIiwic291cmNlIiwiZm9ybWF0dGVkRGF0YSIsImZyb21Hb29nbGVDdXN0b21TZWFyY2hFbmdpbmUiLCJmcm9tQmluZ0N1c3RvbVNlYXJjaEVuZ2luZSIsImZyb21aZW5kZXNrU2VhcmNoRW5naW5lIiwiZnJvbUFsZ29saWFTZWFyY2hFbmdpbmUiLCJmcm9tR2VuZXJpYyIsImluZGV4IiwiZGVzY3JpcHRpb24iLCJ0cnVuY2F0ZSIsIndlYnNpdGUiLCJodG1sVGl0bGUiLCJodG1sU25pcHBldCIsInNuaXBwZXQiLCJodG1sX3VybCIsIm9iamVjdElEIiwic3RyIiwidHJhaWxpbmciLCJzZXAiLCJ3b3JkcyIsIm1heCIsInRydW5jYXRlZCIsIndvcmQiLCJTZWN0aW9uIiwic2VhcmNoU3RhdGUiLCJTZWFyY2hTdGF0ZXMiLCJ2ZXJ0aWNhbENvbmZpZ0lkIiwicmVzdWx0c0NvdW50IiwiZW5jb2RlZFN0YXRlIiwiYXBwbGllZFF1ZXJ5RmlsdGVycyIsIkFwcGxpZWRRdWVyeUZpbHRlciIsImZhY2V0cyIsInBhcnNlTWFwIiwidmVydGljYWxVUkwiLCJtYXBNYXJrZXJzIiwiY2VudGVyQ29vcmRpbmF0ZXMiLCJyZXN1bHQiLCJ5ZXh0RGlzcGxheUNvb3JkaW5hdGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIml0ZW0iLCJtb2R1bGVzIiwidXJscyIsIkFycmF5IiwiaXNBcnJheSIsImFwcGxpZWRRdWVyeUZpbHRlciIsImRpc3BsYXlLZXkiLCJkaXNwbGF5VmFsdWUiLCJmaWx0ZXJzIiwiVW5pdmVyc2FsUmVzdWx0cyIsIkRpcmVjdEFuc3dlciIsImRpcmVjdEFuc3dlciIsImFuc3dlciIsInJlbGF0ZWRJdGVtIiwiZmllbGRBcGlOYW1lIiwiZmllbGRWYWx1ZXMiLCJOYXZpZ2F0aW9uIiwidGFiT3JkZXIiLCJuYXYiLCJWZXJ0aWNhbFJlc3VsdHMiLCJtZXJnZWQiLCJjb25jYXQiLCJTcGVsbENoZWNrIiwiY29ycmVjdGVkUXVlcnkiLCJjb3JyZWN0ZWRRdWVyeURpc3BsYXkiLCJ0eXBlIiwic2hvdWxkU2hvdyIsIm9yaWdpbmFsUXVlcnkiLCJOQVZJR0FUSU9OIiwiVU5JVkVSU0FMX1JFU1VMVFMiLCJWRVJUSUNBTF9SRVNVTFRTIiwiQVVUT0NPTVBMRVRFIiwiRElSRUNUX0FOU1dFUiIsIkZJTFRFUiIsIlFVRVJZIiwiUVVFUllfSUQiLCJGQUNFVF9GSUxURVIiLCJEWU5BTUlDX0ZJTFRFUlMiLCJTRUFSQ0hfTElNSVQiLCJQQVJBTVMiLCJHRU9MT0NBVElPTiIsIklOVEVOVFMiLCJRVUVTVElPTl9TVUJNSVNTSU9OIiwiU1BFTExfQ0hFQ0siLCJEeW5hbWljRmlsdGVycyIsImR5bmFtaWNGaWx0ZXJzIiwiZiIsImZpZWxkSWQiLCJvcHRpb25zIiwibyIsImNvdW50TGFiZWwiLCJzZWxlY3RlZCIsIlNlYXJjaEludGVudHMiLCJpbnRlbnRzIiwibmVhck1lIiwiaW5jbHVkZXMiLCJTZWFyY2hEYXRhVHJhbnNmb3JtZXIiLCJTdG9yYWdlS2V5cyIsInNlYXJjaEludGVudHMiLCJzcGVsbENoZWNrIiwiUXVlc3Rpb25TdWJtaXNzaW9uIiwiZXJyb3JzIiwicHJpdmFjeVBvbGljeSIsInF1ZXN0aW9uU3VibWl0dGVkIiwiQ29yZSIsIl9maWVsZEZvcm1hdHRlcnMiLCJmaWVsZEZvcm1hdHRlcnMiLCJnbG9iYWxTdG9yYWdlIiwicGVyc2lzdGVudFN0b3JhZ2UiLCJfc2VhcmNoZXIiLCJfYXV0b0NvbXBsZXRlIiwiX3F1ZXN0aW9uQW5zd2VyIiwiYXBwZW5kIiwic2V0Iiwic2VhcmNoTG9hZGluZyIsInZlcnRpY2FsU2VhcmNoIiwiZ2V0U3RhdGUiLCJfaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQiLCJ0cmFuc2Zvcm1WZXJ0aWNhbCIsIm1lcmdlZFJlc3VsdHMiLCJ1bml2ZXJzYWxTZWFyY2giLCJ0cmFuc2Zvcm0iLCJuYW1lc3BhY2UiLCJxdWVyeVVuaXZlcnNhbCIsInF1ZXJ5VmVydGljYWwiLCJxdWVyeUZpbHRlciIsInN1Ym1pdFF1ZXN0aW9uIiwic3VibWl0dGVkIiwiZXZ0IiwiY2IiLCJvbiIsIkNvbXBvbmVudE1hbmFnZXIiLCJzZXRJbnN0YW5jZSIsImdldEluc3RhbmNlIiwiX2NvbXBvbmVudFJlZ2lzdHJ5IiwiX2FjdGl2ZUNvbXBvbmVudHMiLCJfY29yZSIsIl9yZW5kZXJlciIsIl9hbmFseXRpY3NSZXBvcnRlciIsInJlbmRlcmVyIiwiY29yZSIsInJlcG9ydGVyIiwiY29tcG9uZW50Q2xhenoiLCJjb21wb25lbnRUeXBlIiwic3lzdGVtT3B0cyIsImFuYWx5dGljc1JlcG9ydGVyIiwiY29tcG9uZW50TWFuYWdlciIsImNvbXBvbmVudENsYXNzIiwiYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkIiwic29tZSIsImMiLCJpc1R3aW4iLCJjb25zdHJ1Y3RvciIsImluaXQiLCJzZXRTdGF0ZSIsIm9mZiIsImZpbmRJbmRleCIsInNwbGljZSIsImZpbmQiLCJyZW1vdmUiLCJET00iLCJlbXB0eSIsIl9jb250YWluZXIiLCJpbnN0YW5jZSIsIlJlbmRlcmVyIiwidGVtcGxhdGUiLCJIYW5kbGViYXJzUmVuZGVyZXIiLCJ0ZW1wbGF0ZXMiLCJfaGFuZGxlYmFycyIsIl9oYiIsIl90ZW1wbGF0ZXMiLCJfcmVnaXN0ZXJDdXN0b21IZWxwZXJzIiwicmVnaXN0ZXJIZWxwZXIiLCJjb21waWxlIiwidGVtcGxhdGVOYW1lIiwiZSIsImFyZzEiLCJhcmcyIiwiZm4iLCJpbnZlcnNlIiwicGhvbmVOdW1iZXJTdHJpbmciLCJjbGVhbmVkIiwiaW50bENvZGUiLCJhcmdzIiwiYXJndW1lbnRzIiwicm9vdCIsInYiLCJSZW5kZXJlcnMiLCJTT1kiLCJIYW5kbGViYXJzIiwiZG9jdW1lbnQiLCJkIiwicCIsImh0bWwiLCJjb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiZnJhZyIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwiYXBwZW5kQ2hpbGQiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJwYXJlbnQiLCJzZWxlY3RvciIsIkhUTUxFbGVtZW50IiwiV2luZG93IiwiSFRNTERvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZWFkeVN0YXRlIiwiZWwiLCJvcHRzX2RhdGEiLCJub2RlIiwicHJvcHMiLCJhZGRDbGFzcyIsImluc2VydEFkamFjZW50SFRNTCIsImNsYXNzTmFtZSIsImNsYXNzZXMiLCJsZW4iLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJzdHlsZXMiLCJwcm9wIiwic3R5bGUiLCJhdHRyIiwic2V0QXR0cmlidXRlIiwiYXR0cnMiLCJzZXR0aW5ncyIsIkV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwib25jZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjdHh0IiwidGFyZ2V0IiwiaXNFcXVhbE5vZGUiLCJtYXRjaGVzIiwicGFyZW50Tm9kZSIsIkV2ZW50RW1pdHRlciIsIl9saXN0ZW5lcnMiLCJsaXN0ZW5lcnMiLCJrZWVwIiwiU3RhdGUiLCJfc3RhdGUiLCJvcHRWYWwiLCJfc2V0IiwiZW1pdCIsIm9wdFByb3AiLCJBbmFseXRpY3NFdmVudCIsImV2ZW50VHlwZSIsInRvVXBwZXJDYXNlIiwiQW5hbHl0aWNzUmVwb3J0ZXIiLCJidXNpbmVzc0lkIiwiZ2xvYmFsT3B0aW9ucyIsIl9idXNpbmVzc0lkIiwiX2dsb2JhbE9wdGlvbnMiLCJzZXRRdWVyeUlkIiwiYWRkT3B0aW9ucyIsImJlYWNvbiIsInRvQXBpRXZlbnQiLCJNb2R1bGVEYXRhIiwiX2lkIiwiX2hpc3RvcnkiLCJfZGF0YSIsImNhcHR1cmVQcmV2aW91cyIsInNoaWZ0IiwicHJldmlvdXMiLCJfcHJldmlvdXMiLCJwb3AiLCJHbG9iYWxTdG9yYWdlIiwiX21vZHVsZURhdGFDb250YWluZXIiLCJfZnV0dXJlTGlzdGVuZXJzIiwiX2luaXREYXRhQ29udGFpbmVyIiwiX2FwcGx5RnV0dXJlTGlzdGVuZXJzIiwiZGF0YUtleSIsInN0YXJ0c1dpdGgiLCJtb2R1bGVEYXRhIiwiZnV0dXJlcyIsImZ1dHVyZSIsIkNvbXBvbmVudCIsInN5c3RlbUNvbmZpZyIsIl9jb25maWciLCJfdHlwZSIsIl9wYXJlbnRDb250YWluZXIiLCJwYXJlbnRDb250YWluZXIiLCJfY2hpbGRyZW4iLCJzdGF0ZSIsIl9hbmFseXRpY3NPcHRpb25zIiwiYW5hbHl0aWNzT3B0aW9ucyIsImNyZWF0ZUVsIiwiX2NsYXNzTmFtZSIsIl9yZW5kZXIiLCJyZW5kZXIiLCJfdGVtcGxhdGUiLCJfdGVtcGxhdGVOYW1lIiwiZGVmYXVsdFRlbXBsYXRlTmFtZSIsIl9pc01vdW50ZWQiLCJ0cmFuc2Zvcm1EYXRhIiwib25DcmVhdGUiLCJvbkNyZWF0ZU92ZXJyaWRlIiwiYmluZCIsIm9uTW91bnQiLCJvbk1vdW50T3ZlcnJpZGUiLCJvblVwZGF0ZSIsIm9uVXBkYXRlT3ZlcnJpZGUiLCJ1c2VyT25DcmVhdGUiLCJ1c2VyT25Nb3VudCIsInVzZXJPblVwZGF0ZSIsInVuTW91bnQiLCJtb3VudCIsIm5ld1N0YXRlIiwiY2hpbGRDb21wb25lbnQiLCJjcmVhdGUiLCJfcGFyZW50T3B0cyIsImNoaWxkIiwib25Vbk1vdW50IiwiYmVmb3JlTW91bnQiLCJhc0pTT04iLCJkb21Db21wb25lbnRzIiwicXVlcnlBbGwiLCJfY3JlYXRlU3ViY29tcG9uZW50IiwiZG9tSG9va3MiLCJfY3JlYXRlQW5hbHl0aWNzSG9vayIsImJlZm9yZVJlbmRlciIsImFmdGVyUmVuZGVyIiwiZG9tQ29tcG9uZW50IiwiZGF0YXNldCIsImlzQ29tcG9uZW50TW91bnRlZCIsImNoaWxkRGF0YSIsImFkZENoaWxkIiwicmV2ZXJzZSIsImlzQW5hbHl0aWNzQXR0YWNoZWQiLCJldmVudHR5cGUiLCJldmVudGxhYmVsIiwiZXZlbnRvcHRpb25zIiwicmVwb3J0IiwiUkVTSVpFX0RFQk9VTkNFIiwiVGFiIiwiY29uZmlnSWQiLCJpc0ZpcnN0IiwiaXNBY3RpdmUiLCJ0YWJzQ29uZmlnIiwidGFicyIsInRhYiIsIk5hdmlnYXRpb25Db21wb25lbnQiLCJkcm9wZG93bkxhYmVsIiwiZHJvcGRvd25JY29uIiwiX3RhYnMiLCJfdGFiT3JkZXIiLCJnZXREZWZhdWx0VGFiT3JkZXIiLCJnZXRVcmxQYXJhbXMiLCJfbmF2QnJlYWtwb2ludHMiLCJfZGVib3VuY2VUaW1lciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJyZWZpdE5hdiIsImNoZWNrT3V0c2lkZUNsaWNrIiwidG9nZ2xlTW9yZURyb3Bkb3duIiwibW9yZUJ1dHRvbiIsIm1haW5MaW5rcyIsImNvbGxhcHNlZExpbmtzIiwibmF2V2lkdGgiLCJjb250YWlucyIsIm9mZnNldFdpZHRoIiwibnVtQnJlYWtwb2ludHMiLCJtYWluTGlua3NXaWR0aCIsImNoaWxkcmVuIiwibGFzdExpbmsiLCJwcmVwZW5kIiwiZmlyc3RMaW5rIiwiY2xvc2VNb3JlRHJvcGRvd24iLCJ0b2dnbGUiLCJjbG9zZXN0IiwibWVyZ2VUYWJPcmRlciIsImdlbmVyYXRlVGFiVXJsIiwidW5zaGlmdCIsIm90aGVyVGFiT3JkZXIiLCJ0YWJDb25maWciLCJGaWx0ZXIiLCJyZXNwb25zZUZpbHRlciIsImdyb3VwcyIsImdyb3VwRmlsdGVycyIsImZpZWxkIiwib3IiLCJhbmQiLCJfZnJvbU1hdGNoZXIiLCJtaW4iLCJtYXRjaGVyIiwiU2VhcmNoQ29tcG9uZW50IiwiX2JhcktleSIsIl92ZXJ0aWNhbEtleSIsIl9mb3JtRWwiLCJmb3JtU2VsZWN0b3IiLCJfaW5wdXRFbCIsImlucHV0RWwiLCJsYWJlbFRleHQiLCJzdWJtaXRUZXh0Iiwic3VibWl0SWNvbiIsInByb21wdEhlYWRlciIsImF1dG9Gb2N1cyIsImNsZWFyQnV0dG9uIiwiYXV0b2NvbXBsZXRlT25Mb2FkIiwicmVkaXJlY3RVcmwiLCJfaXNUd2luIiwicSIsIl9zZWFyY2hDb29sZG93biIsInNlYXJjaENvb2xkb3duIiwiX3Byb21wdEZvckxvY2F0aW9uIiwicHJvbXB0Rm9yTG9jYXRpb24iLCJCb29sZWFuIiwiX3Nob3dDbGVhckJ1dHRvbiIsInNldFF1ZXJ5IiwiaW5pdExvY2F0aW9uUHJvbXB0IiwiZm9jdXMiLCJpbml0U2VhcmNoIiwiaW5pdEF1dG9Db21wbGV0ZSIsImluaXRDbGVhckJ1dHRvbiIsIl9hdXRvY29tcGxldGUiLCJidXR0b24iLCJpbnRlbnQiLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsImNvb3JkcyIsImFjY3VyYWN5IiwiZm9ybSIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsImJsdXIiLCJpbnB1dFNlbGVjdG9yIiwib25TdWJtaXQiLCJ0cmlnZ2VyIiwiX3Rocm90dGxlZCIsImFsbEZpbHRlcnMiLCJnZXRBbGwiLCJ0b3RhbEZpbHRlciIsImdldEFjdGl2ZUNvbXBvbmVudCIsInNob3dDbGVhckJ1dHRvbiIsIkZpbHRlclNlYXJjaENvbXBvbmVudCIsImlucHV0S2V5IiwiX3N0b3JlT25DaGFuZ2UiLCJzdG9yZU9uQ2hhbmdlIiwic2VhcmNoVGV4dCIsIl9idWlsZFNlYXJjaFBhcmFtZXRlcnMiLCJpc0ZpbHRlclNlYXJjaCIsIm9yaWdpbmFsRmlsdGVyIiwiZnJvbVJlc3BvbnNlIiwic2V0RmlsdGVyIiwic2VhcmNoUGFyYW1ldGVyQ29uZmlncyIsInNlY3Rpb25lZCIsImZpZWxkcyIsIl9idWlsZEZpZWxkcyIsImZpZWxkQ29uZmlncyIsImZjIiwiZmV0Y2hFbnRpdGllcyIsIktleXMiLCJCQUNLU1BBQ0UiLCJUQUIiLCJFTlRFUiIsIlNISUZUIiwiQ1RSTCIsIkFMVCIsIkVTQ0FQRSIsIkxFRlQiLCJSSUdIVCIsIlVQIiwiRE9XTiIsIkxFRlRfT1NfS0VZIiwiUklHSFRfT1NfS0VZIiwiU0VMRUNUX0tFWSIsIkF1dG9Db21wbGV0ZUNvbXBvbmVudCIsIl9hdXRvY29tcGxldGVFbHMiLCJhdXRvQ29tcGxldGVFbHMiLCJfb3JpZ2luYWxRdWVyeSIsIl9zZWN0aW9uSW5kZXgiLCJfcmVzdWx0SW5kZXgiLCJfYXV0b0ZvY3VzIiwiX29uU3VibWl0IiwiX3NlYXJjaFBhcmFtZXRlcnMiLCJoYXNSZXN1bHRzIiwic2VjdGlvbkluZGV4IiwicmVzdWx0SW5kZXgiLCJxdWVyeUlucHV0IiwiYXR0cmlidXRlcyIsImF1dG9jb21wbGV0ZSIsImF1dG9jb3JyZWN0Iiwic3BlbGxjaGVjayIsImNsb3NlIiwicmVzZXQiLCJhdXRvQ29tcGxldGUiLCJoYW5kbGVOYXZpZ2F0ZVJlc3VsdHMiLCJrZXlDb2RlIiwiaGFuZGxlU3VibWl0UmVzdWx0IiwiZGVsZWdhdGUiLCJ1cGRhdGVRdWVyeSIsImhhbmRsZVR5cGluZyIsInVwZGF0ZVN0YXRlIiwib3B0VmFsdWUiLCJxdWVyeUVsIiwiaWdub3JlZEtleXMiLCJhdXRvQ29tcGxldGVGaWx0ZXIiLCJhdXRvQ29tcGxldGVWZXJ0aWNhbCIsImF1dG9Db21wbGV0ZVVuaXZlcnNhbCIsIlNwZWxsQ2hlY2tDb21wb25lbnQiLCJjb3JyZWN0ZWRRdWVyeVVybCIsIl9idWlsZFJlZGlyZWN0UXVlcnlVcmwiLCJoZWxwVGV4dCIsIl9nZXRIZWxwVGV4dCIsInRvTG93ZXJDYXNlIiwiRmFjZXQiLCJmbGF0RmlsdGVycyIsImZsYXRNYXAiLCIkb3IiLCJGaWx0ZXJCb3hDb21wb25lbnQiLCJfZmlsdGVyQ29uZmlncyIsIl9zZWFyY2hPbkNoYW5nZSIsInNlYXJjaE9uQ2hhbmdlIiwiX2FwcGx5QnV0dG9uU2VsZWN0b3IiLCJhcHBseUJ1dHRvblNlbGVjdG9yIiwiX2ZpbHRlckNvbXBvbmVudHMiLCJfZmlsdGVycyIsIl9pc0R5bmFtaWMiLCJpc0R5bmFtaWMiLCJmaWx0ZXJDb25maWdzIiwic2hvd0FwcGx5QnV0dG9uIiwib25DaGFuZ2UiLCJvbkZpbHRlckNoYW5nZSIsImdldEZpbHRlciIsIl9zYXZlRmlsdGVyc1RvU3RvcmFnZSIsIl9zZWFyY2giLCJ2YWxpZEZpbHRlcnMiLCJjb21iaW5lZEZpbHRlciIsImZyb21GaWx0ZXJzIiwic2V0RmFjZXRGaWx0ZXIiLCJTVVBQT1JURURfQ09OVFJPTFMiLCJGaWx0ZXJPcHRpb25zQ29tcG9uZW50IiwiY29udHJvbCIsInByZXZpb3VzT3B0aW9ucyIsInNlbGVjdGVkT3B0aW9ucyIsIl9vcHRpb25zIiwiX2NvbnRyb2wiLCJfb3B0aW9uU2VsZWN0b3IiLCJvcHRpb25TZWxlY3RvciIsIl9vbkNoYW5nZSIsIl9sYWJlbCIsIl91cGRhdGVPcHRpb24iLCJwYXJzZUludCIsImNoZWNrZWQiLCJfYnVpbGRGaWx0ZXIiLCJlbGVtZW50cyIsIl9hcHBseUZpbHRlciIsImVxdWFsIiwiZ3JvdXAiLCJSYW5nZUZpbHRlckNvbXBvbmVudCIsIl9maWVsZCIsIm1pblZhbCIsIm1heFZhbCIsIl9yYW5nZSIsImluaXRpYWxNaW4iLCJpbml0aWFsTWF4IiwiX3RpdGxlIiwiX21pbkxhYmVsIiwibWluTGFiZWwiLCJfbWF4TGFiZWwiLCJtYXhMYWJlbCIsIm1pblZhbHVlIiwibWF4VmFsdWUiLCJfdXBkYXRlUmFuZ2UiLCJpbmNsdXNpdmVSYW5nZSIsIkRhdGVSYW5nZUZpbHRlckNvbXBvbmVudCIsIl9pc0V4Y2x1c2l2ZSIsImlzRXhjbHVzaXZlIiwidG9kYXkiLCJEYXRlIiwidG9kYXlTdHJpbmciLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwicGFkU3RhcnQiLCJnZXREYXRlIiwibWluRGF0ZSIsIm1heERhdGUiLCJfZGF0ZSIsImRhdGVNaW4iLCJkYXRlTWF4IiwiZGF0ZSIsImV4Y2x1c2l2ZVJhbmdlIiwiRHluYW1pY0ZpbHRlcnNDb21wb25lbnQiLCJfZmllbGRDb250cm9scyIsImZpZWxkQ29udHJvbHMiLCJfZmlsdGVyYm94IiwiZW5hYmxlRHluYW1pY0ZpbHRlcnMiLCJNRVRFUlNfUEVSX01JTEUiLCJERUZBVUxUX0NPTkZJRyIsImdlb0J1dHRvbkljb24iLCJnZW9CdXR0b25UZXh0IiwiZW5hYmxlZFRleHQiLCJsb2FkaW5nVGV4dCIsImVycm9yVGV4dCIsImJ1dHRvblNlbGVjdG9yIiwiR2VvTG9jYXRpb25Db21wb25lbnQiLCJwbGFjZWhvbGRlciIsIl9lbmFibGVkIiwiZ2VvTG9hZGluZyIsImdlb0Vycm9yIiwiZ2VvRW5hYmxlZCIsImdlb1ZhbHVlIiwiZ2VvUGxhY2Vob2xkZXIiLCJfaW5pdEF1dG9Db21wbGV0ZSIsIl90b2dnbGVHZW9GaWx0ZXIiLCJfc2F2ZURhdGFUb1N0b3JhZ2UiLCJNYXRoIiwiRXZlbnRUeXBlcyIsIlRIVU1CU19VUCIsIlRIVU1CU19ET1dOIiwiRGlyZWN0QW5zd2VyQ29tcG9uZW50IiwiZm9ybUVsIiwiX3RodW1ic1VwU2VsZWN0b3IiLCJ0aHVtYnNVcFNlbGVjdG9yIiwiX3RodW1ic0Rvd25TZWxlY3RvciIsInRodW1ic0Rvd25TZWxlY3RvciIsIl92aWV3RGV0YWlsc1RleHQiLCJ2aWV3RGV0YWlsc1RleHQiLCJoYXNTdGF0ZSIsImNoZWNrZWRWYWx1ZSIsInJlcG9ydFF1YWxpdHkiLCJldmVudE9wdGlvbnMiLCJzZWFyY2hlciIsImN0YUxhYmVsIiwiaXNHb29kIiwiUmVzdWx0c0l0ZW1Db21wb25lbnQiLCJfdmVydGljYWxDb25maWdJZCIsIl9pc1VuaXZlcnNhbCIsImlzVW5pdmVyc2FsIiwiTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCIsIkV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQiLCJQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCIsIk1hcFByb3ZpZGVyIiwiX3pvb20iLCJ6b29tIiwiX2RlZmF1bHRQb3NpdGlvbiIsImRlZmF1bHRQb3NpdGlvbiIsIl9zaG93RW1wdHlNYXAiLCJzaG93RW1wdHlNYXAiLCJfbWFwIiwiX2lzTG9hZGVkIiwiX29uUGluQ2xpY2siLCJvblBpbkNsaWNrIiwiX29uTG9hZGVkIiwib25Mb2FkZWQiLCJfcGluQ29uZmlnIiwicGluIiwiREVGQVVMVF9QSU5fQ09ORklHIiwiX2NvbGxhcHNlUGlucyIsImNvbGxhcHNlUGlucyIsImlzTG9hZGVkIiwibWFwRGF0YSIsIm1hcmtlcnMiLCJsb2NhdGlvblRvSXRlbSIsIm0iLCJjb2xsYXBzZWRNYXJrZXJzIiwiY29sbGFwc2VkTWFya2VyIiwiaWNvbiIsImFuY2hvciIsInN2ZyIsInNjYWxlZFNpemUiLCJsYWJlbFR5cGUiLCJHb29nbGVNYXBQcm92aWRlciIsIl9jbGllbnRJZCIsImNsaWVudElkIiwiX3NpZ25hdHVyZSIsInNpZ25hdHVyZSIsImhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMiLCJvbkxvYWQiLCJzY3JpcHQiLCJvbmxvYWQiLCJhc3luYyIsInNyYyIsImdlbmVyYXRlQ3JlZGVudGlhbHMiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiYm91bmRzIiwiTGF0TG5nQm91bmRzIiwiX2NvbGxhcHNlTWFya2VycyIsImdvb2dsZU1hcE1hcmtlckNvbmZpZ3MiLCJHb29nbGVNYXBNYXJrZXJDb25maWciLCJtYXJrZXIiLCJNYXJrZXIiLCJhZGRMaXN0ZW5lciIsImV4dGVuZCIsImZpdEJvdW5kcyIsInNldENlbnRlciIsIkxhdExuZyIsInNlcmlhbGl6ZWRNYXJrZXJzIiwicGluQ29uZmlnIiwicGluQ29uZmlnT2JqIiwiUG9pbnQiLCJ4IiwieSIsIlNpemUiLCJ3IiwiaCIsIk1hcEJveE1hcFByb3ZpZGVyIiwibWFwYm94Z2wiLCJhY2Nlc3NUb2tlbiIsImNzcyIsInJlbCIsImNlbnRlciIsImdldENlbnRlck1hcmtlciIsIm1hcGJveE1hcE1hcmtlckNvbmZpZ3MiLCJNYXBCb3hNYXJrZXJDb25maWciLCJ3cmFwcGVyIiwiTG5nTGF0Iiwic2V0TG5nTGF0IiwiYWRkVG8iLCJnZXRFbGVtZW50IiwibWFwQ2VudGVyIiwic3RhdGljTWFwUGluIiwiUHJvdmlkZXJUeXBlcyIsIk1hcENvbXBvbmVudCIsIl9tYXBQcm92aWRlciIsIm1hcFByb3ZpZGVyIiwiZ2V0UHJvdmlkZXJJbnN0YW5jZSIsImxvYWRKUyIsIlJlc3VsdFR5cGUiLCJFVkVOVCIsIkxPQ0FUSU9OIiwiUEVPUExFIiwiUmVzdWx0c0NvbXBvbmVudCIsIl9pdGVtQ29uZmlnIiwiZ2xvYmFsIiwicmVuZGVySXRlbSIsIml0ZW1UZW1wbGF0ZSIsInNldFNlYXJjaExpbWl0IiwiY29uZmlndXJlSXRlbSIsIl91bml2ZXJzYWxVcmwiLCJ1bml2ZXJzYWxVcmwiLCJpc1ByZVNlYXJjaCIsImlzU2VhcmNoTG9hZGluZyIsImlzU2VhcmNoQ29tcGxldGUiLCJpbmNsdWRlTWFwIiwibWFwQ29uZmlnIiwic2hvd05vUmVzdWx0cyIsInNldEl0ZW1SZW5kZXIiLCJzZXRJdGVtVGVtcGxhdGUiLCJjbGF6eiIsImdldEl0ZW1Db21wb25lbnQiLCJjb21wIiwibmV3T3B0cyIsImdsb2JhbENvbmZpZyIsIml0ZW1Db25maWciLCJoYXNHbG9iYWxSZW5kZXIiLCJoYXNHbG9iYWxUZW1wbGF0ZSIsInNldFJlbmRlciIsInNldFRlbXBsYXRlIiwiQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudCIsIl9zZWxlY3RvckJhc2UiLCJzZWxlY3RvckJhc2UiLCJjb2xsYXBzZWRDbGFzcyIsImFjY29yZGlvbkVscyIsImFjY29yZGlvbkVsIiwidG9nZ2xlRWwiLCJ0b2dnbGVTZWxlY3RvciIsImNvbnRlbnRFbCIsImJvZHlTZWxlY3RvciIsImNoYW5nZUhlaWdodCIsImhhbmRsZUNsaWNrIiwid3JhcHBlckVsIiwiaXNDb2xsYXBzZWQiLCJ0YXJnZXRFbCIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsImJ1aWxkU2VsZWN0b3IiLCJVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50IiwiX2xpbWl0IiwiY2hpbGRPcHRzIiwiZ2V0Q2hpbGRDb25maWciLCJ1c2VBY2NvcmRpb24iLCJkZWZhdWx0Q29uZmlnIiwiUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IiwidmFsaWRhdGVDb25maWciLCJiaW5kQW5hbHl0aWNzIiwiYmluZEZvcm1TdWJtaXQiLCJxdWVzdGlvblRleHRFbCIsImZvcm1EYXRhIiwidmFsaWRhdGVSZXF1aXJlZCIsImxhbmd1YWdlIiwiaW5wdXRGaWVsZHMiLCJvYmoiLCJTVkdJY29uIiwicGF0aCIsImNvbXBsZXhDb250ZW50cyIsInZpZXdCb3giLCJjb250ZW50cyIsInBhdGhEZWZpbml0aW9uIiwiaWNvbnNBcnJheSIsInRodW1iSWNvbiIsInJlY2VpcHRJY29uIiwicGFudGhlb25JY29uIiwibWljSWNvbiIsImRpcmVjdGlvbnNJY29uIiwiY2FsZW5kYXJJY29uIiwiY2FsbG91dEljb24iLCJpbmZvSWNvbiIsImJyaWVmY2FzZUljb24iLCJrYWJvYkljb24iLCJwZXJzb25JY29uIiwibWFnbmlmeWluZ0dsYXNzSWNvbiIsIm9mZmljZUljb24iLCJsaW5rSWNvbiIsIndpbmRvd0ljb24iLCJwaG9uZUljb24iLCJ0YWdJY29uIiwiZG9jdW1lbnRJY29uIiwiY2hldnJvbkljb24iLCJzdXBwb3J0SWNvbiIsInlleHRJY29uIiwicGluSWNvbiIsImdlYXJJY29uIiwibGlnaHRCdWxiSWNvbiIsIkljb25zIiwibWFya3VwIiwic3Rhckljb24iLCJJY29uQ29tcG9uZW50IiwiaWNvbk5hbWUiLCJjdXN0b21JY29uIiwiaWNvblVybCIsIkNPTVBPTkVOVF9NQU5BR0VSIiwicmVnaXN0ZXIiLCJUZW1wbGF0ZUxvYWRlciIsIl90ZW1wbGF0ZVVybCIsInRlbXBsYXRlVXJsIiwiX2luaXQiLCJmZXRjaFRlbXBsYXRlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25lcnJvciIsImNvbnNvbGUiLCJsb2ciLCJFcnJvclJlcG9ydGVyIiwicHJpbnRWZXJib3NlIiwic2VuZFRvU2VydmVyIiwiZXJyIiwicHJpbnRFcnJvciIsInRvSnNvbiIsIlBlcnNpc3RlbnRTdG9yYWdlIiwiX2hpc3RvcnlUaW1lciIsIl91cGRhdGVMaXN0ZW5lciIsInVwZGF0ZUxpc3RlbmVyIiwiX3Jlc2V0TGlzdGVuZXIiLCJyZXNldExpc3RlbmVyIiwib25wb3BzdGF0ZSIsIl9jYWxsTGlzdGVuZXIiLCJuZXdEYXRhIiwiX3VwZGF0ZUhpc3RvcnkiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwibGlzdGVuZXIiLCJhbGxQYXJhbXMiLCJBbnN3ZXJzIiwiY29tcG9uZW50cyIsIl9vblJlYWR5Iiwib25TdGF0ZUNoYW5nZSIsInNldEFsbCIsInN1YnN0ciIsInNldENvcmUiLCJzZXRSZW5kZXJlciIsInNldEFuYWx5dGljc1JlcG9ydGVyIiwiaW5pdFNjcm9sbExpc3RlbmVyIiwib25SZWFkeSIsInVzZVRlbXBsYXRlcyIsInRlbXBsYXRlQnVuZGxlIiwiX2Vycm9yUmVwb3J0ZXIiLCJkZWJ1ZyIsInN1cHByZXNzRXJyb3JSZXBvcnRzIiwicmVtb3ZlQnlOYW1lIiwiREVCT1VOQ0VfVElNRSIsInRpbWVvdXQiLCJzZW5kRXZlbnQiLCJpbm5lckhlaWdodCIsInBhZ2VZT2Zmc2V0IiwiQU5TV0VSUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7O0VBRUE7O0VBRUE7OztFQUdBLElBQU1BLE9BQU8sR0FBRztFQUNkQyxFQUFBQSxHQUFHLEVBQUUsS0FEUztFQUVkQyxFQUFBQSxJQUFJLEVBQUUsTUFGUTtFQUdkQyxFQUFBQSxHQUFHLEVBQUUsS0FIUztFQUlkQyxFQUFBQSxNQUFNLEVBQUU7RUFKTSxDQUFoQjtFQU9BOzs7Ozs7TUFLcUJDOzs7Ozs7Ozs7O0VBQ25COzs7Ozs7MEJBTUtDLEtBQUtDLE1BQU1DLE1BQU07RUFDcEIsYUFBTyxLQUFLQyxPQUFMLENBQWFULE9BQU8sQ0FBQ0MsR0FBckIsRUFBMEIsS0FBS1MsWUFBTCxDQUFrQkosR0FBbEIsRUFBdUJDLElBQXZCLENBQTFCLEVBQXdEQyxJ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