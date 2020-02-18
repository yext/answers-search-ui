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
       * @param {Object} data The data to provide (gets encoded into the URL)
       * @param {Object} opts Configuration options to use for the request
       */

    }, {
      key: "post",
      value: function post(url, data, opts) {
        return this.request(Methods.POST, url, Object.assign({
          body: JSON.stringify(data),
          credentials: undefined
        }, opts));
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
  var LIB_VERSION = 'v0.9.0';
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
        return this._requester.get(this._baseUrl + this._endpoint, this.params(this._params));
      }
    }, {
      key: "post",
      value: function post(opts) {
        return this._requester.post(this._baseUrl + this._endpoint, this.params(this._params), opts);
      }
    }, {
      key: "params",
      value: function params(_params) {
        var baseParams = {
          'v': this._version,
          'api_key': this._apiKey,
          'jsLibVersion': LIB_VERSION
        };
        var urlParams = new SearchParams(window.location.search.substring(1));

        if (urlParams.has('beta')) {
          baseParams['beta'] = urlParams.get('beta');
        } // Remove any paramaters whos value is `undefined`.
        //
        // NOTE(billy) Probably better to be explicit about how to handle this at the request building level,
        // but I can't see any cases where we'd ever want to send 'undefined' as a value to the server.
        // So it's probably fine to 'clean' the params object here


        Object.keys(_params).forEach(function (key) {
          if (_params[key] === undefined || _params[key] === null) {
            delete _params[key];
          }
        });
        return Object.assign(baseParams, _params || {});
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

  /* global HTMLElement, HTMLDocument, Window, CustomEvent */
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
        var e = new CustomEvent(event, Object.assign({
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
     * helper to construct the eventOptions for analytics
     * @returns {string}
     */


    _createClass(Tab, [{
      key: "eventOptions",
      get: function get() {
        return JSON.stringify({
          verticalConfigId: this.configId
        });
      }
      /**
       * from will construct a map of configId to {Tab} from
       * a configuration file
       * @param {object} tabsConfig the configuration to use
       */

    }], [{
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
        return Object.assign({}, {
          selected: selectedOptions.includes(o.label)
        }, o);
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
          var checkedValue = DOM.query(formEl, 'input:checked').checked;

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
            'site': 'FIRST_PARTY',
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
        var entries = Array.from(this._params.entries());

        for (var i = 0; i < entries.length; i++) {
          var key = entries[i][0];
          var val = entries[i][1];
          allParams[key] = val;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2Vycy11bWQuanMiLCJzb3VyY2VzIjpbInNyYy9jb3JlL2h0dHAvaHR0cHJlcXVlc3Rlci5qcyIsInNyYy9jb3JlL2NvbnN0YW50cy5qcyIsInNyYy91aS9kb20vc2VhcmNocGFyYW1zLmpzIiwic3JjL2NvcmUvaHR0cC9hcGlyZXF1ZXN0LmpzIiwic3JjL2NvcmUvZXJyb3JzL2Vycm9ycy5qcyIsInNyYy9jb3JlL3NlYXJjaC9zZWFyY2hhcGkuanMiLCJzcmMvY29yZS9tb2RlbHMvaGlnaGxpZ2h0ZWR2YWx1ZS5qcyIsInNyYy9jb3JlL21vZGVscy9hdXRvY29tcGxldGVkYXRhLmpzIiwic3JjL2NvcmUvc2VhcmNoL2F1dG9jb21wbGV0ZWRhdGF0cmFuc2Zvcm1lci5qcyIsInNyYy9jb3JlL3NlYXJjaC9hdXRvY29tcGxldGVhcGkuanMiLCJzcmMvY29yZS9zZWFyY2gvcXVlc3Rpb25hbnN3ZXJhcGkuanMiLCJzcmMvY29yZS9zdG9yYWdlL3NlYXJjaHN0YXRlcy5qcyIsInNyYy9jb3JlL21vZGVscy9yZXN1bHQuanMiLCJzcmMvY29yZS9tb2RlbHMvcmVzdWx0ZmFjdG9yeS5qcyIsInNyYy9jb3JlL21vZGVscy9zZWN0aW9uLmpzIiwic3JjL2NvcmUvbW9kZWxzL3VuaXZlcnNhbHJlc3VsdHMuanMiLCJzcmMvY29yZS9tb2RlbHMvZGlyZWN0YW5zd2VyLmpzIiwic3JjL2NvcmUvbW9kZWxzL25hdmlnYXRpb24uanMiLCJzcmMvY29yZS9tb2RlbHMvdmVydGljYWxyZXN1bHRzLmpzIiwic3JjL2NvcmUvbW9kZWxzL3NwZWxsY2hlY2suanMiLCJzcmMvY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzLmpzIiwic3JjL2NvcmUvbW9kZWxzL2R5bmFtaWNmaWx0ZXJzLmpzIiwic3JjL2NvcmUvbW9kZWxzL3NlYXJjaGludGVudHMuanMiLCJzcmMvY29yZS9zZWFyY2gvc2VhcmNoZGF0YXRyYW5zZm9ybWVyLmpzIiwic3JjL2NvcmUvbW9kZWxzL3F1ZXN0aW9uc3VibWlzc2lvbi5qcyIsInNyYy9jb3JlL2NvcmUuanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnRtYW5hZ2VyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9yZW5kZXJlci5qcyIsInNyYy91aS9yZW5kZXJpbmcvaGFuZGxlYmFyc3JlbmRlcmVyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9jb25zdC5qcyIsInNyYy91aS9kb20vZG9tLmpzIiwic3JjL2NvcmUvZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL3N0YXRlLmpzIiwic3JjL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50LmpzIiwic3JjL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc3JlcG9ydGVyLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9tb2R1bGVkYXRhLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9nbG9iYWxzdG9yYWdlLmpzIiwic3JjL2NvcmUvaW5kZXguanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb25jb21wb25lbnQuanMiLCJzcmMvY29yZS9tb2RlbHMvZmlsdGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3NlYXJjaC9maWx0ZXJzZWFyY2hjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9zZWFyY2gvYXV0b2NvbXBsZXRlY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL3NwZWxsY2hlY2tjb21wb25lbnQuanMiLCJzcmMvY29yZS9tb2RlbHMvZmFjZXQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcmJveGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyb3B0aW9uc2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcnMvcmFuZ2VmaWx0ZXJjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2RhdGVyYW5nZWZpbHRlcmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcnMvZHluYW1pY2ZpbHRlcnNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2dlb2xvY2F0aW9uY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9kaXJlY3RhbnN3ZXJjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9wZW9wbGVyZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9wcm92aWRlcnMvbWFwcHJvdmlkZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvcHJvdmlkZXJzL2dvb2dsZW1hcHByb3ZpZGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL3Byb3ZpZGVycy9tYXBib3htYXBwcm92aWRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9tYXBjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL2FjY29yZGlvbnJlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9xdWVzdGlvbnMvcXVlc3Rpb25zdWJtaXNzaW9uY29tcG9uZW50LmpzIiwic3JjL3VpL2ljb25zL2ljb24uanMiLCJzcmMvdWkvaWNvbnMvdGh1bWIuanMiLCJzcmMvdWkvaWNvbnMvcmVjZWlwdC5qcyIsInNyYy91aS9pY29ucy9wYW50aGVvbi5qcyIsInNyYy91aS9pY29ucy9taWMuanMiLCJzcmMvdWkvaWNvbnMvZGlyZWN0aW9ucy5qcyIsInNyYy91aS9pY29ucy9jYWxlbmRhci5qcyIsInNyYy91aS9pY29ucy9jYWxsb3V0LmpzIiwic3JjL3VpL2ljb25zL2luZm8uanMiLCJzcmMvdWkvaWNvbnMvYnJpZWZjYXNlLmpzIiwic3JjL3VpL2ljb25zL2thYm9iLmpzIiwic3JjL3VpL2ljb25zL3BlcnNvbi5qcyIsInNyYy91aS9pY29ucy9tYWduaWZ5aW5nX2dsYXNzLmpzIiwic3JjL3VpL2ljb25zL29mZmljZS5qcyIsInNyYy91aS9pY29ucy9saW5rLmpzIiwic3JjL3VpL2ljb25zL3dpbmRvdy5qcyIsInNyYy91aS9pY29ucy9waG9uZS5qcyIsInNyYy91aS9pY29ucy90YWcuanMiLCJzcmMvdWkvaWNvbnMvZG9jdW1lbnQuanMiLCJzcmMvdWkvaWNvbnMvY2hldnJvbi5qcyIsInNyYy91aS9pY29ucy9zdXBwb3J0LmpzIiwic3JjL3VpL2ljb25zL3lleHQuanMiLCJzcmMvdWkvaWNvbnMvcGluLmpzIiwic3JjL3VpL2ljb25zL2dlYXIuanMiLCJzcmMvdWkvaWNvbnMvbGlnaHRfYnVsYi5qcyIsInNyYy91aS9pY29ucy9zdGFyLmpzIiwic3JjL3VpL2ljb25zL2Nsb3NlLmpzIiwic3JjL3VpL2ljb25zL2luZGV4LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvaWNvbnMvaWNvbmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2NvbnN0LmpzIiwic3JjL3VpL3JlbmRlcmluZy90ZW1wbGF0ZWxvYWRlci5qcyIsInNyYy91aS9pbmRleC5qcyIsInNyYy9jb3JlL2Vycm9ycy9lcnJvcnJlcG9ydGVyLmpzIiwic3JjL3VpL3N0b3JhZ2UvcGVyc2lzdGVudHN0b3JhZ2UuanMiLCJzcmMvYW5zd2Vycy11bWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBtb2R1bGUgSHR0cFJlcXVlc3RlciAqL1xuXG4vKiBnbG9iYWwgZmV0Y2ggKi9cblxuLyoqXG4gKiBUeXBlcyBvZiBIVFRQIHJlcXVlc3RzXG4gKi9cbmNvbnN0IE1ldGhvZHMgPSB7XG4gIEdFVDogJ2dldCcsXG4gIFBPU1Q6ICdwb3N0JyxcbiAgUFVUOiAncHV0JyxcbiAgREVMRVRFOiAnZGVsZXRlJ1xufTtcblxuLyoqXG4gKiBIdHRwUmVxdWVzdGVyIGlzIGEgd3JhcHBlciBhcm91bmQgdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiBvZiBBSkFYXG4gKiByZWxhdGVkIG1hdHRlcnMuIEl0J3MgdXNlZCB0byBtYWtlIGFsbCB0eXBlcyBvZiBuZXR3b3JrIHJlcXVlc3RzXG4gKiBhbmQgZXhwb3NlcyBhIHByb21pc2UgaW50ZXJmYWNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwUmVxdWVzdGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIEdFVCBIVFRQIHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHByb3ZpZGUgKGdldHMgZW5jb2RlZCBpbnRvIHRoZSBVUkwpXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIENvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAqL1xuICBnZXQgKHVybCwgZGF0YSwgb3B0cykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoTWV0aG9kcy5HRVQsIHRoaXMuZW5jb2RlUGFyYW1zKHVybCwgZGF0YSksIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIFBPU1QgSFRUUCByZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBwcm92aWRlIChnZXRzIGVuY29kZWQgaW50byB0aGUgVVJMKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBDb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgKi9cbiAgcG9zdCAodXJsLCBkYXRhLCBvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcbiAgICAgIE1ldGhvZHMuUE9TVCxcbiAgICAgIHVybCxcbiAgICAgIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgY3JlZGVudGlhbHM6IHVuZGVmaW5lZFxuICAgICAgfSwgb3B0cylcbiAgICApO1xuICB9XG5cbiAgcmVxdWVzdCAobWV0aG9kLCB1cmwsIG9wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIG1ldGhvZCxcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcbiAgICB9LCBvcHRzKSk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIGJlYWNvbiB0byB0aGUgcHJvdmlkZWQgdXJsIHdoaWNoIHdpbGwgc2VuZCBhIG5vbi1ibG9ja2luZyByZXF1ZXN0XG4gICAqIHRvIHRoZSBzZXJ2ZXIgdGhhdCBpcyBndWFyYW50ZWVkIHRvIHNlbmQgYmVmb3JlIHBhZ2UgbG9hZC4gTm8gcmVzcG9uc2UgaXMgcmV0dXJuZWQsXG4gICAqIHNvIGJlYWNvbnMgYXJlIHByaW1hcmlseSB1c2VkIGZvciBhbmFseXRpY3MgcmVwb3J0aW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gc2VuZCB0aGUgYmVhY29uIHRvXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIFRoZSBkYXRhIHBheWxvYWQgdG8gc2VuZCBpbiB0aGUgYmVhY29uXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bGx5IHF1ZXVlZFxuICAgKi9cbiAgYmVhY29uICh1cmwsIGRhdGEpIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLnNlbmRCZWFjb24odXJsLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIH1cblxuICBlbmNvZGVQYXJhbXMgKHVybCwgcGFyYW1zKSB7XG4gICAgbGV0IGhhc1BhcmFtID0gdXJsLmluZGV4T2YoJz8nKSA+IC0xO1xuXG4gICAgbGV0IHNlYXJjaFF1ZXJ5ID0gJyc7XG4gICAgZm9yIChsZXQga2V5IGluIHBhcmFtcykge1xuICAgICAgaWYgKCFoYXNQYXJhbSkge1xuICAgICAgICBoYXNQYXJhbSA9IHRydWU7XG4gICAgICAgIHNlYXJjaFF1ZXJ5ICs9ICc/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlYXJjaFF1ZXJ5ICs9ICcmJztcbiAgICAgIH1cblxuICAgICAgc2VhcmNoUXVlcnkgKz0ga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybCArIHNlYXJjaFF1ZXJ5O1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG4vKiogVGhlIGN1cnJlbnQgbGliIHZlcnNpb24sIHJlcG9ydGVkIHdpdGggZXJyb3JzIGFuZCBhbmFseXRpY3MgKi9cbmV4cG9ydCBjb25zdCBMSUJfVkVSU0lPTiA9ICd2MC45LjAnO1xuXG4vKiogVGhlIGJhc2UgdXJsIGZvciB0aGUgYXBpIGJhY2tlbmQgKi9cbmV4cG9ydCBjb25zdCBBUElfQkFTRV9VUkwgPSAnaHR0cHM6Ly9saXZlYXBpLnlleHQuY29tJztcblxuLyoqIFRoZSBkZWZhdWx0IHVybCBmb3IgY29tcGlsZWQgY29tcG9uZW50IHRlbXBsYXRlcyAqL1xuZXhwb3J0IGNvbnN0IENPTVBJTEVEX1RFTVBMQVRFU19VUkwgPSBgaHR0cHM6Ly9hc3NldHMuc2l0ZXNjZG4ubmV0L2Fuc3dlcnMvJHtMSUJfVkVSU0lPTn0vYW5zd2Vyc3RlbXBsYXRlcy5jb21waWxlZC5taW4uanNgO1xuXG4vKiogVGhlIGJhc2UgdXJsIGZvciB0aGUgYW5hbHl0aWNzIGJhY2tlbmQgICovXG5leHBvcnQgY29uc3QgQU5BTFlUSUNTX0JBU0VfVVJMID0gJ2h0dHBzOi8vcmVhbHRpbWVhbmFseXRpY3MueWV4dC5jb20nO1xuIiwiLyoqIEBtb2R1bGUgU2VhcmNoUGFyYW1zICovXG5cbi8qIGdsb2JhbCB3aW5kb3cgKi9cblxuLyoqXG4gKiBTZWFyY2hQYXJhbXMgaXMgYSBjbGFzcyB0byBnZXQgdGhlIHNlYXJjaCBwYXJhbXMgaW4gYSBVUkwuXG4gKiBJdCBpcyBhIHJlcGxhY2VtZW50IGZvciBVUkwuc2VhcmNoUGFyYW1zIGFuZCBVUkxTZWFyY2hQYXJhbXMgZm9yIGJyb3dzZXJzIGxpa2UgSUUxMVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hQYXJhbXMge1xuICBjb25zdHJ1Y3RvciAodXJsKSB7XG4gICAgLyoqXG4gICAgICogTWFwcGluZyBvZiBhbGwgcXVlcnkgcGFyYW1ldGVycyBpbiB0aGUgZ2l2ZW4gdXJsLCBxdWVyeSBwYXJhbSAtPiB2YWx1ZVxuICAgICAqIE9ubHkgdXNlZCBpZiBVUkxTZWFyY2hQYXJhbXMgZG9lcyBub3QgZXhpc3QgaW4gdGhlIHdpbmRvd1xuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9wYXJhbXMgPSB7fTtcblxuICAgIGlmICh3aW5kb3cgJiYgd2luZG93LlVSTFNlYXJjaFBhcmFtcykge1xuICAgICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXModXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGFyYW1zID0gdGhpcy5wYXJzZSh1cmwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJzZSBjcmVhdGVzIGEgbWFwcGluZyBvZiBhbGwgcXVlcnkgcGFyYW1zIGluIGEgZ2l2ZW4gdXJsXG4gICAqIFRoZSBxdWVyeSBwYXJhbSB2YWx1ZXMgYXJlIGRlY29kZWQgYmVmb3JlIGJlaW5nIHB1dCBpbiB0aGUgbWFwXG4gICAqIFRocmVlIHR5cGVzIG9mIGlucHV0IGFyZSBzdXBwb3J0ZWRcbiAgICogICAoMSkgZnVsbCBVUkwgZS5nLiBodHRwOi8vd3d3LnlleHQuY29tLz9xPWhlbGxvXG4gICAqICAgKDIpIHBhcmFtcyB3aXRoID8gZS5nLiA/cT1oZWxsb1xuICAgKiAgICgxKSBwYXJhbXMgd2l0aG91dCA/IGUuZy4gcT1oZWxsb1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmxcbiAgICogQHJldHVybnMge09iamVjdH0gbWFwcGluZyBmcm9tIHF1ZXJ5IHBhcmFtIC0+IHZhbHVlIHdoZXJlIHZhbHVlIGlzICcnIGlmIG5vIHZhbHVlIGlzIHByb3ZpZGVkXG4gICAqL1xuICBwYXJzZSAodXJsKSB7XG4gICAgbGV0IHBhcmFtcyA9IHt9O1xuICAgIGxldCBzZWFyY2ggPSB1cmw7XG5cbiAgICBpZiAoc2VhcmNoID09PSAnJykge1xuICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9XG5cbiAgICAvLyBOb3JtYWxpemUgYWxsIHVybCBpbnB1dHMgdG8gc3RyaW5nIG9mIHF1ZXJ5IHBhcmFtcyBzZXBhcmF0ZWQgYnkgJlxuICAgIGlmICh1cmwuaW5kZXhPZignPycpID4gLTEpIHtcbiAgICAgIHNlYXJjaCA9IHVybC5zbGljZSh1cmwuaW5kZXhPZignPycpICsgMSk7XG4gICAgfVxuXG4gICAgY29uc3QgZW5jb2RlZFBhcmFtcyA9IHNlYXJjaC5zcGxpdCgnJicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5jb2RlZFBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5VmFsID0gZW5jb2RlZFBhcmFtc1tpXS5zcGxpdCgnPScpO1xuICAgICAgaWYgKGtleVZhbC5sZW5ndGggPiAxKSB7XG4gICAgICAgIHBhcmFtc1trZXlWYWxbMF1dID0gU2VhcmNoUGFyYW1zLmRlY29kZShrZXlWYWxbMV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zW2tleVZhbFswXV0gPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gcXVlcnkgcGFyYW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBxdWVyeSBwYXJhbSBrZXkgdG8gZ2V0IHRoZSB2YWx1ZSBvZlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IHBhcmFtIHZhbHVlLCBudWxsIG90aGVyd2lzZVxuICAgKi9cbiAgZ2V0IChxdWVyeSkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5fcGFyYW1zW1N0cmluZyhxdWVyeSldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9wYXJhbXNbcXVlcnldO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldCBjaGFuZ2VzIHRoZSB2YWx1ZSBvZiBhIGdpdmVuIHF1ZXJ5IHBhcmFtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIHRoZSBxdWVyeSBwYXJhbSBrZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIHRoZSB2YWx1ZSBvZiB0aGUgcXVlcnkgcGFyYW0gdXBkYXRlIHdpdGhcbiAgICovXG4gIHNldCAobmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLl9wYXJhbXNbU3RyaW5nKG5hbWUpXSA9IFN0cmluZyh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogaGFzIGNoZWNrcyB0byBzZWUgaWYgdGhlIGdpdmVuIHF1ZXJ5IHBhcmFtIGtleSBleGlzdHMgaW4gdGhlIHBhcmFtcyBvYmplY3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBxdWVyeSBwYXJhbSB0byBjaGVja1xuICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBxdWVyeSBwYXJhbSBpcyBpbiB0aGUgcGFyYW1zIG9iamVjdCwgZmFsc2Ugby93XG4gICAqL1xuICBoYXMgKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHF1ZXJ5IGluIHRoaXMuX3BhcmFtcztcbiAgfVxuXG4gIC8qKlxuICAgKiB0b1N0cmluZyByZXR1cm5zIGEgdXJsIHdpdGggYWxsIHRoZSBxdWVyeSBwYXJhbXMgaW4gdGhlIHBhcmFtcyBvYmplY3QgKHdpdGhvdXQgYSA/KVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1N0cmluZyAoKSB7XG4gICAgbGV0IHN0cmluZyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9wYXJhbXMpIHtcbiAgICAgIHN0cmluZy5wdXNoKGAke2tleX09JHtTZWFyY2hQYXJhbXMuZW5jb2RlKHRoaXMuX3BhcmFtc1trZXldKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZy5qb2luKCcmJyk7XG4gIH1cblxuICBlbnRyaWVzICgpIHtcbiAgICBsZXQgZW50cmllcyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9wYXJhbXMpIHtcbiAgICAgIGVudHJpZXMucHVzaChba2V5LCB0aGlzLl9wYXJhbXNba2V5XV0pO1xuICAgIH1cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIC8qKlxuICAgKiBkZWNvZGUgcmV0dXJucyB0aGUgZGVjb2RlZCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyB0byBkZWNvZGVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGRlY29kZSAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHJpbmcucmVwbGFjZSgvWyArXS9nLCAnJTIwJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIGRlY29kZSByZXR1cm5zIHRoZSBlbmNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBzdHJpbmcgKGUuZy4gKyAtPiAlMkIpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyB0byBlbmNvZGVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGVuY29kZSAoc3RyaW5nKSB7XG4gICAgbGV0IHJlcGxhY2UgPSB7XG4gICAgICAnISc6ICclMjEnLFxuICAgICAgXCInXCI6ICclMjcnLFxuICAgICAgJygnOiAnJTI4JyxcbiAgICAgICcpJzogJyUyOScsXG4gICAgICAnJTIwJzogJysnXG4gICAgfTtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZykucmVwbGFjZSgvWyEnKCldfCUyMC9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiByZXBsYWNlW21hdGNoXTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXBpUmVxdWVzdCAqL1xuXG5pbXBvcnQgSHR0cFJlcXVlc3RlciBmcm9tICcuL2h0dHByZXF1ZXN0ZXInO1xuaW1wb3J0IHsgQVBJX0JBU0VfVVJMLCBMSUJfVkVSU0lPTiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uL3VpL2RvbS9zZWFyY2hwYXJhbXMnOyAvLyBUT0RPIGlkZWFsbHkgdGhpcyB3b3VsZCBiZSBwYXNzZWQgaW4gYXMgYSBwYXJhbVxuXG4vKipcbiAqIEFwaVJlcXVlc3QgaXMgdGhlIGJhc2UgY2xhc3MgZm9yIGFsbCBBUEkgcmVxdWVzdHMuXG4gKiBJdCBkZWZpbmVzIGFsbCBvZiB0aGUgY29yZSBwcm9wZXJ0aWVzIHJlcXVpcmVkIHRvIG1ha2UgYSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaVJlcXVlc3Qge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3Rpb24gdXNlZCBmb3IgbWFraW5nIG5ldHdvcmsgcmVxdWVzdCBhbmQgaGFuZGxpbmcgZXJyb3JzXG4gICAgICogQHR5cGUge0h0dHBSZXF1ZXN0ZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9yZXF1ZXN0ZXIgPSBuZXcgSHR0cFJlcXVlc3RlcigpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhc2VVcmwgdG8gdXNlIGZvciBtYWtpbmcgYSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Jhc2VVcmwgPSBvcHRzLmJhc2VVcmwgfHwgQVBJX0JBU0VfVVJMO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGVuZHBvaW50IHRvIHVzZSBpbiB0aGUgdXJsIChhcHBlbmRlZCB0byB0aGUge2Jhc2VVcmx9KVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9lbmRwb2ludCA9IG9wdHMuZW5kcG9pbnQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBpS2V5ID0gb3B0cy5hcGlLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBBUEkgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVyc2lvbiA9IG9wdHMudmVyc2lvbiB8fCAyMDE5MDEwMTtcblxuICAgIC8qKlxuICAgICAqIEFkZGl0aW9uYWwgZGF0YSBwYXJhbXMgdGhhdCBhcmUgc2VudCBhbG9uZyB3aXRoIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3BhcmFtcyA9IG9wdHMucGFyYW1zIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCBjcmVhdGVzIGEgbmV3IGBHRVRgIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGUgcmVxdWVzdCBjbGFzc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGdldCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3Rlci5nZXQodGhpcy5fYmFzZVVybCArIHRoaXMuX2VuZHBvaW50LCB0aGlzLnBhcmFtcyh0aGlzLl9wYXJhbXMpKTtcbiAgfVxuXG4gIHBvc3QgKG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdGVyLnBvc3QodGhpcy5fYmFzZVVybCArIHRoaXMuX2VuZHBvaW50LCB0aGlzLnBhcmFtcyh0aGlzLl9wYXJhbXMpLCBvcHRzKTtcbiAgfVxuXG4gIHBhcmFtcyAocGFyYW1zKSB7XG4gICAgdmFyIGJhc2VQYXJhbXMgPSB7XG4gICAgICAndic6IHRoaXMuX3ZlcnNpb24sXG4gICAgICAnYXBpX2tleSc6IHRoaXMuX2FwaUtleSxcbiAgICAgICdqc0xpYlZlcnNpb24nOiBMSUJfVkVSU0lPTlxuICAgIH07XG5cbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcblxuICAgIGlmICh1cmxQYXJhbXMuaGFzKCdiZXRhJykpIHtcbiAgICAgIGJhc2VQYXJhbXNbJ2JldGEnXSA9IHVybFBhcmFtcy5nZXQoJ2JldGEnKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYW55IHBhcmFtYXRlcnMgd2hvcyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC5cbiAgICAvL1xuICAgIC8vIE5PVEUoYmlsbHkpIFByb2JhYmx5IGJldHRlciB0byBiZSBleHBsaWNpdCBhYm91dCBob3cgdG8gaGFuZGxlIHRoaXMgYXQgdGhlIHJlcXVlc3QgYnVpbGRpbmcgbGV2ZWwsXG4gICAgLy8gYnV0IEkgY2FuJ3Qgc2VlIGFueSBjYXNlcyB3aGVyZSB3ZSdkIGV2ZXIgd2FudCB0byBzZW5kICd1bmRlZmluZWQnIGFzIGEgdmFsdWUgdG8gdGhlIHNlcnZlci5cbiAgICAvLyBTbyBpdCdzIHByb2JhYmx5IGZpbmUgdG8gJ2NsZWFuJyB0aGUgcGFyYW1zIG9iamVjdCBoZXJlXG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAocGFyYW1zW2tleV0gPT09IHVuZGVmaW5lZCB8fCBwYXJhbXNba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgcGFyYW1zW2tleV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihiYXNlUGFyYW1zLCBwYXJhbXMgfHwge30pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBFcnJvcnMgKi9cblxuLyoqXG4gKiBBbnN3ZXJzQmFzZUVycm9yIGlzIGFuIGV4dGVuc2lvbiBvZiB0aGUgYmFzZSBFcnJvciBvYmplY3QuXG4gKiBUaGlzIGlzIHRoZSBvYmplY3QgdGhhdCBpcyB1c2VkIHRvIHdoZW4gcmVwb3J0aW5nIHRvIHRoZSBzZXJ2ZXIuXG4gKiBAZXh0ZW5kcyBFcnJvclxuICpcbiAqIEVycm9yIGNvZGVzIGZhbGwgaW50byBvbmUgb2YgZm91ciBjYXRlZ29yaWVzOlxuICogMVhYIGVycm9yczogQmFzaWMgZXJyb3JzXG4gKiAyWFggZXJyb3JzOiBVSSBlcnJvcnNcbiAqIDNYWCBlcnJvcnM6IEVuZHBvaW50IGVycm9yc1xuICogNFhYIGVycm9yczogQ29yZSBlcnJvcnNcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNCYXNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChlcnJvckNvZGUsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMuZXJyb3JDb2RlID0gZXJyb3JDb2RlO1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLmJvdW5kYXJ5ID0gYm91bmRhcnk7XG4gICAgdGhpcy5yZXBvcnRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKGNhdXNlZEJ5KSB7XG4gICAgICB0aGlzLmNhdXNlZEJ5ID0gY2F1c2VkQnkgaW5zdGFuY2VvZiBBbnN3ZXJzQmFzZUVycm9yXG4gICAgICAgID8gY2F1c2VkQnlcbiAgICAgICAgOiBBbnN3ZXJzQmFzZUVycm9yLmZyb20oY2F1c2VkQnkpO1xuICAgIH1cbiAgfVxuXG4gIHRvSnNvbiAoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMpO1xuICB9XG5cbiAgdG9TdHJpbmcgKCkge1xuICAgIGxldCBzdHJpbmcgPSBgJHt0aGlzLmVycm9yTWVzc2FnZX0gKCR7dGhpcy5ib3VuZGFyeX0pYDtcbiAgICBpZiAodGhpcy5jYXVzZWRCeSkge1xuICAgICAgc3RyaW5nICs9IGBcXG4gIENhdXNlZCBCeTogJHt0aGlzLmNhdXNlZEJ5LnRvU3RyaW5nKCl9YDtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChidWlsdGluRXJyb3IsIGJvdW5kYXJ5KSB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoYnVpbHRpbkVycm9yLm1lc3NhZ2UsIGJvdW5kYXJ5KTtcbiAgICBlcnJvci5zdGFjayA9IGJ1aWx0aW5FcnJvci5zdGFjaztcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzQmFzaWNFcnJvciBpcyBhIHdyYXBwZXIgYXJvdW5kIGFsbCB0aGUgYnVpbHQtaW4gZXJyb3JzXG4gKiBlLmcuIHVuZGVmaW5lZCB2YXJpYWJsZXMsIGluY29ycmVjdCBzeW50YXgsIHR5cGVzLCBtaXNzaW5nIG1ldGhvZHMsIGV0Yy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNCYXNpY0Vycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigxMDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzVWlFcnJvciB1c2VkIGZvciB0aGluZ3MgbGlrZSBET00gZXJyb3JzLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc1VpRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDIwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNDb21wb25lbnRFcnJvciBpcyB1c2VkIGZvciBDb21wb25lbnQgb3JpZW50ZWQgZXJyb3JzXG4gKiBlLmcuIGZhaWx1cmUgdG8gcmVuZGVyLCBvciBjYXRjaGluZyB1bmtub3ducy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNDb21wb25lbnRFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgY29tcG9uZW50LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDIwMSwgbWVzc2FnZSwgY29tcG9uZW50LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzRW5kcG9pbnRFcnJvciByZXByZXNlbnRzIGFsbCBuZXR3b3JrIHJlbGF0ZWQgZXJyb3JzLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0VuZHBvaW50RXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDMwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNDb3JlRXJyb3IgcmVwcmVzZW50cyBlcnJvcnMgZm9yIHByZWNvbmRpdGlvbiBmYWlsdXJlcyBpbiB0aGUgY29yZSBsaWJyYXJ5XG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQ29yZUVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcig0MDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzU3RvcmFnZUVycm9yIHJlcHJlc2VudHMgc3RvcmFnZSByZWxhdGVkIGVycm9yc1xuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc1N0b3JhZ2VFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgc3RvcmFnZUtleSwgZGF0YSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcig0MDEsIG1lc3NhZ2UsICdTdG9yYWdlJywgY2F1c2VkQnkpO1xuICAgIHRoaXMuc3RvcmFnZUtleSA9IHN0b3JhZ2VLZXk7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNBbmFseXRpY3NFcnJvciBpcyB1c2VkIGZvciBlcnJvcnMgd2hlbiByZXBvcnRpbmcgYW5hbHl0aWNzXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGV2ZW50LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDQwMiwgbWVzc2FnZSwgJ0FuYWx5dGljcycsIGNhdXNlZEJ5KTtcbiAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaEFwaSAqL1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IHsgQW5zd2Vyc0Jhc2ljRXJyb3IsIEFuc3dlcnNDb3JlRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBTZWFyY2hBcGkgaXMgdGhlIEFQSSBmb3IgZG9pbmcgdmFyaW91cyB0eXBlcyBvZiBzZWFyY2hcbiAqIG92ZXIgdGhlIG5ldHdvcmsgKGUuZy4gdmVydGljYWwgb3IgdW5pdmVyc2FsKVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hBcGkge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgQVBJIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghY29uZmlnLmFwaUtleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBcGkgS2V5IGlzIHJlcXVpcmVkJywgJ1NlYXJjaCcpO1xuICAgIH1cbiAgICB0aGlzLl9hcGlLZXkgPSBjb25maWcuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIEFuc3dlcnMgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFjb25maWcuZXhwZXJpZW5jZUtleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBbnN3ZXJzIEtleSBpcyByZXF1aXJlZCcsICdTZWFyY2gnKTtcbiAgICB9XG4gICAgdGhpcy5fZXhwZXJpZW5jZUtleSA9IGNvbmZpZy5leHBlcmllbmNlS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFuc3dlcnMgY29uZmlnIHZlcnNpb24gdG8gdXNlIGZvciBhbGwgcmVxdWVzdHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24gPSBjb25maWcuZXhwZXJpZW5jZVZlcnNpb247XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgQVBJIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnNpb24gPSBjb25maWcudmVyc2lvbiB8fCAyMDE5MDEwMSB8fCAyMDE5MDMwMTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBsb2NhbGUgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIWNvbmZpZy5sb2NhbGUpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignTG9jYWxlIGlzIHJlcXVpcmVkJywgJ1NlYXJjaCcpO1xuICAgIH1cbiAgICB0aGlzLl9sb2NhbGUgPSBjb25maWcubG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBpbiB0aGUgY29udGV4dCBvZiBhIHZlcnRpY2FsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbEtleSB2ZXJ0aWNhbCBJRCBmb3IgdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge29iamVjdH0gcXVlcnkgVGhlIHF1ZXJ5IGRldGFpbHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmlucHV0IFRoZSBpbnB1dCB0byBzZWFyY2ggZm9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5maWx0ZXIgVGhlIGZpbHRlciB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuZmFjZXRGaWx0ZXIgVGhlIGZhY2V0IGZpbHRlciB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlcnkubGltaXQgVGhlIG1heCBudW1iZXIgb2YgcmVzdWx0cyB0byBpbmNsdWRlLCBtYXggb2YgNTBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1ZXJ5Lm9mZnNldCBUaGUgcmVzdWx0cyBvZmZzZXQsIGZvciBmZXRjaGluZyBtb3JlIHJlc3VsdHMgb2YgdGhlIHNhbWUgcXVlcnlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmlkIFRoZSBxdWVyeSBJRCB0byB1c2UuIElmIHBhZ2luZyB3aXRoaW4gYSBxdWVyeSwgdGhlIHNhbWUgSUQgc2hvdWxkIGJlIHVzZWRcbiAgICogQHBhcmFtIHtPYmplY3R9IHF1ZXJ5Lmdlb2xvY2F0aW9uIFRoZSB1c2VyJ3MgZ2VvbG9jYXRpb24gcG9zaXRpb24gdXNlZCB0byBiaWFzIHRoZSByZXN1bHRzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcXVlcnkuaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQgSWYgdHJ1ZSwgYXNrcyB0aGUgc2VydmVyIHRvIHJldHVybiBkeW5hbWljIGZpbHRlcnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LnNraXBTcGVsbENoZWNrIFRoZSBib29sZWFuIGFzIHN0cmluZyB0byBpbmRpY2F0ZSBpZiBpdCBzaG91bGQgc2tpcCBzcGVsbCBjaGVja2luZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkucXVlcnlUcmlnZ2VyIFRoZSBzb3VyY2UgdGhhdCB0cmlnZ2VycyBxdWVyeSBzdWNoIGFzIHN1Z2dlc3RcbiAgICovXG4gIHZlcnRpY2FsU2VhcmNoICh2ZXJ0aWNhbEtleSwgeyBpbnB1dCwgZmlsdGVyLCBmYWNldEZpbHRlciwgbGltaXQsIG9mZnNldCwgaWQsIGdlb2xvY2F0aW9uLCBpc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCwgc2tpcFNwZWxsQ2hlY2ssIHF1ZXJ5VHJpZ2dlciB9KSB7XG4gICAgaWYgKGxpbWl0ID4gNTApIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29yZUVycm9yKCdQcm92aWRlZCBzZWFyY2ggbGltaXQgdW5zdXBwb3J0ZWQnLCAnU2VhcmNoQXBpJyk7XG4gICAgfVxuXG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL3ZlcnRpY2FsL3F1ZXJ5JyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBpbnB1dCxcbiAgICAgICAgJ2V4cGVyaWVuY2VLZXknOiB0aGlzLl9leHBlcmllbmNlS2V5LFxuICAgICAgICAndmVyc2lvbic6IHRoaXMuX2V4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgICAnZmlsdGVycyc6IGZpbHRlcixcbiAgICAgICAgJ2ZhY2V0RmlsdGVycyc6IGZhY2V0RmlsdGVyLFxuICAgICAgICAndmVydGljYWxLZXknOiB2ZXJ0aWNhbEtleSxcbiAgICAgICAgJ2xpbWl0JzogbGltaXQsXG4gICAgICAgICdvZmZzZXQnOiBvZmZzZXQsXG4gICAgICAgICdsb2NhdGlvbic6IGdlb2xvY2F0aW9uID8gYCR7Z2VvbG9jYXRpb24ubGF0fSwke2dlb2xvY2F0aW9uLmxuZ31gIDogbnVsbCxcbiAgICAgICAgJ3JhZGl1cyc6IGdlb2xvY2F0aW9uID8gZ2VvbG9jYXRpb24ucmFkaXVzIDogbnVsbCxcbiAgICAgICAgJ3F1ZXJ5SWQnOiBpZCxcbiAgICAgICAgJ3JldHJpZXZlRmFjZXRzJzogaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQsXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGUsXG4gICAgICAgICdza2lwU3BlbGxDaGVjayc6IHNraXBTcGVsbENoZWNrLFxuICAgICAgICAncXVlcnlUcmlnZ2VyJzogcXVlcnlUcmlnZ2VyXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggYWNyb3NzIGFsbCB2ZXJ0aWNhbHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5U3RyaW5nIFRoZSBpbnB1dCB0byBzZWFyY2ggZm9yXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMuZ2VvbG9jYXRpb24gdGhlIHVzZXIncyBnZW9sb2NhdGlvbiBwb3NpdGlvbiB1c2VkIHRvIGJpYXMgdGhlIHJlc3VsdHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5za2lwU3BlbGxDaGVjayBUaGUgYm9vbGVhbiBhcyBzdHJpbmcgdG8gaW5kaWNhdGUgaWYgaXQgc2hvdWxkIHNraXAgc3BlbGwgY2hlY2tpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5xdWVyeVRyaWdnZXIgVGhlIHNvdXJjZSB0aGF0IHRyaWdnZXJzIHF1ZXJ5IHN1Y2ggYXMgc3VnZ2VzdFxuICAgKi9cbiAgdW5pdmVyc2FsU2VhcmNoIChxdWVyeVN0cmluZywgcGFyYW1zKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL3F1ZXJ5JyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBxdWVyeVN0cmluZyxcbiAgICAgICAgJ2V4cGVyaWVuY2VLZXknOiB0aGlzLl9leHBlcmllbmNlS2V5LFxuICAgICAgICAnbG9jYXRpb24nOiBwYXJhbXMuZ2VvbG9jYXRpb24gPyBgJHtwYXJhbXMuZ2VvbG9jYXRpb24ubGF0fSwke3BhcmFtcy5nZW9sb2NhdGlvbi5sbmd9YCA6IG51bGwsXG4gICAgICAgICdyYWRpdXMnOiBwYXJhbXMuZ2VvbG9jYXRpb24gPyBwYXJhbXMuZ2VvbG9jYXRpb24ucmFkaXVzIDogbnVsbCxcbiAgICAgICAgJ3ZlcnNpb24nOiB0aGlzLl9leHBlcmllbmNlVmVyc2lvbixcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZSxcbiAgICAgICAgJ3NraXBTcGVsbENoZWNrJzogcGFyYW1zLnNraXBTcGVsbENoZWNrLFxuICAgICAgICAncXVlcnlUcmlnZ2VyJzogcGFyYW1zLnF1ZXJ5VHJpZ2dlclxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEhpZ2hsaWdodGVkVmFsdWUgKi9cblxuLyoqXG4gKiBNb2RlbCByZXByZXNlbnRpbmcgYSBoaWdobGlnaHRlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGlnaGxpZ2h0ZWRWYWx1ZSB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICB0aGlzLnZhbHVlID0gZGF0YS52YWx1ZSB8fCBkYXRhLnNob3J0VmFsdWUgfHwgJyc7XG4gICAgdGhpcy5tYXRjaGVkU3Vic3RyaW5ncyA9IGRhdGEubWF0Y2hlZFN1YnN0cmluZ3MgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogZ2V0IGhpZ2hsaWdodGVkIHZhbHVlIHN0cmluZ1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0ICgpIHtcbiAgICB0aGlzLl9zb3J0TWF0Y2hlZFN1YnN0cmluZ3MoKTtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRIaWdobGlnaHRlZFZhbHVlKHRoaXMudmFsdWUsIHRoaXMubWF0Y2hlZFN1YnN0cmluZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCBpbnZlcnRlZCBoaWdobGlnaHRlZCB2YWx1ZSBzdHJpbmdcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldEludmVydGVkICgpIHtcbiAgICB0aGlzLl9zb3J0TWF0Y2hlZFN1YnN0cmluZ3MoKTtcbiAgICBjb25zdCBpbnZlcnRlZFN1YnN0cmluZ3MgPSB0aGlzLl9nZXRJbnZlcnRlZFN1YnN0cmluZ3ModGhpcy5tYXRjaGVkU3Vic3RyaW5ncywgdGhpcy52YWx1ZS5sZW5ndGgpO1xuICAgIHJldHVybiB0aGlzLl9idWlsZEhpZ2hsaWdodGVkVmFsdWUodGhpcy52YWx1ZSwgaW52ZXJ0ZWRTdWJzdHJpbmdzKTtcbiAgfVxuXG4gIF9zb3J0TWF0Y2hlZFN1YnN0cmluZ3MgKCkge1xuICAgIHRoaXMubWF0Y2hlZFN1YnN0cmluZ3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGEub2Zmc2V0IDwgYi5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuXG4gICAgICBpZiAoYS5vZmZzZXQgPiBiLm9mZnNldCkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gIH1cblxuICBfZ2V0SW52ZXJ0ZWRTdWJzdHJpbmdzIChtYXRjaGVkU3Vic3RyaW5ncywgdmFsdWVMZW5ndGgpIHtcbiAgICBjb25zdCBpbnZlcnRlZFN1YnN0cmluZ3MgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdGNoZWRTdWJzdHJpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzdWJzdHJpbmcgPSBtYXRjaGVkU3Vic3RyaW5nc1tpXTtcbiAgICAgIGNvbnN0IG5leHRPZmZzZXQgPSBzdWJzdHJpbmcub2Zmc2V0ICsgc3Vic3RyaW5nLmxlbmd0aDtcbiAgICAgIGlmIChpID09PSAwICYmIHN1YnN0cmluZy5vZmZzZXQgIT09IDApIHtcbiAgICAgICAgaW52ZXJ0ZWRTdWJzdHJpbmdzLnB1c2goeyBvZmZzZXQ6IDAsIGxlbmd0aDogc3Vic3RyaW5nLm9mZnNldCB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlTGVuZ3RoID4gbmV4dE9mZnNldCkge1xuICAgICAgICBpbnZlcnRlZFN1YnN0cmluZ3MucHVzaCh7XG4gICAgICAgICAgb2Zmc2V0OiBuZXh0T2Zmc2V0LFxuICAgICAgICAgIGxlbmd0aDogaSA8IG1hdGNoZWRTdWJzdHJpbmdzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgID8gbWF0Y2hlZFN1YnN0cmluZ3NbaSArIDFdLm9mZnNldCAtIG5leHRPZmZzZXRcbiAgICAgICAgICAgIDogdmFsdWVMZW5ndGggLSBuZXh0T2Zmc2V0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW52ZXJ0ZWRTdWJzdHJpbmdzO1xuICB9XG5cbiAgX2J1aWxkSGlnaGxpZ2h0ZWRWYWx1ZSAodmFsLCBoaWdobGlnaHRlZFN1YnN0cmluZ3MpIHtcbiAgICBsZXQgaGlnaGxpZ2h0ZWRWYWx1ZSA9ICcnO1xuICAgIGxldCBuZXh0U3RhcnQgPSAwO1xuXG4gICAgaWYgKGhpZ2hsaWdodGVkU3Vic3RyaW5ncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBoaWdobGlnaHRlZFN1YnN0cmluZ3MubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBzdGFydCA9IE51bWJlcihoaWdobGlnaHRlZFN1YnN0cmluZ3Nbal0ub2Zmc2V0KTtcbiAgICAgIGxldCBlbmQgPSBzdGFydCArIGhpZ2hsaWdodGVkU3Vic3RyaW5nc1tqXS5sZW5ndGg7XG5cbiAgICAgIGhpZ2hsaWdodGVkVmFsdWUgKz0gW3ZhbC5zbGljZShuZXh0U3RhcnQsIHN0YXJ0KSwgJzxzdHJvbmc+JywgdmFsLnNsaWNlKHN0YXJ0LCBlbmQpLCAnPC9zdHJvbmc+J10uam9pbignJyk7XG5cbiAgICAgIGlmIChqID09PSBoaWdobGlnaHRlZFN1YnN0cmluZ3MubGVuZ3RoIC0gMSAmJiBlbmQgPCB2YWwubGVuZ3RoKSB7XG4gICAgICAgIGhpZ2hsaWdodGVkVmFsdWUgKz0gdmFsLnNsaWNlKGVuZCk7XG4gICAgICB9XG5cbiAgICAgIG5leHRTdGFydCA9IGVuZDtcbiAgICB9XG5cbiAgICByZXR1cm4gaGlnaGxpZ2h0ZWRWYWx1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlRGF0YSAqL1xuXG5pbXBvcnQgSGlnaGxpZ2h0ZWRWYWx1ZSBmcm9tICcuL2hpZ2hsaWdodGVkdmFsdWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVEYXRhIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIHRoaXMuc2VjdGlvbnMgPSBkYXRhLnNlY3Rpb25zIHx8IFtdO1xuICAgIHRoaXMucXVlcnlJZCA9IGRhdGEucXVlcnlJZCB8fCAnJztcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlKSB7XG4gICAgbGV0IHNlY3Rpb25zO1xuICAgIGlmIChyZXNwb25zZS5zZWN0aW9ucykge1xuICAgICAgc2VjdGlvbnMgPSByZXNwb25zZS5zZWN0aW9ucy5tYXAocyA9PiAoe1xuICAgICAgICBsYWJlbDogcy5sYWJlbCxcbiAgICAgICAgcmVzdWx0czogcy5yZXN1bHRzLm1hcChyID0+IG5ldyBBdXRvQ29tcGxldGVSZXN1bHQocikpXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlY3Rpb25zID0gW3sgcmVzdWx0czogcmVzcG9uc2UucmVzdWx0cy5tYXAociA9PiBuZXcgQXV0b0NvbXBsZXRlUmVzdWx0KHIpKSB9XTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBBdXRvQ29tcGxldGVEYXRhKHsgc2VjdGlvbnMsIHF1ZXJ5SWQ6IHJlc3BvbnNlLnF1ZXJ5SWQgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9Db21wbGV0ZVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICB0aGlzLmZpbHRlciA9IGRhdGEuZmlsdGVyIHx8IHt9O1xuICAgIHRoaXMuaGlnaGxpZ2h0ZWRWYWx1ZSA9IG5ldyBIaWdobGlnaHRlZFZhbHVlKGRhdGEpLmdldEludmVydGVkKCk7XG4gICAgdGhpcy5rZXkgPSBkYXRhLmtleSB8fCAnJztcbiAgICB0aGlzLm1hdGNoZWRTdWJzdHJpbmdzID0gZGF0YS5tYXRjaGVkU3Vic3RyaW5ncyB8fCBbXTtcbiAgICB0aGlzLnZhbHVlID0gZGF0YS52YWx1ZSB8fCAnJztcbiAgICB0aGlzLnNob3J0VmFsdWUgPSBkYXRhLnNob3J0VmFsdWUgfHwgdGhpcy52YWx1ZTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIgKi9cblxuaW1wb3J0IEF1dG9Db21wbGV0ZURhdGEgZnJvbSAnLi4vbW9kZWxzL2F1dG9jb21wbGV0ZWRhdGEnO1xuXG4vKipcbiAqIEEgRGF0YSBUcmFuc2Zvcm1lciB0aGF0IHRha2VzIHRoZSByZXNwb25zZSBvYmplY3QgZnJvbSBhIEF1dG9Db21wbGV0ZSByZXF1ZXN0XG4gKiBBbmQgdHJhbnNmb3JtcyBpbiB0byBhIGZyb250LWVuZCBvcmllbnRlZCBkYXRhIHN0cnVjdHVyZSB0aGF0IG91clxuICogY29tcG9uZW50IGxpYnJhcnkgYW5kIGNvcmUgc3RvcmFnZSB1bmRlcnN0YW5kLlxuICpcbiAqIFRPRE8oYmlsbHkpIENyZWF0ZSBvdXIgb3duIGZyb250LWVuZCBkYXRhIG1vZGVsc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIge1xuICBzdGF0aWMgY2xlYW4gKG1vZHVsZUlkLCBkYXRhKSB7XG4gICAgaWYgKGRhdGEuc2VjdGlvbnMgJiYgZGF0YS5zZWN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBkYXRhLnNlY3Rpb25zO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnNlY3Rpb25zICYmIGRhdGEuc2VjdGlvbnMubGVuZ3RoID09PSAxICYmIGRhdGEuc2VjdGlvbnNbMF0ucmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBkYXRhLnNlY3Rpb25zO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBbbW9kdWxlSWRdOiBkYXRhXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB1bml2ZXJzYWwgKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIEF1dG9Db21wbGV0ZURhdGEuZnJvbShyZXNwb25zZSk7XG4gIH1cblxuICBzdGF0aWMgZmlsdGVyIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG5cbiAgc3RhdGljIHZlcnRpY2FsIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVBcGkgKi9cblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIgZnJvbSAnLi9hdXRvY29tcGxldGVkYXRhdHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgQW5zd2Vyc0Jhc2ljRXJyb3IsIEFuc3dlcnNFbmRwb2ludEVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogQXV0b0NvbXBsZXRlQXBpIGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBuZXR3b3JrIHJlbGF0ZWQgbWF0dGVyc1xuICogZm9yIGFsbCB0aGUgYXV0b2NvbXBsZXRlIGVuZHBvaW50cy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlQXBpIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIWNvbmZpZy5hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQXBpIEtleSBpcyByZXF1aXJlZCcsICdBdXRvQ29tcGxldGUnKTtcbiAgICB9XG4gICAgdGhpcy5fYXBpS2V5ID0gY29uZmlnLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBBbnN3ZXJzIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghY29uZmlnLmV4cGVyaWVuY2VLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQW5zd2VycyBLZXkgaXMgcmVxdWlyZWQnLCAnQXV0b0NvbXBsZXRlJyk7XG4gICAgfVxuICAgIHRoaXMuX2V4cGVyaWVuY2VLZXkgPSBjb25maWcuZXhwZXJpZW5jZUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBBUEkgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVyc2lvbiA9IGNvbmZpZy52ZXJzaW9uIHx8IDIwMTkwMTAxIHx8IDIwMTkwMzAxO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFuc3dlcnMgY29uZmlnIHZlcnNpb24gdG8gdXNlIGZvciBhbGwgcmVxdWVzdHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24gPSBjb25maWcuZXhwZXJpZW5jZVZlcnNpb247XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbG9jYWxlIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFjb25maWcubG9jYWxlKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0xvY2FsZSBpcyByZXF1aXJlZCcsICdBdXRvQ29tcGxldGUnKTtcbiAgICB9XG4gICAgdGhpcy5fbG9jYWxlID0gY29uZmlnLmxvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdXRvY29tcGxldGUgZmlsdGVyc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgVGhlIGlucHV0IHRvIHVzZSBmb3IgYXV0byBjb21wbGV0ZVxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdG8gdXNlIGZvciBmaWx0ZXJzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcudmVydGljYWxLZXkgVGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIGNvbmZpZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLmJhcktleSBUaGUgYmFyIGtleSBmb3IgdGhlIGNvbmZpZyB2MVxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnLnNlYXJjaFBhcmFtZXRlcnMgVGhlIHNlYXJjaCBwYXJhbWV0ZXJzIGZvciB0aGUgY29uZmlnIHYyXG4gICAqL1xuICBxdWVyeUZpbHRlciAoaW5wdXQsIGNvbmZpZykge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9maWx0ZXJzZWFyY2gnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IGlucHV0LFxuICAgICAgICAnZXhwZXJpZW5jZUtleSc6IHRoaXMuX2V4cGVyaWVuY2VLZXksXG4gICAgICAgICd2ZXJzaW9uJzogdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24sXG4gICAgICAgICd2ZXJ0aWNhbEtleSc6IGNvbmZpZy52ZXJ0aWNhbEtleSxcbiAgICAgICAgJ2lucHV0S2V5JzogY29uZmlnLmJhcktleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZSxcbiAgICAgICAgJ3NlYXJjaF9wYXJhbWV0ZXJzJzogSlNPTi5zdHJpbmdpZnkoY29uZmlnLnNlYXJjaFBhcmFtZXRlcnMpXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLmZpbHRlcihyZXNwb25zZS5yZXNwb25zZSwgY29uZmlnLmJhcktleSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoJ0ZpbHRlciBzZWFyY2ggcmVxdWVzdCBmYWlsZWQnLCAnQXV0b0NvbXBsZXRlJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICBxdWVyeVZlcnRpY2FsIChpbnB1dCwgdmVydGljYWxLZXksIGJhcktleSkge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy92ZXJ0aWNhbC9hdXRvY29tcGxldGUnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IGlucHV0LFxuICAgICAgICAnZXhwZXJpZW5jZUtleSc6IHRoaXMuX2V4cGVyaWVuY2VLZXksXG4gICAgICAgICd2ZXJzaW9uJzogdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24sXG4gICAgICAgICd2ZXJ0aWNhbEtleSc6IHZlcnRpY2FsS2V5LFxuICAgICAgICAnYmFyS2V5JzogYmFyS2V5LFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLnZlcnRpY2FsKHJlc3BvbnNlLnJlc3BvbnNlLCByZXF1ZXN0Ll9wYXJhbXMuYmFyS2V5KSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzRW5kcG9pbnRFcnJvcignVmVydGljYWwgc2VhcmNoIHJlcXVlc3QgZmFpbGVkJywgJ0F1dG9Db21wbGV0ZScsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcXVlcnlVbml2ZXJzYWwgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL2F1dG9jb21wbGV0ZScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogcXVlcnlTdHJpbmcsXG4gICAgICAgICdleHBlcmllbmNlS2V5JzogdGhpcy5fZXhwZXJpZW5jZUtleSxcbiAgICAgICAgJ3ZlcnNpb24nOiB0aGlzLl9leHBlcmllbmNlVmVyc2lvbixcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHF1ZXJ5U3RyaW5nKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLnVuaXZlcnNhbChyZXNwb25zZS5yZXNwb25zZSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoJ1VuaXZlcnNhbCBzZWFyY2ggcmVxdWVzdCBmYWlsZWQnLCAnQXV0b0NvbXBsZXRlJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFF1ZXN0aW9uQW5zd2VyQXBpICovXG5cbmltcG9ydCBBcGlSZXF1ZXN0IGZyb20gJy4uL2h0dHAvYXBpcmVxdWVzdCc7XG5pbXBvcnQgeyBBbnN3ZXJzQmFzaWNFcnJvciwgQW5zd2Vyc0VuZHBvaW50RXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBRdWVzdGlvbkFuc3dlckFwaSBleHBvc2VzIGFuIGludGVyZmFjZSB0byBkbyBuZXR3b3JreSB0aGluZ3MgYWdhaW5zdFxuICogdGhlIFEmQSBSRVNUIEFQSVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdGlvbkFuc3dlckFwaSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFjb25maWcuYXBpS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0FwaSBLZXkgaXMgcmVxdWlyZWQnLCAnUXVlc3Rpb25BbnN3ZXJBcGknKTtcbiAgICB9XG4gICAgdGhpcy5fYXBpS2V5ID0gY29uZmlnLmFwaUtleTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzdWJtaXRRdWVzdGlvbiB3aWxsIGNyZWF0ZSBhIG5ldHdvcmsgcmVxdWVzdCB0b1xuICAgKiBjcmVhdGUgYSBxdWVzdGlvbiBmb3IgUSZBLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcXVlc3Rpb24gVGhlIHF1ZXN0aW9uIG9iamVjdCB0byBzdWJtaXQgdG8gdGhlIHNlcnZlclxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlc3Rpb24uZW50aXR5SWQgVGhlIGVudGl0eSB0byBhc3NvY2lhdGUgd2l0aCB0aGUgcXVlc3Rpb24gKHJlcXVpcmVkKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ubGFudWFnZSBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIHF1ZXN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5zaXRlIFRoZSBcInB1Ymxpc2hlclwiIG9mIHRoZSAoZS5nLiAnRklSU1RfUEFSVFknKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ubmFtZSBUaGUgbmFtZSBvZiB0aGUgYXV0aG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5lbWFpbCBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgYXV0aG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5xdWVzdGlvblRleHQgVGhlIHF1ZXN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5xdWVzdGlvbkRlc2NyaXB0aW9uIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHF1ZXN0aW9uXG4gICAqL1xuICBzdWJtaXRRdWVzdGlvbiAocXVlc3Rpb24pIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL3F1ZXN0aW9ucycsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnZW50aXR5SWQnOiBxdWVzdGlvbi5lbnRpdHlJZCxcbiAgICAgICAgJ3NpdGUnOiBxdWVzdGlvbi5zaXRlLFxuICAgICAgICAnbmFtZSc6IHF1ZXN0aW9uLm5hbWUsXG4gICAgICAgICdlbWFpbCc6IHF1ZXN0aW9uLmVtYWlsLFxuICAgICAgICAncXVlc3Rpb25UZXh0JzogcXVlc3Rpb24ucXVlc3Rpb25UZXh0LFxuICAgICAgICAncXVlc3Rpb25EZXNjcmlwdGlvbic6IHF1ZXN0aW9uLnF1ZXN0aW9uRGVzY3JpcHRpb24sXG4gICAgICAgICdxdWVzdGlvbkxhbmd1YWdlJzogcXVlc3Rpb24ucXVlc3Rpb25MYW5ndWFnZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QucG9zdCgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoXG4gICAgICAgICAgJ1F1ZXN0aW9uIHN1Ym1pdCBmYWlsZWQnLFxuICAgICAgICAgICdRdWVzdGlvbkFuc3dlckFwaScsXG4gICAgICAgICAgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaFN0YXRlcyAqL1xuXG4vKipcbiAqIFNlYXJjaFN0YXRlcyBpcyBhbiBFTlVNIGZvciB0aGUgdmFyaW91cyBzdGFnZXMgb2Ygc2VhcmNoaW5nLFxuICogdXNlZCB0byBzaG93IGRpZmZlcmVudCB0ZW1wbGF0ZXNcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUFJFX1NFQVJDSDogJ3ByZS1zZWFyY2gnLFxuICBTRUFSQ0hfTE9BRElORzogJ3NlYXJjaC1sb2FkaW5nJyxcbiAgU0VBUkNIX0NPTVBMRVRFOiAnc2VhcmNoLWNvbXBsZXRlJ1xufTtcbiIsIi8qKiBAbW9kdWxlIFJlc3VsdCAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHQge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJhdyBwcm9maWxlIGRhdGFcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcmF3ID0gZGF0YS5yYXcgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmb3JtYXR0ZWQgcHJvZmlsZSBkYXRhXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Zvcm1hdHRlZCA9IGRhdGEuZm9ybWF0dGVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluZGV4IG51bWJlciBvZiB0aGUgcmVzdWx0XG4gICAgICogQHR5cGUge051bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLm9yZGluYWwgPSBkYXRhLm9yZGluYWwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSBvZiB0aGUgcmVzdWx0IGNhcmRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBib2R5IG9mIHRoZSBkZXRhaWxzIHNlY3Rpb24gb2YgdGhlIHJlc3VsdCBjYXJkLCBjYW4gY29udGFpbiBIVE1MXG4gICAgICogQHR5cGUge3N0cmluZ3wgbnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmRldGFpbHMgPSBkYXRhLmRldGFpbHMgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZXN0aW5hdGlvbiBsaW5rIGZvciB0aGUgdGl0bGUgb2YgdGhlIHJlc3VsdCBjYXJkXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMubGluayA9IGRhdGEubGluayB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIEVudGl0eSBJRCwgb3Igb3RoZXIgdW5pcXVlIGlkZW50aWZpZXIsIHVzZWQgZm9yIHRvIHBvd2VyIGludGVyYWN0aXZpdHlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5pZCA9IGRhdGEuaWQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdWJ0aXRsZSBvbiB0aGUgcmVzdWx0IGNhcmRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5zdWJ0aXRsZSA9IGRhdGEuc3VidGl0bGUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjbGFzcyBtb2RpZmllciwgdXN1YWxseSBkZXJpdmVkIGZyb20gdGhlIHZlcnRpY2FsIGNvbmZpZ3VyYXRpb24gSURcbiAgICAgKiBVc2VkIHRvIGFwcGx5IGRpZmZlcmVudCBzdHlsaW5nIHRvIGRpZmZlcmVudCByZXN1bHQgY2FyZCB0eXBlc1xuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLm1vZGlmaWVyID0gZGF0YS5tb2RpZmllciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsYXJnZSBkYXRlLCBvZiB0aGUgZm9ybWF0IHsgbW9udGg6ICdKYW4nLCBkYXk6ICcwMScgfVxuICAgICAqIEB0eXBlIHtPYmplY3R8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmJpZ0RhdGUgPSBkYXRhLmJpZ0RhdGUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFuIGltYWdlIHByb2ZpbGUgb2JqZWN0LCBleHBlY3RlZCB0byBoYXZlIGEgdXJsIHByb3BlcnR5XG4gICAgICogQHR5cGUge09iamVjdHxudWxsfVxuICAgICAqL1xuICAgIHRoaXMuaW1hZ2UgPSBkYXRhLmltYWdlIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBjYWxscyB0byBhY3Rpb24sIG9mIHRoZSBmb3JtYXQ6XG4gICAgICogeyBpY29uOiAnJywgdXJsOiAnJywgdGV4dDogJycsIGV2ZW50VHlwZTogJycsIGV2ZW50T3B0aW9uczoge319XG4gICAgICogQHR5cGUge0FycmF5fVxuICAgICAqL1xuICAgIHRoaXMuY2FsbHNUb0FjdGlvbiA9IGRhdGEuY2FsbHNUb0FjdGlvbiB8fCBbXTtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYW4gYWNjb3JkaWFuIHJlc3VsdCBzaG91bGQgYmUgY29sbGFwc2VkIGJ5IGRlZmF1bHRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbGxhcHNlZCA9IGRhdGEuY29sbGFwc2VkIHx8IHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlc3VsdEZhY3RvcnkgKi9cblxuaW1wb3J0IFJlc3VsdCBmcm9tICcuL3Jlc3VsdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdEZhY3Rvcnkge1xuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIFJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBJbmNsdWRlcyBkZWZhdWx0IG1hcHBpbmdzIG9mIEdvb2dsZUN1c3RvbVNlYXJjaEVuZ2luZSByZXN1bHRzIHRvXG4gICAqIHRoZSBmaWVsZHMgZXhwb3NlZCBieSB0aGUgdGVtcGxhdGUuXG4gICAqIEBwYXJhbSByZXN1bHRzRGF0YSAge0FycmF5fSBleHBlY3RlZCBmb3JtYXQ6IHsgZGF0YTogeyAuLi4gfSwgaGlnaGxpZ2h0ZWRGaWVsZHM6IHsgLi4uIH19XG4gICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn0gZm9ybWF0dGVycyBUaGUgZm9ybWF0dGVycyB0byBhcHBseSB0byB0aGUgcmVzdWx0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbElkIFRoZSB2ZXJ0aWNhbCBvZiB0aGVzZSByZXN1bHRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgQmFja2VuZCBzb3VyY2Ugb2YgdGhlc2UgcmVzdWx0c1xuICAgKiBAcmV0dXJucyB7UmVzdWx0W119XG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzdWx0c0RhdGEsIGZvcm1hdHRlcnMsIHZlcnRpY2FsSWQsIHNvdXJjZSkge1xuICAgIGxldCByZXN1bHRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gVE9ETyB1c2UgcmVzdWx0RGF0YS5oaWdobGlnaHRlZEZpZWxkcyB0b1xuICAgICAgLy8gdHJhbnNmb3JtIHJlc3VsdERhdGEuZGF0YSBpbnRvIGh0bWwtZnJpZW5kbHkgc3RyaW5ncyB0aGF0IGhpZ2hsaWdodCB2YWx1ZXMuXG4gICAgICAvLyBDaGVjayBmb3IgbmV3IGRhdGEgZm9ybWF0LCBvdGhlcndpc2UgZmFsbGJhY2sgdG8gbGVnYWN5XG5cbiAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHRzRGF0YVtpXS5kYXRhIHx8IHJlc3VsdHNEYXRhW2ldO1xuICAgICAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IHt9O1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGZvcm1hdHRlcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoW2tleSwgdmFsXSkgPT4ge1xuICAgICAgICAgIGlmIChmb3JtYXR0ZXJzW2tleV0pIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZERhdGFba2V5XSA9IGZvcm1hdHRlcnNba2V5XSh2YWwsIGRhdGEsIHZlcnRpY2FsSWQsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHNvdXJjZSkge1xuICAgICAgICBjYXNlICdHT09HTEVfQ1NFJzpcbiAgICAgICAgICByZXN1bHRzLnB1c2goUmVzdWx0RmFjdG9yeS5mcm9tR29vZ2xlQ3VzdG9tU2VhcmNoRW5naW5lKGRhdGEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQklOR19DU0UnOlxuICAgICAgICAgIHJlc3VsdHMucHVzaChSZXN1bHRGYWN0b3J5LmZyb21CaW5nQ3VzdG9tU2VhcmNoRW5naW5lKGRhdGEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnWkVOREVTSyc6XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKFJlc3VsdEZhY3RvcnkuZnJvbVplbmRlc2tTZWFyY2hFbmdpbmUoZGF0YSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBTEdPTElBJzpcbiAgICAgICAgICByZXN1bHRzLnB1c2goUmVzdWx0RmFjdG9yeS5mcm9tQWxnb2xpYVNlYXJjaEVuZ2luZShkYXRhKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKFJlc3VsdEZhY3RvcnkuZnJvbUdlbmVyaWMoZGF0YSwgZm9ybWF0dGVkRGF0YSwgaSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIEFQSSByZXN1bHQgb2JqZWN0IGludG8gYSBnZW5lcmljIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcGFyYW0gZm9ybWF0dGVkRGF0YVxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICogQHJldHVybnMge1Jlc3VsdH1cbiAgICovXG4gIHN0YXRpYyBmcm9tR2VuZXJpYyAoZGF0YSwgZm9ybWF0dGVkRGF0YSwgaW5kZXgpIHtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh7XG4gICAgICByYXc6IGRhdGEsXG4gICAgICBmb3JtYXR0ZWQ6IGZvcm1hdHRlZERhdGEsXG4gICAgICB0aXRsZTogZm9ybWF0dGVkRGF0YS5uYW1lIHx8IGRhdGEubmFtZSxcbiAgICAgIGRldGFpbHM6IGZvcm1hdHRlZERhdGEuZGVzY3JpcHRpb24gfHwgdGhpcy50cnVuY2F0ZShkYXRhLmRlc2NyaXB0aW9uKSxcbiAgICAgIGxpbms6IGRhdGEud2Vic2l0ZSxcbiAgICAgIGlkOiBkYXRhLmlkLFxuICAgICAgb3JkaW5hbDogaW5kZXggKyAxXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBNYXBzIHZpZXcgbW9kZWwgZmllbGRzIGJhc2VkIG9uIHRoZSBBUEkgZGF0YSBmb3IgYSBHb29nbGUgQ3VzdG9tIFNlYXJjaCBFbmdpbmUgb2JqZWN0LlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0fVxuICAgKi9cbiAgc3RhdGljIGZyb21Hb29nbGVDdXN0b21TZWFyY2hFbmdpbmUgKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh7XG4gICAgICByYXc6IGRhdGEsXG4gICAgICB0aXRsZTogZGF0YS5odG1sVGl0bGUucmVwbGFjZSgvKDwoW14+XSspPikvaWcsICcnKSxcbiAgICAgIGRldGFpbHM6IGRhdGEuaHRtbFNuaXBwZXQsXG4gICAgICBsaW5rOiBkYXRhLmxpbmtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBBUEkgcmVzdWx0IG9iamVjdCBpbnRvIGEgcmVzdWx0IHZpZXcgbW9kZWwuXG4gICAqIE1hcHMgdmlldyBtb2RlbCBmaWVsZHMgYmFzZWQgb24gdGhlIEFQSSBkYXRhIGZvciBhIEJpbmcgQ3VzdG9tIFNlYXJjaCBFbmdpbmUgb2JqZWN0LlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0fVxuICAgKi9cbiAgc3RhdGljIGZyb21CaW5nQ3VzdG9tU2VhcmNoRW5naW5lIChkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBSZXN1bHQoe1xuICAgICAgcmF3OiBkYXRhLFxuICAgICAgdGl0bGU6IGRhdGEubmFtZSxcbiAgICAgIGRldGFpbHM6IGRhdGEuc25pcHBldCxcbiAgICAgIGxpbms6IGRhdGEudXJsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBNYXBzIHZpZXcgbW9kZWwgZmllbGRzIGJhc2VkIG9uIHRoZSBBUEkgZGF0YSBmb3IgYSBaZW5kZXNrIFNlYXJjaCBFbmdpbmUgb2JqZWN0LlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0fVxuICAgKi9cbiAgc3RhdGljIGZyb21aZW5kZXNrU2VhcmNoRW5naW5lIChkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBSZXN1bHQoe1xuICAgICAgcmF3OiBkYXRhLFxuICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgICBkZXRhaWxzOiBkYXRhLnNuaXBwZXQsXG4gICAgICBsaW5rOiBkYXRhLmh0bWxfdXJsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBNYXBzIHZpZXcgbW9kZWwgZmllbGRzIGJhc2VkIG9uIHRoZSBBUEkgZGF0YSBmb3IgYSBBbGdvbGlhIFNlYXJjaCBFbmdpbmUgb2JqZWN0LlxuICAgKiBEZXRhaWxzIGZpZWxkIGlzIHNldCB0byBvYmplY3RJRCBzaW5jZSByZXNwb25zZSBoYXMgb25seSBvbmUgZ2VuZXJhbCBmaWVsZCBvYmplY3RJRC5cbiAgICogQHBhcmFtIGRhdGFcbiAgICogQHJldHVybnMge1Jlc3VsdH1cbiAgICovXG4gIHN0YXRpYyBmcm9tQWxnb2xpYVNlYXJjaEVuZ2luZSAoZGF0YSkge1xuICAgIHJldHVybiBuZXcgUmVzdWx0KHtcbiAgICAgIHJhdzogZGF0YSxcbiAgICAgIGRldGFpbHM6IGRhdGEub2JqZWN0SUQsXG4gICAgICBpZDogZGF0YS5vYmplY3RJRFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRydW5jYXRlcyBzdHJpbmdzIHRvIDI1MCBjaGFyYWN0ZXJzLCBhdHRlbXB0aW5nIHRvIHByZXNlcnZlIHdob2xlIHdvcmRzXG4gICAqIEBwYXJhbSBzdHIge3N0cmluZ30gdGhlIHN0cmluZyB0byB0cnVuY2F0ZVxuICAgKiBAcGFyYW0gbGltaXQge051bWJlcn0gdGhlIG1heGltdW0gY2hhcmFjdGVyIGxlbmd0aCB0byByZXR1cm5cbiAgICogQHBhcmFtIHRyYWlsaW5nIHtzdHJpbmd9IGEgdHJhaWxpbmcgc3RyaW5nIHRvIGRlbm90ZSB0cnVuY2F0aW9uLCBlLmcuICcuLi4nXG4gICAqIEBwYXJhbSBzZXAge3N0cmluZ30gdGhlIHdvcmQgc2VwYXJhdG9yXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgdHJ1bmNhdGUgKHN0ciwgbGltaXQgPSAyNTAsIHRyYWlsaW5nID0gJy4uLicsIHNlcCA9ICcgJykge1xuICAgIGlmICghc3RyIHx8IHN0ci5sZW5ndGggPD0gbGltaXQpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgLy8gVE9ETyAoYm1jZ2lubmlzKTogc3BsaXQgcHVuY3R1YXRpb24gdG9vIHNvIHdlIGRvbid0IGVuZCB1cCB3aXRoIFwiZm9vLC4uLlwiXG4gICAgY29uc3Qgd29yZHMgPSBzdHIuc3BsaXQoc2VwKTtcbiAgICBjb25zdCBtYXggPSBsaW1pdCAtIHRyYWlsaW5nLmxlbmd0aDtcbiAgICBsZXQgdHJ1bmNhdGVkID0gJyc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB3b3JkID0gd29yZHNbaV07XG4gICAgICBpZiAodHJ1bmNhdGVkLmxlbmd0aCArIHdvcmQubGVuZ3RoID4gbWF4IHx8XG4gICAgICAgIChpICE9PSAwICYmIHRydW5jYXRlZC5sZW5ndGggKyB3b3JkLmxlbmd0aCArIHNlcC5sZW5ndGggPiBtYXgpKSB7XG4gICAgICAgIHRydW5jYXRlZCArPSB0cmFpbGluZztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHRydW5jYXRlZCArPSBpID09PSAwID8gd29yZCA6IHNlcCArIHdvcmQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydW5jYXRlZDtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VjdGlvbiAqL1xuXG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcbmltcG9ydCBSZXN1bHRGYWN0b3J5IGZyb20gJy4vcmVzdWx0ZmFjdG9yeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3RvciAoZGF0YSwgdXJsLCBmb3JtYXR0ZXJzKSB7XG4gICAgdGhpcy5zZWFyY2hTdGF0ZSA9IFNlYXJjaFN0YXRlcy5TRUFSQ0hfQ09NUExFVEU7XG4gICAgdGhpcy52ZXJ0aWNhbENvbmZpZ0lkID0gZGF0YS52ZXJ0aWNhbENvbmZpZ0lkIHx8IG51bGw7XG4gICAgdGhpcy5yZXN1bHRzQ291bnQgPSBkYXRhLnJlc3VsdHNDb3VudCB8fCAwO1xuICAgIHRoaXMuZW5jb2RlZFN0YXRlID0gZGF0YS5lbmNvZGVkU3RhdGUgfHwgJyc7XG4gICAgdGhpcy5hcHBsaWVkUXVlcnlGaWx0ZXJzID0gQXBwbGllZFF1ZXJ5RmlsdGVyLmZyb20oZGF0YS5hcHBsaWVkUXVlcnlGaWx0ZXJzKTtcbiAgICB0aGlzLmZhY2V0cyA9IGRhdGEuZmFjZXRzIHx8IG51bGw7XG4gICAgdGhpcy5yZXN1bHRzID0gUmVzdWx0RmFjdG9yeS5mcm9tKGRhdGEucmVzdWx0cywgZm9ybWF0dGVycywgdGhpcy52ZXJ0aWNhbENvbmZpZ0lkLCBkYXRhLnNvdXJjZSk7XG4gICAgdGhpcy5tYXAgPSBTZWN0aW9uLnBhcnNlTWFwKGRhdGEucmVzdWx0cyk7XG4gICAgdGhpcy52ZXJ0aWNhbFVSTCA9IHVybCB8fCBudWxsO1xuICB9XG5cbiAgc3RhdGljIHBhcnNlTWFwIChyZXN1bHRzKSB7XG4gICAgbGV0IG1hcE1hcmtlcnMgPSBbXTtcblxuICAgIGxldCBjZW50ZXJDb29yZGluYXRlcyA9IHt9O1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCByZXN1bHRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAvLyBUT0RPKGJpbGx5KSBSZW1vdmUgbGVnYWN5IGZhbGxiYWNrIGZyb20gYWxsIGRhdGEgZm9ybWF0XG4gICAgICBsZXQgcmVzdWx0ID0gcmVzdWx0c1tqXS5kYXRhIHx8IHJlc3VsdHNbal07XG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUpIHtcbiAgICAgICAgaWYgKCFjZW50ZXJDb29yZGluYXRlcy5sYXRpdHVkZSkge1xuICAgICAgICAgIGNlbnRlckNvb3JkaW5hdGVzID0ge1xuICAgICAgICAgICAgbGF0aXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubGF0aXR1ZGUsXG4gICAgICAgICAgICBsb25naXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubG9uZ2l0dWRlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBtYXBNYXJrZXJzLnB1c2goe1xuICAgICAgICAgIGl0ZW06IHJlc3VsdCxcbiAgICAgICAgICBsYWJlbDogbWFwTWFya2Vycy5sZW5ndGggKyAxLFxuICAgICAgICAgIGxhdGl0dWRlOiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlLmxhdGl0dWRlLFxuICAgICAgICAgIGxvbmdpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sb25naXR1ZGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICdtYXBDZW50ZXInOiBjZW50ZXJDb29yZGluYXRlcyxcbiAgICAgICdtYXBNYXJrZXJzJzogbWFwTWFya2Vyc1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc2VjdGlvbiBmcm9tIHRoZSBwcm92aWRlZCBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBtb2R1bGVzIFRoZSByZXN1bHQgbW9kdWxlc1xuICAgKiBAcGFyYW0ge09iamVjdH0gdXJscyBUaGUgdGFiIHVybHNcbiAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fSBmb3JtYXR0ZXJzIEZpZWxkIGZvcm1hdHRlcnMgZm9yIHJlc3VsdHNcbiAgICovXG4gIHN0YXRpYyBmcm9tIChtb2R1bGVzLCB1cmxzLCBmb3JtYXR0ZXJzKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gW107XG4gICAgaWYgKCFtb2R1bGVzKSB7XG4gICAgICByZXR1cm4gc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmV3IFNlY3Rpb24obW9kdWxlcywgbnVsbCwgZm9ybWF0dGVycyk7XG4gICAgfVxuXG4gICAgLy8gT3VyIHNlY3Rpb25zIHNob3VsZCBjb250YWluIGEgcHJvcGVydHkgb2YgbWFwTWFya2VyIG9iamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNlY3Rpb25zLnB1c2goXG4gICAgICAgIG5ldyBTZWN0aW9uKFxuICAgICAgICAgIG1vZHVsZXNbaV0sXG4gICAgICAgICAgdXJsc1ttb2R1bGVzW2ldLnZlcnRpY2FsQ29uZmlnSWRdLFxuICAgICAgICAgIGZvcm1hdHRlcnNcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VjdGlvbnM7XG4gIH1cbn1cblxuY2xhc3MgQXBwbGllZFF1ZXJ5RmlsdGVyIHtcbiAgLy8gU3VwcG9ydCBsZWdhY3kgbW9kZWwgYW5kIG5ldyBtb2RlbCB1bnRpbCBmdWxseSBtaWdyYXRlZC5cbiAgLy8gVE9ETyhiaWxseSkgUmVtb3ZlIHRoZSBsZWZ0IGV4cHJlc3Npb24gZHVyaW5nIGFzc2lnbm1lbnQgd2hlbiBtaWdyYXRlZC5cbiAgY29uc3RydWN0b3IgKGFwcGxpZWRRdWVyeUZpbHRlcikge1xuICAgIHRoaXMua2V5ID0gYXBwbGllZFF1ZXJ5RmlsdGVyLmtleSB8fCBhcHBsaWVkUXVlcnlGaWx0ZXIuZGlzcGxheUtleTtcbiAgICB0aGlzLnZhbHVlID0gYXBwbGllZFF1ZXJ5RmlsdGVyLnZhbHVlIHx8IGFwcGxpZWRRdWVyeUZpbHRlci5kaXNwbGF5VmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbSAoYXBwbGllZFF1ZXJ5RmlsdGVycykge1xuICAgIGxldCBmaWx0ZXJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBsaWVkUXVlcnlGaWx0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmaWx0ZXJzLnB1c2gobmV3IEFwcGxpZWRRdWVyeUZpbHRlcihhcHBsaWVkUXVlcnlGaWx0ZXJzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXJzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBVbml2ZXJzYWxSZXN1bHRzICovXG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vc2VjdGlvbic7XG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pdmVyc2FsUmVzdWx0cyB7XG4gIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgdGhpcy5xdWVyeUlkID0gZGF0YS5xdWVyeUlkIHx8IG51bGw7XG4gICAgdGhpcy5zZWN0aW9ucyA9IGRhdGEuc2VjdGlvbnMgfHwgW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc2VhcmNoLCB1c2VkIHRvIHJlbmRlciBkaWZmZXJlbnQgdGVtcGxhdGVzIGJlZm9yZSwgZHVyaW5nLFxuICAgICAqIGFuZCBhZnRlciBsb2FkaW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnNlYXJjaFN0YXRlID0gZGF0YS5zZWFyY2hTdGF0ZSB8fCBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB1bml2ZXJzYWwgcmVzdWx0cyBmcm9tIHNlcnZlciBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZSBUaGUgc2VydmVyIHJlc3BvbnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB1cmxzIFRoZSB0YWIgdXJsc1xuICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59IGZvcm1hdHRlcnMgVGhlIGZpZWxkIGZvcm1hdHRlcnMgdG8gdXNlXG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UsIHVybHMsIGZvcm1hdHRlcnMpIHtcbiAgICByZXR1cm4gbmV3IFVuaXZlcnNhbFJlc3VsdHMoe1xuICAgICAgcXVlcnlJZDogcmVzcG9uc2UucXVlcnlJZCxcbiAgICAgIHNlY3Rpb25zOiBTZWN0aW9uLmZyb20ocmVzcG9uc2UubW9kdWxlcywgdXJscywgZm9ybWF0dGVycylcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBVbml2ZXJ2YWxSZXN1bHRzIG9iamVjdCByZXByZXNlbnRpbmcgbG9hZGluZyByZXN1bHRzXG4gICAqIEByZXR1cm4ge1VuaXZlcnNhbFJlc3VsdHN9XG4gICAqL1xuICBzdGF0aWMgc2VhcmNoTG9hZGluZyAoKSB7XG4gICAgcmV0dXJuIG5ldyBVbml2ZXJzYWxSZXN1bHRzKHsgc2VhcmNoU3RhdGU6IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRGlyZWN0QW5zd2VyICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdEFuc3dlciB7XG4gIGNvbnN0cnVjdG9yIChkaXJlY3RBbnN3ZXIgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGlyZWN0QW5zd2VyKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERpcmVjdEFuc3dlciBtb2RlbCBmcm9tIHRoZSBnaXZlbiBzZXJ2ZXIgZGF0YSBhbmQgZm9ybWF0dGVyc1xuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2UgVGhlIHNlcnZlciBkaXJlY3QgYW5zd2VyXG4gICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn0gZm9ybWF0dGVycyBUaGUgZm9ybWF0dGVycyB0byBhcHBseSB0byB0aGlzIGRpcmVjdCBhbnN3ZXJcbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSwgZm9ybWF0dGVycykge1xuICAgIGNvbnN0IGRhdGEgPSB7IC4uLnJlc3BvbnNlIH07XG4gICAgY29uc3QgeyBhbnN3ZXIsIHJlbGF0ZWRJdGVtIH0gPSBkYXRhO1xuXG4gICAgaWYgKGFuc3dlciAmJiBmb3JtYXR0ZXJzW2Fuc3dlci5maWVsZEFwaU5hbWVdKSB7XG4gICAgICBhbnN3ZXIudmFsdWUgPSBmb3JtYXR0ZXJzW2Fuc3dlci5maWVsZEFwaU5hbWVdKFxuICAgICAgICBhbnN3ZXIudmFsdWUsXG4gICAgICAgIHJlbGF0ZWRJdGVtLmRhdGEuZmllbGRWYWx1ZXMsXG4gICAgICAgIHJlbGF0ZWRJdGVtLnZlcnRpY2FsQ29uZmlnSWQsXG4gICAgICAgIHRydWUpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGlyZWN0QW5zd2VyKGRhdGEpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBOYXZpZ2F0aW9uICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24ge1xuICBjb25zdHJ1Y3RvciAodGFiT3JkZXIpIHtcbiAgICB0aGlzLnRhYk9yZGVyID0gdGFiT3JkZXIgfHwgW107XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChtb2R1bGVzKSB7XG4gICAgbGV0IG5hdiA9IFtdO1xuICAgIGlmICghbW9kdWxlcyB8fCAhQXJyYXkuaXNBcnJheShtb2R1bGVzKSkge1xuICAgICAgcmV0dXJuIG5hdjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBuYXYucHVzaChtb2R1bGVzW2ldLnZlcnRpY2FsQ29uZmlnSWQpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE5hdmlnYXRpb24obmF2KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgVmVydGljYWxSZXN1bHRzICovXG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vc2VjdGlvbic7XG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGljYWxSZXN1bHRzIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyBzZWFyY2hTdGF0ZTogU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURSB9LCBkYXRhKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZCB0aGUgcHJvdmlkZWQgcmVzdWx0cyB0byB0aGUgY3VycmVudCByZXN1bHRzXG4gICAqIEBwYXJhbSB7VmVydGljYWxSZXN1bHRzfSByZXN1bHRzIHRoZSByZXN1bHRzIHRvIGFwcGVuZCB0byB0aGUgY3VycmVudCByZXN1bHRzXG4gICAqL1xuICBhcHBlbmQgKHJlc3VsdHMpIHtcbiAgICBjb25zdCBtZXJnZWQgPSB7IC4uLnRoaXMgfTtcbiAgICBtZXJnZWQucmVzdWx0cyA9IHRoaXMucmVzdWx0cy5jb25jYXQocmVzdWx0cy5yZXN1bHRzKTtcbiAgICBtZXJnZWQubWFwLm1hcE1hcmtlcnMgPSB0aGlzLm1hcC5tYXBNYXJrZXJzLmNvbmNhdChyZXN1bHRzLm1hcC5tYXBNYXJrZXJzKTtcbiAgICByZXR1cm4gbmV3IFZlcnRpY2FsUmVzdWx0cyhtZXJnZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB2ZXJ0aWNhbCByZXN1bHRzIGZyb20gc2VydmVyIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlIFRoZSBzZXJ2ZXIgcmVzcG9uc2VcbiAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fSBmb3JtYXR0ZXJzIFRoZSBmaWVsZCBmb3JtYXR0ZXJzIHRvIHVzZVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlLCBmb3JtYXR0ZXJzKSB7XG4gICAgcmV0dXJuIG5ldyBWZXJ0aWNhbFJlc3VsdHMoU2VjdGlvbi5mcm9tKHJlc3BvbnNlLCBudWxsLCBmb3JtYXR0ZXJzKSk7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0IGEgVmVydGljYWxSZXN1bHRzIG9iamVjdCByZXByZXNlbnRpbmcgbG9hZGluZyByZXN1bHRzXG4gICAqIEByZXR1cm4ge1ZlcnRpY2FsUmVzdWx0c31cbiAgICovXG4gIHN0YXRpYyBzZWFyY2hMb2FkaW5nICgpIHtcbiAgICByZXR1cm4gbmV3IFZlcnRpY2FsUmVzdWx0cyh7IHNlYXJjaFN0YXRlOiBTZWFyY2hTdGF0ZXMuU0VBUkNIX0xPQURJTkcgfSk7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU3BlbGxDaGVjayAqL1xuXG5pbXBvcnQgSGlnaGxpZ2h0ZWRWYWx1ZSBmcm9tICcuL2hpZ2hsaWdodGVkdmFsdWUnO1xuXG4vKipcbiAqIFNwZWxsQ2hlY2sgaXMgdGhlIGNvcmUgc3RhdGUgbW9kZWxcbiAqIHRvIHBvd2VyIHRoZSBTcGVsbENoZWNrIGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGVsbENoZWNrIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgb3JpZ2luYWwgcXVlcnlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlcnkgPSBkYXRhLnF1ZXJ5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29ycmVjdGVkIHF1ZXJ5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmNvcnJlY3RlZFF1ZXJ5ID0gZGF0YS5jb3JyZWN0ZWRRdWVyeSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvcnJlY3RlZCBxdWVyeSB3aXRoIGhpZ2hsaWdodGVkIHRhZ3NcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuY29ycmVjdGVkUXVlcnlEaXNwbGF5ID0gZGF0YS5jb3JyZWN0ZWRRdWVyeURpc3BsYXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzcGVsbCBjaGVjayB0eXBlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnR5cGUgPSBkYXRhLnR5cGUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFNob3VsZCBzaG93IHNwZWxsIGNoZWNrIG9yIG5vdFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuc2hvdWxkU2hvdyA9IHRoaXMuY29ycmVjdGVkUXVlcnkgIT09IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc3BlbGwgY2hlY2sgbW9kZWwgZnJvbSB0aGUgcHJvdmlkZWQgZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2UgVGhlIHNwZWxsIGNoZWNrIHJlc3BvbnNlXG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UpIHtcbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBTcGVsbENoZWNrKHtcbiAgICAgIHF1ZXJ5OiByZXNwb25zZS5vcmlnaW5hbFF1ZXJ5LFxuICAgICAgY29ycmVjdGVkUXVlcnk6IHJlc3BvbnNlLmNvcnJlY3RlZFF1ZXJ5LFxuICAgICAgY29ycmVjdGVkUXVlcnlEaXNwbGF5OiBuZXcgSGlnaGxpZ2h0ZWRWYWx1ZShyZXNwb25zZS5jb3JyZWN0ZWRRdWVyeSkuZ2V0KCksXG4gICAgICB0eXBlOiByZXNwb25zZS50eXBlXG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFN0b3JhZ2VLZXlzICovXG5cbi8qKlxuICogU3RvcmFnZUtleXMgaXMgYW4gRU5VTSBhcmUgY29uc2lkZXJlZCB0aGUgcm9vdCBjb250ZXh0XG4gKiBmb3IgaG93IGRhdGEgaXMgc3RvcmVkIGFuZCBzY29wZWQgaW4gdGhlIHN0b3JhZ2UuXG4gKlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBOQVZJR0FUSU9OOiAnbmF2aWdhdGlvbicsXG4gIFVOSVZFUlNBTF9SRVNVTFRTOiAndW5pdmVyc2FsLXJlc3VsdHMnLFxuICBWRVJUSUNBTF9SRVNVTFRTOiAndmVydGljYWwtcmVzdWx0cycsXG4gIEFVVE9DT01QTEVURTogJ2F1dG9jb21wbGV0ZScsXG4gIERJUkVDVF9BTlNXRVI6ICdkaXJlY3QtYW5zd2VyJyxcbiAgRklMVEVSOiAnZmlsdGVyJyxcbiAgUVVFUlk6ICdxdWVyeScsXG4gIFFVRVJZX0lEOiAncXVlcnktaWQnLFxuICBGQUNFVF9GSUxURVI6ICdmYWNldC1maWx0ZXInLFxuICBEWU5BTUlDX0ZJTFRFUlM6ICdkeW5hbWljLWZpbHRlcnMnLFxuICBTRUFSQ0hfTElNSVQ6ICdzZWFyY2gtbGltaXQnLFxuICBQQVJBTVM6ICdwYXJhbXMnLFxuICBHRU9MT0NBVElPTjogJ2dlb2xvY2F0aW9uJyxcbiAgSU5URU5UUzogJ2ludGVudHMnLFxuICBRVUVTVElPTl9TVUJNSVNTSU9OOiAncXVlc3Rpb24tc3VibWlzc2lvbicsXG4gIFNQRUxMX0NIRUNLOiAnc3BlbGwtY2hlY2snXG59O1xuIiwiLyoqIEBtb2R1bGUgRHluYW1pY0ZpbHRlcnMgKi9cblxuLyoqXG4gKiBNb2RlbCByZXByZXNlbnRpbmcgYSBzZXQgb2YgZHluYW1pYyBmaWx0ZXJzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNGaWx0ZXJzIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBmaWx0ZXJzIHRoaXMgbW9kZWwgaG9sZHNcbiAgICAgKiBAdHlwZSB7e2xhYmVsOiBzdHJpbmcsIGZpZWxkSWQ6IHN0cmluZywgb3B0aW9uczogb2JqZWN0W119fVxuICAgICAqL1xuICAgIHRoaXMuZmlsdGVycyA9IGRhdGEuZmlsdGVycyB8fCBbXTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9yZ2FuaXplICdmYWNldHMnIGZyb20gdGhlIGFwaSByZXNwb25zZSBpbnRvIGR5bmFtaWMgZmlsdGVyc1xuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2UgZHluYW1pYyBmaWx0ZXIgcmVzcG9uc2UgZnJvbSB0aGUgYXBpXG4gICAqIEByZXR1cm5zIHtEeW5hbWljRmlsdGVyc31cbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSkge1xuICAgIGNvbnN0IHsgZmFjZXRzIH0gPSByZXNwb25zZTtcbiAgICBjb25zdCBkeW5hbWljRmlsdGVycyA9IGZhY2V0cy5tYXAoZiA9PiAoe1xuICAgICAgbGFiZWw6IGZbJ2Rpc3BsYXlOYW1lJ10sXG4gICAgICBmaWVsZElkOiBmWydmaWVsZElkJ10sXG4gICAgICBvcHRpb25zOiBmLm9wdGlvbnMubWFwKG8gPT4gKHtcbiAgICAgICAgbGFiZWw6IG9bJ2Rpc3BsYXlOYW1lJ10sXG4gICAgICAgIGNvdW50TGFiZWw6IG9bJ2NvdW50J10sXG4gICAgICAgIHNlbGVjdGVkOiBvWydzZWxlY3RlZCddLFxuICAgICAgICBmaWx0ZXI6IG9bJ2ZpbHRlciddXG4gICAgICB9KSlcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gbmV3IER5bmFtaWNGaWx0ZXJzKHsgZmlsdGVyczogZHluYW1pY0ZpbHRlcnMgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaEludGVudHMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoSW50ZW50cyB7XG4gIGNvbnN0cnVjdG9yIChpbnRlbnRzKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGludGVudCB0byBmaW5kIHJlc3VsdHMgYmFzZWQgb24gdGhlIHVzZXIncyBsb2NhdGlvblxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMubmVhck1lID0gaW50ZW50cy5uZWFyTWU7XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBTZWFyY2hJbnRlbnRzIGZyb20gc2VydmVyIHJlc3BvbnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZSBUaGUgc2VydmVyIHJlc3BvbnNlIGludGVudHNcbiAgICogQHJldHVybnMge1NlYXJjaEludGVudHN9XG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UpIHtcbiAgICBjb25zdCBpbnRlbnRzID0gcmVzcG9uc2UgfHwgW107XG5cbiAgICByZXR1cm4gbmV3IFNlYXJjaEludGVudHMoe1xuICAgICAgbmVhck1lOiBpbnRlbnRzLmluY2x1ZGVzKCdORUFSX01FJylcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VhcmNoRGF0YVRyYW5zZm9ybWVyICovXG5cbmltcG9ydCBVbml2ZXJzYWxSZXN1bHRzIGZyb20gJy4uL21vZGVscy91bml2ZXJzYWxyZXN1bHRzJztcbmltcG9ydCBEaXJlY3RBbnN3ZXIgZnJvbSAnLi4vbW9kZWxzL2RpcmVjdGFuc3dlcic7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9tb2RlbHMvbmF2aWdhdGlvbic7XG5pbXBvcnQgVmVydGljYWxSZXN1bHRzIGZyb20gJy4uL21vZGVscy92ZXJ0aWNhbHJlc3VsdHMnO1xuaW1wb3J0IFNwZWxsQ2hlY2sgZnJvbSAnLi4vbW9kZWxzL3NwZWxsY2hlY2snO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IER5bmFtaWNGaWx0ZXJzIGZyb20gJy4uL21vZGVscy9keW5hbWljZmlsdGVycyc7XG5pbXBvcnQgU2VhcmNoSW50ZW50cyBmcm9tICcuLi9tb2RlbHMvc2VhcmNoaW50ZW50cyc7XG5cbi8qKlxuICogQSBEYXRhIFRyYW5zZm9ybWVyIHRoYXQgdGFrZXMgdGhlIHJlc3BvbnNlIG9iamVjdCBmcm9tIGEgU2VhcmNoIHJlcXVlc3RcbiAqIEFuZCB0cmFuc2Zvcm1zIGluIHRvIGEgZnJvbnQtZW5kIG9yaWVudGVkIGRhdGEgc3RydWN0dXJlIHRoYXQgb3VyXG4gKiBjb21wb25lbnQgbGlicmFyeSBhbmQgY29yZSBzdG9yYWdlIHVuZGVyc3RhbmQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaERhdGFUcmFuc2Zvcm1lciB7XG4gIHN0YXRpYyB0cmFuc2Zvcm0gKGRhdGEsIHVybHMgPSB7fSwgZm9ybWF0dGVycykge1xuICAgIGxldCByZXNwb25zZSA9IGRhdGEucmVzcG9uc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtTdG9yYWdlS2V5cy5RVUVSWV9JRF06IHJlc3BvbnNlLnF1ZXJ5SWQsXG4gICAgICBbU3RvcmFnZUtleXMuTkFWSUdBVElPTl06IE5hdmlnYXRpb24uZnJvbShyZXNwb25zZS5tb2R1bGVzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSXTogRGlyZWN0QW5zd2VyLmZyb20ocmVzcG9uc2UuZGlyZWN0QW5zd2VyLCBmb3JtYXR0ZXJzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUU106IFVuaXZlcnNhbFJlc3VsdHMuZnJvbShyZXNwb25zZSwgdXJscywgZm9ybWF0dGVycyksXG4gICAgICBbU3RvcmFnZUtleXMuSU5URU5UU106IFNlYXJjaEludGVudHMuZnJvbShyZXNwb25zZS5zZWFyY2hJbnRlbnRzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5TUEVMTF9DSEVDS106IFNwZWxsQ2hlY2suZnJvbShyZXNwb25zZS5zcGVsbENoZWNrKVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgdHJhbnNmb3JtVmVydGljYWwgKGRhdGEsIGZvcm1hdHRlcnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXTogZGF0YS5yZXNwb25zZS5xdWVyeUlkLFxuICAgICAgW1N0b3JhZ2VLZXlzLk5BVklHQVRJT05dOiBuZXcgTmF2aWdhdGlvbigpLCAvLyBWZXJ0aWNhbCBkb2Vzbid0IHJlc3BvbmQgd2l0aCBvcmRlcmluZywgc28gdXNlIGVtcHR5IG5hdi5cbiAgICAgIFtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXTogVmVydGljYWxSZXN1bHRzLmZyb20oZGF0YS5yZXNwb25zZSwgZm9ybWF0dGVycyksXG4gICAgICBbU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTXTogRHluYW1pY0ZpbHRlcnMuZnJvbShkYXRhLnJlc3BvbnNlKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5JTlRFTlRTXTogU2VhcmNoSW50ZW50cy5mcm9tKGRhdGEucmVzcG9uc2Uuc2VhcmNoSW50ZW50cyksXG4gICAgICBbU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0tdOiBTcGVsbENoZWNrLmZyb20oZGF0YS5yZXNwb25zZS5zcGVsbENoZWNrKVxuICAgIH07XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFF1ZXN0aW9uU3VibWlzc2lvbiAqL1xuXG4vKipcbiAqIFF1ZXN0aW9uU3VibWlzc2lvbiBpcyB0aGUgY29yZSBzdGF0ZSBtb2RlbFxuICogdG8gcG93ZXIgdGhlIFF1ZXN0aW9uU3VibWlzc2lvbiBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb25TdWJtaXNzaW9uIHtcbiAgY29uc3RydWN0b3IgKHF1ZXN0aW9uID0ge30sIGVycm9ycykge1xuICAgIC8qKlxuICAgICAqIFRoZSBhdXRob3Igb2YgdGhlIHF1ZXN0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSBxdWVzdGlvbi5uYW1lIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgcXVlc3Rpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZW1haWwgPSBxdWVzdGlvbi5lbWFpbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgcHJpdmFjeSBwb2xpY3kgd2FzIGFwcHJvdmVkXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5wcml2YWN5UG9saWN5ID0gcXVlc3Rpb24ucHJpdmFjeVBvbGljeSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXN0aW9uIHRvIGJlIHNlbnQgdG8gdGhlIHNlcnZlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5xdWVzdGlvblRleHQgPSBxdWVzdGlvbi5xdWVzdGlvblRleHQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFsdGVybmF0aXZlIHF1ZXN0aW9uIG1ldGEgaW5mb3JtYXRpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlc3Rpb25EZXNjcmlwdGlvbiA9IHF1ZXN0aW9uLnF1ZXN0aW9uRGVzY3JpcHRpb24gfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIENvbnRhaW5zIGFueSBlcnJvcnMgYWJvdXQgdGhlIHF1ZXN0aW9uIHN1Ym1pc3Npb25cbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzIHx8IG51bGw7XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIHN1Ym1pdHRlZCAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXN0aW9uU3VibWl0dGVkOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBlcnJvcnMgKHF1ZXN0aW9uLCBlcnJvcnMpIHtcbiAgICByZXR1cm4gUXVlc3Rpb25TdWJtaXNzaW9uKHF1ZXN0aW9uLCBlcnJvcnMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBDb3JlICovXG5cbmltcG9ydCBTZWFyY2hBcGkgZnJvbSAnLi9zZWFyY2gvc2VhcmNoYXBpJztcbmltcG9ydCBBdXRvQ29tcGxldGVBcGkgZnJvbSAnLi9zZWFyY2gvYXV0b2NvbXBsZXRlYXBpJztcbmltcG9ydCBRdWVzdGlvbkFuc3dlckFwaSBmcm9tICcuL3NlYXJjaC9xdWVzdGlvbmFuc3dlcmFwaSc7XG5cbmltcG9ydCBTZWFyY2hEYXRhVHJhbnNmb3JtZXIgZnJvbSAnLi9zZWFyY2gvc2VhcmNoZGF0YXRyYW5zZm9ybWVyJztcblxuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4vc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgVmVydGljYWxSZXN1bHRzIGZyb20gJy4vbW9kZWxzL3ZlcnRpY2FscmVzdWx0cyc7XG5pbXBvcnQgVW5pdmVyc2FsUmVzdWx0cyBmcm9tICcuL21vZGVscy91bml2ZXJzYWxyZXN1bHRzJztcbmltcG9ydCBRdWVzdGlvblN1Ym1pc3Npb24gZnJvbSAnLi9tb2RlbHMvcXVlc3Rpb25zdWJtaXNzaW9uJztcblxuLyoqXG4gKiBDb3JlIGlzIHRoZSBtYWluIGFwcGxpY2F0aW9uIGNvbnRhaW5lciBmb3IgYWxsIG9mIHRoZSBuZXR3b3JrIGFuZCBzdG9yYWdlXG4gKiByZWxhdGVkIGJlaGF2aW9ycyBvZiB0aGUgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmUge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5hcGlLZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYGFwaUtleWAuIFR5cGUgbXVzdCBiZSB7c3RyaW5nfScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmV4cGVyaWVuY2VLZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYGV4cGVyaWVuY2VLZXlgLiBUeXBlIG11c3QgYmUge3N0cmluZ30nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IEFQSSBLZXkgdXNlZCBmb3IgYWxsIHJlcXVlc3RzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwaUtleSA9IGNvbmZpZy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IEFuc3dlcnMgS2V5IHVzZWQgZm9yIGFsbCByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9leHBlcmllbmNlS2V5ID0gY29uZmlnLmV4cGVyaWVuY2VLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYW5zd2VycyBjb25maWcgdmVyc2lvbiB0byB1c2UgZm9yIGFsbCByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9leHBlcmllbmNlVmVyc2lvbiA9IGNvbmZpZy5leHBlcmllbmNlVmVyc2lvbjtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjbGllbnQgbG9jYWxlIHVzZWQgZm9yIGFsbCByZXF1ZXN0cy4gSWYgbm90IHNwZWNpZmllZCwgZGVmYXVsdHMgdG8gXCJlblwiIChmb3JcbiAgICAgKiBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSkuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xvY2FsZSA9IGNvbmZpZy5sb2NhbGUgfHwgJ2VuJztcblxuICAgIC8qKlxuICAgICAqIEEgbWFwIG9mIGZpZWxkIGZvcm1hdHRlcnMgdXNlZCB0byBmb3JtYXQgcmVzdWx0cywgaWYgcHJlc2VudFxuICAgICAqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmllbGRGb3JtYXR0ZXJzID0gY29uZmlnLmZpZWxkRm9ybWF0dGVycyB8fCB7fTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjb3JlIGRhdGEgc3RvcmFnZSB0aGF0IHBvd2VycyB0aGUgVUlcbiAgICAgKiBAdHlwZSB7R2xvYmFsU3RvcmFnZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZSA9IGNvbmZpZy5nbG9iYWxTdG9yYWdlO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNvcmUgcGVyc2lzdGVudCBzdG9yYWdlXG4gICAgICogQHR5cGUge1BlcnNpc3RlbnRTdG9yYWdlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5wZXJzaXN0ZW50U3RvcmFnZSA9IGNvbmZpZy5wZXJzaXN0ZW50U3RvcmFnZTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIGNvbnRhaW5pbmcgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIFJFU1RmdWwgc2VhcmNoIEFQSVxuICAgICAqIEZvciBib3RoIHZlcnRpY2FsIGFuZCB1bml2ZXJzYWwgc2VhcmNoXG4gICAgICogQHR5cGUge1NlYXJjaH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaGVyID0gbmV3IFNlYXJjaEFwaSh7XG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIGV4cGVyaWVuY2VLZXk6IHRoaXMuX2V4cGVyaWVuY2VLZXksXG4gICAgICBleHBlcmllbmNlVmVyc2lvbjogdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24sXG4gICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3Rpb24gY29udGFpbmluZyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgUkVTVGZ1bCBhdXRvY29tcGxldGUgQVBJXG4gICAgICogRm9yIGZpbHRlciBzZWFyY2gsIHZlcnRpY2FsIGF1dG9jb21wbGV0ZSwgYW5kIHVuaXZlcnNhbCBhdXRvY29tcGxldGVcbiAgICAgKiBAdHlwZSB7QXV0b2NvbXBsZXRlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXV0b0NvbXBsZXRlID0gbmV3IEF1dG9Db21wbGV0ZUFwaSh7XG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIGV4cGVyaWVuY2VLZXk6IHRoaXMuX2V4cGVyaWVuY2VLZXksXG4gICAgICBleHBlcmllbmNlVmVyc2lvbjogdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24sXG4gICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3Rpb24gZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIFEmQSByZXN0IGludGVyZmFjZVxuICAgICAqIEB0eXBlIHtRdWVzdGlvbkFuc3dlckFwaX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3F1ZXN0aW9uQW5zd2VyID0gbmV3IFF1ZXN0aW9uQW5zd2VyQXBpKHtcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoIGluIHRoZSBjb250ZXh0IG9mIGEgdmVydGljYWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnRpY2FsS2V5IHZlcnRpY2FsIElEIGZvciB0aGUgc2VhcmNoXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBxdWVyeSBUaGUgcXVlcnkgZGV0YWlsc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuaW5wdXQgVGhlIGlucHV0IHRvIHNlYXJjaCBmb3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmZpbHRlciBUaGUgZmlsdGVyIHRvIHVzZSBpbiB0aGUgc2VhcmNoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5mYWNldEZpbHRlciBUaGUgZmFjZXQgZmlsdGVyIHRvIHVzZSBpbiB0aGUgc2VhcmNoXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBxdWVyeS5saW1pdCBUaGUgbWF4IG51bWJlciBvZiByZXN1bHRzIHRvIGluY2x1ZGUsIG1heCBvZiA1MFxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlcnkub2Zmc2V0IFRoZSByZXN1bHRzIG9mZnNldCwgZm9yIGZldGNoaW5nIG1vcmUgcmVzdWx0cyBvZiB0aGUgc2FtZSBxdWVyeVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuaWQgVGhlIHF1ZXJ5IElEIHRvIHVzZS4gSWYgcGFnaW5nIHdpdGhpbiBhIHF1ZXJ5LCB0aGUgc2FtZSBJRCBzaG91bGQgYmUgdXNlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHF1ZXJ5LmFwcGVuZCBJZiB0cnVlLCBhZGRzIHRoZSByZXN1bHRzIG9mIHRoaXMgcXVlcnkgdG8gdGhlIGVuZCBvZiB0aGUgY3VycmVudCByZXN1bHRzLCBkZWZhdWx0cyBmYWxzZVxuICAgKi9cbiAgdmVydGljYWxTZWFyY2ggKHZlcnRpY2FsS2V5LCBxdWVyeSkge1xuICAgIGlmICghcXVlcnkuYXBwZW5kKSB7XG4gICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFMsIFZlcnRpY2FsUmVzdWx0cy5zZWFyY2hMb2FkaW5nKCkpO1xuICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5TUEVMTF9DSEVDSywge30pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9zZWFyY2hlclxuICAgICAgLnZlcnRpY2FsU2VhcmNoKHZlcnRpY2FsS2V5LCB7XG4gICAgICAgIGxpbWl0OiB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuU0VBUkNIX0xJTUlUKSxcbiAgICAgICAgZ2VvbG9jYXRpb246IHRoaXMuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5HRU9MT0NBVElPTiksXG4gICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICBpc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZDogdGhpcy5faXNEeW5hbWljRmlsdGVyc0VuYWJsZWQsXG4gICAgICAgIHNraXBTcGVsbENoZWNrOiB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoJ3NraXBTcGVsbENoZWNrJyksXG4gICAgICAgIHF1ZXJ5VHJpZ2dlcjogdGhpcy5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKCdxdWVyeVRyaWdnZXInKVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IFNlYXJjaERhdGFUcmFuc2Zvcm1lci50cmFuc2Zvcm1WZXJ0aWNhbChyZXNwb25zZSwgdGhpcy5fZmllbGRGb3JtYXR0ZXJzKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBkYXRhW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuTkFWSUdBVElPTiwgZGF0YVtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuSU5URU5UUywgZGF0YVtTdG9yYWdlS2V5cy5JTlRFTlRTXSk7XG5cbiAgICAgICAgaWYgKHF1ZXJ5LmFwcGVuZCkge1xuICAgICAgICAgIGNvbnN0IG1lcmdlZFJlc3VsdHMgPSB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUylcbiAgICAgICAgICAgIC5hcHBlbmQoZGF0YVtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXSk7XG4gICAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTLCBtZXJnZWRSZXN1bHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFMsIGRhdGFbU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUU10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGFbU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTXSkge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTLCBkYXRhW1N0b3JhZ2VLZXlzLkRZTkFNSUNfRklMVEVSU10pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhW1N0b3JhZ2VLZXlzLlNQRUxMX0NIRUNLXSkge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0ssIGRhdGFbU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0tdKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2UuZGVsZXRlKCdza2lwU3BlbGxDaGVjaycpO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2UuZGVsZXRlKCdxdWVyeVRyaWdnZXInKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoIChxdWVyeVN0cmluZywgdXJscykge1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFMsIFVuaXZlcnNhbFJlc3VsdHMuc2VhcmNoTG9hZGluZygpKTtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlNQRUxMX0NIRUNLLCB7fSk7XG5cbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoZXJcbiAgICAgIC51bml2ZXJzYWxTZWFyY2gocXVlcnlTdHJpbmcsIHtcbiAgICAgICAgZ2VvbG9jYXRpb246IHRoaXMuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5HRU9MT0NBVElPTiksXG4gICAgICAgIHNraXBTcGVsbENoZWNrOiB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoJ3NraXBTcGVsbENoZWNrJyksXG4gICAgICAgIHF1ZXJ5VHJpZ2dlcjogdGhpcy5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKCdxdWVyeVRyaWdnZXInKVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IFNlYXJjaERhdGFUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVzcG9uc2UsIHVybHMsIHRoaXMuX2ZpZWxkRm9ybWF0dGVycykpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWV9JRCwgZGF0YVtTdG9yYWdlS2V5cy5RVUVSWV9JRF0pO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLk5BVklHQVRJT04sIGRhdGFbU3RvcmFnZUtleXMuTkFWSUdBVElPTl0pO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVIsIGRhdGFbU3RvcmFnZUtleXMuRElSRUNUX0FOU1dFUl0pO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTLCBkYXRhW1N0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTXSwgdXJscyk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuSU5URU5UUywgZGF0YVtTdG9yYWdlS2V5cy5JTlRFTlRTXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFU1RJT05fU1VCTUlTU0lPTiwgbmV3IFF1ZXN0aW9uU3VibWlzc2lvbih7XG4gICAgICAgICAgcXVlc3Rpb25UZXh0OiBxdWVyeVN0cmluZ1xuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0ssIGRhdGFbU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0tdKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLmRlbGV0ZSgnc2tpcFNwZWxsQ2hlY2snKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLmRlbGV0ZSgncXVlcnlUcmlnZ2VyJyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhbiBpbnB1dCwgcXVlcnkgZm9yIGEgbGlzdCBvZiBzaW1pbGFyIHJlc3VsdHMgYW5kIHNldCBpbnRvIHN0b3JhZ2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0ICAgICB0aGUgc3RyaW5nIHRvIGF1dG9jb21wbGV0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIHRoZSBuYW1lc3BhY2UgdG8gdXNlIGZvciB0aGUgc3RvcmFnZSBrZXlcbiAgICovXG4gIGF1dG9Db21wbGV0ZVVuaXZlcnNhbCAoaW5wdXQsIG5hbWVzcGFjZSkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvQ29tcGxldGVcbiAgICAgIC5xdWVyeVVuaXZlcnNhbChpbnB1dClcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkFVVE9DT01QTEVURX0uJHtuYW1lc3BhY2V9YCwgZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhbiBpbnB1dCwgcXVlcnkgZm9yIGEgbGlzdCBvZiBzaW1pbGFyIHJlc3VsdHMgaW4gdGhlIHByb3ZpZGVkIHZlcnRpY2FsXG4gICAqIGFuZCBzZXQgaW50byBzdG9yYWdlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCAgICAgICB0aGUgc3RyaW5nIHRvIGF1dG9jb21wbGV0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIHRoZSBuYW1lc3BhY2UgdG8gdXNlIGZvciB0aGUgc3RvcmFnZSBrZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnRpY2FsS2V5IHRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBleHBlcmllbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiYXJLZXkgICAgICB0aGUgYmFyIGtleSBmb3IgdGhlIGV4cGVyaWVuY2VcbiAgICovXG4gIGF1dG9Db21wbGV0ZVZlcnRpY2FsIChpbnB1dCwgbmFtZXNwYWNlLCB2ZXJ0aWNhbEtleSwgYmFyS2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5VmVydGljYWwoaW5wdXQsIHZlcnRpY2FsS2V5LCBiYXJLZXkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5BVVRPQ09NUExFVEV9LiR7bmFtZXNwYWNlfWAsIGRhdGEpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYW4gaW5wdXQsIHByb3ZpZGUgYSBsaXN0IG9mIHN1aXRhYmxlIGZpbHRlcnMgZm9yIGF1dG9jb21wbGV0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCAgdGhlIHN0cmluZyB0byBzZWFyY2ggZm9yIGZpbHRlcnMgd2l0aFxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnICB0aGUgY29uZmlnIHRvIHNlcmFjaCBmb3IgZmlsdGVycyB3aXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcubmFtZXNwYWNlICB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcudmVydGljYWxLZXkgdGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIGNvbmZpZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLmJhcktleSAgdGhlIGJhciBrZXkgZm9yIHRoZSBjb25maWcgdjFcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZy5zZWFyY2hQYXJhbWV0ZXJzICB0aGUgc2VhcmNoIHBhcmFtZXRlcnMgZm9yIHRoZSBjb25maWcgdjJcbiAgICovXG4gIGF1dG9Db21wbGV0ZUZpbHRlciAoaW5wdXQsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLl9hdXRvQ29tcGxldGVcbiAgICAgIC5xdWVyeUZpbHRlcihpbnB1dCwgY29uZmlnKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke2NvbmZpZy5uYW1lc3BhY2V9YCwgZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJtaXRzIGEgcXVlc3Rpb24gdG8gdGhlIHNlcnZlciBhbmQgdXBkYXRlcyB0aGUgdW5kZXJseWluZyBxdWVzdGlvbiBtb2RlbFxuICAgKiBAcGFyYW0ge29iamVjdH0gcXVlc3Rpb24gVGhlIHF1ZXN0aW9uIG9iamVjdCB0byBzdWJtaXQgdG8gdGhlIHNlcnZlclxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlc3Rpb24uZW50aXR5SWQgVGhlIGVudGl0eSB0byBhc3NvY2lhdGUgd2l0aCB0aGUgcXVlc3Rpb24gKHJlcXVpcmVkKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ubGFudWFnZSBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIHF1ZXN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5zaXRlIFRoZSBcInB1Ymxpc2hlclwiIG9mIHRoZSAoZS5nLiAnRklSU1RfUEFSVFknKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ubmFtZSBUaGUgbmFtZSBvZiB0aGUgYXV0aG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5lbWFpbCBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgYXV0aG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5xdWVzdGlvblRleHQgVGhlIHF1ZXN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5xdWVzdGlvbkRlc2NyaXB0aW9uIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHF1ZXN0aW9uXG4gICAqL1xuICBzdWJtaXRRdWVzdGlvbiAocXVlc3Rpb24pIHtcbiAgICByZXR1cm4gdGhpcy5fcXVlc3Rpb25BbnN3ZXJcbiAgICAgIC5zdWJtaXRRdWVzdGlvbihxdWVzdGlvbilcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFxuICAgICAgICAgIFN0b3JhZ2VLZXlzLlFVRVNUSU9OX1NVQk1JU1NJT04sXG4gICAgICAgICAgUXVlc3Rpb25TdWJtaXNzaW9uLnN1Ym1pdHRlZCgpKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgZ2l2ZW4gcXVlcnkgaW50byBzdG9yYWdlLCB0byBiZSB1c2VkIGZvciB0aGUgbmV4dCBzZWFyY2hcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBxdWVyeSB0byBzdG9yZVxuICAgKi9cbiAgc2V0UXVlcnkgKHF1ZXJ5KSB7XG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWSwgcXVlcnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgcHJvdmlkZWQgcXVlcnkgSUQsIHRvIGJlIHVzZWQgaW4gYW5hbHl0aWNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeUlkIFRoZSBxdWVyeSBpZCB0byBzdG9yZVxuICAgKi9cbiAgc2V0UXVlcnlJZCAocXVlcnlJZCkge1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFUllfSUQsIHF1ZXJ5SWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgZ2l2ZW4gZmlsdGVyIGludG8gc3RvcmFnZSwgdG8gYmUgdXNlZCBmb3IgdGhlIG5leHQgc2VhcmNoXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKiBAcGFyYW0ge0ZpbHRlcn0gZmlsdGVyICAgIHRoZSBmaWx0ZXIgdG8gc2V0XG4gICAqL1xuICBzZXRGaWx0ZXIgKG5hbWVzcGFjZSwgZmlsdGVyKSB7XG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7bmFtZXNwYWNlfWAsIGZpbHRlcik7XG4gIH1cblxuICBzZXRGYWNldEZpbHRlciAobmFtZXNwYWNlLCBmaWx0ZXIpIHtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkZBQ0VUX0ZJTFRFUn0uJHtuYW1lc3BhY2V9YCwgZmlsdGVyKTtcbiAgfVxuXG4gIGVuYWJsZUR5bmFtaWNGaWx0ZXJzICgpIHtcbiAgICB0aGlzLl9pc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBzZXRTZWFyY2hMaW1pdCAobGltaXQpIHtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlNFQVJDSF9MSU1JVCwgbGltaXQpO1xuICB9XG5cbiAgb24gKGV2dCwgbW9kdWxlSWQsIGNiKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2xvYmFsU3RvcmFnZS5vbihldnQsIG1vZHVsZUlkLCBjYik7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIENvbXBvbmVudE1hbmFnZXIgKi9cblxuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCB7IERPTSB9IGZyb20gJy4uJztcblxuLyoqXG4gKiBDb21wb25lbnRNYW5hZ2VyIGlzIGEgU2luZ2xldG9uZSB0aGF0IGNvbnRhaW5zIGJvdGggYW4gaW50ZXJuYWwgcmVnaXN0cnkgb2ZcbiAqIGVsaWdpYmxlIGNvbXBvbmVudHMgdG8gYmUgY3JlYXRlZCwgYXMgd2VsbCBhcyBrZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudFxuICogaW5zdGFudGlhdGVkIGFuZCBhY3RpdmUgY29tcG9uZW50cy5cbiAqXG4gKiBBTEwgY29tcG9uZW50cyBzaG91bGQgYmUgY29uc3RydWN0ZWQgdXNpbmcgdGhlIHtDb21wb25lbnRNYW5hZ2VyfSB2aWEgaXRzIGBjcmVhdGVgIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50TWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBpZiAoIUNvbXBvbmVudE1hbmFnZXIuc2V0SW5zdGFuY2UodGhpcykpIHtcbiAgICAgIHJldHVybiBDb21wb25lbnRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudCByZWdpc3RyeSBpcyBhbiBpbnRlcm5hbCBtYXAsIHRoYXQgY29udGFpbnNcbiAgICAgKiBhbGwgYXZhaWxhYmxlIGNvbXBvbmVudCBDTEFTU0VTIHVzZWQgZm9yIGNyZWF0aW9uIG9yIG92ZXJyaWRlLlxuICAgICAqIEVhY2ggY29tcG9uZW50IGNsYXNzIGhhcyBhIHVuaXF1ZSBUWVBFLCB3aGljaCBpcyB1c2VkIGFzIHRoZSBrZXkgZm9yIHRoZSByZWdpc3RyeVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5fY29tcG9uZW50UmVnaXN0cnkgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhY3RpdmUgY29tcG9uZW50cyBpcyBhbiBpbnRlcm5hbCBjb250YWluZXIgdG8ga2VlcCB0cmFja1xuICAgICAqIG9mIGFsbCBvZiB0aGUgY29tcG9uZW50cyB0aGF0IGhhdmUgYmVlbiBjb25zdHJ1Y3RlZFxuICAgICAqL1xuICAgIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb3JlIGxpYnJhcnkgZGVwZW5kZW5jeVxuICAgICAqXG4gICAgICogVGhlIENvcmUgY29udGFpbnMgYm90aCB0aGUgc3RvcmFnZSBBTkQgc2VydmljZXMgdGhhdCBhcmUgbmVlZGVkIGZvciBwZXJmb3JtaW5nIG9wZXJhdGlvbnNcbiAgICAgKiBsaWtlIHNlYXJjaCBhbmQgYXV0byBjb21wbGV0ZS5cbiAgICAgKlxuICAgICAqIFRoZSBzdG9yYWdlIGlzIHRoZSBzb3VyY2Ugb2YgdHJ1dGggZm9yIHRoZSBzdGF0ZSBvZiBBTEwgY29tcG9uZW50cy5cbiAgICAgKiBXaGVuZXZlciB0aGUgc3RvcmFnZSBpcyB1cGRhdGVkLCB0aGUgc3RhdGUgZ2V0cyBwdXNoZWQgZG93biB0byB0aGUgbmVjZXNzYXJ5IGNvbXBvbmVudHMuXG4gICAgICogQHR5cGUge0NvcmV9XG4gICAgICovXG4gICAgdGhpcy5fY29yZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcHJpbWFyeSByZW5kZXJlciB0byB1c2UgZm9yIGFsbCBjb21wb25lbnRzXG4gICAgICogQHR5cGUge0hhbmRsZWJhcnNSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXJlciA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgYW5hbHl0aWNzIHJlcG9ydGVyIGRlcGVuZGVuY3lcbiAgICAgKi9cbiAgICB0aGlzLl9hbmFseXRpY3NSZXBvcnRlciA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgc2V0SW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIHNldFJlbmRlcmVyIChyZW5kZXJlcikge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRDb3JlIChjb3JlKSB7XG4gICAgdGhpcy5fY29yZSA9IGNvcmU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRBbmFseXRpY3NSZXBvcnRlciAocmVwb3J0ZXIpIHtcbiAgICB0aGlzLl9hbmFseXRpY3NSZXBvcnRlciA9IHJlcG9ydGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlZ2lzdGVycyBhIGNvbXBvbmVudCB0byBiZSBlbGlnaWJsZSBmb3IgY3JlYXRpb24gYW5kIG92ZXJyaWRlLlxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gVGhlIENvbXBvbmVudCBDbGFzcyB0byByZWdpc3RlclxuICAgKi9cbiAgcmVnaXN0ZXIgKGNvbXBvbmVudENsYXp6KSB7XG4gICAgdGhpcy5fY29tcG9uZW50UmVnaXN0cnlbY29tcG9uZW50Q2xhenoudHlwZV0gPSBjb21wb25lbnRDbGF6ejtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGUgaXMgdGhlIGVudHJ5IHBvaW50IGZvciBjb25zdHJ1Y3RpbmcgYW55IGFuZCBhbGwgY29tcG9uZW50cy5cbiAgICogSXQgd2lsbCBpbnN0YW50aWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgY29tcG9uZW50LCBhbmQgYm90aCBhcHBseVxuICAgKiBpbml0aWFsIHN0YXRlIGZyb20gdGhlIHN0b3JhZ2UgYW5kIGJpbmQgaXQgdG8gdGhlIHN0b3JhZ2UgZm9yIHVwZGF0ZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnRUeXBlIFRoZSBjb21wb25lbnQgdHlwZSB0byBjcmVhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgVGhlIG9wdGlvbnMgdG8gcGlwZSB0byB0aGUgY29uc3RydWN0aW9uIG9mIHRoZSBjb21wb25lbnRcbiAgICovXG4gIGNyZWF0ZSAoY29tcG9uZW50VHlwZSwgb3B0cykge1xuICAgIC8vIEV2ZXJ5IGNvbXBvbmVudCBuZWVkcyBsb2NhbCBhY2Nlc3MgdG8gdGhlIGNvbXBvbmVudCBtYW5hZ2VyXG4gICAgLy8gYmVjYXVzZSBzb21ldGltZXMgY29tcG9uZW50cyBoYXZlIHN1YmNvbXBvbmVudHMgdGhhdCBuZWVkIHRvIGJlXG4gICAgLy8gY29uc3RydWN0ZWQgZHVyaW5nIGNyZWF0aW9uXG4gICAgbGV0IHN5c3RlbU9wdHMgPSB7XG4gICAgICBjb3JlOiB0aGlzLl9jb3JlLFxuICAgICAgcmVuZGVyZXI6IHRoaXMuX3JlbmRlcmVyLFxuICAgICAgYW5hbHl0aWNzUmVwb3J0ZXI6IHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyLFxuICAgICAgY29tcG9uZW50TWFuYWdlcjogdGhpc1xuICAgIH07XG5cbiAgICBsZXQgY29tcG9uZW50Q2xhc3MgPSB0aGlzLl9jb21wb25lbnRSZWdpc3RyeVtjb21wb25lbnRUeXBlXTtcblxuICAgIGlmIChcbiAgICAgICFjb21wb25lbnRDbGFzcy5hcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQoKSAmJlxuICAgICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5zb21lKGMgPT4gYy5uYW1lID09PSBvcHRzLm5hbWUpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICBgQW5vdGhlciBjb21wb25lbnQgd2l0aCBuYW1lICR7b3B0cy5uYW1lfSBhbHJlYWR5IGV4aXN0c2AsXG4gICAgICAgIGNvbXBvbmVudFR5cGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGlzVHdpbjogdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5zb21lKGNvbXBvbmVudCA9PiBjb21wb25lbnQuY29uc3RydWN0b3IudHlwZSA9PT0gY29tcG9uZW50VHlwZSksXG4gICAgICAuLi5vcHRzXG4gICAgfTtcblxuICAgIC8vIEluc3RhbnRpYXRlIG91ciBuZXcgY29tcG9uZW50IGFuZCBrZWVwIHRyYWNrIG9mIGl0XG4gICAgbGV0IGNvbXBvbmVudCA9XG4gICAgICBuZXcgdGhpcy5fY29tcG9uZW50UmVnaXN0cnlbY29tcG9uZW50VHlwZV0oY29uZmlnLCBzeXN0ZW1PcHRzKVxuICAgICAgICAuaW5pdChjb25maWcpO1xuXG4gICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIGdsb2JhbCBzdG9yYWdlIHRvIHBvd2VyIHN0YXRlLCBhcHBseSB0aGUgc3RhdGVcbiAgICAvLyBmcm9tIHRoZSBzdG9yYWdlIHRvIHRoZSBjb21wb25lbnQsIGFuZCB0aGVuIGJpbmQgdGhlIGNvbXBvbmVudFxuICAgIC8vIHN0YXRlIHRvIHRoZSBzdG9yYWdlIHZpYSBpdHMgdXBkYXRlc1xuICAgIGlmICh0aGlzLl9jb3JlICYmIHRoaXMuX2NvcmUuZ2xvYmFsU3RvcmFnZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKGNvbXBvbmVudC5tb2R1bGVJZCA9PT0gdW5kZWZpbmVkIHx8IGNvbXBvbmVudC5tb2R1bGVJZCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jb3JlLmdsb2JhbFN0b3JhZ2VcbiAgICAgICAgLm9uKCd1cGRhdGUnLCBjb21wb25lbnQubW9kdWxlSWQsIChkYXRhKSA9PiB7XG4gICAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgcHJvdmlkZWQgY29tcG9uZW50IGZyb20gdGhlIGxpc3Qgb2YgYWN0aXZlIGNvbXBvbmVudHMgYW5kIHJlbW92ZVxuICAgKiB0aGUgYXNzb2NpYXRlZCBzdG9yYWdlIGV2ZW50IGxpc3RlbmVyXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCB0byByZW1vdmVcbiAgICovXG4gIHJlbW92ZSAoY29tcG9uZW50KSB7XG4gICAgdGhpcy5fY29yZS5nbG9iYWxTdG9yYWdlLm9mZigndXBkYXRlJywgY29tcG9uZW50Lm1vZHVsZUlkKTtcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5maW5kSW5kZXgoYyA9PiBjLm5hbWUgPT09IGNvbXBvbmVudC5uYW1lKTtcbiAgICB0aGlzLl9hY3RpdmVDb21wb25lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjb21wb25lbnQgd2l0aCB0aGUgZ2l2ZW4gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgY29tcG5lbnQgdG8gcmVtb3ZlXG4gICAqL1xuICByZW1vdmVCeU5hbWUgKG5hbWUpIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLl9hY3RpdmVDb21wb25lbnRzLmZpbmQoYyA9PiBjLm5hbWUgPT09IG5hbWUpO1xuICAgIGNvbXBvbmVudC5yZW1vdmUoKTtcbiAgICBET00uZW1wdHkoY29tcG9uZW50Ll9jb250YWluZXIpO1xuICB9XG5cbiAgZ2V0QWN0aXZlQ29tcG9uZW50ICh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMuZmluZChjID0+IGMuY29uc3RydWN0b3IudHlwZSA9PT0gdHlwZSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlbmRlcmVyICovXG5cbi8qKlxuICogUmVuZGVyZXIgaXMgYW4gYWJzdHJhY3QgY2xhc3MgdGhhdCBhbGwgUmVuZGVyZXJzIHNob3VsZCBleHRlbmQgYW5kIGltcGxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciB7XG4gIC8qKlxuICAgKiByZW5kZXIgaXMgYSBjb3JlIG1ldGhvZCBmb3IgYWxsIHJlbmRlcmVycy5cbiAgICogQWxsIGltcGxlbWVudGF0aW9ucyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBjbGFzc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICovXG4gIHJlbmRlciAodGVtcGxhdGUsIGRhdGEpIHtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICByZWdpc3RlckhlbHBlciAobmFtZSwgY2IpIHtcblxuICB9XG5cbiAgY29tcGlsZSAodGVtcGxhdGUpIHtcblxuICB9XG59XG4iLCIvKiogQG1vZHVsZSBIYW5kbGViYXJzUmVuZGVyZXIgKi9cblxuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG4vKipcbiAqIEhhbmRsZWJhcnNSZW5kZXJlciBpcyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBuYXRpdmF0ZSBoYW5kbGViYXJzIHJlbmRlcmVyLlxuICogQGV4dGVuZHMgUmVuZGVyZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFuZGxlYmFyc1JlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvciAodGVtcGxhdGVzID0ge30sIG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgaGFuZGxlYmFycyBjb21waWxlclxuICAgICAqIEB0eXBlIHtIYW5kbGViYXJzfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faGFuZGxlYmFycyA9IHRlbXBsYXRlcy5faGIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBwcmUtY29tcGlsZWQgaGFuZGxlYmFycyB0ZW1wbGF0ZXNcbiAgICAgKiBAdHlwZSB7SGFuZGxlYmFyc31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHRlbXBsYXRlcyB8fCB7fTtcbiAgfVxuXG4gIGluaXQgKHRlbXBsYXRlcykge1xuICAgIC8vIEFzc2lnbiB0aGUgaGFuZGxlYmFycyBjb21waWxlciBhbmQgdGVtcGxhdGVzIGJhc2VkIG9uXG4gICAgLy8gaW5mb3JtYXRpb24gcHJvdmlkZWQgZnJvbSBleHRlcm5hbCBkZXAgKGluIGRlZmF1bHQgY2FzZSwgaXQgY29tZXMgZnJvbSBleHRlcm5hbCBzZXJ2ZXIgcmVxdWVzdClcbiAgICB0aGlzLl9oYW5kbGViYXJzID0gdGVtcGxhdGVzLl9oYjtcbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXM7XG5cbiAgICAvLyBUT0RPKGJpbGx5KSBPbmNlIHdlIHJlLXdyaXRlIHRlbXBsYXRlcyB1c2luZyB0aGUgbmV3IGhlbHBlcnMgbGlicmFyeVxuICAgIC8vIHdlIHByb2JhYmx5IGRvbid0IG5lZWQgdGhlc2UgY3VzdG9tIGhlbHBlcnMgYW55bW9yZVxuICAgIHRoaXMuX3JlZ2lzdGVyQ3VzdG9tSGVscGVycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlZ2lzdGVySGVscGVyIGlzIGEgcHVibGljIGludGVyZmFjZSBmb3IgZXh0ZXJuYWwgZGVwZW5kZW5jaWVzIHRvXG4gICAqIHJlZ2lzdGVyIHRoZWlyIG93biBjdXN0b20gaGVscGVycyB0byBvdXIgaW50ZXJuYWwgSGFuZGxlYmFycyBDb21waWxlclxuICAgKi9cbiAgcmVnaXN0ZXJIZWxwZXIgKG5hbWUsIGNiKSB7XG4gICAgdGhpcy5faGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihuYW1lLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogY29tcGlsZSBhIGhhbmRsZWJhcnMgdGVtcGxhdGUgc28gdGhhdCBpdCBjYW4gYmUgcmVuZGVyZWQsXG4gICAqIHVzaW5nIHRoZSB7SGFuZGxlYmFyc30gY29tcGlsZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlIFRoZSB0ZW1wbGF0ZSBzdHJpbmcgdG8gY29tcGlsZVxuICAgKi9cbiAgY29tcGlsZSAodGVtcGxhdGUpIHtcbiAgICBpZiAodHlwZW9mIHRlbXBsYXRlICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faGFuZGxlYmFycy5jb21waWxlKHRlbXBsYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZW5kZXIgd2lsbCByZW5kZXIgYSB0ZW1wbGF0ZSB3aXRoIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBQcm92aWRlIGVpdGhlciBhIHRlbXBsYXRlTmFtZSBvciBhIHByZS1jb21waWxlZCB0ZW1wbGF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBwcm92aWRlIHRvIHRoZSB0ZW1wbGF0ZVxuICAgKi9cbiAgcmVuZGVyIChjb25maWcsIGRhdGEpIHtcbiAgICAvLyBJZiBhIGN1c3RvbSB0ZW1wbGF0ZSBpcyBwcm92aWRlZCwgdXNlIGl0LFxuICAgIC8vIG90aGVyd2lzZSBmYWxsIGJhY2sgdG8gdGhlIHRlbXBsYXRlIG5hbWVcbiAgICAvLyBUT0RPKGJpbGx5KSBUaGlzIGludGVyZmFjZSBzaG91bGQgcHJvYmFibHkgYmUgbGVzcyB1Z2x5XG4gICAgaWYgKGNvbmZpZy50ZW1wbGF0ZSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNvbmZpZy50ZW1wbGF0ZShkYXRhKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlc1tjb25maWcudGVtcGxhdGVOYW1lXShkYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgZmluZC9yZW5kZXIgdGVtcGxhdGU6ICcgKyBjb25maWcudGVtcGxhdGVOYW1lLCBlKTtcbiAgICB9XG4gIH1cblxuICBfcmVnaXN0ZXJDdXN0b21IZWxwZXJzICgpIHtcbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdpZmVxJywgZnVuY3Rpb24gKGFyZzEsIGFyZzIsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiAoYXJnMSA9PT0gYXJnMikgPyBvcHRpb25zLmZuKHRoaXMpIDogb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignaWZub3RlcScsIGZ1bmN0aW9uIChhcmcxLCBhcmcyLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gKGFyZzEgIT09IGFyZzIpID8gb3B0aW9ucy5mbih0aGlzKSA6IG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2Zvcm1hdFBob25lTnVtYmVyJywgZnVuY3Rpb24gKHBob25lTnVtYmVyU3RyaW5nKSB7XG4gICAgICB2YXIgY2xlYW5lZCA9ICgnJyArIHBob25lTnVtYmVyU3RyaW5nKS5yZXBsYWNlKC9cXEQvZywgJycpO1xuICAgICAgdmFyIG1hdGNoID0gY2xlYW5lZC5tYXRjaCgvXigxfCk/KFxcZHszfSkoXFxkezN9KShcXGR7NH0pJC8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHZhciBpbnRsQ29kZSA9IChtYXRjaFsxXSA/ICcrMSAnIDogJycpO1xuICAgICAgICByZXR1cm4gW2ludGxDb2RlLCAnKCcsIG1hdGNoWzJdLCAnKSAnLCBtYXRjaFszXSwgJy0nLCBtYXRjaFs0XV0uam9pbignJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2Fzc2lnbicsIGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBvcHRpb25zID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAoIW9wdGlvbnMuZGF0YS5yb290KSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YS5yb290ID0ge307XG4gICAgICB9XG5cbiAgICAgIGxldCB2ID0gJyc7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIHYgPSB2ICsgYXJnc1tpXTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5kYXRhLnJvb3RbbmFtZV0gPSB2O1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignanNvbicsIGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG5hbWUgPT09IHVuZGVmaW5lZFxuICAgICAgICA/ICcnXG4gICAgICAgIDogSlNPTi5zdHJpbmdpZnkobmFtZSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBIYW5kbGViYXJzUmVuZGVyZXIgZnJvbSAnLi9oYW5kbGViYXJzcmVuZGVyZXInO1xuXG4vLyBJbiB0aGUgZnV0dXJlLCB0aGlzIHdpbGwgY29udGFpbiBhbGwgZGlmZmVyZW50IHR5cGVzIG9mIHJlbmRlcmVyc1xuLy8gRS5nLiBNdXN0YWNoZSwgU09ZLCBIYW5kbGVCYXJzLCBSZWFjdCwgZXRjLlxuZXhwb3J0IGNvbnN0IFJlbmRlcmVycyA9IHtcbiAgU09ZOiBSZW5kZXJlcixcbiAgSGFuZGxlYmFyczogSGFuZGxlYmFyc1JlbmRlcmVyXG59O1xuIiwiLyoqIEBtb2R1bGUgRE9NICovXG5cbi8qIGdsb2JhbCBIVE1MRWxlbWVudCwgSFRNTERvY3VtZW50LCBXaW5kb3csIEN1c3RvbUV2ZW50ICovXG5cbmxldCBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcblxuLyoqXG4gKiBTdGF0aWMgaW50ZXJmYWNlIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBET00gQVBJLlxuICogQG5hbWVzcGFjZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBET00ge1xuICBzdGF0aWMgc2V0dXAgKGQsIHApIHtcbiAgICBkb2N1bWVudCA9IGQ7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIGEgSFRNTEVsZW1lbnQgZnJvbSBhbmQgSFRNTCBzdHJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IGh0bWwgVGhlIEhUTUwgdG8gcGFyc2UgdG8gYSBET00gbm9kZS5cbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlIChodG1sKSB7XG4gICAgaWYgKCdjcmVhdGVSYW5nZScgaW4gZG9jdW1lbnQpIHtcbiAgICAgIC8vIHByZWZlciB0aGlzIGltcGxlbWVudGF0aW9uIGFzIGl0IGhhcyB3aWRlciBicm93c2VyIHN1cHBvcnRcbiAgICAgIC8vIGFuZCBpdCdzIGJldHRlciBwZXJmb3JtaW5nLlxuICAgICAgLy8gc2VlIGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2NvbnZlcnQtaHRtbC1zdGluZ3MtZG9tLW5vZGVzXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChodG1sKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnKTtcbiAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgLy8gZmFsbGJhY2sgdG8gdGhpcyBiZWNhdXNlIG9mIGEgYnVnIGluIGpzZG9tIHRoYXQgY2F1c2VzIHRlc3RzIHRvIGZhaWxcbiAgICAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qc2RvbS9qc2RvbS9pc3N1ZXMvMzk5XG4gICAgcmV0dXJuIG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoaHRtbCwgJ3RleHQvaHRtbCcpLmJvZHk7XG4gIH1cblxuICAvKipcbiAgICogcXVlcnkgdGhlIERPTSBmb3IgYSBnaXZlbiBjc3Mgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50IE9wdGlvbmFsIGNvbnRleHQgdG8gdXNlIGZvciBhIHNlYXJjaC4gRGVmYXVsdHMgdG8gZG9jdW1lbnQgaWYgbm90IHByb3ZpZGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgdGhlIENTUyBzZWxlY3RvciB0byBxdWVyeSBmb3JcbiAgICpcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSB0aGUgRklSU1Qgbm9kZSBpdCBmaW5kcywgaWYgYW55XG4gICAqL1xuICBzdGF0aWMgcXVlcnkgKHBhcmVudCwgc2VsZWN0b3IpIHtcbiAgICAvLyBGYWNhZGUsIHNoaWZ0aW5nIHRoZSBzZWxlY3RvciB0byB0aGUgcGFyZW50IGFyZ3VtZW50IGlmIG9ubHkgb25lXG4gICAgLy8gYXJndW1lbnQgaXMgcHJvdmlkZWRcbiAgICBpZiAoc2VsZWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2VsZWN0b3IgPSBwYXJlbnQ7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIFdpbmRvdyB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxEb2N1bWVudCkge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogcXVlcnkgdGhlIERPTSBmb3IgYSBnaXZlbiBjc3Mgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50IE9wdGlvbmFsIGNvbnRleHQgdG8gdXNlIGZvciBhIHNlYXJjaC4gRGVmYXVsdHMgdG8gZG9jdW1lbnQgaWYgbm90IHByb3ZpZGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgdGhlIENTUyBzZWxlY3RvciB0byBxdWVyeSBmb3JcbiAgICpcbiAgICogQHJldHVybnMge0FycmF5fSB0aGUgRklSU1Qgbm9kZSBpdCBmaW5kcywgaWYgYW55XG4gICAqL1xuICBzdGF0aWMgcXVlcnlBbGwgKHBhcmVudCwgc2VsZWN0b3IpIHtcbiAgICAvLyBGYWNhZGUsIHNoaWZ0aW5nIHRoZSBzZWxlY3RvciB0byB0aGUgcGFyZW50IGFyZ3VtZW50IGlmIG9ubHkgb25lXG4gICAgLy8gYXJndW1lbnQgaXMgcHJvdmlkZWRcbiAgICBpZiAoc2VsZWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2VsZWN0b3IgPSBwYXJlbnQ7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgY2xpZW50IGNvZGUgaXMgdXNpbmcgYSBwb2ludGVyIHRvIGEgZG9tIG5vZGUgYW5kIGl0J3MgbnVsbCwgZS5nLiB0aGlzLl9jb250YWluZXJcbiAgICBpZiAocGFyZW50ID09IG51bGwpIHtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTERvY3VtZW50IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgV2luZG93KSB7XG4gICAgICByZXR1cm4gW3NlbGVjdG9yXTtcbiAgICB9XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuICB9XG5cbiAgc3RhdGljIG9uUmVhZHkgKGNiKSB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRlZCcgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJykge1xuICAgICAgY2IoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBET00ub24oZG9jdW1lbnQsICdET01Db250ZW50TG9hZGVkJywgY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZUVsZSB3aWxsIGNyZWF0ZSBhIHtIVE1MRWxlbWVudH0gYW5kIGFwcGx5IHRoZSBwcm9wZXJ0aWVzIGF0dHJpYnV0ZXMgdGhyb3VnaCBhbiBvYmplY3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbCBUaGUgZWxlbWVudCBgdGFnYCBuYW1lIHRvIGNvbnN0cnVjdFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c19kYXRhIE9wdGlvbmFsIGF0dHJpYnV0ZXMgdG8gYXBwbHkgdG8gdGhlIG5ldyBIVE1MRWxlbWVudFxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUVsIChlbCwgb3B0c19kYXRhID0ge30pIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwpO1xuICAgIGxldCBwcm9wcyA9IE9iamVjdC5rZXlzKG9wdHNfZGF0YSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocHJvcHNbaV0gPT09ICdjbGFzcycpIHtcbiAgICAgICAgRE9NLmFkZENsYXNzKG5vZGUsIG9wdHNfZGF0YVtwcm9wc1tpXV0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbm9kZVtwcm9wc1tpXV0gPSBvcHRzX2RhdGFbcHJvcHNbaV1dO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIGFwcGVuZCAocGFyZW50LCBub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbm9kZSA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcGFyZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgcGFyZW50ID0gRE9NLnF1ZXJ5KHBhcmVudCk7XG4gICAgfVxuXG4gICAgLy8gU3VwcG9ydCBIVE1MIGluamVjdGlvbiBhcyB3ZWxsIGFzIEhUTUxFbGVtZW50IGFwcGVuZHNcbiAgICBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlckJlZ2luJywgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYWRkQ2xhc3MgKG5vZGUsIGNsYXNzTmFtZSkge1xuICAgIGxldCBjbGFzc2VzID0gY2xhc3NOYW1lLnNwbGl0KCcsJyk7XG4gICAgbGV0IGxlbiA9IGNsYXNzZXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzZXNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBlbXB0eSAocGFyZW50KSB7XG4gICAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgc3RhdGljIGNzcyAoc2VsZWN0b3IsIHN0eWxlcykge1xuICAgIGxldCBub2RlID0gRE9NLnF1ZXJ5KHNlbGVjdG9yKTtcblxuICAgIGZvciAobGV0IHByb3AgaW4gc3R5bGVzKSB7XG4gICAgICBub2RlLnN0eWxlW3Byb3BdID0gc3R5bGVzW3Byb3BdO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhdHRyIChzZWxlY3RvciwgYXR0ciwgdmFsKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsKTtcbiAgfVxuXG4gIHN0YXRpYyBhdHRyaWJ1dGVzIChzZWxlY3RvciwgYXR0cnMpIHtcbiAgICBPYmplY3QuZW50cmllcyhhdHRycylcbiAgICAgIC5mb3JFYWNoKChbYXR0ciwgdmFsXSkgPT4gdGhpcy5hdHRyKHNlbGVjdG9yLCBhdHRyLCB2YWwpKTtcbiAgfVxuXG4gIHN0YXRpYyB0cmlnZ2VyIChzZWxlY3RvciwgZXZlbnQsIHNldHRpbmdzKSB7XG4gICAgbGV0IGUgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgJ2J1YmJsZXMnOiB0cnVlLFxuICAgICAgJ2NhbmNlbGFibGUnOiB0cnVlXG4gICAgfSwgc2V0dGluZ3MgfHwge30pKTtcblxuICAgIERPTS5xdWVyeShzZWxlY3RvcikuZGlzcGF0Y2hFdmVudChlKTtcbiAgfVxuXG4gIHN0YXRpYyBvbiAoc2VsZWN0b3IsIGV2dCwgaGFuZGxlcikge1xuICAgIERPTS5xdWVyeShzZWxlY3RvcikuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIG9uY2UgKHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpIHtcbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCB7IG9uY2U6IHRydWUgfSk7XG4gIH1cblxuICBzdGF0aWMgb2ZmIChzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZGVsZWdhdGUgKGN0eHQsIHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpIHtcbiAgICBsZXQgZWwgPSBET00ucXVlcnkoY3R4dCk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIHdoaWxlICghdGFyZ2V0LmlzRXF1YWxOb2RlKGVsKSkge1xuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgaGFuZGxlcihldmVudCwgdGFyZ2V0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRXZlbnRFbWl0dGVyICovXG5cbi8qKlxuICogRXZlbnRFbWl0dGVyIGlzIGEgYmFzZSBjbGFzcyBmb3IgYW55IG9iamVjdCB0aGF0IHdhbnRzIHRvIGV4cG9zZVxuICogYSBwdWIvc3ViIGludGVyZmFjZSwgZm9yIGVtaXR0aW5nIG1lc3NhZ2VzIGFuZCBwcm92aWRpbmcgbGlzdGVuZXJzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLyoqXG4gICAgICogVGhlIHN1YnNjcmliZXJzIG9mIG1lc3NhZ2VzXG4gICAgICogQHR5cGUge29iamVjdFtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbGlzdGVuZXJzID0ge307XG4gIH1cblxuICAvKipcbiAgICogb24gaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIHN1YnNjcmliaW5nIGV2ZW50cyB0aGF0IGFyZSBlbWl0dGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIGxpc3RlbiB0b1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gdGhlIHtldnR9IGlzIGVtaXR0ZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBvbmNlIE9wdGlvbmFsIHZhbHVlIHdoaWNoIHdpbGwgb25seSBoYW5kbGUgdGhlIG1lc3NhZ2Ugb25jZVxuICAgKi9cbiAgb24gKGV2dCwgY2IsIG9uY2UpIHtcbiAgICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbGxiYWNrIGhhbmRsZXIgc2hvdWxkIGJlIG9mIHR5cGUge2Z1bmN0aW9ufScpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9saXN0ZW5lcnNbZXZ0XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XSA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuX2xpc3RlbmVyc1tldnRdLnB1c2goe1xuICAgICAgZXZlbnQ6IGV2dCxcbiAgICAgIGNiOiBjYixcbiAgICAgIG9uY2U6IG9uY2UgfHwgZmFsc2VcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uY2UgaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIHN1YnNjcmliaW5nIGV2ZW50cyB0aGF0IGFyZSBlbWl0dGVkLlxuICAgKiBUaGUgaGFuZGxlciB3aWxsIG9ubHkgYmUgdHJpZ2dlcmVkIG9uY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gbGlzdGVuIHRvXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIFRoZSBjYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUge2V2dH0gaXMgZW1pdHRlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uY2UgT3B0aW9uYWwgdmFsdWUgd2hpY2ggd2lsbCBvbmx5IGhhbmRsZSB0aGUgbWVzc2FnZSBvbmNlXG4gICAqL1xuICBvbmNlIChldnQsIGNiKSB7XG4gICAgcmV0dXJuIHRoaXMub24oZXZ0LCBjYiwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogb2ZmIGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciB1bnN1YnNjcmliaW5nIGZyb20gYW4gZXZlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byB1bnN1YnNjcmliZSBmcm9tXG4gICAqL1xuICBvZmYgKGV2dCkge1xuICAgIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcnNbZXZ0XTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBlbWl0IGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciBicm9hZGNhc3RpbmcgbWVzc2FnZXMvZXZlbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gcHVibGlzaCBmcm9tXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIHRoZSBkYXRhIHRvIHNlbmQgYWxvbmcgdG8gdGhlIHN1YnNjcmliZXJzXG4gICAqL1xuICBlbWl0IChldnQsIGRhdGEpIHtcbiAgICBsZXQgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2dF07XG4gICAgaWYgKGxpc3RlbmVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSW52b2tlIGVhY2ggb2YgYWxsIHRoZSBsaXN0ZW5lciBoYW5kbGVycyBhbmQgcmVtb3ZlIHRoZSBvbmVzIHRoYXQgc2hvdWxkIGZpcmUgb25seSBvbmNlLlxuICAgIGxldCBrZWVwID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpc3RlbmVyc1tpXS5jYihkYXRhKTtcbiAgICAgIGlmIChsaXN0ZW5lcnNbaV0ub25jZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gSW5zdGVhZCBvZiBoYXZpbmcgYSAnZGlydHknIGFycmF5IHdpdGggZGVsZXRlZCBvciAndW5kZWZpbmVkJyBlbnRyaWVzLFxuICAgICAgLy8gd2UganVzdCBjcmVhdGUgYSBicmFuZCBuZXcgYXJyYXkgd2l0aG91dCB0aGUgbGlzdGVuZXJzIHRoYXQgd2VyZSByZW1vdmVkXG4gICAgICBrZWVwLnB1c2gobGlzdGVuZXJzW2ldKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgb3VyIG9sZCBsaXN0IG9mIGxpc3RlbmVycyB0byB0aGUgbmV3bHkgY3JlYXRlZCBhcnJheVxuICAgIHRoaXMuX2xpc3RlbmVyc1tldnRdID0ga2VlcDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU3RhdGUgKi9cblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi8uLi9jb3JlL2V2ZW50ZW1pdHRlci9ldmVudGVtaXR0ZXInO1xuXG4vKipcbiAqIFN0YXRlIGNvbnRhaW5zIHRoZSBkYXRhIGZvciB0aGUgY29tcG9uZW50XG4gKiBhbmQgZXhwb3NlcyBhbiB7RXZlbnRFbWl0dGVyfSBpbnRlcmZhY2Ugc28gdGhhdCBleHRlcm5hbFxuICogZGVwZW5kZW5jaWVzIGNhbiBsaXN0ZW4vaG9vayBzdWJzY3JpYmUgdG8gbWVzc2FnZXMvdXBkYXRlcy5cbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RhdGUgPSBkYXRhIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKiBOT1RFKGJpbGx5KTogRG9lcyBub3QgZmlyZSBhbiB1cGRhdGUgbWVzc2FnZVxuICAgKi9cbiAgaW5pdCAocHJvcCwgb3B0VmFsKSB7XG4gICAgdGhpcy5fc2V0KHByb3AsIG9wdFZhbCk7XG4gIH1cblxuICAvKipcbiAgICogc2V0dGVyIGZvciB0aGUgc3RhdGVcbiAgICogQHBhcmFtIHByb3Age3N0cmluZ3xPYmplY3R9IFRoZSBwcm9wZXJ0eSB0byBzZXRcbiAgICogQHBhcmFtIG9wdFZhbCBPcHRpb25hbCwgaWYgcHJvcCBpcyBhIHtzdHJpbmd9LCBpdCB3aWxsIGFzc2lnbiB0aGUgdmFsdWUgdG8gdGhhdCBwcm9wZXJ0eVxuICAgKi9cbiAgc2V0IChwcm9wLCBvcHRWYWwpIHtcbiAgICB0aGlzLl9zZXQocHJvcCwgb3B0VmFsKTtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldHRlciBmb3IgdGhlIHN0YXRlIGVuYWJsZXMgeW91IHRvIHVwZGF0ZSBhIHNpbmdsZSBwcm9wZXJ0eSwgb3IgY29tcGxldGUgc3RhdGVcbiAgICogZGVwZW5kaW5nIG9uIHRoZSBhcmd1bWVudHMgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSBwcm9wIHtzdHJpbmd8T2JqZWN0fSBUaGUgcHJvcGVydHkgdG8gc2V0XG4gICAqIEBwYXJhbSBvcHRWYWwgSWYgcHJvcCBpcyBhIHtzdHJpbmd9LCBwcm92aWRlIGl0cyB2YWx1ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NldCAocHJvcCwgb3B0VmFsKSB7XG4gICAgaWYgKG9wdFZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9zdGF0ZSA9IHByb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0YXRlW3Byb3BdID0gb3B0VmFsO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSAoZGF0YSkge1xuICAgIHRoaXMuX3N0YXRlID0gZGF0YTtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGEgcHJvcGVydGllcyB2YWx1ZSBmcm9tIHRoZSBzdGF0ZVxuICAgKiBJZiBubyBwcm9wZXJ0eSBwcm92aWRlZCwgcmV0dXJuIHRoZSBmdWxsIHN0YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRQcm9wIG9wdGlvbmFsIHByb3BlcnR5IHRvIHJldHJpZXZlXG4gICAqL1xuICBnZXQgKG9wdFByb3ApIHtcbiAgICBpZiAob3B0UHJvcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zdGF0ZVtvcHRQcm9wXTtcbiAgfVxuXG4gIGhhcyAocHJvcCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZVtwcm9wXSAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgYXNKU09OICgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gIH1cbn1cbiIsIi8qKlxuICogTW9kZWwgZm9yIHRoZSBhbmFseXRpY3MgZXZlbnQgdHlwZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmFseXRpY3NFdmVudCB7XG4gIGNvbnN0cnVjdG9yICh0eXBlLCBsYWJlbCkge1xuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIGV2ZW50IHRvIHJlcG9ydFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5ldmVudFR5cGUgPSB0eXBlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBvcHRpb25hbCBsYWJlbCB0byBiZSBwcm92aWRlZCBmb3IgdGhlIGV2ZW50XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgcHJvdmlkZWQgb3B0aW9ucyB0byB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgQWRkaXRpb25hbCBvcHRpb25zIGZvciB0aGUgZXZlbnRcbiAgICovXG4gIGFkZE9wdGlvbnMgKG9wdGlvbnMpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZXZlbnQgaW4gdGhlIGFwaSBmb3JtYXQsIHR5cGljYWxseSBmb3IgcmVwb3J0aW5nIHRvIHRoZSBhcGlcbiAgICovXG4gIHRvQXBpRXZlbnQgKCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQW5hbHl0aWNzUmVwb3J0ZXIgKi9cblxuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4vYW5hbHl0aWNzZXZlbnQnO1xuaW1wb3J0IHsgQW5zd2Vyc0FuYWx5dGljc0Vycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgeyBBTkFMWVRJQ1NfQkFTRV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IEh0dHBSZXF1ZXN0ZXIgZnJvbSAnLi4vaHR0cC9odHRwcmVxdWVzdGVyJztcblxuLyoqXG4gKiBDbGFzcyBmb3IgcmVwb3J0aW5nIGFuYWx5dGljcyBldmVudHMgdG8gdGhlIHNlcnZlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmFseXRpY3NSZXBvcnRlciB7XG4gIGNvbnN0cnVjdG9yIChjb3JlLCBleHBlcmllbmNlS2V5LCBleHBlcmllbmNlVmVyc2lvbiwgYnVzaW5lc3NJZCwgZ2xvYmFsT3B0aW9ucyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIGludGVybmFsIGJ1c2luZXNzIGlkZW50aWZpZXIgdXNlZCBmb3IgcmVwb3J0aW5nXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9idXNpbmVzc0lkID0gYnVzaW5lc3NJZDtcblxuICAgIC8qKlxuICAgICAqIE9wdGlvbnMgdG8gaW5jbHVkZSB3aXRoIGV2ZXJ5IGFuYWx5dGljIGV2ZW50IHJlcG9ydGVkIHRvIHRoZSBzZXJ2ZXJcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZ2xvYmFsT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGdsb2JhbE9wdGlvbnMsIHsgZXhwZXJpZW5jZUtleSB9KTtcblxuICAgIGlmIChleHBlcmllbmNlVmVyc2lvbikge1xuICAgICAgdGhpcy5fZ2xvYmFsT3B0aW9ucy5leHBlcmllbmNlVmVyc2lvbiA9IGV4cGVyaWVuY2VWZXJzaW9uO1xuICAgIH1cblxuICAgIC8vIGxpc3RlbiB0byBxdWVyeSBpZCB1cGRhdGVzXG4gICAgY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBTdG9yYWdlS2V5cy5RVUVSWV9JRCwgaWQgPT4gdGhpcy5zZXRRdWVyeUlkKGlkKSk7XG4gIH1cblxuICBzZXRRdWVyeUlkIChxdWVyeUlkKSB7XG4gICAgdGhpcy5fZ2xvYmFsT3B0aW9ucy5xdWVyeUlkID0gcXVlcnlJZDtcbiAgfVxuXG4gIHJlcG9ydCAoZXZlbnQpIHtcbiAgICBpZiAoIShldmVudCBpbnN0YW5jZW9mIEFuYWx5dGljc0V2ZW50KSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNBbmFseXRpY3NFcnJvcignVHJpZWQgdG8gc2VuZCBpbnZhbGlkIGFuYWx5dGljcyBldmVudCcsIGV2ZW50KTtcbiAgICB9XG5cbiAgICBldmVudC5hZGRPcHRpb25zKHRoaXMuX2dsb2JhbE9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIG5ldyBIdHRwUmVxdWVzdGVyKCkuYmVhY29uKFxuICAgICAgYCR7QU5BTFlUSUNTX0JBU0VfVVJMfS9yZWFsdGltZWFuYWx5dGljcy9kYXRhL2Fuc3dlcnMvJHt0aGlzLl9idXNpbmVzc0lkfWAsXG4gICAgICB7XG4gICAgICAgICdkYXRhJzogZXZlbnQudG9BcGlFdmVudCgpXG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTW9kdWxlRGF0YSAqL1xuXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50ZW1pdHRlci9ldmVudGVtaXR0ZXInO1xuXG4vKipcbiAqIE1vZHVsZURhdGEgaXMgdXNlZCBhcyBhIGdlbmVyaWMgbW9kZWwgZm9yIFN0b3JhZ2UuXG4gKiBUeXBpY2FsbHkgYW4gaW5zdGFuY2Ugb2YgTW9kdWxlRGF0YSBwb3dlcnMgYSBzaW5nbGUgY29tcG9uZW50LlxuXG4gKiBBIGRhdGEgbW9kZWwgdGhhdCBleHBvc2VzIGFuIGV2ZW50IGVtaXR0ZXIgaW50ZXJmYWNlLlxuICogQGV4dGVuZHMgRXZlbnRFbWl0dGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZHVsZURhdGEgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoaWQsIGRhdGEgPSB7fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLl9pZCA9IGlkO1xuICAgIHRoaXMuX2hpc3RvcnkgPSBbXTtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB0aGlzLnNldChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXBsYWNlcyB0aGUgY3VycmVudGx5IGhlbGQgZGF0YSB3aXRoIHRoZSBnaXZlbiBkYXRhXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSB0aGUgZGF0YSB0byByZXBsYWNlIHRoZSBjdXJyZW50IGRhdGFcbiAgICovXG4gIHNldCAoZGF0YSkge1xuICAgIHRoaXMuY2FwdHVyZVByZXZpb3VzKCk7XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkoZGF0YSkgfHwgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoICE9PSBPYmplY3Qua2V5cyh0aGlzLl9kYXRhKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLl9kYXRhKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBmb3Igc2hhbGxvdyBlcXVhbGl0eVxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGRhdGEpKSB7XG4gICAgICBpZiAodGhpcy5fZGF0YVtrZXldICE9PSBkYXRhW2tleV0pIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5fZGF0YSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjYXB0dXJlUHJldmlvdXMgKCkge1xuICAgIGlmICh0aGlzLl9oaXN0b3J5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2hpc3RvcnkgPSBbXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faGlzdG9yeS5sZW5ndGggKyAxID4gNSkge1xuICAgICAgdGhpcy5faGlzdG9yeS5zaGlmdCgpO1xuICAgIH1cblxuICAgIC8vIElmIGRhdGEgaXMgZXZlciB1bmRlZmluZWQsIHdlIGRlZmF1bHQgdG8gZW1wdHkgb2JqZWN0XG4gICAgdGhpcy5faGlzdG9yeS5wdXNoKEpTT04uc3RyaW5naWZ5KHRoaXMuX2RhdGEgfHwge30pKTtcbiAgfVxuXG4gIHVuZG8gKCkge1xuICAgIGxldCBwcmV2aW91cyA9IHt9O1xuICAgIGlmICh0aGlzLl9wcmV2aW91cy5sZW5ndGggPiAwKSB7XG4gICAgICBwcmV2aW91cyA9IEpTT04ucGFyc2UodGhpcy5fcHJldmlvdXMucG9wKCkpO1xuICAgIH1cblxuICAgIHRoaXMuX2RhdGEuc2V0KHByZXZpb3VzKTtcbiAgfVxuXG4gIHJhdyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEdsb2JhbFN0b3JhZ2UgKi9cblxuaW1wb3J0IE1vZHVsZURhdGEgZnJvbSAnLi9tb2R1bGVkYXRhJztcbmltcG9ydCB7IEFuc3dlcnNTdG9yYWdlRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBTdG9yYWdlIGlzIGEgY29udGFpbmVyIGFyb3VuZCBhcHBsaWNhdGlvbiBzdGF0ZS5cbiAqIEl0IGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBDUlVEIG9wZXJhdGlvbnMgYXMgd2VsbCBhcyBsaXN0ZW5pbmdcbiAqIGZvciBzdGF0ZWZ1bCBjaGFuZ2VzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWxTdG9yYWdlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXIgPSB7fTtcbiAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGRhdGEgaW4gc3RvcmFnZSB3aXRoIHRoZSBnaXZlbiBrZXkgdG8gdGhlIHByb3ZpZGVkIGRhdGEsXG4gICAqIGNvbXBsZXRlbHkgb3ZlcndyaXRpbmcgYW55IGV4aXN0aW5nIGRhdGEuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdGhlIHN0b3JhZ2Uga2V5IHRvIHNldFxuICAgKiBAcGFyYW0geyp9IGRhdGEgdGhlIGRhdGEgdG8gc2V0XG4gICAqL1xuICBzZXQgKGtleSwgZGF0YSkge1xuICAgIHRoaXMuX2luaXREYXRhQ29udGFpbmVyKGtleSwgZGF0YSk7XG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltrZXldLnNldChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYWxsIGtleS92YWx1ZSBwYWlycyBpbiB0aGUgcHJvdmlkZWQgbWFwIHRvIHRoZSBzdG9yYWdlXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUga2V5L3ZhbHVlIHBhaXJzIHRvIHNldCBpbiB0aGUgc3RvcmFnZVxuICAgKi9cbiAgc2V0QWxsIChkYXRhKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XG4gICAgICB0aGlzLnNldChrZXksIHZhbCk7XG4gICAgfVxuICB9XG5cbiAgX2luaXREYXRhQ29udGFpbmVyIChrZXksIGRhdGEpIHtcbiAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQgfHwga2V5ID09PSBudWxsIHx8IHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc1N0b3JhZ2VFcnJvcignSW52YWxpZCBzdG9yYWdlIGtleSBwcm92aWRlZCcsIGtleSwgZGF0YSk7XG4gICAgfVxuICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQgfHwgZGF0YSA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNTdG9yYWdlRXJyb3IoJ05vIGRhdGEgcHJvdmlkZWQnLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltrZXldID0gbmV3IE1vZHVsZURhdGEoa2V5KTtcbiAgICAgIHRoaXMuX2FwcGx5RnV0dXJlTGlzdGVuZXJzKGtleSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3RhdGUgKG1vZHVsZUlkKSB7XG4gICAgaWYgKHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0ucmF3KCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0QWxsIChrZXkpIHtcbiAgICBjb25zdCBkYXRhID0gW107XG4gICAgZm9yIChjb25zdCBkYXRhS2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuX21vZHVsZURhdGFDb250YWluZXIpKSB7XG4gICAgICBpZiAoZGF0YUtleS5zdGFydHNXaXRoKGtleSkgJiYgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltkYXRhS2V5XS5yYXcoKSAhPT0gbnVsbCkge1xuICAgICAgICBkYXRhLnB1c2godGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltkYXRhS2V5XS5yYXcoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgZGF0YSBpbiBzdG9yYWdlIHdpdGggdGhlIGdpdmVuIGtleSB0byB0aGUgcHJvdmlkZWQgZGF0YSxcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSB0aGUgc3RvcmFnZSBrZXkgdG8gZGVsZXRlXG4gICAqL1xuICBkZWxldGUgKGtleSkge1xuICAgIC8vIE5vdGU6IERvIHdlIG5lZWQgdG8gY2xlYW4gdXAgbGlzdGVuZXJzIGhlcmU/XG4gICAgZGVsZXRlIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJba2V5XTtcbiAgfVxuXG4gIG9uIChldnQsIG1vZHVsZUlkLCBjYikge1xuICAgIGxldCBtb2R1bGVEYXRhID0gdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF07XG4gICAgaWYgKG1vZHVsZURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdID0gW107XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0ucHVzaCh7XG4gICAgICAgIGV2ZW50OiBldnQsXG4gICAgICAgIGNiOiBjYlxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5vbihldnQsIGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9mZiAoZXZ0LCBtb2R1bGVJZCwgY2IpIHtcbiAgICBsZXQgbW9kdWxlRGF0YSA9IHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdO1xuICAgIGlmIChtb2R1bGVEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXS5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0ub2ZmKGV2dCwgY2IpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2FwcGx5RnV0dXJlTGlzdGVuZXJzIChtb2R1bGVJZCkge1xuICAgIGxldCBmdXR1cmVzID0gdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXTtcbiAgICBpZiAoIWZ1dHVyZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZ1dHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBmdXR1cmUgPSBmdXR1cmVzW2ldO1xuICAgICAgdGhpcy5vbihmdXR1cmUuZXZlbnQsIG1vZHVsZUlkLCBmdXR1cmUuY2IpO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2hBcGkgfSBmcm9tICcuL3NlYXJjaC9zZWFyY2hhcGknO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBbmFseXRpY3NSZXBvcnRlciB9IGZyb20gJy4vYW5hbHl0aWNzL2FuYWx5dGljc3JlcG9ydGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kdWxlRGF0YSB9IGZyb20gJy4vc3RvcmFnZS9tb2R1bGVkYXRhJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZS9nbG9iYWxzdG9yYWdlJztcbiIsIi8qKiBAbW9kdWxlIENvbXBvbmVudCAqL1xuXG5pbXBvcnQgeyBSZW5kZXJlcnMgfSBmcm9tICcuLi9yZW5kZXJpbmcvY29uc3QnO1xuXG5pbXBvcnQgRE9NIGZyb20gJy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0YXRlIGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgQW5hbHl0aWNzUmVwb3J0ZXIgfSBmcm9tICcuLi8uLi9jb3JlJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGlzIGFuIGFic3RyYWN0aW9uIHRoYXQgZW5jYXBzdWxhdGVzIHN0YXRlLCBiZWhhdmlvcixcbiAqIGFuZCB2aWV3IGZvciBhIHBhcnRpY3VsYXIgY2h1bmsgb2YgZnVuY3Rpb25hbGl0eSBvbiB0aGUgcGFnZS5cbiAqXG4gKiBUaGUgQVBJIGV4cG9zZXMgZXZlbnQgbGlmZSBjeWNsZSBob29rcyBmb3Igd2hlbiB0aGluZ3MgYXJlIHJlbmRlcmVkLFxuICogbW91bnRlZCwgY3JlYXRlZCwgZXRjLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgdGhpcy5tb2R1bGVJZCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBVbmlxdWUgbmFtZSBvZiB0aGlzIGNvbXBvbmVudCBpbnN0YW5jZVxuICAgICAqIFVzZWQgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBvdGhlciBjb21wb25lbnRzIG9mIHRoZSBzYW1lIHR5cGVcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubmFtZSA9IGNvbmZpZy5uYW1lIHx8IHRoaXMuY29uc3RydWN0b3IudHlwZTtcblxuICAgIC8qKlxuICAgICAqIENhY2hlIHRoZSBvcHRpb25zIHNvIHRoYXQgd2UgY2FuIHByb3BvZ2F0ZSBwcm9wZXJseSB0byBjaGlsZCBjb21wb25lbnRzXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpZGVudGlmaWVyIHVzZWQgdG8gY2xhc3NpZnkgdGhlIHR5cGUgb2YgY29tcG9uZW50LlxuICAgICAqIFRoZSBjb21wb25lbnQgbWFuYWdlciB1c2VzIHRoaXMgaW5mb3JtYXRpb24gaW4gb3JkZXIgdG8gcGVyc2lzdCBhbmQgb3JnYW5pemUgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtzdHJpbmd8Q29tcG9uZW50VHlwZX1cbiAgICAgKi9cbiAgICB0aGlzLl90eXBlID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIHBhcmVudCBjb21wb25lbnQsIGlmIGV4aXN0c1xuICAgICAqIEB0eXBlIHtDb21wb25lbnR9XG4gICAgICovXG4gICAgdGhpcy5fcGFyZW50Q29udGFpbmVyID0gY29uZmlnLnBhcmVudENvbnRhaW5lciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBjb250YWluZXIgZm9yIGFsbCB0aGUgY2hpbGQgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtDb21wb25lbnRbXX1cbiAgICAgKi9cbiAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN0YXRlIChkYXRhKSBvZiB0aGUgY29tcG9uZW50IHRvIGJlIHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9zdGF0ZSA9IG5ldyBTdGF0ZShjb25maWcuc3RhdGUpO1xuXG4gICAgLyoqXG4gICAgICogVE9ETyhiaWxseSkgVGhpcyBzaG91bGQgYmUgJ3NlcnZpY2VzJ1xuICAgICAqL1xuICAgIHRoaXMuY29yZSA9IHN5c3RlbUNvbmZpZy5jb3JlIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IG1hbmFnZXIsIHdoaWNoIGNvbnRhaW5zIGFsbCBvZiB0aGUgY29tcG9uZW50IGNsYXNzZXNcbiAgICAgKiBlbGlnaWJsZSB0byBiZSBjcmVhdGVkXG4gICAgICogQHR5cGUge0NvbXBvbmVudE1hbmFnZXJ9XG4gICAgICovXG4gICAgdGhpcy5jb21wb25lbnRNYW5hZ2VyID0gc3lzdGVtQ29uZmlnLmNvbXBvbmVudE1hbmFnZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBhbmFseXRpY3MgcmVwb3J0ZXIsIHVzZWQgdG8gcmVwb3J0IGV2ZW50cyBmb3IgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7QW5hbHl0aWNzUmVwb3J0ZXJ9XG4gICAgICovXG4gICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlciA9IHN5c3RlbUNvbmZpZy5hbmFseXRpY3NSZXBvcnRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogT3B0aW9ucyB0byBpbmNsdWRlIHdpdGggYWxsIGFuYWx5dGljIGV2ZW50cyBzZW50IGJ5IHRoaXMgY29tcG9uZW50XG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FuYWx5dGljc09wdGlvbnMgPSBjb25maWcuYW5hbHl0aWNzT3B0aW9ucyB8fCB7fTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBET00gbm9kZSB0aGF0IHRoZSBjb21wb25lbnQgd2lsbCBiZSBhcHBlbmRlZCB0byB3aGVuIG1vdW50ZWQvcmVuZGVyZWQuXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGlmICh0aGlzLl9wYXJlbnRDb250YWluZXIgPT09IG51bGwpIHtcbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRhaW5lciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGBjb250YWluZXJgIG9wdGlvbiBmb3IgY29tcG9uZW50IGNvbmZpZ3VyYXRpb24uIE11c3QgYmUgb2YgdHlwZSBgc3RyaW5nYC4nKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IERPTS5xdWVyeShjb25maWcuY29udGFpbmVyKSB8fCBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb250YWluZXIgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Q29udGFpbmVyLCBjb25maWcuY29udGFpbmVyKTtcblxuICAgICAgLy8gSWYgd2UgaGF2ZSBhIHBhcmVudCwgYW5kIHRoZSBjb250YWluZXIgaXMgbWlzc2luZyBmcm9tIHRoZSBET00sXG4gICAgICAvLyB3ZSBjb25zdHJ1Y3QgdGhlIGNvbnRhaW5lciBhbmQgYXBwZW5kIGl0IHRvIHRoZSBwYXJlbnRcbiAgICAgIGlmICh0aGlzLl9jb250YWluZXIgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gRE9NLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IGNvbmZpZy5jb250YWluZXIuc3Vic3RyaW5nKDEsIGNvbmZpZy5jb250YWluZXIubGVuZ3RoKVxuICAgICAgICB9KTtcbiAgICAgICAgRE9NLmFwcGVuZCh0aGlzLl9wYXJlbnRDb250YWluZXIsIHRoaXMuX2NvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBjb250YWluZXIgRE9NIG5vZGU6ICcgKyBjb25maWcuY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIGN1c3RvbSBjbGFzcyB0byBiZSBhcHBsaWVkIHRvIHt0aGlzLl9jb250YWluZXJ9IG5vZGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2NsYXNzTmFtZSA9IGNvbmZpZy5jbGFzcyB8fCAnY29tcG9uZW50JztcblxuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIHJlbmRlciBmdW5jdGlvbiB0byBiZSB1c2VkIGluc3RlYWQgb2YgdXNpbmcgdGhlIGRlZmF1bHQgcmVuZGVyZXJcbiAgICAgKiBAdHlwZSB7UmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyID0gY29uZmlnLnJlbmRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGRlZmF1bHQge1JlbmRlcmVyfSB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgcmVuZGVyaW5nIHRoZSB0ZW1wbGF0ZVxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXJlciA9IHN5c3RlbUNvbmZpZy5yZW5kZXJlciB8fCBSZW5kZXJlcnMuSGFuZGxlYmFycztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSBzdHJpbmcgdG8gdXNlIGZvciByZW5kZXJpbmcgdGhlIGNvbXBvbmVudFxuICAgICAqIElmIHRoaXMgaXMgbGVmdCBlbXB0eSwgd2UgbG9va3VwIHRoZSB0ZW1wbGF0ZSB0aGUgYmFzZSB0ZW1wbGF0ZXMgdXNpbmcgdGhlIHRlbXBsYXRlTmFtZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGUgPSBjb25maWcudGVtcGxhdGUgPyB0aGlzLl9yZW5kZXJlci5jb21waWxlKGNvbmZpZy50ZW1wbGF0ZSkgOiBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlTmFtZSB0byB1c2UgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50LlxuICAgICAqIFRoaXMgaXMgb25seSB1c2VkIGlmIF90ZW1wbGF0ZSBpcyBlbXB0eS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IGNvbmZpZy50ZW1wbGF0ZU5hbWUgfHwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0VGVtcGxhdGVOYW1lKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCBzdGF0ZSBpbmRpY2F0aW5nIHdoZXRoZXIgb3Igbm90IHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbW91bnRlZCB0byB0aGUgRE9NXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2ssIHRoYXRzIHVzZWQgdG8gdHJhbnNmb3JtIHRoZSBpbnRlcm5hbCBkYXRhXG4gICAgICogbW9kZWxzIG9mIHRoZSBjb21wb25lbnRzLCBiZWZvcmUgaXQgZ2V0cyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQgc3RhdGUuXG4gICAgICogQnkgZGVmYXVsdCwgbm8gdHJhbnNmb3JtYXRpb24gaGFwcGVucy5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy50cmFuc2Zvcm1EYXRhID0gY29uZmlnLnRyYW5zZm9ybURhdGEgfHwgdGhpcy50cmFuc2Zvcm1EYXRhIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIGEgY29tcG9uZW50IGlzIGNyZWF0ZWQuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMub25DcmVhdGUgPSBjb25maWcub25DcmVhdGVPdmVycmlkZSB8fCB0aGlzLm9uQ3JlYXRlIHx8IGZ1bmN0aW9uICgpIHt9O1xuICAgIHRoaXMub25DcmVhdGUgPSB0aGlzLm9uQ3JlYXRlLmJpbmQodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnQgaXMgTW91bnRlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vbk1vdW50ID0gY29uZmlnLm9uTW91bnRPdmVycmlkZSB8fCB0aGlzLm9uTW91bnQgfHwgZnVuY3Rpb24gKCkge307XG4gICAgdGhpcy5vbk1vdW50ID0gdGhpcy5vbk1vdW50LmJpbmQodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnRzIHN0YXRlIGlzIHVwZGF0ZWQuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMub25VcGRhdGUgPSBjb25maWcub25VcGRhdGVPdmVycmlkZSB8fCB0aGlzLm9uVXBkYXRlIHx8IGZ1bmN0aW9uICgpIHsgfTtcbiAgICB0aGlzLm9uVXBkYXRlID0gdGhpcy5vblVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogQSB1c2VyIHByb3ZpZGVkIG9uQ3JlYXRlIGNhbGxiYWNrXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMudXNlck9uQ3JlYXRlID0gY29uZmlnLm9uQ3JlYXRlIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogQSB1c2VyIHByb3ZpZGVkIG9uTW91bnQgY2FsbGJhY2tcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy51c2VyT25Nb3VudCA9IGNvbmZpZy5vbk1vdW50IHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogQSB1c2VyIHByb3ZpZGVkIG9uVXBkYXRlIGNhbGxiYWNrXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMudXNlck9uVXBkYXRlID0gY29uZmlnLm9uVXBkYXRlIHx8IGZ1bmN0aW9uICgpIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdkZWZhdWx0JztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdDb21wb25lbnQnO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaW5pdCAob3B0cykge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnNldFN0YXRlKG9wdHMuZGF0YSB8fCBvcHRzLnN0YXRlIHx8IHt9KTtcbiAgICAgIHRoaXMub25DcmVhdGUoKTtcbiAgICAgIHRoaXMudXNlck9uQ3JlYXRlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0Vycm9yIGluaXRpYWxpemluZyBjb21wb25lbnQnLFxuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnR5cGUsXG4gICAgICAgIGUpO1xuICAgIH1cblxuICAgIHRoaXMuX3N0YXRlLm9uKCd1cGRhdGUnLCAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLm9uVXBkYXRlKCk7XG4gICAgICAgIHRoaXMudXNlck9uVXBkYXRlKCk7XG4gICAgICAgIHRoaXMudW5Nb3VudCgpO1xuICAgICAgICB0aGlzLm1vdW50KCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICAgJ0Vycm9yIHVwZGF0aW5nIGNvbXBvbmVudCcsXG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci50eXBlLFxuICAgICAgICAgIGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgRE9NLmFkZENsYXNzKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB7IF9jb25maWc6IHRoaXMuX2NvbmZpZyB9LCBkYXRhKTtcbiAgICB0aGlzLl9zdGF0ZS5zZXQobmV3U3RhdGUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0U3RhdGUgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuZ2V0KHByb3ApO1xuICB9XG5cbiAgaGFzU3RhdGUgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuaGFzKHByb3ApO1xuICB9XG5cbiAgdHJhbnNmb3JtRGF0YSAoZGF0YSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYWRkQ2hpbGQgKGRhdGEsIHR5cGUsIG9wdHMpIHtcbiAgICBsZXQgY2hpbGRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKFxuICAgICAgdHlwZSxcbiAgICAgIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgIHBhcmVudENvbnRhaW5lcjogdGhpcy5fY29udGFpbmVyLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9LCBvcHRzIHx8IHt9LCB7XG4gICAgICAgIF9wYXJlbnRPcHRzOiB0aGlzLl9jb25maWdcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGRDb21wb25lbnQpO1xuICAgIHJldHVybiBjaGlsZENvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbm1vdW50IGFuZCByZW1vdmUgdGhpcyBjb21wb25lbnQgYW5kIGl0cyBjaGlsZHJlbiBmcm9tIHRoZSBsaXN0XG4gICAqIG9mIGFjdGl2ZSBjb21wb25lbnRzXG4gICAqL1xuICByZW1vdmUgKCkge1xuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goYyA9PiBjLnJlbW92ZSgpKTtcbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIucmVtb3ZlKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgcmVuZGVyIG1ldGhvZCB0byBiZSB1c2VkIGZvciByZW5kZXJpbmcgdGhlIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZW5kZXJcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc2V0UmVuZGVyIChyZW5kZXIpIHtcbiAgICB0aGlzLl9yZW5kZXIgPSByZW5kZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSByZW5kZXJlciBmb3IgdGhlIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge1JlbmRlcmVyVHlwZX0gcmVuZGVyZXJcbiAgICovXG4gIHNldFJlbmRlcmVyIChyZW5kZXJlcikge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gUmVuZGVyZXJzW3JlbmRlcmVyXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0ZW1wbGF0ZSBmb3IgdGhlIGNvbXBvbmVudCB0byB1c2Ugd2hlbiByZW5kZXJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gICAqL1xuICBzZXRUZW1wbGF0ZSAodGVtcGxhdGUpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZSA9IHRoaXMuX3JlbmRlcmVyLmNvbXBpbGUodGVtcGxhdGUpO1xuICB9XG5cbiAgdW5Nb3VudCAoKSB7XG4gICAgaWYgKCF0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgY2hpbGQudW5Nb3VudCgpO1xuICAgIH0pO1xuXG4gICAgRE9NLmVtcHR5KHRoaXMuX2NvbnRhaW5lcik7XG4gICAgdGhpcy5fY2hpbGRyZW4uZm9yRWFjaChjID0+IGMucmVtb3ZlKCkpO1xuICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG4gICAgdGhpcy5vblVuTW91bnQoKTtcbiAgfVxuXG4gIG1vdW50ICgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYmVmb3JlTW91bnQoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIERPTS5hcHBlbmQodGhpcy5fY29udGFpbmVyLCB0aGlzLnJlbmRlcih0aGlzLl9zdGF0ZS5hc0pTT04oKSkpO1xuXG4gICAgLy8gUHJvY2VzcyB0aGUgRE9NIHRvIGRldGVybWluZSBpZiB3ZSBzaG91bGQgY3JlYXRlXG4gICAgLy8gaW4tbWVtb3J5IHN1Yi1jb21wb25lbnRzIGZvciByZW5kZXJpbmdcbiAgICBjb25zdCBkb21Db21wb25lbnRzID0gRE9NLnF1ZXJ5QWxsKHRoaXMuX2NvbnRhaW5lciwgJ1tkYXRhLWNvbXBvbmVudF06bm90KFtkYXRhLWlzLWNvbXBvbmVudC1tb3VudGVkXSknKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy50cmFuc2Zvcm1EYXRhKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5fc3RhdGUuZ2V0KCkpKSk7XG4gICAgZG9tQ29tcG9uZW50cy5mb3JFYWNoKGMgPT4gdGhpcy5fY3JlYXRlU3ViY29tcG9uZW50KGMsIGRhdGEpKTtcblxuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgY2hpbGQubW91bnQoKTtcbiAgICB9KTtcblxuICAgIC8vIEF0dGFjaCBhbmFseXRpY3MgaG9va3MgYXMgbmVjZXNzYXJ5XG4gICAgaWYgKHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIpIHtcbiAgICAgIGxldCBkb21Ib29rcyA9IERPTS5xdWVyeUFsbCh0aGlzLl9jb250YWluZXIsICdbZGF0YS1ldmVudHR5cGVdOm5vdChbZGF0YS1pcy1hbmFseXRpY3MtYXR0YWNoZWRdKScpO1xuICAgICAgZG9tSG9va3MuZm9yRWFjaCh0aGlzLl9jcmVhdGVBbmFseXRpY3NIb29rLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy5vbk1vdW50KHRoaXMpO1xuICAgIHRoaXMudXNlck9uTW91bnQodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZW5kZXIgdGhlIHRlbXBsYXRlIHVzaW5nIHRoZSB7UmVuZGVyZXJ9IHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgYW5kIHRlbXBsYXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHJlbmRlciAoZGF0YSA9IHRoaXMuX3N0YXRlLmdldCgpKSB7XG4gICAgdGhpcy5iZWZvcmVSZW5kZXIoKTtcbiAgICAvLyBUZW1wb3JhcnkgZml4IGZvciBwYXNzaW5nIGltbXV0YWJsZSBkYXRhIHRvIHRyYW5zZm9ybURhdGEoKS5cbiAgICBkYXRhID0gdGhpcy50cmFuc2Zvcm1EYXRhKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpKTtcblxuICAgIGxldCBodG1sID0gJyc7XG4gICAgLy8gVXNlIGVpdGhlciB0aGUgY3VzdG9tIHJlbmRlciBmdW5jdGlvbiBvciB0aGUgaW50ZXJuYWwgcmVuZGVyZXJcbiAgICAvLyBkZXBlbmRhbnQgb24gdGhlIGNvbXBvbmVudCBjb25maWd1cmF0aW9uXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGh0bWwgPSB0aGlzLl9yZW5kZXIoZGF0YSk7XG4gICAgICBpZiAodHlwZW9mIGh0bWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVuZGVyIG1ldGhvZCBtdXN0IHJldHVybiBIVE1MIGFzIHR5cGUge3N0cmluZ30nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVuZGVyIHRoZSBleGlzdGluZyB0ZW1wbGF0ZXMgYXMgYSBzdHJpbmdcbiAgICAgIGh0bWwgPSB0aGlzLl9yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgICB0ZW1wbGF0ZTogdGhpcy5fdGVtcGxhdGUsXG4gICAgICAgIHRlbXBsYXRlTmFtZTogdGhpcy5fdGVtcGxhdGVOYW1lXG4gICAgICB9LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvLyBXZSBjcmVhdGUgYW4gSFRNTCBEb2N1bWVudCBmcmFnbWVudCB3aXRoIHRoZSByZW5kZXJlZCBzdHJpbmdcbiAgICAvLyBTbyB0aGF0IHdlIGNhbiBxdWVyeSBpdCBmb3IgcHJvY2Vzc2luZyBvZiBzdWIgY29tcG9uZW50c1xuICAgIGxldCBlbCA9IERPTS5jcmVhdGUoaHRtbCk7XG5cbiAgICB0aGlzLmFmdGVyUmVuZGVyKCk7XG4gICAgcmV0dXJuIGVsLmlubmVySFRNTDtcbiAgfVxuXG4gIF9jcmVhdGVTdWJjb21wb25lbnQgKGRvbUNvbXBvbmVudCwgZGF0YSkge1xuICAgIGRvbUNvbXBvbmVudC5kYXRhc2V0LmlzQ29tcG9uZW50TW91bnRlZCA9IHRydWU7XG4gICAgY29uc3QgZGF0YXNldCA9IGRvbUNvbXBvbmVudC5kYXRhc2V0O1xuICAgIGNvbnN0IHR5cGUgPSBkYXRhc2V0LmNvbXBvbmVudDtcbiAgICBjb25zdCBwcm9wID0gZGF0YXNldC5wcm9wO1xuICAgIGxldCBvcHRzID0gZGF0YXNldC5vcHRzID8gSlNPTi5wYXJzZShkYXRhc2V0Lm9wdHMpIDoge307XG5cbiAgICBsZXQgY2hpbGREYXRhID0gZGF0YVtwcm9wXSB8fCB7fTtcblxuICAgIG9wdHMgPSB7XG4gICAgICAuLi5vcHRzLFxuICAgICAgY29udGFpbmVyOiBkb21Db21wb25lbnRcbiAgICB9O1xuXG4gICAgLy8gVE9ETyhiaWxseSkgUmlnaHQgbm93LCBpZiB3ZSBwcm92aWRlIGFuIGFycmF5IGFzIHRoZSBkYXRhIHByb3AsXG4gICAgLy8gdGhlIGJlaGF2aW9yIGlzIHRvIGNyZWF0ZSBtYW55IGNvbXBvbmVudHMgZm9yIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkuXG4gICAgLy8gVEhBVCBpbnRlcmZhY2UgU0hPVUxEIGNoYW5nZSB0byB1c2UgYSBkaWZmZXJlbnQgcHJvcGVydHkgdGhhdCBkZWZpbmVzXG4gICAgLy8gd2hldGhlciB0byBhcnJheSBkYXRhIHNob3VsZCBiZSB1c2VkIGZvciBhIHNpbmdsZSBjb21wb25lbnQgb3JcbiAgICAvLyB0byBjcmVhdGUgbWFueSBjb21wb25lbnRzIGZvciBlYWNoIGl0ZW0uXG4gICAgLy8gT3ZlcmxvYWRpbmcgYW5kIGhhdmluZyB0aGlzIHNpZGUgZWZmZWN0IGlzIHVuaW50dWl0aXZlIGFuZCBXUk9OR1xuICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZERhdGEpKSB7XG4gICAgICAvLyBSZW5kZXJpbmcgYSBzdWIgY29tcG9uZW50IHNob3VsZCBiZSB3aXRoaW4gdGhlIGNvbnRleHQsXG4gICAgICAvLyBvZiB0aGUgbm9kZSB0aGF0IHdlIHByb2Nlc3NlZCBpdCBmcm9tXG4gICAgICB0aGlzLmFkZENoaWxkKGNoaWxkRGF0YSwgdHlwZSwgb3B0cyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2hpbGREYXRhLnJldmVyc2UoKTtcbiAgICBjaGlsZERhdGEuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIHRoaXMuYWRkQ2hpbGQoZGF0YSwgdHlwZSwgb3B0cyk7XG4gICAgfSk7XG4gIH1cblxuICBfY3JlYXRlQW5hbHl0aWNzSG9vayAoZG9tQ29tcG9uZW50KSB7XG4gICAgZG9tQ29tcG9uZW50LmRhdGFzZXQuaXNBbmFseXRpY3NBdHRhY2hlZCA9IHRydWU7XG4gICAgY29uc3QgZGF0YXNldCA9IGRvbUNvbXBvbmVudC5kYXRhc2V0O1xuICAgIGNvbnN0IHR5cGUgPSBkYXRhc2V0LmV2ZW50dHlwZTtcbiAgICBjb25zdCBsYWJlbCA9IGRhdGFzZXQuZXZlbnRsYWJlbDtcbiAgICBjb25zdCBvcHRpb25zID0gZGF0YXNldC5ldmVudG9wdGlvbnMgPyBKU09OLnBhcnNlKGRhdGFzZXQuZXZlbnRvcHRpb25zKSA6IHt9O1xuXG4gICAgRE9NLm9uKGRvbUNvbXBvbmVudCwgJ2NsaWNrJywgZSA9PiB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBBbmFseXRpY3NFdmVudCh0eXBlLCBsYWJlbCk7XG4gICAgICBldmVudC5hZGRPcHRpb25zKHRoaXMuX2FuYWx5dGljc09wdGlvbnMpO1xuICAgICAgZXZlbnQuYWRkT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgIHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIucmVwb3J0KGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbkNyZWF0ZSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGNvbnN0cnVjdGVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvbkNyZWF0ZSAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uVXBkYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGNoYW5nZXNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uVXBkYXRlIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlUmVuZGVyIGV2ZW50IGlzIHRyaWdnZXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYmVmb3JlUmVuZGVyIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYWZ0ZXJSZW5kZXIgZXZlbnQgaXMgdHJpZ2dlcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIGFmdGVyUmVuZGVyIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25Nb3VudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFwcGVuZGVkIHRvIHRoZSBET01cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvblVuTW91bnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyByZW1vdmVkIGZyb20gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25Vbk1vdW50IChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlTW91bnQgaXMgdHJpZ2dlcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQgdG8gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYmVmb3JlTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvbkRlc3Ryb3kgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uRGVzdHJveSAoY2IpIHtcblxuICB9XG59XG4iLCIvKiogQG1vZHVsZSBOYXZpZ2F0aW9uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIFRoZSBkZWJvdW5jZSBkdXJhdGlvbiBmb3IgcmVzaXplIGV2ZW50c1xuICogQHR5cGUge251bWJlcn1cbiAqL1xuY29uc3QgUkVTSVpFX0RFQk9VTkNFID0gMTAwO1xuXG4vKipcbiAqIFRoZSBUYWIgaXMgYSBtb2RlbCB0aGF0IGlzIHVzZWQgdG8gcG93ZXIgdGhlIE5hdmlnYXRpb24gdGFicyBpbiB0aGUgdmlldy5cbiAqIEl0J3MgaW5pdGlhbGl6ZWQgdGhyb3VnaCB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50LlxuICovXG5leHBvcnQgY2xhc3MgVGFiIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSB0YWIgdGhhdCBpcyBleHBvc2VkIGZvciB0aGUgbGlua1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbCA9IGNvbmZpZy5sYWJlbDtcbiAgICBpZiAodHlwZW9mIHRoaXMubGFiZWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCdsYWJlbCBpcyBhIHJlcXVpcmVkIGNvbmZpZ3VyYXRpb24gb3B0aW9uIGZvciB0YWIuJywgJ05hdmlnYXRpb25Db21wb25lbnQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcGxldGUgVVJMLCBpbmNsdWRpbmcgdGhlIHBhcmFtc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy51cmwgPSBjb25maWcudXJsO1xuICAgIGlmICh0eXBlb2YgdGhpcy51cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCd1cmwgaXMgYSByZXF1aXJlZCBjb25maWd1cmF0aW9uIG9wdGlvbiBmb3IgdGFiLicsICdOYXZpZ2F0aW9uQ29tcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlcnZlcnNpZGUgdmVydGljYWwgY29uZmlnIGlkIHRoYXQgdGhpcyBpcyByZWZlcmVuY2VkIHRvLlxuICAgICAqIEJ5IHByb3ZpZGluZyB0aGlzLCBlbmFibGVzIGR5bmFtaWMgc29ydGluZyBiYXNlZCBvbiByZXN1bHRzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5jb25maWdJZCA9IGNvbmZpZy5jb25maWdJZCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhc2UgVVJMIHVzZWQgZm9yIGNvbnN0cnVjdGluZyB0aGUgVVJMIHdpdGggcGFyYW1zXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmJhc2VVcmwgPSBjb25maWcudXJsO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHNob3cgdGhpcyB0YWIgZmlyc3QgaW4gdGhlIG9yZGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc0ZpcnN0ID0gY29uZmlnLmlzRmlyc3QgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRvIGFwcGx5IGEgc3BlY2lhbCBjbGFzcyB0byB0aGVcbiAgICAgKiBtYXJrdXAgdG8gZGV0ZXJtaW5lIGlmIGl0J3MgYW4gYWN0aXZlIHRhYlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNBY3RpdmUgPSBjb25maWcuaXNBY3RpdmUgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogaGVscGVyIHRvIGNvbnN0cnVjdCB0aGUgZXZlbnRPcHRpb25zIGZvciBhbmFseXRpY3NcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldCBldmVudE9wdGlvbnMgKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiB0aGlzLmNvbmZpZ0lkXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogZnJvbSB3aWxsIGNvbnN0cnVjdCBhIG1hcCBvZiBjb25maWdJZCB0byB7VGFifSBmcm9tXG4gICAqIGEgY29uZmlndXJhdGlvbiBmaWxlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0YWJzQ29uZmlnIHRoZSBjb25maWd1cmF0aW9uIHRvIHVzZVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHRhYnNDb25maWcpIHtcbiAgICBsZXQgdGFicyA9IHt9O1xuICAgIC8vIFBhcnNlIHRoZSBvcHRpb25zIGFuZCBidWlsZCBvdXQgb3VyIHRhYnMgYW5kXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzQ29uZmlnLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdGFiID0gdGFic0NvbmZpZ1tpXTtcbiAgICAgIC8vIEZvciB0YWJzIHdpdGhvdXQgY29uZmlnIGlkcywgbWFwIHRoZWlyIFVSTCB0byB0aGUgY29uZmlnSURcbiAgICAgIC8vIHRvIGF2b2lkIGR1cGxpY2F0aW9uIG9mIHJlbmRlcnNcbiAgICAgIGlmICh0YWIuY29uZmlnSWQgPT09IHVuZGVmaW5lZCAmJiB0YWJzW3RhYi5jb25maWdJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YWIuY29uZmlnSWQgPSB0YWIudXJsO1xuICAgICAgfVxuXG4gICAgICB0YWJzW3RhYi5jb25maWdJZF0gPSBuZXcgVGFiKHRhYik7XG4gICAgfVxuICAgIHJldHVybiB0YWJzO1xuICB9XG59XG5cbi8qKlxuICogTmF2aWdhdGlvbkNvbXBvbmVudCBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgYnVpbGRpbmcgYSBkeW5hbWljXG4gKiBuYXZpZ2F0aW9uIHRoYXQgaXMgcG93ZXJlZCBieSB1bml2ZXJzYWwgc2VhcmNoIHVwZGF0ZXMuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gc2hvdyBvbiB0aGUgZHJvcGRvd24gbWVudSBidXR0b25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZHJvcGRvd25MYWJlbCA9IGNvbmZpZy5kcm9wZG93bkxhYmVsIHx8ICdNb3JlJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBpY29uIHRvIHNob3cgb24gdGhlIGRyb3Bkb3duIG1lbnUgYnV0dG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmRyb3Bkb3duSWNvbiA9IGNvbmZpZy5kcm9wZG93bkljb24gfHwgJ2thYm9iJztcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHJlbmRlciBhIHN0YXRpYyBuYXZpZ2F0aW9uIHdpdGggbm8gXCJtb3JlXCIgbWVudVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuc3RhdGljID0gY29uZmlnLnN0YXRpYyB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkYXRhIHN0b3JhZ2Uga2V5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuTkFWSUdBVElPTjtcblxuICAgIC8qKlxuICAgICAqIFVub3JkZXJlZCBtYXAgb2YgZWFjaCB0YWIsIGtleWVkIGJ5IFZTIGNvbmZpZ0lkXG4gICAgICogQHR5cGUge09iamVjdC48U3RyaW5nLCBPYmplY3Q+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGFicyA9IFRhYi5mcm9tKGNvbmZpZy50YWJzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcmRlciBvZiB0aGUgdGFicywgcGFyc2VkIGZyb20gY29uZmlndXJhdGlvbiBvciBVUkwuXG4gICAgICogVGhpcyBnZXRzIHVwZGF0ZWQgYmFzZWQgb24gdGhlIHNlcnZlciByZXN1bHRzXG4gICAgICogQHR5cGUge0FycmF5LjxTdHJpbmc+fSBUaGUgbGlzdCBvZiBWUyBjb25maWdJZHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RhYk9yZGVyID0gdGhpcy5nZXREZWZhdWx0VGFiT3JkZXIoY29uZmlnLnRhYnMsIHRoaXMuZ2V0VXJsUGFyYW1zKCkpO1xuXG4gICAgLyoqXG4gICAgICogQnJlYWtwb2ludHMgYXQgd2hpY2ggbmF2aWdhdGlvbiBpdGVtcyBtb3ZlIHRvIHRoZSBcIm1vcmVcIiBkcm9wZG93blxuICAgICAqIEB0eXBlIHtudW1iZXJbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX25hdkJyZWFrcG9pbnRzID0gW107XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTmF2aWdhdGlvbic7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ25hdmlnYXRpb24vbmF2aWdhdGlvbic7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgRE9NLm9uKHdpbmRvdywgJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2RlYm91bmNlVGltZXIpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGVib3VuY2VUaW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kZWJvdW5jZVRpbWVyID0gc2V0VGltZW91dCh0aGlzLnJlZml0TmF2LmJpbmQodGhpcyksIFJFU0laRV9ERUJPVU5DRSk7XG4gICAgICB9KTtcbiAgICAgIERPTS5vbih3aW5kb3csICdjbGljaycsIHRoaXMuY2hlY2tPdXRzaWRlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgdGhpcy5yZWZpdE5hdigpO1xuICAgICAgRE9NLm9uKERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb3JlJyksICdjbGljaycsIHRoaXMudG9nZ2xlTW9yZURyb3Bkb3duLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHJlZml0TmF2ICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtY29udGFpbmVyJyk7XG4gICAgY29uc3QgbW9yZUJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb3JlJyk7XG4gICAgY29uc3QgbWFpbkxpbmtzID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LWV4cGFuZGVkJyk7XG4gICAgY29uc3QgY29sbGFwc2VkTGlua3MgPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9kYWwnKTtcblxuICAgIGNvbnN0IG5hdldpZHRoID0gbW9yZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3l4dC1OYXYtaXRlbS0tbW9yZScpXG4gICAgICA/IGNvbnRhaW5lci5vZmZzZXRXaWR0aFxuICAgICAgOiBjb250YWluZXIub2Zmc2V0V2lkdGggLSBtb3JlQnV0dG9uLm9mZnNldFdpZHRoO1xuICAgIGxldCBudW1CcmVha3BvaW50cyA9IHRoaXMuX25hdkJyZWFrcG9pbnRzLmxlbmd0aDtcblxuICAgIC8vIHN1bSBjaGlsZCB3aWR0aHMgaW5zdGVhZCBvZiB1c2luZyBwYXJlbnQncyB3aWR0aCB0byBhdm9pZFxuICAgIC8vIGJyb3dzZXIgaW5jb25zaXN0ZW5jaWVzXG4gICAgbGV0IG1haW5MaW5rc1dpZHRoID0gMDtcbiAgICBmb3IgKGxldCBlbCBvZiBtYWluTGlua3MuY2hpbGRyZW4pIHtcbiAgICAgIG1haW5MaW5rc1dpZHRoICs9IGVsLm9mZnNldFdpZHRoO1xuICAgIH1cblxuICAgIGlmIChtYWluTGlua3NXaWR0aCA+IG5hdldpZHRoKSB7XG4gICAgICB0aGlzLl9uYXZCcmVha3BvaW50cy5wdXNoKG1haW5MaW5rc1dpZHRoKTtcbiAgICAgIGNvbnN0IGxhc3RMaW5rID0gbWFpbkxpbmtzLmNoaWxkcmVuLml0ZW0obWFpbkxpbmtzLmNoaWxkcmVuLmxlbmd0aCAtIDEpO1xuICAgICAgaWYgKGxhc3RMaW5rID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbGxhcHNlZExpbmtzLnByZXBlbmQobGFzdExpbmspO1xuXG4gICAgICBpZiAobW9yZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3l4dC1OYXYtaXRlbS0tbW9yZScpKSB7XG4gICAgICAgIG1vcmVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgneXh0LU5hdi1pdGVtLS1tb3JlJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChudW1CcmVha3BvaW50cyAmJiBuYXZXaWR0aCA+IHRoaXMuX25hdkJyZWFrcG9pbnRzW251bUJyZWFrcG9pbnRzIC0gMV0pIHtcbiAgICAgICAgY29uc3QgZmlyc3RMaW5rID0gY29sbGFwc2VkTGlua3MuY2hpbGRyZW4uaXRlbSgwKTtcbiAgICAgICAgaWYgKGZpcnN0TGluayA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBtYWluTGlua3MuYXBwZW5kKGZpcnN0TGluayk7XG4gICAgICAgIHRoaXMuX25hdkJyZWFrcG9pbnRzLnBvcCgpO1xuICAgICAgICBudW1CcmVha3BvaW50cy0tO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29sbGFwc2VkTGlua3MuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIG1vcmVCdXR0b24uY2xhc3NMaXN0LmFkZCgneXh0LU5hdi1pdGVtLS1tb3JlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZU1vcmVEcm9wZG93bigpO1xuICAgIGlmIChtYWluTGlua3NXaWR0aCA+IG5hdldpZHRoIHx8XG4gICAgICAobnVtQnJlYWtwb2ludHMgPiAwICYmIG5hdldpZHRoID4gdGhpcy5fbmF2QnJlYWtwb2ludHNbbnVtQnJlYWtwb2ludHMgLSAxXSkpIHtcbiAgICAgIHRoaXMucmVmaXROYXYoKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZU1vcmVEcm9wZG93biAoKSB7XG4gICAgY29uc3QgY29sbGFwc2VkID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vZGFsJyk7XG4gICAgY29sbGFwc2VkLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgIGNvbnN0IG1vcmVCdXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9yZScpO1xuICAgIG1vcmVCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICB9XG5cbiAgb3Blbk1vcmVEcm9wZG93biAoKSB7XG4gICAgY29uc3QgY29sbGFwc2VkID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vZGFsJyk7XG4gICAgY29sbGFwc2VkLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgIGNvbnN0IG1vcmVCdXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9yZScpO1xuICAgIG1vcmVCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gIH1cblxuICB0b2dnbGVNb3JlRHJvcGRvd24gKCkge1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb2RhbCcpO1xuICAgIGNvbGxhcHNlZC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICBjb25zdCBtb3JlQnV0dG9uID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vcmUnKTtcbiAgICBtb3JlQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGNvbGxhcHNlZC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKTtcbiAgfVxuXG4gIGNoZWNrT3V0c2lkZUNsaWNrIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy55eHQtTmF2LWNvbnRhaW5lcicpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZU1vcmVEcm9wZG93bigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbmNlIHRoZSBzZXJ2ZXIgZGF0YSBvbmx5IHByb3ZpZGVzIGEgbGlzdCBvZlxuICAgKiBWUyBjb25maWdJZHMsIHdlIG5lZWQgdG8gY29tcHV0ZSBhbmQgdHJhbnNmb3JtXG4gICAqIHRoZSBkYXRhIGludG8gdGhlIHByb3BlciBmb3JtYXQgZm9yIHJlbmRlcmluZy5cbiAgICpcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIGlmIChkYXRhLnRhYk9yZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3RhYk9yZGVyID0gdGhpcy5tZXJnZVRhYk9yZGVyKGRhdGEudGFiT3JkZXIsIHRoaXMuX3RhYk9yZGVyKTtcbiAgICB9XG5cbiAgICAvLyBTaW5jZSB0aGUgdGFiIG9yZGVyaW5nIGNhbiBjaGFuZ2UgYmFzZWQgb24gdGhlIHNlcnZlciBkYXRhXG4gICAgLy8gd2UgbmVlZCB0byB1cGRhdGUgZWFjaCB0YWJzIFVSTCB0byBpbmNsdWRlIHRoZSBvcmRlciBhcyBwYXJ0IG9mIHRoZWlyIHBhcmFtcy5cbiAgICAvLyBUaGlzIGhlbHBzIHdpdGggcGVyc2lzdGluZyBzdGF0ZSBhY3Jvc3MgdmVydGljYWxzLlxuICAgIGxldCB0YWJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90YWJPcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRhYiA9IHRoaXMuX3RhYnNbdGhpcy5fdGFiT3JkZXJbaV1dO1xuICAgICAgaWYgKHRhYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhYi51cmwgPSB0aGlzLmdlbmVyYXRlVGFiVXJsKHRhYi5iYXNlVXJsLCB0aGlzLmdldFVybFBhcmFtcygpKTtcbiAgICAgICAgdGFicy5wdXNoKHRhYik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKHtcbiAgICAgIHRhYnM6IHRhYnMsXG4gICAgICBkcm9wZG93bkxhYmVsOiB0aGlzLmRyb3Bkb3duTGFiZWwsXG4gICAgICBkcm9wZG93bkljb246IHRoaXMuZHJvcGRvd25JY29uLFxuICAgICAgc3RhdGljOiB0aGlzLnN0YXRpY1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VXJsUGFyYW1zICgpIHtcbiAgICByZXR1cm4gbmV3IFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0RGVmYXVsdFRhYk9yZGVyIHdpbGwgY29tcHV0ZSB0aGUgaW5pdGlhbCB0YWIgb3JkZXJpbmcgYmFzZWRcbiAgICogb24gYSBjb21iaW5hdGlvbiBvZiB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZCBkaXJlY3RseSB0byB0aGUgY29tcG9uZW50XG4gICAqIGFuZCB0aGUgdXJsIHBhcmFtcy5cbiAgICogQHBhcmFtIHtPYmplY3RbXX0gdGFic0NvbmZpZ1xuICAgKiBAcGFyYW0ge1NlYXJjaFBhcmFtc31cbiAgICovXG4gIGdldERlZmF1bHRUYWJPcmRlciAodGFic0NvbmZpZywgdXJsUGFyYW1zKSB7XG4gICAgbGV0IHRhYk9yZGVyID0gW107XG5cbiAgICAvLyBVc2UgdGhlIG9yZGVyaW5nIGZyb20gdGhlIFVSTCBhcyB0aGUgcHJpbWFyeSBjb25maWd1cmF0aW9uXG4gICAgLy8gQW5kIHRoZW4gbWVyZ2UgaXQgd2l0aCB0aGUgbG9jYWwgY29uZmlndXJhdGlvbiwgaWYgcHJvdmlkZWQuXG4gICAgaWYgKHVybFBhcmFtcyAmJiB1cmxQYXJhbXMuaGFzKCd0YWJPcmRlcicpKSB7XG4gICAgICB0YWJPcmRlciA9IHVybFBhcmFtcy5nZXQoJ3RhYk9yZGVyJykuc3BsaXQoJywnKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNDb25maWcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhYiA9IHRhYnNDb25maWdbaV07XG4gICAgICAvLyBTb21lIHRhYnMgZG9uJ3QgaGF2ZSBjb25maWdJZCwgc28gd2UgbWFwIGl0IGZyb20gVVJMXG4gICAgICBpZiAodGFiLmNvbmZpZ0lkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGFiLmNvbmZpZ0lkID0gdGFiLnVybDtcbiAgICAgIH1cblxuICAgICAgLy8gQXZvaWQgZHVwbGljYXRlcyBpZiBjb25maWcgd2FzIHByb3ZpZGVkIGZyb20gVVJMXG4gICAgICBpZiAodGFiT3JkZXIuaW5jbHVkZXModGFiLmNvbmZpZ0lkKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gaXNGaXJzdCBzaG91bGQgYWx3YXlzIGJlIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBsaXN0XG4gICAgICBpZiAodGFiLmlzRmlyc3QpIHtcbiAgICAgICAgdGFiT3JkZXIudW5zaGlmdCh0YWIuY29uZmlnSWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFiT3JkZXIucHVzaCh0YWIuY29uZmlnSWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YWJPcmRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBtZXJnZVRhYk9yZGVyIG1lcmdlcyB0d28gYXJyYXlzIGludG8gb25lXG4gICAqIGJ5IGFwcGVuZGluZyBhZGRpdGlvbmFsIHRhYnMgdG8gdGhlIGVuZCBvZiB0aGUgb3JpZ2luYWwgYXJyYXlcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdGFiT3JkZXIgVGFiIG9yZGVyIHByb3ZpZGVkIGJ5IHRoZSBzZXJ2ZXJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gb3RoZXJUYWJPcmRlciBUYWIgb3JkZXIgcHJvdmlkZWQgYnkgY29uZmlndXJhdGlvblxuICAgKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAgICovXG4gIG1lcmdlVGFiT3JkZXIgKHRhYk9yZGVyLCBvdGhlclRhYk9yZGVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdGhlclRhYk9yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YWJDb25maWcgPSBvdGhlclRhYk9yZGVyW2ldO1xuICAgICAgaWYgKHRhYk9yZGVyLmluY2x1ZGVzKHRhYkNvbmZpZykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIGlzRmlyc3Qgc2hvdWxkIGJlIGFuIG92ZXJyaWRlIHRvIGR5bmFtaWMgdGFiIG9yZGVyaW5nLlxuICAgICAgaWYgKHRoaXMuX3RhYnNbdGFiQ29uZmlnXSAmJiB0aGlzLl90YWJzW3RhYkNvbmZpZ10uaXNGaXJzdCkge1xuICAgICAgICB0YWJPcmRlci51bnNoaWZ0KHRhYkNvbmZpZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWJPcmRlci5wdXNoKHRhYkNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYk9yZGVyO1xuICB9XG5cbiAgZ2VuZXJhdGVUYWJVcmwgKGJhc2VVcmwsIHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKSkge1xuICAgIC8vIFdlIHdhbnQgdG8gcGVyc2lzdCB0aGUgcGFyYW1zIGZyb20gdGhlIGV4aXN0aW5nIFVSTCB0byB0aGUgbmV3XG4gICAgLy8gVVJMUyB3ZSBjcmVhdGUuXG4gICAgcGFyYW1zLnNldCgndGFiT3JkZXInLCB0aGlzLl90YWJPcmRlcik7XG4gICAgcmV0dXJuIGJhc2VVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyICovXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBhcGkgZmlsdGVyIGFuZCBwcm92aWRlcyBzdGF0aWMgbWV0aG9kcyBmb3IgZWFzaWx5IGNvbnN0cnVjdGluZyBGaWx0ZXJzLlxuICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLnlleHQuY29tL2RvY3MvYXBpLXJlZmVyZW5jZS8jb3BlcmF0aW9uL2xpc3RFbnRpdGllcyBmb3Igc3RydWN0dXJlIGRldGFpbHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBhIEpTT04gZm9ybWF0IGZpbHRlciByZXR1cm5lZCBmcm9tIHRoZSBzZXJ2ZXIgaW50byBhIEZpbHRlclxuICAgKiBAcGFyYW0geyp9IHJlc3BvbnNlRmlsdGVyIEEgZmlsdGVyIGluIEpTT04gZm9ybWF0IHJldHVybmVkIGZyb20gdGhlIGJhY2tlbmRcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBmcm9tUmVzcG9uc2UgKHJlc3BvbnNlRmlsdGVyKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoSlNPTi5wYXJzZShyZXNwb25zZUZpbHRlcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIG5ldyBGaWx0ZXIgcmVwcmVzZW50aW5nIHRoZSBPUiBvZiBhbGwgcHJvdmlkZWQgZmlsdGVyc1xuICAgKiBAcGFyYW0gIHsuLi5GaWx0ZXJ9IGZpbHRlcnMgVGhlIGZpbHRlcnMgdG8gT1IgdG9nZXRoZXJcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBvciAoLi4uZmlsdGVycykge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgICckb3InOiBmaWx0ZXJzXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgbmV3IEZpbHRlciByZXByZXNlbnRpbmcgdGhlIEFORCBvZiBhbGwgcHJvdmlkZWQgZmlsdGVyc1xuICAgKiBAcGFyYW0gIHsuLi5GaWx0ZXJ9IGZpbHRlcnMgVGhlIGZpbHRlcnMgdG8gQU5EIHRvZ2V0aGVyXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgYW5kICguLi5maWx0ZXJzKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgJyRhbmQnOiBmaWx0ZXJzXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT1IgZmlsdGVycyB3aXRoIHRoZSBzYW1lIGtleXMsIHRoZW4gQU5EIHRoZSByZXN1bHRpbmcgZ3JvdXBzXG4gICAqIEBwYXJhbSAgey4uLkZpbHRlcn0gZmlsdGVycyBUaGUgZmlsdGVycyB0byBncm91cFxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGdyb3VwICguLi5maWx0ZXJzKSB7XG4gICAgY29uc3QgZ3JvdXBzID0ge307XG4gICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgZmlsdGVycykge1xuICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMoZmlsdGVyKVswXTtcbiAgICAgIGlmICghZ3JvdXBzW2tleV0pIHtcbiAgICAgICAgZ3JvdXBzW2tleV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1trZXldLnB1c2goZmlsdGVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBncm91cEZpbHRlcnMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIE9iamVjdC5rZXlzKGdyb3VwcykpIHtcbiAgICAgIGdyb3VwRmlsdGVycy5wdXNoKGdyb3Vwc1tmaWVsZF0ubGVuZ3RoID4gMSA/IEZpbHRlci5vciguLi5ncm91cHNbZmllbGRdKSA6IGdyb3Vwc1tmaWVsZF1bMF0pO1xuICAgIH1cblxuICAgIHJldHVybiBncm91cEZpbHRlcnMubGVuZ3RoID4gMSA/IEZpbHRlci5hbmQoLi4uZ3JvdXBGaWx0ZXJzKSA6IGdyb3VwRmlsdGVyc1swXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJlcXVhbCB0b1wiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGVxdWFsIHRvXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZXF1YWwgKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGVxJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImxlc3MgdGhhblwiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGxlc3MgdGhhblxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGxlc3NUaGFuIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRsdCcsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJsZXNzIHRoYW4gb3IgZXF1YWwgdG9cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG9cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBsZXNzVGhhbkVxdWFsIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRsZScsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJncmVhdGVyIHRoYW5cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBncmVhdGVyIHRoYW5cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBncmVhdGVyVGhhbiAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckZ3QnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwiZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ3JlYXRlclRoYW5FcXVhbCAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckZ2UnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGluY2x1c2l2ZSByYW5nZSBmaWx0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSBtaW4gVGhlIG1pbmltdW0gdmFsdWVcbiAgICogQHBhcmFtIHsqfSBtYXggVGhlIG1heGltdW0gdmFsdWVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBpbmNsdXNpdmVSYW5nZSAoZmllbGQsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgW2ZpZWxkXToge1xuICAgICAgICAnJGdlJzogbWluLFxuICAgICAgICAnJGxlJzogbWF4XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGV4Y2x1c2l2ZSByYW5nZSBmaWx0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSBtaW4gVGhlIG1pbmltdW0gdmFsdWVcbiAgICogQHBhcmFtIHsqfSBtYXggVGhlIG1heGltdW0gdmFsdWVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBleGNsdXNpdmVSYW5nZSAoZmllbGQsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgW2ZpZWxkXToge1xuICAgICAgICAnJGd0JzogbWluLFxuICAgICAgICAnJGx0JzogbWF4XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IHBvc2l0aW9uIGZpbHRlclxuICAgKiBAcGFyYW0ge251bWJlcn0gbGF0IFRoZSBsYXRpdHVkZSBvZiB0aGUgcG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxuZyBUaGUgbG9uZ2l0dWRlIG9mIHRoZSBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIFRoZSBzZWFyY2ggcmFkaXVzIChpbiBtZXRlcnMpXG4gICAqL1xuICBzdGF0aWMgcG9zaXRpb24gKGxhdCwgbG5nLCByYWRpdXMpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcignYnVpbHRpbi5sb2NhdGlvbicsICckbmVhcicsIHsgbGF0LCBsbmcsIHJhZGl1cyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgZmlsdGVyIHdpdGggdGhlIGdpdmVuIG1hdGNoZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1hdGNoZXIgVGhlIG1hdGNoZXIgZm9yIHRoZSBmaWxlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBmb3IgdGhlIGZpbHRlclxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIF9mcm9tTWF0Y2hlciAoZmllbGQsIG1hdGNoZXIsIHZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgW2ZpZWxkXToge1xuICAgICAgICBbbWF0Y2hlcl06IHZhbHVlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaENvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uL2RvbS9zZWFyY2hwYXJhbXMnO1xuXG4vKipcbiAqIFNlYXJjaENvbXBvbmVudCBleHBvc2VzIGFuIGludGVyZmFjZSBpbiBvcmRlciB0byBjcmVhdGVcbiAqIGEgVUkgU2VhcmNoIGV4cGVyaWVuY2UgZm9yIHZlcnRpY2FsIGFuZCB1bml2ZXJzYWwgc2VhcmNoLlxuICpcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGlucHV0IGtleSBmb3IgdGhlIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCBhdXRvLWNvbXBsZXRlIGFuZCBzZWFyY2ggd2lsbCBiZSBiYXNlZCBvbiB1bml2ZXJzYWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2JhcktleSA9IGNvbmZpZy5iYXJLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCB2ZXJ0aWNhbCBrZXkgZm9yIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCBhdXRvLWNvbXBsZXRlIGFuZCBzZWFyY2ggd2lsbCBiZSBiYXNlZCBvbiB1bml2ZXJzYWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBRdWVyeSBzdWJtaXNzaW9uIGlzIGJhc2VkIG9uIGEgZm9ybSBhcyBjb250ZXh0LlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBuYXRpdmUgZm9ybSBub2RlIHdpdGhpbiBjb250YWluZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9mb3JtRWwgPSBjb25maWcuZm9ybVNlbGVjdG9yIHx8ICdmb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBlbGVtZW50IHVzZWQgZm9yIHNlYXJjaGluZyBhbmQgd2lyZXMgdXAgdGhlIGtleWJvYXJkIGludGVyYWN0aW9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gY29uZmlnLmlucHV0RWwgfHwgJy5qcy15ZXh0LXF1ZXJ5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB1c2VkLCBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgYXMgYSBkYXRhIHBvaW50XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudGl0bGUgPSBjb25maWcudGl0bGUgfHwgJ0Fuc3dlcnMgVW5pdmVyc2FsIFNlYXJjaCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdGV4dCBpcyB1c2VkIGZvciBsYWJlbGluZyB0aGUgaW5wdXQgYm94LCBhbHNvIHByb3ZpZGVkIHRvIHRlbXBsYXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWxUZXh0ID0gY29uZmlnLmxhYmVsVGV4dCB8fCAnV2hhdCBhcmUgeW91IGludGVyZXN0ZWQgaW4/JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdWJtaXQgdGV4dCBpcyB1c2VkIGZvciBsYWJlbGluZyB0aGUgc3VibWl0IGJ1dHRvbiwgYWxzbyBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnN1Ym1pdFRleHQgPSBjb25maWcuc3VibWl0VGV4dCB8fCAnU3VibWl0JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdWJtaXQgaWNvbiBpcyBhbiBpY29uIGZvciB0aGUgc3VibWl0IGJ1dHRvbiwgaWYgcHJvdmlkZWQgaXQgd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHRoZVxuICAgICAqIHN1Ym1pdCB0ZXh0IHdpbGwgYmUgdXNlZCBmb3Igc2NyZWVuIHJlYWRlcnMuXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMuc3VibWl0SWNvbiA9IGNvbmZpZy5zdWJtaXRJY29uIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgdGV4dCB0byBzaG93IGFzIHRoZSBmaXJzdCBpdGVtIGZvciBhdXRvIGNvbXBsZXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucHJvbXB0SGVhZGVyID0gY29uZmlnLnByb21wdEhlYWRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQXV0byBmb2N1c2VzIHRoZSBpbnB1dCBib3ggaWYgc2V0IHRvIHRydWUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvRm9jdXMgPSBjb25maWcuYXV0b0ZvY3VzID09PSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc2hvdyBhbiBcInhcIiB0aGF0IGFsbG93cyB0aGUgdXNlciB0byBjbGVhciB0aGUgY3VycmVudFxuICAgICAqIHF1ZXJ5XG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5jbGVhckJ1dHRvbiA9IGNvbmZpZy5jbGVhckJ1dHRvbiA9PT0gdW5kZWZpbmVkXG4gICAgICA/IHRydWVcbiAgICAgIDogY29uZmlnLmNsZWFyQnV0dG9uO1xuXG4gICAgLyoqXG4gICAgICogV2hlbiBhdXRvZm9jdXNpbmcgb24gbG9hZCwgb3B0aW9uYWxseSBvcGVuIHRoZSBhdXRvY29tcGxldGVcbiAgICAgKiAocHJlc2V0IHByb21wdHMpXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvY29tcGxldGVPbkxvYWQgPSBjb25maWcuYXV0b2NvbXBsZXRlT25Mb2FkIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogc3VibWl0VVJMIHdpbGwgZm9yY2UgdGhlIHNlYXJjaCBxdWVyeSBzdWJtaXNzaW9uIHRvIGdldFxuICAgICAqIHJlZGlyZWN0ZWQgdG8gdGhlIFVSTCBwcm92aWRlZC5cbiAgICAgKiBPcHRpb25hbCwgZGVmYXVsdHMgdG8gbnVsbC5cbiAgICAgKlxuICAgICAqIElmIG5vIHJlZGlyZWN0VXJsIHByb3ZpZGVkLCB3ZSBrZWVwIHRoZSBwYWdlIGFzIGEgc2luZ2xlIHBhZ2UgYXBwLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZWRpcmVjdFVybCA9IGNvbmZpZy5yZWRpcmVjdFVybCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogdHJ1ZSBpZiB0aGVyZSBpcyBhbm90aGVyIHNlYXJjaCBiYXIgcHJlc2VudCBvbiB0aGUgcGFnZS5cbiAgICAgKiBUd2lucyBvbmx5IHVwZGF0ZSB0aGUgcXVlcnksIGFuZCBkbyBub3Qgc2VhcmNoXG4gICAgICovXG4gICAgdGhpcy5faXNUd2luID0gY29uZmlnLmlzVHdpbjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSBzdHJpbmcgdG8gdXNlIGZvciB0aGUgaW5wdXQgYm94LCBwcm92aWRlZCB0byB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlcnkgPSBjb25maWcucXVlcnkgfHwgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpIHx8ICcnO1xuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBTdG9yYWdlS2V5cy5RVUVSWSwgcSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gcTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKTtcbiAgICAgIHRoaXMuc2VhcmNoKHEpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG1pbmltdW0gdGltZSBhbGxvd2VkIGluIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHNlYXJjaGVzIHRvIHByZXZlbnRcbiAgICAgKiBtYW55IGR1cGxpY2F0ZSBzZWFyY2hlcyBiYWNrLXRvLWJhY2tcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc2VhcmNoQ29vbGRvd24gPSBjb25maWcuc2VhcmNoQ29vbGRvd24gfHwgMzAwO1xuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlIGFuZCBcIm5lYXIgbWVcIiBpbnRlbnQgaXMgZXhwcmVzc2VkLCBwcm9tcHQgdGhlIHVzZXIgZm9yIHRoZWlyIGdlb2xvY2F0aW9uXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9wcm9tcHRGb3JMb2NhdGlvbiA9IGNvbmZpZy5wcm9tcHRGb3JMb2NhdGlvbiA9PT0gdW5kZWZpbmVkXG4gICAgICA/IHRydWVcbiAgICAgIDogQm9vbGVhbihjb25maWcucHJvbXB0Rm9yTG9jYXRpb24pO1xuXG4gICAgLyoqXG4gICAgICogQ29udHJvbHMgc2hvd2luZyBhbmQgaGlkaW5nIHRoZSBzZWFyY2ggY2xlYXIgYnV0dG9uXG4gICAgICovXG4gICAgdGhpcy5fc2hvd0NsZWFyQnV0dG9uID0gdGhpcy5jbGVhckJ1dHRvbiAmJiB0aGlzLnF1ZXJ5O1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1NlYXJjaEJhcic7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lICgpIHtcbiAgICByZXR1cm4gJ3NlYXJjaC9zZWFyY2gnO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIGlmICh0aGlzLnF1ZXJ5ICYmICF0aGlzLnJlZGlyZWN0VXJsKSB7XG4gICAgICB0aGlzLmNvcmUuc2V0UXVlcnkodGhpcy5xdWVyeSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcm9tcHRGb3JMb2NhdGlvbikge1xuICAgICAgdGhpcy5pbml0TG9jYXRpb25Qcm9tcHQoKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMgPT09IHRydWUgJiYgdGhpcy5xdWVyeS5sZW5ndGggPT09IDAgJiYgIXRoaXMuYXV0b2NvbXBsZXRlT25Mb2FkKSB7XG4gICAgICBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKS5mb2N1cygpO1xuICAgIH1cblxuICAgIC8vIFdpcmUgdXAgb3VyIHNlYXJjaCBoYW5kbGluZyBhbmQgYXV0byBjb21wbGV0ZVxuICAgIHRoaXMuaW5pdFNlYXJjaCh0aGlzLl9mb3JtRWwpO1xuICAgIHRoaXMuaW5pdEF1dG9Db21wbGV0ZSh0aGlzLl9pbnB1dEVsKTtcblxuICAgIGlmICh0aGlzLmNsZWFyQnV0dG9uKSB7XG4gICAgICB0aGlzLmluaXRDbGVhckJ1dHRvbigpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cyA9PT0gdHJ1ZSAmJiB0aGlzLnF1ZXJ5Lmxlbmd0aCA9PT0gMCAmJiB0aGlzLmF1dG9jb21wbGV0ZU9uTG9hZCkge1xuICAgICAgRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5faW5wdXRFbCkuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUgKCkge1xuICAgIHRoaXMuX2F1dG9jb21wbGV0ZS5yZW1vdmUoKTtcbiAgICBzdXBlci5yZW1vdmUoKTtcbiAgfVxuXG4gIGluaXRDbGVhckJ1dHRvbiAoKSB7XG4gICAgY29uc3QgYnV0dG9uID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy5qcy15eHQtU2VhcmNoQmFyLWNsZWFyJyk7XG4gICAgdGhpcy5fc2hvd0NsZWFyQnV0dG9uID0gdGhpcy5fc2hvd0NsZWFyQnV0dG9uIHx8IHRoaXMucXVlcnk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ3l4dC1TZWFyY2hCYXItLWhpZGRlbicsICF0aGlzLl9zaG93Q2xlYXJCdXR0b24pO1xuXG4gICAgRE9NLm9uKGJ1dHRvbiwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5xdWVyeSA9ICcnO1xuICAgICAgdGhpcy5fc2hvd0NsZWFyQnV0dG9uID0gZmFsc2U7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgneXh0LVNlYXJjaEJhci0taGlkZGVuJyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHt9KTtcbiAgICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFUlksIHRoaXMucXVlcnkpO1xuICAgICAgdGhpcy5jb3JlLnNldFF1ZXJ5KHRoaXMucXVlcnkpO1xuICAgIH0pO1xuXG4gICAgRE9NLm9uKHRoaXMuX2lucHV0RWwsICdpbnB1dCcsIGUgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGlmICghdGhpcy5fc2hvd0NsZWFyQnV0dG9uICYmIGlucHV0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5fc2hvd0NsZWFyQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3l4dC1TZWFyY2hCYXItLWhpZGRlbicpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9zaG93Q2xlYXJCdXR0b24gJiYgaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuX3Nob3dDbGVhckJ1dHRvbiA9IGZhbHNlO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgneXh0LVNlYXJjaEJhci0taGlkZGVuJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0TG9jYXRpb25Qcm9tcHQgKCkge1xuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBTdG9yYWdlS2V5cy5JTlRFTlRTLCBpbnRlbnQgPT4ge1xuICAgICAgaWYgKCFpbnRlbnQubmVhck1lIHx8IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLkdFT0xPQ0FUSU9OKSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ocG9zaXRpb24gPT4ge1xuICAgICAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuR0VPTE9DQVRJT04sIHtcbiAgICAgICAgICBsYXQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICBsbmc6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgICAgcmFkaXVzOiBwb3NpdGlvbi5jb29yZHMuYWNjdXJhY3lcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VhcmNoKHRoaXMucXVlcnkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHVzZSBmb3Igd2lyaW5nIHVwIHNlYXJjaGluZyBvbiBmb3JtIHN1Ym1pc3Npb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGZvcm1TZWxlY3RvciBDU1Mgc2VsZWN0b3IgdG8gYmluZCBvdXIgc3VibWl0IGhhbmRsaW5nIHRvXG4gICAqL1xuICBpbml0U2VhcmNoIChmb3JtU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9mb3JtRWwgPSBmb3JtU2VsZWN0b3I7XG5cbiAgICB0aGlzLl9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgneXh0LVNlYXJjaEJhci13cmFwcGVyJyk7XG5cbiAgICBsZXQgZm9ybSA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIGZvcm1TZWxlY3Rvcik7XG4gICAgaWYgKCFmb3JtKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBpbml0aWFsaXplIFNlYXJjaEJhcjsgQ2FuIG5vdCBmaW5kIHtIVE1MRWxlbWVudH0gYCcsIHRoaXMuX2Zvcm1FbCwgJ2AuJyk7XG4gICAgfVxuXG4gICAgRE9NLm9uKGZvcm0sICdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBsZXQgaW5wdXRFbCA9IGZvcm0ucXVlcnlTZWxlY3Rvcih0aGlzLl9pbnB1dEVsKTtcblxuICAgICAgbGV0IHF1ZXJ5ID0gaW5wdXRFbC52YWx1ZTtcbiAgICAgIGxldCBwYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICAgIHBhcmFtcy5zZXQoJ3F1ZXJ5JywgcXVlcnkpO1xuXG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgcmVkaXJlY3RVcmwsIHdlIHdhbnQgdGhlIGZvcm0gdG8gYmVcbiAgICAgIC8vIHNlcmlhbGl6ZWQgYW5kIHN1Ym1pdHRlZC5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5yZWRpcmVjdFVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLnJlZGlyZWN0VXJsICsgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaW5wdXRFbC5ibHVyKCk7XG5cbiAgICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFUlksIHF1ZXJ5KTtcbiAgICAgIHRoaXMuY29yZS5zZXRRdWVyeShxdWVyeSk7XG4gICAgICB0aGlzLnNlYXJjaChxdWVyeSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHdpcmUgdXAgb3VyIGF1dG8gY29tcGxldGUgb24gYW4gaW5wdXQgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIGF1dG8gY29tcGxldGUgY29tcG9uZW50IHRvXG4gICAqL1xuICBpbml0QXV0b0NvbXBsZXRlIChpbnB1dFNlbGVjdG9yKSB7XG4gICAgdGhpcy5faW5wdXRFbCA9IGlucHV0U2VsZWN0b3I7XG5cbiAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlKSB7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGUucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fYXV0b2NvbXBsZXRlID0gdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZSgnQXV0b0NvbXBsZXRlJywge1xuICAgICAgcGFyZW50Q29udGFpbmVyOiB0aGlzLl9jb250YWluZXIsXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmF1dG9jb21wbGV0ZWAsXG4gICAgICBjb250YWluZXI6ICcueXh0LVNlYXJjaEJhci1hdXRvY29tcGxldGUnLFxuICAgICAgYmFyS2V5OiB0aGlzLl9iYXJLZXksXG4gICAgICBhdXRvRm9jdXM6IHRoaXMuYXV0b0ZvY3VzICYmICF0aGlzLmF1dG9jb21wbGV0ZU9uTG9hZCxcbiAgICAgIHZlcnRpY2FsS2V5OiB0aGlzLl92ZXJ0aWNhbEtleSxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5wcm9tcHRIZWFkZXIsXG4gICAgICBvcmlnaW5hbFF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgaW5wdXRFbDogaW5wdXRTZWxlY3RvcixcbiAgICAgIG9uU3VibWl0OiAoKSA9PiB7XG4gICAgICAgIERPTS50cmlnZ2VyKERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2Zvcm1FbCksICdzdWJtaXQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaCAocXVlcnkpIHtcbiAgICAvLyBEb24ndCBzZWFyY2ggaWYgd2UgcmVjZW50bHkgc2VhcmNoZWQsXG4gICAgLy8gaWYgdGhlcmUncyBubyBxdWVyeSBmb3IgdW5pdmVyc2FsIHNlYXJjaCxcbiAgICAvLyBvciBpZiB0aGlzIGlzIGEgdHdpbiBzZWFyY2hiYXJcbiAgICBpZiAodGhpcy5fdGhyb3R0bGVkIHx8ICghcXVlcnkgJiYgIXRoaXMuX3ZlcnRpY2FsS2V5KSB8fCB0aGlzLl9pc1R3aW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl90aHJvdHRsZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLl90aHJvdHRsZWQgPSBmYWxzZTsgfSwgdGhpcy5fc2VhcmNoQ29vbGRvd24pO1xuXG4gICAgaWYgKHRoaXMuX3ZlcnRpY2FsS2V5KSB7XG4gICAgICBjb25zdCBhbGxGaWx0ZXJzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgICBjb25zdCB0b3RhbEZpbHRlciA9IGFsbEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgICA/IEZpbHRlci5hbmQoLi4uYWxsRmlsdGVycylcbiAgICAgICAgOiBhbGxGaWx0ZXJzWzBdO1xuICAgICAgY29uc3QgZmFjZXRGaWx0ZXIgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRkFDRVRfRklMVEVSKVswXTtcbiAgICAgIHJldHVybiB0aGlzLmNvcmUudmVydGljYWxTZWFyY2godGhpcy5fdmVydGljYWxLZXksIHtcbiAgICAgICAgaW5wdXQ6IHF1ZXJ5LFxuICAgICAgICBmaWx0ZXI6IEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSxcbiAgICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5PVEUoYmlsbHkpIFRlbXBvcmFyeSBoYWNrIGZvciBERU1PXG4gICAgICAvLyBSZW1vdmUgbWUgYWZ0ZXIgdGhlIGRlbW9cbiAgICAgIGxldCBuYXYgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXJcbiAgICAgICAgLmdldEFjdGl2ZUNvbXBvbmVudCgnTmF2aWdhdGlvbicpO1xuXG4gICAgICBpZiAobmF2KSB7XG4gICAgICAgIGxldCB0YWJzID0gbmF2LmdldFN0YXRlKCd0YWJzJyk7XG4gICAgICAgIGxldCB1cmxzID0ge307XG5cbiAgICAgICAgaWYgKHRhYnMgJiYgQXJyYXkuaXNBcnJheSh0YWJzKSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXModGFic1tpXS51cmwuc3BsaXQoJz8nKVsxXSk7XG4gICAgICAgICAgICBwYXJhbXMuc2V0KCdxdWVyeScsIHF1ZXJ5KTtcblxuICAgICAgICAgICAgbGV0IHVybCA9IHRhYnNbaV0uYmFzZVVybDtcbiAgICAgICAgICAgIGlmIChwYXJhbXMudG9TdHJpbmcoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHVybCArPSAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVybHNbdGFic1tpXS5jb25maWdJZF0gPSB1cmw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvcmUuc2VhcmNoKHF1ZXJ5LCB1cmxzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29yZS5zZWFyY2gocXVlcnkpO1xuICAgIH1cbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBsYWJlbFRleHQ6IHRoaXMubGFiZWxUZXh0LFxuICAgICAgc3VibWl0SWNvbjogdGhpcy5zdWJtaXRJY29uLFxuICAgICAgc3VibWl0VGV4dDogdGhpcy5zdWJtaXRUZXh0LFxuICAgICAgc2hvd0NsZWFyQnV0dG9uOiB0aGlzLl9zaG93Q2xlYXJCdXR0b24sXG4gICAgICBxdWVyeTogdGhpcy5xdWVyeVxuICAgIH0sIGRhdGEpKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyU2VhcmNoQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5cbi8qKlxuICogRmlsdGVyU2VhcmNoQ29tcG9uZW50IGlzIHVzZWQgZm9yIGF1dG9jb21wbGV0ZSB1c2luZyB0aGUgRmlsdGVyU2VhcmNoIGJhY2tlbmQuXG4gKiBJdCdsbCBhbGxvdyB5b3UgdG8gcGljayBwcmUtc2V0IGZpbHRlcnMgdGhhdCBhcmUgc2V0dXAgb24gdGhlIGJhY2tlbmQgd2l0aGluXG4gKiBhIHZlcnRpY2FsIHNlYXJjaCBjb250ZXh0LlxuICpcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlucHV0IGtleSBmb3IgdGhlIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9iYXJLZXkgPSBjb25maWcuYmFyS2V5IHx8IGNvbmZpZy5pbnB1dEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnRpY2FsIGtleSBmb3IgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzdG9yZSB0aGUgZmlsdGVyIHZhbHVlIGJ1dCBkbyBub3Qgc2VhcmNoIG9uIGNoYW5nZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RvcmVPbkNoYW5nZSA9IGNvbmZpZy5zdG9yZU9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogUXVlcnkgc3VibWlzc2lvbiBpcyBiYXNlZCBvbiBhIGZvcm0gYXMgY29udGV4dC5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gbmF0aXZlIGZvcm0gbm9kZSB3aXRoaW4gY29udGFpbmVyXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5fZm9ybUVsID0gY29uZmlnLmZvcm1TZWxlY3RvciB8fCAnZm9ybSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5wdXQgZWxlbWVudCB1c2VkIGZvciBzZWFyY2hpbmcgYW5kIHdpcmVzIHVwIHRoZSBrZXlib2FyZCBpbnRlcmFjdGlvblxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5faW5wdXRFbCA9IGNvbmZpZy5pbnB1dEVsIHx8ICcuanMteWV4dC1xdWVyeSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgdXNlZCwgcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlIGFzIGEgZGF0YSBwb2ludFxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnRpdGxlID0gY29uZmlnLnRpdGxlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlYXJjaCB0ZXh0IHVzZWQgZm9yIGxhYmVsaW5nIHRoZSBpbnB1dCBib3gsIGFsc28gcHJvdmlkZWQgdG8gdGVtcGxhdGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gY29uZmlnLnNlYXJjaFRleHQgfHwgJ1doYXQgYXJlIHlvdSBpbnRlcmVzdGVkIGluPyc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgdGV4dCB0byBzaG93IGFzIHRoZSBmaXJzdCBpdGVtIGZvciBhdXRvIGNvbXBsZXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucHJvbXB0SGVhZGVyID0gY29uZmlnLnByb21wdEhlYWRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQXV0byBmb2N1c2VzIHRoZSBpbnB1dCBib3ggaWYgc2V0IHRvIHRydWUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvRm9jdXMgPSBjb25maWcuYXV0b0ZvY3VzID09PSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogc3VibWl0VVJMIHdpbGwgZm9yY2UgdGhlIHNlYXJjaCBxdWVyeSBzdWJtaXNzaW9uIHRvIGdldFxuICAgICAqIHJlZGlyZWN0ZWQgdG8gdGhlIFVSTCBwcm92aWRlZC5cbiAgICAgKiBPcHRpb25hbCwgZGVmYXVsdHMgdG8gbnVsbC5cbiAgICAgKlxuICAgICAqIElmIG5vIHJlZGlyZWN0VXJsIHByb3ZpZGVkLCB3ZSBrZWVwIHRoZSBwYWdlIGFzIGEgc2luZ2xlIHBhZ2UgYXBwLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZWRpcmVjdFVybCA9IGNvbmZpZy5yZWRpcmVjdFVybCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHN0cmluZyB0byB1c2UgZm9yIHRoZSBpbnB1dCBib3gsIHByb3ZpZGVkIHRvIHRlbXBsYXRlIGZvciByZW5kZXJpbmcuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5xdWVyeSA9IGNvbmZpZy5xdWVyeSB8fCB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCkgfHwgJyc7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gLCBxID0+IHtcbiAgICAgIHRoaXMucXVlcnkgPSBxO1xuICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaWx0ZXIgc3RyaW5nIHRvIHVzZSBmb3IgdGhlIHByb3ZpZGVkIHF1ZXJ5XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5maWx0ZXIgPSBjb25maWcuZmlsdGVyIHx8IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCkgfHwgJyc7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpbHRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gSlNPTi5wYXJzZSh0aGlzLmZpbHRlcik7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIHRoaXMuc2VhcmNoUGFyYW1ldGVycyA9IHRoaXMuX2J1aWxkU2VhcmNoUGFyYW1ldGVycyhjb25maWcuc2VhcmNoUGFyYW1ldGVycyk7XG5cbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke3RoaXMubmFtZX1gLCBmID0+IHsgdGhpcy5maWx0ZXIgPSBmOyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdGaWx0ZXJTZWFyY2gnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoKSB7XG4gICAgcmV0dXJuICdzZWFyY2gvZmlsdGVyc2VhcmNoJztcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICBpZiAodGhpcy5xdWVyeSAmJiB0aGlzLmZpbHRlcikge1xuICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICAvLyBXaXJlIHVwIG91ciBzZWFyY2ggaGFuZGxpbmcgYW5kIGF1dG8gY29tcGxldGVcbiAgICB0aGlzLmluaXRBdXRvQ29tcGxldGUodGhpcy5faW5wdXRFbCk7XG5cbiAgICBpZiAodGhpcy5hdXRvRm9jdXMgPT09IHRydWUgJiYgdGhpcy5xdWVyeS5sZW5ndGggPT09IDApIHtcbiAgICAgIERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2lucHV0RWwpLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgaGVscGVyIG1ldGhvZCB0byB3aXJlIHVwIG91ciBhdXRvIGNvbXBsZXRlIG9uIGFuIGlucHV0IHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBhdXRvIGNvbXBsZXRlIGNvbXBvbmVudCB0b1xuICAgKi9cbiAgaW5pdEF1dG9Db21wbGV0ZSAoaW5wdXRTZWxlY3Rvcikge1xuICAgIHRoaXMuX2lucHV0RWwgPSBpbnB1dFNlbGVjdG9yO1xuXG4gICAgdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZSgnQXV0b0NvbXBsZXRlJywge1xuICAgICAgcGFyZW50Q29udGFpbmVyOiB0aGlzLl9jb250YWluZXIsXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmF1dG9jb21wbGV0ZWAsXG4gICAgICBpc0ZpbHRlclNlYXJjaDogdHJ1ZSxcbiAgICAgIGNvbnRhaW5lcjogJy55eHQtU2VhcmNoQmFyLWF1dG9jb21wbGV0ZScsXG4gICAgICBwcm9tcHRIZWFkZXI6IHRoaXMucHJvbXB0SGVhZGVyLFxuICAgICAgb3JpZ2luYWxRdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgIG9yaWdpbmFsRmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgIGlucHV0RWw6IGlucHV0U2VsZWN0b3IsXG4gICAgICB2ZXJ0aWNhbEtleTogdGhpcy5fdmVydGljYWxLZXksXG4gICAgICBiYXJLZXk6IHRoaXMuX2JhcktleSxcbiAgICAgIHNlYXJjaFBhcmFtZXRlcnM6IHRoaXMuc2VhcmNoUGFyYW1ldGVycyxcbiAgICAgIG9uU3VibWl0OiAocXVlcnksIGZpbHRlcikgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICAgICAgcGFyYW1zLnNldChgJHt0aGlzLm5hbWV9LnF1ZXJ5YCwgcXVlcnkpO1xuICAgICAgICBwYXJhbXMuc2V0KGAke3RoaXMubmFtZX0uZmlsdGVyYCwgZmlsdGVyKTtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgcmVkaXJlY3RVcmwsIHdlIHdhbnQgdGhlIHBhcmFtcyB0byBiZVxuICAgICAgICAvLyBzZXJpYWxpemVkIGFuZCBzdWJtaXR0ZWQuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5yZWRpcmVjdFVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMucmVkaXJlY3RVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzYXZlIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBmb3IgdGhlIG5leHQgc2VhcmNoXG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBGaWx0ZXIuZnJvbVJlc3BvbnNlKGZpbHRlcik7XG4gICAgICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWAsIHRoaXMucXVlcnkpO1xuICAgICAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCwgdGhpcy5maWx0ZXIpO1xuICAgICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgdGhpcy5maWx0ZXIpO1xuICAgICAgICB0aGlzLnNlYXJjaCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gdGhlIHZlcnRpY2FsIHNlYXJjaCB3aXRoIGFsbCBzYXZlZCBmaWx0ZXJzIGFuZCBxdWVyeSxcbiAgICogb3B0aW9uYWxseSByZWRpcmVjdGluZyBiYXNlZCBvbiBjb25maWdcbiAgICovXG4gIHNlYXJjaCAoKSB7XG4gICAgaWYgKHRoaXMuX3N0b3JlT25DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgbGV0IHRvdGFsRmlsdGVyID0gZmlsdGVyc1swXTtcbiAgICBpZiAoZmlsdGVycy5sZW5ndGggPiAxKSB7XG4gICAgICB0b3RhbEZpbHRlciA9IEZpbHRlci5hbmQoLi4uZmlsdGVycyk7XG4gICAgfVxuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpIHx8ICcnO1xuICAgIGNvbnN0IGZhY2V0RmlsdGVyID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZBQ0VUX0ZJTFRFUilbMF07XG5cbiAgICB0aGlzLmNvcmUudmVydGljYWxTZWFyY2godGhpcy5fdmVydGljYWxLZXksIHtcbiAgICAgIGlucHV0OiBzZWFyY2hRdWVyeSxcbiAgICAgIGZpbHRlcjogSlNPTi5zdHJpbmdpZnkodG90YWxGaWx0ZXIpLFxuICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKVxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIHNlYXJjaFRleHQ6IHRoaXMuc2VhcmNoVGV4dCxcbiAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlclxuICAgIH0sIGRhdGEpKTtcbiAgfVxuXG4gIF9idWlsZFNlYXJjaFBhcmFtZXRlcnMgKHNlYXJjaFBhcmFtZXRlckNvbmZpZ3MpIHtcbiAgICBsZXQgc2VhcmNoUGFyYW1ldGVycyA9IHtcbiAgICAgIHNlY3Rpb25lZDogZmFsc2UsXG4gICAgICBmaWVsZHM6IFtdXG4gICAgfTtcbiAgICBpZiAoc2VhcmNoUGFyYW1ldGVyQ29uZmlncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gc2VhcmNoUGFyYW1ldGVycztcbiAgICB9XG4gICAgaWYgKHNlYXJjaFBhcmFtZXRlckNvbmZpZ3Muc2VjdGlvbmVkKSB7XG4gICAgICBzZWFyY2hQYXJhbWV0ZXJzLnNlY3Rpb25lZCA9IHNlYXJjaFBhcmFtZXRlckNvbmZpZ3Muc2VjdGlvbmVkO1xuICAgIH1cbiAgICBzZWFyY2hQYXJhbWV0ZXJzLmZpZWxkcyA9IHRoaXMuX2J1aWxkRmllbGRzKHNlYXJjaFBhcmFtZXRlckNvbmZpZ3MuZmllbGRzKTtcbiAgICByZXR1cm4gc2VhcmNoUGFyYW1ldGVycztcbiAgfVxuXG4gIF9idWlsZEZpZWxkcyAoZmllbGRDb25maWdzKSB7XG4gICAgaWYgKGZpZWxkQ29uZmlncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpZWxkQ29uZmlncy5tYXAoZmMgPT4gKHsgZmV0Y2hFbnRpdGllczogZmFsc2UsIC4uLmZjIH0pKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuY29uc3QgS2V5cyA9IHtcbiAgQkFDS1NQQUNFOiA4LFxuICBUQUI6IDksXG4gIEVOVEVSOiAxMyxcbiAgU0hJRlQ6IDE2LFxuICBDVFJMOiAxNyxcbiAgQUxUOiAxOCxcbiAgRVNDQVBFOiAyNyxcblxuICBMRUZUOiAzNyxcbiAgUklHSFQ6IDM5LFxuICBVUDogMzgsXG5cbiAgREVMRVRFOiA0NixcbiAgRE9XTjogNDAsXG4gIExFRlRfT1NfS0VZOiA5MSxcbiAgUklHSFRfT1NfS0VZOiA5MixcbiAgU0VMRUNUX0tFWTogOTNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Db21wbGV0ZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30sIHN5c3RlbU9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMsIHN5c3RlbU9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBhdXRvY29tcGxldGUgaXMgc2ltcGxlIG9yIGZpbHRlclxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNGaWx0ZXJTZWFyY2ggPSBvcHRzLmlzRmlsdGVyU2VhcmNoIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGBiYXJLZXlgIGluIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggdG8gdXNlIGZvciBhdXRvLWNvbXBsZXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9iYXJLZXkgPSBvcHRzLmJhcktleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGB2ZXJ0aWNhbEtleWAgb2YgdGhlIHZlcnRpY2FsIHNlYXJjaCB0byB1c2UgZm9yIGF1dG8tY29tcGxldGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gb3B0cy52ZXJ0aWNhbEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGlucHV0IGVsIHNlbGVjdG9yIGZvciBhdXRvIGNvbXBsZXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gb3B0cy5pbnB1dEVsIHx8ICcuanMteWV4dC1xdWVyeSc7XG5cbiAgICAvKipcbiAgICAgKiBBIHNlbGVjdG9yIGZvciB0aGUgYXV0b2NvbXBsZXRlIGVsZW1lbnRlc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYXV0b2NvbXBsZXRlRWxzID0gb3B0cy5hdXRvQ29tcGxldGVFbHMgfHwgJy5qcy15ZXh0LWF1dG9jb21sZXRlLW9wdGlvbic7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgZm9yIHRoZSBkYXRhLXN0b3JhZ2UgdG8gbGlzdGVuIGZvciB1cGRhdGVzIGZyb20gdGhlIHNlcnZlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IGAke1N0b3JhZ2VLZXlzLkFVVE9DT01QTEVURX0uJHt0aGlzLm5hbWV9YDtcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgaW5wdXQgdmFsdWUgd2hlbiB0eXBpbmcuXG4gICAgICogV2UgdXNlIHRoaXMgZm9yIHJlc2V0dGluZyB0aGUgc3RhdGUgb2YgdGhlIGlucHV0IHZhbHVlIHdoZW4gb3RoZXIgaW50ZXJhY3Rpb25zIChlLmcuIHJlc3VsdCBuYXZpZ2F0aW9uKVxuICAgICAqIGNoYW5nZSBiYXNlZCBvbiBpbnRlcmFjdGlvbnMuIEZvciBpbnN0YW5jZSwgaGl0dGluZyBlc2NhcGUgc2hvdWxkIHJlc2V0IHRoZSB2YWx1ZSB0byB0aGUgb3JpZ2luYWwgdHlwZWQgcXVlcnkuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gb3B0cy5vcmlnaW5hbFF1ZXJ5IHx8ICcnO1xuXG4gICAgLyoqXG4gICAgICogVXNlZCBmb3Iga2V5Ym9hcmQgbmF2aWdhdGlvbiB0aHJvdWdoIHJlc3VsdHMuXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IHNlY3Rpb24gd2UncmUgbmF2aWdhdGluZyBpbi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3NlY3Rpb25JbmRleCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uIHRocm91Z2ggcmVzdWx0cy5cbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgcmVzdWx0IGluZGV4IHdlJ3JlIG5hdmlnYXRpbmcgb24uXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZXN1bHRJbmRleCA9IC0xO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHRleHQgdG8gc2hvdyBhcyB0aGUgZmlyc3QgaXRlbSBmb3IgYXV0byBjb21wbGV0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnByb21wdEhlYWRlciA9IG9wdHMucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBpbnB1dCBpcyBhdXRvY29tYXRpY2FsbHkgZm9jdXNlZCBvciBub3RcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9hdXRvRm9jdXMgPSBvcHRzLmF1dG9Gb2N1cyB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGludm9rZWQgd2hlbiB0aGUgYEVudGVyYCBrZXkgaXMgcHJlc3NlZCBvbiBhdXRvIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIHRoaXMuX29uU3VibWl0ID0gb3B0cy5vblN1Ym1pdCB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIHRoaXMuX3NlYXJjaFBhcmFtZXRlcnMgPSBvcHRzLnNlYXJjaFBhcmFtZXRlcnMgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYWxpYXNlZCB1c2VkIGJ5IHRoZSBjb21wb25lbnQgbWFuYWdlciBmb3IgY3JlYXRpb24uXG4gICAqL1xuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnQXV0b0NvbXBsZXRlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAnc2VhcmNoL2F1dG9jb21wbGV0ZSc7XG4gIH1cblxuICAvKipcbiAgICogc2V0U3RhdGUgaXMgb3ZlcnJpZGRlbiBzbyB0aGF0IHdlIGNhbiBwcm92aWRlIGFkZGl0aW9uYWwgbWV0YSBkYXRhXG4gICAqIHRvIHRoZSB0ZW1wbGF0ZSAoZS5nLiB0aGUgc2VjdGlvbkluZGV4IGFuZCByZXN1bHRJbmRleCksIHNpbmNlXG4gICAqIHRob3NlIGFyZSBjbGllbnQtaW50ZXJhY3Rpb24gc3BlY2lmaWMgdmFsdWVzIGFuZCBhcmVuJ3QgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyLlxuICAgKi9cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBoYXNSZXN1bHRzOiB0aGlzLmhhc1Jlc3VsdHMoZGF0YSksXG4gICAgICBzZWN0aW9uSW5kZXg6IHRoaXMuX3NlY3Rpb25JbmRleCxcbiAgICAgIHJlc3VsdEluZGV4OiB0aGlzLl9yZXN1bHRJbmRleCxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5fb3JpZ2luYWxRdWVyeS5sZW5ndGggPT09IDAgPyB0aGlzLnByb21wdEhlYWRlciA6IG51bGxcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogdXBkYXRlU3RhdGUgaXMgYSBoZWxwZXIgdG8gYXBwbHkgdGhlIGN1cnJlbnQgc3RhdGUgd2l0aCBuZXcgY2xpZW50LXN0YXRlLlxuICAgKi9cbiAgdXBkYXRlU3RhdGUgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fc3RhdGUuZ2V0KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uQ3JlYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgY29uc3RydWN0ZWQgZnJvbSB0aGUgZnJhbWV3b3JrLlxuICAgKiBPbmNlIHdlJ3JlIGluaXRhbGl6ZWQsIHdlIHdpcmUgdXAgYWxsIG9mIG91ciB1c2VyIGludGVyYWN0aW9uc1xuICAgKi9cbiAgb25DcmVhdGUgKCkge1xuICAgIC8vIFVzZSB0aGUgY29udGV4dCBvZiB0aGUgcGFyZW50IGNvbXBvbmVudCB0byBmaW5kIHRoZSBpbnB1dCBub2RlLlxuICAgIGxldCBxdWVyeUlucHV0ID0gRE9NLnF1ZXJ5KHRoaXMuX3BhcmVudENvbnRhaW5lciwgdGhpcy5faW5wdXRFbCk7XG4gICAgaWYgKCFxdWVyeUlucHV0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBpbml0aWFsaXplIEF1dG9Db21wbGV0ZS4gQ2FuIG5vdCBmaW5kIHtIVE1MRWxlbWVudH0gYCcsIHRoaXMuX2lucHV0RWwsICdgLicpO1xuICAgIH1cblxuICAgIC8vIERpc2FibGUgdGhlIG5hdGl2ZSBhdXRvY29tcGxldGUsIGF1dG9jb3JyZWN0ICYgc3BlbGxjaGVja1xuICAgIERPTS5hdHRyaWJ1dGVzKHF1ZXJ5SW5wdXQsIHtcbiAgICAgIGF1dG9jb21wbGV0ZTogJ29mZicsXG4gICAgICBhdXRvY29ycmVjdDogJ29mZicsXG4gICAgICBzcGVsbGNoZWNrOiAnZmFsc2UnXG4gICAgfSk7XG5cbiAgICAvLyBUaGUgdXNlciBleGl0cyB0aGUgaW5wdXQsIHNvIHdlIHdhbnQgdG8gcmVzZXQgdGhlIHN0YXRlIGFuZCBjbG9zZVxuICAgIC8vIHRoZSBhdXRvIGNvbXBsZXRlXG4gICAgLy8gVE9ETyhqZGVsZXJtZSk6IENsb3NlIGxvZ2ljIHRvIGJlIG1vdmVkIHRvIHBhcmVudFxuICAgIERPTS5vbihkb2N1bWVudCwgJ2NsaWNrJywgZSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmpzLXl4dC1BdXRvQ29tcGxldGUtd3JhcHBlciAqJykgfHwgZS50YXJnZXQubWF0Y2hlcyh0aGlzLl9pbnB1dEVsKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIGEgdXNlciBmb2N1c2VzIHRoZSBpbnB1dCwgd2Ugc2hvdWxkIHBvcHVsYXRlIHRoZSBhdXRvY29tcGxldGUgYmFzZWRcbiAgICAvLyBvbiB0aGUgY3VycmVudCB2YWx1ZVxuICAgIERPTS5vbihxdWVyeUlucHV0LCAnZm9jdXMnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmF1dG9Db21wbGV0ZShxdWVyeUlucHV0LnZhbHVlKTtcbiAgICB9KTtcblxuICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIG5hdmlnYXRlIGJldHdlZW4gdGhlIHJlc3VsdHMgdXNpbmcgdGhlIGtleWJvYXJkXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlTmF2aWdhdGVSZXN1bHRzKGUua2V5Q29kZSwgZSk7XG4gICAgICB0aGlzLmhhbmRsZVN1Ym1pdFJlc3VsdChlLmtleUNvZGUsIHF1ZXJ5SW5wdXQudmFsdWUsIGUpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuX2F1dG9Gb2N1cykge1xuICAgICAgRE9NLm9uY2UocXVlcnlJbnB1dCwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZShxdWVyeUlucHV0LnZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIHNlbGVjdCBhIHJlc3VsdCB3aXRoIHRoZSBtb3VzZVxuICAgIERPTS5kZWxlZ2F0ZSh0aGlzLl9jb250YWluZXIsICcuanMteWV4dC1hdXRvY29tcGxldGUtb3B0aW9uJywgJ2NsaWNrJywgKGV2dCwgdGFyZ2V0KSA9PiB7XG4gICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhc2V0O1xuICAgICAgbGV0IHZhbCA9IGRhdGEuc2hvcnQ7XG5cbiAgICAgIHRoaXMudXBkYXRlUXVlcnkodmFsKTtcbiAgICAgIHRoaXMuX29uU3VibWl0KHZhbCwgZGF0YS5maWx0ZXIpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gV2hlbiB0aGUgdXNlciBpcyB0eXBpbmcgaW4gdGhlIGlucHV0LCBwcm9jZXNzIHRoZSBhdXRvIGNvbXBsZXRlLlxuICAgIERPTS5vbihxdWVyeUlucHV0LCAna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVUeXBpbmcoZS5rZXlDb2RlLCBxdWVyeUlucHV0LnZhbHVlLCBlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjbG9zZSB3aWxsIGhpZGUgdGhlIGF1dG8gY29tcGxldGUgcmVzdWx0cyBhbmQgcmVzZXQgdGhlIHN0YXRlLlxuICAgKi9cbiAgY2xvc2UgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe30pO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXNldHMgdGhlIGNsaWVudCBzdGF0ZSB0byB0aGVpciBvcmlnaW5hbCB2YWx1ZXMgYW5kIHRyaWdnZXJzXG4gICAqIGEgdGVtcGxhdGUtcmVyZW5kZXIgdmlhIHVwZGF0ZVN0YXRlXG4gICAqL1xuICByZXNldCAoKSB7XG4gICAgdGhpcy5fc2VjdGlvbkluZGV4ID0gMDtcbiAgICB0aGlzLl9yZXN1bHRJbmRleCA9IC0xO1xuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHRvIHVwZGF0ZSB0aGUgaW5wdXQgdGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0VmFsdWUgT3B0aW9uIHZhbHVlIHByb3ZpZGVkLlxuICAgKiBJZiBubyB2YWx1ZSBwcm92aWRlZCwgd2UnbGwgdHJ5IHRvIGZpbmQgaXQgYmFzZWQgb24gdGhlIHNlbGVjdGlvbiBpbmRleGVzLlxuICAgKi9cbiAgdXBkYXRlUXVlcnkgKG9wdFZhbHVlKSB7XG4gICAgLy8gT25seSB3YW50IHRvIHVwZGF0ZSB0aGUgcXVlcnkgc3RyaW5nIGlmIHRoZXJlcyBhIHZhbHVlLlxuICAgIC8vIElmIG9uZSBpcyBwcm92aWRlZCwgZ3JlYXQuXG4gICAgLy8gT3RoZXJ3aXNlLCBsZXRzIHRyeSB0byBmaW5kIGl0IGZyb20gdGhlIGN1cnJlbnQgc2VsZWN0aW9uIGluIHRoZSByZXN1bHRzLlxuICAgIGlmIChvcHRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG5cbiAgICAgIGxldCByZXN1bHRzID0gc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzO1xuICAgICAgb3B0VmFsdWUgPSByZXN1bHRzW3RoaXMuX3Jlc3VsdEluZGV4XS5zaG9ydFZhbHVlO1xuICAgIH1cblxuICAgIGxldCBxdWVyeUVsID0gRE9NLnF1ZXJ5KHRoaXMuX3BhcmVudENvbnRhaW5lciwgdGhpcy5faW5wdXRFbCk7XG4gICAgcXVlcnlFbC52YWx1ZSA9IG9wdFZhbHVlO1xuICB9XG5cbiAgaGFuZGxlVHlwaW5nIChrZXksIHZhbHVlLCBlKSB7XG4gICAgbGV0IGlnbm9yZWRLZXlzID0gW1xuICAgICAgS2V5cy5ET1dOLFxuICAgICAgS2V5cy5VUCxcbiAgICAgIEtleXMuQ1RSTCxcbiAgICAgIEtleXMuQUxULFxuICAgICAgS2V5cy5TSElGVCxcbiAgICAgIEtleXMuTEVGVCxcbiAgICAgIEtleXMuUklHSFQsXG4gICAgICBLZXlzLkxFRlRfT1NfS0VZLFxuICAgICAgS2V5cy5SSUdIVF9PU19LRVksXG4gICAgICBLZXlzLkVOVEVSLFxuICAgICAgS2V5cy5UQUIsXG4gICAgICBLZXlzLlNFTEVDVF9LRVlcbiAgICBdO1xuXG4gICAgaWYgKGlnbm9yZWRLZXlzLmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVXNlciBlc2NhcGVzIG91dCBvZiBhdXRvIGNvbXBsZXRlLCBzbyB3ZSByZXNldCBpdCB0byB0aGUgb3JpZ2luYWwgaW5wdXRcbiAgICBpZiAoa2V5ID09PSBLZXlzLkVTQ0FQRSkge1xuICAgICAgdGhpcy51cGRhdGVRdWVyeSh0aGlzLl9vcmlnaW5hbFF1ZXJ5KTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIG9yaWdpbmFsIHZhbHVlIGJhc2VkIG9uIHRoZSB1c2VyIGlucHV0XG4gICAgdGhpcy5fb3JpZ2luYWxRdWVyeSA9IHZhbHVlO1xuXG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHRoaXMuYXV0b0NvbXBsZXRlKHZhbHVlKTtcbiAgfVxuXG4gIGF1dG9Db21wbGV0ZSAoaW5wdXQpIHtcbiAgICBpZiAodGhpcy5pc0ZpbHRlclNlYXJjaCkge1xuICAgICAgdGhpcy5jb3JlLmF1dG9Db21wbGV0ZUZpbHRlcihpbnB1dCwge1xuICAgICAgICBuYW1lc3BhY2U6IHRoaXMubmFtZSxcbiAgICAgICAgdmVydGljYWxLZXk6IHRoaXMuX3ZlcnRpY2FsS2V5LFxuICAgICAgICBiYXJLZXk6IHRoaXMuX2JhcktleSxcbiAgICAgICAgc2VhcmNoUGFyYW1ldGVyczogdGhpcy5fc2VhcmNoUGFyYW1ldGVyc1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl92ZXJ0aWNhbEtleSB8fCB0aGlzLl9iYXJLZXkpIHtcbiAgICAgIHRoaXMuY29yZS5hdXRvQ29tcGxldGVWZXJ0aWNhbChpbnB1dCwgdGhpcy5uYW1lLCB0aGlzLl92ZXJ0aWNhbEtleSwgdGhpcy5fYmFyS2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb3JlLmF1dG9Db21wbGV0ZVVuaXZlcnNhbChpbnB1dCwgdGhpcy5uYW1lKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0cnVlIGlmIHdlIGhhdmUgcmVzdWx0cyBpbiBhbnkgc2VjdGlvblxuICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAqL1xuICBoYXNSZXN1bHRzIChkYXRhKSB7XG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBzZWN0aW9ucyA9IGRhdGFbJ3NlY3Rpb25zJ107XG4gICAgaWYgKCFzZWN0aW9ucykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBzZWN0aW9uc1tpXTtcbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBkYXRhLnJlc3VsdHM7XG4gICAgICBpZiAoIXJlc3VsdHMpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaGFuZGxlTmF2aWdhdGVSZXN1bHRzIChrZXksIGUpIHtcbiAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG4gICAgaWYgKHNlY3Rpb25zID09PSB1bmRlZmluZWQgfHwgc2VjdGlvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUYWJiaW5nIG91dCBvciBlbnRlciBzaG91bGQgY2xvc2UgdGhlIGF1dG8gY29tcGxldGUuXG4gICAgaWYgKGtleSA9PT0gS2V5cy5UQUIpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0cyA9IHNlY3Rpb25zW3RoaXMuX3NlY3Rpb25JbmRleF0ucmVzdWx0cztcbiAgICBpZiAoa2V5ID09PSBLZXlzLlVQKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5fcmVzdWx0SW5kZXggPD0gMCkge1xuICAgICAgICBpZiAodGhpcy5fc2VjdGlvbkluZGV4ID4gMCkge1xuICAgICAgICAgIHRoaXMuX3NlY3Rpb25JbmRleC0tO1xuICAgICAgICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzLmxlbmd0aCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVRdWVyeSh0aGlzLl9vcmlnaW5hbFF1ZXJ5KTtcbiAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3Jlc3VsdEluZGV4LS07XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gS2V5cy5ET1dOKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5fcmVzdWx0SW5kZXggPj0gcmVzdWx0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPCBzZWN0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgdGhpcy5fc2VjdGlvbkluZGV4Kys7XG4gICAgICAgICAgdGhpcy5fcmVzdWx0SW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3Jlc3VsdEluZGV4Kys7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU3VibWl0UmVzdWx0IChrZXksIHZhbHVlLCBlKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gdGhpcy5fc3RhdGUuZ2V0KCdzZWN0aW9ucycpO1xuICAgIGlmIChzZWN0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IHNlY3Rpb25zLmxlbmd0aCA8PSAwKSB7XG4gICAgICBpZiAodGhpcy5pc0ZpbHRlclNlYXJjaCkge1xuICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gc3VibWl0IHRoZSBzZWFyY2ggb24gZW50ZXJcbiAgICBpZiAoa2V5ID09PSBLZXlzLkVOVEVSKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICh0aGlzLmlzRmlsdGVyU2VhcmNoICYmIHRoaXMuX3Jlc3VsdEluZGV4ID09PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBmaWx0ZXIgPSAnJztcbiAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPj0gMCAmJiB0aGlzLl9yZXN1bHRJbmRleCA+PSAwKSB7XG4gICAgICAgIGZpbHRlciA9IEpTT04uc3RyaW5naWZ5KHNlY3Rpb25zW3RoaXMuX3NlY3Rpb25JbmRleF0ucmVzdWx0c1t0aGlzLl9yZXN1bHRJbmRleF0uZmlsdGVyKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGVRdWVyeSh2YWx1ZSk7XG4gICAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gdmFsdWU7XG4gICAgICB0aGlzLl9vblN1Ym1pdCh2YWx1ZSwgZmlsdGVyKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNwZWxsQ2hlY2tDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi9kb20vc2VhcmNocGFyYW1zJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG4vKipcbiAqIFNwZWxsQ2hlY2tDb21wb25lbnQgd2lsbCBzdXBwb3J0IGRpc3BsYXlpbmcgc3VnZ2VzdGlvbiwgYXV0b2NvcnJlY3QgYW5kIGNvbWJpbmVkKG1heWJlIGluIHRoZSBmdXR1cmUpXG4gKiBwcm92aWRlZCBmcm9tIHNwZWxsaW5nIGNvcnJlY3Rpb24uXG4gKlxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwZWxsQ2hlY2tDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlNQRUxMX0NIRUNLO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1NwZWxsQ2hlY2snO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKCkge1xuICAgIHJldHVybiAnc2VhcmNoL3NwZWxsY2hlY2snO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5kZWxldGUoJ3NraXBTcGVsbENoZWNrJyk7XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLmRlbGV0ZSgncXVlcnlUcmlnZ2VyJyk7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSwgdmFsKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIHNob3VsZFNob3c6IGRhdGEuY29ycmVjdGVkUXVlcnkgIT09IHVuZGVmaW5lZCxcbiAgICAgIGNvcnJlY3RlZFF1ZXJ5VXJsOiB0aGlzLl9idWlsZFJlZGlyZWN0UXVlcnlVcmwoZGF0YS5jb3JyZWN0ZWRRdWVyeSwgZGF0YS50eXBlKSxcbiAgICAgIGhlbHBUZXh0OiB0aGlzLl9nZXRIZWxwVGV4dChkYXRhLnR5cGUpXG4gICAgfSwgdmFsKSk7XG4gIH1cblxuICBfYnVpbGRSZWRpcmVjdFF1ZXJ5VXJsIChxdWVyeSwgdHlwZSkge1xuICAgIGlmIChxdWVyeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGxldCBwYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICBwYXJhbXMuc2V0KCdxdWVyeScsIHF1ZXJ5LnZhbHVlKTtcbiAgICBwYXJhbXMuc2V0KCdza2lwU3BlbGxDaGVjaycsIHRydWUpO1xuICAgIHBhcmFtcy5zZXQoJ3F1ZXJ5VHJpZ2dlcicsIHR5cGUudG9Mb3dlckNhc2UoKSk7XG4gICAgcmV0dXJuICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICB9XG5cbiAgX2dldEhlbHBUZXh0ICh0eXBlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdTVUdHRVNUJzpcbiAgICAgICAgcmV0dXJuICdEaWQgeW91IG1lYW46JztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZhY2V0ICovXG5cbi8qKlxuICogTW9kZWwgcmVwcmVzZW50aW5nIGEgZmFjZXQgZmlsdGVyIHdpdGggdGhlIGZvcm1hdCBvZlxuICoge1xuICogICBcImZpZWxkX25hbWVcIjogWyBGaWx0ZXJzLi4uIF0sXG4gKiAgIC4uLlxuICogfVxuICpcbiAqIEBzZWUge0BsaW5rIEZpbHRlcn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZXQge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGZhY2V0IGZpbHRlciBmcm9tIGEgbGlzdCBvZiBGaWx0ZXJzXG4gICAqIEBwYXJhbSAgey4uLkZpbHRlcn0gZmlsdGVycyBUaGUgZmlsdGVycyB0byB1c2UgaW4gdGhpcyBmYWNldFxuICAgKiBAcmV0dXJucyB7RmFjZXR9XG4gICAqL1xuICBzdGF0aWMgZnJvbUZpbHRlcnMgKC4uLmZpbHRlcnMpIHtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBjb25zdCBmbGF0RmlsdGVycyA9IGZpbHRlcnMuZmxhdE1hcChmID0+IGYuJG9yIHx8IGYpO1xuICAgIGZsYXRGaWx0ZXJzLmZvckVhY2goZiA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhmKVswXTtcbiAgICAgIGlmICghZ3JvdXBzW2tleV0pIHtcbiAgICAgICAgZ3JvdXBzW2tleV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1trZXldLnB1c2goZik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IEZhY2V0KGdyb3Vwcyk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZpbHRlckJveENvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IEZhY2V0IGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZhY2V0JztcblxuLyoqXG4gKiBSZW5kZXJzIGEgc2V0IG9mIGZpbHRlcnMsIGFuZCBzZWFyY2hlcyB3aXRoIHRoZW0gd2hlbiBhcHBsaWVkLlxuICogTXVsdGlwbGUgRmlsdGVyQm94IGNvbXBvbmVudHMgd2lsbCBBTkQgdG9nZXRoZXIgYnV0IHdpbGwgbm90IHNoYXJlIHN0YXRlLlxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlckJveENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICBpZiAoIWNvbmZpZy5maWx0ZXJzIHx8ICEoY29uZmlnLmZpbHRlcnMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICdGaWx0ZXJCb3ggcmVxdWlyZXMgZmlsdGVycyB0byBiZSBwcm92aWRlZCBhcyBhbiBhcnJheScsXG4gICAgICAgICdGaWx0ZXJCb3gnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBmaWx0ZXJzIHRvIGRpc3BsYXkgYW5kIGNvbnRyb2xcbiAgICAgKiBAdHlwZSB7b2JqZWN0W119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWx0ZXJDb25maWdzID0gY29uZmlnLmZpbHRlcnM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVydGljYWwga2V5IGZvciB0aGUgc2VhcmNoXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0cmlnZ2VyIGEgc2VhcmNoIG9uIGVhY2ggY2hhbmdlIHRvIGEgZmlsdGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zZWFyY2hPbkNoYW5nZSA9IGNvbmZpZy5zZWFyY2hPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RvciBvZiB0aGUgYXBwbHkgYnV0dG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwcGx5QnV0dG9uU2VsZWN0b3IgPSBjb25maWcuYXBwbHlCdXR0b25TZWxlY3RvciB8fCAnLmpzLXlleHQtZmlsdGVyYm94LWFwcGx5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnRzIGNyZWF0ZWQgZm9yIGVhY2ggZmlsdGVyIGNvbmZpZ1xuICAgICAqIEB0eXBlIHtDb21wb25lbnRbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlckNvbXBvbmVudHMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBmaWx0ZXIgY29tcG9uZW50cyBpbiB0aGUgYm94XG4gICAgICogQHR5cGUge0ZpbHRlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlcnMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRoaXMgZmlsdGVyYm94IGNvbnRhaW5zIGR5bmFtaWMgZmlsdGVycy4gVGhpcyBhZmZlY3RzIHRoZVxuICAgICAqIHRoZSB3YXkgdGhlIGZpbHRlcnMgYXJlIHVzZWQgaW4gdGhlIHNlYXJjaFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faXNEeW5hbWljID0gY29uZmlnLmlzRHluYW1pYyB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gYGZpbHRlcnMvZmlsdGVyYm94YDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdGaWx0ZXJCb3gnO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgIGZpbHRlckNvbmZpZ3M6IHRoaXMuX2ZpbHRlckNvbmZpZ3MsXG4gICAgICBzaG93QXBwbHlCdXR0b246ICF0aGlzLl9zZWFyY2hPbkNoYW5nZVxuICAgIH0pKTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIGlmICh0aGlzLl9maWx0ZXJDb21wb25lbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cy5mb3JFYWNoKGMgPT4gYy5yZW1vdmUoKSk7XG4gICAgICB0aGlzLl9maWx0ZXJDb21wb25lbnRzID0gW107XG4gICAgICB0aGlzLl9maWx0ZXJzID0gW107XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBmaWx0ZXJzIGZyb20gY29uZmlnc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZmlsdGVyQ29uZmlncy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5fZmlsdGVyQ29uZmlnc1tpXTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoY29uZmlnLnR5cGUsIE9iamVjdC5hc3NpZ24oe30sXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmVudENvbnRhaW5lcjogdGhpcy5fY29udGFpbmVyLFxuICAgICAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0uZmlsdGVyJHtpfWAsXG4gICAgICAgICAgc3RvcmVPbkNoYW5nZTogZmFsc2UsXG4gICAgICAgICAgY29udGFpbmVyOiBgLmpzLXlleHQtZmlsdGVyYm94LWZpbHRlciR7aX1gLFxuICAgICAgICAgIG9uQ2hhbmdlOiAoZmlsdGVyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uRmlsdGVyQ2hhbmdlKGksIGZpbHRlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICBjb21wb25lbnQubW91bnQoKTtcbiAgICAgIHRoaXMuX2ZpbHRlckNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgdGhpcy5fZmlsdGVyc1tpXSA9IGNvbXBvbmVudC5nZXRGaWx0ZXIoKTtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGFwcGx5IGJ1dHRvblxuICAgIGlmICghdGhpcy5fc2VhcmNoT25DaGFuZ2UpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2FwcGx5QnV0dG9uU2VsZWN0b3IpO1xuXG4gICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgIERPTS5vbihidXR0b24sICdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLl9zYXZlRmlsdGVyc1RvU3RvcmFnZSgpO1xuICAgICAgICAgIHRoaXMuX3NlYXJjaCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGNoYW5nZXMgdG8gY2hpbGQgZmlsdGVyIGNvbXBvbmVudHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgY2hhbmdlZCBmaWx0ZXJcbiAgICogQHBhcmFtIHtGaWx0ZXJ9IGZpbHRlciBUaGUgbmV3IGZpbHRlclxuICAgKi9cbiAgb25GaWx0ZXJDaGFuZ2UgKGluZGV4LCBmaWx0ZXIpIHtcbiAgICB0aGlzLl9maWx0ZXJzW2luZGV4XSA9IGZpbHRlcjtcbiAgICBpZiAodGhpcy5fc2VhcmNoT25DaGFuZ2UpIHtcbiAgICAgIHRoaXMuX3NhdmVGaWx0ZXJzVG9TdG9yYWdlKCk7XG4gICAgICB0aGlzLl9zZWFyY2goKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBmaWx0ZXIgY29tcG9uZW50cyBhbG9uZyB3aXRoIHRoaXMgY29tcG9uZW50XG4gICAqL1xuICByZW1vdmUgKCkge1xuICAgIHRoaXMuX2ZpbHRlckNvbXBvbmVudHMuZm9yRWFjaChjID0+IGMucmVtb3ZlKCkpO1xuICAgIHN1cGVyLnJlbW92ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgY3VycmVudCBmaWx0ZXJzIHRvIHN0b3JhZ2UgdG8gYmUgdXNlZCBpbiB0aGUgbmV4dCBzZWFyY2hcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zYXZlRmlsdGVyc1RvU3RvcmFnZSAoKSB7XG4gICAgY29uc3QgdmFsaWRGaWx0ZXJzID0gdGhpcy5fZmlsdGVycy5maWx0ZXIoZiA9PlxuICAgICAgZiAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBmICE9PSBudWxsICYmXG4gICAgICBPYmplY3Qua2V5cyhmKS5sZW5ndGggPiAwKTtcblxuICAgIGlmICh0aGlzLl9pc0R5bmFtaWMpIHtcbiAgICAgIGNvbnN0IGNvbWJpbmVkRmlsdGVyID0gRmFjZXQuZnJvbUZpbHRlcnMoLi4udmFsaWRGaWx0ZXJzKTtcbiAgICAgIHRoaXMuY29yZS5zZXRGYWNldEZpbHRlcih0aGlzLm5hbWUsIGNvbWJpbmVkRmlsdGVyIHx8IHt9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29tYmluZWRGaWx0ZXIgPSB2YWxpZEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgICA/IEZpbHRlci5hbmQoLi4udmFsaWRGaWx0ZXJzKVxuICAgICAgICA6IHZhbGlkRmlsdGVyc1swXTtcbiAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBjb21iaW5lZEZpbHRlciB8fCB7fSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYSBzZWFyY2ggd2l0aCBhbGwgZmlsdGVycyBpbiBzdG9yYWdlXG4gICAqL1xuICBfc2VhcmNoICgpIHtcbiAgICBjb25zdCBhbGxGaWx0ZXJzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgY29uc3QgdG90YWxGaWx0ZXIgPSBhbGxGaWx0ZXJzLmxlbmd0aCA+IDFcbiAgICAgID8gRmlsdGVyLmFuZCguLi5hbGxGaWx0ZXJzKVxuICAgICAgOiBhbGxGaWx0ZXJzWzBdO1xuXG4gICAgY29uc3QgcXVlcnkgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSk7XG5cbiAgICBjb25zdCBmYWNldEZpbHRlciA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GQUNFVF9GSUxURVIpWzBdO1xuXG4gICAgdGhpcy5jb3JlLnZlcnRpY2FsU2VhcmNoKHRoaXMuX3ZlcnRpY2FsS2V5LCB7XG4gICAgICBpbnB1dDogcXVlcnksXG4gICAgICBmaWx0ZXI6IEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSxcbiAgICAgIGZhY2V0RmlsdGVyOiBKU09OLnN0cmluZ2lmeShmYWNldEZpbHRlcilcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyT3B0aW9uc0NvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuLyoqXG4gKiBUaGUgY3VycmVudGx5IHN1cHBvcnRlZCBjb250cm9sc1xuICogQHR5cGUge3N0cmluZ1tdfVxuICovXG5jb25zdCBTVVBQT1JURURfQ09OVFJPTFMgPSBbXG4gICdzaW5nbGVvcHRpb24nLFxuICAnbXVsdGlvcHRpb24nXG5dO1xuXG4vKipcbiAqIFJlbmRlcnMgYSBzZXQgb2Ygb3B0aW9ucywgZWFjaCBvbmUgcmVwcmVzZW50aW5nIGEgZmlsdGVyIGluIGEgc2VhcmNoLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJPcHRpb25zQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZywgc3lzdGVtQ29uZmlnKTtcblxuICAgIGlmICghY29uZmlnLmNvbnRyb2wgfHwgIVNVUFBPUlRFRF9DT05UUk9MUy5pbmNsdWRlcyhjb25maWcuY29udHJvbCkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICdGaWx0ZXJPcHRpb25zIHJlcXVpcmVzIGEgdmFsaWQgXCJjb250cm9sXCIgdG8gYmUgcHJvdmlkZWQnLFxuICAgICAgICAnRmlsdGVyT3B0aW9ucycpO1xuICAgIH1cblxuICAgIGlmICghY29uZmlnLm9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICdGaWx0ZXJPcHRpb25zIGNvbXBvbmVudCByZXF1aXJlcyBvcHRpb25zIHRvIGJlIHByb3ZpZGVkJyxcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMnKTtcbiAgICB9XG5cbiAgICBsZXQgcHJldmlvdXNPcHRpb25zID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUodGhpcy5uYW1lKTtcbiAgICBpZiAodHlwZW9mIHByZXZpb3VzT3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHByZXZpb3VzT3B0aW9ucyA9IEpTT04ucGFyc2UocHJldmlvdXNPcHRpb25zKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICAgIGxldCBzZWxlY3RlZE9wdGlvbnMgPSBwcmV2aW91c09wdGlvbnMgfHwgW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBmaWx0ZXIgb3B0aW9ucyB0byBkaXNwbGF5IHdpdGggY2hlY2tlZCBzdGF0dXNcbiAgICAgKiBAdHlwZSB7b2JqZWN0W119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vcHRpb25zID0gY29uZmlnLm9wdGlvbnMubWFwKG8gPT4gT2JqZWN0LmFzc2lnbih7fSwgeyBzZWxlY3RlZDogc2VsZWN0ZWRPcHRpb25zLmluY2x1ZGVzKG8ubGFiZWwpIH0sIG8pKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIGNvbnRyb2wgdG8gZGlzcGxheVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9jb250cm9sID0gY29uZmlnLmNvbnRyb2w7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0b3IgdXNlZCBmb3Igb3B0aW9ucyBpbiB0aGUgdGVtcGxhdGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb3B0aW9uU2VsZWN0b3IgPSBjb25maWcub3B0aW9uU2VsZWN0b3IgfHwgJy5qcy15ZXh0LWZpbHRlci1vcHRpb24nO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc3RvcmVzIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBvbiBlYWNoIGNoYW5nZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RvcmVPbkNoYW5nZSA9IGNvbmZpZy5zdG9yZU9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBjaGFuZ2VkXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBjb25maWcub25DaGFuZ2UgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gYmUgdXNlZCBpbiB0aGUgbGVnZW5kXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xhYmVsID0gY29uZmlnLmxhYmVsIHx8ICdGaWx0ZXJzJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdGaWx0ZXJPcHRpb25zJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyLCBiYXNlZCBvbiB0aGUgY29udHJvbFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gYGNvbnRyb2xzLyR7Y29uZmlnLmNvbnRyb2x9YDtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICBvcHRpb25zOiB0aGlzLl9vcHRpb25zLFxuICAgICAgbGFiZWw6IHRoaXMuX2xhYmVsXG4gICAgfSkpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgRE9NLmRlbGVnYXRlKFxuICAgICAgRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgYC4ke3RoaXMuX2NvbnRyb2x9LWZpZWxkc2V0YCksXG4gICAgICB0aGlzLl9vcHRpb25TZWxlY3RvcixcbiAgICAgICdjbGljaycsXG4gICAgICBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU9wdGlvbihwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC5pbmRleCksIGV2ZW50LnRhcmdldC5jaGVja2VkKTtcblxuICAgICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLl9idWlsZEZpbHRlcigpO1xuICAgICAgICBpZiAodGhpcy5fc3RvcmVPbkNoYW5nZSkge1xuICAgICAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBmaWx0ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fb25DaGFuZ2UoZmlsdGVyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgX3VwZGF0ZU9wdGlvbiAoaW5kZXgsIHNlbGVjdGVkKSB7XG4gICAgaWYgKHRoaXMuX2NvbnRyb2wgPT09ICdzaW5nbGVvcHRpb24nKSB7XG4gICAgICB0aGlzLl9vcHRpb25zID0gdGhpcy5fb3B0aW9ucy5tYXAobyA9PiBPYmplY3QuYXNzaWduKHt9LCBvLCB7IHNlbGVjdGVkOiBmYWxzZSB9KSk7XG4gICAgfVxuXG4gICAgdGhpcy5fb3B0aW9uc1tpbmRleF0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9vcHRpb25zW2luZGV4XSwgeyBzZWxlY3RlZCB9KTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG4gIH1cblxuICBnZXRGaWx0ZXIgKCkge1xuICAgIHJldHVybiB0aGlzLl9idWlsZEZpbHRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBvcHRpb25zXG4gICAqL1xuICBjbGVhciAoKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBET00ucXVlcnlBbGwodGhpcy5fY29udGFpbmVyLCB0aGlzLl9vcHRpb25TZWxlY3Rvcik7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlID0+IGUuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2ZhbHNlJykpO1xuICAgIHRoaXMuX2FwcGx5RmlsdGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgYW5kIHJldHVybiB0aGUgRmlsdGVyIHRoYXQgcmVwcmVzZW50cyB0aGUgY3VycmVudCBzdGF0ZVxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2J1aWxkRmlsdGVyICgpIHtcbiAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5fb3B0aW9uc1xuICAgICAgLmZpbHRlcihvID0+IG8uc2VsZWN0ZWQpXG4gICAgICAubWFwKG8gPT4gby5maWx0ZXJcbiAgICAgICAgPyBvLmZpbHRlclxuICAgICAgICA6IEZpbHRlci5lcXVhbChvLmZpZWxkLCBvLnZhbHVlKSk7XG5cbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KHRoaXMubmFtZSwgdGhpcy5fb3B0aW9ucy5maWx0ZXIobyA9PiBvLnNlbGVjdGVkKS5tYXAobyA9PiBvLmxhYmVsKSk7XG4gICAgcmV0dXJuIGZpbHRlcnMubGVuZ3RoID4gMFxuICAgICAgPyBGaWx0ZXIuZ3JvdXAoLi4uZmlsdGVycylcbiAgICAgIDoge307XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJhbmdlRmlsdGVyQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmdlRmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZywgc3lzdGVtQ29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaWVsZCB0byBmaWx0ZXIgb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmllbGQgPSBjb25maWcuZmllbGQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBmaWx0ZXIgdmFsdWUgY2hhbmdlc1xuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29uQ2hhbmdlID0gY29uZmlnLm9uQ2hhbmdlIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc3RvcmVzIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBvbiBlYWNoIGNoYW5nZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RvcmVPbkNoYW5nZSA9IGNvbmZpZy5zdG9yZU9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgbGV0IG1pblZhbCA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke3RoaXMubmFtZX0ubWluYCk7XG4gICAgaWYgKHR5cGVvZiBtaW5WYWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBtaW5WYWwgPSBOdW1iZXIucGFyc2VJbnQobWluVmFsKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICAgIGxldCBtYXhWYWwgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHt0aGlzLm5hbWV9Lm1heGApO1xuICAgIGlmICh0eXBlb2YgbWluVmFsID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbWF4VmFsID0gTnVtYmVyLnBhcnNlSW50KG1heFZhbCk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHJhbmdlIHJlcHJlc2VudGVkXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3JhbmdlID0ge1xuICAgICAgbWluOiBtaW5WYWwgfHwgY29uZmlnLmluaXRpYWxNaW4gfHwgMCxcbiAgICAgIG1heDogbWF4VmFsIHx8IGNvbmZpZy5pbml0aWFsTWF4IHx8IDEwXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB0byBkaXNwbGF5IGZvciB0aGUgcmFuZ2UgY29udHJvbFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90aXRsZSA9IGNvbmZpZy50aXRsZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBsYWJlbCB0byBkaXNwbGF5IGZvciB0aGUgbWluIGlucHV0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX21pbkxhYmVsID0gY29uZmlnLm1pbkxhYmVsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgbGFiZWwgdG8gZGlzcGxheSBmb3IgdGhlIG1heCBpbnB1dFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9tYXhMYWJlbCA9IGNvbmZpZy5tYXhMYWJlbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSBgY29udHJvbHMvcmFuZ2VgO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1JhbmdlRmlsdGVyJztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgdGl0bGU6IHRoaXMuX3RpdGxlLFxuICAgICAgbWluTGFiZWw6IHRoaXMuX21pbkxhYmVsLFxuICAgICAgbWF4TGFiZWw6IHRoaXMuX21heExhYmVsLFxuICAgICAgbWluVmFsdWU6IHRoaXMuX3JhbmdlLm1pbixcbiAgICAgIG1heFZhbHVlOiB0aGlzLl9yYW5nZS5tYXhcbiAgICB9KSk7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgRE9NLmRlbGVnYXRlKHRoaXMuX2NvbnRhaW5lciwgJy5qcy15ZXh0LXJhbmdlJywgJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdXBkYXRlUmFuZ2UoZXZlbnQudGFyZ2V0LmRhdGFzZXQua2V5LCBOdW1iZXIucGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRNaW4gKHZhbHVlKSB7XG4gICAgdGhpcy5fdXBkYXRlUmFuZ2UoJ21pbicsIHZhbHVlKTtcbiAgfVxuXG4gIHNldE1heCAodmFsdWUpIHtcbiAgICB0aGlzLl91cGRhdGVSYW5nZSgnbWF4JywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0RmlsdGVyICgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgcmFuZ2Ugc3RhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmFuZ2Uga2V5IHRvIHVwZGF0ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIG5ldyB2YWx1ZSBmb3IgdGhlIGtleVxuICAgKi9cbiAgX3VwZGF0ZVJhbmdlIChrZXksIHZhbHVlKSB7XG4gICAgdGhpcy5fcmFuZ2UgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9yYW5nZSwgeyBba2V5XTogdmFsdWUgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSgpO1xuXG4gICAgY29uc3QgZmlsdGVyID0gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgICBpZiAodGhpcy5fc3RvcmVPbkNoYW5nZSkge1xuICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGZpbHRlcik7XG4gICAgfVxuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7dGhpcy5uYW1lfS5taW5gLCB0aGlzLl9yYW5nZS5taW4pO1xuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7dGhpcy5uYW1lfS5tYXhgLCB0aGlzLl9yYW5nZS5tYXgpO1xuXG4gICAgdGhpcy5fb25DaGFuZ2UoZmlsdGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgZmlsdGVyIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjdXJyZW50IHN0YXRlXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBfYnVpbGRGaWx0ZXIgKCkge1xuICAgIHJldHVybiBGaWx0ZXIuaW5jbHVzaXZlUmFuZ2UodGhpcy5fZmllbGQsIHRoaXMuX3JhbmdlLm1pbiwgdGhpcy5fcmFuZ2UubWF4KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRGF0ZUZpbHRlckNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIEEgZmlsdGVyIGZvciBhIHJhbmdlIG9mIGRhdGVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVSYW5nZUZpbHRlckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBpIGZpZWxkIHRoaXMgZmlsdGVyIGNvbnRyb2xzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpZWxkID0gY29uZmlnLmZpZWxkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIHRvIGRpc3BsYXkgZm9yIHRoZSBkYXRlIHJhbmdlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RpdGxlID0gY29uZmlnLnRpdGxlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGxhYmVsIHRvIHNob3cgZm9yIHRoZSBtaW4gZGF0ZSBpbnB1dFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9taW5MYWJlbCA9IGNvbmZpZy5taW5MYWJlbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGxhYmVsIHRvIHNob3cgZm9yIHRoZSBtYXggZGF0ZSBpbnB1dFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9tYXhMYWJlbCA9IGNvbmZpZy5tYXhMYWJlbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbGxiYWNrIHVzZWQgd2hlbiBhIGRhdGUgaXMgY2hhbmdlZFxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29uQ2hhbmdlID0gY29uZmlnLm9uQ2hhbmdlIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc3RvcmVzIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBvbiBlYWNoIGNoYW5nZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RvcmVPbkNoYW5nZSA9IGNvbmZpZy5zdG9yZU9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhpcyBmaWx0ZXIgcmVwcmVzZW50cyBhbiBleGNsdXNpdmUgcmFuZ2UsIHJhdGhlciB0aGFuIGFuIGluY2x1c2l2ZSBvbmVcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2lzRXhjbHVzaXZlID0gY29uZmlnLmlzRXhjbHVzaXZlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIGZvciB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gYGNvbnRyb2xzL2RhdGVgO1xuXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRvZGF5U3RyaW5nID0gYCR7dG9kYXkuZ2V0RnVsbFllYXIoKX0tJHtgJHt0b2RheS5nZXRNb250aCgpICsgMX1gLnBhZFN0YXJ0KDIsICcwJyl9LSR7YCR7dG9kYXkuZ2V0RGF0ZSgpfWAucGFkU3RhcnQoMiwgJzAnKX1gO1xuICAgIGNvbnN0IG1pbkRhdGUgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHt0aGlzLm5hbWV9Lm1pbmApO1xuICAgIGNvbnN0IG1heERhdGUgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHt0aGlzLm5hbWV9Lm1heGApO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgZGF0ZSByYW5nZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZGF0ZSA9IHtcbiAgICAgIG1pbjogbWluRGF0ZSB8fCBjb25maWcuaW5pdGlhbE1pbiB8fCB0b2RheVN0cmluZyxcbiAgICAgIG1heDogbWF4RGF0ZSB8fCBjb25maWcuaW5pdGlhbE1heCB8fCB0b2RheVN0cmluZ1xuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRGF0ZVJhbmdlRmlsdGVyJztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgdGl0bGU6IHRoaXMuX3RpdGxlLFxuICAgICAgbWluTGFiZWw6IHRoaXMuX21pbkxhYmVsLFxuICAgICAgbWF4TGFiZWw6IHRoaXMuX21heExhYmVsLFxuICAgICAgZGF0ZU1pbjogdGhpcy5fZGF0ZS5taW4sXG4gICAgICBkYXRlTWF4OiB0aGlzLl9kYXRlLm1heFxuICAgIH0pKTtcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICBET00uZGVsZWdhdGUodGhpcy5fY29udGFpbmVyLCAnLmpzLXlleHQtZGF0ZScsICdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3VwZGF0ZVJhbmdlKGV2ZW50LnRhcmdldC5kYXRhc2V0LmtleSwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG1pbiBkYXRlIHRvIHRoZSBvbmUgcHJvdmlkZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGUgRGF0ZSB0byBzZXQgaW4geXl5eS1tbS1kZCBzdHJpbmcgZm9ybWF0XG4gICAqL1xuICBzZXRNaW4gKGRhdGUpIHtcbiAgICB0aGlzLl91cGRhdGVSYW5nZSgnbWluJywgZGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBtYXggZGF0ZSB0byB0aGUgb25lIHByb3ZpZGVkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlIERhdGUgdG8gc2V0IGluIHl5eXktbW0tZGQgc3RyaW5nIGZvcm1hdFxuICAgKi9cbiAgc2V0TWF4IChkYXRlKSB7XG4gICAgdGhpcy5fdXBkYXRlUmFuZ2UoJ21heCcsIGRhdGUpO1xuICB9XG5cbiAgZ2V0RmlsdGVyICgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBkYXRlIHJhbmdlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBmb3IgdGhlIGRhdGUgdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSBzdHJpbmcgZGF0ZSB2YWx1ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3VwZGF0ZVJhbmdlIChrZXksIHZhbHVlKSB7XG4gICAgdGhpcy5fZGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2RhdGUsIHsgW2tleV06IHZhbHVlIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoKTtcblxuICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuX2J1aWxkRmlsdGVyKCk7XG4gICAgaWYgKHRoaXMuX3N0b3JlT25DaGFuZ2UpIHtcbiAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBmaWx0ZXIpO1xuICAgIH1cbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke3RoaXMubmFtZX0ubWluYCwgdGhpcy5fZGF0ZS5taW4pO1xuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7dGhpcy5uYW1lfS5tYXhgLCB0aGlzLl9kYXRlLm1heCk7XG5cbiAgICB0aGlzLl9vbkNoYW5nZShmaWx0ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhbiBhcGkgZmlsdGVyIHdpdGggdGhlIGN1cnJlbnQgZGF0ZSBzdGF0ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2J1aWxkRmlsdGVyICgpIHtcbiAgICBpZiAodGhpcy5fZGF0ZS5taW4gPT09ICcnIHx8IHRoaXMuX2RhdGUubWF4ID09PSAnJykge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faXNFeGNsdXNpdmVcbiAgICAgID8gRmlsdGVyLmV4Y2x1c2l2ZVJhbmdlKHRoaXMuX2ZpZWxkLCB0aGlzLl9kYXRlLm1pbiwgdGhpcy5fZGF0ZS5tYXgpXG4gICAgICA6IEZpbHRlci5pbmNsdXNpdmVSYW5nZSh0aGlzLl9maWVsZCwgdGhpcy5fZGF0ZS5taW4sIHRoaXMuX2RhdGUubWF4KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRHluYW1pY0ZpbHRlcnNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbi8qKlxuICogRGlzcGxheXMgYSBzZXQgb2YgZHluYW1pYyBmaWx0ZXJzIHJldHVybmVkIGZyb20gdGhlIGJhY2tlbmRcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljRmlsdGVyc0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVydGljYWwga2V5IGZvciB0aGUgc2VhcmNoXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0cmlnZ2VyIGEgc2VhcmNoIG9uIGVhY2ggY2hhbmdlIHRvIGEgZmlsdGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zZWFyY2hPbkNoYW5nZSA9IGNvbmZpZy5zZWFyY2hPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RvciBvZiB0aGUgYXBwbHkgYnV0dG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwcGx5QnV0dG9uU2VsZWN0b3IgPSBjb25maWcuYXBwbHlCdXR0b25TZWxlY3RvciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbnRyb2xzIHRvIHVzZSBmb3IgZWFjaCBmaWVsZC4gRWFjaCB0eXBlIG9mIGZpbHRlciBoYXMgYSBkZWZhdWx0XG4gICAgICogJGVxIDogbXVsdGlvcHRpb24gKGNoZWNrYm94KVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5fZmllbGRDb250cm9scyA9IGNvbmZpZy5maWVsZENvbnRyb2xzIHx8IHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAnZmlsdGVycy9keW5hbWljJztcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSBmb3IgdGhlIGRhdGEgc3RvcmFnZSB0byBsaXN0ZW4gZm9yIHVwZGF0ZXMgZnJvbSB0aGUgc2VydmVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpbHRlciBib3ggdGhhdCBkaXNwbGF5cyB0aGUgZHluYW1pYyBmaWx0ZXJzXG4gICAgICogQHR5cGUge0ZpbHRlckJveENvbXBvbmVudH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlcmJveCA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRHluYW1pY0ZpbHRlcnMnO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgdGhpcy5jb3JlLmVuYWJsZUR5bmFtaWNGaWx0ZXJzKCk7XG5cbiAgICBpZiAodGhpcy5fZmlsdGVyYm94KSB7XG4gICAgICB0aGlzLl9maWx0ZXJib3gucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgbGV0IHsgZmlsdGVycyB9ID0gdGhpcy5fc3RhdGUuZ2V0KCk7XG5cbiAgICBpZiAoIWZpbHRlcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmaWx0ZXJzID0gZmlsdGVycy5tYXAoZiA9PiB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZiwge1xuICAgICAgICB0eXBlOiAnRmlsdGVyT3B0aW9ucycsXG4gICAgICAgIGNvbnRyb2w6IHRoaXMuX2ZpZWxkQ29udHJvbHNbZi5maWVsZElkXSB8fCAnbXVsdGlvcHRpb24nXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2ZpbHRlcmJveCA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoXG4gICAgICAnRmlsdGVyQm94JyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgcGFyZW50Q29udGFpbmVyOiB0aGlzLl9jb250YWluZXIsXG4gICAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0uZmlsdGVyYm94YCxcbiAgICAgICAgY29udGFpbmVyOiAnLmpzLXlleHQtZHluYW1pYy1maWx0ZXJzJyxcbiAgICAgICAgc2VhcmNoT25DaGFuZ2U6IHRoaXMuX3NlYXJjaE9uQ2hhbmdlLFxuICAgICAgICB2ZXJ0aWNhbEtleTogdGhpcy5fdmVydGljYWxLZXksXG4gICAgICAgIGlzRHluYW1pYzogdHJ1ZSxcbiAgICAgICAgZmlsdGVyc1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5fZmlsdGVyYm94Lm1vdW50KCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEdlb0xvY2F0aW9uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuY29uc3QgTUVURVJTX1BFUl9NSUxFID0gMTYwOS4zNDQ7XG5cbmNvbnN0IERFRkFVTFRfQ09ORklHID0ge1xuICAvKipcbiAgICogVGhlIHJhZGl1cywgaW4gbWlsZXMsIGFyb3VuZCB0aGUgdXNlcidzIGxvY2F0aW9uIHRvIGZpbmQgcmVzdWx0cy5cbiAgICogSWYgbG9jYXRpb24gYWNjdXJhY3kgaXMgbG93LCBhIGxhcmdlciByYWRpdXMgbWF5IGJlIHVzZWQgYXV0b21hdGljYWxseVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgcmFkaXVzOiA1MCxcblxuICAvKipcbiAgICogVGhlIHZlcnRpY2FsIGtleSB0byB1c2VcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHZlcnRpY2FsS2V5OiBudWxsLFxuXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBzdWJtaXRzIGEgc2VhcmNoIHdoZW4gdGhlIHZhbHVlIGlzIGNoYW5nZWRcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBzZWFyY2hPbkNoYW5nZTogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFRoZSB0aXRsZSB0byBkaXNwbGF5XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICB0aXRsZTogJ0xvY2F0aW9uJyxcblxuICAvKipcbiAgICogVGhlIGxhYmVsIHRvIGRpc3BsYXlcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGxhYmVsOiAnTG9jYXRpb24nLFxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB1cmwgdG8gc2hvdyBpbiB0aGUgZ2VvIGJ1dHRvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2VvQnV0dG9uSWNvbjogJycsXG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IHRvIHNob3cgaW4gdGhlIGdlbyBidXR0b25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdlb0J1dHRvblRleHQ6ICdVc2UgTXkgTG9jYXRpb24nLFxuXG4gIC8qKlxuICAgKiBUaGUgdGV4dCB0byBzaG93IHdoZW4gZ2VvbG9jYXRpb24gaXMgZW5hYmxlZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZW5hYmxlZFRleHQ6ICdDdXJyZW50IExvY2F0aW9uJyxcblxuICAvKipcbiAgICogVGhlIHRleHQgdG8gc2hvdyB3aGVuIGxvYWRpbmcgdGhlIHVzZXIncyBsb2NhdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgbG9hZGluZ1RleHQ6ICdGaW5kaW5nIFlvdXIgTG9jYXRpb24uLi4nLFxuXG4gIC8qKlxuICAgKiBUaGUgdGV4dCB0byBzaG93IGlmIHRoZSB1c2VyJ3MgbG9jYXRpb24gY2Fubm90IGJlIGZvdW5kXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBlcnJvclRleHQ6ICdDb3VsZCBOb3QgRmluZCBZb3VyIExvY2F0aW9uJyxcblxuICAvKipcbiAgICogVGhlIENTUyBzZWxlY3RvciBvZiB0aGUgdG9nZ2xlIGJ1dHRvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgYnV0dG9uU2VsZWN0b3I6ICcuanMteXh0LUdlb0xvY2F0aW9uRmlsdGVyLWJ1dHRvbicsXG5cbiAgLyoqXG4gICAqIFRoZSBDU1Mgc2VsZWN0b3Igb2YgdGhlIHF1ZXJ5IGlucHV0XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBpbnB1dFNlbGVjdG9yOiAnLmpzLXl4dC1HZW9Mb2NhdGlvbkZpbHRlci1pbnB1dCdcbn07XG5cbi8qKlxuICogUmVuZGVycyBhIGJ1dHRvbiB0aGF0IHdoZW4gY2xpY2tlZCBhZGRzIGEgc3RhdGljIGZpbHRlciByZXByZXNlbnRpbmcgdGhlIHVzZXIncyBsb2NhdGlvblxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlb0xvY2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKHsgLi4uREVGQVVMVF9DT05GSUcsIC4uLmNvbmZpZyB9LCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHN0cmluZyB0byB1c2UgZm9yIHRoZSBpbnB1dCBib3gsIHByb3ZpZGVkIHRvIHRlbXBsYXRlIGZvciByZW5kZXJpbmcuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWApIHx8ICcnO1xuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCwgcSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gcTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaWx0ZXIgdG8gdXNlIGZvciB0aGUgY3VycmVudCBxdWVyeVxuICAgICAqIEB0eXBlIHtGaWx0ZXJ9XG4gICAgICovXG4gICAgdGhpcy5maWx0ZXIgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWApIHx8IHt9O1xuICAgIGlmICh0eXBlb2YgdGhpcy5maWx0ZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmZpbHRlciA9IEpTT04ucGFyc2UodGhpcy5maWx0ZXIpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG5cbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke3RoaXMubmFtZX1gLCBmID0+IHsgdGhpcy5maWx0ZXIgPSBmOyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdHZW9Mb2NhdGlvbkZpbHRlcic7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoKSB7XG4gICAgcmV0dXJuICdjb250cm9scy9nZW9sb2NhdGlvbic7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIGxldCBwbGFjZWhvbGRlciA9ICcnO1xuICAgIGlmICh0aGlzLl9lbmFibGVkKSB7XG4gICAgICBwbGFjZWhvbGRlciA9IHRoaXMuX2NvbmZpZy5lbmFibGVkVGV4dDtcbiAgICB9XG4gICAgaWYgKGRhdGEuZ2VvTG9hZGluZykge1xuICAgICAgcGxhY2Vob2xkZXIgPSB0aGlzLl9jb25maWcubG9hZGluZ1RleHQ7XG4gICAgfVxuICAgIGlmIChkYXRhLmdlb0Vycm9yKSB7XG4gICAgICBwbGFjZWhvbGRlciA9IHRoaXMuX2NvbmZpZy5lcnJvclRleHQ7XG4gICAgfVxuICAgIHN1cGVyLnNldFN0YXRlKHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICB0aXRsZTogdGhpcy5fY29uZmlnLnRpdGxlLFxuICAgICAgZ2VvRW5hYmxlZDogdGhpcy5fZW5hYmxlZCxcbiAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgbGFiZWxUZXh0OiB0aGlzLl9jb25maWcubGFiZWwsXG4gICAgICBlbmFibGVkVGV4dDogdGhpcy5fY29uZmlnLmVuYWJsZWRUZXh0LFxuICAgICAgbG9hZGluZ1RleHQ6IHRoaXMuX2NvbmZpZy5sb2FkaW5nVGV4dCxcbiAgICAgIGVycm9yVGV4dDogdGhpcy5fY29uZmlnLmVycm9yVGV4dCxcbiAgICAgIGdlb0J1dHRvbkljb246IHRoaXMuX2NvbmZpZy5nZW9CdXR0b25JY29uLFxuICAgICAgZ2VvVmFsdWU6IHRoaXMuX2VuYWJsZWQgfHwgZGF0YS5nZW9Mb2FkaW5nIHx8IGRhdGEuZ2VvRXJyb3IgPyAnJyA6IHRoaXMucXVlcnksXG4gICAgICBnZW9QbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICBnZW9CdXR0b25UZXh0OiB0aGlzLl9jb25maWcuZ2VvQnV0dG9uVGV4dFxuICAgIH0pO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZSkge1xuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2luaXRBdXRvQ29tcGxldGUodGhpcy5fY29uZmlnLmlucHV0U2VsZWN0b3IpO1xuICAgIERPTS5vbih0aGlzLl9jb25maWcuYnV0dG9uU2VsZWN0b3IsICdjbGljaycsICgpID0+IHRoaXMuX3RvZ2dsZUdlb0ZpbHRlcigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gd2lyZSB1cCBvdXIgYXV0byBjb21wbGV0ZSBvbiBhbiBpbnB1dCBzZWxlY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRTZWxlY3RvciBDU1Mgc2VsZWN0b3IgdG8gYmluZCBvdXIgYXV0byBjb21wbGV0ZSBjb21wb25lbnQgdG9cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbml0QXV0b0NvbXBsZXRlIChpbnB1dFNlbGVjdG9yKSB7XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZSkge1xuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2F1dG9jb21wbGV0ZSA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoJ0F1dG9Db21wbGV0ZScsIHtcbiAgICAgIHBhcmVudENvbnRhaW5lcjogdGhpcy5fY29udGFpbmVyLFxuICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfS5hdXRvY29tcGxldGVgLFxuICAgICAgaXNGaWx0ZXJTZWFyY2g6IHRydWUsXG4gICAgICBjb250YWluZXI6ICcuanMteXh0LUdlb0xvY2F0aW9uRmlsdGVyLWF1dG9jb21wbGV0ZScsXG4gICAgICBvcmlnaW5hbFF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgb3JpZ2luYWxGaWx0ZXI6IHRoaXMuZmlsdGVyLFxuICAgICAgaW5wdXRFbDogaW5wdXRTZWxlY3RvcixcbiAgICAgIHZlcnRpY2FsS2V5OiB0aGlzLl92ZXJ0aWNhbEtleSxcbiAgICAgIG9uU3VibWl0OiAocXVlcnksIGZpbHRlcikgPT4ge1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gRmlsdGVyLmZyb21SZXNwb25zZShmaWx0ZXIpO1xuICAgICAgICB0aGlzLl9zYXZlRGF0YVRvU3RvcmFnZShxdWVyeSwgdGhpcy5maWx0ZXIpO1xuICAgICAgICB0aGlzLl9lbmFibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgc3RhdGljIGZpbHRlciByZXByZXNlbnRpbmcgdGhlIHVzZXIncyBsb2NhdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3RvZ2dsZUdlb0ZpbHRlciAoKSB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBnZW9FcnJvcjogdHJ1ZSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2VuYWJsZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBnZW9Mb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcbiAgICAgICAgcG9zaXRpb24gPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuX2J1aWxkRmlsdGVyKHBvc2l0aW9uKTtcbiAgICAgICAgICB0aGlzLl9zYXZlRGF0YVRvU3RvcmFnZSgnJywgZmlsdGVyLCBwb3NpdGlvbik7XG4gICAgICAgICAgdGhpcy5fZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7fSk7XG4gICAgICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLmRlbGV0ZShgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCk7XG4gICAgICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLmRlbGV0ZShgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWApO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZ2VvRXJyb3I6IHRydWUgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNhdmVzIHRoZSBwcm92aWRlZCBmaWx0ZXIgdW5kZXIgdGhpcyBjb21wb25lbnQncyBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSBUaGUgcXVlcnkgdG8gc2F2ZVxuICAgKiBAcGFyYW0ge0ZpbHRlcn0gZmlsdGVyIFRoZSBmaWx0ZXIgdG8gc2F2ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gcG9zaXRpb24gVGhlIHBvc2l0aW9uIHRvIHNhdmVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zYXZlRGF0YVRvU3RvcmFnZSAocXVlcnksIGZpbHRlciwgcG9zaXRpb24pIHtcbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gLCBxdWVyeSk7XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWAsIGZpbHRlcik7XG4gICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGZpbHRlcik7XG5cbiAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5HRU9MT0NBVElPTiwge1xuICAgICAgICBsYXQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgbG5nOiBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlLFxuICAgICAgICByYWRpdXM6IHBvc2l0aW9uLmNvb3Jkcy5hY2N1cmFjeVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5zZWFyY2hPbkNoYW5nZSkge1xuICAgICAgY29uc3QgZmlsdGVycyA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GSUxURVIpO1xuICAgICAgbGV0IHRvdGFsRmlsdGVyID0gZmlsdGVyc1swXTtcbiAgICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdG90YWxGaWx0ZXIgPSBGaWx0ZXIuYW5kKC4uLmZpbHRlcnMpO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2VhcmNoUXVlcnkgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSkgfHwgJyc7XG4gICAgICBjb25zdCBmYWNldEZpbHRlciA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GQUNFVF9GSUxURVIpWzBdO1xuXG4gICAgICB0aGlzLmNvcmUudmVydGljYWxTZWFyY2godGhpcy5fY29uZmlnLnZlcnRpY2FsS2V5LCB7XG4gICAgICAgIGlucHV0OiBzZWFyY2hRdWVyeSxcbiAgICAgICAgZmlsdGVyOiBKU09OLnN0cmluZ2lmeSh0b3RhbEZpbHRlciksXG4gICAgICAgIGZhY2V0RmlsdGVyOiBKU09OLnN0cmluZ2lmeShmYWNldEZpbHRlcilcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhIHBvc2l0aW9uLCBjb25zdHJ1Y3QgYSBGaWx0ZXIgb2JqZWN0XG4gICAqIEBwYXJhbSB7UG9zdGl0aW9ufSBwb3NpdGlvbiBUaGUgcG9zaXRpb25cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9idWlsZEZpbHRlciAocG9zaXRpb24pIHtcbiAgICBjb25zdCB7IGxhdGl0dWRlLCBsb25naXR1ZGUsIGFjY3VyYWN5IH0gPSBwb3NpdGlvbi5jb29yZHM7XG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5tYXgoYWNjdXJhY3ksIHRoaXMuX2NvbmZpZy5yYWRpdXMgKiBNRVRFUlNfUEVSX01JTEUpO1xuICAgIHJldHVybiBGaWx0ZXIucG9zaXRpb24obGF0aXR1ZGUsIGxvbmdpdHVkZSwgcmFkaXVzKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRGlyZWN0QW5zd2VyQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBBbmFseXRpY3NFdmVudCBmcm9tICcuLi8uLi8uLi9jb3JlL2FuYWx5dGljcy9hbmFseXRpY3NldmVudCc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5cbi8qKlxuICogRXZlbnRUeXBlcyBhcmUgZXhwbGljaXQgc3RyaW5ncyBkZWZpbmVkXG4gKiBmb3Igd2hhdCB0aGUgc2VydmVyIGV4cGVjdHMgZm9yIGFuYWx5dGljcy5cbiAqXG4gKiBAZW51bVxuICovXG5jb25zdCBFdmVudFR5cGVzID0ge1xuICBUSFVNQlNfVVA6ICdUSFVNQlNfVVAnLFxuICBUSFVNQlNfRE9XTjogJ1RIVU1CU19ET1dOJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0QW5zd2VyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZywgc3lzdGVtQ29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFJlY2lldmUgdXBkYXRlcyBmcm9tIHN0b3JhZ2UgYmFzZWQgb24gdGhpcyBpbmRleFxuICAgICAqIEB0eXBlIHtTdG9yYWdlS2V5fVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZvcm0gdXNlZCBmb3Igc3VibWl0dGluZyB0aGUgZmVlZGJhY2tcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2Zvcm1FbCA9IGNvbmZpZy5mb3JtRWwgfHwgJy5qcy1kaXJlY3RBbnN3ZXItZmVlZGJhY2stZm9ybSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYHRodW1icyB1cGAgY3NzIHNlbGVjdG9yIHRvIGJpbmQgdWkgaW50ZXJhY3Rpb24gdG8gZm9yIHJlcG9ydGluZ1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGh1bWJzVXBTZWxlY3RvciA9IGNvbmZpZy50aHVtYnNVcFNlbGVjdG9yIHx8ICcuanMtZGlyZWN0QW5zd2VyLXRodW1iVXAnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGB0aHVtYnMgZG93bmAgY3NzIHNlbGVjdG9yIHRvIGJpbmQgdWkgaW50ZXJhY3Rpb24gdG8gZm9yIHJlcG9ydGluZ1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGh1bWJzRG93blNlbGVjdG9yID0gY29uZmlnLnRodW1ic0Rvd25TZWxlY3RvciB8fCAnLmpzLWRpcmVjdEFuc3dlci10aHVtYkRvd24nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRpc3BsYXkgdGV4dCBmb3IgdGhlIFZpZXcgRGV0YWlscyBjbGljayB0byBhY3Rpb24gbGlua1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdmlld0RldGFpbHNUZXh0ID0gY29uZmlnLnZpZXdEZXRhaWxzVGV4dCB8fCAnVmlldyBEZXRhaWxzJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdEaXJlY3RBbnN3ZXInO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL2RpcmVjdGFuc3dlcic7XG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlTW91bnQsIG9ubHkgZGlzcGxheSB0aGUgZGlyZWN0IGFuc3dlciBjb21wb25lbnQgaWYgaXQgaGFzIGRhdGFcbiAgICovXG4gIGJlZm9yZU1vdW50ICgpIHtcbiAgICBpZiAoIXRoaXMuaGFzU3RhdGUoJ2Fuc3dlcicpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiB0aGUgRE9NIGlzIGNvbnN0cnVjdGVkLFxuICAgKiB3ZSB3YW50IHRvIHdpcmUgdXAgdGhlIGJlaGF2aW9yIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBxdWFsaXR5IGZlZWRiYWNrIHJlcG9ydGluZyAodGh1bWJzdXAvZG93bilcbiAgICovXG4gIG9uTW91bnQgKCkge1xuICAgIC8vIEF2b2lkIGJpbmRpbmdzIGlmIHRoZSBmZWVkYmFjayBoYXMgcHJldmlvdXNseSBiZWVuIHN1Ym1pdHRlZFxuICAgIGlmICh0aGlzLmdldFN0YXRlKCdmZWVkYmFja1N1Ym1pdHRlZCcpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBGb3IgV0NBRyBjb21wbGlhbmNlLCB0aGUgZmVlZGJhY2sgc2hvdWxkIGJlIGEgc3VibWl0dGFibGUgZm9ybVxuICAgIERPTS5vbih0aGlzLl9mb3JtRWwsICdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgbGV0IGZvcm1FbCA9IGUudGFyZ2V0O1xuICAgICAgbGV0IGNoZWNrZWRWYWx1ZSA9IERPTS5xdWVyeShmb3JtRWwsICdpbnB1dDpjaGVja2VkJykuY2hlY2tlZDtcblxuICAgICAgdGhpcy5yZXBvcnRRdWFsaXR5KGNoZWNrZWRWYWx1ZSk7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgJ2ZlZWRiYWNrU3VibWl0dGVkJzogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBJcyB0aGlzIGFjdHVhbGx5IG5lY2Vzc2FyeT8gSSBndWVzcyBpdCdzIG9ubHkgbmVjZXNzYXJ5IGlmIHRoZVxuICAgIC8vIHN1Ym1pdCBidXR0b24gaXMgaGlkZGVuLlxuICAgIERPTS5vbih0aGlzLl90aHVtYnNVcFNlbGVjdG9yLCAnY2xpY2snLCAoKSA9PiB7IERPTS50cmlnZ2VyKHRoaXMuX2Zvcm1FbCwgJ3N1Ym1pdCcpOyB9KTtcbiAgICBET00ub24odGhpcy5fdGh1bWJzRG93blNlbGVjdG9yLCAnY2xpY2snLCAoKSA9PiB7IERPTS50cmlnZ2VyKHRoaXMuX2Zvcm1FbCwgJ3N1Ym1pdCcpOyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiB1cGRhdGVTdGF0ZSBlbmFibGVzIGZvciBwYXJ0aWFsIHVwZGF0ZXMgKHRoZSBkZWx0YSBiZXR3ZWVuIHRoZSBvbGQgYW5kIG5ldylcbiAgICogQHR5cGUge29iamVjdH0gVGhlIG5ldyBzdGF0ZSB0byBhcHBseSB0byB0aGUgb2xkXG4gICAqL1xuICB1cGRhdGVTdGF0ZSAoc3RhdGUgPSB7fSkge1xuICAgIGNvbnN0IG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5nZXRTdGF0ZSgpLCBzdGF0ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBldmVudE9wdGlvbnM6IHRoaXMuZXZlbnRPcHRpb25zKGRhdGEpLFxuICAgICAgdmlld0RldGFpbHNUZXh0OiB0aGlzLl92aWV3RGV0YWlsc1RleHRcbiAgICB9KSk7XG4gIH1cblxuICBldmVudE9wdGlvbnMgKGRhdGEpIHtcbiAgICBpZiAoIWRhdGEgfHwgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHZlcnRpY2FsQ29uZmlnSWQ6IGRhdGEucmVsYXRlZEl0ZW0udmVydGljYWxDb25maWdJZCxcbiAgICAgIHNlYXJjaGVyOiAnVU5JVkVSU0FMJyxcbiAgICAgIGVudGl0eUlkOiBkYXRhLnJlbGF0ZWRJdGVtLmRhdGEuaWQsXG4gICAgICBjdGFMYWJlbDogdGhpcy5fdmlld0RldGFpbHNUZXh0LnRvVXBwZXJDYXNlKCkucmVwbGFjZSgnICcsICdfJylcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXBvcnRRdWFsaXR5IHdpbGwgc2VuZCB0aGUgcXVhbGl0eSBmZWVkYmFjayB0byBhbmFseXRpY3NcbiAgICogQHBhcmFtIHtib29sZWFufSBpc0dvb2QgdHJ1ZSBpZiB0aGUgYW5zd2VyIGlzIHdoYXQgeW91IHdlcmUgbG9va2luZyBmb3JcbiAgICovXG4gIHJlcG9ydFF1YWxpdHkgKGlzR29vZCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IGlzR29vZCA9PT0gdHJ1ZSA/IEV2ZW50VHlwZXMuVEhVTUJTX1VQIDogRXZlbnRUeXBlcy5USFVNQlNfRE9XTjtcbiAgICBjb25zdCBldmVudCA9IG5ldyBBbmFseXRpY3NFdmVudChldmVudFR5cGUpXG4gICAgICAuYWRkT3B0aW9ucyh7XG4gICAgICAgICdkaXJlY3RBbnN3ZXInOiB0cnVlXG4gICAgICB9KTtcblxuICAgIHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIucmVwb3J0KGV2ZW50KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cywgc3lzdGVtQ29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIHZlcnRpY2FsQ29uZmlnSWQgdXNlZCBmb3IgYW5hbHl0aWNzIGFuZCBwYXNzZWQgdG8gY2hpbGRyZW5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxDb25maWdJZCA9IG9wdHMudmVydGljYWxDb25maWdJZDtcblxuICAgIC8qKlxuICAgICAqIGlzVW5pdmVyc2FsIGlzIHVzZWQgZm9yIGFuYWx5dGljcyBhbmQgcGFzc2VkIHRvIGNoaWxkcmVuIGFuZCBpcyBzZXQgdG9cbiAgICAgKiB0cnVlIGlmIHRoaXMgY29tcG9uZW50IGlzIGFkZGVkIGJ5IHRoZSBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50XG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9pc1VuaXZlcnNhbCA9IG9wdHMuaXNVbml2ZXJzYWwgfHwgZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL3Jlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIGhlbHBlciB0byBjb25zdHJ1Y3QgdGhlIGV2ZW50T3B0aW9ucyBvYmplY3QgZm9yIHRoZSB0aXRsZSBsaW5rXG4gICAqIEBwYXJhbSBlbnRpdHlJZCBUaGUgSUQgb2YgdGhlIHJlc3VsdCBpdGVtLCBpZiBwcmVzZW50XG4gICAqIEBwYXJhbSB1cmwgVGhlIHVybCBvZiB0aGUgcmVzdWx0IGl0ZW0sIGlmIHByZXNlbnRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGV2ZW50T3B0aW9ucyAoZW50aXR5SWQsIHVybCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiB0aGlzLl92ZXJ0aWNhbENvbmZpZ0lkLFxuICAgICAgc2VhcmNoZXI6IHRoaXMuX2lzVW5pdmVyc2FsID8gJ1VOSVZFUlNBTCcgOiAnVkVSVElDQUwnXG4gICAgfTtcblxuICAgIGlmIChlbnRpdHlJZCkge1xuICAgICAgb3B0aW9ucy5lbnRpdHlJZCA9IGVudGl0eUlkO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICB9XG5cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogcGFzc2VzIGV2ZW50T3B0aW9ucyB0byB0aGUgdmlld01vZGVsXG4gICAqIEBvdmVycmlkZVxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0c0l0ZW1Db21wb25lbnR9XG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgIGV2ZW50T3B0aW9uczogdGhpcy5ldmVudE9wdGlvbnMoZGF0YS5pZCwgZGF0YS5saW5rKVxuICAgIH0pKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBSZXN1bHRzSXRlbUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cywgc3lzdGVtQ29uZmlnKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50ICovXG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNJdGVtQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihvcHRzLCBzeXN0ZW1Db25maWcpO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0V2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL2V2ZW50cmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50ICovXG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBSZXN1bHRzSXRlbUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30sIHN5c3RlbU9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMsIHN5c3RlbU9wdHMpO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1Blb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9wZW9wbGVyZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTWFwUHJvdmlkZXIgKi9cblxuLyoqXG4gKiBBIE1hcFByb3ZpZGVyIGlzIGFuIGludGVyZmFjZSB0aGF0IHJlcHJlc2VudHMgdGhhdCBzaG91bGQgYmUgaW1wbGVtZW50ZWRcbiAqIGluIG9yZGVyIHRvIGludGVncmF0ZSB3aXRoIGEgVGhpcmQgUGFydHkgTWFwIHByb3ZpZGVyIGZvclxuICogaW50ZXJhY3RpdmUgbWFwcy4gTWFwUHJvdmlkZXJzIGFyZSB1c2VkIGJ5IHRoZSBNYXBDb21wb25lbnQuXG4gKlxuICogSW1wbGVtZW50YXRpb25zIHNob3VsZCBleHRlbmQgdGhpcyBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcFByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdXNlZCBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgbWFwIHByb3ZpZGVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBjb25maWcuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHpvb20gbGV2ZWwgb2YgdGhlIG1hcCwgZGVmYXVsdHMgdG8gOVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fem9vbSA9IGNvbmZpZy56b29tIHx8IDk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBjb29yZGluYXRlcyB0byBkaXNwbGF5IGlmIHRoZXJlIGFyZSBubyByZXN1bHRzIHJldHVybmVkXG4gICAgICogT25seSB1c2VkIGlmIHNob3dFbXB0eU1hcCBpcyBzZXQgdG8gdHJ1ZVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5fZGVmYXVsdFBvc2l0aW9uID0gY29uZmlnLmRlZmF1bHRQb3NpdGlvbiB8fCB7IGxhdDogMzcuMDkwMiwgbG5nOiAtOTUuNzEyOSB9O1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiBhbiBlbXB0eSBtYXAgc2hvdWxkIGJlIHNob3duIHdoZW4gdGhlcmUgYXJlIG5vIHJlc3VsdHNcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9zaG93RW1wdHlNYXAgPSBjb25maWcuc2hvd0VtcHR5TWFwIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIHVuZGVybHlpbmcgbWFwIGluc3RhbmNlLCBjcmVhdGVkIGJ5IHRoZSBleHRlcm5hbCBsaWIuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9tYXAgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGVtcG9yYXJ5IGJvb2xlYW4gdHJhY2tpbmcgd2hldGhlciBvciBub3QgdGhlIGV4dGVybmFsIEpTIGxpYnJhcnkgaXMgbG9hZGVkIChzZWUgVE9ETyBiZWxvdylcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9pc0xvYWRlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gYSBwaW4gaXMgY2xpY2tlZC4gVGhlIGNsaWNrZWQgaXRlbShzKSBhcmUgcGFzc2VkIHRvIHRoZSBjYWxsYmFja1xuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLl9vblBpbkNsaWNrID0gY29uZmlnLm9uUGluQ2xpY2sgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSBvbmNlIHRoZSBKYXZhc2NyaXB0IGlzIGxvYWRlZFxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLl9vbkxvYWRlZCA9IGNvbmZpZy5vbkxvYWRlZCB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXN0b20gY29uZmlndXJhdGlvbiBvdmVycmlkZSB0byB1c2UgZm9yIHRoZSBtYXAgbWFya2Vyc1xuICAgICAqIEB0eXBlIHtPYmplY3R8RnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5fcGluQ29uZmlnID0gdHlwZW9mIGNvbmZpZy5waW4gPT09ICdmdW5jdGlvbicgPyBjb25maWcucGluIDogT2JqZWN0LmFzc2lnbihNYXBQcm92aWRlci5ERUZBVUxUX1BJTl9DT05GSUcsIGNvbmZpZy5waW4pO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0byBjb2xsYXBzZSBwaW5zIGF0IHRoZSBzYW1lIGxhdC9sbmdcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9jb2xsYXBzZVBpbnMgPSBjb25maWcuY29sbGFwc2VQaW5zIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gdG8gdXNlIGZvciB0aGUgbWFwIG1hcmtlcnNcbiAgICogQHR5cGUge09iamVjdH1cbiAgICogVE9ETyhiaWxseSkgQ3JlYXRlIGEgY29uZmlndXJhdGlvbiBtb2RlbFxuICAgKi9cbiAgc3RhdGljIGdldCBERUZBVUxUX1BJTl9DT05GSUcgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpY29uOiB7XG4gICAgICAgIGFuY2hvcjogbnVsbCwgLy8gZS5nLiB7IHg6IDEsIHk6IDEgfVxuICAgICAgICBzdmc6IG51bGwsXG4gICAgICAgIHVybDogbnVsbCxcbiAgICAgICAgc2NhbGVkU2l6ZTogbnVsbCAvLyBlLmcuIHsgdzogMjAsIGg6IDIwIH1cbiAgICAgIH0sXG4gICAgICBsYWJlbFR5cGU6ICdudW1lcmljJ1xuICAgIH07XG4gIH1cblxuICBvbkxvYWRlZCAoY2IpIHtcbiAgICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fb25Mb2FkZWQgPSBjYjtcbiAgICBpZiAodGhpcy5pc0xvYWRlZCgpKSB7XG4gICAgICB0aGlzLl9vbkxvYWRlZCgpO1xuICAgIH1cbiAgfVxuXG4gIGlzTG9hZGVkICgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNMb2FkZWQ7XG4gIH1cblxuICBsb2FkSlMgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCBNZXRob2Q6IGxvYWRKUycpO1xuICB9XG5cbiAgaW5pdCAobWFwRGF0YSkge1xuICAgIC8vIFRPRE8oYmlsbHkpIFRoaXMgc2hvdWxkIGJlIGJhc2VkIG9mZiBhIHByb21pc2UgdGhhdCBnZXRzIGNyZWF0ZWQgZnJvbSBsb2FkSlNcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaW1wbGVtZW50ZWQgTWV0aG9kOiBpbml0Jyk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYSBsaXN0IG9mIG1hcmtlcnMsIGNvbWJpbmUgbWFya2VycyB3aXRoIHRoZSBzYW1lIGxhdC9sbmcgaW50byBhIHNpbmdsZSBtYXJrZXJcbiAgICogQHBhcmFtIHtvYmplY3RbXX0gbWFya2VycyBUaGUgbWFya2VycyB0byBjb2xsYXBzZVxuICAgKi9cbiAgX2NvbGxhcHNlTWFya2VycyAobWFya2Vycykge1xuICAgIGNvbnN0IGxvY2F0aW9uVG9JdGVtID0ge307XG4gICAgbWFya2Vycy5mb3JFYWNoKG0gPT4ge1xuICAgICAgbG9jYXRpb25Ub0l0ZW1bYCR7bS5sYXRpdHVkZX0ke20ubG9uZ2l0dWRlfWBdXG4gICAgICAgID8gbG9jYXRpb25Ub0l0ZW1bYCR7bS5sYXRpdHVkZX0ke20ubG9uZ2l0dWRlfWBdLnB1c2gobSlcbiAgICAgICAgOiBsb2NhdGlvblRvSXRlbVtgJHttLmxhdGl0dWRlfSR7bS5sb25naXR1ZGV9YF0gPSBbbV07XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb2xsYXBzZWRNYXJrZXJzID0gW107XG4gICAgZm9yIChsZXQgWywgbWFya2Vyc10gb2YgT2JqZWN0LmVudHJpZXMobG9jYXRpb25Ub0l0ZW0pKSB7XG4gICAgICBpZiAobWFya2Vycy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlZE1hcmtlciA9IHtcbiAgICAgICAgICBpdGVtOiBtYXJrZXJzLm1hcChtID0+IG0uaXRlbSksXG4gICAgICAgICAgbGFiZWw6IG1hcmtlcnMubGVuZ3RoLFxuICAgICAgICAgIGxhdGl0dWRlOiBtYXJrZXJzWzBdLmxhdGl0dWRlLFxuICAgICAgICAgIGxvbmdpdHVkZTogbWFya2Vyc1swXS5sb25naXR1ZGVcbiAgICAgICAgfTtcbiAgICAgICAgY29sbGFwc2VkTWFya2Vycy5wdXNoKGNvbGxhcHNlZE1hcmtlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsYXBzZWRNYXJrZXJzLnB1c2gobWFya2Vyc1swXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbGxhcHNlZE1hcmtlcnM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEdvb2dsZU1hcFByb3ZpZGVyICovXG5cbmltcG9ydCBNYXBQcm92aWRlciBmcm9tICcuL21hcHByb3ZpZGVyJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vLi4vZG9tL2RvbSc7XG5cbi8qIGdsb2JhbCBnb29nbGUgKi9cblxuLyoqXG4gKiBHb29nbGVNYXBQcm92aWRlciBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiBhIE1hcFByb3ZpZGVyXG4gKiB0aGF0IGhhbmRsZXMgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIHRoaXJkIHBhcnR5IEFQSSB0byBleHBvc2UgbWFwcy5cbiAqIEBleHRlbmRzIE1hcFByb3ZpZGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvb2dsZU1hcFByb3ZpZGVyIGV4dGVuZHMgTWFwUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5fY2xpZW50SWQgPSBvcHRzLmNsaWVudElkO1xuICAgIHRoaXMuX3NpZ25hdHVyZSA9IG9wdHMuc2lnbmF0dXJlO1xuXG4gICAgaWYgKCF0aGlzLmhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMoKSAmJiAhdGhpcy5fYXBpS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dvb2dsZU1hcHNQcm92aWRlcjogTWlzc2luZyBgYXBpS2V5YCBvciB7YGNsaWVudElkYCwgYHNpZ25hdHVyZWB9Jyk7XG4gICAgfVxuICB9XG5cbiAgbG9hZEpTIChvbkxvYWQpIHtcbiAgICBpZiAoRE9NLnF1ZXJ5KCcjeWV4dC1tYXAtanMnKSkge1xuICAgICAgdGhpcy5faXNMb2FkZWQgPSB0cnVlO1xuICAgICAgaWYgKHR5cGVvZiBvbkxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb25Mb2FkKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHNjcmlwdCA9IERPTS5jcmVhdGVFbCgnc2NyaXB0Jywge1xuICAgICAgaWQ6ICd5ZXh0LW1hcC1qcycsXG4gICAgICBvbmxvYWQ6ICgpID0+IHtcbiAgICAgICAgdGhpcy5faXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9vbkxvYWRlZCgpO1xuICAgICAgfSxcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgc3JjOiBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzPyR7dGhpcy5nZW5lcmF0ZUNyZWRlbnRpYWxzKCl9YFxuICAgIH0pO1xuXG4gICAgRE9NLmFwcGVuZCgnYm9keScsIHNjcmlwdCk7XG4gIH1cblxuICBnZW5lcmF0ZUNyZWRlbnRpYWxzICgpIHtcbiAgICBpZiAodGhpcy5oYXNWYWxpZENsaWVudENyZWRlbnRpYWxzKCkpIHtcbiAgICAgIHJldHVybiBgY2xpZW50PSR7dGhpcy5fY2xpZW50SWR9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGBrZXk9JHt0aGlzLl9hcGlLZXl9YDtcbiAgICB9XG4gIH1cblxuICBoYXNWYWxpZENsaWVudENyZWRlbnRpYWxzICgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xpZW50SWQ7XG4gIH1cblxuICBpbml0IChlbCwgbWFwRGF0YSkge1xuICAgIGlmICgoIW1hcERhdGEgfHwgbWFwRGF0YS5tYXBNYXJrZXJzLmxlbmd0aCA8PSAwKSAmJiAhdGhpcy5fc2hvd0VtcHR5TWFwKSB7XG4gICAgICB0aGlzLl9tYXAgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vIE5PVEUoYmlsbHkpIFRoaXMgdGltZW91dCBpcyBhIGhhY2sgZm9yIGRlYWxpbmcgd2l0aCBhc3luYyBuYXR1cmUuXG4gICAgLy8gT25seSBoZXJlIGZvciBkZW1vIHB1cnBvc2VzLCBzbyB3ZSdsbCBmaXggbGF0ZXIuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgY29udGFpbmVyID0gRE9NLnF1ZXJ5KGVsKTtcbiAgICAgIHRoaXMubWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChjb250YWluZXIsIHtcbiAgICAgICAgem9vbTogdGhpcy5fem9vbVxuICAgICAgfSk7XG5cbiAgICAgIC8vIEFwcGx5IG91ciBzZWFyY2ggZGF0YSB0byBvdXIgR29vZ2xlTWFwXG4gICAgICBsZXQgYm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xuXG4gICAgICBpZiAobWFwRGF0YSAmJiBtYXBEYXRhLm1hcE1hcmtlcnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlZE1hcmtlcnMgPSB0aGlzLl9jb2xsYXBzZVBpbnNcbiAgICAgICAgICA/IHRoaXMuX2NvbGxhcHNlTWFya2VycyhtYXBEYXRhLm1hcE1hcmtlcnMpXG4gICAgICAgICAgOiBtYXBEYXRhLm1hcE1hcmtlcnM7XG4gICAgICAgIGxldCBnb29nbGVNYXBNYXJrZXJDb25maWdzID0gR29vZ2xlTWFwTWFya2VyQ29uZmlnLmZyb20oXG4gICAgICAgICAgY29sbGFwc2VkTWFya2VycyxcbiAgICAgICAgICB0aGlzLl9waW5Db25maWcsXG4gICAgICAgICAgdGhpcy5tYXApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ29vZ2xlTWFwTWFya2VyQ29uZmlncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKGdvb2dsZU1hcE1hcmtlckNvbmZpZ3NbaV0pO1xuICAgICAgICAgIGlmICh0aGlzLl9vblBpbkNsaWNrKSB7XG4gICAgICAgICAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5fb25QaW5DbGljayhjb2xsYXBzZWRNYXJrZXJzW2ldLml0ZW0pKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm91bmRzLmV4dGVuZChtYXJrZXIucG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKGJvdW5kcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1hcC5zZXRDZW50ZXIobmV3IGdvb2dsZS5tYXBzLkxhdExuZyh0aGlzLl9kZWZhdWx0UG9zaXRpb24ubGF0LCB0aGlzLl9kZWZhdWx0UG9zaXRpb24ubG5nKSk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgfVxufVxuXG4vLyBUT0RPKGJpbGx5KSBNb3ZlIHRvIG93biBjbGFzc1xuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcE1hcmtlckNvbmZpZyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGdvb2dsZSBtYXAsIHRoYXQgdGhlIG1hcmtlciBpcyBhcHBlbmRlZCB0b1xuICAgICAqIEB0eXBlIHtHb29nbGVNYXB9XG4gICAgICovXG4gICAgdGhpcy5tYXAgPSBvcHRzLm1hcCB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1hcmtlciAobGF0L2xuZylcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMucG9zaXRpb24gPSBvcHRzLnBvc2l0aW9uIHx8IHtcbiAgICAgIGxhdDogdW5kZWZpbmVkLFxuICAgICAgbG5nOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHByb3BlcnRpZXMvc2V0dGluZ3Mgb2YgdGhlIGljb24gdXNlZCBmb3IgdGhlIG1hcmtlclxuICAgICAqIGUuZy4ge1xuICAgICAqICAgICAgICBhbmNob3I6IHsgeDogMCwgeTogMCB9XG4gICAgICogICAgICAgIHVybDogJ3BhdGgvdG8vdXJsLmpwZydcbiAgICAgKiAgICAgICAgc2NhbGVkU2l6ZTogeyB3OiAwLCBoOiAwIH1cbiAgICAgKiAgICAgICB9XG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuaWNvbiA9IG9wdHMuaWNvbiB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgb2YgdGhlIG1hcmtlciB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWwgPSBvcHRzLmxhYmVsIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGFuIGFycmF5IG9mIG1hcmtlciBjb25maWdzXG4gICAqIEBwYXJhbSB7R29vZ2xlTWFwTWFya2VyQ29uZmlnW119IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3NcbiAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZSAoZ29vZ2xlTWFwTWFya2VyQ29uZmlncykge1xuICAgIGxldCBzZXJpYWxpemVkTWFya2VycyA9IFtdO1xuICAgIGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBzZXJpYWxpemVkTWFya2Vycy5wdXNoKGBtYXJrZXJzPWxhYmVsOiR7bWFya2VyLmxhYmVsfXwke21hcmtlci5wb3NpdGlvbi5sYXR9LCR7bWFya2VyLnBvc2l0aW9uLmxuZ31gKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VyaWFsaXplZE1hcmtlcnMuam9pbignJicpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBzdG9yYWdlIGRhdGEgbW9kZWwgb2YgbWFya2VycyBpbnRvIEdvb2dsZUFQSU1hcmtlclxuICAgKiBAcGFyYW0ge29iamVjdFtdfSBtYXJrZXJzIFRoZSBkYXRhIG9mIHRoZSBtYXJrZXJcbiAgICogQHBhcmFtIHsoT2JqZWN0fGZ1bmN0aW9uKX0gcGluQ29uZmlnIFRoZSBjb25maWd1cmF0aW9uIHRvIGFwcGx5IHRvIHRoZSBtYXJrZXJcbiAgICogQHBhcmFtIHtHb29nbGVNYXB9IG1hcCByZWZlcmVuY2UgdG8gdGhlIGdvb2dsZSBtYXAgdG8gYXBwbHkgdGhlIG1hcmtlciB0b1xuICAgKiBAcmV0dXJucyB7R29vZ2xlTWFwTWFya2VyQ29uZmlnW119XG4gICAqL1xuICBzdGF0aWMgZnJvbSAobWFya2VycywgcGluQ29uZmlnLCBtYXApIHtcbiAgICBsZXQgZ29vZ2xlTWFwTWFya2VyQ29uZmlncyA9IFtdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShtYXJrZXJzKSkge1xuICAgICAgbWFya2VycyA9IFttYXJrZXJzXTtcbiAgICB9XG5cbiAgICBtYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgLy8gU3VwcG9ydCBjb25maWd1cmF0aW9uIGFzIGEgZnVuY3Rpb25cbiAgICAgIGxldCBwaW5Db25maWdPYmogPSBwaW5Db25maWc7XG4gICAgICBpZiAodHlwZW9mIHBpbkNvbmZpZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwaW5Db25maWdPYmogPSBwaW5Db25maWcoXG4gICAgICAgICAgbWFya2VyLml0ZW0sXG4gICAgICAgICAgTWFwUHJvdmlkZXIuREVGQVVMVF9QSU5fQ09ORklHLFxuICAgICAgICAgIG1hcmtlcik7XG4gICAgICB9XG5cbiAgICAgIC8vIFRyYW5zZm9ybSBvdXIgQ29uZmlndXJhdGlvbiBPYmplY3QgaW50byB0aGUgZXhwZWN0ZWRcbiAgICAgIC8vIEdvb2dsZSBBUEkgZm9ybWF0LlxuICAgICAgbGV0IGljb24gPSB7fTtcbiAgICAgIGlmIChwaW5Db25maWdPYmouYW5jaG9yKSB7XG4gICAgICAgIGljb24uYW5jaG9yID0gZ29vZ2xlLm1hcHMuUG9pbnQocGluQ29uZmlnT2JqLmFuY2hvci54LCBwaW5Db25maWdPYmouYW5jaG9yLnkpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluQ29uZmlnT2JqLnNjYWxlZFNpemUpIHtcbiAgICAgICAgaWNvbi5zY2FsZWRTaXplID0gbmV3IGdvb2dsZS5tYXBzLlNpemUocGluQ29uZmlnT2JqLnNjYWxlZFNpemUudywgcGluQ29uZmlnT2JqLnNjYWxlZFNpemUuaCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW5Db25maWdPYmoudXJsKSB7XG4gICAgICAgIGljb24udXJsID0gcGluQ29uZmlnT2JqLnVybDtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpbkNvbmZpZ09iai5zdmcpIHtcbiAgICAgICAgaWNvbi51cmwgPSBgZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsICR7ZW5jb2RlVVJJQ29tcG9uZW50KHBpbkNvbmZpZ09iai5zdmcpfWA7XG4gICAgICB9XG5cbiAgICAgIGxldCBsYWJlbDtcbiAgICAgIGlmIChwaW5Db25maWdPYmoubGFiZWwpIHtcbiAgICAgICAgbGFiZWwgPSBwaW5Db25maWdPYmoubGFiZWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYWJlbCA9IG1hcmtlci5sYWJlbC50b1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICAvLyBOT1RFKGJpbGx5KSBHb29nbGUgbWFwcyBkb2Vzbid0IGhhbmRsZSBlbXB0eSBpY29uIG9iamVjdHMgbmljZWx5XG4gICAgICAvLyBNYWtlIGdvb2dsZSBtYXBzIGhhcHB5IGlmIG5vIHNldHRpbmdzIGZvciBpY29uIGFyZSBwcm92aWRlZDtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhpY29uKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWNvbiA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgZ29vZ2xlTWFwTWFya2VyQ29uZmlncy5wdXNoKFxuICAgICAgICBuZXcgR29vZ2xlTWFwTWFya2VyQ29uZmlnKHtcbiAgICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgbGF0OiBtYXJrZXIubGF0aXR1ZGUsXG4gICAgICAgICAgICBsbmc6IG1hcmtlci5sb25naXR1ZGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGljb246IGljb24sXG4gICAgICAgICAgbGFiZWw6IGxhYmVsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGdvb2dsZU1hcE1hcmtlckNvbmZpZ3M7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE1hcEJveE1hcFByb3ZpZGVyICovXG5cbmltcG9ydCBNYXBQcm92aWRlciBmcm9tICcuL21hcHByb3ZpZGVyJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vLi4vZG9tL2RvbSc7XG5cbi8qIGdsb2JhbCBtYXBib3hnbCAqL1xuXG4vKipcbiAqIE1hcEJveE1hcFByb3ZpZGVyIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIGEgTWFwUHJvdmlkZXJcbiAqIHRoYXQgaGFuZGxlcyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgdGhpcmQgcGFydHkgQVBJIHRvIGV4cG9zZSBtYXBzLlxuICogQGV4dGVuZHMgTWFwUHJvdmlkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwQm94TWFwUHJvdmlkZXIgZXh0ZW5kcyBNYXBQcm92aWRlciB7XG4gIC8qKlxuICAgKiBMb2FkIHRoZSBleHRlcm5hbCBKUyBMaWJyYXJ5XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uTG9hZCBBbiBvcHRpb25hbCBjYWxsYmFjayB0byBpbnZva2Ugb25jZSB0aGUgSlMgaXMgbG9hZGVkLlxuICAgKi9cbiAgbG9hZEpTIChvbkxvYWQpIHtcbiAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWpzJyxcbiAgICAgIG9ubG9hZDogKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIG1hcGJveGdsLmFjY2Vzc1Rva2VuID0gdGhpcy5fYXBpS2V5O1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb25Mb2FkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgb25Mb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX29uTG9hZGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5fb25Mb2FkZWQoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgc3JjOiAnaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9tYXBib3gtZ2wtanMvdjAuNDQuMS9tYXBib3gtZ2wuanMnXG4gICAgfSk7XG5cbiAgICBsZXQgY3NzID0gRE9NLmNyZWF0ZUVsKCdsaW5rJywge1xuICAgICAgaWQ6ICd5ZXh0LW1hcC1jc3MnLFxuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOiAnaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9tYXBib3gtZ2wtanMvdjAuNDQuMS9tYXBib3gtZ2wuY3NzJ1xuICAgIH0pO1xuXG4gICAgRE9NLmFwcGVuZCgnYm9keScsIGNzcyk7XG4gICAgRE9NLmFwcGVuZCgnYm9keScsIHNjcmlwdCk7XG4gIH1cblxuICBpbml0IChlbCwgbWFwRGF0YSkge1xuICAgIGlmICgoIW1hcERhdGEgfHwgbWFwRGF0YS5tYXBNYXJrZXJzLmxlbmd0aCA8PSAwKSAmJiAhdGhpcy5fc2hvd0VtcHR5TWFwKSB7XG4gICAgICB0aGlzLl9tYXAgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRhaW5lciA9IERPTS5xdWVyeShlbCk7XG4gICAgdGhpcy5fbWFwID0gbmV3IG1hcGJveGdsLk1hcCh7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgIHpvb206IHRoaXMuX3pvb20sXG4gICAgICBzdHlsZTogJ21hcGJveDovL3N0eWxlcy9tYXBib3gvc3RyZWV0cy12OScsXG4gICAgICBjZW50ZXI6IHRoaXMuZ2V0Q2VudGVyTWFya2VyKG1hcERhdGEpXG4gICAgfSk7XG5cbiAgICBpZiAobWFwRGF0YSkge1xuICAgICAgY29uc3QgY29sbGFwc2VkTWFya2VycyA9IHRoaXMuX2NvbGxhcHNlUGluc1xuICAgICAgICA/IHRoaXMuX2NvbGxhcHNlTWFya2VycyhtYXBEYXRhLm1hcE1hcmtlcnMpXG4gICAgICAgIDogbWFwRGF0YS5tYXBNYXJrZXJzO1xuICAgICAgY29uc3QgbWFwYm94TWFwTWFya2VyQ29uZmlncyA9IE1hcEJveE1hcmtlckNvbmZpZy5mcm9tKFxuICAgICAgICBjb2xsYXBzZWRNYXJrZXJzLFxuICAgICAgICB0aGlzLl9waW5Db25maWcsXG4gICAgICAgIHRoaXMuX21hcCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFwYm94TWFwTWFya2VyQ29uZmlncy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgd3JhcHBlciA9IG1hcGJveE1hcE1hcmtlckNvbmZpZ3NbaV0ud3JhcHBlcjtcbiAgICAgICAgbGV0IGNvb3JkcyA9IG5ldyBtYXBib3hnbC5MbmdMYXQoXG4gICAgICAgICAgbWFwYm94TWFwTWFya2VyQ29uZmlnc1tpXS5wb3NpdGlvbi5sb25naXR1ZGUsXG4gICAgICAgICAgbWFwYm94TWFwTWFya2VyQ29uZmlnc1tpXS5wb3NpdGlvbi5sYXRpdHVkZSk7XG4gICAgICAgIGxldCBtYXJrZXIgPSBuZXcgbWFwYm94Z2wuTWFya2VyKHdyYXBwZXIpLnNldExuZ0xhdChjb29yZHMpO1xuICAgICAgICBtYXJrZXIuYWRkVG8odGhpcy5fbWFwKTtcbiAgICAgICAgaWYgKHRoaXMuX29uUGluQ2xpY2spIHtcbiAgICAgICAgICBtYXJrZXIuZ2V0RWxlbWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5fb25QaW5DbGljayhjb2xsYXBzZWRNYXJrZXJzW2ldLml0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENlbnRlck1hcmtlciAobWFwRGF0YSkge1xuICAgIHJldHVybiBtYXBEYXRhICYmIG1hcERhdGEubWFwQ2VudGVyICYmIG1hcERhdGEubWFwQ2VudGVyLmxvbmdpdHVkZSAmJiBtYXBEYXRhLm1hcENlbnRlci5sYXRpdHVkZVxuICAgICAgPyBbbWFwRGF0YS5tYXBDZW50ZXIubG9uZ2l0dWRlLCBtYXBEYXRhLm1hcENlbnRlci5sYXRpdHVkZV1cbiAgICAgIDogeyBsbmc6IHRoaXMuX2RlZmF1bHRQb3NpdGlvbi5sbmcsIGxhdDogdGhpcy5fZGVmYXVsdFBvc2l0aW9uLmxhdCB9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXBCb3hNYXJrZXJDb25maWcge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBtYXBib3ggbWFwLCB0aGF0IHRoZSBtYXJrZXIgaXMgYXBwZW5kZWQgdG9cbiAgICAgKiBAdHlwZSB7TWFwQm94fVxuICAgICAqL1xuICAgIHRoaXMubWFwID0gb3B0cy5tYXAgfHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBtYXJrZXIgKGxhdC9sbmcpXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLnBvc2l0aW9uID0gb3B0cy5wb3NpdGlvbiB8fCB7XG4gICAgICBsYXRpdHVkZTogdW5kZWZpbmVkLFxuICAgICAgbG9uZ2l0dWRlOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGh0bWwgZWxlbWVudCB0byBiZSB1c2VkIGFzIHRoZSBtYXAgbWFya2VyXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLndyYXBwZXIgPSBvcHRzLndyYXBwZXIgfHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIG9mIHRoZSBtYXJrZXIgdG8gdXNlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmxhYmVsID0gb3B0cy5sYWJlbCB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdXJsIG9mIHRoZSBwaW4gZm9yIHRoZSBzdGF0aWMgbWFwXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnN0YXRpY01hcFBpbiA9IG9wdHMuc3RhdGljTWFwUGluIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGFuIGFycmF5IG9mIG1hcmtlciBjb25maWdzXG4gICAqIEBwYXJhbSB7TWFwQm94TWFya2VyQ29uZmlnW119IG1hcGJveE1hcE1hcmtlckNvbmZpZ3NcbiAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZSAobWFwYm94TWFwTWFya2VyQ29uZmlncykge1xuICAgIGxldCBzZXJpYWxpemVkTWFya2VycyA9IFtdO1xuICAgIG1hcGJveE1hcE1hcmtlckNvbmZpZ3MuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBpZiAobWFya2VyLnN0YXRpY01hcFBpbikge1xuICAgICAgICBzZXJpYWxpemVkTWFya2Vycy5wdXNoKGB1cmwtJHttYXJrZXIuc3RhdGljTWFwUGlufSgke21hcmtlci5wb3NpdGlvbi5sb25naXR1ZGV9LCR7bWFya2VyLnBvc2l0aW9uLmxhdGl0dWRlfSlgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlcmlhbGl6ZWRNYXJrZXJzLnB1c2goYHBpbi1zLSR7bWFya2VyLmxhYmVsfSgke21hcmtlci5wb3NpdGlvbi5sb25naXR1ZGV9LCR7bWFya2VyLnBvc2l0aW9uLmxhdGl0dWRlfSlgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2VyaWFsaXplZE1hcmtlcnMuam9pbignLCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBzdG9yYWdlIGRhdGEgbW9kZWwgb2YgbWFya2VycyBpbnRvIEdvb2dsZUFQSU1hcmtlclxuICAgKiBAcGFyYW0ge01hcEJveH0gQSByZWZlcmVuY2UgdG8gdGhlIGdvb2dsZSBtYXAgdG8gYXBwbHkgdGhlIG1hcmtlciB0b1xuICAgKiBAcGFyYW0ge29iamVjdFtdfSBtYXJrZXJzIFRoZSBkYXRhIG9mIHRoZSBtYXJrZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IHBpbkNvbmZpZyBUaGUgY29uZmlndXJhdGlvbiB0byBhcHBseSB0byB0aGUgbWFya2VyXG4gICAqIEByZXR1cm5zIHtNYXBCb3hNYXJrZXJDb25maWdbXX1cbiAgICovXG4gIHN0YXRpYyBmcm9tIChtYXJrZXJzLCBwaW5Db25maWcsIG1hcCkge1xuICAgIGxldCBtYXBib3hNYXBNYXJrZXJDb25maWdzID0gW107XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1hcmtlcnMpKSB7XG4gICAgICBtYXJrZXJzID0gW21hcmtlcnNdO1xuICAgIH1cblxuICAgIG1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICAvLyBTdXBwb3J0IGNvbmZpZ3VyYXRpb24gYXMgYSBmdW5jdGlvblxuICAgICAgbGV0IHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZztcbiAgICAgIGlmICh0eXBlb2YgcGluQ29uZmlnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZyhcbiAgICAgICAgICBtYXJrZXIuaXRlbSxcbiAgICAgICAgICBNYXBQcm92aWRlci5ERUZBVUxUX1BJTl9DT05GSUcsXG4gICAgICAgICAgbWFya2VyKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgd3JhcHBlciA9IHBpbkNvbmZpZ09iai53cmFwcGVyID8gcGluQ29uZmlnT2JqLndyYXBwZXIgOiBudWxsO1xuICAgICAgY29uc3Qgc3RhdGljTWFwUGluID0gcGluQ29uZmlnT2JqLnN0YXRpY01hcFBpbiA/IHBpbkNvbmZpZ09iai5zdGF0aWNNYXBQaW4gOiBudWxsO1xuXG4gICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzLnB1c2goXG4gICAgICAgIG5ldyBNYXBCb3hNYXJrZXJDb25maWcoe1xuICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICBsYXRpdHVkZTogbWFya2VyLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBtYXJrZXIubG9uZ2l0dWRlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB3cmFwcGVyOiB3cmFwcGVyLFxuICAgICAgICAgIGxhYmVsOiBtYXJrZXIubGFiZWwsXG4gICAgICAgICAgc3RhdGljTWFwUGluOiBzdGF0aWNNYXBQaW5cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWFwYm94TWFwTWFya2VyQ29uZmlncztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTWFwQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuaW1wb3J0IEdvb2dsZU1hcFByb3ZpZGVyIGZyb20gJy4vcHJvdmlkZXJzL2dvb2dsZW1hcHByb3ZpZGVyJztcbmltcG9ydCBNYXBCb3hNYXBQcm92aWRlciBmcm9tICcuL3Byb3ZpZGVycy9tYXBib3htYXBwcm92aWRlcic7XG5cbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG5jb25zdCBQcm92aWRlclR5cGVzID0ge1xuICAnZ29vZ2xlJzogR29vZ2xlTWFwUHJvdmlkZXIsXG4gICdtYXBib3gnOiBNYXBCb3hNYXBQcm92aWRlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSwgc3lzdGVtT3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cywgc3lzdGVtT3B0cyk7XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIHRoaXMgY29tcG9uZW50IHRvIGxpc3RlbiB0byB0aGUgc3RvcmFnZSBiYXNlZCBvbiB0aGlzIGtleVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWxpYXNlZCB1c2VkIHRvIGRldGVybWluZSB0aGUgdHlwZSBvZiBtYXAgcHJvdmlkZXIgdG8gdXNlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9tYXBQcm92aWRlciA9IG9wdHMubWFwUHJvdmlkZXI7XG4gICAgaWYgKCF0aGlzLl9tYXBQcm92aWRlciB8fCAhKHRoaXMuX21hcFByb3ZpZGVyLnRvTG93ZXJDYXNlKCkgaW4gUHJvdmlkZXJUeXBlcykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWFwQ29tcG9uZW50OiBJbnZhbGlkIE1hcCBQcm92aWRlcjsgbXVzdCBiZSBgZ29vZ2xlYCBvciBgbWFwQm94YCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIGFuIGluc3RhbmNlIG9mIHRoZSB7TWFwUHJvdmlkZXJ9IHRoYXQncyBjb25zdHJ1Y3RlZFxuICAgICAqIEB0eXBlIHtNYXBQcm92aWRlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9tYXAgPSBudWxsO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ01hcCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvbWFwJztcbiAgfVxuXG4gIC8vIFRPRE8oYmlsbHkpIE1ha2UgUHJvdmlkZXJUeXBlcyBhIGZhY3RvcnkgY2xhc3NcbiAgZ2V0UHJvdmlkZXJJbnN0YW5jZSAodHlwZSkge1xuICAgIHJldHVybiBuZXcgUHJvdmlkZXJUeXBlc1t0eXBlLnRvTG93ZXJDYXNlKCldKHRoaXMuX2NvbmZpZyk7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgdGhpcy5fbWFwID0gdGhpcy5nZXRQcm92aWRlckluc3RhbmNlKHRoaXMuX21hcFByb3ZpZGVyKTtcbiAgICB0aGlzLl9tYXAubG9hZEpTKCk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICB0aGlzLl9tYXAub25Mb2FkZWQoKCkgPT4ge1xuICAgICAgdGhpcy5fbWFwLmluaXQodGhpcy5fY29udGFpbmVyLCB0aGlzLmdldFN0YXRlKCdtYXAnKSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSwgdmFsKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKGRhdGEsIHZhbCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlc3VsdHNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL2xvY2F0aW9ucmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Blb3BsZXJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBNYXBDb21wb25lbnQgZnJvbSAnLi4vbWFwL21hcGNvbXBvbmVudCc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3NlYXJjaHN0YXRlcyc7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuXG5jb25zdCBSZXN1bHRUeXBlID0ge1xuICBFVkVOVDogJ2V2ZW50JyxcbiAgTE9DQVRJT046ICdsb2NhdGlvbicsXG4gIFBFT1BMRTogJ3Blb3BsZSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdHNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogdmVydGljYWxDb25maWdJZCB1c2VkIGZvciBhbmFseXRpY3MgYW5kIHBhc3NlZCB0byBjaGlsZHJlblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbENvbmZpZ0lkID0gY29uZmlnLnZlcnRpY2FsQ29uZmlnSWQ7XG5cbiAgICAvKipcbiAgICAgKiBpc1VuaXZlcnNhbCBpcyBzZXQgdG8gdHJ1ZSBpZiB0aGlzIGNvbXBvbmVudCBpcyBhZGRlZCBieSB0aGUgVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faXNVbml2ZXJzYWwgPSBjb25maWcuaXNVbml2ZXJzYWwgfHwgZmFsc2U7XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUztcbiAgICB0aGlzLl9pdGVtQ29uZmlnID0ge1xuICAgICAgZ2xvYmFsOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH0sXG4gICAgICBbRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlXToge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9LFxuICAgICAgW0xvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZV06IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIFtQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlXToge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChjb25maWcucmVuZGVySXRlbSA9PT0gdW5kZWZpbmVkICYmIGNvbmZpZy5fcGFyZW50T3B0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25maWcucmVuZGVySXRlbSA9IGNvbmZpZy5fcGFyZW50T3B0cy5yZW5kZXJJdGVtO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuaXRlbVRlbXBsYXRlID09PSB1bmRlZmluZWQgJiYgY29uZmlnLl9wYXJlbnRPcHRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbmZpZy5pdGVtVGVtcGxhdGUgPSBjb25maWcuX3BhcmVudE9wdHMuaXRlbVRlbXBsYXRlO1xuICAgIH1cblxuICAgIGlmIChjb25maWcubGltaXQpIHtcbiAgICAgIGNvbnN0IGxpbWl0ID0gY29uZmlnLmxpbWl0O1xuICAgICAgaWYgKHR5cGVvZiBsaW1pdCAhPT0gJ251bWJlcicgfHwgbGltaXQgPCAxIHx8IGxpbWl0ID4gNTApIHtcbiAgICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcignU2VhcmNoIExpbWl0IG11c3QgYmUgYmV0d2VlbiAxIGFuZCA1MCcsICdWZXJ0aWNhbFJlc3VsdHMnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29yZS5zZXRTZWFyY2hMaW1pdChsaW1pdCk7XG4gICAgfVxuXG4gICAgdGhpcy5jb25maWd1cmVJdGVtKHtcbiAgICAgIHJlbmRlcjogY29uZmlnLnJlbmRlckl0ZW0sXG4gICAgICB0ZW1wbGF0ZTogY29uZmlnLml0ZW1UZW1wbGF0ZVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHVybCB0byB0aGUgdW5pdmVyc2FsIHBhZ2UgZm9yIHRoZSBubyByZXN1bHRzIHBhZ2UgdG8gbGluayBiYWNrIHRvIHdpdGggY3VycmVudCBxdWVyeVxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLl91bml2ZXJzYWxVcmwgPSBjb25maWcudW5pdmVyc2FsVXJsO1xuICB9XG5cbiAgbW91bnQgKCkge1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmdldFN0YXRlKCkpLmxlbmd0aCA+IDApIHtcbiAgICAgIHN1cGVyLm1vdW50KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGR1cGxpY2F0ZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhLCB2YWwpIHtcbiAgICBjb25zdCByZXN1bHRzID0gZGF0YS5yZXN1bHRzIHx8IFtdO1xuICAgIGNvbnN0IHNlYXJjaFN0YXRlID0gZGF0YS5zZWFyY2hTdGF0ZSB8fCBTZWFyY2hTdGF0ZXMuUFJFX1NFQVJDSDtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7IHJlc3VsdHM6IFtdIH0sIGRhdGEsIHtcbiAgICAgIGlzUHJlU2VhcmNoOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlBSRV9TRUFSQ0gsXG4gICAgICBpc1NlYXJjaExvYWRpbmc6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0xPQURJTkcsXG4gICAgICBpc1NlYXJjaENvbXBsZXRlOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURSxcbiAgICAgIGluY2x1ZGVNYXA6IHRoaXMuX2NvbmZpZy5pbmNsdWRlTWFwLFxuICAgICAgbWFwQ29uZmlnOiB0aGlzLl9jb25maWcubWFwQ29uZmlnLFxuICAgICAgZXZlbnRPcHRpb25zOiB0aGlzLmV2ZW50T3B0aW9ucygpLFxuICAgICAgdW5pdmVyc2FsVXJsOiB0aGlzLl91bml2ZXJzYWxVcmwgPyB0aGlzLl91bml2ZXJzYWxVcmwgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoIDogJycsXG4gICAgICBzaG93Tm9SZXN1bHRzOiByZXN1bHRzLmxlbmd0aCA9PT0gMCxcbiAgICAgIHF1ZXJ5OiB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSlcbiAgICB9KSwgdmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoZWxwZXIgdG8gY29uc3RydWN0IHRoZSBldmVudE9wdGlvbnMgb2JqZWN0IGZvciB0aGUgdmlldyBhbGwgbGlua1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZXZlbnRPcHRpb25zICgpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdmVydGljYWxDb25maWdJZDogdGhpcy5fdmVydGljYWxDb25maWdJZFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1ZlcnRpY2FsUmVzdWx0cyc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvcmVzdWx0cyc7XG4gIH1cblxuICBjb25maWd1cmVJdGVtIChjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX2l0ZW1Db25maWcuZ2xvYmFsLnJlbmRlciA9IGNvbmZpZy5yZW5kZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb25maWcucmVuZGVyKSB7XG4gICAgICAgIHRoaXMuc2V0SXRlbVJlbmRlcihrZXksIGNvbmZpZy5yZW5kZXJba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9pdGVtQ29uZmlnLmdsb2JhbC50ZW1wbGF0ZSA9IGNvbmZpZy50ZW1wbGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbmZpZy50ZW1wbGF0ZSkge1xuICAgICAgICB0aGlzLnNldEl0ZW1UZW1wbGF0ZShrZXksIGNvbmZpZy50ZW1wbGF0ZVtrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRJdGVtVGVtcGxhdGUgKHR5cGUsIHRlbXBsYXRlKSB7XG4gICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KHR5cGUpO1xuICAgIHRoaXMuX2l0ZW1Db25maWdbY2xhenoudHlwZV0udGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHNldEl0ZW1SZW5kZXIgKHR5cGUsIHJlbmRlcikge1xuICAgIGxldCBjbGF6eiA9IHRoaXMuZ2V0SXRlbUNvbXBvbmVudCh0eXBlKTtcbiAgICB0aGlzLl9pdGVtQ29uZmlnW2NsYXp6LnR5cGVdLnJlbmRlciA9IHJlbmRlcjtcbiAgfVxuXG4gIGdldEl0ZW1Db21wb25lbnQgKHR5cGUpIHtcbiAgICBsZXQgY29tcCA9IFJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSZXN1bHRUeXBlLkVWRU5UOlxuICAgICAgICBjb21wID0gRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJlc3VsdFR5cGUuTE9DQVRJT046XG4gICAgICAgIGNvbXAgPSBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUmVzdWx0VHlwZS5QRU9QTEU6XG4gICAgICAgIGNvbXAgPSBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXA7XG4gIH1cblxuICBhZGRDaGlsZCAoZGF0YSwgdHlwZSwgb3B0cykge1xuICAgIC8vIFRPRE8oYmlsbHkpIFJlZmFjdG9yIHRoZSB3YXkgY29uZmlndXJhdGlvbiBhbmQgZGF0YSBmbG93c1xuICAgIC8vIHRocm91Z2ggdG9wIGxldmVsIGNvbXBvbmVudHMgdG8gY2hpbGQgY29tcG9uZW50cy5cbiAgICBpZiAodHlwZSA9PT0gUmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZSkge1xuICAgICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KGRhdGEudHlwZSk7XG4gICAgICBpZiAoY2xhenopIHtcbiAgICAgICAgdHlwZSA9IGNsYXp6LnR5cGU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBNYXBDb21wb25lbnQudHlwZSkge1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgbWFwOiBkYXRhXG4gICAgICB9O1xuICAgICAgY29uc3QgbmV3T3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZy5tYXBDb25maWcsIG9wdHMpO1xuICAgICAgcmV0dXJuIHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIG5ld09wdHMpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHRoZSBwcm9wZXIgaXRlbSByZW5kZXJzIHRvIHRoZSB0aGUgY29tcG9uZW50c1xuICAgIC8vIGhhdmUganVzdCBiZWVuIGNvbnN0cnVjdGVkLiBQcmlvcml0aXplIGdsb2JhbCBvdmVyIGluZGl2aWR1YWwgaXRlbXMuXG4gICAgbGV0IGNvbXAgPSBzdXBlci5hZGRDaGlsZChkYXRhLCB0eXBlLCBPYmplY3QuYXNzaWduKG9wdHMsIHtcbiAgICAgIHZlcnRpY2FsQ29uZmlnSWQ6IHRoaXMuX3ZlcnRpY2FsQ29uZmlnSWQsXG4gICAgICBpc1VuaXZlcnNhbDogdGhpcy5faXNVbml2ZXJzYWxcbiAgICB9KSk7XG4gICAgbGV0IGdsb2JhbENvbmZpZyA9IHRoaXMuX2l0ZW1Db25maWcuZ2xvYmFsO1xuICAgIGxldCBpdGVtQ29uZmlnID0gdGhpcy5faXRlbUNvbmZpZ1tjb21wLnR5cGVdO1xuICAgIGxldCBoYXNHbG9iYWxSZW5kZXIgPSB0eXBlb2YgZ2xvYmFsQ29uZmlnLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJztcbiAgICBsZXQgaGFzR2xvYmFsVGVtcGxhdGUgPSB0eXBlb2YgZ2xvYmFsQ29uZmlnLnRlbXBsYXRlID09PSAnc3RyaW5nJztcblxuICAgIGlmIChoYXNHbG9iYWxSZW5kZXIpIHtcbiAgICAgIGNvbXAuc2V0UmVuZGVyKGdsb2JhbENvbmZpZy5yZW5kZXIpO1xuICAgIH1cblxuICAgIGlmIChoYXNHbG9iYWxUZW1wbGF0ZSkge1xuICAgICAgY29tcC5zZXRUZW1wbGF0ZShnbG9iYWxDb25maWcudGVtcGxhdGUpO1xuICAgIH1cblxuICAgIGlmICghaXRlbUNvbmZpZykge1xuICAgICAgcmV0dXJuIGNvbXA7XG4gICAgfVxuXG4gICAgaWYgKCFoYXNHbG9iYWxSZW5kZXIgJiYgaXRlbUNvbmZpZy5yZW5kZXIpIHtcbiAgICAgIGNvbXAuc2V0UmVuZGVyKGl0ZW1Db25maWcucmVuZGVyKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB0ZW1wbGF0ZSBzcGVjaWZpYyBzaXR1YXRpb25cbiAgICBpZiAoIWhhc0dsb2JhbFRlbXBsYXRlICYmIGl0ZW1Db25maWcudGVtcGxhdGUpIHtcbiAgICAgIGNvbXAuc2V0VGVtcGxhdGUoaXRlbUNvbmZpZy50ZW1wbGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBjb21wO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50ICovXG5pbXBvcnQgUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNjb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBBbmFseXRpY3NFdmVudCBmcm9tICcuLi8uLi8uLi9jb3JlL2FuYWx5dGljcy9hbmFseXRpY3NldmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY29yZGlvblJlc3VsdHNDb21wb25lbnQgZXh0ZW5kcyBSZXN1bHRzQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZywgc3lzdGVtQ29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIGJhc2Ugc2VsZWN0b3IgdG8gdXNlIHdoZW4gZmluZGluZyBET00gdGFyZ2V0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fc2VsZWN0b3JCYXNlID0gY29uZmlnLnNlbGVjdG9yQmFzZSB8fCAnLmpzLXl4dC1BY2NvcmRpb25SZXN1bHQnO1xuXG4gICAgLyoqXG4gICAgICogY29sbGFwc2VkIHN0YXRlIGNsYXNzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmNvbGxhcHNlZENsYXNzID0gY29uZmlnLmNvbGxhcHNlZENsYXNzIHx8ICdpcy1jb2xsYXBzZWQnO1xuXG4gICAgLyoqXG4gICAgICogdmVydGljYWwgY29uZmlnIGlkIGlzIHJlcXVpcmVkIGZvciBhbmFseXRpY3NcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy52ZXJ0aWNhbENvbmZpZ0lkID0gY29uZmlnLnZlcnRpY2FsQ29uZmlnSWQgfHwgY29uZmlnLl9wYXJlbnRPcHRzLnZlcnRpY2FsQ29uZmlnSWQgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiB0aGUgY29tcG9uZW50IHR5cGVcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnQWNjb3JkaW9uUmVzdWx0cyc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvcmVzdWx0c2FjY29yZGlvbic7XG4gIH1cblxuICAvKipcbiAgICogb3ZlcnJpZGVzIG9uTW91bnQgdG8gYWRkIGJpbmRpbmdzIHRvIGNoYW5nZSB0aGUgaGVpZ2h0IG9uIGNsaWNrXG4gICAqIEByZXR1cm5zIHtBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50fVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIG9uTW91bnQgKCkge1xuICAgIHN1cGVyLm9uTW91bnQoKTtcblxuICAgIGNvbnN0IGFjY29yZGlvbkVscyA9IERPTS5xdWVyeUFsbCh0aGlzLl9jb250YWluZXIsIHRoaXMuX3NlbGVjdG9yQmFzZSk7XG4gICAgYWNjb3JkaW9uRWxzLmZvckVhY2goKGFjY29yZGlvbkVsKSA9PiB7XG4gICAgICBjb25zdCB0b2dnbGVFbCA9IERPTS5xdWVyeShhY2NvcmRpb25FbCwgdGhpcy50b2dnbGVTZWxlY3RvcigpKTtcbiAgICAgIGNvbnN0IGNvbnRlbnRFbCA9IERPTS5xdWVyeShhY2NvcmRpb25FbCwgdGhpcy5ib2R5U2VsZWN0b3IoKSk7XG4gICAgICB0aGlzLmNoYW5nZUhlaWdodChjb250ZW50RWwsIGFjY29yZGlvbkVsKTtcbiAgICAgIHRvZ2dsZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrKGFjY29yZGlvbkVsLCB0b2dnbGVFbCwgY29udGVudEVsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBtb2RpZmllcjogdGhpcy52ZXJ0aWNhbENvbmZpZ0lkXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNsaWNrIGhhbmRsZXIgZm9yIHRoZSBhY2NvcmRpb24gdG9nZ2xlIGJ1dHRvblxuICAgKiBAcGFyYW0gd3JhcHBlckVsIHtIVE1MRWxlbWVudH0gdGhlIHRvZ2dsZSBjb250YWluZXJcbiAgICogQHBhcmFtIHRvZ2dsZUVsIHtIVE1MRWxlbWVudH0gdGhlIGJ1dHRvblxuICAgKiBAcGFyYW0gY29udGVudEVsIHtIVE1MRWxlbWVudH0gdGhlIHRvZ2dsZSB0YXJnZXRcbiAgICovXG4gIGhhbmRsZUNsaWNrICh3cmFwcGVyRWwsIHRvZ2dsZUVsLCBjb250ZW50RWwpIHtcbiAgICBjb25zdCBldmVudCA9IG5ldyBBbmFseXRpY3NFdmVudCh0aGlzLmlzQ29sbGFwc2VkKHdyYXBwZXJFbCkgPyAnUk9XX0VYUEFORCcgOiAnUk9XX0NPTExBUFNFJylcbiAgICAgIC5hZGRPcHRpb25zKHtcbiAgICAgICAgdmVydGljYWxDb25maWdJZDogdGhpcy52ZXJ0aWNhbENvbmZpZ0lkLFxuICAgICAgICBlbnRpdHlJZDogdG9nZ2xlRWwuZGF0YXNldC5lbnRpdHlJZFxuICAgICAgfSk7XG4gICAgd3JhcHBlckVsLmNsYXNzTGlzdC50b2dnbGUodGhpcy5jb2xsYXBzZWRDbGFzcyk7XG4gICAgdGhpcy5jaGFuZ2VIZWlnaHQoY29udGVudEVsLCB3cmFwcGVyRWwpO1xuICAgIHRvZ2dsZUVsLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRoaXMuaXNDb2xsYXBzZWQod3JhcHBlckVsKSA/ICdmYWxzZScgOiAndHJ1ZScpO1xuICAgIHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIucmVwb3J0KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgaXMgY3VycmVudGx5IGNvbGxhcHNlZFxuICAgKiBAcGFyYW0gd3JhcHBlckVsIHtIVE1MRWxlbWVudH0gdGhlIHRvZ2dsZSBjb250YWluZXJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc0NvbGxhcHNlZCAod3JhcHBlckVsKSB7XG4gICAgaWYgKCF3cmFwcGVyRWwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JhcHBlckVsLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNvbGxhcHNlZENsYXNzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0b2dnbGVzIHRoZSBoZWlnaHQgYmV0d2VlbiAwIGFuZCB0aGUgY29udGVudCBoZWlnaHQgZm9yIHNtb290aCBhbmltYXRpb25cbiAgICogQHBhcmFtIHRhcmdldEVsIHtIVE1MRWxlbWVudH1cbiAgICogQHBhcmFtIHdyYXBwZXJFbCB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBjaGFuZ2VIZWlnaHQgKHRhcmdldEVsLCB3cmFwcGVyRWwpIHtcbiAgICB0YXJnZXRFbC5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmlzQ29sbGFwc2VkKHdyYXBwZXJFbCkgPyAwIDogdGFyZ2V0RWwuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBoZWxwZXIgZm9yIGNvbXBvc2luZyBjaGlsZCBlbGVtZW50IHNlbGVjdG9yc1xuICAgKiBAcGFyYW0gY2hpbGQge3N0cmluZ31cbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGJ1aWxkU2VsZWN0b3IgKGNoaWxkKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuX3NlbGVjdG9yQmFzZX0ke2NoaWxkfWA7XG4gIH1cblxuICAvKipcbiAgICogaGVscGVyIGZvciB0aGUgdG9nZ2xlIGJ1dHRvbiBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgdG9nZ2xlU2VsZWN0b3IgKCkge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkU2VsZWN0b3IoJy10b2dnbGUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoZWxwZXIgZm9yIHRoZSBjb250ZW50IGVsZW1lbnQgc2VsZWN0b3JcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGJvZHlTZWxlY3RvciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRTZWxlY3RvcignLWJvZHknKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3NlYXJjaHN0YXRlcyc7XG5pbXBvcnQgQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL2FjY29yZGlvbnJlc3VsdHNjb21wb25lbnQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSwgc3lzdGVtT3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cywgc3lzdGVtT3B0cyk7XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFM7XG4gICAgdGhpcy5fbGltaXQgPSBvcHRzLmxpbWl0IHx8IDEwO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1VuaXZlcnNhbFJlc3VsdHMnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHMnO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpbml0IChvcHRzKSB7XG4gICAgc3VwZXIuaW5pdChvcHRzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhLCB2YWwpIHtcbiAgICBjb25zdCBzZWN0aW9ucyA9IGRhdGEuc2VjdGlvbnMgfHwgW107XG4gICAgY29uc3Qgc2VhcmNoU3RhdGUgPSBkYXRhLnNlYXJjaFN0YXRlIHx8IFNlYXJjaFN0YXRlcy5QUkVfU0VBUkNIO1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHsgc2VjdGlvbnM6IFtdIH0sIGRhdGEsIHtcbiAgICAgIGlzUHJlU2VhcmNoOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlBSRV9TRUFSQ0gsXG4gICAgICBpc1NlYXJjaExvYWRpbmc6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0xPQURJTkcsXG4gICAgICBpc1NlYXJjaENvbXBsZXRlOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURSxcbiAgICAgIHNob3dOb1Jlc3VsdHM6IHNlY3Rpb25zLmxlbmd0aCA9PT0gMCxcbiAgICAgIHF1ZXJ5OiB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSlcbiAgICB9KSwgdmFsKTtcbiAgfVxuXG4gIGFkZENoaWxkIChkYXRhID0ge30sIHR5cGUsIG9wdHMpIHtcbiAgICBjb25zdCBjaGlsZE9wdHMgPSB7IC4uLm9wdHMsIC4uLnRoaXMuZ2V0Q2hpbGRDb25maWcoW2RhdGFbJ3ZlcnRpY2FsQ29uZmlnSWQnXV0pIH07XG4gICAgaWYgKGNoaWxkT3B0cy51c2VBY2NvcmRpb24gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBzdXBlci5hZGRDaGlsZChkYXRhLCBBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50LnR5cGUsIGNoaWxkT3B0cyk7XG4gICAgfVxuICAgIHJldHVybiBzdXBlci5hZGRDaGlsZChkYXRhLCB0eXBlLCBjaGlsZE9wdHMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb25maWcgKGNvbmZpZ0lkKSB7XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZyA9IHtcbiAgICAgIHZlcnRpY2FsQ29uZmlnSWQ6IGNvbmZpZ0lkLFxuICAgICAgaXNVbml2ZXJzYWw6IHRydWVcbiAgICB9O1xuICAgIGxldCBjb25maWcgPSB0aGlzLl9jb25maWcuY29uZmlnO1xuICAgIGlmIChjb25maWcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRDb25maWc7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGRlZmF1bHRDb25maWcsIHRoaXMuX2NvbmZpZ1snY29uZmlnJ11bY29uZmlnSWRdIHx8IHRoaXMuX2NvbmZpZ1snY29uZmlnJ10pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFF1ZXN0aW9uU3VibWlzc2lvbiBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9xdWVzdGlvbnN1Ym1pc3Npb24nO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBBbmFseXRpY3NFdmVudCBmcm9tICcuLi8uLi8uLi9jb3JlL2FuYWx5dGljcy9hbmFseXRpY3NldmVudCc7XG5cbi8qKlxuICogQ29uZmlndXJhYmxlIG9wdGlvbnMgZm9yIHRoZSBjb21wb25lbnRcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmNvbnN0IERFRkFVTFRfQ09ORklHID0ge1xuICAvKipcbiAgICogVGhlIGVudGl0eSBpZGVudGlmaWVyIHRoYXQgdGhlIHF1ZXN0aW9uIGlzIGFzc29jaWF0ZWQgd2l0aC5cbiAgICogVGhpcyBpcyB0eXBpY2FsbHkgYW4gb3JnYW5pemF0aW9uIG9iamVjdFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgJ2VudGl0eUlkJzogbnVsbCxcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgbGFuZ3VhZ2Ugb2YgdGhlIHF1ZXN0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICAnbGFuZ3VhZ2UnOiAnRU4nLFxuXG4gIC8qKlxuICAgKiBUaGUgbWFpbiBDU1Mgc2VsZWN0b3IgdXNlZCB0byByZWZlcmVuY2UgdGhlIGZvcm0gZm9yIHRoZSBjb21wb25lbnQuXG4gICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgKi9cbiAgJ2Zvcm1TZWxlY3Rvcic6ICdmb3JtJyxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgbGFiZWwgdG8gdXNlIGZvciB0aGUgZS1tYWlsIGFkZHJlc3MgaW5wdXRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICdlbWFpbExhYmVsJzogJ0VtYWlsIEFkZHJlc3M6JyxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgbGFiZWwgdG8gdXNlIGZvciB0aGUgbmFtZSBpbnB1dFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgJ25hbWVMYWJlbCc6ICdOYW1lOicsXG5cbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIGxhYmVsIHRvIHVzZSBmb3IgdGhlIHF1ZXN0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICAncXVlc3Rpb25MYWJlbCc6ICdXaGF0IGlzIHlvdXIgcXVlc3Rpb24/JyxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgbGFiZWwgdG8gdXNlIGZvciB0aGUgUHJpdmFjeSBQb2xpY3lcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICdwcml2YWN5UG9saWN5TGFiZWwnOiAnSSBhZ3JlZSB0byBvdXIgUHJpdmFjeSBQb2xpY3k6JyxcblxuICAvKipcbiAgICogVGhlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIFN1Ym1pdCBidXR0b25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICdidXR0b25MYWJlbCc6ICdTdWJtaXQnXG59O1xuXG4vKipcbiAqIFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCBpcyBhIGNvbXBvbmVudCB0aGF0IGNyZWF0ZXMgYSBmb3JtXG4gKiB0aGF0cyBkaXNwbGF5ZWQgd2hlbmV2ZXIgYSBxdWVyeSBpcyBydW4uIEl0IGVuYWJsZXMgdGhlIHVzZXJcbiAqIHRvIHN1Ym1pdCBxdWVzdGlvbnMgdGhhdCB0aGV5IGNhbnQgZmluZCB0aGUgYW5zd2VyIGZvci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfQ09ORklHLCBjb25maWcpLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogUmVmZXJlbmNlIHRvIHRoZSBzdG9yYWdlIG1vZGVsXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuUVVFU1RJT05fU1VCTUlTU0lPTjtcblxuICAgIC8qKlxuICAgICAqIE5PVEUoYmlsbHkpIGlmIHRoaXMgaXMgYSBwYXR0ZXJuIHdlIHdhbnQgdG8gZm9sbG93IGZvciBjb25maWd1cmF0aW9uXG4gICAgICogd2Ugc2hvdWxkIGJha2UgaXQgaW50byB0aGUgY29yZSBjbGFzcy5cbiAgICAgKi9cbiAgICB0aGlzLnZhbGlkYXRlQ29uZmlnKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3F1ZXN0aW9ucy9xdWVzdGlvbnN1Ym1pc3Npb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwdWJsaWMgaW50ZXJmYWNlIGFsaWFzIGZvciB0aGUgY29tcG9uZW50XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1FBU3VibWlzc2lvbic7XG4gIH1cblxuICAvKipcbiAgICogdmFsaWRhdGlvbkNvbmZpZyBjb250YWlucyBhIGJ1bmNoIG9mIHJ1bGVzXG4gICAqIHRoYXQgYXJlIHVzZWQgdG8gdmFsaWRhdGUgYWdpbnN0IGNvbmZpZ3VyYXRpb24gcHJvdmlkZWQgYnkgdGhlIHVzZXJcbiAgICovXG4gIHZhbGlkYXRlQ29uZmlnICgpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmVudGl0eUlkID09PSBudWxsIHx8XG4gICAgICAgIHR5cGVvZiB0aGlzLl9jb25maWcuZW50aXR5SWQgIT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICAnYGVudGl0eUlkYCBpcyBhIHJlcXVpcmVkIGNvbmZpZ3VyYXRpb24gb3B0aW9uIGZvciBRdWVzdGlvbiBTdWJtaXNzaW9uJyxcbiAgICAgICAgJ1F1ZXN0aW9uU3VibWlzc2lvbicpO1xuICAgIH1cbiAgfVxuXG4gIGJlZm9yZU1vdW50ICgpIHtcbiAgICAvLyBBdm9pZCBtb3VudGluZyB0aGUgY29tcG9uZW50IGlmIHRoZXJlcyBubyBkYXRhXG4gICAgLy8gTm90ZSwgMSBiZWNhdXNlIGBjb25maWdgIGlzIGFsd2F5cyBwYXJ0IG9mIHRoZSBzdGF0ZS5cbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5nZXRTdGF0ZSgpKS5sZW5ndGggPiAxO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgbGV0IGZvcm1FbCA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2NvbmZpZy5mb3JtU2VsZWN0b3IpO1xuICAgIGlmIChmb3JtRWwgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmJpbmRBbmFseXRpY3MoZm9ybUVsKTtcbiAgICB0aGlzLmJpbmRGb3JtU3VibWl0KGZvcm1FbCk7XG4gIH1cblxuICAvKipcbiAgICogYmluZEFuYWx5dGljcyB3aWxsIHdpcmUgdXAgRE9NIGV2ZW50IGhvb2tzIHRvIHNlcnZlcnNpZGUgcmVwb3J0aW5nXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1FbFxuICAgKi9cbiAgYmluZEFuYWx5dGljcyAoZm9ybUVsKSB7XG4gICAgaWYgKHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBxdWVzdGlvblRleHRFbCA9IERPTS5xdWVyeShmb3JtRWwsICcuanMtcXVlc3Rpb24tdGV4dCcpO1xuICAgIERPTS5vbihxdWVzdGlvblRleHRFbCwgJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlci5yZXBvcnQobmV3IEFuYWx5dGljc0V2ZW50KCdRVUVTVElPTl9GT0NVUycpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBiaW5kRm9ybVN1Ym1pdCBoYW5kbGVzIHN1Ym1pdHRpbmcgdGhlIHF1ZXN0aW9uIHRvIHRoZSBzZXJ2ZXIuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1FbFxuICAgKi9cbiAgYmluZEZvcm1TdWJtaXQgKGZvcm1FbCkge1xuICAgIERPTS5vbihmb3JtRWwsICdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gVE9ETyhiaWxseSkgd2UgcHJvYmFibHkgd2FudCB0byBkaXNhYmxlIHRoZSBmb3JtIGZyb20gYmVpbmcgc3VibWl0dGVkIHR3aWNlXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IHRoaXMucGFyc2UoZm9ybUVsKTtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMudmFsaWRhdGVSZXF1aXJlZChmb3JtRGF0YSk7XG4gICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKG5ldyBRdWVzdGlvblN1Ym1pc3Npb24oZm9ybURhdGEsIGVycm9ycykpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvcmUuc3VibWl0UXVlc3Rpb24oe1xuICAgICAgICAnZW50aXR5SWQnOiB0aGlzLl9jb25maWcuZW50aXR5SWQsXG4gICAgICAgICdxdWVzdGlvbkxhbmd1YWdlJzogdGhpcy5fY29uZmlnLmxhbmd1YWdlLFxuICAgICAgICAnc2l0ZSc6ICdGSVJTVF9QQVJUWScsXG4gICAgICAgICduYW1lJzogZm9ybURhdGEubmFtZSxcbiAgICAgICAgJ2VtYWlsJzogZm9ybURhdGEuZW1haWwsXG4gICAgICAgICdxdWVzdGlvblRleHQnOiBmb3JtRGF0YS5xdWVzdGlvblRleHQsXG4gICAgICAgICdxdWVzdGlvbkRlc2NyaXB0aW9uJzogZm9ybURhdGEucXVlc3Rpb25EZXNjcmlwdGlvblxuICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgbmV3IFF1ZXN0aW9uU3VibWlzc2lvbihmb3JtRGF0YSwge1xuICAgICAgICAgICAgICAnbmV0d29yayc6ICdUaGVyZSB3YXMgYSBwcm9ibGVtIHN1Ym1pdHRpbmcgeW91ciBxdWVzdGlvbi4gUGxlYXNlIHRyeSBhZ2Fpbi4nXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRha2VzIHRoZSBmb3JtLCBhbmQgYnVpbGRzIGEgb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgaW5wdXQgbmFtZXNcbiAgICogYW5kIHRleHQgZmllbGRzLlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtRWxcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHBhcnNlIChmb3JtRWwpIHtcbiAgICBjb25zdCBpbnB1dEZpZWxkcyA9IERPTS5xdWVyeUFsbChmb3JtRWwsICcuanMtcXVlc3Rpb24tZmllbGQnKTtcbiAgICBpZiAoIWlucHV0RmllbGRzIHx8IGlucHV0RmllbGRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGxldCBvYmogPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0RmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdmFsID0gaW5wdXRGaWVsZHNbaV0udmFsdWU7XG4gICAgICBpZiAoaW5wdXRGaWVsZHNbaV0udHlwZSA9PT0gJ2NoZWNrYm94JyAmJiB2YWwgPT09ICd0cnVlJykge1xuICAgICAgICB2YWwgPSB0cnVlO1xuICAgICAgfVxuICAgICAgb2JqW2lucHV0RmllbGRzW2ldLm5hbWVdID0gdmFsO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIHRoZSByZXF1aXJlZCBmaWVsZHMgKG9yIHJ1bGVzKSBmb3IgdGhlIGZvcm0gZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gZm9ybURhdGFcbiAgICogQHJldHVybnMge09iamVjdHxib29sZWFufSBlcnJvcnMgb2JqZWN0IGlmIGFueSBlcnJvcnMgZm91bmRcbiAgICovXG4gIHZhbGlkYXRlUmVxdWlyZWQgKGZvcm1EYXRhKSB7XG4gICAgbGV0IGVycm9ycyA9IHt9O1xuICAgIGlmICghZm9ybURhdGEuZW1haWwgfHwgdHlwZW9mIGZvcm1EYXRhLmVtYWlsICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3JzWydlbWFpbCddID0gJ01pc3NpbmcgZW1haWwgYWRkcmVzcyEnO1xuICAgIH1cblxuICAgIGlmICghZm9ybURhdGEucHJpdmFjeVBvbGljeSB8fCBmb3JtRGF0YS5wcml2YWN5UG9saWN5ICE9PSB0cnVlKSB7XG4gICAgICBlcnJvcnNbJ3ByaXZhY3lQb2xpY3knXSA9ICdBcHByb3Zpbmcgb3VyIHByaXZhY3kgcG9saWN5IHRlcm1zIGlzIHJlcXVpcmVkISc7XG4gICAgfVxuXG4gICAgaWYgKCFmb3JtRGF0YS5xdWVzdGlvblRleHQgfHwgdHlwZW9mIGZvcm1EYXRhLnF1ZXN0aW9uVGV4dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9yc1sncXVlc3Rpb25UZXh0J10gPSAnUXVlc3Rpb24gdGV4dCBpcyByZXF1aXJlZCEnO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA+IDAgPyBlcnJvcnMgOiBudWxsO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTVkdJY29uIHtcbiAgLyoqXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICogQHBhcmFtIGNvbmZpZy5uYW1lXG4gICAqIEBwYXJhbSBjb25maWcucGF0aFxuICAgKiBAcGFyYW0gY29uZmlnLmNvbXBsZXhDb250ZW50c1xuICAgKiBAcGFyYW0gY29uZmlnLnZpZXdCb3hcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgLyoqXG4gICAgICogdGhlIG5hbWUgb2YgdGhlIGljb25cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSBjb25maWcubmFtZTtcbiAgICAvKipcbiAgICAgKiBhbiBzdmcgcGF0aCBkZWZpbml0aW9uXG4gICAgICovXG4gICAgdGhpcy5wYXRoID0gY29uZmlnLnBhdGg7XG4gICAgLyoqXG4gICAgICogaWYgbm90IHVzaW5nIGEgcGF0aCwgYSB0aGUgbWFya3VwIGZvciBhIGNvbXBsZXggU1ZHXG4gICAgICovXG4gICAgdGhpcy5jb21wbGV4Q29udGVudHMgPSBjb25maWcuY29tcGxleENvbnRlbnRzO1xuICAgIC8qKlxuICAgICAqIHRoZSB2aWV3IGJveCBkZWZpbml0aW9uLCBkZWZhdWx0cyB0byAyNHgyNFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy52aWV3Qm94ID0gY29uZmlnLnZpZXdCb3ggfHwgJzAgMCAyNCAyNCc7XG4gICAgLyoqXG4gICAgICogYWN0dWFsIGNvbnRlbnRzIHVzZWRcbiAgICAgKi9cbiAgICB0aGlzLmNvbnRlbnRzID0gdGhpcy5wYXRoRGVmaW5pdGlvbigpO1xuICB9XG5cbiAgcGF0aERlZmluaXRpb24gKCkge1xuICAgIGlmICh0aGlzLmNvbXBsZXhDb250ZW50cykge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGxleENvbnRlbnRzO1xuICAgIH1cblxuICAgIHJldHVybiBgPHBhdGggZD1cIiR7dGhpcy5wYXRofVwiPjwvcGF0aD5gO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIHN2ZyBtYXJrdXBcbiAgICovXG4gIG1hcmt1cCAoKSB7XG4gICAgcmV0dXJuIGA8c3ZnIHZpZXdCb3g9XCIke3RoaXMudmlld0JveH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JHt0aGlzLmNvbnRlbnRzfTwvc3ZnPmA7XG4gIH1cbn1cbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICd0aHVtYicsXG4gIHZpZXdCb3g6ICcwIDAgMjQgMjInLFxuICBwYXRoOiAnTTE1LjI3MyAxSDUuNDU1Yy0uOTA2IDAtMS42OC41NS0yLjAwOCAxLjM0MkwuMTUzIDEwLjA5N0EyLjE5IDIuMTkgMCAwMDAgMTAuOXYyLjJjMCAxLjIxLjk4MiAyLjIgMi4xODIgMi4yaDYuODgzTDguMDMgMjAuMzI3bC0uMDMzLjM1MmMwIC40NTEuMTg2Ljg2OS40OCAxLjE2Nkw5LjYzMyAyM2w3LjE3OC03LjI0OWEyLjE2IDIuMTYgMCAwMC42NDQtMS41NTF2LTExYzAtMS4yMS0uOTgyLTIuMi0yLjE4Mi0yLjJ6bTAgMTMuMmwtNC43MzUgNC43NzRMMTEuNzUgMTMuMUgyLjE4MnYtMi4ybDMuMjczLTcuN2g5LjgxOHYxMXpNMTkuNjM2IDFIMjR2MTMuMmgtNC4zNjRWMXonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdyZWNlaXB0JyxcbiAgcGF0aDogJ00xNC42MDYgOS41Yy0uNjcxLS41MTUtMS41OTEtLjgzMy0yLjYwNi0uODMzIDEuMDE1IDAgMS45MzUuMzE4IDIuNjA2LjgzM3ptLTcuOTg1IDBIMS42NTVBMS42NiAxLjY2IDAgMDEwIDcuODMzVjMuNjY3QzAgMi43NDcuNzQxIDIgMS42NTUgMmgyMC42OUExLjY2IDEuNjYgMCAwMTI0IDMuNjY3djQuMTY2QTEuNjYgMS42NiAwIDAxMjIuMzQ1IDkuNWgtNC45NjZWMjJINi42MjFWOS41aDIuNzczSDYuNjJ6bTEwLjc1OC0xLjY2N2g0Ljk2NlYzLjY2N0gxLjY1NXY0LjE2Nmg0Ljk2NnYtMi41aDEwLjc1OHYyLjV6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncGFudGhlb24nLFxuICBwYXRoOiAnTTkuOTQ3IDE2LjU5OGguMjUyVjkuNDEyaC0uMjUyYS40MzIuNDMyIDAgMDEtLjIzLS4wNjVjLS4wNy0uMDQzLS4xMDYtLjA5My0uMTA2LS4xNUw5LjE1IDcuODJ2LS4xNWMwLS4wNDQuMDI4LS4wOC4wODQtLjEwOWEuNjkxLjY5MSAwIDAxLjEwNS0uMDg2LjI1NC4yNTQgMCAwMS4xNDYtLjA0M0gxMy42Yy4wNTYgMCAuMTA0LjAxNS4xNDYuMDQzLjA0Mi4wMy4wOTEuMDU4LjE0Ny4wODZhLjI3MS4yNzEgMCAwMS4wNjMuMTA4Yy4wMTQuMDQzLjAwNy4wOTMtLjAyLjE1bC0uNDIgMS4zNzhhLjM3NC4zNzQgMCAwMS0uMTQ3LjE1LjM3LjM3IDAgMDEtLjE5LjA2NWgtLjI1MXY3LjE4NmguMjUyYS4zNy4zNyAwIDAxLjE4OS4wNjVjLjA3LjA0My4xMTkuMDkzLjE0Ny4xNWwuNDIgMS4zNzhjLjAyNy4wMjguMDM0LjA3MS4wMi4xMjlhLjI3NS4yNzUgMCAwMS0uMDYzLjEyOSAxLjM2NCAxLjM2NCAwIDAwLS4xNDcuMDg2LjI1NC4yNTQgMCAwMS0uMTQ2LjA0M0g5LjQ4NWEuMjU0LjI1NCAwIDAxLS4xNDYtLjA0My42OTEuNjkxIDAgMDEtLjEwNS0uMDg2Yy0uMDU2LS4wMjktLjA4NC0uMDcyLS4wODQtLjEzdi0uMTI4bC40NjEtMS4zNzdjMC0uMDU4LjAzNS0uMTA4LjEwNS0uMTUxYS40MzIuNDMyIDAgMDEuMjMxLS4wNjV6bTUuNzkyIDBoLjI1MlY5LjQxMmgtLjI1MmEuNDMyLjQzMiAwIDAxLS4yMy0uMDY1LjM3NC4zNzQgMCAwMS0uMTQ4LS4xNWwtLjQyLTEuMzc3Yy0uMDI3LS4wMjktLjAzNC0uMDcyLS4wMi0uMTNhLjI3NS4yNzUgMCAwMS4wNjMtLjEyOWMuMDU2LS4wMjguMTA1LS4wNTcuMTQ2LS4wODZhLjI1NC4yNTQgMCAwMS4xNDctLjA0M2g0LjExNGMuMDU1IDAgLjEwNC4wMTUuMTQ2LjA0M2EuNjkxLjY5MSAwIDAxLjEwNS4wODZjLjA1Ni4wMy4wODQuMDcyLjA4NC4xM3YuMTI5bC0uNDIgMS4zNzdhLjM3NC4zNzQgMCAwMS0uMTQ2LjE1LjQzMi40MzIgMCAwMS0uMjMxLjA2NWgtLjIxdjcuMTg2aC4yMWEuNDMuNDMgMCAwMS4yMy4wNjVjLjA3LjA0My4xMi4wOTMuMTQ4LjE1bC40MiAxLjM3OHYuMTVjMCAuMDQzLS4wMjkuMDgtLjA4NS4xMDhhLjY5MS42OTEgMCAwMS0uMTA1LjA4Ni4yNTQuMjU0IDAgMDEtLjE0Ni4wNDNoLTQuMTE0YS4yNTQuMjU0IDAgMDEtLjE0Ny0uMDQzIDEuMzY0IDEuMzY0IDAgMDAtLjE0Ni0uMDg2LjI3MS4yNzEgMCAwMS0uMDYzLS4xMDhjLS4wMTQtLjA0My0uMDA3LS4wOTMuMDItLjE1bC40Mi0xLjM3N2EuMzc0LjM3NCAwIDAxLjE0Ny0uMTUxLjQzMi40MzIgMCAwMS4yMzEtLjA2NXptLTExLjc5NC0uMDg2aC4yNTJWOS40OThoLS4yNTJhLjMzNC4zMzQgMCAwMS0uMjEtLjA2NS4zODYuMzg2IDAgMDEtLjEyNi0uMTkzbC0uNDItMS4zNzdhLjI0OC4yNDggMCAwMS0uMDItLjE3Mi44NTQuODU0IDAgMDEuMDYzLS4xNzNjLjAyOC0uMDU3LjA3LS4xLjEyNi0uMTI5YS4zNjUuMzY1IDAgMDEuMTY4LS4wNDNoNC4wN2MuMDU3IDAgLjExMy4wMTUuMTY5LjA0M2EuMjc4LjI3OCAwIDAxLjEyNi4xMy44NTQuODU0IDAgMDEuMDYyLjE3Mi4yNDguMjQ4IDAgMDEtLjAyLjE3MmwtLjQyIDEuMzc3YS4zODYuMzg2IDAgMDEtLjEyNi4xOTMuMzM0LjMzNCAwIDAxLS4yMS4wNjVoLS4yMXY3LjAxNGguMjFjLjA4NCAwIC4xNTQuMDI5LjIxLjA4NmEuNjczLjY3MyAwIDAxLjEyNi4xNzJsLjQyIDEuMzc4YS4yNDguMjQ4IDAgMDEuMDIuMTcyLjg1NC44NTQgMCAwMS0uMDYyLjE3Mi4yNzguMjc4IDAgMDEtLjEyNi4xMjkuMzY1LjM2NSAwIDAxLS4xNjguMDQzSDMuNTI2YS4zNjUuMzY1IDAgMDEtLjE2OC0uMDQzLjI3OC4yNzggMCAwMS0uMTI2LS4xMy44NTQuODU0IDAgMDEtLjA2My0uMTcxLjI0OC4yNDggMCAwMS4wMi0uMTcybC40Mi0xLjM3OGEuNjczLjY3MyAwIDAxLjEyNi0uMTcyLjI4MS4yODEgMCAwMS4yMS0uMDg2ek0xLjc2MyA2LjY1OGEuNzE3LjcxNyAwIDAxLS41MDQtLjE5NC42NDQuNjQ0IDAgMDEtLjIxLS40OTV2LS40M2EuNzMuNzMgMCAwMS4xMDUtLjM4Ny42OC42OCAwIDAxLjI3My0uMjU5QzQuMzA5IDMuNDAyIDYuNTQgMi4yNzYgOC4xMjEgMS41MTUgOS43MDIuNzU1IDEwLjQ5My4zNjEgMTAuNDkzLjMzMmMuNTMxLS4yNTguOTcyLS4zNjYgMS4zMjItLjMyMy4zNS4wNDMuNzM0LjE2NSAxLjE1NC4zNjZsOC4zMSA0LjUxOGMuMTQuMDU4LjI0NS4xNDQuMzE1LjI1OWEuNzMuNzMgMCAwMS4xMDUuMzg3di40M2MwIC4yMDEtLjA3LjM2Ni0uMjEuNDk1YS43MTcuNzE3IDAgMDEtLjUwNC4xOTRIMS43NjN6bS0uNzE0IDEzLjM0YS41NC41NCAwIDAxLjE2OC0uMzg3LjUxNi41MTYgMCAwMS4zNzgtLjE3MmgxOS42NDJjLjE2OCAwIC4zMDguMDU3LjQyLjE3MmEuNTQxLjU0MSAwIDAxLjE2OC4zODd2LjgxOGEuNTIyLjUyMiAwIDAxLS4xNjguNDA4LjYwNS42MDUgMCAwMS0uNDIuMTUxSDEuNTk1YS41NTEuNTUxIDAgMDEtLjM3OC0uMTUuNTIyLjUyMiAwIDAxLS4xNjgtLjQxdi0uODE3em0yMS40MDUgMi4wMjJjLjE0IDAgLjI2Ni4wNTguMzc4LjE3M2EuNTkyLjU5MiAwIDAxLjE2OC40M3YuODE4YS41NDEuNTQxIDAgMDEtLjE2OC4zODcuNTE2LjUxNiAwIDAxLS4zNzguMTcyTC41NDYgMjMuOTU3YS41MTYuNTE2IDAgMDEtLjM3OC0uMTcyLjU0MS41NDEgMCAwMS0uMTY4LS4zODd2LS44MThhLjU5LjU5IDAgMDEuMTY4LS40My41MTYuNTE2IDAgMDEuMzc4LS4xNzNsMjEuOTA4LjA0M3onXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdtaWMnLFxuICBwYXRoOiAnTTEyIDE1YzEuNjYgMCAyLjk5LTEuMzQgMi45OS0zTDE1IDZjMC0xLjY2LTEuMzQtMy0zLTNTOSA0LjM0IDkgNnY2YzAgMS42NiAxLjM0IDMgMyAzem01LjMtM2MwIDMtMi41NCA1LjEtNS4zIDUuMVM2LjcgMTUgNi43IDEySDVjMCAzLjQxIDIuNzIgNi4yMyA2IDYuNzJWMjJoMnYtMy4yOGMzLjI4LS40OCA2LTMuMyA2LTYuNzJoLTEuN3onXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdkaXJlY3Rpb25zJyxcbiAgcGF0aDogJ00yMy42NDkgMTEuMTU0TDEyLjg0Ni4zNWExLjE5NSAxLjE5NSAwIDAwLTEuNjkyIDBMLjM1IDExLjE1NGExLjE5NSAxLjE5NSAwIDAwMCAxLjY5MkwxMS4xNTQgMjMuNjVhMS4xOTUgMS4xOTUgMCAwMDEuNjkyIDBMMjMuNjUgMTIuODQ2Yy40NjgtLjQ1Ni40NjgtMS4yMTIgMC0xLjY5MnptLTkuMjU0IDMuODUzdi0zLjAwMUg5LjU5M3YzLjZoLTIuNHYtNC44YzAtLjY2LjU0LTEuMiAxLjItMS4yaDYuMDAyVjYuNjA0bDQuMiA0LjItNC4yIDQuMjAyeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2NhbGVuZGFyJyxcbiAgcGF0aDogJ00xOC4xMTEgMTMuMkgxMnY2aDYuMTExdi02ek0xNi44OSAwdjIuNEg3LjExVjBINC42Njd2Mi40SDMuNDQ0Yy0xLjM1NiAwLTIuNDMyIDEuMDgtMi40MzIgMi40TDEgMjEuNkMxIDIyLjkyIDIuMDg4IDI0IDMuNDQ0IDI0aDE3LjExMkMyMS45IDI0IDIzIDIyLjkyIDIzIDIxLjZWNC44YzAtMS4zMi0xLjEtMi40LTIuNDQ0LTIuNGgtMS4yMjNWMEgxNi44OXptMy42NjcgMjEuNkgzLjQ0NFY4LjRoMTcuMTEydjEzLjJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnY2FsbG91dCcsXG4gIHBhdGg6ICdNMjEuOTkgNGMwLTEuMS0uODktMi0xLjk5LTJINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNGw0IDQtLjAxLTE4eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2luZm8nLFxuICBwYXRoOiAnTTEyIDguNEExLjIgMS4yIDAgMTAxMiA2YTEuMiAxLjIgMCAwMDAgMi40ek0xMiAwYzYuNjI0IDAgMTIgNS4zNzYgMTIgMTJzLTUuMzc2IDEyLTEyIDEyUzAgMTguNjI0IDAgMTIgNS4zNzYgMCAxMiAwem0wIDE4Yy42NiAwIDEuMi0uNTQgMS4yLTEuMlYxMmMwLS42Ni0uNTQtMS4yLTEuMi0xLjItLjY2IDAtMS4yLjU0LTEuMiAxLjJ2NC44YzAgLjY2LjU0IDEuMiAxLjIgMS4yeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2JyaWVmY2FzZScsXG4gIHBhdGg6ICdNMjAgN2gtNFY1YzAtMS4xMS0uODktMi0yLTJoLTRjLTEuMTEgMC0yIC44OS0yIDJ2Mkg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAyMGMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY5YzAtMS4xMS0uODktMi0yLTJ6bS02IDBoLTRWNWg0djJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAna2Fib2InLFxuICB2aWV3Qm94OiAnMCAwIDMgMTEnLFxuICBjb21wbGV4Q29udGVudHM6IGA8Y2lyY2xlIGN4PVwiMS41XCIgY3k9XCIxLjVcIiByPVwiMS41XCIvPjxjaXJjbGUgY3g9XCIxLjVcIiBjeT1cIjUuNVwiIHI9XCIxLjVcIi8+PGNpcmNsZSBjeD1cIjEuNVwiIGN5PVwiOS41XCIgcj1cIjEuNVwiLz5gXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdwZXJzb24nLFxuICB2aWV3Qm94OiAnMCAwIDE4IDE4JyxcbiAgcGF0aDogJ005IDljMi40ODYgMCA0LjUtMi4wMTQgNC41LTQuNVMxMS40ODYgMCA5IDBhNC40OTkgNC40OTkgMCAwMC00LjUgNC41QzQuNSA2Ljk4NiA2LjUxNCA5IDkgOXptMCAyLjI1Yy0zLjAwNCAwLTkgMS41MDgtOSA0LjV2MS4xMjVDMCAxNy40OTQuNTA2IDE4IDEuMTI1IDE4aDE1Ljc1Yy42MTkgMCAxLjEyNS0uNTA2IDEuMTI1LTEuMTI1VjE1Ljc1YzAtMi45OTItNS45OTYtNC41LTktNC41eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ21hZ25pZnlpbmdfZ2xhc3MnLFxuICBwYXRoOiAnTTE2LjEyNCAxMy4wNTFhNS4xNTQgNS4xNTQgMCAxMTAtMTAuMzA4IDUuMTU0IDUuMTU0IDAgMDEwIDEwLjMwOE0xNi4xMTQgMGE3Ljg4NiA3Ljg4NiAwIDAwLTYuNDYgMTIuNDA3TDAgMjIuMDYgMS45NCAyNGw5LjY1My05LjY1M0E3Ljg4NiA3Ljg4NiAwIDEwMTYuMTEzIDAnXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdvZmZpY2UnLFxuICBwYXRoOiAnTTEyIDdWM0gydjE4aDIwVjdIMTJ6TTYgMTlINHYtMmgydjJ6bTAtNEg0di0yaDJ2MnptMC00SDRWOWgydjJ6bTAtNEg0VjVoMnYyem00IDEySDh2LTJoMnYyem0wLTRIOHYtMmgydjJ6bTAtNEg4VjloMnYyem0wLTRIOFY1aDJ2MnptMTAgMTJoLTh2LTJoMnYtMmgtMnYtMmgydi0yaC0yVjloOHYxMHptLTItOGgtMnYyaDJ2LTJ6bTAgNGgtMnYyaDJ2LTJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnbGluaycsXG4gIHBhdGg6ICdNMi4yOCAxMkEzLjcyMyAzLjcyMyAwIDAxNiA4LjI4aDQuOFY2SDZjLTMuMzEyIDAtNiAyLjY4OC02IDZzMi42ODggNiA2IDZoNC44di0yLjI4SDZBMy43MjMgMy43MjMgMCAwMTIuMjggMTJ6bTQuOTIgMS4yaDkuNnYtMi40SDcuMnYyLjR6TTE4IDZoLTQuOHYyLjI4SDE4QTMuNzIzIDMuNzIzIDAgMDEyMS43MiAxMiAzLjcyMyAzLjcyMyAwIDAxMTggMTUuNzJoLTQuOFYxOEgxOGMzLjMxMiAwIDYtMi42ODggNi02cy0yLjY4OC02LTYtNnonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICd3aW5kb3cnLFxuICBwYXRoOiAnTTMgMTNoOFYzSDN2MTB6bTAgOGg4di02SDN2NnptMTAgMGg4VjExaC04djEwem0wLTE4djZoOFYzaC04eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3Bob25lJyxcbiAgcGF0aDogJ000LjgyNyAxMC4zODdhMjAuMTk4IDIwLjE5OCAwIDAwOC43ODYgOC43ODZsMi45MzQtMi45MzNjLjM2LS4zNi44OTMtLjQ4IDEuMzYtLjMyYTE1LjIxIDE1LjIxIDAgMDA0Ljc2Ljc2Yy43MzMgMCAxLjMzMy42IDEuMzMzIDEuMzMzdjQuNjU0QzI0IDIzLjQgMjMuNCAyNCAyMi42NjcgMjQgMTAuMTQ3IDI0IDAgMTMuODUzIDAgMS4zMzMgMCAuNi42IDAgMS4zMzMgMEg2Yy43MzMgMCAxLjMzMy42IDEuMzMzIDEuMzMzIDAgMS42NjcuMjY3IDMuMjY3Ljc2IDQuNzYuMTQ3LjQ2Ny4wNC45ODctLjMzMyAxLjM2bC0yLjkzMyAyLjkzNHonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICd0YWcnLFxuICB2aWV3Qm94OiAnMCAwIDE4IDE4JyxcbiAgcGF0aDogJ00xNy40NjkgOC42MjJsLTguMS04LjFBMS43ODkgMS43ODkgMCAwMDguMSAwSDEuOEMuODEgMCAwIC44MSAwIDEuOHY2LjNjMCAuNDk1LjE5OC45NDUuNTMxIDEuMjc4bDguMSA4LjFjLjMyNC4zMjQuNzc0LjUyMiAxLjI2OS41MjJhMS43NiAxLjc2IDAgMDAxLjI2OS0uNTMxbDYuMy02LjNBMS43NiAxLjc2IDAgMDAxOCA5LjljMC0uNDk1LS4yMDctLjk1NC0uNTMxLTEuMjc4ek0zLjE1IDQuNWMtLjc0NyAwLTEuMzUtLjYwMy0xLjM1LTEuMzUgMC0uNzQ3LjYwMy0xLjM1IDEuMzUtMS4zNS43NDcgMCAxLjM1LjYwMyAxLjM1IDEuMzUgMCAuNzQ3LS42MDMgMS4zNS0xLjM1IDEuMzV6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnZG9jdW1lbnQnLFxuICBwYXRoOiAnTTQgNkgydjE0YzAgMS4xLjkgMiAyIDJoMTR2LTJINFY2em0xNi00SDhjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoMTJjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnptLTEgOUg5VjloMTB2MnptLTQgNEg5di0yaDZ2MnptNC04SDlWNWgxMHYyeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2NoZXZyb24nLFxuICB2aWV3Qm94OiAnMCAwIDcgOScsXG4gIGNvbXBsZXhDb250ZW50czogYDxnIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEgLTgpXCI+PHBhdGggZD1cIm0yLjY0MTcwMDQgOC0xLjE0MTcwMDQgMS4wNTc1IDMuNzA4NTAyMDIgMy40NDI1LTMuNzA4NTAyMDIgMy40NDI1IDEuMTQxNzAwNCAxLjA1NzUgNC44NTgyOTk2LTQuNXpcIi8+PC9nPmBcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3N1cHBvcnQnLFxuICBwYXRoOiAnTTEyLjUgMkM3LjgxIDIgNCA1LjgxIDQgMTAuNWMwIDQuNjkgMy44MSA4LjUgOC41IDguNWguNXYzYzQuODYtMi4zNCA4LTcgOC0xMS41QzIxIDUuODEgMTcuMTkgMiAxMi41IDJ6bTEgMTQuNWgtMnYtMmgydjJ6bTAtMy41aC0yYzAtMy4yNSAzLTMgMy01IDAtMS4xLS45LTItMi0ycy0yIC45LTIgMmgtMmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0YzAgMi41LTMgMi43NS0zIDV6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAneWV4dCcsXG4gIHZpZXdCb3g6ICcwIDAgMzAgMzAnLFxuICBwYXRoOiAnTTI1LjUxNyAyOC4xNDJ2LjA5NWgtLjIwNHYuOTA1aC0uMDY2di0uOTA1aC0uMTk3di0uMDk1aC40Njd6bS42NjcgMGguMDY2djFoLS4wNjZ2LS44MjVsLS4yNC41OTVoLS4wMTNsLS4yNC0uNTk1di44MjVoLS4wNjZ2LTFoLjA2NmwuMjQ3LjYxLjI0Ni0uNjF6TTE1IDI4LjhjNy42MjIgMCAxMy44LTYuMTc4IDEzLjgtMTMuOCAwLTcuNjIyLTYuMTc4LTEzLjgtMTMuOC0xMy44QzcuMzc4IDEuMiAxLjIgNy4zNzggMS4yIDE1YzAgNy42MjIgNi4xNzggMTMuOCAxMy44IDEzLjh6TTE1IDBjOC4yODQgMCAxNSA2LjcxNiAxNSAxNSAwIDguMjg0LTYuNzE2IDE1LTE1IDE1LTguMjg0IDAtMTUtNi43MTYtMTUtMTVDMCA2LjcxNiA2LjcxNiAwIDE1IDB6bS40NSAxNi42NXYtMS4yaDYuNnYxLjJoLTIuN3Y1LjRoLTEuMnYtNS40aC0yLjd6bS0xLjU5OS0xLjM1bC44NDkuODQ5LTIuNjAxIDIuNjAxIDIuNjAxIDIuNjAxLS44NDkuODQ5LTIuNjAxLTIuNjAxTDguNjQ5IDIyLjJsLS44NDktLjg0OSAyLjYwMS0yLjYwMUw3LjggMTYuMTQ5bC44NDktLjg0OSAyLjYwMSAyLjYwMSAyLjYwMS0yLjYwMXpNMTguNjc1IDlhMi4xNzUgMi4xNzUgMCAwMC0xLjg0NyAzLjMyM2wyLjk5NS0yLjk5NUEyLjE2MyAyLjE2MyAwIDAwMTguNjc1IDl6bTAgNS41NWEzLjM3NSAzLjM3NSAwIDExMi44MzMtNS4yMDlsLTMuNzg5IDMuNzg4YTIuMTc1IDIuMTc1IDAgMDAzLjEzLTEuOTU0aDEuMjAxYTMuMzc1IDMuMzc1IDAgMDEtMy4zNzUgMy4zNzV6bS03LjQyNS0zLjczNEwxMy43OCA3LjhsLjkyLjc3MS0yLjg1IDMuMzk3djIuNTgyaC0xLjJ2LTIuNTgyTDcuOCA4LjU3bC45Mi0uNzcxIDIuNTMgMy4wMTZ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncGluJyxcbiAgdmlld0JveDogJzAgMCAxMyAxOCcsXG4gIHBhdGg6ICdtOS4zNzUgMGMtMy41MjQ0NjQyOSAwLTYuMzc1IDIuODE3LTYuMzc1IDYuMyAwIDQuNzI1IDYuMzc1IDExLjcgNi4zNzUgMTEuN3M2LjM3NS02Ljk3NSA2LjM3NS0xMS43YzAtMy40ODMtMi44NTA1MzU3LTYuMy02LjM3NS02LjN6bS4wMDAwMDAxOCA4LjU1MDAwMDA3Yy0xLjI1Njc4NTc2IDAtMi4yNzY3ODU3OS0xLjAwOC0yLjI3Njc4NTc5LTIuMjVzMS4wMjAwMDAwMy0yLjI1IDIuMjc2Nzg1NzktMi4yNWMxLjI1Njc4NTcyIDAgMi4yNzY3ODU4MiAxLjAwOCAyLjI3Njc4NTgyIDIuMjVzLTEuMDIwMDAwMSAyLjI1LTIuMjc2Nzg1ODIgMi4yNXonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdnZWFyJyxcbiAgcGF0aDogJ00xMiAxMGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bTctN0g1YTIgMiAwIDAwLTIgMnYxNGEyIDIgMCAwMDIgMmgxNGEyIDIgMCAwMDItMlY1YTIgMiAwIDAwLTItMnptLTEuNzUgOWMwIC4yMy0uMDIuNDYtLjA1LjY4bDEuNDggMS4xNmMuMTMuMTEuMTcuMy4wOC40NWwtMS40IDIuNDJjLS4wOS4xNS0uMjcuMjEtLjQzLjE1bC0xLjc0LS43Yy0uMzYuMjgtLjc2LjUxLTEuMTguNjlsLS4yNiAxLjg1Yy0uMDMuMTctLjE4LjMtLjM1LjNoLTIuOGMtLjE3IDAtLjMyLS4xMy0uMzUtLjI5bC0uMjYtMS44NWMtLjQzLS4xOC0uODItLjQxLTEuMTgtLjY5bC0xLjc0LjdjLS4xNi4wNi0uMzQgMC0uNDMtLjE1bC0xLjQtMi40MmEuMzUzLjM1MyAwIDAxLjA4LS40NWwxLjQ4LTEuMTZjLS4wMy0uMjMtLjA1LS40Ni0uMDUtLjY5IDAtLjIzLjAyLS40Ni4wNS0uNjhsLTEuNDgtMS4xNmEuMzUzLjM1MyAwIDAxLS4wOC0uNDVsMS40LTIuNDJjLjA5LS4xNS4yNy0uMjEuNDMtLjE1bDEuNzQuN2MuMzYtLjI4Ljc2LS41MSAxLjE4LS42OWwuMjYtMS44NWMuMDMtLjE3LjE4LS4zLjM1LS4zaDIuOGMuMTcgMCAuMzIuMTMuMzUuMjlsLjI2IDEuODVjLjQzLjE4LjgyLjQxIDEuMTguNjlsMS43NC0uN2MuMTYtLjA2LjM0IDAgLjQzLjE1bDEuNCAyLjQyYy4wOS4xNS4wNS4zNC0uMDguNDVsLTEuNDggMS4xNmMuMDMuMjMuMDUuNDYuMDUuNjl6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnbGlnaHRfYnVsYicsXG4gIHZpZXdCb3g6ICcwIDAgMzIgMzUnLFxuICBwYXRoOiAnTTExLjU4NSAzMS4wNTZsOC4zOC0uNDkzdi0uOTg2bC04LjM4LjQ5M3pNMTEuNTg1IDMzLjAyOEwxNS43NzUgMzVsNC4xOS0xLjk3MlYzMS41NWwtOC4zOC40OTN2Ljk4NnptNi45MjYtLjQwN2wtMi43MzYgMS4yOS0yLjEzLTEuMDA0IDQuODY2LS4yODZ6TTE1Ljc3NSA3LjM5NGMtNC42MyAwLTguMzggMy4yMDUtOC4zOCA4LjM4IDAgNS4xNzcgNC4xOSA2LjkwMiA0LjE5IDEyLjgxOHYuNDkzbDguMzgtLjQ5M2MwLTUuOTE2IDQuMTktOC4xODggNC4xOS0xMi44MTdhOC4zOCA4LjM4IDAgMDAtOC4zOC04LjM4em01LjYxNyAxMy40OGMtMS4wMjUgMS44MzctMi4xNzQgMy44OTItMi4zODEgNi43ODZsLTYuNDQuMzhjLS4xMjktMy4wMS0xLjI5LTUuMDIxLTIuMzItNi44MDgtLjQ5My0uOC0uOTI4LTEuNjM2LTEuMjk5LTIuNWgxMy41NTZjLS4zMjUuNzA4LS43MDQgMS40MDMtMS4xMTYgMi4xNDJ6bTEuNDc5LTMuMTI4SDguNjI3YTcuNzkzIDcuNzkzIDAgMDEtLjI0Ny0xLjk3MWMwLTQuMzUzIDMuMDQyLTcuMzk1IDcuMzk1LTcuMzk1YTcuMzk0IDcuMzk0IDAgMDE3LjM5NCA3LjM5NSA2LjczOSA2LjczOSAwIDAxLS4zIDEuOTcxaC4wMDJ6TTI2LjYyIDE1LjI4Mmg0LjkzdjFoLTQuOTN6TTIzLjA5NCA3Ljc1NmwyLjA5MS0yLjA5MS42OTguNjk3LTIuMDkyIDIuMDkyek0xNS4yODIgMGgxdjQuOTNoLTF6TTUuNjY2IDYuMzYybC42OTctLjY5NyAyLjA5MSAyLjA5MS0uNjk3LjY5N3pNMCAxNS4yODJoNC45M3YxSDB6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncmVjZWlwdCcsXG4gIHZpZXdCb3g6ICcwIDAgMTggMTgnLFxuICBwYXRoOiAnTTguOTkxIDBDNC4wMjMgMCAwIDQuMDMyIDAgOXM0LjAyMyA5IDguOTkxIDlDMTMuOTY4IDE4IDE4IDEzLjk2OCAxOCA5cy00LjAzMi05LTkuMDA5LTl6bTMuODE2IDE0LjRMOSAxMi4xMDUgNS4xOTMgMTQuNGwxLjAwOC00LjMyOS0zLjM1Ny0yLjkwNyA0LjQyOC0uMzc4TDkgMi43bDEuNzI4IDQuMDc3IDQuNDI4LjM3OC0zLjM1NyAyLjkwN3onXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdjbG9zZScsXG4gIGNvbXBsZXhDb250ZW50czogYFxuICAgIDxwYXRoIGQ9XCJNNyA4bDkuNzE2IDkuNzE2bTAtOS43MTZMNyAxNy43MTZcIiBcbiAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCIvPlxuICBgXG59KTtcbiIsImltcG9ydCB0aHVtYkljb24gZnJvbSAnLi90aHVtYi5qcyc7XG5pbXBvcnQgcmVjZWlwdEljb24gZnJvbSAnLi9yZWNlaXB0LmpzJztcbmltcG9ydCBwYW50aGVvbkljb24gZnJvbSAnLi9wYW50aGVvbi5qcyc7XG5pbXBvcnQgbWljSWNvbiBmcm9tICcuL21pYy5qcyc7XG5pbXBvcnQgZGlyZWN0aW9uc0ljb24gZnJvbSAnLi9kaXJlY3Rpb25zLmpzJztcbmltcG9ydCBjYWxlbmRhckljb24gZnJvbSAnLi9jYWxlbmRhci5qcyc7XG5pbXBvcnQgY2FsbG91dEljb24gZnJvbSAnLi9jYWxsb3V0LmpzJztcbmltcG9ydCBpbmZvSWNvbiBmcm9tICcuL2luZm8uanMnO1xuaW1wb3J0IGJyaWVmY2FzZUljb24gZnJvbSAnLi9icmllZmNhc2UuanMnO1xuaW1wb3J0IGthYm9iSWNvbiBmcm9tICcuL2thYm9iLmpzJztcbmltcG9ydCBwZXJzb25JY29uIGZyb20gJy4vcGVyc29uLmpzJztcbmltcG9ydCBtYWduaWZ5aW5nR2xhc3NJY29uIGZyb20gJy4vbWFnbmlmeWluZ19nbGFzcy5qcyc7XG5pbXBvcnQgb2ZmaWNlSWNvbiBmcm9tICcuL29mZmljZS5qcyc7XG5pbXBvcnQgbGlua0ljb24gZnJvbSAnLi9saW5rLmpzJztcbmltcG9ydCB3aW5kb3dJY29uIGZyb20gJy4vd2luZG93LmpzJztcbmltcG9ydCBwaG9uZUljb24gZnJvbSAnLi9waG9uZS5qcyc7XG5pbXBvcnQgdGFnSWNvbiBmcm9tICcuL3RhZy5qcyc7XG5pbXBvcnQgZG9jdW1lbnRJY29uIGZyb20gJy4vZG9jdW1lbnQuanMnO1xuaW1wb3J0IGNoZXZyb25JY29uIGZyb20gJy4vY2hldnJvbi5qcyc7XG5pbXBvcnQgc3VwcG9ydEljb24gZnJvbSAnLi9zdXBwb3J0LmpzJztcbmltcG9ydCB5ZXh0SWNvbiBmcm9tICcuL3lleHQuanMnO1xuaW1wb3J0IHBpbkljb24gZnJvbSAnLi9waW4uanMnO1xuaW1wb3J0IGdlYXJJY29uIGZyb20gJy4vZ2Vhci5qcyc7XG5pbXBvcnQgbGlnaHRCdWxiSWNvbiBmcm9tICcuL2xpZ2h0X2J1bGIuanMnO1xuaW1wb3J0IHN0YXJJY29uIGZyb20gJy4vc3Rhci5qcyc7XG5pbXBvcnQgY2xvc2UgZnJvbSAnLi9jbG9zZS5qcyc7XG5cbmNvbnN0IGljb25zQXJyYXkgPSBbXG4gIHRodW1iSWNvbixcbiAgcmVjZWlwdEljb24sXG4gIHBhbnRoZW9uSWNvbixcbiAgbWljSWNvbixcbiAgZGlyZWN0aW9uc0ljb24sXG4gIGNhbGVuZGFySWNvbixcbiAgY2FsbG91dEljb24sXG4gIGluZm9JY29uLFxuICBicmllZmNhc2VJY29uLFxuICBrYWJvYkljb24sXG4gIHBlcnNvbkljb24sXG4gIG1hZ25pZnlpbmdHbGFzc0ljb24sXG4gIG9mZmljZUljb24sXG4gIGxpbmtJY29uLFxuICB3aW5kb3dJY29uLFxuICBwaG9uZUljb24sXG4gIHRhZ0ljb24sXG4gIGRvY3VtZW50SWNvbixcbiAgY2hldnJvbkljb24sXG4gIHN1cHBvcnRJY29uLFxuICB5ZXh0SWNvbixcbiAgcGluSWNvbixcbiAgZ2Vhckljb24sXG4gIGxpZ2h0QnVsYkljb24sXG4gIGNsb3NlXG5dO1xuXG5jb25zdCBJY29ucyA9IHt9O1xuXG5pY29uc0FycmF5LmZvckVhY2goaWNvbiA9PiB7XG4gIEljb25zW2ljb24ubmFtZV0gPSBpY29uLm1hcmt1cCgpO1xufSk7XG5cbkljb25zLmRlZmF1bHQgPSBzdGFySWNvbi5tYXJrdXAoKTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbnM7XG4iLCIvKiogQG1vZHVsZSBJY29uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBJY29ucyBmcm9tICcuLi8uLi9pY29ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvKipcbiAgICogSWNvbkNvbXBvbmVudFxuICAgKiBAcGFyYW0gb3B0c1xuICAgKiBAcGFyYW0gb3B0cy5pY29uTmFtZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gb3B0cy5jdXN0b21JY29uIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBvcHRzLmljb25Vcmwge3N0cmluZ31cbiAgICovXG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30sIHN5c3RlbU9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMsIHN5c3RlbU9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogbmFtZSBvZiBhbiBpY29uIGZyb20gdGhlIGRlZmF1bHQgaWNvbiBzZXRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuaWNvbk5hbWUgPSBvcHRzLmljb25OYW1lIHx8ICdkZWZhdWx0JztcblxuICAgIC8qKlxuICAgICAqIHRoZSBtYXJrdXAgZm9yIGEgZnVsbHkgY3VzdG9tIGljb25cbiAgICAgKiBAdHlwZSB7KnxudWxsfVxuICAgICAqL1xuICAgIHRoaXMuY3VzdG9tSWNvbiA9IG9wdHMuY3VzdG9tSWNvbiB8fCBudWxsO1xuICAgIC8qKlxuICAgICAqIHRoZSB1cmwgdG8gYSBjdXN0b20gaW1hZ2UgaWNvblxuICAgICAqIEB0eXBlIHtudWxsfVxuICAgICAqL1xuICAgIHRoaXMuaWNvblVybCA9IG9wdHMuaWNvblVybCB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldHRlciBmb3IgdGhlIGltYWdlIHBhc3RlZCB0byBoYW5kbGViYXJzXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgaW1hZ2UgKCkge1xuICAgIGlmICh0aGlzLmN1c3RvbUljb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmN1c3RvbUljb247XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaWNvblVybCkge1xuICAgICAgcmV0dXJuIGA8aW1nIHNyYz1cIiR7dGhpcy5pY29uVXJsfVwiIGFsdD1cIlwiIGNsYXNzPVwiSWNvbi1pbWFnZVwiPmA7XG4gICAgfVxuXG4gICAgaWYgKEljb25zW3RoaXMuaWNvbk5hbWVdKSB7XG4gICAgICByZXR1cm4gSWNvbnNbdGhpcy5pY29uTmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIEljb25zLmRlZmF1bHQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnSWNvbkNvbXBvbmVudCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ2ljb25zL2ljb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIGFsbG93aW5nIGR1cGxpY2F0ZXNcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogb3ZlcnJpZGVzIGRlZmF1bHQgZnVuY3Rpb25hbGl0eSB0byBwcm92aWRlIG5hbWUgYW5kIG1hcmt1cFxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7SWNvbkNvbXBvbmVudH1cbiAgICovXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICBuYW1lOiB0aGlzLmljb25OYW1lID8gdGhpcy5pY29uTmFtZSA6ICdjdXN0b20nXG4gICAgfSkpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tICcuL2NvbXBvbmVudG1hbmFnZXInO1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcblxuaW1wb3J0IE5hdmlnYXRpb25Db21wb25lbnQgZnJvbSAnLi9uYXZpZ2F0aW9uL25hdmlnYXRpb25jb21wb25lbnQnO1xuXG5pbXBvcnQgU2VhcmNoQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL3NlYXJjaGNvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyU2VhcmNoQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL2ZpbHRlcnNlYXJjaGNvbXBvbmVudCc7XG5pbXBvcnQgQXV0b0NvbXBsZXRlQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL2F1dG9jb21wbGV0ZWNvbXBvbmVudCc7XG5pbXBvcnQgU3BlbGxDaGVja0NvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9zcGVsbGNoZWNrY29tcG9uZW50JztcblxuaW1wb3J0IEZpbHRlckJveENvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZmlsdGVyYm94Y29tcG9uZW50JztcbmltcG9ydCBGaWx0ZXJPcHRpb25zQ29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9maWx0ZXJvcHRpb25zY29tcG9uZW50JztcbmltcG9ydCBSYW5nZUZpbHRlckNvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvcmFuZ2VmaWx0ZXJjb21wb25lbnQnO1xuaW1wb3J0IERhdGVSYW5nZUZpbHRlckNvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZGF0ZXJhbmdlZmlsdGVyY29tcG9uZW50JztcbmltcG9ydCBEeW5hbWljRmlsdGVyc0NvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZHluYW1pY2ZpbHRlcnNjb21wb25lbnQnO1xuaW1wb3J0IEdlb0xvY2F0aW9uQ29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9nZW9sb2NhdGlvbmNvbXBvbmVudCc7XG5cbmltcG9ydCBEaXJlY3RBbnN3ZXJDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2RpcmVjdGFuc3dlcmNvbXBvbmVudCc7XG5pbXBvcnQgUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcmVzdWx0c2NvbXBvbmVudCc7XG5pbXBvcnQgQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvYWNjb3JkaW9ucmVzdWx0c2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvdW5pdmVyc2FscmVzdWx0c2NvbXBvbmVudCc7XG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2xvY2F0aW9ucmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2V2ZW50cmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5pbXBvcnQgUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Blb3BsZXJlc3VsdHNpdGVtY29tcG9uZW50JztcblxuaW1wb3J0IE1hcENvbXBvbmVudCBmcm9tICcuL21hcC9tYXBjb21wb25lbnQnO1xuaW1wb3J0IFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCBmcm9tICcuL3F1ZXN0aW9ucy9xdWVzdGlvbnN1Ym1pc3Npb25jb21wb25lbnQnO1xuXG5pbXBvcnQgSWNvbkNvbXBvbmVudCBmcm9tICcuL2ljb25zL2ljb25jb21wb25lbnQuanMnO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX01BTkFHRVIgPSBuZXcgQ29tcG9uZW50TWFuYWdlcigpXG4vLyBDb3JlIENvbXBvbmVudFxuICAucmVnaXN0ZXIoQ29tcG9uZW50KVxuXG4vLyBOYXZpZ2F0aW9uIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKE5hdmlnYXRpb25Db21wb25lbnQpXG5cbi8vIFNlYXJjaCBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihTZWFyY2hDb21wb25lbnQpXG4gIC5yZWdpc3RlcihGaWx0ZXJTZWFyY2hDb21wb25lbnQpXG4gIC5yZWdpc3RlcihBdXRvQ29tcGxldGVDb21wb25lbnQpXG4gIC5yZWdpc3RlcihTcGVsbENoZWNrQ29tcG9uZW50KVxuXG4vLyBGaWx0ZXIgQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoRmlsdGVyQm94Q29tcG9uZW50KVxuICAucmVnaXN0ZXIoRmlsdGVyT3B0aW9uc0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFJhbmdlRmlsdGVyQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRGF0ZVJhbmdlRmlsdGVyQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRHluYW1pY0ZpbHRlcnNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihHZW9Mb2NhdGlvbkNvbXBvbmVudClcblxuLy8gUmVzdWx0cyBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihEaXJlY3RBbnN3ZXJDb21wb25lbnQpXG4gIC5yZWdpc3RlcihVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoUmVzdWx0c0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFJlc3VsdHNJdGVtQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQpXG4gIC5yZWdpc3RlcihFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQpXG5cbiAgLnJlZ2lzdGVyKE1hcENvbXBvbmVudClcblxuLy8gUXVlc3Rpb25zIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudClcblxuLy8gSGVscGVyIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKEljb25Db21wb25lbnQpO1xuIiwiLyoqIEBtb2R1bGUgVGVtcGxhdGVMb2FkZXIgKi9cblxuaW1wb3J0IERPTSBmcm9tICcuLi9kb20vZG9tJztcbmltcG9ydCB7IENPTVBJTEVEX1RFTVBMQVRFU19VUkwgfSBmcm9tICcuLi8uLi9jb3JlL2NvbnN0YW50cyc7XG5cbi8qKlxuICogVGVtcGxhdGVMb2FkZXIgZXhwb3NlcyBhbiBpbnRlcmZhY2UgZm9yIGxvYWRpbmcgdGVtcGxhdGVzIGFzeW5jaHJvbm91c2x5XG4gKiBmcm9tIHRoZSBzZXJ2ZXIgYW5kIHJlZ2lzdGVycyB0aGVtIHdpdGggdGhlIHByb3BlciByZW5kZXJlci5cbiAqIEl0IGFsc28gYWxsb3dzIHlvdSB0byBhc3NpZ24gdGhlbSBzeW5jaHJvbm91c2x5LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZUxvYWRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBpZiAoIVRlbXBsYXRlTG9hZGVyLnNldEluc3RhbmNlKHRoaXMpKSB7XG4gICAgICByZXR1cm4gVGVtcGxhdGVMb2FkZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgdXJsIHRvIGZldGNoIGNvbXBpbGVkIHRlbXBsYXRlcyBmcm9tXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlVXJsID0gY29uZmlnLnRlbXBsYXRlVXJsIHx8IENPTVBJTEVEX1RFTVBMQVRFU19VUkw7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB7fTtcbiAgICB0aGlzLl9vbkxvYWRlZCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHRoaXMuX2luaXQoKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRJbnN0YW5jZSAoaW5zdGFuY2UpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UgKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgX2luaXQgKCkge1xuICAgIHRoaXMuZmV0Y2hUZW1wbGF0ZXMoKTtcbiAgfVxuXG4gIGZldGNoVGVtcGxhdGVzICgpIHtcbiAgICAvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgdGVtcGxhdGVzIGxvYWRlZCwgZG8gbm90aGluZ1xuICAgIGxldCBub2RlID0gRE9NLnF1ZXJ5KCcjeWV4dC1hbnN3ZXJzLXRlbXBsYXRlcycpO1xuICAgIGlmIChub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSW5qZWN0IGEgc2NyaXB0IHRvIGZldGNoIHRoZSBjb21waWxlZCB0ZW1wbGF0ZXMsXG4gICAgLy8gd3JhcHBpbmcgaXQgYSBQcm9taXNlIGZvciBjbGVhbmxpbmVzc1xuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBzY3JpcHQgPSBET00uY3JlYXRlRWwoJ3NjcmlwdCcsIHtcbiAgICAgICAgaWQ6ICd5ZXh0LWFuc3dlcnMtdGVtcGxhdGVzJyxcbiAgICAgICAgb25sb2FkOiByZXNvbHZlLFxuICAgICAgICBvbmVycm9yOiByZWplY3QsXG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBzcmM6IHRoaXMuX3RlbXBsYXRlVXJsXG4gICAgICB9KTtcblxuICAgICAgRE9NLmFwcGVuZCgnYm9keScsIHNjcmlwdCk7XG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgLy8gVE9ETyhiaWxseSkgSW1wbG1lbmV0IGVycm9yIGhhbmRsaW5nIGhlcmUgKGUuZy4gcmVxdWVzdCBjb3VsZCBmYWlsKVxuICAgICAgICBjb25zb2xlLmxvZygnVGVtcGxhdGVzIGxvYWRlZCBzdWNjZXNzZnVsbHkhJyk7XG4gICAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZWdpc3RlciB0aGUgdGVtcGxhdGVzIGludGVybmFsbHkgc28gdGhhdCB0aGV5IGNhbiBiZSBsYXRlciBjb25zdW1lZFxuICAgKiAoZS5nLiBieSBjb21wb25lbnRzIGFuZCByZW5kZXJlcnMpIHdpdGggY29udmllbmllbmNlLlxuICAgKlxuICAgKiBgZmV0Y2hUZW1wbGF0ZXNgIHdpbGwgYXV0b21hdGljYWxseSBjYWxsIHRoaXMsIHByb3ZpZGluZyB0aGUgY29tcGlsZWQgdGVtcGxhdGVzIGZyb20gdGhlIHNlcnZlci5cbiAgICovXG4gIHJlZ2lzdGVyICh0ZW1wbGF0ZXMpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXM7XG5cbiAgICAvLyBOb3RpZnkgb3VyIGNvbnN1bWVycyB0aGF0IHRoZSB0ZW1wbGF0ZXMgYXJlIGhlcmUgOilcbiAgICB0aGlzLl9vbkxvYWRlZCh0aGlzLl90ZW1wbGF0ZXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb25Mb2FkZWQgKGNiKSB7XG4gICAgdGhpcy5fb25Mb2FkZWQgPSBjYjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCAodGVtcGxhdGVOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlc1t0ZW1wbGF0ZU5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4gVGhlIGludGVybmFsIHRlbXBsYXRlIGNvbGxlY3Rpb25cbiAgICovXG4gIGdldFRlbXBsYXRlcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlcztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuZXhwb3J0IHsgQ09NUE9ORU5UX01BTkFHRVIgfSBmcm9tICcuL2NvbXBvbmVudHMvY29uc3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBET00gfSBmcm9tICcuL2RvbS9kb20nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2hQYXJhbXMgfSBmcm9tICcuL2RvbS9zZWFyY2hwYXJhbXMnO1xuXG5leHBvcnQgeyBSZW5kZXJlcnMgfSBmcm9tICcuL3JlbmRlcmluZy9jb25zdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRlbXBsYXRlTG9hZGVyIH0gZnJvbSAnLi9yZW5kZXJpbmcvdGVtcGxhdGVsb2FkZXInO1xuIiwiLyoqIEBtb2R1bGUgRXJyb3JSZXBvcnRlciAqL1xuXG5pbXBvcnQgeyBBbnN3ZXJzQmFzZUVycm9yIH0gZnJvbSAnLi9lcnJvcnMnO1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IHsgTElCX1ZFUlNJT04gfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEVycm9yUmVwb3J0ZXIgaXMgdXNlZCBmb3IgcmVwb3J0aW5nIGVycm9ycyB0byB0aGUgY29uc29sZSBhbmQgc2VydmVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yUmVwb3J0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGFwaUtleSB0byB1c2UgZm9yIHJlcG9ydGluZ1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5hcGlLZXkgPSBjb25maWcuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGV4cGVyaWVuY2VLZXkgdG8gdXNlIHdoZW4gcmVwb3J0aW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmV4cGVyaWVuY2VLZXkgPSBjb25maWcuZXhwZXJpZW5jZUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhbnN3ZXJzIGNvbmZpZyB2ZXJzaW9uIHVzZWQgZm9yIGFwaSByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuZXhwZXJpZW5jZVZlcnNpb24gPSBjb25maWcuZXhwZXJpZW5jZVZlcnNpb24gfHwgJ2NvbmZpZzEuMCc7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBwcmludCBlbnRpcmUgZXJyb3Igb2JqZWN0cyB0byB0aGUgY29uc29sZSBmb3IgaW5zcGVjdGlvblxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucHJpbnRWZXJib3NlID0gY29uZmlnLnByaW50VmVyYm9zZTtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHJlcG9ydCB0aGUgZXJyb3IgdGhlIHNlcnZlciBmb3IgbG9nZ2luZyBhbmQgbW9uaXRvcmluZ1xuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuc2VuZFRvU2VydmVyID0gY29uZmlnLnNlbmRUb1NlcnZlcjtcblxuICAgIC8vIEF0dGFjaCByZXBvcnRpbmcgbGlzdGVuZXJzIHRvIHdpbmRvd1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGUgPT4gdGhpcy5yZXBvcnQoZS5lcnJvcikpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmhhbmRsZWRyZWplY3Rpb24nLCBlID0+IHRoaXMucmVwb3J0KGUuZXJyb3IpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXBvcnQgcHJldHR5IHByaW50cyB0aGUgZXJyb3IgdG8gdGhlIGNvbnNvbGUsIG9wdGlvbmFsbHlcbiAgICogcHJpbnRzIHRoZSBlbnRpcmUgZXJyb3IgaWYgYHByaW50VmVyYm9zZWAgaXMgdHJ1ZSwgYW5kIHNlbmRzIHRoZVxuICAgKiBlcnJvciB0byB0aGUgc2VydmVyIHRvIGJlIGxvZ2dlZCBpZiBgc2VuZFRvU2VydmVyYCBpcyB0cnVlXG4gICAqIEBwYXJhbSB7QW5zd2Vyc0Jhc2VFcnJvcn0gZXJyIFRoZSBlcnJvciB0byBiZSByZXBvcnRlZFxuICAgKiBAcmV0dXJucyB7QW5zd2Vyc0Jhc2VFcnJvcn0gVGhlIHJlcG9ydGVkIGVycm9yXG4gICAqL1xuICByZXBvcnQgKGVycikge1xuICAgIGlmICghKGVyciBpbnN0YW5jZW9mIEFuc3dlcnNCYXNlRXJyb3IpIHx8IGVyci5yZXBvcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVyci5yZXBvcnRlZCA9IHRydWU7XG5cbiAgICB0aGlzLnByaW50RXJyb3IoZXJyKTtcblxuICAgIGlmICh0aGlzLnNlbmRUb1NlcnZlcikge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9lcnJvcnMnLFxuICAgICAgICBhcGlLZXk6IHRoaXMuYXBpS2V5LFxuICAgICAgICB2ZXJzaW9uOiAyMDE5MDMwMSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgJ2Vycm9yJzogZXJyLnRvSnNvbigpLFxuICAgICAgICAgICdsaWJWZXJzaW9uJzogTElCX1ZFUlNJT04sXG4gICAgICAgICAgJ2V4cGVyaWVuY2VWZXJzaW9uJzogdGhpcy5leHBlcmllbmNlVmVyc2lvbixcbiAgICAgICAgICAnZXhwZXJpZW5jZUtleSc6IHRoaXMuZXhwZXJpZW5jZUtleVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxdWVzdC5nZXQoKVxuICAgICAgICAuY2F0Y2goY29uc29sZS5lcnIpO1xuICAgIH1cblxuICAgIHJldHVybiBlcnI7XG4gIH1cblxuICAvKipcbiAgICogcHJpbnRzIHRoZSBnaXZlbiBlcnJvciB0byB0aGUgYnJvd3NlciBjb25zb2xlXG4gICAqIEBwYXJhbSB7QW5zd2Vyc0Jhc2VFcnJvcn0gZXJyIFRoZSBlcnJvciB0byBiZSBwcmludGVkXG4gICAqL1xuICBwcmludEVycm9yIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVyci50b1N0cmluZygpKTtcbiAgICBpZiAodGhpcy5wcmludFZlcmJvc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKHsgLi4uZXJyIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi9kb20vc2VhcmNocGFyYW1zJztcbmltcG9ydCB7IEFuc3dlcnNTdG9yYWdlRXJyb3IgfSBmcm9tICcuLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuXG4vKiogQG1vZHVsZSBQZXJzaXN0ZW50U3RvcmFnZSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzaXN0ZW50U3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHBhcmFtcyBtb2RlbFxuICAgICAqIEB0eXBlIHtTZWFyY2hQYXJhbXN9XG4gICAgICovXG4gICAgdGhpcy5fcGFyYW1zID0gbmV3IFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBoaXN0b3J5IGVkaXQgdGltZXIsIGlmIGFueVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5faGlzdG9yeVRpbWVyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGxpc3RlbmVycyB0byBldmVyeSBzdG9yYWdlIHVwZGF0ZVxuICAgICAqIEB0eXBlIHtmdW5jdGlvbltdfVxuICAgICAqL1xuICAgIHRoaXMuX3VwZGF0ZUxpc3RlbmVyID0gY29uZmlnLnVwZGF0ZUxpc3RlbmVyIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxpc3Qgb2YgbGlzdGVuZXJzIHRvIHN0b3JhZ2UgcmVzZXRzXG4gICAgICogQHR5cGUge2Z1bmN0aW9uW119XG4gICAgICovXG4gICAgdGhpcy5fcmVzZXRMaXN0ZW5lciA9IGNvbmZpZy5yZXNldExpc3RlbmVyIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgd2luZG93Lm9ucG9wc3RhdGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9wYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICAgIHRoaXMuX2NhbGxMaXN0ZW5lcih0aGlzLl91cGRhdGVMaXN0ZW5lcik7XG4gICAgICB0aGlzLl9jYWxsTGlzdGVuZXIodGhpcy5fcmVzZXRMaXN0ZW5lcik7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnQgdGhlIGdpdmVuIGtleS92YWx1ZSBwYWlyIGludG8gc3RvcmFnZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgdG8gaW5zZXJ0IHRoZSBkYXRhIGluXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUgZGF0YSB0byBpbnNlcnRcbiAgICovXG4gIHNldCAoa2V5LCBkYXRhKSB7XG4gICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc1N0b3JhZ2VFcnJvcignU3RvcmFnZSBkYXRhIGtleSBtdXN0IGJlIGEgc3RyaW5nJywga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICBsZXQgbmV3RGF0YSA9IGRhdGE7XG4gICAgaWYgKHR5cGVvZiBkYXRhICE9PSAnc3RyaW5nJykge1xuICAgICAgbmV3RGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICB0aGlzLl9wYXJhbXMuc2V0KGtleSwgbmV3RGF0YSk7XG4gICAgdGhpcy5fdXBkYXRlSGlzdG9yeSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSB0aGUgZ2l2ZW4ga2V5IGZyb20gc3RvcmFnZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgdG8gZGVsZXRlXG4gICAqL1xuICBkZWxldGUgKGtleSkge1xuICAgIHRoaXMuX3BhcmFtcy5kZWxldGUoa2V5KTtcbiAgICB0aGlzLl91cGRhdGVIaXN0b3J5KCk7XG4gIH1cblxuICBfdXBkYXRlSGlzdG9yeSAoKSB7XG4gICAgaWYgKHRoaXMuX2hpc3RvcnlUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2hpc3RvcnlUaW1lcik7XG4gICAgfVxuXG4gICAgLy8gYmF0Y2ggdXBkYXRlIGNhbGxzIGFjcm9zcyBjb21wb25lbnRzIHRvIGF2b2lkIHVwZGF0aW5nIHRoZSB1cmwgdG9vIG11Y2hcbiAgICB0aGlzLl9oaXN0b3J5VGltZXIgPSBzZXRUaW1lb3V0KFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLl9oaXN0b3J5VGltZXIgPSBudWxsO1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgYD8ke3RoaXMuX3BhcmFtcy50b1N0cmluZygpfWApO1xuICAgICAgICB0aGlzLl9jYWxsTGlzdGVuZXIodGhpcy5fdXBkYXRlTGlzdGVuZXIpO1xuICAgICAgfSxcbiAgICAgIDEwMCk7XG4gIH1cblxuICAvKipcbiAgICogSW52b2tlIHRoZSBnaXZlbiBsaXN0IG9mIGNhbGxiYWNrcyB3aXRoIHRoZSBjdXJyZW50IHN0b3JhZ2UgZGF0YVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uW119IGxpc3RlbmVycyBUaGUgY2FsbGJhY2tzIHRvIGludm9rZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NhbGxMaXN0ZW5lciAobGlzdGVuZXIpIHtcbiAgICBsaXN0ZW5lcih0aGlzLmdldEFsbCgpLCB0aGlzLl9wYXJhbXMudG9TdHJpbmcoKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCB0aGUga2V5L3ZhbHVlIHBhaXJzIGluIHN0b3JhZ2VcbiAgICovXG4gIGdldEFsbCAoKSB7XG4gICAgY29uc3QgYWxsUGFyYW1zID0ge307XG4gICAgY29uc3QgZW50cmllcyA9IEFycmF5LmZyb20odGhpcy5fcGFyYW1zLmVudHJpZXMoKSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSBlbnRyaWVzW2ldWzBdO1xuICAgICAgY29uc3QgdmFsID0gZW50cmllc1tpXVsxXTtcbiAgICAgIGFsbFBhcmFtc1trZXldID0gdmFsO1xuICAgIH1cbiAgICByZXR1cm4gYWxsUGFyYW1zO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5pbXBvcnQgQ29yZSBmcm9tICcuL2NvcmUvY29yZSc7XG5cbmltcG9ydCB7XG4gIFRlbXBsYXRlTG9hZGVyLFxuICBDT01QT05FTlRfTUFOQUdFUixcbiAgUmVuZGVyZXJzLFxuICBET01cbn0gZnJvbSAnLi91aS9pbmRleCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vdWkvY29tcG9uZW50cy9jb21wb25lbnQnO1xuXG5pbXBvcnQgRXJyb3JSZXBvcnRlciBmcm9tICcuL2NvcmUvZXJyb3JzL2Vycm9ycmVwb3J0ZXInO1xuaW1wb3J0IHsgQW5hbHl0aWNzUmVwb3J0ZXIgfSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0IFBlcnNpc3RlbnRTdG9yYWdlIGZyb20gJy4vdWkvc3RvcmFnZS9wZXJzaXN0ZW50c3RvcmFnZSc7XG5pbXBvcnQgR2xvYmFsU3RvcmFnZSBmcm9tICcuL2NvcmUvc3RvcmFnZS9nbG9iYWxzdG9yYWdlJztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBBbmFseXRpY3NFdmVudCBmcm9tICcuL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcblxuLyoqXG4gKiBUaGUgbWFpbiBBbnN3ZXJzIGludGVyZmFjZVxuICovXG5jbGFzcyBBbnN3ZXJzIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIGlmICghQW5zd2Vycy5zZXRJbnN0YW5jZSh0aGlzKSkge1xuICAgICAgcmV0dXJuIEFuc3dlcnMuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgQ29tcG9uZW50IGJhc2UgY2xhc3MgZm9yIGN1c3RvbVxuICAgICAqIGNvbXBvbmVudHMgdG8gZXh0ZW5kXG4gICAgICovXG4gICAgdGhpcy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSBvZiB0aGUgcmVuZGVyZXIgdG8gdXNlIGZvciB0aGUgY29tcG9uZW50c1xuICAgICAqIFRoaXMgaXMgcHJvdmlkZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uLlxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVycy5IYW5kbGViYXJzKCk7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IG1hbmFnZXJcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50TWFuYWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbXBvbmVudHMgPSBDT01QT05FTlRfTUFOQUdFUjtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb3JlIGFwaVxuICAgICAqIEB0eXBlIHtDb3JlfVxuICAgICAqL1xuICAgIHRoaXMuY29yZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGludm9rZSBvbmNlIHRoZSBsaWJyYXJ5IGlzIHJlYWR5LlxuICAgICAqIFR5cGljYWxseSBmaXJlZCBhZnRlciB0ZW1wbGF0ZXMgYXJlIGZldGNoZWQgZnJvbSBzZXJ2ZXIgZm9yIHJlbmRlcmluZy5cbiAgICAgKi9cbiAgICB0aGlzLl9vblJlYWR5ID0gZnVuY3Rpb24gKCkge307XG4gIH1cblxuICBzdGF0aWMgc2V0SW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIGluaXQgKGNvbmZpZykge1xuICAgIGNvbnN0IGdsb2JhbFN0b3JhZ2UgPSBuZXcgR2xvYmFsU3RvcmFnZSgpO1xuICAgIGNvbnN0IHBlcnNpc3RlbnRTdG9yYWdlID0gbmV3IFBlcnNpc3RlbnRTdG9yYWdlKHtcbiAgICAgIHVwZGF0ZUxpc3RlbmVyOiBjb25maWcub25TdGF0ZUNoYW5nZSxcbiAgICAgIHJlc2V0TGlzdGVuZXI6IGRhdGEgPT4gZ2xvYmFsU3RvcmFnZS5zZXRBbGwoZGF0YSlcbiAgICB9KTtcbiAgICBnbG9iYWxTdG9yYWdlLnNldEFsbChwZXJzaXN0ZW50U3RvcmFnZS5nZXRBbGwoKSk7XG5cbiAgICB0aGlzLmNvcmUgPSBuZXcgQ29yZSh7XG4gICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgICBnbG9iYWxTdG9yYWdlOiBnbG9iYWxTdG9yYWdlLFxuICAgICAgcGVyc2lzdGVudFN0b3JhZ2U6IHBlcnNpc3RlbnRTdG9yYWdlLFxuICAgICAgZXhwZXJpZW5jZUtleTogY29uZmlnLmV4cGVyaWVuY2VLZXksXG4gICAgICBmaWVsZEZvcm1hdHRlcnM6IGNvbmZpZy5maWVsZEZvcm1hdHRlcnMsXG4gICAgICBleHBlcmllbmNlVmVyc2lvbjogY29uZmlnLmV4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgbG9jYWxlOiBjb25maWcubG9jYWxlXG4gICAgfSk7XG5cbiAgICBpZiAoY29uZmlnLm9uU3RhdGVDaGFuZ2UgJiYgdHlwZW9mIGNvbmZpZy5vblN0YXRlQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25maWcub25TdGF0ZUNoYW5nZShwZXJzaXN0ZW50U3RvcmFnZS5nZXRBbGwoKSwgd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSkpO1xuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1xuICAgICAgLnNldENvcmUodGhpcy5jb3JlKVxuICAgICAgLnNldFJlbmRlcmVyKHRoaXMucmVuZGVyZXIpO1xuXG4gICAgaWYgKGNvbmZpZy5idXNpbmVzc0lkKSB7XG4gICAgICBjb25zdCByZXBvcnRlciA9IG5ldyBBbmFseXRpY3NSZXBvcnRlcihcbiAgICAgICAgdGhpcy5jb3JlLFxuICAgICAgICBjb25maWcuZXhwZXJpZW5jZUtleSxcbiAgICAgICAgY29uZmlnLmV4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgICBjb25maWcuYnVzaW5lc3NJZCxcbiAgICAgICAgY29uZmlnLmFuYWx5dGljc09wdGlvbnMpO1xuXG4gICAgICB0aGlzLmNvbXBvbmVudHMuc2V0QW5hbHl0aWNzUmVwb3J0ZXIocmVwb3J0ZXIpO1xuICAgICAgaW5pdFNjcm9sbExpc3RlbmVyKHJlcG9ydGVyKTtcbiAgICB9XG5cbiAgICB0aGlzLl9vblJlYWR5ID0gY29uZmlnLm9uUmVhZHkgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICBpZiAoY29uZmlnLnVzZVRlbXBsYXRlcyA9PT0gZmFsc2UgfHwgY29uZmlnLnRlbXBsYXRlQnVuZGxlKSB7XG4gICAgICBpZiAoY29uZmlnLnRlbXBsYXRlQnVuZGxlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5pdChjb25maWcudGVtcGxhdGVCdW5kbGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9vblJlYWR5KCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBUZW1wbGF0ZXMgYXJlIGN1cnJlbnRseSBkb3dubG9hZGVkIHNlcGFyYXRlbHkgZnJvbSB0aGUgQ09SRSBhbmQgVUkgYnVuZGxlLlxuICAgIC8vIEZ1dHVyZSBlbmhhbmNlbWVudCBpcyB0byBzaGlwIHRoZSBjb21wb25lbnRzIHdpdGggdGVtcGxhdGVzIGluIGEgc2VwYXJhdGUgYnVuZGxlLlxuICAgIHRoaXMudGVtcGxhdGVzID0gbmV3IFRlbXBsYXRlTG9hZGVyKHtcbiAgICAgIHRlbXBsYXRlVXJsOiBjb25maWcudGVtcGxhdGVVcmxcbiAgICB9KS5vbkxvYWRlZCgodGVtcGxhdGVzKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmluaXQodGVtcGxhdGVzKTtcblxuICAgICAgdGhpcy5fb25SZWFkeSgpO1xuICAgIH0pO1xuXG4gICAgLy8gUmVwb3J0IGVycm9ycyB0byBjb25zb2xlICYgc2VydmVyXG4gICAgdGhpcy5fZXJyb3JSZXBvcnRlciA9IG5ldyBFcnJvclJlcG9ydGVyKHtcbiAgICAgIGFwaUtleTogY29uZmlnLmFwaUtleSxcbiAgICAgIGV4cGVyaWVuY2VLZXk6IGNvbmZpZy5leHBlcmllbmNlS2V5LFxuICAgICAgZXhwZXJpZW5jZVZlcnNpb246IGNvbmZpZy5leHBlcmllbmNlVmVyc2lvbixcbiAgICAgIHByaW50VmVyYm9zZTogY29uZmlnLmRlYnVnLFxuICAgICAgc2VuZFRvU2VydmVyOiAhY29uZmlnLnN1cHByZXNzRXJyb3JSZXBvcnRzXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRvbVJlYWR5IChjYikge1xuICAgIERPTS5vblJlYWR5KGNiKTtcbiAgfVxuXG4gIG9uUmVhZHkgKGNiKSB7XG4gICAgdGhpcy5fb25SZWFkeSA9IGNiO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgY3VzdG9tIGNvbXBvbmVudCB0eXBlIHNvIGl0IGNhbiBiZSBjcmVhdGVkIHZpYVxuICAgKiBhZGRDb21wb25lbnQgYW5kIHVzZWQgYXMgYSBjaGlsZCBjb21wb25lbnRcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudENsYXNzXG4gICAqL1xuICByZWdpc3RlckNvbXBvbmVudFR5cGUgKGNvbXBvbmVudENsYXNzKSB7XG4gICAgdGhpcy5jb21wb25lbnRzLnJlZ2lzdGVyKGNvbXBvbmVudENsYXNzKTtcbiAgfVxuXG4gIGFkZENvbXBvbmVudCAodHlwZSwgb3B0cykge1xuICAgIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdHMgPSB7XG4gICAgICAgIGNvbnRhaW5lcjogb3B0c1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5jb21wb25lbnRzLmNyZWF0ZSh0eXBlLCBvcHRzKS5tb3VudCgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoJ0ZhaWxlZCB0byBhZGQgY29tcG9uZW50JywgdHlwZSwgZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY29tcG9uZW50IC0gYW5kIGFsbCBvZiBpdHMgY2hpbGRyZW4gLSB3aXRoIHRoZSBnaXZlbiBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjb21wb25lbnQgdG8gcmVtb3ZlXG4gICAqL1xuICByZW1vdmVDb21wb25lbnQgKG5hbWUpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMucmVtb3ZlQnlOYW1lKG5hbWUpO1xuICB9XG5cbiAgY3JlYXRlQ29tcG9uZW50IChvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50cy5jcmVhdGUoJ0NvbXBvbmVudCcsIG9wdHMpLm1vdW50KCk7XG4gIH1cblxuICByZWdpc3RlckhlbHBlciAobmFtZSwgY2IpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlZ2lzdGVySGVscGVyKG5hbWUsIGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIHNjcm9sbCBldmVudCBsaXN0ZW5lciB0byBzZW5kIGFuYWx5dGljcyBldmVudHNcbiAqIHdoZW4gdGhlIHVzZXIgc2Nyb2xscyB0byB0aGUgYm90dG9tLiBEZWJvdW5jZXMgc2Nyb2xsIGV2ZW50cyBzb1xuICogdGhleSBhcmUgcHJvY2Vzc2VkIGFmdGVyIHRoZSB1c2VyIHN0b3BzIHNjcm9sbGluZ1xuICovXG5mdW5jdGlvbiBpbml0U2Nyb2xsTGlzdGVuZXIgKHJlcG9ydGVyKSB7XG4gIGNvbnN0IERFQk9VTkNFX1RJTUUgPSAxMDA7XG4gIGxldCB0aW1lb3V0ID0gbnVsbDtcblxuICBjb25zdCBzZW5kRXZlbnQgPSAoKSA9PiB7XG4gICAgaWYgKCh3aW5kb3cuaW5uZXJIZWlnaHQgKyB3aW5kb3cucGFnZVlPZmZzZXQpID49IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBBbmFseXRpY3NFdmVudCgnU0NST0xMX1RPX0JPVFRPTV9PRl9QQUdFJyk7XG4gICAgICByZXBvcnRlci5yZXBvcnQoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KHNlbmRFdmVudCwgREVCT1VOQ0VfVElNRSk7XG4gIH0pO1xufVxuXG5jb25zdCBBTlNXRVJTID0gbmV3IEFuc3dlcnMoKTtcbmV4cG9ydCBkZWZhdWx0IEFOU1dFUlM7XG4iXSwibmFtZXMiOlsiTWV0aG9kcyIsIkdFVCIsIlBPU1QiLCJQVVQiLCJERUxFVEUiLCJIdHRwUmVxdWVzdGVyIiwidXJsIiwiZGF0YSIsIm9wdHMiLCJyZXF1ZXN0IiwiZW5jb2RlUGFyYW1zIiwiT2JqZWN0IiwiYXNzaWduIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjcmVkZW50aWFscyIsInVuZGVmaW5lZCIsIm1ldGhvZCIsImZldGNoIiwibmF2aWdhdG9yIiwic2VuZEJlYWNvbiIsInBhcmFtcyIsImhhc1BhcmFtIiwiaW5kZXhPZiIsInNlYXJjaFF1ZXJ5Iiwia2V5IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiTElCX1ZFUlNJT04iLCJBUElfQkFTRV9VUkwiLCJDT01QSUxFRF9URU1QTEFURVNfVVJMIiwiQU5BTFlUSUNTX0JBU0VfVVJMIiwiU2VhcmNoUGFyYW1zIiwiX3BhcmFtcyIsIndpbmRvdyIsIlVSTFNlYXJjaFBhcmFtcyIsInBhcnNlIiwic2VhcmNoIiwic2xpY2UiLCJlbmNvZGVkUGFyYW1zIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwia2V5VmFsIiwiZGVjb2RlIiwicXVlcnkiLCJTdHJpbmciLCJuYW1lIiwidmFsdWUiLCJzdHJpbmciLCJwdXNoIiwiZW5jb2RlIiwiam9pbiIsImVudHJpZXMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwibWF0Y2giLCJBcGlSZXF1ZXN0IiwiX3JlcXVlc3RlciIsIl9iYXNlVXJsIiwiYmFzZVVybCIsIl9lbmRwb2ludCIsImVuZHBvaW50IiwiX2FwaUtleSIsImFwaUtleSIsIl92ZXJzaW9uIiwidmVyc2lvbiIsImdldCIsInBvc3QiLCJiYXNlUGFyYW1zIiwidXJsUGFyYW1zIiwibG9jYXRpb24iLCJzdWJzdHJpbmciLCJoYXMiLCJrZXlzIiwiZm9yRWFjaCIsIkFuc3dlcnNCYXNlRXJyb3IiLCJlcnJvckNvZGUiLCJtZXNzYWdlIiwiYm91bmRhcnkiLCJjYXVzZWRCeSIsImVycm9yTWVzc2FnZSIsInJlcG9ydGVkIiwiZnJvbSIsInRvU3RyaW5nIiwiYnVpbHRpbkVycm9yIiwiZXJyb3IiLCJBbnN3ZXJzQmFzaWNFcnJvciIsInN0YWNrIiwiRXJyb3IiLCJBbnN3ZXJzQ29tcG9uZW50RXJyb3IiLCJjb21wb25lbnQiLCJBbnN3ZXJzRW5kcG9pbnRFcnJvciIsIkFuc3dlcnNDb3JlRXJyb3IiLCJBbnN3ZXJzU3RvcmFnZUVycm9yIiwic3RvcmFnZUtleSIsIkFuc3dlcnNBbmFseXRpY3NFcnJvciIsImV2ZW50IiwiU2VhcmNoQXBpIiwiY29uZmlnIiwiZXhwZXJpZW5jZUtleSIsIl9leHBlcmllbmNlS2V5IiwiX2V4cGVyaWVuY2VWZXJzaW9uIiwiZXhwZXJpZW5jZVZlcnNpb24iLCJsb2NhbGUiLCJfbG9jYWxlIiwidmVydGljYWxLZXkiLCJpbnB1dCIsImZpbHRlciIsImZhY2V0RmlsdGVyIiwibGltaXQiLCJvZmZzZXQiLCJpZCIsImdlb2xvY2F0aW9uIiwiaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQiLCJza2lwU3BlbGxDaGVjayIsInF1ZXJ5VHJpZ2dlciIsImxhdCIsImxuZyIsInJhZGl1cyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJxdWVyeVN0cmluZyIsIkhpZ2hsaWdodGVkVmFsdWUiLCJzaG9ydFZhbHVlIiwibWF0Y2hlZFN1YnN0cmluZ3MiLCJfc29ydE1hdGNoZWRTdWJzdHJpbmdzIiwiX2J1aWxkSGlnaGxpZ2h0ZWRWYWx1ZSIsImludmVydGVkU3Vic3RyaW5ncyIsIl9nZXRJbnZlcnRlZFN1YnN0cmluZ3MiLCJzb3J0IiwiYSIsImIiLCJ2YWx1ZUxlbmd0aCIsIm5leHRPZmZzZXQiLCJ2YWwiLCJoaWdobGlnaHRlZFN1YnN0cmluZ3MiLCJoaWdobGlnaHRlZFZhbHVlIiwibmV4dFN0YXJ0IiwiaiIsInN0YXJ0IiwiTnVtYmVyIiwiZW5kIiwiQXV0b0NvbXBsZXRlRGF0YSIsInNlY3Rpb25zIiwicXVlcnlJZCIsImZyZWV6ZSIsIm1hcCIsInMiLCJsYWJlbCIsInJlc3VsdHMiLCJyIiwiQXV0b0NvbXBsZXRlUmVzdWx0IiwiZ2V0SW52ZXJ0ZWQiLCJBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIiLCJtb2R1bGVJZCIsIkF1dG9Db21wbGV0ZUFwaSIsImJhcktleSIsInNlYXJjaFBhcmFtZXRlcnMiLCJ2ZXJ0aWNhbCIsInVuaXZlcnNhbCIsIlF1ZXN0aW9uQW5zd2VyQXBpIiwicXVlc3Rpb24iLCJlbnRpdHlJZCIsInNpdGUiLCJlbWFpbCIsInF1ZXN0aW9uVGV4dCIsInF1ZXN0aW9uRGVzY3JpcHRpb24iLCJxdWVzdGlvbkxhbmd1YWdlIiwiUFJFX1NFQVJDSCIsIlNFQVJDSF9MT0FESU5HIiwiU0VBUkNIX0NPTVBMRVRFIiwiUmVzdWx0IiwiX3JhdyIsInJhdyIsIl9mb3JtYXR0ZWQiLCJmb3JtYXR0ZWQiLCJvcmRpbmFsIiwidGl0bGUiLCJkZXRhaWxzIiwibGluayIsInN1YnRpdGxlIiwibW9kaWZpZXIiLCJiaWdEYXRlIiwiaW1hZ2UiLCJjYWxsc1RvQWN0aW9uIiwiY29sbGFwc2VkIiwiUmVzdWx0RmFjdG9yeSIsInJlc3VsdHNEYXRhIiwiZm9ybWF0dGVycyIsInZlcnRpY2FsSWQiLCJzb3VyY2UiLCJmb3JtYXR0ZWREYXRhIiwiZnJvbUdvb2dsZUN1c3RvbVNlYXJjaEVuZ2luZSIsImZyb21CaW5nQ3VzdG9tU2VhcmNoRW5naW5lIiwiZnJvbVplbmRlc2tTZWFyY2hFbmdpbmUiLCJmcm9tQWxnb2xpYVNlYXJjaEVuZ2luZSIsImZyb21HZW5lcmljIiwiaW5kZXgiLCJkZXNjcmlwdGlvbiIsInRydW5jYXRlIiwid2Vic2l0ZSIsImh0bWxUaXRsZSIsImh0bWxTbmlwcGV0Iiwic25pcHBldCIsImh0bWxfdXJsIiwib2JqZWN0SUQiLCJzdHIiLCJ0cmFpbGluZyIsInNlcCIsIndvcmRzIiwibWF4IiwidHJ1bmNhdGVkIiwid29yZCIsIlNlY3Rpb24iLCJzZWFyY2hTdGF0ZSIsIlNlYXJjaFN0YXRlcyIsInZlcnRpY2FsQ29uZmlnSWQiLCJyZXN1bHRzQ291bnQiLCJlbmNvZGVkU3RhdGUiLCJhcHBsaWVkUXVlcnlGaWx0ZXJzIiwiQXBwbGllZFF1ZXJ5RmlsdGVyIiwiZmFjZXRzIiwicGFyc2VNYXAiLCJ2ZXJ0aWNhbFVSTCIsIm1hcE1hcmtlcnMiLCJjZW50ZXJDb29yZGluYXRlcyIsInJlc3VsdCIsInlleHREaXNwbGF5Q29vcmRpbmF0ZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiaXRlbSIsIm1vZHVsZXMiLCJ1cmxzIiwiQXJyYXkiLCJpc0FycmF5IiwiYXBwbGllZFF1ZXJ5RmlsdGVyIiwiZGlzcGxheUtleSIsImRpc3BsYXlWYWx1ZSIsImZpbHRlcnMiLCJVbml2ZXJzYWxSZXN1bHRzIiwiRGlyZWN0QW5zd2VyIiwiZGlyZWN0QW5zd2VyIiwiYW5zd2VyIiwicmVsYXRlZEl0ZW0iLCJmaWVsZEFwaU5hbWUiLCJmaWVsZFZhbHVlcyIsIk5hdmlnYXRpb24iLCJ0YWJPcmRlciIsIm5hdiIsIlZlcnRpY2FsUmVzdWx0cyIsIm1lcmdlZCIsImNvbmNhdCIsIlNwZWxsQ2hlY2siLCJjb3JyZWN0ZWRRdWVyeSIsImNvcnJlY3RlZFF1ZXJ5RGlzcGxheSIsInR5cGUiLCJzaG91bGRTaG93Iiwib3JpZ2luYWxRdWVyeSIsIk5BVklHQVRJT04iLCJVTklWRVJTQUxfUkVTVUxUUyIsIlZFUlRJQ0FMX1JFU1VMVFMiLCJBVVRPQ09NUExFVEUiLCJESVJFQ1RfQU5TV0VSIiwiRklMVEVSIiwiUVVFUlkiLCJRVUVSWV9JRCIsIkZBQ0VUX0ZJTFRFUiIsIkRZTkFNSUNfRklMVEVSUyIsIlNFQVJDSF9MSU1JVCIsIlBBUkFNUyIsIkdFT0xPQ0FUSU9OIiwiSU5URU5UUyIsIlFVRVNUSU9OX1NVQk1JU1NJT04iLCJTUEVMTF9DSEVDSyIsIkR5bmFtaWNGaWx0ZXJzIiwiZHluYW1pY0ZpbHRlcnMiLCJmIiwiZmllbGRJZCIsIm9wdGlvbnMiLCJvIiwiY291bnRMYWJlbCIsInNlbGVjdGVkIiwiU2VhcmNoSW50ZW50cyIsImludGVudHMiLCJuZWFyTWUiLCJpbmNsdWRlcyIsIlNlYXJjaERhdGFUcmFuc2Zvcm1lciIsIlN0b3JhZ2VLZXlzIiwic2VhcmNoSW50ZW50cyIsInNwZWxsQ2hlY2siLCJRdWVzdGlvblN1Ym1pc3Npb24iLCJlcnJvcnMiLCJwcml2YWN5UG9saWN5IiwicXVlc3Rpb25TdWJtaXR0ZWQiLCJDb3JlIiwiX2ZpZWxkRm9ybWF0dGVycyIsImZpZWxkRm9ybWF0dGVycyIsImdsb2JhbFN0b3JhZ2UiLCJwZXJzaXN0ZW50U3RvcmFnZSIsIl9zZWFyY2hlciIsIl9hdXRvQ29tcGxldGUiLCJfcXVlc3Rpb25BbnN3ZXIiLCJhcHBlbmQiLCJzZXQiLCJzZWFyY2hMb2FkaW5nIiwidmVydGljYWxTZWFyY2giLCJnZXRTdGF0ZSIsIl9pc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCIsInRyYW5zZm9ybVZlcnRpY2FsIiwibWVyZ2VkUmVzdWx0cyIsInVuaXZlcnNhbFNlYXJjaCIsInRyYW5zZm9ybSIsIm5hbWVzcGFjZSIsInF1ZXJ5VW5pdmVyc2FsIiwicXVlcnlWZXJ0aWNhbCIsInF1ZXJ5RmlsdGVyIiwic3VibWl0UXVlc3Rpb24iLCJzdWJtaXR0ZWQiLCJldnQiLCJjYiIsIm9uIiwiQ29tcG9uZW50TWFuYWdlciIsInNldEluc3RhbmNlIiwiZ2V0SW5zdGFuY2UiLCJfY29tcG9uZW50UmVnaXN0cnkiLCJfYWN0aXZlQ29tcG9uZW50cyIsIl9jb3JlIiwiX3JlbmRlcmVyIiwiX2FuYWx5dGljc1JlcG9ydGVyIiwicmVuZGVyZXIiLCJjb3JlIiwicmVwb3J0ZXIiLCJjb21wb25lbnRDbGF6eiIsImNvbXBvbmVudFR5cGUiLCJzeXN0ZW1PcHRzIiwiYW5hbHl0aWNzUmVwb3J0ZXIiLCJjb21wb25lbnRNYW5hZ2VyIiwiY29tcG9uZW50Q2xhc3MiLCJhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQiLCJzb21lIiwiYyIsImlzVHdpbiIsImNvbnN0cnVjdG9yIiwiaW5pdCIsInNldFN0YXRlIiwib2ZmIiwiZmluZEluZGV4Iiwic3BsaWNlIiwiZmluZCIsInJlbW92ZSIsIkRPTSIsImVtcHR5IiwiX2NvbnRhaW5lciIsImluc3RhbmNlIiwiUmVuZGVyZXIiLCJ0ZW1wbGF0ZSIsIkhhbmRsZWJhcnNSZW5kZXJlciIsInRlbXBsYXRlcyIsIl9oYW5kbGViYXJzIiwiX2hiIiwiX3RlbXBsYXRlcyIsIl9yZWdpc3RlckN1c3RvbUhlbHBlcnMiLCJyZWdpc3RlckhlbHBlciIsImNvbXBpbGUiLCJ0ZW1wbGF0ZU5hbWUiLCJlIiwiYXJnMSIsImFyZzIiLCJmbiIsImludmVyc2UiLCJwaG9uZU51bWJlclN0cmluZyIsImNsZWFuZWQiLCJpbnRsQ29kZSIsImFyZ3MiLCJhcmd1bWVudHMiLCJyb290IiwidiIsIlJlbmRlcmVycyIsIlNPWSIsIkhhbmRsZWJhcnMiLCJkb2N1bWVudCIsImQiLCJwIiwiaHRtbCIsImNvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJmcmFnIiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJhcHBlbmRDaGlsZCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsInBhcmVudCIsInNlbGVjdG9yIiwiSFRNTEVsZW1lbnQiLCJXaW5kb3ciLCJIVE1MRG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsInJlYWR5U3RhdGUiLCJlbCIsIm9wdHNfZGF0YSIsIm5vZGUiLCJwcm9wcyIsImFkZENsYXNzIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiY2xhc3NOYW1lIiwiY2xhc3NlcyIsImxlbiIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsInN0eWxlcyIsInByb3AiLCJzdHlsZSIsImF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJhdHRycyIsInNldHRpbmdzIiwiQ3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmNlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImN0eHQiLCJ0YXJnZXQiLCJpc0VxdWFsTm9kZSIsIm1hdGNoZXMiLCJwYXJlbnROb2RlIiwiRXZlbnRFbWl0dGVyIiwiX2xpc3RlbmVycyIsImxpc3RlbmVycyIsImtlZXAiLCJTdGF0ZSIsIl9zdGF0ZSIsIm9wdFZhbCIsIl9zZXQiLCJlbWl0Iiwib3B0UHJvcCIsIkFuYWx5dGljc0V2ZW50IiwiZXZlbnRUeXBlIiwidG9VcHBlckNhc2UiLCJBbmFseXRpY3NSZXBvcnRlciIsImJ1c2luZXNzSWQiLCJnbG9iYWxPcHRpb25zIiwiX2J1c2luZXNzSWQiLCJfZ2xvYmFsT3B0aW9ucyIsInNldFF1ZXJ5SWQiLCJhZGRPcHRpb25zIiwiYmVhY29uIiwidG9BcGlFdmVudCIsIk1vZHVsZURhdGEiLCJfaWQiLCJfaGlzdG9yeSIsIl9kYXRhIiwiY2FwdHVyZVByZXZpb3VzIiwic2hpZnQiLCJwcmV2aW91cyIsIl9wcmV2aW91cyIsInBvcCIsIkdsb2JhbFN0b3JhZ2UiLCJfbW9kdWxlRGF0YUNvbnRhaW5lciIsIl9mdXR1cmVMaXN0ZW5lcnMiLCJfaW5pdERhdGFDb250YWluZXIiLCJfYXBwbHlGdXR1cmVMaXN0ZW5lcnMiLCJkYXRhS2V5Iiwic3RhcnRzV2l0aCIsIm1vZHVsZURhdGEiLCJmdXR1cmVzIiwiZnV0dXJlIiwiQ29tcG9uZW50Iiwic3lzdGVtQ29uZmlnIiwiX2NvbmZpZyIsIl90eXBlIiwiX3BhcmVudENvbnRhaW5lciIsInBhcmVudENvbnRhaW5lciIsIl9jaGlsZHJlbiIsInN0YXRlIiwiX2FuYWx5dGljc09wdGlvbnMiLCJhbmFseXRpY3NPcHRpb25zIiwiY3JlYXRlRWwiLCJfY2xhc3NOYW1lIiwiX3JlbmRlciIsInJlbmRlciIsIl90ZW1wbGF0ZSIsIl90ZW1wbGF0ZU5hbWUiLCJkZWZhdWx0VGVtcGxhdGVOYW1lIiwiX2lzTW91bnRlZCIsInRyYW5zZm9ybURhdGEiLCJvbkNyZWF0ZSIsIm9uQ3JlYXRlT3ZlcnJpZGUiLCJiaW5kIiwib25Nb3VudCIsIm9uTW91bnRPdmVycmlkZSIsIm9uVXBkYXRlIiwib25VcGRhdGVPdmVycmlkZSIsInVzZXJPbkNyZWF0ZSIsInVzZXJPbk1vdW50IiwidXNlck9uVXBkYXRlIiwidW5Nb3VudCIsIm1vdW50IiwibmV3U3RhdGUiLCJjaGlsZENvbXBvbmVudCIsImNyZWF0ZSIsIl9wYXJlbnRPcHRzIiwiY2hpbGQiLCJvblVuTW91bnQiLCJiZWZvcmVNb3VudCIsImFzSlNPTiIsImRvbUNvbXBvbmVudHMiLCJxdWVyeUFsbCIsIl9jcmVhdGVTdWJjb21wb25lbnQiLCJkb21Ib29rcyIsIl9jcmVhdGVBbmFseXRpY3NIb29rIiwiYmVmb3JlUmVuZGVyIiwiYWZ0ZXJSZW5kZXIiLCJkb21Db21wb25lbnQiLCJkYXRhc2V0IiwiaXNDb21wb25lbnRNb3VudGVkIiwiY2hpbGREYXRhIiwiYWRkQ2hpbGQiLCJyZXZlcnNlIiwiaXNBbmFseXRpY3NBdHRhY2hlZCIsImV2ZW50dHlwZSIsImV2ZW50bGFiZWwiLCJldmVudG9wdGlvbnMiLCJyZXBvcnQiLCJSRVNJWkVfREVCT1VOQ0UiLCJUYWIiLCJjb25maWdJZCIsImlzRmlyc3QiLCJpc0FjdGl2ZSIsInRhYnNDb25maWciLCJ0YWJzIiwidGFiIiwiTmF2aWdhdGlvbkNvbXBvbmVudCIsImRyb3Bkb3duTGFiZWwiLCJkcm9wZG93bkljb24iLCJfdGFicyIsIl90YWJPcmRlciIsImdldERlZmF1bHRUYWJPcmRlciIsImdldFVybFBhcmFtcyIsIl9uYXZCcmVha3BvaW50cyIsIl9kZWJvdW5jZVRpbWVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlZml0TmF2IiwiY2hlY2tPdXRzaWRlQ2xpY2siLCJ0b2dnbGVNb3JlRHJvcGRvd24iLCJtb3JlQnV0dG9uIiwibWFpbkxpbmtzIiwiY29sbGFwc2VkTGlua3MiLCJuYXZXaWR0aCIsImNvbnRhaW5zIiwib2Zmc2V0V2lkdGgiLCJudW1CcmVha3BvaW50cyIsIm1haW5MaW5rc1dpZHRoIiwiY2hpbGRyZW4iLCJsYXN0TGluayIsInByZXBlbmQiLCJmaXJzdExpbmsiLCJjbG9zZU1vcmVEcm9wZG93biIsInRvZ2dsZSIsImNsb3Nlc3QiLCJtZXJnZVRhYk9yZGVyIiwiZ2VuZXJhdGVUYWJVcmwiLCJ1bnNoaWZ0Iiwib3RoZXJUYWJPcmRlciIsInRhYkNvbmZpZyIsIkZpbHRlciIsInJlc3BvbnNlRmlsdGVyIiwiZ3JvdXBzIiwiZ3JvdXBGaWx0ZXJzIiwiZmllbGQiLCJvciIsImFuZCIsIl9mcm9tTWF0Y2hlciIsIm1pbiIsIm1hdGNoZXIiLCJTZWFyY2hDb21wb25lbnQiLCJfYmFyS2V5IiwiX3ZlcnRpY2FsS2V5IiwiX2Zvcm1FbCIsImZvcm1TZWxlY3RvciIsIl9pbnB1dEVsIiwiaW5wdXRFbCIsImxhYmVsVGV4dCIsInN1Ym1pdFRleHQiLCJzdWJtaXRJY29uIiwicHJvbXB0SGVhZGVyIiwiYXV0b0ZvY3VzIiwiY2xlYXJCdXR0b24iLCJhdXRvY29tcGxldGVPbkxvYWQiLCJyZWRpcmVjdFVybCIsIl9pc1R3aW4iLCJxIiwiX3NlYXJjaENvb2xkb3duIiwic2VhcmNoQ29vbGRvd24iLCJfcHJvbXB0Rm9yTG9jYXRpb24iLCJwcm9tcHRGb3JMb2NhdGlvbiIsIkJvb2xlYW4iLCJfc2hvd0NsZWFyQnV0dG9uIiwic2V0UXVlcnkiLCJpbml0TG9jYXRpb25Qcm9tcHQiLCJmb2N1cyIsImluaXRTZWFyY2giLCJpbml0QXV0b0NvbXBsZXRlIiwiaW5pdENsZWFyQnV0dG9uIiwiX2F1dG9jb21wbGV0ZSIsImJ1dHRvbiIsImludGVudCIsImdldEN1cnJlbnRQb3NpdGlvbiIsInBvc2l0aW9uIiwiY29vcmRzIiwiYWNjdXJhY3kiLCJmb3JtIiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiYmx1ciIsImlucHV0U2VsZWN0b3IiLCJvblN1Ym1pdCIsInRyaWdnZXIiLCJfdGhyb3R0bGVkIiwiYWxsRmlsdGVycyIsImdldEFsbCIsInRvdGFsRmlsdGVyIiwiZ2V0QWN0aXZlQ29tcG9uZW50Iiwic2hvd0NsZWFyQnV0dG9uIiwiRmlsdGVyU2VhcmNoQ29tcG9uZW50IiwiaW5wdXRLZXkiLCJfc3RvcmVPbkNoYW5nZSIsInN0b3JlT25DaGFuZ2UiLCJzZWFyY2hUZXh0IiwiX2J1aWxkU2VhcmNoUGFyYW1ldGVycyIsImlzRmlsdGVyU2VhcmNoIiwib3JpZ2luYWxGaWx0ZXIiLCJmcm9tUmVzcG9uc2UiLCJzZXRGaWx0ZXIiLCJzZWFyY2hQYXJhbWV0ZXJDb25maWdzIiwic2VjdGlvbmVkIiwiZmllbGRzIiwiX2J1aWxkRmllbGRzIiwiZmllbGRDb25maWdzIiwiZmMiLCJmZXRjaEVudGl0aWVzIiwiS2V5cyIsIkJBQ0tTUEFDRSIsIlRBQiIsIkVOVEVSIiwiU0hJRlQiLCJDVFJMIiwiQUxUIiwiRVNDQVBFIiwiTEVGVCIsIlJJR0hUIiwiVVAiLCJET1dOIiwiTEVGVF9PU19LRVkiLCJSSUdIVF9PU19LRVkiLCJTRUxFQ1RfS0VZIiwiQXV0b0NvbXBsZXRlQ29tcG9uZW50IiwiX2F1dG9jb21wbGV0ZUVscyIsImF1dG9Db21wbGV0ZUVscyIsIl9vcmlnaW5hbFF1ZXJ5IiwiX3NlY3Rpb25JbmRleCIsIl9yZXN1bHRJbmRleCIsIl9hdXRvRm9jdXMiLCJfb25TdWJtaXQiLCJfc2VhcmNoUGFyYW1ldGVycyIsImhhc1Jlc3VsdHMiLCJzZWN0aW9uSW5kZXgiLCJyZXN1bHRJbmRleCIsInF1ZXJ5SW5wdXQiLCJhdHRyaWJ1dGVzIiwiYXV0b2NvbXBsZXRlIiwiYXV0b2NvcnJlY3QiLCJzcGVsbGNoZWNrIiwiY2xvc2UiLCJyZXNldCIsImF1dG9Db21wbGV0ZSIsImhhbmRsZU5hdmlnYXRlUmVzdWx0cyIsImtleUNvZGUiLCJoYW5kbGVTdWJtaXRSZXN1bHQiLCJkZWxlZ2F0ZSIsInVwZGF0ZVF1ZXJ5IiwiaGFuZGxlVHlwaW5nIiwidXBkYXRlU3RhdGUiLCJvcHRWYWx1ZSIsInF1ZXJ5RWwiLCJpZ25vcmVkS2V5cyIsImF1dG9Db21wbGV0ZUZpbHRlciIsImF1dG9Db21wbGV0ZVZlcnRpY2FsIiwiYXV0b0NvbXBsZXRlVW5pdmVyc2FsIiwiU3BlbGxDaGVja0NvbXBvbmVudCIsImNvcnJlY3RlZFF1ZXJ5VXJsIiwiX2J1aWxkUmVkaXJlY3RRdWVyeVVybCIsImhlbHBUZXh0IiwiX2dldEhlbHBUZXh0IiwidG9Mb3dlckNhc2UiLCJGYWNldCIsImZsYXRGaWx0ZXJzIiwiZmxhdE1hcCIsIiRvciIsIkZpbHRlckJveENvbXBvbmVudCIsIl9maWx0ZXJDb25maWdzIiwiX3NlYXJjaE9uQ2hhbmdlIiwic2VhcmNoT25DaGFuZ2UiLCJfYXBwbHlCdXR0b25TZWxlY3RvciIsImFwcGx5QnV0dG9uU2VsZWN0b3IiLCJfZmlsdGVyQ29tcG9uZW50cyIsIl9maWx0ZXJzIiwiX2lzRHluYW1pYyIsImlzRHluYW1pYyIsImZpbHRlckNvbmZpZ3MiLCJzaG93QXBwbHlCdXR0b24iLCJvbkNoYW5nZSIsIm9uRmlsdGVyQ2hhbmdlIiwiZ2V0RmlsdGVyIiwiX3NhdmVGaWx0ZXJzVG9TdG9yYWdlIiwiX3NlYXJjaCIsInZhbGlkRmlsdGVycyIsImNvbWJpbmVkRmlsdGVyIiwiZnJvbUZpbHRlcnMiLCJzZXRGYWNldEZpbHRlciIsIlNVUFBPUlRFRF9DT05UUk9MUyIsIkZpbHRlck9wdGlvbnNDb21wb25lbnQiLCJjb250cm9sIiwicHJldmlvdXNPcHRpb25zIiwic2VsZWN0ZWRPcHRpb25zIiwiX29wdGlvbnMiLCJfY29udHJvbCIsIl9vcHRpb25TZWxlY3RvciIsIm9wdGlvblNlbGVjdG9yIiwiX29uQ2hhbmdlIiwiX2xhYmVsIiwiX3VwZGF0ZU9wdGlvbiIsInBhcnNlSW50IiwiY2hlY2tlZCIsIl9idWlsZEZpbHRlciIsImVsZW1lbnRzIiwiX2FwcGx5RmlsdGVyIiwiZXF1YWwiLCJncm91cCIsIlJhbmdlRmlsdGVyQ29tcG9uZW50IiwiX2ZpZWxkIiwibWluVmFsIiwibWF4VmFsIiwiX3JhbmdlIiwiaW5pdGlhbE1pbiIsImluaXRpYWxNYXgiLCJfdGl0bGUiLCJfbWluTGFiZWwiLCJtaW5MYWJlbCIsIl9tYXhMYWJlbCIsIm1heExhYmVsIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsIl91cGRhdGVSYW5nZSIsImluY2x1c2l2ZVJhbmdlIiwiRGF0ZVJhbmdlRmlsdGVyQ29tcG9uZW50IiwiX2lzRXhjbHVzaXZlIiwiaXNFeGNsdXNpdmUiLCJ0b2RheSIsIkRhdGUiLCJ0b2RheVN0cmluZyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJwYWRTdGFydCIsImdldERhdGUiLCJtaW5EYXRlIiwibWF4RGF0ZSIsIl9kYXRlIiwiZGF0ZU1pbiIsImRhdGVNYXgiLCJkYXRlIiwiZXhjbHVzaXZlUmFuZ2UiLCJEeW5hbWljRmlsdGVyc0NvbXBvbmVudCIsIl9maWVsZENvbnRyb2xzIiwiZmllbGRDb250cm9scyIsIl9maWx0ZXJib3giLCJlbmFibGVEeW5hbWljRmlsdGVycyIsIk1FVEVSU19QRVJfTUlMRSIsIkRFRkFVTFRfQ09ORklHIiwiZ2VvQnV0dG9uSWNvbiIsImdlb0J1dHRvblRleHQiLCJlbmFibGVkVGV4dCIsImxvYWRpbmdUZXh0IiwiZXJyb3JUZXh0IiwiYnV0dG9uU2VsZWN0b3IiLCJHZW9Mb2NhdGlvbkNvbXBvbmVudCIsInBsYWNlaG9sZGVyIiwiX2VuYWJsZWQiLCJnZW9Mb2FkaW5nIiwiZ2VvRXJyb3IiLCJnZW9FbmFibGVkIiwiZ2VvVmFsdWUiLCJnZW9QbGFjZWhvbGRlciIsIl9pbml0QXV0b0NvbXBsZXRlIiwiX3RvZ2dsZUdlb0ZpbHRlciIsIl9zYXZlRGF0YVRvU3RvcmFnZSIsIk1hdGgiLCJFdmVudFR5cGVzIiwiVEhVTUJTX1VQIiwiVEhVTUJTX0RPV04iLCJEaXJlY3RBbnN3ZXJDb21wb25lbnQiLCJmb3JtRWwiLCJfdGh1bWJzVXBTZWxlY3RvciIsInRodW1ic1VwU2VsZWN0b3IiLCJfdGh1bWJzRG93blNlbGVjdG9yIiwidGh1bWJzRG93blNlbGVjdG9yIiwiX3ZpZXdEZXRhaWxzVGV4dCIsInZpZXdEZXRhaWxzVGV4dCIsImhhc1N0YXRlIiwiY2hlY2tlZFZhbHVlIiwicmVwb3J0UXVhbGl0eSIsImV2ZW50T3B0aW9ucyIsInNlYXJjaGVyIiwiY3RhTGFiZWwiLCJpc0dvb2QiLCJSZXN1bHRzSXRlbUNvbXBvbmVudCIsIl92ZXJ0aWNhbENvbmZpZ0lkIiwiX2lzVW5pdmVyc2FsIiwiaXNVbml2ZXJzYWwiLCJMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IiwiRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCIsIlBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IiwiTWFwUHJvdmlkZXIiLCJfem9vbSIsInpvb20iLCJfZGVmYXVsdFBvc2l0aW9uIiwiZGVmYXVsdFBvc2l0aW9uIiwiX3Nob3dFbXB0eU1hcCIsInNob3dFbXB0eU1hcCIsIl9tYXAiLCJfaXNMb2FkZWQiLCJfb25QaW5DbGljayIsIm9uUGluQ2xpY2siLCJfb25Mb2FkZWQiLCJvbkxvYWRlZCIsIl9waW5Db25maWciLCJwaW4iLCJERUZBVUxUX1BJTl9DT05GSUciLCJfY29sbGFwc2VQaW5zIiwiY29sbGFwc2VQaW5zIiwiaXNMb2FkZWQiLCJtYXBEYXRhIiwibWFya2VycyIsImxvY2F0aW9uVG9JdGVtIiwibSIsImNvbGxhcHNlZE1hcmtlcnMiLCJjb2xsYXBzZWRNYXJrZXIiLCJpY29uIiwiYW5jaG9yIiwic3ZnIiwic2NhbGVkU2l6ZSIsImxhYmVsVHlwZSIsIkdvb2dsZU1hcFByb3ZpZGVyIiwiX2NsaWVudElkIiwiY2xpZW50SWQiLCJfc2lnbmF0dXJlIiwic2lnbmF0dXJlIiwiaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscyIsIm9uTG9hZCIsInNjcmlwdCIsIm9ubG9hZCIsImFzeW5jIiwic3JjIiwiZ2VuZXJhdGVDcmVkZW50aWFscyIsImdvb2dsZSIsIm1hcHMiLCJNYXAiLCJib3VuZHMiLCJMYXRMbmdCb3VuZHMiLCJfY29sbGFwc2VNYXJrZXJzIiwiZ29vZ2xlTWFwTWFya2VyQ29uZmlncyIsIkdvb2dsZU1hcE1hcmtlckNvbmZpZyIsIm1hcmtlciIsIk1hcmtlciIsImFkZExpc3RlbmVyIiwiZXh0ZW5kIiwiZml0Qm91bmRzIiwic2V0Q2VudGVyIiwiTGF0TG5nIiwic2VyaWFsaXplZE1hcmtlcnMiLCJwaW5Db25maWciLCJwaW5Db25maWdPYmoiLCJQb2ludCIsIngiLCJ5IiwiU2l6ZSIsInciLCJoIiwiTWFwQm94TWFwUHJvdmlkZXIiLCJtYXBib3hnbCIsImFjY2Vzc1Rva2VuIiwiY3NzIiwicmVsIiwiY2VudGVyIiwiZ2V0Q2VudGVyTWFya2VyIiwibWFwYm94TWFwTWFya2VyQ29uZmlncyIsIk1hcEJveE1hcmtlckNvbmZpZyIsIndyYXBwZXIiLCJMbmdMYXQiLCJzZXRMbmdMYXQiLCJhZGRUbyIsImdldEVsZW1lbnQiLCJtYXBDZW50ZXIiLCJzdGF0aWNNYXBQaW4iLCJQcm92aWRlclR5cGVzIiwiTWFwQ29tcG9uZW50IiwiX21hcFByb3ZpZGVyIiwibWFwUHJvdmlkZXIiLCJnZXRQcm92aWRlckluc3RhbmNlIiwibG9hZEpTIiwiUmVzdWx0VHlwZSIsIkVWRU5UIiwiTE9DQVRJT04iLCJQRU9QTEUiLCJSZXN1bHRzQ29tcG9uZW50IiwiX2l0ZW1Db25maWciLCJnbG9iYWwiLCJyZW5kZXJJdGVtIiwiaXRlbVRlbXBsYXRlIiwic2V0U2VhcmNoTGltaXQiLCJjb25maWd1cmVJdGVtIiwiX3VuaXZlcnNhbFVybCIsInVuaXZlcnNhbFVybCIsImlzUHJlU2VhcmNoIiwiaXNTZWFyY2hMb2FkaW5nIiwiaXNTZWFyY2hDb21wbGV0ZSIsImluY2x1ZGVNYXAiLCJtYXBDb25maWciLCJzaG93Tm9SZXN1bHRzIiwic2V0SXRlbVJlbmRlciIsInNldEl0ZW1UZW1wbGF0ZSIsImNsYXp6IiwiZ2V0SXRlbUNvbXBvbmVudCIsImNvbXAiLCJuZXdPcHRzIiwiZ2xvYmFsQ29uZmlnIiwiaXRlbUNvbmZpZyIsImhhc0dsb2JhbFJlbmRlciIsImhhc0dsb2JhbFRlbXBsYXRlIiwic2V0UmVuZGVyIiwic2V0VGVtcGxhdGUiLCJBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50IiwiX3NlbGVjdG9yQmFzZSIsInNlbGVjdG9yQmFzZSIsImNvbGxhcHNlZENsYXNzIiwiYWNjb3JkaW9uRWxzIiwiYWNjb3JkaW9uRWwiLCJ0b2dnbGVFbCIsInRvZ2dsZVNlbGVjdG9yIiwiY29udGVudEVsIiwiYm9keVNlbGVjdG9yIiwiY2hhbmdlSGVpZ2h0IiwiaGFuZGxlQ2xpY2siLCJ3cmFwcGVyRWwiLCJpc0NvbGxhcHNlZCIsInRhcmdldEVsIiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiYnVpbGRTZWxlY3RvciIsIlVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQiLCJfbGltaXQiLCJjaGlsZE9wdHMiLCJnZXRDaGlsZENvbmZpZyIsInVzZUFjY29yZGlvbiIsImRlZmF1bHRDb25maWciLCJRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQiLCJ2YWxpZGF0ZUNvbmZpZyIsImJpbmRBbmFseXRpY3MiLCJiaW5kRm9ybVN1Ym1pdCIsInF1ZXN0aW9uVGV4dEVsIiwiZm9ybURhdGEiLCJ2YWxpZGF0ZVJlcXVpcmVkIiwibGFuZ3VhZ2UiLCJpbnB1dEZpZWxkcyIsIm9iaiIsIlNWR0ljb24iLCJwYXRoIiwiY29tcGxleENvbnRlbnRzIiwidmlld0JveCIsImNvbnRlbnRzIiwicGF0aERlZmluaXRpb24iLCJpY29uc0FycmF5IiwidGh1bWJJY29uIiwicmVjZWlwdEljb24iLCJwYW50aGVvbkljb24iLCJtaWNJY29uIiwiZGlyZWN0aW9uc0ljb24iLCJjYWxlbmRhckljb24iLCJjYWxsb3V0SWNvbiIsImluZm9JY29uIiwiYnJpZWZjYXNlSWNvbiIsImthYm9iSWNvbiIsInBlcnNvbkljb24iLCJtYWduaWZ5aW5nR2xhc3NJY29uIiwib2ZmaWNlSWNvbiIsImxpbmtJY29uIiwid2luZG93SWNvbiIsInBob25lSWNvbiIsInRhZ0ljb24iLCJkb2N1bWVudEljb24iLCJjaGV2cm9uSWNvbiIsInN1cHBvcnRJY29uIiwieWV4dEljb24iLCJwaW5JY29uIiwiZ2Vhckljb24iLCJsaWdodEJ1bGJJY29uIiwiSWNvbnMiLCJtYXJrdXAiLCJzdGFySWNvbiIsIkljb25Db21wb25lbnQiLCJpY29uTmFtZSIsImN1c3RvbUljb24iLCJpY29uVXJsIiwiQ09NUE9ORU5UX01BTkFHRVIiLCJyZWdpc3RlciIsIlRlbXBsYXRlTG9hZGVyIiwiX3RlbXBsYXRlVXJsIiwidGVtcGxhdGVVcmwiLCJfaW5pdCIsImZldGNoVGVtcGxhdGVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbmVycm9yIiwiY29uc29sZSIsImxvZyIsIkVycm9yUmVwb3J0ZXIiLCJwcmludFZlcmJvc2UiLCJzZW5kVG9TZXJ2ZXIiLCJlcnIiLCJwcmludEVycm9yIiwidG9Kc29uIiwiUGVyc2lzdGVudFN0b3JhZ2UiLCJfaGlzdG9yeVRpbWVyIiwiX3VwZGF0ZUxpc3RlbmVyIiwidXBkYXRlTGlzdGVuZXIiLCJfcmVzZXRMaXN0ZW5lciIsInJlc2V0TGlzdGVuZXIiLCJvbnBvcHN0YXRlIiwiX2NhbGxMaXN0ZW5lciIsIm5ld0RhdGEiLCJfdXBkYXRlSGlzdG9yeSIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJsaXN0ZW5lciIsImFsbFBhcmFtcyIsIkFuc3dlcnMiLCJjb21wb25lbnRzIiwiX29uUmVhZHkiLCJvblN0YXRlQ2hhbmdlIiwic2V0QWxsIiwic3Vic3RyIiwic2V0Q29yZSIsInNldFJlbmRlcmVyIiwic2V0QW5hbHl0aWNzUmVwb3J0ZXIiLCJpbml0U2Nyb2xsTGlzdGVuZXIiLCJvblJlYWR5IiwidXNlVGVtcGxhdGVzIiwidGVtcGxhdGVCdW5kbGUiLCJfZXJyb3JSZXBvcnRlciIsImRlYnVnIiwic3VwcHJlc3NFcnJvclJlcG9ydHMiLCJyZW1vdmVCeU5hbWUiLCJERUJPVU5DRV9USU1FIiwidGltZW91dCIsInNlbmRFdmVudCIsImlubmVySGVpZ2h0IiwicGFnZVlPZmZzZXQiLCJBTlNXRVJTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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