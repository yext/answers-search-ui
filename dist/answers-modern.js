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
        if (!this.isQueryInputFocused()) {
          this._sectionIndex = 0;
          this._resultIndex = -1;
          data = {};
        }

        _get(_getPrototypeOf(AutoCompleteComponent.prototype), "setState", this).call(this, Object.assign({}, data, {
          hasResults: this.hasResults(data),
          sectionIndex: this._sectionIndex,
          resultIndex: this._resultIndex,
          promptHeader: this._originalQuery.length === 0 ? this.promptHeader : null
        }));
      }
    }, {
      key: "isQueryInputFocused",
      value: function isQueryInputFocused() {
        return document.activeElement.className.includes(this._inputEl.substring(1));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2Vycy11bWQuanMiLCJzb3VyY2VzIjpbInNyYy9jb3JlL2h0dHAvaHR0cHJlcXVlc3Rlci5qcyIsInNyYy9jb3JlL2NvbnN0YW50cy5qcyIsInNyYy91aS9kb20vc2VhcmNocGFyYW1zLmpzIiwic3JjL2NvcmUvaHR0cC9hcGlyZXF1ZXN0LmpzIiwic3JjL2NvcmUvZXJyb3JzL2Vycm9ycy5qcyIsInNyYy9jb3JlL3NlYXJjaC9zZWFyY2hhcGkuanMiLCJzcmMvY29yZS9tb2RlbHMvaGlnaGxpZ2h0ZWR2YWx1ZS5qcyIsInNyYy9jb3JlL21vZGVscy9hdXRvY29tcGxldGVkYXRhLmpzIiwic3JjL2NvcmUvc2VhcmNoL2F1dG9jb21wbGV0ZWRhdGF0cmFuc2Zvcm1lci5qcyIsInNyYy9jb3JlL3NlYXJjaC9hdXRvY29tcGxldGVhcGkuanMiLCJzcmMvY29yZS9zZWFyY2gvcXVlc3Rpb25hbnN3ZXJhcGkuanMiLCJzcmMvY29yZS9zdG9yYWdlL3NlYXJjaHN0YXRlcy5qcyIsInNyYy9jb3JlL21vZGVscy9yZXN1bHQuanMiLCJzcmMvY29yZS9tb2RlbHMvcmVzdWx0ZmFjdG9yeS5qcyIsInNyYy9jb3JlL21vZGVscy9zZWN0aW9uLmpzIiwic3JjL2NvcmUvbW9kZWxzL3VuaXZlcnNhbHJlc3VsdHMuanMiLCJzcmMvY29yZS9tb2RlbHMvZGlyZWN0YW5zd2VyLmpzIiwic3JjL2NvcmUvbW9kZWxzL25hdmlnYXRpb24uanMiLCJzcmMvY29yZS9tb2RlbHMvdmVydGljYWxyZXN1bHRzLmpzIiwic3JjL2NvcmUvbW9kZWxzL3NwZWxsY2hlY2suanMiLCJzcmMvY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzLmpzIiwic3JjL2NvcmUvbW9kZWxzL2R5bmFtaWNmaWx0ZXJzLmpzIiwic3JjL2NvcmUvbW9kZWxzL3NlYXJjaGludGVudHMuanMiLCJzcmMvY29yZS9zZWFyY2gvc2VhcmNoZGF0YXRyYW5zZm9ybWVyLmpzIiwic3JjL2NvcmUvbW9kZWxzL3F1ZXN0aW9uc3VibWlzc2lvbi5qcyIsInNyYy9jb3JlL2NvcmUuanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnRtYW5hZ2VyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9yZW5kZXJlci5qcyIsInNyYy91aS9yZW5kZXJpbmcvaGFuZGxlYmFyc3JlbmRlcmVyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9jb25zdC5qcyIsInNyYy91aS9kb20vZG9tLmpzIiwic3JjL2NvcmUvZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL3N0YXRlLmpzIiwic3JjL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50LmpzIiwic3JjL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc3JlcG9ydGVyLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9tb2R1bGVkYXRhLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9nbG9iYWxzdG9yYWdlLmpzIiwic3JjL2NvcmUvaW5kZXguanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb25jb21wb25lbnQuanMiLCJzcmMvY29yZS9tb2RlbHMvZmlsdGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3NlYXJjaC9maWx0ZXJzZWFyY2hjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9zZWFyY2gvYXV0b2NvbXBsZXRlY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL3NwZWxsY2hlY2tjb21wb25lbnQuanMiLCJzcmMvY29yZS9tb2RlbHMvZmFjZXQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcmJveGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyb3B0aW9uc2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcnMvcmFuZ2VmaWx0ZXJjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2RhdGVyYW5nZWZpbHRlcmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcnMvZHluYW1pY2ZpbHRlcnNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2dlb2xvY2F0aW9uY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9kaXJlY3RhbnN3ZXJjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9wZW9wbGVyZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9wcm92aWRlcnMvbWFwcHJvdmlkZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvcHJvdmlkZXJzL2dvb2dsZW1hcHByb3ZpZGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL3Byb3ZpZGVycy9tYXBib3htYXBwcm92aWRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9tYXBjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL2FjY29yZGlvbnJlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9xdWVzdGlvbnMvcXVlc3Rpb25zdWJtaXNzaW9uY29tcG9uZW50LmpzIiwic3JjL3VpL2ljb25zL2ljb24uanMiLCJzcmMvdWkvaWNvbnMvdGh1bWIuanMiLCJzcmMvdWkvaWNvbnMvcmVjZWlwdC5qcyIsInNyYy91aS9pY29ucy9wYW50aGVvbi5qcyIsInNyYy91aS9pY29ucy9taWMuanMiLCJzcmMvdWkvaWNvbnMvZGlyZWN0aW9ucy5qcyIsInNyYy91aS9pY29ucy9jYWxlbmRhci5qcyIsInNyYy91aS9pY29ucy9jYWxsb3V0LmpzIiwic3JjL3VpL2ljb25zL2luZm8uanMiLCJzcmMvdWkvaWNvbnMvYnJpZWZjYXNlLmpzIiwic3JjL3VpL2ljb25zL2thYm9iLmpzIiwic3JjL3VpL2ljb25zL3BlcnNvbi5qcyIsInNyYy91aS9pY29ucy9tYWduaWZ5aW5nX2dsYXNzLmpzIiwic3JjL3VpL2ljb25zL29mZmljZS5qcyIsInNyYy91aS9pY29ucy9saW5rLmpzIiwic3JjL3VpL2ljb25zL3dpbmRvdy5qcyIsInNyYy91aS9pY29ucy9waG9uZS5qcyIsInNyYy91aS9pY29ucy90YWcuanMiLCJzcmMvdWkvaWNvbnMvZG9jdW1lbnQuanMiLCJzcmMvdWkvaWNvbnMvY2hldnJvbi5qcyIsInNyYy91aS9pY29ucy9zdXBwb3J0LmpzIiwic3JjL3VpL2ljb25zL3lleHQuanMiLCJzcmMvdWkvaWNvbnMvcGluLmpzIiwic3JjL3VpL2ljb25zL2dlYXIuanMiLCJzcmMvdWkvaWNvbnMvbGlnaHRfYnVsYi5qcyIsInNyYy91aS9pY29ucy9zdGFyLmpzIiwic3JjL3VpL2ljb25zL2Nsb3NlLmpzIiwic3JjL3VpL2ljb25zL2luZGV4LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvaWNvbnMvaWNvbmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2NvbnN0LmpzIiwic3JjL3VpL3JlbmRlcmluZy90ZW1wbGF0ZWxvYWRlci5qcyIsInNyYy91aS9pbmRleC5qcyIsInNyYy9jb3JlL2Vycm9ycy9lcnJvcnJlcG9ydGVyLmpzIiwic3JjL3VpL3N0b3JhZ2UvcGVyc2lzdGVudHN0b3JhZ2UuanMiLCJzcmMvYW5zd2Vycy11bWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBtb2R1bGUgSHR0cFJlcXVlc3RlciAqL1xuXG4vKiBnbG9iYWwgZmV0Y2ggKi9cblxuLyoqXG4gKiBUeXBlcyBvZiBIVFRQIHJlcXVlc3RzXG4gKi9cbmNvbnN0IE1ldGhvZHMgPSB7XG4gIEdFVDogJ2dldCcsXG4gIFBPU1Q6ICdwb3N0JyxcbiAgUFVUOiAncHV0JyxcbiAgREVMRVRFOiAnZGVsZXRlJ1xufTtcblxuLyoqXG4gKiBIdHRwUmVxdWVzdGVyIGlzIGEgd3JhcHBlciBhcm91bmQgdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiBvZiBBSkFYXG4gKiByZWxhdGVkIG1hdHRlcnMuIEl0J3MgdXNlZCB0byBtYWtlIGFsbCB0eXBlcyBvZiBuZXR3b3JrIHJlcXVlc3RzXG4gKiBhbmQgZXhwb3NlcyBhIHByb21pc2UgaW50ZXJmYWNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwUmVxdWVzdGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIEdFVCBIVFRQIHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHByb3ZpZGUgKGdldHMgZW5jb2RlZCBpbnRvIHRoZSBVUkwpXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIENvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAqL1xuICBnZXQgKHVybCwgZGF0YSwgb3B0cykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoTWV0aG9kcy5HRVQsIHRoaXMuZW5jb2RlUGFyYW1zKHVybCwgZGF0YSksIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIFBPU1QgSFRUUCByZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBwcm92aWRlIChnZXRzIGVuY29kZWQgaW50byB0aGUgVVJMKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBDb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgKi9cbiAgcG9zdCAodXJsLCBkYXRhLCBvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcbiAgICAgIE1ldGhvZHMuUE9TVCxcbiAgICAgIHVybCxcbiAgICAgIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgY3JlZGVudGlhbHM6IHVuZGVmaW5lZFxuICAgICAgfSwgb3B0cylcbiAgICApO1xuICB9XG5cbiAgcmVxdWVzdCAobWV0aG9kLCB1cmwsIG9wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIG1ldGhvZCxcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcbiAgICB9LCBvcHRzKSk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIGJlYWNvbiB0byB0aGUgcHJvdmlkZWQgdXJsIHdoaWNoIHdpbGwgc2VuZCBhIG5vbi1ibG9ja2luZyByZXF1ZXN0XG4gICAqIHRvIHRoZSBzZXJ2ZXIgdGhhdCBpcyBndWFyYW50ZWVkIHRvIHNlbmQgYmVmb3JlIHBhZ2UgbG9hZC4gTm8gcmVzcG9uc2UgaXMgcmV0dXJuZWQsXG4gICAqIHNvIGJlYWNvbnMgYXJlIHByaW1hcmlseSB1c2VkIGZvciBhbmFseXRpY3MgcmVwb3J0aW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gc2VuZCB0aGUgYmVhY29uIHRvXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIFRoZSBkYXRhIHBheWxvYWQgdG8gc2VuZCBpbiB0aGUgYmVhY29uXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bGx5IHF1ZXVlZFxuICAgKi9cbiAgYmVhY29uICh1cmwsIGRhdGEpIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLnNlbmRCZWFjb24odXJsLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIH1cblxuICBlbmNvZGVQYXJhbXMgKHVybCwgcGFyYW1zKSB7XG4gICAgbGV0IGhhc1BhcmFtID0gdXJsLmluZGV4T2YoJz8nKSA+IC0xO1xuXG4gICAgbGV0IHNlYXJjaFF1ZXJ5ID0gJyc7XG4gICAgZm9yIChsZXQga2V5IGluIHBhcmFtcykge1xuICAgICAgaWYgKCFoYXNQYXJhbSkge1xuICAgICAgICBoYXNQYXJhbSA9IHRydWU7XG4gICAgICAgIHNlYXJjaFF1ZXJ5ICs9ICc/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlYXJjaFF1ZXJ5ICs9ICcmJztcbiAgICAgIH1cblxuICAgICAgc2VhcmNoUXVlcnkgKz0ga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybCArIHNlYXJjaFF1ZXJ5O1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG4vKiogVGhlIGN1cnJlbnQgbGliIHZlcnNpb24sIHJlcG9ydGVkIHdpdGggZXJyb3JzIGFuZCBhbmFseXRpY3MgKi9cbmV4cG9ydCBjb25zdCBMSUJfVkVSU0lPTiA9ICd2MC45LjAnO1xuXG4vKiogVGhlIGJhc2UgdXJsIGZvciB0aGUgYXBpIGJhY2tlbmQgKi9cbmV4cG9ydCBjb25zdCBBUElfQkFTRV9VUkwgPSAnaHR0cHM6Ly9saXZlYXBpLnlleHQuY29tJztcblxuLyoqIFRoZSBkZWZhdWx0IHVybCBmb3IgY29tcGlsZWQgY29tcG9uZW50IHRlbXBsYXRlcyAqL1xuZXhwb3J0IGNvbnN0IENPTVBJTEVEX1RFTVBMQVRFU19VUkwgPSBgaHR0cHM6Ly9hc3NldHMuc2l0ZXNjZG4ubmV0L2Fuc3dlcnMvJHtMSUJfVkVSU0lPTn0vYW5zd2Vyc3RlbXBsYXRlcy5jb21waWxlZC5taW4uanNgO1xuXG4vKiogVGhlIGJhc2UgdXJsIGZvciB0aGUgYW5hbHl0aWNzIGJhY2tlbmQgICovXG5leHBvcnQgY29uc3QgQU5BTFlUSUNTX0JBU0VfVVJMID0gJ2h0dHBzOi8vcmVhbHRpbWVhbmFseXRpY3MueWV4dC5jb20nO1xuIiwiLyoqIEBtb2R1bGUgU2VhcmNoUGFyYW1zICovXG5cbi8qIGdsb2JhbCB3aW5kb3cgKi9cblxuLyoqXG4gKiBTZWFyY2hQYXJhbXMgaXMgYSBjbGFzcyB0byBnZXQgdGhlIHNlYXJjaCBwYXJhbXMgaW4gYSBVUkwuXG4gKiBJdCBpcyBhIHJlcGxhY2VtZW50IGZvciBVUkwuc2VhcmNoUGFyYW1zIGFuZCBVUkxTZWFyY2hQYXJhbXMgZm9yIGJyb3dzZXJzIGxpa2UgSUUxMVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hQYXJhbXMge1xuICBjb25zdHJ1Y3RvciAodXJsKSB7XG4gICAgLyoqXG4gICAgICogTWFwcGluZyBvZiBhbGwgcXVlcnkgcGFyYW1ldGVycyBpbiB0aGUgZ2l2ZW4gdXJsLCBxdWVyeSBwYXJhbSAtPiB2YWx1ZVxuICAgICAqIE9ubHkgdXNlZCBpZiBVUkxTZWFyY2hQYXJhbXMgZG9lcyBub3QgZXhpc3QgaW4gdGhlIHdpbmRvd1xuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9wYXJhbXMgPSB7fTtcblxuICAgIGlmICh3aW5kb3cgJiYgd2luZG93LlVSTFNlYXJjaFBhcmFtcykge1xuICAgICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXModXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGFyYW1zID0gdGhpcy5wYXJzZSh1cmwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJzZSBjcmVhdGVzIGEgbWFwcGluZyBvZiBhbGwgcXVlcnkgcGFyYW1zIGluIGEgZ2l2ZW4gdXJsXG4gICAqIFRoZSBxdWVyeSBwYXJhbSB2YWx1ZXMgYXJlIGRlY29kZWQgYmVmb3JlIGJlaW5nIHB1dCBpbiB0aGUgbWFwXG4gICAqIFRocmVlIHR5cGVzIG9mIGlucHV0IGFyZSBzdXBwb3J0ZWRcbiAgICogICAoMSkgZnVsbCBVUkwgZS5nLiBodHRwOi8vd3d3LnlleHQuY29tLz9xPWhlbGxvXG4gICAqICAgKDIpIHBhcmFtcyB3aXRoID8gZS5nLiA/cT1oZWxsb1xuICAgKiAgICgxKSBwYXJhbXMgd2l0aG91dCA/IGUuZy4gcT1oZWxsb1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmxcbiAgICogQHJldHVybnMge09iamVjdH0gbWFwcGluZyBmcm9tIHF1ZXJ5IHBhcmFtIC0+IHZhbHVlIHdoZXJlIHZhbHVlIGlzICcnIGlmIG5vIHZhbHVlIGlzIHByb3ZpZGVkXG4gICAqL1xuICBwYXJzZSAodXJsKSB7XG4gICAgbGV0IHBhcmFtcyA9IHt9O1xuICAgIGxldCBzZWFyY2ggPSB1cmw7XG5cbiAgICBpZiAoc2VhcmNoID09PSAnJykge1xuICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9XG5cbiAgICAvLyBOb3JtYWxpemUgYWxsIHVybCBpbnB1dHMgdG8gc3RyaW5nIG9mIHF1ZXJ5IHBhcmFtcyBzZXBhcmF0ZWQgYnkgJlxuICAgIGlmICh1cmwuaW5kZXhPZignPycpID4gLTEpIHtcbiAgICAgIHNlYXJjaCA9IHVybC5zbGljZSh1cmwuaW5kZXhPZignPycpICsgMSk7XG4gICAgfVxuXG4gICAgY29uc3QgZW5jb2RlZFBhcmFtcyA9IHNlYXJjaC5zcGxpdCgnJicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5jb2RlZFBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5VmFsID0gZW5jb2RlZFBhcmFtc1tpXS5zcGxpdCgnPScpO1xuICAgICAgaWYgKGtleVZhbC5sZW5ndGggPiAxKSB7XG4gICAgICAgIHBhcmFtc1trZXlWYWxbMF1dID0gU2VhcmNoUGFyYW1zLmRlY29kZShrZXlWYWxbMV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zW2tleVZhbFswXV0gPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gcXVlcnkgcGFyYW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBxdWVyeSBwYXJhbSBrZXkgdG8gZ2V0IHRoZSB2YWx1ZSBvZlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IHBhcmFtIHZhbHVlLCBudWxsIG90aGVyd2lzZVxuICAgKi9cbiAgZ2V0IChxdWVyeSkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5fcGFyYW1zW1N0cmluZyhxdWVyeSldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9wYXJhbXNbcXVlcnldO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldCBjaGFuZ2VzIHRoZSB2YWx1ZSBvZiBhIGdpdmVuIHF1ZXJ5IHBhcmFtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIHRoZSBxdWVyeSBwYXJhbSBrZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIHRoZSB2YWx1ZSBvZiB0aGUgcXVlcnkgcGFyYW0gdXBkYXRlIHdpdGhcbiAgICovXG4gIHNldCAobmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLl9wYXJhbXNbU3RyaW5nKG5hbWUpXSA9IFN0cmluZyh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogaGFzIGNoZWNrcyB0byBzZWUgaWYgdGhlIGdpdmVuIHF1ZXJ5IHBhcmFtIGtleSBleGlzdHMgaW4gdGhlIHBhcmFtcyBvYmplY3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBxdWVyeSBwYXJhbSB0byBjaGVja1xuICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBxdWVyeSBwYXJhbSBpcyBpbiB0aGUgcGFyYW1zIG9iamVjdCwgZmFsc2Ugby93XG4gICAqL1xuICBoYXMgKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHF1ZXJ5IGluIHRoaXMuX3BhcmFtcztcbiAgfVxuXG4gIC8qKlxuICAgKiB0b1N0cmluZyByZXR1cm5zIGEgdXJsIHdpdGggYWxsIHRoZSBxdWVyeSBwYXJhbXMgaW4gdGhlIHBhcmFtcyBvYmplY3QgKHdpdGhvdXQgYSA/KVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1N0cmluZyAoKSB7XG4gICAgbGV0IHN0cmluZyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9wYXJhbXMpIHtcbiAgICAgIHN0cmluZy5wdXNoKGAke2tleX09JHtTZWFyY2hQYXJhbXMuZW5jb2RlKHRoaXMuX3BhcmFtc1trZXldKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZy5qb2luKCcmJyk7XG4gIH1cblxuICBlbnRyaWVzICgpIHtcbiAgICBsZXQgZW50cmllcyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9wYXJhbXMpIHtcbiAgICAgIGVudHJpZXMucHVzaChba2V5LCB0aGlzLl9wYXJhbXNba2V5XV0pO1xuICAgIH1cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIC8qKlxuICAgKiBkZWNvZGUgcmV0dXJucyB0aGUgZGVjb2RlZCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyB0byBkZWNvZGVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGRlY29kZSAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHJpbmcucmVwbGFjZSgvWyArXS9nLCAnJTIwJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIGRlY29kZSByZXR1cm5zIHRoZSBlbmNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBzdHJpbmcgKGUuZy4gKyAtPiAlMkIpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyB0byBlbmNvZGVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGVuY29kZSAoc3RyaW5nKSB7XG4gICAgbGV0IHJlcGxhY2UgPSB7XG4gICAgICAnISc6ICclMjEnLFxuICAgICAgXCInXCI6ICclMjcnLFxuICAgICAgJygnOiAnJTI4JyxcbiAgICAgICcpJzogJyUyOScsXG4gICAgICAnJTIwJzogJysnXG4gICAgfTtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZykucmVwbGFjZSgvWyEnKCldfCUyMC9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiByZXBsYWNlW21hdGNoXTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXBpUmVxdWVzdCAqL1xuXG5pbXBvcnQgSHR0cFJlcXVlc3RlciBmcm9tICcuL2h0dHByZXF1ZXN0ZXInO1xuaW1wb3J0IHsgQVBJX0JBU0VfVVJMLCBMSUJfVkVSU0lPTiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uL3VpL2RvbS9zZWFyY2hwYXJhbXMnOyAvLyBUT0RPIGlkZWFsbHkgdGhpcyB3b3VsZCBiZSBwYXNzZWQgaW4gYXMgYSBwYXJhbVxuXG4vKipcbiAqIEFwaVJlcXVlc3QgaXMgdGhlIGJhc2UgY2xhc3MgZm9yIGFsbCBBUEkgcmVxdWVzdHMuXG4gKiBJdCBkZWZpbmVzIGFsbCBvZiB0aGUgY29yZSBwcm9wZXJ0aWVzIHJlcXVpcmVkIHRvIG1ha2UgYSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaVJlcXVlc3Qge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3Rpb24gdXNlZCBmb3IgbWFraW5nIG5ldHdvcmsgcmVxdWVzdCBhbmQgaGFuZGxpbmcgZXJyb3JzXG4gICAgICogQHR5cGUge0h0dHBSZXF1ZXN0ZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9yZXF1ZXN0ZXIgPSBuZXcgSHR0cFJlcXVlc3RlcigpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhc2VVcmwgdG8gdXNlIGZvciBtYWtpbmcgYSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Jhc2VVcmwgPSBvcHRzLmJhc2VVcmwgfHwgQVBJX0JBU0VfVVJMO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGVuZHBvaW50IHRvIHVzZSBpbiB0aGUgdXJsIChhcHBlbmRlZCB0byB0aGUge2Jhc2VVcmx9KVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9lbmRwb2ludCA9IG9wdHMuZW5kcG9pbnQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBpS2V5ID0gb3B0cy5hcGlLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBBUEkgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVyc2lvbiA9IG9wdHMudmVyc2lvbiB8fCAyMDE5MDEwMTtcblxuICAgIC8qKlxuICAgICAqIEFkZGl0aW9uYWwgZGF0YSBwYXJhbXMgdGhhdCBhcmUgc2VudCBhbG9uZyB3aXRoIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3BhcmFtcyA9IG9wdHMucGFyYW1zIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCBjcmVhdGVzIGEgbmV3IGBHRVRgIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGUgcmVxdWVzdCBjbGFzc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGdldCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3Rlci5nZXQodGhpcy5fYmFzZVVybCArIHRoaXMuX2VuZHBvaW50LCB0aGlzLnBhcmFtcyh0aGlzLl9wYXJhbXMpKTtcbiAgfVxuXG4gIHBvc3QgKG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdGVyLnBvc3QodGhpcy5fYmFzZVVybCArIHRoaXMuX2VuZHBvaW50LCB0aGlzLnBhcmFtcyh0aGlzLl9wYXJhbXMpLCBvcHRzKTtcbiAgfVxuXG4gIHBhcmFtcyAocGFyYW1zKSB7XG4gICAgdmFyIGJhc2VQYXJhbXMgPSB7XG4gICAgICAndic6IHRoaXMuX3ZlcnNpb24sXG4gICAgICAnYXBpX2tleSc6IHRoaXMuX2FwaUtleSxcbiAgICAgICdqc0xpYlZlcnNpb24nOiBMSUJfVkVSU0lPTlxuICAgIH07XG5cbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcblxuICAgIGlmICh1cmxQYXJhbXMuaGFzKCdiZXRhJykpIHtcbiAgICAgIGJhc2VQYXJhbXNbJ2JldGEnXSA9IHVybFBhcmFtcy5nZXQoJ2JldGEnKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYW55IHBhcmFtYXRlcnMgd2hvcyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC5cbiAgICAvL1xuICAgIC8vIE5PVEUoYmlsbHkpIFByb2JhYmx5IGJldHRlciB0byBiZSBleHBsaWNpdCBhYm91dCBob3cgdG8gaGFuZGxlIHRoaXMgYXQgdGhlIHJlcXVlc3QgYnVpbGRpbmcgbGV2ZWwsXG4gICAgLy8gYnV0IEkgY2FuJ3Qgc2VlIGFueSBjYXNlcyB3aGVyZSB3ZSdkIGV2ZXIgd2FudCB0byBzZW5kICd1bmRlZmluZWQnIGFzIGEgdmFsdWUgdG8gdGhlIHNlcnZlci5cbiAgICAvLyBTbyBpdCdzIHByb2JhYmx5IGZpbmUgdG8gJ2NsZWFuJyB0aGUgcGFyYW1zIG9iamVjdCBoZXJlXG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAocGFyYW1zW2tleV0gPT09IHVuZGVmaW5lZCB8fCBwYXJhbXNba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgcGFyYW1zW2tleV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihiYXNlUGFyYW1zLCBwYXJhbXMgfHwge30pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBFcnJvcnMgKi9cblxuLyoqXG4gKiBBbnN3ZXJzQmFzZUVycm9yIGlzIGFuIGV4dGVuc2lvbiBvZiB0aGUgYmFzZSBFcnJvciBvYmplY3QuXG4gKiBUaGlzIGlzIHRoZSBvYmplY3QgdGhhdCBpcyB1c2VkIHRvIHdoZW4gcmVwb3J0aW5nIHRvIHRoZSBzZXJ2ZXIuXG4gKiBAZXh0ZW5kcyBFcnJvclxuICpcbiAqIEVycm9yIGNvZGVzIGZhbGwgaW50byBvbmUgb2YgZm91ciBjYXRlZ29yaWVzOlxuICogMVhYIGVycm9yczogQmFzaWMgZXJyb3JzXG4gKiAyWFggZXJyb3JzOiBVSSBlcnJvcnNcbiAqIDNYWCBlcnJvcnM6IEVuZHBvaW50IGVycm9yc1xuICogNFhYIGVycm9yczogQ29yZSBlcnJvcnNcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNCYXNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChlcnJvckNvZGUsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMuZXJyb3JDb2RlID0gZXJyb3JDb2RlO1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLmJvdW5kYXJ5ID0gYm91bmRhcnk7XG4gICAgdGhpcy5yZXBvcnRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKGNhdXNlZEJ5KSB7XG4gICAgICB0aGlzLmNhdXNlZEJ5ID0gY2F1c2VkQnkgaW5zdGFuY2VvZiBBbnN3ZXJzQmFzZUVycm9yXG4gICAgICAgID8gY2F1c2VkQnlcbiAgICAgICAgOiBBbnN3ZXJzQmFzZUVycm9yLmZyb20oY2F1c2VkQnkpO1xuICAgIH1cbiAgfVxuXG4gIHRvSnNvbiAoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMpO1xuICB9XG5cbiAgdG9TdHJpbmcgKCkge1xuICAgIGxldCBzdHJpbmcgPSBgJHt0aGlzLmVycm9yTWVzc2FnZX0gKCR7dGhpcy5ib3VuZGFyeX0pYDtcbiAgICBpZiAodGhpcy5jYXVzZWRCeSkge1xuICAgICAgc3RyaW5nICs9IGBcXG4gIENhdXNlZCBCeTogJHt0aGlzLmNhdXNlZEJ5LnRvU3RyaW5nKCl9YDtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChidWlsdGluRXJyb3IsIGJvdW5kYXJ5KSB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoYnVpbHRpbkVycm9yLm1lc3NhZ2UsIGJvdW5kYXJ5KTtcbiAgICBlcnJvci5zdGFjayA9IGJ1aWx0aW5FcnJvci5zdGFjaztcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzQmFzaWNFcnJvciBpcyBhIHdyYXBwZXIgYXJvdW5kIGFsbCB0aGUgYnVpbHQtaW4gZXJyb3JzXG4gKiBlLmcuIHVuZGVmaW5lZCB2YXJpYWJsZXMsIGluY29ycmVjdCBzeW50YXgsIHR5cGVzLCBtaXNzaW5nIG1ldGhvZHMsIGV0Yy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNCYXNpY0Vycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigxMDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzVWlFcnJvciB1c2VkIGZvciB0aGluZ3MgbGlrZSBET00gZXJyb3JzLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc1VpRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDIwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNDb21wb25lbnRFcnJvciBpcyB1c2VkIGZvciBDb21wb25lbnQgb3JpZW50ZWQgZXJyb3JzXG4gKiBlLmcuIGZhaWx1cmUgdG8gcmVuZGVyLCBvciBjYXRjaGluZyB1bmtub3ducy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNDb21wb25lbnRFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgY29tcG9uZW50LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDIwMSwgbWVzc2FnZSwgY29tcG9uZW50LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzRW5kcG9pbnRFcnJvciByZXByZXNlbnRzIGFsbCBuZXR3b3JrIHJlbGF0ZWQgZXJyb3JzLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0VuZHBvaW50RXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDMwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNDb3JlRXJyb3IgcmVwcmVzZW50cyBlcnJvcnMgZm9yIHByZWNvbmRpdGlvbiBmYWlsdXJlcyBpbiB0aGUgY29yZSBsaWJyYXJ5XG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQ29yZUVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcig0MDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzU3RvcmFnZUVycm9yIHJlcHJlc2VudHMgc3RvcmFnZSByZWxhdGVkIGVycm9yc1xuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc1N0b3JhZ2VFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgc3RvcmFnZUtleSwgZGF0YSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcig0MDEsIG1lc3NhZ2UsICdTdG9yYWdlJywgY2F1c2VkQnkpO1xuICAgIHRoaXMuc3RvcmFnZUtleSA9IHN0b3JhZ2VLZXk7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNBbmFseXRpY3NFcnJvciBpcyB1c2VkIGZvciBlcnJvcnMgd2hlbiByZXBvcnRpbmcgYW5hbHl0aWNzXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGV2ZW50LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDQwMiwgbWVzc2FnZSwgJ0FuYWx5dGljcycsIGNhdXNlZEJ5KTtcbiAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaEFwaSAqL1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IHsgQW5zd2Vyc0Jhc2ljRXJyb3IsIEFuc3dlcnNDb3JlRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBTZWFyY2hBcGkgaXMgdGhlIEFQSSBmb3IgZG9pbmcgdmFyaW91cyB0eXBlcyBvZiBzZWFyY2hcbiAqIG92ZXIgdGhlIG5ldHdvcmsgKGUuZy4gdmVydGljYWwgb3IgdW5pdmVyc2FsKVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hBcGkge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgQVBJIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghY29uZmlnLmFwaUtleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBcGkgS2V5IGlzIHJlcXVpcmVkJywgJ1NlYXJjaCcpO1xuICAgIH1cbiAgICB0aGlzLl9hcGlLZXkgPSBjb25maWcuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIEFuc3dlcnMgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFjb25maWcuZXhwZXJpZW5jZUtleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBbnN3ZXJzIEtleSBpcyByZXF1aXJlZCcsICdTZWFyY2gnKTtcbiAgICB9XG4gICAgdGhpcy5fZXhwZXJpZW5jZUtleSA9IGNvbmZpZy5leHBlcmllbmNlS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFuc3dlcnMgY29uZmlnIHZlcnNpb24gdG8gdXNlIGZvciBhbGwgcmVxdWVzdHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24gPSBjb25maWcuZXhwZXJpZW5jZVZlcnNpb247XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgQVBJIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnNpb24gPSBjb25maWcudmVyc2lvbiB8fCAyMDE5MDEwMSB8fCAyMDE5MDMwMTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBsb2NhbGUgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIWNvbmZpZy5sb2NhbGUpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignTG9jYWxlIGlzIHJlcXVpcmVkJywgJ1NlYXJjaCcpO1xuICAgIH1cbiAgICB0aGlzLl9sb2NhbGUgPSBjb25maWcubG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBpbiB0aGUgY29udGV4dCBvZiBhIHZlcnRpY2FsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbEtleSB2ZXJ0aWNhbCBJRCBmb3IgdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge29iamVjdH0gcXVlcnkgVGhlIHF1ZXJ5IGRldGFpbHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmlucHV0IFRoZSBpbnB1dCB0byBzZWFyY2ggZm9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5maWx0ZXIgVGhlIGZpbHRlciB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuZmFjZXRGaWx0ZXIgVGhlIGZhY2V0IGZpbHRlciB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlcnkubGltaXQgVGhlIG1heCBudW1iZXIgb2YgcmVzdWx0cyB0byBpbmNsdWRlLCBtYXggb2YgNTBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1ZXJ5Lm9mZnNldCBUaGUgcmVzdWx0cyBvZmZzZXQsIGZvciBmZXRjaGluZyBtb3JlIHJlc3VsdHMgb2YgdGhlIHNhbWUgcXVlcnlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmlkIFRoZSBxdWVyeSBJRCB0byB1c2UuIElmIHBhZ2luZyB3aXRoaW4gYSBxdWVyeSwgdGhlIHNhbWUgSUQgc2hvdWxkIGJlIHVzZWRcbiAgICogQHBhcmFtIHtPYmplY3R9IHF1ZXJ5Lmdlb2xvY2F0aW9uIFRoZSB1c2VyJ3MgZ2VvbG9jYXRpb24gcG9zaXRpb24gdXNlZCB0byBiaWFzIHRoZSByZXN1bHRzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcXVlcnkuaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQgSWYgdHJ1ZSwgYXNrcyB0aGUgc2VydmVyIHRvIHJldHVybiBkeW5hbWljIGZpbHRlcnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LnNraXBTcGVsbENoZWNrIFRoZSBib29sZWFuIGFzIHN0cmluZyB0byBpbmRpY2F0ZSBpZiBpdCBzaG91bGQgc2tpcCBzcGVsbCBjaGVja2luZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkucXVlcnlUcmlnZ2VyIFRoZSBzb3VyY2UgdGhhdCB0cmlnZ2VycyBxdWVyeSBzdWNoIGFzIHN1Z2dlc3RcbiAgICovXG4gIHZlcnRpY2FsU2VhcmNoICh2ZXJ0aWNhbEtleSwgeyBpbnB1dCwgZmlsdGVyLCBmYWNldEZpbHRlciwgbGltaXQsIG9mZnNldCwgaWQsIGdlb2xvY2F0aW9uLCBpc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCwgc2tpcFNwZWxsQ2hlY2ssIHF1ZXJ5VHJpZ2dlciB9KSB7XG4gICAgaWYgKGxpbWl0ID4gNTApIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29yZUVycm9yKCdQcm92aWRlZCBzZWFyY2ggbGltaXQgdW5zdXBwb3J0ZWQnLCAnU2VhcmNoQXBpJyk7XG4gICAgfVxuXG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL3ZlcnRpY2FsL3F1ZXJ5JyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBpbnB1dCxcbiAgICAgICAgJ2V4cGVyaWVuY2VLZXknOiB0aGlzLl9leHBlcmllbmNlS2V5LFxuICAgICAgICAndmVyc2lvbic6IHRoaXMuX2V4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgICAnZmlsdGVycyc6IGZpbHRlcixcbiAgICAgICAgJ2ZhY2V0RmlsdGVycyc6IGZhY2V0RmlsdGVyLFxuICAgICAgICAndmVydGljYWxLZXknOiB2ZXJ0aWNhbEtleSxcbiAgICAgICAgJ2xpbWl0JzogbGltaXQsXG4gICAgICAgICdvZmZzZXQnOiBvZmZzZXQsXG4gICAgICAgICdsb2NhdGlvbic6IGdlb2xvY2F0aW9uID8gYCR7Z2VvbG9jYXRpb24ubGF0fSwke2dlb2xvY2F0aW9uLmxuZ31gIDogbnVsbCxcbiAgICAgICAgJ3JhZGl1cyc6IGdlb2xvY2F0aW9uID8gZ2VvbG9jYXRpb24ucmFkaXVzIDogbnVsbCxcbiAgICAgICAgJ3F1ZXJ5SWQnOiBpZCxcbiAgICAgICAgJ3JldHJpZXZlRmFjZXRzJzogaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQsXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGUsXG4gICAgICAgICdza2lwU3BlbGxDaGVjayc6IHNraXBTcGVsbENoZWNrLFxuICAgICAgICAncXVlcnlUcmlnZ2VyJzogcXVlcnlUcmlnZ2VyXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggYWNyb3NzIGFsbCB2ZXJ0aWNhbHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5U3RyaW5nIFRoZSBpbnB1dCB0byBzZWFyY2ggZm9yXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMuZ2VvbG9jYXRpb24gdGhlIHVzZXIncyBnZW9sb2NhdGlvbiBwb3NpdGlvbiB1c2VkIHRvIGJpYXMgdGhlIHJlc3VsdHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5za2lwU3BlbGxDaGVjayBUaGUgYm9vbGVhbiBhcyBzdHJpbmcgdG8gaW5kaWNhdGUgaWYgaXQgc2hvdWxkIHNraXAgc3BlbGwgY2hlY2tpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5xdWVyeVRyaWdnZXIgVGhlIHNvdXJjZSB0aGF0IHRyaWdnZXJzIHF1ZXJ5IHN1Y2ggYXMgc3VnZ2VzdFxuICAgKi9cbiAgdW5pdmVyc2FsU2VhcmNoIChxdWVyeVN0cmluZywgcGFyYW1zKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL3F1ZXJ5JyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBxdWVyeVN0cmluZyxcbiAgICAgICAgJ2V4cGVyaWVuY2VLZXknOiB0aGlzLl9leHBlcmllbmNlS2V5LFxuICAgICAgICAnbG9jYXRpb24nOiBwYXJhbXMuZ2VvbG9jYXRpb24gPyBgJHtwYXJhbXMuZ2VvbG9jYXRpb24ubGF0fSwke3BhcmFtcy5nZW9sb2NhdGlvbi5sbmd9YCA6IG51bGwsXG4gICAgICAgICdyYWRpdXMnOiBwYXJhbXMuZ2VvbG9jYXRpb24gPyBwYXJhbXMuZ2VvbG9jYXRpb24ucmFkaXVzIDogbnVsbCxcbiAgICAgICAgJ3ZlcnNpb24nOiB0aGlzLl9leHBlcmllbmNlVmVyc2lvbixcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZSxcbiAgICAgICAgJ3NraXBTcGVsbENoZWNrJzogcGFyYW1zLnNraXBTcGVsbENoZWNrLFxuICAgICAgICAncXVlcnlUcmlnZ2VyJzogcGFyYW1zLnF1ZXJ5VHJpZ2dlclxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEhpZ2hsaWdodGVkVmFsdWUgKi9cblxuLyoqXG4gKiBNb2RlbCByZXByZXNlbnRpbmcgYSBoaWdobGlnaHRlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGlnaGxpZ2h0ZWRWYWx1ZSB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICB0aGlzLnZhbHVlID0gZGF0YS52YWx1ZSB8fCBkYXRhLnNob3J0VmFsdWUgfHwgJyc7XG4gICAgdGhpcy5tYXRjaGVkU3Vic3RyaW5ncyA9IGRhdGEubWF0Y2hlZFN1YnN0cmluZ3MgfHwgW107XG4gIH1cblxuICAvKipcbiAgICogZ2V0IGhpZ2hsaWdodGVkIHZhbHVlIHN0cmluZ1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0ICgpIHtcbiAgICB0aGlzLl9zb3J0TWF0Y2hlZFN1YnN0cmluZ3MoKTtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRIaWdobGlnaHRlZFZhbHVlKHRoaXMudmFsdWUsIHRoaXMubWF0Y2hlZFN1YnN0cmluZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCBpbnZlcnRlZCBoaWdobGlnaHRlZCB2YWx1ZSBzdHJpbmdcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldEludmVydGVkICgpIHtcbiAgICB0aGlzLl9zb3J0TWF0Y2hlZFN1YnN0cmluZ3MoKTtcbiAgICBjb25zdCBpbnZlcnRlZFN1YnN0cmluZ3MgPSB0aGlzLl9nZXRJbnZlcnRlZFN1YnN0cmluZ3ModGhpcy5tYXRjaGVkU3Vic3RyaW5ncywgdGhpcy52YWx1ZS5sZW5ndGgpO1xuICAgIHJldHVybiB0aGlzLl9idWlsZEhpZ2hsaWdodGVkVmFsdWUodGhpcy52YWx1ZSwgaW52ZXJ0ZWRTdWJzdHJpbmdzKTtcbiAgfVxuXG4gIF9zb3J0TWF0Y2hlZFN1YnN0cmluZ3MgKCkge1xuICAgIHRoaXMubWF0Y2hlZFN1YnN0cmluZ3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGEub2Zmc2V0IDwgYi5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuXG4gICAgICBpZiAoYS5vZmZzZXQgPiBiLm9mZnNldCkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gIH1cblxuICBfZ2V0SW52ZXJ0ZWRTdWJzdHJpbmdzIChtYXRjaGVkU3Vic3RyaW5ncywgdmFsdWVMZW5ndGgpIHtcbiAgICBjb25zdCBpbnZlcnRlZFN1YnN0cmluZ3MgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdGNoZWRTdWJzdHJpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzdWJzdHJpbmcgPSBtYXRjaGVkU3Vic3RyaW5nc1tpXTtcbiAgICAgIGNvbnN0IG5leHRPZmZzZXQgPSBzdWJzdHJpbmcub2Zmc2V0ICsgc3Vic3RyaW5nLmxlbmd0aDtcbiAgICAgIGlmIChpID09PSAwICYmIHN1YnN0cmluZy5vZmZzZXQgIT09IDApIHtcbiAgICAgICAgaW52ZXJ0ZWRTdWJzdHJpbmdzLnB1c2goeyBvZmZzZXQ6IDAsIGxlbmd0aDogc3Vic3RyaW5nLm9mZnNldCB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlTGVuZ3RoID4gbmV4dE9mZnNldCkge1xuICAgICAgICBpbnZlcnRlZFN1YnN0cmluZ3MucHVzaCh7XG4gICAgICAgICAgb2Zmc2V0OiBuZXh0T2Zmc2V0LFxuICAgICAgICAgIGxlbmd0aDogaSA8IG1hdGNoZWRTdWJzdHJpbmdzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgID8gbWF0Y2hlZFN1YnN0cmluZ3NbaSArIDFdLm9mZnNldCAtIG5leHRPZmZzZXRcbiAgICAgICAgICAgIDogdmFsdWVMZW5ndGggLSBuZXh0T2Zmc2V0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW52ZXJ0ZWRTdWJzdHJpbmdzO1xuICB9XG5cbiAgX2J1aWxkSGlnaGxpZ2h0ZWRWYWx1ZSAodmFsLCBoaWdobGlnaHRlZFN1YnN0cmluZ3MpIHtcbiAgICBsZXQgaGlnaGxpZ2h0ZWRWYWx1ZSA9ICcnO1xuICAgIGxldCBuZXh0U3RhcnQgPSAwO1xuXG4gICAgaWYgKGhpZ2hsaWdodGVkU3Vic3RyaW5ncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBoaWdobGlnaHRlZFN1YnN0cmluZ3MubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBzdGFydCA9IE51bWJlcihoaWdobGlnaHRlZFN1YnN0cmluZ3Nbal0ub2Zmc2V0KTtcbiAgICAgIGxldCBlbmQgPSBzdGFydCArIGhpZ2hsaWdodGVkU3Vic3RyaW5nc1tqXS5sZW5ndGg7XG5cbiAgICAgIGhpZ2hsaWdodGVkVmFsdWUgKz0gW3ZhbC5zbGljZShuZXh0U3RhcnQsIHN0YXJ0KSwgJzxzdHJvbmc+JywgdmFsLnNsaWNlKHN0YXJ0LCBlbmQpLCAnPC9zdHJvbmc+J10uam9pbignJyk7XG5cbiAgICAgIGlmIChqID09PSBoaWdobGlnaHRlZFN1YnN0cmluZ3MubGVuZ3RoIC0gMSAmJiBlbmQgPCB2YWwubGVuZ3RoKSB7XG4gICAgICAgIGhpZ2hsaWdodGVkVmFsdWUgKz0gdmFsLnNsaWNlKGVuZCk7XG4gICAgICB9XG5cbiAgICAgIG5leHRTdGFydCA9IGVuZDtcbiAgICB9XG5cbiAgICByZXR1cm4gaGlnaGxpZ2h0ZWRWYWx1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlRGF0YSAqL1xuXG5pbXBvcnQgSGlnaGxpZ2h0ZWRWYWx1ZSBmcm9tICcuL2hpZ2hsaWdodGVkdmFsdWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVEYXRhIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIHRoaXMuc2VjdGlvbnMgPSBkYXRhLnNlY3Rpb25zIHx8IFtdO1xuICAgIHRoaXMucXVlcnlJZCA9IGRhdGEucXVlcnlJZCB8fCAnJztcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlKSB7XG4gICAgbGV0IHNlY3Rpb25zO1xuICAgIGlmIChyZXNwb25zZS5zZWN0aW9ucykge1xuICAgICAgc2VjdGlvbnMgPSByZXNwb25zZS5zZWN0aW9ucy5tYXAocyA9PiAoe1xuICAgICAgICBsYWJlbDogcy5sYWJlbCxcbiAgICAgICAgcmVzdWx0czogcy5yZXN1bHRzLm1hcChyID0+IG5ldyBBdXRvQ29tcGxldGVSZXN1bHQocikpXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlY3Rpb25zID0gW3sgcmVzdWx0czogcmVzcG9uc2UucmVzdWx0cy5tYXAociA9PiBuZXcgQXV0b0NvbXBsZXRlUmVzdWx0KHIpKSB9XTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBBdXRvQ29tcGxldGVEYXRhKHsgc2VjdGlvbnMsIHF1ZXJ5SWQ6IHJlc3BvbnNlLnF1ZXJ5SWQgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9Db21wbGV0ZVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICB0aGlzLmZpbHRlciA9IGRhdGEuZmlsdGVyIHx8IHt9O1xuICAgIHRoaXMuaGlnaGxpZ2h0ZWRWYWx1ZSA9IG5ldyBIaWdobGlnaHRlZFZhbHVlKGRhdGEpLmdldEludmVydGVkKCk7XG4gICAgdGhpcy5rZXkgPSBkYXRhLmtleSB8fCAnJztcbiAgICB0aGlzLm1hdGNoZWRTdWJzdHJpbmdzID0gZGF0YS5tYXRjaGVkU3Vic3RyaW5ncyB8fCBbXTtcbiAgICB0aGlzLnZhbHVlID0gZGF0YS52YWx1ZSB8fCAnJztcbiAgICB0aGlzLnNob3J0VmFsdWUgPSBkYXRhLnNob3J0VmFsdWUgfHwgdGhpcy52YWx1ZTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIgKi9cblxuaW1wb3J0IEF1dG9Db21wbGV0ZURhdGEgZnJvbSAnLi4vbW9kZWxzL2F1dG9jb21wbGV0ZWRhdGEnO1xuXG4vKipcbiAqIEEgRGF0YSBUcmFuc2Zvcm1lciB0aGF0IHRha2VzIHRoZSByZXNwb25zZSBvYmplY3QgZnJvbSBhIEF1dG9Db21wbGV0ZSByZXF1ZXN0XG4gKiBBbmQgdHJhbnNmb3JtcyBpbiB0byBhIGZyb250LWVuZCBvcmllbnRlZCBkYXRhIHN0cnVjdHVyZSB0aGF0IG91clxuICogY29tcG9uZW50IGxpYnJhcnkgYW5kIGNvcmUgc3RvcmFnZSB1bmRlcnN0YW5kLlxuICpcbiAqIFRPRE8oYmlsbHkpIENyZWF0ZSBvdXIgb3duIGZyb250LWVuZCBkYXRhIG1vZGVsc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIge1xuICBzdGF0aWMgY2xlYW4gKG1vZHVsZUlkLCBkYXRhKSB7XG4gICAgaWYgKGRhdGEuc2VjdGlvbnMgJiYgZGF0YS5zZWN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBkYXRhLnNlY3Rpb25zO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnNlY3Rpb25zICYmIGRhdGEuc2VjdGlvbnMubGVuZ3RoID09PSAxICYmIGRhdGEuc2VjdGlvbnNbMF0ucmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBkYXRhLnNlY3Rpb25zO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBbbW9kdWxlSWRdOiBkYXRhXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB1bml2ZXJzYWwgKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIEF1dG9Db21wbGV0ZURhdGEuZnJvbShyZXNwb25zZSk7XG4gIH1cblxuICBzdGF0aWMgZmlsdGVyIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG5cbiAgc3RhdGljIHZlcnRpY2FsIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVBcGkgKi9cblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIgZnJvbSAnLi9hdXRvY29tcGxldGVkYXRhdHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgQW5zd2Vyc0Jhc2ljRXJyb3IsIEFuc3dlcnNFbmRwb2ludEVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogQXV0b0NvbXBsZXRlQXBpIGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBuZXR3b3JrIHJlbGF0ZWQgbWF0dGVyc1xuICogZm9yIGFsbCB0aGUgYXV0b2NvbXBsZXRlIGVuZHBvaW50cy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlQXBpIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIWNvbmZpZy5hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQXBpIEtleSBpcyByZXF1aXJlZCcsICdBdXRvQ29tcGxldGUnKTtcbiAgICB9XG4gICAgdGhpcy5fYXBpS2V5ID0gY29uZmlnLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBBbnN3ZXJzIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghY29uZmlnLmV4cGVyaWVuY2VLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQW5zd2VycyBLZXkgaXMgcmVxdWlyZWQnLCAnQXV0b0NvbXBsZXRlJyk7XG4gICAgfVxuICAgIHRoaXMuX2V4cGVyaWVuY2VLZXkgPSBjb25maWcuZXhwZXJpZW5jZUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBBUEkgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVyc2lvbiA9IGNvbmZpZy52ZXJzaW9uIHx8IDIwMTkwMTAxIHx8IDIwMTkwMzAxO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFuc3dlcnMgY29uZmlnIHZlcnNpb24gdG8gdXNlIGZvciBhbGwgcmVxdWVzdHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24gPSBjb25maWcuZXhwZXJpZW5jZVZlcnNpb247XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbG9jYWxlIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFjb25maWcubG9jYWxlKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0xvY2FsZSBpcyByZXF1aXJlZCcsICdBdXRvQ29tcGxldGUnKTtcbiAgICB9XG4gICAgdGhpcy5fbG9jYWxlID0gY29uZmlnLmxvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdXRvY29tcGxldGUgZmlsdGVyc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgVGhlIGlucHV0IHRvIHVzZSBmb3IgYXV0byBjb21wbGV0ZVxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdG8gdXNlIGZvciBmaWx0ZXJzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcudmVydGljYWxLZXkgVGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIGNvbmZpZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLmJhcktleSBUaGUgYmFyIGtleSBmb3IgdGhlIGNvbmZpZyB2MVxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnLnNlYXJjaFBhcmFtZXRlcnMgVGhlIHNlYXJjaCBwYXJhbWV0ZXJzIGZvciB0aGUgY29uZmlnIHYyXG4gICAqL1xuICBxdWVyeUZpbHRlciAoaW5wdXQsIGNvbmZpZykge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9maWx0ZXJzZWFyY2gnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IGlucHV0LFxuICAgICAgICAnZXhwZXJpZW5jZUtleSc6IHRoaXMuX2V4cGVyaWVuY2VLZXksXG4gICAgICAgICd2ZXJzaW9uJzogdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24sXG4gICAgICAgICd2ZXJ0aWNhbEtleSc6IGNvbmZpZy52ZXJ0aWNhbEtleSxcbiAgICAgICAgJ2lucHV0S2V5JzogY29uZmlnLmJhcktleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZSxcbiAgICAgICAgJ3NlYXJjaF9wYXJhbWV0ZXJzJzogSlNPTi5zdHJpbmdpZnkoY29uZmlnLnNlYXJjaFBhcmFtZXRlcnMpXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLmZpbHRlcihyZXNwb25zZS5yZXNwb25zZSwgY29uZmlnLmJhcktleSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoJ0ZpbHRlciBzZWFyY2ggcmVxdWVzdCBmYWlsZWQnLCAnQXV0b0NvbXBsZXRlJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICBxdWVyeVZlcnRpY2FsIChpbnB1dCwgdmVydGljYWxLZXksIGJhcktleSkge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy92ZXJ0aWNhbC9hdXRvY29tcGxldGUnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IGlucHV0LFxuICAgICAgICAnZXhwZXJpZW5jZUtleSc6IHRoaXMuX2V4cGVyaWVuY2VLZXksXG4gICAgICAgICd2ZXJzaW9uJzogdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24sXG4gICAgICAgICd2ZXJ0aWNhbEtleSc6IHZlcnRpY2FsS2V5LFxuICAgICAgICAnYmFyS2V5JzogYmFyS2V5LFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLnZlcnRpY2FsKHJlc3BvbnNlLnJlc3BvbnNlLCByZXF1ZXN0Ll9wYXJhbXMuYmFyS2V5KSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzRW5kcG9pbnRFcnJvcignVmVydGljYWwgc2VhcmNoIHJlcXVlc3QgZmFpbGVkJywgJ0F1dG9Db21wbGV0ZScsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcXVlcnlVbml2ZXJzYWwgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL2F1dG9jb21wbGV0ZScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogcXVlcnlTdHJpbmcsXG4gICAgICAgICdleHBlcmllbmNlS2V5JzogdGhpcy5fZXhwZXJpZW5jZUtleSxcbiAgICAgICAgJ3ZlcnNpb24nOiB0aGlzLl9leHBlcmllbmNlVmVyc2lvbixcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHF1ZXJ5U3RyaW5nKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLnVuaXZlcnNhbChyZXNwb25zZS5yZXNwb25zZSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoJ1VuaXZlcnNhbCBzZWFyY2ggcmVxdWVzdCBmYWlsZWQnLCAnQXV0b0NvbXBsZXRlJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFF1ZXN0aW9uQW5zd2VyQXBpICovXG5cbmltcG9ydCBBcGlSZXF1ZXN0IGZyb20gJy4uL2h0dHAvYXBpcmVxdWVzdCc7XG5pbXBvcnQgeyBBbnN3ZXJzQmFzaWNFcnJvciwgQW5zd2Vyc0VuZHBvaW50RXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBRdWVzdGlvbkFuc3dlckFwaSBleHBvc2VzIGFuIGludGVyZmFjZSB0byBkbyBuZXR3b3JreSB0aGluZ3MgYWdhaW5zdFxuICogdGhlIFEmQSBSRVNUIEFQSVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdGlvbkFuc3dlckFwaSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFjb25maWcuYXBpS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0FwaSBLZXkgaXMgcmVxdWlyZWQnLCAnUXVlc3Rpb25BbnN3ZXJBcGknKTtcbiAgICB9XG4gICAgdGhpcy5fYXBpS2V5ID0gY29uZmlnLmFwaUtleTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzdWJtaXRRdWVzdGlvbiB3aWxsIGNyZWF0ZSBhIG5ldHdvcmsgcmVxdWVzdCB0b1xuICAgKiBjcmVhdGUgYSBxdWVzdGlvbiBmb3IgUSZBLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcXVlc3Rpb24gVGhlIHF1ZXN0aW9uIG9iamVjdCB0byBzdWJtaXQgdG8gdGhlIHNlcnZlclxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlc3Rpb24uZW50aXR5SWQgVGhlIGVudGl0eSB0byBhc3NvY2lhdGUgd2l0aCB0aGUgcXVlc3Rpb24gKHJlcXVpcmVkKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ubGFudWFnZSBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIHF1ZXN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5zaXRlIFRoZSBcInB1Ymxpc2hlclwiIG9mIHRoZSAoZS5nLiAnRklSU1RfUEFSVFknKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ubmFtZSBUaGUgbmFtZSBvZiB0aGUgYXV0aG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5lbWFpbCBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgYXV0aG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5xdWVzdGlvblRleHQgVGhlIHF1ZXN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5xdWVzdGlvbkRlc2NyaXB0aW9uIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHF1ZXN0aW9uXG4gICAqL1xuICBzdWJtaXRRdWVzdGlvbiAocXVlc3Rpb24pIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL3F1ZXN0aW9ucycsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnZW50aXR5SWQnOiBxdWVzdGlvbi5lbnRpdHlJZCxcbiAgICAgICAgJ3NpdGUnOiBxdWVzdGlvbi5zaXRlLFxuICAgICAgICAnbmFtZSc6IHF1ZXN0aW9uLm5hbWUsXG4gICAgICAgICdlbWFpbCc6IHF1ZXN0aW9uLmVtYWlsLFxuICAgICAgICAncXVlc3Rpb25UZXh0JzogcXVlc3Rpb24ucXVlc3Rpb25UZXh0LFxuICAgICAgICAncXVlc3Rpb25EZXNjcmlwdGlvbic6IHF1ZXN0aW9uLnF1ZXN0aW9uRGVzY3JpcHRpb24sXG4gICAgICAgICdxdWVzdGlvbkxhbmd1YWdlJzogcXVlc3Rpb24ucXVlc3Rpb25MYW5ndWFnZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QucG9zdCgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoXG4gICAgICAgICAgJ1F1ZXN0aW9uIHN1Ym1pdCBmYWlsZWQnLFxuICAgICAgICAgICdRdWVzdGlvbkFuc3dlckFwaScsXG4gICAgICAgICAgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaFN0YXRlcyAqL1xuXG4vKipcbiAqIFNlYXJjaFN0YXRlcyBpcyBhbiBFTlVNIGZvciB0aGUgdmFyaW91cyBzdGFnZXMgb2Ygc2VhcmNoaW5nLFxuICogdXNlZCB0byBzaG93IGRpZmZlcmVudCB0ZW1wbGF0ZXNcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUFJFX1NFQVJDSDogJ3ByZS1zZWFyY2gnLFxuICBTRUFSQ0hfTE9BRElORzogJ3NlYXJjaC1sb2FkaW5nJyxcbiAgU0VBUkNIX0NPTVBMRVRFOiAnc2VhcmNoLWNvbXBsZXRlJ1xufTtcbiIsIi8qKiBAbW9kdWxlIFJlc3VsdCAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHQge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJhdyBwcm9maWxlIGRhdGFcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcmF3ID0gZGF0YS5yYXcgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmb3JtYXR0ZWQgcHJvZmlsZSBkYXRhXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Zvcm1hdHRlZCA9IGRhdGEuZm9ybWF0dGVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluZGV4IG51bWJlciBvZiB0aGUgcmVzdWx0XG4gICAgICogQHR5cGUge051bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLm9yZGluYWwgPSBkYXRhLm9yZGluYWwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSBvZiB0aGUgcmVzdWx0IGNhcmRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBib2R5IG9mIHRoZSBkZXRhaWxzIHNlY3Rpb24gb2YgdGhlIHJlc3VsdCBjYXJkLCBjYW4gY29udGFpbiBIVE1MXG4gICAgICogQHR5cGUge3N0cmluZ3wgbnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmRldGFpbHMgPSBkYXRhLmRldGFpbHMgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZXN0aW5hdGlvbiBsaW5rIGZvciB0aGUgdGl0bGUgb2YgdGhlIHJlc3VsdCBjYXJkXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMubGluayA9IGRhdGEubGluayB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIEVudGl0eSBJRCwgb3Igb3RoZXIgdW5pcXVlIGlkZW50aWZpZXIsIHVzZWQgZm9yIHRvIHBvd2VyIGludGVyYWN0aXZpdHlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5pZCA9IGRhdGEuaWQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdWJ0aXRsZSBvbiB0aGUgcmVzdWx0IGNhcmRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5zdWJ0aXRsZSA9IGRhdGEuc3VidGl0bGUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjbGFzcyBtb2RpZmllciwgdXN1YWxseSBkZXJpdmVkIGZyb20gdGhlIHZlcnRpY2FsIGNvbmZpZ3VyYXRpb24gSURcbiAgICAgKiBVc2VkIHRvIGFwcGx5IGRpZmZlcmVudCBzdHlsaW5nIHRvIGRpZmZlcmVudCByZXN1bHQgY2FyZCB0eXBlc1xuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLm1vZGlmaWVyID0gZGF0YS5tb2RpZmllciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsYXJnZSBkYXRlLCBvZiB0aGUgZm9ybWF0IHsgbW9udGg6ICdKYW4nLCBkYXk6ICcwMScgfVxuICAgICAqIEB0eXBlIHtPYmplY3R8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmJpZ0RhdGUgPSBkYXRhLmJpZ0RhdGUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFuIGltYWdlIHByb2ZpbGUgb2JqZWN0LCBleHBlY3RlZCB0byBoYXZlIGEgdXJsIHByb3BlcnR5XG4gICAgICogQHR5cGUge09iamVjdHxudWxsfVxuICAgICAqL1xuICAgIHRoaXMuaW1hZ2UgPSBkYXRhLmltYWdlIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBjYWxscyB0byBhY3Rpb24sIG9mIHRoZSBmb3JtYXQ6XG4gICAgICogeyBpY29uOiAnJywgdXJsOiAnJywgdGV4dDogJycsIGV2ZW50VHlwZTogJycsIGV2ZW50T3B0aW9uczoge319XG4gICAgICogQHR5cGUge0FycmF5fVxuICAgICAqL1xuICAgIHRoaXMuY2FsbHNUb0FjdGlvbiA9IGRhdGEuY2FsbHNUb0FjdGlvbiB8fCBbXTtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYW4gYWNjb3JkaWFuIHJlc3VsdCBzaG91bGQgYmUgY29sbGFwc2VkIGJ5IGRlZmF1bHRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbGxhcHNlZCA9IGRhdGEuY29sbGFwc2VkIHx8IHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlc3VsdEZhY3RvcnkgKi9cblxuaW1wb3J0IFJlc3VsdCBmcm9tICcuL3Jlc3VsdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdEZhY3Rvcnkge1xuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIFJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBJbmNsdWRlcyBkZWZhdWx0IG1hcHBpbmdzIG9mIEdvb2dsZUN1c3RvbVNlYXJjaEVuZ2luZSByZXN1bHRzIHRvXG4gICAqIHRoZSBmaWVsZHMgZXhwb3NlZCBieSB0aGUgdGVtcGxhdGUuXG4gICAqIEBwYXJhbSByZXN1bHRzRGF0YSAge0FycmF5fSBleHBlY3RlZCBmb3JtYXQ6IHsgZGF0YTogeyAuLi4gfSwgaGlnaGxpZ2h0ZWRGaWVsZHM6IHsgLi4uIH19XG4gICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn0gZm9ybWF0dGVycyBUaGUgZm9ybWF0dGVycyB0byBhcHBseSB0byB0aGUgcmVzdWx0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbElkIFRoZSB2ZXJ0aWNhbCBvZiB0aGVzZSByZXN1bHRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgQmFja2VuZCBzb3VyY2Ugb2YgdGhlc2UgcmVzdWx0c1xuICAgKiBAcmV0dXJucyB7UmVzdWx0W119XG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzdWx0c0RhdGEsIGZvcm1hdHRlcnMsIHZlcnRpY2FsSWQsIHNvdXJjZSkge1xuICAgIGxldCByZXN1bHRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gVE9ETyB1c2UgcmVzdWx0RGF0YS5oaWdobGlnaHRlZEZpZWxkcyB0b1xuICAgICAgLy8gdHJhbnNmb3JtIHJlc3VsdERhdGEuZGF0YSBpbnRvIGh0bWwtZnJpZW5kbHkgc3RyaW5ncyB0aGF0IGhpZ2hsaWdodCB2YWx1ZXMuXG4gICAgICAvLyBDaGVjayBmb3IgbmV3IGRhdGEgZm9ybWF0LCBvdGhlcndpc2UgZmFsbGJhY2sgdG8gbGVnYWN5XG5cbiAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHRzRGF0YVtpXS5kYXRhIHx8IHJlc3VsdHNEYXRhW2ldO1xuICAgICAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IHt9O1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGZvcm1hdHRlcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoW2tleSwgdmFsXSkgPT4ge1xuICAgICAgICAgIGlmIChmb3JtYXR0ZXJzW2tleV0pIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZERhdGFba2V5XSA9IGZvcm1hdHRlcnNba2V5XSh2YWwsIGRhdGEsIHZlcnRpY2FsSWQsIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHNvdXJjZSkge1xuICAgICAgICBjYXNlICdHT09HTEVfQ1NFJzpcbiAgICAgICAgICByZXN1bHRzLnB1c2goUmVzdWx0RmFjdG9yeS5mcm9tR29vZ2xlQ3VzdG9tU2VhcmNoRW5naW5lKGRhdGEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQklOR19DU0UnOlxuICAgICAgICAgIHJlc3VsdHMucHVzaChSZXN1bHRGYWN0b3J5LmZyb21CaW5nQ3VzdG9tU2VhcmNoRW5naW5lKGRhdGEpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnWkVOREVTSyc6XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKFJlc3VsdEZhY3RvcnkuZnJvbVplbmRlc2tTZWFyY2hFbmdpbmUoZGF0YSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdBTEdPTElBJzpcbiAgICAgICAgICByZXN1bHRzLnB1c2goUmVzdWx0RmFjdG9yeS5mcm9tQWxnb2xpYVNlYXJjaEVuZ2luZShkYXRhKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKFJlc3VsdEZhY3RvcnkuZnJvbUdlbmVyaWMoZGF0YSwgZm9ybWF0dGVkRGF0YSwgaSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIEFQSSByZXN1bHQgb2JqZWN0IGludG8gYSBnZW5lcmljIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcGFyYW0gZm9ybWF0dGVkRGF0YVxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICogQHJldHVybnMge1Jlc3VsdH1cbiAgICovXG4gIHN0YXRpYyBmcm9tR2VuZXJpYyAoZGF0YSwgZm9ybWF0dGVkRGF0YSwgaW5kZXgpIHtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh7XG4gICAgICByYXc6IGRhdGEsXG4gICAgICBmb3JtYXR0ZWQ6IGZvcm1hdHRlZERhdGEsXG4gICAgICB0aXRsZTogZm9ybWF0dGVkRGF0YS5uYW1lIHx8IGRhdGEubmFtZSxcbiAgICAgIGRldGFpbHM6IGZvcm1hdHRlZERhdGEuZGVzY3JpcHRpb24gfHwgdGhpcy50cnVuY2F0ZShkYXRhLmRlc2NyaXB0aW9uKSxcbiAgICAgIGxpbms6IGRhdGEud2Vic2l0ZSxcbiAgICAgIGlkOiBkYXRhLmlkLFxuICAgICAgb3JkaW5hbDogaW5kZXggKyAxXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBNYXBzIHZpZXcgbW9kZWwgZmllbGRzIGJhc2VkIG9uIHRoZSBBUEkgZGF0YSBmb3IgYSBHb29nbGUgQ3VzdG9tIFNlYXJjaCBFbmdpbmUgb2JqZWN0LlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0fVxuICAgKi9cbiAgc3RhdGljIGZyb21Hb29nbGVDdXN0b21TZWFyY2hFbmdpbmUgKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh7XG4gICAgICByYXc6IGRhdGEsXG4gICAgICB0aXRsZTogZGF0YS5odG1sVGl0bGUucmVwbGFjZSgvKDwoW14+XSspPikvaWcsICcnKSxcbiAgICAgIGRldGFpbHM6IGRhdGEuaHRtbFNuaXBwZXQsXG4gICAgICBsaW5rOiBkYXRhLmxpbmtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBBUEkgcmVzdWx0IG9iamVjdCBpbnRvIGEgcmVzdWx0IHZpZXcgbW9kZWwuXG4gICAqIE1hcHMgdmlldyBtb2RlbCBmaWVsZHMgYmFzZWQgb24gdGhlIEFQSSBkYXRhIGZvciBhIEJpbmcgQ3VzdG9tIFNlYXJjaCBFbmdpbmUgb2JqZWN0LlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0fVxuICAgKi9cbiAgc3RhdGljIGZyb21CaW5nQ3VzdG9tU2VhcmNoRW5naW5lIChkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBSZXN1bHQoe1xuICAgICAgcmF3OiBkYXRhLFxuICAgICAgdGl0bGU6IGRhdGEubmFtZSxcbiAgICAgIGRldGFpbHM6IGRhdGEuc25pcHBldCxcbiAgICAgIGxpbms6IGRhdGEudXJsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBNYXBzIHZpZXcgbW9kZWwgZmllbGRzIGJhc2VkIG9uIHRoZSBBUEkgZGF0YSBmb3IgYSBaZW5kZXNrIFNlYXJjaCBFbmdpbmUgb2JqZWN0LlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0fVxuICAgKi9cbiAgc3RhdGljIGZyb21aZW5kZXNrU2VhcmNoRW5naW5lIChkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBSZXN1bHQoe1xuICAgICAgcmF3OiBkYXRhLFxuICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgICBkZXRhaWxzOiBkYXRhLnNuaXBwZXQsXG4gICAgICBsaW5rOiBkYXRhLmh0bWxfdXJsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBNYXBzIHZpZXcgbW9kZWwgZmllbGRzIGJhc2VkIG9uIHRoZSBBUEkgZGF0YSBmb3IgYSBBbGdvbGlhIFNlYXJjaCBFbmdpbmUgb2JqZWN0LlxuICAgKiBEZXRhaWxzIGZpZWxkIGlzIHNldCB0byBvYmplY3RJRCBzaW5jZSByZXNwb25zZSBoYXMgb25seSBvbmUgZ2VuZXJhbCBmaWVsZCBvYmplY3RJRC5cbiAgICogQHBhcmFtIGRhdGFcbiAgICogQHJldHVybnMge1Jlc3VsdH1cbiAgICovXG4gIHN0YXRpYyBmcm9tQWxnb2xpYVNlYXJjaEVuZ2luZSAoZGF0YSkge1xuICAgIHJldHVybiBuZXcgUmVzdWx0KHtcbiAgICAgIHJhdzogZGF0YSxcbiAgICAgIGRldGFpbHM6IGRhdGEub2JqZWN0SUQsXG4gICAgICBpZDogZGF0YS5vYmplY3RJRFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRydW5jYXRlcyBzdHJpbmdzIHRvIDI1MCBjaGFyYWN0ZXJzLCBhdHRlbXB0aW5nIHRvIHByZXNlcnZlIHdob2xlIHdvcmRzXG4gICAqIEBwYXJhbSBzdHIge3N0cmluZ30gdGhlIHN0cmluZyB0byB0cnVuY2F0ZVxuICAgKiBAcGFyYW0gbGltaXQge051bWJlcn0gdGhlIG1heGltdW0gY2hhcmFjdGVyIGxlbmd0aCB0byByZXR1cm5cbiAgICogQHBhcmFtIHRyYWlsaW5nIHtzdHJpbmd9IGEgdHJhaWxpbmcgc3RyaW5nIHRvIGRlbm90ZSB0cnVuY2F0aW9uLCBlLmcuICcuLi4nXG4gICAqIEBwYXJhbSBzZXAge3N0cmluZ30gdGhlIHdvcmQgc2VwYXJhdG9yXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgdHJ1bmNhdGUgKHN0ciwgbGltaXQgPSAyNTAsIHRyYWlsaW5nID0gJy4uLicsIHNlcCA9ICcgJykge1xuICAgIGlmICghc3RyIHx8IHN0ci5sZW5ndGggPD0gbGltaXQpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgLy8gVE9ETyAoYm1jZ2lubmlzKTogc3BsaXQgcHVuY3R1YXRpb24gdG9vIHNvIHdlIGRvbid0IGVuZCB1cCB3aXRoIFwiZm9vLC4uLlwiXG4gICAgY29uc3Qgd29yZHMgPSBzdHIuc3BsaXQoc2VwKTtcbiAgICBjb25zdCBtYXggPSBsaW1pdCAtIHRyYWlsaW5nLmxlbmd0aDtcbiAgICBsZXQgdHJ1bmNhdGVkID0gJyc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB3b3JkID0gd29yZHNbaV07XG4gICAgICBpZiAodHJ1bmNhdGVkLmxlbmd0aCArIHdvcmQubGVuZ3RoID4gbWF4IHx8XG4gICAgICAgIChpICE9PSAwICYmIHRydW5jYXRlZC5sZW5ndGggKyB3b3JkLmxlbmd0aCArIHNlcC5sZW5ndGggPiBtYXgpKSB7XG4gICAgICAgIHRydW5jYXRlZCArPSB0cmFpbGluZztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHRydW5jYXRlZCArPSBpID09PSAwID8gd29yZCA6IHNlcCArIHdvcmQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydW5jYXRlZDtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VjdGlvbiAqL1xuXG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcbmltcG9ydCBSZXN1bHRGYWN0b3J5IGZyb20gJy4vcmVzdWx0ZmFjdG9yeSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3RvciAoZGF0YSwgdXJsLCBmb3JtYXR0ZXJzKSB7XG4gICAgdGhpcy5zZWFyY2hTdGF0ZSA9IFNlYXJjaFN0YXRlcy5TRUFSQ0hfQ09NUExFVEU7XG4gICAgdGhpcy52ZXJ0aWNhbENvbmZpZ0lkID0gZGF0YS52ZXJ0aWNhbENvbmZpZ0lkIHx8IG51bGw7XG4gICAgdGhpcy5yZXN1bHRzQ291bnQgPSBkYXRhLnJlc3VsdHNDb3VudCB8fCAwO1xuICAgIHRoaXMuZW5jb2RlZFN0YXRlID0gZGF0YS5lbmNvZGVkU3RhdGUgfHwgJyc7XG4gICAgdGhpcy5hcHBsaWVkUXVlcnlGaWx0ZXJzID0gQXBwbGllZFF1ZXJ5RmlsdGVyLmZyb20oZGF0YS5hcHBsaWVkUXVlcnlGaWx0ZXJzKTtcbiAgICB0aGlzLmZhY2V0cyA9IGRhdGEuZmFjZXRzIHx8IG51bGw7XG4gICAgdGhpcy5yZXN1bHRzID0gUmVzdWx0RmFjdG9yeS5mcm9tKGRhdGEucmVzdWx0cywgZm9ybWF0dGVycywgdGhpcy52ZXJ0aWNhbENvbmZpZ0lkLCBkYXRhLnNvdXJjZSk7XG4gICAgdGhpcy5tYXAgPSBTZWN0aW9uLnBhcnNlTWFwKGRhdGEucmVzdWx0cyk7XG4gICAgdGhpcy52ZXJ0aWNhbFVSTCA9IHVybCB8fCBudWxsO1xuICB9XG5cbiAgc3RhdGljIHBhcnNlTWFwIChyZXN1bHRzKSB7XG4gICAgbGV0IG1hcE1hcmtlcnMgPSBbXTtcblxuICAgIGxldCBjZW50ZXJDb29yZGluYXRlcyA9IHt9O1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCByZXN1bHRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAvLyBUT0RPKGJpbGx5KSBSZW1vdmUgbGVnYWN5IGZhbGxiYWNrIGZyb20gYWxsIGRhdGEgZm9ybWF0XG4gICAgICBsZXQgcmVzdWx0ID0gcmVzdWx0c1tqXS5kYXRhIHx8IHJlc3VsdHNbal07XG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUpIHtcbiAgICAgICAgaWYgKCFjZW50ZXJDb29yZGluYXRlcy5sYXRpdHVkZSkge1xuICAgICAgICAgIGNlbnRlckNvb3JkaW5hdGVzID0ge1xuICAgICAgICAgICAgbGF0aXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubGF0aXR1ZGUsXG4gICAgICAgICAgICBsb25naXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubG9uZ2l0dWRlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBtYXBNYXJrZXJzLnB1c2goe1xuICAgICAgICAgIGl0ZW06IHJlc3VsdCxcbiAgICAgICAgICBsYWJlbDogbWFwTWFya2Vycy5sZW5ndGggKyAxLFxuICAgICAgICAgIGxhdGl0dWRlOiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlLmxhdGl0dWRlLFxuICAgICAgICAgIGxvbmdpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sb25naXR1ZGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICdtYXBDZW50ZXInOiBjZW50ZXJDb29yZGluYXRlcyxcbiAgICAgICdtYXBNYXJrZXJzJzogbWFwTWFya2Vyc1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc2VjdGlvbiBmcm9tIHRoZSBwcm92aWRlZCBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBtb2R1bGVzIFRoZSByZXN1bHQgbW9kdWxlc1xuICAgKiBAcGFyYW0ge09iamVjdH0gdXJscyBUaGUgdGFiIHVybHNcbiAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fSBmb3JtYXR0ZXJzIEZpZWxkIGZvcm1hdHRlcnMgZm9yIHJlc3VsdHNcbiAgICovXG4gIHN0YXRpYyBmcm9tIChtb2R1bGVzLCB1cmxzLCBmb3JtYXR0ZXJzKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gW107XG4gICAgaWYgKCFtb2R1bGVzKSB7XG4gICAgICByZXR1cm4gc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmV3IFNlY3Rpb24obW9kdWxlcywgbnVsbCwgZm9ybWF0dGVycyk7XG4gICAgfVxuXG4gICAgLy8gT3VyIHNlY3Rpb25zIHNob3VsZCBjb250YWluIGEgcHJvcGVydHkgb2YgbWFwTWFya2VyIG9iamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNlY3Rpb25zLnB1c2goXG4gICAgICAgIG5ldyBTZWN0aW9uKFxuICAgICAgICAgIG1vZHVsZXNbaV0sXG4gICAgICAgICAgdXJsc1ttb2R1bGVzW2ldLnZlcnRpY2FsQ29uZmlnSWRdLFxuICAgICAgICAgIGZvcm1hdHRlcnNcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VjdGlvbnM7XG4gIH1cbn1cblxuY2xhc3MgQXBwbGllZFF1ZXJ5RmlsdGVyIHtcbiAgLy8gU3VwcG9ydCBsZWdhY3kgbW9kZWwgYW5kIG5ldyBtb2RlbCB1bnRpbCBmdWxseSBtaWdyYXRlZC5cbiAgLy8gVE9ETyhiaWxseSkgUmVtb3ZlIHRoZSBsZWZ0IGV4cHJlc3Npb24gZHVyaW5nIGFzc2lnbm1lbnQgd2hlbiBtaWdyYXRlZC5cbiAgY29uc3RydWN0b3IgKGFwcGxpZWRRdWVyeUZpbHRlcikge1xuICAgIHRoaXMua2V5ID0gYXBwbGllZFF1ZXJ5RmlsdGVyLmtleSB8fCBhcHBsaWVkUXVlcnlGaWx0ZXIuZGlzcGxheUtleTtcbiAgICB0aGlzLnZhbHVlID0gYXBwbGllZFF1ZXJ5RmlsdGVyLnZhbHVlIHx8IGFwcGxpZWRRdWVyeUZpbHRlci5kaXNwbGF5VmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbSAoYXBwbGllZFF1ZXJ5RmlsdGVycykge1xuICAgIGxldCBmaWx0ZXJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBsaWVkUXVlcnlGaWx0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmaWx0ZXJzLnB1c2gobmV3IEFwcGxpZWRRdWVyeUZpbHRlcihhcHBsaWVkUXVlcnlGaWx0ZXJzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXJzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBVbml2ZXJzYWxSZXN1bHRzICovXG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vc2VjdGlvbic7XG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pdmVyc2FsUmVzdWx0cyB7XG4gIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgdGhpcy5xdWVyeUlkID0gZGF0YS5xdWVyeUlkIHx8IG51bGw7XG4gICAgdGhpcy5zZWN0aW9ucyA9IGRhdGEuc2VjdGlvbnMgfHwgW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc2VhcmNoLCB1c2VkIHRvIHJlbmRlciBkaWZmZXJlbnQgdGVtcGxhdGVzIGJlZm9yZSwgZHVyaW5nLFxuICAgICAqIGFuZCBhZnRlciBsb2FkaW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnNlYXJjaFN0YXRlID0gZGF0YS5zZWFyY2hTdGF0ZSB8fCBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB1bml2ZXJzYWwgcmVzdWx0cyBmcm9tIHNlcnZlciBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZSBUaGUgc2VydmVyIHJlc3BvbnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB1cmxzIFRoZSB0YWIgdXJsc1xuICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59IGZvcm1hdHRlcnMgVGhlIGZpZWxkIGZvcm1hdHRlcnMgdG8gdXNlXG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UsIHVybHMsIGZvcm1hdHRlcnMpIHtcbiAgICByZXR1cm4gbmV3IFVuaXZlcnNhbFJlc3VsdHMoe1xuICAgICAgcXVlcnlJZDogcmVzcG9uc2UucXVlcnlJZCxcbiAgICAgIHNlY3Rpb25zOiBTZWN0aW9uLmZyb20ocmVzcG9uc2UubW9kdWxlcywgdXJscywgZm9ybWF0dGVycylcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBVbml2ZXJ2YWxSZXN1bHRzIG9iamVjdCByZXByZXNlbnRpbmcgbG9hZGluZyByZXN1bHRzXG4gICAqIEByZXR1cm4ge1VuaXZlcnNhbFJlc3VsdHN9XG4gICAqL1xuICBzdGF0aWMgc2VhcmNoTG9hZGluZyAoKSB7XG4gICAgcmV0dXJuIG5ldyBVbml2ZXJzYWxSZXN1bHRzKHsgc2VhcmNoU3RhdGU6IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRGlyZWN0QW5zd2VyICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdEFuc3dlciB7XG4gIGNvbnN0cnVjdG9yIChkaXJlY3RBbnN3ZXIgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGlyZWN0QW5zd2VyKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERpcmVjdEFuc3dlciBtb2RlbCBmcm9tIHRoZSBnaXZlbiBzZXJ2ZXIgZGF0YSBhbmQgZm9ybWF0dGVyc1xuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2UgVGhlIHNlcnZlciBkaXJlY3QgYW5zd2VyXG4gICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn0gZm9ybWF0dGVycyBUaGUgZm9ybWF0dGVycyB0byBhcHBseSB0byB0aGlzIGRpcmVjdCBhbnN3ZXJcbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSwgZm9ybWF0dGVycykge1xuICAgIGNvbnN0IGRhdGEgPSB7IC4uLnJlc3BvbnNlIH07XG4gICAgY29uc3QgeyBhbnN3ZXIsIHJlbGF0ZWRJdGVtIH0gPSBkYXRhO1xuXG4gICAgaWYgKGFuc3dlciAmJiBmb3JtYXR0ZXJzW2Fuc3dlci5maWVsZEFwaU5hbWVdKSB7XG4gICAgICBhbnN3ZXIudmFsdWUgPSBmb3JtYXR0ZXJzW2Fuc3dlci5maWVsZEFwaU5hbWVdKFxuICAgICAgICBhbnN3ZXIudmFsdWUsXG4gICAgICAgIHJlbGF0ZWRJdGVtLmRhdGEuZmllbGRWYWx1ZXMsXG4gICAgICAgIHJlbGF0ZWRJdGVtLnZlcnRpY2FsQ29uZmlnSWQsXG4gICAgICAgIHRydWUpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGlyZWN0QW5zd2VyKGRhdGEpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBOYXZpZ2F0aW9uICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24ge1xuICBjb25zdHJ1Y3RvciAodGFiT3JkZXIpIHtcbiAgICB0aGlzLnRhYk9yZGVyID0gdGFiT3JkZXIgfHwgW107XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChtb2R1bGVzKSB7XG4gICAgbGV0IG5hdiA9IFtdO1xuICAgIGlmICghbW9kdWxlcyB8fCAhQXJyYXkuaXNBcnJheShtb2R1bGVzKSkge1xuICAgICAgcmV0dXJuIG5hdjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBuYXYucHVzaChtb2R1bGVzW2ldLnZlcnRpY2FsQ29uZmlnSWQpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE5hdmlnYXRpb24obmF2KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgVmVydGljYWxSZXN1bHRzICovXG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vc2VjdGlvbic7XG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGljYWxSZXN1bHRzIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyBzZWFyY2hTdGF0ZTogU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURSB9LCBkYXRhKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZCB0aGUgcHJvdmlkZWQgcmVzdWx0cyB0byB0aGUgY3VycmVudCByZXN1bHRzXG4gICAqIEBwYXJhbSB7VmVydGljYWxSZXN1bHRzfSByZXN1bHRzIHRoZSByZXN1bHRzIHRvIGFwcGVuZCB0byB0aGUgY3VycmVudCByZXN1bHRzXG4gICAqL1xuICBhcHBlbmQgKHJlc3VsdHMpIHtcbiAgICBjb25zdCBtZXJnZWQgPSB7IC4uLnRoaXMgfTtcbiAgICBtZXJnZWQucmVzdWx0cyA9IHRoaXMucmVzdWx0cy5jb25jYXQocmVzdWx0cy5yZXN1bHRzKTtcbiAgICBtZXJnZWQubWFwLm1hcE1hcmtlcnMgPSB0aGlzLm1hcC5tYXBNYXJrZXJzLmNvbmNhdChyZXN1bHRzLm1hcC5tYXBNYXJrZXJzKTtcbiAgICByZXR1cm4gbmV3IFZlcnRpY2FsUmVzdWx0cyhtZXJnZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB2ZXJ0aWNhbCByZXN1bHRzIGZyb20gc2VydmVyIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlIFRoZSBzZXJ2ZXIgcmVzcG9uc2VcbiAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fSBmb3JtYXR0ZXJzIFRoZSBmaWVsZCBmb3JtYXR0ZXJzIHRvIHVzZVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlLCBmb3JtYXR0ZXJzKSB7XG4gICAgcmV0dXJuIG5ldyBWZXJ0aWNhbFJlc3VsdHMoU2VjdGlvbi5mcm9tKHJlc3BvbnNlLCBudWxsLCBmb3JtYXR0ZXJzKSk7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0IGEgVmVydGljYWxSZXN1bHRzIG9iamVjdCByZXByZXNlbnRpbmcgbG9hZGluZyByZXN1bHRzXG4gICAqIEByZXR1cm4ge1ZlcnRpY2FsUmVzdWx0c31cbiAgICovXG4gIHN0YXRpYyBzZWFyY2hMb2FkaW5nICgpIHtcbiAgICByZXR1cm4gbmV3IFZlcnRpY2FsUmVzdWx0cyh7IHNlYXJjaFN0YXRlOiBTZWFyY2hTdGF0ZXMuU0VBUkNIX0xPQURJTkcgfSk7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU3BlbGxDaGVjayAqL1xuXG5pbXBvcnQgSGlnaGxpZ2h0ZWRWYWx1ZSBmcm9tICcuL2hpZ2hsaWdodGVkdmFsdWUnO1xuXG4vKipcbiAqIFNwZWxsQ2hlY2sgaXMgdGhlIGNvcmUgc3RhdGUgbW9kZWxcbiAqIHRvIHBvd2VyIHRoZSBTcGVsbENoZWNrIGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGVsbENoZWNrIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgb3JpZ2luYWwgcXVlcnlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlcnkgPSBkYXRhLnF1ZXJ5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29ycmVjdGVkIHF1ZXJ5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmNvcnJlY3RlZFF1ZXJ5ID0gZGF0YS5jb3JyZWN0ZWRRdWVyeSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvcnJlY3RlZCBxdWVyeSB3aXRoIGhpZ2hsaWdodGVkIHRhZ3NcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuY29ycmVjdGVkUXVlcnlEaXNwbGF5ID0gZGF0YS5jb3JyZWN0ZWRRdWVyeURpc3BsYXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzcGVsbCBjaGVjayB0eXBlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnR5cGUgPSBkYXRhLnR5cGUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFNob3VsZCBzaG93IHNwZWxsIGNoZWNrIG9yIG5vdFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuc2hvdWxkU2hvdyA9IHRoaXMuY29ycmVjdGVkUXVlcnkgIT09IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc3BlbGwgY2hlY2sgbW9kZWwgZnJvbSB0aGUgcHJvdmlkZWQgZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2UgVGhlIHNwZWxsIGNoZWNrIHJlc3BvbnNlXG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UpIHtcbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBTcGVsbENoZWNrKHtcbiAgICAgIHF1ZXJ5OiByZXNwb25zZS5vcmlnaW5hbFF1ZXJ5LFxuICAgICAgY29ycmVjdGVkUXVlcnk6IHJlc3BvbnNlLmNvcnJlY3RlZFF1ZXJ5LFxuICAgICAgY29ycmVjdGVkUXVlcnlEaXNwbGF5OiBuZXcgSGlnaGxpZ2h0ZWRWYWx1ZShyZXNwb25zZS5jb3JyZWN0ZWRRdWVyeSkuZ2V0KCksXG4gICAgICB0eXBlOiByZXNwb25zZS50eXBlXG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFN0b3JhZ2VLZXlzICovXG5cbi8qKlxuICogU3RvcmFnZUtleXMgaXMgYW4gRU5VTSBhcmUgY29uc2lkZXJlZCB0aGUgcm9vdCBjb250ZXh0XG4gKiBmb3IgaG93IGRhdGEgaXMgc3RvcmVkIGFuZCBzY29wZWQgaW4gdGhlIHN0b3JhZ2UuXG4gKlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBOQVZJR0FUSU9OOiAnbmF2aWdhdGlvbicsXG4gIFVOSVZFUlNBTF9SRVNVTFRTOiAndW5pdmVyc2FsLXJlc3VsdHMnLFxuICBWRVJUSUNBTF9SRVNVTFRTOiAndmVydGljYWwtcmVzdWx0cycsXG4gIEFVVE9DT01QTEVURTogJ2F1dG9jb21wbGV0ZScsXG4gIERJUkVDVF9BTlNXRVI6ICdkaXJlY3QtYW5zd2VyJyxcbiAgRklMVEVSOiAnZmlsdGVyJyxcbiAgUVVFUlk6ICdxdWVyeScsXG4gIFFVRVJZX0lEOiAncXVlcnktaWQnLFxuICBGQUNFVF9GSUxURVI6ICdmYWNldC1maWx0ZXInLFxuICBEWU5BTUlDX0ZJTFRFUlM6ICdkeW5hbWljLWZpbHRlcnMnLFxuICBTRUFSQ0hfTElNSVQ6ICdzZWFyY2gtbGltaXQnLFxuICBQQVJBTVM6ICdwYXJhbXMnLFxuICBHRU9MT0NBVElPTjogJ2dlb2xvY2F0aW9uJyxcbiAgSU5URU5UUzogJ2ludGVudHMnLFxuICBRVUVTVElPTl9TVUJNSVNTSU9OOiAncXVlc3Rpb24tc3VibWlzc2lvbicsXG4gIFNQRUxMX0NIRUNLOiAnc3BlbGwtY2hlY2snXG59O1xuIiwiLyoqIEBtb2R1bGUgRHluYW1pY0ZpbHRlcnMgKi9cblxuLyoqXG4gKiBNb2RlbCByZXByZXNlbnRpbmcgYSBzZXQgb2YgZHluYW1pYyBmaWx0ZXJzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNGaWx0ZXJzIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBmaWx0ZXJzIHRoaXMgbW9kZWwgaG9sZHNcbiAgICAgKiBAdHlwZSB7e2xhYmVsOiBzdHJpbmcsIGZpZWxkSWQ6IHN0cmluZywgb3B0aW9uczogb2JqZWN0W119fVxuICAgICAqL1xuICAgIHRoaXMuZmlsdGVycyA9IGRhdGEuZmlsdGVycyB8fCBbXTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9yZ2FuaXplICdmYWNldHMnIGZyb20gdGhlIGFwaSByZXNwb25zZSBpbnRvIGR5bmFtaWMgZmlsdGVyc1xuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2UgZHluYW1pYyBmaWx0ZXIgcmVzcG9uc2UgZnJvbSB0aGUgYXBpXG4gICAqIEByZXR1cm5zIHtEeW5hbWljRmlsdGVyc31cbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSkge1xuICAgIGNvbnN0IHsgZmFjZXRzIH0gPSByZXNwb25zZTtcbiAgICBjb25zdCBkeW5hbWljRmlsdGVycyA9IGZhY2V0cy5tYXAoZiA9PiAoe1xuICAgICAgbGFiZWw6IGZbJ2Rpc3BsYXlOYW1lJ10sXG4gICAgICBmaWVsZElkOiBmWydmaWVsZElkJ10sXG4gICAgICBvcHRpb25zOiBmLm9wdGlvbnMubWFwKG8gPT4gKHtcbiAgICAgICAgbGFiZWw6IG9bJ2Rpc3BsYXlOYW1lJ10sXG4gICAgICAgIGNvdW50TGFiZWw6IG9bJ2NvdW50J10sXG4gICAgICAgIHNlbGVjdGVkOiBvWydzZWxlY3RlZCddLFxuICAgICAgICBmaWx0ZXI6IG9bJ2ZpbHRlciddXG4gICAgICB9KSlcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gbmV3IER5bmFtaWNGaWx0ZXJzKHsgZmlsdGVyczogZHluYW1pY0ZpbHRlcnMgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaEludGVudHMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoSW50ZW50cyB7XG4gIGNvbnN0cnVjdG9yIChpbnRlbnRzKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGludGVudCB0byBmaW5kIHJlc3VsdHMgYmFzZWQgb24gdGhlIHVzZXIncyBsb2NhdGlvblxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMubmVhck1lID0gaW50ZW50cy5uZWFyTWU7XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBTZWFyY2hJbnRlbnRzIGZyb20gc2VydmVyIHJlc3BvbnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZSBUaGUgc2VydmVyIHJlc3BvbnNlIGludGVudHNcbiAgICogQHJldHVybnMge1NlYXJjaEludGVudHN9XG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UpIHtcbiAgICBjb25zdCBpbnRlbnRzID0gcmVzcG9uc2UgfHwgW107XG5cbiAgICByZXR1cm4gbmV3IFNlYXJjaEludGVudHMoe1xuICAgICAgbmVhck1lOiBpbnRlbnRzLmluY2x1ZGVzKCdORUFSX01FJylcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VhcmNoRGF0YVRyYW5zZm9ybWVyICovXG5cbmltcG9ydCBVbml2ZXJzYWxSZXN1bHRzIGZyb20gJy4uL21vZGVscy91bml2ZXJzYWxyZXN1bHRzJztcbmltcG9ydCBEaXJlY3RBbnN3ZXIgZnJvbSAnLi4vbW9kZWxzL2RpcmVjdGFuc3dlcic7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9tb2RlbHMvbmF2aWdhdGlvbic7XG5pbXBvcnQgVmVydGljYWxSZXN1bHRzIGZyb20gJy4uL21vZGVscy92ZXJ0aWNhbHJlc3VsdHMnO1xuaW1wb3J0IFNwZWxsQ2hlY2sgZnJvbSAnLi4vbW9kZWxzL3NwZWxsY2hlY2snO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IER5bmFtaWNGaWx0ZXJzIGZyb20gJy4uL21vZGVscy9keW5hbWljZmlsdGVycyc7XG5pbXBvcnQgU2VhcmNoSW50ZW50cyBmcm9tICcuLi9tb2RlbHMvc2VhcmNoaW50ZW50cyc7XG5cbi8qKlxuICogQSBEYXRhIFRyYW5zZm9ybWVyIHRoYXQgdGFrZXMgdGhlIHJlc3BvbnNlIG9iamVjdCBmcm9tIGEgU2VhcmNoIHJlcXVlc3RcbiAqIEFuZCB0cmFuc2Zvcm1zIGluIHRvIGEgZnJvbnQtZW5kIG9yaWVudGVkIGRhdGEgc3RydWN0dXJlIHRoYXQgb3VyXG4gKiBjb21wb25lbnQgbGlicmFyeSBhbmQgY29yZSBzdG9yYWdlIHVuZGVyc3RhbmQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaERhdGFUcmFuc2Zvcm1lciB7XG4gIHN0YXRpYyB0cmFuc2Zvcm0gKGRhdGEsIHVybHMgPSB7fSwgZm9ybWF0dGVycykge1xuICAgIGxldCByZXNwb25zZSA9IGRhdGEucmVzcG9uc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtTdG9yYWdlS2V5cy5RVUVSWV9JRF06IHJlc3BvbnNlLnF1ZXJ5SWQsXG4gICAgICBbU3RvcmFnZUtleXMuTkFWSUdBVElPTl06IE5hdmlnYXRpb24uZnJvbShyZXNwb25zZS5tb2R1bGVzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSXTogRGlyZWN0QW5zd2VyLmZyb20ocmVzcG9uc2UuZGlyZWN0QW5zd2VyLCBmb3JtYXR0ZXJzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUU106IFVuaXZlcnNhbFJlc3VsdHMuZnJvbShyZXNwb25zZSwgdXJscywgZm9ybWF0dGVycyksXG4gICAgICBbU3RvcmFnZUtleXMuSU5URU5UU106IFNlYXJjaEludGVudHMuZnJvbShyZXNwb25zZS5zZWFyY2hJbnRlbnRzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5TUEVMTF9DSEVDS106IFNwZWxsQ2hlY2suZnJvbShyZXNwb25zZS5zcGVsbENoZWNrKVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgdHJhbnNmb3JtVmVydGljYWwgKGRhdGEsIGZvcm1hdHRlcnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXTogZGF0YS5yZXNwb25zZS5xdWVyeUlkLFxuICAgICAgW1N0b3JhZ2VLZXlzLk5BVklHQVRJT05dOiBuZXcgTmF2aWdhdGlvbigpLCAvLyBWZXJ0aWNhbCBkb2Vzbid0IHJlc3BvbmQgd2l0aCBvcmRlcmluZywgc28gdXNlIGVtcHR5IG5hdi5cbiAgICAgIFtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXTogVmVydGljYWxSZXN1bHRzLmZyb20oZGF0YS5yZXNwb25zZSwgZm9ybWF0dGVycyksXG4gICAgICBbU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTXTogRHluYW1pY0ZpbHRlcnMuZnJvbShkYXRhLnJlc3BvbnNlKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5JTlRFTlRTXTogU2VhcmNoSW50ZW50cy5mcm9tKGRhdGEucmVzcG9uc2Uuc2VhcmNoSW50ZW50cyksXG4gICAgICBbU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0tdOiBTcGVsbENoZWNrLmZyb20oZGF0YS5yZXNwb25zZS5zcGVsbENoZWNrKVxuICAgIH07XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFF1ZXN0aW9uU3VibWlzc2lvbiAqL1xuXG4vKipcbiAqIFF1ZXN0aW9uU3VibWlzc2lvbiBpcyB0aGUgY29yZSBzdGF0ZSBtb2RlbFxuICogdG8gcG93ZXIgdGhlIFF1ZXN0aW9uU3VibWlzc2lvbiBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb25TdWJtaXNzaW9uIHtcbiAgY29uc3RydWN0b3IgKHF1ZXN0aW9uID0ge30sIGVycm9ycykge1xuICAgIC8qKlxuICAgICAqIFRoZSBhdXRob3Igb2YgdGhlIHF1ZXN0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSBxdWVzdGlvbi5uYW1lIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgcXVlc3Rpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZW1haWwgPSBxdWVzdGlvbi5lbWFpbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgcHJpdmFjeSBwb2xpY3kgd2FzIGFwcHJvdmVkXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5wcml2YWN5UG9saWN5ID0gcXVlc3Rpb24ucHJpdmFjeVBvbGljeSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXN0aW9uIHRvIGJlIHNlbnQgdG8gdGhlIHNlcnZlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5xdWVzdGlvblRleHQgPSBxdWVzdGlvbi5xdWVzdGlvblRleHQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFsdGVybmF0aXZlIHF1ZXN0aW9uIG1ldGEgaW5mb3JtYXRpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlc3Rpb25EZXNjcmlwdGlvbiA9IHF1ZXN0aW9uLnF1ZXN0aW9uRGVzY3JpcHRpb24gfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIENvbnRhaW5zIGFueSBlcnJvcnMgYWJvdXQgdGhlIHF1ZXN0aW9uIHN1Ym1pc3Npb25cbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzIHx8IG51bGw7XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIHN1Ym1pdHRlZCAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXN0aW9uU3VibWl0dGVkOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBlcnJvcnMgKHF1ZXN0aW9uLCBlcnJvcnMpIHtcbiAgICByZXR1cm4gUXVlc3Rpb25TdWJtaXNzaW9uKHF1ZXN0aW9uLCBlcnJvcnMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBDb3JlICovXG5cbmltcG9ydCBTZWFyY2hBcGkgZnJvbSAnLi9zZWFyY2gvc2VhcmNoYXBpJztcbmltcG9ydCBBdXRvQ29tcGxldGVBcGkgZnJvbSAnLi9zZWFyY2gvYXV0b2NvbXBsZXRlYXBpJztcbmltcG9ydCBRdWVzdGlvbkFuc3dlckFwaSBmcm9tICcuL3NlYXJjaC9xdWVzdGlvbmFuc3dlcmFwaSc7XG5cbmltcG9ydCBTZWFyY2hEYXRhVHJhbnNmb3JtZXIgZnJvbSAnLi9zZWFyY2gvc2VhcmNoZGF0YXRyYW5zZm9ybWVyJztcblxuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4vc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgVmVydGljYWxSZXN1bHRzIGZyb20gJy4vbW9kZWxzL3ZlcnRpY2FscmVzdWx0cyc7XG5pbXBvcnQgVW5pdmVyc2FsUmVzdWx0cyBmcm9tICcuL21vZGVscy91bml2ZXJzYWxyZXN1bHRzJztcbmltcG9ydCBRdWVzdGlvblN1Ym1pc3Npb24gZnJvbSAnLi9tb2RlbHMvcXVlc3Rpb25zdWJtaXNzaW9uJztcblxuLyoqXG4gKiBDb3JlIGlzIHRoZSBtYWluIGFwcGxpY2F0aW9uIGNvbnRhaW5lciBmb3IgYWxsIG9mIHRoZSBuZXR3b3JrIGFuZCBzdG9yYWdlXG4gKiByZWxhdGVkIGJlaGF2aW9ycyBvZiB0aGUgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmUge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5hcGlLZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYGFwaUtleWAuIFR5cGUgbXVzdCBiZSB7c3RyaW5nfScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmV4cGVyaWVuY2VLZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYGV4cGVyaWVuY2VLZXlgLiBUeXBlIG11c3QgYmUge3N0cmluZ30nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IEFQSSBLZXkgdXNlZCBmb3IgYWxsIHJlcXVlc3RzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwaUtleSA9IGNvbmZpZy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IEFuc3dlcnMgS2V5IHVzZWQgZm9yIGFsbCByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9leHBlcmllbmNlS2V5ID0gY29uZmlnLmV4cGVyaWVuY2VLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYW5zd2VycyBjb25maWcgdmVyc2lvbiB0byB1c2UgZm9yIGFsbCByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9leHBlcmllbmNlVmVyc2lvbiA9IGNvbmZpZy5leHBlcmllbmNlVmVyc2lvbjtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjbGllbnQgbG9jYWxlIHVzZWQgZm9yIGFsbCByZXF1ZXN0cy4gSWYgbm90IHNwZWNpZmllZCwgZGVmYXVsdHMgdG8gXCJlblwiIChmb3JcbiAgICAgKiBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSkuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xvY2FsZSA9IGNvbmZpZy5sb2NhbGUgfHwgJ2VuJztcblxuICAgIC8qKlxuICAgICAqIEEgbWFwIG9mIGZpZWxkIGZvcm1hdHRlcnMgdXNlZCB0byBmb3JtYXQgcmVzdWx0cywgaWYgcHJlc2VudFxuICAgICAqIEB0eXBlIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmllbGRGb3JtYXR0ZXJzID0gY29uZmlnLmZpZWxkRm9ybWF0dGVycyB8fCB7fTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjb3JlIGRhdGEgc3RvcmFnZSB0aGF0IHBvd2VycyB0aGUgVUlcbiAgICAgKiBAdHlwZSB7R2xvYmFsU3RvcmFnZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZSA9IGNvbmZpZy5nbG9iYWxTdG9yYWdlO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNvcmUgcGVyc2lzdGVudCBzdG9yYWdlXG4gICAgICogQHR5cGUge1BlcnNpc3RlbnRTdG9yYWdlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5wZXJzaXN0ZW50U3RvcmFnZSA9IGNvbmZpZy5wZXJzaXN0ZW50U3RvcmFnZTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIGNvbnRhaW5pbmcgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIFJFU1RmdWwgc2VhcmNoIEFQSVxuICAgICAqIEZvciBib3RoIHZlcnRpY2FsIGFuZCB1bml2ZXJzYWwgc2VhcmNoXG4gICAgICogQHR5cGUge1NlYXJjaH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaGVyID0gbmV3IFNlYXJjaEFwaSh7XG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIGV4cGVyaWVuY2VLZXk6IHRoaXMuX2V4cGVyaWVuY2VLZXksXG4gICAgICBleHBlcmllbmNlVmVyc2lvbjogdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24sXG4gICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3Rpb24gY29udGFpbmluZyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgUkVTVGZ1bCBhdXRvY29tcGxldGUgQVBJXG4gICAgICogRm9yIGZpbHRlciBzZWFyY2gsIHZlcnRpY2FsIGF1dG9jb21wbGV0ZSwgYW5kIHVuaXZlcnNhbCBhdXRvY29tcGxldGVcbiAgICAgKiBAdHlwZSB7QXV0b2NvbXBsZXRlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXV0b0NvbXBsZXRlID0gbmV3IEF1dG9Db21wbGV0ZUFwaSh7XG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIGV4cGVyaWVuY2VLZXk6IHRoaXMuX2V4cGVyaWVuY2VLZXksXG4gICAgICBleHBlcmllbmNlVmVyc2lvbjogdGhpcy5fZXhwZXJpZW5jZVZlcnNpb24sXG4gICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3Rpb24gZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIFEmQSByZXN0IGludGVyZmFjZVxuICAgICAqIEB0eXBlIHtRdWVzdGlvbkFuc3dlckFwaX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3F1ZXN0aW9uQW5zd2VyID0gbmV3IFF1ZXN0aW9uQW5zd2VyQXBpKHtcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoIGluIHRoZSBjb250ZXh0IG9mIGEgdmVydGljYWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnRpY2FsS2V5IHZlcnRpY2FsIElEIGZvciB0aGUgc2VhcmNoXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBxdWVyeSBUaGUgcXVlcnkgZGV0YWlsc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuaW5wdXQgVGhlIGlucHV0IHRvIHNlYXJjaCBmb3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmZpbHRlciBUaGUgZmlsdGVyIHRvIHVzZSBpbiB0aGUgc2VhcmNoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5mYWNldEZpbHRlciBUaGUgZmFjZXQgZmlsdGVyIHRvIHVzZSBpbiB0aGUgc2VhcmNoXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBxdWVyeS5saW1pdCBUaGUgbWF4IG51bWJlciBvZiByZXN1bHRzIHRvIGluY2x1ZGUsIG1heCBvZiA1MFxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlcnkub2Zmc2V0IFRoZSByZXN1bHRzIG9mZnNldCwgZm9yIGZldGNoaW5nIG1vcmUgcmVzdWx0cyBvZiB0aGUgc2FtZSBxdWVyeVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuaWQgVGhlIHF1ZXJ5IElEIHRvIHVzZS4gSWYgcGFnaW5nIHdpdGhpbiBhIHF1ZXJ5LCB0aGUgc2FtZSBJRCBzaG91bGQgYmUgdXNlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHF1ZXJ5LmFwcGVuZCBJZiB0cnVlLCBhZGRzIHRoZSByZXN1bHRzIG9mIHRoaXMgcXVlcnkgdG8gdGhlIGVuZCBvZiB0aGUgY3VycmVudCByZXN1bHRzLCBkZWZhdWx0cyBmYWxzZVxuICAgKi9cbiAgdmVydGljYWxTZWFyY2ggKHZlcnRpY2FsS2V5LCBxdWVyeSkge1xuICAgIGlmICghcXVlcnkuYXBwZW5kKSB7XG4gICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFMsIFZlcnRpY2FsUmVzdWx0cy5zZWFyY2hMb2FkaW5nKCkpO1xuICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5TUEVMTF9DSEVDSywge30pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9zZWFyY2hlclxuICAgICAgLnZlcnRpY2FsU2VhcmNoKHZlcnRpY2FsS2V5LCB7XG4gICAgICAgIGxpbWl0OiB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuU0VBUkNIX0xJTUlUKSxcbiAgICAgICAgZ2VvbG9jYXRpb246IHRoaXMuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5HRU9MT0NBVElPTiksXG4gICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICBpc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZDogdGhpcy5faXNEeW5hbWljRmlsdGVyc0VuYWJsZWQsXG4gICAgICAgIHNraXBTcGVsbENoZWNrOiB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoJ3NraXBTcGVsbENoZWNrJyksXG4gICAgICAgIHF1ZXJ5VHJpZ2dlcjogdGhpcy5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKCdxdWVyeVRyaWdnZXInKVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IFNlYXJjaERhdGFUcmFuc2Zvcm1lci50cmFuc2Zvcm1WZXJ0aWNhbChyZXNwb25zZSwgdGhpcy5fZmllbGRGb3JtYXR0ZXJzKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBkYXRhW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuTkFWSUdBVElPTiwgZGF0YVtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuSU5URU5UUywgZGF0YVtTdG9yYWdlS2V5cy5JTlRFTlRTXSk7XG5cbiAgICAgICAgaWYgKHF1ZXJ5LmFwcGVuZCkge1xuICAgICAgICAgIGNvbnN0IG1lcmdlZFJlc3VsdHMgPSB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUylcbiAgICAgICAgICAgIC5hcHBlbmQoZGF0YVtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXSk7XG4gICAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTLCBtZXJnZWRSZXN1bHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFMsIGRhdGFbU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUU10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGFbU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTXSkge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTLCBkYXRhW1N0b3JhZ2VLZXlzLkRZTkFNSUNfRklMVEVSU10pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhW1N0b3JhZ2VLZXlzLlNQRUxMX0NIRUNLXSkge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0ssIGRhdGFbU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0tdKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2UuZGVsZXRlKCdza2lwU3BlbGxDaGVjaycpO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2UuZGVsZXRlKCdxdWVyeVRyaWdnZXInKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoIChxdWVyeVN0cmluZywgdXJscykge1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFMsIFVuaXZlcnNhbFJlc3VsdHMuc2VhcmNoTG9hZGluZygpKTtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlNQRUxMX0NIRUNLLCB7fSk7XG5cbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoZXJcbiAgICAgIC51bml2ZXJzYWxTZWFyY2gocXVlcnlTdHJpbmcsIHtcbiAgICAgICAgZ2VvbG9jYXRpb246IHRoaXMuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5HRU9MT0NBVElPTiksXG4gICAgICAgIHNraXBTcGVsbENoZWNrOiB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoJ3NraXBTcGVsbENoZWNrJyksXG4gICAgICAgIHF1ZXJ5VHJpZ2dlcjogdGhpcy5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKCdxdWVyeVRyaWdnZXInKVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IFNlYXJjaERhdGFUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVzcG9uc2UsIHVybHMsIHRoaXMuX2ZpZWxkRm9ybWF0dGVycykpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWV9JRCwgZGF0YVtTdG9yYWdlS2V5cy5RVUVSWV9JRF0pO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLk5BVklHQVRJT04sIGRhdGFbU3RvcmFnZUtleXMuTkFWSUdBVElPTl0pO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVIsIGRhdGFbU3RvcmFnZUtleXMuRElSRUNUX0FOU1dFUl0pO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTLCBkYXRhW1N0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTXSwgdXJscyk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuSU5URU5UUywgZGF0YVtTdG9yYWdlS2V5cy5JTlRFTlRTXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFU1RJT05fU1VCTUlTU0lPTiwgbmV3IFF1ZXN0aW9uU3VibWlzc2lvbih7XG4gICAgICAgICAgcXVlc3Rpb25UZXh0OiBxdWVyeVN0cmluZ1xuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0ssIGRhdGFbU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0tdKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLmRlbGV0ZSgnc2tpcFNwZWxsQ2hlY2snKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLmRlbGV0ZSgncXVlcnlUcmlnZ2VyJyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhbiBpbnB1dCwgcXVlcnkgZm9yIGEgbGlzdCBvZiBzaW1pbGFyIHJlc3VsdHMgYW5kIHNldCBpbnRvIHN0b3JhZ2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0ICAgICB0aGUgc3RyaW5nIHRvIGF1dG9jb21wbGV0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIHRoZSBuYW1lc3BhY2UgdG8gdXNlIGZvciB0aGUgc3RvcmFnZSBrZXlcbiAgICovXG4gIGF1dG9Db21wbGV0ZVVuaXZlcnNhbCAoaW5wdXQsIG5hbWVzcGFjZSkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvQ29tcGxldGVcbiAgICAgIC5xdWVyeVVuaXZlcnNhbChpbnB1dClcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkFVVE9DT01QTEVURX0uJHtuYW1lc3BhY2V9YCwgZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhbiBpbnB1dCwgcXVlcnkgZm9yIGEgbGlzdCBvZiBzaW1pbGFyIHJlc3VsdHMgaW4gdGhlIHByb3ZpZGVkIHZlcnRpY2FsXG4gICAqIGFuZCBzZXQgaW50byBzdG9yYWdlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCAgICAgICB0aGUgc3RyaW5nIHRvIGF1dG9jb21wbGV0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIHRoZSBuYW1lc3BhY2UgdG8gdXNlIGZvciB0aGUgc3RvcmFnZSBrZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnRpY2FsS2V5IHRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBleHBlcmllbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiYXJLZXkgICAgICB0aGUgYmFyIGtleSBmb3IgdGhlIGV4cGVyaWVuY2VcbiAgICovXG4gIGF1dG9Db21wbGV0ZVZlcnRpY2FsIChpbnB1dCwgbmFtZXNwYWNlLCB2ZXJ0aWNhbEtleSwgYmFyS2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5VmVydGljYWwoaW5wdXQsIHZlcnRpY2FsS2V5LCBiYXJLZXkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5BVVRPQ09NUExFVEV9LiR7bmFtZXNwYWNlfWAsIGRhdGEpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYW4gaW5wdXQsIHByb3ZpZGUgYSBsaXN0IG9mIHN1aXRhYmxlIGZpbHRlcnMgZm9yIGF1dG9jb21wbGV0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCAgdGhlIHN0cmluZyB0byBzZWFyY2ggZm9yIGZpbHRlcnMgd2l0aFxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnICB0aGUgY29uZmlnIHRvIHNlcmFjaCBmb3IgZmlsdGVycyB3aXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcubmFtZXNwYWNlICB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcudmVydGljYWxLZXkgdGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIGNvbmZpZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLmJhcktleSAgdGhlIGJhciBrZXkgZm9yIHRoZSBjb25maWcgdjFcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZy5zZWFyY2hQYXJhbWV0ZXJzICB0aGUgc2VhcmNoIHBhcmFtZXRlcnMgZm9yIHRoZSBjb25maWcgdjJcbiAgICovXG4gIGF1dG9Db21wbGV0ZUZpbHRlciAoaW5wdXQsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLl9hdXRvQ29tcGxldGVcbiAgICAgIC5xdWVyeUZpbHRlcihpbnB1dCwgY29uZmlnKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke2NvbmZpZy5uYW1lc3BhY2V9YCwgZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJtaXRzIGEgcXVlc3Rpb24gdG8gdGhlIHNlcnZlciBhbmQgdXBkYXRlcyB0aGUgdW5kZXJseWluZyBxdWVzdGlvbiBtb2RlbFxuICAgKiBAcGFyYW0ge29iamVjdH0gcXVlc3Rpb24gVGhlIHF1ZXN0aW9uIG9iamVjdCB0byBzdWJtaXQgdG8gdGhlIHNlcnZlclxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlc3Rpb24uZW50aXR5SWQgVGhlIGVudGl0eSB0byBhc3NvY2lhdGUgd2l0aCB0aGUgcXVlc3Rpb24gKHJlcXVpcmVkKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ubGFudWFnZSBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIHF1ZXN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5zaXRlIFRoZSBcInB1Ymxpc2hlclwiIG9mIHRoZSAoZS5nLiAnRklSU1RfUEFSVFknKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ubmFtZSBUaGUgbmFtZSBvZiB0aGUgYXV0aG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5lbWFpbCBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgYXV0aG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5xdWVzdGlvblRleHQgVGhlIHF1ZXN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5xdWVzdGlvbkRlc2NyaXB0aW9uIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHF1ZXN0aW9uXG4gICAqL1xuICBzdWJtaXRRdWVzdGlvbiAocXVlc3Rpb24pIHtcbiAgICByZXR1cm4gdGhpcy5fcXVlc3Rpb25BbnN3ZXJcbiAgICAgIC5zdWJtaXRRdWVzdGlvbihxdWVzdGlvbilcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFxuICAgICAgICAgIFN0b3JhZ2VLZXlzLlFVRVNUSU9OX1NVQk1JU1NJT04sXG4gICAgICAgICAgUXVlc3Rpb25TdWJtaXNzaW9uLnN1Ym1pdHRlZCgpKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgZ2l2ZW4gcXVlcnkgaW50byBzdG9yYWdlLCB0byBiZSB1c2VkIGZvciB0aGUgbmV4dCBzZWFyY2hcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBxdWVyeSB0byBzdG9yZVxuICAgKi9cbiAgc2V0UXVlcnkgKHF1ZXJ5KSB7XG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWSwgcXVlcnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgcHJvdmlkZWQgcXVlcnkgSUQsIHRvIGJlIHVzZWQgaW4gYW5hbHl0aWNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeUlkIFRoZSBxdWVyeSBpZCB0byBzdG9yZVxuICAgKi9cbiAgc2V0UXVlcnlJZCAocXVlcnlJZCkge1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFUllfSUQsIHF1ZXJ5SWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgZ2l2ZW4gZmlsdGVyIGludG8gc3RvcmFnZSwgdG8gYmUgdXNlZCBmb3IgdGhlIG5leHQgc2VhcmNoXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKiBAcGFyYW0ge0ZpbHRlcn0gZmlsdGVyICAgIHRoZSBmaWx0ZXIgdG8gc2V0XG4gICAqL1xuICBzZXRGaWx0ZXIgKG5hbWVzcGFjZSwgZmlsdGVyKSB7XG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7bmFtZXNwYWNlfWAsIGZpbHRlcik7XG4gIH1cblxuICBzZXRGYWNldEZpbHRlciAobmFtZXNwYWNlLCBmaWx0ZXIpIHtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkZBQ0VUX0ZJTFRFUn0uJHtuYW1lc3BhY2V9YCwgZmlsdGVyKTtcbiAgfVxuXG4gIGVuYWJsZUR5bmFtaWNGaWx0ZXJzICgpIHtcbiAgICB0aGlzLl9pc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBzZXRTZWFyY2hMaW1pdCAobGltaXQpIHtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlNFQVJDSF9MSU1JVCwgbGltaXQpO1xuICB9XG5cbiAgb24gKGV2dCwgbW9kdWxlSWQsIGNiKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2xvYmFsU3RvcmFnZS5vbihldnQsIG1vZHVsZUlkLCBjYik7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIENvbXBvbmVudE1hbmFnZXIgKi9cblxuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCB7IERPTSB9IGZyb20gJy4uJztcblxuLyoqXG4gKiBDb21wb25lbnRNYW5hZ2VyIGlzIGEgU2luZ2xldG9uZSB0aGF0IGNvbnRhaW5zIGJvdGggYW4gaW50ZXJuYWwgcmVnaXN0cnkgb2ZcbiAqIGVsaWdpYmxlIGNvbXBvbmVudHMgdG8gYmUgY3JlYXRlZCwgYXMgd2VsbCBhcyBrZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudFxuICogaW5zdGFudGlhdGVkIGFuZCBhY3RpdmUgY29tcG9uZW50cy5cbiAqXG4gKiBBTEwgY29tcG9uZW50cyBzaG91bGQgYmUgY29uc3RydWN0ZWQgdXNpbmcgdGhlIHtDb21wb25lbnRNYW5hZ2VyfSB2aWEgaXRzIGBjcmVhdGVgIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50TWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBpZiAoIUNvbXBvbmVudE1hbmFnZXIuc2V0SW5zdGFuY2UodGhpcykpIHtcbiAgICAgIHJldHVybiBDb21wb25lbnRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudCByZWdpc3RyeSBpcyBhbiBpbnRlcm5hbCBtYXAsIHRoYXQgY29udGFpbnNcbiAgICAgKiBhbGwgYXZhaWxhYmxlIGNvbXBvbmVudCBDTEFTU0VTIHVzZWQgZm9yIGNyZWF0aW9uIG9yIG92ZXJyaWRlLlxuICAgICAqIEVhY2ggY29tcG9uZW50IGNsYXNzIGhhcyBhIHVuaXF1ZSBUWVBFLCB3aGljaCBpcyB1c2VkIGFzIHRoZSBrZXkgZm9yIHRoZSByZWdpc3RyeVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5fY29tcG9uZW50UmVnaXN0cnkgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhY3RpdmUgY29tcG9uZW50cyBpcyBhbiBpbnRlcm5hbCBjb250YWluZXIgdG8ga2VlcCB0cmFja1xuICAgICAqIG9mIGFsbCBvZiB0aGUgY29tcG9uZW50cyB0aGF0IGhhdmUgYmVlbiBjb25zdHJ1Y3RlZFxuICAgICAqL1xuICAgIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb3JlIGxpYnJhcnkgZGVwZW5kZW5jeVxuICAgICAqXG4gICAgICogVGhlIENvcmUgY29udGFpbnMgYm90aCB0aGUgc3RvcmFnZSBBTkQgc2VydmljZXMgdGhhdCBhcmUgbmVlZGVkIGZvciBwZXJmb3JtaW5nIG9wZXJhdGlvbnNcbiAgICAgKiBsaWtlIHNlYXJjaCBhbmQgYXV0byBjb21wbGV0ZS5cbiAgICAgKlxuICAgICAqIFRoZSBzdG9yYWdlIGlzIHRoZSBzb3VyY2Ugb2YgdHJ1dGggZm9yIHRoZSBzdGF0ZSBvZiBBTEwgY29tcG9uZW50cy5cbiAgICAgKiBXaGVuZXZlciB0aGUgc3RvcmFnZSBpcyB1cGRhdGVkLCB0aGUgc3RhdGUgZ2V0cyBwdXNoZWQgZG93biB0byB0aGUgbmVjZXNzYXJ5IGNvbXBvbmVudHMuXG4gICAgICogQHR5cGUge0NvcmV9XG4gICAgICovXG4gICAgdGhpcy5fY29yZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcHJpbWFyeSByZW5kZXJlciB0byB1c2UgZm9yIGFsbCBjb21wb25lbnRzXG4gICAgICogQHR5cGUge0hhbmRsZWJhcnNSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXJlciA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgYW5hbHl0aWNzIHJlcG9ydGVyIGRlcGVuZGVuY3lcbiAgICAgKi9cbiAgICB0aGlzLl9hbmFseXRpY3NSZXBvcnRlciA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgc2V0SW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIHNldFJlbmRlcmVyIChyZW5kZXJlcikge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRDb3JlIChjb3JlKSB7XG4gICAgdGhpcy5fY29yZSA9IGNvcmU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRBbmFseXRpY3NSZXBvcnRlciAocmVwb3J0ZXIpIHtcbiAgICB0aGlzLl9hbmFseXRpY3NSZXBvcnRlciA9IHJlcG9ydGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlZ2lzdGVycyBhIGNvbXBvbmVudCB0byBiZSBlbGlnaWJsZSBmb3IgY3JlYXRpb24gYW5kIG92ZXJyaWRlLlxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gVGhlIENvbXBvbmVudCBDbGFzcyB0byByZWdpc3RlclxuICAgKi9cbiAgcmVnaXN0ZXIgKGNvbXBvbmVudENsYXp6KSB7XG4gICAgdGhpcy5fY29tcG9uZW50UmVnaXN0cnlbY29tcG9uZW50Q2xhenoudHlwZV0gPSBjb21wb25lbnRDbGF6ejtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGUgaXMgdGhlIGVudHJ5IHBvaW50IGZvciBjb25zdHJ1Y3RpbmcgYW55IGFuZCBhbGwgY29tcG9uZW50cy5cbiAgICogSXQgd2lsbCBpbnN0YW50aWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgY29tcG9uZW50LCBhbmQgYm90aCBhcHBseVxuICAgKiBpbml0aWFsIHN0YXRlIGZyb20gdGhlIHN0b3JhZ2UgYW5kIGJpbmQgaXQgdG8gdGhlIHN0b3JhZ2UgZm9yIHVwZGF0ZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnRUeXBlIFRoZSBjb21wb25lbnQgdHlwZSB0byBjcmVhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgVGhlIG9wdGlvbnMgdG8gcGlwZSB0byB0aGUgY29uc3RydWN0aW9uIG9mIHRoZSBjb21wb25lbnRcbiAgICovXG4gIGNyZWF0ZSAoY29tcG9uZW50VHlwZSwgb3B0cykge1xuICAgIC8vIEV2ZXJ5IGNvbXBvbmVudCBuZWVkcyBsb2NhbCBhY2Nlc3MgdG8gdGhlIGNvbXBvbmVudCBtYW5hZ2VyXG4gICAgLy8gYmVjYXVzZSBzb21ldGltZXMgY29tcG9uZW50cyBoYXZlIHN1YmNvbXBvbmVudHMgdGhhdCBuZWVkIHRvIGJlXG4gICAgLy8gY29uc3RydWN0ZWQgZHVyaW5nIGNyZWF0aW9uXG4gICAgbGV0IHN5c3RlbU9wdHMgPSB7XG4gICAgICBjb3JlOiB0aGlzLl9jb3JlLFxuICAgICAgcmVuZGVyZXI6IHRoaXMuX3JlbmRlcmVyLFxuICAgICAgYW5hbHl0aWNzUmVwb3J0ZXI6IHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyLFxuICAgICAgY29tcG9uZW50TWFuYWdlcjogdGhpc1xuICAgIH07XG5cbiAgICBsZXQgY29tcG9uZW50Q2xhc3MgPSB0aGlzLl9jb21wb25lbnRSZWdpc3RyeVtjb21wb25lbnRUeXBlXTtcblxuICAgIGlmIChcbiAgICAgICFjb21wb25lbnRDbGFzcy5hcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQoKSAmJlxuICAgICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5zb21lKGMgPT4gYy5uYW1lID09PSBvcHRzLm5hbWUpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICBgQW5vdGhlciBjb21wb25lbnQgd2l0aCBuYW1lICR7b3B0cy5uYW1lfSBhbHJlYWR5IGV4aXN0c2AsXG4gICAgICAgIGNvbXBvbmVudFR5cGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGlzVHdpbjogdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5zb21lKGNvbXBvbmVudCA9PiBjb21wb25lbnQuY29uc3RydWN0b3IudHlwZSA9PT0gY29tcG9uZW50VHlwZSksXG4gICAgICAuLi5vcHRzXG4gICAgfTtcblxuICAgIC8vIEluc3RhbnRpYXRlIG91ciBuZXcgY29tcG9uZW50IGFuZCBrZWVwIHRyYWNrIG9mIGl0XG4gICAgbGV0IGNvbXBvbmVudCA9XG4gICAgICBuZXcgdGhpcy5fY29tcG9uZW50UmVnaXN0cnlbY29tcG9uZW50VHlwZV0oY29uZmlnLCBzeXN0ZW1PcHRzKVxuICAgICAgICAuaW5pdChjb25maWcpO1xuXG4gICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIGdsb2JhbCBzdG9yYWdlIHRvIHBvd2VyIHN0YXRlLCBhcHBseSB0aGUgc3RhdGVcbiAgICAvLyBmcm9tIHRoZSBzdG9yYWdlIHRvIHRoZSBjb21wb25lbnQsIGFuZCB0aGVuIGJpbmQgdGhlIGNvbXBvbmVudFxuICAgIC8vIHN0YXRlIHRvIHRoZSBzdG9yYWdlIHZpYSBpdHMgdXBkYXRlc1xuICAgIGlmICh0aGlzLl9jb3JlICYmIHRoaXMuX2NvcmUuZ2xvYmFsU3RvcmFnZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKGNvbXBvbmVudC5tb2R1bGVJZCA9PT0gdW5kZWZpbmVkIHx8IGNvbXBvbmVudC5tb2R1bGVJZCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jb3JlLmdsb2JhbFN0b3JhZ2VcbiAgICAgICAgLm9uKCd1cGRhdGUnLCBjb21wb25lbnQubW9kdWxlSWQsIChkYXRhKSA9PiB7XG4gICAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgcHJvdmlkZWQgY29tcG9uZW50IGZyb20gdGhlIGxpc3Qgb2YgYWN0aXZlIGNvbXBvbmVudHMgYW5kIHJlbW92ZVxuICAgKiB0aGUgYXNzb2NpYXRlZCBzdG9yYWdlIGV2ZW50IGxpc3RlbmVyXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCB0byByZW1vdmVcbiAgICovXG4gIHJlbW92ZSAoY29tcG9uZW50KSB7XG4gICAgdGhpcy5fY29yZS5nbG9iYWxTdG9yYWdlLm9mZigndXBkYXRlJywgY29tcG9uZW50Lm1vZHVsZUlkKTtcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5maW5kSW5kZXgoYyA9PiBjLm5hbWUgPT09IGNvbXBvbmVudC5uYW1lKTtcbiAgICB0aGlzLl9hY3RpdmVDb21wb25lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjb21wb25lbnQgd2l0aCB0aGUgZ2l2ZW4gbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgY29tcG5lbnQgdG8gcmVtb3ZlXG4gICAqL1xuICByZW1vdmVCeU5hbWUgKG5hbWUpIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLl9hY3RpdmVDb21wb25lbnRzLmZpbmQoYyA9PiBjLm5hbWUgPT09IG5hbWUpO1xuICAgIGNvbXBvbmVudC5yZW1vdmUoKTtcbiAgICBET00uZW1wdHkoY29tcG9uZW50Ll9jb250YWluZXIpO1xuICB9XG5cbiAgZ2V0QWN0aXZlQ29tcG9uZW50ICh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMuZmluZChjID0+IGMuY29uc3RydWN0b3IudHlwZSA9PT0gdHlwZSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlbmRlcmVyICovXG5cbi8qKlxuICogUmVuZGVyZXIgaXMgYW4gYWJzdHJhY3QgY2xhc3MgdGhhdCBhbGwgUmVuZGVyZXJzIHNob3VsZCBleHRlbmQgYW5kIGltcGxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciB7XG4gIC8qKlxuICAgKiByZW5kZXIgaXMgYSBjb3JlIG1ldGhvZCBmb3IgYWxsIHJlbmRlcmVycy5cbiAgICogQWxsIGltcGxlbWVudGF0aW9ucyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBjbGFzc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICovXG4gIHJlbmRlciAodGVtcGxhdGUsIGRhdGEpIHtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICByZWdpc3RlckhlbHBlciAobmFtZSwgY2IpIHtcblxuICB9XG5cbiAgY29tcGlsZSAodGVtcGxhdGUpIHtcblxuICB9XG59XG4iLCIvKiogQG1vZHVsZSBIYW5kbGViYXJzUmVuZGVyZXIgKi9cblxuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG4vKipcbiAqIEhhbmRsZWJhcnNSZW5kZXJlciBpcyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBuYXRpdmF0ZSBoYW5kbGViYXJzIHJlbmRlcmVyLlxuICogQGV4dGVuZHMgUmVuZGVyZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFuZGxlYmFyc1JlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvciAodGVtcGxhdGVzID0ge30sIG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgaGFuZGxlYmFycyBjb21waWxlclxuICAgICAqIEB0eXBlIHtIYW5kbGViYXJzfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faGFuZGxlYmFycyA9IHRlbXBsYXRlcy5faGIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBwcmUtY29tcGlsZWQgaGFuZGxlYmFycyB0ZW1wbGF0ZXNcbiAgICAgKiBAdHlwZSB7SGFuZGxlYmFyc31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHRlbXBsYXRlcyB8fCB7fTtcbiAgfVxuXG4gIGluaXQgKHRlbXBsYXRlcykge1xuICAgIC8vIEFzc2lnbiB0aGUgaGFuZGxlYmFycyBjb21waWxlciBhbmQgdGVtcGxhdGVzIGJhc2VkIG9uXG4gICAgLy8gaW5mb3JtYXRpb24gcHJvdmlkZWQgZnJvbSBleHRlcm5hbCBkZXAgKGluIGRlZmF1bHQgY2FzZSwgaXQgY29tZXMgZnJvbSBleHRlcm5hbCBzZXJ2ZXIgcmVxdWVzdClcbiAgICB0aGlzLl9oYW5kbGViYXJzID0gdGVtcGxhdGVzLl9oYjtcbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXM7XG5cbiAgICAvLyBUT0RPKGJpbGx5KSBPbmNlIHdlIHJlLXdyaXRlIHRlbXBsYXRlcyB1c2luZyB0aGUgbmV3IGhlbHBlcnMgbGlicmFyeVxuICAgIC8vIHdlIHByb2JhYmx5IGRvbid0IG5lZWQgdGhlc2UgY3VzdG9tIGhlbHBlcnMgYW55bW9yZVxuICAgIHRoaXMuX3JlZ2lzdGVyQ3VzdG9tSGVscGVycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlZ2lzdGVySGVscGVyIGlzIGEgcHVibGljIGludGVyZmFjZSBmb3IgZXh0ZXJuYWwgZGVwZW5kZW5jaWVzIHRvXG4gICAqIHJlZ2lzdGVyIHRoZWlyIG93biBjdXN0b20gaGVscGVycyB0byBvdXIgaW50ZXJuYWwgSGFuZGxlYmFycyBDb21waWxlclxuICAgKi9cbiAgcmVnaXN0ZXJIZWxwZXIgKG5hbWUsIGNiKSB7XG4gICAgdGhpcy5faGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihuYW1lLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogY29tcGlsZSBhIGhhbmRsZWJhcnMgdGVtcGxhdGUgc28gdGhhdCBpdCBjYW4gYmUgcmVuZGVyZWQsXG4gICAqIHVzaW5nIHRoZSB7SGFuZGxlYmFyc30gY29tcGlsZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlIFRoZSB0ZW1wbGF0ZSBzdHJpbmcgdG8gY29tcGlsZVxuICAgKi9cbiAgY29tcGlsZSAodGVtcGxhdGUpIHtcbiAgICBpZiAodHlwZW9mIHRlbXBsYXRlICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faGFuZGxlYmFycy5jb21waWxlKHRlbXBsYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZW5kZXIgd2lsbCByZW5kZXIgYSB0ZW1wbGF0ZSB3aXRoIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBQcm92aWRlIGVpdGhlciBhIHRlbXBsYXRlTmFtZSBvciBhIHByZS1jb21waWxlZCB0ZW1wbGF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBwcm92aWRlIHRvIHRoZSB0ZW1wbGF0ZVxuICAgKi9cbiAgcmVuZGVyIChjb25maWcsIGRhdGEpIHtcbiAgICAvLyBJZiBhIGN1c3RvbSB0ZW1wbGF0ZSBpcyBwcm92aWRlZCwgdXNlIGl0LFxuICAgIC8vIG90aGVyd2lzZSBmYWxsIGJhY2sgdG8gdGhlIHRlbXBsYXRlIG5hbWVcbiAgICAvLyBUT0RPKGJpbGx5KSBUaGlzIGludGVyZmFjZSBzaG91bGQgcHJvYmFibHkgYmUgbGVzcyB1Z2x5XG4gICAgaWYgKGNvbmZpZy50ZW1wbGF0ZSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNvbmZpZy50ZW1wbGF0ZShkYXRhKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlc1tjb25maWcudGVtcGxhdGVOYW1lXShkYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgZmluZC9yZW5kZXIgdGVtcGxhdGU6ICcgKyBjb25maWcudGVtcGxhdGVOYW1lLCBlKTtcbiAgICB9XG4gIH1cblxuICBfcmVnaXN0ZXJDdXN0b21IZWxwZXJzICgpIHtcbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdpZmVxJywgZnVuY3Rpb24gKGFyZzEsIGFyZzIsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiAoYXJnMSA9PT0gYXJnMikgPyBvcHRpb25zLmZuKHRoaXMpIDogb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignaWZub3RlcScsIGZ1bmN0aW9uIChhcmcxLCBhcmcyLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gKGFyZzEgIT09IGFyZzIpID8gb3B0aW9ucy5mbih0aGlzKSA6IG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2Zvcm1hdFBob25lTnVtYmVyJywgZnVuY3Rpb24gKHBob25lTnVtYmVyU3RyaW5nKSB7XG4gICAgICB2YXIgY2xlYW5lZCA9ICgnJyArIHBob25lTnVtYmVyU3RyaW5nKS5yZXBsYWNlKC9cXEQvZywgJycpO1xuICAgICAgdmFyIG1hdGNoID0gY2xlYW5lZC5tYXRjaCgvXigxfCk/KFxcZHszfSkoXFxkezN9KShcXGR7NH0pJC8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHZhciBpbnRsQ29kZSA9IChtYXRjaFsxXSA/ICcrMSAnIDogJycpO1xuICAgICAgICByZXR1cm4gW2ludGxDb2RlLCAnKCcsIG1hdGNoWzJdLCAnKSAnLCBtYXRjaFszXSwgJy0nLCBtYXRjaFs0XV0uam9pbignJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2Fzc2lnbicsIGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBvcHRpb25zID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAoIW9wdGlvbnMuZGF0YS5yb290KSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YS5yb290ID0ge307XG4gICAgICB9XG5cbiAgICAgIGxldCB2ID0gJyc7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIHYgPSB2ICsgYXJnc1tpXTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5kYXRhLnJvb3RbbmFtZV0gPSB2O1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignanNvbicsIGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG5hbWUgPT09IHVuZGVmaW5lZFxuICAgICAgICA/ICcnXG4gICAgICAgIDogSlNPTi5zdHJpbmdpZnkobmFtZSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBIYW5kbGViYXJzUmVuZGVyZXIgZnJvbSAnLi9oYW5kbGViYXJzcmVuZGVyZXInO1xuXG4vLyBJbiB0aGUgZnV0dXJlLCB0aGlzIHdpbGwgY29udGFpbiBhbGwgZGlmZmVyZW50IHR5cGVzIG9mIHJlbmRlcmVyc1xuLy8gRS5nLiBNdXN0YWNoZSwgU09ZLCBIYW5kbGVCYXJzLCBSZWFjdCwgZXRjLlxuZXhwb3J0IGNvbnN0IFJlbmRlcmVycyA9IHtcbiAgU09ZOiBSZW5kZXJlcixcbiAgSGFuZGxlYmFyczogSGFuZGxlYmFyc1JlbmRlcmVyXG59O1xuIiwiLyoqIEBtb2R1bGUgRE9NICovXG5cbi8qIGdsb2JhbCBIVE1MRWxlbWVudCwgSFRNTERvY3VtZW50LCBXaW5kb3csIEN1c3RvbUV2ZW50ICovXG5cbmxldCBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcblxuLyoqXG4gKiBTdGF0aWMgaW50ZXJmYWNlIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBET00gQVBJLlxuICogQG5hbWVzcGFjZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBET00ge1xuICBzdGF0aWMgc2V0dXAgKGQsIHApIHtcbiAgICBkb2N1bWVudCA9IGQ7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIGEgSFRNTEVsZW1lbnQgZnJvbSBhbmQgSFRNTCBzdHJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IGh0bWwgVGhlIEhUTUwgdG8gcGFyc2UgdG8gYSBET00gbm9kZS5cbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlIChodG1sKSB7XG4gICAgaWYgKCdjcmVhdGVSYW5nZScgaW4gZG9jdW1lbnQpIHtcbiAgICAgIC8vIHByZWZlciB0aGlzIGltcGxlbWVudGF0aW9uIGFzIGl0IGhhcyB3aWRlciBicm93c2VyIHN1cHBvcnRcbiAgICAgIC8vIGFuZCBpdCdzIGJldHRlciBwZXJmb3JtaW5nLlxuICAgICAgLy8gc2VlIGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2NvbnZlcnQtaHRtbC1zdGluZ3MtZG9tLW5vZGVzXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChodG1sKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnKTtcbiAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgLy8gZmFsbGJhY2sgdG8gdGhpcyBiZWNhdXNlIG9mIGEgYnVnIGluIGpzZG9tIHRoYXQgY2F1c2VzIHRlc3RzIHRvIGZhaWxcbiAgICAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qc2RvbS9qc2RvbS9pc3N1ZXMvMzk5XG4gICAgcmV0dXJuIG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoaHRtbCwgJ3RleHQvaHRtbCcpLmJvZHk7XG4gIH1cblxuICAvKipcbiAgICogcXVlcnkgdGhlIERPTSBmb3IgYSBnaXZlbiBjc3Mgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50IE9wdGlvbmFsIGNvbnRleHQgdG8gdXNlIGZvciBhIHNlYXJjaC4gRGVmYXVsdHMgdG8gZG9jdW1lbnQgaWYgbm90IHByb3ZpZGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgdGhlIENTUyBzZWxlY3RvciB0byBxdWVyeSBmb3JcbiAgICpcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSB0aGUgRklSU1Qgbm9kZSBpdCBmaW5kcywgaWYgYW55XG4gICAqL1xuICBzdGF0aWMgcXVlcnkgKHBhcmVudCwgc2VsZWN0b3IpIHtcbiAgICAvLyBGYWNhZGUsIHNoaWZ0aW5nIHRoZSBzZWxlY3RvciB0byB0aGUgcGFyZW50IGFyZ3VtZW50IGlmIG9ubHkgb25lXG4gICAgLy8gYXJndW1lbnQgaXMgcHJvdmlkZWRcbiAgICBpZiAoc2VsZWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2VsZWN0b3IgPSBwYXJlbnQ7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIFdpbmRvdyB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxEb2N1bWVudCkge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogcXVlcnkgdGhlIERPTSBmb3IgYSBnaXZlbiBjc3Mgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50IE9wdGlvbmFsIGNvbnRleHQgdG8gdXNlIGZvciBhIHNlYXJjaC4gRGVmYXVsdHMgdG8gZG9jdW1lbnQgaWYgbm90IHByb3ZpZGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgdGhlIENTUyBzZWxlY3RvciB0byBxdWVyeSBmb3JcbiAgICpcbiAgICogQHJldHVybnMge0FycmF5fSB0aGUgRklSU1Qgbm9kZSBpdCBmaW5kcywgaWYgYW55XG4gICAqL1xuICBzdGF0aWMgcXVlcnlBbGwgKHBhcmVudCwgc2VsZWN0b3IpIHtcbiAgICAvLyBGYWNhZGUsIHNoaWZ0aW5nIHRoZSBzZWxlY3RvciB0byB0aGUgcGFyZW50IGFyZ3VtZW50IGlmIG9ubHkgb25lXG4gICAgLy8gYXJndW1lbnQgaXMgcHJvdmlkZWRcbiAgICBpZiAoc2VsZWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2VsZWN0b3IgPSBwYXJlbnQ7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgY2xpZW50IGNvZGUgaXMgdXNpbmcgYSBwb2ludGVyIHRvIGEgZG9tIG5vZGUgYW5kIGl0J3MgbnVsbCwgZS5nLiB0aGlzLl9jb250YWluZXJcbiAgICBpZiAocGFyZW50ID09IG51bGwpIHtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTERvY3VtZW50IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgV2luZG93KSB7XG4gICAgICByZXR1cm4gW3NlbGVjdG9yXTtcbiAgICB9XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuICB9XG5cbiAgc3RhdGljIG9uUmVhZHkgKGNiKSB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRlZCcgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJykge1xuICAgICAgY2IoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBET00ub24oZG9jdW1lbnQsICdET01Db250ZW50TG9hZGVkJywgY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZUVsZSB3aWxsIGNyZWF0ZSBhIHtIVE1MRWxlbWVudH0gYW5kIGFwcGx5IHRoZSBwcm9wZXJ0aWVzIGF0dHJpYnV0ZXMgdGhyb3VnaCBhbiBvYmplY3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbCBUaGUgZWxlbWVudCBgdGFnYCBuYW1lIHRvIGNvbnN0cnVjdFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c19kYXRhIE9wdGlvbmFsIGF0dHJpYnV0ZXMgdG8gYXBwbHkgdG8gdGhlIG5ldyBIVE1MRWxlbWVudFxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUVsIChlbCwgb3B0c19kYXRhID0ge30pIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwpO1xuICAgIGxldCBwcm9wcyA9IE9iamVjdC5rZXlzKG9wdHNfZGF0YSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocHJvcHNbaV0gPT09ICdjbGFzcycpIHtcbiAgICAgICAgRE9NLmFkZENsYXNzKG5vZGUsIG9wdHNfZGF0YVtwcm9wc1tpXV0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbm9kZVtwcm9wc1tpXV0gPSBvcHRzX2RhdGFbcHJvcHNbaV1dO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIGFwcGVuZCAocGFyZW50LCBub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbm9kZSA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcGFyZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgcGFyZW50ID0gRE9NLnF1ZXJ5KHBhcmVudCk7XG4gICAgfVxuXG4gICAgLy8gU3VwcG9ydCBIVE1MIGluamVjdGlvbiBhcyB3ZWxsIGFzIEhUTUxFbGVtZW50IGFwcGVuZHNcbiAgICBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlckJlZ2luJywgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYWRkQ2xhc3MgKG5vZGUsIGNsYXNzTmFtZSkge1xuICAgIGxldCBjbGFzc2VzID0gY2xhc3NOYW1lLnNwbGl0KCcsJyk7XG4gICAgbGV0IGxlbiA9IGNsYXNzZXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzZXNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBlbXB0eSAocGFyZW50KSB7XG4gICAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgc3RhdGljIGNzcyAoc2VsZWN0b3IsIHN0eWxlcykge1xuICAgIGxldCBub2RlID0gRE9NLnF1ZXJ5KHNlbGVjdG9yKTtcblxuICAgIGZvciAobGV0IHByb3AgaW4gc3R5bGVzKSB7XG4gICAgICBub2RlLnN0eWxlW3Byb3BdID0gc3R5bGVzW3Byb3BdO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhdHRyIChzZWxlY3RvciwgYXR0ciwgdmFsKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsKTtcbiAgfVxuXG4gIHN0YXRpYyBhdHRyaWJ1dGVzIChzZWxlY3RvciwgYXR0cnMpIHtcbiAgICBPYmplY3QuZW50cmllcyhhdHRycylcbiAgICAgIC5mb3JFYWNoKChbYXR0ciwgdmFsXSkgPT4gdGhpcy5hdHRyKHNlbGVjdG9yLCBhdHRyLCB2YWwpKTtcbiAgfVxuXG4gIHN0YXRpYyB0cmlnZ2VyIChzZWxlY3RvciwgZXZlbnQsIHNldHRpbmdzKSB7XG4gICAgbGV0IGUgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgJ2J1YmJsZXMnOiB0cnVlLFxuICAgICAgJ2NhbmNlbGFibGUnOiB0cnVlXG4gICAgfSwgc2V0dGluZ3MgfHwge30pKTtcblxuICAgIERPTS5xdWVyeShzZWxlY3RvcikuZGlzcGF0Y2hFdmVudChlKTtcbiAgfVxuXG4gIHN0YXRpYyBvbiAoc2VsZWN0b3IsIGV2dCwgaGFuZGxlcikge1xuICAgIERPTS5xdWVyeShzZWxlY3RvcikuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIG9uY2UgKHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpIHtcbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCB7IG9uY2U6IHRydWUgfSk7XG4gIH1cblxuICBzdGF0aWMgb2ZmIChzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZGVsZWdhdGUgKGN0eHQsIHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpIHtcbiAgICBsZXQgZWwgPSBET00ucXVlcnkoY3R4dCk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIHdoaWxlICghdGFyZ2V0LmlzRXF1YWxOb2RlKGVsKSkge1xuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgaGFuZGxlcihldmVudCwgdGFyZ2V0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRXZlbnRFbWl0dGVyICovXG5cbi8qKlxuICogRXZlbnRFbWl0dGVyIGlzIGEgYmFzZSBjbGFzcyBmb3IgYW55IG9iamVjdCB0aGF0IHdhbnRzIHRvIGV4cG9zZVxuICogYSBwdWIvc3ViIGludGVyZmFjZSwgZm9yIGVtaXR0aW5nIG1lc3NhZ2VzIGFuZCBwcm92aWRpbmcgbGlzdGVuZXJzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLyoqXG4gICAgICogVGhlIHN1YnNjcmliZXJzIG9mIG1lc3NhZ2VzXG4gICAgICogQHR5cGUge29iamVjdFtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbGlzdGVuZXJzID0ge307XG4gIH1cblxuICAvKipcbiAgICogb24gaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIHN1YnNjcmliaW5nIGV2ZW50cyB0aGF0IGFyZSBlbWl0dGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIGxpc3RlbiB0b1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gdGhlIHtldnR9IGlzIGVtaXR0ZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBvbmNlIE9wdGlvbmFsIHZhbHVlIHdoaWNoIHdpbGwgb25seSBoYW5kbGUgdGhlIG1lc3NhZ2Ugb25jZVxuICAgKi9cbiAgb24gKGV2dCwgY2IsIG9uY2UpIHtcbiAgICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbGxiYWNrIGhhbmRsZXIgc2hvdWxkIGJlIG9mIHR5cGUge2Z1bmN0aW9ufScpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9saXN0ZW5lcnNbZXZ0XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XSA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuX2xpc3RlbmVyc1tldnRdLnB1c2goe1xuICAgICAgZXZlbnQ6IGV2dCxcbiAgICAgIGNiOiBjYixcbiAgICAgIG9uY2U6IG9uY2UgfHwgZmFsc2VcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uY2UgaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIHN1YnNjcmliaW5nIGV2ZW50cyB0aGF0IGFyZSBlbWl0dGVkLlxuICAgKiBUaGUgaGFuZGxlciB3aWxsIG9ubHkgYmUgdHJpZ2dlcmVkIG9uY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gbGlzdGVuIHRvXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIFRoZSBjYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUge2V2dH0gaXMgZW1pdHRlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uY2UgT3B0aW9uYWwgdmFsdWUgd2hpY2ggd2lsbCBvbmx5IGhhbmRsZSB0aGUgbWVzc2FnZSBvbmNlXG4gICAqL1xuICBvbmNlIChldnQsIGNiKSB7XG4gICAgcmV0dXJuIHRoaXMub24oZXZ0LCBjYiwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogb2ZmIGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciB1bnN1YnNjcmliaW5nIGZyb20gYW4gZXZlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byB1bnN1YnNjcmliZSBmcm9tXG4gICAqL1xuICBvZmYgKGV2dCkge1xuICAgIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcnNbZXZ0XTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBlbWl0IGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciBicm9hZGNhc3RpbmcgbWVzc2FnZXMvZXZlbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gcHVibGlzaCBmcm9tXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIHRoZSBkYXRhIHRvIHNlbmQgYWxvbmcgdG8gdGhlIHN1YnNjcmliZXJzXG4gICAqL1xuICBlbWl0IChldnQsIGRhdGEpIHtcbiAgICBsZXQgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2dF07XG4gICAgaWYgKGxpc3RlbmVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSW52b2tlIGVhY2ggb2YgYWxsIHRoZSBsaXN0ZW5lciBoYW5kbGVycyBhbmQgcmVtb3ZlIHRoZSBvbmVzIHRoYXQgc2hvdWxkIGZpcmUgb25seSBvbmNlLlxuICAgIGxldCBrZWVwID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpc3RlbmVyc1tpXS5jYihkYXRhKTtcbiAgICAgIGlmIChsaXN0ZW5lcnNbaV0ub25jZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gSW5zdGVhZCBvZiBoYXZpbmcgYSAnZGlydHknIGFycmF5IHdpdGggZGVsZXRlZCBvciAndW5kZWZpbmVkJyBlbnRyaWVzLFxuICAgICAgLy8gd2UganVzdCBjcmVhdGUgYSBicmFuZCBuZXcgYXJyYXkgd2l0aG91dCB0aGUgbGlzdGVuZXJzIHRoYXQgd2VyZSByZW1vdmVkXG4gICAgICBrZWVwLnB1c2gobGlzdGVuZXJzW2ldKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgb3VyIG9sZCBsaXN0IG9mIGxpc3RlbmVycyB0byB0aGUgbmV3bHkgY3JlYXRlZCBhcnJheVxuICAgIHRoaXMuX2xpc3RlbmVyc1tldnRdID0ga2VlcDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU3RhdGUgKi9cblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi8uLi9jb3JlL2V2ZW50ZW1pdHRlci9ldmVudGVtaXR0ZXInO1xuXG4vKipcbiAqIFN0YXRlIGNvbnRhaW5zIHRoZSBkYXRhIGZvciB0aGUgY29tcG9uZW50XG4gKiBhbmQgZXhwb3NlcyBhbiB7RXZlbnRFbWl0dGVyfSBpbnRlcmZhY2Ugc28gdGhhdCBleHRlcm5hbFxuICogZGVwZW5kZW5jaWVzIGNhbiBsaXN0ZW4vaG9vayBzdWJzY3JpYmUgdG8gbWVzc2FnZXMvdXBkYXRlcy5cbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RhdGUgPSBkYXRhIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKiBOT1RFKGJpbGx5KTogRG9lcyBub3QgZmlyZSBhbiB1cGRhdGUgbWVzc2FnZVxuICAgKi9cbiAgaW5pdCAocHJvcCwgb3B0VmFsKSB7XG4gICAgdGhpcy5fc2V0KHByb3AsIG9wdFZhbCk7XG4gIH1cblxuICAvKipcbiAgICogc2V0dGVyIGZvciB0aGUgc3RhdGVcbiAgICogQHBhcmFtIHByb3Age3N0cmluZ3xPYmplY3R9IFRoZSBwcm9wZXJ0eSB0byBzZXRcbiAgICogQHBhcmFtIG9wdFZhbCBPcHRpb25hbCwgaWYgcHJvcCBpcyBhIHtzdHJpbmd9LCBpdCB3aWxsIGFzc2lnbiB0aGUgdmFsdWUgdG8gdGhhdCBwcm9wZXJ0eVxuICAgKi9cbiAgc2V0IChwcm9wLCBvcHRWYWwpIHtcbiAgICB0aGlzLl9zZXQocHJvcCwgb3B0VmFsKTtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldHRlciBmb3IgdGhlIHN0YXRlIGVuYWJsZXMgeW91IHRvIHVwZGF0ZSBhIHNpbmdsZSBwcm9wZXJ0eSwgb3IgY29tcGxldGUgc3RhdGVcbiAgICogZGVwZW5kaW5nIG9uIHRoZSBhcmd1bWVudHMgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSBwcm9wIHtzdHJpbmd8T2JqZWN0fSBUaGUgcHJvcGVydHkgdG8gc2V0XG4gICAqIEBwYXJhbSBvcHRWYWwgSWYgcHJvcCBpcyBhIHtzdHJpbmd9LCBwcm92aWRlIGl0cyB2YWx1ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NldCAocHJvcCwgb3B0VmFsKSB7XG4gICAgaWYgKG9wdFZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9zdGF0ZSA9IHByb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0YXRlW3Byb3BdID0gb3B0VmFsO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSAoZGF0YSkge1xuICAgIHRoaXMuX3N0YXRlID0gZGF0YTtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGEgcHJvcGVydGllcyB2YWx1ZSBmcm9tIHRoZSBzdGF0ZVxuICAgKiBJZiBubyBwcm9wZXJ0eSBwcm92aWRlZCwgcmV0dXJuIHRoZSBmdWxsIHN0YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRQcm9wIG9wdGlvbmFsIHByb3BlcnR5IHRvIHJldHJpZXZlXG4gICAqL1xuICBnZXQgKG9wdFByb3ApIHtcbiAgICBpZiAob3B0UHJvcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zdGF0ZVtvcHRQcm9wXTtcbiAgfVxuXG4gIGhhcyAocHJvcCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZVtwcm9wXSAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgYXNKU09OICgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gIH1cbn1cbiIsIi8qKlxuICogTW9kZWwgZm9yIHRoZSBhbmFseXRpY3MgZXZlbnQgdHlwZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmFseXRpY3NFdmVudCB7XG4gIGNvbnN0cnVjdG9yICh0eXBlLCBsYWJlbCkge1xuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIGV2ZW50IHRvIHJlcG9ydFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5ldmVudFR5cGUgPSB0eXBlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBvcHRpb25hbCBsYWJlbCB0byBiZSBwcm92aWRlZCBmb3IgdGhlIGV2ZW50XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgcHJvdmlkZWQgb3B0aW9ucyB0byB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgQWRkaXRpb25hbCBvcHRpb25zIGZvciB0aGUgZXZlbnRcbiAgICovXG4gIGFkZE9wdGlvbnMgKG9wdGlvbnMpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZXZlbnQgaW4gdGhlIGFwaSBmb3JtYXQsIHR5cGljYWxseSBmb3IgcmVwb3J0aW5nIHRvIHRoZSBhcGlcbiAgICovXG4gIHRvQXBpRXZlbnQgKCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQW5hbHl0aWNzUmVwb3J0ZXIgKi9cblxuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4vYW5hbHl0aWNzZXZlbnQnO1xuaW1wb3J0IHsgQW5zd2Vyc0FuYWx5dGljc0Vycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgeyBBTkFMWVRJQ1NfQkFTRV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IEh0dHBSZXF1ZXN0ZXIgZnJvbSAnLi4vaHR0cC9odHRwcmVxdWVzdGVyJztcblxuLyoqXG4gKiBDbGFzcyBmb3IgcmVwb3J0aW5nIGFuYWx5dGljcyBldmVudHMgdG8gdGhlIHNlcnZlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmFseXRpY3NSZXBvcnRlciB7XG4gIGNvbnN0cnVjdG9yIChjb3JlLCBleHBlcmllbmNlS2V5LCBleHBlcmllbmNlVmVyc2lvbiwgYnVzaW5lc3NJZCwgZ2xvYmFsT3B0aW9ucyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIGludGVybmFsIGJ1c2luZXNzIGlkZW50aWZpZXIgdXNlZCBmb3IgcmVwb3J0aW5nXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9idXNpbmVzc0lkID0gYnVzaW5lc3NJZDtcblxuICAgIC8qKlxuICAgICAqIE9wdGlvbnMgdG8gaW5jbHVkZSB3aXRoIGV2ZXJ5IGFuYWx5dGljIGV2ZW50IHJlcG9ydGVkIHRvIHRoZSBzZXJ2ZXJcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZ2xvYmFsT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGdsb2JhbE9wdGlvbnMsIHsgZXhwZXJpZW5jZUtleSB9KTtcblxuICAgIGlmIChleHBlcmllbmNlVmVyc2lvbikge1xuICAgICAgdGhpcy5fZ2xvYmFsT3B0aW9ucy5leHBlcmllbmNlVmVyc2lvbiA9IGV4cGVyaWVuY2VWZXJzaW9uO1xuICAgIH1cblxuICAgIC8vIGxpc3RlbiB0byBxdWVyeSBpZCB1cGRhdGVzXG4gICAgY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBTdG9yYWdlS2V5cy5RVUVSWV9JRCwgaWQgPT4gdGhpcy5zZXRRdWVyeUlkKGlkKSk7XG4gIH1cblxuICBzZXRRdWVyeUlkIChxdWVyeUlkKSB7XG4gICAgdGhpcy5fZ2xvYmFsT3B0aW9ucy5xdWVyeUlkID0gcXVlcnlJZDtcbiAgfVxuXG4gIHJlcG9ydCAoZXZlbnQpIHtcbiAgICBpZiAoIShldmVudCBpbnN0YW5jZW9mIEFuYWx5dGljc0V2ZW50KSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNBbmFseXRpY3NFcnJvcignVHJpZWQgdG8gc2VuZCBpbnZhbGlkIGFuYWx5dGljcyBldmVudCcsIGV2ZW50KTtcbiAgICB9XG5cbiAgICBldmVudC5hZGRPcHRpb25zKHRoaXMuX2dsb2JhbE9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIG5ldyBIdHRwUmVxdWVzdGVyKCkuYmVhY29uKFxuICAgICAgYCR7QU5BTFlUSUNTX0JBU0VfVVJMfS9yZWFsdGltZWFuYWx5dGljcy9kYXRhL2Fuc3dlcnMvJHt0aGlzLl9idXNpbmVzc0lkfWAsXG4gICAgICB7XG4gICAgICAgICdkYXRhJzogZXZlbnQudG9BcGlFdmVudCgpXG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTW9kdWxlRGF0YSAqL1xuXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50ZW1pdHRlci9ldmVudGVtaXR0ZXInO1xuXG4vKipcbiAqIE1vZHVsZURhdGEgaXMgdXNlZCBhcyBhIGdlbmVyaWMgbW9kZWwgZm9yIFN0b3JhZ2UuXG4gKiBUeXBpY2FsbHkgYW4gaW5zdGFuY2Ugb2YgTW9kdWxlRGF0YSBwb3dlcnMgYSBzaW5nbGUgY29tcG9uZW50LlxuXG4gKiBBIGRhdGEgbW9kZWwgdGhhdCBleHBvc2VzIGFuIGV2ZW50IGVtaXR0ZXIgaW50ZXJmYWNlLlxuICogQGV4dGVuZHMgRXZlbnRFbWl0dGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZHVsZURhdGEgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoaWQsIGRhdGEgPSB7fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLl9pZCA9IGlkO1xuICAgIHRoaXMuX2hpc3RvcnkgPSBbXTtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB0aGlzLnNldChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXBsYWNlcyB0aGUgY3VycmVudGx5IGhlbGQgZGF0YSB3aXRoIHRoZSBnaXZlbiBkYXRhXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSB0aGUgZGF0YSB0byByZXBsYWNlIHRoZSBjdXJyZW50IGRhdGFcbiAgICovXG4gIHNldCAoZGF0YSkge1xuICAgIHRoaXMuY2FwdHVyZVByZXZpb3VzKCk7XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkoZGF0YSkgfHwgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoICE9PSBPYmplY3Qua2V5cyh0aGlzLl9kYXRhKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLl9kYXRhKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBmb3Igc2hhbGxvdyBlcXVhbGl0eVxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGRhdGEpKSB7XG4gICAgICBpZiAodGhpcy5fZGF0YVtrZXldICE9PSBkYXRhW2tleV0pIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5fZGF0YSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjYXB0dXJlUHJldmlvdXMgKCkge1xuICAgIGlmICh0aGlzLl9oaXN0b3J5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2hpc3RvcnkgPSBbXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faGlzdG9yeS5sZW5ndGggKyAxID4gNSkge1xuICAgICAgdGhpcy5faGlzdG9yeS5zaGlmdCgpO1xuICAgIH1cblxuICAgIC8vIElmIGRhdGEgaXMgZXZlciB1bmRlZmluZWQsIHdlIGRlZmF1bHQgdG8gZW1wdHkgb2JqZWN0XG4gICAgdGhpcy5faGlzdG9yeS5wdXNoKEpTT04uc3RyaW5naWZ5KHRoaXMuX2RhdGEgfHwge30pKTtcbiAgfVxuXG4gIHVuZG8gKCkge1xuICAgIGxldCBwcmV2aW91cyA9IHt9O1xuICAgIGlmICh0aGlzLl9wcmV2aW91cy5sZW5ndGggPiAwKSB7XG4gICAgICBwcmV2aW91cyA9IEpTT04ucGFyc2UodGhpcy5fcHJldmlvdXMucG9wKCkpO1xuICAgIH1cblxuICAgIHRoaXMuX2RhdGEuc2V0KHByZXZpb3VzKTtcbiAgfVxuXG4gIHJhdyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEdsb2JhbFN0b3JhZ2UgKi9cblxuaW1wb3J0IE1vZHVsZURhdGEgZnJvbSAnLi9tb2R1bGVkYXRhJztcbmltcG9ydCB7IEFuc3dlcnNTdG9yYWdlRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBTdG9yYWdlIGlzIGEgY29udGFpbmVyIGFyb3VuZCBhcHBsaWNhdGlvbiBzdGF0ZS5cbiAqIEl0IGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBDUlVEIG9wZXJhdGlvbnMgYXMgd2VsbCBhcyBsaXN0ZW5pbmdcbiAqIGZvciBzdGF0ZWZ1bCBjaGFuZ2VzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWxTdG9yYWdlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXIgPSB7fTtcbiAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGRhdGEgaW4gc3RvcmFnZSB3aXRoIHRoZSBnaXZlbiBrZXkgdG8gdGhlIHByb3ZpZGVkIGRhdGEsXG4gICAqIGNvbXBsZXRlbHkgb3ZlcndyaXRpbmcgYW55IGV4aXN0aW5nIGRhdGEuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdGhlIHN0b3JhZ2Uga2V5IHRvIHNldFxuICAgKiBAcGFyYW0geyp9IGRhdGEgdGhlIGRhdGEgdG8gc2V0XG4gICAqL1xuICBzZXQgKGtleSwgZGF0YSkge1xuICAgIHRoaXMuX2luaXREYXRhQ29udGFpbmVyKGtleSwgZGF0YSk7XG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltrZXldLnNldChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYWxsIGtleS92YWx1ZSBwYWlycyBpbiB0aGUgcHJvdmlkZWQgbWFwIHRvIHRoZSBzdG9yYWdlXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUga2V5L3ZhbHVlIHBhaXJzIHRvIHNldCBpbiB0aGUgc3RvcmFnZVxuICAgKi9cbiAgc2V0QWxsIChkYXRhKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XG4gICAgICB0aGlzLnNldChrZXksIHZhbCk7XG4gICAgfVxuICB9XG5cbiAgX2luaXREYXRhQ29udGFpbmVyIChrZXksIGRhdGEpIHtcbiAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQgfHwga2V5ID09PSBudWxsIHx8IHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc1N0b3JhZ2VFcnJvcignSW52YWxpZCBzdG9yYWdlIGtleSBwcm92aWRlZCcsIGtleSwgZGF0YSk7XG4gICAgfVxuICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQgfHwgZGF0YSA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNTdG9yYWdlRXJyb3IoJ05vIGRhdGEgcHJvdmlkZWQnLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltrZXldID0gbmV3IE1vZHVsZURhdGEoa2V5KTtcbiAgICAgIHRoaXMuX2FwcGx5RnV0dXJlTGlzdGVuZXJzKGtleSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3RhdGUgKG1vZHVsZUlkKSB7XG4gICAgaWYgKHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0ucmF3KCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0QWxsIChrZXkpIHtcbiAgICBjb25zdCBkYXRhID0gW107XG4gICAgZm9yIChjb25zdCBkYXRhS2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuX21vZHVsZURhdGFDb250YWluZXIpKSB7XG4gICAgICBpZiAoZGF0YUtleS5zdGFydHNXaXRoKGtleSkgJiYgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltkYXRhS2V5XS5yYXcoKSAhPT0gbnVsbCkge1xuICAgICAgICBkYXRhLnB1c2godGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltkYXRhS2V5XS5yYXcoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgZGF0YSBpbiBzdG9yYWdlIHdpdGggdGhlIGdpdmVuIGtleSB0byB0aGUgcHJvdmlkZWQgZGF0YSxcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSB0aGUgc3RvcmFnZSBrZXkgdG8gZGVsZXRlXG4gICAqL1xuICBkZWxldGUgKGtleSkge1xuICAgIC8vIE5vdGU6IERvIHdlIG5lZWQgdG8gY2xlYW4gdXAgbGlzdGVuZXJzIGhlcmU/XG4gICAgZGVsZXRlIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJba2V5XTtcbiAgfVxuXG4gIG9uIChldnQsIG1vZHVsZUlkLCBjYikge1xuICAgIGxldCBtb2R1bGVEYXRhID0gdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF07XG4gICAgaWYgKG1vZHVsZURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdID0gW107XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0ucHVzaCh7XG4gICAgICAgIGV2ZW50OiBldnQsXG4gICAgICAgIGNiOiBjYlxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5vbihldnQsIGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9mZiAoZXZ0LCBtb2R1bGVJZCwgY2IpIHtcbiAgICBsZXQgbW9kdWxlRGF0YSA9IHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdO1xuICAgIGlmIChtb2R1bGVEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXS5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0ub2ZmKGV2dCwgY2IpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2FwcGx5RnV0dXJlTGlzdGVuZXJzIChtb2R1bGVJZCkge1xuICAgIGxldCBmdXR1cmVzID0gdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXTtcbiAgICBpZiAoIWZ1dHVyZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZ1dHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBmdXR1cmUgPSBmdXR1cmVzW2ldO1xuICAgICAgdGhpcy5vbihmdXR1cmUuZXZlbnQsIG1vZHVsZUlkLCBmdXR1cmUuY2IpO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2hBcGkgfSBmcm9tICcuL3NlYXJjaC9zZWFyY2hhcGknO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBbmFseXRpY3NSZXBvcnRlciB9IGZyb20gJy4vYW5hbHl0aWNzL2FuYWx5dGljc3JlcG9ydGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kdWxlRGF0YSB9IGZyb20gJy4vc3RvcmFnZS9tb2R1bGVkYXRhJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZS9nbG9iYWxzdG9yYWdlJztcbiIsIi8qKiBAbW9kdWxlIENvbXBvbmVudCAqL1xuXG5pbXBvcnQgeyBSZW5kZXJlcnMgfSBmcm9tICcuLi9yZW5kZXJpbmcvY29uc3QnO1xuXG5pbXBvcnQgRE9NIGZyb20gJy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0YXRlIGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgQW5hbHl0aWNzUmVwb3J0ZXIgfSBmcm9tICcuLi8uLi9jb3JlJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGlzIGFuIGFic3RyYWN0aW9uIHRoYXQgZW5jYXBzdWxhdGVzIHN0YXRlLCBiZWhhdmlvcixcbiAqIGFuZCB2aWV3IGZvciBhIHBhcnRpY3VsYXIgY2h1bmsgb2YgZnVuY3Rpb25hbGl0eSBvbiB0aGUgcGFnZS5cbiAqXG4gKiBUaGUgQVBJIGV4cG9zZXMgZXZlbnQgbGlmZSBjeWNsZSBob29rcyBmb3Igd2hlbiB0aGluZ3MgYXJlIHJlbmRlcmVkLFxuICogbW91bnRlZCwgY3JlYXRlZCwgZXRjLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgdGhpcy5tb2R1bGVJZCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBVbmlxdWUgbmFtZSBvZiB0aGlzIGNvbXBvbmVudCBpbnN0YW5jZVxuICAgICAqIFVzZWQgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBvdGhlciBjb21wb25lbnRzIG9mIHRoZSBzYW1lIHR5cGVcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubmFtZSA9IGNvbmZpZy5uYW1lIHx8IHRoaXMuY29uc3RydWN0b3IudHlwZTtcblxuICAgIC8qKlxuICAgICAqIENhY2hlIHRoZSBvcHRpb25zIHNvIHRoYXQgd2UgY2FuIHByb3BvZ2F0ZSBwcm9wZXJseSB0byBjaGlsZCBjb21wb25lbnRzXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpZGVudGlmaWVyIHVzZWQgdG8gY2xhc3NpZnkgdGhlIHR5cGUgb2YgY29tcG9uZW50LlxuICAgICAqIFRoZSBjb21wb25lbnQgbWFuYWdlciB1c2VzIHRoaXMgaW5mb3JtYXRpb24gaW4gb3JkZXIgdG8gcGVyc2lzdCBhbmQgb3JnYW5pemUgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtzdHJpbmd8Q29tcG9uZW50VHlwZX1cbiAgICAgKi9cbiAgICB0aGlzLl90eXBlID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIHBhcmVudCBjb21wb25lbnQsIGlmIGV4aXN0c1xuICAgICAqIEB0eXBlIHtDb21wb25lbnR9XG4gICAgICovXG4gICAgdGhpcy5fcGFyZW50Q29udGFpbmVyID0gY29uZmlnLnBhcmVudENvbnRhaW5lciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBjb250YWluZXIgZm9yIGFsbCB0aGUgY2hpbGQgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtDb21wb25lbnRbXX1cbiAgICAgKi9cbiAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN0YXRlIChkYXRhKSBvZiB0aGUgY29tcG9uZW50IHRvIGJlIHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9zdGF0ZSA9IG5ldyBTdGF0ZShjb25maWcuc3RhdGUpO1xuXG4gICAgLyoqXG4gICAgICogVE9ETyhiaWxseSkgVGhpcyBzaG91bGQgYmUgJ3NlcnZpY2VzJ1xuICAgICAqL1xuICAgIHRoaXMuY29yZSA9IHN5c3RlbUNvbmZpZy5jb3JlIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IG1hbmFnZXIsIHdoaWNoIGNvbnRhaW5zIGFsbCBvZiB0aGUgY29tcG9uZW50IGNsYXNzZXNcbiAgICAgKiBlbGlnaWJsZSB0byBiZSBjcmVhdGVkXG4gICAgICogQHR5cGUge0NvbXBvbmVudE1hbmFnZXJ9XG4gICAgICovXG4gICAgdGhpcy5jb21wb25lbnRNYW5hZ2VyID0gc3lzdGVtQ29uZmlnLmNvbXBvbmVudE1hbmFnZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBhbmFseXRpY3MgcmVwb3J0ZXIsIHVzZWQgdG8gcmVwb3J0IGV2ZW50cyBmb3IgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7QW5hbHl0aWNzUmVwb3J0ZXJ9XG4gICAgICovXG4gICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlciA9IHN5c3RlbUNvbmZpZy5hbmFseXRpY3NSZXBvcnRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogT3B0aW9ucyB0byBpbmNsdWRlIHdpdGggYWxsIGFuYWx5dGljIGV2ZW50cyBzZW50IGJ5IHRoaXMgY29tcG9uZW50XG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FuYWx5dGljc09wdGlvbnMgPSBjb25maWcuYW5hbHl0aWNzT3B0aW9ucyB8fCB7fTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBET00gbm9kZSB0aGF0IHRoZSBjb21wb25lbnQgd2lsbCBiZSBhcHBlbmRlZCB0byB3aGVuIG1vdW50ZWQvcmVuZGVyZWQuXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGlmICh0aGlzLl9wYXJlbnRDb250YWluZXIgPT09IG51bGwpIHtcbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRhaW5lciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGBjb250YWluZXJgIG9wdGlvbiBmb3IgY29tcG9uZW50IGNvbmZpZ3VyYXRpb24uIE11c3QgYmUgb2YgdHlwZSBgc3RyaW5nYC4nKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IERPTS5xdWVyeShjb25maWcuY29udGFpbmVyKSB8fCBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb250YWluZXIgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Q29udGFpbmVyLCBjb25maWcuY29udGFpbmVyKTtcblxuICAgICAgLy8gSWYgd2UgaGF2ZSBhIHBhcmVudCwgYW5kIHRoZSBjb250YWluZXIgaXMgbWlzc2luZyBmcm9tIHRoZSBET00sXG4gICAgICAvLyB3ZSBjb25zdHJ1Y3QgdGhlIGNvbnRhaW5lciBhbmQgYXBwZW5kIGl0IHRvIHRoZSBwYXJlbnRcbiAgICAgIGlmICh0aGlzLl9jb250YWluZXIgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gRE9NLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IGNvbmZpZy5jb250YWluZXIuc3Vic3RyaW5nKDEsIGNvbmZpZy5jb250YWluZXIubGVuZ3RoKVxuICAgICAgICB9KTtcbiAgICAgICAgRE9NLmFwcGVuZCh0aGlzLl9wYXJlbnRDb250YWluZXIsIHRoaXMuX2NvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBjb250YWluZXIgRE9NIG5vZGU6ICcgKyBjb25maWcuY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIGN1c3RvbSBjbGFzcyB0byBiZSBhcHBsaWVkIHRvIHt0aGlzLl9jb250YWluZXJ9IG5vZGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2NsYXNzTmFtZSA9IGNvbmZpZy5jbGFzcyB8fCAnY29tcG9uZW50JztcblxuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIHJlbmRlciBmdW5jdGlvbiB0byBiZSB1c2VkIGluc3RlYWQgb2YgdXNpbmcgdGhlIGRlZmF1bHQgcmVuZGVyZXJcbiAgICAgKiBAdHlwZSB7UmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyID0gY29uZmlnLnJlbmRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGRlZmF1bHQge1JlbmRlcmVyfSB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgcmVuZGVyaW5nIHRoZSB0ZW1wbGF0ZVxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXJlciA9IHN5c3RlbUNvbmZpZy5yZW5kZXJlciB8fCBSZW5kZXJlcnMuSGFuZGxlYmFycztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSBzdHJpbmcgdG8gdXNlIGZvciByZW5kZXJpbmcgdGhlIGNvbXBvbmVudFxuICAgICAqIElmIHRoaXMgaXMgbGVmdCBlbXB0eSwgd2UgbG9va3VwIHRoZSB0ZW1wbGF0ZSB0aGUgYmFzZSB0ZW1wbGF0ZXMgdXNpbmcgdGhlIHRlbXBsYXRlTmFtZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGUgPSBjb25maWcudGVtcGxhdGUgPyB0aGlzLl9yZW5kZXJlci5jb21waWxlKGNvbmZpZy50ZW1wbGF0ZSkgOiBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlTmFtZSB0byB1c2UgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50LlxuICAgICAqIFRoaXMgaXMgb25seSB1c2VkIGlmIF90ZW1wbGF0ZSBpcyBlbXB0eS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IGNvbmZpZy50ZW1wbGF0ZU5hbWUgfHwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0VGVtcGxhdGVOYW1lKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCBzdGF0ZSBpbmRpY2F0aW5nIHdoZXRoZXIgb3Igbm90IHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbW91bnRlZCB0byB0aGUgRE9NXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2ssIHRoYXRzIHVzZWQgdG8gdHJhbnNmb3JtIHRoZSBpbnRlcm5hbCBkYXRhXG4gICAgICogbW9kZWxzIG9mIHRoZSBjb21wb25lbnRzLCBiZWZvcmUgaXQgZ2V0cyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQgc3RhdGUuXG4gICAgICogQnkgZGVmYXVsdCwgbm8gdHJhbnNmb3JtYXRpb24gaGFwcGVucy5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy50cmFuc2Zvcm1EYXRhID0gY29uZmlnLnRyYW5zZm9ybURhdGEgfHwgdGhpcy50cmFuc2Zvcm1EYXRhIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIGEgY29tcG9uZW50IGlzIGNyZWF0ZWQuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMub25DcmVhdGUgPSBjb25maWcub25DcmVhdGVPdmVycmlkZSB8fCB0aGlzLm9uQ3JlYXRlIHx8IGZ1bmN0aW9uICgpIHt9O1xuICAgIHRoaXMub25DcmVhdGUgPSB0aGlzLm9uQ3JlYXRlLmJpbmQodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnQgaXMgTW91bnRlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vbk1vdW50ID0gY29uZmlnLm9uTW91bnRPdmVycmlkZSB8fCB0aGlzLm9uTW91bnQgfHwgZnVuY3Rpb24gKCkge307XG4gICAgdGhpcy5vbk1vdW50ID0gdGhpcy5vbk1vdW50LmJpbmQodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnRzIHN0YXRlIGlzIHVwZGF0ZWQuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMub25VcGRhdGUgPSBjb25maWcub25VcGRhdGVPdmVycmlkZSB8fCB0aGlzLm9uVXBkYXRlIHx8IGZ1bmN0aW9uICgpIHsgfTtcbiAgICB0aGlzLm9uVXBkYXRlID0gdGhpcy5vblVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogQSB1c2VyIHByb3ZpZGVkIG9uQ3JlYXRlIGNhbGxiYWNrXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMudXNlck9uQ3JlYXRlID0gY29uZmlnLm9uQ3JlYXRlIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogQSB1c2VyIHByb3ZpZGVkIG9uTW91bnQgY2FsbGJhY2tcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy51c2VyT25Nb3VudCA9IGNvbmZpZy5vbk1vdW50IHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogQSB1c2VyIHByb3ZpZGVkIG9uVXBkYXRlIGNhbGxiYWNrXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMudXNlck9uVXBkYXRlID0gY29uZmlnLm9uVXBkYXRlIHx8IGZ1bmN0aW9uICgpIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdkZWZhdWx0JztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdDb21wb25lbnQnO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaW5pdCAob3B0cykge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnNldFN0YXRlKG9wdHMuZGF0YSB8fCBvcHRzLnN0YXRlIHx8IHt9KTtcbiAgICAgIHRoaXMub25DcmVhdGUoKTtcbiAgICAgIHRoaXMudXNlck9uQ3JlYXRlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0Vycm9yIGluaXRpYWxpemluZyBjb21wb25lbnQnLFxuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnR5cGUsXG4gICAgICAgIGUpO1xuICAgIH1cblxuICAgIHRoaXMuX3N0YXRlLm9uKCd1cGRhdGUnLCAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLm9uVXBkYXRlKCk7XG4gICAgICAgIHRoaXMudXNlck9uVXBkYXRlKCk7XG4gICAgICAgIHRoaXMudW5Nb3VudCgpO1xuICAgICAgICB0aGlzLm1vdW50KCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICAgJ0Vycm9yIHVwZGF0aW5nIGNvbXBvbmVudCcsXG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci50eXBlLFxuICAgICAgICAgIGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgRE9NLmFkZENsYXNzKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB7IF9jb25maWc6IHRoaXMuX2NvbmZpZyB9LCBkYXRhKTtcbiAgICB0aGlzLl9zdGF0ZS5zZXQobmV3U3RhdGUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0U3RhdGUgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuZ2V0KHByb3ApO1xuICB9XG5cbiAgaGFzU3RhdGUgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuaGFzKHByb3ApO1xuICB9XG5cbiAgdHJhbnNmb3JtRGF0YSAoZGF0YSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYWRkQ2hpbGQgKGRhdGEsIHR5cGUsIG9wdHMpIHtcbiAgICBsZXQgY2hpbGRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKFxuICAgICAgdHlwZSxcbiAgICAgIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgIHBhcmVudENvbnRhaW5lcjogdGhpcy5fY29udGFpbmVyLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9LCBvcHRzIHx8IHt9LCB7XG4gICAgICAgIF9wYXJlbnRPcHRzOiB0aGlzLl9jb25maWdcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGRDb21wb25lbnQpO1xuICAgIHJldHVybiBjaGlsZENvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbm1vdW50IGFuZCByZW1vdmUgdGhpcyBjb21wb25lbnQgYW5kIGl0cyBjaGlsZHJlbiBmcm9tIHRoZSBsaXN0XG4gICAqIG9mIGFjdGl2ZSBjb21wb25lbnRzXG4gICAqL1xuICByZW1vdmUgKCkge1xuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goYyA9PiBjLnJlbW92ZSgpKTtcbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIucmVtb3ZlKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgcmVuZGVyIG1ldGhvZCB0byBiZSB1c2VkIGZvciByZW5kZXJpbmcgdGhlIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZW5kZXJcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc2V0UmVuZGVyIChyZW5kZXIpIHtcbiAgICB0aGlzLl9yZW5kZXIgPSByZW5kZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSByZW5kZXJlciBmb3IgdGhlIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge1JlbmRlcmVyVHlwZX0gcmVuZGVyZXJcbiAgICovXG4gIHNldFJlbmRlcmVyIChyZW5kZXJlcikge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gUmVuZGVyZXJzW3JlbmRlcmVyXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0ZW1wbGF0ZSBmb3IgdGhlIGNvbXBvbmVudCB0byB1c2Ugd2hlbiByZW5kZXJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gICAqL1xuICBzZXRUZW1wbGF0ZSAodGVtcGxhdGUpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZSA9IHRoaXMuX3JlbmRlcmVyLmNvbXBpbGUodGVtcGxhdGUpO1xuICB9XG5cbiAgdW5Nb3VudCAoKSB7XG4gICAgaWYgKCF0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgY2hpbGQudW5Nb3VudCgpO1xuICAgIH0pO1xuXG4gICAgRE9NLmVtcHR5KHRoaXMuX2NvbnRhaW5lcik7XG4gICAgdGhpcy5fY2hpbGRyZW4uZm9yRWFjaChjID0+IGMucmVtb3ZlKCkpO1xuICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG4gICAgdGhpcy5vblVuTW91bnQoKTtcbiAgfVxuXG4gIG1vdW50ICgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYmVmb3JlTW91bnQoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIERPTS5hcHBlbmQodGhpcy5fY29udGFpbmVyLCB0aGlzLnJlbmRlcih0aGlzLl9zdGF0ZS5hc0pTT04oKSkpO1xuXG4gICAgLy8gUHJvY2VzcyB0aGUgRE9NIHRvIGRldGVybWluZSBpZiB3ZSBzaG91bGQgY3JlYXRlXG4gICAgLy8gaW4tbWVtb3J5IHN1Yi1jb21wb25lbnRzIGZvciByZW5kZXJpbmdcbiAgICBjb25zdCBkb21Db21wb25lbnRzID0gRE9NLnF1ZXJ5QWxsKHRoaXMuX2NvbnRhaW5lciwgJ1tkYXRhLWNvbXBvbmVudF06bm90KFtkYXRhLWlzLWNvbXBvbmVudC1tb3VudGVkXSknKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy50cmFuc2Zvcm1EYXRhKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5fc3RhdGUuZ2V0KCkpKSk7XG4gICAgZG9tQ29tcG9uZW50cy5mb3JFYWNoKGMgPT4gdGhpcy5fY3JlYXRlU3ViY29tcG9uZW50KGMsIGRhdGEpKTtcblxuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgY2hpbGQubW91bnQoKTtcbiAgICB9KTtcblxuICAgIC8vIEF0dGFjaCBhbmFseXRpY3MgaG9va3MgYXMgbmVjZXNzYXJ5XG4gICAgaWYgKHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIpIHtcbiAgICAgIGxldCBkb21Ib29rcyA9IERPTS5xdWVyeUFsbCh0aGlzLl9jb250YWluZXIsICdbZGF0YS1ldmVudHR5cGVdOm5vdChbZGF0YS1pcy1hbmFseXRpY3MtYXR0YWNoZWRdKScpO1xuICAgICAgZG9tSG9va3MuZm9yRWFjaCh0aGlzLl9jcmVhdGVBbmFseXRpY3NIb29rLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy5vbk1vdW50KHRoaXMpO1xuICAgIHRoaXMudXNlck9uTW91bnQodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZW5kZXIgdGhlIHRlbXBsYXRlIHVzaW5nIHRoZSB7UmVuZGVyZXJ9IHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgYW5kIHRlbXBsYXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHJlbmRlciAoZGF0YSA9IHRoaXMuX3N0YXRlLmdldCgpKSB7XG4gICAgdGhpcy5iZWZvcmVSZW5kZXIoKTtcbiAgICAvLyBUZW1wb3JhcnkgZml4IGZvciBwYXNzaW5nIGltbXV0YWJsZSBkYXRhIHRvIHRyYW5zZm9ybURhdGEoKS5cbiAgICBkYXRhID0gdGhpcy50cmFuc2Zvcm1EYXRhKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpKTtcblxuICAgIGxldCBodG1sID0gJyc7XG4gICAgLy8gVXNlIGVpdGhlciB0aGUgY3VzdG9tIHJlbmRlciBmdW5jdGlvbiBvciB0aGUgaW50ZXJuYWwgcmVuZGVyZXJcbiAgICAvLyBkZXBlbmRhbnQgb24gdGhlIGNvbXBvbmVudCBjb25maWd1cmF0aW9uXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGh0bWwgPSB0aGlzLl9yZW5kZXIoZGF0YSk7XG4gICAgICBpZiAodHlwZW9mIGh0bWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVuZGVyIG1ldGhvZCBtdXN0IHJldHVybiBIVE1MIGFzIHR5cGUge3N0cmluZ30nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVuZGVyIHRoZSBleGlzdGluZyB0ZW1wbGF0ZXMgYXMgYSBzdHJpbmdcbiAgICAgIGh0bWwgPSB0aGlzLl9yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgICB0ZW1wbGF0ZTogdGhpcy5fdGVtcGxhdGUsXG4gICAgICAgIHRlbXBsYXRlTmFtZTogdGhpcy5fdGVtcGxhdGVOYW1lXG4gICAgICB9LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvLyBXZSBjcmVhdGUgYW4gSFRNTCBEb2N1bWVudCBmcmFnbWVudCB3aXRoIHRoZSByZW5kZXJlZCBzdHJpbmdcbiAgICAvLyBTbyB0aGF0IHdlIGNhbiBxdWVyeSBpdCBmb3IgcHJvY2Vzc2luZyBvZiBzdWIgY29tcG9uZW50c1xuICAgIGxldCBlbCA9IERPTS5jcmVhdGUoaHRtbCk7XG5cbiAgICB0aGlzLmFmdGVyUmVuZGVyKCk7XG4gICAgcmV0dXJuIGVsLmlubmVySFRNTDtcbiAgfVxuXG4gIF9jcmVhdGVTdWJjb21wb25lbnQgKGRvbUNvbXBvbmVudCwgZGF0YSkge1xuICAgIGRvbUNvbXBvbmVudC5kYXRhc2V0LmlzQ29tcG9uZW50TW91bnRlZCA9IHRydWU7XG4gICAgY29uc3QgZGF0YXNldCA9IGRvbUNvbXBvbmVudC5kYXRhc2V0O1xuICAgIGNvbnN0IHR5cGUgPSBkYXRhc2V0LmNvbXBvbmVudDtcbiAgICBjb25zdCBwcm9wID0gZGF0YXNldC5wcm9wO1xuICAgIGxldCBvcHRzID0gZGF0YXNldC5vcHRzID8gSlNPTi5wYXJzZShkYXRhc2V0Lm9wdHMpIDoge307XG5cbiAgICBsZXQgY2hpbGREYXRhID0gZGF0YVtwcm9wXSB8fCB7fTtcblxuICAgIG9wdHMgPSB7XG4gICAgICAuLi5vcHRzLFxuICAgICAgY29udGFpbmVyOiBkb21Db21wb25lbnRcbiAgICB9O1xuXG4gICAgLy8gVE9ETyhiaWxseSkgUmlnaHQgbm93LCBpZiB3ZSBwcm92aWRlIGFuIGFycmF5IGFzIHRoZSBkYXRhIHByb3AsXG4gICAgLy8gdGhlIGJlaGF2aW9yIGlzIHRvIGNyZWF0ZSBtYW55IGNvbXBvbmVudHMgZm9yIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkuXG4gICAgLy8gVEhBVCBpbnRlcmZhY2UgU0hPVUxEIGNoYW5nZSB0byB1c2UgYSBkaWZmZXJlbnQgcHJvcGVydHkgdGhhdCBkZWZpbmVzXG4gICAgLy8gd2hldGhlciB0byBhcnJheSBkYXRhIHNob3VsZCBiZSB1c2VkIGZvciBhIHNpbmdsZSBjb21wb25lbnQgb3JcbiAgICAvLyB0byBjcmVhdGUgbWFueSBjb21wb25lbnRzIGZvciBlYWNoIGl0ZW0uXG4gICAgLy8gT3ZlcmxvYWRpbmcgYW5kIGhhdmluZyB0aGlzIHNpZGUgZWZmZWN0IGlzIHVuaW50dWl0aXZlIGFuZCBXUk9OR1xuICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZERhdGEpKSB7XG4gICAgICAvLyBSZW5kZXJpbmcgYSBzdWIgY29tcG9uZW50IHNob3VsZCBiZSB3aXRoaW4gdGhlIGNvbnRleHQsXG4gICAgICAvLyBvZiB0aGUgbm9kZSB0aGF0IHdlIHByb2Nlc3NlZCBpdCBmcm9tXG4gICAgICB0aGlzLmFkZENoaWxkKGNoaWxkRGF0YSwgdHlwZSwgb3B0cyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2hpbGREYXRhLnJldmVyc2UoKTtcbiAgICBjaGlsZERhdGEuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIHRoaXMuYWRkQ2hpbGQoZGF0YSwgdHlwZSwgb3B0cyk7XG4gICAgfSk7XG4gIH1cblxuICBfY3JlYXRlQW5hbHl0aWNzSG9vayAoZG9tQ29tcG9uZW50KSB7XG4gICAgZG9tQ29tcG9uZW50LmRhdGFzZXQuaXNBbmFseXRpY3NBdHRhY2hlZCA9IHRydWU7XG4gICAgY29uc3QgZGF0YXNldCA9IGRvbUNvbXBvbmVudC5kYXRhc2V0O1xuICAgIGNvbnN0IHR5cGUgPSBkYXRhc2V0LmV2ZW50dHlwZTtcbiAgICBjb25zdCBsYWJlbCA9IGRhdGFzZXQuZXZlbnRsYWJlbDtcbiAgICBjb25zdCBvcHRpb25zID0gZGF0YXNldC5ldmVudG9wdGlvbnMgPyBKU09OLnBhcnNlKGRhdGFzZXQuZXZlbnRvcHRpb25zKSA6IHt9O1xuXG4gICAgRE9NLm9uKGRvbUNvbXBvbmVudCwgJ2NsaWNrJywgZSA9PiB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBBbmFseXRpY3NFdmVudCh0eXBlLCBsYWJlbCk7XG4gICAgICBldmVudC5hZGRPcHRpb25zKHRoaXMuX2FuYWx5dGljc09wdGlvbnMpO1xuICAgICAgZXZlbnQuYWRkT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgIHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIucmVwb3J0KGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbkNyZWF0ZSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGNvbnN0cnVjdGVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvbkNyZWF0ZSAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uVXBkYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGNoYW5nZXNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uVXBkYXRlIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlUmVuZGVyIGV2ZW50IGlzIHRyaWdnZXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYmVmb3JlUmVuZGVyIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYWZ0ZXJSZW5kZXIgZXZlbnQgaXMgdHJpZ2dlcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIGFmdGVyUmVuZGVyIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25Nb3VudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFwcGVuZGVkIHRvIHRoZSBET01cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvblVuTW91bnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyByZW1vdmVkIGZyb20gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25Vbk1vdW50IChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlTW91bnQgaXMgdHJpZ2dlcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQgdG8gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYmVmb3JlTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvbkRlc3Ryb3kgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uRGVzdHJveSAoY2IpIHtcblxuICB9XG59XG4iLCIvKiogQG1vZHVsZSBOYXZpZ2F0aW9uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIFRoZSBkZWJvdW5jZSBkdXJhdGlvbiBmb3IgcmVzaXplIGV2ZW50c1xuICogQHR5cGUge251bWJlcn1cbiAqL1xuY29uc3QgUkVTSVpFX0RFQk9VTkNFID0gMTAwO1xuXG4vKipcbiAqIFRoZSBUYWIgaXMgYSBtb2RlbCB0aGF0IGlzIHVzZWQgdG8gcG93ZXIgdGhlIE5hdmlnYXRpb24gdGFicyBpbiB0aGUgdmlldy5cbiAqIEl0J3MgaW5pdGlhbGl6ZWQgdGhyb3VnaCB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50LlxuICovXG5leHBvcnQgY2xhc3MgVGFiIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSB0YWIgdGhhdCBpcyBleHBvc2VkIGZvciB0aGUgbGlua1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbCA9IGNvbmZpZy5sYWJlbDtcbiAgICBpZiAodHlwZW9mIHRoaXMubGFiZWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCdsYWJlbCBpcyBhIHJlcXVpcmVkIGNvbmZpZ3VyYXRpb24gb3B0aW9uIGZvciB0YWIuJywgJ05hdmlnYXRpb25Db21wb25lbnQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcGxldGUgVVJMLCBpbmNsdWRpbmcgdGhlIHBhcmFtc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy51cmwgPSBjb25maWcudXJsO1xuICAgIGlmICh0eXBlb2YgdGhpcy51cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCd1cmwgaXMgYSByZXF1aXJlZCBjb25maWd1cmF0aW9uIG9wdGlvbiBmb3IgdGFiLicsICdOYXZpZ2F0aW9uQ29tcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlcnZlcnNpZGUgdmVydGljYWwgY29uZmlnIGlkIHRoYXQgdGhpcyBpcyByZWZlcmVuY2VkIHRvLlxuICAgICAqIEJ5IHByb3ZpZGluZyB0aGlzLCBlbmFibGVzIGR5bmFtaWMgc29ydGluZyBiYXNlZCBvbiByZXN1bHRzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5jb25maWdJZCA9IGNvbmZpZy5jb25maWdJZCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhc2UgVVJMIHVzZWQgZm9yIGNvbnN0cnVjdGluZyB0aGUgVVJMIHdpdGggcGFyYW1zXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmJhc2VVcmwgPSBjb25maWcudXJsO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHNob3cgdGhpcyB0YWIgZmlyc3QgaW4gdGhlIG9yZGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc0ZpcnN0ID0gY29uZmlnLmlzRmlyc3QgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRvIGFwcGx5IGEgc3BlY2lhbCBjbGFzcyB0byB0aGVcbiAgICAgKiBtYXJrdXAgdG8gZGV0ZXJtaW5lIGlmIGl0J3MgYW4gYWN0aXZlIHRhYlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNBY3RpdmUgPSBjb25maWcuaXNBY3RpdmUgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogaGVscGVyIHRvIGNvbnN0cnVjdCB0aGUgZXZlbnRPcHRpb25zIGZvciBhbmFseXRpY3NcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldCBldmVudE9wdGlvbnMgKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiB0aGlzLmNvbmZpZ0lkXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogZnJvbSB3aWxsIGNvbnN0cnVjdCBhIG1hcCBvZiBjb25maWdJZCB0byB7VGFifSBmcm9tXG4gICAqIGEgY29uZmlndXJhdGlvbiBmaWxlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0YWJzQ29uZmlnIHRoZSBjb25maWd1cmF0aW9uIHRvIHVzZVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHRhYnNDb25maWcpIHtcbiAgICBsZXQgdGFicyA9IHt9O1xuICAgIC8vIFBhcnNlIHRoZSBvcHRpb25zIGFuZCBidWlsZCBvdXQgb3VyIHRhYnMgYW5kXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzQ29uZmlnLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdGFiID0gdGFic0NvbmZpZ1tpXTtcbiAgICAgIC8vIEZvciB0YWJzIHdpdGhvdXQgY29uZmlnIGlkcywgbWFwIHRoZWlyIFVSTCB0byB0aGUgY29uZmlnSURcbiAgICAgIC8vIHRvIGF2b2lkIGR1cGxpY2F0aW9uIG9mIHJlbmRlcnNcbiAgICAgIGlmICh0YWIuY29uZmlnSWQgPT09IHVuZGVmaW5lZCAmJiB0YWJzW3RhYi5jb25maWdJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YWIuY29uZmlnSWQgPSB0YWIudXJsO1xuICAgICAgfVxuXG4gICAgICB0YWJzW3RhYi5jb25maWdJZF0gPSBuZXcgVGFiKHRhYik7XG4gICAgfVxuICAgIHJldHVybiB0YWJzO1xuICB9XG59XG5cbi8qKlxuICogTmF2aWdhdGlvbkNvbXBvbmVudCBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgYnVpbGRpbmcgYSBkeW5hbWljXG4gKiBuYXZpZ2F0aW9uIHRoYXQgaXMgcG93ZXJlZCBieSB1bml2ZXJzYWwgc2VhcmNoIHVwZGF0ZXMuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gc2hvdyBvbiB0aGUgZHJvcGRvd24gbWVudSBidXR0b25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZHJvcGRvd25MYWJlbCA9IGNvbmZpZy5kcm9wZG93bkxhYmVsIHx8ICdNb3JlJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBpY29uIHRvIHNob3cgb24gdGhlIGRyb3Bkb3duIG1lbnUgYnV0dG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmRyb3Bkb3duSWNvbiA9IGNvbmZpZy5kcm9wZG93bkljb24gfHwgJ2thYm9iJztcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHJlbmRlciBhIHN0YXRpYyBuYXZpZ2F0aW9uIHdpdGggbm8gXCJtb3JlXCIgbWVudVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuc3RhdGljID0gY29uZmlnLnN0YXRpYyB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkYXRhIHN0b3JhZ2Uga2V5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuTkFWSUdBVElPTjtcblxuICAgIC8qKlxuICAgICAqIFVub3JkZXJlZCBtYXAgb2YgZWFjaCB0YWIsIGtleWVkIGJ5IFZTIGNvbmZpZ0lkXG4gICAgICogQHR5cGUge09iamVjdC48U3RyaW5nLCBPYmplY3Q+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGFicyA9IFRhYi5mcm9tKGNvbmZpZy50YWJzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcmRlciBvZiB0aGUgdGFicywgcGFyc2VkIGZyb20gY29uZmlndXJhdGlvbiBvciBVUkwuXG4gICAgICogVGhpcyBnZXRzIHVwZGF0ZWQgYmFzZWQgb24gdGhlIHNlcnZlciByZXN1bHRzXG4gICAgICogQHR5cGUge0FycmF5LjxTdHJpbmc+fSBUaGUgbGlzdCBvZiBWUyBjb25maWdJZHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RhYk9yZGVyID0gdGhpcy5nZXREZWZhdWx0VGFiT3JkZXIoY29uZmlnLnRhYnMsIHRoaXMuZ2V0VXJsUGFyYW1zKCkpO1xuXG4gICAgLyoqXG4gICAgICogQnJlYWtwb2ludHMgYXQgd2hpY2ggbmF2aWdhdGlvbiBpdGVtcyBtb3ZlIHRvIHRoZSBcIm1vcmVcIiBkcm9wZG93blxuICAgICAqIEB0eXBlIHtudW1iZXJbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX25hdkJyZWFrcG9pbnRzID0gW107XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTmF2aWdhdGlvbic7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ25hdmlnYXRpb24vbmF2aWdhdGlvbic7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgRE9NLm9uKHdpbmRvdywgJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2RlYm91bmNlVGltZXIpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGVib3VuY2VUaW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kZWJvdW5jZVRpbWVyID0gc2V0VGltZW91dCh0aGlzLnJlZml0TmF2LmJpbmQodGhpcyksIFJFU0laRV9ERUJPVU5DRSk7XG4gICAgICB9KTtcbiAgICAgIERPTS5vbih3aW5kb3csICdjbGljaycsIHRoaXMuY2hlY2tPdXRzaWRlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgdGhpcy5yZWZpdE5hdigpO1xuICAgICAgRE9NLm9uKERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb3JlJyksICdjbGljaycsIHRoaXMudG9nZ2xlTW9yZURyb3Bkb3duLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHJlZml0TmF2ICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtY29udGFpbmVyJyk7XG4gICAgY29uc3QgbW9yZUJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb3JlJyk7XG4gICAgY29uc3QgbWFpbkxpbmtzID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LWV4cGFuZGVkJyk7XG4gICAgY29uc3QgY29sbGFwc2VkTGlua3MgPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9kYWwnKTtcblxuICAgIGNvbnN0IG5hdldpZHRoID0gbW9yZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3l4dC1OYXYtaXRlbS0tbW9yZScpXG4gICAgICA/IGNvbnRhaW5lci5vZmZzZXRXaWR0aFxuICAgICAgOiBjb250YWluZXIub2Zmc2V0V2lkdGggLSBtb3JlQnV0dG9uLm9mZnNldFdpZHRoO1xuICAgIGxldCBudW1CcmVha3BvaW50cyA9IHRoaXMuX25hdkJyZWFrcG9pbnRzLmxlbmd0aDtcblxuICAgIC8vIHN1bSBjaGlsZCB3aWR0aHMgaW5zdGVhZCBvZiB1c2luZyBwYXJlbnQncyB3aWR0aCB0byBhdm9pZFxuICAgIC8vIGJyb3dzZXIgaW5jb25zaXN0ZW5jaWVzXG4gICAgbGV0IG1haW5MaW5rc1dpZHRoID0gMDtcbiAgICBmb3IgKGxldCBlbCBvZiBtYWluTGlua3MuY2hpbGRyZW4pIHtcbiAgICAgIG1haW5MaW5rc1dpZHRoICs9IGVsLm9mZnNldFdpZHRoO1xuICAgIH1cblxuICAgIGlmIChtYWluTGlua3NXaWR0aCA+IG5hdldpZHRoKSB7XG4gICAgICB0aGlzLl9uYXZCcmVha3BvaW50cy5wdXNoKG1haW5MaW5rc1dpZHRoKTtcbiAgICAgIGNvbnN0IGxhc3RMaW5rID0gbWFpbkxpbmtzLmNoaWxkcmVuLml0ZW0obWFpbkxpbmtzLmNoaWxkcmVuLmxlbmd0aCAtIDEpO1xuICAgICAgaWYgKGxhc3RMaW5rID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbGxhcHNlZExpbmtzLnByZXBlbmQobGFzdExpbmspO1xuXG4gICAgICBpZiAobW9yZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3l4dC1OYXYtaXRlbS0tbW9yZScpKSB7XG4gICAgICAgIG1vcmVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgneXh0LU5hdi1pdGVtLS1tb3JlJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChudW1CcmVha3BvaW50cyAmJiBuYXZXaWR0aCA+IHRoaXMuX25hdkJyZWFrcG9pbnRzW251bUJyZWFrcG9pbnRzIC0gMV0pIHtcbiAgICAgICAgY29uc3QgZmlyc3RMaW5rID0gY29sbGFwc2VkTGlua3MuY2hpbGRyZW4uaXRlbSgwKTtcbiAgICAgICAgaWYgKGZpcnN0TGluayA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBtYWluTGlua3MuYXBwZW5kKGZpcnN0TGluayk7XG4gICAgICAgIHRoaXMuX25hdkJyZWFrcG9pbnRzLnBvcCgpO1xuICAgICAgICBudW1CcmVha3BvaW50cy0tO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29sbGFwc2VkTGlua3MuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIG1vcmVCdXR0b24uY2xhc3NMaXN0LmFkZCgneXh0LU5hdi1pdGVtLS1tb3JlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZU1vcmVEcm9wZG93bigpO1xuICAgIGlmIChtYWluTGlua3NXaWR0aCA+IG5hdldpZHRoIHx8XG4gICAgICAobnVtQnJlYWtwb2ludHMgPiAwICYmIG5hdldpZHRoID4gdGhpcy5fbmF2QnJlYWtwb2ludHNbbnVtQnJlYWtwb2ludHMgLSAxXSkpIHtcbiAgICAgIHRoaXMucmVmaXROYXYoKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZU1vcmVEcm9wZG93biAoKSB7XG4gICAgY29uc3QgY29sbGFwc2VkID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vZGFsJyk7XG4gICAgY29sbGFwc2VkLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgIGNvbnN0IG1vcmVCdXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9yZScpO1xuICAgIG1vcmVCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICB9XG5cbiAgb3Blbk1vcmVEcm9wZG93biAoKSB7XG4gICAgY29uc3QgY29sbGFwc2VkID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vZGFsJyk7XG4gICAgY29sbGFwc2VkLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgIGNvbnN0IG1vcmVCdXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9yZScpO1xuICAgIG1vcmVCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gIH1cblxuICB0b2dnbGVNb3JlRHJvcGRvd24gKCkge1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb2RhbCcpO1xuICAgIGNvbGxhcHNlZC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICBjb25zdCBtb3JlQnV0dG9uID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vcmUnKTtcbiAgICBtb3JlQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGNvbGxhcHNlZC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKTtcbiAgfVxuXG4gIGNoZWNrT3V0c2lkZUNsaWNrIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy55eHQtTmF2LWNvbnRhaW5lcicpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZU1vcmVEcm9wZG93bigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbmNlIHRoZSBzZXJ2ZXIgZGF0YSBvbmx5IHByb3ZpZGVzIGEgbGlzdCBvZlxuICAgKiBWUyBjb25maWdJZHMsIHdlIG5lZWQgdG8gY29tcHV0ZSBhbmQgdHJhbnNmb3JtXG4gICAqIHRoZSBkYXRhIGludG8gdGhlIHByb3BlciBmb3JtYXQgZm9yIHJlbmRlcmluZy5cbiAgICpcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIGlmIChkYXRhLnRhYk9yZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3RhYk9yZGVyID0gdGhpcy5tZXJnZVRhYk9yZGVyKGRhdGEudGFiT3JkZXIsIHRoaXMuX3RhYk9yZGVyKTtcbiAgICB9XG5cbiAgICAvLyBTaW5jZSB0aGUgdGFiIG9yZGVyaW5nIGNhbiBjaGFuZ2UgYmFzZWQgb24gdGhlIHNlcnZlciBkYXRhXG4gICAgLy8gd2UgbmVlZCB0byB1cGRhdGUgZWFjaCB0YWJzIFVSTCB0byBpbmNsdWRlIHRoZSBvcmRlciBhcyBwYXJ0IG9mIHRoZWlyIHBhcmFtcy5cbiAgICAvLyBUaGlzIGhlbHBzIHdpdGggcGVyc2lzdGluZyBzdGF0ZSBhY3Jvc3MgdmVydGljYWxzLlxuICAgIGxldCB0YWJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90YWJPcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRhYiA9IHRoaXMuX3RhYnNbdGhpcy5fdGFiT3JkZXJbaV1dO1xuICAgICAgaWYgKHRhYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhYi51cmwgPSB0aGlzLmdlbmVyYXRlVGFiVXJsKHRhYi5iYXNlVXJsLCB0aGlzLmdldFVybFBhcmFtcygpKTtcbiAgICAgICAgdGFicy5wdXNoKHRhYik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKHtcbiAgICAgIHRhYnM6IHRhYnMsXG4gICAgICBkcm9wZG93bkxhYmVsOiB0aGlzLmRyb3Bkb3duTGFiZWwsXG4gICAgICBkcm9wZG93bkljb246IHRoaXMuZHJvcGRvd25JY29uLFxuICAgICAgc3RhdGljOiB0aGlzLnN0YXRpY1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VXJsUGFyYW1zICgpIHtcbiAgICByZXR1cm4gbmV3IFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0RGVmYXVsdFRhYk9yZGVyIHdpbGwgY29tcHV0ZSB0aGUgaW5pdGlhbCB0YWIgb3JkZXJpbmcgYmFzZWRcbiAgICogb24gYSBjb21iaW5hdGlvbiBvZiB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZCBkaXJlY3RseSB0byB0aGUgY29tcG9uZW50XG4gICAqIGFuZCB0aGUgdXJsIHBhcmFtcy5cbiAgICogQHBhcmFtIHtPYmplY3RbXX0gdGFic0NvbmZpZ1xuICAgKiBAcGFyYW0ge1NlYXJjaFBhcmFtc31cbiAgICovXG4gIGdldERlZmF1bHRUYWJPcmRlciAodGFic0NvbmZpZywgdXJsUGFyYW1zKSB7XG4gICAgbGV0IHRhYk9yZGVyID0gW107XG5cbiAgICAvLyBVc2UgdGhlIG9yZGVyaW5nIGZyb20gdGhlIFVSTCBhcyB0aGUgcHJpbWFyeSBjb25maWd1cmF0aW9uXG4gICAgLy8gQW5kIHRoZW4gbWVyZ2UgaXQgd2l0aCB0aGUgbG9jYWwgY29uZmlndXJhdGlvbiwgaWYgcHJvdmlkZWQuXG4gICAgaWYgKHVybFBhcmFtcyAmJiB1cmxQYXJhbXMuaGFzKCd0YWJPcmRlcicpKSB7XG4gICAgICB0YWJPcmRlciA9IHVybFBhcmFtcy5nZXQoJ3RhYk9yZGVyJykuc3BsaXQoJywnKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNDb25maWcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhYiA9IHRhYnNDb25maWdbaV07XG4gICAgICAvLyBTb21lIHRhYnMgZG9uJ3QgaGF2ZSBjb25maWdJZCwgc28gd2UgbWFwIGl0IGZyb20gVVJMXG4gICAgICBpZiAodGFiLmNvbmZpZ0lkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGFiLmNvbmZpZ0lkID0gdGFiLnVybDtcbiAgICAgIH1cblxuICAgICAgLy8gQXZvaWQgZHVwbGljYXRlcyBpZiBjb25maWcgd2FzIHByb3ZpZGVkIGZyb20gVVJMXG4gICAgICBpZiAodGFiT3JkZXIuaW5jbHVkZXModGFiLmNvbmZpZ0lkKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gaXNGaXJzdCBzaG91bGQgYWx3YXlzIGJlIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBsaXN0XG4gICAgICBpZiAodGFiLmlzRmlyc3QpIHtcbiAgICAgICAgdGFiT3JkZXIudW5zaGlmdCh0YWIuY29uZmlnSWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFiT3JkZXIucHVzaCh0YWIuY29uZmlnSWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YWJPcmRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBtZXJnZVRhYk9yZGVyIG1lcmdlcyB0d28gYXJyYXlzIGludG8gb25lXG4gICAqIGJ5IGFwcGVuZGluZyBhZGRpdGlvbmFsIHRhYnMgdG8gdGhlIGVuZCBvZiB0aGUgb3JpZ2luYWwgYXJyYXlcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdGFiT3JkZXIgVGFiIG9yZGVyIHByb3ZpZGVkIGJ5IHRoZSBzZXJ2ZXJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gb3RoZXJUYWJPcmRlciBUYWIgb3JkZXIgcHJvdmlkZWQgYnkgY29uZmlndXJhdGlvblxuICAgKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAgICovXG4gIG1lcmdlVGFiT3JkZXIgKHRhYk9yZGVyLCBvdGhlclRhYk9yZGVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdGhlclRhYk9yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YWJDb25maWcgPSBvdGhlclRhYk9yZGVyW2ldO1xuICAgICAgaWYgKHRhYk9yZGVyLmluY2x1ZGVzKHRhYkNvbmZpZykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIGlzRmlyc3Qgc2hvdWxkIGJlIGFuIG92ZXJyaWRlIHRvIGR5bmFtaWMgdGFiIG9yZGVyaW5nLlxuICAgICAgaWYgKHRoaXMuX3RhYnNbdGFiQ29uZmlnXSAmJiB0aGlzLl90YWJzW3RhYkNvbmZpZ10uaXNGaXJzdCkge1xuICAgICAgICB0YWJPcmRlci51bnNoaWZ0KHRhYkNvbmZpZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWJPcmRlci5wdXNoKHRhYkNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYk9yZGVyO1xuICB9XG5cbiAgZ2VuZXJhdGVUYWJVcmwgKGJhc2VVcmwsIHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKSkge1xuICAgIC8vIFdlIHdhbnQgdG8gcGVyc2lzdCB0aGUgcGFyYW1zIGZyb20gdGhlIGV4aXN0aW5nIFVSTCB0byB0aGUgbmV3XG4gICAgLy8gVVJMUyB3ZSBjcmVhdGUuXG4gICAgcGFyYW1zLnNldCgndGFiT3JkZXInLCB0aGlzLl90YWJPcmRlcik7XG4gICAgcmV0dXJuIGJhc2VVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyICovXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBhcGkgZmlsdGVyIGFuZCBwcm92aWRlcyBzdGF0aWMgbWV0aG9kcyBmb3IgZWFzaWx5IGNvbnN0cnVjdGluZyBGaWx0ZXJzLlxuICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLnlleHQuY29tL2RvY3MvYXBpLXJlZmVyZW5jZS8jb3BlcmF0aW9uL2xpc3RFbnRpdGllcyBmb3Igc3RydWN0dXJlIGRldGFpbHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBhIEpTT04gZm9ybWF0IGZpbHRlciByZXR1cm5lZCBmcm9tIHRoZSBzZXJ2ZXIgaW50byBhIEZpbHRlclxuICAgKiBAcGFyYW0geyp9IHJlc3BvbnNlRmlsdGVyIEEgZmlsdGVyIGluIEpTT04gZm9ybWF0IHJldHVybmVkIGZyb20gdGhlIGJhY2tlbmRcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBmcm9tUmVzcG9uc2UgKHJlc3BvbnNlRmlsdGVyKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoSlNPTi5wYXJzZShyZXNwb25zZUZpbHRlcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIG5ldyBGaWx0ZXIgcmVwcmVzZW50aW5nIHRoZSBPUiBvZiBhbGwgcHJvdmlkZWQgZmlsdGVyc1xuICAgKiBAcGFyYW0gIHsuLi5GaWx0ZXJ9IGZpbHRlcnMgVGhlIGZpbHRlcnMgdG8gT1IgdG9nZXRoZXJcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBvciAoLi4uZmlsdGVycykge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgICckb3InOiBmaWx0ZXJzXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgbmV3IEZpbHRlciByZXByZXNlbnRpbmcgdGhlIEFORCBvZiBhbGwgcHJvdmlkZWQgZmlsdGVyc1xuICAgKiBAcGFyYW0gIHsuLi5GaWx0ZXJ9IGZpbHRlcnMgVGhlIGZpbHRlcnMgdG8gQU5EIHRvZ2V0aGVyXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgYW5kICguLi5maWx0ZXJzKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgJyRhbmQnOiBmaWx0ZXJzXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT1IgZmlsdGVycyB3aXRoIHRoZSBzYW1lIGtleXMsIHRoZW4gQU5EIHRoZSByZXN1bHRpbmcgZ3JvdXBzXG4gICAqIEBwYXJhbSAgey4uLkZpbHRlcn0gZmlsdGVycyBUaGUgZmlsdGVycyB0byBncm91cFxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGdyb3VwICguLi5maWx0ZXJzKSB7XG4gICAgY29uc3QgZ3JvdXBzID0ge307XG4gICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgZmlsdGVycykge1xuICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMoZmlsdGVyKVswXTtcbiAgICAgIGlmICghZ3JvdXBzW2tleV0pIHtcbiAgICAgICAgZ3JvdXBzW2tleV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1trZXldLnB1c2goZmlsdGVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBncm91cEZpbHRlcnMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIE9iamVjdC5rZXlzKGdyb3VwcykpIHtcbiAgICAgIGdyb3VwRmlsdGVycy5wdXNoKGdyb3Vwc1tmaWVsZF0ubGVuZ3RoID4gMSA/IEZpbHRlci5vciguLi5ncm91cHNbZmllbGRdKSA6IGdyb3Vwc1tmaWVsZF1bMF0pO1xuICAgIH1cblxuICAgIHJldHVybiBncm91cEZpbHRlcnMubGVuZ3RoID4gMSA/IEZpbHRlci5hbmQoLi4uZ3JvdXBGaWx0ZXJzKSA6IGdyb3VwRmlsdGVyc1swXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJlcXVhbCB0b1wiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGVxdWFsIHRvXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZXF1YWwgKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGVxJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImxlc3MgdGhhblwiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGxlc3MgdGhhblxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGxlc3NUaGFuIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRsdCcsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJsZXNzIHRoYW4gb3IgZXF1YWwgdG9cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG9cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBsZXNzVGhhbkVxdWFsIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRsZScsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJncmVhdGVyIHRoYW5cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBncmVhdGVyIHRoYW5cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBncmVhdGVyVGhhbiAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckZ3QnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwiZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ3JlYXRlclRoYW5FcXVhbCAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckZ2UnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGluY2x1c2l2ZSByYW5nZSBmaWx0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSBtaW4gVGhlIG1pbmltdW0gdmFsdWVcbiAgICogQHBhcmFtIHsqfSBtYXggVGhlIG1heGltdW0gdmFsdWVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBpbmNsdXNpdmVSYW5nZSAoZmllbGQsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgW2ZpZWxkXToge1xuICAgICAgICAnJGdlJzogbWluLFxuICAgICAgICAnJGxlJzogbWF4XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGV4Y2x1c2l2ZSByYW5nZSBmaWx0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSBtaW4gVGhlIG1pbmltdW0gdmFsdWVcbiAgICogQHBhcmFtIHsqfSBtYXggVGhlIG1heGltdW0gdmFsdWVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBleGNsdXNpdmVSYW5nZSAoZmllbGQsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgW2ZpZWxkXToge1xuICAgICAgICAnJGd0JzogbWluLFxuICAgICAgICAnJGx0JzogbWF4XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IHBvc2l0aW9uIGZpbHRlclxuICAgKiBAcGFyYW0ge251bWJlcn0gbGF0IFRoZSBsYXRpdHVkZSBvZiB0aGUgcG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxuZyBUaGUgbG9uZ2l0dWRlIG9mIHRoZSBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIFRoZSBzZWFyY2ggcmFkaXVzIChpbiBtZXRlcnMpXG4gICAqL1xuICBzdGF0aWMgcG9zaXRpb24gKGxhdCwgbG5nLCByYWRpdXMpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcignYnVpbHRpbi5sb2NhdGlvbicsICckbmVhcicsIHsgbGF0LCBsbmcsIHJhZGl1cyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgZmlsdGVyIHdpdGggdGhlIGdpdmVuIG1hdGNoZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1hdGNoZXIgVGhlIG1hdGNoZXIgZm9yIHRoZSBmaWxlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBmb3IgdGhlIGZpbHRlclxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIF9mcm9tTWF0Y2hlciAoZmllbGQsIG1hdGNoZXIsIHZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgW2ZpZWxkXToge1xuICAgICAgICBbbWF0Y2hlcl06IHZhbHVlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaENvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uL2RvbS9zZWFyY2hwYXJhbXMnO1xuXG4vKipcbiAqIFNlYXJjaENvbXBvbmVudCBleHBvc2VzIGFuIGludGVyZmFjZSBpbiBvcmRlciB0byBjcmVhdGVcbiAqIGEgVUkgU2VhcmNoIGV4cGVyaWVuY2UgZm9yIHZlcnRpY2FsIGFuZCB1bml2ZXJzYWwgc2VhcmNoLlxuICpcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGlucHV0IGtleSBmb3IgdGhlIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCBhdXRvLWNvbXBsZXRlIGFuZCBzZWFyY2ggd2lsbCBiZSBiYXNlZCBvbiB1bml2ZXJzYWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2JhcktleSA9IGNvbmZpZy5iYXJLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCB2ZXJ0aWNhbCBrZXkgZm9yIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCBhdXRvLWNvbXBsZXRlIGFuZCBzZWFyY2ggd2lsbCBiZSBiYXNlZCBvbiB1bml2ZXJzYWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBRdWVyeSBzdWJtaXNzaW9uIGlzIGJhc2VkIG9uIGEgZm9ybSBhcyBjb250ZXh0LlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBuYXRpdmUgZm9ybSBub2RlIHdpdGhpbiBjb250YWluZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9mb3JtRWwgPSBjb25maWcuZm9ybVNlbGVjdG9yIHx8ICdmb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBlbGVtZW50IHVzZWQgZm9yIHNlYXJjaGluZyBhbmQgd2lyZXMgdXAgdGhlIGtleWJvYXJkIGludGVyYWN0aW9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gY29uZmlnLmlucHV0RWwgfHwgJy5qcy15ZXh0LXF1ZXJ5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB1c2VkLCBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgYXMgYSBkYXRhIHBvaW50XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudGl0bGUgPSBjb25maWcudGl0bGUgfHwgJ0Fuc3dlcnMgVW5pdmVyc2FsIFNlYXJjaCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdGV4dCBpcyB1c2VkIGZvciBsYWJlbGluZyB0aGUgaW5wdXQgYm94LCBhbHNvIHByb3ZpZGVkIHRvIHRlbXBsYXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWxUZXh0ID0gY29uZmlnLmxhYmVsVGV4dCB8fCAnV2hhdCBhcmUgeW91IGludGVyZXN0ZWQgaW4/JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdWJtaXQgdGV4dCBpcyB1c2VkIGZvciBsYWJlbGluZyB0aGUgc3VibWl0IGJ1dHRvbiwgYWxzbyBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnN1Ym1pdFRleHQgPSBjb25maWcuc3VibWl0VGV4dCB8fCAnU3VibWl0JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdWJtaXQgaWNvbiBpcyBhbiBpY29uIGZvciB0aGUgc3VibWl0IGJ1dHRvbiwgaWYgcHJvdmlkZWQgaXQgd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHRoZVxuICAgICAqIHN1Ym1pdCB0ZXh0IHdpbGwgYmUgdXNlZCBmb3Igc2NyZWVuIHJlYWRlcnMuXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMuc3VibWl0SWNvbiA9IGNvbmZpZy5zdWJtaXRJY29uIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgdGV4dCB0byBzaG93IGFzIHRoZSBmaXJzdCBpdGVtIGZvciBhdXRvIGNvbXBsZXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucHJvbXB0SGVhZGVyID0gY29uZmlnLnByb21wdEhlYWRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQXV0byBmb2N1c2VzIHRoZSBpbnB1dCBib3ggaWYgc2V0IHRvIHRydWUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvRm9jdXMgPSBjb25maWcuYXV0b0ZvY3VzID09PSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc2hvdyBhbiBcInhcIiB0aGF0IGFsbG93cyB0aGUgdXNlciB0byBjbGVhciB0aGUgY3VycmVudFxuICAgICAqIHF1ZXJ5XG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5jbGVhckJ1dHRvbiA9IGNvbmZpZy5jbGVhckJ1dHRvbiA9PT0gdW5kZWZpbmVkXG4gICAgICA/IHRydWVcbiAgICAgIDogY29uZmlnLmNsZWFyQnV0dG9uO1xuXG4gICAgLyoqXG4gICAgICogV2hlbiBhdXRvZm9jdXNpbmcgb24gbG9hZCwgb3B0aW9uYWxseSBvcGVuIHRoZSBhdXRvY29tcGxldGVcbiAgICAgKiAocHJlc2V0IHByb21wdHMpXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvY29tcGxldGVPbkxvYWQgPSBjb25maWcuYXV0b2NvbXBsZXRlT25Mb2FkIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogc3VibWl0VVJMIHdpbGwgZm9yY2UgdGhlIHNlYXJjaCBxdWVyeSBzdWJtaXNzaW9uIHRvIGdldFxuICAgICAqIHJlZGlyZWN0ZWQgdG8gdGhlIFVSTCBwcm92aWRlZC5cbiAgICAgKiBPcHRpb25hbCwgZGVmYXVsdHMgdG8gbnVsbC5cbiAgICAgKlxuICAgICAqIElmIG5vIHJlZGlyZWN0VXJsIHByb3ZpZGVkLCB3ZSBrZWVwIHRoZSBwYWdlIGFzIGEgc2luZ2xlIHBhZ2UgYXBwLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZWRpcmVjdFVybCA9IGNvbmZpZy5yZWRpcmVjdFVybCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogdHJ1ZSBpZiB0aGVyZSBpcyBhbm90aGVyIHNlYXJjaCBiYXIgcHJlc2VudCBvbiB0aGUgcGFnZS5cbiAgICAgKiBUd2lucyBvbmx5IHVwZGF0ZSB0aGUgcXVlcnksIGFuZCBkbyBub3Qgc2VhcmNoXG4gICAgICovXG4gICAgdGhpcy5faXNUd2luID0gY29uZmlnLmlzVHdpbjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSBzdHJpbmcgdG8gdXNlIGZvciB0aGUgaW5wdXQgYm94LCBwcm92aWRlZCB0byB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlcnkgPSBjb25maWcucXVlcnkgfHwgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpIHx8ICcnO1xuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBTdG9yYWdlS2V5cy5RVUVSWSwgcSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gcTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKTtcbiAgICAgIHRoaXMuc2VhcmNoKHEpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG1pbmltdW0gdGltZSBhbGxvd2VkIGluIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHNlYXJjaGVzIHRvIHByZXZlbnRcbiAgICAgKiBtYW55IGR1cGxpY2F0ZSBzZWFyY2hlcyBiYWNrLXRvLWJhY2tcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc2VhcmNoQ29vbGRvd24gPSBjb25maWcuc2VhcmNoQ29vbGRvd24gfHwgMzAwO1xuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlIGFuZCBcIm5lYXIgbWVcIiBpbnRlbnQgaXMgZXhwcmVzc2VkLCBwcm9tcHQgdGhlIHVzZXIgZm9yIHRoZWlyIGdlb2xvY2F0aW9uXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9wcm9tcHRGb3JMb2NhdGlvbiA9IGNvbmZpZy5wcm9tcHRGb3JMb2NhdGlvbiA9PT0gdW5kZWZpbmVkXG4gICAgICA/IHRydWVcbiAgICAgIDogQm9vbGVhbihjb25maWcucHJvbXB0Rm9yTG9jYXRpb24pO1xuXG4gICAgLyoqXG4gICAgICogQ29udHJvbHMgc2hvd2luZyBhbmQgaGlkaW5nIHRoZSBzZWFyY2ggY2xlYXIgYnV0dG9uXG4gICAgICovXG4gICAgdGhpcy5fc2hvd0NsZWFyQnV0dG9uID0gdGhpcy5jbGVhckJ1dHRvbiAmJiB0aGlzLnF1ZXJ5O1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1NlYXJjaEJhcic7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lICgpIHtcbiAgICByZXR1cm4gJ3NlYXJjaC9zZWFyY2gnO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIGlmICh0aGlzLnF1ZXJ5ICYmICF0aGlzLnJlZGlyZWN0VXJsKSB7XG4gICAgICB0aGlzLmNvcmUuc2V0UXVlcnkodGhpcy5xdWVyeSk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wcm9tcHRGb3JMb2NhdGlvbikge1xuICAgICAgdGhpcy5pbml0TG9jYXRpb25Qcm9tcHQoKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMgPT09IHRydWUgJiYgdGhpcy5xdWVyeS5sZW5ndGggPT09IDAgJiYgIXRoaXMuYXV0b2NvbXBsZXRlT25Mb2FkKSB7XG4gICAgICBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKS5mb2N1cygpO1xuICAgIH1cblxuICAgIC8vIFdpcmUgdXAgb3VyIHNlYXJjaCBoYW5kbGluZyBhbmQgYXV0byBjb21wbGV0ZVxuICAgIHRoaXMuaW5pdFNlYXJjaCh0aGlzLl9mb3JtRWwpO1xuICAgIHRoaXMuaW5pdEF1dG9Db21wbGV0ZSh0aGlzLl9pbnB1dEVsKTtcblxuICAgIGlmICh0aGlzLmNsZWFyQnV0dG9uKSB7XG4gICAgICB0aGlzLmluaXRDbGVhckJ1dHRvbigpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cyA9PT0gdHJ1ZSAmJiB0aGlzLnF1ZXJ5Lmxlbmd0aCA9PT0gMCAmJiB0aGlzLmF1dG9jb21wbGV0ZU9uTG9hZCkge1xuICAgICAgRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5faW5wdXRFbCkuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUgKCkge1xuICAgIHRoaXMuX2F1dG9jb21wbGV0ZS5yZW1vdmUoKTtcbiAgICBzdXBlci5yZW1vdmUoKTtcbiAgfVxuXG4gIGluaXRDbGVhckJ1dHRvbiAoKSB7XG4gICAgY29uc3QgYnV0dG9uID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy5qcy15eHQtU2VhcmNoQmFyLWNsZWFyJyk7XG4gICAgdGhpcy5fc2hvd0NsZWFyQnV0dG9uID0gdGhpcy5fc2hvd0NsZWFyQnV0dG9uIHx8IHRoaXMucXVlcnk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ3l4dC1TZWFyY2hCYXItLWhpZGRlbicsICF0aGlzLl9zaG93Q2xlYXJCdXR0b24pO1xuXG4gICAgRE9NLm9uKGJ1dHRvbiwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5xdWVyeSA9ICcnO1xuICAgICAgdGhpcy5fc2hvd0NsZWFyQnV0dG9uID0gZmFsc2U7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgneXh0LVNlYXJjaEJhci0taGlkZGVuJyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHt9KTtcbiAgICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFUlksIHRoaXMucXVlcnkpO1xuICAgICAgdGhpcy5jb3JlLnNldFF1ZXJ5KHRoaXMucXVlcnkpO1xuICAgIH0pO1xuXG4gICAgRE9NLm9uKHRoaXMuX2lucHV0RWwsICdpbnB1dCcsIGUgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGlmICghdGhpcy5fc2hvd0NsZWFyQnV0dG9uICYmIGlucHV0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5fc2hvd0NsZWFyQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3l4dC1TZWFyY2hCYXItLWhpZGRlbicpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9zaG93Q2xlYXJCdXR0b24gJiYgaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuX3Nob3dDbGVhckJ1dHRvbiA9IGZhbHNlO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgneXh0LVNlYXJjaEJhci0taGlkZGVuJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0TG9jYXRpb25Qcm9tcHQgKCkge1xuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBTdG9yYWdlS2V5cy5JTlRFTlRTLCBpbnRlbnQgPT4ge1xuICAgICAgaWYgKCFpbnRlbnQubmVhck1lIHx8IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLkdFT0xPQ0FUSU9OKSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ocG9zaXRpb24gPT4ge1xuICAgICAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuR0VPTE9DQVRJT04sIHtcbiAgICAgICAgICBsYXQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICBsbmc6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgICAgcmFkaXVzOiBwb3NpdGlvbi5jb29yZHMuYWNjdXJhY3lcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VhcmNoKHRoaXMucXVlcnkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHVzZSBmb3Igd2lyaW5nIHVwIHNlYXJjaGluZyBvbiBmb3JtIHN1Ym1pc3Npb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGZvcm1TZWxlY3RvciBDU1Mgc2VsZWN0b3IgdG8gYmluZCBvdXIgc3VibWl0IGhhbmRsaW5nIHRvXG4gICAqL1xuICBpbml0U2VhcmNoIChmb3JtU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9mb3JtRWwgPSBmb3JtU2VsZWN0b3I7XG5cbiAgICB0aGlzLl9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgneXh0LVNlYXJjaEJhci13cmFwcGVyJyk7XG5cbiAgICBsZXQgZm9ybSA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIGZvcm1TZWxlY3Rvcik7XG4gICAgaWYgKCFmb3JtKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBpbml0aWFsaXplIFNlYXJjaEJhcjsgQ2FuIG5vdCBmaW5kIHtIVE1MRWxlbWVudH0gYCcsIHRoaXMuX2Zvcm1FbCwgJ2AuJyk7XG4gICAgfVxuXG4gICAgRE9NLm9uKGZvcm0sICdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBsZXQgaW5wdXRFbCA9IGZvcm0ucXVlcnlTZWxlY3Rvcih0aGlzLl9pbnB1dEVsKTtcblxuICAgICAgbGV0IHF1ZXJ5ID0gaW5wdXRFbC52YWx1ZTtcbiAgICAgIGxldCBwYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICAgIHBhcmFtcy5zZXQoJ3F1ZXJ5JywgcXVlcnkpO1xuXG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgcmVkaXJlY3RVcmwsIHdlIHdhbnQgdGhlIGZvcm0gdG8gYmVcbiAgICAgIC8vIHNlcmlhbGl6ZWQgYW5kIHN1Ym1pdHRlZC5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5yZWRpcmVjdFVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLnJlZGlyZWN0VXJsICsgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaW5wdXRFbC5ibHVyKCk7XG5cbiAgICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFUlksIHF1ZXJ5KTtcbiAgICAgIHRoaXMuY29yZS5zZXRRdWVyeShxdWVyeSk7XG4gICAgICB0aGlzLnNlYXJjaChxdWVyeSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHdpcmUgdXAgb3VyIGF1dG8gY29tcGxldGUgb24gYW4gaW5wdXQgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIGF1dG8gY29tcGxldGUgY29tcG9uZW50IHRvXG4gICAqL1xuICBpbml0QXV0b0NvbXBsZXRlIChpbnB1dFNlbGVjdG9yKSB7XG4gICAgdGhpcy5faW5wdXRFbCA9IGlucHV0U2VsZWN0b3I7XG5cbiAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlKSB7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGUucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fYXV0b2NvbXBsZXRlID0gdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZSgnQXV0b0NvbXBsZXRlJywge1xuICAgICAgcGFyZW50Q29udGFpbmVyOiB0aGlzLl9jb250YWluZXIsXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmF1dG9jb21wbGV0ZWAsXG4gICAgICBjb250YWluZXI6ICcueXh0LVNlYXJjaEJhci1hdXRvY29tcGxldGUnLFxuICAgICAgYmFyS2V5OiB0aGlzLl9iYXJLZXksXG4gICAgICBhdXRvRm9jdXM6IHRoaXMuYXV0b0ZvY3VzICYmICF0aGlzLmF1dG9jb21wbGV0ZU9uTG9hZCxcbiAgICAgIHZlcnRpY2FsS2V5OiB0aGlzLl92ZXJ0aWNhbEtleSxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5wcm9tcHRIZWFkZXIsXG4gICAgICBvcmlnaW5hbFF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgaW5wdXRFbDogaW5wdXRTZWxlY3RvcixcbiAgICAgIG9uU3VibWl0OiAoKSA9PiB7XG4gICAgICAgIERPTS50cmlnZ2VyKERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2Zvcm1FbCksICdzdWJtaXQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaCAocXVlcnkpIHtcbiAgICAvLyBEb24ndCBzZWFyY2ggaWYgd2UgcmVjZW50bHkgc2VhcmNoZWQsXG4gICAgLy8gaWYgdGhlcmUncyBubyBxdWVyeSBmb3IgdW5pdmVyc2FsIHNlYXJjaCxcbiAgICAvLyBvciBpZiB0aGlzIGlzIGEgdHdpbiBzZWFyY2hiYXJcbiAgICBpZiAodGhpcy5fdGhyb3R0bGVkIHx8ICghcXVlcnkgJiYgIXRoaXMuX3ZlcnRpY2FsS2V5KSB8fCB0aGlzLl9pc1R3aW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl90aHJvdHRsZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLl90aHJvdHRsZWQgPSBmYWxzZTsgfSwgdGhpcy5fc2VhcmNoQ29vbGRvd24pO1xuXG4gICAgaWYgKHRoaXMuX3ZlcnRpY2FsS2V5KSB7XG4gICAgICBjb25zdCBhbGxGaWx0ZXJzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgICBjb25zdCB0b3RhbEZpbHRlciA9IGFsbEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgICA/IEZpbHRlci5hbmQoLi4uYWxsRmlsdGVycylcbiAgICAgICAgOiBhbGxGaWx0ZXJzWzBdO1xuICAgICAgY29uc3QgZmFjZXRGaWx0ZXIgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRkFDRVRfRklMVEVSKVswXTtcbiAgICAgIHJldHVybiB0aGlzLmNvcmUudmVydGljYWxTZWFyY2godGhpcy5fdmVydGljYWxLZXksIHtcbiAgICAgICAgaW5wdXQ6IHF1ZXJ5LFxuICAgICAgICBmaWx0ZXI6IEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSxcbiAgICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5PVEUoYmlsbHkpIFRlbXBvcmFyeSBoYWNrIGZvciBERU1PXG4gICAgICAvLyBSZW1vdmUgbWUgYWZ0ZXIgdGhlIGRlbW9cbiAgICAgIGxldCBuYXYgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXJcbiAgICAgICAgLmdldEFjdGl2ZUNvbXBvbmVudCgnTmF2aWdhdGlvbicpO1xuXG4gICAgICBpZiAobmF2KSB7XG4gICAgICAgIGxldCB0YWJzID0gbmF2LmdldFN0YXRlKCd0YWJzJyk7XG4gICAgICAgIGxldCB1cmxzID0ge307XG5cbiAgICAgICAgaWYgKHRhYnMgJiYgQXJyYXkuaXNBcnJheSh0YWJzKSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXModGFic1tpXS51cmwuc3BsaXQoJz8nKVsxXSk7XG4gICAgICAgICAgICBwYXJhbXMuc2V0KCdxdWVyeScsIHF1ZXJ5KTtcblxuICAgICAgICAgICAgbGV0IHVybCA9IHRhYnNbaV0uYmFzZVVybDtcbiAgICAgICAgICAgIGlmIChwYXJhbXMudG9TdHJpbmcoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHVybCArPSAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVybHNbdGFic1tpXS5jb25maWdJZF0gPSB1cmw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvcmUuc2VhcmNoKHF1ZXJ5LCB1cmxzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29yZS5zZWFyY2gocXVlcnkpO1xuICAgIH1cbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBsYWJlbFRleHQ6IHRoaXMubGFiZWxUZXh0LFxuICAgICAgc3VibWl0SWNvbjogdGhpcy5zdWJtaXRJY29uLFxuICAgICAgc3VibWl0VGV4dDogdGhpcy5zdWJtaXRUZXh0LFxuICAgICAgc2hvd0NsZWFyQnV0dG9uOiB0aGlzLl9zaG93Q2xlYXJCdXR0b24sXG4gICAgICBxdWVyeTogdGhpcy5xdWVyeVxuICAgIH0sIGRhdGEpKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyU2VhcmNoQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5cbi8qKlxuICogRmlsdGVyU2VhcmNoQ29tcG9uZW50IGlzIHVzZWQgZm9yIGF1dG9jb21wbGV0ZSB1c2luZyB0aGUgRmlsdGVyU2VhcmNoIGJhY2tlbmQuXG4gKiBJdCdsbCBhbGxvdyB5b3UgdG8gcGljayBwcmUtc2V0IGZpbHRlcnMgdGhhdCBhcmUgc2V0dXAgb24gdGhlIGJhY2tlbmQgd2l0aGluXG4gKiBhIHZlcnRpY2FsIHNlYXJjaCBjb250ZXh0LlxuICpcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlucHV0IGtleSBmb3IgdGhlIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9iYXJLZXkgPSBjb25maWcuYmFyS2V5IHx8IGNvbmZpZy5pbnB1dEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnRpY2FsIGtleSBmb3IgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzdG9yZSB0aGUgZmlsdGVyIHZhbHVlIGJ1dCBkbyBub3Qgc2VhcmNoIG9uIGNoYW5nZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RvcmVPbkNoYW5nZSA9IGNvbmZpZy5zdG9yZU9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogUXVlcnkgc3VibWlzc2lvbiBpcyBiYXNlZCBvbiBhIGZvcm0gYXMgY29udGV4dC5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gbmF0aXZlIGZvcm0gbm9kZSB3aXRoaW4gY29udGFpbmVyXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5fZm9ybUVsID0gY29uZmlnLmZvcm1TZWxlY3RvciB8fCAnZm9ybSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5wdXQgZWxlbWVudCB1c2VkIGZvciBzZWFyY2hpbmcgYW5kIHdpcmVzIHVwIHRoZSBrZXlib2FyZCBpbnRlcmFjdGlvblxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5faW5wdXRFbCA9IGNvbmZpZy5pbnB1dEVsIHx8ICcuanMteWV4dC1xdWVyeSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgdXNlZCwgcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlIGFzIGEgZGF0YSBwb2ludFxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnRpdGxlID0gY29uZmlnLnRpdGxlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlYXJjaCB0ZXh0IHVzZWQgZm9yIGxhYmVsaW5nIHRoZSBpbnB1dCBib3gsIGFsc28gcHJvdmlkZWQgdG8gdGVtcGxhdGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gY29uZmlnLnNlYXJjaFRleHQgfHwgJ1doYXQgYXJlIHlvdSBpbnRlcmVzdGVkIGluPyc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgdGV4dCB0byBzaG93IGFzIHRoZSBmaXJzdCBpdGVtIGZvciBhdXRvIGNvbXBsZXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucHJvbXB0SGVhZGVyID0gY29uZmlnLnByb21wdEhlYWRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQXV0byBmb2N1c2VzIHRoZSBpbnB1dCBib3ggaWYgc2V0IHRvIHRydWUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvRm9jdXMgPSBjb25maWcuYXV0b0ZvY3VzID09PSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogc3VibWl0VVJMIHdpbGwgZm9yY2UgdGhlIHNlYXJjaCBxdWVyeSBzdWJtaXNzaW9uIHRvIGdldFxuICAgICAqIHJlZGlyZWN0ZWQgdG8gdGhlIFVSTCBwcm92aWRlZC5cbiAgICAgKiBPcHRpb25hbCwgZGVmYXVsdHMgdG8gbnVsbC5cbiAgICAgKlxuICAgICAqIElmIG5vIHJlZGlyZWN0VXJsIHByb3ZpZGVkLCB3ZSBrZWVwIHRoZSBwYWdlIGFzIGEgc2luZ2xlIHBhZ2UgYXBwLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZWRpcmVjdFVybCA9IGNvbmZpZy5yZWRpcmVjdFVybCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHN0cmluZyB0byB1c2UgZm9yIHRoZSBpbnB1dCBib3gsIHByb3ZpZGVkIHRvIHRlbXBsYXRlIGZvciByZW5kZXJpbmcuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5xdWVyeSA9IGNvbmZpZy5xdWVyeSB8fCB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCkgfHwgJyc7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gLCBxID0+IHtcbiAgICAgIHRoaXMucXVlcnkgPSBxO1xuICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaWx0ZXIgc3RyaW5nIHRvIHVzZSBmb3IgdGhlIHByb3ZpZGVkIHF1ZXJ5XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5maWx0ZXIgPSBjb25maWcuZmlsdGVyIHx8IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCkgfHwgJyc7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpbHRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gSlNPTi5wYXJzZSh0aGlzLmZpbHRlcik7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIHRoaXMuc2VhcmNoUGFyYW1ldGVycyA9IHRoaXMuX2J1aWxkU2VhcmNoUGFyYW1ldGVycyhjb25maWcuc2VhcmNoUGFyYW1ldGVycyk7XG5cbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke3RoaXMubmFtZX1gLCBmID0+IHsgdGhpcy5maWx0ZXIgPSBmOyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdGaWx0ZXJTZWFyY2gnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoKSB7XG4gICAgcmV0dXJuICdzZWFyY2gvZmlsdGVyc2VhcmNoJztcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICBpZiAodGhpcy5xdWVyeSAmJiB0aGlzLmZpbHRlcikge1xuICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICAvLyBXaXJlIHVwIG91ciBzZWFyY2ggaGFuZGxpbmcgYW5kIGF1dG8gY29tcGxldGVcbiAgICB0aGlzLmluaXRBdXRvQ29tcGxldGUodGhpcy5faW5wdXRFbCk7XG5cbiAgICBpZiAodGhpcy5hdXRvRm9jdXMgPT09IHRydWUgJiYgdGhpcy5xdWVyeS5sZW5ndGggPT09IDApIHtcbiAgICAgIERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2lucHV0RWwpLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgaGVscGVyIG1ldGhvZCB0byB3aXJlIHVwIG91ciBhdXRvIGNvbXBsZXRlIG9uIGFuIGlucHV0IHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBhdXRvIGNvbXBsZXRlIGNvbXBvbmVudCB0b1xuICAgKi9cbiAgaW5pdEF1dG9Db21wbGV0ZSAoaW5wdXRTZWxlY3Rvcikge1xuICAgIHRoaXMuX2lucHV0RWwgPSBpbnB1dFNlbGVjdG9yO1xuXG4gICAgdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZSgnQXV0b0NvbXBsZXRlJywge1xuICAgICAgcGFyZW50Q29udGFpbmVyOiB0aGlzLl9jb250YWluZXIsXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmF1dG9jb21wbGV0ZWAsXG4gICAgICBpc0ZpbHRlclNlYXJjaDogdHJ1ZSxcbiAgICAgIGNvbnRhaW5lcjogJy55eHQtU2VhcmNoQmFyLWF1dG9jb21wbGV0ZScsXG4gICAgICBwcm9tcHRIZWFkZXI6IHRoaXMucHJvbXB0SGVhZGVyLFxuICAgICAgb3JpZ2luYWxRdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgIG9yaWdpbmFsRmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgIGlucHV0RWw6IGlucHV0U2VsZWN0b3IsXG4gICAgICB2ZXJ0aWNhbEtleTogdGhpcy5fdmVydGljYWxLZXksXG4gICAgICBiYXJLZXk6IHRoaXMuX2JhcktleSxcbiAgICAgIHNlYXJjaFBhcmFtZXRlcnM6IHRoaXMuc2VhcmNoUGFyYW1ldGVycyxcbiAgICAgIG9uU3VibWl0OiAocXVlcnksIGZpbHRlcikgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICAgICAgcGFyYW1zLnNldChgJHt0aGlzLm5hbWV9LnF1ZXJ5YCwgcXVlcnkpO1xuICAgICAgICBwYXJhbXMuc2V0KGAke3RoaXMubmFtZX0uZmlsdGVyYCwgZmlsdGVyKTtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgcmVkaXJlY3RVcmwsIHdlIHdhbnQgdGhlIHBhcmFtcyB0byBiZVxuICAgICAgICAvLyBzZXJpYWxpemVkIGFuZCBzdWJtaXR0ZWQuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5yZWRpcmVjdFVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMucmVkaXJlY3RVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzYXZlIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBmb3IgdGhlIG5leHQgc2VhcmNoXG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBGaWx0ZXIuZnJvbVJlc3BvbnNlKGZpbHRlcik7XG4gICAgICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWAsIHRoaXMucXVlcnkpO1xuICAgICAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCwgdGhpcy5maWx0ZXIpO1xuICAgICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgdGhpcy5maWx0ZXIpO1xuICAgICAgICB0aGlzLnNlYXJjaCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gdGhlIHZlcnRpY2FsIHNlYXJjaCB3aXRoIGFsbCBzYXZlZCBmaWx0ZXJzIGFuZCBxdWVyeSxcbiAgICogb3B0aW9uYWxseSByZWRpcmVjdGluZyBiYXNlZCBvbiBjb25maWdcbiAgICovXG4gIHNlYXJjaCAoKSB7XG4gICAgaWYgKHRoaXMuX3N0b3JlT25DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgbGV0IHRvdGFsRmlsdGVyID0gZmlsdGVyc1swXTtcbiAgICBpZiAoZmlsdGVycy5sZW5ndGggPiAxKSB7XG4gICAgICB0b3RhbEZpbHRlciA9IEZpbHRlci5hbmQoLi4uZmlsdGVycyk7XG4gICAgfVxuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpIHx8ICcnO1xuICAgIGNvbnN0IGZhY2V0RmlsdGVyID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZBQ0VUX0ZJTFRFUilbMF07XG5cbiAgICB0aGlzLmNvcmUudmVydGljYWxTZWFyY2godGhpcy5fdmVydGljYWxLZXksIHtcbiAgICAgIGlucHV0OiBzZWFyY2hRdWVyeSxcbiAgICAgIGZpbHRlcjogSlNPTi5zdHJpbmdpZnkodG90YWxGaWx0ZXIpLFxuICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKVxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIHNlYXJjaFRleHQ6IHRoaXMuc2VhcmNoVGV4dCxcbiAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlclxuICAgIH0sIGRhdGEpKTtcbiAgfVxuXG4gIF9idWlsZFNlYXJjaFBhcmFtZXRlcnMgKHNlYXJjaFBhcmFtZXRlckNvbmZpZ3MpIHtcbiAgICBsZXQgc2VhcmNoUGFyYW1ldGVycyA9IHtcbiAgICAgIHNlY3Rpb25lZDogZmFsc2UsXG4gICAgICBmaWVsZHM6IFtdXG4gICAgfTtcbiAgICBpZiAoc2VhcmNoUGFyYW1ldGVyQ29uZmlncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gc2VhcmNoUGFyYW1ldGVycztcbiAgICB9XG4gICAgaWYgKHNlYXJjaFBhcmFtZXRlckNvbmZpZ3Muc2VjdGlvbmVkKSB7XG4gICAgICBzZWFyY2hQYXJhbWV0ZXJzLnNlY3Rpb25lZCA9IHNlYXJjaFBhcmFtZXRlckNvbmZpZ3Muc2VjdGlvbmVkO1xuICAgIH1cbiAgICBzZWFyY2hQYXJhbWV0ZXJzLmZpZWxkcyA9IHRoaXMuX2J1aWxkRmllbGRzKHNlYXJjaFBhcmFtZXRlckNvbmZpZ3MuZmllbGRzKTtcbiAgICByZXR1cm4gc2VhcmNoUGFyYW1ldGVycztcbiAgfVxuXG4gIF9idWlsZEZpZWxkcyAoZmllbGRDb25maWdzKSB7XG4gICAgaWYgKGZpZWxkQ29uZmlncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpZWxkQ29uZmlncy5tYXAoZmMgPT4gKHsgZmV0Y2hFbnRpdGllczogZmFsc2UsIC4uLmZjIH0pKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuY29uc3QgS2V5cyA9IHtcbiAgQkFDS1NQQUNFOiA4LFxuICBUQUI6IDksXG4gIEVOVEVSOiAxMyxcbiAgU0hJRlQ6IDE2LFxuICBDVFJMOiAxNyxcbiAgQUxUOiAxOCxcbiAgRVNDQVBFOiAyNyxcblxuICBMRUZUOiAzNyxcbiAgUklHSFQ6IDM5LFxuICBVUDogMzgsXG5cbiAgREVMRVRFOiA0NixcbiAgRE9XTjogNDAsXG4gIExFRlRfT1NfS0VZOiA5MSxcbiAgUklHSFRfT1NfS0VZOiA5MixcbiAgU0VMRUNUX0tFWTogOTNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Db21wbGV0ZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30sIHN5c3RlbU9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMsIHN5c3RlbU9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBhdXRvY29tcGxldGUgaXMgc2ltcGxlIG9yIGZpbHRlclxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNGaWx0ZXJTZWFyY2ggPSBvcHRzLmlzRmlsdGVyU2VhcmNoIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGBiYXJLZXlgIGluIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggdG8gdXNlIGZvciBhdXRvLWNvbXBsZXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9iYXJLZXkgPSBvcHRzLmJhcktleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGB2ZXJ0aWNhbEtleWAgb2YgdGhlIHZlcnRpY2FsIHNlYXJjaCB0byB1c2UgZm9yIGF1dG8tY29tcGxldGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gb3B0cy52ZXJ0aWNhbEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGlucHV0IGVsIHNlbGVjdG9yIGZvciBhdXRvIGNvbXBsZXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gb3B0cy5pbnB1dEVsIHx8ICcuanMteWV4dC1xdWVyeSc7XG5cbiAgICAvKipcbiAgICAgKiBBIHNlbGVjdG9yIGZvciB0aGUgYXV0b2NvbXBsZXRlIGVsZW1lbnRlc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYXV0b2NvbXBsZXRlRWxzID0gb3B0cy5hdXRvQ29tcGxldGVFbHMgfHwgJy5qcy15ZXh0LWF1dG9jb21sZXRlLW9wdGlvbic7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgZm9yIHRoZSBkYXRhLXN0b3JhZ2UgdG8gbGlzdGVuIGZvciB1cGRhdGVzIGZyb20gdGhlIHNlcnZlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IGAke1N0b3JhZ2VLZXlzLkFVVE9DT01QTEVURX0uJHt0aGlzLm5hbWV9YDtcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgaW5wdXQgdmFsdWUgd2hlbiB0eXBpbmcuXG4gICAgICogV2UgdXNlIHRoaXMgZm9yIHJlc2V0dGluZyB0aGUgc3RhdGUgb2YgdGhlIGlucHV0IHZhbHVlIHdoZW4gb3RoZXIgaW50ZXJhY3Rpb25zIChlLmcuIHJlc3VsdCBuYXZpZ2F0aW9uKVxuICAgICAqIGNoYW5nZSBiYXNlZCBvbiBpbnRlcmFjdGlvbnMuIEZvciBpbnN0YW5jZSwgaGl0dGluZyBlc2NhcGUgc2hvdWxkIHJlc2V0IHRoZSB2YWx1ZSB0byB0aGUgb3JpZ2luYWwgdHlwZWQgcXVlcnkuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gb3B0cy5vcmlnaW5hbFF1ZXJ5IHx8ICcnO1xuXG4gICAgLyoqXG4gICAgICogVXNlZCBmb3Iga2V5Ym9hcmQgbmF2aWdhdGlvbiB0aHJvdWdoIHJlc3VsdHMuXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IHNlY3Rpb24gd2UncmUgbmF2aWdhdGluZyBpbi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3NlY3Rpb25JbmRleCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uIHRocm91Z2ggcmVzdWx0cy5cbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgcmVzdWx0IGluZGV4IHdlJ3JlIG5hdmlnYXRpbmcgb24uXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZXN1bHRJbmRleCA9IC0xO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHRleHQgdG8gc2hvdyBhcyB0aGUgZmlyc3QgaXRlbSBmb3IgYXV0byBjb21wbGV0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnByb21wdEhlYWRlciA9IG9wdHMucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBpbnB1dCBpcyBhdXRvY29tYXRpY2FsbHkgZm9jdXNlZCBvciBub3RcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9hdXRvRm9jdXMgPSBvcHRzLmF1dG9Gb2N1cyB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGludm9rZWQgd2hlbiB0aGUgYEVudGVyYCBrZXkgaXMgcHJlc3NlZCBvbiBhdXRvIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIHRoaXMuX29uU3VibWl0ID0gb3B0cy5vblN1Ym1pdCB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIHRoaXMuX3NlYXJjaFBhcmFtZXRlcnMgPSBvcHRzLnNlYXJjaFBhcmFtZXRlcnMgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYWxpYXNlZCB1c2VkIGJ5IHRoZSBjb21wb25lbnQgbWFuYWdlciBmb3IgY3JlYXRpb24uXG4gICAqL1xuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnQXV0b0NvbXBsZXRlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAnc2VhcmNoL2F1dG9jb21wbGV0ZSc7XG4gIH1cblxuICAvKipcbiAgICogc2V0U3RhdGUgaXMgb3ZlcnJpZGRlbiBzbyB0aGF0IHdlIGNhbiBwcm92aWRlIGFkZGl0aW9uYWwgbWV0YSBkYXRhXG4gICAqIHRvIHRoZSB0ZW1wbGF0ZSAoZS5nLiB0aGUgc2VjdGlvbkluZGV4IGFuZCByZXN1bHRJbmRleCksIHNpbmNlXG4gICAqIHRob3NlIGFyZSBjbGllbnQtaW50ZXJhY3Rpb24gc3BlY2lmaWMgdmFsdWVzIGFuZCBhcmVuJ3QgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyLlxuICAgKi9cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBpZiAoIXRoaXMuaXNRdWVyeUlucHV0Rm9jdXNlZCgpKSB7XG4gICAgICB0aGlzLl9zZWN0aW9uSW5kZXggPSAwO1xuICAgICAgdGhpcy5fcmVzdWx0SW5kZXggPSAtMTtcbiAgICAgIGRhdGEgPSB7fTtcbiAgICB9XG4gICAgc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgaGFzUmVzdWx0czogdGhpcy5oYXNSZXN1bHRzKGRhdGEpLFxuICAgICAgc2VjdGlvbkluZGV4OiB0aGlzLl9zZWN0aW9uSW5kZXgsXG4gICAgICByZXN1bHRJbmRleDogdGhpcy5fcmVzdWx0SW5kZXgsXG4gICAgICBwcm9tcHRIZWFkZXI6IHRoaXMuX29yaWdpbmFsUXVlcnkubGVuZ3RoID09PSAwID8gdGhpcy5wcm9tcHRIZWFkZXIgOiBudWxsXG4gICAgfSkpO1xuICB9XG5cbiAgaXNRdWVyeUlucHV0Rm9jdXNlZCAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuY2xhc3NOYW1lLmluY2x1ZGVzKHRoaXMuX2lucHV0RWwuc3Vic3RyaW5nKDEpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB1cGRhdGVTdGF0ZSBpcyBhIGhlbHBlciB0byBhcHBseSB0aGUgY3VycmVudCBzdGF0ZSB3aXRoIG5ldyBjbGllbnQtc3RhdGUuXG4gICAqL1xuICB1cGRhdGVTdGF0ZSAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9zdGF0ZS5nZXQoKSk7XG4gIH1cblxuICAvKipcbiAgICogb25DcmVhdGUgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBjb25zdHJ1Y3RlZCBmcm9tIHRoZSBmcmFtZXdvcmsuXG4gICAqIE9uY2Ugd2UncmUgaW5pdGFsaXplZCwgd2Ugd2lyZSB1cCBhbGwgb2Ygb3VyIHVzZXIgaW50ZXJhY3Rpb25zXG4gICAqL1xuICBvbkNyZWF0ZSAoKSB7XG4gICAgLy8gVXNlIHRoZSBjb250ZXh0IG9mIHRoZSBwYXJlbnQgY29tcG9uZW50IHRvIGZpbmQgdGhlIGlucHV0IG5vZGUuXG4gICAgbGV0IHF1ZXJ5SW5wdXQgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Q29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKTtcbiAgICBpZiAoIXF1ZXJ5SW5wdXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGluaXRpYWxpemUgQXV0b0NvbXBsZXRlLiBDYW4gbm90IGZpbmQge0hUTUxFbGVtZW50fSBgJywgdGhpcy5faW5wdXRFbCwgJ2AuJyk7XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSB0aGUgbmF0aXZlIGF1dG9jb21wbGV0ZSwgYXV0b2NvcnJlY3QgJiBzcGVsbGNoZWNrXG4gICAgRE9NLmF0dHJpYnV0ZXMocXVlcnlJbnB1dCwge1xuICAgICAgYXV0b2NvbXBsZXRlOiAnb2ZmJyxcbiAgICAgIGF1dG9jb3JyZWN0OiAnb2ZmJyxcbiAgICAgIHNwZWxsY2hlY2s6ICdmYWxzZSdcbiAgICB9KTtcblxuICAgIC8vIFRoZSB1c2VyIGV4aXRzIHRoZSBpbnB1dCwgc28gd2Ugd2FudCB0byByZXNldCB0aGUgc3RhdGUgYW5kIGNsb3NlXG4gICAgLy8gdGhlIGF1dG8gY29tcGxldGVcbiAgICAvLyBUT0RPKGpkZWxlcm1lKTogQ2xvc2UgbG9naWMgdG8gYmUgbW92ZWQgdG8gcGFyZW50XG4gICAgRE9NLm9uKGRvY3VtZW50LCAnY2xpY2snLCBlID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuanMteXh0LUF1dG9Db21wbGV0ZS13cmFwcGVyIConKSB8fCBlLnRhcmdldC5tYXRjaGVzKHRoaXMuX2lucHV0RWwpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIC8vIFdoZW4gYSB1c2VyIGZvY3VzZXMgdGhlIGlucHV0LCB3ZSBzaG91bGQgcG9wdWxhdGUgdGhlIGF1dG9jb21wbGV0ZSBiYXNlZFxuICAgIC8vIG9uIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdmb2N1cycsICgpID0+IHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuYXV0b0NvbXBsZXRlKHF1ZXJ5SW5wdXQudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gbmF2aWdhdGUgYmV0d2VlbiB0aGUgcmVzdWx0cyB1c2luZyB0aGUga2V5Ym9hcmRcbiAgICBET00ub24ocXVlcnlJbnB1dCwgJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVOYXZpZ2F0ZVJlc3VsdHMoZS5rZXlDb2RlLCBlKTtcbiAgICAgIHRoaXMuaGFuZGxlU3VibWl0UmVzdWx0KGUua2V5Q29kZSwgcXVlcnlJbnB1dC52YWx1ZSwgZSk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5fYXV0b0ZvY3VzKSB7XG4gICAgICBET00ub25jZShxdWVyeUlucHV0LCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlKHF1ZXJ5SW5wdXQudmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gc2VsZWN0IGEgcmVzdWx0IHdpdGggdGhlIG1vdXNlXG4gICAgRE9NLmRlbGVnYXRlKHRoaXMuX2NvbnRhaW5lciwgJy5qcy15ZXh0LWF1dG9jb21wbGV0ZS1vcHRpb24nLCAnY2xpY2snLCAoZXZ0LCB0YXJnZXQpID0+IHtcbiAgICAgIGxldCBkYXRhID0gdGFyZ2V0LmRhdGFzZXQ7XG4gICAgICBsZXQgdmFsID0gZGF0YS5zaG9ydDtcblxuICAgICAgdGhpcy51cGRhdGVRdWVyeSh2YWwpO1xuICAgICAgdGhpcy5fb25TdWJtaXQodmFsLCBkYXRhLmZpbHRlcik7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIHRoZSB1c2VyIGlzIHR5cGluZyBpbiB0aGUgaW5wdXQsIHByb2Nlc3MgdGhlIGF1dG8gY29tcGxldGUuXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdrZXl1cCcsIChlKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZVR5cGluZyhlLmtleUNvZGUsIHF1ZXJ5SW5wdXQudmFsdWUsIGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGNsb3NlIHdpbGwgaGlkZSB0aGUgYXV0byBjb21wbGV0ZSByZXN1bHRzIGFuZCByZXNldCB0aGUgc3RhdGUuXG4gICAqL1xuICBjbG9zZSAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7fSk7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlc2V0cyB0aGUgY2xpZW50IHN0YXRlIHRvIHRoZWlyIG9yaWdpbmFsIHZhbHVlcyBhbmQgdHJpZ2dlcnNcbiAgICogYSB0ZW1wbGF0ZS1yZXJlbmRlciB2aWEgdXBkYXRlU3RhdGVcbiAgICovXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLl9zZWN0aW9uSW5kZXggPSAwO1xuICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gLTE7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gdXBkYXRlIHRoZSBpbnB1dCB0ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRWYWx1ZSBPcHRpb24gdmFsdWUgcHJvdmlkZWQuXG4gICAqIElmIG5vIHZhbHVlIHByb3ZpZGVkLCB3ZSdsbCB0cnkgdG8gZmluZCBpdCBiYXNlZCBvbiB0aGUgc2VsZWN0aW9uIGluZGV4ZXMuXG4gICAqL1xuICB1cGRhdGVRdWVyeSAob3B0VmFsdWUpIHtcbiAgICAvLyBPbmx5IHdhbnQgdG8gdXBkYXRlIHRoZSBxdWVyeSBzdHJpbmcgaWYgdGhlcmVzIGEgdmFsdWUuXG4gICAgLy8gSWYgb25lIGlzIHByb3ZpZGVkLCBncmVhdC5cbiAgICAvLyBPdGhlcndpc2UsIGxldHMgdHJ5IHRvIGZpbmQgaXQgZnJvbSB0aGUgY3VycmVudCBzZWxlY3Rpb24gaW4gdGhlIHJlc3VsdHMuXG4gICAgaWYgKG9wdFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCBzZWN0aW9ucyA9IHRoaXMuX3N0YXRlLmdldCgnc2VjdGlvbnMnKTtcblxuICAgICAgbGV0IHJlc3VsdHMgPSBzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHM7XG4gICAgICBvcHRWYWx1ZSA9IHJlc3VsdHNbdGhpcy5fcmVzdWx0SW5kZXhdLnNob3J0VmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IHF1ZXJ5RWwgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Q29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKTtcbiAgICBxdWVyeUVsLnZhbHVlID0gb3B0VmFsdWU7XG4gIH1cblxuICBoYW5kbGVUeXBpbmcgKGtleSwgdmFsdWUsIGUpIHtcbiAgICBsZXQgaWdub3JlZEtleXMgPSBbXG4gICAgICBLZXlzLkRPV04sXG4gICAgICBLZXlzLlVQLFxuICAgICAgS2V5cy5DVFJMLFxuICAgICAgS2V5cy5BTFQsXG4gICAgICBLZXlzLlNISUZULFxuICAgICAgS2V5cy5MRUZULFxuICAgICAgS2V5cy5SSUdIVCxcbiAgICAgIEtleXMuTEVGVF9PU19LRVksXG4gICAgICBLZXlzLlJJR0hUX09TX0tFWSxcbiAgICAgIEtleXMuRU5URVIsXG4gICAgICBLZXlzLlRBQixcbiAgICAgIEtleXMuU0VMRUNUX0tFWVxuICAgIF07XG5cbiAgICBpZiAoaWdub3JlZEtleXMuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBVc2VyIGVzY2FwZXMgb3V0IG9mIGF1dG8gY29tcGxldGUsIHNvIHdlIHJlc2V0IGl0IHRvIHRoZSBvcmlnaW5hbCBpbnB1dFxuICAgIGlmIChrZXkgPT09IEtleXMuRVNDQVBFKSB7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHRoaXMuX29yaWdpbmFsUXVlcnkpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgb3JpZ2luYWwgdmFsdWUgYmFzZWQgb24gdGhlIHVzZXIgaW5wdXRcbiAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gdmFsdWU7XG5cbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgdGhpcy5hdXRvQ29tcGxldGUodmFsdWUpO1xuICB9XG5cbiAgYXV0b0NvbXBsZXRlIChpbnB1dCkge1xuICAgIGlmICh0aGlzLmlzRmlsdGVyU2VhcmNoKSB7XG4gICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlRmlsdGVyKGlucHV0LCB7XG4gICAgICAgIG5hbWVzcGFjZTogdGhpcy5uYW1lLFxuICAgICAgICB2ZXJ0aWNhbEtleTogdGhpcy5fdmVydGljYWxLZXksXG4gICAgICAgIGJhcktleTogdGhpcy5fYmFyS2V5LFxuICAgICAgICBzZWFyY2hQYXJhbWV0ZXJzOiB0aGlzLl9zZWFyY2hQYXJhbWV0ZXJzXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3ZlcnRpY2FsS2V5IHx8IHRoaXMuX2JhcktleSkge1xuICAgICAgdGhpcy5jb3JlLmF1dG9Db21wbGV0ZVZlcnRpY2FsKGlucHV0LCB0aGlzLm5hbWUsIHRoaXMuX3ZlcnRpY2FsS2V5LCB0aGlzLl9iYXJLZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlVW5pdmVyc2FsKGlucHV0LCB0aGlzLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRydWUgaWYgd2UgaGF2ZSByZXN1bHRzIGluIGFueSBzZWN0aW9uXG4gICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICovXG4gIGhhc1Jlc3VsdHMgKGRhdGEpIHtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHNlY3Rpb25zID0gZGF0YVsnc2VjdGlvbnMnXTtcbiAgICBpZiAoIXNlY3Rpb25zKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZGF0YSA9IHNlY3Rpb25zW2ldO1xuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzdWx0cyA9IGRhdGEucmVzdWx0cztcbiAgICAgIGlmICghcmVzdWx0cykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBoYW5kbGVOYXZpZ2F0ZVJlc3VsdHMgKGtleSwgZSkge1xuICAgIGxldCBzZWN0aW9ucyA9IHRoaXMuX3N0YXRlLmdldCgnc2VjdGlvbnMnKTtcbiAgICBpZiAoc2VjdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBzZWN0aW9ucy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRhYmJpbmcgb3V0IG9yIGVudGVyIHNob3VsZCBjbG9zZSB0aGUgYXV0byBjb21wbGV0ZS5cbiAgICBpZiAoa2V5ID09PSBLZXlzLlRBQikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCByZXN1bHRzID0gc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzO1xuICAgIGlmIChrZXkgPT09IEtleXMuVVApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLl9yZXN1bHRJbmRleCA8PSAwKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPiAwKSB7XG4gICAgICAgICAgdGhpcy5fc2VjdGlvbkluZGV4LS07XG4gICAgICAgICAgdGhpcy5fcmVzdWx0SW5kZXggPSBzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHMubGVuZ3RoIC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHRoaXMuX29yaWdpbmFsUXVlcnkpO1xuICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVzdWx0SW5kZXgtLTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSBLZXlzLkRPV04pIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLl9yZXN1bHRJbmRleCA+PSByZXN1bHRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlY3Rpb25JbmRleCA8IHNlY3Rpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLl9zZWN0aW9uSW5kZXgrKztcbiAgICAgICAgICB0aGlzLl9yZXN1bHRJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVzdWx0SW5kZXgrKztcbiAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTdWJtaXRSZXN1bHQgKGtleSwgdmFsdWUsIGUpIHtcbiAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG4gICAgaWYgKHNlY3Rpb25zID09PSB1bmRlZmluZWQgfHwgc2VjdGlvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIGlmICh0aGlzLmlzRmlsdGVyU2VhcmNoKSB7XG4gICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBzdWJtaXQgdGhlIHNlYXJjaCBvbiBlbnRlclxuICAgIGlmIChrZXkgPT09IEtleXMuRU5URVIpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJTZWFyY2ggJiYgdGhpcy5fcmVzdWx0SW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGZpbHRlciA9ICcnO1xuICAgICAgaWYgKHRoaXMuX3NlY3Rpb25JbmRleCA+PSAwICYmIHRoaXMuX3Jlc3VsdEluZGV4ID49IDApIHtcbiAgICAgICAgZmlsdGVyID0gSlNPTi5zdHJpbmdpZnkoc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzW3RoaXMuX3Jlc3VsdEluZGV4XS5maWx0ZXIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHZhbHVlKTtcbiAgICAgIHRoaXMuX29yaWdpbmFsUXVlcnkgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX29uU3VibWl0KHZhbHVlLCBmaWx0ZXIpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU3BlbGxDaGVja0NvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uL2RvbS9zZWFyY2hwYXJhbXMnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbi8qKlxuICogU3BlbGxDaGVja0NvbXBvbmVudCB3aWxsIHN1cHBvcnQgZGlzcGxheWluZyBzdWdnZXN0aW9uLCBhdXRvY29ycmVjdCBhbmQgY29tYmluZWQobWF5YmUgaW4gdGhlIGZ1dHVyZSlcbiAqIHByb3ZpZGVkIGZyb20gc3BlbGxpbmcgY29ycmVjdGlvbi5cbiAqXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BlbGxDaGVja0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuU1BFTExfQ0hFQ0s7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnU3BlbGxDaGVjayc7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoKSB7XG4gICAgcmV0dXJuICdzZWFyY2gvc3BlbGxjaGVjayc7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLmRlbGV0ZSgnc2tpcFNwZWxsQ2hlY2snKTtcbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2UuZGVsZXRlKCdxdWVyeVRyaWdnZXInKTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhLCB2YWwpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgc2hvdWxkU2hvdzogZGF0YS5jb3JyZWN0ZWRRdWVyeSAhPT0gdW5kZWZpbmVkLFxuICAgICAgY29ycmVjdGVkUXVlcnlVcmw6IHRoaXMuX2J1aWxkUmVkaXJlY3RRdWVyeVVybChkYXRhLmNvcnJlY3RlZFF1ZXJ5LCBkYXRhLnR5cGUpLFxuICAgICAgaGVscFRleHQ6IHRoaXMuX2dldEhlbHBUZXh0KGRhdGEudHlwZSlcbiAgICB9LCB2YWwpKTtcbiAgfVxuXG4gIF9idWlsZFJlZGlyZWN0UXVlcnlVcmwgKHF1ZXJ5LCB0eXBlKSB7XG4gICAgaWYgKHF1ZXJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuICAgIHBhcmFtcy5zZXQoJ3F1ZXJ5JywgcXVlcnkudmFsdWUpO1xuICAgIHBhcmFtcy5zZXQoJ3NraXBTcGVsbENoZWNrJywgdHJ1ZSk7XG4gICAgcGFyYW1zLnNldCgncXVlcnlUcmlnZ2VyJywgdHlwZS50b0xvd2VyQ2FzZSgpKTtcbiAgICByZXR1cm4gJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH1cblxuICBfZ2V0SGVscFRleHQgKHR5cGUpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ1NVR0dFU1QnOlxuICAgICAgICByZXR1cm4gJ0RpZCB5b3UgbWVhbjonO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmFjZXQgKi9cblxuLyoqXG4gKiBNb2RlbCByZXByZXNlbnRpbmcgYSBmYWNldCBmaWx0ZXIgd2l0aCB0aGUgZm9ybWF0IG9mXG4gKiB7XG4gKiAgIFwiZmllbGRfbmFtZVwiOiBbIEZpbHRlcnMuLi4gXSxcbiAqICAgLi4uXG4gKiB9XG4gKlxuICogQHNlZSB7QGxpbmsgRmlsdGVyfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgZmFjZXQgZmlsdGVyIGZyb20gYSBsaXN0IG9mIEZpbHRlcnNcbiAgICogQHBhcmFtICB7Li4uRmlsdGVyfSBmaWx0ZXJzIFRoZSBmaWx0ZXJzIHRvIHVzZSBpbiB0aGlzIGZhY2V0XG4gICAqIEByZXR1cm5zIHtGYWNldH1cbiAgICovXG4gIHN0YXRpYyBmcm9tRmlsdGVycyAoLi4uZmlsdGVycykge1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGNvbnN0IGZsYXRGaWx0ZXJzID0gZmlsdGVycy5mbGF0TWFwKGYgPT4gZi4kb3IgfHwgZik7XG4gICAgZmxhdEZpbHRlcnMuZm9yRWFjaChmID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKGYpWzBdO1xuICAgICAgaWYgKCFncm91cHNba2V5XSkge1xuICAgICAgICBncm91cHNba2V5XSA9IFtdO1xuICAgICAgfVxuICAgICAgZ3JvdXBzW2tleV0ucHVzaChmKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgRmFjZXQoZ3JvdXBzKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyQm94Q29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgRmFjZXQgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmFjZXQnO1xuXG4vKipcbiAqIFJlbmRlcnMgYSBzZXQgb2YgZmlsdGVycywgYW5kIHNlYXJjaGVzIHdpdGggdGhlbSB3aGVuIGFwcGxpZWQuXG4gKiBNdWx0aXBsZSBGaWx0ZXJCb3ggY29tcG9uZW50cyB3aWxsIEFORCB0b2dldGhlciBidXQgd2lsbCBub3Qgc2hhcmUgc3RhdGUuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyQm94Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZywgc3lzdGVtQ29uZmlnKTtcblxuICAgIGlmICghY29uZmlnLmZpbHRlcnMgfHwgIShjb25maWcuZmlsdGVycyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlckJveCByZXF1aXJlcyBmaWx0ZXJzIHRvIGJlIHByb3ZpZGVkIGFzIGFuIGFycmF5JyxcbiAgICAgICAgJ0ZpbHRlckJveCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGZpbHRlcnMgdG8gZGlzcGxheSBhbmQgY29udHJvbFxuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlckNvbmZpZ3MgPSBjb25maWcuZmlsdGVycztcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBzZWFyY2hcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRyaWdnZXIgYSBzZWFyY2ggb24gZWFjaCBjaGFuZ2UgdG8gYSBmaWx0ZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaE9uQ2hhbmdlID0gY29uZmlnLnNlYXJjaE9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdG9yIG9mIHRoZSBhcHBseSBidXR0b25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBwbHlCdXR0b25TZWxlY3RvciA9IGNvbmZpZy5hcHBseUJ1dHRvblNlbGVjdG9yIHx8ICcuanMteWV4dC1maWx0ZXJib3gtYXBwbHknO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudHMgY3JlYXRlZCBmb3IgZWFjaCBmaWx0ZXIgY29uZmlnXG4gICAgICogQHR5cGUge0NvbXBvbmVudFtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGZpbHRlciBjb21wb25lbnRzIGluIHRoZSBib3hcbiAgICAgKiBAdHlwZSB7RmlsdGVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVycyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdGhpcyBmaWx0ZXJib3ggY29udGFpbnMgZHluYW1pYyBmaWx0ZXJzLiBUaGlzIGFmZmVjdHMgdGhlXG4gICAgICogdGhlIHdheSB0aGUgZmlsdGVycyBhcmUgdXNlZCBpbiB0aGUgc2VhcmNoXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9pc0R5bmFtaWMgPSBjb25maWcuaXNEeW5hbWljIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSBgZmlsdGVycy9maWx0ZXJib3hgO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0ZpbHRlckJveCc7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgZmlsdGVyQ29uZmlnczogdGhpcy5fZmlsdGVyQ29uZmlncyxcbiAgICAgIHNob3dBcHBseUJ1dHRvbjogIXRoaXMuX3NlYXJjaE9uQ2hhbmdlXG4gICAgfSkpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgaWYgKHRoaXMuX2ZpbHRlckNvbXBvbmVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9maWx0ZXJDb21wb25lbnRzLmZvckVhY2goYyA9PiBjLnJlbW92ZSgpKTtcbiAgICAgIHRoaXMuX2ZpbHRlckNvbXBvbmVudHMgPSBbXTtcbiAgICAgIHRoaXMuX2ZpbHRlcnMgPSBbXTtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGZpbHRlcnMgZnJvbSBjb25maWdzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9maWx0ZXJDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLl9maWx0ZXJDb25maWdzW2ldO1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZShjb25maWcudHlwZSwgT2JqZWN0LmFzc2lnbih7fSxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICB7XG4gICAgICAgICAgcGFyZW50Q29udGFpbmVyOiB0aGlzLl9jb250YWluZXIsXG4gICAgICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfS5maWx0ZXIke2l9YCxcbiAgICAgICAgICBzdG9yZU9uQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICBjb250YWluZXI6IGAuanMteWV4dC1maWx0ZXJib3gtZmlsdGVyJHtpfWAsXG4gICAgICAgICAgb25DaGFuZ2U6IChmaWx0ZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25GaWx0ZXJDaGFuZ2UoaSwgZmlsdGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgIGNvbXBvbmVudC5tb3VudCgpO1xuICAgICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICB0aGlzLl9maWx0ZXJzW2ldID0gY29tcG9uZW50LmdldEZpbHRlcigpO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgYXBwbHkgYnV0dG9uXG4gICAgaWYgKCF0aGlzLl9zZWFyY2hPbkNoYW5nZSkge1xuICAgICAgY29uc3QgYnV0dG9uID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fYXBwbHlCdXR0b25TZWxlY3Rvcik7XG5cbiAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgRE9NLm9uKGJ1dHRvbiwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3NhdmVGaWx0ZXJzVG9TdG9yYWdlKCk7XG4gICAgICAgICAgdGhpcy5fc2VhcmNoKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgY2hhbmdlcyB0byBjaGlsZCBmaWx0ZXIgY29tcG9uZW50c1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBjaGFuZ2VkIGZpbHRlclxuICAgKiBAcGFyYW0ge0ZpbHRlcn0gZmlsdGVyIFRoZSBuZXcgZmlsdGVyXG4gICAqL1xuICBvbkZpbHRlckNoYW5nZSAoaW5kZXgsIGZpbHRlcikge1xuICAgIHRoaXMuX2ZpbHRlcnNbaW5kZXhdID0gZmlsdGVyO1xuICAgIGlmICh0aGlzLl9zZWFyY2hPbkNoYW5nZSkge1xuICAgICAgdGhpcy5fc2F2ZUZpbHRlcnNUb1N0b3JhZ2UoKTtcbiAgICAgIHRoaXMuX3NlYXJjaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGZpbHRlciBjb21wb25lbnRzIGFsb25nIHdpdGggdGhpcyBjb21wb25lbnRcbiAgICovXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cy5mb3JFYWNoKGMgPT4gYy5yZW1vdmUoKSk7XG4gICAgc3VwZXIucmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSBjdXJyZW50IGZpbHRlcnMgdG8gc3RvcmFnZSB0byBiZSB1c2VkIGluIHRoZSBuZXh0IHNlYXJjaFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NhdmVGaWx0ZXJzVG9TdG9yYWdlICgpIHtcbiAgICBjb25zdCB2YWxpZEZpbHRlcnMgPSB0aGlzLl9maWx0ZXJzLmZpbHRlcihmID0+XG4gICAgICBmICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIGYgIT09IG51bGwgJiZcbiAgICAgIE9iamVjdC5rZXlzKGYpLmxlbmd0aCA+IDApO1xuXG4gICAgaWYgKHRoaXMuX2lzRHluYW1pYykge1xuICAgICAgY29uc3QgY29tYmluZWRGaWx0ZXIgPSBGYWNldC5mcm9tRmlsdGVycyguLi52YWxpZEZpbHRlcnMpO1xuICAgICAgdGhpcy5jb3JlLnNldEZhY2V0RmlsdGVyKHRoaXMubmFtZSwgY29tYmluZWRGaWx0ZXIgfHwge30pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb21iaW5lZEZpbHRlciA9IHZhbGlkRmlsdGVycy5sZW5ndGggPiAxXG4gICAgICAgID8gRmlsdGVyLmFuZCguLi52YWxpZEZpbHRlcnMpXG4gICAgICAgIDogdmFsaWRGaWx0ZXJzWzBdO1xuICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGNvbWJpbmVkRmlsdGVyIHx8IHt9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBhIHNlYXJjaCB3aXRoIGFsbCBmaWx0ZXJzIGluIHN0b3JhZ2VcbiAgICovXG4gIF9zZWFyY2ggKCkge1xuICAgIGNvbnN0IGFsbEZpbHRlcnMgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICBjb25zdCB0b3RhbEZpbHRlciA9IGFsbEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgPyBGaWx0ZXIuYW5kKC4uLmFsbEZpbHRlcnMpXG4gICAgICA6IGFsbEZpbHRlcnNbMF07XG5cbiAgICBjb25zdCBxdWVyeSA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKTtcblxuICAgIGNvbnN0IGZhY2V0RmlsdGVyID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZBQ0VUX0ZJTFRFUilbMF07XG5cbiAgICB0aGlzLmNvcmUudmVydGljYWxTZWFyY2godGhpcy5fdmVydGljYWxLZXksIHtcbiAgICAgIGlucHV0OiBxdWVyeSxcbiAgICAgIGZpbHRlcjogSlNPTi5zdHJpbmdpZnkodG90YWxGaWx0ZXIpLFxuICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXJPcHRpb25zQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgc3VwcG9ydGVkIGNvbnRyb2xzXG4gKiBAdHlwZSB7c3RyaW5nW119XG4gKi9cbmNvbnN0IFNVUFBPUlRFRF9DT05UUk9MUyA9IFtcbiAgJ3NpbmdsZW9wdGlvbicsXG4gICdtdWx0aW9wdGlvbidcbl07XG5cbi8qKlxuICogUmVuZGVycyBhIHNldCBvZiBvcHRpb25zLCBlYWNoIG9uZSByZXByZXNlbnRpbmcgYSBmaWx0ZXIgaW4gYSBzZWFyY2guXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlck9wdGlvbnNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgaWYgKCFjb25maWcuY29udHJvbCB8fCAhU1VQUE9SVEVEX0NPTlRST0xTLmluY2x1ZGVzKGNvbmZpZy5jb250cm9sKSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMgcmVxdWlyZXMgYSB2YWxpZCBcImNvbnRyb2xcIiB0byBiZSBwcm92aWRlZCcsXG4gICAgICAgICdGaWx0ZXJPcHRpb25zJyk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25maWcub3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMgY29tcG9uZW50IHJlcXVpcmVzIG9wdGlvbnMgdG8gYmUgcHJvdmlkZWQnLFxuICAgICAgICAnRmlsdGVyT3B0aW9ucycpO1xuICAgIH1cblxuICAgIGxldCBwcmV2aW91c09wdGlvbnMgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZSh0aGlzLm5hbWUpO1xuICAgIGlmICh0eXBlb2YgcHJldmlvdXNPcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcHJldmlvdXNPcHRpb25zID0gSlNPTi5wYXJzZShwcmV2aW91c09wdGlvbnMpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gICAgbGV0IHNlbGVjdGVkT3B0aW9ucyA9IHByZXZpb3VzT3B0aW9ucyB8fCBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGZpbHRlciBvcHRpb25zIHRvIGRpc3BsYXkgd2l0aCBjaGVja2VkIHN0YXR1c1xuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29wdGlvbnMgPSBjb25maWcub3B0aW9ucy5tYXAobyA9PiBPYmplY3QuYXNzaWduKHt9LCB7IHNlbGVjdGVkOiBzZWxlY3RlZE9wdGlvbnMuaW5jbHVkZXMoby5sYWJlbCkgfSwgbykpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgY29udHJvbCB0byBkaXNwbGF5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2NvbnRyb2wgPSBjb25maWcuY29udHJvbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RvciB1c2VkIGZvciBvcHRpb25zIGluIHRoZSB0ZW1wbGF0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vcHRpb25TZWxlY3RvciA9IGNvbmZpZy5vcHRpb25TZWxlY3RvciB8fCAnLmpzLXlleHQtZmlsdGVyLW9wdGlvbic7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzdG9yZXMgdGhlIGZpbHRlciB0byBzdG9yYWdlIG9uIGVhY2ggY2hhbmdlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdG9yZU9uQ2hhbmdlID0gY29uZmlnLnN0b3JlT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNoYW5nZWRcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vbkNoYW5nZSA9IGNvbmZpZy5vbkNoYW5nZSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB0byBiZSB1c2VkIGluIHRoZSBsZWdlbmRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbGFiZWwgPSBjb25maWcubGFiZWwgfHwgJ0ZpbHRlcnMnO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0ZpbHRlck9wdGlvbnMnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXIsIGJhc2VkIG9uIHRoZSBjb250cm9sXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiBgY29udHJvbHMvJHtjb25maWcuY29udHJvbH1gO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgIG9wdGlvbnM6IHRoaXMuX29wdGlvbnMsXG4gICAgICBsYWJlbDogdGhpcy5fbGFiZWxcbiAgICB9KSk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICBET00uZGVsZWdhdGUoXG4gICAgICBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCBgLiR7dGhpcy5fY29udHJvbH0tZmllbGRzZXRgKSxcbiAgICAgIHRoaXMuX29wdGlvblNlbGVjdG9yLFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlT3B0aW9uKHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4KSwgZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xuXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuX2J1aWxkRmlsdGVyKCk7XG4gICAgICAgIGlmICh0aGlzLl9zdG9yZU9uQ2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGZpbHRlcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9vbkNoYW5nZShmaWx0ZXIpO1xuICAgICAgfSk7XG4gIH1cblxuICBfdXBkYXRlT3B0aW9uIChpbmRleCwgc2VsZWN0ZWQpIHtcbiAgICBpZiAodGhpcy5fY29udHJvbCA9PT0gJ3NpbmdsZW9wdGlvbicpIHtcbiAgICAgIHRoaXMuX29wdGlvbnMgPSB0aGlzLl9vcHRpb25zLm1hcChvID0+IE9iamVjdC5hc3NpZ24oe30sIG8sIHsgc2VsZWN0ZWQ6IGZhbHNlIH0pKTtcbiAgICB9XG5cbiAgICB0aGlzLl9vcHRpb25zW2luZGV4XSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX29wdGlvbnNbaW5kZXhdLCB7IHNlbGVjdGVkIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoKTtcbiAgfVxuXG4gIGdldEZpbHRlciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkRmlsdGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIG9wdGlvbnNcbiAgICovXG4gIGNsZWFyICgpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IERPTS5xdWVyeUFsbCh0aGlzLl9jb250YWluZXIsIHRoaXMuX29wdGlvblNlbGVjdG9yKTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGUgPT4gZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnZmFsc2UnKSk7XG4gICAgdGhpcy5fYXBwbHlGaWx0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCBhbmQgcmV0dXJuIHRoZSBGaWx0ZXIgdGhhdCByZXByZXNlbnRzIHRoZSBjdXJyZW50IHN0YXRlXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYnVpbGRGaWx0ZXIgKCkge1xuICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLl9vcHRpb25zXG4gICAgICAuZmlsdGVyKG8gPT4gby5zZWxlY3RlZClcbiAgICAgIC5tYXAobyA9PiBvLmZpbHRlclxuICAgICAgICA/IG8uZmlsdGVyXG4gICAgICAgIDogRmlsdGVyLmVxdWFsKG8uZmllbGQsIG8udmFsdWUpKTtcblxuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQodGhpcy5uYW1lLCB0aGlzLl9vcHRpb25zLmZpbHRlcihvID0+IG8uc2VsZWN0ZWQpLm1hcChvID0+IG8ubGFiZWwpKTtcbiAgICByZXR1cm4gZmlsdGVycy5sZW5ndGggPiAwXG4gICAgICA/IEZpbHRlci5ncm91cCguLi5maWx0ZXJzKVxuICAgICAgOiB7fTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmFuZ2VGaWx0ZXJDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZ2VGaWx0ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpZWxkIHRvIGZpbHRlciBvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWVsZCA9IGNvbmZpZy5maWVsZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGZpbHRlciB2YWx1ZSBjaGFuZ2VzXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBjb25maWcub25DaGFuZ2UgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzdG9yZXMgdGhlIGZpbHRlciB0byBzdG9yYWdlIG9uIGVhY2ggY2hhbmdlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdG9yZU9uQ2hhbmdlID0gY29uZmlnLnN0b3JlT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICBsZXQgbWluVmFsID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7dGhpcy5uYW1lfS5taW5gKTtcbiAgICBpZiAodHlwZW9mIG1pblZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG1pblZhbCA9IE51bWJlci5wYXJzZUludChtaW5WYWwpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gICAgbGV0IG1heFZhbCA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke3RoaXMubmFtZX0ubWF4YCk7XG4gICAgaWYgKHR5cGVvZiBtaW5WYWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBtYXhWYWwgPSBOdW1iZXIucGFyc2VJbnQobWF4VmFsKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgcmFuZ2UgcmVwcmVzZW50ZWRcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcmFuZ2UgPSB7XG4gICAgICBtaW46IG1pblZhbCB8fCBjb25maWcuaW5pdGlhbE1pbiB8fCAwLFxuICAgICAgbWF4OiBtYXhWYWwgfHwgY29uZmlnLmluaXRpYWxNYXggfHwgMTBcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIHRvIGRpc3BsYXkgZm9yIHRoZSByYW5nZSBjb250cm9sXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RpdGxlID0gY29uZmlnLnRpdGxlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGxhYmVsIHRvIGRpc3BsYXkgZm9yIHRoZSBtaW4gaW5wdXRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbWluTGFiZWwgPSBjb25maWcubWluTGFiZWwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBsYWJlbCB0byBkaXNwbGF5IGZvciB0aGUgbWF4IGlucHV0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX21heExhYmVsID0gY29uZmlnLm1heExhYmVsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IGBjb250cm9scy9yYW5nZWA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUmFuZ2VGaWx0ZXInO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB0aXRsZTogdGhpcy5fdGl0bGUsXG4gICAgICBtaW5MYWJlbDogdGhpcy5fbWluTGFiZWwsXG4gICAgICBtYXhMYWJlbDogdGhpcy5fbWF4TGFiZWwsXG4gICAgICBtaW5WYWx1ZTogdGhpcy5fcmFuZ2UubWluLFxuICAgICAgbWF4VmFsdWU6IHRoaXMuX3JhbmdlLm1heFxuICAgIH0pKTtcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICBET00uZGVsZWdhdGUodGhpcy5fY29udGFpbmVyLCAnLmpzLXlleHQtcmFuZ2UnLCAnY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl91cGRhdGVSYW5nZShldmVudC50YXJnZXQuZGF0YXNldC5rZXksIE51bWJlci5wYXJzZUludChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldE1pbiAodmFsdWUpIHtcbiAgICB0aGlzLl91cGRhdGVSYW5nZSgnbWluJywgdmFsdWUpO1xuICB9XG5cbiAgc2V0TWF4ICh2YWx1ZSkge1xuICAgIHRoaXMuX3VwZGF0ZVJhbmdlKCdtYXgnLCB2YWx1ZSk7XG4gIH1cblxuICBnZXRGaWx0ZXIgKCkge1xuICAgIHJldHVybiB0aGlzLl9idWlsZEZpbHRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgY3VycmVudCByYW5nZSBzdGF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByYW5nZSBrZXkgdG8gdXBkYXRlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgbmV3IHZhbHVlIGZvciB0aGUga2V5XG4gICAqL1xuICBfdXBkYXRlUmFuZ2UgKGtleSwgdmFsdWUpIHtcbiAgICB0aGlzLl9yYW5nZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX3JhbmdlLCB7IFtrZXldOiB2YWx1ZSB9KTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG5cbiAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLl9idWlsZEZpbHRlcigpO1xuICAgIGlmICh0aGlzLl9zdG9yZU9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgZmlsdGVyKTtcbiAgICB9XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHt0aGlzLm5hbWV9Lm1pbmAsIHRoaXMuX3JhbmdlLm1pbik7XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHt0aGlzLm5hbWV9Lm1heGAsIHRoaXMuX3JhbmdlLm1heCk7XG5cbiAgICB0aGlzLl9vbkNoYW5nZShmaWx0ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHRoZSBmaWx0ZXIgcmVwcmVzZW50YXRpb24gb2YgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIF9idWlsZEZpbHRlciAoKSB7XG4gICAgcmV0dXJuIEZpbHRlci5pbmNsdXNpdmVSYW5nZSh0aGlzLl9maWVsZCwgdGhpcy5fcmFuZ2UubWluLCB0aGlzLl9yYW5nZS5tYXgpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEYXRlRmlsdGVyQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5cbi8qKlxuICogQSBmaWx0ZXIgZm9yIGEgcmFuZ2Ugb2YgZGF0ZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVJhbmdlRmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZywgc3lzdGVtQ29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcGkgZmllbGQgdGhpcyBmaWx0ZXIgY29udHJvbHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmllbGQgPSBjb25maWcuZmllbGQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgdG8gZGlzcGxheSBmb3IgdGhlIGRhdGUgcmFuZ2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGl0bGUgPSBjb25maWcudGl0bGU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgbGFiZWwgdG8gc2hvdyBmb3IgdGhlIG1pbiBkYXRlIGlucHV0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX21pbkxhYmVsID0gY29uZmlnLm1pbkxhYmVsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgbGFiZWwgdG8gc2hvdyBmb3IgdGhlIG1heCBkYXRlIGlucHV0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX21heExhYmVsID0gY29uZmlnLm1heExhYmVsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2FsbGJhY2sgdXNlZCB3aGVuIGEgZGF0ZSBpcyBjaGFuZ2VkXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBjb25maWcub25DaGFuZ2UgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzdG9yZXMgdGhlIGZpbHRlciB0byBzdG9yYWdlIG9uIGVhY2ggY2hhbmdlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdG9yZU9uQ2hhbmdlID0gY29uZmlnLnN0b3JlT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGlzIGZpbHRlciByZXByZXNlbnRzIGFuIGV4Y2x1c2l2ZSByYW5nZSwgcmF0aGVyIHRoYW4gYW4gaW5jbHVzaXZlIG9uZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faXNFeGNsdXNpdmUgPSBjb25maWcuaXNFeGNsdXNpdmU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgZm9yIHRoaXMgY29tcG9uZW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSBgY29udHJvbHMvZGF0ZWA7XG5cbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdG9kYXlTdHJpbmcgPSBgJHt0b2RheS5nZXRGdWxsWWVhcigpfS0ke2Ake3RvZGF5LmdldE1vbnRoKCkgKyAxfWAucGFkU3RhcnQoMiwgJzAnKX0tJHtgJHt0b2RheS5nZXREYXRlKCl9YC5wYWRTdGFydCgyLCAnMCcpfWA7XG4gICAgY29uc3QgbWluRGF0ZSA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke3RoaXMubmFtZX0ubWluYCk7XG4gICAgY29uc3QgbWF4RGF0ZSA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke3RoaXMubmFtZX0ubWF4YCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBkYXRlIHJhbmdlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9kYXRlID0ge1xuICAgICAgbWluOiBtaW5EYXRlIHx8IGNvbmZpZy5pbml0aWFsTWluIHx8IHRvZGF5U3RyaW5nLFxuICAgICAgbWF4OiBtYXhEYXRlIHx8IGNvbmZpZy5pbml0aWFsTWF4IHx8IHRvZGF5U3RyaW5nXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdEYXRlUmFuZ2VGaWx0ZXInO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB0aXRsZTogdGhpcy5fdGl0bGUsXG4gICAgICBtaW5MYWJlbDogdGhpcy5fbWluTGFiZWwsXG4gICAgICBtYXhMYWJlbDogdGhpcy5fbWF4TGFiZWwsXG4gICAgICBkYXRlTWluOiB0aGlzLl9kYXRlLm1pbixcbiAgICAgIGRhdGVNYXg6IHRoaXMuX2RhdGUubWF4XG4gICAgfSkpO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIERPTS5kZWxlZ2F0ZSh0aGlzLl9jb250YWluZXIsICcuanMteWV4dC1kYXRlJywgJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdXBkYXRlUmFuZ2UoZXZlbnQudGFyZ2V0LmRhdGFzZXQua2V5LCBldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbWluIGRhdGUgdG8gdGhlIG9uZSBwcm92aWRlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0ZSBEYXRlIHRvIHNldCBpbiB5eXl5LW1tLWRkIHN0cmluZyBmb3JtYXRcbiAgICovXG4gIHNldE1pbiAoZGF0ZSkge1xuICAgIHRoaXMuX3VwZGF0ZVJhbmdlKCdtaW4nLCBkYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG1heCBkYXRlIHRvIHRoZSBvbmUgcHJvdmlkZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGUgRGF0ZSB0byBzZXQgaW4geXl5eS1tbS1kZCBzdHJpbmcgZm9ybWF0XG4gICAqL1xuICBzZXRNYXggKGRhdGUpIHtcbiAgICB0aGlzLl91cGRhdGVSYW5nZSgnbWF4JywgZGF0ZSk7XG4gIH1cblxuICBnZXRGaWx0ZXIgKCkge1xuICAgIHJldHVybiB0aGlzLl9idWlsZEZpbHRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGRhdGUgcmFuZ2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IGZvciB0aGUgZGF0ZSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIHN0cmluZyBkYXRlIHZhbHVlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdXBkYXRlUmFuZ2UgKGtleSwgdmFsdWUpIHtcbiAgICB0aGlzLl9kYXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZGF0ZSwgeyBba2V5XTogdmFsdWUgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSgpO1xuXG4gICAgY29uc3QgZmlsdGVyID0gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgICBpZiAodGhpcy5fc3RvcmVPbkNoYW5nZSkge1xuICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGZpbHRlcik7XG4gICAgfVxuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7dGhpcy5uYW1lfS5taW5gLCB0aGlzLl9kYXRlLm1pbik7XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHt0aGlzLm5hbWV9Lm1heGAsIHRoaXMuX2RhdGUubWF4KTtcblxuICAgIHRoaXMuX29uQ2hhbmdlKGZpbHRlcik7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0IGFuIGFwaSBmaWx0ZXIgd2l0aCB0aGUgY3VycmVudCBkYXRlIHN0YXRlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYnVpbGRGaWx0ZXIgKCkge1xuICAgIGlmICh0aGlzLl9kYXRlLm1pbiA9PT0gJycgfHwgdGhpcy5fZGF0ZS5tYXggPT09ICcnKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9pc0V4Y2x1c2l2ZVxuICAgICAgPyBGaWx0ZXIuZXhjbHVzaXZlUmFuZ2UodGhpcy5fZmllbGQsIHRoaXMuX2RhdGUubWluLCB0aGlzLl9kYXRlLm1heClcbiAgICAgIDogRmlsdGVyLmluY2x1c2l2ZVJhbmdlKHRoaXMuX2ZpZWxkLCB0aGlzLl9kYXRlLm1pbiwgdGhpcy5fZGF0ZS5tYXgpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEeW5hbWljRmlsdGVyc0NvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuLyoqXG4gKiBEaXNwbGF5cyBhIHNldCBvZiBkeW5hbWljIGZpbHRlcnMgcmV0dXJuZWQgZnJvbSB0aGUgYmFja2VuZFxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNGaWx0ZXJzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZywgc3lzdGVtQ29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBzZWFyY2hcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRyaWdnZXIgYSBzZWFyY2ggb24gZWFjaCBjaGFuZ2UgdG8gYSBmaWx0ZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaE9uQ2hhbmdlID0gY29uZmlnLnNlYXJjaE9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdG9yIG9mIHRoZSBhcHBseSBidXR0b25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBwbHlCdXR0b25TZWxlY3RvciA9IGNvbmZpZy5hcHBseUJ1dHRvblNlbGVjdG9yIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29udHJvbHMgdG8gdXNlIGZvciBlYWNoIGZpZWxkLiBFYWNoIHR5cGUgb2YgZmlsdGVyIGhhcyBhIGRlZmF1bHRcbiAgICAgKiAkZXEgOiBtdWx0aW9wdGlvbiAoY2hlY2tib3gpXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9maWVsZENvbnRyb2xzID0gY29uZmlnLmZpZWxkQ29udHJvbHMgfHwge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdmaWx0ZXJzL2R5bmFtaWMnO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIGZvciB0aGUgZGF0YSBzdG9yYWdlIHRvIGxpc3RlbiBmb3IgdXBkYXRlcyBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5EWU5BTUlDX0ZJTFRFUlM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmlsdGVyIGJveCB0aGF0IGRpc3BsYXlzIHRoZSBkeW5hbWljIGZpbHRlcnNcbiAgICAgKiBAdHlwZSB7RmlsdGVyQm94Q29tcG9uZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVyYm94ID0gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdEeW5hbWljRmlsdGVycyc7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICB0aGlzLmNvcmUuZW5hYmxlRHluYW1pY0ZpbHRlcnMoKTtcblxuICAgIGlmICh0aGlzLl9maWx0ZXJib3gpIHtcbiAgICAgIHRoaXMuX2ZpbHRlcmJveC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBsZXQgeyBmaWx0ZXJzIH0gPSB0aGlzLl9zdGF0ZS5nZXQoKTtcblxuICAgIGlmICghZmlsdGVycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZpbHRlcnMgPSBmaWx0ZXJzLm1hcChmID0+IHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBmLCB7XG4gICAgICAgIHR5cGU6ICdGaWx0ZXJPcHRpb25zJyxcbiAgICAgICAgY29udHJvbDogdGhpcy5fZmllbGRDb250cm9sc1tmLmZpZWxkSWRdIHx8ICdtdWx0aW9wdGlvbidcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fZmlsdGVyYm94ID0gdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZShcbiAgICAgICdGaWx0ZXJCb3gnLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgICBwYXJlbnRDb250YWluZXI6IHRoaXMuX2NvbnRhaW5lcixcbiAgICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfS5maWx0ZXJib3hgLFxuICAgICAgICBjb250YWluZXI6ICcuanMteWV4dC1keW5hbWljLWZpbHRlcnMnLFxuICAgICAgICBzZWFyY2hPbkNoYW5nZTogdGhpcy5fc2VhcmNoT25DaGFuZ2UsXG4gICAgICAgIHZlcnRpY2FsS2V5OiB0aGlzLl92ZXJ0aWNhbEtleSxcbiAgICAgICAgaXNEeW5hbWljOiB0cnVlLFxuICAgICAgICBmaWx0ZXJzXG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLl9maWx0ZXJib3gubW91bnQoKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgR2VvTG9jYXRpb25Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG5jb25zdCBNRVRFUlNfUEVSX01JTEUgPSAxNjA5LjM0NDtcblxuY29uc3QgREVGQVVMVF9DT05GSUcgPSB7XG4gIC8qKlxuICAgKiBUaGUgcmFkaXVzLCBpbiBtaWxlcywgYXJvdW5kIHRoZSB1c2VyJ3MgbG9jYXRpb24gdG8gZmluZCByZXN1bHRzLlxuICAgKiBJZiBsb2NhdGlvbiBhY2N1cmFjeSBpcyBsb3csIGEgbGFyZ2VyIHJhZGl1cyBtYXkgYmUgdXNlZCBhdXRvbWF0aWNhbGx5XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICByYWRpdXM6IDUwLFxuXG4gIC8qKlxuICAgKiBUaGUgdmVydGljYWwga2V5IHRvIHVzZVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdmVydGljYWxLZXk6IG51bGwsXG5cbiAgLyoqXG4gICAqIElmIHRydWUsIHN1Ym1pdHMgYSBzZWFyY2ggd2hlbiB0aGUgdmFsdWUgaXMgY2hhbmdlZFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHNlYXJjaE9uQ2hhbmdlOiBmYWxzZSxcblxuICAvKipcbiAgICogVGhlIHRpdGxlIHRvIGRpc3BsYXlcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHRpdGxlOiAnTG9jYXRpb24nLFxuXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgdG8gZGlzcGxheVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgbGFiZWw6ICdMb2NhdGlvbicsXG5cbiAgLyoqXG4gICAqIFRoZSBpY29uIHVybCB0byBzaG93IGluIHRoZSBnZW8gYnV0dG9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZW9CdXR0b25JY29uOiAnJyxcblxuICAvKipcbiAgICogVGhlIHRleHQgdG8gc2hvdyBpbiB0aGUgZ2VvIGJ1dHRvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2VvQnV0dG9uVGV4dDogJ1VzZSBNeSBMb2NhdGlvbicsXG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IHRvIHNob3cgd2hlbiBnZW9sb2NhdGlvbiBpcyBlbmFibGVkXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBlbmFibGVkVGV4dDogJ0N1cnJlbnQgTG9jYXRpb24nLFxuXG4gIC8qKlxuICAgKiBUaGUgdGV4dCB0byBzaG93IHdoZW4gbG9hZGluZyB0aGUgdXNlcidzIGxvY2F0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBsb2FkaW5nVGV4dDogJ0ZpbmRpbmcgWW91ciBMb2NhdGlvbi4uLicsXG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IHRvIHNob3cgaWYgdGhlIHVzZXIncyBsb2NhdGlvbiBjYW5ub3QgYmUgZm91bmRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGVycm9yVGV4dDogJ0NvdWxkIE5vdCBGaW5kIFlvdXIgTG9jYXRpb24nLFxuXG4gIC8qKlxuICAgKiBUaGUgQ1NTIHNlbGVjdG9yIG9mIHRoZSB0b2dnbGUgYnV0dG9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBidXR0b25TZWxlY3RvcjogJy5qcy15eHQtR2VvTG9jYXRpb25GaWx0ZXItYnV0dG9uJyxcblxuICAvKipcbiAgICogVGhlIENTUyBzZWxlY3RvciBvZiB0aGUgcXVlcnkgaW5wdXRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGlucHV0U2VsZWN0b3I6ICcuanMteXh0LUdlb0xvY2F0aW9uRmlsdGVyLWlucHV0J1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIGEgYnV0dG9uIHRoYXQgd2hlbiBjbGlja2VkIGFkZHMgYSBzdGF0aWMgZmlsdGVyIHJlcHJlc2VudGluZyB0aGUgdXNlcidzIGxvY2F0aW9uXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VvTG9jYXRpb25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoeyAuLi5ERUZBVUxUX0NPTkZJRywgLi4uY29uZmlnIH0sIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgc3RyaW5nIHRvIHVzZSBmb3IgdGhlIGlucHV0IGJveCwgcHJvdmlkZWQgdG8gdGVtcGxhdGUgZm9yIHJlbmRlcmluZy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlcnkgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCkgfHwgJyc7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gLCBxID0+IHtcbiAgICAgIHRoaXMucXVlcnkgPSBxO1xuICAgICAgdGhpcy5zZXRTdGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpbHRlciB0byB1c2UgZm9yIHRoZSBjdXJyZW50IHF1ZXJ5XG4gICAgICogQHR5cGUge0ZpbHRlcn1cbiAgICAgKi9cbiAgICB0aGlzLmZpbHRlciA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCkgfHwge307XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpbHRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gSlNPTi5wYXJzZSh0aGlzLmZpbHRlcik7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWAsIGYgPT4geyB0aGlzLmZpbHRlciA9IGY7IH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0dlb0xvY2F0aW9uRmlsdGVyJztcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lICgpIHtcbiAgICByZXR1cm4gJ2NvbnRyb2xzL2dlb2xvY2F0aW9uJztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgbGV0IHBsYWNlaG9sZGVyID0gJyc7XG4gICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcbiAgICAgIHBsYWNlaG9sZGVyID0gdGhpcy5fY29uZmlnLmVuYWJsZWRUZXh0O1xuICAgIH1cbiAgICBpZiAoZGF0YS5nZW9Mb2FkaW5nKSB7XG4gICAgICBwbGFjZWhvbGRlciA9IHRoaXMuX2NvbmZpZy5sb2FkaW5nVGV4dDtcbiAgICB9XG4gICAgaWYgKGRhdGEuZ2VvRXJyb3IpIHtcbiAgICAgIHBsYWNlaG9sZGVyID0gdGhpcy5fY29uZmlnLmVycm9yVGV4dDtcbiAgICB9XG4gICAgc3VwZXIuc2V0U3RhdGUoe1xuICAgICAgLi4uZGF0YSxcbiAgICAgIHRpdGxlOiB0aGlzLl9jb25maWcudGl0bGUsXG4gICAgICBnZW9FbmFibGVkOiB0aGlzLl9lbmFibGVkLFxuICAgICAgcXVlcnk6IHRoaXMucXVlcnksXG4gICAgICBsYWJlbFRleHQ6IHRoaXMuX2NvbmZpZy5sYWJlbCxcbiAgICAgIGVuYWJsZWRUZXh0OiB0aGlzLl9jb25maWcuZW5hYmxlZFRleHQsXG4gICAgICBsb2FkaW5nVGV4dDogdGhpcy5fY29uZmlnLmxvYWRpbmdUZXh0LFxuICAgICAgZXJyb3JUZXh0OiB0aGlzLl9jb25maWcuZXJyb3JUZXh0LFxuICAgICAgZ2VvQnV0dG9uSWNvbjogdGhpcy5fY29uZmlnLmdlb0J1dHRvbkljb24sXG4gICAgICBnZW9WYWx1ZTogdGhpcy5fZW5hYmxlZCB8fCBkYXRhLmdlb0xvYWRpbmcgfHwgZGF0YS5nZW9FcnJvciA/ICcnIDogdGhpcy5xdWVyeSxcbiAgICAgIGdlb1BsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgIGdlb0J1dHRvblRleHQ6IHRoaXMuX2NvbmZpZy5nZW9CdXR0b25UZXh0XG4gICAgfSk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlKSB7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGUucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5faW5pdEF1dG9Db21wbGV0ZSh0aGlzLl9jb25maWcuaW5wdXRTZWxlY3Rvcik7XG4gICAgRE9NLm9uKHRoaXMuX2NvbmZpZy5idXR0b25TZWxlY3RvciwgJ2NsaWNrJywgKCkgPT4gdGhpcy5fdG9nZ2xlR2VvRmlsdGVyKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgaGVscGVyIG1ldGhvZCB0byB3aXJlIHVwIG91ciBhdXRvIGNvbXBsZXRlIG9uIGFuIGlucHV0IHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBhdXRvIGNvbXBsZXRlIGNvbXBvbmVudCB0b1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luaXRBdXRvQ29tcGxldGUgKGlucHV0U2VsZWN0b3IpIHtcbiAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlKSB7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGUucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fYXV0b2NvbXBsZXRlID0gdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZSgnQXV0b0NvbXBsZXRlJywge1xuICAgICAgcGFyZW50Q29udGFpbmVyOiB0aGlzLl9jb250YWluZXIsXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmF1dG9jb21wbGV0ZWAsXG4gICAgICBpc0ZpbHRlclNlYXJjaDogdHJ1ZSxcbiAgICAgIGNvbnRhaW5lcjogJy5qcy15eHQtR2VvTG9jYXRpb25GaWx0ZXItYXV0b2NvbXBsZXRlJyxcbiAgICAgIG9yaWdpbmFsUXVlcnk6IHRoaXMucXVlcnksXG4gICAgICBvcmlnaW5hbEZpbHRlcjogdGhpcy5maWx0ZXIsXG4gICAgICBpbnB1dEVsOiBpbnB1dFNlbGVjdG9yLFxuICAgICAgdmVydGljYWxLZXk6IHRoaXMuX3ZlcnRpY2FsS2V5LFxuICAgICAgb25TdWJtaXQ6IChxdWVyeSwgZmlsdGVyKSA9PiB7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBGaWx0ZXIuZnJvbVJlc3BvbnNlKGZpbHRlcik7XG4gICAgICAgIHRoaXMuX3NhdmVEYXRhVG9TdG9yYWdlKHF1ZXJ5LCB0aGlzLmZpbHRlcik7XG4gICAgICAgIHRoaXMuX2VuYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBzdGF0aWMgZmlsdGVyIHJlcHJlc2VudGluZyB0aGUgdXNlcidzIGxvY2F0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdG9nZ2xlR2VvRmlsdGVyICgpIHtcbiAgICBpZiAoIW5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdlb0Vycm9yOiB0cnVlIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fZW5hYmxlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdlb0xvYWRpbmc6IHRydWUgfSk7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxuICAgICAgICBwb3NpdGlvbiA9PiB7XG4gICAgICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5fYnVpbGRGaWx0ZXIocG9zaXRpb24pO1xuICAgICAgICAgIHRoaXMuX3NhdmVEYXRhVG9TdG9yYWdlKCcnLCBmaWx0ZXIsIHBvc2l0aW9uKTtcbiAgICAgICAgICB0aGlzLl9lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHt9KTtcbiAgICAgICAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2UuZGVsZXRlKGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gKTtcbiAgICAgICAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2UuZGVsZXRlKGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCk7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHRoaXMuc2V0U3RhdGUoeyBnZW9FcnJvcjogdHJ1ZSB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2F2ZXMgdGhlIHByb3ZpZGVkIGZpbHRlciB1bmRlciB0aGlzIGNvbXBvbmVudCdzIG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IFRoZSBxdWVyeSB0byBzYXZlXG4gICAqIEBwYXJhbSB7RmlsdGVyfSBmaWx0ZXIgVGhlIGZpbHRlciB0byBzYXZlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwb3NpdGlvbiBUaGUgcG9zaXRpb24gdG8gc2F2ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NhdmVEYXRhVG9TdG9yYWdlIChxdWVyeSwgZmlsdGVyLCBwb3NpdGlvbikge1xuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWAsIHF1ZXJ5KTtcbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCwgZmlsdGVyKTtcbiAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgZmlsdGVyKTtcblxuICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLkdFT0xPQ0FUSU9OLCB7XG4gICAgICAgIGxhdDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICBsbmc6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgIHJhZGl1czogcG9zaXRpb24uY29vcmRzLmFjY3VyYWN5XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnNlYXJjaE9uQ2hhbmdlKSB7XG4gICAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgICBsZXQgdG90YWxGaWx0ZXIgPSBmaWx0ZXJzWzBdO1xuICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICB0b3RhbEZpbHRlciA9IEZpbHRlci5hbmQoLi4uZmlsdGVycyk7XG4gICAgICB9XG4gICAgICBjb25zdCBzZWFyY2hRdWVyeSA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKSB8fCAnJztcbiAgICAgIGNvbnN0IGZhY2V0RmlsdGVyID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZBQ0VUX0ZJTFRFUilbMF07XG5cbiAgICAgIHRoaXMuY29yZS52ZXJ0aWNhbFNlYXJjaCh0aGlzLl9jb25maWcudmVydGljYWxLZXksIHtcbiAgICAgICAgaW5wdXQ6IHNlYXJjaFF1ZXJ5LFxuICAgICAgICBmaWx0ZXI6IEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSxcbiAgICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGEgcG9zaXRpb24sIGNvbnN0cnVjdCBhIEZpbHRlciBvYmplY3RcbiAgICogQHBhcmFtIHtQb3N0aXRpb259IHBvc2l0aW9uIFRoZSBwb3NpdGlvblxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2J1aWxkRmlsdGVyIChwb3NpdGlvbikge1xuICAgIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSwgYWNjdXJhY3kgfSA9IHBvc2l0aW9uLmNvb3JkcztcbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1heChhY2N1cmFjeSwgdGhpcy5fY29uZmlnLnJhZGl1cyAqIE1FVEVSU19QRVJfTUlMRSk7XG4gICAgcmV0dXJuIEZpbHRlci5wb3NpdGlvbihsYXRpdHVkZSwgbG9uZ2l0dWRlLCByYWRpdXMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEaXJlY3RBbnN3ZXJDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuLyoqXG4gKiBFdmVudFR5cGVzIGFyZSBleHBsaWNpdCBzdHJpbmdzIGRlZmluZWRcbiAqIGZvciB3aGF0IHRoZSBzZXJ2ZXIgZXhwZWN0cyBmb3IgYW5hbHl0aWNzLlxuICpcbiAqIEBlbnVtXG4gKi9cbmNvbnN0IEV2ZW50VHlwZXMgPSB7XG4gIFRIVU1CU19VUDogJ1RIVU1CU19VUCcsXG4gIFRIVU1CU19ET1dOOiAnVEhVTUJTX0RPV04nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RBbnN3ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogUmVjaWV2ZSB1cGRhdGVzIGZyb20gc3RvcmFnZSBiYXNlZCBvbiB0aGlzIGluZGV4XG4gICAgICogQHR5cGUge1N0b3JhZ2VLZXl9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZm9ybSB1c2VkIGZvciBzdWJtaXR0aW5nIHRoZSBmZWVkYmFja1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fZm9ybUVsID0gY29uZmlnLmZvcm1FbCB8fCAnLmpzLWRpcmVjdEFuc3dlci1mZWVkYmFjay1mb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBgdGh1bWJzIHVwYCBjc3Mgc2VsZWN0b3IgdG8gYmluZCB1aSBpbnRlcmFjdGlvbiB0byBmb3IgcmVwb3J0aW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90aHVtYnNVcFNlbGVjdG9yID0gY29uZmlnLnRodW1ic1VwU2VsZWN0b3IgfHwgJy5qcy1kaXJlY3RBbnN3ZXItdGh1bWJVcCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYHRodW1icyBkb3duYCBjc3Mgc2VsZWN0b3IgdG8gYmluZCB1aSBpbnRlcmFjdGlvbiB0byBmb3IgcmVwb3J0aW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90aHVtYnNEb3duU2VsZWN0b3IgPSBjb25maWcudGh1bWJzRG93blNlbGVjdG9yIHx8ICcuanMtZGlyZWN0QW5zd2VyLXRodW1iRG93bic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlzcGxheSB0ZXh0IGZvciB0aGUgVmlldyBEZXRhaWxzIGNsaWNrIHRvIGFjdGlvbiBsaW5rXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92aWV3RGV0YWlsc1RleHQgPSBjb25maWcudmlld0RldGFpbHNUZXh0IHx8ICdWaWV3IERldGFpbHMnO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0RpcmVjdEFuc3dlcic7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvZGlyZWN0YW5zd2VyJztcbiAgfVxuXG4gIC8qKlxuICAgKiBiZWZvcmVNb3VudCwgb25seSBkaXNwbGF5IHRoZSBkaXJlY3QgYW5zd2VyIGNvbXBvbmVudCBpZiBpdCBoYXMgZGF0YVxuICAgKi9cbiAgYmVmb3JlTW91bnQgKCkge1xuICAgIGlmICghdGhpcy5oYXNTdGF0ZSgnYW5zd2VyJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBET00gaXMgY29uc3RydWN0ZWQsXG4gICAqIHdlIHdhbnQgdG8gd2lyZSB1cCB0aGUgYmVoYXZpb3IgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIHF1YWxpdHkgZmVlZGJhY2sgcmVwb3J0aW5nICh0aHVtYnN1cC9kb3duKVxuICAgKi9cbiAgb25Nb3VudCAoKSB7XG4gICAgLy8gQXZvaWQgYmluZGluZ3MgaWYgdGhlIGZlZWRiYWNrIGhhcyBwcmV2aW91c2x5IGJlZW4gc3VibWl0dGVkXG4gICAgaWYgKHRoaXMuZ2V0U3RhdGUoJ2ZlZWRiYWNrU3VibWl0dGVkJykgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIEZvciBXQ0FHIGNvbXBsaWFuY2UsIHRoZSBmZWVkYmFjayBzaG91bGQgYmUgYSBzdWJtaXR0YWJsZSBmb3JtXG4gICAgRE9NLm9uKHRoaXMuX2Zvcm1FbCwgJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBsZXQgZm9ybUVsID0gZS50YXJnZXQ7XG4gICAgICBsZXQgY2hlY2tlZFZhbHVlID0gRE9NLnF1ZXJ5KGZvcm1FbCwgJ2lucHV0OmNoZWNrZWQnKS5jaGVja2VkO1xuXG4gICAgICB0aGlzLnJlcG9ydFF1YWxpdHkoY2hlY2tlZFZhbHVlKTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAnZmVlZGJhY2tTdWJtaXR0ZWQnOiB0cnVlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIElzIHRoaXMgYWN0dWFsbHkgbmVjZXNzYXJ5PyBJIGd1ZXNzIGl0J3Mgb25seSBuZWNlc3NhcnkgaWYgdGhlXG4gICAgLy8gc3VibWl0IGJ1dHRvbiBpcyBoaWRkZW4uXG4gICAgRE9NLm9uKHRoaXMuX3RodW1ic1VwU2VsZWN0b3IsICdjbGljaycsICgpID0+IHsgRE9NLnRyaWdnZXIodGhpcy5fZm9ybUVsLCAnc3VibWl0Jyk7IH0pO1xuICAgIERPTS5vbih0aGlzLl90aHVtYnNEb3duU2VsZWN0b3IsICdjbGljaycsICgpID0+IHsgRE9NLnRyaWdnZXIodGhpcy5fZm9ybUVsLCAnc3VibWl0Jyk7IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHVwZGF0ZVN0YXRlIGVuYWJsZXMgZm9yIHBhcnRpYWwgdXBkYXRlcyAodGhlIGRlbHRhIGJldHdlZW4gdGhlIG9sZCBhbmQgbmV3KVxuICAgKiBAdHlwZSB7b2JqZWN0fSBUaGUgbmV3IHN0YXRlIHRvIGFwcGx5IHRvIHRoZSBvbGRcbiAgICovXG4gIHVwZGF0ZVN0YXRlIChzdGF0ZSA9IHt9KSB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmdldFN0YXRlKCksIHN0YXRlKTtcbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIGV2ZW50T3B0aW9uczogdGhpcy5ldmVudE9wdGlvbnMoZGF0YSksXG4gICAgICB2aWV3RGV0YWlsc1RleHQ6IHRoaXMuX3ZpZXdEZXRhaWxzVGV4dFxuICAgIH0pKTtcbiAgfVxuXG4gIGV2ZW50T3B0aW9ucyAoZGF0YSkge1xuICAgIGlmICghZGF0YSB8fCBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdmVydGljYWxDb25maWdJZDogZGF0YS5yZWxhdGVkSXRlbS52ZXJ0aWNhbENvbmZpZ0lkLFxuICAgICAgc2VhcmNoZXI6ICdVTklWRVJTQUwnLFxuICAgICAgZW50aXR5SWQ6IGRhdGEucmVsYXRlZEl0ZW0uZGF0YS5pZCxcbiAgICAgIGN0YUxhYmVsOiB0aGlzLl92aWV3RGV0YWlsc1RleHQudG9VcHBlckNhc2UoKS5yZXBsYWNlKCcgJywgJ18nKVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcG9ydFF1YWxpdHkgd2lsbCBzZW5kIHRoZSBxdWFsaXR5IGZlZWRiYWNrIHRvIGFuYWx5dGljc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzR29vZCB0cnVlIGlmIHRoZSBhbnN3ZXIgaXMgd2hhdCB5b3Ugd2VyZSBsb29raW5nIGZvclxuICAgKi9cbiAgcmVwb3J0UXVhbGl0eSAoaXNHb29kKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gaXNHb29kID09PSB0cnVlID8gRXZlbnRUeXBlcy5USFVNQlNfVVAgOiBFdmVudFR5cGVzLlRIVU1CU19ET1dOO1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEFuYWx5dGljc0V2ZW50KGV2ZW50VHlwZSlcbiAgICAgIC5hZGRPcHRpb25zKHtcbiAgICAgICAgJ2RpcmVjdEFuc3dlcic6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlci5yZXBvcnQoZXZlbnQpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBSZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihvcHRzLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogdmVydGljYWxDb25maWdJZCB1c2VkIGZvciBhbmFseXRpY3MgYW5kIHBhc3NlZCB0byBjaGlsZHJlblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbENvbmZpZ0lkID0gb3B0cy52ZXJ0aWNhbENvbmZpZ0lkO1xuXG4gICAgLyoqXG4gICAgICogaXNVbml2ZXJzYWwgaXMgdXNlZCBmb3IgYW5hbHl0aWNzIGFuZCBwYXNzZWQgdG8gY2hpbGRyZW4gYW5kIGlzIHNldCB0b1xuICAgICAqIHRydWUgaWYgdGhpcyBjb21wb25lbnQgaXMgYWRkZWQgYnkgdGhlIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2lzVW5pdmVyc2FsID0gb3B0cy5pc1VuaXZlcnNhbCB8fCBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdSZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvcmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogaGVscGVyIHRvIGNvbnN0cnVjdCB0aGUgZXZlbnRPcHRpb25zIG9iamVjdCBmb3IgdGhlIHRpdGxlIGxpbmtcbiAgICogQHBhcmFtIGVudGl0eUlkIFRoZSBJRCBvZiB0aGUgcmVzdWx0IGl0ZW0sIGlmIHByZXNlbnRcbiAgICogQHBhcmFtIHVybCBUaGUgdXJsIG9mIHRoZSByZXN1bHQgaXRlbSwgaWYgcHJlc2VudFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZXZlbnRPcHRpb25zIChlbnRpdHlJZCwgdXJsKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHZlcnRpY2FsQ29uZmlnSWQ6IHRoaXMuX3ZlcnRpY2FsQ29uZmlnSWQsXG4gICAgICBzZWFyY2hlcjogdGhpcy5faXNVbml2ZXJzYWwgPyAnVU5JVkVSU0FMJyA6ICdWRVJUSUNBTCdcbiAgICB9O1xuXG4gICAgaWYgKGVudGl0eUlkKSB7XG4gICAgICBvcHRpb25zLmVudGl0eUlkID0gZW50aXR5SWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnMudXJsID0gdXJsO1xuICAgIH1cblxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXNzZXMgZXZlbnRPcHRpb25zIHRvIHRoZSB2aWV3TW9kZWxcbiAgICogQG92ZXJyaWRlXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEByZXR1cm5zIHtSZXN1bHRzSXRlbUNvbXBvbmVudH1cbiAgICovXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgZXZlbnRPcHRpb25zOiB0aGlzLmV2ZW50T3B0aW9ucyhkYXRhLmlkLCBkYXRhLmxpbmspXG4gICAgfSkpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50ICovXG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNJdGVtQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihvcHRzLCBzeXN0ZW1Db25maWcpO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0xvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL2xvY2F0aW9ucmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9LCBzeXN0ZW1Db25maWcgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMsIHN5c3RlbUNvbmZpZyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvZXZlbnRyZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNJdGVtQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSwgc3lzdGVtT3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cywgc3lzdGVtT3B0cyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL3Blb3BsZXJlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNYXBQcm92aWRlciAqL1xuXG4vKipcbiAqIEEgTWFwUHJvdmlkZXIgaXMgYW4gaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB0aGF0IHNob3VsZCBiZSBpbXBsZW1lbnRlZFxuICogaW4gb3JkZXIgdG8gaW50ZWdyYXRlIHdpdGggYSBUaGlyZCBQYXJ0eSBNYXAgcHJvdmlkZXIgZm9yXG4gKiBpbnRlcmFjdGl2ZSBtYXBzLiBNYXBQcm92aWRlcnMgYXJlIHVzZWQgYnkgdGhlIE1hcENvbXBvbmVudC5cbiAqXG4gKiBJbXBsZW1lbnRhdGlvbnMgc2hvdWxkIGV4dGVuZCB0aGlzIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBUaGUgQVBJIEtleSB1c2VkIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBtYXAgcHJvdmlkZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2FwaUtleSA9IGNvbmZpZy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgem9vbSBsZXZlbCBvZiB0aGUgbWFwLCBkZWZhdWx0cyB0byA5XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl96b29tID0gY29uZmlnLnpvb20gfHwgOTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGNvb3JkaW5hdGVzIHRvIGRpc3BsYXkgaWYgdGhlcmUgYXJlIG5vIHJlc3VsdHMgcmV0dXJuZWRcbiAgICAgKiBPbmx5IHVzZWQgaWYgc2hvd0VtcHR5TWFwIGlzIHNldCB0byB0cnVlXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9kZWZhdWx0UG9zaXRpb24gPSBjb25maWcuZGVmYXVsdFBvc2l0aW9uIHx8IHsgbGF0OiAzNy4wOTAyLCBsbmc6IC05NS43MTI5IH07XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGFuIGVtcHR5IG1hcCBzaG91bGQgYmUgc2hvd24gd2hlbiB0aGVyZSBhcmUgbm8gcmVzdWx0c1xuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX3Nob3dFbXB0eU1hcCA9IGNvbmZpZy5zaG93RW1wdHlNYXAgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgdW5kZXJseWluZyBtYXAgaW5zdGFuY2UsIGNyZWF0ZWQgYnkgdGhlIGV4dGVybmFsIGxpYi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX21hcCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUZW1wb3JhcnkgYm9vbGVhbiB0cmFja2luZyB3aGV0aGVyIG9yIG5vdCB0aGUgZXh0ZXJuYWwgSlMgbGlicmFyeSBpcyBsb2FkZWQgKHNlZSBUT0RPIGJlbG93KVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2lzTG9hZGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiBhIHBpbiBpcyBjbGlja2VkLiBUaGUgY2xpY2tlZCBpdGVtKHMpIGFyZSBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMuX29uUGluQ2xpY2sgPSBjb25maWcub25QaW5DbGljayB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIG9uY2UgdGhlIEphdmFzY3JpcHQgaXMgbG9hZGVkXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMuX29uTG9hZGVkID0gY29uZmlnLm9uTG9hZGVkIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1c3RvbSBjb25maWd1cmF0aW9uIG92ZXJyaWRlIHRvIHVzZSBmb3IgdGhlIG1hcCBtYXJrZXJzXG4gICAgICogQHR5cGUge09iamVjdHxGdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLl9waW5Db25maWcgPSB0eXBlb2YgY29uZmlnLnBpbiA9PT0gJ2Z1bmN0aW9uJyA/IGNvbmZpZy5waW4gOiBPYmplY3QuYXNzaWduKE1hcFByb3ZpZGVyLkRFRkFVTFRfUElOX0NPTkZJRywgY29uZmlnLnBpbik7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRvIGNvbGxhcHNlIHBpbnMgYXQgdGhlIHNhbWUgbGF0L2xuZ1xuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2NvbGxhcHNlUGlucyA9IGNvbmZpZy5jb2xsYXBzZVBpbnMgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgY29uZmlndXJhdGlvbiB0byB1c2UgZm9yIHRoZSBtYXAgbWFya2Vyc1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKiBUT0RPKGJpbGx5KSBDcmVhdGUgYSBjb25maWd1cmF0aW9uIG1vZGVsXG4gICAqL1xuICBzdGF0aWMgZ2V0IERFRkFVTFRfUElOX0NPTkZJRyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGljb246IHtcbiAgICAgICAgYW5jaG9yOiBudWxsLCAvLyBlLmcuIHsgeDogMSwgeTogMSB9XG4gICAgICAgIHN2ZzogbnVsbCxcbiAgICAgICAgdXJsOiBudWxsLFxuICAgICAgICBzY2FsZWRTaXplOiBudWxsIC8vIGUuZy4geyB3OiAyMCwgaDogMjAgfVxuICAgICAgfSxcbiAgICAgIGxhYmVsVHlwZTogJ251bWVyaWMnXG4gICAgfTtcbiAgfVxuXG4gIG9uTG9hZGVkIChjYikge1xuICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9vbkxvYWRlZCA9IGNiO1xuICAgIGlmICh0aGlzLmlzTG9hZGVkKCkpIHtcbiAgICAgIHRoaXMuX29uTG9hZGVkKCk7XG4gICAgfVxuICB9XG5cbiAgaXNMb2FkZWQgKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0xvYWRlZDtcbiAgfVxuXG4gIGxvYWRKUyAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmltcGxlbWVudGVkIE1ldGhvZDogbG9hZEpTJyk7XG4gIH1cblxuICBpbml0IChtYXBEYXRhKSB7XG4gICAgLy8gVE9ETyhiaWxseSkgVGhpcyBzaG91bGQgYmUgYmFzZWQgb2ZmIGEgcHJvbWlzZSB0aGF0IGdldHMgY3JlYXRlZCBmcm9tIGxvYWRKU1xuICAgIHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCBNZXRob2Q6IGluaXQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhIGxpc3Qgb2YgbWFya2VycywgY29tYmluZSBtYXJrZXJzIHdpdGggdGhlIHNhbWUgbGF0L2xuZyBpbnRvIGEgc2luZ2xlIG1hcmtlclxuICAgKiBAcGFyYW0ge29iamVjdFtdfSBtYXJrZXJzIFRoZSBtYXJrZXJzIHRvIGNvbGxhcHNlXG4gICAqL1xuICBfY29sbGFwc2VNYXJrZXJzIChtYXJrZXJzKSB7XG4gICAgY29uc3QgbG9jYXRpb25Ub0l0ZW0gPSB7fTtcbiAgICBtYXJrZXJzLmZvckVhY2gobSA9PiB7XG4gICAgICBsb2NhdGlvblRvSXRlbVtgJHttLmxhdGl0dWRlfSR7bS5sb25naXR1ZGV9YF1cbiAgICAgICAgPyBsb2NhdGlvblRvSXRlbVtgJHttLmxhdGl0dWRlfSR7bS5sb25naXR1ZGV9YF0ucHVzaChtKVxuICAgICAgICA6IGxvY2F0aW9uVG9JdGVtW2Ake20ubGF0aXR1ZGV9JHttLmxvbmdpdHVkZX1gXSA9IFttXTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbGxhcHNlZE1hcmtlcnMgPSBbXTtcbiAgICBmb3IgKGxldCBbLCBtYXJrZXJzXSBvZiBPYmplY3QuZW50cmllcyhsb2NhdGlvblRvSXRlbSkpIHtcbiAgICAgIGlmIChtYXJrZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2VkTWFya2VyID0ge1xuICAgICAgICAgIGl0ZW06IG1hcmtlcnMubWFwKG0gPT4gbS5pdGVtKSxcbiAgICAgICAgICBsYWJlbDogbWFya2Vycy5sZW5ndGgsXG4gICAgICAgICAgbGF0aXR1ZGU6IG1hcmtlcnNbMF0ubGF0aXR1ZGUsXG4gICAgICAgICAgbG9uZ2l0dWRlOiBtYXJrZXJzWzBdLmxvbmdpdHVkZVxuICAgICAgICB9O1xuICAgICAgICBjb2xsYXBzZWRNYXJrZXJzLnB1c2goY29sbGFwc2VkTWFya2VyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxhcHNlZE1hcmtlcnMucHVzaChtYXJrZXJzWzBdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29sbGFwc2VkTWFya2VycztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgR29vZ2xlTWFwUHJvdmlkZXIgKi9cblxuaW1wb3J0IE1hcFByb3ZpZGVyIGZyb20gJy4vbWFwcHJvdmlkZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi8uLi9kb20vZG9tJztcblxuLyogZ2xvYmFsIGdvb2dsZSAqL1xuXG4vKipcbiAqIEdvb2dsZU1hcFByb3ZpZGVyIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIGEgTWFwUHJvdmlkZXJcbiAqIHRoYXQgaGFuZGxlcyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgdGhpcmQgcGFydHkgQVBJIHRvIGV4cG9zZSBtYXBzLlxuICogQGV4dGVuZHMgTWFwUHJvdmlkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29vZ2xlTWFwUHJvdmlkZXIgZXh0ZW5kcyBNYXBQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl9jbGllbnRJZCA9IG9wdHMuY2xpZW50SWQ7XG4gICAgdGhpcy5fc2lnbmF0dXJlID0gb3B0cy5zaWduYXR1cmU7XG5cbiAgICBpZiAoIXRoaXMuaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscygpICYmICF0aGlzLl9hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignR29vZ2xlTWFwc1Byb3ZpZGVyOiBNaXNzaW5nIGBhcGlLZXlgIG9yIHtgY2xpZW50SWRgLCBgc2lnbmF0dXJlYH0nKTtcbiAgICB9XG4gIH1cblxuICBsb2FkSlMgKG9uTG9hZCkge1xuICAgIGlmIChET00ucXVlcnkoJyN5ZXh0LW1hcC1qcycpKSB7XG4gICAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7XG4gICAgICBpZiAodHlwZW9mIG9uTG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvbkxvYWQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWpzJyxcbiAgICAgIG9ubG9hZDogKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX29uTG9hZGVkKCk7XG4gICAgICB9LFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzcmM6IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/JHt0aGlzLmdlbmVyYXRlQ3JlZGVudGlhbHMoKX1gXG4gICAgfSk7XG5cbiAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgfVxuXG4gIGdlbmVyYXRlQ3JlZGVudGlhbHMgKCkge1xuICAgIGlmICh0aGlzLmhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMoKSkge1xuICAgICAgcmV0dXJuIGBjbGllbnQ9JHt0aGlzLl9jbGllbnRJZH1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYGtleT0ke3RoaXMuX2FwaUtleX1gO1xuICAgIH1cbiAgfVxuXG4gIGhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMgKCkge1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRJZDtcbiAgfVxuXG4gIGluaXQgKGVsLCBtYXBEYXRhKSB7XG4gICAgaWYgKCghbWFwRGF0YSB8fCBtYXBEYXRhLm1hcE1hcmtlcnMubGVuZ3RoIDw9IDApICYmICF0aGlzLl9zaG93RW1wdHlNYXApIHtcbiAgICAgIHRoaXMuX21hcCA9IG51bGw7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLy8gTk9URShiaWxseSkgVGhpcyB0aW1lb3V0IGlzIGEgaGFjayBmb3IgZGVhbGluZyB3aXRoIGFzeW5jIG5hdHVyZS5cbiAgICAvLyBPbmx5IGhlcmUgZm9yIGRlbW8gcHVycG9zZXMsIHNvIHdlJ2xsIGZpeCBsYXRlci5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBjb250YWluZXIgPSBET00ucXVlcnkoZWwpO1xuICAgICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGNvbnRhaW5lciwge1xuICAgICAgICB6b29tOiB0aGlzLl96b29tXG4gICAgICB9KTtcblxuICAgICAgLy8gQXBwbHkgb3VyIHNlYXJjaCBkYXRhIHRvIG91ciBHb29nbGVNYXBcbiAgICAgIGxldCBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG5cbiAgICAgIGlmIChtYXBEYXRhICYmIG1hcERhdGEubWFwTWFya2Vycy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2VkTWFya2VycyA9IHRoaXMuX2NvbGxhcHNlUGluc1xuICAgICAgICAgID8gdGhpcy5fY29sbGFwc2VNYXJrZXJzKG1hcERhdGEubWFwTWFya2VycylcbiAgICAgICAgICA6IG1hcERhdGEubWFwTWFya2VycztcbiAgICAgICAgbGV0IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MgPSBHb29nbGVNYXBNYXJrZXJDb25maWcuZnJvbShcbiAgICAgICAgICBjb2xsYXBzZWRNYXJrZXJzLFxuICAgICAgICAgIHRoaXMuX3BpbkNvbmZpZyxcbiAgICAgICAgICB0aGlzLm1hcCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnb29nbGVNYXBNYXJrZXJDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoZ29vZ2xlTWFwTWFya2VyQ29uZmlnc1tpXSk7XG4gICAgICAgICAgaWYgKHRoaXMuX29uUGluQ2xpY2spIHtcbiAgICAgICAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9vblBpbkNsaWNrKGNvbGxhcHNlZE1hcmtlcnNbaV0uaXRlbSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib3VuZHMuZXh0ZW5kKG1hcmtlci5wb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1hcC5maXRCb3VuZHMoYm91bmRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWFwLnNldENlbnRlcihuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHRoaXMuX2RlZmF1bHRQb3NpdGlvbi5sYXQsIHRoaXMuX2RlZmF1bHRQb3NpdGlvbi5sbmcpKTtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuICB9XG59XG5cbi8vIFRPRE8oYmlsbHkpIE1vdmUgdG8gb3duIGNsYXNzXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwTWFya2VyQ29uZmlnIHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgZ29vZ2xlIG1hcCwgdGhhdCB0aGUgbWFya2VyIGlzIGFwcGVuZGVkIHRvXG4gICAgICogQHR5cGUge0dvb2dsZU1hcH1cbiAgICAgKi9cbiAgICB0aGlzLm1hcCA9IG9wdHMubWFwIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb29yZGluYXRlcyBvZiB0aGUgbWFya2VyIChsYXQvbG5nKVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5wb3NpdGlvbiA9IG9wdHMucG9zaXRpb24gfHwge1xuICAgICAgbGF0OiB1bmRlZmluZWQsXG4gICAgICBsbmc6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcHJvcGVydGllcy9zZXR0aW5ncyBvZiB0aGUgaWNvbiB1c2VkIGZvciB0aGUgbWFya2VyXG4gICAgICogZS5nLiB7XG4gICAgICogICAgICAgIGFuY2hvcjogeyB4OiAwLCB5OiAwIH1cbiAgICAgKiAgICAgICAgdXJsOiAncGF0aC90by91cmwuanBnJ1xuICAgICAqICAgICAgICBzY2FsZWRTaXplOiB7IHc6IDAsIGg6IDAgfVxuICAgICAqICAgICAgIH1cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5pY29uID0gb3B0cy5pY29uIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCBvZiB0aGUgbWFya2VyIHRvIHVzZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbCA9IG9wdHMubGFiZWwgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYW4gYXJyYXkgb2YgbWFya2VyIGNvbmZpZ3NcbiAgICogQHBhcmFtIHtHb29nbGVNYXBNYXJrZXJDb25maWdbXX0gZ29vZ2xlTWFwTWFya2VyQ29uZmlnc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplIChnb29nbGVNYXBNYXJrZXJDb25maWdzKSB7XG4gICAgbGV0IHNlcmlhbGl6ZWRNYXJrZXJzID0gW107XG4gICAgZ29vZ2xlTWFwTWFya2VyQ29uZmlncy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIHNlcmlhbGl6ZWRNYXJrZXJzLnB1c2goYG1hcmtlcnM9bGFiZWw6JHttYXJrZXIubGFiZWx9fCR7bWFya2VyLnBvc2l0aW9uLmxhdH0sJHttYXJrZXIucG9zaXRpb24ubG5nfWApO1xuICAgIH0pO1xuICAgIHJldHVybiBzZXJpYWxpemVkTWFya2Vycy5qb2luKCcmJyk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIHN0b3JhZ2UgZGF0YSBtb2RlbCBvZiBtYXJrZXJzIGludG8gR29vZ2xlQVBJTWFya2VyXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IG1hcmtlcnMgVGhlIGRhdGEgb2YgdGhlIG1hcmtlclxuICAgKiBAcGFyYW0geyhPYmplY3R8ZnVuY3Rpb24pfSBwaW5Db25maWcgVGhlIGNvbmZpZ3VyYXRpb24gdG8gYXBwbHkgdG8gdGhlIG1hcmtlclxuICAgKiBAcGFyYW0ge0dvb2dsZU1hcH0gbWFwIHJlZmVyZW5jZSB0byB0aGUgZ29vZ2xlIG1hcCB0byBhcHBseSB0aGUgbWFya2VyIHRvXG4gICAqIEByZXR1cm5zIHtHb29nbGVNYXBNYXJrZXJDb25maWdbXX1cbiAgICovXG4gIHN0YXRpYyBmcm9tIChtYXJrZXJzLCBwaW5Db25maWcsIG1hcCkge1xuICAgIGxldCBnb29nbGVNYXBNYXJrZXJDb25maWdzID0gW107XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1hcmtlcnMpKSB7XG4gICAgICBtYXJrZXJzID0gW21hcmtlcnNdO1xuICAgIH1cblxuICAgIG1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICAvLyBTdXBwb3J0IGNvbmZpZ3VyYXRpb24gYXMgYSBmdW5jdGlvblxuICAgICAgbGV0IHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZztcbiAgICAgIGlmICh0eXBlb2YgcGluQ29uZmlnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZyhcbiAgICAgICAgICBtYXJrZXIuaXRlbSxcbiAgICAgICAgICBNYXBQcm92aWRlci5ERUZBVUxUX1BJTl9DT05GSUcsXG4gICAgICAgICAgbWFya2VyKTtcbiAgICAgIH1cblxuICAgICAgLy8gVHJhbnNmb3JtIG91ciBDb25maWd1cmF0aW9uIE9iamVjdCBpbnRvIHRoZSBleHBlY3RlZFxuICAgICAgLy8gR29vZ2xlIEFQSSBmb3JtYXQuXG4gICAgICBsZXQgaWNvbiA9IHt9O1xuICAgICAgaWYgKHBpbkNvbmZpZ09iai5hbmNob3IpIHtcbiAgICAgICAgaWNvbi5hbmNob3IgPSBnb29nbGUubWFwcy5Qb2ludChwaW5Db25maWdPYmouYW5jaG9yLngsIHBpbkNvbmZpZ09iai5hbmNob3IueSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW5Db25maWdPYmouc2NhbGVkU2l6ZSkge1xuICAgICAgICBpY29uLnNjYWxlZFNpemUgPSBuZXcgZ29vZ2xlLm1hcHMuU2l6ZShwaW5Db25maWdPYmouc2NhbGVkU2l6ZS53LCBwaW5Db25maWdPYmouc2NhbGVkU2l6ZS5oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpbkNvbmZpZ09iai51cmwpIHtcbiAgICAgICAgaWNvbi51cmwgPSBwaW5Db25maWdPYmoudXJsO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluQ29uZmlnT2JqLnN2Zykge1xuICAgICAgICBpY29uLnVybCA9IGBkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwgJHtlbmNvZGVVUklDb21wb25lbnQocGluQ29uZmlnT2JqLnN2Zyl9YDtcbiAgICAgIH1cblxuICAgICAgbGV0IGxhYmVsO1xuICAgICAgaWYgKHBpbkNvbmZpZ09iai5sYWJlbCkge1xuICAgICAgICBsYWJlbCA9IHBpbkNvbmZpZ09iai5sYWJlbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhYmVsID0gbWFya2VyLmxhYmVsLnRvU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIE5PVEUoYmlsbHkpIEdvb2dsZSBtYXBzIGRvZXNuJ3QgaGFuZGxlIGVtcHR5IGljb24gb2JqZWN0cyBuaWNlbHlcbiAgICAgIC8vIE1ha2UgZ29vZ2xlIG1hcHMgaGFwcHkgaWYgbm8gc2V0dGluZ3MgZm9yIGljb24gYXJlIHByb3ZpZGVkO1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGljb24pLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpY29uID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBnb29nbGVNYXBNYXJrZXJDb25maWdzLnB1c2goXG4gICAgICAgIG5ldyBHb29nbGVNYXBNYXJrZXJDb25maWcoe1xuICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICBsYXQ6IG1hcmtlci5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxuZzogbWFya2VyLmxvbmdpdHVkZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaWNvbjogaWNvbixcbiAgICAgICAgICBsYWJlbDogbGFiZWxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZ29vZ2xlTWFwTWFya2VyQ29uZmlncztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTWFwQm94TWFwUHJvdmlkZXIgKi9cblxuaW1wb3J0IE1hcFByb3ZpZGVyIGZyb20gJy4vbWFwcHJvdmlkZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi8uLi9kb20vZG9tJztcblxuLyogZ2xvYmFsIG1hcGJveGdsICovXG5cbi8qKlxuICogTWFwQm94TWFwUHJvdmlkZXIgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgYSBNYXBQcm92aWRlclxuICogdGhhdCBoYW5kbGVzIHRoZSBpbnRlZ3JhdGlvbiB3aXRoIHRoZSB0aGlyZCBwYXJ0eSBBUEkgdG8gZXhwb3NlIG1hcHMuXG4gKiBAZXh0ZW5kcyBNYXBQcm92aWRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBCb3hNYXBQcm92aWRlciBleHRlbmRzIE1hcFByb3ZpZGVyIHtcbiAgLyoqXG4gICAqIExvYWQgdGhlIGV4dGVybmFsIEpTIExpYnJhcnlcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25Mb2FkIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRvIGludm9rZSBvbmNlIHRoZSBKUyBpcyBsb2FkZWQuXG4gICAqL1xuICBsb2FkSlMgKG9uTG9hZCkge1xuICAgIGxldCBzY3JpcHQgPSBET00uY3JlYXRlRWwoJ3NjcmlwdCcsIHtcbiAgICAgIGlkOiAneWV4dC1tYXAtanMnLFxuICAgICAgb25sb2FkOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgbWFwYm94Z2wuYWNjZXNzVG9rZW4gPSB0aGlzLl9hcGlLZXk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvbkxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBvbkxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fb25Mb2FkZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLl9vbkxvYWRlZCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzcmM6ICdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MC40NC4xL21hcGJveC1nbC5qcydcbiAgICB9KTtcblxuICAgIGxldCBjc3MgPSBET00uY3JlYXRlRWwoJ2xpbmsnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWNzcycsXG4gICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgIGhyZWY6ICdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MC40NC4xL21hcGJveC1nbC5jc3MnXG4gICAgfSk7XG5cbiAgICBET00uYXBwZW5kKCdib2R5JywgY3NzKTtcbiAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgfVxuXG4gIGluaXQgKGVsLCBtYXBEYXRhKSB7XG4gICAgaWYgKCghbWFwRGF0YSB8fCBtYXBEYXRhLm1hcE1hcmtlcnMubGVuZ3RoIDw9IDApICYmICF0aGlzLl9zaG93RW1wdHlNYXApIHtcbiAgICAgIHRoaXMuX21hcCA9IG51bGw7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBsZXQgY29udGFpbmVyID0gRE9NLnF1ZXJ5KGVsKTtcbiAgICB0aGlzLl9tYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgem9vbTogdGhpcy5fem9vbSxcbiAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXY5JyxcbiAgICAgIGNlbnRlcjogdGhpcy5nZXRDZW50ZXJNYXJrZXIobWFwRGF0YSlcbiAgICB9KTtcblxuICAgIGlmIChtYXBEYXRhKSB7XG4gICAgICBjb25zdCBjb2xsYXBzZWRNYXJrZXJzID0gdGhpcy5fY29sbGFwc2VQaW5zXG4gICAgICAgID8gdGhpcy5fY29sbGFwc2VNYXJrZXJzKG1hcERhdGEubWFwTWFya2VycylcbiAgICAgICAgOiBtYXBEYXRhLm1hcE1hcmtlcnM7XG4gICAgICBjb25zdCBtYXBib3hNYXBNYXJrZXJDb25maWdzID0gTWFwQm94TWFya2VyQ29uZmlnLmZyb20oXG4gICAgICAgIGNvbGxhcHNlZE1hcmtlcnMsXG4gICAgICAgIHRoaXMuX3BpbkNvbmZpZyxcbiAgICAgICAgdGhpcy5fbWFwKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXBib3hNYXBNYXJrZXJDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB3cmFwcGVyID0gbWFwYm94TWFwTWFya2VyQ29uZmlnc1tpXS53cmFwcGVyO1xuICAgICAgICBsZXQgY29vcmRzID0gbmV3IG1hcGJveGdsLkxuZ0xhdChcbiAgICAgICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzW2ldLnBvc2l0aW9uLmxvbmdpdHVkZSxcbiAgICAgICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzW2ldLnBvc2l0aW9uLmxhdGl0dWRlKTtcbiAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBtYXBib3hnbC5NYXJrZXIod3JhcHBlcikuc2V0TG5nTGF0KGNvb3Jkcyk7XG4gICAgICAgIG1hcmtlci5hZGRUbyh0aGlzLl9tYXApO1xuICAgICAgICBpZiAodGhpcy5fb25QaW5DbGljaykge1xuICAgICAgICAgIG1hcmtlci5nZXRFbGVtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9vblBpbkNsaWNrKGNvbGxhcHNlZE1hcmtlcnNbaV0uaXRlbSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2VudGVyTWFya2VyIChtYXBEYXRhKSB7XG4gICAgcmV0dXJuIG1hcERhdGEgJiYgbWFwRGF0YS5tYXBDZW50ZXIgJiYgbWFwRGF0YS5tYXBDZW50ZXIubG9uZ2l0dWRlICYmIG1hcERhdGEubWFwQ2VudGVyLmxhdGl0dWRlXG4gICAgICA/IFttYXBEYXRhLm1hcENlbnRlci5sb25naXR1ZGUsIG1hcERhdGEubWFwQ2VudGVyLmxhdGl0dWRlXVxuICAgICAgOiB7IGxuZzogdGhpcy5fZGVmYXVsdFBvc2l0aW9uLmxuZywgbGF0OiB0aGlzLl9kZWZhdWx0UG9zaXRpb24ubGF0IH07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hcEJveE1hcmtlckNvbmZpZyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIG1hcGJveCBtYXAsIHRoYXQgdGhlIG1hcmtlciBpcyBhcHBlbmRlZCB0b1xuICAgICAqIEB0eXBlIHtNYXBCb3h9XG4gICAgICovXG4gICAgdGhpcy5tYXAgPSBvcHRzLm1hcCB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1hcmtlciAobGF0L2xuZylcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMucG9zaXRpb24gPSBvcHRzLnBvc2l0aW9uIHx8IHtcbiAgICAgIGxhdGl0dWRlOiB1bmRlZmluZWQsXG4gICAgICBsb25naXR1ZGU6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaHRtbCBlbGVtZW50IHRvIGJlIHVzZWQgYXMgdGhlIG1hcCBtYXJrZXJcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMud3JhcHBlciA9IG9wdHMud3JhcHBlciB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgb2YgdGhlIG1hcmtlciB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWwgPSBvcHRzLmxhYmVsIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB1cmwgb2YgdGhlIHBpbiBmb3IgdGhlIHN0YXRpYyBtYXBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc3RhdGljTWFwUGluID0gb3B0cy5zdGF0aWNNYXBQaW4gfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYW4gYXJyYXkgb2YgbWFya2VyIGNvbmZpZ3NcbiAgICogQHBhcmFtIHtNYXBCb3hNYXJrZXJDb25maWdbXX0gbWFwYm94TWFwTWFya2VyQ29uZmlnc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplIChtYXBib3hNYXBNYXJrZXJDb25maWdzKSB7XG4gICAgbGV0IHNlcmlhbGl6ZWRNYXJrZXJzID0gW107XG4gICAgbWFwYm94TWFwTWFya2VyQ29uZmlncy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIGlmIChtYXJrZXIuc3RhdGljTWFwUGluKSB7XG4gICAgICAgIHNlcmlhbGl6ZWRNYXJrZXJzLnB1c2goYHVybC0ke21hcmtlci5zdGF0aWNNYXBQaW59KCR7bWFya2VyLnBvc2l0aW9uLmxvbmdpdHVkZX0sJHttYXJrZXIucG9zaXRpb24ubGF0aXR1ZGV9KWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VyaWFsaXplZE1hcmtlcnMucHVzaChgcGluLXMtJHttYXJrZXIubGFiZWx9KCR7bWFya2VyLnBvc2l0aW9uLmxvbmdpdHVkZX0sJHttYXJrZXIucG9zaXRpb24ubGF0aXR1ZGV9KWApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZXJpYWxpemVkTWFya2Vycy5qb2luKCcsJyk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIHN0b3JhZ2UgZGF0YSBtb2RlbCBvZiBtYXJrZXJzIGludG8gR29vZ2xlQVBJTWFya2VyXG4gICAqIEBwYXJhbSB7TWFwQm94fSBBIHJlZmVyZW5jZSB0byB0aGUgZ29vZ2xlIG1hcCB0byBhcHBseSB0aGUgbWFya2VyIHRvXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IG1hcmtlcnMgVGhlIGRhdGEgb2YgdGhlIG1hcmtlclxuICAgKiBAcGFyYW0ge09iamVjdH0gcGluQ29uZmlnIFRoZSBjb25maWd1cmF0aW9uIHRvIGFwcGx5IHRvIHRoZSBtYXJrZXJcbiAgICogQHJldHVybnMge01hcEJveE1hcmtlckNvbmZpZ1tdfVxuICAgKi9cbiAgc3RhdGljIGZyb20gKG1hcmtlcnMsIHBpbkNvbmZpZywgbWFwKSB7XG4gICAgbGV0IG1hcGJveE1hcE1hcmtlckNvbmZpZ3MgPSBbXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobWFya2VycykpIHtcbiAgICAgIG1hcmtlcnMgPSBbbWFya2Vyc107XG4gICAgfVxuXG4gICAgbWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIC8vIFN1cHBvcnQgY29uZmlndXJhdGlvbiBhcyBhIGZ1bmN0aW9uXG4gICAgICBsZXQgcGluQ29uZmlnT2JqID0gcGluQ29uZmlnO1xuICAgICAgaWYgKHR5cGVvZiBwaW5Db25maWcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcGluQ29uZmlnT2JqID0gcGluQ29uZmlnKFxuICAgICAgICAgIG1hcmtlci5pdGVtLFxuICAgICAgICAgIE1hcFByb3ZpZGVyLkRFRkFVTFRfUElOX0NPTkZJRyxcbiAgICAgICAgICBtYXJrZXIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB3cmFwcGVyID0gcGluQ29uZmlnT2JqLndyYXBwZXIgPyBwaW5Db25maWdPYmoud3JhcHBlciA6IG51bGw7XG4gICAgICBjb25zdCBzdGF0aWNNYXBQaW4gPSBwaW5Db25maWdPYmouc3RhdGljTWFwUGluID8gcGluQ29uZmlnT2JqLnN0YXRpY01hcFBpbiA6IG51bGw7XG5cbiAgICAgIG1hcGJveE1hcE1hcmtlckNvbmZpZ3MucHVzaChcbiAgICAgICAgbmV3IE1hcEJveE1hcmtlckNvbmZpZyh7XG4gICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIGxhdGl0dWRlOiBtYXJrZXIubGF0aXR1ZGUsXG4gICAgICAgICAgICBsb25naXR1ZGU6IG1hcmtlci5sb25naXR1ZGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHdyYXBwZXI6IHdyYXBwZXIsXG4gICAgICAgICAgbGFiZWw6IG1hcmtlci5sYWJlbCxcbiAgICAgICAgICBzdGF0aWNNYXBQaW46IHN0YXRpY01hcFBpblxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtYXBib3hNYXBNYXJrZXJDb25maWdzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNYXBDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5pbXBvcnQgR29vZ2xlTWFwUHJvdmlkZXIgZnJvbSAnLi9wcm92aWRlcnMvZ29vZ2xlbWFwcHJvdmlkZXInO1xuaW1wb3J0IE1hcEJveE1hcFByb3ZpZGVyIGZyb20gJy4vcHJvdmlkZXJzL21hcGJveG1hcHByb3ZpZGVyJztcblxuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbmNvbnN0IFByb3ZpZGVyVHlwZXMgPSB7XG4gICdnb29nbGUnOiBHb29nbGVNYXBQcm92aWRlcixcbiAgJ21hcGJveCc6IE1hcEJveE1hcFByb3ZpZGVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9LCBzeXN0ZW1PcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzLCBzeXN0ZW1PcHRzKTtcblxuICAgIC8qKlxuICAgICAqIEJpbmQgdGhpcyBjb21wb25lbnQgdG8gbGlzdGVuIHRvIHRoZSBzdG9yYWdlIGJhc2VkIG9uIHRoaXMga2V5XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFM7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhbGlhc2VkIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSB0eXBlIG9mIG1hcCBwcm92aWRlciB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX21hcFByb3ZpZGVyID0gb3B0cy5tYXBQcm92aWRlcjtcbiAgICBpZiAoIXRoaXMuX21hcFByb3ZpZGVyIHx8ICEodGhpcy5fbWFwUHJvdmlkZXIudG9Mb3dlckNhc2UoKSBpbiBQcm92aWRlclR5cGVzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXBDb21wb25lbnQ6IEludmFsaWQgTWFwIFByb3ZpZGVyOyBtdXN0IGJlIGBnb29nbGVgIG9yIGBtYXBCb3hgJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gYW4gaW5zdGFuY2Ugb2YgdGhlIHtNYXBQcm92aWRlcn0gdGhhdCdzIGNvbnN0cnVjdGVkXG4gICAgICogQHR5cGUge01hcFByb3ZpZGVyfVxuICAgICAqL1xuICAgIHRoaXMuX21hcCA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTWFwJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9tYXAnO1xuICB9XG5cbiAgLy8gVE9ETyhiaWxseSkgTWFrZSBQcm92aWRlclR5cGVzIGEgZmFjdG9yeSBjbGFzc1xuICBnZXRQcm92aWRlckluc3RhbmNlICh0eXBlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm92aWRlclR5cGVzW3R5cGUudG9Mb3dlckNhc2UoKV0odGhpcy5fY29uZmlnKTtcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICB0aGlzLl9tYXAgPSB0aGlzLmdldFByb3ZpZGVySW5zdGFuY2UodGhpcy5fbWFwUHJvdmlkZXIpO1xuICAgIHRoaXMuX21hcC5sb2FkSlMoKTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIHRoaXMuX21hcC5vbkxvYWRlZCgoKSA9PiB7XG4gICAgICB0aGlzLl9tYXAuaW5pdCh0aGlzLl9jb250YWluZXIsIHRoaXMuZ2V0U3RhdGUoJ21hcCcpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhLCB2YWwpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoZGF0YSwgdmFsKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVzdWx0c0NvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vbG9jYXRpb25yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL2V2ZW50cmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcGVvcGxlcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IE1hcENvbXBvbmVudCBmcm9tICcuLi9tYXAvbWFwY29tcG9uZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFNlYXJjaFN0YXRlcyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5cbmNvbnN0IFJlc3VsdFR5cGUgPSB7XG4gIEVWRU5UOiAnZXZlbnQnLFxuICBMT0NBVElPTjogJ2xvY2F0aW9uJyxcbiAgUEVPUExFOiAncGVvcGxlJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0c0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSwgc3lzdGVtQ29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcsIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiB2ZXJ0aWNhbENvbmZpZ0lkIHVzZWQgZm9yIGFuYWx5dGljcyBhbmQgcGFzc2VkIHRvIGNoaWxkcmVuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsQ29uZmlnSWQgPSBjb25maWcudmVydGljYWxDb25maWdJZDtcblxuICAgIC8qKlxuICAgICAqIGlzVW5pdmVyc2FsIGlzIHNldCB0byB0cnVlIGlmIHRoaXMgY29tcG9uZW50IGlzIGFkZGVkIGJ5IHRoZSBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50XG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9pc1VuaXZlcnNhbCA9IGNvbmZpZy5pc1VuaXZlcnNhbCB8fCBmYWxzZTtcblxuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTO1xuICAgIHRoaXMuX2l0ZW1Db25maWcgPSB7XG4gICAgICBnbG9iYWw6IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIFtFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50LnR5cGVdOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH0sXG4gICAgICBbTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlXToge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9LFxuICAgICAgW1Blb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50LnR5cGVdOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGNvbmZpZy5yZW5kZXJJdGVtID09PSB1bmRlZmluZWQgJiYgY29uZmlnLl9wYXJlbnRPcHRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbmZpZy5yZW5kZXJJdGVtID0gY29uZmlnLl9wYXJlbnRPcHRzLnJlbmRlckl0ZW07XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5pdGVtVGVtcGxhdGUgPT09IHVuZGVmaW5lZCAmJiBjb25maWcuX3BhcmVudE9wdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uZmlnLml0ZW1UZW1wbGF0ZSA9IGNvbmZpZy5fcGFyZW50T3B0cy5pdGVtVGVtcGxhdGU7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5saW1pdCkge1xuICAgICAgY29uc3QgbGltaXQgPSBjb25maWcubGltaXQ7XG4gICAgICBpZiAodHlwZW9mIGxpbWl0ICE9PSAnbnVtYmVyJyB8fCBsaW1pdCA8IDEgfHwgbGltaXQgPiA1MCkge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCdTZWFyY2ggTGltaXQgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDUwJywgJ1ZlcnRpY2FsUmVzdWx0cycpO1xuICAgICAgfVxuICAgICAgdGhpcy5jb3JlLnNldFNlYXJjaExpbWl0KGxpbWl0KTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbmZpZ3VyZUl0ZW0oe1xuICAgICAgcmVuZGVyOiBjb25maWcucmVuZGVySXRlbSxcbiAgICAgIHRlbXBsYXRlOiBjb25maWcuaXRlbVRlbXBsYXRlXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdXJsIHRvIHRoZSB1bml2ZXJzYWwgcGFnZSBmb3IgdGhlIG5vIHJlc3VsdHMgcGFnZSB0byBsaW5rIGJhY2sgdG8gd2l0aCBjdXJyZW50IHF1ZXJ5XG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMuX3VuaXZlcnNhbFVybCA9IGNvbmZpZy51bml2ZXJzYWxVcmw7XG4gIH1cblxuICBtb3VudCAoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZ2V0U3RhdGUoKSkubGVuZ3RoID4gMCkge1xuICAgICAgc3VwZXIubW91bnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZHVwbGljYXRlc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBkYXRhLnJlc3VsdHMgfHwgW107XG4gICAgY29uc3Qgc2VhcmNoU3RhdGUgPSBkYXRhLnNlYXJjaFN0YXRlIHx8IFNlYXJjaFN0YXRlcy5QUkVfU0VBUkNIO1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHsgcmVzdWx0czogW10gfSwgZGF0YSwge1xuICAgICAgaXNQcmVTZWFyY2g6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuUFJFX1NFQVJDSCxcbiAgICAgIGlzU2VhcmNoTG9hZGluZzogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyxcbiAgICAgIGlzU2VhcmNoQ29tcGxldGU6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFLFxuICAgICAgaW5jbHVkZU1hcDogdGhpcy5fY29uZmlnLmluY2x1ZGVNYXAsXG4gICAgICBtYXBDb25maWc6IHRoaXMuX2NvbmZpZy5tYXBDb25maWcsXG4gICAgICBldmVudE9wdGlvbnM6IHRoaXMuZXZlbnRPcHRpb25zKCksXG4gICAgICB1bml2ZXJzYWxVcmw6IHRoaXMuX3VuaXZlcnNhbFVybCA/IHRoaXMuX3VuaXZlcnNhbFVybCArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggOiAnJyxcbiAgICAgIHNob3dOb1Jlc3VsdHM6IHJlc3VsdHMubGVuZ3RoID09PSAwLFxuICAgICAgcXVlcnk6IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKVxuICAgIH0pLCB2YWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIGhlbHBlciB0byBjb25zdHJ1Y3QgdGhlIGV2ZW50T3B0aW9ucyBvYmplY3QgZm9yIHRoZSB2aWV3IGFsbCBsaW5rXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBldmVudE9wdGlvbnMgKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiB0aGlzLl92ZXJ0aWNhbENvbmZpZ0lkXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnVmVydGljYWxSZXN1bHRzJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9yZXN1bHRzJztcbiAgfVxuXG4gIGNvbmZpZ3VyZUl0ZW0gKGNvbmZpZykge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5faXRlbUNvbmZpZy5nbG9iYWwucmVuZGVyID0gY29uZmlnLnJlbmRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbmZpZy5yZW5kZXIpIHtcbiAgICAgICAgdGhpcy5zZXRJdGVtUmVuZGVyKGtleSwgY29uZmlnLnJlbmRlcltrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2l0ZW1Db25maWcuZ2xvYmFsLnRlbXBsYXRlID0gY29uZmlnLnRlbXBsYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29uZmlnLnRlbXBsYXRlKSB7XG4gICAgICAgIHRoaXMuc2V0SXRlbVRlbXBsYXRlKGtleSwgY29uZmlnLnRlbXBsYXRlW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldEl0ZW1UZW1wbGF0ZSAodHlwZSwgdGVtcGxhdGUpIHtcbiAgICBsZXQgY2xhenogPSB0aGlzLmdldEl0ZW1Db21wb25lbnQodHlwZSk7XG4gICAgdGhpcy5faXRlbUNvbmZpZ1tjbGF6ei50eXBlXS50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICB9XG5cbiAgc2V0SXRlbVJlbmRlciAodHlwZSwgcmVuZGVyKSB7XG4gICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KHR5cGUpO1xuICAgIHRoaXMuX2l0ZW1Db25maWdbY2xhenoudHlwZV0ucmVuZGVyID0gcmVuZGVyO1xuICB9XG5cbiAgZ2V0SXRlbUNvbXBvbmVudCAodHlwZSkge1xuICAgIGxldCBjb21wID0gUmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFJlc3VsdFR5cGUuRVZFTlQ6XG4gICAgICAgIGNvbXAgPSBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUmVzdWx0VHlwZS5MT0NBVElPTjpcbiAgICAgICAgY29tcCA9IExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSZXN1bHRUeXBlLlBFT1BMRTpcbiAgICAgICAgY29tcCA9IFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcDtcbiAgfVxuXG4gIGFkZENoaWxkIChkYXRhLCB0eXBlLCBvcHRzKSB7XG4gICAgLy8gVE9ETyhiaWxseSkgUmVmYWN0b3IgdGhlIHdheSBjb25maWd1cmF0aW9uIGFuZCBkYXRhIGZsb3dzXG4gICAgLy8gdGhyb3VnaCB0b3AgbGV2ZWwgY29tcG9uZW50cyB0byBjaGlsZCBjb21wb25lbnRzLlxuICAgIGlmICh0eXBlID09PSBSZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlKSB7XG4gICAgICBsZXQgY2xhenogPSB0aGlzLmdldEl0ZW1Db21wb25lbnQoZGF0YS50eXBlKTtcbiAgICAgIGlmIChjbGF6eikge1xuICAgICAgICB0eXBlID0gY2xhenoudHlwZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IE1hcENvbXBvbmVudC50eXBlKSB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICBtYXA6IGRhdGFcbiAgICAgIH07XG4gICAgICBjb25zdCBuZXdPcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLm1hcENvbmZpZywgb3B0cyk7XG4gICAgICByZXR1cm4gc3VwZXIuYWRkQ2hpbGQoZGF0YSwgdHlwZSwgbmV3T3B0cyk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdGhlIHByb3BlciBpdGVtIHJlbmRlcnMgdG8gdGhlIHRoZSBjb21wb25lbnRzXG4gICAgLy8gaGF2ZSBqdXN0IGJlZW4gY29uc3RydWN0ZWQuIFByaW9yaXRpemUgZ2xvYmFsIG92ZXIgaW5kaXZpZHVhbCBpdGVtcy5cbiAgICBsZXQgY29tcCA9IHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIE9iamVjdC5hc3NpZ24ob3B0cywge1xuICAgICAgdmVydGljYWxDb25maWdJZDogdGhpcy5fdmVydGljYWxDb25maWdJZCxcbiAgICAgIGlzVW5pdmVyc2FsOiB0aGlzLl9pc1VuaXZlcnNhbFxuICAgIH0pKTtcbiAgICBsZXQgZ2xvYmFsQ29uZmlnID0gdGhpcy5faXRlbUNvbmZpZy5nbG9iYWw7XG4gICAgbGV0IGl0ZW1Db25maWcgPSB0aGlzLl9pdGVtQ29uZmlnW2NvbXAudHlwZV07XG4gICAgbGV0IGhhc0dsb2JhbFJlbmRlciA9IHR5cGVvZiBnbG9iYWxDb25maWcucmVuZGVyID09PSAnZnVuY3Rpb24nO1xuICAgIGxldCBoYXNHbG9iYWxUZW1wbGF0ZSA9IHR5cGVvZiBnbG9iYWxDb25maWcudGVtcGxhdGUgPT09ICdzdHJpbmcnO1xuXG4gICAgaWYgKGhhc0dsb2JhbFJlbmRlcikge1xuICAgICAgY29tcC5zZXRSZW5kZXIoZ2xvYmFsQ29uZmlnLnJlbmRlcik7XG4gICAgfVxuXG4gICAgaWYgKGhhc0dsb2JhbFRlbXBsYXRlKSB7XG4gICAgICBjb21wLnNldFRlbXBsYXRlKGdsb2JhbENvbmZpZy50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKCFpdGVtQ29uZmlnKSB7XG4gICAgICByZXR1cm4gY29tcDtcbiAgICB9XG5cbiAgICBpZiAoIWhhc0dsb2JhbFJlbmRlciAmJiBpdGVtQ29uZmlnLnJlbmRlcikge1xuICAgICAgY29tcC5zZXRSZW5kZXIoaXRlbUNvbmZpZy5yZW5kZXIpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHRlbXBsYXRlIHNwZWNpZmljIHNpdHVhdGlvblxuICAgIGlmICghaGFzR2xvYmFsVGVtcGxhdGUgJiYgaXRlbUNvbmZpZy50ZW1wbGF0ZSkge1xuICAgICAgY29tcC5zZXRUZW1wbGF0ZShpdGVtQ29uZmlnLnRlbXBsYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXA7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEFjY29yZGlvblJlc3VsdHNDb21wb25lbnQgKi9cbmltcG9ydCBSZXN1bHRzQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnLCBzeXN0ZW1Db25maWcpO1xuXG4gICAgLyoqXG4gICAgICogYmFzZSBzZWxlY3RvciB0byB1c2Ugd2hlbiBmaW5kaW5nIERPTSB0YXJnZXRzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9zZWxlY3RvckJhc2UgPSBjb25maWcuc2VsZWN0b3JCYXNlIHx8ICcuanMteXh0LUFjY29yZGlvblJlc3VsdCc7XG5cbiAgICAvKipcbiAgICAgKiBjb2xsYXBzZWQgc3RhdGUgY2xhc3NcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuY29sbGFwc2VkQ2xhc3MgPSBjb25maWcuY29sbGFwc2VkQ2xhc3MgfHwgJ2lzLWNvbGxhcHNlZCc7XG5cbiAgICAvKipcbiAgICAgKiB2ZXJ0aWNhbCBjb25maWcgaWQgaXMgcmVxdWlyZWQgZm9yIGFuYWx5dGljc1xuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnZlcnRpY2FsQ29uZmlnSWQgPSBjb25maWcudmVydGljYWxDb25maWdJZCB8fCBjb25maWcuX3BhcmVudE9wdHMudmVydGljYWxDb25maWdJZCB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIHRoZSBjb21wb25lbnQgdHlwZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdBY2NvcmRpb25SZXN1bHRzJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9yZXN1bHRzYWNjb3JkaW9uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBvdmVycmlkZXMgb25Nb3VudCB0byBhZGQgYmluZGluZ3MgdG8gY2hhbmdlIHRoZSBoZWlnaHQgb24gY2xpY2tcbiAgICogQHJldHVybnMge0FjY29yZGlvblJlc3VsdHNDb21wb25lbnR9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgb25Nb3VudCAoKSB7XG4gICAgc3VwZXIub25Nb3VudCgpO1xuXG4gICAgY29uc3QgYWNjb3JkaW9uRWxzID0gRE9NLnF1ZXJ5QWxsKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fc2VsZWN0b3JCYXNlKTtcbiAgICBhY2NvcmRpb25FbHMuZm9yRWFjaCgoYWNjb3JkaW9uRWwpID0+IHtcbiAgICAgIGNvbnN0IHRvZ2dsZUVsID0gRE9NLnF1ZXJ5KGFjY29yZGlvbkVsLCB0aGlzLnRvZ2dsZVNlbGVjdG9yKCkpO1xuICAgICAgY29uc3QgY29udGVudEVsID0gRE9NLnF1ZXJ5KGFjY29yZGlvbkVsLCB0aGlzLmJvZHlTZWxlY3RvcigpKTtcbiAgICAgIHRoaXMuY2hhbmdlSGVpZ2h0KGNvbnRlbnRFbCwgYWNjb3JkaW9uRWwpO1xuICAgICAgdG9nZ2xlRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2soYWNjb3JkaW9uRWwsIHRvZ2dsZUVsLCBjb250ZW50RWwpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIG1vZGlmaWVyOiB0aGlzLnZlcnRpY2FsQ29uZmlnSWRcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogY2xpY2sgaGFuZGxlciBmb3IgdGhlIGFjY29yZGlvbiB0b2dnbGUgYnV0dG9uXG4gICAqIEBwYXJhbSB3cmFwcGVyRWwge0hUTUxFbGVtZW50fSB0aGUgdG9nZ2xlIGNvbnRhaW5lclxuICAgKiBAcGFyYW0gdG9nZ2xlRWwge0hUTUxFbGVtZW50fSB0aGUgYnV0dG9uXG4gICAqIEBwYXJhbSBjb250ZW50RWwge0hUTUxFbGVtZW50fSB0aGUgdG9nZ2xlIHRhcmdldFxuICAgKi9cbiAgaGFuZGxlQ2xpY2sgKHdyYXBwZXJFbCwgdG9nZ2xlRWwsIGNvbnRlbnRFbCkge1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEFuYWx5dGljc0V2ZW50KHRoaXMuaXNDb2xsYXBzZWQod3JhcHBlckVsKSA/ICdST1dfRVhQQU5EJyA6ICdST1dfQ09MTEFQU0UnKVxuICAgICAgLmFkZE9wdGlvbnMoe1xuICAgICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiB0aGlzLnZlcnRpY2FsQ29uZmlnSWQsXG4gICAgICAgIGVudGl0eUlkOiB0b2dnbGVFbC5kYXRhc2V0LmVudGl0eUlkXG4gICAgICB9KTtcbiAgICB3cmFwcGVyRWwuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLmNvbGxhcHNlZENsYXNzKTtcbiAgICB0aGlzLmNoYW5nZUhlaWdodChjb250ZW50RWwsIHdyYXBwZXJFbCk7XG4gICAgdG9nZ2xlRWwuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdGhpcy5pc0NvbGxhcHNlZCh3cmFwcGVyRWwpID8gJ2ZhbHNlJyA6ICd0cnVlJyk7XG4gICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlci5yZXBvcnQoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdHJ1ZSBpZiB0aGUgZWxlbWVudCBpcyBjdXJyZW50bHkgY29sbGFwc2VkXG4gICAqIEBwYXJhbSB3cmFwcGVyRWwge0hUTUxFbGVtZW50fSB0aGUgdG9nZ2xlIGNvbnRhaW5lclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzQ29sbGFwc2VkICh3cmFwcGVyRWwpIHtcbiAgICBpZiAoIXdyYXBwZXJFbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB3cmFwcGVyRWwuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY29sbGFwc2VkQ2xhc3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIHRvZ2dsZXMgdGhlIGhlaWdodCBiZXR3ZWVuIDAgYW5kIHRoZSBjb250ZW50IGhlaWdodCBmb3Igc21vb3RoIGFuaW1hdGlvblxuICAgKiBAcGFyYW0gdGFyZ2V0RWwge0hUTUxFbGVtZW50fVxuICAgKiBAcGFyYW0gd3JhcHBlckVsIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIGNoYW5nZUhlaWdodCAodGFyZ2V0RWwsIHdyYXBwZXJFbCkge1xuICAgIHRhcmdldEVsLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuaXNDb2xsYXBzZWQod3JhcHBlckVsKSA/IDAgOiB0YXJnZXRFbC5zY3JvbGxIZWlnaHR9cHhgO1xuICB9XG5cbiAgLyoqXG4gICAqIGhlbHBlciBmb3IgY29tcG9zaW5nIGNoaWxkIGVsZW1lbnQgc2VsZWN0b3JzXG4gICAqIEBwYXJhbSBjaGlsZCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgYnVpbGRTZWxlY3RvciAoY2hpbGQpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5fc2VsZWN0b3JCYXNlfSR7Y2hpbGR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBoZWxwZXIgZm9yIHRoZSB0b2dnbGUgYnV0dG9uIHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICB0b2dnbGVTZWxlY3RvciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRTZWxlY3RvcignLXRvZ2dsZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIGhlbHBlciBmb3IgdGhlIGNvbnRlbnQgZWxlbWVudCBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgYm9keVNlbGVjdG9yICgpIHtcbiAgICByZXR1cm4gdGhpcy5idWlsZFNlbGVjdG9yKCctYm9keScpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFNlYXJjaFN0YXRlcyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcbmltcG9ydCBBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50IGZyb20gJy4vYWNjb3JkaW9ucmVzdWx0c2NvbXBvbmVudC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9LCBzeXN0ZW1PcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzLCBzeXN0ZW1PcHRzKTtcblxuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUUztcbiAgICB0aGlzLl9saW1pdCA9IG9wdHMubGltaXQgfHwgMTA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnVW5pdmVyc2FsUmVzdWx0cyc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvdW5pdmVyc2FscmVzdWx0cyc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGluaXQgKG9wdHMpIHtcbiAgICBzdXBlci5pbml0KG9wdHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIGNvbnN0IHNlY3Rpb25zID0gZGF0YS5zZWN0aW9ucyB8fCBbXTtcbiAgICBjb25zdCBzZWFyY2hTdGF0ZSA9IGRhdGEuc2VhcmNoU3RhdGUgfHwgU2VhcmNoU3RhdGVzLlBSRV9TRUFSQ0g7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oeyBzZWN0aW9uczogW10gfSwgZGF0YSwge1xuICAgICAgaXNQcmVTZWFyY2g6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuUFJFX1NFQVJDSCxcbiAgICAgIGlzU2VhcmNoTG9hZGluZzogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyxcbiAgICAgIGlzU2VhcmNoQ29tcGxldGU6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFLFxuICAgICAgc2hvd05vUmVzdWx0czogc2VjdGlvbnMubGVuZ3RoID09PSAwLFxuICAgICAgcXVlcnk6IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKVxuICAgIH0pLCB2YWwpO1xuICB9XG5cbiAgYWRkQ2hpbGQgKGRhdGEgPSB7fSwgdHlwZSwgb3B0cykge1xuICAgIGNvbnN0IGNoaWxkT3B0cyA9IHsgLi4ub3B0cywgLi4udGhpcy5nZXRDaGlsZENvbmZpZyhbZGF0YVsndmVydGljYWxDb25maWdJZCddXSkgfTtcbiAgICBpZiAoY2hpbGRPcHRzLnVzZUFjY29yZGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLmFkZENoaWxkKGRhdGEsIEFjY29yZGlvblJlc3VsdHNDb21wb25lbnQudHlwZSwgY2hpbGRPcHRzKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIGNoaWxkT3B0cyk7XG4gIH1cblxuICBnZXRDaGlsZENvbmZpZyAoY29uZmlnSWQpIHtcbiAgICBjb25zdCBkZWZhdWx0Q29uZmlnID0ge1xuICAgICAgdmVydGljYWxDb25maWdJZDogY29uZmlnSWQsXG4gICAgICBpc1VuaXZlcnNhbDogdHJ1ZVxuICAgIH07XG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuX2NvbmZpZy5jb25maWc7XG4gICAgaWYgKGNvbmZpZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdENvbmZpZztcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgdGhpcy5fY29uZmlnWydjb25maWcnXVtjb25maWdJZF0gfHwgdGhpcy5fY29uZmlnWydjb25maWcnXSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgUXVlc3Rpb25TdWJtaXNzaW9uIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL3F1ZXN0aW9uc3VibWlzc2lvbic7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcblxuLyoqXG4gKiBDb25maWd1cmFibGUgb3B0aW9ucyBmb3IgdGhlIGNvbXBvbmVudFxuICogQHR5cGUge09iamVjdH1cbiAqL1xuY29uc3QgREVGQVVMVF9DT05GSUcgPSB7XG4gIC8qKlxuICAgKiBUaGUgZW50aXR5IGlkZW50aWZpZXIgdGhhdCB0aGUgcXVlc3Rpb24gaXMgYXNzb2NpYXRlZCB3aXRoLlxuICAgKiBUaGlzIGlzIHR5cGljYWxseSBhbiBvcmdhbml6YXRpb24gb2JqZWN0XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICAnZW50aXR5SWQnOiBudWxsLFxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBsYW5ndWFnZSBvZiB0aGUgcXVlc3Rpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICdsYW5ndWFnZSc6ICdFTicsXG5cbiAgLyoqXG4gICAqIFRoZSBtYWluIENTUyBzZWxlY3RvciB1c2VkIHRvIHJlZmVyZW5jZSB0aGUgZm9ybSBmb3IgdGhlIGNvbXBvbmVudC5cbiAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAqL1xuICAnZm9ybVNlbGVjdG9yJzogJ2Zvcm0nLFxuXG4gIC8qKlxuICAgKiBBbiBvcHRpb25hbCBsYWJlbCB0byB1c2UgZm9yIHRoZSBlLW1haWwgYWRkcmVzcyBpbnB1dFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgJ2VtYWlsTGFiZWwnOiAnRW1haWwgQWRkcmVzczonLFxuXG4gIC8qKlxuICAgKiBBbiBvcHRpb25hbCBsYWJlbCB0byB1c2UgZm9yIHRoZSBuYW1lIGlucHV0XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICAnbmFtZUxhYmVsJzogJ05hbWU6JyxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgbGFiZWwgdG8gdXNlIGZvciB0aGUgcXVlc3Rpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICdxdWVzdGlvbkxhYmVsJzogJ1doYXQgaXMgeW91ciBxdWVzdGlvbj8nLFxuXG4gIC8qKlxuICAgKiBBbiBvcHRpb25hbCBsYWJlbCB0byB1c2UgZm9yIHRoZSBQcml2YWN5IFBvbGljeVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgJ3ByaXZhY3lQb2xpY3lMYWJlbCc6ICdJIGFncmVlIHRvIG91ciBQcml2YWN5IFBvbGljeTonLFxuXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgU3VibWl0IGJ1dHRvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgJ2J1dHRvbkxhYmVsJzogJ1N1Ym1pdCdcbn07XG5cbi8qKlxuICogUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IGlzIGEgY29tcG9uZW50IHRoYXQgY3JlYXRlcyBhIGZvcm1cbiAqIHRoYXRzIGRpc3BsYXllZCB3aGVuZXZlciBhIHF1ZXJ5IGlzIHJ1bi4gSXQgZW5hYmxlcyB0aGUgdXNlclxuICogdG8gc3VibWl0IHF1ZXN0aW9ucyB0aGF0IHRoZXkgY2FudCBmaW5kIHRoZSBhbnN3ZXIgZm9yLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30sIHN5c3RlbUNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9DT05GSUcsIGNvbmZpZyksIHN5c3RlbUNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBSZWZlcmVuY2UgdG8gdGhlIHN0b3JhZ2UgbW9kZWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5RVUVTVElPTl9TVUJNSVNTSU9OO1xuXG4gICAgLyoqXG4gICAgICogTk9URShiaWxseSkgaWYgdGhpcyBpcyBhIHBhdHRlcm4gd2Ugd2FudCB0byBmb2xsb3cgZm9yIGNvbmZpZ3VyYXRpb25cbiAgICAgKiB3ZSBzaG91bGQgYmFrZSBpdCBpbnRvIHRoZSBjb3JlIGNsYXNzLlxuICAgICAqL1xuICAgIHRoaXMudmFsaWRhdGVDb25maWcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncXVlc3Rpb25zL3F1ZXN0aW9uc3VibWlzc2lvbic7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHB1YmxpYyBpbnRlcmZhY2UgYWxpYXMgZm9yIHRoZSBjb21wb25lbnRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUUFTdWJtaXNzaW9uJztcbiAgfVxuXG4gIC8qKlxuICAgKiB2YWxpZGF0aW9uQ29uZmlnIGNvbnRhaW5zIGEgYnVuY2ggb2YgcnVsZXNcbiAgICogdGhhdCBhcmUgdXNlZCB0byB2YWxpZGF0ZSBhZ2luc3QgY29uZmlndXJhdGlvbiBwcm92aWRlZCBieSB0aGUgdXNlclxuICAgKi9cbiAgdmFsaWRhdGVDb25maWcgKCkge1xuICAgIGlmICh0aGlzLl9jb25maWcuZW50aXR5SWQgPT09IG51bGwgfHxcbiAgICAgICAgdHlwZW9mIHRoaXMuX2NvbmZpZy5lbnRpdHlJZCAhPT0gJ251bWJlcicpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICdgZW50aXR5SWRgIGlzIGEgcmVxdWlyZWQgY29uZmlndXJhdGlvbiBvcHRpb24gZm9yIFF1ZXN0aW9uIFN1Ym1pc3Npb24nLFxuICAgICAgICAnUXVlc3Rpb25TdWJtaXNzaW9uJyk7XG4gICAgfVxuICB9XG5cbiAgYmVmb3JlTW91bnQgKCkge1xuICAgIC8vIEF2b2lkIG1vdW50aW5nIHRoZSBjb21wb25lbnQgaWYgdGhlcmVzIG5vIGRhdGFcbiAgICAvLyBOb3RlLCAxIGJlY2F1c2UgYGNvbmZpZ2AgaXMgYWx3YXlzIHBhcnQgb2YgdGhlIHN0YXRlLlxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldFN0YXRlKCkpLmxlbmd0aCA+IDE7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICBsZXQgZm9ybUVsID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fY29uZmlnLmZvcm1TZWxlY3Rvcik7XG4gICAgaWYgKGZvcm1FbCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYmluZEFuYWx5dGljcyhmb3JtRWwpO1xuICAgIHRoaXMuYmluZEZvcm1TdWJtaXQoZm9ybUVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBiaW5kQW5hbHl0aWNzIHdpbGwgd2lyZSB1cCBET00gZXZlbnQgaG9va3MgdG8gc2VydmVyc2lkZSByZXBvcnRpbmdcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybUVsXG4gICAqL1xuICBiaW5kQW5hbHl0aWNzIChmb3JtRWwpIHtcbiAgICBpZiAodGhpcy5hbmFseXRpY3NSZXBvcnRlciA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHF1ZXN0aW9uVGV4dEVsID0gRE9NLnF1ZXJ5KGZvcm1FbCwgJy5qcy1xdWVzdGlvbi10ZXh0Jyk7XG4gICAgRE9NLm9uKHF1ZXN0aW9uVGV4dEVsLCAnZm9jdXMnLCAoKSA9PiB7XG4gICAgICB0aGlzLmFuYWx5dGljc1JlcG9ydGVyLnJlcG9ydChuZXcgQW5hbHl0aWNzRXZlbnQoJ1FVRVNUSU9OX0ZPQ1VTJykpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGJpbmRGb3JtU3VibWl0IGhhbmRsZXMgc3VibWl0dGluZyB0aGUgcXVlc3Rpb24gdG8gdGhlIHNlcnZlci5cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybUVsXG4gICAqL1xuICBiaW5kRm9ybVN1Ym1pdCAoZm9ybUVsKSB7XG4gICAgRE9NLm9uKGZvcm1FbCwgJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAvLyBUT0RPKGJpbGx5KSB3ZSBwcm9iYWJseSB3YW50IHRvIGRpc2FibGUgdGhlIGZvcm0gZnJvbSBiZWluZyBzdWJtaXR0ZWQgdHdpY2VcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gdGhpcy5wYXJzZShmb3JtRWwpO1xuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy52YWxpZGF0ZVJlcXVpcmVkKGZvcm1EYXRhKTtcbiAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUobmV3IFF1ZXN0aW9uU3VibWlzc2lvbihmb3JtRGF0YSwgZXJyb3JzKSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29yZS5zdWJtaXRRdWVzdGlvbih7XG4gICAgICAgICdlbnRpdHlJZCc6IHRoaXMuX2NvbmZpZy5lbnRpdHlJZCxcbiAgICAgICAgJ3F1ZXN0aW9uTGFuZ3VhZ2UnOiB0aGlzLl9jb25maWcubGFuZ3VhZ2UsXG4gICAgICAgICdzaXRlJzogJ0ZJUlNUX1BBUlRZJyxcbiAgICAgICAgJ25hbWUnOiBmb3JtRGF0YS5uYW1lLFxuICAgICAgICAnZW1haWwnOiBmb3JtRGF0YS5lbWFpbCxcbiAgICAgICAgJ3F1ZXN0aW9uVGV4dCc6IGZvcm1EYXRhLnF1ZXN0aW9uVGV4dCxcbiAgICAgICAgJ3F1ZXN0aW9uRGVzY3JpcHRpb24nOiBmb3JtRGF0YS5xdWVzdGlvbkRlc2NyaXB0aW9uXG4gICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICBuZXcgUXVlc3Rpb25TdWJtaXNzaW9uKGZvcm1EYXRhLCB7XG4gICAgICAgICAgICAgICduZXR3b3JrJzogJ1RoZXJlIHdhcyBhIHByb2JsZW0gc3VibWl0dGluZyB5b3VyIHF1ZXN0aW9uLiBQbGVhc2UgdHJ5IGFnYWluLidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGFrZXMgdGhlIGZvcm0sIGFuZCBidWlsZHMgYSBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBpbnB1dCBuYW1lc1xuICAgKiBhbmQgdGV4dCBmaWVsZHMuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1FbFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgcGFyc2UgKGZvcm1FbCkge1xuICAgIGNvbnN0IGlucHV0RmllbGRzID0gRE9NLnF1ZXJ5QWxsKGZvcm1FbCwgJy5qcy1xdWVzdGlvbi1maWVsZCcpO1xuICAgIGlmICghaW5wdXRGaWVsZHMgfHwgaW5wdXRGaWVsZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgbGV0IG9iaiA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRGaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB2YWwgPSBpbnB1dEZpZWxkc1tpXS52YWx1ZTtcbiAgICAgIGlmIChpbnB1dEZpZWxkc1tpXS50eXBlID09PSAnY2hlY2tib3gnICYmIHZhbCA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHZhbCA9IHRydWU7XG4gICAgICB9XG4gICAgICBvYmpbaW5wdXRGaWVsZHNbaV0ubmFtZV0gPSB2YWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgdGhlIHJlcXVpcmVkIGZpZWxkcyAob3IgcnVsZXMpIGZvciB0aGUgZm9ybSBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBmb3JtRGF0YVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fGJvb2xlYW59IGVycm9ycyBvYmplY3QgaWYgYW55IGVycm9ycyBmb3VuZFxuICAgKi9cbiAgdmFsaWRhdGVSZXF1aXJlZCAoZm9ybURhdGEpIHtcbiAgICBsZXQgZXJyb3JzID0ge307XG4gICAgaWYgKCFmb3JtRGF0YS5lbWFpbCB8fCB0eXBlb2YgZm9ybURhdGEuZW1haWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICBlcnJvcnNbJ2VtYWlsJ10gPSAnTWlzc2luZyBlbWFpbCBhZGRyZXNzISc7XG4gICAgfVxuXG4gICAgaWYgKCFmb3JtRGF0YS5wcml2YWN5UG9saWN5IHx8IGZvcm1EYXRhLnByaXZhY3lQb2xpY3kgIT09IHRydWUpIHtcbiAgICAgIGVycm9yc1sncHJpdmFjeVBvbGljeSddID0gJ0FwcHJvdmluZyBvdXIgcHJpdmFjeSBwb2xpY3kgdGVybXMgaXMgcmVxdWlyZWQhJztcbiAgICB9XG5cbiAgICBpZiAoIWZvcm1EYXRhLnF1ZXN0aW9uVGV4dCB8fCB0eXBlb2YgZm9ybURhdGEucXVlc3Rpb25UZXh0ICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3JzWydxdWVzdGlvblRleHQnXSA9ICdRdWVzdGlvbiB0ZXh0IGlzIHJlcXVpcmVkISc7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID4gMCA/IGVycm9ycyA6IG51bGw7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNWR0ljb24ge1xuICAvKipcbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKiBAcGFyYW0gY29uZmlnLm5hbWVcbiAgICogQHBhcmFtIGNvbmZpZy5wYXRoXG4gICAqIEBwYXJhbSBjb25maWcuY29tcGxleENvbnRlbnRzXG4gICAqIEBwYXJhbSBjb25maWcudmlld0JveFxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICAvKipcbiAgICAgKiB0aGUgbmFtZSBvZiB0aGUgaWNvblxuICAgICAqL1xuICAgIHRoaXMubmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIC8qKlxuICAgICAqIGFuIHN2ZyBwYXRoIGRlZmluaXRpb25cbiAgICAgKi9cbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aDtcbiAgICAvKipcbiAgICAgKiBpZiBub3QgdXNpbmcgYSBwYXRoLCBhIHRoZSBtYXJrdXAgZm9yIGEgY29tcGxleCBTVkdcbiAgICAgKi9cbiAgICB0aGlzLmNvbXBsZXhDb250ZW50cyA9IGNvbmZpZy5jb21wbGV4Q29udGVudHM7XG4gICAgLyoqXG4gICAgICogdGhlIHZpZXcgYm94IGRlZmluaXRpb24sIGRlZmF1bHRzIHRvIDI0eDI0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnZpZXdCb3ggPSBjb25maWcudmlld0JveCB8fCAnMCAwIDI0IDI0JztcbiAgICAvKipcbiAgICAgKiBhY3R1YWwgY29udGVudHMgdXNlZFxuICAgICAqL1xuICAgIHRoaXMuY29udGVudHMgPSB0aGlzLnBhdGhEZWZpbml0aW9uKCk7XG4gIH1cblxuICBwYXRoRGVmaW5pdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuY29tcGxleENvbnRlbnRzKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV4Q29udGVudHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGA8cGF0aCBkPVwiJHt0aGlzLnBhdGh9XCI+PC9wYXRoPmA7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0aGUgc3ZnIG1hcmt1cFxuICAgKi9cbiAgbWFya3VwICgpIHtcbiAgICByZXR1cm4gYDxzdmcgdmlld0JveD1cIiR7dGhpcy52aWV3Qm94fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4ke3RoaXMuY29udGVudHN9PC9zdmc+YDtcbiAgfVxufVxuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3RodW1iJyxcbiAgdmlld0JveDogJzAgMCAyNCAyMicsXG4gIHBhdGg6ICdNMTUuMjczIDFINS40NTVjLS45MDYgMC0xLjY4LjU1LTIuMDA4IDEuMzQyTC4xNTMgMTAuMDk3QTIuMTkgMi4xOSAwIDAwMCAxMC45djIuMmMwIDEuMjEuOTgyIDIuMiAyLjE4MiAyLjJoNi44ODNMOC4wMyAyMC4zMjdsLS4wMzMuMzUyYzAgLjQ1MS4xODYuODY5LjQ4IDEuMTY2TDkuNjMzIDIzbDcuMTc4LTcuMjQ5YTIuMTYgMi4xNiAwIDAwLjY0NC0xLjU1MXYtMTFjMC0xLjIxLS45ODItMi4yLTIuMTgyLTIuMnptMCAxMy4ybC00LjczNSA0Ljc3NEwxMS43NSAxMy4xSDIuMTgydi0yLjJsMy4yNzMtNy43aDkuODE4djExek0xOS42MzYgMUgyNHYxMy4yaC00LjM2NFYxeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3JlY2VpcHQnLFxuICBwYXRoOiAnTTE0LjYwNiA5LjVjLS42NzEtLjUxNS0xLjU5MS0uODMzLTIuNjA2LS44MzMgMS4wMTUgMCAxLjkzNS4zMTggMi42MDYuODMzem0tNy45ODUgMEgxLjY1NUExLjY2IDEuNjYgMCAwMTAgNy44MzNWMy42NjdDMCAyLjc0Ny43NDEgMiAxLjY1NSAyaDIwLjY5QTEuNjYgMS42NiAwIDAxMjQgMy42Njd2NC4xNjZBMS42NiAxLjY2IDAgMDEyMi4zNDUgOS41aC00Ljk2NlYyMkg2LjYyMVY5LjVoMi43NzNINi42MnptMTAuNzU4LTEuNjY3aDQuOTY2VjMuNjY3SDEuNjU1djQuMTY2aDQuOTY2di0yLjVoMTAuNzU4djIuNXonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdwYW50aGVvbicsXG4gIHBhdGg6ICdNOS45NDcgMTYuNTk4aC4yNTJWOS40MTJoLS4yNTJhLjQzMi40MzIgMCAwMS0uMjMtLjA2NWMtLjA3LS4wNDMtLjEwNi0uMDkzLS4xMDYtLjE1TDkuMTUgNy44MnYtLjE1YzAtLjA0NC4wMjgtLjA4LjA4NC0uMTA5YS42OTEuNjkxIDAgMDEuMTA1LS4wODYuMjU0LjI1NCAwIDAxLjE0Ni0uMDQzSDEzLjZjLjA1NiAwIC4xMDQuMDE1LjE0Ni4wNDMuMDQyLjAzLjA5MS4wNTguMTQ3LjA4NmEuMjcxLjI3MSAwIDAxLjA2My4xMDhjLjAxNC4wNDMuMDA3LjA5My0uMDIuMTVsLS40MiAxLjM3OGEuMzc0LjM3NCAwIDAxLS4xNDcuMTUuMzcuMzcgMCAwMS0uMTkuMDY1aC0uMjUxdjcuMTg2aC4yNTJhLjM3LjM3IDAgMDEuMTg5LjA2NWMuMDcuMDQzLjExOS4wOTMuMTQ3LjE1bC40MiAxLjM3OGMuMDI3LjAyOC4wMzQuMDcxLjAyLjEyOWEuMjc1LjI3NSAwIDAxLS4wNjMuMTI5IDEuMzY0IDEuMzY0IDAgMDAtLjE0Ny4wODYuMjU0LjI1NCAwIDAxLS4xNDYuMDQzSDkuNDg1YS4yNTQuMjU0IDAgMDEtLjE0Ni0uMDQzLjY5MS42OTEgMCAwMS0uMTA1LS4wODZjLS4wNTYtLjAyOS0uMDg0LS4wNzItLjA4NC0uMTN2LS4xMjhsLjQ2MS0xLjM3N2MwLS4wNTguMDM1LS4xMDguMTA1LS4xNTFhLjQzMi40MzIgMCAwMS4yMzEtLjA2NXptNS43OTIgMGguMjUyVjkuNDEyaC0uMjUyYS40MzIuNDMyIDAgMDEtLjIzLS4wNjUuMzc0LjM3NCAwIDAxLS4xNDgtLjE1bC0uNDItMS4zNzdjLS4wMjctLjAyOS0uMDM0LS4wNzItLjAyLS4xM2EuMjc1LjI3NSAwIDAxLjA2My0uMTI5Yy4wNTYtLjAyOC4xMDUtLjA1Ny4xNDYtLjA4NmEuMjU0LjI1NCAwIDAxLjE0Ny0uMDQzaDQuMTE0Yy4wNTUgMCAuMTA0LjAxNS4xNDYuMDQzYS42OTEuNjkxIDAgMDEuMTA1LjA4NmMuMDU2LjAzLjA4NC4wNzIuMDg0LjEzdi4xMjlsLS40MiAxLjM3N2EuMzc0LjM3NCAwIDAxLS4xNDYuMTUuNDMyLjQzMiAwIDAxLS4yMzEuMDY1aC0uMjF2Ny4xODZoLjIxYS40My40MyAwIDAxLjIzLjA2NWMuMDcuMDQzLjEyLjA5My4xNDguMTVsLjQyIDEuMzc4di4xNWMwIC4wNDMtLjAyOS4wOC0uMDg1LjEwOGEuNjkxLjY5MSAwIDAxLS4xMDUuMDg2LjI1NC4yNTQgMCAwMS0uMTQ2LjA0M2gtNC4xMTRhLjI1NC4yNTQgMCAwMS0uMTQ3LS4wNDMgMS4zNjQgMS4zNjQgMCAwMC0uMTQ2LS4wODYuMjcxLjI3MSAwIDAxLS4wNjMtLjEwOGMtLjAxNC0uMDQzLS4wMDctLjA5My4wMi0uMTVsLjQyLTEuMzc3YS4zNzQuMzc0IDAgMDEuMTQ3LS4xNTEuNDMyLjQzMiAwIDAxLjIzMS0uMDY1em0tMTEuNzk0LS4wODZoLjI1MlY5LjQ5OGgtLjI1MmEuMzM0LjMzNCAwIDAxLS4yMS0uMDY1LjM4Ni4zODYgMCAwMS0uMTI2LS4xOTNsLS40Mi0xLjM3N2EuMjQ4LjI0OCAwIDAxLS4wMi0uMTcyLjg1NC44NTQgMCAwMS4wNjMtLjE3M2MuMDI4LS4wNTcuMDctLjEuMTI2LS4xMjlhLjM2NS4zNjUgMCAwMS4xNjgtLjA0M2g0LjA3Yy4wNTcgMCAuMTEzLjAxNS4xNjkuMDQzYS4yNzguMjc4IDAgMDEuMTI2LjEzLjg1NC44NTQgMCAwMS4wNjIuMTcyLjI0OC4yNDggMCAwMS0uMDIuMTcybC0uNDIgMS4zNzdhLjM4Ni4zODYgMCAwMS0uMTI2LjE5My4zMzQuMzM0IDAgMDEtLjIxLjA2NWgtLjIxdjcuMDE0aC4yMWMuMDg0IDAgLjE1NC4wMjkuMjEuMDg2YS42NzMuNjczIDAgMDEuMTI2LjE3MmwuNDIgMS4zNzhhLjI0OC4yNDggMCAwMS4wMi4xNzIuODU0Ljg1NCAwIDAxLS4wNjIuMTcyLjI3OC4yNzggMCAwMS0uMTI2LjEyOS4zNjUuMzY1IDAgMDEtLjE2OC4wNDNIMy41MjZhLjM2NS4zNjUgMCAwMS0uMTY4LS4wNDMuMjc4LjI3OCAwIDAxLS4xMjYtLjEzLjg1NC44NTQgMCAwMS0uMDYzLS4xNzEuMjQ4LjI0OCAwIDAxLjAyLS4xNzJsLjQyLTEuMzc4YS42NzMuNjczIDAgMDEuMTI2LS4xNzIuMjgxLjI4MSAwIDAxLjIxLS4wODZ6TTEuNzYzIDYuNjU4YS43MTcuNzE3IDAgMDEtLjUwNC0uMTk0LjY0NC42NDQgMCAwMS0uMjEtLjQ5NXYtLjQzYS43My43MyAwIDAxLjEwNS0uMzg3LjY4LjY4IDAgMDEuMjczLS4yNTlDNC4zMDkgMy40MDIgNi41NCAyLjI3NiA4LjEyMSAxLjUxNSA5LjcwMi43NTUgMTAuNDkzLjM2MSAxMC40OTMuMzMyYy41MzEtLjI1OC45NzItLjM2NiAxLjMyMi0uMzIzLjM1LjA0My43MzQuMTY1IDEuMTU0LjM2Nmw4LjMxIDQuNTE4Yy4xNC4wNTguMjQ1LjE0NC4zMTUuMjU5YS43My43MyAwIDAxLjEwNS4zODd2LjQzYzAgLjIwMS0uMDcuMzY2LS4yMS40OTVhLjcxNy43MTcgMCAwMS0uNTA0LjE5NEgxLjc2M3ptLS43MTQgMTMuMzRhLjU0LjU0IDAgMDEuMTY4LS4zODcuNTE2LjUxNiAwIDAxLjM3OC0uMTcyaDE5LjY0MmMuMTY4IDAgLjMwOC4wNTcuNDIuMTcyYS41NDEuNTQxIDAgMDEuMTY4LjM4N3YuODE4YS41MjIuNTIyIDAgMDEtLjE2OC40MDguNjA1LjYwNSAwIDAxLS40Mi4xNTFIMS41OTVhLjU1MS41NTEgMCAwMS0uMzc4LS4xNS41MjIuNTIyIDAgMDEtLjE2OC0uNDF2LS44MTd6bTIxLjQwNSAyLjAyMmMuMTQgMCAuMjY2LjA1OC4zNzguMTczYS41OTIuNTkyIDAgMDEuMTY4LjQzdi44MThhLjU0MS41NDEgMCAwMS0uMTY4LjM4Ny41MTYuNTE2IDAgMDEtLjM3OC4xNzJMLjU0NiAyMy45NTdhLjUxNi41MTYgMCAwMS0uMzc4LS4xNzIuNTQxLjU0MSAwIDAxLS4xNjgtLjM4N3YtLjgxOGEuNTkuNTkgMCAwMS4xNjgtLjQzLjUxNi41MTYgMCAwMS4zNzgtLjE3M2wyMS45MDguMDQzeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ21pYycsXG4gIHBhdGg6ICdNMTIgMTVjMS42NiAwIDIuOTktMS4zNCAyLjk5LTNMMTUgNmMwLTEuNjYtMS4zNC0zLTMtM1M5IDQuMzQgOSA2djZjMCAxLjY2IDEuMzQgMyAzIDN6bTUuMy0zYzAgMy0yLjU0IDUuMS01LjMgNS4xUzYuNyAxNSA2LjcgMTJINWMwIDMuNDEgMi43MiA2LjIzIDYgNi43MlYyMmgydi0zLjI4YzMuMjgtLjQ4IDYtMy4zIDYtNi43MmgtMS43eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2RpcmVjdGlvbnMnLFxuICBwYXRoOiAnTTIzLjY0OSAxMS4xNTRMMTIuODQ2LjM1YTEuMTk1IDEuMTk1IDAgMDAtMS42OTIgMEwuMzUgMTEuMTU0YTEuMTk1IDEuMTk1IDAgMDAwIDEuNjkyTDExLjE1NCAyMy42NWExLjE5NSAxLjE5NSAwIDAwMS42OTIgMEwyMy42NSAxMi44NDZjLjQ2OC0uNDU2LjQ2OC0xLjIxMiAwLTEuNjkyem0tOS4yNTQgMy44NTN2LTMuMDAxSDkuNTkzdjMuNmgtMi40di00LjhjMC0uNjYuNTQtMS4yIDEuMi0xLjJoNi4wMDJWNi42MDRsNC4yIDQuMi00LjIgNC4yMDJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnY2FsZW5kYXInLFxuICBwYXRoOiAnTTE4LjExMSAxMy4ySDEydjZoNi4xMTF2LTZ6TTE2Ljg5IDB2Mi40SDcuMTFWMEg0LjY2N3YyLjRIMy40NDRjLTEuMzU2IDAtMi40MzIgMS4wOC0yLjQzMiAyLjRMMSAyMS42QzEgMjIuOTIgMi4wODggMjQgMy40NDQgMjRoMTcuMTEyQzIxLjkgMjQgMjMgMjIuOTIgMjMgMjEuNlY0LjhjMC0xLjMyLTEuMS0yLjQtMi40NDQtMi40aC0xLjIyM1YwSDE2Ljg5em0zLjY2NyAyMS42SDMuNDQ0VjguNGgxNy4xMTJ2MTMuMnonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdjYWxsb3V0JyxcbiAgcGF0aDogJ00yMS45OSA0YzAtMS4xLS44OS0yLTEuOTktMkg0Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDE0bDQgNC0uMDEtMTh6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnaW5mbycsXG4gIHBhdGg6ICdNMTIgOC40QTEuMiAxLjIgMCAxMDEyIDZhMS4yIDEuMiAwIDAwMCAyLjR6TTEyIDBjNi42MjQgMCAxMiA1LjM3NiAxMiAxMnMtNS4zNzYgMTItMTIgMTJTMCAxOC42MjQgMCAxMiA1LjM3NiAwIDEyIDB6bTAgMThjLjY2IDAgMS4yLS41NCAxLjItMS4yVjEyYzAtLjY2LS41NC0xLjItMS4yLTEuMi0uNjYgMC0xLjIuNTQtMS4yIDEuMnY0LjhjMCAuNjYuNTQgMS4yIDEuMiAxLjJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnYnJpZWZjYXNlJyxcbiAgcGF0aDogJ00yMCA3aC00VjVjMC0xLjExLS44OS0yLTItMmgtNGMtMS4xMSAwLTIgLjg5LTIgMnYySDRjLTEuMTEgMC0xLjk5Ljg5LTEuOTkgMkwyIDIwYzAgMS4xMS44OSAyIDIgMmgxNmMxLjExIDAgMi0uODkgMi0yVjljMC0xLjExLS44OS0yLTItMnptLTYgMGgtNFY1aDR2MnonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdrYWJvYicsXG4gIHZpZXdCb3g6ICcwIDAgMyAxMScsXG4gIGNvbXBsZXhDb250ZW50czogYDxjaXJjbGUgY3g9XCIxLjVcIiBjeT1cIjEuNVwiIHI9XCIxLjVcIi8+PGNpcmNsZSBjeD1cIjEuNVwiIGN5PVwiNS41XCIgcj1cIjEuNVwiLz48Y2lyY2xlIGN4PVwiMS41XCIgY3k9XCI5LjVcIiByPVwiMS41XCIvPmBcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3BlcnNvbicsXG4gIHZpZXdCb3g6ICcwIDAgMTggMTgnLFxuICBwYXRoOiAnTTkgOWMyLjQ4NiAwIDQuNS0yLjAxNCA0LjUtNC41UzExLjQ4NiAwIDkgMGE0LjQ5OSA0LjQ5OSAwIDAwLTQuNSA0LjVDNC41IDYuOTg2IDYuNTE0IDkgOSA5em0wIDIuMjVjLTMuMDA0IDAtOSAxLjUwOC05IDQuNXYxLjEyNUMwIDE3LjQ5NC41MDYgMTggMS4xMjUgMThoMTUuNzVjLjYxOSAwIDEuMTI1LS41MDYgMS4xMjUtMS4xMjVWMTUuNzVjMC0yLjk5Mi01Ljk5Ni00LjUtOS00LjV6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnbWFnbmlmeWluZ19nbGFzcycsXG4gIHBhdGg6ICdNMTYuMTI0IDEzLjA1MWE1LjE1NCA1LjE1NCAwIDExMC0xMC4zMDggNS4xNTQgNS4xNTQgMCAwMTAgMTAuMzA4TTE2LjExNCAwYTcuODg2IDcuODg2IDAgMDAtNi40NiAxMi40MDdMMCAyMi4wNiAxLjk0IDI0bDkuNjUzLTkuNjUzQTcuODg2IDcuODg2IDAgMTAxNi4xMTMgMCdcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ29mZmljZScsXG4gIHBhdGg6ICdNMTIgN1YzSDJ2MThoMjBWN0gxMnpNNiAxOUg0di0yaDJ2MnptMC00SDR2LTJoMnYyem0wLTRINFY5aDJ2MnptMC00SDRWNWgydjJ6bTQgMTJIOHYtMmgydjJ6bTAtNEg4di0yaDJ2MnptMC00SDhWOWgydjJ6bTAtNEg4VjVoMnYyem0xMCAxMmgtOHYtMmgydi0yaC0ydi0yaDJ2LTJoLTJWOWg4djEwem0tMi04aC0ydjJoMnYtMnptMCA0aC0ydjJoMnYtMnonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdsaW5rJyxcbiAgcGF0aDogJ00yLjI4IDEyQTMuNzIzIDMuNzIzIDAgMDE2IDguMjhoNC44VjZINmMtMy4zMTIgMC02IDIuNjg4LTYgNnMyLjY4OCA2IDYgNmg0Ljh2LTIuMjhINkEzLjcyMyAzLjcyMyAwIDAxMi4yOCAxMnptNC45MiAxLjJoOS42di0yLjRINy4ydjIuNHpNMTggNmgtNC44djIuMjhIMThBMy43MjMgMy43MjMgMCAwMTIxLjcyIDEyIDMuNzIzIDMuNzIzIDAgMDExOCAxNS43MmgtNC44VjE4SDE4YzMuMzEyIDAgNi0yLjY4OCA2LTZzLTIuNjg4LTYtNi02eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3dpbmRvdycsXG4gIHBhdGg6ICdNMyAxM2g4VjNIM3YxMHptMCA4aDh2LTZIM3Y2em0xMCAwaDhWMTFoLTh2MTB6bTAtMTh2Nmg4VjNoLTh6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncGhvbmUnLFxuICBwYXRoOiAnTTQuODI3IDEwLjM4N2EyMC4xOTggMjAuMTk4IDAgMDA4Ljc4NiA4Ljc4NmwyLjkzNC0yLjkzM2MuMzYtLjM2Ljg5My0uNDggMS4zNi0uMzJhMTUuMjEgMTUuMjEgMCAwMDQuNzYuNzZjLjczMyAwIDEuMzMzLjYgMS4zMzMgMS4zMzN2NC42NTRDMjQgMjMuNCAyMy40IDI0IDIyLjY2NyAyNCAxMC4xNDcgMjQgMCAxMy44NTMgMCAxLjMzMyAwIC42LjYgMCAxLjMzMyAwSDZjLjczMyAwIDEuMzMzLjYgMS4zMzMgMS4zMzMgMCAxLjY2Ny4yNjcgMy4yNjcuNzYgNC43Ni4xNDcuNDY3LjA0Ljk4Ny0uMzMzIDEuMzZsLTIuOTMzIDIuOTM0eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3RhZycsXG4gIHZpZXdCb3g6ICcwIDAgMTggMTgnLFxuICBwYXRoOiAnTTE3LjQ2OSA4LjYyMmwtOC4xLTguMUExLjc4OSAxLjc4OSAwIDAwOC4xIDBIMS44Qy44MSAwIDAgLjgxIDAgMS44djYuM2MwIC40OTUuMTk4Ljk0NS41MzEgMS4yNzhsOC4xIDguMWMuMzI0LjMyNC43NzQuNTIyIDEuMjY5LjUyMmExLjc2IDEuNzYgMCAwMDEuMjY5LS41MzFsNi4zLTYuM0ExLjc2IDEuNzYgMCAwMDE4IDkuOWMwLS40OTUtLjIwNy0uOTU0LS41MzEtMS4yNzh6TTMuMTUgNC41Yy0uNzQ3IDAtMS4zNS0uNjAzLTEuMzUtMS4zNSAwLS43NDcuNjAzLTEuMzUgMS4zNS0xLjM1Ljc0NyAwIDEuMzUuNjAzIDEuMzUgMS4zNSAwIC43NDctLjYwMyAxLjM1LTEuMzUgMS4zNXonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdkb2N1bWVudCcsXG4gIHBhdGg6ICdNNCA2SDJ2MTRjMCAxLjEuOSAyIDIgMmgxNHYtMkg0VjZ6bTE2LTRIOGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxMmMxLjEgMCAyLS45IDItMlY0YzAtMS4xLS45LTItMi0yem0tMSA5SDlWOWgxMHYyem0tNCA0SDl2LTJoNnYyem00LThIOVY1aDEwdjJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnY2hldnJvbicsXG4gIHZpZXdCb3g6ICcwIDAgNyA5JyxcbiAgY29tcGxleENvbnRlbnRzOiBgPGcgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMSAtOClcIj48cGF0aCBkPVwibTIuNjQxNzAwNCA4LTEuMTQxNzAwNCAxLjA1NzUgMy43MDg1MDIwMiAzLjQ0MjUtMy43MDg1MDIwMiAzLjQ0MjUgMS4xNDE3MDA0IDEuMDU3NSA0Ljg1ODI5OTYtNC41elwiLz48L2c+YFxufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnc3VwcG9ydCcsXG4gIHBhdGg6ICdNMTIuNSAyQzcuODEgMiA0IDUuODEgNCAxMC41YzAgNC42OSAzLjgxIDguNSA4LjUgOC41aC41djNjNC44Ni0yLjM0IDgtNyA4LTExLjVDMjEgNS44MSAxNy4xOSAyIDEyLjUgMnptMSAxNC41aC0ydi0yaDJ2MnptMC0zLjVoLTJjMC0zLjI1IDMtMyAzLTUgMC0xLjEtLjktMi0yLTJzLTIgLjktMiAyaC0yYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDRjMCAyLjUtMyAyLjc1LTMgNXonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICd5ZXh0JyxcbiAgdmlld0JveDogJzAgMCAzMCAzMCcsXG4gIHBhdGg6ICdNMjUuNTE3IDI4LjE0MnYuMDk1aC0uMjA0di45MDVoLS4wNjZ2LS45MDVoLS4xOTd2LS4wOTVoLjQ2N3ptLjY2NyAwaC4wNjZ2MWgtLjA2NnYtLjgyNWwtLjI0LjU5NWgtLjAxM2wtLjI0LS41OTV2LjgyNWgtLjA2NnYtMWguMDY2bC4yNDcuNjEuMjQ2LS42MXpNMTUgMjguOGM3LjYyMiAwIDEzLjgtNi4xNzggMTMuOC0xMy44IDAtNy42MjItNi4xNzgtMTMuOC0xMy44LTEzLjhDNy4zNzggMS4yIDEuMiA3LjM3OCAxLjIgMTVjMCA3LjYyMiA2LjE3OCAxMy44IDEzLjggMTMuOHpNMTUgMGM4LjI4NCAwIDE1IDYuNzE2IDE1IDE1IDAgOC4yODQtNi43MTYgMTUtMTUgMTUtOC4yODQgMC0xNS02LjcxNi0xNS0xNUMwIDYuNzE2IDYuNzE2IDAgMTUgMHptLjQ1IDE2LjY1di0xLjJoNi42djEuMmgtMi43djUuNGgtMS4ydi01LjRoLTIuN3ptLTEuNTk5LTEuMzVsLjg0OS44NDktMi42MDEgMi42MDEgMi42MDEgMi42MDEtLjg0OS44NDktMi42MDEtMi42MDFMOC42NDkgMjIuMmwtLjg0OS0uODQ5IDIuNjAxLTIuNjAxTDcuOCAxNi4xNDlsLjg0OS0uODQ5IDIuNjAxIDIuNjAxIDIuNjAxLTIuNjAxek0xOC42NzUgOWEyLjE3NSAyLjE3NSAwIDAwLTEuODQ3IDMuMzIzbDIuOTk1LTIuOTk1QTIuMTYzIDIuMTYzIDAgMDAxOC42NzUgOXptMCA1LjU1YTMuMzc1IDMuMzc1IDAgMTEyLjgzMy01LjIwOWwtMy43ODkgMy43ODhhMi4xNzUgMi4xNzUgMCAwMDMuMTMtMS45NTRoMS4yMDFhMy4zNzUgMy4zNzUgMCAwMS0zLjM3NSAzLjM3NXptLTcuNDI1LTMuNzM0TDEzLjc4IDcuOGwuOTIuNzcxLTIuODUgMy4zOTd2Mi41ODJoLTEuMnYtMi41ODJMNy44IDguNTdsLjkyLS43NzEgMi41MyAzLjAxNnonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdwaW4nLFxuICB2aWV3Qm94OiAnMCAwIDEzIDE4JyxcbiAgcGF0aDogJ205LjM3NSAwYy0zLjUyNDQ2NDI5IDAtNi4zNzUgMi44MTctNi4zNzUgNi4zIDAgNC43MjUgNi4zNzUgMTEuNyA2LjM3NSAxMS43czYuMzc1LTYuOTc1IDYuMzc1LTExLjdjMC0zLjQ4My0yLjg1MDUzNTctNi4zLTYuMzc1LTYuM3ptLjAwMDAwMDE4IDguNTUwMDAwMDdjLTEuMjU2Nzg1NzYgMC0yLjI3Njc4NTc5LTEuMDA4LTIuMjc2Nzg1NzktMi4yNXMxLjAyMDAwMDAzLTIuMjUgMi4yNzY3ODU3OS0yLjI1YzEuMjU2Nzg1NzIgMCAyLjI3Njc4NTgyIDEuMDA4IDIuMjc2Nzg1ODIgMi4yNXMtMS4wMjAwMDAxIDIuMjUtMi4yNzY3ODU4MiAyLjI1eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2dlYXInLFxuICBwYXRoOiAnTTEyIDEwYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptNy03SDVhMiAyIDAgMDAtMiAydjE0YTIgMiAwIDAwMiAyaDE0YTIgMiAwIDAwMi0yVjVhMiAyIDAgMDAtMi0yem0tMS43NSA5YzAgLjIzLS4wMi40Ni0uMDUuNjhsMS40OCAxLjE2Yy4xMy4xMS4xNy4zLjA4LjQ1bC0xLjQgMi40MmMtLjA5LjE1LS4yNy4yMS0uNDMuMTVsLTEuNzQtLjdjLS4zNi4yOC0uNzYuNTEtMS4xOC42OWwtLjI2IDEuODVjLS4wMy4xNy0uMTguMy0uMzUuM2gtMi44Yy0uMTcgMC0uMzItLjEzLS4zNS0uMjlsLS4yNi0xLjg1Yy0uNDMtLjE4LS44Mi0uNDEtMS4xOC0uNjlsLTEuNzQuN2MtLjE2LjA2LS4zNCAwLS40My0uMTVsLTEuNC0yLjQyYS4zNTMuMzUzIDAgMDEuMDgtLjQ1bDEuNDgtMS4xNmMtLjAzLS4yMy0uMDUtLjQ2LS4wNS0uNjkgMC0uMjMuMDItLjQ2LjA1LS42OGwtMS40OC0xLjE2YS4zNTMuMzUzIDAgMDEtLjA4LS40NWwxLjQtMi40MmMuMDktLjE1LjI3LS4yMS40My0uMTVsMS43NC43Yy4zNi0uMjguNzYtLjUxIDEuMTgtLjY5bC4yNi0xLjg1Yy4wMy0uMTcuMTgtLjMuMzUtLjNoMi44Yy4xNyAwIC4zMi4xMy4zNS4yOWwuMjYgMS44NWMuNDMuMTguODIuNDEgMS4xOC42OWwxLjc0LS43Yy4xNi0uMDYuMzQgMCAuNDMuMTVsMS40IDIuNDJjLjA5LjE1LjA1LjM0LS4wOC40NWwtMS40OCAxLjE2Yy4wMy4yMy4wNS40Ni4wNS42OXonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdsaWdodF9idWxiJyxcbiAgdmlld0JveDogJzAgMCAzMiAzNScsXG4gIHBhdGg6ICdNMTEuNTg1IDMxLjA1Nmw4LjM4LS40OTN2LS45ODZsLTguMzguNDkzek0xMS41ODUgMzMuMDI4TDE1Ljc3NSAzNWw0LjE5LTEuOTcyVjMxLjU1bC04LjM4LjQ5M3YuOTg2em02LjkyNi0uNDA3bC0yLjczNiAxLjI5LTIuMTMtMS4wMDQgNC44NjYtLjI4NnpNMTUuNzc1IDcuMzk0Yy00LjYzIDAtOC4zOCAzLjIwNS04LjM4IDguMzggMCA1LjE3NyA0LjE5IDYuOTAyIDQuMTkgMTIuODE4di40OTNsOC4zOC0uNDkzYzAtNS45MTYgNC4xOS04LjE4OCA0LjE5LTEyLjgxN2E4LjM4IDguMzggMCAwMC04LjM4LTguMzh6bTUuNjE3IDEzLjQ4Yy0xLjAyNSAxLjgzNy0yLjE3NCAzLjg5Mi0yLjM4MSA2Ljc4NmwtNi40NC4zOGMtLjEyOS0zLjAxLTEuMjktNS4wMjEtMi4zMi02LjgwOC0uNDkzLS44LS45MjgtMS42MzYtMS4yOTktMi41aDEzLjU1NmMtLjMyNS43MDgtLjcwNCAxLjQwMy0xLjExNiAyLjE0MnptMS40NzktMy4xMjhIOC42MjdhNy43OTMgNy43OTMgMCAwMS0uMjQ3LTEuOTcxYzAtNC4zNTMgMy4wNDItNy4zOTUgNy4zOTUtNy4zOTVhNy4zOTQgNy4zOTQgMCAwMTcuMzk0IDcuMzk1IDYuNzM5IDYuNzM5IDAgMDEtLjMgMS45NzFoLjAwMnpNMjYuNjIgMTUuMjgyaDQuOTN2MWgtNC45M3pNMjMuMDk0IDcuNzU2bDIuMDkxLTIuMDkxLjY5OC42OTctMi4wOTIgMi4wOTJ6TTE1LjI4MiAwaDF2NC45M2gtMXpNNS42NjYgNi4zNjJsLjY5Ny0uNjk3IDIuMDkxIDIuMDkxLS42OTcuNjk3ek0wIDE1LjI4Mmg0LjkzdjFIMHonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdyZWNlaXB0JyxcbiAgdmlld0JveDogJzAgMCAxOCAxOCcsXG4gIHBhdGg6ICdNOC45OTEgMEM0LjAyMyAwIDAgNC4wMzIgMCA5czQuMDIzIDkgOC45OTEgOUMxMy45NjggMTggMTggMTMuOTY4IDE4IDlzLTQuMDMyLTktOS4wMDktOXptMy44MTYgMTQuNEw5IDEyLjEwNSA1LjE5MyAxNC40bDEuMDA4LTQuMzI5LTMuMzU3LTIuOTA3IDQuNDI4LS4zNzhMOSAyLjdsMS43MjggNC4wNzcgNC40MjguMzc4LTMuMzU3IDIuOTA3eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2Nsb3NlJyxcbiAgY29tcGxleENvbnRlbnRzOiBgXG4gICAgPHBhdGggZD1cIk03IDhsOS43MTYgOS43MTZtMC05LjcxNkw3IDE3LjcxNlwiIFxuICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIFxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjJcIi8+XG4gIGBcbn0pO1xuIiwiaW1wb3J0IHRodW1iSWNvbiBmcm9tICcuL3RodW1iLmpzJztcbmltcG9ydCByZWNlaXB0SWNvbiBmcm9tICcuL3JlY2VpcHQuanMnO1xuaW1wb3J0IHBhbnRoZW9uSWNvbiBmcm9tICcuL3BhbnRoZW9uLmpzJztcbmltcG9ydCBtaWNJY29uIGZyb20gJy4vbWljLmpzJztcbmltcG9ydCBkaXJlY3Rpb25zSWNvbiBmcm9tICcuL2RpcmVjdGlvbnMuanMnO1xuaW1wb3J0IGNhbGVuZGFySWNvbiBmcm9tICcuL2NhbGVuZGFyLmpzJztcbmltcG9ydCBjYWxsb3V0SWNvbiBmcm9tICcuL2NhbGxvdXQuanMnO1xuaW1wb3J0IGluZm9JY29uIGZyb20gJy4vaW5mby5qcyc7XG5pbXBvcnQgYnJpZWZjYXNlSWNvbiBmcm9tICcuL2JyaWVmY2FzZS5qcyc7XG5pbXBvcnQga2Fib2JJY29uIGZyb20gJy4va2Fib2IuanMnO1xuaW1wb3J0IHBlcnNvbkljb24gZnJvbSAnLi9wZXJzb24uanMnO1xuaW1wb3J0IG1hZ25pZnlpbmdHbGFzc0ljb24gZnJvbSAnLi9tYWduaWZ5aW5nX2dsYXNzLmpzJztcbmltcG9ydCBvZmZpY2VJY29uIGZyb20gJy4vb2ZmaWNlLmpzJztcbmltcG9ydCBsaW5rSWNvbiBmcm9tICcuL2xpbmsuanMnO1xuaW1wb3J0IHdpbmRvd0ljb24gZnJvbSAnLi93aW5kb3cuanMnO1xuaW1wb3J0IHBob25lSWNvbiBmcm9tICcuL3Bob25lLmpzJztcbmltcG9ydCB0YWdJY29uIGZyb20gJy4vdGFnLmpzJztcbmltcG9ydCBkb2N1bWVudEljb24gZnJvbSAnLi9kb2N1bWVudC5qcyc7XG5pbXBvcnQgY2hldnJvbkljb24gZnJvbSAnLi9jaGV2cm9uLmpzJztcbmltcG9ydCBzdXBwb3J0SWNvbiBmcm9tICcuL3N1cHBvcnQuanMnO1xuaW1wb3J0IHlleHRJY29uIGZyb20gJy4veWV4dC5qcyc7XG5pbXBvcnQgcGluSWNvbiBmcm9tICcuL3Bpbi5qcyc7XG5pbXBvcnQgZ2Vhckljb24gZnJvbSAnLi9nZWFyLmpzJztcbmltcG9ydCBsaWdodEJ1bGJJY29uIGZyb20gJy4vbGlnaHRfYnVsYi5qcyc7XG5pbXBvcnQgc3Rhckljb24gZnJvbSAnLi9zdGFyLmpzJztcbmltcG9ydCBjbG9zZSBmcm9tICcuL2Nsb3NlLmpzJztcblxuY29uc3QgaWNvbnNBcnJheSA9IFtcbiAgdGh1bWJJY29uLFxuICByZWNlaXB0SWNvbixcbiAgcGFudGhlb25JY29uLFxuICBtaWNJY29uLFxuICBkaXJlY3Rpb25zSWNvbixcbiAgY2FsZW5kYXJJY29uLFxuICBjYWxsb3V0SWNvbixcbiAgaW5mb0ljb24sXG4gIGJyaWVmY2FzZUljb24sXG4gIGthYm9iSWNvbixcbiAgcGVyc29uSWNvbixcbiAgbWFnbmlmeWluZ0dsYXNzSWNvbixcbiAgb2ZmaWNlSWNvbixcbiAgbGlua0ljb24sXG4gIHdpbmRvd0ljb24sXG4gIHBob25lSWNvbixcbiAgdGFnSWNvbixcbiAgZG9jdW1lbnRJY29uLFxuICBjaGV2cm9uSWNvbixcbiAgc3VwcG9ydEljb24sXG4gIHlleHRJY29uLFxuICBwaW5JY29uLFxuICBnZWFySWNvbixcbiAgbGlnaHRCdWxiSWNvbixcbiAgY2xvc2Vcbl07XG5cbmNvbnN0IEljb25zID0ge307XG5cbmljb25zQXJyYXkuZm9yRWFjaChpY29uID0+IHtcbiAgSWNvbnNbaWNvbi5uYW1lXSA9IGljb24ubWFya3VwKCk7XG59KTtcblxuSWNvbnMuZGVmYXVsdCA9IHN0YXJJY29uLm1hcmt1cCgpO1xuXG5leHBvcnQgZGVmYXVsdCBJY29ucztcbiIsIi8qKiBAbW9kdWxlIEljb25Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEljb25zIGZyb20gJy4uLy4uL2ljb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBJY29uQ29tcG9uZW50XG4gICAqIEBwYXJhbSBvcHRzXG4gICAqIEBwYXJhbSBvcHRzLmljb25OYW1lIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBvcHRzLmN1c3RvbUljb24ge3N0cmluZ31cbiAgICogQHBhcmFtIG9wdHMuaWNvblVybCB7c3RyaW5nfVxuICAgKi9cbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSwgc3lzdGVtT3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cywgc3lzdGVtT3B0cyk7XG5cbiAgICAvKipcbiAgICAgKiBuYW1lIG9mIGFuIGljb24gZnJvbSB0aGUgZGVmYXVsdCBpY29uIHNldFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5pY29uTmFtZSA9IG9wdHMuaWNvbk5hbWUgfHwgJ2RlZmF1bHQnO1xuXG4gICAgLyoqXG4gICAgICogdGhlIG1hcmt1cCBmb3IgYSBmdWxseSBjdXN0b20gaWNvblxuICAgICAqIEB0eXBlIHsqfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5jdXN0b21JY29uID0gb3B0cy5jdXN0b21JY29uIHx8IG51bGw7XG4gICAgLyoqXG4gICAgICogdGhlIHVybCB0byBhIGN1c3RvbSBpbWFnZSBpY29uXG4gICAgICogQHR5cGUge251bGx9XG4gICAgICovXG4gICAgdGhpcy5pY29uVXJsID0gb3B0cy5pY29uVXJsIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogZ2V0dGVyIGZvciB0aGUgaW1hZ2UgcGFzdGVkIHRvIGhhbmRsZWJhcnNcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldCBpbWFnZSAoKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tSWNvbikge1xuICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tSWNvbjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pY29uVXJsKSB7XG4gICAgICByZXR1cm4gYDxpbWcgc3JjPVwiJHt0aGlzLmljb25Vcmx9XCIgYWx0PVwiXCIgY2xhc3M9XCJJY29uLWltYWdlXCI+YDtcbiAgICB9XG5cbiAgICBpZiAoSWNvbnNbdGhpcy5pY29uTmFtZV0pIHtcbiAgICAgIHJldHVybiBJY29uc1t0aGlzLmljb25OYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gSWNvbnMuZGVmYXVsdDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdJY29uQ29tcG9uZW50JztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAnaWNvbnMvaWNvbic7XG4gIH1cblxuICAvKipcbiAgICogYWxsb3dpbmcgZHVwbGljYXRlc1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvdmVycmlkZXMgZGVmYXVsdCBmdW5jdGlvbmFsaXR5IHRvIHByb3ZpZGUgbmFtZSBhbmQgbWFya3VwXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEByZXR1cm5zIHtJY29uQ29tcG9uZW50fVxuICAgKi9cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgIG5hbWU6IHRoaXMuaWNvbk5hbWUgPyB0aGlzLmljb25OYW1lIDogJ2N1c3RvbSdcbiAgICB9KSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gJy4vY29tcG9uZW50bWFuYWdlcic7XG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnO1xuXG5pbXBvcnQgTmF2aWdhdGlvbkNvbXBvbmVudCBmcm9tICcuL25hdmlnYXRpb24vbmF2aWdhdGlvbmNvbXBvbmVudCc7XG5cbmltcG9ydCBTZWFyY2hDb21wb25lbnQgZnJvbSAnLi9zZWFyY2gvc2VhcmNoY29tcG9uZW50JztcbmltcG9ydCBGaWx0ZXJTZWFyY2hDb21wb25lbnQgZnJvbSAnLi9zZWFyY2gvZmlsdGVyc2VhcmNoY29tcG9uZW50JztcbmltcG9ydCBBdXRvQ29tcGxldGVDb21wb25lbnQgZnJvbSAnLi9zZWFyY2gvYXV0b2NvbXBsZXRlY29tcG9uZW50JztcbmltcG9ydCBTcGVsbENoZWNrQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL3NwZWxsY2hlY2tjb21wb25lbnQnO1xuXG5pbXBvcnQgRmlsdGVyQm94Q29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9maWx0ZXJib3hjb21wb25lbnQnO1xuaW1wb3J0IEZpbHRlck9wdGlvbnNDb21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL2ZpbHRlcm9wdGlvbnNjb21wb25lbnQnO1xuaW1wb3J0IFJhbmdlRmlsdGVyQ29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9yYW5nZWZpbHRlcmNvbXBvbmVudCc7XG5pbXBvcnQgRGF0ZVJhbmdlRmlsdGVyQ29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9kYXRlcmFuZ2VmaWx0ZXJjb21wb25lbnQnO1xuaW1wb3J0IER5bmFtaWNGaWx0ZXJzQ29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9keW5hbWljZmlsdGVyc2NvbXBvbmVudCc7XG5pbXBvcnQgR2VvTG9jYXRpb25Db21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL2dlb2xvY2F0aW9uY29tcG9uZW50JztcblxuaW1wb3J0IERpcmVjdEFuc3dlckNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvZGlyZWN0YW5zd2VyY29tcG9uZW50JztcbmltcG9ydCBSZXN1bHRzQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9yZXN1bHRzY29tcG9uZW50JztcbmltcG9ydCBBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9hY2NvcmRpb25yZXN1bHRzY29tcG9uZW50LmpzJztcbmltcG9ydCBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy91bml2ZXJzYWxyZXN1bHRzY29tcG9uZW50JztcblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvbG9jYXRpb25yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvZXZlbnRyZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmltcG9ydCBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcGVvcGxlcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5pbXBvcnQgTWFwQ29tcG9uZW50IGZyb20gJy4vbWFwL21hcGNvbXBvbmVudCc7XG5pbXBvcnQgUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IGZyb20gJy4vcXVlc3Rpb25zL3F1ZXN0aW9uc3VibWlzc2lvbmNvbXBvbmVudCc7XG5cbmltcG9ydCBJY29uQ29tcG9uZW50IGZyb20gJy4vaWNvbnMvaWNvbmNvbXBvbmVudC5qcyc7XG5cbmV4cG9ydCBjb25zdCBDT01QT05FTlRfTUFOQUdFUiA9IG5ldyBDb21wb25lbnRNYW5hZ2VyKClcbi8vIENvcmUgQ29tcG9uZW50XG4gIC5yZWdpc3RlcihDb21wb25lbnQpXG5cbi8vIE5hdmlnYXRpb24gQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoTmF2aWdhdGlvbkNvbXBvbmVudClcblxuLy8gU2VhcmNoIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKFNlYXJjaENvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEZpbHRlclNlYXJjaENvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEF1dG9Db21wbGV0ZUNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFNwZWxsQ2hlY2tDb21wb25lbnQpXG5cbi8vIEZpbHRlciBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihGaWx0ZXJCb3hDb21wb25lbnQpXG4gIC5yZWdpc3RlcihGaWx0ZXJPcHRpb25zQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoUmFuZ2VGaWx0ZXJDb21wb25lbnQpXG4gIC5yZWdpc3RlcihEYXRlUmFuZ2VGaWx0ZXJDb21wb25lbnQpXG4gIC5yZWdpc3RlcihEeW5hbWljRmlsdGVyc0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEdlb0xvY2F0aW9uQ29tcG9uZW50KVxuXG4vLyBSZXN1bHRzIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKERpcmVjdEFuc3dlckNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihSZXN1bHRzQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoUmVzdWx0c0l0ZW1Db21wb25lbnQpXG4gIC5yZWdpc3RlcihBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQpXG4gIC5yZWdpc3RlcihQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudClcblxuICAucmVnaXN0ZXIoTWFwQ29tcG9uZW50KVxuXG4vLyBRdWVzdGlvbnMgQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50KVxuXG4vLyBIZWxwZXIgQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoSWNvbkNvbXBvbmVudCk7XG4iLCIvKiogQG1vZHVsZSBUZW1wbGF0ZUxvYWRlciAqL1xuXG5pbXBvcnQgRE9NIGZyb20gJy4uL2RvbS9kb20nO1xuaW1wb3J0IHsgQ09NUElMRURfVEVNUExBVEVTX1VSTCB9IGZyb20gJy4uLy4uL2NvcmUvY29uc3RhbnRzJztcblxuLyoqXG4gKiBUZW1wbGF0ZUxvYWRlciBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgbG9hZGluZyB0ZW1wbGF0ZXMgYXN5bmNocm9ub3VzbHlcbiAqIGZyb20gdGhlIHNlcnZlciBhbmQgcmVnaXN0ZXJzIHRoZW0gd2l0aCB0aGUgcHJvcGVyIHJlbmRlcmVyLlxuICogSXQgYWxzbyBhbGxvd3MgeW91IHRvIGFzc2lnbiB0aGVtIHN5bmNocm9ub3VzbHkuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlTG9hZGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIGlmICghVGVtcGxhdGVMb2FkZXIuc2V0SW5zdGFuY2UodGhpcykpIHtcbiAgICAgIHJldHVybiBUZW1wbGF0ZUxvYWRlci5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSB1cmwgdG8gZmV0Y2ggY29tcGlsZWQgdGVtcGxhdGVzIGZyb21cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVVcmwgPSBjb25maWcudGVtcGxhdGVVcmwgfHwgQ09NUElMRURfVEVNUExBVEVTX1VSTDtcblxuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHt9O1xuICAgIHRoaXMuX29uTG9hZGVkID0gZnVuY3Rpb24gKCkge307XG4gICAgdGhpcy5faW5pdCgpO1xuICB9XG5cbiAgc3RhdGljIHNldEluc3RhbmNlIChpbnN0YW5jZSkge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cblxuICBfaW5pdCAoKSB7XG4gICAgdGhpcy5mZXRjaFRlbXBsYXRlcygpO1xuICB9XG5cbiAgZmV0Y2hUZW1wbGF0ZXMgKCkge1xuICAgIC8vIElmIHdlIGFscmVhZHkgaGF2ZSB0ZW1wbGF0ZXMgbG9hZGVkLCBkbyBub3RoaW5nXG4gICAgbGV0IG5vZGUgPSBET00ucXVlcnkoJyN5ZXh0LWFuc3dlcnMtdGVtcGxhdGVzJyk7XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJbmplY3QgYSBzY3JpcHQgdG8gZmV0Y2ggdGhlIGNvbXBpbGVkIHRlbXBsYXRlcyxcbiAgICAvLyB3cmFwcGluZyBpdCBhIFByb21pc2UgZm9yIGNsZWFubGluZXNzXG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IHNjcmlwdCA9IERPTS5jcmVhdGVFbCgnc2NyaXB0Jywge1xuICAgICAgICBpZDogJ3lleHQtYW5zd2Vycy10ZW1wbGF0ZXMnLFxuICAgICAgICBvbmxvYWQ6IHJlc29sdmUsXG4gICAgICAgIG9uZXJyb3I6IHJlamVjdCxcbiAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgIHNyYzogdGhpcy5fdGVtcGxhdGVVcmxcbiAgICAgIH0pO1xuXG4gICAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAvLyBUT0RPKGJpbGx5KSBJbXBsbWVuZXQgZXJyb3IgaGFuZGxpbmcgaGVyZSAoZS5nLiByZXF1ZXN0IGNvdWxkIGZhaWwpXG4gICAgICAgIGNvbnNvbGUubG9nKCdUZW1wbGF0ZXMgbG9hZGVkIHN1Y2Nlc3NmdWxseSEnKTtcbiAgICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlZ2lzdGVyIHRoZSB0ZW1wbGF0ZXMgaW50ZXJuYWxseSBzbyB0aGF0IHRoZXkgY2FuIGJlIGxhdGVyIGNvbnN1bWVkXG4gICAqIChlLmcuIGJ5IGNvbXBvbmVudHMgYW5kIHJlbmRlcmVycykgd2l0aCBjb252aWVuaWVuY2UuXG4gICAqXG4gICAqIGBmZXRjaFRlbXBsYXRlc2Agd2lsbCBhdXRvbWF0aWNhbGx5IGNhbGwgdGhpcywgcHJvdmlkaW5nIHRoZSBjb21waWxlZCB0ZW1wbGF0ZXMgZnJvbSB0aGUgc2VydmVyLlxuICAgKi9cbiAgcmVnaXN0ZXIgKHRlbXBsYXRlcykge1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHRlbXBsYXRlcztcblxuICAgIC8vIE5vdGlmeSBvdXIgY29uc3VtZXJzIHRoYXQgdGhlIHRlbXBsYXRlcyBhcmUgaGVyZSA6KVxuICAgIHRoaXMuX29uTG9hZGVkKHRoaXMuX3RlbXBsYXRlcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBvbkxvYWRlZCAoY2IpIHtcbiAgICB0aGlzLl9vbkxvYWRlZCA9IGNiO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0ICh0ZW1wbGF0ZU5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVzW3RlbXBsYXRlTmFtZV07XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiBUaGUgaW50ZXJuYWwgdGVtcGxhdGUgY29sbGVjdGlvblxuICAgKi9cbiAgZ2V0VGVtcGxhdGVzICgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5leHBvcnQgeyBDT01QT05FTlRfTUFOQUdFUiB9IGZyb20gJy4vY29tcG9uZW50cy9jb25zdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERPTSB9IGZyb20gJy4vZG9tL2RvbSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlYXJjaFBhcmFtcyB9IGZyb20gJy4vZG9tL3NlYXJjaHBhcmFtcyc7XG5cbmV4cG9ydCB7IFJlbmRlcmVycyB9IGZyb20gJy4vcmVuZGVyaW5nL2NvbnN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGVtcGxhdGVMb2FkZXIgfSBmcm9tICcuL3JlbmRlcmluZy90ZW1wbGF0ZWxvYWRlcic7XG4iLCIvKiogQG1vZHVsZSBFcnJvclJlcG9ydGVyICovXG5cbmltcG9ydCB7IEFuc3dlcnNCYXNlRXJyb3IgfSBmcm9tICcuL2Vycm9ycyc7XG5cbmltcG9ydCBBcGlSZXF1ZXN0IGZyb20gJy4uL2h0dHAvYXBpcmVxdWVzdCc7XG5pbXBvcnQgeyBMSUJfVkVSU0lPTiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbi8qKlxuICogRXJyb3JSZXBvcnRlciBpcyB1c2VkIGZvciByZXBvcnRpbmcgZXJyb3JzIHRvIHRoZSBjb25zb2xlIGFuZCBzZXJ2ZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JSZXBvcnRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgYXBpS2V5IHRvIHVzZSBmb3IgcmVwb3J0aW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmFwaUtleSA9IGNvbmZpZy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZXhwZXJpZW5jZUtleSB0byB1c2Ugd2hlbiByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZXhwZXJpZW5jZUtleSA9IGNvbmZpZy5leHBlcmllbmNlS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFuc3dlcnMgY29uZmlnIHZlcnNpb24gdXNlZCBmb3IgYXBpIHJlcXVlc3RzXG4gICAgICogQHR5cGUge3N0cmluZ3xudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5leHBlcmllbmNlVmVyc2lvbiA9IGNvbmZpZy5leHBlcmllbmNlVmVyc2lvbiB8fCAnY29uZmlnMS4wJztcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHByaW50IGVudGlyZSBlcnJvciBvYmplY3RzIHRvIHRoZSBjb25zb2xlIGZvciBpbnNwZWN0aW9uXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5wcmludFZlcmJvc2UgPSBjb25maWcucHJpbnRWZXJib3NlO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgcmVwb3J0IHRoZSBlcnJvciB0aGUgc2VydmVyIGZvciBsb2dnaW5nIGFuZCBtb25pdG9yaW5nXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5zZW5kVG9TZXJ2ZXIgPSBjb25maWcuc2VuZFRvU2VydmVyO1xuXG4gICAgLy8gQXR0YWNoIHJlcG9ydGluZyBsaXN0ZW5lcnMgdG8gd2luZG93XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZSA9PiB0aGlzLnJlcG9ydChlLmVycm9yKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VuaGFuZGxlZHJlamVjdGlvbicsIGUgPT4gdGhpcy5yZXBvcnQoZS5lcnJvcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcG9ydCBwcmV0dHkgcHJpbnRzIHRoZSBlcnJvciB0byB0aGUgY29uc29sZSwgb3B0aW9uYWxseVxuICAgKiBwcmludHMgdGhlIGVudGlyZSBlcnJvciBpZiBgcHJpbnRWZXJib3NlYCBpcyB0cnVlLCBhbmQgc2VuZHMgdGhlXG4gICAqIGVycm9yIHRvIHRoZSBzZXJ2ZXIgdG8gYmUgbG9nZ2VkIGlmIGBzZW5kVG9TZXJ2ZXJgIGlzIHRydWVcbiAgICogQHBhcmFtIHtBbnN3ZXJzQmFzZUVycm9yfSBlcnIgVGhlIGVycm9yIHRvIGJlIHJlcG9ydGVkXG4gICAqIEByZXR1cm5zIHtBbnN3ZXJzQmFzZUVycm9yfSBUaGUgcmVwb3J0ZWQgZXJyb3JcbiAgICovXG4gIHJlcG9ydCAoZXJyKSB7XG4gICAgaWYgKCEoZXJyIGluc3RhbmNlb2YgQW5zd2Vyc0Jhc2VFcnJvcikgfHwgZXJyLnJlcG9ydGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXJyLnJlcG9ydGVkID0gdHJ1ZTtcblxuICAgIHRoaXMucHJpbnRFcnJvcihlcnIpO1xuXG4gICAgaWYgKHRoaXMuc2VuZFRvU2VydmVyKSB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL2Vycm9ycycsXG4gICAgICAgIGFwaUtleTogdGhpcy5hcGlLZXksXG4gICAgICAgIHZlcnNpb246IDIwMTkwMzAxLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAnZXJyb3InOiBlcnIudG9Kc29uKCksXG4gICAgICAgICAgJ2xpYlZlcnNpb24nOiBMSUJfVkVSU0lPTixcbiAgICAgICAgICAnZXhwZXJpZW5jZVZlcnNpb24nOiB0aGlzLmV4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgICAgICdleHBlcmllbmNlS2V5JzogdGhpcy5leHBlcmllbmNlS2V5XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXF1ZXN0LmdldCgpXG4gICAgICAgIC5jYXRjaChjb25zb2xlLmVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycjtcbiAgfVxuXG4gIC8qKlxuICAgKiBwcmludHMgdGhlIGdpdmVuIGVycm9yIHRvIHRoZSBicm93c2VyIGNvbnNvbGVcbiAgICogQHBhcmFtIHtBbnN3ZXJzQmFzZUVycm9yfSBlcnIgVGhlIGVycm9yIHRvIGJlIHByaW50ZWRcbiAgICovXG4gIHByaW50RXJyb3IgKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyLnRvU3RyaW5nKCkpO1xuICAgIGlmICh0aGlzLnByaW50VmVyYm9zZSkge1xuICAgICAgY29uc29sZS5sb2coeyAuLi5lcnIgfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uL2RvbS9zZWFyY2hwYXJhbXMnO1xuaW1wb3J0IHsgQW5zd2Vyc1N0b3JhZ2VFcnJvciB9IGZyb20gJy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5cbi8qKiBAbW9kdWxlIFBlcnNpc3RlbnRTdG9yYWdlICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcnNpc3RlbnRTdG9yYWdlIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgcGFyYW1zIG1vZGVsXG4gICAgICogQHR5cGUge1NlYXJjaFBhcmFtc31cbiAgICAgKi9cbiAgICB0aGlzLl9wYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IGhpc3RvcnkgZWRpdCB0aW1lciwgaWYgYW55XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9oaXN0b3J5VGltZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxpc3Qgb2YgbGlzdGVuZXJzIHRvIGV2ZXJ5IHN0b3JhZ2UgdXBkYXRlXG4gICAgICogQHR5cGUge2Z1bmN0aW9uW119XG4gICAgICovXG4gICAgdGhpcy5fdXBkYXRlTGlzdGVuZXIgPSBjb25maWcudXBkYXRlTGlzdGVuZXIgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBsaXN0ZW5lcnMgdG8gc3RvcmFnZSByZXNldHNcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb25bXX1cbiAgICAgKi9cbiAgICB0aGlzLl9yZXNldExpc3RlbmVyID0gY29uZmlnLnJlc2V0TGlzdGVuZXIgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICB3aW5kb3cub25wb3BzdGF0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX3BhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuICAgICAgdGhpcy5fY2FsbExpc3RlbmVyKHRoaXMuX3VwZGF0ZUxpc3RlbmVyKTtcbiAgICAgIHRoaXMuX2NhbGxMaXN0ZW5lcih0aGlzLl9yZXNldExpc3RlbmVyKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydCB0aGUgZ2l2ZW4ga2V5L3ZhbHVlIHBhaXIgaW50byBzdG9yYWdlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSB0byBpbnNlcnQgdGhlIGRhdGEgaW5cbiAgICogQHBhcmFtIHsqfSBkYXRhIFRoZSBkYXRhIHRvIGluc2VydFxuICAgKi9cbiAgc2V0IChrZXksIGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzU3RvcmFnZUVycm9yKCdTdG9yYWdlIGRhdGEga2V5IG11c3QgYmUgYSBzdHJpbmcnLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIGxldCBuZXdEYXRhID0gZGF0YTtcbiAgICBpZiAodHlwZW9mIGRhdGEgIT09ICdzdHJpbmcnKSB7XG4gICAgICBuZXdEYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHRoaXMuX3BhcmFtcy5zZXQoa2V5LCBuZXdEYXRhKTtcbiAgICB0aGlzLl91cGRhdGVIaXN0b3J5KCk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHRoZSBnaXZlbiBrZXkgZnJvbSBzdG9yYWdlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSB0byBkZWxldGVcbiAgICovXG4gIGRlbGV0ZSAoa2V5KSB7XG4gICAgdGhpcy5fcGFyYW1zLmRlbGV0ZShrZXkpO1xuICAgIHRoaXMuX3VwZGF0ZUhpc3RvcnkoKTtcbiAgfVxuXG4gIF91cGRhdGVIaXN0b3J5ICgpIHtcbiAgICBpZiAodGhpcy5faGlzdG9yeVRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5faGlzdG9yeVRpbWVyKTtcbiAgICB9XG5cbiAgICAvLyBiYXRjaCB1cGRhdGUgY2FsbHMgYWNyb3NzIGNvbXBvbmVudHMgdG8gYXZvaWQgdXBkYXRpbmcgdGhlIHVybCB0b28gbXVjaFxuICAgIHRoaXMuX2hpc3RvcnlUaW1lciA9IHNldFRpbWVvdXQoXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2hpc3RvcnlUaW1lciA9IG51bGw7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBgPyR7dGhpcy5fcGFyYW1zLnRvU3RyaW5nKCl9YCk7XG4gICAgICAgIHRoaXMuX2NhbGxMaXN0ZW5lcih0aGlzLl91cGRhdGVMaXN0ZW5lcik7XG4gICAgICB9LFxuICAgICAgMTAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2UgdGhlIGdpdmVuIGxpc3Qgb2YgY2FsbGJhY2tzIHdpdGggdGhlIGN1cnJlbnQgc3RvcmFnZSBkYXRhXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb25bXX0gbGlzdGVuZXJzIFRoZSBjYWxsYmFja3MgdG8gaW52b2tlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY2FsbExpc3RlbmVyIChsaXN0ZW5lcikge1xuICAgIGxpc3RlbmVyKHRoaXMuZ2V0QWxsKCksIHRoaXMuX3BhcmFtcy50b1N0cmluZygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIHRoZSBrZXkvdmFsdWUgcGFpcnMgaW4gc3RvcmFnZVxuICAgKi9cbiAgZ2V0QWxsICgpIHtcbiAgICBjb25zdCBhbGxQYXJhbXMgPSB7fTtcbiAgICBjb25zdCBlbnRyaWVzID0gQXJyYXkuZnJvbSh0aGlzLl9wYXJhbXMuZW50cmllcygpKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IGVudHJpZXNbaV1bMF07XG4gICAgICBjb25zdCB2YWwgPSBlbnRyaWVzW2ldWzFdO1xuICAgICAgYWxsUGFyYW1zW2tleV0gPSB2YWw7XG4gICAgfVxuICAgIHJldHVybiBhbGxQYXJhbXM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbmltcG9ydCBDb3JlIGZyb20gJy4vY29yZS9jb3JlJztcblxuaW1wb3J0IHtcbiAgVGVtcGxhdGVMb2FkZXIsXG4gIENPTVBPTkVOVF9NQU5BR0VSLFxuICBSZW5kZXJlcnMsXG4gIERPTVxufSBmcm9tICcuL3VpL2luZGV4JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi91aS9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5cbmltcG9ydCBFcnJvclJlcG9ydGVyIGZyb20gJy4vY29yZS9lcnJvcnMvZXJyb3JyZXBvcnRlcic7XG5pbXBvcnQgeyBBbmFseXRpY3NSZXBvcnRlciB9IGZyb20gJy4vY29yZSc7XG5pbXBvcnQgUGVyc2lzdGVudFN0b3JhZ2UgZnJvbSAnLi91aS9zdG9yYWdlL3BlcnNpc3RlbnRzdG9yYWdlJztcbmltcG9ydCBHbG9iYWxTdG9yYWdlIGZyb20gJy4vY29yZS9zdG9yYWdlL2dsb2JhbHN0b3JhZ2UnO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4vY29yZS9hbmFseXRpY3MvYW5hbHl0aWNzZXZlbnQnO1xuXG4vKipcbiAqIFRoZSBtYWluIEFuc3dlcnMgaW50ZXJmYWNlXG4gKi9cbmNsYXNzIEFuc3dlcnMge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgaWYgKCFBbnN3ZXJzLnNldEluc3RhbmNlKHRoaXMpKSB7XG4gICAgICByZXR1cm4gQW5zd2Vycy5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBDb21wb25lbnQgYmFzZSBjbGFzcyBmb3IgY3VzdG9tXG4gICAgICogY29tcG9uZW50cyB0byBleHRlbmRcbiAgICAgKi9cbiAgICB0aGlzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIG9mIHRoZSByZW5kZXJlciB0byB1c2UgZm9yIHRoZSBjb21wb25lbnRzXG4gICAgICogVGhpcyBpcyBwcm92aWRlZCBkdXJpbmcgaW5pdGlhbGl6YXRpb24uXG4gICAgICogQHR5cGUge1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXJzLkhhbmRsZWJhcnMoKTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlclxuICAgICAqIEB0eXBlIHtDb21wb25lbnRNYW5hZ2VyfVxuICAgICAqL1xuICAgIHRoaXMuY29tcG9uZW50cyA9IENPTVBPTkVOVF9NQU5BR0VSO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNvcmUgYXBpXG4gICAgICogQHR5cGUge0NvcmV9XG4gICAgICovXG4gICAgdGhpcy5jb3JlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gaW52b2tlIG9uY2UgdGhlIGxpYnJhcnkgaXMgcmVhZHkuXG4gICAgICogVHlwaWNhbGx5IGZpcmVkIGFmdGVyIHRlbXBsYXRlcyBhcmUgZmV0Y2hlZCBmcm9tIHNlcnZlciBmb3IgcmVuZGVyaW5nLlxuICAgICAqL1xuICAgIHRoaXMuX29uUmVhZHkgPSBmdW5jdGlvbiAoKSB7fTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRJbnN0YW5jZSAoaW5zdGFuY2UpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UgKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgaW5pdCAoY29uZmlnKSB7XG4gICAgY29uc3QgZ2xvYmFsU3RvcmFnZSA9IG5ldyBHbG9iYWxTdG9yYWdlKCk7XG4gICAgY29uc3QgcGVyc2lzdGVudFN0b3JhZ2UgPSBuZXcgUGVyc2lzdGVudFN0b3JhZ2Uoe1xuICAgICAgdXBkYXRlTGlzdGVuZXI6IGNvbmZpZy5vblN0YXRlQ2hhbmdlLFxuICAgICAgcmVzZXRMaXN0ZW5lcjogZGF0YSA9PiBnbG9iYWxTdG9yYWdlLnNldEFsbChkYXRhKVxuICAgIH0pO1xuICAgIGdsb2JhbFN0b3JhZ2Uuc2V0QWxsKHBlcnNpc3RlbnRTdG9yYWdlLmdldEFsbCgpKTtcblxuICAgIHRoaXMuY29yZSA9IG5ldyBDb3JlKHtcbiAgICAgIGFwaUtleTogY29uZmlnLmFwaUtleSxcbiAgICAgIGdsb2JhbFN0b3JhZ2U6IGdsb2JhbFN0b3JhZ2UsXG4gICAgICBwZXJzaXN0ZW50U3RvcmFnZTogcGVyc2lzdGVudFN0b3JhZ2UsXG4gICAgICBleHBlcmllbmNlS2V5OiBjb25maWcuZXhwZXJpZW5jZUtleSxcbiAgICAgIGZpZWxkRm9ybWF0dGVyczogY29uZmlnLmZpZWxkRm9ybWF0dGVycyxcbiAgICAgIGV4cGVyaWVuY2VWZXJzaW9uOiBjb25maWcuZXhwZXJpZW5jZVZlcnNpb24sXG4gICAgICBsb2NhbGU6IGNvbmZpZy5sb2NhbGVcbiAgICB9KTtcblxuICAgIGlmIChjb25maWcub25TdGF0ZUNoYW5nZSAmJiB0eXBlb2YgY29uZmlnLm9uU3RhdGVDaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbmZpZy5vblN0YXRlQ2hhbmdlKHBlcnNpc3RlbnRTdG9yYWdlLmdldEFsbCgpLCB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKSk7XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzXG4gICAgICAuc2V0Q29yZSh0aGlzLmNvcmUpXG4gICAgICAuc2V0UmVuZGVyZXIodGhpcy5yZW5kZXJlcik7XG5cbiAgICBpZiAoY29uZmlnLmJ1c2luZXNzSWQpIHtcbiAgICAgIGNvbnN0IHJlcG9ydGVyID0gbmV3IEFuYWx5dGljc1JlcG9ydGVyKFxuICAgICAgICB0aGlzLmNvcmUsXG4gICAgICAgIGNvbmZpZy5leHBlcmllbmNlS2V5LFxuICAgICAgICBjb25maWcuZXhwZXJpZW5jZVZlcnNpb24sXG4gICAgICAgIGNvbmZpZy5idXNpbmVzc0lkLFxuICAgICAgICBjb25maWcuYW5hbHl0aWNzT3B0aW9ucyk7XG5cbiAgICAgIHRoaXMuY29tcG9uZW50cy5zZXRBbmFseXRpY3NSZXBvcnRlcihyZXBvcnRlcik7XG4gICAgICBpbml0U2Nyb2xsTGlzdGVuZXIocmVwb3J0ZXIpO1xuICAgIH1cblxuICAgIHRoaXMuX29uUmVhZHkgPSBjb25maWcub25SZWFkeSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIGlmIChjb25maWcudXNlVGVtcGxhdGVzID09PSBmYWxzZSB8fCBjb25maWcudGVtcGxhdGVCdW5kbGUpIHtcbiAgICAgIGlmIChjb25maWcudGVtcGxhdGVCdW5kbGUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbml0KGNvbmZpZy50ZW1wbGF0ZUJ1bmRsZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX29uUmVhZHkoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIFRlbXBsYXRlcyBhcmUgY3VycmVudGx5IGRvd25sb2FkZWQgc2VwYXJhdGVseSBmcm9tIHRoZSBDT1JFIGFuZCBVSSBidW5kbGUuXG4gICAgLy8gRnV0dXJlIGVuaGFuY2VtZW50IGlzIHRvIHNoaXAgdGhlIGNvbXBvbmVudHMgd2l0aCB0ZW1wbGF0ZXMgaW4gYSBzZXBhcmF0ZSBidW5kbGUuXG4gICAgdGhpcy50ZW1wbGF0ZXMgPSBuZXcgVGVtcGxhdGVMb2FkZXIoe1xuICAgICAgdGVtcGxhdGVVcmw6IGNvbmZpZy50ZW1wbGF0ZVVybFxuICAgIH0pLm9uTG9hZGVkKCh0ZW1wbGF0ZXMpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuaW5pdCh0ZW1wbGF0ZXMpO1xuXG4gICAgICB0aGlzLl9vblJlYWR5KCk7XG4gICAgfSk7XG5cbiAgICAvLyBSZXBvcnQgZXJyb3JzIHRvIGNvbnNvbGUgJiBzZXJ2ZXJcbiAgICB0aGlzLl9lcnJvclJlcG9ydGVyID0gbmV3IEVycm9yUmVwb3J0ZXIoe1xuICAgICAgYXBpS2V5OiBjb25maWcuYXBpS2V5LFxuICAgICAgZXhwZXJpZW5jZUtleTogY29uZmlnLmV4cGVyaWVuY2VLZXksXG4gICAgICBleHBlcmllbmNlVmVyc2lvbjogY29uZmlnLmV4cGVyaWVuY2VWZXJzaW9uLFxuICAgICAgcHJpbnRWZXJib3NlOiBjb25maWcuZGVidWcsXG4gICAgICBzZW5kVG9TZXJ2ZXI6ICFjb25maWcuc3VwcHJlc3NFcnJvclJlcG9ydHNcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZG9tUmVhZHkgKGNiKSB7XG4gICAgRE9NLm9uUmVhZHkoY2IpO1xuICB9XG5cbiAgb25SZWFkeSAoY2IpIHtcbiAgICB0aGlzLl9vblJlYWR5ID0gY2I7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBjdXN0b20gY29tcG9uZW50IHR5cGUgc28gaXQgY2FuIGJlIGNyZWF0ZWQgdmlhXG4gICAqIGFkZENvbXBvbmVudCBhbmQgdXNlZCBhcyBhIGNoaWxkIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50Q2xhc3NcbiAgICovXG4gIHJlZ2lzdGVyQ29tcG9uZW50VHlwZSAoY29tcG9uZW50Q2xhc3MpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMucmVnaXN0ZXIoY29tcG9uZW50Q2xhc3MpO1xuICB9XG5cbiAgYWRkQ29tcG9uZW50ICh0eXBlLCBvcHRzKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuICAgICAgb3B0cyA9IHtcbiAgICAgICAgY29udGFpbmVyOiBvcHRzXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuY3JlYXRlKHR5cGUsIG9wdHMpLm1vdW50KCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcignRmFpbGVkIHRvIGFkZCBjb21wb25lbnQnLCB0eXBlLCBlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjb21wb25lbnQgLSBhbmQgYWxsIG9mIGl0cyBjaGlsZHJlbiAtIHdpdGggdGhlIGdpdmVuIG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGNvbXBvbmVudCB0byByZW1vdmVcbiAgICovXG4gIHJlbW92ZUNvbXBvbmVudCAobmFtZSkge1xuICAgIHRoaXMuY29tcG9uZW50cy5yZW1vdmVCeU5hbWUobmFtZSk7XG4gIH1cblxuICBjcmVhdGVDb21wb25lbnQgKG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzLmNyZWF0ZSgnQ29tcG9uZW50Jywgb3B0cykubW91bnQoKTtcbiAgfVxuXG4gIHJlZ2lzdGVySGVscGVyIChuYW1lLCBjYikge1xuICAgIHRoaXMucmVuZGVyZXIucmVnaXN0ZXJIZWxwZXIobmFtZSwgY2IpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyIHRvIHNlbmQgYW5hbHl0aWNzIGV2ZW50c1xuICogd2hlbiB0aGUgdXNlciBzY3JvbGxzIHRvIHRoZSBib3R0b20uIERlYm91bmNlcyBzY3JvbGwgZXZlbnRzIHNvXG4gKiB0aGV5IGFyZSBwcm9jZXNzZWQgYWZ0ZXIgdGhlIHVzZXIgc3RvcHMgc2Nyb2xsaW5nXG4gKi9cbmZ1bmN0aW9uIGluaXRTY3JvbGxMaXN0ZW5lciAocmVwb3J0ZXIpIHtcbiAgY29uc3QgREVCT1VOQ0VfVElNRSA9IDEwMDtcbiAgbGV0IHRpbWVvdXQgPSBudWxsO1xuXG4gIGNvbnN0IHNlbmRFdmVudCA9ICgpID0+IHtcbiAgICBpZiAoKHdpbmRvdy5pbm5lckhlaWdodCArIHdpbmRvdy5wYWdlWU9mZnNldCkgPj0gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpIHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEFuYWx5dGljc0V2ZW50KCdTQ1JPTExfVE9fQk9UVE9NX09GX1BBR0UnKTtcbiAgICAgIHJlcG9ydGVyLnJlcG9ydChldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoc2VuZEV2ZW50LCBERUJPVU5DRV9USU1FKTtcbiAgfSk7XG59XG5cbmNvbnN0IEFOU1dFUlMgPSBuZXcgQW5zd2VycygpO1xuZXhwb3J0IGRlZmF1bHQgQU5TV0VSUztcbiJdLCJuYW1lcyI6WyJNZXRob2RzIiwiR0VUIiwiUE9TVCIsIlBVVCIsIkRFTEVURSIsIkh0dHBSZXF1ZXN0ZXIiLCJ1cmwiLCJkYXRhIiwib3B0cyIsInJlcXVlc3QiLCJlbmNvZGVQYXJhbXMiLCJPYmplY3QiLCJhc3NpZ24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNyZWRlbnRpYWxzIiwidW5kZWZpbmVkIiwibWV0aG9kIiwiZmV0Y2giLCJuYXZpZ2F0b3IiLCJzZW5kQmVhY29uIiwicGFyYW1zIiwiaGFzUGFyYW0iLCJpbmRleE9mIiwic2VhcmNoUXVlcnkiLCJrZXkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJMSUJfVkVSU0lPTiIsIkFQSV9CQVNFX1VSTCIsIkNPTVBJTEVEX1RFTVBMQVRFU19VUkwiLCJBTkFMWVRJQ1NfQkFTRV9VUkwiLCJTZWFyY2hQYXJhbXMiLCJfcGFyYW1zIiwid2luZG93IiwiVVJMU2VhcmNoUGFyYW1zIiwicGFyc2UiLCJzZWFyY2giLCJzbGljZSIsImVuY29kZWRQYXJhbXMiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJrZXlWYWwiLCJkZWNvZGUiLCJxdWVyeSIsIlN0cmluZyIsIm5hbWUiLCJ2YWx1ZSIsInN0cmluZyIsInB1c2giLCJlbmNvZGUiLCJqb2luIiwiZW50cmllcyIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJtYXRjaCIsIkFwaVJlcXVlc3QiLCJfcmVxdWVzdGVyIiwiX2Jhc2VVcmwiLCJiYXNlVXJsIiwiX2VuZHBvaW50IiwiZW5kcG9pbnQiLCJfYXBpS2V5IiwiYXBpS2V5IiwiX3ZlcnNpb24iLCJ2ZXJzaW9uIiwiZ2V0IiwicG9zdCIsImJhc2VQYXJhbXMiLCJ1cmxQYXJhbXMiLCJsb2NhdGlvbiIsInN1YnN0cmluZyIsImhhcyIsImtleXMiLCJmb3JFYWNoIiwiQW5zd2Vyc0Jhc2VFcnJvciIsImVycm9yQ29kZSIsIm1lc3NhZ2UiLCJib3VuZGFyeSIsImNhdXNlZEJ5IiwiZXJyb3JNZXNzYWdlIiwicmVwb3J0ZWQiLCJmcm9tIiwidG9TdHJpbmciLCJidWlsdGluRXJyb3IiLCJlcnJvciIsIkFuc3dlcnNCYXNpY0Vycm9yIiwic3RhY2siLCJFcnJvciIsIkFuc3dlcnNDb21wb25lbnRFcnJvciIsImNvbXBvbmVudCIsIkFuc3dlcnNFbmRwb2ludEVycm9yIiwiQW5zd2Vyc0NvcmVFcnJvciIsIkFuc3dlcnNTdG9yYWdlRXJyb3IiLCJzdG9yYWdlS2V5IiwiQW5zd2Vyc0FuYWx5dGljc0Vycm9yIiwiZXZlbnQiLCJTZWFyY2hBcGkiLCJjb25maWciLCJleHBlcmllbmNlS2V5IiwiX2V4cGVyaWVuY2VLZXkiLCJfZXhwZXJpZW5jZVZlcnNpb24iLCJleHBlcmllbmNlVmVyc2lvbiIsImxvY2FsZSIsIl9sb2NhbGUiLCJ2ZXJ0aWNhbEtleSIsImlucHV0IiwiZmlsdGVyIiwiZmFjZXRGaWx0ZXIiLCJsaW1pdCIsIm9mZnNldCIsImlkIiwiZ2VvbG9jYXRpb24iLCJpc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCIsInNraXBTcGVsbENoZWNrIiwicXVlcnlUcmlnZ2VyIiwibGF0IiwibG5nIiwicmFkaXVzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInF1ZXJ5U3RyaW5nIiwiSGlnaGxpZ2h0ZWRWYWx1ZSIsInNob3J0VmFsdWUiLCJtYXRjaGVkU3Vic3RyaW5ncyIsIl9zb3J0TWF0Y2hlZFN1YnN0cmluZ3MiLCJfYnVpbGRIaWdobGlnaHRlZFZhbHVlIiwiaW52ZXJ0ZWRTdWJzdHJpbmdzIiwiX2dldEludmVydGVkU3Vic3RyaW5ncyIsInNvcnQiLCJhIiwiYiIsInZhbHVlTGVuZ3RoIiwibmV4dE9mZnNldCIsInZhbCIsImhpZ2hsaWdodGVkU3Vic3RyaW5ncyIsImhpZ2hsaWdodGVkVmFsdWUiLCJuZXh0U3RhcnQiLCJqIiwic3RhcnQiLCJOdW1iZXIiLCJlbmQiLCJBdXRvQ29tcGxldGVEYXRhIiwic2VjdGlvbnMiLCJxdWVyeUlkIiwiZnJlZXplIiwibWFwIiwicyIsImxhYmVsIiwicmVzdWx0cyIsInIiLCJBdXRvQ29tcGxldGVSZXN1bHQiLCJnZXRJbnZlcnRlZCIsIkF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lciIsIm1vZHVsZUlkIiwiQXV0b0NvbXBsZXRlQXBpIiwiYmFyS2V5Iiwic2VhcmNoUGFyYW1ldGVycyIsInZlcnRpY2FsIiwidW5pdmVyc2FsIiwiUXVlc3Rpb25BbnN3ZXJBcGkiLCJxdWVzdGlvbiIsImVudGl0eUlkIiwic2l0ZSIsImVtYWlsIiwicXVlc3Rpb25UZXh0IiwicXVlc3Rpb25EZXNjcmlwdGlvbiIsInF1ZXN0aW9uTGFuZ3VhZ2UiLCJQUkVfU0VBUkNIIiwiU0VBUkNIX0xPQURJTkciLCJTRUFSQ0hfQ09NUExFVEUiLCJSZXN1bHQiLCJfcmF3IiwicmF3IiwiX2Zvcm1hdHRlZCIsImZvcm1hdHRlZCIsIm9yZGluYWwiLCJ0aXRsZSIsImRldGFpbHMiLCJsaW5rIiwic3VidGl0bGUiLCJtb2RpZmllciIsImJpZ0RhdGUiLCJpbWFnZSIsImNhbGxzVG9BY3Rpb24iLCJjb2xsYXBzZWQiLCJSZXN1bHRGYWN0b3J5IiwicmVzdWx0c0RhdGEiLCJmb3JtYXR0ZXJzIiwidmVydGljYWxJZCIsInNvdXJjZSIsImZvcm1hdHRlZERhdGEiLCJmcm9tR29vZ2xlQ3VzdG9tU2VhcmNoRW5naW5lIiwiZnJvbUJpbmdDdXN0b21TZWFyY2hFbmdpbmUiLCJmcm9tWmVuZGVza1NlYXJjaEVuZ2luZSIsImZyb21BbGdvbGlhU2VhcmNoRW5naW5lIiwiZnJvbUdlbmVyaWMiLCJpbmRleCIsImRlc2NyaXB0aW9uIiwidHJ1bmNhdGUiLCJ3ZWJzaXRlIiwiaHRtbFRpdGxlIiwiaHRtbFNuaXBwZXQiLCJzbmlwcGV0IiwiaHRtbF91cmwiLCJvYmplY3RJRCIsInN0ciIsInRyYWlsaW5nIiwic2VwIiwid29yZHMiLCJtYXgiLCJ0cnVuY2F0ZWQiLCJ3b3JkIiwiU2VjdGlvbiIsInNlYXJjaFN0YXRlIiwiU2VhcmNoU3RhdGVzIiwidmVydGljYWxDb25maWdJZCIsInJlc3VsdHNDb3VudCIsImVuY29kZWRTdGF0ZSIsImFwcGxpZWRRdWVyeUZpbHRlcnMiLCJBcHBsaWVkUXVlcnlGaWx0ZXIiLCJmYWNldHMiLCJwYXJzZU1hcCIsInZlcnRpY2FsVVJMIiwibWFwTWFya2VycyIsImNlbnRlckNvb3JkaW5hdGVzIiwicmVzdWx0IiwieWV4dERpc3BsYXlDb29yZGluYXRlIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJpdGVtIiwibW9kdWxlcyIsInVybHMiLCJBcnJheSIsImlzQXJyYXkiLCJhcHBsaWVkUXVlcnlGaWx0ZXIiLCJkaXNwbGF5S2V5IiwiZGlzcGxheVZhbHVlIiwiZmlsdGVycyIsIlVuaXZlcnNhbFJlc3VsdHMiLCJEaXJlY3RBbnN3ZXIiLCJkaXJlY3RBbnN3ZXIiLCJhbnN3ZXIiLCJyZWxhdGVkSXRlbSIsImZpZWxkQXBpTmFtZSIsImZpZWxkVmFsdWVzIiwiTmF2aWdhdGlvbiIsInRhYk9yZGVyIiwibmF2IiwiVmVydGljYWxSZXN1bHRzIiwibWVyZ2VkIiwiY29uY2F0IiwiU3BlbGxDaGVjayIsImNvcnJlY3RlZFF1ZXJ5IiwiY29ycmVjdGVkUXVlcnlEaXNwbGF5IiwidHlwZSIsInNob3VsZFNob3ciLCJvcmlnaW5hbFF1ZXJ5IiwiTkFWSUdBVElPTiIsIlVOSVZFUlNBTF9SRVNVTFRTIiwiVkVSVElDQUxfUkVTVUxUUyIsIkFVVE9DT01QTEVURSIsIkRJUkVDVF9BTlNXRVIiLCJGSUxURVIiLCJRVUVSWSIsIlFVRVJZX0lEIiwiRkFDRVRfRklMVEVSIiwiRFlOQU1JQ19GSUxURVJTIiwiU0VBUkNIX0xJTUlUIiwiUEFSQU1TIiwiR0VPTE9DQVRJT04iLCJJTlRFTlRTIiwiUVVFU1RJT05fU1VCTUlTU0lPTiIsIlNQRUxMX0NIRUNLIiwiRHluYW1pY0ZpbHRlcnMiLCJkeW5hbWljRmlsdGVycyIsImYiLCJmaWVsZElkIiwib3B0aW9ucyIsIm8iLCJjb3VudExhYmVsIiwic2VsZWN0ZWQiLCJTZWFyY2hJbnRlbnRzIiwiaW50ZW50cyIsIm5lYXJNZSIsImluY2x1ZGVzIiwiU2VhcmNoRGF0YVRyYW5zZm9ybWVyIiwiU3RvcmFnZUtleXMiLCJzZWFyY2hJbnRlbnRzIiwic3BlbGxDaGVjayIsIlF1ZXN0aW9uU3VibWlzc2lvbiIsImVycm9ycyIsInByaXZhY3lQb2xpY3kiLCJxdWVzdGlvblN1Ym1pdHRlZCIsIkNvcmUiLCJfZmllbGRGb3JtYXR0ZXJzIiwiZmllbGRGb3JtYXR0ZXJzIiwiZ2xvYmFsU3RvcmFnZSIsInBlcnNpc3RlbnRTdG9yYWdlIiwiX3NlYXJjaGVyIiwiX2F1dG9Db21wbGV0ZSIsIl9xdWVzdGlvbkFuc3dlciIsImFwcGVuZCIsInNldCIsInNlYXJjaExvYWRpbmciLCJ2ZXJ0aWNhbFNlYXJjaCIsImdldFN0YXRlIiwiX2lzRHluYW1pY0ZpbHRlcnNFbmFibGVkIiwidHJhbnNmb3JtVmVydGljYWwiLCJtZXJnZWRSZXN1bHRzIiwidW5pdmVyc2FsU2VhcmNoIiwidHJhbnNmb3JtIiwibmFtZXNwYWNlIiwicXVlcnlVbml2ZXJzYWwiLCJxdWVyeVZlcnRpY2FsIiwicXVlcnlGaWx0ZXIiLCJzdWJtaXRRdWVzdGlvbiIsInN1Ym1pdHRlZCIsImV2dCIsImNiIiwib24iLCJDb21wb25lbnRNYW5hZ2VyIiwic2V0SW5zdGFuY2UiLCJnZXRJbnN0YW5jZSIsIl9jb21wb25lbnRSZWdpc3RyeSIsIl9hY3RpdmVDb21wb25lbnRzIiwiX2NvcmUiLCJfcmVuZGVyZXIiLCJfYW5hbHl0aWNzUmVwb3J0ZXIiLCJyZW5kZXJlciIsImNvcmUiLCJyZXBvcnRlciIsImNvbXBvbmVudENsYXp6IiwiY29tcG9uZW50VHlwZSIsInN5c3RlbU9wdHMiLCJhbmFseXRpY3NSZXBvcnRlciIsImNvbXBvbmVudE1hbmFnZXIiLCJjb21wb25lbnRDbGFzcyIsImFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCIsInNvbWUiLCJjIiwiaXNUd2luIiwiY29uc3RydWN0b3IiLCJpbml0Iiwic2V0U3RhdGUiLCJvZmYiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJmaW5kIiwicmVtb3ZlIiwiRE9NIiwiZW1wdHkiLCJfY29udGFpbmVyIiwiaW5zdGFuY2UiLCJSZW5kZXJlciIsInRlbXBsYXRlIiwiSGFuZGxlYmFyc1JlbmRlcmVyIiwidGVtcGxhdGVzIiwiX2hhbmRsZWJhcnMiLCJfaGIiLCJfdGVtcGxhdGVzIiwiX3JlZ2lzdGVyQ3VzdG9tSGVscGVycyIsInJlZ2lzdGVySGVscGVyIiwiY29tcGlsZSIsInRlbXBsYXRlTmFtZSIsImUiLCJhcmcxIiwiYXJnMiIsImZuIiwiaW52ZXJzZSIsInBob25lTnVtYmVyU3RyaW5nIiwiY2xlYW5lZCIsImludGxDb2RlIiwiYXJncyIsImFyZ3VtZW50cyIsInJvb3QiLCJ2IiwiUmVuZGVyZXJzIiwiU09ZIiwiSGFuZGxlYmFycyIsImRvY3VtZW50IiwiZCIsInAiLCJodG1sIiwiY29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImZyYWciLCJjcmVhdGVSYW5nZSIsImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCIsImFwcGVuZENoaWxkIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwicGFyZW50Iiwic2VsZWN0b3IiLCJIVE1MRWxlbWVudCIsIldpbmRvdyIsIkhUTUxEb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVhZHlTdGF0ZSIsImVsIiwib3B0c19kYXRhIiwibm9kZSIsInByb3BzIiwiYWRkQ2xhc3MiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJjbGFzc05hbWUiLCJjbGFzc2VzIiwibGVuIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwic3R5bGVzIiwicHJvcCIsInN0eWxlIiwiYXR0ciIsInNldEF0dHJpYnV0ZSIsImF0dHJzIiwic2V0dGluZ3MiLCJDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uY2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3R4dCIsInRhcmdldCIsImlzRXF1YWxOb2RlIiwibWF0Y2hlcyIsInBhcmVudE5vZGUiLCJFdmVudEVtaXR0ZXIiLCJfbGlzdGVuZXJzIiwibGlzdGVuZXJzIiwia2VlcCIsIlN0YXRlIiwiX3N0YXRlIiwib3B0VmFsIiwiX3NldCIsImVtaXQiLCJvcHRQcm9wIiwiQW5hbHl0aWNzRXZlbnQiLCJldmVudFR5cGUiLCJ0b1VwcGVyQ2FzZSIsIkFuYWx5dGljc1JlcG9ydGVyIiwiYnVzaW5lc3NJZCIsImdsb2JhbE9wdGlvbnMiLCJfYnVzaW5lc3NJZCIsIl9nbG9iYWxPcHRpb25zIiwic2V0UXVlcnlJZCIsImFkZE9wdGlvbnMiLCJiZWFjb24iLCJ0b0FwaUV2ZW50IiwiTW9kdWxlRGF0YSIsIl9pZCIsIl9oaXN0b3J5IiwiX2RhdGEiLCJjYXB0dXJlUHJldmlvdXMiLCJzaGlmdCIsInByZXZpb3VzIiwiX3ByZXZpb3VzIiwicG9wIiwiR2xvYmFsU3RvcmFnZSIsIl9tb2R1bGVEYXRhQ29udGFpbmVyIiwiX2Z1dHVyZUxpc3RlbmVycyIsIl9pbml0RGF0YUNvbnRhaW5lciIsIl9hcHBseUZ1dHVyZUxpc3RlbmVycyIsImRhdGFLZXkiLCJzdGFydHNXaXRoIiwibW9kdWxlRGF0YSIsImZ1dHVyZXMiLCJmdXR1cmUiLCJDb21wb25lbnQiLCJzeXN0ZW1Db25maWciLCJfY29uZmlnIiwiX3R5cGUiLCJfcGFyZW50Q29udGFpbmVyIiwicGFyZW50Q29udGFpbmVyIiwiX2NoaWxkcmVuIiwic3RhdGUiLCJfYW5hbHl0aWNzT3B0aW9ucyIsImFuYWx5dGljc09wdGlvbnMiLCJjcmVhdGVFbCIsIl9jbGFzc05hbWUiLCJfcmVuZGVyIiwicmVuZGVyIiwiX3RlbXBsYXRlIiwiX3RlbXBsYXRlTmFtZSIsImRlZmF1bHRUZW1wbGF0ZU5hbWUiLCJfaXNNb3VudGVkIiwidHJhbnNmb3JtRGF0YSIsIm9uQ3JlYXRlIiwib25DcmVhdGVPdmVycmlkZSIsImJpbmQiLCJvbk1vdW50Iiwib25Nb3VudE92ZXJyaWRlIiwib25VcGRhdGUiLCJvblVwZGF0ZU92ZXJyaWRlIiwidXNlck9uQ3JlYXRlIiwidXNlck9uTW91bnQiLCJ1c2VyT25VcGRhdGUiLCJ1bk1vdW50IiwibW91bnQiLCJuZXdTdGF0ZSIsImNoaWxkQ29tcG9uZW50IiwiY3JlYXRlIiwiX3BhcmVudE9wdHMiLCJjaGlsZCIsIm9uVW5Nb3VudCIsImJlZm9yZU1vdW50IiwiYXNKU09OIiwiZG9tQ29tcG9uZW50cyIsInF1ZXJ5QWxsIiwiX2NyZWF0ZVN1YmNvbXBvbmVudCIsImRvbUhvb2tzIiwiX2NyZWF0ZUFuYWx5dGljc0hvb2siLCJiZWZvcmVSZW5kZXIiLCJhZnRlclJlbmRlciIsImRvbUNvbXBvbmVudCIsImRhdGFzZXQiLCJpc0NvbXBvbmVudE1vdW50ZWQiLCJjaGlsZERhdGEiLCJhZGRDaGlsZCIsInJldmVyc2UiLCJpc0FuYWx5dGljc0F0dGFjaGVkIiwiZXZlbnR0eXBlIiwiZXZlbnRsYWJlbCIsImV2ZW50b3B0aW9ucyIsInJlcG9ydCIsIlJFU0laRV9ERUJPVU5DRSIsIlRhYiIsImNvbmZpZ0lkIiwiaXNGaXJzdCIsImlzQWN0aXZlIiwidGFic0NvbmZpZyIsInRhYnMiLCJ0YWIiLCJOYXZpZ2F0aW9uQ29tcG9uZW50IiwiZHJvcGRvd25MYWJlbCIsImRyb3Bkb3duSWNvbiIsIl90YWJzIiwiX3RhYk9yZGVyIiwiZ2V0RGVmYXVsdFRhYk9yZGVyIiwiZ2V0VXJsUGFyYW1zIiwiX25hdkJyZWFrcG9pbnRzIiwiX2RlYm91bmNlVGltZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicmVmaXROYXYiLCJjaGVja091dHNpZGVDbGljayIsInRvZ2dsZU1vcmVEcm9wZG93biIsIm1vcmVCdXR0b24iLCJtYWluTGlua3MiLCJjb2xsYXBzZWRMaW5rcyIsIm5hdldpZHRoIiwiY29udGFpbnMiLCJvZmZzZXRXaWR0aCIsIm51bUJyZWFrcG9pbnRzIiwibWFpbkxpbmtzV2lkdGgiLCJjaGlsZHJlbiIsImxhc3RMaW5rIiwicHJlcGVuZCIsImZpcnN0TGluayIsImNsb3NlTW9yZURyb3Bkb3duIiwidG9nZ2xlIiwiY2xvc2VzdCIsIm1lcmdlVGFiT3JkZXIiLCJnZW5lcmF0ZVRhYlVybCIsInVuc2hpZnQiLCJvdGhlclRhYk9yZGVyIiwidGFiQ29uZmlnIiwiRmlsdGVyIiwicmVzcG9uc2VGaWx0ZXIiLCJncm91cHMiLCJncm91cEZpbHRlcnMiLCJmaWVsZCIsIm9yIiwiYW5kIiwiX2Zyb21NYXRjaGVyIiwibWluIiwibWF0Y2hlciIsIlNlYXJjaENvbXBvbmVudCIsIl9iYXJLZXkiLCJfdmVydGljYWxLZXkiLCJfZm9ybUVsIiwiZm9ybVNlbGVjdG9yIiwiX2lucHV0RWwiLCJpbnB1dEVsIiwibGFiZWxUZXh0Iiwic3VibWl0VGV4dCIsInN1Ym1pdEljb24iLCJwcm9tcHRIZWFkZXIiLCJhdXRvRm9jdXMiLCJjbGVhckJ1dHRvbiIsImF1dG9jb21wbGV0ZU9uTG9hZCIsInJlZGlyZWN0VXJsIiwiX2lzVHdpbiIsInEiLCJfc2VhcmNoQ29vbGRvd24iLCJzZWFyY2hDb29sZG93biIsIl9wcm9tcHRGb3JMb2NhdGlvbiIsInByb21wdEZvckxvY2F0aW9uIiwiQm9vbGVhbiIsIl9zaG93Q2xlYXJCdXR0b24iLCJzZXRRdWVyeSIsImluaXRMb2NhdGlvblByb21wdCIsImZvY3VzIiwiaW5pdFNlYXJjaCIsImluaXRBdXRvQ29tcGxldGUiLCJpbml0Q2xlYXJCdXR0b24iLCJfYXV0b2NvbXBsZXRlIiwiYnV0dG9uIiwiaW50ZW50IiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJjb29yZHMiLCJhY2N1cmFjeSIsImZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJibHVyIiwiaW5wdXRTZWxlY3RvciIsIm9uU3VibWl0IiwidHJpZ2dlciIsIl90aHJvdHRsZWQiLCJhbGxGaWx0ZXJzIiwiZ2V0QWxsIiwidG90YWxGaWx0ZXIiLCJnZXRBY3RpdmVDb21wb25lbnQiLCJzaG93Q2xlYXJCdXR0b24iLCJGaWx0ZXJTZWFyY2hDb21wb25lbnQiLCJpbnB1dEtleSIsIl9zdG9yZU9uQ2hhbmdlIiwic3RvcmVPbkNoYW5nZSIsInNlYXJjaFRleHQiLCJfYnVpbGRTZWFyY2hQYXJhbWV0ZXJzIiwiaXNGaWx0ZXJTZWFyY2giLCJvcmlnaW5hbEZpbHRlciIsImZyb21SZXNwb25zZSIsInNldEZpbHRlciIsInNlYXJjaFBhcmFtZXRlckNvbmZpZ3MiLCJzZWN0aW9uZWQiLCJmaWVsZHMiLCJfYnVpbGRGaWVsZHMiLCJmaWVsZENvbmZpZ3MiLCJmYyIsImZldGNoRW50aXRpZXMiLCJLZXlzIiwiQkFDS1NQQUNFIiwiVEFCIiwiRU5URVIiLCJTSElGVCIsIkNUUkwiLCJBTFQiLCJFU0NBUEUiLCJMRUZUIiwiUklHSFQiLCJVUCIsIkRPV04iLCJMRUZUX09TX0tFWSIsIlJJR0hUX09TX0tFWSIsIlNFTEVDVF9LRVkiLCJBdXRvQ29tcGxldGVDb21wb25lbnQiLCJfYXV0b2NvbXBsZXRlRWxzIiwiYXV0b0NvbXBsZXRlRWxzIiwiX29yaWdpbmFsUXVlcnkiLCJfc2VjdGlvbkluZGV4IiwiX3Jlc3VsdEluZGV4IiwiX2F1dG9Gb2N1cyIsIl9vblN1Ym1pdCIsIl9zZWFyY2hQYXJhbWV0ZXJzIiwiaXNRdWVyeUlucHV0Rm9jdXNlZCIsImhhc1Jlc3VsdHMiLCJzZWN0aW9uSW5kZXgiLCJyZXN1bHRJbmRleCIsImFjdGl2ZUVsZW1lbnQiLCJxdWVyeUlucHV0IiwiYXR0cmlidXRlcyIsImF1dG9jb21wbGV0ZSIsImF1dG9jb3JyZWN0Iiwic3BlbGxjaGVjayIsImNsb3NlIiwicmVzZXQiLCJhdXRvQ29tcGxldGUiLCJoYW5kbGVOYXZpZ2F0ZVJlc3VsdHMiLCJrZXlDb2RlIiwiaGFuZGxlU3VibWl0UmVzdWx0IiwiZGVsZWdhdGUiLCJ1cGRhdGVRdWVyeSIsImhhbmRsZVR5cGluZyIsInVwZGF0ZVN0YXRlIiwib3B0VmFsdWUiLCJxdWVyeUVsIiwiaWdub3JlZEtleXMiLCJhdXRvQ29tcGxldGVGaWx0ZXIiLCJhdXRvQ29tcGxldGVWZXJ0aWNhbCIsImF1dG9Db21wbGV0ZVVuaXZlcnNhbCIsIlNwZWxsQ2hlY2tDb21wb25lbnQiLCJjb3JyZWN0ZWRRdWVyeVVybCIsIl9idWlsZFJlZGlyZWN0UXVlcnlVcmwiLCJoZWxwVGV4dCIsIl9nZXRIZWxwVGV4dCIsInRvTG93ZXJDYXNlIiwiRmFjZXQiLCJmbGF0RmlsdGVycyIsImZsYXRNYXAiLCIkb3IiLCJGaWx0ZXJCb3hDb21wb25lbnQiLCJfZmlsdGVyQ29uZmlncyIsIl9zZWFyY2hPbkNoYW5nZSIsInNlYXJjaE9uQ2hhbmdlIiwiX2FwcGx5QnV0dG9uU2VsZWN0b3IiLCJhcHBseUJ1dHRvblNlbGVjdG9yIiwiX2ZpbHRlckNvbXBvbmVudHMiLCJfZmlsdGVycyIsIl9pc0R5bmFtaWMiLCJpc0R5bmFtaWMiLCJmaWx0ZXJDb25maWdzIiwic2hvd0FwcGx5QnV0dG9uIiwib25DaGFuZ2UiLCJvbkZpbHRlckNoYW5nZSIsImdldEZpbHRlciIsIl9zYXZlRmlsdGVyc1RvU3RvcmFnZSIsIl9zZWFyY2giLCJ2YWxpZEZpbHRlcnMiLCJjb21iaW5lZEZpbHRlciIsImZyb21GaWx0ZXJzIiwic2V0RmFjZXRGaWx0ZXIiLCJTVVBQT1JURURfQ09OVFJPTFMiLCJGaWx0ZXJPcHRpb25zQ29tcG9uZW50IiwiY29udHJvbCIsInByZXZpb3VzT3B0aW9ucyIsInNlbGVjdGVkT3B0aW9ucyIsIl9vcHRpb25zIiwiX2NvbnRyb2wiLCJfb3B0aW9uU2VsZWN0b3IiLCJvcHRpb25TZWxlY3RvciIsIl9vbkNoYW5nZSIsIl9sYWJlbCIsIl91cGRhdGVPcHRpb24iLCJwYXJzZUludCIsImNoZWNrZWQiLCJfYnVpbGRGaWx0ZXIiLCJlbGVtZW50cyIsIl9hcHBseUZpbHRlciIsImVxdWFsIiwiZ3JvdXAiLCJSYW5nZUZpbHRlckNvbXBvbmVudCIsIl9maWVsZCIsIm1pblZhbCIsIm1heFZhbCIsIl9yYW5nZSIsImluaXRpYWxNaW4iLCJpbml0aWFsTWF4IiwiX3RpdGxlIiwiX21pbkxhYmVsIiwibWluTGFiZWwiLCJfbWF4TGFiZWwiLCJtYXhMYWJlbCIsIm1pblZhbHVlIiwibWF4VmFsdWUiLCJfdXBkYXRlUmFuZ2UiLCJpbmNsdXNpdmVSYW5nZSIsIkRhdGVSYW5nZUZpbHRlckNvbXBvbmVudCIsIl9pc0V4Y2x1c2l2ZSIsImlzRXhjbHVzaXZlIiwidG9kYXkiLCJEYXRlIiwidG9kYXlTdHJpbmciLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwicGFkU3RhcnQiLCJnZXREYXRlIiwibWluRGF0ZSIsIm1heERhdGUiLCJfZGF0ZSIsImRhdGVNaW4iLCJkYXRlTWF4IiwiZGF0ZSIsImV4Y2x1c2l2ZVJhbmdlIiwiRHluYW1pY0ZpbHRlcnNDb21wb25lbnQiLCJfZmllbGRDb250cm9scyIsImZpZWxkQ29udHJvbHMiLCJfZmlsdGVyYm94IiwiZW5hYmxlRHluYW1pY0ZpbHRlcnMiLCJNRVRFUlNfUEVSX01JTEUiLCJERUZBVUxUX0NPTkZJRyIsImdlb0J1dHRvbkljb24iLCJnZW9CdXR0b25UZXh0IiwiZW5hYmxlZFRleHQiLCJsb2FkaW5nVGV4dCIsImVycm9yVGV4dCIsImJ1dHRvblNlbGVjdG9yIiwiR2VvTG9jYXRpb25Db21wb25lbnQiLCJwbGFjZWhvbGRlciIsIl9lbmFibGVkIiwiZ2VvTG9hZGluZyIsImdlb0Vycm9yIiwiZ2VvRW5hYmxlZCIsImdlb1ZhbHVlIiwiZ2VvUGxhY2Vob2xkZXIiLCJfaW5pdEF1dG9Db21wbGV0ZSIsIl90b2dnbGVHZW9GaWx0ZXIiLCJfc2F2ZURhdGFUb1N0b3JhZ2UiLCJNYXRoIiwiRXZlbnRUeXBlcyIsIlRIVU1CU19VUCIsIlRIVU1CU19ET1dOIiwiRGlyZWN0QW5zd2VyQ29tcG9uZW50IiwiZm9ybUVsIiwiX3RodW1ic1VwU2VsZWN0b3IiLCJ0aHVtYnNVcFNlbGVjdG9yIiwiX3RodW1ic0Rvd25TZWxlY3RvciIsInRodW1ic0Rvd25TZWxlY3RvciIsIl92aWV3RGV0YWlsc1RleHQiLCJ2aWV3RGV0YWlsc1RleHQiLCJoYXNTdGF0ZSIsImNoZWNrZWRWYWx1ZSIsInJlcG9ydFF1YWxpdHkiLCJldmVudE9wdGlvbnMiLCJzZWFyY2hlciIsImN0YUxhYmVsIiwiaXNHb29kIiwiUmVzdWx0c0l0ZW1Db21wb25lbnQiLCJfdmVydGljYWxDb25maWdJZCIsIl9pc1VuaXZlcnNhbCIsImlzVW5pdmVyc2FsIiwiTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCIsIkV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQiLCJQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCIsIk1hcFByb3ZpZGVyIiwiX3pvb20iLCJ6b29tIiwiX2RlZmF1bHRQb3NpdGlvbiIsImRlZmF1bHRQb3NpdGlvbiIsIl9zaG93RW1wdHlNYXAiLCJzaG93RW1wdHlNYXAiLCJfbWFwIiwiX2lzTG9hZGVkIiwiX29uUGluQ2xpY2siLCJvblBpbkNsaWNrIiwiX29uTG9hZGVkIiwib25Mb2FkZWQiLCJfcGluQ29uZmlnIiwicGluIiwiREVGQVVMVF9QSU5fQ09ORklHIiwiX2NvbGxhcHNlUGlucyIsImNvbGxhcHNlUGlucyIsImlzTG9hZGVkIiwibWFwRGF0YSIsIm1hcmtlcnMiLCJsb2NhdGlvblRvSXRlbSIsIm0iLCJjb2xsYXBzZWRNYXJrZXJzIiwiY29sbGFwc2VkTWFya2VyIiwiaWNvbiIsImFuY2hvciIsInN2ZyIsInNjYWxlZFNpemUiLCJsYWJlbFR5cGUiLCJHb29nbGVNYXBQcm92aWRlciIsIl9jbGllbnRJZCIsImNsaWVudElkIiwiX3NpZ25hdHVyZSIsInNpZ25hdHVyZSIsImhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMiLCJvbkxvYWQiLCJzY3JpcHQiLCJvbmxvYWQiLCJhc3luYyIsInNyYyIsImdlbmVyYXRlQ3JlZGVudGlhbHMiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiYm91bmRzIiwiTGF0TG5nQm91bmRzIiwiX2NvbGxhcHNlTWFya2VycyIsImdvb2dsZU1hcE1hcmtlckNvbmZpZ3MiLCJHb29nbGVNYXBNYXJrZXJDb25maWciLCJtYXJrZXIiLCJNYXJrZXIiLCJhZGRMaXN0ZW5lciIsImV4dGVuZCIsImZpdEJvdW5kcyIsInNldENlbnRlciIsIkxhdExuZyIsInNlcmlhbGl6ZWRNYXJrZXJzIiwicGluQ29uZmlnIiwicGluQ29uZmlnT2JqIiwiUG9pbnQiLCJ4IiwieSIsIlNpemUiLCJ3IiwiaCIsIk1hcEJveE1hcFByb3ZpZGVyIiwibWFwYm94Z2wiLCJhY2Nlc3NUb2tlbiIsImNzcyIsInJlbCIsImNlbnRlciIsImdldENlbnRlck1hcmtlciIsIm1hcGJveE1hcE1hcmtlckNvbmZpZ3MiLCJNYXBCb3hNYXJrZXJDb25maWciLCJ3cmFwcGVyIiwiTG5nTGF0Iiwic2V0TG5nTGF0IiwiYWRkVG8iLCJnZXRFbGVtZW50IiwibWFwQ2VudGVyIiwic3RhdGljTWFwUGluIiwiUHJvdmlkZXJUeXBlcyIsIk1hcENvbXBvbmVudCIsIl9tYXBQcm92aWRlciIsIm1hcFByb3ZpZGVyIiwiZ2V0UHJvdmlkZXJJbnN0YW5jZSIsImxvYWRKUyIsIlJlc3VsdFR5cGUiLCJFVkVOVCIsIkxPQ0FUSU9OIiwiUEVPUExFIiwiUmVzdWx0c0NvbXBvbmVudCIsIl9pdGVtQ29uZmlnIiwiZ2xvYmFsIiwicmVuZGVySXRlbSIsIml0ZW1UZW1wbGF0ZSIsInNldFNlYXJjaExpbWl0IiwiY29uZmlndXJlSXRlbSIsIl91bml2ZXJzYWxVcmwiLCJ1bml2ZXJzYWxVcmwiLCJpc1ByZVNlYXJjaCIsImlzU2VhcmNoTG9hZGluZyIsImlzU2VhcmNoQ29tcGxldGUiLCJpbmNsdWRlTWFwIiwibWFwQ29uZmlnIiwic2hvd05vUmVzdWx0cyIsInNldEl0ZW1SZW5kZXIiLCJzZXRJdGVtVGVtcGxhdGUiLCJjbGF6eiIsImdldEl0ZW1Db21wb25lbnQiLCJjb21wIiwibmV3T3B0cyIsImdsb2JhbENvbmZpZyIsIml0ZW1Db25maWciLCJoYXNHbG9iYWxSZW5kZXIiLCJoYXNHbG9iYWxUZW1wbGF0ZSIsInNldFJlbmRlciIsInNldFRlbXBsYXRlIiwiQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudCIsIl9zZWxlY3RvckJhc2UiLCJzZWxlY3RvckJhc2UiLCJjb2xsYXBzZWRDbGFzcyIsImFjY29yZGlvbkVscyIsImFjY29yZGlvbkVsIiwidG9nZ2xlRWwiLCJ0b2dnbGVTZWxlY3RvciIsImNvbnRlbnRFbCIsImJvZHlTZWxlY3RvciIsImNoYW5nZUhlaWdodCIsImhhbmRsZUNsaWNrIiwid3JhcHBlckVsIiwiaXNDb2xsYXBzZWQiLCJ0YXJnZXRFbCIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsImJ1aWxkU2VsZWN0b3IiLCJVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50IiwiX2xpbWl0IiwiY2hpbGRPcHRzIiwiZ2V0Q2hpbGRDb25maWciLCJ1c2VBY2NvcmRpb24iLCJkZWZhdWx0Q29uZmlnIiwiUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IiwidmFsaWRhdGVDb25maWciLCJiaW5kQW5hbHl0aWNzIiwiYmluZEZvcm1TdWJtaXQiLCJxdWVzdGlvblRleHRFbCIsImZvcm1EYXRhIiwidmFsaWRhdGVSZXF1aXJlZCIsImxhbmd1YWdlIiwiaW5wdXRGaWVsZHMiLCJvYmoiLCJTVkdJY29uIiwicGF0aCIsImNvbXBsZXhDb250ZW50cyIsInZpZXdCb3giLCJjb250ZW50cyIsInBhdGhEZWZpbml0aW9uIiwiaWNvbnNBcnJheSIsInRodW1iSWNvbiIsInJlY2VpcHRJY29uIiwicGFudGhlb25JY29uIiwibWljSWNvbiIsImRpcmVjdGlvbnNJY29uIiwiY2FsZW5kYXJJY29uIiwiY2FsbG91dEljb24iLCJpbmZvSWNvbiIsImJyaWVmY2FzZUljb24iLCJrYWJvYkljb24iLCJwZXJzb25JY29uIiwibWFnbmlmeWluZ0dsYXNzSWNvbiIsIm9mZmljZUljb24iLCJsaW5rSWNvbiIsIndpbmRvd0ljb24iLCJwaG9uZUljb24iLCJ0YWdJY29uIiwiZG9jdW1lbnRJY29uIiwiY2hldnJvbkljb24iLCJzdXBwb3J0SWNvbiIsInlleHRJY29uIiwicGluSWNvbiIsImdlYXJJY29uIiwibGlnaHRCdWxiSWNvbiIsIkljb25zIiwibWFya3VwIiwic3Rhckljb24iLCJJY29uQ29tcG9uZW50IiwiaWNvbk5hbWUiLCJjdXN0b21JY29uIiwiaWNvblVybCIsIkNPTVBPTkVOVF9NQU5BR0VSIiwicmVnaXN0ZXIiLCJUZW1wbGF0ZUxvYWRlciIsIl90ZW1wbGF0ZVVybCIsInRlbXBsYXRlVXJsIiwiX2luaXQiLCJmZXRjaFRlbXBsYXRlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25lcnJvciIsImNvbnNvbGUiLCJsb2ciLCJFcnJvclJlcG9ydGVyIiwicHJpbnRWZXJib3NlIiwic2VuZFRvU2VydmVyIiwiZXJyIiwicHJpbnRFcnJvciIsInRvSnNvbiIsIlBlcnNpc3RlbnRTdG9yYWdlIiwiX2hpc3RvcnlUaW1lciIsIl91cGRhdGVMaXN0ZW5lciIsInVwZGF0ZUxpc3RlbmVyIiwiX3Jlc2V0TGlzdGVuZXIiLCJyZXNldExpc3RlbmVyIiwib25wb3BzdGF0ZSIsIl9jYWxsTGlzdGVuZXIiLCJuZXdEYXRhIiwiX3VwZGF0ZUhpc3RvcnkiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwibGlzdGVuZXIiLCJhbGxQYXJhbXMiLCJBbnN3ZXJzIiwiY29tcG9uZW50cyIsIl9vblJlYWR5Iiwib25TdGF0ZUNoYW5nZSIsInNldEFsbCIsInN1YnN0ciIsInNldENvcmUiLCJzZXRSZW5kZXJlciIsInNldEFuYWx5dGljc1JlcG9ydGVyIiwiaW5pdFNjcm9sbExpc3RlbmVyIiwib25SZWFkeSIsInVzZVRlbXBsYXRlcyIsInRlbXBsYXRlQnVuZGxlIiwiX2Vycm9yUmVwb3J0ZXIiLCJkZWJ1ZyIsInN1cHByZXNzRXJyb3JSZXBvcnRzIiwicmVtb3ZlQnlOYW1lIiwiREVCT1VOQ0VfVElNRSIsInRpbWVvdXQiLCJzZW5kRXZlbnQiLCJpbm5lckhlaWdodCIsInBhZ2VZT2Zmc2V0IiwiQU5TV0VSUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7O0VBRUE7O0VBRUE7OztFQUdBLElBQU1BLE9BQU8sR0FBRztFQUNkQyxFQUFBQSxHQUFHLEVBQUUsS0FEUztFQUVkQyxFQUFBQSxJQUFJLEVBQUUsTUFGUTtFQUdkQyxFQUFBQSxHQUFHLEVBQUUsS0FIUztFQUlkQyxFQUFBQSxNQUFNLEVBQUU7RUFKTSxDQUFoQjtFQU9BOzs7Ozs7TUFLcUJDOzs7Ozs7Ozs7O0VBQ25COzs7Ozs7MEJBTUtDLEtBQUtDLE1BQU1DLE1BQU07RUFDcEIsYUFBTyxLQUFLQyxPQUFMLENBQWFULE9BQU8sQ0FBQ0MsR0FBckIsRUFBMEIsS0FBS1MsWUFBTCxDQUFrQkosR0FBbEIsRUFBdUJDLElBQXZCLENBQTFCLEVBQXdEQyxJQUF4RCxDQUFQO0VBQ0Q7RUFFRDs7Ozs7Ozs7OzJCQU1NRixLQUFLQyxNQUFNQyxNQUFNO0VBQ3JCLGFBQU8sS0FBS0MsT0FBTCxDQUNMVCxPQUFPLENBQUNFLElBREgsRUFFTEksR0FGSyxFQUdMSyxNQUFNLENBQUNDLE1BQVAsQ0FBYztFQUNaQyxRQUFBQSxJ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