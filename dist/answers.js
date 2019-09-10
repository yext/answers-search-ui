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
  var LIB_VERSION = 'v0.8.1';
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
          endpoint: '/v2/accounts/me/answers/vertical/autocomplete',
          apiKey: this._apiKey,
          version: this._version,
          params: {
            'input': input,
            'answersKey': this._answersKey,
            'verticalKey': verticalKey,
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
          details: this.truncate(data.description),
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
    PARAMS: 'params',
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
          this.globalStorage.set(StorageKeys.VERTICAL_RESULTS, VerticalResults.searchLoading());
        }

        return this._searcher.verticalSearch(verticalKey, _objectSpread({
          limit: this.globalStorage.getState(StorageKeys.SEARCH_LIMIT)
        }, query, {
          isDynamicFiltersEnabled: this._isDynamicFiltersEnabled
        })).then(function (response) {
          return SearchDataTransformer.transformVertical(response);
        }).then(function (data) {
          _this.globalStorage.set(StorageKeys.QUERY_ID, data[StorageKeys.QUERY_ID]);

          _this.globalStorage.set(StorageKeys.NAVIGATION, data[StorageKeys.NAVIGATION]);

          if (query.append) {
            var mergedResults = _this.globalStorage.getState(StorageKeys.VERTICAL_RESULTS).append(data[StorageKeys.VERTICAL_RESULTS]);

            _this.globalStorage.set(StorageKeys.VERTICAL_RESULTS, mergedResults);
          } else {
            _this.globalStorage.set(StorageKeys.VERTICAL_RESULTS, data[StorageKeys.VERTICAL_RESULTS]);
          }

          if (data[StorageKeys.DYNAMIC_FILTERS]) {
            _this.globalStorage.set(StorageKeys.DYNAMIC_FILTERS, data[StorageKeys.DYNAMIC_FILTERS]);
          }
        });
      }
    }, {
      key: "search",
      value: function search(queryString, urls) {
        var _this2 = this;

        this.globalStorage.set(StorageKeys.UNIVERSAL_RESULTS, UniversalResults.searchLoading());
        return this._searcher.universalSearch(queryString).then(function (response) {
          return SearchDataTransformer.transform(response, urls);
        }).then(function (data) {
          _this2.globalStorage.set(StorageKeys.QUERY_ID, data[StorageKeys.QUERY_ID]);

          _this2.globalStorage.set(StorageKeys.NAVIGATION, data[StorageKeys.NAVIGATION]);

          _this2.globalStorage.set(StorageKeys.DIRECT_ANSWER, data[StorageKeys.DIRECT_ANSWER]);

          _this2.globalStorage.set(StorageKeys.UNIVERSAL_RESULTS, data[StorageKeys.UNIVERSAL_RESULTS], urls);

          _this2.globalStorage.set(StorageKeys.QUESTION_SUBMISSION, new QuestionSubmission({
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
          _this5.globalStorage.set("".concat(StorageKeys.AUTOCOMPLETE, ".").concat(namespace), data);
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
        var _arr = Object.entries(data);

        for (var _i = 0; _i < _arr.length; _i++) {
          var _arr$_i = _slicedToArray(_arr[_i], 2),
              key = _arr$_i[0],
              val = _arr$_i[1];

          if (val) {
            this.set(key, val);
          }
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

        var _arr2 = Object.keys(this._moduleDataContainer);

        for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
          var dataKey = _arr2[_i2];

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
        this._children = [];
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
        var childData = data[prop] || {}; // TODO(billy) Right now, if we provide an array as the data prop,
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
      /**
       * Handles to the close modal click listeners, to be removed in unMount()
       * @type {array}
       * @private
       */

      _this._listenersToTearDown = [];
      /**
       * Information on the mobile media query applied to the doc
       * @type {MediaQueryList}
       */

      _this._mql = window.matchMedia('(max-width: 768px)');
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
      /**
       * If there are too many tabs, create a "more"
       * dropdown menu to display tabs least relevant
       * to the query.
       *
       * @override
       */

    }, {
      key: "onMount",
      value: function onMount() {
        var parentEl = DOM.query(this._container, '.js-yxt-navContainer');
        var navItemEls = DOM.queryAll(this._container, '.js-yxt-navItem');
        var modalEl = DOM.query(this._container, '.js-yxt-navModal');
        var moreButtonEl = DOM.query(this._container, '.js-yxt-navMore');
        var parentWidth = parentEl.offsetWidth;
        var moreButtonWidth = moreButtonEl.offsetWidth;
        var elsToMove = []; // Collect links that need to be added to the dropdown

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = navItemEls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var navItemEl = _step.value;
            var childPos = navItemEl.offsetLeft;
            var childWidth = navItemEl.offsetWidth; // Determines if the nav item is overflowing and needs to be added to the dropdown
            // Offsets by the width of the more button to make sure there is enough space to add it

            if (childPos + childWidth > parentWidth - moreButtonWidth) {
              elsToMove.push(navItemEl);
            }
          } // Shows the 'More' button if there are verticals to display in the dropdown

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

        if (elsToMove.length) {
          moreButtonEl.classList.remove('yxt-Nav-item--more');
        } // Adds cutoff elements to the dropdown


        for (var _i = 0; _i < elsToMove.length; _i++) {
          var _el3 = elsToMove[_i];
          modalEl.appendChild(_el3);

          _el3.classList.add('yxt-Nav-dropDownItem');

          _el3.classList.remove('yxt-Nav-item');
        } // Click listener to display/hide dropwdown, will be removed by DOM.empty in onUnMount()


        moreButtonEl.addEventListener('click', function () {
          modalEl.classList.toggle('is-active');
        }); // Close the modal when clicking outside of it, will be removed by DOM.empty in onUnMount()

        var closeModalClickListener = function closeModalClickListener(e) {
          // TODO (bmcginnis): this is not robust if they have an image in the button or modal
          if (e.target === modalEl || e.target === moreButtonEl) {
            return;
          }

          modalEl.classList.remove('is-active');
        };

        window.addEventListener('click', closeModalClickListener);

        this._listenersToTearDown.push({
          type: 'click',
          fn: closeModalClickListener
        }); // TODO: (bmcginnis) move keyboard key detection from Autocomplete into common object so we can detect escape key
        // here and close the modal.
        // TODO (creotutar) this is repeat code we probably want to split up set-up and showing/hiding
        // the more button


        if (this._mql.matches) {
          for (var _i2 = 0; _i2 < elsToMove.length; _i2++) {
            var el = elsToMove[_i2];
            parentEl.appendChild(el);
            el.classList.remove('yxt-Nav-dropDownItem');
            el.classList.add('yxt-Nav-item');
          }

          moreButtonEl.style.display = 'none';
        }

        var breakpointChange = function breakpointChange(e) {
          if (e.matches) {
            // show scroll
            for (var _i3 = 0; _i3 < elsToMove.length; _i3++) {
              var _el = elsToMove[_i3];
              parentEl.appendChild(_el);

              _el.classList.remove('yxt-Nav-dropDownItem');

              _el.classList.add('yxt-Nav-item');
            } // TODO (creotutar) we should use a class instead of a style change


            moreButtonEl.style.display = 'none';
          } else {
            // show more
            for (var _i4 = 0; _i4 < elsToMove.length; _i4++) {
              var _el2 = elsToMove[_i4];
              modalEl.appendChild(_el2);

              _el2.classList.add('yxt-Nav-dropDownItem');

              _el2.classList.remove('yxt-Nav-item');
            }

            moreButtonEl.style.display = 'flex';
          }
        };

        this._mql.addListener(breakpointChange);

        return _get(_getPrototypeOf(NavigationComponent.prototype), "onMount", this).call(this);
      }
    }, {
      key: "onUnMount",
      value: function onUnMount() {
        this._listenersToTearDown.forEach(function (listener) {
          return window.removeEventListener(listener.type, listener.fn);
        });

        return _get(_getPrototypeOf(NavigationComponent.prototype), "onUnMount", this).call(this);
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
      return _this;
    }

    _createClass(SearchComponent, [{
      key: "onCreate",
      value: function onCreate() {
        if (this.query && this.query.length > 0) {
          this.core.setQuery(this.query);
          this.search(this.query);
        }
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

        this._container.classList.add('yxt-SearchBar-wrapper');

        var form = DOM.query(this._container, formSelector);

        if (!form) {
          throw new Error('Could not initialize SearchBar; Can not find {HTMLElement} `', this._formEl, '`.');
        }

        DOM.on(form, 'submit', function (e) {
          e.preventDefault();
          var inputEl = form.querySelector(_this2._inputEl);
          var query = inputEl.value;
          var params = new SearchParams(window.location.search.substring(1));
          params.set('query', query); // If we have a redirectUrl, we want the form to be
          // serialized and submitted.

          if (typeof _this2.redirectUrl === 'string') {
            window.location.href = _this2.redirectUrl + '?' + params.toString();
            return false;
          }

          inputEl.blur();

          _this2.core.persistentStorage.set(StorageKeys.QUERY, query);

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

        if (this._autocomplete) {
          this._autocomplete.remove();
        }

        this._autocomplete = this.componentManager.create('AutoComplete', {
          parent: this,
          name: "".concat(this.name, ".autocomplete"),
          container: '.yxt-SearchBar-autocomplete',
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
          parent: this,
          name: "".concat(this.name, ".autocomplete"),
          isFilterSearch: true,
          container: '.yxt-SearchBar-autocomplete',
          promptHeader: this.promptHeader,
          originalQuery: this.query,
          originalFilter: this.filter,
          inputEl: inputSelector,
          verticalKey: this._verticalKey,
          barKey: this._barKey,
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
        var queryInput = DOM.query(this._parent._container, this._inputEl);

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

        var queryEl = DOM.query(this._parent._container, this._inputEl);
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
          showApplyButton: !this._searchOnChange,
          eventType: this._isDynamic ? 'FACETING' : 'FILTERING'
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
        var allFilters = this.core.globalStorage.getAll(StorageKeys.FILTER);
        var totalFilter = allFilters.length > 1 ? Filter.and.apply(Filter, _toConsumableArray(allFilters)) : allFilters[0]; // TODO(jdelerme): check empty object

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

      _classCallCheck(this, FilterOptionsComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterOptionsComponent).call(this, config));

      if (!config.control || !SUPPORTED_CONTROLS.includes(config.control)) {
        throw new AnswersComponentError('FilterOptions requires a valid "control" to be provided', 'FilterOptions');
      }

      if (!config.options) {
        throw new AnswersComponentError('FilterOptions component requires options to be provided', 'FilterOptions');
      }

      var selectedOptions = _this.core.globalStorage.getState(_this.name) || [];
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

      var minVal = _this.core.globalStorage.getState("".concat(_this.name, ".min"));

      var maxVal = _this.core.globalStorage.getState("".concat(_this.name, ".max"));
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

      _classCallCheck(this, GeoLocationComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(GeoLocationComponent).call(this, _objectSpread({}, DEFAULT_CONFIG, config)));
      /**
       * The query string to use for the input box, provided to template for rendering.
       * Optionally provided
       * @type {string}
       */

      _this.query = _this.core.globalStorage.getState("".concat(StorageKeys.QUERY, ".").concat(_this.name)) || '';

      _this.core.globalStorage.on('update', "".concat(StorageKeys.QUERY, ".").concat(_this.name), function (q) {
        _this.query = q;

        _this.setState();
      });
      /**
       * The filter string to use for the provided query
       * Optionally provided
       * @type {string}
       */


      _this.filter = _this.core.globalStorage.getState("".concat(StorageKeys.FILTER, ".").concat(_this.name)) || '';

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
          parent: this,
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
            _this4._saveDataToStorage('', _this4._buildFilter(position));

            _this4._enabled = true;

            _this4.setState({});

            _this4.core.persistentStorage.delete("".concat(StorageKeys.QUERY, ".").concat(_this4.name));

            _this4.core.persistentStorage.delete("".concat(StorageKeys.FILTER, ".").concat(_this4.name));
          }, function () {
            return _this4.setState({
              geoError: true
            });
          });
        }
      }
      /**
       * Saves the provided filter under this component's name
       * @param {Filter} filter The filter to save
       * @private
       */

    }, {
      key: "_saveDataToStorage",
      value: function _saveDataToStorage(query, filter) {
        this.core.persistentStorage.set("".concat(StorageKeys.QUERY, ".").concat(this.name), query);
        this.core.persistentStorage.set("".concat(StorageKeys.FILTER, ".").concat(this.name), filter);
        this.core.setFilter(this.name, filter);

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
          ctaLabel: this._config.viewDetailsText.toUpperCase().replace(' ', '_')
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

      _classCallCheck(this, ResultsItemComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ResultsItemComponent).call(this, opts));
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
       * @returns {string}
       */
      value: function eventOptions(entityId) {
        return JSON.stringify({
          verticalConfigId: this._verticalConfigId,
          searcher: this._isUniversal ? 'UNIVERSAL' : 'VERTICAL',
          entityId: entityId
        });
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
          eventOptions: this.eventOptions(data.id)
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
          }); // Apply our search data to our GoogleMap

          var bounds = new google.maps.LatLngBounds();

          if (mapData && mapData.mapMarkers.length) {
            (function () {
              var collapsedMarkers = _this3._collapseMarkers(mapData.mapMarkers);

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
          mapConfig: this._config.mapConfig,
          eventOptions: this.eventOptions()
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

      _classCallCheck(this, AccordionResultsComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AccordionResultsComponent).call(this, config));
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

        if (opts.useAccordion === true) {
          return _get(_getPrototypeOf(UniversalResultsComponent.prototype), "addChild", this).call(this, data, AccordionResultsComponent.type, opts);
        }

        return _get(_getPrototypeOf(UniversalResultsComponent.prototype), "addChild", this).call(this, data, type, opts);
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

      _classCallCheck(this, QuestionSubmissionComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(QuestionSubmissionComponent).call(this, Object.assign({}, DEFAULT_CONFIG$1, config)));
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

  var iconsArray = [thumbIcon, receiptIcon, pantheonIcon, micIcon, directionsIcon, calendarIcon, calloutIcon, infoIcon, briefcaseIcon, kabobIcon, personIcon, magnifyingGlassIcon, officeIcon, linkIcon, windowIcon, phoneIcon, tagIcon, documentIcon, chevronIcon, supportIcon, yextIcon, pinIcon, gearIcon, lightBulbIcon];
  var Icons = {};
  iconsArray.forEach(function (icon) {
    Icons[icon.name] = icon.markup();
  });
  Icons.default = starIcon.markup();

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

      _classCallCheck(this, IconComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(IconComponent).call(this, opts));
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

        return Icons.default;
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
  .register(SearchComponent).register(FilterSearchComponent).register(AutoCompleteComponent) // Filter Components
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
        this._params.delete(key);

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

            var parsedVal = val;

            try {
              parsedVal = JSON.parse(val);
            } catch (e) {}

            allParams[key] = parsedVal;
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

        var globalStorage = new GlobalStorage();
        var persistentStorage = new PersistentStorage({
          updateListener: config.onStateChange,
          resetListener: function resetListener(data) {
            return globalStorage.setAll(data);
          }
        });
        globalStorage.setAll(persistentStorage.getAll());
        var core = new Core({
          apiKey: config.apiKey,
          globalStorage: globalStorage,
          persistentStorage: persistentStorage,
          answersKey: config.answersKey,
          locale: config.locale
        });

        if (config.onStateChange && typeof config.onStateChange === 'function') {
          config.onStateChange(persistentStorage.getAll(), window.location.search.substr(1));
        }

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2Vycy11bWQuanMiLCJzb3VyY2VzIjpbInNyYy9jb3JlL2h0dHAvaHR0cHJlcXVlc3Rlci5qcyIsInNyYy9jb3JlL2NvbnN0YW50cy5qcyIsInNyYy91aS9kb20vc2VhcmNocGFyYW1zLmpzIiwic3JjL2NvcmUvaHR0cC9hcGlyZXF1ZXN0LmpzIiwic3JjL2NvcmUvZXJyb3JzL2Vycm9ycy5qcyIsInNyYy9jb3JlL3NlYXJjaC9zZWFyY2hhcGkuanMiLCJzcmMvY29yZS9tb2RlbHMvYXV0b2NvbXBsZXRlZGF0YS5qcyIsInNyYy9jb3JlL3NlYXJjaC9hdXRvY29tcGxldGVkYXRhdHJhbnNmb3JtZXIuanMiLCJzcmMvY29yZS9zZWFyY2gvYXV0b2NvbXBsZXRlYXBpLmpzIiwic3JjL2NvcmUvc2VhcmNoL3F1ZXN0aW9uYW5zd2VyYXBpLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9zZWFyY2hzdGF0ZXMuanMiLCJzcmMvY29yZS9tb2RlbHMvcmVzdWx0LmpzIiwic3JjL2NvcmUvbW9kZWxzL3Jlc3VsdGZhY3RvcnkuanMiLCJzcmMvY29yZS9tb2RlbHMvc2VjdGlvbi5qcyIsInNyYy9jb3JlL21vZGVscy91bml2ZXJzYWxyZXN1bHRzLmpzIiwic3JjL2NvcmUvbW9kZWxzL2RpcmVjdGFuc3dlci5qcyIsInNyYy9jb3JlL21vZGVscy9uYXZpZ2F0aW9uLmpzIiwic3JjL2NvcmUvbW9kZWxzL3ZlcnRpY2FscmVzdWx0cy5qcyIsInNyYy9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMuanMiLCJzcmMvY29yZS9tb2RlbHMvZHluYW1pY2ZpbHRlcnMuanMiLCJzcmMvY29yZS9zZWFyY2gvc2VhcmNoZGF0YXRyYW5zZm9ybWVyLmpzIiwic3JjL2NvcmUvbW9kZWxzL3F1ZXN0aW9uc3VibWlzc2lvbi5qcyIsInNyYy9jb3JlL2NvcmUuanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnRtYW5hZ2VyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9yZW5kZXJlci5qcyIsInNyYy91aS9yZW5kZXJpbmcvaGFuZGxlYmFyc3JlbmRlcmVyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9jb25zdC5qcyIsInNyYy91aS9kb20vZG9tLmpzIiwic3JjL2NvcmUvZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL3N0YXRlLmpzIiwic3JjL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50LmpzIiwic3JjL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc3JlcG9ydGVyLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9tb2R1bGVkYXRhLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9nbG9iYWxzdG9yYWdlLmpzIiwic3JjL2NvcmUvaW5kZXguanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb25jb21wb25lbnQuanMiLCJzcmMvY29yZS9tb2RlbHMvZmlsdGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3NlYXJjaC9maWx0ZXJzZWFyY2hjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9zZWFyY2gvYXV0b2NvbXBsZXRlY29tcG9uZW50LmpzIiwic3JjL2NvcmUvbW9kZWxzL2ZhY2V0LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJib3hjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcm9wdGlvbnNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL3JhbmdlZmlsdGVyY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9kYXRlcmFuZ2VmaWx0ZXJjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2R5bmFtaWNmaWx0ZXJzY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9nZW9sb2NhdGlvbmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvZGlyZWN0YW5zd2VyY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvbG9jYXRpb25yZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvZXZlbnRyZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvcGVvcGxlcmVzdWx0c2l0ZW1jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvcHJvdmlkZXJzL21hcHByb3ZpZGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL3Byb3ZpZGVycy9nb29nbGVtYXBwcm92aWRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9wcm92aWRlcnMvbWFwYm94bWFwcHJvdmlkZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvbWFwY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHRzY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9hY2NvcmRpb25yZXN1bHRzY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy91bml2ZXJzYWxyZXN1bHRzY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcXVlc3Rpb25zL3F1ZXN0aW9uc3VibWlzc2lvbmNvbXBvbmVudC5qcyIsInNyYy91aS9pY29ucy9pY29uLmpzIiwic3JjL3VpL2ljb25zL3RodW1iLmpzIiwic3JjL3VpL2ljb25zL3JlY2VpcHQuanMiLCJzcmMvdWkvaWNvbnMvcGFudGhlb24uanMiLCJzcmMvdWkvaWNvbnMvbWljLmpzIiwic3JjL3VpL2ljb25zL2RpcmVjdGlvbnMuanMiLCJzcmMvdWkvaWNvbnMvY2FsZW5kYXIuanMiLCJzcmMvdWkvaWNvbnMvY2FsbG91dC5qcyIsInNyYy91aS9pY29ucy9pbmZvLmpzIiwic3JjL3VpL2ljb25zL2JyaWVmY2FzZS5qcyIsInNyYy91aS9pY29ucy9rYWJvYi5qcyIsInNyYy91aS9pY29ucy9wZXJzb24uanMiLCJzcmMvdWkvaWNvbnMvbWFnbmlmeWluZ19nbGFzcy5qcyIsInNyYy91aS9pY29ucy9vZmZpY2UuanMiLCJzcmMvdWkvaWNvbnMvbGluay5qcyIsInNyYy91aS9pY29ucy93aW5kb3cuanMiLCJzcmMvdWkvaWNvbnMvcGhvbmUuanMiLCJzcmMvdWkvaWNvbnMvdGFnLmpzIiwic3JjL3VpL2ljb25zL2RvY3VtZW50LmpzIiwic3JjL3VpL2ljb25zL2NoZXZyb24uanMiLCJzcmMvdWkvaWNvbnMvc3VwcG9ydC5qcyIsInNyYy91aS9pY29ucy95ZXh0LmpzIiwic3JjL3VpL2ljb25zL3Bpbi5qcyIsInNyYy91aS9pY29ucy9nZWFyLmpzIiwic3JjL3VpL2ljb25zL2xpZ2h0X2J1bGIuanMiLCJzcmMvdWkvaWNvbnMvc3Rhci5qcyIsInNyYy91aS9pY29ucy9pbmRleC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ljb25zL2ljb25jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb25zdC5qcyIsInNyYy91aS9yZW5kZXJpbmcvdGVtcGxhdGVsb2FkZXIuanMiLCJzcmMvdWkvaW5kZXguanMiLCJzcmMvY29yZS9lcnJvcnMvZXJyb3JyZXBvcnRlci5qcyIsInNyYy91aS9zdG9yYWdlL3BlcnNpc3RlbnRzdG9yYWdlLmpzIiwic3JjL2Fuc3dlcnMtdW1kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAbW9kdWxlIEh0dHBSZXF1ZXN0ZXIgKi9cblxuLyogZ2xvYmFsIGZldGNoICovXG5cbi8qKlxuICogVHlwZXMgb2YgSFRUUCByZXF1ZXN0c1xuICovXG5jb25zdCBNZXRob2RzID0ge1xuICBHRVQ6ICdnZXQnLFxuICBQT1NUOiAncG9zdCcsXG4gIFBVVDogJ3B1dCcsXG4gIERFTEVURTogJ2RlbGV0ZSdcbn07XG5cbi8qKlxuICogSHR0cFJlcXVlc3RlciBpcyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb24gb2YgQUpBWFxuICogcmVsYXRlZCBtYXR0ZXJzLiBJdCdzIHVzZWQgdG8gbWFrZSBhbGwgdHlwZXMgb2YgbmV0d29yayByZXF1ZXN0c1xuICogYW5kIGV4cG9zZXMgYSBwcm9taXNlIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHR0cFJlcXVlc3RlciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBHRVQgSFRUUCByZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBwcm92aWRlIChnZXRzIGVuY29kZWQgaW50byB0aGUgVVJMKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBDb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgKi9cbiAgZ2V0ICh1cmwsIGRhdGEsIG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KE1ldGhvZHMuR0VULCB0aGlzLmVuY29kZVBhcmFtcyh1cmwsIGRhdGEpLCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBQT1NUIEhUVFAgcmVxdWVzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gcHJvdmlkZSAoZ2V0cyBlbmNvZGVkIGludG8gdGhlIFVSTClcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgQ29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICovXG4gIHBvc3QgKHVybCwgZGF0YSwgb3B0cykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXG4gICAgICBNZXRob2RzLlBPU1QsXG4gICAgICB1cmwsXG4gICAgICBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIGNyZWRlbnRpYWxzOiB1bmRlZmluZWRcbiAgICAgIH0sIG9wdHMpXG4gICAgKTtcbiAgfVxuXG4gIHJlcXVlc3QgKG1ldGhvZCwgdXJsLCBvcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICBtZXRob2QsXG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgfSwgb3B0cykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBiZWFjb24gdG8gdGhlIHByb3ZpZGVkIHVybCB3aGljaCB3aWxsIHNlbmQgYSBub24tYmxvY2tpbmcgcmVxdWVzdFxuICAgKiB0byB0aGUgc2VydmVyIHRoYXQgaXMgZ3VhcmFudGVlZCB0byBzZW5kIGJlZm9yZSBwYWdlIGxvYWQuIE5vIHJlc3BvbnNlIGlzIHJldHVybmVkLFxuICAgKiBzbyBiZWFjb25zIGFyZSBwcmltYXJpbHkgdXNlZCBmb3IgYW5hbHl0aWNzIHJlcG9ydGluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIHNlbmQgdGhlIGJlYWNvbiB0b1xuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSBUaGUgZGF0YSBwYXlsb2FkIHRvIHNlbmQgaW4gdGhlIGJlYWNvblxuICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSByZXF1ZXN0IGlzIHN1Y2Nlc3NmdWxseSBxdWV1ZWRcbiAgICovXG4gIGJlYWNvbiAodXJsLCBkYXRhKSB7XG4gICAgcmV0dXJuIG5hdmlnYXRvci5zZW5kQmVhY29uKHVybCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9XG5cbiAgZW5jb2RlUGFyYW1zICh1cmwsIHBhcmFtcykge1xuICAgIGxldCBoYXNQYXJhbSA9IHVybC5pbmRleE9mKCc/JykgPiAtMTtcblxuICAgIGxldCBzZWFyY2hRdWVyeSA9ICcnO1xuICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgIGlmICghaGFzUGFyYW0pIHtcbiAgICAgICAgaGFzUGFyYW0gPSB0cnVlO1xuICAgICAgICBzZWFyY2hRdWVyeSArPSAnPyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWFyY2hRdWVyeSArPSAnJic7XG4gICAgICB9XG5cbiAgICAgIHNlYXJjaFF1ZXJ5ICs9IGtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiB1cmwgKyBzZWFyY2hRdWVyeTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuLyoqIFRoZSBjdXJyZW50IGxpYiB2ZXJzaW9uLCByZXBvcnRlZCB3aXRoIGVycm9ycyBhbmQgYW5hbHl0aWNzICovXG5leHBvcnQgY29uc3QgTElCX1ZFUlNJT04gPSAndjAuOC4xJztcblxuLyoqIFRoZSBiYXNlIHVybCBmb3IgdGhlIGFwaSBiYWNrZW5kICovXG5leHBvcnQgY29uc3QgQVBJX0JBU0VfVVJMID0gJ2h0dHBzOi8vbGl2ZWFwaS55ZXh0LmNvbSc7XG5cbi8qKiBUaGUgZGVmYXVsdCB1cmwgZm9yIGNvbXBpbGVkIGNvbXBvbmVudCB0ZW1wbGF0ZXMgKi9cbmV4cG9ydCBjb25zdCBDT01QSUxFRF9URU1QTEFURVNfVVJMID0gYGh0dHBzOi8vYXNzZXRzLnNpdGVzY2RuLm5ldC9hbnN3ZXJzLyR7TElCX1ZFUlNJT059L2Fuc3dlcnN0ZW1wbGF0ZXMuY29tcGlsZWQubWluLmpzYDtcblxuLyoqIFRoZSBiYXNlIHVybCBmb3IgdGhlIGFuYWx5dGljcyBiYWNrZW5kICAqL1xuZXhwb3J0IGNvbnN0IEFOQUxZVElDU19CQVNFX1VSTCA9ICdodHRwczovL3JlYWx0aW1lYW5hbHl0aWNzLnlleHQuY29tJztcbiIsIi8qKiBAbW9kdWxlIFNlYXJjaFBhcmFtcyAqL1xuXG4vKiBnbG9iYWwgd2luZG93ICovXG5cbi8qKlxuICogU2VhcmNoUGFyYW1zIGlzIGEgY2xhc3MgdG8gZ2V0IHRoZSBzZWFyY2ggcGFyYW1zIGluIGEgVVJMLlxuICogSXQgaXMgYSByZXBsYWNlbWVudCBmb3IgVVJMLnNlYXJjaFBhcmFtcyBhbmQgVVJMU2VhcmNoUGFyYW1zIGZvciBicm93c2VycyBsaWtlIElFMTFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoUGFyYW1zIHtcbiAgY29uc3RydWN0b3IgKHVybCkge1xuICAgIC8qKlxuICAgICAqIE1hcHBpbmcgb2YgYWxsIHF1ZXJ5IHBhcmFtZXRlcnMgaW4gdGhlIGdpdmVuIHVybCwgcXVlcnkgcGFyYW0gLT4gdmFsdWVcbiAgICAgKiBPbmx5IHVzZWQgaWYgVVJMU2VhcmNoUGFyYW1zIGRvZXMgbm90IGV4aXN0IGluIHRoZSB3aW5kb3dcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcGFyYW1zID0ge307XG5cbiAgICBpZiAod2luZG93ICYmIHdpbmRvdy5VUkxTZWFyY2hQYXJhbXMpIHtcbiAgICAgIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BhcmFtcyA9IHRoaXMucGFyc2UodXJsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcGFyc2UgY3JlYXRlcyBhIG1hcHBpbmcgb2YgYWxsIHF1ZXJ5IHBhcmFtcyBpbiBhIGdpdmVuIHVybFxuICAgKiBUaGUgcXVlcnkgcGFyYW0gdmFsdWVzIGFyZSBkZWNvZGVkIGJlZm9yZSBiZWluZyBwdXQgaW4gdGhlIG1hcFxuICAgKiBUaHJlZSB0eXBlcyBvZiBpbnB1dCBhcmUgc3VwcG9ydGVkXG4gICAqICAgKDEpIGZ1bGwgVVJMIGUuZy4gaHR0cDovL3d3dy55ZXh0LmNvbS8/cT1oZWxsb1xuICAgKiAgICgyKSBwYXJhbXMgd2l0aCA/IGUuZy4gP3E9aGVsbG9cbiAgICogICAoMSkgcGFyYW1zIHdpdGhvdXQgPyBlLmcuIHE9aGVsbG9cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IG1hcHBpbmcgZnJvbSBxdWVyeSBwYXJhbSAtPiB2YWx1ZSB3aGVyZSB2YWx1ZSBpcyAnJyBpZiBubyB2YWx1ZSBpcyBwcm92aWRlZFxuICAgKi9cbiAgcGFyc2UgKHVybCkge1xuICAgIGxldCBwYXJhbXMgPSB7fTtcbiAgICBsZXQgc2VhcmNoID0gdXJsO1xuXG4gICAgaWYgKHNlYXJjaCA9PT0gJycpIHtcbiAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfVxuXG4gICAgLy8gTm9ybWFsaXplIGFsbCB1cmwgaW5wdXRzIHRvIHN0cmluZyBvZiBxdWVyeSBwYXJhbXMgc2VwYXJhdGVkIGJ5ICZcbiAgICBpZiAodXJsLmluZGV4T2YoJz8nKSA+IC0xKSB7XG4gICAgICBzZWFyY2ggPSB1cmwuc2xpY2UodXJsLmluZGV4T2YoJz8nKSArIDEpO1xuICAgIH1cblxuICAgIGNvbnN0IGVuY29kZWRQYXJhbXMgPSBzZWFyY2guc3BsaXQoJyYnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuY29kZWRQYXJhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleVZhbCA9IGVuY29kZWRQYXJhbXNbaV0uc3BsaXQoJz0nKTtcbiAgICAgIGlmIChrZXlWYWwubGVuZ3RoID4gMSkge1xuICAgICAgICBwYXJhbXNba2V5VmFsWzBdXSA9IFNlYXJjaFBhcmFtcy5kZWNvZGUoa2V5VmFsWzFdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtc1trZXlWYWxbMF1dID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIHF1ZXJ5IHBhcmFtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgcXVlcnkgcGFyYW0ga2V5IHRvIGdldCB0aGUgdmFsdWUgb2ZcbiAgICogQHJldHVybiB7c3RyaW5nfSBwYXJhbSB2YWx1ZSwgbnVsbCBvdGhlcndpc2VcbiAgICovXG4gIGdldCAocXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuX3BhcmFtc1tTdHJpbmcocXVlcnkpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcGFyYW1zW3F1ZXJ5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXQgY2hhbmdlcyB0aGUgdmFsdWUgb2YgYSBnaXZlbiBxdWVyeSBwYXJhbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSB0aGUgcXVlcnkgcGFyYW0ga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSB0aGUgdmFsdWUgb2YgdGhlIHF1ZXJ5IHBhcmFtIHVwZGF0ZSB3aXRoXG4gICAqL1xuICBzZXQgKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5fcGFyYW1zW1N0cmluZyhuYW1lKV0gPSBTdHJpbmcodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIGhhcyBjaGVja3MgdG8gc2VlIGlmIHRoZSBnaXZlbiBxdWVyeSBwYXJhbSBrZXkgZXhpc3RzIGluIHRoZSBwYXJhbXMgb2JqZWN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgcXVlcnkgcGFyYW0gdG8gY2hlY2tcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgcXVlcnkgcGFyYW0gaXMgaW4gdGhlIHBhcmFtcyBvYmplY3QsIGZhbHNlIG8vd1xuICAgKi9cbiAgaGFzIChxdWVyeSkge1xuICAgIHJldHVybiBxdWVyeSBpbiB0aGlzLl9wYXJhbXM7XG4gIH1cblxuICAvKipcbiAgICogdG9TdHJpbmcgcmV0dXJucyBhIHVybCB3aXRoIGFsbCB0aGUgcXVlcnkgcGFyYW1zIGluIHRoZSBwYXJhbXMgb2JqZWN0ICh3aXRob3V0IGEgPylcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9TdHJpbmcgKCkge1xuICAgIGxldCBzdHJpbmcgPSBbXTtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fcGFyYW1zKSB7XG4gICAgICBzdHJpbmcucHVzaChgJHtrZXl9PSR7U2VhcmNoUGFyYW1zLmVuY29kZSh0aGlzLl9wYXJhbXNba2V5XSl9YCk7XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmcuam9pbignJicpO1xuICB9XG5cbiAgLyoqXG4gICAqIGRlY29kZSByZXR1cm5zIHRoZSBkZWNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBzdHJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyB0aGUgc3RyaW5nIHRvIGRlY29kZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZGVjb2RlIChzdHJpbmcpIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cmluZy5yZXBsYWNlKC9bICtdL2csICclMjAnKSk7XG4gIH1cblxuICAvKipcbiAgICogZGVjb2RlIHJldHVybnMgdGhlIGVuY29kZWQgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIHN0cmluZyAoZS5nLiArIC0+ICUyQilcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyB0aGUgc3RyaW5nIHRvIGVuY29kZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZW5jb2RlIChzdHJpbmcpIHtcbiAgICBsZXQgcmVwbGFjZSA9IHtcbiAgICAgICchJzogJyUyMScsXG4gICAgICBcIidcIjogJyUyNycsXG4gICAgICAnKCc6ICclMjgnLFxuICAgICAgJyknOiAnJTI5JyxcbiAgICAgICclMjAnOiAnKydcbiAgICB9O1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5nKS5yZXBsYWNlKC9bIScoKV18JTIwL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgcmV0dXJuIHJlcGxhY2VbbWF0Y2hdO1xuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBcGlSZXF1ZXN0ICovXG5cbmltcG9ydCBIdHRwUmVxdWVzdGVyIGZyb20gJy4vaHR0cHJlcXVlc3Rlcic7XG5pbXBvcnQgeyBBUElfQkFTRV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi91aS9kb20vc2VhcmNocGFyYW1zJzsgLy8gVE9ETyBpZGVhbGx5IHRoaXMgd291bGQgYmUgcGFzc2VkIGluIGFzIGEgcGFyYW1cblxuLyoqXG4gKiBBcGlSZXF1ZXN0IGlzIHRoZSBiYXNlIGNsYXNzIGZvciBhbGwgQVBJIHJlcXVlc3RzLlxuICogSXQgZGVmaW5lcyBhbGwgb2YgdGhlIGNvcmUgcHJvcGVydGllcyByZXF1aXJlZCB0byBtYWtlIGEgcmVxdWVzdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcGlSZXF1ZXN0IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIHVzZWQgZm9yIG1ha2luZyBuZXR3b3JrIHJlcXVlc3QgYW5kIGhhbmRsaW5nIGVycm9yc1xuICAgICAqIEB0eXBlIHtIdHRwUmVxdWVzdGVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcmVxdWVzdGVyID0gbmV3IEh0dHBSZXF1ZXN0ZXIoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBiYXNlVXJsIHRvIHVzZSBmb3IgbWFraW5nIGEgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9iYXNlVXJsID0gb3B0cy5iYXNlVXJsIHx8IEFQSV9CQVNFX1VSTDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBlbmRwb2ludCB0byB1c2UgaW4gdGhlIHVybCAoYXBwZW5kZWQgdG8gdGhlIHtiYXNlVXJsfSlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZW5kcG9pbnQgPSBvcHRzLmVuZHBvaW50IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgQVBJIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwaUtleSA9IG9wdHMuYXBpS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgQVBJIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnNpb24gPSBvcHRzLnZlcnNpb24gfHwgMjAxOTAxMDE7XG5cbiAgICAvKipcbiAgICAgKiBBZGRpdGlvbmFsIGRhdGEgcGFyYW1zIHRoYXQgYXJlIHNlbnQgYWxvbmcgd2l0aCB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9wYXJhbXMgPSBvcHRzLnBhcmFtcyB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgY3JlYXRlcyBhIG5ldyBgR0VUYCByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIHJlcXVlc3QgY2xhc3NcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBnZXQgKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0ZXIuZ2V0KHRoaXMuX2Jhc2VVcmwgKyB0aGlzLl9lbmRwb2ludCwgdGhpcy5wYXJhbXModGhpcy5fcGFyYW1zKSk7XG4gIH1cblxuICBwb3N0IChvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3Rlci5wb3N0KHRoaXMuX2Jhc2VVcmwgKyB0aGlzLl9lbmRwb2ludCwgdGhpcy5wYXJhbXModGhpcy5fcGFyYW1zKSwgb3B0cyk7XG4gIH1cblxuICBwYXJhbXMgKHBhcmFtcykge1xuICAgIHZhciBiYXNlUGFyYW1zID0ge1xuICAgICAgJ3YnOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgJ2FwaV9rZXknOiB0aGlzLl9hcGlLZXlcbiAgICB9O1xuXG4gICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKSk7XG5cbiAgICBpZiAodXJsUGFyYW1zLmhhcygnYmV0YScpKSB7XG4gICAgICBiYXNlUGFyYW1zWydiZXRhJ10gPSB1cmxQYXJhbXMuZ2V0KCdiZXRhJyk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFueSBwYXJhbWF0ZXJzIHdob3MgdmFsdWUgaXMgYHVuZGVmaW5lZGAuXG4gICAgLy9cbiAgICAvLyBOT1RFKGJpbGx5KSBQcm9iYWJseSBiZXR0ZXIgdG8gYmUgZXhwbGljaXQgYWJvdXQgaG93IHRvIGhhbmRsZSB0aGlzIGF0IHRoZSByZXF1ZXN0IGJ1aWxkaW5nIGxldmVsLFxuICAgIC8vIGJ1dCBJIGNhbid0IHNlZSBhbnkgY2FzZXMgd2hlcmUgd2UnZCBldmVyIHdhbnQgdG8gc2VuZCAndW5kZWZpbmVkJyBhcyBhIHZhbHVlIHRvIHRoZSBzZXJ2ZXIuXG4gICAgLy8gU28gaXQncyBwcm9iYWJseSBmaW5lIHRvICdjbGVhbicgdGhlIHBhcmFtcyBvYmplY3QgaGVyZVxuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKHBhcmFtc1trZXldID09PSB1bmRlZmluZWQgfHwgcGFyYW1zW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIHBhcmFtc1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYmFzZVBhcmFtcywgcGFyYW1zIHx8IHt9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRXJyb3JzICovXG5cbi8qKlxuICogQW5zd2Vyc0Jhc2VFcnJvciBpcyBhbiBleHRlbnNpb24gb2YgdGhlIGJhc2UgRXJyb3Igb2JqZWN0LlxuICogVGhpcyBpcyB0aGUgb2JqZWN0IHRoYXQgaXMgdXNlZCB0byB3aGVuIHJlcG9ydGluZyB0byB0aGUgc2VydmVyLlxuICogQGV4dGVuZHMgRXJyb3JcbiAqXG4gKiBFcnJvciBjb2RlcyBmYWxsIGludG8gb25lIG9mIGZvdXIgY2F0ZWdvcmllczpcbiAqIDFYWCBlcnJvcnM6IEJhc2ljIGVycm9yc1xuICogMlhYIGVycm9yczogVUkgZXJyb3JzXG4gKiAzWFggZXJyb3JzOiBFbmRwb2ludCBlcnJvcnNcbiAqIDRYWCBlcnJvcnM6IENvcmUgZXJyb3JzXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQmFzZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAoZXJyb3JDb2RlLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLmVycm9yQ29kZSA9IGVycm9yQ29kZTtcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5ib3VuZGFyeSA9IGJvdW5kYXJ5O1xuICAgIHRoaXMuY2F1c2VkQnkgPSBjYXVzZWRCeTtcbiAgICB0aGlzLnJlcG9ydGVkID0gZmFsc2U7XG4gIH1cblxuICB0b0pzb24gKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChidWlsdGluRXJyb3IsIGJvdW5kYXJ5KSB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoYnVpbHRpbkVycm9yLm1lc3NhZ2UsIGJvdW5kYXJ5KTtcbiAgICBlcnJvci5zdGFjayA9IGJ1aWx0aW5FcnJvci5zdGFjaztcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzQmFzaWNFcnJvciBpcyBhIHdyYXBwZXIgYXJvdW5kIGFsbCB0aGUgYnVpbHQtaW4gZXJyb3JzXG4gKiBlLmcuIHVuZGVmaW5lZCB2YXJpYWJsZXMsIGluY29ycmVjdCBzeW50YXgsIHR5cGVzLCBtaXNzaW5nIG1ldGhvZHMsIGV0Yy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNCYXNpY0Vycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigxMDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzVWlFcnJvciB1c2VkIGZvciB0aGluZ3MgbGlrZSBET00gZXJyb3JzLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc1VpRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDIwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNDb21wb25lbnRFcnJvciBpcyB1c2VkIGZvciBDb21wb25lbnQgb3JpZW50ZWQgZXJyb3JzXG4gKiBlLmcuIGZhaWx1cmUgdG8gcmVuZGVyLCBvciBjYXRjaGluZyB1bmtub3ducy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNDb21wb25lbnRFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgY29tcG9uZW50LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDIwMSwgbWVzc2FnZSwgY29tcG9uZW50LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzRW5kcG9pbnRFcnJvciByZXByZXNlbnRzIGFsbCBuZXR3b3JrIHJlbGF0ZWQgZXJyb3JzLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0VuZHBvaW50RXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDMwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNDb3JlRXJyb3IgcmVwcmVzZW50cyBlcnJvcnMgZm9yIHByZWNvbmRpdGlvbiBmYWlsdXJlcyBpbiB0aGUgY29yZSBsaWJyYXJ5XG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQ29yZUVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcig0MDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzU3RvcmFnZUVycm9yIHJlcHJlc2VudHMgc3RvcmFnZSByZWxhdGVkIGVycm9yc1xuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc1N0b3JhZ2VFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgc3RvcmFnZUtleSwgZGF0YSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcig0MDEsIG1lc3NhZ2UsICdTdG9yYWdlJywgY2F1c2VkQnkpO1xuICAgIHRoaXMuc3RvcmFnZUtleSA9IHN0b3JhZ2VLZXk7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNBbmFseXRpY3NFcnJvciBpcyB1c2VkIGZvciBlcnJvcnMgd2hlbiByZXBvcnRpbmcgYW5hbHl0aWNzXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGV2ZW50LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDQwMiwgbWVzc2FnZSwgJ0FuYWx5dGljcycsIGNhdXNlZEJ5KTtcbiAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaEFwaSAqL1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IHsgQW5zd2Vyc0Jhc2ljRXJyb3IsIEFuc3dlcnNDb3JlRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBTZWFyY2hBcGkgaXMgdGhlIEFQSSBmb3IgZG9pbmcgdmFyaW91cyB0eXBlcyBvZiBzZWFyY2hcbiAqIG92ZXIgdGhlIG5ldHdvcmsgKGUuZy4gdmVydGljYWwgb3IgdW5pdmVyc2FsKVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hBcGkge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgQVBJIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghY29uZmlnLmFwaUtleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBcGkgS2V5IGlzIHJlcXVpcmVkJywgJ1NlYXJjaCcpO1xuICAgIH1cbiAgICB0aGlzLl9hcGlLZXkgPSBjb25maWcuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIEFuc3dlcnMgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFjb25maWcuYW5zd2Vyc0tleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBbnN3ZXJzIEtleSBpcyByZXF1aXJlZCcsICdTZWFyY2gnKTtcbiAgICB9XG4gICAgdGhpcy5fYW5zd2Vyc0tleSA9IGNvbmZpZy5hbnN3ZXJzS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnNpb24gb2YgdGhlIEFQSSB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJzaW9uID0gY29uZmlnLnZlcnNpb24gfHwgMjAxOTAxMDEgfHwgMjAxOTAzMDE7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgbG9jYWxlIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFjb25maWcubG9jYWxlKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0xvY2FsZSBpcyByZXF1aXJlZCcsICdTZWFyY2gnKTtcbiAgICB9XG4gICAgdGhpcy5fbG9jYWxlID0gY29uZmlnLmxvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggaW4gdGhlIGNvbnRleHQgb2YgYSB2ZXJ0aWNhbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmVydGljYWxLZXkgdmVydGljYWwgSUQgZm9yIHRoZSBzZWFyY2hcbiAgICogQHBhcmFtIHtvYmplY3R9IHF1ZXJ5IFRoZSBxdWVyeSBkZXRhaWxzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5pbnB1dCBUaGUgaW5wdXQgdG8gc2VhcmNoIGZvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuZmlsdGVyIFRoZSBmaWx0ZXIgdG8gdXNlIGluIHRoZSBzZWFyY2hcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmZhY2V0RmlsdGVyIFRoZSBmYWNldCBmaWx0ZXIgdG8gdXNlIGluIHRoZSBzZWFyY2hcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1ZXJ5LmxpbWl0IFRoZSBtYXggbnVtYmVyIG9mIHJlc3VsdHMgdG8gaW5jbHVkZSwgbWF4IG9mIDUwXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBxdWVyeS5vZmZzZXQgVGhlIHJlc3VsdHMgb2Zmc2V0LCBmb3IgZmV0Y2hpbmcgbW9yZSByZXN1bHRzIG9mIHRoZSBzYW1lIHF1ZXJ5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5pZCBUaGUgcXVlcnkgSUQgdG8gdXNlLiBJZiBwYWdpbmcgd2l0aGluIGEgcXVlcnksIHRoZSBzYW1lIElEIHNob3VsZCBiZSB1c2VkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcXVlcnkuaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQgSWYgdHJ1ZSwgYXNrcyB0aGUgc2VydmVyIHRvIHJldHVybiBkeW5hbWljIGZpbHRlcnNcbiAgICovXG4gIHZlcnRpY2FsU2VhcmNoICh2ZXJ0aWNhbEtleSwgeyBpbnB1dCwgZmlsdGVyLCBmYWNldEZpbHRlciwgbGltaXQsIG9mZnNldCwgaWQsIGlzRHluYW1pY0ZpbHRlcnNFbmFibGVkIH0pIHtcbiAgICBpZiAobGltaXQgPiA1MCkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb3JlRXJyb3IoJ1Byb3ZpZGVkIHNlYXJjaCBsaW1pdCB1bnN1cHBvcnRlZCcsICdTZWFyY2hBcGknKTtcbiAgICB9XG5cbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvdmVydGljYWwvcXVlcnknLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IGlucHV0LFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICAgICdmaWx0ZXJzJzogZmlsdGVyLFxuICAgICAgICAnZmFjZXRGaWx0ZXJzJzogZmFjZXRGaWx0ZXIsXG4gICAgICAgICd2ZXJ0aWNhbEtleSc6IHZlcnRpY2FsS2V5LFxuICAgICAgICAnbGltaXQnOiBsaW1pdCxcbiAgICAgICAgJ29mZnNldCc6IG9mZnNldCxcbiAgICAgICAgJ3F1ZXJ5SWQnOiBpZCxcbiAgICAgICAgJ3JldHJpZXZlRmFjZXRzJzogaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQsXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9XG5cbiAgdW5pdmVyc2FsU2VhcmNoIChxdWVyeVN0cmluZykge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9xdWVyeScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogcXVlcnlTdHJpbmcsXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEF1dG9Db21wbGV0ZURhdGEgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlRGF0YSB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICB0aGlzLnNlY3Rpb25zID0gZGF0YS5zZWN0aW9ucyB8fCBbXTtcbiAgICB0aGlzLnF1ZXJ5SWQgPSBkYXRhLnF1ZXJ5SWQgfHwgJyc7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSkge1xuICAgIGxldCBzZWN0aW9ucztcbiAgICBpZiAocmVzcG9uc2Uuc2VjdGlvbnMpIHtcbiAgICAgIHNlY3Rpb25zID0gcmVzcG9uc2Uuc2VjdGlvbnMubWFwKHMgPT4gKHtcbiAgICAgICAgbGFiZWw6IHMubGFiZWwsXG4gICAgICAgIHJlc3VsdHM6IHMucmVzdWx0cy5tYXAociA9PiBuZXcgQXV0b0NvbXBsZXRlUmVzdWx0KHIpKVxuICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWN0aW9ucyA9IFt7IHJlc3VsdHM6IHJlc3BvbnNlLnJlc3VsdHMubWFwKHIgPT4gbmV3IEF1dG9Db21wbGV0ZVJlc3VsdChyKSkgfV07XG4gICAgfVxuICAgIHJldHVybiBuZXcgQXV0b0NvbXBsZXRlRGF0YSh7IHNlY3Rpb25zLCBxdWVyeUlkOiByZXNwb25zZS5xdWVyeUlkIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvQ29tcGxldGVSZXN1bHQge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgdGhpcy5maWx0ZXIgPSBkYXRhLmZpbHRlciB8fCB7fTtcbiAgICB0aGlzLmhpZ2hsaWdodGVkVmFsdWUgPSB0aGlzLmhpZ2hsaWdodChkYXRhKTtcbiAgICB0aGlzLmtleSA9IGRhdGEua2V5IHx8ICcnO1xuICAgIHRoaXMubWF0Y2hlZFN1YnN0cmluZ3MgPSBkYXRhLm1hdGNoZWRTdWJzdHJpbmdzIHx8IFtdO1xuICAgIHRoaXMudmFsdWUgPSBkYXRhLnZhbHVlIHx8ICcnO1xuICAgIHRoaXMuc2hvcnRWYWx1ZSA9IGRhdGEuc2hvcnRWYWx1ZSB8fCB0aGlzLnZhbHVlO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICAvLyBUT0RPKGpkZWxlcm1lKTogY29uc29saWRhdGUgd2l0aCBvdGhlciBoaWdobGlnaHQgZnVuY3Rpb25zXG4gIGhpZ2hsaWdodCAoZGF0YSkge1xuICAgIGNvbnN0IHsgdmFsdWUsIHNob3J0VmFsdWUsIG1hdGNoZWRTdWJzdHJpbmdzIH0gPSBkYXRhO1xuICAgIGNvbnN0IHZhbCA9IHZhbHVlIHx8IHNob3J0VmFsdWU7XG5cbiAgICBpZiAoIW1hdGNoZWRTdWJzdHJpbmdzIHx8IG1hdGNoZWRTdWJzdHJpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgb3VyIGhpZ2hsaWdodGVkIHN1YnN0cmluZ3MgYXJlIHNvcnRlZFxuICAgIG1hdGNoZWRTdWJzdHJpbmdzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChhLm9mZnNldCA8IGIub2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGEub2Zmc2V0ID4gYi5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgLy8gQnVpbGQgb3VyIG5ldyB2YWx1ZSBiYXNlZCBvbiB0aGUgaGlnaGxpZ2h0c1xuICAgIGxldCBoaWdobGlnaHRlZFZhbHVlID0gJyc7XG4gICAgbGV0IG5leHRTdGFydCA9IDA7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hdGNoZWRTdWJzdHJpbmdzLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgc3RhcnQgPSBOdW1iZXIobWF0Y2hlZFN1YnN0cmluZ3Nbal0ub2Zmc2V0KTtcbiAgICAgIGxldCBlbmQgPSBzdGFydCArIG1hdGNoZWRTdWJzdHJpbmdzW2pdLmxlbmd0aDtcblxuICAgICAgaGlnaGxpZ2h0ZWRWYWx1ZSArPSBbdmFsLnNsaWNlKG5leHRTdGFydCwgc3RhcnQpLCAnPHN0cm9uZz4nLCB2YWwuc2xpY2Uoc3RhcnQsIGVuZCksICc8L3N0cm9uZz4nXS5qb2luKCcnKTtcblxuICAgICAgaWYgKGogPT09IG1hdGNoZWRTdWJzdHJpbmdzLmxlbmd0aCAtIDEgJiYgZW5kIDwgdmFsLmxlbmd0aCkge1xuICAgICAgICBoaWdobGlnaHRlZFZhbHVlICs9IHZhbC5zbGljZShlbmQpO1xuICAgICAgfVxuXG4gICAgICBuZXh0U3RhcnQgPSBlbmQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhpZ2hsaWdodGVkVmFsdWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lciAqL1xuXG5pbXBvcnQgQXV0b0NvbXBsZXRlRGF0YSBmcm9tICcuLi9tb2RlbHMvYXV0b2NvbXBsZXRlZGF0YSc7XG5cbi8qKlxuICogQSBEYXRhIFRyYW5zZm9ybWVyIHRoYXQgdGFrZXMgdGhlIHJlc3BvbnNlIG9iamVjdCBmcm9tIGEgQXV0b0NvbXBsZXRlIHJlcXVlc3RcbiAqIEFuZCB0cmFuc2Zvcm1zIGluIHRvIGEgZnJvbnQtZW5kIG9yaWVudGVkIGRhdGEgc3RydWN0dXJlIHRoYXQgb3VyXG4gKiBjb21wb25lbnQgbGlicmFyeSBhbmQgY29yZSBzdG9yYWdlIHVuZGVyc3RhbmQuXG4gKlxuICogVE9ETyhiaWxseSkgQ3JlYXRlIG91ciBvd24gZnJvbnQtZW5kIGRhdGEgbW9kZWxzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lciB7XG4gIHN0YXRpYyBjbGVhbiAobW9kdWxlSWQsIGRhdGEpIHtcbiAgICBpZiAoZGF0YS5zZWN0aW9ucyAmJiBkYXRhLnNlY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVsZXRlIGRhdGEuc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuc2VjdGlvbnMgJiYgZGF0YS5zZWN0aW9ucy5sZW5ndGggPT09IDEgJiYgZGF0YS5zZWN0aW9uc1swXS5yZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVsZXRlIGRhdGEuc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIFttb2R1bGVJZF06IGRhdGFcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHVuaXZlcnNhbCAocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gQXV0b0NvbXBsZXRlRGF0YS5mcm9tKHJlc3BvbnNlKTtcbiAgfVxuXG4gIHN0YXRpYyBmaWx0ZXIgKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIEF1dG9Db21wbGV0ZURhdGEuZnJvbShyZXNwb25zZSk7XG4gIH1cblxuICBzdGF0aWMgdmVydGljYWwgKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIEF1dG9Db21wbGV0ZURhdGEuZnJvbShyZXNwb25zZSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEF1dG9Db21wbGV0ZUFwaSAqL1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lciBmcm9tICcuL2F1dG9jb21wbGV0ZWRhdGF0cmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBBbnN3ZXJzQmFzaWNFcnJvciwgQW5zd2Vyc0VuZHBvaW50RXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBBdXRvQ29tcGxldGVBcGkgZXhwb3NlcyBhbiBpbnRlcmZhY2UgZm9yIG5ldHdvcmsgcmVsYXRlZCBtYXR0ZXJzXG4gKiBmb3IgYWxsIHRoZSBhdXRvY29tcGxldGUgZW5kcG9pbnRzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVBcGkge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIW9wdHMuYXBpS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0FwaSBLZXkgaXMgcmVxdWlyZWQnLCAnQXV0b0NvbXBsZXRlJyk7XG4gICAgfVxuICAgIHRoaXMuX2FwaUtleSA9IG9wdHMuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIEFuc3dlcnMgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFvcHRzLmFuc3dlcnNLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQW5zd2VycyBLZXkgaXMgcmVxdWlyZWQnLCAnQXV0b0NvbXBsZXRlJyk7XG4gICAgfVxuICAgIHRoaXMuX2Fuc3dlcnNLZXkgPSBvcHRzLmFuc3dlcnNLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgQVBJIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnNpb24gPSBvcHRzLnZlcnNpb24gfHwgMjAxOTAxMDEgfHwgMjAxOTAzMDE7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbG9jYWxlIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFvcHRzLmxvY2FsZSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdMb2NhbGUgaXMgcmVxdWlyZWQnLCAnQXV0b0NvbXBsZXRlJyk7XG4gICAgfVxuICAgIHRoaXMuX2xvY2FsZSA9IG9wdHMubG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEF1dG9jb21wbGV0ZSBmaWx0ZXJzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCBUaGUgaW5wdXQgdG8gdXNlIGZvciBhdXRvIGNvbXBsZXRlXG4gICAqL1xuICBxdWVyeUZpbHRlciAoaW5wdXQsIHZlcnRpY2FsS2V5LCBiYXJLZXkpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvZmlsdGVyc2VhcmNoJyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBpbnB1dCxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgICAnZXhwZXJpZW5jZUtleSc6IHZlcnRpY2FsS2V5LFxuICAgICAgICAnaW5wdXRLZXknOiBiYXJLZXksXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIuZmlsdGVyKHJlc3BvbnNlLnJlc3BvbnNlLCBiYXJLZXkpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEFuc3dlcnNFbmRwb2ludEVycm9yKCdGaWx0ZXIgc2VhcmNoIHJlcXVlc3QgZmFpbGVkJywgJ0F1dG9Db21wbGV0ZScsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcXVlcnlWZXJ0aWNhbCAoaW5wdXQsIHZlcnRpY2FsS2V5LCBiYXJLZXkpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvdmVydGljYWwvYXV0b2NvbXBsZXRlJyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBpbnB1dCxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgICAndmVydGljYWxLZXknOiB2ZXJ0aWNhbEtleSxcbiAgICAgICAgJ2JhcktleSc6IGJhcktleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lci52ZXJ0aWNhbChyZXNwb25zZS5yZXNwb25zZSwgcmVxdWVzdC5fcGFyYW1zLmJhcktleSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoJ1ZlcnRpY2FsIHNlYXJjaCByZXF1ZXN0IGZhaWxlZCcsICdBdXRvQ29tcGxldGUnLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHF1ZXJ5VW5pdmVyc2FsIChxdWVyeVN0cmluZykge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9hdXRvY29tcGxldGUnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IHF1ZXJ5U3RyaW5nLFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldChxdWVyeVN0cmluZylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lci51bml2ZXJzYWwocmVzcG9uc2UucmVzcG9uc2UpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEFuc3dlcnNFbmRwb2ludEVycm9yKCdVbml2ZXJzYWwgc2VhcmNoIHJlcXVlc3QgZmFpbGVkJywgJ0F1dG9Db21wbGV0ZScsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBRdWVzdGlvbkFuc3dlckFwaSAqL1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IHsgQW5zd2Vyc0Jhc2ljRXJyb3IsIEFuc3dlcnNFbmRwb2ludEVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogUXVlc3Rpb25BbnN3ZXJBcGkgZXhwb3NlcyBhbiBpbnRlcmZhY2UgdG8gZG8gbmV0d29ya3kgdGhpbmdzIGFnYWluc3RcbiAqIHRoZSBRJkEgUkVTVCBBUElcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb25BbnN3ZXJBcGkge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIW9wdHMuYXBpS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0FwaSBLZXkgaXMgcmVxdWlyZWQnLCAnUXVlc3Rpb25BbnN3ZXJBcGknKTtcbiAgICB9XG4gICAgdGhpcy5fYXBpS2V5ID0gb3B0cy5hcGlLZXk7XG4gIH1cblxuICAvKipcbiAgICogc3VibWl0UXVlc3Rpb24gd2lsbCBjcmVhdGUgYSBuZXR3b3JrIHJlcXVlc3QgdG9cbiAgICogY3JlYXRlIGEgcXVlc3Rpb24gZm9yIFEmQS5cbiAgICogQHBhcmFtIHtvYmplY3R9IHF1ZXN0aW9uIFRoZSBxdWVzdGlvbiBvYmplY3QgdG8gc3VibWl0IHRvIHRoZSBzZXJ2ZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1ZXN0aW9uLmVudGl0eUlkIFRoZSBlbnRpdHkgdG8gYXNzb2NpYXRlIHdpdGggdGhlIHF1ZXN0aW9uIChyZXF1aXJlZClcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLmxhbnVhZ2UgVGhlIGxhbmd1YWdlIG9mIHRoZSBxdWVzdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24uc2l0ZSBUaGUgXCJwdWJsaXNoZXJcIiBvZiB0aGUgKGUuZy4gJ0ZJUlNUX1BBUlRZJylcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLm5hbWUgVGhlIG5hbWUgb2YgdGhlIGF1dGhvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24uZW1haWwgVGhlIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIGF1dGhvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ucXVlc3Rpb25UZXh0IFRoZSBxdWVzdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ucXVlc3Rpb25EZXNjcmlwdGlvbiBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBxdWVzdGlvblxuICAgKi9cbiAgc3VibWl0UXVlc3Rpb24gKHF1ZXN0aW9uKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9xdWVzdGlvbnMnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2VudGl0eUlkJzogcXVlc3Rpb24uZW50aXR5SWQsXG4gICAgICAgICdzaXRlJzogcXVlc3Rpb24uc2l0ZSxcbiAgICAgICAgJ25hbWUnOiBxdWVzdGlvbi5uYW1lLFxuICAgICAgICAnZW1haWwnOiBxdWVzdGlvbi5lbWFpbCxcbiAgICAgICAgJ3F1ZXN0aW9uVGV4dCc6IHF1ZXN0aW9uLnF1ZXN0aW9uVGV4dCxcbiAgICAgICAgJ3F1ZXN0aW9uRGVzY3JpcHRpb24nOiBxdWVzdGlvbi5xdWVzdGlvbkRlc2NyaXB0aW9uLFxuICAgICAgICAncXVlc3Rpb25MYW5ndWFnZSc6IHF1ZXN0aW9uLnF1ZXN0aW9uTGFuZ3VhZ2VcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LnBvc3QoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEFuc3dlcnNFbmRwb2ludEVycm9yKFxuICAgICAgICAgICdRdWVzdGlvbiBzdWJtaXQgZmFpbGVkJyxcbiAgICAgICAgICAnUXVlc3Rpb25BbnN3ZXJBcGknLFxuICAgICAgICAgIGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hTdGF0ZXMgKi9cblxuLyoqXG4gKiBTZWFyY2hTdGF0ZXMgaXMgYW4gRU5VTSBmb3IgdGhlIHZhcmlvdXMgc3RhZ2VzIG9mIHNlYXJjaGluZyxcbiAqIHVzZWQgdG8gc2hvdyBkaWZmZXJlbnQgdGVtcGxhdGVzXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIFBSRV9TRUFSQ0g6ICdwcmUtc2VhcmNoJyxcbiAgU0VBUkNIX0xPQURJTkc6ICdzZWFyY2gtbG9hZGluZycsXG4gIFNFQVJDSF9DT01QTEVURTogJ3NlYXJjaC1jb21wbGV0ZSdcbn07XG4iLCIvKiogQG1vZHVsZSBSZXN1bHQgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0IHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSByYXcgcHJvZmlsZSBkYXRhXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3JhdyA9IGRhdGEucmF3IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5kZXggbnVtYmVyIG9mIHRoZSByZXN1bHRcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMub3JkaW5hbCA9IGRhdGEub3JkaW5hbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIG9mIHRoZSByZXN1bHQgY2FyZFxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJvZHkgb2YgdGhlIGRldGFpbHMgc2VjdGlvbiBvZiB0aGUgcmVzdWx0IGNhcmQsIGNhbiBjb250YWluIEhUTUxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfCBudWxsfVxuICAgICAqL1xuICAgIHRoaXMuZGV0YWlscyA9IGRhdGEuZGV0YWlscyB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlc3RpbmF0aW9uIGxpbmsgZm9yIHRoZSB0aXRsZSBvZiB0aGUgcmVzdWx0IGNhcmRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5saW5rID0gZGF0YS5saW5rIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgRW50aXR5IElELCBvciBvdGhlciB1bmlxdWUgaWRlbnRpZmllciwgdXNlZCBmb3IgdG8gcG93ZXIgaW50ZXJhY3Rpdml0eVxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmlkID0gZGF0YS5pZCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN1YnRpdGxlIG9uIHRoZSByZXN1bHQgY2FyZFxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnN1YnRpdGxlID0gZGF0YS5zdWJ0aXRsZSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNsYXNzIG1vZGlmaWVyLCB1c3VhbGx5IGRlcml2ZWQgZnJvbSB0aGUgdmVydGljYWwgY29uZmlndXJhdGlvbiBJRFxuICAgICAqIFVzZWQgdG8gYXBwbHkgZGlmZmVyZW50IHN0eWxpbmcgdG8gZGlmZmVyZW50IHJlc3VsdCBjYXJkIHR5cGVzXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMubW9kaWZpZXIgPSBkYXRhLm1vZGlmaWVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxhcmdlIGRhdGUsIG9mIHRoZSBmb3JtYXQgeyBtb250aDogJ0phbicsIGRheTogJzAxJyB9XG4gICAgICogQHR5cGUge09iamVjdHxudWxsfVxuICAgICAqL1xuICAgIHRoaXMuYmlnRGF0ZSA9IGRhdGEuYmlnRGF0ZSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW1hZ2UgcHJvZmlsZSBvYmplY3QsIGV4cGVjdGVkIHRvIGhhdmUgYSB1cmwgcHJvcGVydHlcbiAgICAgKiBAdHlwZSB7T2JqZWN0fG51bGx9XG4gICAgICovXG4gICAgdGhpcy5pbWFnZSA9IGRhdGEuaW1hZ2UgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGNhbGxzIHRvIGFjdGlvbiwgb2YgdGhlIGZvcm1hdDpcbiAgICAgKiB7IGljb246ICcnLCB1cmw6ICcnLCB0ZXh0OiAnJywgZXZlbnRUeXBlOiAnJywgZXZlbnRPcHRpb25zOiB7fX1cbiAgICAgKiBAdHlwZSB7QXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5jYWxsc1RvQWN0aW9uID0gZGF0YS5jYWxsc1RvQWN0aW9uIHx8IFtdO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBSZXN1bHRGYWN0b3J5ICovXG5cbmltcG9ydCBSZXN1bHQgZnJvbSAnLi9yZXN1bHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHRGYWN0b3J5IHtcbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIEFQSSByZXN1bHQgb2JqZWN0IGludG8gYSBSZXN1bHQgdmlldyBtb2RlbC5cbiAgICogSW5jbHVkZXMgZGVmYXVsdCBtYXBwaW5ncyBvZiBHb29nbGVDdXN0b21TZWFyY2hFbmdpbmUgcmVzdWx0cyB0b1xuICAgKiB0aGUgZmllbGRzIGV4cG9zZWQgYnkgdGhlIHRlbXBsYXRlLlxuICAgKiBAcGFyYW0gcmVzdWx0c0RhdGEgIHtBcnJheX0gZXhwZWN0ZWQgZm9ybWF0OiB7IGRhdGE6IHsgLi4uIH0sIGhpZ2hsaWdodGVkRmllbGRzOiB7IC4uLiB9fVxuICAgKiBAcmV0dXJucyB7UmVzdWx0W119XG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzdWx0c0RhdGEpIHtcbiAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0c0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIFRPRE8gdXNlIHJlc3VsdERhdGEuaGlnaGxpZ2h0ZWRGaWVsZHMgdG9cbiAgICAgIC8vIHRyYW5zZm9ybSByZXN1bHREYXRhLmRhdGEgaW50byBodG1sLWZyaWVuZGx5IHN0cmluZ3MgdGhhdCBoaWdobGlnaHQgdmFsdWVzLlxuICAgICAgLy8gQ2hlY2sgZm9yIG5ldyBkYXRhIGZvcm1hdCwgb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGxlZ2FjeVxuXG4gICAgICBjb25zdCBkYXRhID0gcmVzdWx0c0RhdGFbaV0uZGF0YSB8fCByZXN1bHRzRGF0YVtpXTtcblxuICAgICAgaWYgKGRhdGEuaHRtbFNuaXBwZXQpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKFJlc3VsdEZhY3RvcnkuZnJvbUdvb2dsZUN1c3RvbVNlYXJjaEVuZ2luZShkYXRhKSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICByZXN1bHRzLnB1c2goUmVzdWx0RmFjdG9yeS5mcm9tR2VuZXJpYyhkYXRhLCBpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIGdlbmVyaWMgcmVzdWx0IHZpZXcgbW9kZWwuXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEByZXR1cm5zIHtSZXN1bHR9XG4gICAqL1xuICBzdGF0aWMgZnJvbUdlbmVyaWMgKGRhdGEsIGluZGV4KSB7XG4gICAgcmV0dXJuIG5ldyBSZXN1bHQoe1xuICAgICAgcmF3OiBkYXRhLFxuICAgICAgdGl0bGU6IGRhdGEubmFtZSxcbiAgICAgIGRldGFpbHM6IHRoaXMudHJ1bmNhdGUoZGF0YS5kZXNjcmlwdGlvbiksXG4gICAgICBsaW5rOiBkYXRhLndlYnNpdGUsXG4gICAgICBpZDogZGF0YS5pZCxcbiAgICAgIG9yZGluYWw6IGluZGV4ICsgMVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIEFQSSByZXN1bHQgb2JqZWN0IGludG8gYSByZXN1bHQgdmlldyBtb2RlbC5cbiAgICogTWFwcyB2aWV3IG1vZGVsIGZpZWxkcyBiYXNlZCBvbiB0aGUgQVBJIGRhdGEgZm9yIGEgR29vZ2xlIEN1c3RvbSBTZWFyY2ggRW5naW5lIG9iamVjdC5cbiAgICogQHBhcmFtIGRhdGFcbiAgICogQHJldHVybnMge1Jlc3VsdH1cbiAgICovXG4gIHN0YXRpYyBmcm9tR29vZ2xlQ3VzdG9tU2VhcmNoRW5naW5lIChkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBSZXN1bHQoe1xuICAgICAgcmF3OiBkYXRhLFxuICAgICAgdGl0bGU6IGRhdGEuaHRtbFRpdGxlLnJlcGxhY2UoLyg8KFtePl0rKT4pL2lnLCAnJyksXG4gICAgICBkZXRhaWxzOiBkYXRhLmh0bWxTbmlwcGV0LFxuICAgICAgbGluazogZGF0YS5saW5rXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVHJ1bmNhdGVzIHN0cmluZ3MgdG8gMjUwIGNoYXJhY3RlcnMsIGF0dGVtcHRpbmcgdG8gcHJlc2VydmUgd2hvbGUgd29yZHNcbiAgICogQHBhcmFtIHN0ciB7c3RyaW5nfSB0aGUgc3RyaW5nIHRvIHRydW5jYXRlXG4gICAqIEBwYXJhbSBsaW1pdCB7TnVtYmVyfSB0aGUgbWF4aW11bSBjaGFyYWN0ZXIgbGVuZ3RoIHRvIHJldHVyblxuICAgKiBAcGFyYW0gdHJhaWxpbmcge3N0cmluZ30gYSB0cmFpbGluZyBzdHJpbmcgdG8gZGVub3RlIHRydW5jYXRpb24sIGUuZy4gJy4uLidcbiAgICogQHBhcmFtIHNlcCB7c3RyaW5nfSB0aGUgd29yZCBzZXBhcmF0b3JcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyB0cnVuY2F0ZSAoc3RyLCBsaW1pdCA9IDI1MCwgdHJhaWxpbmcgPSAnLi4uJywgc2VwID0gJyAnKSB7XG4gICAgaWYgKCFzdHIgfHwgc3RyLmxlbmd0aCA8PSBsaW1pdCkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICAvLyBUT0RPIChibWNnaW5uaXMpOiBzcGxpdCBwdW5jdHVhdGlvbiB0b28gc28gd2UgZG9uJ3QgZW5kIHVwIHdpdGggXCJmb28sLi4uXCJcbiAgICBjb25zdCB3b3JkcyA9IHN0ci5zcGxpdChzZXApO1xuICAgIGNvbnN0IG1heCA9IGxpbWl0IC0gdHJhaWxpbmcubGVuZ3RoO1xuICAgIGxldCB0cnVuY2F0ZWQgPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHdvcmQgPSB3b3Jkc1tpXTtcbiAgICAgIGlmICh0cnVuY2F0ZWQubGVuZ3RoICsgd29yZC5sZW5ndGggPiBtYXggfHxcbiAgICAgICAgKGkgIT09IDAgJiYgdHJ1bmNhdGVkLmxlbmd0aCArIHdvcmQubGVuZ3RoICsgc2VwLmxlbmd0aCA+IG1heCkpIHtcbiAgICAgICAgdHJ1bmNhdGVkICs9IHRyYWlsaW5nO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgdHJ1bmNhdGVkICs9IGkgPT09IDAgPyB3b3JkIDogc2VwICsgd29yZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1bmNhdGVkO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWN0aW9uICovXG5cbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuaW1wb3J0IFJlc3VsdEZhY3RvcnkgZnJvbSAnLi9yZXN1bHRmYWN0b3J5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yIChkYXRhLCB1cmwpIHtcbiAgICB0aGlzLnNlYXJjaFN0YXRlID0gU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURTtcbiAgICB0aGlzLnZlcnRpY2FsQ29uZmlnSWQgPSBkYXRhLnZlcnRpY2FsQ29uZmlnSWQgfHwgbnVsbDtcbiAgICB0aGlzLnJlc3VsdHNDb3VudCA9IGRhdGEucmVzdWx0c0NvdW50IHx8IDA7XG4gICAgdGhpcy5lbmNvZGVkU3RhdGUgPSBkYXRhLmVuY29kZWRTdGF0ZSB8fCAnJztcbiAgICB0aGlzLmFwcGxpZWRRdWVyeUZpbHRlcnMgPSBBcHBsaWVkUXVlcnlGaWx0ZXIuZnJvbShkYXRhLmFwcGxpZWRRdWVyeUZpbHRlcnMpO1xuICAgIHRoaXMuZmFjZXRzID0gZGF0YS5mYWNldHMgfHwgbnVsbDtcbiAgICB0aGlzLnJlc3VsdHMgPSBSZXN1bHRGYWN0b3J5LmZyb20oZGF0YS5yZXN1bHRzKTtcbiAgICB0aGlzLm1hcCA9IFNlY3Rpb24ucGFyc2VNYXAoZGF0YS5yZXN1bHRzKTtcbiAgICB0aGlzLnZlcnRpY2FsVVJMID0gdXJsIHx8IG51bGw7XG4gIH1cblxuICBzdGF0aWMgcGFyc2VNYXAgKHJlc3VsdHMpIHtcbiAgICBsZXQgbWFwTWFya2VycyA9IFtdO1xuXG4gICAgbGV0IGNlbnRlckNvb3JkaW5hdGVzID0ge307XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc3VsdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIFJlbW92ZSBsZWdhY3kgZmFsbGJhY2sgZnJvbSBhbGwgZGF0YSBmb3JtYXRcbiAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzW2pdLmRhdGEgfHwgcmVzdWx0c1tqXTtcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZSkge1xuICAgICAgICBpZiAoIWNlbnRlckNvb3JkaW5hdGVzLmxhdGl0dWRlKSB7XG4gICAgICAgICAgY2VudGVyQ29vcmRpbmF0ZXMgPSB7XG4gICAgICAgICAgICBsYXRpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sb25naXR1ZGVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIG1hcE1hcmtlcnMucHVzaCh7XG4gICAgICAgICAgaXRlbTogcmVzdWx0LFxuICAgICAgICAgIGxhYmVsOiBtYXBNYXJrZXJzLmxlbmd0aCArIDEsXG4gICAgICAgICAgbGF0aXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubGF0aXR1ZGUsXG4gICAgICAgICAgbG9uZ2l0dWRlOiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlLmxvbmdpdHVkZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgJ21hcENlbnRlcic6IGNlbnRlckNvb3JkaW5hdGVzLFxuICAgICAgJ21hcE1hcmtlcnMnOiBtYXBNYXJrZXJzXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChtb2R1bGVzLCB1cmxzKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gW107XG4gICAgaWYgKCFtb2R1bGVzKSB7XG4gICAgICByZXR1cm4gc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmV3IFNlY3Rpb24obW9kdWxlcyk7XG4gICAgfVxuXG4gICAgLy8gT3VyIHNlY3Rpb25zIHNob3VsZCBjb250YWluIGEgcHJvcGVydHkgb2YgbWFwTWFya2VyIG9iamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNlY3Rpb25zLnB1c2goXG4gICAgICAgIG5ldyBTZWN0aW9uKFxuICAgICAgICAgIG1vZHVsZXNbaV0sXG4gICAgICAgICAgdXJsc1ttb2R1bGVzW2ldLnZlcnRpY2FsQ29uZmlnSWRdXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlY3Rpb25zO1xuICB9XG59XG5cbmNsYXNzIEFwcGxpZWRRdWVyeUZpbHRlciB7XG4gIC8vIFN1cHBvcnQgbGVnYWN5IG1vZGVsIGFuZCBuZXcgbW9kZWwgdW50aWwgZnVsbHkgbWlncmF0ZWQuXG4gIC8vIFRPRE8oYmlsbHkpIFJlbW92ZSB0aGUgbGVmdCBleHByZXNzaW9uIGR1cmluZyBhc3NpZ25tZW50IHdoZW4gbWlncmF0ZWQuXG4gIGNvbnN0cnVjdG9yIChhcHBsaWVkUXVlcnlGaWx0ZXIpIHtcbiAgICB0aGlzLmtleSA9IGFwcGxpZWRRdWVyeUZpbHRlci5rZXkgfHwgYXBwbGllZFF1ZXJ5RmlsdGVyLmRpc3BsYXlLZXk7XG4gICAgdGhpcy52YWx1ZSA9IGFwcGxpZWRRdWVyeUZpbHRlci52YWx1ZSB8fCBhcHBsaWVkUXVlcnlGaWx0ZXIuZGlzcGxheVZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKGFwcGxpZWRRdWVyeUZpbHRlcnMpIHtcbiAgICBsZXQgZmlsdGVycyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwbGllZFF1ZXJ5RmlsdGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgZmlsdGVycy5wdXNoKG5ldyBBcHBsaWVkUXVlcnlGaWx0ZXIoYXBwbGllZFF1ZXJ5RmlsdGVyc1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVycztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgVW5pdmVyc2FsUmVzdWx0cyAqL1xuXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL3NlY3Rpb24nO1xuaW1wb3J0IFNlYXJjaFN0YXRlcyBmcm9tICcuLi9zdG9yYWdlL3NlYXJjaHN0YXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaXZlcnNhbFJlc3VsdHMge1xuICBjb25zdHJ1Y3RvciAoZGF0YSkge1xuICAgIHRoaXMucXVlcnlJZCA9IGRhdGEucXVlcnlJZCB8fCBudWxsO1xuICAgIHRoaXMuc2VjdGlvbnMgPSBkYXRhLnNlY3Rpb25zIHx8IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHNlYXJjaCwgdXNlZCB0byByZW5kZXIgZGlmZmVyZW50IHRlbXBsYXRlcyBiZWZvcmUsIGR1cmluZyxcbiAgICAgKiBhbmQgYWZ0ZXIgbG9hZGluZ1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zZWFyY2hTdGF0ZSA9IGRhdGEuc2VhcmNoU3RhdGUgfHwgU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSwgdXJscykge1xuICAgIHJldHVybiBuZXcgVW5pdmVyc2FsUmVzdWx0cyh7XG4gICAgICBxdWVyeUlkOiByZXNwb25zZS5xdWVyeUlkLFxuICAgICAgc2VjdGlvbnM6IFNlY3Rpb24uZnJvbShyZXNwb25zZS5tb2R1bGVzLCB1cmxzKVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIFVuaXZlcnZhbFJlc3VsdHMgb2JqZWN0IHJlcHJlc2VudGluZyBsb2FkaW5nIHJlc3VsdHNcbiAgICogQHJldHVybiB7VW5pdmVyc2FsUmVzdWx0c31cbiAgICovXG4gIHN0YXRpYyBzZWFyY2hMb2FkaW5nICgpIHtcbiAgICByZXR1cm4gbmV3IFVuaXZlcnNhbFJlc3VsdHMoeyBzZWFyY2hTdGF0ZTogU2VhcmNoU3RhdGVzLlNFQVJDSF9MT0FESU5HIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEaXJlY3RBbnN3ZXIgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0QW5zd2VyIHtcbiAgY29uc3RydWN0b3IgKGRpcmVjdEFuc3dlciA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkaXJlY3RBbnN3ZXIpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE5hdmlnYXRpb24gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiB7XG4gIGNvbnN0cnVjdG9yICh0YWJPcmRlcikge1xuICAgIHRoaXMudGFiT3JkZXIgPSB0YWJPcmRlciB8fCBbXTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKG1vZHVsZXMpIHtcbiAgICBsZXQgbmF2ID0gW107XG4gICAgaWYgKCFtb2R1bGVzIHx8ICFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmF2O1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5hdi5wdXNoKG1vZHVsZXNbaV0udmVydGljYWxDb25maWdJZCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgTmF2aWdhdGlvbihuYXYpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBWZXJ0aWNhbFJlc3VsdHMgKi9cblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9zZWN0aW9uJztcbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0aWNhbFJlc3VsdHMge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IHNlYXJjaFN0YXRlOiBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFIH0sIGRhdGEpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kIHRoZSBwcm92aWRlZCByZXN1bHRzIHRvIHRoZSBjdXJyZW50IHJlc3VsdHNcbiAgICogQHBhcmFtIHtWZXJ0aWNhbFJlc3VsdHN9IHJlc3VsdHMgdGhlIHJlc3VsdHMgdG8gYXBwZW5kIHRvIHRoZSBjdXJyZW50IHJlc3VsdHNcbiAgICovXG4gIGFwcGVuZCAocmVzdWx0cykge1xuICAgIGNvbnN0IG1lcmdlZCA9IHsgLi4udGhpcyB9O1xuICAgIG1lcmdlZC5yZXN1bHRzID0gdGhpcy5yZXN1bHRzLmNvbmNhdChyZXN1bHRzLnJlc3VsdHMpO1xuICAgIG1lcmdlZC5tYXAubWFwTWFya2VycyA9IHRoaXMubWFwLm1hcE1hcmtlcnMuY29uY2F0KHJlc3VsdHMubWFwLm1hcE1hcmtlcnMpO1xuICAgIHJldHVybiBuZXcgVmVydGljYWxSZXN1bHRzKG1lcmdlZCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gbmV3IFZlcnRpY2FsUmVzdWx0cyhTZWN0aW9uLmZyb20ocmVzcG9uc2UpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBWZXJ0aWNhbFJlc3VsdHMgb2JqZWN0IHJlcHJlc2VudGluZyBsb2FkaW5nIHJlc3VsdHNcbiAgICogQHJldHVybiB7VmVydGljYWxSZXN1bHRzfVxuICAgKi9cbiAgc3RhdGljIHNlYXJjaExvYWRpbmcgKCkge1xuICAgIHJldHVybiBuZXcgVmVydGljYWxSZXN1bHRzKHsgc2VhcmNoU3RhdGU6IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTdG9yYWdlS2V5cyAqL1xuXG4vKipcbiAqIFN0b3JhZ2VLZXlzIGlzIGFuIEVOVU0gYXJlIGNvbnNpZGVyZWQgdGhlIHJvb3QgY29udGV4dFxuICogZm9yIGhvdyBkYXRhIGlzIHN0b3JlZCBhbmQgc2NvcGVkIGluIHRoZSBzdG9yYWdlLlxuICpcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgTkFWSUdBVElPTjogJ25hdmlnYXRpb24nLFxuICBVTklWRVJTQUxfUkVTVUxUUzogJ3VuaXZlcnNhbC1yZXN1bHRzJyxcbiAgVkVSVElDQUxfUkVTVUxUUzogJ3ZlcnRpY2FsLXJlc3VsdHMnLFxuICBBVVRPQ09NUExFVEU6ICdhdXRvY29tcGxldGUnLFxuICBESVJFQ1RfQU5TV0VSOiAnZGlyZWN0LWFuc3dlcicsXG4gIEZJTFRFUjogJ2ZpbHRlcicsXG4gIFFVRVJZOiAncXVlcnknLFxuICBRVUVSWV9JRDogJ3F1ZXJ5LWlkJyxcbiAgRkFDRVRfRklMVEVSOiAnZmFjZXQtZmlsdGVyJyxcbiAgRFlOQU1JQ19GSUxURVJTOiAnZHluYW1pYy1maWx0ZXJzJyxcbiAgU0VBUkNIX0xJTUlUOiAnc2VhcmNoLWxpbWl0JyxcbiAgUEFSQU1TOiAncGFyYW1zJyxcbiAgUVVFU1RJT05fU1VCTUlTU0lPTjogJ3F1ZXN0aW9uLXN1Ym1pc3Npb24nXG59O1xuIiwiLyoqIEBtb2R1bGUgRHluYW1pY0ZpbHRlcnMgKi9cblxuLyoqXG4gKiBNb2RlbCByZXByZXNlbnRpbmcgYSBzZXQgb2YgZHluYW1pYyBmaWx0ZXJzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNGaWx0ZXJzIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBmaWx0ZXJzIHRoaXMgbW9kZWwgaG9sZHNcbiAgICAgKiBAdHlwZSB7e2xhYmVsOiBzdHJpbmcsIGZpZWxkSWQ6IHN0cmluZywgb3B0aW9uczogb2JqZWN0W119fVxuICAgICAqL1xuICAgIHRoaXMuZmlsdGVycyA9IGRhdGEuZmlsdGVycyB8fCBbXTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9yZ2FuaXplICdmYWNldHMnIGZyb20gdGhlIGFwaSByZXNwb25zZSBpbnRvIGR5bmFtaWMgZmlsdGVyc1xuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2UgZHluYW1pYyBmaWx0ZXIgcmVzcG9uc2UgZnJvbSB0aGUgYXBpXG4gICAqIEByZXR1cm5zIHtEeW5hbWljRmlsdGVyc31cbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSkge1xuICAgIGNvbnN0IHsgZmFjZXRzIH0gPSByZXNwb25zZTtcbiAgICBjb25zdCBkeW5hbWljRmlsdGVycyA9IGZhY2V0cy5tYXAoZiA9PiAoe1xuICAgICAgbGFiZWw6IGZbJ2Rpc3BsYXlOYW1lJ10sXG4gICAgICBmaWVsZElkOiBmWydmaWVsZElkJ10sXG4gICAgICBvcHRpb25zOiBmLm9wdGlvbnMubWFwKG8gPT4gKHtcbiAgICAgICAgbGFiZWw6IG9bJ2Rpc3BsYXlOYW1lJ10sXG4gICAgICAgIGNvdW50TGFiZWw6IG9bJ2NvdW50J10sXG4gICAgICAgIHNlbGVjdGVkOiBvWydzZWxlY3RlZCddLFxuICAgICAgICBmaWx0ZXI6IG9bJ2ZpbHRlciddXG4gICAgICB9KSlcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gbmV3IER5bmFtaWNGaWx0ZXJzKHsgZmlsdGVyczogZHluYW1pY0ZpbHRlcnMgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaERhdGFUcmFuc2Zvcm1lciAqL1xuXG5pbXBvcnQgVW5pdmVyc2FsUmVzdWx0cyBmcm9tICcuLi9tb2RlbHMvdW5pdmVyc2FscmVzdWx0cyc7XG5pbXBvcnQgRGlyZWN0QW5zd2VyIGZyb20gJy4uL21vZGVscy9kaXJlY3RhbnN3ZXInO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vbW9kZWxzL25hdmlnYXRpb24nO1xuaW1wb3J0IFZlcnRpY2FsUmVzdWx0cyBmcm9tICcuLi9tb2RlbHMvdmVydGljYWxyZXN1bHRzJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBEeW5hbWljRmlsdGVycyBmcm9tICcuLi9tb2RlbHMvZHluYW1pY2ZpbHRlcnMnO1xuXG4vKipcbiAqIEEgRGF0YSBUcmFuc2Zvcm1lciB0aGF0IHRha2VzIHRoZSByZXNwb25zZSBvYmplY3QgZnJvbSBhIFNlYXJjaCByZXF1ZXN0XG4gKiBBbmQgdHJhbnNmb3JtcyBpbiB0byBhIGZyb250LWVuZCBvcmllbnRlZCBkYXRhIHN0cnVjdHVyZSB0aGF0IG91clxuICogY29tcG9uZW50IGxpYnJhcnkgYW5kIGNvcmUgc3RvcmFnZSB1bmRlcnN0YW5kLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hEYXRhVHJhbnNmb3JtZXIge1xuICBzdGF0aWMgdHJhbnNmb3JtIChkYXRhLCB1cmxzID0ge30pIHtcbiAgICBsZXQgcmVzcG9uc2UgPSBkYXRhLnJlc3BvbnNlO1xuICAgIHJldHVybiB7XG4gICAgICBbU3RvcmFnZUtleXMuUVVFUllfSURdOiByZXNwb25zZS5xdWVyeUlkLFxuICAgICAgW1N0b3JhZ2VLZXlzLk5BVklHQVRJT05dOiBOYXZpZ2F0aW9uLmZyb20ocmVzcG9uc2UubW9kdWxlcyksXG4gICAgICBbU3RvcmFnZUtleXMuRElSRUNUX0FOU1dFUl06IG5ldyBEaXJlY3RBbnN3ZXIocmVzcG9uc2UuZGlyZWN0QW5zd2VyKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUU106IFVuaXZlcnNhbFJlc3VsdHMuZnJvbShyZXNwb25zZSwgdXJscylcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHRyYW5zZm9ybVZlcnRpY2FsIChkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtTdG9yYWdlS2V5cy5RVUVSWV9JRF06IGRhdGEucmVzcG9uc2UucXVlcnlJZCxcbiAgICAgIFtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXTogbmV3IE5hdmlnYXRpb24oKSwgLy8gVmVyaXRjYWwgZG9lc24ndCByZXNwb25kIHdpdGggb3JkZXJpbmcsIHNvIHVzZSBlbXB0eSBuYXYuXG4gICAgICBbU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUU106IFZlcnRpY2FsUmVzdWx0cy5mcm9tKGRhdGEucmVzcG9uc2UpLFxuICAgICAgW1N0b3JhZ2VLZXlzLkRZTkFNSUNfRklMVEVSU106IER5bmFtaWNGaWx0ZXJzLmZyb20oZGF0YS5yZXNwb25zZSlcbiAgICB9O1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBRdWVzdGlvblN1Ym1pc3Npb24gKi9cblxuLyoqXG4gKiBRdWVzdGlvblN1Ym1pc3Npb24gaXMgdGhlIGNvcmUgc3RhdGUgbW9kZWxcbiAqIHRvIHBvd2VyIHRoZSBRdWVzdGlvblN1Ym1pc3Npb24gY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0aW9uU3VibWlzc2lvbiB7XG4gIGNvbnN0cnVjdG9yIChxdWVzdGlvbiA9IHt9LCBlcnJvcnMpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgYXV0aG9yIG9mIHRoZSBxdWVzdGlvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5uYW1lID0gcXVlc3Rpb24ubmFtZSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIHF1ZXN0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmVtYWlsID0gcXVlc3Rpb24uZW1haWwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIHByaXZhY3kgcG9saWN5IHdhcyBhcHByb3ZlZFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucHJpdmFjeVBvbGljeSA9IHF1ZXN0aW9uLnByaXZhY3lQb2xpY3kgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVzdGlvbiB0byBiZSBzZW50IHRvIHRoZSBzZXJ2ZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlc3Rpb25UZXh0ID0gcXVlc3Rpb24ucXVlc3Rpb25UZXh0IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBbHRlcm5hdGl2ZSBxdWVzdGlvbiBtZXRhIGluZm9ybWF0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXN0aW9uRGVzY3JpcHRpb24gPSBxdWVzdGlvbi5xdWVzdGlvbkRlc2NyaXB0aW9uIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBDb250YWlucyBhbnkgZXJyb3JzIGFib3V0IHRoZSBxdWVzdGlvbiBzdWJtaXNzaW9uXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLmVycm9ycyA9IGVycm9ycyB8fCBudWxsO1xuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBzdWJtaXR0ZWQgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBxdWVzdGlvblN1Ym1pdHRlZDogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZXJyb3JzIChxdWVzdGlvbiwgZXJyb3JzKSB7XG4gICAgcmV0dXJuIFF1ZXN0aW9uU3VibWlzc2lvbihxdWVzdGlvbiwgZXJyb3JzKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQ29yZSAqL1xuXG5pbXBvcnQgU2VhcmNoQXBpIGZyb20gJy4vc2VhcmNoL3NlYXJjaGFwaSc7XG5pbXBvcnQgQXV0b0NvbXBsZXRlQXBpIGZyb20gJy4vc2VhcmNoL2F1dG9jb21wbGV0ZWFwaSc7XG5pbXBvcnQgUXVlc3Rpb25BbnN3ZXJBcGkgZnJvbSAnLi9zZWFyY2gvcXVlc3Rpb25hbnN3ZXJhcGknO1xuXG5pbXBvcnQgU2VhcmNoRGF0YVRyYW5zZm9ybWVyIGZyb20gJy4vc2VhcmNoL3NlYXJjaGRhdGF0cmFuc2Zvcm1lcic7XG5cbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFZlcnRpY2FsUmVzdWx0cyBmcm9tICcuL21vZGVscy92ZXJ0aWNhbHJlc3VsdHMnO1xuaW1wb3J0IFVuaXZlcnNhbFJlc3VsdHMgZnJvbSAnLi9tb2RlbHMvdW5pdmVyc2FscmVzdWx0cyc7XG5pbXBvcnQgUXVlc3Rpb25TdWJtaXNzaW9uIGZyb20gJy4vbW9kZWxzL3F1ZXN0aW9uc3VibWlzc2lvbic7XG5cbi8qKlxuICogQ29yZSBpcyB0aGUgbWFpbiBhcHBsaWNhdGlvbiBjb250YWluZXIgZm9yIGFsbCBvZiB0aGUgbmV0d29yayBhbmQgc3RvcmFnZVxuICogcmVsYXRlZCBiZWhhdmlvcnMgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JlIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcuYXBpS2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGBhcGlLZXlgLiBUeXBlIG11c3QgYmUge3N0cmluZ30nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5hbnN3ZXJzS2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGBhbnN3ZXJzS2V5YC4gVHlwZSBtdXN0IGJlIHtzdHJpbmd9Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNsaWVudCBBUEkgS2V5IHVzZWQgZm9yIGFsbCByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBjb25maWcuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNsaWVudCBBbnN3ZXJzIEtleSB1c2VkIGZvciBhbGwgcmVxdWVzdHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYW5zd2Vyc0tleSA9IGNvbmZpZy5hbnN3ZXJzS2V5O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNsaWVudCBsb2NhbGUgdXNlZCBmb3IgYWxsIHJlcXVlc3RzLiBJZiBub3Qgc3BlY2lmaWVkLCBkZWZhdWx0cyB0byBcImVuXCIgKGZvclxuICAgICAqIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5KS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbG9jYWxlID0gY29uZmlnLmxvY2FsZSB8fCAnZW4nO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNvcmUgZGF0YSBzdG9yYWdlIHRoYXQgcG93ZXJzIHRoZSBVSVxuICAgICAqIEB0eXBlIHtHbG9iYWxTdG9yYWdlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlID0gY29uZmlnLmdsb2JhbFN0b3JhZ2U7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY29yZSBwZXJzaXN0ZW50IHN0b3JhZ2VcbiAgICAgKiBAdHlwZSB7UGVyc2lzdGVudFN0b3JhZ2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnBlcnNpc3RlbnRTdG9yYWdlID0gY29uZmlnLnBlcnNpc3RlbnRTdG9yYWdlO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3Rpb24gY29udGFpbmluZyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgUkVTVGZ1bCBzZWFyY2ggQVBJXG4gICAgICogRm9yIGJvdGggdmVydGljYWwgYW5kIHVuaXZlcnNhbCBzZWFyY2hcbiAgICAgKiBAdHlwZSB7U2VhcmNofVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc2VhcmNoZXIgPSBuZXcgU2VhcmNoQXBpKHtcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgYW5zd2Vyc0tleTogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgIGxvY2FsZTogdGhpcy5fbG9jYWxlXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiBjb250YWluaW5nIHRoZSBpbnRlZ3JhdGlvbiB3aXRoIHRoZSBSRVNUZnVsIGF1dG9jb21wbGV0ZSBBUElcbiAgICAgKiBGb3IgZmlsdGVyIHNlYXJjaCwgdmVydGljYWwgYXV0b2NvbXBsZXRlLCBhbmQgdW5pdmVyc2FsIGF1dG9jb21wbGV0ZVxuICAgICAqIEB0eXBlIHtBdXRvY29tcGxldGV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hdXRvQ29tcGxldGUgPSBuZXcgQXV0b0NvbXBsZXRlQXBpKHtcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgYW5zd2Vyc0tleTogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgIGxvY2FsZTogdGhpcy5fbG9jYWxlXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgUSZBIHJlc3QgaW50ZXJmYWNlXG4gICAgICogQHR5cGUge1F1ZXN0aW9uQW5zd2VyQXBpfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcXVlc3Rpb25BbnN3ZXIgPSBuZXcgUXVlc3Rpb25BbnN3ZXJBcGkoe1xuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXlcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggaW4gdGhlIGNvbnRleHQgb2YgYSB2ZXJ0aWNhbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmVydGljYWxLZXkgdmVydGljYWwgSUQgZm9yIHRoZSBzZWFyY2hcbiAgICogQHBhcmFtIHtvYmplY3R9IHF1ZXJ5IFRoZSBxdWVyeSBkZXRhaWxzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5pbnB1dCBUaGUgaW5wdXQgdG8gc2VhcmNoIGZvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuZmlsdGVyIFRoZSBmaWx0ZXIgdG8gdXNlIGluIHRoZSBzZWFyY2hcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmZhY2V0RmlsdGVyIFRoZSBmYWNldCBmaWx0ZXIgdG8gdXNlIGluIHRoZSBzZWFyY2hcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1ZXJ5LmxpbWl0IFRoZSBtYXggbnVtYmVyIG9mIHJlc3VsdHMgdG8gaW5jbHVkZSwgbWF4IG9mIDUwXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBxdWVyeS5vZmZzZXQgVGhlIHJlc3VsdHMgb2Zmc2V0LCBmb3IgZmV0Y2hpbmcgbW9yZSByZXN1bHRzIG9mIHRoZSBzYW1lIHF1ZXJ5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5pZCBUaGUgcXVlcnkgSUQgdG8gdXNlLiBJZiBwYWdpbmcgd2l0aGluIGEgcXVlcnksIHRoZSBzYW1lIElEIHNob3VsZCBiZSB1c2VkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcXVlcnkuYXBwZW5kIElmIHRydWUsIGFkZHMgdGhlIHJlc3VsdHMgb2YgdGhpcyBxdWVyeSB0byB0aGUgZW5kIG9mIHRoZSBjdXJyZW50IHJlc3VsdHMsIGRlZmF1bHRzIGZhbHNlXG4gICAqL1xuICB2ZXJ0aWNhbFNlYXJjaCAodmVydGljYWxLZXksIHF1ZXJ5KSB7XG4gICAgaWYgKCFxdWVyeS5hcHBlbmQpIHtcbiAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUywgVmVydGljYWxSZXN1bHRzLnNlYXJjaExvYWRpbmcoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaGVyXG4gICAgICAudmVydGljYWxTZWFyY2godmVydGljYWxLZXksIHtcbiAgICAgICAgbGltaXQ6IHRoaXMuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5TRUFSQ0hfTElNSVQpLFxuICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQ6IHRoaXMuX2lzRHluYW1pY0ZpbHRlcnNFbmFibGVkXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gU2VhcmNoRGF0YVRyYW5zZm9ybWVyLnRyYW5zZm9ybVZlcnRpY2FsKHJlc3BvbnNlKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBkYXRhW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuTkFWSUdBVElPTiwgZGF0YVtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXSk7XG5cbiAgICAgICAgaWYgKHF1ZXJ5LmFwcGVuZCkge1xuICAgICAgICAgIGNvbnN0IG1lcmdlZFJlc3VsdHMgPSB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUylcbiAgICAgICAgICAgIC5hcHBlbmQoZGF0YVtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXSk7XG4gICAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTLCBtZXJnZWRSZXN1bHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFMsIGRhdGFbU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUU10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGFbU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTXSkge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTLCBkYXRhW1N0b3JhZ2VLZXlzLkRZTkFNSUNfRklMVEVSU10pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaCAocXVlcnlTdHJpbmcsIHVybHMpIHtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTLCBVbml2ZXJzYWxSZXN1bHRzLnNlYXJjaExvYWRpbmcoKSk7XG5cbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoZXJcbiAgICAgIC51bml2ZXJzYWxTZWFyY2gocXVlcnlTdHJpbmcpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBTZWFyY2hEYXRhVHJhbnNmb3JtZXIudHJhbnNmb3JtKHJlc3BvbnNlLCB1cmxzKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBkYXRhW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuTkFWSUdBVElPTiwgZGF0YVtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuRElSRUNUX0FOU1dFUiwgZGF0YVtTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFMsIGRhdGFbU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFNdLCB1cmxzKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVTVElPTl9TVUJNSVNTSU9OLCBuZXcgUXVlc3Rpb25TdWJtaXNzaW9uKHtcbiAgICAgICAgICBxdWVzdGlvblRleHQ6IHF1ZXJ5U3RyaW5nXG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGFuIGlucHV0LCBxdWVyeSBmb3IgYSBsaXN0IG9mIHNpbWlsYXIgcmVzdWx0cyBhbmQgc2V0IGludG8gc3RvcmFnZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgICAgIHRoZSBzdHJpbmcgdG8gYXV0b2NvbXBsZXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlVW5pdmVyc2FsIChpbnB1dCwgbmFtZXNwYWNlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5VW5pdmVyc2FsKGlucHV0KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke25hbWVzcGFjZX1gLCBkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGFuIGlucHV0LCBxdWVyeSBmb3IgYSBsaXN0IG9mIHNpbWlsYXIgcmVzdWx0cyBpbiB0aGUgcHJvdmlkZWQgdmVydGljYWxcbiAgICogYW5kIHNldCBpbnRvIHN0b3JhZ2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0ICAgICAgIHRoZSBzdHJpbmcgdG8gYXV0b2NvbXBsZXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmVydGljYWxLZXkgdGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIGV4cGVyaWVuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJhcktleSAgICAgIHRoZSBiYXIga2V5IGZvciB0aGUgZXhwZXJpZW5jZVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlVmVydGljYWwgKGlucHV0LCBuYW1lc3BhY2UsIHZlcnRpY2FsS2V5LCBiYXJLZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0NvbXBsZXRlXG4gICAgICAucXVlcnlWZXJ0aWNhbChpbnB1dCwgdmVydGljYWxLZXksIGJhcktleSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkFVVE9DT01QTEVURX0uJHtuYW1lc3BhY2V9YCwgZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhbiBpbnB1dCwgcHJvdmlkZSBhIGxpc3Qgb2Ygc3VpdGFibGUgZmlsdGVycyBmb3IgYXV0b2NvbXBsZXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0ICAgICAgICAgdGhlIHN0cmluZyB0byBzZWFyY2ggZm9yIGZpbHRlcnMgd2l0aFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlICAgICB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbEtleSAgIHRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBleHBlcmllbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiYXJLZXkgICAgICAgIHRoZSBiYXIga2V5IGZvciB0aGUgZXhwZXJpZW5jZVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlRmlsdGVyIChpbnB1dCwgbmFtZXNwYWNlLCB2ZXJ0aWNhbEtleSwgYmFyS2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5RmlsdGVyKGlucHV0LCB2ZXJ0aWNhbEtleSwgYmFyS2V5KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke25hbWVzcGFjZX1gLCBkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1Ym1pdHMgYSBxdWVzdGlvbiB0byB0aGUgc2VydmVyIGFuZCB1cGRhdGVzIHRoZSB1bmRlcmx5aW5nIHF1ZXN0aW9uIG1vZGVsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBxdWVzdGlvbiBUaGUgcXVlc3Rpb24gb2JqZWN0IHRvIHN1Ym1pdCB0byB0aGUgc2VydmVyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBxdWVzdGlvbi5lbnRpdHlJZCBUaGUgZW50aXR5IHRvIGFzc29jaWF0ZSB3aXRoIHRoZSBxdWVzdGlvbiAocmVxdWlyZWQpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5sYW51YWdlIFRoZSBsYW5ndWFnZSBvZiB0aGUgcXVlc3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLnNpdGUgVGhlIFwicHVibGlzaGVyXCIgb2YgdGhlIChlLmcuICdGSVJTVF9QQVJUWScpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5uYW1lIFRoZSBuYW1lIG9mIHRoZSBhdXRob3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLmVtYWlsIFRoZSBlbWFpbCBhZGRyZXNzIG9mIHRoZSBhdXRob3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLnF1ZXN0aW9uVGV4dCBUaGUgcXVlc3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLnF1ZXN0aW9uRGVzY3JpcHRpb24gQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcXVlc3Rpb25cbiAgICovXG4gIHN1Ym1pdFF1ZXN0aW9uIChxdWVzdGlvbikge1xuICAgIHJldHVybiB0aGlzLl9xdWVzdGlvbkFuc3dlclxuICAgICAgLnN1Ym1pdFF1ZXN0aW9uKHF1ZXN0aW9uKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoXG4gICAgICAgICAgU3RvcmFnZUtleXMuUVVFU1RJT05fU1VCTUlTU0lPTixcbiAgICAgICAgICBRdWVzdGlvblN1Ym1pc3Npb24uc3VibWl0dGVkKCkpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmVzIHRoZSBnaXZlbiBxdWVyeSBpbnRvIHN0b3JhZ2UsIHRvIGJlIHVzZWQgZm9yIHRoZSBuZXh0IHNlYXJjaFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgdGhlIHF1ZXJ5IHRvIHN0b3JlXG4gICAqL1xuICBzZXRRdWVyeSAocXVlcnkpIHtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZLCBxdWVyeSk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmVzIHRoZSBwcm92aWRlZCBxdWVyeSBJRCwgdG8gYmUgdXNlZCBpbiBhbmFseXRpY3NcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5SWQgVGhlIHF1ZXJ5IGlkIHRvIHN0b3JlXG4gICAqL1xuICBzZXRRdWVyeUlkIChxdWVyeUlkKSB7XG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWV9JRCwgcXVlcnlJZCk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmVzIHRoZSBnaXZlbiBmaWx0ZXIgaW50byBzdG9yYWdlLCB0byBiZSB1c2VkIGZvciB0aGUgbmV4dCBzZWFyY2hcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqIEBwYXJhbSB7RmlsdGVyfSBmaWx0ZXIgICAgdGhlIGZpbHRlciB0byBzZXRcbiAgICovXG4gIHNldEZpbHRlciAobmFtZXNwYWNlLCBmaWx0ZXIpIHtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHtuYW1lc3BhY2V9YCwgZmlsdGVyKTtcbiAgfVxuXG4gIHNldEZhY2V0RmlsdGVyIChuYW1lc3BhY2UsIGZpbHRlcikge1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuRkFDRVRfRklMVEVSfS4ke25hbWVzcGFjZX1gLCBmaWx0ZXIpO1xuICB9XG5cbiAgZW5hYmxlRHluYW1pY0ZpbHRlcnMgKCkge1xuICAgIHRoaXMuX2lzRHluYW1pY0ZpbHRlcnNFbmFibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHNldFNlYXJjaExpbWl0IChsaW1pdCkge1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuU0VBUkNIX0xJTUlULCBsaW1pdCk7XG4gIH1cblxuICBvbiAoZXZ0LCBtb2R1bGVJZCwgY2IpIHtcbiAgICByZXR1cm4gdGhpcy5nbG9iYWxTdG9yYWdlLm9uKGV2dCwgbW9kdWxlSWQsIGNiKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQ29tcG9uZW50TWFuYWdlciAqL1xuXG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuXG4vKipcbiAqIENvbXBvbmVudE1hbmFnZXIgaXMgYSBTaW5nbGV0b25lIHRoYXQgY29udGFpbnMgYm90aCBhbiBpbnRlcm5hbCByZWdpc3RyeSBvZlxuICogZWxpZ2libGUgY29tcG9uZW50cyB0byBiZSBjcmVhdGVkLCBhcyB3ZWxsIGFzIGtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50XG4gKiBpbnN0YW50aWF0ZWQgYW5kIGFjdGl2ZSBjb21wb25lbnRzLlxuICpcbiAqIEFMTCBjb21wb25lbnRzIHNob3VsZCBiZSBjb25zdHJ1Y3RlZCB1c2luZyB0aGUge0NvbXBvbmVudE1hbmFnZXJ9IHZpYSBpdHMgYGNyZWF0ZWAgbWV0aG9kLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIGlmICghQ29tcG9uZW50TWFuYWdlci5zZXRJbnN0YW5jZSh0aGlzKSkge1xuICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9uZW50IHJlZ2lzdHJ5IGlzIGFuIGludGVybmFsIG1hcCwgdGhhdCBjb250YWluc1xuICAgICAqIGFsbCBhdmFpbGFibGUgY29tcG9uZW50IENMQVNTRVMgdXNlZCBmb3IgY3JlYXRpb24gb3Igb3ZlcnJpZGUuXG4gICAgICogRWFjaCBjb21wb25lbnQgY2xhc3MgaGFzIGEgdW5pcXVlIFRZUEUsIHdoaWNoIGlzIHVzZWQgYXMgdGhlIGtleSBmb3IgdGhlIHJlZ2lzdHJ5XG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9jb21wb25lbnRSZWdpc3RyeSA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFjdGl2ZSBjb21wb25lbnRzIGlzIGFuIGludGVybmFsIGNvbnRhaW5lciB0byBrZWVwIHRyYWNrXG4gICAgICogb2YgYWxsIG9mIHRoZSBjb21wb25lbnRzIHRoYXQgaGF2ZSBiZWVuIGNvbnN0cnVjdGVkXG4gICAgICovXG4gICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNvcmUgbGlicmFyeSBkZXBlbmRlbmN5XG4gICAgICpcbiAgICAgKiBUaGUgQ29yZSBjb250YWlucyBib3RoIHRoZSBzdG9yYWdlIEFORCBzZXJ2aWNlcyB0aGF0IGFyZSBuZWVkZWQgZm9yIHBlcmZvcm1pbmcgb3BlcmF0aW9uc1xuICAgICAqIGxpa2Ugc2VhcmNoIGFuZCBhdXRvIGNvbXBsZXRlLlxuICAgICAqXG4gICAgICogVGhlIHN0b3JhZ2UgaXMgdGhlIHNvdXJjZSBvZiB0cnV0aCBmb3IgdGhlIHN0YXRlIG9mIEFMTCBjb21wb25lbnRzLlxuICAgICAqIFdoZW5ldmVyIHRoZSBzdG9yYWdlIGlzIHVwZGF0ZWQsIHRoZSBzdGF0ZSBnZXRzIHB1c2hlZCBkb3duIHRvIHRoZSBuZWNlc3NhcnkgY29tcG9uZW50cy5cbiAgICAgKiBAdHlwZSB7Q29yZX1cbiAgICAgKi9cbiAgICB0aGlzLl9jb3JlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBwcmltYXJ5IHJlbmRlcmVyIHRvIHVzZSBmb3IgYWxsIGNvbXBvbmVudHNcbiAgICAgKiBAdHlwZSB7SGFuZGxlYmFyc1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3JlbmRlcmVyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBhbmFseXRpY3MgcmVwb3J0ZXIgZGVwZW5kZW5jeVxuICAgICAqL1xuICAgIHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyID0gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBzZXRJbnN0YW5jZSAoaW5zdGFuY2UpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UgKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgc2V0UmVuZGVyZXIgKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldENvcmUgKGNvcmUpIHtcbiAgICB0aGlzLl9jb3JlID0gY29yZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldEFuYWx5dGljc1JlcG9ydGVyIChyZXBvcnRlcikge1xuICAgIHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyID0gcmVwb3J0ZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXJzIGEgY29tcG9uZW50IHRvIGJlIGVsaWdpYmxlIGZvciBjcmVhdGlvbiBhbmQgb3ZlcnJpZGUuXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBUaGUgQ29tcG9uZW50IENsYXNzIHRvIHJlZ2lzdGVyXG4gICAqL1xuICByZWdpc3RlciAoY29tcG9uZW50Q2xhenopIHtcbiAgICB0aGlzLl9jb21wb25lbnRSZWdpc3RyeVtjb21wb25lbnRDbGF6ei50eXBlXSA9IGNvbXBvbmVudENsYXp6O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZSBpcyB0aGUgZW50cnkgcG9pbnQgZm9yIGNvbnN0cnVjdGluZyBhbnkgYW5kIGFsbCBjb21wb25lbnRzLlxuICAgKiBJdCB3aWxsIGluc3RhbnRpYXRlIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQsIGFuZCBib3RoIGFwcGx5XG4gICAqIGluaXRpYWwgc3RhdGUgZnJvbSB0aGUgc3RvcmFnZSBhbmQgYmluZCBpdCB0byB0aGUgc3RvcmFnZSBmb3IgdXBkYXRlcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudFR5cGUgVGhlIGNvbXBvbmVudCB0eXBlIHRvIGNyZWF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBUaGUgb3B0aW9ucyB0byBwaXBlIHRvIHRoZSBjb25zdHJ1Y3Rpb24gb2YgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgY3JlYXRlIChjb21wb25lbnRUeXBlLCBvcHRzKSB7XG4gICAgLy8gRXZlcnkgY29tcG9uZW50IG5lZWRzIGxvY2FsIGFjY2VzcyB0byB0aGUgY29tcG9uZW50IG1hbmFnZXJcbiAgICAvLyBiZWNhdXNlIHNvbWV0aW1lcyBjb21wb25lbnRzIGhhdmUgc3ViY29tcG9uZW50cyB0aGF0IG5lZWQgdG8gYmVcbiAgICAvLyBjb25zdHJ1Y3RlZCBkdXJpbmcgY3JlYXRpb25cbiAgICBvcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb3JlOiB0aGlzLl9jb3JlLFxuICAgICAgcmVuZGVyZXI6IHRoaXMuX3JlbmRlcmVyLFxuICAgICAgYW5hbHl0aWNzUmVwb3J0ZXI6IHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyLFxuICAgICAgY29tcG9uZW50TWFuYWdlcjogdGhpc1xuICAgIH0sIG9wdHMpO1xuXG4gICAgbGV0IGNvbXBvbmVudENsYXNzID0gdGhpcy5fY29tcG9uZW50UmVnaXN0cnlbY29tcG9uZW50VHlwZV07XG5cbiAgICBpZiAoXG4gICAgICAhY29tcG9uZW50Q2xhc3MuYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkKCkgJiZcbiAgICAgIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMuc29tZShjID0+IGMubmFtZSA9PT0gb3B0cy5uYW1lKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgYEFub3RoZXIgY29tcG9uZW50IHdpdGggbmFtZSAke29wdHMubmFtZX0gYWxyZWFkeSBleGlzdHNgLFxuICAgICAgICBjb21wb25lbnRUeXBlKTtcbiAgICB9XG5cbiAgICAvLyBJbnN0YW50aWF0ZSBvdXIgbmV3IGNvbXBvbmVudCBhbmQga2VlcCB0cmFjayBvZiBpdFxuICAgIGxldCBjb21wb25lbnQgPVxuICAgICAgbmV3IHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5W2NvbXBvbmVudFR5cGVdKG9wdHMpXG4gICAgICAgIC5pbml0KG9wdHMpO1xuXG4gICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIGdsb2JhbCBzdG9yYWdlIHRvIHBvd2VyIHN0YXRlLCBhcHBseSB0aGUgc3RhdGVcbiAgICAvLyBmcm9tIHRoZSBzdG9yYWdlIHRvIHRoZSBjb21wb25lbnQsIGFuZCB0aGVuIGJpbmQgdGhlIGNvbXBvbmVudFxuICAgIC8vIHN0YXRlIHRvIHRoZSBzdG9yYWdlIHZpYSBpdHMgdXBkYXRlc1xuICAgIGlmICh0aGlzLl9jb3JlICYmIHRoaXMuX2NvcmUuZ2xvYmFsU3RvcmFnZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKGNvbXBvbmVudC5tb2R1bGVJZCA9PT0gdW5kZWZpbmVkIHx8IGNvbXBvbmVudC5tb2R1bGVJZCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jb3JlLmdsb2JhbFN0b3JhZ2VcbiAgICAgICAgLm9uKCd1cGRhdGUnLCBjb21wb25lbnQubW9kdWxlSWQsIChkYXRhKSA9PiB7XG4gICAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgcHJvdmlkZWQgY29tcG9uZW50IGZyb20gdGhlIGxpc3Qgb2YgYWN0aXZlIGNvbXBvbmVudHMgYW5kIHJlbW92ZVxuICAgKiB0aGUgYXNzb2NpYXRlZCBzdG9yYWdlIGV2ZW50IGxpc3RlbmVyXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCB0byByZW1vdmVcbiAgICovXG4gIHJlbW92ZSAoY29tcG9uZW50KSB7XG4gICAgdGhpcy5fY29yZS5nbG9iYWxTdG9yYWdlLm9mZigndXBkYXRlJywgY29tcG9uZW50Lm1vZHVsZUlkKTtcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5maW5kSW5kZXgoYyA9PiBjLm5hbWUgPT09IGNvbXBvbmVudC5uYW1lKTtcbiAgICB0aGlzLl9hY3RpdmVDb21wb25lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBnZXRBY3RpdmVDb21wb25lbnQgKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5maW5kKGMgPT4gYy5jb25zdHJ1Y3Rvci50eXBlID09PSB0eXBlKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVuZGVyZXIgKi9cblxuLyoqXG4gKiBSZW5kZXJlciBpcyBhbiBhYnN0cmFjdCBjbGFzcyB0aGF0IGFsbCBSZW5kZXJlcnMgc2hvdWxkIGV4dGVuZCBhbmQgaW1wbGVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcbiAgLyoqXG4gICAqIHJlbmRlciBpcyBhIGNvcmUgbWV0aG9kIGZvciBhbGwgcmVuZGVyZXJzLlxuICAgKiBBbGwgaW1wbGVtZW50YXRpb25zIHNob3VsZCBvdmVycmlkZSB0aGlzIGNsYXNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKi9cbiAgcmVuZGVyICh0ZW1wbGF0ZSwgZGF0YSkge1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHJlZ2lzdGVySGVscGVyIChuYW1lLCBjYikge1xuXG4gIH1cblxuICBjb21waWxlICh0ZW1wbGF0ZSkge1xuXG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEhhbmRsZWJhcnNSZW5kZXJlciAqL1xuXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbi8qKlxuICogSGFuZGxlYmFyc1JlbmRlcmVyIGlzIGEgd3JhcHBlciBhcm91bmQgdGhlIG5hdGl2YXRlIGhhbmRsZWJhcnMgcmVuZGVyZXIuXG4gKiBAZXh0ZW5kcyBSZW5kZXJlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYW5kbGViYXJzUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yICh0ZW1wbGF0ZXMgPSB7fSwgb3B0cyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBoYW5kbGViYXJzIGNvbXBpbGVyXG4gICAgICogQHR5cGUge0hhbmRsZWJhcnN9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9oYW5kbGViYXJzID0gdGVtcGxhdGVzLl9oYiB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIHByZS1jb21waWxlZCBoYW5kbGViYXJzIHRlbXBsYXRlc1xuICAgICAqIEB0eXBlIHtIYW5kbGViYXJzfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVzID0gdGVtcGxhdGVzIHx8IHt9O1xuICB9XG5cbiAgaW5pdCAodGVtcGxhdGVzKSB7XG4gICAgLy8gQXNzaWduIHRoZSBoYW5kbGViYXJzIGNvbXBpbGVyIGFuZCB0ZW1wbGF0ZXMgYmFzZWQgb25cbiAgICAvLyBpbmZvcm1hdGlvbiBwcm92aWRlZCBmcm9tIGV4dGVybmFsIGRlcCAoaW4gZGVmYXVsdCBjYXNlLCBpdCBjb21lcyBmcm9tIGV4dGVybmFsIHNlcnZlciByZXF1ZXN0KVxuICAgIHRoaXMuX2hhbmRsZWJhcnMgPSB0ZW1wbGF0ZXMuX2hiO1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHRlbXBsYXRlcztcblxuICAgIC8vIFRPRE8oYmlsbHkpIE9uY2Ugd2UgcmUtd3JpdGUgdGVtcGxhdGVzIHVzaW5nIHRoZSBuZXcgaGVscGVycyBsaWJyYXJ5XG4gICAgLy8gd2UgcHJvYmFibHkgZG9uJ3QgbmVlZCB0aGVzZSBjdXN0b20gaGVscGVycyBhbnltb3JlXG4gICAgdGhpcy5fcmVnaXN0ZXJDdXN0b21IZWxwZXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXJIZWxwZXIgaXMgYSBwdWJsaWMgaW50ZXJmYWNlIGZvciBleHRlcm5hbCBkZXBlbmRlbmNpZXMgdG9cbiAgICogcmVnaXN0ZXIgdGhlaXIgb3duIGN1c3RvbSBoZWxwZXJzIHRvIG91ciBpbnRlcm5hbCBIYW5kbGViYXJzIENvbXBpbGVyXG4gICAqL1xuICByZWdpc3RlckhlbHBlciAobmFtZSwgY2IpIHtcbiAgICB0aGlzLl9oYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKG5hbWUsIGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb21waWxlIGEgaGFuZGxlYmFycyB0ZW1wbGF0ZSBzbyB0aGF0IGl0IGNhbiBiZSByZW5kZXJlZCxcbiAgICogdXNpbmcgdGhlIHtIYW5kbGViYXJzfSBjb21waWxlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgVGhlIHRlbXBsYXRlIHN0cmluZyB0byBjb21waWxlXG4gICAqL1xuICBjb21waWxlICh0ZW1wbGF0ZSkge1xuICAgIGlmICh0eXBlb2YgdGVtcGxhdGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9oYW5kbGViYXJzLmNvbXBpbGUodGVtcGxhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbmRlciB3aWxsIHJlbmRlciBhIHRlbXBsYXRlIHdpdGggZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFByb3ZpZGUgZWl0aGVyIGEgdGVtcGxhdGVOYW1lIG9yIGEgcHJlLWNvbXBpbGVkIHRlbXBsYXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHByb3ZpZGUgdG8gdGhlIHRlbXBsYXRlXG4gICAqL1xuICByZW5kZXIgKGNvbmZpZywgZGF0YSkge1xuICAgIC8vIElmIGEgY3VzdG9tIHRlbXBsYXRlIGlzIHByb3ZpZGVkLCB1c2UgaXQsXG4gICAgLy8gb3RoZXJ3aXNlIGZhbGwgYmFjayB0byB0aGUgdGVtcGxhdGUgbmFtZVxuICAgIC8vIFRPRE8oYmlsbHkpIFRoaXMgaW50ZXJmYWNlIHNob3VsZCBwcm9iYWJseSBiZSBsZXNzIHVnbHlcbiAgICBpZiAoY29uZmlnLnRlbXBsYXRlICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gY29uZmlnLnRlbXBsYXRlKGRhdGEpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVzW2NvbmZpZy50ZW1wbGF0ZU5hbWVdKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBmaW5kL3JlbmRlciB0ZW1wbGF0ZTogJyArIGNvbmZpZy50ZW1wbGF0ZU5hbWUsIGUpO1xuICAgIH1cbiAgfVxuXG4gIF9yZWdpc3RlckN1c3RvbUhlbHBlcnMgKCkge1xuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2lmZXEnLCBmdW5jdGlvbiAoYXJnMSwgYXJnMiwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIChhcmcxID09PSBhcmcyKSA/IG9wdGlvbnMuZm4odGhpcykgOiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdpZm5vdGVxJywgZnVuY3Rpb24gKGFyZzEsIGFyZzIsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiAoYXJnMSAhPT0gYXJnMikgPyBvcHRpb25zLmZuKHRoaXMpIDogb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignZm9ybWF0UGhvbmVOdW1iZXInLCBmdW5jdGlvbiAocGhvbmVOdW1iZXJTdHJpbmcpIHtcbiAgICAgIHZhciBjbGVhbmVkID0gKCcnICsgcGhvbmVOdW1iZXJTdHJpbmcpLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG4gICAgICB2YXIgbWF0Y2ggPSBjbGVhbmVkLm1hdGNoKC9eKDF8KT8oXFxkezN9KShcXGR7M30pKFxcZHs0fSkkLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdmFyIGludGxDb2RlID0gKG1hdGNoWzFdID8gJysxICcgOiAnJyk7XG4gICAgICAgIHJldHVybiBbaW50bENvZGUsICcoJywgbWF0Y2hbMl0sICcpICcsIG1hdGNoWzNdLCAnLScsIG1hdGNoWzRdXS5qb2luKCcnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignYXNzaWduJywgZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIG9wdGlvbnMgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmICghb3B0aW9ucy5kYXRhLnJvb3QpIHtcbiAgICAgICAgb3B0aW9ucy5kYXRhLnJvb3QgPSB7fTtcbiAgICAgIH1cblxuICAgICAgbGV0IHYgPSAnJztcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgdiA9IHYgKyBhcmdzW2ldO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLmRhdGEucm9vdFtuYW1lXSA9IHY7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdqc29uJywgZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gbmFtZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgID8gJydcbiAgICAgICAgOiBKU09OLnN0cmluZ2lmeShuYW1lKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEhhbmRsZWJhcnNSZW5kZXJlciBmcm9tICcuL2hhbmRsZWJhcnNyZW5kZXJlcic7XG5cbi8vIEluIHRoZSBmdXR1cmUsIHRoaXMgd2lsbCBjb250YWluIGFsbCBkaWZmZXJlbnQgdHlwZXMgb2YgcmVuZGVyZXJzXG4vLyBFLmcuIE11c3RhY2hlLCBTT1ksIEhhbmRsZUJhcnMsIFJlYWN0LCBldGMuXG5leHBvcnQgY29uc3QgUmVuZGVyZXJzID0ge1xuICBTT1k6IFJlbmRlcmVyLFxuICBIYW5kbGViYXJzOiBIYW5kbGViYXJzUmVuZGVyZXJcbn07XG4iLCIvKiogQG1vZHVsZSBET00gKi9cblxuLyogZ2xvYmFsIEhUTUxFbGVtZW50LCBIVE1MRG9jdW1lbnQsIFdpbmRvdywgRXZlbnQgKi9cblxubGV0IGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuXG4vKipcbiAqIFN0YXRpYyBpbnRlcmZhY2UgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIERPTSBBUEkuXG4gKiBAbmFtZXNwYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTSB7XG4gIHN0YXRpYyBzZXR1cCAoZCwgcCkge1xuICAgIGRvY3VtZW50ID0gZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGUgYSBIVE1MRWxlbWVudCBmcm9tIGFuZCBIVE1MIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gaHRtbCBUaGUgSFRNTCB0byBwYXJzZSB0byBhIERPTSBub2RlLlxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGUgKGh0bWwpIHtcbiAgICBpZiAoJ2NyZWF0ZVJhbmdlJyBpbiBkb2N1bWVudCkge1xuICAgICAgLy8gcHJlZmVyIHRoaXMgaW1wbGVtZW50YXRpb24gYXMgaXQgaGFzIHdpZGVyIGJyb3dzZXIgc3VwcG9ydFxuICAgICAgLy8gYW5kIGl0J3MgYmV0dGVyIHBlcmZvcm1pbmcuXG4gICAgICAvLyBzZWUgaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvY29udmVydC1odG1sLXN0aW5ncy1kb20tbm9kZXNcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGh0bWwpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWcpO1xuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvLyBmYWxsYmFjayB0byB0aGlzIGJlY2F1c2Ugb2YgYSBidWcgaW4ganNkb20gdGhhdCBjYXVzZXMgdGVzdHMgdG8gZmFpbFxuICAgIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pzZG9tL2pzZG9tL2lzc3Vlcy8zOTlcbiAgICByZXR1cm4gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC9odG1sJykuYm9keTtcbiAgfVxuXG4gIC8qKlxuICAgKiBxdWVyeSB0aGUgRE9NIGZvciBhIGdpdmVuIGNzcyBzZWxlY3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgT3B0aW9uYWwgY29udGV4dCB0byB1c2UgZm9yIGEgc2VhcmNoLiBEZWZhdWx0cyB0byBkb2N1bWVudCBpZiBub3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciB0aGUgQ1NTIHNlbGVjdG9yIHRvIHF1ZXJ5IGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IHRoZSBGSVJTVCBub2RlIGl0IGZpbmRzLCBpZiBhbnlcbiAgICovXG4gIHN0YXRpYyBxdWVyeSAocGFyZW50LCBzZWxlY3Rvcikge1xuICAgIC8vIEZhY2FkZSwgc2hpZnRpbmcgdGhlIHNlbGVjdG9yIHRvIHRoZSBwYXJlbnQgYXJndW1lbnQgaWYgb25seSBvbmVcbiAgICAvLyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RvciA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgV2luZG93IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTERvY3VtZW50KSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBxdWVyeSB0aGUgRE9NIGZvciBhIGdpdmVuIGNzcyBzZWxlY3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgT3B0aW9uYWwgY29udGV4dCB0byB1c2UgZm9yIGEgc2VhcmNoLiBEZWZhdWx0cyB0byBkb2N1bWVudCBpZiBub3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciB0aGUgQ1NTIHNlbGVjdG9yIHRvIHF1ZXJ5IGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IHRoZSBGSVJTVCBub2RlIGl0IGZpbmRzLCBpZiBhbnlcbiAgICovXG4gIHN0YXRpYyBxdWVyeUFsbCAocGFyZW50LCBzZWxlY3Rvcikge1xuICAgIC8vIEZhY2FkZSwgc2hpZnRpbmcgdGhlIHNlbGVjdG9yIHRvIHRoZSBwYXJlbnQgYXJndW1lbnQgaWYgb25seSBvbmVcbiAgICAvLyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RvciA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIC8vIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSBjbGllbnQgY29kZSBpcyB1c2luZyBhIHBvaW50ZXIgdG8gYSBkb20gbm9kZSBhbmQgaXQncyBudWxsLCBlLmcuIHRoaXMuX2NvbnRhaW5lclxuICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBXaW5kb3cpIHtcbiAgICAgIHJldHVybiBbc2VsZWN0b3JdO1xuICAgIH1cblxuICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gIH1cblxuICBzdGF0aWMgb25SZWFkeSAoY2IpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGVkJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKSB7XG4gICAgICBjYigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIERPTS5vbihkb2N1bWVudCwgJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlRWxlIHdpbGwgY3JlYXRlIGEge0hUTUxFbGVtZW50fSBhbmQgYXBwbHkgdGhlIHByb3BlcnRpZXMgYXR0cmlidXRlcyB0aHJvdWdoIGFuIG9iamVjdCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGVsIFRoZSBlbGVtZW50IGB0YWdgIG5hbWUgdG8gY29uc3RydWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzX2RhdGEgT3B0aW9uYWwgYXR0cmlidXRlcyB0byBhcHBseSB0byB0aGUgbmV3IEhUTUxFbGVtZW50XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlRWwgKGVsLCBvcHRzX2RhdGEgPSB7fSkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbCk7XG4gICAgbGV0IHByb3BzID0gT2JqZWN0LmtleXMob3B0c19kYXRhKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9wc1tpXSA9PT0gJ2NsYXNzJykge1xuICAgICAgICBET00uYWRkQ2xhc3Mobm9kZSwgb3B0c19kYXRhW3Byb3BzW2ldXSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBub2RlW3Byb3BzW2ldXSA9IG9wdHNfZGF0YVtwcm9wc1tpXV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgYXBwZW5kIChwYXJlbnQsIG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBub2RlID0gcGFyZW50O1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXJlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJlbnQgPSBET00ucXVlcnkocGFyZW50KTtcbiAgICB9XG5cbiAgICAvLyBTdXBwb3J0IEhUTUwgaW5qZWN0aW9uIGFzIHdlbGwgYXMgSFRNTEVsZW1lbnQgYXBwZW5kc1xuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyQmVnaW4nLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhZGRDbGFzcyAobm9kZSwgY2xhc3NOYW1lKSB7XG4gICAgbGV0IGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJywnKTtcbiAgICBsZXQgbGVuID0gY2xhc3Nlcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBub2RlLmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGVtcHR5IChwYXJlbnQpIHtcbiAgICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICBzdGF0aWMgY3NzIChzZWxlY3Rvciwgc3R5bGVzKSB7XG4gICAgbGV0IG5vZGUgPSBET00ucXVlcnkoc2VsZWN0b3IpO1xuXG4gICAgZm9yIChsZXQgcHJvcCBpbiBzdHlsZXMpIHtcbiAgICAgIG5vZGUuc3R5bGVbcHJvcF0gPSBzdHlsZXNbcHJvcF07XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGF0dHIgKHNlbGVjdG9yLCBhdHRyLCB2YWwpIHtcbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLnNldEF0dHJpYnV0ZShhdHRyLCB2YWwpO1xuICB9XG5cbiAgc3RhdGljIGF0dHJpYnV0ZXMgKHNlbGVjdG9yLCBhdHRycykge1xuICAgIE9iamVjdC5lbnRyaWVzKGF0dHJzKVxuICAgICAgLmZvckVhY2goKFthdHRyLCB2YWxdKSA9PiB0aGlzLmF0dHIoc2VsZWN0b3IsIGF0dHIsIHZhbCkpO1xuICB9XG5cbiAgc3RhdGljIHRyaWdnZXIgKHNlbGVjdG9yLCBldmVudCwgc2V0dGluZ3MpIHtcbiAgICBsZXQgZSA9IG5ldyBFdmVudChldmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAnYnViYmxlcyc6IHRydWUsXG4gICAgICAnY2FuY2VsYWJsZSc6IHRydWVcbiAgICB9LCBzZXR0aW5ncyB8fCB7fSkpO1xuXG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5kaXNwYXRjaEV2ZW50KGUpO1xuICB9XG5cbiAgc3RhdGljIG9uIChzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgb2ZmIChzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZGVsZWdhdGUgKGN0eHQsIHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpIHtcbiAgICBsZXQgZWwgPSBET00ucXVlcnkoY3R4dCk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIHdoaWxlICghdGFyZ2V0LmlzRXF1YWxOb2RlKGVsKSkge1xuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgaGFuZGxlcihldmVudCwgdGFyZ2V0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRXZlbnRFbWl0dGVyICovXG5cbi8qKlxuICogRXZlbnRFbWl0dGVyIGlzIGEgYmFzZSBjbGFzcyBmb3IgYW55IG9iamVjdCB0aGF0IHdhbnRzIHRvIGV4cG9zZVxuICogYSBwdWIvc3ViIGludGVyZmFjZSwgZm9yIGVtaXR0aW5nIG1lc3NhZ2VzIGFuZCBwcm92aWRpbmcgbGlzdGVuZXJzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLyoqXG4gICAgICogVGhlIHN1YnNjcmliZXJzIG9mIG1lc3NhZ2VzXG4gICAgICogQHR5cGUge29iamVjdFtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbGlzdGVuZXJzID0ge307XG4gIH1cblxuICAvKipcbiAgICogb24gaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIHN1YnNjcmliaW5nIGV2ZW50cyB0aGF0IGFyZSBlbWl0dGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIGxpc3RlbiB0b1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gdGhlIHtldnR9IGlzIGVtaXR0ZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBvbmNlIE9wdGlvbmFsIHZhbHVlIHdoaWNoIHdpbGwgb25seSBoYW5kbGUgdGhlIG1lc3NhZ2Ugb25jZVxuICAgKi9cbiAgb24gKGV2dCwgY2IsIG9uY2UpIHtcbiAgICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbGxiYWNrIGhhbmRsZXIgc2hvdWxkIGJlIG9mIHR5cGUge2Z1bmN0aW9ufScpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9saXN0ZW5lcnNbZXZ0XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XSA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuX2xpc3RlbmVyc1tldnRdLnB1c2goe1xuICAgICAgZXZlbnQ6IGV2dCxcbiAgICAgIGNiOiBjYixcbiAgICAgIG9uY2U6IG9uY2UgfHwgZmFsc2VcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uY2UgaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIHN1YnNjcmliaW5nIGV2ZW50cyB0aGF0IGFyZSBlbWl0dGVkLlxuICAgKiBUaGUgaGFuZGxlciB3aWxsIG9ubHkgYmUgdHJpZ2dlcmVkIG9uY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gbGlzdGVuIHRvXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIFRoZSBjYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUge2V2dH0gaXMgZW1pdHRlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uY2UgT3B0aW9uYWwgdmFsdWUgd2hpY2ggd2lsbCBvbmx5IGhhbmRsZSB0aGUgbWVzc2FnZSBvbmNlXG4gICAqL1xuICBvbmNlIChldnQsIGNiKSB7XG4gICAgcmV0dXJuIHRoaXMub24oZXZ0LCBjYiwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogb2ZmIGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciB1bnN1YnNjcmliaW5nIGZyb20gYW4gZXZlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byB1bnN1YnNjcmliZSBmcm9tXG4gICAqL1xuICBvZmYgKGV2dCkge1xuICAgIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcnNbZXZ0XTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBlbWl0IGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciBicm9hZGNhc3RpbmcgbWVzc2FnZXMvZXZlbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gcHVibGlzaCBmcm9tXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIHRoZSBkYXRhIHRvIHNlbmQgYWxvbmcgdG8gdGhlIHN1YnNjcmliZXJzXG4gICAqL1xuICBlbWl0IChldnQsIGRhdGEpIHtcbiAgICBsZXQgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2dF07XG4gICAgaWYgKGxpc3RlbmVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSW52b2tlIGVhY2ggb2YgYWxsIHRoZSBsaXN0ZW5lciBoYW5kbGVycyBhbmQgcmVtb3ZlIHRoZSBvbmVzIHRoYXQgc2hvdWxkIGZpcmUgb25seSBvbmNlLlxuICAgIGxldCBrZWVwID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpc3RlbmVyc1tpXS5jYihkYXRhKTtcbiAgICAgIGlmIChsaXN0ZW5lcnNbaV0ub25jZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gSW5zdGVhZCBvZiBoYXZpbmcgYSAnZGlydHknIGFycmF5IHdpdGggZGVsZXRlZCBvciAndW5kZWZpbmVkJyBlbnRyaWVzLFxuICAgICAgLy8gd2UganVzdCBjcmVhdGUgYSBicmFuZCBuZXcgYXJyYXkgd2l0aG91dCB0aGUgbGlzdGVuZXJzIHRoYXQgd2VyZSByZW1vdmVkXG4gICAgICBrZWVwLnB1c2gobGlzdGVuZXJzW2ldKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgb3VyIG9sZCBsaXN0IG9mIGxpc3RlbmVycyB0byB0aGUgbmV3bHkgY3JlYXRlZCBhcnJheVxuICAgIHRoaXMuX2xpc3RlbmVyc1tldnRdID0ga2VlcDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU3RhdGUgKi9cblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi8uLi9jb3JlL2V2ZW50ZW1pdHRlci9ldmVudGVtaXR0ZXInO1xuXG4vKipcbiAqIFN0YXRlIGNvbnRhaW5zIHRoZSBkYXRhIGZvciB0aGUgY29tcG9uZW50XG4gKiBhbmQgZXhwb3NlcyBhbiB7RXZlbnRFbWl0dGVyfSBpbnRlcmZhY2Ugc28gdGhhdCBleHRlcm5hbFxuICogZGVwZW5kZW5jaWVzIGNhbiBsaXN0ZW4vaG9vayBzdWJzY3JpYmUgdG8gbWVzc2FnZXMvdXBkYXRlcy5cbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RhdGUgPSBkYXRhIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKiBOT1RFKGJpbGx5KTogRG9lcyBub3QgZmlyZSBhbiB1cGRhdGUgbWVzc2FnZVxuICAgKi9cbiAgaW5pdCAocHJvcCwgb3B0VmFsKSB7XG4gICAgdGhpcy5fc2V0KHByb3AsIG9wdFZhbCk7XG4gIH1cblxuICAvKipcbiAgICogc2V0dGVyIGZvciB0aGUgc3RhdGVcbiAgICogQHBhcmFtIHByb3Age3N0cmluZ3xPYmplY3R9IFRoZSBwcm9wZXJ0eSB0byBzZXRcbiAgICogQHBhcmFtIG9wdFZhbCBPcHRpb25hbCwgaWYgcHJvcCBpcyBhIHtzdHJpbmd9LCBpdCB3aWxsIGFzc2lnbiB0aGUgdmFsdWUgdG8gdGhhdCBwcm9wZXJ0eVxuICAgKi9cbiAgc2V0IChwcm9wLCBvcHRWYWwpIHtcbiAgICB0aGlzLl9zZXQocHJvcCwgb3B0VmFsKTtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldHRlciBmb3IgdGhlIHN0YXRlIGVuYWJsZXMgeW91IHRvIHVwZGF0ZSBhIHNpbmdsZSBwcm9wZXJ0eSwgb3IgY29tcGxldGUgc3RhdGVcbiAgICogZGVwZW5kaW5nIG9uIHRoZSBhcmd1bWVudHMgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSBwcm9wIHtzdHJpbmd8T2JqZWN0fSBUaGUgcHJvcGVydHkgdG8gc2V0XG4gICAqIEBwYXJhbSBvcHRWYWwgSWYgcHJvcCBpcyBhIHtzdHJpbmd9LCBwcm92aWRlIGl0cyB2YWx1ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NldCAocHJvcCwgb3B0VmFsKSB7XG4gICAgaWYgKG9wdFZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9zdGF0ZSA9IHByb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0YXRlW3Byb3BdID0gb3B0VmFsO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSAoZGF0YSkge1xuICAgIHRoaXMuX3N0YXRlID0gZGF0YTtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGEgcHJvcGVydGllcyB2YWx1ZSBmcm9tIHRoZSBzdGF0ZVxuICAgKiBJZiBubyBwcm9wZXJ0eSBwcm92aWRlZCwgcmV0dXJuIHRoZSBmdWxsIHN0YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRQcm9wIG9wdGlvbmFsIHByb3BlcnR5IHRvIHJldHJpZXZlXG4gICAqL1xuICBnZXQgKG9wdFByb3ApIHtcbiAgICBpZiAob3B0UHJvcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zdGF0ZVtvcHRQcm9wXTtcbiAgfVxuXG4gIGhhcyAocHJvcCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZVtwcm9wXSAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgYXNKU09OICgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gIH1cbn1cbiIsIi8qKlxuICogTW9kZWwgZm9yIHRoZSBhbmFseXRpY3MgZXZlbnQgdHlwZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmFseXRpY3NFdmVudCB7XG4gIGNvbnN0cnVjdG9yICh0eXBlLCBsYWJlbCkge1xuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIGV2ZW50IHRvIHJlcG9ydFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5ldmVudFR5cGUgPSB0eXBlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBvcHRpb25hbCBsYWJlbCB0byBiZSBwcm92aWRlZCBmb3IgdGhlIGV2ZW50XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgcHJvdmlkZWQgb3B0aW9ucyB0byB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgQWRkaXRpb25hbCBvcHRpb25zIGZvciB0aGUgZXZlbnRcbiAgICovXG4gIGFkZE9wdGlvbnMgKG9wdGlvbnMpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZXZlbnQgaW4gdGhlIGFwaSBmb3JtYXQsIHR5cGljYWxseSBmb3IgcmVwb3J0aW5nIHRvIHRoZSBhcGlcbiAgICovXG4gIHRvQXBpRXZlbnQgKCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQW5hbHl0aWNzUmVwb3J0ZXIgKi9cblxuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4vYW5hbHl0aWNzZXZlbnQnO1xuaW1wb3J0IHsgQW5zd2Vyc0FuYWx5dGljc0Vycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgeyBBTkFMWVRJQ1NfQkFTRV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IEh0dHBSZXF1ZXN0ZXIgZnJvbSAnLi4vaHR0cC9odHRwcmVxdWVzdGVyJztcblxuLyoqXG4gKiBDbGFzcyBmb3IgcmVwb3J0aW5nIGFuYWx5dGljcyBldmVudHMgdG8gdGhlIHNlcnZlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmFseXRpY3NSZXBvcnRlciB7XG4gIGNvbnN0cnVjdG9yIChjb3JlLCBhbnN3ZXJzS2V5LCBidXNpbmVzc0lkLCBnbG9iYWxPcHRpb25zID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBUaGUgaW50ZXJuYWwgYnVzaW5lc3MgaWRlbnRpZmllciB1c2VkIGZvciByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX2J1c2luZXNzSWQgPSBidXNpbmVzc0lkO1xuXG4gICAgLyoqXG4gICAgICogT3B0aW9ucyB0byBpbmNsdWRlIHdpdGggZXZlcnkgYW5hbHl0aWMgZXZlbnQgcmVwb3J0ZWQgdG8gdGhlIHNlcnZlclxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9nbG9iYWxPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZ2xvYmFsT3B0aW9ucywgeyBhbnN3ZXJzS2V5IH0pO1xuXG4gICAgLy8gbGlzdGVuIHRvIHF1ZXJ5IGlkIHVwZGF0ZXNcbiAgICBjb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBpZCA9PiB0aGlzLnNldFF1ZXJ5SWQoaWQpKTtcbiAgfVxuXG4gIHNldFF1ZXJ5SWQgKHF1ZXJ5SWQpIHtcbiAgICB0aGlzLl9nbG9iYWxPcHRpb25zLnF1ZXJ5SWQgPSBxdWVyeUlkO1xuICB9XG5cbiAgcmVwb3J0IChldmVudCkge1xuICAgIGlmICghKGV2ZW50IGluc3RhbmNlb2YgQW5hbHl0aWNzRXZlbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0FuYWx5dGljc0Vycm9yKCdUcmllZCB0byBzZW5kIGludmFsaWQgYW5hbHl0aWNzIGV2ZW50JywgZXZlbnQpO1xuICAgIH1cblxuICAgIGV2ZW50LmFkZE9wdGlvbnModGhpcy5fZ2xvYmFsT3B0aW9ucyk7XG5cbiAgICByZXR1cm4gbmV3IEh0dHBSZXF1ZXN0ZXIoKS5iZWFjb24oXG4gICAgICBgJHtBTkFMWVRJQ1NfQkFTRV9VUkx9L3JlYWx0aW1lYW5hbHl0aWNzL2RhdGEvYW5zd2Vycy8ke3RoaXMuX2J1c2luZXNzSWR9YCxcbiAgICAgIHtcbiAgICAgICAgJ2RhdGEnOiBldmVudC50b0FwaUV2ZW50KClcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNb2R1bGVEYXRhICovXG5cbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlcic7XG5cbi8qKlxuICogTW9kdWxlRGF0YSBpcyB1c2VkIGFzIGEgZ2VuZXJpYyBtb2RlbCBmb3IgU3RvcmFnZS5cbiAqIFR5cGljYWxseSBhbiBpbnN0YW5jZSBvZiBNb2R1bGVEYXRhIHBvd2VycyBhIHNpbmdsZSBjb21wb25lbnQuXG5cbiAqIEEgZGF0YSBtb2RlbCB0aGF0IGV4cG9zZXMgYW4gZXZlbnQgZW1pdHRlciBpbnRlcmZhY2UuXG4gKiBAZXh0ZW5kcyBFdmVudEVtaXR0ZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kdWxlRGF0YSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChpZCwgZGF0YSA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgdGhpcy5faGlzdG9yeSA9IFtdO1xuICAgIHRoaXMuX2RhdGEgPSB7fTtcbiAgICB0aGlzLnNldChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXBsYWNlcyB0aGUgY3VycmVudGx5IGhlbGQgZGF0YSB3aXRoIHRoZSBnaXZlbiBkYXRhXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSB0aGUgZGF0YSB0byByZXBsYWNlIHRoZSBjdXJyZW50IGRhdGFcbiAgICovXG4gIHNldCAoZGF0YSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBkYXRhIHx8IHt9O1xuXG4gICAgdGhpcy5jYXB0dXJlUHJldmlvdXMoKTtcblxuICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCcgfHwgT2JqZWN0LmtleXMobmV3RGF0YSkubGVuZ3RoICE9PSBPYmplY3Qua2V5cyh0aGlzLl9kYXRhKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSBuZXdEYXRhO1xuICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLl9kYXRhKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBmb3Igc2hhbGxvdyBlcXVhbGl0eVxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG5ld0RhdGEpKSB7XG4gICAgICBpZiAodGhpcy5fZGF0YVtrZXldICE9PSBuZXdEYXRhW2tleV0pIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IG5ld0RhdGE7XG4gICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5fZGF0YSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjYXB0dXJlUHJldmlvdXMgKCkge1xuICAgIGlmICh0aGlzLl9oaXN0b3J5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2hpc3RvcnkgPSBbXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faGlzdG9yeS5sZW5ndGggKyAxID4gNSkge1xuICAgICAgdGhpcy5faGlzdG9yeS5zaGlmdCgpO1xuICAgIH1cblxuICAgIC8vIElmIGRhdGEgaXMgZXZlciB1bmRlZmluZWQsIHdlIGRlZmF1bHQgdG8gZW1wdHkgb2JqZWN0XG4gICAgdGhpcy5faGlzdG9yeS5wdXNoKEpTT04uc3RyaW5naWZ5KHRoaXMuX2RhdGEgfHwge30pKTtcbiAgfVxuXG4gIHVuZG8gKCkge1xuICAgIGxldCBwcmV2aW91cyA9IHt9O1xuICAgIGlmICh0aGlzLl9wcmV2aW91cy5sZW5ndGggPiAwKSB7XG4gICAgICBwcmV2aW91cyA9IEpTT04ucGFyc2UodGhpcy5fcHJldmlvdXMucG9wKCkpO1xuICAgIH1cblxuICAgIHRoaXMuX2RhdGEuc2V0KHByZXZpb3VzKTtcbiAgfVxuXG4gIHJhdyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEdsb2JhbFN0b3JhZ2UgKi9cblxuaW1wb3J0IE1vZHVsZURhdGEgZnJvbSAnLi9tb2R1bGVkYXRhJztcbmltcG9ydCB7IEFuc3dlcnNTdG9yYWdlRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBTdG9yYWdlIGlzIGEgY29udGFpbmVyIGFyb3VuZCBhcHBsaWNhdGlvbiBzdGF0ZS5cbiAqIEl0IGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBDUlVEIG9wZXJhdGlvbnMgYXMgd2VsbCBhcyBsaXN0ZW5pbmdcbiAqIGZvciBzdGF0ZWZ1bCBjaGFuZ2VzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWxTdG9yYWdlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXIgPSB7fTtcbiAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGRhdGEgaW4gc3RvcmFnZSB3aXRoIHRoZSBnaXZlbiBrZXkgdG8gdGhlIHByb3ZpZGVkIGRhdGEsXG4gICAqIGNvbXBsZXRlbHkgb3ZlcndyaXRpbmcgYW55IGV4aXN0aW5nIGRhdGEuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdGhlIHN0b3JhZ2Uga2V5IHRvIHNldFxuICAgKiBAcGFyYW0geyp9IGRhdGEgdGhlIGRhdGEgdG8gc2V0XG4gICAqL1xuICBzZXQgKGtleSwgZGF0YSkge1xuICAgIHRoaXMuX2luaXREYXRhQ29udGFpbmVyKGtleSwgZGF0YSk7XG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltrZXldLnNldChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYWxsIGtleS92YWx1ZSBwYWlycyBpbiB0aGUgcHJvdmlkZWQgbWFwIHRvIHRoZSBzdG9yYWdlXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUga2V5L3ZhbHVlIHBhaXJzIHRvIHNldCBpbiB0aGUgc3RvcmFnZVxuICAgKi9cbiAgc2V0QWxsIChkYXRhKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIHRoaXMuc2V0KGtleSwgdmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfaW5pdERhdGFDb250YWluZXIgKGtleSwgZGF0YSkge1xuICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCB8fCBrZXkgPT09IG51bGwgfHwgdHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzU3RvcmFnZUVycm9yKCdJbnZhbGlkIHN0b3JhZ2Uga2V5IHByb3ZpZGVkJywga2V5LCBkYXRhKTtcbiAgICB9XG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCB8fCBkYXRhID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc1N0b3JhZ2VFcnJvcignTm8gZGF0YSBwcm92aWRlZCcsIGtleSwgZGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX21vZHVsZURhdGFDb250YWluZXJba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2tleV0gPSBuZXcgTW9kdWxlRGF0YShrZXkpO1xuICAgICAgdGhpcy5fYXBwbHlGdXR1cmVMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gIH1cblxuICBnZXRTdGF0ZSAobW9kdWxlSWQpIHtcbiAgICBpZiAodGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5yYXcoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRBbGwgKGtleSkge1xuICAgIGNvbnN0IGRhdGEgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGRhdGFLZXkgb2YgT2JqZWN0LmtleXModGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcikpIHtcbiAgICAgIGlmIChkYXRhS2V5LnN0YXJ0c1dpdGgoa2V5KSAmJiB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2RhdGFLZXldLnJhdygpICE9PSBudWxsKSB7XG4gICAgICAgIGRhdGEucHVzaCh0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2RhdGFLZXldLnJhdygpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBvbiAoZXZ0LCBtb2R1bGVJZCwgY2IpIHtcbiAgICBsZXQgbW9kdWxlRGF0YSA9IHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdO1xuICAgIGlmIChtb2R1bGVEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXSA9IFtdO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdLnB1c2goe1xuICAgICAgICBldmVudDogZXZ0LFxuICAgICAgICBjYjogY2JcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0ub24oZXZ0LCBjYik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBvZmYgKGV2dCwgbW9kdWxlSWQsIGNiKSB7XG4gICAgbGV0IG1vZHVsZURhdGEgPSB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXTtcbiAgICBpZiAobW9kdWxlRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0ucG9wKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdLm9mZihldnQsIGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9hcHBseUZ1dHVyZUxpc3RlbmVycyAobW9kdWxlSWQpIHtcbiAgICBsZXQgZnV0dXJlcyA9IHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF07XG4gICAgaWYgKCFmdXR1cmVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmdXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZnV0dXJlID0gZnV0dXJlc1tpXTtcbiAgICAgIHRoaXMub24oZnV0dXJlLmV2ZW50LCBtb2R1bGVJZCwgZnV0dXJlLmNiKTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF07XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VhcmNoQXBpIH0gZnJvbSAnLi9zZWFyY2gvc2VhcmNoYXBpJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQW5hbHl0aWNzUmVwb3J0ZXIgfSBmcm9tICcuL2FuYWx5dGljcy9hbmFseXRpY3NyZXBvcnRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZHVsZURhdGEgfSBmcm9tICcuL3N0b3JhZ2UvbW9kdWxlZGF0YSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UvZ2xvYmFsc3RvcmFnZSc7XG4iLCIvKiogQG1vZHVsZSBDb21wb25lbnQgKi9cblxuaW1wb3J0IHsgUmVuZGVyZXJzIH0gZnJvbSAnLi4vcmVuZGVyaW5nL2NvbnN0JztcblxuaW1wb3J0IERPTSBmcm9tICcuLi9kb20vZG9tJztcbmltcG9ydCBTdGF0ZSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IEFuYWx5dGljc1JlcG9ydGVyIH0gZnJvbSAnLi4vLi4vY29yZSc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCBBbmFseXRpY3NFdmVudCBmcm9tICcuLi8uLi9jb3JlL2FuYWx5dGljcy9hbmFseXRpY3NldmVudCc7XG5cbi8qKlxuICogQ29tcG9uZW50IGlzIGFuIGFic3RyYWN0aW9uIHRoYXQgZW5jYXBzdWxhdGVzIHN0YXRlLCBiZWhhdmlvcixcbiAqIGFuZCB2aWV3IGZvciBhIHBhcnRpY3VsYXIgY2h1bmsgb2YgZnVuY3Rpb25hbGl0eSBvbiB0aGUgcGFnZS5cbiAqXG4gKiBUaGUgQVBJIGV4cG9zZXMgZXZlbnQgbGlmZSBjeWNsZSBob29rcyBmb3Igd2hlbiB0aGluZ3MgYXJlIHJlbmRlcmVkLFxuICogbW91bnRlZCwgY3JlYXRlZCwgZXRjLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAodHlwZSwgY29uZmlnID0ge30pIHtcbiAgICAvLyBTaW1wbGUgZmFjYWRlIHBhdHRlcm4gdG8gZW5hYmxlIHRoZSB1c2VyIHRvIHBhc3MgYSBzaW5nbGUgb2JqZWN0XG4gICAgLy8gY29udGFpbmluZyBhbGwgdGhlIG5lY2Vzc2FyeSBvcHRpb25zIGFuZCBzZXR0aW5nc1xuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbmZpZyA9IHR5cGU7XG4gICAgICB0eXBlID0gY29uZmlnLnR5cGU7XG4gICAgfVxuXG4gICAgdGhpcy5tb2R1bGVJZCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBVbmlxdWUgbmFtZSBvZiB0aGlzIGNvbXBvbmVudCBpbnN0YW5jZVxuICAgICAqIFVzZWQgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBvdGhlciBjb21wb25lbnRzIG9mIHRoZSBzYW1lIHR5cGVcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubmFtZSA9IGNvbmZpZy5uYW1lIHx8IHRoaXMuY29uc3RydWN0b3IudHlwZTtcblxuICAgIC8qKlxuICAgICAqIENhY2hlIHRoZSBvcHRpb25zIHNvIHRoYXQgd2UgY2FuIHByb3BvZ2F0ZSBwcm9wZXJseSB0byBjaGlsZCBjb21wb25lbnRzXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpZGVudGlmaWVyIHVzZWQgdG8gY2xhc3NpZnkgdGhlIHR5cGUgb2YgY29tcG9uZW50LlxuICAgICAqIFRoZSBjb21wb25lbnQgbWFuYWdlciB1c2VzIHRoaXMgaW5mb3JtYXRpb24gaW4gb3JkZXIgdG8gcGVyc2lzdCBhbmQgb3JnYW5pemUgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtzdHJpbmd8Q29tcG9uZW50VHlwZX1cbiAgICAgKi9cbiAgICB0aGlzLl90eXBlID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIHBhcmVudCBjb21wb25lbnQsIGlmIGV4aXN0c1xuICAgICAqIEB0eXBlIHtDb21wb25lbnR9XG4gICAgICovXG4gICAgdGhpcy5fcGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBjb250YWluZXIgZm9yIGFsbCB0aGUgY2hpbGQgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtDb21wb25lbnRbXX1cbiAgICAgKi9cbiAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN0YXRlIChkYXRhKSBvZiB0aGUgY29tcG9uZW50IHRvIGJlIHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9zdGF0ZSA9IG5ldyBTdGF0ZShjb25maWcuc3RhdGUpO1xuXG4gICAgLyoqXG4gICAgICogVE9ETyhiaWxseSkgVGhpcyBzaG91bGQgYmUgJ3NlcnZpY2VzJ1xuICAgICAqL1xuICAgIHRoaXMuY29yZSA9IGNvbmZpZy5jb3JlIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IG1hbmFnZXIsIHdoaWNoIGNvbnRhaW5zIGFsbCBvZiB0aGUgY29tcG9uZW50IGNsYXNzZXNcbiAgICAgKiBlbGlnaWJsZSB0byBiZSBjcmVhdGVkXG4gICAgICogQHR5cGUge0NvbXBvbmVudE1hbmFnZXJ9XG4gICAgICovXG4gICAgdGhpcy5jb21wb25lbnRNYW5hZ2VyID0gY29uZmlnLmNvbXBvbmVudE1hbmFnZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBhbmFseXRpY3MgcmVwb3J0ZXIsIHVzZWQgdG8gcmVwb3J0IGV2ZW50cyBmb3IgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7QW5hbHl0aWNzUmVwb3J0ZXJ9XG4gICAgICovXG4gICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlciA9IGNvbmZpZy5hbmFseXRpY3NSZXBvcnRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogT3B0aW9ucyB0byBpbmNsdWRlIHdpdGggYWxsIGFuYWx5dGljIGV2ZW50cyBzZW50IGJ5IHRoaXMgY29tcG9uZW50XG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FuYWx5dGljc09wdGlvbnMgPSBjb25maWcuYW5hbHl0aWNzT3B0aW9ucyB8fCB7fTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBET00gbm9kZSB0aGF0IHRoZSBjb21wb25lbnQgd2lsbCBiZSBhcHBlbmRlZCB0byB3aGVuIG1vdW50ZWQvcmVuZGVyZWQuXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRhaW5lciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGBjb250YWluZXJgIG9wdGlvbiBmb3IgY29tcG9uZW50IGNvbmZpZ3VyYXRpb24uIE11c3QgYmUgb2YgdHlwZSBgc3RyaW5nYC4nKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IERPTS5xdWVyeShjb25maWcuY29udGFpbmVyKSB8fCBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb250YWluZXIgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Ll9jb250YWluZXIsIGNvbmZpZy5jb250YWluZXIpO1xuXG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgcGFyZW50LCBhbmQgdGhlIGNvbnRhaW5lciBpcyBtaXNzaW5nIGZyb20gdGhlIERPTSxcbiAgICAgIC8vIHdlIGNvbnN0cnVjdCB0aGUgY29udGFpbmVyIGFuZCBhcHBlbmQgaXQgdG8gdGhlIHBhcmVudFxuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBET00uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogY29uZmlnLmNvbnRhaW5lci5zdWJzdHJpbmcoMSwgY29uZmlnLmNvbnRhaW5lci5sZW5ndGgpXG4gICAgICAgIH0pO1xuICAgICAgICBET00uYXBwZW5kKHRoaXMuX3BhcmVudC5fY29udGFpbmVyLCB0aGlzLl9jb250YWluZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb250YWluZXIgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgY29udGFpbmVyIERPTSBub2RlOiAnICsgY29uZmlnLmNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gY2xhc3MgdG8gYmUgYXBwbGllZCB0byB7dGhpcy5fY29udGFpbmVyfSBub2RlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9jbGFzc05hbWUgPSBjb25maWcuY2xhc3MgfHwgJ2NvbXBvbmVudCc7XG5cbiAgICAvKipcbiAgICAgKiBBIGN1c3RvbSByZW5kZXIgZnVuY3Rpb24gdG8gYmUgdXNlZCBpbnN0ZWFkIG9mIHVzaW5nIHRoZSBkZWZhdWx0IHJlbmRlcmVyXG4gICAgICogQHR5cGUge1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3JlbmRlciA9IGNvbmZpZy5yZW5kZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBkZWZhdWx0IHtSZW5kZXJlcn0gdGhhdCB3aWxsIGJlIHVzZWQgZm9yIHJlbmRlcmluZyB0aGUgdGVtcGxhdGVcbiAgICAgKiBAdHlwZSB7UmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyZXIgPSBjb25maWcucmVuZGVyZXIgfHwgUmVuZGVyZXJzLkhhbmRsZWJhcnM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgc3RyaW5nIHRvIHVzZSBmb3IgcmVuZGVyaW5nIHRoZSBjb21wb25lbnRcbiAgICAgKiBJZiB0aGlzIGlzIGxlZnQgZW1wdHksIHdlIGxvb2t1cCB0aGUgdGVtcGxhdGUgdGhlIGJhc2UgdGVtcGxhdGVzIHVzaW5nIHRoZSB0ZW1wbGF0ZU5hbWVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlID0gY29uZmlnLnRlbXBsYXRlID8gdGhpcy5fcmVuZGVyZXIuY29tcGlsZShjb25maWcudGVtcGxhdGUpIDogbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZU5hbWUgdG8gdXNlIGZvciByZW5kZXJpbmcgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBUaGlzIGlzIG9ubHkgdXNlZCBpZiBfdGVtcGxhdGUgaXMgZW1wdHkuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSBjb25maWcudGVtcGxhdGVOYW1lIHx8IHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdFRlbXBsYXRlTmFtZShjb25maWcpO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgc3RhdGUgaW5kaWNhdGluZyB3aGV0aGVyIG9yIG5vdCB0aGUgY29tcG9uZW50IGhhcyBiZWVuIG1vdW50ZWQgdG8gdGhlIERPTVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrLCB0aGF0cyB1c2VkIHRvIHRyYW5zZm9ybSB0aGUgaW50ZXJuYWwgZGF0YVxuICAgICAqIG1vZGVscyBvZiB0aGUgY29tcG9uZW50cywgYmVmb3JlIGl0IGdldHMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50IHN0YXRlLlxuICAgICAqIEJ5IGRlZmF1bHQsIG5vIHRyYW5zZm9ybWF0aW9uIGhhcHBlbnMuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMudHJhbnNmb3JtRGF0YSA9IGNvbmZpZy50cmFuc2Zvcm1EYXRhIHx8IHRoaXMudHJhbnNmb3JtRGF0YSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBjcmVhdGVkLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLm9uQ3JlYXRlID0gY29uZmlnLm9uQ3JlYXRlIHx8IHRoaXMub25DcmVhdGUgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnQgaXMgTW91bnRlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vbk1vdW50ID0gY29uZmlnLm9uTW91bnQgfHwgdGhpcy5vbk1vdW50IHx8IGZ1bmN0aW9uICgpIHsgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudHMgc3RhdGUgaXMgdXBkYXRlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vblVwZGF0ZSA9IGNvbmZpZy5vblVwZGF0ZSB8fCB0aGlzLm9uVXBkYXRlIHx8IGZ1bmN0aW9uICgpIHsgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAnZGVmYXVsdCc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnQ29tcG9uZW50JztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGluaXQgKG9wdHMpIHtcbiAgICB0aGlzLnNldFN0YXRlKG9wdHMuZGF0YSB8fCBvcHRzLnN0YXRlIHx8IHt9KTtcbiAgICB0aGlzLm9uQ3JlYXRlKCk7XG4gICAgdGhpcy5fc3RhdGUub24oJ3VwZGF0ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25VcGRhdGUoKTtcbiAgICAgIHRoaXMubW91bnQoKTtcbiAgICB9KTtcblxuICAgIERPTS5hZGRDbGFzcyh0aGlzLl9jb250YWluZXIsIHRoaXMuX2NsYXNzTmFtZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIGNvbnN0IG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgeyBfY29uZmlnOiB0aGlzLl9jb25maWcgfSwgZGF0YSk7XG4gICAgdGhpcy5fc3RhdGUuc2V0KG5ld1N0YXRlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldFN0YXRlIChwcm9wKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmdldChwcm9wKTtcbiAgfVxuXG4gIGhhc1N0YXRlIChwcm9wKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmhhcyhwcm9wKTtcbiAgfVxuXG4gIHRyYW5zZm9ybURhdGEgKGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGFkZENoaWxkIChkYXRhLCB0eXBlLCBvcHRzKSB7XG4gICAgbGV0IGNoaWxkQ29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZShcbiAgICAgIHR5cGUsXG4gICAgICBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0sIG9wdHMgfHwge30sIHtcbiAgICAgICAgX3BhcmVudE9wdHM6IHRoaXMuX2NvbmZpZ1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5fY2hpbGRyZW4ucHVzaChjaGlsZENvbXBvbmVudCk7XG4gICAgcmV0dXJuIGNoaWxkQ29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFVubW91bnQgYW5kIHJlbW92ZSB0aGlzIGNvbXBvbmVudCBhbmQgaXRzIGNoaWxkcmVuIGZyb20gdGhlIGxpc3RcbiAgICogb2YgYWN0aXZlIGNvbXBvbmVudHNcbiAgICovXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy5fY2hpbGRyZW4uZm9yRWFjaChjID0+IGMucmVtb3ZlKCkpO1xuICAgIHRoaXMudW5Nb3VudCgpO1xuICAgIHRoaXMuY29tcG9uZW50TWFuYWdlci5yZW1vdmUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSByZW5kZXIgbWV0aG9kIHRvIGJlIHVzZWQgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlbmRlclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBzZXRSZW5kZXIgKHJlbmRlcikge1xuICAgIHRoaXMuX3JlbmRlciA9IHJlbmRlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHJlbmRlcmVyIGZvciB0aGUgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7UmVuZGVyZXJUeXBlfSByZW5kZXJlclxuICAgKi9cbiAgc2V0UmVuZGVyZXIgKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSBSZW5kZXJlcnNbcmVuZGVyZXJdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRlbXBsYXRlIGZvciB0aGUgY29tcG9uZW50IHRvIHVzZSB3aGVuIHJlbmRlcmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAgICovXG4gIHNldFRlbXBsYXRlICh0ZW1wbGF0ZSkge1xuICAgIHRoaXMuX3RlbXBsYXRlID0gdGhpcy5fcmVuZGVyZXIuY29tcGlsZSh0ZW1wbGF0ZSk7XG4gIH1cblxuICB1bk1vdW50ICgpIHtcbiAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xuICAgIERPTS5lbXB0eSh0aGlzLl9jb250YWluZXIpO1xuICB9XG5cbiAgbW91bnQgKCkge1xuICAgIGlmICghdGhpcy5fY29udGFpbmVyKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLnVuTW91bnQoKTtcbiAgICBpZiAodGhpcy5iZWZvcmVNb3VudCgpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgRE9NLmFwcGVuZCh0aGlzLl9jb250YWluZXIsIHRoaXMucmVuZGVyKHRoaXMuX3N0YXRlLmFzSlNPTigpKSk7XG5cbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIHRoaXMuX29uTW91bnQoKTtcblxuICAgIC8vIEF0dGFjaCBhbmFseXRpY3MgaG9va3MgYXMgbmVjZXNzYXJ5XG4gICAgaWYgKHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIpIHtcbiAgICAgIGxldCBkb21Ib29rcyA9IERPTS5xdWVyeUFsbCh0aGlzLl9jb250YWluZXIsICdbZGF0YS1ldmVudHR5cGVdOm5vdChbZGF0YS1pcy1hbmFseXRpY3MtYXR0YWNoZWRdKScpO1xuICAgICAgZG9tSG9va3MuZm9yRWFjaCh0aGlzLl9jcmVhdGVBbmFseXRpY3NIb29rLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX29uTW91bnQgKCkge1xuICAgIHRoaXMub25Nb3VudCh0aGlzKTtcbiAgICBpZiAodGhpcy5fY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBjaGlsZC5fb25Nb3VudCgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbmRlciB0aGUgdGVtcGxhdGUgdXNpbmcgdGhlIHtSZW5kZXJlcn0gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBhbmQgdGVtcGxhdGUgb2YgdGhlIGNvbXBvbmVudFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgcmVuZGVyIChkYXRhID0gdGhpcy5fc3RhdGUuZ2V0KCkpIHtcbiAgICB0aGlzLmJlZm9yZVJlbmRlcigpO1xuICAgIGRhdGEgPSB0aGlzLnRyYW5zZm9ybURhdGEoZGF0YSk7XG5cbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIC8vIFVzZSBlaXRoZXIgdGhlIGN1c3RvbSByZW5kZXIgZnVuY3Rpb24gb3IgdGhlIGludGVybmFsIHJlbmRlcmVyXG4gICAgLy8gZGVwZW5kYW50IG9uIHRoZSBjb21wb25lbnQgY29uZmlndXJhdGlvblxuICAgIGlmICh0eXBlb2YgdGhpcy5fcmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBodG1sID0gdGhpcy5fcmVuZGVyKGRhdGEpO1xuICAgICAgaWYgKHR5cGVvZiBodG1sICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlbmRlciBtZXRob2QgbXVzdCByZXR1cm4gSFRNTCBhcyB0eXBlIHtzdHJpbmd9Jyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlbmRlciB0aGUgZXhpc3RpbmcgdGVtcGxhdGVzIGFzIGEgc3RyaW5nXG4gICAgICBodG1sID0gdGhpcy5fcmVuZGVyZXIucmVuZGVyKHtcbiAgICAgICAgdGVtcGxhdGU6IHRoaXMuX3RlbXBsYXRlLFxuICAgICAgICB0ZW1wbGF0ZU5hbWU6IHRoaXMuX3RlbXBsYXRlTmFtZVxuICAgICAgfSwgZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gV2UgY3JlYXRlIGFuIEhUTUwgRG9jdW1lbnQgZnJhZ21lbnQgd2l0aCB0aGUgcmVuZGVyZWQgc3RyaW5nXG4gICAgLy8gU28gdGhhdCB3ZSBjYW4gcXVlcnkgaXQgZm9yIHByb2Nlc3Npbmcgb2Ygc3ViIGNvbXBvbmVudHNcbiAgICBsZXQgZWwgPSBET00uY3JlYXRlKGh0bWwpO1xuXG4gICAgLy8gUHJvY2VzcyB0aGUgRE9NIHRvIGRldGVybWluZSBpZiB3ZSBzaG91bGQgY3JlYXRlXG4gICAgLy8gaW4tbWVtb3J5IHN1Yi1jb21wb25lbnRzIGZvciByZW5kZXJpbmdcbiAgICBsZXQgZG9tQ29tcG9uZW50cyA9IERPTS5xdWVyeUFsbChlbCwgJ1tkYXRhLWNvbXBvbmVudF0nKTtcbiAgICBkb21Db21wb25lbnRzLmZvckVhY2goYyA9PiB0aGlzLl9jcmVhdGVTdWJjb21wb25lbnQoYywgZGF0YSkpO1xuXG4gICAgdGhpcy5hZnRlclJlbmRlcigpO1xuICAgIHJldHVybiBlbC5pbm5lckhUTUw7XG4gIH1cblxuICBfY3JlYXRlU3ViY29tcG9uZW50IChkb21Db21wb25lbnQsIGRhdGEpIHtcbiAgICBsZXQgZGF0YXNldCA9IGRvbUNvbXBvbmVudC5kYXRhc2V0O1xuICAgIGxldCB0eXBlID0gZGF0YXNldC5jb21wb25lbnQ7XG4gICAgbGV0IHByb3AgPSBkYXRhc2V0LnByb3A7XG4gICAgbGV0IG9wdHMgPSBkYXRhc2V0Lm9wdHMgPyBKU09OLnBhcnNlKGRhdGFzZXQub3B0cykgOiB7fTtcblxuICAgIC8vIFJlbmRlcmluZyBhIHN1YiBjb21wb25lbnQgc2hvdWxkIGJlIHdpdGhpbiB0aGUgY29udGV4dCxcbiAgICAvLyBvZiB0aGUgbm9kZSB0aGF0IHdlIHByb2Nlc3NlZCBpdCBmcm9tXG4gICAgb3B0cyA9IE9iamVjdC5hc3NpZ24ob3B0cywge1xuICAgICAgY29udGFpbmVyOiBkb21Db21wb25lbnRcbiAgICB9KTtcblxuICAgIGxldCBjaGlsZERhdGEgPSBkYXRhW3Byb3BdIHx8IHt9O1xuXG4gICAgLy8gVE9ETyhiaWxseSkgUmlnaHQgbm93LCBpZiB3ZSBwcm92aWRlIGFuIGFycmF5IGFzIHRoZSBkYXRhIHByb3AsXG4gICAgLy8gdGhlIGJlaGF2aW9yIGlzIHRvIGNyZWF0ZSBtYW55IGNvbXBvbmVudHMgZm9yIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkuXG4gICAgLy8gVEhBVCBpbnRlcmZhY2UgU0hPVUxEIGNoYW5nZSB0byB1c2UgYSBkaWZmZXJlbnQgcHJvcGVydHkgdGhhdCBkZWZpbmVzXG4gICAgLy8gd2hldGhlciB0byBhcnJheSBkYXRhIHNob3VsZCBiZSB1c2VkIGZvciBhIHNpbmdsZSBjb21wb25lbnQgb3JcbiAgICAvLyB0byBjcmVhdGUgbWFueSBjb21wb25lbnRzIGZvciBlYWNoIGl0ZW0uXG4gICAgLy8gT3ZlcmxvYWRpbmcgYW5kIGhhdmluZyB0aGlzIHNpZGUgZWZmZWN0IGlzIHVuaW50dWl0aXZlIGFuZCBXUk9OR1xuICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZERhdGEpKSB7XG4gICAgICBsZXQgY2hpbGRDb21wb25lbnQgPSB0aGlzLmFkZENoaWxkKGNoaWxkRGF0YSwgdHlwZSwgb3B0cyk7XG4gICAgICBET00uYXBwZW5kKGRvbUNvbXBvbmVudCwgY2hpbGRDb21wb25lbnQucmVuZGVyKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSwgcmVuZGVyIHRoZSBjb21wb25lbnQgYXMgZXhwZWN0ZWRcbiAgICBsZXQgY2hpbGRIVE1MID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZENvbXBvbmVudCA9IHRoaXMuYWRkQ2hpbGQoY2hpbGREYXRhW2ldLCB0eXBlLCBvcHRzKTtcbiAgICAgIGNoaWxkSFRNTC5wdXNoKGNoaWxkQ29tcG9uZW50LnJlbmRlcigpKTtcbiAgICB9XG5cbiAgICBET00uYXBwZW5kKGRvbUNvbXBvbmVudCwgY2hpbGRIVE1MLmpvaW4oJycpKTtcbiAgfVxuXG4gIF9jcmVhdGVBbmFseXRpY3NIb29rIChkb21Db21wb25lbnQpIHtcbiAgICBkb21Db21wb25lbnQuZGF0YXNldC5pc0FuYWx5dGljc0F0dGFjaGVkID0gdHJ1ZTtcbiAgICBjb25zdCBkYXRhc2V0ID0gZG9tQ29tcG9uZW50LmRhdGFzZXQ7XG4gICAgY29uc3QgdHlwZSA9IGRhdGFzZXQuZXZlbnR0eXBlO1xuICAgIGNvbnN0IGxhYmVsID0gZGF0YXNldC5ldmVudGxhYmVsO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBkYXRhc2V0LmV2ZW50b3B0aW9ucyA/IEpTT04ucGFyc2UoZGF0YXNldC5ldmVudG9wdGlvbnMpIDoge307XG5cbiAgICBET00ub24oZG9tQ29tcG9uZW50LCAnY2xpY2snLCBlID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEFuYWx5dGljc0V2ZW50KHR5cGUsIGxhYmVsKTtcbiAgICAgIGV2ZW50LmFkZE9wdGlvbnModGhpcy5fYW5hbHl0aWNzT3B0aW9ucyk7XG4gICAgICBldmVudC5hZGRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlci5yZXBvcnQoZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uQ3JlYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgY29uc3RydWN0ZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uQ3JlYXRlIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25VcGRhdGUgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgY2hhbmdlc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25VcGRhdGUgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBiZWZvcmVSZW5kZXIgZXZlbnQgaXMgdHJpZ2dlcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHJlbmRlcmVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBiZWZvcmVSZW5kZXIgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBhZnRlclJlbmRlciBldmVudCBpcyB0cmlnZ2VyZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYWZ0ZXJSZW5kZXIgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvbk1vdW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgYXBwZW5kZWQgdG8gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25Nb3VudCAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uVW5Nb3VudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIHJlbW92ZWQgZnJvbSB0aGUgRE9NXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvblVuTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBiZWZvcmVNb3VudCBpcyB0cmlnZ2VyZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZCB0byB0aGUgRE9NXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBiZWZvcmVNb3VudCAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uRGVzdHJveSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25EZXN0cm95IChjYikge1xuXG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE5hdmlnYXRpb25Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi9kb20vc2VhcmNocGFyYW1zJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5cbi8qKlxuICogVGhlIFRhYiBpcyBhIG1vZGVsIHRoYXQgaXMgdXNlZCB0byBwb3dlciB0aGUgTmF2aWdhdGlvbiB0YWJzIGluIHRoZSB2aWV3LlxuICogSXQncyBpbml0aWFsaXplZCB0aHJvdWdoIHRoZSBjb25maWd1cmF0aW9uIHByb3ZpZGVkIHRvIHRoZSBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBUYWIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIHRhYiB0aGF0IGlzIGV4cG9zZWQgZm9yIHRoZSBsaW5rXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmxhYmVsID0gY29uZmlnLmxhYmVsO1xuICAgIGlmICh0eXBlb2YgdGhpcy5sYWJlbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoJ2xhYmVsIGlzIGEgcmVxdWlyZWQgY29uZmlndXJhdGlvbiBvcHRpb24gZm9yIHRhYi4nLCAnTmF2aWdhdGlvbkNvbXBvbmVudCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb21wbGV0ZSBVUkwsIGluY2x1ZGluZyB0aGUgcGFyYW1zXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnVybCA9IGNvbmZpZy51cmw7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoJ3VybCBpcyBhIHJlcXVpcmVkIGNvbmZpZ3VyYXRpb24gb3B0aW9uIGZvciB0YWIuJywgJ05hdmlnYXRpb25Db21wb25lbnQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VydmVyc2lkZSB2ZXJ0aWNhbCBjb25maWcgaWQgdGhhdCB0aGlzIGlzIHJlZmVyZW5jZWQgdG8uXG4gICAgICogQnkgcHJvdmlkaW5nIHRoaXMsIGVuYWJsZXMgZHluYW1pYyBzb3J0aW5nIGJhc2VkIG9uIHJlc3VsdHMuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmNvbmZpZ0lkID0gY29uZmlnLmNvbmZpZ0lkIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYmFzZSBVUkwgdXNlZCBmb3IgY29uc3RydWN0aW5nIHRoZSBVUkwgd2l0aCBwYXJhbXNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuYmFzZVVybCA9IGNvbmZpZy51cmw7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gc2hvdyB0aGlzIHRhYiBmaXJzdCBpbiB0aGUgb3JkZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmlzRmlyc3QgPSBjb25maWcuaXNGaXJzdCB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgdG8gYXBwbHkgYSBzcGVjaWFsIGNsYXNzIHRvIHRoZVxuICAgICAqIG1hcmt1cCB0byBkZXRlcm1pbmUgaWYgaXQncyBhbiBhY3RpdmUgdGFiXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc0FjdGl2ZSA9IGNvbmZpZy5pc0FjdGl2ZSB8fCBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoZWxwZXIgdG8gY29uc3RydWN0IHRoZSBldmVudE9wdGlvbnMgZm9yIGFuYWx5dGljc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGV2ZW50T3B0aW9ucyAoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHZlcnRpY2FsQ29uZmlnSWQ6IHRoaXMuY29uZmlnSWRcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBmcm9tIHdpbGwgY29uc3RydWN0IGEgbWFwIG9mIGNvbmZpZ0lkIHRvIHtUYWJ9IGZyb21cbiAgICogYSBjb25maWd1cmF0aW9uIGZpbGVcbiAgICogQHBhcmFtIHtvYmplY3R9IHRhYnNDb25maWcgdGhlIGNvbmZpZ3VyYXRpb24gdG8gdXNlXG4gICAqL1xuICBzdGF0aWMgZnJvbSAodGFic0NvbmZpZykge1xuICAgIGxldCB0YWJzID0ge307XG4gICAgLy8gUGFyc2UgdGhlIG9wdGlvbnMgYW5kIGJ1aWxkIG91dCBvdXIgdGFicyBhbmRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNDb25maWcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB0YWIgPSB0YWJzQ29uZmlnW2ldO1xuICAgICAgLy8gRm9yIHRhYnMgd2l0aG91dCBjb25maWcgaWRzLCBtYXAgdGhlaXIgVVJMIHRvIHRoZSBjb25maWdJRFxuICAgICAgLy8gdG8gYXZvaWQgZHVwbGljYXRpb24gb2YgcmVuZGVyc1xuICAgICAgaWYgKHRhYi5jb25maWdJZCA9PT0gdW5kZWZpbmVkICYmIHRhYnNbdGFiLmNvbmZpZ0lkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhYi5jb25maWdJZCA9IHRhYi51cmw7XG4gICAgICB9XG5cbiAgICAgIHRhYnNbdGFiLmNvbmZpZ0lkXSA9IG5ldyBUYWIodGFiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhYnM7XG4gIH1cbn1cblxuLyoqXG4gKiBOYXZpZ2F0aW9uQ29tcG9uZW50IGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBidWlsZGluZyBhIGR5bmFtaWNcbiAqIG5hdmlnYXRpb24gdGhhdCBpcyBwb3dlcmVkIGJ5IHVuaXZlcnNhbCBzZWFyY2ggdXBkYXRlcy5cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkYXRhIHN0b3JhZ2Uga2V5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuTkFWSUdBVElPTjtcblxuICAgIC8qKlxuICAgICAqIFVub3JkZXJlZCBtYXAgb2YgZWFjaCB0YWIsIGtleWVkIGJ5IFZTIGNvbmZpZ0lkXG4gICAgICogQHR5cGUge09iamVjdC48U3RyaW5nLCBPYmplY3Q+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGFicyA9IFRhYi5mcm9tKGNvbmZpZy50YWJzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcmRlciBvZiB0aGUgdGFicywgcGFyc2VkIGZyb20gY29uZmlndXJhdGlvbiBvciBVUkwuXG4gICAgICogVGhpcyBnZXRzIHVwZGF0ZWQgYmFzZWQgb24gdGhlIHNlcnZlciByZXN1bHRzXG4gICAgICogQHR5cGUge0FycmF5LjxTdHJpbmc+fSBUaGUgbGlzdCBvZiBWUyBjb25maWdJZHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RhYk9yZGVyID0gdGhpcy5nZXREZWZhdWx0VGFiT3JkZXIoY29uZmlnLnRhYnMsIHRoaXMuZ2V0VXJsUGFyYW1zKCkpO1xuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0byB0aGUgY2xvc2UgbW9kYWwgY2xpY2sgbGlzdGVuZXJzLCB0byBiZSByZW1vdmVkIGluIHVuTW91bnQoKVxuICAgICAqIEB0eXBlIHthcnJheX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xpc3RlbmVyc1RvVGVhckRvd24gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEluZm9ybWF0aW9uIG9uIHRoZSBtb2JpbGUgbWVkaWEgcXVlcnkgYXBwbGllZCB0byB0aGUgZG9jXG4gICAgICogQHR5cGUge01lZGlhUXVlcnlMaXN0fVxuICAgICAqL1xuICAgIHRoaXMuX21xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjhweCknKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdOYXZpZ2F0aW9uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAnbmF2aWdhdGlvbi9uYXZpZ2F0aW9uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBTaW5jZSB0aGUgc2VydmVyIGRhdGEgb25seSBwcm92aWRlcyBhIGxpc3Qgb2ZcbiAgICogVlMgY29uZmlnSWRzLCB3ZSBuZWVkIHRvIGNvbXB1dGUgYW5kIHRyYW5zZm9ybVxuICAgKiB0aGUgZGF0YSBpbnRvIHRoZSBwcm9wZXIgZm9ybWF0IGZvciByZW5kZXJpbmcuXG4gICAqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBpZiAoZGF0YS50YWJPcmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl90YWJPcmRlciA9IHRoaXMubWVyZ2VUYWJPcmRlcihkYXRhLnRhYk9yZGVyLCB0aGlzLl90YWJPcmRlcik7XG4gICAgfVxuXG4gICAgLy8gU2luY2UgdGhlIHRhYiBvcmRlcmluZyBjYW4gY2hhbmdlIGJhc2VkIG9uIHRoZSBzZXJ2ZXIgZGF0YVxuICAgIC8vIHdlIG5lZWQgdG8gdXBkYXRlIGVhY2ggdGFicyBVUkwgdG8gaW5jbHVkZSB0aGUgb3JkZXIgYXMgcGFydCBvZiB0aGVpciBwYXJhbXMuXG4gICAgLy8gVGhpcyBoZWxwcyB3aXRoIHBlcnNpc3Rpbmcgc3RhdGUgYWNyb3NzIHZlcnRpY2Fscy5cbiAgICBsZXQgdGFicyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdGFiT3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB0YWIgPSB0aGlzLl90YWJzW3RoaXMuX3RhYk9yZGVyW2ldXTtcbiAgICAgIGlmICh0YWIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YWIudXJsID0gdGhpcy5nZW5lcmF0ZVRhYlVybCh0YWIuYmFzZVVybCwgdGhpcy5nZXRVcmxQYXJhbXMoKSk7XG4gICAgICAgIHRhYnMucHVzaCh0YWIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZSh7XG4gICAgICB0YWJzOiB0YWJzXG4gICAgfSk7XG4gIH1cblxuICBnZXRVcmxQYXJhbXMgKCkge1xuICAgIHJldHVybiBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXREZWZhdWx0VGFiT3JkZXIgd2lsbCBjb21wdXRlIHRoZSBpbml0aWFsIHRhYiBvcmRlcmluZyBiYXNlZFxuICAgKiBvbiBhIGNvbWJpbmF0aW9uIG9mIHRoZSBjb25maWd1cmF0aW9uIHByb3ZpZGVkIGRpcmVjdGx5IHRvIHRoZSBjb21wb25lbnRcbiAgICogYW5kIHRoZSB1cmwgcGFyYW1zLlxuICAgKiBAcGFyYW0ge09iamVjdFtdfSB0YWJzQ29uZmlnXG4gICAqIEBwYXJhbSB7U2VhcmNoUGFyYW1zfVxuICAgKi9cbiAgZ2V0RGVmYXVsdFRhYk9yZGVyICh0YWJzQ29uZmlnLCB1cmxQYXJhbXMpIHtcbiAgICBsZXQgdGFiT3JkZXIgPSBbXTtcblxuICAgIC8vIFVzZSB0aGUgb3JkZXJpbmcgZnJvbSB0aGUgVVJMIGFzIHRoZSBwcmltYXJ5IGNvbmZpZ3VyYXRpb25cbiAgICAvLyBBbmQgdGhlbiBtZXJnZSBpdCB3aXRoIHRoZSBsb2NhbCBjb25maWd1cmF0aW9uLCBpZiBwcm92aWRlZC5cbiAgICBpZiAodXJsUGFyYW1zICYmIHVybFBhcmFtcy5oYXMoJ3RhYk9yZGVyJykpIHtcbiAgICAgIHRhYk9yZGVyID0gdXJsUGFyYW1zLmdldCgndGFiT3JkZXInKS5zcGxpdCgnLCcpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFic0NvbmZpZy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGFiID0gdGFic0NvbmZpZ1tpXTtcbiAgICAgIC8vIFNvbWUgdGFicyBkb24ndCBoYXZlIGNvbmZpZ0lkLCBzbyB3ZSBtYXAgaXQgZnJvbSBVUkxcbiAgICAgIGlmICh0YWIuY29uZmlnSWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YWIuY29uZmlnSWQgPSB0YWIudXJsO1xuICAgICAgfVxuXG4gICAgICAvLyBBdm9pZCBkdXBsaWNhdGVzIGlmIGNvbmZpZyB3YXMgcHJvdmlkZWQgZnJvbSBVUkxcbiAgICAgIGlmICh0YWJPcmRlci5pbmNsdWRlcyh0YWIuY29uZmlnSWQpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBpc0ZpcnN0IHNob3VsZCBhbHdheXMgYmUgdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhlIGxpc3RcbiAgICAgIGlmICh0YWIuaXNGaXJzdCkge1xuICAgICAgICB0YWJPcmRlci51bnNoaWZ0KHRhYi5jb25maWdJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWJPcmRlci5wdXNoKHRhYi5jb25maWdJZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYk9yZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIG1lcmdlVGFiT3JkZXIgbWVyZ2VzIHR3byBhcnJheXMgaW50byBvbmVcbiAgICogYnkgYXBwZW5kaW5nIGFkZGl0aW9uYWwgdGFicyB0byB0aGUgZW5kIG9mIHRoZSBvcmlnaW5hbCBhcnJheVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB0YWJPcmRlciBUYWIgb3JkZXIgcHJvdmlkZWQgYnkgdGhlIHNlcnZlclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBvdGhlclRhYk9yZGVyIFRhYiBvcmRlciBwcm92aWRlZCBieSBjb25maWd1cmF0aW9uXG4gICAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICAgKi9cbiAgbWVyZ2VUYWJPcmRlciAodGFiT3JkZXIsIG90aGVyVGFiT3JkZXIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG90aGVyVGFiT3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhYkNvbmZpZyA9IG90aGVyVGFiT3JkZXJbaV07XG4gICAgICBpZiAodGFiT3JkZXIuaW5jbHVkZXModGFiQ29uZmlnKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gaXNGaXJzdCBzaG91bGQgYmUgYW4gb3ZlcnJpZGUgdG8gZHluYW1pYyB0YWIgb3JkZXJpbmcuXG4gICAgICBpZiAodGhpcy5fdGFic1t0YWJDb25maWddICYmIHRoaXMuX3RhYnNbdGFiQ29uZmlnXS5pc0ZpcnN0KSB7XG4gICAgICAgIHRhYk9yZGVyLnVuc2hpZnQodGFiQ29uZmlnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhYk9yZGVyLnB1c2godGFiQ29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFiT3JkZXI7XG4gIH1cblxuICBnZW5lcmF0ZVRhYlVybCAoYmFzZVVybCwgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpKSB7XG4gICAgLy8gV2Ugd2FudCB0byBwZXJzaXN0IHRoZSBwYXJhbXMgZnJvbSB0aGUgZXhpc3RpbmcgVVJMIHRvIHRoZSBuZXdcbiAgICAvLyBVUkxTIHdlIGNyZWF0ZS5cbiAgICBwYXJhbXMuc2V0KCd0YWJPcmRlcicsIHRoaXMuX3RhYk9yZGVyKTtcbiAgICByZXR1cm4gYmFzZVVybCArICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIHRoZXJlIGFyZSB0b28gbWFueSB0YWJzLCBjcmVhdGUgYSBcIm1vcmVcIlxuICAgKiBkcm9wZG93biBtZW51IHRvIGRpc3BsYXkgdGFicyBsZWFzdCByZWxldmFudFxuICAgKiB0byB0aGUgcXVlcnkuXG4gICAqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgb25Nb3VudCAoKSB7XG4gICAgY29uc3QgcGFyZW50RWwgPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLmpzLXl4dC1uYXZDb250YWluZXInKTtcbiAgICBjb25zdCBuYXZJdGVtRWxzID0gRE9NLnF1ZXJ5QWxsKHRoaXMuX2NvbnRhaW5lciwgJy5qcy15eHQtbmF2SXRlbScpO1xuICAgIGNvbnN0IG1vZGFsRWwgPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLmpzLXl4dC1uYXZNb2RhbCcpO1xuICAgIGNvbnN0IG1vcmVCdXR0b25FbCA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcuanMteXh0LW5hdk1vcmUnKTtcbiAgICBjb25zdCBwYXJlbnRXaWR0aCA9IHBhcmVudEVsLm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IG1vcmVCdXR0b25XaWR0aCA9IG1vcmVCdXR0b25FbC5vZmZzZXRXaWR0aDtcbiAgICBsZXQgZWxzVG9Nb3ZlID0gW107XG5cbiAgICAvLyBDb2xsZWN0IGxpbmtzIHRoYXQgbmVlZCB0byBiZSBhZGRlZCB0byB0aGUgZHJvcGRvd25cbiAgICBmb3IgKGNvbnN0IG5hdkl0ZW1FbCBvZiBuYXZJdGVtRWxzKSB7XG4gICAgICBsZXQgY2hpbGRQb3MgPSBuYXZJdGVtRWwub2Zmc2V0TGVmdDtcbiAgICAgIGxldCBjaGlsZFdpZHRoID0gbmF2SXRlbUVsLm9mZnNldFdpZHRoO1xuXG4gICAgICAvLyBEZXRlcm1pbmVzIGlmIHRoZSBuYXYgaXRlbSBpcyBvdmVyZmxvd2luZyBhbmQgbmVlZHMgdG8gYmUgYWRkZWQgdG8gdGhlIGRyb3Bkb3duXG4gICAgICAvLyBPZmZzZXRzIGJ5IHRoZSB3aWR0aCBvZiB0aGUgbW9yZSBidXR0b24gdG8gbWFrZSBzdXJlIHRoZXJlIGlzIGVub3VnaCBzcGFjZSB0byBhZGQgaXRcbiAgICAgIGlmIChjaGlsZFBvcyArIGNoaWxkV2lkdGggPiBwYXJlbnRXaWR0aCAtIG1vcmVCdXR0b25XaWR0aCkge1xuICAgICAgICBlbHNUb01vdmUucHVzaChuYXZJdGVtRWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNob3dzIHRoZSAnTW9yZScgYnV0dG9uIGlmIHRoZXJlIGFyZSB2ZXJ0aWNhbHMgdG8gZGlzcGxheSBpbiB0aGUgZHJvcGRvd25cbiAgICBpZiAoZWxzVG9Nb3ZlLmxlbmd0aCkge1xuICAgICAgbW9yZUJ1dHRvbkVsLmNsYXNzTGlzdC5yZW1vdmUoJ3l4dC1OYXYtaXRlbS0tbW9yZScpO1xuICAgIH1cblxuICAgIC8vIEFkZHMgY3V0b2ZmIGVsZW1lbnRzIHRvIHRoZSBkcm9wZG93blxuICAgIGZvciAoY29uc3QgZWwgb2YgZWxzVG9Nb3ZlKSB7XG4gICAgICBtb2RhbEVsLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ3l4dC1OYXYtZHJvcERvd25JdGVtJyk7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCd5eHQtTmF2LWl0ZW0nKTtcbiAgICB9XG5cbiAgICAvLyBDbGljayBsaXN0ZW5lciB0byBkaXNwbGF5L2hpZGUgZHJvcHdkb3duLCB3aWxsIGJlIHJlbW92ZWQgYnkgRE9NLmVtcHR5IGluIG9uVW5Nb3VudCgpXG4gICAgbW9yZUJ1dHRvbkVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbW9kYWxFbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIC8vIENsb3NlIHRoZSBtb2RhbCB3aGVuIGNsaWNraW5nIG91dHNpZGUgb2YgaXQsIHdpbGwgYmUgcmVtb3ZlZCBieSBET00uZW1wdHkgaW4gb25Vbk1vdW50KClcbiAgICBjb25zdCBjbG9zZU1vZGFsQ2xpY2tMaXN0ZW5lciA9IChlKSA9PiB7XG4gICAgICAvLyBUT0RPIChibWNnaW5uaXMpOiB0aGlzIGlzIG5vdCByb2J1c3QgaWYgdGhleSBoYXZlIGFuIGltYWdlIGluIHRoZSBidXR0b24gb3IgbW9kYWxcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gbW9kYWxFbCB8fCBlLnRhcmdldCA9PT0gbW9yZUJ1dHRvbkVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG1vZGFsRWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWxDbGlja0xpc3RlbmVyKTtcbiAgICB0aGlzLl9saXN0ZW5lcnNUb1RlYXJEb3duLnB1c2goeyB0eXBlOiAnY2xpY2snLCBmbjogY2xvc2VNb2RhbENsaWNrTGlzdGVuZXIgfSk7XG5cbiAgICAvLyBUT0RPOiAoYm1jZ2lubmlzKSBtb3ZlIGtleWJvYXJkIGtleSBkZXRlY3Rpb24gZnJvbSBBdXRvY29tcGxldGUgaW50byBjb21tb24gb2JqZWN0IHNvIHdlIGNhbiBkZXRlY3QgZXNjYXBlIGtleVxuICAgIC8vIGhlcmUgYW5kIGNsb3NlIHRoZSBtb2RhbC5cblxuICAgIC8vIFRPRE8gKGNyZW90dXRhcikgdGhpcyBpcyByZXBlYXQgY29kZSB3ZSBwcm9iYWJseSB3YW50IHRvIHNwbGl0IHVwIHNldC11cCBhbmQgc2hvd2luZy9oaWRpbmdcbiAgICAvLyB0aGUgbW9yZSBidXR0b25cbiAgICBpZiAodGhpcy5fbXFsLm1hdGNoZXMpIHtcbiAgICAgIGZvciAoY29uc3QgZWwgb2YgZWxzVG9Nb3ZlKSB7XG4gICAgICAgIHBhcmVudEVsLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgneXh0LU5hdi1kcm9wRG93bkl0ZW0nKTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgneXh0LU5hdi1pdGVtJyk7XG4gICAgICB9XG4gICAgICBtb3JlQnV0dG9uRWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICBjb25zdCBicmVha3BvaW50Q2hhbmdlID0gKGUpID0+IHtcbiAgICAgIGlmIChlLm1hdGNoZXMpIHtcbiAgICAgICAgLy8gc2hvdyBzY3JvbGxcbiAgICAgICAgZm9yIChjb25zdCBlbCBvZiBlbHNUb01vdmUpIHtcbiAgICAgICAgICBwYXJlbnRFbC5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgneXh0LU5hdi1kcm9wRG93bkl0ZW0nKTtcbiAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCd5eHQtTmF2LWl0ZW0nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUT0RPIChjcmVvdHV0YXIpIHdlIHNob3VsZCB1c2UgYSBjbGFzcyBpbnN0ZWFkIG9mIGEgc3R5bGUgY2hhbmdlXG4gICAgICAgIG1vcmVCdXR0b25FbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHNob3cgbW9yZVxuICAgICAgICBmb3IgKGNvbnN0IGVsIG9mIGVsc1RvTW92ZSkge1xuICAgICAgICAgIG1vZGFsRWwuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ3l4dC1OYXYtZHJvcERvd25JdGVtJyk7XG4gICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgneXh0LU5hdi1pdGVtJyk7XG4gICAgICAgIH1cbiAgICAgICAgbW9yZUJ1dHRvbkVsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuX21xbC5hZGRMaXN0ZW5lcihicmVha3BvaW50Q2hhbmdlKTtcbiAgICByZXR1cm4gc3VwZXIub25Nb3VudCgpO1xuICB9XG5cbiAgb25Vbk1vdW50ICgpIHtcbiAgICB0aGlzLl9saXN0ZW5lcnNUb1RlYXJEb3duLmZvckVhY2gobGlzdGVuZXIgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIobGlzdGVuZXIudHlwZSwgbGlzdGVuZXIuZm4pKTtcblxuICAgIHJldHVybiBzdXBlci5vblVuTW91bnQoKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyICovXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBhcGkgZmlsdGVyIGFuZCBwcm92aWRlcyBzdGF0aWMgbWV0aG9kcyBmb3IgZWFzaWx5IGNvbnN0cnVjdGluZyBGaWx0ZXJzLlxuICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLnlleHQuY29tL2RvY3MvYXBpLXJlZmVyZW5jZS8jb3BlcmF0aW9uL2xpc3RFbnRpdGllcyBmb3Igc3RydWN0dXJlIGRldGFpbHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBhIEpTT04gZm9ybWF0IGZpbHRlciByZXR1cm5lZCBmcm9tIHRoZSBzZXJ2ZXIgaW50byBhIEZpbHRlclxuICAgKiBAcGFyYW0geyp9IHJlc3BvbnNlRmlsdGVyIEEgZmlsdGVyIGluIEpTT04gZm9ybWF0IHJldHVybmVkIGZyb20gdGhlIGJhY2tlbmRcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBmcm9tUmVzcG9uc2UgKHJlc3BvbnNlRmlsdGVyKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoSlNPTi5wYXJzZShyZXNwb25zZUZpbHRlcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIG5ldyBGaWx0ZXIgcmVwcmVzZW50aW5nIHRoZSBPUiBvZiBhbGwgcHJvdmlkZWQgZmlsdGVyc1xuICAgKiBAcGFyYW0gIHsuLi5GaWx0ZXJ9IGZpbHRlcnMgVGhlIGZpbHRlcnMgdG8gT1IgdG9nZXRoZXJcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBvciAoLi4uZmlsdGVycykge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgICckb3InOiBmaWx0ZXJzXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgbmV3IEZpbHRlciByZXByZXNlbnRpbmcgdGhlIEFORCBvZiBhbGwgcHJvdmlkZWQgZmlsdGVyc1xuICAgKiBAcGFyYW0gIHsuLi5GaWx0ZXJ9IGZpbHRlcnMgVGhlIGZpbHRlcnMgdG8gQU5EIHRvZ2V0aGVyXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgYW5kICguLi5maWx0ZXJzKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgJyRhbmQnOiBmaWx0ZXJzXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT1IgZmlsdGVycyB3aXRoIHRoZSBzYW1lIGtleXMsIHRoZW4gQU5EIHRoZSByZXN1bHRpbmcgZ3JvdXBzXG4gICAqIEBwYXJhbSAgey4uLkZpbHRlcn0gZmlsdGVycyBUaGUgZmlsdGVycyB0byBncm91cFxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGdyb3VwICguLi5maWx0ZXJzKSB7XG4gICAgY29uc3QgZ3JvdXBzID0ge307XG4gICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgZmlsdGVycykge1xuICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMoZmlsdGVyKVswXTtcbiAgICAgIGlmICghZ3JvdXBzW2tleV0pIHtcbiAgICAgICAgZ3JvdXBzW2tleV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1trZXldLnB1c2goZmlsdGVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBncm91cEZpbHRlcnMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIE9iamVjdC5rZXlzKGdyb3VwcykpIHtcbiAgICAgIGdyb3VwRmlsdGVycy5wdXNoKGdyb3Vwc1tmaWVsZF0ubGVuZ3RoID4gMSA/IEZpbHRlci5vciguLi5ncm91cHNbZmllbGRdKSA6IGdyb3Vwc1tmaWVsZF1bMF0pO1xuICAgIH1cblxuICAgIHJldHVybiBncm91cEZpbHRlcnMubGVuZ3RoID4gMSA/IEZpbHRlci5hbmQoLi4uZ3JvdXBGaWx0ZXJzKSA6IGdyb3VwRmlsdGVyc1swXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJlcXVhbCB0b1wiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGVxdWFsIHRvXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZXF1YWwgKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGVxJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImxlc3MgdGhhblwiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGxlc3MgdGhhblxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGxlc3NUaGFuIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRsdCcsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJsZXNzIHRoYW4gb3IgZXF1YWwgdG9cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG9cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBsZXNzVGhhbkVxdWFsIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRsZScsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJncmVhdGVyIHRoYW5cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBncmVhdGVyIHRoYW5cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBncmVhdGVyVGhhbiAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckZ3QnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwiZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ3JlYXRlclRoYW5FcXVhbCAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckZ2UnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGluY2x1c2l2ZSByYW5nZSBmaWx0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSBtaW4gVGhlIG1pbmltdW0gdmFsdWVcbiAgICogQHBhcmFtIHsqfSBtYXggVGhlIG1heGltdW0gdmFsdWVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBpbmNsdXNpdmVSYW5nZSAoZmllbGQsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgW2ZpZWxkXToge1xuICAgICAgICAnJGdlJzogbWluLFxuICAgICAgICAnJGxlJzogbWF4XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGV4Y2x1c2l2ZSByYW5nZSBmaWx0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSBtaW4gVGhlIG1pbmltdW0gdmFsdWVcbiAgICogQHBhcmFtIHsqfSBtYXggVGhlIG1heGltdW0gdmFsdWVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBleGNsdXNpdmVSYW5nZSAoZmllbGQsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgW2ZpZWxkXToge1xuICAgICAgICAnJGd0JzogbWluLFxuICAgICAgICAnJGx0JzogbWF4XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IHBvc2l0aW9uIGZpbHRlclxuICAgKiBAcGFyYW0ge251bWJlcn0gbGF0IFRoZSBsYXRpdHVkZSBvZiB0aGUgcG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxuZyBUaGUgbG9uZ2l0dWRlIG9mIHRoZSBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIFRoZSBzZWFyY2ggcmFkaXVzIChpbiBtZXRlcnMpXG4gICAqL1xuICBzdGF0aWMgcG9zaXRpb24gKGxhdCwgbG5nLCByYWRpdXMpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcignYnVpbHRpbi5sb2NhdGlvbicsICckbmVhcicsIHsgbGF0LCBsbmcsIHJhZGl1cyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgZmlsdGVyIHdpdGggdGhlIGdpdmVuIG1hdGNoZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1hdGNoZXIgVGhlIG1hdGNoZXIgZm9yIHRoZSBmaWxlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBmb3IgdGhlIGZpbHRlclxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIF9mcm9tTWF0Y2hlciAoZmllbGQsIG1hdGNoZXIsIHZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgW2ZpZWxkXToge1xuICAgICAgICBbbWF0Y2hlcl06IHZhbHVlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaENvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uL2RvbS9zZWFyY2hwYXJhbXMnO1xuXG4vKipcbiAqIFNlYXJjaENvbXBvbmVudCBleHBvc2VzIGFuIGludGVyZmFjZSBpbiBvcmRlciB0byBjcmVhdGVcbiAqIGEgVUkgU2VhcmNoIGV4cGVyaWVuY2UgZm9yIHZlcnRpY2FsIGFuZCB1bml2ZXJzYWwgc2VhcmNoLlxuICpcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGlucHV0IGtleSBmb3IgdGhlIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCBhdXRvLWNvbXBsZXRlIGFuZCBzZWFyY2ggd2lsbCBiZSBiYXNlZCBvbiB1bml2ZXJzYWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2JhcktleSA9IGNvbmZpZy5iYXJLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCB2ZXJ0aWNhbCBrZXkgZm9yIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCBhdXRvLWNvbXBsZXRlIGFuZCBzZWFyY2ggd2lsbCBiZSBiYXNlZCBvbiB1bml2ZXJzYWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBRdWVyeSBzdWJtaXNzaW9uIGlzIGJhc2VkIG9uIGEgZm9ybSBhcyBjb250ZXh0LlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBuYXRpdmUgZm9ybSBub2RlIHdpdGhpbiBjb250YWluZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9mb3JtRWwgPSBjb25maWcuZm9ybVNlbGVjdG9yIHx8ICdmb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBlbGVtZW50IHVzZWQgZm9yIHNlYXJjaGluZyBhbmQgd2lyZXMgdXAgdGhlIGtleWJvYXJkIGludGVyYWN0aW9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gY29uZmlnLmlucHV0RWwgfHwgJy5qcy15ZXh0LXF1ZXJ5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB1c2VkLCBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgYXMgYSBkYXRhIHBvaW50XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudGl0bGUgPSBjb25maWcudGl0bGUgfHwgJ0Fuc3dlcnMgVW5pdmVyc2FsIFNlYXJjaCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdGV4dCBpcyB1c2VkIGZvciBsYWJlbGluZyB0aGUgaW5wdXQgYm94LCBhbHNvIHByb3ZpZGVkIHRvIHRlbXBsYXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWxUZXh0ID0gY29uZmlnLmxhYmVsVGV4dCB8fCAnV2hhdCBhcmUgeW91IGludGVyZXN0ZWQgaW4/JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdWJtaXQgdGV4dCBpcyB1c2VkIGZvciBsYWJlbGluZyB0aGUgc3VibWl0IGJ1dHRvbiwgYWxzbyBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnN1Ym1pdFRleHQgPSBjb25maWcuc3VibWl0VGV4dCB8fCAnU3VibWl0JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdWJtaXQgaWNvbiBpcyBhbiBpY29uIGZvciB0aGUgc3VibWl0IGJ1dHRvbiwgaWYgcHJvdmlkZWQgaXQgd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHRoZVxuICAgICAqIHN1Ym1pdCB0ZXh0IHdpbGwgYmUgdXNlZCBmb3Igc2NyZWVuIHJlYWRlcnMuXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMuc3VibWl0SWNvbiA9IGNvbmZpZy5zdWJtaXRJY29uIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgdGV4dCB0byBzaG93IGFzIHRoZSBmaXJzdCBpdGVtIGZvciBhdXRvIGNvbXBsZXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucHJvbXB0SGVhZGVyID0gY29uZmlnLnByb21wdEhlYWRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQXV0byBmb2N1c2VzIHRoZSBpbnB1dCBib3ggaWYgc2V0IHRvIHRydWUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvRm9jdXMgPSBjb25maWcuYXV0b0ZvY3VzID09PSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogc3VibWl0VVJMIHdpbGwgZm9yY2UgdGhlIHNlYXJjaCBxdWVyeSBzdWJtaXNzaW9uIHRvIGdldFxuICAgICAqIHJlZGlyZWN0ZWQgdG8gdGhlIFVSTCBwcm92aWRlZC5cbiAgICAgKiBPcHRpb25hbCwgZGVmYXVsdHMgdG8gbnVsbC5cbiAgICAgKlxuICAgICAqIElmIG5vIHJlZGlyZWN0VXJsIHByb3ZpZGVkLCB3ZSBrZWVwIHRoZSBwYWdlIGFzIGEgc2luZ2xlIHBhZ2UgYXBwLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZWRpcmVjdFVybCA9IGNvbmZpZy5yZWRpcmVjdFVybCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHN0cmluZyB0byB1c2UgZm9yIHRoZSBpbnB1dCBib3gsIHByb3ZpZGVkIHRvIHRlbXBsYXRlIGZvciByZW5kZXJpbmcuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5xdWVyeSA9IGNvbmZpZy5xdWVyeSB8fCB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSkgfHwgJyc7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIFN0b3JhZ2VLZXlzLlFVRVJZLCBxID0+IHtcbiAgICAgIHRoaXMucXVlcnkgPSBxO1xuICAgICAgdGhpcy5zZXRTdGF0ZSgpO1xuICAgICAgdGhpcy5zZWFyY2gocSk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWluaW11bSB0aW1lIGFsbG93ZWQgaW4gbWlsbGlzZWNvbmRzIGJldHdlZW4gc2VhcmNoZXMgdG8gcHJldmVudFxuICAgICAqIG1hbnkgZHVwbGljYXRlIHNlYXJjaGVzIGJhY2stdG8tYmFja1xuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zZWFyY2hDb29sZG93biA9IGNvbmZpZy5zZWFyY2hDb29sZG93biB8fCAzMDA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnU2VhcmNoQmFyJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKCkge1xuICAgIHJldHVybiAnc2VhcmNoL3NlYXJjaCc7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgaWYgKHRoaXMucXVlcnkgJiYgdGhpcy5xdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNvcmUuc2V0UXVlcnkodGhpcy5xdWVyeSk7XG4gICAgICB0aGlzLnNlYXJjaCh0aGlzLnF1ZXJ5KTtcbiAgICB9XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICAvLyBXaXJlIHVwIG91ciBzZWFyY2ggaGFuZGxpbmcgYW5kIGF1dG8gY29tcGxldGVcbiAgICB0aGlzLmluaXRTZWFyY2godGhpcy5fZm9ybUVsKTtcbiAgICB0aGlzLmluaXRBdXRvQ29tcGxldGUodGhpcy5faW5wdXRFbCk7XG5cbiAgICBpZiAodGhpcy5hdXRvRm9jdXMgPT09IHRydWUgJiYgdGhpcy5xdWVyeS5sZW5ndGggPT09IDApIHtcbiAgICAgIERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2lucHV0RWwpLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgaGVscGVyIG1ldGhvZCB0byB1c2UgZm9yIHdpcmluZyB1cCBzZWFyY2hpbmcgb24gZm9ybSBzdWJtaXNzaW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtU2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIHN1Ym1pdCBoYW5kbGluZyB0b1xuICAgKi9cbiAgaW5pdFNlYXJjaCAoZm9ybVNlbGVjdG9yKSB7XG4gICAgdGhpcy5fZm9ybUVsID0gZm9ybVNlbGVjdG9yO1xuXG4gICAgdGhpcy5fY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3l4dC1TZWFyY2hCYXItd3JhcHBlcicpO1xuXG4gICAgbGV0IGZvcm0gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCBmb3JtU2VsZWN0b3IpO1xuICAgIGlmICghZm9ybSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgaW5pdGlhbGl6ZSBTZWFyY2hCYXI7IENhbiBub3QgZmluZCB7SFRNTEVsZW1lbnR9IGAnLCB0aGlzLl9mb3JtRWwsICdgLicpO1xuICAgIH1cblxuICAgIERPTS5vbihmb3JtLCAnc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IGlucHV0RWwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IodGhpcy5faW5wdXRFbCk7XG5cbiAgICAgIGxldCBxdWVyeSA9IGlucHV0RWwudmFsdWU7XG4gICAgICBsZXQgcGFyYW1zID0gbmV3IFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG4gICAgICBwYXJhbXMuc2V0KCdxdWVyeScsIHF1ZXJ5KTtcblxuICAgICAgLy8gSWYgd2UgaGF2ZSBhIHJlZGlyZWN0VXJsLCB3ZSB3YW50IHRoZSBmb3JtIHRvIGJlXG4gICAgICAvLyBzZXJpYWxpemVkIGFuZCBzdWJtaXR0ZWQuXG4gICAgICBpZiAodHlwZW9mIHRoaXMucmVkaXJlY3RVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5yZWRpcmVjdFVybCArICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlucHV0RWwuYmx1cigpO1xuXG4gICAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZLCBxdWVyeSk7XG4gICAgICB0aGlzLmNvcmUuc2V0UXVlcnkocXVlcnkpO1xuICAgICAgdGhpcy5zZWFyY2gocXVlcnkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgaGVscGVyIG1ldGhvZCB0byB3aXJlIHVwIG91ciBhdXRvIGNvbXBsZXRlIG9uIGFuIGlucHV0IHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBhdXRvIGNvbXBsZXRlIGNvbXBvbmVudCB0b1xuICAgKi9cbiAgaW5pdEF1dG9Db21wbGV0ZSAoaW5wdXRTZWxlY3Rvcikge1xuICAgIHRoaXMuX2lucHV0RWwgPSBpbnB1dFNlbGVjdG9yO1xuXG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZSkge1xuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2F1dG9jb21wbGV0ZSA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoJ0F1dG9Db21wbGV0ZScsIHtcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0uYXV0b2NvbXBsZXRlYCxcbiAgICAgIGNvbnRhaW5lcjogJy55eHQtU2VhcmNoQmFyLWF1dG9jb21wbGV0ZScsXG4gICAgICBiYXJLZXk6IHRoaXMuX2JhcktleSxcbiAgICAgIHZlcnRpY2FsS2V5OiB0aGlzLl92ZXJ0aWNhbEtleSxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5wcm9tcHRIZWFkZXIsXG4gICAgICBvcmlnaW5hbFF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgaW5wdXRFbDogaW5wdXRTZWxlY3RvcixcbiAgICAgIG9uU3VibWl0OiAoKSA9PiB7XG4gICAgICAgIERPTS50cmlnZ2VyKHRoaXMuX2Zvcm1FbCwgJ3N1Ym1pdCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoIChxdWVyeSkge1xuICAgIGlmICh0aGlzLl90aHJvdHRsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl90aHJvdHRsZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLl90aHJvdHRsZWQgPSBmYWxzZTsgfSwgdGhpcy5fc2VhcmNoQ29vbGRvd24pO1xuXG4gICAgaWYgKHRoaXMuX3ZlcnRpY2FsS2V5KSB7XG4gICAgICBjb25zdCBhbGxGaWx0ZXJzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgICBjb25zdCB0b3RhbEZpbHRlciA9IGFsbEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgICA/IEZpbHRlci5hbmQoLi4uYWxsRmlsdGVycylcbiAgICAgICAgOiBhbGxGaWx0ZXJzWzBdO1xuICAgICAgY29uc3QgZmFjZXRGaWx0ZXIgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRkFDRVRfRklMVEVSKVswXTtcbiAgICAgIHJldHVybiB0aGlzLmNvcmUudmVydGljYWxTZWFyY2godGhpcy5fdmVydGljYWxLZXksIHtcbiAgICAgICAgaW5wdXQ6IHF1ZXJ5LFxuICAgICAgICBmaWx0ZXI6IEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSxcbiAgICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5PVEUoYmlsbHkpIFRlbXBvcmFyeSBoYWNrIGZvciBERU1PXG4gICAgICAvLyBSZW1vdmUgbWUgYWZ0ZXIgdGhlIGRlbW9cbiAgICAgIGxldCBuYXYgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXJcbiAgICAgICAgLmdldEFjdGl2ZUNvbXBvbmVudCgnTmF2aWdhdGlvbicpO1xuXG4gICAgICBpZiAobmF2KSB7XG4gICAgICAgIGxldCB0YWJzID0gbmF2LmdldFN0YXRlKCd0YWJzJyk7XG4gICAgICAgIGxldCB1cmxzID0ge307XG5cbiAgICAgICAgaWYgKHRhYnMgJiYgQXJyYXkuaXNBcnJheSh0YWJzKSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXModGFic1tpXS51cmwuc3BsaXQoJz8nKVsxXSk7XG4gICAgICAgICAgICBwYXJhbXMuc2V0KCdxdWVyeScsIHF1ZXJ5KTtcblxuICAgICAgICAgICAgbGV0IHVybCA9IHRhYnNbaV0uYmFzZVVybDtcbiAgICAgICAgICAgIGlmIChwYXJhbXMudG9TdHJpbmcoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHVybCArPSAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVybHNbdGFic1tpXS5jb25maWdJZF0gPSB1cmw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvcmUuc2VhcmNoKHF1ZXJ5LCB1cmxzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29yZS5zZWFyY2gocXVlcnkpO1xuICAgIH1cbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBsYWJlbFRleHQ6IHRoaXMubGFiZWxUZXh0LFxuICAgICAgc3VibWl0SWNvbjogdGhpcy5zdWJtaXRJY29uLFxuICAgICAgc3VibWl0VGV4dDogdGhpcy5zdWJtaXRUZXh0LFxuICAgICAgcXVlcnk6IHRoaXMucXVlcnlcbiAgICB9LCBkYXRhKSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZpbHRlclNlYXJjaENvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uL2RvbS9zZWFyY2hwYXJhbXMnO1xuXG4vKipcbiAqIEZpbHRlclNlYXJjaENvbXBvbmVudCBpcyB1c2VkIGZvciBhdXRvY29tcGxldGUgdXNpbmcgdGhlIEZpbHRlclNlYXJjaCBiYWNrZW5kLlxuICogSXQnbGwgYWxsb3cgeW91IHRvIHBpY2sgcHJlLXNldCBmaWx0ZXJzIHRoYXQgYXJlIHNldHVwIG9uIHRoZSBiYWNrZW5kIHdpdGhpblxuICogYSB2ZXJ0aWNhbCBzZWFyY2ggY29udGV4dC5cbiAqXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBrZXkgZm9yIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggY29uZmlndXJhdGlvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYmFyS2V5ID0gY29uZmlnLmJhcktleSB8fCBjb25maWcuaW5wdXRLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IGNvbmZpZy52ZXJ0aWNhbEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc3RvcmUgdGhlIGZpbHRlciB2YWx1ZSBidXQgZG8gbm90IHNlYXJjaCBvbiBjaGFuZ2VcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N0b3JlT25DaGFuZ2UgPSBjb25maWcuc3RvcmVPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFF1ZXJ5IHN1Ym1pc3Npb24gaXMgYmFzZWQgb24gYSBmb3JtIGFzIGNvbnRleHQuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIG5hdGl2ZSBmb3JtIG5vZGUgd2l0aGluIGNvbnRhaW5lclxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2Zvcm1FbCA9IGNvbmZpZy5mb3JtU2VsZWN0b3IgfHwgJ2Zvcm0nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlucHV0IGVsZW1lbnQgdXNlZCBmb3Igc2VhcmNoaW5nIGFuZCB3aXJlcyB1cCB0aGUga2V5Ym9hcmQgaW50ZXJhY3Rpb25cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2lucHV0RWwgPSBjb25maWcuaW5wdXRFbCB8fCAnLmpzLXlleHQtcXVlcnknO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIHVzZWQsIHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZSBhcyBhIGRhdGEgcG9pbnRcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy50aXRsZSA9IGNvbmZpZy50aXRsZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWFyY2ggdGV4dCB1c2VkIGZvciBsYWJlbGluZyB0aGUgaW5wdXQgYm94LCBhbHNvIHByb3ZpZGVkIHRvIHRlbXBsYXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc2VhcmNoVGV4dCA9IGNvbmZpZy5zZWFyY2hUZXh0IHx8ICdXaGF0IGFyZSB5b3UgaW50ZXJlc3RlZCBpbj8nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHRleHQgdG8gc2hvdyBhcyB0aGUgZmlyc3QgaXRlbSBmb3IgYXV0byBjb21wbGV0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnByb21wdEhlYWRlciA9IGNvbmZpZy5wcm9tcHRIZWFkZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEF1dG8gZm9jdXNlcyB0aGUgaW5wdXQgYm94IGlmIHNldCB0byB0cnVlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIGRlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuYXV0b0ZvY3VzID0gY29uZmlnLmF1dG9Gb2N1cyA9PT0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIHN1Ym1pdFVSTCB3aWxsIGZvcmNlIHRoZSBzZWFyY2ggcXVlcnkgc3VibWlzc2lvbiB0byBnZXRcbiAgICAgKiByZWRpcmVjdGVkIHRvIHRoZSBVUkwgcHJvdmlkZWQuXG4gICAgICogT3B0aW9uYWwsIGRlZmF1bHRzIHRvIG51bGwuXG4gICAgICpcbiAgICAgKiBJZiBubyByZWRpcmVjdFVybCBwcm92aWRlZCwgd2Uga2VlcCB0aGUgcGFnZSBhcyBhIHNpbmdsZSBwYWdlIGFwcC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucmVkaXJlY3RVcmwgPSBjb25maWcucmVkaXJlY3RVcmwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSBzdHJpbmcgdG8gdXNlIGZvciB0aGUgaW5wdXQgYm94LCBwcm92aWRlZCB0byB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlcnkgPSBjb25maWcucXVlcnkgfHwgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWApIHx8ICcnO1xuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCwgcSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gcTtcbiAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmlsdGVyIHN0cmluZyB0byB1c2UgZm9yIHRoZSBwcm92aWRlZCBxdWVyeVxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZmlsdGVyID0gY29uZmlnLmZpbHRlciB8fCB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWApIHx8ICcnO1xuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWAsIGYgPT4geyB0aGlzLmZpbHRlciA9IGY7IH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0ZpbHRlclNlYXJjaCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lICgpIHtcbiAgICByZXR1cm4gJ3NlYXJjaC9maWx0ZXJzZWFyY2gnO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIGlmICh0aGlzLnF1ZXJ5ICYmIHRoaXMuZmlsdGVyKSB7XG4gICAgICB0aGlzLnNlYXJjaCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIC8vIFdpcmUgdXAgb3VyIHNlYXJjaCBoYW5kbGluZyBhbmQgYXV0byBjb21wbGV0ZVxuICAgIHRoaXMuaW5pdEF1dG9Db21wbGV0ZSh0aGlzLl9pbnB1dEVsKTtcblxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cyA9PT0gdHJ1ZSAmJiB0aGlzLnF1ZXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5faW5wdXRFbCkuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHdpcmUgdXAgb3VyIGF1dG8gY29tcGxldGUgb24gYW4gaW5wdXQgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIGF1dG8gY29tcGxldGUgY29tcG9uZW50IHRvXG4gICAqL1xuICBpbml0QXV0b0NvbXBsZXRlIChpbnB1dFNlbGVjdG9yKSB7XG4gICAgdGhpcy5faW5wdXRFbCA9IGlucHV0U2VsZWN0b3I7XG5cbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKCdBdXRvQ29tcGxldGUnLCB7XG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmF1dG9jb21wbGV0ZWAsXG4gICAgICBpc0ZpbHRlclNlYXJjaDogdHJ1ZSxcbiAgICAgIGNvbnRhaW5lcjogJy55eHQtU2VhcmNoQmFyLWF1dG9jb21wbGV0ZScsXG4gICAgICBwcm9tcHRIZWFkZXI6IHRoaXMucHJvbXB0SGVhZGVyLFxuICAgICAgb3JpZ2luYWxRdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgIG9yaWdpbmFsRmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgIGlucHV0RWw6IGlucHV0U2VsZWN0b3IsXG4gICAgICB2ZXJ0aWNhbEtleTogdGhpcy5fdmVydGljYWxLZXksXG4gICAgICBiYXJLZXk6IHRoaXMuX2JhcktleSxcbiAgICAgIG9uU3VibWl0OiAocXVlcnksIGZpbHRlcikgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICAgICAgcGFyYW1zLnNldChgJHt0aGlzLm5hbWV9LnF1ZXJ5YCwgcXVlcnkpO1xuICAgICAgICBwYXJhbXMuc2V0KGAke3RoaXMubmFtZX0uZmlsdGVyYCwgZmlsdGVyKTtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgcmVkaXJlY3RVcmwsIHdlIHdhbnQgdGhlIHBhcmFtcyB0byBiZVxuICAgICAgICAvLyBzZXJpYWxpemVkIGFuZCBzdWJtaXR0ZWQuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5yZWRpcmVjdFVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMucmVkaXJlY3RVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzYXZlIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBmb3IgdGhlIG5leHQgc2VhcmNoXG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBGaWx0ZXIuZnJvbVJlc3BvbnNlKGZpbHRlcik7XG4gICAgICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWAsIHRoaXMucXVlcnkpO1xuICAgICAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCwgdGhpcy5maWx0ZXIpO1xuICAgICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgdGhpcy5maWx0ZXIpO1xuICAgICAgICB0aGlzLnNlYXJjaCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gdGhlIHZlcnRpY2FsIHNlYXJjaCB3aXRoIGFsbCBzYXZlZCBmaWx0ZXJzIGFuZCBxdWVyeSxcbiAgICogb3B0aW9uYWxseSByZWRpcmVjdGluZyBiYXNlZCBvbiBjb25maWdcbiAgICovXG4gIHNlYXJjaCAoKSB7XG4gICAgaWYgKHRoaXMuX3N0b3JlT25DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgbGV0IHRvdGFsRmlsdGVyID0gZmlsdGVyc1swXTtcbiAgICBpZiAoZmlsdGVycy5sZW5ndGggPiAxKSB7XG4gICAgICB0b3RhbEZpbHRlciA9IEZpbHRlci5hbmQoLi4uZmlsdGVycyk7XG4gICAgfVxuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpIHx8ICcnO1xuICAgIGNvbnN0IGZhY2V0RmlsdGVyID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZBQ0VUX0ZJTFRFUilbMF07XG5cbiAgICB0aGlzLmNvcmUudmVydGljYWxTZWFyY2godGhpcy5fdmVydGljYWxLZXksIHtcbiAgICAgIGlucHV0OiBzZWFyY2hRdWVyeSxcbiAgICAgIGZpbHRlcjogSlNPTi5zdHJpbmdpZnkodG90YWxGaWx0ZXIpLFxuICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKVxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIHNlYXJjaFRleHQ6IHRoaXMuc2VhcmNoVGV4dCxcbiAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlclxuICAgIH0sIGRhdGEpKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuY29uc3QgS2V5cyA9IHtcbiAgQkFDS1NQQUNFOiA4LFxuICBUQUI6IDksXG4gIEVOVEVSOiAxMyxcbiAgU0hJRlQ6IDE2LFxuICBDVFJMOiAxNyxcbiAgQUxUOiAxOCxcbiAgRVNDQVBFOiAyNyxcblxuICBMRUZUOiAzNyxcbiAgUklHSFQ6IDM5LFxuICBVUDogMzgsXG5cbiAgREVMRVRFOiA0NixcbiAgRE9XTjogNDAsXG4gIExFRlRfT1NfS0VZOiA5MSxcbiAgUklHSFRfT1NfS0VZOiA5MixcbiAgU0VMRUNUX0tFWTogOTNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Db21wbGV0ZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgYXV0b2NvbXBsZXRlIGlzIHNpbXBsZSBvciBmaWx0ZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmlzRmlsdGVyU2VhcmNoID0gb3B0cy5pc0ZpbHRlclNlYXJjaCB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgYmFyS2V5YCBpbiB0aGUgdmVydGljYWwgc2VhcmNoIHRvIHVzZSBmb3IgYXV0by1jb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYmFyS2V5ID0gb3B0cy5iYXJLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgdmVydGljYWxLZXlgIG9mIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggdG8gdXNlIGZvciBhdXRvLWNvbXBsZXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IG9wdHMudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBpbnB1dCBlbCBzZWxlY3RvciBmb3IgYXV0byBjb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5faW5wdXRFbCA9IG9wdHMuaW5wdXRFbCB8fCAnLmpzLXlleHQtcXVlcnknO1xuXG4gICAgLyoqXG4gICAgICogQSBzZWxlY3RvciBmb3IgdGhlIGF1dG9jb21wbGV0ZSBlbGVtZW50ZXNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2F1dG9jb21wbGV0ZUVscyA9IG9wdHMuYXV0b0NvbXBsZXRlRWxzIHx8ICcuanMteWV4dC1hdXRvY29tbGV0ZS1vcHRpb24nO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIGZvciB0aGUgZGF0YS1zdG9yYWdlIHRvIGxpc3RlbiBmb3IgdXBkYXRlcyBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBgJHtTdG9yYWdlS2V5cy5BVVRPQ09NUExFVEV9LiR7dGhpcy5uYW1lfWA7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGlucHV0IHZhbHVlIHdoZW4gdHlwaW5nLlxuICAgICAqIFdlIHVzZSB0aGlzIGZvciByZXNldHRpbmcgdGhlIHN0YXRlIG9mIHRoZSBpbnB1dCB2YWx1ZSB3aGVuIG90aGVyIGludGVyYWN0aW9ucyAoZS5nLiByZXN1bHQgbmF2aWdhdGlvbilcbiAgICAgKiBjaGFuZ2UgYmFzZWQgb24gaW50ZXJhY3Rpb25zLiBGb3IgaW5zdGFuY2UsIGhpdHRpbmcgZXNjYXBlIHNob3VsZCByZXNldCB0aGUgdmFsdWUgdG8gdGhlIG9yaWdpbmFsIHR5cGVkIHF1ZXJ5LlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fb3JpZ2luYWxRdWVyeSA9IG9wdHMub3JpZ2luYWxRdWVyeSB8fCAnJztcblxuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIGtleWJvYXJkIG5hdmlnYXRpb24gdGhyb3VnaCByZXN1bHRzLlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBzZWN0aW9uIHdlJ3JlIG5hdmlnYXRpbmcgaW4uXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9zZWN0aW9uSW5kZXggPSAwO1xuXG4gICAgLyoqXG4gICAgICogVXNlZCBmb3Iga2V5Ym9hcmQgbmF2aWdhdGlvbiB0aHJvdWdoIHJlc3VsdHMuXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IHJlc3VsdCBpbmRleCB3ZSdyZSBuYXZpZ2F0aW5nIG9uLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVzdWx0SW5kZXggPSAtMTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSB0ZXh0IHRvIHNob3cgYXMgdGhlIGZpcnN0IGl0ZW0gZm9yIGF1dG8gY29tcGxldGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5wcm9tcHRIZWFkZXIgPSBvcHRzLnByb21wdEhlYWRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgaW52b2tlZCB3aGVuIHRoZSBgRW50ZXJgIGtleSBpcyBwcmVzc2VkIG9uIGF1dG8gY29tcGxldGUuXG4gICAgICovXG4gICAgdGhpcy5fb25TdWJtaXQgPSBvcHRzLm9uU3VibWl0IHx8IGZ1bmN0aW9uICgpIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBhbGlhc2VkIHVzZWQgYnkgdGhlIGNvbXBvbmVudCBtYW5hZ2VyIGZvciBjcmVhdGlvbi5cbiAgICovXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdBdXRvQ29tcGxldGUnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdzZWFyY2gvYXV0b2NvbXBsZXRlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXRTdGF0ZSBpcyBvdmVycmlkZGVuIHNvIHRoYXQgd2UgY2FuIHByb3ZpZGUgYWRkaXRpb25hbCBtZXRhIGRhdGFcbiAgICogdG8gdGhlIHRlbXBsYXRlIChlLmcuIHRoZSBzZWN0aW9uSW5kZXggYW5kIHJlc3VsdEluZGV4KSwgc2luY2VcbiAgICogdGhvc2UgYXJlIGNsaWVudC1pbnRlcmFjdGlvbiBzcGVjaWZpYyB2YWx1ZXMgYW5kIGFyZW4ndCByZXR1cm5lZCBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIGhhc1Jlc3VsdHM6IHRoaXMuaGFzUmVzdWx0cyhkYXRhKSxcbiAgICAgIHNlY3Rpb25JbmRleDogdGhpcy5fc2VjdGlvbkluZGV4LFxuICAgICAgcmVzdWx0SW5kZXg6IHRoaXMuX3Jlc3VsdEluZGV4LFxuICAgICAgcHJvbXB0SGVhZGVyOiB0aGlzLl9vcmlnaW5hbFF1ZXJ5Lmxlbmd0aCA9PT0gMCA/IHRoaXMucHJvbXB0SGVhZGVyIDogbnVsbFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB1cGRhdGVTdGF0ZSBpcyBhIGhlbHBlciB0byBhcHBseSB0aGUgY3VycmVudCBzdGF0ZSB3aXRoIG5ldyBjbGllbnQtc3RhdGUuXG4gICAqL1xuICB1cGRhdGVTdGF0ZSAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9zdGF0ZS5nZXQoKSk7XG4gIH1cblxuICAvKipcbiAgICogb25DcmVhdGUgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBjb25zdHJ1Y3RlZCBmcm9tIHRoZSBmcmFtZXdvcmsuXG4gICAqIE9uY2Ugd2UncmUgaW5pdGFsaXplZCwgd2Ugd2lyZSB1cCBhbGwgb2Ygb3VyIHVzZXIgaW50ZXJhY3Rpb25zXG4gICAqL1xuICBvbkNyZWF0ZSAoKSB7XG4gICAgLy8gVXNlIHRoZSBjb250ZXh0IG9mIHRoZSBwYXJlbnQgY29tcG9uZW50IHRvIGZpbmQgdGhlIGlucHV0IG5vZGUuXG4gICAgbGV0IHF1ZXJ5SW5wdXQgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Ll9jb250YWluZXIsIHRoaXMuX2lucHV0RWwpO1xuICAgIGlmICghcXVlcnlJbnB1dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgaW5pdGlhbGl6ZSBBdXRvQ29tcGxldGUuIENhbiBub3QgZmluZCB7SFRNTEVsZW1lbnR9IGAnLCB0aGlzLl9pbnB1dEVsLCAnYC4nKTtcbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIHRoZSBuYXRpdmUgYXV0b2NvbXBsZXRlLCBhdXRvY29ycmVjdCAmIHNwZWxsY2hlY2tcbiAgICBET00uYXR0cmlidXRlcyhxdWVyeUlucHV0LCB7XG4gICAgICBhdXRvY29tcGxldGU6ICdvZmYnLFxuICAgICAgYXV0b2NvcnJlY3Q6ICdvZmYnLFxuICAgICAgc3BlbGxjaGVjazogJ2ZhbHNlJ1xuICAgIH0pO1xuXG4gICAgLy8gVGhlIHVzZXIgZXhpdHMgdGhlIGlucHV0LCBzbyB3ZSB3YW50IHRvIHJlc2V0IHRoZSBzdGF0ZSBhbmQgY2xvc2VcbiAgICAvLyB0aGUgYXV0byBjb21wbGV0ZVxuICAgIC8vIFRPRE8oamRlbGVybWUpOiBDbG9zZSBsb2dpYyB0byBiZSBtb3ZlZCB0byBwYXJlbnRcbiAgICBET00ub24oZG9jdW1lbnQsICdjbGljaycsIGUgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5qcy15eHQtQXV0b0NvbXBsZXRlLXdyYXBwZXIgKicpIHx8IGUudGFyZ2V0Lm1hdGNoZXModGhpcy5faW5wdXRFbCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gV2hlbiBhIHVzZXIgZm9jdXNlcyB0aGUgaW5wdXQsIHdlIHNob3VsZCBwb3B1bGF0ZSB0aGUgYXV0b2NvbXBsZXRlIGJhc2VkXG4gICAgLy8gb24gdGhlIGN1cnJlbnQgdmFsdWVcbiAgICBET00ub24ocXVlcnlJbnB1dCwgJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgdGhpcy5hdXRvQ29tcGxldGUocXVlcnlJbnB1dC52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBuYXZpZ2F0ZSBiZXR3ZWVuIHRoZSByZXN1bHRzIHVzaW5nIHRoZSBrZXlib2FyZFxuICAgIERPTS5vbihxdWVyeUlucHV0LCAna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZU5hdmlnYXRlUmVzdWx0cyhlLmtleUNvZGUsIGUpO1xuICAgICAgdGhpcy5oYW5kbGVTdWJtaXRSZXN1bHQoZS5rZXlDb2RlLCBxdWVyeUlucHV0LnZhbHVlLCBlKTtcbiAgICB9KTtcblxuICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIHNlbGVjdCBhIHJlc3VsdCB3aXRoIHRoZSBtb3VzZVxuICAgIERPTS5kZWxlZ2F0ZSh0aGlzLl9jb250YWluZXIsICcuanMteWV4dC1hdXRvY29tcGxldGUtb3B0aW9uJywgJ2NsaWNrJywgKGV2dCwgdGFyZ2V0KSA9PiB7XG4gICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhc2V0O1xuICAgICAgbGV0IHZhbCA9IGRhdGEuc2hvcnQ7XG5cbiAgICAgIHRoaXMudXBkYXRlUXVlcnkodmFsKTtcbiAgICAgIHRoaXMuX29uU3VibWl0KHZhbCwgZGF0YS5maWx0ZXIpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gV2hlbiB0aGUgdXNlciBpcyB0eXBpbmcgaW4gdGhlIGlucHV0LCBwcm9jZXNzIHRoZSBhdXRvIGNvbXBsZXRlLlxuICAgIERPTS5vbihxdWVyeUlucHV0LCAna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVUeXBpbmcoZS5rZXlDb2RlLCBxdWVyeUlucHV0LnZhbHVlLCBlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjbG9zZSB3aWxsIGhpZGUgdGhlIGF1dG8gY29tcGxldGUgcmVzdWx0cyBhbmQgcmVzZXQgdGhlIHN0YXRlLlxuICAgKi9cbiAgY2xvc2UgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe30pO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXNldHMgdGhlIGNsaWVudCBzdGF0ZSB0byB0aGVpciBvcmlnaW5hbCB2YWx1ZXMgYW5kIHRyaWdnZXJzXG4gICAqIGEgdGVtcGxhdGUtcmVyZW5kZXIgdmlhIHVwZGF0ZVN0YXRlXG4gICAqL1xuICByZXNldCAoKSB7XG4gICAgdGhpcy5fc2VjdGlvbkluZGV4ID0gMDtcbiAgICB0aGlzLl9yZXN1bHRJbmRleCA9IC0xO1xuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHRvIHVwZGF0ZSB0aGUgaW5wdXQgdGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0VmFsdWUgT3B0aW9uIHZhbHVlIHByb3ZpZGVkLlxuICAgKiBJZiBubyB2YWx1ZSBwcm92aWRlZCwgd2UnbGwgdHJ5IHRvIGZpbmQgaXQgYmFzZWQgb24gdGhlIHNlbGVjdGlvbiBpbmRleGVzLlxuICAgKi9cbiAgdXBkYXRlUXVlcnkgKG9wdFZhbHVlKSB7XG4gICAgLy8gT25seSB3YW50IHRvIHVwZGF0ZSB0aGUgcXVlcnkgc3RyaW5nIGlmIHRoZXJlcyBhIHZhbHVlLlxuICAgIC8vIElmIG9uZSBpcyBwcm92aWRlZCwgZ3JlYXQuXG4gICAgLy8gT3RoZXJ3aXNlLCBsZXRzIHRyeSB0byBmaW5kIGl0IGZyb20gdGhlIGN1cnJlbnQgc2VsZWN0aW9uIGluIHRoZSByZXN1bHRzLlxuICAgIGlmIChvcHRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG5cbiAgICAgIGxldCByZXN1bHRzID0gc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzO1xuICAgICAgb3B0VmFsdWUgPSByZXN1bHRzW3RoaXMuX3Jlc3VsdEluZGV4XS5zaG9ydFZhbHVlO1xuICAgIH1cblxuICAgIGxldCBxdWVyeUVsID0gRE9NLnF1ZXJ5KHRoaXMuX3BhcmVudC5fY29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKTtcbiAgICBxdWVyeUVsLnZhbHVlID0gb3B0VmFsdWU7XG4gIH1cblxuICBoYW5kbGVUeXBpbmcgKGtleSwgdmFsdWUsIGUpIHtcbiAgICBsZXQgaWdub3JlZEtleXMgPSBbXG4gICAgICBLZXlzLkRPV04sXG4gICAgICBLZXlzLlVQLFxuICAgICAgS2V5cy5DVFJMLFxuICAgICAgS2V5cy5BTFQsXG4gICAgICBLZXlzLlNISUZULFxuICAgICAgS2V5cy5MRUZULFxuICAgICAgS2V5cy5SSUdIVCxcbiAgICAgIEtleXMuTEVGVF9PU19LRVksXG4gICAgICBLZXlzLlJJR0hUX09TX0tFWSxcbiAgICAgIEtleXMuRU5URVIsXG4gICAgICBLZXlzLlNFTEVDVF9LRVlcbiAgICBdO1xuXG4gICAgaWYgKGlnbm9yZWRLZXlzLmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVXNlciBlc2NhcGVzIG91dCBvZiBhdXRvIGNvbXBsZXRlLCBzbyB3ZSByZXNldCBpdCB0byB0aGUgb3JpZ2luYWwgaW5wdXRcbiAgICBpZiAoa2V5ID09PSBLZXlzLkVTQ0FQRSkge1xuICAgICAgdGhpcy51cGRhdGVRdWVyeSh0aGlzLl9vcmlnaW5hbFF1ZXJ5KTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUYWJiaW5nIG91dCBvciBlbnRlciBzaG91bGQgY2xvc2UgdGhlIGF1dG8gY29tcGxldGUuXG4gICAgaWYgKGtleSA9PT0gS2V5cy5UQUIpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIG9yaWdpbmFsIHZhbHVlIGJhc2VkIG9uIHRoZSB1c2VyIGlucHV0XG4gICAgdGhpcy5fb3JpZ2luYWxRdWVyeSA9IHZhbHVlO1xuXG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHRoaXMuYXV0b0NvbXBsZXRlKHZhbHVlKTtcbiAgfVxuXG4gIGF1dG9Db21wbGV0ZSAoaW5wdXQpIHtcbiAgICBpZiAodGhpcy5pc0ZpbHRlclNlYXJjaCkge1xuICAgICAgdGhpcy5jb3JlLmF1dG9Db21wbGV0ZUZpbHRlcihpbnB1dCwgdGhpcy5uYW1lLCB0aGlzLl92ZXJ0aWNhbEtleSwgdGhpcy5fYmFyS2V5KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3ZlcnRpY2FsS2V5IHx8IHRoaXMuX2JhcktleSkge1xuICAgICAgdGhpcy5jb3JlLmF1dG9Db21wbGV0ZVZlcnRpY2FsKGlucHV0LCB0aGlzLm5hbWUsIHRoaXMuX3ZlcnRpY2FsS2V5LCB0aGlzLl9iYXJLZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlVW5pdmVyc2FsKGlucHV0LCB0aGlzLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRydWUgaWYgd2UgaGF2ZSByZXN1bHRzIGluIGFueSBzZWN0aW9uXG4gICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICovXG4gIGhhc1Jlc3VsdHMgKGRhdGEpIHtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHNlY3Rpb25zID0gZGF0YVsnc2VjdGlvbnMnXTtcbiAgICBpZiAoIXNlY3Rpb25zKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZGF0YSA9IHNlY3Rpb25zW2ldO1xuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzdWx0cyA9IGRhdGEucmVzdWx0cztcbiAgICAgIGlmICghcmVzdWx0cykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBoYW5kbGVOYXZpZ2F0ZVJlc3VsdHMgKGtleSwgZSkge1xuICAgIGxldCBzZWN0aW9ucyA9IHRoaXMuX3N0YXRlLmdldCgnc2VjdGlvbnMnKTtcbiAgICBpZiAoc2VjdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBzZWN0aW9ucy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCByZXN1bHRzID0gc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzO1xuICAgIGlmIChrZXkgPT09IEtleXMuVVApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLl9yZXN1bHRJbmRleCA8PSAwKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPiAwKSB7XG4gICAgICAgICAgdGhpcy5fc2VjdGlvbkluZGV4LS07XG4gICAgICAgICAgdGhpcy5fcmVzdWx0SW5kZXggPSBzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHMubGVuZ3RoIC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHRoaXMuX29yaWdpbmFsUXVlcnkpO1xuICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVzdWx0SW5kZXgtLTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSBLZXlzLkRPV04pIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLl9yZXN1bHRJbmRleCA+PSByZXN1bHRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlY3Rpb25JbmRleCA8IHNlY3Rpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLl9zZWN0aW9uSW5kZXgrKztcbiAgICAgICAgICB0aGlzLl9yZXN1bHRJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVzdWx0SW5kZXgrKztcbiAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTdWJtaXRSZXN1bHQgKGtleSwgdmFsdWUsIGUpIHtcbiAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG4gICAgaWYgKHNlY3Rpb25zID09PSB1bmRlZmluZWQgfHwgc2VjdGlvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIGlmICh0aGlzLmlzRmlsdGVyU2VhcmNoKSB7XG4gICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBzdWJtaXQgdGhlIHNlYXJjaCBvbiBlbnRlclxuICAgIGlmIChrZXkgPT09IEtleXMuRU5URVIpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJTZWFyY2ggJiYgdGhpcy5fcmVzdWx0SW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGZpbHRlciA9ICcnO1xuICAgICAgaWYgKHRoaXMuX3NlY3Rpb25JbmRleCA+PSAwICYmIHRoaXMuX3Jlc3VsdEluZGV4ID49IDApIHtcbiAgICAgICAgZmlsdGVyID0gSlNPTi5zdHJpbmdpZnkoc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzW3RoaXMuX3Jlc3VsdEluZGV4XS5maWx0ZXIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHZhbHVlKTtcbiAgICAgIHRoaXMuX29yaWdpbmFsUXVlcnkgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX29uU3VibWl0KHZhbHVlLCBmaWx0ZXIpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmFjZXQgKi9cblxuLyoqXG4gKiBNb2RlbCByZXByZXNlbnRpbmcgYSBmYWNldCBmaWx0ZXIgd2l0aCB0aGUgZm9ybWF0IG9mXG4gKiB7XG4gKiAgIFwiZmllbGRfbmFtZVwiOiBbIEZpbHRlcnMuLi4gXSxcbiAqICAgLi4uXG4gKiB9XG4gKlxuICogQHNlZSB7QGxpbmsgRmlsdGVyfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgZmFjZXQgZmlsdGVyIGZyb20gYSBsaXN0IG9mIEZpbHRlcnNcbiAgICogQHBhcmFtICB7Li4uRmlsdGVyfSBmaWx0ZXJzIFRoZSBmaWx0ZXJzIHRvIHVzZSBpbiB0aGlzIGZhY2V0XG4gICAqIEByZXR1cm5zIHtGYWNldH1cbiAgICovXG4gIHN0YXRpYyBmcm9tRmlsdGVycyAoLi4uZmlsdGVycykge1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGNvbnN0IGZsYXRGaWx0ZXJzID0gZmlsdGVycy5mbGF0TWFwKGYgPT4gZi4kb3IgfHwgZik7XG4gICAgZmxhdEZpbHRlcnMuZm9yRWFjaChmID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKGYpWzBdO1xuICAgICAgaWYgKCFncm91cHNba2V5XSkge1xuICAgICAgICBncm91cHNba2V5XSA9IFtdO1xuICAgICAgfVxuICAgICAgZ3JvdXBzW2tleV0ucHVzaChmKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgRmFjZXQoZ3JvdXBzKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyQm94Q29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgRmFjZXQgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmFjZXQnO1xuXG4vKipcbiAqIFJlbmRlcnMgYSBzZXQgb2YgZmlsdGVycywgYW5kIHNlYXJjaGVzIHdpdGggdGhlbSB3aGVuIGFwcGxpZWQuXG4gKiBNdWx0aXBsZSBGaWx0ZXJCb3ggY29tcG9uZW50cyB3aWxsIEFORCB0b2dldGhlciBidXQgd2lsbCBub3Qgc2hhcmUgc3RhdGUuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyQm94Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIGlmICghY29uZmlnLmZpbHRlcnMgfHwgIShjb25maWcuZmlsdGVycyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlckJveCByZXF1aXJlcyBmaWx0ZXJzIHRvIGJlIHByb3ZpZGVkIGFzIGFuIGFycmF5JyxcbiAgICAgICAgJ0ZpbHRlckJveCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGZpbHRlcnMgdG8gZGlzcGxheSBhbmQgY29udHJvbFxuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlckNvbmZpZ3MgPSBjb25maWcuZmlsdGVycztcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBzZWFyY2hcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRyaWdnZXIgYSBzZWFyY2ggb24gZWFjaCBjaGFuZ2UgdG8gYSBmaWx0ZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaE9uQ2hhbmdlID0gY29uZmlnLnNlYXJjaE9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdG9yIG9mIHRoZSBhcHBseSBidXR0b25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBwbHlCdXR0b25TZWxlY3RvciA9IGNvbmZpZy5hcHBseUJ1dHRvblNlbGVjdG9yIHx8ICcuanMteWV4dC1maWx0ZXJib3gtYXBwbHknO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudHMgY3JlYXRlZCBmb3IgZWFjaCBmaWx0ZXIgY29uZmlnXG4gICAgICogQHR5cGUge0NvbXBvbmVudFtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGZpbHRlciBjb21wb25lbnRzIGluIHRoZSBib3hcbiAgICAgKiBAdHlwZSB7RmlsdGVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVycyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdGhpcyBmaWx0ZXJib3ggY29udGFpbnMgZHluYW1pYyBmaWx0ZXJzLiBUaGlzIGFmZmVjdHMgdGhlXG4gICAgICogdGhlIHdheSB0aGUgZmlsdGVycyBhcmUgdXNlZCBpbiB0aGUgc2VhcmNoXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9pc0R5bmFtaWMgPSBjb25maWcuaXNEeW5hbWljIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSBgZmlsdGVycy9maWx0ZXJib3hgO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0ZpbHRlckJveCc7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgZmlsdGVyQ29uZmlnczogdGhpcy5fZmlsdGVyQ29uZmlncyxcbiAgICAgIHNob3dBcHBseUJ1dHRvbjogIXRoaXMuX3NlYXJjaE9uQ2hhbmdlLFxuICAgICAgZXZlbnRUeXBlOiB0aGlzLl9pc0R5bmFtaWMgPyAnRkFDRVRJTkcnIDogJ0ZJTFRFUklORydcbiAgICB9KSk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICBpZiAodGhpcy5fZmlsdGVyQ29tcG9uZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2ZpbHRlckNvbXBvbmVudHMuZm9yRWFjaChjID0+IGMucmVtb3ZlKCkpO1xuICAgICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cyA9IFtdO1xuICAgICAgdGhpcy5fZmlsdGVycyA9IFtdO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgZmlsdGVycyBmcm9tIGNvbmZpZ3NcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2ZpbHRlckNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuX2ZpbHRlckNvbmZpZ3NbaV07XG4gICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKGNvbmZpZy50eXBlLCBPYmplY3QuYXNzaWduKHt9LFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfS5maWx0ZXIke2l9YCxcbiAgICAgICAgICBzdG9yZU9uQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICBjb250YWluZXI6IGAuanMteWV4dC1maWx0ZXJib3gtZmlsdGVyJHtpfWAsXG4gICAgICAgICAgb25DaGFuZ2U6IChmaWx0ZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25GaWx0ZXJDaGFuZ2UoaSwgZmlsdGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgIGNvbXBvbmVudC5tb3VudCgpO1xuICAgICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICB0aGlzLl9maWx0ZXJzW2ldID0gY29tcG9uZW50LmdldEZpbHRlcigpO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgYXBwbHkgYnV0dG9uXG4gICAgaWYgKCF0aGlzLl9zZWFyY2hPbkNoYW5nZSkge1xuICAgICAgY29uc3QgYnV0dG9uID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fYXBwbHlCdXR0b25TZWxlY3Rvcik7XG5cbiAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgRE9NLm9uKGJ1dHRvbiwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3NhdmVGaWx0ZXJzVG9TdG9yYWdlKCk7XG4gICAgICAgICAgdGhpcy5fc2VhcmNoKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgY2hhbmdlcyB0byBjaGlsZCBmaWx0ZXIgY29tcG9uZW50c1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBjaGFuZ2VkIGZpbHRlclxuICAgKiBAcGFyYW0ge0ZpbHRlcn0gZmlsdGVyIFRoZSBuZXcgZmlsdGVyXG4gICAqL1xuICBvbkZpbHRlckNoYW5nZSAoaW5kZXgsIGZpbHRlcikge1xuICAgIHRoaXMuX2ZpbHRlcnNbaW5kZXhdID0gZmlsdGVyO1xuICAgIGlmICh0aGlzLl9zZWFyY2hPbkNoYW5nZSkge1xuICAgICAgdGhpcy5fc2F2ZUZpbHRlcnNUb1N0b3JhZ2UoKTtcbiAgICAgIHRoaXMuX3NlYXJjaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGZpbHRlciBjb21wb25lbnRzIGFsb25nIHdpdGggdGhpcyBjb21wb25lbnRcbiAgICovXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cy5mb3JFYWNoKGMgPT4gYy5yZW1vdmUoKSk7XG4gICAgc3VwZXIucmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSBjdXJyZW50IGZpbHRlcnMgdG8gc3RvcmFnZSB0byBiZSB1c2VkIGluIHRoZSBuZXh0IHNlYXJjaFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NhdmVGaWx0ZXJzVG9TdG9yYWdlICgpIHtcbiAgICBjb25zdCB2YWxpZEZpbHRlcnMgPSB0aGlzLl9maWx0ZXJzLmZpbHRlcihmID0+XG4gICAgICBmICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIGYgIT09IG51bGwgJiZcbiAgICAgIE9iamVjdC5rZXlzKGYpLmxlbmd0aCA+IDApO1xuXG4gICAgaWYgKHRoaXMuX2lzRHluYW1pYykge1xuICAgICAgY29uc3QgY29tYmluZWRGaWx0ZXIgPSBGYWNldC5mcm9tRmlsdGVycyguLi52YWxpZEZpbHRlcnMpO1xuICAgICAgdGhpcy5jb3JlLnNldEZhY2V0RmlsdGVyKHRoaXMubmFtZSwgY29tYmluZWRGaWx0ZXIgfHwge30pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb21iaW5lZEZpbHRlciA9IHZhbGlkRmlsdGVycy5sZW5ndGggPiAxXG4gICAgICAgID8gRmlsdGVyLmFuZCguLi52YWxpZEZpbHRlcnMpXG4gICAgICAgIDogdmFsaWRGaWx0ZXJzWzBdO1xuICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGNvbWJpbmVkRmlsdGVyIHx8IHt9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBhIHNlYXJjaCB3aXRoIGFsbCBmaWx0ZXJzIGluIHN0b3JhZ2VcbiAgICovXG4gIF9zZWFyY2ggKCkge1xuICAgIGNvbnN0IGFsbEZpbHRlcnMgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICBjb25zdCB0b3RhbEZpbHRlciA9IGFsbEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgPyBGaWx0ZXIuYW5kKC4uLmFsbEZpbHRlcnMpXG4gICAgICA6IGFsbEZpbHRlcnNbMF07XG5cbiAgICAvLyBUT0RPKGpkZWxlcm1lKTogY2hlY2sgZW1wdHkgb2JqZWN0XG4gICAgY29uc3QgcXVlcnkgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSk7XG5cbiAgICBjb25zdCBmYWNldEZpbHRlciA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GQUNFVF9GSUxURVIpWzBdO1xuXG4gICAgdGhpcy5jb3JlLnZlcnRpY2FsU2VhcmNoKHRoaXMuX3ZlcnRpY2FsS2V5LCB7XG4gICAgICBpbnB1dDogcXVlcnksXG4gICAgICBmaWx0ZXI6IEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSxcbiAgICAgIGZhY2V0RmlsdGVyOiBKU09OLnN0cmluZ2lmeShmYWNldEZpbHRlcilcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyT3B0aW9uc0NvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuLyoqXG4gKiBUaGUgY3VycmVudGx5IHN1cHBvcnRlZCBjb250cm9sc1xuICogQHR5cGUge3N0cmluZ1tdfVxuICovXG5jb25zdCBTVVBQT1JURURfQ09OVFJPTFMgPSBbXG4gICdzaW5nbGVvcHRpb24nLFxuICAnbXVsdGlvcHRpb24nXG5dO1xuXG4vKipcbiAqIFJlbmRlcnMgYSBzZXQgb2Ygb3B0aW9ucywgZWFjaCBvbmUgcmVwcmVzZW50aW5nIGEgZmlsdGVyIGluIGEgc2VhcmNoLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJPcHRpb25zQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIGlmICghY29uZmlnLmNvbnRyb2wgfHwgIVNVUFBPUlRFRF9DT05UUk9MUy5pbmNsdWRlcyhjb25maWcuY29udHJvbCkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICdGaWx0ZXJPcHRpb25zIHJlcXVpcmVzIGEgdmFsaWQgXCJjb250cm9sXCIgdG8gYmUgcHJvdmlkZWQnLFxuICAgICAgICAnRmlsdGVyT3B0aW9ucycpO1xuICAgIH1cblxuICAgIGlmICghY29uZmlnLm9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICdGaWx0ZXJPcHRpb25zIGNvbXBvbmVudCByZXF1aXJlcyBvcHRpb25zIHRvIGJlIHByb3ZpZGVkJyxcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZSh0aGlzLm5hbWUpIHx8IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxpc3Qgb2YgZmlsdGVyIG9wdGlvbnMgdG8gZGlzcGxheSB3aXRoIGNoZWNrZWQgc3RhdHVzXG4gICAgICogQHR5cGUge29iamVjdFtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb3B0aW9ucyA9IGNvbmZpZy5vcHRpb25zLm1hcChvID0+IE9iamVjdC5hc3NpZ24oe30sIHsgc2VsZWN0ZWQ6IHNlbGVjdGVkT3B0aW9ucy5pbmNsdWRlcyhvLmxhYmVsKSB9LCBvKSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiBjb250cm9sIHRvIGRpc3BsYXlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fY29udHJvbCA9IGNvbmZpZy5jb250cm9sO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdG9yIHVzZWQgZm9yIG9wdGlvbnMgaW4gdGhlIHRlbXBsYXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29wdGlvblNlbGVjdG9yID0gY29uZmlnLm9wdGlvblNlbGVjdG9yIHx8ICcuanMteWV4dC1maWx0ZXItb3B0aW9uJztcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHN0b3JlcyB0aGUgZmlsdGVyIHRvIHN0b3JhZ2Ugb24gZWFjaCBjaGFuZ2VcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N0b3JlT25DaGFuZ2UgPSBjb25maWcuc3RvcmVPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB0byBjYWxsIHdoZW4gY2hhbmdlZFxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29uQ2hhbmdlID0gY29uZmlnLm9uQ2hhbmdlIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRvIGJlIHVzZWQgaW4gdGhlIGxlZ2VuZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9sYWJlbCA9IGNvbmZpZy5sYWJlbCB8fCAnRmlsdGVycyc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRmlsdGVyT3B0aW9ucyc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlciwgYmFzZWQgb24gdGhlIGNvbnRyb2xcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuIGBjb250cm9scy8ke2NvbmZpZy5jb250cm9sfWA7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgb3B0aW9uczogdGhpcy5fb3B0aW9ucyxcbiAgICAgIGxhYmVsOiB0aGlzLl9sYWJlbFxuICAgIH0pKTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIERPTS5kZWxlZ2F0ZShcbiAgICAgIERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIGAuJHt0aGlzLl9jb250cm9sfS1maWVsZHNldGApLFxuICAgICAgdGhpcy5fb3B0aW9uU2VsZWN0b3IsXG4gICAgICAnY2xpY2snLFxuICAgICAgZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGVPcHRpb24ocGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXgpLCBldmVudC50YXJnZXQuY2hlY2tlZCk7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgICAgICAgaWYgKHRoaXMuX3N0b3JlT25DaGFuZ2UpIHtcbiAgICAgICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgZmlsdGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX29uQ2hhbmdlKGZpbHRlcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIF91cGRhdGVPcHRpb24gKGluZGV4LCBzZWxlY3RlZCkge1xuICAgIGlmICh0aGlzLl9jb250cm9sID09PSAnc2luZ2xlb3B0aW9uJykge1xuICAgICAgdGhpcy5fb3B0aW9ucyA9IHRoaXMuX29wdGlvbnMubWFwKG8gPT4gT2JqZWN0LmFzc2lnbih7fSwgbywgeyBzZWxlY3RlZDogZmFsc2UgfSkpO1xuICAgIH1cblxuICAgIHRoaXMuX29wdGlvbnNbaW5kZXhdID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fb3B0aW9uc1tpbmRleF0sIHsgc2VsZWN0ZWQgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSgpO1xuICB9XG5cbiAgZ2V0RmlsdGVyICgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgb3B0aW9uc1xuICAgKi9cbiAgY2xlYXIgKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gRE9NLnF1ZXJ5QWxsKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fb3B0aW9uU2VsZWN0b3IpO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZSA9PiBlLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdmYWxzZScpKTtcbiAgICB0aGlzLl9hcHBseUZpbHRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGFuZCByZXR1cm4gdGhlIEZpbHRlciB0aGF0IHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9idWlsZEZpbHRlciAoKSB7XG4gICAgY29uc3QgZmlsdGVycyA9IHRoaXMuX29wdGlvbnNcbiAgICAgIC5maWx0ZXIobyA9PiBvLnNlbGVjdGVkKVxuICAgICAgLm1hcChvID0+IG8uZmlsdGVyXG4gICAgICAgID8gby5maWx0ZXJcbiAgICAgICAgOiBGaWx0ZXIuZXF1YWwoby5maWVsZCwgby52YWx1ZSkpO1xuXG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldCh0aGlzLm5hbWUsIHRoaXMuX29wdGlvbnMuZmlsdGVyKG8gPT4gby5zZWxlY3RlZCkubWFwKG8gPT4gby5sYWJlbCkpO1xuICAgIHJldHVybiBmaWx0ZXJzLmxlbmd0aCA+IDBcbiAgICAgID8gRmlsdGVyLmdyb3VwKC4uLmZpbHRlcnMpXG4gICAgICA6IHt9O1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBSYW5nZUZpbHRlckNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5nZUZpbHRlckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmllbGQgdG8gZmlsdGVyIG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpZWxkID0gY29uZmlnLmZpZWxkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgZmlsdGVyIHZhbHVlIGNoYW5nZXNcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vbkNoYW5nZSA9IGNvbmZpZy5vbkNoYW5nZSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHN0b3JlcyB0aGUgZmlsdGVyIHRvIHN0b3JhZ2Ugb24gZWFjaCBjaGFuZ2VcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N0b3JlT25DaGFuZ2UgPSBjb25maWcuc3RvcmVPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIGNvbnN0IG1pblZhbCA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke3RoaXMubmFtZX0ubWluYCk7XG4gICAgY29uc3QgbWF4VmFsID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7dGhpcy5uYW1lfS5tYXhgKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHJhbmdlIHJlcHJlc2VudGVkXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3JhbmdlID0ge1xuICAgICAgbWluOiBtaW5WYWwgfHwgY29uZmlnLmluaXRpYWxNaW4gfHwgMCxcbiAgICAgIG1heDogbWF4VmFsIHx8IGNvbmZpZy5pbml0aWFsTWF4IHx8IDEwXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB0byBkaXNwbGF5IGZvciB0aGUgcmFuZ2UgY29udHJvbFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90aXRsZSA9IGNvbmZpZy50aXRsZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBsYWJlbCB0byBkaXNwbGF5IGZvciB0aGUgbWluIGlucHV0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX21pbkxhYmVsID0gY29uZmlnLm1pbkxhYmVsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgbGFiZWwgdG8gZGlzcGxheSBmb3IgdGhlIG1heCBpbnB1dFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9tYXhMYWJlbCA9IGNvbmZpZy5tYXhMYWJlbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSBgY29udHJvbHMvcmFuZ2VgO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1JhbmdlRmlsdGVyJztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgdGl0bGU6IHRoaXMuX3RpdGxlLFxuICAgICAgbWluTGFiZWw6IHRoaXMuX21pbkxhYmVsLFxuICAgICAgbWF4TGFiZWw6IHRoaXMuX21heExhYmVsLFxuICAgICAgbWluVmFsdWU6IHRoaXMuX3JhbmdlLm1pbixcbiAgICAgIG1heFZhbHVlOiB0aGlzLl9yYW5nZS5tYXhcbiAgICB9KSk7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgRE9NLmRlbGVnYXRlKHRoaXMuX2NvbnRhaW5lciwgJy5qcy15ZXh0LXJhbmdlJywgJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdXBkYXRlUmFuZ2UoZXZlbnQudGFyZ2V0LmRhdGFzZXQua2V5LCBOdW1iZXIucGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRNaW4gKHZhbHVlKSB7XG4gICAgdGhpcy5fdXBkYXRlUmFuZ2UoJ21pbicsIHZhbHVlKTtcbiAgfVxuXG4gIHNldE1heCAodmFsdWUpIHtcbiAgICB0aGlzLl91cGRhdGVSYW5nZSgnbWF4JywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0RmlsdGVyICgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgcmFuZ2Ugc3RhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmFuZ2Uga2V5IHRvIHVwZGF0ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIG5ldyB2YWx1ZSBmb3IgdGhlIGtleVxuICAgKi9cbiAgX3VwZGF0ZVJhbmdlIChrZXksIHZhbHVlKSB7XG4gICAgdGhpcy5fcmFuZ2UgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9yYW5nZSwgeyBba2V5XTogdmFsdWUgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSgpO1xuXG4gICAgY29uc3QgZmlsdGVyID0gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgICBpZiAodGhpcy5fc3RvcmVPbkNoYW5nZSkge1xuICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGZpbHRlcik7XG4gICAgfVxuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7dGhpcy5uYW1lfS5taW5gLCB0aGlzLl9yYW5nZS5taW4pO1xuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7dGhpcy5uYW1lfS5tYXhgLCB0aGlzLl9yYW5nZS5tYXgpO1xuXG4gICAgdGhpcy5fb25DaGFuZ2UoZmlsdGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgZmlsdGVyIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjdXJyZW50IHN0YXRlXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBfYnVpbGRGaWx0ZXIgKCkge1xuICAgIHJldHVybiBGaWx0ZXIuaW5jbHVzaXZlUmFuZ2UodGhpcy5fZmllbGQsIHRoaXMuX3JhbmdlLm1pbiwgdGhpcy5fcmFuZ2UubWF4KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRGF0ZUZpbHRlckNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIEEgZmlsdGVyIGZvciBhIHJhbmdlIG9mIGRhdGVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVSYW5nZUZpbHRlckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBpIGZpZWxkIHRoaXMgZmlsdGVyIGNvbnRyb2xzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpZWxkID0gY29uZmlnLmZpZWxkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIHRvIGRpc3BsYXkgZm9yIHRoZSBkYXRlIHJhbmdlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RpdGxlID0gY29uZmlnLnRpdGxlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGxhYmVsIHRvIHNob3cgZm9yIHRoZSBtaW4gZGF0ZSBpbnB1dFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9taW5MYWJlbCA9IGNvbmZpZy5taW5MYWJlbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGxhYmVsIHRvIHNob3cgZm9yIHRoZSBtYXggZGF0ZSBpbnB1dFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9tYXhMYWJlbCA9IGNvbmZpZy5tYXhMYWJlbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbGxiYWNrIHVzZWQgd2hlbiBhIGRhdGUgaXMgY2hhbmdlZFxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29uQ2hhbmdlID0gY29uZmlnLm9uQ2hhbmdlIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc3RvcmVzIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBvbiBlYWNoIGNoYW5nZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RvcmVPbkNoYW5nZSA9IGNvbmZpZy5zdG9yZU9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhpcyBmaWx0ZXIgcmVwcmVzZW50cyBhbiBleGNsdXNpdmUgcmFuZ2UsIHJhdGhlciB0aGFuIGFuIGluY2x1c2l2ZSBvbmVcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2lzRXhjbHVzaXZlID0gY29uZmlnLmlzRXhjbHVzaXZlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIGZvciB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gYGNvbnRyb2xzL2RhdGVgO1xuXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRvZGF5U3RyaW5nID0gYCR7dG9kYXkuZ2V0RnVsbFllYXIoKX0tJHtgJHt0b2RheS5nZXRNb250aCgpICsgMX1gLnBhZFN0YXJ0KDIsICcwJyl9LSR7YCR7dG9kYXkuZ2V0RGF0ZSgpfWAucGFkU3RhcnQoMiwgJzAnKX1gO1xuICAgIGNvbnN0IG1pbkRhdGUgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHt0aGlzLm5hbWV9Lm1pbmApO1xuICAgIGNvbnN0IG1heERhdGUgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHt0aGlzLm5hbWV9Lm1heGApO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgZGF0ZSByYW5nZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZGF0ZSA9IHtcbiAgICAgIG1pbjogbWluRGF0ZSB8fCBjb25maWcuaW5pdGlhbE1pbiB8fCB0b2RheVN0cmluZyxcbiAgICAgIG1heDogbWF4RGF0ZSB8fCBjb25maWcuaW5pdGlhbE1heCB8fCB0b2RheVN0cmluZ1xuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRGF0ZVJhbmdlRmlsdGVyJztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgdGl0bGU6IHRoaXMuX3RpdGxlLFxuICAgICAgbWluTGFiZWw6IHRoaXMuX21pbkxhYmVsLFxuICAgICAgbWF4TGFiZWw6IHRoaXMuX21heExhYmVsLFxuICAgICAgZGF0ZU1pbjogdGhpcy5fZGF0ZS5taW4sXG4gICAgICBkYXRlTWF4OiB0aGlzLl9kYXRlLm1heFxuICAgIH0pKTtcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICBET00uZGVsZWdhdGUodGhpcy5fY29udGFpbmVyLCAnLmpzLXlleHQtZGF0ZScsICdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3VwZGF0ZVJhbmdlKGV2ZW50LnRhcmdldC5kYXRhc2V0LmtleSwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG1pbiBkYXRlIHRvIHRoZSBvbmUgcHJvdmlkZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGUgRGF0ZSB0byBzZXQgaW4geXl5eS1tbS1kZCBzdHJpbmcgZm9ybWF0XG4gICAqL1xuICBzZXRNaW4gKGRhdGUpIHtcbiAgICB0aGlzLl91cGRhdGVSYW5nZSgnbWluJywgZGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBtYXggZGF0ZSB0byB0aGUgb25lIHByb3ZpZGVkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlIERhdGUgdG8gc2V0IGluIHl5eXktbW0tZGQgc3RyaW5nIGZvcm1hdFxuICAgKi9cbiAgc2V0TWF4IChkYXRlKSB7XG4gICAgdGhpcy5fdXBkYXRlUmFuZ2UoJ21heCcsIGRhdGUpO1xuICB9XG5cbiAgZ2V0RmlsdGVyICgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBkYXRlIHJhbmdlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBmb3IgdGhlIGRhdGUgdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSBzdHJpbmcgZGF0ZSB2YWx1ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3VwZGF0ZVJhbmdlIChrZXksIHZhbHVlKSB7XG4gICAgdGhpcy5fZGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2RhdGUsIHsgW2tleV06IHZhbHVlIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoKTtcblxuICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuX2J1aWxkRmlsdGVyKCk7XG4gICAgaWYgKHRoaXMuX3N0b3JlT25DaGFuZ2UpIHtcbiAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBmaWx0ZXIpO1xuICAgIH1cbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke3RoaXMubmFtZX0ubWluYCwgdGhpcy5fZGF0ZS5taW4pO1xuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7dGhpcy5uYW1lfS5tYXhgLCB0aGlzLl9kYXRlLm1heCk7XG5cbiAgICB0aGlzLl9vbkNoYW5nZShmaWx0ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhbiBhcGkgZmlsdGVyIHdpdGggdGhlIGN1cnJlbnQgZGF0ZSBzdGF0ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2J1aWxkRmlsdGVyICgpIHtcbiAgICBpZiAodGhpcy5fZGF0ZS5taW4gPT09ICcnIHx8IHRoaXMuX2RhdGUubWF4ID09PSAnJykge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faXNFeGNsdXNpdmVcbiAgICAgID8gRmlsdGVyLmV4Y2x1c2l2ZVJhbmdlKHRoaXMuX2ZpZWxkLCB0aGlzLl9kYXRlLm1pbiwgdGhpcy5fZGF0ZS5tYXgpXG4gICAgICA6IEZpbHRlci5pbmNsdXNpdmVSYW5nZSh0aGlzLl9maWVsZCwgdGhpcy5fZGF0ZS5taW4sIHRoaXMuX2RhdGUubWF4KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRHluYW1pY0ZpbHRlcnNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbi8qKlxuICogRGlzcGxheXMgYSBzZXQgb2YgZHluYW1pYyBmaWx0ZXJzIHJldHVybmVkIGZyb20gdGhlIGJhY2tlbmRcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljRmlsdGVyc0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVydGljYWwga2V5IGZvciB0aGUgc2VhcmNoXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0cmlnZ2VyIGEgc2VhcmNoIG9uIGVhY2ggY2hhbmdlIHRvIGEgZmlsdGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zZWFyY2hPbkNoYW5nZSA9IGNvbmZpZy5zZWFyY2hPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RvciBvZiB0aGUgYXBwbHkgYnV0dG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwcGx5QnV0dG9uU2VsZWN0b3IgPSBjb25maWcuYXBwbHlCdXR0b25TZWxlY3RvciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbnRyb2xzIHRvIHVzZSBmb3IgZWFjaCBmaWVsZC4gRWFjaCB0eXBlIG9mIGZpbHRlciBoYXMgYSBkZWZhdWx0XG4gICAgICogJGVxIDogbXVsdGlvcHRpb24gKGNoZWNrYm94KVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5fZmllbGRDb250cm9scyA9IGNvbmZpZy5maWVsZENvbnRyb2xzIHx8IHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAnZmlsdGVycy9keW5hbWljJztcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSBmb3IgdGhlIGRhdGEgc3RvcmFnZSB0byBsaXN0ZW4gZm9yIHVwZGF0ZXMgZnJvbSB0aGUgc2VydmVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpbHRlciBib3ggdGhhdCBkaXNwbGF5cyB0aGUgZHluYW1pYyBmaWx0ZXJzXG4gICAgICogQHR5cGUge0ZpbHRlckJveENvbXBvbmVudH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlcmJveCA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRHluYW1pY0ZpbHRlcnMnO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgdGhpcy5jb3JlLmVuYWJsZUR5bmFtaWNGaWx0ZXJzKCk7XG5cbiAgICBpZiAodGhpcy5fZmlsdGVyYm94KSB7XG4gICAgICB0aGlzLl9maWx0ZXJib3gucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgbGV0IHsgZmlsdGVycyB9ID0gdGhpcy5fc3RhdGUuZ2V0KCk7XG5cbiAgICBpZiAoIWZpbHRlcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmaWx0ZXJzID0gZmlsdGVycy5tYXAoZiA9PiB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZiwge1xuICAgICAgICB0eXBlOiAnRmlsdGVyT3B0aW9ucycsXG4gICAgICAgIGNvbnRyb2w6IHRoaXMuX2ZpZWxkQ29udHJvbHNbZi5maWVsZElkXSB8fCAnbXVsdGlvcHRpb24nXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2ZpbHRlcmJveCA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoXG4gICAgICAnRmlsdGVyQm94JyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmZpbHRlcmJveGAsXG4gICAgICAgIGNvbnRhaW5lcjogJy5qcy15ZXh0LWR5bmFtaWMtZmlsdGVycycsXG4gICAgICAgIHNlYXJjaE9uQ2hhbmdlOiB0aGlzLl9zZWFyY2hPbkNoYW5nZSxcbiAgICAgICAgdmVydGljYWxLZXk6IHRoaXMuX3ZlcnRpY2FsS2V5LFxuICAgICAgICBpc0R5bmFtaWM6IHRydWUsXG4gICAgICAgIGZpbHRlcnNcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuX2ZpbHRlcmJveC5tb3VudCgpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBHZW9Mb2NhdGlvbkNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbmNvbnN0IE1FVEVSU19QRVJfTUlMRSA9IDE2MDkuMzQ0O1xuXG5jb25zdCBERUZBVUxUX0NPTkZJRyA9IHtcbiAgLyoqXG4gICAqIFRoZSByYWRpdXMsIGluIG1pbGVzLCBhcm91bmQgdGhlIHVzZXIncyBsb2NhdGlvbiB0byBmaW5kIHJlc3VsdHMuXG4gICAqIElmIGxvY2F0aW9uIGFjY3VyYWN5IGlzIGxvdywgYSBsYXJnZXIgcmFkaXVzIG1heSBiZSB1c2VkIGF1dG9tYXRpY2FsbHlcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHJhZGl1czogNTAsXG5cbiAgLyoqXG4gICAqIFRoZSB2ZXJ0aWNhbCBrZXkgdG8gdXNlXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICB2ZXJ0aWNhbEtleTogbnVsbCxcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgc3VibWl0cyBhIHNlYXJjaCB3aGVuIHRoZSB2YWx1ZSBpcyBjaGFuZ2VkXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgc2VhcmNoT25DaGFuZ2U6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBUaGUgdGl0bGUgdG8gZGlzcGxheVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdGl0bGU6ICdMb2NhdGlvbicsXG5cbiAgLyoqXG4gICAqIFRoZSBsYWJlbCB0byBkaXNwbGF5XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBsYWJlbDogJ0xvY2F0aW9uJyxcblxuICAvKipcbiAgICogVGhlIGljb24gdXJsIHRvIHNob3cgaW4gdGhlIGdlbyBidXR0b25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdlb0J1dHRvbkljb246ICcnLFxuXG4gIC8qKlxuICAgKiBUaGUgdGV4dCB0byBzaG93IGluIHRoZSBnZW8gYnV0dG9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZW9CdXR0b25UZXh0OiAnVXNlIE15IExvY2F0aW9uJyxcblxuICAvKipcbiAgICogVGhlIHRleHQgdG8gc2hvdyB3aGVuIGdlb2xvY2F0aW9uIGlzIGVuYWJsZWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGVuYWJsZWRUZXh0OiAnQ3VycmVudCBMb2NhdGlvbicsXG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IHRvIHNob3cgd2hlbiBsb2FkaW5nIHRoZSB1c2VyJ3MgbG9jYXRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGxvYWRpbmdUZXh0OiAnRmluZGluZyBZb3VyIExvY2F0aW9uLi4uJyxcblxuICAvKipcbiAgICogVGhlIHRleHQgdG8gc2hvdyBpZiB0aGUgdXNlcidzIGxvY2F0aW9uIGNhbm5vdCBiZSBmb3VuZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZXJyb3JUZXh0OiAnQ291bGQgTm90IEZpbmQgWW91ciBMb2NhdGlvbicsXG5cbiAgLyoqXG4gICAqIFRoZSBDU1Mgc2VsZWN0b3Igb2YgdGhlIHRvZ2dsZSBidXR0b25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGJ1dHRvblNlbGVjdG9yOiAnLmpzLXl4dC1HZW9Mb2NhdGlvbkZpbHRlci1idXR0b24nLFxuXG4gIC8qKlxuICAgKiBUaGUgQ1NTIHNlbGVjdG9yIG9mIHRoZSBxdWVyeSBpbnB1dFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgaW5wdXRTZWxlY3RvcjogJy5qcy15eHQtR2VvTG9jYXRpb25GaWx0ZXItaW5wdXQnXG59O1xuXG4vKipcbiAqIFJlbmRlcnMgYSBidXR0b24gdGhhdCB3aGVuIGNsaWNrZWQgYWRkcyBhIHN0YXRpYyBmaWx0ZXIgcmVwcmVzZW50aW5nIHRoZSB1c2VyJ3MgbG9jYXRpb25cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW9Mb2NhdGlvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKHsgLi4uREVGQVVMVF9DT05GSUcsIC4uLmNvbmZpZyB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSBzdHJpbmcgdG8gdXNlIGZvciB0aGUgaW5wdXQgYm94LCBwcm92aWRlZCB0byB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlcnkgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCkgfHwgJyc7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gLCBxID0+IHtcbiAgICAgIHRoaXMucXVlcnkgPSBxO1xuICAgICAgdGhpcy5zZXRTdGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpbHRlciBzdHJpbmcgdG8gdXNlIGZvciB0aGUgcHJvdmlkZWQgcXVlcnlcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmZpbHRlciA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCkgfHwgJyc7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCwgZiA9PiB7IHRoaXMuZmlsdGVyID0gZjsgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnR2VvTG9jYXRpb25GaWx0ZXInO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKCkge1xuICAgIHJldHVybiAnY29udHJvbHMvZ2VvbG9jYXRpb24nO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBsZXQgcGxhY2Vob2xkZXIgPSAnJztcbiAgICBpZiAodGhpcy5fZW5hYmxlZCkge1xuICAgICAgcGxhY2Vob2xkZXIgPSB0aGlzLl9jb25maWcuZW5hYmxlZFRleHQ7XG4gICAgfVxuICAgIGlmIChkYXRhLmdlb0xvYWRpbmcpIHtcbiAgICAgIHBsYWNlaG9sZGVyID0gdGhpcy5fY29uZmlnLmxvYWRpbmdUZXh0O1xuICAgIH1cbiAgICBpZiAoZGF0YS5nZW9FcnJvcikge1xuICAgICAgcGxhY2Vob2xkZXIgPSB0aGlzLl9jb25maWcuZXJyb3JUZXh0O1xuICAgIH1cbiAgICBzdXBlci5zZXRTdGF0ZSh7XG4gICAgICAuLi5kYXRhLFxuICAgICAgdGl0bGU6IHRoaXMuX2NvbmZpZy50aXRsZSxcbiAgICAgIGdlb0VuYWJsZWQ6IHRoaXMuX2VuYWJsZWQsXG4gICAgICBxdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgIGxhYmVsVGV4dDogdGhpcy5fY29uZmlnLmxhYmVsLFxuICAgICAgZW5hYmxlZFRleHQ6IHRoaXMuX2NvbmZpZy5lbmFibGVkVGV4dCxcbiAgICAgIGxvYWRpbmdUZXh0OiB0aGlzLl9jb25maWcubG9hZGluZ1RleHQsXG4gICAgICBlcnJvclRleHQ6IHRoaXMuX2NvbmZpZy5lcnJvclRleHQsXG4gICAgICBnZW9CdXR0b25JY29uOiB0aGlzLl9jb25maWcuZ2VvQnV0dG9uSWNvbixcbiAgICAgIGdlb1ZhbHVlOiB0aGlzLl9lbmFibGVkIHx8IGRhdGEuZ2VvTG9hZGluZyB8fCBkYXRhLmdlb0Vycm9yID8gJycgOiB0aGlzLnF1ZXJ5LFxuICAgICAgZ2VvUGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAgZ2VvQnV0dG9uVGV4dDogdGhpcy5fY29uZmlnLmdlb0J1dHRvblRleHRcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIGlmICh0aGlzLl9hdXRvY29tcGxldGUpIHtcbiAgICAgIHRoaXMuX2F1dG9jb21wbGV0ZS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9pbml0QXV0b0NvbXBsZXRlKHRoaXMuX2NvbmZpZy5pbnB1dFNlbGVjdG9yKTtcbiAgICBET00ub24odGhpcy5fY29uZmlnLmJ1dHRvblNlbGVjdG9yLCAnY2xpY2snLCAoKSA9PiB0aGlzLl90b2dnbGVHZW9GaWx0ZXIoKSk7XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHdpcmUgdXAgb3VyIGF1dG8gY29tcGxldGUgb24gYW4gaW5wdXQgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIGF1dG8gY29tcGxldGUgY29tcG9uZW50IHRvXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaW5pdEF1dG9Db21wbGV0ZSAoaW5wdXRTZWxlY3Rvcikge1xuICAgIGlmICh0aGlzLl9hdXRvY29tcGxldGUpIHtcbiAgICAgIHRoaXMuX2F1dG9jb21wbGV0ZS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9hdXRvY29tcGxldGUgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKCdBdXRvQ29tcGxldGUnLCB7XG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmF1dG9jb21wbGV0ZWAsXG4gICAgICBpc0ZpbHRlclNlYXJjaDogdHJ1ZSxcbiAgICAgIGNvbnRhaW5lcjogJy5qcy15eHQtR2VvTG9jYXRpb25GaWx0ZXItYXV0b2NvbXBsZXRlJyxcbiAgICAgIG9yaWdpbmFsUXVlcnk6IHRoaXMucXVlcnksXG4gICAgICBvcmlnaW5hbEZpbHRlcjogdGhpcy5maWx0ZXIsXG4gICAgICBpbnB1dEVsOiBpbnB1dFNlbGVjdG9yLFxuICAgICAgdmVydGljYWxLZXk6IHRoaXMuX3ZlcnRpY2FsS2V5LFxuICAgICAgb25TdWJtaXQ6IChxdWVyeSwgZmlsdGVyKSA9PiB7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBGaWx0ZXIuZnJvbVJlc3BvbnNlKGZpbHRlcik7XG4gICAgICAgIHRoaXMuX3NhdmVEYXRhVG9TdG9yYWdlKHF1ZXJ5LCB0aGlzLmZpbHRlcik7XG4gICAgICAgIHRoaXMuX2VuYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBzdGF0aWMgZmlsdGVyIHJlcHJlc2VudGluZyB0aGUgdXNlcidzIGxvY2F0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdG9nZ2xlR2VvRmlsdGVyICgpIHtcbiAgICBpZiAoIW5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdlb0Vycm9yOiB0cnVlIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fZW5hYmxlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdlb0xvYWRpbmc6IHRydWUgfSk7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxuICAgICAgICBwb3NpdGlvbiA9PiB7XG4gICAgICAgICAgdGhpcy5fc2F2ZURhdGFUb1N0b3JhZ2UoJycsIHRoaXMuX2J1aWxkRmlsdGVyKHBvc2l0aW9uKSk7XG4gICAgICAgICAgdGhpcy5fZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7fSk7XG4gICAgICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLmRlbGV0ZShgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCk7XG4gICAgICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLmRlbGV0ZShgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWApO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZ2VvRXJyb3I6IHRydWUgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNhdmVzIHRoZSBwcm92aWRlZCBmaWx0ZXIgdW5kZXIgdGhpcyBjb21wb25lbnQncyBuYW1lXG4gICAqIEBwYXJhbSB7RmlsdGVyfSBmaWx0ZXIgVGhlIGZpbHRlciB0byBzYXZlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2F2ZURhdGFUb1N0b3JhZ2UgKHF1ZXJ5LCBmaWx0ZXIpIHtcbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gLCBxdWVyeSk7XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWAsIGZpbHRlcik7XG4gICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGZpbHRlcik7XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnNlYXJjaE9uQ2hhbmdlKSB7XG4gICAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgICBsZXQgdG90YWxGaWx0ZXIgPSBmaWx0ZXJzWzBdO1xuICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICB0b3RhbEZpbHRlciA9IEZpbHRlci5hbmQoLi4uZmlsdGVycyk7XG4gICAgICB9XG4gICAgICBjb25zdCBzZWFyY2hRdWVyeSA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKSB8fCAnJztcbiAgICAgIGNvbnN0IGZhY2V0RmlsdGVyID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZBQ0VUX0ZJTFRFUilbMF07XG5cbiAgICAgIHRoaXMuY29yZS52ZXJ0aWNhbFNlYXJjaCh0aGlzLl9jb25maWcudmVydGljYWxLZXksIHtcbiAgICAgICAgaW5wdXQ6IHNlYXJjaFF1ZXJ5LFxuICAgICAgICBmaWx0ZXI6IEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSxcbiAgICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGEgcG9zaXRpb24sIGNvbnN0cnVjdCBhIEZpbHRlciBvYmplY3RcbiAgICogQHBhcmFtIHtQb3N0aXRpb259IHBvc2l0aW9uIFRoZSBwb3NpdGlvblxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2J1aWxkRmlsdGVyIChwb3NpdGlvbikge1xuICAgIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSwgYWNjdXJhY3kgfSA9IHBvc2l0aW9uLmNvb3JkcztcbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1heChhY2N1cmFjeSwgdGhpcy5fY29uZmlnLnJhZGl1cyAqIE1FVEVSU19QRVJfTUlMRSk7XG4gICAgcmV0dXJuIEZpbHRlci5wb3NpdGlvbihsYXRpdHVkZSwgbG9uZ2l0dWRlLCByYWRpdXMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEaXJlY3RBbnN3ZXJDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuLyoqXG4gKiBFdmVudFR5cGVzIGFyZSBleHBsaWNpdCBzdHJpbmdzIGRlZmluZWRcbiAqIGZvciB3aGF0IHRoZSBzZXJ2ZXIgZXhwZWN0cyBmb3IgYW5hbHl0aWNzLlxuICpcbiAqIEBlbnVtXG4gKi9cbmNvbnN0IEV2ZW50VHlwZXMgPSB7XG4gIFRIVU1CU19VUDogJ1RIVU1CU19VUCcsXG4gIFRIVU1CU19ET1dOOiAnVEhVTUJTX0RPV04nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RBbnN3ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgLyoqXG4gICAgICogUmVjaWV2ZSB1cGRhdGVzIGZyb20gc3RvcmFnZSBiYXNlZCBvbiB0aGlzIGluZGV4XG4gICAgICogQHR5cGUge1N0b3JhZ2VLZXl9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZm9ybSB1c2VkIGZvciBzdWJtaXR0aW5nIHRoZSBmZWVkYmFja1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fZm9ybUVsID0gY29uZmlnLmZvcm1FbCB8fCAnLmpzLWRpcmVjdEFuc3dlci1mZWVkYmFjay1mb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBgdGh1bWJzIHVwYCBjc3Mgc2VsZWN0b3IgdG8gYmluZCB1aSBpbnRlcmFjdGlvbiB0byBmb3IgcmVwb3J0aW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90aHVtYnNVcFNlbGVjdG9yID0gY29uZmlnLnRodW1ic1VwU2VsZWN0b3IgfHwgJy5qcy1kaXJlY3RBbnN3ZXItdGh1bWJVcCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYHRodW1icyBkb3duYCBjc3Mgc2VsZWN0b3IgdG8gYmluZCB1aSBpbnRlcmFjdGlvbiB0byBmb3IgcmVwb3J0aW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90aHVtYnNEb3duU2VsZWN0b3IgPSBjb25maWcudGh1bWJzRG93blNlbGVjdG9yIHx8ICcuanMtZGlyZWN0QW5zd2VyLXRodW1iRG93bic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlzcGxheSB0ZXh0IGZvciB0aGUgVmlldyBEZXRhaWxzIGNsaWNrIHRvIGFjdGlvbiBsaW5rXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92aWV3RGV0YWlsc1RleHQgPSBjb25maWcudmlld0RldGFpbHNUZXh0IHx8ICdWaWV3IERldGFpbHMnO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0RpcmVjdEFuc3dlcic7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvZGlyZWN0YW5zd2VyJztcbiAgfVxuXG4gIC8qKlxuICAgKiBiZWZvcmVNb3VudCwgb25seSBkaXNwbGF5IHRoZSBkaXJlY3QgYW5zd2VyIGNvbXBvbmVudCBpZiBpdCBoYXMgZGF0YVxuICAgKi9cbiAgYmVmb3JlTW91bnQgKCkge1xuICAgIGlmICghdGhpcy5oYXNTdGF0ZSgnYW5zd2VyJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBET00gaXMgY29uc3RydWN0ZWQsXG4gICAqIHdlIHdhbnQgdG8gd2lyZSB1cCB0aGUgYmVoYXZpb3IgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIHF1YWxpdHkgZmVlZGJhY2sgcmVwb3J0aW5nICh0aHVtYnN1cC9kb3duKVxuICAgKi9cbiAgb25Nb3VudCAoKSB7XG4gICAgLy8gQXZvaWQgYmluZGluZ3MgaWYgdGhlIGZlZWRiYWNrIGhhcyBwcmV2aW91c2x5IGJlZW4gc3VibWl0dGVkXG4gICAgaWYgKHRoaXMuZ2V0U3RhdGUoJ2ZlZWRiYWNrU3VibWl0dGVkJykgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIEZvciBXQ0FHIGNvbXBsaWFuY2UsIHRoZSBmZWVkYmFjayBzaG91bGQgYmUgYSBzdWJtaXR0YWJsZSBmb3JtXG4gICAgRE9NLm9uKHRoaXMuX2Zvcm1FbCwgJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBsZXQgZm9ybUVsID0gZS50YXJnZXQ7XG4gICAgICBsZXQgY2hlY2tlZFZhbHVlID0gRE9NLnF1ZXJ5KGZvcm1FbCwgJ2lucHV0OmNoZWNrZWQnKS5jaGVja2VkO1xuXG4gICAgICB0aGlzLnJlcG9ydFF1YWxpdHkoY2hlY2tlZFZhbHVlKTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAnZmVlZGJhY2tTdWJtaXR0ZWQnOiB0cnVlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIElzIHRoaXMgYWN0dWFsbHkgbmVjZXNzYXJ5PyBJIGd1ZXNzIGl0J3Mgb25seSBuZWNlc3NhcnkgaWYgdGhlXG4gICAgLy8gc3VibWl0IGJ1dHRvbiBpcyBoaWRkZW4uXG4gICAgRE9NLm9uKHRoaXMuX3RodW1ic1VwU2VsZWN0b3IsICdjbGljaycsICgpID0+IHsgRE9NLnRyaWdnZXIodGhpcy5fZm9ybUVsLCAnc3VibWl0Jyk7IH0pO1xuICAgIERPTS5vbih0aGlzLl90aHVtYnNEb3duU2VsZWN0b3IsICdjbGljaycsICgpID0+IHsgRE9NLnRyaWdnZXIodGhpcy5fZm9ybUVsLCAnc3VibWl0Jyk7IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHVwZGF0ZVN0YXRlIGVuYWJsZXMgZm9yIHBhcnRpYWwgdXBkYXRlcyAodGhlIGRlbHRhIGJldHdlZW4gdGhlIG9sZCBhbmQgbmV3KVxuICAgKiBAdHlwZSB7b2JqZWN0fSBUaGUgbmV3IHN0YXRlIHRvIGFwcGx5IHRvIHRoZSBvbGRcbiAgICovXG4gIHVwZGF0ZVN0YXRlIChzdGF0ZSA9IHt9KSB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmdldFN0YXRlKCksIHN0YXRlKTtcbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIGV2ZW50T3B0aW9uczogdGhpcy5ldmVudE9wdGlvbnMoZGF0YSksXG4gICAgICB2aWV3RGV0YWlsc1RleHQ6IHRoaXMuX3ZpZXdEZXRhaWxzVGV4dFxuICAgIH0pKTtcbiAgfVxuXG4gIGV2ZW50T3B0aW9ucyAoZGF0YSkge1xuICAgIGlmICghZGF0YSB8fCBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdmVydGljYWxDb25maWdJZDogZGF0YS5yZWxhdGVkSXRlbS52ZXJ0aWNhbENvbmZpZ0lkLFxuICAgICAgc2VhcmNoZXI6ICdVTklWRVJTQUwnLFxuICAgICAgZW50aXR5SWQ6IGRhdGEucmVsYXRlZEl0ZW0uZGF0YS5pZCxcbiAgICAgIGN0YUxhYmVsOiB0aGlzLl9jb25maWcudmlld0RldGFpbHNUZXh0LnRvVXBwZXJDYXNlKCkucmVwbGFjZSgnICcsICdfJylcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXBvcnRRdWFsaXR5IHdpbGwgc2VuZCB0aGUgcXVhbGl0eSBmZWVkYmFjayB0byBhbmFseXRpY3NcbiAgICogQHBhcmFtIHtib29sZWFufSBpc0dvb2QgdHJ1ZSBpZiB0aGUgYW5zd2VyIGlzIHdoYXQgeW91IHdlcmUgbG9va2luZyBmb3JcbiAgICovXG4gIHJlcG9ydFF1YWxpdHkgKGlzR29vZCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IGlzR29vZCA9PT0gdHJ1ZSA/IEV2ZW50VHlwZXMuVEhVTUJTX1VQIDogRXZlbnRUeXBlcy5USFVNQlNfRE9XTjtcbiAgICBjb25zdCBldmVudCA9IG5ldyBBbmFseXRpY3NFdmVudChldmVudFR5cGUpXG4gICAgICAuYWRkT3B0aW9ucyh7XG4gICAgICAgICdkaXJlY3RBbnN3ZXInOiB0cnVlXG4gICAgICB9KTtcblxuICAgIHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIucmVwb3J0KGV2ZW50KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIC8qKlxuICAgICAqIHZlcnRpY2FsQ29uZmlnSWQgdXNlZCBmb3IgYW5hbHl0aWNzIGFuZCBwYXNzZWQgdG8gY2hpbGRyZW5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxDb25maWdJZCA9IG9wdHMudmVydGljYWxDb25maWdJZDtcblxuICAgIC8qKlxuICAgICAqIGlzVW5pdmVyc2FsIGlzIHVzZWQgZm9yIGFuYWx5dGljcyBhbmQgcGFzc2VkIHRvIGNoaWxkcmVuIGFuZCBpcyBzZXQgdG9cbiAgICAgKiB0cnVlIGlmIHRoaXMgY29tcG9uZW50IGlzIGFkZGVkIGJ5IHRoZSBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50XG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9pc1VuaXZlcnNhbCA9IG9wdHMuaXNVbml2ZXJzYWwgfHwgZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL3Jlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIGhlbHBlciB0byBjb25zdHJ1Y3QgdGhlIGV2ZW50T3B0aW9ucyBvYmplY3QgZm9yIHRoZSB0aXRsZSBsaW5rXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBldmVudE9wdGlvbnMgKGVudGl0eUlkKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHZlcnRpY2FsQ29uZmlnSWQ6IHRoaXMuX3ZlcnRpY2FsQ29uZmlnSWQsXG4gICAgICBzZWFyY2hlcjogdGhpcy5faXNVbml2ZXJzYWwgPyAnVU5JVkVSU0FMJyA6ICdWRVJUSUNBTCcsXG4gICAgICBlbnRpdHlJZDogZW50aXR5SWRcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBwYXNzZXMgZXZlbnRPcHRpb25zIHRvIHRoZSB2aWV3TW9kZWxcbiAgICogQG92ZXJyaWRlXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEByZXR1cm5zIHtSZXN1bHRzSXRlbUNvbXBvbmVudH1cbiAgICovXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgZXZlbnRPcHRpb25zOiB0aGlzLmV2ZW50T3B0aW9ucyhkYXRhLmlkKVxuICAgIH0pKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBSZXN1bHRzSXRlbUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50ICovXG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNJdGVtQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0V2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL2V2ZW50cmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50ICovXG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBSZXN1bHRzSXRlbUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvcGVvcGxlcmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE1hcFByb3ZpZGVyICovXG5cbi8qKlxuICogQSBNYXBQcm92aWRlciBpcyBhbiBpbnRlcmZhY2UgdGhhdCByZXByZXNlbnRzIHRoYXQgc2hvdWxkIGJlIGltcGxlbWVudGVkXG4gKiBpbiBvcmRlciB0byBpbnRlZ3JhdGUgd2l0aCBhIFRoaXJkIFBhcnR5IE1hcCBwcm92aWRlciBmb3IgYm90aFxuICogc3RhdGljIGFuZCBpbnRlcmFjdGl2ZSBtYXBzLiBNYXBQcm92aWRlcnMgYXJlIHVzZWQgYnkgdGhlIE1hcENvbXBvbmVudC5cbiAqXG4gKiBJbXBsZW1lbnRhdGlvbnMgc2hvdWxkIGV4dGVuZCB0aGlzIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBUaGUgQVBJIEtleSB1c2VkIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBtYXAgcHJvdmlkZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2FwaUtleSA9IGNvbmZpZy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBtYXAgdG8gYXBwZW5kIHRvIHRoZSBET00sIGRlZmF1bHRzIHRvIDEwMCVcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX2hlaWdodCA9IGNvbmZpZy5oZWlnaHQgfHwgMjAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSBtYXAgdG8gYXBwZW5kIHRvIHRoZSBET00sIGRlZmF1bHRzIHRvIDEwMCVcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3dpZHRoID0gY29uZmlnLndpZHRoIHx8IDYwMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB6b29tIGxldmVsIG9mIHRoZSBtYXAsIGRlZmF1bHRzIHRvIDlcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3pvb20gPSBjb25maWcuem9vbSB8fCA5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgY29vcmRpbmF0ZXMgdG8gZGlzcGxheSBpZiB0aGVyZSBhcmUgbm8gcmVzdWx0cyByZXR1cm5lZFxuICAgICAqIE9ubHkgdXNlZCBpZiBzaG93RW1wdHlNYXAgaXMgc2V0IHRvIHRydWVcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX2RlZmF1bHRQb3NpdGlvbiA9IGNvbmZpZy5kZWZhdWx0UG9zaXRpb24gfHwgeyBsYXQ6IDM3LjA5MDIsIGxuZzogLTk1LjcxMjkgfTtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYW4gZW1wdHkgbWFwIHNob3VsZCBiZSBzaG93biB3aGVuIHRoZXJlIGFyZSBubyByZXN1bHRzXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5fc2hvd0VtcHR5TWFwID0gY29uZmlnLnNob3dFbXB0eU1hcCB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSB1bmRlcmx5aW5nIG1hcCBpbnN0YW5jZSwgY3JlYXRlZCBieSB0aGUgZXh0ZXJuYWwgbGliLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fbWFwID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRlbXBvcmFyeSBib29sZWFuIHRyYWNraW5nIHdoZXRoZXIgb3Igbm90IHRoZSBleHRlcm5hbCBKUyBsaWJyYXJ5IGlzIGxvYWRlZCAoc2VlIFRPRE8gYmVsb3cpXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5faXNMb2FkZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSB3aGVuIGEgcGluIGlzIGNsaWNrZWQuIFRoZSBjbGlja2VkIGl0ZW0ocykgYXJlIHBhc3NlZCB0byB0aGUgY2FsbGJhY2tcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5fb25QaW5DbGljayA9IGNvbmZpZy5vblBpbkNsaWNrIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugb25jZSB0aGUgSmF2YXNjcmlwdCBpcyBsb2FkZWRcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5fb25Mb2FkZWQgPSBjb25maWcub25Mb2FkZWQgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VzdG9tIGNvbmZpZ3VyYXRpb24gb3ZlcnJpZGUgdG8gdXNlIGZvciB0aGUgbWFwIG1hcmtlcnNcbiAgICAgKiBAdHlwZSB7T2JqZWN0fEZ1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMuX3BpbkNvbmZpZyA9IHR5cGVvZiBjb25maWcucGluID09PSAnZnVuY3Rpb24nID8gY29uZmlnLnBpbiA6IE9iamVjdC5hc3NpZ24oTWFwUHJvdmlkZXIuREVGQVVMVF9QSU5fQ09ORklHLCBjb25maWcucGluKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBjb25maWd1cmF0aW9uIHRvIHVzZSBmb3IgdGhlIG1hcCBtYXJrZXJzXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqIFRPRE8oYmlsbHkpIENyZWF0ZSBhIGNvbmZpZ3VyYXRpb24gbW9kZWxcbiAgICovXG4gIHN0YXRpYyBnZXQgREVGQVVMVF9QSU5fQ09ORklHICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWNvbjoge1xuICAgICAgICBhbmNob3I6IG51bGwsIC8vIGUuZy4geyB4OiAxLCB5OiAxIH1cbiAgICAgICAgc3ZnOiBudWxsLFxuICAgICAgICB1cmw6IG51bGwsXG4gICAgICAgIHNjYWxlZFNpemU6IG51bGwgLy8gZS5nLiB7IHc6IDIwLCBoOiAyMCB9XG4gICAgICB9LFxuICAgICAgbGFiZWxUeXBlOiAnbnVtZXJpYydcbiAgICB9O1xuICB9XG5cbiAgb25Mb2FkZWQgKGNiKSB7XG4gICAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX29uTG9hZGVkID0gY2I7XG4gICAgaWYgKHRoaXMuaXNMb2FkZWQoKSkge1xuICAgICAgdGhpcy5fb25Mb2FkZWQoKTtcbiAgICB9XG4gIH1cblxuICBpc0xvYWRlZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzTG9hZGVkO1xuICB9XG5cbiAgbG9hZEpTICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaW1wbGVtZW50ZWQgTWV0aG9kOiBsb2FkSlMnKTtcbiAgfVxuXG4gIGxvYWRTdGF0aWMgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCBNZXRob2Q6IGxvYWRTdGF0aWMnKTtcbiAgfVxuXG4gIGluaXQgKG1hcERhdGEpIHtcbiAgICAvLyBUT0RPKGJpbGx5KSBUaGlzIHNob3VsZCBiZSBiYXNlZCBvZmYgYSBwcm9taXNlIHRoYXQgZ2V0cyBjcmVhdGVkIGZyb20gbG9hZEpTXG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmltcGxlbWVudGVkIE1ldGhvZDogaW5pdCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGEgbGlzdCBvZiBtYXJrZXJzLCBjb21iaW5lIG1hcmtlcnMgd2l0aCB0aGUgc2FtZSBsYXQvbG5nIGludG8gYSBzaW5nbGUgbWFya2VyXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IG1hcmtlcnMgVGhlIG1hcmtlcnMgdG8gY29sbGFwc2VcbiAgICovXG4gIF9jb2xsYXBzZU1hcmtlcnMgKG1hcmtlcnMpIHtcbiAgICBjb25zdCBsb2NhdGlvblRvSXRlbSA9IHt9O1xuICAgIG1hcmtlcnMuZm9yRWFjaChtID0+IHtcbiAgICAgIGxvY2F0aW9uVG9JdGVtW2Ake20ubGF0aXR1ZGV9JHttLmxvbmdpdHVkZX1gXVxuICAgICAgICA/IGxvY2F0aW9uVG9JdGVtW2Ake20ubGF0aXR1ZGV9JHttLmxvbmdpdHVkZX1gXS5wdXNoKG0pXG4gICAgICAgIDogbG9jYXRpb25Ub0l0ZW1bYCR7bS5sYXRpdHVkZX0ke20ubG9uZ2l0dWRlfWBdID0gW21dO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29sbGFwc2VkTWFya2VycyA9IFtdO1xuICAgIGZvciAobGV0IFssIG1hcmtlcnNdIG9mIE9iamVjdC5lbnRyaWVzKGxvY2F0aW9uVG9JdGVtKSkge1xuICAgICAgaWYgKG1hcmtlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zdCBjb2xsYXBzZWRNYXJrZXIgPSB7XG4gICAgICAgICAgaXRlbTogbWFya2Vycy5tYXAobSA9PiBtLml0ZW0pLFxuICAgICAgICAgIGxhYmVsOiBtYXJrZXJzLmxlbmd0aCxcbiAgICAgICAgICBsYXRpdHVkZTogbWFya2Vyc1swXS5sYXRpdHVkZSxcbiAgICAgICAgICBsb25naXR1ZGU6IG1hcmtlcnNbMF0ubG9uZ2l0dWRlXG4gICAgICAgIH07XG4gICAgICAgIGNvbGxhcHNlZE1hcmtlcnMucHVzaChjb2xsYXBzZWRNYXJrZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sbGFwc2VkTWFya2Vycy5wdXNoKG1hcmtlcnNbMF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb2xsYXBzZWRNYXJrZXJzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBHb29nbGVNYXBQcm92aWRlciAqL1xuXG5pbXBvcnQgTWFwUHJvdmlkZXIgZnJvbSAnLi9tYXBwcm92aWRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uLy4uL2RvbS9kb20nO1xuXG4vKiBnbG9iYWwgZ29vZ2xlICovXG5cbi8qKlxuICogR29vZ2xlTWFwUHJvdmlkZXIgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgYSBNYXBQcm92aWRlclxuICogdGhhdCBoYW5kbGVzIHRoZSBpbnRlZ3JhdGlvbiB3aXRoIHRoZSB0aGlyZCBwYXJ0eSBBUEkgdG8gZXhwb3NlIG1hcHMuXG4gKiBAZXh0ZW5kcyBNYXBQcm92aWRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb29nbGVNYXBQcm92aWRlciBleHRlbmRzIE1hcFByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMuX2NsaWVudElkID0gb3B0cy5jbGllbnRJZDtcbiAgICB0aGlzLl9zaWduYXR1cmUgPSBvcHRzLnNpZ25hdHVyZTtcblxuICAgIGlmICghdGhpcy5oYXNWYWxpZENsaWVudENyZWRlbnRpYWxzKCkgJiYgIXRoaXMuX2FwaUtleSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdHb29nbGVNYXBzUHJvdmlkZXI6IE1pc3NpbmcgYGFwaUtleWAgb3Ige2BjbGllbnRJZGAsIGBzaWduYXR1cmVgfScpO1xuICAgIH1cbiAgfVxuXG4gIGxvYWRKUyAob25Mb2FkKSB7XG4gICAgaWYgKERPTS5xdWVyeSgnI3lleHQtbWFwLWpzJykpIHtcbiAgICAgIGlmICh0eXBlb2Ygb25Mb2FkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9uTG9hZCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBzY3JpcHQgPSBET00uY3JlYXRlRWwoJ3NjcmlwdCcsIHtcbiAgICAgIGlkOiAneWV4dC1tYXAtanMnLFxuICAgICAgb25sb2FkOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fb25Mb2FkZWQoKTtcbiAgICAgIH0sXG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIHNyYzogYC8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz8ke3RoaXMuZ2VuZXJhdGVDcmVkZW50aWFscygpfWBcbiAgICB9KTtcblxuICAgIERPTS5hcHBlbmQoJ2JvZHknLCBzY3JpcHQpO1xuICB9XG5cbiAgZ2VuZXJhdGVTdGF0aWMgKG1hcERhdGEpIHtcbiAgICBsZXQgZ29vZ2xlTWFwTWFya2VyQ29uZmlncyA9IEdvb2dsZU1hcE1hcmtlckNvbmZpZy5mcm9tKFxuICAgICAgbWFwRGF0YS5tYXBNYXJrZXJzLFxuICAgICAgdGhpcy5fcGluQ29uZmlnXG4gICAgKTtcblxuICAgIGxldCBlbmNvZGVkTWFya2VycyA9IEdvb2dsZU1hcE1hcmtlckNvbmZpZy5zZXJpYWxpemUoZ29vZ2xlTWFwTWFya2VyQ29uZmlncyk7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxpbWcgc3JjPVwiLy9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3N0YXRpY21hcD8ke2VuY29kZWRNYXJrZXJzfSZzaXplPSR7dGhpcy5fd2lkdGh9eCR7dGhpcy5faGVpZ2h0fSYke3RoaXMuZ2VuZXJhdGVDcmVkZW50aWFscygpfVwiPmA7XG4gIH1cblxuICBnZW5lcmF0ZUNyZWRlbnRpYWxzICgpIHtcbiAgICBpZiAodGhpcy5oYXNWYWxpZENsaWVudENyZWRlbnRpYWxzKCkpIHtcbiAgICAgIHJldHVybiBgY2xpZW50PSR7dGhpcy5fY2xpZW50SWR9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGBrZXk9JHt0aGlzLl9hcGlLZXl9YDtcbiAgICB9XG4gIH1cblxuICBoYXNWYWxpZENsaWVudENyZWRlbnRpYWxzICgpIHtcbiAgICAvLyBTaWduYXR1cmUgaXMgb25seSByZXF1aXJlZCBpZiBtYXAgaXMgc3RhdGljXG4gICAgcmV0dXJuIHRoaXMuX2NsaWVudElkICYmICh0aGlzLl9zaWduYXR1cmUgfHwgIXRoaXMuX2lzU3RhdGljKTtcbiAgfVxuXG4gIGluaXQgKGVsLCBtYXBEYXRhKSB7XG4gICAgaWYgKCghbWFwRGF0YSB8fCBtYXBEYXRhLm1hcE1hcmtlcnMubGVuZ3RoIDw9IDApICYmICF0aGlzLl9zaG93RW1wdHlNYXApIHtcbiAgICAgIHRoaXMuX21hcCA9IG51bGw7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLy8gTk9URShiaWxseSkgVGhpcyB0aW1lb3V0IGlzIGEgaGFjayBmb3IgZGVhbGluZyB3aXRoIGFzeW5jIG5hdHVyZS5cbiAgICAvLyBPbmx5IGhlcmUgZm9yIGRlbW8gcHVycG9zZXMsIHNvIHdlJ2xsIGZpeCBsYXRlci5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBjb250YWluZXIgPSBET00ucXVlcnkoZWwpO1xuICAgICAgRE9NLmNzcyhjb250YWluZXIsIHtcbiAgICAgICAgd2lkdGg6IHRoaXMuX3dpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuX2hlaWdodFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMubWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChjb250YWluZXIsIHtcbiAgICAgICAgem9vbTogdGhpcy5fem9vbVxuICAgICAgfSk7XG5cbiAgICAgIC8vIEFwcGx5IG91ciBzZWFyY2ggZGF0YSB0byBvdXIgR29vZ2xlTWFwXG4gICAgICBsZXQgYm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xuXG4gICAgICBpZiAobWFwRGF0YSAmJiBtYXBEYXRhLm1hcE1hcmtlcnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlZE1hcmtlcnMgPSB0aGlzLl9jb2xsYXBzZU1hcmtlcnMobWFwRGF0YS5tYXBNYXJrZXJzKTtcbiAgICAgICAgbGV0IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MgPSBHb29nbGVNYXBNYXJrZXJDb25maWcuZnJvbShcbiAgICAgICAgICBjb2xsYXBzZWRNYXJrZXJzLFxuICAgICAgICAgIHRoaXMuX3BpbkNvbmZpZyxcbiAgICAgICAgICB0aGlzLm1hcCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnb29nbGVNYXBNYXJrZXJDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoZ29vZ2xlTWFwTWFya2VyQ29uZmlnc1tpXSk7XG4gICAgICAgICAgaWYgKHRoaXMuX29uUGluQ2xpY2spIHtcbiAgICAgICAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9vblBpbkNsaWNrKGNvbGxhcHNlZE1hcmtlcnNbaV0uaXRlbSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib3VuZHMuZXh0ZW5kKG1hcmtlci5wb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1hcC5maXRCb3VuZHMoYm91bmRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWFwLnNldENlbnRlcihuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHRoaXMuX2RlZmF1bHRQb3NpdGlvbi5sYXQsIHRoaXMuX2RlZmF1bHRQb3NpdGlvbi5sbmcpKTtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuICB9XG59XG5cbi8vIFRPRE8oYmlsbHkpIE1vdmUgdG8gb3duIGNsYXNzXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwTWFya2VyQ29uZmlnIHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgZ29vZ2xlIG1hcCwgdGhhdCB0aGUgbWFya2VyIGlzIGFwcGVuZGVkIHRvXG4gICAgICogQHR5cGUge0dvb2dsZU1hcH1cbiAgICAgKi9cbiAgICB0aGlzLm1hcCA9IG9wdHMubWFwIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb29yZGluYXRlcyBvZiB0aGUgbWFya2VyIChsYXQvbG5nKVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5wb3NpdGlvbiA9IG9wdHMucG9zaXRpb24gfHwge1xuICAgICAgbGF0OiB1bmRlZmluZWQsXG4gICAgICBsbmc6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcHJvcGVydGllcy9zZXR0aW5ncyBvZiB0aGUgaWNvbiB1c2VkIGZvciB0aGUgbWFya2VyXG4gICAgICogZS5nLiB7XG4gICAgICogICAgICAgIGFuY2hvcjogeyB4OiAwLCB5OiAwIH1cbiAgICAgKiAgICAgICAgdXJsOiAncGF0aC90by91cmwuanBnJ1xuICAgICAqICAgICAgICBzY2FsZWRTaXplOiB7IHc6IDAsIGg6IDAgfVxuICAgICAqICAgICAgIH1cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5pY29uID0gb3B0cy5pY29uIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCBvZiB0aGUgbWFya2VyIHRvIHVzZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbCA9IG9wdHMubGFiZWwgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYW4gYXJyYXkgb2YgbWFya2VyIGNvbmZpZ3NcbiAgICogQHBhcmFtIHtHb29nbGVNYXBNYXJrZXJDb25maWdbXX0gZ29vZ2xlTWFwTWFya2VyQ29uZmlnc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplIChnb29nbGVNYXBNYXJrZXJDb25maWdzKSB7XG4gICAgbGV0IHNlcmlhbGl6ZWRNYXJrZXJzID0gW107XG4gICAgZ29vZ2xlTWFwTWFya2VyQ29uZmlncy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIHNlcmlhbGl6ZWRNYXJrZXJzLnB1c2goYG1hcmtlcnM9bGFiZWw6JHttYXJrZXIubGFiZWx9fCR7bWFya2VyLnBvc2l0aW9uLmxhdH0sJHttYXJrZXIucG9zaXRpb24ubG5nfWApO1xuICAgIH0pO1xuICAgIHJldHVybiBzZXJpYWxpemVkTWFya2Vycy5qb2luKCcmJyk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIHN0b3JhZ2UgZGF0YSBtb2RlbCBvZiBtYXJrZXJzIGludG8gR29vZ2xlQVBJTWFya2VyXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IG1hcmtlcnMgVGhlIGRhdGEgb2YgdGhlIG1hcmtlclxuICAgKiBAcGFyYW0geyhPYmplY3R8ZnVuY3Rpb24pfSBwaW5Db25maWcgVGhlIGNvbmZpZ3VyYXRpb24gdG8gYXBwbHkgdG8gdGhlIG1hcmtlclxuICAgKiBAcGFyYW0ge0dvb2dsZU1hcH0gbWFwIHJlZmVyZW5jZSB0byB0aGUgZ29vZ2xlIG1hcCB0byBhcHBseSB0aGUgbWFya2VyIHRvXG4gICAqIEByZXR1cm5zIHtHb29nbGVNYXBNYXJrZXJDb25maWdbXX1cbiAgICovXG4gIHN0YXRpYyBmcm9tIChtYXJrZXJzLCBwaW5Db25maWcsIG1hcCkge1xuICAgIGxldCBnb29nbGVNYXBNYXJrZXJDb25maWdzID0gW107XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1hcmtlcnMpKSB7XG4gICAgICBtYXJrZXJzID0gW21hcmtlcnNdO1xuICAgIH1cblxuICAgIG1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICAvLyBTdXBwb3J0IGNvbmZpZ3VyYXRpb24gYXMgYSBmdW5jdGlvblxuICAgICAgbGV0IHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZztcbiAgICAgIGlmICh0eXBlb2YgcGluQ29uZmlnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZyhcbiAgICAgICAgICBtYXJrZXIuaXRlbSxcbiAgICAgICAgICBNYXBQcm92aWRlci5ERUZBVUxUX1BJTl9DT05GSUcsXG4gICAgICAgICAgbWFya2VyKTtcbiAgICAgIH1cblxuICAgICAgLy8gVHJhbnNmb3JtIG91ciBDb25maWd1cmF0aW9uIE9iamVjdCBpbnRvIHRoZSBleHBlY3RlZFxuICAgICAgLy8gR29vZ2xlIEFQSSBmb3JtYXQuXG4gICAgICBsZXQgaWNvbiA9IHt9O1xuICAgICAgaWYgKHBpbkNvbmZpZ09iai5hbmNob3IpIHtcbiAgICAgICAgaWNvbi5hbmNob3IgPSBnb29nbGUubWFwcy5Qb2ludChwaW5Db25maWdPYmouYW5jaG9yLngsIHBpbkNvbmZpZ09iai5hbmNob3IueSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW5Db25maWdPYmouc2NhbGVkU2l6ZSkge1xuICAgICAgICBpY29uLnNjYWxlZFNpemUgPSBnb29nbGUubWFwcy5TaXplKHBpbkNvbmZpZ09iai5zY2FsZWRTaXplLncsIHBpbkNvbmZpZ09iai5zY2FsZWRTaXplLmgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluQ29uZmlnT2JqLnVybCkge1xuICAgICAgICBpY29uLnVybCA9IHBpbkNvbmZpZ09iai51cmw7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW5Db25maWdPYmouc3ZnKSB7XG4gICAgICAgIGljb24udXJsID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCAke2VuY29kZVVSSUNvbXBvbmVudChwaW5Db25maWdPYmouc3ZnKX1gO1xuICAgICAgfVxuXG4gICAgICBsZXQgbGFiZWw7XG4gICAgICBpZiAocGluQ29uZmlnT2JqLmxhYmVsKSB7XG4gICAgICAgIGxhYmVsID0gcGluQ29uZmlnT2JqLmxhYmVsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFiZWwgPSBtYXJrZXIubGFiZWwudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgLy8gTk9URShiaWxseSkgR29vZ2xlIG1hcHMgZG9lc24ndCBoYW5kbGUgZW1wdHkgaWNvbiBvYmplY3RzIG5pY2VseVxuICAgICAgLy8gTWFrZSBnb29nbGUgbWFwcyBoYXBweSBpZiBubyBzZXR0aW5ncyBmb3IgaWNvbiBhcmUgcHJvdmlkZWQ7XG4gICAgICBpZiAoT2JqZWN0LmtleXMoaWNvbikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGljb24gPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MucHVzaChcbiAgICAgICAgbmV3IEdvb2dsZU1hcE1hcmtlckNvbmZpZyh7XG4gICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIGxhdDogbWFya2VyLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG5nOiBtYXJrZXIubG9uZ2l0dWRlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpY29uOiBpY29uLFxuICAgICAgICAgIGxhYmVsOiBsYWJlbFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBnb29nbGVNYXBNYXJrZXJDb25maWdzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNYXBCb3hNYXBQcm92aWRlciAqL1xuXG5pbXBvcnQgTWFwUHJvdmlkZXIgZnJvbSAnLi9tYXBwcm92aWRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uLy4uL2RvbS9kb20nO1xuXG4vKiBnbG9iYWwgbWFwYm94Z2wgKi9cblxuLyoqXG4gKiBNYXBCb3hNYXBQcm92aWRlciBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiBhIE1hcFByb3ZpZGVyXG4gKiB0aGF0IGhhbmRsZXMgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIHRoaXJkIHBhcnR5IEFQSSB0byBleHBvc2UgbWFwcy5cbiAqIEBleHRlbmRzIE1hcFByb3ZpZGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcEJveE1hcFByb3ZpZGVyIGV4dGVuZHMgTWFwUHJvdmlkZXIge1xuICAvKipcbiAgICogTG9hZCB0aGUgZXh0ZXJuYWwgSlMgTGlicmFyeVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkxvYWQgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdG8gaW52b2tlIG9uY2UgdGhlIEpTIGlzIGxvYWRlZC5cbiAgICovXG4gIGxvYWRKUyAob25Mb2FkKSB7XG4gICAgbGV0IHNjcmlwdCA9IERPTS5jcmVhdGVFbCgnc2NyaXB0Jywge1xuICAgICAgaWQ6ICd5ZXh0LW1hcC1qcycsXG4gICAgICBvbmxvYWQ6ICgpID0+IHtcbiAgICAgICAgdGhpcy5faXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICBtYXBib3hnbC5hY2Nlc3NUb2tlbiA9IHRoaXMuX2FwaUtleTtcblxuICAgICAgICBpZiAodHlwZW9mIG9uTG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG9uTG9hZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9vbkxvYWRlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMuX29uTG9hZGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIHNyYzogJ2h0dHBzOi8vYXBpLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL3YwLjQ0LjEvbWFwYm94LWdsLmpzJ1xuICAgIH0pO1xuXG4gICAgbGV0IGNzcyA9IERPTS5jcmVhdGVFbCgnbGluaycsIHtcbiAgICAgIGlkOiAneWV4dC1tYXAtY3NzJyxcbiAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vYXBpLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL3YwLjQ0LjEvbWFwYm94LWdsLmNzcydcbiAgICB9KTtcblxuICAgIERPTS5hcHBlbmQoJ2JvZHknLCBjc3MpO1xuICAgIERPTS5hcHBlbmQoJ2JvZHknLCBzY3JpcHQpO1xuICB9XG5cbiAgZ2VuZXJhdGVTdGF0aWMgKG1hcERhdGEpIHtcbiAgICBsZXQgbWFwYm94TWFwTWFya2VyQ29uZmlncyA9IE1hcEJveE1hcmtlckNvbmZpZy5mcm9tKFxuICAgICAgbWFwRGF0YS5tYXBNYXJrZXJzLFxuICAgICAgdGhpcy5fcGluQ29uZmlnXG4gICAgKTtcblxuICAgIGxldCBjZW50ZXIgPSBtYXBEYXRhLm1hcENlbnRlcjtcbiAgICBsZXQgd2lkdGggPSB0aGlzLl93aWR0aCB8fCA2MDA7XG4gICAgbGV0IGhlaWdodCA9IHRoaXMuX2hlaWdodCB8fCAyMDA7XG4gICAgbGV0IHpvb20gPSB0aGlzLl96b29tIHx8IDk7XG5cbiAgICBsZXQgZW5jb2RlZE1hcmtlcnMgPSBNYXBCb3hNYXJrZXJDb25maWcuc2VyaWFsaXplKG1hcGJveE1hcE1hcmtlckNvbmZpZ3MpO1xuICAgIHJldHVybiBgPGltZyBzcmM9XCJodHRwczovL2FwaS5tYXBib3guY29tL3N0eWxlcy92MS9tYXBib3gvc3RyZWV0cy12MTEvc3RhdGljLyR7ZW5jb2RlZE1hcmtlcnN9LyR7Y2VudGVyLmxvbmdpdHVkZX0sJHtjZW50ZXIubGF0aXR1ZGV9LCR7em9vbX0vYXV0by8ke3dpZHRofXgke2hlaWdodH0/YWNjZXNzX3Rva2VuPSR7dGhpcy5fYXBpS2V5fVwiPmA7XG4gIH1cblxuICBpbml0IChlbCwgbWFwRGF0YSkge1xuICAgIGlmICgoIW1hcERhdGEgfHwgbWFwRGF0YS5tYXBNYXJrZXJzLmxlbmd0aCA8PSAwKSAmJiAhdGhpcy5fc2hvd0VtcHR5TWFwKSB7XG4gICAgICB0aGlzLl9tYXAgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRhaW5lciA9IERPTS5xdWVyeShlbCk7XG4gICAgRE9NLmNzcyhjb250YWluZXIsIHtcbiAgICAgIHdpZHRoOiB0aGlzLl93aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5faGVpZ2h0XG4gICAgfSk7XG5cbiAgICB0aGlzLl9tYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgem9vbTogdGhpcy5fem9vbSxcbiAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXY5JyxcbiAgICAgIGNlbnRlcjogdGhpcy5nZXRDZW50ZXJNYXJrZXIobWFwRGF0YSlcbiAgICB9KTtcblxuICAgIGlmIChtYXBEYXRhKSB7XG4gICAgICBjb25zdCBjb2xsYXBzZWRNYXJrZXJzID0gdGhpcy5fY29sbGFwc2VNYXJrZXJzKG1hcERhdGEubWFwTWFya2Vycyk7XG4gICAgICBjb25zdCBtYXBib3hNYXBNYXJrZXJDb25maWdzID0gTWFwQm94TWFya2VyQ29uZmlnLmZyb20oXG4gICAgICAgIGNvbGxhcHNlZE1hcmtlcnMsXG4gICAgICAgIHRoaXMuX3BpbkNvbmZpZyxcbiAgICAgICAgdGhpcy5fbWFwKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXBib3hNYXBNYXJrZXJDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB3cmFwcGVyID0gbWFwYm94TWFwTWFya2VyQ29uZmlnc1tpXS53cmFwcGVyO1xuICAgICAgICBsZXQgY29vcmRzID0gbmV3IG1hcGJveGdsLkxuZ0xhdChcbiAgICAgICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzW2ldLnBvc2l0aW9uLmxvbmdpdHVkZSxcbiAgICAgICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzW2ldLnBvc2l0aW9uLmxhdGl0dWRlKTtcbiAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBtYXBib3hnbC5NYXJrZXIod3JhcHBlcikuc2V0TG5nTGF0KGNvb3Jkcyk7XG4gICAgICAgIG1hcmtlci5hZGRUbyh0aGlzLl9tYXApO1xuICAgICAgICBpZiAodGhpcy5fb25QaW5DbGljaykge1xuICAgICAgICAgIG1hcmtlci5nZXRFbGVtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9vblBpbkNsaWNrKGNvbGxhcHNlZE1hcmtlcnNbaV0uaXRlbSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2VudGVyTWFya2VyIChtYXBEYXRhKSB7XG4gICAgcmV0dXJuIG1hcERhdGEgJiYgbWFwRGF0YS5tYXBDZW50ZXIgJiYgbWFwRGF0YS5tYXBDZW50ZXIubG9uZ2l0dWRlICYmIG1hcERhdGEubWFwQ2VudGVyLmxhdGl0dWRlXG4gICAgICA/IFttYXBEYXRhLm1hcENlbnRlci5sb25naXR1ZGUsIG1hcERhdGEubWFwQ2VudGVyLmxhdGl0dWRlXVxuICAgICAgOiB7IGxuZzogdGhpcy5fZGVmYXVsdFBvc2l0aW9uLmxuZywgbGF0OiB0aGlzLl9kZWZhdWx0UG9zaXRpb24ubGF0IH07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hcEJveE1hcmtlckNvbmZpZyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIG1hcGJveCBtYXAsIHRoYXQgdGhlIG1hcmtlciBpcyBhcHBlbmRlZCB0b1xuICAgICAqIEB0eXBlIHtNYXBCb3h9XG4gICAgICovXG4gICAgdGhpcy5tYXAgPSBvcHRzLm1hcCB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1hcmtlciAobGF0L2xuZylcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMucG9zaXRpb24gPSBvcHRzLnBvc2l0aW9uIHx8IHtcbiAgICAgIGxhdGl0dWRlOiB1bmRlZmluZWQsXG4gICAgICBsb25naXR1ZGU6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaHRtbCBlbGVtZW50IHRvIGJlIHVzZWQgYXMgdGhlIG1hcCBtYXJrZXJcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMud3JhcHBlciA9IG9wdHMud3JhcHBlciB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgb2YgdGhlIG1hcmtlciB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWwgPSBvcHRzLmxhYmVsIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB1cmwgb2YgdGhlIHBpbiBmb3IgdGhlIHN0YXRpYyBtYXBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc3RhdGljTWFwUGluID0gb3B0cy5zdGF0aWNNYXBQaW4gfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYW4gYXJyYXkgb2YgbWFya2VyIGNvbmZpZ3NcbiAgICogQHBhcmFtIHtNYXBCb3hNYXJrZXJDb25maWdbXX0gbWFwYm94TWFwTWFya2VyQ29uZmlnc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplIChtYXBib3hNYXBNYXJrZXJDb25maWdzKSB7XG4gICAgbGV0IHNlcmlhbGl6ZWRNYXJrZXJzID0gW107XG4gICAgbWFwYm94TWFwTWFya2VyQ29uZmlncy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIGlmIChtYXJrZXIuc3RhdGljTWFwUGluKSB7XG4gICAgICAgIHNlcmlhbGl6ZWRNYXJrZXJzLnB1c2goYHVybC0ke21hcmtlci5zdGF0aWNNYXBQaW59KCR7bWFya2VyLnBvc2l0aW9uLmxvbmdpdHVkZX0sJHttYXJrZXIucG9zaXRpb24ubGF0aXR1ZGV9KWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VyaWFsaXplZE1hcmtlcnMucHVzaChgcGluLXMtJHttYXJrZXIubGFiZWx9KCR7bWFya2VyLnBvc2l0aW9uLmxvbmdpdHVkZX0sJHttYXJrZXIucG9zaXRpb24ubGF0aXR1ZGV9KWApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZXJpYWxpemVkTWFya2Vycy5qb2luKCcsJyk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIHN0b3JhZ2UgZGF0YSBtb2RlbCBvZiBtYXJrZXJzIGludG8gR29vZ2xlQVBJTWFya2VyXG4gICAqIEBwYXJhbSB7TWFwQm94fSBBIHJlZmVyZW5jZSB0byB0aGUgZ29vZ2xlIG1hcCB0byBhcHBseSB0aGUgbWFya2VyIHRvXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IG1hcmtlcnMgVGhlIGRhdGEgb2YgdGhlIG1hcmtlclxuICAgKiBAcGFyYW0ge09iamVjdH0gcGluQ29uZmlnIFRoZSBjb25maWd1cmF0aW9uIHRvIGFwcGx5IHRvIHRoZSBtYXJrZXJcbiAgICogQHJldHVybnMge01hcEJveE1hcmtlckNvbmZpZ1tdfVxuICAgKi9cbiAgc3RhdGljIGZyb20gKG1hcmtlcnMsIHBpbkNvbmZpZywgbWFwKSB7XG4gICAgbGV0IG1hcGJveE1hcE1hcmtlckNvbmZpZ3MgPSBbXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobWFya2VycykpIHtcbiAgICAgIG1hcmtlcnMgPSBbbWFya2Vyc107XG4gICAgfVxuXG4gICAgbWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIC8vIFN1cHBvcnQgY29uZmlndXJhdGlvbiBhcyBhIGZ1bmN0aW9uXG4gICAgICBsZXQgcGluQ29uZmlnT2JqID0gcGluQ29uZmlnO1xuICAgICAgaWYgKHR5cGVvZiBwaW5Db25maWcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcGluQ29uZmlnT2JqID0gcGluQ29uZmlnKFxuICAgICAgICAgIG1hcmtlci5pdGVtLFxuICAgICAgICAgIE1hcFByb3ZpZGVyLkRFRkFVTFRfUElOX0NPTkZJRyxcbiAgICAgICAgICBtYXJrZXIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB3cmFwcGVyID0gcGluQ29uZmlnT2JqLndyYXBwZXIgPyBwaW5Db25maWdPYmoud3JhcHBlciA6IG51bGw7XG4gICAgICBjb25zdCBzdGF0aWNNYXBQaW4gPSBwaW5Db25maWdPYmouc3RhdGljTWFwUGluID8gcGluQ29uZmlnT2JqLnN0YXRpY01hcFBpbiA6IG51bGw7XG5cbiAgICAgIG1hcGJveE1hcE1hcmtlckNvbmZpZ3MucHVzaChcbiAgICAgICAgbmV3IE1hcEJveE1hcmtlckNvbmZpZyh7XG4gICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIGxhdGl0dWRlOiBtYXJrZXIubGF0aXR1ZGUsXG4gICAgICAgICAgICBsb25naXR1ZGU6IG1hcmtlci5sb25naXR1ZGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHdyYXBwZXI6IHdyYXBwZXIsXG4gICAgICAgICAgbGFiZWw6IG1hcmtlci5sYWJlbCxcbiAgICAgICAgICBzdGF0aWNNYXBQaW46IHN0YXRpY01hcFBpblxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtYXBib3hNYXBNYXJrZXJDb25maWdzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNYXBDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5pbXBvcnQgR29vZ2xlTWFwUHJvdmlkZXIgZnJvbSAnLi9wcm92aWRlcnMvZ29vZ2xlbWFwcHJvdmlkZXInO1xuaW1wb3J0IE1hcEJveE1hcFByb3ZpZGVyIGZyb20gJy4vcHJvdmlkZXJzL21hcGJveG1hcHByb3ZpZGVyJztcblxuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbmNvbnN0IFByb3ZpZGVyVHlwZXMgPSB7XG4gICdnb29nbGUnOiBHb29nbGVNYXBQcm92aWRlcixcbiAgJ21hcGJveCc6IE1hcEJveE1hcFByb3ZpZGVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIHRoaXMgY29tcG9uZW50IHRvIGxpc3RlbiB0byB0aGUgc3RvcmFnZSBiYXNlZCBvbiB0aGlzIGtleVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWxpYXNlZCB1c2VkIHRvIGRldGVybWluZSB0aGUgdHlwZSBvZiBtYXAgcHJvdmlkZXIgdG8gdXNlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9tYXBQcm92aWRlciA9IG9wdHMubWFwUHJvdmlkZXI7XG4gICAgaWYgKCF0aGlzLl9tYXBQcm92aWRlciB8fCAhKHRoaXMuX21hcFByb3ZpZGVyLnRvTG93ZXJDYXNlKCkgaW4gUHJvdmlkZXJUeXBlcykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWFwQ29tcG9uZW50OiBJbnZhbGlkIE1hcCBQcm92aWRlcjsgbXVzdCBiZSBgZ29vZ2xlYCBvciBgbWFwQm94YCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIGluZGljYXRpb24gb2Ygd2hldGhlciBvciBub3QgdG8gdXNlIGEgc3RhdGljIG9yIGR5bmFtaWMgbWFwXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5faXNTdGF0aWMgPSBvcHRzLmlzU3RhdGljIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gYW4gaW5zdGFuY2Ugb2YgdGhlIHtNYXBQcm92aWRlcn0gdGhhdCdzIGNvbnN0cnVjdGVkXG4gICAgICogQHR5cGUge01hcFByb3ZpZGVyfVxuICAgICAqL1xuICAgIHRoaXMuX21hcCA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTWFwJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9tYXAnO1xuICB9XG5cbiAgLy8gVE9ETyhiaWxseSkgTWFrZSBQcm92aWRlclR5cGVzIGEgZmFjdG9yeSBjbGFzc1xuICBnZXRQcm92aWRlckluc3RhbmNlICh0eXBlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm92aWRlclR5cGVzW3R5cGUudG9Mb3dlckNhc2UoKV0odGhpcy5fY29uZmlnKTtcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICB0aGlzLl9tYXAgPSB0aGlzLmdldFByb3ZpZGVySW5zdGFuY2UodGhpcy5fbWFwUHJvdmlkZXIpO1xuICAgIGxldCBtYXBEYXRhID0gdGhpcy5nZXRTdGF0ZSgnbWFwJyk7XG4gICAgaWYgKG1hcERhdGEgPT09IHVuZGVmaW5lZCAmJiB0aGlzLl9pc1N0YXRpYykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU3RhdGljKSB7XG4gICAgICAvLyBUT0RPKGJpbGx5KSBUaGUgZXhpc3RpbmcgdGVtcGxhdGUgc2hvdWxkIGp1c3QgdGFrZSBpbiB0aGUgbWFwIGBpbWdVUkxgIGFzIGRhdGFcbiAgICAgIC8vIEluc3RlYWQgb2Ygb3ZlcnJpZGluZyB0aGUgdGVtcGxhdGUgbGlrZSBzbywgYnV0IE5CRCBmb3Igbm93LlxuICAgICAgdGhpcy5zZXRUZW1wbGF0ZSh0aGlzLl9tYXAuZ2VuZXJhdGVTdGF0aWMobWFwRGF0YSkpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fbWFwLmxvYWRKUygpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgdGhpcy5fbWFwLm9uTG9hZGVkKCgpID0+IHtcbiAgICAgIHRoaXMuX21hcC5pbml0KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5nZXRTdGF0ZSgnbWFwJykpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShkYXRhLCB2YWwpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBSZXN1bHRzQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vZXZlbnRyZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9wZW9wbGVyZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgTWFwQ29tcG9uZW50IGZyb20gJy4uL21hcC9tYXBjb21wb25lbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcblxuY29uc3QgUmVzdWx0VHlwZSA9IHtcbiAgRVZFTlQ6ICdldmVudCcsXG4gIExPQ0FUSU9OOiAnbG9jYXRpb24nLFxuICBQRU9QTEU6ICdwZW9wbGUnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHRzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIHZlcnRpY2FsQ29uZmlnSWQgdXNlZCBmb3IgYW5hbHl0aWNzIGFuZCBwYXNzZWQgdG8gY2hpbGRyZW5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxDb25maWdJZCA9IGNvbmZpZy52ZXJ0aWNhbENvbmZpZ0lkO1xuXG4gICAgLyoqXG4gICAgICogaXNVbml2ZXJzYWwgaXMgc2V0IHRvIHRydWUgaWYgdGhpcyBjb21wb25lbnQgaXMgYWRkZWQgYnkgdGhlIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2lzVW5pdmVyc2FsID0gY29uZmlnLmlzVW5pdmVyc2FsIHx8IGZhbHNlO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFM7XG4gICAgdGhpcy5faXRlbUNvbmZpZyA9IHtcbiAgICAgIGdsb2JhbDoge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9LFxuICAgICAgW0V2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZV06IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIFtMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50LnR5cGVdOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH0sXG4gICAgICBbUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZV06IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoY29uZmlnLnJlbmRlckl0ZW0gPT09IHVuZGVmaW5lZCAmJiBjb25maWcuX3BhcmVudE9wdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uZmlnLnJlbmRlckl0ZW0gPSBjb25maWcuX3BhcmVudE9wdHMucmVuZGVySXRlbTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLml0ZW1UZW1wbGF0ZSA9PT0gdW5kZWZpbmVkICYmIGNvbmZpZy5fcGFyZW50T3B0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25maWcuaXRlbVRlbXBsYXRlID0gY29uZmlnLl9wYXJlbnRPcHRzLml0ZW1UZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmxpbWl0KSB7XG4gICAgICBjb25zdCBsaW1pdCA9IGNvbmZpZy5saW1pdDtcbiAgICAgIGlmICh0eXBlb2YgbGltaXQgIT09ICdudW1iZXInIHx8IGxpbWl0IDwgMSB8fCBsaW1pdCA+IDUwKSB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoJ1NlYXJjaCBMaW1pdCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNTAnLCAnVmVydGljYWxSZXN1bHRzJyk7XG4gICAgICB9XG4gICAgICB0aGlzLmNvcmUuc2V0U2VhcmNoTGltaXQobGltaXQpO1xuICAgIH1cblxuICAgIHRoaXMuY29uZmlndXJlSXRlbSh7XG4gICAgICByZW5kZXI6IGNvbmZpZy5yZW5kZXJJdGVtLFxuICAgICAgdGVtcGxhdGU6IGNvbmZpZy5pdGVtVGVtcGxhdGVcbiAgICB9KTtcbiAgfVxuXG4gIG1vdW50ICgpIHtcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5nZXRTdGF0ZSgpKS5sZW5ndGggPiAwKSB7XG4gICAgICBzdXBlci5tb3VudCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RhdGljIGdldCBkdXBsaWNhdGVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSwgdmFsKSB7XG4gICAgY29uc3Qgc2VhcmNoU3RhdGUgPSBkYXRhLnNlYXJjaFN0YXRlIHx8IFNlYXJjaFN0YXRlcy5QUkVfU0VBUkNIO1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHsgcmVzdWx0czogW10gfSwgZGF0YSwge1xuICAgICAgaXNQcmVTZWFyY2g6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuUFJFX1NFQVJDSCxcbiAgICAgIGlzU2VhcmNoTG9hZGluZzogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyxcbiAgICAgIGlzU2VhcmNoQ29tcGxldGU6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFLFxuICAgICAgaW5jbHVkZU1hcDogdGhpcy5fY29uZmlnLmluY2x1ZGVNYXAsXG4gICAgICBtYXBDb25maWc6IHRoaXMuX2NvbmZpZy5tYXBDb25maWcsXG4gICAgICBldmVudE9wdGlvbnM6IHRoaXMuZXZlbnRPcHRpb25zKClcbiAgICB9KSwgdmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoZWxwZXIgdG8gY29uc3RydWN0IHRoZSBldmVudE9wdGlvbnMgb2JqZWN0IGZvciB0aGUgdmlldyBhbGwgbGlua1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZXZlbnRPcHRpb25zICgpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdmVydGljYWxDb25maWdJZDogdGhpcy5fdmVydGljYWxDb25maWdJZFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1ZlcnRpY2FsUmVzdWx0cyc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvcmVzdWx0cyc7XG4gIH1cblxuICBjb25maWd1cmVJdGVtIChjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX2l0ZW1Db25maWcuZ2xvYmFsLnJlbmRlciA9IGNvbmZpZy5yZW5kZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb25maWcucmVuZGVyKSB7XG4gICAgICAgIHRoaXMuc2V0SXRlbVJlbmRlcihrZXksIGNvbmZpZy5yZW5kZXJba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9pdGVtQ29uZmlnLmdsb2JhbC50ZW1wbGF0ZSA9IGNvbmZpZy50ZW1wbGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbmZpZy50ZW1wbGF0ZSkge1xuICAgICAgICB0aGlzLnNldEl0ZW1UZW1wbGF0ZShrZXksIGNvbmZpZy50ZW1wbGF0ZVtrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRJdGVtVGVtcGxhdGUgKHR5cGUsIHRlbXBsYXRlKSB7XG4gICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KHR5cGUpO1xuICAgIHRoaXMuX2l0ZW1Db25maWdbY2xhenoudHlwZV0udGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHNldEl0ZW1SZW5kZXIgKHR5cGUsIHJlbmRlcikge1xuICAgIGxldCBjbGF6eiA9IHRoaXMuZ2V0SXRlbUNvbXBvbmVudCh0eXBlKTtcbiAgICB0aGlzLl9pdGVtQ29uZmlnW2NsYXp6LnR5cGVdLnJlbmRlciA9IHJlbmRlcjtcbiAgfVxuXG4gIGdldEl0ZW1Db21wb25lbnQgKHR5cGUpIHtcbiAgICBsZXQgY29tcCA9IFJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSZXN1bHRUeXBlLkVWRU5UOlxuICAgICAgICBjb21wID0gRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJlc3VsdFR5cGUuTE9DQVRJT046XG4gICAgICAgIGNvbXAgPSBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUmVzdWx0VHlwZS5QRU9QTEU6XG4gICAgICAgIGNvbXAgPSBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXA7XG4gIH1cblxuICBhZGRDaGlsZCAoZGF0YSwgdHlwZSwgb3B0cykge1xuICAgIC8vIFRPRE8oYmlsbHkpIFJlZmFjdG9yIHRoZSB3YXkgY29uZmlndXJhdGlvbiBhbmQgZGF0YSBmbG93c1xuICAgIC8vIHRocm91Z2ggdG9wIGxldmVsIGNvbXBvbmVudHMgdG8gY2hpbGQgY29tcG9uZW50cy5cbiAgICBpZiAodHlwZSA9PT0gUmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZSkge1xuICAgICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KGRhdGEudHlwZSk7XG4gICAgICBpZiAoY2xhenopIHtcbiAgICAgICAgdHlwZSA9IGNsYXp6LnR5cGU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBNYXBDb21wb25lbnQudHlwZSkge1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgbWFwOiBkYXRhXG4gICAgICB9O1xuICAgICAgY29uc3QgbmV3T3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZy5tYXBDb25maWcsIG9wdHMpO1xuICAgICAgcmV0dXJuIHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIG5ld09wdHMpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHRoZSBwcm9wZXIgaXRlbSByZW5kZXJzIHRvIHRoZSB0aGUgY29tcG9uZW50c1xuICAgIC8vIGhhdmUganVzdCBiZWVuIGNvbnN0cnVjdGVkLiBQcmlvcml0aXplIGdsb2JhbCBvdmVyIGluZGl2aWR1YWwgaXRlbXMuXG4gICAgbGV0IGNvbXAgPSBzdXBlci5hZGRDaGlsZChkYXRhLCB0eXBlLCBPYmplY3QuYXNzaWduKG9wdHMsIHtcbiAgICAgIHZlcnRpY2FsQ29uZmlnSWQ6IHRoaXMuX3ZlcnRpY2FsQ29uZmlnSWQsXG4gICAgICBpc1VuaXZlcnNhbDogdGhpcy5faXNVbml2ZXJzYWxcbiAgICB9KSk7XG4gICAgbGV0IGdsb2JhbENvbmZpZyA9IHRoaXMuX2l0ZW1Db25maWcuZ2xvYmFsO1xuICAgIGxldCBpdGVtQ29uZmlnID0gdGhpcy5faXRlbUNvbmZpZ1tjb21wLnR5cGVdO1xuICAgIGxldCBoYXNHbG9iYWxSZW5kZXIgPSB0eXBlb2YgZ2xvYmFsQ29uZmlnLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJztcbiAgICBsZXQgaGFzR2xvYmFsVGVtcGxhdGUgPSB0eXBlb2YgZ2xvYmFsQ29uZmlnLnRlbXBsYXRlID09PSAnc3RyaW5nJztcblxuICAgIGlmIChoYXNHbG9iYWxSZW5kZXIpIHtcbiAgICAgIGNvbXAuc2V0UmVuZGVyKGdsb2JhbENvbmZpZy5yZW5kZXIpO1xuICAgIH1cblxuICAgIGlmIChoYXNHbG9iYWxUZW1wbGF0ZSkge1xuICAgICAgY29tcC5zZXRUZW1wbGF0ZShnbG9iYWxDb25maWcudGVtcGxhdGUpO1xuICAgIH1cblxuICAgIGlmICghaXRlbUNvbmZpZykge1xuICAgICAgcmV0dXJuIGNvbXA7XG4gICAgfVxuXG4gICAgaWYgKCFoYXNHbG9iYWxSZW5kZXIgJiYgaXRlbUNvbmZpZy5yZW5kZXIpIHtcbiAgICAgIGNvbXAuc2V0UmVuZGVyKGl0ZW1Db25maWcucmVuZGVyKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB0ZW1wbGF0ZSBzcGVjaWZpYyBzaXR1YXRpb25cbiAgICBpZiAoIWhhc0dsb2JhbFRlbXBsYXRlICYmIGl0ZW1Db25maWcudGVtcGxhdGUpIHtcbiAgICAgIGNvbXAuc2V0VGVtcGxhdGUoaXRlbUNvbmZpZy50ZW1wbGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBjb21wO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50ICovXG5pbXBvcnQgUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNjb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBBbmFseXRpY3NFdmVudCBmcm9tICcuLi8uLi8uLi9jb3JlL2FuYWx5dGljcy9hbmFseXRpY3NldmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY29yZGlvblJlc3VsdHNDb21wb25lbnQgZXh0ZW5kcyBSZXN1bHRzQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIGJhc2Ugc2VsZWN0b3IgdG8gdXNlIHdoZW4gZmluZGluZyBET00gdGFyZ2V0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fc2VsZWN0b3JCYXNlID0gY29uZmlnLnNlbGVjdG9yQmFzZSB8fCAnLmpzLXl4dC1BY2NvcmRpb25SZXN1bHQnO1xuXG4gICAgLyoqXG4gICAgICogY29sbGFwc2VkIHN0YXRlIGNsYXNzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmNvbGxhcHNlZENsYXNzID0gY29uZmlnLmNvbGxhcHNlZENsYXNzIHx8ICdpcy1jb2xsYXBzZWQnO1xuXG4gICAgLyoqXG4gICAgICogdmVydGljYWwgY29uZmlnIGlkIGlzIHJlcXVpcmVkIGZvciBhbmFseXRpY3NcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy52ZXJ0aWNhbENvbmZpZ0lkID0gY29uZmlnLnZlcnRpY2FsQ29uZmlnSWQgfHwgY29uZmlnLl9wYXJlbnRPcHRzLnZlcnRpY2FsQ29uZmlnSWQgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiB0aGUgY29tcG9uZW50IHR5cGVcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnQWNjb3JkaW9uUmVzdWx0cyc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvcmVzdWx0c2FjY29yZGlvbic7XG4gIH1cblxuICAvKipcbiAgICogb3ZlcnJpZGVzIF9vbk1vdW50IHRvIGFkZCBiaW5kaW5ncyB0byBjaGFuZ2UgdGhlIGhlaWdodCBvbiBjbGlja1xuICAgKiBAcmV0dXJucyB7QWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudH1cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBfb25Nb3VudCAoKSB7XG4gICAgc3VwZXIuX29uTW91bnQoKTtcblxuICAgIGNvbnN0IGFjY29yZGlvbkVscyA9IERPTS5xdWVyeUFsbCh0aGlzLl9jb250YWluZXIsIHRoaXMuX3NlbGVjdG9yQmFzZSk7XG4gICAgYWNjb3JkaW9uRWxzLmZvckVhY2goKGFjY29yZGlvbkVsKSA9PiB7XG4gICAgICBjb25zdCB0b2dnbGVFbCA9IERPTS5xdWVyeShhY2NvcmRpb25FbCwgdGhpcy50b2dnbGVTZWxlY3RvcigpKTtcbiAgICAgIGNvbnN0IGNvbnRlbnRFbCA9IERPTS5xdWVyeShhY2NvcmRpb25FbCwgdGhpcy5ib2R5U2VsZWN0b3IoKSk7XG4gICAgICB0aGlzLmNoYW5nZUhlaWdodChjb250ZW50RWwsIGFjY29yZGlvbkVsKTtcbiAgICAgIHRvZ2dsZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrKGFjY29yZGlvbkVsLCB0b2dnbGVFbCwgY29udGVudEVsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBtb2RpZmllcjogdGhpcy52ZXJ0aWNhbENvbmZpZ0lkXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNsaWNrIGhhbmRsZXIgZm9yIHRoZSBhY2NvcmRpb24gdG9nZ2xlIGJ1dHRvblxuICAgKiBAcGFyYW0gd3JhcHBlckVsIHtIVE1MRWxlbWVudH0gdGhlIHRvZ2dsZSBjb250YWluZXJcbiAgICogQHBhcmFtIHRvZ2dsZUVsIHtIVE1MRWxlbWVudH0gdGhlIGJ1dHRvblxuICAgKiBAcGFyYW0gY29udGVudEVsIHtIVE1MRWxlbWVudH0gdGhlIHRvZ2dsZSB0YXJnZXRcbiAgICovXG4gIGhhbmRsZUNsaWNrICh3cmFwcGVyRWwsIHRvZ2dsZUVsLCBjb250ZW50RWwpIHtcbiAgICBjb25zdCBldmVudCA9IG5ldyBBbmFseXRpY3NFdmVudCh0aGlzLmlzQ29sbGFwc2VkKHdyYXBwZXJFbCkgPyAnUk9XX0VYUEFORCcgOiAnUk9XX0NPTExBUFNFJylcbiAgICAgIC5hZGRPcHRpb25zKHtcbiAgICAgICAgdmVydGljYWxDb25maWdJZDogdGhpcy52ZXJ0aWNhbENvbmZpZ0lkLFxuICAgICAgICBlbnRpdHlJZDogdG9nZ2xlRWwuZGF0YXNldC5lbnRpdHlJZFxuICAgICAgfSk7XG4gICAgd3JhcHBlckVsLmNsYXNzTGlzdC50b2dnbGUodGhpcy5jb2xsYXBzZWRDbGFzcyk7XG4gICAgdGhpcy5jaGFuZ2VIZWlnaHQoY29udGVudEVsLCB3cmFwcGVyRWwpO1xuICAgIHRvZ2dsZUVsLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRoaXMuaXNDb2xsYXBzZWQod3JhcHBlckVsKSA/ICdmYWxzZScgOiAndHJ1ZScpO1xuICAgIHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIucmVwb3J0KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgaXMgY3VycmVudGx5IGNvbGxhcHNlZFxuICAgKiBAcGFyYW0gd3JhcHBlckVsIHtIVE1MRWxlbWVudH0gdGhlIHRvZ2dsZSBjb250YWluZXJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc0NvbGxhcHNlZCAod3JhcHBlckVsKSB7XG4gICAgaWYgKCF3cmFwcGVyRWwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JhcHBlckVsLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNvbGxhcHNlZENsYXNzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0b2dnbGVzIHRoZSBoZWlnaHQgYmV0d2VlbiAwIGFuZCB0aGUgY29udGVudCBoZWlnaHQgZm9yIHNtb290aCBhbmltYXRpb25cbiAgICogQHBhcmFtIHRhcmdldEVsIHtIVE1MRWxlbWVudH1cbiAgICogQHBhcmFtIHdyYXBwZXJFbCB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBjaGFuZ2VIZWlnaHQgKHRhcmdldEVsLCB3cmFwcGVyRWwpIHtcbiAgICB0YXJnZXRFbC5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmlzQ29sbGFwc2VkKHdyYXBwZXJFbCkgPyAwIDogdGFyZ2V0RWwuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBoZWxwZXIgZm9yIGNvbXBvc2luZyBjaGlsZCBlbGVtZW50IHNlbGVjdG9yc1xuICAgKiBAcGFyYW0gY2hpbGQge3N0cmluZ31cbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGJ1aWxkU2VsZWN0b3IgKGNoaWxkKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuX3NlbGVjdG9yQmFzZX0ke2NoaWxkfWA7XG4gIH1cblxuICAvKipcbiAgICogaGVscGVyIGZvciB0aGUgdG9nZ2xlIGJ1dHRvbiBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgdG9nZ2xlU2VsZWN0b3IgKCkge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkU2VsZWN0b3IoJy10b2dnbGUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoZWxwZXIgZm9yIHRoZSBjb250ZW50IGVsZW1lbnQgc2VsZWN0b3JcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGJvZHlTZWxlY3RvciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRTZWxlY3RvcignLWJvZHknKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3NlYXJjaHN0YXRlcyc7XG5pbXBvcnQgQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL2FjY29yZGlvbnJlc3VsdHNjb21wb25lbnQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTO1xuICAgIHRoaXMuX2xpbWl0ID0gb3B0cy5saW1pdCB8fCAxMDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdVbml2ZXJzYWxSZXN1bHRzJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy91bml2ZXJzYWxyZXN1bHRzJztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaW5pdCAob3B0cykge1xuICAgIHN1cGVyLmluaXQob3B0cyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSwgdmFsKSB7XG4gICAgY29uc3Qgc2VhcmNoU3RhdGUgPSBkYXRhLnNlYXJjaFN0YXRlIHx8IFNlYXJjaFN0YXRlcy5QUkVfU0VBUkNIO1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHsgc2VjdGlvbnM6IFtdIH0sIGRhdGEsIHtcbiAgICAgIGlzUHJlU2VhcmNoOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlBSRV9TRUFSQ0gsXG4gICAgICBpc1NlYXJjaExvYWRpbmc6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0xPQURJTkcsXG4gICAgICBpc1NlYXJjaENvbXBsZXRlOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURVxuICAgIH0pLCB2YWwpO1xuICB9XG5cbiAgYWRkQ2hpbGQgKGRhdGEgPSB7fSwgdHlwZSkge1xuICAgIGxldCBvcHRzID0gdGhpcy5nZXRDaGlsZENvbmZpZyhbZGF0YVsndmVydGljYWxDb25maWdJZCddXSk7XG4gICAgaWYgKG9wdHMudXNlQWNjb3JkaW9uID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gc3VwZXIuYWRkQ2hpbGQoZGF0YSwgQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudC50eXBlLCBvcHRzKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIG9wdHMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb25maWcgKGNvbmZpZ0lkKSB7XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZyA9IHtcbiAgICAgIHZlcnRpY2FsQ29uZmlnSWQ6IGNvbmZpZ0lkLFxuICAgICAgaXNVbml2ZXJzYWw6IHRydWVcbiAgICB9O1xuICAgIGxldCBjb25maWcgPSB0aGlzLl9jb25maWcuY29uZmlnO1xuICAgIGlmIChjb25maWcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRDb25maWc7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGRlZmF1bHRDb25maWcsIHRoaXMuX2NvbmZpZ1snY29uZmlnJ11bY29uZmlnSWRdIHx8IHRoaXMuX2NvbmZpZ1snY29uZmlnJ10pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFF1ZXN0aW9uU3VibWlzc2lvbiBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9xdWVzdGlvbnN1Ym1pc3Npb24nO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBBbmFseXRpY3NFdmVudCBmcm9tICcuLi8uLi8uLi9jb3JlL2FuYWx5dGljcy9hbmFseXRpY3NldmVudCc7XG5cbi8qKlxuICogQ29uZmlndXJhYmxlIG9wdGlvbnMgZm9yIHRoZSBjb21wb25lbnRcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmNvbnN0IERFRkFVTFRfQ09ORklHID0ge1xuICAvKipcbiAgICogVGhlIGVudGl0eSBpZGVudGlmaWVyIHRoYXQgdGhlIHF1ZXN0aW9uIGlzIGFzc29jaWF0ZWQgd2l0aC5cbiAgICogVGhpcyBpcyB0eXBpY2FsbHkgYW4gb3JnYW5pemF0aW9uIG9iamVjdFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgJ2VudGl0eUlkJzogbnVsbCxcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgbGFuZ3VhZ2Ugb2YgdGhlIHF1ZXN0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICAnbGFuZ3VhZ2UnOiAnRU4nLFxuXG4gIC8qKlxuICAgKiBUaGUgbWFpbiBDU1Mgc2VsZWN0b3IgdXNlZCB0byByZWZlcmVuY2UgdGhlIGZvcm0gZm9yIHRoZSBjb21wb25lbnQuXG4gICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgKi9cbiAgJ2Zvcm1TZWxlY3Rvcic6ICdmb3JtJyxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgbGFiZWwgdG8gdXNlIGZvciB0aGUgZS1tYWlsIGFkZHJlc3MgaW5wdXRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICdlbWFpbExhYmVsJzogJ0VtYWlsIEFkZHJlc3M6JyxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgbGFiZWwgdG8gdXNlIGZvciB0aGUgbmFtZSBpbnB1dFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgJ25hbWVMYWJlbCc6ICdOYW1lOicsXG5cbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIGxhYmVsIHRvIHVzZSBmb3IgdGhlIHF1ZXN0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICAncXVlc3Rpb25MYWJlbCc6ICdXaGF0IGlzIHlvdXIgcXVlc3Rpb24/JyxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgbGFiZWwgdG8gdXNlIGZvciB0aGUgUHJpdmFjeSBQb2xpY3lcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICdwcml2YWN5UG9saWN5TGFiZWwnOiAnSSBhZ3JlZSB0byBvdXIgUHJpdmFjeSBQb2xpY3k6JyxcblxuICAvKipcbiAgICogVGhlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIFN1Ym1pdCBidXR0b25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICdidXR0b25MYWJlbCc6ICdTdWJtaXQnXG59O1xuXG4vKipcbiAqIFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCBpcyBhIGNvbXBvbmVudCB0aGF0IGNyZWF0ZXMgYSBmb3JtXG4gKiB0aGF0cyBkaXNwbGF5ZWQgd2hlbmV2ZXIgYSBxdWVyeSBpcyBydW4uIEl0IGVuYWJsZXMgdGhlIHVzZXJcbiAqIHRvIHN1Ym1pdCBxdWVzdGlvbnMgdGhhdCB0aGV5IGNhbnQgZmluZCB0aGUgYW5zd2VyIGZvci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9DT05GSUcsIGNvbmZpZykpO1xuXG4gICAgLyoqXG4gICAgICogUmVmZXJlbmNlIHRvIHRoZSBzdG9yYWdlIG1vZGVsXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuUVVFU1RJT05fU1VCTUlTU0lPTjtcblxuICAgIC8qKlxuICAgICAqIE5PVEUoYmlsbHkpIGlmIHRoaXMgaXMgYSBwYXR0ZXJuIHdlIHdhbnQgdG8gZm9sbG93IGZvciBjb25maWd1cmF0aW9uXG4gICAgICogd2Ugc2hvdWxkIGJha2UgaXQgaW50byB0aGUgY29yZSBjbGFzcy5cbiAgICAgKi9cbiAgICB0aGlzLnZhbGlkYXRlQ29uZmlnKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3F1ZXN0aW9ucy9xdWVzdGlvbnN1Ym1pc3Npb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwdWJsaWMgaW50ZXJmYWNlIGFsaWFzIGZvciB0aGUgY29tcG9uZW50XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1FBU3VibWlzc2lvbic7XG4gIH1cblxuICAvKipcbiAgICogdmFsaWRhdGlvbkNvbmZpZyBjb250YWlucyBhIGJ1bmNoIG9mIHJ1bGVzXG4gICAqIHRoYXQgYXJlIHVzZWQgdG8gdmFsaWRhdGUgYWdpbnN0IGNvbmZpZ3VyYXRpb24gcHJvdmlkZWQgYnkgdGhlIHVzZXJcbiAgICovXG4gIHZhbGlkYXRlQ29uZmlnICgpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmVudGl0eUlkID09PSBudWxsIHx8XG4gICAgICAgIHR5cGVvZiB0aGlzLl9jb25maWcuZW50aXR5SWQgIT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICAnYGVudGl0eUlkYCBpcyBhIHJlcXVpcmVkIGNvbmZpZ3VyYXRpb24gb3B0aW9uIGZvciBRdWVzdGlvbiBTdWJtaXNzaW9uJyxcbiAgICAgICAgJ1F1ZXN0aW9uU3VibWlzc2lvbicpO1xuICAgIH1cbiAgfVxuXG4gIGJlZm9yZU1vdW50ICgpIHtcbiAgICAvLyBBdm9pZCBtb3VudGluZyB0aGUgY29tcG9uZW50IGlmIHRoZXJlcyBubyBkYXRhXG4gICAgLy8gTm90ZSwgMSBiZWNhdXNlIGBjb25maWdgIGlzIGFsd2F5cyBwYXJ0IG9mIHRoZSBzdGF0ZS5cbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5nZXRTdGF0ZSgpKS5sZW5ndGggPiAxO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgbGV0IGZvcm1FbCA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2NvbmZpZy5mb3JtU2VsZWN0b3IpO1xuICAgIGlmIChmb3JtRWwgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmJpbmRBbmFseXRpY3MoZm9ybUVsKTtcbiAgICB0aGlzLmJpbmRGb3JtU3VibWl0KGZvcm1FbCk7XG4gIH1cblxuICAvKipcbiAgICogYmluZEFuYWx5dGljcyB3aWxsIHdpcmUgdXAgRE9NIGV2ZW50IGhvb2tzIHRvIHNlcnZlcnNpZGUgcmVwb3J0aW5nXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1FbFxuICAgKi9cbiAgYmluZEFuYWx5dGljcyAoZm9ybUVsKSB7XG4gICAgaWYgKHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBxdWVzdGlvblRleHRFbCA9IERPTS5xdWVyeShmb3JtRWwsICcuanMtcXVlc3Rpb24tdGV4dCcpO1xuICAgIERPTS5vbihxdWVzdGlvblRleHRFbCwgJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlci5yZXBvcnQobmV3IEFuYWx5dGljc0V2ZW50KCdRVUVTVElPTl9GT0NVUycpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBiaW5kRm9ybVN1Ym1pdCBoYW5kbGVzIHN1Ym1pdHRpbmcgdGhlIHF1ZXN0aW9uIHRvIHRoZSBzZXJ2ZXIuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1FbFxuICAgKi9cbiAgYmluZEZvcm1TdWJtaXQgKGZvcm1FbCkge1xuICAgIERPTS5vbihmb3JtRWwsICdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gVE9ETyhiaWxseSkgd2UgcHJvYmFibHkgd2FudCB0byBkaXNhYmxlIHRoZSBmb3JtIGZyb20gYmVpbmcgc3VibWl0dGVkIHR3aWNlXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IHRoaXMucGFyc2UoZm9ybUVsKTtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMudmFsaWRhdGVSZXF1aXJlZChmb3JtRGF0YSk7XG4gICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKG5ldyBRdWVzdGlvblN1Ym1pc3Npb24oZm9ybURhdGEsIGVycm9ycykpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvcmUuc3VibWl0UXVlc3Rpb24oe1xuICAgICAgICAnZW50aXR5SWQnOiB0aGlzLl9jb25maWcuZW50aXR5SWQsXG4gICAgICAgICdxdWVzdGlvbkxhbmd1YWdlJzogdGhpcy5fY29uZmlnLmxhbmd1YWdlLFxuICAgICAgICAnc2l0ZSc6ICdGSVJTVF9QQVJUWScsXG4gICAgICAgICduYW1lJzogZm9ybURhdGEubmFtZSxcbiAgICAgICAgJ2VtYWlsJzogZm9ybURhdGEuZW1haWwsXG4gICAgICAgICdxdWVzdGlvblRleHQnOiBmb3JtRGF0YS5xdWVzdGlvblRleHQsXG4gICAgICAgICdxdWVzdGlvbkRlc2NyaXB0aW9uJzogZm9ybURhdGEucXVlc3Rpb25EZXNjcmlwdGlvblxuICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgbmV3IFF1ZXN0aW9uU3VibWlzc2lvbihmb3JtRGF0YSwge1xuICAgICAgICAgICAgICAnbmV0d29yayc6ICdUaGVyZSB3YXMgYSBwcm9ibGVtIHN1Ym1pdHRpbmcgeW91ciBxdWVzdGlvbi4gUGxlYXNlIHRyeSBhZ2Fpbi4nXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRha2VzIHRoZSBmb3JtLCBhbmQgYnVpbGRzIGEgb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgaW5wdXQgbmFtZXNcbiAgICogYW5kIHRleHQgZmllbGRzLlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtRWxcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHBhcnNlIChmb3JtRWwpIHtcbiAgICBjb25zdCBpbnB1dEZpZWxkcyA9IERPTS5xdWVyeUFsbChmb3JtRWwsICcuanMtcXVlc3Rpb24tZmllbGQnKTtcbiAgICBpZiAoIWlucHV0RmllbGRzIHx8IGlucHV0RmllbGRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGxldCBvYmogPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0RmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdmFsID0gaW5wdXRGaWVsZHNbaV0udmFsdWU7XG4gICAgICBpZiAoaW5wdXRGaWVsZHNbaV0udHlwZSA9PT0gJ2NoZWNrYm94JyAmJiB2YWwgPT09ICd0cnVlJykge1xuICAgICAgICB2YWwgPSB0cnVlO1xuICAgICAgfVxuICAgICAgb2JqW2lucHV0RmllbGRzW2ldLm5hbWVdID0gdmFsO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIHRoZSByZXF1aXJlZCBmaWVsZHMgKG9yIHJ1bGVzKSBmb3IgdGhlIGZvcm0gZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gZm9ybURhdGFcbiAgICogQHJldHVybnMge09iamVjdHxib29sZWFufSBlcnJvcnMgb2JqZWN0IGlmIGFueSBlcnJvcnMgZm91bmRcbiAgICovXG4gIHZhbGlkYXRlUmVxdWlyZWQgKGZvcm1EYXRhKSB7XG4gICAgbGV0IGVycm9ycyA9IHt9O1xuICAgIGlmICghZm9ybURhdGEuZW1haWwgfHwgdHlwZW9mIGZvcm1EYXRhLmVtYWlsICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3JzWydlbWFpbCddID0gJ01pc3NpbmcgZW1haWwgYWRkcmVzcyEnO1xuICAgIH1cblxuICAgIGlmICghZm9ybURhdGEucHJpdmFjeVBvbGljeSB8fCBmb3JtRGF0YS5wcml2YWN5UG9saWN5ICE9PSB0cnVlKSB7XG4gICAgICBlcnJvcnNbJ3ByaXZhY3lQb2xpY3knXSA9ICdBcHByb3Zpbmcgb3VyIHByaXZhY3kgcG9saWN5IHRlcm1zIGlzIHJlcXVpcmVkISc7XG4gICAgfVxuXG4gICAgaWYgKCFmb3JtRGF0YS5xdWVzdGlvblRleHQgfHwgdHlwZW9mIGZvcm1EYXRhLnF1ZXN0aW9uVGV4dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9yc1sncXVlc3Rpb25UZXh0J10gPSAnUXVlc3Rpb24gdGV4dCBpcyByZXF1aXJlZCEnO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA+IDAgPyBlcnJvcnMgOiBudWxsO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTVkdJY29uIHtcbiAgLyoqXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICogQHBhcmFtIGNvbmZpZy5uYW1lXG4gICAqIEBwYXJhbSBjb25maWcucGF0aFxuICAgKiBAcGFyYW0gY29uZmlnLmNvbXBsZXhDb250ZW50c1xuICAgKiBAcGFyYW0gY29uZmlnLnZpZXdCb3hcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgLyoqXG4gICAgICogdGhlIG5hbWUgb2YgdGhlIGljb25cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSBjb25maWcubmFtZTtcbiAgICAvKipcbiAgICAgKiBhbiBzdmcgcGF0aCBkZWZpbml0aW9uXG4gICAgICovXG4gICAgdGhpcy5wYXRoID0gY29uZmlnLnBhdGg7XG4gICAgLyoqXG4gICAgICogaWYgbm90IHVzaW5nIGEgcGF0aCwgYSB0aGUgbWFya3VwIGZvciBhIGNvbXBsZXggU1ZHXG4gICAgICovXG4gICAgdGhpcy5jb21wbGV4Q29udGVudHMgPSBjb25maWcuY29tcGxleENvbnRlbnRzO1xuICAgIC8qKlxuICAgICAqIHRoZSB2aWV3IGJveCBkZWZpbml0aW9uLCBkZWZhdWx0cyB0byAyNHgyNFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy52aWV3Qm94ID0gY29uZmlnLnZpZXdCb3ggfHwgJzAgMCAyNCAyNCc7XG4gICAgLyoqXG4gICAgICogYWN0dWFsIGNvbnRlbnRzIHVzZWRcbiAgICAgKi9cbiAgICB0aGlzLmNvbnRlbnRzID0gdGhpcy5wYXRoRGVmaW5pdGlvbigpO1xuICB9XG5cbiAgcGF0aERlZmluaXRpb24gKCkge1xuICAgIGlmICh0aGlzLmNvbXBsZXhDb250ZW50cykge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGxleENvbnRlbnRzO1xuICAgIH1cblxuICAgIHJldHVybiBgPHBhdGggZD1cIiR7dGhpcy5wYXRofVwiPjwvcGF0aD5gO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIHN2ZyBtYXJrdXBcbiAgICovXG4gIG1hcmt1cCAoKSB7XG4gICAgcmV0dXJuIGA8c3ZnIHZpZXdCb3g9XCIke3RoaXMudmlld0JveH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JHt0aGlzLmNvbnRlbnRzfTwvc3ZnPmA7XG4gIH1cbn1cbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICd0aHVtYicsXG4gIHZpZXdCb3g6ICcwIDAgMjQgMjInLFxuICBwYXRoOiAnTTE1LjI3MyAxSDUuNDU1Yy0uOTA2IDAtMS42OC41NS0yLjAwOCAxLjM0MkwuMTUzIDEwLjA5N0EyLjE5IDIuMTkgMCAwMDAgMTAuOXYyLjJjMCAxLjIxLjk4MiAyLjIgMi4xODIgMi4yaDYuODgzTDguMDMgMjAuMzI3bC0uMDMzLjM1MmMwIC40NTEuMTg2Ljg2OS40OCAxLjE2Nkw5LjYzMyAyM2w3LjE3OC03LjI0OWEyLjE2IDIuMTYgMCAwMC42NDQtMS41NTF2LTExYzAtMS4yMS0uOTgyLTIuMi0yLjE4Mi0yLjJ6bTAgMTMuMmwtNC43MzUgNC43NzRMMTEuNzUgMTMuMUgyLjE4MnYtMi4ybDMuMjczLTcuN2g5LjgxOHYxMXpNMTkuNjM2IDFIMjR2MTMuMmgtNC4zNjRWMXonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdyZWNlaXB0JyxcbiAgcGF0aDogJ00xNC42MDYgOS41Yy0uNjcxLS41MTUtMS41OTEtLjgzMy0yLjYwNi0uODMzIDEuMDE1IDAgMS45MzUuMzE4IDIuNjA2LjgzM3ptLTcuOTg1IDBIMS42NTVBMS42NiAxLjY2IDAgMDEwIDcuODMzVjMuNjY3QzAgMi43NDcuNzQxIDIgMS42NTUgMmgyMC42OUExLjY2IDEuNjYgMCAwMTI0IDMuNjY3djQuMTY2QTEuNjYgMS42NiAwIDAxMjIuMzQ1IDkuNWgtNC45NjZWMjJINi42MjFWOS41aDIuNzczSDYuNjJ6bTEwLjc1OC0xLjY2N2g0Ljk2NlYzLjY2N0gxLjY1NXY0LjE2Nmg0Ljk2NnYtMi41aDEwLjc1OHYyLjV6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncGFudGhlb24nLFxuICBwYXRoOiAnTTkuOTQ3IDE2LjU5OGguMjUyVjkuNDEyaC0uMjUyYS40MzIuNDMyIDAgMDEtLjIzLS4wNjVjLS4wNy0uMDQzLS4xMDYtLjA5My0uMTA2LS4xNUw5LjE1IDcuODJ2LS4xNWMwLS4wNDQuMDI4LS4wOC4wODQtLjEwOWEuNjkxLjY5MSAwIDAxLjEwNS0uMDg2LjI1NC4yNTQgMCAwMS4xNDYtLjA0M0gxMy42Yy4wNTYgMCAuMTA0LjAxNS4xNDYuMDQzLjA0Mi4wMy4wOTEuMDU4LjE0Ny4wODZhLjI3MS4yNzEgMCAwMS4wNjMuMTA4Yy4wMTQuMDQzLjAwNy4wOTMtLjAyLjE1bC0uNDIgMS4zNzhhLjM3NC4zNzQgMCAwMS0uMTQ3LjE1LjM3LjM3IDAgMDEtLjE5LjA2NWgtLjI1MXY3LjE4NmguMjUyYS4zNy4zNyAwIDAxLjE4OS4wNjVjLjA3LjA0My4xMTkuMDkzLjE0Ny4xNWwuNDIgMS4zNzhjLjAyNy4wMjguMDM0LjA3MS4wMi4xMjlhLjI3NS4yNzUgMCAwMS0uMDYzLjEyOSAxLjM2NCAxLjM2NCAwIDAwLS4xNDcuMDg2LjI1NC4yNTQgMCAwMS0uMTQ2LjA0M0g5LjQ4NWEuMjU0LjI1NCAwIDAxLS4xNDYtLjA0My42OTEuNjkxIDAgMDEtLjEwNS0uMDg2Yy0uMDU2LS4wMjktLjA4NC0uMDcyLS4wODQtLjEzdi0uMTI4bC40NjEtMS4zNzdjMC0uMDU4LjAzNS0uMTA4LjEwNS0uMTUxYS40MzIuNDMyIDAgMDEuMjMxLS4wNjV6bTUuNzkyIDBoLjI1MlY5LjQxMmgtLjI1MmEuNDMyLjQzMiAwIDAxLS4yMy0uMDY1LjM3NC4zNzQgMCAwMS0uMTQ4LS4xNWwtLjQyLTEuMzc3Yy0uMDI3LS4wMjktLjAzNC0uMDcyLS4wMi0uMTNhLjI3NS4yNzUgMCAwMS4wNjMtLjEyOWMuMDU2LS4wMjguMTA1LS4wNTcuMTQ2LS4wODZhLjI1NC4yNTQgMCAwMS4xNDctLjA0M2g0LjExNGMuMDU1IDAgLjEwNC4wMTUuMTQ2LjA0M2EuNjkxLjY5MSAwIDAxLjEwNS4wODZjLjA1Ni4wMy4wODQuMDcyLjA4NC4xM3YuMTI5bC0uNDIgMS4zNzdhLjM3NC4zNzQgMCAwMS0uMTQ2LjE1LjQzMi40MzIgMCAwMS0uMjMxLjA2NWgtLjIxdjcuMTg2aC4yMWEuNDMuNDMgMCAwMS4yMy4wNjVjLjA3LjA0My4xMi4wOTMuMTQ4LjE1bC40MiAxLjM3OHYuMTVjMCAuMDQzLS4wMjkuMDgtLjA4NS4xMDhhLjY5MS42OTEgMCAwMS0uMTA1LjA4Ni4yNTQuMjU0IDAgMDEtLjE0Ni4wNDNoLTQuMTE0YS4yNTQuMjU0IDAgMDEtLjE0Ny0uMDQzIDEuMzY0IDEuMzY0IDAgMDAtLjE0Ni0uMDg2LjI3MS4yNzEgMCAwMS0uMDYzLS4xMDhjLS4wMTQtLjA0My0uMDA3LS4wOTMuMDItLjE1bC40Mi0xLjM3N2EuMzc0LjM3NCAwIDAxLjE0Ny0uMTUxLjQzMi40MzIgMCAwMS4yMzEtLjA2NXptLTExLjc5NC0uMDg2aC4yNTJWOS40OThoLS4yNTJhLjMzNC4zMzQgMCAwMS0uMjEtLjA2NS4zODYuMzg2IDAgMDEtLjEyNi0uMTkzbC0uNDItMS4zNzdhLjI0OC4yNDggMCAwMS0uMDItLjE3Mi44NTQuODU0IDAgMDEuMDYzLS4xNzNjLjAyOC0uMDU3LjA3LS4xLjEyNi0uMTI5YS4zNjUuMzY1IDAgMDEuMTY4LS4wNDNoNC4wN2MuMDU3IDAgLjExMy4wMTUuMTY5LjA0M2EuMjc4LjI3OCAwIDAxLjEyNi4xMy44NTQuODU0IDAgMDEuMDYyLjE3Mi4yNDguMjQ4IDAgMDEtLjAyLjE3MmwtLjQyIDEuMzc3YS4zODYuMzg2IDAgMDEtLjEyNi4xOTMuMzM0LjMzNCAwIDAxLS4yMS4wNjVoLS4yMXY3LjAxNGguMjFjLjA4NCAwIC4xNTQuMDI5LjIxLjA4NmEuNjczLjY3MyAwIDAxLjEyNi4xNzJsLjQyIDEuMzc4YS4yNDguMjQ4IDAgMDEuMDIuMTcyLjg1NC44NTQgMCAwMS0uMDYyLjE3Mi4yNzguMjc4IDAgMDEtLjEyNi4xMjkuMzY1LjM2NSAwIDAxLS4xNjguMDQzSDMuNTI2YS4zNjUuMzY1IDAgMDEtLjE2OC0uMDQzLjI3OC4yNzggMCAwMS0uMTI2LS4xMy44NTQuODU0IDAgMDEtLjA2My0uMTcxLjI0OC4yNDggMCAwMS4wMi0uMTcybC40Mi0xLjM3OGEuNjczLjY3MyAwIDAxLjEyNi0uMTcyLjI4MS4yODEgMCAwMS4yMS0uMDg2ek0xLjc2MyA2LjY1OGEuNzE3LjcxNyAwIDAxLS41MDQtLjE5NC42NDQuNjQ0IDAgMDEtLjIxLS40OTV2LS40M2EuNzMuNzMgMCAwMS4xMDUtLjM4Ny42OC42OCAwIDAxLjI3My0uMjU5QzQuMzA5IDMuNDAyIDYuNTQgMi4yNzYgOC4xMjEgMS41MTUgOS43MDIuNzU1IDEwLjQ5My4zNjEgMTAuNDkzLjMzMmMuNTMxLS4yNTguOTcyLS4zNjYgMS4zMjItLjMyMy4zNS4wNDMuNzM0LjE2NSAxLjE1NC4zNjZsOC4zMSA0LjUxOGMuMTQuMDU4LjI0NS4xNDQuMzE1LjI1OWEuNzMuNzMgMCAwMS4xMDUuMzg3di40M2MwIC4yMDEtLjA3LjM2Ni0uMjEuNDk1YS43MTcuNzE3IDAgMDEtLjUwNC4xOTRIMS43NjN6bS0uNzE0IDEzLjM0YS41NC41NCAwIDAxLjE2OC0uMzg3LjUxNi41MTYgMCAwMS4zNzgtLjE3MmgxOS42NDJjLjE2OCAwIC4zMDguMDU3LjQyLjE3MmEuNTQxLjU0MSAwIDAxLjE2OC4zODd2LjgxOGEuNTIyLjUyMiAwIDAxLS4xNjguNDA4LjYwNS42MDUgMCAwMS0uNDIuMTUxSDEuNTk1YS41NTEuNTUxIDAgMDEtLjM3OC0uMTUuNTIyLjUyMiAwIDAxLS4xNjgtLjQxdi0uODE3em0yMS40MDUgMi4wMjJjLjE0IDAgLjI2Ni4wNTguMzc4LjE3M2EuNTkyLjU5MiAwIDAxLjE2OC40M3YuODE4YS41NDEuNTQxIDAgMDEtLjE2OC4zODcuNTE2LjUxNiAwIDAxLS4zNzguMTcyTC41NDYgMjMuOTU3YS41MTYuNTE2IDAgMDEtLjM3OC0uMTcyLjU0MS41NDEgMCAwMS0uMTY4LS4zODd2LS44MThhLjU5LjU5IDAgMDEuMTY4LS40My41MTYuNTE2IDAgMDEuMzc4LS4xNzNsMjEuOTA4LjA0M3onXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdtaWMnLFxuICBwYXRoOiAnTTEyIDE1YzEuNjYgMCAyLjk5LTEuMzQgMi45OS0zTDE1IDZjMC0xLjY2LTEuMzQtMy0zLTNTOSA0LjM0IDkgNnY2YzAgMS42NiAxLjM0IDMgMyAzem01LjMtM2MwIDMtMi41NCA1LjEtNS4zIDUuMVM2LjcgMTUgNi43IDEySDVjMCAzLjQxIDIuNzIgNi4yMyA2IDYuNzJWMjJoMnYtMy4yOGMzLjI4LS40OCA2LTMuMyA2LTYuNzJoLTEuN3onXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdkaXJlY3Rpb25zJyxcbiAgcGF0aDogJ00yMy42NDkgMTEuMTU0TDEyLjg0Ni4zNWExLjE5NSAxLjE5NSAwIDAwLTEuNjkyIDBMLjM1IDExLjE1NGExLjE5NSAxLjE5NSAwIDAwMCAxLjY5MkwxMS4xNTQgMjMuNjVhMS4xOTUgMS4xOTUgMCAwMDEuNjkyIDBMMjMuNjUgMTIuODQ2Yy40NjgtLjQ1Ni40NjgtMS4yMTIgMC0xLjY5MnptLTkuMjU0IDMuODUzdi0zLjAwMUg5LjU5M3YzLjZoLTIuNHYtNC44YzAtLjY2LjU0LTEuMiAxLjItMS4yaDYuMDAyVjYuNjA0bDQuMiA0LjItNC4yIDQuMjAyeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2NhbGVuZGFyJyxcbiAgcGF0aDogJ00xOC4xMTEgMTMuMkgxMnY2aDYuMTExdi02ek0xNi44OSAwdjIuNEg3LjExVjBINC42Njd2Mi40SDMuNDQ0Yy0xLjM1NiAwLTIuNDMyIDEuMDgtMi40MzIgMi40TDEgMjEuNkMxIDIyLjkyIDIuMDg4IDI0IDMuNDQ0IDI0aDE3LjExMkMyMS45IDI0IDIzIDIyLjkyIDIzIDIxLjZWNC44YzAtMS4zMi0xLjEtMi40LTIuNDQ0LTIuNGgtMS4yMjNWMEgxNi44OXptMy42NjcgMjEuNkgzLjQ0NFY4LjRoMTcuMTEydjEzLjJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnY2FsbG91dCcsXG4gIHBhdGg6ICdNMjEuOTkgNGMwLTEuMS0uODktMi0xLjk5LTJINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNGw0IDQtLjAxLTE4eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2luZm8nLFxuICBwYXRoOiAnTTEyIDguNEExLjIgMS4yIDAgMTAxMiA2YTEuMiAxLjIgMCAwMDAgMi40ek0xMiAwYzYuNjI0IDAgMTIgNS4zNzYgMTIgMTJzLTUuMzc2IDEyLTEyIDEyUzAgMTguNjI0IDAgMTIgNS4zNzYgMCAxMiAwem0wIDE4Yy42NiAwIDEuMi0uNTQgMS4yLTEuMlYxMmMwLS42Ni0uNTQtMS4yLTEuMi0xLjItLjY2IDAtMS4yLjU0LTEuMiAxLjJ2NC44YzAgLjY2LjU0IDEuMiAxLjIgMS4yeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2JyaWVmY2FzZScsXG4gIHBhdGg6ICdNMjAgN2gtNFY1YzAtMS4xMS0uODktMi0yLTJoLTRjLTEuMTEgMC0yIC44OS0yIDJ2Mkg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAyMGMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY5YzAtMS4xMS0uODktMi0yLTJ6bS02IDBoLTRWNWg0djJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAna2Fib2InLFxuICB2aWV3Qm94OiAnMCAwIDMgMTEnLFxuICBjb21wbGV4Q29udGVudHM6IGA8Y2lyY2xlIGN4PVwiMS41XCIgY3k9XCIxLjVcIiByPVwiMS41XCIvPjxjaXJjbGUgY3g9XCIxLjVcIiBjeT1cIjUuNVwiIHI9XCIxLjVcIi8+PGNpcmNsZSBjeD1cIjEuNVwiIGN5PVwiOS41XCIgcj1cIjEuNVwiLz5gXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdwZXJzb24nLFxuICB2aWV3Qm94OiAnMCAwIDE4IDE4JyxcbiAgcGF0aDogJ005IDljMi40ODYgMCA0LjUtMi4wMTQgNC41LTQuNVMxMS40ODYgMCA5IDBhNC40OTkgNC40OTkgMCAwMC00LjUgNC41QzQuNSA2Ljk4NiA2LjUxNCA5IDkgOXptMCAyLjI1Yy0zLjAwNCAwLTkgMS41MDgtOSA0LjV2MS4xMjVDMCAxNy40OTQuNTA2IDE4IDEuMTI1IDE4aDE1Ljc1Yy42MTkgMCAxLjEyNS0uNTA2IDEuMTI1LTEuMTI1VjE1Ljc1YzAtMi45OTItNS45OTYtNC41LTktNC41eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ21hZ25pZnlpbmdfZ2xhc3MnLFxuICBwYXRoOiAnTTE2LjEyNCAxMy4wNTFhNS4xNTQgNS4xNTQgMCAxMTAtMTAuMzA4IDUuMTU0IDUuMTU0IDAgMDEwIDEwLjMwOE0xNi4xMTQgMGE3Ljg4NiA3Ljg4NiAwIDAwLTYuNDYgMTIuNDA3TDAgMjIuMDYgMS45NCAyNGw5LjY1My05LjY1M0E3Ljg4NiA3Ljg4NiAwIDEwMTYuMTEzIDAnXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdvZmZpY2UnLFxuICBwYXRoOiAnTTEyIDdWM0gydjE4aDIwVjdIMTJ6TTYgMTlINHYtMmgydjJ6bTAtNEg0di0yaDJ2MnptMC00SDRWOWgydjJ6bTAtNEg0VjVoMnYyem00IDEySDh2LTJoMnYyem0wLTRIOHYtMmgydjJ6bTAtNEg4VjloMnYyem0wLTRIOFY1aDJ2MnptMTAgMTJoLTh2LTJoMnYtMmgtMnYtMmgydi0yaC0yVjloOHYxMHptLTItOGgtMnYyaDJ2LTJ6bTAgNGgtMnYyaDJ2LTJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnbGluaycsXG4gIHBhdGg6ICdNMi4yOCAxMkEzLjcyMyAzLjcyMyAwIDAxNiA4LjI4aDQuOFY2SDZjLTMuMzEyIDAtNiAyLjY4OC02IDZzMi42ODggNiA2IDZoNC44di0yLjI4SDZBMy43MjMgMy43MjMgMCAwMTIuMjggMTJ6bTQuOTIgMS4yaDkuNnYtMi40SDcuMnYyLjR6TTE4IDZoLTQuOHYyLjI4SDE4QTMuNzIzIDMuNzIzIDAgMDEyMS43MiAxMiAzLjcyMyAzLjcyMyAwIDAxMTggMTUuNzJoLTQuOFYxOEgxOGMzLjMxMiAwIDYtMi42ODggNi02cy0yLjY4OC02LTYtNnonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICd3aW5kb3cnLFxuICBwYXRoOiAnTTMgMTNoOFYzSDN2MTB6bTAgOGg4di02SDN2NnptMTAgMGg4VjExaC04djEwem0wLTE4djZoOFYzaC04eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3Bob25lJyxcbiAgcGF0aDogJ000LjgyNyAxMC4zODdhMjAuMTk4IDIwLjE5OCAwIDAwOC43ODYgOC43ODZsMi45MzQtMi45MzNjLjM2LS4zNi44OTMtLjQ4IDEuMzYtLjMyYTE1LjIxIDE1LjIxIDAgMDA0Ljc2Ljc2Yy43MzMgMCAxLjMzMy42IDEuMzMzIDEuMzMzdjQuNjU0QzI0IDIzLjQgMjMuNCAyNCAyMi42NjcgMjQgMTAuMTQ3IDI0IDAgMTMuODUzIDAgMS4zMzMgMCAuNi42IDAgMS4zMzMgMEg2Yy43MzMgMCAxLjMzMy42IDEuMzMzIDEuMzMzIDAgMS42NjcuMjY3IDMuMjY3Ljc2IDQuNzYuMTQ3LjQ2Ny4wNC45ODctLjMzMyAxLjM2bC0yLjkzMyAyLjkzNHonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICd0YWcnLFxuICB2aWV3Qm94OiAnMCAwIDE4IDE4JyxcbiAgcGF0aDogJ00xNy40NjkgOC42MjJsLTguMS04LjFBMS43ODkgMS43ODkgMCAwMDguMSAwSDEuOEMuODEgMCAwIC44MSAwIDEuOHY2LjNjMCAuNDk1LjE5OC45NDUuNTMxIDEuMjc4bDguMSA4LjFjLjMyNC4zMjQuNzc0LjUyMiAxLjI2OS41MjJhMS43NiAxLjc2IDAgMDAxLjI2OS0uNTMxbDYuMy02LjNBMS43NiAxLjc2IDAgMDAxOCA5LjljMC0uNDk1LS4yMDctLjk1NC0uNTMxLTEuMjc4ek0zLjE1IDQuNWMtLjc0NyAwLTEuMzUtLjYwMy0xLjM1LTEuMzUgMC0uNzQ3LjYwMy0xLjM1IDEuMzUtMS4zNS43NDcgMCAxLjM1LjYwMyAxLjM1IDEuMzUgMCAuNzQ3LS42MDMgMS4zNS0xLjM1IDEuMzV6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnZG9jdW1lbnQnLFxuICBwYXRoOiAnTTQgNkgydjE0YzAgMS4xLjkgMiAyIDJoMTR2LTJINFY2em0xNi00SDhjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoMTJjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnptLTEgOUg5VjloMTB2MnptLTQgNEg5di0yaDZ2MnptNC04SDlWNWgxMHYyeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2NoZXZyb24nLFxuICB2aWV3Qm94OiAnMCAwIDcgOScsXG4gIGNvbXBsZXhDb250ZW50czogYDxnIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEgLTgpXCI+PHBhdGggZD1cIm0yLjY0MTcwMDQgOC0xLjE0MTcwMDQgMS4wNTc1IDMuNzA4NTAyMDIgMy40NDI1LTMuNzA4NTAyMDIgMy40NDI1IDEuMTQxNzAwNCAxLjA1NzUgNC44NTgyOTk2LTQuNXpcIi8+PC9nPmBcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3N1cHBvcnQnLFxuICBwYXRoOiAnTTEyLjUgMkM3LjgxIDIgNCA1LjgxIDQgMTAuNWMwIDQuNjkgMy44MSA4LjUgOC41IDguNWguNXYzYzQuODYtMi4zNCA4LTcgOC0xMS41QzIxIDUuODEgMTcuMTkgMiAxMi41IDJ6bTEgMTQuNWgtMnYtMmgydjJ6bTAtMy41aC0yYzAtMy4yNSAzLTMgMy01IDAtMS4xLS45LTItMi0ycy0yIC45LTIgMmgtMmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0YzAgMi41LTMgMi43NS0zIDV6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAneWV4dCcsXG4gIHZpZXdCb3g6ICcwIDAgMzAgMzAnLFxuICBwYXRoOiAnTTI1LjUxNyAyOC4xNDJ2LjA5NWgtLjIwNHYuOTA1aC0uMDY2di0uOTA1aC0uMTk3di0uMDk1aC40Njd6bS42NjcgMGguMDY2djFoLS4wNjZ2LS44MjVsLS4yNC41OTVoLS4wMTNsLS4yNC0uNTk1di44MjVoLS4wNjZ2LTFoLjA2NmwuMjQ3LjYxLjI0Ni0uNjF6TTE1IDI4LjhjNy42MjIgMCAxMy44LTYuMTc4IDEzLjgtMTMuOCAwLTcuNjIyLTYuMTc4LTEzLjgtMTMuOC0xMy44QzcuMzc4IDEuMiAxLjIgNy4zNzggMS4yIDE1YzAgNy42MjIgNi4xNzggMTMuOCAxMy44IDEzLjh6TTE1IDBjOC4yODQgMCAxNSA2LjcxNiAxNSAxNSAwIDguMjg0LTYuNzE2IDE1LTE1IDE1LTguMjg0IDAtMTUtNi43MTYtMTUtMTVDMCA2LjcxNiA2LjcxNiAwIDE1IDB6bS40NSAxNi42NXYtMS4yaDYuNnYxLjJoLTIuN3Y1LjRoLTEuMnYtNS40aC0yLjd6bS0xLjU5OS0xLjM1bC44NDkuODQ5LTIuNjAxIDIuNjAxIDIuNjAxIDIuNjAxLS44NDkuODQ5LTIuNjAxLTIuNjAxTDguNjQ5IDIyLjJsLS44NDktLjg0OSAyLjYwMS0yLjYwMUw3LjggMTYuMTQ5bC44NDktLjg0OSAyLjYwMSAyLjYwMSAyLjYwMS0yLjYwMXpNMTguNjc1IDlhMi4xNzUgMi4xNzUgMCAwMC0xLjg0NyAzLjMyM2wyLjk5NS0yLjk5NUEyLjE2MyAyLjE2MyAwIDAwMTguNjc1IDl6bTAgNS41NWEzLjM3NSAzLjM3NSAwIDExMi44MzMtNS4yMDlsLTMuNzg5IDMuNzg4YTIuMTc1IDIuMTc1IDAgMDAzLjEzLTEuOTU0aDEuMjAxYTMuMzc1IDMuMzc1IDAgMDEtMy4zNzUgMy4zNzV6bS03LjQyNS0zLjczNEwxMy43OCA3LjhsLjkyLjc3MS0yLjg1IDMuMzk3djIuNTgyaC0xLjJ2LTIuNTgyTDcuOCA4LjU3bC45Mi0uNzcxIDIuNTMgMy4wMTZ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncGluJyxcbiAgdmlld0JveDogJzAgMCAxMyAxOCcsXG4gIHBhdGg6ICdtOS4zNzUgMGMtMy41MjQ0NjQyOSAwLTYuMzc1IDIuODE3LTYuMzc1IDYuMyAwIDQuNzI1IDYuMzc1IDExLjcgNi4zNzUgMTEuN3M2LjM3NS02Ljk3NSA2LjM3NS0xMS43YzAtMy40ODMtMi44NTA1MzU3LTYuMy02LjM3NS02LjN6bS4wMDAwMDAxOCA4LjU1MDAwMDA3Yy0xLjI1Njc4NTc2IDAtMi4yNzY3ODU3OS0xLjAwOC0yLjI3Njc4NTc5LTIuMjVzMS4wMjAwMDAwMy0yLjI1IDIuMjc2Nzg1NzktMi4yNWMxLjI1Njc4NTcyIDAgMi4yNzY3ODU4MiAxLjAwOCAyLjI3Njc4NTgyIDIuMjVzLTEuMDIwMDAwMSAyLjI1LTIuMjc2Nzg1ODIgMi4yNXonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdnZWFyJyxcbiAgcGF0aDogJ00xMiAxMGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bTctN0g1YTIgMiAwIDAwLTIgMnYxNGEyIDIgMCAwMDIgMmgxNGEyIDIgMCAwMDItMlY1YTIgMiAwIDAwLTItMnptLTEuNzUgOWMwIC4yMy0uMDIuNDYtLjA1LjY4bDEuNDggMS4xNmMuMTMuMTEuMTcuMy4wOC40NWwtMS40IDIuNDJjLS4wOS4xNS0uMjcuMjEtLjQzLjE1bC0xLjc0LS43Yy0uMzYuMjgtLjc2LjUxLTEuMTguNjlsLS4yNiAxLjg1Yy0uMDMuMTctLjE4LjMtLjM1LjNoLTIuOGMtLjE3IDAtLjMyLS4xMy0uMzUtLjI5bC0uMjYtMS44NWMtLjQzLS4xOC0uODItLjQxLTEuMTgtLjY5bC0xLjc0LjdjLS4xNi4wNi0uMzQgMC0uNDMtLjE1bC0xLjQtMi40MmEuMzUzLjM1MyAwIDAxLjA4LS40NWwxLjQ4LTEuMTZjLS4wMy0uMjMtLjA1LS40Ni0uMDUtLjY5IDAtLjIzLjAyLS40Ni4wNS0uNjhsLTEuNDgtMS4xNmEuMzUzLjM1MyAwIDAxLS4wOC0uNDVsMS40LTIuNDJjLjA5LS4xNS4yNy0uMjEuNDMtLjE1bDEuNzQuN2MuMzYtLjI4Ljc2LS41MSAxLjE4LS42OWwuMjYtMS44NWMuMDMtLjE3LjE4LS4zLjM1LS4zaDIuOGMuMTcgMCAuMzIuMTMuMzUuMjlsLjI2IDEuODVjLjQzLjE4LjgyLjQxIDEuMTguNjlsMS43NC0uN2MuMTYtLjA2LjM0IDAgLjQzLjE1bDEuNCAyLjQyYy4wOS4xNS4wNS4zNC0uMDguNDVsLTEuNDggMS4xNmMuMDMuMjMuMDUuNDYuMDUuNjl6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnbGlnaHRfYnVsYicsXG4gIHZpZXdCb3g6ICcwIDAgMzIgMzUnLFxuICBwYXRoOiAnTTExLjU4NSAzMS4wNTZsOC4zOC0uNDkzdi0uOTg2bC04LjM4LjQ5M3pNMTEuNTg1IDMzLjAyOEwxNS43NzUgMzVsNC4xOS0xLjk3MlYzMS41NWwtOC4zOC40OTN2Ljk4NnptNi45MjYtLjQwN2wtMi43MzYgMS4yOS0yLjEzLTEuMDA0IDQuODY2LS4yODZ6TTE1Ljc3NSA3LjM5NGMtNC42MyAwLTguMzggMy4yMDUtOC4zOCA4LjM4IDAgNS4xNzcgNC4xOSA2LjkwMiA0LjE5IDEyLjgxOHYuNDkzbDguMzgtLjQ5M2MwLTUuOTE2IDQuMTktOC4xODggNC4xOS0xMi44MTdhOC4zOCA4LjM4IDAgMDAtOC4zOC04LjM4em01LjYxNyAxMy40OGMtMS4wMjUgMS44MzctMi4xNzQgMy44OTItMi4zODEgNi43ODZsLTYuNDQuMzhjLS4xMjktMy4wMS0xLjI5LTUuMDIxLTIuMzItNi44MDgtLjQ5My0uOC0uOTI4LTEuNjM2LTEuMjk5LTIuNWgxMy41NTZjLS4zMjUuNzA4LS43MDQgMS40MDMtMS4xMTYgMi4xNDJ6bTEuNDc5LTMuMTI4SDguNjI3YTcuNzkzIDcuNzkzIDAgMDEtLjI0Ny0xLjk3MWMwLTQuMzUzIDMuMDQyLTcuMzk1IDcuMzk1LTcuMzk1YTcuMzk0IDcuMzk0IDAgMDE3LjM5NCA3LjM5NSA2LjczOSA2LjczOSAwIDAxLS4zIDEuOTcxaC4wMDJ6TTI2LjYyIDE1LjI4Mmg0LjkzdjFoLTQuOTN6TTIzLjA5NCA3Ljc1NmwyLjA5MS0yLjA5MS42OTguNjk3LTIuMDkyIDIuMDkyek0xNS4yODIgMGgxdjQuOTNoLTF6TTUuNjY2IDYuMzYybC42OTctLjY5NyAyLjA5MSAyLjA5MS0uNjk3LjY5N3pNMCAxNS4yODJoNC45M3YxSDB6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncmVjZWlwdCcsXG4gIHZpZXdCb3g6ICcwIDAgMTggMTgnLFxuICBwYXRoOiAnTTguOTkxIDBDNC4wMjMgMCAwIDQuMDMyIDAgOXM0LjAyMyA5IDguOTkxIDlDMTMuOTY4IDE4IDE4IDEzLjk2OCAxOCA5cy00LjAzMi05LTkuMDA5LTl6bTMuODE2IDE0LjRMOSAxMi4xMDUgNS4xOTMgMTQuNGwxLjAwOC00LjMyOS0zLjM1Ny0yLjkwNyA0LjQyOC0uMzc4TDkgMi43bDEuNzI4IDQuMDc3IDQuNDI4LjM3OC0zLjM1NyAyLjkwN3onXG59KTtcbiIsImltcG9ydCB0aHVtYkljb24gZnJvbSAnLi90aHVtYi5qcyc7XG5pbXBvcnQgcmVjZWlwdEljb24gZnJvbSAnLi9yZWNlaXB0LmpzJztcbmltcG9ydCBwYW50aGVvbkljb24gZnJvbSAnLi9wYW50aGVvbi5qcyc7XG5pbXBvcnQgbWljSWNvbiBmcm9tICcuL21pYy5qcyc7XG5pbXBvcnQgZGlyZWN0aW9uc0ljb24gZnJvbSAnLi9kaXJlY3Rpb25zLmpzJztcbmltcG9ydCBjYWxlbmRhckljb24gZnJvbSAnLi9jYWxlbmRhci5qcyc7XG5pbXBvcnQgY2FsbG91dEljb24gZnJvbSAnLi9jYWxsb3V0LmpzJztcbmltcG9ydCBpbmZvSWNvbiBmcm9tICcuL2luZm8uanMnO1xuaW1wb3J0IGJyaWVmY2FzZUljb24gZnJvbSAnLi9icmllZmNhc2UuanMnO1xuaW1wb3J0IGthYm9iSWNvbiBmcm9tICcuL2thYm9iLmpzJztcbmltcG9ydCBwZXJzb25JY29uIGZyb20gJy4vcGVyc29uLmpzJztcbmltcG9ydCBtYWduaWZ5aW5nR2xhc3NJY29uIGZyb20gJy4vbWFnbmlmeWluZ19nbGFzcy5qcyc7XG5pbXBvcnQgb2ZmaWNlSWNvbiBmcm9tICcuL29mZmljZS5qcyc7XG5pbXBvcnQgbGlua0ljb24gZnJvbSAnLi9saW5rLmpzJztcbmltcG9ydCB3aW5kb3dJY29uIGZyb20gJy4vd2luZG93LmpzJztcbmltcG9ydCBwaG9uZUljb24gZnJvbSAnLi9waG9uZS5qcyc7XG5pbXBvcnQgdGFnSWNvbiBmcm9tICcuL3RhZy5qcyc7XG5pbXBvcnQgZG9jdW1lbnRJY29uIGZyb20gJy4vZG9jdW1lbnQuanMnO1xuaW1wb3J0IGNoZXZyb25JY29uIGZyb20gJy4vY2hldnJvbi5qcyc7XG5pbXBvcnQgc3VwcG9ydEljb24gZnJvbSAnLi9zdXBwb3J0LmpzJztcbmltcG9ydCB5ZXh0SWNvbiBmcm9tICcuL3lleHQuanMnO1xuaW1wb3J0IHBpbkljb24gZnJvbSAnLi9waW4uanMnO1xuaW1wb3J0IGdlYXJJY29uIGZyb20gJy4vZ2Vhci5qcyc7XG5pbXBvcnQgbGlnaHRCdWxiSWNvbiBmcm9tICcuL2xpZ2h0X2J1bGIuanMnO1xuaW1wb3J0IHN0YXJJY29uIGZyb20gJy4vc3Rhci5qcyc7XG5cbmNvbnN0IGljb25zQXJyYXkgPSBbXG4gIHRodW1iSWNvbixcbiAgcmVjZWlwdEljb24sXG4gIHBhbnRoZW9uSWNvbixcbiAgbWljSWNvbixcbiAgZGlyZWN0aW9uc0ljb24sXG4gIGNhbGVuZGFySWNvbixcbiAgY2FsbG91dEljb24sXG4gIGluZm9JY29uLFxuICBicmllZmNhc2VJY29uLFxuICBrYWJvYkljb24sXG4gIHBlcnNvbkljb24sXG4gIG1hZ25pZnlpbmdHbGFzc0ljb24sXG4gIG9mZmljZUljb24sXG4gIGxpbmtJY29uLFxuICB3aW5kb3dJY29uLFxuICBwaG9uZUljb24sXG4gIHRhZ0ljb24sXG4gIGRvY3VtZW50SWNvbixcbiAgY2hldnJvbkljb24sXG4gIHN1cHBvcnRJY29uLFxuICB5ZXh0SWNvbixcbiAgcGluSWNvbixcbiAgZ2Vhckljb24sXG4gIGxpZ2h0QnVsYkljb25cbl07XG5cbmNvbnN0IEljb25zID0ge307XG5cbmljb25zQXJyYXkuZm9yRWFjaChpY29uID0+IHtcbiAgSWNvbnNbaWNvbi5uYW1lXSA9IGljb24ubWFya3VwKCk7XG59KTtcblxuSWNvbnMuZGVmYXVsdCA9IHN0YXJJY29uLm1hcmt1cCgpO1xuXG5leHBvcnQgZGVmYXVsdCBJY29ucztcbiIsIi8qKiBAbW9kdWxlIEljb25Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEljb25zIGZyb20gJy4uLy4uL2ljb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBJY29uQ29tcG9uZW50XG4gICAqIEBwYXJhbSBvcHRzXG4gICAqIEBwYXJhbSBvcHRzLmljb25OYW1lIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBvcHRzLmN1c3RvbUljb24ge3N0cmluZ31cbiAgICogQHBhcmFtIG9wdHMuaWNvblVybCB7c3RyaW5nfVxuICAgKi9cbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogbmFtZSBvZiBhbiBpY29uIGZyb20gdGhlIGRlZmF1bHQgaWNvbiBzZXRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuaWNvbk5hbWUgPSBvcHRzLmljb25OYW1lIHx8ICdkZWZhdWx0JztcblxuICAgIC8qKlxuICAgICAqIHRoZSBtYXJrdXAgZm9yIGEgZnVsbHkgY3VzdG9tIGljb25cbiAgICAgKiBAdHlwZSB7KnxudWxsfVxuICAgICAqL1xuICAgIHRoaXMuY3VzdG9tSWNvbiA9IG9wdHMuY3VzdG9tSWNvbiB8fCBudWxsO1xuICAgIC8qKlxuICAgICAqIHRoZSB1cmwgdG8gYSBjdXN0b20gaW1hZ2UgaWNvblxuICAgICAqIEB0eXBlIHtudWxsfVxuICAgICAqL1xuICAgIHRoaXMuaWNvblVybCA9IG9wdHMuaWNvblVybCB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldHRlciBmb3IgdGhlIGltYWdlIHBhc3RlZCB0byBoYW5kbGViYXJzXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgaW1hZ2UgKCkge1xuICAgIGlmICh0aGlzLmN1c3RvbUljb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmN1c3RvbUljb247XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaWNvblVybCkge1xuICAgICAgcmV0dXJuIGA8aW1nIHNyYz1cIiR7dGhpcy5pY29uVXJsfVwiIGFsdD1cIlwiIGNsYXNzPVwiSWNvbi1pbWFnZVwiPmA7XG4gICAgfVxuXG4gICAgaWYgKEljb25zW3RoaXMuaWNvbk5hbWVdKSB7XG4gICAgICByZXR1cm4gSWNvbnNbdGhpcy5pY29uTmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIEljb25zLmRlZmF1bHQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnSWNvbkNvbXBvbmVudCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ2ljb25zL2ljb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIGFsbG93aW5nIGR1cGxpY2F0ZXNcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogb3ZlcnJpZGVzIGRlZmF1bHQgZnVuY3Rpb25hbGl0eSB0byBwcm92aWRlIG5hbWUgYW5kIG1hcmt1cFxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7SWNvbkNvbXBvbmVudH1cbiAgICovXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICBuYW1lOiB0aGlzLmljb25OYW1lID8gdGhpcy5pY29uTmFtZSA6ICdjdXN0b20nXG4gICAgfSkpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tICcuL2NvbXBvbmVudG1hbmFnZXInO1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcblxuaW1wb3J0IE5hdmlnYXRpb25Db21wb25lbnQgZnJvbSAnLi9uYXZpZ2F0aW9uL25hdmlnYXRpb25jb21wb25lbnQnO1xuXG5pbXBvcnQgU2VhcmNoQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL3NlYXJjaGNvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyU2VhcmNoQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL2ZpbHRlcnNlYXJjaGNvbXBvbmVudCc7XG5pbXBvcnQgQXV0b0NvbXBsZXRlQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL2F1dG9jb21wbGV0ZWNvbXBvbmVudCc7XG5cbmltcG9ydCBGaWx0ZXJCb3hDb21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL2ZpbHRlcmJveGNvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyT3B0aW9uc0NvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZmlsdGVyb3B0aW9uc2NvbXBvbmVudCc7XG5pbXBvcnQgUmFuZ2VGaWx0ZXJDb21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL3JhbmdlZmlsdGVyY29tcG9uZW50JztcbmltcG9ydCBEYXRlUmFuZ2VGaWx0ZXJDb21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL2RhdGVyYW5nZWZpbHRlcmNvbXBvbmVudCc7XG5pbXBvcnQgRHluYW1pY0ZpbHRlcnNDb21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL2R5bmFtaWNmaWx0ZXJzY29tcG9uZW50JztcbmltcG9ydCBHZW9Mb2NhdGlvbkNvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZ2VvbG9jYXRpb25jb21wb25lbnQnO1xuXG5pbXBvcnQgRGlyZWN0QW5zd2VyQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9kaXJlY3RhbnN3ZXJjb21wb25lbnQnO1xuaW1wb3J0IFJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Jlc3VsdHNjb21wb25lbnQnO1xuaW1wb3J0IEFjY29yZGlvblJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2FjY29yZGlvbnJlc3VsdHNjb21wb25lbnQuanMnO1xuaW1wb3J0IFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHNjb21wb25lbnQnO1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50JztcblxuaW1wb3J0IFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9wZW9wbGVyZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmltcG9ydCBNYXBDb21wb25lbnQgZnJvbSAnLi9tYXAvbWFwY29tcG9uZW50JztcbmltcG9ydCBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgZnJvbSAnLi9xdWVzdGlvbnMvcXVlc3Rpb25zdWJtaXNzaW9uY29tcG9uZW50JztcblxuaW1wb3J0IEljb25Db21wb25lbnQgZnJvbSAnLi9pY29ucy9pY29uY29tcG9uZW50LmpzJztcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9NQU5BR0VSID0gbmV3IENvbXBvbmVudE1hbmFnZXIoKVxuLy8gQ29yZSBDb21wb25lbnRcbiAgLnJlZ2lzdGVyKENvbXBvbmVudClcblxuLy8gTmF2aWdhdGlvbiBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihOYXZpZ2F0aW9uQ29tcG9uZW50KVxuXG4vLyBTZWFyY2ggQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoU2VhcmNoQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRmlsdGVyU2VhcmNoQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoQXV0b0NvbXBsZXRlQ29tcG9uZW50KVxuXG4vLyBGaWx0ZXIgQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoRmlsdGVyQm94Q29tcG9uZW50KVxuICAucmVnaXN0ZXIoRmlsdGVyT3B0aW9uc0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFJhbmdlRmlsdGVyQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRGF0ZVJhbmdlRmlsdGVyQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRHluYW1pY0ZpbHRlcnNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihHZW9Mb2NhdGlvbkNvbXBvbmVudClcblxuLy8gUmVzdWx0cyBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihEaXJlY3RBbnN3ZXJDb21wb25lbnQpXG4gIC5yZWdpc3RlcihVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoUmVzdWx0c0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFJlc3VsdHNJdGVtQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQpXG4gIC5yZWdpc3RlcihFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQpXG5cbiAgLnJlZ2lzdGVyKE1hcENvbXBvbmVudClcblxuLy8gUXVlc3Rpb25zIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudClcblxuLy8gSGVscGVyIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKEljb25Db21wb25lbnQpO1xuIiwiLyoqIEBtb2R1bGUgVGVtcGxhdGVMb2FkZXIgKi9cblxuaW1wb3J0IERPTSBmcm9tICcuLi9kb20vZG9tJztcbmltcG9ydCB7IENPTVBJTEVEX1RFTVBMQVRFU19VUkwgfSBmcm9tICcuLi8uLi9jb3JlL2NvbnN0YW50cyc7XG5cbi8qKlxuICogVGVtcGxhdGVMb2FkZXIgZXhwb3NlcyBhbiBpbnRlcmZhY2UgZm9yIGxvYWRpbmcgdGVtcGxhdGVzIGFzeW5jaHJvbm91c2x5XG4gKiBmcm9tIHRoZSBzZXJ2ZXIgYW5kIHJlZ2lzdGVycyB0aGVtIHdpdGggdGhlIHByb3BlciByZW5kZXJlci5cbiAqIEl0IGFsc28gYWxsb3dzIHlvdSB0byBhc3NpZ24gdGhlbSBzeW5jaHJvbm91c2x5LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZUxvYWRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBpZiAoIVRlbXBsYXRlTG9hZGVyLnNldEluc3RhbmNlKHRoaXMpKSB7XG4gICAgICByZXR1cm4gVGVtcGxhdGVMb2FkZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgdXJsIHRvIGZldGNoIGNvbXBpbGVkIHRlbXBsYXRlcyBmcm9tXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlVXJsID0gY29uZmlnLnRlbXBsYXRlVXJsIHx8IENPTVBJTEVEX1RFTVBMQVRFU19VUkw7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB7fTtcbiAgICB0aGlzLl9vbkxvYWRlZCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHRoaXMuX2luaXQoKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRJbnN0YW5jZSAoaW5zdGFuY2UpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UgKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgX2luaXQgKCkge1xuICAgIHRoaXMuZmV0Y2hUZW1wbGF0ZXMoKTtcbiAgfVxuXG4gIGZldGNoVGVtcGxhdGVzICgpIHtcbiAgICAvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgdGVtcGxhdGVzIGxvYWRlZCwgZG8gbm90aGluZ1xuICAgIGxldCBub2RlID0gRE9NLnF1ZXJ5KCcjeWV4dC1hbnN3ZXJzLXRlbXBsYXRlcycpO1xuICAgIGlmIChub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSW5qZWN0IGEgc2NyaXB0IHRvIGZldGNoIHRoZSBjb21waWxlZCB0ZW1wbGF0ZXMsXG4gICAgLy8gd3JhcHBpbmcgaXQgYSBQcm9taXNlIGZvciBjbGVhbmxpbmVzc1xuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBzY3JpcHQgPSBET00uY3JlYXRlRWwoJ3NjcmlwdCcsIHtcbiAgICAgICAgaWQ6ICd5ZXh0LWFuc3dlcnMtdGVtcGxhdGVzJyxcbiAgICAgICAgb25sb2FkOiByZXNvbHZlLFxuICAgICAgICBvbmVycm9yOiByZWplY3QsXG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBzcmM6IHRoaXMuX3RlbXBsYXRlVXJsXG4gICAgICB9KTtcblxuICAgICAgRE9NLmFwcGVuZCgnYm9keScsIHNjcmlwdCk7XG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgLy8gVE9ETyhiaWxseSkgSW1wbG1lbmV0IGVycm9yIGhhbmRsaW5nIGhlcmUgKGUuZy4gcmVxdWVzdCBjb3VsZCBmYWlsKVxuICAgICAgICBjb25zb2xlLmxvZygnVGVtcGxhdGVzIGxvYWRlZCBzdWNjZXNzZnVsbHkhJyk7XG4gICAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZWdpc3RlciB0aGUgdGVtcGxhdGVzIGludGVybmFsbHkgc28gdGhhdCB0aGV5IGNhbiBiZSBsYXRlciBjb25zdW1lZFxuICAgKiAoZS5nLiBieSBjb21wb25lbnRzIGFuZCByZW5kZXJlcnMpIHdpdGggY29udmllbmllbmNlLlxuICAgKlxuICAgKiBgZmV0Y2hUZW1wbGF0ZXNgIHdpbGwgYXV0b21hdGljYWxseSBjYWxsIHRoaXMsIHByb3ZpZGluZyB0aGUgY29tcGlsZWQgdGVtcGxhdGVzIGZyb20gdGhlIHNlcnZlci5cbiAgICovXG4gIHJlZ2lzdGVyICh0ZW1wbGF0ZXMpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXM7XG5cbiAgICAvLyBOb3RpZnkgb3VyIGNvbnN1bWVycyB0aGF0IHRoZSB0ZW1wbGF0ZXMgYXJlIGhlcmUgOilcbiAgICB0aGlzLl9vbkxvYWRlZCh0aGlzLl90ZW1wbGF0ZXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb25Mb2FkZWQgKGNiKSB7XG4gICAgdGhpcy5fb25Mb2FkZWQgPSBjYjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCAodGVtcGxhdGVOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlc1t0ZW1wbGF0ZU5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4gVGhlIGludGVybmFsIHRlbXBsYXRlIGNvbGxlY3Rpb25cbiAgICovXG4gIGdldFRlbXBsYXRlcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlcztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuZXhwb3J0IHsgQ09NUE9ORU5UX01BTkFHRVIgfSBmcm9tICcuL2NvbXBvbmVudHMvY29uc3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBET00gfSBmcm9tICcuL2RvbS9kb20nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2hQYXJhbXMgfSBmcm9tICcuL2RvbS9zZWFyY2hwYXJhbXMnO1xuXG5leHBvcnQgeyBSZW5kZXJlcnMgfSBmcm9tICcuL3JlbmRlcmluZy9jb25zdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRlbXBsYXRlTG9hZGVyIH0gZnJvbSAnLi9yZW5kZXJpbmcvdGVtcGxhdGVsb2FkZXInO1xuIiwiLyoqIEBtb2R1bGUgRXJyb3JSZXBvcnRlciAqL1xuXG5pbXBvcnQgeyBBbnN3ZXJzQmFzZUVycm9yIH0gZnJvbSAnLi9lcnJvcnMnO1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IHsgTElCX1ZFUlNJT04gfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEVycm9yUmVwb3J0ZXIgaXMgdXNlZCBmb3IgcmVwb3J0aW5nIGVycm9ycyB0byB0aGUgc2VydmVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yUmVwb3J0ZXIge1xuICBjb25zdHJ1Y3RvciAoYXBpS2V5LCBhbnN3ZXJzS2V5KSB7XG4gICAgLyoqXG4gICAgICogVGhlIGFwaUtleSB0byB1c2UgZm9yIHJlcG9ydGluZ1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5hcGlLZXkgPSBhcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYW5zd2Vyc0tleSB0byB1c2Ugd2hlbiByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuYW5zd2Vyc0tleSA9IGFuc3dlcnNLZXk7XG4gIH1cblxuICAvKipcbiAgICogcmVwb3J0IHNlbmRzIGEgbmV0d29yayByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdG8gYmUgbG9nZ2VkXG4gICAqIEBwYXJhbSB7QW5zd2Vyc0Jhc2VFcnJvcn0gVGhlIGVycm9yIHRvIGJlIHJlcG9ydGVkXG4gICAqL1xuICByZXBvcnQgKGVycikge1xuICAgIGlmICghKGVyciBpbnN0YW5jZW9mIEFuc3dlcnNCYXNlRXJyb3IpIHx8IGVyci5yZXBvcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVyci5yZXBvcnRlZCA9IHRydWU7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9lcnJvcnMnLFxuICAgICAgYXBpS2V5OiB0aGlzLmFwaUtleSxcbiAgICAgIHZlcnNpb246IDIwMTkwMzAxLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdlcnJvcic6IGVyci50b0pzb24oKSxcbiAgICAgICAgJ2xpYlZlcnNpb24nOiBMSUJfVkVSU0lPTixcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLmFuc3dlcnNLZXlcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlcXVlc3QuZ2V0KClcbiAgICAgIC5jYXRjaChjb25zb2xlLmVycik7XG5cbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG4iLCJpbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uL2RvbS9zZWFyY2hwYXJhbXMnO1xuaW1wb3J0IHsgQW5zd2Vyc1N0b3JhZ2VFcnJvciB9IGZyb20gJy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5cbi8qKiBAbW9kdWxlIFBlcnNpc3RlbnRTdG9yYWdlICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcnNpc3RlbnRTdG9yYWdlIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgcGFyYW1zIG1vZGVsXG4gICAgICogQHR5cGUge1NlYXJjaFBhcmFtc31cbiAgICAgKi9cbiAgICB0aGlzLl9wYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IGhpc3RvcnkgZWRpdCB0aW1lciwgaWYgYW55XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9oaXN0b3J5VGltZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxpc3Qgb2YgbGlzdGVuZXJzIHRvIGV2ZXJ5IHN0b3JhZ2UgdXBkYXRlXG4gICAgICogQHR5cGUge2Z1bmN0aW9uW119XG4gICAgICovXG4gICAgdGhpcy5fdXBkYXRlTGlzdGVuZXIgPSBjb25maWcudXBkYXRlTGlzdGVuZXIgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBsaXN0ZW5lcnMgdG8gc3RvcmFnZSByZXNldHNcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb25bXX1cbiAgICAgKi9cbiAgICB0aGlzLl9yZXNldExpc3RlbmVyID0gY29uZmlnLnJlc2V0TGlzdGVuZXIgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICB3aW5kb3cub25wb3BzdGF0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX3BhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuICAgICAgdGhpcy5fY2FsbExpc3RlbmVyKHRoaXMuX3VwZGF0ZUxpc3RlbmVyKTtcbiAgICAgIHRoaXMuX2NhbGxMaXN0ZW5lcih0aGlzLl9yZXNldExpc3RlbmVyKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydCB0aGUgZ2l2ZW4ga2V5L3ZhbHVlIHBhaXIgaW50byBzdG9yYWdlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSB0byBpbnNlcnQgdGhlIGRhdGEgaW5cbiAgICogQHBhcmFtIHsqfSBkYXRhIFRoZSBkYXRhIHRvIGluc2VydFxuICAgKi9cbiAgc2V0IChrZXksIGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzU3RvcmFnZUVycm9yKCdTdG9yYWdlIGRhdGEga2V5IG11c3QgYmUgYSBzdHJpbmcnLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIGxldCBuZXdEYXRhID0gZGF0YTtcbiAgICBpZiAodHlwZW9mIGRhdGEgIT09ICdzdHJpbmcnKSB7XG4gICAgICBuZXdEYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHRoaXMuX3BhcmFtcy5zZXQoa2V5LCBuZXdEYXRhKTtcbiAgICB0aGlzLl91cGRhdGVIaXN0b3J5KCk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHRoZSBnaXZlbiBrZXkgZnJvbSBzdG9yYWdlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSB0byBkZWxldGVcbiAgICovXG4gIGRlbGV0ZSAoa2V5KSB7XG4gICAgdGhpcy5fcGFyYW1zLmRlbGV0ZShrZXkpO1xuICAgIHRoaXMuX3VwZGF0ZUhpc3RvcnkoKTtcbiAgfVxuXG4gIF91cGRhdGVIaXN0b3J5ICgpIHtcbiAgICBpZiAodGhpcy5faGlzdG9yeVRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5faGlzdG9yeVRpbWVyKTtcbiAgICB9XG5cbiAgICAvLyBiYXRjaCB1cGRhdGUgY2FsbHMgYWNyb3NzIGNvbXBvbmVudHMgdG8gYXZvaWQgdXBkYXRpbmcgdGhlIHVybCB0b28gbXVjaFxuICAgIHRoaXMuX2hpc3RvcnlUaW1lciA9IHNldFRpbWVvdXQoXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2hpc3RvcnlUaW1lciA9IG51bGw7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBgPyR7dGhpcy5fcGFyYW1zLnRvU3RyaW5nKCl9YCk7XG4gICAgICAgIHRoaXMuX2NhbGxMaXN0ZW5lcih0aGlzLl91cGRhdGVMaXN0ZW5lcik7XG4gICAgICB9LFxuICAgICAgMTAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2UgdGhlIGdpdmVuIGxpc3Qgb2YgY2FsbGJhY2tzIHdpdGggdGhlIGN1cnJlbnQgc3RvcmFnZSBkYXRhXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb25bXX0gbGlzdGVuZXJzIFRoZSBjYWxsYmFja3MgdG8gaW52b2tlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY2FsbExpc3RlbmVyIChsaXN0ZW5lcikge1xuICAgIGxpc3RlbmVyKHRoaXMuZ2V0QWxsKCksIHRoaXMuX3BhcmFtcy50b1N0cmluZygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIHRoZSBrZXkvdmFsdWUgcGFpcnMgaW4gc3RvcmFnZVxuICAgKi9cbiAgZ2V0QWxsICgpIHtcbiAgICBjb25zdCBhbGxQYXJhbXMgPSB7fTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgdGhpcy5fcGFyYW1zLmVudHJpZXMoKSkge1xuICAgICAgbGV0IHBhcnNlZFZhbCA9IHZhbDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnNlZFZhbCA9IEpTT04ucGFyc2UodmFsKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgfVxuICAgICAgYWxsUGFyYW1zW2tleV0gPSBwYXJzZWRWYWw7XG4gICAgfVxuICAgIHJldHVybiBhbGxQYXJhbXM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbmltcG9ydCBDb3JlIGZyb20gJy4vY29yZS9jb3JlJztcblxuaW1wb3J0IHtcbiAgVGVtcGxhdGVMb2FkZXIsXG4gIENPTVBPTkVOVF9NQU5BR0VSLFxuICBSZW5kZXJlcnMsXG4gIERPTVxufSBmcm9tICcuL3VpL2luZGV4JztcblxuaW1wb3J0IEVycm9yUmVwb3J0ZXIgZnJvbSAnLi9jb3JlL2Vycm9ycy9lcnJvcnJlcG9ydGVyJztcbmltcG9ydCB7IEFuYWx5dGljc1JlcG9ydGVyIH0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCBQZXJzaXN0ZW50U3RvcmFnZSBmcm9tICcuL3VpL3N0b3JhZ2UvcGVyc2lzdGVudHN0b3JhZ2UnO1xuaW1wb3J0IEdsb2JhbFN0b3JhZ2UgZnJvbSAnLi9jb3JlL3N0b3JhZ2UvZ2xvYmFsc3RvcmFnZSc7XG5cbi8qKlxuICogVGhlIG1haW4gQW5zd2VycyBpbnRlcmZhY2VcbiAqL1xuY2xhc3MgQW5zd2VycyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBpZiAoIUFuc3dlcnMuc2V0SW5zdGFuY2UodGhpcykpIHtcbiAgICAgIHJldHVybiBBbnN3ZXJzLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2Ugb2YgdGhlIHJlbmRlcmVyIHRvIHVzZSBmb3IgdGhlIGNvbXBvbmVudHNcbiAgICAgKiBUaGlzIGlzIHByb3ZpZGVkIGR1cmluZyBpbml0aWFsaXphdGlvbi5cbiAgICAgKiBAdHlwZSB7UmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcnMuSGFuZGxlYmFycygpO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCBtYW5hZ2VyXG4gICAgICogQHR5cGUge0NvbXBvbmVudE1hbmFnZXJ9XG4gICAgICovXG4gICAgdGhpcy5jb21wb25lbnRzID0gQ09NUE9ORU5UX01BTkFHRVI7XG5cbiAgICAvKipcbiAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGludm9rZSBvbmNlIHRoZSBsaWJyYXJ5IGlzIHJlYWR5LlxuICAgICAqIFR5cGljYWxseSBmaXJlZCBhZnRlciB0ZW1wbGF0ZXMgYXJlIGZldGNoZWQgZnJvbSBzZXJ2ZXIgZm9yIHJlbmRlcmluZy5cbiAgICAgKi9cbiAgICB0aGlzLl9vblJlYWR5ID0gZnVuY3Rpb24gKCkge307XG4gIH1cblxuICBzdGF0aWMgc2V0SW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIGluaXQgKGNvbmZpZykge1xuICAgIGNvbnN0IGdsb2JhbFN0b3JhZ2UgPSBuZXcgR2xvYmFsU3RvcmFnZSgpO1xuICAgIGNvbnN0IHBlcnNpc3RlbnRTdG9yYWdlID0gbmV3IFBlcnNpc3RlbnRTdG9yYWdlKHtcbiAgICAgIHVwZGF0ZUxpc3RlbmVyOiBjb25maWcub25TdGF0ZUNoYW5nZSxcbiAgICAgIHJlc2V0TGlzdGVuZXI6IGRhdGEgPT4gZ2xvYmFsU3RvcmFnZS5zZXRBbGwoZGF0YSlcbiAgICB9KTtcbiAgICBnbG9iYWxTdG9yYWdlLnNldEFsbChwZXJzaXN0ZW50U3RvcmFnZS5nZXRBbGwoKSk7XG5cbiAgICBjb25zdCBjb3JlID0gbmV3IENvcmUoe1xuICAgICAgYXBpS2V5OiBjb25maWcuYXBpS2V5LFxuICAgICAgZ2xvYmFsU3RvcmFnZTogZ2xvYmFsU3RvcmFnZSxcbiAgICAgIHBlcnNpc3RlbnRTdG9yYWdlOiBwZXJzaXN0ZW50U3RvcmFnZSxcbiAgICAgIGFuc3dlcnNLZXk6IGNvbmZpZy5hbnN3ZXJzS2V5LFxuICAgICAgbG9jYWxlOiBjb25maWcubG9jYWxlXG4gICAgfSk7XG5cbiAgICBpZiAoY29uZmlnLm9uU3RhdGVDaGFuZ2UgJiYgdHlwZW9mIGNvbmZpZy5vblN0YXRlQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25maWcub25TdGF0ZUNoYW5nZShwZXJzaXN0ZW50U3RvcmFnZS5nZXRBbGwoKSwgd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSkpO1xuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1xuICAgICAgLnNldENvcmUoY29yZSlcbiAgICAgIC5zZXRSZW5kZXJlcih0aGlzLnJlbmRlcmVyKTtcblxuICAgIGlmIChjb25maWcuYnVzaW5lc3NJZCkge1xuICAgICAgdGhpcy5jb21wb25lbnRzLnNldEFuYWx5dGljc1JlcG9ydGVyKFxuICAgICAgICBuZXcgQW5hbHl0aWNzUmVwb3J0ZXIoXG4gICAgICAgICAgY29yZSxcbiAgICAgICAgICBjb25maWcuYW5zd2Vyc0tleSxcbiAgICAgICAgICBjb25maWcuYnVzaW5lc3NJZCxcbiAgICAgICAgICBjb25maWcuYW5hbHl0aWNzT3B0aW9ucylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5fb25SZWFkeSA9IGNvbmZpZy5vblJlYWR5IHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgaWYgKGNvbmZpZy51c2VUZW1wbGF0ZXMgPT09IGZhbHNlIHx8IGNvbmZpZy50ZW1wbGF0ZUJ1bmRsZSkge1xuICAgICAgaWYgKGNvbmZpZy50ZW1wbGF0ZUJ1bmRsZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmluaXQoY29uZmlnLnRlbXBsYXRlQnVuZGxlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fb25SZWFkeSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gVGVtcGxhdGVzIGFyZSBjdXJyZW50bHkgZG93bmxvYWRlZCBzZXBhcmF0ZWx5IGZyb20gdGhlIENPUkUgYW5kIFVJIGJ1bmRsZS5cbiAgICAvLyBGdXR1cmUgZW5oYW5jZW1lbnQgaXMgdG8gc2hpcCB0aGUgY29tcG9uZW50cyB3aXRoIHRlbXBsYXRlcyBpbiBhIHNlcGFyYXRlIGJ1bmRsZS5cbiAgICB0aGlzLnRlbXBsYXRlcyA9IG5ldyBUZW1wbGF0ZUxvYWRlcih7XG4gICAgICB0ZW1wbGF0ZVVybDogY29uZmlnLnRlbXBsYXRlVXJsXG4gICAgfSkub25Mb2FkZWQoKHRlbXBsYXRlcykgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5pbml0KHRlbXBsYXRlcyk7XG5cbiAgICAgIHRoaXMuX29uUmVhZHkoKTtcbiAgICB9KTtcblxuICAgIGlmICghY29uZmlnLnN1cHByZXNzRXJyb3JSZXBvcnRzKSB7XG4gICAgICB0aGlzLl9lcnJvclJlcG9ydGVyID0gbmV3IEVycm9yUmVwb3J0ZXIoY29uZmlnLmFwaUtleSwgY29uZmlnLmFuc3dlcnNLZXkpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZSA9PiB0aGlzLl9lcnJvclJlcG9ydGVyLnJlcG9ydChlLmVycm9yKSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndW5oYW5kbGVkcmVqZWN0aW9uJywgZSA9PiB0aGlzLl9lcnJvclJlcG9ydGVyLnJlcG9ydChlLmVycm9yKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkb21SZWFkeSAoY2IpIHtcbiAgICBET00ub25SZWFkeShjYik7XG4gIH1cblxuICBvblJlYWR5IChjYikge1xuICAgIHRoaXMuX29uUmVhZHkgPSBjYjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZENvbXBvbmVudCAodHlwZSwgb3B0cykge1xuICAgIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdHMgPSB7XG4gICAgICAgIGNvbnRhaW5lcjogb3B0c1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHMuY3JlYXRlKHR5cGUsIG9wdHMpLm1vdW50KCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjcmVhdGVDb21wb25lbnQgKG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzLmNyZWF0ZSgnQ29tcG9uZW50Jywgb3B0cykubW91bnQoKTtcbiAgfVxuXG4gIHJlZ2lzdGVySGVscGVyIChuYW1lLCBjYikge1xuICAgIHRoaXMucmVuZGVyZXIucmVnaXN0ZXJIZWxwZXIobmFtZSwgY2IpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmNvbnN0IEFOU1dFUlMgPSBuZXcgQW5zd2VycygpO1xuZXhwb3J0IGRlZmF1bHQgQU5TV0VSUztcbiJdLCJuYW1lcyI6WyJNZXRob2RzIiwiR0VUIiwiUE9TVCIsIlBVVCIsIkRFTEVURSIsIkh0dHBSZXF1ZXN0ZXIiLCJ1cmwiLCJkYXRhIiwib3B0cyIsInJlcXVlc3QiLCJlbmNvZGVQYXJhbXMiLCJPYmplY3QiLCJhc3NpZ24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNyZWRlbnRpYWxzIiwidW5kZWZpbmVkIiwibWV0aG9kIiwiZmV0Y2giLCJuYXZpZ2F0b3IiLCJzZW5kQmVhY29uIiwicGFyYW1zIiwiaGFzUGFyYW0iLCJpbmRleE9mIiwic2VhcmNoUXVlcnkiLCJrZXkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJMSUJfVkVSU0lPTiIsIkFQSV9CQVNFX1VSTCIsIkNPTVBJTEVEX1RFTVBMQVRFU19VUkwiLCJBTkFMWVRJQ1NfQkFTRV9VUkwiLCJTZWFyY2hQYXJhbXMiLCJfcGFyYW1zIiwid2luZG93IiwiVVJMU2VhcmNoUGFyYW1zIiwicGFyc2UiLCJzZWFyY2giLCJzbGljZSIsImVuY29kZWRQYXJhbXMiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJrZXlWYWwiLCJkZWNvZGUiLCJxdWVyeSIsIlN0cmluZyIsIm5hbWUiLCJ2YWx1ZSIsInN0cmluZyIsInB1c2giLCJlbmNvZGUiLCJqb2luIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmVwbGFjZSIsIm1hdGNoIiwiQXBpUmVxdWVzdCIsIl9yZXF1ZXN0ZXIiLCJfYmFzZVVybCIsImJhc2VVcmwiLCJfZW5kcG9pbnQiLCJlbmRwb2ludCIsIl9hcGlLZXkiLCJhcGlLZXkiLCJfdmVyc2lvbiIsInZlcnNpb24iLCJnZXQiLCJwb3N0IiwiYmFzZVBhcmFtcyIsInVybFBhcmFtcyIsImxvY2F0aW9uIiwidG9TdHJpbmciLCJoYXMiLCJrZXlzIiwiZm9yRWFjaCIsIkFuc3dlcnNCYXNlRXJyb3IiLCJlcnJvckNvZGUiLCJtZXNzYWdlIiwiYm91bmRhcnkiLCJjYXVzZWRCeSIsImVycm9yTWVzc2FnZSIsInJlcG9ydGVkIiwiYnVpbHRpbkVycm9yIiwiZXJyb3IiLCJBbnN3ZXJzQmFzaWNFcnJvciIsInN0YWNrIiwiRXJyb3IiLCJBbnN3ZXJzQ29tcG9uZW50RXJyb3IiLCJjb21wb25lbnQiLCJBbnN3ZXJzRW5kcG9pbnRFcnJvciIsIkFuc3dlcnNDb3JlRXJyb3IiLCJBbnN3ZXJzU3RvcmFnZUVycm9yIiwic3RvcmFnZUtleSIsIkFuc3dlcnNBbmFseXRpY3NFcnJvciIsImV2ZW50IiwiU2VhcmNoQXBpIiwiY29uZmlnIiwiYW5zd2Vyc0tleSIsIl9hbnN3ZXJzS2V5IiwibG9jYWxlIiwiX2xvY2FsZSIsInZlcnRpY2FsS2V5IiwiaW5wdXQiLCJmaWx0ZXIiLCJmYWNldEZpbHRlciIsImxpbWl0Iiwib2Zmc2V0IiwiaWQiLCJpc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJxdWVyeVN0cmluZyIsIkF1dG9Db21wbGV0ZURhdGEiLCJzZWN0aW9ucyIsInF1ZXJ5SWQiLCJmcmVlemUiLCJtYXAiLCJzIiwibGFiZWwiLCJyZXN1bHRzIiwiciIsIkF1dG9Db21wbGV0ZVJlc3VsdCIsImhpZ2hsaWdodGVkVmFsdWUiLCJoaWdobGlnaHQiLCJtYXRjaGVkU3Vic3RyaW5ncyIsInNob3J0VmFsdWUiLCJ2YWwiLCJzb3J0IiwiYSIsImIiLCJuZXh0U3RhcnQiLCJqIiwic3RhcnQiLCJOdW1iZXIiLCJlbmQiLCJBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIiLCJtb2R1bGVJZCIsImZyb20iLCJBdXRvQ29tcGxldGVBcGkiLCJiYXJLZXkiLCJjYXRjaCIsInZlcnRpY2FsIiwidW5pdmVyc2FsIiwiUXVlc3Rpb25BbnN3ZXJBcGkiLCJxdWVzdGlvbiIsImVudGl0eUlkIiwic2l0ZSIsImVtYWlsIiwicXVlc3Rpb25UZXh0IiwicXVlc3Rpb25EZXNjcmlwdGlvbiIsInF1ZXN0aW9uTGFuZ3VhZ2UiLCJQUkVfU0VBUkNIIiwiU0VBUkNIX0xPQURJTkciLCJTRUFSQ0hfQ09NUExFVEUiLCJSZXN1bHQiLCJfcmF3IiwicmF3Iiwib3JkaW5hbCIsInRpdGxlIiwiZGV0YWlscyIsImxpbmsiLCJzdWJ0aXRsZSIsIm1vZGlmaWVyIiwiYmlnRGF0ZSIsImltYWdlIiwiY2FsbHNUb0FjdGlvbiIsIlJlc3VsdEZhY3RvcnkiLCJyZXN1bHRzRGF0YSIsImh0bWxTbmlwcGV0IiwiZnJvbUdvb2dsZUN1c3RvbVNlYXJjaEVuZ2luZSIsImZyb21HZW5lcmljIiwiaW5kZXgiLCJ0cnVuY2F0ZSIsImRlc2NyaXB0aW9uIiwid2Vic2l0ZSIsImh0bWxUaXRsZSIsInN0ciIsInRyYWlsaW5nIiwic2VwIiwid29yZHMiLCJtYXgiLCJ0cnVuY2F0ZWQiLCJ3b3JkIiwiU2VjdGlvbiIsInNlYXJjaFN0YXRlIiwiU2VhcmNoU3RhdGVzIiwidmVydGljYWxDb25maWdJZCIsInJlc3VsdHNDb3VudCIsImVuY29kZWRTdGF0ZSIsImFwcGxpZWRRdWVyeUZpbHRlcnMiLCJBcHBsaWVkUXVlcnlGaWx0ZXIiLCJmYWNldHMiLCJwYXJzZU1hcCIsInZlcnRpY2FsVVJMIiwibWFwTWFya2VycyIsImNlbnRlckNvb3JkaW5hdGVzIiwicmVzdWx0IiwieWV4dERpc3BsYXlDb29yZGluYXRlIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJpdGVtIiwibW9kdWxlcyIsInVybHMiLCJBcnJheSIsImlzQXJyYXkiLCJhcHBsaWVkUXVlcnlGaWx0ZXIiLCJkaXNwbGF5S2V5IiwiZGlzcGxheVZhbHVlIiwiZmlsdGVycyIsIlVuaXZlcnNhbFJlc3VsdHMiLCJEaXJlY3RBbnN3ZXIiLCJkaXJlY3RBbnN3ZXIiLCJOYXZpZ2F0aW9uIiwidGFiT3JkZXIiLCJuYXYiLCJWZXJ0aWNhbFJlc3VsdHMiLCJtZXJnZWQiLCJjb25jYXQiLCJOQVZJR0FUSU9OIiwiVU5JVkVSU0FMX1JFU1VMVFMiLCJWRVJUSUNBTF9SRVNVTFRTIiwiQVVUT0NPTVBMRVRFIiwiRElSRUNUX0FOU1dFUiIsIkZJTFRFUiIsIlFVRVJZIiwiUVVFUllfSUQiLCJGQUNFVF9GSUxURVIiLCJEWU5BTUlDX0ZJTFRFUlMiLCJTRUFSQ0hfTElNSVQiLCJQQVJBTVMiLCJRVUVTVElPTl9TVUJNSVNTSU9OIiwiRHluYW1pY0ZpbHRlcnMiLCJkeW5hbWljRmlsdGVycyIsImYiLCJmaWVsZElkIiwib3B0aW9ucyIsIm8iLCJjb3VudExhYmVsIiwic2VsZWN0ZWQiLCJTZWFyY2hEYXRhVHJhbnNmb3JtZXIiLCJTdG9yYWdlS2V5cyIsIlF1ZXN0aW9uU3VibWlzc2lvbiIsImVycm9ycyIsInByaXZhY3lQb2xpY3kiLCJxdWVzdGlvblN1Ym1pdHRlZCIsIkNvcmUiLCJnbG9iYWxTdG9yYWdlIiwicGVyc2lzdGVudFN0b3JhZ2UiLCJfc2VhcmNoZXIiLCJfYXV0b0NvbXBsZXRlIiwiX3F1ZXN0aW9uQW5zd2VyIiwiYXBwZW5kIiwic2V0Iiwic2VhcmNoTG9hZGluZyIsInZlcnRpY2FsU2VhcmNoIiwiZ2V0U3RhdGUiLCJfaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQiLCJ0cmFuc2Zvcm1WZXJ0aWNhbCIsIm1lcmdlZFJlc3VsdHMiLCJ1bml2ZXJzYWxTZWFyY2giLCJ0cmFuc2Zvcm0iLCJuYW1lc3BhY2UiLCJxdWVyeVVuaXZlcnNhbCIsInF1ZXJ5VmVydGljYWwiLCJxdWVyeUZpbHRlciIsInN1Ym1pdFF1ZXN0aW9uIiwic3VibWl0dGVkIiwiZXZ0IiwiY2IiLCJvbiIsIkNvbXBvbmVudE1hbmFnZXIiLCJzZXRJbnN0YW5jZSIsImdldEluc3RhbmNlIiwiX2NvbXBvbmVudFJlZ2lzdHJ5IiwiX2FjdGl2ZUNvbXBvbmVudHMiLCJfY29yZSIsIl9yZW5kZXJlciIsIl9hbmFseXRpY3NSZXBvcnRlciIsInJlbmRlcmVyIiwiY29yZSIsInJlcG9ydGVyIiwiY29tcG9uZW50Q2xhenoiLCJ0eXBlIiwiY29tcG9uZW50VHlwZSIsImFuYWx5dGljc1JlcG9ydGVyIiwiY29tcG9uZW50TWFuYWdlciIsImNvbXBvbmVudENsYXNzIiwiYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkIiwic29tZSIsImMiLCJpbml0Iiwic2V0U3RhdGUiLCJvZmYiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJmaW5kIiwiY29uc3RydWN0b3IiLCJpbnN0YW5jZSIsIlJlbmRlcmVyIiwidGVtcGxhdGUiLCJIYW5kbGViYXJzUmVuZGVyZXIiLCJ0ZW1wbGF0ZXMiLCJfaGFuZGxlYmFycyIsIl9oYiIsIl90ZW1wbGF0ZXMiLCJfcmVnaXN0ZXJDdXN0b21IZWxwZXJzIiwicmVnaXN0ZXJIZWxwZXIiLCJjb21waWxlIiwidGVtcGxhdGVOYW1lIiwiZSIsImFyZzEiLCJhcmcyIiwiZm4iLCJpbnZlcnNlIiwicGhvbmVOdW1iZXJTdHJpbmciLCJjbGVhbmVkIiwiaW50bENvZGUiLCJhcmdzIiwiYXJndW1lbnRzIiwicm9vdCIsInYiLCJSZW5kZXJlcnMiLCJTT1kiLCJIYW5kbGViYXJzIiwiZG9jdW1lbnQiLCJET00iLCJkIiwicCIsImh0bWwiLCJjb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiZnJhZyIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwiYXBwZW5kQ2hpbGQiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJwYXJlbnQiLCJzZWxlY3RvciIsIkhUTUxFbGVtZW50IiwiV2luZG93IiwiSFRNTERvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZWFkeVN0YXRlIiwiZWwiLCJvcHRzX2RhdGEiLCJub2RlIiwicHJvcHMiLCJhZGRDbGFzcyIsImluc2VydEFkamFjZW50SFRNTCIsImNsYXNzTmFtZSIsImNsYXNzZXMiLCJsZW4iLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJzdHlsZXMiLCJwcm9wIiwic3R5bGUiLCJhdHRyIiwic2V0QXR0cmlidXRlIiwiYXR0cnMiLCJlbnRyaWVzIiwic2V0dGluZ3MiLCJFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjdHh0IiwidGFyZ2V0IiwiaXNFcXVhbE5vZGUiLCJtYXRjaGVzIiwicGFyZW50Tm9kZSIsIkV2ZW50RW1pdHRlciIsIl9saXN0ZW5lcnMiLCJvbmNlIiwibGlzdGVuZXJzIiwia2VlcCIsIlN0YXRlIiwiX3N0YXRlIiwib3B0VmFsIiwiX3NldCIsImVtaXQiLCJvcHRQcm9wIiwiQW5hbHl0aWNzRXZlbnQiLCJldmVudFR5cGUiLCJ0b1VwcGVyQ2FzZSIsIkFuYWx5dGljc1JlcG9ydGVyIiwiYnVzaW5lc3NJZCIsImdsb2JhbE9wdGlvbnMiLCJfYnVzaW5lc3NJZCIsIl9nbG9iYWxPcHRpb25zIiwic2V0UXVlcnlJZCIsImFkZE9wdGlvbnMiLCJiZWFjb24iLCJ0b0FwaUV2ZW50IiwiTW9kdWxlRGF0YSIsIl9pZCIsIl9oaXN0b3J5IiwiX2RhdGEiLCJuZXdEYXRhIiwiY2FwdHVyZVByZXZpb3VzIiwic2hpZnQiLCJwcmV2aW91cyIsIl9wcmV2aW91cyIsInBvcCIsIkdsb2JhbFN0b3JhZ2UiLCJfbW9kdWxlRGF0YUNvbnRhaW5lciIsIl9mdXR1cmVMaXN0ZW5lcnMiLCJfaW5pdERhdGFDb250YWluZXIiLCJfYXBwbHlGdXR1cmVMaXN0ZW5lcnMiLCJkYXRhS2V5Iiwic3RhcnRzV2l0aCIsIm1vZHVsZURhdGEiLCJmdXR1cmVzIiwiZnV0dXJlIiwiQ29tcG9uZW50IiwiX2NvbmZpZyIsIl90eXBlIiwiX3BhcmVudCIsIl9jaGlsZHJlbiIsInN0YXRlIiwiX2FuYWx5dGljc09wdGlvbnMiLCJhbmFseXRpY3NPcHRpb25zIiwiX2NvbnRhaW5lciIsImNyZWF0ZUVsIiwiY2xhc3MiLCJzdWJzdHJpbmciLCJfY2xhc3NOYW1lIiwiX3JlbmRlciIsInJlbmRlciIsIl90ZW1wbGF0ZSIsIl90ZW1wbGF0ZU5hbWUiLCJkZWZhdWx0VGVtcGxhdGVOYW1lIiwiX2lzTW91bnRlZCIsInRyYW5zZm9ybURhdGEiLCJvbkNyZWF0ZSIsIm9uTW91bnQiLCJvblVwZGF0ZSIsIm1vdW50IiwibmV3U3RhdGUiLCJjaGlsZENvbXBvbmVudCIsImNyZWF0ZSIsIl9wYXJlbnRPcHRzIiwicmVtb3ZlIiwidW5Nb3VudCIsImVtcHR5IiwiYmVmb3JlTW91bnQiLCJhc0pTT04iLCJfb25Nb3VudCIsImRvbUhvb2tzIiwicXVlcnlBbGwiLCJfY3JlYXRlQW5hbHl0aWNzSG9vayIsImJpbmQiLCJjaGlsZCIsImJlZm9yZVJlbmRlciIsImRvbUNvbXBvbmVudHMiLCJfY3JlYXRlU3ViY29tcG9uZW50IiwiYWZ0ZXJSZW5kZXIiLCJkb21Db21wb25lbnQiLCJkYXRhc2V0IiwiY2hpbGREYXRhIiwiYWRkQ2hpbGQiLCJjaGlsZEhUTUwiLCJpc0FuYWx5dGljc0F0dGFjaGVkIiwiZXZlbnR0eXBlIiwiZXZlbnRsYWJlbCIsImV2ZW50b3B0aW9ucyIsInJlcG9ydCIsIlRhYiIsImNvbmZpZ0lkIiwiaXNGaXJzdCIsImlzQWN0aXZlIiwidGFic0NvbmZpZyIsInRhYnMiLCJ0YWIiLCJOYXZpZ2F0aW9uQ29tcG9uZW50IiwiX3RhYnMiLCJfdGFiT3JkZXIiLCJnZXREZWZhdWx0VGFiT3JkZXIiLCJnZXRVcmxQYXJhbXMiLCJfbGlzdGVuZXJzVG9UZWFyRG93biIsIl9tcWwiLCJtYXRjaE1lZGlhIiwibWVyZ2VUYWJPcmRlciIsImdlbmVyYXRlVGFiVXJsIiwiaW5jbHVkZXMiLCJ1bnNoaWZ0Iiwib3RoZXJUYWJPcmRlciIsInRhYkNvbmZpZyIsInBhcmVudEVsIiwibmF2SXRlbUVscyIsIm1vZGFsRWwiLCJtb3JlQnV0dG9uRWwiLCJwYXJlbnRXaWR0aCIsIm9mZnNldFdpZHRoIiwibW9yZUJ1dHRvbldpZHRoIiwiZWxzVG9Nb3ZlIiwibmF2SXRlbUVsIiwiY2hpbGRQb3MiLCJvZmZzZXRMZWZ0IiwiY2hpbGRXaWR0aCIsInRvZ2dsZSIsImNsb3NlTW9kYWxDbGlja0xpc3RlbmVyIiwiZGlzcGxheSIsImJyZWFrcG9pbnRDaGFuZ2UiLCJhZGRMaXN0ZW5lciIsImxpc3RlbmVyIiwiRmlsdGVyIiwicmVzcG9uc2VGaWx0ZXIiLCJncm91cHMiLCJncm91cEZpbHRlcnMiLCJmaWVsZCIsIm9yIiwiYW5kIiwiX2Zyb21NYXRjaGVyIiwibWluIiwibGF0IiwibG5nIiwicmFkaXVzIiwibWF0Y2hlciIsIlNlYXJjaENvbXBvbmVudCIsIl9iYXJLZXkiLCJfdmVydGljYWxLZXkiLCJfZm9ybUVsIiwiZm9ybVNlbGVjdG9yIiwiX2lucHV0RWwiLCJpbnB1dEVsIiwibGFiZWxUZXh0Iiwic3VibWl0VGV4dCIsInN1Ym1pdEljb24iLCJwcm9tcHRIZWFkZXIiLCJhdXRvRm9jdXMiLCJyZWRpcmVjdFVybCIsInEiLCJfc2VhcmNoQ29vbGRvd24iLCJzZWFyY2hDb29sZG93biIsInNldFF1ZXJ5IiwiaW5pdFNlYXJjaCIsImluaXRBdXRvQ29tcGxldGUiLCJmb2N1cyIsImZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJibHVyIiwiaW5wdXRTZWxlY3RvciIsIl9hdXRvY29tcGxldGUiLCJvcmlnaW5hbFF1ZXJ5Iiwib25TdWJtaXQiLCJ0cmlnZ2VyIiwiX3Rocm90dGxlZCIsInNldFRpbWVvdXQiLCJhbGxGaWx0ZXJzIiwiZ2V0QWxsIiwidG90YWxGaWx0ZXIiLCJnZXRBY3RpdmVDb21wb25lbnQiLCJGaWx0ZXJTZWFyY2hDb21wb25lbnQiLCJpbnB1dEtleSIsIl9zdG9yZU9uQ2hhbmdlIiwic3RvcmVPbkNoYW5nZSIsInNlYXJjaFRleHQiLCJpc0ZpbHRlclNlYXJjaCIsIm9yaWdpbmFsRmlsdGVyIiwiZnJvbVJlc3BvbnNlIiwic2V0RmlsdGVyIiwiS2V5cyIsIkJBQ0tTUEFDRSIsIlRBQiIsIkVOVEVSIiwiU0hJRlQiLCJDVFJMIiwiQUxUIiwiRVNDQVBFIiwiTEVGVCIsIlJJR0hUIiwiVVAiLCJET1dOIiwiTEVGVF9PU19LRVkiLCJSSUdIVF9PU19LRVkiLCJTRUxFQ1RfS0VZIiwiQXV0b0NvbXBsZXRlQ29tcG9uZW50IiwiX2F1dG9jb21wbGV0ZUVscyIsImF1dG9Db21wbGV0ZUVscyIsIl9vcmlnaW5hbFF1ZXJ5IiwiX3NlY3Rpb25JbmRleCIsIl9yZXN1bHRJbmRleCIsIl9vblN1Ym1pdCIsImhhc1Jlc3VsdHMiLCJzZWN0aW9uSW5kZXgiLCJyZXN1bHRJbmRleCIsInF1ZXJ5SW5wdXQiLCJhdHRyaWJ1dGVzIiwiYXV0b2NvbXBsZXRlIiwiYXV0b2NvcnJlY3QiLCJzcGVsbGNoZWNrIiwiY2xvc2UiLCJyZXNldCIsImF1dG9Db21wbGV0ZSIsImhhbmRsZU5hdmlnYXRlUmVzdWx0cyIsImtleUNvZGUiLCJoYW5kbGVTdWJtaXRSZXN1bHQiLCJkZWxlZ2F0ZSIsInNob3J0IiwidXBkYXRlUXVlcnkiLCJoYW5kbGVUeXBpbmciLCJ1cGRhdGVTdGF0ZSIsIm9wdFZhbHVlIiwicXVlcnlFbCIsImlnbm9yZWRLZXlzIiwiYXV0b0NvbXBsZXRlRmlsdGVyIiwiYXV0b0NvbXBsZXRlVmVydGljYWwiLCJhdXRvQ29tcGxldGVVbml2ZXJzYWwiLCJGYWNldCIsImZsYXRGaWx0ZXJzIiwiZmxhdE1hcCIsIiRvciIsIkZpbHRlckJveENvbXBvbmVudCIsIl9maWx0ZXJDb25maWdzIiwiX3NlYXJjaE9uQ2hhbmdlIiwic2VhcmNoT25DaGFuZ2UiLCJfYXBwbHlCdXR0b25TZWxlY3RvciIsImFwcGx5QnV0dG9uU2VsZWN0b3IiLCJfZmlsdGVyQ29tcG9uZW50cyIsIl9maWx0ZXJzIiwiX2lzRHluYW1pYyIsImlzRHluYW1pYyIsImZpbHRlckNvbmZpZ3MiLCJzaG93QXBwbHlCdXR0b24iLCJvbkNoYW5nZSIsIm9uRmlsdGVyQ2hhbmdlIiwiZ2V0RmlsdGVyIiwiYnV0dG9uIiwiX3NhdmVGaWx0ZXJzVG9TdG9yYWdlIiwiX3NlYXJjaCIsInZhbGlkRmlsdGVycyIsImNvbWJpbmVkRmlsdGVyIiwiZnJvbUZpbHRlcnMiLCJzZXRGYWNldEZpbHRlciIsIlNVUFBPUlRFRF9DT05UUk9MUyIsIkZpbHRlck9wdGlvbnNDb21wb25lbnQiLCJjb250cm9sIiwic2VsZWN0ZWRPcHRpb25zIiwiX29wdGlvbnMiLCJfY29udHJvbCIsIl9vcHRpb25TZWxlY3RvciIsIm9wdGlvblNlbGVjdG9yIiwiX29uQ2hhbmdlIiwiX2xhYmVsIiwidG9Mb3dlckNhc2UiLCJfdXBkYXRlT3B0aW9uIiwicGFyc2VJbnQiLCJjaGVja2VkIiwiX2J1aWxkRmlsdGVyIiwiZWxlbWVudHMiLCJfYXBwbHlGaWx0ZXIiLCJlcXVhbCIsImdyb3VwIiwiUmFuZ2VGaWx0ZXJDb21wb25lbnQiLCJfZmllbGQiLCJtaW5WYWwiLCJtYXhWYWwiLCJfcmFuZ2UiLCJpbml0aWFsTWluIiwiaW5pdGlhbE1heCIsIl90aXRsZSIsIl9taW5MYWJlbCIsIm1pbkxhYmVsIiwiX21heExhYmVsIiwibWF4TGFiZWwiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwiX3VwZGF0ZVJhbmdlIiwiaW5jbHVzaXZlUmFuZ2UiLCJEYXRlUmFuZ2VGaWx0ZXJDb21wb25lbnQiLCJfaXNFeGNsdXNpdmUiLCJpc0V4Y2x1c2l2ZSIsInRvZGF5IiwiRGF0ZSIsInRvZGF5U3RyaW5nIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsInBhZFN0YXJ0IiwiZ2V0RGF0ZSIsIm1pbkRhdGUiLCJtYXhEYXRlIiwiX2RhdGUiLCJkYXRlTWluIiwiZGF0ZU1heCIsImRhdGUiLCJleGNsdXNpdmVSYW5nZSIsIkR5bmFtaWNGaWx0ZXJzQ29tcG9uZW50IiwiX2ZpZWxkQ29udHJvbHMiLCJmaWVsZENvbnRyb2xzIiwiX2ZpbHRlcmJveCIsImVuYWJsZUR5bmFtaWNGaWx0ZXJzIiwiTUVURVJTX1BFUl9NSUxFIiwiREVGQVVMVF9DT05GSUciLCJnZW9CdXR0b25JY29uIiwiZ2VvQnV0dG9uVGV4dCIsImVuYWJsZWRUZXh0IiwibG9hZGluZ1RleHQiLCJlcnJvclRleHQiLCJidXR0b25TZWxlY3RvciIsIkdlb0xvY2F0aW9uQ29tcG9uZW50IiwicGxhY2Vob2xkZXIiLCJfZW5hYmxlZCIsImdlb0xvYWRpbmciLCJnZW9FcnJvciIsImdlb0VuYWJsZWQiLCJnZW9WYWx1ZSIsImdlb1BsYWNlaG9sZGVyIiwiX2luaXRBdXRvQ29tcGxldGUiLCJfdG9nZ2xlR2VvRmlsdGVyIiwiX3NhdmVEYXRhVG9TdG9yYWdlIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsImRlbGV0ZSIsImNvb3JkcyIsImFjY3VyYWN5IiwiTWF0aCIsIkV2ZW50VHlwZXMiLCJUSFVNQlNfVVAiLCJUSFVNQlNfRE9XTiIsIkRpcmVjdEFuc3dlckNvbXBvbmVudCIsImZvcm1FbCIsIl90aHVtYnNVcFNlbGVjdG9yIiwidGh1bWJzVXBTZWxlY3RvciIsIl90aHVtYnNEb3duU2VsZWN0b3IiLCJ0aHVtYnNEb3duU2VsZWN0b3IiLCJfdmlld0RldGFpbHNUZXh0Iiwidmlld0RldGFpbHNUZXh0IiwiaGFzU3RhdGUiLCJjaGVja2VkVmFsdWUiLCJyZXBvcnRRdWFsaXR5IiwiZXZlbnRPcHRpb25zIiwicmVsYXRlZEl0ZW0iLCJzZWFyY2hlciIsImN0YUxhYmVsIiwiaXNHb29kIiwiUmVzdWx0c0l0ZW1Db21wb25lbnQiLCJfdmVydGljYWxDb25maWdJZCIsIl9pc1VuaXZlcnNhbCIsImlzVW5pdmVyc2FsIiwiTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCIsIkV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQiLCJQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCIsIk1hcFByb3ZpZGVyIiwiX2hlaWdodCIsImhlaWdodCIsIl93aWR0aCIsIndpZHRoIiwiX3pvb20iLCJ6b29tIiwiX2RlZmF1bHRQb3NpdGlvbiIsImRlZmF1bHRQb3NpdGlvbiIsIl9zaG93RW1wdHlNYXAiLCJzaG93RW1wdHlNYXAiLCJfbWFwIiwiX2lzTG9hZGVkIiwiX29uUGluQ2xpY2siLCJvblBpbkNsaWNrIiwiX29uTG9hZGVkIiwib25Mb2FkZWQiLCJfcGluQ29uZmlnIiwicGluIiwiREVGQVVMVF9QSU5fQ09ORklHIiwiaXNMb2FkZWQiLCJtYXBEYXRhIiwibWFya2VycyIsImxvY2F0aW9uVG9JdGVtIiwibSIsImNvbGxhcHNlZE1hcmtlcnMiLCJjb2xsYXBzZWRNYXJrZXIiLCJpY29uIiwiYW5jaG9yIiwic3ZnIiwic2NhbGVkU2l6ZSIsImxhYmVsVHlwZSIsIkdvb2dsZU1hcFByb3ZpZGVyIiwiX2NsaWVudElkIiwiY2xpZW50SWQiLCJfc2lnbmF0dXJlIiwic2lnbmF0dXJlIiwiaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscyIsIm9uTG9hZCIsInNjcmlwdCIsIm9ubG9hZCIsImFzeW5jIiwic3JjIiwiZ2VuZXJhdGVDcmVkZW50aWFscyIsImdvb2dsZU1hcE1hcmtlckNvbmZpZ3MiLCJHb29nbGVNYXBNYXJrZXJDb25maWciLCJlbmNvZGVkTWFya2VycyIsInNlcmlhbGl6ZSIsIl9pc1N0YXRpYyIsImNzcyIsImdvb2dsZSIsIm1hcHMiLCJNYXAiLCJib3VuZHMiLCJMYXRMbmdCb3VuZHMiLCJfY29sbGFwc2VNYXJrZXJzIiwibWFya2VyIiwiTWFya2VyIiwiZXh0ZW5kIiwiZml0Qm91bmRzIiwic2V0Q2VudGVyIiwiTGF0TG5nIiwic2VyaWFsaXplZE1hcmtlcnMiLCJwaW5Db25maWciLCJwaW5Db25maWdPYmoiLCJQb2ludCIsIngiLCJ5IiwiU2l6ZSIsInciLCJoIiwiTWFwQm94TWFwUHJvdmlkZXIiLCJtYXBib3hnbCIsImFjY2Vzc1Rva2VuIiwicmVsIiwibWFwYm94TWFwTWFya2VyQ29uZmlncyIsIk1hcEJveE1hcmtlckNvbmZpZyIsImNlbnRlciIsIm1hcENlbnRlciIsImdldENlbnRlck1hcmtlciIsIndyYXBwZXIiLCJMbmdMYXQiLCJzZXRMbmdMYXQiLCJhZGRUbyIsImdldEVsZW1lbnQiLCJzdGF0aWNNYXBQaW4iLCJQcm92aWRlclR5cGVzIiwiTWFwQ29tcG9uZW50IiwiX21hcFByb3ZpZGVyIiwibWFwUHJvdmlkZXIiLCJpc1N0YXRpYyIsImdldFByb3ZpZGVySW5zdGFuY2UiLCJzZXRUZW1wbGF0ZSIsImdlbmVyYXRlU3RhdGljIiwibG9hZEpTIiwiUmVzdWx0VHlwZSIsIkVWRU5UIiwiTE9DQVRJT04iLCJQRU9QTEUiLCJSZXN1bHRzQ29tcG9uZW50IiwiX2l0ZW1Db25maWciLCJnbG9iYWwiLCJyZW5kZXJJdGVtIiwiaXRlbVRlbXBsYXRlIiwic2V0U2VhcmNoTGltaXQiLCJjb25maWd1cmVJdGVtIiwiaXNQcmVTZWFyY2giLCJpc1NlYXJjaExvYWRpbmciLCJpc1NlYXJjaENvbXBsZXRlIiwiaW5jbHVkZU1hcCIsIm1hcENvbmZpZyIsInNldEl0ZW1SZW5kZXIiLCJzZXRJdGVtVGVtcGxhdGUiLCJjbGF6eiIsImdldEl0ZW1Db21wb25lbnQiLCJjb21wIiwibmV3T3B0cyIsImdsb2JhbENvbmZpZyIsIml0ZW1Db25maWciLCJoYXNHbG9iYWxSZW5kZXIiLCJoYXNHbG9iYWxUZW1wbGF0ZSIsInNldFJlbmRlciIsIkFjY29yZGlvblJlc3VsdHNDb21wb25lbnQiLCJfc2VsZWN0b3JCYXNlIiwic2VsZWN0b3JCYXNlIiwiY29sbGFwc2VkQ2xhc3MiLCJhY2NvcmRpb25FbHMiLCJhY2NvcmRpb25FbCIsInRvZ2dsZUVsIiwidG9nZ2xlU2VsZWN0b3IiLCJjb250ZW50RWwiLCJib2R5U2VsZWN0b3IiLCJjaGFuZ2VIZWlnaHQiLCJoYW5kbGVDbGljayIsIndyYXBwZXJFbCIsImlzQ29sbGFwc2VkIiwiY29udGFpbnMiLCJ0YXJnZXRFbCIsInNjcm9sbEhlaWdodCIsImJ1aWxkU2VsZWN0b3IiLCJVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50IiwiX2xpbWl0IiwiZ2V0Q2hpbGRDb25maWciLCJ1c2VBY2NvcmRpb24iLCJkZWZhdWx0Q29uZmlnIiwiUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IiwidmFsaWRhdGVDb25maWciLCJiaW5kQW5hbHl0aWNzIiwiYmluZEZvcm1TdWJtaXQiLCJxdWVzdGlvblRleHRFbCIsImZvcm1EYXRhIiwidmFsaWRhdGVSZXF1aXJlZCIsImxhbmd1YWdlIiwiaW5wdXRGaWVsZHMiLCJvYmoiLCJTVkdJY29uIiwicGF0aCIsImNvbXBsZXhDb250ZW50cyIsInZpZXdCb3giLCJjb250ZW50cyIsInBhdGhEZWZpbml0aW9uIiwiaWNvbnNBcnJheSIsInRodW1iSWNvbiIsInJlY2VpcHRJY29uIiwicGFudGhlb25JY29uIiwibWljSWNvbiIsImRpcmVjdGlvbnNJY29uIiwiY2FsZW5kYXJJY29uIiwiY2FsbG91dEljb24iLCJpbmZvSWNvbiIsImJyaWVmY2FzZUljb24iLCJrYWJvYkljb24iLCJwZXJzb25JY29uIiwibWFnbmlmeWluZ0dsYXNzSWNvbiIsIm9mZmljZUljb24iLCJsaW5rSWNvbiIsIndpbmRvd0ljb24iLCJwaG9uZUljb24iLCJ0YWdJY29uIiwiZG9jdW1lbnRJY29uIiwiY2hldnJvbkljb24iLCJzdXBwb3J0SWNvbiIsInlleHRJY29uIiwicGluSWNvbiIsImdlYXJJY29uIiwibGlnaHRCdWxiSWNvbiIsIkljb25zIiwibWFya3VwIiwiZGVmYXVsdCIsInN0YXJJY29uIiwiSWNvbkNvbXBvbmVudCIsImljb25OYW1lIiwiY3VzdG9tSWNvbiIsImljb25VcmwiLCJDT01QT05FTlRfTUFOQUdFUiIsInJlZ2lzdGVyIiwiVGVtcGxhdGVMb2FkZXIiLCJfdGVtcGxhdGVVcmwiLCJ0ZW1wbGF0ZVVybCIsIl9pbml0IiwiZmV0Y2hUZW1wbGF0ZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiRXJyb3JSZXBvcnRlciIsImVyciIsInRvSnNvbiIsIlBlcnNpc3RlbnRTdG9yYWdlIiwiX2hpc3RvcnlUaW1lciIsIl91cGRhdGVMaXN0ZW5lciIsInVwZGF0ZUxpc3RlbmVyIiwiX3Jlc2V0TGlzdGVuZXIiLCJyZXNldExpc3RlbmVyIiwib25wb3BzdGF0ZSIsIl9jYWxsTGlzdGVuZXIiLCJfdXBkYXRlSGlzdG9yeSIsImNsZWFyVGltZW91dCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJhbGxQYXJhbXMiLCJwYXJzZWRWYWwiLCJBbnN3ZXJzIiwiY29tcG9uZW50cyIsIl9vblJlYWR5Iiwib25TdGF0ZUNoYW5nZSIsInNldEFsbCIsInN1YnN0ciIsInNldENvcmUiLCJzZXRSZW5kZXJlciIsInNldEFuYWx5dGljc1JlcG9ydGVyIiwib25SZWFkeSIsInVzZVRlbXBsYXRlcyIsInRlbXBsYXRlQnVuZGxlIiwic3VwcHJlc3NFcnJvclJlcG9ydHMiLCJfZXJyb3JSZXBvcnRlciIsIkFOU1dFUlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBOztFQUVBOztFQUVBOzs7RUFHQSxJQUFNQSxPQUFPLEdBQUc7RUFDZEMsRUFBQUEsR0FBRyxFQUFFLEtBRFM7RUFFZEMsRUFBQUEsSUFBSSxFQUFFLE1BRlE7RUFHZEMsRUFBQUEsR0FBRyxFQUFFLEtBSFM7RUFJZEMsRUFBQUEsTUFBTSxFQUFFO0VBSk0sQ0FBaEI7RUFPQTs7Ozs7O01BS3FCQzs7Ozs7Ozs7OztFQUNuQjs7Ozs7OzBCQU1LQyxLQUFLQyxNQUFNQyxNQUFNO0VBQ3BCLGFBQU8sS0FBS0MsT0FBTCxDQUFhVCxPQUFPLENBQUNDLEdBQXJCLEVBQTBCLEtBQUtTLFlBQUwsQ0FBa0JKLEdBQWxCLEVBQXVCQyxJQUF2QixDQUExQixFQUF3REMsSUFBeEQsQ0FBUDtFQUNEO0VBRUQ7Ozs7Ozs7OzsyQkFNTUYsS0FBS0MsTUFBTUMsTUFBTTtFQUNyQixhQUFPLEtBQUtDLE9BQUwsQ0FDTFQsT0FBTyxDQUFDRSxJQURILEVBRUxJLEdBRkssRUFHTEssTUFBTSxDQUFDQyxNQUFQLENBQWM7RUFDWkMsUUFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVIsSUFBZixDQURNO0VBRVpTLFFBQUFBLFdBQVcsRUFBRUM7RUFGRCxPQUFkLEVBR0dU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