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
        } // Instantiate our new component and keep track of it


        var component = new this._componentRegistry[componentType](opts, systemOpts).init(opts);

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
        domComponents.forEach(function (c) {
          return _this2._createSubcomponent(c, _this2._state.get());
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
            DOM.trigger(_this5._formEl, 'submit');
          }
        });
      }
    }, {
      key: "search",
      value: function search(query) {
        var _this6 = this;

        // Don't search if we recently searched, or if there's no query for universal search
        if (this._throttled || !query && !this._verticalKey) {
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
      key: "_onMount",

      /**
       * overrides _onMount to add bindings to change the height on click
       * @returns {AccordionResultsComponent}
       * @override
       */
      value: function _onMount() {
        var _this2 = this;

        _get(_getPrototypeOf(AccordionResultsComponent.prototype), "_onMount", this).call(this);

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2Vycy11bWQuanMiLCJzb3VyY2VzIjpbInNyYy9jb3JlL2h0dHAvaHR0cHJlcXVlc3Rlci5qcyIsInNyYy9jb3JlL2NvbnN0YW50cy5qcyIsInNyYy91aS9kb20vc2VhcmNocGFyYW1zLmpzIiwic3JjL2NvcmUvaHR0cC9hcGlyZXF1ZXN0LmpzIiwic3JjL2NvcmUvZXJyb3JzL2Vycm9ycy5qcyIsInNyYy9jb3JlL3NlYXJjaC9zZWFyY2hhcGkuanMiLCJzcmMvY29yZS9tb2RlbHMvaGlnaGxpZ2h0ZWR2YWx1ZS5qcyIsInNyYy9jb3JlL21vZGVscy9hdXRvY29tcGxldGVkYXRhLmpzIiwic3JjL2NvcmUvc2VhcmNoL2F1dG9jb21wbGV0ZWRhdGF0cmFuc2Zvcm1lci5qcyIsInNyYy9jb3JlL3NlYXJjaC9hdXRvY29tcGxldGVhcGkuanMiLCJzcmMvY29yZS9zZWFyY2gvcXVlc3Rpb25hbnN3ZXJhcGkuanMiLCJzcmMvY29yZS9zdG9yYWdlL3NlYXJjaHN0YXRlcy5qcyIsInNyYy9jb3JlL21vZGVscy9yZXN1bHQuanMiLCJzcmMvY29yZS9tb2RlbHMvcmVzdWx0ZmFjdG9yeS5qcyIsInNyYy9jb3JlL21vZGVscy9zZWN0aW9uLmpzIiwic3JjL2NvcmUvbW9kZWxzL3VuaXZlcnNhbHJlc3VsdHMuanMiLCJzcmMvY29yZS9tb2RlbHMvZGlyZWN0YW5zd2VyLmpzIiwic3JjL2NvcmUvbW9kZWxzL25hdmlnYXRpb24uanMiLCJzcmMvY29yZS9tb2RlbHMvdmVydGljYWxyZXN1bHRzLmpzIiwic3JjL2NvcmUvbW9kZWxzL3NwZWxsY2hlY2suanMiLCJzcmMvY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzLmpzIiwic3JjL2NvcmUvbW9kZWxzL2R5bmFtaWNmaWx0ZXJzLmpzIiwic3JjL2NvcmUvbW9kZWxzL3NlYXJjaGludGVudHMuanMiLCJzcmMvY29yZS9zZWFyY2gvc2VhcmNoZGF0YXRyYW5zZm9ybWVyLmpzIiwic3JjL2NvcmUvbW9kZWxzL3F1ZXN0aW9uc3VibWlzc2lvbi5qcyIsInNyYy9jb3JlL2NvcmUuanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnRtYW5hZ2VyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9yZW5kZXJlci5qcyIsInNyYy91aS9yZW5kZXJpbmcvaGFuZGxlYmFyc3JlbmRlcmVyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9jb25zdC5qcyIsInNyYy91aS9kb20vZG9tLmpzIiwic3JjL2NvcmUvZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL3N0YXRlLmpzIiwic3JjL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50LmpzIiwic3JjL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc3JlcG9ydGVyLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9tb2R1bGVkYXRhLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9nbG9iYWxzdG9yYWdlLmpzIiwic3JjL2NvcmUvaW5kZXguanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb25jb21wb25lbnQuanMiLCJzcmMvY29yZS9tb2RlbHMvZmlsdGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3NlYXJjaC9maWx0ZXJzZWFyY2hjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9zZWFyY2gvYXV0b2NvbXBsZXRlY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL3NwZWxsY2hlY2tjb21wb25lbnQuanMiLCJzcmMvY29yZS9tb2RlbHMvZmFjZXQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcmJveGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyb3B0aW9uc2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcnMvcmFuZ2VmaWx0ZXJjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2RhdGVyYW5nZWZpbHRlcmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcnMvZHluYW1pY2ZpbHRlcnNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2dlb2xvY2F0aW9uY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9kaXJlY3RhbnN3ZXJjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9wZW9wbGVyZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9wcm92aWRlcnMvbWFwcHJvdmlkZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvcHJvdmlkZXJzL2dvb2dsZW1hcHByb3ZpZGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL3Byb3ZpZGVycy9tYXBib3htYXBwcm92aWRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9tYXBjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL2FjY29yZGlvbnJlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9xdWVzdGlvbnMvcXVlc3Rpb25zdWJtaXNzaW9uY29tcG9uZW50LmpzIiwic3JjL3VpL2ljb25zL2ljb24uanMiLCJzcmMvdWkvaWNvbnMvdGh1bWIuanMiLCJzcmMvdWkvaWNvbnMvcmVjZWlwdC5qcyIsInNyYy91aS9pY29ucy9wYW50aGVvbi5qcyIsInNyYy91aS9pY29ucy9taWMuanMiLCJzcmMvdWkvaWNvbnMvZGlyZWN0aW9ucy5qcyIsInNyYy91aS9pY29ucy9jYWxlbmRhci5qcyIsInNyYy91aS9pY29ucy9jYWxsb3V0LmpzIiwic3JjL3VpL2ljb25zL2luZm8uanMiLCJzcmMvdWkvaWNvbnMvYnJpZWZjYXNlLmpzIiwic3JjL3VpL2ljb25zL2thYm9iLmpzIiwic3JjL3VpL2ljb25zL3BlcnNvbi5qcyIsInNyYy91aS9pY29ucy9tYWduaWZ5aW5nX2dsYXNzLmpzIiwic3JjL3VpL2ljb25zL29mZmljZS5qcyIsInNyYy91aS9pY29ucy9saW5rLmpzIiwic3JjL3VpL2ljb25zL3dpbmRvdy5qcyIsInNyYy91aS9pY29ucy9waG9uZS5qcyIsInNyYy91aS9pY29ucy90YWcuanMiLCJzcmMvdWkvaWNvbnMvZG9jdW1lbnQuanMiLCJzcmMvdWkvaWNvbnMvY2hldnJvbi5qcyIsInNyYy91aS9pY29ucy9zdXBwb3J0LmpzIiwic3JjL3VpL2ljb25zL3lleHQuanMiLCJzcmMvdWkvaWNvbnMvcGluLmpzIiwic3JjL3VpL2ljb25zL2dlYXIuanMiLCJzcmMvdWkvaWNvbnMvbGlnaHRfYnVsYi5qcyIsInNyYy91aS9pY29ucy9zdGFyLmpzIiwic3JjL3VpL2ljb25zL2Nsb3NlLmpzIiwic3JjL3VpL2ljb25zL2luZGV4LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvaWNvbnMvaWNvbmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2NvbnN0LmpzIiwic3JjL3VpL3JlbmRlcmluZy90ZW1wbGF0ZWxvYWRlci5qcyIsInNyYy91aS9pbmRleC5qcyIsInNyYy9jb3JlL2Vycm9ycy9lcnJvcnJlcG9ydGVyLmpzIiwic3JjL3VpL3N0b3JhZ2UvcGVyc2lzdGVudHN0b3JhZ2UuanMiLCJzcmMvYW5zd2Vycy11bWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBtb2R1bGUgSHR0cFJlcXVlc3RlciAqL1xuXG4vKiBnbG9iYWwgZmV0Y2ggKi9cblxuLyoqXG4gKiBUeXBlcyBvZiBIVFRQIHJlcXVlc3RzXG4gKi9cbmNvbnN0IE1ldGhvZHMgPSB7XG4gIEdFVDogJ2dldCcsXG4gIFBPU1Q6ICdwb3N0JyxcbiAgUFVUOiAncHV0JyxcbiAgREVMRVRFOiAnZGVsZXRlJ1xufTtcblxuLyoqXG4gKiBIdHRwUmVxdWVzdGVyIGlzIGEgd3JhcHBlciBhcm91bmQgdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiBvZiBBSkFYXG4gKiByZWxhdGVkIG1hdHRlcnMuIEl0J3MgdXNlZCB0byBtYWtlIGFsbCB0eXBlcyBvZiBuZXR3b3JrIHJlcXVlc3RzXG4gKiBhbmQgZXhwb3NlcyBhIHByb21pc2UgaW50ZXJmYWNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwUmVxdWVzdGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIEdFVCBIVFRQIHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHByb3ZpZGUgKGdldHMgZW5jb2RlZCBpbnRvIHRoZSBVUkwpXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIENvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAqL1xuICBnZXQgKHVybCwgZGF0YSwgb3B0cykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoTWV0aG9kcy5HRVQsIHRoaXMuZW5jb2RlUGFyYW1zKHVybCwgZGF0YSksIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIFBPU1QgSFRUUCByZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBwcm92aWRlIChnZXRzIGVuY29kZWQgaW50byB0aGUgVVJMKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBDb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgKi9cbiAgcG9zdCAodXJsLCBkYXRhLCBvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcbiAgICAgIE1ldGhvZHMuUE9TVCxcbiAgICAgIHVybCxcbiAgICAgIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgY3JlZGVudGlhbHM6IHVuZGVmaW5lZFxuICAgICAgfSwgb3B0cylcbiAgICApO1xuICB9XG5cbiAgcmVxdWVzdCAobWV0aG9kLCB1cmwsIG9wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIG1ldGhvZCxcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcbiAgICB9LCBvcHRzKSk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIGJlYWNvbiB0byB0aGUgcHJvdmlkZWQgdXJsIHdoaWNoIHdpbGwgc2VuZCBhIG5vbi1ibG9ja2luZyByZXF1ZXN0XG4gICAqIHRvIHRoZSBzZXJ2ZXIgdGhhdCBpcyBndWFyYW50ZWVkIHRvIHNlbmQgYmVmb3JlIHBhZ2UgbG9hZC4gTm8gcmVzcG9uc2UgaXMgcmV0dXJuZWQsXG4gICAqIHNvIGJlYWNvbnMgYXJlIHByaW1hcmlseSB1c2VkIGZvciBhbmFseXRpY3MgcmVwb3J0aW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gc2VuZCB0aGUgYmVhY29uIHRvXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIFRoZSBkYXRhIHBheWxvYWQgdG8gc2VuZCBpbiB0aGUgYmVhY29uXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bGx5IHF1ZXVlZFxuICAgKi9cbiAgYmVhY29uICh1cmwsIGRhdGEpIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLnNlbmRCZWFjb24odXJsLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIH1cblxuICBlbmNvZGVQYXJhbXMgKHVybCwgcGFyYW1zKSB7XG4gICAgbGV0IGhhc1BhcmFtID0gdXJsLmluZGV4T2YoJz8nKSA+IC0xO1xuXG4gICAgbGV0IHNlYXJjaFF1ZXJ5ID0gJyc7XG4gICAgZm9yIChsZXQga2V5IGluIHBhcmFtcykge1xuICAgICAgaWYgKCFoYXNQYXJhbSkge1xuICAgICAgICBoYXNQYXJhbSA9IHRydWU7XG4gICAgICAgIHNlYXJjaFF1ZXJ5ICs9ICc/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlYXJjaFF1ZXJ5ICs9ICcmJztcbiAgICAgIH1cblxuICAgICAgc2VhcmNoUXVlcnkgKz0ga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybCArIHNlYXJjaFF1ZXJ5O1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG4vKiogVGhlIGN1cnJlbnQgbGliIHZlcnNpb24sIHJlcG9ydGVkIHdpdGggZXJyb3JzIGFuZCBhbmFseXRpY3MgKi9cbmV4cG9ydCBjb25zdCBMSUJfVkVSU0lPTiA9ICd2MC45LjAnO1xuXG4vKiogVGhlIGJhc2UgdXJsIGZvciB0aGUgYXBpIGJhY2tlbmQgKi9cbmV4cG9ydCBjb25zdCBBUElfQkFTRV9VUkwgPSAnaHR0cHM6Ly9saXZlYXBpLnlleHQuY29tJztcblxuLyoqIFRoZSBkZWZhdWx0IHVybCBmb3IgY29tcGlsZWQgY29tcG9uZW50IHRlbXBsYXRlcyAqL1xuZXhwb3J0IGNvbnN0IENPTVBJTEVEX1RFTVBMQVRFU19VUkwgPSBgaHR0cHM6Ly9hc3NldHMuc2l0ZXNjZG4ubmV0L2Fuc3dlcnMvJHtMSUJfVkVSU0lPTn0vYW5zd2Vyc3RlbXBsYXRlcy5jb21waWxlZC5taW4uanNgO1xuXG4vKiogVGhlIGJhc2UgdXJsIGZvciB0aGUgYW5hbHl0aWNzIGJhY2tlbmQgICovXG5leHBvcnQgY29uc3QgQU5BTFlUSUNTX0JBU0VfVVJMID0gJ2h0dHBzOi8vcmVhbHRpbWVhbmFseXRpY3MueWV4dC5jb20nO1xuIiwiLyoqIEBtb2R1bGUgU2VhcmNoUGFyYW1zICovXG5cbi8qIGdsb2JhbCB3aW5kb3cgKi9cblxuLyoqXG4gKiBTZWFyY2hQYXJhbXMgaXMgYSBjbGFzcyB0byBnZXQgdGhlIHNlYXJjaCBwYXJhbXMgaW4gYSBVUkwuXG4gKiBJdCBpcyBhIHJlcGxhY2VtZW50IGZvciBVUkwuc2VhcmNoUGFyYW1zIGFuZCBVUkxTZWFyY2hQYXJhbXMgZm9yIGJyb3dzZXJzIGxpa2UgSUUxMVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hQYXJhbXMge1xuICBjb25zdHJ1Y3RvciAodXJsKSB7XG4gICAgLyoqXG4gICAgICogTWFwcGluZyBvZiBhbGwgcXVlcnkgcGFyYW1ldGVycyBpbiB0aGUgZ2l2ZW4gdXJsLCBxdWVyeSBwYXJhbSAtPiB2YWx1ZVxuICAgICAqIE9ubHkgdXNlZCBpZiBVUkxTZWFyY2hQYXJhbXMgZG9lcyBub3QgZXhpc3QgaW4gdGhlIHdpbmRvd1xuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9wYXJhbXMgPSB7fTtcblxuICAgIGlmICh3aW5kb3cgJiYgd2luZG93LlVSTFNlYXJjaFBhcmFtcykge1xuICAgICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXModXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGFyYW1zID0gdGhpcy5wYXJzZSh1cmwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJzZSBjcmVhdGVzIGEgbWFwcGluZyBvZiBhbGwgcXVlcnkgcGFyYW1zIGluIGEgZ2l2ZW4gdXJsXG4gICAqIFRoZSBxdWVyeSBwYXJhbSB2YWx1ZXMgYXJlIGRlY29kZWQgYmVmb3JlIGJlaW5nIHB1dCBpbiB0aGUgbWFwXG4gICAqIFRocmVlIHR5cGVzIG9mIGlucHV0IGFyZSBzdXBwb3J0ZWRcbiAgICogICAoMSkgZnVsbCBVUkwgZS5nLiBodHRwOi8vd3d3LnlleHQuY29tLz9xPWhlbGxvXG4gICAqICAgKDIpIHBhcmFtcyB3aXRoID8gZS5nLiA/cT1oZWxsb1xuICAgKiAgICgxKSBwYXJhbXMgd2l0aG91dCA/IGUuZy4gcT1oZWxsb1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmxcbiAgICogQHJldHVybnMge09iamVjdH0gbWFwcGluZyBmcm9tIHF1ZXJ5IHBhcmFtIC0+IHZhbHVlIHdoZXJlIHZhbHVlIGlzICcnIGlmIG5vIHZhbHVlIGlzIHByb3ZpZGVkXG4gICAqL1xuICBwYXJzZSAodXJsKSB7XG4gICAgbGV0IHBhcmFtcyA9IHt9O1xuICAgIGxldCBzZWFyY2ggPSB1cmw7XG5cbiAgICBpZiAoc2VhcmNoID09PSAnJykge1xuICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9XG5cbiAgICAvLyBOb3JtYWxpemUgYWxsIHVybCBpbnB1dHMgdG8gc3RyaW5nIG9mIHF1ZXJ5IHBhcmFtcyBzZXBhcmF0ZWQgYnkgJlxuICAgIGlmICh1cmwuaW5kZXhPZignPycpID4gLTEpIHtcbiAgICAgIHNlYXJjaCA9IHVybC5zbGljZSh1cmwuaW5kZXhPZignPycpICsgMSk7XG4gICAgfVxuXG4gICAgY29uc3QgZW5jb2RlZFBhcmFtcyA9IHNlYXJjaC5zcGxpdCgnJicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5jb2RlZFBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5VmFsID0gZW5jb2RlZFBhcmFtc1tpXS5zcGxpdCgnPScpO1xuICAgICAgaWYgKGtleVZhbC5sZW5ndGggPiAxKSB7XG4gICAgICAgIHBhcmFtc1trZXlWYWxbMF1dID0gU2VhcmNoUGFyYW1zLmRlY29kZShrZXlWYWxbMV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zW2tleVZhbFswXV0gPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gcXVlcnkgcGFyYW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBxdWVyeSBwYXJhbSBrZXkgdG8gZ2V0IHRoZSB2YWx1ZSBvZlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IHBhcmFtIHZhbHVlLCBudWxsIG90aGVyd2lzZVxuICAgKi9cbiAgZ2V0IChxdWVyeSkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5fcGFyYW1zW1N0cmluZyhxdWVyeSldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9wYXJhbXNbcXVlcnldO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldCBjaGFuZ2VzIHRoZSB2YWx1ZSBvZiBhIGdpdmVuIHF1ZXJ5IHBhcmFtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIHRoZSBxdWVyeSBwYXJhbSBrZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIHRoZSB2YWx1ZSBvZiB0aGUgcXVlcnkgcGFyYW0gdXBkYXRlIHdpdGhcbiAgICovXG4gIHNldCAobmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLl9wYXJhbXNbU3RyaW5nKG5hbWUpXSA9IFN0cmluZyh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogaGFzIGNoZWNrcyB0byBzZWUgaWYgdGhlIGdpdmVuIHF1ZXJ5IHBhcmFtIGtleSBleGlzdHMgaW4gdGhlIHBhcmFtcyBvYmplY3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBxdWVyeSBwYXJhbSB0byBjaGVja1xuICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBxdWVyeSBwYXJhbSBpcyBpbiB0aGUgcGFyYW1zIG9iamVjdCwgZmFsc2Ugby93XG4gICAqL1xuICBoYXMgKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHF1ZXJ5IGluIHRoaXMuX3BhcmFtcztcbiAgfVxuXG4gIC8qKlxuICAgKiB0b1N0cmluZyByZXR1cm5zIGEgdXJsIHdpdGggYWxsIHRoZSBxdWVyeSBwYXJhbXMgaW4gdGhlIHBhcmFtcyBvYmplY3QgKHdpdGhvdXQgYSA/KVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1N0cmluZyAoKSB7XG4gICAgbGV0IHN0cmluZyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9wYXJhbXMpIHtcbiAgICAgIHN0cmluZy5wdXNoKGAke2tleX09JHtTZWFyY2hQYXJhbXMuZW5jb2RlKHRoaXMuX3BhcmFtc1trZXldKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZy5qb2luKCcmJyk7XG4gIH1cblxuICBlbnRyaWVzICgpIHtcbiAgICBsZXQgZW50cmllcyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9wYXJhbXMpIHtcbiAgICAgIGVudHJpZXMucHVzaChba2V5LCB0aGlzLl9wYXJhbXNba2V5XV0pO1xuICAgIH1cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIC8qKlxuICAgKiBkZWNvZGUgcmV0dXJucyB0aGUgZGVjb2RlZCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyB0byBkZWNvZGVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGRlY29kZSAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHJpbmcucmVwbGFjZSgvWyArXS9nLCAnJTIwJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIGRlY29kZSByZXR1cm5zIHRoZSBlbmNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBzdHJpbmcgKGUuZy4gKyAtPiAlMkIpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyB0byBlbmNvZGVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGVuY29kZSAoc3RyaW5nKSB7XG4gICAgbGV0IHJlcGxhY2UgPSB7XG4gICAgICAnISc6ICclMjEnLFxuICAgICAgXCInXCI6ICclMjcnLFxuICAgICAgJygnOiAnJTI4JyxcbiAgICAgICcpJzogJyUyOScsXG4gICAgICAnJTIwJzogJysnXG4gICAgfTtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZykucmVwbGFjZSgvWyEnKCldfCUyMC9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiByZXBsYWNlW21hdGNoXTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXBpUmVxdWVzdCAqL1xuXG5pbXBvcnQgSHR0cFJlcXVlc3RlciBmcm9tICcuL2h0dHByZXF1ZXN0ZXInO1xuaW1wb3J0IHsgQVBJX0JBU0VfVVJMLCBMSUJfVkVSU0lPTiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uL3VpL2RvbS9zZWFyY2hwYXJhbXMnOyAvLyBUT0RPIGlkZWFsbHkgdGhpcyB3b3VsZCBiZSBwYXNzZWQgaW4gYXMgYSBwYXJhbVxuXG4vKipcbiAqIEFwaVJlcXVlc3QgaXMgdGhlIGJhc2UgY2xhc3MgZm9yIGFsbCBBUEkgcmVxdWVzdHMuXG4gKiBJdCBkZWZpbmVzIGFsbCBvZiB0aGUgY29yZSBwcm9wZXJ0aWVzIHJlcXVpcmVkIHRvIG1ha2UgYSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaVJlcXVlc3Qge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3Rpb24gdXNlZCBmb3IgbWFraW5nIG5ldHdvcmsgcmVxdWVzdCBhbmQgaGFuZGxpbmcgZXJyb3JzXG4gICAgICogQHR5cGUge0h0dHBSZXF1ZXN0ZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9yZXF1ZXN0ZXIgPSBuZXcgSHR0cFJlcXVlc3RlcigpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhc2VVcmwgdG8gdXNlIGZvciBtYWtpbmcgYSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Jhc2VVcmwgPSBvcHRzLmJhc2VVcmwgfHwgQVBJX0JBU0VfVVJMO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGVuZHBvaW50IHRvIHVzZSBpbiB0aGUgdXJsIChhcHBlbmRlZCB0byB0aGUge2Jhc2VVcmx9KVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9lbmRwb2ludCA9IG9wdHMuZW5kcG9pbnQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBpS2V5ID0gb3B0cy5hcGlLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBBUEkgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVyc2lvbiA9IG9wdHMudmVyc2lvbiB8fCAyMDE5MDEwMTtcblxuICAgIC8qKlxuICAgICAqIEFkZGl0aW9uYWwgZGF0YSBwYXJhbXMgdGhhdCBhcmUgc2VudCBhbG9uZyB3aXRoIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3BhcmFtcyA9IG9wdHMucGFyYW1zIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCBjcmVhdGVzIGEgbmV3IGBHRVRgIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGUgcmVxdWVzdCBjbGFzc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGdldCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3Rlci5nZXQodGhpcy5fYmFzZVVybCArIHRoaXMuX2VuZHBvaW50LCB0aGlzLnBhcmFtcyh0aGlzLl9wYXJhbXMpKTtcbiAgfVxuXG4gIHBvc3QgKG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdGVyLnBvc3QodGhpcy5fYmFzZVVybCArIHRoaXMuX2VuZHBvaW50LCB0aGlzLnBhcmFtcyh0aGlzLl9wYXJhbXMpLCBvcHRzKTtcbiAgfVxuXG4gIHBhcmFtcyAocGFyYW1zKSB7XG4gICAgdmFyIGJhc2VQYXJhbXMgPSB7XG4gICAgICAndic6IHRoaXMuX3ZlcnNpb24sXG4gICAgICAnYXBpX2tleSc6IHRoaXMuX2FwaUtleSxcbiAgICAgICdqc0xpYlZlcnNpb24nOiBMSUJfVkVSU0lPTlxuICAgIH07XG5cbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcblxuICAgIGlmICh1cmxQYXJhbXMuaGFzKCdiZXRhJykpIHtcbiAgICAgIGJhc2VQYXJhbXNbJ2JldGEnXSA9IHVybFBhcmFtcy5nZXQoJ2JldGEnKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYW55IHBhcmFtYXRlcnMgd2hvcyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC5cbiAgICAvL1xuICAgIC8vIE5PVEUoYmlsbHkpIFByb2JhYmx5IGJldHRlciB0byBiZSBleHBsaWNpdCBhYm91dCBob3cgdG8gaGFuZGxlIHRoaXMgYXQgdGhlIHJlcXVlc3QgYnVpbGRpbmcgbGV2ZWwsXG4gICAgLy8gYnV0IEkgY2FuJ3Qgc2VlIGFueSBjYXNlcyB3aGVyZSB3ZSdkIGV2ZXIgd2FudCB0byBzZW5kICd1bmRlZmluZWQnIGFzIGEgdmFsdWUgdG8gdGhlIHNlcnZlci5cbiAgICAvLyBTbyBpdCdzIHByb2JhYmx5IGZpbmUgdG8gJ2NsZWFuJyB0aGUgcGFyYW1zIG9iamVjdCBoZXJlXG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAocGFyYW1zW2tleV0gPT09IHVuZGVmaW5lZCB8fCBwYXJhbXNba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgcGFyYW1zW2tleV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihiYXNlUGFyYW1zLCBwYXJhbXMgfHwge30pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBFcnJvcnMgKi9cblxuLyoqXG4gKiBBbnN3ZXJzQmFzZUVycm9yIGlzIGFuIGV4dGVuc2lvbiBvZiB0aGUgYmFzZSBFcnJvciBvYmplY3QuXG4gKiBUaGlzIGlzIHRoZSBvYmplY3QgdGhhdCBpcyB1c2VkIHRvIHdoZW4gcmVwb3J0aW5nIHRvIHRoZSBzZXJ2ZXIuXG4gKiBAZXh0ZW5kcyBFcnJvclxuICpcbiAqIEVycm9yIGNvZGVzIGZhbGwgaW50byBvbmUgb2YgZm91ciBjYXRlZ29yaWVzOlxuICogMVhYIGVycm9yczogQmFzaWMgZXJyb3JzXG4gKiAyWFggZXJyb3JzOiBVSSBlcnJvcnNcbiAqIDNYWCBlcnJvcnM6IEVuZHBvaW50IGVycm9yc1xuICogNFhYIGVycm9yczogQ29yZSBlcnJvcnNcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNCYXNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChlcnJvckNvZGUsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMuZXJyb3JDb2RlID0gZXJyb3JDb2RlO1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLmJvdW5kYXJ5ID0gYm91bmRhcnk7XG4gICAgdGhpcy5yZXBvcnRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKGNhdXNlZEJ5KSB7XG4gICAgICB0aGlzLmNhdXNlZEJ5ID0gY2F1c2VkQnkgaW5zdGFuY2VvZiBBbnN3ZXJzQmFzZUVycm9yXG4gICAgICAgID8gY2F1c2VkQnlcbiAgICAgICAgOiBBbnN3ZXJzQmFzZUVycm9yLmZyb20oY2F1c2VkQnkpO1xuICAgIH1cbiAgfVxuXG4gIHRvSnNvbiAoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMpO1xuICB9XG5cbiAgdG9TdHJpbmcgKCkge1xuICAgIGxldCBzdHJpbmcgPSBgJHt0aGlzLmVycm9yTWVzc2FnZX0gKCR7dGhpcy5ib3VuZGFyeX0pYDtcbiAgICBpZiAodGhpcy5jYXVzZWRCeSkge1xuICAgICAgc3RyaW5nICs9IGBcXG4gIENhdXNlZCBCeTogJHt0aGlzLmNhdXNlZEJ5LnRvU3RyaW5nKCl9YDtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChidWlsdGluRXJyb3IsIGJvdW5kYXJ5KSB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoYnVpbHRpbkVycm9yLm1lc3NhZ2UsIGJvdW5kYXJ5KTtcbiAgICBlcnJvci5zdGFjayA9IGJ1aWx0aW5FcnJvci5zdGFjaztcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzQmFzaWNFcnJvciBpcyBhIHdyYXBwZXIgYXJvdW5kIGFsbCB0aGUgYnVpbHQtaW4gZXJyb3JzXG4gKiBlLmcuIHVuZGVmaW5lZCB2YXJpYWJsZXMsIGluY29ycmVjdCBzeW50YXgsIHR5cGVzLCBtaXNzaW5nIG1ldGhvZHMsIGV0Yy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNCYXNpY0Vycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigxMDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzVWlFcnJvciB1c2VkIGZvciB0aGluZ3MgbGlrZSBET00gZXJyb3JzLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc1VpRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDIwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNDb21wb25lbnRFcnJvciBpcyB1c2VkIGZvciBDb21wb25lbnQgb3JpZW50ZWQgZXJyb3JzXG4gKiBlLmcuIGZhaWx1cmUgdG8gcmVuZGVyLCBvciBjYXRjaGluZyB1bmtub3ducy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNDb21wb25lbnRFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgY29tcG9uZW50LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDIwMSwgbWVzc2FnZSwgY29tcG9uZW50LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzRW5kcG9pbnRFcnJvciByZXByZXNlbnRzIGFsbCBuZXR3b3JrIHJlbGF0ZWQgZXJyb3JzLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0VuZHBvaW50RXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDMwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNDb3JlRXJyb3IgcmVwcmVzZW50cyBlcnJvcnMgZm9yIHByZWNvbmRpdGlvbiBmYWlsdXJlcyBpbiB0aGUgY29yZSBsaWJyYXJ5XG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQ29yZUVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcig0MDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzU3RvcmFnZUVycm9yIHJlcHJlc2VudHMgc3RvcmFnZSByZWxhdGVkIGVycm9yc1xuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc1N0b3JhZ2VFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgc3RvcmFnZUtleSwgZGF0YSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcig0MDEsIG1lc3NhZ2UsICdTdG9yYWdlJywgY2F1c2VkQnkpO1xuICAgIHRoaXMuc3RvcmFnZUtleSA9IHN0b3JhZ2VLZXk7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNBbmFseXRpY3NFcnJvciBpcyB1c2VkIGZvciBlcnJvcnMgd2hlbiByZXBvcnRpbmcgYW5hbHl0aWNzXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGV2ZW50LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDQwMiwgbWVzc2FnZSwgJ0FuYWx5dGljcycsIGNhdXNlZEJ5KTtcbiAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaEFwaSAqL1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IHsgQW5zd2Vyc0Jhc2ljRXJyb3IsIEFuc3dlcnNDb3JlRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBTZWFyY2hBcGkgaXMgdGhlIEFQSSBmb3IgZG9pbmcgdmFyaW91cyB0eXBlcyBvZiBzZWFyY2hcbiAqIG92ZXIgdGhlIG5ldHdvcmsgKGUuZy4gdmVydGljYWwgb3IgdW5pdmVyc2FsKVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hBcGkge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgQVBJIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghY29uZmlnLmFwaUtleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBcGkgS2V5IGlzIHJlcXVpcmVkJywgJ1NlYXJjaCcpO1xuICAgIH1cbiAgICB0aGlzLl9hcGlLZXkgPSBjb25maWcuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIEFuc3dlcnMgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFjb25maWcuZXhwZXJpZW5jZUtleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBbnN3ZXJzIEtleSBpcyByZXF1aXJlZCcsICdTZWFyY2gnKTtcbiAgICB9XG4gICAgdGhpcy5fZXhwZXJpZW5jZUtleSA9IGNvbmZpZy5leHBlcmllbmNlS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFuc3dlcnMgY29uZmlnIHZlcnNpb24gdG8gdXNlIGZvciBhbGwgcmVxdWVzdHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24gPSBjb25maWcuZXhwZXJpZW5jZVZlcnNpb247XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgQVBJIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnNpb24gPSBjb25maWcudmVyc2lvbiB8fCAyMDE5MDEwMSB8fCAyMDE5MDMwMTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBsb2NhbGUgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIWNvbmZpZy5sb2NhbGUpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignTG9jYWxlIGlzIHJlcXVpcmVkJywgJ1NlYXJjaCcpO1xuICAgIH1cbiAgICB0aGlzLl9sb2NhbGUgPSBjb25maWcubG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBpbiB0aGUgY29udGV4dCBvZiBhIHZlcnRpY2FsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbEtleSB2ZXJ0aWNhbCBJRCBmb3IgdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge29iamVjdH0gcXVlcnkgVGhlIHF1ZXJ5IGRldGFpbHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmlucHV0IFRoZSBpbnB1dCB0byBzZWFyY2ggZm9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5maWx0ZXIgVGhlIGZpbHRlciB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuZmFjZXRGaWx0ZXIgVGhlIGZhY2V0IGZpbHRlciB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlcnkubGltaXQgVGhlIG1heCBudW1iZXIgb2YgcmVzdWx0cyB0byBpbmNsdWRlLCBtYXggb2YgNTBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1ZXJ5Lm9mZnNldCBUaGUgcmVzdWx0cyBvZmZzZXQsIGZvciBmZXRjaGluZyBtb3JlIHJlc3VsdHMgb2YgdGhlIHNhbWUgcXVlcnlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmlkIFRoZSBxdWVyeSBJRCB0byB1c2UuIElmIHBhZ2luZyB3aXRoaW4gYSBxdWVyeSwgdGhlIHNhbWUgSUQgc2hvdWxkIGJlIHVzZWRcbiAgICogQHBhcmFtIHtPYmplY3R9IHF1ZXJ5Lmdlb2xvY2F0aW9uIFRoZSB1c2VyJ3MgZ2VvbG9jYXRpb24gcG9zaXRpb24gdXNlZCB0byBiaWFzIHRoZSByZXN1bHRzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcXVlcnkuaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQgSWYgdHJ1ZSwgYXNrcyB0aGUgc2VydmVyIHRvIHJldHVybiBkeW5hbWljIGZpbHRlcnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LnNraXBTcGVsbENoZWNrIFRoZSBib29sZWFuIGFzIHN0cmluZyB0byBpbmRpY2F0ZSBpZiBpdCBzaG91bGQgc2tpcCBzcGVsbCBjaGVja2luZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkucXVlcnlUcmlnZ2VyIFRoZSBzb3VyY2UgdGhhdCB0cmlnZ2VycyBxdWVyeSBzdWNoIGFzIHN1Z2dlc3RcbiAgICovXG4gIHZlcnRpY2FsU2VhcmNoICh2ZXJ0aWNhbEtleSwgeyBpbnB1dCwgZmlsdGVyLCBmYWNldEZpbHRlciwgbGltaXQsIG9mZnNldCwgaWQsIGdlb2xvY2F0aW9uLCBpc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCwgc2tpcFNwZWxsQ2hlY2ssIHF1ZXJ5VHJpZ2dlciB9KSB7XG4gICAgaWYgKGxpbWl0ID4gNTApIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29yZUVycm9yKCdQcm92aWRlZCBzZWFyY2ggbGltaXQgdW5zdXBwb3J0ZWQnLCAnU2VhcmNoQXBpJyk7XG4gICAgfVxuXG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL3ZlcnRpY2FsL3F1ZXJ5JyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBpbnB1dCxcbiAgICAgICAgJ2V4cGVyaWVuY2VLZXknOiB0aGlzLl9leHBlcmllbmNlS2V5LFxuICAgICAgICAndmVyc2lvbic6IHRoaXMuX2V4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgICAnZmlsdGVycyc6IGZpbHRlcixcbiAgICAgICAgJ2ZhY2V0RmlsdGVycyc6IGZhY2V0RmlsdGVyLFxuICAgICAgICAndmVydGljYWxLZXknOiB2ZXJ0aWNhbEtleSxcbiAgICAgICAgJ2xpbWl0JzogbGltaXQsXG4gICAgICAgICdvZmZzZXQnOiBvZmZzZXQsXG4gICAgICAgICdsb2NhdGlvbic6IGdlb2xvY2F0aW9uID8gYCR7Z2VvbG9jYXRpb24ubGF0fSwke2dlb2xvY2F0aW9uLmxuZ31gIDogbnVsbCxcbiAgICAgICAgJ3JhZGl1cyc6IGdlb2xvY2F0aW9uID8gZ2VvbG9jYXRpb24ucmFkaXVzIDogbnVsbCxcbiAgICAgICAgJ3F1ZXJ5SWQnOiBpZCxcbiAgICAgICAgJ3JldHJpZXZlRmFjZXRzJzogaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQsXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGUsXG4gICAgICAgICdza2lwU3BlbGxDaGVjayc6IHNraXBTcGVsbENoZWNrLFxuICAgICAgICAncXVlcnlUcmlnZ2VyJzogcXVlcnlUcmlnZ2VyXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggYWNyb3NzIGFsbCB2ZXJ0aWNhbHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5U3RyaW5nIFRoZSBpbnB1dCB0byBzZWFyY2ggZm9yXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMuZ2VvbG9jYXRpb24gdGhlIHVzZXIncyBnZW9sb2NhdGlvbiBwb3NpdGlvbiB1c2VkIHRvIGJpYXMgdGhlIHJlc3VsdHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5za2lwU3BlbGxDaGVjayBUaGUgYm9vbGVhbiBhcyBzdHJpbmcgdG8gaW5kaWNhdGUgaWYgaXQgc2hvdWxkIHNraXAgc3BlbGwgY2hlY2tpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5xdWVyeVRyaWdnZXIgVGhlIHNvdXJjZSB0aGF0IHRyaWdnZXJzIHF1ZXJ5IHN1Y2ggYXMgc3VnZ2VzdFxuICAgKi9cbiAgdW5pdmVyc2FsU2VhcmNoIChxdWVyeVN0cmluZywgcGFyYW1zKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL3F1ZXJ5JyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBxdWVyeVN0cmluZyxcbiAgICAgICAgJ2V4cGVyaWVuY2VLZXknOiB0aGlzLl9leHBlcmllbmNlS2V5LFxuICAgICAgICAnbG9jYXRpb24nOiBwYXJhbXMuZ2VvbG9jYXRpb24gPyBgJHtwYXJhbXMuZ2VvbG9jYXRpb24ubGF0fSwke3BhcmFtcy5nZW9sb2NhdGlvbi5sbmd9YCA6IG51bGwsXG4gICAgICAgICdyYWRpdXMnOiBwYXJhbXMuZ2VvbG9jYXRpb24gPyBwYXJhbXMuZ2VvbG9jYXRpb24ucmFkaXVzIDogbnVsbCxcbiAgICAgICAgJ3ZlcnNpb24nOiB0aGlzLl9leHBlcmllbmNlVmVyc2lvbixcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZSxcbiAgICAgICAgJ3NraXBTcGVsbENoZWNrJzogcGFyYW1zLnNraXBTcGVsbENoZWNrLFxuICAgICAgICAncXVlcnlUcmlnZ2VyJzogcGFyYW1zLnF1ZXJ5VHJpZ2dlclxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEhpZ2hsaWdodGVkVmFsdWUgKi9cblxuLyoqXG4gKiBNb2RlbCByZXByZXNlbnRpbmcgYSBoaWdobGlnaHRlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGlnaGxpZ2h0ZWRWYWx1ZSB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICB0aGlzLnZhbHVlID0gZGF0YS52YWx1ZSB8fCBkYXRhLnNob3J0VmFsdWUgfHwgJyc7XG4gICAgdGhpcy5tYXRjaGVkU3Vic3RyaW5ncyA9IGRhdGEubWF0Y2hlZFN1YnN0cmluZ3MgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogZ2V0IGhpZ2hsaWdodGVkIHZhbHVlIHN0cmluZ1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0ICgpIHtcbiAgICB0aGlzLl9zb3J0TWF0Y2hlZFN1YnN0cmluZ3MoKTtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRIaWdobGlnaHRlZFZhbHVlKHRoaXMudmFsdWUsIHRoaXMubWF0Y2hlZFN1YnN0cmluZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCBpbnZlcnRlZCBoaWdobGlnaHRlZCB2YWx1ZSBzdHJpbmdcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldEludmVydGVkICgpIHtcbiAgICB0aGlzLl9zb3J0TWF0Y2hlZFN1YnN0cmluZ3MoKTtcbiAgICBjb25zdCBpbnZlcnRlZFN1YnN0cmluZ3MgPSB0aGlzLl9nZXRJbnZlcnRlZFN1YnN0cmluZ3ModGhpcy5tYXRjaGVkU3Vic3RyaW5ncywgdGhpcy52YWx1ZS5sZW5ndGgpO1xuICAgIHJldHVybiB0aGlzLl9idWlsZEhpZ2hsaWdodGVkVmFsdWUodGhpcy52YWx1ZSwgaW52ZXJ0ZWRTdWJzdHJpbmdzKTtcbiAgfVxuXG4gIF9zb3J0TWF0Y2hlZFN1YnN0cmluZ3MgKCkge1xuICAgIHRoaXMubWF0Y2hlZFN1YnN0cmluZ3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGEub2Zmc2V0IDwgYi5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuXG4gICAgICBpZiAoYS5vZmZzZXQgPiBiLm9mZnNldCkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gIH1cblxuICBfZ2V0SW52ZXJ0ZWRTdWJzdHJpbmdzIChtYXRjaGVkU3Vic3RyaW5ncywgdmFsdWVMZW5ndGgpIHtcbiAgICBjb25zdCBpbnZlcnRlZFN1YnN0cmluZ3MgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdGNoZWRTdWJzdHJpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzdWJzdHJpbmcgPSBtYXRjaGVkU3Vic3RyaW5nc1tpXTtcbiAgICAgIGNvbnN0IG5leHRPZmZzZXQgPSBzdWJzdHJpbmcub2Zmc2V0ICsgc3Vic3RyaW5nLmxlbmd0aDtcbiAgICAgIGlmIChpID09PSAwICYmIHN1YnN0cmluZy5vZmZzZXQgIT09IDApIHtcbiAgICAgICAgaW52ZXJ0ZWRTdWJzdHJpbmdzLnB1c2goeyBvZmZzZXQ6IDAsIGxlbmd0aDogc3Vic3RyaW5nLm9mZnNldCB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlTGVuZ3RoID4gbmV4dE9mZnNldCkge1xuICAgICAgICBpbnZlcnRlZFN1YnN0cmluZ3MucHVzaCh7XG4gICAgICAgICAgb2Zmc2V0OiBuZXh0T2Zmc2V0LFxuICAgICAgICAgIGxlbmd0aDogaSA8IG1hdGNoZWRTdWJzdHJpbmdzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgID8gbWF0Y2hlZFN1YnN0cmluZ3NbaSArIDFdLm9mZnNldCAtIG5leHRPZmZzZXRcbiAgICAgICAgICAgIDogdmFsdWVMZW5ndGggLSBuZXh0T2Zmc2V0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW52ZXJ0ZWRTdWJzdHJpbmdzO1xuICB9XG5cbiAgX2J1aWxkSGlnaGxpZ2h0ZWRWYWx1ZSAodmFsLCBoaWdobGlnaHRlZFN1YnN0cmluZ3MpIHtcbiAgICBsZXQgaGlnaGxpZ2h0ZWRWYWx1ZSA9ICcnO1xuICAgIGxldCBuZXh0U3RhcnQgPSAwO1xuXG4gICAgaWYgKGhpZ2hsaWdodGVkU3Vic3RyaW5ncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBoaWdobGlnaHRlZFN1YnN0cmluZ3MubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBzdGFydCA9IE51bWJlcihoaWdobGlnaHRlZFN1YnN0cmluZ3Nbal0ub2Zmc2V0KTtcbiAgICAgIGxldCBlbmQgPSBzdGFydCArIGhpZ2hsaWdodGVkU3Vic3RyaW5nc1tqXS5sZW5ndGg7XG5cbiAgICAgIGhpZ2hsaWdodGVkVmFsdWUgKz0gW3ZhbC5zbGljZShuZXh0U3RhcnQsIHN0YXJ0KSwgJzxzdHJvbmc+JywgdmFsLnNsaWNlKHN0YXJ0LCBlbmQpLCAnPC9zdHJvbmc+J10uam9pbignJyk7XG5cbiAgICAgIGlmIChqID09PSBoaWdobGlnaHRlZFN1YnN0cmluZ3MubGVuZ3RoIC0gMSAmJiBlbmQgPCB2YWwubGVuZ3RoKSB7XG4gICAgICAgIGhpZ2hsaWdodGVkVmFsdWUgKz0gdmFsLnNsaWNlKGVuZCk7XG4gICAgICB9XG5cbiAgICAgIG5leHRTdGFydCA9IGVuZDtcbiAgICB9XG5cbiAgICByZXR1cm4gaGlnaGxpZ2h0ZWRWYWx1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlRGF0YSAqL1xuXG5pbXBvcnQgSGlnaGxpZ2h0ZWRWYWx1ZSBmcm9tICcuL2hpZ2hsaWdodGVkdmFsdWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVEYXRhIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIHRoaXMuc2VjdGlvbnMgPSBkYXRhLnNlY3Rpb25zIHx8IFtdO1xuICAgIHRoaXMucXVlcnlJZCA9IGRhdGEucXVlcnlJZCB8fCAnJztcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlKSB7XG4gICAgbGV0IHNlY3Rpb25zO1xuICAgIGlmIChyZXNwb25zZS5zZWN0aW9ucykge1xuICAgICAgc2VjdGlvbnMgPSByZXNwb25zZS5zZWN0aW9ucy5tYXAocyA9PiAoe1xuICAgICAgICBsYWJlbDogcy5sYWJlbCxcbiAgICAgICAgcmVzdWx0czogcy5yZXN1bHRzLm1hcChyID0+IG5ldyBBdXRvQ29tcGxldGVSZXN1bHQocikpXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlY3Rpb25zID0gW3sgcmVzdWx0czogcmVzcG9uc2UucmVzdWx0cy5tYXAociA9PiBuZXcgQXV0b0NvbXBsZXRlUmVzdWx0KHIpKSB9XTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBBdXRvQ29tcGxldGVEYXRhKHsgc2VjdGlvbnMsIHF1ZXJ5SWQ6IHJlc3BvbnNlLnF1ZXJ5SWQgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9Db21wbGV0ZVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICB0aGlzLmZpbHRlciA9IGRhdGEuZmlsdGVyIHx8IHt9O1xuICAgIHRoaXMuaGlnaGxpZ2h0ZWRWYWx1ZSA9IG5ldyBIaWdobGlnaHRlZFZhbHVlKGRhdGEpLmdldEludmVydGVkKCk7XG4gICAgdGhpcy5rZXkgPSBkYXRhLmtleSB8fCAnJztcbiAgICB0aGlzLm1hdGNoZWRTdWJzdHJpbmdzID0gZGF0YS5tYXRjaGVkU3Vic3RyaW5ncyB8fCBbXTtcbiAgICB0aGlzLnZhbHVlID0gZGF0YS52YWx1ZSB8fCAnJztcbiAgICB0aGlzLnNob3J0VmFsdWUgPSBkYXRhLnNob3J0VmFsdWUgfHwgdGhpcy52YWx1ZTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIgKi9cblxuaW1wb3J0IEF1dG9Db21wbGV0ZURhdGEgZnJvbSAnLi4vbW9kZWxzL2F1dG9jb21wbGV0ZWRhdGEnO1xuXG4vKipcbiAqIEEgRGF0YSBUcmFuc2Zvcm1lciB0aGF0IHRha2VzIHRoZSByZXNwb25zZSBvYmplY3QgZnJvbSBhIEF1dG9Db21wbGV0ZSByZXF1ZXN0XG4gKiBBbmQgdHJhbnNmb3JtcyBpbiB0byBhIGZyb250LWVuZCBvcmllbnRlZCBkYXRhIHN0cnVjdHVyZSB0aGF0IG91clxuICogY29tcG9uZW50IGxpYnJhcnkgYW5kIGNvcmUgc3RvcmFnZSB1bmRlcnN0YW5kLlxuICpcbiAqIFRPRE8oYmlsbHkpIENyZWF0ZSBvdXIgb3duIGZyb250LWVuZCBkYXRhIG1vZGVsc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIge1xuICBzdGF0aWMgY2xlYW4gKG1vZHVsZUlkLCBkYXRhKSB7XG4gICAgaWYgKGRhdGEuc2VjdGlvbnMgJiYgZGF0YS5zZWN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBkYXRhLnNlY3Rpb25zO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnNlY3Rpb25zICYmIGRhdGEuc2VjdGlvbnMubGVuZ3RoID09PSAxICYmIGRhdGEuc2VjdGlvbnNbMF0ucmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBkYXRhLnNlY3Rpb25zO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBbbW9kdWxlSWRdOiBkYXRhXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB1bml2ZXJzYWwgKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIEF1dG9Db21wbGV0ZURhdGEuZnJvbShyZXNwb25zZSk7XG4gIH1cblxuICBzdGF0aWMgZmlsdGVyIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG5cbiAgc3RhdGljIHZlcnRpY2FsIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVBcGkgKi9cblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIgZnJvbSAnLi9hdXRvY29tcGxldGVkYXRhdHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgQW5zd2Vyc0Jhc2ljRXJyb3IsIEFuc3dlcnNFbmRwb2ludEVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogQXV0b0NvbXBsZXRlQXBpIGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBuZXR3b3JrIHJlbGF0ZWQgbWF0dGVyc1xuICogZm9yIGFsbCB0aGUgYXV0b2NvbXBsZXRlIGVuZHBvaW50cy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlQXBpIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIWNvbmZpZy5hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQXBpIEtleSBpcyByZXF1aXJlZCcsICdBdXRvQ29tcGxldGUnKTtcbiAgICB9XG4gICAgdGhpcy5fYXBpS2V5ID0gY29uZmlnLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBBbnN3ZXJzIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghY29uZmlnLmV4cGVyaWVuY2VLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQW5zd2VycyBLZXkgaXMgcmVxdWlyZWQnLCAnQXV0b0NvbXBsZXRlJyk7XG4gICAgfVxuICAgIHRoaXMuX2V4cGVyaWVuY2VLZXkgPSBjb25maWcuZXhwZXJpZW5jZUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBBUEkgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVyc2lvbiA9IGNvbmZpZy52ZXJzaW9uIHx8IDIwMTkwMTAxIHx8IDIwMTkwMzAxO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFuc3dlcnMgY29uZmlnIHZlcnNpb24gdG8gdXNlIGZvciBhbGwgcmVxdWVzdHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24gPSBjb25maWcuZXhwZXJpZW5jZVZlcnNpb247XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbG9jYWxlIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFjb25maWcubG9jYWxlKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0xvY2FsZSBpcyByZXF1aXJlZCcsICdBdXRvQ29tcGxldGUnKTtcbiAgICB9XG4gICAgdGhpcy5fbG9jYWxlID0gY29uZmlnLmxvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdXRvY29tcGxldGUgZmlsdGVyc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgVGhlIGlucHV0IHRvIHVzZSBmb3IgYXV0byBjb21wbGV0ZVxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdG8gdXNlIGZvciBmaWx0ZXJzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcudmVydGljYWxLZXkgVGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIGNvbmZpZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLmJhcktleSBUaGUgYmFyIGtleSBmb3IgdGhlIGNvbmZpZyB2MVxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnLnNlYXJjaFBhcmFtZXRlcnMgVGhlIHNlYXJjaCBwYXJhbWV0ZXJzIGZvciB0aGUgY29uZmlnIHYyXG4gICAqL1xuICBxdWVyeUZpbHRlciAoaW5wdXQsIGNvbmZpZykge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9maWx0ZXJzZWFyY2gnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IGlucHV0LFxuICAgICAgICAnZXhwZXJpZW5jZUtleSc6IHRoaXMuX2V4cGVyaWVuY2VLZXksXG4gICAgICAgICd2ZXJzaW9uJzogdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24sXG4gICAgICAgICd2ZXJ0aWNhbEtleSc6IGNvbmZpZy52ZXJ0aWNhbEtleSxcbiAgICAgICAgJ2lucHV0S2V5JzogY29uZmlnLmJhcktleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZSxcbiAgICAgICAgJ3NlYXJjaF9wYXJhbWV0ZXJzJzogSlNPTi5zdHJpbmdpZnkoY29uZmlnLnNlYXJjaFBhcmFtZXRlcnMpXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLmZpbHRlcihyZXNwb25zZS5yZXNwb25zZSwgY29uZmlnLmJhcktleSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoJ0ZpbHRlciBzZWFyY2ggcmVxdWVzdCBmYWlsZWQnLCAnQXV0b0NvbXBsZXRlJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICBxdWVyeVZlcnRpY2FsIChpbnB1dCwgdmVydGljYWxLZXksIGJhcktleSkge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy92ZXJ0aWNhbC9hdXRvY29tcGxldGUnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IGlucHV0LFxuICAgICAgICAnZXhwZXJpZW5jZUtleSc6IHRoaXMuX2V4cGVyaWVuY2VLZXksXG4gICAgICAgICd2ZXJzaW9uJzogdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24sXG4gICAgICAgICd2ZXJ0aWNhbEtleSc6IHZlcnRpY2FsS2V5LFxuICAgICAgICAnYmFyS2V5JzogYmFyS2V5LFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLnZlcnRpY2FsKHJlc3BvbnNlLnJlc3BvbnNlLCByZXF1ZXN0Ll9wYXJhbXMuYmFyS2V5KSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzRW5kcG9pbnRFcnJvcignVmVydGljYWwgc2VhcmNoIHJlcXVlc3QgZmFpbGVkJywgJ0F1dG9Db21wbGV0ZScsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcXVlcnlVbml2ZXJzYWwgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL2F1dG9jb21wbGV0ZScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogcXVlcnlTdHJpbmcsXG4gICAgICAgICdleHBlcmllbmNlS2V5JzogdGhpcy5fZXhwZXJpZW5jZUtleSxcbiAgICAgICAgJ3ZlcnNpb24nOiB0aGlzLl9leHBlcmllbmNlVmVyc2lvbixcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHF1ZXJ5U3RyaW5nKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLnVuaXZlcnNhbChyZXNwb25zZS5yZXNwb25zZSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoJ1VuaXZlcnNhbCBzZWFyY2ggcmVxdWVzdCBmYWlsZWQnLCAnQXV0b0NvbXBsZXRlJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFF1ZXN0aW9uQW5zd2VyQXBpICovXG5cbmltcG9ydCBBcGlSZXF1ZXN0IGZyb20gJy4uL2h0dHAvYXBpcmVxdWVzdCc7XG5pbXBvcnQgeyBBbnN3ZXJzQmFzaWNFcnJvciwgQW5zd2Vyc0VuZHBvaW50RXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBRdWVzdGlvbkFuc3dlckFwaSBleHBvc2VzIGFuIGludGVyZmFjZSB0byBkbyBuZXR3b3JreSB0aGluZ3MgYWdhaW5zdFxuICogdGhlIFEmQSBSRVNUIEFQSVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdGlvbkFuc3dlckFwaSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFjb25maWcuYXBpS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0FwaSBLZXkgaXMgcmVxdWlyZWQnLCAnUXVlc3Rpb25BbnN3ZXJBcGknKTtcbiAgICB9XG4gICAgdGhpcy5fYXBpS2V5ID0gY29uZmlnLmFwaUtleTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzdWJtaXRRdWVzdGlvbiB3aWxsIGNyZWF0ZSBhIG5ldHdvcmsgcmVxdWVzdCB0b1xuICAgKiBjcmVhdGUgYSBxdWVzdGlvbiBmb3IgUSZBLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcXVlc3Rpb24gVGhlIHF1ZXN0aW9uIG9iamVjdCB0byBzdWJtaXQgdG8gdGhlIHNlcnZlclxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlc3Rpb24uZW50aXR5SWQgVGhlIGVudGl0eSB0byBhc3NvY2lhdGUgd2l0aCB0aGUgcXVlc3Rpb24gKHJlcXVpcmVkKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ubGFudWFnZSBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIHF1ZXN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5zaXRlIFRoZSBcInB1Ymxpc2hlclwiIG9mIHRoZSAoZS5nLiAnRklSU1RfUEFSVFknKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ubmFtZSBUaGUgbmFtZSBvZiB0aGUgYXV0aG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5lbWFpbCBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgYXV0aG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5xdWVzdGlvblRleHQgVGhlIHF1ZXN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5xdWVzdGlvbkRlc2NyaXB0aW9uIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHF1ZXN0aW9uXG4gICAqL1xuICBzdWJtaXRRdWVzdGlvbiAocXVlc3Rpb24pIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL3F1ZXN0aW9ucycsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnZW50aXR5SWQnOiBxdWVzdGlvbi5lbnRpdHlJZCxcbiAgICAgICAgJ3NpdGUnOiBxdWVzdGlvbi5zaXRlLFxuICAgICAgICAnbmFtZSc6IHF1ZXN0aW9uLm5hbWUsXG4gICAgICAgICdlbWFpbCc6IHF1ZXN0aW9uLmVtYWlsLFxuICAgICAgICAncXVlc3Rpb25UZXh0JzogcXVlc3Rpb24ucXVlc3Rpb25UZXh0LFxuICAgICAgICAncXVlc3Rpb25EZXNjcmlwdGlvbic6IHF1ZXN0aW9uLnF1ZXN0aW9uRGVzY3JpcHRpb24sXG4gICAgICAgICdxdWVzdGlvbkxhbmd1YWdlJzogcXVlc3Rpb24ucXVlc3Rpb25MYW5ndWFnZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QucG9zdCgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoXG4gICAgICAgICAgJ1F1ZXN0aW9uIHN1Ym1pdCBmYWlsZWQnLFxuICAgICAgICAgICdRdWVzdGlvbkFuc3dlckFwaScsXG4gICAgICAgICAgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaFN0YXRlcyAqL1xuXG4vKipcbiAqIFNlYXJjaFN0YXRlcyBpcyBhbiBFTlVNIGZvciB0aGUgdmFyaW91cyBzdGFnZXMgb2Ygc2VhcmNoaW5nLFxuICogdXNlZCB0byBzaG93IGRpZmZlcmVudCB0ZW1wbGF0ZXNcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUFJFX1NFQVJDSDogJ3ByZS1zZWFyY2gnLFxuICBTRUFSQ0hfTE9BRElORzogJ3NlYXJjaC1sb2FkaW5nJyxcbiAgU0VBUkNIX0NPTVBMRVRFOiAnc2VhcmNoLWNvbXBsZXRlJ1xufTtcbiIsIi8qKiBAbW9kdWxlIFJlc3VsdCAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHQge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJhdyBwcm9maWxlIGRhdGFcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcmF3ID0gZGF0YS5yYXcgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmb3JtYXR0ZWQgcHJvZmlsZSBkYXRhXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Zvcm1hdHRlZCA9IGRhdGEuZm9ybWF0dGVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluZGV4IG51bWJlciBvZiB0aGUgcmVzdWx0XG4gICAgICogQHR5cGUge051bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLm9yZGluYWwgPSBkYXRhLm9yZGluYWwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSBvZiB0aGUgcmVzdWx0IGNhcmRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBib2R5IG9mIHRoZSBkZXRhaWxzIHNlY3Rpb24gb2YgdGhlIHJlc3VsdCBjYXJkLCBjYW4gY29udGFpbiBIVE1MXG4gICAgICogQHR5cGUge3N0cmluZ3wgbnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmRldGFpbHMgPSBkYXRhLmRldGFpbHMgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZXN0aW5hdGlvbiBsaW5rIGZvciB0aGUgdGl0bGUgb2YgdGhlIHJlc3VsdCBjYXJkXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMubGluayA9IGRhdGEubGluayB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIEVudGl0eSBJRCwgb3Igb3RoZXIgdW5pcXVlIGlkZW50aWZpZXIsIHVzZWQgZm9yIHRvIHBvd2VyIGludGVyYWN0aXZpdHlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5pZCA9IGRhdGEuaWQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdWJ0aXRsZSBvbiB0aGUgcmVzdWx0IGNhcmRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5zdWJ0aXRsZSA9IGRhdGEuc3VidGl0bGUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjbGFzcyBtb2RpZmllciwgdXN1YWxseSBkZXJpdmVkIGZyb20gdGhlIHZlcnRpY2FsIGNvbmZpZ3VyYXRpb24gSURcbiAgICAgKiBVc2VkIHRvIGFwcGx5IGRpZmZlcmVudCBzdHlsaW5nIHRvIGRpZmZlcmVudCByZXN1bHQgY2FyZCB0eXBlc1xuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLm1vZGlmaWVyID0gZGF0YS5tb2RpZmllciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsYXJnZSBkYXRlLCBvZiB0aGUgZm9ybWF0IHsgbW9udGg6ICdKYW4nLCBkYXk6ICcwMScgfVxuICAgICAqIEB0eXBlIHtPYmplY3R8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmJpZ0RhdGUgPSBkYXRhLmJpZ0RhdGUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFuIGltYWdlIHByb2ZpbGUgb2JqZWN0LCBleHBlY3RlZCB0byBoYXZlIGEgdXJsIHByb3BlcnR5XG4gICAgICogQHR5cGUge09iamVjdHxudWxsfVxuICAgICAqL1xuICAgIHRoaXMuaW1hZ2UgPSBkYXRhLmltYWdlIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBjYWxscyB0byBhY3Rpb24sIG9mIHRoZSBmb3JtYXQ6XG4gICAgICogeyBpY29uOiAnJywgdXJsOiAnJywgdGV4dDogJycsIGV2ZW50VHlwZTogJycsIGV2ZW50T3B0aW9uczoge319XG4gICAgICogQHR5cGUge0FycmF5fVxuICAgICAqL1xuICAgIHRoaXMuY2FsbHNUb0FjdGlvbiA9IGRhdGEuY2FsbHNUb0FjdGlvbiB8fCBbXTtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYW4gYWNjb3JkaWFuIHJlc3VsdCBzaG91bGQgYmUgY29sbGFwc2VkIGJ5IGRlZmF1bHRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbGxhcHNlZCA9IGRhdGEuY29sbGFwc2VkIHx8IHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlc3VsdEZhY3RvcnkgKi9cblxuaW1wb3J0IFJlc3VsdCBmcm9tICcuL3Jlc3VsdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdEZhY3Rvcnkge1xuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIFJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBJbmNsdWRlcyBkZWZhdWx0IG1hcHBpbmdzIG9mIEdvb2dsZUN1c3RvbVNlYXJjaEVuZ2luZSByZXN1bHRzIHRvXG4gICAqIHRoZSBmaWVsZHMgZXhwb3NlZCBieSB0aGUgdGVtcGxhdGUuXG4gICAqIEBwYXJhbSByZXN1bHRzRGF0YSAge0FycmF5fSBleHBlY3RlZCBmb3JtYXQ6IHsgZGF0YTogeyAuLi4gfSwgaGlnaGxpZ2h0ZWRGaWVsZHM6IHsgLi4uIH19XG4gICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn0gZm9ybWF0dGVycyBUaGUgZm9ybWF0dGVycyB0byBhcHBseSB0byB0aGUgcmVzdWx0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbElkIFRoZSB2ZXJ0aWNhbCBvZiB0aGVzZSByZXN1bHRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgQmFja2VuZCBzb3VyY2Ugb2YgdGhlc2UgcmVzdWx0c1xuICAgKiBAcmV0dXJucyB7UmVzdWx0W119XG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzdWx0c0RhdGEsIGZvcm1hdHRlcnMsIHZlcnRpY2FsSWQsIHNvdXJjZSkge1xuICAgIGxldCByZXN1bHRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gVE9ETyB1c2UgcmVzdWx0RGF0YS5oaWdobGlnaHRlZEZpZWxkcyB0b1xuICAgICAgLy8gdHJhbnNmb3JtIHJlc3VsdERhdGEuZGF0YSBpbnRvIGh0bWwtZnJpZW5kbHkgc3RyaW5ncyB0aGF0IGhpZ2hsaWdodCB2YWx1ZXMuXG4gICAgICAvLyBDaGVjayBmb3IgbmV3IGRhdGEgZm9ybWF0LCBvdGhlcndpc2UgZmFsbGJhY2sgdG8gbGVnYWN5XG5cbiAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHRzRGF0YVtpXS5kYXRhIHx8IHJlc3VsdHNEYXRhW2ldO1xuICAgICAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IHt9O1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGZvcm1hdHRlcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoW2tleSwgdmFsXSkgPT4ge1xuICAgICAgICAgIGlmIChmb3JtYXR0ZXJzW2tleV0pIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZERhdGFba2V5XSA9IGZvcm1hdHRlcnNba2V5XSh2YWwsIGRhdGEsIHZlcnRpY2FsSWQsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHNvdXJjZSkge1xuICAgICAgICBjYXNlICdHT09HTEVfQ1NFJzpcbiAgICAgICAgICByZXN1bHRzLnB1c2goUmVzdWx0RmFjdG9yeS5mcm9tR29vZ2xlQ3VzdG9tU2VhcmNoRW5naW5lKGRhdGEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQklOR19DU0UnOlxuICAgICAgICAgIHJlc3VsdHMucHVzaChSZXN1bHRGYWN0b3J5LmZyb21CaW5nQ3VzdG9tU2VhcmNoRW5naW5lKGRhdGEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnWkVOREVTSyc6XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKFJlc3VsdEZhY3RvcnkuZnJvbVplbmRlc2tTZWFyY2hFbmdpbmUoZGF0YSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBTEdPTElBJzpcbiAgICAgICAgICByZXN1bHRzLnB1c2goUmVzdWx0RmFjdG9yeS5mcm9tQWxnb2xpYVNlYXJjaEVuZ2luZShkYXRhKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKFJlc3VsdEZhY3RvcnkuZnJvbUdlbmVyaWMoZGF0YSwgZm9ybWF0dGVkRGF0YSwgaSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIEFQSSByZXN1bHQgb2JqZWN0IGludG8gYSBnZW5lcmljIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcGFyYW0gZm9ybWF0dGVkRGF0YVxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICogQHJldHVybnMge1Jlc3VsdH1cbiAgICovXG4gIHN0YXRpYyBmcm9tR2VuZXJpYyAoZGF0YSwgZm9ybWF0dGVkRGF0YSwgaW5kZXgpIHtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh7XG4gICAgICByYXc6IGRhdGEsXG4gICAgICBmb3JtYXR0ZWQ6IGZvcm1hdHRlZERhdGEsXG4gICAgICB0aXRsZTogZm9ybWF0dGVkRGF0YS5uYW1lIHx8IGRhdGEubmFtZSxcbiAgICAgIGRldGFpbHM6IGZvcm1hdHRlZERhdGEuZGVzY3JpcHRpb24gfHwgdGhpcy50cnVuY2F0ZShkYXRhLmRlc2NyaXB0aW9uKSxcbiAgICAgIGxpbms6IGRhdGEud2Vic2l0ZSxcbiAgICAgIGlkOiBkYXRhLmlkLFxuICAgICAgb3JkaW5hbDogaW5kZXggKyAxXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBNYXBzIHZpZXcgbW9kZWwgZmllbGRzIGJhc2VkIG9uIHRoZSBBUEkgZGF0YSBmb3IgYSBHb29nbGUgQ3VzdG9tIFNlYXJjaCBFbmdpbmUgb2JqZWN0LlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0fVxuICAgKi9cbiAgc3RhdGljIGZyb21Hb29nbGVDdXN0b21TZWFyY2hFbmdpbmUgKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh7XG4gICAgICByYXc6IGRhdGEsXG4gICAgICB0aXRsZTogZGF0YS5odG1sVGl0bGUucmVwbGFjZSgvKDwoW14+XSspPikvaWcsICcnKSxcbiAgICAgIGRldGFpbHM6IGRhdGEuaHRtbFNuaXBwZXQsXG4gICAgICBsaW5rOiBkYXRhLmxpbmtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBBUEkgcmVzdWx0IG9iamVjdCBpbnRvIGEgcmVzdWx0IHZpZXcgbW9kZWwuXG4gICAqIE1hcHMgdmlldyBtb2RlbCBmaWVsZHMgYmFzZWQgb24gdGhlIEFQSSBkYXRhIGZvciBhIEJpbmcgQ3VzdG9tIFNlYXJjaCBFbmdpbmUgb2JqZWN0LlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0fVxuICAgKi9cbiAgc3RhdGljIGZyb21CaW5nQ3VzdG9tU2VhcmNoRW5naW5lIChkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBSZXN1bHQoe1xuICAgICAgcmF3OiBkYXRhLFxuICAgICAgdGl0bGU6IGRhdGEubmFtZSxcbiAgICAgIGRldGFpbHM6IGRhdGEuc25pcHBldCxcbiAgICAgIGxpbms6IGRhdGEudXJsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBNYXBzIHZpZXcgbW9kZWwgZmllbGRzIGJhc2VkIG9uIHRoZSBBUEkgZGF0YSBmb3IgYSBaZW5kZXNrIFNlYXJjaCBFbmdpbmUgb2JqZWN0LlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0fVxuICAgKi9cbiAgc3RhdGljIGZyb21aZW5kZXNrU2VhcmNoRW5naW5lIChkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBSZXN1bHQoe1xuICAgICAgcmF3OiBkYXRhLFxuICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgICBkZXRhaWxzOiBkYXRhLnNuaXBwZXQsXG4gICAgICBsaW5rOiBkYXRhLmh0bWxfdXJsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBNYXBzIHZpZXcgbW9kZWwgZmllbGRzIGJhc2VkIG9uIHRoZSBBUEkgZGF0YSBmb3IgYSBBbGdvbGlhIFNlYXJjaCBFbmdpbmUgb2JqZWN0LlxuICAgKiBEZXRhaWxzIGZpZWxkIGlzIHNldCB0byBvYmplY3RJRCBzaW5jZSByZXNwb25zZSBoYXMgb25seSBvbmUgZ2VuZXJhbCBmaWVsZCBvYmplY3RJRC5cbiAgICogQHBhcmFtIGRhdGFcbiAgICogQHJldHVybnMge1Jlc3VsdH1cbiAgICovXG4gIHN0YXRpYyBmcm9tQWxnb2xpYVNlYXJjaEVuZ2luZSAoZGF0YSkge1xuICAgIHJldHVybiBuZXcgUmVzdWx0KHtcbiAgICAgIHJhdzogZGF0YSxcbiAgICAgIGRldGFpbHM6IGRhdGEub2JqZWN0SUQsXG4gICAgICBpZDogZGF0YS5vYmplY3RJRFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRydW5jYXRlcyBzdHJpbmdzIHRvIDI1MCBjaGFyYWN0ZXJzLCBhdHRlbXB0aW5nIHRvIHByZXNlcnZlIHdob2xlIHdvcmRzXG4gICAqIEBwYXJhbSBzdHIge3N0cmluZ30gdGhlIHN0cmluZyB0byB0cnVuY2F0ZVxuICAgKiBAcGFyYW0gbGltaXQge051bWJlcn0gdGhlIG1heGltdW0gY2hhcmFjdGVyIGxlbmd0aCB0byByZXR1cm5cbiAgICogQHBhcmFtIHRyYWlsaW5nIHtzdHJpbmd9IGEgdHJhaWxpbmcgc3RyaW5nIHRvIGRlbm90ZSB0cnVuY2F0aW9uLCBlLmcuICcuLi4nXG4gICAqIEBwYXJhbSBzZXAge3N0cmluZ30gdGhlIHdvcmQgc2VwYXJhdG9yXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgdHJ1bmNhdGUgKHN0ciwgbGltaXQgPSAyNTAsIHRyYWlsaW5nID0gJy4uLicsIHNlcCA9ICcgJykge1xuICAgIGlmICghc3RyIHx8IHN0ci5sZW5ndGggPD0gbGltaXQpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgLy8gVE9ETyAoYm1jZ2lubmlzKTogc3BsaXQgcHVuY3R1YXRpb24gdG9vIHNvIHdlIGRvbid0IGVuZCB1cCB3aXRoIFwiZm9vLC4uLlwiXG4gICAgY29uc3Qgd29yZHMgPSBzdHIuc3BsaXQoc2VwKTtcbiAgICBjb25zdCBtYXggPSBsaW1pdCAtIHRyYWlsaW5nLmxlbmd0aDtcbiAgICBsZXQgdHJ1bmNhdGVkID0gJyc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB3b3JkID0gd29yZHNbaV07XG4gICAgICBpZiAodHJ1bmNhdGVkLmxlbmd0aCArIHdvcmQubGVuZ3RoID4gbWF4IHx8XG4gICAgICAgIChpICE9PSAwICYmIHRydW5jYXRlZC5sZW5ndGggKyB3b3JkLmxlbmd0aCArIHNlcC5sZW5ndGggPiBtYXgpKSB7XG4gICAgICAgIHRydW5jYXRlZCArPSB0cmFpbGluZztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHRydW5jYXRlZCArPSBpID09PSAwID8gd29yZCA6IHNlcCArIHdvcmQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydW5jYXRlZDtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VjdGlvbiAqL1xuXG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcbmltcG9ydCBSZXN1bHRGYWN0b3J5IGZyb20gJy4vcmVzdWx0ZmFjdG9yeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3RvciAoZGF0YSwgdXJsLCBmb3JtYXR0ZXJzKSB7XG4gICAgdGhpcy5zZWFyY2hTdGF0ZSA9IFNlYXJjaFN0YXRlcy5TRUFSQ0hfQ09NUExFVEU7XG4gICAgdGhpcy52ZXJ0aWNhbENvbmZpZ0lkID0gZGF0YS52ZXJ0aWNhbENvbmZpZ0lkIHx8IG51bGw7XG4gICAgdGhpcy5yZXN1bHRzQ291bnQgPSBkYXRhLnJlc3VsdHNDb3VudCB8fCAwO1xuICAgIHRoaXMuZW5jb2RlZFN0YXRlID0gZGF0YS5lbmNvZGVkU3RhdGUgfHwgJyc7XG4gICAgdGhpcy5hcHBsaWVkUXVlcnlGaWx0ZXJzID0gQXBwbGllZFF1ZXJ5RmlsdGVyLmZyb20oZGF0YS5hcHBsaWVkUXVlcnlGaWx0ZXJzKTtcbiAgICB0aGlzLmZhY2V0cyA9IGRhdGEuZmFjZXRzIHx8IG51bGw7XG4gICAgdGhpcy5yZXN1bHRzID0gUmVzdWx0RmFjdG9yeS5mcm9tKGRhdGEucmVzdWx0cywgZm9ybWF0dGVycywgdGhpcy52ZXJ0aWNhbENvbmZpZ0lkLCBkYXRhLnNvdXJjZSk7XG4gICAgdGhpcy5tYXAgPSBTZWN0aW9uLnBhcnNlTWFwKGRhdGEucmVzdWx0cyk7XG4gICAgdGhpcy52ZXJ0aWNhbFVSTCA9IHVybCB8fCBudWxsO1xuICB9XG5cbiAgc3RhdGljIHBhcnNlTWFwIChyZXN1bHRzKSB7XG4gICAgbGV0IG1hcE1hcmtlcnMgPSBbXTtcblxuICAgIGxldCBjZW50ZXJDb29yZGluYXRlcyA9IHt9O1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCByZXN1bHRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAvLyBUT0RPKGJpbGx5KSBSZW1vdmUgbGVnYWN5IGZhbGxiYWNrIGZyb20gYWxsIGRhdGEgZm9ybWF0XG4gICAgICBsZXQgcmVzdWx0ID0gcmVzdWx0c1tqXS5kYXRhIHx8IHJlc3VsdHNbal07XG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUpIHtcbiAgICAgICAgaWYgKCFjZW50ZXJDb29yZGluYXRlcy5sYXRpdHVkZSkge1xuICAgICAgICAgIGNlbnRlckNvb3JkaW5hdGVzID0ge1xuICAgICAgICAgICAgbGF0aXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubGF0aXR1ZGUsXG4gICAgICAgICAgICBsb25naXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubG9uZ2l0dWRlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBtYXBNYXJrZXJzLnB1c2goe1xuICAgICAgICAgIGl0ZW06IHJlc3VsdCxcbiAgICAgICAgICBsYWJlbDogbWFwTWFya2Vycy5sZW5ndGggKyAxLFxuICAgICAgICAgIGxhdGl0dWRlOiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlLmxhdGl0dWRlLFxuICAgICAgICAgIGxvbmdpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sb25naXR1ZGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICdtYXBDZW50ZXInOiBjZW50ZXJDb29yZGluYXRlcyxcbiAgICAgICdtYXBNYXJrZXJzJzogbWFwTWFya2Vyc1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc2VjdGlvbiBmcm9tIHRoZSBwcm92aWRlZCBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBtb2R1bGVzIFRoZSByZXN1bHQgbW9kdWxlc1xuICAgKiBAcGFyYW0ge09iamVjdH0gdXJscyBUaGUgdGFiIHVybHNcbiAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fSBmb3JtYXR0ZXJzIEZpZWxkIGZvcm1hdHRlcnMgZm9yIHJlc3VsdHNcbiAgICovXG4gIHN0YXRpYyBmcm9tIChtb2R1bGVzLCB1cmxzLCBmb3JtYXR0ZXJzKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gW107XG4gICAgaWYgKCFtb2R1bGVzKSB7XG4gICAgICByZXR1cm4gc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmV3IFNlY3Rpb24obW9kdWxlcywgbnVsbCwgZm9ybWF0dGVycyk7XG4gICAgfVxuXG4gICAgLy8gT3VyIHNlY3Rpb25zIHNob3VsZCBjb250YWluIGEgcHJvcGVydHkgb2YgbWFwTWFya2VyIG9iamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNlY3Rpb25zLnB1c2goXG4gICAgICAgIG5ldyBTZWN0aW9uKFxuICAgICAgICAgIG1vZHVsZXNbaV0sXG4gICAgICAgICAgdXJsc1ttb2R1bGVzW2ldLnZlcnRpY2FsQ29uZmlnSWRdLFxuICAgICAgICAgIGZvcm1hdHRlcnNcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VjdGlvbnM7XG4gIH1cbn1cblxuY2xhc3MgQXBwbGllZFF1ZXJ5RmlsdGVyIHtcbiAgLy8gU3VwcG9ydCBsZWdhY3kgbW9kZWwgYW5kIG5ldyBtb2RlbCB1bnRpbCBmdWxseSBtaWdyYXRlZC5cbiAgLy8gVE9ETyhiaWxseSkgUmVtb3ZlIHRoZSBsZWZ0IGV4cHJlc3Npb24gZHVyaW5nIGFzc2lnbm1lbnQgd2hlbiBtaWdyYXRlZC5cbiAgY29uc3RydWN0b3IgKGFwcGxpZWRRdWVyeUZpbHRlcikge1xuICAgIHRoaXMua2V5ID0gYXBwbGllZFF1ZXJ5RmlsdGVyLmtleSB8fCBhcHBsaWVkUXVlcnlGaWx0ZXIuZGlzcGxheUtleTtcbiAgICB0aGlzLnZhbHVlID0gYXBwbGllZFF1ZXJ5RmlsdGVyLnZhbHVlIHx8IGFwcGxpZWRRdWVyeUZpbHRlci5kaXNwbGF5VmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbSAoYXBwbGllZFF1ZXJ5RmlsdGVycykge1xuICAgIGxldCBmaWx0ZXJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBsaWVkUXVlcnlGaWx0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmaWx0ZXJzLnB1c2gobmV3IEFwcGxpZWRRdWVyeUZpbHRlcihhcHBsaWVkUXVlcnlGaWx0ZXJzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXJzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBVbml2ZXJzYWxSZXN1bHRzICovXG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vc2VjdGlvbic7XG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pdmVyc2FsUmVzdWx0cyB7XG4gIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgdGhpcy5xdWVyeUlkID0gZGF0YS5xdWVyeUlkIHx8IG51bGw7XG4gICAgdGhpcy5zZWN0aW9ucyA9IGRhdGEuc2VjdGlvbnMgfHwgW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc2VhcmNoLCB1c2VkIHRvIHJlbmRlciBkaWZmZXJlbnQgdGVtcGxhdGVzIGJlZm9yZSwgZHVyaW5nLFxuICAgICAqIGFuZCBhZnRlciBsb2FkaW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnNlYXJjaFN0YXRlID0gZGF0YS5zZWFyY2hTdGF0ZSB8fCBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB1bml2ZXJzYWwgcmVzdWx0cyBmcm9tIHNlcnZlciBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZSBUaGUgc2VydmVyIHJlc3BvbnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB1cmxzIFRoZSB0YWIgdXJsc1xuICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59IGZvcm1hdHRlcnMgVGhlIGZpZWxkIGZvcm1hdHRlcnMgdG8gdXNlXG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UsIHVybHMsIGZvcm1hdHRlcnMpIHtcbiAgICByZXR1cm4gbmV3IFVuaXZlcnNhbFJlc3VsdHMoe1xuICAgICAgcXVlcnlJZDogcmVzcG9uc2UucXVlcnlJZCxcbiAgICAgIHNlY3Rpb25zOiBTZWN0aW9uLmZyb20ocmVzcG9uc2UubW9kdWxlcywgdXJscywgZm9ybWF0dGVycylcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBVbml2ZXJ2YWxSZXN1bHRzIG9iamVjdCByZXByZXNlbnRpbmcgbG9hZGluZyByZXN1bHRzXG4gICAqIEByZXR1cm4ge1VuaXZlcnNhbFJlc3VsdHN9XG4gICAqL1xuICBzdGF0aWMgc2VhcmNoTG9hZGluZyAoKSB7XG4gICAgcmV0dXJuIG5ldyBVbml2ZXJzYWxSZXN1bHRzKHsgc2VhcmNoU3RhdGU6IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRGlyZWN0QW5zd2VyICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdEFuc3dlciB7XG4gIGNvbnN0cnVjdG9yIChkaXJlY3RBbnN3ZXIgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGlyZWN0QW5zd2VyKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERpcmVjdEFuc3dlciBtb2RlbCBmcm9tIHRoZSBnaXZlbiBzZXJ2ZXIgZGF0YSBhbmQgZm9ybWF0dGVyc1xuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2UgVGhlIHNlcnZlciBkaXJlY3QgYW5zd2VyXG4gICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn0gZm9ybWF0dGVycyBUaGUgZm9ybWF0dGVycyB0byBhcHBseSB0byB0aGlzIGRpcmVjdCBhbnN3ZXJcbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSwgZm9ybWF0dGVycykge1xuICAgIGNvbnN0IGRhdGEgPSB7IC4uLnJlc3BvbnNlIH07XG4gICAgY29uc3QgeyBhbnN3ZXIsIHJlbGF0ZWRJdGVtIH0gPSBkYXRhO1xuXG4gICAgaWYgKGFuc3dlciAmJiBmb3JtYXR0ZXJzW2Fuc3dlci5maWVsZEFwaU5hbWVdKSB7XG4gICAgICBhbnN3ZXIudmFsdWUgPSBmb3JtYXR0ZXJzW2Fuc3dlci5maWVsZEFwaU5hbWVdKFxuICAgICAgICBhbnN3ZXIudmFsdWUsXG4gICAgICAgIHJlbGF0ZWRJdGVtLmRhdGEuZmllbGRWYWx1ZXMsXG4gICAgICAgIHJlbGF0ZWRJdGVtLnZlcnRpY2FsQ29uZmlnSWQsXG4gICAgICAgIHRydWUpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGlyZWN0QW5zd2VyKGRhdGEpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBOYXZpZ2F0aW9uICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24ge1xuICBjb25zdHJ1Y3RvciAodGFiT3JkZXIpIHtcbiAgICB0aGlzLnRhYk9yZGVyID0gdGFiT3JkZXIgfHwgW107XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChtb2R1bGVzKSB7XG4gICAgbGV0IG5hdiA9IFtdO1xuICAgIGlmICghbW9kdWxlcyB8fCAhQXJyYXkuaXNBcnJheShtb2R1bGVzKSkge1xuICAgICAgcmV0dXJuIG5hdjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBuYXYucHVzaChtb2R1bGVzW2ldLnZlcnRpY2FsQ29uZmlnSWQpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE5hdmlnYXRpb24obmF2KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgVmVydGljYWxSZXN1bHRzICovXG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vc2VjdGlvbic7XG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGljYWxSZXN1bHRzIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyBzZWFyY2hTdGF0ZTogU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURSB9LCBkYXRhKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZCB0aGUgcHJvdmlkZWQgcmVzdWx0cyB0byB0aGUgY3VycmVudCByZXN1bHRzXG4gICAqIEBwYXJhbSB7VmVydGljYWxSZXN1bHRzfSByZXN1bHRzIHRoZSByZXN1bHRzIHRvIGFwcGVuZCB0byB0aGUgY3VycmVudCByZXN1bHRzXG4gICAqL1xuICBhcHBlbmQgKHJlc3VsdHMpIHtcbiAgICBjb25zdCBtZXJnZWQgPSB7IC4uLnRoaXMgfTtcbiAgICBtZXJnZWQucmVzdWx0cyA9IHRoaXMucmVzdWx0cy5jb25jYXQocmVzdWx0cy5yZXN1bHRzKTtcbiAgICBtZXJnZWQubWFwLm1hcE1hcmtlcnMgPSB0aGlzLm1hcC5tYXBNYXJrZXJzLmNvbmNhdChyZXN1bHRzLm1hcC5tYXBNYXJrZXJzKTtcbiAgICByZXR1cm4gbmV3IFZlcnRpY2FsUmVzdWx0cyhtZXJnZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB2ZXJ0aWNhbCByZXN1bHRzIGZyb20gc2VydmVyIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlIFRoZSBzZXJ2ZXIgcmVzcG9uc2VcbiAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fSBmb3JtYXR0ZXJzIFRoZSBmaWVsZCBmb3JtYXR0ZXJzIHRvIHVzZVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlLCBmb3JtYXR0ZXJzKSB7XG4gICAgcmV0dXJuIG5ldyBWZXJ0aWNhbFJlc3VsdHMoU2VjdGlvbi5mcm9tKHJlc3BvbnNlLCBudWxsLCBmb3JtYXR0ZXJzKSk7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0IGEgVmVydGljYWxSZXN1bHRzIG9iamVjdCByZXByZXNlbnRpbmcgbG9hZGluZyByZXN1bHRzXG4gICAqIEByZXR1cm4ge1ZlcnRpY2FsUmVzdWx0c31cbiAgICovXG4gIHN0YXRpYyBzZWFyY2hMb2FkaW5nICgpIHtcbiAgICByZXR1cm4gbmV3IFZlcnRpY2FsUmVzdWx0cyh7IHNlYXJjaFN0YXRlOiBTZWFyY2hTdGF0ZXMuU0VBUkNIX0xPQURJTkcgfSk7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU3BlbGxDaGVjayAqL1xuXG5pbXBvcnQgSGlnaGxpZ2h0ZWRWYWx1ZSBmcm9tICcuL2hpZ2hsaWdodGVkdmFsdWUnO1xuXG4vKipcbiAqIFNwZWxsQ2hlY2sgaXMgdGhlIGNvcmUgc3RhdGUgbW9kZWxcbiAqIHRvIHBvd2VyIHRoZSBTcGVsbENoZWNrIGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGVsbENoZWNrIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgb3JpZ2luYWwgcXVlcnlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlcnkgPSBkYXRhLnF1ZXJ5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29ycmVjdGVkIHF1ZXJ5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmNvcnJlY3RlZFF1ZXJ5ID0gZGF0YS5jb3JyZWN0ZWRRdWVyeSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvcnJlY3RlZCBxdWVyeSB3aXRoIGhpZ2hsaWdodGVkIHRhZ3NcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuY29ycmVjdGVkUXVlcnlEaXNwbGF5ID0gZGF0YS5jb3JyZWN0ZWRRdWVyeURpc3BsYXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzcGVsbCBjaGVjayB0eXBlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnR5cGUgPSBkYXRhLnR5cGUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFNob3VsZCBzaG93IHNwZWxsIGNoZWNrIG9yIG5vdFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuc2hvdWxkU2hvdyA9IHRoaXMuY29ycmVjdGVkUXVlcnkgIT09IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc3BlbGwgY2hlY2sgbW9kZWwgZnJvbSB0aGUgcHJvdmlkZWQgZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2UgVGhlIHNwZWxsIGNoZWNrIHJlc3BvbnNlXG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UpIHtcbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBTcGVsbENoZWNrKHtcbiAgICAgIHF1ZXJ5OiByZXNwb25zZS5vcmlnaW5hbFF1ZXJ5LFxuICAgICAgY29ycmVjdGVkUXVlcnk6IHJlc3BvbnNlLmNvcnJlY3RlZFF1ZXJ5LFxuICAgICAgY29ycmVjdGVkUXVlcnlEaXNwbGF5OiBuZXcgSGlnaGxpZ2h0ZWRWYWx1ZShyZXNwb25zZS5jb3JyZWN0ZWRRdWVyeSkuZ2V0KCksXG4gICAgICB0eXBlOiByZXNwb25zZS50eXBlXG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFN0b3JhZ2VLZXlzICovXG5cbi8qKlxuICogU3RvcmFnZUtleXMgaXMgYW4gRU5VTSBhcmUgY29uc2lkZXJlZCB0aGUgcm9vdCBjb250ZXh0XG4gKiBmb3IgaG93IGRhdGEgaXMgc3RvcmVkIGFuZCBzY29wZWQgaW4gdGhlIHN0b3JhZ2UuXG4gKlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBOQVZJR0FUSU9OOiAnbmF2aWdhdGlvbicsXG4gIFVOSVZFUlNBTF9SRVNVTFRTOiAndW5pdmVyc2FsLXJlc3VsdHMnLFxuICBWRVJUSUNBTF9SRVNVTFRTOiAndmVydGljYWwtcmVzdWx0cycsXG4gIEFVVE9DT01QTEVURTogJ2F1dG9jb21wbGV0ZScsXG4gIERJUkVDVF9BTlNXRVI6ICdkaXJlY3QtYW5zd2VyJyxcbiAgRklMVEVSOiAnZmlsdGVyJyxcbiAgUVVFUlk6ICdxdWVyeScsXG4gIFFVRVJZX0lEOiAncXVlcnktaWQnLFxuICBGQUNFVF9GSUxURVI6ICdmYWNldC1maWx0ZXInLFxuICBEWU5BTUlDX0ZJTFRFUlM6ICdkeW5hbWljLWZpbHRlcnMnLFxuICBTRUFSQ0hfTElNSVQ6ICdzZWFyY2gtbGltaXQnLFxuICBQQVJBTVM6ICdwYXJhbXMnLFxuICBHRU9MT0NBVElPTjogJ2dlb2xvY2F0aW9uJyxcbiAgSU5URU5UUzogJ2ludGVudHMnLFxuICBRVUVTVElPTl9TVUJNSVNTSU9OOiAncXVlc3Rpb24tc3VibWlzc2lvbicsXG4gIFNQRUxMX0NIRUNLOiAnc3BlbGwtY2hlY2snXG59O1xuIiwiLyoqIEBtb2R1bGUgRHluYW1pY0ZpbHRlcnMgKi9cblxuLyoqXG4gKiBNb2RlbCByZXByZXNlbnRpbmcgYSBzZXQgb2YgZHluYW1pYyBmaWx0ZXJzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNGaWx0ZXJzIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBmaWx0ZXJzIHRoaXMgbW9kZWwgaG9sZHNcbiAgICAgKiBAdHlwZSB7e2xhYmVsOiBzdHJpbmcsIGZpZWxkSWQ6IHN0cmluZywgb3B0aW9uczogb2JqZWN0W119fVxuICAgICAqL1xuICAgIHRoaXMuZmlsdGVycyA9IGRhdGEuZmlsdGVycyB8fCBbXTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9yZ2FuaXplICdmYWNldHMnIGZyb20gdGhlIGFwaSByZXNwb25zZSBpbnRvIGR5bmFtaWMgZmlsdGVyc1xuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2UgZHluYW1pYyBmaWx0ZXIgcmVzcG9uc2UgZnJvbSB0aGUgYXBpXG4gICAqIEByZXR1cm5zIHtEeW5hbWljRmlsdGVyc31cbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSkge1xuICAgIGNvbnN0IHsgZmFjZXRzIH0gPSByZXNwb25zZTtcbiAgICBjb25zdCBkeW5hbWljRmlsdGVycyA9IGZhY2V0cy5tYXAoZiA9PiAoe1xuICAgICAgbGFiZWw6IGZbJ2Rpc3BsYXlOYW1lJ10sXG4gICAgICBmaWVsZElkOiBmWydmaWVsZElkJ10sXG4gICAgICBvcHRpb25zOiBmLm9wdGlvbnMubWFwKG8gPT4gKHtcbiAgICAgICAgbGFiZWw6IG9bJ2Rpc3BsYXlOYW1lJ10sXG4gICAgICAgIGNvdW50TGFiZWw6IG9bJ2NvdW50J10sXG4gICAgICAgIHNlbGVjdGVkOiBvWydzZWxlY3RlZCddLFxuICAgICAgICBmaWx0ZXI6IG9bJ2ZpbHRlciddXG4gICAgICB9KSlcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gbmV3IER5bmFtaWNGaWx0ZXJzKHsgZmlsdGVyczogZHluYW1pY0ZpbHRlcnMgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaEludGVudHMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoSW50ZW50cyB7XG4gIGNvbnN0cnVjdG9yIChpbnRlbnRzKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGludGVudCB0byBmaW5kIHJlc3VsdHMgYmFzZWQgb24gdGhlIHVzZXIncyBsb2NhdGlvblxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMubmVhck1lID0gaW50ZW50cy5uZWFyTWU7XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBTZWFyY2hJbnRlbnRzIGZyb20gc2VydmVyIHJlc3BvbnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZSBUaGUgc2VydmVyIHJlc3BvbnNlIGludGVudHNcbiAgICogQHJldHVybnMge1NlYXJjaEludGVudHN9XG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UpIHtcbiAgICBjb25zdCBpbnRlbnRzID0gcmVzcG9uc2UgfHwgW107XG5cbiAgICByZXR1cm4gbmV3IFNlYXJjaEludGVudHMoe1xuICAgICAgbmVhck1lOiBpbnRlbnRzLmluY2x1ZGVzKCdORUFSX01FJylcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VhcmNoRGF0YVRyYW5zZm9ybWVyICovXG5cbmltcG9ydCBVbml2ZXJzYWxSZXN1bHRzIGZyb20gJy4uL21vZGVscy91bml2ZXJzYWxyZXN1bHRzJztcbmltcG9ydCBEaXJlY3RBbnN3ZXIgZnJvbSAnLi4vbW9kZWxzL2RpcmVjdGFuc3dlcic7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9tb2RlbHMvbmF2aWdhdGlvbic7XG5pbXBvcnQgVmVydGljYWxSZXN1bHRzIGZyb20gJy4uL21vZGVscy92ZXJ0aWNhbHJlc3VsdHMnO1xuaW1wb3J0IFNwZWxsQ2hlY2sgZnJvbSAnLi4vbW9kZWxzL3NwZWxsY2hlY2snO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IER5bmFtaWNGaWx0ZXJzIGZyb20gJy4uL21vZGVscy9keW5hbWljZmlsdGVycyc7XG5pbXBvcnQgU2VhcmNoSW50ZW50cyBmcm9tICcuLi9tb2RlbHMvc2VhcmNoaW50ZW50cyc7XG5cbi8qKlxuICogQSBEYXRhIFRyYW5zZm9ybWVyIHRoYXQgdGFrZXMgdGhlIHJlc3BvbnNlIG9iamVjdCBmcm9tIGEgU2VhcmNoIHJlcXVlc3RcbiAqIEFuZCB0cmFuc2Zvcm1zIGluIHRvIGEgZnJvbnQtZW5kIG9yaWVudGVkIGRhdGEgc3RydWN0dXJlIHRoYXQgb3VyXG4gKiBjb21wb25lbnQgbGlicmFyeSBhbmQgY29yZSBzdG9yYWdlIHVuZGVyc3RhbmQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaERhdGFUcmFuc2Zvcm1lciB7XG4gIHN0YXRpYyB0cmFuc2Zvcm0gKGRhdGEsIHVybHMgPSB7fSwgZm9ybWF0dGVycykge1xuICAgIGxldCByZXNwb25zZSA9IGRhdGEucmVzcG9uc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtTdG9yYWdlS2V5cy5RVUVSWV9JRF06IHJlc3BvbnNlLnF1ZXJ5SWQsXG4gICAgICBbU3RvcmFnZUtleXMuTkFWSUdBVElPTl06IE5hdmlnYXRpb24uZnJvbShyZXNwb25zZS5tb2R1bGVzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSXTogRGlyZWN0QW5zd2VyLmZyb20ocmVzcG9uc2UuZGlyZWN0QW5zd2VyLCBmb3JtYXR0ZXJzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUU106IFVuaXZlcnNhbFJlc3VsdHMuZnJvbShyZXNwb25zZSwgdXJscywgZm9ybWF0dGVycyksXG4gICAgICBbU3RvcmFnZUtleXMuSU5URU5UU106IFNlYXJjaEludGVudHMuZnJvbShyZXNwb25zZS5zZWFyY2hJbnRlbnRzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5TUEVMTF9DSEVDS106IFNwZWxsQ2hlY2suZnJvbShyZXNwb25zZS5zcGVsbENoZWNrKVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgdHJhbnNmb3JtVmVydGljYWwgKGRhdGEsIGZvcm1hdHRlcnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXTogZGF0YS5yZXNwb25zZS5xdWVyeUlkLFxuICAgICAgW1N0b3JhZ2VLZXlzLk5BVklHQVRJT05dOiBuZXcgTmF2aWdhdGlvbigpLCAvLyBWZXJ0aWNhbCBkb2Vzbid0IHJlc3BvbmQgd2l0aCBvcmRlcmluZywgc28gdXNlIGVtcHR5IG5hdi5cbiAgICAgIFtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXTogVmVydGljYWxSZXN1bHRzLmZyb20oZGF0YS5yZXNwb25zZSwgZm9ybWF0dGVycyksXG4gICAgICBbU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTXTogRHluYW1pY0ZpbHRlcnMuZnJvbShkYXRhLnJlc3BvbnNlKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5JTlRFTlRTXTogU2VhcmNoSW50ZW50cy5mcm9tKGRhdGEucmVzcG9uc2Uuc2VhcmNoSW50ZW50cyksXG4gICAgICBbU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0tdOiBTcGVsbENoZWNrLmZyb20oZGF0YS5yZXNwb25zZS5zcGVsbENoZWNrKVxuICAgIH07XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFF1ZXN0aW9uU3VibWlzc2lvbiAqL1xuXG4vKipcbiAqIFF1ZXN0aW9uU3VibWlzc2lvbiBpcyB0aGUgY29yZSBzdGF0ZSBtb2RlbFxuICogdG8gcG93ZXIgdGhlIFF1ZXN0aW9uU3VibWlzc2lvbiBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb25TdWJtaXNzaW9uIHtcbiAgY29uc3RydWN0b3IgKHF1ZXN0aW9uID0ge30sIGVycm9ycykge1xuICAgIC8qKlxuICAgICAqIFRoZSBhdXRob3Igb2YgdGhlIHF1ZXN0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSBxdWVzdGlvbi5uYW1lIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgcXVlc3Rpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZW1haWwgPSBxdWVzdGlvbi5lbWFpbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgcHJpdmFjeSBwb2xpY3kgd2FzIGFwcHJvdmVkXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5wcml2YWN5UG9saWN5ID0gcXVlc3Rpb24ucHJpdmFjeVBvbGljeSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXN0aW9uIHRvIGJlIHNlbnQgdG8gdGhlIHNlcnZlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5xdWVzdGlvblRleHQgPSBxdWVzdGlvbi5xdWVzdGlvblRleHQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFsdGVybmF0aXZlIHF1ZXN0aW9uIG1ldGEgaW5mb3JtYXRpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlc3Rpb25EZXNjcmlwdGlvbiA9IHF1ZXN0aW9uLnF1ZXN0aW9uRGVzY3JpcHRpb24gfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIENvbnRhaW5zIGFueSBlcnJvcnMgYWJvdXQgdGhlIHF1ZXN0aW9uIHN1Ym1pc3Npb25cbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzIHx8IG51bGw7XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIHN1Ym1pdHRlZCAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXN0aW9uU3VibWl0dGVkOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBlcnJvcnMgKHF1ZXN0aW9uLCBlcnJvcnMpIHtcbiAgICByZXR1cm4gUXVlc3Rpb25TdWJtaXNzaW9uKHF1ZXN0aW9uLCBlcnJvcnMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBDb3JlICovXG5cbmltcG9ydCBTZWFyY2hBcGkgZnJvbSAnLi9zZWFyY2gvc2VhcmNoYXBpJztcbmltcG9ydCBBdXRvQ29tcGxldGVBcGkgZnJvbSAnLi9zZWFyY2gvYXV0b2NvbXBsZXRlYXBpJztcbmltcG9ydCBRdWVzdGlvbkFuc3dlckFwaSBmcm9tICcuL3NlYXJjaC9xdWVzdGlvbmFuc3dlcmFwaSc7XG5cbmltcG9ydCBTZWFyY2hEYXRhVHJhbnNmb3JtZXIgZnJvbSAnLi9zZWFyY2gvc2VhcmNoZGF0YXRyYW5zZm9ybWVyJztcblxuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4vc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgVmVydGljYWxSZXN1bHRzIGZyb20gJy4vbW9kZWxzL3ZlcnRpY2FscmVzdWx0cyc7XG5pbXBvcnQgVW5pdmVyc2FsUmVzdWx0cyBmcm9tICcuL21vZGVscy91bml2ZXJzYWxyZXN1bHRzJztcbmltcG9ydCBRdWVzdGlvblN1Ym1pc3Npb24gZnJvbSAnLi9tb2RlbHMvcXVlc3Rpb25zdWJtaXNzaW9uJztcblxuLyoqXG4gKiBDb3JlIGlzIHRoZSBtYWluIGFwcGxpY2F0aW9uIGNvbnRhaW5lciBmb3IgYWxsIG9mIHRoZSBuZXR3b3JrIGFuZCBzdG9yYWdlXG4gKiByZWxhdGVkIGJlaGF2aW9ycyBvZiB0aGUgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmUge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5hcGlLZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYGFwaUtleWAuIFR5cGUgbXVzdCBiZSB7c3RyaW5nfScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmV4cGVyaWVuY2VLZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYGV4cGVyaWVuY2VLZXlgLiBUeXBlIG11c3QgYmUge3N0cmluZ30nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IEFQSSBLZXkgdXNlZCBmb3IgYWxsIHJlcXVlc3RzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwaUtleSA9IGNvbmZpZy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IEFuc3dlcnMgS2V5IHVzZWQgZm9yIGFsbCByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9leHBlcmllbmNlS2V5ID0gY29uZmlnLmV4cGVyaWVuY2VLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYW5zd2VycyBjb25maWcgdmVyc2lvbiB0byB1c2UgZm9yIGFsbCByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9leHBlcmllbmNlVmVyc2lvbiA9IGNvbmZpZy5leHBlcmllbmNlVmVyc2lvbjtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjbGllbnQgbG9jYWxlIHVzZWQgZm9yIGFsbCByZXF1ZXN0cy4gSWYgbm90IHNwZWNpZmllZCwgZGVmYXVsdHMgdG8gXCJlblwiIChmb3JcbiAgICAgKiBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSkuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xvY2FsZSA9IGNvbmZpZy5sb2NhbGUgfHwgJ2VuJztcblxuICAgIC8qKlxuICAgICAqIEEgbWFwIG9mIGZpZWxkIGZvcm1hdHRlcnMgdXNlZCB0byBmb3JtYXQgcmVzdWx0cywgaWYgcHJlc2VudFxuICAgICAqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmllbGRGb3JtYXR0ZXJzID0gY29uZmlnLmZpZWxkRm9ybWF0dGVycyB8fCB7fTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjb3JlIGRhdGEgc3RvcmFnZSB0aGF0IHBvd2VycyB0aGUgVUlcbiAgICAgKiBAdHlwZSB7R2xvYmFsU3RvcmFnZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZSA9IGNvbmZpZy5nbG9iYWxTdG9yYWdlO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNvcmUgcGVyc2lzdGVudCBzdG9yYWdlXG4gICAgICogQHR5cGUge1BlcnNpc3RlbnRTdG9yYWdlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5wZXJzaXN0ZW50U3RvcmFnZSA9IGNvbmZpZy5wZXJzaXN0ZW50U3RvcmFnZTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIGNvbnRhaW5pbmcgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIFJFU1RmdWwgc2VhcmNoIEFQSVxuICAgICAqIEZvciBib3RoIHZlcnRpY2FsIGFuZCB1bml2ZXJzYWwgc2VhcmNoXG4gICAgICogQHR5cGUge1NlYXJjaH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaGVyID0gbmV3IFNlYXJjaEFwaSh7XG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIGV4cGVyaWVuY2VLZXk6IHRoaXMuX2V4cGVyaWVuY2VLZXksXG4gICAgICBleHBlcmllbmNlVmVyc2lvbjogdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24sXG4gICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3Rpb24gY29udGFpbmluZyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgUkVTVGZ1bCBhdXRvY29tcGxldGUgQVBJXG4gICAgICogRm9yIGZpbHRlciBzZWFyY2gsIHZlcnRpY2FsIGF1dG9jb21wbGV0ZSwgYW5kIHVuaXZlcnNhbCBhdXRvY29tcGxldGVcbiAgICAgKiBAdHlwZSB7QXV0b2NvbXBsZXRlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXV0b0NvbXBsZXRlID0gbmV3IEF1dG9Db21wbGV0ZUFwaSh7XG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIGV4cGVyaWVuY2VLZXk6IHRoaXMuX2V4cGVyaWVuY2VLZXksXG4gICAgICBleHBlcmllbmNlVmVyc2lvbjogdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24sXG4gICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3Rpb24gZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIFEmQSByZXN0IGludGVyZmFjZVxuICAgICAqIEB0eXBlIHtRdWVzdGlvbkFuc3dlckFwaX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3F1ZXN0aW9uQW5zd2VyID0gbmV3IFF1ZXN0aW9uQW5zd2VyQXBpKHtcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoIGluIHRoZSBjb250ZXh0IG9mIGEgdmVydGljYWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnRpY2FsS2V5IHZlcnRpY2FsIElEIGZvciB0aGUgc2VhcmNoXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBxdWVyeSBUaGUgcXVlcnkgZGV0YWlsc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuaW5wdXQgVGhlIGlucHV0IHRvIHNlYXJjaCBmb3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmZpbHRlciBUaGUgZmlsdGVyIHRvIHVzZSBpbiB0aGUgc2VhcmNoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5mYWNldEZpbHRlciBUaGUgZmFjZXQgZmlsdGVyIHRvIHVzZSBpbiB0aGUgc2VhcmNoXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBxdWVyeS5saW1pdCBUaGUgbWF4IG51bWJlciBvZiByZXN1bHRzIHRvIGluY2x1ZGUsIG1heCBvZiA1MFxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlcnkub2Zmc2V0IFRoZSByZXN1bHRzIG9mZnNldCwgZm9yIGZldGNoaW5nIG1vcmUgcmVzdWx0cyBvZiB0aGUgc2FtZSBxdWVyeVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuaWQgVGhlIHF1ZXJ5IElEIHRvIHVzZS4gSWYgcGFnaW5nIHdpdGhpbiBhIHF1ZXJ5LCB0aGUgc2FtZSBJRCBzaG91bGQgYmUgdXNlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHF1ZXJ5LmFwcGVuZCBJZiB0cnVlLCBhZGRzIHRoZSByZXN1bHRzIG9mIHRoaXMgcXVlcnkgdG8gdGhlIGVuZCBvZiB0aGUgY3VycmVudCByZXN1bHRzLCBkZWZhdWx0cyBmYWxzZVxuICAgKi9cbiAgdmVydGljYWxTZWFyY2ggKHZlcnRpY2FsS2V5LCBxdWVyeSkge1xuICAgIGlmICghcXVlcnkuYXBwZW5kKSB7XG4gICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFMsIFZlcnRpY2FsUmVzdWx0cy5zZWFyY2hMb2FkaW5nKCkpO1xuICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5TUEVMTF9DSEVDSywge30pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9zZWFyY2hlclxuICAgICAgLnZlcnRpY2FsU2VhcmNoKHZlcnRpY2FsS2V5LCB7XG4gICAgICAgIGxpbWl0OiB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuU0VBUkNIX0xJTUlUKSxcbiAgICAgICAgZ2VvbG9jYXRpb246IHRoaXMuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5HRU9MT0NBVElPTiksXG4gICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICBpc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZDogdGhpcy5faXNEeW5hbWljRmlsdGVyc0VuYWJsZWQsXG4gICAgICAgIHNraXBTcGVsbENoZWNrOiB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoJ3NraXBTcGVsbENoZWNrJyksXG4gICAgICAgIHF1ZXJ5VHJpZ2dlcjogdGhpcy5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKCdxdWVyeVRyaWdnZXInKVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IFNlYXJjaERhdGFUcmFuc2Zvcm1lci50cmFuc2Zvcm1WZXJ0aWNhbChyZXNwb25zZSwgdGhpcy5fZmllbGRGb3JtYXR0ZXJzKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBkYXRhW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuTkFWSUdBVElPTiwgZGF0YVtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuSU5URU5UUywgZGF0YVtTdG9yYWdlS2V5cy5JTlRFTlRTXSk7XG5cbiAgICAgICAgaWYgKHF1ZXJ5LmFwcGVuZCkge1xuICAgICAgICAgIGNvbnN0IG1lcmdlZFJlc3VsdHMgPSB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUylcbiAgICAgICAgICAgIC5hcHBlbmQoZGF0YVtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXSk7XG4gICAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTLCBtZXJnZWRSZXN1bHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFMsIGRhdGFbU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUU10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGFbU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTXSkge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTLCBkYXRhW1N0b3JhZ2VLZXlzLkRZTkFNSUNfRklMVEVSU10pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhW1N0b3JhZ2VLZXlzLlNQRUxMX0NIRUNLXSkge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0ssIGRhdGFbU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0tdKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2UuZGVsZXRlKCdza2lwU3BlbGxDaGVjaycpO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2UuZGVsZXRlKCdxdWVyeVRyaWdnZXInKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoIChxdWVyeVN0cmluZywgdXJscykge1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFMsIFVuaXZlcnNhbFJlc3VsdHMuc2VhcmNoTG9hZGluZygpKTtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlNQRUxMX0NIRUNLLCB7fSk7XG5cbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoZXJcbiAgICAgIC51bml2ZXJzYWxTZWFyY2gocXVlcnlTdHJpbmcsIHtcbiAgICAgICAgZ2VvbG9jYXRpb246IHRoaXMuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5HRU9MT0NBVElPTiksXG4gICAgICAgIHNraXBTcGVsbENoZWNrOiB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoJ3NraXBTcGVsbENoZWNrJyksXG4gICAgICAgIHF1ZXJ5VHJpZ2dlcjogdGhpcy5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKCdxdWVyeVRyaWdnZXInKVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IFNlYXJjaERhdGFUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVzcG9uc2UsIHVybHMsIHRoaXMuX2ZpZWxkRm9ybWF0dGVycykpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWV9JRCwgZGF0YVtTdG9yYWdlS2V5cy5RVUVSWV9JRF0pO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLk5BVklHQVRJT04sIGRhdGFbU3RvcmFnZUtleXMuTkFWSUdBVElPTl0pO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVIsIGRhdGFbU3RvcmFnZUtleXMuRElSRUNUX0FOU1dFUl0pO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTLCBkYXRhW1N0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTXSwgdXJscyk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuSU5URU5UUywgZGF0YVtTdG9yYWdlS2V5cy5JTlRFTlRTXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFU1RJT05fU1VCTUlTU0lPTiwgbmV3IFF1ZXN0aW9uU3VibWlzc2lvbih7XG4gICAgICAgICAgcXVlc3Rpb25UZXh0OiBxdWVyeVN0cmluZ1xuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0ssIGRhdGFbU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0tdKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLmRlbGV0ZSgnc2tpcFNwZWxsQ2hlY2snKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLmRlbGV0ZSgncXVlcnlUcmlnZ2VyJyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhbiBpbnB1dCwgcXVlcnkgZm9yIGEgbGlzdCBvZiBzaW1pbGFyIHJlc3VsdHMgYW5kIHNldCBpbnRvIHN0b3JhZ2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0ICAgICB0aGUgc3RyaW5nIHRvIGF1dG9jb21wbGV0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIHRoZSBuYW1lc3BhY2UgdG8gdXNlIGZvciB0aGUgc3RvcmFnZSBrZXlcbiAgICovXG4gIGF1dG9Db21wbGV0ZVVuaXZlcnNhbCAoaW5wdXQsIG5hbWVzcGFjZSkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvQ29tcGxldGVcbiAgICAgIC5xdWVyeVVuaXZlcnNhbChpbnB1dClcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkFVVE9DT01QTEVURX0uJHtuYW1lc3BhY2V9YCwgZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhbiBpbnB1dCwgcXVlcnkgZm9yIGEgbGlzdCBvZiBzaW1pbGFyIHJlc3VsdHMgaW4gdGhlIHByb3ZpZGVkIHZlcnRpY2FsXG4gICAqIGFuZCBzZXQgaW50byBzdG9yYWdlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCAgICAgICB0aGUgc3RyaW5nIHRvIGF1dG9jb21wbGV0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIHRoZSBuYW1lc3BhY2UgdG8gdXNlIGZvciB0aGUgc3RvcmFnZSBrZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnRpY2FsS2V5IHRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBleHBlcmllbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiYXJLZXkgICAgICB0aGUgYmFyIGtleSBmb3IgdGhlIGV4cGVyaWVuY2VcbiAgICovXG4gIGF1dG9Db21wbGV0ZVZlcnRpY2FsIChpbnB1dCwgbmFtZXNwYWNlLCB2ZXJ0aWNhbEtleSwgYmFyS2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5VmVydGljYWwoaW5wdXQsIHZlcnRpY2FsS2V5LCBiYXJLZXkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5BVVRPQ09NUExFVEV9LiR7bmFtZXNwYWNlfWAsIGRhdGEpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYW4gaW5wdXQsIHByb3ZpZGUgYSBsaXN0IG9mIHN1aXRhYmxlIGZpbHRlcnMgZm9yIGF1dG9jb21wbGV0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCAgdGhlIHN0cmluZyB0byBzZWFyY2ggZm9yIGZpbHRlcnMgd2l0aFxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnICB0aGUgY29uZmlnIHRvIHNlcmFjaCBmb3IgZmlsdGVycyB3aXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcubmFtZXNwYWNlICB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcudmVydGljYWxLZXkgdGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIGNvbmZpZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLmJhcktleSAgdGhlIGJhciBrZXkgZm9yIHRoZSBjb25maWcgdjFcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZy5zZWFyY2hQYXJhbWV0ZXJzICB0aGUgc2VhcmNoIHBhcmFtZXRlcnMgZm9yIHRoZSBjb25maWcgdjJcbiAgICovXG4gIGF1dG9Db21wbGV0ZUZpbHRlciAoaW5wdXQsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLl9hdXRvQ29tcGxldGVcbiAgICAgIC5xdWVyeUZpbHRlcihpbnB1dCwgY29uZmlnKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke2NvbmZpZy5uYW1lc3BhY2V9YCwgZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJtaXRzIGEgcXVlc3Rpb24gdG8gdGhlIHNlcnZlciBhbmQgdXBkYXRlcyB0aGUgdW5kZXJseWluZyBxdWVzdGlvbiBtb2RlbFxuICAgKiBAcGFyYW0ge29iamVjdH0gcXVlc3Rpb24gVGhlIHF1ZXN0aW9uIG9iamVjdCB0byBzdWJtaXQgdG8gdGhlIHNlcnZlclxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlc3Rpb24uZW50aXR5SWQgVGhlIGVudGl0eSB0byBhc3NvY2lhdGUgd2l0aCB0aGUgcXVlc3Rpb24gKHJlcXVpcmVkKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ubGFudWFnZSBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIHF1ZXN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5zaXRlIFRoZSBcInB1Ymxpc2hlclwiIG9mIHRoZSAoZS5nLiAnRklSU1RfUEFSVFknKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ubmFtZSBUaGUgbmFtZSBvZiB0aGUgYXV0aG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5lbWFpbCBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgYXV0aG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5xdWVzdGlvblRleHQgVGhlIHF1ZXN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5xdWVzdGlvbkRlc2NyaXB0aW9uIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHF1ZXN0aW9uXG4gICAqL1xuICBzdWJtaXRRdWVzdGlvbiAocXVlc3Rpb24pIHtcbiAgICByZXR1cm4gdGhpcy5fcXVlc3Rpb25BbnN3ZXJcbiAgICAgIC5zdWJtaXRRdWVzdGlvbihxdWVzdGlvbilcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFxuICAgICAgICAgIFN0b3JhZ2VLZXlzLlFVRVNUSU9OX1NVQk1JU1NJT04sXG4gICAgICAgICAgUXVlc3Rpb25TdWJtaXNzaW9uLnN1Ym1pdHRlZCgpKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgZ2l2ZW4gcXVlcnkgaW50byBzdG9yYWdlLCB0byBiZSB1c2VkIGZvciB0aGUgbmV4dCBzZWFyY2hcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBxdWVyeSB0byBzdG9yZVxuICAgKi9cbiAgc2V0UXVlcnkgKHF1ZXJ5KSB7XG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWSwgcXVlcnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgcHJvdmlkZWQgcXVlcnkgSUQsIHRvIGJlIHVzZWQgaW4gYW5hbHl0aWNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeUlkIFRoZSBxdWVyeSBpZCB0byBzdG9yZVxuICAgKi9cbiAgc2V0UXVlcnlJZCAocXVlcnlJZCkge1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFUllfSUQsIHF1ZXJ5SWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgZ2l2ZW4gZmlsdGVyIGludG8gc3RvcmFnZSwgdG8gYmUgdXNlZCBmb3IgdGhlIG5leHQgc2VhcmNoXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKiBAcGFyYW0ge0ZpbHRlcn0gZmlsdGVyICAgIHRoZSBmaWx0ZXIgdG8gc2V0XG4gICAqL1xuICBzZXRGaWx0ZXIgKG5hbWVzcGFjZSwgZmlsdGVyKSB7XG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7bmFtZXNwYWNlfWAsIGZpbHRlcik7XG4gIH1cblxuICBzZXRGYWNldEZpbHRlciAobmFtZXNwYWNlLCBmaWx0ZXIpIHtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkZBQ0VUX0ZJTFRFUn0uJHtuYW1lc3BhY2V9YCwgZmlsdGVyKTtcbiAgfVxuXG4gIGVuYWJsZUR5bmFtaWNGaWx0ZXJzICgpIHtcbiAgICB0aGlzLl9pc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBzZXRTZWFyY2hMaW1pdCAobGltaXQpIHtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlNFQVJDSF9MSU1JVCwgbGltaXQpO1xuICB9XG5cbiAgb24gKGV2dCwgbW9kdWxlSWQsIGNiKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2xvYmFsU3RvcmFnZS5vbihldnQsIG1vZHVsZUlkLCBjYik7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIENvbXBvbmVudE1hbmFnZXIgKi9cblxuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCB7IERPTSB9IGZyb20gJy4uJztcblxuLyoqXG4gKiBDb21wb25lbnRNYW5hZ2VyIGlzIGEgU2luZ2xldG9uZSB0aGF0IGNvbnRhaW5zIGJvdGggYW4gaW50ZXJuYWwgcmVnaXN0cnkgb2ZcbiAqIGVsaWdpYmxlIGNvbXBvbmVudHMgdG8gYmUgY3JlYXRlZCwgYXMgd2VsbCBhcyBrZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudFxuICogaW5zdGFudGlhdGVkIGFuZCBhY3RpdmUgY29tcG9uZW50cy5cbiAqXG4gKiBBTEwgY29tcG9uZW50cyBzaG91bGQgYmUgY29uc3RydWN0ZWQgdXNpbmcgdGhlIHtDb21wb25lbnRNYW5hZ2VyfSB2aWEgaXRzIGBjcmVhdGVgIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50TWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBpZiAoIUNvbXBvbmVudE1hbmFnZXIuc2V0SW5zdGFuY2UodGhpcykpIHtcbiAgICAgIHJldHVybiBDb21wb25lbnRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudCByZWdpc3RyeSBpcyBhbiBpbnRlcm5hbCBtYXAsIHRoYXQgY29udGFpbnNcbiAgICAgKiBhbGwgYXZhaWxhYmxlIGNvbXBvbmVudCBDTEFTU0VTIHVzZWQgZm9yIGNyZWF0aW9uIG9yIG92ZXJyaWRlLlxuICAgICAqIEVhY2ggY29tcG9uZW50IGNsYXNzIGhhcyBhIHVuaXF1ZSBUWVBFLCB3aGljaCBpcyB1c2VkIGFzIHRoZSBrZXkgZm9yIHRoZSByZWdpc3RyeVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5fY29tcG9uZW50UmVnaXN0cnkgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhY3RpdmUgY29tcG9uZW50cyBpcyBhbiBpbnRlcm5hbCBjb250YWluZXIgdG8ga2VlcCB0cmFja1xuICAgICAqIG9mIGFsbCBvZiB0aGUgY29tcG9uZW50cyB0aGF0IGhhdmUgYmVlbiBjb25zdHJ1Y3RlZFxuICAgICAqL1xuICAgIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb3JlIGxpYnJhcnkgZGVwZW5kZW5jeVxuICAgICAqXG4gICAgICogVGhlIENvcmUgY29udGFpbnMgYm90aCB0aGUgc3RvcmFnZSBBTkQgc2VydmljZXMgdGhhdCBhcmUgbmVlZGVkIGZvciBwZXJmb3JtaW5nIG9wZXJhdGlvbnNcbiAgICAgKiBsaWtlIHNlYXJjaCBhbmQgYXV0byBjb21wbGV0ZS5cbiAgICAgKlxuICAgICAqIFRoZSBzdG9yYWdlIGlzIHRoZSBzb3VyY2Ugb2YgdHJ1dGggZm9yIHRoZSBzdGF0ZSBvZiBBTEwgY29tcG9uZW50cy5cbiAgICAgKiBXaGVuZXZlciB0aGUgc3RvcmFnZSBpcyB1cGRhdGVkLCB0aGUgc3RhdGUgZ2V0cyBwdXNoZWQgZG93biB0byB0aGUgbmVjZXNzYXJ5IGNvbXBvbmVudHMuXG4gICAgICogQHR5cGUge0NvcmV9XG4gICAgICovXG4gICAgdGhpcy5fY29yZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcHJpbWFyeSByZW5kZXJlciB0byB1c2UgZm9yIGFsbCBjb21wb25lbnRzXG4gICAgICogQHR5cGUge0hhbmRsZWJhcnNSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXJlciA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgYW5hbHl0aWNzIHJlcG9ydGVyIGRlcGVuZGVuY3lcbiAgICAgKi9cbiAgICB0aGlzLl9hbmFseXRpY3NSZXBvcnRlciA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgc2V0SW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIHNldFJlbmRlcmVyIChyZW5kZXJlcikge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRDb3JlIChjb3JlKSB7XG4gICAgdGhpcy5fY29yZSA9IGNvcmU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRBbmFseXRpY3NSZXBvcnRlciAocmVwb3J0ZXIpIHtcbiAgICB0aGlzLl9hbmFseXRpY3NSZXBvcnRlciA9IHJlcG9ydGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlZ2lzdGVycyBhIGNvbXBvbmVudCB0byBiZSBlbGlnaWJsZSBmb3IgY3JlYXRpb24gYW5kIG92ZXJyaWRlLlxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gVGhlIENvbXBvbmVudCBDbGFzcyB0byByZWdpc3RlclxuICAgKi9cbiAgcmVnaXN0ZXIgKGNvbXBvbmVudENsYXp6KSB7XG4gICAgdGhpcy5fY29tcG9uZW50UmVnaXN0cnlbY29tcG9uZW50Q2xhenoudHlwZV0gPSBjb21wb25lbnRDbGF6ejtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGUgaXMgdGhlIGVudHJ5IHBvaW50IGZvciBjb25zdHJ1Y3RpbmcgYW55IGFuZCBhbGwgY29tcG9uZW50cy5cbiAgICogSXQgd2lsbCBpbnN0YW50aWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgY29tcG9uZW50LCBhbmQgYm90aCBhcHBseVxuICAgKiBpbml0aWFsIHN0YXRlIGZyb20gdGhlIHN0b3JhZ2UgYW5kIGJpbmQgaXQgdG8gdGhlIHN0b3JhZ2UgZm9yIHVwZGF0ZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnRUeXBlIFRoZSBjb21wb25lbnQgdHlwZSB0byBjcmVhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgVGhlIG9wdGlvbnMgdG8gcGlwZSB0byB0aGUgY29uc3RydWN0aW9uIG9mIHRoZSBjb21wb25lbnRcbiAgICovXG4gIGNyZWF0ZSAoY29tcG9uZW50VHlwZSwgb3B0cykge1xuICAgIC8vIEV2ZXJ5IGNvbXBvbmVudCBuZWVkcyBsb2NhbCBhY2Nlc3MgdG8gdGhlIGNvbXBvbmVudCBtYW5hZ2VyXG4gICAgLy8gYmVjYXVzZSBzb21ldGltZXMgY29tcG9uZW50cyBoYXZlIHN1YmNvbXBvbmVudHMgdGhhdCBuZWVkIHRvIGJlXG4gICAgLy8gY29uc3RydWN0ZWQgZHVyaW5nIGNyZWF0aW9uXG4gICAgbGV0IHN5c3RlbU9wdHMgPSB7XG4gICAgICBjb3JlOiB0aGlzLl9jb3JlLFxuICAgICAgcmVuZGVyZXI6IHRoaXMuX3JlbmRlcmVyLFxuICAgICAgYW5hbHl0aWNzUmVwb3J0ZXI6IHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyLFxuICAgICAgY29tcG9uZW50TWFuYWdlcjogdGhpc1xuICAgIH07XG5cbiAgICBsZXQgY29tcG9uZW50Q2xhc3MgPSB0aGlzLl9jb21wb25lbnRSZWdpc3RyeVtjb21wb25lbnRUeXBlXTtcblxuICAgIGlmIChcbiAgICAgICFjb21wb25lbnRDbGFzcy5hcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQoKSAmJlxuICAgICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5zb21lKGMgPT4gYy5uYW1lID09PSBvcHRzLm5hbWUpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICBgQW5vdGhlciBjb21wb25lbnQgd2l0aCBuYW1lICR7b3B0cy5uYW1lfSBhbHJlYWR5IGV4aXN0c2AsXG4gICAgICAgIGNvbXBvbmVudFR5cGUpO1xuICAgIH1cblxuICAgIC8vIEluc3RhbnRpYXRlIG91ciBuZXcgY29tcG9uZW50IGFuZCBrZWVwIHRyYWNrIG9mIGl0XG4gICAgbGV0IGNvbXBvbmVudCA9XG4gICAgICBuZXcgdGhpcy5fY29tcG9uZW50UmVnaXN0cnlbY29tcG9uZW50VHlwZV0ob3B0cywgc3lzdGVtT3B0cylcbiAgICAgICAgLmluaXQob3B0cyk7XG5cbiAgICB0aGlzLl9hY3RpdmVDb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcblxuICAgIC8vIElmIHRoZXJlIGlzIGEgZ2xvYmFsIHN0b3JhZ2UgdG8gcG93ZXIgc3RhdGUsIGFwcGx5IHRoZSBzdGF0ZVxuICAgIC8vIGZyb20gdGhlIHN0b3JhZ2UgdG8gdGhlIGNvbXBvbmVudCwgYW5kIHRoZW4gYmluZCB0aGUgY29tcG9uZW50XG4gICAgLy8gc3RhdGUgdG8gdGhlIHN0b3JhZ2UgdmlhIGl0cyB1cGRhdGVzXG4gICAgaWYgKHRoaXMuX2NvcmUgJiYgdGhpcy5fY29yZS5nbG9iYWxTdG9yYWdlICE9PSBudWxsKSB7XG4gICAgICBpZiAoY29tcG9uZW50Lm1vZHVsZUlkID09PSB1bmRlZmluZWQgfHwgY29tcG9uZW50Lm1vZHVsZUlkID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NvcmUuZ2xvYmFsU3RvcmFnZVxuICAgICAgICAub24oJ3VwZGF0ZScsIGNvbXBvbmVudC5tb2R1bGVJZCwgKGRhdGEpID0+IHtcbiAgICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBwcm92aWRlZCBjb21wb25lbnQgZnJvbSB0aGUgbGlzdCBvZiBhY3RpdmUgY29tcG9uZW50cyBhbmQgcmVtb3ZlXG4gICAqIHRoZSBhc3NvY2lhdGVkIHN0b3JhZ2UgZXZlbnQgbGlzdGVuZXJcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudCBUaGUgY29tcG9uZW50IHRvIHJlbW92ZVxuICAgKi9cbiAgcmVtb3ZlIChjb21wb25lbnQpIHtcbiAgICB0aGlzLl9jb3JlLmdsb2JhbFN0b3JhZ2Uub2ZmKCd1cGRhdGUnLCBjb21wb25lbnQubW9kdWxlSWQpO1xuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9hY3RpdmVDb21wb25lbnRzLmZpbmRJbmRleChjID0+IGMubmFtZSA9PT0gY29tcG9uZW50Lm5hbWUpO1xuICAgIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNvbXBvbmVudCB3aXRoIHRoZSBnaXZlbiBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjb21wbmVudCB0byByZW1vdmVcbiAgICovXG4gIHJlbW92ZUJ5TmFtZSAobmFtZSkge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMuZmluZChjID0+IGMubmFtZSA9PT0gbmFtZSk7XG4gICAgY29tcG9uZW50LnJlbW92ZSgpO1xuICAgIERPTS5lbXB0eShjb21wb25lbnQuX2NvbnRhaW5lcik7XG4gIH1cblxuICBnZXRBY3RpdmVDb21wb25lbnQgKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5maW5kKGMgPT4gYy5jb25zdHJ1Y3Rvci50eXBlID09PSB0eXBlKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVuZGVyZXIgKi9cblxuLyoqXG4gKiBSZW5kZXJlciBpcyBhbiBhYnN0cmFjdCBjbGFzcyB0aGF0IGFsbCBSZW5kZXJlcnMgc2hvdWxkIGV4dGVuZCBhbmQgaW1wbGVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcbiAgLyoqXG4gICAqIHJlbmRlciBpcyBhIGNvcmUgbWV0aG9kIGZvciBhbGwgcmVuZGVyZXJzLlxuICAgKiBBbGwgaW1wbGVtZW50YXRpb25zIHNob3VsZCBvdmVycmlkZSB0aGlzIGNsYXNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKi9cbiAgcmVuZGVyICh0ZW1wbGF0ZSwgZGF0YSkge1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHJlZ2lzdGVySGVscGVyIChuYW1lLCBjYikge1xuXG4gIH1cblxuICBjb21waWxlICh0ZW1wbGF0ZSkge1xuXG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEhhbmRsZWJhcnNSZW5kZXJlciAqL1xuXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbi8qKlxuICogSGFuZGxlYmFyc1JlbmRlcmVyIGlzIGEgd3JhcHBlciBhcm91bmQgdGhlIG5hdGl2YXRlIGhhbmRsZWJhcnMgcmVuZGVyZXIuXG4gKiBAZXh0ZW5kcyBSZW5kZXJlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYW5kbGViYXJzUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yICh0ZW1wbGF0ZXMgPSB7fSwgb3B0cyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBoYW5kbGViYXJzIGNvbXBpbGVyXG4gICAgICogQHR5cGUge0hhbmRsZWJhcnN9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9oYW5kbGViYXJzID0gdGVtcGxhdGVzLl9oYiB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIHByZS1jb21waWxlZCBoYW5kbGViYXJzIHRlbXBsYXRlc1xuICAgICAqIEB0eXBlIHtIYW5kbGViYXJzfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVzID0gdGVtcGxhdGVzIHx8IHt9O1xuICB9XG5cbiAgaW5pdCAodGVtcGxhdGVzKSB7XG4gICAgLy8gQXNzaWduIHRoZSBoYW5kbGViYXJzIGNvbXBpbGVyIGFuZCB0ZW1wbGF0ZXMgYmFzZWQgb25cbiAgICAvLyBpbmZvcm1hdGlvbiBwcm92aWRlZCBmcm9tIGV4dGVybmFsIGRlcCAoaW4gZGVmYXVsdCBjYXNlLCBpdCBjb21lcyBmcm9tIGV4dGVybmFsIHNlcnZlciByZXF1ZXN0KVxuICAgIHRoaXMuX2hhbmRsZWJhcnMgPSB0ZW1wbGF0ZXMuX2hiO1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHRlbXBsYXRlcztcblxuICAgIC8vIFRPRE8oYmlsbHkpIE9uY2Ugd2UgcmUtd3JpdGUgdGVtcGxhdGVzIHVzaW5nIHRoZSBuZXcgaGVscGVycyBsaWJyYXJ5XG4gICAgLy8gd2UgcHJvYmFibHkgZG9uJ3QgbmVlZCB0aGVzZSBjdXN0b20gaGVscGVycyBhbnltb3JlXG4gICAgdGhpcy5fcmVnaXN0ZXJDdXN0b21IZWxwZXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXJIZWxwZXIgaXMgYSBwdWJsaWMgaW50ZXJmYWNlIGZvciBleHRlcm5hbCBkZXBlbmRlbmNpZXMgdG9cbiAgICogcmVnaXN0ZXIgdGhlaXIgb3duIGN1c3RvbSBoZWxwZXJzIHRvIG91ciBpbnRlcm5hbCBIYW5kbGViYXJzIENvbXBpbGVyXG4gICAqL1xuICByZWdpc3RlckhlbHBlciAobmFtZSwgY2IpIHtcbiAgICB0aGlzLl9oYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKG5hbWUsIGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb21waWxlIGEgaGFuZGxlYmFycyB0ZW1wbGF0ZSBzbyB0aGF0IGl0IGNhbiBiZSByZW5kZXJlZCxcbiAgICogdXNpbmcgdGhlIHtIYW5kbGViYXJzfSBjb21waWxlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgVGhlIHRlbXBsYXRlIHN0cmluZyB0byBjb21waWxlXG4gICAqL1xuICBjb21waWxlICh0ZW1wbGF0ZSkge1xuICAgIGlmICh0eXBlb2YgdGVtcGxhdGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9oYW5kbGViYXJzLmNvbXBpbGUodGVtcGxhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbmRlciB3aWxsIHJlbmRlciBhIHRlbXBsYXRlIHdpdGggZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFByb3ZpZGUgZWl0aGVyIGEgdGVtcGxhdGVOYW1lIG9yIGEgcHJlLWNvbXBpbGVkIHRlbXBsYXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHByb3ZpZGUgdG8gdGhlIHRlbXBsYXRlXG4gICAqL1xuICByZW5kZXIgKGNvbmZpZywgZGF0YSkge1xuICAgIC8vIElmIGEgY3VzdG9tIHRlbXBsYXRlIGlzIHByb3ZpZGVkLCB1c2UgaXQsXG4gICAgLy8gb3RoZXJ3aXNlIGZhbGwgYmFjayB0byB0aGUgdGVtcGxhdGUgbmFtZVxuICAgIC8vIFRPRE8oYmlsbHkpIFRoaXMgaW50ZXJmYWNlIHNob3VsZCBwcm9iYWJseSBiZSBsZXNzIHVnbHlcbiAgICBpZiAoY29uZmlnLnRlbXBsYXRlICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gY29uZmlnLnRlbXBsYXRlKGRhdGEpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVzW2NvbmZpZy50ZW1wbGF0ZU5hbWVdKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBmaW5kL3JlbmRlciB0ZW1wbGF0ZTogJyArIGNvbmZpZy50ZW1wbGF0ZU5hbWUsIGUpO1xuICAgIH1cbiAgfVxuXG4gIF9yZWdpc3RlckN1c3RvbUhlbHBlcnMgKCkge1xuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2lmZXEnLCBmdW5jdGlvbiAoYXJnMSwgYXJnMiwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIChhcmcxID09PSBhcmcyKSA/IG9wdGlvbnMuZm4odGhpcykgOiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdpZm5vdGVxJywgZnVuY3Rpb24gKGFyZzEsIGFyZzIsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiAoYXJnMSAhPT0gYXJnMikgPyBvcHRpb25zLmZuKHRoaXMpIDogb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignZm9ybWF0UGhvbmVOdW1iZXInLCBmdW5jdGlvbiAocGhvbmVOdW1iZXJTdHJpbmcpIHtcbiAgICAgIHZhciBjbGVhbmVkID0gKCcnICsgcGhvbmVOdW1iZXJTdHJpbmcpLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG4gICAgICB2YXIgbWF0Y2ggPSBjbGVhbmVkLm1hdGNoKC9eKDF8KT8oXFxkezN9KShcXGR7M30pKFxcZHs0fSkkLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdmFyIGludGxDb2RlID0gKG1hdGNoWzFdID8gJysxICcgOiAnJyk7XG4gICAgICAgIHJldHVybiBbaW50bENvZGUsICcoJywgbWF0Y2hbMl0sICcpICcsIG1hdGNoWzNdLCAnLScsIG1hdGNoWzRdXS5qb2luKCcnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignYXNzaWduJywgZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIG9wdGlvbnMgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmICghb3B0aW9ucy5kYXRhLnJvb3QpIHtcbiAgICAgICAgb3B0aW9ucy5kYXRhLnJvb3QgPSB7fTtcbiAgICAgIH1cblxuICAgICAgbGV0IHYgPSAnJztcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgdiA9IHYgKyBhcmdzW2ldO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLmRhdGEucm9vdFtuYW1lXSA9IHY7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdqc29uJywgZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gbmFtZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgID8gJydcbiAgICAgICAgOiBKU09OLnN0cmluZ2lmeShuYW1lKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEhhbmRsZWJhcnNSZW5kZXJlciBmcm9tICcuL2hhbmRsZWJhcnNyZW5kZXJlcic7XG5cbi8vIEluIHRoZSBmdXR1cmUsIHRoaXMgd2lsbCBjb250YWluIGFsbCBkaWZmZXJlbnQgdHlwZXMgb2YgcmVuZGVyZXJzXG4vLyBFLmcuIE11c3RhY2hlLCBTT1ksIEhhbmRsZUJhcnMsIFJlYWN0LCBldGMuXG5leHBvcnQgY29uc3QgUmVuZGVyZXJzID0ge1xuICBTT1k6IFJlbmRlcmVyLFxuICBIYW5kbGViYXJzOiBIYW5kbGViYXJzUmVuZGVyZXJcbn07XG4iLCIvKiogQG1vZHVsZSBET00gKi9cblxuLyogZ2xvYmFsIEhUTUxFbGVtZW50LCBIVE1MRG9jdW1lbnQsIFdpbmRvdywgRXZlbnQgKi9cblxubGV0IGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuXG4vKipcbiAqIFN0YXRpYyBpbnRlcmZhY2UgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIERPTSBBUEkuXG4gKiBAbmFtZXNwYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTSB7XG4gIHN0YXRpYyBzZXR1cCAoZCwgcCkge1xuICAgIGRvY3VtZW50ID0gZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGUgYSBIVE1MRWxlbWVudCBmcm9tIGFuZCBIVE1MIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gaHRtbCBUaGUgSFRNTCB0byBwYXJzZSB0byBhIERPTSBub2RlLlxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGUgKGh0bWwpIHtcbiAgICBpZiAoJ2NyZWF0ZVJhbmdlJyBpbiBkb2N1bWVudCkge1xuICAgICAgLy8gcHJlZmVyIHRoaXMgaW1wbGVtZW50YXRpb24gYXMgaXQgaGFzIHdpZGVyIGJyb3dzZXIgc3VwcG9ydFxuICAgICAgLy8gYW5kIGl0J3MgYmV0dGVyIHBlcmZvcm1pbmcuXG4gICAgICAvLyBzZWUgaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvY29udmVydC1odG1sLXN0aW5ncy1kb20tbm9kZXNcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGh0bWwpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWcpO1xuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvLyBmYWxsYmFjayB0byB0aGlzIGJlY2F1c2Ugb2YgYSBidWcgaW4ganNkb20gdGhhdCBjYXVzZXMgdGVzdHMgdG8gZmFpbFxuICAgIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pzZG9tL2pzZG9tL2lzc3Vlcy8zOTlcbiAgICByZXR1cm4gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC9odG1sJykuYm9keTtcbiAgfVxuXG4gIC8qKlxuICAgKiBxdWVyeSB0aGUgRE9NIGZvciBhIGdpdmVuIGNzcyBzZWxlY3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgT3B0aW9uYWwgY29udGV4dCB0byB1c2UgZm9yIGEgc2VhcmNoLiBEZWZhdWx0cyB0byBkb2N1bWVudCBpZiBub3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciB0aGUgQ1NTIHNlbGVjdG9yIHRvIHF1ZXJ5IGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IHRoZSBGSVJTVCBub2RlIGl0IGZpbmRzLCBpZiBhbnlcbiAgICovXG4gIHN0YXRpYyBxdWVyeSAocGFyZW50LCBzZWxlY3Rvcikge1xuICAgIC8vIEZhY2FkZSwgc2hpZnRpbmcgdGhlIHNlbGVjdG9yIHRvIHRoZSBwYXJlbnQgYXJndW1lbnQgaWYgb25seSBvbmVcbiAgICAvLyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RvciA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgV2luZG93IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTERvY3VtZW50KSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBxdWVyeSB0aGUgRE9NIGZvciBhIGdpdmVuIGNzcyBzZWxlY3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgT3B0aW9uYWwgY29udGV4dCB0byB1c2UgZm9yIGEgc2VhcmNoLiBEZWZhdWx0cyB0byBkb2N1bWVudCBpZiBub3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciB0aGUgQ1NTIHNlbGVjdG9yIHRvIHF1ZXJ5IGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IHRoZSBGSVJTVCBub2RlIGl0IGZpbmRzLCBpZiBhbnlcbiAgICovXG4gIHN0YXRpYyBxdWVyeUFsbCAocGFyZW50LCBzZWxlY3Rvcikge1xuICAgIC8vIEZhY2FkZSwgc2hpZnRpbmcgdGhlIHNlbGVjdG9yIHRvIHRoZSBwYXJlbnQgYXJndW1lbnQgaWYgb25seSBvbmVcbiAgICAvLyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RvciA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIC8vIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSBjbGllbnQgY29kZSBpcyB1c2luZyBhIHBvaW50ZXIgdG8gYSBkb20gbm9kZSBhbmQgaXQncyBudWxsLCBlLmcuIHRoaXMuX2NvbnRhaW5lclxuICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBXaW5kb3cpIHtcbiAgICAgIHJldHVybiBbc2VsZWN0b3JdO1xuICAgIH1cblxuICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gIH1cblxuICBzdGF0aWMgb25SZWFkeSAoY2IpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGVkJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKSB7XG4gICAgICBjYigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIERPTS5vbihkb2N1bWVudCwgJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlRWxlIHdpbGwgY3JlYXRlIGEge0hUTUxFbGVtZW50fSBhbmQgYXBwbHkgdGhlIHByb3BlcnRpZXMgYXR0cmlidXRlcyB0aHJvdWdoIGFuIG9iamVjdCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGVsIFRoZSBlbGVtZW50IGB0YWdgIG5hbWUgdG8gY29uc3RydWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzX2RhdGEgT3B0aW9uYWwgYXR0cmlidXRlcyB0byBhcHBseSB0byB0aGUgbmV3IEhUTUxFbGVtZW50XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlRWwgKGVsLCBvcHRzX2RhdGEgPSB7fSkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbCk7XG4gICAgbGV0IHByb3BzID0gT2JqZWN0LmtleXMob3B0c19kYXRhKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9wc1tpXSA9PT0gJ2NsYXNzJykge1xuICAgICAgICBET00uYWRkQ2xhc3Mobm9kZSwgb3B0c19kYXRhW3Byb3BzW2ldXSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBub2RlW3Byb3BzW2ldXSA9IG9wdHNfZGF0YVtwcm9wc1tpXV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgYXBwZW5kIChwYXJlbnQsIG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBub2RlID0gcGFyZW50O1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXJlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJlbnQgPSBET00ucXVlcnkocGFyZW50KTtcbiAgICB9XG5cbiAgICAvLyBTdXBwb3J0IEhUTUwgaW5qZWN0aW9uIGFzIHdlbGwgYXMgSFRNTEVsZW1lbnQgYXBwZW5kc1xuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyQmVnaW4nLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhZGRDbGFzcyAobm9kZSwgY2xhc3NOYW1lKSB7XG4gICAgbGV0IGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJywnKTtcbiAgICBsZXQgbGVuID0gY2xhc3Nlcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBub2RlLmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGVtcHR5IChwYXJlbnQpIHtcbiAgICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICBzdGF0aWMgY3NzIChzZWxlY3Rvciwgc3R5bGVzKSB7XG4gICAgbGV0IG5vZGUgPSBET00ucXVlcnkoc2VsZWN0b3IpO1xuXG4gICAgZm9yIChsZXQgcHJvcCBpbiBzdHlsZXMpIHtcbiAgICAgIG5vZGUuc3R5bGVbcHJvcF0gPSBzdHlsZXNbcHJvcF07XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGF0dHIgKHNlbGVjdG9yLCBhdHRyLCB2YWwpIHtcbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLnNldEF0dHJpYnV0ZShhdHRyLCB2YWwpO1xuICB9XG5cbiAgc3RhdGljIGF0dHJpYnV0ZXMgKHNlbGVjdG9yLCBhdHRycykge1xuICAgIE9iamVjdC5lbnRyaWVzKGF0dHJzKVxuICAgICAgLmZvckVhY2goKFthdHRyLCB2YWxdKSA9PiB0aGlzLmF0dHIoc2VsZWN0b3IsIGF0dHIsIHZhbCkpO1xuICB9XG5cbiAgc3RhdGljIHRyaWdnZXIgKHNlbGVjdG9yLCBldmVudCwgc2V0dGluZ3MpIHtcbiAgICBsZXQgZSA9IG5ldyBFdmVudChldmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAnYnViYmxlcyc6IHRydWUsXG4gICAgICAnY2FuY2VsYWJsZSc6IHRydWVcbiAgICB9LCBzZXR0aW5ncyB8fCB7fSkpO1xuXG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5kaXNwYXRjaEV2ZW50KGUpO1xuICB9XG5cbiAgc3RhdGljIG9uIChzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgb25jZSAoc2VsZWN0b3IsIGV2dCwgaGFuZGxlcikge1xuICAgIERPTS5xdWVyeShzZWxlY3RvcikuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIHN0YXRpYyBvZmYgKHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpIHtcbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWxlZ2F0ZSAoY3R4dCwgc2VsZWN0b3IsIGV2dCwgaGFuZGxlcikge1xuICAgIGxldCBlbCA9IERPTS5xdWVyeShjdHh0KTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2dCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgd2hpbGUgKCF0YXJnZXQuaXNFcXVhbE5vZGUoZWwpKSB7XG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICBoYW5kbGVyKGV2ZW50LCB0YXJnZXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBFdmVudEVtaXR0ZXIgKi9cblxuLyoqXG4gKiBFdmVudEVtaXR0ZXIgaXMgYSBiYXNlIGNsYXNzIGZvciBhbnkgb2JqZWN0IHRoYXQgd2FudHMgdG8gZXhwb3NlXG4gKiBhIHB1Yi9zdWIgaW50ZXJmYWNlLCBmb3IgZW1pdHRpbmcgbWVzc2FnZXMgYW5kIHByb3ZpZGluZyBsaXN0ZW5lcnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgc3Vic2NyaWJlcnMgb2YgbWVzc2FnZXNcbiAgICAgKiBAdHlwZSB7b2JqZWN0W119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbiBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3Igc3Vic2NyaWJpbmcgZXZlbnRzIHRoYXQgYXJlIGVtaXR0ZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gbGlzdGVuIHRvXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIFRoZSBjYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUge2V2dH0gaXMgZW1pdHRlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uY2UgT3B0aW9uYWwgdmFsdWUgd2hpY2ggd2lsbCBvbmx5IGhhbmRsZSB0aGUgbWVzc2FnZSBvbmNlXG4gICAqL1xuICBvbiAoZXZ0LCBjYiwgb25jZSkge1xuICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgaGFuZGxlciBzaG91bGQgYmUgb2YgdHlwZSB7ZnVuY3Rpb259Jyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xpc3RlbmVyc1tldnRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVyc1tldnRdID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5fbGlzdGVuZXJzW2V2dF0ucHVzaCh7XG4gICAgICBldmVudDogZXZ0LFxuICAgICAgY2I6IGNiLFxuICAgICAgb25jZTogb25jZSB8fCBmYWxzZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogb25jZSBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3Igc3Vic2NyaWJpbmcgZXZlbnRzIHRoYXQgYXJlIGVtaXR0ZWQuXG4gICAqIFRoZSBoYW5kbGVyIHdpbGwgb25seSBiZSB0cmlnZ2VyZWQgb25jZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byBsaXN0ZW4gdG9cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgVGhlIGNhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSB7ZXZ0fSBpcyBlbWl0dGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSBPcHRpb25hbCB2YWx1ZSB3aGljaCB3aWxsIG9ubHkgaGFuZGxlIHRoZSBtZXNzYWdlIG9uY2VcbiAgICovXG4gIG9uY2UgKGV2dCwgY2IpIHtcbiAgICByZXR1cm4gdGhpcy5vbihldnQsIGNiLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvZmYgaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIHVuc3Vic2NyaWJpbmcgZnJvbSBhbiBldmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIHVuc3Vic2NyaWJlIGZyb21cbiAgICovXG4gIG9mZiAoZXZ0KSB7XG4gICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyc1tldnRdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGVtaXQgaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIGJyb2FkY2FzdGluZyBtZXNzYWdlcy9ldmVudHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byBwdWJsaXNoIGZyb21cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgdGhlIGRhdGEgdG8gc2VuZCBhbG9uZyB0byB0aGUgc3Vic2NyaWJlcnNcbiAgICovXG4gIGVtaXQgKGV2dCwgZGF0YSkge1xuICAgIGxldCBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNbZXZ0XTtcbiAgICBpZiAobGlzdGVuZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJbnZva2UgZWFjaCBvZiBhbGwgdGhlIGxpc3RlbmVyIGhhbmRsZXJzIGFuZCByZW1vdmUgdGhlIG9uZXMgdGhhdCBzaG91bGQgZmlyZSBvbmx5IG9uY2UuXG4gICAgbGV0IGtlZXAgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdGVuZXJzW2ldLmNiKGRhdGEpO1xuICAgICAgaWYgKGxpc3RlbmVyc1tpXS5vbmNlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBJbnN0ZWFkIG9mIGhhdmluZyBhICdkaXJ0eScgYXJyYXkgd2l0aCBkZWxldGVkIG9yICd1bmRlZmluZWQnIGVudHJpZXMsXG4gICAgICAvLyB3ZSBqdXN0IGNyZWF0ZSBhIGJyYW5kIG5ldyBhcnJheSB3aXRob3V0IHRoZSBsaXN0ZW5lcnMgdGhhdCB3ZXJlIHJlbW92ZWRcbiAgICAgIGtlZXAucHVzaChsaXN0ZW5lcnNbaV0pO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBvdXIgb2xkIGxpc3Qgb2YgbGlzdGVuZXJzIHRvIHRoZSBuZXdseSBjcmVhdGVkIGFycmF5XG4gICAgdGhpcy5fbGlzdGVuZXJzW2V2dF0gPSBrZWVwO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTdGF0ZSAqL1xuXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uLy4uL2NvcmUvZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlcic7XG5cbi8qKlxuICogU3RhdGUgY29udGFpbnMgdGhlIGRhdGEgZm9yIHRoZSBjb21wb25lbnRcbiAqIGFuZCBleHBvc2VzIGFuIHtFdmVudEVtaXR0ZXJ9IGludGVyZmFjZSBzbyB0aGF0IGV4dGVybmFsXG4gKiBkZXBlbmRlbmNpZXMgY2FuIGxpc3Rlbi9ob29rIHN1YnNjcmliZSB0byBtZXNzYWdlcy91cGRhdGVzLlxuICogQGV4dGVuZHMgRXZlbnRFbWl0dGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdGF0ZSA9IGRhdGEgfHwge307XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSBjb21wb25lbnQuXG4gICAqIE5PVEUoYmlsbHkpOiBEb2VzIG5vdCBmaXJlIGFuIHVwZGF0ZSBtZXNzYWdlXG4gICAqL1xuICBpbml0IChwcm9wLCBvcHRWYWwpIHtcbiAgICB0aGlzLl9zZXQocHJvcCwgb3B0VmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXR0ZXIgZm9yIHRoZSBzdGF0ZVxuICAgKiBAcGFyYW0gcHJvcCB7c3RyaW5nfE9iamVjdH0gVGhlIHByb3BlcnR5IHRvIHNldFxuICAgKiBAcGFyYW0gb3B0VmFsIE9wdGlvbmFsLCBpZiBwcm9wIGlzIGEge3N0cmluZ30sIGl0IHdpbGwgYXNzaWduIHRoZSB2YWx1ZSB0byB0aGF0IHByb3BlcnR5XG4gICAqL1xuICBzZXQgKHByb3AsIG9wdFZhbCkge1xuICAgIHRoaXMuX3NldChwcm9wLCBvcHRWYWwpO1xuICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gIH1cblxuICAvKipcbiAgICogc2V0dGVyIGZvciB0aGUgc3RhdGUgZW5hYmxlcyB5b3UgdG8gdXBkYXRlIGEgc2luZ2xlIHByb3BlcnR5LCBvciBjb21wbGV0ZSBzdGF0ZVxuICAgKiBkZXBlbmRpbmcgb24gdGhlIGFyZ3VtZW50cyBwcm92aWRlZC5cbiAgICogQHBhcmFtIHByb3Age3N0cmluZ3xPYmplY3R9IFRoZSBwcm9wZXJ0eSB0byBzZXRcbiAgICogQHBhcmFtIG9wdFZhbCBJZiBwcm9wIGlzIGEge3N0cmluZ30sIHByb3ZpZGUgaXRzIHZhbHVlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2V0IChwcm9wLCBvcHRWYWwpIHtcbiAgICBpZiAob3B0VmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3N0YXRlID0gcHJvcDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3RhdGVbcHJvcF0gPSBvcHRWYWw7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlIChkYXRhKSB7XG4gICAgdGhpcy5fc3RhdGUgPSBkYXRhO1xuICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgYSBwcm9wZXJ0aWVzIHZhbHVlIGZyb20gdGhlIHN0YXRlXG4gICAqIElmIG5vIHByb3BlcnR5IHByb3ZpZGVkLCByZXR1cm4gdGhlIGZ1bGwgc3RhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdFByb3Agb3B0aW9uYWwgcHJvcGVydHkgdG8gcmV0cmlldmVcbiAgICovXG4gIGdldCAob3B0UHJvcCkge1xuICAgIGlmIChvcHRQcm9wID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlW29wdFByb3BdO1xuICB9XG5cbiAgaGFzIChwcm9wKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlW3Byb3BdICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBhc0pTT04gKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgfVxufVxuIiwiLyoqXG4gKiBNb2RlbCBmb3IgdGhlIGFuYWx5dGljcyBldmVudCB0eXBlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuYWx5dGljc0V2ZW50IHtcbiAgY29uc3RydWN0b3IgKHR5cGUsIGxhYmVsKSB7XG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgZXZlbnQgdG8gcmVwb3J0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmV2ZW50VHlwZSA9IHR5cGUudG9VcHBlckNhc2UoKTtcblxuICAgIC8qKlxuICAgICAqIEFuIG9wdGlvbmFsIGxhYmVsIHRvIGJlIHByb3ZpZGVkIGZvciB0aGUgZXZlbnRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGlmIChsYWJlbCkge1xuICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBwcm92aWRlZCBvcHRpb25zIHRvIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBBZGRpdGlvbmFsIG9wdGlvbnMgZm9yIHRoZSBldmVudFxuICAgKi9cbiAgYWRkT3B0aW9ucyAob3B0aW9ucykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBldmVudCBpbiB0aGUgYXBpIGZvcm1hdCwgdHlwaWNhbGx5IGZvciByZXBvcnRpbmcgdG8gdGhlIGFwaVxuICAgKi9cbiAgdG9BcGlFdmVudCAoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBbmFseXRpY3NSZXBvcnRlciAqL1xuXG5pbXBvcnQgQW5hbHl0aWNzRXZlbnQgZnJvbSAnLi9hbmFseXRpY3NldmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCB7IEFOQUxZVElDU19CQVNFX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgSHR0cFJlcXVlc3RlciBmcm9tICcuLi9odHRwL2h0dHByZXF1ZXN0ZXInO1xuXG4vKipcbiAqIENsYXNzIGZvciByZXBvcnRpbmcgYW5hbHl0aWNzIGV2ZW50cyB0byB0aGUgc2VydmVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuYWx5dGljc1JlcG9ydGVyIHtcbiAgY29uc3RydWN0b3IgKGNvcmUsIGV4cGVyaWVuY2VLZXksIGV4cGVyaWVuY2VWZXJzaW9uLCBidXNpbmVzc0lkLCBnbG9iYWxPcHRpb25zID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBUaGUgaW50ZXJuYWwgYnVzaW5lc3MgaWRlbnRpZmllciB1c2VkIGZvciByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX2J1c2luZXNzSWQgPSBidXNpbmVzc0lkO1xuXG4gICAgLyoqXG4gICAgICogT3B0aW9ucyB0byBpbmNsdWRlIHdpdGggZXZlcnkgYW5hbHl0aWMgZXZlbnQgcmVwb3J0ZWQgdG8gdGhlIHNlcnZlclxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9nbG9iYWxPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZ2xvYmFsT3B0aW9ucywgeyBleHBlcmllbmNlS2V5IH0pO1xuXG4gICAgaWYgKGV4cGVyaWVuY2VWZXJzaW9uKSB7XG4gICAgICB0aGlzLl9nbG9iYWxPcHRpb25zLmV4cGVyaWVuY2VWZXJzaW9uID0gZXhwZXJpZW5jZVZlcnNpb247XG4gICAgfVxuXG4gICAgLy8gbGlzdGVuIHRvIHF1ZXJ5IGlkIHVwZGF0ZXNcbiAgICBjb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBpZCA9PiB0aGlzLnNldFF1ZXJ5SWQoaWQpKTtcbiAgfVxuXG4gIHNldFF1ZXJ5SWQgKHF1ZXJ5SWQpIHtcbiAgICB0aGlzLl9nbG9iYWxPcHRpb25zLnF1ZXJ5SWQgPSBxdWVyeUlkO1xuICB9XG5cbiAgcmVwb3J0IChldmVudCkge1xuICAgIGlmICghKGV2ZW50IGluc3RhbmNlb2YgQW5hbHl0aWNzRXZlbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0FuYWx5dGljc0Vycm9yKCdUcmllZCB0byBzZW5kIGludmFsaWQgYW5hbHl0aWNzIGV2ZW50JywgZXZlbnQpO1xuICAgIH1cblxuICAgIGV2ZW50LmFkZE9wdGlvbnModGhpcy5fZ2xvYmFsT3B0aW9ucyk7XG5cbiAgICByZXR1cm4gbmV3IEh0dHBSZXF1ZXN0ZXIoKS5iZWFjb24oXG4gICAgICBgJHtBTkFMWVRJQ1NfQkFTRV9VUkx9L3JlYWx0aW1lYW5hbHl0aWNzL2RhdGEvYW5zd2Vycy8ke3RoaXMuX2J1c2luZXNzSWR9YCxcbiAgICAgIHtcbiAgICAgICAgJ2RhdGEnOiBldmVudC50b0FwaUV2ZW50KClcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNb2R1bGVEYXRhICovXG5cbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlcic7XG5cbi8qKlxuICogTW9kdWxlRGF0YSBpcyB1c2VkIGFzIGEgZ2VuZXJpYyBtb2RlbCBmb3IgU3RvcmFnZS5cbiAqIFR5cGljYWxseSBhbiBpbnN0YW5jZSBvZiBNb2R1bGVEYXRhIHBvd2VycyBhIHNpbmdsZSBjb21wb25lbnQuXG5cbiAqIEEgZGF0YSBtb2RlbCB0aGF0IGV4cG9zZXMgYW4gZXZlbnQgZW1pdHRlciBpbnRlcmZhY2UuXG4gKiBAZXh0ZW5kcyBFdmVudEVtaXR0ZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kdWxlRGF0YSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChpZCwgZGF0YSA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgdGhpcy5faGlzdG9yeSA9IFtdO1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIHRoaXMuc2V0KGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcGxhY2VzIHRoZSBjdXJyZW50bHkgaGVsZCBkYXRhIHdpdGggdGhlIGdpdmVuIGRhdGFcbiAgICogQHBhcmFtIHsqfSBkYXRhIHRoZSBkYXRhIHRvIHJlcGxhY2UgdGhlIGN1cnJlbnQgZGF0YVxuICAgKi9cbiAgc2V0IChkYXRhKSB7XG4gICAgdGhpcy5jYXB0dXJlUHJldmlvdXMoKTtcblxuICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShkYXRhKSB8fCBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKHRoaXMuX2RhdGEpLmxlbmd0aCkge1xuICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuX2RhdGEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGZvciBzaGFsbG93IGVxdWFsaXR5XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgICAgIGlmICh0aGlzLl9kYXRhW2tleV0gIT09IGRhdGFba2V5XSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLl9kYXRhKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNhcHR1cmVQcmV2aW91cyAoKSB7XG4gICAgaWYgKHRoaXMuX2hpc3RvcnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5faGlzdG9yeSA9IFtdO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9oaXN0b3J5Lmxlbmd0aCArIDEgPiA1KSB7XG4gICAgICB0aGlzLl9oaXN0b3J5LnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgLy8gSWYgZGF0YSBpcyBldmVyIHVuZGVmaW5lZCwgd2UgZGVmYXVsdCB0byBlbXB0eSBvYmplY3RcbiAgICB0aGlzLl9oaXN0b3J5LnB1c2goSlNPTi5zdHJpbmdpZnkodGhpcy5fZGF0YSB8fCB7fSkpO1xuICB9XG5cbiAgdW5kbyAoKSB7XG4gICAgbGV0IHByZXZpb3VzID0ge307XG4gICAgaWYgKHRoaXMuX3ByZXZpb3VzLmxlbmd0aCA+IDApIHtcbiAgICAgIHByZXZpb3VzID0gSlNPTi5wYXJzZSh0aGlzLl9wcmV2aW91cy5wb3AoKSk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0YS5zZXQocHJldmlvdXMpO1xuICB9XG5cbiAgcmF3ICgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgR2xvYmFsU3RvcmFnZSAqL1xuXG5pbXBvcnQgTW9kdWxlRGF0YSBmcm9tICcuL21vZHVsZWRhdGEnO1xuaW1wb3J0IHsgQW5zd2Vyc1N0b3JhZ2VFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvcnMnO1xuXG4vKipcbiAqIFN0b3JhZ2UgaXMgYSBjb250YWluZXIgYXJvdW5kIGFwcGxpY2F0aW9uIHN0YXRlLlxuICogSXQgZXhwb3NlcyBhbiBpbnRlcmZhY2UgZm9yIENSVUQgb3BlcmF0aW9ucyBhcyB3ZWxsIGFzIGxpc3RlbmluZ1xuICogZm9yIHN0YXRlZnVsIGNoYW5nZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JhbFN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lciA9IHt9O1xuICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGF0YSBpbiBzdG9yYWdlIHdpdGggdGhlIGdpdmVuIGtleSB0byB0aGUgcHJvdmlkZWQgZGF0YSxcbiAgICogY29tcGxldGVseSBvdmVyd3JpdGluZyBhbnkgZXhpc3RpbmcgZGF0YS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSB0aGUgc3RvcmFnZSBrZXkgdG8gc2V0XG4gICAqIEBwYXJhbSB7Kn0gZGF0YSB0aGUgZGF0YSB0byBzZXRcbiAgICovXG4gIHNldCAoa2V5LCBkYXRhKSB7XG4gICAgdGhpcy5faW5pdERhdGFDb250YWluZXIoa2V5LCBkYXRhKTtcbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2tleV0uc2V0KGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbGwga2V5L3ZhbHVlIHBhaXJzIGluIHRoZSBwcm92aWRlZCBtYXAgdG8gdGhlIHN0b3JhZ2VcbiAgICogQHBhcmFtIHsqfSBkYXRhIFRoZSBrZXkvdmFsdWUgcGFpcnMgdG8gc2V0IGluIHRoZSBzdG9yYWdlXG4gICAqL1xuICBzZXRBbGwgKGRhdGEpIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcbiAgICAgIHRoaXMuc2V0KGtleSwgdmFsKTtcbiAgICB9XG4gIH1cblxuICBfaW5pdERhdGFDb250YWluZXIgKGtleSwgZGF0YSkge1xuICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCB8fCBrZXkgPT09IG51bGwgfHwgdHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzU3RvcmFnZUVycm9yKCdJbnZhbGlkIHN0b3JhZ2Uga2V5IHByb3ZpZGVkJywga2V5LCBkYXRhKTtcbiAgICB9XG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCB8fCBkYXRhID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc1N0b3JhZ2VFcnJvcignTm8gZGF0YSBwcm92aWRlZCcsIGtleSwgZGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX21vZHVsZURhdGFDb250YWluZXJba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2tleV0gPSBuZXcgTW9kdWxlRGF0YShrZXkpO1xuICAgICAgdGhpcy5fYXBwbHlGdXR1cmVMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gIH1cblxuICBnZXRTdGF0ZSAobW9kdWxlSWQpIHtcbiAgICBpZiAodGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5yYXcoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRBbGwgKGtleSkge1xuICAgIGNvbnN0IGRhdGEgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGRhdGFLZXkgb2YgT2JqZWN0LmtleXModGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcikpIHtcbiAgICAgIGlmIChkYXRhS2V5LnN0YXJ0c1dpdGgoa2V5KSAmJiB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2RhdGFLZXldLnJhdygpICE9PSBudWxsKSB7XG4gICAgICAgIGRhdGEucHVzaCh0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2RhdGFLZXldLnJhdygpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBkYXRhIGluIHN0b3JhZ2Ugd2l0aCB0aGUgZ2l2ZW4ga2V5IHRvIHRoZSBwcm92aWRlZCBkYXRhLFxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRoZSBzdG9yYWdlIGtleSB0byBkZWxldGVcbiAgICovXG4gIGRlbGV0ZSAoa2V5KSB7XG4gICAgLy8gTm90ZTogRG8gd2UgbmVlZCB0byBjbGVhbiB1cCBsaXN0ZW5lcnMgaGVyZT9cbiAgICBkZWxldGUgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltrZXldO1xuICB9XG5cbiAgb24gKGV2dCwgbW9kdWxlSWQsIGNiKSB7XG4gICAgbGV0IG1vZHVsZURhdGEgPSB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXTtcbiAgICBpZiAobW9kdWxlRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXS5wdXNoKHtcbiAgICAgICAgZXZlbnQ6IGV2dCxcbiAgICAgICAgY2I6IGNiXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdLm9uKGV2dCwgY2IpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb2ZmIChldnQsIG1vZHVsZUlkLCBjYikge1xuICAgIGxldCBtb2R1bGVEYXRhID0gdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF07XG4gICAgaWYgKG1vZHVsZURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdLnBvcCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5vZmYoZXZ0LCBjYik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfYXBwbHlGdXR1cmVMaXN0ZW5lcnMgKG1vZHVsZUlkKSB7XG4gICAgbGV0IGZ1dHVyZXMgPSB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdO1xuICAgIGlmICghZnV0dXJlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnV0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGZ1dHVyZSA9IGZ1dHVyZXNbaV07XG4gICAgICB0aGlzLm9uKGZ1dHVyZS5ldmVudCwgbW9kdWxlSWQsIGZ1dHVyZS5jYik7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlYXJjaEFwaSB9IGZyb20gJy4vc2VhcmNoL3NlYXJjaGFwaSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEFuYWx5dGljc1JlcG9ydGVyIH0gZnJvbSAnLi9hbmFseXRpY3MvYW5hbHl0aWNzcmVwb3J0ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2R1bGVEYXRhIH0gZnJvbSAnLi9zdG9yYWdlL21vZHVsZWRhdGEnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlL2dsb2JhbHN0b3JhZ2UnO1xuIiwiLyoqIEBtb2R1bGUgQ29tcG9uZW50ICovXG5cbmltcG9ydCB7IFJlbmRlcmVycyB9IGZyb20gJy4uL3JlbmRlcmluZy9jb25zdCc7XG5cbmltcG9ydCBET00gZnJvbSAnLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RhdGUgZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBBbmFseXRpY3NSZXBvcnRlciB9IGZyb20gJy4uLy4uL2NvcmUnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgQW5hbHl0aWNzRXZlbnQgZnJvbSAnLi4vLi4vY29yZS9hbmFseXRpY3MvYW5hbHl0aWNzZXZlbnQnO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBDb21wb25lbnQgaXMgYW4gYWJzdHJhY3Rpb24gdGhhdCBlbmNhcHN1bGF0ZXMgc3RhdGUsIGJlaGF2aW9yLFxuICogYW5kIHZpZXcgZm9yIGEgcGFydGljdWxhciBjaHVuayBvZiBmdW5jdGlvbmFsaXR5IG9uIHRoZSBwYWdlLlxuICpcbiAqIFRoZSBBUEkgZXhwb3NlcyBldmVudCBsaWZlIGN5Y2xlIGhvb2tzIGZvciB3aGVuIHRoaW5ncyBhcmUgcmVuZGVyZWQsXG4gKiBtb3VudGVkLCBjcmVhdGVkLCBldGMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICB0aGlzLm1vZHVsZUlkID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFVuaXF1ZSBuYW1lIG9mIHRoaXMgY29tcG9uZW50IGluc3RhbmNlXG4gICAgICogVXNlZCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIG90aGVyIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgdHlwZVxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5uYW1lID0gY29uZmlnLm5hbWUgfHwgdGhpcy5jb25zdHJ1Y3Rvci50eXBlO1xuXG4gICAgLyoqXG4gICAgICogQ2FjaGUgdGhlIG9wdGlvbnMgc28gdGhhdCB3ZSBjYW4gcHJvcG9nYXRlIHByb3Blcmx5IHRvIGNoaWxkIGNvbXBvbmVudHNcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcblxuICAgIC8qKlxuICAgICAqIEFuIGlkZW50aWZpZXIgdXNlZCB0byBjbGFzc2lmeSB0aGUgdHlwZSBvZiBjb21wb25lbnQuXG4gICAgICogVGhlIGNvbXBvbmVudCBtYW5hZ2VyIHVzZXMgdGhpcyBpbmZvcm1hdGlvbiBpbiBvcmRlciB0byBwZXJzaXN0IGFuZCBvcmdhbml6ZSBjb21wb25lbnRzXG4gICAgICogQHR5cGUge3N0cmluZ3xDb21wb25lbnRUeXBlfVxuICAgICAqL1xuICAgIHRoaXMuX3R5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgcGFyZW50IGNvbXBvbmVudCwgaWYgZXhpc3RzXG4gICAgICogQHR5cGUge0NvbXBvbmVudH1cbiAgICAgKi9cbiAgICB0aGlzLl9wYXJlbnRDb250YWluZXIgPSBjb25maWcucGFyZW50Q29udGFpbmVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGNvbnRhaW5lciBmb3IgYWxsIHRoZSBjaGlsZCBjb21wb25lbnRzXG4gICAgICogQHR5cGUge0NvbXBvbmVudFtdfVxuICAgICAqL1xuICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3RhdGUgKGRhdGEpIG9mIHRoZSBjb21wb25lbnQgdG8gYmUgcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlIGZvciByZW5kZXJpbmdcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX3N0YXRlID0gbmV3IFN0YXRlKGNvbmZpZy5zdGF0ZSk7XG5cbiAgICAvKipcbiAgICAgKiBUT0RPKGJpbGx5KSBUaGlzIHNob3VsZCBiZSAnc2VydmljZXMnXG4gICAgICovXG4gICAgdGhpcy5jb3JlID0gc3lzdGVtQ29uZmlnLmNvcmUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlciwgd2hpY2ggY29udGFpbnMgYWxsIG9mIHRoZSBjb21wb25lbnQgY2xhc3Nlc1xuICAgICAqIGVsaWdpYmxlIHRvIGJlIGNyZWF0ZWRcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50TWFuYWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIgPSBzeXN0ZW1Db25maWcuY29tcG9uZW50TWFuYWdlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGFuYWx5dGljcyByZXBvcnRlciwgdXNlZCB0byByZXBvcnQgZXZlbnRzIGZvciB0aGlzIGNvbXBvbmVudFxuICAgICAqIEB0eXBlIHtBbmFseXRpY3NSZXBvcnRlcn1cbiAgICAgKi9cbiAgICB0aGlzLmFuYWx5dGljc1JlcG9ydGVyID0gc3lzdGVtQ29uZmlnLmFuYWx5dGljc1JlcG9ydGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBPcHRpb25zIHRvIGluY2x1ZGUgd2l0aCBhbGwgYW5hbHl0aWMgZXZlbnRzIHNlbnQgYnkgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYW5hbHl0aWNzT3B0aW9ucyA9IGNvbmZpZy5hbmFseXRpY3NPcHRpb25zIHx8IHt9O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIERPTSBub2RlIHRoYXQgdGhlIGNvbXBvbmVudCB3aWxsIGJlIGFwcGVuZGVkIHRvIHdoZW4gbW91bnRlZC9yZW5kZXJlZC5cbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgaWYgKHRoaXMuX3BhcmVudENvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgaWYgKHR5cGVvZiBjb25maWcuY29udGFpbmVyICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgYGNvbnRhaW5lcmAgb3B0aW9uIGZvciBjb21wb25lbnQgY29uZmlndXJhdGlvbi4gTXVzdCBiZSBvZiB0eXBlIGBzdHJpbmdgLicpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29udGFpbmVyID0gRE9NLnF1ZXJ5KGNvbmZpZy5jb250YWluZXIpIHx8IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IERPTS5xdWVyeSh0aGlzLl9wYXJlbnRDb250YWluZXIsIGNvbmZpZy5jb250YWluZXIpO1xuXG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgcGFyZW50LCBhbmQgdGhlIGNvbnRhaW5lciBpcyBtaXNzaW5nIGZyb20gdGhlIERPTSxcbiAgICAgIC8vIHdlIGNvbnN0cnVjdCB0aGUgY29udGFpbmVyIGFuZCBhcHBlbmQgaXQgdG8gdGhlIHBhcmVudFxuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBET00uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogY29uZmlnLmNvbnRhaW5lci5zdWJzdHJpbmcoMSwgY29uZmlnLmNvbnRhaW5lci5sZW5ndGgpXG4gICAgICAgIH0pO1xuICAgICAgICBET00uYXBwZW5kKHRoaXMuX3BhcmVudENvbnRhaW5lciwgdGhpcy5fY29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29udGFpbmVyID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIGNvbnRhaW5lciBET00gbm9kZTogJyArIGNvbmZpZy5jb250YWluZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIGNsYXNzIHRvIGJlIGFwcGxpZWQgdG8ge3RoaXMuX2NvbnRhaW5lcn0gbm9kZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fY2xhc3NOYW1lID0gY29uZmlnLmNsYXNzIHx8ICdjb21wb25lbnQnO1xuXG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gcmVuZGVyIGZ1bmN0aW9uIHRvIGJlIHVzZWQgaW5zdGVhZCBvZiB1c2luZyB0aGUgZGVmYXVsdCByZW5kZXJlclxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXIgPSBjb25maWcucmVuZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgZGVmYXVsdCB7UmVuZGVyZXJ9IHRoYXQgd2lsbCBiZSB1c2VkIGZvciByZW5kZXJpbmcgdGhlIHRlbXBsYXRlXG4gICAgICogQHR5cGUge1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3JlbmRlcmVyID0gc3lzdGVtQ29uZmlnLnJlbmRlcmVyIHx8IFJlbmRlcmVycy5IYW5kbGViYXJzO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHN0cmluZyB0byB1c2UgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50XG4gICAgICogSWYgdGhpcyBpcyBsZWZ0IGVtcHR5LCB3ZSBsb29rdXAgdGhlIHRlbXBsYXRlIHRoZSBiYXNlIHRlbXBsYXRlcyB1c2luZyB0aGUgdGVtcGxhdGVOYW1lXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZSA9IGNvbmZpZy50ZW1wbGF0ZSA/IHRoaXMuX3JlbmRlcmVyLmNvbXBpbGUoY29uZmlnLnRlbXBsYXRlKSA6IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGVOYW1lIHRvIHVzZSBmb3IgcmVuZGVyaW5nIHRoZSBjb21wb25lbnQuXG4gICAgICogVGhpcyBpcyBvbmx5IHVzZWQgaWYgX3RlbXBsYXRlIGlzIGVtcHR5LlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gY29uZmlnLnRlbXBsYXRlTmFtZSB8fCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRUZW1wbGF0ZU5hbWUoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHN0YXRlIGluZGljYXRpbmcgd2hldGhlciBvciBub3QgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBtb3VudGVkIHRvIHRoZSBET01cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjaywgdGhhdHMgdXNlZCB0byB0cmFuc2Zvcm0gdGhlIGludGVybmFsIGRhdGFcbiAgICAgKiBtb2RlbHMgb2YgdGhlIGNvbXBvbmVudHMsIGJlZm9yZSBpdCBnZXRzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudCBzdGF0ZS5cbiAgICAgKiBCeSBkZWZhdWx0LCBubyB0cmFuc2Zvcm1hdGlvbiBoYXBwZW5zLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLnRyYW5zZm9ybURhdGEgPSBjb25maWcudHJhbnNmb3JtRGF0YSB8fCB0aGlzLnRyYW5zZm9ybURhdGEgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnQgaXMgY3JlYXRlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vbkNyZWF0ZSA9IGNvbmZpZy5vbkNyZWF0ZU92ZXJyaWRlIHx8IHRoaXMub25DcmVhdGUgfHwgZnVuY3Rpb24gKCkge307XG4gICAgdGhpcy5vbkNyZWF0ZSA9IHRoaXMub25DcmVhdGUuYmluZCh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBNb3VudGVkLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLm9uTW91bnQgPSBjb25maWcub25Nb3VudE92ZXJyaWRlIHx8IHRoaXMub25Nb3VudCB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgICB0aGlzLm9uTW91bnQgPSB0aGlzLm9uTW91bnQuYmluZCh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudHMgc3RhdGUgaXMgdXBkYXRlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vblVwZGF0ZSA9IGNvbmZpZy5vblVwZGF0ZU92ZXJyaWRlIHx8IHRoaXMub25VcGRhdGUgfHwgZnVuY3Rpb24gKCkgeyB9O1xuICAgIHRoaXMub25VcGRhdGUgPSB0aGlzLm9uVXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBBIHVzZXIgcHJvdmlkZWQgb25DcmVhdGUgY2FsbGJhY2tcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy51c2VyT25DcmVhdGUgPSBjb25maWcub25DcmVhdGUgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBBIHVzZXIgcHJvdmlkZWQgb25Nb3VudCBjYWxsYmFja1xuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLnVzZXJPbk1vdW50ID0gY29uZmlnLm9uTW91bnQgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBBIHVzZXIgcHJvdmlkZWQgb25VcGRhdGUgY2FsbGJhY2tcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy51c2VyT25VcGRhdGUgPSBjb25maWcub25VcGRhdGUgfHwgZnVuY3Rpb24gKCkge307XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ2RlZmF1bHQnO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0NvbXBvbmVudCc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpbml0IChvcHRzKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUob3B0cy5kYXRhIHx8IG9wdHMuc3RhdGUgfHwge30pO1xuICAgICAgdGhpcy5vbkNyZWF0ZSgpO1xuICAgICAgdGhpcy51c2VyT25DcmVhdGUoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICAnRXJyb3IgaW5pdGlhbGl6aW5nIGNvbXBvbmVudCcsXG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IudHlwZSxcbiAgICAgICAgZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fc3RhdGUub24oJ3VwZGF0ZScsICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMub25VcGRhdGUoKTtcbiAgICAgICAgdGhpcy51c2VyT25VcGRhdGUoKTtcbiAgICAgICAgdGhpcy51bk1vdW50KCk7XG4gICAgICAgIHRoaXMubW91bnQoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgICAnRXJyb3IgdXBkYXRpbmcgY29tcG9uZW50JyxcbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnR5cGUsXG4gICAgICAgICAgZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBET00uYWRkQ2xhc3ModGhpcy5fY29udGFpbmVyLCB0aGlzLl9jbGFzc05hbWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHsgX2NvbmZpZzogdGhpcy5fY29uZmlnIH0sIGRhdGEpO1xuICAgIHRoaXMuX3N0YXRlLnNldChuZXdTdGF0ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRTdGF0ZSAocHJvcCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5nZXQocHJvcCk7XG4gIH1cblxuICBoYXNTdGF0ZSAocHJvcCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5oYXMocHJvcCk7XG4gIH1cblxuICB0cmFuc2Zvcm1EYXRhIChkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBhZGRDaGlsZCAoZGF0YSwgdHlwZSwgb3B0cykge1xuICAgIGxldCBjaGlsZENvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoXG4gICAgICB0eXBlLFxuICAgICAgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcbiAgICAgICAgcGFyZW50Q29udGFpbmVyOiB0aGlzLl9jb250YWluZXIsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0sIG9wdHMgfHwge30sIHtcbiAgICAgICAgX3BhcmVudE9wdHM6IHRoaXMuX2NvbmZpZ1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5fY2hpbGRyZW4ucHVzaChjaGlsZENvbXBvbmVudCk7XG4gICAgcmV0dXJuIGNoaWxkQ29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFVubW91bnQgYW5kIHJlbW92ZSB0aGlzIGNvbXBvbmVudCBhbmQgaXRzIGNoaWxkcmVuIGZyb20gdGhlIGxpc3RcbiAgICogb2YgYWN0aXZlIGNvbXBvbmVudHNcbiAgICovXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy5fY2hpbGRyZW4uZm9yRWFjaChjID0+IGMucmVtb3ZlKCkpO1xuICAgIHRoaXMuY29tcG9uZW50TWFuYWdlci5yZW1vdmUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSByZW5kZXIgbWV0aG9kIHRvIGJlIHVzZWQgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlbmRlclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBzZXRSZW5kZXIgKHJlbmRlcikge1xuICAgIHRoaXMuX3JlbmRlciA9IHJlbmRlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHJlbmRlcmVyIGZvciB0aGUgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7UmVuZGVyZXJUeXBlfSByZW5kZXJlclxuICAgKi9cbiAgc2V0UmVuZGVyZXIgKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSBSZW5kZXJlcnNbcmVuZGVyZXJdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRlbXBsYXRlIGZvciB0aGUgY29tcG9uZW50IHRvIHVzZSB3aGVuIHJlbmRlcmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAgICovXG4gIHNldFRlbXBsYXRlICh0ZW1wbGF0ZSkge1xuICAgIHRoaXMuX3RlbXBsYXRlID0gdGhpcy5fcmVuZGVyZXIuY29tcGlsZSh0ZW1wbGF0ZSk7XG4gIH1cblxuICB1bk1vdW50ICgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBjaGlsZC51bk1vdW50KCk7XG4gICAgfSk7XG5cbiAgICBET00uZW1wdHkodGhpcy5fY29udGFpbmVyKTtcbiAgICB0aGlzLl9jaGlsZHJlbi5mb3JFYWNoKGMgPT4gYy5yZW1vdmUoKSk7XG4gICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLm9uVW5Nb3VudCgpO1xuICB9XG5cbiAgbW91bnQgKCkge1xuICAgIGlmICghdGhpcy5fY29udGFpbmVyKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5iZWZvcmVNb3VudCgpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgRE9NLmFwcGVuZCh0aGlzLl9jb250YWluZXIsIHRoaXMucmVuZGVyKHRoaXMuX3N0YXRlLmFzSlNPTigpKSk7XG5cbiAgICAvLyBQcm9jZXNzIHRoZSBET00gdG8gZGV0ZXJtaW5lIGlmIHdlIHNob3VsZCBjcmVhdGVcbiAgICAvLyBpbi1tZW1vcnkgc3ViLWNvbXBvbmVudHMgZm9yIHJlbmRlcmluZ1xuICAgIGxldCBkb21Db21wb25lbnRzID0gRE9NLnF1ZXJ5QWxsKHRoaXMuX2NvbnRhaW5lciwgJ1tkYXRhLWNvbXBvbmVudF06bm90KFtkYXRhLWlzLWNvbXBvbmVudC1tb3VudGVkXSknKTtcbiAgICBkb21Db21wb25lbnRzLmZvckVhY2goYyA9PiB0aGlzLl9jcmVhdGVTdWJjb21wb25lbnQoYywgdGhpcy5fc3RhdGUuZ2V0KCkpKTtcblxuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgY2hpbGQubW91bnQoKTtcbiAgICB9KTtcblxuICAgIC8vIEF0dGFjaCBhbmFseXRpY3MgaG9va3MgYXMgbmVjZXNzYXJ5XG4gICAgaWYgKHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIpIHtcbiAgICAgIGxldCBkb21Ib29rcyA9IERPTS5xdWVyeUFsbCh0aGlzLl9jb250YWluZXIsICdbZGF0YS1ldmVudHR5cGVdOm5vdChbZGF0YS1pcy1hbmFseXRpY3MtYXR0YWNoZWRdKScpO1xuICAgICAgZG9tSG9va3MuZm9yRWFjaCh0aGlzLl9jcmVhdGVBbmFseXRpY3NIb29rLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy5vbk1vdW50KHRoaXMpO1xuICAgIHRoaXMudXNlck9uTW91bnQodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZW5kZXIgdGhlIHRlbXBsYXRlIHVzaW5nIHRoZSB7UmVuZGVyZXJ9IHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgYW5kIHRlbXBsYXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHJlbmRlciAoZGF0YSA9IHRoaXMuX3N0YXRlLmdldCgpKSB7XG4gICAgdGhpcy5iZWZvcmVSZW5kZXIoKTtcbiAgICAvLyBUZW1wb3JhcnkgZml4IGZvciBwYXNzaW5nIGltbXV0YWJsZSBkYXRhIHRvIHRyYW5zZm9ybURhdGEoKS5cbiAgICBkYXRhID0gdGhpcy50cmFuc2Zvcm1EYXRhKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpKTtcblxuICAgIGxldCBodG1sID0gJyc7XG4gICAgLy8gVXNlIGVpdGhlciB0aGUgY3VzdG9tIHJlbmRlciBmdW5jdGlvbiBvciB0aGUgaW50ZXJuYWwgcmVuZGVyZXJcbiAgICAvLyBkZXBlbmRhbnQgb24gdGhlIGNvbXBvbmVudCBjb25maWd1cmF0aW9uXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGh0bWwgPSB0aGlzLl9yZW5kZXIoZGF0YSk7XG4gICAgICBpZiAodHlwZW9mIGh0bWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVuZGVyIG1ldGhvZCBtdXN0IHJldHVybiBIVE1MIGFzIHR5cGUge3N0cmluZ30nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVuZGVyIHRoZSBleGlzdGluZyB0ZW1wbGF0ZXMgYXMgYSBzdHJpbmdcbiAgICAgIGh0bWwgPSB0aGlzLl9yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgICB0ZW1wbGF0ZTogdGhpcy5fdGVtcGxhdGUsXG4gICAgICAgIHRlbXBsYXRlTmFtZTogdGhpcy5fdGVtcGxhdGVOYW1lXG4gICAgICB9LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvLyBXZSBjcmVhdGUgYW4gSFRNTCBEb2N1bWVudCBmcmFnbWVudCB3aXRoIHRoZSByZW5kZXJlZCBzdHJpbmdcbiAgICAvLyBTbyB0aGF0IHdlIGNhbiBxdWVyeSBpdCBmb3IgcHJvY2Vzc2luZyBvZiBzdWIgY29tcG9uZW50c1xuICAgIGxldCBlbCA9IERPTS5jcmVhdGUoaHRtbCk7XG5cbiAgICB0aGlzLmFmdGVyUmVuZGVyKCk7XG4gICAgcmV0dXJuIGVsLmlubmVySFRNTDtcbiAgfVxuXG4gIF9jcmVhdGVTdWJjb21wb25lbnQgKGRvbUNvbXBvbmVudCwgZGF0YSkge1xuICAgIGRvbUNvbXBvbmVudC5kYXRhc2V0LmlzQ29tcG9uZW50TW91bnRlZCA9IHRydWU7XG4gICAgY29uc3QgZGF0YXNldCA9IGRvbUNvbXBvbmVudC5kYXRhc2V0O1xuICAgIGNvbnN0IHR5cGUgPSBkYXRhc2V0LmNvbXBvbmVudDtcbiAgICBjb25zdCBwcm9wID0gZGF0YXNldC5wcm9wO1xuICAgIGxldCBvcHRzID0gZGF0YXNldC5vcHRzID8gSlNPTi5wYXJzZShkYXRhc2V0Lm9wdHMpIDoge307XG5cbiAgICBsZXQgY2hpbGREYXRhID0gZGF0YVtwcm9wXSB8fCB7fTtcblxuICAgIG9wdHMgPSB7XG4gICAgICAuLi5vcHRzLFxuICAgICAgY29udGFpbmVyOiBkb21Db21wb25lbnRcbiAgICB9O1xuXG4gICAgLy8gVE9ETyhiaWxseSkgUmlnaHQgbm93LCBpZiB3ZSBwcm92aWRlIGFuIGFycmF5IGFzIHRoZSBkYXRhIHByb3AsXG4gICAgLy8gdGhlIGJlaGF2aW9yIGlzIHRvIGNyZWF0ZSBtYW55IGNvbXBvbmVudHMgZm9yIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkuXG4gICAgLy8gVEhBVCBpbnRlcmZhY2UgU0hPVUxEIGNoYW5nZSB0byB1c2UgYSBkaWZmZXJlbnQgcHJvcGVydHkgdGhhdCBkZWZpbmVzXG4gICAgLy8gd2hldGhlciB0byBhcnJheSBkYXRhIHNob3VsZCBiZSB1c2VkIGZvciBhIHNpbmdsZSBjb21wb25lbnQgb3JcbiAgICAvLyB0byBjcmVhdGUgbWFueSBjb21wb25lbnRzIGZvciBlYWNoIGl0ZW0uXG4gICAgLy8gT3ZlcmxvYWRpbmcgYW5kIGhhdmluZyB0aGlzIHNpZGUgZWZmZWN0IGlzIHVuaW50dWl0aXZlIGFuZCBXUk9OR1xuICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZERhdGEpKSB7XG4gICAgICAvLyBSZW5kZXJpbmcgYSBzdWIgY29tcG9uZW50IHNob3VsZCBiZSB3aXRoaW4gdGhlIGNvbnRleHQsXG4gICAgICAvLyBvZiB0aGUgbm9kZSB0aGF0IHdlIHByb2Nlc3NlZCBpdCBmcm9tXG4gICAgICB0aGlzLmFkZENoaWxkKGNoaWxkRGF0YSwgdHlwZSwgb3B0cyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2hpbGREYXRhLnJldmVyc2UoKTtcbiAgICBjaGlsZERhdGEuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIHRoaXMuYWRkQ2hpbGQoZGF0YSwgdHlwZSwgb3B0cyk7XG4gICAgfSk7XG4gIH1cblxuICBfY3JlYXRlQW5hbHl0aWNzSG9vayAoZG9tQ29tcG9uZW50KSB7XG4gICAgZG9tQ29tcG9uZW50LmRhdGFzZXQuaXNBbmFseXRpY3NBdHRhY2hlZCA9IHRydWU7XG4gICAgY29uc3QgZGF0YXNldCA9IGRvbUNvbXBvbmVudC5kYXRhc2V0O1xuICAgIGNvbnN0IHR5cGUgPSBkYXRhc2V0LmV2ZW50dHlwZTtcbiAgICBjb25zdCBsYWJlbCA9IGRhdGFzZXQuZXZlbnRsYWJlbDtcbiAgICBjb25zdCBvcHRpb25zID0gZGF0YXNldC5ldmVudG9wdGlvbnMgPyBKU09OLnBhcnNlKGRhdGFzZXQuZXZlbnRvcHRpb25zKSA6IHt9O1xuXG4gICAgRE9NLm9uKGRvbUNvbXBvbmVudCwgJ2NsaWNrJywgZSA9PiB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBBbmFseXRpY3NFdmVudCh0eXBlLCBsYWJlbCk7XG4gICAgICBldmVudC5hZGRPcHRpb25zKHRoaXMuX2FuYWx5dGljc09wdGlvbnMpO1xuICAgICAgZXZlbnQuYWRkT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgIHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIucmVwb3J0KGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbkNyZWF0ZSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGNvbnN0cnVjdGVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvbkNyZWF0ZSAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uVXBkYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGNoYW5nZXNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uVXBkYXRlIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlUmVuZGVyIGV2ZW50IGlzIHRyaWdnZXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYmVmb3JlUmVuZGVyIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYWZ0ZXJSZW5kZXIgZXZlbnQgaXMgdHJpZ2dlcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIGFmdGVyUmVuZGVyIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25Nb3VudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFwcGVuZGVkIHRvIHRoZSBET01cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvblVuTW91bnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyByZW1vdmVkIGZyb20gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25Vbk1vdW50IChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlTW91bnQgaXMgdHJpZ2dlcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQgdG8gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYmVmb3JlTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvbkRlc3Ryb3kgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uRGVzdHJveSAoY2IpIHtcblxuICB9XG59XG4iLCIvKiogQG1vZHVsZSBOYXZpZ2F0aW9uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIFRoZSBkZWJvdW5jZSBkdXJhdGlvbiBmb3IgcmVzaXplIGV2ZW50c1xuICogQHR5cGUge251bWJlcn1cbiAqL1xuY29uc3QgUkVTSVpFX0RFQk9VTkNFID0gMTAwO1xuXG4vKipcbiAqIFRoZSBUYWIgaXMgYSBtb2RlbCB0aGF0IGlzIHVzZWQgdG8gcG93ZXIgdGhlIE5hdmlnYXRpb24gdGFicyBpbiB0aGUgdmlldy5cbiAqIEl0J3MgaW5pdGlhbGl6ZWQgdGhyb3VnaCB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50LlxuICovXG5leHBvcnQgY2xhc3MgVGFiIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSB0YWIgdGhhdCBpcyBleHBvc2VkIGZvciB0aGUgbGlua1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbCA9IGNvbmZpZy5sYWJlbDtcbiAgICBpZiAodHlwZW9mIHRoaXMubGFiZWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCdsYWJlbCBpcyBhIHJlcXVpcmVkIGNvbmZpZ3VyYXRpb24gb3B0aW9uIGZvciB0YWIuJywgJ05hdmlnYXRpb25Db21wb25lbnQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcGxldGUgVVJMLCBpbmNsdWRpbmcgdGhlIHBhcmFtc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy51cmwgPSBjb25maWcudXJsO1xuICAgIGlmICh0eXBlb2YgdGhpcy51cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCd1cmwgaXMgYSByZXF1aXJlZCBjb25maWd1cmF0aW9uIG9wdGlvbiBmb3IgdGFiLicsICdOYXZpZ2F0aW9uQ29tcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlcnZlcnNpZGUgdmVydGljYWwgY29uZmlnIGlkIHRoYXQgdGhpcyBpcyByZWZlcmVuY2VkIHRvLlxuICAgICAqIEJ5IHByb3ZpZGluZyB0aGlzLCBlbmFibGVzIGR5bmFtaWMgc29ydGluZyBiYXNlZCBvbiByZXN1bHRzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5jb25maWdJZCA9IGNvbmZpZy5jb25maWdJZCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhc2UgVVJMIHVzZWQgZm9yIGNvbnN0cnVjdGluZyB0aGUgVVJMIHdpdGggcGFyYW1zXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmJhc2VVcmwgPSBjb25maWcudXJsO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHNob3cgdGhpcyB0YWIgZmlyc3QgaW4gdGhlIG9yZGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc0ZpcnN0ID0gY29uZmlnLmlzRmlyc3QgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRvIGFwcGx5IGEgc3BlY2lhbCBjbGFzcyB0byB0aGVcbiAgICAgKiBtYXJrdXAgdG8gZGV0ZXJtaW5lIGlmIGl0J3MgYW4gYWN0aXZlIHRhYlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNBY3RpdmUgPSBjb25maWcuaXNBY3RpdmUgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogaGVscGVyIHRvIGNvbnN0cnVjdCB0aGUgZXZlbnRPcHRpb25zIGZvciBhbmFseXRpY3NcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldCBldmVudE9wdGlvbnMgKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiB0aGlzLmNvbmZpZ0lkXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogZnJvbSB3aWxsIGNvbnN0cnVjdCBhIG1hcCBvZiBjb25maWdJZCB0byB7VGFifSBmcm9tXG4gICAqIGEgY29uZmlndXJhdGlvbiBmaWxlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0YWJzQ29uZmlnIHRoZSBjb25maWd1cmF0aW9uIHRvIHVzZVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHRhYnNDb25maWcpIHtcbiAgICBsZXQgdGFicyA9IHt9O1xuICAgIC8vIFBhcnNlIHRoZSBvcHRpb25zIGFuZCBidWlsZCBvdXQgb3VyIHRhYnMgYW5kXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzQ29uZmlnLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdGFiID0gdGFic0NvbmZpZ1tpXTtcbiAgICAgIC8vIEZvciB0YWJzIHdpdGhvdXQgY29uZmlnIGlkcywgbWFwIHRoZWlyIFVSTCB0byB0aGUgY29uZmlnSURcbiAgICAgIC8vIHRvIGF2b2lkIGR1cGxpY2F0aW9uIG9mIHJlbmRlcnNcbiAgICAgIGlmICh0YWIuY29uZmlnSWQgPT09IHVuZGVmaW5lZCAmJiB0YWJzW3RhYi5jb25maWdJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YWIuY29uZmlnSWQgPSB0YWIudXJsO1xuICAgICAgfVxuXG4gICAgICB0YWJzW3RhYi5jb25maWdJZF0gPSBuZXcgVGFiKHRhYik7XG4gICAgfVxuICAgIHJldHVybiB0YWJzO1xuICB9XG59XG5cbi8qKlxuICogTmF2aWdhdGlvbkNvbXBvbmVudCBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgYnVpbGRpbmcgYSBkeW5hbWljXG4gKiBuYXZpZ2F0aW9uIHRoYXQgaXMgcG93ZXJlZCBieSB1bml2ZXJzYWwgc2VhcmNoIHVwZGF0ZXMuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gc2hvdyBvbiB0aGUgZHJvcGRvd24gbWVudSBidXR0b25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZHJvcGRvd25MYWJlbCA9IGNvbmZpZy5kcm9wZG93bkxhYmVsIHx8ICdNb3JlJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBpY29uIHRvIHNob3cgb24gdGhlIGRyb3Bkb3duIG1lbnUgYnV0dG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmRyb3Bkb3duSWNvbiA9IGNvbmZpZy5kcm9wZG93bkljb24gfHwgJ2thYm9iJztcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHJlbmRlciBhIHN0YXRpYyBuYXZpZ2F0aW9uIHdpdGggbm8gXCJtb3JlXCIgbWVudVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuc3RhdGljID0gY29uZmlnLnN0YXRpYyB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkYXRhIHN0b3JhZ2Uga2V5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuTkFWSUdBVElPTjtcblxuICAgIC8qKlxuICAgICAqIFVub3JkZXJlZCBtYXAgb2YgZWFjaCB0YWIsIGtleWVkIGJ5IFZTIGNvbmZpZ0lkXG4gICAgICogQHR5cGUge09iamVjdC48U3RyaW5nLCBPYmplY3Q+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGFicyA9IFRhYi5mcm9tKGNvbmZpZy50YWJzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcmRlciBvZiB0aGUgdGFicywgcGFyc2VkIGZyb20gY29uZmlndXJhdGlvbiBvciBVUkwuXG4gICAgICogVGhpcyBnZXRzIHVwZGF0ZWQgYmFzZWQgb24gdGhlIHNlcnZlciByZXN1bHRzXG4gICAgICogQHR5cGUge0FycmF5LjxTdHJpbmc+fSBUaGUgbGlzdCBvZiBWUyBjb25maWdJZHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RhYk9yZGVyID0gdGhpcy5nZXREZWZhdWx0VGFiT3JkZXIoY29uZmlnLnRhYnMsIHRoaXMuZ2V0VXJsUGFyYW1zKCkpO1xuXG4gICAgLyoqXG4gICAgICogQnJlYWtwb2ludHMgYXQgd2hpY2ggbmF2aWdhdGlvbiBpdGVtcyBtb3ZlIHRvIHRoZSBcIm1vcmVcIiBkcm9wZG93blxuICAgICAqIEB0eXBlIHtudW1iZXJbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX25hdkJyZWFrcG9pbnRzID0gW107XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTmF2aWdhdGlvbic7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ25hdmlnYXRpb24vbmF2aWdhdGlvbic7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgRE9NLm9uKHdpbmRvdywgJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2RlYm91bmNlVGltZXIpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGVib3VuY2VUaW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kZWJvdW5jZVRpbWVyID0gc2V0VGltZW91dCh0aGlzLnJlZml0TmF2LmJpbmQodGhpcyksIFJFU0laRV9ERUJPVU5DRSk7XG4gICAgICB9KTtcbiAgICAgIERPTS5vbih3aW5kb3csICdjbGljaycsIHRoaXMuY2hlY2tPdXRzaWRlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgdGhpcy5yZWZpdE5hdigpO1xuICAgICAgRE9NLm9uKERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb3JlJyksICdjbGljaycsIHRoaXMudG9nZ2xlTW9yZURyb3Bkb3duLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHJlZml0TmF2ICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtY29udGFpbmVyJyk7XG4gICAgY29uc3QgbW9yZUJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb3JlJyk7XG4gICAgY29uc3QgbWFpbkxpbmtzID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LWV4cGFuZGVkJyk7XG4gICAgY29uc3QgY29sbGFwc2VkTGlua3MgPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9kYWwnKTtcblxuICAgIGNvbnN0IG5hdldpZHRoID0gbW9yZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3l4dC1OYXYtaXRlbS0tbW9yZScpXG4gICAgICA/IGNvbnRhaW5lci5vZmZzZXRXaWR0aFxuICAgICAgOiBjb250YWluZXIub2Zmc2V0V2lkdGggLSBtb3JlQnV0dG9uLm9mZnNldFdpZHRoO1xuICAgIGxldCBudW1CcmVha3BvaW50cyA9IHRoaXMuX25hdkJyZWFrcG9pbnRzLmxlbmd0aDtcblxuICAgIC8vIHN1bSBjaGlsZCB3aWR0aHMgaW5zdGVhZCBvZiB1c2luZyBwYXJlbnQncyB3aWR0aCB0byBhdm9pZFxuICAgIC8vIGJyb3dzZXIgaW5jb25zaXN0ZW5jaWVzXG4gICAgbGV0IG1haW5MaW5rc1dpZHRoID0gMDtcbiAgICBmb3IgKGxldCBlbCBvZiBtYWluTGlua3MuY2hpbGRyZW4pIHtcbiAgICAgIG1haW5MaW5rc1dpZHRoICs9IGVsLm9mZnNldFdpZHRoO1xuICAgIH1cblxuICAgIGlmIChtYWluTGlua3NXaWR0aCA+IG5hdldpZHRoKSB7XG4gICAgICB0aGlzLl9uYXZCcmVha3BvaW50cy5wdXNoKG1haW5MaW5rc1dpZHRoKTtcbiAgICAgIGNvbnN0IGxhc3RMaW5rID0gbWFpbkxpbmtzLmNoaWxkcmVuLml0ZW0obWFpbkxpbmtzLmNoaWxkcmVuLmxlbmd0aCAtIDEpO1xuICAgICAgaWYgKGxhc3RMaW5rID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbGxhcHNlZExpbmtzLnByZXBlbmQobGFzdExpbmspO1xuXG4gICAgICBpZiAobW9yZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3l4dC1OYXYtaXRlbS0tbW9yZScpKSB7XG4gICAgICAgIG1vcmVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgneXh0LU5hdi1pdGVtLS1tb3JlJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChudW1CcmVha3BvaW50cyAmJiBuYXZXaWR0aCA+IHRoaXMuX25hdkJyZWFrcG9pbnRzW251bUJyZWFrcG9pbnRzIC0gMV0pIHtcbiAgICAgICAgY29uc3QgZmlyc3RMaW5rID0gY29sbGFwc2VkTGlua3MuY2hpbGRyZW4uaXRlbSgwKTtcbiAgICAgICAgaWYgKGZpcnN0TGluayA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBtYWluTGlua3MuYXBwZW5kKGZpcnN0TGluayk7XG4gICAgICAgIHRoaXMuX25hdkJyZWFrcG9pbnRzLnBvcCgpO1xuICAgICAgICBudW1CcmVha3BvaW50cy0tO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29sbGFwc2VkTGlua3MuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIG1vcmVCdXR0b24uY2xhc3NMaXN0LmFkZCgneXh0LU5hdi1pdGVtLS1tb3JlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZU1vcmVEcm9wZG93bigpO1xuICAgIGlmIChtYWluTGlua3NXaWR0aCA+IG5hdldpZHRoIHx8XG4gICAgICAobnVtQnJlYWtwb2ludHMgPiAwICYmIG5hdldpZHRoID4gdGhpcy5fbmF2QnJlYWtwb2ludHNbbnVtQnJlYWtwb2ludHMgLSAxXSkpIHtcbiAgICAgIHRoaXMucmVmaXROYXYoKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZU1vcmVEcm9wZG93biAoKSB7XG4gICAgY29uc3QgY29sbGFwc2VkID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vZGFsJyk7XG4gICAgY29sbGFwc2VkLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgIGNvbnN0IG1vcmVCdXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9yZScpO1xuICAgIG1vcmVCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICB9XG5cbiAgb3Blbk1vcmVEcm9wZG93biAoKSB7XG4gICAgY29uc3QgY29sbGFwc2VkID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vZGFsJyk7XG4gICAgY29sbGFwc2VkLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgIGNvbnN0IG1vcmVCdXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9yZScpO1xuICAgIG1vcmVCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gIH1cblxuICB0b2dnbGVNb3JlRHJvcGRvd24gKCkge1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb2RhbCcpO1xuICAgIGNvbGxhcHNlZC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICBjb25zdCBtb3JlQnV0dG9uID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vcmUnKTtcbiAgICBtb3JlQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGNvbGxhcHNlZC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKTtcbiAgfVxuXG4gIGNoZWNrT3V0c2lkZUNsaWNrIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy55eHQtTmF2LWNvbnRhaW5lcicpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZU1vcmVEcm9wZG93bigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbmNlIHRoZSBzZXJ2ZXIgZGF0YSBvbmx5IHByb3ZpZGVzIGEgbGlzdCBvZlxuICAgKiBWUyBjb25maWdJZHMsIHdlIG5lZWQgdG8gY29tcHV0ZSBhbmQgdHJhbnNmb3JtXG4gICAqIHRoZSBkYXRhIGludG8gdGhlIHByb3BlciBmb3JtYXQgZm9yIHJlbmRlcmluZy5cbiAgICpcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIGlmIChkYXRhLnRhYk9yZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3RhYk9yZGVyID0gdGhpcy5tZXJnZVRhYk9yZGVyKGRhdGEudGFiT3JkZXIsIHRoaXMuX3RhYk9yZGVyKTtcbiAgICB9XG5cbiAgICAvLyBTaW5jZSB0aGUgdGFiIG9yZGVyaW5nIGNhbiBjaGFuZ2UgYmFzZWQgb24gdGhlIHNlcnZlciBkYXRhXG4gICAgLy8gd2UgbmVlZCB0byB1cGRhdGUgZWFjaCB0YWJzIFVSTCB0byBpbmNsdWRlIHRoZSBvcmRlciBhcyBwYXJ0IG9mIHRoZWlyIHBhcmFtcy5cbiAgICAvLyBUaGlzIGhlbHBzIHdpdGggcGVyc2lzdGluZyBzdGF0ZSBhY3Jvc3MgdmVydGljYWxzLlxuICAgIGxldCB0YWJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90YWJPcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRhYiA9IHRoaXMuX3RhYnNbdGhpcy5fdGFiT3JkZXJbaV1dO1xuICAgICAgaWYgKHRhYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhYi51cmwgPSB0aGlzLmdlbmVyYXRlVGFiVXJsKHRhYi5iYXNlVXJsLCB0aGlzLmdldFVybFBhcmFtcygpKTtcbiAgICAgICAgdGFicy5wdXNoKHRhYik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKHtcbiAgICAgIHRhYnM6IHRhYnMsXG4gICAgICBkcm9wZG93bkxhYmVsOiB0aGlzLmRyb3Bkb3duTGFiZWwsXG4gICAgICBkcm9wZG93bkljb246IHRoaXMuZHJvcGRvd25JY29uLFxuICAgICAgc3RhdGljOiB0aGlzLnN0YXRpY1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VXJsUGFyYW1zICgpIHtcbiAgICByZXR1cm4gbmV3IFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0RGVmYXVsdFRhYk9yZGVyIHdpbGwgY29tcHV0ZSB0aGUgaW5pdGlhbCB0YWIgb3JkZXJpbmcgYmFzZWRcbiAgICogb24gYSBjb21iaW5hdGlvbiBvZiB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZCBkaXJlY3RseSB0byB0aGUgY29tcG9uZW50XG4gICAqIGFuZCB0aGUgdXJsIHBhcmFtcy5cbiAgICogQHBhcmFtIHtPYmplY3RbXX0gdGFic0NvbmZpZ1xuICAgKiBAcGFyYW0ge1NlYXJjaFBhcmFtc31cbiAgICovXG4gIGdldERlZmF1bHRUYWJPcmRlciAodGFic0NvbmZpZywgdXJsUGFyYW1zKSB7XG4gICAgbGV0IHRhYk9yZGVyID0gW107XG5cbiAgICAvLyBVc2UgdGhlIG9yZGVyaW5nIGZyb20gdGhlIFVSTCBhcyB0aGUgcHJpbWFyeSBjb25maWd1cmF0aW9uXG4gICAgLy8gQW5kIHRoZW4gbWVyZ2UgaXQgd2l0aCB0aGUgbG9jYWwgY29uZmlndXJhdGlvbiwgaWYgcHJvdmlkZWQuXG4gICAgaWYgKHVybFBhcmFtcyAmJiB1cmxQYXJhbXMuaGFzKCd0YWJPcmRlcicpKSB7XG4gICAgICB0YWJPcmRlciA9IHVybFBhcmFtcy5nZXQoJ3RhYk9yZGVyJykuc3BsaXQoJywnKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNDb25maWcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhYiA9IHRhYnNDb25maWdbaV07XG4gICAgICAvLyBTb21lIHRhYnMgZG9uJ3QgaGF2ZSBjb25maWdJZCwgc28gd2UgbWFwIGl0IGZyb20gVVJMXG4gICAgICBpZiAodGFiLmNvbmZpZ0lkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGFiLmNvbmZpZ0lkID0gdGFiLnVybDtcbiAgICAgIH1cblxuICAgICAgLy8gQXZvaWQgZHVwbGljYXRlcyBpZiBjb25maWcgd2FzIHByb3ZpZGVkIGZyb20gVVJMXG4gICAgICBpZiAodGFiT3JkZXIuaW5jbHVkZXModGFiLmNvbmZpZ0lkKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gaXNGaXJzdCBzaG91bGQgYWx3YXlzIGJlIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBsaXN0XG4gICAgICBpZiAodGFiLmlzRmlyc3QpIHtcbiAgICAgICAgdGFiT3JkZXIudW5zaGlmdCh0YWIuY29uZmlnSWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFiT3JkZXIucHVzaCh0YWIuY29uZmlnSWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YWJPcmRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBtZXJnZVRhYk9yZGVyIG1lcmdlcyB0d28gYXJyYXlzIGludG8gb25lXG4gICAqIGJ5IGFwcGVuZGluZyBhZGRpdGlvbmFsIHRhYnMgdG8gdGhlIGVuZCBvZiB0aGUgb3JpZ2luYWwgYXJyYXlcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdGFiT3JkZXIgVGFiIG9yZGVyIHByb3ZpZGVkIGJ5IHRoZSBzZXJ2ZXJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gb3RoZXJUYWJPcmRlciBUYWIgb3JkZXIgcHJvdmlkZWQgYnkgY29uZmlndXJhdGlvblxuICAgKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAgICovXG4gIG1lcmdlVGFiT3JkZXIgKHRhYk9yZGVyLCBvdGhlclRhYk9yZGVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdGhlclRhYk9yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YWJDb25maWcgPSBvdGhlclRhYk9yZGVyW2ldO1xuICAgICAgaWYgKHRhYk9yZGVyLmluY2x1ZGVzKHRhYkNvbmZpZykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIGlzRmlyc3Qgc2hvdWxkIGJlIGFuIG92ZXJyaWRlIHRvIGR5bmFtaWMgdGFiIG9yZGVyaW5nLlxuICAgICAgaWYgKHRoaXMuX3RhYnNbdGFiQ29uZmlnXSAmJiB0aGlzLl90YWJzW3RhYkNvbmZpZ10uaXNGaXJzdCkge1xuICAgICAgICB0YWJPcmRlci51bnNoaWZ0KHRhYkNvbmZpZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWJPcmRlci5wdXNoKHRhYkNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYk9yZGVyO1xuICB9XG5cbiAgZ2VuZXJhdGVUYWJVcmwgKGJhc2VVcmwsIHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKSkge1xuICAgIC8vIFdlIHdhbnQgdG8gcGVyc2lzdCB0aGUgcGFyYW1zIGZyb20gdGhlIGV4aXN0aW5nIFVSTCB0byB0aGUgbmV3XG4gICAgLy8gVVJMUyB3ZSBjcmVhdGUuXG4gICAgcGFyYW1zLnNldCgndGFiT3JkZXInLCB0aGlzLl90YWJPcmRlcik7XG4gICAgcmV0dXJuIGJhc2VVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyICovXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBhcGkgZmlsdGVyIGFuZCBwcm92aWRlcyBzdGF0aWMgbWV0aG9kcyBmb3IgZWFzaWx5IGNvbnN0cnVjdGluZyBGaWx0ZXJzLlxuICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLnlleHQuY29tL2RvY3MvYXBpLXJlZmVyZW5jZS8jb3BlcmF0aW9uL2xpc3RFbnRpdGllcyBmb3Igc3RydWN0dXJlIGRldGFpbHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBhIEpTT04gZm9ybWF0IGZpbHRlciByZXR1cm5lZCBmcm9tIHRoZSBzZXJ2ZXIgaW50byBhIEZpbHRlclxuICAgKiBAcGFyYW0geyp9IHJlc3BvbnNlRmlsdGVyIEEgZmlsdGVyIGluIEpTT04gZm9ybWF0IHJldHVybmVkIGZyb20gdGhlIGJhY2tlbmRcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBmcm9tUmVzcG9uc2UgKHJlc3BvbnNlRmlsdGVyKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoSlNPTi5wYXJzZShyZXNwb25zZUZpbHRlcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIG5ldyBGaWx0ZXIgcmVwcmVzZW50aW5nIHRoZSBPUiBvZiBhbGwgcHJvdmlkZWQgZmlsdGVyc1xuICAgKiBAcGFyYW0gIHsuLi5GaWx0ZXJ9IGZpbHRlcnMgVGhlIGZpbHRlcnMgdG8gT1IgdG9nZXRoZXJcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBvciAoLi4uZmlsdGVycykge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgICckb3InOiBmaWx0ZXJzXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgbmV3IEZpbHRlciByZXByZXNlbnRpbmcgdGhlIEFORCBvZiBhbGwgcHJvdmlkZWQgZmlsdGVyc1xuICAgKiBAcGFyYW0gIHsuLi5GaWx0ZXJ9IGZpbHRlcnMgVGhlIGZpbHRlcnMgdG8gQU5EIHRvZ2V0aGVyXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgYW5kICguLi5maWx0ZXJzKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgJyRhbmQnOiBmaWx0ZXJzXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT1IgZmlsdGVycyB3aXRoIHRoZSBzYW1lIGtleXMsIHRoZW4gQU5EIHRoZSByZXN1bHRpbmcgZ3JvdXBzXG4gICAqIEBwYXJhbSAgey4uLkZpbHRlcn0gZmlsdGVycyBUaGUgZmlsdGVycyB0byBncm91cFxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGdyb3VwICguLi5maWx0ZXJzKSB7XG4gICAgY29uc3QgZ3JvdXBzID0ge307XG4gICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgZmlsdGVycykge1xuICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMoZmlsdGVyKVswXTtcbiAgICAgIGlmICghZ3JvdXBzW2tleV0pIHtcbiAgICAgICAgZ3JvdXBzW2tleV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1trZXldLnB1c2goZmlsdGVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBncm91cEZpbHRlcnMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIE9iamVjdC5rZXlzKGdyb3VwcykpIHtcbiAgICAgIGdyb3VwRmlsdGVycy5wdXNoKGdyb3Vwc1tmaWVsZF0ubGVuZ3RoID4gMSA/IEZpbHRlci5vciguLi5ncm91cHNbZmllbGRdKSA6IGdyb3Vwc1tmaWVsZF1bMF0pO1xuICAgIH1cblxuICAgIHJldHVybiBncm91cEZpbHRlcnMubGVuZ3RoID4gMSA/IEZpbHRlci5hbmQoLi4uZ3JvdXBGaWx0ZXJzKSA6IGdyb3VwRmlsdGVyc1swXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJlcXVhbCB0b1wiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGVxdWFsIHRvXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZXF1YWwgKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGVxJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImxlc3MgdGhhblwiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGxlc3MgdGhhblxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGxlc3NUaGFuIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRsdCcsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJsZXNzIHRoYW4gb3IgZXF1YWwgdG9cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG9cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBsZXNzVGhhbkVxdWFsIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRsZScsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJncmVhdGVyIHRoYW5cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBncmVhdGVyIHRoYW5cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBncmVhdGVyVGhhbiAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckZ3QnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwiZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ3JlYXRlclRoYW5FcXVhbCAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckZ2UnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGluY2x1c2l2ZSByYW5nZSBmaWx0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSBtaW4gVGhlIG1pbmltdW0gdmFsdWVcbiAgICogQHBhcmFtIHsqfSBtYXggVGhlIG1heGltdW0gdmFsdWVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBpbmNsdXNpdmVSYW5nZSAoZmllbGQsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgW2ZpZWxkXToge1xuICAgICAgICAnJGdlJzogbWluLFxuICAgICAgICAnJGxlJzogbWF4XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGV4Y2x1c2l2ZSByYW5nZSBmaWx0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSBtaW4gVGhlIG1pbmltdW0gdmFsdWVcbiAgICogQHBhcmFtIHsqfSBtYXggVGhlIG1heGltdW0gdmFsdWVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBleGNsdXNpdmVSYW5nZSAoZmllbGQsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgW2ZpZWxkXToge1xuICAgICAgICAnJGd0JzogbWluLFxuICAgICAgICAnJGx0JzogbWF4XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IHBvc2l0aW9uIGZpbHRlclxuICAgKiBAcGFyYW0ge251bWJlcn0gbGF0IFRoZSBsYXRpdHVkZSBvZiB0aGUgcG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxuZyBUaGUgbG9uZ2l0dWRlIG9mIHRoZSBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIFRoZSBzZWFyY2ggcmFkaXVzIChpbiBtZXRlcnMpXG4gICAqL1xuICBzdGF0aWMgcG9zaXRpb24gKGxhdCwgbG5nLCByYWRpdXMpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcignYnVpbHRpbi5sb2NhdGlvbicsICckbmVhcicsIHsgbGF0LCBsbmcsIHJhZGl1cyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgZmlsdGVyIHdpdGggdGhlIGdpdmVuIG1hdGNoZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1hdGNoZXIgVGhlIG1hdGNoZXIgZm9yIHRoZSBmaWxlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBmb3IgdGhlIGZpbHRlclxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIF9mcm9tTWF0Y2hlciAoZmllbGQsIG1hdGNoZXIsIHZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgW2ZpZWxkXToge1xuICAgICAgICBbbWF0Y2hlcl06IHZhbHVlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaENvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uL2RvbS9zZWFyY2hwYXJhbXMnO1xuXG4vKipcbiAqIFNlYXJjaENvbXBvbmVudCBleHBvc2VzIGFuIGludGVyZmFjZSBpbiBvcmRlciB0byBjcmVhdGVcbiAqIGEgVUkgU2VhcmNoIGV4cGVyaWVuY2UgZm9yIHZlcnRpY2FsIGFuZCB1bml2ZXJzYWwgc2VhcmNoLlxuICpcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGlucHV0IGtleSBmb3IgdGhlIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCBhdXRvLWNvbXBsZXRlIGFuZCBzZWFyY2ggd2lsbCBiZSBiYXNlZCBvbiB1bml2ZXJzYWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2JhcktleSA9IGNvbmZpZy5iYXJLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCB2ZXJ0aWNhbCBrZXkgZm9yIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCBhdXRvLWNvbXBsZXRlIGFuZCBzZWFyY2ggd2lsbCBiZSBiYXNlZCBvbiB1bml2ZXJzYWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBRdWVyeSBzdWJtaXNzaW9uIGlzIGJhc2VkIG9uIGEgZm9ybSBhcyBjb250ZXh0LlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBuYXRpdmUgZm9ybSBub2RlIHdpdGhpbiBjb250YWluZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9mb3JtRWwgPSBjb25maWcuZm9ybVNlbGVjdG9yIHx8ICdmb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBlbGVtZW50IHVzZWQgZm9yIHNlYXJjaGluZyBhbmQgd2lyZXMgdXAgdGhlIGtleWJvYXJkIGludGVyYWN0aW9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gY29uZmlnLmlucHV0RWwgfHwgJy5qcy15ZXh0LXF1ZXJ5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB1c2VkLCBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgYXMgYSBkYXRhIHBvaW50XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudGl0bGUgPSBjb25maWcudGl0bGUgfHwgJ0Fuc3dlcnMgVW5pdmVyc2FsIFNlYXJjaCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdGV4dCBpcyB1c2VkIGZvciBsYWJlbGluZyB0aGUgaW5wdXQgYm94LCBhbHNvIHByb3ZpZGVkIHRvIHRlbXBsYXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWxUZXh0ID0gY29uZmlnLmxhYmVsVGV4dCB8fCAnV2hhdCBhcmUgeW91IGludGVyZXN0ZWQgaW4/JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdWJtaXQgdGV4dCBpcyB1c2VkIGZvciBsYWJlbGluZyB0aGUgc3VibWl0IGJ1dHRvbiwgYWxzbyBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnN1Ym1pdFRleHQgPSBjb25maWcuc3VibWl0VGV4dCB8fCAnU3VibWl0JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdWJtaXQgaWNvbiBpcyBhbiBpY29uIGZvciB0aGUgc3VibWl0IGJ1dHRvbiwgaWYgcHJvdmlkZWQgaXQgd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHRoZVxuICAgICAqIHN1Ym1pdCB0ZXh0IHdpbGwgYmUgdXNlZCBmb3Igc2NyZWVuIHJlYWRlcnMuXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMuc3VibWl0SWNvbiA9IGNvbmZpZy5zdWJtaXRJY29uIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgdGV4dCB0byBzaG93IGFzIHRoZSBmaXJzdCBpdGVtIGZvciBhdXRvIGNvbXBsZXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucHJvbXB0SGVhZGVyID0gY29uZmlnLnByb21wdEhlYWRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQXV0byBmb2N1c2VzIHRoZSBpbnB1dCBib3ggaWYgc2V0IHRvIHRydWUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvRm9jdXMgPSBjb25maWcuYXV0b0ZvY3VzID09PSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc2hvdyBhbiBcInhcIiB0aGF0IGFsbG93cyB0aGUgdXNlciB0byBjbGVhciB0aGUgY3VycmVudFxuICAgICAqIHF1ZXJ5XG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5jbGVhckJ1dHRvbiA9IGNvbmZpZy5jbGVhckJ1dHRvbiA9PT0gdW5kZWZpbmVkXG4gICAgICA/IHRydWVcbiAgICAgIDogY29uZmlnLmNsZWFyQnV0dG9uO1xuXG4gICAgLyoqXG4gICAgICogV2hlbiBhdXRvZm9jdXNpbmcgb24gbG9hZCwgb3B0aW9uYWxseSBvcGVuIHRoZSBhdXRvY29tcGxldGVcbiAgICAgKiAocHJlc2V0IHByb21wdHMpXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvY29tcGxldGVPbkxvYWQgPSBjb25maWcuYXV0b2NvbXBsZXRlT25Mb2FkIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogc3VibWl0VVJMIHdpbGwgZm9yY2UgdGhlIHNlYXJjaCBxdWVyeSBzdWJtaXNzaW9uIHRvIGdldFxuICAgICAqIHJlZGlyZWN0ZWQgdG8gdGhlIFVSTCBwcm92aWRlZC5cbiAgICAgKiBPcHRpb25hbCwgZGVmYXVsdHMgdG8gbnVsbC5cbiAgICAgKlxuICAgICAqIElmIG5vIHJlZGlyZWN0VXJsIHByb3ZpZGVkLCB3ZSBrZWVwIHRoZSBwYWdlIGFzIGEgc2luZ2xlIHBhZ2UgYXBwLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZWRpcmVjdFVybCA9IGNvbmZpZy5yZWRpcmVjdFVybCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHN0cmluZyB0byB1c2UgZm9yIHRoZSBpbnB1dCBib3gsIHByb3ZpZGVkIHRvIHRlbXBsYXRlIGZvciByZW5kZXJpbmcuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5xdWVyeSA9IGNvbmZpZy5xdWVyeSB8fCB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSkgfHwgJyc7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIFN0b3JhZ2VLZXlzLlFVRVJZLCBxID0+IHtcbiAgICAgIHRoaXMucXVlcnkgPSBxO1xuICAgICAgdGhpcy5zZXRTdGF0ZSgpO1xuICAgICAgdGhpcy5zZWFyY2gocSk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWluaW11bSB0aW1lIGFsbG93ZWQgaW4gbWlsbGlzZWNvbmRzIGJldHdlZW4gc2VhcmNoZXMgdG8gcHJldmVudFxuICAgICAqIG1hbnkgZHVwbGljYXRlIHNlYXJjaGVzIGJhY2stdG8tYmFja1xuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zZWFyY2hDb29sZG93biA9IGNvbmZpZy5zZWFyY2hDb29sZG93biB8fCAzMDA7XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUgYW5kIFwibmVhciBtZVwiIGludGVudCBpcyBleHByZXNzZWQsIHByb21wdCB0aGUgdXNlciBmb3IgdGhlaXIgZ2VvbG9jYXRpb25cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3Byb21wdEZvckxvY2F0aW9uID0gY29uZmlnLnByb21wdEZvckxvY2F0aW9uID09PSB1bmRlZmluZWRcbiAgICAgID8gdHJ1ZVxuICAgICAgOiBCb29sZWFuKGNvbmZpZy5wcm9tcHRGb3JMb2NhdGlvbik7XG5cbiAgICAvKipcbiAgICAgKiBDb250cm9scyBzaG93aW5nIGFuZCBoaWRpbmcgdGhlIHNlYXJjaCBjbGVhciBidXR0b25cbiAgICAgKi9cbiAgICB0aGlzLl9zaG93Q2xlYXJCdXR0b24gPSB0aGlzLmNsZWFyQnV0dG9uICYmIHRoaXMucXVlcnk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnU2VhcmNoQmFyJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKCkge1xuICAgIHJldHVybiAnc2VhcmNoL3NlYXJjaCc7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgaWYgKHRoaXMucXVlcnkgJiYgIXRoaXMucmVkaXJlY3RVcmwpIHtcbiAgICAgIHRoaXMuY29yZS5zZXRRdWVyeSh0aGlzLnF1ZXJ5KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Byb21wdEZvckxvY2F0aW9uKSB7XG4gICAgICB0aGlzLmluaXRMb2NhdGlvblByb21wdCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIGlmICh0aGlzLmF1dG9Gb2N1cyA9PT0gdHJ1ZSAmJiB0aGlzLnF1ZXJ5Lmxlbmd0aCA9PT0gMCAmJiAhdGhpcy5hdXRvY29tcGxldGVPbkxvYWQpIHtcbiAgICAgIERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2lucHV0RWwpLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLy8gV2lyZSB1cCBvdXIgc2VhcmNoIGhhbmRsaW5nIGFuZCBhdXRvIGNvbXBsZXRlXG4gICAgdGhpcy5pbml0U2VhcmNoKHRoaXMuX2Zvcm1FbCk7XG4gICAgdGhpcy5pbml0QXV0b0NvbXBsZXRlKHRoaXMuX2lucHV0RWwpO1xuXG4gICAgaWYgKHRoaXMuY2xlYXJCdXR0b24pIHtcbiAgICAgIHRoaXMuaW5pdENsZWFyQnV0dG9uKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzID09PSB0cnVlICYmIHRoaXMucXVlcnkubGVuZ3RoID09PSAwICYmIHRoaXMuYXV0b2NvbXBsZXRlT25Mb2FkKSB7XG4gICAgICBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy5fYXV0b2NvbXBsZXRlLnJlbW92ZSgpO1xuICAgIHN1cGVyLnJlbW92ZSgpO1xuICB9XG5cbiAgaW5pdENsZWFyQnV0dG9uICgpIHtcbiAgICBjb25zdCBidXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLmpzLXl4dC1TZWFyY2hCYXItY2xlYXInKTtcbiAgICB0aGlzLl9zaG93Q2xlYXJCdXR0b24gPSB0aGlzLl9zaG93Q2xlYXJCdXR0b24gfHwgdGhpcy5xdWVyeTtcbiAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgneXh0LVNlYXJjaEJhci0taGlkZGVuJywgIXRoaXMuX3Nob3dDbGVhckJ1dHRvbik7XG5cbiAgICBET00ub24oYnV0dG9uLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gJyc7XG4gICAgICB0aGlzLl9zaG93Q2xlYXJCdXR0b24gPSBmYWxzZTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd5eHQtU2VhcmNoQmFyLS1oaWRkZW4nKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe30pO1xuICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWSwgdGhpcy5xdWVyeSk7XG4gICAgICB0aGlzLmNvcmUuc2V0UXVlcnkodGhpcy5xdWVyeSk7XG4gICAgfSk7XG5cbiAgICBET00ub24odGhpcy5faW5wdXRFbCwgJ2lucHV0JywgZSA9PiB7XG4gICAgICBjb25zdCBpbnB1dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgaWYgKCF0aGlzLl9zaG93Q2xlYXJCdXR0b24gJiYgaW5wdXQubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl9zaG93Q2xlYXJCdXR0b24gPSB0cnVlO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgneXh0LVNlYXJjaEJhci0taGlkZGVuJyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3Nob3dDbGVhckJ1dHRvbiAmJiBpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5fc2hvd0NsZWFyQnV0dG9uID0gZmFsc2U7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd5eHQtU2VhcmNoQmFyLS1oaWRkZW4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRMb2NhdGlvblByb21wdCAoKSB7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIFN0b3JhZ2VLZXlzLklOVEVOVFMsIGludGVudCA9PiB7XG4gICAgICBpZiAoIWludGVudC5uZWFyTWUgfHwgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuR0VPTE9DQVRJT04pICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihwb3NpdGlvbiA9PiB7XG4gICAgICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5HRU9MT0NBVElPTiwge1xuICAgICAgICAgIGxhdDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAgIGxuZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSxcbiAgICAgICAgICByYWRpdXM6IHBvc2l0aW9uLmNvb3Jkcy5hY2N1cmFjeVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZWFyY2godGhpcy5xdWVyeSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gdXNlIGZvciB3aXJpbmcgdXAgc2VhcmNoaW5nIG9uIGZvcm0gc3VibWlzc2lvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybVNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBzdWJtaXQgaGFuZGxpbmcgdG9cbiAgICovXG4gIGluaXRTZWFyY2ggKGZvcm1TZWxlY3Rvcikge1xuICAgIHRoaXMuX2Zvcm1FbCA9IGZvcm1TZWxlY3RvcjtcblxuICAgIHRoaXMuX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd5eHQtU2VhcmNoQmFyLXdyYXBwZXInKTtcblxuICAgIGxldCBmb3JtID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgZm9ybVNlbGVjdG9yKTtcbiAgICBpZiAoIWZvcm0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGluaXRpYWxpemUgU2VhcmNoQmFyOyBDYW4gbm90IGZpbmQge0hUTUxFbGVtZW50fSBgJywgdGhpcy5fZm9ybUVsLCAnYC4nKTtcbiAgICB9XG5cbiAgICBET00ub24oZm9ybSwgJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGxldCBpbnB1dEVsID0gZm9ybS5xdWVyeVNlbGVjdG9yKHRoaXMuX2lucHV0RWwpO1xuXG4gICAgICBsZXQgcXVlcnkgPSBpbnB1dEVsLnZhbHVlO1xuICAgICAgbGV0IHBhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuICAgICAgcGFyYW1zLnNldCgncXVlcnknLCBxdWVyeSk7XG5cbiAgICAgIC8vIElmIHdlIGhhdmUgYSByZWRpcmVjdFVybCwgd2Ugd2FudCB0aGUgZm9ybSB0byBiZVxuICAgICAgLy8gc2VyaWFsaXplZCBhbmQgc3VibWl0dGVkLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlZGlyZWN0VXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMucmVkaXJlY3RVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpbnB1dEVsLmJsdXIoKTtcblxuICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWSwgcXVlcnkpO1xuICAgICAgdGhpcy5jb3JlLnNldFF1ZXJ5KHF1ZXJ5KTtcbiAgICAgIHRoaXMuc2VhcmNoKHF1ZXJ5KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gd2lyZSB1cCBvdXIgYXV0byBjb21wbGV0ZSBvbiBhbiBpbnB1dCBzZWxlY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRTZWxlY3RvciBDU1Mgc2VsZWN0b3IgdG8gYmluZCBvdXIgYXV0byBjb21wbGV0ZSBjb21wb25lbnQgdG9cbiAgICovXG4gIGluaXRBdXRvQ29tcGxldGUgKGlucHV0U2VsZWN0b3IpIHtcbiAgICB0aGlzLl9pbnB1dEVsID0gaW5wdXRTZWxlY3RvcjtcblxuICAgIGlmICh0aGlzLl9hdXRvY29tcGxldGUpIHtcbiAgICAgIHRoaXMuX2F1dG9jb21wbGV0ZS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9hdXRvY29tcGxldGUgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKCdBdXRvQ29tcGxldGUnLCB7XG4gICAgICBwYXJlbnRDb250YWluZXI6IHRoaXMuX2NvbnRhaW5lcixcbiAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0uYXV0b2NvbXBsZXRlYCxcbiAgICAgIGNvbnRhaW5lcjogJy55eHQtU2VhcmNoQmFyLWF1dG9jb21wbGV0ZScsXG4gICAgICBiYXJLZXk6IHRoaXMuX2JhcktleSxcbiAgICAgIGF1dG9Gb2N1czogdGhpcy5hdXRvRm9jdXMgJiYgIXRoaXMuYXV0b2NvbXBsZXRlT25Mb2FkLFxuICAgICAgdmVydGljYWxLZXk6IHRoaXMuX3ZlcnRpY2FsS2V5LFxuICAgICAgcHJvbXB0SGVhZGVyOiB0aGlzLnByb21wdEhlYWRlcixcbiAgICAgIG9yaWdpbmFsUXVlcnk6IHRoaXMucXVlcnksXG4gICAgICBpbnB1dEVsOiBpbnB1dFNlbGVjdG9yLFxuICAgICAgb25TdWJtaXQ6ICgpID0+IHtcbiAgICAgICAgRE9NLnRyaWdnZXIodGhpcy5fZm9ybUVsLCAnc3VibWl0Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZWFyY2ggKHF1ZXJ5KSB7XG4gICAgLy8gRG9uJ3Qgc2VhcmNoIGlmIHdlIHJlY2VudGx5IHNlYXJjaGVkLCBvciBpZiB0aGVyZSdzIG5vIHF1ZXJ5IGZvciB1bml2ZXJzYWwgc2VhcmNoXG4gICAgaWYgKHRoaXMuX3Rocm90dGxlZCB8fCAoIXF1ZXJ5ICYmICF0aGlzLl92ZXJ0aWNhbEtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl90aHJvdHRsZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLl90aHJvdHRsZWQgPSBmYWxzZTsgfSwgdGhpcy5fc2VhcmNoQ29vbGRvd24pO1xuXG4gICAgaWYgKHRoaXMuX3ZlcnRpY2FsS2V5KSB7XG4gICAgICBjb25zdCBhbGxGaWx0ZXJzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgICBjb25zdCB0b3RhbEZpbHRlciA9IGFsbEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgICA/IEZpbHRlci5hbmQoLi4uYWxsRmlsdGVycylcbiAgICAgICAgOiBhbGxGaWx0ZXJzWzBdO1xuICAgICAgY29uc3QgZmFjZXRGaWx0ZXIgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRkFDRVRfRklMVEVSKVswXTtcbiAgICAgIHJldHVybiB0aGlzLmNvcmUudmVydGljYWxTZWFyY2godGhpcy5fdmVydGljYWxLZXksIHtcbiAgICAgICAgaW5wdXQ6IHF1ZXJ5LFxuICAgICAgICBmaWx0ZXI6IEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSxcbiAgICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5PVEUoYmlsbHkpIFRlbXBvcmFyeSBoYWNrIGZvciBERU1PXG4gICAgICAvLyBSZW1vdmUgbWUgYWZ0ZXIgdGhlIGRlbW9cbiAgICAgIGxldCBuYXYgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXJcbiAgICAgICAgLmdldEFjdGl2ZUNvbXBvbmVudCgnTmF2aWdhdGlvbicpO1xuXG4gICAgICBpZiAobmF2KSB7XG4gICAgICAgIGxldCB0YWJzID0gbmF2LmdldFN0YXRlKCd0YWJzJyk7XG4gICAgICAgIGxldCB1cmxzID0ge307XG5cbiAgICAgICAgaWYgKHRhYnMgJiYgQXJyYXkuaXNBcnJheSh0YWJzKSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXModGFic1tpXS51cmwuc3BsaXQoJz8nKVsxXSk7XG4gICAgICAgICAgICBwYXJhbXMuc2V0KCdxdWVyeScsIHF1ZXJ5KTtcblxuICAgICAgICAgICAgbGV0IHVybCA9IHRhYnNbaV0uYmFzZVVybDtcbiAgICAgICAgICAgIGlmIChwYXJhbXMudG9TdHJpbmcoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHVybCArPSAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVybHNbdGFic1tpXS5jb25maWdJZF0gPSB1cmw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvcmUuc2VhcmNoKHF1ZXJ5LCB1cmxzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29yZS5zZWFyY2gocXVlcnkpO1xuICAgIH1cbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBsYWJlbFRleHQ6IHRoaXMubGFiZWxUZXh0LFxuICAgICAgc3VibWl0SWNvbjogdGhpcy5zdWJtaXRJY29uLFxuICAgICAgc3VibWl0VGV4dDogdGhpcy5zdWJtaXRUZXh0LFxuICAgICAgc2hvd0NsZWFyQnV0dG9uOiB0aGlzLl9zaG93Q2xlYXJCdXR0b24sXG4gICAgICBxdWVyeTogdGhpcy5xdWVyeVxuICAgIH0sIGRhdGEpKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyU2VhcmNoQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5cbi8qKlxuICogRmlsdGVyU2VhcmNoQ29tcG9uZW50IGlzIHVzZWQgZm9yIGF1dG9jb21wbGV0ZSB1c2luZyB0aGUgRmlsdGVyU2VhcmNoIGJhY2tlbmQuXG4gKiBJdCdsbCBhbGxvdyB5b3UgdG8gcGljayBwcmUtc2V0IGZpbHRlcnMgdGhhdCBhcmUgc2V0dXAgb24gdGhlIGJhY2tlbmQgd2l0aGluXG4gKiBhIHZlcnRpY2FsIHNlYXJjaCBjb250ZXh0LlxuICpcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlucHV0IGtleSBmb3IgdGhlIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9iYXJLZXkgPSBjb25maWcuYmFyS2V5IHx8IGNvbmZpZy5pbnB1dEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnRpY2FsIGtleSBmb3IgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzdG9yZSB0aGUgZmlsdGVyIHZhbHVlIGJ1dCBkbyBub3Qgc2VhcmNoIG9uIGNoYW5nZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RvcmVPbkNoYW5nZSA9IGNvbmZpZy5zdG9yZU9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogUXVlcnkgc3VibWlzc2lvbiBpcyBiYXNlZCBvbiBhIGZvcm0gYXMgY29udGV4dC5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gbmF0aXZlIGZvcm0gbm9kZSB3aXRoaW4gY29udGFpbmVyXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5fZm9ybUVsID0gY29uZmlnLmZvcm1TZWxlY3RvciB8fCAnZm9ybSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5wdXQgZWxlbWVudCB1c2VkIGZvciBzZWFyY2hpbmcgYW5kIHdpcmVzIHVwIHRoZSBrZXlib2FyZCBpbnRlcmFjdGlvblxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5faW5wdXRFbCA9IGNvbmZpZy5pbnB1dEVsIHx8ICcuanMteWV4dC1xdWVyeSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgdXNlZCwgcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlIGFzIGEgZGF0YSBwb2ludFxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnRpdGxlID0gY29uZmlnLnRpdGxlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlYXJjaCB0ZXh0IHVzZWQgZm9yIGxhYmVsaW5nIHRoZSBpbnB1dCBib3gsIGFsc28gcHJvdmlkZWQgdG8gdGVtcGxhdGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gY29uZmlnLnNlYXJjaFRleHQgfHwgJ1doYXQgYXJlIHlvdSBpbnRlcmVzdGVkIGluPyc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgdGV4dCB0byBzaG93IGFzIHRoZSBmaXJzdCBpdGVtIGZvciBhdXRvIGNvbXBsZXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucHJvbXB0SGVhZGVyID0gY29uZmlnLnByb21wdEhlYWRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQXV0byBmb2N1c2VzIHRoZSBpbnB1dCBib3ggaWYgc2V0IHRvIHRydWUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvRm9jdXMgPSBjb25maWcuYXV0b0ZvY3VzID09PSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogc3VibWl0VVJMIHdpbGwgZm9yY2UgdGhlIHNlYXJjaCBxdWVyeSBzdWJtaXNzaW9uIHRvIGdldFxuICAgICAqIHJlZGlyZWN0ZWQgdG8gdGhlIFVSTCBwcm92aWRlZC5cbiAgICAgKiBPcHRpb25hbCwgZGVmYXVsdHMgdG8gbnVsbC5cbiAgICAgKlxuICAgICAqIElmIG5vIHJlZGlyZWN0VXJsIHByb3ZpZGVkLCB3ZSBrZWVwIHRoZSBwYWdlIGFzIGEgc2luZ2xlIHBhZ2UgYXBwLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZWRpcmVjdFVybCA9IGNvbmZpZy5yZWRpcmVjdFVybCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHN0cmluZyB0byB1c2UgZm9yIHRoZSBpbnB1dCBib3gsIHByb3ZpZGVkIHRvIHRlbXBsYXRlIGZvciByZW5kZXJpbmcuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5xdWVyeSA9IGNvbmZpZy5xdWVyeSB8fCB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCkgfHwgJyc7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gLCBxID0+IHtcbiAgICAgIHRoaXMucXVlcnkgPSBxO1xuICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaWx0ZXIgc3RyaW5nIHRvIHVzZSBmb3IgdGhlIHByb3ZpZGVkIHF1ZXJ5XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5maWx0ZXIgPSBjb25maWcuZmlsdGVyIHx8IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCkgfHwgJyc7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpbHRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gSlNPTi5wYXJzZSh0aGlzLmZpbHRlcik7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIHRoaXMuc2VhcmNoUGFyYW1ldGVycyA9IHRoaXMuX2J1aWxkU2VhcmNoUGFyYW1ldGVycyhjb25maWcuc2VhcmNoUGFyYW1ldGVycyk7XG5cbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke3RoaXMubmFtZX1gLCBmID0+IHsgdGhpcy5maWx0ZXIgPSBmOyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdGaWx0ZXJTZWFyY2gnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoKSB7XG4gICAgcmV0dXJuICdzZWFyY2gvZmlsdGVyc2VhcmNoJztcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICBpZiAodGhpcy5xdWVyeSAmJiB0aGlzLmZpbHRlcikge1xuICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICAvLyBXaXJlIHVwIG91ciBzZWFyY2ggaGFuZGxpbmcgYW5kIGF1dG8gY29tcGxldGVcbiAgICB0aGlzLmluaXRBdXRvQ29tcGxldGUodGhpcy5faW5wdXRFbCk7XG5cbiAgICBpZiAodGhpcy5hdXRvRm9jdXMgPT09IHRydWUgJiYgdGhpcy5xdWVyeS5sZW5ndGggPT09IDApIHtcbiAgICAgIERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2lucHV0RWwpLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgaGVscGVyIG1ldGhvZCB0byB3aXJlIHVwIG91ciBhdXRvIGNvbXBsZXRlIG9uIGFuIGlucHV0IHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBhdXRvIGNvbXBsZXRlIGNvbXBvbmVudCB0b1xuICAgKi9cbiAgaW5pdEF1dG9Db21wbGV0ZSAoaW5wdXRTZWxlY3Rvcikge1xuICAgIHRoaXMuX2lucHV0RWwgPSBpbnB1dFNlbGVjdG9yO1xuXG4gICAgdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZSgnQXV0b0NvbXBsZXRlJywge1xuICAgICAgcGFyZW50Q29udGFpbmVyOiB0aGlzLl9jb250YWluZXIsXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmF1dG9jb21wbGV0ZWAsXG4gICAgICBpc0ZpbHRlclNlYXJjaDogdHJ1ZSxcbiAgICAgIGNvbnRhaW5lcjogJy55eHQtU2VhcmNoQmFyLWF1dG9jb21wbGV0ZScsXG4gICAgICBwcm9tcHRIZWFkZXI6IHRoaXMucHJvbXB0SGVhZGVyLFxuICAgICAgb3JpZ2luYWxRdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgIG9yaWdpbmFsRmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgIGlucHV0RWw6IGlucHV0U2VsZWN0b3IsXG4gICAgICB2ZXJ0aWNhbEtleTogdGhpcy5fdmVydGljYWxLZXksXG4gICAgICBiYXJLZXk6IHRoaXMuX2JhcktleSxcbiAgICAgIHNlYXJjaFBhcmFtZXRlcnM6IHRoaXMuc2VhcmNoUGFyYW1ldGVycyxcbiAgICAgIG9uU3VibWl0OiAocXVlcnksIGZpbHRlcikgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICAgICAgcGFyYW1zLnNldChgJHt0aGlzLm5hbWV9LnF1ZXJ5YCwgcXVlcnkpO1xuICAgICAgICBwYXJhbXMuc2V0KGAke3RoaXMubmFtZX0uZmlsdGVyYCwgZmlsdGVyKTtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgcmVkaXJlY3RVcmwsIHdlIHdhbnQgdGhlIHBhcmFtcyB0byBiZVxuICAgICAgICAvLyBzZXJpYWxpemVkIGFuZCBzdWJtaXR0ZWQuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5yZWRpcmVjdFVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMucmVkaXJlY3RVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzYXZlIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBmb3IgdGhlIG5leHQgc2VhcmNoXG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBGaWx0ZXIuZnJvbVJlc3BvbnNlKGZpbHRlcik7XG4gICAgICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWAsIHRoaXMucXVlcnkpO1xuICAgICAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCwgdGhpcy5maWx0ZXIpO1xuICAgICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgdGhpcy5maWx0ZXIpO1xuICAgICAgICB0aGlzLnNlYXJjaCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gdGhlIHZlcnRpY2FsIHNlYXJjaCB3aXRoIGFsbCBzYXZlZCBmaWx0ZXJzIGFuZCBxdWVyeSxcbiAgICogb3B0aW9uYWxseSByZWRpcmVjdGluZyBiYXNlZCBvbiBjb25maWdcbiAgICovXG4gIHNlYXJjaCAoKSB7XG4gICAgaWYgKHRoaXMuX3N0b3JlT25DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgbGV0IHRvdGFsRmlsdGVyID0gZmlsdGVyc1swXTtcbiAgICBpZiAoZmlsdGVycy5sZW5ndGggPiAxKSB7XG4gICAgICB0b3RhbEZpbHRlciA9IEZpbHRlci5hbmQoLi4uZmlsdGVycyk7XG4gICAgfVxuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpIHx8ICcnO1xuICAgIGNvbnN0IGZhY2V0RmlsdGVyID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZBQ0VUX0ZJTFRFUilbMF07XG5cbiAgICB0aGlzLmNvcmUudmVydGljYWxTZWFyY2godGhpcy5fdmVydGljYWxLZXksIHtcbiAgICAgIGlucHV0OiBzZWFyY2hRdWVyeSxcbiAgICAgIGZpbHRlcjogSlNPTi5zdHJpbmdpZnkodG90YWxGaWx0ZXIpLFxuICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKVxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIHNlYXJjaFRleHQ6IHRoaXMuc2VhcmNoVGV4dCxcbiAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlclxuICAgIH0sIGRhdGEpKTtcbiAgfVxuXG4gIF9idWlsZFNlYXJjaFBhcmFtZXRlcnMgKHNlYXJjaFBhcmFtZXRlckNvbmZpZ3MpIHtcbiAgICBsZXQgc2VhcmNoUGFyYW1ldGVycyA9IHtcbiAgICAgIHNlY3Rpb25lZDogZmFsc2UsXG4gICAgICBmaWVsZHM6IFtdXG4gICAgfTtcbiAgICBpZiAoc2VhcmNoUGFyYW1ldGVyQ29uZmlncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gc2VhcmNoUGFyYW1ldGVycztcbiAgICB9XG4gICAgaWYgKHNlYXJjaFBhcmFtZXRlckNvbmZpZ3Muc2VjdGlvbmVkKSB7XG4gICAgICBzZWFyY2hQYXJhbWV0ZXJzLnNlY3Rpb25lZCA9IHNlYXJjaFBhcmFtZXRlckNvbmZpZ3Muc2VjdGlvbmVkO1xuICAgIH1cbiAgICBzZWFyY2hQYXJhbWV0ZXJzLmZpZWxkcyA9IHRoaXMuX2J1aWxkRmllbGRzKHNlYXJjaFBhcmFtZXRlckNvbmZpZ3MuZmllbGRzKTtcbiAgICByZXR1cm4gc2VhcmNoUGFyYW1ldGVycztcbiAgfVxuXG4gIF9idWlsZEZpZWxkcyAoZmllbGRDb25maWdzKSB7XG4gICAgaWYgKGZpZWxkQ29uZmlncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpZWxkQ29uZmlncy5tYXAoZmMgPT4gKHsgZmV0Y2hFbnRpdGllczogZmFsc2UsIC4uLmZjIH0pKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuY29uc3QgS2V5cyA9IHtcbiAgQkFDS1NQQUNFOiA4LFxuICBUQUI6IDksXG4gIEVOVEVSOiAxMyxcbiAgU0hJRlQ6IDE2LFxuICBDVFJMOiAxNyxcbiAgQUxUOiAxOCxcbiAgRVNDQVBFOiAyNyxcblxuICBMRUZUOiAzNyxcbiAgUklHSFQ6IDM5LFxuICBVUDogMzgsXG5cbiAgREVMRVRFOiA0NixcbiAgRE9XTjogNDAsXG4gIExFRlRfT1NfS0VZOiA5MSxcbiAgUklHSFRfT1NfS0VZOiA5MixcbiAgU0VMRUNUX0tFWTogOTNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Db21wbGV0ZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30sIHN5c3RlbU9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMsIHN5c3RlbU9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBhdXRvY29tcGxldGUgaXMgc2ltcGxlIG9yIGZpbHRlclxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNGaWx0ZXJTZWFyY2ggPSBvcHRzLmlzRmlsdGVyU2VhcmNoIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGBiYXJLZXlgIGluIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggdG8gdXNlIGZvciBhdXRvLWNvbXBsZXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9iYXJLZXkgPSBvcHRzLmJhcktleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGB2ZXJ0aWNhbEtleWAgb2YgdGhlIHZlcnRpY2FsIHNlYXJjaCB0byB1c2UgZm9yIGF1dG8tY29tcGxldGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gb3B0cy52ZXJ0aWNhbEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGlucHV0IGVsIHNlbGVjdG9yIGZvciBhdXRvIGNvbXBsZXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gb3B0cy5pbnB1dEVsIHx8ICcuanMteWV4dC1xdWVyeSc7XG5cbiAgICAvKipcbiAgICAgKiBBIHNlbGVjdG9yIGZvciB0aGUgYXV0b2NvbXBsZXRlIGVsZW1lbnRlc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYXV0b2NvbXBsZXRlRWxzID0gb3B0cy5hdXRvQ29tcGxldGVFbHMgfHwgJy5qcy15ZXh0LWF1dG9jb21sZXRlLW9wdGlvbic7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgZm9yIHRoZSBkYXRhLXN0b3JhZ2UgdG8gbGlzdGVuIGZvciB1cGRhdGVzIGZyb20gdGhlIHNlcnZlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IGAke1N0b3JhZ2VLZXlzLkFVVE9DT01QTEVURX0uJHt0aGlzLm5hbWV9YDtcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgaW5wdXQgdmFsdWUgd2hlbiB0eXBpbmcuXG4gICAgICogV2UgdXNlIHRoaXMgZm9yIHJlc2V0dGluZyB0aGUgc3RhdGUgb2YgdGhlIGlucHV0IHZhbHVlIHdoZW4gb3RoZXIgaW50ZXJhY3Rpb25zIChlLmcuIHJlc3VsdCBuYXZpZ2F0aW9uKVxuICAgICAqIGNoYW5nZSBiYXNlZCBvbiBpbnRlcmFjdGlvbnMuIEZvciBpbnN0YW5jZSwgaGl0dGluZyBlc2NhcGUgc2hvdWxkIHJlc2V0IHRoZSB2YWx1ZSB0byB0aGUgb3JpZ2luYWwgdHlwZWQgcXVlcnkuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gb3B0cy5vcmlnaW5hbFF1ZXJ5IHx8ICcnO1xuXG4gICAgLyoqXG4gICAgICogVXNlZCBmb3Iga2V5Ym9hcmQgbmF2aWdhdGlvbiB0aHJvdWdoIHJlc3VsdHMuXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IHNlY3Rpb24gd2UncmUgbmF2aWdhdGluZyBpbi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3NlY3Rpb25JbmRleCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uIHRocm91Z2ggcmVzdWx0cy5cbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgcmVzdWx0IGluZGV4IHdlJ3JlIG5hdmlnYXRpbmcgb24uXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZXN1bHRJbmRleCA9IC0xO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHRleHQgdG8gc2hvdyBhcyB0aGUgZmlyc3QgaXRlbSBmb3IgYXV0byBjb21wbGV0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnByb21wdEhlYWRlciA9IG9wdHMucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBpbnB1dCBpcyBhdXRvY29tYXRpY2FsbHkgZm9jdXNlZCBvciBub3RcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9hdXRvRm9jdXMgPSBvcHRzLmF1dG9Gb2N1cyB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGludm9rZWQgd2hlbiB0aGUgYEVudGVyYCBrZXkgaXMgcHJlc3NlZCBvbiBhdXRvIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIHRoaXMuX29uU3VibWl0ID0gb3B0cy5vblN1Ym1pdCB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIHRoaXMuX3NlYXJjaFBhcmFtZXRlcnMgPSBvcHRzLnNlYXJjaFBhcmFtZXRlcnMgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYWxpYXNlZCB1c2VkIGJ5IHRoZSBjb21wb25lbnQgbWFuYWdlciBmb3IgY3JlYXRpb24uXG4gICAqL1xuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnQXV0b0NvbXBsZXRlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAnc2VhcmNoL2F1dG9jb21wbGV0ZSc7XG4gIH1cblxuICAvKipcbiAgICogc2V0U3RhdGUgaXMgb3ZlcnJpZGRlbiBzbyB0aGF0IHdlIGNhbiBwcm92aWRlIGFkZGl0aW9uYWwgbWV0YSBkYXRhXG4gICAqIHRvIHRoZSB0ZW1wbGF0ZSAoZS5nLiB0aGUgc2VjdGlvbkluZGV4IGFuZCByZXN1bHRJbmRleCksIHNpbmNlXG4gICAqIHRob3NlIGFyZSBjbGllbnQtaW50ZXJhY3Rpb24gc3BlY2lmaWMgdmFsdWVzIGFuZCBhcmVuJ3QgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyLlxuICAgKi9cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBoYXNSZXN1bHRzOiB0aGlzLmhhc1Jlc3VsdHMoZGF0YSksXG4gICAgICBzZWN0aW9uSW5kZXg6IHRoaXMuX3NlY3Rpb25JbmRleCxcbiAgICAgIHJlc3VsdEluZGV4OiB0aGlzLl9yZXN1bHRJbmRleCxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5fb3JpZ2luYWxRdWVyeS5sZW5ndGggPT09IDAgPyB0aGlzLnByb21wdEhlYWRlciA6IG51bGxcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogdXBkYXRlU3RhdGUgaXMgYSBoZWxwZXIgdG8gYXBwbHkgdGhlIGN1cnJlbnQgc3RhdGUgd2l0aCBuZXcgY2xpZW50LXN0YXRlLlxuICAgKi9cbiAgdXBkYXRlU3RhdGUgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fc3RhdGUuZ2V0KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uQ3JlYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgY29uc3RydWN0ZWQgZnJvbSB0aGUgZnJhbWV3b3JrLlxuICAgKiBPbmNlIHdlJ3JlIGluaXRhbGl6ZWQsIHdlIHdpcmUgdXAgYWxsIG9mIG91ciB1c2VyIGludGVyYWN0aW9uc1xuICAgKi9cbiAgb25DcmVhdGUgKCkge1xuICAgIC8vIFVzZSB0aGUgY29udGV4dCBvZiB0aGUgcGFyZW50IGNvbXBvbmVudCB0byBmaW5kIHRoZSBpbnB1dCBub2RlLlxuICAgIGxldCBxdWVyeUlucHV0ID0gRE9NLnF1ZXJ5KHRoaXMuX3BhcmVudENvbnRhaW5lciwgdGhpcy5faW5wdXRFbCk7XG4gICAgaWYgKCFxdWVyeUlucHV0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBpbml0aWFsaXplIEF1dG9Db21wbGV0ZS4gQ2FuIG5vdCBmaW5kIHtIVE1MRWxlbWVudH0gYCcsIHRoaXMuX2lucHV0RWwsICdgLicpO1xuICAgIH1cblxuICAgIC8vIERpc2FibGUgdGhlIG5hdGl2ZSBhdXRvY29tcGxldGUsIGF1dG9jb3JyZWN0ICYgc3BlbGxjaGVja1xuICAgIERPTS5hdHRyaWJ1dGVzKHF1ZXJ5SW5wdXQsIHtcbiAgICAgIGF1dG9jb21wbGV0ZTogJ29mZicsXG4gICAgICBhdXRvY29ycmVjdDogJ29mZicsXG4gICAgICBzcGVsbGNoZWNrOiAnZmFsc2UnXG4gICAgfSk7XG5cbiAgICAvLyBUaGUgdXNlciBleGl0cyB0aGUgaW5wdXQsIHNvIHdlIHdhbnQgdG8gcmVzZXQgdGhlIHN0YXRlIGFuZCBjbG9zZVxuICAgIC8vIHRoZSBhdXRvIGNvbXBsZXRlXG4gICAgLy8gVE9ETyhqZGVsZXJtZSk6IENsb3NlIGxvZ2ljIHRvIGJlIG1vdmVkIHRvIHBhcmVudFxuICAgIERPTS5vbihkb2N1bWVudCwgJ2NsaWNrJywgZSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmpzLXl4dC1BdXRvQ29tcGxldGUtd3JhcHBlciAqJykgfHwgZS50YXJnZXQubWF0Y2hlcyh0aGlzLl9pbnB1dEVsKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIGEgdXNlciBmb2N1c2VzIHRoZSBpbnB1dCwgd2Ugc2hvdWxkIHBvcHVsYXRlIHRoZSBhdXRvY29tcGxldGUgYmFzZWRcbiAgICAvLyBvbiB0aGUgY3VycmVudCB2YWx1ZVxuICAgIERPTS5vbihxdWVyeUlucHV0LCAnZm9jdXMnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmF1dG9Db21wbGV0ZShxdWVyeUlucHV0LnZhbHVlKTtcbiAgICB9KTtcblxuICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIG5hdmlnYXRlIGJldHdlZW4gdGhlIHJlc3VsdHMgdXNpbmcgdGhlIGtleWJvYXJkXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlTmF2aWdhdGVSZXN1bHRzKGUua2V5Q29kZSwgZSk7XG4gICAgICB0aGlzLmhhbmRsZVN1Ym1pdFJlc3VsdChlLmtleUNvZGUsIHF1ZXJ5SW5wdXQudmFsdWUsIGUpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuX2F1dG9Gb2N1cykge1xuICAgICAgRE9NLm9uY2UocXVlcnlJbnB1dCwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZShxdWVyeUlucHV0LnZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIHNlbGVjdCBhIHJlc3VsdCB3aXRoIHRoZSBtb3VzZVxuICAgIERPTS5kZWxlZ2F0ZSh0aGlzLl9jb250YWluZXIsICcuanMteWV4dC1hdXRvY29tcGxldGUtb3B0aW9uJywgJ2NsaWNrJywgKGV2dCwgdGFyZ2V0KSA9PiB7XG4gICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhc2V0O1xuICAgICAgbGV0IHZhbCA9IGRhdGEuc2hvcnQ7XG5cbiAgICAgIHRoaXMudXBkYXRlUXVlcnkodmFsKTtcbiAgICAgIHRoaXMuX29uU3VibWl0KHZhbCwgZGF0YS5maWx0ZXIpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gV2hlbiB0aGUgdXNlciBpcyB0eXBpbmcgaW4gdGhlIGlucHV0LCBwcm9jZXNzIHRoZSBhdXRvIGNvbXBsZXRlLlxuICAgIERPTS5vbihxdWVyeUlucHV0LCAna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVUeXBpbmcoZS5rZXlDb2RlLCBxdWVyeUlucHV0LnZhbHVlLCBlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjbG9zZSB3aWxsIGhpZGUgdGhlIGF1dG8gY29tcGxldGUgcmVzdWx0cyBhbmQgcmVzZXQgdGhlIHN0YXRlLlxuICAgKi9cbiAgY2xvc2UgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe30pO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXNldHMgdGhlIGNsaWVudCBzdGF0ZSB0byB0aGVpciBvcmlnaW5hbCB2YWx1ZXMgYW5kIHRyaWdnZXJzXG4gICAqIGEgdGVtcGxhdGUtcmVyZW5kZXIgdmlhIHVwZGF0ZVN0YXRlXG4gICAqL1xuICByZXNldCAoKSB7XG4gICAgdGhpcy5fc2VjdGlvbkluZGV4ID0gMDtcbiAgICB0aGlzLl9yZXN1bHRJbmRleCA9IC0xO1xuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHRvIHVwZGF0ZSB0aGUgaW5wdXQgdGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0VmFsdWUgT3B0aW9uIHZhbHVlIHByb3ZpZGVkLlxuICAgKiBJZiBubyB2YWx1ZSBwcm92aWRlZCwgd2UnbGwgdHJ5IHRvIGZpbmQgaXQgYmFzZWQgb24gdGhlIHNlbGVjdGlvbiBpbmRleGVzLlxuICAgKi9cbiAgdXBkYXRlUXVlcnkgKG9wdFZhbHVlKSB7XG4gICAgLy8gT25seSB3YW50IHRvIHVwZGF0ZSB0aGUgcXVlcnkgc3RyaW5nIGlmIHRoZXJlcyBhIHZhbHVlLlxuICAgIC8vIElmIG9uZSBpcyBwcm92aWRlZCwgZ3JlYXQuXG4gICAgLy8gT3RoZXJ3aXNlLCBsZXRzIHRyeSB0byBmaW5kIGl0IGZyb20gdGhlIGN1cnJlbnQgc2VsZWN0aW9uIGluIHRoZSByZXN1bHRzLlxuICAgIGlmIChvcHRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG5cbiAgICAgIGxldCByZXN1bHRzID0gc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzO1xuICAgICAgb3B0VmFsdWUgPSByZXN1bHRzW3RoaXMuX3Jlc3VsdEluZGV4XS5zaG9ydFZhbHVlO1xuICAgIH1cblxuICAgIGxldCBxdWVyeUVsID0gRE9NLnF1ZXJ5KHRoaXMuX3BhcmVudENvbnRhaW5lciwgdGhpcy5faW5wdXRFbCk7XG4gICAgcXVlcnlFbC52YWx1ZSA9IG9wdFZhbHVlO1xuICB9XG5cbiAgaGFuZGxlVHlwaW5nIChrZXksIHZhbHVlLCBlKSB7XG4gICAgbGV0IGlnbm9yZWRLZXlzID0gW1xuICAgICAgS2V5cy5ET1dOLFxuICAgICAgS2V5cy5VUCxcbiAgICAgIEtleXMuQ1RSTCxcbiAgICAgIEtleXMuQUxULFxuICAgICAgS2V5cy5TSElGVCxcbiAgICAgIEtleXMuTEVGVCxcbiAgICAgIEtleXMuUklHSFQsXG4gICAgICBLZXlzLkxFRlRfT1NfS0VZLFxuICAgICAgS2V5cy5SSUdIVF9PU19LRVksXG4gICAgICBLZXlzLkVOVEVSLFxuICAgICAgS2V5cy5UQUIsXG4gICAgICBLZXlzLlNFTEVDVF9LRVlcbiAgICBdO1xuXG4gICAgaWYgKGlnbm9yZWRLZXlzLmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVXNlciBlc2NhcGVzIG91dCBvZiBhdXRvIGNvbXBsZXRlLCBzbyB3ZSByZXNldCBpdCB0byB0aGUgb3JpZ2luYWwgaW5wdXRcbiAgICBpZiAoa2V5ID09PSBLZXlzLkVTQ0FQRSkge1xuICAgICAgdGhpcy51cGRhdGVRdWVyeSh0aGlzLl9vcmlnaW5hbFF1ZXJ5KTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIG9yaWdpbmFsIHZhbHVlIGJhc2VkIG9uIHRoZSB1c2VyIGlucHV0XG4gICAgdGhpcy5fb3JpZ2luYWxRdWVyeSA9IHZhbHVlO1xuXG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHRoaXMuYXV0b0NvbXBsZXRlKHZhbHVlKTtcbiAgfVxuXG4gIGF1dG9Db21wbGV0ZSAoaW5wdXQpIHtcbiAgICBpZiAodGhpcy5pc0ZpbHRlclNlYXJjaCkge1xuICAgICAgdGhpcy5jb3JlLmF1dG9Db21wbGV0ZUZpbHRlcihpbnB1dCwge1xuICAgICAgICBuYW1lc3BhY2U6IHRoaXMubmFtZSxcbiAgICAgICAgdmVydGljYWxLZXk6IHRoaXMuX3ZlcnRpY2FsS2V5LFxuICAgICAgICBiYXJLZXk6IHRoaXMuX2JhcktleSxcbiAgICAgICAgc2VhcmNoUGFyYW1ldGVyczogdGhpcy5fc2VhcmNoUGFyYW1ldGVyc1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl92ZXJ0aWNhbEtleSB8fCB0aGlzLl9iYXJLZXkpIHtcbiAgICAgIHRoaXMuY29yZS5hdXRvQ29tcGxldGVWZXJ0aWNhbChpbnB1dCwgdGhpcy5uYW1lLCB0aGlzLl92ZXJ0aWNhbEtleSwgdGhpcy5fYmFyS2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb3JlLmF1dG9Db21wbGV0ZVVuaXZlcnNhbChpbnB1dCwgdGhpcy5uYW1lKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0cnVlIGlmIHdlIGhhdmUgcmVzdWx0cyBpbiBhbnkgc2VjdGlvblxuICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAqL1xuICBoYXNSZXN1bHRzIChkYXRhKSB7XG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBzZWN0aW9ucyA9IGRhdGFbJ3NlY3Rpb25zJ107XG4gICAgaWYgKCFzZWN0aW9ucykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBzZWN0aW9uc1tpXTtcbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBkYXRhLnJlc3VsdHM7XG4gICAgICBpZiAoIXJlc3VsdHMpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaGFuZGxlTmF2aWdhdGVSZXN1bHRzIChrZXksIGUpIHtcbiAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG4gICAgaWYgKHNlY3Rpb25zID09PSB1bmRlZmluZWQgfHwgc2VjdGlvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUYWJiaW5nIG91dCBvciBlbnRlciBzaG91bGQgY2xvc2UgdGhlIGF1dG8gY29tcGxldGUuXG4gICAgaWYgKGtleSA9PT0gS2V5cy5UQUIpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0cyA9IHNlY3Rpb25zW3RoaXMuX3NlY3Rpb25JbmRleF0ucmVzdWx0cztcbiAgICBpZiAoa2V5ID09PSBLZXlzLlVQKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5fcmVzdWx0SW5kZXggPD0gMCkge1xuICAgICAgICBpZiAodGhpcy5fc2VjdGlvbkluZGV4ID4gMCkge1xuICAgICAgICAgIHRoaXMuX3NlY3Rpb25JbmRleC0tO1xuICAgICAgICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzLmxlbmd0aCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVRdWVyeSh0aGlzLl9vcmlnaW5hbFF1ZXJ5KTtcbiAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3Jlc3VsdEluZGV4LS07XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gS2V5cy5ET1dOKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5fcmVzdWx0SW5kZXggPj0gcmVzdWx0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPCBzZWN0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgdGhpcy5fc2VjdGlvbkluZGV4Kys7XG4gICAgICAgICAgdGhpcy5fcmVzdWx0SW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3Jlc3VsdEluZGV4Kys7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU3VibWl0UmVzdWx0IChrZXksIHZhbHVlLCBlKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gdGhpcy5fc3RhdGUuZ2V0KCdzZWN0aW9ucycpO1xuICAgIGlmIChzZWN0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IHNlY3Rpb25zLmxlbmd0aCA8PSAwKSB7XG4gICAgICBpZiAodGhpcy5pc0ZpbHRlclNlYXJjaCkge1xuICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gc3VibWl0IHRoZSBzZWFyY2ggb24gZW50ZXJcbiAgICBpZiAoa2V5ID09PSBLZXlzLkVOVEVSKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICh0aGlzLmlzRmlsdGVyU2VhcmNoICYmIHRoaXMuX3Jlc3VsdEluZGV4ID09PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBmaWx0ZXIgPSAnJztcbiAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPj0gMCAmJiB0aGlzLl9yZXN1bHRJbmRleCA+PSAwKSB7XG4gICAgICAgIGZpbHRlciA9IEpTT04uc3RyaW5naWZ5KHNlY3Rpb25zW3RoaXMuX3NlY3Rpb25JbmRleF0ucmVzdWx0c1t0aGlzLl9yZXN1bHRJbmRleF0uZmlsdGVyKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGVRdWVyeSh2YWx1ZSk7XG4gICAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gdmFsdWU7XG4gICAgICB0aGlzLl9vblN1Ym1pdCh2YWx1ZSwgZmlsdGVyKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNwZWxsQ2hlY2tDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi9kb20vc2VhcmNocGFyYW1zJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG4vKipcbiAqIFNwZWxsQ2hlY2tDb21wb25lbnQgd2lsbCBzdXBwb3J0IGRpc3BsYXlpbmcgc3VnZ2VzdGlvbiwgYXV0b2NvcnJlY3QgYW5kIGNvbWJpbmVkKG1heWJlIGluIHRoZSBmdXR1cmUpXG4gKiBwcm92aWRlZCBmcm9tIHNwZWxsaW5nIGNvcnJlY3Rpb24uXG4gKlxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwZWxsQ2hlY2tDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlNQRUxMX0NIRUNLO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1NwZWxsQ2hlY2snO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKCkge1xuICAgIHJldHVybiAnc2VhcmNoL3NwZWxsY2hlY2snO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5kZWxldGUoJ3NraXBTcGVsbENoZWNrJyk7XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLmRlbGV0ZSgncXVlcnlUcmlnZ2VyJyk7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSwgdmFsKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIHNob3VsZFNob3c6IGRhdGEuY29ycmVjdGVkUXVlcnkgIT09IHVuZGVmaW5lZCxcbiAgICAgIGNvcnJlY3RlZFF1ZXJ5VXJsOiB0aGlzLl9idWlsZFJlZGlyZWN0UXVlcnlVcmwoZGF0YS5jb3JyZWN0ZWRRdWVyeSwgZGF0YS50eXBlKSxcbiAgICAgIGhlbHBUZXh0OiB0aGlzLl9nZXRIZWxwVGV4dChkYXRhLnR5cGUpXG4gICAgfSwgdmFsKSk7XG4gIH1cblxuICBfYnVpbGRSZWRpcmVjdFF1ZXJ5VXJsIChxdWVyeSwgdHlwZSkge1xuICAgIGlmIChxdWVyeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGxldCBwYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICBwYXJhbXMuc2V0KCdxdWVyeScsIHF1ZXJ5LnZhbHVlKTtcbiAgICBwYXJhbXMuc2V0KCdza2lwU3BlbGxDaGVjaycsIHRydWUpO1xuICAgIHBhcmFtcy5zZXQoJ3F1ZXJ5VHJpZ2dlcicsIHR5cGUudG9Mb3dlckNhc2UoKSk7XG4gICAgcmV0dXJuICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICB9XG5cbiAgX2dldEhlbHBUZXh0ICh0eXBlKSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdTVUdHRVNUJzpcbiAgICAgICAgcmV0dXJuICdEaWQgeW91IG1lYW46JztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZhY2V0ICovXG5cbi8qKlxuICogTW9kZWwgcmVwcmVzZW50aW5nIGEgZmFjZXQgZmlsdGVyIHdpdGggdGhlIGZvcm1hdCBvZlxuICoge1xuICogICBcImZpZWxkX25hbWVcIjogWyBGaWx0ZXJzLi4uIF0sXG4gKiAgIC4uLlxuICogfVxuICpcbiAqIEBzZWUge0BsaW5rIEZpbHRlcn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZXQge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGZhY2V0IGZpbHRlciBmcm9tIGEgbGlzdCBvZiBGaWx0ZXJzXG4gICAqIEBwYXJhbSAgey4uLkZpbHRlcn0gZmlsdGVycyBUaGUgZmlsdGVycyB0byB1c2UgaW4gdGhpcyBmYWNldFxuICAgKiBAcmV0dXJucyB7RmFjZXR9XG4gICAqL1xuICBzdGF0aWMgZnJvbUZpbHRlcnMgKC4uLmZpbHRlcnMpIHtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBjb25zdCBmbGF0RmlsdGVycyA9IGZpbHRlcnMuZmxhdE1hcChmID0+IGYuJG9yIHx8IGYpO1xuICAgIGZsYXRGaWx0ZXJzLmZvckVhY2goZiA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhmKVswXTtcbiAgICAgIGlmICghZ3JvdXBzW2tleV0pIHtcbiAgICAgICAgZ3JvdXBzW2tleV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1trZXldLnB1c2goZik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IEZhY2V0KGdyb3Vwcyk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZpbHRlckJveENvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IEZhY2V0IGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZhY2V0JztcblxuLyoqXG4gKiBSZW5kZXJzIGEgc2V0IG9mIGZpbHRlcnMsIGFuZCBzZWFyY2hlcyB3aXRoIHRoZW0gd2hlbiBhcHBsaWVkLlxuICogTXVsdGlwbGUgRmlsdGVyQm94IGNvbXBvbmVudHMgd2lsbCBBTkQgdG9nZXRoZXIgYnV0IHdpbGwgbm90IHNoYXJlIHN0YXRlLlxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlckJveENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICBpZiAoIWNvbmZpZy5maWx0ZXJzIHx8ICEoY29uZmlnLmZpbHRlcnMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICdGaWx0ZXJCb3ggcmVxdWlyZXMgZmlsdGVycyB0byBiZSBwcm92aWRlZCBhcyBhbiBhcnJheScsXG4gICAgICAgICdGaWx0ZXJCb3gnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBmaWx0ZXJzIHRvIGRpc3BsYXkgYW5kIGNvbnRyb2xcbiAgICAgKiBAdHlwZSB7b2JqZWN0W119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWx0ZXJDb25maWdzID0gY29uZmlnLmZpbHRlcnM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVydGljYWwga2V5IGZvciB0aGUgc2VhcmNoXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0cmlnZ2VyIGEgc2VhcmNoIG9uIGVhY2ggY2hhbmdlIHRvIGEgZmlsdGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zZWFyY2hPbkNoYW5nZSA9IGNvbmZpZy5zZWFyY2hPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RvciBvZiB0aGUgYXBwbHkgYnV0dG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwcGx5QnV0dG9uU2VsZWN0b3IgPSBjb25maWcuYXBwbHlCdXR0b25TZWxlY3RvciB8fCAnLmpzLXlleHQtZmlsdGVyYm94LWFwcGx5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnRzIGNyZWF0ZWQgZm9yIGVhY2ggZmlsdGVyIGNvbmZpZ1xuICAgICAqIEB0eXBlIHtDb21wb25lbnRbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlckNvbXBvbmVudHMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBmaWx0ZXIgY29tcG9uZW50cyBpbiB0aGUgYm94XG4gICAgICogQHR5cGUge0ZpbHRlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlcnMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRoaXMgZmlsdGVyYm94IGNvbnRhaW5zIGR5bmFtaWMgZmlsdGVycy4gVGhpcyBhZmZlY3RzIHRoZVxuICAgICAqIHRoZSB3YXkgdGhlIGZpbHRlcnMgYXJlIHVzZWQgaW4gdGhlIHNlYXJjaFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faXNEeW5hbWljID0gY29uZmlnLmlzRHluYW1pYyB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gYGZpbHRlcnMvZmlsdGVyYm94YDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdGaWx0ZXJCb3gnO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgIGZpbHRlckNvbmZpZ3M6IHRoaXMuX2ZpbHRlckNvbmZpZ3MsXG4gICAgICBzaG93QXBwbHlCdXR0b246ICF0aGlzLl9zZWFyY2hPbkNoYW5nZVxuICAgIH0pKTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIGlmICh0aGlzLl9maWx0ZXJDb21wb25lbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cy5mb3JFYWNoKGMgPT4gYy5yZW1vdmUoKSk7XG4gICAgICB0aGlzLl9maWx0ZXJDb21wb25lbnRzID0gW107XG4gICAgICB0aGlzLl9maWx0ZXJzID0gW107XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBmaWx0ZXJzIGZyb20gY29uZmlnc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZmlsdGVyQ29uZmlncy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5fZmlsdGVyQ29uZmlnc1tpXTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoY29uZmlnLnR5cGUsIE9iamVjdC5hc3NpZ24oe30sXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmVudENvbnRhaW5lcjogdGhpcy5fY29udGFpbmVyLFxuICAgICAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0uZmlsdGVyJHtpfWAsXG4gICAgICAgICAgc3RvcmVPbkNoYW5nZTogZmFsc2UsXG4gICAgICAgICAgY29udGFpbmVyOiBgLmpzLXlleHQtZmlsdGVyYm94LWZpbHRlciR7aX1gLFxuICAgICAgICAgIG9uQ2hhbmdlOiAoZmlsdGVyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uRmlsdGVyQ2hhbmdlKGksIGZpbHRlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICBjb21wb25lbnQubW91bnQoKTtcbiAgICAgIHRoaXMuX2ZpbHRlckNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgdGhpcy5fZmlsdGVyc1tpXSA9IGNvbXBvbmVudC5nZXRGaWx0ZXIoKTtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGFwcGx5IGJ1dHRvblxuICAgIGlmICghdGhpcy5fc2VhcmNoT25DaGFuZ2UpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2FwcGx5QnV0dG9uU2VsZWN0b3IpO1xuXG4gICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgIERPTS5vbihidXR0b24sICdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLl9zYXZlRmlsdGVyc1RvU3RvcmFnZSgpO1xuICAgICAgICAgIHRoaXMuX3NlYXJjaCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGNoYW5nZXMgdG8gY2hpbGQgZmlsdGVyIGNvbXBvbmVudHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgY2hhbmdlZCBmaWx0ZXJcbiAgICogQHBhcmFtIHtGaWx0ZXJ9IGZpbHRlciBUaGUgbmV3IGZpbHRlclxuICAgKi9cbiAgb25GaWx0ZXJDaGFuZ2UgKGluZGV4LCBmaWx0ZXIpIHtcbiAgICB0aGlzLl9maWx0ZXJzW2luZGV4XSA9IGZpbHRlcjtcbiAgICBpZiAodGhpcy5fc2VhcmNoT25DaGFuZ2UpIHtcbiAgICAgIHRoaXMuX3NhdmVGaWx0ZXJzVG9TdG9yYWdlKCk7XG4gICAgICB0aGlzLl9zZWFyY2goKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBmaWx0ZXIgY29tcG9uZW50cyBhbG9uZyB3aXRoIHRoaXMgY29tcG9uZW50XG4gICAqL1xuICByZW1vdmUgKCkge1xuICAgIHRoaXMuX2ZpbHRlckNvbXBvbmVudHMuZm9yRWFjaChjID0+IGMucmVtb3ZlKCkpO1xuICAgIHN1cGVyLnJlbW92ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgY3VycmVudCBmaWx0ZXJzIHRvIHN0b3JhZ2UgdG8gYmUgdXNlZCBpbiB0aGUgbmV4dCBzZWFyY2hcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zYXZlRmlsdGVyc1RvU3RvcmFnZSAoKSB7XG4gICAgY29uc3QgdmFsaWRGaWx0ZXJzID0gdGhpcy5fZmlsdGVycy5maWx0ZXIoZiA9PlxuICAgICAgZiAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBmICE9PSBudWxsICYmXG4gICAgICBPYmplY3Qua2V5cyhmKS5sZW5ndGggPiAwKTtcblxuICAgIGlmICh0aGlzLl9pc0R5bmFtaWMpIHtcbiAgICAgIGNvbnN0IGNvbWJpbmVkRmlsdGVyID0gRmFjZXQuZnJvbUZpbHRlcnMoLi4udmFsaWRGaWx0ZXJzKTtcbiAgICAgIHRoaXMuY29yZS5zZXRGYWNldEZpbHRlcih0aGlzLm5hbWUsIGNvbWJpbmVkRmlsdGVyIHx8IHt9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29tYmluZWRGaWx0ZXIgPSB2YWxpZEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgICA/IEZpbHRlci5hbmQoLi4udmFsaWRGaWx0ZXJzKVxuICAgICAgICA6IHZhbGlkRmlsdGVyc1swXTtcbiAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBjb21iaW5lZEZpbHRlciB8fCB7fSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYSBzZWFyY2ggd2l0aCBhbGwgZmlsdGVycyBpbiBzdG9yYWdlXG4gICAqL1xuICBfc2VhcmNoICgpIHtcbiAgICBjb25zdCBhbGxGaWx0ZXJzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgY29uc3QgdG90YWxGaWx0ZXIgPSBhbGxGaWx0ZXJzLmxlbmd0aCA+IDFcbiAgICAgID8gRmlsdGVyLmFuZCguLi5hbGxGaWx0ZXJzKVxuICAgICAgOiBhbGxGaWx0ZXJzWzBdO1xuXG4gICAgY29uc3QgcXVlcnkgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSk7XG5cbiAgICBjb25zdCBmYWNldEZpbHRlciA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GQUNFVF9GSUxURVIpWzBdO1xuXG4gICAgdGhpcy5jb3JlLnZlcnRpY2FsU2VhcmNoKHRoaXMuX3ZlcnRpY2FsS2V5LCB7XG4gICAgICBpbnB1dDogcXVlcnksXG4gICAgICBmaWx0ZXI6IEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSxcbiAgICAgIGZhY2V0RmlsdGVyOiBKU09OLnN0cmluZ2lmeShmYWNldEZpbHRlcilcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyT3B0aW9uc0NvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuLyoqXG4gKiBUaGUgY3VycmVudGx5IHN1cHBvcnRlZCBjb250cm9sc1xuICogQHR5cGUge3N0cmluZ1tdfVxuICovXG5jb25zdCBTVVBQT1JURURfQ09OVFJPTFMgPSBbXG4gICdzaW5nbGVvcHRpb24nLFxuICAnbXVsdGlvcHRpb24nXG5dO1xuXG4vKipcbiAqIFJlbmRlcnMgYSBzZXQgb2Ygb3B0aW9ucywgZWFjaCBvbmUgcmVwcmVzZW50aW5nIGEgZmlsdGVyIGluIGEgc2VhcmNoLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJPcHRpb25zQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZywgc3lzdGVtQ29uZmlnKTtcblxuICAgIGlmICghY29uZmlnLmNvbnRyb2wgfHwgIVNVUFBPUlRFRF9DT05UUk9MUy5pbmNsdWRlcyhjb25maWcuY29udHJvbCkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICdGaWx0ZXJPcHRpb25zIHJlcXVpcmVzIGEgdmFsaWQgXCJjb250cm9sXCIgdG8gYmUgcHJvdmlkZWQnLFxuICAgICAgICAnRmlsdGVyT3B0aW9ucycpO1xuICAgIH1cblxuICAgIGlmICghY29uZmlnLm9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICdGaWx0ZXJPcHRpb25zIGNvbXBvbmVudCByZXF1aXJlcyBvcHRpb25zIHRvIGJlIHByb3ZpZGVkJyxcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMnKTtcbiAgICB9XG5cbiAgICBsZXQgcHJldmlvdXNPcHRpb25zID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUodGhpcy5uYW1lKTtcbiAgICBpZiAodHlwZW9mIHByZXZpb3VzT3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHByZXZpb3VzT3B0aW9ucyA9IEpTT04ucGFyc2UocHJldmlvdXNPcHRpb25zKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICAgIGxldCBzZWxlY3RlZE9wdGlvbnMgPSBwcmV2aW91c09wdGlvbnMgfHwgW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBmaWx0ZXIgb3B0aW9ucyB0byBkaXNwbGF5IHdpdGggY2hlY2tlZCBzdGF0dXNcbiAgICAgKiBAdHlwZSB7b2JqZWN0W119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vcHRpb25zID0gY29uZmlnLm9wdGlvbnMubWFwKG8gPT4gT2JqZWN0LmFzc2lnbih7fSwgeyBzZWxlY3RlZDogc2VsZWN0ZWRPcHRpb25zLmluY2x1ZGVzKG8ubGFiZWwpIH0sIG8pKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIGNvbnRyb2wgdG8gZGlzcGxheVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9jb250cm9sID0gY29uZmlnLmNvbnRyb2w7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0b3IgdXNlZCBmb3Igb3B0aW9ucyBpbiB0aGUgdGVtcGxhdGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb3B0aW9uU2VsZWN0b3IgPSBjb25maWcub3B0aW9uU2VsZWN0b3IgfHwgJy5qcy15ZXh0LWZpbHRlci1vcHRpb24nO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc3RvcmVzIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBvbiBlYWNoIGNoYW5nZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RvcmVPbkNoYW5nZSA9IGNvbmZpZy5zdG9yZU9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBjaGFuZ2VkXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBjb25maWcub25DaGFuZ2UgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gYmUgdXNlZCBpbiB0aGUgbGVnZW5kXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xhYmVsID0gY29uZmlnLmxhYmVsIHx8ICdGaWx0ZXJzJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdGaWx0ZXJPcHRpb25zJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyLCBiYXNlZCBvbiB0aGUgY29udHJvbFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gYGNvbnRyb2xzLyR7Y29uZmlnLmNvbnRyb2x9YDtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICBvcHRpb25zOiB0aGlzLl9vcHRpb25zLFxuICAgICAgbGFiZWw6IHRoaXMuX2xhYmVsXG4gICAgfSkpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgRE9NLmRlbGVnYXRlKFxuICAgICAgRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgYC4ke3RoaXMuX2NvbnRyb2x9LWZpZWxkc2V0YCksXG4gICAgICB0aGlzLl9vcHRpb25TZWxlY3RvcixcbiAgICAgICdjbGljaycsXG4gICAgICBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU9wdGlvbihwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC5pbmRleCksIGV2ZW50LnRhcmdldC5jaGVja2VkKTtcblxuICAgICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLl9idWlsZEZpbHRlcigpO1xuICAgICAgICBpZiAodGhpcy5fc3RvcmVPbkNoYW5nZSkge1xuICAgICAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBmaWx0ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fb25DaGFuZ2UoZmlsdGVyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgX3VwZGF0ZU9wdGlvbiAoaW5kZXgsIHNlbGVjdGVkKSB7XG4gICAgaWYgKHRoaXMuX2NvbnRyb2wgPT09ICdzaW5nbGVvcHRpb24nKSB7XG4gICAgICB0aGlzLl9vcHRpb25zID0gdGhpcy5fb3B0aW9ucy5tYXAobyA9PiBPYmplY3QuYXNzaWduKHt9LCBvLCB7IHNlbGVjdGVkOiBmYWxzZSB9KSk7XG4gICAgfVxuXG4gICAgdGhpcy5fb3B0aW9uc1tpbmRleF0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9vcHRpb25zW2luZGV4XSwgeyBzZWxlY3RlZCB9KTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG4gIH1cblxuICBnZXRGaWx0ZXIgKCkge1xuICAgIHJldHVybiB0aGlzLl9idWlsZEZpbHRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBvcHRpb25zXG4gICAqL1xuICBjbGVhciAoKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBET00ucXVlcnlBbGwodGhpcy5fY29udGFpbmVyLCB0aGlzLl9vcHRpb25TZWxlY3Rvcik7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlID0+IGUuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2ZhbHNlJykpO1xuICAgIHRoaXMuX2FwcGx5RmlsdGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgYW5kIHJldHVybiB0aGUgRmlsdGVyIHRoYXQgcmVwcmVzZW50cyB0aGUgY3VycmVudCBzdGF0ZVxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2J1aWxkRmlsdGVyICgpIHtcbiAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5fb3B0aW9uc1xuICAgICAgLmZpbHRlcihvID0+IG8uc2VsZWN0ZWQpXG4gICAgICAubWFwKG8gPT4gby5maWx0ZXJcbiAgICAgICAgPyBvLmZpbHRlclxuICAgICAgICA6IEZpbHRlci5lcXVhbChvLmZpZWxkLCBvLnZhbHVlKSk7XG5cbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KHRoaXMubmFtZSwgdGhpcy5fb3B0aW9ucy5maWx0ZXIobyA9PiBvLnNlbGVjdGVkKS5tYXAobyA9PiBvLmxhYmVsKSk7XG4gICAgcmV0dXJuIGZpbHRlcnMubGVuZ3RoID4gMFxuICAgICAgPyBGaWx0ZXIuZ3JvdXAoLi4uZmlsdGVycylcbiAgICAgIDoge307XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJhbmdlRmlsdGVyQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmdlRmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZywgc3lzdGVtQ29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaWVsZCB0byBmaWx0ZXIgb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmllbGQgPSBjb25maWcuZmllbGQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBmaWx0ZXIgdmFsdWUgY2hhbmdlc1xuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29uQ2hhbmdlID0gY29uZmlnLm9uQ2hhbmdlIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc3RvcmVzIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBvbiBlYWNoIGNoYW5nZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RvcmVPbkNoYW5nZSA9IGNvbmZpZy5zdG9yZU9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgbGV0IG1pblZhbCA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke3RoaXMubmFtZX0ubWluYCk7XG4gICAgaWYgKHR5cGVvZiBtaW5WYWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBtaW5WYWwgPSBOdW1iZXIucGFyc2VJbnQobWluVmFsKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICAgIGxldCBtYXhWYWwgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHt0aGlzLm5hbWV9Lm1heGApO1xuICAgIGlmICh0eXBlb2YgbWluVmFsID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbWF4VmFsID0gTnVtYmVyLnBhcnNlSW50KG1heFZhbCk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHJhbmdlIHJlcHJlc2VudGVkXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3JhbmdlID0ge1xuICAgICAgbWluOiBtaW5WYWwgfHwgY29uZmlnLmluaXRpYWxNaW4gfHwgMCxcbiAgICAgIG1heDogbWF4VmFsIHx8IGNvbmZpZy5pbml0aWFsTWF4IHx8IDEwXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB0byBkaXNwbGF5IGZvciB0aGUgcmFuZ2UgY29udHJvbFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90aXRsZSA9IGNvbmZpZy50aXRsZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBsYWJlbCB0byBkaXNwbGF5IGZvciB0aGUgbWluIGlucHV0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX21pbkxhYmVsID0gY29uZmlnLm1pbkxhYmVsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgbGFiZWwgdG8gZGlzcGxheSBmb3IgdGhlIG1heCBpbnB1dFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9tYXhMYWJlbCA9IGNvbmZpZy5tYXhMYWJlbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSBgY29udHJvbHMvcmFuZ2VgO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1JhbmdlRmlsdGVyJztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgdGl0bGU6IHRoaXMuX3RpdGxlLFxuICAgICAgbWluTGFiZWw6IHRoaXMuX21pbkxhYmVsLFxuICAgICAgbWF4TGFiZWw6IHRoaXMuX21heExhYmVsLFxuICAgICAgbWluVmFsdWU6IHRoaXMuX3JhbmdlLm1pbixcbiAgICAgIG1heFZhbHVlOiB0aGlzLl9yYW5nZS5tYXhcbiAgICB9KSk7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgRE9NLmRlbGVnYXRlKHRoaXMuX2NvbnRhaW5lciwgJy5qcy15ZXh0LXJhbmdlJywgJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdXBkYXRlUmFuZ2UoZXZlbnQudGFyZ2V0LmRhdGFzZXQua2V5LCBOdW1iZXIucGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRNaW4gKHZhbHVlKSB7XG4gICAgdGhpcy5fdXBkYXRlUmFuZ2UoJ21pbicsIHZhbHVlKTtcbiAgfVxuXG4gIHNldE1heCAodmFsdWUpIHtcbiAgICB0aGlzLl91cGRhdGVSYW5nZSgnbWF4JywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0RmlsdGVyICgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgcmFuZ2Ugc3RhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmFuZ2Uga2V5IHRvIHVwZGF0ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIG5ldyB2YWx1ZSBmb3IgdGhlIGtleVxuICAgKi9cbiAgX3VwZGF0ZVJhbmdlIChrZXksIHZhbHVlKSB7XG4gICAgdGhpcy5fcmFuZ2UgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9yYW5nZSwgeyBba2V5XTogdmFsdWUgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSgpO1xuXG4gICAgY29uc3QgZmlsdGVyID0gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgICBpZiAodGhpcy5fc3RvcmVPbkNoYW5nZSkge1xuICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGZpbHRlcik7XG4gICAgfVxuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7dGhpcy5uYW1lfS5taW5gLCB0aGlzLl9yYW5nZS5taW4pO1xuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7dGhpcy5uYW1lfS5tYXhgLCB0aGlzLl9yYW5nZS5tYXgpO1xuXG4gICAgdGhpcy5fb25DaGFuZ2UoZmlsdGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgZmlsdGVyIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjdXJyZW50IHN0YXRlXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBfYnVpbGRGaWx0ZXIgKCkge1xuICAgIHJldHVybiBGaWx0ZXIuaW5jbHVzaXZlUmFuZ2UodGhpcy5fZmllbGQsIHRoaXMuX3JhbmdlLm1pbiwgdGhpcy5fcmFuZ2UubWF4KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRGF0ZUZpbHRlckNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIEEgZmlsdGVyIGZvciBhIHJhbmdlIG9mIGRhdGVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVSYW5nZUZpbHRlckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBpIGZpZWxkIHRoaXMgZmlsdGVyIGNvbnRyb2xzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpZWxkID0gY29uZmlnLmZpZWxkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIHRvIGRpc3BsYXkgZm9yIHRoZSBkYXRlIHJhbmdlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RpdGxlID0gY29uZmlnLnRpdGxlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGxhYmVsIHRvIHNob3cgZm9yIHRoZSBtaW4gZGF0ZSBpbnB1dFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9taW5MYWJlbCA9IGNvbmZpZy5taW5MYWJlbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGxhYmVsIHRvIHNob3cgZm9yIHRoZSBtYXggZGF0ZSBpbnB1dFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9tYXhMYWJlbCA9IGNvbmZpZy5tYXhMYWJlbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbGxiYWNrIHVzZWQgd2hlbiBhIGRhdGUgaXMgY2hhbmdlZFxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29uQ2hhbmdlID0gY29uZmlnLm9uQ2hhbmdlIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc3RvcmVzIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBvbiBlYWNoIGNoYW5nZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RvcmVPbkNoYW5nZSA9IGNvbmZpZy5zdG9yZU9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhpcyBmaWx0ZXIgcmVwcmVzZW50cyBhbiBleGNsdXNpdmUgcmFuZ2UsIHJhdGhlciB0aGFuIGFuIGluY2x1c2l2ZSBvbmVcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2lzRXhjbHVzaXZlID0gY29uZmlnLmlzRXhjbHVzaXZlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIGZvciB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gYGNvbnRyb2xzL2RhdGVgO1xuXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRvZGF5U3RyaW5nID0gYCR7dG9kYXkuZ2V0RnVsbFllYXIoKX0tJHtgJHt0b2RheS5nZXRNb250aCgpICsgMX1gLnBhZFN0YXJ0KDIsICcwJyl9LSR7YCR7dG9kYXkuZ2V0RGF0ZSgpfWAucGFkU3RhcnQoMiwgJzAnKX1gO1xuICAgIGNvbnN0IG1pbkRhdGUgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHt0aGlzLm5hbWV9Lm1pbmApO1xuICAgIGNvbnN0IG1heERhdGUgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHt0aGlzLm5hbWV9Lm1heGApO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgZGF0ZSByYW5nZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZGF0ZSA9IHtcbiAgICAgIG1pbjogbWluRGF0ZSB8fCBjb25maWcuaW5pdGlhbE1pbiB8fCB0b2RheVN0cmluZyxcbiAgICAgIG1heDogbWF4RGF0ZSB8fCBjb25maWcuaW5pdGlhbE1heCB8fCB0b2RheVN0cmluZ1xuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRGF0ZVJhbmdlRmlsdGVyJztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgdGl0bGU6IHRoaXMuX3RpdGxlLFxuICAgICAgbWluTGFiZWw6IHRoaXMuX21pbkxhYmVsLFxuICAgICAgbWF4TGFiZWw6IHRoaXMuX21heExhYmVsLFxuICAgICAgZGF0ZU1pbjogdGhpcy5fZGF0ZS5taW4sXG4gICAgICBkYXRlTWF4OiB0aGlzLl9kYXRlLm1heFxuICAgIH0pKTtcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICBET00uZGVsZWdhdGUodGhpcy5fY29udGFpbmVyLCAnLmpzLXlleHQtZGF0ZScsICdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3VwZGF0ZVJhbmdlKGV2ZW50LnRhcmdldC5kYXRhc2V0LmtleSwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG1pbiBkYXRlIHRvIHRoZSBvbmUgcHJvdmlkZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGUgRGF0ZSB0byBzZXQgaW4geXl5eS1tbS1kZCBzdHJpbmcgZm9ybWF0XG4gICAqL1xuICBzZXRNaW4gKGRhdGUpIHtcbiAgICB0aGlzLl91cGRhdGVSYW5nZSgnbWluJywgZGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBtYXggZGF0ZSB0byB0aGUgb25lIHByb3ZpZGVkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlIERhdGUgdG8gc2V0IGluIHl5eXktbW0tZGQgc3RyaW5nIGZvcm1hdFxuICAgKi9cbiAgc2V0TWF4IChkYXRlKSB7XG4gICAgdGhpcy5fdXBkYXRlUmFuZ2UoJ21heCcsIGRhdGUpO1xuICB9XG5cbiAgZ2V0RmlsdGVyICgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBkYXRlIHJhbmdlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBmb3IgdGhlIGRhdGUgdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSBzdHJpbmcgZGF0ZSB2YWx1ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3VwZGF0ZVJhbmdlIChrZXksIHZhbHVlKSB7XG4gICAgdGhpcy5fZGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2RhdGUsIHsgW2tleV06IHZhbHVlIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoKTtcblxuICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuX2J1aWxkRmlsdGVyKCk7XG4gICAgaWYgKHRoaXMuX3N0b3JlT25DaGFuZ2UpIHtcbiAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBmaWx0ZXIpO1xuICAgIH1cbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke3RoaXMubmFtZX0ubWluYCwgdGhpcy5fZGF0ZS5taW4pO1xuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7dGhpcy5uYW1lfS5tYXhgLCB0aGlzLl9kYXRlLm1heCk7XG5cbiAgICB0aGlzLl9vbkNoYW5nZShmaWx0ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhbiBhcGkgZmlsdGVyIHdpdGggdGhlIGN1cnJlbnQgZGF0ZSBzdGF0ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2J1aWxkRmlsdGVyICgpIHtcbiAgICBpZiAodGhpcy5fZGF0ZS5taW4gPT09ICcnIHx8IHRoaXMuX2RhdGUubWF4ID09PSAnJykge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faXNFeGNsdXNpdmVcbiAgICAgID8gRmlsdGVyLmV4Y2x1c2l2ZVJhbmdlKHRoaXMuX2ZpZWxkLCB0aGlzLl9kYXRlLm1pbiwgdGhpcy5fZGF0ZS5tYXgpXG4gICAgICA6IEZpbHRlci5pbmNsdXNpdmVSYW5nZSh0aGlzLl9maWVsZCwgdGhpcy5fZGF0ZS5taW4sIHRoaXMuX2RhdGUubWF4KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRHluYW1pY0ZpbHRlcnNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbi8qKlxuICogRGlzcGxheXMgYSBzZXQgb2YgZHluYW1pYyBmaWx0ZXJzIHJldHVybmVkIGZyb20gdGhlIGJhY2tlbmRcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljRmlsdGVyc0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVydGljYWwga2V5IGZvciB0aGUgc2VhcmNoXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0cmlnZ2VyIGEgc2VhcmNoIG9uIGVhY2ggY2hhbmdlIHRvIGEgZmlsdGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zZWFyY2hPbkNoYW5nZSA9IGNvbmZpZy5zZWFyY2hPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RvciBvZiB0aGUgYXBwbHkgYnV0dG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwcGx5QnV0dG9uU2VsZWN0b3IgPSBjb25maWcuYXBwbHlCdXR0b25TZWxlY3RvciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbnRyb2xzIHRvIHVzZSBmb3IgZWFjaCBmaWVsZC4gRWFjaCB0eXBlIG9mIGZpbHRlciBoYXMgYSBkZWZhdWx0XG4gICAgICogJGVxIDogbXVsdGlvcHRpb24gKGNoZWNrYm94KVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5fZmllbGRDb250cm9scyA9IGNvbmZpZy5maWVsZENvbnRyb2xzIHx8IHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAnZmlsdGVycy9keW5hbWljJztcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSBmb3IgdGhlIGRhdGEgc3RvcmFnZSB0byBsaXN0ZW4gZm9yIHVwZGF0ZXMgZnJvbSB0aGUgc2VydmVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpbHRlciBib3ggdGhhdCBkaXNwbGF5cyB0aGUgZHluYW1pYyBmaWx0ZXJzXG4gICAgICogQHR5cGUge0ZpbHRlckJveENvbXBvbmVudH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlcmJveCA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRHluYW1pY0ZpbHRlcnMnO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgdGhpcy5jb3JlLmVuYWJsZUR5bmFtaWNGaWx0ZXJzKCk7XG5cbiAgICBpZiAodGhpcy5fZmlsdGVyYm94KSB7XG4gICAgICB0aGlzLl9maWx0ZXJib3gucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgbGV0IHsgZmlsdGVycyB9ID0gdGhpcy5fc3RhdGUuZ2V0KCk7XG5cbiAgICBpZiAoIWZpbHRlcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmaWx0ZXJzID0gZmlsdGVycy5tYXAoZiA9PiB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZiwge1xuICAgICAgICB0eXBlOiAnRmlsdGVyT3B0aW9ucycsXG4gICAgICAgIGNvbnRyb2w6IHRoaXMuX2ZpZWxkQ29udHJvbHNbZi5maWVsZElkXSB8fCAnbXVsdGlvcHRpb24nXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2ZpbHRlcmJveCA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoXG4gICAgICAnRmlsdGVyQm94JyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgcGFyZW50Q29udGFpbmVyOiB0aGlzLl9jb250YWluZXIsXG4gICAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0uZmlsdGVyYm94YCxcbiAgICAgICAgY29udGFpbmVyOiAnLmpzLXlleHQtZHluYW1pYy1maWx0ZXJzJyxcbiAgICAgICAgc2VhcmNoT25DaGFuZ2U6IHRoaXMuX3NlYXJjaE9uQ2hhbmdlLFxuICAgICAgICB2ZXJ0aWNhbEtleTogdGhpcy5fdmVydGljYWxLZXksXG4gICAgICAgIGlzRHluYW1pYzogdHJ1ZSxcbiAgICAgICAgZmlsdGVyc1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5fZmlsdGVyYm94Lm1vdW50KCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEdlb0xvY2F0aW9uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuY29uc3QgTUVURVJTX1BFUl9NSUxFID0gMTYwOS4zNDQ7XG5cbmNvbnN0IERFRkFVTFRfQ09ORklHID0ge1xuICAvKipcbiAgICogVGhlIHJhZGl1cywgaW4gbWlsZXMsIGFyb3VuZCB0aGUgdXNlcidzIGxvY2F0aW9uIHRvIGZpbmQgcmVzdWx0cy5cbiAgICogSWYgbG9jYXRpb24gYWNjdXJhY3kgaXMgbG93LCBhIGxhcmdlciByYWRpdXMgbWF5IGJlIHVzZWQgYXV0b21hdGljYWxseVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgcmFkaXVzOiA1MCxcblxuICAvKipcbiAgICogVGhlIHZlcnRpY2FsIGtleSB0byB1c2VcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHZlcnRpY2FsS2V5OiBudWxsLFxuXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBzdWJtaXRzIGEgc2VhcmNoIHdoZW4gdGhlIHZhbHVlIGlzIGNoYW5nZWRcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBzZWFyY2hPbkNoYW5nZTogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFRoZSB0aXRsZSB0byBkaXNwbGF5XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICB0aXRsZTogJ0xvY2F0aW9uJyxcblxuICAvKipcbiAgICogVGhlIGxhYmVsIHRvIGRpc3BsYXlcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGxhYmVsOiAnTG9jYXRpb24nLFxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB1cmwgdG8gc2hvdyBpbiB0aGUgZ2VvIGJ1dHRvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2VvQnV0dG9uSWNvbjogJycsXG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IHRvIHNob3cgaW4gdGhlIGdlbyBidXR0b25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdlb0J1dHRvblRleHQ6ICdVc2UgTXkgTG9jYXRpb24nLFxuXG4gIC8qKlxuICAgKiBUaGUgdGV4dCB0byBzaG93IHdoZW4gZ2VvbG9jYXRpb24gaXMgZW5hYmxlZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZW5hYmxlZFRleHQ6ICdDdXJyZW50IExvY2F0aW9uJyxcblxuICAvKipcbiAgICogVGhlIHRleHQgdG8gc2hvdyB3aGVuIGxvYWRpbmcgdGhlIHVzZXIncyBsb2NhdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgbG9hZGluZ1RleHQ6ICdGaW5kaW5nIFlvdXIgTG9jYXRpb24uLi4nLFxuXG4gIC8qKlxuICAgKiBUaGUgdGV4dCB0byBzaG93IGlmIHRoZSB1c2VyJ3MgbG9jYXRpb24gY2Fubm90IGJlIGZvdW5kXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBlcnJvclRleHQ6ICdDb3VsZCBOb3QgRmluZCBZb3VyIExvY2F0aW9uJyxcblxuICAvKipcbiAgICogVGhlIENTUyBzZWxlY3RvciBvZiB0aGUgdG9nZ2xlIGJ1dHRvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgYnV0dG9uU2VsZWN0b3I6ICcuanMteXh0LUdlb0xvY2F0aW9uRmlsdGVyLWJ1dHRvbicsXG5cbiAgLyoqXG4gICAqIFRoZSBDU1Mgc2VsZWN0b3Igb2YgdGhlIHF1ZXJ5IGlucHV0XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBpbnB1dFNlbGVjdG9yOiAnLmpzLXl4dC1HZW9Mb2NhdGlvbkZpbHRlci1pbnB1dCdcbn07XG5cbi8qKlxuICogUmVuZGVycyBhIGJ1dHRvbiB0aGF0IHdoZW4gY2xpY2tlZCBhZGRzIGEgc3RhdGljIGZpbHRlciByZXByZXNlbnRpbmcgdGhlIHVzZXIncyBsb2NhdGlvblxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlb0xvY2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKHsgLi4uREVGQVVMVF9DT05GSUcsIC4uLmNvbmZpZyB9LCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHN0cmluZyB0byB1c2UgZm9yIHRoZSBpbnB1dCBib3gsIHByb3ZpZGVkIHRvIHRlbXBsYXRlIGZvciByZW5kZXJpbmcuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWApIHx8ICcnO1xuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCwgcSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gcTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaWx0ZXIgdG8gdXNlIGZvciB0aGUgY3VycmVudCBxdWVyeVxuICAgICAqIEB0eXBlIHtGaWx0ZXJ9XG4gICAgICovXG4gICAgdGhpcy5maWx0ZXIgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWApIHx8IHt9O1xuICAgIGlmICh0eXBlb2YgdGhpcy5maWx0ZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmZpbHRlciA9IEpTT04ucGFyc2UodGhpcy5maWx0ZXIpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG5cbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke3RoaXMubmFtZX1gLCBmID0+IHsgdGhpcy5maWx0ZXIgPSBmOyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdHZW9Mb2NhdGlvbkZpbHRlcic7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoKSB7XG4gICAgcmV0dXJuICdjb250cm9scy9nZW9sb2NhdGlvbic7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIGxldCBwbGFjZWhvbGRlciA9ICcnO1xuICAgIGlmICh0aGlzLl9lbmFibGVkKSB7XG4gICAgICBwbGFjZWhvbGRlciA9IHRoaXMuX2NvbmZpZy5lbmFibGVkVGV4dDtcbiAgICB9XG4gICAgaWYgKGRhdGEuZ2VvTG9hZGluZykge1xuICAgICAgcGxhY2Vob2xkZXIgPSB0aGlzLl9jb25maWcubG9hZGluZ1RleHQ7XG4gICAgfVxuICAgIGlmIChkYXRhLmdlb0Vycm9yKSB7XG4gICAgICBwbGFjZWhvbGRlciA9IHRoaXMuX2NvbmZpZy5lcnJvclRleHQ7XG4gICAgfVxuICAgIHN1cGVyLnNldFN0YXRlKHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICB0aXRsZTogdGhpcy5fY29uZmlnLnRpdGxlLFxuICAgICAgZ2VvRW5hYmxlZDogdGhpcy5fZW5hYmxlZCxcbiAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgbGFiZWxUZXh0OiB0aGlzLl9jb25maWcubGFiZWwsXG4gICAgICBlbmFibGVkVGV4dDogdGhpcy5fY29uZmlnLmVuYWJsZWRUZXh0LFxuICAgICAgbG9hZGluZ1RleHQ6IHRoaXMuX2NvbmZpZy5sb2FkaW5nVGV4dCxcbiAgICAgIGVycm9yVGV4dDogdGhpcy5fY29uZmlnLmVycm9yVGV4dCxcbiAgICAgIGdlb0J1dHRvbkljb246IHRoaXMuX2NvbmZpZy5nZW9CdXR0b25JY29uLFxuICAgICAgZ2VvVmFsdWU6IHRoaXMuX2VuYWJsZWQgfHwgZGF0YS5nZW9Mb2FkaW5nIHx8IGRhdGEuZ2VvRXJyb3IgPyAnJyA6IHRoaXMucXVlcnksXG4gICAgICBnZW9QbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICBnZW9CdXR0b25UZXh0OiB0aGlzLl9jb25maWcuZ2VvQnV0dG9uVGV4dFxuICAgIH0pO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZSkge1xuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2luaXRBdXRvQ29tcGxldGUodGhpcy5fY29uZmlnLmlucHV0U2VsZWN0b3IpO1xuICAgIERPTS5vbih0aGlzLl9jb25maWcuYnV0dG9uU2VsZWN0b3IsICdjbGljaycsICgpID0+IHRoaXMuX3RvZ2dsZUdlb0ZpbHRlcigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gd2lyZSB1cCBvdXIgYXV0byBjb21wbGV0ZSBvbiBhbiBpbnB1dCBzZWxlY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRTZWxlY3RvciBDU1Mgc2VsZWN0b3IgdG8gYmluZCBvdXIgYXV0byBjb21wbGV0ZSBjb21wb25lbnQgdG9cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbml0QXV0b0NvbXBsZXRlIChpbnB1dFNlbGVjdG9yKSB7XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZSkge1xuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2F1dG9jb21wbGV0ZSA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoJ0F1dG9Db21wbGV0ZScsIHtcbiAgICAgIHBhcmVudENvbnRhaW5lcjogdGhpcy5fY29udGFpbmVyLFxuICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfS5hdXRvY29tcGxldGVgLFxuICAgICAgaXNGaWx0ZXJTZWFyY2g6IHRydWUsXG4gICAgICBjb250YWluZXI6ICcuanMteXh0LUdlb0xvY2F0aW9uRmlsdGVyLWF1dG9jb21wbGV0ZScsXG4gICAgICBvcmlnaW5hbFF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgb3JpZ2luYWxGaWx0ZXI6IHRoaXMuZmlsdGVyLFxuICAgICAgaW5wdXRFbDogaW5wdXRTZWxlY3RvcixcbiAgICAgIHZlcnRpY2FsS2V5OiB0aGlzLl92ZXJ0aWNhbEtleSxcbiAgICAgIG9uU3VibWl0OiAocXVlcnksIGZpbHRlcikgPT4ge1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gRmlsdGVyLmZyb21SZXNwb25zZShmaWx0ZXIpO1xuICAgICAgICB0aGlzLl9zYXZlRGF0YVRvU3RvcmFnZShxdWVyeSwgdGhpcy5maWx0ZXIpO1xuICAgICAgICB0aGlzLl9lbmFibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgc3RhdGljIGZpbHRlciByZXByZXNlbnRpbmcgdGhlIHVzZXIncyBsb2NhdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3RvZ2dsZUdlb0ZpbHRlciAoKSB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBnZW9FcnJvcjogdHJ1ZSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2VuYWJsZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBnZW9Mb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcbiAgICAgICAgcG9zaXRpb24gPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuX2J1aWxkRmlsdGVyKHBvc2l0aW9uKTtcbiAgICAgICAgICB0aGlzLl9zYXZlRGF0YVRvU3RvcmFnZSgnJywgZmlsdGVyLCBwb3NpdGlvbik7XG4gICAgICAgICAgdGhpcy5fZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7fSk7XG4gICAgICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLmRlbGV0ZShgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCk7XG4gICAgICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLmRlbGV0ZShgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWApO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZ2VvRXJyb3I6IHRydWUgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNhdmVzIHRoZSBwcm92aWRlZCBmaWx0ZXIgdW5kZXIgdGhpcyBjb21wb25lbnQncyBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSBUaGUgcXVlcnkgdG8gc2F2ZVxuICAgKiBAcGFyYW0ge0ZpbHRlcn0gZmlsdGVyIFRoZSBmaWx0ZXIgdG8gc2F2ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gcG9zaXRpb24gVGhlIHBvc2l0aW9uIHRvIHNhdmVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zYXZlRGF0YVRvU3RvcmFnZSAocXVlcnksIGZpbHRlciwgcG9zaXRpb24pIHtcbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gLCBxdWVyeSk7XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWAsIGZpbHRlcik7XG4gICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGZpbHRlcik7XG5cbiAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5HRU9MT0NBVElPTiwge1xuICAgICAgICBsYXQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgbG5nOiBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlLFxuICAgICAgICByYWRpdXM6IHBvc2l0aW9uLmNvb3Jkcy5hY2N1cmFjeVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5zZWFyY2hPbkNoYW5nZSkge1xuICAgICAgY29uc3QgZmlsdGVycyA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GSUxURVIpO1xuICAgICAgbGV0IHRvdGFsRmlsdGVyID0gZmlsdGVyc1swXTtcbiAgICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdG90YWxGaWx0ZXIgPSBGaWx0ZXIuYW5kKC4uLmZpbHRlcnMpO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2VhcmNoUXVlcnkgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSkgfHwgJyc7XG4gICAgICBjb25zdCBmYWNldEZpbHRlciA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GQUNFVF9GSUxURVIpWzBdO1xuXG4gICAgICB0aGlzLmNvcmUudmVydGljYWxTZWFyY2godGhpcy5fY29uZmlnLnZlcnRpY2FsS2V5LCB7XG4gICAgICAgIGlucHV0OiBzZWFyY2hRdWVyeSxcbiAgICAgICAgZmlsdGVyOiBKU09OLnN0cmluZ2lmeSh0b3RhbEZpbHRlciksXG4gICAgICAgIGZhY2V0RmlsdGVyOiBKU09OLnN0cmluZ2lmeShmYWNldEZpbHRlcilcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhIHBvc2l0aW9uLCBjb25zdHJ1Y3QgYSBGaWx0ZXIgb2JqZWN0XG4gICAqIEBwYXJhbSB7UG9zdGl0aW9ufSBwb3NpdGlvbiBUaGUgcG9zaXRpb25cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9idWlsZEZpbHRlciAocG9zaXRpb24pIHtcbiAgICBjb25zdCB7IGxhdGl0dWRlLCBsb25naXR1ZGUsIGFjY3VyYWN5IH0gPSBwb3NpdGlvbi5jb29yZHM7XG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5tYXgoYWNjdXJhY3ksIHRoaXMuX2NvbmZpZy5yYWRpdXMgKiBNRVRFUlNfUEVSX01JTEUpO1xuICAgIHJldHVybiBGaWx0ZXIucG9zaXRpb24obGF0aXR1ZGUsIGxvbmdpdHVkZSwgcmFkaXVzKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRGlyZWN0QW5zd2VyQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBBbmFseXRpY3NFdmVudCBmcm9tICcuLi8uLi8uLi9jb3JlL2FuYWx5dGljcy9hbmFseXRpY3NldmVudCc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5cbi8qKlxuICogRXZlbnRUeXBlcyBhcmUgZXhwbGljaXQgc3RyaW5ncyBkZWZpbmVkXG4gKiBmb3Igd2hhdCB0aGUgc2VydmVyIGV4cGVjdHMgZm9yIGFuYWx5dGljcy5cbiAqXG4gKiBAZW51bVxuICovXG5jb25zdCBFdmVudFR5cGVzID0ge1xuICBUSFVNQlNfVVA6ICdUSFVNQlNfVVAnLFxuICBUSFVNQlNfRE9XTjogJ1RIVU1CU19ET1dOJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0QW5zd2VyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZywgc3lzdGVtQ29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFJlY2lldmUgdXBkYXRlcyBmcm9tIHN0b3JhZ2UgYmFzZWQgb24gdGhpcyBpbmRleFxuICAgICAqIEB0eXBlIHtTdG9yYWdlS2V5fVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZvcm0gdXNlZCBmb3Igc3VibWl0dGluZyB0aGUgZmVlZGJhY2tcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2Zvcm1FbCA9IGNvbmZpZy5mb3JtRWwgfHwgJy5qcy1kaXJlY3RBbnN3ZXItZmVlZGJhY2stZm9ybSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYHRodW1icyB1cGAgY3NzIHNlbGVjdG9yIHRvIGJpbmQgdWkgaW50ZXJhY3Rpb24gdG8gZm9yIHJlcG9ydGluZ1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGh1bWJzVXBTZWxlY3RvciA9IGNvbmZpZy50aHVtYnNVcFNlbGVjdG9yIHx8ICcuanMtZGlyZWN0QW5zd2VyLXRodW1iVXAnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGB0aHVtYnMgZG93bmAgY3NzIHNlbGVjdG9yIHRvIGJpbmQgdWkgaW50ZXJhY3Rpb24gdG8gZm9yIHJlcG9ydGluZ1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGh1bWJzRG93blNlbGVjdG9yID0gY29uZmlnLnRodW1ic0Rvd25TZWxlY3RvciB8fCAnLmpzLWRpcmVjdEFuc3dlci10aHVtYkRvd24nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRpc3BsYXkgdGV4dCBmb3IgdGhlIFZpZXcgRGV0YWlscyBjbGljayB0byBhY3Rpb24gbGlua1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdmlld0RldGFpbHNUZXh0ID0gY29uZmlnLnZpZXdEZXRhaWxzVGV4dCB8fCAnVmlldyBEZXRhaWxzJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdEaXJlY3RBbnN3ZXInO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL2RpcmVjdGFuc3dlcic7XG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlTW91bnQsIG9ubHkgZGlzcGxheSB0aGUgZGlyZWN0IGFuc3dlciBjb21wb25lbnQgaWYgaXQgaGFzIGRhdGFcbiAgICovXG4gIGJlZm9yZU1vdW50ICgpIHtcbiAgICBpZiAoIXRoaXMuaGFzU3RhdGUoJ2Fuc3dlcicpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiB0aGUgRE9NIGlzIGNvbnN0cnVjdGVkLFxuICAgKiB3ZSB3YW50IHRvIHdpcmUgdXAgdGhlIGJlaGF2aW9yIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBxdWFsaXR5IGZlZWRiYWNrIHJlcG9ydGluZyAodGh1bWJzdXAvZG93bilcbiAgICovXG4gIG9uTW91bnQgKCkge1xuICAgIC8vIEF2b2lkIGJpbmRpbmdzIGlmIHRoZSBmZWVkYmFjayBoYXMgcHJldmlvdXNseSBiZWVuIHN1Ym1pdHRlZFxuICAgIGlmICh0aGlzLmdldFN0YXRlKCdmZWVkYmFja1N1Ym1pdHRlZCcpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBGb3IgV0NBRyBjb21wbGlhbmNlLCB0aGUgZmVlZGJhY2sgc2hvdWxkIGJlIGEgc3VibWl0dGFibGUgZm9ybVxuICAgIERPTS5vbih0aGlzLl9mb3JtRWwsICdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgbGV0IGZvcm1FbCA9IGUudGFyZ2V0O1xuICAgICAgbGV0IGNoZWNrZWRWYWx1ZSA9IERPTS5xdWVyeShmb3JtRWwsICdpbnB1dDpjaGVja2VkJykuY2hlY2tlZDtcblxuICAgICAgdGhpcy5yZXBvcnRRdWFsaXR5KGNoZWNrZWRWYWx1ZSk7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgICAgJ2ZlZWRiYWNrU3VibWl0dGVkJzogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBJcyB0aGlzIGFjdHVhbGx5IG5lY2Vzc2FyeT8gSSBndWVzcyBpdCdzIG9ubHkgbmVjZXNzYXJ5IGlmIHRoZVxuICAgIC8vIHN1Ym1pdCBidXR0b24gaXMgaGlkZGVuLlxuICAgIERPTS5vbih0aGlzLl90aHVtYnNVcFNlbGVjdG9yLCAnY2xpY2snLCAoKSA9PiB7IERPTS50cmlnZ2VyKHRoaXMuX2Zvcm1FbCwgJ3N1Ym1pdCcpOyB9KTtcbiAgICBET00ub24odGhpcy5fdGh1bWJzRG93blNlbGVjdG9yLCAnY2xpY2snLCAoKSA9PiB7IERPTS50cmlnZ2VyKHRoaXMuX2Zvcm1FbCwgJ3N1Ym1pdCcpOyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiB1cGRhdGVTdGF0ZSBlbmFibGVzIGZvciBwYXJ0aWFsIHVwZGF0ZXMgKHRoZSBkZWx0YSBiZXR3ZWVuIHRoZSBvbGQgYW5kIG5ldylcbiAgICogQHR5cGUge29iamVjdH0gVGhlIG5ldyBzdGF0ZSB0byBhcHBseSB0byB0aGUgb2xkXG4gICAqL1xuICB1cGRhdGVTdGF0ZSAoc3RhdGUgPSB7fSkge1xuICAgIGNvbnN0IG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5nZXRTdGF0ZSgpLCBzdGF0ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBldmVudE9wdGlvbnM6IHRoaXMuZXZlbnRPcHRpb25zKGRhdGEpLFxuICAgICAgdmlld0RldGFpbHNUZXh0OiB0aGlzLl92aWV3RGV0YWlsc1RleHRcbiAgICB9KSk7XG4gIH1cblxuICBldmVudE9wdGlvbnMgKGRhdGEpIHtcbiAgICBpZiAoIWRhdGEgfHwgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHZlcnRpY2FsQ29uZmlnSWQ6IGRhdGEucmVsYXRlZEl0ZW0udmVydGljYWxDb25maWdJZCxcbiAgICAgIHNlYXJjaGVyOiAnVU5JVkVSU0FMJyxcbiAgICAgIGVudGl0eUlkOiBkYXRhLnJlbGF0ZWRJdGVtLmRhdGEuaWQsXG4gICAgICBjdGFMYWJlbDogdGhpcy5fdmlld0RldGFpbHNUZXh0LnRvVXBwZXJDYXNlKCkucmVwbGFjZSgnICcsICdfJylcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXBvcnRRdWFsaXR5IHdpbGwgc2VuZCB0aGUgcXVhbGl0eSBmZWVkYmFjayB0byBhbmFseXRpY3NcbiAgICogQHBhcmFtIHtib29sZWFufSBpc0dvb2QgdHJ1ZSBpZiB0aGUgYW5zd2VyIGlzIHdoYXQgeW91IHdlcmUgbG9va2luZyBmb3JcbiAgICovXG4gIHJlcG9ydFF1YWxpdHkgKGlzR29vZCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IGlzR29vZCA9PT0gdHJ1ZSA/IEV2ZW50VHlwZXMuVEhVTUJTX1VQIDogRXZlbnRUeXBlcy5USFVNQlNfRE9XTjtcbiAgICBjb25zdCBldmVudCA9IG5ldyBBbmFseXRpY3NFdmVudChldmVudFR5cGUpXG4gICAgICAuYWRkT3B0aW9ucyh7XG4gICAgICAgICdkaXJlY3RBbnN3ZXInOiB0cnVlXG4gICAgICB9KTtcblxuICAgIHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIucmVwb3J0KGV2ZW50KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cywgc3lzdGVtQ29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIHZlcnRpY2FsQ29uZmlnSWQgdXNlZCBmb3IgYW5hbHl0aWNzIGFuZCBwYXNzZWQgdG8gY2hpbGRyZW5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxDb25maWdJZCA9IG9wdHMudmVydGljYWxDb25maWdJZDtcblxuICAgIC8qKlxuICAgICAqIGlzVW5pdmVyc2FsIGlzIHVzZWQgZm9yIGFuYWx5dGljcyBhbmQgcGFzc2VkIHRvIGNoaWxkcmVuIGFuZCBpcyBzZXQgdG9cbiAgICAgKiB0cnVlIGlmIHRoaXMgY29tcG9uZW50IGlzIGFkZGVkIGJ5IHRoZSBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50XG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9pc1VuaXZlcnNhbCA9IG9wdHMuaXNVbml2ZXJzYWwgfHwgZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL3Jlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIGhlbHBlciB0byBjb25zdHJ1Y3QgdGhlIGV2ZW50T3B0aW9ucyBvYmplY3QgZm9yIHRoZSB0aXRsZSBsaW5rXG4gICAqIEBwYXJhbSBlbnRpdHlJZCBUaGUgSUQgb2YgdGhlIHJlc3VsdCBpdGVtLCBpZiBwcmVzZW50XG4gICAqIEBwYXJhbSB1cmwgVGhlIHVybCBvZiB0aGUgcmVzdWx0IGl0ZW0sIGlmIHByZXNlbnRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGV2ZW50T3B0aW9ucyAoZW50aXR5SWQsIHVybCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiB0aGlzLl92ZXJ0aWNhbENvbmZpZ0lkLFxuICAgICAgc2VhcmNoZXI6IHRoaXMuX2lzVW5pdmVyc2FsID8gJ1VOSVZFUlNBTCcgOiAnVkVSVElDQUwnXG4gICAgfTtcblxuICAgIGlmIChlbnRpdHlJZCkge1xuICAgICAgb3B0aW9ucy5lbnRpdHlJZCA9IGVudGl0eUlkO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zLnVybCA9IHVybDtcbiAgICB9XG5cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogcGFzc2VzIGV2ZW50T3B0aW9ucyB0byB0aGUgdmlld01vZGVsXG4gICAqIEBvdmVycmlkZVxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0c0l0ZW1Db21wb25lbnR9XG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgIGV2ZW50T3B0aW9uczogdGhpcy5ldmVudE9wdGlvbnMoZGF0YS5pZCwgZGF0YS5saW5rKVxuICAgIH0pKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBSZXN1bHRzSXRlbUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cywgc3lzdGVtQ29uZmlnKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50ICovXG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNJdGVtQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihvcHRzLCBzeXN0ZW1Db25maWcpO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0V2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL2V2ZW50cmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50ICovXG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBSZXN1bHRzSXRlbUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30sIHN5c3RlbU9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMsIHN5c3RlbU9wdHMpO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1Blb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9wZW9wbGVyZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTWFwUHJvdmlkZXIgKi9cblxuLyoqXG4gKiBBIE1hcFByb3ZpZGVyIGlzIGFuIGludGVyZmFjZSB0aGF0IHJlcHJlc2VudHMgdGhhdCBzaG91bGQgYmUgaW1wbGVtZW50ZWRcbiAqIGluIG9yZGVyIHRvIGludGVncmF0ZSB3aXRoIGEgVGhpcmQgUGFydHkgTWFwIHByb3ZpZGVyIGZvclxuICogaW50ZXJhY3RpdmUgbWFwcy4gTWFwUHJvdmlkZXJzIGFyZSB1c2VkIGJ5IHRoZSBNYXBDb21wb25lbnQuXG4gKlxuICogSW1wbGVtZW50YXRpb25zIHNob3VsZCBleHRlbmQgdGhpcyBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcFByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdXNlZCBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgbWFwIHByb3ZpZGVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBjb25maWcuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHpvb20gbGV2ZWwgb2YgdGhlIG1hcCwgZGVmYXVsdHMgdG8gOVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fem9vbSA9IGNvbmZpZy56b29tIHx8IDk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBjb29yZGluYXRlcyB0byBkaXNwbGF5IGlmIHRoZXJlIGFyZSBubyByZXN1bHRzIHJldHVybmVkXG4gICAgICogT25seSB1c2VkIGlmIHNob3dFbXB0eU1hcCBpcyBzZXQgdG8gdHJ1ZVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5fZGVmYXVsdFBvc2l0aW9uID0gY29uZmlnLmRlZmF1bHRQb3NpdGlvbiB8fCB7IGxhdDogMzcuMDkwMiwgbG5nOiAtOTUuNzEyOSB9O1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiBhbiBlbXB0eSBtYXAgc2hvdWxkIGJlIHNob3duIHdoZW4gdGhlcmUgYXJlIG5vIHJlc3VsdHNcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9zaG93RW1wdHlNYXAgPSBjb25maWcuc2hvd0VtcHR5TWFwIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIHVuZGVybHlpbmcgbWFwIGluc3RhbmNlLCBjcmVhdGVkIGJ5IHRoZSBleHRlcm5hbCBsaWIuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9tYXAgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGVtcG9yYXJ5IGJvb2xlYW4gdHJhY2tpbmcgd2hldGhlciBvciBub3QgdGhlIGV4dGVybmFsIEpTIGxpYnJhcnkgaXMgbG9hZGVkIChzZWUgVE9ETyBiZWxvdylcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9pc0xvYWRlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gYSBwaW4gaXMgY2xpY2tlZC4gVGhlIGNsaWNrZWQgaXRlbShzKSBhcmUgcGFzc2VkIHRvIHRoZSBjYWxsYmFja1xuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLl9vblBpbkNsaWNrID0gY29uZmlnLm9uUGluQ2xpY2sgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSBvbmNlIHRoZSBKYXZhc2NyaXB0IGlzIGxvYWRlZFxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLl9vbkxvYWRlZCA9IGNvbmZpZy5vbkxvYWRlZCB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXN0b20gY29uZmlndXJhdGlvbiBvdmVycmlkZSB0byB1c2UgZm9yIHRoZSBtYXAgbWFya2Vyc1xuICAgICAqIEB0eXBlIHtPYmplY3R8RnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5fcGluQ29uZmlnID0gdHlwZW9mIGNvbmZpZy5waW4gPT09ICdmdW5jdGlvbicgPyBjb25maWcucGluIDogT2JqZWN0LmFzc2lnbihNYXBQcm92aWRlci5ERUZBVUxUX1BJTl9DT05GSUcsIGNvbmZpZy5waW4pO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0byBjb2xsYXBzZSBwaW5zIGF0IHRoZSBzYW1lIGxhdC9sbmdcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9jb2xsYXBzZVBpbnMgPSBjb25maWcuY29sbGFwc2VQaW5zIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gdG8gdXNlIGZvciB0aGUgbWFwIG1hcmtlcnNcbiAgICogQHR5cGUge09iamVjdH1cbiAgICogVE9ETyhiaWxseSkgQ3JlYXRlIGEgY29uZmlndXJhdGlvbiBtb2RlbFxuICAgKi9cbiAgc3RhdGljIGdldCBERUZBVUxUX1BJTl9DT05GSUcgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpY29uOiB7XG4gICAgICAgIGFuY2hvcjogbnVsbCwgLy8gZS5nLiB7IHg6IDEsIHk6IDEgfVxuICAgICAgICBzdmc6IG51bGwsXG4gICAgICAgIHVybDogbnVsbCxcbiAgICAgICAgc2NhbGVkU2l6ZTogbnVsbCAvLyBlLmcuIHsgdzogMjAsIGg6IDIwIH1cbiAgICAgIH0sXG4gICAgICBsYWJlbFR5cGU6ICdudW1lcmljJ1xuICAgIH07XG4gIH1cblxuICBvbkxvYWRlZCAoY2IpIHtcbiAgICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fb25Mb2FkZWQgPSBjYjtcbiAgICBpZiAodGhpcy5pc0xvYWRlZCgpKSB7XG4gICAgICB0aGlzLl9vbkxvYWRlZCgpO1xuICAgIH1cbiAgfVxuXG4gIGlzTG9hZGVkICgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNMb2FkZWQ7XG4gIH1cblxuICBsb2FkSlMgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCBNZXRob2Q6IGxvYWRKUycpO1xuICB9XG5cbiAgaW5pdCAobWFwRGF0YSkge1xuICAgIC8vIFRPRE8oYmlsbHkpIFRoaXMgc2hvdWxkIGJlIGJhc2VkIG9mZiBhIHByb21pc2UgdGhhdCBnZXRzIGNyZWF0ZWQgZnJvbSBsb2FkSlNcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaW1wbGVtZW50ZWQgTWV0aG9kOiBpbml0Jyk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYSBsaXN0IG9mIG1hcmtlcnMsIGNvbWJpbmUgbWFya2VycyB3aXRoIHRoZSBzYW1lIGxhdC9sbmcgaW50byBhIHNpbmdsZSBtYXJrZXJcbiAgICogQHBhcmFtIHtvYmplY3RbXX0gbWFya2VycyBUaGUgbWFya2VycyB0byBjb2xsYXBzZVxuICAgKi9cbiAgX2NvbGxhcHNlTWFya2VycyAobWFya2Vycykge1xuICAgIGNvbnN0IGxvY2F0aW9uVG9JdGVtID0ge307XG4gICAgbWFya2Vycy5mb3JFYWNoKG0gPT4ge1xuICAgICAgbG9jYXRpb25Ub0l0ZW1bYCR7bS5sYXRpdHVkZX0ke20ubG9uZ2l0dWRlfWBdXG4gICAgICAgID8gbG9jYXRpb25Ub0l0ZW1bYCR7bS5sYXRpdHVkZX0ke20ubG9uZ2l0dWRlfWBdLnB1c2gobSlcbiAgICAgICAgOiBsb2NhdGlvblRvSXRlbVtgJHttLmxhdGl0dWRlfSR7bS5sb25naXR1ZGV9YF0gPSBbbV07XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb2xsYXBzZWRNYXJrZXJzID0gW107XG4gICAgZm9yIChsZXQgWywgbWFya2Vyc10gb2YgT2JqZWN0LmVudHJpZXMobG9jYXRpb25Ub0l0ZW0pKSB7XG4gICAgICBpZiAobWFya2Vycy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlZE1hcmtlciA9IHtcbiAgICAgICAgICBpdGVtOiBtYXJrZXJzLm1hcChtID0+IG0uaXRlbSksXG4gICAgICAgICAgbGFiZWw6IG1hcmtlcnMubGVuZ3RoLFxuICAgICAgICAgIGxhdGl0dWRlOiBtYXJrZXJzWzBdLmxhdGl0dWRlLFxuICAgICAgICAgIGxvbmdpdHVkZTogbWFya2Vyc1swXS5sb25naXR1ZGVcbiAgICAgICAgfTtcbiAgICAgICAgY29sbGFwc2VkTWFya2Vycy5wdXNoKGNvbGxhcHNlZE1hcmtlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsYXBzZWRNYXJrZXJzLnB1c2gobWFya2Vyc1swXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbGxhcHNlZE1hcmtlcnM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEdvb2dsZU1hcFByb3ZpZGVyICovXG5cbmltcG9ydCBNYXBQcm92aWRlciBmcm9tICcuL21hcHByb3ZpZGVyJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vLi4vZG9tL2RvbSc7XG5cbi8qIGdsb2JhbCBnb29nbGUgKi9cblxuLyoqXG4gKiBHb29nbGVNYXBQcm92aWRlciBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiBhIE1hcFByb3ZpZGVyXG4gKiB0aGF0IGhhbmRsZXMgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIHRoaXJkIHBhcnR5IEFQSSB0byBleHBvc2UgbWFwcy5cbiAqIEBleHRlbmRzIE1hcFByb3ZpZGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvb2dsZU1hcFByb3ZpZGVyIGV4dGVuZHMgTWFwUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5fY2xpZW50SWQgPSBvcHRzLmNsaWVudElkO1xuICAgIHRoaXMuX3NpZ25hdHVyZSA9IG9wdHMuc2lnbmF0dXJlO1xuXG4gICAgaWYgKCF0aGlzLmhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMoKSAmJiAhdGhpcy5fYXBpS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dvb2dsZU1hcHNQcm92aWRlcjogTWlzc2luZyBgYXBpS2V5YCBvciB7YGNsaWVudElkYCwgYHNpZ25hdHVyZWB9Jyk7XG4gICAgfVxuICB9XG5cbiAgbG9hZEpTIChvbkxvYWQpIHtcbiAgICBpZiAoRE9NLnF1ZXJ5KCcjeWV4dC1tYXAtanMnKSkge1xuICAgICAgdGhpcy5faXNMb2FkZWQgPSB0cnVlO1xuICAgICAgaWYgKHR5cGVvZiBvbkxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb25Mb2FkKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHNjcmlwdCA9IERPTS5jcmVhdGVFbCgnc2NyaXB0Jywge1xuICAgICAgaWQ6ICd5ZXh0LW1hcC1qcycsXG4gICAgICBvbmxvYWQ6ICgpID0+IHtcbiAgICAgICAgdGhpcy5faXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9vbkxvYWRlZCgpO1xuICAgICAgfSxcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgc3JjOiBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzPyR7dGhpcy5nZW5lcmF0ZUNyZWRlbnRpYWxzKCl9YFxuICAgIH0pO1xuXG4gICAgRE9NLmFwcGVuZCgnYm9keScsIHNjcmlwdCk7XG4gIH1cblxuICBnZW5lcmF0ZUNyZWRlbnRpYWxzICgpIHtcbiAgICBpZiAodGhpcy5oYXNWYWxpZENsaWVudENyZWRlbnRpYWxzKCkpIHtcbiAgICAgIHJldHVybiBgY2xpZW50PSR7dGhpcy5fY2xpZW50SWR9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGBrZXk9JHt0aGlzLl9hcGlLZXl9YDtcbiAgICB9XG4gIH1cblxuICBoYXNWYWxpZENsaWVudENyZWRlbnRpYWxzICgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xpZW50SWQ7XG4gIH1cblxuICBpbml0IChlbCwgbWFwRGF0YSkge1xuICAgIGlmICgoIW1hcERhdGEgfHwgbWFwRGF0YS5tYXBNYXJrZXJzLmxlbmd0aCA8PSAwKSAmJiAhdGhpcy5fc2hvd0VtcHR5TWFwKSB7XG4gICAgICB0aGlzLl9tYXAgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vIE5PVEUoYmlsbHkpIFRoaXMgdGltZW91dCBpcyBhIGhhY2sgZm9yIGRlYWxpbmcgd2l0aCBhc3luYyBuYXR1cmUuXG4gICAgLy8gT25seSBoZXJlIGZvciBkZW1vIHB1cnBvc2VzLCBzbyB3ZSdsbCBmaXggbGF0ZXIuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgY29udGFpbmVyID0gRE9NLnF1ZXJ5KGVsKTtcbiAgICAgIHRoaXMubWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChjb250YWluZXIsIHtcbiAgICAgICAgem9vbTogdGhpcy5fem9vbVxuICAgICAgfSk7XG5cbiAgICAgIC8vIEFwcGx5IG91ciBzZWFyY2ggZGF0YSB0byBvdXIgR29vZ2xlTWFwXG4gICAgICBsZXQgYm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xuXG4gICAgICBpZiAobWFwRGF0YSAmJiBtYXBEYXRhLm1hcE1hcmtlcnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlZE1hcmtlcnMgPSB0aGlzLl9jb2xsYXBzZVBpbnNcbiAgICAgICAgICA/IHRoaXMuX2NvbGxhcHNlTWFya2VycyhtYXBEYXRhLm1hcE1hcmtlcnMpXG4gICAgICAgICAgOiBtYXBEYXRhLm1hcE1hcmtlcnM7XG4gICAgICAgIGxldCBnb29nbGVNYXBNYXJrZXJDb25maWdzID0gR29vZ2xlTWFwTWFya2VyQ29uZmlnLmZyb20oXG4gICAgICAgICAgY29sbGFwc2VkTWFya2VycyxcbiAgICAgICAgICB0aGlzLl9waW5Db25maWcsXG4gICAgICAgICAgdGhpcy5tYXApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ29vZ2xlTWFwTWFya2VyQ29uZmlncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKGdvb2dsZU1hcE1hcmtlckNvbmZpZ3NbaV0pO1xuICAgICAgICAgIGlmICh0aGlzLl9vblBpbkNsaWNrKSB7XG4gICAgICAgICAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5fb25QaW5DbGljayhjb2xsYXBzZWRNYXJrZXJzW2ldLml0ZW0pKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm91bmRzLmV4dGVuZChtYXJrZXIucG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKGJvdW5kcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1hcC5zZXRDZW50ZXIobmV3IGdvb2dsZS5tYXBzLkxhdExuZyh0aGlzLl9kZWZhdWx0UG9zaXRpb24ubGF0LCB0aGlzLl9kZWZhdWx0UG9zaXRpb24ubG5nKSk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgfVxufVxuXG4vLyBUT0RPKGJpbGx5KSBNb3ZlIHRvIG93biBjbGFzc1xuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcE1hcmtlckNvbmZpZyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGdvb2dsZSBtYXAsIHRoYXQgdGhlIG1hcmtlciBpcyBhcHBlbmRlZCB0b1xuICAgICAqIEB0eXBlIHtHb29nbGVNYXB9XG4gICAgICovXG4gICAgdGhpcy5tYXAgPSBvcHRzLm1hcCB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1hcmtlciAobGF0L2xuZylcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMucG9zaXRpb24gPSBvcHRzLnBvc2l0aW9uIHx8IHtcbiAgICAgIGxhdDogdW5kZWZpbmVkLFxuICAgICAgbG5nOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHByb3BlcnRpZXMvc2V0dGluZ3Mgb2YgdGhlIGljb24gdXNlZCBmb3IgdGhlIG1hcmtlclxuICAgICAqIGUuZy4ge1xuICAgICAqICAgICAgICBhbmNob3I6IHsgeDogMCwgeTogMCB9XG4gICAgICogICAgICAgIHVybDogJ3BhdGgvdG8vdXJsLmpwZydcbiAgICAgKiAgICAgICAgc2NhbGVkU2l6ZTogeyB3OiAwLCBoOiAwIH1cbiAgICAgKiAgICAgICB9XG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuaWNvbiA9IG9wdHMuaWNvbiB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgb2YgdGhlIG1hcmtlciB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWwgPSBvcHRzLmxhYmVsIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGFuIGFycmF5IG9mIG1hcmtlciBjb25maWdzXG4gICAqIEBwYXJhbSB7R29vZ2xlTWFwTWFya2VyQ29uZmlnW119IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3NcbiAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZSAoZ29vZ2xlTWFwTWFya2VyQ29uZmlncykge1xuICAgIGxldCBzZXJpYWxpemVkTWFya2VycyA9IFtdO1xuICAgIGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBzZXJpYWxpemVkTWFya2Vycy5wdXNoKGBtYXJrZXJzPWxhYmVsOiR7bWFya2VyLmxhYmVsfXwke21hcmtlci5wb3NpdGlvbi5sYXR9LCR7bWFya2VyLnBvc2l0aW9uLmxuZ31gKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VyaWFsaXplZE1hcmtlcnMuam9pbignJicpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBzdG9yYWdlIGRhdGEgbW9kZWwgb2YgbWFya2VycyBpbnRvIEdvb2dsZUFQSU1hcmtlclxuICAgKiBAcGFyYW0ge29iamVjdFtdfSBtYXJrZXJzIFRoZSBkYXRhIG9mIHRoZSBtYXJrZXJcbiAgICogQHBhcmFtIHsoT2JqZWN0fGZ1bmN0aW9uKX0gcGluQ29uZmlnIFRoZSBjb25maWd1cmF0aW9uIHRvIGFwcGx5IHRvIHRoZSBtYXJrZXJcbiAgICogQHBhcmFtIHtHb29nbGVNYXB9IG1hcCByZWZlcmVuY2UgdG8gdGhlIGdvb2dsZSBtYXAgdG8gYXBwbHkgdGhlIG1hcmtlciB0b1xuICAgKiBAcmV0dXJucyB7R29vZ2xlTWFwTWFya2VyQ29uZmlnW119XG4gICAqL1xuICBzdGF0aWMgZnJvbSAobWFya2VycywgcGluQ29uZmlnLCBtYXApIHtcbiAgICBsZXQgZ29vZ2xlTWFwTWFya2VyQ29uZmlncyA9IFtdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShtYXJrZXJzKSkge1xuICAgICAgbWFya2VycyA9IFttYXJrZXJzXTtcbiAgICB9XG5cbiAgICBtYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgLy8gU3VwcG9ydCBjb25maWd1cmF0aW9uIGFzIGEgZnVuY3Rpb25cbiAgICAgIGxldCBwaW5Db25maWdPYmogPSBwaW5Db25maWc7XG4gICAgICBpZiAodHlwZW9mIHBpbkNvbmZpZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwaW5Db25maWdPYmogPSBwaW5Db25maWcoXG4gICAgICAgICAgbWFya2VyLml0ZW0sXG4gICAgICAgICAgTWFwUHJvdmlkZXIuREVGQVVMVF9QSU5fQ09ORklHLFxuICAgICAgICAgIG1hcmtlcik7XG4gICAgICB9XG5cbiAgICAgIC8vIFRyYW5zZm9ybSBvdXIgQ29uZmlndXJhdGlvbiBPYmplY3QgaW50byB0aGUgZXhwZWN0ZWRcbiAgICAgIC8vIEdvb2dsZSBBUEkgZm9ybWF0LlxuICAgICAgbGV0IGljb24gPSB7fTtcbiAgICAgIGlmIChwaW5Db25maWdPYmouYW5jaG9yKSB7XG4gICAgICAgIGljb24uYW5jaG9yID0gZ29vZ2xlLm1hcHMuUG9pbnQocGluQ29uZmlnT2JqLmFuY2hvci54LCBwaW5Db25maWdPYmouYW5jaG9yLnkpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluQ29uZmlnT2JqLnNjYWxlZFNpemUpIHtcbiAgICAgICAgaWNvbi5zY2FsZWRTaXplID0gbmV3IGdvb2dsZS5tYXBzLlNpemUocGluQ29uZmlnT2JqLnNjYWxlZFNpemUudywgcGluQ29uZmlnT2JqLnNjYWxlZFNpemUuaCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW5Db25maWdPYmoudXJsKSB7XG4gICAgICAgIGljb24udXJsID0gcGluQ29uZmlnT2JqLnVybDtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpbkNvbmZpZ09iai5zdmcpIHtcbiAgICAgICAgaWNvbi51cmwgPSBgZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsICR7ZW5jb2RlVVJJQ29tcG9uZW50KHBpbkNvbmZpZ09iai5zdmcpfWA7XG4gICAgICB9XG5cbiAgICAgIGxldCBsYWJlbDtcbiAgICAgIGlmIChwaW5Db25maWdPYmoubGFiZWwpIHtcbiAgICAgICAgbGFiZWwgPSBwaW5Db25maWdPYmoubGFiZWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYWJlbCA9IG1hcmtlci5sYWJlbC50b1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICAvLyBOT1RFKGJpbGx5KSBHb29nbGUgbWFwcyBkb2Vzbid0IGhhbmRsZSBlbXB0eSBpY29uIG9iamVjdHMgbmljZWx5XG4gICAgICAvLyBNYWtlIGdvb2dsZSBtYXBzIGhhcHB5IGlmIG5vIHNldHRpbmdzIGZvciBpY29uIGFyZSBwcm92aWRlZDtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhpY29uKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWNvbiA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgZ29vZ2xlTWFwTWFya2VyQ29uZmlncy5wdXNoKFxuICAgICAgICBuZXcgR29vZ2xlTWFwTWFya2VyQ29uZmlnKHtcbiAgICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgbGF0OiBtYXJrZXIubGF0aXR1ZGUsXG4gICAgICAgICAgICBsbmc6IG1hcmtlci5sb25naXR1ZGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGljb246IGljb24sXG4gICAgICAgICAgbGFiZWw6IGxhYmVsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGdvb2dsZU1hcE1hcmtlckNvbmZpZ3M7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE1hcEJveE1hcFByb3ZpZGVyICovXG5cbmltcG9ydCBNYXBQcm92aWRlciBmcm9tICcuL21hcHByb3ZpZGVyJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vLi4vZG9tL2RvbSc7XG5cbi8qIGdsb2JhbCBtYXBib3hnbCAqL1xuXG4vKipcbiAqIE1hcEJveE1hcFByb3ZpZGVyIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIGEgTWFwUHJvdmlkZXJcbiAqIHRoYXQgaGFuZGxlcyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgdGhpcmQgcGFydHkgQVBJIHRvIGV4cG9zZSBtYXBzLlxuICogQGV4dGVuZHMgTWFwUHJvdmlkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwQm94TWFwUHJvdmlkZXIgZXh0ZW5kcyBNYXBQcm92aWRlciB7XG4gIC8qKlxuICAgKiBMb2FkIHRoZSBleHRlcm5hbCBKUyBMaWJyYXJ5XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uTG9hZCBBbiBvcHRpb25hbCBjYWxsYmFjayB0byBpbnZva2Ugb25jZSB0aGUgSlMgaXMgbG9hZGVkLlxuICAgKi9cbiAgbG9hZEpTIChvbkxvYWQpIHtcbiAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWpzJyxcbiAgICAgIG9ubG9hZDogKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIG1hcGJveGdsLmFjY2Vzc1Rva2VuID0gdGhpcy5fYXBpS2V5O1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb25Mb2FkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgb25Mb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX29uTG9hZGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5fb25Mb2FkZWQoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgc3JjOiAnaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9tYXBib3gtZ2wtanMvdjAuNDQuMS9tYXBib3gtZ2wuanMnXG4gICAgfSk7XG5cbiAgICBsZXQgY3NzID0gRE9NLmNyZWF0ZUVsKCdsaW5rJywge1xuICAgICAgaWQ6ICd5ZXh0LW1hcC1jc3MnLFxuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOiAnaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9tYXBib3gtZ2wtanMvdjAuNDQuMS9tYXBib3gtZ2wuY3NzJ1xuICAgIH0pO1xuXG4gICAgRE9NLmFwcGVuZCgnYm9keScsIGNzcyk7XG4gICAgRE9NLmFwcGVuZCgnYm9keScsIHNjcmlwdCk7XG4gIH1cblxuICBpbml0IChlbCwgbWFwRGF0YSkge1xuICAgIGlmICgoIW1hcERhdGEgfHwgbWFwRGF0YS5tYXBNYXJrZXJzLmxlbmd0aCA8PSAwKSAmJiAhdGhpcy5fc2hvd0VtcHR5TWFwKSB7XG4gICAgICB0aGlzLl9tYXAgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRhaW5lciA9IERPTS5xdWVyeShlbCk7XG4gICAgdGhpcy5fbWFwID0gbmV3IG1hcGJveGdsLk1hcCh7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgIHpvb206IHRoaXMuX3pvb20sXG4gICAgICBzdHlsZTogJ21hcGJveDovL3N0eWxlcy9tYXBib3gvc3RyZWV0cy12OScsXG4gICAgICBjZW50ZXI6IHRoaXMuZ2V0Q2VudGVyTWFya2VyKG1hcERhdGEpXG4gICAgfSk7XG5cbiAgICBpZiAobWFwRGF0YSkge1xuICAgICAgY29uc3QgY29sbGFwc2VkTWFya2VycyA9IHRoaXMuX2NvbGxhcHNlUGluc1xuICAgICAgICA/IHRoaXMuX2NvbGxhcHNlTWFya2VycyhtYXBEYXRhLm1hcE1hcmtlcnMpXG4gICAgICAgIDogbWFwRGF0YS5tYXBNYXJrZXJzO1xuICAgICAgY29uc3QgbWFwYm94TWFwTWFya2VyQ29uZmlncyA9IE1hcEJveE1hcmtlckNvbmZpZy5mcm9tKFxuICAgICAgICBjb2xsYXBzZWRNYXJrZXJzLFxuICAgICAgICB0aGlzLl9waW5Db25maWcsXG4gICAgICAgIHRoaXMuX21hcCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFwYm94TWFwTWFya2VyQ29uZmlncy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgd3JhcHBlciA9IG1hcGJveE1hcE1hcmtlckNvbmZpZ3NbaV0ud3JhcHBlcjtcbiAgICAgICAgbGV0IGNvb3JkcyA9IG5ldyBtYXBib3hnbC5MbmdMYXQoXG4gICAgICAgICAgbWFwYm94TWFwTWFya2VyQ29uZmlnc1tpXS5wb3NpdGlvbi5sb25naXR1ZGUsXG4gICAgICAgICAgbWFwYm94TWFwTWFya2VyQ29uZmlnc1tpXS5wb3NpdGlvbi5sYXRpdHVkZSk7XG4gICAgICAgIGxldCBtYXJrZXIgPSBuZXcgbWFwYm94Z2wuTWFya2VyKHdyYXBwZXIpLnNldExuZ0xhdChjb29yZHMpO1xuICAgICAgICBtYXJrZXIuYWRkVG8odGhpcy5fbWFwKTtcbiAgICAgICAgaWYgKHRoaXMuX29uUGluQ2xpY2spIHtcbiAgICAgICAgICBtYXJrZXIuZ2V0RWxlbWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5fb25QaW5DbGljayhjb2xsYXBzZWRNYXJrZXJzW2ldLml0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENlbnRlck1hcmtlciAobWFwRGF0YSkge1xuICAgIHJldHVybiBtYXBEYXRhICYmIG1hcERhdGEubWFwQ2VudGVyICYmIG1hcERhdGEubWFwQ2VudGVyLmxvbmdpdHVkZSAmJiBtYXBEYXRhLm1hcENlbnRlci5sYXRpdHVkZVxuICAgICAgPyBbbWFwRGF0YS5tYXBDZW50ZXIubG9uZ2l0dWRlLCBtYXBEYXRhLm1hcENlbnRlci5sYXRpdHVkZV1cbiAgICAgIDogeyBsbmc6IHRoaXMuX2RlZmF1bHRQb3NpdGlvbi5sbmcsIGxhdDogdGhpcy5fZGVmYXVsdFBvc2l0aW9uLmxhdCB9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXBCb3hNYXJrZXJDb25maWcge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBtYXBib3ggbWFwLCB0aGF0IHRoZSBtYXJrZXIgaXMgYXBwZW5kZWQgdG9cbiAgICAgKiBAdHlwZSB7TWFwQm94fVxuICAgICAqL1xuICAgIHRoaXMubWFwID0gb3B0cy5tYXAgfHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBtYXJrZXIgKGxhdC9sbmcpXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLnBvc2l0aW9uID0gb3B0cy5wb3NpdGlvbiB8fCB7XG4gICAgICBsYXRpdHVkZTogdW5kZWZpbmVkLFxuICAgICAgbG9uZ2l0dWRlOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGh0bWwgZWxlbWVudCB0byBiZSB1c2VkIGFzIHRoZSBtYXAgbWFya2VyXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLndyYXBwZXIgPSBvcHRzLndyYXBwZXIgfHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIG9mIHRoZSBtYXJrZXIgdG8gdXNlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmxhYmVsID0gb3B0cy5sYWJlbCB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdXJsIG9mIHRoZSBwaW4gZm9yIHRoZSBzdGF0aWMgbWFwXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnN0YXRpY01hcFBpbiA9IG9wdHMuc3RhdGljTWFwUGluIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGFuIGFycmF5IG9mIG1hcmtlciBjb25maWdzXG4gICAqIEBwYXJhbSB7TWFwQm94TWFya2VyQ29uZmlnW119IG1hcGJveE1hcE1hcmtlckNvbmZpZ3NcbiAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZSAobWFwYm94TWFwTWFya2VyQ29uZmlncykge1xuICAgIGxldCBzZXJpYWxpemVkTWFya2VycyA9IFtdO1xuICAgIG1hcGJveE1hcE1hcmtlckNvbmZpZ3MuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBpZiAobWFya2VyLnN0YXRpY01hcFBpbikge1xuICAgICAgICBzZXJpYWxpemVkTWFya2Vycy5wdXNoKGB1cmwtJHttYXJrZXIuc3RhdGljTWFwUGlufSgke21hcmtlci5wb3NpdGlvbi5sb25naXR1ZGV9LCR7bWFya2VyLnBvc2l0aW9uLmxhdGl0dWRlfSlgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlcmlhbGl6ZWRNYXJrZXJzLnB1c2goYHBpbi1zLSR7bWFya2VyLmxhYmVsfSgke21hcmtlci5wb3NpdGlvbi5sb25naXR1ZGV9LCR7bWFya2VyLnBvc2l0aW9uLmxhdGl0dWRlfSlgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2VyaWFsaXplZE1hcmtlcnMuam9pbignLCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBzdG9yYWdlIGRhdGEgbW9kZWwgb2YgbWFya2VycyBpbnRvIEdvb2dsZUFQSU1hcmtlclxuICAgKiBAcGFyYW0ge01hcEJveH0gQSByZWZlcmVuY2UgdG8gdGhlIGdvb2dsZSBtYXAgdG8gYXBwbHkgdGhlIG1hcmtlciB0b1xuICAgKiBAcGFyYW0ge29iamVjdFtdfSBtYXJrZXJzIFRoZSBkYXRhIG9mIHRoZSBtYXJrZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IHBpbkNvbmZpZyBUaGUgY29uZmlndXJhdGlvbiB0byBhcHBseSB0byB0aGUgbWFya2VyXG4gICAqIEByZXR1cm5zIHtNYXBCb3hNYXJrZXJDb25maWdbXX1cbiAgICovXG4gIHN0YXRpYyBmcm9tIChtYXJrZXJzLCBwaW5Db25maWcsIG1hcCkge1xuICAgIGxldCBtYXBib3hNYXBNYXJrZXJDb25maWdzID0gW107XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1hcmtlcnMpKSB7XG4gICAgICBtYXJrZXJzID0gW21hcmtlcnNdO1xuICAgIH1cblxuICAgIG1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICAvLyBTdXBwb3J0IGNvbmZpZ3VyYXRpb24gYXMgYSBmdW5jdGlvblxuICAgICAgbGV0IHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZztcbiAgICAgIGlmICh0eXBlb2YgcGluQ29uZmlnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZyhcbiAgICAgICAgICBtYXJrZXIuaXRlbSxcbiAgICAgICAgICBNYXBQcm92aWRlci5ERUZBVUxUX1BJTl9DT05GSUcsXG4gICAgICAgICAgbWFya2VyKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgd3JhcHBlciA9IHBpbkNvbmZpZ09iai53cmFwcGVyID8gcGluQ29uZmlnT2JqLndyYXBwZXIgOiBudWxsO1xuICAgICAgY29uc3Qgc3RhdGljTWFwUGluID0gcGluQ29uZmlnT2JqLnN0YXRpY01hcFBpbiA/IHBpbkNvbmZpZ09iai5zdGF0aWNNYXBQaW4gOiBudWxsO1xuXG4gICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzLnB1c2goXG4gICAgICAgIG5ldyBNYXBCb3hNYXJrZXJDb25maWcoe1xuICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICBsYXRpdHVkZTogbWFya2VyLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBtYXJrZXIubG9uZ2l0dWRlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB3cmFwcGVyOiB3cmFwcGVyLFxuICAgICAgICAgIGxhYmVsOiBtYXJrZXIubGFiZWwsXG4gICAgICAgICAgc3RhdGljTWFwUGluOiBzdGF0aWNNYXBQaW5cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWFwYm94TWFwTWFya2VyQ29uZmlncztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTWFwQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuaW1wb3J0IEdvb2dsZU1hcFByb3ZpZGVyIGZyb20gJy4vcHJvdmlkZXJzL2dvb2dsZW1hcHByb3ZpZGVyJztcbmltcG9ydCBNYXBCb3hNYXBQcm92aWRlciBmcm9tICcuL3Byb3ZpZGVycy9tYXBib3htYXBwcm92aWRlcic7XG5cbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG5jb25zdCBQcm92aWRlclR5cGVzID0ge1xuICAnZ29vZ2xlJzogR29vZ2xlTWFwUHJvdmlkZXIsXG4gICdtYXBib3gnOiBNYXBCb3hNYXBQcm92aWRlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSwgc3lzdGVtT3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cywgc3lzdGVtT3B0cyk7XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIHRoaXMgY29tcG9uZW50IHRvIGxpc3RlbiB0byB0aGUgc3RvcmFnZSBiYXNlZCBvbiB0aGlzIGtleVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWxpYXNlZCB1c2VkIHRvIGRldGVybWluZSB0aGUgdHlwZSBvZiBtYXAgcHJvdmlkZXIgdG8gdXNlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9tYXBQcm92aWRlciA9IG9wdHMubWFwUHJvdmlkZXI7XG4gICAgaWYgKCF0aGlzLl9tYXBQcm92aWRlciB8fCAhKHRoaXMuX21hcFByb3ZpZGVyLnRvTG93ZXJDYXNlKCkgaW4gUHJvdmlkZXJUeXBlcykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWFwQ29tcG9uZW50OiBJbnZhbGlkIE1hcCBQcm92aWRlcjsgbXVzdCBiZSBgZ29vZ2xlYCBvciBgbWFwQm94YCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIGFuIGluc3RhbmNlIG9mIHRoZSB7TWFwUHJvdmlkZXJ9IHRoYXQncyBjb25zdHJ1Y3RlZFxuICAgICAqIEB0eXBlIHtNYXBQcm92aWRlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9tYXAgPSBudWxsO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ01hcCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvbWFwJztcbiAgfVxuXG4gIC8vIFRPRE8oYmlsbHkpIE1ha2UgUHJvdmlkZXJUeXBlcyBhIGZhY3RvcnkgY2xhc3NcbiAgZ2V0UHJvdmlkZXJJbnN0YW5jZSAodHlwZSkge1xuICAgIHJldHVybiBuZXcgUHJvdmlkZXJUeXBlc1t0eXBlLnRvTG93ZXJDYXNlKCldKHRoaXMuX2NvbmZpZyk7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgdGhpcy5fbWFwID0gdGhpcy5nZXRQcm92aWRlckluc3RhbmNlKHRoaXMuX21hcFByb3ZpZGVyKTtcbiAgICB0aGlzLl9tYXAubG9hZEpTKCk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICB0aGlzLl9tYXAub25Mb2FkZWQoKCkgPT4ge1xuICAgICAgdGhpcy5fbWFwLmluaXQodGhpcy5fY29udGFpbmVyLCB0aGlzLmdldFN0YXRlKCdtYXAnKSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSwgdmFsKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKGRhdGEsIHZhbCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlc3VsdHNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL2xvY2F0aW9ucmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Blb3BsZXJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBNYXBDb21wb25lbnQgZnJvbSAnLi4vbWFwL21hcGNvbXBvbmVudCc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3NlYXJjaHN0YXRlcyc7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuXG5jb25zdCBSZXN1bHRUeXBlID0ge1xuICBFVkVOVDogJ2V2ZW50JyxcbiAgTE9DQVRJT046ICdsb2NhdGlvbicsXG4gIFBFT1BMRTogJ3Blb3BsZSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdHNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogdmVydGljYWxDb25maWdJZCB1c2VkIGZvciBhbmFseXRpY3MgYW5kIHBhc3NlZCB0byBjaGlsZHJlblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbENvbmZpZ0lkID0gY29uZmlnLnZlcnRpY2FsQ29uZmlnSWQ7XG5cbiAgICAvKipcbiAgICAgKiBpc1VuaXZlcnNhbCBpcyBzZXQgdG8gdHJ1ZSBpZiB0aGlzIGNvbXBvbmVudCBpcyBhZGRlZCBieSB0aGUgVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faXNVbml2ZXJzYWwgPSBjb25maWcuaXNVbml2ZXJzYWwgfHwgZmFsc2U7XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUztcbiAgICB0aGlzLl9pdGVtQ29uZmlnID0ge1xuICAgICAgZ2xvYmFsOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH0sXG4gICAgICBbRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlXToge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9LFxuICAgICAgW0xvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZV06IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIFtQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlXToge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChjb25maWcucmVuZGVySXRlbSA9PT0gdW5kZWZpbmVkICYmIGNvbmZpZy5fcGFyZW50T3B0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25maWcucmVuZGVySXRlbSA9IGNvbmZpZy5fcGFyZW50T3B0cy5yZW5kZXJJdGVtO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuaXRlbVRlbXBsYXRlID09PSB1bmRlZmluZWQgJiYgY29uZmlnLl9wYXJlbnRPcHRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbmZpZy5pdGVtVGVtcGxhdGUgPSBjb25maWcuX3BhcmVudE9wdHMuaXRlbVRlbXBsYXRlO1xuICAgIH1cblxuICAgIGlmIChjb25maWcubGltaXQpIHtcbiAgICAgIGNvbnN0IGxpbWl0ID0gY29uZmlnLmxpbWl0O1xuICAgICAgaWYgKHR5cGVvZiBsaW1pdCAhPT0gJ251bWJlcicgfHwgbGltaXQgPCAxIHx8IGxpbWl0ID4gNTApIHtcbiAgICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcignU2VhcmNoIExpbWl0IG11c3QgYmUgYmV0d2VlbiAxIGFuZCA1MCcsICdWZXJ0aWNhbFJlc3VsdHMnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29yZS5zZXRTZWFyY2hMaW1pdChsaW1pdCk7XG4gICAgfVxuXG4gICAgdGhpcy5jb25maWd1cmVJdGVtKHtcbiAgICAgIHJlbmRlcjogY29uZmlnLnJlbmRlckl0ZW0sXG4gICAgICB0ZW1wbGF0ZTogY29uZmlnLml0ZW1UZW1wbGF0ZVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHVybCB0byB0aGUgdW5pdmVyc2FsIHBhZ2UgZm9yIHRoZSBubyByZXN1bHRzIHBhZ2UgdG8gbGluayBiYWNrIHRvIHdpdGggY3VycmVudCBxdWVyeVxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLl91bml2ZXJzYWxVcmwgPSBjb25maWcudW5pdmVyc2FsVXJsO1xuICB9XG5cbiAgbW91bnQgKCkge1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmdldFN0YXRlKCkpLmxlbmd0aCA+IDApIHtcbiAgICAgIHN1cGVyLm1vdW50KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGR1cGxpY2F0ZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhLCB2YWwpIHtcbiAgICBjb25zdCByZXN1bHRzID0gZGF0YS5yZXN1bHRzIHx8IFtdO1xuICAgIGNvbnN0IHNlYXJjaFN0YXRlID0gZGF0YS5zZWFyY2hTdGF0ZSB8fCBTZWFyY2hTdGF0ZXMuUFJFX1NFQVJDSDtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7IHJlc3VsdHM6IFtdIH0sIGRhdGEsIHtcbiAgICAgIGlzUHJlU2VhcmNoOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlBSRV9TRUFSQ0gsXG4gICAgICBpc1NlYXJjaExvYWRpbmc6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0xPQURJTkcsXG4gICAgICBpc1NlYXJjaENvbXBsZXRlOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURSxcbiAgICAgIGluY2x1ZGVNYXA6IHRoaXMuX2NvbmZpZy5pbmNsdWRlTWFwLFxuICAgICAgbWFwQ29uZmlnOiB0aGlzLl9jb25maWcubWFwQ29uZmlnLFxuICAgICAgZXZlbnRPcHRpb25zOiB0aGlzLmV2ZW50T3B0aW9ucygpLFxuICAgICAgdW5pdmVyc2FsVXJsOiB0aGlzLl91bml2ZXJzYWxVcmwgPyB0aGlzLl91bml2ZXJzYWxVcmwgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoIDogJycsXG4gICAgICBzaG93Tm9SZXN1bHRzOiByZXN1bHRzLmxlbmd0aCA9PT0gMCxcbiAgICAgIHF1ZXJ5OiB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSlcbiAgICB9KSwgdmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoZWxwZXIgdG8gY29uc3RydWN0IHRoZSBldmVudE9wdGlvbnMgb2JqZWN0IGZvciB0aGUgdmlldyBhbGwgbGlua1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZXZlbnRPcHRpb25zICgpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdmVydGljYWxDb25maWdJZDogdGhpcy5fdmVydGljYWxDb25maWdJZFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1ZlcnRpY2FsUmVzdWx0cyc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvcmVzdWx0cyc7XG4gIH1cblxuICBjb25maWd1cmVJdGVtIChjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX2l0ZW1Db25maWcuZ2xvYmFsLnJlbmRlciA9IGNvbmZpZy5yZW5kZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb25maWcucmVuZGVyKSB7XG4gICAgICAgIHRoaXMuc2V0SXRlbVJlbmRlcihrZXksIGNvbmZpZy5yZW5kZXJba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9pdGVtQ29uZmlnLmdsb2JhbC50ZW1wbGF0ZSA9IGNvbmZpZy50ZW1wbGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbmZpZy50ZW1wbGF0ZSkge1xuICAgICAgICB0aGlzLnNldEl0ZW1UZW1wbGF0ZShrZXksIGNvbmZpZy50ZW1wbGF0ZVtrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRJdGVtVGVtcGxhdGUgKHR5cGUsIHRlbXBsYXRlKSB7XG4gICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KHR5cGUpO1xuICAgIHRoaXMuX2l0ZW1Db25maWdbY2xhenoudHlwZV0udGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHNldEl0ZW1SZW5kZXIgKHR5cGUsIHJlbmRlcikge1xuICAgIGxldCBjbGF6eiA9IHRoaXMuZ2V0SXRlbUNvbXBvbmVudCh0eXBlKTtcbiAgICB0aGlzLl9pdGVtQ29uZmlnW2NsYXp6LnR5cGVdLnJlbmRlciA9IHJlbmRlcjtcbiAgfVxuXG4gIGdldEl0ZW1Db21wb25lbnQgKHR5cGUpIHtcbiAgICBsZXQgY29tcCA9IFJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSZXN1bHRUeXBlLkVWRU5UOlxuICAgICAgICBjb21wID0gRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJlc3VsdFR5cGUuTE9DQVRJT046XG4gICAgICAgIGNvbXAgPSBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUmVzdWx0VHlwZS5QRU9QTEU6XG4gICAgICAgIGNvbXAgPSBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXA7XG4gIH1cblxuICBhZGRDaGlsZCAoZGF0YSwgdHlwZSwgb3B0cykge1xuICAgIC8vIFRPRE8oYmlsbHkpIFJlZmFjdG9yIHRoZSB3YXkgY29uZmlndXJhdGlvbiBhbmQgZGF0YSBmbG93c1xuICAgIC8vIHRocm91Z2ggdG9wIGxldmVsIGNvbXBvbmVudHMgdG8gY2hpbGQgY29tcG9uZW50cy5cbiAgICBpZiAodHlwZSA9PT0gUmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZSkge1xuICAgICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KGRhdGEudHlwZSk7XG4gICAgICBpZiAoY2xhenopIHtcbiAgICAgICAgdHlwZSA9IGNsYXp6LnR5cGU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBNYXBDb21wb25lbnQudHlwZSkge1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgbWFwOiBkYXRhXG4gICAgICB9O1xuICAgICAgY29uc3QgbmV3T3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZy5tYXBDb25maWcsIG9wdHMpO1xuICAgICAgcmV0dXJuIHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIG5ld09wdHMpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHRoZSBwcm9wZXIgaXRlbSByZW5kZXJzIHRvIHRoZSB0aGUgY29tcG9uZW50c1xuICAgIC8vIGhhdmUganVzdCBiZWVuIGNvbnN0cnVjdGVkLiBQcmlvcml0aXplIGdsb2JhbCBvdmVyIGluZGl2aWR1YWwgaXRlbXMuXG4gICAgbGV0IGNvbXAgPSBzdXBlci5hZGRDaGlsZChkYXRhLCB0eXBlLCBPYmplY3QuYXNzaWduKG9wdHMsIHtcbiAgICAgIHZlcnRpY2FsQ29uZmlnSWQ6IHRoaXMuX3ZlcnRpY2FsQ29uZmlnSWQsXG4gICAgICBpc1VuaXZlcnNhbDogdGhpcy5faXNVbml2ZXJzYWxcbiAgICB9KSk7XG4gICAgbGV0IGdsb2JhbENvbmZpZyA9IHRoaXMuX2l0ZW1Db25maWcuZ2xvYmFsO1xuICAgIGxldCBpdGVtQ29uZmlnID0gdGhpcy5faXRlbUNvbmZpZ1tjb21wLnR5cGVdO1xuICAgIGxldCBoYXNHbG9iYWxSZW5kZXIgPSB0eXBlb2YgZ2xvYmFsQ29uZmlnLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJztcbiAgICBsZXQgaGFzR2xvYmFsVGVtcGxhdGUgPSB0eXBlb2YgZ2xvYmFsQ29uZmlnLnRlbXBsYXRlID09PSAnc3RyaW5nJztcblxuICAgIGlmIChoYXNHbG9iYWxSZW5kZXIpIHtcbiAgICAgIGNvbXAuc2V0UmVuZGVyKGdsb2JhbENvbmZpZy5yZW5kZXIpO1xuICAgIH1cblxuICAgIGlmIChoYXNHbG9iYWxUZW1wbGF0ZSkge1xuICAgICAgY29tcC5zZXRUZW1wbGF0ZShnbG9iYWxDb25maWcudGVtcGxhdGUpO1xuICAgIH1cblxuICAgIGlmICghaXRlbUNvbmZpZykge1xuICAgICAgcmV0dXJuIGNvbXA7XG4gICAgfVxuXG4gICAgaWYgKCFoYXNHbG9iYWxSZW5kZXIgJiYgaXRlbUNvbmZpZy5yZW5kZXIpIHtcbiAgICAgIGNvbXAuc2V0UmVuZGVyKGl0ZW1Db25maWcucmVuZGVyKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB0ZW1wbGF0ZSBzcGVjaWZpYyBzaXR1YXRpb25cbiAgICBpZiAoIWhhc0dsb2JhbFRlbXBsYXRlICYmIGl0ZW1Db25maWcudGVtcGxhdGUpIHtcbiAgICAgIGNvbXAuc2V0VGVtcGxhdGUoaXRlbUNvbmZpZy50ZW1wbGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBjb21wO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50ICovXG5pbXBvcnQgUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNjb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBBbmFseXRpY3NFdmVudCBmcm9tICcuLi8uLi8uLi9jb3JlL2FuYWx5dGljcy9hbmFseXRpY3NldmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY29yZGlvblJlc3VsdHNDb21wb25lbnQgZXh0ZW5kcyBSZXN1bHRzQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZywgc3lzdGVtQ29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIGJhc2Ugc2VsZWN0b3IgdG8gdXNlIHdoZW4gZmluZGluZyBET00gdGFyZ2V0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fc2VsZWN0b3JCYXNlID0gY29uZmlnLnNlbGVjdG9yQmFzZSB8fCAnLmpzLXl4dC1BY2NvcmRpb25SZXN1bHQnO1xuXG4gICAgLyoqXG4gICAgICogY29sbGFwc2VkIHN0YXRlIGNsYXNzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmNvbGxhcHNlZENsYXNzID0gY29uZmlnLmNvbGxhcHNlZENsYXNzIHx8ICdpcy1jb2xsYXBzZWQnO1xuXG4gICAgLyoqXG4gICAgICogdmVydGljYWwgY29uZmlnIGlkIGlzIHJlcXVpcmVkIGZvciBhbmFseXRpY3NcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy52ZXJ0aWNhbENvbmZpZ0lkID0gY29uZmlnLnZlcnRpY2FsQ29uZmlnSWQgfHwgY29uZmlnLl9wYXJlbnRPcHRzLnZlcnRpY2FsQ29uZmlnSWQgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiB0aGUgY29tcG9uZW50IHR5cGVcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnQWNjb3JkaW9uUmVzdWx0cyc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvcmVzdWx0c2FjY29yZGlvbic7XG4gIH1cblxuICAvKipcbiAgICogb3ZlcnJpZGVzIF9vbk1vdW50IHRvIGFkZCBiaW5kaW5ncyB0byBjaGFuZ2UgdGhlIGhlaWdodCBvbiBjbGlja1xuICAgKiBAcmV0dXJucyB7QWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudH1cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBfb25Nb3VudCAoKSB7XG4gICAgc3VwZXIuX29uTW91bnQoKTtcblxuICAgIGNvbnN0IGFjY29yZGlvbkVscyA9IERPTS5xdWVyeUFsbCh0aGlzLl9jb250YWluZXIsIHRoaXMuX3NlbGVjdG9yQmFzZSk7XG4gICAgYWNjb3JkaW9uRWxzLmZvckVhY2goKGFjY29yZGlvbkVsKSA9PiB7XG4gICAgICBjb25zdCB0b2dnbGVFbCA9IERPTS5xdWVyeShhY2NvcmRpb25FbCwgdGhpcy50b2dnbGVTZWxlY3RvcigpKTtcbiAgICAgIGNvbnN0IGNvbnRlbnRFbCA9IERPTS5xdWVyeShhY2NvcmRpb25FbCwgdGhpcy5ib2R5U2VsZWN0b3IoKSk7XG4gICAgICB0aGlzLmNoYW5nZUhlaWdodChjb250ZW50RWwsIGFjY29yZGlvbkVsKTtcbiAgICAgIHRvZ2dsZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrKGFjY29yZGlvbkVsLCB0b2dnbGVFbCwgY29udGVudEVsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBtb2RpZmllcjogdGhpcy52ZXJ0aWNhbENvbmZpZ0lkXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNsaWNrIGhhbmRsZXIgZm9yIHRoZSBhY2NvcmRpb24gdG9nZ2xlIGJ1dHRvblxuICAgKiBAcGFyYW0gd3JhcHBlckVsIHtIVE1MRWxlbWVudH0gdGhlIHRvZ2dsZSBjb250YWluZXJcbiAgICogQHBhcmFtIHRvZ2dsZUVsIHtIVE1MRWxlbWVudH0gdGhlIGJ1dHRvblxuICAgKiBAcGFyYW0gY29udGVudEVsIHtIVE1MRWxlbWVudH0gdGhlIHRvZ2dsZSB0YXJnZXRcbiAgICovXG4gIGhhbmRsZUNsaWNrICh3cmFwcGVyRWwsIHRvZ2dsZUVsLCBjb250ZW50RWwpIHtcbiAgICBjb25zdCBldmVudCA9IG5ldyBBbmFseXRpY3NFdmVudCh0aGlzLmlzQ29sbGFwc2VkKHdyYXBwZXJFbCkgPyAnUk9XX0VYUEFORCcgOiAnUk9XX0NPTExBUFNFJylcbiAgICAgIC5hZGRPcHRpb25zKHtcbiAgICAgICAgdmVydGljYWxDb25maWdJZDogdGhpcy52ZXJ0aWNhbENvbmZpZ0lkLFxuICAgICAgICBlbnRpdHlJZDogdG9nZ2xlRWwuZGF0YXNldC5lbnRpdHlJZFxuICAgICAgfSk7XG4gICAgd3JhcHBlckVsLmNsYXNzTGlzdC50b2dnbGUodGhpcy5jb2xsYXBzZWRDbGFzcyk7XG4gICAgdGhpcy5jaGFuZ2VIZWlnaHQoY29udGVudEVsLCB3cmFwcGVyRWwpO1xuICAgIHRvZ2dsZUVsLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRoaXMuaXNDb2xsYXBzZWQod3JhcHBlckVsKSA/ICdmYWxzZScgOiAndHJ1ZScpO1xuICAgIHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIucmVwb3J0KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgaXMgY3VycmVudGx5IGNvbGxhcHNlZFxuICAgKiBAcGFyYW0gd3JhcHBlckVsIHtIVE1MRWxlbWVudH0gdGhlIHRvZ2dsZSBjb250YWluZXJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc0NvbGxhcHNlZCAod3JhcHBlckVsKSB7XG4gICAgaWYgKCF3cmFwcGVyRWwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JhcHBlckVsLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNvbGxhcHNlZENsYXNzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0b2dnbGVzIHRoZSBoZWlnaHQgYmV0d2VlbiAwIGFuZCB0aGUgY29udGVudCBoZWlnaHQgZm9yIHNtb290aCBhbmltYXRpb25cbiAgICogQHBhcmFtIHRhcmdldEVsIHtIVE1MRWxlbWVudH1cbiAgICogQHBhcmFtIHdyYXBwZXJFbCB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBjaGFuZ2VIZWlnaHQgKHRhcmdldEVsLCB3cmFwcGVyRWwpIHtcbiAgICB0YXJnZXRFbC5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmlzQ29sbGFwc2VkKHdyYXBwZXJFbCkgPyAwIDogdGFyZ2V0RWwuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBoZWxwZXIgZm9yIGNvbXBvc2luZyBjaGlsZCBlbGVtZW50IHNlbGVjdG9yc1xuICAgKiBAcGFyYW0gY2hpbGQge3N0cmluZ31cbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGJ1aWxkU2VsZWN0b3IgKGNoaWxkKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuX3NlbGVjdG9yQmFzZX0ke2NoaWxkfWA7XG4gIH1cblxuICAvKipcbiAgICogaGVscGVyIGZvciB0aGUgdG9nZ2xlIGJ1dHRvbiBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgdG9nZ2xlU2VsZWN0b3IgKCkge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkU2VsZWN0b3IoJy10b2dnbGUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoZWxwZXIgZm9yIHRoZSBjb250ZW50IGVsZW1lbnQgc2VsZWN0b3JcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGJvZHlTZWxlY3RvciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRTZWxlY3RvcignLWJvZHknKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3NlYXJjaHN0YXRlcyc7XG5pbXBvcnQgQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL2FjY29yZGlvbnJlc3VsdHNjb21wb25lbnQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSwgc3lzdGVtT3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cywgc3lzdGVtT3B0cyk7XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFM7XG4gICAgdGhpcy5fbGltaXQgPSBvcHRzLmxpbWl0IHx8IDEwO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1VuaXZlcnNhbFJlc3VsdHMnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHMnO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpbml0IChvcHRzKSB7XG4gICAgc3VwZXIuaW5pdChvcHRzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhLCB2YWwpIHtcbiAgICBjb25zdCBzZWN0aW9ucyA9IGRhdGEuc2VjdGlvbnMgfHwgW107XG4gICAgY29uc3Qgc2VhcmNoU3RhdGUgPSBkYXRhLnNlYXJjaFN0YXRlIHx8IFNlYXJjaFN0YXRlcy5QUkVfU0VBUkNIO1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHsgc2VjdGlvbnM6IFtdIH0sIGRhdGEsIHtcbiAgICAgIGlzUHJlU2VhcmNoOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlBSRV9TRUFSQ0gsXG4gICAgICBpc1NlYXJjaExvYWRpbmc6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0xPQURJTkcsXG4gICAgICBpc1NlYXJjaENvbXBsZXRlOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURSxcbiAgICAgIHNob3dOb1Jlc3VsdHM6IHNlY3Rpb25zLmxlbmd0aCA9PT0gMCxcbiAgICAgIHF1ZXJ5OiB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSlcbiAgICB9KSwgdmFsKTtcbiAgfVxuXG4gIGFkZENoaWxkIChkYXRhID0ge30sIHR5cGUsIG9wdHMpIHtcbiAgICBjb25zdCBjaGlsZE9wdHMgPSB7IC4uLm9wdHMsIC4uLnRoaXMuZ2V0Q2hpbGRDb25maWcoW2RhdGFbJ3ZlcnRpY2FsQ29uZmlnSWQnXV0pIH07XG4gICAgaWYgKGNoaWxkT3B0cy51c2VBY2NvcmRpb24gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBzdXBlci5hZGRDaGlsZChkYXRhLCBBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50LnR5cGUsIGNoaWxkT3B0cyk7XG4gICAgfVxuICAgIHJldHVybiBzdXBlci5hZGRDaGlsZChkYXRhLCB0eXBlLCBjaGlsZE9wdHMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb25maWcgKGNvbmZpZ0lkKSB7XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZyA9IHtcbiAgICAgIHZlcnRpY2FsQ29uZmlnSWQ6IGNvbmZpZ0lkLFxuICAgICAgaXNVbml2ZXJzYWw6IHRydWVcbiAgICB9O1xuICAgIGxldCBjb25maWcgPSB0aGlzLl9jb25maWcuY29uZmlnO1xuICAgIGlmIChjb25maWcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRDb25maWc7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGRlZmF1bHRDb25maWcsIHRoaXMuX2NvbmZpZ1snY29uZmlnJ11bY29uZmlnSWRdIHx8IHRoaXMuX2NvbmZpZ1snY29uZmlnJ10pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFF1ZXN0aW9uU3VibWlzc2lvbiBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9xdWVzdGlvbnN1Ym1pc3Npb24nO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBBbmFseXRpY3NFdmVudCBmcm9tICcuLi8uLi8uLi9jb3JlL2FuYWx5dGljcy9hbmFseXRpY3NldmVudCc7XG5cbi8qKlxuICogQ29uZmlndXJhYmxlIG9wdGlvbnMgZm9yIHRoZSBjb21wb25lbnRcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmNvbnN0IERFRkFVTFRfQ09ORklHID0ge1xuICAvKipcbiAgICogVGhlIGVudGl0eSBpZGVudGlmaWVyIHRoYXQgdGhlIHF1ZXN0aW9uIGlzIGFzc29jaWF0ZWQgd2l0aC5cbiAgICogVGhpcyBpcyB0eXBpY2FsbHkgYW4gb3JnYW5pemF0aW9uIG9iamVjdFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgJ2VudGl0eUlkJzogbnVsbCxcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgbGFuZ3VhZ2Ugb2YgdGhlIHF1ZXN0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICAnbGFuZ3VhZ2UnOiAnRU4nLFxuXG4gIC8qKlxuICAgKiBUaGUgbWFpbiBDU1Mgc2VsZWN0b3IgdXNlZCB0byByZWZlcmVuY2UgdGhlIGZvcm0gZm9yIHRoZSBjb21wb25lbnQuXG4gICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgKi9cbiAgJ2Zvcm1TZWxlY3Rvcic6ICdmb3JtJyxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgbGFiZWwgdG8gdXNlIGZvciB0aGUgZS1tYWlsIGFkZHJlc3MgaW5wdXRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICdlbWFpbExhYmVsJzogJ0VtYWlsIEFkZHJlc3M6JyxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgbGFiZWwgdG8gdXNlIGZvciB0aGUgbmFtZSBpbnB1dFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgJ25hbWVMYWJlbCc6ICdOYW1lOicsXG5cbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIGxhYmVsIHRvIHVzZSBmb3IgdGhlIHF1ZXN0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICAncXVlc3Rpb25MYWJlbCc6ICdXaGF0IGlzIHlvdXIgcXVlc3Rpb24/JyxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgbGFiZWwgdG8gdXNlIGZvciB0aGUgUHJpdmFjeSBQb2xpY3lcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICdwcml2YWN5UG9saWN5TGFiZWwnOiAnSSBhZ3JlZSB0byBvdXIgUHJpdmFjeSBQb2xpY3k6JyxcblxuICAvKipcbiAgICogVGhlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIFN1Ym1pdCBidXR0b25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICdidXR0b25MYWJlbCc6ICdTdWJtaXQnXG59O1xuXG4vKipcbiAqIFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCBpcyBhIGNvbXBvbmVudCB0aGF0IGNyZWF0ZXMgYSBmb3JtXG4gKiB0aGF0cyBkaXNwbGF5ZWQgd2hlbmV2ZXIgYSBxdWVyeSBpcyBydW4uIEl0IGVuYWJsZXMgdGhlIHVzZXJcbiAqIHRvIHN1Ym1pdCBxdWVzdGlvbnMgdGhhdCB0aGV5IGNhbnQgZmluZCB0aGUgYW5zd2VyIGZvci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfQ09ORklHLCBjb25maWcpLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogUmVmZXJlbmNlIHRvIHRoZSBzdG9yYWdlIG1vZGVsXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuUVVFU1RJT05fU1VCTUlTU0lPTjtcblxuICAgIC8qKlxuICAgICAqIE5PVEUoYmlsbHkpIGlmIHRoaXMgaXMgYSBwYXR0ZXJuIHdlIHdhbnQgdG8gZm9sbG93IGZvciBjb25maWd1cmF0aW9uXG4gICAgICogd2Ugc2hvdWxkIGJha2UgaXQgaW50byB0aGUgY29yZSBjbGFzcy5cbiAgICAgKi9cbiAgICB0aGlzLnZhbGlkYXRlQ29uZmlnKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3F1ZXN0aW9ucy9xdWVzdGlvbnN1Ym1pc3Npb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwdWJsaWMgaW50ZXJmYWNlIGFsaWFzIGZvciB0aGUgY29tcG9uZW50XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1FBU3VibWlzc2lvbic7XG4gIH1cblxuICAvKipcbiAgICogdmFsaWRhdGlvbkNvbmZpZyBjb250YWlucyBhIGJ1bmNoIG9mIHJ1bGVzXG4gICAqIHRoYXQgYXJlIHVzZWQgdG8gdmFsaWRhdGUgYWdpbnN0IGNvbmZpZ3VyYXRpb24gcHJvdmlkZWQgYnkgdGhlIHVzZXJcbiAgICovXG4gIHZhbGlkYXRlQ29uZmlnICgpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmVudGl0eUlkID09PSBudWxsIHx8XG4gICAgICAgIHR5cGVvZiB0aGlzLl9jb25maWcuZW50aXR5SWQgIT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICAnYGVudGl0eUlkYCBpcyBhIHJlcXVpcmVkIGNvbmZpZ3VyYXRpb24gb3B0aW9uIGZvciBRdWVzdGlvbiBTdWJtaXNzaW9uJyxcbiAgICAgICAgJ1F1ZXN0aW9uU3VibWlzc2lvbicpO1xuICAgIH1cbiAgfVxuXG4gIGJlZm9yZU1vdW50ICgpIHtcbiAgICAvLyBBdm9pZCBtb3VudGluZyB0aGUgY29tcG9uZW50IGlmIHRoZXJlcyBubyBkYXRhXG4gICAgLy8gTm90ZSwgMSBiZWNhdXNlIGBjb25maWdgIGlzIGFsd2F5cyBwYXJ0IG9mIHRoZSBzdGF0ZS5cbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5nZXRTdGF0ZSgpKS5sZW5ndGggPiAxO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgbGV0IGZvcm1FbCA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2NvbmZpZy5mb3JtU2VsZWN0b3IpO1xuICAgIGlmIChmb3JtRWwgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmJpbmRBbmFseXRpY3MoZm9ybUVsKTtcbiAgICB0aGlzLmJpbmRGb3JtU3VibWl0KGZvcm1FbCk7XG4gIH1cblxuICAvKipcbiAgICogYmluZEFuYWx5dGljcyB3aWxsIHdpcmUgdXAgRE9NIGV2ZW50IGhvb2tzIHRvIHNlcnZlcnNpZGUgcmVwb3J0aW5nXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1FbFxuICAgKi9cbiAgYmluZEFuYWx5dGljcyAoZm9ybUVsKSB7XG4gICAgaWYgKHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBxdWVzdGlvblRleHRFbCA9IERPTS5xdWVyeShmb3JtRWwsICcuanMtcXVlc3Rpb24tdGV4dCcpO1xuICAgIERPTS5vbihxdWVzdGlvblRleHRFbCwgJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlci5yZXBvcnQobmV3IEFuYWx5dGljc0V2ZW50KCdRVUVTVElPTl9GT0NVUycpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBiaW5kRm9ybVN1Ym1pdCBoYW5kbGVzIHN1Ym1pdHRpbmcgdGhlIHF1ZXN0aW9uIHRvIHRoZSBzZXJ2ZXIuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1FbFxuICAgKi9cbiAgYmluZEZvcm1TdWJtaXQgKGZvcm1FbCkge1xuICAgIERPTS5vbihmb3JtRWwsICdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gVE9ETyhiaWxseSkgd2UgcHJvYmFibHkgd2FudCB0byBkaXNhYmxlIHRoZSBmb3JtIGZyb20gYmVpbmcgc3VibWl0dGVkIHR3aWNlXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IHRoaXMucGFyc2UoZm9ybUVsKTtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMudmFsaWRhdGVSZXF1aXJlZChmb3JtRGF0YSk7XG4gICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKG5ldyBRdWVzdGlvblN1Ym1pc3Npb24oZm9ybURhdGEsIGVycm9ycykpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvcmUuc3VibWl0UXVlc3Rpb24oe1xuICAgICAgICAnZW50aXR5SWQnOiB0aGlzLl9jb25maWcuZW50aXR5SWQsXG4gICAgICAgICdxdWVzdGlvbkxhbmd1YWdlJzogdGhpcy5fY29uZmlnLmxhbmd1YWdlLFxuICAgICAgICAnc2l0ZSc6ICdGSVJTVF9QQVJUWScsXG4gICAgICAgICduYW1lJzogZm9ybURhdGEubmFtZSxcbiAgICAgICAgJ2VtYWlsJzogZm9ybURhdGEuZW1haWwsXG4gICAgICAgICdxdWVzdGlvblRleHQnOiBmb3JtRGF0YS5xdWVzdGlvblRleHQsXG4gICAgICAgICdxdWVzdGlvbkRlc2NyaXB0aW9uJzogZm9ybURhdGEucXVlc3Rpb25EZXNjcmlwdGlvblxuICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgbmV3IFF1ZXN0aW9uU3VibWlzc2lvbihmb3JtRGF0YSwge1xuICAgICAgICAgICAgICAnbmV0d29yayc6ICdUaGVyZSB3YXMgYSBwcm9ibGVtIHN1Ym1pdHRpbmcgeW91ciBxdWVzdGlvbi4gUGxlYXNlIHRyeSBhZ2Fpbi4nXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRha2VzIHRoZSBmb3JtLCBhbmQgYnVpbGRzIGEgb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgaW5wdXQgbmFtZXNcbiAgICogYW5kIHRleHQgZmllbGRzLlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtRWxcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHBhcnNlIChmb3JtRWwpIHtcbiAgICBjb25zdCBpbnB1dEZpZWxkcyA9IERPTS5xdWVyeUFsbChmb3JtRWwsICcuanMtcXVlc3Rpb24tZmllbGQnKTtcbiAgICBpZiAoIWlucHV0RmllbGRzIHx8IGlucHV0RmllbGRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGxldCBvYmogPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0RmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdmFsID0gaW5wdXRGaWVsZHNbaV0udmFsdWU7XG4gICAgICBpZiAoaW5wdXRGaWVsZHNbaV0udHlwZSA9PT0gJ2NoZWNrYm94JyAmJiB2YWwgPT09ICd0cnVlJykge1xuICAgICAgICB2YWwgPSB0cnVlO1xuICAgICAgfVxuICAgICAgb2JqW2lucHV0RmllbGRzW2ldLm5hbWVdID0gdmFsO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIHRoZSByZXF1aXJlZCBmaWVsZHMgKG9yIHJ1bGVzKSBmb3IgdGhlIGZvcm0gZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gZm9ybURhdGFcbiAgICogQHJldHVybnMge09iamVjdHxib29sZWFufSBlcnJvcnMgb2JqZWN0IGlmIGFueSBlcnJvcnMgZm91bmRcbiAgICovXG4gIHZhbGlkYXRlUmVxdWlyZWQgKGZvcm1EYXRhKSB7XG4gICAgbGV0IGVycm9ycyA9IHt9O1xuICAgIGlmICghZm9ybURhdGEuZW1haWwgfHwgdHlwZW9mIGZvcm1EYXRhLmVtYWlsICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3JzWydlbWFpbCddID0gJ01pc3NpbmcgZW1haWwgYWRkcmVzcyEnO1xuICAgIH1cblxuICAgIGlmICghZm9ybURhdGEucHJpdmFjeVBvbGljeSB8fCBmb3JtRGF0YS5wcml2YWN5UG9saWN5ICE9PSB0cnVlKSB7XG4gICAgICBlcnJvcnNbJ3ByaXZhY3lQb2xpY3knXSA9ICdBcHByb3Zpbmcgb3VyIHByaXZhY3kgcG9saWN5IHRlcm1zIGlzIHJlcXVpcmVkISc7XG4gICAgfVxuXG4gICAgaWYgKCFmb3JtRGF0YS5xdWVzdGlvblRleHQgfHwgdHlwZW9mIGZvcm1EYXRhLnF1ZXN0aW9uVGV4dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9yc1sncXVlc3Rpb25UZXh0J10gPSAnUXVlc3Rpb24gdGV4dCBpcyByZXF1aXJlZCEnO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA+IDAgPyBlcnJvcnMgOiBudWxsO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTVkdJY29uIHtcbiAgLyoqXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICogQHBhcmFtIGNvbmZpZy5uYW1lXG4gICAqIEBwYXJhbSBjb25maWcucGF0aFxuICAgKiBAcGFyYW0gY29uZmlnLmNvbXBsZXhDb250ZW50c1xuICAgKiBAcGFyYW0gY29uZmlnLnZpZXdCb3hcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgLyoqXG4gICAgICogdGhlIG5hbWUgb2YgdGhlIGljb25cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSBjb25maWcubmFtZTtcbiAgICAvKipcbiAgICAgKiBhbiBzdmcgcGF0aCBkZWZpbml0aW9uXG4gICAgICovXG4gICAgdGhpcy5wYXRoID0gY29uZmlnLnBhdGg7XG4gICAgLyoqXG4gICAgICogaWYgbm90IHVzaW5nIGEgcGF0aCwgYSB0aGUgbWFya3VwIGZvciBhIGNvbXBsZXggU1ZHXG4gICAgICovXG4gICAgdGhpcy5jb21wbGV4Q29udGVudHMgPSBjb25maWcuY29tcGxleENvbnRlbnRzO1xuICAgIC8qKlxuICAgICAqIHRoZSB2aWV3IGJveCBkZWZpbml0aW9uLCBkZWZhdWx0cyB0byAyNHgyNFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy52aWV3Qm94ID0gY29uZmlnLnZpZXdCb3ggfHwgJzAgMCAyNCAyNCc7XG4gICAgLyoqXG4gICAgICogYWN0dWFsIGNvbnRlbnRzIHVzZWRcbiAgICAgKi9cbiAgICB0aGlzLmNvbnRlbnRzID0gdGhpcy5wYXRoRGVmaW5pdGlvbigpO1xuICB9XG5cbiAgcGF0aERlZmluaXRpb24gKCkge1xuICAgIGlmICh0aGlzLmNvbXBsZXhDb250ZW50cykge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGxleENvbnRlbnRzO1xuICAgIH1cblxuICAgIHJldHVybiBgPHBhdGggZD1cIiR7dGhpcy5wYXRofVwiPjwvcGF0aD5gO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIHN2ZyBtYXJrdXBcbiAgICovXG4gIG1hcmt1cCAoKSB7XG4gICAgcmV0dXJuIGA8c3ZnIHZpZXdCb3g9XCIke3RoaXMudmlld0JveH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JHt0aGlzLmNvbnRlbnRzfTwvc3ZnPmA7XG4gIH1cbn1cbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICd0aHVtYicsXG4gIHZpZXdCb3g6ICcwIDAgMjQgMjInLFxuICBwYXRoOiAnTTE1LjI3MyAxSDUuNDU1Yy0uOTA2IDAtMS42OC41NS0yLjAwOCAxLjM0MkwuMTUzIDEwLjA5N0EyLjE5IDIuMTkgMCAwMDAgMTAuOXYyLjJjMCAxLjIxLjk4MiAyLjIgMi4xODIgMi4yaDYuODgzTDguMDMgMjAuMzI3bC0uMDMzLjM1MmMwIC40NTEuMTg2Ljg2OS40OCAxLjE2Nkw5LjYzMyAyM2w3LjE3OC03LjI0OWEyLjE2IDIuMTYgMCAwMC42NDQtMS41NTF2LTExYzAtMS4yMS0uOTgyLTIuMi0yLjE4Mi0yLjJ6bTAgMTMuMmwtNC43MzUgNC43NzRMMTEuNzUgMTMuMUgyLjE4MnYtMi4ybDMuMjczLTcuN2g5LjgxOHYxMXpNMTkuNjM2IDFIMjR2MTMuMmgtNC4zNjRWMXonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdyZWNlaXB0JyxcbiAgcGF0aDogJ00xNC42MDYgOS41Yy0uNjcxLS41MTUtMS41OTEtLjgzMy0yLjYwNi0uODMzIDEuMDE1IDAgMS45MzUuMzE4IDIuNjA2LjgzM3ptLTcuOTg1IDBIMS42NTVBMS42NiAxLjY2IDAgMDEwIDcuODMzVjMuNjY3QzAgMi43NDcuNzQxIDIgMS42NTUgMmgyMC42OUExLjY2IDEuNjYgMCAwMTI0IDMuNjY3djQuMTY2QTEuNjYgMS42NiAwIDAxMjIuMzQ1IDkuNWgtNC45NjZWMjJINi42MjFWOS41aDIuNzczSDYuNjJ6bTEwLjc1OC0xLjY2N2g0Ljk2NlYzLjY2N0gxLjY1NXY0LjE2Nmg0Ljk2NnYtMi41aDEwLjc1OHYyLjV6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncGFudGhlb24nLFxuICBwYXRoOiAnTTkuOTQ3IDE2LjU5OGguMjUyVjkuNDEyaC0uMjUyYS40MzIuNDMyIDAgMDEtLjIzLS4wNjVjLS4wNy0uMDQzLS4xMDYtLjA5My0uMTA2LS4xNUw5LjE1IDcuODJ2LS4xNWMwLS4wNDQuMDI4LS4wOC4wODQtLjEwOWEuNjkxLjY5MSAwIDAxLjEwNS0uMDg2LjI1NC4yNTQgMCAwMS4xNDYtLjA0M0gxMy42Yy4wNTYgMCAuMTA0LjAxNS4xNDYuMDQzLjA0Mi4wMy4wOTEuMDU4LjE0Ny4wODZhLjI3MS4yNzEgMCAwMS4wNjMuMTA4Yy4wMTQuMDQzLjAwNy4wOTMtLjAyLjE1bC0uNDIgMS4zNzhhLjM3NC4zNzQgMCAwMS0uMTQ3LjE1LjM3LjM3IDAgMDEtLjE5LjA2NWgtLjI1MXY3LjE4NmguMjUyYS4zNy4zNyAwIDAxLjE4OS4wNjVjLjA3LjA0My4xMTkuMDkzLjE0Ny4xNWwuNDIgMS4zNzhjLjAyNy4wMjguMDM0LjA3MS4wMi4xMjlhLjI3NS4yNzUgMCAwMS0uMDYzLjEyOSAxLjM2NCAxLjM2NCAwIDAwLS4xNDcuMDg2LjI1NC4yNTQgMCAwMS0uMTQ2LjA0M0g5LjQ4NWEuMjU0LjI1NCAwIDAxLS4xNDYtLjA0My42OTEuNjkxIDAgMDEtLjEwNS0uMDg2Yy0uMDU2LS4wMjktLjA4NC0uMDcyLS4wODQtLjEzdi0uMTI4bC40NjEtMS4zNzdjMC0uMDU4LjAzNS0uMTA4LjEwNS0uMTUxYS40MzIuNDMyIDAgMDEuMjMxLS4wNjV6bTUuNzkyIDBoLjI1MlY5LjQxMmgtLjI1MmEuNDMyLjQzMiAwIDAxLS4yMy0uMDY1LjM3NC4zNzQgMCAwMS0uMTQ4LS4xNWwtLjQyLTEuMzc3Yy0uMDI3LS4wMjktLjAzNC0uMDcyLS4wMi0uMTNhLjI3NS4yNzUgMCAwMS4wNjMtLjEyOWMuMDU2LS4wMjguMTA1LS4wNTcuMTQ2LS4wODZhLjI1NC4yNTQgMCAwMS4xNDctLjA0M2g0LjExNGMuMDU1IDAgLjEwNC4wMTUuMTQ2LjA0M2EuNjkxLjY5MSAwIDAxLjEwNS4wODZjLjA1Ni4wMy4wODQuMDcyLjA4NC4xM3YuMTI5bC0uNDIgMS4zNzdhLjM3NC4zNzQgMCAwMS0uMTQ2LjE1LjQzMi40MzIgMCAwMS0uMjMxLjA2NWgtLjIxdjcuMTg2aC4yMWEuNDMuNDMgMCAwMS4yMy4wNjVjLjA3LjA0My4xMi4wOTMuMTQ4LjE1bC40MiAxLjM3OHYuMTVjMCAuMDQzLS4wMjkuMDgtLjA4NS4xMDhhLjY5MS42OTEgMCAwMS0uMTA1LjA4Ni4yNTQuMjU0IDAgMDEtLjE0Ni4wNDNoLTQuMTE0YS4yNTQuMjU0IDAgMDEtLjE0Ny0uMDQzIDEuMzY0IDEuMzY0IDAgMDAtLjE0Ni0uMDg2LjI3MS4yNzEgMCAwMS0uMDYzLS4xMDhjLS4wMTQtLjA0My0uMDA3LS4wOTMuMDItLjE1bC40Mi0xLjM3N2EuMzc0LjM3NCAwIDAxLjE0Ny0uMTUxLjQzMi40MzIgMCAwMS4yMzEtLjA2NXptLTExLjc5NC0uMDg2aC4yNTJWOS40OThoLS4yNTJhLjMzNC4zMzQgMCAwMS0uMjEtLjA2NS4zODYuMzg2IDAgMDEtLjEyNi0uMTkzbC0uNDItMS4zNzdhLjI0OC4yNDggMCAwMS0uMDItLjE3Mi44NTQuODU0IDAgMDEuMDYzLS4xNzNjLjAyOC0uMDU3LjA3LS4xLjEyNi0uMTI5YS4zNjUuMzY1IDAgMDEuMTY4LS4wNDNoNC4wN2MuMDU3IDAgLjExMy4wMTUuMTY5LjA0M2EuMjc4LjI3OCAwIDAxLjEyNi4xMy44NTQuODU0IDAgMDEuMDYyLjE3Mi4yNDguMjQ4IDAgMDEtLjAyLjE3MmwtLjQyIDEuMzc3YS4zODYuMzg2IDAgMDEtLjEyNi4xOTMuMzM0LjMzNCAwIDAxLS4yMS4wNjVoLS4yMXY3LjAxNGguMjFjLjA4NCAwIC4xNTQuMDI5LjIxLjA4NmEuNjczLjY3MyAwIDAxLjEyNi4xNzJsLjQyIDEuMzc4YS4yNDguMjQ4IDAgMDEuMDIuMTcyLjg1NC44NTQgMCAwMS0uMDYyLjE3Mi4yNzguMjc4IDAgMDEtLjEyNi4xMjkuMzY1LjM2NSAwIDAxLS4xNjguMDQzSDMuNTI2YS4zNjUuMzY1IDAgMDEtLjE2OC0uMDQzLjI3OC4yNzggMCAwMS0uMTI2LS4xMy44NTQuODU0IDAgMDEtLjA2My0uMTcxLjI0OC4yNDggMCAwMS4wMi0uMTcybC40Mi0xLjM3OGEuNjczLjY3MyAwIDAxLjEyNi0uMTcyLjI4MS4yODEgMCAwMS4yMS0uMDg2ek0xLjc2MyA2LjY1OGEuNzE3LjcxNyAwIDAxLS41MDQtLjE5NC42NDQuNjQ0IDAgMDEtLjIxLS40OTV2LS40M2EuNzMuNzMgMCAwMS4xMDUtLjM4Ny42OC42OCAwIDAxLjI3My0uMjU5QzQuMzA5IDMuNDAyIDYuNTQgMi4yNzYgOC4xMjEgMS41MTUgOS43MDIuNzU1IDEwLjQ5My4zNjEgMTAuNDkzLjMzMmMuNTMxLS4yNTguOTcyLS4zNjYgMS4zMjItLjMyMy4zNS4wNDMuNzM0LjE2NSAxLjE1NC4zNjZsOC4zMSA0LjUxOGMuMTQuMDU4LjI0NS4xNDQuMzE1LjI1OWEuNzMuNzMgMCAwMS4xMDUuMzg3di40M2MwIC4yMDEtLjA3LjM2Ni0uMjEuNDk1YS43MTcuNzE3IDAgMDEtLjUwNC4xOTRIMS43NjN6bS0uNzE0IDEzLjM0YS41NC41NCAwIDAxLjE2OC0uMzg3LjUxNi41MTYgMCAwMS4zNzgtLjE3MmgxOS42NDJjLjE2OCAwIC4zMDguMDU3LjQyLjE3MmEuNTQxLjU0MSAwIDAxLjE2OC4zODd2LjgxOGEuNTIyLjUyMiAwIDAxLS4xNjguNDA4LjYwNS42MDUgMCAwMS0uNDIuMTUxSDEuNTk1YS41NTEuNTUxIDAgMDEtLjM3OC0uMTUuNTIyLjUyMiAwIDAxLS4xNjgtLjQxdi0uODE3em0yMS40MDUgMi4wMjJjLjE0IDAgLjI2Ni4wNTguMzc4LjE3M2EuNTkyLjU5MiAwIDAxLjE2OC40M3YuODE4YS41NDEuNTQxIDAgMDEtLjE2OC4zODcuNTE2LjUxNiAwIDAxLS4zNzguMTcyTC41NDYgMjMuOTU3YS41MTYuNTE2IDAgMDEtLjM3OC0uMTcyLjU0MS41NDEgMCAwMS0uMTY4LS4zODd2LS44MThhLjU5LjU5IDAgMDEuMTY4LS40My41MTYuNTE2IDAgMDEuMzc4LS4xNzNsMjEuOTA4LjA0M3onXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdtaWMnLFxuICBwYXRoOiAnTTEyIDE1YzEuNjYgMCAyLjk5LTEuMzQgMi45OS0zTDE1IDZjMC0xLjY2LTEuMzQtMy0zLTNTOSA0LjM0IDkgNnY2YzAgMS42NiAxLjM0IDMgMyAzem01LjMtM2MwIDMtMi41NCA1LjEtNS4zIDUuMVM2LjcgMTUgNi43IDEySDVjMCAzLjQxIDIuNzIgNi4yMyA2IDYuNzJWMjJoMnYtMy4yOGMzLjI4LS40OCA2LTMuMyA2LTYuNzJoLTEuN3onXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdkaXJlY3Rpb25zJyxcbiAgcGF0aDogJ00yMy42NDkgMTEuMTU0TDEyLjg0Ni4zNWExLjE5NSAxLjE5NSAwIDAwLTEuNjkyIDBMLjM1IDExLjE1NGExLjE5NSAxLjE5NSAwIDAwMCAxLjY5MkwxMS4xNTQgMjMuNjVhMS4xOTUgMS4xOTUgMCAwMDEuNjkyIDBMMjMuNjUgMTIuODQ2Yy40NjgtLjQ1Ni40NjgtMS4yMTIgMC0xLjY5MnptLTkuMjU0IDMuODUzdi0zLjAwMUg5LjU5M3YzLjZoLTIuNHYtNC44YzAtLjY2LjU0LTEuMiAxLjItMS4yaDYuMDAyVjYuNjA0bDQuMiA0LjItNC4yIDQuMjAyeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2NhbGVuZGFyJyxcbiAgcGF0aDogJ00xOC4xMTEgMTMuMkgxMnY2aDYuMTExdi02ek0xNi44OSAwdjIuNEg3LjExVjBINC42Njd2Mi40SDMuNDQ0Yy0xLjM1NiAwLTIuNDMyIDEuMDgtMi40MzIgMi40TDEgMjEuNkMxIDIyLjkyIDIuMDg4IDI0IDMuNDQ0IDI0aDE3LjExMkMyMS45IDI0IDIzIDIyLjkyIDIzIDIxLjZWNC44YzAtMS4zMi0xLjEtMi40LTIuNDQ0LTIuNGgtMS4yMjNWMEgxNi44OXptMy42NjcgMjEuNkgzLjQ0NFY4LjRoMTcuMTEydjEzLjJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnY2FsbG91dCcsXG4gIHBhdGg6ICdNMjEuOTkgNGMwLTEuMS0uODktMi0xLjk5LTJINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNGw0IDQtLjAxLTE4eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2luZm8nLFxuICBwYXRoOiAnTTEyIDguNEExLjIgMS4yIDAgMTAxMiA2YTEuMiAxLjIgMCAwMDAgMi40ek0xMiAwYzYuNjI0IDAgMTIgNS4zNzYgMTIgMTJzLTUuMzc2IDEyLTEyIDEyUzAgMTguNjI0IDAgMTIgNS4zNzYgMCAxMiAwem0wIDE4Yy42NiAwIDEuMi0uNTQgMS4yLTEuMlYxMmMwLS42Ni0uNTQtMS4yLTEuMi0xLjItLjY2IDAtMS4yLjU0LTEuMiAxLjJ2NC44YzAgLjY2LjU0IDEuMiAxLjIgMS4yeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2JyaWVmY2FzZScsXG4gIHBhdGg6ICdNMjAgN2gtNFY1YzAtMS4xMS0uODktMi0yLTJoLTRjLTEuMTEgMC0yIC44OS0yIDJ2Mkg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAyMGMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY5YzAtMS4xMS0uODktMi0yLTJ6bS02IDBoLTRWNWg0djJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAna2Fib2InLFxuICB2aWV3Qm94OiAnMCAwIDMgMTEnLFxuICBjb21wbGV4Q29udGVudHM6IGA8Y2lyY2xlIGN4PVwiMS41XCIgY3k9XCIxLjVcIiByPVwiMS41XCIvPjxjaXJjbGUgY3g9XCIxLjVcIiBjeT1cIjUuNVwiIHI9XCIxLjVcIi8+PGNpcmNsZSBjeD1cIjEuNVwiIGN5PVwiOS41XCIgcj1cIjEuNVwiLz5gXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdwZXJzb24nLFxuICB2aWV3Qm94OiAnMCAwIDE4IDE4JyxcbiAgcGF0aDogJ005IDljMi40ODYgMCA0LjUtMi4wMTQgNC41LTQuNVMxMS40ODYgMCA5IDBhNC40OTkgNC40OTkgMCAwMC00LjUgNC41QzQuNSA2Ljk4NiA2LjUxNCA5IDkgOXptMCAyLjI1Yy0zLjAwNCAwLTkgMS41MDgtOSA0LjV2MS4xMjVDMCAxNy40OTQuNTA2IDE4IDEuMTI1IDE4aDE1Ljc1Yy42MTkgMCAxLjEyNS0uNTA2IDEuMTI1LTEuMTI1VjE1Ljc1YzAtMi45OTItNS45OTYtNC41LTktNC41eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ21hZ25pZnlpbmdfZ2xhc3MnLFxuICBwYXRoOiAnTTE2LjEyNCAxMy4wNTFhNS4xNTQgNS4xNTQgMCAxMTAtMTAuMzA4IDUuMTU0IDUuMTU0IDAgMDEwIDEwLjMwOE0xNi4xMTQgMGE3Ljg4NiA3Ljg4NiAwIDAwLTYuNDYgMTIuNDA3TDAgMjIuMDYgMS45NCAyNGw5LjY1My05LjY1M0E3Ljg4NiA3Ljg4NiAwIDEwMTYuMTEzIDAnXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdvZmZpY2UnLFxuICBwYXRoOiAnTTEyIDdWM0gydjE4aDIwVjdIMTJ6TTYgMTlINHYtMmgydjJ6bTAtNEg0di0yaDJ2MnptMC00SDRWOWgydjJ6bTAtNEg0VjVoMnYyem00IDEySDh2LTJoMnYyem0wLTRIOHYtMmgydjJ6bTAtNEg4VjloMnYyem0wLTRIOFY1aDJ2MnptMTAgMTJoLTh2LTJoMnYtMmgtMnYtMmgydi0yaC0yVjloOHYxMHptLTItOGgtMnYyaDJ2LTJ6bTAgNGgtMnYyaDJ2LTJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnbGluaycsXG4gIHBhdGg6ICdNMi4yOCAxMkEzLjcyMyAzLjcyMyAwIDAxNiA4LjI4aDQuOFY2SDZjLTMuMzEyIDAtNiAyLjY4OC02IDZzMi42ODggNiA2IDZoNC44di0yLjI4SDZBMy43MjMgMy43MjMgMCAwMTIuMjggMTJ6bTQuOTIgMS4yaDkuNnYtMi40SDcuMnYyLjR6TTE4IDZoLTQuOHYyLjI4SDE4QTMuNzIzIDMuNzIzIDAgMDEyMS43MiAxMiAzLjcyMyAzLjcyMyAwIDAxMTggMTUuNzJoLTQuOFYxOEgxOGMzLjMxMiAwIDYtMi42ODggNi02cy0yLjY4OC02LTYtNnonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICd3aW5kb3cnLFxuICBwYXRoOiAnTTMgMTNoOFYzSDN2MTB6bTAgOGg4di02SDN2NnptMTAgMGg4VjExaC04djEwem0wLTE4djZoOFYzaC04eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3Bob25lJyxcbiAgcGF0aDogJ000LjgyNyAxMC4zODdhMjAuMTk4IDIwLjE5OCAwIDAwOC43ODYgOC43ODZsMi45MzQtMi45MzNjLjM2LS4zNi44OTMtLjQ4IDEuMzYtLjMyYTE1LjIxIDE1LjIxIDAgMDA0Ljc2Ljc2Yy43MzMgMCAxLjMzMy42IDEuMzMzIDEuMzMzdjQuNjU0QzI0IDIzLjQgMjMuNCAyNCAyMi42NjcgMjQgMTAuMTQ3IDI0IDAgMTMuODUzIDAgMS4zMzMgMCAuNi42IDAgMS4zMzMgMEg2Yy43MzMgMCAxLjMzMy42IDEuMzMzIDEuMzMzIDAgMS42NjcuMjY3IDMuMjY3Ljc2IDQuNzYuMTQ3LjQ2Ny4wNC45ODctLjMzMyAxLjM2bC0yLjkzMyAyLjkzNHonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICd0YWcnLFxuICB2aWV3Qm94OiAnMCAwIDE4IDE4JyxcbiAgcGF0aDogJ00xNy40NjkgOC42MjJsLTguMS04LjFBMS43ODkgMS43ODkgMCAwMDguMSAwSDEuOEMuODEgMCAwIC44MSAwIDEuOHY2LjNjMCAuNDk1LjE5OC45NDUuNTMxIDEuMjc4bDguMSA4LjFjLjMyNC4zMjQuNzc0LjUyMiAxLjI2OS41MjJhMS43NiAxLjc2IDAgMDAxLjI2OS0uNTMxbDYuMy02LjNBMS43NiAxLjc2IDAgMDAxOCA5LjljMC0uNDk1LS4yMDctLjk1NC0uNTMxLTEuMjc4ek0zLjE1IDQuNWMtLjc0NyAwLTEuMzUtLjYwMy0xLjM1LTEuMzUgMC0uNzQ3LjYwMy0xLjM1IDEuMzUtMS4zNS43NDcgMCAxLjM1LjYwMyAxLjM1IDEuMzUgMCAuNzQ3LS42MDMgMS4zNS0xLjM1IDEuMzV6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnZG9jdW1lbnQnLFxuICBwYXRoOiAnTTQgNkgydjE0YzAgMS4xLjkgMiAyIDJoMTR2LTJINFY2em0xNi00SDhjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoMTJjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnptLTEgOUg5VjloMTB2MnptLTQgNEg5di0yaDZ2MnptNC04SDlWNWgxMHYyeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2NoZXZyb24nLFxuICB2aWV3Qm94OiAnMCAwIDcgOScsXG4gIGNvbXBsZXhDb250ZW50czogYDxnIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEgLTgpXCI+PHBhdGggZD1cIm0yLjY0MTcwMDQgOC0xLjE0MTcwMDQgMS4wNTc1IDMuNzA4NTAyMDIgMy40NDI1LTMuNzA4NTAyMDIgMy40NDI1IDEuMTQxNzAwNCAxLjA1NzUgNC44NTgyOTk2LTQuNXpcIi8+PC9nPmBcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3N1cHBvcnQnLFxuICBwYXRoOiAnTTEyLjUgMkM3LjgxIDIgNCA1LjgxIDQgMTAuNWMwIDQuNjkgMy44MSA4LjUgOC41IDguNWguNXYzYzQuODYtMi4zNCA4LTcgOC0xMS41QzIxIDUuODEgMTcuMTkgMiAxMi41IDJ6bTEgMTQuNWgtMnYtMmgydjJ6bTAtMy41aC0yYzAtMy4yNSAzLTMgMy01IDAtMS4xLS45LTItMi0ycy0yIC45LTIgMmgtMmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0YzAgMi41LTMgMi43NS0zIDV6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAneWV4dCcsXG4gIHZpZXdCb3g6ICcwIDAgMzAgMzAnLFxuICBwYXRoOiAnTTI1LjUxNyAyOC4xNDJ2LjA5NWgtLjIwNHYuOTA1aC0uMDY2di0uOTA1aC0uMTk3di0uMDk1aC40Njd6bS42NjcgMGguMDY2djFoLS4wNjZ2LS44MjVsLS4yNC41OTVoLS4wMTNsLS4yNC0uNTk1di44MjVoLS4wNjZ2LTFoLjA2NmwuMjQ3LjYxLjI0Ni0uNjF6TTE1IDI4LjhjNy42MjIgMCAxMy44LTYuMTc4IDEzLjgtMTMuOCAwLTcuNjIyLTYuMTc4LTEzLjgtMTMuOC0xMy44QzcuMzc4IDEuMiAxLjIgNy4zNzggMS4yIDE1YzAgNy42MjIgNi4xNzggMTMuOCAxMy44IDEzLjh6TTE1IDBjOC4yODQgMCAxNSA2LjcxNiAxNSAxNSAwIDguMjg0LTYuNzE2IDE1LTE1IDE1LTguMjg0IDAtMTUtNi43MTYtMTUtMTVDMCA2LjcxNiA2LjcxNiAwIDE1IDB6bS40NSAxNi42NXYtMS4yaDYuNnYxLjJoLTIuN3Y1LjRoLTEuMnYtNS40aC0yLjd6bS0xLjU5OS0xLjM1bC44NDkuODQ5LTIuNjAxIDIuNjAxIDIuNjAxIDIuNjAxLS44NDkuODQ5LTIuNjAxLTIuNjAxTDguNjQ5IDIyLjJsLS44NDktLjg0OSAyLjYwMS0yLjYwMUw3LjggMTYuMTQ5bC44NDktLjg0OSAyLjYwMSAyLjYwMSAyLjYwMS0yLjYwMXpNMTguNjc1IDlhMi4xNzUgMi4xNzUgMCAwMC0xLjg0NyAzLjMyM2wyLjk5NS0yLjk5NUEyLjE2MyAyLjE2MyAwIDAwMTguNjc1IDl6bTAgNS41NWEzLjM3NSAzLjM3NSAwIDExMi44MzMtNS4yMDlsLTMuNzg5IDMuNzg4YTIuMTc1IDIuMTc1IDAgMDAzLjEzLTEuOTU0aDEuMjAxYTMuMzc1IDMuMzc1IDAgMDEtMy4zNzUgMy4zNzV6bS03LjQyNS0zLjczNEwxMy43OCA3LjhsLjkyLjc3MS0yLjg1IDMuMzk3djIuNTgyaC0xLjJ2LTIuNTgyTDcuOCA4LjU3bC45Mi0uNzcxIDIuNTMgMy4wMTZ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncGluJyxcbiAgdmlld0JveDogJzAgMCAxMyAxOCcsXG4gIHBhdGg6ICdtOS4zNzUgMGMtMy41MjQ0NjQyOSAwLTYuMzc1IDIuODE3LTYuMzc1IDYuMyAwIDQuNzI1IDYuMzc1IDExLjcgNi4zNzUgMTEuN3M2LjM3NS02Ljk3NSA2LjM3NS0xMS43YzAtMy40ODMtMi44NTA1MzU3LTYuMy02LjM3NS02LjN6bS4wMDAwMDAxOCA4LjU1MDAwMDA3Yy0xLjI1Njc4NTc2IDAtMi4yNzY3ODU3OS0xLjAwOC0yLjI3Njc4NTc5LTIuMjVzMS4wMjAwMDAwMy0yLjI1IDIuMjc2Nzg1NzktMi4yNWMxLjI1Njc4NTcyIDAgMi4yNzY3ODU4MiAxLjAwOCAyLjI3Njc4NTgyIDIuMjVzLTEuMDIwMDAwMSAyLjI1LTIuMjc2Nzg1ODIgMi4yNXonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdnZWFyJyxcbiAgcGF0aDogJ00xMiAxMGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bTctN0g1YTIgMiAwIDAwLTIgMnYxNGEyIDIgMCAwMDIgMmgxNGEyIDIgMCAwMDItMlY1YTIgMiAwIDAwLTItMnptLTEuNzUgOWMwIC4yMy0uMDIuNDYtLjA1LjY4bDEuNDggMS4xNmMuMTMuMTEuMTcuMy4wOC40NWwtMS40IDIuNDJjLS4wOS4xNS0uMjcuMjEtLjQzLjE1bC0xLjc0LS43Yy0uMzYuMjgtLjc2LjUxLTEuMTguNjlsLS4yNiAxLjg1Yy0uMDMuMTctLjE4LjMtLjM1LjNoLTIuOGMtLjE3IDAtLjMyLS4xMy0uMzUtLjI5bC0uMjYtMS44NWMtLjQzLS4xOC0uODItLjQxLTEuMTgtLjY5bC0xLjc0LjdjLS4xNi4wNi0uMzQgMC0uNDMtLjE1bC0xLjQtMi40MmEuMzUzLjM1MyAwIDAxLjA4LS40NWwxLjQ4LTEuMTZjLS4wMy0uMjMtLjA1LS40Ni0uMDUtLjY5IDAtLjIzLjAyLS40Ni4wNS0uNjhsLTEuNDgtMS4xNmEuMzUzLjM1MyAwIDAxLS4wOC0uNDVsMS40LTIuNDJjLjA5LS4xNS4yNy0uMjEuNDMtLjE1bDEuNzQuN2MuMzYtLjI4Ljc2LS41MSAxLjE4LS42OWwuMjYtMS44NWMuMDMtLjE3LjE4LS4zLjM1LS4zaDIuOGMuMTcgMCAuMzIuMTMuMzUuMjlsLjI2IDEuODVjLjQzLjE4LjgyLjQxIDEuMTguNjlsMS43NC0uN2MuMTYtLjA2LjM0IDAgLjQzLjE1bDEuNCAyLjQyYy4wOS4xNS4wNS4zNC0uMDguNDVsLTEuNDggMS4xNmMuMDMuMjMuMDUuNDYuMDUuNjl6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnbGlnaHRfYnVsYicsXG4gIHZpZXdCb3g6ICcwIDAgMzIgMzUnLFxuICBwYXRoOiAnTTExLjU4NSAzMS4wNTZsOC4zOC0uNDkzdi0uOTg2bC04LjM4LjQ5M3pNMTEuNTg1IDMzLjAyOEwxNS43NzUgMzVsNC4xOS0xLjk3MlYzMS41NWwtOC4zOC40OTN2Ljk4NnptNi45MjYtLjQwN2wtMi43MzYgMS4yOS0yLjEzLTEuMDA0IDQuODY2LS4yODZ6TTE1Ljc3NSA3LjM5NGMtNC42MyAwLTguMzggMy4yMDUtOC4zOCA4LjM4IDAgNS4xNzcgNC4xOSA2LjkwMiA0LjE5IDEyLjgxOHYuNDkzbDguMzgtLjQ5M2MwLTUuOTE2IDQuMTktOC4xODggNC4xOS0xMi44MTdhOC4zOCA4LjM4IDAgMDAtOC4zOC04LjM4em01LjYxNyAxMy40OGMtMS4wMjUgMS44MzctMi4xNzQgMy44OTItMi4zODEgNi43ODZsLTYuNDQuMzhjLS4xMjktMy4wMS0xLjI5LTUuMDIxLTIuMzItNi44MDgtLjQ5My0uOC0uOTI4LTEuNjM2LTEuMjk5LTIuNWgxMy41NTZjLS4zMjUuNzA4LS43MDQgMS40MDMtMS4xMTYgMi4xNDJ6bTEuNDc5LTMuMTI4SDguNjI3YTcuNzkzIDcuNzkzIDAgMDEtLjI0Ny0xLjk3MWMwLTQuMzUzIDMuMDQyLTcuMzk1IDcuMzk1LTcuMzk1YTcuMzk0IDcuMzk0IDAgMDE3LjM5NCA3LjM5NSA2LjczOSA2LjczOSAwIDAxLS4zIDEuOTcxaC4wMDJ6TTI2LjYyIDE1LjI4Mmg0LjkzdjFoLTQuOTN6TTIzLjA5NCA3Ljc1NmwyLjA5MS0yLjA5MS42OTguNjk3LTIuMDkyIDIuMDkyek0xNS4yODIgMGgxdjQuOTNoLTF6TTUuNjY2IDYuMzYybC42OTctLjY5NyAyLjA5MSAyLjA5MS0uNjk3LjY5N3pNMCAxNS4yODJoNC45M3YxSDB6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncmVjZWlwdCcsXG4gIHZpZXdCb3g6ICcwIDAgMTggMTgnLFxuICBwYXRoOiAnTTguOTkxIDBDNC4wMjMgMCAwIDQuMDMyIDAgOXM0LjAyMyA5IDguOTkxIDlDMTMuOTY4IDE4IDE4IDEzLjk2OCAxOCA5cy00LjAzMi05LTkuMDA5LTl6bTMuODE2IDE0LjRMOSAxMi4xMDUgNS4xOTMgMTQuNGwxLjAwOC00LjMyOS0zLjM1Ny0yLjkwNyA0LjQyOC0uMzc4TDkgMi43bDEuNzI4IDQuMDc3IDQuNDI4LjM3OC0zLjM1NyAyLjkwN3onXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdjbG9zZScsXG4gIGNvbXBsZXhDb250ZW50czogYFxuICAgIDxwYXRoIGQ9XCJNNyA4bDkuNzE2IDkuNzE2bTAtOS43MTZMNyAxNy43MTZcIiBcbiAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCIvPlxuICBgXG59KTtcbiIsImltcG9ydCB0aHVtYkljb24gZnJvbSAnLi90aHVtYi5qcyc7XG5pbXBvcnQgcmVjZWlwdEljb24gZnJvbSAnLi9yZWNlaXB0LmpzJztcbmltcG9ydCBwYW50aGVvbkljb24gZnJvbSAnLi9wYW50aGVvbi5qcyc7XG5pbXBvcnQgbWljSWNvbiBmcm9tICcuL21pYy5qcyc7XG5pbXBvcnQgZGlyZWN0aW9uc0ljb24gZnJvbSAnLi9kaXJlY3Rpb25zLmpzJztcbmltcG9ydCBjYWxlbmRhckljb24gZnJvbSAnLi9jYWxlbmRhci5qcyc7XG5pbXBvcnQgY2FsbG91dEljb24gZnJvbSAnLi9jYWxsb3V0LmpzJztcbmltcG9ydCBpbmZvSWNvbiBmcm9tICcuL2luZm8uanMnO1xuaW1wb3J0IGJyaWVmY2FzZUljb24gZnJvbSAnLi9icmllZmNhc2UuanMnO1xuaW1wb3J0IGthYm9iSWNvbiBmcm9tICcuL2thYm9iLmpzJztcbmltcG9ydCBwZXJzb25JY29uIGZyb20gJy4vcGVyc29uLmpzJztcbmltcG9ydCBtYWduaWZ5aW5nR2xhc3NJY29uIGZyb20gJy4vbWFnbmlmeWluZ19nbGFzcy5qcyc7XG5pbXBvcnQgb2ZmaWNlSWNvbiBmcm9tICcuL29mZmljZS5qcyc7XG5pbXBvcnQgbGlua0ljb24gZnJvbSAnLi9saW5rLmpzJztcbmltcG9ydCB3aW5kb3dJY29uIGZyb20gJy4vd2luZG93LmpzJztcbmltcG9ydCBwaG9uZUljb24gZnJvbSAnLi9waG9uZS5qcyc7XG5pbXBvcnQgdGFnSWNvbiBmcm9tICcuL3RhZy5qcyc7XG5pbXBvcnQgZG9jdW1lbnRJY29uIGZyb20gJy4vZG9jdW1lbnQuanMnO1xuaW1wb3J0IGNoZXZyb25JY29uIGZyb20gJy4vY2hldnJvbi5qcyc7XG5pbXBvcnQgc3VwcG9ydEljb24gZnJvbSAnLi9zdXBwb3J0LmpzJztcbmltcG9ydCB5ZXh0SWNvbiBmcm9tICcuL3lleHQuanMnO1xuaW1wb3J0IHBpbkljb24gZnJvbSAnLi9waW4uanMnO1xuaW1wb3J0IGdlYXJJY29uIGZyb20gJy4vZ2Vhci5qcyc7XG5pbXBvcnQgbGlnaHRCdWxiSWNvbiBmcm9tICcuL2xpZ2h0X2J1bGIuanMnO1xuaW1wb3J0IHN0YXJJY29uIGZyb20gJy4vc3Rhci5qcyc7XG5pbXBvcnQgY2xvc2UgZnJvbSAnLi9jbG9zZS5qcyc7XG5cbmNvbnN0IGljb25zQXJyYXkgPSBbXG4gIHRodW1iSWNvbixcbiAgcmVjZWlwdEljb24sXG4gIHBhbnRoZW9uSWNvbixcbiAgbWljSWNvbixcbiAgZGlyZWN0aW9uc0ljb24sXG4gIGNhbGVuZGFySWNvbixcbiAgY2FsbG91dEljb24sXG4gIGluZm9JY29uLFxuICBicmllZmNhc2VJY29uLFxuICBrYWJvYkljb24sXG4gIHBlcnNvbkljb24sXG4gIG1hZ25pZnlpbmdHbGFzc0ljb24sXG4gIG9mZmljZUljb24sXG4gIGxpbmtJY29uLFxuICB3aW5kb3dJY29uLFxuICBwaG9uZUljb24sXG4gIHRhZ0ljb24sXG4gIGRvY3VtZW50SWNvbixcbiAgY2hldnJvbkljb24sXG4gIHN1cHBvcnRJY29uLFxuICB5ZXh0SWNvbixcbiAgcGluSWNvbixcbiAgZ2Vhckljb24sXG4gIGxpZ2h0QnVsYkljb24sXG4gIGNsb3NlXG5dO1xuXG5jb25zdCBJY29ucyA9IHt9O1xuXG5pY29uc0FycmF5LmZvckVhY2goaWNvbiA9PiB7XG4gIEljb25zW2ljb24ubmFtZV0gPSBpY29uLm1hcmt1cCgpO1xufSk7XG5cbkljb25zLmRlZmF1bHQgPSBzdGFySWNvbi5tYXJrdXAoKTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbnM7XG4iLCIvKiogQG1vZHVsZSBJY29uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBJY29ucyBmcm9tICcuLi8uLi9pY29ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvKipcbiAgICogSWNvbkNvbXBvbmVudFxuICAgKiBAcGFyYW0gb3B0c1xuICAgKiBAcGFyYW0gb3B0cy5pY29uTmFtZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gb3B0cy5jdXN0b21JY29uIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBvcHRzLmljb25Vcmwge3N0cmluZ31cbiAgICovXG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30sIHN5c3RlbU9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMsIHN5c3RlbU9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogbmFtZSBvZiBhbiBpY29uIGZyb20gdGhlIGRlZmF1bHQgaWNvbiBzZXRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuaWNvbk5hbWUgPSBvcHRzLmljb25OYW1lIHx8ICdkZWZhdWx0JztcblxuICAgIC8qKlxuICAgICAqIHRoZSBtYXJrdXAgZm9yIGEgZnVsbHkgY3VzdG9tIGljb25cbiAgICAgKiBAdHlwZSB7KnxudWxsfVxuICAgICAqL1xuICAgIHRoaXMuY3VzdG9tSWNvbiA9IG9wdHMuY3VzdG9tSWNvbiB8fCBudWxsO1xuICAgIC8qKlxuICAgICAqIHRoZSB1cmwgdG8gYSBjdXN0b20gaW1hZ2UgaWNvblxuICAgICAqIEB0eXBlIHtudWxsfVxuICAgICAqL1xuICAgIHRoaXMuaWNvblVybCA9IG9wdHMuaWNvblVybCB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldHRlciBmb3IgdGhlIGltYWdlIHBhc3RlZCB0byBoYW5kbGViYXJzXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgaW1hZ2UgKCkge1xuICAgIGlmICh0aGlzLmN1c3RvbUljb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmN1c3RvbUljb247XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaWNvblVybCkge1xuICAgICAgcmV0dXJuIGA8aW1nIHNyYz1cIiR7dGhpcy5pY29uVXJsfVwiIGFsdD1cIlwiIGNsYXNzPVwiSWNvbi1pbWFnZVwiPmA7XG4gICAgfVxuXG4gICAgaWYgKEljb25zW3RoaXMuaWNvbk5hbWVdKSB7XG4gICAgICByZXR1cm4gSWNvbnNbdGhpcy5pY29uTmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIEljb25zLmRlZmF1bHQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnSWNvbkNvbXBvbmVudCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ2ljb25zL2ljb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIGFsbG93aW5nIGR1cGxpY2F0ZXNcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogb3ZlcnJpZGVzIGRlZmF1bHQgZnVuY3Rpb25hbGl0eSB0byBwcm92aWRlIG5hbWUgYW5kIG1hcmt1cFxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7SWNvbkNvbXBvbmVudH1cbiAgICovXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICBuYW1lOiB0aGlzLmljb25OYW1lID8gdGhpcy5pY29uTmFtZSA6ICdjdXN0b20nXG4gICAgfSkpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tICcuL2NvbXBvbmVudG1hbmFnZXInO1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcblxuaW1wb3J0IE5hdmlnYXRpb25Db21wb25lbnQgZnJvbSAnLi9uYXZpZ2F0aW9uL25hdmlnYXRpb25jb21wb25lbnQnO1xuXG5pbXBvcnQgU2VhcmNoQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL3NlYXJjaGNvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyU2VhcmNoQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL2ZpbHRlcnNlYXJjaGNvbXBvbmVudCc7XG5pbXBvcnQgQXV0b0NvbXBsZXRlQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL2F1dG9jb21wbGV0ZWNvbXBvbmVudCc7XG5pbXBvcnQgU3BlbGxDaGVja0NvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9zcGVsbGNoZWNrY29tcG9uZW50JztcblxuaW1wb3J0IEZpbHRlckJveENvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZmlsdGVyYm94Y29tcG9uZW50JztcbmltcG9ydCBGaWx0ZXJPcHRpb25zQ29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9maWx0ZXJvcHRpb25zY29tcG9uZW50JztcbmltcG9ydCBSYW5nZUZpbHRlckNvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvcmFuZ2VmaWx0ZXJjb21wb25lbnQnO1xuaW1wb3J0IERhdGVSYW5nZUZpbHRlckNvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZGF0ZXJhbmdlZmlsdGVyY29tcG9uZW50JztcbmltcG9ydCBEeW5hbWljRmlsdGVyc0NvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZHluYW1pY2ZpbHRlcnNjb21wb25lbnQnO1xuaW1wb3J0IEdlb0xvY2F0aW9uQ29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9nZW9sb2NhdGlvbmNvbXBvbmVudCc7XG5cbmltcG9ydCBEaXJlY3RBbnN3ZXJDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2RpcmVjdGFuc3dlcmNvbXBvbmVudCc7XG5pbXBvcnQgUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcmVzdWx0c2NvbXBvbmVudCc7XG5pbXBvcnQgQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvYWNjb3JkaW9ucmVzdWx0c2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvdW5pdmVyc2FscmVzdWx0c2NvbXBvbmVudCc7XG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2xvY2F0aW9ucmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2V2ZW50cmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5pbXBvcnQgUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Blb3BsZXJlc3VsdHNpdGVtY29tcG9uZW50JztcblxuaW1wb3J0IE1hcENvbXBvbmVudCBmcm9tICcuL21hcC9tYXBjb21wb25lbnQnO1xuaW1wb3J0IFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCBmcm9tICcuL3F1ZXN0aW9ucy9xdWVzdGlvbnN1Ym1pc3Npb25jb21wb25lbnQnO1xuXG5pbXBvcnQgSWNvbkNvbXBvbmVudCBmcm9tICcuL2ljb25zL2ljb25jb21wb25lbnQuanMnO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX01BTkFHRVIgPSBuZXcgQ29tcG9uZW50TWFuYWdlcigpXG4vLyBDb3JlIENvbXBvbmVudFxuICAucmVnaXN0ZXIoQ29tcG9uZW50KVxuXG4vLyBOYXZpZ2F0aW9uIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKE5hdmlnYXRpb25Db21wb25lbnQpXG5cbi8vIFNlYXJjaCBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihTZWFyY2hDb21wb25lbnQpXG4gIC5yZWdpc3RlcihGaWx0ZXJTZWFyY2hDb21wb25lbnQpXG4gIC5yZWdpc3RlcihBdXRvQ29tcGxldGVDb21wb25lbnQpXG4gIC5yZWdpc3RlcihTcGVsbENoZWNrQ29tcG9uZW50KVxuXG4vLyBGaWx0ZXIgQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoRmlsdGVyQm94Q29tcG9uZW50KVxuICAucmVnaXN0ZXIoRmlsdGVyT3B0aW9uc0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFJhbmdlRmlsdGVyQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRGF0ZVJhbmdlRmlsdGVyQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRHluYW1pY0ZpbHRlcnNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihHZW9Mb2NhdGlvbkNvbXBvbmVudClcblxuLy8gUmVzdWx0cyBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihEaXJlY3RBbnN3ZXJDb21wb25lbnQpXG4gIC5yZWdpc3RlcihVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoUmVzdWx0c0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFJlc3VsdHNJdGVtQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQpXG4gIC5yZWdpc3RlcihFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQpXG5cbiAgLnJlZ2lzdGVyKE1hcENvbXBvbmVudClcblxuLy8gUXVlc3Rpb25zIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudClcblxuLy8gSGVscGVyIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKEljb25Db21wb25lbnQpO1xuIiwiLyoqIEBtb2R1bGUgVGVtcGxhdGVMb2FkZXIgKi9cblxuaW1wb3J0IERPTSBmcm9tICcuLi9kb20vZG9tJztcbmltcG9ydCB7IENPTVBJTEVEX1RFTVBMQVRFU19VUkwgfSBmcm9tICcuLi8uLi9jb3JlL2NvbnN0YW50cyc7XG5cbi8qKlxuICogVGVtcGxhdGVMb2FkZXIgZXhwb3NlcyBhbiBpbnRlcmZhY2UgZm9yIGxvYWRpbmcgdGVtcGxhdGVzIGFzeW5jaHJvbm91c2x5XG4gKiBmcm9tIHRoZSBzZXJ2ZXIgYW5kIHJlZ2lzdGVycyB0aGVtIHdpdGggdGhlIHByb3BlciByZW5kZXJlci5cbiAqIEl0IGFsc28gYWxsb3dzIHlvdSB0byBhc3NpZ24gdGhlbSBzeW5jaHJvbm91c2x5LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZUxvYWRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBpZiAoIVRlbXBsYXRlTG9hZGVyLnNldEluc3RhbmNlKHRoaXMpKSB7XG4gICAgICByZXR1cm4gVGVtcGxhdGVMb2FkZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgdXJsIHRvIGZldGNoIGNvbXBpbGVkIHRlbXBsYXRlcyBmcm9tXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlVXJsID0gY29uZmlnLnRlbXBsYXRlVXJsIHx8IENPTVBJTEVEX1RFTVBMQVRFU19VUkw7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB7fTtcbiAgICB0aGlzLl9vbkxvYWRlZCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHRoaXMuX2luaXQoKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRJbnN0YW5jZSAoaW5zdGFuY2UpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UgKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgX2luaXQgKCkge1xuICAgIHRoaXMuZmV0Y2hUZW1wbGF0ZXMoKTtcbiAgfVxuXG4gIGZldGNoVGVtcGxhdGVzICgpIHtcbiAgICAvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgdGVtcGxhdGVzIGxvYWRlZCwgZG8gbm90aGluZ1xuICAgIGxldCBub2RlID0gRE9NLnF1ZXJ5KCcjeWV4dC1hbnN3ZXJzLXRlbXBsYXRlcycpO1xuICAgIGlmIChub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSW5qZWN0IGEgc2NyaXB0IHRvIGZldGNoIHRoZSBjb21waWxlZCB0ZW1wbGF0ZXMsXG4gICAgLy8gd3JhcHBpbmcgaXQgYSBQcm9taXNlIGZvciBjbGVhbmxpbmVzc1xuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBzY3JpcHQgPSBET00uY3JlYXRlRWwoJ3NjcmlwdCcsIHtcbiAgICAgICAgaWQ6ICd5ZXh0LWFuc3dlcnMtdGVtcGxhdGVzJyxcbiAgICAgICAgb25sb2FkOiByZXNvbHZlLFxuICAgICAgICBvbmVycm9yOiByZWplY3QsXG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBzcmM6IHRoaXMuX3RlbXBsYXRlVXJsXG4gICAgICB9KTtcblxuICAgICAgRE9NLmFwcGVuZCgnYm9keScsIHNjcmlwdCk7XG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgLy8gVE9ETyhiaWxseSkgSW1wbG1lbmV0IGVycm9yIGhhbmRsaW5nIGhlcmUgKGUuZy4gcmVxdWVzdCBjb3VsZCBmYWlsKVxuICAgICAgICBjb25zb2xlLmxvZygnVGVtcGxhdGVzIGxvYWRlZCBzdWNjZXNzZnVsbHkhJyk7XG4gICAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZWdpc3RlciB0aGUgdGVtcGxhdGVzIGludGVybmFsbHkgc28gdGhhdCB0aGV5IGNhbiBiZSBsYXRlciBjb25zdW1lZFxuICAgKiAoZS5nLiBieSBjb21wb25lbnRzIGFuZCByZW5kZXJlcnMpIHdpdGggY29udmllbmllbmNlLlxuICAgKlxuICAgKiBgZmV0Y2hUZW1wbGF0ZXNgIHdpbGwgYXV0b21hdGljYWxseSBjYWxsIHRoaXMsIHByb3ZpZGluZyB0aGUgY29tcGlsZWQgdGVtcGxhdGVzIGZyb20gdGhlIHNlcnZlci5cbiAgICovXG4gIHJlZ2lzdGVyICh0ZW1wbGF0ZXMpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXM7XG5cbiAgICAvLyBOb3RpZnkgb3VyIGNvbnN1bWVycyB0aGF0IHRoZSB0ZW1wbGF0ZXMgYXJlIGhlcmUgOilcbiAgICB0aGlzLl9vbkxvYWRlZCh0aGlzLl90ZW1wbGF0ZXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb25Mb2FkZWQgKGNiKSB7XG4gICAgdGhpcy5fb25Mb2FkZWQgPSBjYjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCAodGVtcGxhdGVOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlc1t0ZW1wbGF0ZU5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4gVGhlIGludGVybmFsIHRlbXBsYXRlIGNvbGxlY3Rpb25cbiAgICovXG4gIGdldFRlbXBsYXRlcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlcztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuZXhwb3J0IHsgQ09NUE9ORU5UX01BTkFHRVIgfSBmcm9tICcuL2NvbXBvbmVudHMvY29uc3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBET00gfSBmcm9tICcuL2RvbS9kb20nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2hQYXJhbXMgfSBmcm9tICcuL2RvbS9zZWFyY2hwYXJhbXMnO1xuXG5leHBvcnQgeyBSZW5kZXJlcnMgfSBmcm9tICcuL3JlbmRlcmluZy9jb25zdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRlbXBsYXRlTG9hZGVyIH0gZnJvbSAnLi9yZW5kZXJpbmcvdGVtcGxhdGVsb2FkZXInO1xuIiwiLyoqIEBtb2R1bGUgRXJyb3JSZXBvcnRlciAqL1xuXG5pbXBvcnQgeyBBbnN3ZXJzQmFzZUVycm9yIH0gZnJvbSAnLi9lcnJvcnMnO1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IHsgTElCX1ZFUlNJT04gfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEVycm9yUmVwb3J0ZXIgaXMgdXNlZCBmb3IgcmVwb3J0aW5nIGVycm9ycyB0byB0aGUgY29uc29sZSBhbmQgc2VydmVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yUmVwb3J0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGFwaUtleSB0byB1c2UgZm9yIHJlcG9ydGluZ1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5hcGlLZXkgPSBjb25maWcuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGV4cGVyaWVuY2VLZXkgdG8gdXNlIHdoZW4gcmVwb3J0aW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmV4cGVyaWVuY2VLZXkgPSBjb25maWcuZXhwZXJpZW5jZUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhbnN3ZXJzIGNvbmZpZyB2ZXJzaW9uIHVzZWQgZm9yIGFwaSByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuZXhwZXJpZW5jZVZlcnNpb24gPSBjb25maWcuZXhwZXJpZW5jZVZlcnNpb24gfHwgJ2NvbmZpZzEuMCc7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBwcmludCBlbnRpcmUgZXJyb3Igb2JqZWN0cyB0byB0aGUgY29uc29sZSBmb3IgaW5zcGVjdGlvblxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucHJpbnRWZXJib3NlID0gY29uZmlnLnByaW50VmVyYm9zZTtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHJlcG9ydCB0aGUgZXJyb3IgdGhlIHNlcnZlciBmb3IgbG9nZ2luZyBhbmQgbW9uaXRvcmluZ1xuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuc2VuZFRvU2VydmVyID0gY29uZmlnLnNlbmRUb1NlcnZlcjtcblxuICAgIC8vIEF0dGFjaCByZXBvcnRpbmcgbGlzdGVuZXJzIHRvIHdpbmRvd1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGUgPT4gdGhpcy5yZXBvcnQoZS5lcnJvcikpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmhhbmRsZWRyZWplY3Rpb24nLCBlID0+IHRoaXMucmVwb3J0KGUuZXJyb3IpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXBvcnQgcHJldHR5IHByaW50cyB0aGUgZXJyb3IgdG8gdGhlIGNvbnNvbGUsIG9wdGlvbmFsbHlcbiAgICogcHJpbnRzIHRoZSBlbnRpcmUgZXJyb3IgaWYgYHByaW50VmVyYm9zZWAgaXMgdHJ1ZSwgYW5kIHNlbmRzIHRoZVxuICAgKiBlcnJvciB0byB0aGUgc2VydmVyIHRvIGJlIGxvZ2dlZCBpZiBgc2VuZFRvU2VydmVyYCBpcyB0cnVlXG4gICAqIEBwYXJhbSB7QW5zd2Vyc0Jhc2VFcnJvcn0gZXJyIFRoZSBlcnJvciB0byBiZSByZXBvcnRlZFxuICAgKiBAcmV0dXJucyB7QW5zd2Vyc0Jhc2VFcnJvcn0gVGhlIHJlcG9ydGVkIGVycm9yXG4gICAqL1xuICByZXBvcnQgKGVycikge1xuICAgIGlmICghKGVyciBpbnN0YW5jZW9mIEFuc3dlcnNCYXNlRXJyb3IpIHx8IGVyci5yZXBvcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVyci5yZXBvcnRlZCA9IHRydWU7XG5cbiAgICB0aGlzLnByaW50RXJyb3IoZXJyKTtcblxuICAgIGlmICh0aGlzLnNlbmRUb1NlcnZlcikge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9lcnJvcnMnLFxuICAgICAgICBhcGlLZXk6IHRoaXMuYXBpS2V5LFxuICAgICAgICB2ZXJzaW9uOiAyMDE5MDMwMSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgJ2Vycm9yJzogZXJyLnRvSnNvbigpLFxuICAgICAgICAgICdsaWJWZXJzaW9uJzogTElCX1ZFUlNJT04sXG4gICAgICAgICAgJ2V4cGVyaWVuY2VWZXJzaW9uJzogdGhpcy5leHBlcmllbmNlVmVyc2lvbixcbiAgICAgICAgICAnZXhwZXJpZW5jZUtleSc6IHRoaXMuZXhwZXJpZW5jZUtleVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVxdWVzdC5nZXQoKVxuICAgICAgICAuY2F0Y2goY29uc29sZS5lcnIpO1xuICAgIH1cblxuICAgIHJldHVybiBlcnI7XG4gIH1cblxuICAvKipcbiAgICogcHJpbnRzIHRoZSBnaXZlbiBlcnJvciB0byB0aGUgYnJvd3NlciBjb25zb2xlXG4gICAqIEBwYXJhbSB7QW5zd2Vyc0Jhc2VFcnJvcn0gZXJyIFRoZSBlcnJvciB0byBiZSBwcmludGVkXG4gICAqL1xuICBwcmludEVycm9yIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVyci50b1N0cmluZygpKTtcbiAgICBpZiAodGhpcy5wcmludFZlcmJvc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKHsgLi4uZXJyIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi9kb20vc2VhcmNocGFyYW1zJztcbmltcG9ydCB7IEFuc3dlcnNTdG9yYWdlRXJyb3IgfSBmcm9tICcuLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuXG4vKiogQG1vZHVsZSBQZXJzaXN0ZW50U3RvcmFnZSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzaXN0ZW50U3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHBhcmFtcyBtb2RlbFxuICAgICAqIEB0eXBlIHtTZWFyY2hQYXJhbXN9XG4gICAgICovXG4gICAgdGhpcy5fcGFyYW1zID0gbmV3IFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBoaXN0b3J5IGVkaXQgdGltZXIsIGlmIGFueVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5faGlzdG9yeVRpbWVyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGxpc3RlbmVycyB0byBldmVyeSBzdG9yYWdlIHVwZGF0ZVxuICAgICAqIEB0eXBlIHtmdW5jdGlvbltdfVxuICAgICAqL1xuICAgIHRoaXMuX3VwZGF0ZUxpc3RlbmVyID0gY29uZmlnLnVwZGF0ZUxpc3RlbmVyIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxpc3Qgb2YgbGlzdGVuZXJzIHRvIHN0b3JhZ2UgcmVzZXRzXG4gICAgICogQHR5cGUge2Z1bmN0aW9uW119XG4gICAgICovXG4gICAgdGhpcy5fcmVzZXRMaXN0ZW5lciA9IGNvbmZpZy5yZXNldExpc3RlbmVyIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgd2luZG93Lm9ucG9wc3RhdGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9wYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICAgIHRoaXMuX2NhbGxMaXN0ZW5lcih0aGlzLl91cGRhdGVMaXN0ZW5lcik7XG4gICAgICB0aGlzLl9jYWxsTGlzdGVuZXIodGhpcy5fcmVzZXRMaXN0ZW5lcik7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnQgdGhlIGdpdmVuIGtleS92YWx1ZSBwYWlyIGludG8gc3RvcmFnZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgdG8gaW5zZXJ0IHRoZSBkYXRhIGluXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUgZGF0YSB0byBpbnNlcnRcbiAgICovXG4gIHNldCAoa2V5LCBkYXRhKSB7XG4gICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc1N0b3JhZ2VFcnJvcignU3RvcmFnZSBkYXRhIGtleSBtdXN0IGJlIGEgc3RyaW5nJywga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICBsZXQgbmV3RGF0YSA9IGRhdGE7XG4gICAgaWYgKHR5cGVvZiBkYXRhICE9PSAnc3RyaW5nJykge1xuICAgICAgbmV3RGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICB0aGlzLl9wYXJhbXMuc2V0KGtleSwgbmV3RGF0YSk7XG4gICAgdGhpcy5fdXBkYXRlSGlzdG9yeSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSB0aGUgZ2l2ZW4ga2V5IGZyb20gc3RvcmFnZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgdG8gZGVsZXRlXG4gICAqL1xuICBkZWxldGUgKGtleSkge1xuICAgIHRoaXMuX3BhcmFtcy5kZWxldGUoa2V5KTtcbiAgICB0aGlzLl91cGRhdGVIaXN0b3J5KCk7XG4gIH1cblxuICBfdXBkYXRlSGlzdG9yeSAoKSB7XG4gICAgaWYgKHRoaXMuX2hpc3RvcnlUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2hpc3RvcnlUaW1lcik7XG4gICAgfVxuXG4gICAgLy8gYmF0Y2ggdXBkYXRlIGNhbGxzIGFjcm9zcyBjb21wb25lbnRzIHRvIGF2b2lkIHVwZGF0aW5nIHRoZSB1cmwgdG9vIG11Y2hcbiAgICB0aGlzLl9oaXN0b3J5VGltZXIgPSBzZXRUaW1lb3V0KFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLl9oaXN0b3J5VGltZXIgPSBudWxsO1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgYD8ke3RoaXMuX3BhcmFtcy50b1N0cmluZygpfWApO1xuICAgICAgICB0aGlzLl9jYWxsTGlzdGVuZXIodGhpcy5fdXBkYXRlTGlzdGVuZXIpO1xuICAgICAgfSxcbiAgICAgIDEwMCk7XG4gIH1cblxuICAvKipcbiAgICogSW52b2tlIHRoZSBnaXZlbiBsaXN0IG9mIGNhbGxiYWNrcyB3aXRoIHRoZSBjdXJyZW50IHN0b3JhZ2UgZGF0YVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uW119IGxpc3RlbmVycyBUaGUgY2FsbGJhY2tzIHRvIGludm9rZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NhbGxMaXN0ZW5lciAobGlzdGVuZXIpIHtcbiAgICBsaXN0ZW5lcih0aGlzLmdldEFsbCgpLCB0aGlzLl9wYXJhbXMudG9TdHJpbmcoKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCB0aGUga2V5L3ZhbHVlIHBhaXJzIGluIHN0b3JhZ2VcbiAgICovXG4gIGdldEFsbCAoKSB7XG4gICAgY29uc3QgYWxsUGFyYW1zID0ge307XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIHRoaXMuX3BhcmFtcy5lbnRyaWVzKCkpIHtcbiAgICAgIGFsbFBhcmFtc1trZXldID0gdmFsO1xuICAgIH1cbiAgICByZXR1cm4gYWxsUGFyYW1zO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5pbXBvcnQgQ29yZSBmcm9tICcuL2NvcmUvY29yZSc7XG5cbmltcG9ydCB7XG4gIFRlbXBsYXRlTG9hZGVyLFxuICBDT01QT05FTlRfTUFOQUdFUixcbiAgUmVuZGVyZXJzLFxuICBET01cbn0gZnJvbSAnLi91aS9pbmRleCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vdWkvY29tcG9uZW50cy9jb21wb25lbnQnO1xuXG5pbXBvcnQgRXJyb3JSZXBvcnRlciBmcm9tICcuL2NvcmUvZXJyb3JzL2Vycm9ycmVwb3J0ZXInO1xuaW1wb3J0IHsgQW5hbHl0aWNzUmVwb3J0ZXIgfSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0IFBlcnNpc3RlbnRTdG9yYWdlIGZyb20gJy4vdWkvc3RvcmFnZS9wZXJzaXN0ZW50c3RvcmFnZSc7XG5pbXBvcnQgR2xvYmFsU3RvcmFnZSBmcm9tICcuL2NvcmUvc3RvcmFnZS9nbG9iYWxzdG9yYWdlJztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBBbmFseXRpY3NFdmVudCBmcm9tICcuL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcblxuLyoqXG4gKiBUaGUgbWFpbiBBbnN3ZXJzIGludGVyZmFjZVxuICovXG5jbGFzcyBBbnN3ZXJzIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIGlmICghQW5zd2Vycy5zZXRJbnN0YW5jZSh0aGlzKSkge1xuICAgICAgcmV0dXJuIEFuc3dlcnMuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgQ29tcG9uZW50IGJhc2UgY2xhc3MgZm9yIGN1c3RvbVxuICAgICAqIGNvbXBvbmVudHMgdG8gZXh0ZW5kXG4gICAgICovXG4gICAgdGhpcy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSBvZiB0aGUgcmVuZGVyZXIgdG8gdXNlIGZvciB0aGUgY29tcG9uZW50c1xuICAgICAqIFRoaXMgaXMgcHJvdmlkZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uLlxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVycy5IYW5kbGViYXJzKCk7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IG1hbmFnZXJcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50TWFuYWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbXBvbmVudHMgPSBDT01QT05FTlRfTUFOQUdFUjtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb3JlIGFwaVxuICAgICAqIEB0eXBlIHtDb3JlfVxuICAgICAqL1xuICAgIHRoaXMuY29yZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGludm9rZSBvbmNlIHRoZSBsaWJyYXJ5IGlzIHJlYWR5LlxuICAgICAqIFR5cGljYWxseSBmaXJlZCBhZnRlciB0ZW1wbGF0ZXMgYXJlIGZldGNoZWQgZnJvbSBzZXJ2ZXIgZm9yIHJlbmRlcmluZy5cbiAgICAgKi9cbiAgICB0aGlzLl9vblJlYWR5ID0gZnVuY3Rpb24gKCkge307XG4gIH1cblxuICBzdGF0aWMgc2V0SW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIGluaXQgKGNvbmZpZykge1xuICAgIGNvbnN0IGdsb2JhbFN0b3JhZ2UgPSBuZXcgR2xvYmFsU3RvcmFnZSgpO1xuICAgIGNvbnN0IHBlcnNpc3RlbnRTdG9yYWdlID0gbmV3IFBlcnNpc3RlbnRTdG9yYWdlKHtcbiAgICAgIHVwZGF0ZUxpc3RlbmVyOiBjb25maWcub25TdGF0ZUNoYW5nZSxcbiAgICAgIHJlc2V0TGlzdGVuZXI6IGRhdGEgPT4gZ2xvYmFsU3RvcmFnZS5zZXRBbGwoZGF0YSlcbiAgICB9KTtcbiAgICBnbG9iYWxTdG9yYWdlLnNldEFsbChwZXJzaXN0ZW50U3RvcmFnZS5nZXRBbGwoKSk7XG5cbiAgICB0aGlzLmNvcmUgPSBuZXcgQ29yZSh7XG4gICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgICBnbG9iYWxTdG9yYWdlOiBnbG9iYWxTdG9yYWdlLFxuICAgICAgcGVyc2lzdGVudFN0b3JhZ2U6IHBlcnNpc3RlbnRTdG9yYWdlLFxuICAgICAgZXhwZXJpZW5jZUtleTogY29uZmlnLmV4cGVyaWVuY2VLZXksXG4gICAgICBmaWVsZEZvcm1hdHRlcnM6IGNvbmZpZy5maWVsZEZvcm1hdHRlcnMsXG4gICAgICBleHBlcmllbmNlVmVyc2lvbjogY29uZmlnLmV4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgbG9jYWxlOiBjb25maWcubG9jYWxlXG4gICAgfSk7XG5cbiAgICBpZiAoY29uZmlnLm9uU3RhdGVDaGFuZ2UgJiYgdHlwZW9mIGNvbmZpZy5vblN0YXRlQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25maWcub25TdGF0ZUNoYW5nZShwZXJzaXN0ZW50U3RvcmFnZS5nZXRBbGwoKSwgd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSkpO1xuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1xuICAgICAgLnNldENvcmUodGhpcy5jb3JlKVxuICAgICAgLnNldFJlbmRlcmVyKHRoaXMucmVuZGVyZXIpO1xuXG4gICAgaWYgKGNvbmZpZy5idXNpbmVzc0lkKSB7XG4gICAgICBjb25zdCByZXBvcnRlciA9IG5ldyBBbmFseXRpY3NSZXBvcnRlcihcbiAgICAgICAgdGhpcy5jb3JlLFxuICAgICAgICBjb25maWcuZXhwZXJpZW5jZUtleSxcbiAgICAgICAgY29uZmlnLmV4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgICBjb25maWcuYnVzaW5lc3NJZCxcbiAgICAgICAgY29uZmlnLmFuYWx5dGljc09wdGlvbnMpO1xuXG4gICAgICB0aGlzLmNvbXBvbmVudHMuc2V0QW5hbHl0aWNzUmVwb3J0ZXIocmVwb3J0ZXIpO1xuICAgICAgaW5pdFNjcm9sbExpc3RlbmVyKHJlcG9ydGVyKTtcbiAgICB9XG5cbiAgICB0aGlzLl9vblJlYWR5ID0gY29uZmlnLm9uUmVhZHkgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICBpZiAoY29uZmlnLnVzZVRlbXBsYXRlcyA9PT0gZmFsc2UgfHwgY29uZmlnLnRlbXBsYXRlQnVuZGxlKSB7XG4gICAgICBpZiAoY29uZmlnLnRlbXBsYXRlQnVuZGxlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5pdChjb25maWcudGVtcGxhdGVCdW5kbGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9vblJlYWR5KCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBUZW1wbGF0ZXMgYXJlIGN1cnJlbnRseSBkb3dubG9hZGVkIHNlcGFyYXRlbHkgZnJvbSB0aGUgQ09SRSBhbmQgVUkgYnVuZGxlLlxuICAgIC8vIEZ1dHVyZSBlbmhhbmNlbWVudCBpcyB0byBzaGlwIHRoZSBjb21wb25lbnRzIHdpdGggdGVtcGxhdGVzIGluIGEgc2VwYXJhdGUgYnVuZGxlLlxuICAgIHRoaXMudGVtcGxhdGVzID0gbmV3IFRlbXBsYXRlTG9hZGVyKHtcbiAgICAgIHRlbXBsYXRlVXJsOiBjb25maWcudGVtcGxhdGVVcmxcbiAgICB9KS5vbkxvYWRlZCgodGVtcGxhdGVzKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmluaXQodGVtcGxhdGVzKTtcblxuICAgICAgdGhpcy5fb25SZWFkeSgpO1xuICAgIH0pO1xuXG4gICAgLy8gUmVwb3J0IGVycm9ycyB0byBjb25zb2xlICYgc2VydmVyXG4gICAgdGhpcy5fZXJyb3JSZXBvcnRlciA9IG5ldyBFcnJvclJlcG9ydGVyKHtcbiAgICAgIGFwaUtleTogY29uZmlnLmFwaUtleSxcbiAgICAgIGV4cGVyaWVuY2VLZXk6IGNvbmZpZy5leHBlcmllbmNlS2V5LFxuICAgICAgZXhwZXJpZW5jZVZlcnNpb246IGNvbmZpZy5leHBlcmllbmNlVmVyc2lvbixcbiAgICAgIHByaW50VmVyYm9zZTogY29uZmlnLmRlYnVnLFxuICAgICAgc2VuZFRvU2VydmVyOiAhY29uZmlnLnN1cHByZXNzRXJyb3JSZXBvcnRzXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRvbVJlYWR5IChjYikge1xuICAgIERPTS5vblJlYWR5KGNiKTtcbiAgfVxuXG4gIG9uUmVhZHkgKGNiKSB7XG4gICAgdGhpcy5fb25SZWFkeSA9IGNiO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgY3VzdG9tIGNvbXBvbmVudCB0eXBlIHNvIGl0IGNhbiBiZSBjcmVhdGVkIHZpYVxuICAgKiBhZGRDb21wb25lbnQgYW5kIHVzZWQgYXMgYSBjaGlsZCBjb21wb25lbnRcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudENsYXNzXG4gICAqL1xuICByZWdpc3RlckNvbXBvbmVudFR5cGUgKGNvbXBvbmVudENsYXNzKSB7XG4gICAgdGhpcy5jb21wb25lbnRzLnJlZ2lzdGVyKGNvbXBvbmVudENsYXNzKTtcbiAgfVxuXG4gIGFkZENvbXBvbmVudCAodHlwZSwgb3B0cykge1xuICAgIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdHMgPSB7XG4gICAgICAgIGNvbnRhaW5lcjogb3B0c1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5jb21wb25lbnRzLmNyZWF0ZSh0eXBlLCBvcHRzKS5tb3VudCgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoJ0ZhaWxlZCB0byBhZGQgY29tcG9uZW50JywgdHlwZSwgZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgY29tcG9uZW50IC0gYW5kIGFsbCBvZiBpdHMgY2hpbGRyZW4gLSB3aXRoIHRoZSBnaXZlbiBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBjb21wb25lbnQgdG8gcmVtb3ZlXG4gICAqL1xuICByZW1vdmVDb21wb25lbnQgKG5hbWUpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMucmVtb3ZlQnlOYW1lKG5hbWUpO1xuICB9XG5cbiAgY3JlYXRlQ29tcG9uZW50IChvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50cy5jcmVhdGUoJ0NvbXBvbmVudCcsIG9wdHMpLm1vdW50KCk7XG4gIH1cblxuICByZWdpc3RlckhlbHBlciAobmFtZSwgY2IpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlZ2lzdGVySGVscGVyKG5hbWUsIGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIHNjcm9sbCBldmVudCBsaXN0ZW5lciB0byBzZW5kIGFuYWx5dGljcyBldmVudHNcbiAqIHdoZW4gdGhlIHVzZXIgc2Nyb2xscyB0byB0aGUgYm90dG9tLiBEZWJvdW5jZXMgc2Nyb2xsIGV2ZW50cyBzb1xuICogdGhleSBhcmUgcHJvY2Vzc2VkIGFmdGVyIHRoZSB1c2VyIHN0b3BzIHNjcm9sbGluZ1xuICovXG5mdW5jdGlvbiBpbml0U2Nyb2xsTGlzdGVuZXIgKHJlcG9ydGVyKSB7XG4gIGNvbnN0IERFQk9VTkNFX1RJTUUgPSAxMDA7XG4gIGxldCB0aW1lb3V0ID0gbnVsbDtcblxuICBjb25zdCBzZW5kRXZlbnQgPSAoKSA9PiB7XG4gICAgaWYgKCh3aW5kb3cuaW5uZXJIZWlnaHQgKyB3aW5kb3cucGFnZVlPZmZzZXQpID49IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBBbmFseXRpY3NFdmVudCgnU0NST0xMX1RPX0JPVFRPTV9PRl9QQUdFJyk7XG4gICAgICByZXBvcnRlci5yZXBvcnQoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KHNlbmRFdmVudCwgREVCT1VOQ0VfVElNRSk7XG4gIH0pO1xufVxuXG5jb25zdCBBTlNXRVJTID0gbmV3IEFuc3dlcnMoKTtcbmV4cG9ydCBkZWZhdWx0IEFOU1dFUlM7XG4iXSwibmFtZXMiOlsiTWV0aG9kcyIsIkdFVCIsIlBPU1QiLCJQVVQiLCJERUxFVEUiLCJIdHRwUmVxdWVzdGVyIiwidXJsIiwiZGF0YSIsIm9wdHMiLCJyZXF1ZXN0IiwiZW5jb2RlUGFyYW1zIiwiT2JqZWN0IiwiYXNzaWduIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjcmVkZW50aWFscyIsInVuZGVmaW5lZCIsIm1ldGhvZCIsImZldGNoIiwibmF2aWdhdG9yIiwic2VuZEJlYWNvbiIsInBhcmFtcyIsImhhc1BhcmFtIiwiaW5kZXhPZiIsInNlYXJjaFF1ZXJ5Iiwia2V5IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiTElCX1ZFUlNJT04iLCJBUElfQkFTRV9VUkwiLCJDT01QSUxFRF9URU1QTEFURVNfVVJMIiwiQU5BTFlUSUNTX0JBU0VfVVJMIiwiU2VhcmNoUGFyYW1zIiwiX3BhcmFtcyIsIndpbmRvdyIsIlVSTFNlYXJjaFBhcmFtcyIsInBhcnNlIiwic2VhcmNoIiwic2xpY2UiLCJlbmNvZGVkUGFyYW1zIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwia2V5VmFsIiwiZGVjb2RlIiwicXVlcnkiLCJTdHJpbmciLCJuYW1lIiwidmFsdWUiLCJzdHJpbmciLCJwdXNoIiwiZW5jb2RlIiwiam9pbiIsImVudHJpZXMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwibWF0Y2giLCJBcGlSZXF1ZXN0IiwiX3JlcXVlc3RlciIsIl9iYXNlVXJsIiwiYmFzZVVybCIsIl9lbmRwb2ludCIsImVuZHBvaW50IiwiX2FwaUtleSIsImFwaUtleSIsIl92ZXJzaW9uIiwidmVyc2lvbiIsImdldCIsInBvc3QiLCJiYXNlUGFyYW1zIiwidXJsUGFyYW1zIiwibG9jYXRpb24iLCJzdWJzdHJpbmciLCJoYXMiLCJrZXlzIiwiZm9yRWFjaCIsIkFuc3dlcnNCYXNlRXJyb3IiLCJlcnJvckNvZGUiLCJtZXNzYWdlIiwiYm91bmRhcnkiLCJjYXVzZWRCeSIsImVycm9yTWVzc2FnZSIsInJlcG9ydGVkIiwiZnJvbSIsInRvU3RyaW5nIiwiYnVpbHRpbkVycm9yIiwiZXJyb3IiLCJBbnN3ZXJzQmFzaWNFcnJvciIsInN0YWNrIiwiRXJyb3IiLCJBbnN3ZXJzQ29tcG9uZW50RXJyb3IiLCJjb21wb25lbnQiLCJBbnN3ZXJzRW5kcG9pbnRFcnJvciIsIkFuc3dlcnNDb3JlRXJyb3IiLCJBbnN3ZXJzU3RvcmFnZUVycm9yIiwic3RvcmFnZUtleSIsIkFuc3dlcnNBbmFseXRpY3NFcnJvciIsImV2ZW50IiwiU2VhcmNoQXBpIiwiY29uZmlnIiwiZXhwZXJpZW5jZUtleSIsIl9leHBlcmllbmNlS2V5IiwiX2V4cGVyaWVuY2VWZXJzaW9uIiwiZXhwZXJpZW5jZVZlcnNpb24iLCJsb2NhbGUiLCJfbG9jYWxlIiwidmVydGljYWxLZXkiLCJpbnB1dCIsImZpbHRlciIsImZhY2V0RmlsdGVyIiwibGltaXQiLCJvZmZzZXQiLCJpZCIsImdlb2xvY2F0aW9uIiwiaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQiLCJza2lwU3BlbGxDaGVjayIsInF1ZXJ5VHJpZ2dlciIsImxhdCIsImxuZyIsInJhZGl1cyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJxdWVyeVN0cmluZyIsIkhpZ2hsaWdodGVkVmFsdWUiLCJzaG9ydFZhbHVlIiwibWF0Y2hlZFN1YnN0cmluZ3MiLCJfc29ydE1hdGNoZWRTdWJzdHJpbmdzIiwiX2J1aWxkSGlnaGxpZ2h0ZWRWYWx1ZSIsImludmVydGVkU3Vic3RyaW5ncyIsIl9nZXRJbnZlcnRlZFN1YnN0cmluZ3MiLCJzb3J0IiwiYSIsImIiLCJ2YWx1ZUxlbmd0aCIsIm5leHRPZmZzZXQiLCJ2YWwiLCJoaWdobGlnaHRlZFN1YnN0cmluZ3MiLCJoaWdobGlnaHRlZFZhbHVlIiwibmV4dFN0YXJ0IiwiaiIsInN0YXJ0IiwiTnVtYmVyIiwiZW5kIiwiQXV0b0NvbXBsZXRlRGF0YSIsInNlY3Rpb25zIiwicXVlcnlJZCIsImZyZWV6ZSIsIm1hcCIsInMiLCJsYWJlbCIsInJlc3VsdHMiLCJyIiwiQXV0b0NvbXBsZXRlUmVzdWx0IiwiZ2V0SW52ZXJ0ZWQiLCJBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIiLCJtb2R1bGVJZCIsIkF1dG9Db21wbGV0ZUFwaSIsImJhcktleSIsInNlYXJjaFBhcmFtZXRlcnMiLCJ2ZXJ0aWNhbCIsInVuaXZlcnNhbCIsIlF1ZXN0aW9uQW5zd2VyQXBpIiwicXVlc3Rpb24iLCJlbnRpdHlJZCIsInNpdGUiLCJlbWFpbCIsInF1ZXN0aW9uVGV4dCIsInF1ZXN0aW9uRGVzY3JpcHRpb24iLCJxdWVzdGlvbkxhbmd1YWdlIiwiUFJFX1NFQVJDSCIsIlNFQVJDSF9MT0FESU5HIiwiU0VBUkNIX0NPTVBMRVRFIiwiUmVzdWx0IiwiX3JhdyIsInJhdyIsIl9mb3JtYXR0ZWQiLCJmb3JtYXR0ZWQiLCJvcmRpbmFsIiwidGl0bGUiLCJkZXRhaWxzIiwibGluayIsInN1YnRpdGxlIiwibW9kaWZpZXIiLCJiaWdEYXRlIiwiaW1hZ2UiLCJjYWxsc1RvQWN0aW9uIiwiY29sbGFwc2VkIiwiUmVzdWx0RmFjdG9yeSIsInJlc3VsdHNEYXRhIiwiZm9ybWF0dGVycyIsInZlcnRpY2FsSWQiLCJzb3VyY2UiLCJmb3JtYXR0ZWREYXRhIiwiZnJvbUdvb2dsZUN1c3RvbVNlYXJjaEVuZ2luZSIsImZyb21CaW5nQ3VzdG9tU2VhcmNoRW5naW5lIiwiZnJvbVplbmRlc2tTZWFyY2hFbmdpbmUiLCJmcm9tQWxnb2xpYVNlYXJjaEVuZ2luZSIsImZyb21HZW5lcmljIiwiaW5kZXgiLCJkZXNjcmlwdGlvbiIsInRydW5jYXRlIiwid2Vic2l0ZSIsImh0bWxUaXRsZSIsImh0bWxTbmlwcGV0Iiwic25pcHBldCIsImh0bWxfdXJsIiwib2JqZWN0SUQiLCJzdHIiLCJ0cmFpbGluZyIsInNlcCIsIndvcmRzIiwibWF4IiwidHJ1bmNhdGVkIiwid29yZCIsIlNlY3Rpb24iLCJzZWFyY2hTdGF0ZSIsIlNlYXJjaFN0YXRlcyIsInZlcnRpY2FsQ29uZmlnSWQiLCJyZXN1bHRzQ291bnQiLCJlbmNvZGVkU3RhdGUiLCJhcHBsaWVkUXVlcnlGaWx0ZXJzIiwiQXBwbGllZFF1ZXJ5RmlsdGVyIiwiZmFjZXRzIiwicGFyc2VNYXAiLCJ2ZXJ0aWNhbFVSTCIsIm1hcE1hcmtlcnMiLCJjZW50ZXJDb29yZGluYXRlcyIsInJlc3VsdCIsInlleHREaXNwbGF5Q29vcmRpbmF0ZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiaXRlbSIsIm1vZHVsZXMiLCJ1cmxzIiwiQXJyYXkiLCJpc0FycmF5IiwiYXBwbGllZFF1ZXJ5RmlsdGVyIiwiZGlzcGxheUtleSIsImRpc3BsYXlWYWx1ZSIsImZpbHRlcnMiLCJVbml2ZXJzYWxSZXN1bHRzIiwiRGlyZWN0QW5zd2VyIiwiZGlyZWN0QW5zd2VyIiwiYW5zd2VyIiwicmVsYXRlZEl0ZW0iLCJmaWVsZEFwaU5hbWUiLCJmaWVsZFZhbHVlcyIsIk5hdmlnYXRpb24iLCJ0YWJPcmRlciIsIm5hdiIsIlZlcnRpY2FsUmVzdWx0cyIsIm1lcmdlZCIsImNvbmNhdCIsIlNwZWxsQ2hlY2siLCJjb3JyZWN0ZWRRdWVyeSIsImNvcnJlY3RlZFF1ZXJ5RGlzcGxheSIsInR5cGUiLCJzaG91bGRTaG93Iiwib3JpZ2luYWxRdWVyeSIsIk5BVklHQVRJT04iLCJVTklWRVJTQUxfUkVTVUxUUyIsIlZFUlRJQ0FMX1JFU1VMVFMiLCJBVVRPQ09NUExFVEUiLCJESVJFQ1RfQU5TV0VSIiwiRklMVEVSIiwiUVVFUlkiLCJRVUVSWV9JRCIsIkZBQ0VUX0ZJTFRFUiIsIkRZTkFNSUNfRklMVEVSUyIsIlNFQVJDSF9MSU1JVCIsIlBBUkFNUyIsIkdFT0xPQ0FUSU9OIiwiSU5URU5UUyIsIlFVRVNUSU9OX1NVQk1JU1NJT04iLCJTUEVMTF9DSEVDSyIsIkR5bmFtaWNGaWx0ZXJzIiwiZHluYW1pY0ZpbHRlcnMiLCJmIiwiZmllbGRJZCIsIm9wdGlvbnMiLCJvIiwiY291bnRMYWJlbCIsInNlbGVjdGVkIiwiU2VhcmNoSW50ZW50cyIsImludGVudHMiLCJuZWFyTWUiLCJpbmNsdWRlcyIsIlNlYXJjaERhdGFUcmFuc2Zvcm1lciIsIlN0b3JhZ2VLZXlzIiwic2VhcmNoSW50ZW50cyIsInNwZWxsQ2hlY2siLCJRdWVzdGlvblN1Ym1pc3Npb24iLCJlcnJvcnMiLCJwcml2YWN5UG9saWN5IiwicXVlc3Rpb25TdWJtaXR0ZWQiLCJDb3JlIiwiX2ZpZWxkRm9ybWF0dGVycyIsImZpZWxkRm9ybWF0dGVycyIsImdsb2JhbFN0b3JhZ2UiLCJwZXJzaXN0ZW50U3RvcmFnZSIsIl9zZWFyY2hlciIsIl9hdXRvQ29tcGxldGUiLCJfcXVlc3Rpb25BbnN3ZXIiLCJhcHBlbmQiLCJzZXQiLCJzZWFyY2hMb2FkaW5nIiwidmVydGljYWxTZWFyY2giLCJnZXRTdGF0ZSIsIl9pc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCIsInRyYW5zZm9ybVZlcnRpY2FsIiwibWVyZ2VkUmVzdWx0cyIsInVuaXZlcnNhbFNlYXJjaCIsInRyYW5zZm9ybSIsIm5hbWVzcGFjZSIsInF1ZXJ5VW5pdmVyc2FsIiwicXVlcnlWZXJ0aWNhbCIsInF1ZXJ5RmlsdGVyIiwic3VibWl0UXVlc3Rpb24iLCJzdWJtaXR0ZWQiLCJldnQiLCJjYiIsIm9uIiwiQ29tcG9uZW50TWFuYWdlciIsInNldEluc3RhbmNlIiwiZ2V0SW5zdGFuY2UiLCJfY29tcG9uZW50UmVnaXN0cnkiLCJfYWN0aXZlQ29tcG9uZW50cyIsIl9jb3JlIiwiX3JlbmRlcmVyIiwiX2FuYWx5dGljc1JlcG9ydGVyIiwicmVuZGVyZXIiLCJjb3JlIiwicmVwb3J0ZXIiLCJjb21wb25lbnRDbGF6eiIsImNvbXBvbmVudFR5cGUiLCJzeXN0ZW1PcHRzIiwiYW5hbHl0aWNzUmVwb3J0ZXIiLCJjb21wb25lbnRNYW5hZ2VyIiwiY29tcG9uZW50Q2xhc3MiLCJhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQiLCJzb21lIiwiYyIsImluaXQiLCJzZXRTdGF0ZSIsIm9mZiIsImZpbmRJbmRleCIsInNwbGljZSIsImZpbmQiLCJyZW1vdmUiLCJET00iLCJlbXB0eSIsIl9jb250YWluZXIiLCJjb25zdHJ1Y3RvciIsImluc3RhbmNlIiwiUmVuZGVyZXIiLCJ0ZW1wbGF0ZSIsIkhhbmRsZWJhcnNSZW5kZXJlciIsInRlbXBsYXRlcyIsIl9oYW5kbGViYXJzIiwiX2hiIiwiX3RlbXBsYXRlcyIsIl9yZWdpc3RlckN1c3RvbUhlbHBlcnMiLCJyZWdpc3RlckhlbHBlciIsImNvbXBpbGUiLCJ0ZW1wbGF0ZU5hbWUiLCJlIiwiYXJnMSIsImFyZzIiLCJmbiIsImludmVyc2UiLCJwaG9uZU51bWJlclN0cmluZyIsImNsZWFuZWQiLCJpbnRsQ29kZSIsImFyZ3MiLCJhcmd1bWVudHMiLCJyb290IiwidiIsIlJlbmRlcmVycyIsIlNPWSIsIkhhbmRsZWJhcnMiLCJkb2N1bWVudCIsImQiLCJwIiwiaHRtbCIsImNvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJmcmFnIiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJhcHBlbmRDaGlsZCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsInBhcmVudCIsInNlbGVjdG9yIiwiSFRNTEVsZW1lbnQiLCJXaW5kb3ciLCJIVE1MRG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsInJlYWR5U3RhdGUiLCJlbCIsIm9wdHNfZGF0YSIsIm5vZGUiLCJwcm9wcyIsImFkZENsYXNzIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiY2xhc3NOYW1lIiwiY2xhc3NlcyIsImxlbiIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsInN0eWxlcyIsInByb3AiLCJzdHlsZSIsImF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJhdHRycyIsInNldHRpbmdzIiwiRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmNlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImN0eHQiLCJ0YXJnZXQiLCJpc0VxdWFsTm9kZSIsIm1hdGNoZXMiLCJwYXJlbnROb2RlIiwiRXZlbnRFbWl0dGVyIiwiX2xpc3RlbmVycyIsImxpc3RlbmVycyIsImtlZXAiLCJTdGF0ZSIsIl9zdGF0ZSIsIm9wdFZhbCIsIl9zZXQiLCJlbWl0Iiwib3B0UHJvcCIsIkFuYWx5dGljc0V2ZW50IiwiZXZlbnRUeXBlIiwidG9VcHBlckNhc2UiLCJBbmFseXRpY3NSZXBvcnRlciIsImJ1c2luZXNzSWQiLCJnbG9iYWxPcHRpb25zIiwiX2J1c2luZXNzSWQiLCJfZ2xvYmFsT3B0aW9ucyIsInNldFF1ZXJ5SWQiLCJhZGRPcHRpb25zIiwiYmVhY29uIiwidG9BcGlFdmVudCIsIk1vZHVsZURhdGEiLCJfaWQiLCJfaGlzdG9yeSIsIl9kYXRhIiwiY2FwdHVyZVByZXZpb3VzIiwic2hpZnQiLCJwcmV2aW91cyIsIl9wcmV2aW91cyIsInBvcCIsIkdsb2JhbFN0b3JhZ2UiLCJfbW9kdWxlRGF0YUNvbnRhaW5lciIsIl9mdXR1cmVMaXN0ZW5lcnMiLCJfaW5pdERhdGFDb250YWluZXIiLCJfYXBwbHlGdXR1cmVMaXN0ZW5lcnMiLCJkYXRhS2V5Iiwic3RhcnRzV2l0aCIsIm1vZHVsZURhdGEiLCJmdXR1cmVzIiwiZnV0dXJlIiwiQ29tcG9uZW50Iiwic3lzdGVtQ29uZmlnIiwiX2NvbmZpZyIsIl90eXBlIiwiX3BhcmVudENvbnRhaW5lciIsInBhcmVudENvbnRhaW5lciIsIl9jaGlsZHJlbiIsInN0YXRlIiwiX2FuYWx5dGljc09wdGlvbnMiLCJhbmFseXRpY3NPcHRpb25zIiwiY3JlYXRlRWwiLCJfY2xhc3NOYW1lIiwiX3JlbmRlciIsInJlbmRlciIsIl90ZW1wbGF0ZSIsIl90ZW1wbGF0ZU5hbWUiLCJkZWZhdWx0VGVtcGxhdGVOYW1lIiwiX2lzTW91bnRlZCIsInRyYW5zZm9ybURhdGEiLCJvbkNyZWF0ZSIsIm9uQ3JlYXRlT3ZlcnJpZGUiLCJiaW5kIiwib25Nb3VudCIsIm9uTW91bnRPdmVycmlkZSIsIm9uVXBkYXRlIiwib25VcGRhdGVPdmVycmlkZSIsInVzZXJPbkNyZWF0ZSIsInVzZXJPbk1vdW50IiwidXNlck9uVXBkYXRlIiwidW5Nb3VudCIsIm1vdW50IiwibmV3U3RhdGUiLCJjaGlsZENvbXBvbmVudCIsImNyZWF0ZSIsIl9wYXJlbnRPcHRzIiwiY2hpbGQiLCJvblVuTW91bnQiLCJiZWZvcmVNb3VudCIsImFzSlNPTiIsImRvbUNvbXBvbmVudHMiLCJxdWVyeUFsbCIsIl9jcmVhdGVTdWJjb21wb25lbnQiLCJkb21Ib29rcyIsIl9jcmVhdGVBbmFseXRpY3NIb29rIiwiYmVmb3JlUmVuZGVyIiwiYWZ0ZXJSZW5kZXIiLCJkb21Db21wb25lbnQiLCJkYXRhc2V0IiwiaXNDb21wb25lbnRNb3VudGVkIiwiY2hpbGREYXRhIiwiYWRkQ2hpbGQiLCJyZXZlcnNlIiwiaXNBbmFseXRpY3NBdHRhY2hlZCIsImV2ZW50dHlwZSIsImV2ZW50bGFiZWwiLCJldmVudG9wdGlvbnMiLCJyZXBvcnQiLCJSRVNJWkVfREVCT1VOQ0UiLCJUYWIiLCJjb25maWdJZCIsImlzRmlyc3QiLCJpc0FjdGl2ZSIsInRhYnNDb25maWciLCJ0YWJzIiwidGFiIiwiTmF2aWdhdGlvbkNvbXBvbmVudCIsImRyb3Bkb3duTGFiZWwiLCJkcm9wZG93bkljb24iLCJfdGFicyIsIl90YWJPcmRlciIsImdldERlZmF1bHRUYWJPcmRlciIsImdldFVybFBhcmFtcyIsIl9uYXZCcmVha3BvaW50cyIsIl9kZWJvdW5jZVRpbWVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInJlZml0TmF2IiwiY2hlY2tPdXRzaWRlQ2xpY2siLCJ0b2dnbGVNb3JlRHJvcGRvd24iLCJtb3JlQnV0dG9uIiwibWFpbkxpbmtzIiwiY29sbGFwc2VkTGlua3MiLCJuYXZXaWR0aCIsImNvbnRhaW5zIiwib2Zmc2V0V2lkdGgiLCJudW1CcmVha3BvaW50cyIsIm1haW5MaW5rc1dpZHRoIiwiY2hpbGRyZW4iLCJsYXN0TGluayIsInByZXBlbmQiLCJmaXJzdExpbmsiLCJjbG9zZU1vcmVEcm9wZG93biIsInRvZ2dsZSIsImNsb3Nlc3QiLCJtZXJnZVRhYk9yZGVyIiwiZ2VuZXJhdGVUYWJVcmwiLCJ1bnNoaWZ0Iiwib3RoZXJUYWJPcmRlciIsInRhYkNvbmZpZyIsIkZpbHRlciIsInJlc3BvbnNlRmlsdGVyIiwiZ3JvdXBzIiwiZ3JvdXBGaWx0ZXJzIiwiZmllbGQiLCJvciIsImFuZCIsIl9mcm9tTWF0Y2hlciIsIm1pbiIsIm1hdGNoZXIiLCJTZWFyY2hDb21wb25lbnQiLCJfYmFyS2V5IiwiX3ZlcnRpY2FsS2V5IiwiX2Zvcm1FbCIsImZvcm1TZWxlY3RvciIsIl9pbnB1dEVsIiwiaW5wdXRFbCIsImxhYmVsVGV4dCIsInN1Ym1pdFRleHQiLCJzdWJtaXRJY29uIiwicHJvbXB0SGVhZGVyIiwiYXV0b0ZvY3VzIiwiY2xlYXJCdXR0b24iLCJhdXRvY29tcGxldGVPbkxvYWQiLCJyZWRpcmVjdFVybCIsInEiLCJfc2VhcmNoQ29vbGRvd24iLCJzZWFyY2hDb29sZG93biIsIl9wcm9tcHRGb3JMb2NhdGlvbiIsInByb21wdEZvckxvY2F0aW9uIiwiQm9vbGVhbiIsIl9zaG93Q2xlYXJCdXR0b24iLCJzZXRRdWVyeSIsImluaXRMb2NhdGlvblByb21wdCIsImZvY3VzIiwiaW5pdFNlYXJjaCIsImluaXRBdXRvQ29tcGxldGUiLCJpbml0Q2xlYXJCdXR0b24iLCJfYXV0b2NvbXBsZXRlIiwiYnV0dG9uIiwiaW50ZW50IiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJjb29yZHMiLCJhY2N1cmFjeSIsImZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJibHVyIiwiaW5wdXRTZWxlY3RvciIsIm9uU3VibWl0IiwidHJpZ2dlciIsIl90aHJvdHRsZWQiLCJhbGxGaWx0ZXJzIiwiZ2V0QWxsIiwidG90YWxGaWx0ZXIiLCJnZXRBY3RpdmVDb21wb25lbnQiLCJzaG93Q2xlYXJCdXR0b24iLCJGaWx0ZXJTZWFyY2hDb21wb25lbnQiLCJpbnB1dEtleSIsIl9zdG9yZU9uQ2hhbmdlIiwic3RvcmVPbkNoYW5nZSIsInNlYXJjaFRleHQiLCJfYnVpbGRTZWFyY2hQYXJhbWV0ZXJzIiwiaXNGaWx0ZXJTZWFyY2giLCJvcmlnaW5hbEZpbHRlciIsImZyb21SZXNwb25zZSIsInNldEZpbHRlciIsInNlYXJjaFBhcmFtZXRlckNvbmZpZ3MiLCJzZWN0aW9uZWQiLCJmaWVsZHMiLCJfYnVpbGRGaWVsZHMiLCJmaWVsZENvbmZpZ3MiLCJmYyIsImZldGNoRW50aXRpZXMiLCJLZXlzIiwiQkFDS1NQQUNFIiwiVEFCIiwiRU5URVIiLCJTSElGVCIsIkNUUkwiLCJBTFQiLCJFU0NBUEUiLCJMRUZUIiwiUklHSFQiLCJVUCIsIkRPV04iLCJMRUZUX09TX0tFWSIsIlJJR0hUX09TX0tFWSIsIlNFTEVDVF9LRVkiLCJBdXRvQ29tcGxldGVDb21wb25lbnQiLCJfYXV0b2NvbXBsZXRlRWxzIiwiYXV0b0NvbXBsZXRlRWxzIiwiX29yaWdpbmFsUXVlcnkiLCJfc2VjdGlvbkluZGV4IiwiX3Jlc3VsdEluZGV4IiwiX2F1dG9Gb2N1cyIsIl9vblN1Ym1pdCIsIl9zZWFyY2hQYXJhbWV0ZXJzIiwiaGFzUmVzdWx0cyIsInNlY3Rpb25JbmRleCIsInJlc3VsdEluZGV4IiwicXVlcnlJbnB1dCIsImF0dHJpYnV0ZXMiLCJhdXRvY29tcGxldGUiLCJhdXRvY29ycmVjdCIsInNwZWxsY2hlY2siLCJjbG9zZSIsInJlc2V0IiwiYXV0b0NvbXBsZXRlIiwiaGFuZGxlTmF2aWdhdGVSZXN1bHRzIiwia2V5Q29kZSIsImhhbmRsZVN1Ym1pdFJlc3VsdCIsImRlbGVnYXRlIiwidXBkYXRlUXVlcnkiLCJoYW5kbGVUeXBpbmciLCJ1cGRhdGVTdGF0ZSIsIm9wdFZhbHVlIiwicXVlcnlFbCIsImlnbm9yZWRLZXlzIiwiYXV0b0NvbXBsZXRlRmlsdGVyIiwiYXV0b0NvbXBsZXRlVmVydGljYWwiLCJhdXRvQ29tcGxldGVVbml2ZXJzYWwiLCJTcGVsbENoZWNrQ29tcG9uZW50IiwiY29ycmVjdGVkUXVlcnlVcmwiLCJfYnVpbGRSZWRpcmVjdFF1ZXJ5VXJsIiwiaGVscFRleHQiLCJfZ2V0SGVscFRleHQiLCJ0b0xvd2VyQ2FzZSIsIkZhY2V0IiwiZmxhdEZpbHRlcnMiLCJmbGF0TWFwIiwiJG9yIiwiRmlsdGVyQm94Q29tcG9uZW50IiwiX2ZpbHRlckNvbmZpZ3MiLCJfc2VhcmNoT25DaGFuZ2UiLCJzZWFyY2hPbkNoYW5nZSIsIl9hcHBseUJ1dHRvblNlbGVjdG9yIiwiYXBwbHlCdXR0b25TZWxlY3RvciIsIl9maWx0ZXJDb21wb25lbnRzIiwiX2ZpbHRlcnMiLCJfaXNEeW5hbWljIiwiaXNEeW5hbWljIiwiZmlsdGVyQ29uZmlncyIsInNob3dBcHBseUJ1dHRvbiIsIm9uQ2hhbmdlIiwib25GaWx0ZXJDaGFuZ2UiLCJnZXRGaWx0ZXIiLCJfc2F2ZUZpbHRlcnNUb1N0b3JhZ2UiLCJfc2VhcmNoIiwidmFsaWRGaWx0ZXJzIiwiY29tYmluZWRGaWx0ZXIiLCJmcm9tRmlsdGVycyIsInNldEZhY2V0RmlsdGVyIiwiU1VQUE9SVEVEX0NPTlRST0xTIiwiRmlsdGVyT3B0aW9uc0NvbXBvbmVudCIsImNvbnRyb2wiLCJwcmV2aW91c09wdGlvbnMiLCJzZWxlY3RlZE9wdGlvbnMiLCJfb3B0aW9ucyIsIl9jb250cm9sIiwiX29wdGlvblNlbGVjdG9yIiwib3B0aW9uU2VsZWN0b3IiLCJfb25DaGFuZ2UiLCJfbGFiZWwiLCJfdXBkYXRlT3B0aW9uIiwicGFyc2VJbnQiLCJjaGVja2VkIiwiX2J1aWxkRmlsdGVyIiwiZWxlbWVudHMiLCJfYXBwbHlGaWx0ZXIiLCJlcXVhbCIsImdyb3VwIiwiUmFuZ2VGaWx0ZXJDb21wb25lbnQiLCJfZmllbGQiLCJtaW5WYWwiLCJtYXhWYWwiLCJfcmFuZ2UiLCJpbml0aWFsTWluIiwiaW5pdGlhbE1heCIsIl90aXRsZSIsIl9taW5MYWJlbCIsIm1pbkxhYmVsIiwiX21heExhYmVsIiwibWF4TGFiZWwiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwiX3VwZGF0ZVJhbmdlIiwiaW5jbHVzaXZlUmFuZ2UiLCJEYXRlUmFuZ2VGaWx0ZXJDb21wb25lbnQiLCJfaXNFeGNsdXNpdmUiLCJpc0V4Y2x1c2l2ZSIsInRvZGF5IiwiRGF0ZSIsInRvZGF5U3RyaW5nIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsInBhZFN0YXJ0IiwiZ2V0RGF0ZSIsIm1pbkRhdGUiLCJtYXhEYXRlIiwiX2RhdGUiLCJkYXRlTWluIiwiZGF0ZU1heCIsImRhdGUiLCJleGNsdXNpdmVSYW5nZSIsIkR5bmFtaWNGaWx0ZXJzQ29tcG9uZW50IiwiX2ZpZWxkQ29udHJvbHMiLCJmaWVsZENvbnRyb2xzIiwiX2ZpbHRlcmJveCIsImVuYWJsZUR5bmFtaWNGaWx0ZXJzIiwiTUVURVJTX1BFUl9NSUxFIiwiREVGQVVMVF9DT05GSUciLCJnZW9CdXR0b25JY29uIiwiZ2VvQnV0dG9uVGV4dCIsImVuYWJsZWRUZXh0IiwibG9hZGluZ1RleHQiLCJlcnJvclRleHQiLCJidXR0b25TZWxlY3RvciIsIkdlb0xvY2F0aW9uQ29tcG9uZW50IiwicGxhY2Vob2xkZXIiLCJfZW5hYmxlZCIsImdlb0xvYWRpbmciLCJnZW9FcnJvciIsImdlb0VuYWJsZWQiLCJnZW9WYWx1ZSIsImdlb1BsYWNlaG9sZGVyIiwiX2luaXRBdXRvQ29tcGxldGUiLCJfdG9nZ2xlR2VvRmlsdGVyIiwiX3NhdmVEYXRhVG9TdG9yYWdlIiwiTWF0aCIsIkV2ZW50VHlwZXMiLCJUSFVNQlNfVVAiLCJUSFVNQlNfRE9XTiIsIkRpcmVjdEFuc3dlckNvbXBvbmVudCIsImZvcm1FbCIsIl90aHVtYnNVcFNlbGVjdG9yIiwidGh1bWJzVXBTZWxlY3RvciIsIl90aHVtYnNEb3duU2VsZWN0b3IiLCJ0aHVtYnNEb3duU2VsZWN0b3IiLCJfdmlld0RldGFpbHNUZXh0Iiwidmlld0RldGFpbHNUZXh0IiwiaGFzU3RhdGUiLCJjaGVja2VkVmFsdWUiLCJyZXBvcnRRdWFsaXR5IiwiZXZlbnRPcHRpb25zIiwic2VhcmNoZXIiLCJjdGFMYWJlbCIsImlzR29vZCIsIlJlc3VsdHNJdGVtQ29tcG9uZW50IiwiX3ZlcnRpY2FsQ29uZmlnSWQiLCJfaXNVbml2ZXJzYWwiLCJpc1VuaXZlcnNhbCIsIkxvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQiLCJFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IiwiUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQiLCJNYXBQcm92aWRlciIsIl96b29tIiwiem9vbSIsIl9kZWZhdWx0UG9zaXRpb24iLCJkZWZhdWx0UG9zaXRpb24iLCJfc2hvd0VtcHR5TWFwIiwic2hvd0VtcHR5TWFwIiwiX21hcCIsIl9pc0xvYWRlZCIsIl9vblBpbkNsaWNrIiwib25QaW5DbGljayIsIl9vbkxvYWRlZCIsIm9uTG9hZGVkIiwiX3BpbkNvbmZpZyIsInBpbiIsIkRFRkFVTFRfUElOX0NPTkZJRyIsIl9jb2xsYXBzZVBpbnMiLCJjb2xsYXBzZVBpbnMiLCJpc0xvYWRlZCIsIm1hcERhdGEiLCJtYXJrZXJzIiwibG9jYXRpb25Ub0l0ZW0iLCJtIiwiY29sbGFwc2VkTWFya2VycyIsImNvbGxhcHNlZE1hcmtlciIsImljb24iLCJhbmNob3IiLCJzdmciLCJzY2FsZWRTaXplIiwibGFiZWxUeXBlIiwiR29vZ2xlTWFwUHJvdmlkZXIiLCJfY2xpZW50SWQiLCJjbGllbnRJZCIsIl9zaWduYXR1cmUiLCJzaWduYXR1cmUiLCJoYXNWYWxpZENsaWVudENyZWRlbnRpYWxzIiwib25Mb2FkIiwic2NyaXB0Iiwib25sb2FkIiwiYXN5bmMiLCJzcmMiLCJnZW5lcmF0ZUNyZWRlbnRpYWxzIiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsImJvdW5kcyIsIkxhdExuZ0JvdW5kcyIsIl9jb2xsYXBzZU1hcmtlcnMiLCJnb29nbGVNYXBNYXJrZXJDb25maWdzIiwiR29vZ2xlTWFwTWFya2VyQ29uZmlnIiwibWFya2VyIiwiTWFya2VyIiwiYWRkTGlzdGVuZXIiLCJleHRlbmQiLCJmaXRCb3VuZHMiLCJzZXRDZW50ZXIiLCJMYXRMbmciLCJzZXJpYWxpemVkTWFya2VycyIsInBpbkNvbmZpZyIsInBpbkNvbmZpZ09iaiIsIlBvaW50IiwieCIsInkiLCJTaXplIiwidyIsImgiLCJNYXBCb3hNYXBQcm92aWRlciIsIm1hcGJveGdsIiwiYWNjZXNzVG9rZW4iLCJjc3MiLCJyZWwiLCJjZW50ZXIiLCJnZXRDZW50ZXJNYXJrZXIiLCJtYXBib3hNYXBNYXJrZXJDb25maWdzIiwiTWFwQm94TWFya2VyQ29uZmlnIiwid3JhcHBlciIsIkxuZ0xhdCIsInNldExuZ0xhdCIsImFkZFRvIiwiZ2V0RWxlbWVudCIsIm1hcENlbnRlciIsInN0YXRpY01hcFBpbiIsIlByb3ZpZGVyVHlwZXMiLCJNYXBDb21wb25lbnQiLCJfbWFwUHJvdmlkZXIiLCJtYXBQcm92aWRlciIsImdldFByb3ZpZGVySW5zdGFuY2UiLCJsb2FkSlMiLCJSZXN1bHRUeXBlIiwiRVZFTlQiLCJMT0NBVElPTiIsIlBFT1BMRSIsIlJlc3VsdHNDb21wb25lbnQiLCJfaXRlbUNvbmZpZyIsImdsb2JhbCIsInJlbmRlckl0ZW0iLCJpdGVtVGVtcGxhdGUiLCJzZXRTZWFyY2hMaW1pdCIsImNvbmZpZ3VyZUl0ZW0iLCJfdW5pdmVyc2FsVXJsIiwidW5pdmVyc2FsVXJsIiwiaXNQcmVTZWFyY2giLCJpc1NlYXJjaExvYWRpbmciLCJpc1NlYXJjaENvbXBsZXRlIiwiaW5jbHVkZU1hcCIsIm1hcENvbmZpZyIsInNob3dOb1Jlc3VsdHMiLCJzZXRJdGVtUmVuZGVyIiwic2V0SXRlbVRlbXBsYXRlIiwiY2xhenoiLCJnZXRJdGVtQ29tcG9uZW50IiwiY29tcCIsIm5ld09wdHMiLCJnbG9iYWxDb25maWciLCJpdGVtQ29uZmlnIiwiaGFzR2xvYmFsUmVuZGVyIiwiaGFzR2xvYmFsVGVtcGxhdGUiLCJzZXRSZW5kZXIiLCJzZXRUZW1wbGF0ZSIsIkFjY29yZGlvblJlc3VsdHNDb21wb25lbnQiLCJfc2VsZWN0b3JCYXNlIiwic2VsZWN0b3JCYXNlIiwiY29sbGFwc2VkQ2xhc3MiLCJhY2NvcmRpb25FbHMiLCJhY2NvcmRpb25FbCIsInRvZ2dsZUVsIiwidG9nZ2xlU2VsZWN0b3IiLCJjb250ZW50RWwiLCJib2R5U2VsZWN0b3IiLCJjaGFuZ2VIZWlnaHQiLCJoYW5kbGVDbGljayIsIndyYXBwZXJFbCIsImlzQ29sbGFwc2VkIiwidGFyZ2V0RWwiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJidWlsZFNlbGVjdG9yIiwiVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudCIsIl9saW1pdCIsImNoaWxkT3B0cyIsImdldENoaWxkQ29uZmlnIiwidXNlQWNjb3JkaW9uIiwiZGVmYXVsdENvbmZpZyIsIlF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCIsInZhbGlkYXRlQ29uZmlnIiwiYmluZEFuYWx5dGljcyIsImJpbmRGb3JtU3VibWl0IiwicXVlc3Rpb25UZXh0RWwiLCJmb3JtRGF0YSIsInZhbGlkYXRlUmVxdWlyZWQiLCJsYW5ndWFnZSIsImlucHV0RmllbGRzIiwib2JqIiwiU1ZHSWNvbiIsInBhdGgiLCJjb21wbGV4Q29udGVudHMiLCJ2aWV3Qm94IiwiY29udGVudHMiLCJwYXRoRGVmaW5pdGlvbiIsImljb25zQXJyYXkiLCJ0aHVtYkljb24iLCJyZWNlaXB0SWNvbiIsInBhbnRoZW9uSWNvbiIsIm1pY0ljb24iLCJkaXJlY3Rpb25zSWNvbiIsImNhbGVuZGFySWNvbiIsImNhbGxvdXRJY29uIiwiaW5mb0ljb24iLCJicmllZmNhc2VJY29uIiwia2Fib2JJY29uIiwicGVyc29uSWNvbiIsIm1hZ25pZnlpbmdHbGFzc0ljb24iLCJvZmZpY2VJY29uIiwibGlua0ljb24iLCJ3aW5kb3dJY29uIiwicGhvbmVJY29uIiwidGFnSWNvbiIsImRvY3VtZW50SWNvbiIsImNoZXZyb25JY29uIiwic3VwcG9ydEljb24iLCJ5ZXh0SWNvbiIsInBpbkljb24iLCJnZWFySWNvbiIsImxpZ2h0QnVsYkljb24iLCJJY29ucyIsIm1hcmt1cCIsInN0YXJJY29uIiwiSWNvbkNvbXBvbmVudCIsImljb25OYW1lIiwiY3VzdG9tSWNvbiIsImljb25VcmwiLCJDT01QT05FTlRfTUFOQUdFUiIsInJlZ2lzdGVyIiwiVGVtcGxhdGVMb2FkZXIiLCJfdGVtcGxhdGVVcmwiLCJ0ZW1wbGF0ZVVybCIsIl9pbml0IiwiZmV0Y2hUZW1wbGF0ZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiRXJyb3JSZXBvcnRlciIsInByaW50VmVyYm9zZSIsInNlbmRUb1NlcnZlciIsImVyciIsInByaW50RXJyb3IiLCJ0b0pzb24iLCJQZXJzaXN0ZW50U3RvcmFnZSIsIl9oaXN0b3J5VGltZXIiLCJfdXBkYXRlTGlzdGVuZXIiLCJ1cGRhdGVMaXN0ZW5lciIsIl9yZXNldExpc3RlbmVyIiwicmVzZXRMaXN0ZW5lciIsIm9ucG9wc3RhdGUiLCJfY2FsbExpc3RlbmVyIiwibmV3RGF0YSIsIl91cGRhdGVIaXN0b3J5IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImxpc3RlbmVyIiwiYWxsUGFyYW1zIiwiQW5zd2VycyIsImNvbXBvbmVudHMiLCJfb25SZWFkeSIsIm9uU3RhdGVDaGFuZ2UiLCJzZXRBbGwiLCJzdWJzdHIiLCJzZXRDb3JlIiwic2V0UmVuZGVyZXIiLCJzZXRBbmFseXRpY3NSZXBvcnRlciIsImluaXRTY3JvbGxMaXN0ZW5lciIsIm9uUmVhZHkiLCJ1c2VUZW1wbGF0ZXMiLCJ0ZW1wbGF0ZUJ1bmRsZSIsIl9lcnJvclJlcG9ydGVyIiwiZGVidWciLCJzdXBwcmVzc0Vycm9yUmVwb3J0cyIsInJlbW92ZUJ5TmFtZSIsIkRFQk9VTkNFX1RJTUUiLCJ0aW1lb3V0Iiwic2VuZEV2ZW50IiwiaW5uZXJIZWlnaHQiLCJwYWdlWU9mZnNldCIsIkFOU1dFUlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBOztFQUVBOztFQUVBOzs7RUFHQSxJQUFNQSxPQUFPLEdBQUc7RUFDZEMsRUFBQUEsR0FBRyxFQUFFLEtBRFM7RUFFZEMsRUFBQUEsSUFBSSxFQUFFLE1BRlE7RUFHZEMsRUFBQUEsR0FBRyxFQUFFLEtBSFM7RUFJZEMsRUFBQUEsTUFBTSxFQUFFO0VBSk0sQ0FBaEI7RUFPQTs7Ozs7O01BS3FCQzs7Ozs7Ozs7OztFQUNuQjs7Ozs7OzBCQU1LQyxLQUFLQyxNQUFNQyxNQUFNO0VBQ3BCLGFBQU8sS0FBS0MsT0FBTCxDQUFhVCxPQUFPLENBQUNDLEdBQXJCLEVBQTBCLEtBQUtTLFlBQUwsQ0FBa0JKLEdBQWxCLEVBQXVCQyxJQUF2QixDQUExQixFQUF3REMsSUFBeEQsQ0FBUDtFQUNEO0VBRUQ7Ozs7Ozs7OzsyQkFNTUYsS0FBS0MsTUFBTUMsTUFBTTtFQUNyQixhQUFPLEtBQUtDLE9BQUwsQ0FDTFQsT0FBTyxDQUFDRSxJQURILEVBRUxJLEdBRkssRUFHTEssTUFBTSxDQUFDQyxNQUFQLENBQWM7RUFDWkMsUUFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUws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