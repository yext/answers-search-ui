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
  var LIB_VERSION = 'v0.7.5';
  /** The base url for the api backend */

  var API_BASE_URL = 'https://liveapi.yext.com';
  /** The default url for compiled component templates */

  var COMPILED_TEMPLATES_URL = 'https://assets.sitescdn.net/answers/answerstemplates.compiled.min.js';
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
          'api_key': this._apiKey
        };
        var urlParams = new SearchParams(window.location.toString());

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
      _this.causedBy = causedBy;
      _this.reported = false;
      return _this;
    }

    _createClass(AnswersBaseError, [{
      key: "toJson",
      value: function toJson() {
        return JSON.stringify(this);
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

      if (!config.answersKey) {
        throw new AnswersBasicError('Answers Key is required', 'Search');
      }

      this._answersKey = config.answersKey;
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
     * @param {boolean} query.isDynamicFiltersEnabled If true, asks the server to return dynamic filters
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
            isDynamicFiltersEnabled = _ref.isDynamicFiltersEnabled;

        if (limit > 50) {
          throw new AnswersCoreError('Provided search limit unsupported', 'SearchApi');
        }

        var request = new ApiRequest({
          endpoint: '/v2/accounts/me/answers/vertical/query',
          apiKey: this._apiKey,
          version: this._version,
          params: {
            'input': input,
            'answersKey': this._answersKey,
            'filters': filter,
            'facetFilters': facetFilter,
            'verticalKey': verticalKey,
            'limit': limit,
            'offset': offset,
            'queryId': id,
            'retrieveFacets': isDynamicFiltersEnabled,
            'locale': this._locale
          }
        });
        return request.get().then(function (response) {
          return response.json();
        });
      }
    }, {
      key: "universalSearch",
      value: function universalSearch(queryString) {
        var request = new ApiRequest({
          endpoint: '/v2/accounts/me/answers/query',
          apiKey: this._apiKey,
          version: this._version,
          params: {
            'input': queryString,
            'answersKey': this._answersKey,
            'locale': this._locale
          }
        });
        return request.get().then(function (response) {
          return response.json();
        });
      }
    }]);

    return SearchApi;
  }();

  /** @module AutoCompleteData */
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
  var AutoCompleteResult =
  /*#__PURE__*/
  function () {
    function AutoCompleteResult() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, AutoCompleteResult);

      this.filter = data.filter || {};
      this.highlightedValue = this.highlight(data);
      this.key = data.key || '';
      this.matchedSubstrings = data.matchedSubstrings || [];
      this.value = data.value || '';
      this.shortValue = data.shortValue || this.value;
      Object.freeze(this);
    } // TODO(jdelerme): consolidate with other highlight functions


    _createClass(AutoCompleteResult, [{
      key: "highlight",
      value: function highlight(data) {
        var value = data.value,
            shortValue = data.shortValue,
            matchedSubstrings = data.matchedSubstrings;
        var val = value || shortValue;

        if (!matchedSubstrings || matchedSubstrings.length === 0) {
          return val;
        } // Make sure our highlighted substrings are sorted


        matchedSubstrings.sort(function (a, b) {
          if (a.offset < b.offset) {
            return -1;
          }

          if (a.offset > b.offset) {
            return 1;
          }

          return 0;
        }); // Build our new value based on the highlights

        var highlightedValue = '';
        var nextStart = 0;

        for (var j = 0; j < matchedSubstrings.length; j++) {
          var start = Number(matchedSubstrings[j].offset);
          var end = start + matchedSubstrings[j].length;
          highlightedValue += [val.slice(nextStart, start), '<strong>', val.slice(start, end), '</strong>'].join('');

          if (j === matchedSubstrings.length - 1 && end < val.length) {
            highlightedValue += val.slice(end);
          }

          nextStart = end;
        }

        return highlightedValue;
      }
    }]);

    return AutoCompleteResult;
  }();

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
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, AutoCompleteApi);

      /**
       * The API Key to use for the request
       * @type {string}
       * @private
       */
      if (!opts.apiKey) {
        throw new AnswersBasicError('Api Key is required', 'AutoComplete');
      }

      this._apiKey = opts.apiKey;
      /**
       * The Answers Key to use for the request
       * @type {string}
       * @private
       */

      if (!opts.answersKey) {
        throw new AnswersBasicError('Answers Key is required', 'AutoComplete');
      }

      this._answersKey = opts.answersKey;
      /**
       * The version of the API to make a request to
       * @type {string}
       * @private
       */

      this._version = opts.version || 20190101 || 20190301;
      /**
       * The locale to use for the request
       * @type {string}
       * @private
       */

      if (!opts.locale) {
        throw new AnswersBasicError('Locale is required', 'AutoComplete');
      }

      this._locale = opts.locale;
    }
    /**
     * Autocomplete filters
     * @param {string} input The input to use for auto complete
     */


    _createClass(AutoCompleteApi, [{
      key: "queryFilter",
      value: function queryFilter(input, verticalKey, barKey) {
        var request = new ApiRequest({
          endpoint: '/v2/accounts/me/answers/filtersearch',
          apiKey: this._apiKey,
          version: this._version,
          params: {
            'input': input,
            'answersKey': this._answersKey,
            'experienceKey': verticalKey,
            'inputKey': barKey,
            'locale': this._locale
          }
        });
        return request.get().then(function (response) {
          return response.json();
        }).then(function (response) {
          return AutoCompleteDataTransformer.filter(response.response, barKey);
        }).catch(function (error) {
          throw new AnswersEndpointError('Filter search request failed', 'AutoComplete', error);
        });
      }
    }, {
      key: "queryVertical",
      value: function queryVertical(input, verticalKey, barKey) {
        var request = new ApiRequest({
          endpoint: '/v2/accounts/me/answers/autocomplete',
          apiKey: this._apiKey,
          version: this._version,
          params: {
            'input': input,
            'answersKey': this._answersKey,
            'experienceKey': verticalKey,
            'barKey': barKey,
            'locale': this._locale
          }
        });
        return request.get().then(function (response) {
          return response.json();
        }).then(function (response) {
          return AutoCompleteDataTransformer.vertical(response.response, request._params.barKey);
        }).catch(function (error) {
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
            'answersKey': this._answersKey,
            'locale': this._locale
          }
        });
        return request.get(queryString).then(function (response) {
          return response.json();
        }).then(function (response) {
          return AutoCompleteDataTransformer.universal(response.response);
        }).catch(function (error) {
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
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, QuestionAnswerApi);

      /**
       * The API Key to use for the request
       * @type {string}
       * @private
       */
      if (!opts.apiKey) {
        throw new AnswersBasicError('Api Key is required', 'QuestionAnswerApi');
      }

      this._apiKey = opts.apiKey;
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
        }).catch(function (error) {
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
       * @returns {Result[]}
       */
      value: function from(resultsData) {
        var results = [];

        for (var i = 0; i < resultsData.length; i++) {
          // TODO use resultData.highlightedFields to
          // transform resultData.data into html-friendly strings that highlight values.
          // Check for new data format, otherwise fallback to legacy
          var data = resultsData[i].data || resultsData[i];

          if (data.htmlSnippet) {
            results.push(ResultFactory.fromGoogleCustomSearchEngine(data));
            continue;
          }

          results.push(ResultFactory.fromGeneric(data, i));
        }

        return results;
      }
      /**
       * Converts an API result object into a generic result view model.
       * @param data
       * @returns {Result}
       */

    }, {
      key: "fromGeneric",
      value: function fromGeneric(data, index) {
        return new Result({
          raw: data,
          title: data.name,
          details: data.description,
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
    }]);

    return ResultFactory;
  }();

  var Section =
  /*#__PURE__*/
  function () {
    function Section(data, url) {
      _classCallCheck(this, Section);

      this.searchState = SearchStates.SEARCH_COMPLETE;
      this.verticalConfigId = data.verticalConfigId || null;
      this.resultsCount = data.resultsCount || 0;
      this.encodedState = data.encodedState || '';
      this.appliedQueryFilters = AppliedQueryFilter.from(data.appliedQueryFilters);
      this.facets = data.facets || null;
      this.results = ResultFactory.from(data.results);
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
    }, {
      key: "from",
      value: function from(modules, urls) {
        var sections = [];

        if (!modules) {
          return sections;
        }

        if (!Array.isArray(modules)) {
          return new Section(modules);
        } // Our sections should contain a property of mapMarker objects


        for (var i = 0; i < modules.length; i++) {
          sections.push(new Section(modules[i], urls[modules[i].verticalConfigId]));
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

    _createClass(UniversalResults, null, [{
      key: "from",
      value: function from(response, urls) {
        return new UniversalResults({
          queryId: response.queryId,
          sections: Section.from(response.modules, urls)
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
  var DirectAnswer = function DirectAnswer() {
    var directAnswer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, DirectAnswer);

    Object.assign(this, directAnswer);
    Object.freeze(this);
  };

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
    }], [{
      key: "from",
      value: function from(response) {
        return new VerticalResults(Section.from(response));
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
    QUESTION_SUBMISSION: 'question-submission'
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
        var response = data.response;
        return _ref = {}, _defineProperty(_ref, StorageKeys.QUERY_ID, response.queryId), _defineProperty(_ref, StorageKeys.NAVIGATION, Navigation.from(response.modules)), _defineProperty(_ref, StorageKeys.DIRECT_ANSWER, new DirectAnswer(response.directAnswer)), _defineProperty(_ref, StorageKeys.UNIVERSAL_RESULTS, UniversalResults.from(response, urls)), _ref;
      }
    }, {
      key: "transformVertical",
      value: function transformVertical(data) {
        var _ref2;

        return _ref2 = {}, _defineProperty(_ref2, StorageKeys.QUERY_ID, data.response.queryId), _defineProperty(_ref2, StorageKeys.NAVIGATION, new Navigation()), _defineProperty(_ref2, StorageKeys.VERTICAL_RESULTS, VerticalResults.from(data.response)), _defineProperty(_ref2, StorageKeys.DYNAMIC_FILTERS, DynamicFilters.from(data.response)), _ref2;
      }
    }]);

    return SearchDataTransformer;
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
      _this._data = {};

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
        var newData = data || {};
        this.capturePrevious();

        if (_typeof(data) !== 'object' || Object.keys(newData).length !== Object.keys(this._data).length) {
          this._data = newData;
          this.emit('update', this._data);
          return;
        } // check for shallow equality


        var _arr = Object.keys(newData);

        for (var _i = 0; _i < _arr.length; _i++) {
          var key = _arr[_i];

          if (this._data[key] !== newData[key]) {
            this._data = newData;
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

  var Storage =
  /*#__PURE__*/
  function () {
    function Storage() {
      _classCallCheck(this, Storage);

      this._moduleDataContainer = {};
      this._futureListeners = {};
    }
    /**
     * Set the data in storage with the given key to the provided data,
     * completely overwriting any existing data.
     * @param {string} key the storage key to set
     * @param {*} data the data to set
     */


    _createClass(Storage, [{
      key: "set",
      value: function set(key, data) {
        this._initDataContainer(key, data);

        this._moduleDataContainer[key].set(data);
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

        var _arr = Object.keys(this._moduleDataContainer);

        for (var _i = 0; _i < _arr.length; _i++) {
          var dataKey = _arr[_i];

          if (dataKey.startsWith(key) && this._moduleDataContainer[dataKey].raw() !== null) {
            data.push(this._moduleDataContainer[dataKey].raw());
          }
        }

        return data;
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

    return Storage;
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

      if (typeof config.answersKey !== 'string') {
        throw new Error('Missing required `answersKey`. Type must be {string}');
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

      this._answersKey = config.answersKey;
      /**
       * A reference to the client locale used for all requests. If not specified, defaults to "en" (for
       * backwards compatibility).
       * @type {string}
       * @private
       */

      this._locale = config.locale || 'en';
      /**
       * A reference to the core data storage that powers the UI
       * @type {Storage}
       * @private
       */

      this.storage = new Storage();
      /**
       * An abstraction containing the integration with the RESTful search API
       * For both vertical and universal search
       * @type {Search}
       * @private
       */

      this._searcher = new SearchApi({
        apiKey: this._apiKey,
        answersKey: this._answersKey,
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
        answersKey: this._answersKey,
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
          this.storage.set(StorageKeys.VERTICAL_RESULTS, VerticalResults.searchLoading());
        }

        return this._searcher.verticalSearch(verticalKey, _objectSpread({
          limit: this.storage.getState(StorageKeys.SEARCH_LIMIT)
        }, query, {
          isDynamicFiltersEnabled: this._isDynamicFiltersEnabled
        })).then(function (response) {
          return SearchDataTransformer.transformVertical(response);
        }).then(function (data) {
          _this.storage.set(StorageKeys.QUERY_ID, data[StorageKeys.QUERY_ID]);

          _this.storage.set(StorageKeys.NAVIGATION, data[StorageKeys.NAVIGATION]);

          if (query.append) {
            var mergedResults = _this.storage.getState(StorageKeys.VERTICAL_RESULTS).append(data[StorageKeys.VERTICAL_RESULTS]);

            _this.storage.set(StorageKeys.VERTICAL_RESULTS, mergedResults);
          } else {
            _this.storage.set(StorageKeys.VERTICAL_RESULTS, data[StorageKeys.VERTICAL_RESULTS]);
          }

          if (data[StorageKeys.DYNAMIC_FILTERS]) {
            _this.storage.set(StorageKeys.DYNAMIC_FILTERS, data[StorageKeys.DYNAMIC_FILTERS]);
          }
        });
      }
    }, {
      key: "search",
      value: function search(queryString, urls) {
        var _this2 = this;

        this.storage.set(StorageKeys.UNIVERSAL_RESULTS, UniversalResults.searchLoading());
        return this._searcher.universalSearch(queryString).then(function (response) {
          return SearchDataTransformer.transform(response, urls);
        }).then(function (data) {
          _this2.storage.set(StorageKeys.QUERY_ID, data[StorageKeys.QUERY_ID]);

          _this2.storage.set(StorageKeys.NAVIGATION, data[StorageKeys.NAVIGATION]);

          _this2.storage.set(StorageKeys.DIRECT_ANSWER, data[StorageKeys.DIRECT_ANSWER]);

          _this2.storage.set(StorageKeys.UNIVERSAL_RESULTS, data[StorageKeys.UNIVERSAL_RESULTS], urls);

          _this2.storage.set(StorageKeys.QUESTION_SUBMISSION, new QuestionSubmission({
            questionText: queryString
          }));
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
          _this3.storage.set("".concat(StorageKeys.AUTOCOMPLETE, ".").concat(namespace), data);
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
          _this4.storage.set("".concat(StorageKeys.AUTOCOMPLETE, ".").concat(namespace), data);
        });
      }
      /**
       * Given an input, provide a list of suitable filters for autocompletion
       *
       * @param {string} input         the string to search for filters with
       * @param {string} namespace     the namespace to use for the storage key
       * @param {string} verticalKey   the vertical key for the experience
       * @param {string} barKey        the bar key for the experience
       */

    }, {
      key: "autoCompleteFilter",
      value: function autoCompleteFilter(input, namespace, verticalKey, barKey) {
        var _this5 = this;

        return this._autoComplete.queryFilter(input, verticalKey, barKey).then(function (data) {
          _this5.storage.set("".concat(StorageKeys.AUTOCOMPLETE, ".").concat(namespace), data);
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
          _this6.storage.set(StorageKeys.QUESTION_SUBMISSION, QuestionSubmission.submitted());
        });
      }
      /**
       * Stores the given query into storage, to be used for the next search
       * @param {string} query the query to store
       */

    }, {
      key: "setQuery",
      value: function setQuery(query) {
        this.storage.set(StorageKeys.QUERY, query);
      }
      /**
       * Stores the provided query ID, to be used in analytics
       * @param {string} queryId The query id to store
       */

    }, {
      key: "setQueryId",
      value: function setQueryId(queryId) {
        this.storage.set(StorageKeys.QUERY_ID, queryId);
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
        this.storage.set("".concat(StorageKeys.FILTER, ".").concat(namespace), filter);
      }
    }, {
      key: "setFacetFilter",
      value: function setFacetFilter(namespace, filter) {
        this.storage.set("".concat(StorageKeys.FACET_FILTER, ".").concat(namespace), filter);
      }
    }, {
      key: "enableDynamicFilters",
      value: function enableDynamicFilters() {
        this._isDynamicFiltersEnabled = true;
      }
    }, {
      key: "setSearchLimit",
      value: function setSearchLimit(limit) {
        this.storage.set(StorageKeys.SEARCH_LIMIT, limit);
      }
    }, {
      key: "on",
      value: function on(evt, moduleId, cb) {
        return this.storage.on(evt, moduleId, cb);
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
        opts = Object.assign({
          core: this._core,
          renderer: this._renderer,
          analyticsReporter: this._analyticsReporter,
          componentManager: this
        }, opts);
        var componentClass = this._componentRegistry[componentType];

        if (!componentClass.areDuplicateNamesAllowed() && this._activeComponents.some(function (c) {
          return c.name === opts.name;
        })) {
          throw new AnswersComponentError("Another component with name ".concat(opts.name, " already exists"), componentType);
        } // Instantiate our new component and keep track of it


        var component = new this._componentRegistry[componentType](opts).init(opts);

        this._activeComponents.push(component); // If there is a local storage to power state, apply the state
        // from the storage to the component, and then bind the component
        // state to the storage via its updates


        if (this._core && this._core.storage !== null) {
          if (component.moduleId === undefined || component.moduleId === null) {
            return component;
          }

          this._core.storage.on('update', component.moduleId, function (data) {
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
        this._core.storage.off('update', component.moduleId);

        var index = this._activeComponents.findIndex(function (c) {
          return c.name === component.name;
        });

        this._activeComponents.splice(index, 1);
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
    function AnalyticsReporter(core, answersKey, businessId) {
      var _this = this;

      var globalOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

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
        answersKey: answersKey
      }); // listen to query id updates

      core.storage.on('update', StorageKeys.QUERY_ID, function (id) {
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
    function Component(type) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Component);

      // Simple facade pattern to enable the user to pass a single object
      // containing all the necessary options and settings
      if (_typeof(type) === 'object') {
        config = type;
        type = config.type;
      }

      this.moduleId = null;
      /**
       * Unique name of this component instance
       * Used to distinguish between other components of the same type
       * @type {String}
       */

      this.name = config.name || this.constructor.name;
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

      this._parent = config.parent || null;
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

      this.core = config.core || null;
      /**
       * A local reference to the component manager, which contains all of the component classes
       * eligible to be created
       * @type {ComponentManager}
       */

      this.componentManager = config.componentManager || null;
      /**
       * A local reference to the analytics reporter, used to report events for this component
       * @type {AnalyticsReporter}
       */

      this.analyticsReporter = config.analyticsReporter || null;
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

      if (this._parent === null) {
        if (typeof config.container !== 'string') {
          throw new Error('Missing `container` option for component configuration. Must be of type `string`.');
        }

        this._container = DOM.query(config.container) || null;
      } else {
        this._container = DOM.query(this._parent._container, config.container); // If we have a parent, and the container is missing from the DOM,
        // we construct the container and append it to the parent

        if (this._container === null) {
          this._container = DOM.createEl('div', {
            class: config.container.substring(1, config.container.length)
          });
          DOM.append(this._parent._container, this._container);
        }
      }

      if (this._container === null) {
        throw new Error('Cannot find container DOM node: ' + config.container);
      }
      /**
       * A custom class to be applied to {this._container} node
       * @type {string}
       */


      this._className = config.class || 'component';
      /**
       * A custom render function to be used instead of using the default renderer
       * @type {Renderer}
       */

      this._render = config.render || null;
      /**
       * A local reference to the default {Renderer} that will be used for rendering the template
       * @type {Renderer}
       */

      this._renderer = config.renderer || Renderers.Handlebars;
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


      this.onCreate = config.onCreate || this.onCreate || function () {};
      /**
       * The a local reference to the callback that will be invoked when a component is Mounted.
       * @type {function}
       */


      this.onMount = config.onMount || this.onMount || function () {};
      /**
       * The a local reference to the callback that will be invoked when a components state is updated.
       * @type {function}
       */


      this.onUpdate = config.onUpdate || this.onUpdate || function () {};
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

        this.setState(opts.data || opts.state || {});
        this.onCreate();

        this._state.on('update', function () {
          _this.onUpdate();

          _this.mount();
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
          parent: this,
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

        this.unMount();
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
        DOM.empty(this._container);
      }
    }, {
      key: "mount",
      value: function mount() {
        if (!this._container) {
          return this;
        }

        this.unMount();

        if (this.beforeMount() === false) {
          return this;
        }

        DOM.append(this._container, this.render(this._state.asJSON()));
        this._isMounted = true;

        this._onMount(); // Attach analytics hooks as necessary


        if (this.analyticsReporter) {
          var domHooks = DOM.queryAll(this._container, '[data-eventtype]:not([data-is-analytics-attached])');
          domHooks.forEach(this._createAnalyticsHook.bind(this));
        }

        return this;
      }
    }, {
      key: "_onMount",
      value: function _onMount() {
        this.onMount(this);

        if (this._children.length === 0) {
          return;
        }

        this._children.forEach(function (child) {
          child._onMount();
        });
      }
      /**
       * render the template using the {Renderer} with the current state and template of the component
       * @returns {string}
       */

    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._state.get();
        this.beforeRender();
        data = this.transformData(data);
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


        var el = DOM.create(html); // Process the DOM to determine if we should create
        // in-memory sub-components for rendering

        var domComponents = DOM.queryAll(el, '[data-component]');
        domComponents.forEach(function (c) {
          return _this2._createSubcomponent(c, data);
        });
        this.afterRender();
        return el.innerHTML;
      }
    }, {
      key: "_createSubcomponent",
      value: function _createSubcomponent(domComponent, data) {
        var dataset = domComponent.dataset;
        var type = dataset.component;
        var prop = dataset.prop;
        var opts = dataset.opts ? JSON.parse(dataset.opts) : {}; // Rendering a sub component should be within the context,
        // of the node that we processed it from

        opts = Object.assign(opts, {
          container: domComponent
        });
        var childData = data[prop]; // TODO(billy) Right now, if we provide an array as the data prop,
        // the behavior is to create many components for each item in the array.
        // THAT interface SHOULD change to use a different property that defines
        // whether to array data should be used for a single component or
        // to create many components for each item.
        // Overloading and having this side effect is unintuitive and WRONG

        if (!Array.isArray(childData)) {
          var childComponent = this.addChild(childData, type, opts);
          DOM.append(domComponent, childComponent.render());
          return;
        } // Otherwise, render the component as expected


        var childHTML = [];

        for (var i = 0; i < childData.length; i++) {
          var _childComponent = this.addChild(childData[i], type, opts);

          childHTML.push(_childComponent.render());
        }

        DOM.append(domComponent, childHTML.join(''));
      }
    }, {
      key: "_createAnalyticsHook",
      value: function _createAnalyticsHook(domComponent) {
        var _this3 = this;

        domComponent.dataset.isAnalyticsAttached = true;
        var dataset = domComponent.dataset;
        var type = dataset.eventtype;
        var label = dataset.eventlabel;
        var options = dataset.eventoptions ? JSON.parse(dataset.eventoptions) : {};
        DOM.on(domComponent, 'click', function (e) {
          var event = new AnalyticsEvent(type, label);
          event.addOptions(_this3._analyticsOptions);
          event.addOptions(options);

          _this3.analyticsReporter.report(event);
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

      _classCallCheck(this, NavigationComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(NavigationComponent).call(this, config));
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
      return _this;
    }

    _createClass(NavigationComponent, [{
      key: "setState",

      /**
       * Since the server data only provides a list of
       * VS configIds, we need to compute and transform
       * the data into the proper format for rendering.
       *
       * @override
       */
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
          tabs: tabs
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

        for (var _i = 0; _i < filters.length; _i++) {
          var filter = filters[_i];
          var key = Object.keys(filter)[0];

          if (!groups[key]) {
            groups[key] = [];
          }

          groups[key].push(filter);
        }

        var groupFilters = [];

        var _arr = Object.keys(groups);

        for (var _i2 = 0; _i2 < _arr.length; _i2++) {
          var field = _arr[_i2];
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

      _classCallCheck(this, SearchComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchComponent).call(this, config));
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

      _this.query = config.query || _this.getUrlParams().get('query') || '';
      /**
       * The minimum time allowed in milliseconds between searches to prevent
       * many duplicate searches back-to-back
       * @type {number}
       * @private
       */

      _this._searchCooldown = config.searchCooldown || 300;
      return _this;
    }

    _createClass(SearchComponent, [{
      key: "onCreate",
      value: function onCreate() {
        if (this.query && this.query.length > 0) {
          this.core.setQuery(this.query);
          this.search(this.query);
        }

        this.bindBrowserHistory();
      }
    }, {
      key: "onMount",
      value: function onMount() {
        // Wire up our search handling and auto complete
        this.initSearch(this._formEl);
        this.initAutoComplete(this._inputEl);

        if (this.autoFocus === true && this.query.length === 0) {
          DOM.query(this._container, this._inputEl).focus();
        }
      }
      /**
       * A helper method to use for wiring up searching on form submission
       * @param {string} formSelector CSS selector to bind our submit handling to
       */

    }, {
      key: "initSearch",
      value: function initSearch(formSelector) {
        var _this2 = this;

        this._formEl = formSelector;
        var form = DOM.query(this._container, formSelector);

        if (!form) {
          throw new Error('Could not initialize SearchBar; Can not find {HTMLElement} `', this._formEl, '`.');
        }

        DOM.on(form, 'submit', function (e) {
          e.preventDefault();
          var inputEl = form.querySelector(_this2._inputEl);
          var query = inputEl.value;

          var params = _this2.getUrlParams();

          params.set('query', query); // If we have a redirectUrl, we want the form to be
          // serialized and submitted.

          if (typeof _this2.redirectUrl === 'string') {
            window.location.href = _this2.redirectUrl + '?' + params.toString();
            return false;
          }

          window.history.pushState({
            query: query
          }, query, '?' + params.toString());
          inputEl.blur();

          _this2.core.setQuery(query);

          _this2.search(query);

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
        var _this3 = this;

        this._inputEl = inputSelector;
        this.componentManager.create('AutoComplete', {
          parent: this,
          name: "".concat(this.name, ".autocomplete"),
          container: '.yext-search-autocomplete',
          barKey: this._barKey,
          verticalKey: this._verticalKey,
          promptHeader: this.promptHeader,
          originalQuery: this.query,
          inputEl: inputSelector,
          onSubmit: function onSubmit() {
            DOM.trigger(_this3._formEl, 'submit');
          }
        });
      }
    }, {
      key: "search",
      value: function search(query) {
        var _this4 = this;

        if (this._throttled) {
          return;
        }

        this._throttled = true;
        setTimeout(function () {
          _this4._throttled = false;
        }, this._searchCooldown);

        if (this._verticalKey) {
          var allFilters = this.core.storage.getAll(StorageKeys.FILTER);
          var totalFilter = allFilters.length > 1 ? Filter.and.apply(Filter, _toConsumableArray(allFilters)) : allFilters[0];
          var facetFilter = this.core.storage.getAll(StorageKeys.FACET_FILTER)[0];
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
                var params = this.getUrlParams(tabs[i].url.split('?')[1]);
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
          query: this.query
        }, data));
      }
    }, {
      key: "getUrlParams",
      value: function getUrlParams(url) {
        url = url || window.location.search.substring(1);
        return new SearchParams(url);
      }
    }, {
      key: "bindBrowserHistory",
      value: function bindBrowserHistory() {
        var _this5 = this;

        DOM.on(window, 'popstate', function () {
          _this5.query = _this5.getUrlParams().get('query');

          _this5.setState({
            query: _this5.query
          });

          _this5.core.setQuery(_this5.query);

          _this5.search(_this5.query);
        });
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
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

      _classCallCheck(this, FilterSearchComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterSearchComponent).call(this, config));
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

      _this.query = config.query || _this.getUrlParams().get("".concat(_this.name, ".query")) || '';
      /**
       * The filter string to use for the provided query
       * Optionally provided
       * @type {string}
       */

      _this.filter = config.filter || _this.getUrlParams().get("".concat(_this.name, ".filter")) || '';
      return _this;
    }

    _createClass(FilterSearchComponent, [{
      key: "onCreate",
      value: function onCreate() {
        if (this.query && this.query.length > 0 && this.filter && this.filter.length > 0) {
          var params = this.getUrlParams();
          params.set("".concat(this.name, ".query"), this.query);
          params.set("".concat(this.name, ".filter"), this.filter);
          window.history.pushState({}, '', '?' + params.toString());
          this.core.setFilter(this.name, Filter.fromResponse(this.filter));
          this.search();
        }

        this.bindBrowserHistory();
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
          parent: this,
          name: "".concat(this.name, ".autocomplete"),
          isFilterSearch: true,
          container: '.yext-search-autocomplete',
          promptHeader: this.promptHeader,
          originalQuery: this.query,
          originalFilter: this.filter,
          inputEl: inputSelector,
          verticalKey: this._verticalKey,
          barKey: this._barKey,
          onSubmit: function onSubmit(query, filter) {
            var params = _this2.getUrlParams();

            params.set("".concat(_this2.name, ".query"), query);
            params.set("".concat(_this2.name, ".filter"), filter); // If we have a redirectUrl, we want the params to be
            // serialized and submitted.

            if (typeof _this2.redirectUrl === 'string') {
              window.location.href = _this2.redirectUrl + '?' + params.toString();
              return false;
            }

            window.history.pushState({}, '', '?' + params.toString()); // save the filter to storage for the next search

            _this2.core.setFilter(_this2.name, Filter.fromResponse(filter));

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

        var filters = this.core.storage.getAll(StorageKeys.FILTER);
        var totalFilter = filters[0];

        if (filters.length > 1) {
          totalFilter = Filter.and.apply(Filter, _toConsumableArray(filters));
        }

        var searchQuery = this.core.storage.getState(StorageKeys.QUERY) || '';
        var facetFilter = this.core.storage.getAll(StorageKeys.FACET_FILTER)[0];
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
      key: "getUrlParams",
      value: function getUrlParams(url) {
        url = url || window.location.search.substring(1);
        return new SearchParams(url);
      }
    }, {
      key: "bindBrowserHistory",
      value: function bindBrowserHistory() {
        var _this3 = this;

        DOM.on(window, 'popstate', function () {
          _this3.query = _this3.getUrlParams().get("".concat(_this3.name, ".query"));
          _this3.filter = _this3.getUrlParams().get("".concat(_this3.name, ".filter"));

          _this3.setState({
            query: _this3.query,
            filter: _this3.filter
          });

          _this3._saveQueryAndFilter(_this3.query, _this3.filter);

          _this3.search();
        });
      }
    }], [{
      key: "defaultTemplateName",

      /**
       * The template to render
       * @returns {string}
       * @override
       */
      value: function defaultTemplateName(config) {
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

      _classCallCheck(this, AutoCompleteComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AutoCompleteComponent).call(this, opts));
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
       * Callback invoked when the `Enter` key is pressed on auto complete.
       */

      _this._onSubmit = opts.onSubmit || function () {};

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
        var queryInput = DOM.query(this._parent._container, this._inputEl);

        if (!queryInput) {
          throw new Error('Could not initialize AutoComplete. Can not find {HTMLElement} `', this._inputEl, '`.');
        } // Disable the native auto complete


        DOM.attr(queryInput, 'autoComplete', 'off'); // The user exits the input, so we want to reset the state and close
        // the auto complete
        // TODO(jdelerme): Close logic to be moved to parent

        DOM.on(document, 'click', function (e) {
          if (e.target.matches('.js-yext-autocomplete-container *') || e.target.matches(_this2._inputEl)) {
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
        }); // Allow the user to select a result with the mouse

        DOM.delegate(this._container, '.js-yext-autocomplete-option', 'click', function (evt, target) {
          var data = target.dataset;
          var val = data.short;

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

        var queryEl = DOM.query(this._parent._container, '.js-yext-query');
        queryEl.value = optValue;
      }
    }, {
      key: "handleTyping",
      value: function handleTyping(key, value, e) {
        var ignoredKeys = [Keys.DOWN, Keys.UP, Keys.CTRL, Keys.ALT, Keys.SHIFT, Keys.LEFT, Keys.RIGHT, Keys.LEFT_OS_KEY, Keys.RIGHT_OS_KEY, Keys.ENTER, Keys.SELECT_KEY];

        if (ignoredKeys.indexOf(key) > -1) {
          return;
        } // User escapes out of auto complete, so we reset it to the original input


        if (key === Keys.ESCAPE) {
          this.updateQuery(this._originalQuery);
          this.close();
          return;
        } // Tabbing out or enter should close the auto complete.


        if (key === Keys.TAB) {
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
          this.core.autoCompleteFilter(input, this.name, this._verticalKey, this._barKey);
        } else if (this._verticalKey || this._barKey) {
          this.core.autoCompleteVertical(input, this.name, this._verticalKey, this._barKey);
        } else {
          this.core.autoCompleteUniversal(input, this.name);
        }
      }
    }, {
      key: "handleNavigateResults",
      value: function handleNavigateResults(key, e) {
        var sections = this._state.get('sections');

        if (sections === undefined || sections.length <= 0) {
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

      _classCallCheck(this, FilterBoxComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterBoxComponent).call(this, config));

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
            parent: _this2,
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
        var allFilters = this.core.storage.getAll(StorageKeys.FILTER);
        var totalFilter = allFilters.length > 1 ? Filter.and.apply(Filter, _toConsumableArray(allFilters)) : allFilters[0]; // TODO(jdelerme): check empty object

        var query = this.core.storage.getState(StorageKeys.QUERY);
        var facetFilter = this.core.storage.getAll(StorageKeys.FACET_FILTER)[0];
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

      _classCallCheck(this, FilterOptionsComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterOptionsComponent).call(this, config));

      if (!config.control || !SUPPORTED_CONTROLS.includes(config.control)) {
        throw new AnswersComponentError('FilterOptions requires a valid "control" to be provided', 'FilterOptions');
      }

      if (!config.options) {
        throw new AnswersComponentError('FilterOptions component requires options to be provided', 'FilterOptions');
      }
      /**
       * The list of filter options to display with checked status
       * @type {object[]}
       * @private
       */


      _this._options = config.options.map(function (o) {
        return Object.assign({}, {
          selected: false
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

      _this._label = config.label || '';
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

      _classCallCheck(this, RangeFilterComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(RangeFilterComponent).call(this, config));
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
      /**
       * The current range represented
       * @type {object}
       * @private
       */

      _this._range = {
        min: config.initialMin || 0,
        max: config.initialMax || 10
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

      _classCallCheck(this, DateRangeFilterComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DateRangeFilterComponent).call(this, config));
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
      /**
       * The current date range
       * @private
       */

      _this._date = {
        min: config.initialMin || todayString,
        max: config.initialMax || todayString
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

      _classCallCheck(this, DynamicFiltersComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DynamicFiltersComponent).call(this, config));
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
          parent: this,
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

      _classCallCheck(this, DirectAnswerComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DirectAnswerComponent).call(this, config));
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

      _this._thumbsUpSelector = config.thumbsUpSelector || '.js-directAnswer-thumbDown';
      /**
       * The `thumbs down` css selector to bind ui interaction to for reporting
       * @type {string}
       */

      _this._thumbsDownSelector = config.thumbsDownSelector || '.js-directAnswer-thumbUp';
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
          var checkedValue = DOM.query(formEl, 'input:checked').value;

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
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, ResultsItemComponent);

      return _possibleConstructorReturn(this, _getPrototypeOf(ResultsItemComponent).call(this, opts));
    }

    _createClass(ResultsItemComponent, null, [{
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

      _classCallCheck(this, LocationResultsItemComponent);

      return _possibleConstructorReturn(this, _getPrototypeOf(LocationResultsItemComponent).call(this, opts));
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

      _classCallCheck(this, EventResultsItemComponent);

      return _possibleConstructorReturn(this, _getPrototypeOf(EventResultsItemComponent).call(this, opts));
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

      _classCallCheck(this, PeopleResultsItemComponent);

      return _possibleConstructorReturn(this, _getPrototypeOf(PeopleResultsItemComponent).call(this, opts));
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
   * in order to integrate with a Third Party Map provider for both
   * static and interactive maps. MapProviders are used by the MapComponent.
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
       * The height of the map to append to the DOM, defaults to 100%
       * @type {number}
       */

      this._height = config.height || 200;
      /**
       * The width of the map to append to the DOM, defaults to 100%
       * @type {number}
       */

      this._width = config.width || 600;
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
      key: "loadStatic",
      value: function loadStatic() {
        throw new Error('Unimplemented Method: loadStatic');
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

        var _arr = Object.entries(locationToItem);

        for (var _i = 0; _i < _arr.length; _i++) {
          var _arr$_i = _slicedToArray(_arr[_i], 2),
              _markers = _arr$_i[1];

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
          src: "//maps.googleapis.com/maps/api/js?".concat(this.generateCredentials())
        });
        DOM.append('body', script);
      }
    }, {
      key: "generateStatic",
      value: function generateStatic(mapData) {
        var googleMapMarkerConfigs = GoogleMapMarkerConfig.from(mapData.mapMarkers, this._pinConfig);
        var encodedMarkers = GoogleMapMarkerConfig.serialize(googleMapMarkerConfigs);
        return "\n      <img src=\"//maps.googleapis.com/maps/api/staticmap?".concat(encodedMarkers, "&size=").concat(this._width, "x").concat(this._height, "&").concat(this.generateCredentials(), "\">");
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
        // Signature is only required if map is static
        return this._clientId && (this._signature || !this._isStatic);
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
          DOM.css(container, {
            width: _this3._width,
            height: _this3._height
          });
          _this3.map = new google.maps.Map(container, {
            zoom: _this3._zoom
          });

          var collapsedMarkers = _this3._collapseMarkers(mapData.mapMarkers); // Apply our search data to our GoogleMap


          var bounds = new google.maps.LatLngBounds();

          if (mapData && mapData.mapMarkers.length) {
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
            icon.scaledSize = google.maps.Size(pinConfigObj.scaledSize.w, pinConfigObj.scaledSize.h);
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
      key: "generateStatic",
      value: function generateStatic(mapData) {
        var mapboxMapMarkerConfigs = MapBoxMarkerConfig.from(mapData.mapMarkers, this._pinConfig);
        var center = mapData.mapCenter;
        var width = this._width || 600;
        var height = this._height || 200;
        var zoom = this._zoom || 9;
        var encodedMarkers = MapBoxMarkerConfig.serialize(mapboxMapMarkerConfigs);
        return "<img src=\"https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/".concat(encodedMarkers, "/").concat(center.longitude, ",").concat(center.latitude, ",").concat(zoom, "/auto/").concat(width, "x").concat(height, "?access_token=").concat(this._apiKey, "\">");
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
        DOM.css(container, {
          width: this._width,
          height: this._height
        });
        this._map = new mapboxgl.Map({
          container: container,
          zoom: this._zoom,
          style: 'mapbox://styles/mapbox/streets-v9',
          center: this.getCenterMarker(mapData)
        });

        if (mapData) {
          (function () {
            var collapsedMarkers = _this2._collapseMarkers(mapData.mapMarkers);

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

      _classCallCheck(this, MapComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MapComponent).call(this, opts));
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
       * Internal indication of whether or not to use a static or dynamic map
       * @type {boolean}
       */


      _this._isStatic = opts.isStatic || false;
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
        var mapData = this.getState('map');

        if (mapData === undefined && this._isStatic) {
          return this;
        }

        if (this._isStatic) {
          // TODO(billy) The existing template should just take in the map `imgURL` as data
          // Instead of overriding the template like so, but NBD for now.
          this.setTemplate(this._map.generateStatic(mapData));
          return this;
        }

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

      _classCallCheck(this, ResultsComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ResultsComponent).call(this, config));
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
        var searchState = data.searchState || SearchStates.PRE_SEARCH;
        return _get(_getPrototypeOf(ResultsComponent.prototype), "setState", this).call(this, Object.assign({
          results: []
        }, data, {
          isPreSearch: searchState === SearchStates.PRE_SEARCH,
          isSearchLoading: searchState === SearchStates.SEARCH_LOADING,
          isSearchComplete: searchState === SearchStates.SEARCH_COMPLETE,
          includeMap: this._config.includeMap,
          mapConfig: this._config.mapConfig
        }), val);
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


        var comp = _get(_getPrototypeOf(ResultsComponent.prototype), "addChild", this).call(this, data, type, opts);

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

  var UniversalResultsComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(UniversalResultsComponent, _Component);

    function UniversalResultsComponent() {
      var _this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, UniversalResultsComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(UniversalResultsComponent).call(this, opts));
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
        var searchState = data.searchState || SearchStates.PRE_SEARCH;
        return _get(_getPrototypeOf(UniversalResultsComponent.prototype), "setState", this).call(this, Object.assign({
          sections: []
        }, data, {
          isPreSearch: searchState === SearchStates.PRE_SEARCH,
          isSearchLoading: searchState === SearchStates.SEARCH_LOADING,
          isSearchComplete: searchState === SearchStates.SEARCH_COMPLETE
        }), val);
      }
    }, {
      key: "addChild",
      value: function addChild() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var type = arguments.length > 1 ? arguments[1] : undefined;
        var opts = this.getChildConfig([data['verticalConfigId']]);
        return _get(_getPrototypeOf(UniversalResultsComponent.prototype), "addChild", this).call(this, data, type, opts);
      }
    }, {
      key: "getChildConfig",
      value: function getChildConfig(configId) {
        var config = this._config.config;

        if (config === undefined) {
          return {};
        }

        return this._config['config'][configId] || this._config['config'];
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

  var DEFAULT_CONFIG = {
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

      _classCallCheck(this, QuestionSubmissionComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(QuestionSubmissionComponent).call(this, Object.assign({}, DEFAULT_CONFIG, config)));
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
          }).catch(function (error) {
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

  /** @module */
  var COMPONENT_MANAGER = new ComponentManager() // Core Component
  .register(Component) // Navigation Components
  .register(NavigationComponent) // Search Components
  .register(SearchComponent).register(FilterSearchComponent).register(AutoCompleteComponent) // Filter Components
  .register(FilterBoxComponent).register(FilterOptionsComponent).register(RangeFilterComponent).register(DateRangeFilterComponent).register(DynamicFiltersComponent) // Results Components
  .register(DirectAnswerComponent).register(UniversalResultsComponent).register(ResultsComponent).register(ResultsItemComponent).register(LocationResultsItemComponent).register(EventResultsItemComponent).register(PeopleResultsItemComponent).register(MapComponent) // Questions Components
  .register(QuestionSubmissionComponent);

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
   * ErrorReporter is used for reporting errors to the server
   */

  var ErrorReporter =
  /*#__PURE__*/
  function () {
    function ErrorReporter(apiKey, answersKey) {
      _classCallCheck(this, ErrorReporter);

      /**
       * The apiKey to use for reporting
       * @type {string}
       */
      this.apiKey = apiKey;
      /**
       * The answersKey to use when reporting
       * @type {string}
       */

      this.answersKey = answersKey;
    }
    /**
     * report sends a network request to the server to be logged
     * @param {AnswersBaseError} The error to be reported
     */


    _createClass(ErrorReporter, [{
      key: "report",
      value: function report(err) {
        if (!(err instanceof AnswersBaseError) || err.reported) {
          return;
        }

        err.reported = true;
        var request = new ApiRequest({
          endpoint: '/v2/accounts/me/answers/errors',
          apiKey: this.apiKey,
          version: 20190301,
          params: {
            'error': err.toJson(),
            'libVersion': LIB_VERSION,
            'answersKey': this.answersKey
          }
        });
        request.get().catch(console.err);
        return err;
      }
    }]);

    return ErrorReporter;
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
       * A callback function to invoke once the library is ready.
       * Typically fired after templates are fetched from server for rendering.
       */

      this._onReady = function () {};
    }

    _createClass(Answers, [{
      key: "init",
      value: function init(config) {
        var _this = this;

        var core = new Core({
          apiKey: config.apiKey,
          answersKey: config.answersKey,
          locale: config.locale
        });
        this.components.setCore(core).setRenderer(this.renderer);

        if (config.businessId) {
          this.components.setAnalyticsReporter(new AnalyticsReporter(core, config.answersKey, config.businessId, config.analyticsOptions));
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
        });

        if (!config.suppressErrorReports) {
          this._errorReporter = new ErrorReporter(config.apiKey, config.answersKey);
          window.addEventListener('error', function (e) {
            return _this._errorReporter.report(e.error);
          });
          window.addEventListener('unhandledrejection', function (e) {
            return _this._errorReporter.report(e.error);
          });
        }

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
    }, {
      key: "addComponent",
      value: function addComponent(type, opts) {
        if (typeof opts === 'string') {
          opts = {
            container: opts
          };
        }

        this.components.create(type, opts).mount();
        return this;
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

  var ANSWERS = new Answers();

  return ANSWERS;

}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2Vycy11bWQuanMiLCJzb3VyY2VzIjpbInNyYy9jb3JlL2h0dHAvaHR0cHJlcXVlc3Rlci5qcyIsInNyYy9jb3JlL2NvbnN0YW50cy5qcyIsInNyYy91aS9kb20vc2VhcmNocGFyYW1zLmpzIiwic3JjL2NvcmUvaHR0cC9hcGlyZXF1ZXN0LmpzIiwic3JjL2NvcmUvZXJyb3JzL2Vycm9ycy5qcyIsInNyYy9jb3JlL3NlYXJjaC9zZWFyY2hhcGkuanMiLCJzcmMvY29yZS9tb2RlbHMvYXV0b2NvbXBsZXRlZGF0YS5qcyIsInNyYy9jb3JlL3NlYXJjaC9hdXRvY29tcGxldGVkYXRhdHJhbnNmb3JtZXIuanMiLCJzcmMvY29yZS9zZWFyY2gvYXV0b2NvbXBsZXRlYXBpLmpzIiwic3JjL2NvcmUvc2VhcmNoL3F1ZXN0aW9uYW5zd2VyYXBpLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9zZWFyY2hzdGF0ZXMuanMiLCJzcmMvY29yZS9tb2RlbHMvcmVzdWx0LmpzIiwic3JjL2NvcmUvbW9kZWxzL3Jlc3VsdGZhY3RvcnkuanMiLCJzcmMvY29yZS9tb2RlbHMvc2VjdGlvbi5qcyIsInNyYy9jb3JlL21vZGVscy91bml2ZXJzYWxyZXN1bHRzLmpzIiwic3JjL2NvcmUvbW9kZWxzL2RpcmVjdGFuc3dlci5qcyIsInNyYy9jb3JlL21vZGVscy9uYXZpZ2F0aW9uLmpzIiwic3JjL2NvcmUvbW9kZWxzL3ZlcnRpY2FscmVzdWx0cy5qcyIsInNyYy9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMuanMiLCJzcmMvY29yZS9tb2RlbHMvZHluYW1pY2ZpbHRlcnMuanMiLCJzcmMvY29yZS9zZWFyY2gvc2VhcmNoZGF0YXRyYW5zZm9ybWVyLmpzIiwic3JjL2NvcmUvZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlci5qcyIsInNyYy9jb3JlL3N0b3JhZ2UvbW9kdWxlZGF0YS5qcyIsInNyYy9jb3JlL3N0b3JhZ2Uvc3RvcmFnZS5qcyIsInNyYy9jb3JlL21vZGVscy9xdWVzdGlvbnN1Ym1pc3Npb24uanMiLCJzcmMvY29yZS9jb3JlLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvY29tcG9uZW50bWFuYWdlci5qcyIsInNyYy91aS9yZW5kZXJpbmcvcmVuZGVyZXIuanMiLCJzcmMvdWkvcmVuZGVyaW5nL2hhbmRsZWJhcnNyZW5kZXJlci5qcyIsInNyYy91aS9yZW5kZXJpbmcvY29uc3QuanMiLCJzcmMvdWkvZG9tL2RvbS5qcyIsInNyYy91aS9jb21wb25lbnRzL3N0YXRlLmpzIiwic3JjL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50LmpzIiwic3JjL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc3JlcG9ydGVyLmpzIiwic3JjL2NvcmUvaW5kZXguanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb25jb21wb25lbnQuanMiLCJzcmMvY29yZS9tb2RlbHMvZmlsdGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3NlYXJjaC9maWx0ZXJzZWFyY2hjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9zZWFyY2gvYXV0b2NvbXBsZXRlY29tcG9uZW50LmpzIiwic3JjL2NvcmUvbW9kZWxzL2ZhY2V0LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJib3hjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcm9wdGlvbnNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL3JhbmdlZmlsdGVyY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9kYXRlcmFuZ2VmaWx0ZXJjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2R5bmFtaWNmaWx0ZXJzY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9kaXJlY3RhbnN3ZXJjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9wZW9wbGVyZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9wcm92aWRlcnMvbWFwcHJvdmlkZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvcHJvdmlkZXJzL2dvb2dsZW1hcHByb3ZpZGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL3Byb3ZpZGVycy9tYXBib3htYXBwcm92aWRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9tYXBjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9xdWVzdGlvbnMvcXVlc3Rpb25zdWJtaXNzaW9uY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvY29uc3QuanMiLCJzcmMvdWkvcmVuZGVyaW5nL3RlbXBsYXRlbG9hZGVyLmpzIiwic3JjL3VpL2luZGV4LmpzIiwic3JjL2NvcmUvZXJyb3JzL2Vycm9ycmVwb3J0ZXIuanMiLCJzcmMvYW5zd2Vycy11bWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBtb2R1bGUgSHR0cFJlcXVlc3RlciAqL1xuXG4vKiBnbG9iYWwgZmV0Y2ggKi9cblxuLyoqXG4gKiBUeXBlcyBvZiBIVFRQIHJlcXVlc3RzXG4gKi9cbmNvbnN0IE1ldGhvZHMgPSB7XG4gIEdFVDogJ2dldCcsXG4gIFBPU1Q6ICdwb3N0JyxcbiAgUFVUOiAncHV0JyxcbiAgREVMRVRFOiAnZGVsZXRlJ1xufTtcblxuLyoqXG4gKiBIdHRwUmVxdWVzdGVyIGlzIGEgd3JhcHBlciBhcm91bmQgdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiBvZiBBSkFYXG4gKiByZWxhdGVkIG1hdHRlcnMuIEl0J3MgdXNlZCB0byBtYWtlIGFsbCB0eXBlcyBvZiBuZXR3b3JrIHJlcXVlc3RzXG4gKiBhbmQgZXhwb3NlcyBhIHByb21pc2UgaW50ZXJmYWNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwUmVxdWVzdGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIEdFVCBIVFRQIHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHByb3ZpZGUgKGdldHMgZW5jb2RlZCBpbnRvIHRoZSBVUkwpXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIENvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAqL1xuICBnZXQgKHVybCwgZGF0YSwgb3B0cykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoTWV0aG9kcy5HRVQsIHRoaXMuZW5jb2RlUGFyYW1zKHVybCwgZGF0YSksIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIFBPU1QgSFRUUCByZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBwcm92aWRlIChnZXRzIGVuY29kZWQgaW50byB0aGUgVVJMKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBDb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgKi9cbiAgcG9zdCAodXJsLCBkYXRhLCBvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcbiAgICAgIE1ldGhvZHMuUE9TVCxcbiAgICAgIHVybCxcbiAgICAgIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgY3JlZGVudGlhbHM6IHVuZGVmaW5lZFxuICAgICAgfSwgb3B0cylcbiAgICApO1xuICB9XG5cbiAgcmVxdWVzdCAobWV0aG9kLCB1cmwsIG9wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIG1ldGhvZCxcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcbiAgICB9LCBvcHRzKSk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIGJlYWNvbiB0byB0aGUgcHJvdmlkZWQgdXJsIHdoaWNoIHdpbGwgc2VuZCBhIG5vbi1ibG9ja2luZyByZXF1ZXN0XG4gICAqIHRvIHRoZSBzZXJ2ZXIgdGhhdCBpcyBndWFyYW50ZWVkIHRvIHNlbmQgYmVmb3JlIHBhZ2UgbG9hZC4gTm8gcmVzcG9uc2UgaXMgcmV0dXJuZWQsXG4gICAqIHNvIGJlYWNvbnMgYXJlIHByaW1hcmlseSB1c2VkIGZvciBhbmFseXRpY3MgcmVwb3J0aW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gc2VuZCB0aGUgYmVhY29uIHRvXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIFRoZSBkYXRhIHBheWxvYWQgdG8gc2VuZCBpbiB0aGUgYmVhY29uXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bGx5IHF1ZXVlZFxuICAgKi9cbiAgYmVhY29uICh1cmwsIGRhdGEpIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLnNlbmRCZWFjb24odXJsLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIH1cblxuICBlbmNvZGVQYXJhbXMgKHVybCwgcGFyYW1zKSB7XG4gICAgbGV0IGhhc1BhcmFtID0gdXJsLmluZGV4T2YoJz8nKSA+IC0xO1xuXG4gICAgbGV0IHNlYXJjaFF1ZXJ5ID0gJyc7XG4gICAgZm9yIChsZXQga2V5IGluIHBhcmFtcykge1xuICAgICAgaWYgKCFoYXNQYXJhbSkge1xuICAgICAgICBoYXNQYXJhbSA9IHRydWU7XG4gICAgICAgIHNlYXJjaFF1ZXJ5ICs9ICc/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlYXJjaFF1ZXJ5ICs9ICcmJztcbiAgICAgIH1cblxuICAgICAgc2VhcmNoUXVlcnkgKz0ga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybCArIHNlYXJjaFF1ZXJ5O1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG4vKiogVGhlIGN1cnJlbnQgbGliIHZlcnNpb24sIHJlcG9ydGVkIHdpdGggZXJyb3JzIGFuZCBhbmFseXRpY3MgKi9cbmV4cG9ydCBjb25zdCBMSUJfVkVSU0lPTiA9ICd2MC43LjUnO1xuXG4vKiogVGhlIGJhc2UgdXJsIGZvciB0aGUgYXBpIGJhY2tlbmQgKi9cbmV4cG9ydCBjb25zdCBBUElfQkFTRV9VUkwgPSAnaHR0cHM6Ly9saXZlYXBpLnlleHQuY29tJztcblxuLyoqIFRoZSBkZWZhdWx0IHVybCBmb3IgY29tcGlsZWQgY29tcG9uZW50IHRlbXBsYXRlcyAqL1xuZXhwb3J0IGNvbnN0IENPTVBJTEVEX1RFTVBMQVRFU19VUkwgPSAnaHR0cHM6Ly9hc3NldHMuc2l0ZXNjZG4ubmV0L2Fuc3dlcnMvYW5zd2Vyc3RlbXBsYXRlcy5jb21waWxlZC5taW4uanMnO1xuXG4vKiogVGhlIGJhc2UgdXJsIGZvciB0aGUgYW5hbHl0aWNzIGJhY2tlbmQgICovXG5leHBvcnQgY29uc3QgQU5BTFlUSUNTX0JBU0VfVVJMID0gJ2h0dHBzOi8vcmVhbHRpbWVhbmFseXRpY3MueWV4dC5jb20nO1xuIiwiLyoqIEBtb2R1bGUgU2VhcmNoUGFyYW1zICovXG5cbi8qIGdsb2JhbCB3aW5kb3cgKi9cblxuLyoqXG4gKiBTZWFyY2hQYXJhbXMgaXMgYSBjbGFzcyB0byBnZXQgdGhlIHNlYXJjaCBwYXJhbXMgaW4gYSBVUkwuXG4gKiBJdCBpcyBhIHJlcGxhY2VtZW50IGZvciBVUkwuc2VhcmNoUGFyYW1zIGFuZCBVUkxTZWFyY2hQYXJhbXMgZm9yIGJyb3dzZXJzIGxpa2UgSUUxMVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hQYXJhbXMge1xuICBjb25zdHJ1Y3RvciAodXJsKSB7XG4gICAgLyoqXG4gICAgICogTWFwcGluZyBvZiBhbGwgcXVlcnkgcGFyYW1ldGVycyBpbiB0aGUgZ2l2ZW4gdXJsLCBxdWVyeSBwYXJhbSAtPiB2YWx1ZVxuICAgICAqIE9ubHkgdXNlZCBpZiBVUkxTZWFyY2hQYXJhbXMgZG9lcyBub3QgZXhpc3QgaW4gdGhlIHdpbmRvd1xuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9wYXJhbXMgPSB7fTtcblxuICAgIGlmICh3aW5kb3cgJiYgd2luZG93LlVSTFNlYXJjaFBhcmFtcykge1xuICAgICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXModXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGFyYW1zID0gdGhpcy5wYXJzZSh1cmwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJzZSBjcmVhdGVzIGEgbWFwcGluZyBvZiBhbGwgcXVlcnkgcGFyYW1zIGluIGEgZ2l2ZW4gdXJsXG4gICAqIFRoZSBxdWVyeSBwYXJhbSB2YWx1ZXMgYXJlIGRlY29kZWQgYmVmb3JlIGJlaW5nIHB1dCBpbiB0aGUgbWFwXG4gICAqIFRocmVlIHR5cGVzIG9mIGlucHV0IGFyZSBzdXBwb3J0ZWRcbiAgICogICAoMSkgZnVsbCBVUkwgZS5nLiBodHRwOi8vd3d3LnlleHQuY29tLz9xPWhlbGxvXG4gICAqICAgKDIpIHBhcmFtcyB3aXRoID8gZS5nLiA/cT1oZWxsb1xuICAgKiAgICgxKSBwYXJhbXMgd2l0aG91dCA/IGUuZy4gcT1oZWxsb1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmxcbiAgICogQHJldHVybnMge09iamVjdH0gbWFwcGluZyBmcm9tIHF1ZXJ5IHBhcmFtIC0+IHZhbHVlIHdoZXJlIHZhbHVlIGlzICcnIGlmIG5vIHZhbHVlIGlzIHByb3ZpZGVkXG4gICAqL1xuICBwYXJzZSAodXJsKSB7XG4gICAgbGV0IHBhcmFtcyA9IHt9O1xuICAgIGxldCBzZWFyY2ggPSB1cmw7XG5cbiAgICBpZiAoc2VhcmNoID09PSAnJykge1xuICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9XG5cbiAgICAvLyBOb3JtYWxpemUgYWxsIHVybCBpbnB1dHMgdG8gc3RyaW5nIG9mIHF1ZXJ5IHBhcmFtcyBzZXBhcmF0ZWQgYnkgJlxuICAgIGlmICh1cmwuaW5kZXhPZignPycpID4gLTEpIHtcbiAgICAgIHNlYXJjaCA9IHVybC5zbGljZSh1cmwuaW5kZXhPZignPycpICsgMSk7XG4gICAgfVxuXG4gICAgY29uc3QgZW5jb2RlZFBhcmFtcyA9IHNlYXJjaC5zcGxpdCgnJicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5jb2RlZFBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5VmFsID0gZW5jb2RlZFBhcmFtc1tpXS5zcGxpdCgnPScpO1xuICAgICAgaWYgKGtleVZhbC5sZW5ndGggPiAxKSB7XG4gICAgICAgIHBhcmFtc1trZXlWYWxbMF1dID0gU2VhcmNoUGFyYW1zLmRlY29kZShrZXlWYWxbMV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zW2tleVZhbFswXV0gPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gcXVlcnkgcGFyYW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBxdWVyeSBwYXJhbSBrZXkgdG8gZ2V0IHRoZSB2YWx1ZSBvZlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IHBhcmFtIHZhbHVlLCBudWxsIG90aGVyd2lzZVxuICAgKi9cbiAgZ2V0IChxdWVyeSkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5fcGFyYW1zW1N0cmluZyhxdWVyeSldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9wYXJhbXNbcXVlcnldO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldCBjaGFuZ2VzIHRoZSB2YWx1ZSBvZiBhIGdpdmVuIHF1ZXJ5IHBhcmFtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIHRoZSBxdWVyeSBwYXJhbSBrZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIHRoZSB2YWx1ZSBvZiB0aGUgcXVlcnkgcGFyYW0gdXBkYXRlIHdpdGhcbiAgICovXG4gIHNldCAobmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLl9wYXJhbXNbU3RyaW5nKG5hbWUpXSA9IFN0cmluZyh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogaGFzIGNoZWNrcyB0byBzZWUgaWYgdGhlIGdpdmVuIHF1ZXJ5IHBhcmFtIGtleSBleGlzdHMgaW4gdGhlIHBhcmFtcyBvYmplY3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBxdWVyeSBwYXJhbSB0byBjaGVja1xuICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBxdWVyeSBwYXJhbSBpcyBpbiB0aGUgcGFyYW1zIG9iamVjdCwgZmFsc2Ugby93XG4gICAqL1xuICBoYXMgKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHF1ZXJ5IGluIHRoaXMuX3BhcmFtcztcbiAgfVxuXG4gIC8qKlxuICAgKiB0b1N0cmluZyByZXR1cm5zIGEgdXJsIHdpdGggYWxsIHRoZSBxdWVyeSBwYXJhbXMgaW4gdGhlIHBhcmFtcyBvYmplY3QgKHdpdGhvdXQgYSA/KVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1N0cmluZyAoKSB7XG4gICAgbGV0IHN0cmluZyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9wYXJhbXMpIHtcbiAgICAgIHN0cmluZy5wdXNoKGAke2tleX09JHtTZWFyY2hQYXJhbXMuZW5jb2RlKHRoaXMuX3BhcmFtc1trZXldKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZy5qb2luKCcmJyk7XG4gIH1cblxuICAvKipcbiAgICogZGVjb2RlIHJldHVybnMgdGhlIGRlY29kZWQgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIHRoZSBzdHJpbmcgdG8gZGVjb2RlXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBkZWNvZGUgKHN0cmluZykge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyaW5nLnJlcGxhY2UoL1sgK10vZywgJyUyMCcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBkZWNvZGUgcmV0dXJucyB0aGUgZW5jb2RlZCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gc3RyaW5nIChlLmcuICsgLT4gJTJCKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIHRoZSBzdHJpbmcgdG8gZW5jb2RlXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBlbmNvZGUgKHN0cmluZykge1xuICAgIGxldCByZXBsYWNlID0ge1xuICAgICAgJyEnOiAnJTIxJyxcbiAgICAgIFwiJ1wiOiAnJTI3JyxcbiAgICAgICcoJzogJyUyOCcsXG4gICAgICAnKSc6ICclMjknLFxuICAgICAgJyUyMCc6ICcrJ1xuICAgIH07XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmcpLnJlcGxhY2UoL1shJygpXXwlMjAvZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICByZXR1cm4gcmVwbGFjZVttYXRjaF07XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEFwaVJlcXVlc3QgKi9cblxuaW1wb3J0IEh0dHBSZXF1ZXN0ZXIgZnJvbSAnLi9odHRwcmVxdWVzdGVyJztcbmltcG9ydCB7IEFQSV9CQVNFX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uL3VpL2RvbS9zZWFyY2hwYXJhbXMnOyAvLyBUT0RPIGlkZWFsbHkgdGhpcyB3b3VsZCBiZSBwYXNzZWQgaW4gYXMgYSBwYXJhbVxuXG4vKipcbiAqIEFwaVJlcXVlc3QgaXMgdGhlIGJhc2UgY2xhc3MgZm9yIGFsbCBBUEkgcmVxdWVzdHMuXG4gKiBJdCBkZWZpbmVzIGFsbCBvZiB0aGUgY29yZSBwcm9wZXJ0aWVzIHJlcXVpcmVkIHRvIG1ha2UgYSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaVJlcXVlc3Qge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3Rpb24gdXNlZCBmb3IgbWFraW5nIG5ldHdvcmsgcmVxdWVzdCBhbmQgaGFuZGxpbmcgZXJyb3JzXG4gICAgICogQHR5cGUge0h0dHBSZXF1ZXN0ZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9yZXF1ZXN0ZXIgPSBuZXcgSHR0cFJlcXVlc3RlcigpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhc2VVcmwgdG8gdXNlIGZvciBtYWtpbmcgYSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Jhc2VVcmwgPSBvcHRzLmJhc2VVcmwgfHwgQVBJX0JBU0VfVVJMO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGVuZHBvaW50IHRvIHVzZSBpbiB0aGUgdXJsIChhcHBlbmRlZCB0byB0aGUge2Jhc2VVcmx9KVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9lbmRwb2ludCA9IG9wdHMuZW5kcG9pbnQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBpS2V5ID0gb3B0cy5hcGlLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBBUEkgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVyc2lvbiA9IG9wdHMudmVyc2lvbiB8fCAyMDE5MDEwMTtcblxuICAgIC8qKlxuICAgICAqIEFkZGl0aW9uYWwgZGF0YSBwYXJhbXMgdGhhdCBhcmUgc2VudCBhbG9uZyB3aXRoIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3BhcmFtcyA9IG9wdHMucGFyYW1zIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCBjcmVhdGVzIGEgbmV3IGBHRVRgIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGUgcmVxdWVzdCBjbGFzc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGdldCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3Rlci5nZXQodGhpcy5fYmFzZVVybCArIHRoaXMuX2VuZHBvaW50LCB0aGlzLnBhcmFtcyh0aGlzLl9wYXJhbXMpKTtcbiAgfVxuXG4gIHBvc3QgKG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdGVyLnBvc3QodGhpcy5fYmFzZVVybCArIHRoaXMuX2VuZHBvaW50LCB0aGlzLnBhcmFtcyh0aGlzLl9wYXJhbXMpLCBvcHRzKTtcbiAgfVxuXG4gIHBhcmFtcyAocGFyYW1zKSB7XG4gICAgdmFyIGJhc2VQYXJhbXMgPSB7XG4gICAgICAndic6IHRoaXMuX3ZlcnNpb24sXG4gICAgICAnYXBpX2tleSc6IHRoaXMuX2FwaUtleVxuICAgIH07XG5cbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpKTtcblxuICAgIGlmICh1cmxQYXJhbXMuaGFzKCdiZXRhJykpIHtcbiAgICAgIGJhc2VQYXJhbXNbJ2JldGEnXSA9IHVybFBhcmFtcy5nZXQoJ2JldGEnKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYW55IHBhcmFtYXRlcnMgd2hvcyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC5cbiAgICAvL1xuICAgIC8vIE5PVEUoYmlsbHkpIFByb2JhYmx5IGJldHRlciB0byBiZSBleHBsaWNpdCBhYm91dCBob3cgdG8gaGFuZGxlIHRoaXMgYXQgdGhlIHJlcXVlc3QgYnVpbGRpbmcgbGV2ZWwsXG4gICAgLy8gYnV0IEkgY2FuJ3Qgc2VlIGFueSBjYXNlcyB3aGVyZSB3ZSdkIGV2ZXIgd2FudCB0byBzZW5kICd1bmRlZmluZWQnIGFzIGEgdmFsdWUgdG8gdGhlIHNlcnZlci5cbiAgICAvLyBTbyBpdCdzIHByb2JhYmx5IGZpbmUgdG8gJ2NsZWFuJyB0aGUgcGFyYW1zIG9iamVjdCBoZXJlXG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAocGFyYW1zW2tleV0gPT09IHVuZGVmaW5lZCB8fCBwYXJhbXNba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgcGFyYW1zW2tleV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihiYXNlUGFyYW1zLCBwYXJhbXMgfHwge30pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBFcnJvcnMgKi9cblxuLyoqXG4gKiBBbnN3ZXJzQmFzZUVycm9yIGlzIGFuIGV4dGVuc2lvbiBvZiB0aGUgYmFzZSBFcnJvciBvYmplY3QuXG4gKiBUaGlzIGlzIHRoZSBvYmplY3QgdGhhdCBpcyB1c2VkIHRvIHdoZW4gcmVwb3J0aW5nIHRvIHRoZSBzZXJ2ZXIuXG4gKiBAZXh0ZW5kcyBFcnJvclxuICpcbiAqIEVycm9yIGNvZGVzIGZhbGwgaW50byBvbmUgb2YgZm91ciBjYXRlZ29yaWVzOlxuICogMVhYIGVycm9yczogQmFzaWMgZXJyb3JzXG4gKiAyWFggZXJyb3JzOiBVSSBlcnJvcnNcbiAqIDNYWCBlcnJvcnM6IEVuZHBvaW50IGVycm9yc1xuICogNFhYIGVycm9yczogQ29yZSBlcnJvcnNcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNCYXNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChlcnJvckNvZGUsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMuZXJyb3JDb2RlID0gZXJyb3JDb2RlO1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLmJvdW5kYXJ5ID0gYm91bmRhcnk7XG4gICAgdGhpcy5jYXVzZWRCeSA9IGNhdXNlZEJ5O1xuICAgIHRoaXMucmVwb3J0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHRvSnNvbiAoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKGJ1aWx0aW5FcnJvciwgYm91bmRhcnkpIHtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcihidWlsdGluRXJyb3IubWVzc2FnZSwgYm91bmRhcnkpO1xuICAgIGVycm9yLnN0YWNrID0gYnVpbHRpbkVycm9yLnN0YWNrO1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNCYXNpY0Vycm9yIGlzIGEgd3JhcHBlciBhcm91bmQgYWxsIHRoZSBidWlsdC1pbiBlcnJvcnNcbiAqIGUuZy4gdW5kZWZpbmVkIHZhcmlhYmxlcywgaW5jb3JyZWN0IHN5bnRheCwgdHlwZXMsIG1pc3NpbmcgbWV0aG9kcywgZXRjLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0Jhc2ljRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDEwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNVaUVycm9yIHVzZWQgZm9yIHRoaW5ncyBsaWtlIERPTSBlcnJvcnMuXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzVWlFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoMjAwLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc0NvbXBvbmVudEVycm9yIGlzIHVzZWQgZm9yIENvbXBvbmVudCBvcmllbnRlZCBlcnJvcnNcbiAqIGUuZy4gZmFpbHVyZSB0byByZW5kZXIsIG9yIGNhdGNoaW5nIHVua25vd25zLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0NvbXBvbmVudEVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBjb21wb25lbnQsIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoMjAxLCBtZXNzYWdlLCBjb21wb25lbnQsIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNFbmRwb2ludEVycm9yIHJlcHJlc2VudHMgYWxsIG5ldHdvcmsgcmVsYXRlZCBlcnJvcnMuXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzRW5kcG9pbnRFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoMzAwLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc0NvcmVFcnJvciByZXByZXNlbnRzIGVycm9ycyBmb3IgcHJlY29uZGl0aW9uIGZhaWx1cmVzIGluIHRoZSBjb3JlIGxpYnJhcnlcbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNDb3JlRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDQwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNTdG9yYWdlRXJyb3IgcmVwcmVzZW50cyBzdG9yYWdlIHJlbGF0ZWQgZXJyb3JzXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzU3RvcmFnZUVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBzdG9yYWdlS2V5LCBkYXRhLCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDQwMSwgbWVzc2FnZSwgJ1N0b3JhZ2UnLCBjYXVzZWRCeSk7XG4gICAgdGhpcy5zdG9yYWdlS2V5ID0gc3RvcmFnZUtleTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc0FuYWx5dGljc0Vycm9yIGlzIHVzZWQgZm9yIGVycm9ycyB3aGVuIHJlcG9ydGluZyBhbmFseXRpY3NcbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNBbmFseXRpY3NFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgZXZlbnQsIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoNDAyLCBtZXNzYWdlLCAnQW5hbHl0aWNzJywgY2F1c2VkQnkpO1xuICAgIHRoaXMuZXZlbnQgPSBldmVudDtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VhcmNoQXBpICovXG5cbmltcG9ydCBBcGlSZXF1ZXN0IGZyb20gJy4uL2h0dHAvYXBpcmVxdWVzdCc7XG5pbXBvcnQgeyBBbnN3ZXJzQmFzaWNFcnJvciwgQW5zd2Vyc0NvcmVFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvcnMnO1xuXG4vKipcbiAqIFNlYXJjaEFwaSBpcyB0aGUgQVBJIGZvciBkb2luZyB2YXJpb3VzIHR5cGVzIG9mIHNlYXJjaFxuICogb3ZlciB0aGUgbmV0d29yayAoZS5nLiB2ZXJ0aWNhbCBvciB1bml2ZXJzYWwpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEFwaSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFjb25maWcuYXBpS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0FwaSBLZXkgaXMgcmVxdWlyZWQnLCAnU2VhcmNoJyk7XG4gICAgfVxuICAgIHRoaXMuX2FwaUtleSA9IGNvbmZpZy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgQW5zd2VycyBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIWNvbmZpZy5hbnN3ZXJzS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0Fuc3dlcnMgS2V5IGlzIHJlcXVpcmVkJywgJ1NlYXJjaCcpO1xuICAgIH1cbiAgICB0aGlzLl9hbnN3ZXJzS2V5ID0gY29uZmlnLmFuc3dlcnNLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgQVBJIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnNpb24gPSBjb25maWcudmVyc2lvbiB8fCAyMDE5MDEwMSB8fCAyMDE5MDMwMTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBsb2NhbGUgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIWNvbmZpZy5sb2NhbGUpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignTG9jYWxlIGlzIHJlcXVpcmVkJywgJ1NlYXJjaCcpO1xuICAgIH1cbiAgICB0aGlzLl9sb2NhbGUgPSBjb25maWcubG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBpbiB0aGUgY29udGV4dCBvZiBhIHZlcnRpY2FsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbEtleSB2ZXJ0aWNhbCBJRCBmb3IgdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge29iamVjdH0gcXVlcnkgVGhlIHF1ZXJ5IGRldGFpbHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmlucHV0IFRoZSBpbnB1dCB0byBzZWFyY2ggZm9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5maWx0ZXIgVGhlIGZpbHRlciB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuZmFjZXRGaWx0ZXIgVGhlIGZhY2V0IGZpbHRlciB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlcnkubGltaXQgVGhlIG1heCBudW1iZXIgb2YgcmVzdWx0cyB0byBpbmNsdWRlLCBtYXggb2YgNTBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1ZXJ5Lm9mZnNldCBUaGUgcmVzdWx0cyBvZmZzZXQsIGZvciBmZXRjaGluZyBtb3JlIHJlc3VsdHMgb2YgdGhlIHNhbWUgcXVlcnlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmlkIFRoZSBxdWVyeSBJRCB0byB1c2UuIElmIHBhZ2luZyB3aXRoaW4gYSBxdWVyeSwgdGhlIHNhbWUgSUQgc2hvdWxkIGJlIHVzZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBxdWVyeS5pc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCBJZiB0cnVlLCBhc2tzIHRoZSBzZXJ2ZXIgdG8gcmV0dXJuIGR5bmFtaWMgZmlsdGVyc1xuICAgKi9cbiAgdmVydGljYWxTZWFyY2ggKHZlcnRpY2FsS2V5LCB7IGlucHV0LCBmaWx0ZXIsIGZhY2V0RmlsdGVyLCBsaW1pdCwgb2Zmc2V0LCBpZCwgaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQgfSkge1xuICAgIGlmIChsaW1pdCA+IDUwKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvcmVFcnJvcignUHJvdmlkZWQgc2VhcmNoIGxpbWl0IHVuc3VwcG9ydGVkJywgJ1NlYXJjaEFwaScpO1xuICAgIH1cblxuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy92ZXJ0aWNhbC9xdWVyeScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogaW5wdXQsXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgICAgJ2ZpbHRlcnMnOiBmaWx0ZXIsXG4gICAgICAgICdmYWNldEZpbHRlcnMnOiBmYWNldEZpbHRlcixcbiAgICAgICAgJ3ZlcnRpY2FsS2V5JzogdmVydGljYWxLZXksXG4gICAgICAgICdsaW1pdCc6IGxpbWl0LFxuICAgICAgICAnb2Zmc2V0Jzogb2Zmc2V0LFxuICAgICAgICAncXVlcnlJZCc6IGlkLFxuICAgICAgICAncmV0cmlldmVGYWNldHMnOiBpc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH1cblxuICB1bml2ZXJzYWxTZWFyY2ggKHF1ZXJ5U3RyaW5nKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL3F1ZXJ5JyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBxdWVyeVN0cmluZyxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlRGF0YSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVEYXRhIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIHRoaXMuc2VjdGlvbnMgPSBkYXRhLnNlY3Rpb25zIHx8IFtdO1xuICAgIHRoaXMucXVlcnlJZCA9IGRhdGEucXVlcnlJZCB8fCAnJztcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlKSB7XG4gICAgbGV0IHNlY3Rpb25zO1xuICAgIGlmIChyZXNwb25zZS5zZWN0aW9ucykge1xuICAgICAgc2VjdGlvbnMgPSByZXNwb25zZS5zZWN0aW9ucy5tYXAocyA9PiAoe1xuICAgICAgICBsYWJlbDogcy5sYWJlbCxcbiAgICAgICAgcmVzdWx0czogcy5yZXN1bHRzLm1hcChyID0+IG5ldyBBdXRvQ29tcGxldGVSZXN1bHQocikpXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlY3Rpb25zID0gW3sgcmVzdWx0czogcmVzcG9uc2UucmVzdWx0cy5tYXAociA9PiBuZXcgQXV0b0NvbXBsZXRlUmVzdWx0KHIpKSB9XTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBBdXRvQ29tcGxldGVEYXRhKHsgc2VjdGlvbnMsIHF1ZXJ5SWQ6IHJlc3BvbnNlLnF1ZXJ5SWQgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9Db21wbGV0ZVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICB0aGlzLmZpbHRlciA9IGRhdGEuZmlsdGVyIHx8IHt9O1xuICAgIHRoaXMuaGlnaGxpZ2h0ZWRWYWx1ZSA9IHRoaXMuaGlnaGxpZ2h0KGRhdGEpO1xuICAgIHRoaXMua2V5ID0gZGF0YS5rZXkgfHwgJyc7XG4gICAgdGhpcy5tYXRjaGVkU3Vic3RyaW5ncyA9IGRhdGEubWF0Y2hlZFN1YnN0cmluZ3MgfHwgW107XG4gICAgdGhpcy52YWx1ZSA9IGRhdGEudmFsdWUgfHwgJyc7XG4gICAgdGhpcy5zaG9ydFZhbHVlID0gZGF0YS5zaG9ydFZhbHVlIHx8IHRoaXMudmFsdWU7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIC8vIFRPRE8oamRlbGVybWUpOiBjb25zb2xpZGF0ZSB3aXRoIG90aGVyIGhpZ2hsaWdodCBmdW5jdGlvbnNcbiAgaGlnaGxpZ2h0IChkYXRhKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgc2hvcnRWYWx1ZSwgbWF0Y2hlZFN1YnN0cmluZ3MgfSA9IGRhdGE7XG4gICAgY29uc3QgdmFsID0gdmFsdWUgfHwgc2hvcnRWYWx1ZTtcblxuICAgIGlmICghbWF0Y2hlZFN1YnN0cmluZ3MgfHwgbWF0Y2hlZFN1YnN0cmluZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSBvdXIgaGlnaGxpZ2h0ZWQgc3Vic3RyaW5ncyBhcmUgc29ydGVkXG4gICAgbWF0Y2hlZFN1YnN0cmluZ3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGEub2Zmc2V0IDwgYi5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuXG4gICAgICBpZiAoYS5vZmZzZXQgPiBiLm9mZnNldCkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgICAvLyBCdWlsZCBvdXIgbmV3IHZhbHVlIGJhc2VkIG9uIHRoZSBoaWdobGlnaHRzXG4gICAgbGV0IGhpZ2hsaWdodGVkVmFsdWUgPSAnJztcbiAgICBsZXQgbmV4dFN0YXJ0ID0gMDtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWF0Y2hlZFN1YnN0cmluZ3MubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBzdGFydCA9IE51bWJlcihtYXRjaGVkU3Vic3RyaW5nc1tqXS5vZmZzZXQpO1xuICAgICAgbGV0IGVuZCA9IHN0YXJ0ICsgbWF0Y2hlZFN1YnN0cmluZ3Nbal0ubGVuZ3RoO1xuXG4gICAgICBoaWdobGlnaHRlZFZhbHVlICs9IFt2YWwuc2xpY2UobmV4dFN0YXJ0LCBzdGFydCksICc8c3Ryb25nPicsIHZhbC5zbGljZShzdGFydCwgZW5kKSwgJzwvc3Ryb25nPiddLmpvaW4oJycpO1xuXG4gICAgICBpZiAoaiA9PT0gbWF0Y2hlZFN1YnN0cmluZ3MubGVuZ3RoIC0gMSAmJiBlbmQgPCB2YWwubGVuZ3RoKSB7XG4gICAgICAgIGhpZ2hsaWdodGVkVmFsdWUgKz0gdmFsLnNsaWNlKGVuZCk7XG4gICAgICB9XG5cbiAgICAgIG5leHRTdGFydCA9IGVuZDtcbiAgICB9XG5cbiAgICByZXR1cm4gaGlnaGxpZ2h0ZWRWYWx1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyICovXG5cbmltcG9ydCBBdXRvQ29tcGxldGVEYXRhIGZyb20gJy4uL21vZGVscy9hdXRvY29tcGxldGVkYXRhJztcblxuLyoqXG4gKiBBIERhdGEgVHJhbnNmb3JtZXIgdGhhdCB0YWtlcyB0aGUgcmVzcG9uc2Ugb2JqZWN0IGZyb20gYSBBdXRvQ29tcGxldGUgcmVxdWVzdFxuICogQW5kIHRyYW5zZm9ybXMgaW4gdG8gYSBmcm9udC1lbmQgb3JpZW50ZWQgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBvdXJcbiAqIGNvbXBvbmVudCBsaWJyYXJ5IGFuZCBjb3JlIHN0b3JhZ2UgdW5kZXJzdGFuZC5cbiAqXG4gKiBUT0RPKGJpbGx5KSBDcmVhdGUgb3VyIG93biBmcm9udC1lbmQgZGF0YSBtb2RlbHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyIHtcbiAgc3RhdGljIGNsZWFuIChtb2R1bGVJZCwgZGF0YSkge1xuICAgIGlmIChkYXRhLnNlY3Rpb25zICYmIGRhdGEuc2VjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgZGF0YS5zZWN0aW9ucztcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5zZWN0aW9ucyAmJiBkYXRhLnNlY3Rpb25zLmxlbmd0aCA9PT0gMSAmJiBkYXRhLnNlY3Rpb25zWzBdLnJlc3VsdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgZGF0YS5zZWN0aW9ucztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgW21vZHVsZUlkXTogZGF0YVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgdW5pdmVyc2FsIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG5cbiAgc3RhdGljIGZpbHRlciAocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gQXV0b0NvbXBsZXRlRGF0YS5mcm9tKHJlc3BvbnNlKTtcbiAgfVxuXG4gIHN0YXRpYyB2ZXJ0aWNhbCAocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gQXV0b0NvbXBsZXRlRGF0YS5mcm9tKHJlc3BvbnNlKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlQXBpICovXG5cbmltcG9ydCBBcGlSZXF1ZXN0IGZyb20gJy4uL2h0dHAvYXBpcmVxdWVzdCc7XG5pbXBvcnQgQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyIGZyb20gJy4vYXV0b2NvbXBsZXRlZGF0YXRyYW5zZm9ybWVyJztcbmltcG9ydCB7IEFuc3dlcnNCYXNpY0Vycm9yLCBBbnN3ZXJzRW5kcG9pbnRFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvcnMnO1xuXG4vKipcbiAqIEF1dG9Db21wbGV0ZUFwaSBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgbmV0d29yayByZWxhdGVkIG1hdHRlcnNcbiAqIGZvciBhbGwgdGhlIGF1dG9jb21wbGV0ZSBlbmRwb2ludHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Db21wbGV0ZUFwaSB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBUaGUgQVBJIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghb3B0cy5hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQXBpIEtleSBpcyByZXF1aXJlZCcsICdBdXRvQ29tcGxldGUnKTtcbiAgICB9XG4gICAgdGhpcy5fYXBpS2V5ID0gb3B0cy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgQW5zd2VycyBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIW9wdHMuYW5zd2Vyc0tleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBbnN3ZXJzIEtleSBpcyByZXF1aXJlZCcsICdBdXRvQ29tcGxldGUnKTtcbiAgICB9XG4gICAgdGhpcy5fYW5zd2Vyc0tleSA9IG9wdHMuYW5zd2Vyc0tleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBBUEkgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVyc2lvbiA9IG9wdHMudmVyc2lvbiB8fCAyMDE5MDEwMSB8fCAyMDE5MDMwMTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsb2NhbGUgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIW9wdHMubG9jYWxlKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0xvY2FsZSBpcyByZXF1aXJlZCcsICdBdXRvQ29tcGxldGUnKTtcbiAgICB9XG4gICAgdGhpcy5fbG9jYWxlID0gb3B0cy5sb2NhbGU7XG4gIH1cblxuICAvKipcbiAgICogQXV0b2NvbXBsZXRlIGZpbHRlcnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0IFRoZSBpbnB1dCB0byB1c2UgZm9yIGF1dG8gY29tcGxldGVcbiAgICovXG4gIHF1ZXJ5RmlsdGVyIChpbnB1dCwgdmVydGljYWxLZXksIGJhcktleSkge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9maWx0ZXJzZWFyY2gnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IGlucHV0LFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICAgICdleHBlcmllbmNlS2V5JzogdmVydGljYWxLZXksXG4gICAgICAgICdpbnB1dEtleSc6IGJhcktleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lci5maWx0ZXIocmVzcG9uc2UucmVzcG9uc2UsIGJhcktleSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoJ0ZpbHRlciBzZWFyY2ggcmVxdWVzdCBmYWlsZWQnLCAnQXV0b0NvbXBsZXRlJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICBxdWVyeVZlcnRpY2FsIChpbnB1dCwgdmVydGljYWxLZXksIGJhcktleSkge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9hdXRvY29tcGxldGUnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IGlucHV0LFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICAgICdleHBlcmllbmNlS2V5JzogdmVydGljYWxLZXksXG4gICAgICAgICdiYXJLZXknOiBiYXJLZXksXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIudmVydGljYWwocmVzcG9uc2UucmVzcG9uc2UsIHJlcXVlc3QuX3BhcmFtcy5iYXJLZXkpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEFuc3dlcnNFbmRwb2ludEVycm9yKCdWZXJ0aWNhbCBzZWFyY2ggcmVxdWVzdCBmYWlsZWQnLCAnQXV0b0NvbXBsZXRlJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICBxdWVyeVVuaXZlcnNhbCAocXVlcnlTdHJpbmcpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvYXV0b2NvbXBsZXRlJyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBxdWVyeVN0cmluZyxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQocXVlcnlTdHJpbmcpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIudW5pdmVyc2FsKHJlc3BvbnNlLnJlc3BvbnNlKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzRW5kcG9pbnRFcnJvcignVW5pdmVyc2FsIHNlYXJjaCByZXF1ZXN0IGZhaWxlZCcsICdBdXRvQ29tcGxldGUnLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUXVlc3Rpb25BbnN3ZXJBcGkgKi9cblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCB7IEFuc3dlcnNCYXNpY0Vycm9yLCBBbnN3ZXJzRW5kcG9pbnRFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvcnMnO1xuXG4vKipcbiAqIFF1ZXN0aW9uQW5zd2VyQXBpIGV4cG9zZXMgYW4gaW50ZXJmYWNlIHRvIGRvIG5ldHdvcmt5IHRoaW5ncyBhZ2FpbnN0XG4gKiB0aGUgUSZBIFJFU1QgQVBJXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0aW9uQW5zd2VyQXBpIHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFvcHRzLmFwaUtleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBcGkgS2V5IGlzIHJlcXVpcmVkJywgJ1F1ZXN0aW9uQW5zd2VyQXBpJyk7XG4gICAgfVxuICAgIHRoaXMuX2FwaUtleSA9IG9wdHMuYXBpS2V5O1xuICB9XG5cbiAgLyoqXG4gICAqIHN1Ym1pdFF1ZXN0aW9uIHdpbGwgY3JlYXRlIGEgbmV0d29yayByZXF1ZXN0IHRvXG4gICAqIGNyZWF0ZSBhIHF1ZXN0aW9uIGZvciBRJkEuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBxdWVzdGlvbiBUaGUgcXVlc3Rpb24gb2JqZWN0IHRvIHN1Ym1pdCB0byB0aGUgc2VydmVyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBxdWVzdGlvbi5lbnRpdHlJZCBUaGUgZW50aXR5IHRvIGFzc29jaWF0ZSB3aXRoIHRoZSBxdWVzdGlvbiAocmVxdWlyZWQpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5sYW51YWdlIFRoZSBsYW5ndWFnZSBvZiB0aGUgcXVlc3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLnNpdGUgVGhlIFwicHVibGlzaGVyXCIgb2YgdGhlIChlLmcuICdGSVJTVF9QQVJUWScpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5uYW1lIFRoZSBuYW1lIG9mIHRoZSBhdXRob3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLmVtYWlsIFRoZSBlbWFpbCBhZGRyZXNzIG9mIHRoZSBhdXRob3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLnF1ZXN0aW9uVGV4dCBUaGUgcXVlc3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLnF1ZXN0aW9uRGVzY3JpcHRpb24gQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcXVlc3Rpb25cbiAgICovXG4gIHN1Ym1pdFF1ZXN0aW9uIChxdWVzdGlvbikge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvcXVlc3Rpb25zJyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdlbnRpdHlJZCc6IHF1ZXN0aW9uLmVudGl0eUlkLFxuICAgICAgICAnc2l0ZSc6IHF1ZXN0aW9uLnNpdGUsXG4gICAgICAgICduYW1lJzogcXVlc3Rpb24ubmFtZSxcbiAgICAgICAgJ2VtYWlsJzogcXVlc3Rpb24uZW1haWwsXG4gICAgICAgICdxdWVzdGlvblRleHQnOiBxdWVzdGlvbi5xdWVzdGlvblRleHQsXG4gICAgICAgICdxdWVzdGlvbkRlc2NyaXB0aW9uJzogcXVlc3Rpb24ucXVlc3Rpb25EZXNjcmlwdGlvbixcbiAgICAgICAgJ3F1ZXN0aW9uTGFuZ3VhZ2UnOiBxdWVzdGlvbi5xdWVzdGlvbkxhbmd1YWdlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5wb3N0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzRW5kcG9pbnRFcnJvcihcbiAgICAgICAgICAnUXVlc3Rpb24gc3VibWl0IGZhaWxlZCcsXG4gICAgICAgICAgJ1F1ZXN0aW9uQW5zd2VyQXBpJyxcbiAgICAgICAgICBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VhcmNoU3RhdGVzICovXG5cbi8qKlxuICogU2VhcmNoU3RhdGVzIGlzIGFuIEVOVU0gZm9yIHRoZSB2YXJpb3VzIHN0YWdlcyBvZiBzZWFyY2hpbmcsXG4gKiB1c2VkIHRvIHNob3cgZGlmZmVyZW50IHRlbXBsYXRlc1xuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBQUkVfU0VBUkNIOiAncHJlLXNlYXJjaCcsXG4gIFNFQVJDSF9MT0FESU5HOiAnc2VhcmNoLWxvYWRpbmcnLFxuICBTRUFSQ0hfQ09NUExFVEU6ICdzZWFyY2gtY29tcGxldGUnXG59O1xuIiwiLyoqIEBtb2R1bGUgUmVzdWx0ICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmF3IHByb2ZpbGUgZGF0YVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9yYXcgPSBkYXRhLnJhdyB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluZGV4IG51bWJlciBvZiB0aGUgcmVzdWx0XG4gICAgICogQHR5cGUge051bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLm9yZGluYWwgPSBkYXRhLm9yZGluYWwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSBvZiB0aGUgcmVzdWx0IGNhcmRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBib2R5IG9mIHRoZSBkZXRhaWxzIHNlY3Rpb24gb2YgdGhlIHJlc3VsdCBjYXJkLCBjYW4gY29udGFpbiBIVE1MXG4gICAgICogQHR5cGUge3N0cmluZ3wgbnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmRldGFpbHMgPSBkYXRhLmRldGFpbHMgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZXN0aW5hdGlvbiBsaW5rIGZvciB0aGUgdGl0bGUgb2YgdGhlIHJlc3VsdCBjYXJkXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMubGluayA9IGRhdGEubGluayB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIEVudGl0eSBJRCwgb3Igb3RoZXIgdW5pcXVlIGlkZW50aWZpZXIsIHVzZWQgZm9yIHRvIHBvd2VyIGludGVyYWN0aXZpdHlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5pZCA9IGRhdGEuaWQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdWJ0aXRsZSBvbiB0aGUgcmVzdWx0IGNhcmRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5zdWJ0aXRsZSA9IGRhdGEuc3VidGl0bGUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjbGFzcyBtb2RpZmllciwgdXN1YWxseSBkZXJpdmVkIGZyb20gdGhlIHZlcnRpY2FsIGNvbmZpZ3VyYXRpb24gSURcbiAgICAgKiBVc2VkIHRvIGFwcGx5IGRpZmZlcmVudCBzdHlsaW5nIHRvIGRpZmZlcmVudCByZXN1bHQgY2FyZCB0eXBlc1xuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLm1vZGlmaWVyID0gZGF0YS5tb2RpZmllciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsYXJnZSBkYXRlLCBvZiB0aGUgZm9ybWF0IHsgbW9udGg6ICdKYW4nLCBkYXk6ICcwMScgfVxuICAgICAqIEB0eXBlIHtPYmplY3R8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmJpZ0RhdGUgPSBkYXRhLmJpZ0RhdGUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFuIGltYWdlIHByb2ZpbGUgb2JqZWN0LCBleHBlY3RlZCB0byBoYXZlIGEgdXJsIHByb3BlcnR5XG4gICAgICogQHR5cGUge09iamVjdHxudWxsfVxuICAgICAqL1xuICAgIHRoaXMuaW1hZ2UgPSBkYXRhLmltYWdlIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBjYWxscyB0byBhY3Rpb24sIG9mIHRoZSBmb3JtYXQ6XG4gICAgICogeyBpY29uOiAnJywgdXJsOiAnJywgdGV4dDogJycsIGV2ZW50VHlwZTogJycsIGV2ZW50T3B0aW9uczoge319XG4gICAgICogQHR5cGUge0FycmF5fVxuICAgICAqL1xuICAgIHRoaXMuY2FsbHNUb0FjdGlvbiA9IGRhdGEuY2FsbHNUb0FjdGlvbiB8fCBbXTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVzdWx0RmFjdG9yeSAqL1xuXG5pbXBvcnQgUmVzdWx0IGZyb20gJy4vcmVzdWx0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0RmFjdG9yeSB7XG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBBUEkgcmVzdWx0IG9iamVjdCBpbnRvIGEgUmVzdWx0IHZpZXcgbW9kZWwuXG4gICAqIEluY2x1ZGVzIGRlZmF1bHQgbWFwcGluZ3Mgb2YgR29vZ2xlQ3VzdG9tU2VhcmNoRW5naW5lIHJlc3VsdHMgdG9cbiAgICogdGhlIGZpZWxkcyBleHBvc2VkIGJ5IHRoZSB0ZW1wbGF0ZS5cbiAgICogQHBhcmFtIHJlc3VsdHNEYXRhICB7QXJyYXl9IGV4cGVjdGVkIGZvcm1hdDogeyBkYXRhOiB7IC4uLiB9LCBoaWdobGlnaHRlZEZpZWxkczogeyAuLi4gfX1cbiAgICogQHJldHVybnMge1Jlc3VsdFtdfVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHJlc3VsdHNEYXRhKSB7XG4gICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdHNEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBUT0RPIHVzZSByZXN1bHREYXRhLmhpZ2hsaWdodGVkRmllbGRzIHRvXG4gICAgICAvLyB0cmFuc2Zvcm0gcmVzdWx0RGF0YS5kYXRhIGludG8gaHRtbC1mcmllbmRseSBzdHJpbmdzIHRoYXQgaGlnaGxpZ2h0IHZhbHVlcy5cbiAgICAgIC8vIENoZWNrIGZvciBuZXcgZGF0YSBmb3JtYXQsIG90aGVyd2lzZSBmYWxsYmFjayB0byBsZWdhY3lcblxuICAgICAgY29uc3QgZGF0YSA9IHJlc3VsdHNEYXRhW2ldLmRhdGEgfHwgcmVzdWx0c0RhdGFbaV07XG5cbiAgICAgIGlmIChkYXRhLmh0bWxTbmlwcGV0KSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChSZXN1bHRGYWN0b3J5LmZyb21Hb29nbGVDdXN0b21TZWFyY2hFbmdpbmUoZGF0YSkpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0cy5wdXNoKFJlc3VsdEZhY3RvcnkuZnJvbUdlbmVyaWMoZGF0YSwgaSkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIEFQSSByZXN1bHQgb2JqZWN0IGludG8gYSBnZW5lcmljIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0fVxuICAgKi9cbiAgc3RhdGljIGZyb21HZW5lcmljIChkYXRhLCBpbmRleCkge1xuICAgIHJldHVybiBuZXcgUmVzdWx0KHtcbiAgICAgIHJhdzogZGF0YSxcbiAgICAgIHRpdGxlOiBkYXRhLm5hbWUsXG4gICAgICBkZXRhaWxzOiBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgbGluazogZGF0YS53ZWJzaXRlLFxuICAgICAgaWQ6IGRhdGEuaWQsXG4gICAgICBvcmRpbmFsOiBpbmRleCArIDFcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBBUEkgcmVzdWx0IG9iamVjdCBpbnRvIGEgcmVzdWx0IHZpZXcgbW9kZWwuXG4gICAqIE1hcHMgdmlldyBtb2RlbCBmaWVsZHMgYmFzZWQgb24gdGhlIEFQSSBkYXRhIGZvciBhIEdvb2dsZSBDdXN0b20gU2VhcmNoIEVuZ2luZSBvYmplY3QuXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEByZXR1cm5zIHtSZXN1bHR9XG4gICAqL1xuICBzdGF0aWMgZnJvbUdvb2dsZUN1c3RvbVNlYXJjaEVuZ2luZSAoZGF0YSkge1xuICAgIHJldHVybiBuZXcgUmVzdWx0KHtcbiAgICAgIHJhdzogZGF0YSxcbiAgICAgIHRpdGxlOiBkYXRhLmh0bWxUaXRsZS5yZXBsYWNlKC8oPChbXj5dKyk+KS9pZywgJycpLFxuICAgICAgZGV0YWlsczogZGF0YS5odG1sU25pcHBldCxcbiAgICAgIGxpbms6IGRhdGEubGlua1xuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWN0aW9uICovXG5cbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuaW1wb3J0IFJlc3VsdEZhY3RvcnkgZnJvbSAnLi9yZXN1bHRmYWN0b3J5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yIChkYXRhLCB1cmwpIHtcbiAgICB0aGlzLnNlYXJjaFN0YXRlID0gU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURTtcbiAgICB0aGlzLnZlcnRpY2FsQ29uZmlnSWQgPSBkYXRhLnZlcnRpY2FsQ29uZmlnSWQgfHwgbnVsbDtcbiAgICB0aGlzLnJlc3VsdHNDb3VudCA9IGRhdGEucmVzdWx0c0NvdW50IHx8IDA7XG4gICAgdGhpcy5lbmNvZGVkU3RhdGUgPSBkYXRhLmVuY29kZWRTdGF0ZSB8fCAnJztcbiAgICB0aGlzLmFwcGxpZWRRdWVyeUZpbHRlcnMgPSBBcHBsaWVkUXVlcnlGaWx0ZXIuZnJvbShkYXRhLmFwcGxpZWRRdWVyeUZpbHRlcnMpO1xuICAgIHRoaXMuZmFjZXRzID0gZGF0YS5mYWNldHMgfHwgbnVsbDtcbiAgICB0aGlzLnJlc3VsdHMgPSBSZXN1bHRGYWN0b3J5LmZyb20oZGF0YS5yZXN1bHRzKTtcbiAgICB0aGlzLm1hcCA9IFNlY3Rpb24ucGFyc2VNYXAoZGF0YS5yZXN1bHRzKTtcbiAgICB0aGlzLnZlcnRpY2FsVVJMID0gdXJsIHx8IG51bGw7XG4gIH1cblxuICBzdGF0aWMgcGFyc2VNYXAgKHJlc3VsdHMpIHtcbiAgICBsZXQgbWFwTWFya2VycyA9IFtdO1xuXG4gICAgbGV0IGNlbnRlckNvb3JkaW5hdGVzID0ge307XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc3VsdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIFJlbW92ZSBsZWdhY3kgZmFsbGJhY2sgZnJvbSBhbGwgZGF0YSBmb3JtYXRcbiAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzW2pdLmRhdGEgfHwgcmVzdWx0c1tqXTtcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZSkge1xuICAgICAgICBpZiAoIWNlbnRlckNvb3JkaW5hdGVzLmxhdGl0dWRlKSB7XG4gICAgICAgICAgY2VudGVyQ29vcmRpbmF0ZXMgPSB7XG4gICAgICAgICAgICBsYXRpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sb25naXR1ZGVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIG1hcE1hcmtlcnMucHVzaCh7XG4gICAgICAgICAgaXRlbTogcmVzdWx0LFxuICAgICAgICAgIGxhYmVsOiBtYXBNYXJrZXJzLmxlbmd0aCArIDEsXG4gICAgICAgICAgbGF0aXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubGF0aXR1ZGUsXG4gICAgICAgICAgbG9uZ2l0dWRlOiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlLmxvbmdpdHVkZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgJ21hcENlbnRlcic6IGNlbnRlckNvb3JkaW5hdGVzLFxuICAgICAgJ21hcE1hcmtlcnMnOiBtYXBNYXJrZXJzXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChtb2R1bGVzLCB1cmxzKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gW107XG4gICAgaWYgKCFtb2R1bGVzKSB7XG4gICAgICByZXR1cm4gc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmV3IFNlY3Rpb24obW9kdWxlcyk7XG4gICAgfVxuXG4gICAgLy8gT3VyIHNlY3Rpb25zIHNob3VsZCBjb250YWluIGEgcHJvcGVydHkgb2YgbWFwTWFya2VyIG9iamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNlY3Rpb25zLnB1c2goXG4gICAgICAgIG5ldyBTZWN0aW9uKFxuICAgICAgICAgIG1vZHVsZXNbaV0sXG4gICAgICAgICAgdXJsc1ttb2R1bGVzW2ldLnZlcnRpY2FsQ29uZmlnSWRdXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlY3Rpb25zO1xuICB9XG59XG5cbmNsYXNzIEFwcGxpZWRRdWVyeUZpbHRlciB7XG4gIC8vIFN1cHBvcnQgbGVnYWN5IG1vZGVsIGFuZCBuZXcgbW9kZWwgdW50aWwgZnVsbHkgbWlncmF0ZWQuXG4gIC8vIFRPRE8oYmlsbHkpIFJlbW92ZSB0aGUgbGVmdCBleHByZXNzaW9uIGR1cmluZyBhc3NpZ25tZW50IHdoZW4gbWlncmF0ZWQuXG4gIGNvbnN0cnVjdG9yIChhcHBsaWVkUXVlcnlGaWx0ZXIpIHtcbiAgICB0aGlzLmtleSA9IGFwcGxpZWRRdWVyeUZpbHRlci5rZXkgfHwgYXBwbGllZFF1ZXJ5RmlsdGVyLmRpc3BsYXlLZXk7XG4gICAgdGhpcy52YWx1ZSA9IGFwcGxpZWRRdWVyeUZpbHRlci52YWx1ZSB8fCBhcHBsaWVkUXVlcnlGaWx0ZXIuZGlzcGxheVZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKGFwcGxpZWRRdWVyeUZpbHRlcnMpIHtcbiAgICBsZXQgZmlsdGVycyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwbGllZFF1ZXJ5RmlsdGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgZmlsdGVycy5wdXNoKG5ldyBBcHBsaWVkUXVlcnlGaWx0ZXIoYXBwbGllZFF1ZXJ5RmlsdGVyc1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVycztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgVW5pdmVyc2FsUmVzdWx0cyAqL1xuXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL3NlY3Rpb24nO1xuaW1wb3J0IFNlYXJjaFN0YXRlcyBmcm9tICcuLi9zdG9yYWdlL3NlYXJjaHN0YXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaXZlcnNhbFJlc3VsdHMge1xuICBjb25zdHJ1Y3RvciAoZGF0YSkge1xuICAgIHRoaXMucXVlcnlJZCA9IGRhdGEucXVlcnlJZCB8fCBudWxsO1xuICAgIHRoaXMuc2VjdGlvbnMgPSBkYXRhLnNlY3Rpb25zIHx8IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHNlYXJjaCwgdXNlZCB0byByZW5kZXIgZGlmZmVyZW50IHRlbXBsYXRlcyBiZWZvcmUsIGR1cmluZyxcbiAgICAgKiBhbmQgYWZ0ZXIgbG9hZGluZ1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zZWFyY2hTdGF0ZSA9IGRhdGEuc2VhcmNoU3RhdGUgfHwgU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSwgdXJscykge1xuICAgIHJldHVybiBuZXcgVW5pdmVyc2FsUmVzdWx0cyh7XG4gICAgICBxdWVyeUlkOiByZXNwb25zZS5xdWVyeUlkLFxuICAgICAgc2VjdGlvbnM6IFNlY3Rpb24uZnJvbShyZXNwb25zZS5tb2R1bGVzLCB1cmxzKVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIFVuaXZlcnZhbFJlc3VsdHMgb2JqZWN0IHJlcHJlc2VudGluZyBsb2FkaW5nIHJlc3VsdHNcbiAgICogQHJldHVybiB7VW5pdmVyc2FsUmVzdWx0c31cbiAgICovXG4gIHN0YXRpYyBzZWFyY2hMb2FkaW5nICgpIHtcbiAgICByZXR1cm4gbmV3IFVuaXZlcnNhbFJlc3VsdHMoeyBzZWFyY2hTdGF0ZTogU2VhcmNoU3RhdGVzLlNFQVJDSF9MT0FESU5HIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEaXJlY3RBbnN3ZXIgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0QW5zd2VyIHtcbiAgY29uc3RydWN0b3IgKGRpcmVjdEFuc3dlciA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkaXJlY3RBbnN3ZXIpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE5hdmlnYXRpb24gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiB7XG4gIGNvbnN0cnVjdG9yICh0YWJPcmRlcikge1xuICAgIHRoaXMudGFiT3JkZXIgPSB0YWJPcmRlciB8fCBbXTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKG1vZHVsZXMpIHtcbiAgICBsZXQgbmF2ID0gW107XG4gICAgaWYgKCFtb2R1bGVzIHx8ICFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmF2O1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5hdi5wdXNoKG1vZHVsZXNbaV0udmVydGljYWxDb25maWdJZCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgTmF2aWdhdGlvbihuYXYpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBWZXJ0aWNhbFJlc3VsdHMgKi9cblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9zZWN0aW9uJztcbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0aWNhbFJlc3VsdHMge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IHNlYXJjaFN0YXRlOiBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFIH0sIGRhdGEpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kIHRoZSBwcm92aWRlZCByZXN1bHRzIHRvIHRoZSBjdXJyZW50IHJlc3VsdHNcbiAgICogQHBhcmFtIHtWZXJ0aWNhbFJlc3VsdHN9IHJlc3VsdHMgdGhlIHJlc3VsdHMgdG8gYXBwZW5kIHRvIHRoZSBjdXJyZW50IHJlc3VsdHNcbiAgICovXG4gIGFwcGVuZCAocmVzdWx0cykge1xuICAgIGNvbnN0IG1lcmdlZCA9IHsgLi4udGhpcyB9O1xuICAgIG1lcmdlZC5yZXN1bHRzID0gdGhpcy5yZXN1bHRzLmNvbmNhdChyZXN1bHRzLnJlc3VsdHMpO1xuICAgIG1lcmdlZC5tYXAubWFwTWFya2VycyA9IHRoaXMubWFwLm1hcE1hcmtlcnMuY29uY2F0KHJlc3VsdHMubWFwLm1hcE1hcmtlcnMpO1xuICAgIHJldHVybiBuZXcgVmVydGljYWxSZXN1bHRzKG1lcmdlZCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gbmV3IFZlcnRpY2FsUmVzdWx0cyhTZWN0aW9uLmZyb20ocmVzcG9uc2UpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBWZXJ0aWNhbFJlc3VsdHMgb2JqZWN0IHJlcHJlc2VudGluZyBsb2FkaW5nIHJlc3VsdHNcbiAgICogQHJldHVybiB7VmVydGljYWxSZXN1bHRzfVxuICAgKi9cbiAgc3RhdGljIHNlYXJjaExvYWRpbmcgKCkge1xuICAgIHJldHVybiBuZXcgVmVydGljYWxSZXN1bHRzKHsgc2VhcmNoU3RhdGU6IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTdG9yYWdlS2V5cyAqL1xuXG4vKipcbiAqIFN0b3JhZ2VLZXlzIGlzIGFuIEVOVU0gYXJlIGNvbnNpZGVyZWQgdGhlIHJvb3QgY29udGV4dFxuICogZm9yIGhvdyBkYXRhIGlzIHN0b3JlZCBhbmQgc2NvcGVkIGluIHRoZSBzdG9yYWdlLlxuICpcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgTkFWSUdBVElPTjogJ25hdmlnYXRpb24nLFxuICBVTklWRVJTQUxfUkVTVUxUUzogJ3VuaXZlcnNhbC1yZXN1bHRzJyxcbiAgVkVSVElDQUxfUkVTVUxUUzogJ3ZlcnRpY2FsLXJlc3VsdHMnLFxuICBBVVRPQ09NUExFVEU6ICdhdXRvY29tcGxldGUnLFxuICBESVJFQ1RfQU5TV0VSOiAnZGlyZWN0LWFuc3dlcicsXG4gIEZJTFRFUjogJ2ZpbHRlcicsXG4gIFFVRVJZOiAncXVlcnknLFxuICBRVUVSWV9JRDogJ3F1ZXJ5LWlkJyxcbiAgRkFDRVRfRklMVEVSOiAnZmFjZXQtZmlsdGVyJyxcbiAgRFlOQU1JQ19GSUxURVJTOiAnZHluYW1pYy1maWx0ZXJzJyxcbiAgU0VBUkNIX0xJTUlUOiAnc2VhcmNoLWxpbWl0JyxcbiAgUVVFU1RJT05fU1VCTUlTU0lPTjogJ3F1ZXN0aW9uLXN1Ym1pc3Npb24nXG59O1xuIiwiLyoqIEBtb2R1bGUgRHluYW1pY0ZpbHRlcnMgKi9cblxuLyoqXG4gKiBNb2RlbCByZXByZXNlbnRpbmcgYSBzZXQgb2YgZHluYW1pYyBmaWx0ZXJzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNGaWx0ZXJzIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBmaWx0ZXJzIHRoaXMgbW9kZWwgaG9sZHNcbiAgICAgKiBAdHlwZSB7e2xhYmVsOiBzdHJpbmcsIGZpZWxkSWQ6IHN0cmluZywgb3B0aW9uczogb2JqZWN0W119fVxuICAgICAqL1xuICAgIHRoaXMuZmlsdGVycyA9IGRhdGEuZmlsdGVycyB8fCBbXTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9yZ2FuaXplICdmYWNldHMnIGZyb20gdGhlIGFwaSByZXNwb25zZSBpbnRvIGR5bmFtaWMgZmlsdGVyc1xuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2UgZHluYW1pYyBmaWx0ZXIgcmVzcG9uc2UgZnJvbSB0aGUgYXBpXG4gICAqIEByZXR1cm5zIHtEeW5hbWljRmlsdGVyc31cbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSkge1xuICAgIGNvbnN0IHsgZmFjZXRzIH0gPSByZXNwb25zZTtcbiAgICBjb25zdCBkeW5hbWljRmlsdGVycyA9IGZhY2V0cy5tYXAoZiA9PiAoe1xuICAgICAgbGFiZWw6IGZbJ2Rpc3BsYXlOYW1lJ10sXG4gICAgICBmaWVsZElkOiBmWydmaWVsZElkJ10sXG4gICAgICBvcHRpb25zOiBmLm9wdGlvbnMubWFwKG8gPT4gKHtcbiAgICAgICAgbGFiZWw6IG9bJ2Rpc3BsYXlOYW1lJ10sXG4gICAgICAgIGNvdW50TGFiZWw6IG9bJ2NvdW50J10sXG4gICAgICAgIHNlbGVjdGVkOiBvWydzZWxlY3RlZCddLFxuICAgICAgICBmaWx0ZXI6IG9bJ2ZpbHRlciddXG4gICAgICB9KSlcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gbmV3IER5bmFtaWNGaWx0ZXJzKHsgZmlsdGVyczogZHluYW1pY0ZpbHRlcnMgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaERhdGFUcmFuc2Zvcm1lciAqL1xuXG5pbXBvcnQgVW5pdmVyc2FsUmVzdWx0cyBmcm9tICcuLi9tb2RlbHMvdW5pdmVyc2FscmVzdWx0cyc7XG5pbXBvcnQgRGlyZWN0QW5zd2VyIGZyb20gJy4uL21vZGVscy9kaXJlY3RhbnN3ZXInO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vbW9kZWxzL25hdmlnYXRpb24nO1xuaW1wb3J0IFZlcnRpY2FsUmVzdWx0cyBmcm9tICcuLi9tb2RlbHMvdmVydGljYWxyZXN1bHRzJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBEeW5hbWljRmlsdGVycyBmcm9tICcuLi9tb2RlbHMvZHluYW1pY2ZpbHRlcnMnO1xuXG4vKipcbiAqIEEgRGF0YSBUcmFuc2Zvcm1lciB0aGF0IHRha2VzIHRoZSByZXNwb25zZSBvYmplY3QgZnJvbSBhIFNlYXJjaCByZXF1ZXN0XG4gKiBBbmQgdHJhbnNmb3JtcyBpbiB0byBhIGZyb250LWVuZCBvcmllbnRlZCBkYXRhIHN0cnVjdHVyZSB0aGF0IG91clxuICogY29tcG9uZW50IGxpYnJhcnkgYW5kIGNvcmUgc3RvcmFnZSB1bmRlcnN0YW5kLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hEYXRhVHJhbnNmb3JtZXIge1xuICBzdGF0aWMgdHJhbnNmb3JtIChkYXRhLCB1cmxzID0ge30pIHtcbiAgICBsZXQgcmVzcG9uc2UgPSBkYXRhLnJlc3BvbnNlO1xuICAgIHJldHVybiB7XG4gICAgICBbU3RvcmFnZUtleXMuUVVFUllfSURdOiByZXNwb25zZS5xdWVyeUlkLFxuICAgICAgW1N0b3JhZ2VLZXlzLk5BVklHQVRJT05dOiBOYXZpZ2F0aW9uLmZyb20ocmVzcG9uc2UubW9kdWxlcyksXG4gICAgICBbU3RvcmFnZUtleXMuRElSRUNUX0FOU1dFUl06IG5ldyBEaXJlY3RBbnN3ZXIocmVzcG9uc2UuZGlyZWN0QW5zd2VyKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUU106IFVuaXZlcnNhbFJlc3VsdHMuZnJvbShyZXNwb25zZSwgdXJscylcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHRyYW5zZm9ybVZlcnRpY2FsIChkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtTdG9yYWdlS2V5cy5RVUVSWV9JRF06IGRhdGEucmVzcG9uc2UucXVlcnlJZCxcbiAgICAgIFtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXTogbmV3IE5hdmlnYXRpb24oKSwgLy8gVmVyaXRjYWwgZG9lc24ndCByZXNwb25kIHdpdGggb3JkZXJpbmcsIHNvIHVzZSBlbXB0eSBuYXYuXG4gICAgICBbU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUU106IFZlcnRpY2FsUmVzdWx0cy5mcm9tKGRhdGEucmVzcG9uc2UpLFxuICAgICAgW1N0b3JhZ2VLZXlzLkRZTkFNSUNfRklMVEVSU106IER5bmFtaWNGaWx0ZXJzLmZyb20oZGF0YS5yZXNwb25zZSlcbiAgICB9O1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBFdmVudEVtaXR0ZXIgKi9cblxuLyoqXG4gKiBFdmVudEVtaXR0ZXIgaXMgYSBiYXNlIGNsYXNzIGZvciBhbnkgb2JqZWN0IHRoYXQgd2FudHMgdG8gZXhwb3NlXG4gKiBhIHB1Yi9zdWIgaW50ZXJmYWNlLCBmb3IgZW1pdHRpbmcgbWVzc2FnZXMgYW5kIHByb3ZpZGluZyBsaXN0ZW5lcnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgc3Vic2NyaWJlcnMgb2YgbWVzc2FnZXNcbiAgICAgKiBAdHlwZSB7b2JqZWN0W119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbiBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3Igc3Vic2NyaWJpbmcgZXZlbnRzIHRoYXQgYXJlIGVtaXR0ZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gbGlzdGVuIHRvXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIFRoZSBjYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUge2V2dH0gaXMgZW1pdHRlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uY2UgT3B0aW9uYWwgdmFsdWUgd2hpY2ggd2lsbCBvbmx5IGhhbmRsZSB0aGUgbWVzc2FnZSBvbmNlXG4gICAqL1xuICBvbiAoZXZ0LCBjYiwgb25jZSkge1xuICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgaGFuZGxlciBzaG91bGQgYmUgb2YgdHlwZSB7ZnVuY3Rpb259Jyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xpc3RlbmVyc1tldnRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVyc1tldnRdID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5fbGlzdGVuZXJzW2V2dF0ucHVzaCh7XG4gICAgICBldmVudDogZXZ0LFxuICAgICAgY2I6IGNiLFxuICAgICAgb25jZTogb25jZSB8fCBmYWxzZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogb25jZSBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3Igc3Vic2NyaWJpbmcgZXZlbnRzIHRoYXQgYXJlIGVtaXR0ZWQuXG4gICAqIFRoZSBoYW5kbGVyIHdpbGwgb25seSBiZSB0cmlnZ2VyZWQgb25jZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byBsaXN0ZW4gdG9cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgVGhlIGNhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSB7ZXZ0fSBpcyBlbWl0dGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSBPcHRpb25hbCB2YWx1ZSB3aGljaCB3aWxsIG9ubHkgaGFuZGxlIHRoZSBtZXNzYWdlIG9uY2VcbiAgICovXG4gIG9uY2UgKGV2dCwgY2IpIHtcbiAgICByZXR1cm4gdGhpcy5vbihldnQsIGNiLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvZmYgaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIHVuc3Vic2NyaWJpbmcgZnJvbSBhbiBldmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIHVuc3Vic2NyaWJlIGZyb21cbiAgICovXG4gIG9mZiAoZXZ0KSB7XG4gICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyc1tldnRdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGVtaXQgaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIGJyb2FkY2FzdGluZyBtZXNzYWdlcy9ldmVudHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byBwdWJsaXNoIGZyb21cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgdGhlIGRhdGEgdG8gc2VuZCBhbG9uZyB0byB0aGUgc3Vic2NyaWJlcnNcbiAgICovXG4gIGVtaXQgKGV2dCwgZGF0YSkge1xuICAgIGxldCBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNbZXZ0XTtcbiAgICBpZiAobGlzdGVuZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJbnZva2UgZWFjaCBvZiBhbGwgdGhlIGxpc3RlbmVyIGhhbmRsZXJzIGFuZCByZW1vdmUgdGhlIG9uZXMgdGhhdCBzaG91bGQgZmlyZSBvbmx5IG9uY2UuXG4gICAgbGV0IGtlZXAgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdGVuZXJzW2ldLmNiKGRhdGEpO1xuICAgICAgaWYgKGxpc3RlbmVyc1tpXS5vbmNlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBJbnN0ZWFkIG9mIGhhdmluZyBhICdkaXJ0eScgYXJyYXkgd2l0aCBkZWxldGVkIG9yICd1bmRlZmluZWQnIGVudHJpZXMsXG4gICAgICAvLyB3ZSBqdXN0IGNyZWF0ZSBhIGJyYW5kIG5ldyBhcnJheSB3aXRob3V0IHRoZSBsaXN0ZW5lcnMgdGhhdCB3ZXJlIHJlbW92ZWRcbiAgICAgIGtlZXAucHVzaChsaXN0ZW5lcnNbaV0pO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBvdXIgb2xkIGxpc3Qgb2YgbGlzdGVuZXJzIHRvIHRoZSBuZXdseSBjcmVhdGVkIGFycmF5XG4gICAgdGhpcy5fbGlzdGVuZXJzW2V2dF0gPSBrZWVwO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNb2R1bGVEYXRhICovXG5cbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlcic7XG5cbi8qKlxuICogTW9kdWxlRGF0YSBpcyB1c2VkIGFzIGEgZ2VuZXJpYyBtb2RlbCBmb3IgU3RvcmFnZS5cbiAqIFR5cGljYWxseSBhbiBpbnN0YW5jZSBvZiBNb2R1bGVEYXRhIHBvd2VycyBhIHNpbmdsZSBjb21wb25lbnQuXG5cbiAqIEEgZGF0YSBtb2RlbCB0aGF0IGV4cG9zZXMgYW4gZXZlbnQgZW1pdHRlciBpbnRlcmZhY2UuXG4gKiBAZXh0ZW5kcyBFdmVudEVtaXR0ZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kdWxlRGF0YSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChpZCwgZGF0YSA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgdGhpcy5faGlzdG9yeSA9IFtdO1xuICAgIHRoaXMuX2RhdGEgPSB7fTtcbiAgICB0aGlzLnNldChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXBsYWNlcyB0aGUgY3VycmVudGx5IGhlbGQgZGF0YSB3aXRoIHRoZSBnaXZlbiBkYXRhXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSB0aGUgZGF0YSB0byByZXBsYWNlIHRoZSBjdXJyZW50IGRhdGFcbiAgICovXG4gIHNldCAoZGF0YSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBkYXRhIHx8IHt9O1xuXG4gICAgdGhpcy5jYXB0dXJlUHJldmlvdXMoKTtcblxuICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCcgfHwgT2JqZWN0LmtleXMobmV3RGF0YSkubGVuZ3RoICE9PSBPYmplY3Qua2V5cyh0aGlzLl9kYXRhKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSBuZXdEYXRhO1xuICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLl9kYXRhKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBmb3Igc2hhbGxvdyBlcXVhbGl0eVxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG5ld0RhdGEpKSB7XG4gICAgICBpZiAodGhpcy5fZGF0YVtrZXldICE9PSBuZXdEYXRhW2tleV0pIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IG5ld0RhdGE7XG4gICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5fZGF0YSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjYXB0dXJlUHJldmlvdXMgKCkge1xuICAgIGlmICh0aGlzLl9oaXN0b3J5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2hpc3RvcnkgPSBbXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faGlzdG9yeS5sZW5ndGggKyAxID4gNSkge1xuICAgICAgdGhpcy5faGlzdG9yeS5zaGlmdCgpO1xuICAgIH1cblxuICAgIC8vIElmIGRhdGEgaXMgZXZlciB1bmRlZmluZWQsIHdlIGRlZmF1bHQgdG8gZW1wdHkgb2JqZWN0XG4gICAgdGhpcy5faGlzdG9yeS5wdXNoKEpTT04uc3RyaW5naWZ5KHRoaXMuX2RhdGEgfHwge30pKTtcbiAgfVxuXG4gIHVuZG8gKCkge1xuICAgIGxldCBwcmV2aW91cyA9IHt9O1xuICAgIGlmICh0aGlzLl9wcmV2aW91cy5sZW5ndGggPiAwKSB7XG4gICAgICBwcmV2aW91cyA9IEpTT04ucGFyc2UodGhpcy5fcHJldmlvdXMucG9wKCkpO1xuICAgIH1cblxuICAgIHRoaXMuX2RhdGEuc2V0KHByZXZpb3VzKTtcbiAgfVxuXG4gIHJhdyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFN0b3JhZ2UgKi9cblxuaW1wb3J0IE1vZHVsZURhdGEgZnJvbSAnLi9tb2R1bGVkYXRhJztcbmltcG9ydCB7IEFuc3dlcnNTdG9yYWdlRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBTdG9yYWdlIGlzIGEgY29udGFpbmVyIGFyb3VuZCBhcHBsaWNhdGlvbiBzdGF0ZS5cbiAqIEl0IGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBDUlVEIG9wZXJhdGlvbnMgYXMgd2VsbCBhcyBsaXN0ZW5pbmdcbiAqIGZvciBzdGF0ZWZ1bCBjaGFuZ2VzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXIgPSB7fTtcbiAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGRhdGEgaW4gc3RvcmFnZSB3aXRoIHRoZSBnaXZlbiBrZXkgdG8gdGhlIHByb3ZpZGVkIGRhdGEsXG4gICAqIGNvbXBsZXRlbHkgb3ZlcndyaXRpbmcgYW55IGV4aXN0aW5nIGRhdGEuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdGhlIHN0b3JhZ2Uga2V5IHRvIHNldFxuICAgKiBAcGFyYW0geyp9IGRhdGEgdGhlIGRhdGEgdG8gc2V0XG4gICAqL1xuICBzZXQgKGtleSwgZGF0YSkge1xuICAgIHRoaXMuX2luaXREYXRhQ29udGFpbmVyKGtleSwgZGF0YSk7XG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltrZXldLnNldChkYXRhKTtcbiAgfVxuXG4gIF9pbml0RGF0YUNvbnRhaW5lciAoa2V5LCBkYXRhKSB7XG4gICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkIHx8IGtleSA9PT0gbnVsbCB8fCB0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNTdG9yYWdlRXJyb3IoJ0ludmFsaWQgc3RvcmFnZSBrZXkgcHJvdmlkZWQnLCBrZXksIGRhdGEpO1xuICAgIH1cbiAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkIHx8IGRhdGEgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzU3RvcmFnZUVycm9yKCdObyBkYXRhIHByb3ZpZGVkJywga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJba2V5XSA9IG5ldyBNb2R1bGVEYXRhKGtleSk7XG4gICAgICB0aGlzLl9hcHBseUZ1dHVyZUxpc3RlbmVycyhrZXkpO1xuICAgIH1cbiAgfVxuXG4gIGdldFN0YXRlIChtb2R1bGVJZCkge1xuICAgIGlmICh0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXSkge1xuICAgICAgcmV0dXJuIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdLnJhdygpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldEFsbCAoa2V5KSB7XG4gICAgY29uc3QgZGF0YSA9IFtdO1xuICAgIGZvciAoY29uc3QgZGF0YUtleSBvZiBPYmplY3Qua2V5cyh0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyKSkge1xuICAgICAgaWYgKGRhdGFLZXkuc3RhcnRzV2l0aChrZXkpICYmIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbZGF0YUtleV0ucmF3KCkgIT09IG51bGwpIHtcbiAgICAgICAgZGF0YS5wdXNoKHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbZGF0YUtleV0ucmF3KCkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIG9uIChldnQsIG1vZHVsZUlkLCBjYikge1xuICAgIGxldCBtb2R1bGVEYXRhID0gdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF07XG4gICAgaWYgKG1vZHVsZURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdID0gW107XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0ucHVzaCh7XG4gICAgICAgIGV2ZW50OiBldnQsXG4gICAgICAgIGNiOiBjYlxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5vbihldnQsIGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9mZiAoZXZ0LCBtb2R1bGVJZCwgY2IpIHtcbiAgICBsZXQgbW9kdWxlRGF0YSA9IHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdO1xuICAgIGlmIChtb2R1bGVEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXS5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0ub2ZmKGV2dCwgY2IpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2FwcGx5RnV0dXJlTGlzdGVuZXJzIChtb2R1bGVJZCkge1xuICAgIGxldCBmdXR1cmVzID0gdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXTtcbiAgICBpZiAoIWZ1dHVyZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZ1dHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBmdXR1cmUgPSBmdXR1cmVzW2ldO1xuICAgICAgdGhpcy5vbihmdXR1cmUuZXZlbnQsIG1vZHVsZUlkLCBmdXR1cmUuY2IpO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUXVlc3Rpb25TdWJtaXNzaW9uICovXG5cbi8qKlxuICogUXVlc3Rpb25TdWJtaXNzaW9uIGlzIHRoZSBjb3JlIHN0YXRlIG1vZGVsXG4gKiB0byBwb3dlciB0aGUgUXVlc3Rpb25TdWJtaXNzaW9uIGNvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdGlvblN1Ym1pc3Npb24ge1xuICBjb25zdHJ1Y3RvciAocXVlc3Rpb24gPSB7fSwgZXJyb3JzKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGF1dGhvciBvZiB0aGUgcXVlc3Rpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubmFtZSA9IHF1ZXN0aW9uLm5hbWUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBlbWFpbCBhZGRyZXNzIG9mIHRoZSBxdWVzdGlvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5lbWFpbCA9IHF1ZXN0aW9uLmVtYWlsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBwcml2YWN5IHBvbGljeSB3YXMgYXBwcm92ZWRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnByaXZhY3lQb2xpY3kgPSBxdWVzdGlvbi5wcml2YWN5UG9saWN5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlc3Rpb24gdG8gYmUgc2VudCB0byB0aGUgc2VydmVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXN0aW9uVGV4dCA9IHF1ZXN0aW9uLnF1ZXN0aW9uVGV4dCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQWx0ZXJuYXRpdmUgcXVlc3Rpb24gbWV0YSBpbmZvcm1hdGlvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5xdWVzdGlvbkRlc2NyaXB0aW9uID0gcXVlc3Rpb24ucXVlc3Rpb25EZXNjcmlwdGlvbiB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQ29udGFpbnMgYW55IGVycm9ycyBhYm91dCB0aGUgcXVlc3Rpb24gc3VibWlzc2lvblxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5lcnJvcnMgPSBlcnJvcnMgfHwgbnVsbDtcblxuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBzdGF0aWMgc3VibWl0dGVkICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlc3Rpb25TdWJtaXR0ZWQ6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGVycm9ycyAocXVlc3Rpb24sIGVycm9ycykge1xuICAgIHJldHVybiBRdWVzdGlvblN1Ym1pc3Npb24ocXVlc3Rpb24sIGVycm9ycyk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIENvcmUgKi9cblxuaW1wb3J0IFNlYXJjaEFwaSBmcm9tICcuL3NlYXJjaC9zZWFyY2hhcGknO1xuaW1wb3J0IEF1dG9Db21wbGV0ZUFwaSBmcm9tICcuL3NlYXJjaC9hdXRvY29tcGxldGVhcGknO1xuaW1wb3J0IFF1ZXN0aW9uQW5zd2VyQXBpIGZyb20gJy4vc2VhcmNoL3F1ZXN0aW9uYW5zd2VyYXBpJztcblxuaW1wb3J0IFNlYXJjaERhdGFUcmFuc2Zvcm1lciBmcm9tICcuL3NlYXJjaC9zZWFyY2hkYXRhdHJhbnNmb3JtZXInO1xuXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2Uvc3RvcmFnZSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBWZXJ0aWNhbFJlc3VsdHMgZnJvbSAnLi9tb2RlbHMvdmVydGljYWxyZXN1bHRzJztcbmltcG9ydCBVbml2ZXJzYWxSZXN1bHRzIGZyb20gJy4vbW9kZWxzL3VuaXZlcnNhbHJlc3VsdHMnO1xuaW1wb3J0IFF1ZXN0aW9uU3VibWlzc2lvbiBmcm9tICcuL21vZGVscy9xdWVzdGlvbnN1Ym1pc3Npb24nO1xuXG4vKipcbiAqIENvcmUgaXMgdGhlIG1haW4gYXBwbGljYXRpb24gY29udGFpbmVyIGZvciBhbGwgb2YgdGhlIG5ldHdvcmsgYW5kIHN0b3JhZ2VcbiAqIHJlbGF0ZWQgYmVoYXZpb3JzIG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29yZSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLmFwaUtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBgYXBpS2V5YC4gVHlwZSBtdXN0IGJlIHtzdHJpbmd9Jyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuYW5zd2Vyc0tleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBgYW5zd2Vyc0tleWAuIFR5cGUgbXVzdCBiZSB7c3RyaW5nfScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjbGllbnQgQVBJIEtleSB1c2VkIGZvciBhbGwgcmVxdWVzdHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBpS2V5ID0gY29uZmlnLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjbGllbnQgQW5zd2VycyBLZXkgdXNlZCBmb3IgYWxsIHJlcXVlc3RzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Fuc3dlcnNLZXkgPSBjb25maWcuYW5zd2Vyc0tleTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjbGllbnQgbG9jYWxlIHVzZWQgZm9yIGFsbCByZXF1ZXN0cy4gSWYgbm90IHNwZWNpZmllZCwgZGVmYXVsdHMgdG8gXCJlblwiIChmb3JcbiAgICAgKiBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSkuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xvY2FsZSA9IGNvbmZpZy5sb2NhbGUgfHwgJ2VuJztcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjb3JlIGRhdGEgc3RvcmFnZSB0aGF0IHBvd2VycyB0aGUgVUlcbiAgICAgKiBAdHlwZSB7U3RvcmFnZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiBjb250YWluaW5nIHRoZSBpbnRlZ3JhdGlvbiB3aXRoIHRoZSBSRVNUZnVsIHNlYXJjaCBBUElcbiAgICAgKiBGb3IgYm90aCB2ZXJ0aWNhbCBhbmQgdW5pdmVyc2FsIHNlYXJjaFxuICAgICAqIEB0eXBlIHtTZWFyY2h9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zZWFyY2hlciA9IG5ldyBTZWFyY2hBcGkoe1xuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICBhbnN3ZXJzS2V5OiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgbG9jYWxlOiB0aGlzLl9sb2NhbGVcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIGNvbnRhaW5pbmcgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIFJFU1RmdWwgYXV0b2NvbXBsZXRlIEFQSVxuICAgICAqIEZvciBmaWx0ZXIgc2VhcmNoLCB2ZXJ0aWNhbCBhdXRvY29tcGxldGUsIGFuZCB1bml2ZXJzYWwgYXV0b2NvbXBsZXRlXG4gICAgICogQHR5cGUge0F1dG9jb21wbGV0ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2F1dG9Db21wbGV0ZSA9IG5ldyBBdXRvQ29tcGxldGVBcGkoe1xuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICBhbnN3ZXJzS2V5OiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgbG9jYWxlOiB0aGlzLl9sb2NhbGVcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBRJkEgcmVzdCBpbnRlcmZhY2VcbiAgICAgKiBAdHlwZSB7UXVlc3Rpb25BbnN3ZXJBcGl9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9xdWVzdGlvbkFuc3dlciA9IG5ldyBRdWVzdGlvbkFuc3dlckFwaSh7XG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBpbiB0aGUgY29udGV4dCBvZiBhIHZlcnRpY2FsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbEtleSB2ZXJ0aWNhbCBJRCBmb3IgdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge29iamVjdH0gcXVlcnkgVGhlIHF1ZXJ5IGRldGFpbHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmlucHV0IFRoZSBpbnB1dCB0byBzZWFyY2ggZm9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5maWx0ZXIgVGhlIGZpbHRlciB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuZmFjZXRGaWx0ZXIgVGhlIGZhY2V0IGZpbHRlciB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlcnkubGltaXQgVGhlIG1heCBudW1iZXIgb2YgcmVzdWx0cyB0byBpbmNsdWRlLCBtYXggb2YgNTBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1ZXJ5Lm9mZnNldCBUaGUgcmVzdWx0cyBvZmZzZXQsIGZvciBmZXRjaGluZyBtb3JlIHJlc3VsdHMgb2YgdGhlIHNhbWUgcXVlcnlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmlkIFRoZSBxdWVyeSBJRCB0byB1c2UuIElmIHBhZ2luZyB3aXRoaW4gYSBxdWVyeSwgdGhlIHNhbWUgSUQgc2hvdWxkIGJlIHVzZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBxdWVyeS5hcHBlbmQgSWYgdHJ1ZSwgYWRkcyB0aGUgcmVzdWx0cyBvZiB0aGlzIHF1ZXJ5IHRvIHRoZSBlbmQgb2YgdGhlIGN1cnJlbnQgcmVzdWx0cywgZGVmYXVsdHMgZmFsc2VcbiAgICovXG4gIHZlcnRpY2FsU2VhcmNoICh2ZXJ0aWNhbEtleSwgcXVlcnkpIHtcbiAgICBpZiAoIXF1ZXJ5LmFwcGVuZCkge1xuICAgICAgdGhpcy5zdG9yYWdlLnNldChTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTLCBWZXJ0aWNhbFJlc3VsdHMuc2VhcmNoTG9hZGluZygpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoZXJcbiAgICAgIC52ZXJ0aWNhbFNlYXJjaCh2ZXJ0aWNhbEtleSwge1xuICAgICAgICBsaW1pdDogdGhpcy5zdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlNFQVJDSF9MSU1JVCksXG4gICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICBpc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZDogdGhpcy5faXNEeW5hbWljRmlsdGVyc0VuYWJsZWRcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBTZWFyY2hEYXRhVHJhbnNmb3JtZXIudHJhbnNmb3JtVmVydGljYWwocmVzcG9uc2UpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFUllfSUQsIGRhdGFbU3RvcmFnZUtleXMuUVVFUllfSURdKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChTdG9yYWdlS2V5cy5OQVZJR0FUSU9OLCBkYXRhW1N0b3JhZ2VLZXlzLk5BVklHQVRJT05dKTtcblxuICAgICAgICBpZiAocXVlcnkuYXBwZW5kKSB7XG4gICAgICAgICAgY29uc3QgbWVyZ2VkUmVzdWx0cyA9IHRoaXMuc3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTKVxuICAgICAgICAgICAgLmFwcGVuZChkYXRhW1N0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFNdKTtcbiAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFMsIG1lcmdlZFJlc3VsdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUywgZGF0YVtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YVtTdG9yYWdlS2V5cy5EWU5BTUlDX0ZJTFRFUlNdKSB7XG4gICAgICAgICAgdGhpcy5zdG9yYWdlLnNldChTdG9yYWdlS2V5cy5EWU5BTUlDX0ZJTFRFUlMsIGRhdGFbU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoIChxdWVyeVN0cmluZywgdXJscykge1xuICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFMsIFVuaXZlcnNhbFJlc3VsdHMuc2VhcmNoTG9hZGluZygpKTtcblxuICAgIHJldHVybiB0aGlzLl9zZWFyY2hlclxuICAgICAgLnVuaXZlcnNhbFNlYXJjaChxdWVyeVN0cmluZylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IFNlYXJjaERhdGFUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVzcG9uc2UsIHVybHMpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFUllfSUQsIGRhdGFbU3RvcmFnZUtleXMuUVVFUllfSURdKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChTdG9yYWdlS2V5cy5OQVZJR0FUSU9OLCBkYXRhW1N0b3JhZ2VLZXlzLk5BVklHQVRJT05dKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSLCBkYXRhW1N0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVJdKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUUywgZGF0YVtTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUU10sIHVybHMpO1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVNUSU9OX1NVQk1JU1NJT04sIG5ldyBRdWVzdGlvblN1Ym1pc3Npb24oe1xuICAgICAgICAgIHF1ZXN0aW9uVGV4dDogcXVlcnlTdHJpbmdcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYW4gaW5wdXQsIHF1ZXJ5IGZvciBhIGxpc3Qgb2Ygc2ltaWxhciByZXN1bHRzIGFuZCBzZXQgaW50byBzdG9yYWdlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCAgICAgdGhlIHN0cmluZyB0byBhdXRvY29tcGxldGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqL1xuICBhdXRvQ29tcGxldGVVbml2ZXJzYWwgKGlucHV0LCBuYW1lc3BhY2UpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0NvbXBsZXRlXG4gICAgICAucXVlcnlVbml2ZXJzYWwoaW5wdXQpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5BVVRPQ09NUExFVEV9LiR7bmFtZXNwYWNlfWAsIGRhdGEpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYW4gaW5wdXQsIHF1ZXJ5IGZvciBhIGxpc3Qgb2Ygc2ltaWxhciByZXN1bHRzIGluIHRoZSBwcm92aWRlZCB2ZXJ0aWNhbFxuICAgKiBhbmQgc2V0IGludG8gc3RvcmFnZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgICAgICAgdGhlIHN0cmluZyB0byBhdXRvY29tcGxldGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbEtleSB0aGUgdmVydGljYWwga2V5IGZvciB0aGUgZXhwZXJpZW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gYmFyS2V5ICAgICAgdGhlIGJhciBrZXkgZm9yIHRoZSBleHBlcmllbmNlXG4gICAqL1xuICBhdXRvQ29tcGxldGVWZXJ0aWNhbCAoaW5wdXQsIG5hbWVzcGFjZSwgdmVydGljYWxLZXksIGJhcktleSkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvQ29tcGxldGVcbiAgICAgIC5xdWVyeVZlcnRpY2FsKGlucHV0LCB2ZXJ0aWNhbEtleSwgYmFyS2V5KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke25hbWVzcGFjZX1gLCBkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGFuIGlucHV0LCBwcm92aWRlIGEgbGlzdCBvZiBzdWl0YWJsZSBmaWx0ZXJzIGZvciBhdXRvY29tcGxldGlvblxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgICAgICAgICB0aGUgc3RyaW5nIHRvIHNlYXJjaCBmb3IgZmlsdGVycyB3aXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgICAgIHRoZSBuYW1lc3BhY2UgdG8gdXNlIGZvciB0aGUgc3RvcmFnZSBrZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnRpY2FsS2V5ICAgdGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIGV4cGVyaWVuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJhcktleSAgICAgICAgdGhlIGJhciBrZXkgZm9yIHRoZSBleHBlcmllbmNlXG4gICAqL1xuICBhdXRvQ29tcGxldGVGaWx0ZXIgKGlucHV0LCBuYW1lc3BhY2UsIHZlcnRpY2FsS2V5LCBiYXJLZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0NvbXBsZXRlXG4gICAgICAucXVlcnlGaWx0ZXIoaW5wdXQsIHZlcnRpY2FsS2V5LCBiYXJLZXkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5BVVRPQ09NUExFVEV9LiR7bmFtZXNwYWNlfWAsIGRhdGEpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3VibWl0cyBhIHF1ZXN0aW9uIHRvIHRoZSBzZXJ2ZXIgYW5kIHVwZGF0ZXMgdGhlIHVuZGVybHlpbmcgcXVlc3Rpb24gbW9kZWxcbiAgICogQHBhcmFtIHtvYmplY3R9IHF1ZXN0aW9uIFRoZSBxdWVzdGlvbiBvYmplY3QgdG8gc3VibWl0IHRvIHRoZSBzZXJ2ZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1ZXN0aW9uLmVudGl0eUlkIFRoZSBlbnRpdHkgdG8gYXNzb2NpYXRlIHdpdGggdGhlIHF1ZXN0aW9uIChyZXF1aXJlZClcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLmxhbnVhZ2UgVGhlIGxhbmd1YWdlIG9mIHRoZSBxdWVzdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24uc2l0ZSBUaGUgXCJwdWJsaXNoZXJcIiBvZiB0aGUgKGUuZy4gJ0ZJUlNUX1BBUlRZJylcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLm5hbWUgVGhlIG5hbWUgb2YgdGhlIGF1dGhvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24uZW1haWwgVGhlIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIGF1dGhvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ucXVlc3Rpb25UZXh0IFRoZSBxdWVzdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ucXVlc3Rpb25EZXNjcmlwdGlvbiBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBxdWVzdGlvblxuICAgKi9cbiAgc3VibWl0UXVlc3Rpb24gKHF1ZXN0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXN0aW9uQW5zd2VyXG4gICAgICAuc3VibWl0UXVlc3Rpb24ocXVlc3Rpb24pXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChcbiAgICAgICAgICBTdG9yYWdlS2V5cy5RVUVTVElPTl9TVUJNSVNTSU9OLFxuICAgICAgICAgIFF1ZXN0aW9uU3VibWlzc2lvbi5zdWJtaXR0ZWQoKSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9yZXMgdGhlIGdpdmVuIHF1ZXJ5IGludG8gc3RvcmFnZSwgdG8gYmUgdXNlZCBmb3IgdGhlIG5leHQgc2VhcmNoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgcXVlcnkgdG8gc3RvcmVcbiAgICovXG4gIHNldFF1ZXJ5IChxdWVyeSkge1xuICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFUlksIHF1ZXJ5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9yZXMgdGhlIHByb3ZpZGVkIHF1ZXJ5IElELCB0byBiZSB1c2VkIGluIGFuYWx5dGljc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnlJZCBUaGUgcXVlcnkgaWQgdG8gc3RvcmVcbiAgICovXG4gIHNldFF1ZXJ5SWQgKHF1ZXJ5SWQpIHtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBxdWVyeUlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9yZXMgdGhlIGdpdmVuIGZpbHRlciBpbnRvIHN0b3JhZ2UsIHRvIGJlIHVzZWQgZm9yIHRoZSBuZXh0IHNlYXJjaFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIHRoZSBuYW1lc3BhY2UgdG8gdXNlIGZvciB0aGUgc3RvcmFnZSBrZXlcbiAgICogQHBhcmFtIHtGaWx0ZXJ9IGZpbHRlciAgICB0aGUgZmlsdGVyIHRvIHNldFxuICAgKi9cbiAgc2V0RmlsdGVyIChuYW1lc3BhY2UsIGZpbHRlcikge1xuICAgIHRoaXMuc3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke25hbWVzcGFjZX1gLCBmaWx0ZXIpO1xuICB9XG5cbiAgc2V0RmFjZXRGaWx0ZXIgKG5hbWVzcGFjZSwgZmlsdGVyKSB7XG4gICAgdGhpcy5zdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5GQUNFVF9GSUxURVJ9LiR7bmFtZXNwYWNlfWAsIGZpbHRlcik7XG4gIH1cblxuICBlbmFibGVEeW5hbWljRmlsdGVycyAoKSB7XG4gICAgdGhpcy5faXNEeW5hbWljRmlsdGVyc0VuYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgc2V0U2VhcmNoTGltaXQgKGxpbWl0KSB7XG4gICAgdGhpcy5zdG9yYWdlLnNldChTdG9yYWdlS2V5cy5TRUFSQ0hfTElNSVQsIGxpbWl0KTtcbiAgfVxuXG4gIG9uIChldnQsIG1vZHVsZUlkLCBjYikge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2Uub24oZXZ0LCBtb2R1bGVJZCwgY2IpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBDb21wb25lbnRNYW5hZ2VyICovXG5cbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogQ29tcG9uZW50TWFuYWdlciBpcyBhIFNpbmdsZXRvbmUgdGhhdCBjb250YWlucyBib3RoIGFuIGludGVybmFsIHJlZ2lzdHJ5IG9mXG4gKiBlbGlnaWJsZSBjb21wb25lbnRzIHRvIGJlIGNyZWF0ZWQsIGFzIHdlbGwgYXMga2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnRcbiAqIGluc3RhbnRpYXRlZCBhbmQgYWN0aXZlIGNvbXBvbmVudHMuXG4gKlxuICogQUxMIGNvbXBvbmVudHMgc2hvdWxkIGJlIGNvbnN0cnVjdGVkIHVzaW5nIHRoZSB7Q29tcG9uZW50TWFuYWdlcn0gdmlhIGl0cyBgY3JlYXRlYCBtZXRob2QuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudE1hbmFnZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgaWYgKCFDb21wb25lbnRNYW5hZ2VyLnNldEluc3RhbmNlKHRoaXMpKSB7XG4gICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnQgcmVnaXN0cnkgaXMgYW4gaW50ZXJuYWwgbWFwLCB0aGF0IGNvbnRhaW5zXG4gICAgICogYWxsIGF2YWlsYWJsZSBjb21wb25lbnQgQ0xBU1NFUyB1c2VkIGZvciBjcmVhdGlvbiBvciBvdmVycmlkZS5cbiAgICAgKiBFYWNoIGNvbXBvbmVudCBjbGFzcyBoYXMgYSB1bmlxdWUgVFlQRSwgd2hpY2ggaXMgdXNlZCBhcyB0aGUga2V5IGZvciB0aGUgcmVnaXN0cnlcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5ID0ge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYWN0aXZlIGNvbXBvbmVudHMgaXMgYW4gaW50ZXJuYWwgY29udGFpbmVyIHRvIGtlZXAgdHJhY2tcbiAgICAgKiBvZiBhbGwgb2YgdGhlIGNvbXBvbmVudHMgdGhhdCBoYXZlIGJlZW4gY29uc3RydWN0ZWRcbiAgICAgKi9cbiAgICB0aGlzLl9hY3RpdmVDb21wb25lbnRzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY29yZSBsaWJyYXJ5IGRlcGVuZGVuY3lcbiAgICAgKlxuICAgICAqIFRoZSBDb3JlIGNvbnRhaW5zIGJvdGggdGhlIHN0b3JhZ2UgQU5EIHNlcnZpY2VzIHRoYXQgYXJlIG5lZWRlZCBmb3IgcGVyZm9ybWluZyBvcGVyYXRpb25zXG4gICAgICogbGlrZSBzZWFyY2ggYW5kIGF1dG8gY29tcGxldGUuXG4gICAgICpcbiAgICAgKiBUaGUgc3RvcmFnZSBpcyB0aGUgc291cmNlIG9mIHRydXRoIGZvciB0aGUgc3RhdGUgb2YgQUxMIGNvbXBvbmVudHMuXG4gICAgICogV2hlbmV2ZXIgdGhlIHN0b3JhZ2UgaXMgdXBkYXRlZCwgdGhlIHN0YXRlIGdldHMgcHVzaGVkIGRvd24gdG8gdGhlIG5lY2Vzc2FyeSBjb21wb25lbnRzLlxuICAgICAqIEB0eXBlIHtDb3JlfVxuICAgICAqL1xuICAgIHRoaXMuX2NvcmUgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHByaW1hcnkgcmVuZGVyZXIgdG8gdXNlIGZvciBhbGwgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtIYW5kbGViYXJzUmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGFuYWx5dGljcyByZXBvcnRlciBkZXBlbmRlbmN5XG4gICAgICovXG4gICAgdGhpcy5fYW5hbHl0aWNzUmVwb3J0ZXIgPSBudWxsO1xuICB9XG5cbiAgc3RhdGljIHNldEluc3RhbmNlIChpbnN0YW5jZSkge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cblxuICBzZXRSZW5kZXJlciAocmVuZGVyZXIpIHtcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0Q29yZSAoY29yZSkge1xuICAgIHRoaXMuX2NvcmUgPSBjb3JlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0QW5hbHl0aWNzUmVwb3J0ZXIgKHJlcG9ydGVyKSB7XG4gICAgdGhpcy5fYW5hbHl0aWNzUmVwb3J0ZXIgPSByZXBvcnRlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZWdpc3RlcnMgYSBjb21wb25lbnQgdG8gYmUgZWxpZ2libGUgZm9yIGNyZWF0aW9uIGFuZCBvdmVycmlkZS5cbiAgICogQHBhcmFtIHtDb21wb25lbnR9IFRoZSBDb21wb25lbnQgQ2xhc3MgdG8gcmVnaXN0ZXJcbiAgICovXG4gIHJlZ2lzdGVyIChjb21wb25lbnRDbGF6eikge1xuICAgIHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5W2NvbXBvbmVudENsYXp6LnR5cGVdID0gY29tcG9uZW50Q2xheno7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIGlzIHRoZSBlbnRyeSBwb2ludCBmb3IgY29uc3RydWN0aW5nIGFueSBhbmQgYWxsIGNvbXBvbmVudHMuXG4gICAqIEl0IHdpbGwgaW5zdGFudGlhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudCwgYW5kIGJvdGggYXBwbHlcbiAgICogaW5pdGlhbCBzdGF0ZSBmcm9tIHRoZSBzdG9yYWdlIGFuZCBiaW5kIGl0IHRvIHRoZSBzdG9yYWdlIGZvciB1cGRhdGVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50VHlwZSBUaGUgY29tcG9uZW50IHR5cGUgdG8gY3JlYXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIFRoZSBvcHRpb25zIHRvIHBpcGUgdG8gdGhlIGNvbnN0cnVjdGlvbiBvZiB0aGUgY29tcG9uZW50XG4gICAqL1xuICBjcmVhdGUgKGNvbXBvbmVudFR5cGUsIG9wdHMpIHtcbiAgICAvLyBFdmVyeSBjb21wb25lbnQgbmVlZHMgbG9jYWwgYWNjZXNzIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlclxuICAgIC8vIGJlY2F1c2Ugc29tZXRpbWVzIGNvbXBvbmVudHMgaGF2ZSBzdWJjb21wb25lbnRzIHRoYXQgbmVlZCB0byBiZVxuICAgIC8vIGNvbnN0cnVjdGVkIGR1cmluZyBjcmVhdGlvblxuICAgIG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvcmU6IHRoaXMuX2NvcmUsXG4gICAgICByZW5kZXJlcjogdGhpcy5fcmVuZGVyZXIsXG4gICAgICBhbmFseXRpY3NSZXBvcnRlcjogdGhpcy5fYW5hbHl0aWNzUmVwb3J0ZXIsXG4gICAgICBjb21wb25lbnRNYW5hZ2VyOiB0aGlzXG4gICAgfSwgb3B0cyk7XG5cbiAgICBsZXQgY29tcG9uZW50Q2xhc3MgPSB0aGlzLl9jb21wb25lbnRSZWdpc3RyeVtjb21wb25lbnRUeXBlXTtcblxuICAgIGlmIChcbiAgICAgICFjb21wb25lbnRDbGFzcy5hcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQoKSAmJlxuICAgICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5zb21lKGMgPT4gYy5uYW1lID09PSBvcHRzLm5hbWUpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICBgQW5vdGhlciBjb21wb25lbnQgd2l0aCBuYW1lICR7b3B0cy5uYW1lfSBhbHJlYWR5IGV4aXN0c2AsXG4gICAgICAgIGNvbXBvbmVudFR5cGUpO1xuICAgIH1cblxuICAgIC8vIEluc3RhbnRpYXRlIG91ciBuZXcgY29tcG9uZW50IGFuZCBrZWVwIHRyYWNrIG9mIGl0XG4gICAgbGV0IGNvbXBvbmVudCA9XG4gICAgICBuZXcgdGhpcy5fY29tcG9uZW50UmVnaXN0cnlbY29tcG9uZW50VHlwZV0ob3B0cylcbiAgICAgICAgLmluaXQob3B0cyk7XG5cbiAgICB0aGlzLl9hY3RpdmVDb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcblxuICAgIC8vIElmIHRoZXJlIGlzIGEgbG9jYWwgc3RvcmFnZSB0byBwb3dlciBzdGF0ZSwgYXBwbHkgdGhlIHN0YXRlXG4gICAgLy8gZnJvbSB0aGUgc3RvcmFnZSB0byB0aGUgY29tcG9uZW50LCBhbmQgdGhlbiBiaW5kIHRoZSBjb21wb25lbnRcbiAgICAvLyBzdGF0ZSB0byB0aGUgc3RvcmFnZSB2aWEgaXRzIHVwZGF0ZXNcbiAgICBpZiAodGhpcy5fY29yZSAmJiB0aGlzLl9jb3JlLnN0b3JhZ2UgIT09IG51bGwpIHtcbiAgICAgIGlmIChjb21wb25lbnQubW9kdWxlSWQgPT09IHVuZGVmaW5lZCB8fCBjb21wb25lbnQubW9kdWxlSWQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY29yZS5zdG9yYWdlXG4gICAgICAgIC5vbigndXBkYXRlJywgY29tcG9uZW50Lm1vZHVsZUlkLCAoZGF0YSkgPT4ge1xuICAgICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHByb3ZpZGVkIGNvbXBvbmVudCBmcm9tIHRoZSBsaXN0IG9mIGFjdGl2ZSBjb21wb25lbnRzIGFuZCByZW1vdmVcbiAgICogdGhlIGFzc29jaWF0ZWQgc3RvcmFnZSBldmVudCBsaXN0ZW5lclxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50IFRoZSBjb21wb25lbnQgdG8gcmVtb3ZlXG4gICAqL1xuICByZW1vdmUgKGNvbXBvbmVudCkge1xuICAgIHRoaXMuX2NvcmUuc3RvcmFnZS5vZmYoJ3VwZGF0ZScsIGNvbXBvbmVudC5tb2R1bGVJZCk7XG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMuZmluZEluZGV4KGMgPT4gYy5uYW1lID09PSBjb21wb25lbnQubmFtZSk7XG4gICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgZ2V0QWN0aXZlQ29tcG9uZW50ICh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMuZmluZChjID0+IGMuY29uc3RydWN0b3IudHlwZSA9PT0gdHlwZSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlbmRlcmVyICovXG5cbi8qKlxuICogUmVuZGVyZXIgaXMgYW4gYWJzdHJhY3QgY2xhc3MgdGhhdCBhbGwgUmVuZGVyZXJzIHNob3VsZCBleHRlbmQgYW5kIGltcGxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciB7XG4gIC8qKlxuICAgKiByZW5kZXIgaXMgYSBjb3JlIG1ldGhvZCBmb3IgYWxsIHJlbmRlcmVycy5cbiAgICogQWxsIGltcGxlbWVudGF0aW9ucyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBjbGFzc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICovXG4gIHJlbmRlciAodGVtcGxhdGUsIGRhdGEpIHtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICByZWdpc3RlckhlbHBlciAobmFtZSwgY2IpIHtcblxuICB9XG5cbiAgY29tcGlsZSAodGVtcGxhdGUpIHtcblxuICB9XG59XG4iLCIvKiogQG1vZHVsZSBIYW5kbGViYXJzUmVuZGVyZXIgKi9cblxuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG4vKipcbiAqIEhhbmRsZWJhcnNSZW5kZXJlciBpcyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBuYXRpdmF0ZSBoYW5kbGViYXJzIHJlbmRlcmVyLlxuICogQGV4dGVuZHMgUmVuZGVyZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFuZGxlYmFyc1JlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvciAodGVtcGxhdGVzID0ge30sIG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgaGFuZGxlYmFycyBjb21waWxlclxuICAgICAqIEB0eXBlIHtIYW5kbGViYXJzfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faGFuZGxlYmFycyA9IHRlbXBsYXRlcy5faGIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBwcmUtY29tcGlsZWQgaGFuZGxlYmFycyB0ZW1wbGF0ZXNcbiAgICAgKiBAdHlwZSB7SGFuZGxlYmFyc31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHRlbXBsYXRlcyB8fCB7fTtcbiAgfVxuXG4gIGluaXQgKHRlbXBsYXRlcykge1xuICAgIC8vIEFzc2lnbiB0aGUgaGFuZGxlYmFycyBjb21waWxlciBhbmQgdGVtcGxhdGVzIGJhc2VkIG9uXG4gICAgLy8gaW5mb3JtYXRpb24gcHJvdmlkZWQgZnJvbSBleHRlcm5hbCBkZXAgKGluIGRlZmF1bHQgY2FzZSwgaXQgY29tZXMgZnJvbSBleHRlcm5hbCBzZXJ2ZXIgcmVxdWVzdClcbiAgICB0aGlzLl9oYW5kbGViYXJzID0gdGVtcGxhdGVzLl9oYjtcbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXM7XG5cbiAgICAvLyBUT0RPKGJpbGx5KSBPbmNlIHdlIHJlLXdyaXRlIHRlbXBsYXRlcyB1c2luZyB0aGUgbmV3IGhlbHBlcnMgbGlicmFyeVxuICAgIC8vIHdlIHByb2JhYmx5IGRvbid0IG5lZWQgdGhlc2UgY3VzdG9tIGhlbHBlcnMgYW55bW9yZVxuICAgIHRoaXMuX3JlZ2lzdGVyQ3VzdG9tSGVscGVycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlZ2lzdGVySGVscGVyIGlzIGEgcHVibGljIGludGVyZmFjZSBmb3IgZXh0ZXJuYWwgZGVwZW5kZW5jaWVzIHRvXG4gICAqIHJlZ2lzdGVyIHRoZWlyIG93biBjdXN0b20gaGVscGVycyB0byBvdXIgaW50ZXJuYWwgSGFuZGxlYmFycyBDb21waWxlclxuICAgKi9cbiAgcmVnaXN0ZXJIZWxwZXIgKG5hbWUsIGNiKSB7XG4gICAgdGhpcy5faGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihuYW1lLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogY29tcGlsZSBhIGhhbmRsZWJhcnMgdGVtcGxhdGUgc28gdGhhdCBpdCBjYW4gYmUgcmVuZGVyZWQsXG4gICAqIHVzaW5nIHRoZSB7SGFuZGxlYmFyc30gY29tcGlsZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlIFRoZSB0ZW1wbGF0ZSBzdHJpbmcgdG8gY29tcGlsZVxuICAgKi9cbiAgY29tcGlsZSAodGVtcGxhdGUpIHtcbiAgICBpZiAodHlwZW9mIHRlbXBsYXRlICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faGFuZGxlYmFycy5jb21waWxlKHRlbXBsYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZW5kZXIgd2lsbCByZW5kZXIgYSB0ZW1wbGF0ZSB3aXRoIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBQcm92aWRlIGVpdGhlciBhIHRlbXBsYXRlTmFtZSBvciBhIHByZS1jb21waWxlZCB0ZW1wbGF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBwcm92aWRlIHRvIHRoZSB0ZW1wbGF0ZVxuICAgKi9cbiAgcmVuZGVyIChjb25maWcsIGRhdGEpIHtcbiAgICAvLyBJZiBhIGN1c3RvbSB0ZW1wbGF0ZSBpcyBwcm92aWRlZCwgdXNlIGl0LFxuICAgIC8vIG90aGVyd2lzZSBmYWxsIGJhY2sgdG8gdGhlIHRlbXBsYXRlIG5hbWVcbiAgICAvLyBUT0RPKGJpbGx5KSBUaGlzIGludGVyZmFjZSBzaG91bGQgcHJvYmFibHkgYmUgbGVzcyB1Z2x5XG4gICAgaWYgKGNvbmZpZy50ZW1wbGF0ZSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNvbmZpZy50ZW1wbGF0ZShkYXRhKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlc1tjb25maWcudGVtcGxhdGVOYW1lXShkYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgZmluZC9yZW5kZXIgdGVtcGxhdGU6ICcgKyBjb25maWcudGVtcGxhdGVOYW1lLCBlKTtcbiAgICB9XG4gIH1cblxuICBfcmVnaXN0ZXJDdXN0b21IZWxwZXJzICgpIHtcbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdpZmVxJywgZnVuY3Rpb24gKGFyZzEsIGFyZzIsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiAoYXJnMSA9PT0gYXJnMikgPyBvcHRpb25zLmZuKHRoaXMpIDogb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignaWZub3RlcScsIGZ1bmN0aW9uIChhcmcxLCBhcmcyLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gKGFyZzEgIT09IGFyZzIpID8gb3B0aW9ucy5mbih0aGlzKSA6IG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2Zvcm1hdFBob25lTnVtYmVyJywgZnVuY3Rpb24gKHBob25lTnVtYmVyU3RyaW5nKSB7XG4gICAgICB2YXIgY2xlYW5lZCA9ICgnJyArIHBob25lTnVtYmVyU3RyaW5nKS5yZXBsYWNlKC9cXEQvZywgJycpO1xuICAgICAgdmFyIG1hdGNoID0gY2xlYW5lZC5tYXRjaCgvXigxfCk/KFxcZHszfSkoXFxkezN9KShcXGR7NH0pJC8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHZhciBpbnRsQ29kZSA9IChtYXRjaFsxXSA/ICcrMSAnIDogJycpO1xuICAgICAgICByZXR1cm4gW2ludGxDb2RlLCAnKCcsIG1hdGNoWzJdLCAnKSAnLCBtYXRjaFszXSwgJy0nLCBtYXRjaFs0XV0uam9pbignJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2Fzc2lnbicsIGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBvcHRpb25zID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAoIW9wdGlvbnMuZGF0YS5yb290KSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YS5yb290ID0ge307XG4gICAgICB9XG5cbiAgICAgIGxldCB2ID0gJyc7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIHYgPSB2ICsgYXJnc1tpXTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5kYXRhLnJvb3RbbmFtZV0gPSB2O1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignanNvbicsIGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG5hbWUgPT09IHVuZGVmaW5lZFxuICAgICAgICA/ICcnXG4gICAgICAgIDogSlNPTi5zdHJpbmdpZnkobmFtZSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBIYW5kbGViYXJzUmVuZGVyZXIgZnJvbSAnLi9oYW5kbGViYXJzcmVuZGVyZXInO1xuXG4vLyBJbiB0aGUgZnV0dXJlLCB0aGlzIHdpbGwgY29udGFpbiBhbGwgZGlmZmVyZW50IHR5cGVzIG9mIHJlbmRlcmVyc1xuLy8gRS5nLiBNdXN0YWNoZSwgU09ZLCBIYW5kbGVCYXJzLCBSZWFjdCwgZXRjLlxuZXhwb3J0IGNvbnN0IFJlbmRlcmVycyA9IHtcbiAgU09ZOiBSZW5kZXJlcixcbiAgSGFuZGxlYmFyczogSGFuZGxlYmFyc1JlbmRlcmVyXG59O1xuIiwiLyoqIEBtb2R1bGUgRE9NICovXG5cbi8qIGdsb2JhbCBIVE1MRWxlbWVudCwgSFRNTERvY3VtZW50LCBXaW5kb3csIEV2ZW50ICovXG5cbmxldCBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcblxuLyoqXG4gKiBTdGF0aWMgaW50ZXJmYWNlIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBET00gQVBJLlxuICogQG5hbWVzcGFjZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBET00ge1xuICBzdGF0aWMgc2V0dXAgKGQsIHApIHtcbiAgICBkb2N1bWVudCA9IGQ7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIGEgSFRNTEVsZW1lbnQgZnJvbSBhbmQgSFRNTCBzdHJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IGh0bWwgVGhlIEhUTUwgdG8gcGFyc2UgdG8gYSBET00gbm9kZS5cbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlIChodG1sKSB7XG4gICAgaWYgKCdjcmVhdGVSYW5nZScgaW4gZG9jdW1lbnQpIHtcbiAgICAgIC8vIHByZWZlciB0aGlzIGltcGxlbWVudGF0aW9uIGFzIGl0IGhhcyB3aWRlciBicm93c2VyIHN1cHBvcnRcbiAgICAgIC8vIGFuZCBpdCdzIGJldHRlciBwZXJmb3JtaW5nLlxuICAgICAgLy8gc2VlIGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2NvbnZlcnQtaHRtbC1zdGluZ3MtZG9tLW5vZGVzXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChodG1sKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnKTtcbiAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgLy8gZmFsbGJhY2sgdG8gdGhpcyBiZWNhdXNlIG9mIGEgYnVnIGluIGpzZG9tIHRoYXQgY2F1c2VzIHRlc3RzIHRvIGZhaWxcbiAgICAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qc2RvbS9qc2RvbS9pc3N1ZXMvMzk5XG4gICAgcmV0dXJuIG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoaHRtbCwgJ3RleHQvaHRtbCcpLmJvZHk7XG4gIH1cblxuICAvKipcbiAgICogcXVlcnkgdGhlIERPTSBmb3IgYSBnaXZlbiBjc3Mgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50IE9wdGlvbmFsIGNvbnRleHQgdG8gdXNlIGZvciBhIHNlYXJjaC4gRGVmYXVsdHMgdG8gZG9jdW1lbnQgaWYgbm90IHByb3ZpZGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgdGhlIENTUyBzZWxlY3RvciB0byBxdWVyeSBmb3JcbiAgICpcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSB0aGUgRklSU1Qgbm9kZSBpdCBmaW5kcywgaWYgYW55XG4gICAqL1xuICBzdGF0aWMgcXVlcnkgKHBhcmVudCwgc2VsZWN0b3IpIHtcbiAgICAvLyBGYWNhZGUsIHNoaWZ0aW5nIHRoZSBzZWxlY3RvciB0byB0aGUgcGFyZW50IGFyZ3VtZW50IGlmIG9ubHkgb25lXG4gICAgLy8gYXJndW1lbnQgaXMgcHJvdmlkZWRcbiAgICBpZiAoc2VsZWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2VsZWN0b3IgPSBwYXJlbnQ7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIFdpbmRvdyB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxEb2N1bWVudCkge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogcXVlcnkgdGhlIERPTSBmb3IgYSBnaXZlbiBjc3Mgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50IE9wdGlvbmFsIGNvbnRleHQgdG8gdXNlIGZvciBhIHNlYXJjaC4gRGVmYXVsdHMgdG8gZG9jdW1lbnQgaWYgbm90IHByb3ZpZGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgdGhlIENTUyBzZWxlY3RvciB0byBxdWVyeSBmb3JcbiAgICpcbiAgICogQHJldHVybnMge0FycmF5fSB0aGUgRklSU1Qgbm9kZSBpdCBmaW5kcywgaWYgYW55XG4gICAqL1xuICBzdGF0aWMgcXVlcnlBbGwgKHBhcmVudCwgc2VsZWN0b3IpIHtcbiAgICAvLyBGYWNhZGUsIHNoaWZ0aW5nIHRoZSBzZWxlY3RvciB0byB0aGUgcGFyZW50IGFyZ3VtZW50IGlmIG9ubHkgb25lXG4gICAgLy8gYXJndW1lbnQgaXMgcHJvdmlkZWRcbiAgICBpZiAoc2VsZWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2VsZWN0b3IgPSBwYXJlbnQ7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgY2xpZW50IGNvZGUgaXMgdXNpbmcgYSBwb2ludGVyIHRvIGEgZG9tIG5vZGUgYW5kIGl0J3MgbnVsbCwgZS5nLiB0aGlzLl9jb250YWluZXJcbiAgICBpZiAocGFyZW50ID09IG51bGwpIHtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTERvY3VtZW50IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgV2luZG93KSB7XG4gICAgICByZXR1cm4gW3NlbGVjdG9yXTtcbiAgICB9XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuICB9XG5cbiAgc3RhdGljIG9uUmVhZHkgKGNiKSB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRlZCcgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJykge1xuICAgICAgY2IoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBET00ub24oZG9jdW1lbnQsICdET01Db250ZW50TG9hZGVkJywgY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZUVsZSB3aWxsIGNyZWF0ZSBhIHtIVE1MRWxlbWVudH0gYW5kIGFwcGx5IHRoZSBwcm9wZXJ0aWVzIGF0dHJpYnV0ZXMgdGhyb3VnaCBhbiBvYmplY3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbCBUaGUgZWxlbWVudCBgdGFnYCBuYW1lIHRvIGNvbnN0cnVjdFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c19kYXRhIE9wdGlvbmFsIGF0dHJpYnV0ZXMgdG8gYXBwbHkgdG8gdGhlIG5ldyBIVE1MRWxlbWVudFxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUVsIChlbCwgb3B0c19kYXRhID0ge30pIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwpO1xuICAgIGxldCBwcm9wcyA9IE9iamVjdC5rZXlzKG9wdHNfZGF0YSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocHJvcHNbaV0gPT09ICdjbGFzcycpIHtcbiAgICAgICAgRE9NLmFkZENsYXNzKG5vZGUsIG9wdHNfZGF0YVtwcm9wc1tpXV0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbm9kZVtwcm9wc1tpXV0gPSBvcHRzX2RhdGFbcHJvcHNbaV1dO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIGFwcGVuZCAocGFyZW50LCBub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbm9kZSA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcGFyZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgcGFyZW50ID0gRE9NLnF1ZXJ5KHBhcmVudCk7XG4gICAgfVxuXG4gICAgLy8gU3VwcG9ydCBIVE1MIGluamVjdGlvbiBhcyB3ZWxsIGFzIEhUTUxFbGVtZW50IGFwcGVuZHNcbiAgICBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlckJlZ2luJywgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYWRkQ2xhc3MgKG5vZGUsIGNsYXNzTmFtZSkge1xuICAgIGxldCBjbGFzc2VzID0gY2xhc3NOYW1lLnNwbGl0KCcsJyk7XG4gICAgbGV0IGxlbiA9IGNsYXNzZXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzZXNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBlbXB0eSAocGFyZW50KSB7XG4gICAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgc3RhdGljIGNzcyAoc2VsZWN0b3IsIHN0eWxlcykge1xuICAgIGxldCBub2RlID0gRE9NLnF1ZXJ5KHNlbGVjdG9yKTtcblxuICAgIGZvciAobGV0IHByb3AgaW4gc3R5bGVzKSB7XG4gICAgICBub2RlLnN0eWxlW3Byb3BdID0gc3R5bGVzW3Byb3BdO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhdHRyIChzZWxlY3RvciwgYXR0ciwgdmFsKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsKTtcbiAgfVxuXG4gIHN0YXRpYyB0cmlnZ2VyIChzZWxlY3RvciwgZXZlbnQsIHNldHRpbmdzKSB7XG4gICAgbGV0IGUgPSBuZXcgRXZlbnQoZXZlbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgJ2J1YmJsZXMnOiB0cnVlLFxuICAgICAgJ2NhbmNlbGFibGUnOiB0cnVlXG4gICAgfSwgc2V0dGluZ3MgfHwge30pKTtcblxuICAgIERPTS5xdWVyeShzZWxlY3RvcikuZGlzcGF0Y2hFdmVudChlKTtcbiAgfVxuXG4gIHN0YXRpYyBvbiAoc2VsZWN0b3IsIGV2dCwgaGFuZGxlcikge1xuICAgIERPTS5xdWVyeShzZWxlY3RvcikuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIG9mZiAoc2VsZWN0b3IsIGV2dCwgaGFuZGxlcikge1xuICAgIERPTS5xdWVyeShzZWxlY3RvcikucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGRlbGVnYXRlIChjdHh0LCBzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgbGV0IGVsID0gRE9NLnF1ZXJ5KGN0eHQpO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICB3aGlsZSAoIXRhcmdldC5pc0VxdWFsTm9kZShlbCkpIHtcbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIGhhbmRsZXIoZXZlbnQsIHRhcmdldCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFN0YXRlICovXG5cbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vLi4vY29yZS9ldmVudGVtaXR0ZXIvZXZlbnRlbWl0dGVyJztcblxuLyoqXG4gKiBTdGF0ZSBjb250YWlucyB0aGUgZGF0YSBmb3IgdGhlIGNvbXBvbmVudFxuICogYW5kIGV4cG9zZXMgYW4ge0V2ZW50RW1pdHRlcn0gaW50ZXJmYWNlIHNvIHRoYXQgZXh0ZXJuYWxcbiAqIGRlcGVuZGVuY2llcyBjYW4gbGlzdGVuL2hvb2sgc3Vic2NyaWJlIHRvIG1lc3NhZ2VzL3VwZGF0ZXMuXG4gKiBAZXh0ZW5kcyBFdmVudEVtaXR0ZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoZGF0YSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N0YXRlID0gZGF0YSB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICogTk9URShiaWxseSk6IERvZXMgbm90IGZpcmUgYW4gdXBkYXRlIG1lc3NhZ2VcbiAgICovXG4gIGluaXQgKHByb3AsIG9wdFZhbCkge1xuICAgIHRoaXMuX3NldChwcm9wLCBvcHRWYWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldHRlciBmb3IgdGhlIHN0YXRlXG4gICAqIEBwYXJhbSBwcm9wIHtzdHJpbmd8T2JqZWN0fSBUaGUgcHJvcGVydHkgdG8gc2V0XG4gICAqIEBwYXJhbSBvcHRWYWwgT3B0aW9uYWwsIGlmIHByb3AgaXMgYSB7c3RyaW5nfSwgaXQgd2lsbCBhc3NpZ24gdGhlIHZhbHVlIHRvIHRoYXQgcHJvcGVydHlcbiAgICovXG4gIHNldCAocHJvcCwgb3B0VmFsKSB7XG4gICAgdGhpcy5fc2V0KHByb3AsIG9wdFZhbCk7XG4gICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXR0ZXIgZm9yIHRoZSBzdGF0ZSBlbmFibGVzIHlvdSB0byB1cGRhdGUgYSBzaW5nbGUgcHJvcGVydHksIG9yIGNvbXBsZXRlIHN0YXRlXG4gICAqIGRlcGVuZGluZyBvbiB0aGUgYXJndW1lbnRzIHByb3ZpZGVkLlxuICAgKiBAcGFyYW0gcHJvcCB7c3RyaW5nfE9iamVjdH0gVGhlIHByb3BlcnR5IHRvIHNldFxuICAgKiBAcGFyYW0gb3B0VmFsIElmIHByb3AgaXMgYSB7c3RyaW5nfSwgcHJvdmlkZSBpdHMgdmFsdWVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZXQgKHByb3AsIG9wdFZhbCkge1xuICAgIGlmIChvcHRWYWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fc3RhdGUgPSBwcm9wO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zdGF0ZVtwcm9wXSA9IG9wdFZhbDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUgKGRhdGEpIHtcbiAgICB0aGlzLl9zdGF0ZSA9IGRhdGE7XG4gICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBhIHByb3BlcnRpZXMgdmFsdWUgZnJvbSB0aGUgc3RhdGVcbiAgICogSWYgbm8gcHJvcGVydHkgcHJvdmlkZWQsIHJldHVybiB0aGUgZnVsbCBzdGF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0UHJvcCBvcHRpb25hbCBwcm9wZXJ0eSB0byByZXRyaWV2ZVxuICAgKi9cbiAgZ2V0IChvcHRQcm9wKSB7XG4gICAgaWYgKG9wdFByb3AgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc3RhdGVbb3B0UHJvcF07XG4gIH1cblxuICBoYXMgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVbcHJvcF0gIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGFzSlNPTiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICB9XG59XG4iLCIvKipcbiAqIE1vZGVsIGZvciB0aGUgYW5hbHl0aWNzIGV2ZW50IHR5cGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5hbHl0aWNzRXZlbnQge1xuICBjb25zdHJ1Y3RvciAodHlwZSwgbGFiZWwpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiBldmVudCB0byByZXBvcnRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZXZlbnRUeXBlID0gdHlwZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgLyoqXG4gICAgICogQW4gb3B0aW9uYWwgbGFiZWwgdG8gYmUgcHJvdmlkZWQgZm9yIHRoZSBldmVudFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgaWYgKGxhYmVsKSB7XG4gICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIHByb3ZpZGVkIG9wdGlvbnMgdG8gdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIEFkZGl0aW9uYWwgb3B0aW9ucyBmb3IgdGhlIGV2ZW50XG4gICAqL1xuICBhZGRPcHRpb25zIChvcHRpb25zKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGV2ZW50IGluIHRoZSBhcGkgZm9ybWF0LCB0eXBpY2FsbHkgZm9yIHJlcG9ydGluZyB0byB0aGUgYXBpXG4gICAqL1xuICB0b0FwaUV2ZW50ICgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcyk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEFuYWx5dGljc1JlcG9ydGVyICovXG5cbmltcG9ydCBBbmFseXRpY3NFdmVudCBmcm9tICcuL2FuYWx5dGljc2V2ZW50JztcbmltcG9ydCB7IEFuc3dlcnNBbmFseXRpY3NFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IHsgQU5BTFlUSUNTX0JBU0VfVVJMIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBIdHRwUmVxdWVzdGVyIGZyb20gJy4uL2h0dHAvaHR0cHJlcXVlc3Rlcic7XG5cbi8qKlxuICogQ2xhc3MgZm9yIHJlcG9ydGluZyBhbmFseXRpY3MgZXZlbnRzIHRvIHRoZSBzZXJ2ZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5hbHl0aWNzUmVwb3J0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29yZSwgYW5zd2Vyc0tleSwgYnVzaW5lc3NJZCwgZ2xvYmFsT3B0aW9ucyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIGludGVybmFsIGJ1c2luZXNzIGlkZW50aWZpZXIgdXNlZCBmb3IgcmVwb3J0aW5nXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9idXNpbmVzc0lkID0gYnVzaW5lc3NJZDtcblxuICAgIC8qKlxuICAgICAqIE9wdGlvbnMgdG8gaW5jbHVkZSB3aXRoIGV2ZXJ5IGFuYWx5dGljIGV2ZW50IHJlcG9ydGVkIHRvIHRoZSBzZXJ2ZXJcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZ2xvYmFsT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGdsb2JhbE9wdGlvbnMsIHsgYW5zd2Vyc0tleSB9KTtcblxuICAgIC8vIGxpc3RlbiB0byBxdWVyeSBpZCB1cGRhdGVzXG4gICAgY29yZS5zdG9yYWdlLm9uKCd1cGRhdGUnLCBTdG9yYWdlS2V5cy5RVUVSWV9JRCwgaWQgPT4gdGhpcy5zZXRRdWVyeUlkKGlkKSk7XG4gIH1cblxuICBzZXRRdWVyeUlkIChxdWVyeUlkKSB7XG4gICAgdGhpcy5fZ2xvYmFsT3B0aW9ucy5xdWVyeUlkID0gcXVlcnlJZDtcbiAgfVxuXG4gIHJlcG9ydCAoZXZlbnQpIHtcbiAgICBpZiAoIShldmVudCBpbnN0YW5jZW9mIEFuYWx5dGljc0V2ZW50KSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNBbmFseXRpY3NFcnJvcignVHJpZWQgdG8gc2VuZCBpbnZhbGlkIGFuYWx5dGljcyBldmVudCcsIGV2ZW50KTtcbiAgICB9XG5cbiAgICBldmVudC5hZGRPcHRpb25zKHRoaXMuX2dsb2JhbE9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIG5ldyBIdHRwUmVxdWVzdGVyKCkuYmVhY29uKFxuICAgICAgYCR7QU5BTFlUSUNTX0JBU0VfVVJMfS9yZWFsdGltZWFuYWx5dGljcy9kYXRhL2Fuc3dlcnMvJHt0aGlzLl9idXNpbmVzc0lkfWAsXG4gICAgICB7XG4gICAgICAgICdkYXRhJzogZXZlbnQudG9BcGlFdmVudCgpXG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2hBcGkgfSBmcm9tICcuL3NlYXJjaC9zZWFyY2hhcGknO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBbmFseXRpY3NSZXBvcnRlciB9IGZyb20gJy4vYW5hbHl0aWNzL2FuYWx5dGljc3JlcG9ydGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kdWxlRGF0YSB9IGZyb20gJy4vc3RvcmFnZS9tb2R1bGVkYXRhJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZS9zdG9yYWdlJztcbiIsIi8qKiBAbW9kdWxlIENvbXBvbmVudCAqL1xuXG5pbXBvcnQgeyBSZW5kZXJlcnMgfSBmcm9tICcuLi9yZW5kZXJpbmcvY29uc3QnO1xuXG5pbXBvcnQgRE9NIGZyb20gJy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0YXRlIGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgQW5hbHl0aWNzUmVwb3J0ZXIgfSBmcm9tICcuLi8uLi9jb3JlJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcblxuLyoqXG4gKiBDb21wb25lbnQgaXMgYW4gYWJzdHJhY3Rpb24gdGhhdCBlbmNhcHN1bGF0ZXMgc3RhdGUsIGJlaGF2aW9yLFxuICogYW5kIHZpZXcgZm9yIGEgcGFydGljdWxhciBjaHVuayBvZiBmdW5jdGlvbmFsaXR5IG9uIHRoZSBwYWdlLlxuICpcbiAqIFRoZSBBUEkgZXhwb3NlcyBldmVudCBsaWZlIGN5Y2xlIGhvb2tzIGZvciB3aGVuIHRoaW5ncyBhcmUgcmVuZGVyZWQsXG4gKiBtb3VudGVkLCBjcmVhdGVkLCBldGMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yICh0eXBlLCBjb25maWcgPSB7fSkge1xuICAgIC8vIFNpbXBsZSBmYWNhZGUgcGF0dGVybiB0byBlbmFibGUgdGhlIHVzZXIgdG8gcGFzcyBhIHNpbmdsZSBvYmplY3RcbiAgICAvLyBjb250YWluaW5nIGFsbCB0aGUgbmVjZXNzYXJ5IG9wdGlvbnMgYW5kIHNldHRpbmdzXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uZmlnID0gdHlwZTtcbiAgICAgIHR5cGUgPSBjb25maWcudHlwZTtcbiAgICB9XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFVuaXF1ZSBuYW1lIG9mIHRoaXMgY29tcG9uZW50IGluc3RhbmNlXG4gICAgICogVXNlZCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIG90aGVyIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgdHlwZVxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5uYW1lID0gY29uZmlnLm5hbWUgfHwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gICAgLyoqXG4gICAgICogQ2FjaGUgdGhlIG9wdGlvbnMgc28gdGhhdCB3ZSBjYW4gcHJvcG9nYXRlIHByb3Blcmx5IHRvIGNoaWxkIGNvbXBvbmVudHNcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcblxuICAgIC8qKlxuICAgICAqIEFuIGlkZW50aWZpZXIgdXNlZCB0byBjbGFzc2lmeSB0aGUgdHlwZSBvZiBjb21wb25lbnQuXG4gICAgICogVGhlIGNvbXBvbmVudCBtYW5hZ2VyIHVzZXMgdGhpcyBpbmZvcm1hdGlvbiBpbiBvcmRlciB0byBwZXJzaXN0IGFuZCBvcmdhbml6ZSBjb21wb25lbnRzXG4gICAgICogQHR5cGUge3N0cmluZ3xDb21wb25lbnRUeXBlfVxuICAgICAqL1xuICAgIHRoaXMuX3R5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgcGFyZW50IGNvbXBvbmVudCwgaWYgZXhpc3RzXG4gICAgICogQHR5cGUge0NvbXBvbmVudH1cbiAgICAgKi9cbiAgICB0aGlzLl9wYXJlbnQgPSBjb25maWcucGFyZW50IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGNvbnRhaW5lciBmb3IgYWxsIHRoZSBjaGlsZCBjb21wb25lbnRzXG4gICAgICogQHR5cGUge0NvbXBvbmVudFtdfVxuICAgICAqL1xuICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3RhdGUgKGRhdGEpIG9mIHRoZSBjb21wb25lbnQgdG8gYmUgcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlIGZvciByZW5kZXJpbmdcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX3N0YXRlID0gbmV3IFN0YXRlKGNvbmZpZy5zdGF0ZSk7XG5cbiAgICAvKipcbiAgICAgKiBUT0RPKGJpbGx5KSBUaGlzIHNob3VsZCBiZSAnc2VydmljZXMnXG4gICAgICovXG4gICAgdGhpcy5jb3JlID0gY29uZmlnLmNvcmUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlciwgd2hpY2ggY29udGFpbnMgYWxsIG9mIHRoZSBjb21wb25lbnQgY2xhc3Nlc1xuICAgICAqIGVsaWdpYmxlIHRvIGJlIGNyZWF0ZWRcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50TWFuYWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIgPSBjb25maWcuY29tcG9uZW50TWFuYWdlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGFuYWx5dGljcyByZXBvcnRlciwgdXNlZCB0byByZXBvcnQgZXZlbnRzIGZvciB0aGlzIGNvbXBvbmVudFxuICAgICAqIEB0eXBlIHtBbmFseXRpY3NSZXBvcnRlcn1cbiAgICAgKi9cbiAgICB0aGlzLmFuYWx5dGljc1JlcG9ydGVyID0gY29uZmlnLmFuYWx5dGljc1JlcG9ydGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBPcHRpb25zIHRvIGluY2x1ZGUgd2l0aCBhbGwgYW5hbHl0aWMgZXZlbnRzIHNlbnQgYnkgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYW5hbHl0aWNzT3B0aW9ucyA9IGNvbmZpZy5hbmFseXRpY3NPcHRpb25zIHx8IHt9O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIERPTSBub2RlIHRoYXQgdGhlIGNvbXBvbmVudCB3aWxsIGJlIGFwcGVuZGVkIHRvIHdoZW4gbW91bnRlZC9yZW5kZXJlZC5cbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gbnVsbCkge1xuICAgICAgaWYgKHR5cGVvZiBjb25maWcuY29udGFpbmVyICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgYGNvbnRhaW5lcmAgb3B0aW9uIGZvciBjb21wb25lbnQgY29uZmlndXJhdGlvbi4gTXVzdCBiZSBvZiB0eXBlIGBzdHJpbmdgLicpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29udGFpbmVyID0gRE9NLnF1ZXJ5KGNvbmZpZy5jb250YWluZXIpIHx8IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IERPTS5xdWVyeSh0aGlzLl9wYXJlbnQuX2NvbnRhaW5lciwgY29uZmlnLmNvbnRhaW5lcik7XG5cbiAgICAgIC8vIElmIHdlIGhhdmUgYSBwYXJlbnQsIGFuZCB0aGUgY29udGFpbmVyIGlzIG1pc3NpbmcgZnJvbSB0aGUgRE9NLFxuICAgICAgLy8gd2UgY29uc3RydWN0IHRoZSBjb250YWluZXIgYW5kIGFwcGVuZCBpdCB0byB0aGUgcGFyZW50XG4gICAgICBpZiAodGhpcy5fY29udGFpbmVyID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IERPTS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiBjb25maWcuY29udGFpbmVyLnN1YnN0cmluZygxLCBjb25maWcuY29udGFpbmVyLmxlbmd0aClcbiAgICAgICAgfSk7XG4gICAgICAgIERPTS5hcHBlbmQodGhpcy5fcGFyZW50Ll9jb250YWluZXIsIHRoaXMuX2NvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBjb250YWluZXIgRE9NIG5vZGU6ICcgKyBjb25maWcuY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIGN1c3RvbSBjbGFzcyB0byBiZSBhcHBsaWVkIHRvIHt0aGlzLl9jb250YWluZXJ9IG5vZGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2NsYXNzTmFtZSA9IGNvbmZpZy5jbGFzcyB8fCAnY29tcG9uZW50JztcblxuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIHJlbmRlciBmdW5jdGlvbiB0byBiZSB1c2VkIGluc3RlYWQgb2YgdXNpbmcgdGhlIGRlZmF1bHQgcmVuZGVyZXJcbiAgICAgKiBAdHlwZSB7UmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyID0gY29uZmlnLnJlbmRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGRlZmF1bHQge1JlbmRlcmVyfSB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgcmVuZGVyaW5nIHRoZSB0ZW1wbGF0ZVxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXJlciA9IGNvbmZpZy5yZW5kZXJlciB8fCBSZW5kZXJlcnMuSGFuZGxlYmFycztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSBzdHJpbmcgdG8gdXNlIGZvciByZW5kZXJpbmcgdGhlIGNvbXBvbmVudFxuICAgICAqIElmIHRoaXMgaXMgbGVmdCBlbXB0eSwgd2UgbG9va3VwIHRoZSB0ZW1wbGF0ZSB0aGUgYmFzZSB0ZW1wbGF0ZXMgdXNpbmcgdGhlIHRlbXBsYXRlTmFtZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGUgPSBjb25maWcudGVtcGxhdGUgPyB0aGlzLl9yZW5kZXJlci5jb21waWxlKGNvbmZpZy50ZW1wbGF0ZSkgOiBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlTmFtZSB0byB1c2UgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50LlxuICAgICAqIFRoaXMgaXMgb25seSB1c2VkIGlmIF90ZW1wbGF0ZSBpcyBlbXB0eS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IGNvbmZpZy50ZW1wbGF0ZU5hbWUgfHwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0VGVtcGxhdGVOYW1lKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCBzdGF0ZSBpbmRpY2F0aW5nIHdoZXRoZXIgb3Igbm90IHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbW91bnRlZCB0byB0aGUgRE9NXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2ssIHRoYXRzIHVzZWQgdG8gdHJhbnNmb3JtIHRoZSBpbnRlcm5hbCBkYXRhXG4gICAgICogbW9kZWxzIG9mIHRoZSBjb21wb25lbnRzLCBiZWZvcmUgaXQgZ2V0cyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQgc3RhdGUuXG4gICAgICogQnkgZGVmYXVsdCwgbm8gdHJhbnNmb3JtYXRpb24gaGFwcGVucy5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy50cmFuc2Zvcm1EYXRhID0gY29uZmlnLnRyYW5zZm9ybURhdGEgfHwgdGhpcy50cmFuc2Zvcm1EYXRhIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIGEgY29tcG9uZW50IGlzIGNyZWF0ZWQuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMub25DcmVhdGUgPSBjb25maWcub25DcmVhdGUgfHwgdGhpcy5vbkNyZWF0ZSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBNb3VudGVkLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLm9uTW91bnQgPSBjb25maWcub25Nb3VudCB8fCB0aGlzLm9uTW91bnQgfHwgZnVuY3Rpb24gKCkgeyB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIGEgY29tcG9uZW50cyBzdGF0ZSBpcyB1cGRhdGVkLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLm9uVXBkYXRlID0gY29uZmlnLm9uVXBkYXRlIHx8IHRoaXMub25VcGRhdGUgfHwgZnVuY3Rpb24gKCkgeyB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdkZWZhdWx0JztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdDb21wb25lbnQnO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaW5pdCAob3B0cykge1xuICAgIHRoaXMuc2V0U3RhdGUob3B0cy5kYXRhIHx8IG9wdHMuc3RhdGUgfHwge30pO1xuICAgIHRoaXMub25DcmVhdGUoKTtcbiAgICB0aGlzLl9zdGF0ZS5vbigndXBkYXRlJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgICAgdGhpcy5tb3VudCgpO1xuICAgIH0pO1xuXG4gICAgRE9NLmFkZENsYXNzKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB7IF9jb25maWc6IHRoaXMuX2NvbmZpZyB9LCBkYXRhKTtcbiAgICB0aGlzLl9zdGF0ZS5zZXQobmV3U3RhdGUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0U3RhdGUgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuZ2V0KHByb3ApO1xuICB9XG5cbiAgaGFzU3RhdGUgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuaGFzKHByb3ApO1xuICB9XG5cbiAgdHJhbnNmb3JtRGF0YSAoZGF0YSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYWRkQ2hpbGQgKGRhdGEsIHR5cGUsIG9wdHMpIHtcbiAgICBsZXQgY2hpbGRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKFxuICAgICAgdHlwZSxcbiAgICAgIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSwgb3B0cyB8fCB7fSwge1xuICAgICAgICBfcGFyZW50T3B0czogdGhpcy5fY29uZmlnXG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGNoaWxkQ29tcG9uZW50KTtcbiAgICByZXR1cm4gY2hpbGRDb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogVW5tb3VudCBhbmQgcmVtb3ZlIHRoaXMgY29tcG9uZW50IGFuZCBpdHMgY2hpbGRyZW4gZnJvbSB0aGUgbGlzdFxuICAgKiBvZiBhY3RpdmUgY29tcG9uZW50c1xuICAgKi9cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLl9jaGlsZHJlbi5mb3JFYWNoKGMgPT4gYy5yZW1vdmUoKSk7XG4gICAgdGhpcy51bk1vdW50KCk7XG4gICAgdGhpcy5jb21wb25lbnRNYW5hZ2VyLnJlbW92ZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHJlbmRlciBtZXRob2QgdG8gYmUgdXNlZCBmb3IgcmVuZGVyaW5nIHRoZSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVuZGVyXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHNldFJlbmRlciAocmVuZGVyKSB7XG4gICAgdGhpcy5fcmVuZGVyID0gcmVuZGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgcmVuZGVyZXIgZm9yIHRoZSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtSZW5kZXJlclR5cGV9IHJlbmRlcmVyXG4gICAqL1xuICBzZXRSZW5kZXJlciAocmVuZGVyZXIpIHtcbiAgICB0aGlzLl9yZW5kZXJlciA9IFJlbmRlcmVyc1tyZW5kZXJlcl07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdGVtcGxhdGUgZm9yIHRoZSBjb21wb25lbnQgdG8gdXNlIHdoZW4gcmVuZGVyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICAgKi9cbiAgc2V0VGVtcGxhdGUgKHRlbXBsYXRlKSB7XG4gICAgdGhpcy5fdGVtcGxhdGUgPSB0aGlzLl9yZW5kZXJlci5jb21waWxlKHRlbXBsYXRlKTtcbiAgfVxuXG4gIHVuTW91bnQgKCkge1xuICAgIERPTS5lbXB0eSh0aGlzLl9jb250YWluZXIpO1xuICB9XG5cbiAgbW91bnQgKCkge1xuICAgIGlmICghdGhpcy5fY29udGFpbmVyKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLnVuTW91bnQoKTtcbiAgICBpZiAodGhpcy5iZWZvcmVNb3VudCgpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgRE9NLmFwcGVuZCh0aGlzLl9jb250YWluZXIsIHRoaXMucmVuZGVyKHRoaXMuX3N0YXRlLmFzSlNPTigpKSk7XG5cbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIHRoaXMuX29uTW91bnQoKTtcblxuICAgIC8vIEF0dGFjaCBhbmFseXRpY3MgaG9va3MgYXMgbmVjZXNzYXJ5XG4gICAgaWYgKHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIpIHtcbiAgICAgIGxldCBkb21Ib29rcyA9IERPTS5xdWVyeUFsbCh0aGlzLl9jb250YWluZXIsICdbZGF0YS1ldmVudHR5cGVdOm5vdChbZGF0YS1pcy1hbmFseXRpY3MtYXR0YWNoZWRdKScpO1xuICAgICAgZG9tSG9va3MuZm9yRWFjaCh0aGlzLl9jcmVhdGVBbmFseXRpY3NIb29rLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX29uTW91bnQgKCkge1xuICAgIHRoaXMub25Nb3VudCh0aGlzKTtcbiAgICBpZiAodGhpcy5fY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBjaGlsZC5fb25Nb3VudCgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbmRlciB0aGUgdGVtcGxhdGUgdXNpbmcgdGhlIHtSZW5kZXJlcn0gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBhbmQgdGVtcGxhdGUgb2YgdGhlIGNvbXBvbmVudFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgcmVuZGVyIChkYXRhID0gdGhpcy5fc3RhdGUuZ2V0KCkpIHtcbiAgICB0aGlzLmJlZm9yZVJlbmRlcigpO1xuICAgIGRhdGEgPSB0aGlzLnRyYW5zZm9ybURhdGEoZGF0YSk7XG5cbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIC8vIFVzZSBlaXRoZXIgdGhlIGN1c3RvbSByZW5kZXIgZnVuY3Rpb24gb3IgdGhlIGludGVybmFsIHJlbmRlcmVyXG4gICAgLy8gZGVwZW5kYW50IG9uIHRoZSBjb21wb25lbnQgY29uZmlndXJhdGlvblxuICAgIGlmICh0eXBlb2YgdGhpcy5fcmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBodG1sID0gdGhpcy5fcmVuZGVyKGRhdGEpO1xuICAgICAgaWYgKHR5cGVvZiBodG1sICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlbmRlciBtZXRob2QgbXVzdCByZXR1cm4gSFRNTCBhcyB0eXBlIHtzdHJpbmd9Jyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlbmRlciB0aGUgZXhpc3RpbmcgdGVtcGxhdGVzIGFzIGEgc3RyaW5nXG4gICAgICBodG1sID0gdGhpcy5fcmVuZGVyZXIucmVuZGVyKHtcbiAgICAgICAgdGVtcGxhdGU6IHRoaXMuX3RlbXBsYXRlLFxuICAgICAgICB0ZW1wbGF0ZU5hbWU6IHRoaXMuX3RlbXBsYXRlTmFtZVxuICAgICAgfSwgZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gV2UgY3JlYXRlIGFuIEhUTUwgRG9jdW1lbnQgZnJhZ21lbnQgd2l0aCB0aGUgcmVuZGVyZWQgc3RyaW5nXG4gICAgLy8gU28gdGhhdCB3ZSBjYW4gcXVlcnkgaXQgZm9yIHByb2Nlc3Npbmcgb2Ygc3ViIGNvbXBvbmVudHNcbiAgICBsZXQgZWwgPSBET00uY3JlYXRlKGh0bWwpO1xuXG4gICAgLy8gUHJvY2VzcyB0aGUgRE9NIHRvIGRldGVybWluZSBpZiB3ZSBzaG91bGQgY3JlYXRlXG4gICAgLy8gaW4tbWVtb3J5IHN1Yi1jb21wb25lbnRzIGZvciByZW5kZXJpbmdcbiAgICBsZXQgZG9tQ29tcG9uZW50cyA9IERPTS5xdWVyeUFsbChlbCwgJ1tkYXRhLWNvbXBvbmVudF0nKTtcbiAgICBkb21Db21wb25lbnRzLmZvckVhY2goYyA9PiB0aGlzLl9jcmVhdGVTdWJjb21wb25lbnQoYywgZGF0YSkpO1xuXG4gICAgdGhpcy5hZnRlclJlbmRlcigpO1xuICAgIHJldHVybiBlbC5pbm5lckhUTUw7XG4gIH1cblxuICBfY3JlYXRlU3ViY29tcG9uZW50IChkb21Db21wb25lbnQsIGRhdGEpIHtcbiAgICBsZXQgZGF0YXNldCA9IGRvbUNvbXBvbmVudC5kYXRhc2V0O1xuICAgIGxldCB0eXBlID0gZGF0YXNldC5jb21wb25lbnQ7XG4gICAgbGV0IHByb3AgPSBkYXRhc2V0LnByb3A7XG4gICAgbGV0IG9wdHMgPSBkYXRhc2V0Lm9wdHMgPyBKU09OLnBhcnNlKGRhdGFzZXQub3B0cykgOiB7fTtcblxuICAgIC8vIFJlbmRlcmluZyBhIHN1YiBjb21wb25lbnQgc2hvdWxkIGJlIHdpdGhpbiB0aGUgY29udGV4dCxcbiAgICAvLyBvZiB0aGUgbm9kZSB0aGF0IHdlIHByb2Nlc3NlZCBpdCBmcm9tXG4gICAgb3B0cyA9IE9iamVjdC5hc3NpZ24ob3B0cywge1xuICAgICAgY29udGFpbmVyOiBkb21Db21wb25lbnRcbiAgICB9KTtcblxuICAgIGxldCBjaGlsZERhdGEgPSBkYXRhW3Byb3BdO1xuXG4gICAgLy8gVE9ETyhiaWxseSkgUmlnaHQgbm93LCBpZiB3ZSBwcm92aWRlIGFuIGFycmF5IGFzIHRoZSBkYXRhIHByb3AsXG4gICAgLy8gdGhlIGJlaGF2aW9yIGlzIHRvIGNyZWF0ZSBtYW55IGNvbXBvbmVudHMgZm9yIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkuXG4gICAgLy8gVEhBVCBpbnRlcmZhY2UgU0hPVUxEIGNoYW5nZSB0byB1c2UgYSBkaWZmZXJlbnQgcHJvcGVydHkgdGhhdCBkZWZpbmVzXG4gICAgLy8gd2hldGhlciB0byBhcnJheSBkYXRhIHNob3VsZCBiZSB1c2VkIGZvciBhIHNpbmdsZSBjb21wb25lbnQgb3JcbiAgICAvLyB0byBjcmVhdGUgbWFueSBjb21wb25lbnRzIGZvciBlYWNoIGl0ZW0uXG4gICAgLy8gT3ZlcmxvYWRpbmcgYW5kIGhhdmluZyB0aGlzIHNpZGUgZWZmZWN0IGlzIHVuaW50dWl0aXZlIGFuZCBXUk9OR1xuICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZERhdGEpKSB7XG4gICAgICBsZXQgY2hpbGRDb21wb25lbnQgPSB0aGlzLmFkZENoaWxkKGNoaWxkRGF0YSwgdHlwZSwgb3B0cyk7XG4gICAgICBET00uYXBwZW5kKGRvbUNvbXBvbmVudCwgY2hpbGRDb21wb25lbnQucmVuZGVyKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSwgcmVuZGVyIHRoZSBjb21wb25lbnQgYXMgZXhwZWN0ZWRcbiAgICBsZXQgY2hpbGRIVE1MID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZENvbXBvbmVudCA9IHRoaXMuYWRkQ2hpbGQoY2hpbGREYXRhW2ldLCB0eXBlLCBvcHRzKTtcbiAgICAgIGNoaWxkSFRNTC5wdXNoKGNoaWxkQ29tcG9uZW50LnJlbmRlcigpKTtcbiAgICB9XG5cbiAgICBET00uYXBwZW5kKGRvbUNvbXBvbmVudCwgY2hpbGRIVE1MLmpvaW4oJycpKTtcbiAgfVxuXG4gIF9jcmVhdGVBbmFseXRpY3NIb29rIChkb21Db21wb25lbnQpIHtcbiAgICBkb21Db21wb25lbnQuZGF0YXNldC5pc0FuYWx5dGljc0F0dGFjaGVkID0gdHJ1ZTtcbiAgICBjb25zdCBkYXRhc2V0ID0gZG9tQ29tcG9uZW50LmRhdGFzZXQ7XG4gICAgY29uc3QgdHlwZSA9IGRhdGFzZXQuZXZlbnR0eXBlO1xuICAgIGNvbnN0IGxhYmVsID0gZGF0YXNldC5ldmVudGxhYmVsO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBkYXRhc2V0LmV2ZW50b3B0aW9ucyA/IEpTT04ucGFyc2UoZGF0YXNldC5ldmVudG9wdGlvbnMpIDoge307XG5cbiAgICBET00ub24oZG9tQ29tcG9uZW50LCAnY2xpY2snLCBlID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEFuYWx5dGljc0V2ZW50KHR5cGUsIGxhYmVsKTtcbiAgICAgIGV2ZW50LmFkZE9wdGlvbnModGhpcy5fYW5hbHl0aWNzT3B0aW9ucyk7XG4gICAgICBldmVudC5hZGRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlci5yZXBvcnQoZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uQ3JlYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgY29uc3RydWN0ZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uQ3JlYXRlIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25VcGRhdGUgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgY2hhbmdlc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25VcGRhdGUgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBiZWZvcmVSZW5kZXIgZXZlbnQgaXMgdHJpZ2dlcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHJlbmRlcmVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBiZWZvcmVSZW5kZXIgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBhZnRlclJlbmRlciBldmVudCBpcyB0cmlnZ2VyZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYWZ0ZXJSZW5kZXIgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvbk1vdW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgYXBwZW5kZWQgdG8gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25Nb3VudCAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uVW5Nb3VudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIHJlbW92ZWQgZnJvbSB0aGUgRE9NXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvblVuTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBiZWZvcmVNb3VudCBpcyB0cmlnZ2VyZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZCB0byB0aGUgRE9NXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBiZWZvcmVNb3VudCAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uRGVzdHJveSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25EZXN0cm95IChjYikge1xuXG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE5hdmlnYXRpb25Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi9kb20vc2VhcmNocGFyYW1zJztcblxuLyoqXG4gKiBUaGUgVGFiIGlzIGEgbW9kZWwgdGhhdCBpcyB1c2VkIHRvIHBvd2VyIHRoZSBOYXZpZ2F0aW9uIHRhYnMgaW4gdGhlIHZpZXcuXG4gKiBJdCdzIGluaXRpYWxpemVkIHRocm91Z2ggdGhlIGNvbmZpZ3VyYXRpb24gcHJvdmlkZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIFRhYiB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgdGFiIHRoYXQgaXMgZXhwb3NlZCBmb3IgdGhlIGxpbmtcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWwgPSBjb25maWcubGFiZWw7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmxhYmVsICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcignbGFiZWwgaXMgYSByZXF1aXJlZCBjb25maWd1cmF0aW9uIG9wdGlvbiBmb3IgdGFiLicsICdOYXZpZ2F0aW9uQ29tcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBsZXRlIFVSTCwgaW5jbHVkaW5nIHRoZSBwYXJhbXNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudXJsID0gY29uZmlnLnVybDtcbiAgICBpZiAodHlwZW9mIHRoaXMudXJsICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcigndXJsIGlzIGEgcmVxdWlyZWQgY29uZmlndXJhdGlvbiBvcHRpb24gZm9yIHRhYi4nLCAnTmF2aWdhdGlvbkNvbXBvbmVudCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBzZXJ2ZXJzaWRlIHZlcnRpY2FsIGNvbmZpZyBpZCB0aGF0IHRoaXMgaXMgcmVmZXJlbmNlZCB0by5cbiAgICAgKiBCeSBwcm92aWRpbmcgdGhpcywgZW5hYmxlcyBkeW5hbWljIHNvcnRpbmcgYmFzZWQgb24gcmVzdWx0cy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuY29uZmlnSWQgPSBjb25maWcuY29uZmlnSWQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBiYXNlIFVSTCB1c2VkIGZvciBjb25zdHJ1Y3RpbmcgdGhlIFVSTCB3aXRoIHBhcmFtc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5iYXNlVXJsID0gY29uZmlnLnVybDtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0byBzaG93IHRoaXMgdGFiIGZpcnN0IGluIHRoZSBvcmRlclxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNGaXJzdCA9IGNvbmZpZy5pc0ZpcnN0IHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0byBhcHBseSBhIHNwZWNpYWwgY2xhc3MgdG8gdGhlXG4gICAgICogbWFya3VwIHRvIGRldGVybWluZSBpZiBpdCdzIGFuIGFjdGl2ZSB0YWJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmlzQWN0aXZlID0gY29uZmlnLmlzQWN0aXZlIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIGZyb20gd2lsbCBjb25zdHJ1Y3QgYSBtYXAgb2YgY29uZmlnSWQgdG8ge1RhYn0gZnJvbVxuICAgKiBhIGNvbmZpZ3VyYXRpb24gZmlsZVxuICAgKiBAcGFyYW0ge29iamVjdH0gdGFic0NvbmZpZyB0aGUgY29uZmlndXJhdGlvbiB0byB1c2VcbiAgICovXG4gIHN0YXRpYyBmcm9tICh0YWJzQ29uZmlnKSB7XG4gICAgbGV0IHRhYnMgPSB7fTtcbiAgICAvLyBQYXJzZSB0aGUgb3B0aW9ucyBhbmQgYnVpbGQgb3V0IG91ciB0YWJzIGFuZFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFic0NvbmZpZy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRhYiA9IHRhYnNDb25maWdbaV07XG4gICAgICAvLyBGb3IgdGFicyB3aXRob3V0IGNvbmZpZyBpZHMsIG1hcCB0aGVpciBVUkwgdG8gdGhlIGNvbmZpZ0lEXG4gICAgICAvLyB0byBhdm9pZCBkdXBsaWNhdGlvbiBvZiByZW5kZXJzXG4gICAgICBpZiAodGFiLmNvbmZpZ0lkID09PSB1bmRlZmluZWQgJiYgdGFic1t0YWIuY29uZmlnSWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGFiLmNvbmZpZ0lkID0gdGFiLnVybDtcbiAgICAgIH1cblxuICAgICAgdGFic1t0YWIuY29uZmlnSWRdID0gbmV3IFRhYih0YWIpO1xuICAgIH1cbiAgICByZXR1cm4gdGFicztcbiAgfVxufVxuXG4vKipcbiAqIE5hdmlnYXRpb25Db21wb25lbnQgZXhwb3NlcyBhbiBpbnRlcmZhY2UgZm9yIGJ1aWxkaW5nIGEgZHluYW1pY1xuICogbmF2aWdhdGlvbiB0aGF0IGlzIHBvd2VyZWQgYnkgdW5pdmVyc2FsIHNlYXJjaCB1cGRhdGVzLlxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRhdGEgc3RvcmFnZSBrZXlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5OQVZJR0FUSU9OO1xuXG4gICAgLyoqXG4gICAgICogVW5vcmRlcmVkIG1hcCBvZiBlYWNoIHRhYiwga2V5ZWQgYnkgVlMgY29uZmlnSWRcbiAgICAgKiBAdHlwZSB7T2JqZWN0LjxTdHJpbmcsIE9iamVjdD59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90YWJzID0gVGFiLmZyb20oY29uZmlnLnRhYnMpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9yZGVyIG9mIHRoZSB0YWJzLCBwYXJzZWQgZnJvbSBjb25maWd1cmF0aW9uIG9yIFVSTC5cbiAgICAgKiBUaGlzIGdldHMgdXBkYXRlZCBiYXNlZCBvbiB0aGUgc2VydmVyIHJlc3VsdHNcbiAgICAgKiBAdHlwZSB7QXJyYXkuPFN0cmluZz59IFRoZSBsaXN0IG9mIFZTIGNvbmZpZ0lkc1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGFiT3JkZXIgPSB0aGlzLmdldERlZmF1bHRUYWJPcmRlcihjb25maWcudGFicywgdGhpcy5nZXRVcmxQYXJhbXMoKSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTmF2aWdhdGlvbic7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ25hdmlnYXRpb24vbmF2aWdhdGlvbic7XG4gIH1cblxuICAvKipcbiAgICogU2luY2UgdGhlIHNlcnZlciBkYXRhIG9ubHkgcHJvdmlkZXMgYSBsaXN0IG9mXG4gICAqIFZTIGNvbmZpZ0lkcywgd2UgbmVlZCB0byBjb21wdXRlIGFuZCB0cmFuc2Zvcm1cbiAgICogdGhlIGRhdGEgaW50byB0aGUgcHJvcGVyIGZvcm1hdCBmb3IgcmVuZGVyaW5nLlxuICAgKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgaWYgKGRhdGEudGFiT3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fdGFiT3JkZXIgPSB0aGlzLm1lcmdlVGFiT3JkZXIoZGF0YS50YWJPcmRlciwgdGhpcy5fdGFiT3JkZXIpO1xuICAgIH1cblxuICAgIC8vIFNpbmNlIHRoZSB0YWIgb3JkZXJpbmcgY2FuIGNoYW5nZSBiYXNlZCBvbiB0aGUgc2VydmVyIGRhdGFcbiAgICAvLyB3ZSBuZWVkIHRvIHVwZGF0ZSBlYWNoIHRhYnMgVVJMIHRvIGluY2x1ZGUgdGhlIG9yZGVyIGFzIHBhcnQgb2YgdGhlaXIgcGFyYW1zLlxuICAgIC8vIFRoaXMgaGVscHMgd2l0aCBwZXJzaXN0aW5nIHN0YXRlIGFjcm9zcyB2ZXJ0aWNhbHMuXG4gICAgbGV0IHRhYnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3RhYk9yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdGFiID0gdGhpcy5fdGFic1t0aGlzLl90YWJPcmRlcltpXV07XG4gICAgICBpZiAodGFiICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGFiLnVybCA9IHRoaXMuZ2VuZXJhdGVUYWJVcmwodGFiLmJhc2VVcmwsIHRoaXMuZ2V0VXJsUGFyYW1zKCkpO1xuICAgICAgICB0YWJzLnB1c2godGFiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoe1xuICAgICAgdGFiczogdGFic1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VXJsUGFyYW1zICgpIHtcbiAgICByZXR1cm4gbmV3IFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0RGVmYXVsdFRhYk9yZGVyIHdpbGwgY29tcHV0ZSB0aGUgaW5pdGlhbCB0YWIgb3JkZXJpbmcgYmFzZWRcbiAgICogb24gYSBjb21iaW5hdGlvbiBvZiB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZCBkaXJlY3RseSB0byB0aGUgY29tcG9uZW50XG4gICAqIGFuZCB0aGUgdXJsIHBhcmFtcy5cbiAgICogQHBhcmFtIHtPYmplY3RbXX0gdGFic0NvbmZpZ1xuICAgKiBAcGFyYW0ge1NlYXJjaFBhcmFtc31cbiAgICovXG4gIGdldERlZmF1bHRUYWJPcmRlciAodGFic0NvbmZpZywgdXJsUGFyYW1zKSB7XG4gICAgbGV0IHRhYk9yZGVyID0gW107XG5cbiAgICAvLyBVc2UgdGhlIG9yZGVyaW5nIGZyb20gdGhlIFVSTCBhcyB0aGUgcHJpbWFyeSBjb25maWd1cmF0aW9uXG4gICAgLy8gQW5kIHRoZW4gbWVyZ2UgaXQgd2l0aCB0aGUgbG9jYWwgY29uZmlndXJhdGlvbiwgaWYgcHJvdmlkZWQuXG4gICAgaWYgKHVybFBhcmFtcyAmJiB1cmxQYXJhbXMuaGFzKCd0YWJPcmRlcicpKSB7XG4gICAgICB0YWJPcmRlciA9IHVybFBhcmFtcy5nZXQoJ3RhYk9yZGVyJykuc3BsaXQoJywnKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNDb25maWcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhYiA9IHRhYnNDb25maWdbaV07XG4gICAgICAvLyBTb21lIHRhYnMgZG9uJ3QgaGF2ZSBjb25maWdJZCwgc28gd2UgbWFwIGl0IGZyb20gVVJMXG4gICAgICBpZiAodGFiLmNvbmZpZ0lkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGFiLmNvbmZpZ0lkID0gdGFiLnVybDtcbiAgICAgIH1cblxuICAgICAgLy8gQXZvaWQgZHVwbGljYXRlcyBpZiBjb25maWcgd2FzIHByb3ZpZGVkIGZyb20gVVJMXG4gICAgICBpZiAodGFiT3JkZXIuaW5jbHVkZXModGFiLmNvbmZpZ0lkKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gaXNGaXJzdCBzaG91bGQgYWx3YXlzIGJlIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBsaXN0XG4gICAgICBpZiAodGFiLmlzRmlyc3QpIHtcbiAgICAgICAgdGFiT3JkZXIudW5zaGlmdCh0YWIuY29uZmlnSWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFiT3JkZXIucHVzaCh0YWIuY29uZmlnSWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YWJPcmRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBtZXJnZVRhYk9yZGVyIG1lcmdlcyB0d28gYXJyYXlzIGludG8gb25lXG4gICAqIGJ5IGFwcGVuZGluZyBhZGRpdGlvbmFsIHRhYnMgdG8gdGhlIGVuZCBvZiB0aGUgb3JpZ2luYWwgYXJyYXlcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdGFiT3JkZXIgVGFiIG9yZGVyIHByb3ZpZGVkIGJ5IHRoZSBzZXJ2ZXJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gb3RoZXJUYWJPcmRlciBUYWIgb3JkZXIgcHJvdmlkZWQgYnkgY29uZmlndXJhdGlvblxuICAgKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAgICovXG4gIG1lcmdlVGFiT3JkZXIgKHRhYk9yZGVyLCBvdGhlclRhYk9yZGVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdGhlclRhYk9yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YWJDb25maWcgPSBvdGhlclRhYk9yZGVyW2ldO1xuICAgICAgaWYgKHRhYk9yZGVyLmluY2x1ZGVzKHRhYkNvbmZpZykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIGlzRmlyc3Qgc2hvdWxkIGJlIGFuIG92ZXJyaWRlIHRvIGR5bmFtaWMgdGFiIG9yZGVyaW5nLlxuICAgICAgaWYgKHRoaXMuX3RhYnNbdGFiQ29uZmlnXSAmJiB0aGlzLl90YWJzW3RhYkNvbmZpZ10uaXNGaXJzdCkge1xuICAgICAgICB0YWJPcmRlci51bnNoaWZ0KHRhYkNvbmZpZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWJPcmRlci5wdXNoKHRhYkNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYk9yZGVyO1xuICB9XG5cbiAgZ2VuZXJhdGVUYWJVcmwgKGJhc2VVcmwsIHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKSkge1xuICAgIC8vIFdlIHdhbnQgdG8gcGVyc2lzdCB0aGUgcGFyYW1zIGZyb20gdGhlIGV4aXN0aW5nIFVSTCB0byB0aGUgbmV3XG4gICAgLy8gVVJMUyB3ZSBjcmVhdGUuXG4gICAgcGFyYW1zLnNldCgndGFiT3JkZXInLCB0aGlzLl90YWJPcmRlcik7XG4gICAgcmV0dXJuIGJhc2VVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyICovXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBhcGkgZmlsdGVyIGFuZCBwcm92aWRlcyBzdGF0aWMgbWV0aG9kcyBmb3IgZWFzaWx5IGNvbnN0cnVjdGluZyBGaWx0ZXJzLlxuICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLnlleHQuY29tL2RvY3MvYXBpLXJlZmVyZW5jZS8jb3BlcmF0aW9uL2xpc3RFbnRpdGllcyBmb3Igc3RydWN0dXJlIGRldGFpbHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBhIEpTT04gZm9ybWF0IGZpbHRlciByZXR1cm5lZCBmcm9tIHRoZSBzZXJ2ZXIgaW50byBhIEZpbHRlclxuICAgKiBAcGFyYW0geyp9IHJlc3BvbnNlRmlsdGVyIEEgZmlsdGVyIGluIEpTT04gZm9ybWF0IHJldHVybmVkIGZyb20gdGhlIGJhY2tlbmRcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBmcm9tUmVzcG9uc2UgKHJlc3BvbnNlRmlsdGVyKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoSlNPTi5wYXJzZShyZXNwb25zZUZpbHRlcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIG5ldyBGaWx0ZXIgcmVwcmVzZW50aW5nIHRoZSBPUiBvZiBhbGwgcHJvdmlkZWQgZmlsdGVyc1xuICAgKiBAcGFyYW0gIHsuLi5GaWx0ZXJ9IGZpbHRlcnMgVGhlIGZpbHRlcnMgdG8gT1IgdG9nZXRoZXJcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBvciAoLi4uZmlsdGVycykge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgICckb3InOiBmaWx0ZXJzXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgbmV3IEZpbHRlciByZXByZXNlbnRpbmcgdGhlIEFORCBvZiBhbGwgcHJvdmlkZWQgZmlsdGVyc1xuICAgKiBAcGFyYW0gIHsuLi5GaWx0ZXJ9IGZpbHRlcnMgVGhlIGZpbHRlcnMgdG8gQU5EIHRvZ2V0aGVyXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgYW5kICguLi5maWx0ZXJzKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgJyRhbmQnOiBmaWx0ZXJzXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT1IgZmlsdGVycyB3aXRoIHRoZSBzYW1lIGtleXMsIHRoZW4gQU5EIHRoZSByZXN1bHRpbmcgZ3JvdXBzXG4gICAqIEBwYXJhbSAgey4uLkZpbHRlcn0gZmlsdGVycyBUaGUgZmlsdGVycyB0byBncm91cFxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGdyb3VwICguLi5maWx0ZXJzKSB7XG4gICAgY29uc3QgZ3JvdXBzID0ge307XG4gICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgZmlsdGVycykge1xuICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMoZmlsdGVyKVswXTtcbiAgICAgIGlmICghZ3JvdXBzW2tleV0pIHtcbiAgICAgICAgZ3JvdXBzW2tleV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1trZXldLnB1c2goZmlsdGVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBncm91cEZpbHRlcnMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIE9iamVjdC5rZXlzKGdyb3VwcykpIHtcbiAgICAgIGdyb3VwRmlsdGVycy5wdXNoKGdyb3Vwc1tmaWVsZF0ubGVuZ3RoID4gMSA/IEZpbHRlci5vciguLi5ncm91cHNbZmllbGRdKSA6IGdyb3Vwc1tmaWVsZF1bMF0pO1xuICAgIH1cblxuICAgIHJldHVybiBncm91cEZpbHRlcnMubGVuZ3RoID4gMSA/IEZpbHRlci5hbmQoLi4uZ3JvdXBGaWx0ZXJzKSA6IGdyb3VwRmlsdGVyc1swXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJlcXVhbCB0b1wiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGVxdWFsIHRvXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZXF1YWwgKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGVxJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImxlc3MgdGhhblwiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGxlc3MgdGhhblxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGxlc3NUaGFuIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRsdCcsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJsZXNzIHRoYW4gb3IgZXF1YWwgdG9cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG9cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBsZXNzVGhhbkVxdWFsIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRsZScsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJncmVhdGVyIHRoYW5cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBncmVhdGVyIHRoYW5cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBncmVhdGVyVGhhbiAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckZ3QnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwiZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ3JlYXRlclRoYW5FcXVhbCAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckZ2UnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGluY2x1c2l2ZSByYW5nZSBmaWx0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSBtaW4gVGhlIG1pbmltdW0gdmFsdWVcbiAgICogQHBhcmFtIHsqfSBtYXggVGhlIG1heGltdW0gdmFsdWVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBpbmNsdXNpdmVSYW5nZSAoZmllbGQsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgW2ZpZWxkXToge1xuICAgICAgICAnJGdlJzogbWluLFxuICAgICAgICAnJGxlJzogbWF4XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGV4Y2x1c2l2ZSByYW5nZSBmaWx0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSBtaW4gVGhlIG1pbmltdW0gdmFsdWVcbiAgICogQHBhcmFtIHsqfSBtYXggVGhlIG1heGltdW0gdmFsdWVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBleGNsdXNpdmVSYW5nZSAoZmllbGQsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgW2ZpZWxkXToge1xuICAgICAgICAnJGd0JzogbWluLFxuICAgICAgICAnJGx0JzogbWF4XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGZpbHRlciB3aXRoIHRoZSBnaXZlbiBtYXRjaGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRjaGVyIFRoZSBtYXRjaGVyIGZvciB0aGUgZmlsZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgZm9yIHRoZSBmaWx0ZXJcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBfZnJvbU1hdGNoZXIgKGZpZWxkLCBtYXRjaGVyLCB2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgIFtmaWVsZF06IHtcbiAgICAgICAgW21hdGNoZXJdOiB2YWx1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi9kb20vc2VhcmNocGFyYW1zJztcblxuLyoqXG4gKiBTZWFyY2hDb21wb25lbnQgZXhwb3NlcyBhbiBpbnRlcmZhY2UgaW4gb3JkZXIgdG8gY3JlYXRlXG4gKiBhIFVJIFNlYXJjaCBleHBlcmllbmNlIGZvciB2ZXJ0aWNhbCBhbmQgdW5pdmVyc2FsIHNlYXJjaC5cbiAqXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBpbnB1dCBrZXkgZm9yIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggY29uZmlndXJhdGlvblxuICAgICAqIElmIG5vdCBwcm92aWRlZCwgYXV0by1jb21wbGV0ZSBhbmQgc2VhcmNoIHdpbGwgYmUgYmFzZWQgb24gdW5pdmVyc2FsXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9iYXJLZXkgPSBjb25maWcuYmFyS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgdmVydGljYWwga2V5IGZvciB2ZXJ0aWNhbCBzZWFyY2ggY29uZmlndXJhdGlvblxuICAgICAqIElmIG5vdCBwcm92aWRlZCwgYXV0by1jb21wbGV0ZSBhbmQgc2VhcmNoIHdpbGwgYmUgYmFzZWQgb24gdW5pdmVyc2FsXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IGNvbmZpZy52ZXJ0aWNhbEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogUXVlcnkgc3VibWlzc2lvbiBpcyBiYXNlZCBvbiBhIGZvcm0gYXMgY29udGV4dC5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gbmF0aXZlIGZvcm0gbm9kZSB3aXRoaW4gY29udGFpbmVyXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5fZm9ybUVsID0gY29uZmlnLmZvcm1TZWxlY3RvciB8fCAnZm9ybSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5wdXQgZWxlbWVudCB1c2VkIGZvciBzZWFyY2hpbmcgYW5kIHdpcmVzIHVwIHRoZSBrZXlib2FyZCBpbnRlcmFjdGlvblxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5faW5wdXRFbCA9IGNvbmZpZy5pbnB1dEVsIHx8ICcuanMteWV4dC1xdWVyeSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgdXNlZCwgcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlIGFzIGEgZGF0YSBwb2ludFxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnRpdGxlID0gY29uZmlnLnRpdGxlIHx8ICdBbnN3ZXJzIFVuaXZlcnNhbCBTZWFyY2gnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRleHQgaXMgdXNlZCBmb3IgbGFiZWxpbmcgdGhlIGlucHV0IGJveCwgYWxzbyBwcm92aWRlZCB0byB0ZW1wbGF0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmxhYmVsVGV4dCA9IGNvbmZpZy5sYWJlbFRleHQgfHwgJ1doYXQgYXJlIHlvdSBpbnRlcmVzdGVkIGluPyc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3VibWl0IHRleHQgaXMgdXNlZCBmb3IgbGFiZWxpbmcgdGhlIHN1Ym1pdCBidXR0b24sIGFsc28gcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zdWJtaXRUZXh0ID0gY29uZmlnLnN1Ym1pdFRleHQgfHwgJ1N1Ym1pdCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3VibWl0IGljb24gaXMgYW4gaWNvbiBmb3IgdGhlIHN1Ym1pdCBidXR0b24sIGlmIHByb3ZpZGVkIGl0IHdpbGwgYmUgZGlzcGxheWVkIGFuZCB0aGVcbiAgICAgKiBzdWJtaXQgdGV4dCB3aWxsIGJlIHVzZWQgZm9yIHNjcmVlbiByZWFkZXJzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnN1Ym1pdEljb24gPSBjb25maWcuc3VibWl0SWNvbiB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHRleHQgdG8gc2hvdyBhcyB0aGUgZmlyc3QgaXRlbSBmb3IgYXV0byBjb21wbGV0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnByb21wdEhlYWRlciA9IGNvbmZpZy5wcm9tcHRIZWFkZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEF1dG8gZm9jdXNlcyB0aGUgaW5wdXQgYm94IGlmIHNldCB0byB0cnVlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIGRlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuYXV0b0ZvY3VzID0gY29uZmlnLmF1dG9Gb2N1cyA9PT0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIHN1Ym1pdFVSTCB3aWxsIGZvcmNlIHRoZSBzZWFyY2ggcXVlcnkgc3VibWlzc2lvbiB0byBnZXRcbiAgICAgKiByZWRpcmVjdGVkIHRvIHRoZSBVUkwgcHJvdmlkZWQuXG4gICAgICogT3B0aW9uYWwsIGRlZmF1bHRzIHRvIG51bGwuXG4gICAgICpcbiAgICAgKiBJZiBubyByZWRpcmVjdFVybCBwcm92aWRlZCwgd2Uga2VlcCB0aGUgcGFnZSBhcyBhIHNpbmdsZSBwYWdlIGFwcC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucmVkaXJlY3RVcmwgPSBjb25maWcucmVkaXJlY3RVcmwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSBzdHJpbmcgdG8gdXNlIGZvciB0aGUgaW5wdXQgYm94LCBwcm92aWRlZCB0byB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlcnkgPSBjb25maWcucXVlcnkgfHwgdGhpcy5nZXRVcmxQYXJhbXMoKS5nZXQoJ3F1ZXJ5JykgfHwgJyc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWluaW11bSB0aW1lIGFsbG93ZWQgaW4gbWlsbGlzZWNvbmRzIGJldHdlZW4gc2VhcmNoZXMgdG8gcHJldmVudFxuICAgICAqIG1hbnkgZHVwbGljYXRlIHNlYXJjaGVzIGJhY2stdG8tYmFja1xuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zZWFyY2hDb29sZG93biA9IGNvbmZpZy5zZWFyY2hDb29sZG93biB8fCAzMDA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnU2VhcmNoQmFyJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAnc2VhcmNoL3NlYXJjaCc7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgaWYgKHRoaXMucXVlcnkgJiYgdGhpcy5xdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNvcmUuc2V0UXVlcnkodGhpcy5xdWVyeSk7XG4gICAgICB0aGlzLnNlYXJjaCh0aGlzLnF1ZXJ5KTtcbiAgICB9XG5cbiAgICB0aGlzLmJpbmRCcm93c2VySGlzdG9yeSgpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgLy8gV2lyZSB1cCBvdXIgc2VhcmNoIGhhbmRsaW5nIGFuZCBhdXRvIGNvbXBsZXRlXG4gICAgdGhpcy5pbml0U2VhcmNoKHRoaXMuX2Zvcm1FbCk7XG4gICAgdGhpcy5pbml0QXV0b0NvbXBsZXRlKHRoaXMuX2lucHV0RWwpO1xuXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzID09PSB0cnVlICYmIHRoaXMucXVlcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gdXNlIGZvciB3aXJpbmcgdXAgc2VhcmNoaW5nIG9uIGZvcm0gc3VibWlzc2lvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybVNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBzdWJtaXQgaGFuZGxpbmcgdG9cbiAgICovXG4gIGluaXRTZWFyY2ggKGZvcm1TZWxlY3Rvcikge1xuICAgIHRoaXMuX2Zvcm1FbCA9IGZvcm1TZWxlY3RvcjtcblxuICAgIGxldCBmb3JtID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgZm9ybVNlbGVjdG9yKTtcbiAgICBpZiAoIWZvcm0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGluaXRpYWxpemUgU2VhcmNoQmFyOyBDYW4gbm90IGZpbmQge0hUTUxFbGVtZW50fSBgJywgdGhpcy5fZm9ybUVsLCAnYC4nKTtcbiAgICB9XG5cbiAgICBET00ub24oZm9ybSwgJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGxldCBpbnB1dEVsID0gZm9ybS5xdWVyeVNlbGVjdG9yKHRoaXMuX2lucHV0RWwpO1xuXG4gICAgICBsZXQgcXVlcnkgPSBpbnB1dEVsLnZhbHVlO1xuICAgICAgbGV0IHBhcmFtcyA9IHRoaXMuZ2V0VXJsUGFyYW1zKCk7XG4gICAgICBwYXJhbXMuc2V0KCdxdWVyeScsIHF1ZXJ5KTtcblxuICAgICAgLy8gSWYgd2UgaGF2ZSBhIHJlZGlyZWN0VXJsLCB3ZSB3YW50IHRoZSBmb3JtIHRvIGJlXG4gICAgICAvLyBzZXJpYWxpemVkIGFuZCBzdWJtaXR0ZWQuXG4gICAgICBpZiAodHlwZW9mIHRoaXMucmVkaXJlY3RVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5yZWRpcmVjdFVybCArICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7XG4gICAgICAgIHF1ZXJ5OiBxdWVyeVxuICAgICAgfSwgcXVlcnksICc/JyArIHBhcmFtcy50b1N0cmluZygpKTtcblxuICAgICAgaW5wdXRFbC5ibHVyKCk7XG5cbiAgICAgIHRoaXMuY29yZS5zZXRRdWVyeShxdWVyeSk7XG4gICAgICB0aGlzLnNlYXJjaChxdWVyeSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHdpcmUgdXAgb3VyIGF1dG8gY29tcGxldGUgb24gYW4gaW5wdXQgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIGF1dG8gY29tcGxldGUgY29tcG9uZW50IHRvXG4gICAqL1xuICBpbml0QXV0b0NvbXBsZXRlIChpbnB1dFNlbGVjdG9yKSB7XG4gICAgdGhpcy5faW5wdXRFbCA9IGlucHV0U2VsZWN0b3I7XG5cbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKCdBdXRvQ29tcGxldGUnLCB7XG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmF1dG9jb21wbGV0ZWAsXG4gICAgICBjb250YWluZXI6ICcueWV4dC1zZWFyY2gtYXV0b2NvbXBsZXRlJyxcbiAgICAgIGJhcktleTogdGhpcy5fYmFyS2V5LFxuICAgICAgdmVydGljYWxLZXk6IHRoaXMuX3ZlcnRpY2FsS2V5LFxuICAgICAgcHJvbXB0SGVhZGVyOiB0aGlzLnByb21wdEhlYWRlcixcbiAgICAgIG9yaWdpbmFsUXVlcnk6IHRoaXMucXVlcnksXG4gICAgICBpbnB1dEVsOiBpbnB1dFNlbGVjdG9yLFxuICAgICAgb25TdWJtaXQ6ICgpID0+IHtcbiAgICAgICAgRE9NLnRyaWdnZXIodGhpcy5fZm9ybUVsLCAnc3VibWl0Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZWFyY2ggKHF1ZXJ5KSB7XG4gICAgaWYgKHRoaXMuX3Rocm90dGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3Rocm90dGxlZCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuX3Rocm90dGxlZCA9IGZhbHNlOyB9LCB0aGlzLl9zZWFyY2hDb29sZG93bik7XG5cbiAgICBpZiAodGhpcy5fdmVydGljYWxLZXkpIHtcbiAgICAgIGNvbnN0IGFsbEZpbHRlcnMgPSB0aGlzLmNvcmUuc3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICAgIGNvbnN0IHRvdGFsRmlsdGVyID0gYWxsRmlsdGVycy5sZW5ndGggPiAxXG4gICAgICAgID8gRmlsdGVyLmFuZCguLi5hbGxGaWx0ZXJzKVxuICAgICAgICA6IGFsbEZpbHRlcnNbMF07XG4gICAgICBjb25zdCBmYWNldEZpbHRlciA9IHRoaXMuY29yZS5zdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GQUNFVF9GSUxURVIpWzBdO1xuICAgICAgcmV0dXJuIHRoaXMuY29yZS52ZXJ0aWNhbFNlYXJjaCh0aGlzLl92ZXJ0aWNhbEtleSwge1xuICAgICAgICBpbnB1dDogcXVlcnksXG4gICAgICAgIGZpbHRlcjogSlNPTi5zdHJpbmdpZnkodG90YWxGaWx0ZXIpLFxuICAgICAgICBmYWNldEZpbHRlcjogSlNPTi5zdHJpbmdpZnkoZmFjZXRGaWx0ZXIpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTk9URShiaWxseSkgVGVtcG9yYXJ5IGhhY2sgZm9yIERFTU9cbiAgICAgIC8vIFJlbW92ZSBtZSBhZnRlciB0aGUgZGVtb1xuICAgICAgbGV0IG5hdiA9IHRoaXMuY29tcG9uZW50TWFuYWdlclxuICAgICAgICAuZ2V0QWN0aXZlQ29tcG9uZW50KCdOYXZpZ2F0aW9uJyk7XG5cbiAgICAgIGlmIChuYXYpIHtcbiAgICAgICAgbGV0IHRhYnMgPSBuYXYuZ2V0U3RhdGUoJ3RhYnMnKTtcbiAgICAgICAgbGV0IHVybHMgPSB7fTtcblxuICAgICAgICBpZiAodGFicyAmJiBBcnJheS5pc0FycmF5KHRhYnMpKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcGFyYW1zID0gdGhpcy5nZXRVcmxQYXJhbXModGFic1tpXS51cmwuc3BsaXQoJz8nKVsxXSk7XG4gICAgICAgICAgICBwYXJhbXMuc2V0KCdxdWVyeScsIHF1ZXJ5KTtcblxuICAgICAgICAgICAgbGV0IHVybCA9IHRhYnNbaV0uYmFzZVVybDtcbiAgICAgICAgICAgIGlmIChwYXJhbXMudG9TdHJpbmcoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHVybCArPSAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVybHNbdGFic1tpXS5jb25maWdJZF0gPSB1cmw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvcmUuc2VhcmNoKHF1ZXJ5LCB1cmxzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29yZS5zZWFyY2gocXVlcnkpO1xuICAgIH1cbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBsYWJlbFRleHQ6IHRoaXMubGFiZWxUZXh0LFxuICAgICAgc3VibWl0SWNvbjogdGhpcy5zdWJtaXRJY29uLFxuICAgICAgc3VibWl0VGV4dDogdGhpcy5zdWJtaXRUZXh0LFxuICAgICAgcXVlcnk6IHRoaXMucXVlcnlcbiAgICB9LCBkYXRhKSk7XG4gIH1cblxuICBnZXRVcmxQYXJhbXMgKHVybCkge1xuICAgIHVybCA9IHVybCB8fCB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTtcbiAgICByZXR1cm4gbmV3IFNlYXJjaFBhcmFtcyh1cmwpO1xuICB9XG5cbiAgYmluZEJyb3dzZXJIaXN0b3J5ICgpIHtcbiAgICBET00ub24od2luZG93LCAncG9wc3RhdGUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5nZXRVcmxQYXJhbXMoKS5nZXQoJ3F1ZXJ5Jyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcXVlcnk6IHRoaXMucXVlcnlcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNvcmUuc2V0UXVlcnkodGhpcy5xdWVyeSk7XG5cbiAgICAgIHRoaXMuc2VhcmNoKHRoaXMucXVlcnkpO1xuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXJTZWFyY2hDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi9kb20vc2VhcmNocGFyYW1zJztcblxuLyoqXG4gKiBGaWx0ZXJTZWFyY2hDb21wb25lbnQgaXMgdXNlZCBmb3IgYXV0b2NvbXBsZXRlIHVzaW5nIHRoZSBGaWx0ZXJTZWFyY2ggYmFja2VuZC5cbiAqIEl0J2xsIGFsbG93IHlvdSB0byBwaWNrIHByZS1zZXQgZmlsdGVycyB0aGF0IGFyZSBzZXR1cCBvbiB0aGUgYmFja2VuZCB3aXRoaW5cbiAqIGEgdmVydGljYWwgc2VhcmNoIGNvbnRleHQuXG4gKlxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlclNlYXJjaENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5wdXQga2V5IGZvciB0aGUgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2JhcktleSA9IGNvbmZpZy5iYXJLZXkgfHwgY29uZmlnLmlucHV0S2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVydGljYWwga2V5IGZvciB2ZXJ0aWNhbCBzZWFyY2ggY29uZmlndXJhdGlvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHN0b3JlIHRoZSBmaWx0ZXIgdmFsdWUgYnV0IGRvIG5vdCBzZWFyY2ggb24gY2hhbmdlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdG9yZU9uQ2hhbmdlID0gY29uZmlnLnN0b3JlT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBRdWVyeSBzdWJtaXNzaW9uIGlzIGJhc2VkIG9uIGEgZm9ybSBhcyBjb250ZXh0LlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBuYXRpdmUgZm9ybSBub2RlIHdpdGhpbiBjb250YWluZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9mb3JtRWwgPSBjb25maWcuZm9ybVNlbGVjdG9yIHx8ICdmb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBlbGVtZW50IHVzZWQgZm9yIHNlYXJjaGluZyBhbmQgd2lyZXMgdXAgdGhlIGtleWJvYXJkIGludGVyYWN0aW9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gY29uZmlnLmlucHV0RWwgfHwgJy5qcy15ZXh0LXF1ZXJ5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB1c2VkLCBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgYXMgYSBkYXRhIHBvaW50XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudGl0bGUgPSBjb25maWcudGl0bGU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VhcmNoIHRleHQgdXNlZCBmb3IgbGFiZWxpbmcgdGhlIGlucHV0IGJveCwgYWxzbyBwcm92aWRlZCB0byB0ZW1wbGF0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnNlYXJjaFRleHQgPSBjb25maWcuc2VhcmNoVGV4dCB8fCAnV2hhdCBhcmUgeW91IGludGVyZXN0ZWQgaW4/JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSB0ZXh0IHRvIHNob3cgYXMgdGhlIGZpcnN0IGl0ZW0gZm9yIGF1dG8gY29tcGxldGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5wcm9tcHRIZWFkZXIgPSBjb25maWcucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBdXRvIGZvY3VzZXMgdGhlIGlucHV0IGJveCBpZiBzZXQgdG8gdHJ1ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBkZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9Gb2N1cyA9IGNvbmZpZy5hdXRvRm9jdXMgPT09IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBzdWJtaXRVUkwgd2lsbCBmb3JjZSB0aGUgc2VhcmNoIHF1ZXJ5IHN1Ym1pc3Npb24gdG8gZ2V0XG4gICAgICogcmVkaXJlY3RlZCB0byB0aGUgVVJMIHByb3ZpZGVkLlxuICAgICAqIE9wdGlvbmFsLCBkZWZhdWx0cyB0byBudWxsLlxuICAgICAqXG4gICAgICogSWYgbm8gcmVkaXJlY3RVcmwgcHJvdmlkZWQsIHdlIGtlZXAgdGhlIHBhZ2UgYXMgYSBzaW5nbGUgcGFnZSBhcHAuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnJlZGlyZWN0VXJsID0gY29uZmlnLnJlZGlyZWN0VXJsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgc3RyaW5nIHRvIHVzZSBmb3IgdGhlIGlucHV0IGJveCwgcHJvdmlkZWQgdG8gdGVtcGxhdGUgZm9yIHJlbmRlcmluZy5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXJ5ID0gY29uZmlnLnF1ZXJ5IHx8IHRoaXMuZ2V0VXJsUGFyYW1zKCkuZ2V0KGAke3RoaXMubmFtZX0ucXVlcnlgKSB8fCAnJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaWx0ZXIgc3RyaW5nIHRvIHVzZSBmb3IgdGhlIHByb3ZpZGVkIHF1ZXJ5XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5maWx0ZXIgPSBjb25maWcuZmlsdGVyIHx8IHRoaXMuZ2V0VXJsUGFyYW1zKCkuZ2V0KGAke3RoaXMubmFtZX0uZmlsdGVyYCkgfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRmlsdGVyU2VhcmNoJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAnc2VhcmNoL2ZpbHRlcnNlYXJjaCc7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgaWYgKHRoaXMucXVlcnkgJiYgdGhpcy5xdWVyeS5sZW5ndGggPiAwICYmIHRoaXMuZmlsdGVyICYmIHRoaXMuZmlsdGVyLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuZ2V0VXJsUGFyYW1zKCk7XG4gICAgICBwYXJhbXMuc2V0KGAke3RoaXMubmFtZX0ucXVlcnlgLCB0aGlzLnF1ZXJ5KTtcbiAgICAgIHBhcmFtcy5zZXQoYCR7dGhpcy5uYW1lfS5maWx0ZXJgLCB0aGlzLmZpbHRlcik7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCAnPycgKyBwYXJhbXMudG9TdHJpbmcoKSk7XG4gICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgRmlsdGVyLmZyb21SZXNwb25zZSh0aGlzLmZpbHRlcikpO1xuICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9XG5cbiAgICB0aGlzLmJpbmRCcm93c2VySGlzdG9yeSgpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgLy8gV2lyZSB1cCBvdXIgc2VhcmNoIGhhbmRsaW5nIGFuZCBhdXRvIGNvbXBsZXRlXG4gICAgdGhpcy5pbml0QXV0b0NvbXBsZXRlKHRoaXMuX2lucHV0RWwpO1xuXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzID09PSB0cnVlICYmIHRoaXMucXVlcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gd2lyZSB1cCBvdXIgYXV0byBjb21wbGV0ZSBvbiBhbiBpbnB1dCBzZWxlY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRTZWxlY3RvciBDU1Mgc2VsZWN0b3IgdG8gYmluZCBvdXIgYXV0byBjb21wbGV0ZSBjb21wb25lbnQgdG9cbiAgICovXG4gIGluaXRBdXRvQ29tcGxldGUgKGlucHV0U2VsZWN0b3IpIHtcbiAgICB0aGlzLl9pbnB1dEVsID0gaW5wdXRTZWxlY3RvcjtcblxuICAgIHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoJ0F1dG9Db21wbGV0ZScsIHtcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0uYXV0b2NvbXBsZXRlYCxcbiAgICAgIGlzRmlsdGVyU2VhcmNoOiB0cnVlLFxuICAgICAgY29udGFpbmVyOiAnLnlleHQtc2VhcmNoLWF1dG9jb21wbGV0ZScsXG4gICAgICBwcm9tcHRIZWFkZXI6IHRoaXMucHJvbXB0SGVhZGVyLFxuICAgICAgb3JpZ2luYWxRdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgIG9yaWdpbmFsRmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgIGlucHV0RWw6IGlucHV0U2VsZWN0b3IsXG4gICAgICB2ZXJ0aWNhbEtleTogdGhpcy5fdmVydGljYWxLZXksXG4gICAgICBiYXJLZXk6IHRoaXMuX2JhcktleSxcbiAgICAgIG9uU3VibWl0OiAocXVlcnksIGZpbHRlcikgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmdldFVybFBhcmFtcygpO1xuICAgICAgICBwYXJhbXMuc2V0KGAke3RoaXMubmFtZX0ucXVlcnlgLCBxdWVyeSk7XG4gICAgICAgIHBhcmFtcy5zZXQoYCR7dGhpcy5uYW1lfS5maWx0ZXJgLCBmaWx0ZXIpO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSByZWRpcmVjdFVybCwgd2Ugd2FudCB0aGUgcGFyYW1zIHRvIGJlXG4gICAgICAgIC8vIHNlcmlhbGl6ZWQgYW5kIHN1Ym1pdHRlZC5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlZGlyZWN0VXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5yZWRpcmVjdFVybCArICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsICc/JyArIHBhcmFtcy50b1N0cmluZygpKTtcblxuICAgICAgICAvLyBzYXZlIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBmb3IgdGhlIG5leHQgc2VhcmNoXG4gICAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBGaWx0ZXIuZnJvbVJlc3BvbnNlKGZpbHRlcikpO1xuICAgICAgICB0aGlzLnNlYXJjaCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gdGhlIHZlcnRpY2FsIHNlYXJjaCB3aXRoIGFsbCBzYXZlZCBmaWx0ZXJzIGFuZCBxdWVyeSxcbiAgICogb3B0aW9uYWxseSByZWRpcmVjdGluZyBiYXNlZCBvbiBjb25maWdcbiAgICovXG4gIHNlYXJjaCAoKSB7XG4gICAgaWYgKHRoaXMuX3N0b3JlT25DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5jb3JlLnN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgbGV0IHRvdGFsRmlsdGVyID0gZmlsdGVyc1swXTtcbiAgICBpZiAoZmlsdGVycy5sZW5ndGggPiAxKSB7XG4gICAgICB0b3RhbEZpbHRlciA9IEZpbHRlci5hbmQoLi4uZmlsdGVycyk7XG4gICAgfVxuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gdGhpcy5jb3JlLnN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpIHx8ICcnO1xuICAgIGNvbnN0IGZhY2V0RmlsdGVyID0gdGhpcy5jb3JlLnN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZBQ0VUX0ZJTFRFUilbMF07XG5cbiAgICB0aGlzLmNvcmUudmVydGljYWxTZWFyY2godGhpcy5fdmVydGljYWxLZXksIHtcbiAgICAgIGlucHV0OiBzZWFyY2hRdWVyeSxcbiAgICAgIGZpbHRlcjogSlNPTi5zdHJpbmdpZnkodG90YWxGaWx0ZXIpLFxuICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKVxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIHNlYXJjaFRleHQ6IHRoaXMuc2VhcmNoVGV4dCxcbiAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlclxuICAgIH0sIGRhdGEpKTtcbiAgfVxuXG4gIGdldFVybFBhcmFtcyAodXJsKSB7XG4gICAgdXJsID0gdXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpO1xuICAgIHJldHVybiBuZXcgU2VhcmNoUGFyYW1zKHVybCk7XG4gIH1cblxuICBiaW5kQnJvd3Nlckhpc3RvcnkgKCkge1xuICAgIERPTS5vbih3aW5kb3csICdwb3BzdGF0ZScsICgpID0+IHtcbiAgICAgIHRoaXMucXVlcnkgPSB0aGlzLmdldFVybFBhcmFtcygpLmdldChgJHt0aGlzLm5hbWV9LnF1ZXJ5YCk7XG4gICAgICB0aGlzLmZpbHRlciA9IHRoaXMuZ2V0VXJsUGFyYW1zKCkuZ2V0KGAke3RoaXMubmFtZX0uZmlsdGVyYCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcXVlcnk6IHRoaXMucXVlcnksXG4gICAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXJcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9zYXZlUXVlcnlBbmRGaWx0ZXIodGhpcy5xdWVyeSwgdGhpcy5maWx0ZXIpO1xuICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuY29uc3QgS2V5cyA9IHtcbiAgQkFDS1NQQUNFOiA4LFxuICBUQUI6IDksXG4gIEVOVEVSOiAxMyxcbiAgU0hJRlQ6IDE2LFxuICBDVFJMOiAxNyxcbiAgQUxUOiAxOCxcbiAgRVNDQVBFOiAyNyxcblxuICBMRUZUOiAzNyxcbiAgUklHSFQ6IDM5LFxuICBVUDogMzgsXG5cbiAgREVMRVRFOiA0NixcbiAgRE9XTjogNDAsXG4gIExFRlRfT1NfS0VZOiA5MSxcbiAgUklHSFRfT1NfS0VZOiA5MixcbiAgU0VMRUNUX0tFWTogOTNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Db21wbGV0ZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgYXV0b2NvbXBsZXRlIGlzIHNpbXBsZSBvciBmaWx0ZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmlzRmlsdGVyU2VhcmNoID0gb3B0cy5pc0ZpbHRlclNlYXJjaCB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgYmFyS2V5YCBpbiB0aGUgdmVydGljYWwgc2VhcmNoIHRvIHVzZSBmb3IgYXV0by1jb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYmFyS2V5ID0gb3B0cy5iYXJLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgdmVydGljYWxLZXlgIG9mIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggdG8gdXNlIGZvciBhdXRvLWNvbXBsZXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IG9wdHMudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBpbnB1dCBlbCBzZWxlY3RvciBmb3IgYXV0byBjb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5faW5wdXRFbCA9IG9wdHMuaW5wdXRFbCB8fCAnLmpzLXlleHQtcXVlcnknO1xuXG4gICAgLyoqXG4gICAgICogQSBzZWxlY3RvciBmb3IgdGhlIGF1dG9jb21wbGV0ZSBlbGVtZW50ZXNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2F1dG9jb21wbGV0ZUVscyA9IG9wdHMuYXV0b0NvbXBsZXRlRWxzIHx8ICcuanMteWV4dC1hdXRvY29tbGV0ZS1vcHRpb24nO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIGZvciB0aGUgZGF0YS1zdG9yYWdlIHRvIGxpc3RlbiBmb3IgdXBkYXRlcyBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBgJHtTdG9yYWdlS2V5cy5BVVRPQ09NUExFVEV9LiR7dGhpcy5uYW1lfWA7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGlucHV0IHZhbHVlIHdoZW4gdHlwaW5nLlxuICAgICAqIFdlIHVzZSB0aGlzIGZvciByZXNldHRpbmcgdGhlIHN0YXRlIG9mIHRoZSBpbnB1dCB2YWx1ZSB3aGVuIG90aGVyIGludGVyYWN0aW9ucyAoZS5nLiByZXN1bHQgbmF2aWdhdGlvbilcbiAgICAgKiBjaGFuZ2UgYmFzZWQgb24gaW50ZXJhY3Rpb25zLiBGb3IgaW5zdGFuY2UsIGhpdHRpbmcgZXNjYXBlIHNob3VsZCByZXNldCB0aGUgdmFsdWUgdG8gdGhlIG9yaWdpbmFsIHR5cGVkIHF1ZXJ5LlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fb3JpZ2luYWxRdWVyeSA9IG9wdHMub3JpZ2luYWxRdWVyeSB8fCAnJztcblxuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIGtleWJvYXJkIG5hdmlnYXRpb24gdGhyb3VnaCByZXN1bHRzLlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBzZWN0aW9uIHdlJ3JlIG5hdmlnYXRpbmcgaW4uXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9zZWN0aW9uSW5kZXggPSAwO1xuXG4gICAgLyoqXG4gICAgICogVXNlZCBmb3Iga2V5Ym9hcmQgbmF2aWdhdGlvbiB0aHJvdWdoIHJlc3VsdHMuXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IHJlc3VsdCBpbmRleCB3ZSdyZSBuYXZpZ2F0aW5nIG9uLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVzdWx0SW5kZXggPSAtMTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSB0ZXh0IHRvIHNob3cgYXMgdGhlIGZpcnN0IGl0ZW0gZm9yIGF1dG8gY29tcGxldGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5wcm9tcHRIZWFkZXIgPSBvcHRzLnByb21wdEhlYWRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgaW52b2tlZCB3aGVuIHRoZSBgRW50ZXJgIGtleSBpcyBwcmVzc2VkIG9uIGF1dG8gY29tcGxldGUuXG4gICAgICovXG4gICAgdGhpcy5fb25TdWJtaXQgPSBvcHRzLm9uU3VibWl0IHx8IGZ1bmN0aW9uICgpIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBhbGlhc2VkIHVzZWQgYnkgdGhlIGNvbXBvbmVudCBtYW5hZ2VyIGZvciBjcmVhdGlvbi5cbiAgICovXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdBdXRvQ29tcGxldGUnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdzZWFyY2gvYXV0b2NvbXBsZXRlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXRTdGF0ZSBpcyBvdmVycmlkZGVuIHNvIHRoYXQgd2UgY2FuIHByb3ZpZGUgYWRkaXRpb25hbCBtZXRhIGRhdGFcbiAgICogdG8gdGhlIHRlbXBsYXRlIChlLmcuIHRoZSBzZWN0aW9uSW5kZXggYW5kIHJlc3VsdEluZGV4KSwgc2luY2VcbiAgICogdGhvc2UgYXJlIGNsaWVudC1pbnRlcmFjdGlvbiBzcGVjaWZpYyB2YWx1ZXMgYW5kIGFyZW4ndCByZXR1cm5lZCBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIHNlY3Rpb25JbmRleDogdGhpcy5fc2VjdGlvbkluZGV4LFxuICAgICAgcmVzdWx0SW5kZXg6IHRoaXMuX3Jlc3VsdEluZGV4LFxuICAgICAgcHJvbXB0SGVhZGVyOiB0aGlzLl9vcmlnaW5hbFF1ZXJ5Lmxlbmd0aCA9PT0gMCA/IHRoaXMucHJvbXB0SGVhZGVyIDogbnVsbFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB1cGRhdGVTdGF0ZSBpcyBhIGhlbHBlciB0byBhcHBseSB0aGUgY3VycmVudCBzdGF0ZSB3aXRoIG5ldyBjbGllbnQtc3RhdGUuXG4gICAqL1xuICB1cGRhdGVTdGF0ZSAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9zdGF0ZS5nZXQoKSk7XG4gIH1cblxuICAvKipcbiAgICogb25DcmVhdGUgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBjb25zdHJ1Y3RlZCBmcm9tIHRoZSBmcmFtZXdvcmsuXG4gICAqIE9uY2Ugd2UncmUgaW5pdGFsaXplZCwgd2Ugd2lyZSB1cCBhbGwgb2Ygb3VyIHVzZXIgaW50ZXJhY3Rpb25zXG4gICAqL1xuICBvbkNyZWF0ZSAoKSB7XG4gICAgLy8gVXNlIHRoZSBjb250ZXh0IG9mIHRoZSBwYXJlbnQgY29tcG9uZW50IHRvIGZpbmQgdGhlIGlucHV0IG5vZGUuXG4gICAgbGV0IHF1ZXJ5SW5wdXQgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Ll9jb250YWluZXIsIHRoaXMuX2lucHV0RWwpO1xuICAgIGlmICghcXVlcnlJbnB1dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgaW5pdGlhbGl6ZSBBdXRvQ29tcGxldGUuIENhbiBub3QgZmluZCB7SFRNTEVsZW1lbnR9IGAnLCB0aGlzLl9pbnB1dEVsLCAnYC4nKTtcbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIHRoZSBuYXRpdmUgYXV0byBjb21wbGV0ZVxuICAgIERPTS5hdHRyKHF1ZXJ5SW5wdXQsICdhdXRvQ29tcGxldGUnLCAnb2ZmJyk7XG5cbiAgICAvLyBUaGUgdXNlciBleGl0cyB0aGUgaW5wdXQsIHNvIHdlIHdhbnQgdG8gcmVzZXQgdGhlIHN0YXRlIGFuZCBjbG9zZVxuICAgIC8vIHRoZSBhdXRvIGNvbXBsZXRlXG4gICAgLy8gVE9ETyhqZGVsZXJtZSk6IENsb3NlIGxvZ2ljIHRvIGJlIG1vdmVkIHRvIHBhcmVudFxuICAgIERPTS5vbihkb2N1bWVudCwgJ2NsaWNrJywgZSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmpzLXlleHQtYXV0b2NvbXBsZXRlLWNvbnRhaW5lciAqJykgfHwgZS50YXJnZXQubWF0Y2hlcyh0aGlzLl9pbnB1dEVsKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIGEgdXNlciBmb2N1c2VzIHRoZSBpbnB1dCwgd2Ugc2hvdWxkIHBvcHVsYXRlIHRoZSBhdXRvY29tcGxldGUgYmFzZWRcbiAgICAvLyBvbiB0aGUgY3VycmVudCB2YWx1ZVxuICAgIERPTS5vbihxdWVyeUlucHV0LCAnZm9jdXMnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmF1dG9Db21wbGV0ZShxdWVyeUlucHV0LnZhbHVlKTtcbiAgICB9KTtcblxuICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIG5hdmlnYXRlIGJldHdlZW4gdGhlIHJlc3VsdHMgdXNpbmcgdGhlIGtleWJvYXJkXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlTmF2aWdhdGVSZXN1bHRzKGUua2V5Q29kZSwgZSk7XG4gICAgICB0aGlzLmhhbmRsZVN1Ym1pdFJlc3VsdChlLmtleUNvZGUsIHF1ZXJ5SW5wdXQudmFsdWUsIGUpO1xuICAgIH0pO1xuXG4gICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gc2VsZWN0IGEgcmVzdWx0IHdpdGggdGhlIG1vdXNlXG4gICAgRE9NLmRlbGVnYXRlKHRoaXMuX2NvbnRhaW5lciwgJy5qcy15ZXh0LWF1dG9jb21wbGV0ZS1vcHRpb24nLCAnY2xpY2snLCAoZXZ0LCB0YXJnZXQpID0+IHtcbiAgICAgIGxldCBkYXRhID0gdGFyZ2V0LmRhdGFzZXQ7XG4gICAgICBsZXQgdmFsID0gZGF0YS5zaG9ydDtcblxuICAgICAgdGhpcy51cGRhdGVRdWVyeSh2YWwpO1xuICAgICAgdGhpcy5fb25TdWJtaXQodmFsLCBkYXRhLmZpbHRlcik7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIHRoZSB1c2VyIGlzIHR5cGluZyBpbiB0aGUgaW5wdXQsIHByb2Nlc3MgdGhlIGF1dG8gY29tcGxldGUuXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdrZXl1cCcsIChlKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZVR5cGluZyhlLmtleUNvZGUsIHF1ZXJ5SW5wdXQudmFsdWUsIGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGNsb3NlIHdpbGwgaGlkZSB0aGUgYXV0byBjb21wbGV0ZSByZXN1bHRzIGFuZCByZXNldCB0aGUgc3RhdGUuXG4gICAqL1xuICBjbG9zZSAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7fSk7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlc2V0cyB0aGUgY2xpZW50IHN0YXRlIHRvIHRoZWlyIG9yaWdpbmFsIHZhbHVlcyBhbmQgdHJpZ2dlcnNcbiAgICogYSB0ZW1wbGF0ZS1yZXJlbmRlciB2aWEgdXBkYXRlU3RhdGVcbiAgICovXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLl9zZWN0aW9uSW5kZXggPSAwO1xuICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gLTE7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gdXBkYXRlIHRoZSBpbnB1dCB0ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRWYWx1ZSBPcHRpb24gdmFsdWUgcHJvdmlkZWQuXG4gICAqIElmIG5vIHZhbHVlIHByb3ZpZGVkLCB3ZSdsbCB0cnkgdG8gZmluZCBpdCBiYXNlZCBvbiB0aGUgc2VsZWN0aW9uIGluZGV4ZXMuXG4gICAqL1xuICB1cGRhdGVRdWVyeSAob3B0VmFsdWUpIHtcbiAgICAvLyBPbmx5IHdhbnQgdG8gdXBkYXRlIHRoZSBxdWVyeSBzdHJpbmcgaWYgdGhlcmVzIGEgdmFsdWUuXG4gICAgLy8gSWYgb25lIGlzIHByb3ZpZGVkLCBncmVhdC5cbiAgICAvLyBPdGhlcndpc2UsIGxldHMgdHJ5IHRvIGZpbmQgaXQgZnJvbSB0aGUgY3VycmVudCBzZWxlY3Rpb24gaW4gdGhlIHJlc3VsdHMuXG4gICAgaWYgKG9wdFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCBzZWN0aW9ucyA9IHRoaXMuX3N0YXRlLmdldCgnc2VjdGlvbnMnKTtcblxuICAgICAgbGV0IHJlc3VsdHMgPSBzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHM7XG4gICAgICBvcHRWYWx1ZSA9IHJlc3VsdHNbdGhpcy5fcmVzdWx0SW5kZXhdLnNob3J0VmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IHF1ZXJ5RWwgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Ll9jb250YWluZXIsICcuanMteWV4dC1xdWVyeScpO1xuICAgIHF1ZXJ5RWwudmFsdWUgPSBvcHRWYWx1ZTtcbiAgfVxuXG4gIGhhbmRsZVR5cGluZyAoa2V5LCB2YWx1ZSwgZSkge1xuICAgIGxldCBpZ25vcmVkS2V5cyA9IFtcbiAgICAgIEtleXMuRE9XTixcbiAgICAgIEtleXMuVVAsXG4gICAgICBLZXlzLkNUUkwsXG4gICAgICBLZXlzLkFMVCxcbiAgICAgIEtleXMuU0hJRlQsXG4gICAgICBLZXlzLkxFRlQsXG4gICAgICBLZXlzLlJJR0hULFxuICAgICAgS2V5cy5MRUZUX09TX0tFWSxcbiAgICAgIEtleXMuUklHSFRfT1NfS0VZLFxuICAgICAgS2V5cy5FTlRFUixcbiAgICAgIEtleXMuU0VMRUNUX0tFWVxuICAgIF07XG5cbiAgICBpZiAoaWdub3JlZEtleXMuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBVc2VyIGVzY2FwZXMgb3V0IG9mIGF1dG8gY29tcGxldGUsIHNvIHdlIHJlc2V0IGl0IHRvIHRoZSBvcmlnaW5hbCBpbnB1dFxuICAgIGlmIChrZXkgPT09IEtleXMuRVNDQVBFKSB7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHRoaXMuX29yaWdpbmFsUXVlcnkpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRhYmJpbmcgb3V0IG9yIGVudGVyIHNob3VsZCBjbG9zZSB0aGUgYXV0byBjb21wbGV0ZS5cbiAgICBpZiAoa2V5ID09PSBLZXlzLlRBQikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgb3JpZ2luYWwgdmFsdWUgYmFzZWQgb24gdGhlIHVzZXIgaW5wdXRcbiAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gdmFsdWU7XG5cbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgdGhpcy5hdXRvQ29tcGxldGUodmFsdWUpO1xuICB9XG5cbiAgYXV0b0NvbXBsZXRlIChpbnB1dCkge1xuICAgIGlmICh0aGlzLmlzRmlsdGVyU2VhcmNoKSB7XG4gICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlRmlsdGVyKGlucHV0LCB0aGlzLm5hbWUsIHRoaXMuX3ZlcnRpY2FsS2V5LCB0aGlzLl9iYXJLZXkpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fdmVydGljYWxLZXkgfHwgdGhpcy5fYmFyS2V5KSB7XG4gICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlVmVydGljYWwoaW5wdXQsIHRoaXMubmFtZSwgdGhpcy5fdmVydGljYWxLZXksIHRoaXMuX2JhcktleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29yZS5hdXRvQ29tcGxldGVVbml2ZXJzYWwoaW5wdXQsIHRoaXMubmFtZSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTmF2aWdhdGVSZXN1bHRzIChrZXksIGUpIHtcbiAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG4gICAgaWYgKHNlY3Rpb25zID09PSB1bmRlZmluZWQgfHwgc2VjdGlvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0cyA9IHNlY3Rpb25zW3RoaXMuX3NlY3Rpb25JbmRleF0ucmVzdWx0cztcbiAgICBpZiAoa2V5ID09PSBLZXlzLlVQKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5fcmVzdWx0SW5kZXggPD0gMCkge1xuICAgICAgICBpZiAodGhpcy5fc2VjdGlvbkluZGV4ID4gMCkge1xuICAgICAgICAgIHRoaXMuX3NlY3Rpb25JbmRleC0tO1xuICAgICAgICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzLmxlbmd0aCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVRdWVyeSh0aGlzLl9vcmlnaW5hbFF1ZXJ5KTtcbiAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3Jlc3VsdEluZGV4LS07XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gS2V5cy5ET1dOKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5fcmVzdWx0SW5kZXggPj0gcmVzdWx0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPCBzZWN0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgdGhpcy5fc2VjdGlvbkluZGV4Kys7XG4gICAgICAgICAgdGhpcy5fcmVzdWx0SW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3Jlc3VsdEluZGV4Kys7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU3VibWl0UmVzdWx0IChrZXksIHZhbHVlLCBlKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gdGhpcy5fc3RhdGUuZ2V0KCdzZWN0aW9ucycpO1xuICAgIGlmIChzZWN0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IHNlY3Rpb25zLmxlbmd0aCA8PSAwKSB7XG4gICAgICBpZiAodGhpcy5pc0ZpbHRlclNlYXJjaCkge1xuICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gc3VibWl0IHRoZSBzZWFyY2ggb24gZW50ZXJcbiAgICBpZiAoa2V5ID09PSBLZXlzLkVOVEVSKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICh0aGlzLmlzRmlsdGVyU2VhcmNoICYmIHRoaXMuX3Jlc3VsdEluZGV4ID09PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBmaWx0ZXIgPSAnJztcbiAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPj0gMCAmJiB0aGlzLl9yZXN1bHRJbmRleCA+PSAwKSB7XG4gICAgICAgIGZpbHRlciA9IEpTT04uc3RyaW5naWZ5KHNlY3Rpb25zW3RoaXMuX3NlY3Rpb25JbmRleF0ucmVzdWx0c1t0aGlzLl9yZXN1bHRJbmRleF0uZmlsdGVyKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGVRdWVyeSh2YWx1ZSk7XG4gICAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gdmFsdWU7XG4gICAgICB0aGlzLl9vblN1Ym1pdCh2YWx1ZSwgZmlsdGVyKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZhY2V0ICovXG5cbi8qKlxuICogTW9kZWwgcmVwcmVzZW50aW5nIGEgZmFjZXQgZmlsdGVyIHdpdGggdGhlIGZvcm1hdCBvZlxuICoge1xuICogICBcImZpZWxkX25hbWVcIjogWyBGaWx0ZXJzLi4uIF0sXG4gKiAgIC4uLlxuICogfVxuICpcbiAqIEBzZWUge0BsaW5rIEZpbHRlcn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZXQge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGZhY2V0IGZpbHRlciBmcm9tIGEgbGlzdCBvZiBGaWx0ZXJzXG4gICAqIEBwYXJhbSAgey4uLkZpbHRlcn0gZmlsdGVycyBUaGUgZmlsdGVycyB0byB1c2UgaW4gdGhpcyBmYWNldFxuICAgKiBAcmV0dXJucyB7RmFjZXR9XG4gICAqL1xuICBzdGF0aWMgZnJvbUZpbHRlcnMgKC4uLmZpbHRlcnMpIHtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBjb25zdCBmbGF0RmlsdGVycyA9IGZpbHRlcnMuZmxhdE1hcChmID0+IGYuJG9yIHx8IGYpO1xuICAgIGZsYXRGaWx0ZXJzLmZvckVhY2goZiA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhmKVswXTtcbiAgICAgIGlmICghZ3JvdXBzW2tleV0pIHtcbiAgICAgICAgZ3JvdXBzW2tleV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1trZXldLnB1c2goZik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IEZhY2V0KGdyb3Vwcyk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZpbHRlckJveENvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IEZhY2V0IGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZhY2V0JztcblxuLyoqXG4gKiBSZW5kZXJzIGEgc2V0IG9mIGZpbHRlcnMsIGFuZCBzZWFyY2hlcyB3aXRoIHRoZW0gd2hlbiBhcHBsaWVkLlxuICogTXVsdGlwbGUgRmlsdGVyQm94IGNvbXBvbmVudHMgd2lsbCBBTkQgdG9nZXRoZXIgYnV0IHdpbGwgbm90IHNoYXJlIHN0YXRlLlxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlckJveENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICBpZiAoIWNvbmZpZy5maWx0ZXJzIHx8ICEoY29uZmlnLmZpbHRlcnMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICdGaWx0ZXJCb3ggcmVxdWlyZXMgZmlsdGVycyB0byBiZSBwcm92aWRlZCBhcyBhbiBhcnJheScsXG4gICAgICAgICdGaWx0ZXJCb3gnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBmaWx0ZXJzIHRvIGRpc3BsYXkgYW5kIGNvbnRyb2xcbiAgICAgKiBAdHlwZSB7b2JqZWN0W119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWx0ZXJDb25maWdzID0gY29uZmlnLmZpbHRlcnM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVydGljYWwga2V5IGZvciB0aGUgc2VhcmNoXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0cmlnZ2VyIGEgc2VhcmNoIG9uIGVhY2ggY2hhbmdlIHRvIGEgZmlsdGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zZWFyY2hPbkNoYW5nZSA9IGNvbmZpZy5zZWFyY2hPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RvciBvZiB0aGUgYXBwbHkgYnV0dG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwcGx5QnV0dG9uU2VsZWN0b3IgPSBjb25maWcuYXBwbHlCdXR0b25TZWxlY3RvciB8fCAnLmpzLXlleHQtZmlsdGVyYm94LWFwcGx5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnRzIGNyZWF0ZWQgZm9yIGVhY2ggZmlsdGVyIGNvbmZpZ1xuICAgICAqIEB0eXBlIHtDb21wb25lbnRbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlckNvbXBvbmVudHMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBmaWx0ZXIgY29tcG9uZW50cyBpbiB0aGUgYm94XG4gICAgICogQHR5cGUge0ZpbHRlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlcnMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRoaXMgZmlsdGVyYm94IGNvbnRhaW5zIGR5bmFtaWMgZmlsdGVycy4gVGhpcyBhZmZlY3RzIHRoZVxuICAgICAqIHRoZSB3YXkgdGhlIGZpbHRlcnMgYXJlIHVzZWQgaW4gdGhlIHNlYXJjaFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faXNEeW5hbWljID0gY29uZmlnLmlzRHluYW1pYyB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gYGZpbHRlcnMvZmlsdGVyYm94YDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdGaWx0ZXJCb3gnO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgIGZpbHRlckNvbmZpZ3M6IHRoaXMuX2ZpbHRlckNvbmZpZ3MsXG4gICAgICBzaG93QXBwbHlCdXR0b246ICF0aGlzLl9zZWFyY2hPbkNoYW5nZVxuICAgIH0pKTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIGlmICh0aGlzLl9maWx0ZXJDb21wb25lbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cy5mb3JFYWNoKGMgPT4gYy5yZW1vdmUoKSk7XG4gICAgICB0aGlzLl9maWx0ZXJDb21wb25lbnRzID0gW107XG4gICAgICB0aGlzLl9maWx0ZXJzID0gW107XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBmaWx0ZXJzIGZyb20gY29uZmlnc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZmlsdGVyQ29uZmlncy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5fZmlsdGVyQ29uZmlnc1tpXTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoY29uZmlnLnR5cGUsIE9iamVjdC5hc3NpZ24oe30sXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmZpbHRlciR7aX1gLFxuICAgICAgICAgIHN0b3JlT25DaGFuZ2U6IGZhbHNlLFxuICAgICAgICAgIGNvbnRhaW5lcjogYC5qcy15ZXh0LWZpbHRlcmJveC1maWx0ZXIke2l9YCxcbiAgICAgICAgICBvbkNoYW5nZTogKGZpbHRlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkZpbHRlckNoYW5nZShpLCBmaWx0ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgY29tcG9uZW50Lm1vdW50KCk7XG4gICAgICB0aGlzLl9maWx0ZXJDb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgIHRoaXMuX2ZpbHRlcnNbaV0gPSBjb21wb25lbnQuZ2V0RmlsdGVyKCk7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBhcHBseSBidXR0b25cbiAgICBpZiAoIXRoaXMuX3NlYXJjaE9uQ2hhbmdlKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9hcHBseUJ1dHRvblNlbGVjdG9yKTtcblxuICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICBET00ub24oYnV0dG9uLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fc2F2ZUZpbHRlcnNUb1N0b3JhZ2UoKTtcbiAgICAgICAgICB0aGlzLl9zZWFyY2goKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBjaGFuZ2VzIHRvIGNoaWxkIGZpbHRlciBjb21wb25lbnRzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGNoYW5nZWQgZmlsdGVyXG4gICAqIEBwYXJhbSB7RmlsdGVyfSBmaWx0ZXIgVGhlIG5ldyBmaWx0ZXJcbiAgICovXG4gIG9uRmlsdGVyQ2hhbmdlIChpbmRleCwgZmlsdGVyKSB7XG4gICAgdGhpcy5fZmlsdGVyc1tpbmRleF0gPSBmaWx0ZXI7XG4gICAgaWYgKHRoaXMuX3NlYXJjaE9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLl9zYXZlRmlsdGVyc1RvU3RvcmFnZSgpO1xuICAgICAgdGhpcy5fc2VhcmNoKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgZmlsdGVyIGNvbXBvbmVudHMgYWxvbmcgd2l0aCB0aGlzIGNvbXBvbmVudFxuICAgKi9cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLl9maWx0ZXJDb21wb25lbnRzLmZvckVhY2goYyA9PiBjLnJlbW92ZSgpKTtcbiAgICBzdXBlci5yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIGN1cnJlbnQgZmlsdGVycyB0byBzdG9yYWdlIHRvIGJlIHVzZWQgaW4gdGhlIG5leHQgc2VhcmNoXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2F2ZUZpbHRlcnNUb1N0b3JhZ2UgKCkge1xuICAgIGNvbnN0IHZhbGlkRmlsdGVycyA9IHRoaXMuX2ZpbHRlcnMuZmlsdGVyKGYgPT5cbiAgICAgIGYgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgZiAhPT0gbnVsbCAmJlxuICAgICAgT2JqZWN0LmtleXMoZikubGVuZ3RoID4gMCk7XG5cbiAgICBpZiAodGhpcy5faXNEeW5hbWljKSB7XG4gICAgICBjb25zdCBjb21iaW5lZEZpbHRlciA9IEZhY2V0LmZyb21GaWx0ZXJzKC4uLnZhbGlkRmlsdGVycyk7XG4gICAgICB0aGlzLmNvcmUuc2V0RmFjZXRGaWx0ZXIodGhpcy5uYW1lLCBjb21iaW5lZEZpbHRlciB8fCB7fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbWJpbmVkRmlsdGVyID0gdmFsaWRGaWx0ZXJzLmxlbmd0aCA+IDFcbiAgICAgICAgPyBGaWx0ZXIuYW5kKC4uLnZhbGlkRmlsdGVycylcbiAgICAgICAgOiB2YWxpZEZpbHRlcnNbMF07XG4gICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgY29tYmluZWRGaWx0ZXIgfHwge30pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGEgc2VhcmNoIHdpdGggYWxsIGZpbHRlcnMgaW4gc3RvcmFnZVxuICAgKi9cbiAgX3NlYXJjaCAoKSB7XG4gICAgY29uc3QgYWxsRmlsdGVycyA9IHRoaXMuY29yZS5zdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GSUxURVIpO1xuICAgIGNvbnN0IHRvdGFsRmlsdGVyID0gYWxsRmlsdGVycy5sZW5ndGggPiAxXG4gICAgICA/IEZpbHRlci5hbmQoLi4uYWxsRmlsdGVycylcbiAgICAgIDogYWxsRmlsdGVyc1swXTtcblxuICAgIC8vIFRPRE8oamRlbGVybWUpOiBjaGVjayBlbXB0eSBvYmplY3RcbiAgICBjb25zdCBxdWVyeSA9IHRoaXMuY29yZS5zdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKTtcblxuICAgIGNvbnN0IGZhY2V0RmlsdGVyID0gdGhpcy5jb3JlLnN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZBQ0VUX0ZJTFRFUilbMF07XG5cbiAgICB0aGlzLmNvcmUudmVydGljYWxTZWFyY2godGhpcy5fdmVydGljYWxLZXksIHtcbiAgICAgIGlucHV0OiBxdWVyeSxcbiAgICAgIGZpbHRlcjogSlNPTi5zdHJpbmdpZnkodG90YWxGaWx0ZXIpLFxuICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXJPcHRpb25zQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgc3VwcG9ydGVkIGNvbnRyb2xzXG4gKiBAdHlwZSB7c3RyaW5nW119XG4gKi9cbmNvbnN0IFNVUFBPUlRFRF9DT05UUk9MUyA9IFtcbiAgJ3NpbmdsZW9wdGlvbicsXG4gICdtdWx0aW9wdGlvbidcbl07XG5cbi8qKlxuICogUmVuZGVycyBhIHNldCBvZiBvcHRpb25zLCBlYWNoIG9uZSByZXByZXNlbnRpbmcgYSBmaWx0ZXIgaW4gYSBzZWFyY2guXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlck9wdGlvbnNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgaWYgKCFjb25maWcuY29udHJvbCB8fCAhU1VQUE9SVEVEX0NPTlRST0xTLmluY2x1ZGVzKGNvbmZpZy5jb250cm9sKSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMgcmVxdWlyZXMgYSB2YWxpZCBcImNvbnRyb2xcIiB0byBiZSBwcm92aWRlZCcsXG4gICAgICAgICdGaWx0ZXJPcHRpb25zJyk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25maWcub3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMgY29tcG9uZW50IHJlcXVpcmVzIG9wdGlvbnMgdG8gYmUgcHJvdmlkZWQnLFxuICAgICAgICAnRmlsdGVyT3B0aW9ucycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGZpbHRlciBvcHRpb25zIHRvIGRpc3BsYXkgd2l0aCBjaGVja2VkIHN0YXR1c1xuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29wdGlvbnMgPSBjb25maWcub3B0aW9ucy5tYXAobyA9PiBPYmplY3QuYXNzaWduKHt9LCB7IHNlbGVjdGVkOiBmYWxzZSB9LCBvKSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiBjb250cm9sIHRvIGRpc3BsYXlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fY29udHJvbCA9IGNvbmZpZy5jb250cm9sO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdG9yIHVzZWQgZm9yIG9wdGlvbnMgaW4gdGhlIHRlbXBsYXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29wdGlvblNlbGVjdG9yID0gY29uZmlnLm9wdGlvblNlbGVjdG9yIHx8ICcuanMteWV4dC1maWx0ZXItb3B0aW9uJztcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHN0b3JlcyB0aGUgZmlsdGVyIHRvIHN0b3JhZ2Ugb24gZWFjaCBjaGFuZ2VcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N0b3JlT25DaGFuZ2UgPSBjb25maWcuc3RvcmVPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB0byBjYWxsIHdoZW4gY2hhbmdlZFxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29uQ2hhbmdlID0gY29uZmlnLm9uQ2hhbmdlIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgdGhpcy5fbGFiZWwgPSBjb25maWcubGFiZWwgfHwgJyc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gYmUgdXNlZCBpbiB0aGUgbGVnZW5kXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xhYmVsID0gY29uZmlnLmxhYmVsIHx8ICdGaWx0ZXJzJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdGaWx0ZXJPcHRpb25zJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyLCBiYXNlZCBvbiB0aGUgY29udHJvbFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gYGNvbnRyb2xzLyR7Y29uZmlnLmNvbnRyb2x9YDtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICBvcHRpb25zOiB0aGlzLl9vcHRpb25zLFxuICAgICAgbGFiZWw6IHRoaXMuX2xhYmVsXG4gICAgfSkpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgRE9NLmRlbGVnYXRlKFxuICAgICAgRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgYC4ke3RoaXMuX2NvbnRyb2x9LWZpZWxkc2V0YCksXG4gICAgICB0aGlzLl9vcHRpb25TZWxlY3RvcixcbiAgICAgICdjbGljaycsXG4gICAgICBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU9wdGlvbihwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC5pbmRleCksIGV2ZW50LnRhcmdldC5jaGVja2VkKTtcblxuICAgICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLl9idWlsZEZpbHRlcigpO1xuICAgICAgICBpZiAodGhpcy5fc3RvcmVPbkNoYW5nZSkge1xuICAgICAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBmaWx0ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fb25DaGFuZ2UoZmlsdGVyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgX3VwZGF0ZU9wdGlvbiAoaW5kZXgsIHNlbGVjdGVkKSB7XG4gICAgaWYgKHRoaXMuX2NvbnRyb2wgPT09ICdzaW5nbGVvcHRpb24nKSB7XG4gICAgICB0aGlzLl9vcHRpb25zID0gdGhpcy5fb3B0aW9ucy5tYXAobyA9PiBPYmplY3QuYXNzaWduKHt9LCBvLCB7IHNlbGVjdGVkOiBmYWxzZSB9KSk7XG4gICAgfVxuXG4gICAgdGhpcy5fb3B0aW9uc1tpbmRleF0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9vcHRpb25zW2luZGV4XSwgeyBzZWxlY3RlZCB9KTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG4gIH1cblxuICBnZXRGaWx0ZXIgKCkge1xuICAgIHJldHVybiB0aGlzLl9idWlsZEZpbHRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBvcHRpb25zXG4gICAqL1xuICBjbGVhciAoKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBET00ucXVlcnlBbGwodGhpcy5fY29udGFpbmVyLCB0aGlzLl9vcHRpb25TZWxlY3Rvcik7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlID0+IGUuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2ZhbHNlJykpO1xuICAgIHRoaXMuX2FwcGx5RmlsdGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgYW5kIHJldHVybiB0aGUgRmlsdGVyIHRoYXQgcmVwcmVzZW50cyB0aGUgY3VycmVudCBzdGF0ZVxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2J1aWxkRmlsdGVyICgpIHtcbiAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5fb3B0aW9uc1xuICAgICAgLmZpbHRlcihvID0+IG8uc2VsZWN0ZWQpXG4gICAgICAubWFwKG8gPT4gby5maWx0ZXJcbiAgICAgICAgPyBvLmZpbHRlclxuICAgICAgICA6IEZpbHRlci5lcXVhbChvLmZpZWxkLCBvLnZhbHVlKSk7XG5cbiAgICByZXR1cm4gZmlsdGVycy5sZW5ndGggPiAwXG4gICAgICA/IEZpbHRlci5ncm91cCguLi5maWx0ZXJzKVxuICAgICAgOiB7fTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmFuZ2VGaWx0ZXJDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZ2VGaWx0ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpZWxkIHRvIGZpbHRlciBvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWVsZCA9IGNvbmZpZy5maWVsZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGZpbHRlciB2YWx1ZSBjaGFuZ2VzXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBjb25maWcub25DaGFuZ2UgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzdG9yZXMgdGhlIGZpbHRlciB0byBzdG9yYWdlIG9uIGVhY2ggY2hhbmdlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdG9yZU9uQ2hhbmdlID0gY29uZmlnLnN0b3JlT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCByYW5nZSByZXByZXNlbnRlZFxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9yYW5nZSA9IHtcbiAgICAgIG1pbjogY29uZmlnLmluaXRpYWxNaW4gfHwgMCxcbiAgICAgIG1heDogY29uZmlnLmluaXRpYWxNYXggfHwgMTBcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIHRvIGRpc3BsYXkgZm9yIHRoZSByYW5nZSBjb250cm9sXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RpdGxlID0gY29uZmlnLnRpdGxlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGxhYmVsIHRvIGRpc3BsYXkgZm9yIHRoZSBtaW4gaW5wdXRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbWluTGFiZWwgPSBjb25maWcubWluTGFiZWwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBsYWJlbCB0byBkaXNwbGF5IGZvciB0aGUgbWF4IGlucHV0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX21heExhYmVsID0gY29uZmlnLm1heExhYmVsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IGBjb250cm9scy9yYW5nZWA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUmFuZ2VGaWx0ZXInO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB0aXRsZTogdGhpcy5fdGl0bGUsXG4gICAgICBtaW5MYWJlbDogdGhpcy5fbWluTGFiZWwsXG4gICAgICBtYXhMYWJlbDogdGhpcy5fbWF4TGFiZWwsXG4gICAgICBtaW5WYWx1ZTogdGhpcy5fcmFuZ2UubWluLFxuICAgICAgbWF4VmFsdWU6IHRoaXMuX3JhbmdlLm1heFxuICAgIH0pKTtcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICBET00uZGVsZWdhdGUodGhpcy5fY29udGFpbmVyLCAnLmpzLXlleHQtcmFuZ2UnLCAnY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl91cGRhdGVSYW5nZShldmVudC50YXJnZXQuZGF0YXNldC5rZXksIE51bWJlci5wYXJzZUludChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldE1pbiAodmFsdWUpIHtcbiAgICB0aGlzLl91cGRhdGVSYW5nZSgnbWluJywgdmFsdWUpO1xuICB9XG5cbiAgc2V0TWF4ICh2YWx1ZSkge1xuICAgIHRoaXMuX3VwZGF0ZVJhbmdlKCdtYXgnLCB2YWx1ZSk7XG4gIH1cblxuICBnZXRGaWx0ZXIgKCkge1xuICAgIHJldHVybiB0aGlzLl9idWlsZEZpbHRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgY3VycmVudCByYW5nZSBzdGF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByYW5nZSBrZXkgdG8gdXBkYXRlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgbmV3IHZhbHVlIGZvciB0aGUga2V5XG4gICAqL1xuICBfdXBkYXRlUmFuZ2UgKGtleSwgdmFsdWUpIHtcbiAgICB0aGlzLl9yYW5nZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX3JhbmdlLCB7IFtrZXldOiB2YWx1ZSB9KTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG5cbiAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLl9idWlsZEZpbHRlcigpO1xuICAgIGlmICh0aGlzLl9zdG9yZU9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgZmlsdGVyKTtcbiAgICB9XG5cbiAgICB0aGlzLl9vbkNoYW5nZShmaWx0ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHRoZSBmaWx0ZXIgcmVwcmVzZW50YXRpb24gb2YgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIF9idWlsZEZpbHRlciAoKSB7XG4gICAgcmV0dXJuIEZpbHRlci5pbmNsdXNpdmVSYW5nZSh0aGlzLl9maWVsZCwgdGhpcy5fcmFuZ2UubWluLCB0aGlzLl9yYW5nZS5tYXgpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEYXRlRmlsdGVyQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5cbi8qKlxuICogQSBmaWx0ZXIgZm9yIGEgcmFuZ2Ugb2YgZGF0ZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVJhbmdlRmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcGkgZmllbGQgdGhpcyBmaWx0ZXIgY29udHJvbHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmllbGQgPSBjb25maWcuZmllbGQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgdG8gZGlzcGxheSBmb3IgdGhlIGRhdGUgcmFuZ2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGl0bGUgPSBjb25maWcudGl0bGU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgbGFiZWwgdG8gc2hvdyBmb3IgdGhlIG1pbiBkYXRlIGlucHV0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX21pbkxhYmVsID0gY29uZmlnLm1pbkxhYmVsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgbGFiZWwgdG8gc2hvdyBmb3IgdGhlIG1heCBkYXRlIGlucHV0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX21heExhYmVsID0gY29uZmlnLm1heExhYmVsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2FsbGJhY2sgdXNlZCB3aGVuIGEgZGF0ZSBpcyBjaGFuZ2VkXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBjb25maWcub25DaGFuZ2UgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzdG9yZXMgdGhlIGZpbHRlciB0byBzdG9yYWdlIG9uIGVhY2ggY2hhbmdlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdG9yZU9uQ2hhbmdlID0gY29uZmlnLnN0b3JlT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGlzIGZpbHRlciByZXByZXNlbnRzIGFuIGV4Y2x1c2l2ZSByYW5nZSwgcmF0aGVyIHRoYW4gYW4gaW5jbHVzaXZlIG9uZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faXNFeGNsdXNpdmUgPSBjb25maWcuaXNFeGNsdXNpdmU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgZm9yIHRoaXMgY29tcG9uZW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSBgY29udHJvbHMvZGF0ZWA7XG5cbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdG9kYXlTdHJpbmcgPSBgJHt0b2RheS5nZXRGdWxsWWVhcigpfS0ke2Ake3RvZGF5LmdldE1vbnRoKCkgKyAxfWAucGFkU3RhcnQoMiwgJzAnKX0tJHtgJHt0b2RheS5nZXREYXRlKCl9YC5wYWRTdGFydCgyLCAnMCcpfWA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBkYXRlIHJhbmdlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9kYXRlID0ge1xuICAgICAgbWluOiBjb25maWcuaW5pdGlhbE1pbiB8fCB0b2RheVN0cmluZyxcbiAgICAgIG1heDogY29uZmlnLmluaXRpYWxNYXggfHwgdG9kYXlTdHJpbmdcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0RhdGVSYW5nZUZpbHRlcic7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIHRpdGxlOiB0aGlzLl90aXRsZSxcbiAgICAgIG1pbkxhYmVsOiB0aGlzLl9taW5MYWJlbCxcbiAgICAgIG1heExhYmVsOiB0aGlzLl9tYXhMYWJlbCxcbiAgICAgIGRhdGVNaW46IHRoaXMuX2RhdGUubWluLFxuICAgICAgZGF0ZU1heDogdGhpcy5fZGF0ZS5tYXhcbiAgICB9KSk7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgRE9NLmRlbGVnYXRlKHRoaXMuX2NvbnRhaW5lciwgJy5qcy15ZXh0LWRhdGUnLCAnY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl91cGRhdGVSYW5nZShldmVudC50YXJnZXQuZGF0YXNldC5rZXksIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBtaW4gZGF0ZSB0byB0aGUgb25lIHByb3ZpZGVkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlIERhdGUgdG8gc2V0IGluIHl5eXktbW0tZGQgc3RyaW5nIGZvcm1hdFxuICAgKi9cbiAgc2V0TWluIChkYXRlKSB7XG4gICAgdGhpcy5fdXBkYXRlUmFuZ2UoJ21pbicsIGRhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbWF4IGRhdGUgdG8gdGhlIG9uZSBwcm92aWRlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0ZSBEYXRlIHRvIHNldCBpbiB5eXl5LW1tLWRkIHN0cmluZyBmb3JtYXRcbiAgICovXG4gIHNldE1heCAoZGF0ZSkge1xuICAgIHRoaXMuX3VwZGF0ZVJhbmdlKCdtYXgnLCBkYXRlKTtcbiAgfVxuXG4gIGdldEZpbHRlciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkRmlsdGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZGF0ZSByYW5nZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgZm9yIHRoZSBkYXRlIHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgc3RyaW5nIGRhdGUgdmFsdWVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91cGRhdGVSYW5nZSAoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXMuX2RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9kYXRlLCB7IFtrZXldOiB2YWx1ZSB9KTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG5cbiAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLl9idWlsZEZpbHRlcigpO1xuICAgIGlmICh0aGlzLl9zdG9yZU9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgZmlsdGVyKTtcbiAgICB9XG5cbiAgICB0aGlzLl9vbkNoYW5nZShmaWx0ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhbiBhcGkgZmlsdGVyIHdpdGggdGhlIGN1cnJlbnQgZGF0ZSBzdGF0ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2J1aWxkRmlsdGVyICgpIHtcbiAgICBpZiAodGhpcy5fZGF0ZS5taW4gPT09ICcnIHx8IHRoaXMuX2RhdGUubWF4ID09PSAnJykge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faXNFeGNsdXNpdmVcbiAgICAgID8gRmlsdGVyLmV4Y2x1c2l2ZVJhbmdlKHRoaXMuX2ZpZWxkLCB0aGlzLl9kYXRlLm1pbiwgdGhpcy5fZGF0ZS5tYXgpXG4gICAgICA6IEZpbHRlci5pbmNsdXNpdmVSYW5nZSh0aGlzLl9maWVsZCwgdGhpcy5fZGF0ZS5taW4sIHRoaXMuX2RhdGUubWF4KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRHluYW1pY0ZpbHRlcnNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbi8qKlxuICogRGlzcGxheXMgYSBzZXQgb2YgZHluYW1pYyBmaWx0ZXJzIHJldHVybmVkIGZyb20gdGhlIGJhY2tlbmRcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljRmlsdGVyc0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVydGljYWwga2V5IGZvciB0aGUgc2VhcmNoXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0cmlnZ2VyIGEgc2VhcmNoIG9uIGVhY2ggY2hhbmdlIHRvIGEgZmlsdGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zZWFyY2hPbkNoYW5nZSA9IGNvbmZpZy5zZWFyY2hPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RvciBvZiB0aGUgYXBwbHkgYnV0dG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwcGx5QnV0dG9uU2VsZWN0b3IgPSBjb25maWcuYXBwbHlCdXR0b25TZWxlY3RvciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbnRyb2xzIHRvIHVzZSBmb3IgZWFjaCBmaWVsZC4gRWFjaCB0eXBlIG9mIGZpbHRlciBoYXMgYSBkZWZhdWx0XG4gICAgICogJGVxIDogbXVsdGlvcHRpb24gKGNoZWNrYm94KVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5fZmllbGRDb250cm9scyA9IGNvbmZpZy5maWVsZENvbnRyb2xzIHx8IHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAnZmlsdGVycy9keW5hbWljJztcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSBmb3IgdGhlIGRhdGEgc3RvcmFnZSB0byBsaXN0ZW4gZm9yIHVwZGF0ZXMgZnJvbSB0aGUgc2VydmVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpbHRlciBib3ggdGhhdCBkaXNwbGF5cyB0aGUgZHluYW1pYyBmaWx0ZXJzXG4gICAgICogQHR5cGUge0ZpbHRlckJveENvbXBvbmVudH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlcmJveCA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRHluYW1pY0ZpbHRlcnMnO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgdGhpcy5jb3JlLmVuYWJsZUR5bmFtaWNGaWx0ZXJzKCk7XG5cbiAgICBpZiAodGhpcy5fZmlsdGVyYm94KSB7XG4gICAgICB0aGlzLl9maWx0ZXJib3gucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgbGV0IHsgZmlsdGVycyB9ID0gdGhpcy5fc3RhdGUuZ2V0KCk7XG5cbiAgICBpZiAoIWZpbHRlcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmaWx0ZXJzID0gZmlsdGVycy5tYXAoZiA9PiB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZiwge1xuICAgICAgICB0eXBlOiAnRmlsdGVyT3B0aW9ucycsXG4gICAgICAgIGNvbnRyb2w6IHRoaXMuX2ZpZWxkQ29udHJvbHNbZi5maWVsZElkXSB8fCAnbXVsdGlvcHRpb24nXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2ZpbHRlcmJveCA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoXG4gICAgICAnRmlsdGVyQm94JyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmZpbHRlcmJveGAsXG4gICAgICAgIGNvbnRhaW5lcjogJy5qcy15ZXh0LWR5bmFtaWMtZmlsdGVycycsXG4gICAgICAgIHNlYXJjaE9uQ2hhbmdlOiB0aGlzLl9zZWFyY2hPbkNoYW5nZSxcbiAgICAgICAgdmVydGljYWxLZXk6IHRoaXMuX3ZlcnRpY2FsS2V5LFxuICAgICAgICBpc0R5bmFtaWM6IHRydWUsXG4gICAgICAgIGZpbHRlcnNcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuX2ZpbHRlcmJveC5tb3VudCgpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEaXJlY3RBbnN3ZXJDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuLyoqXG4gKiBFdmVudFR5cGVzIGFyZSBleHBsaWNpdCBzdHJpbmdzIGRlZmluZWRcbiAqIGZvciB3aGF0IHRoZSBzZXJ2ZXIgZXhwZWN0cyBmb3IgYW5hbHl0aWNzLlxuICpcbiAqIEBlbnVtXG4gKi9cbmNvbnN0IEV2ZW50VHlwZXMgPSB7XG4gIFRIVU1CU19VUDogJ1RIVU1CU19VUCcsXG4gIFRIVU1CU19ET1dOOiAnVEhVTUJTX0RPV04nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RBbnN3ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgLyoqXG4gICAgICogUmVjaWV2ZSB1cGRhdGVzIGZyb20gc3RvcmFnZSBiYXNlZCBvbiB0aGlzIGluZGV4XG4gICAgICogQHR5cGUge1N0b3JhZ2VLZXl9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZm9ybSB1c2VkIGZvciBzdWJtaXR0aW5nIHRoZSBmZWVkYmFja1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fZm9ybUVsID0gY29uZmlnLmZvcm1FbCB8fCAnLmpzLWRpcmVjdEFuc3dlci1mZWVkYmFjay1mb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBgdGh1bWJzIHVwYCBjc3Mgc2VsZWN0b3IgdG8gYmluZCB1aSBpbnRlcmFjdGlvbiB0byBmb3IgcmVwb3J0aW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90aHVtYnNVcFNlbGVjdG9yID0gY29uZmlnLnRodW1ic1VwU2VsZWN0b3IgfHwgJy5qcy1kaXJlY3RBbnN3ZXItdGh1bWJEb3duJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBgdGh1bWJzIGRvd25gIGNzcyBzZWxlY3RvciB0byBiaW5kIHVpIGludGVyYWN0aW9uIHRvIGZvciByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RodW1ic0Rvd25TZWxlY3RvciA9IGNvbmZpZy50aHVtYnNEb3duU2VsZWN0b3IgfHwgJy5qcy1kaXJlY3RBbnN3ZXItdGh1bWJVcCc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRGlyZWN0QW5zd2VyJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9kaXJlY3RhbnN3ZXInO1xuICB9XG5cbiAgLyoqXG4gICAqIGJlZm9yZU1vdW50LCBvbmx5IGRpc3BsYXkgdGhlIGRpcmVjdCBhbnN3ZXIgY29tcG9uZW50IGlmIGl0IGhhcyBkYXRhXG4gICAqL1xuICBiZWZvcmVNb3VudCAoKSB7XG4gICAgaWYgKCF0aGlzLmhhc1N0YXRlKCdhbnN3ZXInKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIERPTSBpcyBjb25zdHJ1Y3RlZCxcbiAgICogd2Ugd2FudCB0byB3aXJlIHVwIHRoZSBiZWhhdmlvciBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgcXVhbGl0eSBmZWVkYmFjayByZXBvcnRpbmcgKHRodW1ic3VwL2Rvd24pXG4gICAqL1xuICBvbk1vdW50ICgpIHtcbiAgICAvLyBBdm9pZCBiaW5kaW5ncyBpZiB0aGUgZmVlZGJhY2sgaGFzIHByZXZpb3VzbHkgYmVlbiBzdWJtaXR0ZWRcbiAgICBpZiAodGhpcy5nZXRTdGF0ZSgnZmVlZGJhY2tTdWJtaXR0ZWQnKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gRm9yIFdDQUcgY29tcGxpYW5jZSwgdGhlIGZlZWRiYWNrIHNob3VsZCBiZSBhIHN1Ym1pdHRhYmxlIGZvcm1cbiAgICBET00ub24odGhpcy5fZm9ybUVsLCAnc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGxldCBmb3JtRWwgPSBlLnRhcmdldDtcbiAgICAgIGxldCBjaGVja2VkVmFsdWUgPSBET00ucXVlcnkoZm9ybUVsLCAnaW5wdXQ6Y2hlY2tlZCcpLnZhbHVlO1xuXG4gICAgICB0aGlzLnJlcG9ydFF1YWxpdHkoY2hlY2tlZFZhbHVlKTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAnZmVlZGJhY2tTdWJtaXR0ZWQnOiB0cnVlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIElzIHRoaXMgYWN0dWFsbHkgbmVjZXNzYXJ5PyBJIGd1ZXNzIGl0J3Mgb25seSBuZWNlc3NhcnkgaWYgdGhlXG4gICAgLy8gc3VibWl0IGJ1dHRvbiBpcyBoaWRkZW4uXG4gICAgRE9NLm9uKHRoaXMuX3RodW1ic1VwU2VsZWN0b3IsICdjbGljaycsICgpID0+IHsgRE9NLnRyaWdnZXIodGhpcy5fZm9ybUVsLCAnc3VibWl0Jyk7IH0pO1xuICAgIERPTS5vbih0aGlzLl90aHVtYnNEb3duU2VsZWN0b3IsICdjbGljaycsICgpID0+IHsgRE9NLnRyaWdnZXIodGhpcy5fZm9ybUVsLCAnc3VibWl0Jyk7IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHVwZGF0ZVN0YXRlIGVuYWJsZXMgZm9yIHBhcnRpYWwgdXBkYXRlcyAodGhlIGRlbHRhIGJldHdlZW4gdGhlIG9sZCBhbmQgbmV3KVxuICAgKiBAdHlwZSB7b2JqZWN0fSBUaGUgbmV3IHN0YXRlIHRvIGFwcGx5IHRvIHRoZSBvbGRcbiAgICovXG4gIHVwZGF0ZVN0YXRlIChzdGF0ZSA9IHt9KSB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmdldFN0YXRlKCksIHN0YXRlKTtcbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXBvcnRRdWFsaXR5IHdpbGwgc2VuZCB0aGUgcXVhbGl0eSBmZWVkYmFjayB0byBhbmFseXRpY3NcbiAgICogQHBhcmFtIHtib29sZWFufSBpc0dvb2QgdHJ1ZSBpZiB0aGUgYW5zd2VyIGlzIHdoYXQgeW91IHdlcmUgbG9va2luZyBmb3JcbiAgICovXG4gIHJlcG9ydFF1YWxpdHkgKGlzR29vZCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IGlzR29vZCA9PT0gdHJ1ZSA/IEV2ZW50VHlwZXMuVEhVTUJTX1VQIDogRXZlbnRUeXBlcy5USFVNQlNfRE9XTjtcbiAgICBjb25zdCBldmVudCA9IG5ldyBBbmFseXRpY3NFdmVudChldmVudFR5cGUpXG4gICAgICAuYWRkT3B0aW9ucyh7XG4gICAgICAgICdkaXJlY3RBbnN3ZXInOiB0cnVlXG4gICAgICB9KTtcblxuICAgIHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIucmVwb3J0KGV2ZW50KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdSZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvcmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvbG9jYXRpb25yZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBSZXN1bHRzSXRlbUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL3Blb3BsZXJlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNYXBQcm92aWRlciAqL1xuXG4vKipcbiAqIEEgTWFwUHJvdmlkZXIgaXMgYW4gaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB0aGF0IHNob3VsZCBiZSBpbXBsZW1lbnRlZFxuICogaW4gb3JkZXIgdG8gaW50ZWdyYXRlIHdpdGggYSBUaGlyZCBQYXJ0eSBNYXAgcHJvdmlkZXIgZm9yIGJvdGhcbiAqIHN0YXRpYyBhbmQgaW50ZXJhY3RpdmUgbWFwcy4gTWFwUHJvdmlkZXJzIGFyZSB1c2VkIGJ5IHRoZSBNYXBDb21wb25lbnQuXG4gKlxuICogSW1wbGVtZW50YXRpb25zIHNob3VsZCBleHRlbmQgdGhpcyBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcFByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdXNlZCBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgbWFwIHByb3ZpZGVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBjb25maWcuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgbWFwIHRvIGFwcGVuZCB0byB0aGUgRE9NLCBkZWZhdWx0cyB0byAxMDAlXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9oZWlnaHQgPSBjb25maWcuaGVpZ2h0IHx8IDIwMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgbWFwIHRvIGFwcGVuZCB0byB0aGUgRE9NLCBkZWZhdWx0cyB0byAxMDAlXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl93aWR0aCA9IGNvbmZpZy53aWR0aCB8fCA2MDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgem9vbSBsZXZlbCBvZiB0aGUgbWFwLCBkZWZhdWx0cyB0byA5XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl96b29tID0gY29uZmlnLnpvb20gfHwgOTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGNvb3JkaW5hdGVzIHRvIGRpc3BsYXkgaWYgdGhlcmUgYXJlIG5vIHJlc3VsdHMgcmV0dXJuZWRcbiAgICAgKiBPbmx5IHVzZWQgaWYgc2hvd0VtcHR5TWFwIGlzIHNldCB0byB0cnVlXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9kZWZhdWx0UG9zaXRpb24gPSBjb25maWcuZGVmYXVsdFBvc2l0aW9uIHx8IHsgbGF0OiAzNy4wOTAyLCBsbmc6IC05NS43MTI5IH07XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGFuIGVtcHR5IG1hcCBzaG91bGQgYmUgc2hvd24gd2hlbiB0aGVyZSBhcmUgbm8gcmVzdWx0c1xuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX3Nob3dFbXB0eU1hcCA9IGNvbmZpZy5zaG93RW1wdHlNYXAgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgdW5kZXJseWluZyBtYXAgaW5zdGFuY2UsIGNyZWF0ZWQgYnkgdGhlIGV4dGVybmFsIGxpYi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX21hcCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUZW1wb3JhcnkgYm9vbGVhbiB0cmFja2luZyB3aGV0aGVyIG9yIG5vdCB0aGUgZXh0ZXJuYWwgSlMgbGlicmFyeSBpcyBsb2FkZWQgKHNlZSBUT0RPIGJlbG93KVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2lzTG9hZGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiBhIHBpbiBpcyBjbGlja2VkLiBUaGUgY2xpY2tlZCBpdGVtKHMpIGFyZSBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMuX29uUGluQ2xpY2sgPSBjb25maWcub25QaW5DbGljayB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIG9uY2UgdGhlIEphdmFzY3JpcHQgaXMgbG9hZGVkXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMuX29uTG9hZGVkID0gY29uZmlnLm9uTG9hZGVkIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1c3RvbSBjb25maWd1cmF0aW9uIG92ZXJyaWRlIHRvIHVzZSBmb3IgdGhlIG1hcCBtYXJrZXJzXG4gICAgICogQHR5cGUge09iamVjdHxGdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLl9waW5Db25maWcgPSB0eXBlb2YgY29uZmlnLnBpbiA9PT0gJ2Z1bmN0aW9uJyA/IGNvbmZpZy5waW4gOiBPYmplY3QuYXNzaWduKE1hcFByb3ZpZGVyLkRFRkFVTFRfUElOX0NPTkZJRywgY29uZmlnLnBpbik7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgY29uZmlndXJhdGlvbiB0byB1c2UgZm9yIHRoZSBtYXAgbWFya2Vyc1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKiBUT0RPKGJpbGx5KSBDcmVhdGUgYSBjb25maWd1cmF0aW9uIG1vZGVsXG4gICAqL1xuICBzdGF0aWMgZ2V0IERFRkFVTFRfUElOX0NPTkZJRyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGljb246IHtcbiAgICAgICAgYW5jaG9yOiBudWxsLCAvLyBlLmcuIHsgeDogMSwgeTogMSB9XG4gICAgICAgIHN2ZzogbnVsbCxcbiAgICAgICAgdXJsOiBudWxsLFxuICAgICAgICBzY2FsZWRTaXplOiBudWxsIC8vIGUuZy4geyB3OiAyMCwgaDogMjAgfVxuICAgICAgfSxcbiAgICAgIGxhYmVsVHlwZTogJ251bWVyaWMnXG4gICAgfTtcbiAgfVxuXG4gIG9uTG9hZGVkIChjYikge1xuICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9vbkxvYWRlZCA9IGNiO1xuICAgIGlmICh0aGlzLmlzTG9hZGVkKCkpIHtcbiAgICAgIHRoaXMuX29uTG9hZGVkKCk7XG4gICAgfVxuICB9XG5cbiAgaXNMb2FkZWQgKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0xvYWRlZDtcbiAgfVxuXG4gIGxvYWRKUyAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmltcGxlbWVudGVkIE1ldGhvZDogbG9hZEpTJyk7XG4gIH1cblxuICBsb2FkU3RhdGljICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaW1wbGVtZW50ZWQgTWV0aG9kOiBsb2FkU3RhdGljJyk7XG4gIH1cblxuICBpbml0IChtYXBEYXRhKSB7XG4gICAgLy8gVE9ETyhiaWxseSkgVGhpcyBzaG91bGQgYmUgYmFzZWQgb2ZmIGEgcHJvbWlzZSB0aGF0IGdldHMgY3JlYXRlZCBmcm9tIGxvYWRKU1xuICAgIHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCBNZXRob2Q6IGluaXQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhIGxpc3Qgb2YgbWFya2VycywgY29tYmluZSBtYXJrZXJzIHdpdGggdGhlIHNhbWUgbGF0L2xuZyBpbnRvIGEgc2luZ2xlIG1hcmtlclxuICAgKiBAcGFyYW0ge29iamVjdFtdfSBtYXJrZXJzIFRoZSBtYXJrZXJzIHRvIGNvbGxhcHNlXG4gICAqL1xuICBfY29sbGFwc2VNYXJrZXJzIChtYXJrZXJzKSB7XG4gICAgY29uc3QgbG9jYXRpb25Ub0l0ZW0gPSB7fTtcbiAgICBtYXJrZXJzLmZvckVhY2gobSA9PiB7XG4gICAgICBsb2NhdGlvblRvSXRlbVtgJHttLmxhdGl0dWRlfSR7bS5sb25naXR1ZGV9YF1cbiAgICAgICAgPyBsb2NhdGlvblRvSXRlbVtgJHttLmxhdGl0dWRlfSR7bS5sb25naXR1ZGV9YF0ucHVzaChtKVxuICAgICAgICA6IGxvY2F0aW9uVG9JdGVtW2Ake20ubGF0aXR1ZGV9JHttLmxvbmdpdHVkZX1gXSA9IFttXTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbGxhcHNlZE1hcmtlcnMgPSBbXTtcbiAgICBmb3IgKGxldCBbLCBtYXJrZXJzXSBvZiBPYmplY3QuZW50cmllcyhsb2NhdGlvblRvSXRlbSkpIHtcbiAgICAgIGlmIChtYXJrZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2VkTWFya2VyID0ge1xuICAgICAgICAgIGl0ZW06IG1hcmtlcnMubWFwKG0gPT4gbS5pdGVtKSxcbiAgICAgICAgICBsYWJlbDogbWFya2Vycy5sZW5ndGgsXG4gICAgICAgICAgbGF0aXR1ZGU6IG1hcmtlcnNbMF0ubGF0aXR1ZGUsXG4gICAgICAgICAgbG9uZ2l0dWRlOiBtYXJrZXJzWzBdLmxvbmdpdHVkZVxuICAgICAgICB9O1xuICAgICAgICBjb2xsYXBzZWRNYXJrZXJzLnB1c2goY29sbGFwc2VkTWFya2VyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxhcHNlZE1hcmtlcnMucHVzaChtYXJrZXJzWzBdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29sbGFwc2VkTWFya2VycztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgR29vZ2xlTWFwUHJvdmlkZXIgKi9cblxuaW1wb3J0IE1hcFByb3ZpZGVyIGZyb20gJy4vbWFwcHJvdmlkZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi8uLi9kb20vZG9tJztcblxuLyogZ2xvYmFsIGdvb2dsZSAqL1xuXG4vKipcbiAqIEdvb2dsZU1hcFByb3ZpZGVyIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIGEgTWFwUHJvdmlkZXJcbiAqIHRoYXQgaGFuZGxlcyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgdGhpcmQgcGFydHkgQVBJIHRvIGV4cG9zZSBtYXBzLlxuICogQGV4dGVuZHMgTWFwUHJvdmlkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29vZ2xlTWFwUHJvdmlkZXIgZXh0ZW5kcyBNYXBQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl9jbGllbnRJZCA9IG9wdHMuY2xpZW50SWQ7XG4gICAgdGhpcy5fc2lnbmF0dXJlID0gb3B0cy5zaWduYXR1cmU7XG5cbiAgICBpZiAoIXRoaXMuaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscygpICYmICF0aGlzLl9hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignR29vZ2xlTWFwc1Byb3ZpZGVyOiBNaXNzaW5nIGBhcGlLZXlgIG9yIHtgY2xpZW50SWRgLCBgc2lnbmF0dXJlYH0nKTtcbiAgICB9XG4gIH1cblxuICBsb2FkSlMgKG9uTG9hZCkge1xuICAgIGlmIChET00ucXVlcnkoJyN5ZXh0LW1hcC1qcycpKSB7XG4gICAgICBpZiAodHlwZW9mIG9uTG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvbkxvYWQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWpzJyxcbiAgICAgIG9ubG9hZDogKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX29uTG9hZGVkKCk7XG4gICAgICB9LFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzcmM6IGAvL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/JHt0aGlzLmdlbmVyYXRlQ3JlZGVudGlhbHMoKX1gXG4gICAgfSk7XG5cbiAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgfVxuXG4gIGdlbmVyYXRlU3RhdGljIChtYXBEYXRhKSB7XG4gICAgbGV0IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MgPSBHb29nbGVNYXBNYXJrZXJDb25maWcuZnJvbShcbiAgICAgIG1hcERhdGEubWFwTWFya2VycyxcbiAgICAgIHRoaXMuX3BpbkNvbmZpZ1xuICAgICk7XG5cbiAgICBsZXQgZW5jb2RlZE1hcmtlcnMgPSBHb29nbGVNYXBNYXJrZXJDb25maWcuc2VyaWFsaXplKGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MpO1xuICAgIHJldHVybiBgXG4gICAgICA8aW1nIHNyYz1cIi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9zdGF0aWNtYXA/JHtlbmNvZGVkTWFya2Vyc30mc2l6ZT0ke3RoaXMuX3dpZHRofXgke3RoaXMuX2hlaWdodH0mJHt0aGlzLmdlbmVyYXRlQ3JlZGVudGlhbHMoKX1cIj5gO1xuICB9XG5cbiAgZ2VuZXJhdGVDcmVkZW50aWFscyAoKSB7XG4gICAgaWYgKHRoaXMuaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscygpKSB7XG4gICAgICByZXR1cm4gYGNsaWVudD0ke3RoaXMuX2NsaWVudElkfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBga2V5PSR7dGhpcy5fYXBpS2V5fWA7XG4gICAgfVxuICB9XG5cbiAgaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscyAoKSB7XG4gICAgLy8gU2lnbmF0dXJlIGlzIG9ubHkgcmVxdWlyZWQgaWYgbWFwIGlzIHN0YXRpY1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRJZCAmJiAodGhpcy5fc2lnbmF0dXJlIHx8ICF0aGlzLl9pc1N0YXRpYyk7XG4gIH1cblxuICBpbml0IChlbCwgbWFwRGF0YSkge1xuICAgIGlmICgoIW1hcERhdGEgfHwgbWFwRGF0YS5tYXBNYXJrZXJzLmxlbmd0aCA8PSAwKSAmJiAhdGhpcy5fc2hvd0VtcHR5TWFwKSB7XG4gICAgICB0aGlzLl9tYXAgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vIE5PVEUoYmlsbHkpIFRoaXMgdGltZW91dCBpcyBhIGhhY2sgZm9yIGRlYWxpbmcgd2l0aCBhc3luYyBuYXR1cmUuXG4gICAgLy8gT25seSBoZXJlIGZvciBkZW1vIHB1cnBvc2VzLCBzbyB3ZSdsbCBmaXggbGF0ZXIuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgY29udGFpbmVyID0gRE9NLnF1ZXJ5KGVsKTtcbiAgICAgIERPTS5jc3MoY29udGFpbmVyLCB7XG4gICAgICAgIHdpZHRoOiB0aGlzLl93aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLl9oZWlnaHRcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoY29udGFpbmVyLCB7XG4gICAgICAgIHpvb206IHRoaXMuX3pvb21cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjb2xsYXBzZWRNYXJrZXJzID0gdGhpcy5fY29sbGFwc2VNYXJrZXJzKG1hcERhdGEubWFwTWFya2Vycyk7XG5cbiAgICAgIC8vIEFwcGx5IG91ciBzZWFyY2ggZGF0YSB0byBvdXIgR29vZ2xlTWFwXG4gICAgICBsZXQgYm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xuXG4gICAgICBpZiAobWFwRGF0YSAmJiBtYXBEYXRhLm1hcE1hcmtlcnMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBnb29nbGVNYXBNYXJrZXJDb25maWdzID0gR29vZ2xlTWFwTWFya2VyQ29uZmlnLmZyb20oXG4gICAgICAgICAgY29sbGFwc2VkTWFya2VycyxcbiAgICAgICAgICB0aGlzLl9waW5Db25maWcsXG4gICAgICAgICAgdGhpcy5tYXApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ29vZ2xlTWFwTWFya2VyQ29uZmlncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKGdvb2dsZU1hcE1hcmtlckNvbmZpZ3NbaV0pO1xuICAgICAgICAgIGlmICh0aGlzLl9vblBpbkNsaWNrKSB7XG4gICAgICAgICAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5fb25QaW5DbGljayhjb2xsYXBzZWRNYXJrZXJzW2ldLml0ZW0pKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm91bmRzLmV4dGVuZChtYXJrZXIucG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKGJvdW5kcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1hcC5zZXRDZW50ZXIobmV3IGdvb2dsZS5tYXBzLkxhdExuZyh0aGlzLl9kZWZhdWx0UG9zaXRpb24ubGF0LCB0aGlzLl9kZWZhdWx0UG9zaXRpb24ubG5nKSk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgfVxufVxuXG4vLyBUT0RPKGJpbGx5KSBNb3ZlIHRvIG93biBjbGFzc1xuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcE1hcmtlckNvbmZpZyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGdvb2dsZSBtYXAsIHRoYXQgdGhlIG1hcmtlciBpcyBhcHBlbmRlZCB0b1xuICAgICAqIEB0eXBlIHtHb29nbGVNYXB9XG4gICAgICovXG4gICAgdGhpcy5tYXAgPSBvcHRzLm1hcCB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1hcmtlciAobGF0L2xuZylcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMucG9zaXRpb24gPSBvcHRzLnBvc2l0aW9uIHx8IHtcbiAgICAgIGxhdDogdW5kZWZpbmVkLFxuICAgICAgbG5nOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHByb3BlcnRpZXMvc2V0dGluZ3Mgb2YgdGhlIGljb24gdXNlZCBmb3IgdGhlIG1hcmtlclxuICAgICAqIGUuZy4ge1xuICAgICAqICAgICAgICBhbmNob3I6IHsgeDogMCwgeTogMCB9XG4gICAgICogICAgICAgIHVybDogJ3BhdGgvdG8vdXJsLmpwZydcbiAgICAgKiAgICAgICAgc2NhbGVkU2l6ZTogeyB3OiAwLCBoOiAwIH1cbiAgICAgKiAgICAgICB9XG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuaWNvbiA9IG9wdHMuaWNvbiB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgb2YgdGhlIG1hcmtlciB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWwgPSBvcHRzLmxhYmVsIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGFuIGFycmF5IG9mIG1hcmtlciBjb25maWdzXG4gICAqIEBwYXJhbSB7R29vZ2xlTWFwTWFya2VyQ29uZmlnW119IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3NcbiAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZSAoZ29vZ2xlTWFwTWFya2VyQ29uZmlncykge1xuICAgIGxldCBzZXJpYWxpemVkTWFya2VycyA9IFtdO1xuICAgIGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBzZXJpYWxpemVkTWFya2Vycy5wdXNoKGBtYXJrZXJzPWxhYmVsOiR7bWFya2VyLmxhYmVsfXwke21hcmtlci5wb3NpdGlvbi5sYXR9LCR7bWFya2VyLnBvc2l0aW9uLmxuZ31gKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VyaWFsaXplZE1hcmtlcnMuam9pbignJicpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBzdG9yYWdlIGRhdGEgbW9kZWwgb2YgbWFya2VycyBpbnRvIEdvb2dsZUFQSU1hcmtlclxuICAgKiBAcGFyYW0ge29iamVjdFtdfSBtYXJrZXJzIFRoZSBkYXRhIG9mIHRoZSBtYXJrZXJcbiAgICogQHBhcmFtIHsoT2JqZWN0fGZ1bmN0aW9uKX0gcGluQ29uZmlnIFRoZSBjb25maWd1cmF0aW9uIHRvIGFwcGx5IHRvIHRoZSBtYXJrZXJcbiAgICogQHBhcmFtIHtHb29nbGVNYXB9IG1hcCByZWZlcmVuY2UgdG8gdGhlIGdvb2dsZSBtYXAgdG8gYXBwbHkgdGhlIG1hcmtlciB0b1xuICAgKiBAcmV0dXJucyB7R29vZ2xlTWFwTWFya2VyQ29uZmlnW119XG4gICAqL1xuICBzdGF0aWMgZnJvbSAobWFya2VycywgcGluQ29uZmlnLCBtYXApIHtcbiAgICBsZXQgZ29vZ2xlTWFwTWFya2VyQ29uZmlncyA9IFtdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShtYXJrZXJzKSkge1xuICAgICAgbWFya2VycyA9IFttYXJrZXJzXTtcbiAgICB9XG5cbiAgICBtYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgLy8gU3VwcG9ydCBjb25maWd1cmF0aW9uIGFzIGEgZnVuY3Rpb25cbiAgICAgIGxldCBwaW5Db25maWdPYmogPSBwaW5Db25maWc7XG4gICAgICBpZiAodHlwZW9mIHBpbkNvbmZpZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwaW5Db25maWdPYmogPSBwaW5Db25maWcoXG4gICAgICAgICAgbWFya2VyLml0ZW0sXG4gICAgICAgICAgTWFwUHJvdmlkZXIuREVGQVVMVF9QSU5fQ09ORklHLFxuICAgICAgICAgIG1hcmtlcik7XG4gICAgICB9XG5cbiAgICAgIC8vIFRyYW5zZm9ybSBvdXIgQ29uZmlndXJhdGlvbiBPYmplY3QgaW50byB0aGUgZXhwZWN0ZWRcbiAgICAgIC8vIEdvb2dsZSBBUEkgZm9ybWF0LlxuICAgICAgbGV0IGljb24gPSB7fTtcbiAgICAgIGlmIChwaW5Db25maWdPYmouYW5jaG9yKSB7XG4gICAgICAgIGljb24uYW5jaG9yID0gZ29vZ2xlLm1hcHMuUG9pbnQocGluQ29uZmlnT2JqLmFuY2hvci54LCBwaW5Db25maWdPYmouYW5jaG9yLnkpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluQ29uZmlnT2JqLnNjYWxlZFNpemUpIHtcbiAgICAgICAgaWNvbi5zY2FsZWRTaXplID0gZ29vZ2xlLm1hcHMuU2l6ZShwaW5Db25maWdPYmouc2NhbGVkU2l6ZS53LCBwaW5Db25maWdPYmouc2NhbGVkU2l6ZS5oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpbkNvbmZpZ09iai51cmwpIHtcbiAgICAgICAgaWNvbi51cmwgPSBwaW5Db25maWdPYmoudXJsO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluQ29uZmlnT2JqLnN2Zykge1xuICAgICAgICBpY29uLnVybCA9IGBkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwgJHtlbmNvZGVVUklDb21wb25lbnQocGluQ29uZmlnT2JqLnN2Zyl9YDtcbiAgICAgIH1cblxuICAgICAgbGV0IGxhYmVsO1xuICAgICAgaWYgKHBpbkNvbmZpZ09iai5sYWJlbCkge1xuICAgICAgICBsYWJlbCA9IHBpbkNvbmZpZ09iai5sYWJlbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhYmVsID0gbWFya2VyLmxhYmVsLnRvU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIE5PVEUoYmlsbHkpIEdvb2dsZSBtYXBzIGRvZXNuJ3QgaGFuZGxlIGVtcHR5IGljb24gb2JqZWN0cyBuaWNlbHlcbiAgICAgIC8vIE1ha2UgZ29vZ2xlIG1hcHMgaGFwcHkgaWYgbm8gc2V0dGluZ3MgZm9yIGljb24gYXJlIHByb3ZpZGVkO1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGljb24pLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpY29uID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBnb29nbGVNYXBNYXJrZXJDb25maWdzLnB1c2goXG4gICAgICAgIG5ldyBHb29nbGVNYXBNYXJrZXJDb25maWcoe1xuICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICBsYXQ6IG1hcmtlci5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxuZzogbWFya2VyLmxvbmdpdHVkZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaWNvbjogaWNvbixcbiAgICAgICAgICBsYWJlbDogbGFiZWxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZ29vZ2xlTWFwTWFya2VyQ29uZmlncztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTWFwQm94TWFwUHJvdmlkZXIgKi9cblxuaW1wb3J0IE1hcFByb3ZpZGVyIGZyb20gJy4vbWFwcHJvdmlkZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi8uLi9kb20vZG9tJztcblxuLyogZ2xvYmFsIG1hcGJveGdsICovXG5cbi8qKlxuICogTWFwQm94TWFwUHJvdmlkZXIgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgYSBNYXBQcm92aWRlclxuICogdGhhdCBoYW5kbGVzIHRoZSBpbnRlZ3JhdGlvbiB3aXRoIHRoZSB0aGlyZCBwYXJ0eSBBUEkgdG8gZXhwb3NlIG1hcHMuXG4gKiBAZXh0ZW5kcyBNYXBQcm92aWRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBCb3hNYXBQcm92aWRlciBleHRlbmRzIE1hcFByb3ZpZGVyIHtcbiAgLyoqXG4gICAqIExvYWQgdGhlIGV4dGVybmFsIEpTIExpYnJhcnlcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25Mb2FkIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRvIGludm9rZSBvbmNlIHRoZSBKUyBpcyBsb2FkZWQuXG4gICAqL1xuICBsb2FkSlMgKG9uTG9hZCkge1xuICAgIGxldCBzY3JpcHQgPSBET00uY3JlYXRlRWwoJ3NjcmlwdCcsIHtcbiAgICAgIGlkOiAneWV4dC1tYXAtanMnLFxuICAgICAgb25sb2FkOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgbWFwYm94Z2wuYWNjZXNzVG9rZW4gPSB0aGlzLl9hcGlLZXk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvbkxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBvbkxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fb25Mb2FkZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLl9vbkxvYWRlZCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzcmM6ICdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MC40NC4xL21hcGJveC1nbC5qcydcbiAgICB9KTtcblxuICAgIGxldCBjc3MgPSBET00uY3JlYXRlRWwoJ2xpbmsnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWNzcycsXG4gICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgIGhyZWY6ICdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MC40NC4xL21hcGJveC1nbC5jc3MnXG4gICAgfSk7XG5cbiAgICBET00uYXBwZW5kKCdib2R5JywgY3NzKTtcbiAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgfVxuXG4gIGdlbmVyYXRlU3RhdGljIChtYXBEYXRhKSB7XG4gICAgbGV0IG1hcGJveE1hcE1hcmtlckNvbmZpZ3MgPSBNYXBCb3hNYXJrZXJDb25maWcuZnJvbShcbiAgICAgIG1hcERhdGEubWFwTWFya2VycyxcbiAgICAgIHRoaXMuX3BpbkNvbmZpZ1xuICAgICk7XG5cbiAgICBsZXQgY2VudGVyID0gbWFwRGF0YS5tYXBDZW50ZXI7XG4gICAgbGV0IHdpZHRoID0gdGhpcy5fd2lkdGggfHwgNjAwO1xuICAgIGxldCBoZWlnaHQgPSB0aGlzLl9oZWlnaHQgfHwgMjAwO1xuICAgIGxldCB6b29tID0gdGhpcy5fem9vbSB8fCA5O1xuXG4gICAgbGV0IGVuY29kZWRNYXJrZXJzID0gTWFwQm94TWFya2VyQ29uZmlnLnNlcmlhbGl6ZShtYXBib3hNYXBNYXJrZXJDb25maWdzKTtcbiAgICByZXR1cm4gYDxpbWcgc3JjPVwiaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9zdHlsZXMvdjEvbWFwYm94L3N0cmVldHMtdjExL3N0YXRpYy8ke2VuY29kZWRNYXJrZXJzfS8ke2NlbnRlci5sb25naXR1ZGV9LCR7Y2VudGVyLmxhdGl0dWRlfSwke3pvb219L2F1dG8vJHt3aWR0aH14JHtoZWlnaHR9P2FjY2Vzc190b2tlbj0ke3RoaXMuX2FwaUtleX1cIj5gO1xuICB9XG5cbiAgaW5pdCAoZWwsIG1hcERhdGEpIHtcbiAgICBpZiAoKCFtYXBEYXRhIHx8IG1hcERhdGEubWFwTWFya2Vycy5sZW5ndGggPD0gMCkgJiYgIXRoaXMuX3Nob3dFbXB0eU1hcCkge1xuICAgICAgdGhpcy5fbWFwID0gbnVsbDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGxldCBjb250YWluZXIgPSBET00ucXVlcnkoZWwpO1xuICAgIERPTS5jc3MoY29udGFpbmVyLCB7XG4gICAgICB3aWR0aDogdGhpcy5fd2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuX2hlaWdodFxuICAgIH0pO1xuXG4gICAgdGhpcy5fbWFwID0gbmV3IG1hcGJveGdsLk1hcCh7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgIHpvb206IHRoaXMuX3pvb20sXG4gICAgICBzdHlsZTogJ21hcGJveDovL3N0eWxlcy9tYXBib3gvc3RyZWV0cy12OScsXG4gICAgICBjZW50ZXI6IHRoaXMuZ2V0Q2VudGVyTWFya2VyKG1hcERhdGEpXG4gICAgfSk7XG5cbiAgICBpZiAobWFwRGF0YSkge1xuICAgICAgY29uc3QgY29sbGFwc2VkTWFya2VycyA9IHRoaXMuX2NvbGxhcHNlTWFya2VycyhtYXBEYXRhLm1hcE1hcmtlcnMpO1xuICAgICAgY29uc3QgbWFwYm94TWFwTWFya2VyQ29uZmlncyA9IE1hcEJveE1hcmtlckNvbmZpZy5mcm9tKFxuICAgICAgICBjb2xsYXBzZWRNYXJrZXJzLFxuICAgICAgICB0aGlzLl9waW5Db25maWcsXG4gICAgICAgIHRoaXMuX21hcCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFwYm94TWFwTWFya2VyQ29uZmlncy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgd3JhcHBlciA9IG1hcGJveE1hcE1hcmtlckNvbmZpZ3NbaV0ud3JhcHBlcjtcbiAgICAgICAgbGV0IGNvb3JkcyA9IG5ldyBtYXBib3hnbC5MbmdMYXQoXG4gICAgICAgICAgbWFwYm94TWFwTWFya2VyQ29uZmlnc1tpXS5wb3NpdGlvbi5sb25naXR1ZGUsXG4gICAgICAgICAgbWFwYm94TWFwTWFya2VyQ29uZmlnc1tpXS5wb3NpdGlvbi5sYXRpdHVkZSk7XG4gICAgICAgIGxldCBtYXJrZXIgPSBuZXcgbWFwYm94Z2wuTWFya2VyKHdyYXBwZXIpLnNldExuZ0xhdChjb29yZHMpO1xuICAgICAgICBtYXJrZXIuYWRkVG8odGhpcy5fbWFwKTtcbiAgICAgICAgaWYgKHRoaXMuX29uUGluQ2xpY2spIHtcbiAgICAgICAgICBtYXJrZXIuZ2V0RWxlbWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5fb25QaW5DbGljayhjb2xsYXBzZWRNYXJrZXJzW2ldLml0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENlbnRlck1hcmtlciAobWFwRGF0YSkge1xuICAgIHJldHVybiBtYXBEYXRhICYmIG1hcERhdGEubWFwQ2VudGVyICYmIG1hcERhdGEubWFwQ2VudGVyLmxvbmdpdHVkZSAmJiBtYXBEYXRhLm1hcENlbnRlci5sYXRpdHVkZVxuICAgICAgPyBbbWFwRGF0YS5tYXBDZW50ZXIubG9uZ2l0dWRlLCBtYXBEYXRhLm1hcENlbnRlci5sYXRpdHVkZV1cbiAgICAgIDogeyBsbmc6IHRoaXMuX2RlZmF1bHRQb3NpdGlvbi5sbmcsIGxhdDogdGhpcy5fZGVmYXVsdFBvc2l0aW9uLmxhdCB9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXBCb3hNYXJrZXJDb25maWcge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBtYXBib3ggbWFwLCB0aGF0IHRoZSBtYXJrZXIgaXMgYXBwZW5kZWQgdG9cbiAgICAgKiBAdHlwZSB7TWFwQm94fVxuICAgICAqL1xuICAgIHRoaXMubWFwID0gb3B0cy5tYXAgfHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBtYXJrZXIgKGxhdC9sbmcpXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLnBvc2l0aW9uID0gb3B0cy5wb3NpdGlvbiB8fCB7XG4gICAgICBsYXRpdHVkZTogdW5kZWZpbmVkLFxuICAgICAgbG9uZ2l0dWRlOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGh0bWwgZWxlbWVudCB0byBiZSB1c2VkIGFzIHRoZSBtYXAgbWFya2VyXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLndyYXBwZXIgPSBvcHRzLndyYXBwZXIgfHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIG9mIHRoZSBtYXJrZXIgdG8gdXNlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmxhYmVsID0gb3B0cy5sYWJlbCB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdXJsIG9mIHRoZSBwaW4gZm9yIHRoZSBzdGF0aWMgbWFwXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnN0YXRpY01hcFBpbiA9IG9wdHMuc3RhdGljTWFwUGluIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGFuIGFycmF5IG9mIG1hcmtlciBjb25maWdzXG4gICAqIEBwYXJhbSB7TWFwQm94TWFya2VyQ29uZmlnW119IG1hcGJveE1hcE1hcmtlckNvbmZpZ3NcbiAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZSAobWFwYm94TWFwTWFya2VyQ29uZmlncykge1xuICAgIGxldCBzZXJpYWxpemVkTWFya2VycyA9IFtdO1xuICAgIG1hcGJveE1hcE1hcmtlckNvbmZpZ3MuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBpZiAobWFya2VyLnN0YXRpY01hcFBpbikge1xuICAgICAgICBzZXJpYWxpemVkTWFya2Vycy5wdXNoKGB1cmwtJHttYXJrZXIuc3RhdGljTWFwUGlufSgke21hcmtlci5wb3NpdGlvbi5sb25naXR1ZGV9LCR7bWFya2VyLnBvc2l0aW9uLmxhdGl0dWRlfSlgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlcmlhbGl6ZWRNYXJrZXJzLnB1c2goYHBpbi1zLSR7bWFya2VyLmxhYmVsfSgke21hcmtlci5wb3NpdGlvbi5sb25naXR1ZGV9LCR7bWFya2VyLnBvc2l0aW9uLmxhdGl0dWRlfSlgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2VyaWFsaXplZE1hcmtlcnMuam9pbignLCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBzdG9yYWdlIGRhdGEgbW9kZWwgb2YgbWFya2VycyBpbnRvIEdvb2dsZUFQSU1hcmtlclxuICAgKiBAcGFyYW0ge01hcEJveH0gQSByZWZlcmVuY2UgdG8gdGhlIGdvb2dsZSBtYXAgdG8gYXBwbHkgdGhlIG1hcmtlciB0b1xuICAgKiBAcGFyYW0ge29iamVjdFtdfSBtYXJrZXJzIFRoZSBkYXRhIG9mIHRoZSBtYXJrZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IHBpbkNvbmZpZyBUaGUgY29uZmlndXJhdGlvbiB0byBhcHBseSB0byB0aGUgbWFya2VyXG4gICAqIEByZXR1cm5zIHtNYXBCb3hNYXJrZXJDb25maWdbXX1cbiAgICovXG4gIHN0YXRpYyBmcm9tIChtYXJrZXJzLCBwaW5Db25maWcsIG1hcCkge1xuICAgIGxldCBtYXBib3hNYXBNYXJrZXJDb25maWdzID0gW107XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1hcmtlcnMpKSB7XG4gICAgICBtYXJrZXJzID0gW21hcmtlcnNdO1xuICAgIH1cblxuICAgIG1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICAvLyBTdXBwb3J0IGNvbmZpZ3VyYXRpb24gYXMgYSBmdW5jdGlvblxuICAgICAgbGV0IHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZztcbiAgICAgIGlmICh0eXBlb2YgcGluQ29uZmlnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZyhcbiAgICAgICAgICBtYXJrZXIuaXRlbSxcbiAgICAgICAgICBNYXBQcm92aWRlci5ERUZBVUxUX1BJTl9DT05GSUcsXG4gICAgICAgICAgbWFya2VyKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgd3JhcHBlciA9IHBpbkNvbmZpZ09iai53cmFwcGVyID8gcGluQ29uZmlnT2JqLndyYXBwZXIgOiBudWxsO1xuICAgICAgY29uc3Qgc3RhdGljTWFwUGluID0gcGluQ29uZmlnT2JqLnN0YXRpY01hcFBpbiA/IHBpbkNvbmZpZ09iai5zdGF0aWNNYXBQaW4gOiBudWxsO1xuXG4gICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzLnB1c2goXG4gICAgICAgIG5ldyBNYXBCb3hNYXJrZXJDb25maWcoe1xuICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICBsYXRpdHVkZTogbWFya2VyLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBtYXJrZXIubG9uZ2l0dWRlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB3cmFwcGVyOiB3cmFwcGVyLFxuICAgICAgICAgIGxhYmVsOiBtYXJrZXIubGFiZWwsXG4gICAgICAgICAgc3RhdGljTWFwUGluOiBzdGF0aWNNYXBQaW5cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWFwYm94TWFwTWFya2VyQ29uZmlncztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTWFwQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuaW1wb3J0IEdvb2dsZU1hcFByb3ZpZGVyIGZyb20gJy4vcHJvdmlkZXJzL2dvb2dsZW1hcHByb3ZpZGVyJztcbmltcG9ydCBNYXBCb3hNYXBQcm92aWRlciBmcm9tICcuL3Byb3ZpZGVycy9tYXBib3htYXBwcm92aWRlcic7XG5cbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG5jb25zdCBQcm92aWRlclR5cGVzID0ge1xuICAnZ29vZ2xlJzogR29vZ2xlTWFwUHJvdmlkZXIsXG4gICdtYXBib3gnOiBNYXBCb3hNYXBQcm92aWRlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogQmluZCB0aGlzIGNvbXBvbmVudCB0byBsaXN0ZW4gdG8gdGhlIHN0b3JhZ2UgYmFzZWQgb24gdGhpcyBrZXlcbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUztcblxuICAgIC8qKlxuICAgICAqIEFuIGFsaWFzZWQgdXNlZCB0byBkZXRlcm1pbmUgdGhlIHR5cGUgb2YgbWFwIHByb3ZpZGVyIHRvIHVzZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fbWFwUHJvdmlkZXIgPSBvcHRzLm1hcFByb3ZpZGVyO1xuICAgIGlmICghdGhpcy5fbWFwUHJvdmlkZXIgfHwgISh0aGlzLl9tYXBQcm92aWRlci50b0xvd2VyQ2FzZSgpIGluIFByb3ZpZGVyVHlwZXMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hcENvbXBvbmVudDogSW52YWxpZCBNYXAgUHJvdmlkZXI7IG11c3QgYmUgYGdvb2dsZWAgb3IgYG1hcEJveGAnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBpbmRpY2F0aW9uIG9mIHdoZXRoZXIgb3Igbm90IHRvIHVzZSBhIHN0YXRpYyBvciBkeW5hbWljIG1hcFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2lzU3RhdGljID0gb3B0cy5pc1N0YXRpYyB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIGFuIGluc3RhbmNlIG9mIHRoZSB7TWFwUHJvdmlkZXJ9IHRoYXQncyBjb25zdHJ1Y3RlZFxuICAgICAqIEB0eXBlIHtNYXBQcm92aWRlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9tYXAgPSBudWxsO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ01hcCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvbWFwJztcbiAgfVxuXG4gIC8vIFRPRE8oYmlsbHkpIE1ha2UgUHJvdmlkZXJUeXBlcyBhIGZhY3RvcnkgY2xhc3NcbiAgZ2V0UHJvdmlkZXJJbnN0YW5jZSAodHlwZSkge1xuICAgIHJldHVybiBuZXcgUHJvdmlkZXJUeXBlc1t0eXBlLnRvTG93ZXJDYXNlKCldKHRoaXMuX2NvbmZpZyk7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgdGhpcy5fbWFwID0gdGhpcy5nZXRQcm92aWRlckluc3RhbmNlKHRoaXMuX21hcFByb3ZpZGVyKTtcbiAgICBsZXQgbWFwRGF0YSA9IHRoaXMuZ2V0U3RhdGUoJ21hcCcpO1xuICAgIGlmIChtYXBEYXRhID09PSB1bmRlZmluZWQgJiYgdGhpcy5faXNTdGF0aWMpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1N0YXRpYykge1xuICAgICAgLy8gVE9ETyhiaWxseSkgVGhlIGV4aXN0aW5nIHRlbXBsYXRlIHNob3VsZCBqdXN0IHRha2UgaW4gdGhlIG1hcCBgaW1nVVJMYCBhcyBkYXRhXG4gICAgICAvLyBJbnN0ZWFkIG9mIG92ZXJyaWRpbmcgdGhlIHRlbXBsYXRlIGxpa2Ugc28sIGJ1dCBOQkQgZm9yIG5vdy5cbiAgICAgIHRoaXMuc2V0VGVtcGxhdGUodGhpcy5fbWFwLmdlbmVyYXRlU3RhdGljKG1hcERhdGEpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX21hcC5sb2FkSlMoKTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIHRoaXMuX21hcC5vbkxvYWRlZCgoKSA9PiB7XG4gICAgICB0aGlzLl9tYXAuaW5pdCh0aGlzLl9jb250YWluZXIsIHRoaXMuZ2V0U3RhdGUoJ21hcCcpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhLCB2YWwpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoZGF0YSwgdmFsKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVzdWx0c0NvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vbG9jYXRpb25yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL2V2ZW50cmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcGVvcGxlcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IE1hcENvbXBvbmVudCBmcm9tICcuLi9tYXAvbWFwY29tcG9uZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFNlYXJjaFN0YXRlcyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5cbmNvbnN0IFJlc3VsdFR5cGUgPSB7XG4gIEVWRU5UOiAnZXZlbnQnLFxuICBMT0NBVElPTjogJ2xvY2F0aW9uJyxcbiAgUEVPUExFOiAncGVvcGxlJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0c0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUztcbiAgICB0aGlzLl9pdGVtQ29uZmlnID0ge1xuICAgICAgZ2xvYmFsOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH0sXG4gICAgICBbRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlXToge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9LFxuICAgICAgW0xvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZV06IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIFtQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlXToge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChjb25maWcucmVuZGVySXRlbSA9PT0gdW5kZWZpbmVkICYmIGNvbmZpZy5fcGFyZW50T3B0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25maWcucmVuZGVySXRlbSA9IGNvbmZpZy5fcGFyZW50T3B0cy5yZW5kZXJJdGVtO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuaXRlbVRlbXBsYXRlID09PSB1bmRlZmluZWQgJiYgY29uZmlnLl9wYXJlbnRPcHRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbmZpZy5pdGVtVGVtcGxhdGUgPSBjb25maWcuX3BhcmVudE9wdHMuaXRlbVRlbXBsYXRlO1xuICAgIH1cblxuICAgIGlmIChjb25maWcubGltaXQpIHtcbiAgICAgIGNvbnN0IGxpbWl0ID0gY29uZmlnLmxpbWl0O1xuICAgICAgaWYgKHR5cGVvZiBsaW1pdCAhPT0gJ251bWJlcicgfHwgbGltaXQgPCAxIHx8IGxpbWl0ID4gNTApIHtcbiAgICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcignU2VhcmNoIExpbWl0IG11c3QgYmUgYmV0d2VlbiAxIGFuZCA1MCcsICdWZXJ0aWNhbFJlc3VsdHMnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29yZS5zZXRTZWFyY2hMaW1pdChsaW1pdCk7XG4gICAgfVxuXG4gICAgdGhpcy5jb25maWd1cmVJdGVtKHtcbiAgICAgIHJlbmRlcjogY29uZmlnLnJlbmRlckl0ZW0sXG4gICAgICB0ZW1wbGF0ZTogY29uZmlnLml0ZW1UZW1wbGF0ZVxuICAgIH0pO1xuICB9XG5cbiAgbW91bnQgKCkge1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmdldFN0YXRlKCkpLmxlbmd0aCA+IDApIHtcbiAgICAgIHN1cGVyLm1vdW50KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGR1cGxpY2F0ZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhLCB2YWwpIHtcbiAgICBjb25zdCBzZWFyY2hTdGF0ZSA9IGRhdGEuc2VhcmNoU3RhdGUgfHwgU2VhcmNoU3RhdGVzLlBSRV9TRUFSQ0g7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oeyByZXN1bHRzOiBbXSB9LCBkYXRhLCB7XG4gICAgICBpc1ByZVNlYXJjaDogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5QUkVfU0VBUkNILFxuICAgICAgaXNTZWFyY2hMb2FkaW5nOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlNFQVJDSF9MT0FESU5HLFxuICAgICAgaXNTZWFyY2hDb21wbGV0ZTogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5TRUFSQ0hfQ09NUExFVEUsXG4gICAgICBpbmNsdWRlTWFwOiB0aGlzLl9jb25maWcuaW5jbHVkZU1hcCxcbiAgICAgIG1hcENvbmZpZzogdGhpcy5fY29uZmlnLm1hcENvbmZpZ1xuICAgIH0pLCB2YWwpO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1ZlcnRpY2FsUmVzdWx0cyc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvcmVzdWx0cyc7XG4gIH1cblxuICBjb25maWd1cmVJdGVtIChjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX2l0ZW1Db25maWcuZ2xvYmFsLnJlbmRlciA9IGNvbmZpZy5yZW5kZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb25maWcucmVuZGVyKSB7XG4gICAgICAgIHRoaXMuc2V0SXRlbVJlbmRlcihrZXksIGNvbmZpZy5yZW5kZXJba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9pdGVtQ29uZmlnLmdsb2JhbC50ZW1wbGF0ZSA9IGNvbmZpZy50ZW1wbGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbmZpZy50ZW1wbGF0ZSkge1xuICAgICAgICB0aGlzLnNldEl0ZW1UZW1wbGF0ZShrZXksIGNvbmZpZy50ZW1wbGF0ZVtrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRJdGVtVGVtcGxhdGUgKHR5cGUsIHRlbXBsYXRlKSB7XG4gICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KHR5cGUpO1xuICAgIHRoaXMuX2l0ZW1Db25maWdbY2xhenoudHlwZV0udGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHNldEl0ZW1SZW5kZXIgKHR5cGUsIHJlbmRlcikge1xuICAgIGxldCBjbGF6eiA9IHRoaXMuZ2V0SXRlbUNvbXBvbmVudCh0eXBlKTtcbiAgICB0aGlzLl9pdGVtQ29uZmlnW2NsYXp6LnR5cGVdLnJlbmRlciA9IHJlbmRlcjtcbiAgfVxuXG4gIGdldEl0ZW1Db21wb25lbnQgKHR5cGUpIHtcbiAgICBsZXQgY29tcCA9IFJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSZXN1bHRUeXBlLkVWRU5UOlxuICAgICAgICBjb21wID0gRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJlc3VsdFR5cGUuTE9DQVRJT046XG4gICAgICAgIGNvbXAgPSBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUmVzdWx0VHlwZS5QRU9QTEU6XG4gICAgICAgIGNvbXAgPSBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXA7XG4gIH1cblxuICBhZGRDaGlsZCAoZGF0YSwgdHlwZSwgb3B0cykge1xuICAgIC8vIFRPRE8oYmlsbHkpIFJlZmFjdG9yIHRoZSB3YXkgY29uZmlndXJhdGlvbiBhbmQgZGF0YSBmbG93c1xuICAgIC8vIHRocm91Z2ggdG9wIGxldmVsIGNvbXBvbmVudHMgdG8gY2hpbGQgY29tcG9uZW50cy5cbiAgICBpZiAodHlwZSA9PT0gUmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZSkge1xuICAgICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KGRhdGEudHlwZSk7XG4gICAgICBpZiAoY2xhenopIHtcbiAgICAgICAgdHlwZSA9IGNsYXp6LnR5cGU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBNYXBDb21wb25lbnQudHlwZSkge1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgbWFwOiBkYXRhXG4gICAgICB9O1xuICAgICAgY29uc3QgbmV3T3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZy5tYXBDb25maWcsIG9wdHMpO1xuICAgICAgcmV0dXJuIHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIG5ld09wdHMpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHRoZSBwcm9wZXIgaXRlbSByZW5kZXJzIHRvIHRoZSB0aGUgY29tcG9uZW50c1xuICAgIC8vIGhhdmUganVzdCBiZWVuIGNvbnN0cnVjdGVkLiBQcmlvcml0aXplIGdsb2JhbCBvdmVyIGluZGl2aWR1YWwgaXRlbXMuXG4gICAgbGV0IGNvbXAgPSBzdXBlci5hZGRDaGlsZChkYXRhLCB0eXBlLCBvcHRzKTtcbiAgICBsZXQgZ2xvYmFsQ29uZmlnID0gdGhpcy5faXRlbUNvbmZpZy5nbG9iYWw7XG4gICAgbGV0IGl0ZW1Db25maWcgPSB0aGlzLl9pdGVtQ29uZmlnW2NvbXAudHlwZV07XG4gICAgbGV0IGhhc0dsb2JhbFJlbmRlciA9IHR5cGVvZiBnbG9iYWxDb25maWcucmVuZGVyID09PSAnZnVuY3Rpb24nO1xuICAgIGxldCBoYXNHbG9iYWxUZW1wbGF0ZSA9IHR5cGVvZiBnbG9iYWxDb25maWcudGVtcGxhdGUgPT09ICdzdHJpbmcnO1xuXG4gICAgaWYgKGhhc0dsb2JhbFJlbmRlcikge1xuICAgICAgY29tcC5zZXRSZW5kZXIoZ2xvYmFsQ29uZmlnLnJlbmRlcik7XG4gICAgfVxuXG4gICAgaWYgKGhhc0dsb2JhbFRlbXBsYXRlKSB7XG4gICAgICBjb21wLnNldFRlbXBsYXRlKGdsb2JhbENvbmZpZy50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKCFpdGVtQ29uZmlnKSB7XG4gICAgICByZXR1cm4gY29tcDtcbiAgICB9XG5cbiAgICBpZiAoIWhhc0dsb2JhbFJlbmRlciAmJiBpdGVtQ29uZmlnLnJlbmRlcikge1xuICAgICAgY29tcC5zZXRSZW5kZXIoaXRlbUNvbmZpZy5yZW5kZXIpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHRlbXBsYXRlIHNwZWNpZmljIHNpdHVhdGlvblxuICAgIGlmICghaGFzR2xvYmFsVGVtcGxhdGUgJiYgaXRlbUNvbmZpZy50ZW1wbGF0ZSkge1xuICAgICAgY29tcC5zZXRUZW1wbGF0ZShpdGVtQ29uZmlnLnRlbXBsYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXA7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTO1xuICAgIHRoaXMuX2xpbWl0ID0gb3B0cy5saW1pdCB8fCAxMDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdVbml2ZXJzYWxSZXN1bHRzJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy91bml2ZXJzYWxyZXN1bHRzJztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaW5pdCAob3B0cykge1xuICAgIHN1cGVyLmluaXQob3B0cyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSwgdmFsKSB7XG4gICAgY29uc3Qgc2VhcmNoU3RhdGUgPSBkYXRhLnNlYXJjaFN0YXRlIHx8IFNlYXJjaFN0YXRlcy5QUkVfU0VBUkNIO1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHsgc2VjdGlvbnM6IFtdIH0sIGRhdGEsIHtcbiAgICAgIGlzUHJlU2VhcmNoOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlBSRV9TRUFSQ0gsXG4gICAgICBpc1NlYXJjaExvYWRpbmc6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0xPQURJTkcsXG4gICAgICBpc1NlYXJjaENvbXBsZXRlOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURVxuICAgIH0pLCB2YWwpO1xuICB9XG5cbiAgYWRkQ2hpbGQgKGRhdGEgPSB7fSwgdHlwZSkge1xuICAgIGxldCBvcHRzID0gdGhpcy5nZXRDaGlsZENvbmZpZyhbZGF0YVsndmVydGljYWxDb25maWdJZCddXSk7XG4gICAgcmV0dXJuIHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIG9wdHMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb25maWcgKGNvbmZpZ0lkKSB7XG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuX2NvbmZpZy5jb25maWc7XG4gICAgaWYgKGNvbmZpZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9jb25maWdbJ2NvbmZpZyddW2NvbmZpZ0lkXSB8fCB0aGlzLl9jb25maWdbJ2NvbmZpZyddO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFF1ZXN0aW9uU3VibWlzc2lvbiBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9xdWVzdGlvbnN1Ym1pc3Npb24nO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBBbmFseXRpY3NFdmVudCBmcm9tICcuLi8uLi8uLi9jb3JlL2FuYWx5dGljcy9hbmFseXRpY3NldmVudCc7XG5cbi8qKlxuICogQ29uZmlndXJhYmxlIG9wdGlvbnMgZm9yIHRoZSBjb21wb25lbnRcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmNvbnN0IERFRkFVTFRfQ09ORklHID0ge1xuICAvKipcbiAgICogVGhlIGVudGl0eSBpZGVudGlmaWVyIHRoYXQgdGhlIHF1ZXN0aW9uIGlzIGFzc29jaWF0ZWQgd2l0aC5cbiAgICogVGhpcyBpcyB0eXBpY2FsbHkgYW4gb3JnYW5pemF0aW9uIG9iamVjdFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgJ2VudGl0eUlkJzogbnVsbCxcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgbGFuZ3VhZ2Ugb2YgdGhlIHF1ZXN0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICAnbGFuZ3VhZ2UnOiAnRU4nLFxuXG4gIC8qKlxuICAgKiBUaGUgbWFpbiBDU1Mgc2VsZWN0b3IgdXNlZCB0byByZWZlcmVuY2UgdGhlIGZvcm0gZm9yIHRoZSBjb21wb25lbnQuXG4gICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgKi9cbiAgJ2Zvcm1TZWxlY3Rvcic6ICdmb3JtJyxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgbGFiZWwgdG8gdXNlIGZvciB0aGUgZS1tYWlsIGFkZHJlc3MgaW5wdXRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICdlbWFpbExhYmVsJzogJ0VtYWlsIEFkZHJlc3M6JyxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgbGFiZWwgdG8gdXNlIGZvciB0aGUgbmFtZSBpbnB1dFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgJ25hbWVMYWJlbCc6ICdOYW1lOicsXG5cbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIGxhYmVsIHRvIHVzZSBmb3IgdGhlIHF1ZXN0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICAncXVlc3Rpb25MYWJlbCc6ICdXaGF0IGlzIHlvdXIgcXVlc3Rpb24/JyxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgbGFiZWwgdG8gdXNlIGZvciB0aGUgUHJpdmFjeSBQb2xpY3lcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICdwcml2YWN5UG9saWN5TGFiZWwnOiAnSSBhZ3JlZSB0byBvdXIgUHJpdmFjeSBQb2xpY3k6JyxcblxuICAvKipcbiAgICogVGhlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIFN1Ym1pdCBidXR0b25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICdidXR0b25MYWJlbCc6ICdTdWJtaXQnXG59O1xuXG4vKipcbiAqIFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCBpcyBhIGNvbXBvbmVudCB0aGF0IGNyZWF0ZXMgYSBmb3JtXG4gKiB0aGF0cyBkaXNwbGF5ZWQgd2hlbmV2ZXIgYSBxdWVyeSBpcyBydW4uIEl0IGVuYWJsZXMgdGhlIHVzZXJcbiAqIHRvIHN1Ym1pdCBxdWVzdGlvbnMgdGhhdCB0aGV5IGNhbnQgZmluZCB0aGUgYW5zd2VyIGZvci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9DT05GSUcsIGNvbmZpZykpO1xuXG4gICAgLyoqXG4gICAgICogUmVmZXJlbmNlIHRvIHRoZSBzdG9yYWdlIG1vZGVsXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuUVVFU1RJT05fU1VCTUlTU0lPTjtcblxuICAgIC8qKlxuICAgICAqIE5PVEUoYmlsbHkpIGlmIHRoaXMgaXMgYSBwYXR0ZXJuIHdlIHdhbnQgdG8gZm9sbG93IGZvciBjb25maWd1cmF0aW9uXG4gICAgICogd2Ugc2hvdWxkIGJha2UgaXQgaW50byB0aGUgY29yZSBjbGFzcy5cbiAgICAgKi9cbiAgICB0aGlzLnZhbGlkYXRlQ29uZmlnKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3F1ZXN0aW9ucy9xdWVzdGlvbnN1Ym1pc3Npb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwdWJsaWMgaW50ZXJmYWNlIGFsaWFzIGZvciB0aGUgY29tcG9uZW50XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1FBU3VibWlzc2lvbic7XG4gIH1cblxuICAvKipcbiAgICogdmFsaWRhdGlvbkNvbmZpZyBjb250YWlucyBhIGJ1bmNoIG9mIHJ1bGVzXG4gICAqIHRoYXQgYXJlIHVzZWQgdG8gdmFsaWRhdGUgYWdpbnN0IGNvbmZpZ3VyYXRpb24gcHJvdmlkZWQgYnkgdGhlIHVzZXJcbiAgICovXG4gIHZhbGlkYXRlQ29uZmlnICgpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmVudGl0eUlkID09PSBudWxsIHx8XG4gICAgICAgIHR5cGVvZiB0aGlzLl9jb25maWcuZW50aXR5SWQgIT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICAnYGVudGl0eUlkYCBpcyBhIHJlcXVpcmVkIGNvbmZpZ3VyYXRpb24gb3B0aW9uIGZvciBRdWVzdGlvbiBTdWJtaXNzaW9uJyxcbiAgICAgICAgJ1F1ZXN0aW9uU3VibWlzc2lvbicpO1xuICAgIH1cbiAgfVxuXG4gIGJlZm9yZU1vdW50ICgpIHtcbiAgICAvLyBBdm9pZCBtb3VudGluZyB0aGUgY29tcG9uZW50IGlmIHRoZXJlcyBubyBkYXRhXG4gICAgLy8gTm90ZSwgMSBiZWNhdXNlIGBjb25maWdgIGlzIGFsd2F5cyBwYXJ0IG9mIHRoZSBzdGF0ZS5cbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5nZXRTdGF0ZSgpKS5sZW5ndGggPiAxO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgbGV0IGZvcm1FbCA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2NvbmZpZy5mb3JtU2VsZWN0b3IpO1xuICAgIGlmIChmb3JtRWwgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmJpbmRBbmFseXRpY3MoZm9ybUVsKTtcbiAgICB0aGlzLmJpbmRGb3JtU3VibWl0KGZvcm1FbCk7XG4gIH1cblxuICAvKipcbiAgICogYmluZEFuYWx5dGljcyB3aWxsIHdpcmUgdXAgRE9NIGV2ZW50IGhvb2tzIHRvIHNlcnZlcnNpZGUgcmVwb3J0aW5nXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1FbFxuICAgKi9cbiAgYmluZEFuYWx5dGljcyAoZm9ybUVsKSB7XG4gICAgaWYgKHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBxdWVzdGlvblRleHRFbCA9IERPTS5xdWVyeShmb3JtRWwsICcuanMtcXVlc3Rpb24tdGV4dCcpO1xuICAgIERPTS5vbihxdWVzdGlvblRleHRFbCwgJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlci5yZXBvcnQobmV3IEFuYWx5dGljc0V2ZW50KCdRVUVTVElPTl9GT0NVUycpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBiaW5kRm9ybVN1Ym1pdCBoYW5kbGVzIHN1Ym1pdHRpbmcgdGhlIHF1ZXN0aW9uIHRvIHRoZSBzZXJ2ZXIuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1FbFxuICAgKi9cbiAgYmluZEZvcm1TdWJtaXQgKGZvcm1FbCkge1xuICAgIERPTS5vbihmb3JtRWwsICdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gVE9ETyhiaWxseSkgd2UgcHJvYmFibHkgd2FudCB0byBkaXNhYmxlIHRoZSBmb3JtIGZyb20gYmVpbmcgc3VibWl0dGVkIHR3aWNlXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IHRoaXMucGFyc2UoZm9ybUVsKTtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMudmFsaWRhdGVSZXF1aXJlZChmb3JtRGF0YSk7XG4gICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKG5ldyBRdWVzdGlvblN1Ym1pc3Npb24oZm9ybURhdGEsIGVycm9ycykpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvcmUuc3VibWl0UXVlc3Rpb24oe1xuICAgICAgICAnZW50aXR5SWQnOiB0aGlzLl9jb25maWcuZW50aXR5SWQsXG4gICAgICAgICdxdWVzdGlvbkxhbmd1YWdlJzogdGhpcy5fY29uZmlnLmxhbmd1YWdlLFxuICAgICAgICAnc2l0ZSc6ICdGSVJTVF9QQVJUWScsXG4gICAgICAgICduYW1lJzogZm9ybURhdGEubmFtZSxcbiAgICAgICAgJ2VtYWlsJzogZm9ybURhdGEuZW1haWwsXG4gICAgICAgICdxdWVzdGlvblRleHQnOiBmb3JtRGF0YS5xdWVzdGlvblRleHQsXG4gICAgICAgICdxdWVzdGlvbkRlc2NyaXB0aW9uJzogZm9ybURhdGEucXVlc3Rpb25EZXNjcmlwdGlvblxuICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgbmV3IFF1ZXN0aW9uU3VibWlzc2lvbihmb3JtRGF0YSwge1xuICAgICAgICAgICAgICAnbmV0d29yayc6ICdUaGVyZSB3YXMgYSBwcm9ibGVtIHN1Ym1pdHRpbmcgeW91ciBxdWVzdGlvbi4gUGxlYXNlIHRyeSBhZ2Fpbi4nXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRha2VzIHRoZSBmb3JtLCBhbmQgYnVpbGRzIGEgb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgaW5wdXQgbmFtZXNcbiAgICogYW5kIHRleHQgZmllbGRzLlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtRWxcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHBhcnNlIChmb3JtRWwpIHtcbiAgICBjb25zdCBpbnB1dEZpZWxkcyA9IERPTS5xdWVyeUFsbChmb3JtRWwsICcuanMtcXVlc3Rpb24tZmllbGQnKTtcbiAgICBpZiAoIWlucHV0RmllbGRzIHx8IGlucHV0RmllbGRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGxldCBvYmogPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0RmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdmFsID0gaW5wdXRGaWVsZHNbaV0udmFsdWU7XG4gICAgICBpZiAoaW5wdXRGaWVsZHNbaV0udHlwZSA9PT0gJ2NoZWNrYm94JyAmJiB2YWwgPT09ICd0cnVlJykge1xuICAgICAgICB2YWwgPSB0cnVlO1xuICAgICAgfVxuICAgICAgb2JqW2lucHV0RmllbGRzW2ldLm5hbWVdID0gdmFsO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIHRoZSByZXF1aXJlZCBmaWVsZHMgKG9yIHJ1bGVzKSBmb3IgdGhlIGZvcm0gZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gZm9ybURhdGFcbiAgICogQHJldHVybnMge09iamVjdHxib29sZWFufSBlcnJvcnMgb2JqZWN0IGlmIGFueSBlcnJvcnMgZm91bmRcbiAgICovXG4gIHZhbGlkYXRlUmVxdWlyZWQgKGZvcm1EYXRhKSB7XG4gICAgbGV0IGVycm9ycyA9IHt9O1xuICAgIGlmICghZm9ybURhdGEuZW1haWwgfHwgdHlwZW9mIGZvcm1EYXRhLmVtYWlsICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3JzWydlbWFpbCddID0gJ01pc3NpbmcgZW1haWwgYWRkcmVzcyEnO1xuICAgIH1cblxuICAgIGlmICghZm9ybURhdGEucHJpdmFjeVBvbGljeSB8fCBmb3JtRGF0YS5wcml2YWN5UG9saWN5ICE9PSB0cnVlKSB7XG4gICAgICBlcnJvcnNbJ3ByaXZhY3lQb2xpY3knXSA9ICdBcHByb3Zpbmcgb3VyIHByaXZhY3kgcG9saWN5IHRlcm1zIGlzIHJlcXVpcmVkISc7XG4gICAgfVxuXG4gICAgaWYgKCFmb3JtRGF0YS5xdWVzdGlvblRleHQgfHwgdHlwZW9mIGZvcm1EYXRhLnF1ZXN0aW9uVGV4dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9yc1sncXVlc3Rpb25UZXh0J10gPSAnUXVlc3Rpb24gdGV4dCBpcyByZXF1aXJlZCEnO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA+IDAgPyBlcnJvcnMgOiBudWxsO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tICcuL2NvbXBvbmVudG1hbmFnZXInO1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcblxuaW1wb3J0IE5hdmlnYXRpb25Db21wb25lbnQgZnJvbSAnLi9uYXZpZ2F0aW9uL25hdmlnYXRpb25jb21wb25lbnQnO1xuXG5pbXBvcnQgU2VhcmNoQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL3NlYXJjaGNvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyU2VhcmNoQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL2ZpbHRlcnNlYXJjaGNvbXBvbmVudCc7XG5pbXBvcnQgQXV0b0NvbXBsZXRlQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL2F1dG9jb21wbGV0ZWNvbXBvbmVudCc7XG5cbmltcG9ydCBGaWx0ZXJCb3hDb21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL2ZpbHRlcmJveGNvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyT3B0aW9uc0NvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZmlsdGVyb3B0aW9uc2NvbXBvbmVudCc7XG5pbXBvcnQgUmFuZ2VGaWx0ZXJDb21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL3JhbmdlZmlsdGVyY29tcG9uZW50JztcbmltcG9ydCBEYXRlUmFuZ2VGaWx0ZXJDb21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL2RhdGVyYW5nZWZpbHRlcmNvbXBvbmVudCc7XG5pbXBvcnQgRHluYW1pY0ZpbHRlcnNDb21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL2R5bmFtaWNmaWx0ZXJzY29tcG9uZW50JztcblxuaW1wb3J0IERpcmVjdEFuc3dlckNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvZGlyZWN0YW5zd2VyY29tcG9uZW50JztcbmltcG9ydCBSZXN1bHRzQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9yZXN1bHRzY29tcG9uZW50JztcbmltcG9ydCBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy91bml2ZXJzYWxyZXN1bHRzY29tcG9uZW50JztcblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvbG9jYXRpb25yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvZXZlbnRyZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Blb3BsZXJlc3VsdHNpdGVtY29tcG9uZW50JztcblxuaW1wb3J0IE1hcENvbXBvbmVudCBmcm9tICcuL21hcC9tYXBjb21wb25lbnQnO1xuXG5pbXBvcnQgUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IGZyb20gJy4vcXVlc3Rpb25zL3F1ZXN0aW9uc3VibWlzc2lvbmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDT01QT05FTlRfTUFOQUdFUiA9IG5ldyBDb21wb25lbnRNYW5hZ2VyKClcbi8vIENvcmUgQ29tcG9uZW50XG4gIC5yZWdpc3RlcihDb21wb25lbnQpXG5cbi8vIE5hdmlnYXRpb24gQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoTmF2aWdhdGlvbkNvbXBvbmVudClcblxuLy8gU2VhcmNoIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKFNlYXJjaENvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEZpbHRlclNlYXJjaENvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEF1dG9Db21wbGV0ZUNvbXBvbmVudClcblxuLy8gRmlsdGVyIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKEZpbHRlckJveENvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEZpbHRlck9wdGlvbnNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihSYW5nZUZpbHRlckNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKERhdGVSYW5nZUZpbHRlckNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKER5bmFtaWNGaWx0ZXJzQ29tcG9uZW50KVxuXG4vLyBSZXN1bHRzIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKERpcmVjdEFuc3dlckNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihSZXN1bHRzQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoUmVzdWx0c0l0ZW1Db21wb25lbnQpXG4gIC5yZWdpc3RlcihMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50KVxuXG4gIC5yZWdpc3RlcihNYXBDb21wb25lbnQpXG5cbi8vIFF1ZXN0aW9ucyBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQpO1xuIiwiLyoqIEBtb2R1bGUgVGVtcGxhdGVMb2FkZXIgKi9cblxuaW1wb3J0IERPTSBmcm9tICcuLi9kb20vZG9tJztcbmltcG9ydCB7IENPTVBJTEVEX1RFTVBMQVRFU19VUkwgfSBmcm9tICcuLi8uLi9jb3JlL2NvbnN0YW50cyc7XG5cbi8qKlxuICogVGVtcGxhdGVMb2FkZXIgZXhwb3NlcyBhbiBpbnRlcmZhY2UgZm9yIGxvYWRpbmcgdGVtcGxhdGVzIGFzeW5jaHJvbm91c2x5XG4gKiBmcm9tIHRoZSBzZXJ2ZXIgYW5kIHJlZ2lzdGVycyB0aGVtIHdpdGggdGhlIHByb3BlciByZW5kZXJlci5cbiAqIEl0IGFsc28gYWxsb3dzIHlvdSB0byBhc3NpZ24gdGhlbSBzeW5jaHJvbm91c2x5LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZUxvYWRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBpZiAoIVRlbXBsYXRlTG9hZGVyLnNldEluc3RhbmNlKHRoaXMpKSB7XG4gICAgICByZXR1cm4gVGVtcGxhdGVMb2FkZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgdXJsIHRvIGZldGNoIGNvbXBpbGVkIHRlbXBsYXRlcyBmcm9tXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlVXJsID0gY29uZmlnLnRlbXBsYXRlVXJsIHx8IENPTVBJTEVEX1RFTVBMQVRFU19VUkw7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB7fTtcbiAgICB0aGlzLl9vbkxvYWRlZCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHRoaXMuX2luaXQoKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRJbnN0YW5jZSAoaW5zdGFuY2UpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UgKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgX2luaXQgKCkge1xuICAgIHRoaXMuZmV0Y2hUZW1wbGF0ZXMoKTtcbiAgfVxuXG4gIGZldGNoVGVtcGxhdGVzICgpIHtcbiAgICAvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgdGVtcGxhdGVzIGxvYWRlZCwgZG8gbm90aGluZ1xuICAgIGxldCBub2RlID0gRE9NLnF1ZXJ5KCcjeWV4dC1hbnN3ZXJzLXRlbXBsYXRlcycpO1xuICAgIGlmIChub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSW5qZWN0IGEgc2NyaXB0IHRvIGZldGNoIHRoZSBjb21waWxlZCB0ZW1wbGF0ZXMsXG4gICAgLy8gd3JhcHBpbmcgaXQgYSBQcm9taXNlIGZvciBjbGVhbmxpbmVzc1xuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBzY3JpcHQgPSBET00uY3JlYXRlRWwoJ3NjcmlwdCcsIHtcbiAgICAgICAgaWQ6ICd5ZXh0LWFuc3dlcnMtdGVtcGxhdGVzJyxcbiAgICAgICAgb25sb2FkOiByZXNvbHZlLFxuICAgICAgICBvbmVycm9yOiByZWplY3QsXG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBzcmM6IHRoaXMuX3RlbXBsYXRlVXJsXG4gICAgICB9KTtcblxuICAgICAgRE9NLmFwcGVuZCgnYm9keScsIHNjcmlwdCk7XG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgLy8gVE9ETyhiaWxseSkgSW1wbG1lbmV0IGVycm9yIGhhbmRsaW5nIGhlcmUgKGUuZy4gcmVxdWVzdCBjb3VsZCBmYWlsKVxuICAgICAgICBjb25zb2xlLmxvZygnVGVtcGxhdGVzIGxvYWRlZCBzdWNjZXNzZnVsbHkhJyk7XG4gICAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZWdpc3RlciB0aGUgdGVtcGxhdGVzIGludGVybmFsbHkgc28gdGhhdCB0aGV5IGNhbiBiZSBsYXRlciBjb25zdW1lZFxuICAgKiAoZS5nLiBieSBjb21wb25lbnRzIGFuZCByZW5kZXJlcnMpIHdpdGggY29udmllbmllbmNlLlxuICAgKlxuICAgKiBgZmV0Y2hUZW1wbGF0ZXNgIHdpbGwgYXV0b21hdGljYWxseSBjYWxsIHRoaXMsIHByb3ZpZGluZyB0aGUgY29tcGlsZWQgdGVtcGxhdGVzIGZyb20gdGhlIHNlcnZlci5cbiAgICovXG4gIHJlZ2lzdGVyICh0ZW1wbGF0ZXMpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXM7XG5cbiAgICAvLyBOb3RpZnkgb3VyIGNvbnN1bWVycyB0aGF0IHRoZSB0ZW1wbGF0ZXMgYXJlIGhlcmUgOilcbiAgICB0aGlzLl9vbkxvYWRlZCh0aGlzLl90ZW1wbGF0ZXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb25Mb2FkZWQgKGNiKSB7XG4gICAgdGhpcy5fb25Mb2FkZWQgPSBjYjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCAodGVtcGxhdGVOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlc1t0ZW1wbGF0ZU5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4gVGhlIGludGVybmFsIHRlbXBsYXRlIGNvbGxlY3Rpb25cbiAgICovXG4gIGdldFRlbXBsYXRlcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlcztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuZXhwb3J0IHsgQ09NUE9ORU5UX01BTkFHRVIgfSBmcm9tICcuL2NvbXBvbmVudHMvY29uc3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBET00gfSBmcm9tICcuL2RvbS9kb20nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2hQYXJhbXMgfSBmcm9tICcuL2RvbS9zZWFyY2hwYXJhbXMnO1xuXG5leHBvcnQgeyBSZW5kZXJlcnMgfSBmcm9tICcuL3JlbmRlcmluZy9jb25zdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRlbXBsYXRlTG9hZGVyIH0gZnJvbSAnLi9yZW5kZXJpbmcvdGVtcGxhdGVsb2FkZXInO1xuIiwiLyoqIEBtb2R1bGUgRXJyb3JSZXBvcnRlciAqL1xuXG5pbXBvcnQgeyBBbnN3ZXJzQmFzZUVycm9yIH0gZnJvbSAnLi9lcnJvcnMnO1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IHsgTElCX1ZFUlNJT04gfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEVycm9yUmVwb3J0ZXIgaXMgdXNlZCBmb3IgcmVwb3J0aW5nIGVycm9ycyB0byB0aGUgc2VydmVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yUmVwb3J0ZXIge1xuICBjb25zdHJ1Y3RvciAoYXBpS2V5LCBhbnN3ZXJzS2V5KSB7XG4gICAgLyoqXG4gICAgICogVGhlIGFwaUtleSB0byB1c2UgZm9yIHJlcG9ydGluZ1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5hcGlLZXkgPSBhcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYW5zd2Vyc0tleSB0byB1c2Ugd2hlbiByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuYW5zd2Vyc0tleSA9IGFuc3dlcnNLZXk7XG4gIH1cblxuICAvKipcbiAgICogcmVwb3J0IHNlbmRzIGEgbmV0d29yayByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdG8gYmUgbG9nZ2VkXG4gICAqIEBwYXJhbSB7QW5zd2Vyc0Jhc2VFcnJvcn0gVGhlIGVycm9yIHRvIGJlIHJlcG9ydGVkXG4gICAqL1xuICByZXBvcnQgKGVycikge1xuICAgIGlmICghKGVyciBpbnN0YW5jZW9mIEFuc3dlcnNCYXNlRXJyb3IpIHx8IGVyci5yZXBvcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVyci5yZXBvcnRlZCA9IHRydWU7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9lcnJvcnMnLFxuICAgICAgYXBpS2V5OiB0aGlzLmFwaUtleSxcbiAgICAgIHZlcnNpb246IDIwMTkwMzAxLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdlcnJvcic6IGVyci50b0pzb24oKSxcbiAgICAgICAgJ2xpYlZlcnNpb24nOiBMSUJfVkVSU0lPTixcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLmFuc3dlcnNLZXlcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlcXVlc3QuZ2V0KClcbiAgICAgIC5jYXRjaChjb25zb2xlLmVycik7XG5cbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5pbXBvcnQgQ29yZSBmcm9tICcuL2NvcmUvY29yZSc7XG5cbmltcG9ydCB7XG4gIFRlbXBsYXRlTG9hZGVyLFxuICBDT01QT05FTlRfTUFOQUdFUixcbiAgUmVuZGVyZXJzLFxuICBET01cbn0gZnJvbSAnLi91aS9pbmRleCc7XG5cbmltcG9ydCBFcnJvclJlcG9ydGVyIGZyb20gJy4vY29yZS9lcnJvcnMvZXJyb3JyZXBvcnRlcic7XG5pbXBvcnQgeyBBbmFseXRpY3NSZXBvcnRlciB9IGZyb20gJy4vY29yZSc7XG5cbi8qKlxuICogVGhlIG1haW4gQW5zd2VycyBpbnRlcmZhY2VcbiAqL1xuY2xhc3MgQW5zd2VycyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBpZiAoIUFuc3dlcnMuc2V0SW5zdGFuY2UodGhpcykpIHtcbiAgICAgIHJldHVybiBBbnN3ZXJzLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2Ugb2YgdGhlIHJlbmRlcmVyIHRvIHVzZSBmb3IgdGhlIGNvbXBvbmVudHNcbiAgICAgKiBUaGlzIGlzIHByb3ZpZGVkIGR1cmluZyBpbml0aWFsaXphdGlvbi5cbiAgICAgKiBAdHlwZSB7UmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcnMuSGFuZGxlYmFycygpO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCBtYW5hZ2VyXG4gICAgICogQHR5cGUge0NvbXBvbmVudE1hbmFnZXJ9XG4gICAgICovXG4gICAgdGhpcy5jb21wb25lbnRzID0gQ09NUE9ORU5UX01BTkFHRVI7XG5cbiAgICAvKipcbiAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGludm9rZSBvbmNlIHRoZSBsaWJyYXJ5IGlzIHJlYWR5LlxuICAgICAqIFR5cGljYWxseSBmaXJlZCBhZnRlciB0ZW1wbGF0ZXMgYXJlIGZldGNoZWQgZnJvbSBzZXJ2ZXIgZm9yIHJlbmRlcmluZy5cbiAgICAgKi9cbiAgICB0aGlzLl9vblJlYWR5ID0gZnVuY3Rpb24gKCkge307XG4gIH1cblxuICBzdGF0aWMgc2V0SW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIGluaXQgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvcmUgPSBuZXcgQ29yZSh7XG4gICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgICBhbnN3ZXJzS2V5OiBjb25maWcuYW5zd2Vyc0tleSxcbiAgICAgIGxvY2FsZTogY29uZmlnLmxvY2FsZVxuICAgIH0pO1xuXG4gICAgdGhpcy5jb21wb25lbnRzXG4gICAgICAuc2V0Q29yZShjb3JlKVxuICAgICAgLnNldFJlbmRlcmVyKHRoaXMucmVuZGVyZXIpO1xuXG4gICAgaWYgKGNvbmZpZy5idXNpbmVzc0lkKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc2V0QW5hbHl0aWNzUmVwb3J0ZXIoXG4gICAgICAgIG5ldyBBbmFseXRpY3NSZXBvcnRlcihcbiAgICAgICAgICBjb3JlLFxuICAgICAgICAgIGNvbmZpZy5hbnN3ZXJzS2V5LFxuICAgICAgICAgIGNvbmZpZy5idXNpbmVzc0lkLFxuICAgICAgICAgIGNvbmZpZy5hbmFseXRpY3NPcHRpb25zKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLl9vblJlYWR5ID0gY29uZmlnLm9uUmVhZHkgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICBpZiAoY29uZmlnLnVzZVRlbXBsYXRlcyA9PT0gZmFsc2UgfHwgY29uZmlnLnRlbXBsYXRlQnVuZGxlKSB7XG4gICAgICBpZiAoY29uZmlnLnRlbXBsYXRlQnVuZGxlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5pdChjb25maWcudGVtcGxhdGVCdW5kbGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9vblJlYWR5KCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBUZW1wbGF0ZXMgYXJlIGN1cnJlbnRseSBkb3dubG9hZGVkIHNlcGFyYXRlbHkgZnJvbSB0aGUgQ09SRSBhbmQgVUkgYnVuZGxlLlxuICAgIC8vIEZ1dHVyZSBlbmhhbmNlbWVudCBpcyB0byBzaGlwIHRoZSBjb21wb25lbnRzIHdpdGggdGVtcGxhdGVzIGluIGEgc2VwYXJhdGUgYnVuZGxlLlxuICAgIHRoaXMudGVtcGxhdGVzID0gbmV3IFRlbXBsYXRlTG9hZGVyKHtcbiAgICAgIHRlbXBsYXRlVXJsOiBjb25maWcudGVtcGxhdGVVcmxcbiAgICB9KS5vbkxvYWRlZCgodGVtcGxhdGVzKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmluaXQodGVtcGxhdGVzKTtcblxuICAgICAgdGhpcy5fb25SZWFkeSgpO1xuICAgIH0pO1xuXG4gICAgaWYgKCFjb25maWcuc3VwcHJlc3NFcnJvclJlcG9ydHMpIHtcbiAgICAgIHRoaXMuX2Vycm9yUmVwb3J0ZXIgPSBuZXcgRXJyb3JSZXBvcnRlcihjb25maWcuYXBpS2V5LCBjb25maWcuYW5zd2Vyc0tleSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlID0+IHRoaXMuX2Vycm9yUmVwb3J0ZXIucmVwb3J0KGUuZXJyb3IpKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmhhbmRsZWRyZWplY3Rpb24nLCBlID0+IHRoaXMuX2Vycm9yUmVwb3J0ZXIucmVwb3J0KGUuZXJyb3IpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRvbVJlYWR5IChjYikge1xuICAgIERPTS5vblJlYWR5KGNiKTtcbiAgfVxuXG4gIG9uUmVhZHkgKGNiKSB7XG4gICAgdGhpcy5fb25SZWFkeSA9IGNiO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkQ29tcG9uZW50ICh0eXBlLCBvcHRzKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuICAgICAgb3B0cyA9IHtcbiAgICAgICAgY29udGFpbmVyOiBvcHRzXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50cy5jcmVhdGUodHlwZSwgb3B0cykubW91bnQoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNyZWF0ZUNvbXBvbmVudCAob3B0cykge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHMuY3JlYXRlKCdDb21wb25lbnQnLCBvcHRzKS5tb3VudCgpO1xuICB9XG5cbiAgcmVnaXN0ZXJIZWxwZXIgKG5hbWUsIGNiKSB7XG4gICAgdGhpcy5yZW5kZXJlci5yZWdpc3RlckhlbHBlcihuYW1lLCBjYik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuY29uc3QgQU5TV0VSUyA9IG5ldyBBbnN3ZXJzKCk7XG5leHBvcnQgZGVmYXVsdCBBTlNXRVJTO1xuIl0sIm5hbWVzIjpbIk1ldGhvZHMiLCJHRVQiLCJQT1NUIiwiUFVUIiwiREVMRVRFIiwiSHR0cFJlcXVlc3RlciIsInVybCIsImRhdGEiLCJvcHRzIiwicmVxdWVzdCIsImVuY29kZVBhcmFtcyIsIk9iamVjdCIsImFzc2lnbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY3JlZGVudGlhbHMiLCJ1bmRlZmluZWQiLCJtZXRob2QiLCJmZXRjaCIsIm5hdmlnYXRvciIsInNlbmRCZWFjb24iLCJwYXJhbXMiLCJoYXNQYXJhbSIsImluZGV4T2YiLCJzZWFyY2hRdWVyeSIsImtleSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkxJQl9WRVJTSU9OIiwiQVBJX0JBU0VfVVJMIiwiQ09NUElMRURfVEVNUExBVEVTX1VSTCIsIkFOQUxZVElDU19CQVNFX1VSTCIsIlNlYXJjaFBhcmFtcyIsIl9wYXJhbXMiLCJ3aW5kb3ciLCJVUkxTZWFyY2hQYXJhbXMiLCJwYXJzZSIsInNlYXJjaCIsInNsaWNlIiwiZW5jb2RlZFBhcmFtcyIsInNwbGl0IiwiaSIsImxlbmd0aCIsImtleVZhbCIsImRlY29kZSIsInF1ZXJ5IiwiU3RyaW5nIiwibmFtZSIsInZhbHVlIiwic3RyaW5nIiwicHVzaCIsImVuY29kZSIsImpvaW4iLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwibWF0Y2giLCJBcGlSZXF1ZXN0IiwiX3JlcXVlc3RlciIsIl9iYXNlVXJsIiwiYmFzZVVybCIsIl9lbmRwb2ludCIsImVuZHBvaW50IiwiX2FwaUtleSIsImFwaUtleSIsIl92ZXJzaW9uIiwidmVyc2lvbiIsImdldCIsInBvc3QiLCJiYXNlUGFyYW1zIiwidXJsUGFyYW1zIiwibG9jYXRpb24iLCJ0b1N0cmluZyIsImhhcyIsImtleXMiLCJmb3JFYWNoIiwiQW5zd2Vyc0Jhc2VFcnJvciIsImVycm9yQ29kZSIsIm1lc3NhZ2UiLCJib3VuZGFyeSIsImNhdXNlZEJ5IiwiZXJyb3JNZXNzYWdlIiwicmVwb3J0ZWQiLCJidWlsdGluRXJyb3IiLCJlcnJvciIsIkFuc3dlcnNCYXNpY0Vycm9yIiwic3RhY2siLCJFcnJvciIsIkFuc3dlcnNDb21wb25lbnRFcnJvciIsImNvbXBvbmVudCIsIkFuc3dlcnNFbmRwb2ludEVycm9yIiwiQW5zd2Vyc0NvcmVFcnJvciIsIkFuc3dlcnNTdG9yYWdlRXJyb3IiLCJzdG9yYWdlS2V5IiwiQW5zd2Vyc0FuYWx5dGljc0Vycm9yIiwiZXZlbnQiLCJTZWFyY2hBcGkiLCJjb25maWciLCJhbnN3ZXJzS2V5IiwiX2Fuc3dlcnNLZXkiLCJsb2NhbGUiLCJfbG9jYWxlIiwidmVydGljYWxLZXkiLCJpbnB1dCIsImZpbHRlciIsImZhY2V0RmlsdGVyIiwibGltaXQiLCJvZmZzZXQiLCJpZCIsImlzRHluYW1pY0ZpbHRlcnNFbmFibGVkIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInF1ZXJ5U3RyaW5nIiwiQXV0b0NvbXBsZXRlRGF0YSIsInNlY3Rpb25zIiwicXVlcnlJZCIsImZyZWV6ZSIsIm1hcCIsInMiLCJsYWJlbCIsInJlc3VsdHMiLCJyIiwiQXV0b0NvbXBsZXRlUmVzdWx0IiwiaGlnaGxpZ2h0ZWRWYWx1ZSIsImhpZ2hsaWdodCIsIm1hdGNoZWRTdWJzdHJpbmdzIiwic2hvcnRWYWx1ZSIsInZhbCIsInNvcnQiLCJhIiwiYiIsIm5leHRTdGFydCIsImoiLCJzdGFydCIsIk51bWJlciIsImVuZCIsIkF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lciIsIm1vZHVsZUlkIiwiZnJvbSIsIkF1dG9Db21wbGV0ZUFwaSIsImJhcktleSIsImNhdGNoIiwidmVydGljYWwiLCJ1bml2ZXJzYWwiLCJRdWVzdGlvbkFuc3dlckFwaSIsInF1ZXN0aW9uIiwiZW50aXR5SWQiLCJzaXRlIiwiZW1haWwiLCJxdWVzdGlvblRleHQiLCJxdWVzdGlvbkRlc2NyaXB0aW9uIiwicXVlc3Rpb25MYW5ndWFnZSIsIlBSRV9TRUFSQ0giLCJTRUFSQ0hfTE9BRElORyIsIlNFQVJDSF9DT01QTEVURSIsIlJlc3VsdCIsIl9yYXciLCJyYXciLCJvcmRpbmFsIiwidGl0bGUiLCJkZXRhaWxzIiwibGluayIsInN1YnRpdGxlIiwibW9kaWZpZXIiLCJiaWdEYXRlIiwiaW1hZ2UiLCJjYWxsc1RvQWN0aW9uIiwiUmVzdWx0RmFjdG9yeSIsInJlc3VsdHNEYXRhIiwiaHRtbFNuaXBwZXQiLCJmcm9tR29vZ2xlQ3VzdG9tU2VhcmNoRW5naW5lIiwiZnJvbUdlbmVyaWMiLCJpbmRleCIsImRlc2NyaXB0aW9uIiwid2Vic2l0ZSIsImh0bWxUaXRsZSIsIlNlY3Rpb24iLCJzZWFyY2hTdGF0ZSIsIlNlYXJjaFN0YXRlcyIsInZlcnRpY2FsQ29uZmlnSWQiLCJyZXN1bHRzQ291bnQiLCJlbmNvZGVkU3RhdGUiLCJhcHBsaWVkUXVlcnlGaWx0ZXJzIiwiQXBwbGllZFF1ZXJ5RmlsdGVyIiwiZmFjZXRzIiwicGFyc2VNYXAiLCJ2ZXJ0aWNhbFVSTCIsIm1hcE1hcmtlcnMiLCJjZW50ZXJDb29yZGluYXRlcyIsInJlc3VsdCIsInlleHREaXNwbGF5Q29vcmRpbmF0ZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiaXRlbSIsIm1vZHVsZXMiLCJ1cmxzIiwiQXJyYXkiLCJpc0FycmF5IiwiYXBwbGllZFF1ZXJ5RmlsdGVyIiwiZGlzcGxheUtleSIsImRpc3BsYXlWYWx1ZSIsImZpbHRlcnMiLCJVbml2ZXJzYWxSZXN1bHRzIiwiRGlyZWN0QW5zd2VyIiwiZGlyZWN0QW5zd2VyIiwiTmF2aWdhdGlvbiIsInRhYk9yZGVyIiwibmF2IiwiVmVydGljYWxSZXN1bHRzIiwibWVyZ2VkIiwiY29uY2F0IiwiTkFWSUdBVElPTiIsIlVOSVZFUlNBTF9SRVNVTFRTIiwiVkVSVElDQUxfUkVTVUxUUyIsIkFVVE9DT01QTEVURSIsIkRJUkVDVF9BTlNXRVIiLCJGSUxURVIiLCJRVUVSWSIsIlFVRVJZX0lEIiwiRkFDRVRfRklMVEVSIiwiRFlOQU1JQ19GSUxURVJTIiwiU0VBUkNIX0xJTUlUIiwiUVVFU1RJT05fU1VCTUlTU0lPTiIsIkR5bmFtaWNGaWx0ZXJzIiwiZHluYW1pY0ZpbHRlcnMiLCJmIiwiZmllbGRJZCIsIm9wdGlvbnMiLCJvIiwiY291bnRMYWJlbCIsInNlbGVjdGVkIiwiU2VhcmNoRGF0YVRyYW5zZm9ybWVyIiwiU3RvcmFnZUtleXMiLCJFdmVudEVtaXR0ZXIiLCJfbGlzdGVuZXJzIiwiZXZ0IiwiY2IiLCJvbmNlIiwib24iLCJsaXN0ZW5lcnMiLCJrZWVwIiwiTW9kdWxlRGF0YSIsIl9pZCIsIl9oaXN0b3J5IiwiX2RhdGEiLCJzZXQiLCJuZXdEYXRhIiwiY2FwdHVyZVByZXZpb3VzIiwiZW1pdCIsInNoaWZ0IiwicHJldmlvdXMiLCJfcHJldmlvdXMiLCJwb3AiLCJTdG9yYWdlIiwiX21vZHVsZURhdGFDb250YWluZXIiLCJfZnV0dXJlTGlzdGVuZXJzIiwiX2luaXREYXRhQ29udGFpbmVyIiwiX2FwcGx5RnV0dXJlTGlzdGVuZXJzIiwiZGF0YUtleSIsInN0YXJ0c1dpdGgiLCJtb2R1bGVEYXRhIiwib2ZmIiwiZnV0dXJlcyIsImZ1dHVyZSIsIlF1ZXN0aW9uU3VibWlzc2lvbiIsImVycm9ycyIsInByaXZhY3lQb2xpY3kiLCJxdWVzdGlvblN1Ym1pdHRlZCIsIkNvcmUiLCJzdG9yYWdlIiwiX3NlYXJjaGVyIiwiX2F1dG9Db21wbGV0ZSIsIl9xdWVzdGlvbkFuc3dlciIsImFwcGVuZCIsInNlYXJjaExvYWRpbmciLCJ2ZXJ0aWNhbFNlYXJjaCIsImdldFN0YXRlIiwiX2lzRHluYW1pY0ZpbHRlcnNFbmFibGVkIiwidHJhbnNmb3JtVmVydGljYWwiLCJtZXJnZWRSZXN1bHRzIiwidW5pdmVyc2FsU2VhcmNoIiwidHJhbnNmb3JtIiwibmFtZXNwYWNlIiwicXVlcnlVbml2ZXJzYWwiLCJxdWVyeVZlcnRpY2FsIiwicXVlcnlGaWx0ZXIiLCJzdWJtaXRRdWVzdGlvbiIsInN1Ym1pdHRlZCIsIkNvbXBvbmVudE1hbmFnZXIiLCJzZXRJbnN0YW5jZSIsImdldEluc3RhbmNlIiwiX2NvbXBvbmVudFJlZ2lzdHJ5IiwiX2FjdGl2ZUNvbXBvbmVudHMiLCJfY29yZSIsIl9yZW5kZXJlciIsIl9hbmFseXRpY3NSZXBvcnRlciIsInJlbmRlcmVyIiwiY29yZSIsInJlcG9ydGVyIiwiY29tcG9uZW50Q2xhenoiLCJ0eXBlIiwiY29tcG9uZW50VHlwZSIsImFuYWx5dGljc1JlcG9ydGVyIiwiY29tcG9uZW50TWFuYWdlciIsImNvbXBvbmVudENsYXNzIiwiYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkIiwic29tZSIsImMiLCJpbml0Iiwic2V0U3RhdGUiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJmaW5kIiwiY29uc3RydWN0b3IiLCJpbnN0YW5jZSIsIlJlbmRlcmVyIiwidGVtcGxhdGUiLCJIYW5kbGViYXJzUmVuZGVyZXIiLCJ0ZW1wbGF0ZXMiLCJfaGFuZGxlYmFycyIsIl9oYiIsIl90ZW1wbGF0ZXMiLCJfcmVnaXN0ZXJDdXN0b21IZWxwZXJzIiwicmVnaXN0ZXJIZWxwZXIiLCJjb21waWxlIiwidGVtcGxhdGVOYW1lIiwiZSIsImFyZzEiLCJhcmcyIiwiZm4iLCJpbnZlcnNlIiwicGhvbmVOdW1iZXJTdHJpbmciLCJjbGVhbmVkIiwiaW50bENvZGUiLCJhcmdzIiwiYXJndW1lbnRzIiwicm9vdCIsInYiLCJSZW5kZXJlcnMiLCJTT1kiLCJIYW5kbGViYXJzIiwiZG9jdW1lbnQiLCJET00iLCJkIiwicCIsImh0bWwiLCJjb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiZnJhZyIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwiYXBwZW5kQ2hpbGQiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJwYXJlbnQiLCJzZWxlY3RvciIsIkhUTUxFbGVtZW50IiwiV2luZG93IiwiSFRNTERvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZWFkeVN0YXRlIiwiZWwiLCJvcHRzX2RhdGEiLCJub2RlIiwicHJvcHMiLCJhZGRDbGFzcyIsImluc2VydEFkamFjZW50SFRNTCIsImNsYXNzTmFtZSIsImNsYXNzZXMiLCJsZW4iLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJzdHlsZXMiLCJwcm9wIiwic3R5bGUiLCJhdHRyIiwic2V0QXR0cmlidXRlIiwic2V0dGluZ3MiLCJFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjdHh0IiwidGFyZ2V0IiwiaXNFcXVhbE5vZGUiLCJtYXRjaGVzIiwicGFyZW50Tm9kZSIsIlN0YXRlIiwiX3N0YXRlIiwib3B0VmFsIiwiX3NldCIsIm9wdFByb3AiLCJBbmFseXRpY3NFdmVudCIsImV2ZW50VHlwZSIsInRvVXBwZXJDYXNlIiwiQW5hbHl0aWNzUmVwb3J0ZXIiLCJidXNpbmVzc0lkIiwiZ2xvYmFsT3B0aW9ucyIsIl9idXNpbmVzc0lkIiwiX2dsb2JhbE9wdGlvbnMiLCJzZXRRdWVyeUlkIiwiYWRkT3B0aW9ucyIsImJlYWNvbiIsInRvQXBpRXZlbnQiLCJDb21wb25lbnQiLCJfY29uZmlnIiwiX3R5cGUiLCJfcGFyZW50IiwiX2NoaWxkcmVuIiwic3RhdGUiLCJfYW5hbHl0aWNzT3B0aW9ucyIsImFuYWx5dGljc09wdGlvbnMiLCJfY29udGFpbmVyIiwiY3JlYXRlRWwiLCJjbGFzcyIsInN1YnN0cmluZyIsIl9jbGFzc05hbWUiLCJfcmVuZGVyIiwicmVuZGVyIiwiX3RlbXBsYXRlIiwiX3RlbXBsYXRlTmFtZSIsImRlZmF1bHRUZW1wbGF0ZU5hbWUiLCJfaXNNb3VudGVkIiwidHJhbnNmb3JtRGF0YSIsIm9uQ3JlYXRlIiwib25Nb3VudCIsIm9uVXBkYXRlIiwibW91bnQiLCJuZXdTdGF0ZSIsImNoaWxkQ29tcG9uZW50IiwiY3JlYXRlIiwiX3BhcmVudE9wdHMiLCJyZW1vdmUiLCJ1bk1vdW50IiwiZW1wdHkiLCJiZWZvcmVNb3VudCIsImFzSlNPTiIsIl9vbk1vdW50IiwiZG9tSG9va3MiLCJxdWVyeUFsbCIsIl9jcmVhdGVBbmFseXRpY3NIb29rIiwiYmluZCIsImNoaWxkIiwiYmVmb3JlUmVuZGVyIiwiZG9tQ29tcG9uZW50cyIsIl9jcmVhdGVTdWJjb21wb25lbnQiLCJhZnRlclJlbmRlciIsImRvbUNvbXBvbmVudCIsImRhdGFzZXQiLCJjaGlsZERhdGEiLCJhZGRDaGlsZCIsImNoaWxkSFRNTCIsImlzQW5hbHl0aWNzQXR0YWNoZWQiLCJldmVudHR5cGUiLCJldmVudGxhYmVsIiwiZXZlbnRvcHRpb25zIiwicmVwb3J0IiwiVGFiIiwiY29uZmlnSWQiLCJpc0ZpcnN0IiwiaXNBY3RpdmUiLCJ0YWJzQ29uZmlnIiwidGFicyIsInRhYiIsIk5hdmlnYXRpb25Db21wb25lbnQiLCJfdGFicyIsIl90YWJPcmRlciIsImdldERlZmF1bHRUYWJPcmRlciIsImdldFVybFBhcmFtcyIsIm1lcmdlVGFiT3JkZXIiLCJnZW5lcmF0ZVRhYlVybCIsImluY2x1ZGVzIiwidW5zaGlmdCIsIm90aGVyVGFiT3JkZXIiLCJ0YWJDb25maWciLCJGaWx0ZXIiLCJyZXNwb25zZUZpbHRlciIsImdyb3VwcyIsImdyb3VwRmlsdGVycyIsImZpZWxkIiwib3IiLCJhbmQiLCJfZnJvbU1hdGNoZXIiLCJtaW4iLCJtYXgiLCJtYXRjaGVyIiwiU2VhcmNoQ29tcG9uZW50IiwiX2JhcktleSIsIl92ZXJ0aWNhbEtleSIsIl9mb3JtRWwiLCJmb3JtU2VsZWN0b3IiLCJfaW5wdXRFbCIsImlucHV0RWwiLCJsYWJlbFRleHQiLCJzdWJtaXRUZXh0Iiwic3VibWl0SWNvbiIsInByb21wdEhlYWRlciIsImF1dG9Gb2N1cyIsInJlZGlyZWN0VXJsIiwiX3NlYXJjaENvb2xkb3duIiwic2VhcmNoQ29vbGRvd24iLCJzZXRRdWVyeSIsImJpbmRCcm93c2VySGlzdG9yeSIsImluaXRTZWFyY2giLCJpbml0QXV0b0NvbXBsZXRlIiwiZm9jdXMiLCJmb3JtIiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImJsdXIiLCJpbnB1dFNlbGVjdG9yIiwib3JpZ2luYWxRdWVyeSIsIm9uU3VibWl0IiwidHJpZ2dlciIsIl90aHJvdHRsZWQiLCJzZXRUaW1lb3V0IiwiYWxsRmlsdGVycyIsImdldEFsbCIsInRvdGFsRmlsdGVyIiwiZ2V0QWN0aXZlQ29tcG9uZW50IiwiRmlsdGVyU2VhcmNoQ29tcG9uZW50IiwiaW5wdXRLZXkiLCJfc3RvcmVPbkNoYW5nZSIsInN0b3JlT25DaGFuZ2UiLCJzZWFyY2hUZXh0Iiwic2V0RmlsdGVyIiwiZnJvbVJlc3BvbnNlIiwiaXNGaWx0ZXJTZWFyY2giLCJvcmlnaW5hbEZpbHRlciIsIl9zYXZlUXVlcnlBbmRGaWx0ZXIiLCJLZXlzIiwiQkFDS1NQQUNFIiwiVEFCIiwiRU5URVIiLCJTSElGVCIsIkNUUkwiLCJBTFQiLCJFU0NBUEUiLCJMRUZUIiwiUklHSFQiLCJVUCIsIkRPV04iLCJMRUZUX09TX0tFWSIsIlJJR0hUX09TX0tFWSIsIlNFTEVDVF9LRVkiLCJBdXRvQ29tcGxldGVDb21wb25lbnQiLCJfYXV0b2NvbXBsZXRlRWxzIiwiYXV0b0NvbXBsZXRlRWxzIiwiX29yaWdpbmFsUXVlcnkiLCJfc2VjdGlvbkluZGV4IiwiX3Jlc3VsdEluZGV4IiwiX29uU3VibWl0Iiwic2VjdGlvbkluZGV4IiwicmVzdWx0SW5kZXgiLCJxdWVyeUlucHV0IiwiY2xvc2UiLCJyZXNldCIsImF1dG9Db21wbGV0ZSIsImhhbmRsZU5hdmlnYXRlUmVzdWx0cyIsImtleUNvZGUiLCJoYW5kbGVTdWJtaXRSZXN1bHQiLCJkZWxlZ2F0ZSIsInNob3J0IiwidXBkYXRlUXVlcnkiLCJoYW5kbGVUeXBpbmciLCJ1cGRhdGVTdGF0ZSIsIm9wdFZhbHVlIiwicXVlcnlFbCIsImlnbm9yZWRLZXlzIiwiYXV0b0NvbXBsZXRlRmlsdGVyIiwiYXV0b0NvbXBsZXRlVmVydGljYWwiLCJhdXRvQ29tcGxldGVVbml2ZXJzYWwiLCJGYWNldCIsImZsYXRGaWx0ZXJzIiwiZmxhdE1hcCIsIiRvciIsIkZpbHRlckJveENvbXBvbmVudCIsIl9maWx0ZXJDb25maWdzIiwiX3NlYXJjaE9uQ2hhbmdlIiwic2VhcmNoT25DaGFuZ2UiLCJfYXBwbHlCdXR0b25TZWxlY3RvciIsImFwcGx5QnV0dG9uU2VsZWN0b3IiLCJfZmlsdGVyQ29tcG9uZW50cyIsIl9maWx0ZXJzIiwiX2lzRHluYW1pYyIsImlzRHluYW1pYyIsImZpbHRlckNvbmZpZ3MiLCJzaG93QXBwbHlCdXR0b24iLCJvbkNoYW5nZSIsIm9uRmlsdGVyQ2hhbmdlIiwiZ2V0RmlsdGVyIiwiYnV0dG9uIiwiX3NhdmVGaWx0ZXJzVG9TdG9yYWdlIiwiX3NlYXJjaCIsInZhbGlkRmlsdGVycyIsImNvbWJpbmVkRmlsdGVyIiwiZnJvbUZpbHRlcnMiLCJzZXRGYWNldEZpbHRlciIsIlNVUFBPUlRFRF9DT05UUk9MUyIsIkZpbHRlck9wdGlvbnNDb21wb25lbnQiLCJjb250cm9sIiwiX29wdGlvbnMiLCJfY29udHJvbCIsIl9vcHRpb25TZWxlY3RvciIsIm9wdGlvblNlbGVjdG9yIiwiX29uQ2hhbmdlIiwiX2xhYmVsIiwidG9Mb3dlckNhc2UiLCJfdXBkYXRlT3B0aW9uIiwicGFyc2VJbnQiLCJjaGVja2VkIiwiX2J1aWxkRmlsdGVyIiwiZWxlbWVudHMiLCJfYXBwbHlGaWx0ZXIiLCJlcXVhbCIsImdyb3VwIiwiUmFuZ2VGaWx0ZXJDb21wb25lbnQiLCJfZmllbGQiLCJfcmFuZ2UiLCJpbml0aWFsTWluIiwiaW5pdGlhbE1heCIsIl90aXRsZSIsIl9taW5MYWJlbCIsIm1pbkxhYmVsIiwiX21heExhYmVsIiwibWF4TGFiZWwiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwiX3VwZGF0ZVJhbmdlIiwiaW5jbHVzaXZlUmFuZ2UiLCJEYXRlUmFuZ2VGaWx0ZXJDb21wb25lbnQiLCJfaXNFeGNsdXNpdmUiLCJpc0V4Y2x1c2l2ZSIsInRvZGF5IiwiRGF0ZSIsInRvZGF5U3RyaW5nIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsInBhZFN0YXJ0IiwiZ2V0RGF0ZSIsIl9kYXRlIiwiZGF0ZU1pbiIsImRhdGVNYXgiLCJkYXRlIiwiZXhjbHVzaXZlUmFuZ2UiLCJEeW5hbWljRmlsdGVyc0NvbXBvbmVudCIsIl9maWVsZENvbnRyb2xzIiwiZmllbGRDb250cm9scyIsIl9maWx0ZXJib3giLCJlbmFibGVEeW5hbWljRmlsdGVycyIsIkV2ZW50VHlwZXMiLCJUSFVNQlNfVVAiLCJUSFVNQlNfRE9XTiIsIkRpcmVjdEFuc3dlckNvbXBvbmVudCIsImZvcm1FbCIsIl90aHVtYnNVcFNlbGVjdG9yIiwidGh1bWJzVXBTZWxlY3RvciIsIl90aHVtYnNEb3duU2VsZWN0b3IiLCJ0aHVtYnNEb3duU2VsZWN0b3IiLCJoYXNTdGF0ZSIsImNoZWNrZWRWYWx1ZSIsInJlcG9ydFF1YWxpdHkiLCJpc0dvb2QiLCJSZXN1bHRzSXRlbUNvbXBvbmVudCIsIkxvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQiLCJFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IiwiUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQiLCJNYXBQcm92aWRlciIsIl9oZWlnaHQiLCJoZWlnaHQiLCJfd2lkdGgiLCJ3aWR0aCIsIl96b29tIiwiem9vbSIsIl9kZWZhdWx0UG9zaXRpb24iLCJkZWZhdWx0UG9zaXRpb24iLCJsYXQiLCJsbmciLCJfc2hvd0VtcHR5TWFwIiwic2hvd0VtcHR5TWFwIiwiX21hcCIsIl9pc0xvYWRlZCIsIl9vblBpbkNsaWNrIiwib25QaW5DbGljayIsIl9vbkxvYWRlZCIsIm9uTG9hZGVkIiwiX3BpbkNvbmZpZyIsInBpbiIsIkRFRkFVTFRfUElOX0NPTkZJRyIsImlzTG9hZGVkIiwibWFwRGF0YSIsIm1hcmtlcnMiLCJsb2NhdGlvblRvSXRlbSIsIm0iLCJjb2xsYXBzZWRNYXJrZXJzIiwiZW50cmllcyIsImNvbGxhcHNlZE1hcmtlciIsImljb24iLCJhbmNob3IiLCJzdmciLCJzY2FsZWRTaXplIiwibGFiZWxUeXBlIiwiR29vZ2xlTWFwUHJvdmlkZXIiLCJfY2xpZW50SWQiLCJjbGllbnRJZCIsIl9zaWduYXR1cmUiLCJzaWduYXR1cmUiLCJoYXNWYWxpZENsaWVudENyZWRlbnRpYWxzIiwib25Mb2FkIiwic2NyaXB0Iiwib25sb2FkIiwiYXN5bmMiLCJzcmMiLCJnZW5lcmF0ZUNyZWRlbnRpYWxzIiwiZ29vZ2xlTWFwTWFya2VyQ29uZmlncyIsIkdvb2dsZU1hcE1hcmtlckNvbmZpZyIsImVuY29kZWRNYXJrZXJzIiwic2VyaWFsaXplIiwiX2lzU3RhdGljIiwiY3NzIiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsIl9jb2xsYXBzZU1hcmtlcnMiLCJib3VuZHMiLCJMYXRMbmdCb3VuZHMiLCJtYXJrZXIiLCJNYXJrZXIiLCJhZGRMaXN0ZW5lciIsImV4dGVuZCIsInBvc2l0aW9uIiwiZml0Qm91bmRzIiwic2V0Q2VudGVyIiwiTGF0TG5nIiwic2VyaWFsaXplZE1hcmtlcnMiLCJwaW5Db25maWciLCJwaW5Db25maWdPYmoiLCJQb2ludCIsIngiLCJ5IiwiU2l6ZSIsInciLCJoIiwiTWFwQm94TWFwUHJvdmlkZXIiLCJtYXBib3hnbCIsImFjY2Vzc1Rva2VuIiwicmVsIiwibWFwYm94TWFwTWFya2VyQ29uZmlncyIsIk1hcEJveE1hcmtlckNvbmZpZyIsImNlbnRlciIsIm1hcENlbnRlciIsImdldENlbnRlck1hcmtlciIsIndyYXBwZXIiLCJjb29yZHMiLCJMbmdMYXQiLCJzZXRMbmdMYXQiLCJhZGRUbyIsImdldEVsZW1lbnQiLCJzdGF0aWNNYXBQaW4iLCJQcm92aWRlclR5cGVzIiwiTWFwQ29tcG9uZW50IiwiX21hcFByb3ZpZGVyIiwibWFwUHJvdmlkZXIiLCJpc1N0YXRpYyIsImdldFByb3ZpZGVySW5zdGFuY2UiLCJzZXRUZW1wbGF0ZSIsImdlbmVyYXRlU3RhdGljIiwibG9hZEpTIiwiUmVzdWx0VHlwZSIsIkVWRU5UIiwiTE9DQVRJT04iLCJQRU9QTEUiLCJSZXN1bHRzQ29tcG9uZW50IiwiX2l0ZW1Db25maWciLCJnbG9iYWwiLCJyZW5kZXJJdGVtIiwiaXRlbVRlbXBsYXRlIiwic2V0U2VhcmNoTGltaXQiLCJjb25maWd1cmVJdGVtIiwiaXNQcmVTZWFyY2giLCJpc1NlYXJjaExvYWRpbmciLCJpc1NlYXJjaENvbXBsZXRlIiwiaW5jbHVkZU1hcCIsIm1hcENvbmZpZyIsInNldEl0ZW1SZW5kZXIiLCJzZXRJdGVtVGVtcGxhdGUiLCJjbGF6eiIsImdldEl0ZW1Db21wb25lbnQiLCJjb21wIiwibmV3T3B0cyIsImdsb2JhbENvbmZpZyIsIml0ZW1Db25maWciLCJoYXNHbG9iYWxSZW5kZXIiLCJoYXNHbG9iYWxUZW1wbGF0ZSIsInNldFJlbmRlciIsIlVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQiLCJfbGltaXQiLCJnZXRDaGlsZENvbmZpZyIsIkRFRkFVTFRfQ09ORklHIiwiUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IiwidmFsaWRhdGVDb25maWciLCJiaW5kQW5hbHl0aWNzIiwiYmluZEZvcm1TdWJtaXQiLCJxdWVzdGlvblRleHRFbCIsImZvcm1EYXRhIiwidmFsaWRhdGVSZXF1aXJlZCIsImxhbmd1YWdlIiwiaW5wdXRGaWVsZHMiLCJvYmoiLCJDT01QT05FTlRfTUFOQUdFUiIsInJlZ2lzdGVyIiwiVGVtcGxhdGVMb2FkZXIiLCJfdGVtcGxhdGVVcmwiLCJ0ZW1wbGF0ZVVybCIsIl9pbml0IiwiZmV0Y2hUZW1wbGF0ZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiRXJyb3JSZXBvcnRlciIsImVyciIsInRvSnNvbiIsIkFuc3dlcnMiLCJjb21wb25lbnRzIiwiX29uUmVhZHkiLCJzZXRDb3JlIiwic2V0UmVuZGVyZXIiLCJzZXRBbmFseXRpY3NSZXBvcnRlciIsIm9uUmVhZHkiLCJ1c2VUZW1wbGF0ZXMiLCJ0ZW1wbGF0ZUJ1bmRsZSIsInN1cHByZXNzRXJyb3JSZXBvcnRzIiwiX2Vycm9yUmVwb3J0ZXIiLCJBTlNXRVJTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQTs7RUFFQTs7RUFFQTs7O0VBR0EsSUFBTUEsT0FBTyxHQUFHO0VBQ2RDLEVBQUFBLEdBQUcsRUFBRSxLQURTO0VBRWRDLEVBQUFBLElBQUksRUFBRSxNQUZRO0VBR2RDLEVBQUFBLEdBQUcsRUFBRSxLQUhTO0VBSWRDLEVBQUFBLE1BQU0sRUFBRTtFQUpNLENBQWhCO0VBT0E7Ozs7OztNQUtxQkM7Ozs7Ozs7Ozs7RUFDbkI7Ozs7OzswQkFNS0MsS0FB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