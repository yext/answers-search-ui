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
  var LIB_VERSION = 'v0.8.2';
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
        }); // Invert highlighted substrings

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

          if (val.length > nextOffset) {
            invertedSubstrings.push({
              offset: nextOffset,
              length: i < matchedSubstrings.length - 1 ? matchedSubstrings[i + 1].offset - nextOffset : val.length - nextOffset
            });
          }
        } // Build our new value based on the highlights


        var highlightedValue = '';
        var nextStart = 0;

        for (var j = 0; j < invertedSubstrings.length; j++) {
          var start = Number(invertedSubstrings[j].offset);
          var end = start + invertedSubstrings[j].length;
          highlightedValue += [val.slice(nextStart, start), '<strong>', val.slice(start, end), '</strong>'].join('');

          if (j === invertedSubstrings.length - 1 && end < val.length) {
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
       * @returns {Result[]}
       */
      value: function from(resultsData, formatters, verticalId) {
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

          if (data.htmlSnippet || data.htmlTitle) {
            results.push(ResultFactory.fromGoogleCustomSearchEngine(data));
            return "continue";
          }

          results.push(ResultFactory.fromGeneric(data, formattedData, i));
        };

        for (var i = 0; i < resultsData.length; i++) {
          var _ret = _loop(i);

          if (_ret === "continue") continue;
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
      this.results = ResultFactory.from(data.results, formatters, this.verticalConfigId);
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
        var formatters = arguments.length > 2 ? arguments[2] : undefined;
        var response = data.response;
        return _ref = {}, _defineProperty(_ref, StorageKeys.QUERY_ID, response.queryId), _defineProperty(_ref, StorageKeys.NAVIGATION, Navigation.from(response.modules)), _defineProperty(_ref, StorageKeys.DIRECT_ANSWER, DirectAnswer.from(response.directAnswer, formatters)), _defineProperty(_ref, StorageKeys.UNIVERSAL_RESULTS, UniversalResults.from(response, urls, formatters)), _ref;
      }
    }, {
      key: "transformVertical",
      value: function transformVertical(data, formatters) {
        var _ref2;

        return _ref2 = {}, _defineProperty(_ref2, StorageKeys.QUERY_ID, data.response.queryId), _defineProperty(_ref2, StorageKeys.NAVIGATION, new Navigation()), _defineProperty(_ref2, StorageKeys.VERTICAL_RESULTS, VerticalResults.from(data.response, formatters)), _defineProperty(_ref2, StorageKeys.DYNAMIC_FILTERS, DynamicFilters.from(data.response)), _ref2;
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
          return SearchDataTransformer.transformVertical(response, _this._fieldFormatters);
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
          return SearchDataTransformer.transform(response, urls, _this2._fieldFormatters);
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


        var _arr = Object.keys(data);

        for (var _i = 0; _i < _arr.length; _i++) {
          var key = _arr[_i];

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
        var _arr = Object.entries(data);

        for (var _i = 0; _i < _arr.length; _i++) {
          var _arr$_i = _slicedToArray(_arr[_i], 2),
              key = _arr$_i[0],
              val = _arr$_i[1];

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
      return _this;
    }

    _createClass(SearchComponent, [{
      key: "onCreate",
      value: function onCreate() {
        if (this.query) {
          this.core.setQuery(this.query);
          this.search(this.query);
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

        if (this.autoFocus === true && this.query.length === 0 && this.autocompleteOnLoad) {
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
          autoFocus: this.autoFocus && !this.autocompleteOnLoad,
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
       * Whether the input is autocomatically focused or not
       * @type {boolean}
       */

      _this._autoFocus = opts.autoFocus || false;
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
        });

        if (this._autoFocus) {
          DOM.once(queryInput, 'click', function () {
            _this2.autoComplete(queryInput.value);
          });
        } // Allow the user to select a result with the mouse


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

      _classCallCheck(this, FilterOptionsComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterOptionsComponent).call(this, config));

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

            allParams[key] = val;
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
          fieldFormatters: config.fieldFormatters,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2Vycy11bWQuanMiLCJzb3VyY2VzIjpbInNyYy9jb3JlL2h0dHAvaHR0cHJlcXVlc3Rlci5qcyIsInNyYy9jb3JlL2NvbnN0YW50cy5qcyIsInNyYy91aS9kb20vc2VhcmNocGFyYW1zLmpzIiwic3JjL2NvcmUvaHR0cC9hcGlyZXF1ZXN0LmpzIiwic3JjL2NvcmUvZXJyb3JzL2Vycm9ycy5qcyIsInNyYy9jb3JlL3NlYXJjaC9zZWFyY2hhcGkuanMiLCJzcmMvY29yZS9tb2RlbHMvYXV0b2NvbXBsZXRlZGF0YS5qcyIsInNyYy9jb3JlL3NlYXJjaC9hdXRvY29tcGxldGVkYXRhdHJhbnNmb3JtZXIuanMiLCJzcmMvY29yZS9zZWFyY2gvYXV0b2NvbXBsZXRlYXBpLmpzIiwic3JjL2NvcmUvc2VhcmNoL3F1ZXN0aW9uYW5zd2VyYXBpLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9zZWFyY2hzdGF0ZXMuanMiLCJzcmMvY29yZS9tb2RlbHMvcmVzdWx0LmpzIiwic3JjL2NvcmUvbW9kZWxzL3Jlc3VsdGZhY3RvcnkuanMiLCJzcmMvY29yZS9tb2RlbHMvc2VjdGlvbi5qcyIsInNyYy9jb3JlL21vZGVscy91bml2ZXJzYWxyZXN1bHRzLmpzIiwic3JjL2NvcmUvbW9kZWxzL2RpcmVjdGFuc3dlci5qcyIsInNyYy9jb3JlL21vZGVscy9uYXZpZ2F0aW9uLmpzIiwic3JjL2NvcmUvbW9kZWxzL3ZlcnRpY2FscmVzdWx0cy5qcyIsInNyYy9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMuanMiLCJzcmMvY29yZS9tb2RlbHMvZHluYW1pY2ZpbHRlcnMuanMiLCJzcmMvY29yZS9zZWFyY2gvc2VhcmNoZGF0YXRyYW5zZm9ybWVyLmpzIiwic3JjL2NvcmUvbW9kZWxzL3F1ZXN0aW9uc3VibWlzc2lvbi5qcyIsInNyYy9jb3JlL2NvcmUuanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnRtYW5hZ2VyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9yZW5kZXJlci5qcyIsInNyYy91aS9yZW5kZXJpbmcvaGFuZGxlYmFyc3JlbmRlcmVyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9jb25zdC5qcyIsInNyYy91aS9kb20vZG9tLmpzIiwic3JjL2NvcmUvZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL3N0YXRlLmpzIiwic3JjL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50LmpzIiwic3JjL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc3JlcG9ydGVyLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9tb2R1bGVkYXRhLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9nbG9iYWxzdG9yYWdlLmpzIiwic3JjL2NvcmUvaW5kZXguanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb25jb21wb25lbnQuanMiLCJzcmMvY29yZS9tb2RlbHMvZmlsdGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3NlYXJjaC9maWx0ZXJzZWFyY2hjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9zZWFyY2gvYXV0b2NvbXBsZXRlY29tcG9uZW50LmpzIiwic3JjL2NvcmUvbW9kZWxzL2ZhY2V0LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJib3hjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcm9wdGlvbnNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL3JhbmdlZmlsdGVyY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9kYXRlcmFuZ2VmaWx0ZXJjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2R5bmFtaWNmaWx0ZXJzY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9nZW9sb2NhdGlvbmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvZGlyZWN0YW5zd2VyY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvbG9jYXRpb25yZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvZXZlbnRyZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvcGVvcGxlcmVzdWx0c2l0ZW1jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvcHJvdmlkZXJzL21hcHByb3ZpZGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL3Byb3ZpZGVycy9nb29nbGVtYXBwcm92aWRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9wcm92aWRlcnMvbWFwYm94bWFwcHJvdmlkZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvbWFwY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHRzY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9hY2NvcmRpb25yZXN1bHRzY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy91bml2ZXJzYWxyZXN1bHRzY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcXVlc3Rpb25zL3F1ZXN0aW9uc3VibWlzc2lvbmNvbXBvbmVudC5qcyIsInNyYy91aS9pY29ucy9pY29uLmpzIiwic3JjL3VpL2ljb25zL3RodW1iLmpzIiwic3JjL3VpL2ljb25zL3JlY2VpcHQuanMiLCJzcmMvdWkvaWNvbnMvcGFudGhlb24uanMiLCJzcmMvdWkvaWNvbnMvbWljLmpzIiwic3JjL3VpL2ljb25zL2RpcmVjdGlvbnMuanMiLCJzcmMvdWkvaWNvbnMvY2FsZW5kYXIuanMiLCJzcmMvdWkvaWNvbnMvY2FsbG91dC5qcyIsInNyYy91aS9pY29ucy9pbmZvLmpzIiwic3JjL3VpL2ljb25zL2JyaWVmY2FzZS5qcyIsInNyYy91aS9pY29ucy9rYWJvYi5qcyIsInNyYy91aS9pY29ucy9wZXJzb24uanMiLCJzcmMvdWkvaWNvbnMvbWFnbmlmeWluZ19nbGFzcy5qcyIsInNyYy91aS9pY29ucy9vZmZpY2UuanMiLCJzcmMvdWkvaWNvbnMvbGluay5qcyIsInNyYy91aS9pY29ucy93aW5kb3cuanMiLCJzcmMvdWkvaWNvbnMvcGhvbmUuanMiLCJzcmMvdWkvaWNvbnMvdGFnLmpzIiwic3JjL3VpL2ljb25zL2RvY3VtZW50LmpzIiwic3JjL3VpL2ljb25zL2NoZXZyb24uanMiLCJzcmMvdWkvaWNvbnMvc3VwcG9ydC5qcyIsInNyYy91aS9pY29ucy95ZXh0LmpzIiwic3JjL3VpL2ljb25zL3Bpbi5qcyIsInNyYy91aS9pY29ucy9nZWFyLmpzIiwic3JjL3VpL2ljb25zL2xpZ2h0X2J1bGIuanMiLCJzcmMvdWkvaWNvbnMvc3Rhci5qcyIsInNyYy91aS9pY29ucy9pbmRleC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ljb25zL2ljb25jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb25zdC5qcyIsInNyYy91aS9yZW5kZXJpbmcvdGVtcGxhdGVsb2FkZXIuanMiLCJzcmMvdWkvaW5kZXguanMiLCJzcmMvY29yZS9lcnJvcnMvZXJyb3JyZXBvcnRlci5qcyIsInNyYy91aS9zdG9yYWdlL3BlcnNpc3RlbnRzdG9yYWdlLmpzIiwic3JjL2Fuc3dlcnMtdW1kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAbW9kdWxlIEh0dHBSZXF1ZXN0ZXIgKi9cblxuLyogZ2xvYmFsIGZldGNoICovXG5cbi8qKlxuICogVHlwZXMgb2YgSFRUUCByZXF1ZXN0c1xuICovXG5jb25zdCBNZXRob2RzID0ge1xuICBHRVQ6ICdnZXQnLFxuICBQT1NUOiAncG9zdCcsXG4gIFBVVDogJ3B1dCcsXG4gIERFTEVURTogJ2RlbGV0ZSdcbn07XG5cbi8qKlxuICogSHR0cFJlcXVlc3RlciBpcyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb24gb2YgQUpBWFxuICogcmVsYXRlZCBtYXR0ZXJzLiBJdCdzIHVzZWQgdG8gbWFrZSBhbGwgdHlwZXMgb2YgbmV0d29yayByZXF1ZXN0c1xuICogYW5kIGV4cG9zZXMgYSBwcm9taXNlIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHR0cFJlcXVlc3RlciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBHRVQgSFRUUCByZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBwcm92aWRlIChnZXRzIGVuY29kZWQgaW50byB0aGUgVVJMKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBDb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgKi9cbiAgZ2V0ICh1cmwsIGRhdGEsIG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KE1ldGhvZHMuR0VULCB0aGlzLmVuY29kZVBhcmFtcyh1cmwsIGRhdGEpLCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBQT1NUIEhUVFAgcmVxdWVzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gcHJvdmlkZSAoZ2V0cyBlbmNvZGVkIGludG8gdGhlIFVSTClcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgQ29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICovXG4gIHBvc3QgKHVybCwgZGF0YSwgb3B0cykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXG4gICAgICBNZXRob2RzLlBPU1QsXG4gICAgICB1cmwsXG4gICAgICBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIGNyZWRlbnRpYWxzOiB1bmRlZmluZWRcbiAgICAgIH0sIG9wdHMpXG4gICAgKTtcbiAgfVxuXG4gIHJlcXVlc3QgKG1ldGhvZCwgdXJsLCBvcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICBtZXRob2QsXG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgfSwgb3B0cykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBiZWFjb24gdG8gdGhlIHByb3ZpZGVkIHVybCB3aGljaCB3aWxsIHNlbmQgYSBub24tYmxvY2tpbmcgcmVxdWVzdFxuICAgKiB0byB0aGUgc2VydmVyIHRoYXQgaXMgZ3VhcmFudGVlZCB0byBzZW5kIGJlZm9yZSBwYWdlIGxvYWQuIE5vIHJlc3BvbnNlIGlzIHJldHVybmVkLFxuICAgKiBzbyBiZWFjb25zIGFyZSBwcmltYXJpbHkgdXNlZCBmb3IgYW5hbHl0aWNzIHJlcG9ydGluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIHNlbmQgdGhlIGJlYWNvbiB0b1xuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSBUaGUgZGF0YSBwYXlsb2FkIHRvIHNlbmQgaW4gdGhlIGJlYWNvblxuICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSByZXF1ZXN0IGlzIHN1Y2Nlc3NmdWxseSBxdWV1ZWRcbiAgICovXG4gIGJlYWNvbiAodXJsLCBkYXRhKSB7XG4gICAgcmV0dXJuIG5hdmlnYXRvci5zZW5kQmVhY29uKHVybCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9XG5cbiAgZW5jb2RlUGFyYW1zICh1cmwsIHBhcmFtcykge1xuICAgIGxldCBoYXNQYXJhbSA9IHVybC5pbmRleE9mKCc/JykgPiAtMTtcblxuICAgIGxldCBzZWFyY2hRdWVyeSA9ICcnO1xuICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgIGlmICghaGFzUGFyYW0pIHtcbiAgICAgICAgaGFzUGFyYW0gPSB0cnVlO1xuICAgICAgICBzZWFyY2hRdWVyeSArPSAnPyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWFyY2hRdWVyeSArPSAnJic7XG4gICAgICB9XG5cbiAgICAgIHNlYXJjaFF1ZXJ5ICs9IGtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiB1cmwgKyBzZWFyY2hRdWVyeTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuLyoqIFRoZSBjdXJyZW50IGxpYiB2ZXJzaW9uLCByZXBvcnRlZCB3aXRoIGVycm9ycyBhbmQgYW5hbHl0aWNzICovXG5leHBvcnQgY29uc3QgTElCX1ZFUlNJT04gPSAndjAuOC4yJztcblxuLyoqIFRoZSBiYXNlIHVybCBmb3IgdGhlIGFwaSBiYWNrZW5kICovXG5leHBvcnQgY29uc3QgQVBJX0JBU0VfVVJMID0gJ2h0dHBzOi8vbGl2ZWFwaS55ZXh0LmNvbSc7XG5cbi8qKiBUaGUgZGVmYXVsdCB1cmwgZm9yIGNvbXBpbGVkIGNvbXBvbmVudCB0ZW1wbGF0ZXMgKi9cbmV4cG9ydCBjb25zdCBDT01QSUxFRF9URU1QTEFURVNfVVJMID0gYGh0dHBzOi8vYXNzZXRzLnNpdGVzY2RuLm5ldC9hbnN3ZXJzLyR7TElCX1ZFUlNJT059L2Fuc3dlcnN0ZW1wbGF0ZXMuY29tcGlsZWQubWluLmpzYDtcblxuLyoqIFRoZSBiYXNlIHVybCBmb3IgdGhlIGFuYWx5dGljcyBiYWNrZW5kICAqL1xuZXhwb3J0IGNvbnN0IEFOQUxZVElDU19CQVNFX1VSTCA9ICdodHRwczovL3JlYWx0aW1lYW5hbHl0aWNzLnlleHQuY29tJztcbiIsIi8qKiBAbW9kdWxlIFNlYXJjaFBhcmFtcyAqL1xuXG4vKiBnbG9iYWwgd2luZG93ICovXG5cbi8qKlxuICogU2VhcmNoUGFyYW1zIGlzIGEgY2xhc3MgdG8gZ2V0IHRoZSBzZWFyY2ggcGFyYW1zIGluIGEgVVJMLlxuICogSXQgaXMgYSByZXBsYWNlbWVudCBmb3IgVVJMLnNlYXJjaFBhcmFtcyBhbmQgVVJMU2VhcmNoUGFyYW1zIGZvciBicm93c2VycyBsaWtlIElFMTFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoUGFyYW1zIHtcbiAgY29uc3RydWN0b3IgKHVybCkge1xuICAgIC8qKlxuICAgICAqIE1hcHBpbmcgb2YgYWxsIHF1ZXJ5IHBhcmFtZXRlcnMgaW4gdGhlIGdpdmVuIHVybCwgcXVlcnkgcGFyYW0gLT4gdmFsdWVcbiAgICAgKiBPbmx5IHVzZWQgaWYgVVJMU2VhcmNoUGFyYW1zIGRvZXMgbm90IGV4aXN0IGluIHRoZSB3aW5kb3dcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcGFyYW1zID0ge307XG5cbiAgICBpZiAod2luZG93ICYmIHdpbmRvdy5VUkxTZWFyY2hQYXJhbXMpIHtcbiAgICAgIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BhcmFtcyA9IHRoaXMucGFyc2UodXJsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcGFyc2UgY3JlYXRlcyBhIG1hcHBpbmcgb2YgYWxsIHF1ZXJ5IHBhcmFtcyBpbiBhIGdpdmVuIHVybFxuICAgKiBUaGUgcXVlcnkgcGFyYW0gdmFsdWVzIGFyZSBkZWNvZGVkIGJlZm9yZSBiZWluZyBwdXQgaW4gdGhlIG1hcFxuICAgKiBUaHJlZSB0eXBlcyBvZiBpbnB1dCBhcmUgc3VwcG9ydGVkXG4gICAqICAgKDEpIGZ1bGwgVVJMIGUuZy4gaHR0cDovL3d3dy55ZXh0LmNvbS8/cT1oZWxsb1xuICAgKiAgICgyKSBwYXJhbXMgd2l0aCA/IGUuZy4gP3E9aGVsbG9cbiAgICogICAoMSkgcGFyYW1zIHdpdGhvdXQgPyBlLmcuIHE9aGVsbG9cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IG1hcHBpbmcgZnJvbSBxdWVyeSBwYXJhbSAtPiB2YWx1ZSB3aGVyZSB2YWx1ZSBpcyAnJyBpZiBubyB2YWx1ZSBpcyBwcm92aWRlZFxuICAgKi9cbiAgcGFyc2UgKHVybCkge1xuICAgIGxldCBwYXJhbXMgPSB7fTtcbiAgICBsZXQgc2VhcmNoID0gdXJsO1xuXG4gICAgaWYgKHNlYXJjaCA9PT0gJycpIHtcbiAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfVxuXG4gICAgLy8gTm9ybWFsaXplIGFsbCB1cmwgaW5wdXRzIHRvIHN0cmluZyBvZiBxdWVyeSBwYXJhbXMgc2VwYXJhdGVkIGJ5ICZcbiAgICBpZiAodXJsLmluZGV4T2YoJz8nKSA+IC0xKSB7XG4gICAgICBzZWFyY2ggPSB1cmwuc2xpY2UodXJsLmluZGV4T2YoJz8nKSArIDEpO1xuICAgIH1cblxuICAgIGNvbnN0IGVuY29kZWRQYXJhbXMgPSBzZWFyY2guc3BsaXQoJyYnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuY29kZWRQYXJhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleVZhbCA9IGVuY29kZWRQYXJhbXNbaV0uc3BsaXQoJz0nKTtcbiAgICAgIGlmIChrZXlWYWwubGVuZ3RoID4gMSkge1xuICAgICAgICBwYXJhbXNba2V5VmFsWzBdXSA9IFNlYXJjaFBhcmFtcy5kZWNvZGUoa2V5VmFsWzFdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtc1trZXlWYWxbMF1dID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIHF1ZXJ5IHBhcmFtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgcXVlcnkgcGFyYW0ga2V5IHRvIGdldCB0aGUgdmFsdWUgb2ZcbiAgICogQHJldHVybiB7c3RyaW5nfSBwYXJhbSB2YWx1ZSwgbnVsbCBvdGhlcndpc2VcbiAgICovXG4gIGdldCAocXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuX3BhcmFtc1tTdHJpbmcocXVlcnkpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcGFyYW1zW3F1ZXJ5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXQgY2hhbmdlcyB0aGUgdmFsdWUgb2YgYSBnaXZlbiBxdWVyeSBwYXJhbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSB0aGUgcXVlcnkgcGFyYW0ga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSB0aGUgdmFsdWUgb2YgdGhlIHF1ZXJ5IHBhcmFtIHVwZGF0ZSB3aXRoXG4gICAqL1xuICBzZXQgKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5fcGFyYW1zW1N0cmluZyhuYW1lKV0gPSBTdHJpbmcodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIGhhcyBjaGVja3MgdG8gc2VlIGlmIHRoZSBnaXZlbiBxdWVyeSBwYXJhbSBrZXkgZXhpc3RzIGluIHRoZSBwYXJhbXMgb2JqZWN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgcXVlcnkgcGFyYW0gdG8gY2hlY2tcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgcXVlcnkgcGFyYW0gaXMgaW4gdGhlIHBhcmFtcyBvYmplY3QsIGZhbHNlIG8vd1xuICAgKi9cbiAgaGFzIChxdWVyeSkge1xuICAgIHJldHVybiBxdWVyeSBpbiB0aGlzLl9wYXJhbXM7XG4gIH1cblxuICAvKipcbiAgICogdG9TdHJpbmcgcmV0dXJucyBhIHVybCB3aXRoIGFsbCB0aGUgcXVlcnkgcGFyYW1zIGluIHRoZSBwYXJhbXMgb2JqZWN0ICh3aXRob3V0IGEgPylcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9TdHJpbmcgKCkge1xuICAgIGxldCBzdHJpbmcgPSBbXTtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fcGFyYW1zKSB7XG4gICAgICBzdHJpbmcucHVzaChgJHtrZXl9PSR7U2VhcmNoUGFyYW1zLmVuY29kZSh0aGlzLl9wYXJhbXNba2V5XSl9YCk7XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmcuam9pbignJicpO1xuICB9XG5cbiAgLyoqXG4gICAqIGRlY29kZSByZXR1cm5zIHRoZSBkZWNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBzdHJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyB0aGUgc3RyaW5nIHRvIGRlY29kZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZGVjb2RlIChzdHJpbmcpIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cmluZy5yZXBsYWNlKC9bICtdL2csICclMjAnKSk7XG4gIH1cblxuICAvKipcbiAgICogZGVjb2RlIHJldHVybnMgdGhlIGVuY29kZWQgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIHN0cmluZyAoZS5nLiArIC0+ICUyQilcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyB0aGUgc3RyaW5nIHRvIGVuY29kZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZW5jb2RlIChzdHJpbmcpIHtcbiAgICBsZXQgcmVwbGFjZSA9IHtcbiAgICAgICchJzogJyUyMScsXG4gICAgICBcIidcIjogJyUyNycsXG4gICAgICAnKCc6ICclMjgnLFxuICAgICAgJyknOiAnJTI5JyxcbiAgICAgICclMjAnOiAnKydcbiAgICB9O1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5nKS5yZXBsYWNlKC9bIScoKV18JTIwL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgcmV0dXJuIHJlcGxhY2VbbWF0Y2hdO1xuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBcGlSZXF1ZXN0ICovXG5cbmltcG9ydCBIdHRwUmVxdWVzdGVyIGZyb20gJy4vaHR0cHJlcXVlc3Rlcic7XG5pbXBvcnQgeyBBUElfQkFTRV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi91aS9kb20vc2VhcmNocGFyYW1zJzsgLy8gVE9ETyBpZGVhbGx5IHRoaXMgd291bGQgYmUgcGFzc2VkIGluIGFzIGEgcGFyYW1cblxuLyoqXG4gKiBBcGlSZXF1ZXN0IGlzIHRoZSBiYXNlIGNsYXNzIGZvciBhbGwgQVBJIHJlcXVlc3RzLlxuICogSXQgZGVmaW5lcyBhbGwgb2YgdGhlIGNvcmUgcHJvcGVydGllcyByZXF1aXJlZCB0byBtYWtlIGEgcmVxdWVzdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcGlSZXF1ZXN0IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIHVzZWQgZm9yIG1ha2luZyBuZXR3b3JrIHJlcXVlc3QgYW5kIGhhbmRsaW5nIGVycm9yc1xuICAgICAqIEB0eXBlIHtIdHRwUmVxdWVzdGVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcmVxdWVzdGVyID0gbmV3IEh0dHBSZXF1ZXN0ZXIoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBiYXNlVXJsIHRvIHVzZSBmb3IgbWFraW5nIGEgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9iYXNlVXJsID0gb3B0cy5iYXNlVXJsIHx8IEFQSV9CQVNFX1VSTDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBlbmRwb2ludCB0byB1c2UgaW4gdGhlIHVybCAoYXBwZW5kZWQgdG8gdGhlIHtiYXNlVXJsfSlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZW5kcG9pbnQgPSBvcHRzLmVuZHBvaW50IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgQVBJIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwaUtleSA9IG9wdHMuYXBpS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgQVBJIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnNpb24gPSBvcHRzLnZlcnNpb24gfHwgMjAxOTAxMDE7XG5cbiAgICAvKipcbiAgICAgKiBBZGRpdGlvbmFsIGRhdGEgcGFyYW1zIHRoYXQgYXJlIHNlbnQgYWxvbmcgd2l0aCB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9wYXJhbXMgPSBvcHRzLnBhcmFtcyB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgY3JlYXRlcyBhIG5ldyBgR0VUYCByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIHJlcXVlc3QgY2xhc3NcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBnZXQgKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0ZXIuZ2V0KHRoaXMuX2Jhc2VVcmwgKyB0aGlzLl9lbmRwb2ludCwgdGhpcy5wYXJhbXModGhpcy5fcGFyYW1zKSk7XG4gIH1cblxuICBwb3N0IChvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3Rlci5wb3N0KHRoaXMuX2Jhc2VVcmwgKyB0aGlzLl9lbmRwb2ludCwgdGhpcy5wYXJhbXModGhpcy5fcGFyYW1zKSwgb3B0cyk7XG4gIH1cblxuICBwYXJhbXMgKHBhcmFtcykge1xuICAgIHZhciBiYXNlUGFyYW1zID0ge1xuICAgICAgJ3YnOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgJ2FwaV9rZXknOiB0aGlzLl9hcGlLZXlcbiAgICB9O1xuXG4gICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKSk7XG5cbiAgICBpZiAodXJsUGFyYW1zLmhhcygnYmV0YScpKSB7XG4gICAgICBiYXNlUGFyYW1zWydiZXRhJ10gPSB1cmxQYXJhbXMuZ2V0KCdiZXRhJyk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFueSBwYXJhbWF0ZXJzIHdob3MgdmFsdWUgaXMgYHVuZGVmaW5lZGAuXG4gICAgLy9cbiAgICAvLyBOT1RFKGJpbGx5KSBQcm9iYWJseSBiZXR0ZXIgdG8gYmUgZXhwbGljaXQgYWJvdXQgaG93IHRvIGhhbmRsZSB0aGlzIGF0IHRoZSByZXF1ZXN0IGJ1aWxkaW5nIGxldmVsLFxuICAgIC8vIGJ1dCBJIGNhbid0IHNlZSBhbnkgY2FzZXMgd2hlcmUgd2UnZCBldmVyIHdhbnQgdG8gc2VuZCAndW5kZWZpbmVkJyBhcyBhIHZhbHVlIHRvIHRoZSBzZXJ2ZXIuXG4gICAgLy8gU28gaXQncyBwcm9iYWJseSBmaW5lIHRvICdjbGVhbicgdGhlIHBhcmFtcyBvYmplY3QgaGVyZVxuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKHBhcmFtc1trZXldID09PSB1bmRlZmluZWQgfHwgcGFyYW1zW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIHBhcmFtc1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYmFzZVBhcmFtcywgcGFyYW1zIHx8IHt9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRXJyb3JzICovXG5cbi8qKlxuICogQW5zd2Vyc0Jhc2VFcnJvciBpcyBhbiBleHRlbnNpb24gb2YgdGhlIGJhc2UgRXJyb3Igb2JqZWN0LlxuICogVGhpcyBpcyB0aGUgb2JqZWN0IHRoYXQgaXMgdXNlZCB0byB3aGVuIHJlcG9ydGluZyB0byB0aGUgc2VydmVyLlxuICogQGV4dGVuZHMgRXJyb3JcbiAqXG4gKiBFcnJvciBjb2RlcyBmYWxsIGludG8gb25lIG9mIGZvdXIgY2F0ZWdvcmllczpcbiAqIDFYWCBlcnJvcnM6IEJhc2ljIGVycm9yc1xuICogMlhYIGVycm9yczogVUkgZXJyb3JzXG4gKiAzWFggZXJyb3JzOiBFbmRwb2ludCBlcnJvcnNcbiAqIDRYWCBlcnJvcnM6IENvcmUgZXJyb3JzXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQmFzZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAoZXJyb3JDb2RlLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLmVycm9yQ29kZSA9IGVycm9yQ29kZTtcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5ib3VuZGFyeSA9IGJvdW5kYXJ5O1xuICAgIHRoaXMuY2F1c2VkQnkgPSBjYXVzZWRCeTtcbiAgICB0aGlzLnJlcG9ydGVkID0gZmFsc2U7XG4gIH1cblxuICB0b0pzb24gKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChidWlsdGluRXJyb3IsIGJvdW5kYXJ5KSB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoYnVpbHRpbkVycm9yLm1lc3NhZ2UsIGJvdW5kYXJ5KTtcbiAgICBlcnJvci5zdGFjayA9IGJ1aWx0aW5FcnJvci5zdGFjaztcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzQmFzaWNFcnJvciBpcyBhIHdyYXBwZXIgYXJvdW5kIGFsbCB0aGUgYnVpbHQtaW4gZXJyb3JzXG4gKiBlLmcuIHVuZGVmaW5lZCB2YXJpYWJsZXMsIGluY29ycmVjdCBzeW50YXgsIHR5cGVzLCBtaXNzaW5nIG1ldGhvZHMsIGV0Yy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNCYXNpY0Vycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigxMDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzVWlFcnJvciB1c2VkIGZvciB0aGluZ3MgbGlrZSBET00gZXJyb3JzLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc1VpRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDIwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNDb21wb25lbnRFcnJvciBpcyB1c2VkIGZvciBDb21wb25lbnQgb3JpZW50ZWQgZXJyb3JzXG4gKiBlLmcuIGZhaWx1cmUgdG8gcmVuZGVyLCBvciBjYXRjaGluZyB1bmtub3ducy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNDb21wb25lbnRFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgY29tcG9uZW50LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDIwMSwgbWVzc2FnZSwgY29tcG9uZW50LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzRW5kcG9pbnRFcnJvciByZXByZXNlbnRzIGFsbCBuZXR3b3JrIHJlbGF0ZWQgZXJyb3JzLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0VuZHBvaW50RXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDMwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNDb3JlRXJyb3IgcmVwcmVzZW50cyBlcnJvcnMgZm9yIHByZWNvbmRpdGlvbiBmYWlsdXJlcyBpbiB0aGUgY29yZSBsaWJyYXJ5XG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQ29yZUVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcig0MDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzU3RvcmFnZUVycm9yIHJlcHJlc2VudHMgc3RvcmFnZSByZWxhdGVkIGVycm9yc1xuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc1N0b3JhZ2VFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgc3RvcmFnZUtleSwgZGF0YSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcig0MDEsIG1lc3NhZ2UsICdTdG9yYWdlJywgY2F1c2VkQnkpO1xuICAgIHRoaXMuc3RvcmFnZUtleSA9IHN0b3JhZ2VLZXk7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNBbmFseXRpY3NFcnJvciBpcyB1c2VkIGZvciBlcnJvcnMgd2hlbiByZXBvcnRpbmcgYW5hbHl0aWNzXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGV2ZW50LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDQwMiwgbWVzc2FnZSwgJ0FuYWx5dGljcycsIGNhdXNlZEJ5KTtcbiAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaEFwaSAqL1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IHsgQW5zd2Vyc0Jhc2ljRXJyb3IsIEFuc3dlcnNDb3JlRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBTZWFyY2hBcGkgaXMgdGhlIEFQSSBmb3IgZG9pbmcgdmFyaW91cyB0eXBlcyBvZiBzZWFyY2hcbiAqIG92ZXIgdGhlIG5ldHdvcmsgKGUuZy4gdmVydGljYWwgb3IgdW5pdmVyc2FsKVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hBcGkge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgQVBJIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghY29uZmlnLmFwaUtleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBcGkgS2V5IGlzIHJlcXVpcmVkJywgJ1NlYXJjaCcpO1xuICAgIH1cbiAgICB0aGlzLl9hcGlLZXkgPSBjb25maWcuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIEFuc3dlcnMgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFjb25maWcuYW5zd2Vyc0tleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBbnN3ZXJzIEtleSBpcyByZXF1aXJlZCcsICdTZWFyY2gnKTtcbiAgICB9XG4gICAgdGhpcy5fYW5zd2Vyc0tleSA9IGNvbmZpZy5hbnN3ZXJzS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnNpb24gb2YgdGhlIEFQSSB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJzaW9uID0gY29uZmlnLnZlcnNpb24gfHwgMjAxOTAxMDEgfHwgMjAxOTAzMDE7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgbG9jYWxlIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFjb25maWcubG9jYWxlKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0xvY2FsZSBpcyByZXF1aXJlZCcsICdTZWFyY2gnKTtcbiAgICB9XG4gICAgdGhpcy5fbG9jYWxlID0gY29uZmlnLmxvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggaW4gdGhlIGNvbnRleHQgb2YgYSB2ZXJ0aWNhbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmVydGljYWxLZXkgdmVydGljYWwgSUQgZm9yIHRoZSBzZWFyY2hcbiAgICogQHBhcmFtIHtvYmplY3R9IHF1ZXJ5IFRoZSBxdWVyeSBkZXRhaWxzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5pbnB1dCBUaGUgaW5wdXQgdG8gc2VhcmNoIGZvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuZmlsdGVyIFRoZSBmaWx0ZXIgdG8gdXNlIGluIHRoZSBzZWFyY2hcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmZhY2V0RmlsdGVyIFRoZSBmYWNldCBmaWx0ZXIgdG8gdXNlIGluIHRoZSBzZWFyY2hcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1ZXJ5LmxpbWl0IFRoZSBtYXggbnVtYmVyIG9mIHJlc3VsdHMgdG8gaW5jbHVkZSwgbWF4IG9mIDUwXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBxdWVyeS5vZmZzZXQgVGhlIHJlc3VsdHMgb2Zmc2V0LCBmb3IgZmV0Y2hpbmcgbW9yZSByZXN1bHRzIG9mIHRoZSBzYW1lIHF1ZXJ5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5pZCBUaGUgcXVlcnkgSUQgdG8gdXNlLiBJZiBwYWdpbmcgd2l0aGluIGEgcXVlcnksIHRoZSBzYW1lIElEIHNob3VsZCBiZSB1c2VkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcXVlcnkuaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQgSWYgdHJ1ZSwgYXNrcyB0aGUgc2VydmVyIHRvIHJldHVybiBkeW5hbWljIGZpbHRlcnNcbiAgICovXG4gIHZlcnRpY2FsU2VhcmNoICh2ZXJ0aWNhbEtleSwgeyBpbnB1dCwgZmlsdGVyLCBmYWNldEZpbHRlciwgbGltaXQsIG9mZnNldCwgaWQsIGlzRHluYW1pY0ZpbHRlcnNFbmFibGVkIH0pIHtcbiAgICBpZiAobGltaXQgPiA1MCkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb3JlRXJyb3IoJ1Byb3ZpZGVkIHNlYXJjaCBsaW1pdCB1bnN1cHBvcnRlZCcsICdTZWFyY2hBcGknKTtcbiAgICB9XG5cbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvdmVydGljYWwvcXVlcnknLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IGlucHV0LFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICAgICdmaWx0ZXJzJzogZmlsdGVyLFxuICAgICAgICAnZmFjZXRGaWx0ZXJzJzogZmFjZXRGaWx0ZXIsXG4gICAgICAgICd2ZXJ0aWNhbEtleSc6IHZlcnRpY2FsS2V5LFxuICAgICAgICAnbGltaXQnOiBsaW1pdCxcbiAgICAgICAgJ29mZnNldCc6IG9mZnNldCxcbiAgICAgICAgJ3F1ZXJ5SWQnOiBpZCxcbiAgICAgICAgJ3JldHJpZXZlRmFjZXRzJzogaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQsXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9XG5cbiAgdW5pdmVyc2FsU2VhcmNoIChxdWVyeVN0cmluZykge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9xdWVyeScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogcXVlcnlTdHJpbmcsXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEF1dG9Db21wbGV0ZURhdGEgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlRGF0YSB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICB0aGlzLnNlY3Rpb25zID0gZGF0YS5zZWN0aW9ucyB8fCBbXTtcbiAgICB0aGlzLnF1ZXJ5SWQgPSBkYXRhLnF1ZXJ5SWQgfHwgJyc7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSkge1xuICAgIGxldCBzZWN0aW9ucztcbiAgICBpZiAocmVzcG9uc2Uuc2VjdGlvbnMpIHtcbiAgICAgIHNlY3Rpb25zID0gcmVzcG9uc2Uuc2VjdGlvbnMubWFwKHMgPT4gKHtcbiAgICAgICAgbGFiZWw6IHMubGFiZWwsXG4gICAgICAgIHJlc3VsdHM6IHMucmVzdWx0cy5tYXAociA9PiBuZXcgQXV0b0NvbXBsZXRlUmVzdWx0KHIpKVxuICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWN0aW9ucyA9IFt7IHJlc3VsdHM6IHJlc3BvbnNlLnJlc3VsdHMubWFwKHIgPT4gbmV3IEF1dG9Db21wbGV0ZVJlc3VsdChyKSkgfV07XG4gICAgfVxuICAgIHJldHVybiBuZXcgQXV0b0NvbXBsZXRlRGF0YSh7IHNlY3Rpb25zLCBxdWVyeUlkOiByZXNwb25zZS5xdWVyeUlkIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvQ29tcGxldGVSZXN1bHQge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgdGhpcy5maWx0ZXIgPSBkYXRhLmZpbHRlciB8fCB7fTtcbiAgICB0aGlzLmhpZ2hsaWdodGVkVmFsdWUgPSB0aGlzLmhpZ2hsaWdodChkYXRhKTtcbiAgICB0aGlzLmtleSA9IGRhdGEua2V5IHx8ICcnO1xuICAgIHRoaXMubWF0Y2hlZFN1YnN0cmluZ3MgPSBkYXRhLm1hdGNoZWRTdWJzdHJpbmdzIHx8IFtdO1xuICAgIHRoaXMudmFsdWUgPSBkYXRhLnZhbHVlIHx8ICcnO1xuICAgIHRoaXMuc2hvcnRWYWx1ZSA9IGRhdGEuc2hvcnRWYWx1ZSB8fCB0aGlzLnZhbHVlO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICAvLyBUT0RPKGpkZWxlcm1lKTogY29uc29saWRhdGUgd2l0aCBvdGhlciBoaWdobGlnaHQgZnVuY3Rpb25zXG4gIGhpZ2hsaWdodCAoZGF0YSkge1xuICAgIGNvbnN0IHsgdmFsdWUsIHNob3J0VmFsdWUsIG1hdGNoZWRTdWJzdHJpbmdzIH0gPSBkYXRhO1xuICAgIGNvbnN0IHZhbCA9IHZhbHVlIHx8IHNob3J0VmFsdWU7XG5cbiAgICBpZiAoIW1hdGNoZWRTdWJzdHJpbmdzIHx8IG1hdGNoZWRTdWJzdHJpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgb3VyIGhpZ2hsaWdodGVkIHN1YnN0cmluZ3MgYXJlIHNvcnRlZFxuICAgIG1hdGNoZWRTdWJzdHJpbmdzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChhLm9mZnNldCA8IGIub2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGEub2Zmc2V0ID4gYi5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgLy8gSW52ZXJ0IGhpZ2hsaWdodGVkIHN1YnN0cmluZ3NcbiAgICBjb25zdCBpbnZlcnRlZFN1YnN0cmluZ3MgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlZFN1YnN0cmluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHN1YnN0cmluZyA9IG1hdGNoZWRTdWJzdHJpbmdzW2ldO1xuICAgICAgY29uc3QgbmV4dE9mZnNldCA9IHN1YnN0cmluZy5vZmZzZXQgKyBzdWJzdHJpbmcubGVuZ3RoO1xuICAgICAgaWYgKGkgPT09IDAgJiYgc3Vic3RyaW5nLm9mZnNldCAhPT0gMCkge1xuICAgICAgICBpbnZlcnRlZFN1YnN0cmluZ3MucHVzaCh7IG9mZnNldDogMCwgbGVuZ3RoOiBzdWJzdHJpbmcub2Zmc2V0IH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsLmxlbmd0aCA+IG5leHRPZmZzZXQpIHtcbiAgICAgICAgaW52ZXJ0ZWRTdWJzdHJpbmdzLnB1c2goe1xuICAgICAgICAgIG9mZnNldDogbmV4dE9mZnNldCxcbiAgICAgICAgICBsZW5ndGg6IGkgPCBtYXRjaGVkU3Vic3RyaW5ncy5sZW5ndGggLSAxXG4gICAgICAgICAgICA/IG1hdGNoZWRTdWJzdHJpbmdzW2kgKyAxXS5vZmZzZXQgLSBuZXh0T2Zmc2V0XG4gICAgICAgICAgICA6IHZhbC5sZW5ndGggLSBuZXh0T2Zmc2V0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEJ1aWxkIG91ciBuZXcgdmFsdWUgYmFzZWQgb24gdGhlIGhpZ2hsaWdodHNcbiAgICBsZXQgaGlnaGxpZ2h0ZWRWYWx1ZSA9ICcnO1xuICAgIGxldCBuZXh0U3RhcnQgPSAwO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBpbnZlcnRlZFN1YnN0cmluZ3MubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBzdGFydCA9IE51bWJlcihpbnZlcnRlZFN1YnN0cmluZ3Nbal0ub2Zmc2V0KTtcbiAgICAgIGxldCBlbmQgPSBzdGFydCArIGludmVydGVkU3Vic3RyaW5nc1tqXS5sZW5ndGg7XG5cbiAgICAgIGhpZ2hsaWdodGVkVmFsdWUgKz0gW3ZhbC5zbGljZShuZXh0U3RhcnQsIHN0YXJ0KSwgJzxzdHJvbmc+JywgdmFsLnNsaWNlKHN0YXJ0LCBlbmQpLCAnPC9zdHJvbmc+J10uam9pbignJyk7XG5cbiAgICAgIGlmIChqID09PSBpbnZlcnRlZFN1YnN0cmluZ3MubGVuZ3RoIC0gMSAmJiBlbmQgPCB2YWwubGVuZ3RoKSB7XG4gICAgICAgIGhpZ2hsaWdodGVkVmFsdWUgKz0gdmFsLnNsaWNlKGVuZCk7XG4gICAgICB9XG5cbiAgICAgIG5leHRTdGFydCA9IGVuZDtcbiAgICB9XG5cbiAgICByZXR1cm4gaGlnaGxpZ2h0ZWRWYWx1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyICovXG5cbmltcG9ydCBBdXRvQ29tcGxldGVEYXRhIGZyb20gJy4uL21vZGVscy9hdXRvY29tcGxldGVkYXRhJztcblxuLyoqXG4gKiBBIERhdGEgVHJhbnNmb3JtZXIgdGhhdCB0YWtlcyB0aGUgcmVzcG9uc2Ugb2JqZWN0IGZyb20gYSBBdXRvQ29tcGxldGUgcmVxdWVzdFxuICogQW5kIHRyYW5zZm9ybXMgaW4gdG8gYSBmcm9udC1lbmQgb3JpZW50ZWQgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBvdXJcbiAqIGNvbXBvbmVudCBsaWJyYXJ5IGFuZCBjb3JlIHN0b3JhZ2UgdW5kZXJzdGFuZC5cbiAqXG4gKiBUT0RPKGJpbGx5KSBDcmVhdGUgb3VyIG93biBmcm9udC1lbmQgZGF0YSBtb2RlbHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyIHtcbiAgc3RhdGljIGNsZWFuIChtb2R1bGVJZCwgZGF0YSkge1xuICAgIGlmIChkYXRhLnNlY3Rpb25zICYmIGRhdGEuc2VjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgZGF0YS5zZWN0aW9ucztcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5zZWN0aW9ucyAmJiBkYXRhLnNlY3Rpb25zLmxlbmd0aCA9PT0gMSAmJiBkYXRhLnNlY3Rpb25zWzBdLnJlc3VsdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgZGF0YS5zZWN0aW9ucztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgW21vZHVsZUlkXTogZGF0YVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgdW5pdmVyc2FsIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG5cbiAgc3RhdGljIGZpbHRlciAocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gQXV0b0NvbXBsZXRlRGF0YS5mcm9tKHJlc3BvbnNlKTtcbiAgfVxuXG4gIHN0YXRpYyB2ZXJ0aWNhbCAocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gQXV0b0NvbXBsZXRlRGF0YS5mcm9tKHJlc3BvbnNlKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlQXBpICovXG5cbmltcG9ydCBBcGlSZXF1ZXN0IGZyb20gJy4uL2h0dHAvYXBpcmVxdWVzdCc7XG5pbXBvcnQgQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyIGZyb20gJy4vYXV0b2NvbXBsZXRlZGF0YXRyYW5zZm9ybWVyJztcbmltcG9ydCB7IEFuc3dlcnNCYXNpY0Vycm9yLCBBbnN3ZXJzRW5kcG9pbnRFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvcnMnO1xuXG4vKipcbiAqIEF1dG9Db21wbGV0ZUFwaSBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgbmV0d29yayByZWxhdGVkIG1hdHRlcnNcbiAqIGZvciBhbGwgdGhlIGF1dG9jb21wbGV0ZSBlbmRwb2ludHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Db21wbGV0ZUFwaSB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBUaGUgQVBJIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghb3B0cy5hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQXBpIEtleSBpcyByZXF1aXJlZCcsICdBdXRvQ29tcGxldGUnKTtcbiAgICB9XG4gICAgdGhpcy5fYXBpS2V5ID0gb3B0cy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgQW5zd2VycyBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIW9wdHMuYW5zd2Vyc0tleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBbnN3ZXJzIEtleSBpcyByZXF1aXJlZCcsICdBdXRvQ29tcGxldGUnKTtcbiAgICB9XG4gICAgdGhpcy5fYW5zd2Vyc0tleSA9IG9wdHMuYW5zd2Vyc0tleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBBUEkgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVyc2lvbiA9IG9wdHMudmVyc2lvbiB8fCAyMDE5MDEwMSB8fCAyMDE5MDMwMTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsb2NhbGUgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIW9wdHMubG9jYWxlKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0xvY2FsZSBpcyByZXF1aXJlZCcsICdBdXRvQ29tcGxldGUnKTtcbiAgICB9XG4gICAgdGhpcy5fbG9jYWxlID0gb3B0cy5sb2NhbGU7XG4gIH1cblxuICAvKipcbiAgICogQXV0b2NvbXBsZXRlIGZpbHRlcnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0IFRoZSBpbnB1dCB0byB1c2UgZm9yIGF1dG8gY29tcGxldGVcbiAgICovXG4gIHF1ZXJ5RmlsdGVyIChpbnB1dCwgdmVydGljYWxLZXksIGJhcktleSkge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9maWx0ZXJzZWFyY2gnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IGlucHV0LFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICAgICdleHBlcmllbmNlS2V5JzogdmVydGljYWxLZXksXG4gICAgICAgICdpbnB1dEtleSc6IGJhcktleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lci5maWx0ZXIocmVzcG9uc2UucmVzcG9uc2UsIGJhcktleSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoJ0ZpbHRlciBzZWFyY2ggcmVxdWVzdCBmYWlsZWQnLCAnQXV0b0NvbXBsZXRlJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICBxdWVyeVZlcnRpY2FsIChpbnB1dCwgdmVydGljYWxLZXksIGJhcktleSkge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy92ZXJ0aWNhbC9hdXRvY29tcGxldGUnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IGlucHV0LFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICAgICd2ZXJ0aWNhbEtleSc6IHZlcnRpY2FsS2V5LFxuICAgICAgICAnYmFyS2V5JzogYmFyS2V5LFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLnZlcnRpY2FsKHJlc3BvbnNlLnJlc3BvbnNlLCByZXF1ZXN0Ll9wYXJhbXMuYmFyS2V5KSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzRW5kcG9pbnRFcnJvcignVmVydGljYWwgc2VhcmNoIHJlcXVlc3QgZmFpbGVkJywgJ0F1dG9Db21wbGV0ZScsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcXVlcnlVbml2ZXJzYWwgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL2F1dG9jb21wbGV0ZScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogcXVlcnlTdHJpbmcsXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHF1ZXJ5U3RyaW5nKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLnVuaXZlcnNhbChyZXNwb25zZS5yZXNwb25zZSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoJ1VuaXZlcnNhbCBzZWFyY2ggcmVxdWVzdCBmYWlsZWQnLCAnQXV0b0NvbXBsZXRlJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFF1ZXN0aW9uQW5zd2VyQXBpICovXG5cbmltcG9ydCBBcGlSZXF1ZXN0IGZyb20gJy4uL2h0dHAvYXBpcmVxdWVzdCc7XG5pbXBvcnQgeyBBbnN3ZXJzQmFzaWNFcnJvciwgQW5zd2Vyc0VuZHBvaW50RXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBRdWVzdGlvbkFuc3dlckFwaSBleHBvc2VzIGFuIGludGVyZmFjZSB0byBkbyBuZXR3b3JreSB0aGluZ3MgYWdhaW5zdFxuICogdGhlIFEmQSBSRVNUIEFQSVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdGlvbkFuc3dlckFwaSB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBUaGUgQVBJIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghb3B0cy5hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQXBpIEtleSBpcyByZXF1aXJlZCcsICdRdWVzdGlvbkFuc3dlckFwaScpO1xuICAgIH1cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzdWJtaXRRdWVzdGlvbiB3aWxsIGNyZWF0ZSBhIG5ldHdvcmsgcmVxdWVzdCB0b1xuICAgKiBjcmVhdGUgYSBxdWVzdGlvbiBmb3IgUSZBLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcXVlc3Rpb24gVGhlIHF1ZXN0aW9uIG9iamVjdCB0byBzdWJtaXQgdG8gdGhlIHNlcnZlclxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlc3Rpb24uZW50aXR5SWQgVGhlIGVudGl0eSB0byBhc3NvY2lhdGUgd2l0aCB0aGUgcXVlc3Rpb24gKHJlcXVpcmVkKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ubGFudWFnZSBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIHF1ZXN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5zaXRlIFRoZSBcInB1Ymxpc2hlclwiIG9mIHRoZSAoZS5nLiAnRklSU1RfUEFSVFknKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ubmFtZSBUaGUgbmFtZSBvZiB0aGUgYXV0aG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5lbWFpbCBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgYXV0aG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5xdWVzdGlvblRleHQgVGhlIHF1ZXN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5xdWVzdGlvbkRlc2NyaXB0aW9uIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHF1ZXN0aW9uXG4gICAqL1xuICBzdWJtaXRRdWVzdGlvbiAocXVlc3Rpb24pIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL3F1ZXN0aW9ucycsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnZW50aXR5SWQnOiBxdWVzdGlvbi5lbnRpdHlJZCxcbiAgICAgICAgJ3NpdGUnOiBxdWVzdGlvbi5zaXRlLFxuICAgICAgICAnbmFtZSc6IHF1ZXN0aW9uLm5hbWUsXG4gICAgICAgICdlbWFpbCc6IHF1ZXN0aW9uLmVtYWlsLFxuICAgICAgICAncXVlc3Rpb25UZXh0JzogcXVlc3Rpb24ucXVlc3Rpb25UZXh0LFxuICAgICAgICAncXVlc3Rpb25EZXNjcmlwdGlvbic6IHF1ZXN0aW9uLnF1ZXN0aW9uRGVzY3JpcHRpb24sXG4gICAgICAgICdxdWVzdGlvbkxhbmd1YWdlJzogcXVlc3Rpb24ucXVlc3Rpb25MYW5ndWFnZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QucG9zdCgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoXG4gICAgICAgICAgJ1F1ZXN0aW9uIHN1Ym1pdCBmYWlsZWQnLFxuICAgICAgICAgICdRdWVzdGlvbkFuc3dlckFwaScsXG4gICAgICAgICAgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaFN0YXRlcyAqL1xuXG4vKipcbiAqIFNlYXJjaFN0YXRlcyBpcyBhbiBFTlVNIGZvciB0aGUgdmFyaW91cyBzdGFnZXMgb2Ygc2VhcmNoaW5nLFxuICogdXNlZCB0byBzaG93IGRpZmZlcmVudCB0ZW1wbGF0ZXNcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUFJFX1NFQVJDSDogJ3ByZS1zZWFyY2gnLFxuICBTRUFSQ0hfTE9BRElORzogJ3NlYXJjaC1sb2FkaW5nJyxcbiAgU0VBUkNIX0NPTVBMRVRFOiAnc2VhcmNoLWNvbXBsZXRlJ1xufTtcbiIsIi8qKiBAbW9kdWxlIFJlc3VsdCAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHQge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJhdyBwcm9maWxlIGRhdGFcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcmF3ID0gZGF0YS5yYXcgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmb3JtYXR0ZWQgcHJvZmlsZSBkYXRhXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Zvcm1hdHRlZCA9IGRhdGEuZm9ybWF0dGVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluZGV4IG51bWJlciBvZiB0aGUgcmVzdWx0XG4gICAgICogQHR5cGUge051bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLm9yZGluYWwgPSBkYXRhLm9yZGluYWwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSBvZiB0aGUgcmVzdWx0IGNhcmRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy50aXRsZSA9IGRhdGEudGl0bGUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBib2R5IG9mIHRoZSBkZXRhaWxzIHNlY3Rpb24gb2YgdGhlIHJlc3VsdCBjYXJkLCBjYW4gY29udGFpbiBIVE1MXG4gICAgICogQHR5cGUge3N0cmluZ3wgbnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmRldGFpbHMgPSBkYXRhLmRldGFpbHMgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZXN0aW5hdGlvbiBsaW5rIGZvciB0aGUgdGl0bGUgb2YgdGhlIHJlc3VsdCBjYXJkXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMubGluayA9IGRhdGEubGluayB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIEVudGl0eSBJRCwgb3Igb3RoZXIgdW5pcXVlIGlkZW50aWZpZXIsIHVzZWQgZm9yIHRvIHBvd2VyIGludGVyYWN0aXZpdHlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5pZCA9IGRhdGEuaWQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdWJ0aXRsZSBvbiB0aGUgcmVzdWx0IGNhcmRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5zdWJ0aXRsZSA9IGRhdGEuc3VidGl0bGUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjbGFzcyBtb2RpZmllciwgdXN1YWxseSBkZXJpdmVkIGZyb20gdGhlIHZlcnRpY2FsIGNvbmZpZ3VyYXRpb24gSURcbiAgICAgKiBVc2VkIHRvIGFwcGx5IGRpZmZlcmVudCBzdHlsaW5nIHRvIGRpZmZlcmVudCByZXN1bHQgY2FyZCB0eXBlc1xuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLm1vZGlmaWVyID0gZGF0YS5tb2RpZmllciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsYXJnZSBkYXRlLCBvZiB0aGUgZm9ybWF0IHsgbW9udGg6ICdKYW4nLCBkYXk6ICcwMScgfVxuICAgICAqIEB0eXBlIHtPYmplY3R8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmJpZ0RhdGUgPSBkYXRhLmJpZ0RhdGUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFuIGltYWdlIHByb2ZpbGUgb2JqZWN0LCBleHBlY3RlZCB0byBoYXZlIGEgdXJsIHByb3BlcnR5XG4gICAgICogQHR5cGUge09iamVjdHxudWxsfVxuICAgICAqL1xuICAgIHRoaXMuaW1hZ2UgPSBkYXRhLmltYWdlIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBjYWxscyB0byBhY3Rpb24sIG9mIHRoZSBmb3JtYXQ6XG4gICAgICogeyBpY29uOiAnJywgdXJsOiAnJywgdGV4dDogJycsIGV2ZW50VHlwZTogJycsIGV2ZW50T3B0aW9uczoge319XG4gICAgICogQHR5cGUge0FycmF5fVxuICAgICAqL1xuICAgIHRoaXMuY2FsbHNUb0FjdGlvbiA9IGRhdGEuY2FsbHNUb0FjdGlvbiB8fCBbXTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVzdWx0RmFjdG9yeSAqL1xuXG5pbXBvcnQgUmVzdWx0IGZyb20gJy4vcmVzdWx0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0RmFjdG9yeSB7XG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBBUEkgcmVzdWx0IG9iamVjdCBpbnRvIGEgUmVzdWx0IHZpZXcgbW9kZWwuXG4gICAqIEluY2x1ZGVzIGRlZmF1bHQgbWFwcGluZ3Mgb2YgR29vZ2xlQ3VzdG9tU2VhcmNoRW5naW5lIHJlc3VsdHMgdG9cbiAgICogdGhlIGZpZWxkcyBleHBvc2VkIGJ5IHRoZSB0ZW1wbGF0ZS5cbiAgICogQHBhcmFtIHJlc3VsdHNEYXRhICB7QXJyYXl9IGV4cGVjdGVkIGZvcm1hdDogeyBkYXRhOiB7IC4uLiB9LCBoaWdobGlnaHRlZEZpZWxkczogeyAuLi4gfX1cbiAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fSBmb3JtYXR0ZXJzIFRoZSBmb3JtYXR0ZXJzIHRvIGFwcGx5IHRvIHRoZSByZXN1bHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnRpY2FsSWQgVGhlIHZlcnRpY2FsIG9mIHRoZXNlIHJlc3VsdHNcbiAgICogQHJldHVybnMge1Jlc3VsdFtdfVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHJlc3VsdHNEYXRhLCBmb3JtYXR0ZXJzLCB2ZXJ0aWNhbElkKSB7XG4gICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdHNEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBUT0RPIHVzZSByZXN1bHREYXRhLmhpZ2hsaWdodGVkRmllbGRzIHRvXG4gICAgICAvLyB0cmFuc2Zvcm0gcmVzdWx0RGF0YS5kYXRhIGludG8gaHRtbC1mcmllbmRseSBzdHJpbmdzIHRoYXQgaGlnaGxpZ2h0IHZhbHVlcy5cbiAgICAgIC8vIENoZWNrIGZvciBuZXcgZGF0YSBmb3JtYXQsIG90aGVyd2lzZSBmYWxsYmFjayB0byBsZWdhY3lcblxuICAgICAgY29uc3QgZGF0YSA9IHJlc3VsdHNEYXRhW2ldLmRhdGEgfHwgcmVzdWx0c0RhdGFbaV07XG4gICAgICBjb25zdCBmb3JtYXR0ZWREYXRhID0ge307XG4gICAgICBpZiAoT2JqZWN0LmtleXMoZm9ybWF0dGVycykubGVuZ3RoID4gMCkge1xuICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhKS5mb3JFYWNoKChba2V5LCB2YWxdKSA9PiB7XG4gICAgICAgICAgaWYgKGZvcm1hdHRlcnNba2V5XSkge1xuICAgICAgICAgICAgZm9ybWF0dGVkRGF0YVtrZXldID0gZm9ybWF0dGVyc1trZXldKHZhbCwgZGF0YSwgdmVydGljYWxJZCwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLmh0bWxTbmlwcGV0IHx8IGRhdGEuaHRtbFRpdGxlKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChSZXN1bHRGYWN0b3J5LmZyb21Hb29nbGVDdXN0b21TZWFyY2hFbmdpbmUoZGF0YSkpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0cy5wdXNoKFJlc3VsdEZhY3RvcnkuZnJvbUdlbmVyaWMoZGF0YSwgZm9ybWF0dGVkRGF0YSwgaSkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIEFQSSByZXN1bHQgb2JqZWN0IGludG8gYSBnZW5lcmljIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcGFyYW0gZm9ybWF0dGVkRGF0YVxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICogQHJldHVybnMge1Jlc3VsdH1cbiAgICovXG4gIHN0YXRpYyBmcm9tR2VuZXJpYyAoZGF0YSwgZm9ybWF0dGVkRGF0YSwgaW5kZXgpIHtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh7XG4gICAgICByYXc6IGRhdGEsXG4gICAgICBmb3JtYXR0ZWQ6IGZvcm1hdHRlZERhdGEsXG4gICAgICB0aXRsZTogZm9ybWF0dGVkRGF0YS5uYW1lIHx8IGRhdGEubmFtZSxcbiAgICAgIGRldGFpbHM6IGZvcm1hdHRlZERhdGEuZGVzY3JpcHRpb24gfHwgdGhpcy50cnVuY2F0ZShkYXRhLmRlc2NyaXB0aW9uKSxcbiAgICAgIGxpbms6IGRhdGEud2Vic2l0ZSxcbiAgICAgIGlkOiBkYXRhLmlkLFxuICAgICAgb3JkaW5hbDogaW5kZXggKyAxXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBNYXBzIHZpZXcgbW9kZWwgZmllbGRzIGJhc2VkIG9uIHRoZSBBUEkgZGF0YSBmb3IgYSBHb29nbGUgQ3VzdG9tIFNlYXJjaCBFbmdpbmUgb2JqZWN0LlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0fVxuICAgKi9cbiAgc3RhdGljIGZyb21Hb29nbGVDdXN0b21TZWFyY2hFbmdpbmUgKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh7XG4gICAgICByYXc6IGRhdGEsXG4gICAgICB0aXRsZTogZGF0YS5odG1sVGl0bGUucmVwbGFjZSgvKDwoW14+XSspPikvaWcsICcnKSxcbiAgICAgIGRldGFpbHM6IGRhdGEuaHRtbFNuaXBwZXQsXG4gICAgICBsaW5rOiBkYXRhLmxpbmtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcnVuY2F0ZXMgc3RyaW5ncyB0byAyNTAgY2hhcmFjdGVycywgYXR0ZW1wdGluZyB0byBwcmVzZXJ2ZSB3aG9sZSB3b3Jkc1xuICAgKiBAcGFyYW0gc3RyIHtzdHJpbmd9IHRoZSBzdHJpbmcgdG8gdHJ1bmNhdGVcbiAgICogQHBhcmFtIGxpbWl0IHtOdW1iZXJ9IHRoZSBtYXhpbXVtIGNoYXJhY3RlciBsZW5ndGggdG8gcmV0dXJuXG4gICAqIEBwYXJhbSB0cmFpbGluZyB7c3RyaW5nfSBhIHRyYWlsaW5nIHN0cmluZyB0byBkZW5vdGUgdHJ1bmNhdGlvbiwgZS5nLiAnLi4uJ1xuICAgKiBAcGFyYW0gc2VwIHtzdHJpbmd9IHRoZSB3b3JkIHNlcGFyYXRvclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIHRydW5jYXRlIChzdHIsIGxpbWl0ID0gMjUwLCB0cmFpbGluZyA9ICcuLi4nLCBzZXAgPSAnICcpIHtcbiAgICBpZiAoIXN0ciB8fCBzdHIubGVuZ3RoIDw9IGxpbWl0KSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIC8vIFRPRE8gKGJtY2dpbm5pcyk6IHNwbGl0IHB1bmN0dWF0aW9uIHRvbyBzbyB3ZSBkb24ndCBlbmQgdXAgd2l0aCBcImZvbywuLi5cIlxuICAgIGNvbnN0IHdvcmRzID0gc3RyLnNwbGl0KHNlcCk7XG4gICAgY29uc3QgbWF4ID0gbGltaXQgLSB0cmFpbGluZy5sZW5ndGg7XG4gICAgbGV0IHRydW5jYXRlZCA9ICcnO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgd29yZCA9IHdvcmRzW2ldO1xuICAgICAgaWYgKHRydW5jYXRlZC5sZW5ndGggKyB3b3JkLmxlbmd0aCA+IG1heCB8fFxuICAgICAgICAoaSAhPT0gMCAmJiB0cnVuY2F0ZWQubGVuZ3RoICsgd29yZC5sZW5ndGggKyBzZXAubGVuZ3RoID4gbWF4KSkge1xuICAgICAgICB0cnVuY2F0ZWQgKz0gdHJhaWxpbmc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICB0cnVuY2F0ZWQgKz0gaSA9PT0gMCA/IHdvcmQgOiBzZXAgKyB3b3JkO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVuY2F0ZWQ7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlY3Rpb24gKi9cblxuaW1wb3J0IFNlYXJjaFN0YXRlcyBmcm9tICcuLi9zdG9yYWdlL3NlYXJjaHN0YXRlcyc7XG5pbXBvcnQgUmVzdWx0RmFjdG9yeSBmcm9tICcuL3Jlc3VsdGZhY3RvcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcbiAgY29uc3RydWN0b3IgKGRhdGEsIHVybCwgZm9ybWF0dGVycykge1xuICAgIHRoaXMuc2VhcmNoU3RhdGUgPSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFO1xuICAgIHRoaXMudmVydGljYWxDb25maWdJZCA9IGRhdGEudmVydGljYWxDb25maWdJZCB8fCBudWxsO1xuICAgIHRoaXMucmVzdWx0c0NvdW50ID0gZGF0YS5yZXN1bHRzQ291bnQgfHwgMDtcbiAgICB0aGlzLmVuY29kZWRTdGF0ZSA9IGRhdGEuZW5jb2RlZFN0YXRlIHx8ICcnO1xuICAgIHRoaXMuYXBwbGllZFF1ZXJ5RmlsdGVycyA9IEFwcGxpZWRRdWVyeUZpbHRlci5mcm9tKGRhdGEuYXBwbGllZFF1ZXJ5RmlsdGVycyk7XG4gICAgdGhpcy5mYWNldHMgPSBkYXRhLmZhY2V0cyB8fCBudWxsO1xuICAgIHRoaXMucmVzdWx0cyA9IFJlc3VsdEZhY3RvcnkuZnJvbShkYXRhLnJlc3VsdHMsIGZvcm1hdHRlcnMsIHRoaXMudmVydGljYWxDb25maWdJZCk7XG4gICAgdGhpcy5tYXAgPSBTZWN0aW9uLnBhcnNlTWFwKGRhdGEucmVzdWx0cyk7XG4gICAgdGhpcy52ZXJ0aWNhbFVSTCA9IHVybCB8fCBudWxsO1xuICB9XG5cbiAgc3RhdGljIHBhcnNlTWFwIChyZXN1bHRzKSB7XG4gICAgbGV0IG1hcE1hcmtlcnMgPSBbXTtcblxuICAgIGxldCBjZW50ZXJDb29yZGluYXRlcyA9IHt9O1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCByZXN1bHRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAvLyBUT0RPKGJpbGx5KSBSZW1vdmUgbGVnYWN5IGZhbGxiYWNrIGZyb20gYWxsIGRhdGEgZm9ybWF0XG4gICAgICBsZXQgcmVzdWx0ID0gcmVzdWx0c1tqXS5kYXRhIHx8IHJlc3VsdHNbal07XG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUpIHtcbiAgICAgICAgaWYgKCFjZW50ZXJDb29yZGluYXRlcy5sYXRpdHVkZSkge1xuICAgICAgICAgIGNlbnRlckNvb3JkaW5hdGVzID0ge1xuICAgICAgICAgICAgbGF0aXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubGF0aXR1ZGUsXG4gICAgICAgICAgICBsb25naXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubG9uZ2l0dWRlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBtYXBNYXJrZXJzLnB1c2goe1xuICAgICAgICAgIGl0ZW06IHJlc3VsdCxcbiAgICAgICAgICBsYWJlbDogbWFwTWFya2Vycy5sZW5ndGggKyAxLFxuICAgICAgICAgIGxhdGl0dWRlOiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlLmxhdGl0dWRlLFxuICAgICAgICAgIGxvbmdpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sb25naXR1ZGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICdtYXBDZW50ZXInOiBjZW50ZXJDb29yZGluYXRlcyxcbiAgICAgICdtYXBNYXJrZXJzJzogbWFwTWFya2Vyc1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc2VjdGlvbiBmcm9tIHRoZSBwcm92aWRlZCBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBtb2R1bGVzIFRoZSByZXN1bHQgbW9kdWxlc1xuICAgKiBAcGFyYW0ge09iamVjdH0gdXJscyBUaGUgdGFiIHVybHNcbiAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fSBmb3JtYXR0ZXJzIEZpZWxkIGZvcm1hdHRlcnMgZm9yIHJlc3VsdHNcbiAgICovXG4gIHN0YXRpYyBmcm9tIChtb2R1bGVzLCB1cmxzLCBmb3JtYXR0ZXJzKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gW107XG4gICAgaWYgKCFtb2R1bGVzKSB7XG4gICAgICByZXR1cm4gc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmV3IFNlY3Rpb24obW9kdWxlcywgbnVsbCwgZm9ybWF0dGVycyk7XG4gICAgfVxuXG4gICAgLy8gT3VyIHNlY3Rpb25zIHNob3VsZCBjb250YWluIGEgcHJvcGVydHkgb2YgbWFwTWFya2VyIG9iamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNlY3Rpb25zLnB1c2goXG4gICAgICAgIG5ldyBTZWN0aW9uKFxuICAgICAgICAgIG1vZHVsZXNbaV0sXG4gICAgICAgICAgdXJsc1ttb2R1bGVzW2ldLnZlcnRpY2FsQ29uZmlnSWRdLFxuICAgICAgICAgIGZvcm1hdHRlcnNcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VjdGlvbnM7XG4gIH1cbn1cblxuY2xhc3MgQXBwbGllZFF1ZXJ5RmlsdGVyIHtcbiAgLy8gU3VwcG9ydCBsZWdhY3kgbW9kZWwgYW5kIG5ldyBtb2RlbCB1bnRpbCBmdWxseSBtaWdyYXRlZC5cbiAgLy8gVE9ETyhiaWxseSkgUmVtb3ZlIHRoZSBsZWZ0IGV4cHJlc3Npb24gZHVyaW5nIGFzc2lnbm1lbnQgd2hlbiBtaWdyYXRlZC5cbiAgY29uc3RydWN0b3IgKGFwcGxpZWRRdWVyeUZpbHRlcikge1xuICAgIHRoaXMua2V5ID0gYXBwbGllZFF1ZXJ5RmlsdGVyLmtleSB8fCBhcHBsaWVkUXVlcnlGaWx0ZXIuZGlzcGxheUtleTtcbiAgICB0aGlzLnZhbHVlID0gYXBwbGllZFF1ZXJ5RmlsdGVyLnZhbHVlIHx8IGFwcGxpZWRRdWVyeUZpbHRlci5kaXNwbGF5VmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbSAoYXBwbGllZFF1ZXJ5RmlsdGVycykge1xuICAgIGxldCBmaWx0ZXJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBsaWVkUXVlcnlGaWx0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmaWx0ZXJzLnB1c2gobmV3IEFwcGxpZWRRdWVyeUZpbHRlcihhcHBsaWVkUXVlcnlGaWx0ZXJzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXJzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBVbml2ZXJzYWxSZXN1bHRzICovXG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vc2VjdGlvbic7XG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pdmVyc2FsUmVzdWx0cyB7XG4gIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgdGhpcy5xdWVyeUlkID0gZGF0YS5xdWVyeUlkIHx8IG51bGw7XG4gICAgdGhpcy5zZWN0aW9ucyA9IGRhdGEuc2VjdGlvbnMgfHwgW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc2VhcmNoLCB1c2VkIHRvIHJlbmRlciBkaWZmZXJlbnQgdGVtcGxhdGVzIGJlZm9yZSwgZHVyaW5nLFxuICAgICAqIGFuZCBhZnRlciBsb2FkaW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnNlYXJjaFN0YXRlID0gZGF0YS5zZWFyY2hTdGF0ZSB8fCBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB1bml2ZXJzYWwgcmVzdWx0cyBmcm9tIHNlcnZlciBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZSBUaGUgc2VydmVyIHJlc3BvbnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB1cmxzIFRoZSB0YWIgdXJsc1xuICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59IGZvcm1hdHRlcnMgVGhlIGZpZWxkIGZvcm1hdHRlcnMgdG8gdXNlXG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UsIHVybHMsIGZvcm1hdHRlcnMpIHtcbiAgICByZXR1cm4gbmV3IFVuaXZlcnNhbFJlc3VsdHMoe1xuICAgICAgcXVlcnlJZDogcmVzcG9uc2UucXVlcnlJZCxcbiAgICAgIHNlY3Rpb25zOiBTZWN0aW9uLmZyb20ocmVzcG9uc2UubW9kdWxlcywgdXJscywgZm9ybWF0dGVycylcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBVbml2ZXJ2YWxSZXN1bHRzIG9iamVjdCByZXByZXNlbnRpbmcgbG9hZGluZyByZXN1bHRzXG4gICAqIEByZXR1cm4ge1VuaXZlcnNhbFJlc3VsdHN9XG4gICAqL1xuICBzdGF0aWMgc2VhcmNoTG9hZGluZyAoKSB7XG4gICAgcmV0dXJuIG5ldyBVbml2ZXJzYWxSZXN1bHRzKHsgc2VhcmNoU3RhdGU6IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRGlyZWN0QW5zd2VyICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdEFuc3dlciB7XG4gIGNvbnN0cnVjdG9yIChkaXJlY3RBbnN3ZXIgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGlyZWN0QW5zd2VyKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERpcmVjdEFuc3dlciBtb2RlbCBmcm9tIHRoZSBnaXZlbiBzZXJ2ZXIgZGF0YSBhbmQgZm9ybWF0dGVyc1xuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2UgVGhlIHNlcnZlciBkaXJlY3QgYW5zd2VyXG4gICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn0gZm9ybWF0dGVycyBUaGUgZm9ybWF0dGVycyB0byBhcHBseSB0byB0aGlzIGRpcmVjdCBhbnN3ZXJcbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSwgZm9ybWF0dGVycykge1xuICAgIGNvbnN0IGRhdGEgPSB7IC4uLnJlc3BvbnNlIH07XG4gICAgY29uc3QgeyBhbnN3ZXIsIHJlbGF0ZWRJdGVtIH0gPSBkYXRhO1xuXG4gICAgaWYgKGFuc3dlciAmJiBmb3JtYXR0ZXJzW2Fuc3dlci5maWVsZEFwaU5hbWVdKSB7XG4gICAgICBhbnN3ZXIudmFsdWUgPSBmb3JtYXR0ZXJzW2Fuc3dlci5maWVsZEFwaU5hbWVdKFxuICAgICAgICBhbnN3ZXIudmFsdWUsXG4gICAgICAgIHJlbGF0ZWRJdGVtLmRhdGEuZmllbGRWYWx1ZXMsXG4gICAgICAgIHJlbGF0ZWRJdGVtLnZlcnRpY2FsQ29uZmlnSWQsXG4gICAgICAgIHRydWUpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGlyZWN0QW5zd2VyKGRhdGEpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBOYXZpZ2F0aW9uICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24ge1xuICBjb25zdHJ1Y3RvciAodGFiT3JkZXIpIHtcbiAgICB0aGlzLnRhYk9yZGVyID0gdGFiT3JkZXIgfHwgW107XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChtb2R1bGVzKSB7XG4gICAgbGV0IG5hdiA9IFtdO1xuICAgIGlmICghbW9kdWxlcyB8fCAhQXJyYXkuaXNBcnJheShtb2R1bGVzKSkge1xuICAgICAgcmV0dXJuIG5hdjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBuYXYucHVzaChtb2R1bGVzW2ldLnZlcnRpY2FsQ29uZmlnSWQpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE5hdmlnYXRpb24obmF2KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgVmVydGljYWxSZXN1bHRzICovXG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vc2VjdGlvbic7XG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGljYWxSZXN1bHRzIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyBzZWFyY2hTdGF0ZTogU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURSB9LCBkYXRhKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZCB0aGUgcHJvdmlkZWQgcmVzdWx0cyB0byB0aGUgY3VycmVudCByZXN1bHRzXG4gICAqIEBwYXJhbSB7VmVydGljYWxSZXN1bHRzfSByZXN1bHRzIHRoZSByZXN1bHRzIHRvIGFwcGVuZCB0byB0aGUgY3VycmVudCByZXN1bHRzXG4gICAqL1xuICBhcHBlbmQgKHJlc3VsdHMpIHtcbiAgICBjb25zdCBtZXJnZWQgPSB7IC4uLnRoaXMgfTtcbiAgICBtZXJnZWQucmVzdWx0cyA9IHRoaXMucmVzdWx0cy5jb25jYXQocmVzdWx0cy5yZXN1bHRzKTtcbiAgICBtZXJnZWQubWFwLm1hcE1hcmtlcnMgPSB0aGlzLm1hcC5tYXBNYXJrZXJzLmNvbmNhdChyZXN1bHRzLm1hcC5tYXBNYXJrZXJzKTtcbiAgICByZXR1cm4gbmV3IFZlcnRpY2FsUmVzdWx0cyhtZXJnZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB2ZXJ0aWNhbCByZXN1bHRzIGZyb20gc2VydmVyIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlIFRoZSBzZXJ2ZXIgcmVzcG9uc2VcbiAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fSBmb3JtYXR0ZXJzIFRoZSBmaWVsZCBmb3JtYXR0ZXJzIHRvIHVzZVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlLCBmb3JtYXR0ZXJzKSB7XG4gICAgcmV0dXJuIG5ldyBWZXJ0aWNhbFJlc3VsdHMoU2VjdGlvbi5mcm9tKHJlc3BvbnNlLCBudWxsLCBmb3JtYXR0ZXJzKSk7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0IGEgVmVydGljYWxSZXN1bHRzIG9iamVjdCByZXByZXNlbnRpbmcgbG9hZGluZyByZXN1bHRzXG4gICAqIEByZXR1cm4ge1ZlcnRpY2FsUmVzdWx0c31cbiAgICovXG4gIHN0YXRpYyBzZWFyY2hMb2FkaW5nICgpIHtcbiAgICByZXR1cm4gbmV3IFZlcnRpY2FsUmVzdWx0cyh7IHNlYXJjaFN0YXRlOiBTZWFyY2hTdGF0ZXMuU0VBUkNIX0xPQURJTkcgfSk7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU3RvcmFnZUtleXMgKi9cblxuLyoqXG4gKiBTdG9yYWdlS2V5cyBpcyBhbiBFTlVNIGFyZSBjb25zaWRlcmVkIHRoZSByb290IGNvbnRleHRcbiAqIGZvciBob3cgZGF0YSBpcyBzdG9yZWQgYW5kIHNjb3BlZCBpbiB0aGUgc3RvcmFnZS5cbiAqXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIE5BVklHQVRJT046ICduYXZpZ2F0aW9uJyxcbiAgVU5JVkVSU0FMX1JFU1VMVFM6ICd1bml2ZXJzYWwtcmVzdWx0cycsXG4gIFZFUlRJQ0FMX1JFU1VMVFM6ICd2ZXJ0aWNhbC1yZXN1bHRzJyxcbiAgQVVUT0NPTVBMRVRFOiAnYXV0b2NvbXBsZXRlJyxcbiAgRElSRUNUX0FOU1dFUjogJ2RpcmVjdC1hbnN3ZXInLFxuICBGSUxURVI6ICdmaWx0ZXInLFxuICBRVUVSWTogJ3F1ZXJ5JyxcbiAgUVVFUllfSUQ6ICdxdWVyeS1pZCcsXG4gIEZBQ0VUX0ZJTFRFUjogJ2ZhY2V0LWZpbHRlcicsXG4gIERZTkFNSUNfRklMVEVSUzogJ2R5bmFtaWMtZmlsdGVycycsXG4gIFNFQVJDSF9MSU1JVDogJ3NlYXJjaC1saW1pdCcsXG4gIFBBUkFNUzogJ3BhcmFtcycsXG4gIFFVRVNUSU9OX1NVQk1JU1NJT046ICdxdWVzdGlvbi1zdWJtaXNzaW9uJ1xufTtcbiIsIi8qKiBAbW9kdWxlIER5bmFtaWNGaWx0ZXJzICovXG5cbi8qKlxuICogTW9kZWwgcmVwcmVzZW50aW5nIGEgc2V0IG9mIGR5bmFtaWMgZmlsdGVyc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljRmlsdGVycyB7XG4gIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGxpc3Qgb2YgZmlsdGVycyB0aGlzIG1vZGVsIGhvbGRzXG4gICAgICogQHR5cGUge3tsYWJlbDogc3RyaW5nLCBmaWVsZElkOiBzdHJpbmcsIG9wdGlvbnM6IG9iamVjdFtdfX1cbiAgICAgKi9cbiAgICB0aGlzLmZpbHRlcnMgPSBkYXRhLmZpbHRlcnMgfHwgW107XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcmdhbml6ZSAnZmFjZXRzJyBmcm9tIHRoZSBhcGkgcmVzcG9uc2UgaW50byBkeW5hbWljIGZpbHRlcnNcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlIGR5bmFtaWMgZmlsdGVyIHJlc3BvbnNlIGZyb20gdGhlIGFwaVxuICAgKiBAcmV0dXJucyB7RHluYW1pY0ZpbHRlcnN9XG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UpIHtcbiAgICBjb25zdCB7IGZhY2V0cyB9ID0gcmVzcG9uc2U7XG4gICAgY29uc3QgZHluYW1pY0ZpbHRlcnMgPSBmYWNldHMubWFwKGYgPT4gKHtcbiAgICAgIGxhYmVsOiBmWydkaXNwbGF5TmFtZSddLFxuICAgICAgZmllbGRJZDogZlsnZmllbGRJZCddLFxuICAgICAgb3B0aW9uczogZi5vcHRpb25zLm1hcChvID0+ICh7XG4gICAgICAgIGxhYmVsOiBvWydkaXNwbGF5TmFtZSddLFxuICAgICAgICBjb3VudExhYmVsOiBvWydjb3VudCddLFxuICAgICAgICBzZWxlY3RlZDogb1snc2VsZWN0ZWQnXSxcbiAgICAgICAgZmlsdGVyOiBvWydmaWx0ZXInXVxuICAgICAgfSkpXG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIG5ldyBEeW5hbWljRmlsdGVycyh7IGZpbHRlcnM6IGR5bmFtaWNGaWx0ZXJzIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hEYXRhVHJhbnNmb3JtZXIgKi9cblxuaW1wb3J0IFVuaXZlcnNhbFJlc3VsdHMgZnJvbSAnLi4vbW9kZWxzL3VuaXZlcnNhbHJlc3VsdHMnO1xuaW1wb3J0IERpcmVjdEFuc3dlciBmcm9tICcuLi9tb2RlbHMvZGlyZWN0YW5zd2VyJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL21vZGVscy9uYXZpZ2F0aW9uJztcbmltcG9ydCBWZXJ0aWNhbFJlc3VsdHMgZnJvbSAnLi4vbW9kZWxzL3ZlcnRpY2FscmVzdWx0cyc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgRHluYW1pY0ZpbHRlcnMgZnJvbSAnLi4vbW9kZWxzL2R5bmFtaWNmaWx0ZXJzJztcblxuLyoqXG4gKiBBIERhdGEgVHJhbnNmb3JtZXIgdGhhdCB0YWtlcyB0aGUgcmVzcG9uc2Ugb2JqZWN0IGZyb20gYSBTZWFyY2ggcmVxdWVzdFxuICogQW5kIHRyYW5zZm9ybXMgaW4gdG8gYSBmcm9udC1lbmQgb3JpZW50ZWQgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBvdXJcbiAqIGNvbXBvbmVudCBsaWJyYXJ5IGFuZCBjb3JlIHN0b3JhZ2UgdW5kZXJzdGFuZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoRGF0YVRyYW5zZm9ybWVyIHtcbiAgc3RhdGljIHRyYW5zZm9ybSAoZGF0YSwgdXJscyA9IHt9LCBmb3JtYXR0ZXJzKSB7XG4gICAgbGV0IHJlc3BvbnNlID0gZGF0YS5yZXNwb25zZTtcbiAgICByZXR1cm4ge1xuICAgICAgW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXTogcmVzcG9uc2UucXVlcnlJZCxcbiAgICAgIFtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXTogTmF2aWdhdGlvbi5mcm9tKHJlc3BvbnNlLm1vZHVsZXMpLFxuICAgICAgW1N0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVJdOiBEaXJlY3RBbnN3ZXIuZnJvbShyZXNwb25zZS5kaXJlY3RBbnN3ZXIsIGZvcm1hdHRlcnMpLFxuICAgICAgW1N0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTXTogVW5pdmVyc2FsUmVzdWx0cy5mcm9tKHJlc3BvbnNlLCB1cmxzLCBmb3JtYXR0ZXJzKVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgdHJhbnNmb3JtVmVydGljYWwgKGRhdGEsIGZvcm1hdHRlcnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXTogZGF0YS5yZXNwb25zZS5xdWVyeUlkLFxuICAgICAgW1N0b3JhZ2VLZXlzLk5BVklHQVRJT05dOiBuZXcgTmF2aWdhdGlvbigpLCAvLyBWZXJ0aWNhbCBkb2Vzbid0IHJlc3BvbmQgd2l0aCBvcmRlcmluZywgc28gdXNlIGVtcHR5IG5hdi5cbiAgICAgIFtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXTogVmVydGljYWxSZXN1bHRzLmZyb20oZGF0YS5yZXNwb25zZSwgZm9ybWF0dGVycyksXG4gICAgICBbU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTXTogRHluYW1pY0ZpbHRlcnMuZnJvbShkYXRhLnJlc3BvbnNlKVxuICAgIH07XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFF1ZXN0aW9uU3VibWlzc2lvbiAqL1xuXG4vKipcbiAqIFF1ZXN0aW9uU3VibWlzc2lvbiBpcyB0aGUgY29yZSBzdGF0ZSBtb2RlbFxuICogdG8gcG93ZXIgdGhlIFF1ZXN0aW9uU3VibWlzc2lvbiBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb25TdWJtaXNzaW9uIHtcbiAgY29uc3RydWN0b3IgKHF1ZXN0aW9uID0ge30sIGVycm9ycykge1xuICAgIC8qKlxuICAgICAqIFRoZSBhdXRob3Igb2YgdGhlIHF1ZXN0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSBxdWVzdGlvbi5uYW1lIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgcXVlc3Rpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZW1haWwgPSBxdWVzdGlvbi5lbWFpbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgcHJpdmFjeSBwb2xpY3kgd2FzIGFwcHJvdmVkXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5wcml2YWN5UG9saWN5ID0gcXVlc3Rpb24ucHJpdmFjeVBvbGljeSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXN0aW9uIHRvIGJlIHNlbnQgdG8gdGhlIHNlcnZlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5xdWVzdGlvblRleHQgPSBxdWVzdGlvbi5xdWVzdGlvblRleHQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFsdGVybmF0aXZlIHF1ZXN0aW9uIG1ldGEgaW5mb3JtYXRpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlc3Rpb25EZXNjcmlwdGlvbiA9IHF1ZXN0aW9uLnF1ZXN0aW9uRGVzY3JpcHRpb24gfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIENvbnRhaW5zIGFueSBlcnJvcnMgYWJvdXQgdGhlIHF1ZXN0aW9uIHN1Ym1pc3Npb25cbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzIHx8IG51bGw7XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIHN1Ym1pdHRlZCAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXN0aW9uU3VibWl0dGVkOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBlcnJvcnMgKHF1ZXN0aW9uLCBlcnJvcnMpIHtcbiAgICByZXR1cm4gUXVlc3Rpb25TdWJtaXNzaW9uKHF1ZXN0aW9uLCBlcnJvcnMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBDb3JlICovXG5cbmltcG9ydCBTZWFyY2hBcGkgZnJvbSAnLi9zZWFyY2gvc2VhcmNoYXBpJztcbmltcG9ydCBBdXRvQ29tcGxldGVBcGkgZnJvbSAnLi9zZWFyY2gvYXV0b2NvbXBsZXRlYXBpJztcbmltcG9ydCBRdWVzdGlvbkFuc3dlckFwaSBmcm9tICcuL3NlYXJjaC9xdWVzdGlvbmFuc3dlcmFwaSc7XG5cbmltcG9ydCBTZWFyY2hEYXRhVHJhbnNmb3JtZXIgZnJvbSAnLi9zZWFyY2gvc2VhcmNoZGF0YXRyYW5zZm9ybWVyJztcblxuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4vc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgVmVydGljYWxSZXN1bHRzIGZyb20gJy4vbW9kZWxzL3ZlcnRpY2FscmVzdWx0cyc7XG5pbXBvcnQgVW5pdmVyc2FsUmVzdWx0cyBmcm9tICcuL21vZGVscy91bml2ZXJzYWxyZXN1bHRzJztcbmltcG9ydCBRdWVzdGlvblN1Ym1pc3Npb24gZnJvbSAnLi9tb2RlbHMvcXVlc3Rpb25zdWJtaXNzaW9uJztcblxuLyoqXG4gKiBDb3JlIGlzIHRoZSBtYWluIGFwcGxpY2F0aW9uIGNvbnRhaW5lciBmb3IgYWxsIG9mIHRoZSBuZXR3b3JrIGFuZCBzdG9yYWdlXG4gKiByZWxhdGVkIGJlaGF2aW9ycyBvZiB0aGUgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmUge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5hcGlLZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYGFwaUtleWAuIFR5cGUgbXVzdCBiZSB7c3RyaW5nfScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmFuc3dlcnNLZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYGFuc3dlcnNLZXlgLiBUeXBlIG11c3QgYmUge3N0cmluZ30nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IEFQSSBLZXkgdXNlZCBmb3IgYWxsIHJlcXVlc3RzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwaUtleSA9IGNvbmZpZy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IEFuc3dlcnMgS2V5IHVzZWQgZm9yIGFsbCByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hbnN3ZXJzS2V5ID0gY29uZmlnLmFuc3dlcnNLZXk7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IGxvY2FsZSB1c2VkIGZvciBhbGwgcmVxdWVzdHMuIElmIG5vdCBzcGVjaWZpZWQsIGRlZmF1bHRzIHRvIFwiZW5cIiAoZm9yXG4gICAgICogYmFja3dhcmRzIGNvbXBhdGliaWxpdHkpLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9sb2NhbGUgPSBjb25maWcubG9jYWxlIHx8ICdlbic7XG5cbiAgICAvKipcbiAgICAgKiBBIG1hcCBvZiBmaWVsZCBmb3JtYXR0ZXJzIHVzZWQgdG8gZm9ybWF0IHJlc3VsdHMsIGlmIHByZXNlbnRcbiAgICAgKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpZWxkRm9ybWF0dGVycyA9IGNvbmZpZy5maWVsZEZvcm1hdHRlcnMgfHwge307XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY29yZSBkYXRhIHN0b3JhZ2UgdGhhdCBwb3dlcnMgdGhlIFVJXG4gICAgICogQHR5cGUge0dsb2JhbFN0b3JhZ2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2UgPSBjb25maWcuZ2xvYmFsU3RvcmFnZTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjb3JlIHBlcnNpc3RlbnQgc3RvcmFnZVxuICAgICAqIEB0eXBlIHtQZXJzaXN0ZW50U3RvcmFnZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGVyc2lzdGVudFN0b3JhZ2UgPSBjb25maWcucGVyc2lzdGVudFN0b3JhZ2U7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiBjb250YWluaW5nIHRoZSBpbnRlZ3JhdGlvbiB3aXRoIHRoZSBSRVNUZnVsIHNlYXJjaCBBUElcbiAgICAgKiBGb3IgYm90aCB2ZXJ0aWNhbCBhbmQgdW5pdmVyc2FsIHNlYXJjaFxuICAgICAqIEB0eXBlIHtTZWFyY2h9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zZWFyY2hlciA9IG5ldyBTZWFyY2hBcGkoe1xuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICBhbnN3ZXJzS2V5OiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgbG9jYWxlOiB0aGlzLl9sb2NhbGVcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIGNvbnRhaW5pbmcgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIFJFU1RmdWwgYXV0b2NvbXBsZXRlIEFQSVxuICAgICAqIEZvciBmaWx0ZXIgc2VhcmNoLCB2ZXJ0aWNhbCBhdXRvY29tcGxldGUsIGFuZCB1bml2ZXJzYWwgYXV0b2NvbXBsZXRlXG4gICAgICogQHR5cGUge0F1dG9jb21wbGV0ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2F1dG9Db21wbGV0ZSA9IG5ldyBBdXRvQ29tcGxldGVBcGkoe1xuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICBhbnN3ZXJzS2V5OiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgbG9jYWxlOiB0aGlzLl9sb2NhbGVcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBRJkEgcmVzdCBpbnRlcmZhY2VcbiAgICAgKiBAdHlwZSB7UXVlc3Rpb25BbnN3ZXJBcGl9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9xdWVzdGlvbkFuc3dlciA9IG5ldyBRdWVzdGlvbkFuc3dlckFwaSh7XG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBpbiB0aGUgY29udGV4dCBvZiBhIHZlcnRpY2FsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbEtleSB2ZXJ0aWNhbCBJRCBmb3IgdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge29iamVjdH0gcXVlcnkgVGhlIHF1ZXJ5IGRldGFpbHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmlucHV0IFRoZSBpbnB1dCB0byBzZWFyY2ggZm9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5maWx0ZXIgVGhlIGZpbHRlciB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuZmFjZXRGaWx0ZXIgVGhlIGZhY2V0IGZpbHRlciB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlcnkubGltaXQgVGhlIG1heCBudW1iZXIgb2YgcmVzdWx0cyB0byBpbmNsdWRlLCBtYXggb2YgNTBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1ZXJ5Lm9mZnNldCBUaGUgcmVzdWx0cyBvZmZzZXQsIGZvciBmZXRjaGluZyBtb3JlIHJlc3VsdHMgb2YgdGhlIHNhbWUgcXVlcnlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmlkIFRoZSBxdWVyeSBJRCB0byB1c2UuIElmIHBhZ2luZyB3aXRoaW4gYSBxdWVyeSwgdGhlIHNhbWUgSUQgc2hvdWxkIGJlIHVzZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBxdWVyeS5hcHBlbmQgSWYgdHJ1ZSwgYWRkcyB0aGUgcmVzdWx0cyBvZiB0aGlzIHF1ZXJ5IHRvIHRoZSBlbmQgb2YgdGhlIGN1cnJlbnQgcmVzdWx0cywgZGVmYXVsdHMgZmFsc2VcbiAgICovXG4gIHZlcnRpY2FsU2VhcmNoICh2ZXJ0aWNhbEtleSwgcXVlcnkpIHtcbiAgICBpZiAoIXF1ZXJ5LmFwcGVuZCkge1xuICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTLCBWZXJ0aWNhbFJlc3VsdHMuc2VhcmNoTG9hZGluZygpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoZXJcbiAgICAgIC52ZXJ0aWNhbFNlYXJjaCh2ZXJ0aWNhbEtleSwge1xuICAgICAgICBsaW1pdDogdGhpcy5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlNFQVJDSF9MSU1JVCksXG4gICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICBpc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZDogdGhpcy5faXNEeW5hbWljRmlsdGVyc0VuYWJsZWRcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBTZWFyY2hEYXRhVHJhbnNmb3JtZXIudHJhbnNmb3JtVmVydGljYWwocmVzcG9uc2UsIHRoaXMuX2ZpZWxkRm9ybWF0dGVycykpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWV9JRCwgZGF0YVtTdG9yYWdlS2V5cy5RVUVSWV9JRF0pO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLk5BVklHQVRJT04sIGRhdGFbU3RvcmFnZUtleXMuTkFWSUdBVElPTl0pO1xuXG4gICAgICAgIGlmIChxdWVyeS5hcHBlbmQpIHtcbiAgICAgICAgICBjb25zdCBtZXJnZWRSZXN1bHRzID0gdGhpcy5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFMpXG4gICAgICAgICAgICAuYXBwZW5kKGRhdGFbU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUU10pO1xuICAgICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUywgbWVyZ2VkUmVzdWx0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTLCBkYXRhW1N0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFNdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhW1N0b3JhZ2VLZXlzLkRZTkFNSUNfRklMVEVSU10pIHtcbiAgICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLkRZTkFNSUNfRklMVEVSUywgZGF0YVtTdG9yYWdlS2V5cy5EWU5BTUlDX0ZJTFRFUlNdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBzZWFyY2ggKHF1ZXJ5U3RyaW5nLCB1cmxzKSB7XG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUUywgVW5pdmVyc2FsUmVzdWx0cy5zZWFyY2hMb2FkaW5nKCkpO1xuXG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaGVyXG4gICAgICAudW5pdmVyc2FsU2VhcmNoKHF1ZXJ5U3RyaW5nKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gU2VhcmNoRGF0YVRyYW5zZm9ybWVyLnRyYW5zZm9ybShyZXNwb25zZSwgdXJscywgdGhpcy5fZmllbGRGb3JtYXR0ZXJzKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBkYXRhW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuTkFWSUdBVElPTiwgZGF0YVtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuRElSRUNUX0FOU1dFUiwgZGF0YVtTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFMsIGRhdGFbU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFNdLCB1cmxzKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVTVElPTl9TVUJNSVNTSU9OLCBuZXcgUXVlc3Rpb25TdWJtaXNzaW9uKHtcbiAgICAgICAgICBxdWVzdGlvblRleHQ6IHF1ZXJ5U3RyaW5nXG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGFuIGlucHV0LCBxdWVyeSBmb3IgYSBsaXN0IG9mIHNpbWlsYXIgcmVzdWx0cyBhbmQgc2V0IGludG8gc3RvcmFnZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgICAgIHRoZSBzdHJpbmcgdG8gYXV0b2NvbXBsZXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlVW5pdmVyc2FsIChpbnB1dCwgbmFtZXNwYWNlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5VW5pdmVyc2FsKGlucHV0KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke25hbWVzcGFjZX1gLCBkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGFuIGlucHV0LCBxdWVyeSBmb3IgYSBsaXN0IG9mIHNpbWlsYXIgcmVzdWx0cyBpbiB0aGUgcHJvdmlkZWQgdmVydGljYWxcbiAgICogYW5kIHNldCBpbnRvIHN0b3JhZ2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0ICAgICAgIHRoZSBzdHJpbmcgdG8gYXV0b2NvbXBsZXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmVydGljYWxLZXkgdGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIGV4cGVyaWVuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJhcktleSAgICAgIHRoZSBiYXIga2V5IGZvciB0aGUgZXhwZXJpZW5jZVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlVmVydGljYWwgKGlucHV0LCBuYW1lc3BhY2UsIHZlcnRpY2FsS2V5LCBiYXJLZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0NvbXBsZXRlXG4gICAgICAucXVlcnlWZXJ0aWNhbChpbnB1dCwgdmVydGljYWxLZXksIGJhcktleSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkFVVE9DT01QTEVURX0uJHtuYW1lc3BhY2V9YCwgZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhbiBpbnB1dCwgcHJvdmlkZSBhIGxpc3Qgb2Ygc3VpdGFibGUgZmlsdGVycyBmb3IgYXV0b2NvbXBsZXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0ICAgICAgICAgdGhlIHN0cmluZyB0byBzZWFyY2ggZm9yIGZpbHRlcnMgd2l0aFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlICAgICB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbEtleSAgIHRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBleHBlcmllbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiYXJLZXkgICAgICAgIHRoZSBiYXIga2V5IGZvciB0aGUgZXhwZXJpZW5jZVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlRmlsdGVyIChpbnB1dCwgbmFtZXNwYWNlLCB2ZXJ0aWNhbEtleSwgYmFyS2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5RmlsdGVyKGlucHV0LCB2ZXJ0aWNhbEtleSwgYmFyS2V5KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke25hbWVzcGFjZX1gLCBkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1Ym1pdHMgYSBxdWVzdGlvbiB0byB0aGUgc2VydmVyIGFuZCB1cGRhdGVzIHRoZSB1bmRlcmx5aW5nIHF1ZXN0aW9uIG1vZGVsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBxdWVzdGlvbiBUaGUgcXVlc3Rpb24gb2JqZWN0IHRvIHN1Ym1pdCB0byB0aGUgc2VydmVyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBxdWVzdGlvbi5lbnRpdHlJZCBUaGUgZW50aXR5IHRvIGFzc29jaWF0ZSB3aXRoIHRoZSBxdWVzdGlvbiAocmVxdWlyZWQpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5sYW51YWdlIFRoZSBsYW5ndWFnZSBvZiB0aGUgcXVlc3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLnNpdGUgVGhlIFwicHVibGlzaGVyXCIgb2YgdGhlIChlLmcuICdGSVJTVF9QQVJUWScpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5uYW1lIFRoZSBuYW1lIG9mIHRoZSBhdXRob3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLmVtYWlsIFRoZSBlbWFpbCBhZGRyZXNzIG9mIHRoZSBhdXRob3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLnF1ZXN0aW9uVGV4dCBUaGUgcXVlc3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLnF1ZXN0aW9uRGVzY3JpcHRpb24gQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcXVlc3Rpb25cbiAgICovXG4gIHN1Ym1pdFF1ZXN0aW9uIChxdWVzdGlvbikge1xuICAgIHJldHVybiB0aGlzLl9xdWVzdGlvbkFuc3dlclxuICAgICAgLnN1Ym1pdFF1ZXN0aW9uKHF1ZXN0aW9uKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoXG4gICAgICAgICAgU3RvcmFnZUtleXMuUVVFU1RJT05fU1VCTUlTU0lPTixcbiAgICAgICAgICBRdWVzdGlvblN1Ym1pc3Npb24uc3VibWl0dGVkKCkpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmVzIHRoZSBnaXZlbiBxdWVyeSBpbnRvIHN0b3JhZ2UsIHRvIGJlIHVzZWQgZm9yIHRoZSBuZXh0IHNlYXJjaFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgdGhlIHF1ZXJ5IHRvIHN0b3JlXG4gICAqL1xuICBzZXRRdWVyeSAocXVlcnkpIHtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZLCBxdWVyeSk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmVzIHRoZSBwcm92aWRlZCBxdWVyeSBJRCwgdG8gYmUgdXNlZCBpbiBhbmFseXRpY3NcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5SWQgVGhlIHF1ZXJ5IGlkIHRvIHN0b3JlXG4gICAqL1xuICBzZXRRdWVyeUlkIChxdWVyeUlkKSB7XG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWV9JRCwgcXVlcnlJZCk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmVzIHRoZSBnaXZlbiBmaWx0ZXIgaW50byBzdG9yYWdlLCB0byBiZSB1c2VkIGZvciB0aGUgbmV4dCBzZWFyY2hcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqIEBwYXJhbSB7RmlsdGVyfSBmaWx0ZXIgICAgdGhlIGZpbHRlciB0byBzZXRcbiAgICovXG4gIHNldEZpbHRlciAobmFtZXNwYWNlLCBmaWx0ZXIpIHtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHtuYW1lc3BhY2V9YCwgZmlsdGVyKTtcbiAgfVxuXG4gIHNldEZhY2V0RmlsdGVyIChuYW1lc3BhY2UsIGZpbHRlcikge1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuRkFDRVRfRklMVEVSfS4ke25hbWVzcGFjZX1gLCBmaWx0ZXIpO1xuICB9XG5cbiAgZW5hYmxlRHluYW1pY0ZpbHRlcnMgKCkge1xuICAgIHRoaXMuX2lzRHluYW1pY0ZpbHRlcnNFbmFibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHNldFNlYXJjaExpbWl0IChsaW1pdCkge1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuU0VBUkNIX0xJTUlULCBsaW1pdCk7XG4gIH1cblxuICBvbiAoZXZ0LCBtb2R1bGVJZCwgY2IpIHtcbiAgICByZXR1cm4gdGhpcy5nbG9iYWxTdG9yYWdlLm9uKGV2dCwgbW9kdWxlSWQsIGNiKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQ29tcG9uZW50TWFuYWdlciAqL1xuXG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuXG4vKipcbiAqIENvbXBvbmVudE1hbmFnZXIgaXMgYSBTaW5nbGV0b25lIHRoYXQgY29udGFpbnMgYm90aCBhbiBpbnRlcm5hbCByZWdpc3RyeSBvZlxuICogZWxpZ2libGUgY29tcG9uZW50cyB0byBiZSBjcmVhdGVkLCBhcyB3ZWxsIGFzIGtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50XG4gKiBpbnN0YW50aWF0ZWQgYW5kIGFjdGl2ZSBjb21wb25lbnRzLlxuICpcbiAqIEFMTCBjb21wb25lbnRzIHNob3VsZCBiZSBjb25zdHJ1Y3RlZCB1c2luZyB0aGUge0NvbXBvbmVudE1hbmFnZXJ9IHZpYSBpdHMgYGNyZWF0ZWAgbWV0aG9kLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIGlmICghQ29tcG9uZW50TWFuYWdlci5zZXRJbnN0YW5jZSh0aGlzKSkge1xuICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9uZW50IHJlZ2lzdHJ5IGlzIGFuIGludGVybmFsIG1hcCwgdGhhdCBjb250YWluc1xuICAgICAqIGFsbCBhdmFpbGFibGUgY29tcG9uZW50IENMQVNTRVMgdXNlZCBmb3IgY3JlYXRpb24gb3Igb3ZlcnJpZGUuXG4gICAgICogRWFjaCBjb21wb25lbnQgY2xhc3MgaGFzIGEgdW5pcXVlIFRZUEUsIHdoaWNoIGlzIHVzZWQgYXMgdGhlIGtleSBmb3IgdGhlIHJlZ2lzdHJ5XG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9jb21wb25lbnRSZWdpc3RyeSA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFjdGl2ZSBjb21wb25lbnRzIGlzIGFuIGludGVybmFsIGNvbnRhaW5lciB0byBrZWVwIHRyYWNrXG4gICAgICogb2YgYWxsIG9mIHRoZSBjb21wb25lbnRzIHRoYXQgaGF2ZSBiZWVuIGNvbnN0cnVjdGVkXG4gICAgICovXG4gICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNvcmUgbGlicmFyeSBkZXBlbmRlbmN5XG4gICAgICpcbiAgICAgKiBUaGUgQ29yZSBjb250YWlucyBib3RoIHRoZSBzdG9yYWdlIEFORCBzZXJ2aWNlcyB0aGF0IGFyZSBuZWVkZWQgZm9yIHBlcmZvcm1pbmcgb3BlcmF0aW9uc1xuICAgICAqIGxpa2Ugc2VhcmNoIGFuZCBhdXRvIGNvbXBsZXRlLlxuICAgICAqXG4gICAgICogVGhlIHN0b3JhZ2UgaXMgdGhlIHNvdXJjZSBvZiB0cnV0aCBmb3IgdGhlIHN0YXRlIG9mIEFMTCBjb21wb25lbnRzLlxuICAgICAqIFdoZW5ldmVyIHRoZSBzdG9yYWdlIGlzIHVwZGF0ZWQsIHRoZSBzdGF0ZSBnZXRzIHB1c2hlZCBkb3duIHRvIHRoZSBuZWNlc3NhcnkgY29tcG9uZW50cy5cbiAgICAgKiBAdHlwZSB7Q29yZX1cbiAgICAgKi9cbiAgICB0aGlzLl9jb3JlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBwcmltYXJ5IHJlbmRlcmVyIHRvIHVzZSBmb3IgYWxsIGNvbXBvbmVudHNcbiAgICAgKiBAdHlwZSB7SGFuZGxlYmFyc1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3JlbmRlcmVyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBhbmFseXRpY3MgcmVwb3J0ZXIgZGVwZW5kZW5jeVxuICAgICAqL1xuICAgIHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyID0gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBzZXRJbnN0YW5jZSAoaW5zdGFuY2UpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UgKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgc2V0UmVuZGVyZXIgKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldENvcmUgKGNvcmUpIHtcbiAgICB0aGlzLl9jb3JlID0gY29yZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldEFuYWx5dGljc1JlcG9ydGVyIChyZXBvcnRlcikge1xuICAgIHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyID0gcmVwb3J0ZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXJzIGEgY29tcG9uZW50IHRvIGJlIGVsaWdpYmxlIGZvciBjcmVhdGlvbiBhbmQgb3ZlcnJpZGUuXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBUaGUgQ29tcG9uZW50IENsYXNzIHRvIHJlZ2lzdGVyXG4gICAqL1xuICByZWdpc3RlciAoY29tcG9uZW50Q2xhenopIHtcbiAgICB0aGlzLl9jb21wb25lbnRSZWdpc3RyeVtjb21wb25lbnRDbGF6ei50eXBlXSA9IGNvbXBvbmVudENsYXp6O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZSBpcyB0aGUgZW50cnkgcG9pbnQgZm9yIGNvbnN0cnVjdGluZyBhbnkgYW5kIGFsbCBjb21wb25lbnRzLlxuICAgKiBJdCB3aWxsIGluc3RhbnRpYXRlIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQsIGFuZCBib3RoIGFwcGx5XG4gICAqIGluaXRpYWwgc3RhdGUgZnJvbSB0aGUgc3RvcmFnZSBhbmQgYmluZCBpdCB0byB0aGUgc3RvcmFnZSBmb3IgdXBkYXRlcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudFR5cGUgVGhlIGNvbXBvbmVudCB0eXBlIHRvIGNyZWF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBUaGUgb3B0aW9ucyB0byBwaXBlIHRvIHRoZSBjb25zdHJ1Y3Rpb24gb2YgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgY3JlYXRlIChjb21wb25lbnRUeXBlLCBvcHRzKSB7XG4gICAgLy8gRXZlcnkgY29tcG9uZW50IG5lZWRzIGxvY2FsIGFjY2VzcyB0byB0aGUgY29tcG9uZW50IG1hbmFnZXJcbiAgICAvLyBiZWNhdXNlIHNvbWV0aW1lcyBjb21wb25lbnRzIGhhdmUgc3ViY29tcG9uZW50cyB0aGF0IG5lZWQgdG8gYmVcbiAgICAvLyBjb25zdHJ1Y3RlZCBkdXJpbmcgY3JlYXRpb25cbiAgICBvcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb3JlOiB0aGlzLl9jb3JlLFxuICAgICAgcmVuZGVyZXI6IHRoaXMuX3JlbmRlcmVyLFxuICAgICAgYW5hbHl0aWNzUmVwb3J0ZXI6IHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyLFxuICAgICAgY29tcG9uZW50TWFuYWdlcjogdGhpc1xuICAgIH0sIG9wdHMpO1xuXG4gICAgbGV0IGNvbXBvbmVudENsYXNzID0gdGhpcy5fY29tcG9uZW50UmVnaXN0cnlbY29tcG9uZW50VHlwZV07XG5cbiAgICBpZiAoXG4gICAgICAhY29tcG9uZW50Q2xhc3MuYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkKCkgJiZcbiAgICAgIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMuc29tZShjID0+IGMubmFtZSA9PT0gb3B0cy5uYW1lKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgYEFub3RoZXIgY29tcG9uZW50IHdpdGggbmFtZSAke29wdHMubmFtZX0gYWxyZWFkeSBleGlzdHNgLFxuICAgICAgICBjb21wb25lbnRUeXBlKTtcbiAgICB9XG5cbiAgICAvLyBJbnN0YW50aWF0ZSBvdXIgbmV3IGNvbXBvbmVudCBhbmQga2VlcCB0cmFjayBvZiBpdFxuICAgIGxldCBjb21wb25lbnQgPVxuICAgICAgbmV3IHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5W2NvbXBvbmVudFR5cGVdKG9wdHMpXG4gICAgICAgIC5pbml0KG9wdHMpO1xuXG4gICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIGdsb2JhbCBzdG9yYWdlIHRvIHBvd2VyIHN0YXRlLCBhcHBseSB0aGUgc3RhdGVcbiAgICAvLyBmcm9tIHRoZSBzdG9yYWdlIHRvIHRoZSBjb21wb25lbnQsIGFuZCB0aGVuIGJpbmQgdGhlIGNvbXBvbmVudFxuICAgIC8vIHN0YXRlIHRvIHRoZSBzdG9yYWdlIHZpYSBpdHMgdXBkYXRlc1xuICAgIGlmICh0aGlzLl9jb3JlICYmIHRoaXMuX2NvcmUuZ2xvYmFsU3RvcmFnZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKGNvbXBvbmVudC5tb2R1bGVJZCA9PT0gdW5kZWZpbmVkIHx8IGNvbXBvbmVudC5tb2R1bGVJZCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jb3JlLmdsb2JhbFN0b3JhZ2VcbiAgICAgICAgLm9uKCd1cGRhdGUnLCBjb21wb25lbnQubW9kdWxlSWQsIChkYXRhKSA9PiB7XG4gICAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgcHJvdmlkZWQgY29tcG9uZW50IGZyb20gdGhlIGxpc3Qgb2YgYWN0aXZlIGNvbXBvbmVudHMgYW5kIHJlbW92ZVxuICAgKiB0aGUgYXNzb2NpYXRlZCBzdG9yYWdlIGV2ZW50IGxpc3RlbmVyXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCB0byByZW1vdmVcbiAgICovXG4gIHJlbW92ZSAoY29tcG9uZW50KSB7XG4gICAgdGhpcy5fY29yZS5nbG9iYWxTdG9yYWdlLm9mZigndXBkYXRlJywgY29tcG9uZW50Lm1vZHVsZUlkKTtcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5maW5kSW5kZXgoYyA9PiBjLm5hbWUgPT09IGNvbXBvbmVudC5uYW1lKTtcbiAgICB0aGlzLl9hY3RpdmVDb21wb25lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBnZXRBY3RpdmVDb21wb25lbnQgKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5maW5kKGMgPT4gYy5jb25zdHJ1Y3Rvci50eXBlID09PSB0eXBlKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVuZGVyZXIgKi9cblxuLyoqXG4gKiBSZW5kZXJlciBpcyBhbiBhYnN0cmFjdCBjbGFzcyB0aGF0IGFsbCBSZW5kZXJlcnMgc2hvdWxkIGV4dGVuZCBhbmQgaW1wbGVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcbiAgLyoqXG4gICAqIHJlbmRlciBpcyBhIGNvcmUgbWV0aG9kIGZvciBhbGwgcmVuZGVyZXJzLlxuICAgKiBBbGwgaW1wbGVtZW50YXRpb25zIHNob3VsZCBvdmVycmlkZSB0aGlzIGNsYXNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKi9cbiAgcmVuZGVyICh0ZW1wbGF0ZSwgZGF0YSkge1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHJlZ2lzdGVySGVscGVyIChuYW1lLCBjYikge1xuXG4gIH1cblxuICBjb21waWxlICh0ZW1wbGF0ZSkge1xuXG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEhhbmRsZWJhcnNSZW5kZXJlciAqL1xuXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbi8qKlxuICogSGFuZGxlYmFyc1JlbmRlcmVyIGlzIGEgd3JhcHBlciBhcm91bmQgdGhlIG5hdGl2YXRlIGhhbmRsZWJhcnMgcmVuZGVyZXIuXG4gKiBAZXh0ZW5kcyBSZW5kZXJlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYW5kbGViYXJzUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yICh0ZW1wbGF0ZXMgPSB7fSwgb3B0cyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBoYW5kbGViYXJzIGNvbXBpbGVyXG4gICAgICogQHR5cGUge0hhbmRsZWJhcnN9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9oYW5kbGViYXJzID0gdGVtcGxhdGVzLl9oYiB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIHByZS1jb21waWxlZCBoYW5kbGViYXJzIHRlbXBsYXRlc1xuICAgICAqIEB0eXBlIHtIYW5kbGViYXJzfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVzID0gdGVtcGxhdGVzIHx8IHt9O1xuICB9XG5cbiAgaW5pdCAodGVtcGxhdGVzKSB7XG4gICAgLy8gQXNzaWduIHRoZSBoYW5kbGViYXJzIGNvbXBpbGVyIGFuZCB0ZW1wbGF0ZXMgYmFzZWQgb25cbiAgICAvLyBpbmZvcm1hdGlvbiBwcm92aWRlZCBmcm9tIGV4dGVybmFsIGRlcCAoaW4gZGVmYXVsdCBjYXNlLCBpdCBjb21lcyBmcm9tIGV4dGVybmFsIHNlcnZlciByZXF1ZXN0KVxuICAgIHRoaXMuX2hhbmRsZWJhcnMgPSB0ZW1wbGF0ZXMuX2hiO1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHRlbXBsYXRlcztcblxuICAgIC8vIFRPRE8oYmlsbHkpIE9uY2Ugd2UgcmUtd3JpdGUgdGVtcGxhdGVzIHVzaW5nIHRoZSBuZXcgaGVscGVycyBsaWJyYXJ5XG4gICAgLy8gd2UgcHJvYmFibHkgZG9uJ3QgbmVlZCB0aGVzZSBjdXN0b20gaGVscGVycyBhbnltb3JlXG4gICAgdGhpcy5fcmVnaXN0ZXJDdXN0b21IZWxwZXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXJIZWxwZXIgaXMgYSBwdWJsaWMgaW50ZXJmYWNlIGZvciBleHRlcm5hbCBkZXBlbmRlbmNpZXMgdG9cbiAgICogcmVnaXN0ZXIgdGhlaXIgb3duIGN1c3RvbSBoZWxwZXJzIHRvIG91ciBpbnRlcm5hbCBIYW5kbGViYXJzIENvbXBpbGVyXG4gICAqL1xuICByZWdpc3RlckhlbHBlciAobmFtZSwgY2IpIHtcbiAgICB0aGlzLl9oYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKG5hbWUsIGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb21waWxlIGEgaGFuZGxlYmFycyB0ZW1wbGF0ZSBzbyB0aGF0IGl0IGNhbiBiZSByZW5kZXJlZCxcbiAgICogdXNpbmcgdGhlIHtIYW5kbGViYXJzfSBjb21waWxlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgVGhlIHRlbXBsYXRlIHN0cmluZyB0byBjb21waWxlXG4gICAqL1xuICBjb21waWxlICh0ZW1wbGF0ZSkge1xuICAgIGlmICh0eXBlb2YgdGVtcGxhdGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9oYW5kbGViYXJzLmNvbXBpbGUodGVtcGxhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbmRlciB3aWxsIHJlbmRlciBhIHRlbXBsYXRlIHdpdGggZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFByb3ZpZGUgZWl0aGVyIGEgdGVtcGxhdGVOYW1lIG9yIGEgcHJlLWNvbXBpbGVkIHRlbXBsYXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHByb3ZpZGUgdG8gdGhlIHRlbXBsYXRlXG4gICAqL1xuICByZW5kZXIgKGNvbmZpZywgZGF0YSkge1xuICAgIC8vIElmIGEgY3VzdG9tIHRlbXBsYXRlIGlzIHByb3ZpZGVkLCB1c2UgaXQsXG4gICAgLy8gb3RoZXJ3aXNlIGZhbGwgYmFjayB0byB0aGUgdGVtcGxhdGUgbmFtZVxuICAgIC8vIFRPRE8oYmlsbHkpIFRoaXMgaW50ZXJmYWNlIHNob3VsZCBwcm9iYWJseSBiZSBsZXNzIHVnbHlcbiAgICBpZiAoY29uZmlnLnRlbXBsYXRlICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gY29uZmlnLnRlbXBsYXRlKGRhdGEpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVzW2NvbmZpZy50ZW1wbGF0ZU5hbWVdKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBmaW5kL3JlbmRlciB0ZW1wbGF0ZTogJyArIGNvbmZpZy50ZW1wbGF0ZU5hbWUsIGUpO1xuICAgIH1cbiAgfVxuXG4gIF9yZWdpc3RlckN1c3RvbUhlbHBlcnMgKCkge1xuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2lmZXEnLCBmdW5jdGlvbiAoYXJnMSwgYXJnMiwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIChhcmcxID09PSBhcmcyKSA/IG9wdGlvbnMuZm4odGhpcykgOiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdpZm5vdGVxJywgZnVuY3Rpb24gKGFyZzEsIGFyZzIsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiAoYXJnMSAhPT0gYXJnMikgPyBvcHRpb25zLmZuKHRoaXMpIDogb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignZm9ybWF0UGhvbmVOdW1iZXInLCBmdW5jdGlvbiAocGhvbmVOdW1iZXJTdHJpbmcpIHtcbiAgICAgIHZhciBjbGVhbmVkID0gKCcnICsgcGhvbmVOdW1iZXJTdHJpbmcpLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG4gICAgICB2YXIgbWF0Y2ggPSBjbGVhbmVkLm1hdGNoKC9eKDF8KT8oXFxkezN9KShcXGR7M30pKFxcZHs0fSkkLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdmFyIGludGxDb2RlID0gKG1hdGNoWzFdID8gJysxICcgOiAnJyk7XG4gICAgICAgIHJldHVybiBbaW50bENvZGUsICcoJywgbWF0Y2hbMl0sICcpICcsIG1hdGNoWzNdLCAnLScsIG1hdGNoWzRdXS5qb2luKCcnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignYXNzaWduJywgZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIG9wdGlvbnMgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmICghb3B0aW9ucy5kYXRhLnJvb3QpIHtcbiAgICAgICAgb3B0aW9ucy5kYXRhLnJvb3QgPSB7fTtcbiAgICAgIH1cblxuICAgICAgbGV0IHYgPSAnJztcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgdiA9IHYgKyBhcmdzW2ldO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLmRhdGEucm9vdFtuYW1lXSA9IHY7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdqc29uJywgZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gbmFtZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgID8gJydcbiAgICAgICAgOiBKU09OLnN0cmluZ2lmeShuYW1lKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEhhbmRsZWJhcnNSZW5kZXJlciBmcm9tICcuL2hhbmRsZWJhcnNyZW5kZXJlcic7XG5cbi8vIEluIHRoZSBmdXR1cmUsIHRoaXMgd2lsbCBjb250YWluIGFsbCBkaWZmZXJlbnQgdHlwZXMgb2YgcmVuZGVyZXJzXG4vLyBFLmcuIE11c3RhY2hlLCBTT1ksIEhhbmRsZUJhcnMsIFJlYWN0LCBldGMuXG5leHBvcnQgY29uc3QgUmVuZGVyZXJzID0ge1xuICBTT1k6IFJlbmRlcmVyLFxuICBIYW5kbGViYXJzOiBIYW5kbGViYXJzUmVuZGVyZXJcbn07XG4iLCIvKiogQG1vZHVsZSBET00gKi9cblxuLyogZ2xvYmFsIEhUTUxFbGVtZW50LCBIVE1MRG9jdW1lbnQsIFdpbmRvdywgRXZlbnQgKi9cblxubGV0IGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuXG4vKipcbiAqIFN0YXRpYyBpbnRlcmZhY2UgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIERPTSBBUEkuXG4gKiBAbmFtZXNwYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTSB7XG4gIHN0YXRpYyBzZXR1cCAoZCwgcCkge1xuICAgIGRvY3VtZW50ID0gZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGUgYSBIVE1MRWxlbWVudCBmcm9tIGFuZCBIVE1MIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gaHRtbCBUaGUgSFRNTCB0byBwYXJzZSB0byBhIERPTSBub2RlLlxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGUgKGh0bWwpIHtcbiAgICBpZiAoJ2NyZWF0ZVJhbmdlJyBpbiBkb2N1bWVudCkge1xuICAgICAgLy8gcHJlZmVyIHRoaXMgaW1wbGVtZW50YXRpb24gYXMgaXQgaGFzIHdpZGVyIGJyb3dzZXIgc3VwcG9ydFxuICAgICAgLy8gYW5kIGl0J3MgYmV0dGVyIHBlcmZvcm1pbmcuXG4gICAgICAvLyBzZWUgaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvY29udmVydC1odG1sLXN0aW5ncy1kb20tbm9kZXNcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGh0bWwpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWcpO1xuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvLyBmYWxsYmFjayB0byB0aGlzIGJlY2F1c2Ugb2YgYSBidWcgaW4ganNkb20gdGhhdCBjYXVzZXMgdGVzdHMgdG8gZmFpbFxuICAgIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pzZG9tL2pzZG9tL2lzc3Vlcy8zOTlcbiAgICByZXR1cm4gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC9odG1sJykuYm9keTtcbiAgfVxuXG4gIC8qKlxuICAgKiBxdWVyeSB0aGUgRE9NIGZvciBhIGdpdmVuIGNzcyBzZWxlY3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgT3B0aW9uYWwgY29udGV4dCB0byB1c2UgZm9yIGEgc2VhcmNoLiBEZWZhdWx0cyB0byBkb2N1bWVudCBpZiBub3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciB0aGUgQ1NTIHNlbGVjdG9yIHRvIHF1ZXJ5IGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IHRoZSBGSVJTVCBub2RlIGl0IGZpbmRzLCBpZiBhbnlcbiAgICovXG4gIHN0YXRpYyBxdWVyeSAocGFyZW50LCBzZWxlY3Rvcikge1xuICAgIC8vIEZhY2FkZSwgc2hpZnRpbmcgdGhlIHNlbGVjdG9yIHRvIHRoZSBwYXJlbnQgYXJndW1lbnQgaWYgb25seSBvbmVcbiAgICAvLyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RvciA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgV2luZG93IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTERvY3VtZW50KSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBxdWVyeSB0aGUgRE9NIGZvciBhIGdpdmVuIGNzcyBzZWxlY3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgT3B0aW9uYWwgY29udGV4dCB0byB1c2UgZm9yIGEgc2VhcmNoLiBEZWZhdWx0cyB0byBkb2N1bWVudCBpZiBub3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciB0aGUgQ1NTIHNlbGVjdG9yIHRvIHF1ZXJ5IGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IHRoZSBGSVJTVCBub2RlIGl0IGZpbmRzLCBpZiBhbnlcbiAgICovXG4gIHN0YXRpYyBxdWVyeUFsbCAocGFyZW50LCBzZWxlY3Rvcikge1xuICAgIC8vIEZhY2FkZSwgc2hpZnRpbmcgdGhlIHNlbGVjdG9yIHRvIHRoZSBwYXJlbnQgYXJndW1lbnQgaWYgb25seSBvbmVcbiAgICAvLyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RvciA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIC8vIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSBjbGllbnQgY29kZSBpcyB1c2luZyBhIHBvaW50ZXIgdG8gYSBkb20gbm9kZSBhbmQgaXQncyBudWxsLCBlLmcuIHRoaXMuX2NvbnRhaW5lclxuICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBXaW5kb3cpIHtcbiAgICAgIHJldHVybiBbc2VsZWN0b3JdO1xuICAgIH1cblxuICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gIH1cblxuICBzdGF0aWMgb25SZWFkeSAoY2IpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGVkJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKSB7XG4gICAgICBjYigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIERPTS5vbihkb2N1bWVudCwgJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlRWxlIHdpbGwgY3JlYXRlIGEge0hUTUxFbGVtZW50fSBhbmQgYXBwbHkgdGhlIHByb3BlcnRpZXMgYXR0cmlidXRlcyB0aHJvdWdoIGFuIG9iamVjdCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGVsIFRoZSBlbGVtZW50IGB0YWdgIG5hbWUgdG8gY29uc3RydWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzX2RhdGEgT3B0aW9uYWwgYXR0cmlidXRlcyB0byBhcHBseSB0byB0aGUgbmV3IEhUTUxFbGVtZW50XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlRWwgKGVsLCBvcHRzX2RhdGEgPSB7fSkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbCk7XG4gICAgbGV0IHByb3BzID0gT2JqZWN0LmtleXMob3B0c19kYXRhKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9wc1tpXSA9PT0gJ2NsYXNzJykge1xuICAgICAgICBET00uYWRkQ2xhc3Mobm9kZSwgb3B0c19kYXRhW3Byb3BzW2ldXSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBub2RlW3Byb3BzW2ldXSA9IG9wdHNfZGF0YVtwcm9wc1tpXV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgYXBwZW5kIChwYXJlbnQsIG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBub2RlID0gcGFyZW50O1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXJlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJlbnQgPSBET00ucXVlcnkocGFyZW50KTtcbiAgICB9XG5cbiAgICAvLyBTdXBwb3J0IEhUTUwgaW5qZWN0aW9uIGFzIHdlbGwgYXMgSFRNTEVsZW1lbnQgYXBwZW5kc1xuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyQmVnaW4nLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhZGRDbGFzcyAobm9kZSwgY2xhc3NOYW1lKSB7XG4gICAgbGV0IGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJywnKTtcbiAgICBsZXQgbGVuID0gY2xhc3Nlcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBub2RlLmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGVtcHR5IChwYXJlbnQpIHtcbiAgICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICBzdGF0aWMgY3NzIChzZWxlY3Rvciwgc3R5bGVzKSB7XG4gICAgbGV0IG5vZGUgPSBET00ucXVlcnkoc2VsZWN0b3IpO1xuXG4gICAgZm9yIChsZXQgcHJvcCBpbiBzdHlsZXMpIHtcbiAgICAgIG5vZGUuc3R5bGVbcHJvcF0gPSBzdHlsZXNbcHJvcF07XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGF0dHIgKHNlbGVjdG9yLCBhdHRyLCB2YWwpIHtcbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLnNldEF0dHJpYnV0ZShhdHRyLCB2YWwpO1xuICB9XG5cbiAgc3RhdGljIGF0dHJpYnV0ZXMgKHNlbGVjdG9yLCBhdHRycykge1xuICAgIE9iamVjdC5lbnRyaWVzKGF0dHJzKVxuICAgICAgLmZvckVhY2goKFthdHRyLCB2YWxdKSA9PiB0aGlzLmF0dHIoc2VsZWN0b3IsIGF0dHIsIHZhbCkpO1xuICB9XG5cbiAgc3RhdGljIHRyaWdnZXIgKHNlbGVjdG9yLCBldmVudCwgc2V0dGluZ3MpIHtcbiAgICBsZXQgZSA9IG5ldyBFdmVudChldmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAnYnViYmxlcyc6IHRydWUsXG4gICAgICAnY2FuY2VsYWJsZSc6IHRydWVcbiAgICB9LCBzZXR0aW5ncyB8fCB7fSkpO1xuXG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5kaXNwYXRjaEV2ZW50KGUpO1xuICB9XG5cbiAgc3RhdGljIG9uIChzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgb25jZSAoc2VsZWN0b3IsIGV2dCwgaGFuZGxlcikge1xuICAgIERPTS5xdWVyeShzZWxlY3RvcikuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIHN0YXRpYyBvZmYgKHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpIHtcbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWxlZ2F0ZSAoY3R4dCwgc2VsZWN0b3IsIGV2dCwgaGFuZGxlcikge1xuICAgIGxldCBlbCA9IERPTS5xdWVyeShjdHh0KTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2dCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgd2hpbGUgKCF0YXJnZXQuaXNFcXVhbE5vZGUoZWwpKSB7XG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICBoYW5kbGVyKGV2ZW50LCB0YXJnZXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBFdmVudEVtaXR0ZXIgKi9cblxuLyoqXG4gKiBFdmVudEVtaXR0ZXIgaXMgYSBiYXNlIGNsYXNzIGZvciBhbnkgb2JqZWN0IHRoYXQgd2FudHMgdG8gZXhwb3NlXG4gKiBhIHB1Yi9zdWIgaW50ZXJmYWNlLCBmb3IgZW1pdHRpbmcgbWVzc2FnZXMgYW5kIHByb3ZpZGluZyBsaXN0ZW5lcnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgc3Vic2NyaWJlcnMgb2YgbWVzc2FnZXNcbiAgICAgKiBAdHlwZSB7b2JqZWN0W119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbiBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3Igc3Vic2NyaWJpbmcgZXZlbnRzIHRoYXQgYXJlIGVtaXR0ZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gbGlzdGVuIHRvXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIFRoZSBjYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUge2V2dH0gaXMgZW1pdHRlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uY2UgT3B0aW9uYWwgdmFsdWUgd2hpY2ggd2lsbCBvbmx5IGhhbmRsZSB0aGUgbWVzc2FnZSBvbmNlXG4gICAqL1xuICBvbiAoZXZ0LCBjYiwgb25jZSkge1xuICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgaGFuZGxlciBzaG91bGQgYmUgb2YgdHlwZSB7ZnVuY3Rpb259Jyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xpc3RlbmVyc1tldnRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVyc1tldnRdID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5fbGlzdGVuZXJzW2V2dF0ucHVzaCh7XG4gICAgICBldmVudDogZXZ0LFxuICAgICAgY2I6IGNiLFxuICAgICAgb25jZTogb25jZSB8fCBmYWxzZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogb25jZSBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3Igc3Vic2NyaWJpbmcgZXZlbnRzIHRoYXQgYXJlIGVtaXR0ZWQuXG4gICAqIFRoZSBoYW5kbGVyIHdpbGwgb25seSBiZSB0cmlnZ2VyZWQgb25jZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byBsaXN0ZW4gdG9cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgVGhlIGNhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSB7ZXZ0fSBpcyBlbWl0dGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSBPcHRpb25hbCB2YWx1ZSB3aGljaCB3aWxsIG9ubHkgaGFuZGxlIHRoZSBtZXNzYWdlIG9uY2VcbiAgICovXG4gIG9uY2UgKGV2dCwgY2IpIHtcbiAgICByZXR1cm4gdGhpcy5vbihldnQsIGNiLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvZmYgaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIHVuc3Vic2NyaWJpbmcgZnJvbSBhbiBldmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIHVuc3Vic2NyaWJlIGZyb21cbiAgICovXG4gIG9mZiAoZXZ0KSB7XG4gICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyc1tldnRdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGVtaXQgaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIGJyb2FkY2FzdGluZyBtZXNzYWdlcy9ldmVudHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byBwdWJsaXNoIGZyb21cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgdGhlIGRhdGEgdG8gc2VuZCBhbG9uZyB0byB0aGUgc3Vic2NyaWJlcnNcbiAgICovXG4gIGVtaXQgKGV2dCwgZGF0YSkge1xuICAgIGxldCBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNbZXZ0XTtcbiAgICBpZiAobGlzdGVuZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJbnZva2UgZWFjaCBvZiBhbGwgdGhlIGxpc3RlbmVyIGhhbmRsZXJzIGFuZCByZW1vdmUgdGhlIG9uZXMgdGhhdCBzaG91bGQgZmlyZSBvbmx5IG9uY2UuXG4gICAgbGV0IGtlZXAgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdGVuZXJzW2ldLmNiKGRhdGEpO1xuICAgICAgaWYgKGxpc3RlbmVyc1tpXS5vbmNlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBJbnN0ZWFkIG9mIGhhdmluZyBhICdkaXJ0eScgYXJyYXkgd2l0aCBkZWxldGVkIG9yICd1bmRlZmluZWQnIGVudHJpZXMsXG4gICAgICAvLyB3ZSBqdXN0IGNyZWF0ZSBhIGJyYW5kIG5ldyBhcnJheSB3aXRob3V0IHRoZSBsaXN0ZW5lcnMgdGhhdCB3ZXJlIHJlbW92ZWRcbiAgICAgIGtlZXAucHVzaChsaXN0ZW5lcnNbaV0pO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBvdXIgb2xkIGxpc3Qgb2YgbGlzdGVuZXJzIHRvIHRoZSBuZXdseSBjcmVhdGVkIGFycmF5XG4gICAgdGhpcy5fbGlzdGVuZXJzW2V2dF0gPSBrZWVwO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTdGF0ZSAqL1xuXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uLy4uL2NvcmUvZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlcic7XG5cbi8qKlxuICogU3RhdGUgY29udGFpbnMgdGhlIGRhdGEgZm9yIHRoZSBjb21wb25lbnRcbiAqIGFuZCBleHBvc2VzIGFuIHtFdmVudEVtaXR0ZXJ9IGludGVyZmFjZSBzbyB0aGF0IGV4dGVybmFsXG4gKiBkZXBlbmRlbmNpZXMgY2FuIGxpc3Rlbi9ob29rIHN1YnNjcmliZSB0byBtZXNzYWdlcy91cGRhdGVzLlxuICogQGV4dGVuZHMgRXZlbnRFbWl0dGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdGF0ZSA9IGRhdGEgfHwge307XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSBjb21wb25lbnQuXG4gICAqIE5PVEUoYmlsbHkpOiBEb2VzIG5vdCBmaXJlIGFuIHVwZGF0ZSBtZXNzYWdlXG4gICAqL1xuICBpbml0IChwcm9wLCBvcHRWYWwpIHtcbiAgICB0aGlzLl9zZXQocHJvcCwgb3B0VmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXR0ZXIgZm9yIHRoZSBzdGF0ZVxuICAgKiBAcGFyYW0gcHJvcCB7c3RyaW5nfE9iamVjdH0gVGhlIHByb3BlcnR5IHRvIHNldFxuICAgKiBAcGFyYW0gb3B0VmFsIE9wdGlvbmFsLCBpZiBwcm9wIGlzIGEge3N0cmluZ30sIGl0IHdpbGwgYXNzaWduIHRoZSB2YWx1ZSB0byB0aGF0IHByb3BlcnR5XG4gICAqL1xuICBzZXQgKHByb3AsIG9wdFZhbCkge1xuICAgIHRoaXMuX3NldChwcm9wLCBvcHRWYWwpO1xuICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gIH1cblxuICAvKipcbiAgICogc2V0dGVyIGZvciB0aGUgc3RhdGUgZW5hYmxlcyB5b3UgdG8gdXBkYXRlIGEgc2luZ2xlIHByb3BlcnR5LCBvciBjb21wbGV0ZSBzdGF0ZVxuICAgKiBkZXBlbmRpbmcgb24gdGhlIGFyZ3VtZW50cyBwcm92aWRlZC5cbiAgICogQHBhcmFtIHByb3Age3N0cmluZ3xPYmplY3R9IFRoZSBwcm9wZXJ0eSB0byBzZXRcbiAgICogQHBhcmFtIG9wdFZhbCBJZiBwcm9wIGlzIGEge3N0cmluZ30sIHByb3ZpZGUgaXRzIHZhbHVlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2V0IChwcm9wLCBvcHRWYWwpIHtcbiAgICBpZiAob3B0VmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3N0YXRlID0gcHJvcDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3RhdGVbcHJvcF0gPSBvcHRWYWw7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlIChkYXRhKSB7XG4gICAgdGhpcy5fc3RhdGUgPSBkYXRhO1xuICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgYSBwcm9wZXJ0aWVzIHZhbHVlIGZyb20gdGhlIHN0YXRlXG4gICAqIElmIG5vIHByb3BlcnR5IHByb3ZpZGVkLCByZXR1cm4gdGhlIGZ1bGwgc3RhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdFByb3Agb3B0aW9uYWwgcHJvcGVydHkgdG8gcmV0cmlldmVcbiAgICovXG4gIGdldCAob3B0UHJvcCkge1xuICAgIGlmIChvcHRQcm9wID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlW29wdFByb3BdO1xuICB9XG5cbiAgaGFzIChwcm9wKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlW3Byb3BdICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBhc0pTT04gKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgfVxufVxuIiwiLyoqXG4gKiBNb2RlbCBmb3IgdGhlIGFuYWx5dGljcyBldmVudCB0eXBlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuYWx5dGljc0V2ZW50IHtcbiAgY29uc3RydWN0b3IgKHR5cGUsIGxhYmVsKSB7XG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgZXZlbnQgdG8gcmVwb3J0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmV2ZW50VHlwZSA9IHR5cGUudG9VcHBlckNhc2UoKTtcblxuICAgIC8qKlxuICAgICAqIEFuIG9wdGlvbmFsIGxhYmVsIHRvIGJlIHByb3ZpZGVkIGZvciB0aGUgZXZlbnRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGlmIChsYWJlbCkge1xuICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBwcm92aWRlZCBvcHRpb25zIHRvIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBBZGRpdGlvbmFsIG9wdGlvbnMgZm9yIHRoZSBldmVudFxuICAgKi9cbiAgYWRkT3B0aW9ucyAob3B0aW9ucykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBldmVudCBpbiB0aGUgYXBpIGZvcm1hdCwgdHlwaWNhbGx5IGZvciByZXBvcnRpbmcgdG8gdGhlIGFwaVxuICAgKi9cbiAgdG9BcGlFdmVudCAoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBbmFseXRpY3NSZXBvcnRlciAqL1xuXG5pbXBvcnQgQW5hbHl0aWNzRXZlbnQgZnJvbSAnLi9hbmFseXRpY3NldmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCB7IEFOQUxZVElDU19CQVNFX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgSHR0cFJlcXVlc3RlciBmcm9tICcuLi9odHRwL2h0dHByZXF1ZXN0ZXInO1xuXG4vKipcbiAqIENsYXNzIGZvciByZXBvcnRpbmcgYW5hbHl0aWNzIGV2ZW50cyB0byB0aGUgc2VydmVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuYWx5dGljc1JlcG9ydGVyIHtcbiAgY29uc3RydWN0b3IgKGNvcmUsIGFuc3dlcnNLZXksIGJ1c2luZXNzSWQsIGdsb2JhbE9wdGlvbnMgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBpbnRlcm5hbCBidXNpbmVzcyBpZGVudGlmaWVyIHVzZWQgZm9yIHJlcG9ydGluZ1xuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fYnVzaW5lc3NJZCA9IGJ1c2luZXNzSWQ7XG5cbiAgICAvKipcbiAgICAgKiBPcHRpb25zIHRvIGluY2x1ZGUgd2l0aCBldmVyeSBhbmFseXRpYyBldmVudCByZXBvcnRlZCB0byB0aGUgc2VydmVyXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2dsb2JhbE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBnbG9iYWxPcHRpb25zLCB7IGFuc3dlcnNLZXkgfSk7XG5cbiAgICAvLyBsaXN0ZW4gdG8gcXVlcnkgaWQgdXBkYXRlc1xuICAgIGNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgU3RvcmFnZUtleXMuUVVFUllfSUQsIGlkID0+IHRoaXMuc2V0UXVlcnlJZChpZCkpO1xuICB9XG5cbiAgc2V0UXVlcnlJZCAocXVlcnlJZCkge1xuICAgIHRoaXMuX2dsb2JhbE9wdGlvbnMucXVlcnlJZCA9IHF1ZXJ5SWQ7XG4gIH1cblxuICByZXBvcnQgKGV2ZW50KSB7XG4gICAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBBbmFseXRpY3NFdmVudCkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IoJ1RyaWVkIHRvIHNlbmQgaW52YWxpZCBhbmFseXRpY3MgZXZlbnQnLCBldmVudCk7XG4gICAgfVxuXG4gICAgZXZlbnQuYWRkT3B0aW9ucyh0aGlzLl9nbG9iYWxPcHRpb25zKTtcblxuICAgIHJldHVybiBuZXcgSHR0cFJlcXVlc3RlcigpLmJlYWNvbihcbiAgICAgIGAke0FOQUxZVElDU19CQVNFX1VSTH0vcmVhbHRpbWVhbmFseXRpY3MvZGF0YS9hbnN3ZXJzLyR7dGhpcy5fYnVzaW5lc3NJZH1gLFxuICAgICAge1xuICAgICAgICAnZGF0YSc6IGV2ZW50LnRvQXBpRXZlbnQoKVxuICAgICAgfVxuICAgICk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE1vZHVsZURhdGEgKi9cblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudGVtaXR0ZXIvZXZlbnRlbWl0dGVyJztcblxuLyoqXG4gKiBNb2R1bGVEYXRhIGlzIHVzZWQgYXMgYSBnZW5lcmljIG1vZGVsIGZvciBTdG9yYWdlLlxuICogVHlwaWNhbGx5IGFuIGluc3RhbmNlIG9mIE1vZHVsZURhdGEgcG93ZXJzIGEgc2luZ2xlIGNvbXBvbmVudC5cblxuICogQSBkYXRhIG1vZGVsIHRoYXQgZXhwb3NlcyBhbiBldmVudCBlbWl0dGVyIGludGVyZmFjZS5cbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2R1bGVEYXRhIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGlkLCBkYXRhID0ge30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5faWQgPSBpZDtcbiAgICB0aGlzLl9oaXN0b3J5ID0gW107XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5zZXQoZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogcmVwbGFjZXMgdGhlIGN1cnJlbnRseSBoZWxkIGRhdGEgd2l0aCB0aGUgZ2l2ZW4gZGF0YVxuICAgKiBAcGFyYW0geyp9IGRhdGEgdGhlIGRhdGEgdG8gcmVwbGFjZSB0aGUgY3VycmVudCBkYXRhXG4gICAqL1xuICBzZXQgKGRhdGEpIHtcbiAgICB0aGlzLmNhcHR1cmVQcmV2aW91cygpO1xuXG4gICAgaWYgKHR5cGVvZiBkYXRhICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGRhdGEpIHx8IE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXModGhpcy5fZGF0YSkubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5fZGF0YSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgZm9yIHNoYWxsb3cgZXF1YWxpdHlcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhkYXRhKSkge1xuICAgICAgaWYgKHRoaXMuX2RhdGFba2V5XSAhPT0gZGF0YVtrZXldKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuX2RhdGEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2FwdHVyZVByZXZpb3VzICgpIHtcbiAgICBpZiAodGhpcy5faGlzdG9yeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9oaXN0b3J5ID0gW107XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hpc3RvcnkubGVuZ3RoICsgMSA+IDUpIHtcbiAgICAgIHRoaXMuX2hpc3Rvcnkuc2hpZnQoKTtcbiAgICB9XG5cbiAgICAvLyBJZiBkYXRhIGlzIGV2ZXIgdW5kZWZpbmVkLCB3ZSBkZWZhdWx0IHRvIGVtcHR5IG9iamVjdFxuICAgIHRoaXMuX2hpc3RvcnkucHVzaChKU09OLnN0cmluZ2lmeSh0aGlzLl9kYXRhIHx8IHt9KSk7XG4gIH1cblxuICB1bmRvICgpIHtcbiAgICBsZXQgcHJldmlvdXMgPSB7fTtcbiAgICBpZiAodGhpcy5fcHJldmlvdXMubGVuZ3RoID4gMCkge1xuICAgICAgcHJldmlvdXMgPSBKU09OLnBhcnNlKHRoaXMuX3ByZXZpb3VzLnBvcCgpKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRhLnNldChwcmV2aW91cyk7XG4gIH1cblxuICByYXcgKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBHbG9iYWxTdG9yYWdlICovXG5cbmltcG9ydCBNb2R1bGVEYXRhIGZyb20gJy4vbW9kdWxlZGF0YSc7XG5pbXBvcnQgeyBBbnN3ZXJzU3RvcmFnZUVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogU3RvcmFnZSBpcyBhIGNvbnRhaW5lciBhcm91bmQgYXBwbGljYXRpb24gc3RhdGUuXG4gKiBJdCBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgQ1JVRCBvcGVyYXRpb25zIGFzIHdlbGwgYXMgbGlzdGVuaW5nXG4gKiBmb3Igc3RhdGVmdWwgY2hhbmdlcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xvYmFsU3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyID0ge307XG4gICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzID0ge307XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkYXRhIGluIHN0b3JhZ2Ugd2l0aCB0aGUgZ2l2ZW4ga2V5IHRvIHRoZSBwcm92aWRlZCBkYXRhLFxuICAgKiBjb21wbGV0ZWx5IG92ZXJ3cml0aW5nIGFueSBleGlzdGluZyBkYXRhLlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRoZSBzdG9yYWdlIGtleSB0byBzZXRcbiAgICogQHBhcmFtIHsqfSBkYXRhIHRoZSBkYXRhIHRvIHNldFxuICAgKi9cbiAgc2V0IChrZXksIGRhdGEpIHtcbiAgICB0aGlzLl9pbml0RGF0YUNvbnRhaW5lcihrZXksIGRhdGEpO1xuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJba2V5XS5zZXQoZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGFsbCBrZXkvdmFsdWUgcGFpcnMgaW4gdGhlIHByb3ZpZGVkIG1hcCB0byB0aGUgc3RvcmFnZVxuICAgKiBAcGFyYW0geyp9IGRhdGEgVGhlIGtleS92YWx1ZSBwYWlycyB0byBzZXQgaW4gdGhlIHN0b3JhZ2VcbiAgICovXG4gIHNldEFsbCAoZGF0YSkge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyhkYXRhKSkge1xuICAgICAgdGhpcy5zZXQoa2V5LCB2YWwpO1xuICAgIH1cbiAgfVxuXG4gIF9pbml0RGF0YUNvbnRhaW5lciAoa2V5LCBkYXRhKSB7XG4gICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkIHx8IGtleSA9PT0gbnVsbCB8fCB0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNTdG9yYWdlRXJyb3IoJ0ludmFsaWQgc3RvcmFnZSBrZXkgcHJvdmlkZWQnLCBrZXksIGRhdGEpO1xuICAgIH1cbiAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkIHx8IGRhdGEgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzU3RvcmFnZUVycm9yKCdObyBkYXRhIHByb3ZpZGVkJywga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJba2V5XSA9IG5ldyBNb2R1bGVEYXRhKGtleSk7XG4gICAgICB0aGlzLl9hcHBseUZ1dHVyZUxpc3RlbmVycyhrZXkpO1xuICAgIH1cbiAgfVxuXG4gIGdldFN0YXRlIChtb2R1bGVJZCkge1xuICAgIGlmICh0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXSkge1xuICAgICAgcmV0dXJuIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdLnJhdygpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldEFsbCAoa2V5KSB7XG4gICAgY29uc3QgZGF0YSA9IFtdO1xuICAgIGZvciAoY29uc3QgZGF0YUtleSBvZiBPYmplY3Qua2V5cyh0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyKSkge1xuICAgICAgaWYgKGRhdGFLZXkuc3RhcnRzV2l0aChrZXkpICYmIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbZGF0YUtleV0ucmF3KCkgIT09IG51bGwpIHtcbiAgICAgICAgZGF0YS5wdXNoKHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbZGF0YUtleV0ucmF3KCkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIG9uIChldnQsIG1vZHVsZUlkLCBjYikge1xuICAgIGxldCBtb2R1bGVEYXRhID0gdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF07XG4gICAgaWYgKG1vZHVsZURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdID0gW107XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0ucHVzaCh7XG4gICAgICAgIGV2ZW50OiBldnQsXG4gICAgICAgIGNiOiBjYlxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5vbihldnQsIGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9mZiAoZXZ0LCBtb2R1bGVJZCwgY2IpIHtcbiAgICBsZXQgbW9kdWxlRGF0YSA9IHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdO1xuICAgIGlmIChtb2R1bGVEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXS5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0ub2ZmKGV2dCwgY2IpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2FwcGx5RnV0dXJlTGlzdGVuZXJzIChtb2R1bGVJZCkge1xuICAgIGxldCBmdXR1cmVzID0gdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXTtcbiAgICBpZiAoIWZ1dHVyZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZ1dHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBmdXR1cmUgPSBmdXR1cmVzW2ldO1xuICAgICAgdGhpcy5vbihmdXR1cmUuZXZlbnQsIG1vZHVsZUlkLCBmdXR1cmUuY2IpO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2hBcGkgfSBmcm9tICcuL3NlYXJjaC9zZWFyY2hhcGknO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBbmFseXRpY3NSZXBvcnRlciB9IGZyb20gJy4vYW5hbHl0aWNzL2FuYWx5dGljc3JlcG9ydGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kdWxlRGF0YSB9IGZyb20gJy4vc3RvcmFnZS9tb2R1bGVkYXRhJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZS9nbG9iYWxzdG9yYWdlJztcbiIsIi8qKiBAbW9kdWxlIENvbXBvbmVudCAqL1xuXG5pbXBvcnQgeyBSZW5kZXJlcnMgfSBmcm9tICcuLi9yZW5kZXJpbmcvY29uc3QnO1xuXG5pbXBvcnQgRE9NIGZyb20gJy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0YXRlIGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgQW5hbHl0aWNzUmVwb3J0ZXIgfSBmcm9tICcuLi8uLi9jb3JlJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcblxuLyoqXG4gKiBDb21wb25lbnQgaXMgYW4gYWJzdHJhY3Rpb24gdGhhdCBlbmNhcHN1bGF0ZXMgc3RhdGUsIGJlaGF2aW9yLFxuICogYW5kIHZpZXcgZm9yIGEgcGFydGljdWxhciBjaHVuayBvZiBmdW5jdGlvbmFsaXR5IG9uIHRoZSBwYWdlLlxuICpcbiAqIFRoZSBBUEkgZXhwb3NlcyBldmVudCBsaWZlIGN5Y2xlIGhvb2tzIGZvciB3aGVuIHRoaW5ncyBhcmUgcmVuZGVyZWQsXG4gKiBtb3VudGVkLCBjcmVhdGVkLCBldGMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yICh0eXBlLCBjb25maWcgPSB7fSkge1xuICAgIC8vIFNpbXBsZSBmYWNhZGUgcGF0dGVybiB0byBlbmFibGUgdGhlIHVzZXIgdG8gcGFzcyBhIHNpbmdsZSBvYmplY3RcbiAgICAvLyBjb250YWluaW5nIGFsbCB0aGUgbmVjZXNzYXJ5IG9wdGlvbnMgYW5kIHNldHRpbmdzXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uZmlnID0gdHlwZTtcbiAgICAgIHR5cGUgPSBjb25maWcudHlwZTtcbiAgICB9XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFVuaXF1ZSBuYW1lIG9mIHRoaXMgY29tcG9uZW50IGluc3RhbmNlXG4gICAgICogVXNlZCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIG90aGVyIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgdHlwZVxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5uYW1lID0gY29uZmlnLm5hbWUgfHwgdGhpcy5jb25zdHJ1Y3Rvci50eXBlO1xuXG4gICAgLyoqXG4gICAgICogQ2FjaGUgdGhlIG9wdGlvbnMgc28gdGhhdCB3ZSBjYW4gcHJvcG9nYXRlIHByb3Blcmx5IHRvIGNoaWxkIGNvbXBvbmVudHNcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcblxuICAgIC8qKlxuICAgICAqIEFuIGlkZW50aWZpZXIgdXNlZCB0byBjbGFzc2lmeSB0aGUgdHlwZSBvZiBjb21wb25lbnQuXG4gICAgICogVGhlIGNvbXBvbmVudCBtYW5hZ2VyIHVzZXMgdGhpcyBpbmZvcm1hdGlvbiBpbiBvcmRlciB0byBwZXJzaXN0IGFuZCBvcmdhbml6ZSBjb21wb25lbnRzXG4gICAgICogQHR5cGUge3N0cmluZ3xDb21wb25lbnRUeXBlfVxuICAgICAqL1xuICAgIHRoaXMuX3R5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgcGFyZW50IGNvbXBvbmVudCwgaWYgZXhpc3RzXG4gICAgICogQHR5cGUge0NvbXBvbmVudH1cbiAgICAgKi9cbiAgICB0aGlzLl9wYXJlbnQgPSBjb25maWcucGFyZW50IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGNvbnRhaW5lciBmb3IgYWxsIHRoZSBjaGlsZCBjb21wb25lbnRzXG4gICAgICogQHR5cGUge0NvbXBvbmVudFtdfVxuICAgICAqL1xuICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3RhdGUgKGRhdGEpIG9mIHRoZSBjb21wb25lbnQgdG8gYmUgcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlIGZvciByZW5kZXJpbmdcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX3N0YXRlID0gbmV3IFN0YXRlKGNvbmZpZy5zdGF0ZSk7XG5cbiAgICAvKipcbiAgICAgKiBUT0RPKGJpbGx5KSBUaGlzIHNob3VsZCBiZSAnc2VydmljZXMnXG4gICAgICovXG4gICAgdGhpcy5jb3JlID0gY29uZmlnLmNvcmUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlciwgd2hpY2ggY29udGFpbnMgYWxsIG9mIHRoZSBjb21wb25lbnQgY2xhc3Nlc1xuICAgICAqIGVsaWdpYmxlIHRvIGJlIGNyZWF0ZWRcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50TWFuYWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIgPSBjb25maWcuY29tcG9uZW50TWFuYWdlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGFuYWx5dGljcyByZXBvcnRlciwgdXNlZCB0byByZXBvcnQgZXZlbnRzIGZvciB0aGlzIGNvbXBvbmVudFxuICAgICAqIEB0eXBlIHtBbmFseXRpY3NSZXBvcnRlcn1cbiAgICAgKi9cbiAgICB0aGlzLmFuYWx5dGljc1JlcG9ydGVyID0gY29uZmlnLmFuYWx5dGljc1JlcG9ydGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBPcHRpb25zIHRvIGluY2x1ZGUgd2l0aCBhbGwgYW5hbHl0aWMgZXZlbnRzIHNlbnQgYnkgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYW5hbHl0aWNzT3B0aW9ucyA9IGNvbmZpZy5hbmFseXRpY3NPcHRpb25zIHx8IHt9O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIERPTSBub2RlIHRoYXQgdGhlIGNvbXBvbmVudCB3aWxsIGJlIGFwcGVuZGVkIHRvIHdoZW4gbW91bnRlZC9yZW5kZXJlZC5cbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gbnVsbCkge1xuICAgICAgaWYgKHR5cGVvZiBjb25maWcuY29udGFpbmVyICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgYGNvbnRhaW5lcmAgb3B0aW9uIGZvciBjb21wb25lbnQgY29uZmlndXJhdGlvbi4gTXVzdCBiZSBvZiB0eXBlIGBzdHJpbmdgLicpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29udGFpbmVyID0gRE9NLnF1ZXJ5KGNvbmZpZy5jb250YWluZXIpIHx8IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IERPTS5xdWVyeSh0aGlzLl9wYXJlbnQuX2NvbnRhaW5lciwgY29uZmlnLmNvbnRhaW5lcik7XG5cbiAgICAgIC8vIElmIHdlIGhhdmUgYSBwYXJlbnQsIGFuZCB0aGUgY29udGFpbmVyIGlzIG1pc3NpbmcgZnJvbSB0aGUgRE9NLFxuICAgICAgLy8gd2UgY29uc3RydWN0IHRoZSBjb250YWluZXIgYW5kIGFwcGVuZCBpdCB0byB0aGUgcGFyZW50XG4gICAgICBpZiAodGhpcy5fY29udGFpbmVyID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IERPTS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiBjb25maWcuY29udGFpbmVyLnN1YnN0cmluZygxLCBjb25maWcuY29udGFpbmVyLmxlbmd0aClcbiAgICAgICAgfSk7XG4gICAgICAgIERPTS5hcHBlbmQodGhpcy5fcGFyZW50Ll9jb250YWluZXIsIHRoaXMuX2NvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBjb250YWluZXIgRE9NIG5vZGU6ICcgKyBjb25maWcuY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIGN1c3RvbSBjbGFzcyB0byBiZSBhcHBsaWVkIHRvIHt0aGlzLl9jb250YWluZXJ9IG5vZGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2NsYXNzTmFtZSA9IGNvbmZpZy5jbGFzcyB8fCAnY29tcG9uZW50JztcblxuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIHJlbmRlciBmdW5jdGlvbiB0byBiZSB1c2VkIGluc3RlYWQgb2YgdXNpbmcgdGhlIGRlZmF1bHQgcmVuZGVyZXJcbiAgICAgKiBAdHlwZSB7UmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyID0gY29uZmlnLnJlbmRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGRlZmF1bHQge1JlbmRlcmVyfSB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgcmVuZGVyaW5nIHRoZSB0ZW1wbGF0ZVxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXJlciA9IGNvbmZpZy5yZW5kZXJlciB8fCBSZW5kZXJlcnMuSGFuZGxlYmFycztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSBzdHJpbmcgdG8gdXNlIGZvciByZW5kZXJpbmcgdGhlIGNvbXBvbmVudFxuICAgICAqIElmIHRoaXMgaXMgbGVmdCBlbXB0eSwgd2UgbG9va3VwIHRoZSB0ZW1wbGF0ZSB0aGUgYmFzZSB0ZW1wbGF0ZXMgdXNpbmcgdGhlIHRlbXBsYXRlTmFtZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGUgPSBjb25maWcudGVtcGxhdGUgPyB0aGlzLl9yZW5kZXJlci5jb21waWxlKGNvbmZpZy50ZW1wbGF0ZSkgOiBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlTmFtZSB0byB1c2UgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50LlxuICAgICAqIFRoaXMgaXMgb25seSB1c2VkIGlmIF90ZW1wbGF0ZSBpcyBlbXB0eS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IGNvbmZpZy50ZW1wbGF0ZU5hbWUgfHwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0VGVtcGxhdGVOYW1lKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCBzdGF0ZSBpbmRpY2F0aW5nIHdoZXRoZXIgb3Igbm90IHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbW91bnRlZCB0byB0aGUgRE9NXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2ssIHRoYXRzIHVzZWQgdG8gdHJhbnNmb3JtIHRoZSBpbnRlcm5hbCBkYXRhXG4gICAgICogbW9kZWxzIG9mIHRoZSBjb21wb25lbnRzLCBiZWZvcmUgaXQgZ2V0cyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQgc3RhdGUuXG4gICAgICogQnkgZGVmYXVsdCwgbm8gdHJhbnNmb3JtYXRpb24gaGFwcGVucy5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy50cmFuc2Zvcm1EYXRhID0gY29uZmlnLnRyYW5zZm9ybURhdGEgfHwgdGhpcy50cmFuc2Zvcm1EYXRhIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIGEgY29tcG9uZW50IGlzIGNyZWF0ZWQuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMub25DcmVhdGUgPSBjb25maWcub25DcmVhdGUgfHwgdGhpcy5vbkNyZWF0ZSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBNb3VudGVkLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLm9uTW91bnQgPSBjb25maWcub25Nb3VudCB8fCB0aGlzLm9uTW91bnQgfHwgZnVuY3Rpb24gKCkgeyB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIGEgY29tcG9uZW50cyBzdGF0ZSBpcyB1cGRhdGVkLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLm9uVXBkYXRlID0gY29uZmlnLm9uVXBkYXRlIHx8IHRoaXMub25VcGRhdGUgfHwgZnVuY3Rpb24gKCkgeyB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdkZWZhdWx0JztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdDb21wb25lbnQnO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaW5pdCAob3B0cykge1xuICAgIHRoaXMuc2V0U3RhdGUob3B0cy5kYXRhIHx8IG9wdHMuc3RhdGUgfHwge30pO1xuICAgIHRoaXMub25DcmVhdGUoKTtcbiAgICB0aGlzLl9zdGF0ZS5vbigndXBkYXRlJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgICAgdGhpcy5tb3VudCgpO1xuICAgIH0pO1xuXG4gICAgRE9NLmFkZENsYXNzKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB7IF9jb25maWc6IHRoaXMuX2NvbmZpZyB9LCBkYXRhKTtcbiAgICB0aGlzLl9zdGF0ZS5zZXQobmV3U3RhdGUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0U3RhdGUgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuZ2V0KHByb3ApO1xuICB9XG5cbiAgaGFzU3RhdGUgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuaGFzKHByb3ApO1xuICB9XG5cbiAgdHJhbnNmb3JtRGF0YSAoZGF0YSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYWRkQ2hpbGQgKGRhdGEsIHR5cGUsIG9wdHMpIHtcbiAgICBsZXQgY2hpbGRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKFxuICAgICAgdHlwZSxcbiAgICAgIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSwgb3B0cyB8fCB7fSwge1xuICAgICAgICBfcGFyZW50T3B0czogdGhpcy5fY29uZmlnXG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGNoaWxkQ29tcG9uZW50KTtcbiAgICByZXR1cm4gY2hpbGRDb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogVW5tb3VudCBhbmQgcmVtb3ZlIHRoaXMgY29tcG9uZW50IGFuZCBpdHMgY2hpbGRyZW4gZnJvbSB0aGUgbGlzdFxuICAgKiBvZiBhY3RpdmUgY29tcG9uZW50c1xuICAgKi9cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLl9jaGlsZHJlbi5mb3JFYWNoKGMgPT4gYy5yZW1vdmUoKSk7XG4gICAgdGhpcy51bk1vdW50KCk7XG4gICAgdGhpcy5jb21wb25lbnRNYW5hZ2VyLnJlbW92ZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHJlbmRlciBtZXRob2QgdG8gYmUgdXNlZCBmb3IgcmVuZGVyaW5nIHRoZSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVuZGVyXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHNldFJlbmRlciAocmVuZGVyKSB7XG4gICAgdGhpcy5fcmVuZGVyID0gcmVuZGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgcmVuZGVyZXIgZm9yIHRoZSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtSZW5kZXJlclR5cGV9IHJlbmRlcmVyXG4gICAqL1xuICBzZXRSZW5kZXJlciAocmVuZGVyZXIpIHtcbiAgICB0aGlzLl9yZW5kZXJlciA9IFJlbmRlcmVyc1tyZW5kZXJlcl07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdGVtcGxhdGUgZm9yIHRoZSBjb21wb25lbnQgdG8gdXNlIHdoZW4gcmVuZGVyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICAgKi9cbiAgc2V0VGVtcGxhdGUgKHRlbXBsYXRlKSB7XG4gICAgdGhpcy5fdGVtcGxhdGUgPSB0aGlzLl9yZW5kZXJlci5jb21waWxlKHRlbXBsYXRlKTtcbiAgfVxuXG4gIHVuTW91bnQgKCkge1xuICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG4gICAgRE9NLmVtcHR5KHRoaXMuX2NvbnRhaW5lcik7XG4gIH1cblxuICBtb3VudCAoKSB7XG4gICAgaWYgKCF0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMudW5Nb3VudCgpO1xuICAgIGlmICh0aGlzLmJlZm9yZU1vdW50KCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBET00uYXBwZW5kKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5yZW5kZXIodGhpcy5fc3RhdGUuYXNKU09OKCkpKTtcblxuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy5fb25Nb3VudCgpO1xuXG4gICAgLy8gQXR0YWNoIGFuYWx5dGljcyBob29rcyBhcyBuZWNlc3NhcnlcbiAgICBpZiAodGhpcy5hbmFseXRpY3NSZXBvcnRlcikge1xuICAgICAgbGV0IGRvbUhvb2tzID0gRE9NLnF1ZXJ5QWxsKHRoaXMuX2NvbnRhaW5lciwgJ1tkYXRhLWV2ZW50dHlwZV06bm90KFtkYXRhLWlzLWFuYWx5dGljcy1hdHRhY2hlZF0pJyk7XG4gICAgICBkb21Ib29rcy5mb3JFYWNoKHRoaXMuX2NyZWF0ZUFuYWx5dGljc0hvb2suYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfb25Nb3VudCAoKSB7XG4gICAgdGhpcy5vbk1vdW50KHRoaXMpO1xuICAgIGlmICh0aGlzLl9jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgIGNoaWxkLl9vbk1vdW50KCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogcmVuZGVyIHRoZSB0ZW1wbGF0ZSB1c2luZyB0aGUge1JlbmRlcmVyfSB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGFuZCB0ZW1wbGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICByZW5kZXIgKGRhdGEgPSB0aGlzLl9zdGF0ZS5nZXQoKSkge1xuICAgIHRoaXMuYmVmb3JlUmVuZGVyKCk7XG4gICAgZGF0YSA9IHRoaXMudHJhbnNmb3JtRGF0YShkYXRhKTtcblxuICAgIGxldCBodG1sID0gJyc7XG4gICAgLy8gVXNlIGVpdGhlciB0aGUgY3VzdG9tIHJlbmRlciBmdW5jdGlvbiBvciB0aGUgaW50ZXJuYWwgcmVuZGVyZXJcbiAgICAvLyBkZXBlbmRhbnQgb24gdGhlIGNvbXBvbmVudCBjb25maWd1cmF0aW9uXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGh0bWwgPSB0aGlzLl9yZW5kZXIoZGF0YSk7XG4gICAgICBpZiAodHlwZW9mIGh0bWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVuZGVyIG1ldGhvZCBtdXN0IHJldHVybiBIVE1MIGFzIHR5cGUge3N0cmluZ30nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVuZGVyIHRoZSBleGlzdGluZyB0ZW1wbGF0ZXMgYXMgYSBzdHJpbmdcbiAgICAgIGh0bWwgPSB0aGlzLl9yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgICB0ZW1wbGF0ZTogdGhpcy5fdGVtcGxhdGUsXG4gICAgICAgIHRlbXBsYXRlTmFtZTogdGhpcy5fdGVtcGxhdGVOYW1lXG4gICAgICB9LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvLyBXZSBjcmVhdGUgYW4gSFRNTCBEb2N1bWVudCBmcmFnbWVudCB3aXRoIHRoZSByZW5kZXJlZCBzdHJpbmdcbiAgICAvLyBTbyB0aGF0IHdlIGNhbiBxdWVyeSBpdCBmb3IgcHJvY2Vzc2luZyBvZiBzdWIgY29tcG9uZW50c1xuICAgIGxldCBlbCA9IERPTS5jcmVhdGUoaHRtbCk7XG5cbiAgICAvLyBQcm9jZXNzIHRoZSBET00gdG8gZGV0ZXJtaW5lIGlmIHdlIHNob3VsZCBjcmVhdGVcbiAgICAvLyBpbi1tZW1vcnkgc3ViLWNvbXBvbmVudHMgZm9yIHJlbmRlcmluZ1xuICAgIGxldCBkb21Db21wb25lbnRzID0gRE9NLnF1ZXJ5QWxsKGVsLCAnW2RhdGEtY29tcG9uZW50XScpO1xuICAgIGRvbUNvbXBvbmVudHMuZm9yRWFjaChjID0+IHRoaXMuX2NyZWF0ZVN1YmNvbXBvbmVudChjLCBkYXRhKSk7XG5cbiAgICB0aGlzLmFmdGVyUmVuZGVyKCk7XG4gICAgcmV0dXJuIGVsLmlubmVySFRNTDtcbiAgfVxuXG4gIF9jcmVhdGVTdWJjb21wb25lbnQgKGRvbUNvbXBvbmVudCwgZGF0YSkge1xuICAgIGxldCBkYXRhc2V0ID0gZG9tQ29tcG9uZW50LmRhdGFzZXQ7XG4gICAgbGV0IHR5cGUgPSBkYXRhc2V0LmNvbXBvbmVudDtcbiAgICBsZXQgcHJvcCA9IGRhdGFzZXQucHJvcDtcbiAgICBsZXQgb3B0cyA9IGRhdGFzZXQub3B0cyA/IEpTT04ucGFyc2UoZGF0YXNldC5vcHRzKSA6IHt9O1xuXG4gICAgLy8gUmVuZGVyaW5nIGEgc3ViIGNvbXBvbmVudCBzaG91bGQgYmUgd2l0aGluIHRoZSBjb250ZXh0LFxuICAgIC8vIG9mIHRoZSBub2RlIHRoYXQgd2UgcHJvY2Vzc2VkIGl0IGZyb21cbiAgICBvcHRzID0gT2JqZWN0LmFzc2lnbihvcHRzLCB7XG4gICAgICBjb250YWluZXI6IGRvbUNvbXBvbmVudFxuICAgIH0pO1xuXG4gICAgbGV0IGNoaWxkRGF0YSA9IGRhdGFbcHJvcF0gfHwge307XG5cbiAgICAvLyBUT0RPKGJpbGx5KSBSaWdodCBub3csIGlmIHdlIHByb3ZpZGUgYW4gYXJyYXkgYXMgdGhlIGRhdGEgcHJvcCxcbiAgICAvLyB0aGUgYmVoYXZpb3IgaXMgdG8gY3JlYXRlIG1hbnkgY29tcG9uZW50cyBmb3IgZWFjaCBpdGVtIGluIHRoZSBhcnJheS5cbiAgICAvLyBUSEFUIGludGVyZmFjZSBTSE9VTEQgY2hhbmdlIHRvIHVzZSBhIGRpZmZlcmVudCBwcm9wZXJ0eSB0aGF0IGRlZmluZXNcbiAgICAvLyB3aGV0aGVyIHRvIGFycmF5IGRhdGEgc2hvdWxkIGJlIHVzZWQgZm9yIGEgc2luZ2xlIGNvbXBvbmVudCBvclxuICAgIC8vIHRvIGNyZWF0ZSBtYW55IGNvbXBvbmVudHMgZm9yIGVhY2ggaXRlbS5cbiAgICAvLyBPdmVybG9hZGluZyBhbmQgaGF2aW5nIHRoaXMgc2lkZSBlZmZlY3QgaXMgdW5pbnR1aXRpdmUgYW5kIFdST05HXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNoaWxkRGF0YSkpIHtcbiAgICAgIGxldCBjaGlsZENvbXBvbmVudCA9IHRoaXMuYWRkQ2hpbGQoY2hpbGREYXRhLCB0eXBlLCBvcHRzKTtcbiAgICAgIERPTS5hcHBlbmQoZG9tQ29tcG9uZW50LCBjaGlsZENvbXBvbmVudC5yZW5kZXIoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlLCByZW5kZXIgdGhlIGNvbXBvbmVudCBhcyBleHBlY3RlZFxuICAgIGxldCBjaGlsZEhUTUwgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkQ29tcG9uZW50ID0gdGhpcy5hZGRDaGlsZChjaGlsZERhdGFbaV0sIHR5cGUsIG9wdHMpO1xuICAgICAgY2hpbGRIVE1MLnB1c2goY2hpbGRDb21wb25lbnQucmVuZGVyKCkpO1xuICAgIH1cblxuICAgIERPTS5hcHBlbmQoZG9tQ29tcG9uZW50LCBjaGlsZEhUTUwuam9pbignJykpO1xuICB9XG5cbiAgX2NyZWF0ZUFuYWx5dGljc0hvb2sgKGRvbUNvbXBvbmVudCkge1xuICAgIGRvbUNvbXBvbmVudC5kYXRhc2V0LmlzQW5hbHl0aWNzQXR0YWNoZWQgPSB0cnVlO1xuICAgIGNvbnN0IGRhdGFzZXQgPSBkb21Db21wb25lbnQuZGF0YXNldDtcbiAgICBjb25zdCB0eXBlID0gZGF0YXNldC5ldmVudHR5cGU7XG4gICAgY29uc3QgbGFiZWwgPSBkYXRhc2V0LmV2ZW50bGFiZWw7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGRhdGFzZXQuZXZlbnRvcHRpb25zID8gSlNPTi5wYXJzZShkYXRhc2V0LmV2ZW50b3B0aW9ucykgOiB7fTtcblxuICAgIERPTS5vbihkb21Db21wb25lbnQsICdjbGljaycsIGUgPT4ge1xuICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQW5hbHl0aWNzRXZlbnQodHlwZSwgbGFiZWwpO1xuICAgICAgZXZlbnQuYWRkT3B0aW9ucyh0aGlzLl9hbmFseXRpY3NPcHRpb25zKTtcbiAgICAgIGV2ZW50LmFkZE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICB0aGlzLmFuYWx5dGljc1JlcG9ydGVyLnJlcG9ydChldmVudCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogb25DcmVhdGUgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBjb25zdHJ1Y3RlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25DcmVhdGUgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvblVwZGF0ZSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudCBjaGFuZ2VzXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvblVwZGF0ZSAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIGJlZm9yZVJlbmRlciBldmVudCBpcyB0cmlnZ2VyZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIGJlZm9yZVJlbmRlciAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIGFmdGVyUmVuZGVyIGV2ZW50IGlzIHRyaWdnZXJlZCBhZnRlciB0aGUgY29tcG9uZW50IGlzIHJlbmRlcmVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBhZnRlclJlbmRlciAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uTW91bnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBhcHBlbmRlZCB0byB0aGUgRE9NXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvbk1vdW50IChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25Vbk1vdW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBET01cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uVW5Nb3VudCAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIGJlZm9yZU1vdW50IGlzIHRyaWdnZXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkIHRvIHRoZSBET01cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIGJlZm9yZU1vdW50IChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25EZXN0cm95IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvbkRlc3Ryb3kgKGNiKSB7XG5cbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTmF2aWdhdGlvbkNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uL2RvbS9zZWFyY2hwYXJhbXMnO1xuXG4vKipcbiAqIFRoZSBUYWIgaXMgYSBtb2RlbCB0aGF0IGlzIHVzZWQgdG8gcG93ZXIgdGhlIE5hdmlnYXRpb24gdGFicyBpbiB0aGUgdmlldy5cbiAqIEl0J3MgaW5pdGlhbGl6ZWQgdGhyb3VnaCB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50LlxuICovXG5leHBvcnQgY2xhc3MgVGFiIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSB0YWIgdGhhdCBpcyBleHBvc2VkIGZvciB0aGUgbGlua1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbCA9IGNvbmZpZy5sYWJlbDtcbiAgICBpZiAodHlwZW9mIHRoaXMubGFiZWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCdsYWJlbCBpcyBhIHJlcXVpcmVkIGNvbmZpZ3VyYXRpb24gb3B0aW9uIGZvciB0YWIuJywgJ05hdmlnYXRpb25Db21wb25lbnQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcGxldGUgVVJMLCBpbmNsdWRpbmcgdGhlIHBhcmFtc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy51cmwgPSBjb25maWcudXJsO1xuICAgIGlmICh0eXBlb2YgdGhpcy51cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCd1cmwgaXMgYSByZXF1aXJlZCBjb25maWd1cmF0aW9uIG9wdGlvbiBmb3IgdGFiLicsICdOYXZpZ2F0aW9uQ29tcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlcnZlcnNpZGUgdmVydGljYWwgY29uZmlnIGlkIHRoYXQgdGhpcyBpcyByZWZlcmVuY2VkIHRvLlxuICAgICAqIEJ5IHByb3ZpZGluZyB0aGlzLCBlbmFibGVzIGR5bmFtaWMgc29ydGluZyBiYXNlZCBvbiByZXN1bHRzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5jb25maWdJZCA9IGNvbmZpZy5jb25maWdJZCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhc2UgVVJMIHVzZWQgZm9yIGNvbnN0cnVjdGluZyB0aGUgVVJMIHdpdGggcGFyYW1zXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmJhc2VVcmwgPSBjb25maWcudXJsO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHNob3cgdGhpcyB0YWIgZmlyc3QgaW4gdGhlIG9yZGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc0ZpcnN0ID0gY29uZmlnLmlzRmlyc3QgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRvIGFwcGx5IGEgc3BlY2lhbCBjbGFzcyB0byB0aGVcbiAgICAgKiBtYXJrdXAgdG8gZGV0ZXJtaW5lIGlmIGl0J3MgYW4gYWN0aXZlIHRhYlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNBY3RpdmUgPSBjb25maWcuaXNBY3RpdmUgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogaGVscGVyIHRvIGNvbnN0cnVjdCB0aGUgZXZlbnRPcHRpb25zIGZvciBhbmFseXRpY3NcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldCBldmVudE9wdGlvbnMgKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiB0aGlzLmNvbmZpZ0lkXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogZnJvbSB3aWxsIGNvbnN0cnVjdCBhIG1hcCBvZiBjb25maWdJZCB0byB7VGFifSBmcm9tXG4gICAqIGEgY29uZmlndXJhdGlvbiBmaWxlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0YWJzQ29uZmlnIHRoZSBjb25maWd1cmF0aW9uIHRvIHVzZVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHRhYnNDb25maWcpIHtcbiAgICBsZXQgdGFicyA9IHt9O1xuICAgIC8vIFBhcnNlIHRoZSBvcHRpb25zIGFuZCBidWlsZCBvdXQgb3VyIHRhYnMgYW5kXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzQ29uZmlnLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdGFiID0gdGFic0NvbmZpZ1tpXTtcbiAgICAgIC8vIEZvciB0YWJzIHdpdGhvdXQgY29uZmlnIGlkcywgbWFwIHRoZWlyIFVSTCB0byB0aGUgY29uZmlnSURcbiAgICAgIC8vIHRvIGF2b2lkIGR1cGxpY2F0aW9uIG9mIHJlbmRlcnNcbiAgICAgIGlmICh0YWIuY29uZmlnSWQgPT09IHVuZGVmaW5lZCAmJiB0YWJzW3RhYi5jb25maWdJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YWIuY29uZmlnSWQgPSB0YWIudXJsO1xuICAgICAgfVxuXG4gICAgICB0YWJzW3RhYi5jb25maWdJZF0gPSBuZXcgVGFiKHRhYik7XG4gICAgfVxuICAgIHJldHVybiB0YWJzO1xuICB9XG59XG5cbi8qKlxuICogTmF2aWdhdGlvbkNvbXBvbmVudCBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgYnVpbGRpbmcgYSBkeW5hbWljXG4gKiBuYXZpZ2F0aW9uIHRoYXQgaXMgcG93ZXJlZCBieSB1bml2ZXJzYWwgc2VhcmNoIHVwZGF0ZXMuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGF0YSBzdG9yYWdlIGtleVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLk5BVklHQVRJT047XG5cbiAgICAvKipcbiAgICAgKiBVbm9yZGVyZWQgbWFwIG9mIGVhY2ggdGFiLCBrZXllZCBieSBWUyBjb25maWdJZFxuICAgICAqIEB0eXBlIHtPYmplY3QuPFN0cmluZywgT2JqZWN0Pn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RhYnMgPSBUYWIuZnJvbShjb25maWcudGFicyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3JkZXIgb2YgdGhlIHRhYnMsIHBhcnNlZCBmcm9tIGNvbmZpZ3VyYXRpb24gb3IgVVJMLlxuICAgICAqIFRoaXMgZ2V0cyB1cGRhdGVkIGJhc2VkIG9uIHRoZSBzZXJ2ZXIgcmVzdWx0c1xuICAgICAqIEB0eXBlIHtBcnJheS48U3RyaW5nPn0gVGhlIGxpc3Qgb2YgVlMgY29uZmlnSWRzXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90YWJPcmRlciA9IHRoaXMuZ2V0RGVmYXVsdFRhYk9yZGVyKGNvbmZpZy50YWJzLCB0aGlzLmdldFVybFBhcmFtcygpKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdOYXZpZ2F0aW9uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAnbmF2aWdhdGlvbi9uYXZpZ2F0aW9uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBTaW5jZSB0aGUgc2VydmVyIGRhdGEgb25seSBwcm92aWRlcyBhIGxpc3Qgb2ZcbiAgICogVlMgY29uZmlnSWRzLCB3ZSBuZWVkIHRvIGNvbXB1dGUgYW5kIHRyYW5zZm9ybVxuICAgKiB0aGUgZGF0YSBpbnRvIHRoZSBwcm9wZXIgZm9ybWF0IGZvciByZW5kZXJpbmcuXG4gICAqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBpZiAoZGF0YS50YWJPcmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl90YWJPcmRlciA9IHRoaXMubWVyZ2VUYWJPcmRlcihkYXRhLnRhYk9yZGVyLCB0aGlzLl90YWJPcmRlcik7XG4gICAgfVxuXG4gICAgLy8gU2luY2UgdGhlIHRhYiBvcmRlcmluZyBjYW4gY2hhbmdlIGJhc2VkIG9uIHRoZSBzZXJ2ZXIgZGF0YVxuICAgIC8vIHdlIG5lZWQgdG8gdXBkYXRlIGVhY2ggdGFicyBVUkwgdG8gaW5jbHVkZSB0aGUgb3JkZXIgYXMgcGFydCBvZiB0aGVpciBwYXJhbXMuXG4gICAgLy8gVGhpcyBoZWxwcyB3aXRoIHBlcnNpc3Rpbmcgc3RhdGUgYWNyb3NzIHZlcnRpY2Fscy5cbiAgICBsZXQgdGFicyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdGFiT3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB0YWIgPSB0aGlzLl90YWJzW3RoaXMuX3RhYk9yZGVyW2ldXTtcbiAgICAgIGlmICh0YWIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YWIudXJsID0gdGhpcy5nZW5lcmF0ZVRhYlVybCh0YWIuYmFzZVVybCwgdGhpcy5nZXRVcmxQYXJhbXMoKSk7XG4gICAgICAgIHRhYnMucHVzaCh0YWIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZSh7XG4gICAgICB0YWJzOiB0YWJzXG4gICAgfSk7XG4gIH1cblxuICBnZXRVcmxQYXJhbXMgKCkge1xuICAgIHJldHVybiBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXREZWZhdWx0VGFiT3JkZXIgd2lsbCBjb21wdXRlIHRoZSBpbml0aWFsIHRhYiBvcmRlcmluZyBiYXNlZFxuICAgKiBvbiBhIGNvbWJpbmF0aW9uIG9mIHRoZSBjb25maWd1cmF0aW9uIHByb3ZpZGVkIGRpcmVjdGx5IHRvIHRoZSBjb21wb25lbnRcbiAgICogYW5kIHRoZSB1cmwgcGFyYW1zLlxuICAgKiBAcGFyYW0ge09iamVjdFtdfSB0YWJzQ29uZmlnXG4gICAqIEBwYXJhbSB7U2VhcmNoUGFyYW1zfVxuICAgKi9cbiAgZ2V0RGVmYXVsdFRhYk9yZGVyICh0YWJzQ29uZmlnLCB1cmxQYXJhbXMpIHtcbiAgICBsZXQgdGFiT3JkZXIgPSBbXTtcblxuICAgIC8vIFVzZSB0aGUgb3JkZXJpbmcgZnJvbSB0aGUgVVJMIGFzIHRoZSBwcmltYXJ5IGNvbmZpZ3VyYXRpb25cbiAgICAvLyBBbmQgdGhlbiBtZXJnZSBpdCB3aXRoIHRoZSBsb2NhbCBjb25maWd1cmF0aW9uLCBpZiBwcm92aWRlZC5cbiAgICBpZiAodXJsUGFyYW1zICYmIHVybFBhcmFtcy5oYXMoJ3RhYk9yZGVyJykpIHtcbiAgICAgIHRhYk9yZGVyID0gdXJsUGFyYW1zLmdldCgndGFiT3JkZXInKS5zcGxpdCgnLCcpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFic0NvbmZpZy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGFiID0gdGFic0NvbmZpZ1tpXTtcbiAgICAgIC8vIFNvbWUgdGFicyBkb24ndCBoYXZlIGNvbmZpZ0lkLCBzbyB3ZSBtYXAgaXQgZnJvbSBVUkxcbiAgICAgIGlmICh0YWIuY29uZmlnSWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YWIuY29uZmlnSWQgPSB0YWIudXJsO1xuICAgICAgfVxuXG4gICAgICAvLyBBdm9pZCBkdXBsaWNhdGVzIGlmIGNvbmZpZyB3YXMgcHJvdmlkZWQgZnJvbSBVUkxcbiAgICAgIGlmICh0YWJPcmRlci5pbmNsdWRlcyh0YWIuY29uZmlnSWQpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBpc0ZpcnN0IHNob3VsZCBhbHdheXMgYmUgdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhlIGxpc3RcbiAgICAgIGlmICh0YWIuaXNGaXJzdCkge1xuICAgICAgICB0YWJPcmRlci51bnNoaWZ0KHRhYi5jb25maWdJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWJPcmRlci5wdXNoKHRhYi5jb25maWdJZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYk9yZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIG1lcmdlVGFiT3JkZXIgbWVyZ2VzIHR3byBhcnJheXMgaW50byBvbmVcbiAgICogYnkgYXBwZW5kaW5nIGFkZGl0aW9uYWwgdGFicyB0byB0aGUgZW5kIG9mIHRoZSBvcmlnaW5hbCBhcnJheVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB0YWJPcmRlciBUYWIgb3JkZXIgcHJvdmlkZWQgYnkgdGhlIHNlcnZlclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBvdGhlclRhYk9yZGVyIFRhYiBvcmRlciBwcm92aWRlZCBieSBjb25maWd1cmF0aW9uXG4gICAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICAgKi9cbiAgbWVyZ2VUYWJPcmRlciAodGFiT3JkZXIsIG90aGVyVGFiT3JkZXIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG90aGVyVGFiT3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhYkNvbmZpZyA9IG90aGVyVGFiT3JkZXJbaV07XG4gICAgICBpZiAodGFiT3JkZXIuaW5jbHVkZXModGFiQ29uZmlnKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gaXNGaXJzdCBzaG91bGQgYmUgYW4gb3ZlcnJpZGUgdG8gZHluYW1pYyB0YWIgb3JkZXJpbmcuXG4gICAgICBpZiAodGhpcy5fdGFic1t0YWJDb25maWddICYmIHRoaXMuX3RhYnNbdGFiQ29uZmlnXS5pc0ZpcnN0KSB7XG4gICAgICAgIHRhYk9yZGVyLnVuc2hpZnQodGFiQ29uZmlnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhYk9yZGVyLnB1c2godGFiQ29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFiT3JkZXI7XG4gIH1cblxuICBnZW5lcmF0ZVRhYlVybCAoYmFzZVVybCwgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpKSB7XG4gICAgLy8gV2Ugd2FudCB0byBwZXJzaXN0IHRoZSBwYXJhbXMgZnJvbSB0aGUgZXhpc3RpbmcgVVJMIHRvIHRoZSBuZXdcbiAgICAvLyBVUkxTIHdlIGNyZWF0ZS5cbiAgICBwYXJhbXMuc2V0KCd0YWJPcmRlcicsIHRoaXMuX3RhYk9yZGVyKTtcbiAgICByZXR1cm4gYmFzZVVybCArICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXIgKi9cblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIGFwaSBmaWx0ZXIgYW5kIHByb3ZpZGVzIHN0YXRpYyBtZXRob2RzIGZvciBlYXNpbHkgY29uc3RydWN0aW5nIEZpbHRlcnMuXG4gKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIueWV4dC5jb20vZG9jcy9hcGktcmVmZXJlbmNlLyNvcGVyYXRpb24vbGlzdEVudGl0aWVzIGZvciBzdHJ1Y3R1cmUgZGV0YWlsc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXIge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGEgSlNPTiBmb3JtYXQgZmlsdGVyIHJldHVybmVkIGZyb20gdGhlIHNlcnZlciBpbnRvIGEgRmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gcmVzcG9uc2VGaWx0ZXIgQSBmaWx0ZXIgaW4gSlNPTiBmb3JtYXQgcmV0dXJuZWQgZnJvbSB0aGUgYmFja2VuZFxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGZyb21SZXNwb25zZSAocmVzcG9uc2VGaWx0ZXIpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcihKU09OLnBhcnNlKHJlc3BvbnNlRmlsdGVyKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgbmV3IEZpbHRlciByZXByZXNlbnRpbmcgdGhlIE9SIG9mIGFsbCBwcm92aWRlZCBmaWx0ZXJzXG4gICAqIEBwYXJhbSAgey4uLkZpbHRlcn0gZmlsdGVycyBUaGUgZmlsdGVycyB0byBPUiB0b2dldGhlclxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIG9yICguLi5maWx0ZXJzKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgJyRvcic6IGZpbHRlcnNcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBuZXcgRmlsdGVyIHJlcHJlc2VudGluZyB0aGUgQU5EIG9mIGFsbCBwcm92aWRlZCBmaWx0ZXJzXG4gICAqIEBwYXJhbSAgey4uLkZpbHRlcn0gZmlsdGVycyBUaGUgZmlsdGVycyB0byBBTkQgdG9nZXRoZXJcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBhbmQgKC4uLmZpbHRlcnMpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcih7XG4gICAgICAnJGFuZCc6IGZpbHRlcnNcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPUiBmaWx0ZXJzIHdpdGggdGhlIHNhbWUga2V5cywgdGhlbiBBTkQgdGhlIHJlc3VsdGluZyBncm91cHNcbiAgICogQHBhcmFtICB7Li4uRmlsdGVyfSBmaWx0ZXJzIFRoZSBmaWx0ZXJzIHRvIGdyb3VwXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ3JvdXAgKC4uLmZpbHRlcnMpIHtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiBmaWx0ZXJzKSB7XG4gICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhmaWx0ZXIpWzBdO1xuICAgICAgaWYgKCFncm91cHNba2V5XSkge1xuICAgICAgICBncm91cHNba2V5XSA9IFtdO1xuICAgICAgfVxuICAgICAgZ3JvdXBzW2tleV0ucHVzaChmaWx0ZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGdyb3VwRmlsdGVycyA9IFtdO1xuICAgIGZvciAoY29uc3QgZmllbGQgb2YgT2JqZWN0LmtleXMoZ3JvdXBzKSkge1xuICAgICAgZ3JvdXBGaWx0ZXJzLnB1c2goZ3JvdXBzW2ZpZWxkXS5sZW5ndGggPiAxID8gRmlsdGVyLm9yKC4uLmdyb3Vwc1tmaWVsZF0pIDogZ3JvdXBzW2ZpZWxkXVswXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdyb3VwRmlsdGVycy5sZW5ndGggPiAxID8gRmlsdGVyLmFuZCguLi5ncm91cEZpbHRlcnMpIDogZ3JvdXBGaWx0ZXJzWzBdO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImVxdWFsIHRvXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgZXF1YWwgdG9cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBlcXVhbCAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckZXEnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwibGVzcyB0aGFuXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgbGVzcyB0aGFuXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgbGVzc1RoYW4gKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGx0JywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImxlc3MgdGhhbiBvciBlcXVhbCB0b1wiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0b1xuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGxlc3NUaGFuRXF1YWwgKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGxlJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImdyZWF0ZXIgdGhhblwiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhblxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGdyZWF0ZXJUaGFuIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRndCcsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG9cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG9cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBncmVhdGVyVGhhbkVxdWFsIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRnZScsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgaW5jbHVzaXZlIHJhbmdlIGZpbHRlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IG1pbiBUaGUgbWluaW11bSB2YWx1ZVxuICAgKiBAcGFyYW0geyp9IG1heCBUaGUgbWF4aW11bSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGluY2x1c2l2ZVJhbmdlIChmaWVsZCwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcih7XG4gICAgICBbZmllbGRdOiB7XG4gICAgICAgICckZ2UnOiBtaW4sXG4gICAgICAgICckbGUnOiBtYXhcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgZXhjbHVzaXZlIHJhbmdlIGZpbHRlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IG1pbiBUaGUgbWluaW11bSB2YWx1ZVxuICAgKiBAcGFyYW0geyp9IG1heCBUaGUgbWF4aW11bSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGV4Y2x1c2l2ZVJhbmdlIChmaWVsZCwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcih7XG4gICAgICBbZmllbGRdOiB7XG4gICAgICAgICckZ3QnOiBtaW4sXG4gICAgICAgICckbHQnOiBtYXhcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgcG9zaXRpb24gZmlsdGVyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsYXQgVGhlIGxhdGl0dWRlIG9mIHRoZSBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gbG5nIFRoZSBsb25naXR1ZGUgb2YgdGhlIHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgVGhlIHNlYXJjaCByYWRpdXMgKGluIG1ldGVycylcbiAgICovXG4gIHN0YXRpYyBwb3NpdGlvbiAobGF0LCBsbmcsIHJhZGl1cykge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKCdidWlsdGluLmxvY2F0aW9uJywgJyRuZWFyJywgeyBsYXQsIGxuZywgcmFkaXVzIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBmaWx0ZXIgd2l0aCB0aGUgZ2l2ZW4gbWF0Y2hlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWF0Y2hlciBUaGUgbWF0Y2hlciBmb3IgdGhlIGZpbGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGZvciB0aGUgZmlsdGVyXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgX2Zyb21NYXRjaGVyIChmaWVsZCwgbWF0Y2hlciwgdmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcih7XG4gICAgICBbZmllbGRdOiB7XG4gICAgICAgIFttYXRjaGVyXTogdmFsdWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VhcmNoQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5cbi8qKlxuICogU2VhcmNoQ29tcG9uZW50IGV4cG9zZXMgYW4gaW50ZXJmYWNlIGluIG9yZGVyIHRvIGNyZWF0ZVxuICogYSBVSSBTZWFyY2ggZXhwZXJpZW5jZSBmb3IgdmVydGljYWwgYW5kIHVuaXZlcnNhbCBzZWFyY2guXG4gKlxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgaW5wdXQga2V5IGZvciB0aGUgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBJZiBub3QgcHJvdmlkZWQsIGF1dG8tY29tcGxldGUgYW5kIHNlYXJjaCB3aWxsIGJlIGJhc2VkIG9uIHVuaXZlcnNhbFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYmFyS2V5ID0gY29uZmlnLmJhcktleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIHZlcnRpY2FsIGtleSBmb3IgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBJZiBub3QgcHJvdmlkZWQsIGF1dG8tY29tcGxldGUgYW5kIHNlYXJjaCB3aWxsIGJlIGJhc2VkIG9uIHVuaXZlcnNhbFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFF1ZXJ5IHN1Ym1pc3Npb24gaXMgYmFzZWQgb24gYSBmb3JtIGFzIGNvbnRleHQuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIG5hdGl2ZSBmb3JtIG5vZGUgd2l0aGluIGNvbnRhaW5lclxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2Zvcm1FbCA9IGNvbmZpZy5mb3JtU2VsZWN0b3IgfHwgJ2Zvcm0nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlucHV0IGVsZW1lbnQgdXNlZCBmb3Igc2VhcmNoaW5nIGFuZCB3aXJlcyB1cCB0aGUga2V5Ym9hcmQgaW50ZXJhY3Rpb25cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2lucHV0RWwgPSBjb25maWcuaW5wdXRFbCB8fCAnLmpzLXlleHQtcXVlcnknO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIHVzZWQsIHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZSBhcyBhIGRhdGEgcG9pbnRcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy50aXRsZSA9IGNvbmZpZy50aXRsZSB8fCAnQW5zd2VycyBVbml2ZXJzYWwgU2VhcmNoJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB0ZXh0IGlzIHVzZWQgZm9yIGxhYmVsaW5nIHRoZSBpbnB1dCBib3gsIGFsc28gcHJvdmlkZWQgdG8gdGVtcGxhdGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbFRleHQgPSBjb25maWcubGFiZWxUZXh0IHx8ICdXaGF0IGFyZSB5b3UgaW50ZXJlc3RlZCBpbj8nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN1Ym1pdCB0ZXh0IGlzIHVzZWQgZm9yIGxhYmVsaW5nIHRoZSBzdWJtaXQgYnV0dG9uLCBhbHNvIHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc3VibWl0VGV4dCA9IGNvbmZpZy5zdWJtaXRUZXh0IHx8ICdTdWJtaXQnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN1Ym1pdCBpY29uIGlzIGFuIGljb24gZm9yIHRoZSBzdWJtaXQgYnV0dG9uLCBpZiBwcm92aWRlZCBpdCB3aWxsIGJlIGRpc3BsYXllZCBhbmQgdGhlXG4gICAgICogc3VibWl0IHRleHQgd2lsbCBiZSB1c2VkIGZvciBzY3JlZW4gcmVhZGVycy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5zdWJtaXRJY29uID0gY29uZmlnLnN1Ym1pdEljb24gfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSB0ZXh0IHRvIHNob3cgYXMgdGhlIGZpcnN0IGl0ZW0gZm9yIGF1dG8gY29tcGxldGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5wcm9tcHRIZWFkZXIgPSBjb25maWcucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBdXRvIGZvY3VzZXMgdGhlIGlucHV0IGJveCBpZiBzZXQgdG8gdHJ1ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBkZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9Gb2N1cyA9IGNvbmZpZy5hdXRvRm9jdXMgPT09IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGF1dG9mb2N1c2luZyBvbiBsb2FkLCBvcHRpb25hbGx5IG9wZW4gdGhlIGF1dG9jb21wbGV0ZVxuICAgICAqIChwcmVzZXQgcHJvbXB0cylcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9jb21wbGV0ZU9uTG9hZCA9IGNvbmZpZy5hdXRvY29tcGxldGVPbkxvYWQgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBzdWJtaXRVUkwgd2lsbCBmb3JjZSB0aGUgc2VhcmNoIHF1ZXJ5IHN1Ym1pc3Npb24gdG8gZ2V0XG4gICAgICogcmVkaXJlY3RlZCB0byB0aGUgVVJMIHByb3ZpZGVkLlxuICAgICAqIE9wdGlvbmFsLCBkZWZhdWx0cyB0byBudWxsLlxuICAgICAqXG4gICAgICogSWYgbm8gcmVkaXJlY3RVcmwgcHJvdmlkZWQsIHdlIGtlZXAgdGhlIHBhZ2UgYXMgYSBzaW5nbGUgcGFnZSBhcHAuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnJlZGlyZWN0VXJsID0gY29uZmlnLnJlZGlyZWN0VXJsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgc3RyaW5nIHRvIHVzZSBmb3IgdGhlIGlucHV0IGJveCwgcHJvdmlkZWQgdG8gdGVtcGxhdGUgZm9yIHJlbmRlcmluZy5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXJ5ID0gY29uZmlnLnF1ZXJ5IHx8IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKSB8fCAnJztcbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgU3RvcmFnZUtleXMuUVVFUlksIHEgPT4ge1xuICAgICAgdGhpcy5xdWVyeSA9IHE7XG4gICAgICB0aGlzLnNldFN0YXRlKCk7XG4gICAgICB0aGlzLnNlYXJjaChxKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIHRpbWUgYWxsb3dlZCBpbiBtaWxsaXNlY29uZHMgYmV0d2VlbiBzZWFyY2hlcyB0byBwcmV2ZW50XG4gICAgICogbWFueSBkdXBsaWNhdGUgc2VhcmNoZXMgYmFjay10by1iYWNrXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaENvb2xkb3duID0gY29uZmlnLnNlYXJjaENvb2xkb3duIHx8IDMwMDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdTZWFyY2hCYXInO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoKSB7XG4gICAgcmV0dXJuICdzZWFyY2gvc2VhcmNoJztcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICBpZiAodGhpcy5xdWVyeSkge1xuICAgICAgdGhpcy5jb3JlLnNldFF1ZXJ5KHRoaXMucXVlcnkpO1xuICAgICAgdGhpcy5zZWFyY2godGhpcy5xdWVyeSk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzID09PSB0cnVlICYmIHRoaXMucXVlcnkubGVuZ3RoID09PSAwICYmICF0aGlzLmF1dG9jb21wbGV0ZU9uTG9hZCkge1xuICAgICAgRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5faW5wdXRFbCkuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvLyBXaXJlIHVwIG91ciBzZWFyY2ggaGFuZGxpbmcgYW5kIGF1dG8gY29tcGxldGVcbiAgICB0aGlzLmluaXRTZWFyY2godGhpcy5fZm9ybUVsKTtcbiAgICB0aGlzLmluaXRBdXRvQ29tcGxldGUodGhpcy5faW5wdXRFbCk7XG5cbiAgICBpZiAodGhpcy5hdXRvRm9jdXMgPT09IHRydWUgJiYgdGhpcy5xdWVyeS5sZW5ndGggPT09IDAgJiYgdGhpcy5hdXRvY29tcGxldGVPbkxvYWQpIHtcbiAgICAgIERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2lucHV0RWwpLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgaGVscGVyIG1ldGhvZCB0byB1c2UgZm9yIHdpcmluZyB1cCBzZWFyY2hpbmcgb24gZm9ybSBzdWJtaXNzaW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtU2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIHN1Ym1pdCBoYW5kbGluZyB0b1xuICAgKi9cbiAgaW5pdFNlYXJjaCAoZm9ybVNlbGVjdG9yKSB7XG4gICAgdGhpcy5fZm9ybUVsID0gZm9ybVNlbGVjdG9yO1xuXG4gICAgdGhpcy5fY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3l4dC1TZWFyY2hCYXItd3JhcHBlcicpO1xuXG4gICAgbGV0IGZvcm0gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCBmb3JtU2VsZWN0b3IpO1xuICAgIGlmICghZm9ybSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgaW5pdGlhbGl6ZSBTZWFyY2hCYXI7IENhbiBub3QgZmluZCB7SFRNTEVsZW1lbnR9IGAnLCB0aGlzLl9mb3JtRWwsICdgLicpO1xuICAgIH1cblxuICAgIERPTS5vbihmb3JtLCAnc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IGlucHV0RWwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IodGhpcy5faW5wdXRFbCk7XG5cbiAgICAgIGxldCBxdWVyeSA9IGlucHV0RWwudmFsdWU7XG4gICAgICBsZXQgcGFyYW1zID0gbmV3IFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG4gICAgICBwYXJhbXMuc2V0KCdxdWVyeScsIHF1ZXJ5KTtcblxuICAgICAgLy8gSWYgd2UgaGF2ZSBhIHJlZGlyZWN0VXJsLCB3ZSB3YW50IHRoZSBmb3JtIHRvIGJlXG4gICAgICAvLyBzZXJpYWxpemVkIGFuZCBzdWJtaXR0ZWQuXG4gICAgICBpZiAodHlwZW9mIHRoaXMucmVkaXJlY3RVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5yZWRpcmVjdFVybCArICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlucHV0RWwuYmx1cigpO1xuXG4gICAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZLCBxdWVyeSk7XG4gICAgICB0aGlzLmNvcmUuc2V0UXVlcnkocXVlcnkpO1xuICAgICAgdGhpcy5zZWFyY2gocXVlcnkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgaGVscGVyIG1ldGhvZCB0byB3aXJlIHVwIG91ciBhdXRvIGNvbXBsZXRlIG9uIGFuIGlucHV0IHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBhdXRvIGNvbXBsZXRlIGNvbXBvbmVudCB0b1xuICAgKi9cbiAgaW5pdEF1dG9Db21wbGV0ZSAoaW5wdXRTZWxlY3Rvcikge1xuICAgIHRoaXMuX2lucHV0RWwgPSBpbnB1dFNlbGVjdG9yO1xuXG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZSkge1xuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2F1dG9jb21wbGV0ZSA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoJ0F1dG9Db21wbGV0ZScsIHtcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0uYXV0b2NvbXBsZXRlYCxcbiAgICAgIGNvbnRhaW5lcjogJy55eHQtU2VhcmNoQmFyLWF1dG9jb21wbGV0ZScsXG4gICAgICBiYXJLZXk6IHRoaXMuX2JhcktleSxcbiAgICAgIGF1dG9Gb2N1czogdGhpcy5hdXRvRm9jdXMgJiYgIXRoaXMuYXV0b2NvbXBsZXRlT25Mb2FkLFxuICAgICAgdmVydGljYWxLZXk6IHRoaXMuX3ZlcnRpY2FsS2V5LFxuICAgICAgcHJvbXB0SGVhZGVyOiB0aGlzLnByb21wdEhlYWRlcixcbiAgICAgIG9yaWdpbmFsUXVlcnk6IHRoaXMucXVlcnksXG4gICAgICBpbnB1dEVsOiBpbnB1dFNlbGVjdG9yLFxuICAgICAgb25TdWJtaXQ6ICgpID0+IHtcbiAgICAgICAgRE9NLnRyaWdnZXIodGhpcy5fZm9ybUVsLCAnc3VibWl0Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZWFyY2ggKHF1ZXJ5KSB7XG4gICAgaWYgKHRoaXMuX3Rocm90dGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3Rocm90dGxlZCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuX3Rocm90dGxlZCA9IGZhbHNlOyB9LCB0aGlzLl9zZWFyY2hDb29sZG93bik7XG5cbiAgICBpZiAodGhpcy5fdmVydGljYWxLZXkpIHtcbiAgICAgIGNvbnN0IGFsbEZpbHRlcnMgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICAgIGNvbnN0IHRvdGFsRmlsdGVyID0gYWxsRmlsdGVycy5sZW5ndGggPiAxXG4gICAgICAgID8gRmlsdGVyLmFuZCguLi5hbGxGaWx0ZXJzKVxuICAgICAgICA6IGFsbEZpbHRlcnNbMF07XG4gICAgICBjb25zdCBmYWNldEZpbHRlciA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GQUNFVF9GSUxURVIpWzBdO1xuICAgICAgcmV0dXJuIHRoaXMuY29yZS52ZXJ0aWNhbFNlYXJjaCh0aGlzLl92ZXJ0aWNhbEtleSwge1xuICAgICAgICBpbnB1dDogcXVlcnksXG4gICAgICAgIGZpbHRlcjogSlNPTi5zdHJpbmdpZnkodG90YWxGaWx0ZXIpLFxuICAgICAgICBmYWNldEZpbHRlcjogSlNPTi5zdHJpbmdpZnkoZmFjZXRGaWx0ZXIpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTk9URShiaWxseSkgVGVtcG9yYXJ5IGhhY2sgZm9yIERFTU9cbiAgICAgIC8vIFJlbW92ZSBtZSBhZnRlciB0aGUgZGVtb1xuICAgICAgbGV0IG5hdiA9IHRoaXMuY29tcG9uZW50TWFuYWdlclxuICAgICAgICAuZ2V0QWN0aXZlQ29tcG9uZW50KCdOYXZpZ2F0aW9uJyk7XG5cbiAgICAgIGlmIChuYXYpIHtcbiAgICAgICAgbGV0IHRhYnMgPSBuYXYuZ2V0U3RhdGUoJ3RhYnMnKTtcbiAgICAgICAgbGV0IHVybHMgPSB7fTtcblxuICAgICAgICBpZiAodGFicyAmJiBBcnJheS5pc0FycmF5KHRhYnMpKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcGFyYW1zID0gbmV3IFNlYXJjaFBhcmFtcyh0YWJzW2ldLnVybC5zcGxpdCgnPycpWzFdKTtcbiAgICAgICAgICAgIHBhcmFtcy5zZXQoJ3F1ZXJ5JywgcXVlcnkpO1xuXG4gICAgICAgICAgICBsZXQgdXJsID0gdGFic1tpXS5iYXNlVXJsO1xuICAgICAgICAgICAgaWYgKHBhcmFtcy50b1N0cmluZygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgdXJsICs9ICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXJsc1t0YWJzW2ldLmNvbmZpZ0lkXSA9IHVybDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29yZS5zZWFyY2gocXVlcnksIHVybHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb3JlLnNlYXJjaChxdWVyeSk7XG4gICAgfVxuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIGxhYmVsVGV4dDogdGhpcy5sYWJlbFRleHQsXG4gICAgICBzdWJtaXRJY29uOiB0aGlzLnN1Ym1pdEljb24sXG4gICAgICBzdWJtaXRUZXh0OiB0aGlzLnN1Ym1pdFRleHQsXG4gICAgICBxdWVyeTogdGhpcy5xdWVyeVxuICAgIH0sIGRhdGEpKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyU2VhcmNoQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5cbi8qKlxuICogRmlsdGVyU2VhcmNoQ29tcG9uZW50IGlzIHVzZWQgZm9yIGF1dG9jb21wbGV0ZSB1c2luZyB0aGUgRmlsdGVyU2VhcmNoIGJhY2tlbmQuXG4gKiBJdCdsbCBhbGxvdyB5b3UgdG8gcGljayBwcmUtc2V0IGZpbHRlcnMgdGhhdCBhcmUgc2V0dXAgb24gdGhlIGJhY2tlbmQgd2l0aGluXG4gKiBhIHZlcnRpY2FsIHNlYXJjaCBjb250ZXh0LlxuICpcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlucHV0IGtleSBmb3IgdGhlIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9iYXJLZXkgPSBjb25maWcuYmFyS2V5IHx8IGNvbmZpZy5pbnB1dEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnRpY2FsIGtleSBmb3IgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzdG9yZSB0aGUgZmlsdGVyIHZhbHVlIGJ1dCBkbyBub3Qgc2VhcmNoIG9uIGNoYW5nZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RvcmVPbkNoYW5nZSA9IGNvbmZpZy5zdG9yZU9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogUXVlcnkgc3VibWlzc2lvbiBpcyBiYXNlZCBvbiBhIGZvcm0gYXMgY29udGV4dC5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gbmF0aXZlIGZvcm0gbm9kZSB3aXRoaW4gY29udGFpbmVyXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5fZm9ybUVsID0gY29uZmlnLmZvcm1TZWxlY3RvciB8fCAnZm9ybSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5wdXQgZWxlbWVudCB1c2VkIGZvciBzZWFyY2hpbmcgYW5kIHdpcmVzIHVwIHRoZSBrZXlib2FyZCBpbnRlcmFjdGlvblxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5faW5wdXRFbCA9IGNvbmZpZy5pbnB1dEVsIHx8ICcuanMteWV4dC1xdWVyeSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgdXNlZCwgcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlIGFzIGEgZGF0YSBwb2ludFxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnRpdGxlID0gY29uZmlnLnRpdGxlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlYXJjaCB0ZXh0IHVzZWQgZm9yIGxhYmVsaW5nIHRoZSBpbnB1dCBib3gsIGFsc28gcHJvdmlkZWQgdG8gdGVtcGxhdGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gY29uZmlnLnNlYXJjaFRleHQgfHwgJ1doYXQgYXJlIHlvdSBpbnRlcmVzdGVkIGluPyc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgdGV4dCB0byBzaG93IGFzIHRoZSBmaXJzdCBpdGVtIGZvciBhdXRvIGNvbXBsZXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucHJvbXB0SGVhZGVyID0gY29uZmlnLnByb21wdEhlYWRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQXV0byBmb2N1c2VzIHRoZSBpbnB1dCBib3ggaWYgc2V0IHRvIHRydWUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvRm9jdXMgPSBjb25maWcuYXV0b0ZvY3VzID09PSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogc3VibWl0VVJMIHdpbGwgZm9yY2UgdGhlIHNlYXJjaCBxdWVyeSBzdWJtaXNzaW9uIHRvIGdldFxuICAgICAqIHJlZGlyZWN0ZWQgdG8gdGhlIFVSTCBwcm92aWRlZC5cbiAgICAgKiBPcHRpb25hbCwgZGVmYXVsdHMgdG8gbnVsbC5cbiAgICAgKlxuICAgICAqIElmIG5vIHJlZGlyZWN0VXJsIHByb3ZpZGVkLCB3ZSBrZWVwIHRoZSBwYWdlIGFzIGEgc2luZ2xlIHBhZ2UgYXBwLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZWRpcmVjdFVybCA9IGNvbmZpZy5yZWRpcmVjdFVybCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHN0cmluZyB0byB1c2UgZm9yIHRoZSBpbnB1dCBib3gsIHByb3ZpZGVkIHRvIHRlbXBsYXRlIGZvciByZW5kZXJpbmcuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5xdWVyeSA9IGNvbmZpZy5xdWVyeSB8fCB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCkgfHwgJyc7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gLCBxID0+IHtcbiAgICAgIHRoaXMucXVlcnkgPSBxO1xuICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaWx0ZXIgc3RyaW5nIHRvIHVzZSBmb3IgdGhlIHByb3ZpZGVkIHF1ZXJ5XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5maWx0ZXIgPSBjb25maWcuZmlsdGVyIHx8IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCkgfHwgJyc7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpbHRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gSlNPTi5wYXJzZSh0aGlzLmZpbHRlcik7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWAsIGYgPT4geyB0aGlzLmZpbHRlciA9IGY7IH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0ZpbHRlclNlYXJjaCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lICgpIHtcbiAgICByZXR1cm4gJ3NlYXJjaC9maWx0ZXJzZWFyY2gnO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIGlmICh0aGlzLnF1ZXJ5ICYmIHRoaXMuZmlsdGVyKSB7XG4gICAgICB0aGlzLnNlYXJjaCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIC8vIFdpcmUgdXAgb3VyIHNlYXJjaCBoYW5kbGluZyBhbmQgYXV0byBjb21wbGV0ZVxuICAgIHRoaXMuaW5pdEF1dG9Db21wbGV0ZSh0aGlzLl9pbnB1dEVsKTtcblxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cyA9PT0gdHJ1ZSAmJiB0aGlzLnF1ZXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5faW5wdXRFbCkuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHdpcmUgdXAgb3VyIGF1dG8gY29tcGxldGUgb24gYW4gaW5wdXQgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIGF1dG8gY29tcGxldGUgY29tcG9uZW50IHRvXG4gICAqL1xuICBpbml0QXV0b0NvbXBsZXRlIChpbnB1dFNlbGVjdG9yKSB7XG4gICAgdGhpcy5faW5wdXRFbCA9IGlucHV0U2VsZWN0b3I7XG5cbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKCdBdXRvQ29tcGxldGUnLCB7XG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmF1dG9jb21wbGV0ZWAsXG4gICAgICBpc0ZpbHRlclNlYXJjaDogdHJ1ZSxcbiAgICAgIGNvbnRhaW5lcjogJy55eHQtU2VhcmNoQmFyLWF1dG9jb21wbGV0ZScsXG4gICAgICBwcm9tcHRIZWFkZXI6IHRoaXMucHJvbXB0SGVhZGVyLFxuICAgICAgb3JpZ2luYWxRdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgIG9yaWdpbmFsRmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgIGlucHV0RWw6IGlucHV0U2VsZWN0b3IsXG4gICAgICB2ZXJ0aWNhbEtleTogdGhpcy5fdmVydGljYWxLZXksXG4gICAgICBiYXJLZXk6IHRoaXMuX2JhcktleSxcbiAgICAgIG9uU3VibWl0OiAocXVlcnksIGZpbHRlcikgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICAgICAgcGFyYW1zLnNldChgJHt0aGlzLm5hbWV9LnF1ZXJ5YCwgcXVlcnkpO1xuICAgICAgICBwYXJhbXMuc2V0KGAke3RoaXMubmFtZX0uZmlsdGVyYCwgZmlsdGVyKTtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgcmVkaXJlY3RVcmwsIHdlIHdhbnQgdGhlIHBhcmFtcyB0byBiZVxuICAgICAgICAvLyBzZXJpYWxpemVkIGFuZCBzdWJtaXR0ZWQuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5yZWRpcmVjdFVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMucmVkaXJlY3RVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzYXZlIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBmb3IgdGhlIG5leHQgc2VhcmNoXG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBGaWx0ZXIuZnJvbVJlc3BvbnNlKGZpbHRlcik7XG4gICAgICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWAsIHRoaXMucXVlcnkpO1xuICAgICAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCwgdGhpcy5maWx0ZXIpO1xuICAgICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgdGhpcy5maWx0ZXIpO1xuICAgICAgICB0aGlzLnNlYXJjaCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gdGhlIHZlcnRpY2FsIHNlYXJjaCB3aXRoIGFsbCBzYXZlZCBmaWx0ZXJzIGFuZCBxdWVyeSxcbiAgICogb3B0aW9uYWxseSByZWRpcmVjdGluZyBiYXNlZCBvbiBjb25maWdcbiAgICovXG4gIHNlYXJjaCAoKSB7XG4gICAgaWYgKHRoaXMuX3N0b3JlT25DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgbGV0IHRvdGFsRmlsdGVyID0gZmlsdGVyc1swXTtcbiAgICBpZiAoZmlsdGVycy5sZW5ndGggPiAxKSB7XG4gICAgICB0b3RhbEZpbHRlciA9IEZpbHRlci5hbmQoLi4uZmlsdGVycyk7XG4gICAgfVxuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpIHx8ICcnO1xuICAgIGNvbnN0IGZhY2V0RmlsdGVyID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZBQ0VUX0ZJTFRFUilbMF07XG5cbiAgICB0aGlzLmNvcmUudmVydGljYWxTZWFyY2godGhpcy5fdmVydGljYWxLZXksIHtcbiAgICAgIGlucHV0OiBzZWFyY2hRdWVyeSxcbiAgICAgIGZpbHRlcjogSlNPTi5zdHJpbmdpZnkodG90YWxGaWx0ZXIpLFxuICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKVxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIHNlYXJjaFRleHQ6IHRoaXMuc2VhcmNoVGV4dCxcbiAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlclxuICAgIH0sIGRhdGEpKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuY29uc3QgS2V5cyA9IHtcbiAgQkFDS1NQQUNFOiA4LFxuICBUQUI6IDksXG4gIEVOVEVSOiAxMyxcbiAgU0hJRlQ6IDE2LFxuICBDVFJMOiAxNyxcbiAgQUxUOiAxOCxcbiAgRVNDQVBFOiAyNyxcblxuICBMRUZUOiAzNyxcbiAgUklHSFQ6IDM5LFxuICBVUDogMzgsXG5cbiAgREVMRVRFOiA0NixcbiAgRE9XTjogNDAsXG4gIExFRlRfT1NfS0VZOiA5MSxcbiAgUklHSFRfT1NfS0VZOiA5MixcbiAgU0VMRUNUX0tFWTogOTNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Db21wbGV0ZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgYXV0b2NvbXBsZXRlIGlzIHNpbXBsZSBvciBmaWx0ZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmlzRmlsdGVyU2VhcmNoID0gb3B0cy5pc0ZpbHRlclNlYXJjaCB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgYmFyS2V5YCBpbiB0aGUgdmVydGljYWwgc2VhcmNoIHRvIHVzZSBmb3IgYXV0by1jb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYmFyS2V5ID0gb3B0cy5iYXJLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgdmVydGljYWxLZXlgIG9mIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggdG8gdXNlIGZvciBhdXRvLWNvbXBsZXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IG9wdHMudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBpbnB1dCBlbCBzZWxlY3RvciBmb3IgYXV0byBjb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5faW5wdXRFbCA9IG9wdHMuaW5wdXRFbCB8fCAnLmpzLXlleHQtcXVlcnknO1xuXG4gICAgLyoqXG4gICAgICogQSBzZWxlY3RvciBmb3IgdGhlIGF1dG9jb21wbGV0ZSBlbGVtZW50ZXNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2F1dG9jb21wbGV0ZUVscyA9IG9wdHMuYXV0b0NvbXBsZXRlRWxzIHx8ICcuanMteWV4dC1hdXRvY29tbGV0ZS1vcHRpb24nO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIGZvciB0aGUgZGF0YS1zdG9yYWdlIHRvIGxpc3RlbiBmb3IgdXBkYXRlcyBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBgJHtTdG9yYWdlS2V5cy5BVVRPQ09NUExFVEV9LiR7dGhpcy5uYW1lfWA7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGlucHV0IHZhbHVlIHdoZW4gdHlwaW5nLlxuICAgICAqIFdlIHVzZSB0aGlzIGZvciByZXNldHRpbmcgdGhlIHN0YXRlIG9mIHRoZSBpbnB1dCB2YWx1ZSB3aGVuIG90aGVyIGludGVyYWN0aW9ucyAoZS5nLiByZXN1bHQgbmF2aWdhdGlvbilcbiAgICAgKiBjaGFuZ2UgYmFzZWQgb24gaW50ZXJhY3Rpb25zLiBGb3IgaW5zdGFuY2UsIGhpdHRpbmcgZXNjYXBlIHNob3VsZCByZXNldCB0aGUgdmFsdWUgdG8gdGhlIG9yaWdpbmFsIHR5cGVkIHF1ZXJ5LlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fb3JpZ2luYWxRdWVyeSA9IG9wdHMub3JpZ2luYWxRdWVyeSB8fCAnJztcblxuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIGtleWJvYXJkIG5hdmlnYXRpb24gdGhyb3VnaCByZXN1bHRzLlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBzZWN0aW9uIHdlJ3JlIG5hdmlnYXRpbmcgaW4uXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9zZWN0aW9uSW5kZXggPSAwO1xuXG4gICAgLyoqXG4gICAgICogVXNlZCBmb3Iga2V5Ym9hcmQgbmF2aWdhdGlvbiB0aHJvdWdoIHJlc3VsdHMuXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IHJlc3VsdCBpbmRleCB3ZSdyZSBuYXZpZ2F0aW5nIG9uLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVzdWx0SW5kZXggPSAtMTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSB0ZXh0IHRvIHNob3cgYXMgdGhlIGZpcnN0IGl0ZW0gZm9yIGF1dG8gY29tcGxldGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5wcm9tcHRIZWFkZXIgPSBvcHRzLnByb21wdEhlYWRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgaW5wdXQgaXMgYXV0b2NvbWF0aWNhbGx5IGZvY3VzZWQgb3Igbm90XG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5fYXV0b0ZvY3VzID0gb3B0cy5hdXRvRm9jdXMgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBpbnZva2VkIHdoZW4gdGhlIGBFbnRlcmAga2V5IGlzIHByZXNzZWQgb24gYXV0byBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICB0aGlzLl9vblN1Ym1pdCA9IG9wdHMub25TdWJtaXQgfHwgZnVuY3Rpb24gKCkge307XG4gIH1cblxuICAvKipcbiAgICogVGhlIGFsaWFzZWQgdXNlZCBieSB0aGUgY29tcG9uZW50IG1hbmFnZXIgZm9yIGNyZWF0aW9uLlxuICAgKi9cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0F1dG9Db21wbGV0ZSc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3NlYXJjaC9hdXRvY29tcGxldGUnO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldFN0YXRlIGlzIG92ZXJyaWRkZW4gc28gdGhhdCB3ZSBjYW4gcHJvdmlkZSBhZGRpdGlvbmFsIG1ldGEgZGF0YVxuICAgKiB0byB0aGUgdGVtcGxhdGUgKGUuZy4gdGhlIHNlY3Rpb25JbmRleCBhbmQgcmVzdWx0SW5kZXgpLCBzaW5jZVxuICAgKiB0aG9zZSBhcmUgY2xpZW50LWludGVyYWN0aW9uIHNwZWNpZmljIHZhbHVlcyBhbmQgYXJlbid0IHJldHVybmVkIGZyb20gdGhlIHNlcnZlci5cbiAgICovXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgaGFzUmVzdWx0czogdGhpcy5oYXNSZXN1bHRzKGRhdGEpLFxuICAgICAgc2VjdGlvbkluZGV4OiB0aGlzLl9zZWN0aW9uSW5kZXgsXG4gICAgICByZXN1bHRJbmRleDogdGhpcy5fcmVzdWx0SW5kZXgsXG4gICAgICBwcm9tcHRIZWFkZXI6IHRoaXMuX29yaWdpbmFsUXVlcnkubGVuZ3RoID09PSAwID8gdGhpcy5wcm9tcHRIZWFkZXIgOiBudWxsXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIHVwZGF0ZVN0YXRlIGlzIGEgaGVscGVyIHRvIGFwcGx5IHRoZSBjdXJyZW50IHN0YXRlIHdpdGggbmV3IGNsaWVudC1zdGF0ZS5cbiAgICovXG4gIHVwZGF0ZVN0YXRlICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuX3N0YXRlLmdldCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbkNyZWF0ZSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGNvbnN0cnVjdGVkIGZyb20gdGhlIGZyYW1ld29yay5cbiAgICogT25jZSB3ZSdyZSBpbml0YWxpemVkLCB3ZSB3aXJlIHVwIGFsbCBvZiBvdXIgdXNlciBpbnRlcmFjdGlvbnNcbiAgICovXG4gIG9uQ3JlYXRlICgpIHtcbiAgICAvLyBVc2UgdGhlIGNvbnRleHQgb2YgdGhlIHBhcmVudCBjb21wb25lbnQgdG8gZmluZCB0aGUgaW5wdXQgbm9kZS5cbiAgICBsZXQgcXVlcnlJbnB1dCA9IERPTS5xdWVyeSh0aGlzLl9wYXJlbnQuX2NvbnRhaW5lciwgdGhpcy5faW5wdXRFbCk7XG4gICAgaWYgKCFxdWVyeUlucHV0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBpbml0aWFsaXplIEF1dG9Db21wbGV0ZS4gQ2FuIG5vdCBmaW5kIHtIVE1MRWxlbWVudH0gYCcsIHRoaXMuX2lucHV0RWwsICdgLicpO1xuICAgIH1cblxuICAgIC8vIERpc2FibGUgdGhlIG5hdGl2ZSBhdXRvY29tcGxldGUsIGF1dG9jb3JyZWN0ICYgc3BlbGxjaGVja1xuICAgIERPTS5hdHRyaWJ1dGVzKHF1ZXJ5SW5wdXQsIHtcbiAgICAgIGF1dG9jb21wbGV0ZTogJ29mZicsXG4gICAgICBhdXRvY29ycmVjdDogJ29mZicsXG4gICAgICBzcGVsbGNoZWNrOiAnZmFsc2UnXG4gICAgfSk7XG5cbiAgICAvLyBUaGUgdXNlciBleGl0cyB0aGUgaW5wdXQsIHNvIHdlIHdhbnQgdG8gcmVzZXQgdGhlIHN0YXRlIGFuZCBjbG9zZVxuICAgIC8vIHRoZSBhdXRvIGNvbXBsZXRlXG4gICAgLy8gVE9ETyhqZGVsZXJtZSk6IENsb3NlIGxvZ2ljIHRvIGJlIG1vdmVkIHRvIHBhcmVudFxuICAgIERPTS5vbihkb2N1bWVudCwgJ2NsaWNrJywgZSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmpzLXl4dC1BdXRvQ29tcGxldGUtd3JhcHBlciAqJykgfHwgZS50YXJnZXQubWF0Y2hlcyh0aGlzLl9pbnB1dEVsKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIGEgdXNlciBmb2N1c2VzIHRoZSBpbnB1dCwgd2Ugc2hvdWxkIHBvcHVsYXRlIHRoZSBhdXRvY29tcGxldGUgYmFzZWRcbiAgICAvLyBvbiB0aGUgY3VycmVudCB2YWx1ZVxuICAgIERPTS5vbihxdWVyeUlucHV0LCAnZm9jdXMnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmF1dG9Db21wbGV0ZShxdWVyeUlucHV0LnZhbHVlKTtcbiAgICB9KTtcblxuICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIG5hdmlnYXRlIGJldHdlZW4gdGhlIHJlc3VsdHMgdXNpbmcgdGhlIGtleWJvYXJkXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlTmF2aWdhdGVSZXN1bHRzKGUua2V5Q29kZSwgZSk7XG4gICAgICB0aGlzLmhhbmRsZVN1Ym1pdFJlc3VsdChlLmtleUNvZGUsIHF1ZXJ5SW5wdXQudmFsdWUsIGUpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuX2F1dG9Gb2N1cykge1xuICAgICAgRE9NLm9uY2UocXVlcnlJbnB1dCwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZShxdWVyeUlucHV0LnZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIHNlbGVjdCBhIHJlc3VsdCB3aXRoIHRoZSBtb3VzZVxuICAgIERPTS5kZWxlZ2F0ZSh0aGlzLl9jb250YWluZXIsICcuanMteWV4dC1hdXRvY29tcGxldGUtb3B0aW9uJywgJ2NsaWNrJywgKGV2dCwgdGFyZ2V0KSA9PiB7XG4gICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhc2V0O1xuICAgICAgbGV0IHZhbCA9IGRhdGEuc2hvcnQ7XG5cbiAgICAgIHRoaXMudXBkYXRlUXVlcnkodmFsKTtcbiAgICAgIHRoaXMuX29uU3VibWl0KHZhbCwgZGF0YS5maWx0ZXIpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gV2hlbiB0aGUgdXNlciBpcyB0eXBpbmcgaW4gdGhlIGlucHV0LCBwcm9jZXNzIHRoZSBhdXRvIGNvbXBsZXRlLlxuICAgIERPTS5vbihxdWVyeUlucHV0LCAna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVUeXBpbmcoZS5rZXlDb2RlLCBxdWVyeUlucHV0LnZhbHVlLCBlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjbG9zZSB3aWxsIGhpZGUgdGhlIGF1dG8gY29tcGxldGUgcmVzdWx0cyBhbmQgcmVzZXQgdGhlIHN0YXRlLlxuICAgKi9cbiAgY2xvc2UgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe30pO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXNldHMgdGhlIGNsaWVudCBzdGF0ZSB0byB0aGVpciBvcmlnaW5hbCB2YWx1ZXMgYW5kIHRyaWdnZXJzXG4gICAqIGEgdGVtcGxhdGUtcmVyZW5kZXIgdmlhIHVwZGF0ZVN0YXRlXG4gICAqL1xuICByZXNldCAoKSB7XG4gICAgdGhpcy5fc2VjdGlvbkluZGV4ID0gMDtcbiAgICB0aGlzLl9yZXN1bHRJbmRleCA9IC0xO1xuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHRvIHVwZGF0ZSB0aGUgaW5wdXQgdGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0VmFsdWUgT3B0aW9uIHZhbHVlIHByb3ZpZGVkLlxuICAgKiBJZiBubyB2YWx1ZSBwcm92aWRlZCwgd2UnbGwgdHJ5IHRvIGZpbmQgaXQgYmFzZWQgb24gdGhlIHNlbGVjdGlvbiBpbmRleGVzLlxuICAgKi9cbiAgdXBkYXRlUXVlcnkgKG9wdFZhbHVlKSB7XG4gICAgLy8gT25seSB3YW50IHRvIHVwZGF0ZSB0aGUgcXVlcnkgc3RyaW5nIGlmIHRoZXJlcyBhIHZhbHVlLlxuICAgIC8vIElmIG9uZSBpcyBwcm92aWRlZCwgZ3JlYXQuXG4gICAgLy8gT3RoZXJ3aXNlLCBsZXRzIHRyeSB0byBmaW5kIGl0IGZyb20gdGhlIGN1cnJlbnQgc2VsZWN0aW9uIGluIHRoZSByZXN1bHRzLlxuICAgIGlmIChvcHRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG5cbiAgICAgIGxldCByZXN1bHRzID0gc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzO1xuICAgICAgb3B0VmFsdWUgPSByZXN1bHRzW3RoaXMuX3Jlc3VsdEluZGV4XS5zaG9ydFZhbHVlO1xuICAgIH1cblxuICAgIGxldCBxdWVyeUVsID0gRE9NLnF1ZXJ5KHRoaXMuX3BhcmVudC5fY29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKTtcbiAgICBxdWVyeUVsLnZhbHVlID0gb3B0VmFsdWU7XG4gIH1cblxuICBoYW5kbGVUeXBpbmcgKGtleSwgdmFsdWUsIGUpIHtcbiAgICBsZXQgaWdub3JlZEtleXMgPSBbXG4gICAgICBLZXlzLkRPV04sXG4gICAgICBLZXlzLlVQLFxuICAgICAgS2V5cy5DVFJMLFxuICAgICAgS2V5cy5BTFQsXG4gICAgICBLZXlzLlNISUZULFxuICAgICAgS2V5cy5MRUZULFxuICAgICAgS2V5cy5SSUdIVCxcbiAgICAgIEtleXMuTEVGVF9PU19LRVksXG4gICAgICBLZXlzLlJJR0hUX09TX0tFWSxcbiAgICAgIEtleXMuRU5URVIsXG4gICAgICBLZXlzLlNFTEVDVF9LRVlcbiAgICBdO1xuXG4gICAgaWYgKGlnbm9yZWRLZXlzLmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVXNlciBlc2NhcGVzIG91dCBvZiBhdXRvIGNvbXBsZXRlLCBzbyB3ZSByZXNldCBpdCB0byB0aGUgb3JpZ2luYWwgaW5wdXRcbiAgICBpZiAoa2V5ID09PSBLZXlzLkVTQ0FQRSkge1xuICAgICAgdGhpcy51cGRhdGVRdWVyeSh0aGlzLl9vcmlnaW5hbFF1ZXJ5KTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUYWJiaW5nIG91dCBvciBlbnRlciBzaG91bGQgY2xvc2UgdGhlIGF1dG8gY29tcGxldGUuXG4gICAgaWYgKGtleSA9PT0gS2V5cy5UQUIpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIG9yaWdpbmFsIHZhbHVlIGJhc2VkIG9uIHRoZSB1c2VyIGlucHV0XG4gICAgdGhpcy5fb3JpZ2luYWxRdWVyeSA9IHZhbHVlO1xuXG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHRoaXMuYXV0b0NvbXBsZXRlKHZhbHVlKTtcbiAgfVxuXG4gIGF1dG9Db21wbGV0ZSAoaW5wdXQpIHtcbiAgICBpZiAodGhpcy5pc0ZpbHRlclNlYXJjaCkge1xuICAgICAgdGhpcy5jb3JlLmF1dG9Db21wbGV0ZUZpbHRlcihpbnB1dCwgdGhpcy5uYW1lLCB0aGlzLl92ZXJ0aWNhbEtleSwgdGhpcy5fYmFyS2V5KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3ZlcnRpY2FsS2V5IHx8IHRoaXMuX2JhcktleSkge1xuICAgICAgdGhpcy5jb3JlLmF1dG9Db21wbGV0ZVZlcnRpY2FsKGlucHV0LCB0aGlzLm5hbWUsIHRoaXMuX3ZlcnRpY2FsS2V5LCB0aGlzLl9iYXJLZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlVW5pdmVyc2FsKGlucHV0LCB0aGlzLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRydWUgaWYgd2UgaGF2ZSByZXN1bHRzIGluIGFueSBzZWN0aW9uXG4gICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICovXG4gIGhhc1Jlc3VsdHMgKGRhdGEpIHtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHNlY3Rpb25zID0gZGF0YVsnc2VjdGlvbnMnXTtcbiAgICBpZiAoIXNlY3Rpb25zKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZGF0YSA9IHNlY3Rpb25zW2ldO1xuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzdWx0cyA9IGRhdGEucmVzdWx0cztcbiAgICAgIGlmICghcmVzdWx0cykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBoYW5kbGVOYXZpZ2F0ZVJlc3VsdHMgKGtleSwgZSkge1xuICAgIGxldCBzZWN0aW9ucyA9IHRoaXMuX3N0YXRlLmdldCgnc2VjdGlvbnMnKTtcbiAgICBpZiAoc2VjdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBzZWN0aW9ucy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCByZXN1bHRzID0gc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzO1xuICAgIGlmIChrZXkgPT09IEtleXMuVVApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLl9yZXN1bHRJbmRleCA8PSAwKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPiAwKSB7XG4gICAgICAgICAgdGhpcy5fc2VjdGlvbkluZGV4LS07XG4gICAgICAgICAgdGhpcy5fcmVzdWx0SW5kZXggPSBzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHMubGVuZ3RoIC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHRoaXMuX29yaWdpbmFsUXVlcnkpO1xuICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVzdWx0SW5kZXgtLTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSBLZXlzLkRPV04pIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLl9yZXN1bHRJbmRleCA+PSByZXN1bHRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlY3Rpb25JbmRleCA8IHNlY3Rpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLl9zZWN0aW9uSW5kZXgrKztcbiAgICAgICAgICB0aGlzLl9yZXN1bHRJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVzdWx0SW5kZXgrKztcbiAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTdWJtaXRSZXN1bHQgKGtleSwgdmFsdWUsIGUpIHtcbiAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG4gICAgaWYgKHNlY3Rpb25zID09PSB1bmRlZmluZWQgfHwgc2VjdGlvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIGlmICh0aGlzLmlzRmlsdGVyU2VhcmNoKSB7XG4gICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBzdWJtaXQgdGhlIHNlYXJjaCBvbiBlbnRlclxuICAgIGlmIChrZXkgPT09IEtleXMuRU5URVIpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJTZWFyY2ggJiYgdGhpcy5fcmVzdWx0SW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGZpbHRlciA9ICcnO1xuICAgICAgaWYgKHRoaXMuX3NlY3Rpb25JbmRleCA+PSAwICYmIHRoaXMuX3Jlc3VsdEluZGV4ID49IDApIHtcbiAgICAgICAgZmlsdGVyID0gSlNPTi5zdHJpbmdpZnkoc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzW3RoaXMuX3Jlc3VsdEluZGV4XS5maWx0ZXIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHZhbHVlKTtcbiAgICAgIHRoaXMuX29yaWdpbmFsUXVlcnkgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX29uU3VibWl0KHZhbHVlLCBmaWx0ZXIpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmFjZXQgKi9cblxuLyoqXG4gKiBNb2RlbCByZXByZXNlbnRpbmcgYSBmYWNldCBmaWx0ZXIgd2l0aCB0aGUgZm9ybWF0IG9mXG4gKiB7XG4gKiAgIFwiZmllbGRfbmFtZVwiOiBbIEZpbHRlcnMuLi4gXSxcbiAqICAgLi4uXG4gKiB9XG4gKlxuICogQHNlZSB7QGxpbmsgRmlsdGVyfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgZmFjZXQgZmlsdGVyIGZyb20gYSBsaXN0IG9mIEZpbHRlcnNcbiAgICogQHBhcmFtICB7Li4uRmlsdGVyfSBmaWx0ZXJzIFRoZSBmaWx0ZXJzIHRvIHVzZSBpbiB0aGlzIGZhY2V0XG4gICAqIEByZXR1cm5zIHtGYWNldH1cbiAgICovXG4gIHN0YXRpYyBmcm9tRmlsdGVycyAoLi4uZmlsdGVycykge1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGNvbnN0IGZsYXRGaWx0ZXJzID0gZmlsdGVycy5mbGF0TWFwKGYgPT4gZi4kb3IgfHwgZik7XG4gICAgZmxhdEZpbHRlcnMuZm9yRWFjaChmID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKGYpWzBdO1xuICAgICAgaWYgKCFncm91cHNba2V5XSkge1xuICAgICAgICBncm91cHNba2V5XSA9IFtdO1xuICAgICAgfVxuICAgICAgZ3JvdXBzW2tleV0ucHVzaChmKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgRmFjZXQoZ3JvdXBzKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyQm94Q29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgRmFjZXQgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmFjZXQnO1xuXG4vKipcbiAqIFJlbmRlcnMgYSBzZXQgb2YgZmlsdGVycywgYW5kIHNlYXJjaGVzIHdpdGggdGhlbSB3aGVuIGFwcGxpZWQuXG4gKiBNdWx0aXBsZSBGaWx0ZXJCb3ggY29tcG9uZW50cyB3aWxsIEFORCB0b2dldGhlciBidXQgd2lsbCBub3Qgc2hhcmUgc3RhdGUuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyQm94Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIGlmICghY29uZmlnLmZpbHRlcnMgfHwgIShjb25maWcuZmlsdGVycyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlckJveCByZXF1aXJlcyBmaWx0ZXJzIHRvIGJlIHByb3ZpZGVkIGFzIGFuIGFycmF5JyxcbiAgICAgICAgJ0ZpbHRlckJveCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGZpbHRlcnMgdG8gZGlzcGxheSBhbmQgY29udHJvbFxuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlckNvbmZpZ3MgPSBjb25maWcuZmlsdGVycztcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBzZWFyY2hcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRyaWdnZXIgYSBzZWFyY2ggb24gZWFjaCBjaGFuZ2UgdG8gYSBmaWx0ZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaE9uQ2hhbmdlID0gY29uZmlnLnNlYXJjaE9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdG9yIG9mIHRoZSBhcHBseSBidXR0b25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBwbHlCdXR0b25TZWxlY3RvciA9IGNvbmZpZy5hcHBseUJ1dHRvblNlbGVjdG9yIHx8ICcuanMteWV4dC1maWx0ZXJib3gtYXBwbHknO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudHMgY3JlYXRlZCBmb3IgZWFjaCBmaWx0ZXIgY29uZmlnXG4gICAgICogQHR5cGUge0NvbXBvbmVudFtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGZpbHRlciBjb21wb25lbnRzIGluIHRoZSBib3hcbiAgICAgKiBAdHlwZSB7RmlsdGVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVycyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdGhpcyBmaWx0ZXJib3ggY29udGFpbnMgZHluYW1pYyBmaWx0ZXJzLiBUaGlzIGFmZmVjdHMgdGhlXG4gICAgICogdGhlIHdheSB0aGUgZmlsdGVycyBhcmUgdXNlZCBpbiB0aGUgc2VhcmNoXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9pc0R5bmFtaWMgPSBjb25maWcuaXNEeW5hbWljIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSBgZmlsdGVycy9maWx0ZXJib3hgO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0ZpbHRlckJveCc7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgZmlsdGVyQ29uZmlnczogdGhpcy5fZmlsdGVyQ29uZmlncyxcbiAgICAgIHNob3dBcHBseUJ1dHRvbjogIXRoaXMuX3NlYXJjaE9uQ2hhbmdlLFxuICAgICAgZXZlbnRUeXBlOiB0aGlzLl9pc0R5bmFtaWMgPyAnRkFDRVRJTkcnIDogJ0ZJTFRFUklORydcbiAgICB9KSk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICBpZiAodGhpcy5fZmlsdGVyQ29tcG9uZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2ZpbHRlckNvbXBvbmVudHMuZm9yRWFjaChjID0+IGMucmVtb3ZlKCkpO1xuICAgICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cyA9IFtdO1xuICAgICAgdGhpcy5fZmlsdGVycyA9IFtdO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgZmlsdGVycyBmcm9tIGNvbmZpZ3NcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2ZpbHRlckNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuX2ZpbHRlckNvbmZpZ3NbaV07XG4gICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKGNvbmZpZy50eXBlLCBPYmplY3QuYXNzaWduKHt9LFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfS5maWx0ZXIke2l9YCxcbiAgICAgICAgICBzdG9yZU9uQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICBjb250YWluZXI6IGAuanMteWV4dC1maWx0ZXJib3gtZmlsdGVyJHtpfWAsXG4gICAgICAgICAgb25DaGFuZ2U6IChmaWx0ZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25GaWx0ZXJDaGFuZ2UoaSwgZmlsdGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgIGNvbXBvbmVudC5tb3VudCgpO1xuICAgICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICB0aGlzLl9maWx0ZXJzW2ldID0gY29tcG9uZW50LmdldEZpbHRlcigpO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgYXBwbHkgYnV0dG9uXG4gICAgaWYgKCF0aGlzLl9zZWFyY2hPbkNoYW5nZSkge1xuICAgICAgY29uc3QgYnV0dG9uID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fYXBwbHlCdXR0b25TZWxlY3Rvcik7XG5cbiAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgRE9NLm9uKGJ1dHRvbiwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3NhdmVGaWx0ZXJzVG9TdG9yYWdlKCk7XG4gICAgICAgICAgdGhpcy5fc2VhcmNoKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgY2hhbmdlcyB0byBjaGlsZCBmaWx0ZXIgY29tcG9uZW50c1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBjaGFuZ2VkIGZpbHRlclxuICAgKiBAcGFyYW0ge0ZpbHRlcn0gZmlsdGVyIFRoZSBuZXcgZmlsdGVyXG4gICAqL1xuICBvbkZpbHRlckNoYW5nZSAoaW5kZXgsIGZpbHRlcikge1xuICAgIHRoaXMuX2ZpbHRlcnNbaW5kZXhdID0gZmlsdGVyO1xuICAgIGlmICh0aGlzLl9zZWFyY2hPbkNoYW5nZSkge1xuICAgICAgdGhpcy5fc2F2ZUZpbHRlcnNUb1N0b3JhZ2UoKTtcbiAgICAgIHRoaXMuX3NlYXJjaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGZpbHRlciBjb21wb25lbnRzIGFsb25nIHdpdGggdGhpcyBjb21wb25lbnRcbiAgICovXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cy5mb3JFYWNoKGMgPT4gYy5yZW1vdmUoKSk7XG4gICAgc3VwZXIucmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSBjdXJyZW50IGZpbHRlcnMgdG8gc3RvcmFnZSB0byBiZSB1c2VkIGluIHRoZSBuZXh0IHNlYXJjaFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NhdmVGaWx0ZXJzVG9TdG9yYWdlICgpIHtcbiAgICBjb25zdCB2YWxpZEZpbHRlcnMgPSB0aGlzLl9maWx0ZXJzLmZpbHRlcihmID0+XG4gICAgICBmICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIGYgIT09IG51bGwgJiZcbiAgICAgIE9iamVjdC5rZXlzKGYpLmxlbmd0aCA+IDApO1xuXG4gICAgaWYgKHRoaXMuX2lzRHluYW1pYykge1xuICAgICAgY29uc3QgY29tYmluZWRGaWx0ZXIgPSBGYWNldC5mcm9tRmlsdGVycyguLi52YWxpZEZpbHRlcnMpO1xuICAgICAgdGhpcy5jb3JlLnNldEZhY2V0RmlsdGVyKHRoaXMubmFtZSwgY29tYmluZWRGaWx0ZXIgfHwge30pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb21iaW5lZEZpbHRlciA9IHZhbGlkRmlsdGVycy5sZW5ndGggPiAxXG4gICAgICAgID8gRmlsdGVyLmFuZCguLi52YWxpZEZpbHRlcnMpXG4gICAgICAgIDogdmFsaWRGaWx0ZXJzWzBdO1xuICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGNvbWJpbmVkRmlsdGVyIHx8IHt9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBhIHNlYXJjaCB3aXRoIGFsbCBmaWx0ZXJzIGluIHN0b3JhZ2VcbiAgICovXG4gIF9zZWFyY2ggKCkge1xuICAgIGNvbnN0IGFsbEZpbHRlcnMgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICBjb25zdCB0b3RhbEZpbHRlciA9IGFsbEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgPyBGaWx0ZXIuYW5kKC4uLmFsbEZpbHRlcnMpXG4gICAgICA6IGFsbEZpbHRlcnNbMF07XG5cbiAgICBjb25zdCBxdWVyeSA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKTtcblxuICAgIGNvbnN0IGZhY2V0RmlsdGVyID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZBQ0VUX0ZJTFRFUilbMF07XG5cbiAgICB0aGlzLmNvcmUudmVydGljYWxTZWFyY2godGhpcy5fdmVydGljYWxLZXksIHtcbiAgICAgIGlucHV0OiBxdWVyeSxcbiAgICAgIGZpbHRlcjogSlNPTi5zdHJpbmdpZnkodG90YWxGaWx0ZXIpLFxuICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXJPcHRpb25zQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgc3VwcG9ydGVkIGNvbnRyb2xzXG4gKiBAdHlwZSB7c3RyaW5nW119XG4gKi9cbmNvbnN0IFNVUFBPUlRFRF9DT05UUk9MUyA9IFtcbiAgJ3NpbmdsZW9wdGlvbicsXG4gICdtdWx0aW9wdGlvbidcbl07XG5cbi8qKlxuICogUmVuZGVycyBhIHNldCBvZiBvcHRpb25zLCBlYWNoIG9uZSByZXByZXNlbnRpbmcgYSBmaWx0ZXIgaW4gYSBzZWFyY2guXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlck9wdGlvbnNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgaWYgKCFjb25maWcuY29udHJvbCB8fCAhU1VQUE9SVEVEX0NPTlRST0xTLmluY2x1ZGVzKGNvbmZpZy5jb250cm9sKSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMgcmVxdWlyZXMgYSB2YWxpZCBcImNvbnRyb2xcIiB0byBiZSBwcm92aWRlZCcsXG4gICAgICAgICdGaWx0ZXJPcHRpb25zJyk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25maWcub3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMgY29tcG9uZW50IHJlcXVpcmVzIG9wdGlvbnMgdG8gYmUgcHJvdmlkZWQnLFxuICAgICAgICAnRmlsdGVyT3B0aW9ucycpO1xuICAgIH1cblxuICAgIGxldCBwcmV2aW91c09wdGlvbnMgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZSh0aGlzLm5hbWUpO1xuICAgIGlmICh0eXBlb2YgcHJldmlvdXNPcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcHJldmlvdXNPcHRpb25zID0gSlNPTi5wYXJzZShwcmV2aW91c09wdGlvbnMpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gICAgbGV0IHNlbGVjdGVkT3B0aW9ucyA9IHByZXZpb3VzT3B0aW9ucyB8fCBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGZpbHRlciBvcHRpb25zIHRvIGRpc3BsYXkgd2l0aCBjaGVja2VkIHN0YXR1c1xuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29wdGlvbnMgPSBjb25maWcub3B0aW9ucy5tYXAobyA9PiBPYmplY3QuYXNzaWduKHt9LCB7IHNlbGVjdGVkOiBzZWxlY3RlZE9wdGlvbnMuaW5jbHVkZXMoby5sYWJlbCkgfSwgbykpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgY29udHJvbCB0byBkaXNwbGF5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2NvbnRyb2wgPSBjb25maWcuY29udHJvbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RvciB1c2VkIGZvciBvcHRpb25zIGluIHRoZSB0ZW1wbGF0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vcHRpb25TZWxlY3RvciA9IGNvbmZpZy5vcHRpb25TZWxlY3RvciB8fCAnLmpzLXlleHQtZmlsdGVyLW9wdGlvbic7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzdG9yZXMgdGhlIGZpbHRlciB0byBzdG9yYWdlIG9uIGVhY2ggY2hhbmdlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdG9yZU9uQ2hhbmdlID0gY29uZmlnLnN0b3JlT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNoYW5nZWRcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vbkNoYW5nZSA9IGNvbmZpZy5vbkNoYW5nZSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB0byBiZSB1c2VkIGluIHRoZSBsZWdlbmRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbGFiZWwgPSBjb25maWcubGFiZWwgfHwgJ0ZpbHRlcnMnO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0ZpbHRlck9wdGlvbnMnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXIsIGJhc2VkIG9uIHRoZSBjb250cm9sXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiBgY29udHJvbHMvJHtjb25maWcuY29udHJvbH1gO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgIG9wdGlvbnM6IHRoaXMuX29wdGlvbnMsXG4gICAgICBsYWJlbDogdGhpcy5fbGFiZWxcbiAgICB9KSk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICBET00uZGVsZWdhdGUoXG4gICAgICBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCBgLiR7dGhpcy5fY29udHJvbH0tZmllbGRzZXRgKSxcbiAgICAgIHRoaXMuX29wdGlvblNlbGVjdG9yLFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlT3B0aW9uKHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4KSwgZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xuXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuX2J1aWxkRmlsdGVyKCk7XG4gICAgICAgIGlmICh0aGlzLl9zdG9yZU9uQ2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGZpbHRlcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9vbkNoYW5nZShmaWx0ZXIpO1xuICAgICAgfSk7XG4gIH1cblxuICBfdXBkYXRlT3B0aW9uIChpbmRleCwgc2VsZWN0ZWQpIHtcbiAgICBpZiAodGhpcy5fY29udHJvbCA9PT0gJ3NpbmdsZW9wdGlvbicpIHtcbiAgICAgIHRoaXMuX29wdGlvbnMgPSB0aGlzLl9vcHRpb25zLm1hcChvID0+IE9iamVjdC5hc3NpZ24oe30sIG8sIHsgc2VsZWN0ZWQ6IGZhbHNlIH0pKTtcbiAgICB9XG5cbiAgICB0aGlzLl9vcHRpb25zW2luZGV4XSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX29wdGlvbnNbaW5kZXhdLCB7IHNlbGVjdGVkIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoKTtcbiAgfVxuXG4gIGdldEZpbHRlciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkRmlsdGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIG9wdGlvbnNcbiAgICovXG4gIGNsZWFyICgpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IERPTS5xdWVyeUFsbCh0aGlzLl9jb250YWluZXIsIHRoaXMuX29wdGlvblNlbGVjdG9yKTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGUgPT4gZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnZmFsc2UnKSk7XG4gICAgdGhpcy5fYXBwbHlGaWx0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCBhbmQgcmV0dXJuIHRoZSBGaWx0ZXIgdGhhdCByZXByZXNlbnRzIHRoZSBjdXJyZW50IHN0YXRlXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYnVpbGRGaWx0ZXIgKCkge1xuICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLl9vcHRpb25zXG4gICAgICAuZmlsdGVyKG8gPT4gby5zZWxlY3RlZClcbiAgICAgIC5tYXAobyA9PiBvLmZpbHRlclxuICAgICAgICA/IG8uZmlsdGVyXG4gICAgICAgIDogRmlsdGVyLmVxdWFsKG8uZmllbGQsIG8udmFsdWUpKTtcblxuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQodGhpcy5uYW1lLCB0aGlzLl9vcHRpb25zLmZpbHRlcihvID0+IG8uc2VsZWN0ZWQpLm1hcChvID0+IG8ubGFiZWwpKTtcbiAgICByZXR1cm4gZmlsdGVycy5sZW5ndGggPiAwXG4gICAgICA/IEZpbHRlci5ncm91cCguLi5maWx0ZXJzKVxuICAgICAgOiB7fTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmFuZ2VGaWx0ZXJDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZ2VGaWx0ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpZWxkIHRvIGZpbHRlciBvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWVsZCA9IGNvbmZpZy5maWVsZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGZpbHRlciB2YWx1ZSBjaGFuZ2VzXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBjb25maWcub25DaGFuZ2UgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzdG9yZXMgdGhlIGZpbHRlciB0byBzdG9yYWdlIG9uIGVhY2ggY2hhbmdlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdG9yZU9uQ2hhbmdlID0gY29uZmlnLnN0b3JlT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICBsZXQgbWluVmFsID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7dGhpcy5uYW1lfS5taW5gKTtcbiAgICBpZiAodHlwZW9mIG1pblZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG1pblZhbCA9IE51bWJlci5wYXJzZUludChtaW5WYWwpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gICAgbGV0IG1heFZhbCA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke3RoaXMubmFtZX0ubWF4YCk7XG4gICAgaWYgKHR5cGVvZiBtaW5WYWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBtYXhWYWwgPSBOdW1iZXIucGFyc2VJbnQobWF4VmFsKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgcmFuZ2UgcmVwcmVzZW50ZWRcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcmFuZ2UgPSB7XG4gICAgICBtaW46IG1pblZhbCB8fCBjb25maWcuaW5pdGlhbE1pbiB8fCAwLFxuICAgICAgbWF4OiBtYXhWYWwgfHwgY29uZmlnLmluaXRpYWxNYXggfHwgMTBcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIHRvIGRpc3BsYXkgZm9yIHRoZSByYW5nZSBjb250cm9sXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RpdGxlID0gY29uZmlnLnRpdGxlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGxhYmVsIHRvIGRpc3BsYXkgZm9yIHRoZSBtaW4gaW5wdXRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbWluTGFiZWwgPSBjb25maWcubWluTGFiZWwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBsYWJlbCB0byBkaXNwbGF5IGZvciB0aGUgbWF4IGlucHV0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX21heExhYmVsID0gY29uZmlnLm1heExhYmVsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IGBjb250cm9scy9yYW5nZWA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUmFuZ2VGaWx0ZXInO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB0aXRsZTogdGhpcy5fdGl0bGUsXG4gICAgICBtaW5MYWJlbDogdGhpcy5fbWluTGFiZWwsXG4gICAgICBtYXhMYWJlbDogdGhpcy5fbWF4TGFiZWwsXG4gICAgICBtaW5WYWx1ZTogdGhpcy5fcmFuZ2UubWluLFxuICAgICAgbWF4VmFsdWU6IHRoaXMuX3JhbmdlLm1heFxuICAgIH0pKTtcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICBET00uZGVsZWdhdGUodGhpcy5fY29udGFpbmVyLCAnLmpzLXlleHQtcmFuZ2UnLCAnY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl91cGRhdGVSYW5nZShldmVudC50YXJnZXQuZGF0YXNldC5rZXksIE51bWJlci5wYXJzZUludChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldE1pbiAodmFsdWUpIHtcbiAgICB0aGlzLl91cGRhdGVSYW5nZSgnbWluJywgdmFsdWUpO1xuICB9XG5cbiAgc2V0TWF4ICh2YWx1ZSkge1xuICAgIHRoaXMuX3VwZGF0ZVJhbmdlKCdtYXgnLCB2YWx1ZSk7XG4gIH1cblxuICBnZXRGaWx0ZXIgKCkge1xuICAgIHJldHVybiB0aGlzLl9idWlsZEZpbHRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgY3VycmVudCByYW5nZSBzdGF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByYW5nZSBrZXkgdG8gdXBkYXRlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgbmV3IHZhbHVlIGZvciB0aGUga2V5XG4gICAqL1xuICBfdXBkYXRlUmFuZ2UgKGtleSwgdmFsdWUpIHtcbiAgICB0aGlzLl9yYW5nZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX3JhbmdlLCB7IFtrZXldOiB2YWx1ZSB9KTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG5cbiAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLl9idWlsZEZpbHRlcigpO1xuICAgIGlmICh0aGlzLl9zdG9yZU9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgZmlsdGVyKTtcbiAgICB9XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHt0aGlzLm5hbWV9Lm1pbmAsIHRoaXMuX3JhbmdlLm1pbik7XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHt0aGlzLm5hbWV9Lm1heGAsIHRoaXMuX3JhbmdlLm1heCk7XG5cbiAgICB0aGlzLl9vbkNoYW5nZShmaWx0ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHRoZSBmaWx0ZXIgcmVwcmVzZW50YXRpb24gb2YgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIF9idWlsZEZpbHRlciAoKSB7XG4gICAgcmV0dXJuIEZpbHRlci5pbmNsdXNpdmVSYW5nZSh0aGlzLl9maWVsZCwgdGhpcy5fcmFuZ2UubWluLCB0aGlzLl9yYW5nZS5tYXgpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEYXRlRmlsdGVyQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5cbi8qKlxuICogQSBmaWx0ZXIgZm9yIGEgcmFuZ2Ugb2YgZGF0ZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVJhbmdlRmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcGkgZmllbGQgdGhpcyBmaWx0ZXIgY29udHJvbHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmllbGQgPSBjb25maWcuZmllbGQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgdG8gZGlzcGxheSBmb3IgdGhlIGRhdGUgcmFuZ2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGl0bGUgPSBjb25maWcudGl0bGU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgbGFiZWwgdG8gc2hvdyBmb3IgdGhlIG1pbiBkYXRlIGlucHV0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX21pbkxhYmVsID0gY29uZmlnLm1pbkxhYmVsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgbGFiZWwgdG8gc2hvdyBmb3IgdGhlIG1heCBkYXRlIGlucHV0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX21heExhYmVsID0gY29uZmlnLm1heExhYmVsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2FsbGJhY2sgdXNlZCB3aGVuIGEgZGF0ZSBpcyBjaGFuZ2VkXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBjb25maWcub25DaGFuZ2UgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzdG9yZXMgdGhlIGZpbHRlciB0byBzdG9yYWdlIG9uIGVhY2ggY2hhbmdlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdG9yZU9uQ2hhbmdlID0gY29uZmlnLnN0b3JlT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGlzIGZpbHRlciByZXByZXNlbnRzIGFuIGV4Y2x1c2l2ZSByYW5nZSwgcmF0aGVyIHRoYW4gYW4gaW5jbHVzaXZlIG9uZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faXNFeGNsdXNpdmUgPSBjb25maWcuaXNFeGNsdXNpdmU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgZm9yIHRoaXMgY29tcG9uZW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSBgY29udHJvbHMvZGF0ZWA7XG5cbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdG9kYXlTdHJpbmcgPSBgJHt0b2RheS5nZXRGdWxsWWVhcigpfS0ke2Ake3RvZGF5LmdldE1vbnRoKCkgKyAxfWAucGFkU3RhcnQoMiwgJzAnKX0tJHtgJHt0b2RheS5nZXREYXRlKCl9YC5wYWRTdGFydCgyLCAnMCcpfWA7XG4gICAgY29uc3QgbWluRGF0ZSA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke3RoaXMubmFtZX0ubWluYCk7XG4gICAgY29uc3QgbWF4RGF0ZSA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke3RoaXMubmFtZX0ubWF4YCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBkYXRlIHJhbmdlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9kYXRlID0ge1xuICAgICAgbWluOiBtaW5EYXRlIHx8IGNvbmZpZy5pbml0aWFsTWluIHx8IHRvZGF5U3RyaW5nLFxuICAgICAgbWF4OiBtYXhEYXRlIHx8IGNvbmZpZy5pbml0aWFsTWF4IHx8IHRvZGF5U3RyaW5nXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdEYXRlUmFuZ2VGaWx0ZXInO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB0aXRsZTogdGhpcy5fdGl0bGUsXG4gICAgICBtaW5MYWJlbDogdGhpcy5fbWluTGFiZWwsXG4gICAgICBtYXhMYWJlbDogdGhpcy5fbWF4TGFiZWwsXG4gICAgICBkYXRlTWluOiB0aGlzLl9kYXRlLm1pbixcbiAgICAgIGRhdGVNYXg6IHRoaXMuX2RhdGUubWF4XG4gICAgfSkpO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIERPTS5kZWxlZ2F0ZSh0aGlzLl9jb250YWluZXIsICcuanMteWV4dC1kYXRlJywgJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdXBkYXRlUmFuZ2UoZXZlbnQudGFyZ2V0LmRhdGFzZXQua2V5LCBldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbWluIGRhdGUgdG8gdGhlIG9uZSBwcm92aWRlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0ZSBEYXRlIHRvIHNldCBpbiB5eXl5LW1tLWRkIHN0cmluZyBmb3JtYXRcbiAgICovXG4gIHNldE1pbiAoZGF0ZSkge1xuICAgIHRoaXMuX3VwZGF0ZVJhbmdlKCdtaW4nLCBkYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG1heCBkYXRlIHRvIHRoZSBvbmUgcHJvdmlkZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGUgRGF0ZSB0byBzZXQgaW4geXl5eS1tbS1kZCBzdHJpbmcgZm9ybWF0XG4gICAqL1xuICBzZXRNYXggKGRhdGUpIHtcbiAgICB0aGlzLl91cGRhdGVSYW5nZSgnbWF4JywgZGF0ZSk7XG4gIH1cblxuICBnZXRGaWx0ZXIgKCkge1xuICAgIHJldHVybiB0aGlzLl9idWlsZEZpbHRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGRhdGUgcmFuZ2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IGZvciB0aGUgZGF0ZSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIHN0cmluZyBkYXRlIHZhbHVlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdXBkYXRlUmFuZ2UgKGtleSwgdmFsdWUpIHtcbiAgICB0aGlzLl9kYXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZGF0ZSwgeyBba2V5XTogdmFsdWUgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSgpO1xuXG4gICAgY29uc3QgZmlsdGVyID0gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgICBpZiAodGhpcy5fc3RvcmVPbkNoYW5nZSkge1xuICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGZpbHRlcik7XG4gICAgfVxuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7dGhpcy5uYW1lfS5taW5gLCB0aGlzLl9kYXRlLm1pbik7XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHt0aGlzLm5hbWV9Lm1heGAsIHRoaXMuX2RhdGUubWF4KTtcblxuICAgIHRoaXMuX29uQ2hhbmdlKGZpbHRlcik7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0IGFuIGFwaSBmaWx0ZXIgd2l0aCB0aGUgY3VycmVudCBkYXRlIHN0YXRlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYnVpbGRGaWx0ZXIgKCkge1xuICAgIGlmICh0aGlzLl9kYXRlLm1pbiA9PT0gJycgfHwgdGhpcy5fZGF0ZS5tYXggPT09ICcnKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9pc0V4Y2x1c2l2ZVxuICAgICAgPyBGaWx0ZXIuZXhjbHVzaXZlUmFuZ2UodGhpcy5fZmllbGQsIHRoaXMuX2RhdGUubWluLCB0aGlzLl9kYXRlLm1heClcbiAgICAgIDogRmlsdGVyLmluY2x1c2l2ZVJhbmdlKHRoaXMuX2ZpZWxkLCB0aGlzLl9kYXRlLm1pbiwgdGhpcy5fZGF0ZS5tYXgpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEeW5hbWljRmlsdGVyc0NvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuLyoqXG4gKiBEaXNwbGF5cyBhIHNldCBvZiBkeW5hbWljIGZpbHRlcnMgcmV0dXJuZWQgZnJvbSB0aGUgYmFja2VuZFxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNGaWx0ZXJzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBzZWFyY2hcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRyaWdnZXIgYSBzZWFyY2ggb24gZWFjaCBjaGFuZ2UgdG8gYSBmaWx0ZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaE9uQ2hhbmdlID0gY29uZmlnLnNlYXJjaE9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdG9yIG9mIHRoZSBhcHBseSBidXR0b25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBwbHlCdXR0b25TZWxlY3RvciA9IGNvbmZpZy5hcHBseUJ1dHRvblNlbGVjdG9yIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29udHJvbHMgdG8gdXNlIGZvciBlYWNoIGZpZWxkLiBFYWNoIHR5cGUgb2YgZmlsdGVyIGhhcyBhIGRlZmF1bHRcbiAgICAgKiAkZXEgOiBtdWx0aW9wdGlvbiAoY2hlY2tib3gpXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9maWVsZENvbnRyb2xzID0gY29uZmlnLmZpZWxkQ29udHJvbHMgfHwge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdmaWx0ZXJzL2R5bmFtaWMnO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIGZvciB0aGUgZGF0YSBzdG9yYWdlIHRvIGxpc3RlbiBmb3IgdXBkYXRlcyBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5EWU5BTUlDX0ZJTFRFUlM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmlsdGVyIGJveCB0aGF0IGRpc3BsYXlzIHRoZSBkeW5hbWljIGZpbHRlcnNcbiAgICAgKiBAdHlwZSB7RmlsdGVyQm94Q29tcG9uZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVyYm94ID0gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdEeW5hbWljRmlsdGVycyc7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICB0aGlzLmNvcmUuZW5hYmxlRHluYW1pY0ZpbHRlcnMoKTtcblxuICAgIGlmICh0aGlzLl9maWx0ZXJib3gpIHtcbiAgICAgIHRoaXMuX2ZpbHRlcmJveC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBsZXQgeyBmaWx0ZXJzIH0gPSB0aGlzLl9zdGF0ZS5nZXQoKTtcblxuICAgIGlmICghZmlsdGVycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZpbHRlcnMgPSBmaWx0ZXJzLm1hcChmID0+IHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBmLCB7XG4gICAgICAgIHR5cGU6ICdGaWx0ZXJPcHRpb25zJyxcbiAgICAgICAgY29udHJvbDogdGhpcy5fZmllbGRDb250cm9sc1tmLmZpZWxkSWRdIHx8ICdtdWx0aW9wdGlvbidcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fZmlsdGVyYm94ID0gdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZShcbiAgICAgICdGaWx0ZXJCb3gnLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0uZmlsdGVyYm94YCxcbiAgICAgICAgY29udGFpbmVyOiAnLmpzLXlleHQtZHluYW1pYy1maWx0ZXJzJyxcbiAgICAgICAgc2VhcmNoT25DaGFuZ2U6IHRoaXMuX3NlYXJjaE9uQ2hhbmdlLFxuICAgICAgICB2ZXJ0aWNhbEtleTogdGhpcy5fdmVydGljYWxLZXksXG4gICAgICAgIGlzRHluYW1pYzogdHJ1ZSxcbiAgICAgICAgZmlsdGVyc1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5fZmlsdGVyYm94Lm1vdW50KCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEdlb0xvY2F0aW9uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuY29uc3QgTUVURVJTX1BFUl9NSUxFID0gMTYwOS4zNDQ7XG5cbmNvbnN0IERFRkFVTFRfQ09ORklHID0ge1xuICAvKipcbiAgICogVGhlIHJhZGl1cywgaW4gbWlsZXMsIGFyb3VuZCB0aGUgdXNlcidzIGxvY2F0aW9uIHRvIGZpbmQgcmVzdWx0cy5cbiAgICogSWYgbG9jYXRpb24gYWNjdXJhY3kgaXMgbG93LCBhIGxhcmdlciByYWRpdXMgbWF5IGJlIHVzZWQgYXV0b21hdGljYWxseVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgcmFkaXVzOiA1MCxcblxuICAvKipcbiAgICogVGhlIHZlcnRpY2FsIGtleSB0byB1c2VcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHZlcnRpY2FsS2V5OiBudWxsLFxuXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBzdWJtaXRzIGEgc2VhcmNoIHdoZW4gdGhlIHZhbHVlIGlzIGNoYW5nZWRcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBzZWFyY2hPbkNoYW5nZTogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFRoZSB0aXRsZSB0byBkaXNwbGF5XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICB0aXRsZTogJ0xvY2F0aW9uJyxcblxuICAvKipcbiAgICogVGhlIGxhYmVsIHRvIGRpc3BsYXlcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGxhYmVsOiAnTG9jYXRpb24nLFxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB1cmwgdG8gc2hvdyBpbiB0aGUgZ2VvIGJ1dHRvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2VvQnV0dG9uSWNvbjogJycsXG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IHRvIHNob3cgaW4gdGhlIGdlbyBidXR0b25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdlb0J1dHRvblRleHQ6ICdVc2UgTXkgTG9jYXRpb24nLFxuXG4gIC8qKlxuICAgKiBUaGUgdGV4dCB0byBzaG93IHdoZW4gZ2VvbG9jYXRpb24gaXMgZW5hYmxlZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZW5hYmxlZFRleHQ6ICdDdXJyZW50IExvY2F0aW9uJyxcblxuICAvKipcbiAgICogVGhlIHRleHQgdG8gc2hvdyB3aGVuIGxvYWRpbmcgdGhlIHVzZXIncyBsb2NhdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgbG9hZGluZ1RleHQ6ICdGaW5kaW5nIFlvdXIgTG9jYXRpb24uLi4nLFxuXG4gIC8qKlxuICAgKiBUaGUgdGV4dCB0byBzaG93IGlmIHRoZSB1c2VyJ3MgbG9jYXRpb24gY2Fubm90IGJlIGZvdW5kXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBlcnJvclRleHQ6ICdDb3VsZCBOb3QgRmluZCBZb3VyIExvY2F0aW9uJyxcblxuICAvKipcbiAgICogVGhlIENTUyBzZWxlY3RvciBvZiB0aGUgdG9nZ2xlIGJ1dHRvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgYnV0dG9uU2VsZWN0b3I6ICcuanMteXh0LUdlb0xvY2F0aW9uRmlsdGVyLWJ1dHRvbicsXG5cbiAgLyoqXG4gICAqIFRoZSBDU1Mgc2VsZWN0b3Igb2YgdGhlIHF1ZXJ5IGlucHV0XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBpbnB1dFNlbGVjdG9yOiAnLmpzLXl4dC1HZW9Mb2NhdGlvbkZpbHRlci1pbnB1dCdcbn07XG5cbi8qKlxuICogUmVuZGVycyBhIGJ1dHRvbiB0aGF0IHdoZW4gY2xpY2tlZCBhZGRzIGEgc3RhdGljIGZpbHRlciByZXByZXNlbnRpbmcgdGhlIHVzZXIncyBsb2NhdGlvblxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlb0xvY2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoeyAuLi5ERUZBVUxUX0NPTkZJRywgLi4uY29uZmlnIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHN0cmluZyB0byB1c2UgZm9yIHRoZSBpbnB1dCBib3gsIHByb3ZpZGVkIHRvIHRlbXBsYXRlIGZvciByZW5kZXJpbmcuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWApIHx8ICcnO1xuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCwgcSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gcTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaWx0ZXIgdG8gdXNlIGZvciB0aGUgY3VycmVudCBxdWVyeVxuICAgICAqIEB0eXBlIHtGaWx0ZXJ9XG4gICAgICovXG4gICAgdGhpcy5maWx0ZXIgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWApIHx8IHt9O1xuICAgIGlmICh0eXBlb2YgdGhpcy5maWx0ZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmZpbHRlciA9IEpTT04ucGFyc2UodGhpcy5maWx0ZXIpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG5cbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke3RoaXMubmFtZX1gLCBmID0+IHsgdGhpcy5maWx0ZXIgPSBmOyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdHZW9Mb2NhdGlvbkZpbHRlcic7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoKSB7XG4gICAgcmV0dXJuICdjb250cm9scy9nZW9sb2NhdGlvbic7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIGxldCBwbGFjZWhvbGRlciA9ICcnO1xuICAgIGlmICh0aGlzLl9lbmFibGVkKSB7XG4gICAgICBwbGFjZWhvbGRlciA9IHRoaXMuX2NvbmZpZy5lbmFibGVkVGV4dDtcbiAgICB9XG4gICAgaWYgKGRhdGEuZ2VvTG9hZGluZykge1xuICAgICAgcGxhY2Vob2xkZXIgPSB0aGlzLl9jb25maWcubG9hZGluZ1RleHQ7XG4gICAgfVxuICAgIGlmIChkYXRhLmdlb0Vycm9yKSB7XG4gICAgICBwbGFjZWhvbGRlciA9IHRoaXMuX2NvbmZpZy5lcnJvclRleHQ7XG4gICAgfVxuICAgIHN1cGVyLnNldFN0YXRlKHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICB0aXRsZTogdGhpcy5fY29uZmlnLnRpdGxlLFxuICAgICAgZ2VvRW5hYmxlZDogdGhpcy5fZW5hYmxlZCxcbiAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgbGFiZWxUZXh0OiB0aGlzLl9jb25maWcubGFiZWwsXG4gICAgICBlbmFibGVkVGV4dDogdGhpcy5fY29uZmlnLmVuYWJsZWRUZXh0LFxuICAgICAgbG9hZGluZ1RleHQ6IHRoaXMuX2NvbmZpZy5sb2FkaW5nVGV4dCxcbiAgICAgIGVycm9yVGV4dDogdGhpcy5fY29uZmlnLmVycm9yVGV4dCxcbiAgICAgIGdlb0J1dHRvbkljb246IHRoaXMuX2NvbmZpZy5nZW9CdXR0b25JY29uLFxuICAgICAgZ2VvVmFsdWU6IHRoaXMuX2VuYWJsZWQgfHwgZGF0YS5nZW9Mb2FkaW5nIHx8IGRhdGEuZ2VvRXJyb3IgPyAnJyA6IHRoaXMucXVlcnksXG4gICAgICBnZW9QbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICBnZW9CdXR0b25UZXh0OiB0aGlzLl9jb25maWcuZ2VvQnV0dG9uVGV4dFxuICAgIH0pO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZSkge1xuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2luaXRBdXRvQ29tcGxldGUodGhpcy5fY29uZmlnLmlucHV0U2VsZWN0b3IpO1xuICAgIERPTS5vbih0aGlzLl9jb25maWcuYnV0dG9uU2VsZWN0b3IsICdjbGljaycsICgpID0+IHRoaXMuX3RvZ2dsZUdlb0ZpbHRlcigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gd2lyZSB1cCBvdXIgYXV0byBjb21wbGV0ZSBvbiBhbiBpbnB1dCBzZWxlY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRTZWxlY3RvciBDU1Mgc2VsZWN0b3IgdG8gYmluZCBvdXIgYXV0byBjb21wbGV0ZSBjb21wb25lbnQgdG9cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbml0QXV0b0NvbXBsZXRlIChpbnB1dFNlbGVjdG9yKSB7XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZSkge1xuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2F1dG9jb21wbGV0ZSA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoJ0F1dG9Db21wbGV0ZScsIHtcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0uYXV0b2NvbXBsZXRlYCxcbiAgICAgIGlzRmlsdGVyU2VhcmNoOiB0cnVlLFxuICAgICAgY29udGFpbmVyOiAnLmpzLXl4dC1HZW9Mb2NhdGlvbkZpbHRlci1hdXRvY29tcGxldGUnLFxuICAgICAgb3JpZ2luYWxRdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgIG9yaWdpbmFsRmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgIGlucHV0RWw6IGlucHV0U2VsZWN0b3IsXG4gICAgICB2ZXJ0aWNhbEtleTogdGhpcy5fdmVydGljYWxLZXksXG4gICAgICBvblN1Ym1pdDogKHF1ZXJ5LCBmaWx0ZXIpID0+IHtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmZpbHRlciA9IEZpbHRlci5mcm9tUmVzcG9uc2UoZmlsdGVyKTtcbiAgICAgICAgdGhpcy5fc2F2ZURhdGFUb1N0b3JhZ2UocXVlcnksIHRoaXMuZmlsdGVyKTtcbiAgICAgICAgdGhpcy5fZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIHN0YXRpYyBmaWx0ZXIgcmVwcmVzZW50aW5nIHRoZSB1c2VyJ3MgbG9jYXRpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF90b2dnbGVHZW9GaWx0ZXIgKCkge1xuICAgIGlmICghbmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZ2VvRXJyb3I6IHRydWUgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9lbmFibGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZ2VvTG9hZGluZzogdHJ1ZSB9KTtcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4gICAgICAgIHBvc2l0aW9uID0+IHtcbiAgICAgICAgICB0aGlzLl9zYXZlRGF0YVRvU3RvcmFnZSgnJywgdGhpcy5fYnVpbGRGaWx0ZXIocG9zaXRpb24pKTtcbiAgICAgICAgICB0aGlzLl9lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHt9KTtcbiAgICAgICAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2UuZGVsZXRlKGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gKTtcbiAgICAgICAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2UuZGVsZXRlKGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCk7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHRoaXMuc2V0U3RhdGUoeyBnZW9FcnJvcjogdHJ1ZSB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2F2ZXMgdGhlIHByb3ZpZGVkIGZpbHRlciB1bmRlciB0aGlzIGNvbXBvbmVudCdzIG5hbWVcbiAgICogQHBhcmFtIHtGaWx0ZXJ9IGZpbHRlciBUaGUgZmlsdGVyIHRvIHNhdmVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zYXZlRGF0YVRvU3RvcmFnZSAocXVlcnksIGZpbHRlcikge1xuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWAsIHF1ZXJ5KTtcbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCwgZmlsdGVyKTtcbiAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgZmlsdGVyKTtcblxuICAgIGlmICh0aGlzLl9jb25maWcuc2VhcmNoT25DaGFuZ2UpIHtcbiAgICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICAgIGxldCB0b3RhbEZpbHRlciA9IGZpbHRlcnNbMF07XG4gICAgICBpZiAoZmlsdGVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRvdGFsRmlsdGVyID0gRmlsdGVyLmFuZCguLi5maWx0ZXJzKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpIHx8ICcnO1xuICAgICAgY29uc3QgZmFjZXRGaWx0ZXIgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRkFDRVRfRklMVEVSKVswXTtcblxuICAgICAgdGhpcy5jb3JlLnZlcnRpY2FsU2VhcmNoKHRoaXMuX2NvbmZpZy52ZXJ0aWNhbEtleSwge1xuICAgICAgICBpbnB1dDogc2VhcmNoUXVlcnksXG4gICAgICAgIGZpbHRlcjogSlNPTi5zdHJpbmdpZnkodG90YWxGaWx0ZXIpLFxuICAgICAgICBmYWNldEZpbHRlcjogSlNPTi5zdHJpbmdpZnkoZmFjZXRGaWx0ZXIpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYSBwb3NpdGlvbiwgY29uc3RydWN0IGEgRmlsdGVyIG9iamVjdFxuICAgKiBAcGFyYW0ge1Bvc3RpdGlvbn0gcG9zaXRpb24gVGhlIHBvc2l0aW9uXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYnVpbGRGaWx0ZXIgKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlLCBhY2N1cmFjeSB9ID0gcG9zaXRpb24uY29vcmRzO1xuICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgubWF4KGFjY3VyYWN5LCB0aGlzLl9jb25maWcucmFkaXVzICogTUVURVJTX1BFUl9NSUxFKTtcbiAgICByZXR1cm4gRmlsdGVyLnBvc2l0aW9uKGxhdGl0dWRlLCBsb25naXR1ZGUsIHJhZGl1cyk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIERpcmVjdEFuc3dlckNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgQW5hbHl0aWNzRXZlbnQgZnJvbSAnLi4vLi4vLi4vY29yZS9hbmFseXRpY3MvYW5hbHl0aWNzZXZlbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIEV2ZW50VHlwZXMgYXJlIGV4cGxpY2l0IHN0cmluZ3MgZGVmaW5lZFxuICogZm9yIHdoYXQgdGhlIHNlcnZlciBleHBlY3RzIGZvciBhbmFseXRpY3MuXG4gKlxuICogQGVudW1cbiAqL1xuY29uc3QgRXZlbnRUeXBlcyA9IHtcbiAgVEhVTUJTX1VQOiAnVEhVTUJTX1VQJyxcbiAgVEhVTUJTX0RPV046ICdUSFVNQlNfRE9XTidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdEFuc3dlckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBSZWNpZXZlIHVwZGF0ZXMgZnJvbSBzdG9yYWdlIGJhc2VkIG9uIHRoaXMgaW5kZXhcbiAgICAgKiBAdHlwZSB7U3RvcmFnZUtleX1cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuRElSRUNUX0FOU1dFUjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmb3JtIHVzZWQgZm9yIHN1Ym1pdHRpbmcgdGhlIGZlZWRiYWNrXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9mb3JtRWwgPSBjb25maWcuZm9ybUVsIHx8ICcuanMtZGlyZWN0QW5zd2VyLWZlZWRiYWNrLWZvcm0nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGB0aHVtYnMgdXBgIGNzcyBzZWxlY3RvciB0byBiaW5kIHVpIGludGVyYWN0aW9uIHRvIGZvciByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RodW1ic1VwU2VsZWN0b3IgPSBjb25maWcudGh1bWJzVXBTZWxlY3RvciB8fCAnLmpzLWRpcmVjdEFuc3dlci10aHVtYlVwJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBgdGh1bWJzIGRvd25gIGNzcyBzZWxlY3RvciB0byBiaW5kIHVpIGludGVyYWN0aW9uIHRvIGZvciByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RodW1ic0Rvd25TZWxlY3RvciA9IGNvbmZpZy50aHVtYnNEb3duU2VsZWN0b3IgfHwgJy5qcy1kaXJlY3RBbnN3ZXItdGh1bWJEb3duJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBkaXNwbGF5IHRleHQgZm9yIHRoZSBWaWV3IERldGFpbHMgY2xpY2sgdG8gYWN0aW9uIGxpbmtcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZpZXdEZXRhaWxzVGV4dCA9IGNvbmZpZy52aWV3RGV0YWlsc1RleHQgfHwgJ1ZpZXcgRGV0YWlscyc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRGlyZWN0QW5zd2VyJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9kaXJlY3RhbnN3ZXInO1xuICB9XG5cbiAgLyoqXG4gICAqIGJlZm9yZU1vdW50LCBvbmx5IGRpc3BsYXkgdGhlIGRpcmVjdCBhbnN3ZXIgY29tcG9uZW50IGlmIGl0IGhhcyBkYXRhXG4gICAqL1xuICBiZWZvcmVNb3VudCAoKSB7XG4gICAgaWYgKCF0aGlzLmhhc1N0YXRlKCdhbnN3ZXInKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIERPTSBpcyBjb25zdHJ1Y3RlZCxcbiAgICogd2Ugd2FudCB0byB3aXJlIHVwIHRoZSBiZWhhdmlvciBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgcXVhbGl0eSBmZWVkYmFjayByZXBvcnRpbmcgKHRodW1ic3VwL2Rvd24pXG4gICAqL1xuICBvbk1vdW50ICgpIHtcbiAgICAvLyBBdm9pZCBiaW5kaW5ncyBpZiB0aGUgZmVlZGJhY2sgaGFzIHByZXZpb3VzbHkgYmVlbiBzdWJtaXR0ZWRcbiAgICBpZiAodGhpcy5nZXRTdGF0ZSgnZmVlZGJhY2tTdWJtaXR0ZWQnKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gRm9yIFdDQUcgY29tcGxpYW5jZSwgdGhlIGZlZWRiYWNrIHNob3VsZCBiZSBhIHN1Ym1pdHRhYmxlIGZvcm1cbiAgICBET00ub24odGhpcy5fZm9ybUVsLCAnc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGxldCBmb3JtRWwgPSBlLnRhcmdldDtcbiAgICAgIGxldCBjaGVja2VkVmFsdWUgPSBET00ucXVlcnkoZm9ybUVsLCAnaW5wdXQ6Y2hlY2tlZCcpLmNoZWNrZWQ7XG5cbiAgICAgIHRoaXMucmVwb3J0UXVhbGl0eShjaGVja2VkVmFsdWUpO1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICdmZWVkYmFja1N1Ym1pdHRlZCc6IHRydWVcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gSXMgdGhpcyBhY3R1YWxseSBuZWNlc3Nhcnk/IEkgZ3Vlc3MgaXQncyBvbmx5IG5lY2Vzc2FyeSBpZiB0aGVcbiAgICAvLyBzdWJtaXQgYnV0dG9uIGlzIGhpZGRlbi5cbiAgICBET00ub24odGhpcy5fdGh1bWJzVXBTZWxlY3RvciwgJ2NsaWNrJywgKCkgPT4geyBET00udHJpZ2dlcih0aGlzLl9mb3JtRWwsICdzdWJtaXQnKTsgfSk7XG4gICAgRE9NLm9uKHRoaXMuX3RodW1ic0Rvd25TZWxlY3RvciwgJ2NsaWNrJywgKCkgPT4geyBET00udHJpZ2dlcih0aGlzLl9mb3JtRWwsICdzdWJtaXQnKTsgfSk7XG4gIH1cblxuICAvKipcbiAgICogdXBkYXRlU3RhdGUgZW5hYmxlcyBmb3IgcGFydGlhbCB1cGRhdGVzICh0aGUgZGVsdGEgYmV0d2VlbiB0aGUgb2xkIGFuZCBuZXcpXG4gICAqIEB0eXBlIHtvYmplY3R9IFRoZSBuZXcgc3RhdGUgdG8gYXBwbHkgdG8gdGhlIG9sZFxuICAgKi9cbiAgdXBkYXRlU3RhdGUgKHN0YXRlID0ge30pIHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZ2V0U3RhdGUoKSwgc3RhdGUpO1xuICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgZXZlbnRPcHRpb25zOiB0aGlzLmV2ZW50T3B0aW9ucyhkYXRhKSxcbiAgICAgIHZpZXdEZXRhaWxzVGV4dDogdGhpcy5fdmlld0RldGFpbHNUZXh0XG4gICAgfSkpO1xuICB9XG5cbiAgZXZlbnRPcHRpb25zIChkYXRhKSB7XG4gICAgaWYgKCFkYXRhIHx8IE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiBkYXRhLnJlbGF0ZWRJdGVtLnZlcnRpY2FsQ29uZmlnSWQsXG4gICAgICBzZWFyY2hlcjogJ1VOSVZFUlNBTCcsXG4gICAgICBlbnRpdHlJZDogZGF0YS5yZWxhdGVkSXRlbS5kYXRhLmlkLFxuICAgICAgY3RhTGFiZWw6IHRoaXMuX3ZpZXdEZXRhaWxzVGV4dC50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoJyAnLCAnXycpXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogcmVwb3J0UXVhbGl0eSB3aWxsIHNlbmQgdGhlIHF1YWxpdHkgZmVlZGJhY2sgdG8gYW5hbHl0aWNzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNHb29kIHRydWUgaWYgdGhlIGFuc3dlciBpcyB3aGF0IHlvdSB3ZXJlIGxvb2tpbmcgZm9yXG4gICAqL1xuICByZXBvcnRRdWFsaXR5IChpc0dvb2QpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBpc0dvb2QgPT09IHRydWUgPyBFdmVudFR5cGVzLlRIVU1CU19VUCA6IEV2ZW50VHlwZXMuVEhVTUJTX0RPV047XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgQW5hbHl0aWNzRXZlbnQoZXZlbnRUeXBlKVxuICAgICAgLmFkZE9wdGlvbnMoe1xuICAgICAgICAnZGlyZWN0QW5zd2VyJzogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICB0aGlzLmFuYWx5dGljc1JlcG9ydGVyLnJlcG9ydChldmVudCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlc3VsdHNJdGVtQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICAvKipcbiAgICAgKiB2ZXJ0aWNhbENvbmZpZ0lkIHVzZWQgZm9yIGFuYWx5dGljcyBhbmQgcGFzc2VkIHRvIGNoaWxkcmVuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsQ29uZmlnSWQgPSBvcHRzLnZlcnRpY2FsQ29uZmlnSWQ7XG5cbiAgICAvKipcbiAgICAgKiBpc1VuaXZlcnNhbCBpcyB1c2VkIGZvciBhbmFseXRpY3MgYW5kIHBhc3NlZCB0byBjaGlsZHJlbiBhbmQgaXMgc2V0IHRvXG4gICAgICogdHJ1ZSBpZiB0aGlzIGNvbXBvbmVudCBpcyBhZGRlZCBieSB0aGUgVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faXNVbml2ZXJzYWwgPSBvcHRzLmlzVW5pdmVyc2FsIHx8IGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1Jlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9yZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoZWxwZXIgdG8gY29uc3RydWN0IHRoZSBldmVudE9wdGlvbnMgb2JqZWN0IGZvciB0aGUgdGl0bGUgbGlua1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZXZlbnRPcHRpb25zIChlbnRpdHlJZCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiB0aGlzLl92ZXJ0aWNhbENvbmZpZ0lkLFxuICAgICAgc2VhcmNoZXI6IHRoaXMuX2lzVW5pdmVyc2FsID8gJ1VOSVZFUlNBTCcgOiAnVkVSVElDQUwnLFxuICAgICAgZW50aXR5SWQ6IGVudGl0eUlkXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogcGFzc2VzIGV2ZW50T3B0aW9ucyB0byB0aGUgdmlld01vZGVsXG4gICAqIEBvdmVycmlkZVxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0c0l0ZW1Db21wb25lbnR9XG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgIGV2ZW50T3B0aW9uczogdGhpcy5ldmVudE9wdGlvbnMoZGF0YS5pZClcbiAgICB9KSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvbG9jYXRpb25yZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBSZXN1bHRzSXRlbUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL3Blb3BsZXJlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNYXBQcm92aWRlciAqL1xuXG4vKipcbiAqIEEgTWFwUHJvdmlkZXIgaXMgYW4gaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB0aGF0IHNob3VsZCBiZSBpbXBsZW1lbnRlZFxuICogaW4gb3JkZXIgdG8gaW50ZWdyYXRlIHdpdGggYSBUaGlyZCBQYXJ0eSBNYXAgcHJvdmlkZXIgZm9yIGJvdGhcbiAqIHN0YXRpYyBhbmQgaW50ZXJhY3RpdmUgbWFwcy4gTWFwUHJvdmlkZXJzIGFyZSB1c2VkIGJ5IHRoZSBNYXBDb21wb25lbnQuXG4gKlxuICogSW1wbGVtZW50YXRpb25zIHNob3VsZCBleHRlbmQgdGhpcyBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcFByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdXNlZCBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgbWFwIHByb3ZpZGVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBjb25maWcuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgbWFwIHRvIGFwcGVuZCB0byB0aGUgRE9NLCBkZWZhdWx0cyB0byAxMDAlXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9oZWlnaHQgPSBjb25maWcuaGVpZ2h0IHx8IDIwMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgbWFwIHRvIGFwcGVuZCB0byB0aGUgRE9NLCBkZWZhdWx0cyB0byAxMDAlXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl93aWR0aCA9IGNvbmZpZy53aWR0aCB8fCA2MDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgem9vbSBsZXZlbCBvZiB0aGUgbWFwLCBkZWZhdWx0cyB0byA5XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl96b29tID0gY29uZmlnLnpvb20gfHwgOTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGNvb3JkaW5hdGVzIHRvIGRpc3BsYXkgaWYgdGhlcmUgYXJlIG5vIHJlc3VsdHMgcmV0dXJuZWRcbiAgICAgKiBPbmx5IHVzZWQgaWYgc2hvd0VtcHR5TWFwIGlzIHNldCB0byB0cnVlXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9kZWZhdWx0UG9zaXRpb24gPSBjb25maWcuZGVmYXVsdFBvc2l0aW9uIHx8IHsgbGF0OiAzNy4wOTAyLCBsbmc6IC05NS43MTI5IH07XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGFuIGVtcHR5IG1hcCBzaG91bGQgYmUgc2hvd24gd2hlbiB0aGVyZSBhcmUgbm8gcmVzdWx0c1xuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX3Nob3dFbXB0eU1hcCA9IGNvbmZpZy5zaG93RW1wdHlNYXAgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgdW5kZXJseWluZyBtYXAgaW5zdGFuY2UsIGNyZWF0ZWQgYnkgdGhlIGV4dGVybmFsIGxpYi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX21hcCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUZW1wb3JhcnkgYm9vbGVhbiB0cmFja2luZyB3aGV0aGVyIG9yIG5vdCB0aGUgZXh0ZXJuYWwgSlMgbGlicmFyeSBpcyBsb2FkZWQgKHNlZSBUT0RPIGJlbG93KVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2lzTG9hZGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiBhIHBpbiBpcyBjbGlja2VkLiBUaGUgY2xpY2tlZCBpdGVtKHMpIGFyZSBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMuX29uUGluQ2xpY2sgPSBjb25maWcub25QaW5DbGljayB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIG9uY2UgdGhlIEphdmFzY3JpcHQgaXMgbG9hZGVkXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMuX29uTG9hZGVkID0gY29uZmlnLm9uTG9hZGVkIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1c3RvbSBjb25maWd1cmF0aW9uIG92ZXJyaWRlIHRvIHVzZSBmb3IgdGhlIG1hcCBtYXJrZXJzXG4gICAgICogQHR5cGUge09iamVjdHxGdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLl9waW5Db25maWcgPSB0eXBlb2YgY29uZmlnLnBpbiA9PT0gJ2Z1bmN0aW9uJyA/IGNvbmZpZy5waW4gOiBPYmplY3QuYXNzaWduKE1hcFByb3ZpZGVyLkRFRkFVTFRfUElOX0NPTkZJRywgY29uZmlnLnBpbik7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgY29uZmlndXJhdGlvbiB0byB1c2UgZm9yIHRoZSBtYXAgbWFya2Vyc1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKiBUT0RPKGJpbGx5KSBDcmVhdGUgYSBjb25maWd1cmF0aW9uIG1vZGVsXG4gICAqL1xuICBzdGF0aWMgZ2V0IERFRkFVTFRfUElOX0NPTkZJRyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGljb246IHtcbiAgICAgICAgYW5jaG9yOiBudWxsLCAvLyBlLmcuIHsgeDogMSwgeTogMSB9XG4gICAgICAgIHN2ZzogbnVsbCxcbiAgICAgICAgdXJsOiBudWxsLFxuICAgICAgICBzY2FsZWRTaXplOiBudWxsIC8vIGUuZy4geyB3OiAyMCwgaDogMjAgfVxuICAgICAgfSxcbiAgICAgIGxhYmVsVHlwZTogJ251bWVyaWMnXG4gICAgfTtcbiAgfVxuXG4gIG9uTG9hZGVkIChjYikge1xuICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9vbkxvYWRlZCA9IGNiO1xuICAgIGlmICh0aGlzLmlzTG9hZGVkKCkpIHtcbiAgICAgIHRoaXMuX29uTG9hZGVkKCk7XG4gICAgfVxuICB9XG5cbiAgaXNMb2FkZWQgKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0xvYWRlZDtcbiAgfVxuXG4gIGxvYWRKUyAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmltcGxlbWVudGVkIE1ldGhvZDogbG9hZEpTJyk7XG4gIH1cblxuICBsb2FkU3RhdGljICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaW1wbGVtZW50ZWQgTWV0aG9kOiBsb2FkU3RhdGljJyk7XG4gIH1cblxuICBpbml0IChtYXBEYXRhKSB7XG4gICAgLy8gVE9ETyhiaWxseSkgVGhpcyBzaG91bGQgYmUgYmFzZWQgb2ZmIGEgcHJvbWlzZSB0aGF0IGdldHMgY3JlYXRlZCBmcm9tIGxvYWRKU1xuICAgIHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCBNZXRob2Q6IGluaXQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhIGxpc3Qgb2YgbWFya2VycywgY29tYmluZSBtYXJrZXJzIHdpdGggdGhlIHNhbWUgbGF0L2xuZyBpbnRvIGEgc2luZ2xlIG1hcmtlclxuICAgKiBAcGFyYW0ge29iamVjdFtdfSBtYXJrZXJzIFRoZSBtYXJrZXJzIHRvIGNvbGxhcHNlXG4gICAqL1xuICBfY29sbGFwc2VNYXJrZXJzIChtYXJrZXJzKSB7XG4gICAgY29uc3QgbG9jYXRpb25Ub0l0ZW0gPSB7fTtcbiAgICBtYXJrZXJzLmZvckVhY2gobSA9PiB7XG4gICAgICBsb2NhdGlvblRvSXRlbVtgJHttLmxhdGl0dWRlfSR7bS5sb25naXR1ZGV9YF1cbiAgICAgICAgPyBsb2NhdGlvblRvSXRlbVtgJHttLmxhdGl0dWRlfSR7bS5sb25naXR1ZGV9YF0ucHVzaChtKVxuICAgICAgICA6IGxvY2F0aW9uVG9JdGVtW2Ake20ubGF0aXR1ZGV9JHttLmxvbmdpdHVkZX1gXSA9IFttXTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbGxhcHNlZE1hcmtlcnMgPSBbXTtcbiAgICBmb3IgKGxldCBbLCBtYXJrZXJzXSBvZiBPYmplY3QuZW50cmllcyhsb2NhdGlvblRvSXRlbSkpIHtcbiAgICAgIGlmIChtYXJrZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2VkTWFya2VyID0ge1xuICAgICAgICAgIGl0ZW06IG1hcmtlcnMubWFwKG0gPT4gbS5pdGVtKSxcbiAgICAgICAgICBsYWJlbDogbWFya2Vycy5sZW5ndGgsXG4gICAgICAgICAgbGF0aXR1ZGU6IG1hcmtlcnNbMF0ubGF0aXR1ZGUsXG4gICAgICAgICAgbG9uZ2l0dWRlOiBtYXJrZXJzWzBdLmxvbmdpdHVkZVxuICAgICAgICB9O1xuICAgICAgICBjb2xsYXBzZWRNYXJrZXJzLnB1c2goY29sbGFwc2VkTWFya2VyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxhcHNlZE1hcmtlcnMucHVzaChtYXJrZXJzWzBdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29sbGFwc2VkTWFya2VycztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgR29vZ2xlTWFwUHJvdmlkZXIgKi9cblxuaW1wb3J0IE1hcFByb3ZpZGVyIGZyb20gJy4vbWFwcHJvdmlkZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi8uLi9kb20vZG9tJztcblxuLyogZ2xvYmFsIGdvb2dsZSAqL1xuXG4vKipcbiAqIEdvb2dsZU1hcFByb3ZpZGVyIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIGEgTWFwUHJvdmlkZXJcbiAqIHRoYXQgaGFuZGxlcyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgdGhpcmQgcGFydHkgQVBJIHRvIGV4cG9zZSBtYXBzLlxuICogQGV4dGVuZHMgTWFwUHJvdmlkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29vZ2xlTWFwUHJvdmlkZXIgZXh0ZW5kcyBNYXBQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl9jbGllbnRJZCA9IG9wdHMuY2xpZW50SWQ7XG4gICAgdGhpcy5fc2lnbmF0dXJlID0gb3B0cy5zaWduYXR1cmU7XG5cbiAgICBpZiAoIXRoaXMuaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscygpICYmICF0aGlzLl9hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignR29vZ2xlTWFwc1Byb3ZpZGVyOiBNaXNzaW5nIGBhcGlLZXlgIG9yIHtgY2xpZW50SWRgLCBgc2lnbmF0dXJlYH0nKTtcbiAgICB9XG4gIH1cblxuICBsb2FkSlMgKG9uTG9hZCkge1xuICAgIGlmIChET00ucXVlcnkoJyN5ZXh0LW1hcC1qcycpKSB7XG4gICAgICBpZiAodHlwZW9mIG9uTG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvbkxvYWQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWpzJyxcbiAgICAgIG9ubG9hZDogKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX29uTG9hZGVkKCk7XG4gICAgICB9LFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzcmM6IGAvL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/JHt0aGlzLmdlbmVyYXRlQ3JlZGVudGlhbHMoKX1gXG4gICAgfSk7XG5cbiAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgfVxuXG4gIGdlbmVyYXRlU3RhdGljIChtYXBEYXRhKSB7XG4gICAgbGV0IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MgPSBHb29nbGVNYXBNYXJrZXJDb25maWcuZnJvbShcbiAgICAgIG1hcERhdGEubWFwTWFya2VycyxcbiAgICAgIHRoaXMuX3BpbkNvbmZpZ1xuICAgICk7XG5cbiAgICBsZXQgZW5jb2RlZE1hcmtlcnMgPSBHb29nbGVNYXBNYXJrZXJDb25maWcuc2VyaWFsaXplKGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MpO1xuICAgIHJldHVybiBgXG4gICAgICA8aW1nIHNyYz1cIi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9zdGF0aWNtYXA/JHtlbmNvZGVkTWFya2Vyc30mc2l6ZT0ke3RoaXMuX3dpZHRofXgke3RoaXMuX2hlaWdodH0mJHt0aGlzLmdlbmVyYXRlQ3JlZGVudGlhbHMoKX1cIj5gO1xuICB9XG5cbiAgZ2VuZXJhdGVDcmVkZW50aWFscyAoKSB7XG4gICAgaWYgKHRoaXMuaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscygpKSB7XG4gICAgICByZXR1cm4gYGNsaWVudD0ke3RoaXMuX2NsaWVudElkfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBga2V5PSR7dGhpcy5fYXBpS2V5fWA7XG4gICAgfVxuICB9XG5cbiAgaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscyAoKSB7XG4gICAgLy8gU2lnbmF0dXJlIGlzIG9ubHkgcmVxdWlyZWQgaWYgbWFwIGlzIHN0YXRpY1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRJZCAmJiAodGhpcy5fc2lnbmF0dXJlIHx8ICF0aGlzLl9pc1N0YXRpYyk7XG4gIH1cblxuICBpbml0IChlbCwgbWFwRGF0YSkge1xuICAgIGlmICgoIW1hcERhdGEgfHwgbWFwRGF0YS5tYXBNYXJrZXJzLmxlbmd0aCA8PSAwKSAmJiAhdGhpcy5fc2hvd0VtcHR5TWFwKSB7XG4gICAgICB0aGlzLl9tYXAgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vIE5PVEUoYmlsbHkpIFRoaXMgdGltZW91dCBpcyBhIGhhY2sgZm9yIGRlYWxpbmcgd2l0aCBhc3luYyBuYXR1cmUuXG4gICAgLy8gT25seSBoZXJlIGZvciBkZW1vIHB1cnBvc2VzLCBzbyB3ZSdsbCBmaXggbGF0ZXIuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgY29udGFpbmVyID0gRE9NLnF1ZXJ5KGVsKTtcbiAgICAgIERPTS5jc3MoY29udGFpbmVyLCB7XG4gICAgICAgIHdpZHRoOiB0aGlzLl93aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLl9oZWlnaHRcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoY29udGFpbmVyLCB7XG4gICAgICAgIHpvb206IHRoaXMuX3pvb21cbiAgICAgIH0pO1xuXG4gICAgICAvLyBBcHBseSBvdXIgc2VhcmNoIGRhdGEgdG8gb3VyIEdvb2dsZU1hcFxuICAgICAgbGV0IGJvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoKTtcblxuICAgICAgaWYgKG1hcERhdGEgJiYgbWFwRGF0YS5tYXBNYXJrZXJzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBjb2xsYXBzZWRNYXJrZXJzID0gdGhpcy5fY29sbGFwc2VNYXJrZXJzKG1hcERhdGEubWFwTWFya2Vycyk7XG4gICAgICAgIGxldCBnb29nbGVNYXBNYXJrZXJDb25maWdzID0gR29vZ2xlTWFwTWFya2VyQ29uZmlnLmZyb20oXG4gICAgICAgICAgY29sbGFwc2VkTWFya2VycyxcbiAgICAgICAgICB0aGlzLl9waW5Db25maWcsXG4gICAgICAgICAgdGhpcy5tYXApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ29vZ2xlTWFwTWFya2VyQ29uZmlncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKGdvb2dsZU1hcE1hcmtlckNvbmZpZ3NbaV0pO1xuICAgICAgICAgIGlmICh0aGlzLl9vblBpbkNsaWNrKSB7XG4gICAgICAgICAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5fb25QaW5DbGljayhjb2xsYXBzZWRNYXJrZXJzW2ldLml0ZW0pKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm91bmRzLmV4dGVuZChtYXJrZXIucG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKGJvdW5kcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1hcC5zZXRDZW50ZXIobmV3IGdvb2dsZS5tYXBzLkxhdExuZyh0aGlzLl9kZWZhdWx0UG9zaXRpb24ubGF0LCB0aGlzLl9kZWZhdWx0UG9zaXRpb24ubG5nKSk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgfVxufVxuXG4vLyBUT0RPKGJpbGx5KSBNb3ZlIHRvIG93biBjbGFzc1xuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcE1hcmtlckNvbmZpZyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGdvb2dsZSBtYXAsIHRoYXQgdGhlIG1hcmtlciBpcyBhcHBlbmRlZCB0b1xuICAgICAqIEB0eXBlIHtHb29nbGVNYXB9XG4gICAgICovXG4gICAgdGhpcy5tYXAgPSBvcHRzLm1hcCB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1hcmtlciAobGF0L2xuZylcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMucG9zaXRpb24gPSBvcHRzLnBvc2l0aW9uIHx8IHtcbiAgICAgIGxhdDogdW5kZWZpbmVkLFxuICAgICAgbG5nOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHByb3BlcnRpZXMvc2V0dGluZ3Mgb2YgdGhlIGljb24gdXNlZCBmb3IgdGhlIG1hcmtlclxuICAgICAqIGUuZy4ge1xuICAgICAqICAgICAgICBhbmNob3I6IHsgeDogMCwgeTogMCB9XG4gICAgICogICAgICAgIHVybDogJ3BhdGgvdG8vdXJsLmpwZydcbiAgICAgKiAgICAgICAgc2NhbGVkU2l6ZTogeyB3OiAwLCBoOiAwIH1cbiAgICAgKiAgICAgICB9XG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuaWNvbiA9IG9wdHMuaWNvbiB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgb2YgdGhlIG1hcmtlciB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWwgPSBvcHRzLmxhYmVsIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGFuIGFycmF5IG9mIG1hcmtlciBjb25maWdzXG4gICAqIEBwYXJhbSB7R29vZ2xlTWFwTWFya2VyQ29uZmlnW119IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3NcbiAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZSAoZ29vZ2xlTWFwTWFya2VyQ29uZmlncykge1xuICAgIGxldCBzZXJpYWxpemVkTWFya2VycyA9IFtdO1xuICAgIGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBzZXJpYWxpemVkTWFya2Vycy5wdXNoKGBtYXJrZXJzPWxhYmVsOiR7bWFya2VyLmxhYmVsfXwke21hcmtlci5wb3NpdGlvbi5sYXR9LCR7bWFya2VyLnBvc2l0aW9uLmxuZ31gKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VyaWFsaXplZE1hcmtlcnMuam9pbignJicpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBzdG9yYWdlIGRhdGEgbW9kZWwgb2YgbWFya2VycyBpbnRvIEdvb2dsZUFQSU1hcmtlclxuICAgKiBAcGFyYW0ge29iamVjdFtdfSBtYXJrZXJzIFRoZSBkYXRhIG9mIHRoZSBtYXJrZXJcbiAgICogQHBhcmFtIHsoT2JqZWN0fGZ1bmN0aW9uKX0gcGluQ29uZmlnIFRoZSBjb25maWd1cmF0aW9uIHRvIGFwcGx5IHRvIHRoZSBtYXJrZXJcbiAgICogQHBhcmFtIHtHb29nbGVNYXB9IG1hcCByZWZlcmVuY2UgdG8gdGhlIGdvb2dsZSBtYXAgdG8gYXBwbHkgdGhlIG1hcmtlciB0b1xuICAgKiBAcmV0dXJucyB7R29vZ2xlTWFwTWFya2VyQ29uZmlnW119XG4gICAqL1xuICBzdGF0aWMgZnJvbSAobWFya2VycywgcGluQ29uZmlnLCBtYXApIHtcbiAgICBsZXQgZ29vZ2xlTWFwTWFya2VyQ29uZmlncyA9IFtdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShtYXJrZXJzKSkge1xuICAgICAgbWFya2VycyA9IFttYXJrZXJzXTtcbiAgICB9XG5cbiAgICBtYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgLy8gU3VwcG9ydCBjb25maWd1cmF0aW9uIGFzIGEgZnVuY3Rpb25cbiAgICAgIGxldCBwaW5Db25maWdPYmogPSBwaW5Db25maWc7XG4gICAgICBpZiAodHlwZW9mIHBpbkNvbmZpZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwaW5Db25maWdPYmogPSBwaW5Db25maWcoXG4gICAgICAgICAgbWFya2VyLml0ZW0sXG4gICAgICAgICAgTWFwUHJvdmlkZXIuREVGQVVMVF9QSU5fQ09ORklHLFxuICAgICAgICAgIG1hcmtlcik7XG4gICAgICB9XG5cbiAgICAgIC8vIFRyYW5zZm9ybSBvdXIgQ29uZmlndXJhdGlvbiBPYmplY3QgaW50byB0aGUgZXhwZWN0ZWRcbiAgICAgIC8vIEdvb2dsZSBBUEkgZm9ybWF0LlxuICAgICAgbGV0IGljb24gPSB7fTtcbiAgICAgIGlmIChwaW5Db25maWdPYmouYW5jaG9yKSB7XG4gICAgICAgIGljb24uYW5jaG9yID0gZ29vZ2xlLm1hcHMuUG9pbnQocGluQ29uZmlnT2JqLmFuY2hvci54LCBwaW5Db25maWdPYmouYW5jaG9yLnkpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluQ29uZmlnT2JqLnNjYWxlZFNpemUpIHtcbiAgICAgICAgaWNvbi5zY2FsZWRTaXplID0gbmV3IGdvb2dsZS5tYXBzLlNpemUocGluQ29uZmlnT2JqLnNjYWxlZFNpemUudywgcGluQ29uZmlnT2JqLnNjYWxlZFNpemUuaCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW5Db25maWdPYmoudXJsKSB7XG4gICAgICAgIGljb24udXJsID0gcGluQ29uZmlnT2JqLnVybDtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpbkNvbmZpZ09iai5zdmcpIHtcbiAgICAgICAgaWNvbi51cmwgPSBgZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsICR7ZW5jb2RlVVJJQ29tcG9uZW50KHBpbkNvbmZpZ09iai5zdmcpfWA7XG4gICAgICB9XG5cbiAgICAgIGxldCBsYWJlbDtcbiAgICAgIGlmIChwaW5Db25maWdPYmoubGFiZWwpIHtcbiAgICAgICAgbGFiZWwgPSBwaW5Db25maWdPYmoubGFiZWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYWJlbCA9IG1hcmtlci5sYWJlbC50b1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICAvLyBOT1RFKGJpbGx5KSBHb29nbGUgbWFwcyBkb2Vzbid0IGhhbmRsZSBlbXB0eSBpY29uIG9iamVjdHMgbmljZWx5XG4gICAgICAvLyBNYWtlIGdvb2dsZSBtYXBzIGhhcHB5IGlmIG5vIHNldHRpbmdzIGZvciBpY29uIGFyZSBwcm92aWRlZDtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhpY29uKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWNvbiA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgZ29vZ2xlTWFwTWFya2VyQ29uZmlncy5wdXNoKFxuICAgICAgICBuZXcgR29vZ2xlTWFwTWFya2VyQ29uZmlnKHtcbiAgICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgbGF0OiBtYXJrZXIubGF0aXR1ZGUsXG4gICAgICAgICAgICBsbmc6IG1hcmtlci5sb25naXR1ZGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGljb246IGljb24sXG4gICAgICAgICAgbGFiZWw6IGxhYmVsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGdvb2dsZU1hcE1hcmtlckNvbmZpZ3M7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE1hcEJveE1hcFByb3ZpZGVyICovXG5cbmltcG9ydCBNYXBQcm92aWRlciBmcm9tICcuL21hcHByb3ZpZGVyJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vLi4vZG9tL2RvbSc7XG5cbi8qIGdsb2JhbCBtYXBib3hnbCAqL1xuXG4vKipcbiAqIE1hcEJveE1hcFByb3ZpZGVyIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIGEgTWFwUHJvdmlkZXJcbiAqIHRoYXQgaGFuZGxlcyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgdGhpcmQgcGFydHkgQVBJIHRvIGV4cG9zZSBtYXBzLlxuICogQGV4dGVuZHMgTWFwUHJvdmlkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwQm94TWFwUHJvdmlkZXIgZXh0ZW5kcyBNYXBQcm92aWRlciB7XG4gIC8qKlxuICAgKiBMb2FkIHRoZSBleHRlcm5hbCBKUyBMaWJyYXJ5XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uTG9hZCBBbiBvcHRpb25hbCBjYWxsYmFjayB0byBpbnZva2Ugb25jZSB0aGUgSlMgaXMgbG9hZGVkLlxuICAgKi9cbiAgbG9hZEpTIChvbkxvYWQpIHtcbiAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWpzJyxcbiAgICAgIG9ubG9hZDogKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIG1hcGJveGdsLmFjY2Vzc1Rva2VuID0gdGhpcy5fYXBpS2V5O1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb25Mb2FkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgb25Mb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX29uTG9hZGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5fb25Mb2FkZWQoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgc3JjOiAnaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9tYXBib3gtZ2wtanMvdjAuNDQuMS9tYXBib3gtZ2wuanMnXG4gICAgfSk7XG5cbiAgICBsZXQgY3NzID0gRE9NLmNyZWF0ZUVsKCdsaW5rJywge1xuICAgICAgaWQ6ICd5ZXh0LW1hcC1jc3MnLFxuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOiAnaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9tYXBib3gtZ2wtanMvdjAuNDQuMS9tYXBib3gtZ2wuY3NzJ1xuICAgIH0pO1xuXG4gICAgRE9NLmFwcGVuZCgnYm9keScsIGNzcyk7XG4gICAgRE9NLmFwcGVuZCgnYm9keScsIHNjcmlwdCk7XG4gIH1cblxuICBnZW5lcmF0ZVN0YXRpYyAobWFwRGF0YSkge1xuICAgIGxldCBtYXBib3hNYXBNYXJrZXJDb25maWdzID0gTWFwQm94TWFya2VyQ29uZmlnLmZyb20oXG4gICAgICBtYXBEYXRhLm1hcE1hcmtlcnMsXG4gICAgICB0aGlzLl9waW5Db25maWdcbiAgICApO1xuXG4gICAgbGV0IGNlbnRlciA9IG1hcERhdGEubWFwQ2VudGVyO1xuICAgIGxldCB3aWR0aCA9IHRoaXMuX3dpZHRoIHx8IDYwMDtcbiAgICBsZXQgaGVpZ2h0ID0gdGhpcy5faGVpZ2h0IHx8IDIwMDtcbiAgICBsZXQgem9vbSA9IHRoaXMuX3pvb20gfHwgOTtcblxuICAgIGxldCBlbmNvZGVkTWFya2VycyA9IE1hcEJveE1hcmtlckNvbmZpZy5zZXJpYWxpemUobWFwYm94TWFwTWFya2VyQ29uZmlncyk7XG4gICAgcmV0dXJuIGA8aW1nIHNyYz1cImh0dHBzOi8vYXBpLm1hcGJveC5jb20vc3R5bGVzL3YxL21hcGJveC9zdHJlZXRzLXYxMS9zdGF0aWMvJHtlbmNvZGVkTWFya2Vyc30vJHtjZW50ZXIubG9uZ2l0dWRlfSwke2NlbnRlci5sYXRpdHVkZX0sJHt6b29tfS9hdXRvLyR7d2lkdGh9eCR7aGVpZ2h0fT9hY2Nlc3NfdG9rZW49JHt0aGlzLl9hcGlLZXl9XCI+YDtcbiAgfVxuXG4gIGluaXQgKGVsLCBtYXBEYXRhKSB7XG4gICAgaWYgKCghbWFwRGF0YSB8fCBtYXBEYXRhLm1hcE1hcmtlcnMubGVuZ3RoIDw9IDApICYmICF0aGlzLl9zaG93RW1wdHlNYXApIHtcbiAgICAgIHRoaXMuX21hcCA9IG51bGw7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBsZXQgY29udGFpbmVyID0gRE9NLnF1ZXJ5KGVsKTtcbiAgICBET00uY3NzKGNvbnRhaW5lciwge1xuICAgICAgd2lkdGg6IHRoaXMuX3dpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLl9oZWlnaHRcbiAgICB9KTtcblxuICAgIHRoaXMuX21hcCA9IG5ldyBtYXBib3hnbC5NYXAoe1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICB6b29tOiB0aGlzLl96b29tLFxuICAgICAgc3R5bGU6ICdtYXBib3g6Ly9zdHlsZXMvbWFwYm94L3N0cmVldHMtdjknLFxuICAgICAgY2VudGVyOiB0aGlzLmdldENlbnRlck1hcmtlcihtYXBEYXRhKVxuICAgIH0pO1xuXG4gICAgaWYgKG1hcERhdGEpIHtcbiAgICAgIGNvbnN0IGNvbGxhcHNlZE1hcmtlcnMgPSB0aGlzLl9jb2xsYXBzZU1hcmtlcnMobWFwRGF0YS5tYXBNYXJrZXJzKTtcbiAgICAgIGNvbnN0IG1hcGJveE1hcE1hcmtlckNvbmZpZ3MgPSBNYXBCb3hNYXJrZXJDb25maWcuZnJvbShcbiAgICAgICAgY29sbGFwc2VkTWFya2VycyxcbiAgICAgICAgdGhpcy5fcGluQ29uZmlnLFxuICAgICAgICB0aGlzLl9tYXApO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcGJveE1hcE1hcmtlckNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHdyYXBwZXIgPSBtYXBib3hNYXBNYXJrZXJDb25maWdzW2ldLndyYXBwZXI7XG4gICAgICAgIGxldCBjb29yZHMgPSBuZXcgbWFwYm94Z2wuTG5nTGF0KFxuICAgICAgICAgIG1hcGJveE1hcE1hcmtlckNvbmZpZ3NbaV0ucG9zaXRpb24ubG9uZ2l0dWRlLFxuICAgICAgICAgIG1hcGJveE1hcE1hcmtlckNvbmZpZ3NbaV0ucG9zaXRpb24ubGF0aXR1ZGUpO1xuICAgICAgICBsZXQgbWFya2VyID0gbmV3IG1hcGJveGdsLk1hcmtlcih3cmFwcGVyKS5zZXRMbmdMYXQoY29vcmRzKTtcbiAgICAgICAgbWFya2VyLmFkZFRvKHRoaXMuX21hcCk7XG4gICAgICAgIGlmICh0aGlzLl9vblBpbkNsaWNrKSB7XG4gICAgICAgICAgbWFya2VyLmdldEVsZW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuX29uUGluQ2xpY2soY29sbGFwc2VkTWFya2Vyc1tpXS5pdGVtKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRDZW50ZXJNYXJrZXIgKG1hcERhdGEpIHtcbiAgICByZXR1cm4gbWFwRGF0YSAmJiBtYXBEYXRhLm1hcENlbnRlciAmJiBtYXBEYXRhLm1hcENlbnRlci5sb25naXR1ZGUgJiYgbWFwRGF0YS5tYXBDZW50ZXIubGF0aXR1ZGVcbiAgICAgID8gW21hcERhdGEubWFwQ2VudGVyLmxvbmdpdHVkZSwgbWFwRGF0YS5tYXBDZW50ZXIubGF0aXR1ZGVdXG4gICAgICA6IHsgbG5nOiB0aGlzLl9kZWZhdWx0UG9zaXRpb24ubG5nLCBsYXQ6IHRoaXMuX2RlZmF1bHRQb3NpdGlvbi5sYXQgfTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWFwQm94TWFya2VyQ29uZmlnIHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgbWFwYm94IG1hcCwgdGhhdCB0aGUgbWFya2VyIGlzIGFwcGVuZGVkIHRvXG4gICAgICogQHR5cGUge01hcEJveH1cbiAgICAgKi9cbiAgICB0aGlzLm1hcCA9IG9wdHMubWFwIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb29yZGluYXRlcyBvZiB0aGUgbWFya2VyIChsYXQvbG5nKVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5wb3NpdGlvbiA9IG9wdHMucG9zaXRpb24gfHwge1xuICAgICAgbGF0aXR1ZGU6IHVuZGVmaW5lZCxcbiAgICAgIGxvbmdpdHVkZTogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBodG1sIGVsZW1lbnQgdG8gYmUgdXNlZCBhcyB0aGUgbWFwIG1hcmtlclxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgdGhpcy53cmFwcGVyID0gb3B0cy53cmFwcGVyIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCBvZiB0aGUgbWFya2VyIHRvIHVzZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbCA9IG9wdHMubGFiZWwgfHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHVybCBvZiB0aGUgcGluIGZvciB0aGUgc3RhdGljIG1hcFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zdGF0aWNNYXBQaW4gPSBvcHRzLnN0YXRpY01hcFBpbiB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhbiBhcnJheSBvZiBtYXJrZXIgY29uZmlnc1xuICAgKiBAcGFyYW0ge01hcEJveE1hcmtlckNvbmZpZ1tdfSBtYXBib3hNYXBNYXJrZXJDb25maWdzXG4gICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemUgKG1hcGJveE1hcE1hcmtlckNvbmZpZ3MpIHtcbiAgICBsZXQgc2VyaWFsaXplZE1hcmtlcnMgPSBbXTtcbiAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgaWYgKG1hcmtlci5zdGF0aWNNYXBQaW4pIHtcbiAgICAgICAgc2VyaWFsaXplZE1hcmtlcnMucHVzaChgdXJsLSR7bWFya2VyLnN0YXRpY01hcFBpbn0oJHttYXJrZXIucG9zaXRpb24ubG9uZ2l0dWRlfSwke21hcmtlci5wb3NpdGlvbi5sYXRpdHVkZX0pYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXJpYWxpemVkTWFya2Vycy5wdXNoKGBwaW4tcy0ke21hcmtlci5sYWJlbH0oJHttYXJrZXIucG9zaXRpb24ubG9uZ2l0dWRlfSwke21hcmtlci5wb3NpdGlvbi5sYXRpdHVkZX0pYCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZWRNYXJrZXJzLmpvaW4oJywnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgc3RvcmFnZSBkYXRhIG1vZGVsIG9mIG1hcmtlcnMgaW50byBHb29nbGVBUElNYXJrZXJcbiAgICogQHBhcmFtIHtNYXBCb3h9IEEgcmVmZXJlbmNlIHRvIHRoZSBnb29nbGUgbWFwIHRvIGFwcGx5IHRoZSBtYXJrZXIgdG9cbiAgICogQHBhcmFtIHtvYmplY3RbXX0gbWFya2VycyBUaGUgZGF0YSBvZiB0aGUgbWFya2VyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwaW5Db25maWcgVGhlIGNvbmZpZ3VyYXRpb24gdG8gYXBwbHkgdG8gdGhlIG1hcmtlclxuICAgKiBAcmV0dXJucyB7TWFwQm94TWFya2VyQ29uZmlnW119XG4gICAqL1xuICBzdGF0aWMgZnJvbSAobWFya2VycywgcGluQ29uZmlnLCBtYXApIHtcbiAgICBsZXQgbWFwYm94TWFwTWFya2VyQ29uZmlncyA9IFtdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShtYXJrZXJzKSkge1xuICAgICAgbWFya2VycyA9IFttYXJrZXJzXTtcbiAgICB9XG5cbiAgICBtYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgLy8gU3VwcG9ydCBjb25maWd1cmF0aW9uIGFzIGEgZnVuY3Rpb25cbiAgICAgIGxldCBwaW5Db25maWdPYmogPSBwaW5Db25maWc7XG4gICAgICBpZiAodHlwZW9mIHBpbkNvbmZpZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwaW5Db25maWdPYmogPSBwaW5Db25maWcoXG4gICAgICAgICAgbWFya2VyLml0ZW0sXG4gICAgICAgICAgTWFwUHJvdmlkZXIuREVGQVVMVF9QSU5fQ09ORklHLFxuICAgICAgICAgIG1hcmtlcik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHdyYXBwZXIgPSBwaW5Db25maWdPYmoud3JhcHBlciA/IHBpbkNvbmZpZ09iai53cmFwcGVyIDogbnVsbDtcbiAgICAgIGNvbnN0IHN0YXRpY01hcFBpbiA9IHBpbkNvbmZpZ09iai5zdGF0aWNNYXBQaW4gPyBwaW5Db25maWdPYmouc3RhdGljTWFwUGluIDogbnVsbDtcblxuICAgICAgbWFwYm94TWFwTWFya2VyQ29uZmlncy5wdXNoKFxuICAgICAgICBuZXcgTWFwQm94TWFya2VyQ29uZmlnKHtcbiAgICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgbGF0aXR1ZGU6IG1hcmtlci5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogbWFya2VyLmxvbmdpdHVkZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgd3JhcHBlcjogd3JhcHBlcixcbiAgICAgICAgICBsYWJlbDogbWFya2VyLmxhYmVsLFxuICAgICAgICAgIHN0YXRpY01hcFBpbjogc3RhdGljTWFwUGluXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hcGJveE1hcE1hcmtlckNvbmZpZ3M7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE1hcENvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmltcG9ydCBHb29nbGVNYXBQcm92aWRlciBmcm9tICcuL3Byb3ZpZGVycy9nb29nbGVtYXBwcm92aWRlcic7XG5pbXBvcnQgTWFwQm94TWFwUHJvdmlkZXIgZnJvbSAnLi9wcm92aWRlcnMvbWFwYm94bWFwcHJvdmlkZXInO1xuXG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuY29uc3QgUHJvdmlkZXJUeXBlcyA9IHtcbiAgJ2dvb2dsZSc6IEdvb2dsZU1hcFByb3ZpZGVyLFxuICAnbWFwYm94JzogTWFwQm94TWFwUHJvdmlkZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIC8qKlxuICAgICAqIEJpbmQgdGhpcyBjb21wb25lbnQgdG8gbGlzdGVuIHRvIHRoZSBzdG9yYWdlIGJhc2VkIG9uIHRoaXMga2V5XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFM7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhbGlhc2VkIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSB0eXBlIG9mIG1hcCBwcm92aWRlciB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX21hcFByb3ZpZGVyID0gb3B0cy5tYXBQcm92aWRlcjtcbiAgICBpZiAoIXRoaXMuX21hcFByb3ZpZGVyIHx8ICEodGhpcy5fbWFwUHJvdmlkZXIudG9Mb3dlckNhc2UoKSBpbiBQcm92aWRlclR5cGVzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXBDb21wb25lbnQ6IEludmFsaWQgTWFwIFByb3ZpZGVyOyBtdXN0IGJlIGBnb29nbGVgIG9yIGBtYXBCb3hgJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgaW5kaWNhdGlvbiBvZiB3aGV0aGVyIG9yIG5vdCB0byB1c2UgYSBzdGF0aWMgb3IgZHluYW1pYyBtYXBcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9pc1N0YXRpYyA9IG9wdHMuaXNTdGF0aWMgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byBhbiBpbnN0YW5jZSBvZiB0aGUge01hcFByb3ZpZGVyfSB0aGF0J3MgY29uc3RydWN0ZWRcbiAgICAgKiBAdHlwZSB7TWFwUHJvdmlkZXJ9XG4gICAgICovXG4gICAgdGhpcy5fbWFwID0gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdNYXAnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL21hcCc7XG4gIH1cblxuICAvLyBUT0RPKGJpbGx5KSBNYWtlIFByb3ZpZGVyVHlwZXMgYSBmYWN0b3J5IGNsYXNzXG4gIGdldFByb3ZpZGVySW5zdGFuY2UgKHR5cGUpIHtcbiAgICByZXR1cm4gbmV3IFByb3ZpZGVyVHlwZXNbdHlwZS50b0xvd2VyQ2FzZSgpXSh0aGlzLl9jb25maWcpO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIHRoaXMuX21hcCA9IHRoaXMuZ2V0UHJvdmlkZXJJbnN0YW5jZSh0aGlzLl9tYXBQcm92aWRlcik7XG4gICAgbGV0IG1hcERhdGEgPSB0aGlzLmdldFN0YXRlKCdtYXAnKTtcbiAgICBpZiAobWFwRGF0YSA9PT0gdW5kZWZpbmVkICYmIHRoaXMuX2lzU3RhdGljKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTdGF0aWMpIHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIFRoZSBleGlzdGluZyB0ZW1wbGF0ZSBzaG91bGQganVzdCB0YWtlIGluIHRoZSBtYXAgYGltZ1VSTGAgYXMgZGF0YVxuICAgICAgLy8gSW5zdGVhZCBvZiBvdmVycmlkaW5nIHRoZSB0ZW1wbGF0ZSBsaWtlIHNvLCBidXQgTkJEIGZvciBub3cuXG4gICAgICB0aGlzLnNldFRlbXBsYXRlKHRoaXMuX21hcC5nZW5lcmF0ZVN0YXRpYyhtYXBEYXRhKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLl9tYXAubG9hZEpTKCk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICB0aGlzLl9tYXAub25Mb2FkZWQoKCkgPT4ge1xuICAgICAgdGhpcy5fbWFwLmluaXQodGhpcy5fY29udGFpbmVyLCB0aGlzLmdldFN0YXRlKCdtYXAnKSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSwgdmFsKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKGRhdGEsIHZhbCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlc3VsdHNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL2xvY2F0aW9ucmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Blb3BsZXJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBNYXBDb21wb25lbnQgZnJvbSAnLi4vbWFwL21hcGNvbXBvbmVudCc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3NlYXJjaHN0YXRlcyc7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuXG5jb25zdCBSZXN1bHRUeXBlID0ge1xuICBFVkVOVDogJ2V2ZW50JyxcbiAgTE9DQVRJT046ICdsb2NhdGlvbicsXG4gIFBFT1BMRTogJ3Blb3BsZSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdHNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgLyoqXG4gICAgICogdmVydGljYWxDb25maWdJZCB1c2VkIGZvciBhbmFseXRpY3MgYW5kIHBhc3NlZCB0byBjaGlsZHJlblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbENvbmZpZ0lkID0gY29uZmlnLnZlcnRpY2FsQ29uZmlnSWQ7XG5cbiAgICAvKipcbiAgICAgKiBpc1VuaXZlcnNhbCBpcyBzZXQgdG8gdHJ1ZSBpZiB0aGlzIGNvbXBvbmVudCBpcyBhZGRlZCBieSB0aGUgVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faXNVbml2ZXJzYWwgPSBjb25maWcuaXNVbml2ZXJzYWwgfHwgZmFsc2U7XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUztcbiAgICB0aGlzLl9pdGVtQ29uZmlnID0ge1xuICAgICAgZ2xvYmFsOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH0sXG4gICAgICBbRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlXToge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9LFxuICAgICAgW0xvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZV06IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIFtQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlXToge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChjb25maWcucmVuZGVySXRlbSA9PT0gdW5kZWZpbmVkICYmIGNvbmZpZy5fcGFyZW50T3B0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25maWcucmVuZGVySXRlbSA9IGNvbmZpZy5fcGFyZW50T3B0cy5yZW5kZXJJdGVtO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuaXRlbVRlbXBsYXRlID09PSB1bmRlZmluZWQgJiYgY29uZmlnLl9wYXJlbnRPcHRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbmZpZy5pdGVtVGVtcGxhdGUgPSBjb25maWcuX3BhcmVudE9wdHMuaXRlbVRlbXBsYXRlO1xuICAgIH1cblxuICAgIGlmIChjb25maWcubGltaXQpIHtcbiAgICAgIGNvbnN0IGxpbWl0ID0gY29uZmlnLmxpbWl0O1xuICAgICAgaWYgKHR5cGVvZiBsaW1pdCAhPT0gJ251bWJlcicgfHwgbGltaXQgPCAxIHx8IGxpbWl0ID4gNTApIHtcbiAgICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcignU2VhcmNoIExpbWl0IG11c3QgYmUgYmV0d2VlbiAxIGFuZCA1MCcsICdWZXJ0aWNhbFJlc3VsdHMnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY29yZS5zZXRTZWFyY2hMaW1pdChsaW1pdCk7XG4gICAgfVxuXG4gICAgdGhpcy5jb25maWd1cmVJdGVtKHtcbiAgICAgIHJlbmRlcjogY29uZmlnLnJlbmRlckl0ZW0sXG4gICAgICB0ZW1wbGF0ZTogY29uZmlnLml0ZW1UZW1wbGF0ZVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHVybCB0byB0aGUgdW5pdmVyc2FsIHBhZ2UgZm9yIHRoZSBubyByZXN1bHRzIHBhZ2UgdG8gbGluayBiYWNrIHRvIHdpdGggY3VycmVudCBxdWVyeVxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLl91bml2ZXJzYWxVcmwgPSBjb25maWcudW5pdmVyc2FsVXJsO1xuICB9XG5cbiAgbW91bnQgKCkge1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmdldFN0YXRlKCkpLmxlbmd0aCA+IDApIHtcbiAgICAgIHN1cGVyLm1vdW50KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGR1cGxpY2F0ZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhLCB2YWwpIHtcbiAgICBjb25zdCByZXN1bHRzID0gZGF0YS5yZXN1bHRzIHx8IFtdO1xuICAgIGNvbnN0IHNlYXJjaFN0YXRlID0gZGF0YS5zZWFyY2hTdGF0ZSB8fCBTZWFyY2hTdGF0ZXMuUFJFX1NFQVJDSDtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7IHJlc3VsdHM6IFtdIH0sIGRhdGEsIHtcbiAgICAgIGlzUHJlU2VhcmNoOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlBSRV9TRUFSQ0gsXG4gICAgICBpc1NlYXJjaExvYWRpbmc6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0xPQURJTkcsXG4gICAgICBpc1NlYXJjaENvbXBsZXRlOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURSxcbiAgICAgIGluY2x1ZGVNYXA6IHRoaXMuX2NvbmZpZy5pbmNsdWRlTWFwLFxuICAgICAgbWFwQ29uZmlnOiB0aGlzLl9jb25maWcubWFwQ29uZmlnLFxuICAgICAgZXZlbnRPcHRpb25zOiB0aGlzLmV2ZW50T3B0aW9ucygpLFxuICAgICAgdW5pdmVyc2FsVXJsOiB0aGlzLl91bml2ZXJzYWxVcmwgPyB0aGlzLl91bml2ZXJzYWxVcmwgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoIDogJycsXG4gICAgICBzaG93Tm9SZXN1bHRzOiByZXN1bHRzLmxlbmd0aCA9PT0gMCxcbiAgICAgIHF1ZXJ5OiB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSlcbiAgICB9KSwgdmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoZWxwZXIgdG8gY29uc3RydWN0IHRoZSBldmVudE9wdGlvbnMgb2JqZWN0IGZvciB0aGUgdmlldyBhbGwgbGlua1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZXZlbnRPcHRpb25zICgpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdmVydGljYWxDb25maWdJZDogdGhpcy5fdmVydGljYWxDb25maWdJZFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1ZlcnRpY2FsUmVzdWx0cyc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvcmVzdWx0cyc7XG4gIH1cblxuICBjb25maWd1cmVJdGVtIChjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX2l0ZW1Db25maWcuZ2xvYmFsLnJlbmRlciA9IGNvbmZpZy5yZW5kZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb25maWcucmVuZGVyKSB7XG4gICAgICAgIHRoaXMuc2V0SXRlbVJlbmRlcihrZXksIGNvbmZpZy5yZW5kZXJba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9pdGVtQ29uZmlnLmdsb2JhbC50ZW1wbGF0ZSA9IGNvbmZpZy50ZW1wbGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbmZpZy50ZW1wbGF0ZSkge1xuICAgICAgICB0aGlzLnNldEl0ZW1UZW1wbGF0ZShrZXksIGNvbmZpZy50ZW1wbGF0ZVtrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRJdGVtVGVtcGxhdGUgKHR5cGUsIHRlbXBsYXRlKSB7XG4gICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KHR5cGUpO1xuICAgIHRoaXMuX2l0ZW1Db25maWdbY2xhenoudHlwZV0udGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHNldEl0ZW1SZW5kZXIgKHR5cGUsIHJlbmRlcikge1xuICAgIGxldCBjbGF6eiA9IHRoaXMuZ2V0SXRlbUNvbXBvbmVudCh0eXBlKTtcbiAgICB0aGlzLl9pdGVtQ29uZmlnW2NsYXp6LnR5cGVdLnJlbmRlciA9IHJlbmRlcjtcbiAgfVxuXG4gIGdldEl0ZW1Db21wb25lbnQgKHR5cGUpIHtcbiAgICBsZXQgY29tcCA9IFJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSZXN1bHRUeXBlLkVWRU5UOlxuICAgICAgICBjb21wID0gRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJlc3VsdFR5cGUuTE9DQVRJT046XG4gICAgICAgIGNvbXAgPSBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUmVzdWx0VHlwZS5QRU9QTEU6XG4gICAgICAgIGNvbXAgPSBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXA7XG4gIH1cblxuICBhZGRDaGlsZCAoZGF0YSwgdHlwZSwgb3B0cykge1xuICAgIC8vIFRPRE8oYmlsbHkpIFJlZmFjdG9yIHRoZSB3YXkgY29uZmlndXJhdGlvbiBhbmQgZGF0YSBmbG93c1xuICAgIC8vIHRocm91Z2ggdG9wIGxldmVsIGNvbXBvbmVudHMgdG8gY2hpbGQgY29tcG9uZW50cy5cbiAgICBpZiAodHlwZSA9PT0gUmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZSkge1xuICAgICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KGRhdGEudHlwZSk7XG4gICAgICBpZiAoY2xhenopIHtcbiAgICAgICAgdHlwZSA9IGNsYXp6LnR5cGU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBNYXBDb21wb25lbnQudHlwZSkge1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgbWFwOiBkYXRhXG4gICAgICB9O1xuICAgICAgY29uc3QgbmV3T3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZy5tYXBDb25maWcsIG9wdHMpO1xuICAgICAgcmV0dXJuIHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIG5ld09wdHMpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHRoZSBwcm9wZXIgaXRlbSByZW5kZXJzIHRvIHRoZSB0aGUgY29tcG9uZW50c1xuICAgIC8vIGhhdmUganVzdCBiZWVuIGNvbnN0cnVjdGVkLiBQcmlvcml0aXplIGdsb2JhbCBvdmVyIGluZGl2aWR1YWwgaXRlbXMuXG4gICAgbGV0IGNvbXAgPSBzdXBlci5hZGRDaGlsZChkYXRhLCB0eXBlLCBPYmplY3QuYXNzaWduKG9wdHMsIHtcbiAgICAgIHZlcnRpY2FsQ29uZmlnSWQ6IHRoaXMuX3ZlcnRpY2FsQ29uZmlnSWQsXG4gICAgICBpc1VuaXZlcnNhbDogdGhpcy5faXNVbml2ZXJzYWxcbiAgICB9KSk7XG4gICAgbGV0IGdsb2JhbENvbmZpZyA9IHRoaXMuX2l0ZW1Db25maWcuZ2xvYmFsO1xuICAgIGxldCBpdGVtQ29uZmlnID0gdGhpcy5faXRlbUNvbmZpZ1tjb21wLnR5cGVdO1xuICAgIGxldCBoYXNHbG9iYWxSZW5kZXIgPSB0eXBlb2YgZ2xvYmFsQ29uZmlnLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJztcbiAgICBsZXQgaGFzR2xvYmFsVGVtcGxhdGUgPSB0eXBlb2YgZ2xvYmFsQ29uZmlnLnRlbXBsYXRlID09PSAnc3RyaW5nJztcblxuICAgIGlmIChoYXNHbG9iYWxSZW5kZXIpIHtcbiAgICAgIGNvbXAuc2V0UmVuZGVyKGdsb2JhbENvbmZpZy5yZW5kZXIpO1xuICAgIH1cblxuICAgIGlmIChoYXNHbG9iYWxUZW1wbGF0ZSkge1xuICAgICAgY29tcC5zZXRUZW1wbGF0ZShnbG9iYWxDb25maWcudGVtcGxhdGUpO1xuICAgIH1cblxuICAgIGlmICghaXRlbUNvbmZpZykge1xuICAgICAgcmV0dXJuIGNvbXA7XG4gICAgfVxuXG4gICAgaWYgKCFoYXNHbG9iYWxSZW5kZXIgJiYgaXRlbUNvbmZpZy5yZW5kZXIpIHtcbiAgICAgIGNvbXAuc2V0UmVuZGVyKGl0ZW1Db25maWcucmVuZGVyKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB0ZW1wbGF0ZSBzcGVjaWZpYyBzaXR1YXRpb25cbiAgICBpZiAoIWhhc0dsb2JhbFRlbXBsYXRlICYmIGl0ZW1Db25maWcudGVtcGxhdGUpIHtcbiAgICAgIGNvbXAuc2V0VGVtcGxhdGUoaXRlbUNvbmZpZy50ZW1wbGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBjb21wO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50ICovXG5pbXBvcnQgUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNjb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBBbmFseXRpY3NFdmVudCBmcm9tICcuLi8uLi8uLi9jb3JlL2FuYWx5dGljcy9hbmFseXRpY3NldmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY29yZGlvblJlc3VsdHNDb21wb25lbnQgZXh0ZW5kcyBSZXN1bHRzQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIGJhc2Ugc2VsZWN0b3IgdG8gdXNlIHdoZW4gZmluZGluZyBET00gdGFyZ2V0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fc2VsZWN0b3JCYXNlID0gY29uZmlnLnNlbGVjdG9yQmFzZSB8fCAnLmpzLXl4dC1BY2NvcmRpb25SZXN1bHQnO1xuXG4gICAgLyoqXG4gICAgICogY29sbGFwc2VkIHN0YXRlIGNsYXNzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmNvbGxhcHNlZENsYXNzID0gY29uZmlnLmNvbGxhcHNlZENsYXNzIHx8ICdpcy1jb2xsYXBzZWQnO1xuXG4gICAgLyoqXG4gICAgICogdmVydGljYWwgY29uZmlnIGlkIGlzIHJlcXVpcmVkIGZvciBhbmFseXRpY3NcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy52ZXJ0aWNhbENvbmZpZ0lkID0gY29uZmlnLnZlcnRpY2FsQ29uZmlnSWQgfHwgY29uZmlnLl9wYXJlbnRPcHRzLnZlcnRpY2FsQ29uZmlnSWQgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiB0aGUgY29tcG9uZW50IHR5cGVcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnQWNjb3JkaW9uUmVzdWx0cyc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvcmVzdWx0c2FjY29yZGlvbic7XG4gIH1cblxuICAvKipcbiAgICogb3ZlcnJpZGVzIF9vbk1vdW50IHRvIGFkZCBiaW5kaW5ncyB0byBjaGFuZ2UgdGhlIGhlaWdodCBvbiBjbGlja1xuICAgKiBAcmV0dXJucyB7QWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudH1cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBfb25Nb3VudCAoKSB7XG4gICAgc3VwZXIuX29uTW91bnQoKTtcblxuICAgIGNvbnN0IGFjY29yZGlvbkVscyA9IERPTS5xdWVyeUFsbCh0aGlzLl9jb250YWluZXIsIHRoaXMuX3NlbGVjdG9yQmFzZSk7XG4gICAgYWNjb3JkaW9uRWxzLmZvckVhY2goKGFjY29yZGlvbkVsKSA9PiB7XG4gICAgICBjb25zdCB0b2dnbGVFbCA9IERPTS5xdWVyeShhY2NvcmRpb25FbCwgdGhpcy50b2dnbGVTZWxlY3RvcigpKTtcbiAgICAgIGNvbnN0IGNvbnRlbnRFbCA9IERPTS5xdWVyeShhY2NvcmRpb25FbCwgdGhpcy5ib2R5U2VsZWN0b3IoKSk7XG4gICAgICB0aGlzLmNoYW5nZUhlaWdodChjb250ZW50RWwsIGFjY29yZGlvbkVsKTtcbiAgICAgIHRvZ2dsZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrKGFjY29yZGlvbkVsLCB0b2dnbGVFbCwgY29udGVudEVsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBtb2RpZmllcjogdGhpcy52ZXJ0aWNhbENvbmZpZ0lkXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNsaWNrIGhhbmRsZXIgZm9yIHRoZSBhY2NvcmRpb24gdG9nZ2xlIGJ1dHRvblxuICAgKiBAcGFyYW0gd3JhcHBlckVsIHtIVE1MRWxlbWVudH0gdGhlIHRvZ2dsZSBjb250YWluZXJcbiAgICogQHBhcmFtIHRvZ2dsZUVsIHtIVE1MRWxlbWVudH0gdGhlIGJ1dHRvblxuICAgKiBAcGFyYW0gY29udGVudEVsIHtIVE1MRWxlbWVudH0gdGhlIHRvZ2dsZSB0YXJnZXRcbiAgICovXG4gIGhhbmRsZUNsaWNrICh3cmFwcGVyRWwsIHRvZ2dsZUVsLCBjb250ZW50RWwpIHtcbiAgICBjb25zdCBldmVudCA9IG5ldyBBbmFseXRpY3NFdmVudCh0aGlzLmlzQ29sbGFwc2VkKHdyYXBwZXJFbCkgPyAnUk9XX0VYUEFORCcgOiAnUk9XX0NPTExBUFNFJylcbiAgICAgIC5hZGRPcHRpb25zKHtcbiAgICAgICAgdmVydGljYWxDb25maWdJZDogdGhpcy52ZXJ0aWNhbENvbmZpZ0lkLFxuICAgICAgICBlbnRpdHlJZDogdG9nZ2xlRWwuZGF0YXNldC5lbnRpdHlJZFxuICAgICAgfSk7XG4gICAgd3JhcHBlckVsLmNsYXNzTGlzdC50b2dnbGUodGhpcy5jb2xsYXBzZWRDbGFzcyk7XG4gICAgdGhpcy5jaGFuZ2VIZWlnaHQoY29udGVudEVsLCB3cmFwcGVyRWwpO1xuICAgIHRvZ2dsZUVsLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRoaXMuaXNDb2xsYXBzZWQod3JhcHBlckVsKSA/ICdmYWxzZScgOiAndHJ1ZScpO1xuICAgIHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIucmVwb3J0KGV2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRydWUgaWYgdGhlIGVsZW1lbnQgaXMgY3VycmVudGx5IGNvbGxhcHNlZFxuICAgKiBAcGFyYW0gd3JhcHBlckVsIHtIVE1MRWxlbWVudH0gdGhlIHRvZ2dsZSBjb250YWluZXJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc0NvbGxhcHNlZCAod3JhcHBlckVsKSB7XG4gICAgaWYgKCF3cmFwcGVyRWwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JhcHBlckVsLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNvbGxhcHNlZENsYXNzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0b2dnbGVzIHRoZSBoZWlnaHQgYmV0d2VlbiAwIGFuZCB0aGUgY29udGVudCBoZWlnaHQgZm9yIHNtb290aCBhbmltYXRpb25cbiAgICogQHBhcmFtIHRhcmdldEVsIHtIVE1MRWxlbWVudH1cbiAgICogQHBhcmFtIHdyYXBwZXJFbCB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBjaGFuZ2VIZWlnaHQgKHRhcmdldEVsLCB3cmFwcGVyRWwpIHtcbiAgICB0YXJnZXRFbC5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmlzQ29sbGFwc2VkKHdyYXBwZXJFbCkgPyAwIDogdGFyZ2V0RWwuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBoZWxwZXIgZm9yIGNvbXBvc2luZyBjaGlsZCBlbGVtZW50IHNlbGVjdG9yc1xuICAgKiBAcGFyYW0gY2hpbGQge3N0cmluZ31cbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGJ1aWxkU2VsZWN0b3IgKGNoaWxkKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuX3NlbGVjdG9yQmFzZX0ke2NoaWxkfWA7XG4gIH1cblxuICAvKipcbiAgICogaGVscGVyIGZvciB0aGUgdG9nZ2xlIGJ1dHRvbiBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgdG9nZ2xlU2VsZWN0b3IgKCkge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkU2VsZWN0b3IoJy10b2dnbGUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoZWxwZXIgZm9yIHRoZSBjb250ZW50IGVsZW1lbnQgc2VsZWN0b3JcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGJvZHlTZWxlY3RvciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRTZWxlY3RvcignLWJvZHknKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3NlYXJjaHN0YXRlcyc7XG5pbXBvcnQgQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL2FjY29yZGlvbnJlc3VsdHNjb21wb25lbnQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTO1xuICAgIHRoaXMuX2xpbWl0ID0gb3B0cy5saW1pdCB8fCAxMDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdVbml2ZXJzYWxSZXN1bHRzJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy91bml2ZXJzYWxyZXN1bHRzJztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaW5pdCAob3B0cykge1xuICAgIHN1cGVyLmluaXQob3B0cyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSwgdmFsKSB7XG4gICAgY29uc3Qgc2VjdGlvbnMgPSBkYXRhLnNlY3Rpb25zIHx8IFtdO1xuICAgIGNvbnN0IHNlYXJjaFN0YXRlID0gZGF0YS5zZWFyY2hTdGF0ZSB8fCBTZWFyY2hTdGF0ZXMuUFJFX1NFQVJDSDtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7IHNlY3Rpb25zOiBbXSB9LCBkYXRhLCB7XG4gICAgICBpc1ByZVNlYXJjaDogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5QUkVfU0VBUkNILFxuICAgICAgaXNTZWFyY2hMb2FkaW5nOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlNFQVJDSF9MT0FESU5HLFxuICAgICAgaXNTZWFyY2hDb21wbGV0ZTogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5TRUFSQ0hfQ09NUExFVEUsXG4gICAgICBzaG93Tm9SZXN1bHRzOiBzZWN0aW9ucy5sZW5ndGggPT09IDAsXG4gICAgICBxdWVyeTogdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpXG4gICAgfSksIHZhbCk7XG4gIH1cblxuICBhZGRDaGlsZCAoZGF0YSA9IHt9LCB0eXBlKSB7XG4gICAgbGV0IG9wdHMgPSB0aGlzLmdldENoaWxkQ29uZmlnKFtkYXRhWyd2ZXJ0aWNhbENvbmZpZ0lkJ11dKTtcbiAgICBpZiAob3B0cy51c2VBY2NvcmRpb24gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBzdXBlci5hZGRDaGlsZChkYXRhLCBBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50LnR5cGUsIG9wdHMpO1xuICAgIH1cbiAgICByZXR1cm4gc3VwZXIuYWRkQ2hpbGQoZGF0YSwgdHlwZSwgb3B0cyk7XG4gIH1cblxuICBnZXRDaGlsZENvbmZpZyAoY29uZmlnSWQpIHtcbiAgICBjb25zdCBkZWZhdWx0Q29uZmlnID0ge1xuICAgICAgdmVydGljYWxDb25maWdJZDogY29uZmlnSWQsXG4gICAgICBpc1VuaXZlcnNhbDogdHJ1ZVxuICAgIH07XG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuX2NvbmZpZy5jb25maWc7XG4gICAgaWYgKGNvbmZpZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdENvbmZpZztcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZGVmYXVsdENvbmZpZywgdGhpcy5fY29uZmlnWydjb25maWcnXVtjb25maWdJZF0gfHwgdGhpcy5fY29uZmlnWydjb25maWcnXSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgUXVlc3Rpb25TdWJtaXNzaW9uIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL3F1ZXN0aW9uc3VibWlzc2lvbic7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcblxuLyoqXG4gKiBDb25maWd1cmFibGUgb3B0aW9ucyBmb3IgdGhlIGNvbXBvbmVudFxuICogQHR5cGUge09iamVjdH1cbiAqL1xuY29uc3QgREVGQVVMVF9DT05GSUcgPSB7XG4gIC8qKlxuICAgKiBUaGUgZW50aXR5IGlkZW50aWZpZXIgdGhhdCB0aGUgcXVlc3Rpb24gaXMgYXNzb2NpYXRlZCB3aXRoLlxuICAgKiBUaGlzIGlzIHR5cGljYWxseSBhbiBvcmdhbml6YXRpb24gb2JqZWN0XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICAnZW50aXR5SWQnOiBudWxsLFxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBsYW5ndWFnZSBvZiB0aGUgcXVlc3Rpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICdsYW5ndWFnZSc6ICdFTicsXG5cbiAgLyoqXG4gICAqIFRoZSBtYWluIENTUyBzZWxlY3RvciB1c2VkIHRvIHJlZmVyZW5jZSB0aGUgZm9ybSBmb3IgdGhlIGNvbXBvbmVudC5cbiAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAqL1xuICAnZm9ybVNlbGVjdG9yJzogJ2Zvcm0nLFxuXG4gIC8qKlxuICAgKiBBbiBvcHRpb25hbCBsYWJlbCB0byB1c2UgZm9yIHRoZSBlLW1haWwgYWRkcmVzcyBpbnB1dFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgJ2VtYWlsTGFiZWwnOiAnRW1haWwgQWRkcmVzczonLFxuXG4gIC8qKlxuICAgKiBBbiBvcHRpb25hbCBsYWJlbCB0byB1c2UgZm9yIHRoZSBuYW1lIGlucHV0XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICAnbmFtZUxhYmVsJzogJ05hbWU6JyxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgbGFiZWwgdG8gdXNlIGZvciB0aGUgcXVlc3Rpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICdxdWVzdGlvbkxhYmVsJzogJ1doYXQgaXMgeW91ciBxdWVzdGlvbj8nLFxuXG4gIC8qKlxuICAgKiBBbiBvcHRpb25hbCBsYWJlbCB0byB1c2UgZm9yIHRoZSBQcml2YWN5IFBvbGljeVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgJ3ByaXZhY3lQb2xpY3lMYWJlbCc6ICdJIGFncmVlIHRvIG91ciBQcml2YWN5IFBvbGljeTonLFxuXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgU3VibWl0IGJ1dHRvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgJ2J1dHRvbkxhYmVsJzogJ1N1Ym1pdCdcbn07XG5cbi8qKlxuICogUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IGlzIGEgY29tcG9uZW50IHRoYXQgY3JlYXRlcyBhIGZvcm1cbiAqIHRoYXRzIGRpc3BsYXllZCB3aGVuZXZlciBhIHF1ZXJ5IGlzIHJ1bi4gSXQgZW5hYmxlcyB0aGUgdXNlclxuICogdG8gc3VibWl0IHF1ZXN0aW9ucyB0aGF0IHRoZXkgY2FudCBmaW5kIHRoZSBhbnN3ZXIgZm9yLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX0NPTkZJRywgY29uZmlnKSk7XG5cbiAgICAvKipcbiAgICAgKiBSZWZlcmVuY2UgdG8gdGhlIHN0b3JhZ2UgbW9kZWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5RVUVTVElPTl9TVUJNSVNTSU9OO1xuXG4gICAgLyoqXG4gICAgICogTk9URShiaWxseSkgaWYgdGhpcyBpcyBhIHBhdHRlcm4gd2Ugd2FudCB0byBmb2xsb3cgZm9yIGNvbmZpZ3VyYXRpb25cbiAgICAgKiB3ZSBzaG91bGQgYmFrZSBpdCBpbnRvIHRoZSBjb3JlIGNsYXNzLlxuICAgICAqL1xuICAgIHRoaXMudmFsaWRhdGVDb25maWcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncXVlc3Rpb25zL3F1ZXN0aW9uc3VibWlzc2lvbic7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHB1YmxpYyBpbnRlcmZhY2UgYWxpYXMgZm9yIHRoZSBjb21wb25lbnRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUUFTdWJtaXNzaW9uJztcbiAgfVxuXG4gIC8qKlxuICAgKiB2YWxpZGF0aW9uQ29uZmlnIGNvbnRhaW5zIGEgYnVuY2ggb2YgcnVsZXNcbiAgICogdGhhdCBhcmUgdXNlZCB0byB2YWxpZGF0ZSBhZ2luc3QgY29uZmlndXJhdGlvbiBwcm92aWRlZCBieSB0aGUgdXNlclxuICAgKi9cbiAgdmFsaWRhdGVDb25maWcgKCkge1xuICAgIGlmICh0aGlzLl9jb25maWcuZW50aXR5SWQgPT09IG51bGwgfHxcbiAgICAgICAgdHlwZW9mIHRoaXMuX2NvbmZpZy5lbnRpdHlJZCAhPT0gJ251bWJlcicpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICdgZW50aXR5SWRgIGlzIGEgcmVxdWlyZWQgY29uZmlndXJhdGlvbiBvcHRpb24gZm9yIFF1ZXN0aW9uIFN1Ym1pc3Npb24nLFxuICAgICAgICAnUXVlc3Rpb25TdWJtaXNzaW9uJyk7XG4gICAgfVxuICB9XG5cbiAgYmVmb3JlTW91bnQgKCkge1xuICAgIC8vIEF2b2lkIG1vdW50aW5nIHRoZSBjb21wb25lbnQgaWYgdGhlcmVzIG5vIGRhdGFcbiAgICAvLyBOb3RlLCAxIGJlY2F1c2UgYGNvbmZpZ2AgaXMgYWx3YXlzIHBhcnQgb2YgdGhlIHN0YXRlLlxuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmdldFN0YXRlKCkpLmxlbmd0aCA+IDE7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICBsZXQgZm9ybUVsID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fY29uZmlnLmZvcm1TZWxlY3Rvcik7XG4gICAgaWYgKGZvcm1FbCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYmluZEFuYWx5dGljcyhmb3JtRWwpO1xuICAgIHRoaXMuYmluZEZvcm1TdWJtaXQoZm9ybUVsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBiaW5kQW5hbHl0aWNzIHdpbGwgd2lyZSB1cCBET00gZXZlbnQgaG9va3MgdG8gc2VydmVyc2lkZSByZXBvcnRpbmdcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybUVsXG4gICAqL1xuICBiaW5kQW5hbHl0aWNzIChmb3JtRWwpIHtcbiAgICBpZiAodGhpcy5hbmFseXRpY3NSZXBvcnRlciA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHF1ZXN0aW9uVGV4dEVsID0gRE9NLnF1ZXJ5KGZvcm1FbCwgJy5qcy1xdWVzdGlvbi10ZXh0Jyk7XG4gICAgRE9NLm9uKHF1ZXN0aW9uVGV4dEVsLCAnZm9jdXMnLCAoKSA9PiB7XG4gICAgICB0aGlzLmFuYWx5dGljc1JlcG9ydGVyLnJlcG9ydChuZXcgQW5hbHl0aWNzRXZlbnQoJ1FVRVNUSU9OX0ZPQ1VTJykpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGJpbmRGb3JtU3VibWl0IGhhbmRsZXMgc3VibWl0dGluZyB0aGUgcXVlc3Rpb24gdG8gdGhlIHNlcnZlci5cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybUVsXG4gICAqL1xuICBiaW5kRm9ybVN1Ym1pdCAoZm9ybUVsKSB7XG4gICAgRE9NLm9uKGZvcm1FbCwgJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAvLyBUT0RPKGJpbGx5KSB3ZSBwcm9iYWJseSB3YW50IHRvIGRpc2FibGUgdGhlIGZvcm0gZnJvbSBiZWluZyBzdWJtaXR0ZWQgdHdpY2VcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gdGhpcy5wYXJzZShmb3JtRWwpO1xuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy52YWxpZGF0ZVJlcXVpcmVkKGZvcm1EYXRhKTtcbiAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUobmV3IFF1ZXN0aW9uU3VibWlzc2lvbihmb3JtRGF0YSwgZXJyb3JzKSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29yZS5zdWJtaXRRdWVzdGlvbih7XG4gICAgICAgICdlbnRpdHlJZCc6IHRoaXMuX2NvbmZpZy5lbnRpdHlJZCxcbiAgICAgICAgJ3F1ZXN0aW9uTGFuZ3VhZ2UnOiB0aGlzLl9jb25maWcubGFuZ3VhZ2UsXG4gICAgICAgICdzaXRlJzogJ0ZJUlNUX1BBUlRZJyxcbiAgICAgICAgJ25hbWUnOiBmb3JtRGF0YS5uYW1lLFxuICAgICAgICAnZW1haWwnOiBmb3JtRGF0YS5lbWFpbCxcbiAgICAgICAgJ3F1ZXN0aW9uVGV4dCc6IGZvcm1EYXRhLnF1ZXN0aW9uVGV4dCxcbiAgICAgICAgJ3F1ZXN0aW9uRGVzY3JpcHRpb24nOiBmb3JtRGF0YS5xdWVzdGlvbkRlc2NyaXB0aW9uXG4gICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICBuZXcgUXVlc3Rpb25TdWJtaXNzaW9uKGZvcm1EYXRhLCB7XG4gICAgICAgICAgICAgICduZXR3b3JrJzogJ1RoZXJlIHdhcyBhIHByb2JsZW0gc3VibWl0dGluZyB5b3VyIHF1ZXN0aW9uLiBQbGVhc2UgdHJ5IGFnYWluLidcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGFrZXMgdGhlIGZvcm0sIGFuZCBidWlsZHMgYSBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBpbnB1dCBuYW1lc1xuICAgKiBhbmQgdGV4dCBmaWVsZHMuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1FbFxuICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgKi9cbiAgcGFyc2UgKGZvcm1FbCkge1xuICAgIGNvbnN0IGlucHV0RmllbGRzID0gRE9NLnF1ZXJ5QWxsKGZvcm1FbCwgJy5qcy1xdWVzdGlvbi1maWVsZCcpO1xuICAgIGlmICghaW5wdXRGaWVsZHMgfHwgaW5wdXRGaWVsZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgbGV0IG9iaiA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRGaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB2YWwgPSBpbnB1dEZpZWxkc1tpXS52YWx1ZTtcbiAgICAgIGlmIChpbnB1dEZpZWxkc1tpXS50eXBlID09PSAnY2hlY2tib3gnICYmIHZhbCA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHZhbCA9IHRydWU7XG4gICAgICB9XG4gICAgICBvYmpbaW5wdXRGaWVsZHNbaV0ubmFtZV0gPSB2YWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgdGhlIHJlcXVpcmVkIGZpZWxkcyAob3IgcnVsZXMpIGZvciB0aGUgZm9ybSBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBmb3JtRGF0YVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fGJvb2xlYW59IGVycm9ycyBvYmplY3QgaWYgYW55IGVycm9ycyBmb3VuZFxuICAgKi9cbiAgdmFsaWRhdGVSZXF1aXJlZCAoZm9ybURhdGEpIHtcbiAgICBsZXQgZXJyb3JzID0ge307XG4gICAgaWYgKCFmb3JtRGF0YS5lbWFpbCB8fCB0eXBlb2YgZm9ybURhdGEuZW1haWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICBlcnJvcnNbJ2VtYWlsJ10gPSAnTWlzc2luZyBlbWFpbCBhZGRyZXNzISc7XG4gICAgfVxuXG4gICAgaWYgKCFmb3JtRGF0YS5wcml2YWN5UG9saWN5IHx8IGZvcm1EYXRhLnByaXZhY3lQb2xpY3kgIT09IHRydWUpIHtcbiAgICAgIGVycm9yc1sncHJpdmFjeVBvbGljeSddID0gJ0FwcHJvdmluZyBvdXIgcHJpdmFjeSBwb2xpY3kgdGVybXMgaXMgcmVxdWlyZWQhJztcbiAgICB9XG5cbiAgICBpZiAoIWZvcm1EYXRhLnF1ZXN0aW9uVGV4dCB8fCB0eXBlb2YgZm9ybURhdGEucXVlc3Rpb25UZXh0ICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3JzWydxdWVzdGlvblRleHQnXSA9ICdRdWVzdGlvbiB0ZXh0IGlzIHJlcXVpcmVkISc7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID4gMCA/IGVycm9ycyA6IG51bGw7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNWR0ljb24ge1xuICAvKipcbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKiBAcGFyYW0gY29uZmlnLm5hbWVcbiAgICogQHBhcmFtIGNvbmZpZy5wYXRoXG4gICAqIEBwYXJhbSBjb25maWcuY29tcGxleENvbnRlbnRzXG4gICAqIEBwYXJhbSBjb25maWcudmlld0JveFxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICAvKipcbiAgICAgKiB0aGUgbmFtZSBvZiB0aGUgaWNvblxuICAgICAqL1xuICAgIHRoaXMubmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIC8qKlxuICAgICAqIGFuIHN2ZyBwYXRoIGRlZmluaXRpb25cbiAgICAgKi9cbiAgICB0aGlzLnBhdGggPSBjb25maWcucGF0aDtcbiAgICAvKipcbiAgICAgKiBpZiBub3QgdXNpbmcgYSBwYXRoLCBhIHRoZSBtYXJrdXAgZm9yIGEgY29tcGxleCBTVkdcbiAgICAgKi9cbiAgICB0aGlzLmNvbXBsZXhDb250ZW50cyA9IGNvbmZpZy5jb21wbGV4Q29udGVudHM7XG4gICAgLyoqXG4gICAgICogdGhlIHZpZXcgYm94IGRlZmluaXRpb24sIGRlZmF1bHRzIHRvIDI0eDI0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnZpZXdCb3ggPSBjb25maWcudmlld0JveCB8fCAnMCAwIDI0IDI0JztcbiAgICAvKipcbiAgICAgKiBhY3R1YWwgY29udGVudHMgdXNlZFxuICAgICAqL1xuICAgIHRoaXMuY29udGVudHMgPSB0aGlzLnBhdGhEZWZpbml0aW9uKCk7XG4gIH1cblxuICBwYXRoRGVmaW5pdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuY29tcGxleENvbnRlbnRzKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV4Q29udGVudHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGA8cGF0aCBkPVwiJHt0aGlzLnBhdGh9XCI+PC9wYXRoPmA7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0aGUgc3ZnIG1hcmt1cFxuICAgKi9cbiAgbWFya3VwICgpIHtcbiAgICByZXR1cm4gYDxzdmcgdmlld0JveD1cIiR7dGhpcy52aWV3Qm94fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4ke3RoaXMuY29udGVudHN9PC9zdmc+YDtcbiAgfVxufVxuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3RodW1iJyxcbiAgdmlld0JveDogJzAgMCAyNCAyMicsXG4gIHBhdGg6ICdNMTUuMjczIDFINS40NTVjLS45MDYgMC0xLjY4LjU1LTIuMDA4IDEuMzQyTC4xNTMgMTAuMDk3QTIuMTkgMi4xOSAwIDAwMCAxMC45djIuMmMwIDEuMjEuOTgyIDIuMiAyLjE4MiAyLjJoNi44ODNMOC4wMyAyMC4zMjdsLS4wMzMuMzUyYzAgLjQ1MS4xODYuODY5LjQ4IDEuMTY2TDkuNjMzIDIzbDcuMTc4LTcuMjQ5YTIuMTYgMi4xNiAwIDAwLjY0NC0xLjU1MXYtMTFjMC0xLjIxLS45ODItMi4yLTIuMTgyLTIuMnptMCAxMy4ybC00LjczNSA0Ljc3NEwxMS43NSAxMy4xSDIuMTgydi0yLjJsMy4yNzMtNy43aDkuODE4djExek0xOS42MzYgMUgyNHYxMy4yaC00LjM2NFYxeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3JlY2VpcHQnLFxuICBwYXRoOiAnTTE0LjYwNiA5LjVjLS42NzEtLjUxNS0xLjU5MS0uODMzLTIuNjA2LS44MzMgMS4wMTUgMCAxLjkzNS4zMTggMi42MDYuODMzem0tNy45ODUgMEgxLjY1NUExLjY2IDEuNjYgMCAwMTAgNy44MzNWMy42NjdDMCAyLjc0Ny43NDEgMiAxLjY1NSAyaDIwLjY5QTEuNjYgMS42NiAwIDAxMjQgMy42Njd2NC4xNjZBMS42NiAxLjY2IDAgMDEyMi4zNDUgOS41aC00Ljk2NlYyMkg2LjYyMVY5LjVoMi43NzNINi42MnptMTAuNzU4LTEuNjY3aDQuOTY2VjMuNjY3SDEuNjU1djQuMTY2aDQuOTY2di0yLjVoMTAuNzU4djIuNXonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdwYW50aGVvbicsXG4gIHBhdGg6ICdNOS45NDcgMTYuNTk4aC4yNTJWOS40MTJoLS4yNTJhLjQzMi40MzIgMCAwMS0uMjMtLjA2NWMtLjA3LS4wNDMtLjEwNi0uMDkzLS4xMDYtLjE1TDkuMTUgNy44MnYtLjE1YzAtLjA0NC4wMjgtLjA4LjA4NC0uMTA5YS42OTEuNjkxIDAgMDEuMTA1LS4wODYuMjU0LjI1NCAwIDAxLjE0Ni0uMDQzSDEzLjZjLjA1NiAwIC4xMDQuMDE1LjE0Ni4wNDMuMDQyLjAzLjA5MS4wNTguMTQ3LjA4NmEuMjcxLjI3MSAwIDAxLjA2My4xMDhjLjAxNC4wNDMuMDA3LjA5My0uMDIuMTVsLS40MiAxLjM3OGEuMzc0LjM3NCAwIDAxLS4xNDcuMTUuMzcuMzcgMCAwMS0uMTkuMDY1aC0uMjUxdjcuMTg2aC4yNTJhLjM3LjM3IDAgMDEuMTg5LjA2NWMuMDcuMDQzLjExOS4wOTMuMTQ3LjE1bC40MiAxLjM3OGMuMDI3LjAyOC4wMzQuMDcxLjAyLjEyOWEuMjc1LjI3NSAwIDAxLS4wNjMuMTI5IDEuMzY0IDEuMzY0IDAgMDAtLjE0Ny4wODYuMjU0LjI1NCAwIDAxLS4xNDYuMDQzSDkuNDg1YS4yNTQuMjU0IDAgMDEtLjE0Ni0uMDQzLjY5MS42OTEgMCAwMS0uMTA1LS4wODZjLS4wNTYtLjAyOS0uMDg0LS4wNzItLjA4NC0uMTN2LS4xMjhsLjQ2MS0xLjM3N2MwLS4wNTguMDM1LS4xMDguMTA1LS4xNTFhLjQzMi40MzIgMCAwMS4yMzEtLjA2NXptNS43OTIgMGguMjUyVjkuNDEyaC0uMjUyYS40MzIuNDMyIDAgMDEtLjIzLS4wNjUuMzc0LjM3NCAwIDAxLS4xNDgtLjE1bC0uNDItMS4zNzdjLS4wMjctLjAyOS0uMDM0LS4wNzItLjAyLS4xM2EuMjc1LjI3NSAwIDAxLjA2My0uMTI5Yy4wNTYtLjAyOC4xMDUtLjA1Ny4xNDYtLjA4NmEuMjU0LjI1NCAwIDAxLjE0Ny0uMDQzaDQuMTE0Yy4wNTUgMCAuMTA0LjAxNS4xNDYuMDQzYS42OTEuNjkxIDAgMDEuMTA1LjA4NmMuMDU2LjAzLjA4NC4wNzIuMDg0LjEzdi4xMjlsLS40MiAxLjM3N2EuMzc0LjM3NCAwIDAxLS4xNDYuMTUuNDMyLjQzMiAwIDAxLS4yMzEuMDY1aC0uMjF2Ny4xODZoLjIxYS40My40MyAwIDAxLjIzLjA2NWMuMDcuMDQzLjEyLjA5My4xNDguMTVsLjQyIDEuMzc4di4xNWMwIC4wNDMtLjAyOS4wOC0uMDg1LjEwOGEuNjkxLjY5MSAwIDAxLS4xMDUuMDg2LjI1NC4yNTQgMCAwMS0uMTQ2LjA0M2gtNC4xMTRhLjI1NC4yNTQgMCAwMS0uMTQ3LS4wNDMgMS4zNjQgMS4zNjQgMCAwMC0uMTQ2LS4wODYuMjcxLjI3MSAwIDAxLS4wNjMtLjEwOGMtLjAxNC0uMDQzLS4wMDctLjA5My4wMi0uMTVsLjQyLTEuMzc3YS4zNzQuMzc0IDAgMDEuMTQ3LS4xNTEuNDMyLjQzMiAwIDAxLjIzMS0uMDY1em0tMTEuNzk0LS4wODZoLjI1MlY5LjQ5OGgtLjI1MmEuMzM0LjMzNCAwIDAxLS4yMS0uMDY1LjM4Ni4zODYgMCAwMS0uMTI2LS4xOTNsLS40Mi0xLjM3N2EuMjQ4LjI0OCAwIDAxLS4wMi0uMTcyLjg1NC44NTQgMCAwMS4wNjMtLjE3M2MuMDI4LS4wNTcuMDctLjEuMTI2LS4xMjlhLjM2NS4zNjUgMCAwMS4xNjgtLjA0M2g0LjA3Yy4wNTcgMCAuMTEzLjAxNS4xNjkuMDQzYS4yNzguMjc4IDAgMDEuMTI2LjEzLjg1NC44NTQgMCAwMS4wNjIuMTcyLjI0OC4yNDggMCAwMS0uMDIuMTcybC0uNDIgMS4zNzdhLjM4Ni4zODYgMCAwMS0uMTI2LjE5My4zMzQuMzM0IDAgMDEtLjIxLjA2NWgtLjIxdjcuMDE0aC4yMWMuMDg0IDAgLjE1NC4wMjkuMjEuMDg2YS42NzMuNjczIDAgMDEuMTI2LjE3MmwuNDIgMS4zNzhhLjI0OC4yNDggMCAwMS4wMi4xNzIuODU0Ljg1NCAwIDAxLS4wNjIuMTcyLjI3OC4yNzggMCAwMS0uMTI2LjEyOS4zNjUuMzY1IDAgMDEtLjE2OC4wNDNIMy41MjZhLjM2NS4zNjUgMCAwMS0uMTY4LS4wNDMuMjc4LjI3OCAwIDAxLS4xMjYtLjEzLjg1NC44NTQgMCAwMS0uMDYzLS4xNzEuMjQ4LjI0OCAwIDAxLjAyLS4xNzJsLjQyLTEuMzc4YS42NzMuNjczIDAgMDEuMTI2LS4xNzIuMjgxLjI4MSAwIDAxLjIxLS4wODZ6TTEuNzYzIDYuNjU4YS43MTcuNzE3IDAgMDEtLjUwNC0uMTk0LjY0NC42NDQgMCAwMS0uMjEtLjQ5NXYtLjQzYS43My43MyAwIDAxLjEwNS0uMzg3LjY4LjY4IDAgMDEuMjczLS4yNTlDNC4zMDkgMy40MDIgNi41NCAyLjI3NiA4LjEyMSAxLjUxNSA5LjcwMi43NTUgMTAuNDkzLjM2MSAxMC40OTMuMzMyYy41MzEtLjI1OC45NzItLjM2NiAxLjMyMi0uMzIzLjM1LjA0My43MzQuMTY1IDEuMTU0LjM2Nmw4LjMxIDQuNTE4Yy4xNC4wNTguMjQ1LjE0NC4zMTUuMjU5YS43My43MyAwIDAxLjEwNS4zODd2LjQzYzAgLjIwMS0uMDcuMzY2LS4yMS40OTVhLjcxNy43MTcgMCAwMS0uNTA0LjE5NEgxLjc2M3ptLS43MTQgMTMuMzRhLjU0LjU0IDAgMDEuMTY4LS4zODcuNTE2LjUxNiAwIDAxLjM3OC0uMTcyaDE5LjY0MmMuMTY4IDAgLjMwOC4wNTcuNDIuMTcyYS41NDEuNTQxIDAgMDEuMTY4LjM4N3YuODE4YS41MjIuNTIyIDAgMDEtLjE2OC40MDguNjA1LjYwNSAwIDAxLS40Mi4xNTFIMS41OTVhLjU1MS41NTEgMCAwMS0uMzc4LS4xNS41MjIuNTIyIDAgMDEtLjE2OC0uNDF2LS44MTd6bTIxLjQwNSAyLjAyMmMuMTQgMCAuMjY2LjA1OC4zNzguMTczYS41OTIuNTkyIDAgMDEuMTY4LjQzdi44MThhLjU0MS41NDEgMCAwMS0uMTY4LjM4Ny41MTYuNTE2IDAgMDEtLjM3OC4xNzJMLjU0NiAyMy45NTdhLjUxNi41MTYgMCAwMS0uMzc4LS4xNzIuNTQxLjU0MSAwIDAxLS4xNjgtLjM4N3YtLjgxOGEuNTkuNTkgMCAwMS4xNjgtLjQzLjUxNi41MTYgMCAwMS4zNzgtLjE3M2wyMS45MDguMDQzeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ21pYycsXG4gIHBhdGg6ICdNMTIgMTVjMS42NiAwIDIuOTktMS4zNCAyLjk5LTNMMTUgNmMwLTEuNjYtMS4zNC0zLTMtM1M5IDQuMzQgOSA2djZjMCAxLjY2IDEuMzQgMyAzIDN6bTUuMy0zYzAgMy0yLjU0IDUuMS01LjMgNS4xUzYuNyAxNSA2LjcgMTJINWMwIDMuNDEgMi43MiA2LjIzIDYgNi43MlYyMmgydi0zLjI4YzMuMjgtLjQ4IDYtMy4zIDYtNi43MmgtMS43eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2RpcmVjdGlvbnMnLFxuICBwYXRoOiAnTTIzLjY0OSAxMS4xNTRMMTIuODQ2LjM1YTEuMTk1IDEuMTk1IDAgMDAtMS42OTIgMEwuMzUgMTEuMTU0YTEuMTk1IDEuMTk1IDAgMDAwIDEuNjkyTDExLjE1NCAyMy42NWExLjE5NSAxLjE5NSAwIDAwMS42OTIgMEwyMy42NSAxMi44NDZjLjQ2OC0uNDU2LjQ2OC0xLjIxMiAwLTEuNjkyem0tOS4yNTQgMy44NTN2LTMuMDAxSDkuNTkzdjMuNmgtMi40di00LjhjMC0uNjYuNTQtMS4yIDEuMi0xLjJoNi4wMDJWNi42MDRsNC4yIDQuMi00LjIgNC4yMDJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnY2FsZW5kYXInLFxuICBwYXRoOiAnTTE4LjExMSAxMy4ySDEydjZoNi4xMTF2LTZ6TTE2Ljg5IDB2Mi40SDcuMTFWMEg0LjY2N3YyLjRIMy40NDRjLTEuMzU2IDAtMi40MzIgMS4wOC0yLjQzMiAyLjRMMSAyMS42QzEgMjIuOTIgMi4wODggMjQgMy40NDQgMjRoMTcuMTEyQzIxLjkgMjQgMjMgMjIuOTIgMjMgMjEuNlY0LjhjMC0xLjMyLTEuMS0yLjQtMi40NDQtMi40aC0xLjIyM1YwSDE2Ljg5em0zLjY2NyAyMS42SDMuNDQ0VjguNGgxNy4xMTJ2MTMuMnonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdjYWxsb3V0JyxcbiAgcGF0aDogJ00yMS45OSA0YzAtMS4xLS44OS0yLTEuOTktMkg0Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDE0bDQgNC0uMDEtMTh6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnaW5mbycsXG4gIHBhdGg6ICdNMTIgOC40QTEuMiAxLjIgMCAxMDEyIDZhMS4yIDEuMiAwIDAwMCAyLjR6TTEyIDBjNi42MjQgMCAxMiA1LjM3NiAxMiAxMnMtNS4zNzYgMTItMTIgMTJTMCAxOC42MjQgMCAxMiA1LjM3NiAwIDEyIDB6bTAgMThjLjY2IDAgMS4yLS41NCAxLjItMS4yVjEyYzAtLjY2LS41NC0xLjItMS4yLTEuMi0uNjYgMC0xLjIuNTQtMS4yIDEuMnY0LjhjMCAuNjYuNTQgMS4yIDEuMiAxLjJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnYnJpZWZjYXNlJyxcbiAgcGF0aDogJ00yMCA3aC00VjVjMC0xLjExLS44OS0yLTItMmgtNGMtMS4xMSAwLTIgLjg5LTIgMnYySDRjLTEuMTEgMC0xLjk5Ljg5LTEuOTkgMkwyIDIwYzAgMS4xMS44OSAyIDIgMmgxNmMxLjExIDAgMi0uODkgMi0yVjljMC0xLjExLS44OS0yLTItMnptLTYgMGgtNFY1aDR2MnonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdrYWJvYicsXG4gIHZpZXdCb3g6ICcwIDAgMyAxMScsXG4gIGNvbXBsZXhDb250ZW50czogYDxjaXJjbGUgY3g9XCIxLjVcIiBjeT1cIjEuNVwiIHI9XCIxLjVcIi8+PGNpcmNsZSBjeD1cIjEuNVwiIGN5PVwiNS41XCIgcj1cIjEuNVwiLz48Y2lyY2xlIGN4PVwiMS41XCIgY3k9XCI5LjVcIiByPVwiMS41XCIvPmBcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3BlcnNvbicsXG4gIHZpZXdCb3g6ICcwIDAgMTggMTgnLFxuICBwYXRoOiAnTTkgOWMyLjQ4NiAwIDQuNS0yLjAxNCA0LjUtNC41UzExLjQ4NiAwIDkgMGE0LjQ5OSA0LjQ5OSAwIDAwLTQuNSA0LjVDNC41IDYuOTg2IDYuNTE0IDkgOSA5em0wIDIuMjVjLTMuMDA0IDAtOSAxLjUwOC05IDQuNXYxLjEyNUMwIDE3LjQ5NC41MDYgMTggMS4xMjUgMThoMTUuNzVjLjYxOSAwIDEuMTI1LS41MDYgMS4xMjUtMS4xMjVWMTUuNzVjMC0yLjk5Mi01Ljk5Ni00LjUtOS00LjV6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnbWFnbmlmeWluZ19nbGFzcycsXG4gIHBhdGg6ICdNMTYuMTI0IDEzLjA1MWE1LjE1NCA1LjE1NCAwIDExMC0xMC4zMDggNS4xNTQgNS4xNTQgMCAwMTAgMTAuMzA4TTE2LjExNCAwYTcuODg2IDcuODg2IDAgMDAtNi40NiAxMi40MDdMMCAyMi4wNiAxLjk0IDI0bDkuNjUzLTkuNjUzQTcuODg2IDcuODg2IDAgMTAxNi4xMTMgMCdcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ29mZmljZScsXG4gIHBhdGg6ICdNMTIgN1YzSDJ2MThoMjBWN0gxMnpNNiAxOUg0di0yaDJ2MnptMC00SDR2LTJoMnYyem0wLTRINFY5aDJ2MnptMC00SDRWNWgydjJ6bTQgMTJIOHYtMmgydjJ6bTAtNEg4di0yaDJ2MnptMC00SDhWOWgydjJ6bTAtNEg4VjVoMnYyem0xMCAxMmgtOHYtMmgydi0yaC0ydi0yaDJ2LTJoLTJWOWg4djEwem0tMi04aC0ydjJoMnYtMnptMCA0aC0ydjJoMnYtMnonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdsaW5rJyxcbiAgcGF0aDogJ00yLjI4IDEyQTMuNzIzIDMuNzIzIDAgMDE2IDguMjhoNC44VjZINmMtMy4zMTIgMC02IDIuNjg4LTYgNnMyLjY4OCA2IDYgNmg0Ljh2LTIuMjhINkEzLjcyMyAzLjcyMyAwIDAxMi4yOCAxMnptNC45MiAxLjJoOS42di0yLjRINy4ydjIuNHpNMTggNmgtNC44djIuMjhIMThBMy43MjMgMy43MjMgMCAwMTIxLjcyIDEyIDMuNzIzIDMuNzIzIDAgMDExOCAxNS43MmgtNC44VjE4SDE4YzMuMzEyIDAgNi0yLjY4OCA2LTZzLTIuNjg4LTYtNi02eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3dpbmRvdycsXG4gIHBhdGg6ICdNMyAxM2g4VjNIM3YxMHptMCA4aDh2LTZIM3Y2em0xMCAwaDhWMTFoLTh2MTB6bTAtMTh2Nmg4VjNoLTh6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncGhvbmUnLFxuICBwYXRoOiAnTTQuODI3IDEwLjM4N2EyMC4xOTggMjAuMTk4IDAgMDA4Ljc4NiA4Ljc4NmwyLjkzNC0yLjkzM2MuMzYtLjM2Ljg5My0uNDggMS4zNi0uMzJhMTUuMjEgMTUuMjEgMCAwMDQuNzYuNzZjLjczMyAwIDEuMzMzLjYgMS4zMzMgMS4zMzN2NC42NTRDMjQgMjMuNCAyMy40IDI0IDIyLjY2NyAyNCAxMC4xNDcgMjQgMCAxMy44NTMgMCAxLjMzMyAwIC42LjYgMCAxLjMzMyAwSDZjLjczMyAwIDEuMzMzLjYgMS4zMzMgMS4zMzMgMCAxLjY2Ny4yNjcgMy4yNjcuNzYgNC43Ni4xNDcuNDY3LjA0Ljk4Ny0uMzMzIDEuMzZsLTIuOTMzIDIuOTM0eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3RhZycsXG4gIHZpZXdCb3g6ICcwIDAgMTggMTgnLFxuICBwYXRoOiAnTTE3LjQ2OSA4LjYyMmwtOC4xLTguMUExLjc4OSAxLjc4OSAwIDAwOC4xIDBIMS44Qy44MSAwIDAgLjgxIDAgMS44djYuM2MwIC40OTUuMTk4Ljk0NS41MzEgMS4yNzhsOC4xIDguMWMuMzI0LjMyNC43NzQuNTIyIDEuMjY5LjUyMmExLjc2IDEuNzYgMCAwMDEuMjY5LS41MzFsNi4zLTYuM0ExLjc2IDEuNzYgMCAwMDE4IDkuOWMwLS40OTUtLjIwNy0uOTU0LS41MzEtMS4yNzh6TTMuMTUgNC41Yy0uNzQ3IDAtMS4zNS0uNjAzLTEuMzUtMS4zNSAwLS43NDcuNjAzLTEuMzUgMS4zNS0xLjM1Ljc0NyAwIDEuMzUuNjAzIDEuMzUgMS4zNSAwIC43NDctLjYwMyAxLjM1LTEuMzUgMS4zNXonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdkb2N1bWVudCcsXG4gIHBhdGg6ICdNNCA2SDJ2MTRjMCAxLjEuOSAyIDIgMmgxNHYtMkg0VjZ6bTE2LTRIOGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxMmMxLjEgMCAyLS45IDItMlY0YzAtMS4xLS45LTItMi0yem0tMSA5SDlWOWgxMHYyem0tNCA0SDl2LTJoNnYyem00LThIOVY1aDEwdjJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnY2hldnJvbicsXG4gIHZpZXdCb3g6ICcwIDAgNyA5JyxcbiAgY29tcGxleENvbnRlbnRzOiBgPGcgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMSAtOClcIj48cGF0aCBkPVwibTIuNjQxNzAwNCA4LTEuMTQxNzAwNCAxLjA1NzUgMy43MDg1MDIwMiAzLjQ0MjUtMy43MDg1MDIwMiAzLjQ0MjUgMS4xNDE3MDA0IDEuMDU3NSA0Ljg1ODI5OTYtNC41elwiLz48L2c+YFxufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnc3VwcG9ydCcsXG4gIHBhdGg6ICdNMTIuNSAyQzcuODEgMiA0IDUuODEgNCAxMC41YzAgNC42OSAzLjgxIDguNSA4LjUgOC41aC41djNjNC44Ni0yLjM0IDgtNyA4LTExLjVDMjEgNS44MSAxNy4xOSAyIDEyLjUgMnptMSAxNC41aC0ydi0yaDJ2MnptMC0zLjVoLTJjMC0zLjI1IDMtMyAzLTUgMC0xLjEtLjktMi0yLTJzLTIgLjktMiAyaC0yYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDRjMCAyLjUtMyAyLjc1LTMgNXonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICd5ZXh0JyxcbiAgdmlld0JveDogJzAgMCAzMCAzMCcsXG4gIHBhdGg6ICdNMjUuNTE3IDI4LjE0MnYuMDk1aC0uMjA0di45MDVoLS4wNjZ2LS45MDVoLS4xOTd2LS4wOTVoLjQ2N3ptLjY2NyAwaC4wNjZ2MWgtLjA2NnYtLjgyNWwtLjI0LjU5NWgtLjAxM2wtLjI0LS41OTV2LjgyNWgtLjA2NnYtMWguMDY2bC4yNDcuNjEuMjQ2LS42MXpNMTUgMjguOGM3LjYyMiAwIDEzLjgtNi4xNzggMTMuOC0xMy44IDAtNy42MjItNi4xNzgtMTMuOC0xMy44LTEzLjhDNy4zNzggMS4yIDEuMiA3LjM3OCAxLjIgMTVjMCA3LjYyMiA2LjE3OCAxMy44IDEzLjggMTMuOHpNMTUgMGM4LjI4NCAwIDE1IDYuNzE2IDE1IDE1IDAgOC4yODQtNi43MTYgMTUtMTUgMTUtOC4yODQgMC0xNS02LjcxNi0xNS0xNUMwIDYuNzE2IDYuNzE2IDAgMTUgMHptLjQ1IDE2LjY1di0xLjJoNi42djEuMmgtMi43djUuNGgtMS4ydi01LjRoLTIuN3ptLTEuNTk5LTEuMzVsLjg0OS44NDktMi42MDEgMi42MDEgMi42MDEgMi42MDEtLjg0OS44NDktMi42MDEtMi42MDFMOC42NDkgMjIuMmwtLjg0OS0uODQ5IDIuNjAxLTIuNjAxTDcuOCAxNi4xNDlsLjg0OS0uODQ5IDIuNjAxIDIuNjAxIDIuNjAxLTIuNjAxek0xOC42NzUgOWEyLjE3NSAyLjE3NSAwIDAwLTEuODQ3IDMuMzIzbDIuOTk1LTIuOTk1QTIuMTYzIDIuMTYzIDAgMDAxOC42NzUgOXptMCA1LjU1YTMuMzc1IDMuMzc1IDAgMTEyLjgzMy01LjIwOWwtMy43ODkgMy43ODhhMi4xNzUgMi4xNzUgMCAwMDMuMTMtMS45NTRoMS4yMDFhMy4zNzUgMy4zNzUgMCAwMS0zLjM3NSAzLjM3NXptLTcuNDI1LTMuNzM0TDEzLjc4IDcuOGwuOTIuNzcxLTIuODUgMy4zOTd2Mi41ODJoLTEuMnYtMi41ODJMNy44IDguNTdsLjkyLS43NzEgMi41MyAzLjAxNnonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdwaW4nLFxuICB2aWV3Qm94OiAnMCAwIDEzIDE4JyxcbiAgcGF0aDogJ205LjM3NSAwYy0zLjUyNDQ2NDI5IDAtNi4zNzUgMi44MTctNi4zNzUgNi4zIDAgNC43MjUgNi4zNzUgMTEuNyA2LjM3NSAxMS43czYuMzc1LTYuOTc1IDYuMzc1LTExLjdjMC0zLjQ4My0yLjg1MDUzNTctNi4zLTYuMzc1LTYuM3ptLjAwMDAwMDE4IDguNTUwMDAwMDdjLTEuMjU2Nzg1NzYgMC0yLjI3Njc4NTc5LTEuMDA4LTIuMjc2Nzg1NzktMi4yNXMxLjAyMDAwMDAzLTIuMjUgMi4yNzY3ODU3OS0yLjI1YzEuMjU2Nzg1NzIgMCAyLjI3Njc4NTgyIDEuMDA4IDIuMjc2Nzg1ODIgMi4yNXMtMS4wMjAwMDAxIDIuMjUtMi4yNzY3ODU4MiAyLjI1eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2dlYXInLFxuICBwYXRoOiAnTTEyIDEwYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptNy03SDVhMiAyIDAgMDAtMiAydjE0YTIgMiAwIDAwMiAyaDE0YTIgMiAwIDAwMi0yVjVhMiAyIDAgMDAtMi0yem0tMS43NSA5YzAgLjIzLS4wMi40Ni0uMDUuNjhsMS40OCAxLjE2Yy4xMy4xMS4xNy4zLjA4LjQ1bC0xLjQgMi40MmMtLjA5LjE1LS4yNy4yMS0uNDMuMTVsLTEuNzQtLjdjLS4zNi4yOC0uNzYuNTEtMS4xOC42OWwtLjI2IDEuODVjLS4wMy4xNy0uMTguMy0uMzUuM2gtMi44Yy0uMTcgMC0uMzItLjEzLS4zNS0uMjlsLS4yNi0xLjg1Yy0uNDMtLjE4LS44Mi0uNDEtMS4xOC0uNjlsLTEuNzQuN2MtLjE2LjA2LS4zNCAwLS40My0uMTVsLTEuNC0yLjQyYS4zNTMuMzUzIDAgMDEuMDgtLjQ1bDEuNDgtMS4xNmMtLjAzLS4yMy0uMDUtLjQ2LS4wNS0uNjkgMC0uMjMuMDItLjQ2LjA1LS42OGwtMS40OC0xLjE2YS4zNTMuMzUzIDAgMDEtLjA4LS40NWwxLjQtMi40MmMuMDktLjE1LjI3LS4yMS40My0uMTVsMS43NC43Yy4zNi0uMjguNzYtLjUxIDEuMTgtLjY5bC4yNi0xLjg1Yy4wMy0uMTcuMTgtLjMuMzUtLjNoMi44Yy4xNyAwIC4zMi4xMy4zNS4yOWwuMjYgMS44NWMuNDMuMTguODIuNDEgMS4xOC42OWwxLjc0LS43Yy4xNi0uMDYuMzQgMCAuNDMuMTVsMS40IDIuNDJjLjA5LjE1LjA1LjM0LS4wOC40NWwtMS40OCAxLjE2Yy4wMy4yMy4wNS40Ni4wNS42OXonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdsaWdodF9idWxiJyxcbiAgdmlld0JveDogJzAgMCAzMiAzNScsXG4gIHBhdGg6ICdNMTEuNTg1IDMxLjA1Nmw4LjM4LS40OTN2LS45ODZsLTguMzguNDkzek0xMS41ODUgMzMuMDI4TDE1Ljc3NSAzNWw0LjE5LTEuOTcyVjMxLjU1bC04LjM4LjQ5M3YuOTg2em02LjkyNi0uNDA3bC0yLjczNiAxLjI5LTIuMTMtMS4wMDQgNC44NjYtLjI4NnpNMTUuNzc1IDcuMzk0Yy00LjYzIDAtOC4zOCAzLjIwNS04LjM4IDguMzggMCA1LjE3NyA0LjE5IDYuOTAyIDQuMTkgMTIuODE4di40OTNsOC4zOC0uNDkzYzAtNS45MTYgNC4xOS04LjE4OCA0LjE5LTEyLjgxN2E4LjM4IDguMzggMCAwMC04LjM4LTguMzh6bTUuNjE3IDEzLjQ4Yy0xLjAyNSAxLjgzNy0yLjE3NCAzLjg5Mi0yLjM4MSA2Ljc4NmwtNi40NC4zOGMtLjEyOS0zLjAxLTEuMjktNS4wMjEtMi4zMi02LjgwOC0uNDkzLS44LS45MjgtMS42MzYtMS4yOTktMi41aDEzLjU1NmMtLjMyNS43MDgtLjcwNCAxLjQwMy0xLjExNiAyLjE0MnptMS40NzktMy4xMjhIOC42MjdhNy43OTMgNy43OTMgMCAwMS0uMjQ3LTEuOTcxYzAtNC4zNTMgMy4wNDItNy4zOTUgNy4zOTUtNy4zOTVhNy4zOTQgNy4zOTQgMCAwMTcuMzk0IDcuMzk1IDYuNzM5IDYuNzM5IDAgMDEtLjMgMS45NzFoLjAwMnpNMjYuNjIgMTUuMjgyaDQuOTN2MWgtNC45M3pNMjMuMDk0IDcuNzU2bDIuMDkxLTIuMDkxLjY5OC42OTctMi4wOTIgMi4wOTJ6TTE1LjI4MiAwaDF2NC45M2gtMXpNNS42NjYgNi4zNjJsLjY5Ny0uNjk3IDIuMDkxIDIuMDkxLS42OTcuNjk3ek0wIDE1LjI4Mmg0LjkzdjFIMHonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdyZWNlaXB0JyxcbiAgdmlld0JveDogJzAgMCAxOCAxOCcsXG4gIHBhdGg6ICdNOC45OTEgMEM0LjAyMyAwIDAgNC4wMzIgMCA5czQuMDIzIDkgOC45OTEgOUMxMy45NjggMTggMTggMTMuOTY4IDE4IDlzLTQuMDMyLTktOS4wMDktOXptMy44MTYgMTQuNEw5IDEyLjEwNSA1LjE5MyAxNC40bDEuMDA4LTQuMzI5LTMuMzU3LTIuOTA3IDQuNDI4LS4zNzhMOSAyLjdsMS43MjggNC4wNzcgNC40MjguMzc4LTMuMzU3IDIuOTA3eidcbn0pO1xuIiwiaW1wb3J0IHRodW1iSWNvbiBmcm9tICcuL3RodW1iLmpzJztcbmltcG9ydCByZWNlaXB0SWNvbiBmcm9tICcuL3JlY2VpcHQuanMnO1xuaW1wb3J0IHBhbnRoZW9uSWNvbiBmcm9tICcuL3BhbnRoZW9uLmpzJztcbmltcG9ydCBtaWNJY29uIGZyb20gJy4vbWljLmpzJztcbmltcG9ydCBkaXJlY3Rpb25zSWNvbiBmcm9tICcuL2RpcmVjdGlvbnMuanMnO1xuaW1wb3J0IGNhbGVuZGFySWNvbiBmcm9tICcuL2NhbGVuZGFyLmpzJztcbmltcG9ydCBjYWxsb3V0SWNvbiBmcm9tICcuL2NhbGxvdXQuanMnO1xuaW1wb3J0IGluZm9JY29uIGZyb20gJy4vaW5mby5qcyc7XG5pbXBvcnQgYnJpZWZjYXNlSWNvbiBmcm9tICcuL2JyaWVmY2FzZS5qcyc7XG5pbXBvcnQga2Fib2JJY29uIGZyb20gJy4va2Fib2IuanMnO1xuaW1wb3J0IHBlcnNvbkljb24gZnJvbSAnLi9wZXJzb24uanMnO1xuaW1wb3J0IG1hZ25pZnlpbmdHbGFzc0ljb24gZnJvbSAnLi9tYWduaWZ5aW5nX2dsYXNzLmpzJztcbmltcG9ydCBvZmZpY2VJY29uIGZyb20gJy4vb2ZmaWNlLmpzJztcbmltcG9ydCBsaW5rSWNvbiBmcm9tICcuL2xpbmsuanMnO1xuaW1wb3J0IHdpbmRvd0ljb24gZnJvbSAnLi93aW5kb3cuanMnO1xuaW1wb3J0IHBob25lSWNvbiBmcm9tICcuL3Bob25lLmpzJztcbmltcG9ydCB0YWdJY29uIGZyb20gJy4vdGFnLmpzJztcbmltcG9ydCBkb2N1bWVudEljb24gZnJvbSAnLi9kb2N1bWVudC5qcyc7XG5pbXBvcnQgY2hldnJvbkljb24gZnJvbSAnLi9jaGV2cm9uLmpzJztcbmltcG9ydCBzdXBwb3J0SWNvbiBmcm9tICcuL3N1cHBvcnQuanMnO1xuaW1wb3J0IHlleHRJY29uIGZyb20gJy4veWV4dC5qcyc7XG5pbXBvcnQgcGluSWNvbiBmcm9tICcuL3Bpbi5qcyc7XG5pbXBvcnQgZ2Vhckljb24gZnJvbSAnLi9nZWFyLmpzJztcbmltcG9ydCBsaWdodEJ1bGJJY29uIGZyb20gJy4vbGlnaHRfYnVsYi5qcyc7XG5pbXBvcnQgc3Rhckljb24gZnJvbSAnLi9zdGFyLmpzJztcblxuY29uc3QgaWNvbnNBcnJheSA9IFtcbiAgdGh1bWJJY29uLFxuICByZWNlaXB0SWNvbixcbiAgcGFudGhlb25JY29uLFxuICBtaWNJY29uLFxuICBkaXJlY3Rpb25zSWNvbixcbiAgY2FsZW5kYXJJY29uLFxuICBjYWxsb3V0SWNvbixcbiAgaW5mb0ljb24sXG4gIGJyaWVmY2FzZUljb24sXG4gIGthYm9iSWNvbixcbiAgcGVyc29uSWNvbixcbiAgbWFnbmlmeWluZ0dsYXNzSWNvbixcbiAgb2ZmaWNlSWNvbixcbiAgbGlua0ljb24sXG4gIHdpbmRvd0ljb24sXG4gIHBob25lSWNvbixcbiAgdGFnSWNvbixcbiAgZG9jdW1lbnRJY29uLFxuICBjaGV2cm9uSWNvbixcbiAgc3VwcG9ydEljb24sXG4gIHlleHRJY29uLFxuICBwaW5JY29uLFxuICBnZWFySWNvbixcbiAgbGlnaHRCdWxiSWNvblxuXTtcblxuY29uc3QgSWNvbnMgPSB7fTtcblxuaWNvbnNBcnJheS5mb3JFYWNoKGljb24gPT4ge1xuICBJY29uc1tpY29uLm5hbWVdID0gaWNvbi5tYXJrdXAoKTtcbn0pO1xuXG5JY29ucy5kZWZhdWx0ID0gc3Rhckljb24ubWFya3VwKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEljb25zO1xuIiwiLyoqIEBtb2R1bGUgSWNvbkNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgSWNvbnMgZnJvbSAnLi4vLi4vaWNvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJY29uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEljb25Db21wb25lbnRcbiAgICogQHBhcmFtIG9wdHNcbiAgICogQHBhcmFtIG9wdHMuaWNvbk5hbWUge3N0cmluZ31cbiAgICogQHBhcmFtIG9wdHMuY3VzdG9tSWNvbiB7c3RyaW5nfVxuICAgKiBAcGFyYW0gb3B0cy5pY29uVXJsIHtzdHJpbmd9XG4gICAqL1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICAvKipcbiAgICAgKiBuYW1lIG9mIGFuIGljb24gZnJvbSB0aGUgZGVmYXVsdCBpY29uIHNldFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5pY29uTmFtZSA9IG9wdHMuaWNvbk5hbWUgfHwgJ2RlZmF1bHQnO1xuXG4gICAgLyoqXG4gICAgICogdGhlIG1hcmt1cCBmb3IgYSBmdWxseSBjdXN0b20gaWNvblxuICAgICAqIEB0eXBlIHsqfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5jdXN0b21JY29uID0gb3B0cy5jdXN0b21JY29uIHx8IG51bGw7XG4gICAgLyoqXG4gICAgICogdGhlIHVybCB0byBhIGN1c3RvbSBpbWFnZSBpY29uXG4gICAgICogQHR5cGUge251bGx9XG4gICAgICovXG4gICAgdGhpcy5pY29uVXJsID0gb3B0cy5pY29uVXJsIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogZ2V0dGVyIGZvciB0aGUgaW1hZ2UgcGFzdGVkIHRvIGhhbmRsZWJhcnNcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldCBpbWFnZSAoKSB7XG4gICAgaWYgKHRoaXMuY3VzdG9tSWNvbikge1xuICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tSWNvbjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pY29uVXJsKSB7XG4gICAgICByZXR1cm4gYDxpbWcgc3JjPVwiJHt0aGlzLmljb25Vcmx9XCIgYWx0PVwiXCIgY2xhc3M9XCJJY29uLWltYWdlXCI+YDtcbiAgICB9XG5cbiAgICBpZiAoSWNvbnNbdGhpcy5pY29uTmFtZV0pIHtcbiAgICAgIHJldHVybiBJY29uc1t0aGlzLmljb25OYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gSWNvbnMuZGVmYXVsdDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdJY29uQ29tcG9uZW50JztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAnaWNvbnMvaWNvbic7XG4gIH1cblxuICAvKipcbiAgICogYWxsb3dpbmcgZHVwbGljYXRlc1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvdmVycmlkZXMgZGVmYXVsdCBmdW5jdGlvbmFsaXR5IHRvIHByb3ZpZGUgbmFtZSBhbmQgbWFya3VwXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEByZXR1cm5zIHtJY29uQ29tcG9uZW50fVxuICAgKi9cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICBpbWFnZTogdGhpcy5pbWFnZSxcbiAgICAgIG5hbWU6IHRoaXMuaWNvbk5hbWUgPyB0aGlzLmljb25OYW1lIDogJ2N1c3RvbSdcbiAgICB9KSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gJy4vY29tcG9uZW50bWFuYWdlcic7XG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnO1xuXG5pbXBvcnQgTmF2aWdhdGlvbkNvbXBvbmVudCBmcm9tICcuL25hdmlnYXRpb24vbmF2aWdhdGlvbmNvbXBvbmVudCc7XG5cbmltcG9ydCBTZWFyY2hDb21wb25lbnQgZnJvbSAnLi9zZWFyY2gvc2VhcmNoY29tcG9uZW50JztcbmltcG9ydCBGaWx0ZXJTZWFyY2hDb21wb25lbnQgZnJvbSAnLi9zZWFyY2gvZmlsdGVyc2VhcmNoY29tcG9uZW50JztcbmltcG9ydCBBdXRvQ29tcGxldGVDb21wb25lbnQgZnJvbSAnLi9zZWFyY2gvYXV0b2NvbXBsZXRlY29tcG9uZW50JztcblxuaW1wb3J0IEZpbHRlckJveENvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZmlsdGVyYm94Y29tcG9uZW50JztcbmltcG9ydCBGaWx0ZXJPcHRpb25zQ29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9maWx0ZXJvcHRpb25zY29tcG9uZW50JztcbmltcG9ydCBSYW5nZUZpbHRlckNvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvcmFuZ2VmaWx0ZXJjb21wb25lbnQnO1xuaW1wb3J0IERhdGVSYW5nZUZpbHRlckNvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZGF0ZXJhbmdlZmlsdGVyY29tcG9uZW50JztcbmltcG9ydCBEeW5hbWljRmlsdGVyc0NvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZHluYW1pY2ZpbHRlcnNjb21wb25lbnQnO1xuaW1wb3J0IEdlb0xvY2F0aW9uQ29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9nZW9sb2NhdGlvbmNvbXBvbmVudCc7XG5cbmltcG9ydCBEaXJlY3RBbnN3ZXJDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2RpcmVjdGFuc3dlcmNvbXBvbmVudCc7XG5pbXBvcnQgUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcmVzdWx0c2NvbXBvbmVudCc7XG5pbXBvcnQgQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvYWNjb3JkaW9ucmVzdWx0c2NvbXBvbmVudC5qcyc7XG5pbXBvcnQgVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvdW5pdmVyc2FscmVzdWx0c2NvbXBvbmVudCc7XG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2xvY2F0aW9ucmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2V2ZW50cmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5pbXBvcnQgUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Blb3BsZXJlc3VsdHNpdGVtY29tcG9uZW50JztcblxuaW1wb3J0IE1hcENvbXBvbmVudCBmcm9tICcuL21hcC9tYXBjb21wb25lbnQnO1xuaW1wb3J0IFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCBmcm9tICcuL3F1ZXN0aW9ucy9xdWVzdGlvbnN1Ym1pc3Npb25jb21wb25lbnQnO1xuXG5pbXBvcnQgSWNvbkNvbXBvbmVudCBmcm9tICcuL2ljb25zL2ljb25jb21wb25lbnQuanMnO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX01BTkFHRVIgPSBuZXcgQ29tcG9uZW50TWFuYWdlcigpXG4vLyBDb3JlIENvbXBvbmVudFxuICAucmVnaXN0ZXIoQ29tcG9uZW50KVxuXG4vLyBOYXZpZ2F0aW9uIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKE5hdmlnYXRpb25Db21wb25lbnQpXG5cbi8vIFNlYXJjaCBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihTZWFyY2hDb21wb25lbnQpXG4gIC5yZWdpc3RlcihGaWx0ZXJTZWFyY2hDb21wb25lbnQpXG4gIC5yZWdpc3RlcihBdXRvQ29tcGxldGVDb21wb25lbnQpXG5cbi8vIEZpbHRlciBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihGaWx0ZXJCb3hDb21wb25lbnQpXG4gIC5yZWdpc3RlcihGaWx0ZXJPcHRpb25zQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoUmFuZ2VGaWx0ZXJDb21wb25lbnQpXG4gIC5yZWdpc3RlcihEYXRlUmFuZ2VGaWx0ZXJDb21wb25lbnQpXG4gIC5yZWdpc3RlcihEeW5hbWljRmlsdGVyc0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEdlb0xvY2F0aW9uQ29tcG9uZW50KVxuXG4vLyBSZXN1bHRzIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKERpcmVjdEFuc3dlckNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihSZXN1bHRzQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoUmVzdWx0c0l0ZW1Db21wb25lbnQpXG4gIC5yZWdpc3RlcihBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQpXG4gIC5yZWdpc3RlcihQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudClcblxuICAucmVnaXN0ZXIoTWFwQ29tcG9uZW50KVxuXG4vLyBRdWVzdGlvbnMgQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50KVxuXG4vLyBIZWxwZXIgQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoSWNvbkNvbXBvbmVudCk7XG4iLCIvKiogQG1vZHVsZSBUZW1wbGF0ZUxvYWRlciAqL1xuXG5pbXBvcnQgRE9NIGZyb20gJy4uL2RvbS9kb20nO1xuaW1wb3J0IHsgQ09NUElMRURfVEVNUExBVEVTX1VSTCB9IGZyb20gJy4uLy4uL2NvcmUvY29uc3RhbnRzJztcblxuLyoqXG4gKiBUZW1wbGF0ZUxvYWRlciBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgbG9hZGluZyB0ZW1wbGF0ZXMgYXN5bmNocm9ub3VzbHlcbiAqIGZyb20gdGhlIHNlcnZlciBhbmQgcmVnaXN0ZXJzIHRoZW0gd2l0aCB0aGUgcHJvcGVyIHJlbmRlcmVyLlxuICogSXQgYWxzbyBhbGxvd3MgeW91IHRvIGFzc2lnbiB0aGVtIHN5bmNocm9ub3VzbHkuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBsYXRlTG9hZGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIGlmICghVGVtcGxhdGVMb2FkZXIuc2V0SW5zdGFuY2UodGhpcykpIHtcbiAgICAgIHJldHVybiBUZW1wbGF0ZUxvYWRlci5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSB1cmwgdG8gZmV0Y2ggY29tcGlsZWQgdGVtcGxhdGVzIGZyb21cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVVcmwgPSBjb25maWcudGVtcGxhdGVVcmwgfHwgQ09NUElMRURfVEVNUExBVEVTX1VSTDtcblxuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHt9O1xuICAgIHRoaXMuX29uTG9hZGVkID0gZnVuY3Rpb24gKCkge307XG4gICAgdGhpcy5faW5pdCgpO1xuICB9XG5cbiAgc3RhdGljIHNldEluc3RhbmNlIChpbnN0YW5jZSkge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cblxuICBfaW5pdCAoKSB7XG4gICAgdGhpcy5mZXRjaFRlbXBsYXRlcygpO1xuICB9XG5cbiAgZmV0Y2hUZW1wbGF0ZXMgKCkge1xuICAgIC8vIElmIHdlIGFscmVhZHkgaGF2ZSB0ZW1wbGF0ZXMgbG9hZGVkLCBkbyBub3RoaW5nXG4gICAgbGV0IG5vZGUgPSBET00ucXVlcnkoJyN5ZXh0LWFuc3dlcnMtdGVtcGxhdGVzJyk7XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJbmplY3QgYSBzY3JpcHQgdG8gZmV0Y2ggdGhlIGNvbXBpbGVkIHRlbXBsYXRlcyxcbiAgICAvLyB3cmFwcGluZyBpdCBhIFByb21pc2UgZm9yIGNsZWFubGluZXNzXG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IHNjcmlwdCA9IERPTS5jcmVhdGVFbCgnc2NyaXB0Jywge1xuICAgICAgICBpZDogJ3lleHQtYW5zd2Vycy10ZW1wbGF0ZXMnLFxuICAgICAgICBvbmxvYWQ6IHJlc29sdmUsXG4gICAgICAgIG9uZXJyb3I6IHJlamVjdCxcbiAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgIHNyYzogdGhpcy5fdGVtcGxhdGVVcmxcbiAgICAgIH0pO1xuXG4gICAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAvLyBUT0RPKGJpbGx5KSBJbXBsbWVuZXQgZXJyb3IgaGFuZGxpbmcgaGVyZSAoZS5nLiByZXF1ZXN0IGNvdWxkIGZhaWwpXG4gICAgICAgIGNvbnNvbGUubG9nKCdUZW1wbGF0ZXMgbG9hZGVkIHN1Y2Nlc3NmdWxseSEnKTtcbiAgICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlZ2lzdGVyIHRoZSB0ZW1wbGF0ZXMgaW50ZXJuYWxseSBzbyB0aGF0IHRoZXkgY2FuIGJlIGxhdGVyIGNvbnN1bWVkXG4gICAqIChlLmcuIGJ5IGNvbXBvbmVudHMgYW5kIHJlbmRlcmVycykgd2l0aCBjb252aWVuaWVuY2UuXG4gICAqXG4gICAqIGBmZXRjaFRlbXBsYXRlc2Agd2lsbCBhdXRvbWF0aWNhbGx5IGNhbGwgdGhpcywgcHJvdmlkaW5nIHRoZSBjb21waWxlZCB0ZW1wbGF0ZXMgZnJvbSB0aGUgc2VydmVyLlxuICAgKi9cbiAgcmVnaXN0ZXIgKHRlbXBsYXRlcykge1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHRlbXBsYXRlcztcblxuICAgIC8vIE5vdGlmeSBvdXIgY29uc3VtZXJzIHRoYXQgdGhlIHRlbXBsYXRlcyBhcmUgaGVyZSA6KVxuICAgIHRoaXMuX29uTG9hZGVkKHRoaXMuX3RlbXBsYXRlcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBvbkxvYWRlZCAoY2IpIHtcbiAgICB0aGlzLl9vbkxvYWRlZCA9IGNiO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0ICh0ZW1wbGF0ZU5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVzW3RlbXBsYXRlTmFtZV07XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiBUaGUgaW50ZXJuYWwgdGVtcGxhdGUgY29sbGVjdGlvblxuICAgKi9cbiAgZ2V0VGVtcGxhdGVzICgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5leHBvcnQgeyBDT01QT05FTlRfTUFOQUdFUiB9IGZyb20gJy4vY29tcG9uZW50cy9jb25zdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERPTSB9IGZyb20gJy4vZG9tL2RvbSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlYXJjaFBhcmFtcyB9IGZyb20gJy4vZG9tL3NlYXJjaHBhcmFtcyc7XG5cbmV4cG9ydCB7IFJlbmRlcmVycyB9IGZyb20gJy4vcmVuZGVyaW5nL2NvbnN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGVtcGxhdGVMb2FkZXIgfSBmcm9tICcuL3JlbmRlcmluZy90ZW1wbGF0ZWxvYWRlcic7XG4iLCIvKiogQG1vZHVsZSBFcnJvclJlcG9ydGVyICovXG5cbmltcG9ydCB7IEFuc3dlcnNCYXNlRXJyb3IgfSBmcm9tICcuL2Vycm9ycyc7XG5cbmltcG9ydCBBcGlSZXF1ZXN0IGZyb20gJy4uL2h0dHAvYXBpcmVxdWVzdCc7XG5pbXBvcnQgeyBMSUJfVkVSU0lPTiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbi8qKlxuICogRXJyb3JSZXBvcnRlciBpcyB1c2VkIGZvciByZXBvcnRpbmcgZXJyb3JzIHRvIHRoZSBzZXJ2ZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JSZXBvcnRlciB7XG4gIGNvbnN0cnVjdG9yIChhcGlLZXksIGFuc3dlcnNLZXkpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgYXBpS2V5IHRvIHVzZSBmb3IgcmVwb3J0aW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmFwaUtleSA9IGFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhbnN3ZXJzS2V5IHRvIHVzZSB3aGVuIHJlcG9ydGluZ1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5hbnN3ZXJzS2V5ID0gYW5zd2Vyc0tleTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXBvcnQgc2VuZHMgYSBuZXR3b3JrIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB0byBiZSBsb2dnZWRcbiAgICogQHBhcmFtIHtBbnN3ZXJzQmFzZUVycm9yfSBUaGUgZXJyb3IgdG8gYmUgcmVwb3J0ZWRcbiAgICovXG4gIHJlcG9ydCAoZXJyKSB7XG4gICAgaWYgKCEoZXJyIGluc3RhbmNlb2YgQW5zd2Vyc0Jhc2VFcnJvcikgfHwgZXJyLnJlcG9ydGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXJyLnJlcG9ydGVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL2Vycm9ycycsXG4gICAgICBhcGlLZXk6IHRoaXMuYXBpS2V5LFxuICAgICAgdmVyc2lvbjogMjAxOTAzMDEsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2Vycm9yJzogZXJyLnRvSnNvbigpLFxuICAgICAgICAnbGliVmVyc2lvbic6IExJQl9WRVJTSU9OLFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuYW5zd2Vyc0tleVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVxdWVzdC5nZXQoKVxuICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyKTtcblxuICAgIHJldHVybiBlcnI7XG4gIH1cbn1cbiIsImltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5pbXBvcnQgeyBBbnN3ZXJzU3RvcmFnZUVycm9yIH0gZnJvbSAnLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcblxuLyoqIEBtb2R1bGUgUGVyc2lzdGVudFN0b3JhZ2UgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVyc2lzdGVudFN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBwYXJhbXMgbW9kZWxcbiAgICAgKiBAdHlwZSB7U2VhcmNoUGFyYW1zfVxuICAgICAqL1xuICAgIHRoaXMuX3BhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgaGlzdG9yeSBlZGl0IHRpbWVyLCBpZiBhbnlcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX2hpc3RvcnlUaW1lciA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBsaXN0ZW5lcnMgdG8gZXZlcnkgc3RvcmFnZSB1cGRhdGVcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb25bXX1cbiAgICAgKi9cbiAgICB0aGlzLl91cGRhdGVMaXN0ZW5lciA9IGNvbmZpZy51cGRhdGVMaXN0ZW5lciB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGxpc3RlbmVycyB0byBzdG9yYWdlIHJlc2V0c1xuICAgICAqIEB0eXBlIHtmdW5jdGlvbltdfVxuICAgICAqL1xuICAgIHRoaXMuX3Jlc2V0TGlzdGVuZXIgPSBjb25maWcucmVzZXRMaXN0ZW5lciB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIHdpbmRvdy5vbnBvcHN0YXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5fcGFyYW1zID0gbmV3IFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG4gICAgICB0aGlzLl9jYWxsTGlzdGVuZXIodGhpcy5fdXBkYXRlTGlzdGVuZXIpO1xuICAgICAgdGhpcy5fY2FsbExpc3RlbmVyKHRoaXMuX3Jlc2V0TGlzdGVuZXIpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0IHRoZSBnaXZlbiBrZXkvdmFsdWUgcGFpciBpbnRvIHN0b3JhZ2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IHRvIGluc2VydCB0aGUgZGF0YSBpblxuICAgKiBAcGFyYW0geyp9IGRhdGEgVGhlIGRhdGEgdG8gaW5zZXJ0XG4gICAqL1xuICBzZXQgKGtleSwgZGF0YSkge1xuICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNTdG9yYWdlRXJyb3IoJ1N0b3JhZ2UgZGF0YSBrZXkgbXVzdCBiZSBhIHN0cmluZycsIGtleSwgZGF0YSk7XG4gICAgfVxuXG4gICAgbGV0IG5ld0RhdGEgPSBkYXRhO1xuICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG5ld0RhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgdGhpcy5fcGFyYW1zLnNldChrZXksIG5ld0RhdGEpO1xuICAgIHRoaXMuX3VwZGF0ZUhpc3RvcnkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgdGhlIGdpdmVuIGtleSBmcm9tIHN0b3JhZ2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IHRvIGRlbGV0ZVxuICAgKi9cbiAgZGVsZXRlIChrZXkpIHtcbiAgICB0aGlzLl9wYXJhbXMuZGVsZXRlKGtleSk7XG4gICAgdGhpcy5fdXBkYXRlSGlzdG9yeSgpO1xuICB9XG5cbiAgX3VwZGF0ZUhpc3RvcnkgKCkge1xuICAgIGlmICh0aGlzLl9oaXN0b3J5VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9oaXN0b3J5VGltZXIpO1xuICAgIH1cblxuICAgIC8vIGJhdGNoIHVwZGF0ZSBjYWxscyBhY3Jvc3MgY29tcG9uZW50cyB0byBhdm9pZCB1cGRhdGluZyB0aGUgdXJsIHRvbyBtdWNoXG4gICAgdGhpcy5faGlzdG9yeVRpbWVyID0gc2V0VGltZW91dChcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5faGlzdG9yeVRpbWVyID0gbnVsbDtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGA/JHt0aGlzLl9wYXJhbXMudG9TdHJpbmcoKX1gKTtcbiAgICAgICAgdGhpcy5fY2FsbExpc3RlbmVyKHRoaXMuX3VwZGF0ZUxpc3RlbmVyKTtcbiAgICAgIH0sXG4gICAgICAxMDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZSB0aGUgZ2l2ZW4gbGlzdCBvZiBjYWxsYmFja3Mgd2l0aCB0aGUgY3VycmVudCBzdG9yYWdlIGRhdGFcbiAgICogQHBhcmFtIHtmdW5jdGlvbltdfSBsaXN0ZW5lcnMgVGhlIGNhbGxiYWNrcyB0byBpbnZva2VcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jYWxsTGlzdGVuZXIgKGxpc3RlbmVyKSB7XG4gICAgbGlzdGVuZXIodGhpcy5nZXRBbGwoKSwgdGhpcy5fcGFyYW1zLnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgdGhlIGtleS92YWx1ZSBwYWlycyBpbiBzdG9yYWdlXG4gICAqL1xuICBnZXRBbGwgKCkge1xuICAgIGNvbnN0IGFsbFBhcmFtcyA9IHt9O1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiB0aGlzLl9wYXJhbXMuZW50cmllcygpKSB7XG4gICAgICBhbGxQYXJhbXNba2V5XSA9IHZhbDtcbiAgICB9XG4gICAgcmV0dXJuIGFsbFBhcmFtcztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuaW1wb3J0IENvcmUgZnJvbSAnLi9jb3JlL2NvcmUnO1xuXG5pbXBvcnQge1xuICBUZW1wbGF0ZUxvYWRlcixcbiAgQ09NUE9ORU5UX01BTkFHRVIsXG4gIFJlbmRlcmVycyxcbiAgRE9NXG59IGZyb20gJy4vdWkvaW5kZXgnO1xuXG5pbXBvcnQgRXJyb3JSZXBvcnRlciBmcm9tICcuL2NvcmUvZXJyb3JzL2Vycm9ycmVwb3J0ZXInO1xuaW1wb3J0IHsgQW5hbHl0aWNzUmVwb3J0ZXIgfSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0IFBlcnNpc3RlbnRTdG9yYWdlIGZyb20gJy4vdWkvc3RvcmFnZS9wZXJzaXN0ZW50c3RvcmFnZSc7XG5pbXBvcnQgR2xvYmFsU3RvcmFnZSBmcm9tICcuL2NvcmUvc3RvcmFnZS9nbG9iYWxzdG9yYWdlJztcblxuLyoqXG4gKiBUaGUgbWFpbiBBbnN3ZXJzIGludGVyZmFjZVxuICovXG5jbGFzcyBBbnN3ZXJzIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIGlmICghQW5zd2Vycy5zZXRJbnN0YW5jZSh0aGlzKSkge1xuICAgICAgcmV0dXJuIEFuc3dlcnMuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSBvZiB0aGUgcmVuZGVyZXIgdG8gdXNlIGZvciB0aGUgY29tcG9uZW50c1xuICAgICAqIFRoaXMgaXMgcHJvdmlkZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uLlxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVycy5IYW5kbGViYXJzKCk7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IG1hbmFnZXJcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50TWFuYWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbXBvbmVudHMgPSBDT01QT05FTlRfTUFOQUdFUjtcblxuICAgIC8qKlxuICAgICAqIEEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gaW52b2tlIG9uY2UgdGhlIGxpYnJhcnkgaXMgcmVhZHkuXG4gICAgICogVHlwaWNhbGx5IGZpcmVkIGFmdGVyIHRlbXBsYXRlcyBhcmUgZmV0Y2hlZCBmcm9tIHNlcnZlciBmb3IgcmVuZGVyaW5nLlxuICAgICAqL1xuICAgIHRoaXMuX29uUmVhZHkgPSBmdW5jdGlvbiAoKSB7fTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRJbnN0YW5jZSAoaW5zdGFuY2UpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UgKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgaW5pdCAoY29uZmlnKSB7XG4gICAgY29uc3QgZ2xvYmFsU3RvcmFnZSA9IG5ldyBHbG9iYWxTdG9yYWdlKCk7XG4gICAgY29uc3QgcGVyc2lzdGVudFN0b3JhZ2UgPSBuZXcgUGVyc2lzdGVudFN0b3JhZ2Uoe1xuICAgICAgdXBkYXRlTGlzdGVuZXI6IGNvbmZpZy5vblN0YXRlQ2hhbmdlLFxuICAgICAgcmVzZXRMaXN0ZW5lcjogZGF0YSA9PiBnbG9iYWxTdG9yYWdlLnNldEFsbChkYXRhKVxuICAgIH0pO1xuICAgIGdsb2JhbFN0b3JhZ2Uuc2V0QWxsKHBlcnNpc3RlbnRTdG9yYWdlLmdldEFsbCgpKTtcblxuICAgIGNvbnN0IGNvcmUgPSBuZXcgQ29yZSh7XG4gICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgICBnbG9iYWxTdG9yYWdlOiBnbG9iYWxTdG9yYWdlLFxuICAgICAgcGVyc2lzdGVudFN0b3JhZ2U6IHBlcnNpc3RlbnRTdG9yYWdlLFxuICAgICAgYW5zd2Vyc0tleTogY29uZmlnLmFuc3dlcnNLZXksXG4gICAgICBmaWVsZEZvcm1hdHRlcnM6IGNvbmZpZy5maWVsZEZvcm1hdHRlcnMsXG4gICAgICBsb2NhbGU6IGNvbmZpZy5sb2NhbGVcbiAgICB9KTtcblxuICAgIGlmIChjb25maWcub25TdGF0ZUNoYW5nZSAmJiB0eXBlb2YgY29uZmlnLm9uU3RhdGVDaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbmZpZy5vblN0YXRlQ2hhbmdlKHBlcnNpc3RlbnRTdG9yYWdlLmdldEFsbCgpLCB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKSk7XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzXG4gICAgICAuc2V0Q29yZShjb3JlKVxuICAgICAgLnNldFJlbmRlcmVyKHRoaXMucmVuZGVyZXIpO1xuXG4gICAgaWYgKGNvbmZpZy5idXNpbmVzc0lkKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHMuc2V0QW5hbHl0aWNzUmVwb3J0ZXIoXG4gICAgICAgIG5ldyBBbmFseXRpY3NSZXBvcnRlcihcbiAgICAgICAgICBjb3JlLFxuICAgICAgICAgIGNvbmZpZy5hbnN3ZXJzS2V5LFxuICAgICAgICAgIGNvbmZpZy5idXNpbmVzc0lkLFxuICAgICAgICAgIGNvbmZpZy5hbmFseXRpY3NPcHRpb25zKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLl9vblJlYWR5ID0gY29uZmlnLm9uUmVhZHkgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICBpZiAoY29uZmlnLnVzZVRlbXBsYXRlcyA9PT0gZmFsc2UgfHwgY29uZmlnLnRlbXBsYXRlQnVuZGxlKSB7XG4gICAgICBpZiAoY29uZmlnLnRlbXBsYXRlQnVuZGxlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5pdChjb25maWcudGVtcGxhdGVCdW5kbGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9vblJlYWR5KCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBUZW1wbGF0ZXMgYXJlIGN1cnJlbnRseSBkb3dubG9hZGVkIHNlcGFyYXRlbHkgZnJvbSB0aGUgQ09SRSBhbmQgVUkgYnVuZGxlLlxuICAgIC8vIEZ1dHVyZSBlbmhhbmNlbWVudCBpcyB0byBzaGlwIHRoZSBjb21wb25lbnRzIHdpdGggdGVtcGxhdGVzIGluIGEgc2VwYXJhdGUgYnVuZGxlLlxuICAgIHRoaXMudGVtcGxhdGVzID0gbmV3IFRlbXBsYXRlTG9hZGVyKHtcbiAgICAgIHRlbXBsYXRlVXJsOiBjb25maWcudGVtcGxhdGVVcmxcbiAgICB9KS5vbkxvYWRlZCgodGVtcGxhdGVzKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmluaXQodGVtcGxhdGVzKTtcblxuICAgICAgdGhpcy5fb25SZWFkeSgpO1xuICAgIH0pO1xuXG4gICAgaWYgKCFjb25maWcuc3VwcHJlc3NFcnJvclJlcG9ydHMpIHtcbiAgICAgIHRoaXMuX2Vycm9yUmVwb3J0ZXIgPSBuZXcgRXJyb3JSZXBvcnRlcihjb25maWcuYXBpS2V5LCBjb25maWcuYW5zd2Vyc0tleSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlID0+IHRoaXMuX2Vycm9yUmVwb3J0ZXIucmVwb3J0KGUuZXJyb3IpKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmhhbmRsZWRyZWplY3Rpb24nLCBlID0+IHRoaXMuX2Vycm9yUmVwb3J0ZXIucmVwb3J0KGUuZXJyb3IpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRvbVJlYWR5IChjYikge1xuICAgIERPTS5vblJlYWR5KGNiKTtcbiAgfVxuXG4gIG9uUmVhZHkgKGNiKSB7XG4gICAgdGhpcy5fb25SZWFkeSA9IGNiO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkQ29tcG9uZW50ICh0eXBlLCBvcHRzKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuICAgICAgb3B0cyA9IHtcbiAgICAgICAgY29udGFpbmVyOiBvcHRzXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50cy5jcmVhdGUodHlwZSwgb3B0cykubW91bnQoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNyZWF0ZUNvbXBvbmVudCAob3B0cykge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHMuY3JlYXRlKCdDb21wb25lbnQnLCBvcHRzKS5tb3VudCgpO1xuICB9XG5cbiAgcmVnaXN0ZXJIZWxwZXIgKG5hbWUsIGNiKSB7XG4gICAgdGhpcy5yZW5kZXJlci5yZWdpc3RlckhlbHBlcihuYW1lLCBjYik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuY29uc3QgQU5TV0VSUyA9IG5ldyBBbnN3ZXJzKCk7XG5leHBvcnQgZGVmYXVsdCBBTlNXRVJTO1xuIl0sIm5hbWVzIjpbIk1ldGhvZHMiLCJHRVQiLCJQT1NUIiwiUFVUIiwiREVMRVRFIiwiSHR0cFJlcXVlc3RlciIsInVybCIsImRhdGEiLCJvcHRzIiwicmVxdWVzdCIsImVuY29kZVBhcmFtcyIsIk9iamVjdCIsImFzc2lnbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY3JlZGVudGlhbHMiLCJ1bmRlZmluZWQiLCJtZXRob2QiLCJmZXRjaCIsIm5hdmlnYXRvciIsInNlbmRCZWFjb24iLCJwYXJhbXMiLCJoYXNQYXJhbSIsImluZGV4T2YiLCJzZWFyY2hRdWVyeSIsImtleSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkxJQl9WRVJTSU9OIiwiQVBJX0JBU0VfVVJMIiwiQ09NUElMRURfVEVNUExBVEVTX1VSTCIsIkFOQUxZVElDU19CQVNFX1VSTCIsIlNlYXJjaFBhcmFtcyIsIl9wYXJhbXMiLCJ3aW5kb3ciLCJVUkxTZWFyY2hQYXJhbXMiLCJwYXJzZSIsInNlYXJjaCIsInNsaWNlIiwiZW5jb2RlZFBhcmFtcyIsInNwbGl0IiwiaSIsImxlbmd0aCIsImtleVZhbCIsImRlY29kZSIsInF1ZXJ5IiwiU3RyaW5nIiwibmFtZSIsInZhbHVlIiwic3RyaW5nIiwicHVzaCIsImVuY29kZSIsImpvaW4iLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwibWF0Y2giLCJBcGlSZXF1ZXN0IiwiX3JlcXVlc3RlciIsIl9iYXNlVXJsIiwiYmFzZVVybCIsIl9lbmRwb2ludCIsImVuZHBvaW50IiwiX2FwaUtleSIsImFwaUtleSIsIl92ZXJzaW9uIiwidmVyc2lvbiIsImdldCIsInBvc3QiLCJiYXNlUGFyYW1zIiwidXJsUGFyYW1zIiwibG9jYXRpb24iLCJ0b1N0cmluZyIsImhhcyIsImtleXMiLCJmb3JFYWNoIiwiQW5zd2Vyc0Jhc2VFcnJvciIsImVycm9yQ29kZSIsIm1lc3NhZ2UiLCJib3VuZGFyeSIsImNhdXNlZEJ5IiwiZXJyb3JNZXNzYWdlIiwicmVwb3J0ZWQiLCJidWlsdGluRXJyb3IiLCJlcnJvciIsIkFuc3dlcnNCYXNpY0Vycm9yIiwic3RhY2siLCJFcnJvciIsIkFuc3dlcnNDb21wb25lbnRFcnJvciIsImNvbXBvbmVudCIsIkFuc3dlcnNFbmRwb2ludEVycm9yIiwiQW5zd2Vyc0NvcmVFcnJvciIsIkFuc3dlcnNTdG9yYWdlRXJyb3IiLCJzdG9yYWdlS2V5IiwiQW5zd2Vyc0FuYWx5dGljc0Vycm9yIiwiZXZlbnQiLCJTZWFyY2hBcGkiLCJjb25maWciLCJhbnN3ZXJzS2V5IiwiX2Fuc3dlcnNLZXkiLCJsb2NhbGUiLCJfbG9jYWxlIiwidmVydGljYWxLZXkiLCJpbnB1dCIsImZpbHRlciIsImZhY2V0RmlsdGVyIiwibGltaXQiLCJvZmZzZXQiLCJpZCIsImlzRHluYW1pY0ZpbHRlcnNFbmFibGVkIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInF1ZXJ5U3RyaW5nIiwiQXV0b0NvbXBsZXRlRGF0YSIsInNlY3Rpb25zIiwicXVlcnlJZCIsImZyZWV6ZSIsIm1hcCIsInMiLCJsYWJlbCIsInJlc3VsdHMiLCJyIiwiQXV0b0NvbXBsZXRlUmVzdWx0IiwiaGlnaGxpZ2h0ZWRWYWx1ZSIsImhpZ2hsaWdodCIsIm1hdGNoZWRTdWJzdHJpbmdzIiwic2hvcnRWYWx1ZSIsInZhbCIsInNvcnQiLCJhIiwiYiIsImludmVydGVkU3Vic3RyaW5ncyIsInN1YnN0cmluZyIsIm5leHRPZmZzZXQiLCJuZXh0U3RhcnQiLCJqIiwic3RhcnQiLCJOdW1iZXIiLCJlbmQiLCJBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIiLCJtb2R1bGVJZCIsImZyb20iLCJBdXRvQ29tcGxldGVBcGkiLCJiYXJLZXkiLCJjYXRjaCIsInZlcnRpY2FsIiwidW5pdmVyc2FsIiwiUXVlc3Rpb25BbnN3ZXJBcGkiLCJxdWVzdGlvbiIsImVudGl0eUlkIiwic2l0ZSIsImVtYWlsIiwicXVlc3Rpb25UZXh0IiwicXVlc3Rpb25EZXNjcmlwdGlvbiIsInF1ZXN0aW9uTGFuZ3VhZ2UiLCJQUkVfU0VBUkNIIiwiU0VBUkNIX0xPQURJTkciLCJTRUFSQ0hfQ09NUExFVEUiLCJSZXN1bHQiLCJfcmF3IiwicmF3IiwiX2Zvcm1hdHRlZCIsImZvcm1hdHRlZCIsIm9yZGluYWwiLCJ0aXRsZSIsImRldGFpbHMiLCJsaW5rIiwic3VidGl0bGUiLCJtb2RpZmllciIsImJpZ0RhdGUiLCJpbWFnZSIsImNhbGxzVG9BY3Rpb24iLCJSZXN1bHRGYWN0b3J5IiwicmVzdWx0c0RhdGEiLCJmb3JtYXR0ZXJzIiwidmVydGljYWxJZCIsImZvcm1hdHRlZERhdGEiLCJlbnRyaWVzIiwiaHRtbFNuaXBwZXQiLCJodG1sVGl0bGUiLCJmcm9tR29vZ2xlQ3VzdG9tU2VhcmNoRW5naW5lIiwiZnJvbUdlbmVyaWMiLCJpbmRleCIsImRlc2NyaXB0aW9uIiwidHJ1bmNhdGUiLCJ3ZWJzaXRlIiwic3RyIiwidHJhaWxpbmciLCJzZXAiLCJ3b3JkcyIsIm1heCIsInRydW5jYXRlZCIsIndvcmQiLCJTZWN0aW9uIiwic2VhcmNoU3RhdGUiLCJTZWFyY2hTdGF0ZXMiLCJ2ZXJ0aWNhbENvbmZpZ0lkIiwicmVzdWx0c0NvdW50IiwiZW5jb2RlZFN0YXRlIiwiYXBwbGllZFF1ZXJ5RmlsdGVycyIsIkFwcGxpZWRRdWVyeUZpbHRlciIsImZhY2V0cyIsInBhcnNlTWFwIiwidmVydGljYWxVUkwiLCJtYXBNYXJrZXJzIiwiY2VudGVyQ29vcmRpbmF0ZXMiLCJyZXN1bHQiLCJ5ZXh0RGlzcGxheUNvb3JkaW5hdGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIml0ZW0iLCJtb2R1bGVzIiwidXJscyIsIkFycmF5IiwiaXNBcnJheSIsImFwcGxpZWRRdWVyeUZpbHRlciIsImRpc3BsYXlLZXkiLCJkaXNwbGF5VmFsdWUiLCJmaWx0ZXJzIiwiVW5pdmVyc2FsUmVzdWx0cyIsIkRpcmVjdEFuc3dlciIsImRpcmVjdEFuc3dlciIsImFuc3dlciIsInJlbGF0ZWRJdGVtIiwiZmllbGRBcGlOYW1lIiwiZmllbGRWYWx1ZXMiLCJOYXZpZ2F0aW9uIiwidGFiT3JkZXIiLCJuYXYiLCJWZXJ0aWNhbFJlc3VsdHMiLCJtZXJnZWQiLCJjb25jYXQiLCJOQVZJR0FUSU9OIiwiVU5JVkVSU0FMX1JFU1VMVFMiLCJWRVJUSUNBTF9SRVNVTFRTIiwiQVVUT0NPTVBMRVRFIiwiRElSRUNUX0FOU1dFUiIsIkZJTFRFUiIsIlFVRVJZIiwiUVVFUllfSUQiLCJGQUNFVF9GSUxURVIiLCJEWU5BTUlDX0ZJTFRFUlMiLCJTRUFSQ0hfTElNSVQiLCJQQVJBTVMiLCJRVUVTVElPTl9TVUJNSVNTSU9OIiwiRHluYW1pY0ZpbHRlcnMiLCJkeW5hbWljRmlsdGVycyIsImYiLCJmaWVsZElkIiwib3B0aW9ucyIsIm8iLCJjb3VudExhYmVsIiwic2VsZWN0ZWQiLCJTZWFyY2hEYXRhVHJhbnNmb3JtZXIiLCJTdG9yYWdlS2V5cyIsIlF1ZXN0aW9uU3VibWlzc2lvbiIsImVycm9ycyIsInByaXZhY3lQb2xpY3kiLCJxdWVzdGlvblN1Ym1pdHRlZCIsIkNvcmUiLCJfZmllbGRGb3JtYXR0ZXJzIiwiZmllbGRGb3JtYXR0ZXJzIiwiZ2xvYmFsU3RvcmFnZSIsInBlcnNpc3RlbnRTdG9yYWdlIiwiX3NlYXJjaGVyIiwiX2F1dG9Db21wbGV0ZSIsIl9xdWVzdGlvbkFuc3dlciIsImFwcGVuZCIsInNldCIsInNlYXJjaExvYWRpbmciLCJ2ZXJ0aWNhbFNlYXJjaCIsImdldFN0YXRlIiwiX2lzRHluYW1pY0ZpbHRlcnNFbmFibGVkIiwidHJhbnNmb3JtVmVydGljYWwiLCJtZXJnZWRSZXN1bHRzIiwidW5pdmVyc2FsU2VhcmNoIiwidHJhbnNmb3JtIiwibmFtZXNwYWNlIiwicXVlcnlVbml2ZXJzYWwiLCJxdWVyeVZlcnRpY2FsIiwicXVlcnlGaWx0ZXIiLCJzdWJtaXRRdWVzdGlvbiIsInN1Ym1pdHRlZCIsImV2dCIsImNiIiwib24iLCJDb21wb25lbnRNYW5hZ2VyIiwic2V0SW5zdGFuY2UiLCJnZXRJbnN0YW5jZSIsIl9jb21wb25lbnRSZWdpc3RyeSIsIl9hY3RpdmVDb21wb25lbnRzIiwiX2NvcmUiLCJfcmVuZGVyZXIiLCJfYW5hbHl0aWNzUmVwb3J0ZXIiLCJyZW5kZXJlciIsImNvcmUiLCJyZXBvcnRlciIsImNvbXBvbmVudENsYXp6IiwidHlwZSIsImNvbXBvbmVudFR5cGUiLCJhbmFseXRpY3NSZXBvcnRlciIsImNvbXBvbmVudE1hbmFnZXIiLCJjb21wb25lbnRDbGFzcyIsImFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCIsInNvbWUiLCJjIiwiaW5pdCIsInNldFN0YXRlIiwib2ZmIiwiZmluZEluZGV4Iiwic3BsaWNlIiwiZmluZCIsImNvbnN0cnVjdG9yIiwiaW5zdGFuY2UiLCJSZW5kZXJlciIsInRlbXBsYXRlIiwiSGFuZGxlYmFyc1JlbmRlcmVyIiwidGVtcGxhdGVzIiwiX2hhbmRsZWJhcnMiLCJfaGIiLCJfdGVtcGxhdGVzIiwiX3JlZ2lzdGVyQ3VzdG9tSGVscGVycyIsInJlZ2lzdGVySGVscGVyIiwiY29tcGlsZSIsInRlbXBsYXRlTmFtZSIsImUiLCJhcmcxIiwiYXJnMiIsImZuIiwiaW52ZXJzZSIsInBob25lTnVtYmVyU3RyaW5nIiwiY2xlYW5lZCIsImludGxDb2RlIiwiYXJncyIsImFyZ3VtZW50cyIsInJvb3QiLCJ2IiwiUmVuZGVyZXJzIiwiU09ZIiwiSGFuZGxlYmFycyIsImRvY3VtZW50IiwiRE9NIiwiZCIsInAiLCJodG1sIiwiY29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImZyYWciLCJjcmVhdGVSYW5nZSIsImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCIsImFwcGVuZENoaWxkIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwicGFyZW50Iiwic2VsZWN0b3IiLCJIVE1MRWxlbWVudCIsIldpbmRvdyIsIkhUTUxEb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVhZHlTdGF0ZSIsImVsIiwib3B0c19kYXRhIiwibm9kZSIsInByb3BzIiwiYWRkQ2xhc3MiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJjbGFzc05hbWUiLCJjbGFzc2VzIiwibGVuIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwic3R5bGVzIiwicHJvcCIsInN0eWxlIiwiYXR0ciIsInNldEF0dHJpYnV0ZSIsImF0dHJzIiwic2V0dGluZ3MiLCJFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uY2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3R4dCIsInRhcmdldCIsImlzRXF1YWxOb2RlIiwibWF0Y2hlcyIsInBhcmVudE5vZGUiLCJFdmVudEVtaXR0ZXIiLCJfbGlzdGVuZXJzIiwibGlzdGVuZXJzIiwia2VlcCIsIlN0YXRlIiwiX3N0YXRlIiwib3B0VmFsIiwiX3NldCIsImVtaXQiLCJvcHRQcm9wIiwiQW5hbHl0aWNzRXZlbnQiLCJldmVudFR5cGUiLCJ0b1VwcGVyQ2FzZSIsIkFuYWx5dGljc1JlcG9ydGVyIiwiYnVzaW5lc3NJZCIsImdsb2JhbE9wdGlvbnMiLCJfYnVzaW5lc3NJZCIsIl9nbG9iYWxPcHRpb25zIiwic2V0UXVlcnlJZCIsImFkZE9wdGlvbnMiLCJiZWFjb24iLCJ0b0FwaUV2ZW50IiwiTW9kdWxlRGF0YSIsIl9pZCIsIl9oaXN0b3J5IiwiX2RhdGEiLCJjYXB0dXJlUHJldmlvdXMiLCJzaGlmdCIsInByZXZpb3VzIiwiX3ByZXZpb3VzIiwicG9wIiwiR2xvYmFsU3RvcmFnZSIsIl9tb2R1bGVEYXRhQ29udGFpbmVyIiwiX2Z1dHVyZUxpc3RlbmVycyIsIl9pbml0RGF0YUNvbnRhaW5lciIsIl9hcHBseUZ1dHVyZUxpc3RlbmVycyIsImRhdGFLZXkiLCJzdGFydHNXaXRoIiwibW9kdWxlRGF0YSIsImZ1dHVyZXMiLCJmdXR1cmUiLCJDb21wb25lbnQiLCJfY29uZmlnIiwiX3R5cGUiLCJfcGFyZW50IiwiX2NoaWxkcmVuIiwic3RhdGUiLCJfYW5hbHl0aWNzT3B0aW9ucyIsImFuYWx5dGljc09wdGlvbnMiLCJfY29udGFpbmVyIiwiY3JlYXRlRWwiLCJjbGFzcyIsIl9jbGFzc05hbWUiLCJfcmVuZGVyIiwicmVuZGVyIiwiX3RlbXBsYXRlIiwiX3RlbXBsYXRlTmFtZSIsImRlZmF1bHRUZW1wbGF0ZU5hbWUiLCJfaXNNb3VudGVkIiwidHJhbnNmb3JtRGF0YSIsIm9uQ3JlYXRlIiwib25Nb3VudCIsIm9uVXBkYXRlIiwibW91bnQiLCJuZXdTdGF0ZSIsImNoaWxkQ29tcG9uZW50IiwiY3JlYXRlIiwiX3BhcmVudE9wdHMiLCJyZW1vdmUiLCJ1bk1vdW50IiwiZW1wdHkiLCJiZWZvcmVNb3VudCIsImFzSlNPTiIsIl9vbk1vdW50IiwiZG9tSG9va3MiLCJxdWVyeUFsbCIsIl9jcmVhdGVBbmFseXRpY3NIb29rIiwiYmluZCIsImNoaWxkIiwiYmVmb3JlUmVuZGVyIiwiZG9tQ29tcG9uZW50cyIsIl9jcmVhdGVTdWJjb21wb25lbnQiLCJhZnRlclJlbmRlciIsImRvbUNvbXBvbmVudCIsImRhdGFzZXQiLCJjaGlsZERhdGEiLCJhZGRDaGlsZCIsImNoaWxkSFRNTCIsImlzQW5hbHl0aWNzQXR0YWNoZWQiLCJldmVudHR5cGUiLCJldmVudGxhYmVsIiwiZXZlbnRvcHRpb25zIiwicmVwb3J0IiwiVGFiIiwiY29uZmlnSWQiLCJpc0ZpcnN0IiwiaXNBY3RpdmUiLCJ0YWJzQ29uZmlnIiwidGFicyIsInRhYiIsIk5hdmlnYXRpb25Db21wb25lbnQiLCJfdGFicyIsIl90YWJPcmRlciIsImdldERlZmF1bHRUYWJPcmRlciIsImdldFVybFBhcmFtcyIsIm1lcmdlVGFiT3JkZXIiLCJnZW5lcmF0ZVRhYlVybCIsImluY2x1ZGVzIiwidW5zaGlmdCIsIm90aGVyVGFiT3JkZXIiLCJ0YWJDb25maWciLCJGaWx0ZXIiLCJyZXNwb25zZUZpbHRlciIsImdyb3VwcyIsImdyb3VwRmlsdGVycyIsImZpZWxkIiwib3IiLCJhbmQiLCJfZnJvbU1hdGNoZXIiLCJtaW4iLCJsYXQiLCJsbmciLCJyYWRpdXMiLCJtYXRjaGVyIiwiU2VhcmNoQ29tcG9uZW50IiwiX2JhcktleSIsIl92ZXJ0aWNhbEtleSIsIl9mb3JtRWwiLCJmb3JtU2VsZWN0b3IiLCJfaW5wdXRFbCIsImlucHV0RWwiLCJsYWJlbFRleHQiLCJzdWJtaXRUZXh0Iiwic3VibWl0SWNvbiIsInByb21wdEhlYWRlciIsImF1dG9Gb2N1cyIsImF1dG9jb21wbGV0ZU9uTG9hZCIsInJlZGlyZWN0VXJsIiwicSIsIl9zZWFyY2hDb29sZG93biIsInNlYXJjaENvb2xkb3duIiwic2V0UXVlcnkiLCJmb2N1cyIsImluaXRTZWFyY2giLCJpbml0QXV0b0NvbXBsZXRlIiwiZm9ybSIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsImJsdXIiLCJpbnB1dFNlbGVjdG9yIiwiX2F1dG9jb21wbGV0ZSIsIm9yaWdpbmFsUXVlcnkiLCJvblN1Ym1pdCIsInRyaWdnZXIiLCJfdGhyb3R0bGVkIiwic2V0VGltZW91dCIsImFsbEZpbHRlcnMiLCJnZXRBbGwiLCJ0b3RhbEZpbHRlciIsImdldEFjdGl2ZUNvbXBvbmVudCIsIkZpbHRlclNlYXJjaENvbXBvbmVudCIsImlucHV0S2V5IiwiX3N0b3JlT25DaGFuZ2UiLCJzdG9yZU9uQ2hhbmdlIiwic2VhcmNoVGV4dCIsImlzRmlsdGVyU2VhcmNoIiwib3JpZ2luYWxGaWx0ZXIiLCJmcm9tUmVzcG9uc2UiLCJzZXRGaWx0ZXIiLCJLZXlzIiwiQkFDS1NQQUNFIiwiVEFCIiwiRU5URVIiLCJTSElGVCIsIkNUUkwiLCJBTFQiLCJFU0NBUEUiLCJMRUZUIiwiUklHSFQiLCJVUCIsIkRPV04iLCJMRUZUX09TX0tFWSIsIlJJR0hUX09TX0tFWSIsIlNFTEVDVF9LRVkiLCJBdXRvQ29tcGxldGVDb21wb25lbnQiLCJfYXV0b2NvbXBsZXRlRWxzIiwiYXV0b0NvbXBsZXRlRWxzIiwiX29yaWdpbmFsUXVlcnkiLCJfc2VjdGlvbkluZGV4IiwiX3Jlc3VsdEluZGV4IiwiX2F1dG9Gb2N1cyIsIl9vblN1Ym1pdCIsImhhc1Jlc3VsdHMiLCJzZWN0aW9uSW5kZXgiLCJyZXN1bHRJbmRleCIsInF1ZXJ5SW5wdXQiLCJhdHRyaWJ1dGVzIiwiYXV0b2NvbXBsZXRlIiwiYXV0b2NvcnJlY3QiLCJzcGVsbGNoZWNrIiwiY2xvc2UiLCJyZXNldCIsImF1dG9Db21wbGV0ZSIsImhhbmRsZU5hdmlnYXRlUmVzdWx0cyIsImtleUNvZGUiLCJoYW5kbGVTdWJtaXRSZXN1bHQiLCJkZWxlZ2F0ZSIsInNob3J0IiwidXBkYXRlUXVlcnkiLCJoYW5kbGVUeXBpbmciLCJ1cGRhdGVTdGF0ZSIsIm9wdFZhbHVlIiwicXVlcnlFbCIsImlnbm9yZWRLZXlzIiwiYXV0b0NvbXBsZXRlRmlsdGVyIiwiYXV0b0NvbXBsZXRlVmVydGljYWwiLCJhdXRvQ29tcGxldGVVbml2ZXJzYWwiLCJGYWNldCIsImZsYXRGaWx0ZXJzIiwiZmxhdE1hcCIsIiRvciIsIkZpbHRlckJveENvbXBvbmVudCIsIl9maWx0ZXJDb25maWdzIiwiX3NlYXJjaE9uQ2hhbmdlIiwic2VhcmNoT25DaGFuZ2UiLCJfYXBwbHlCdXR0b25TZWxlY3RvciIsImFwcGx5QnV0dG9uU2VsZWN0b3IiLCJfZmlsdGVyQ29tcG9uZW50cyIsIl9maWx0ZXJzIiwiX2lzRHluYW1pYyIsImlzRHluYW1pYyIsImZpbHRlckNvbmZpZ3MiLCJzaG93QXBwbHlCdXR0b24iLCJvbkNoYW5nZSIsIm9uRmlsdGVyQ2hhbmdlIiwiZ2V0RmlsdGVyIiwiYnV0dG9uIiwiX3NhdmVGaWx0ZXJzVG9TdG9yYWdlIiwiX3NlYXJjaCIsInZhbGlkRmlsdGVycyIsImNvbWJpbmVkRmlsdGVyIiwiZnJvbUZpbHRlcnMiLCJzZXRGYWNldEZpbHRlciIsIlNVUFBPUlRFRF9DT05UUk9MUyIsIkZpbHRlck9wdGlvbnNDb21wb25lbnQiLCJjb250cm9sIiwicHJldmlvdXNPcHRpb25zIiwic2VsZWN0ZWRPcHRpb25zIiwiX29wdGlvbnMiLCJfY29udHJvbCIsIl9vcHRpb25TZWxlY3RvciIsIm9wdGlvblNlbGVjdG9yIiwiX29uQ2hhbmdlIiwiX2xhYmVsIiwidG9Mb3dlckNhc2UiLCJfdXBkYXRlT3B0aW9uIiwicGFyc2VJbnQiLCJjaGVja2VkIiwiX2J1aWxkRmlsdGVyIiwiZWxlbWVudHMiLCJfYXBwbHlGaWx0ZXIiLCJlcXVhbCIsImdyb3VwIiwiUmFuZ2VGaWx0ZXJDb21wb25lbnQiLCJfZmllbGQiLCJtaW5WYWwiLCJtYXhWYWwiLCJfcmFuZ2UiLCJpbml0aWFsTWluIiwiaW5pdGlhbE1heCIsIl90aXRsZSIsIl9taW5MYWJlbCIsIm1pbkxhYmVsIiwiX21heExhYmVsIiwibWF4TGFiZWwiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwiX3VwZGF0ZVJhbmdlIiwiaW5jbHVzaXZlUmFuZ2UiLCJEYXRlUmFuZ2VGaWx0ZXJDb21wb25lbnQiLCJfaXNFeGNsdXNpdmUiLCJpc0V4Y2x1c2l2ZSIsInRvZGF5IiwiRGF0ZSIsInRvZGF5U3RyaW5nIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsInBhZFN0YXJ0IiwiZ2V0RGF0ZSIsIm1pbkRhdGUiLCJtYXhEYXRlIiwiX2RhdGUiLCJkYXRlTWluIiwiZGF0ZU1heCIsImRhdGUiLCJleGNsdXNpdmVSYW5nZSIsIkR5bmFtaWNGaWx0ZXJzQ29tcG9uZW50IiwiX2ZpZWxkQ29udHJvbHMiLCJmaWVsZENvbnRyb2xzIiwiX2ZpbHRlcmJveCIsImVuYWJsZUR5bmFtaWNGaWx0ZXJzIiwiTUVURVJTX1BFUl9NSUxFIiwiREVGQVVMVF9DT05GSUciLCJnZW9CdXR0b25JY29uIiwiZ2VvQnV0dG9uVGV4dCIsImVuYWJsZWRUZXh0IiwibG9hZGluZ1RleHQiLCJlcnJvclRleHQiLCJidXR0b25TZWxlY3RvciIsIkdlb0xvY2F0aW9uQ29tcG9uZW50IiwicGxhY2Vob2xkZXIiLCJfZW5hYmxlZCIsImdlb0xvYWRpbmciLCJnZW9FcnJvciIsImdlb0VuYWJsZWQiLCJnZW9WYWx1ZSIsImdlb1BsYWNlaG9sZGVyIiwiX2luaXRBdXRvQ29tcGxldGUiLCJfdG9nZ2xlR2VvRmlsdGVyIiwiX3NhdmVEYXRhVG9TdG9yYWdlIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsImRlbGV0ZSIsImNvb3JkcyIsImFjY3VyYWN5IiwiTWF0aCIsIkV2ZW50VHlwZXMiLCJUSFVNQlNfVVAiLCJUSFVNQlNfRE9XTiIsIkRpcmVjdEFuc3dlckNvbXBvbmVudCIsImZvcm1FbCIsIl90aHVtYnNVcFNlbGVjdG9yIiwidGh1bWJzVXBTZWxlY3RvciIsIl90aHVtYnNEb3duU2VsZWN0b3IiLCJ0aHVtYnNEb3duU2VsZWN0b3IiLCJfdmlld0RldGFpbHNUZXh0Iiwidmlld0RldGFpbHNUZXh0IiwiaGFzU3RhdGUiLCJjaGVja2VkVmFsdWUiLCJyZXBvcnRRdWFsaXR5IiwiZXZlbnRPcHRpb25zIiwic2VhcmNoZXIiLCJjdGFMYWJlbCIsImlzR29vZCIsIlJlc3VsdHNJdGVtQ29tcG9uZW50IiwiX3ZlcnRpY2FsQ29uZmlnSWQiLCJfaXNVbml2ZXJzYWwiLCJpc1VuaXZlcnNhbCIsIkxvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQiLCJFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IiwiUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQiLCJNYXBQcm92aWRlciIsIl9oZWlnaHQiLCJoZWlnaHQiLCJfd2lkdGgiLCJ3aWR0aCIsIl96b29tIiwiem9vbSIsIl9kZWZhdWx0UG9zaXRpb24iLCJkZWZhdWx0UG9zaXRpb24iLCJfc2hvd0VtcHR5TWFwIiwic2hvd0VtcHR5TWFwIiwiX21hcCIsIl9pc0xvYWRlZCIsIl9vblBpbkNsaWNrIiwib25QaW5DbGljayIsIl9vbkxvYWRlZCIsIm9uTG9hZGVkIiwiX3BpbkNvbmZpZyIsInBpbiIsIkRFRkFVTFRfUElOX0NPTkZJRyIsImlzTG9hZGVkIiwibWFwRGF0YSIsIm1hcmtlcnMiLCJsb2NhdGlvblRvSXRlbSIsIm0iLCJjb2xsYXBzZWRNYXJrZXJzIiwiY29sbGFwc2VkTWFya2VyIiwiaWNvbiIsImFuY2hvciIsInN2ZyIsInNjYWxlZFNpemUiLCJsYWJlbFR5cGUiLCJHb29nbGVNYXBQcm92aWRlciIsIl9jbGllbnRJZCIsImNsaWVudElkIiwiX3NpZ25hdHVyZSIsInNpZ25hdHVyZSIsImhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMiLCJvbkxvYWQiLCJzY3JpcHQiLCJvbmxvYWQiLCJhc3luYyIsInNyYyIsImdlbmVyYXRlQ3JlZGVudGlhbHMiLCJnb29nbGVNYXBNYXJrZXJDb25maWdzIiwiR29vZ2xlTWFwTWFya2VyQ29uZmlnIiwiZW5jb2RlZE1hcmtlcnMiLCJzZXJpYWxpemUiLCJfaXNTdGF0aWMiLCJjc3MiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiYm91bmRzIiwiTGF0TG5nQm91bmRzIiwiX2NvbGxhcHNlTWFya2VycyIsIm1hcmtlciIsIk1hcmtlciIsImFkZExpc3RlbmVyIiwiZXh0ZW5kIiwiZml0Qm91bmRzIiwic2V0Q2VudGVyIiwiTGF0TG5nIiwic2VyaWFsaXplZE1hcmtlcnMiLCJwaW5Db25maWciLCJwaW5Db25maWdPYmoiLCJQb2ludCIsIngiLCJ5IiwiU2l6ZSIsInciLCJoIiwiTWFwQm94TWFwUHJvdmlkZXIiLCJtYXBib3hnbCIsImFjY2Vzc1Rva2VuIiwicmVsIiwibWFwYm94TWFwTWFya2VyQ29uZmlncyIsIk1hcEJveE1hcmtlckNvbmZpZyIsImNlbnRlciIsIm1hcENlbnRlciIsImdldENlbnRlck1hcmtlciIsIndyYXBwZXIiLCJMbmdMYXQiLCJzZXRMbmdMYXQiLCJhZGRUbyIsImdldEVsZW1lbnQiLCJzdGF0aWNNYXBQaW4iLCJQcm92aWRlclR5cGVzIiwiTWFwQ29tcG9uZW50IiwiX21hcFByb3ZpZGVyIiwibWFwUHJvdmlkZXIiLCJpc1N0YXRpYyIsImdldFByb3ZpZGVySW5zdGFuY2UiLCJzZXRUZW1wbGF0ZSIsImdlbmVyYXRlU3RhdGljIiwibG9hZEpTIiwiUmVzdWx0VHlwZSIsIkVWRU5UIiwiTE9DQVRJT04iLCJQRU9QTEUiLCJSZXN1bHRzQ29tcG9uZW50IiwiX2l0ZW1Db25maWciLCJnbG9iYWwiLCJyZW5kZXJJdGVtIiwiaXRlbVRlbXBsYXRlIiwic2V0U2VhcmNoTGltaXQiLCJjb25maWd1cmVJdGVtIiwiX3VuaXZlcnNhbFVybCIsInVuaXZlcnNhbFVybCIsImlzUHJlU2VhcmNoIiwiaXNTZWFyY2hMb2FkaW5nIiwiaXNTZWFyY2hDb21wbGV0ZSIsImluY2x1ZGVNYXAiLCJtYXBDb25maWciLCJzaG93Tm9SZXN1bHRzIiwic2V0SXRlbVJlbmRlciIsInNldEl0ZW1UZW1wbGF0ZSIsImNsYXp6IiwiZ2V0SXRlbUNvbXBvbmVudCIsImNvbXAiLCJuZXdPcHRzIiwiZ2xvYmFsQ29uZmlnIiwiaXRlbUNvbmZpZyIsImhhc0dsb2JhbFJlbmRlciIsImhhc0dsb2JhbFRlbXBsYXRlIiwic2V0UmVuZGVyIiwiQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudCIsIl9zZWxlY3RvckJhc2UiLCJzZWxlY3RvckJhc2UiLCJjb2xsYXBzZWRDbGFzcyIsImFjY29yZGlvbkVscyIsImFjY29yZGlvbkVsIiwidG9nZ2xlRWwiLCJ0b2dnbGVTZWxlY3RvciIsImNvbnRlbnRFbCIsImJvZHlTZWxlY3RvciIsImNoYW5nZUhlaWdodCIsImhhbmRsZUNsaWNrIiwid3JhcHBlckVsIiwiaXNDb2xsYXBzZWQiLCJ0b2dnbGUiLCJjb250YWlucyIsInRhcmdldEVsIiwic2Nyb2xsSGVpZ2h0IiwiYnVpbGRTZWxlY3RvciIsIlVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQiLCJfbGltaXQiLCJnZXRDaGlsZENvbmZpZyIsInVzZUFjY29yZGlvbiIsImRlZmF1bHRDb25maWciLCJRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQiLCJ2YWxpZGF0ZUNvbmZpZyIsImJpbmRBbmFseXRpY3MiLCJiaW5kRm9ybVN1Ym1pdCIsInF1ZXN0aW9uVGV4dEVsIiwiZm9ybURhdGEiLCJ2YWxpZGF0ZVJlcXVpcmVkIiwibGFuZ3VhZ2UiLCJpbnB1dEZpZWxkcyIsIm9iaiIsIlNWR0ljb24iLCJwYXRoIiwiY29tcGxleENvbnRlbnRzIiwidmlld0JveCIsImNvbnRlbnRzIiwicGF0aERlZmluaXRpb24iLCJpY29uc0FycmF5IiwidGh1bWJJY29uIiwicmVjZWlwdEljb24iLCJwYW50aGVvbkljb24iLCJtaWNJY29uIiwiZGlyZWN0aW9uc0ljb24iLCJjYWxlbmRhckljb24iLCJjYWxsb3V0SWNvbiIsImluZm9JY29uIiwiYnJpZWZjYXNlSWNvbiIsImthYm9iSWNvbiIsInBlcnNvbkljb24iLCJtYWduaWZ5aW5nR2xhc3NJY29uIiwib2ZmaWNlSWNvbiIsImxpbmtJY29uIiwid2luZG93SWNvbiIsInBob25lSWNvbiIsInRhZ0ljb24iLCJkb2N1bWVudEljb24iLCJjaGV2cm9uSWNvbiIsInN1cHBvcnRJY29uIiwieWV4dEljb24iLCJwaW5JY29uIiwiZ2Vhckljb24iLCJsaWdodEJ1bGJJY29uIiwiSWNvbnMiLCJtYXJrdXAiLCJkZWZhdWx0Iiwic3Rhckljb24iLCJJY29uQ29tcG9uZW50IiwiaWNvbk5hbWUiLCJjdXN0b21JY29uIiwiaWNvblVybCIsIkNPTVBPTkVOVF9NQU5BR0VSIiwicmVnaXN0ZXIiLCJUZW1wbGF0ZUxvYWRlciIsIl90ZW1wbGF0ZVVybCIsInRlbXBsYXRlVXJsIiwiX2luaXQiLCJmZXRjaFRlbXBsYXRlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25lcnJvciIsImNvbnNvbGUiLCJsb2ciLCJFcnJvclJlcG9ydGVyIiwiZXJyIiwidG9Kc29uIiwiUGVyc2lzdGVudFN0b3JhZ2UiLCJfaGlzdG9yeVRpbWVyIiwiX3VwZGF0ZUxpc3RlbmVyIiwidXBkYXRlTGlzdGVuZXIiLCJfcmVzZXRMaXN0ZW5lciIsInJlc2V0TGlzdGVuZXIiLCJvbnBvcHN0YXRlIiwiX2NhbGxMaXN0ZW5lciIsIm5ld0RhdGEiLCJfdXBkYXRlSGlzdG9yeSIsImNsZWFyVGltZW91dCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJsaXN0ZW5lciIsImFsbFBhcmFtcyIsIkFuc3dlcnMiLCJjb21wb25lbnRzIiwiX29uUmVhZHkiLCJvblN0YXRlQ2hhbmdlIiwic2V0QWxsIiwic3Vic3RyIiwic2V0Q29yZSIsInNldFJlbmRlcmVyIiwic2V0QW5hbHl0aWNzUmVwb3J0ZXIiLCJvblJlYWR5IiwidXNlVGVtcGxhdGVzIiwidGVtcGxhdGVCdW5kbGUiLCJzdXBwcmVzc0Vycm9yUmVwb3J0cyIsIl9lcnJvclJlcG9ydGVyIiwiQU5TV0VSUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7O0VBRUE7O0VBRUE7OztFQUdBLElBQU1BLE9BQU8sR0FBRztFQUNkQyxFQUFBQSxHQUFHLEVBQUUsS0FEUztFQUVkQyxFQUFBQSxJQUFJLEVBQUUsTUFGUTtFQUdkQyxFQUFBQSxHQUFHLEVBQUUsS0FIUztFQUlkQyxFQUFBQSxNQUFNLEVBQUU7RUFKTSxDQUFoQjtFQU9BOzs7Ozs7TUFLcUJDOzs7Ozs7Ozs7O0VBQ25COzs7Ozs7MEJBTUtDLEtBQUtDLE1BQU1DLE1BQU07RUFDcEIsYUFBTyxLQUFLQyxPQUFMLENBQWFULE9BQU8sQ0FBQ0MsR0FBckIsRUFBMEIsS0FBS1MsWUFBTCxDQUFrQkosR0FBbEIsRUFBdUJDLElBQXZCLENBQTFCLEVBQXdEQyxJQUF4RCxDQUFQO0VBQ0Q7RUFFRDs7Ozs7Ozs7OzJCQU1NRixLQUFLQyxNQUFNQyxNQUFNO0VBQ3JCLGFBQU8sS0FBS0MsT0FBTCxDQUNM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