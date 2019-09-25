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
  var LIB_VERSION = 'v0.8.6';
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

        if (invertedSubstrings.length === 0) {
          return val;
        }

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
            'answersKey': this._answersKey,
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
            "class": config.container.substring(1, config.container.length)
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

      _classCallCheck(this, NavigationComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(NavigationComponent).call(this, config));
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
        var numBreakpoints = this._navBreakpoints.length;

        if (mainLinks.offsetWidth > navWidth) {
          this._navBreakpoints.push(mainLinks.offsetWidth);

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

        if (mainLinks.offsetWidth > navWidth || numBreakpoints > 0 && navWidth > this._navBreakpoints[numBreakpoints - 1]) {
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
        if (this.query && !this.redirectUrl) {
          this.core.setQuery(this.query);
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

        var queryEl = DOM.query(this._parent._container, this._inputEl);
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

      _this = _possibleConstructorReturn(this, _getPrototypeOf(GeoLocationComponent).call(this, _objectSpread({}, DEFAULT_CONFIG, {}, config)));
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

  var iconsArray = [thumbIcon, receiptIcon, pantheonIcon, micIcon, directionsIcon, calendarIcon, calloutIcon, infoIcon, briefcaseIcon, kabobIcon, personIcon, magnifyingGlassIcon, officeIcon, linkIcon, windowIcon, phoneIcon, tagIcon, documentIcon, chevronIcon, supportIcon, yextIcon, pinIcon, gearIcon, lightBulbIcon];
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
        request.get()["catch"](console.err);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2Vycy11bWQuanMiLCJzb3VyY2VzIjpbInNyYy9jb3JlL2h0dHAvaHR0cHJlcXVlc3Rlci5qcyIsInNyYy9jb3JlL2NvbnN0YW50cy5qcyIsInNyYy91aS9kb20vc2VhcmNocGFyYW1zLmpzIiwic3JjL2NvcmUvaHR0cC9hcGlyZXF1ZXN0LmpzIiwic3JjL2NvcmUvZXJyb3JzL2Vycm9ycy5qcyIsInNyYy9jb3JlL3NlYXJjaC9zZWFyY2hhcGkuanMiLCJzcmMvY29yZS9tb2RlbHMvYXV0b2NvbXBsZXRlZGF0YS5qcyIsInNyYy9jb3JlL3NlYXJjaC9hdXRvY29tcGxldGVkYXRhdHJhbnNmb3JtZXIuanMiLCJzcmMvY29yZS9zZWFyY2gvYXV0b2NvbXBsZXRlYXBpLmpzIiwic3JjL2NvcmUvc2VhcmNoL3F1ZXN0aW9uYW5zd2VyYXBpLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9zZWFyY2hzdGF0ZXMuanMiLCJzcmMvY29yZS9tb2RlbHMvcmVzdWx0LmpzIiwic3JjL2NvcmUvbW9kZWxzL3Jlc3VsdGZhY3RvcnkuanMiLCJzcmMvY29yZS9tb2RlbHMvc2VjdGlvbi5qcyIsInNyYy9jb3JlL21vZGVscy91bml2ZXJzYWxyZXN1bHRzLmpzIiwic3JjL2NvcmUvbW9kZWxzL2RpcmVjdGFuc3dlci5qcyIsInNyYy9jb3JlL21vZGVscy9uYXZpZ2F0aW9uLmpzIiwic3JjL2NvcmUvbW9kZWxzL3ZlcnRpY2FscmVzdWx0cy5qcyIsInNyYy9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMuanMiLCJzcmMvY29yZS9tb2RlbHMvZHluYW1pY2ZpbHRlcnMuanMiLCJzcmMvY29yZS9zZWFyY2gvc2VhcmNoZGF0YXRyYW5zZm9ybWVyLmpzIiwic3JjL2NvcmUvbW9kZWxzL3F1ZXN0aW9uc3VibWlzc2lvbi5qcyIsInNyYy9jb3JlL2NvcmUuanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnRtYW5hZ2VyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9yZW5kZXJlci5qcyIsInNyYy91aS9yZW5kZXJpbmcvaGFuZGxlYmFyc3JlbmRlcmVyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9jb25zdC5qcyIsInNyYy91aS9kb20vZG9tLmpzIiwic3JjL2NvcmUvZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL3N0YXRlLmpzIiwic3JjL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50LmpzIiwic3JjL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc3JlcG9ydGVyLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9tb2R1bGVkYXRhLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9nbG9iYWxzdG9yYWdlLmpzIiwic3JjL2NvcmUvaW5kZXguanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb25jb21wb25lbnQuanMiLCJzcmMvY29yZS9tb2RlbHMvZmlsdGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3NlYXJjaC9maWx0ZXJzZWFyY2hjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9zZWFyY2gvYXV0b2NvbXBsZXRlY29tcG9uZW50LmpzIiwic3JjL2NvcmUvbW9kZWxzL2ZhY2V0LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJib3hjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcm9wdGlvbnNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL3JhbmdlZmlsdGVyY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9kYXRlcmFuZ2VmaWx0ZXJjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2R5bmFtaWNmaWx0ZXJzY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9nZW9sb2NhdGlvbmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvZGlyZWN0YW5zd2VyY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvbG9jYXRpb25yZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvZXZlbnRyZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvcGVvcGxlcmVzdWx0c2l0ZW1jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvcHJvdmlkZXJzL21hcHByb3ZpZGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL3Byb3ZpZGVycy9nb29nbGVtYXBwcm92aWRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9wcm92aWRlcnMvbWFwYm94bWFwcHJvdmlkZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvbWFwY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHRzY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9hY2NvcmRpb25yZXN1bHRzY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy91bml2ZXJzYWxyZXN1bHRzY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcXVlc3Rpb25zL3F1ZXN0aW9uc3VibWlzc2lvbmNvbXBvbmVudC5qcyIsInNyYy91aS9pY29ucy9pY29uLmpzIiwic3JjL3VpL2ljb25zL3RodW1iLmpzIiwic3JjL3VpL2ljb25zL3JlY2VpcHQuanMiLCJzcmMvdWkvaWNvbnMvcGFudGhlb24uanMiLCJzcmMvdWkvaWNvbnMvbWljLmpzIiwic3JjL3VpL2ljb25zL2RpcmVjdGlvbnMuanMiLCJzcmMvdWkvaWNvbnMvY2FsZW5kYXIuanMiLCJzcmMvdWkvaWNvbnMvY2FsbG91dC5qcyIsInNyYy91aS9pY29ucy9pbmZvLmpzIiwic3JjL3VpL2ljb25zL2JyaWVmY2FzZS5qcyIsInNyYy91aS9pY29ucy9rYWJvYi5qcyIsInNyYy91aS9pY29ucy9wZXJzb24uanMiLCJzcmMvdWkvaWNvbnMvbWFnbmlmeWluZ19nbGFzcy5qcyIsInNyYy91aS9pY29ucy9vZmZpY2UuanMiLCJzcmMvdWkvaWNvbnMvbGluay5qcyIsInNyYy91aS9pY29ucy93aW5kb3cuanMiLCJzcmMvdWkvaWNvbnMvcGhvbmUuanMiLCJzcmMvdWkvaWNvbnMvdGFnLmpzIiwic3JjL3VpL2ljb25zL2RvY3VtZW50LmpzIiwic3JjL3VpL2ljb25zL2NoZXZyb24uanMiLCJzcmMvdWkvaWNvbnMvc3VwcG9ydC5qcyIsInNyYy91aS9pY29ucy95ZXh0LmpzIiwic3JjL3VpL2ljb25zL3Bpbi5qcyIsInNyYy91aS9pY29ucy9nZWFyLmpzIiwic3JjL3VpL2ljb25zL2xpZ2h0X2J1bGIuanMiLCJzcmMvdWkvaWNvbnMvc3Rhci5qcyIsInNyYy91aS9pY29ucy9pbmRleC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ljb25zL2ljb25jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb25zdC5qcyIsInNyYy91aS9yZW5kZXJpbmcvdGVtcGxhdGVsb2FkZXIuanMiLCJzcmMvdWkvaW5kZXguanMiLCJzcmMvY29yZS9lcnJvcnMvZXJyb3JyZXBvcnRlci5qcyIsInNyYy91aS9zdG9yYWdlL3BlcnNpc3RlbnRzdG9yYWdlLmpzIiwic3JjL2Fuc3dlcnMtdW1kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAbW9kdWxlIEh0dHBSZXF1ZXN0ZXIgKi9cblxuLyogZ2xvYmFsIGZldGNoICovXG5cbi8qKlxuICogVHlwZXMgb2YgSFRUUCByZXF1ZXN0c1xuICovXG5jb25zdCBNZXRob2RzID0ge1xuICBHRVQ6ICdnZXQnLFxuICBQT1NUOiAncG9zdCcsXG4gIFBVVDogJ3B1dCcsXG4gIERFTEVURTogJ2RlbGV0ZSdcbn07XG5cbi8qKlxuICogSHR0cFJlcXVlc3RlciBpcyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb24gb2YgQUpBWFxuICogcmVsYXRlZCBtYXR0ZXJzLiBJdCdzIHVzZWQgdG8gbWFrZSBhbGwgdHlwZXMgb2YgbmV0d29yayByZXF1ZXN0c1xuICogYW5kIGV4cG9zZXMgYSBwcm9taXNlIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHR0cFJlcXVlc3RlciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBHRVQgSFRUUCByZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBwcm92aWRlIChnZXRzIGVuY29kZWQgaW50byB0aGUgVVJMKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBDb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgKi9cbiAgZ2V0ICh1cmwsIGRhdGEsIG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KE1ldGhvZHMuR0VULCB0aGlzLmVuY29kZVBhcmFtcyh1cmwsIGRhdGEpLCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBQT1NUIEhUVFAgcmVxdWVzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gcHJvdmlkZSAoZ2V0cyBlbmNvZGVkIGludG8gdGhlIFVSTClcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgQ29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICovXG4gIHBvc3QgKHVybCwgZGF0YSwgb3B0cykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXG4gICAgICBNZXRob2RzLlBPU1QsXG4gICAgICB1cmwsXG4gICAgICBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIGNyZWRlbnRpYWxzOiB1bmRlZmluZWRcbiAgICAgIH0sIG9wdHMpXG4gICAgKTtcbiAgfVxuXG4gIHJlcXVlc3QgKG1ldGhvZCwgdXJsLCBvcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICBtZXRob2QsXG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgfSwgb3B0cykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBiZWFjb24gdG8gdGhlIHByb3ZpZGVkIHVybCB3aGljaCB3aWxsIHNlbmQgYSBub24tYmxvY2tpbmcgcmVxdWVzdFxuICAgKiB0byB0aGUgc2VydmVyIHRoYXQgaXMgZ3VhcmFudGVlZCB0byBzZW5kIGJlZm9yZSBwYWdlIGxvYWQuIE5vIHJlc3BvbnNlIGlzIHJldHVybmVkLFxuICAgKiBzbyBiZWFjb25zIGFyZSBwcmltYXJpbHkgdXNlZCBmb3IgYW5hbHl0aWNzIHJlcG9ydGluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIHNlbmQgdGhlIGJlYWNvbiB0b1xuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSBUaGUgZGF0YSBwYXlsb2FkIHRvIHNlbmQgaW4gdGhlIGJlYWNvblxuICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSByZXF1ZXN0IGlzIHN1Y2Nlc3NmdWxseSBxdWV1ZWRcbiAgICovXG4gIGJlYWNvbiAodXJsLCBkYXRhKSB7XG4gICAgcmV0dXJuIG5hdmlnYXRvci5zZW5kQmVhY29uKHVybCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9XG5cbiAgZW5jb2RlUGFyYW1zICh1cmwsIHBhcmFtcykge1xuICAgIGxldCBoYXNQYXJhbSA9IHVybC5pbmRleE9mKCc/JykgPiAtMTtcblxuICAgIGxldCBzZWFyY2hRdWVyeSA9ICcnO1xuICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgIGlmICghaGFzUGFyYW0pIHtcbiAgICAgICAgaGFzUGFyYW0gPSB0cnVlO1xuICAgICAgICBzZWFyY2hRdWVyeSArPSAnPyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWFyY2hRdWVyeSArPSAnJic7XG4gICAgICB9XG5cbiAgICAgIHNlYXJjaFF1ZXJ5ICs9IGtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiB1cmwgKyBzZWFyY2hRdWVyeTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuLyoqIFRoZSBjdXJyZW50IGxpYiB2ZXJzaW9uLCByZXBvcnRlZCB3aXRoIGVycm9ycyBhbmQgYW5hbHl0aWNzICovXG5leHBvcnQgY29uc3QgTElCX1ZFUlNJT04gPSAndjAuOC42JztcblxuLyoqIFRoZSBiYXNlIHVybCBmb3IgdGhlIGFwaSBiYWNrZW5kICovXG5leHBvcnQgY29uc3QgQVBJX0JBU0VfVVJMID0gJ2h0dHBzOi8vbGl2ZWFwaS55ZXh0LmNvbSc7XG5cbi8qKiBUaGUgZGVmYXVsdCB1cmwgZm9yIGNvbXBpbGVkIGNvbXBvbmVudCB0ZW1wbGF0ZXMgKi9cbmV4cG9ydCBjb25zdCBDT01QSUxFRF9URU1QTEFURVNfVVJMID0gYGh0dHBzOi8vYXNzZXRzLnNpdGVzY2RuLm5ldC9hbnN3ZXJzLyR7TElCX1ZFUlNJT059L2Fuc3dlcnN0ZW1wbGF0ZXMuY29tcGlsZWQubWluLmpzYDtcblxuLyoqIFRoZSBiYXNlIHVybCBmb3IgdGhlIGFuYWx5dGljcyBiYWNrZW5kICAqL1xuZXhwb3J0IGNvbnN0IEFOQUxZVElDU19CQVNFX1VSTCA9ICdodHRwczovL3JlYWx0aW1lYW5hbHl0aWNzLnlleHQuY29tJztcbiIsIi8qKiBAbW9kdWxlIFNlYXJjaFBhcmFtcyAqL1xuXG4vKiBnbG9iYWwgd2luZG93ICovXG5cbi8qKlxuICogU2VhcmNoUGFyYW1zIGlzIGEgY2xhc3MgdG8gZ2V0IHRoZSBzZWFyY2ggcGFyYW1zIGluIGEgVVJMLlxuICogSXQgaXMgYSByZXBsYWNlbWVudCBmb3IgVVJMLnNlYXJjaFBhcmFtcyBhbmQgVVJMU2VhcmNoUGFyYW1zIGZvciBicm93c2VycyBsaWtlIElFMTFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoUGFyYW1zIHtcbiAgY29uc3RydWN0b3IgKHVybCkge1xuICAgIC8qKlxuICAgICAqIE1hcHBpbmcgb2YgYWxsIHF1ZXJ5IHBhcmFtZXRlcnMgaW4gdGhlIGdpdmVuIHVybCwgcXVlcnkgcGFyYW0gLT4gdmFsdWVcbiAgICAgKiBPbmx5IHVzZWQgaWYgVVJMU2VhcmNoUGFyYW1zIGRvZXMgbm90IGV4aXN0IGluIHRoZSB3aW5kb3dcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcGFyYW1zID0ge307XG5cbiAgICBpZiAod2luZG93ICYmIHdpbmRvdy5VUkxTZWFyY2hQYXJhbXMpIHtcbiAgICAgIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BhcmFtcyA9IHRoaXMucGFyc2UodXJsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcGFyc2UgY3JlYXRlcyBhIG1hcHBpbmcgb2YgYWxsIHF1ZXJ5IHBhcmFtcyBpbiBhIGdpdmVuIHVybFxuICAgKiBUaGUgcXVlcnkgcGFyYW0gdmFsdWVzIGFyZSBkZWNvZGVkIGJlZm9yZSBiZWluZyBwdXQgaW4gdGhlIG1hcFxuICAgKiBUaHJlZSB0eXBlcyBvZiBpbnB1dCBhcmUgc3VwcG9ydGVkXG4gICAqICAgKDEpIGZ1bGwgVVJMIGUuZy4gaHR0cDovL3d3dy55ZXh0LmNvbS8/cT1oZWxsb1xuICAgKiAgICgyKSBwYXJhbXMgd2l0aCA/IGUuZy4gP3E9aGVsbG9cbiAgICogICAoMSkgcGFyYW1zIHdpdGhvdXQgPyBlLmcuIHE9aGVsbG9cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IG1hcHBpbmcgZnJvbSBxdWVyeSBwYXJhbSAtPiB2YWx1ZSB3aGVyZSB2YWx1ZSBpcyAnJyBpZiBubyB2YWx1ZSBpcyBwcm92aWRlZFxuICAgKi9cbiAgcGFyc2UgKHVybCkge1xuICAgIGxldCBwYXJhbXMgPSB7fTtcbiAgICBsZXQgc2VhcmNoID0gdXJsO1xuXG4gICAgaWYgKHNlYXJjaCA9PT0gJycpIHtcbiAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfVxuXG4gICAgLy8gTm9ybWFsaXplIGFsbCB1cmwgaW5wdXRzIHRvIHN0cmluZyBvZiBxdWVyeSBwYXJhbXMgc2VwYXJhdGVkIGJ5ICZcbiAgICBpZiAodXJsLmluZGV4T2YoJz8nKSA+IC0xKSB7XG4gICAgICBzZWFyY2ggPSB1cmwuc2xpY2UodXJsLmluZGV4T2YoJz8nKSArIDEpO1xuICAgIH1cblxuICAgIGNvbnN0IGVuY29kZWRQYXJhbXMgPSBzZWFyY2guc3BsaXQoJyYnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuY29kZWRQYXJhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleVZhbCA9IGVuY29kZWRQYXJhbXNbaV0uc3BsaXQoJz0nKTtcbiAgICAgIGlmIChrZXlWYWwubGVuZ3RoID4gMSkge1xuICAgICAgICBwYXJhbXNba2V5VmFsWzBdXSA9IFNlYXJjaFBhcmFtcy5kZWNvZGUoa2V5VmFsWzFdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtc1trZXlWYWxbMF1dID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIHF1ZXJ5IHBhcmFtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgcXVlcnkgcGFyYW0ga2V5IHRvIGdldCB0aGUgdmFsdWUgb2ZcbiAgICogQHJldHVybiB7c3RyaW5nfSBwYXJhbSB2YWx1ZSwgbnVsbCBvdGhlcndpc2VcbiAgICovXG4gIGdldCAocXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuX3BhcmFtc1tTdHJpbmcocXVlcnkpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcGFyYW1zW3F1ZXJ5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXQgY2hhbmdlcyB0aGUgdmFsdWUgb2YgYSBnaXZlbiBxdWVyeSBwYXJhbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSB0aGUgcXVlcnkgcGFyYW0ga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSB0aGUgdmFsdWUgb2YgdGhlIHF1ZXJ5IHBhcmFtIHVwZGF0ZSB3aXRoXG4gICAqL1xuICBzZXQgKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5fcGFyYW1zW1N0cmluZyhuYW1lKV0gPSBTdHJpbmcodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIGhhcyBjaGVja3MgdG8gc2VlIGlmIHRoZSBnaXZlbiBxdWVyeSBwYXJhbSBrZXkgZXhpc3RzIGluIHRoZSBwYXJhbXMgb2JqZWN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgcXVlcnkgcGFyYW0gdG8gY2hlY2tcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgcXVlcnkgcGFyYW0gaXMgaW4gdGhlIHBhcmFtcyBvYmplY3QsIGZhbHNlIG8vd1xuICAgKi9cbiAgaGFzIChxdWVyeSkge1xuICAgIHJldHVybiBxdWVyeSBpbiB0aGlzLl9wYXJhbXM7XG4gIH1cblxuICAvKipcbiAgICogdG9TdHJpbmcgcmV0dXJucyBhIHVybCB3aXRoIGFsbCB0aGUgcXVlcnkgcGFyYW1zIGluIHRoZSBwYXJhbXMgb2JqZWN0ICh3aXRob3V0IGEgPylcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9TdHJpbmcgKCkge1xuICAgIGxldCBzdHJpbmcgPSBbXTtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fcGFyYW1zKSB7XG4gICAgICBzdHJpbmcucHVzaChgJHtrZXl9PSR7U2VhcmNoUGFyYW1zLmVuY29kZSh0aGlzLl9wYXJhbXNba2V5XSl9YCk7XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmcuam9pbignJicpO1xuICB9XG5cbiAgZW50cmllcyAoKSB7XG4gICAgbGV0IGVudHJpZXMgPSBbXTtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fcGFyYW1zKSB7XG4gICAgICBlbnRyaWVzLnB1c2goW2tleSwgdGhpcy5fcGFyYW1zW2tleV1dKTtcbiAgICB9XG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICAvKipcbiAgICogZGVjb2RlIHJldHVybnMgdGhlIGRlY29kZWQgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIHRoZSBzdHJpbmcgdG8gZGVjb2RlXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBkZWNvZGUgKHN0cmluZykge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyaW5nLnJlcGxhY2UoL1sgK10vZywgJyUyMCcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBkZWNvZGUgcmV0dXJucyB0aGUgZW5jb2RlZCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gc3RyaW5nIChlLmcuICsgLT4gJTJCKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIHRoZSBzdHJpbmcgdG8gZW5jb2RlXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBlbmNvZGUgKHN0cmluZykge1xuICAgIGxldCByZXBsYWNlID0ge1xuICAgICAgJyEnOiAnJTIxJyxcbiAgICAgIFwiJ1wiOiAnJTI3JyxcbiAgICAgICcoJzogJyUyOCcsXG4gICAgICAnKSc6ICclMjknLFxuICAgICAgJyUyMCc6ICcrJ1xuICAgIH07XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmcpLnJlcGxhY2UoL1shJygpXXwlMjAvZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICByZXR1cm4gcmVwbGFjZVttYXRjaF07XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEFwaVJlcXVlc3QgKi9cblxuaW1wb3J0IEh0dHBSZXF1ZXN0ZXIgZnJvbSAnLi9odHRwcmVxdWVzdGVyJztcbmltcG9ydCB7IEFQSV9CQVNFX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uL3VpL2RvbS9zZWFyY2hwYXJhbXMnOyAvLyBUT0RPIGlkZWFsbHkgdGhpcyB3b3VsZCBiZSBwYXNzZWQgaW4gYXMgYSBwYXJhbVxuXG4vKipcbiAqIEFwaVJlcXVlc3QgaXMgdGhlIGJhc2UgY2xhc3MgZm9yIGFsbCBBUEkgcmVxdWVzdHMuXG4gKiBJdCBkZWZpbmVzIGFsbCBvZiB0aGUgY29yZSBwcm9wZXJ0aWVzIHJlcXVpcmVkIHRvIG1ha2UgYSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaVJlcXVlc3Qge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3Rpb24gdXNlZCBmb3IgbWFraW5nIG5ldHdvcmsgcmVxdWVzdCBhbmQgaGFuZGxpbmcgZXJyb3JzXG4gICAgICogQHR5cGUge0h0dHBSZXF1ZXN0ZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9yZXF1ZXN0ZXIgPSBuZXcgSHR0cFJlcXVlc3RlcigpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhc2VVcmwgdG8gdXNlIGZvciBtYWtpbmcgYSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Jhc2VVcmwgPSBvcHRzLmJhc2VVcmwgfHwgQVBJX0JBU0VfVVJMO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGVuZHBvaW50IHRvIHVzZSBpbiB0aGUgdXJsIChhcHBlbmRlZCB0byB0aGUge2Jhc2VVcmx9KVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9lbmRwb2ludCA9IG9wdHMuZW5kcG9pbnQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBpS2V5ID0gb3B0cy5hcGlLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBBUEkgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVyc2lvbiA9IG9wdHMudmVyc2lvbiB8fCAyMDE5MDEwMTtcblxuICAgIC8qKlxuICAgICAqIEFkZGl0aW9uYWwgZGF0YSBwYXJhbXMgdGhhdCBhcmUgc2VudCBhbG9uZyB3aXRoIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3BhcmFtcyA9IG9wdHMucGFyYW1zIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCBjcmVhdGVzIGEgbmV3IGBHRVRgIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGUgcmVxdWVzdCBjbGFzc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGdldCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3Rlci5nZXQodGhpcy5fYmFzZVVybCArIHRoaXMuX2VuZHBvaW50LCB0aGlzLnBhcmFtcyh0aGlzLl9wYXJhbXMpKTtcbiAgfVxuXG4gIHBvc3QgKG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdGVyLnBvc3QodGhpcy5fYmFzZVVybCArIHRoaXMuX2VuZHBvaW50LCB0aGlzLnBhcmFtcyh0aGlzLl9wYXJhbXMpLCBvcHRzKTtcbiAgfVxuXG4gIHBhcmFtcyAocGFyYW1zKSB7XG4gICAgdmFyIGJhc2VQYXJhbXMgPSB7XG4gICAgICAndic6IHRoaXMuX3ZlcnNpb24sXG4gICAgICAnYXBpX2tleSc6IHRoaXMuX2FwaUtleVxuICAgIH07XG5cbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpKTtcblxuICAgIGlmICh1cmxQYXJhbXMuaGFzKCdiZXRhJykpIHtcbiAgICAgIGJhc2VQYXJhbXNbJ2JldGEnXSA9IHVybFBhcmFtcy5nZXQoJ2JldGEnKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYW55IHBhcmFtYXRlcnMgd2hvcyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC5cbiAgICAvL1xuICAgIC8vIE5PVEUoYmlsbHkpIFByb2JhYmx5IGJldHRlciB0byBiZSBleHBsaWNpdCBhYm91dCBob3cgdG8gaGFuZGxlIHRoaXMgYXQgdGhlIHJlcXVlc3QgYnVpbGRpbmcgbGV2ZWwsXG4gICAgLy8gYnV0IEkgY2FuJ3Qgc2VlIGFueSBjYXNlcyB3aGVyZSB3ZSdkIGV2ZXIgd2FudCB0byBzZW5kICd1bmRlZmluZWQnIGFzIGEgdmFsdWUgdG8gdGhlIHNlcnZlci5cbiAgICAvLyBTbyBpdCdzIHByb2JhYmx5IGZpbmUgdG8gJ2NsZWFuJyB0aGUgcGFyYW1zIG9iamVjdCBoZXJlXG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAocGFyYW1zW2tleV0gPT09IHVuZGVmaW5lZCB8fCBwYXJhbXNba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgcGFyYW1zW2tleV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihiYXNlUGFyYW1zLCBwYXJhbXMgfHwge30pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBFcnJvcnMgKi9cblxuLyoqXG4gKiBBbnN3ZXJzQmFzZUVycm9yIGlzIGFuIGV4dGVuc2lvbiBvZiB0aGUgYmFzZSBFcnJvciBvYmplY3QuXG4gKiBUaGlzIGlzIHRoZSBvYmplY3QgdGhhdCBpcyB1c2VkIHRvIHdoZW4gcmVwb3J0aW5nIHRvIHRoZSBzZXJ2ZXIuXG4gKiBAZXh0ZW5kcyBFcnJvclxuICpcbiAqIEVycm9yIGNvZGVzIGZhbGwgaW50byBvbmUgb2YgZm91ciBjYXRlZ29yaWVzOlxuICogMVhYIGVycm9yczogQmFzaWMgZXJyb3JzXG4gKiAyWFggZXJyb3JzOiBVSSBlcnJvcnNcbiAqIDNYWCBlcnJvcnM6IEVuZHBvaW50IGVycm9yc1xuICogNFhYIGVycm9yczogQ29yZSBlcnJvcnNcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNCYXNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChlcnJvckNvZGUsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMuZXJyb3JDb2RlID0gZXJyb3JDb2RlO1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLmJvdW5kYXJ5ID0gYm91bmRhcnk7XG4gICAgdGhpcy5jYXVzZWRCeSA9IGNhdXNlZEJ5O1xuICAgIHRoaXMucmVwb3J0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHRvSnNvbiAoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKGJ1aWx0aW5FcnJvciwgYm91bmRhcnkpIHtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcihidWlsdGluRXJyb3IubWVzc2FnZSwgYm91bmRhcnkpO1xuICAgIGVycm9yLnN0YWNrID0gYnVpbHRpbkVycm9yLnN0YWNrO1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNCYXNpY0Vycm9yIGlzIGEgd3JhcHBlciBhcm91bmQgYWxsIHRoZSBidWlsdC1pbiBlcnJvcnNcbiAqIGUuZy4gdW5kZWZpbmVkIHZhcmlhYmxlcywgaW5jb3JyZWN0IHN5bnRheCwgdHlwZXMsIG1pc3NpbmcgbWV0aG9kcywgZXRjLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0Jhc2ljRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDEwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNVaUVycm9yIHVzZWQgZm9yIHRoaW5ncyBsaWtlIERPTSBlcnJvcnMuXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzVWlFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoMjAwLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc0NvbXBvbmVudEVycm9yIGlzIHVzZWQgZm9yIENvbXBvbmVudCBvcmllbnRlZCBlcnJvcnNcbiAqIGUuZy4gZmFpbHVyZSB0byByZW5kZXIsIG9yIGNhdGNoaW5nIHVua25vd25zLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0NvbXBvbmVudEVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBjb21wb25lbnQsIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoMjAxLCBtZXNzYWdlLCBjb21wb25lbnQsIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNFbmRwb2ludEVycm9yIHJlcHJlc2VudHMgYWxsIG5ldHdvcmsgcmVsYXRlZCBlcnJvcnMuXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzRW5kcG9pbnRFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoMzAwLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc0NvcmVFcnJvciByZXByZXNlbnRzIGVycm9ycyBmb3IgcHJlY29uZGl0aW9uIGZhaWx1cmVzIGluIHRoZSBjb3JlIGxpYnJhcnlcbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNDb3JlRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDQwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNTdG9yYWdlRXJyb3IgcmVwcmVzZW50cyBzdG9yYWdlIHJlbGF0ZWQgZXJyb3JzXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzU3RvcmFnZUVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBzdG9yYWdlS2V5LCBkYXRhLCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDQwMSwgbWVzc2FnZSwgJ1N0b3JhZ2UnLCBjYXVzZWRCeSk7XG4gICAgdGhpcy5zdG9yYWdlS2V5ID0gc3RvcmFnZUtleTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc0FuYWx5dGljc0Vycm9yIGlzIHVzZWQgZm9yIGVycm9ycyB3aGVuIHJlcG9ydGluZyBhbmFseXRpY3NcbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNBbmFseXRpY3NFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgZXZlbnQsIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoNDAyLCBtZXNzYWdlLCAnQW5hbHl0aWNzJywgY2F1c2VkQnkpO1xuICAgIHRoaXMuZXZlbnQgPSBldmVudDtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VhcmNoQXBpICovXG5cbmltcG9ydCBBcGlSZXF1ZXN0IGZyb20gJy4uL2h0dHAvYXBpcmVxdWVzdCc7XG5pbXBvcnQgeyBBbnN3ZXJzQmFzaWNFcnJvciwgQW5zd2Vyc0NvcmVFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvcnMnO1xuXG4vKipcbiAqIFNlYXJjaEFwaSBpcyB0aGUgQVBJIGZvciBkb2luZyB2YXJpb3VzIHR5cGVzIG9mIHNlYXJjaFxuICogb3ZlciB0aGUgbmV0d29yayAoZS5nLiB2ZXJ0aWNhbCBvciB1bml2ZXJzYWwpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEFwaSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFjb25maWcuYXBpS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0FwaSBLZXkgaXMgcmVxdWlyZWQnLCAnU2VhcmNoJyk7XG4gICAgfVxuICAgIHRoaXMuX2FwaUtleSA9IGNvbmZpZy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgQW5zd2VycyBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIWNvbmZpZy5hbnN3ZXJzS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0Fuc3dlcnMgS2V5IGlzIHJlcXVpcmVkJywgJ1NlYXJjaCcpO1xuICAgIH1cbiAgICB0aGlzLl9hbnN3ZXJzS2V5ID0gY29uZmlnLmFuc3dlcnNLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgQVBJIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnNpb24gPSBjb25maWcudmVyc2lvbiB8fCAyMDE5MDEwMSB8fCAyMDE5MDMwMTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBsb2NhbGUgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIWNvbmZpZy5sb2NhbGUpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignTG9jYWxlIGlzIHJlcXVpcmVkJywgJ1NlYXJjaCcpO1xuICAgIH1cbiAgICB0aGlzLl9sb2NhbGUgPSBjb25maWcubG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBpbiB0aGUgY29udGV4dCBvZiBhIHZlcnRpY2FsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbEtleSB2ZXJ0aWNhbCBJRCBmb3IgdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge29iamVjdH0gcXVlcnkgVGhlIHF1ZXJ5IGRldGFpbHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmlucHV0IFRoZSBpbnB1dCB0byBzZWFyY2ggZm9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5maWx0ZXIgVGhlIGZpbHRlciB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuZmFjZXRGaWx0ZXIgVGhlIGZhY2V0IGZpbHRlciB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlcnkubGltaXQgVGhlIG1heCBudW1iZXIgb2YgcmVzdWx0cyB0byBpbmNsdWRlLCBtYXggb2YgNTBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1ZXJ5Lm9mZnNldCBUaGUgcmVzdWx0cyBvZmZzZXQsIGZvciBmZXRjaGluZyBtb3JlIHJlc3VsdHMgb2YgdGhlIHNhbWUgcXVlcnlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmlkIFRoZSBxdWVyeSBJRCB0byB1c2UuIElmIHBhZ2luZyB3aXRoaW4gYSBxdWVyeSwgdGhlIHNhbWUgSUQgc2hvdWxkIGJlIHVzZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBxdWVyeS5pc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCBJZiB0cnVlLCBhc2tzIHRoZSBzZXJ2ZXIgdG8gcmV0dXJuIGR5bmFtaWMgZmlsdGVyc1xuICAgKi9cbiAgdmVydGljYWxTZWFyY2ggKHZlcnRpY2FsS2V5LCB7IGlucHV0LCBmaWx0ZXIsIGZhY2V0RmlsdGVyLCBsaW1pdCwgb2Zmc2V0LCBpZCwgaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQgfSkge1xuICAgIGlmIChsaW1pdCA+IDUwKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvcmVFcnJvcignUHJvdmlkZWQgc2VhcmNoIGxpbWl0IHVuc3VwcG9ydGVkJywgJ1NlYXJjaEFwaScpO1xuICAgIH1cblxuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy92ZXJ0aWNhbC9xdWVyeScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogaW5wdXQsXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgICAgJ2ZpbHRlcnMnOiBmaWx0ZXIsXG4gICAgICAgICdmYWNldEZpbHRlcnMnOiBmYWNldEZpbHRlcixcbiAgICAgICAgJ3ZlcnRpY2FsS2V5JzogdmVydGljYWxLZXksXG4gICAgICAgICdsaW1pdCc6IGxpbWl0LFxuICAgICAgICAnb2Zmc2V0Jzogb2Zmc2V0LFxuICAgICAgICAncXVlcnlJZCc6IGlkLFxuICAgICAgICAncmV0cmlldmVGYWNldHMnOiBpc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH1cblxuICB1bml2ZXJzYWxTZWFyY2ggKHF1ZXJ5U3RyaW5nKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL3F1ZXJ5JyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBxdWVyeVN0cmluZyxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlRGF0YSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVEYXRhIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIHRoaXMuc2VjdGlvbnMgPSBkYXRhLnNlY3Rpb25zIHx8IFtdO1xuICAgIHRoaXMucXVlcnlJZCA9IGRhdGEucXVlcnlJZCB8fCAnJztcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlKSB7XG4gICAgbGV0IHNlY3Rpb25zO1xuICAgIGlmIChyZXNwb25zZS5zZWN0aW9ucykge1xuICAgICAgc2VjdGlvbnMgPSByZXNwb25zZS5zZWN0aW9ucy5tYXAocyA9PiAoe1xuICAgICAgICBsYWJlbDogcy5sYWJlbCxcbiAgICAgICAgcmVzdWx0czogcy5yZXN1bHRzLm1hcChyID0+IG5ldyBBdXRvQ29tcGxldGVSZXN1bHQocikpXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlY3Rpb25zID0gW3sgcmVzdWx0czogcmVzcG9uc2UucmVzdWx0cy5tYXAociA9PiBuZXcgQXV0b0NvbXBsZXRlUmVzdWx0KHIpKSB9XTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBBdXRvQ29tcGxldGVEYXRhKHsgc2VjdGlvbnMsIHF1ZXJ5SWQ6IHJlc3BvbnNlLnF1ZXJ5SWQgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9Db21wbGV0ZVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICB0aGlzLmZpbHRlciA9IGRhdGEuZmlsdGVyIHx8IHt9O1xuICAgIHRoaXMuaGlnaGxpZ2h0ZWRWYWx1ZSA9IHRoaXMuaGlnaGxpZ2h0KGRhdGEpO1xuICAgIHRoaXMua2V5ID0gZGF0YS5rZXkgfHwgJyc7XG4gICAgdGhpcy5tYXRjaGVkU3Vic3RyaW5ncyA9IGRhdGEubWF0Y2hlZFN1YnN0cmluZ3MgfHwgW107XG4gICAgdGhpcy52YWx1ZSA9IGRhdGEudmFsdWUgfHwgJyc7XG4gICAgdGhpcy5zaG9ydFZhbHVlID0gZGF0YS5zaG9ydFZhbHVlIHx8IHRoaXMudmFsdWU7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIC8vIFRPRE8oamRlbGVybWUpOiBjb25zb2xpZGF0ZSB3aXRoIG90aGVyIGhpZ2hsaWdodCBmdW5jdGlvbnNcbiAgaGlnaGxpZ2h0IChkYXRhKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgc2hvcnRWYWx1ZSwgbWF0Y2hlZFN1YnN0cmluZ3MgfSA9IGRhdGE7XG4gICAgY29uc3QgdmFsID0gdmFsdWUgfHwgc2hvcnRWYWx1ZTtcblxuICAgIGlmICghbWF0Y2hlZFN1YnN0cmluZ3MgfHwgbWF0Y2hlZFN1YnN0cmluZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSBvdXIgaGlnaGxpZ2h0ZWQgc3Vic3RyaW5ncyBhcmUgc29ydGVkXG4gICAgbWF0Y2hlZFN1YnN0cmluZ3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGEub2Zmc2V0IDwgYi5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuXG4gICAgICBpZiAoYS5vZmZzZXQgPiBiLm9mZnNldCkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgICAvLyBJbnZlcnQgaGlnaGxpZ2h0ZWQgc3Vic3RyaW5nc1xuICAgIGNvbnN0IGludmVydGVkU3Vic3RyaW5ncyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRjaGVkU3Vic3RyaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc3Vic3RyaW5nID0gbWF0Y2hlZFN1YnN0cmluZ3NbaV07XG4gICAgICBjb25zdCBuZXh0T2Zmc2V0ID0gc3Vic3RyaW5nLm9mZnNldCArIHN1YnN0cmluZy5sZW5ndGg7XG4gICAgICBpZiAoaSA9PT0gMCAmJiBzdWJzdHJpbmcub2Zmc2V0ICE9PSAwKSB7XG4gICAgICAgIGludmVydGVkU3Vic3RyaW5ncy5wdXNoKHsgb2Zmc2V0OiAwLCBsZW5ndGg6IHN1YnN0cmluZy5vZmZzZXQgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWwubGVuZ3RoID4gbmV4dE9mZnNldCkge1xuICAgICAgICBpbnZlcnRlZFN1YnN0cmluZ3MucHVzaCh7XG4gICAgICAgICAgb2Zmc2V0OiBuZXh0T2Zmc2V0LFxuICAgICAgICAgIGxlbmd0aDogaSA8IG1hdGNoZWRTdWJzdHJpbmdzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgID8gbWF0Y2hlZFN1YnN0cmluZ3NbaSArIDFdLm9mZnNldCAtIG5leHRPZmZzZXRcbiAgICAgICAgICAgIDogdmFsLmxlbmd0aCAtIG5leHRPZmZzZXRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQnVpbGQgb3VyIG5ldyB2YWx1ZSBiYXNlZCBvbiB0aGUgaGlnaGxpZ2h0c1xuICAgIGxldCBoaWdobGlnaHRlZFZhbHVlID0gJyc7XG4gICAgbGV0IG5leHRTdGFydCA9IDA7XG5cbiAgICBpZiAoaW52ZXJ0ZWRTdWJzdHJpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGludmVydGVkU3Vic3RyaW5ncy5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IHN0YXJ0ID0gTnVtYmVyKGludmVydGVkU3Vic3RyaW5nc1tqXS5vZmZzZXQpO1xuICAgICAgbGV0IGVuZCA9IHN0YXJ0ICsgaW52ZXJ0ZWRTdWJzdHJpbmdzW2pdLmxlbmd0aDtcblxuICAgICAgaGlnaGxpZ2h0ZWRWYWx1ZSArPSBbdmFsLnNsaWNlKG5leHRTdGFydCwgc3RhcnQpLCAnPHN0cm9uZz4nLCB2YWwuc2xpY2Uoc3RhcnQsIGVuZCksICc8L3N0cm9uZz4nXS5qb2luKCcnKTtcblxuICAgICAgaWYgKGogPT09IGludmVydGVkU3Vic3RyaW5ncy5sZW5ndGggLSAxICYmIGVuZCA8IHZhbC5sZW5ndGgpIHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRWYWx1ZSArPSB2YWwuc2xpY2UoZW5kKTtcbiAgICAgIH1cblxuICAgICAgbmV4dFN0YXJ0ID0gZW5kO1xuICAgIH1cblxuICAgIHJldHVybiBoaWdobGlnaHRlZFZhbHVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIgKi9cblxuaW1wb3J0IEF1dG9Db21wbGV0ZURhdGEgZnJvbSAnLi4vbW9kZWxzL2F1dG9jb21wbGV0ZWRhdGEnO1xuXG4vKipcbiAqIEEgRGF0YSBUcmFuc2Zvcm1lciB0aGF0IHRha2VzIHRoZSByZXNwb25zZSBvYmplY3QgZnJvbSBhIEF1dG9Db21wbGV0ZSByZXF1ZXN0XG4gKiBBbmQgdHJhbnNmb3JtcyBpbiB0byBhIGZyb250LWVuZCBvcmllbnRlZCBkYXRhIHN0cnVjdHVyZSB0aGF0IG91clxuICogY29tcG9uZW50IGxpYnJhcnkgYW5kIGNvcmUgc3RvcmFnZSB1bmRlcnN0YW5kLlxuICpcbiAqIFRPRE8oYmlsbHkpIENyZWF0ZSBvdXIgb3duIGZyb250LWVuZCBkYXRhIG1vZGVsc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIge1xuICBzdGF0aWMgY2xlYW4gKG1vZHVsZUlkLCBkYXRhKSB7XG4gICAgaWYgKGRhdGEuc2VjdGlvbnMgJiYgZGF0YS5zZWN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBkYXRhLnNlY3Rpb25zO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnNlY3Rpb25zICYmIGRhdGEuc2VjdGlvbnMubGVuZ3RoID09PSAxICYmIGRhdGEuc2VjdGlvbnNbMF0ucmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBkYXRhLnNlY3Rpb25zO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBbbW9kdWxlSWRdOiBkYXRhXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB1bml2ZXJzYWwgKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIEF1dG9Db21wbGV0ZURhdGEuZnJvbShyZXNwb25zZSk7XG4gIH1cblxuICBzdGF0aWMgZmlsdGVyIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG5cbiAgc3RhdGljIHZlcnRpY2FsIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVBcGkgKi9cblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIgZnJvbSAnLi9hdXRvY29tcGxldGVkYXRhdHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgQW5zd2Vyc0Jhc2ljRXJyb3IsIEFuc3dlcnNFbmRwb2ludEVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogQXV0b0NvbXBsZXRlQXBpIGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBuZXR3b3JrIHJlbGF0ZWQgbWF0dGVyc1xuICogZm9yIGFsbCB0aGUgYXV0b2NvbXBsZXRlIGVuZHBvaW50cy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlQXBpIHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFvcHRzLmFwaUtleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBcGkgS2V5IGlzIHJlcXVpcmVkJywgJ0F1dG9Db21wbGV0ZScpO1xuICAgIH1cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBBbnN3ZXJzIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghb3B0cy5hbnN3ZXJzS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0Fuc3dlcnMgS2V5IGlzIHJlcXVpcmVkJywgJ0F1dG9Db21wbGV0ZScpO1xuICAgIH1cbiAgICB0aGlzLl9hbnN3ZXJzS2V5ID0gb3B0cy5hbnN3ZXJzS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnNpb24gb2YgdGhlIEFQSSB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJzaW9uID0gb3B0cy52ZXJzaW9uIHx8IDIwMTkwMTAxIHx8IDIwMTkwMzAxO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxvY2FsZSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghb3B0cy5sb2NhbGUpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignTG9jYWxlIGlzIHJlcXVpcmVkJywgJ0F1dG9Db21wbGV0ZScpO1xuICAgIH1cbiAgICB0aGlzLl9sb2NhbGUgPSBvcHRzLmxvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdXRvY29tcGxldGUgZmlsdGVyc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgVGhlIGlucHV0IHRvIHVzZSBmb3IgYXV0byBjb21wbGV0ZVxuICAgKi9cbiAgcXVlcnlGaWx0ZXIgKGlucHV0LCB2ZXJ0aWNhbEtleSwgYmFyS2V5KSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL2ZpbHRlcnNlYXJjaCcsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogaW5wdXQsXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgICAgJ2V4cGVyaWVuY2VLZXknOiB2ZXJ0aWNhbEtleSxcbiAgICAgICAgJ2lucHV0S2V5JzogYmFyS2V5LFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLmZpbHRlcihyZXNwb25zZS5yZXNwb25zZSwgYmFyS2V5KSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzRW5kcG9pbnRFcnJvcignRmlsdGVyIHNlYXJjaCByZXF1ZXN0IGZhaWxlZCcsICdBdXRvQ29tcGxldGUnLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHF1ZXJ5VmVydGljYWwgKGlucHV0LCB2ZXJ0aWNhbEtleSwgYmFyS2V5KSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL3ZlcnRpY2FsL2F1dG9jb21wbGV0ZScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogaW5wdXQsXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgICAgJ3ZlcnRpY2FsS2V5JzogdmVydGljYWxLZXksXG4gICAgICAgICdiYXJLZXknOiBiYXJLZXksXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIudmVydGljYWwocmVzcG9uc2UucmVzcG9uc2UsIHJlcXVlc3QuX3BhcmFtcy5iYXJLZXkpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEFuc3dlcnNFbmRwb2ludEVycm9yKCdWZXJ0aWNhbCBzZWFyY2ggcmVxdWVzdCBmYWlsZWQnLCAnQXV0b0NvbXBsZXRlJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICBxdWVyeVVuaXZlcnNhbCAocXVlcnlTdHJpbmcpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvYXV0b2NvbXBsZXRlJyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBxdWVyeVN0cmluZyxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQocXVlcnlTdHJpbmcpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIudW5pdmVyc2FsKHJlc3BvbnNlLnJlc3BvbnNlKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzRW5kcG9pbnRFcnJvcignVW5pdmVyc2FsIHNlYXJjaCByZXF1ZXN0IGZhaWxlZCcsICdBdXRvQ29tcGxldGUnLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUXVlc3Rpb25BbnN3ZXJBcGkgKi9cblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCB7IEFuc3dlcnNCYXNpY0Vycm9yLCBBbnN3ZXJzRW5kcG9pbnRFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvcnMnO1xuXG4vKipcbiAqIFF1ZXN0aW9uQW5zd2VyQXBpIGV4cG9zZXMgYW4gaW50ZXJmYWNlIHRvIGRvIG5ldHdvcmt5IHRoaW5ncyBhZ2FpbnN0XG4gKiB0aGUgUSZBIFJFU1QgQVBJXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0aW9uQW5zd2VyQXBpIHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFvcHRzLmFwaUtleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBcGkgS2V5IGlzIHJlcXVpcmVkJywgJ1F1ZXN0aW9uQW5zd2VyQXBpJyk7XG4gICAgfVxuICAgIHRoaXMuX2FwaUtleSA9IG9wdHMuYXBpS2V5O1xuICB9XG5cbiAgLyoqXG4gICAqIHN1Ym1pdFF1ZXN0aW9uIHdpbGwgY3JlYXRlIGEgbmV0d29yayByZXF1ZXN0IHRvXG4gICAqIGNyZWF0ZSBhIHF1ZXN0aW9uIGZvciBRJkEuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBxdWVzdGlvbiBUaGUgcXVlc3Rpb24gb2JqZWN0IHRvIHN1Ym1pdCB0byB0aGUgc2VydmVyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBxdWVzdGlvbi5lbnRpdHlJZCBUaGUgZW50aXR5IHRvIGFzc29jaWF0ZSB3aXRoIHRoZSBxdWVzdGlvbiAocmVxdWlyZWQpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5sYW51YWdlIFRoZSBsYW5ndWFnZSBvZiB0aGUgcXVlc3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLnNpdGUgVGhlIFwicHVibGlzaGVyXCIgb2YgdGhlIChlLmcuICdGSVJTVF9QQVJUWScpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5uYW1lIFRoZSBuYW1lIG9mIHRoZSBhdXRob3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLmVtYWlsIFRoZSBlbWFpbCBhZGRyZXNzIG9mIHRoZSBhdXRob3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLnF1ZXN0aW9uVGV4dCBUaGUgcXVlc3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLnF1ZXN0aW9uRGVzY3JpcHRpb24gQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcXVlc3Rpb25cbiAgICovXG4gIHN1Ym1pdFF1ZXN0aW9uIChxdWVzdGlvbikge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvcXVlc3Rpb25zJyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdlbnRpdHlJZCc6IHF1ZXN0aW9uLmVudGl0eUlkLFxuICAgICAgICAnc2l0ZSc6IHF1ZXN0aW9uLnNpdGUsXG4gICAgICAgICduYW1lJzogcXVlc3Rpb24ubmFtZSxcbiAgICAgICAgJ2VtYWlsJzogcXVlc3Rpb24uZW1haWwsXG4gICAgICAgICdxdWVzdGlvblRleHQnOiBxdWVzdGlvbi5xdWVzdGlvblRleHQsXG4gICAgICAgICdxdWVzdGlvbkRlc2NyaXB0aW9uJzogcXVlc3Rpb24ucXVlc3Rpb25EZXNjcmlwdGlvbixcbiAgICAgICAgJ3F1ZXN0aW9uTGFuZ3VhZ2UnOiBxdWVzdGlvbi5xdWVzdGlvbkxhbmd1YWdlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5wb3N0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzRW5kcG9pbnRFcnJvcihcbiAgICAgICAgICAnUXVlc3Rpb24gc3VibWl0IGZhaWxlZCcsXG4gICAgICAgICAgJ1F1ZXN0aW9uQW5zd2VyQXBpJyxcbiAgICAgICAgICBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VhcmNoU3RhdGVzICovXG5cbi8qKlxuICogU2VhcmNoU3RhdGVzIGlzIGFuIEVOVU0gZm9yIHRoZSB2YXJpb3VzIHN0YWdlcyBvZiBzZWFyY2hpbmcsXG4gKiB1c2VkIHRvIHNob3cgZGlmZmVyZW50IHRlbXBsYXRlc1xuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBQUkVfU0VBUkNIOiAncHJlLXNlYXJjaCcsXG4gIFNFQVJDSF9MT0FESU5HOiAnc2VhcmNoLWxvYWRpbmcnLFxuICBTRUFSQ0hfQ09NUExFVEU6ICdzZWFyY2gtY29tcGxldGUnXG59O1xuIiwiLyoqIEBtb2R1bGUgUmVzdWx0ICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmF3IHByb2ZpbGUgZGF0YVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9yYXcgPSBkYXRhLnJhdyB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZvcm1hdHRlZCBwcm9maWxlIGRhdGFcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZm9ybWF0dGVkID0gZGF0YS5mb3JtYXR0ZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5kZXggbnVtYmVyIG9mIHRoZSByZXN1bHRcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMub3JkaW5hbCA9IGRhdGEub3JkaW5hbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIG9mIHRoZSByZXN1bHQgY2FyZFxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJvZHkgb2YgdGhlIGRldGFpbHMgc2VjdGlvbiBvZiB0aGUgcmVzdWx0IGNhcmQsIGNhbiBjb250YWluIEhUTUxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfCBudWxsfVxuICAgICAqL1xuICAgIHRoaXMuZGV0YWlscyA9IGRhdGEuZGV0YWlscyB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlc3RpbmF0aW9uIGxpbmsgZm9yIHRoZSB0aXRsZSBvZiB0aGUgcmVzdWx0IGNhcmRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5saW5rID0gZGF0YS5saW5rIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgRW50aXR5IElELCBvciBvdGhlciB1bmlxdWUgaWRlbnRpZmllciwgdXNlZCBmb3IgdG8gcG93ZXIgaW50ZXJhY3Rpdml0eVxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmlkID0gZGF0YS5pZCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN1YnRpdGxlIG9uIHRoZSByZXN1bHQgY2FyZFxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnN1YnRpdGxlID0gZGF0YS5zdWJ0aXRsZSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNsYXNzIG1vZGlmaWVyLCB1c3VhbGx5IGRlcml2ZWQgZnJvbSB0aGUgdmVydGljYWwgY29uZmlndXJhdGlvbiBJRFxuICAgICAqIFVzZWQgdG8gYXBwbHkgZGlmZmVyZW50IHN0eWxpbmcgdG8gZGlmZmVyZW50IHJlc3VsdCBjYXJkIHR5cGVzXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMubW9kaWZpZXIgPSBkYXRhLm1vZGlmaWVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxhcmdlIGRhdGUsIG9mIHRoZSBmb3JtYXQgeyBtb250aDogJ0phbicsIGRheTogJzAxJyB9XG4gICAgICogQHR5cGUge09iamVjdHxudWxsfVxuICAgICAqL1xuICAgIHRoaXMuYmlnRGF0ZSA9IGRhdGEuYmlnRGF0ZSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW1hZ2UgcHJvZmlsZSBvYmplY3QsIGV4cGVjdGVkIHRvIGhhdmUgYSB1cmwgcHJvcGVydHlcbiAgICAgKiBAdHlwZSB7T2JqZWN0fG51bGx9XG4gICAgICovXG4gICAgdGhpcy5pbWFnZSA9IGRhdGEuaW1hZ2UgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGNhbGxzIHRvIGFjdGlvbiwgb2YgdGhlIGZvcm1hdDpcbiAgICAgKiB7IGljb246ICcnLCB1cmw6ICcnLCB0ZXh0OiAnJywgZXZlbnRUeXBlOiAnJywgZXZlbnRPcHRpb25zOiB7fX1cbiAgICAgKiBAdHlwZSB7QXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5jYWxsc1RvQWN0aW9uID0gZGF0YS5jYWxsc1RvQWN0aW9uIHx8IFtdO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiBhbiBhY2NvcmRpYW4gcmVzdWx0IHNob3VsZCBiZSBjb2xsYXBzZWQgYnkgZGVmYXVsdFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuY29sbGFwc2VkID0gZGF0YS5jb2xsYXBzZWQgfHwgdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVzdWx0RmFjdG9yeSAqL1xuXG5pbXBvcnQgUmVzdWx0IGZyb20gJy4vcmVzdWx0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0RmFjdG9yeSB7XG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBBUEkgcmVzdWx0IG9iamVjdCBpbnRvIGEgUmVzdWx0IHZpZXcgbW9kZWwuXG4gICAqIEluY2x1ZGVzIGRlZmF1bHQgbWFwcGluZ3Mgb2YgR29vZ2xlQ3VzdG9tU2VhcmNoRW5naW5lIHJlc3VsdHMgdG9cbiAgICogdGhlIGZpZWxkcyBleHBvc2VkIGJ5IHRoZSB0ZW1wbGF0ZS5cbiAgICogQHBhcmFtIHJlc3VsdHNEYXRhICB7QXJyYXl9IGV4cGVjdGVkIGZvcm1hdDogeyBkYXRhOiB7IC4uLiB9LCBoaWdobGlnaHRlZEZpZWxkczogeyAuLi4gfX1cbiAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fSBmb3JtYXR0ZXJzIFRoZSBmb3JtYXR0ZXJzIHRvIGFwcGx5IHRvIHRoZSByZXN1bHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnRpY2FsSWQgVGhlIHZlcnRpY2FsIG9mIHRoZXNlIHJlc3VsdHNcbiAgICogQHJldHVybnMge1Jlc3VsdFtdfVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHJlc3VsdHNEYXRhLCBmb3JtYXR0ZXJzLCB2ZXJ0aWNhbElkKSB7XG4gICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdHNEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBUT0RPIHVzZSByZXN1bHREYXRhLmhpZ2hsaWdodGVkRmllbGRzIHRvXG4gICAgICAvLyB0cmFuc2Zvcm0gcmVzdWx0RGF0YS5kYXRhIGludG8gaHRtbC1mcmllbmRseSBzdHJpbmdzIHRoYXQgaGlnaGxpZ2h0IHZhbHVlcy5cbiAgICAgIC8vIENoZWNrIGZvciBuZXcgZGF0YSBmb3JtYXQsIG90aGVyd2lzZSBmYWxsYmFjayB0byBsZWdhY3lcblxuICAgICAgY29uc3QgZGF0YSA9IHJlc3VsdHNEYXRhW2ldLmRhdGEgfHwgcmVzdWx0c0RhdGFbaV07XG4gICAgICBjb25zdCBmb3JtYXR0ZWREYXRhID0ge307XG4gICAgICBpZiAoT2JqZWN0LmtleXMoZm9ybWF0dGVycykubGVuZ3RoID4gMCkge1xuICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhKS5mb3JFYWNoKChba2V5LCB2YWxdKSA9PiB7XG4gICAgICAgICAgaWYgKGZvcm1hdHRlcnNba2V5XSkge1xuICAgICAgICAgICAgZm9ybWF0dGVkRGF0YVtrZXldID0gZm9ybWF0dGVyc1trZXldKHZhbCwgZGF0YSwgdmVydGljYWxJZCwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLmh0bWxTbmlwcGV0IHx8IGRhdGEuaHRtbFRpdGxlKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChSZXN1bHRGYWN0b3J5LmZyb21Hb29nbGVDdXN0b21TZWFyY2hFbmdpbmUoZGF0YSkpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0cy5wdXNoKFJlc3VsdEZhY3RvcnkuZnJvbUdlbmVyaWMoZGF0YSwgZm9ybWF0dGVkRGF0YSwgaSkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIEFQSSByZXN1bHQgb2JqZWN0IGludG8gYSBnZW5lcmljIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcGFyYW0gZm9ybWF0dGVkRGF0YVxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICogQHJldHVybnMge1Jlc3VsdH1cbiAgICovXG4gIHN0YXRpYyBmcm9tR2VuZXJpYyAoZGF0YSwgZm9ybWF0dGVkRGF0YSwgaW5kZXgpIHtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh7XG4gICAgICByYXc6IGRhdGEsXG4gICAgICBmb3JtYXR0ZWQ6IGZvcm1hdHRlZERhdGEsXG4gICAgICB0aXRsZTogZm9ybWF0dGVkRGF0YS5uYW1lIHx8IGRhdGEubmFtZSxcbiAgICAgIGRldGFpbHM6IGZvcm1hdHRlZERhdGEuZGVzY3JpcHRpb24gfHwgdGhpcy50cnVuY2F0ZShkYXRhLmRlc2NyaXB0aW9uKSxcbiAgICAgIGxpbms6IGRhdGEud2Vic2l0ZSxcbiAgICAgIGlkOiBkYXRhLmlkLFxuICAgICAgb3JkaW5hbDogaW5kZXggKyAxXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBNYXBzIHZpZXcgbW9kZWwgZmllbGRzIGJhc2VkIG9uIHRoZSBBUEkgZGF0YSBmb3IgYSBHb29nbGUgQ3VzdG9tIFNlYXJjaCBFbmdpbmUgb2JqZWN0LlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0fVxuICAgKi9cbiAgc3RhdGljIGZyb21Hb29nbGVDdXN0b21TZWFyY2hFbmdpbmUgKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh7XG4gICAgICByYXc6IGRhdGEsXG4gICAgICB0aXRsZTogZGF0YS5odG1sVGl0bGUucmVwbGFjZSgvKDwoW14+XSspPikvaWcsICcnKSxcbiAgICAgIGRldGFpbHM6IGRhdGEuaHRtbFNuaXBwZXQsXG4gICAgICBsaW5rOiBkYXRhLmxpbmtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcnVuY2F0ZXMgc3RyaW5ncyB0byAyNTAgY2hhcmFjdGVycywgYXR0ZW1wdGluZyB0byBwcmVzZXJ2ZSB3aG9sZSB3b3Jkc1xuICAgKiBAcGFyYW0gc3RyIHtzdHJpbmd9IHRoZSBzdHJpbmcgdG8gdHJ1bmNhdGVcbiAgICogQHBhcmFtIGxpbWl0IHtOdW1iZXJ9IHRoZSBtYXhpbXVtIGNoYXJhY3RlciBsZW5ndGggdG8gcmV0dXJuXG4gICAqIEBwYXJhbSB0cmFpbGluZyB7c3RyaW5nfSBhIHRyYWlsaW5nIHN0cmluZyB0byBkZW5vdGUgdHJ1bmNhdGlvbiwgZS5nLiAnLi4uJ1xuICAgKiBAcGFyYW0gc2VwIHtzdHJpbmd9IHRoZSB3b3JkIHNlcGFyYXRvclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIHRydW5jYXRlIChzdHIsIGxpbWl0ID0gMjUwLCB0cmFpbGluZyA9ICcuLi4nLCBzZXAgPSAnICcpIHtcbiAgICBpZiAoIXN0ciB8fCBzdHIubGVuZ3RoIDw9IGxpbWl0KSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIC8vIFRPRE8gKGJtY2dpbm5pcyk6IHNwbGl0IHB1bmN0dWF0aW9uIHRvbyBzbyB3ZSBkb24ndCBlbmQgdXAgd2l0aCBcImZvbywuLi5cIlxuICAgIGNvbnN0IHdvcmRzID0gc3RyLnNwbGl0KHNlcCk7XG4gICAgY29uc3QgbWF4ID0gbGltaXQgLSB0cmFpbGluZy5sZW5ndGg7XG4gICAgbGV0IHRydW5jYXRlZCA9ICcnO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgd29yZCA9IHdvcmRzW2ldO1xuICAgICAgaWYgKHRydW5jYXRlZC5sZW5ndGggKyB3b3JkLmxlbmd0aCA+IG1heCB8fFxuICAgICAgICAoaSAhPT0gMCAmJiB0cnVuY2F0ZWQubGVuZ3RoICsgd29yZC5sZW5ndGggKyBzZXAubGVuZ3RoID4gbWF4KSkge1xuICAgICAgICB0cnVuY2F0ZWQgKz0gdHJhaWxpbmc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICB0cnVuY2F0ZWQgKz0gaSA9PT0gMCA/IHdvcmQgOiBzZXAgKyB3b3JkO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVuY2F0ZWQ7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlY3Rpb24gKi9cblxuaW1wb3J0IFNlYXJjaFN0YXRlcyBmcm9tICcuLi9zdG9yYWdlL3NlYXJjaHN0YXRlcyc7XG5pbXBvcnQgUmVzdWx0RmFjdG9yeSBmcm9tICcuL3Jlc3VsdGZhY3RvcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcbiAgY29uc3RydWN0b3IgKGRhdGEsIHVybCwgZm9ybWF0dGVycykge1xuICAgIHRoaXMuc2VhcmNoU3RhdGUgPSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFO1xuICAgIHRoaXMudmVydGljYWxDb25maWdJZCA9IGRhdGEudmVydGljYWxDb25maWdJZCB8fCBudWxsO1xuICAgIHRoaXMucmVzdWx0c0NvdW50ID0gZGF0YS5yZXN1bHRzQ291bnQgfHwgMDtcbiAgICB0aGlzLmVuY29kZWRTdGF0ZSA9IGRhdGEuZW5jb2RlZFN0YXRlIHx8ICcnO1xuICAgIHRoaXMuYXBwbGllZFF1ZXJ5RmlsdGVycyA9IEFwcGxpZWRRdWVyeUZpbHRlci5mcm9tKGRhdGEuYXBwbGllZFF1ZXJ5RmlsdGVycyk7XG4gICAgdGhpcy5mYWNldHMgPSBkYXRhLmZhY2V0cyB8fCBudWxsO1xuICAgIHRoaXMucmVzdWx0cyA9IFJlc3VsdEZhY3RvcnkuZnJvbShkYXRhLnJlc3VsdHMsIGZvcm1hdHRlcnMsIHRoaXMudmVydGljYWxDb25maWdJZCk7XG4gICAgdGhpcy5tYXAgPSBTZWN0aW9uLnBhcnNlTWFwKGRhdGEucmVzdWx0cyk7XG4gICAgdGhpcy52ZXJ0aWNhbFVSTCA9IHVybCB8fCBudWxsO1xuICB9XG5cbiAgc3RhdGljIHBhcnNlTWFwIChyZXN1bHRzKSB7XG4gICAgbGV0IG1hcE1hcmtlcnMgPSBbXTtcblxuICAgIGxldCBjZW50ZXJDb29yZGluYXRlcyA9IHt9O1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCByZXN1bHRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAvLyBUT0RPKGJpbGx5KSBSZW1vdmUgbGVnYWN5IGZhbGxiYWNrIGZyb20gYWxsIGRhdGEgZm9ybWF0XG4gICAgICBsZXQgcmVzdWx0ID0gcmVzdWx0c1tqXS5kYXRhIHx8IHJlc3VsdHNbal07XG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUpIHtcbiAgICAgICAgaWYgKCFjZW50ZXJDb29yZGluYXRlcy5sYXRpdHVkZSkge1xuICAgICAgICAgIGNlbnRlckNvb3JkaW5hdGVzID0ge1xuICAgICAgICAgICAgbGF0aXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubGF0aXR1ZGUsXG4gICAgICAgICAgICBsb25naXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubG9uZ2l0dWRlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBtYXBNYXJrZXJzLnB1c2goe1xuICAgICAgICAgIGl0ZW06IHJlc3VsdCxcbiAgICAgICAgICBsYWJlbDogbWFwTWFya2Vycy5sZW5ndGggKyAxLFxuICAgICAgICAgIGxhdGl0dWRlOiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlLmxhdGl0dWRlLFxuICAgICAgICAgIGxvbmdpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sb25naXR1ZGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICdtYXBDZW50ZXInOiBjZW50ZXJDb29yZGluYXRlcyxcbiAgICAgICdtYXBNYXJrZXJzJzogbWFwTWFya2Vyc1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc2VjdGlvbiBmcm9tIHRoZSBwcm92aWRlZCBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBtb2R1bGVzIFRoZSByZXN1bHQgbW9kdWxlc1xuICAgKiBAcGFyYW0ge09iamVjdH0gdXJscyBUaGUgdGFiIHVybHNcbiAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fSBmb3JtYXR0ZXJzIEZpZWxkIGZvcm1hdHRlcnMgZm9yIHJlc3VsdHNcbiAgICovXG4gIHN0YXRpYyBmcm9tIChtb2R1bGVzLCB1cmxzLCBmb3JtYXR0ZXJzKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gW107XG4gICAgaWYgKCFtb2R1bGVzKSB7XG4gICAgICByZXR1cm4gc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmV3IFNlY3Rpb24obW9kdWxlcywgbnVsbCwgZm9ybWF0dGVycyk7XG4gICAgfVxuXG4gICAgLy8gT3VyIHNlY3Rpb25zIHNob3VsZCBjb250YWluIGEgcHJvcGVydHkgb2YgbWFwTWFya2VyIG9iamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNlY3Rpb25zLnB1c2goXG4gICAgICAgIG5ldyBTZWN0aW9uKFxuICAgICAgICAgIG1vZHVsZXNbaV0sXG4gICAgICAgICAgdXJsc1ttb2R1bGVzW2ldLnZlcnRpY2FsQ29uZmlnSWRdLFxuICAgICAgICAgIGZvcm1hdHRlcnNcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VjdGlvbnM7XG4gIH1cbn1cblxuY2xhc3MgQXBwbGllZFF1ZXJ5RmlsdGVyIHtcbiAgLy8gU3VwcG9ydCBsZWdhY3kgbW9kZWwgYW5kIG5ldyBtb2RlbCB1bnRpbCBmdWxseSBtaWdyYXRlZC5cbiAgLy8gVE9ETyhiaWxseSkgUmVtb3ZlIHRoZSBsZWZ0IGV4cHJlc3Npb24gZHVyaW5nIGFzc2lnbm1lbnQgd2hlbiBtaWdyYXRlZC5cbiAgY29uc3RydWN0b3IgKGFwcGxpZWRRdWVyeUZpbHRlcikge1xuICAgIHRoaXMua2V5ID0gYXBwbGllZFF1ZXJ5RmlsdGVyLmtleSB8fCBhcHBsaWVkUXVlcnlGaWx0ZXIuZGlzcGxheUtleTtcbiAgICB0aGlzLnZhbHVlID0gYXBwbGllZFF1ZXJ5RmlsdGVyLnZhbHVlIHx8IGFwcGxpZWRRdWVyeUZpbHRlci5kaXNwbGF5VmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbSAoYXBwbGllZFF1ZXJ5RmlsdGVycykge1xuICAgIGxldCBmaWx0ZXJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBsaWVkUXVlcnlGaWx0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmaWx0ZXJzLnB1c2gobmV3IEFwcGxpZWRRdWVyeUZpbHRlcihhcHBsaWVkUXVlcnlGaWx0ZXJzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXJzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBVbml2ZXJzYWxSZXN1bHRzICovXG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vc2VjdGlvbic7XG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pdmVyc2FsUmVzdWx0cyB7XG4gIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgdGhpcy5xdWVyeUlkID0gZGF0YS5xdWVyeUlkIHx8IG51bGw7XG4gICAgdGhpcy5zZWN0aW9ucyA9IGRhdGEuc2VjdGlvbnMgfHwgW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc2VhcmNoLCB1c2VkIHRvIHJlbmRlciBkaWZmZXJlbnQgdGVtcGxhdGVzIGJlZm9yZSwgZHVyaW5nLFxuICAgICAqIGFuZCBhZnRlciBsb2FkaW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnNlYXJjaFN0YXRlID0gZGF0YS5zZWFyY2hTdGF0ZSB8fCBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB1bml2ZXJzYWwgcmVzdWx0cyBmcm9tIHNlcnZlciBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZSBUaGUgc2VydmVyIHJlc3BvbnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB1cmxzIFRoZSB0YWIgdXJsc1xuICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59IGZvcm1hdHRlcnMgVGhlIGZpZWxkIGZvcm1hdHRlcnMgdG8gdXNlXG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UsIHVybHMsIGZvcm1hdHRlcnMpIHtcbiAgICByZXR1cm4gbmV3IFVuaXZlcnNhbFJlc3VsdHMoe1xuICAgICAgcXVlcnlJZDogcmVzcG9uc2UucXVlcnlJZCxcbiAgICAgIHNlY3Rpb25zOiBTZWN0aW9uLmZyb20ocmVzcG9uc2UubW9kdWxlcywgdXJscywgZm9ybWF0dGVycylcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBVbml2ZXJ2YWxSZXN1bHRzIG9iamVjdCByZXByZXNlbnRpbmcgbG9hZGluZyByZXN1bHRzXG4gICAqIEByZXR1cm4ge1VuaXZlcnNhbFJlc3VsdHN9XG4gICAqL1xuICBzdGF0aWMgc2VhcmNoTG9hZGluZyAoKSB7XG4gICAgcmV0dXJuIG5ldyBVbml2ZXJzYWxSZXN1bHRzKHsgc2VhcmNoU3RhdGU6IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRGlyZWN0QW5zd2VyICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdEFuc3dlciB7XG4gIGNvbnN0cnVjdG9yIChkaXJlY3RBbnN3ZXIgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGlyZWN0QW5zd2VyKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERpcmVjdEFuc3dlciBtb2RlbCBmcm9tIHRoZSBnaXZlbiBzZXJ2ZXIgZGF0YSBhbmQgZm9ybWF0dGVyc1xuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2UgVGhlIHNlcnZlciBkaXJlY3QgYW5zd2VyXG4gICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn0gZm9ybWF0dGVycyBUaGUgZm9ybWF0dGVycyB0byBhcHBseSB0byB0aGlzIGRpcmVjdCBhbnN3ZXJcbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSwgZm9ybWF0dGVycykge1xuICAgIGNvbnN0IGRhdGEgPSB7IC4uLnJlc3BvbnNlIH07XG4gICAgY29uc3QgeyBhbnN3ZXIsIHJlbGF0ZWRJdGVtIH0gPSBkYXRhO1xuXG4gICAgaWYgKGFuc3dlciAmJiBmb3JtYXR0ZXJzW2Fuc3dlci5maWVsZEFwaU5hbWVdKSB7XG4gICAgICBhbnN3ZXIudmFsdWUgPSBmb3JtYXR0ZXJzW2Fuc3dlci5maWVsZEFwaU5hbWVdKFxuICAgICAgICBhbnN3ZXIudmFsdWUsXG4gICAgICAgIHJlbGF0ZWRJdGVtLmRhdGEuZmllbGRWYWx1ZXMsXG4gICAgICAgIHJlbGF0ZWRJdGVtLnZlcnRpY2FsQ29uZmlnSWQsXG4gICAgICAgIHRydWUpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGlyZWN0QW5zd2VyKGRhdGEpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBOYXZpZ2F0aW9uICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24ge1xuICBjb25zdHJ1Y3RvciAodGFiT3JkZXIpIHtcbiAgICB0aGlzLnRhYk9yZGVyID0gdGFiT3JkZXIgfHwgW107XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChtb2R1bGVzKSB7XG4gICAgbGV0IG5hdiA9IFtdO1xuICAgIGlmICghbW9kdWxlcyB8fCAhQXJyYXkuaXNBcnJheShtb2R1bGVzKSkge1xuICAgICAgcmV0dXJuIG5hdjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBuYXYucHVzaChtb2R1bGVzW2ldLnZlcnRpY2FsQ29uZmlnSWQpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE5hdmlnYXRpb24obmF2KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgVmVydGljYWxSZXN1bHRzICovXG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vc2VjdGlvbic7XG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGljYWxSZXN1bHRzIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyBzZWFyY2hTdGF0ZTogU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURSB9LCBkYXRhKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZCB0aGUgcHJvdmlkZWQgcmVzdWx0cyB0byB0aGUgY3VycmVudCByZXN1bHRzXG4gICAqIEBwYXJhbSB7VmVydGljYWxSZXN1bHRzfSByZXN1bHRzIHRoZSByZXN1bHRzIHRvIGFwcGVuZCB0byB0aGUgY3VycmVudCByZXN1bHRzXG4gICAqL1xuICBhcHBlbmQgKHJlc3VsdHMpIHtcbiAgICBjb25zdCBtZXJnZWQgPSB7IC4uLnRoaXMgfTtcbiAgICBtZXJnZWQucmVzdWx0cyA9IHRoaXMucmVzdWx0cy5jb25jYXQocmVzdWx0cy5yZXN1bHRzKTtcbiAgICBtZXJnZWQubWFwLm1hcE1hcmtlcnMgPSB0aGlzLm1hcC5tYXBNYXJrZXJzLmNvbmNhdChyZXN1bHRzLm1hcC5tYXBNYXJrZXJzKTtcbiAgICByZXR1cm4gbmV3IFZlcnRpY2FsUmVzdWx0cyhtZXJnZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB2ZXJ0aWNhbCByZXN1bHRzIGZyb20gc2VydmVyIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlIFRoZSBzZXJ2ZXIgcmVzcG9uc2VcbiAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fSBmb3JtYXR0ZXJzIFRoZSBmaWVsZCBmb3JtYXR0ZXJzIHRvIHVzZVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlLCBmb3JtYXR0ZXJzKSB7XG4gICAgcmV0dXJuIG5ldyBWZXJ0aWNhbFJlc3VsdHMoU2VjdGlvbi5mcm9tKHJlc3BvbnNlLCBudWxsLCBmb3JtYXR0ZXJzKSk7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0IGEgVmVydGljYWxSZXN1bHRzIG9iamVjdCByZXByZXNlbnRpbmcgbG9hZGluZyByZXN1bHRzXG4gICAqIEByZXR1cm4ge1ZlcnRpY2FsUmVzdWx0c31cbiAgICovXG4gIHN0YXRpYyBzZWFyY2hMb2FkaW5nICgpIHtcbiAgICByZXR1cm4gbmV3IFZlcnRpY2FsUmVzdWx0cyh7IHNlYXJjaFN0YXRlOiBTZWFyY2hTdGF0ZXMuU0VBUkNIX0xPQURJTkcgfSk7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU3RvcmFnZUtleXMgKi9cblxuLyoqXG4gKiBTdG9yYWdlS2V5cyBpcyBhbiBFTlVNIGFyZSBjb25zaWRlcmVkIHRoZSByb290IGNvbnRleHRcbiAqIGZvciBob3cgZGF0YSBpcyBzdG9yZWQgYW5kIHNjb3BlZCBpbiB0aGUgc3RvcmFnZS5cbiAqXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIE5BVklHQVRJT046ICduYXZpZ2F0aW9uJyxcbiAgVU5JVkVSU0FMX1JFU1VMVFM6ICd1bml2ZXJzYWwtcmVzdWx0cycsXG4gIFZFUlRJQ0FMX1JFU1VMVFM6ICd2ZXJ0aWNhbC1yZXN1bHRzJyxcbiAgQVVUT0NPTVBMRVRFOiAnYXV0b2NvbXBsZXRlJyxcbiAgRElSRUNUX0FOU1dFUjogJ2RpcmVjdC1hbnN3ZXInLFxuICBGSUxURVI6ICdmaWx0ZXInLFxuICBRVUVSWTogJ3F1ZXJ5JyxcbiAgUVVFUllfSUQ6ICdxdWVyeS1pZCcsXG4gIEZBQ0VUX0ZJTFRFUjogJ2ZhY2V0LWZpbHRlcicsXG4gIERZTkFNSUNfRklMVEVSUzogJ2R5bmFtaWMtZmlsdGVycycsXG4gIFNFQVJDSF9MSU1JVDogJ3NlYXJjaC1saW1pdCcsXG4gIFBBUkFNUzogJ3BhcmFtcycsXG4gIFFVRVNUSU9OX1NVQk1JU1NJT046ICdxdWVzdGlvbi1zdWJtaXNzaW9uJ1xufTtcbiIsIi8qKiBAbW9kdWxlIER5bmFtaWNGaWx0ZXJzICovXG5cbi8qKlxuICogTW9kZWwgcmVwcmVzZW50aW5nIGEgc2V0IG9mIGR5bmFtaWMgZmlsdGVyc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljRmlsdGVycyB7XG4gIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGxpc3Qgb2YgZmlsdGVycyB0aGlzIG1vZGVsIGhvbGRzXG4gICAgICogQHR5cGUge3tsYWJlbDogc3RyaW5nLCBmaWVsZElkOiBzdHJpbmcsIG9wdGlvbnM6IG9iamVjdFtdfX1cbiAgICAgKi9cbiAgICB0aGlzLmZpbHRlcnMgPSBkYXRhLmZpbHRlcnMgfHwgW107XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcmdhbml6ZSAnZmFjZXRzJyBmcm9tIHRoZSBhcGkgcmVzcG9uc2UgaW50byBkeW5hbWljIGZpbHRlcnNcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlIGR5bmFtaWMgZmlsdGVyIHJlc3BvbnNlIGZyb20gdGhlIGFwaVxuICAgKiBAcmV0dXJucyB7RHluYW1pY0ZpbHRlcnN9XG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UpIHtcbiAgICBjb25zdCB7IGZhY2V0cyB9ID0gcmVzcG9uc2U7XG4gICAgY29uc3QgZHluYW1pY0ZpbHRlcnMgPSBmYWNldHMubWFwKGYgPT4gKHtcbiAgICAgIGxhYmVsOiBmWydkaXNwbGF5TmFtZSddLFxuICAgICAgZmllbGRJZDogZlsnZmllbGRJZCddLFxuICAgICAgb3B0aW9uczogZi5vcHRpb25zLm1hcChvID0+ICh7XG4gICAgICAgIGxhYmVsOiBvWydkaXNwbGF5TmFtZSddLFxuICAgICAgICBjb3VudExhYmVsOiBvWydjb3VudCddLFxuICAgICAgICBzZWxlY3RlZDogb1snc2VsZWN0ZWQnXSxcbiAgICAgICAgZmlsdGVyOiBvWydmaWx0ZXInXVxuICAgICAgfSkpXG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIG5ldyBEeW5hbWljRmlsdGVycyh7IGZpbHRlcnM6IGR5bmFtaWNGaWx0ZXJzIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hEYXRhVHJhbnNmb3JtZXIgKi9cblxuaW1wb3J0IFVuaXZlcnNhbFJlc3VsdHMgZnJvbSAnLi4vbW9kZWxzL3VuaXZlcnNhbHJlc3VsdHMnO1xuaW1wb3J0IERpcmVjdEFuc3dlciBmcm9tICcuLi9tb2RlbHMvZGlyZWN0YW5zd2VyJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL21vZGVscy9uYXZpZ2F0aW9uJztcbmltcG9ydCBWZXJ0aWNhbFJlc3VsdHMgZnJvbSAnLi4vbW9kZWxzL3ZlcnRpY2FscmVzdWx0cyc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgRHluYW1pY0ZpbHRlcnMgZnJvbSAnLi4vbW9kZWxzL2R5bmFtaWNmaWx0ZXJzJztcblxuLyoqXG4gKiBBIERhdGEgVHJhbnNmb3JtZXIgdGhhdCB0YWtlcyB0aGUgcmVzcG9uc2Ugb2JqZWN0IGZyb20gYSBTZWFyY2ggcmVxdWVzdFxuICogQW5kIHRyYW5zZm9ybXMgaW4gdG8gYSBmcm9udC1lbmQgb3JpZW50ZWQgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBvdXJcbiAqIGNvbXBvbmVudCBsaWJyYXJ5IGFuZCBjb3JlIHN0b3JhZ2UgdW5kZXJzdGFuZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoRGF0YVRyYW5zZm9ybWVyIHtcbiAgc3RhdGljIHRyYW5zZm9ybSAoZGF0YSwgdXJscyA9IHt9LCBmb3JtYXR0ZXJzKSB7XG4gICAgbGV0IHJlc3BvbnNlID0gZGF0YS5yZXNwb25zZTtcbiAgICByZXR1cm4ge1xuICAgICAgW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXTogcmVzcG9uc2UucXVlcnlJZCxcbiAgICAgIFtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXTogTmF2aWdhdGlvbi5mcm9tKHJlc3BvbnNlLm1vZHVsZXMpLFxuICAgICAgW1N0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVJdOiBEaXJlY3RBbnN3ZXIuZnJvbShyZXNwb25zZS5kaXJlY3RBbnN3ZXIsIGZvcm1hdHRlcnMpLFxuICAgICAgW1N0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTXTogVW5pdmVyc2FsUmVzdWx0cy5mcm9tKHJlc3BvbnNlLCB1cmxzLCBmb3JtYXR0ZXJzKVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgdHJhbnNmb3JtVmVydGljYWwgKGRhdGEsIGZvcm1hdHRlcnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXTogZGF0YS5yZXNwb25zZS5xdWVyeUlkLFxuICAgICAgW1N0b3JhZ2VLZXlzLk5BVklHQVRJT05dOiBuZXcgTmF2aWdhdGlvbigpLCAvLyBWZXJ0aWNhbCBkb2Vzbid0IHJlc3BvbmQgd2l0aCBvcmRlcmluZywgc28gdXNlIGVtcHR5IG5hdi5cbiAgICAgIFtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXTogVmVydGljYWxSZXN1bHRzLmZyb20oZGF0YS5yZXNwb25zZSwgZm9ybWF0dGVycyksXG4gICAgICBbU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTXTogRHluYW1pY0ZpbHRlcnMuZnJvbShkYXRhLnJlc3BvbnNlKVxuICAgIH07XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFF1ZXN0aW9uU3VibWlzc2lvbiAqL1xuXG4vKipcbiAqIFF1ZXN0aW9uU3VibWlzc2lvbiBpcyB0aGUgY29yZSBzdGF0ZSBtb2RlbFxuICogdG8gcG93ZXIgdGhlIFF1ZXN0aW9uU3VibWlzc2lvbiBjb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb25TdWJtaXNzaW9uIHtcbiAgY29uc3RydWN0b3IgKHF1ZXN0aW9uID0ge30sIGVycm9ycykge1xuICAgIC8qKlxuICAgICAqIFRoZSBhdXRob3Igb2YgdGhlIHF1ZXN0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSBxdWVzdGlvbi5uYW1lIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgcXVlc3Rpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZW1haWwgPSBxdWVzdGlvbi5lbWFpbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgcHJpdmFjeSBwb2xpY3kgd2FzIGFwcHJvdmVkXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5wcml2YWN5UG9saWN5ID0gcXVlc3Rpb24ucHJpdmFjeVBvbGljeSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXN0aW9uIHRvIGJlIHNlbnQgdG8gdGhlIHNlcnZlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5xdWVzdGlvblRleHQgPSBxdWVzdGlvbi5xdWVzdGlvblRleHQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFsdGVybmF0aXZlIHF1ZXN0aW9uIG1ldGEgaW5mb3JtYXRpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlc3Rpb25EZXNjcmlwdGlvbiA9IHF1ZXN0aW9uLnF1ZXN0aW9uRGVzY3JpcHRpb24gfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIENvbnRhaW5zIGFueSBlcnJvcnMgYWJvdXQgdGhlIHF1ZXN0aW9uIHN1Ym1pc3Npb25cbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzIHx8IG51bGw7XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIHN1Ym1pdHRlZCAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXN0aW9uU3VibWl0dGVkOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBlcnJvcnMgKHF1ZXN0aW9uLCBlcnJvcnMpIHtcbiAgICByZXR1cm4gUXVlc3Rpb25TdWJtaXNzaW9uKHF1ZXN0aW9uLCBlcnJvcnMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBDb3JlICovXG5cbmltcG9ydCBTZWFyY2hBcGkgZnJvbSAnLi9zZWFyY2gvc2VhcmNoYXBpJztcbmltcG9ydCBBdXRvQ29tcGxldGVBcGkgZnJvbSAnLi9zZWFyY2gvYXV0b2NvbXBsZXRlYXBpJztcbmltcG9ydCBRdWVzdGlvbkFuc3dlckFwaSBmcm9tICcuL3NlYXJjaC9xdWVzdGlvbmFuc3dlcmFwaSc7XG5cbmltcG9ydCBTZWFyY2hEYXRhVHJhbnNmb3JtZXIgZnJvbSAnLi9zZWFyY2gvc2VhcmNoZGF0YXRyYW5zZm9ybWVyJztcblxuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4vc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgVmVydGljYWxSZXN1bHRzIGZyb20gJy4vbW9kZWxzL3ZlcnRpY2FscmVzdWx0cyc7XG5pbXBvcnQgVW5pdmVyc2FsUmVzdWx0cyBmcm9tICcuL21vZGVscy91bml2ZXJzYWxyZXN1bHRzJztcbmltcG9ydCBRdWVzdGlvblN1Ym1pc3Npb24gZnJvbSAnLi9tb2RlbHMvcXVlc3Rpb25zdWJtaXNzaW9uJztcblxuLyoqXG4gKiBDb3JlIGlzIHRoZSBtYWluIGFwcGxpY2F0aW9uIGNvbnRhaW5lciBmb3IgYWxsIG9mIHRoZSBuZXR3b3JrIGFuZCBzdG9yYWdlXG4gKiByZWxhdGVkIGJlaGF2aW9ycyBvZiB0aGUgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmUge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5hcGlLZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYGFwaUtleWAuIFR5cGUgbXVzdCBiZSB7c3RyaW5nfScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLmFuc3dlcnNLZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYGFuc3dlcnNLZXlgLiBUeXBlIG11c3QgYmUge3N0cmluZ30nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IEFQSSBLZXkgdXNlZCBmb3IgYWxsIHJlcXVlc3RzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwaUtleSA9IGNvbmZpZy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IEFuc3dlcnMgS2V5IHVzZWQgZm9yIGFsbCByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hbnN3ZXJzS2V5ID0gY29uZmlnLmFuc3dlcnNLZXk7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IGxvY2FsZSB1c2VkIGZvciBhbGwgcmVxdWVzdHMuIElmIG5vdCBzcGVjaWZpZWQsIGRlZmF1bHRzIHRvIFwiZW5cIiAoZm9yXG4gICAgICogYmFja3dhcmRzIGNvbXBhdGliaWxpdHkpLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9sb2NhbGUgPSBjb25maWcubG9jYWxlIHx8ICdlbic7XG5cbiAgICAvKipcbiAgICAgKiBBIG1hcCBvZiBmaWVsZCBmb3JtYXR0ZXJzIHVzZWQgdG8gZm9ybWF0IHJlc3VsdHMsIGlmIHByZXNlbnRcbiAgICAgKiBAdHlwZSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpZWxkRm9ybWF0dGVycyA9IGNvbmZpZy5maWVsZEZvcm1hdHRlcnMgfHwge307XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY29yZSBkYXRhIHN0b3JhZ2UgdGhhdCBwb3dlcnMgdGhlIFVJXG4gICAgICogQHR5cGUge0dsb2JhbFN0b3JhZ2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2UgPSBjb25maWcuZ2xvYmFsU3RvcmFnZTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjb3JlIHBlcnNpc3RlbnQgc3RvcmFnZVxuICAgICAqIEB0eXBlIHtQZXJzaXN0ZW50U3RvcmFnZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucGVyc2lzdGVudFN0b3JhZ2UgPSBjb25maWcucGVyc2lzdGVudFN0b3JhZ2U7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiBjb250YWluaW5nIHRoZSBpbnRlZ3JhdGlvbiB3aXRoIHRoZSBSRVNUZnVsIHNlYXJjaCBBUElcbiAgICAgKiBGb3IgYm90aCB2ZXJ0aWNhbCBhbmQgdW5pdmVyc2FsIHNlYXJjaFxuICAgICAqIEB0eXBlIHtTZWFyY2h9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zZWFyY2hlciA9IG5ldyBTZWFyY2hBcGkoe1xuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICBhbnN3ZXJzS2V5OiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgbG9jYWxlOiB0aGlzLl9sb2NhbGVcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIGNvbnRhaW5pbmcgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIFJFU1RmdWwgYXV0b2NvbXBsZXRlIEFQSVxuICAgICAqIEZvciBmaWx0ZXIgc2VhcmNoLCB2ZXJ0aWNhbCBhdXRvY29tcGxldGUsIGFuZCB1bml2ZXJzYWwgYXV0b2NvbXBsZXRlXG4gICAgICogQHR5cGUge0F1dG9jb21wbGV0ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2F1dG9Db21wbGV0ZSA9IG5ldyBBdXRvQ29tcGxldGVBcGkoe1xuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICBhbnN3ZXJzS2V5OiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgbG9jYWxlOiB0aGlzLl9sb2NhbGVcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBRJkEgcmVzdCBpbnRlcmZhY2VcbiAgICAgKiBAdHlwZSB7UXVlc3Rpb25BbnN3ZXJBcGl9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9xdWVzdGlvbkFuc3dlciA9IG5ldyBRdWVzdGlvbkFuc3dlckFwaSh7XG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBpbiB0aGUgY29udGV4dCBvZiBhIHZlcnRpY2FsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbEtleSB2ZXJ0aWNhbCBJRCBmb3IgdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge29iamVjdH0gcXVlcnkgVGhlIHF1ZXJ5IGRldGFpbHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmlucHV0IFRoZSBpbnB1dCB0byBzZWFyY2ggZm9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5maWx0ZXIgVGhlIGZpbHRlciB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuZmFjZXRGaWx0ZXIgVGhlIGZhY2V0IGZpbHRlciB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlcnkubGltaXQgVGhlIG1heCBudW1iZXIgb2YgcmVzdWx0cyB0byBpbmNsdWRlLCBtYXggb2YgNTBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1ZXJ5Lm9mZnNldCBUaGUgcmVzdWx0cyBvZmZzZXQsIGZvciBmZXRjaGluZyBtb3JlIHJlc3VsdHMgb2YgdGhlIHNhbWUgcXVlcnlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmlkIFRoZSBxdWVyeSBJRCB0byB1c2UuIElmIHBhZ2luZyB3aXRoaW4gYSBxdWVyeSwgdGhlIHNhbWUgSUQgc2hvdWxkIGJlIHVzZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBxdWVyeS5hcHBlbmQgSWYgdHJ1ZSwgYWRkcyB0aGUgcmVzdWx0cyBvZiB0aGlzIHF1ZXJ5IHRvIHRoZSBlbmQgb2YgdGhlIGN1cnJlbnQgcmVzdWx0cywgZGVmYXVsdHMgZmFsc2VcbiAgICovXG4gIHZlcnRpY2FsU2VhcmNoICh2ZXJ0aWNhbEtleSwgcXVlcnkpIHtcbiAgICBpZiAoIXF1ZXJ5LmFwcGVuZCkge1xuICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTLCBWZXJ0aWNhbFJlc3VsdHMuc2VhcmNoTG9hZGluZygpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoZXJcbiAgICAgIC52ZXJ0aWNhbFNlYXJjaCh2ZXJ0aWNhbEtleSwge1xuICAgICAgICBsaW1pdDogdGhpcy5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlNFQVJDSF9MSU1JVCksXG4gICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICBpc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZDogdGhpcy5faXNEeW5hbWljRmlsdGVyc0VuYWJsZWRcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBTZWFyY2hEYXRhVHJhbnNmb3JtZXIudHJhbnNmb3JtVmVydGljYWwocmVzcG9uc2UsIHRoaXMuX2ZpZWxkRm9ybWF0dGVycykpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWV9JRCwgZGF0YVtTdG9yYWdlS2V5cy5RVUVSWV9JRF0pO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLk5BVklHQVRJT04sIGRhdGFbU3RvcmFnZUtleXMuTkFWSUdBVElPTl0pO1xuXG4gICAgICAgIGlmIChxdWVyeS5hcHBlbmQpIHtcbiAgICAgICAgICBjb25zdCBtZXJnZWRSZXN1bHRzID0gdGhpcy5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFMpXG4gICAgICAgICAgICAuYXBwZW5kKGRhdGFbU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUU10pO1xuICAgICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUywgbWVyZ2VkUmVzdWx0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTLCBkYXRhW1N0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFNdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhW1N0b3JhZ2VLZXlzLkRZTkFNSUNfRklMVEVSU10pIHtcbiAgICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLkRZTkFNSUNfRklMVEVSUywgZGF0YVtTdG9yYWdlS2V5cy5EWU5BTUlDX0ZJTFRFUlNdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBzZWFyY2ggKHF1ZXJ5U3RyaW5nLCB1cmxzKSB7XG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUUywgVW5pdmVyc2FsUmVzdWx0cy5zZWFyY2hMb2FkaW5nKCkpO1xuXG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaGVyXG4gICAgICAudW5pdmVyc2FsU2VhcmNoKHF1ZXJ5U3RyaW5nKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gU2VhcmNoRGF0YVRyYW5zZm9ybWVyLnRyYW5zZm9ybShyZXNwb25zZSwgdXJscywgdGhpcy5fZmllbGRGb3JtYXR0ZXJzKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBkYXRhW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuTkFWSUdBVElPTiwgZGF0YVtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuRElSRUNUX0FOU1dFUiwgZGF0YVtTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFMsIGRhdGFbU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFNdLCB1cmxzKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVTVElPTl9TVUJNSVNTSU9OLCBuZXcgUXVlc3Rpb25TdWJtaXNzaW9uKHtcbiAgICAgICAgICBxdWVzdGlvblRleHQ6IHF1ZXJ5U3RyaW5nXG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGFuIGlucHV0LCBxdWVyeSBmb3IgYSBsaXN0IG9mIHNpbWlsYXIgcmVzdWx0cyBhbmQgc2V0IGludG8gc3RvcmFnZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgICAgIHRoZSBzdHJpbmcgdG8gYXV0b2NvbXBsZXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlVW5pdmVyc2FsIChpbnB1dCwgbmFtZXNwYWNlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5VW5pdmVyc2FsKGlucHV0KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke25hbWVzcGFjZX1gLCBkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGFuIGlucHV0LCBxdWVyeSBmb3IgYSBsaXN0IG9mIHNpbWlsYXIgcmVzdWx0cyBpbiB0aGUgcHJvdmlkZWQgdmVydGljYWxcbiAgICogYW5kIHNldCBpbnRvIHN0b3JhZ2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0ICAgICAgIHRoZSBzdHJpbmcgdG8gYXV0b2NvbXBsZXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmVydGljYWxLZXkgdGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIGV4cGVyaWVuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJhcktleSAgICAgIHRoZSBiYXIga2V5IGZvciB0aGUgZXhwZXJpZW5jZVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlVmVydGljYWwgKGlucHV0LCBuYW1lc3BhY2UsIHZlcnRpY2FsS2V5LCBiYXJLZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0NvbXBsZXRlXG4gICAgICAucXVlcnlWZXJ0aWNhbChpbnB1dCwgdmVydGljYWxLZXksIGJhcktleSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkFVVE9DT01QTEVURX0uJHtuYW1lc3BhY2V9YCwgZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhbiBpbnB1dCwgcHJvdmlkZSBhIGxpc3Qgb2Ygc3VpdGFibGUgZmlsdGVycyBmb3IgYXV0b2NvbXBsZXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0ICAgICAgICAgdGhlIHN0cmluZyB0byBzZWFyY2ggZm9yIGZpbHRlcnMgd2l0aFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlICAgICB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbEtleSAgIHRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBleHBlcmllbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiYXJLZXkgICAgICAgIHRoZSBiYXIga2V5IGZvciB0aGUgZXhwZXJpZW5jZVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlRmlsdGVyIChpbnB1dCwgbmFtZXNwYWNlLCB2ZXJ0aWNhbEtleSwgYmFyS2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5RmlsdGVyKGlucHV0LCB2ZXJ0aWNhbEtleSwgYmFyS2V5KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke25hbWVzcGFjZX1gLCBkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1Ym1pdHMgYSBxdWVzdGlvbiB0byB0aGUgc2VydmVyIGFuZCB1cGRhdGVzIHRoZSB1bmRlcmx5aW5nIHF1ZXN0aW9uIG1vZGVsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBxdWVzdGlvbiBUaGUgcXVlc3Rpb24gb2JqZWN0IHRvIHN1Ym1pdCB0byB0aGUgc2VydmVyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBxdWVzdGlvbi5lbnRpdHlJZCBUaGUgZW50aXR5IHRvIGFzc29jaWF0ZSB3aXRoIHRoZSBxdWVzdGlvbiAocmVxdWlyZWQpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5sYW51YWdlIFRoZSBsYW5ndWFnZSBvZiB0aGUgcXVlc3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLnNpdGUgVGhlIFwicHVibGlzaGVyXCIgb2YgdGhlIChlLmcuICdGSVJTVF9QQVJUWScpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5uYW1lIFRoZSBuYW1lIG9mIHRoZSBhdXRob3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLmVtYWlsIFRoZSBlbWFpbCBhZGRyZXNzIG9mIHRoZSBhdXRob3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLnF1ZXN0aW9uVGV4dCBUaGUgcXVlc3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLnF1ZXN0aW9uRGVzY3JpcHRpb24gQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcXVlc3Rpb25cbiAgICovXG4gIHN1Ym1pdFF1ZXN0aW9uIChxdWVzdGlvbikge1xuICAgIHJldHVybiB0aGlzLl9xdWVzdGlvbkFuc3dlclxuICAgICAgLnN1Ym1pdFF1ZXN0aW9uKHF1ZXN0aW9uKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoXG4gICAgICAgICAgU3RvcmFnZUtleXMuUVVFU1RJT05fU1VCTUlTU0lPTixcbiAgICAgICAgICBRdWVzdGlvblN1Ym1pc3Npb24uc3VibWl0dGVkKCkpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmVzIHRoZSBnaXZlbiBxdWVyeSBpbnRvIHN0b3JhZ2UsIHRvIGJlIHVzZWQgZm9yIHRoZSBuZXh0IHNlYXJjaFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgdGhlIHF1ZXJ5IHRvIHN0b3JlXG4gICAqL1xuICBzZXRRdWVyeSAocXVlcnkpIHtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZLCBxdWVyeSk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmVzIHRoZSBwcm92aWRlZCBxdWVyeSBJRCwgdG8gYmUgdXNlZCBpbiBhbmFseXRpY3NcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5SWQgVGhlIHF1ZXJ5IGlkIHRvIHN0b3JlXG4gICAqL1xuICBzZXRRdWVyeUlkIChxdWVyeUlkKSB7XG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWV9JRCwgcXVlcnlJZCk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmVzIHRoZSBnaXZlbiBmaWx0ZXIgaW50byBzdG9yYWdlLCB0byBiZSB1c2VkIGZvciB0aGUgbmV4dCBzZWFyY2hcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqIEBwYXJhbSB7RmlsdGVyfSBmaWx0ZXIgICAgdGhlIGZpbHRlciB0byBzZXRcbiAgICovXG4gIHNldEZpbHRlciAobmFtZXNwYWNlLCBmaWx0ZXIpIHtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHtuYW1lc3BhY2V9YCwgZmlsdGVyKTtcbiAgfVxuXG4gIHNldEZhY2V0RmlsdGVyIChuYW1lc3BhY2UsIGZpbHRlcikge1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuRkFDRVRfRklMVEVSfS4ke25hbWVzcGFjZX1gLCBmaWx0ZXIpO1xuICB9XG5cbiAgZW5hYmxlRHluYW1pY0ZpbHRlcnMgKCkge1xuICAgIHRoaXMuX2lzRHluYW1pY0ZpbHRlcnNFbmFibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHNldFNlYXJjaExpbWl0IChsaW1pdCkge1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuU0VBUkNIX0xJTUlULCBsaW1pdCk7XG4gIH1cblxuICBvbiAoZXZ0LCBtb2R1bGVJZCwgY2IpIHtcbiAgICByZXR1cm4gdGhpcy5nbG9iYWxTdG9yYWdlLm9uKGV2dCwgbW9kdWxlSWQsIGNiKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQ29tcG9uZW50TWFuYWdlciAqL1xuXG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuXG4vKipcbiAqIENvbXBvbmVudE1hbmFnZXIgaXMgYSBTaW5nbGV0b25lIHRoYXQgY29udGFpbnMgYm90aCBhbiBpbnRlcm5hbCByZWdpc3RyeSBvZlxuICogZWxpZ2libGUgY29tcG9uZW50cyB0byBiZSBjcmVhdGVkLCBhcyB3ZWxsIGFzIGtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50XG4gKiBpbnN0YW50aWF0ZWQgYW5kIGFjdGl2ZSBjb21wb25lbnRzLlxuICpcbiAqIEFMTCBjb21wb25lbnRzIHNob3VsZCBiZSBjb25zdHJ1Y3RlZCB1c2luZyB0aGUge0NvbXBvbmVudE1hbmFnZXJ9IHZpYSBpdHMgYGNyZWF0ZWAgbWV0aG9kLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIGlmICghQ29tcG9uZW50TWFuYWdlci5zZXRJbnN0YW5jZSh0aGlzKSkge1xuICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9uZW50IHJlZ2lzdHJ5IGlzIGFuIGludGVybmFsIG1hcCwgdGhhdCBjb250YWluc1xuICAgICAqIGFsbCBhdmFpbGFibGUgY29tcG9uZW50IENMQVNTRVMgdXNlZCBmb3IgY3JlYXRpb24gb3Igb3ZlcnJpZGUuXG4gICAgICogRWFjaCBjb21wb25lbnQgY2xhc3MgaGFzIGEgdW5pcXVlIFRZUEUsIHdoaWNoIGlzIHVzZWQgYXMgdGhlIGtleSBmb3IgdGhlIHJlZ2lzdHJ5XG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9jb21wb25lbnRSZWdpc3RyeSA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFjdGl2ZSBjb21wb25lbnRzIGlzIGFuIGludGVybmFsIGNvbnRhaW5lciB0byBrZWVwIHRyYWNrXG4gICAgICogb2YgYWxsIG9mIHRoZSBjb21wb25lbnRzIHRoYXQgaGF2ZSBiZWVuIGNvbnN0cnVjdGVkXG4gICAgICovXG4gICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNvcmUgbGlicmFyeSBkZXBlbmRlbmN5XG4gICAgICpcbiAgICAgKiBUaGUgQ29yZSBjb250YWlucyBib3RoIHRoZSBzdG9yYWdlIEFORCBzZXJ2aWNlcyB0aGF0IGFyZSBuZWVkZWQgZm9yIHBlcmZvcm1pbmcgb3BlcmF0aW9uc1xuICAgICAqIGxpa2Ugc2VhcmNoIGFuZCBhdXRvIGNvbXBsZXRlLlxuICAgICAqXG4gICAgICogVGhlIHN0b3JhZ2UgaXMgdGhlIHNvdXJjZSBvZiB0cnV0aCBmb3IgdGhlIHN0YXRlIG9mIEFMTCBjb21wb25lbnRzLlxuICAgICAqIFdoZW5ldmVyIHRoZSBzdG9yYWdlIGlzIHVwZGF0ZWQsIHRoZSBzdGF0ZSBnZXRzIHB1c2hlZCBkb3duIHRvIHRoZSBuZWNlc3NhcnkgY29tcG9uZW50cy5cbiAgICAgKiBAdHlwZSB7Q29yZX1cbiAgICAgKi9cbiAgICB0aGlzLl9jb3JlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBwcmltYXJ5IHJlbmRlcmVyIHRvIHVzZSBmb3IgYWxsIGNvbXBvbmVudHNcbiAgICAgKiBAdHlwZSB7SGFuZGxlYmFyc1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3JlbmRlcmVyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBhbmFseXRpY3MgcmVwb3J0ZXIgZGVwZW5kZW5jeVxuICAgICAqL1xuICAgIHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyID0gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBzZXRJbnN0YW5jZSAoaW5zdGFuY2UpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UgKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgc2V0UmVuZGVyZXIgKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldENvcmUgKGNvcmUpIHtcbiAgICB0aGlzLl9jb3JlID0gY29yZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldEFuYWx5dGljc1JlcG9ydGVyIChyZXBvcnRlcikge1xuICAgIHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyID0gcmVwb3J0ZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXJzIGEgY29tcG9uZW50IHRvIGJlIGVsaWdpYmxlIGZvciBjcmVhdGlvbiBhbmQgb3ZlcnJpZGUuXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBUaGUgQ29tcG9uZW50IENsYXNzIHRvIHJlZ2lzdGVyXG4gICAqL1xuICByZWdpc3RlciAoY29tcG9uZW50Q2xhenopIHtcbiAgICB0aGlzLl9jb21wb25lbnRSZWdpc3RyeVtjb21wb25lbnRDbGF6ei50eXBlXSA9IGNvbXBvbmVudENsYXp6O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZSBpcyB0aGUgZW50cnkgcG9pbnQgZm9yIGNvbnN0cnVjdGluZyBhbnkgYW5kIGFsbCBjb21wb25lbnRzLlxuICAgKiBJdCB3aWxsIGluc3RhbnRpYXRlIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQsIGFuZCBib3RoIGFwcGx5XG4gICAqIGluaXRpYWwgc3RhdGUgZnJvbSB0aGUgc3RvcmFnZSBhbmQgYmluZCBpdCB0byB0aGUgc3RvcmFnZSBmb3IgdXBkYXRlcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudFR5cGUgVGhlIGNvbXBvbmVudCB0eXBlIHRvIGNyZWF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBUaGUgb3B0aW9ucyB0byBwaXBlIHRvIHRoZSBjb25zdHJ1Y3Rpb24gb2YgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgY3JlYXRlIChjb21wb25lbnRUeXBlLCBvcHRzKSB7XG4gICAgLy8gRXZlcnkgY29tcG9uZW50IG5lZWRzIGxvY2FsIGFjY2VzcyB0byB0aGUgY29tcG9uZW50IG1hbmFnZXJcbiAgICAvLyBiZWNhdXNlIHNvbWV0aW1lcyBjb21wb25lbnRzIGhhdmUgc3ViY29tcG9uZW50cyB0aGF0IG5lZWQgdG8gYmVcbiAgICAvLyBjb25zdHJ1Y3RlZCBkdXJpbmcgY3JlYXRpb25cbiAgICBvcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb3JlOiB0aGlzLl9jb3JlLFxuICAgICAgcmVuZGVyZXI6IHRoaXMuX3JlbmRlcmVyLFxuICAgICAgYW5hbHl0aWNzUmVwb3J0ZXI6IHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyLFxuICAgICAgY29tcG9uZW50TWFuYWdlcjogdGhpc1xuICAgIH0sIG9wdHMpO1xuXG4gICAgbGV0IGNvbXBvbmVudENsYXNzID0gdGhpcy5fY29tcG9uZW50UmVnaXN0cnlbY29tcG9uZW50VHlwZV07XG5cbiAgICBpZiAoXG4gICAgICAhY29tcG9uZW50Q2xhc3MuYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkKCkgJiZcbiAgICAgIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMuc29tZShjID0+IGMubmFtZSA9PT0gb3B0cy5uYW1lKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgYEFub3RoZXIgY29tcG9uZW50IHdpdGggbmFtZSAke29wdHMubmFtZX0gYWxyZWFkeSBleGlzdHNgLFxuICAgICAgICBjb21wb25lbnRUeXBlKTtcbiAgICB9XG5cbiAgICAvLyBJbnN0YW50aWF0ZSBvdXIgbmV3IGNvbXBvbmVudCBhbmQga2VlcCB0cmFjayBvZiBpdFxuICAgIGxldCBjb21wb25lbnQgPVxuICAgICAgbmV3IHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5W2NvbXBvbmVudFR5cGVdKG9wdHMpXG4gICAgICAgIC5pbml0KG9wdHMpO1xuXG4gICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIGdsb2JhbCBzdG9yYWdlIHRvIHBvd2VyIHN0YXRlLCBhcHBseSB0aGUgc3RhdGVcbiAgICAvLyBmcm9tIHRoZSBzdG9yYWdlIHRvIHRoZSBjb21wb25lbnQsIGFuZCB0aGVuIGJpbmQgdGhlIGNvbXBvbmVudFxuICAgIC8vIHN0YXRlIHRvIHRoZSBzdG9yYWdlIHZpYSBpdHMgdXBkYXRlc1xuICAgIGlmICh0aGlzLl9jb3JlICYmIHRoaXMuX2NvcmUuZ2xvYmFsU3RvcmFnZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKGNvbXBvbmVudC5tb2R1bGVJZCA9PT0gdW5kZWZpbmVkIHx8IGNvbXBvbmVudC5tb2R1bGVJZCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jb3JlLmdsb2JhbFN0b3JhZ2VcbiAgICAgICAgLm9uKCd1cGRhdGUnLCBjb21wb25lbnQubW9kdWxlSWQsIChkYXRhKSA9PiB7XG4gICAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgcHJvdmlkZWQgY29tcG9uZW50IGZyb20gdGhlIGxpc3Qgb2YgYWN0aXZlIGNvbXBvbmVudHMgYW5kIHJlbW92ZVxuICAgKiB0aGUgYXNzb2NpYXRlZCBzdG9yYWdlIGV2ZW50IGxpc3RlbmVyXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCB0byByZW1vdmVcbiAgICovXG4gIHJlbW92ZSAoY29tcG9uZW50KSB7XG4gICAgdGhpcy5fY29yZS5nbG9iYWxTdG9yYWdlLm9mZigndXBkYXRlJywgY29tcG9uZW50Lm1vZHVsZUlkKTtcblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5maW5kSW5kZXgoYyA9PiBjLm5hbWUgPT09IGNvbXBvbmVudC5uYW1lKTtcbiAgICB0aGlzLl9hY3RpdmVDb21wb25lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBnZXRBY3RpdmVDb21wb25lbnQgKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5maW5kKGMgPT4gYy5jb25zdHJ1Y3Rvci50eXBlID09PSB0eXBlKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVuZGVyZXIgKi9cblxuLyoqXG4gKiBSZW5kZXJlciBpcyBhbiBhYnN0cmFjdCBjbGFzcyB0aGF0IGFsbCBSZW5kZXJlcnMgc2hvdWxkIGV4dGVuZCBhbmQgaW1wbGVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcbiAgLyoqXG4gICAqIHJlbmRlciBpcyBhIGNvcmUgbWV0aG9kIGZvciBhbGwgcmVuZGVyZXJzLlxuICAgKiBBbGwgaW1wbGVtZW50YXRpb25zIHNob3VsZCBvdmVycmlkZSB0aGlzIGNsYXNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKi9cbiAgcmVuZGVyICh0ZW1wbGF0ZSwgZGF0YSkge1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHJlZ2lzdGVySGVscGVyIChuYW1lLCBjYikge1xuXG4gIH1cblxuICBjb21waWxlICh0ZW1wbGF0ZSkge1xuXG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEhhbmRsZWJhcnNSZW5kZXJlciAqL1xuXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbi8qKlxuICogSGFuZGxlYmFyc1JlbmRlcmVyIGlzIGEgd3JhcHBlciBhcm91bmQgdGhlIG5hdGl2YXRlIGhhbmRsZWJhcnMgcmVuZGVyZXIuXG4gKiBAZXh0ZW5kcyBSZW5kZXJlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYW5kbGViYXJzUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yICh0ZW1wbGF0ZXMgPSB7fSwgb3B0cyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBoYW5kbGViYXJzIGNvbXBpbGVyXG4gICAgICogQHR5cGUge0hhbmRsZWJhcnN9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9oYW5kbGViYXJzID0gdGVtcGxhdGVzLl9oYiB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIHByZS1jb21waWxlZCBoYW5kbGViYXJzIHRlbXBsYXRlc1xuICAgICAqIEB0eXBlIHtIYW5kbGViYXJzfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVzID0gdGVtcGxhdGVzIHx8IHt9O1xuICB9XG5cbiAgaW5pdCAodGVtcGxhdGVzKSB7XG4gICAgLy8gQXNzaWduIHRoZSBoYW5kbGViYXJzIGNvbXBpbGVyIGFuZCB0ZW1wbGF0ZXMgYmFzZWQgb25cbiAgICAvLyBpbmZvcm1hdGlvbiBwcm92aWRlZCBmcm9tIGV4dGVybmFsIGRlcCAoaW4gZGVmYXVsdCBjYXNlLCBpdCBjb21lcyBmcm9tIGV4dGVybmFsIHNlcnZlciByZXF1ZXN0KVxuICAgIHRoaXMuX2hhbmRsZWJhcnMgPSB0ZW1wbGF0ZXMuX2hiO1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHRlbXBsYXRlcztcblxuICAgIC8vIFRPRE8oYmlsbHkpIE9uY2Ugd2UgcmUtd3JpdGUgdGVtcGxhdGVzIHVzaW5nIHRoZSBuZXcgaGVscGVycyBsaWJyYXJ5XG4gICAgLy8gd2UgcHJvYmFibHkgZG9uJ3QgbmVlZCB0aGVzZSBjdXN0b20gaGVscGVycyBhbnltb3JlXG4gICAgdGhpcy5fcmVnaXN0ZXJDdXN0b21IZWxwZXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXJIZWxwZXIgaXMgYSBwdWJsaWMgaW50ZXJmYWNlIGZvciBleHRlcm5hbCBkZXBlbmRlbmNpZXMgdG9cbiAgICogcmVnaXN0ZXIgdGhlaXIgb3duIGN1c3RvbSBoZWxwZXJzIHRvIG91ciBpbnRlcm5hbCBIYW5kbGViYXJzIENvbXBpbGVyXG4gICAqL1xuICByZWdpc3RlckhlbHBlciAobmFtZSwgY2IpIHtcbiAgICB0aGlzLl9oYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKG5hbWUsIGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb21waWxlIGEgaGFuZGxlYmFycyB0ZW1wbGF0ZSBzbyB0aGF0IGl0IGNhbiBiZSByZW5kZXJlZCxcbiAgICogdXNpbmcgdGhlIHtIYW5kbGViYXJzfSBjb21waWxlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgVGhlIHRlbXBsYXRlIHN0cmluZyB0byBjb21waWxlXG4gICAqL1xuICBjb21waWxlICh0ZW1wbGF0ZSkge1xuICAgIGlmICh0eXBlb2YgdGVtcGxhdGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9oYW5kbGViYXJzLmNvbXBpbGUodGVtcGxhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbmRlciB3aWxsIHJlbmRlciBhIHRlbXBsYXRlIHdpdGggZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFByb3ZpZGUgZWl0aGVyIGEgdGVtcGxhdGVOYW1lIG9yIGEgcHJlLWNvbXBpbGVkIHRlbXBsYXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHByb3ZpZGUgdG8gdGhlIHRlbXBsYXRlXG4gICAqL1xuICByZW5kZXIgKGNvbmZpZywgZGF0YSkge1xuICAgIC8vIElmIGEgY3VzdG9tIHRlbXBsYXRlIGlzIHByb3ZpZGVkLCB1c2UgaXQsXG4gICAgLy8gb3RoZXJ3aXNlIGZhbGwgYmFjayB0byB0aGUgdGVtcGxhdGUgbmFtZVxuICAgIC8vIFRPRE8oYmlsbHkpIFRoaXMgaW50ZXJmYWNlIHNob3VsZCBwcm9iYWJseSBiZSBsZXNzIHVnbHlcbiAgICBpZiAoY29uZmlnLnRlbXBsYXRlICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gY29uZmlnLnRlbXBsYXRlKGRhdGEpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVzW2NvbmZpZy50ZW1wbGF0ZU5hbWVdKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBmaW5kL3JlbmRlciB0ZW1wbGF0ZTogJyArIGNvbmZpZy50ZW1wbGF0ZU5hbWUsIGUpO1xuICAgIH1cbiAgfVxuXG4gIF9yZWdpc3RlckN1c3RvbUhlbHBlcnMgKCkge1xuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2lmZXEnLCBmdW5jdGlvbiAoYXJnMSwgYXJnMiwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIChhcmcxID09PSBhcmcyKSA/IG9wdGlvbnMuZm4odGhpcykgOiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdpZm5vdGVxJywgZnVuY3Rpb24gKGFyZzEsIGFyZzIsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiAoYXJnMSAhPT0gYXJnMikgPyBvcHRpb25zLmZuKHRoaXMpIDogb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignZm9ybWF0UGhvbmVOdW1iZXInLCBmdW5jdGlvbiAocGhvbmVOdW1iZXJTdHJpbmcpIHtcbiAgICAgIHZhciBjbGVhbmVkID0gKCcnICsgcGhvbmVOdW1iZXJTdHJpbmcpLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG4gICAgICB2YXIgbWF0Y2ggPSBjbGVhbmVkLm1hdGNoKC9eKDF8KT8oXFxkezN9KShcXGR7M30pKFxcZHs0fSkkLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdmFyIGludGxDb2RlID0gKG1hdGNoWzFdID8gJysxICcgOiAnJyk7XG4gICAgICAgIHJldHVybiBbaW50bENvZGUsICcoJywgbWF0Y2hbMl0sICcpICcsIG1hdGNoWzNdLCAnLScsIG1hdGNoWzRdXS5qb2luKCcnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignYXNzaWduJywgZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIG9wdGlvbnMgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmICghb3B0aW9ucy5kYXRhLnJvb3QpIHtcbiAgICAgICAgb3B0aW9ucy5kYXRhLnJvb3QgPSB7fTtcbiAgICAgIH1cblxuICAgICAgbGV0IHYgPSAnJztcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgdiA9IHYgKyBhcmdzW2ldO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLmRhdGEucm9vdFtuYW1lXSA9IHY7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdqc29uJywgZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gbmFtZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgID8gJydcbiAgICAgICAgOiBKU09OLnN0cmluZ2lmeShuYW1lKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEhhbmRsZWJhcnNSZW5kZXJlciBmcm9tICcuL2hhbmRsZWJhcnNyZW5kZXJlcic7XG5cbi8vIEluIHRoZSBmdXR1cmUsIHRoaXMgd2lsbCBjb250YWluIGFsbCBkaWZmZXJlbnQgdHlwZXMgb2YgcmVuZGVyZXJzXG4vLyBFLmcuIE11c3RhY2hlLCBTT1ksIEhhbmRsZUJhcnMsIFJlYWN0LCBldGMuXG5leHBvcnQgY29uc3QgUmVuZGVyZXJzID0ge1xuICBTT1k6IFJlbmRlcmVyLFxuICBIYW5kbGViYXJzOiBIYW5kbGViYXJzUmVuZGVyZXJcbn07XG4iLCIvKiogQG1vZHVsZSBET00gKi9cblxuLyogZ2xvYmFsIEhUTUxFbGVtZW50LCBIVE1MRG9jdW1lbnQsIFdpbmRvdywgRXZlbnQgKi9cblxubGV0IGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuXG4vKipcbiAqIFN0YXRpYyBpbnRlcmZhY2UgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIERPTSBBUEkuXG4gKiBAbmFtZXNwYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTSB7XG4gIHN0YXRpYyBzZXR1cCAoZCwgcCkge1xuICAgIGRvY3VtZW50ID0gZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGUgYSBIVE1MRWxlbWVudCBmcm9tIGFuZCBIVE1MIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gaHRtbCBUaGUgSFRNTCB0byBwYXJzZSB0byBhIERPTSBub2RlLlxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGUgKGh0bWwpIHtcbiAgICBpZiAoJ2NyZWF0ZVJhbmdlJyBpbiBkb2N1bWVudCkge1xuICAgICAgLy8gcHJlZmVyIHRoaXMgaW1wbGVtZW50YXRpb24gYXMgaXQgaGFzIHdpZGVyIGJyb3dzZXIgc3VwcG9ydFxuICAgICAgLy8gYW5kIGl0J3MgYmV0dGVyIHBlcmZvcm1pbmcuXG4gICAgICAvLyBzZWUgaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvY29udmVydC1odG1sLXN0aW5ncy1kb20tbm9kZXNcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGh0bWwpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWcpO1xuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvLyBmYWxsYmFjayB0byB0aGlzIGJlY2F1c2Ugb2YgYSBidWcgaW4ganNkb20gdGhhdCBjYXVzZXMgdGVzdHMgdG8gZmFpbFxuICAgIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pzZG9tL2pzZG9tL2lzc3Vlcy8zOTlcbiAgICByZXR1cm4gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC9odG1sJykuYm9keTtcbiAgfVxuXG4gIC8qKlxuICAgKiBxdWVyeSB0aGUgRE9NIGZvciBhIGdpdmVuIGNzcyBzZWxlY3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgT3B0aW9uYWwgY29udGV4dCB0byB1c2UgZm9yIGEgc2VhcmNoLiBEZWZhdWx0cyB0byBkb2N1bWVudCBpZiBub3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciB0aGUgQ1NTIHNlbGVjdG9yIHRvIHF1ZXJ5IGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IHRoZSBGSVJTVCBub2RlIGl0IGZpbmRzLCBpZiBhbnlcbiAgICovXG4gIHN0YXRpYyBxdWVyeSAocGFyZW50LCBzZWxlY3Rvcikge1xuICAgIC8vIEZhY2FkZSwgc2hpZnRpbmcgdGhlIHNlbGVjdG9yIHRvIHRoZSBwYXJlbnQgYXJndW1lbnQgaWYgb25seSBvbmVcbiAgICAvLyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RvciA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgV2luZG93IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTERvY3VtZW50KSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBxdWVyeSB0aGUgRE9NIGZvciBhIGdpdmVuIGNzcyBzZWxlY3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgT3B0aW9uYWwgY29udGV4dCB0byB1c2UgZm9yIGEgc2VhcmNoLiBEZWZhdWx0cyB0byBkb2N1bWVudCBpZiBub3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciB0aGUgQ1NTIHNlbGVjdG9yIHRvIHF1ZXJ5IGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IHRoZSBGSVJTVCBub2RlIGl0IGZpbmRzLCBpZiBhbnlcbiAgICovXG4gIHN0YXRpYyBxdWVyeUFsbCAocGFyZW50LCBzZWxlY3Rvcikge1xuICAgIC8vIEZhY2FkZSwgc2hpZnRpbmcgdGhlIHNlbGVjdG9yIHRvIHRoZSBwYXJlbnQgYXJndW1lbnQgaWYgb25seSBvbmVcbiAgICAvLyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RvciA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIC8vIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSBjbGllbnQgY29kZSBpcyB1c2luZyBhIHBvaW50ZXIgdG8gYSBkb20gbm9kZSBhbmQgaXQncyBudWxsLCBlLmcuIHRoaXMuX2NvbnRhaW5lclxuICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBXaW5kb3cpIHtcbiAgICAgIHJldHVybiBbc2VsZWN0b3JdO1xuICAgIH1cblxuICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gIH1cblxuICBzdGF0aWMgb25SZWFkeSAoY2IpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGVkJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKSB7XG4gICAgICBjYigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIERPTS5vbihkb2N1bWVudCwgJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlRWxlIHdpbGwgY3JlYXRlIGEge0hUTUxFbGVtZW50fSBhbmQgYXBwbHkgdGhlIHByb3BlcnRpZXMgYXR0cmlidXRlcyB0aHJvdWdoIGFuIG9iamVjdCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGVsIFRoZSBlbGVtZW50IGB0YWdgIG5hbWUgdG8gY29uc3RydWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzX2RhdGEgT3B0aW9uYWwgYXR0cmlidXRlcyB0byBhcHBseSB0byB0aGUgbmV3IEhUTUxFbGVtZW50XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlRWwgKGVsLCBvcHRzX2RhdGEgPSB7fSkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbCk7XG4gICAgbGV0IHByb3BzID0gT2JqZWN0LmtleXMob3B0c19kYXRhKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9wc1tpXSA9PT0gJ2NsYXNzJykge1xuICAgICAgICBET00uYWRkQ2xhc3Mobm9kZSwgb3B0c19kYXRhW3Byb3BzW2ldXSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBub2RlW3Byb3BzW2ldXSA9IG9wdHNfZGF0YVtwcm9wc1tpXV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgYXBwZW5kIChwYXJlbnQsIG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBub2RlID0gcGFyZW50O1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXJlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJlbnQgPSBET00ucXVlcnkocGFyZW50KTtcbiAgICB9XG5cbiAgICAvLyBTdXBwb3J0IEhUTUwgaW5qZWN0aW9uIGFzIHdlbGwgYXMgSFRNTEVsZW1lbnQgYXBwZW5kc1xuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyQmVnaW4nLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhZGRDbGFzcyAobm9kZSwgY2xhc3NOYW1lKSB7XG4gICAgbGV0IGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJywnKTtcbiAgICBsZXQgbGVuID0gY2xhc3Nlcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBub2RlLmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGVtcHR5IChwYXJlbnQpIHtcbiAgICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICBzdGF0aWMgY3NzIChzZWxlY3Rvciwgc3R5bGVzKSB7XG4gICAgbGV0IG5vZGUgPSBET00ucXVlcnkoc2VsZWN0b3IpO1xuXG4gICAgZm9yIChsZXQgcHJvcCBpbiBzdHlsZXMpIHtcbiAgICAgIG5vZGUuc3R5bGVbcHJvcF0gPSBzdHlsZXNbcHJvcF07XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGF0dHIgKHNlbGVjdG9yLCBhdHRyLCB2YWwpIHtcbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLnNldEF0dHJpYnV0ZShhdHRyLCB2YWwpO1xuICB9XG5cbiAgc3RhdGljIGF0dHJpYnV0ZXMgKHNlbGVjdG9yLCBhdHRycykge1xuICAgIE9iamVjdC5lbnRyaWVzKGF0dHJzKVxuICAgICAgLmZvckVhY2goKFthdHRyLCB2YWxdKSA9PiB0aGlzLmF0dHIoc2VsZWN0b3IsIGF0dHIsIHZhbCkpO1xuICB9XG5cbiAgc3RhdGljIHRyaWdnZXIgKHNlbGVjdG9yLCBldmVudCwgc2V0dGluZ3MpIHtcbiAgICBsZXQgZSA9IG5ldyBFdmVudChldmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAnYnViYmxlcyc6IHRydWUsXG4gICAgICAnY2FuY2VsYWJsZSc6IHRydWVcbiAgICB9LCBzZXR0aW5ncyB8fCB7fSkpO1xuXG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5kaXNwYXRjaEV2ZW50KGUpO1xuICB9XG5cbiAgc3RhdGljIG9uIChzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgb25jZSAoc2VsZWN0b3IsIGV2dCwgaGFuZGxlcikge1xuICAgIERPTS5xdWVyeShzZWxlY3RvcikuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIHN0YXRpYyBvZmYgKHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpIHtcbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWxlZ2F0ZSAoY3R4dCwgc2VsZWN0b3IsIGV2dCwgaGFuZGxlcikge1xuICAgIGxldCBlbCA9IERPTS5xdWVyeShjdHh0KTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2dCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgd2hpbGUgKCF0YXJnZXQuaXNFcXVhbE5vZGUoZWwpKSB7XG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICBoYW5kbGVyKGV2ZW50LCB0YXJnZXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBFdmVudEVtaXR0ZXIgKi9cblxuLyoqXG4gKiBFdmVudEVtaXR0ZXIgaXMgYSBiYXNlIGNsYXNzIGZvciBhbnkgb2JqZWN0IHRoYXQgd2FudHMgdG8gZXhwb3NlXG4gKiBhIHB1Yi9zdWIgaW50ZXJmYWNlLCBmb3IgZW1pdHRpbmcgbWVzc2FnZXMgYW5kIHByb3ZpZGluZyBsaXN0ZW5lcnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgc3Vic2NyaWJlcnMgb2YgbWVzc2FnZXNcbiAgICAgKiBAdHlwZSB7b2JqZWN0W119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbiBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3Igc3Vic2NyaWJpbmcgZXZlbnRzIHRoYXQgYXJlIGVtaXR0ZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gbGlzdGVuIHRvXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIFRoZSBjYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUge2V2dH0gaXMgZW1pdHRlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uY2UgT3B0aW9uYWwgdmFsdWUgd2hpY2ggd2lsbCBvbmx5IGhhbmRsZSB0aGUgbWVzc2FnZSBvbmNlXG4gICAqL1xuICBvbiAoZXZ0LCBjYiwgb25jZSkge1xuICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgaGFuZGxlciBzaG91bGQgYmUgb2YgdHlwZSB7ZnVuY3Rpb259Jyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xpc3RlbmVyc1tldnRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVyc1tldnRdID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5fbGlzdGVuZXJzW2V2dF0ucHVzaCh7XG4gICAgICBldmVudDogZXZ0LFxuICAgICAgY2I6IGNiLFxuICAgICAgb25jZTogb25jZSB8fCBmYWxzZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogb25jZSBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3Igc3Vic2NyaWJpbmcgZXZlbnRzIHRoYXQgYXJlIGVtaXR0ZWQuXG4gICAqIFRoZSBoYW5kbGVyIHdpbGwgb25seSBiZSB0cmlnZ2VyZWQgb25jZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byBsaXN0ZW4gdG9cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgVGhlIGNhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSB7ZXZ0fSBpcyBlbWl0dGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSBPcHRpb25hbCB2YWx1ZSB3aGljaCB3aWxsIG9ubHkgaGFuZGxlIHRoZSBtZXNzYWdlIG9uY2VcbiAgICovXG4gIG9uY2UgKGV2dCwgY2IpIHtcbiAgICByZXR1cm4gdGhpcy5vbihldnQsIGNiLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvZmYgaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIHVuc3Vic2NyaWJpbmcgZnJvbSBhbiBldmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIHVuc3Vic2NyaWJlIGZyb21cbiAgICovXG4gIG9mZiAoZXZ0KSB7XG4gICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyc1tldnRdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGVtaXQgaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIGJyb2FkY2FzdGluZyBtZXNzYWdlcy9ldmVudHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byBwdWJsaXNoIGZyb21cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgdGhlIGRhdGEgdG8gc2VuZCBhbG9uZyB0byB0aGUgc3Vic2NyaWJlcnNcbiAgICovXG4gIGVtaXQgKGV2dCwgZGF0YSkge1xuICAgIGxldCBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNbZXZ0XTtcbiAgICBpZiAobGlzdGVuZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJbnZva2UgZWFjaCBvZiBhbGwgdGhlIGxpc3RlbmVyIGhhbmRsZXJzIGFuZCByZW1vdmUgdGhlIG9uZXMgdGhhdCBzaG91bGQgZmlyZSBvbmx5IG9uY2UuXG4gICAgbGV0IGtlZXAgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdGVuZXJzW2ldLmNiKGRhdGEpO1xuICAgICAgaWYgKGxpc3RlbmVyc1tpXS5vbmNlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBJbnN0ZWFkIG9mIGhhdmluZyBhICdkaXJ0eScgYXJyYXkgd2l0aCBkZWxldGVkIG9yICd1bmRlZmluZWQnIGVudHJpZXMsXG4gICAgICAvLyB3ZSBqdXN0IGNyZWF0ZSBhIGJyYW5kIG5ldyBhcnJheSB3aXRob3V0IHRoZSBsaXN0ZW5lcnMgdGhhdCB3ZXJlIHJlbW92ZWRcbiAgICAgIGtlZXAucHVzaChsaXN0ZW5lcnNbaV0pO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBvdXIgb2xkIGxpc3Qgb2YgbGlzdGVuZXJzIHRvIHRoZSBuZXdseSBjcmVhdGVkIGFycmF5XG4gICAgdGhpcy5fbGlzdGVuZXJzW2V2dF0gPSBrZWVwO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTdGF0ZSAqL1xuXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uLy4uL2NvcmUvZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlcic7XG5cbi8qKlxuICogU3RhdGUgY29udGFpbnMgdGhlIGRhdGEgZm9yIHRoZSBjb21wb25lbnRcbiAqIGFuZCBleHBvc2VzIGFuIHtFdmVudEVtaXR0ZXJ9IGludGVyZmFjZSBzbyB0aGF0IGV4dGVybmFsXG4gKiBkZXBlbmRlbmNpZXMgY2FuIGxpc3Rlbi9ob29rIHN1YnNjcmliZSB0byBtZXNzYWdlcy91cGRhdGVzLlxuICogQGV4dGVuZHMgRXZlbnRFbWl0dGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdGF0ZSA9IGRhdGEgfHwge307XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSBjb21wb25lbnQuXG4gICAqIE5PVEUoYmlsbHkpOiBEb2VzIG5vdCBmaXJlIGFuIHVwZGF0ZSBtZXNzYWdlXG4gICAqL1xuICBpbml0IChwcm9wLCBvcHRWYWwpIHtcbiAgICB0aGlzLl9zZXQocHJvcCwgb3B0VmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXR0ZXIgZm9yIHRoZSBzdGF0ZVxuICAgKiBAcGFyYW0gcHJvcCB7c3RyaW5nfE9iamVjdH0gVGhlIHByb3BlcnR5IHRvIHNldFxuICAgKiBAcGFyYW0gb3B0VmFsIE9wdGlvbmFsLCBpZiBwcm9wIGlzIGEge3N0cmluZ30sIGl0IHdpbGwgYXNzaWduIHRoZSB2YWx1ZSB0byB0aGF0IHByb3BlcnR5XG4gICAqL1xuICBzZXQgKHByb3AsIG9wdFZhbCkge1xuICAgIHRoaXMuX3NldChwcm9wLCBvcHRWYWwpO1xuICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gIH1cblxuICAvKipcbiAgICogc2V0dGVyIGZvciB0aGUgc3RhdGUgZW5hYmxlcyB5b3UgdG8gdXBkYXRlIGEgc2luZ2xlIHByb3BlcnR5LCBvciBjb21wbGV0ZSBzdGF0ZVxuICAgKiBkZXBlbmRpbmcgb24gdGhlIGFyZ3VtZW50cyBwcm92aWRlZC5cbiAgICogQHBhcmFtIHByb3Age3N0cmluZ3xPYmplY3R9IFRoZSBwcm9wZXJ0eSB0byBzZXRcbiAgICogQHBhcmFtIG9wdFZhbCBJZiBwcm9wIGlzIGEge3N0cmluZ30sIHByb3ZpZGUgaXRzIHZhbHVlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2V0IChwcm9wLCBvcHRWYWwpIHtcbiAgICBpZiAob3B0VmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3N0YXRlID0gcHJvcDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3RhdGVbcHJvcF0gPSBvcHRWYWw7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlIChkYXRhKSB7XG4gICAgdGhpcy5fc3RhdGUgPSBkYXRhO1xuICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgYSBwcm9wZXJ0aWVzIHZhbHVlIGZyb20gdGhlIHN0YXRlXG4gICAqIElmIG5vIHByb3BlcnR5IHByb3ZpZGVkLCByZXR1cm4gdGhlIGZ1bGwgc3RhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdFByb3Agb3B0aW9uYWwgcHJvcGVydHkgdG8gcmV0cmlldmVcbiAgICovXG4gIGdldCAob3B0UHJvcCkge1xuICAgIGlmIChvcHRQcm9wID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlW29wdFByb3BdO1xuICB9XG5cbiAgaGFzIChwcm9wKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlW3Byb3BdICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBhc0pTT04gKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgfVxufVxuIiwiLyoqXG4gKiBNb2RlbCBmb3IgdGhlIGFuYWx5dGljcyBldmVudCB0eXBlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuYWx5dGljc0V2ZW50IHtcbiAgY29uc3RydWN0b3IgKHR5cGUsIGxhYmVsKSB7XG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgZXZlbnQgdG8gcmVwb3J0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmV2ZW50VHlwZSA9IHR5cGUudG9VcHBlckNhc2UoKTtcblxuICAgIC8qKlxuICAgICAqIEFuIG9wdGlvbmFsIGxhYmVsIHRvIGJlIHByb3ZpZGVkIGZvciB0aGUgZXZlbnRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGlmIChsYWJlbCkge1xuICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBwcm92aWRlZCBvcHRpb25zIHRvIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBBZGRpdGlvbmFsIG9wdGlvbnMgZm9yIHRoZSBldmVudFxuICAgKi9cbiAgYWRkT3B0aW9ucyAob3B0aW9ucykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBldmVudCBpbiB0aGUgYXBpIGZvcm1hdCwgdHlwaWNhbGx5IGZvciByZXBvcnRpbmcgdG8gdGhlIGFwaVxuICAgKi9cbiAgdG9BcGlFdmVudCAoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBbmFseXRpY3NSZXBvcnRlciAqL1xuXG5pbXBvcnQgQW5hbHl0aWNzRXZlbnQgZnJvbSAnLi9hbmFseXRpY3NldmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCB7IEFOQUxZVElDU19CQVNFX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgSHR0cFJlcXVlc3RlciBmcm9tICcuLi9odHRwL2h0dHByZXF1ZXN0ZXInO1xuXG4vKipcbiAqIENsYXNzIGZvciByZXBvcnRpbmcgYW5hbHl0aWNzIGV2ZW50cyB0byB0aGUgc2VydmVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuYWx5dGljc1JlcG9ydGVyIHtcbiAgY29uc3RydWN0b3IgKGNvcmUsIGFuc3dlcnNLZXksIGJ1c2luZXNzSWQsIGdsb2JhbE9wdGlvbnMgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBpbnRlcm5hbCBidXNpbmVzcyBpZGVudGlmaWVyIHVzZWQgZm9yIHJlcG9ydGluZ1xuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fYnVzaW5lc3NJZCA9IGJ1c2luZXNzSWQ7XG5cbiAgICAvKipcbiAgICAgKiBPcHRpb25zIHRvIGluY2x1ZGUgd2l0aCBldmVyeSBhbmFseXRpYyBldmVudCByZXBvcnRlZCB0byB0aGUgc2VydmVyXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2dsb2JhbE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBnbG9iYWxPcHRpb25zLCB7IGFuc3dlcnNLZXkgfSk7XG5cbiAgICAvLyBsaXN0ZW4gdG8gcXVlcnkgaWQgdXBkYXRlc1xuICAgIGNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgU3RvcmFnZUtleXMuUVVFUllfSUQsIGlkID0+IHRoaXMuc2V0UXVlcnlJZChpZCkpO1xuICB9XG5cbiAgc2V0UXVlcnlJZCAocXVlcnlJZCkge1xuICAgIHRoaXMuX2dsb2JhbE9wdGlvbnMucXVlcnlJZCA9IHF1ZXJ5SWQ7XG4gIH1cblxuICByZXBvcnQgKGV2ZW50KSB7XG4gICAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBBbmFseXRpY3NFdmVudCkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IoJ1RyaWVkIHRvIHNlbmQgaW52YWxpZCBhbmFseXRpY3MgZXZlbnQnLCBldmVudCk7XG4gICAgfVxuXG4gICAgZXZlbnQuYWRkT3B0aW9ucyh0aGlzLl9nbG9iYWxPcHRpb25zKTtcblxuICAgIHJldHVybiBuZXcgSHR0cFJlcXVlc3RlcigpLmJlYWNvbihcbiAgICAgIGAke0FOQUxZVElDU19CQVNFX1VSTH0vcmVhbHRpbWVhbmFseXRpY3MvZGF0YS9hbnN3ZXJzLyR7dGhpcy5fYnVzaW5lc3NJZH1gLFxuICAgICAge1xuICAgICAgICAnZGF0YSc6IGV2ZW50LnRvQXBpRXZlbnQoKVxuICAgICAgfVxuICAgICk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE1vZHVsZURhdGEgKi9cblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudGVtaXR0ZXIvZXZlbnRlbWl0dGVyJztcblxuLyoqXG4gKiBNb2R1bGVEYXRhIGlzIHVzZWQgYXMgYSBnZW5lcmljIG1vZGVsIGZvciBTdG9yYWdlLlxuICogVHlwaWNhbGx5IGFuIGluc3RhbmNlIG9mIE1vZHVsZURhdGEgcG93ZXJzIGEgc2luZ2xlIGNvbXBvbmVudC5cblxuICogQSBkYXRhIG1vZGVsIHRoYXQgZXhwb3NlcyBhbiBldmVudCBlbWl0dGVyIGludGVyZmFjZS5cbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2R1bGVEYXRhIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGlkLCBkYXRhID0ge30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5faWQgPSBpZDtcbiAgICB0aGlzLl9oaXN0b3J5ID0gW107XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5zZXQoZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogcmVwbGFjZXMgdGhlIGN1cnJlbnRseSBoZWxkIGRhdGEgd2l0aCB0aGUgZ2l2ZW4gZGF0YVxuICAgKiBAcGFyYW0geyp9IGRhdGEgdGhlIGRhdGEgdG8gcmVwbGFjZSB0aGUgY3VycmVudCBkYXRhXG4gICAqL1xuICBzZXQgKGRhdGEpIHtcbiAgICB0aGlzLmNhcHR1cmVQcmV2aW91cygpO1xuXG4gICAgaWYgKHR5cGVvZiBkYXRhICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KGRhdGEpIHx8IE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXModGhpcy5fZGF0YSkubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5fZGF0YSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgZm9yIHNoYWxsb3cgZXF1YWxpdHlcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhkYXRhKSkge1xuICAgICAgaWYgKHRoaXMuX2RhdGFba2V5XSAhPT0gZGF0YVtrZXldKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuX2RhdGEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2FwdHVyZVByZXZpb3VzICgpIHtcbiAgICBpZiAodGhpcy5faGlzdG9yeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9oaXN0b3J5ID0gW107XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hpc3RvcnkubGVuZ3RoICsgMSA+IDUpIHtcbiAgICAgIHRoaXMuX2hpc3Rvcnkuc2hpZnQoKTtcbiAgICB9XG5cbiAgICAvLyBJZiBkYXRhIGlzIGV2ZXIgdW5kZWZpbmVkLCB3ZSBkZWZhdWx0IHRvIGVtcHR5IG9iamVjdFxuICAgIHRoaXMuX2hpc3RvcnkucHVzaChKU09OLnN0cmluZ2lmeSh0aGlzLl9kYXRhIHx8IHt9KSk7XG4gIH1cblxuICB1bmRvICgpIHtcbiAgICBsZXQgcHJldmlvdXMgPSB7fTtcbiAgICBpZiAodGhpcy5fcHJldmlvdXMubGVuZ3RoID4gMCkge1xuICAgICAgcHJldmlvdXMgPSBKU09OLnBhcnNlKHRoaXMuX3ByZXZpb3VzLnBvcCgpKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRhLnNldChwcmV2aW91cyk7XG4gIH1cblxuICByYXcgKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBHbG9iYWxTdG9yYWdlICovXG5cbmltcG9ydCBNb2R1bGVEYXRhIGZyb20gJy4vbW9kdWxlZGF0YSc7XG5pbXBvcnQgeyBBbnN3ZXJzU3RvcmFnZUVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogU3RvcmFnZSBpcyBhIGNvbnRhaW5lciBhcm91bmQgYXBwbGljYXRpb24gc3RhdGUuXG4gKiBJdCBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgQ1JVRCBvcGVyYXRpb25zIGFzIHdlbGwgYXMgbGlzdGVuaW5nXG4gKiBmb3Igc3RhdGVmdWwgY2hhbmdlcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xvYmFsU3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyID0ge307XG4gICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzID0ge307XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkYXRhIGluIHN0b3JhZ2Ugd2l0aCB0aGUgZ2l2ZW4ga2V5IHRvIHRoZSBwcm92aWRlZCBkYXRhLFxuICAgKiBjb21wbGV0ZWx5IG92ZXJ3cml0aW5nIGFueSBleGlzdGluZyBkYXRhLlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRoZSBzdG9yYWdlIGtleSB0byBzZXRcbiAgICogQHBhcmFtIHsqfSBkYXRhIHRoZSBkYXRhIHRvIHNldFxuICAgKi9cbiAgc2V0IChrZXksIGRhdGEpIHtcbiAgICB0aGlzLl9pbml0RGF0YUNvbnRhaW5lcihrZXksIGRhdGEpO1xuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJba2V5XS5zZXQoZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGFsbCBrZXkvdmFsdWUgcGFpcnMgaW4gdGhlIHByb3ZpZGVkIG1hcCB0byB0aGUgc3RvcmFnZVxuICAgKiBAcGFyYW0geyp9IGRhdGEgVGhlIGtleS92YWx1ZSBwYWlycyB0byBzZXQgaW4gdGhlIHN0b3JhZ2VcbiAgICovXG4gIHNldEFsbCAoZGF0YSkge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyhkYXRhKSkge1xuICAgICAgdGhpcy5zZXQoa2V5LCB2YWwpO1xuICAgIH1cbiAgfVxuXG4gIF9pbml0RGF0YUNvbnRhaW5lciAoa2V5LCBkYXRhKSB7XG4gICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkIHx8IGtleSA9PT0gbnVsbCB8fCB0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNTdG9yYWdlRXJyb3IoJ0ludmFsaWQgc3RvcmFnZSBrZXkgcHJvdmlkZWQnLCBrZXksIGRhdGEpO1xuICAgIH1cbiAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkIHx8IGRhdGEgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzU3RvcmFnZUVycm9yKCdObyBkYXRhIHByb3ZpZGVkJywga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJba2V5XSA9IG5ldyBNb2R1bGVEYXRhKGtleSk7XG4gICAgICB0aGlzLl9hcHBseUZ1dHVyZUxpc3RlbmVycyhrZXkpO1xuICAgIH1cbiAgfVxuXG4gIGdldFN0YXRlIChtb2R1bGVJZCkge1xuICAgIGlmICh0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXSkge1xuICAgICAgcmV0dXJuIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdLnJhdygpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldEFsbCAoa2V5KSB7XG4gICAgY29uc3QgZGF0YSA9IFtdO1xuICAgIGZvciAoY29uc3QgZGF0YUtleSBvZiBPYmplY3Qua2V5cyh0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyKSkge1xuICAgICAgaWYgKGRhdGFLZXkuc3RhcnRzV2l0aChrZXkpICYmIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbZGF0YUtleV0ucmF3KCkgIT09IG51bGwpIHtcbiAgICAgICAgZGF0YS5wdXNoKHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbZGF0YUtleV0ucmF3KCkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIG9uIChldnQsIG1vZHVsZUlkLCBjYikge1xuICAgIGxldCBtb2R1bGVEYXRhID0gdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF07XG4gICAgaWYgKG1vZHVsZURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdID0gW107XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0ucHVzaCh7XG4gICAgICAgIGV2ZW50OiBldnQsXG4gICAgICAgIGNiOiBjYlxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5vbihldnQsIGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9mZiAoZXZ0LCBtb2R1bGVJZCwgY2IpIHtcbiAgICBsZXQgbW9kdWxlRGF0YSA9IHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdO1xuICAgIGlmIChtb2R1bGVEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXS5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0ub2ZmKGV2dCwgY2IpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2FwcGx5RnV0dXJlTGlzdGVuZXJzIChtb2R1bGVJZCkge1xuICAgIGxldCBmdXR1cmVzID0gdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXTtcbiAgICBpZiAoIWZ1dHVyZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZ1dHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBmdXR1cmUgPSBmdXR1cmVzW2ldO1xuICAgICAgdGhpcy5vbihmdXR1cmUuZXZlbnQsIG1vZHVsZUlkLCBmdXR1cmUuY2IpO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2hBcGkgfSBmcm9tICcuL3NlYXJjaC9zZWFyY2hhcGknO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBbmFseXRpY3NSZXBvcnRlciB9IGZyb20gJy4vYW5hbHl0aWNzL2FuYWx5dGljc3JlcG9ydGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kdWxlRGF0YSB9IGZyb20gJy4vc3RvcmFnZS9tb2R1bGVkYXRhJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZS9nbG9iYWxzdG9yYWdlJztcbiIsIi8qKiBAbW9kdWxlIENvbXBvbmVudCAqL1xuXG5pbXBvcnQgeyBSZW5kZXJlcnMgfSBmcm9tICcuLi9yZW5kZXJpbmcvY29uc3QnO1xuXG5pbXBvcnQgRE9NIGZyb20gJy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0YXRlIGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgQW5hbHl0aWNzUmVwb3J0ZXIgfSBmcm9tICcuLi8uLi9jb3JlJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcblxuLyoqXG4gKiBDb21wb25lbnQgaXMgYW4gYWJzdHJhY3Rpb24gdGhhdCBlbmNhcHN1bGF0ZXMgc3RhdGUsIGJlaGF2aW9yLFxuICogYW5kIHZpZXcgZm9yIGEgcGFydGljdWxhciBjaHVuayBvZiBmdW5jdGlvbmFsaXR5IG9uIHRoZSBwYWdlLlxuICpcbiAqIFRoZSBBUEkgZXhwb3NlcyBldmVudCBsaWZlIGN5Y2xlIGhvb2tzIGZvciB3aGVuIHRoaW5ncyBhcmUgcmVuZGVyZWQsXG4gKiBtb3VudGVkLCBjcmVhdGVkLCBldGMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yICh0eXBlLCBjb25maWcgPSB7fSkge1xuICAgIC8vIFNpbXBsZSBmYWNhZGUgcGF0dGVybiB0byBlbmFibGUgdGhlIHVzZXIgdG8gcGFzcyBhIHNpbmdsZSBvYmplY3RcbiAgICAvLyBjb250YWluaW5nIGFsbCB0aGUgbmVjZXNzYXJ5IG9wdGlvbnMgYW5kIHNldHRpbmdzXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uZmlnID0gdHlwZTtcbiAgICAgIHR5cGUgPSBjb25maWcudHlwZTtcbiAgICB9XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFVuaXF1ZSBuYW1lIG9mIHRoaXMgY29tcG9uZW50IGluc3RhbmNlXG4gICAgICogVXNlZCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIG90aGVyIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgdHlwZVxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5uYW1lID0gY29uZmlnLm5hbWUgfHwgdGhpcy5jb25zdHJ1Y3Rvci50eXBlO1xuXG4gICAgLyoqXG4gICAgICogQ2FjaGUgdGhlIG9wdGlvbnMgc28gdGhhdCB3ZSBjYW4gcHJvcG9nYXRlIHByb3Blcmx5IHRvIGNoaWxkIGNvbXBvbmVudHNcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcblxuICAgIC8qKlxuICAgICAqIEFuIGlkZW50aWZpZXIgdXNlZCB0byBjbGFzc2lmeSB0aGUgdHlwZSBvZiBjb21wb25lbnQuXG4gICAgICogVGhlIGNvbXBvbmVudCBtYW5hZ2VyIHVzZXMgdGhpcyBpbmZvcm1hdGlvbiBpbiBvcmRlciB0byBwZXJzaXN0IGFuZCBvcmdhbml6ZSBjb21wb25lbnRzXG4gICAgICogQHR5cGUge3N0cmluZ3xDb21wb25lbnRUeXBlfVxuICAgICAqL1xuICAgIHRoaXMuX3R5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgcGFyZW50IGNvbXBvbmVudCwgaWYgZXhpc3RzXG4gICAgICogQHR5cGUge0NvbXBvbmVudH1cbiAgICAgKi9cbiAgICB0aGlzLl9wYXJlbnQgPSBjb25maWcucGFyZW50IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGNvbnRhaW5lciBmb3IgYWxsIHRoZSBjaGlsZCBjb21wb25lbnRzXG4gICAgICogQHR5cGUge0NvbXBvbmVudFtdfVxuICAgICAqL1xuICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3RhdGUgKGRhdGEpIG9mIHRoZSBjb21wb25lbnQgdG8gYmUgcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlIGZvciByZW5kZXJpbmdcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX3N0YXRlID0gbmV3IFN0YXRlKGNvbmZpZy5zdGF0ZSk7XG5cbiAgICAvKipcbiAgICAgKiBUT0RPKGJpbGx5KSBUaGlzIHNob3VsZCBiZSAnc2VydmljZXMnXG4gICAgICovXG4gICAgdGhpcy5jb3JlID0gY29uZmlnLmNvcmUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlciwgd2hpY2ggY29udGFpbnMgYWxsIG9mIHRoZSBjb21wb25lbnQgY2xhc3Nlc1xuICAgICAqIGVsaWdpYmxlIHRvIGJlIGNyZWF0ZWRcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50TWFuYWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIgPSBjb25maWcuY29tcG9uZW50TWFuYWdlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGFuYWx5dGljcyByZXBvcnRlciwgdXNlZCB0byByZXBvcnQgZXZlbnRzIGZvciB0aGlzIGNvbXBvbmVudFxuICAgICAqIEB0eXBlIHtBbmFseXRpY3NSZXBvcnRlcn1cbiAgICAgKi9cbiAgICB0aGlzLmFuYWx5dGljc1JlcG9ydGVyID0gY29uZmlnLmFuYWx5dGljc1JlcG9ydGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBPcHRpb25zIHRvIGluY2x1ZGUgd2l0aCBhbGwgYW5hbHl0aWMgZXZlbnRzIHNlbnQgYnkgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYW5hbHl0aWNzT3B0aW9ucyA9IGNvbmZpZy5hbmFseXRpY3NPcHRpb25zIHx8IHt9O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIERPTSBub2RlIHRoYXQgdGhlIGNvbXBvbmVudCB3aWxsIGJlIGFwcGVuZGVkIHRvIHdoZW4gbW91bnRlZC9yZW5kZXJlZC5cbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gbnVsbCkge1xuICAgICAgaWYgKHR5cGVvZiBjb25maWcuY29udGFpbmVyICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgYGNvbnRhaW5lcmAgb3B0aW9uIGZvciBjb21wb25lbnQgY29uZmlndXJhdGlvbi4gTXVzdCBiZSBvZiB0eXBlIGBzdHJpbmdgLicpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29udGFpbmVyID0gRE9NLnF1ZXJ5KGNvbmZpZy5jb250YWluZXIpIHx8IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IERPTS5xdWVyeSh0aGlzLl9wYXJlbnQuX2NvbnRhaW5lciwgY29uZmlnLmNvbnRhaW5lcik7XG5cbiAgICAgIC8vIElmIHdlIGhhdmUgYSBwYXJlbnQsIGFuZCB0aGUgY29udGFpbmVyIGlzIG1pc3NpbmcgZnJvbSB0aGUgRE9NLFxuICAgICAgLy8gd2UgY29uc3RydWN0IHRoZSBjb250YWluZXIgYW5kIGFwcGVuZCBpdCB0byB0aGUgcGFyZW50XG4gICAgICBpZiAodGhpcy5fY29udGFpbmVyID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IERPTS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiBjb25maWcuY29udGFpbmVyLnN1YnN0cmluZygxLCBjb25maWcuY29udGFpbmVyLmxlbmd0aClcbiAgICAgICAgfSk7XG4gICAgICAgIERPTS5hcHBlbmQodGhpcy5fcGFyZW50Ll9jb250YWluZXIsIHRoaXMuX2NvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBjb250YWluZXIgRE9NIG5vZGU6ICcgKyBjb25maWcuY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIGN1c3RvbSBjbGFzcyB0byBiZSBhcHBsaWVkIHRvIHt0aGlzLl9jb250YWluZXJ9IG5vZGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2NsYXNzTmFtZSA9IGNvbmZpZy5jbGFzcyB8fCAnY29tcG9uZW50JztcblxuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIHJlbmRlciBmdW5jdGlvbiB0byBiZSB1c2VkIGluc3RlYWQgb2YgdXNpbmcgdGhlIGRlZmF1bHQgcmVuZGVyZXJcbiAgICAgKiBAdHlwZSB7UmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyID0gY29uZmlnLnJlbmRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGRlZmF1bHQge1JlbmRlcmVyfSB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgcmVuZGVyaW5nIHRoZSB0ZW1wbGF0ZVxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXJlciA9IGNvbmZpZy5yZW5kZXJlciB8fCBSZW5kZXJlcnMuSGFuZGxlYmFycztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSBzdHJpbmcgdG8gdXNlIGZvciByZW5kZXJpbmcgdGhlIGNvbXBvbmVudFxuICAgICAqIElmIHRoaXMgaXMgbGVmdCBlbXB0eSwgd2UgbG9va3VwIHRoZSB0ZW1wbGF0ZSB0aGUgYmFzZSB0ZW1wbGF0ZXMgdXNpbmcgdGhlIHRlbXBsYXRlTmFtZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGUgPSBjb25maWcudGVtcGxhdGUgPyB0aGlzLl9yZW5kZXJlci5jb21waWxlKGNvbmZpZy50ZW1wbGF0ZSkgOiBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlTmFtZSB0byB1c2UgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50LlxuICAgICAqIFRoaXMgaXMgb25seSB1c2VkIGlmIF90ZW1wbGF0ZSBpcyBlbXB0eS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IGNvbmZpZy50ZW1wbGF0ZU5hbWUgfHwgdGhpcy5jb25zdHJ1Y3Rvci5kZWZhdWx0VGVtcGxhdGVOYW1lKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCBzdGF0ZSBpbmRpY2F0aW5nIHdoZXRoZXIgb3Igbm90IHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbW91bnRlZCB0byB0aGUgRE9NXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2ssIHRoYXRzIHVzZWQgdG8gdHJhbnNmb3JtIHRoZSBpbnRlcm5hbCBkYXRhXG4gICAgICogbW9kZWxzIG9mIHRoZSBjb21wb25lbnRzLCBiZWZvcmUgaXQgZ2V0cyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQgc3RhdGUuXG4gICAgICogQnkgZGVmYXVsdCwgbm8gdHJhbnNmb3JtYXRpb24gaGFwcGVucy5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy50cmFuc2Zvcm1EYXRhID0gY29uZmlnLnRyYW5zZm9ybURhdGEgfHwgdGhpcy50cmFuc2Zvcm1EYXRhIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIGEgY29tcG9uZW50IGlzIGNyZWF0ZWQuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMub25DcmVhdGUgPSBjb25maWcub25DcmVhdGUgfHwgdGhpcy5vbkNyZWF0ZSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBNb3VudGVkLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLm9uTW91bnQgPSBjb25maWcub25Nb3VudCB8fCB0aGlzLm9uTW91bnQgfHwgZnVuY3Rpb24gKCkgeyB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIGEgY29tcG9uZW50cyBzdGF0ZSBpcyB1cGRhdGVkLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLm9uVXBkYXRlID0gY29uZmlnLm9uVXBkYXRlIHx8IHRoaXMub25VcGRhdGUgfHwgZnVuY3Rpb24gKCkgeyB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdkZWZhdWx0JztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdDb21wb25lbnQnO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaW5pdCAob3B0cykge1xuICAgIHRoaXMuc2V0U3RhdGUob3B0cy5kYXRhIHx8IG9wdHMuc3RhdGUgfHwge30pO1xuICAgIHRoaXMub25DcmVhdGUoKTtcbiAgICB0aGlzLl9zdGF0ZS5vbigndXBkYXRlJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgICAgdGhpcy5tb3VudCgpO1xuICAgIH0pO1xuXG4gICAgRE9NLmFkZENsYXNzKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB7IF9jb25maWc6IHRoaXMuX2NvbmZpZyB9LCBkYXRhKTtcbiAgICB0aGlzLl9zdGF0ZS5zZXQobmV3U3RhdGUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0U3RhdGUgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuZ2V0KHByb3ApO1xuICB9XG5cbiAgaGFzU3RhdGUgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuaGFzKHByb3ApO1xuICB9XG5cbiAgdHJhbnNmb3JtRGF0YSAoZGF0YSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYWRkQ2hpbGQgKGRhdGEsIHR5cGUsIG9wdHMpIHtcbiAgICBsZXQgY2hpbGRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKFxuICAgICAgdHlwZSxcbiAgICAgIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSwgb3B0cyB8fCB7fSwge1xuICAgICAgICBfcGFyZW50T3B0czogdGhpcy5fY29uZmlnXG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGNoaWxkQ29tcG9uZW50KTtcbiAgICByZXR1cm4gY2hpbGRDb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogVW5tb3VudCBhbmQgcmVtb3ZlIHRoaXMgY29tcG9uZW50IGFuZCBpdHMgY2hpbGRyZW4gZnJvbSB0aGUgbGlzdFxuICAgKiBvZiBhY3RpdmUgY29tcG9uZW50c1xuICAgKi9cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLl9jaGlsZHJlbi5mb3JFYWNoKGMgPT4gYy5yZW1vdmUoKSk7XG4gICAgdGhpcy51bk1vdW50KCk7XG4gICAgdGhpcy5jb21wb25lbnRNYW5hZ2VyLnJlbW92ZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHJlbmRlciBtZXRob2QgdG8gYmUgdXNlZCBmb3IgcmVuZGVyaW5nIHRoZSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVuZGVyXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHNldFJlbmRlciAocmVuZGVyKSB7XG4gICAgdGhpcy5fcmVuZGVyID0gcmVuZGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgcmVuZGVyZXIgZm9yIHRoZSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtSZW5kZXJlclR5cGV9IHJlbmRlcmVyXG4gICAqL1xuICBzZXRSZW5kZXJlciAocmVuZGVyZXIpIHtcbiAgICB0aGlzLl9yZW5kZXJlciA9IFJlbmRlcmVyc1tyZW5kZXJlcl07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdGVtcGxhdGUgZm9yIHRoZSBjb21wb25lbnQgdG8gdXNlIHdoZW4gcmVuZGVyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICAgKi9cbiAgc2V0VGVtcGxhdGUgKHRlbXBsYXRlKSB7XG4gICAgdGhpcy5fdGVtcGxhdGUgPSB0aGlzLl9yZW5kZXJlci5jb21waWxlKHRlbXBsYXRlKTtcbiAgfVxuXG4gIHVuTW91bnQgKCkge1xuICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG4gICAgRE9NLmVtcHR5KHRoaXMuX2NvbnRhaW5lcik7XG4gIH1cblxuICBtb3VudCAoKSB7XG4gICAgaWYgKCF0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMudW5Nb3VudCgpO1xuICAgIGlmICh0aGlzLmJlZm9yZU1vdW50KCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBET00uYXBwZW5kKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5yZW5kZXIodGhpcy5fc3RhdGUuYXNKU09OKCkpKTtcblxuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy5fb25Nb3VudCgpO1xuXG4gICAgLy8gQXR0YWNoIGFuYWx5dGljcyBob29rcyBhcyBuZWNlc3NhcnlcbiAgICBpZiAodGhpcy5hbmFseXRpY3NSZXBvcnRlcikge1xuICAgICAgbGV0IGRvbUhvb2tzID0gRE9NLnF1ZXJ5QWxsKHRoaXMuX2NvbnRhaW5lciwgJ1tkYXRhLWV2ZW50dHlwZV06bm90KFtkYXRhLWlzLWFuYWx5dGljcy1hdHRhY2hlZF0pJyk7XG4gICAgICBkb21Ib29rcy5mb3JFYWNoKHRoaXMuX2NyZWF0ZUFuYWx5dGljc0hvb2suYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfb25Nb3VudCAoKSB7XG4gICAgdGhpcy5vbk1vdW50KHRoaXMpO1xuICAgIGlmICh0aGlzLl9jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgIGNoaWxkLl9vbk1vdW50KCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogcmVuZGVyIHRoZSB0ZW1wbGF0ZSB1c2luZyB0aGUge1JlbmRlcmVyfSB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGFuZCB0ZW1wbGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICByZW5kZXIgKGRhdGEgPSB0aGlzLl9zdGF0ZS5nZXQoKSkge1xuICAgIHRoaXMuYmVmb3JlUmVuZGVyKCk7XG4gICAgZGF0YSA9IHRoaXMudHJhbnNmb3JtRGF0YShkYXRhKTtcblxuICAgIGxldCBodG1sID0gJyc7XG4gICAgLy8gVXNlIGVpdGhlciB0aGUgY3VzdG9tIHJlbmRlciBmdW5jdGlvbiBvciB0aGUgaW50ZXJuYWwgcmVuZGVyZXJcbiAgICAvLyBkZXBlbmRhbnQgb24gdGhlIGNvbXBvbmVudCBjb25maWd1cmF0aW9uXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGh0bWwgPSB0aGlzLl9yZW5kZXIoZGF0YSk7XG4gICAgICBpZiAodHlwZW9mIGh0bWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVuZGVyIG1ldGhvZCBtdXN0IHJldHVybiBIVE1MIGFzIHR5cGUge3N0cmluZ30nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVuZGVyIHRoZSBleGlzdGluZyB0ZW1wbGF0ZXMgYXMgYSBzdHJpbmdcbiAgICAgIGh0bWwgPSB0aGlzLl9yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgICB0ZW1wbGF0ZTogdGhpcy5fdGVtcGxhdGUsXG4gICAgICAgIHRlbXBsYXRlTmFtZTogdGhpcy5fdGVtcGxhdGVOYW1lXG4gICAgICB9LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvLyBXZSBjcmVhdGUgYW4gSFRNTCBEb2N1bWVudCBmcmFnbWVudCB3aXRoIHRoZSByZW5kZXJlZCBzdHJpbmdcbiAgICAvLyBTbyB0aGF0IHdlIGNhbiBxdWVyeSBpdCBmb3IgcHJvY2Vzc2luZyBvZiBzdWIgY29tcG9uZW50c1xuICAgIGxldCBlbCA9IERPTS5jcmVhdGUoaHRtbCk7XG5cbiAgICAvLyBQcm9jZXNzIHRoZSBET00gdG8gZGV0ZXJtaW5lIGlmIHdlIHNob3VsZCBjcmVhdGVcbiAgICAvLyBpbi1tZW1vcnkgc3ViLWNvbXBvbmVudHMgZm9yIHJlbmRlcmluZ1xuICAgIGxldCBkb21Db21wb25lbnRzID0gRE9NLnF1ZXJ5QWxsKGVsLCAnW2RhdGEtY29tcG9uZW50XScpO1xuICAgIGRvbUNvbXBvbmVudHMuZm9yRWFjaChjID0+IHRoaXMuX2NyZWF0ZVN1YmNvbXBvbmVudChjLCBkYXRhKSk7XG5cbiAgICB0aGlzLmFmdGVyUmVuZGVyKCk7XG4gICAgcmV0dXJuIGVsLmlubmVySFRNTDtcbiAgfVxuXG4gIF9jcmVhdGVTdWJjb21wb25lbnQgKGRvbUNvbXBvbmVudCwgZGF0YSkge1xuICAgIGxldCBkYXRhc2V0ID0gZG9tQ29tcG9uZW50LmRhdGFzZXQ7XG4gICAgbGV0IHR5cGUgPSBkYXRhc2V0LmNvbXBvbmVudDtcbiAgICBsZXQgcHJvcCA9IGRhdGFzZXQucHJvcDtcbiAgICBsZXQgb3B0cyA9IGRhdGFzZXQub3B0cyA/IEpTT04ucGFyc2UoZGF0YXNldC5vcHRzKSA6IHt9O1xuXG4gICAgLy8gUmVuZGVyaW5nIGEgc3ViIGNvbXBvbmVudCBzaG91bGQgYmUgd2l0aGluIHRoZSBjb250ZXh0LFxuICAgIC8vIG9mIHRoZSBub2RlIHRoYXQgd2UgcHJvY2Vzc2VkIGl0IGZyb21cbiAgICBvcHRzID0gT2JqZWN0LmFzc2lnbihvcHRzLCB7XG4gICAgICBjb250YWluZXI6IGRvbUNvbXBvbmVudFxuICAgIH0pO1xuXG4gICAgbGV0IGNoaWxkRGF0YSA9IGRhdGFbcHJvcF0gfHwge307XG5cbiAgICAvLyBUT0RPKGJpbGx5KSBSaWdodCBub3csIGlmIHdlIHByb3ZpZGUgYW4gYXJyYXkgYXMgdGhlIGRhdGEgcHJvcCxcbiAgICAvLyB0aGUgYmVoYXZpb3IgaXMgdG8gY3JlYXRlIG1hbnkgY29tcG9uZW50cyBmb3IgZWFjaCBpdGVtIGluIHRoZSBhcnJheS5cbiAgICAvLyBUSEFUIGludGVyZmFjZSBTSE9VTEQgY2hhbmdlIHRvIHVzZSBhIGRpZmZlcmVudCBwcm9wZXJ0eSB0aGF0IGRlZmluZXNcbiAgICAvLyB3aGV0aGVyIHRvIGFycmF5IGRhdGEgc2hvdWxkIGJlIHVzZWQgZm9yIGEgc2luZ2xlIGNvbXBvbmVudCBvclxuICAgIC8vIHRvIGNyZWF0ZSBtYW55IGNvbXBvbmVudHMgZm9yIGVhY2ggaXRlbS5cbiAgICAvLyBPdmVybG9hZGluZyBhbmQgaGF2aW5nIHRoaXMgc2lkZSBlZmZlY3QgaXMgdW5pbnR1aXRpdmUgYW5kIFdST05HXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNoaWxkRGF0YSkpIHtcbiAgICAgIGxldCBjaGlsZENvbXBvbmVudCA9IHRoaXMuYWRkQ2hpbGQoY2hpbGREYXRhLCB0eXBlLCBvcHRzKTtcbiAgICAgIERPTS5hcHBlbmQoZG9tQ29tcG9uZW50LCBjaGlsZENvbXBvbmVudC5yZW5kZXIoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlLCByZW5kZXIgdGhlIGNvbXBvbmVudCBhcyBleHBlY3RlZFxuICAgIGxldCBjaGlsZEhUTUwgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkQ29tcG9uZW50ID0gdGhpcy5hZGRDaGlsZChjaGlsZERhdGFbaV0sIHR5cGUsIG9wdHMpO1xuICAgICAgY2hpbGRIVE1MLnB1c2goY2hpbGRDb21wb25lbnQucmVuZGVyKCkpO1xuICAgIH1cblxuICAgIERPTS5hcHBlbmQoZG9tQ29tcG9uZW50LCBjaGlsZEhUTUwuam9pbignJykpO1xuICB9XG5cbiAgX2NyZWF0ZUFuYWx5dGljc0hvb2sgKGRvbUNvbXBvbmVudCkge1xuICAgIGRvbUNvbXBvbmVudC5kYXRhc2V0LmlzQW5hbHl0aWNzQXR0YWNoZWQgPSB0cnVlO1xuICAgIGNvbnN0IGRhdGFzZXQgPSBkb21Db21wb25lbnQuZGF0YXNldDtcbiAgICBjb25zdCB0eXBlID0gZGF0YXNldC5ldmVudHR5cGU7XG4gICAgY29uc3QgbGFiZWwgPSBkYXRhc2V0LmV2ZW50bGFiZWw7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGRhdGFzZXQuZXZlbnRvcHRpb25zID8gSlNPTi5wYXJzZShkYXRhc2V0LmV2ZW50b3B0aW9ucykgOiB7fTtcblxuICAgIERPTS5vbihkb21Db21wb25lbnQsICdjbGljaycsIGUgPT4ge1xuICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQW5hbHl0aWNzRXZlbnQodHlwZSwgbGFiZWwpO1xuICAgICAgZXZlbnQuYWRkT3B0aW9ucyh0aGlzLl9hbmFseXRpY3NPcHRpb25zKTtcbiAgICAgIGV2ZW50LmFkZE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICB0aGlzLmFuYWx5dGljc1JlcG9ydGVyLnJlcG9ydChldmVudCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogb25DcmVhdGUgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBjb25zdHJ1Y3RlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25DcmVhdGUgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvblVwZGF0ZSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudCBjaGFuZ2VzXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvblVwZGF0ZSAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIGJlZm9yZVJlbmRlciBldmVudCBpcyB0cmlnZ2VyZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIGJlZm9yZVJlbmRlciAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIGFmdGVyUmVuZGVyIGV2ZW50IGlzIHRyaWdnZXJlZCBhZnRlciB0aGUgY29tcG9uZW50IGlzIHJlbmRlcmVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBhZnRlclJlbmRlciAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uTW91bnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBhcHBlbmRlZCB0byB0aGUgRE9NXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvbk1vdW50IChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25Vbk1vdW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBET01cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uVW5Nb3VudCAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIGJlZm9yZU1vdW50IGlzIHRyaWdnZXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkIHRvIHRoZSBET01cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIGJlZm9yZU1vdW50IChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25EZXN0cm95IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvbkRlc3Ryb3kgKGNiKSB7XG5cbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTmF2aWdhdGlvbkNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uL2RvbS9zZWFyY2hwYXJhbXMnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuLyoqXG4gKiBUaGUgZGVib3VuY2UgZHVyYXRpb24gZm9yIHJlc2l6ZSBldmVudHNcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbmNvbnN0IFJFU0laRV9ERUJPVU5DRSA9IDEwMDtcblxuLyoqXG4gKiBUaGUgVGFiIGlzIGEgbW9kZWwgdGhhdCBpcyB1c2VkIHRvIHBvd2VyIHRoZSBOYXZpZ2F0aW9uIHRhYnMgaW4gdGhlIHZpZXcuXG4gKiBJdCdzIGluaXRpYWxpemVkIHRocm91Z2ggdGhlIGNvbmZpZ3VyYXRpb24gcHJvdmlkZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIFRhYiB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgdGFiIHRoYXQgaXMgZXhwb3NlZCBmb3IgdGhlIGxpbmtcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWwgPSBjb25maWcubGFiZWw7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmxhYmVsICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcignbGFiZWwgaXMgYSByZXF1aXJlZCBjb25maWd1cmF0aW9uIG9wdGlvbiBmb3IgdGFiLicsICdOYXZpZ2F0aW9uQ29tcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBsZXRlIFVSTCwgaW5jbHVkaW5nIHRoZSBwYXJhbXNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudXJsID0gY29uZmlnLnVybDtcbiAgICBpZiAodHlwZW9mIHRoaXMudXJsICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcigndXJsIGlzIGEgcmVxdWlyZWQgY29uZmlndXJhdGlvbiBvcHRpb24gZm9yIHRhYi4nLCAnTmF2aWdhdGlvbkNvbXBvbmVudCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBzZXJ2ZXJzaWRlIHZlcnRpY2FsIGNvbmZpZyBpZCB0aGF0IHRoaXMgaXMgcmVmZXJlbmNlZCB0by5cbiAgICAgKiBCeSBwcm92aWRpbmcgdGhpcywgZW5hYmxlcyBkeW5hbWljIHNvcnRpbmcgYmFzZWQgb24gcmVzdWx0cy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuY29uZmlnSWQgPSBjb25maWcuY29uZmlnSWQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBiYXNlIFVSTCB1c2VkIGZvciBjb25zdHJ1Y3RpbmcgdGhlIFVSTCB3aXRoIHBhcmFtc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5iYXNlVXJsID0gY29uZmlnLnVybDtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0byBzaG93IHRoaXMgdGFiIGZpcnN0IGluIHRoZSBvcmRlclxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNGaXJzdCA9IGNvbmZpZy5pc0ZpcnN0IHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0byBhcHBseSBhIHNwZWNpYWwgY2xhc3MgdG8gdGhlXG4gICAgICogbWFya3VwIHRvIGRldGVybWluZSBpZiBpdCdzIGFuIGFjdGl2ZSB0YWJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmlzQWN0aXZlID0gY29uZmlnLmlzQWN0aXZlIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIGhlbHBlciB0byBjb25zdHJ1Y3QgdGhlIGV2ZW50T3B0aW9ucyBmb3IgYW5hbHl0aWNzXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgZXZlbnRPcHRpb25zICgpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdmVydGljYWxDb25maWdJZDogdGhpcy5jb25maWdJZFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGZyb20gd2lsbCBjb25zdHJ1Y3QgYSBtYXAgb2YgY29uZmlnSWQgdG8ge1RhYn0gZnJvbVxuICAgKiBhIGNvbmZpZ3VyYXRpb24gZmlsZVxuICAgKiBAcGFyYW0ge29iamVjdH0gdGFic0NvbmZpZyB0aGUgY29uZmlndXJhdGlvbiB0byB1c2VcbiAgICovXG4gIHN0YXRpYyBmcm9tICh0YWJzQ29uZmlnKSB7XG4gICAgbGV0IHRhYnMgPSB7fTtcbiAgICAvLyBQYXJzZSB0aGUgb3B0aW9ucyBhbmQgYnVpbGQgb3V0IG91ciB0YWJzIGFuZFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFic0NvbmZpZy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRhYiA9IHRhYnNDb25maWdbaV07XG4gICAgICAvLyBGb3IgdGFicyB3aXRob3V0IGNvbmZpZyBpZHMsIG1hcCB0aGVpciBVUkwgdG8gdGhlIGNvbmZpZ0lEXG4gICAgICAvLyB0byBhdm9pZCBkdXBsaWNhdGlvbiBvZiByZW5kZXJzXG4gICAgICBpZiAodGFiLmNvbmZpZ0lkID09PSB1bmRlZmluZWQgJiYgdGFic1t0YWIuY29uZmlnSWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGFiLmNvbmZpZ0lkID0gdGFiLnVybDtcbiAgICAgIH1cblxuICAgICAgdGFic1t0YWIuY29uZmlnSWRdID0gbmV3IFRhYih0YWIpO1xuICAgIH1cbiAgICByZXR1cm4gdGFicztcbiAgfVxufVxuXG4vKipcbiAqIE5hdmlnYXRpb25Db21wb25lbnQgZXhwb3NlcyBhbiBpbnRlcmZhY2UgZm9yIGJ1aWxkaW5nIGEgZHluYW1pY1xuICogbmF2aWdhdGlvbiB0aGF0IGlzIHBvd2VyZWQgYnkgdW5pdmVyc2FsIHNlYXJjaCB1cGRhdGVzLlxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRvIHNob3cgb24gdGhlIGRyb3Bkb3duIG1lbnUgYnV0dG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmRyb3Bkb3duTGFiZWwgPSBjb25maWcuZHJvcGRvd25MYWJlbCB8fCAnTW9yZSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgaWNvbiB0byBzaG93IG9uIHRoZSBkcm9wZG93biBtZW51IGJ1dHRvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5kcm9wZG93bkljb24gPSBjb25maWcuZHJvcGRvd25JY29uIHx8ICdrYWJvYic7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCByZW5kZXIgYSBzdGF0aWMgbmF2aWdhdGlvbiB3aXRoIG5vIFwibW9yZVwiIG1lbnVcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnN0YXRpYyA9IGNvbmZpZy5zdGF0aWMgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGF0YSBzdG9yYWdlIGtleVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLk5BVklHQVRJT047XG5cbiAgICAvKipcbiAgICAgKiBVbm9yZGVyZWQgbWFwIG9mIGVhY2ggdGFiLCBrZXllZCBieSBWUyBjb25maWdJZFxuICAgICAqIEB0eXBlIHtPYmplY3QuPFN0cmluZywgT2JqZWN0Pn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RhYnMgPSBUYWIuZnJvbShjb25maWcudGFicyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3JkZXIgb2YgdGhlIHRhYnMsIHBhcnNlZCBmcm9tIGNvbmZpZ3VyYXRpb24gb3IgVVJMLlxuICAgICAqIFRoaXMgZ2V0cyB1cGRhdGVkIGJhc2VkIG9uIHRoZSBzZXJ2ZXIgcmVzdWx0c1xuICAgICAqIEB0eXBlIHtBcnJheS48U3RyaW5nPn0gVGhlIGxpc3Qgb2YgVlMgY29uZmlnSWRzXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90YWJPcmRlciA9IHRoaXMuZ2V0RGVmYXVsdFRhYk9yZGVyKGNvbmZpZy50YWJzLCB0aGlzLmdldFVybFBhcmFtcygpKTtcblxuICAgIC8qKlxuICAgICAqIEJyZWFrcG9pbnRzIGF0IHdoaWNoIG5hdmlnYXRpb24gaXRlbXMgbW92ZSB0byB0aGUgXCJtb3JlXCIgZHJvcGRvd25cbiAgICAgKiBAdHlwZSB7bnVtYmVyW119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9uYXZCcmVha3BvaW50cyA9IFtdO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ05hdmlnYXRpb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICduYXZpZ2F0aW9uL25hdmlnYXRpb24nO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIGlmICghdGhpcy5zdGF0aWMpIHtcbiAgICAgIERPTS5vbih3aW5kb3csICdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9kZWJvdW5jZVRpbWVyKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2RlYm91bmNlVGltZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZGVib3VuY2VUaW1lciA9IHNldFRpbWVvdXQodGhpcy5yZWZpdE5hdi5iaW5kKHRoaXMpLCBSRVNJWkVfREVCT1VOQ0UpO1xuICAgICAgfSk7XG4gICAgICBET00ub24od2luZG93LCAnY2xpY2snLCB0aGlzLmNoZWNrT3V0c2lkZUNsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIGlmICghdGhpcy5zdGF0aWMpIHtcbiAgICAgIHRoaXMucmVmaXROYXYoKTtcbiAgICAgIERPTS5vbihET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9yZScpLCAnY2xpY2snLCB0aGlzLnRvZ2dsZU1vcmVEcm9wZG93bi5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICByZWZpdE5hdiAoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IG1vcmVCdXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9yZScpO1xuICAgIGNvbnN0IG1haW5MaW5rcyA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1leHBhbmRlZCcpO1xuICAgIGNvbnN0IGNvbGxhcHNlZExpbmtzID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vZGFsJyk7XG5cbiAgICBjb25zdCBuYXZXaWR0aCA9IG1vcmVCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCd5eHQtTmF2LWl0ZW0tLW1vcmUnKVxuICAgICAgPyBjb250YWluZXIub2Zmc2V0V2lkdGhcbiAgICAgIDogY29udGFpbmVyLm9mZnNldFdpZHRoIC0gbW9yZUJ1dHRvbi5vZmZzZXRXaWR0aDtcbiAgICBsZXQgbnVtQnJlYWtwb2ludHMgPSB0aGlzLl9uYXZCcmVha3BvaW50cy5sZW5ndGg7XG5cbiAgICBpZiAobWFpbkxpbmtzLm9mZnNldFdpZHRoID4gbmF2V2lkdGgpIHtcbiAgICAgIHRoaXMuX25hdkJyZWFrcG9pbnRzLnB1c2gobWFpbkxpbmtzLm9mZnNldFdpZHRoKTtcbiAgICAgIGNvbnN0IGxhc3RMaW5rID0gbWFpbkxpbmtzLmNoaWxkcmVuLml0ZW0obWFpbkxpbmtzLmNoaWxkcmVuLmxlbmd0aCAtIDEpO1xuICAgICAgaWYgKGxhc3RMaW5rID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbGxhcHNlZExpbmtzLnByZXBlbmQobGFzdExpbmspO1xuXG4gICAgICBpZiAobW9yZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3l4dC1OYXYtaXRlbS0tbW9yZScpKSB7XG4gICAgICAgIG1vcmVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgneXh0LU5hdi1pdGVtLS1tb3JlJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChudW1CcmVha3BvaW50cyAmJiBuYXZXaWR0aCA+IHRoaXMuX25hdkJyZWFrcG9pbnRzW251bUJyZWFrcG9pbnRzIC0gMV0pIHtcbiAgICAgICAgY29uc3QgZmlyc3RMaW5rID0gY29sbGFwc2VkTGlua3MuY2hpbGRyZW4uaXRlbSgwKTtcbiAgICAgICAgaWYgKGZpcnN0TGluayA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBtYWluTGlua3MuYXBwZW5kKGZpcnN0TGluayk7XG4gICAgICAgIHRoaXMuX25hdkJyZWFrcG9pbnRzLnBvcCgpO1xuICAgICAgICBudW1CcmVha3BvaW50cy0tO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29sbGFwc2VkTGlua3MuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIG1vcmVCdXR0b24uY2xhc3NMaXN0LmFkZCgneXh0LU5hdi1pdGVtLS1tb3JlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZU1vcmVEcm9wZG93bigpO1xuICAgIGlmIChtYWluTGlua3Mub2Zmc2V0V2lkdGggPiBuYXZXaWR0aCB8fFxuICAgICAgKG51bUJyZWFrcG9pbnRzID4gMCAmJiBuYXZXaWR0aCA+IHRoaXMuX25hdkJyZWFrcG9pbnRzW251bUJyZWFrcG9pbnRzIC0gMV0pKSB7XG4gICAgICB0aGlzLnJlZml0TmF2KCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VNb3JlRHJvcGRvd24gKCkge1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb2RhbCcpO1xuICAgIGNvbGxhcHNlZC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICBjb25zdCBtb3JlQnV0dG9uID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vcmUnKTtcbiAgICBtb3JlQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcbiAgfVxuXG4gIG9wZW5Nb3JlRHJvcGRvd24gKCkge1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb2RhbCcpO1xuICAgIGNvbGxhcHNlZC5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICBjb25zdCBtb3JlQnV0dG9uID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vcmUnKTtcbiAgICBtb3JlQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuICB9XG5cbiAgdG9nZ2xlTW9yZURyb3Bkb3duICgpIHtcbiAgICBjb25zdCBjb2xsYXBzZWQgPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9kYWwnKTtcbiAgICBjb2xsYXBzZWQuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gICAgY29uc3QgbW9yZUJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb3JlJyk7XG4gICAgbW9yZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBjb2xsYXBzZWQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSk7XG4gIH1cblxuICBjaGVja091dHNpZGVDbGljayAoZSkge1xuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcueXh0LU5hdi1jb250YWluZXInKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2xvc2VNb3JlRHJvcGRvd24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaW5jZSB0aGUgc2VydmVyIGRhdGEgb25seSBwcm92aWRlcyBhIGxpc3Qgb2ZcbiAgICogVlMgY29uZmlnSWRzLCB3ZSBuZWVkIHRvIGNvbXB1dGUgYW5kIHRyYW5zZm9ybVxuICAgKiB0aGUgZGF0YSBpbnRvIHRoZSBwcm9wZXIgZm9ybWF0IGZvciByZW5kZXJpbmcuXG4gICAqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBpZiAoZGF0YS50YWJPcmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl90YWJPcmRlciA9IHRoaXMubWVyZ2VUYWJPcmRlcihkYXRhLnRhYk9yZGVyLCB0aGlzLl90YWJPcmRlcik7XG4gICAgfVxuXG4gICAgLy8gU2luY2UgdGhlIHRhYiBvcmRlcmluZyBjYW4gY2hhbmdlIGJhc2VkIG9uIHRoZSBzZXJ2ZXIgZGF0YVxuICAgIC8vIHdlIG5lZWQgdG8gdXBkYXRlIGVhY2ggdGFicyBVUkwgdG8gaW5jbHVkZSB0aGUgb3JkZXIgYXMgcGFydCBvZiB0aGVpciBwYXJhbXMuXG4gICAgLy8gVGhpcyBoZWxwcyB3aXRoIHBlcnNpc3Rpbmcgc3RhdGUgYWNyb3NzIHZlcnRpY2Fscy5cbiAgICBsZXQgdGFicyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdGFiT3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB0YWIgPSB0aGlzLl90YWJzW3RoaXMuX3RhYk9yZGVyW2ldXTtcbiAgICAgIGlmICh0YWIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YWIudXJsID0gdGhpcy5nZW5lcmF0ZVRhYlVybCh0YWIuYmFzZVVybCwgdGhpcy5nZXRVcmxQYXJhbXMoKSk7XG4gICAgICAgIHRhYnMucHVzaCh0YWIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZSh7XG4gICAgICB0YWJzOiB0YWJzLFxuICAgICAgZHJvcGRvd25MYWJlbDogdGhpcy5kcm9wZG93bkxhYmVsLFxuICAgICAgZHJvcGRvd25JY29uOiB0aGlzLmRyb3Bkb3duSWNvbixcbiAgICAgIHN0YXRpYzogdGhpcy5zdGF0aWNcbiAgICB9KTtcbiAgfVxuXG4gIGdldFVybFBhcmFtcyAoKSB7XG4gICAgcmV0dXJuIG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldERlZmF1bHRUYWJPcmRlciB3aWxsIGNvbXB1dGUgdGhlIGluaXRpYWwgdGFiIG9yZGVyaW5nIGJhc2VkXG4gICAqIG9uIGEgY29tYmluYXRpb24gb2YgdGhlIGNvbmZpZ3VyYXRpb24gcHJvdmlkZWQgZGlyZWN0bHkgdG8gdGhlIGNvbXBvbmVudFxuICAgKiBhbmQgdGhlIHVybCBwYXJhbXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0W119IHRhYnNDb25maWdcbiAgICogQHBhcmFtIHtTZWFyY2hQYXJhbXN9XG4gICAqL1xuICBnZXREZWZhdWx0VGFiT3JkZXIgKHRhYnNDb25maWcsIHVybFBhcmFtcykge1xuICAgIGxldCB0YWJPcmRlciA9IFtdO1xuXG4gICAgLy8gVXNlIHRoZSBvcmRlcmluZyBmcm9tIHRoZSBVUkwgYXMgdGhlIHByaW1hcnkgY29uZmlndXJhdGlvblxuICAgIC8vIEFuZCB0aGVuIG1lcmdlIGl0IHdpdGggdGhlIGxvY2FsIGNvbmZpZ3VyYXRpb24sIGlmIHByb3ZpZGVkLlxuICAgIGlmICh1cmxQYXJhbXMgJiYgdXJsUGFyYW1zLmhhcygndGFiT3JkZXInKSkge1xuICAgICAgdGFiT3JkZXIgPSB1cmxQYXJhbXMuZ2V0KCd0YWJPcmRlcicpLnNwbGl0KCcsJyk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzQ29uZmlnLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YWIgPSB0YWJzQ29uZmlnW2ldO1xuICAgICAgLy8gU29tZSB0YWJzIGRvbid0IGhhdmUgY29uZmlnSWQsIHNvIHdlIG1hcCBpdCBmcm9tIFVSTFxuICAgICAgaWYgKHRhYi5jb25maWdJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhYi5jb25maWdJZCA9IHRhYi51cmw7XG4gICAgICB9XG5cbiAgICAgIC8vIEF2b2lkIGR1cGxpY2F0ZXMgaWYgY29uZmlnIHdhcyBwcm92aWRlZCBmcm9tIFVSTFxuICAgICAgaWYgKHRhYk9yZGVyLmluY2x1ZGVzKHRhYi5jb25maWdJZCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIGlzRmlyc3Qgc2hvdWxkIGFsd2F5cyBiZSB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgbGlzdFxuICAgICAgaWYgKHRhYi5pc0ZpcnN0KSB7XG4gICAgICAgIHRhYk9yZGVyLnVuc2hpZnQodGFiLmNvbmZpZ0lkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhYk9yZGVyLnB1c2godGFiLmNvbmZpZ0lkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFiT3JkZXI7XG4gIH1cblxuICAvKipcbiAgICogbWVyZ2VUYWJPcmRlciBtZXJnZXMgdHdvIGFycmF5cyBpbnRvIG9uZVxuICAgKiBieSBhcHBlbmRpbmcgYWRkaXRpb25hbCB0YWJzIHRvIHRoZSBlbmQgb2YgdGhlIG9yaWdpbmFsIGFycmF5XG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHRhYk9yZGVyIFRhYiBvcmRlciBwcm92aWRlZCBieSB0aGUgc2VydmVyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IG90aGVyVGFiT3JkZXIgVGFiIG9yZGVyIHByb3ZpZGVkIGJ5IGNvbmZpZ3VyYXRpb25cbiAgICogQHJldHVybiB7c3RyaW5nW119XG4gICAqL1xuICBtZXJnZVRhYk9yZGVyICh0YWJPcmRlciwgb3RoZXJUYWJPcmRlcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3RoZXJUYWJPcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGFiQ29uZmlnID0gb3RoZXJUYWJPcmRlcltpXTtcbiAgICAgIGlmICh0YWJPcmRlci5pbmNsdWRlcyh0YWJDb25maWcpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBpc0ZpcnN0IHNob3VsZCBiZSBhbiBvdmVycmlkZSB0byBkeW5hbWljIHRhYiBvcmRlcmluZy5cbiAgICAgIGlmICh0aGlzLl90YWJzW3RhYkNvbmZpZ10gJiYgdGhpcy5fdGFic1t0YWJDb25maWddLmlzRmlyc3QpIHtcbiAgICAgICAgdGFiT3JkZXIudW5zaGlmdCh0YWJDb25maWcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFiT3JkZXIucHVzaCh0YWJDb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YWJPcmRlcjtcbiAgfVxuXG4gIGdlbmVyYXRlVGFiVXJsIChiYXNlVXJsLCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCkpIHtcbiAgICAvLyBXZSB3YW50IHRvIHBlcnNpc3QgdGhlIHBhcmFtcyBmcm9tIHRoZSBleGlzdGluZyBVUkwgdG8gdGhlIG5ld1xuICAgIC8vIFVSTFMgd2UgY3JlYXRlLlxuICAgIHBhcmFtcy5zZXQoJ3RhYk9yZGVyJywgdGhpcy5fdGFiT3JkZXIpO1xuICAgIHJldHVybiBiYXNlVXJsICsgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZpbHRlciAqL1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gYXBpIGZpbHRlciBhbmQgcHJvdmlkZXMgc3RhdGljIG1ldGhvZHMgZm9yIGVhc2lseSBjb25zdHJ1Y3RpbmcgRmlsdGVycy5cbiAqIFNlZSBodHRwczovL2RldmVsb3Blci55ZXh0LmNvbS9kb2NzL2FwaS1yZWZlcmVuY2UvI29wZXJhdGlvbi9saXN0RW50aXRpZXMgZm9yIHN0cnVjdHVyZSBkZXRhaWxzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlciB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgYSBKU09OIGZvcm1hdCBmaWx0ZXIgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyIGludG8gYSBGaWx0ZXJcbiAgICogQHBhcmFtIHsqfSByZXNwb25zZUZpbHRlciBBIGZpbHRlciBpbiBKU09OIGZvcm1hdCByZXR1cm5lZCBmcm9tIHRoZSBiYWNrZW5kXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZnJvbVJlc3BvbnNlIChyZXNwb25zZUZpbHRlcikge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKEpTT04ucGFyc2UocmVzcG9uc2VGaWx0ZXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBuZXcgRmlsdGVyIHJlcHJlc2VudGluZyB0aGUgT1Igb2YgYWxsIHByb3ZpZGVkIGZpbHRlcnNcbiAgICogQHBhcmFtICB7Li4uRmlsdGVyfSBmaWx0ZXJzIFRoZSBmaWx0ZXJzIHRvIE9SIHRvZ2V0aGVyXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgb3IgKC4uLmZpbHRlcnMpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcih7XG4gICAgICAnJG9yJzogZmlsdGVyc1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIG5ldyBGaWx0ZXIgcmVwcmVzZW50aW5nIHRoZSBBTkQgb2YgYWxsIHByb3ZpZGVkIGZpbHRlcnNcbiAgICogQHBhcmFtICB7Li4uRmlsdGVyfSBmaWx0ZXJzIFRoZSBmaWx0ZXJzIHRvIEFORCB0b2dldGhlclxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGFuZCAoLi4uZmlsdGVycykge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgICckYW5kJzogZmlsdGVyc1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9SIGZpbHRlcnMgd2l0aCB0aGUgc2FtZSBrZXlzLCB0aGVuIEFORCB0aGUgcmVzdWx0aW5nIGdyb3Vwc1xuICAgKiBAcGFyYW0gIHsuLi5GaWx0ZXJ9IGZpbHRlcnMgVGhlIGZpbHRlcnMgdG8gZ3JvdXBcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBncm91cCAoLi4uZmlsdGVycykge1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGZvciAoY29uc3QgZmlsdGVyIG9mIGZpbHRlcnMpIHtcbiAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKGZpbHRlcilbMF07XG4gICAgICBpZiAoIWdyb3Vwc1trZXldKSB7XG4gICAgICAgIGdyb3Vwc1trZXldID0gW107XG4gICAgICB9XG4gICAgICBncm91cHNba2V5XS5wdXNoKGZpbHRlcik7XG4gICAgfVxuXG4gICAgY29uc3QgZ3JvdXBGaWx0ZXJzID0gW107XG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiBPYmplY3Qua2V5cyhncm91cHMpKSB7XG4gICAgICBncm91cEZpbHRlcnMucHVzaChncm91cHNbZmllbGRdLmxlbmd0aCA+IDEgPyBGaWx0ZXIub3IoLi4uZ3JvdXBzW2ZpZWxkXSkgOiBncm91cHNbZmllbGRdWzBdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ3JvdXBGaWx0ZXJzLmxlbmd0aCA+IDEgPyBGaWx0ZXIuYW5kKC4uLmdyb3VwRmlsdGVycykgOiBncm91cEZpbHRlcnNbMF07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwiZXF1YWwgdG9cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBlcXVhbCB0b1xuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGVxdWFsIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRlcScsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJsZXNzIHRoYW5cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBsZXNzIHRoYW5cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBsZXNzVGhhbiAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckbHQnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwibGVzcyB0aGFuIG9yIGVxdWFsIHRvXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgbGVzc1RoYW5FcXVhbCAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckbGUnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwiZ3JlYXRlciB0aGFuXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ3JlYXRlclRoYW4gKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGd0JywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0b1wiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0b1xuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGdyZWF0ZXJUaGFuRXF1YWwgKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGdlJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBpbmNsdXNpdmUgcmFuZ2UgZmlsdGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gbWluIFRoZSBtaW5pbXVtIHZhbHVlXG4gICAqIEBwYXJhbSB7Kn0gbWF4IFRoZSBtYXhpbXVtIHZhbHVlXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgaW5jbHVzaXZlUmFuZ2UgKGZpZWxkLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgIFtmaWVsZF06IHtcbiAgICAgICAgJyRnZSc6IG1pbixcbiAgICAgICAgJyRsZSc6IG1heFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBleGNsdXNpdmUgcmFuZ2UgZmlsdGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gbWluIFRoZSBtaW5pbXVtIHZhbHVlXG4gICAqIEBwYXJhbSB7Kn0gbWF4IFRoZSBtYXhpbXVtIHZhbHVlXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZXhjbHVzaXZlUmFuZ2UgKGZpZWxkLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgIFtmaWVsZF06IHtcbiAgICAgICAgJyRndCc6IG1pbixcbiAgICAgICAgJyRsdCc6IG1heFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBwb3NpdGlvbiBmaWx0ZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxhdCBUaGUgbGF0aXR1ZGUgb2YgdGhlIHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsbmcgVGhlIGxvbmdpdHVkZSBvZiB0aGUgcG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyBUaGUgc2VhcmNoIHJhZGl1cyAoaW4gbWV0ZXJzKVxuICAgKi9cbiAgc3RhdGljIHBvc2l0aW9uIChsYXQsIGxuZywgcmFkaXVzKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoJ2J1aWx0aW4ubG9jYXRpb24nLCAnJG5lYXInLCB7IGxhdCwgbG5nLCByYWRpdXMgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGZpbHRlciB3aXRoIHRoZSBnaXZlbiBtYXRjaGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRjaGVyIFRoZSBtYXRjaGVyIGZvciB0aGUgZmlsZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgZm9yIHRoZSBmaWx0ZXJcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBfZnJvbU1hdGNoZXIgKGZpZWxkLCBtYXRjaGVyLCB2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgIFtmaWVsZF06IHtcbiAgICAgICAgW21hdGNoZXJdOiB2YWx1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi9kb20vc2VhcmNocGFyYW1zJztcblxuLyoqXG4gKiBTZWFyY2hDb21wb25lbnQgZXhwb3NlcyBhbiBpbnRlcmZhY2UgaW4gb3JkZXIgdG8gY3JlYXRlXG4gKiBhIFVJIFNlYXJjaCBleHBlcmllbmNlIGZvciB2ZXJ0aWNhbCBhbmQgdW5pdmVyc2FsIHNlYXJjaC5cbiAqXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBpbnB1dCBrZXkgZm9yIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggY29uZmlndXJhdGlvblxuICAgICAqIElmIG5vdCBwcm92aWRlZCwgYXV0by1jb21wbGV0ZSBhbmQgc2VhcmNoIHdpbGwgYmUgYmFzZWQgb24gdW5pdmVyc2FsXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9iYXJLZXkgPSBjb25maWcuYmFyS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgdmVydGljYWwga2V5IGZvciB2ZXJ0aWNhbCBzZWFyY2ggY29uZmlndXJhdGlvblxuICAgICAqIElmIG5vdCBwcm92aWRlZCwgYXV0by1jb21wbGV0ZSBhbmQgc2VhcmNoIHdpbGwgYmUgYmFzZWQgb24gdW5pdmVyc2FsXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IGNvbmZpZy52ZXJ0aWNhbEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogUXVlcnkgc3VibWlzc2lvbiBpcyBiYXNlZCBvbiBhIGZvcm0gYXMgY29udGV4dC5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gbmF0aXZlIGZvcm0gbm9kZSB3aXRoaW4gY29udGFpbmVyXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5fZm9ybUVsID0gY29uZmlnLmZvcm1TZWxlY3RvciB8fCAnZm9ybSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5wdXQgZWxlbWVudCB1c2VkIGZvciBzZWFyY2hpbmcgYW5kIHdpcmVzIHVwIHRoZSBrZXlib2FyZCBpbnRlcmFjdGlvblxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5faW5wdXRFbCA9IGNvbmZpZy5pbnB1dEVsIHx8ICcuanMteWV4dC1xdWVyeSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgdXNlZCwgcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlIGFzIGEgZGF0YSBwb2ludFxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnRpdGxlID0gY29uZmlnLnRpdGxlIHx8ICdBbnN3ZXJzIFVuaXZlcnNhbCBTZWFyY2gnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRleHQgaXMgdXNlZCBmb3IgbGFiZWxpbmcgdGhlIGlucHV0IGJveCwgYWxzbyBwcm92aWRlZCB0byB0ZW1wbGF0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmxhYmVsVGV4dCA9IGNvbmZpZy5sYWJlbFRleHQgfHwgJ1doYXQgYXJlIHlvdSBpbnRlcmVzdGVkIGluPyc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3VibWl0IHRleHQgaXMgdXNlZCBmb3IgbGFiZWxpbmcgdGhlIHN1Ym1pdCBidXR0b24sIGFsc28gcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zdWJtaXRUZXh0ID0gY29uZmlnLnN1Ym1pdFRleHQgfHwgJ1N1Ym1pdCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3VibWl0IGljb24gaXMgYW4gaWNvbiBmb3IgdGhlIHN1Ym1pdCBidXR0b24sIGlmIHByb3ZpZGVkIGl0IHdpbGwgYmUgZGlzcGxheWVkIGFuZCB0aGVcbiAgICAgKiBzdWJtaXQgdGV4dCB3aWxsIGJlIHVzZWQgZm9yIHNjcmVlbiByZWFkZXJzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnN1Ym1pdEljb24gPSBjb25maWcuc3VibWl0SWNvbiB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHRleHQgdG8gc2hvdyBhcyB0aGUgZmlyc3QgaXRlbSBmb3IgYXV0byBjb21wbGV0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnByb21wdEhlYWRlciA9IGNvbmZpZy5wcm9tcHRIZWFkZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEF1dG8gZm9jdXNlcyB0aGUgaW5wdXQgYm94IGlmIHNldCB0byB0cnVlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIGRlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuYXV0b0ZvY3VzID0gY29uZmlnLmF1dG9Gb2N1cyA9PT0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIFdoZW4gYXV0b2ZvY3VzaW5nIG9uIGxvYWQsIG9wdGlvbmFsbHkgb3BlbiB0aGUgYXV0b2NvbXBsZXRlXG4gICAgICogKHByZXNldCBwcm9tcHRzKVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuYXV0b2NvbXBsZXRlT25Mb2FkID0gY29uZmlnLmF1dG9jb21wbGV0ZU9uTG9hZCB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIHN1Ym1pdFVSTCB3aWxsIGZvcmNlIHRoZSBzZWFyY2ggcXVlcnkgc3VibWlzc2lvbiB0byBnZXRcbiAgICAgKiByZWRpcmVjdGVkIHRvIHRoZSBVUkwgcHJvdmlkZWQuXG4gICAgICogT3B0aW9uYWwsIGRlZmF1bHRzIHRvIG51bGwuXG4gICAgICpcbiAgICAgKiBJZiBubyByZWRpcmVjdFVybCBwcm92aWRlZCwgd2Uga2VlcCB0aGUgcGFnZSBhcyBhIHNpbmdsZSBwYWdlIGFwcC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucmVkaXJlY3RVcmwgPSBjb25maWcucmVkaXJlY3RVcmwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSBzdHJpbmcgdG8gdXNlIGZvciB0aGUgaW5wdXQgYm94LCBwcm92aWRlZCB0byB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlcnkgPSBjb25maWcucXVlcnkgfHwgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpIHx8ICcnO1xuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBTdG9yYWdlS2V5cy5RVUVSWSwgcSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gcTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKTtcbiAgICAgIHRoaXMuc2VhcmNoKHEpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG1pbmltdW0gdGltZSBhbGxvd2VkIGluIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHNlYXJjaGVzIHRvIHByZXZlbnRcbiAgICAgKiBtYW55IGR1cGxpY2F0ZSBzZWFyY2hlcyBiYWNrLXRvLWJhY2tcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc2VhcmNoQ29vbGRvd24gPSBjb25maWcuc2VhcmNoQ29vbGRvd24gfHwgMzAwO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1NlYXJjaEJhcic7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lICgpIHtcbiAgICByZXR1cm4gJ3NlYXJjaC9zZWFyY2gnO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIGlmICh0aGlzLnF1ZXJ5ICYmICF0aGlzLnJlZGlyZWN0VXJsKSB7XG4gICAgICB0aGlzLmNvcmUuc2V0UXVlcnkodGhpcy5xdWVyeSk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzID09PSB0cnVlICYmIHRoaXMucXVlcnkubGVuZ3RoID09PSAwICYmICF0aGlzLmF1dG9jb21wbGV0ZU9uTG9hZCkge1xuICAgICAgRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5faW5wdXRFbCkuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvLyBXaXJlIHVwIG91ciBzZWFyY2ggaGFuZGxpbmcgYW5kIGF1dG8gY29tcGxldGVcbiAgICB0aGlzLmluaXRTZWFyY2godGhpcy5fZm9ybUVsKTtcbiAgICB0aGlzLmluaXRBdXRvQ29tcGxldGUodGhpcy5faW5wdXRFbCk7XG5cbiAgICBpZiAodGhpcy5hdXRvRm9jdXMgPT09IHRydWUgJiYgdGhpcy5xdWVyeS5sZW5ndGggPT09IDAgJiYgdGhpcy5hdXRvY29tcGxldGVPbkxvYWQpIHtcbiAgICAgIERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2lucHV0RWwpLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgaGVscGVyIG1ldGhvZCB0byB1c2UgZm9yIHdpcmluZyB1cCBzZWFyY2hpbmcgb24gZm9ybSBzdWJtaXNzaW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtU2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIHN1Ym1pdCBoYW5kbGluZyB0b1xuICAgKi9cbiAgaW5pdFNlYXJjaCAoZm9ybVNlbGVjdG9yKSB7XG4gICAgdGhpcy5fZm9ybUVsID0gZm9ybVNlbGVjdG9yO1xuXG4gICAgdGhpcy5fY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3l4dC1TZWFyY2hCYXItd3JhcHBlcicpO1xuXG4gICAgbGV0IGZvcm0gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCBmb3JtU2VsZWN0b3IpO1xuICAgIGlmICghZm9ybSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgaW5pdGlhbGl6ZSBTZWFyY2hCYXI7IENhbiBub3QgZmluZCB7SFRNTEVsZW1lbnR9IGAnLCB0aGlzLl9mb3JtRWwsICdgLicpO1xuICAgIH1cblxuICAgIERPTS5vbihmb3JtLCAnc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IGlucHV0RWwgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IodGhpcy5faW5wdXRFbCk7XG5cbiAgICAgIGxldCBxdWVyeSA9IGlucHV0RWwudmFsdWU7XG4gICAgICBsZXQgcGFyYW1zID0gbmV3IFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG4gICAgICBwYXJhbXMuc2V0KCdxdWVyeScsIHF1ZXJ5KTtcblxuICAgICAgLy8gSWYgd2UgaGF2ZSBhIHJlZGlyZWN0VXJsLCB3ZSB3YW50IHRoZSBmb3JtIHRvIGJlXG4gICAgICAvLyBzZXJpYWxpemVkIGFuZCBzdWJtaXR0ZWQuXG4gICAgICBpZiAodHlwZW9mIHRoaXMucmVkaXJlY3RVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5yZWRpcmVjdFVybCArICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlucHV0RWwuYmx1cigpO1xuXG4gICAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZLCBxdWVyeSk7XG4gICAgICB0aGlzLmNvcmUuc2V0UXVlcnkocXVlcnkpO1xuICAgICAgdGhpcy5zZWFyY2gocXVlcnkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgaGVscGVyIG1ldGhvZCB0byB3aXJlIHVwIG91ciBhdXRvIGNvbXBsZXRlIG9uIGFuIGlucHV0IHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBhdXRvIGNvbXBsZXRlIGNvbXBvbmVudCB0b1xuICAgKi9cbiAgaW5pdEF1dG9Db21wbGV0ZSAoaW5wdXRTZWxlY3Rvcikge1xuICAgIHRoaXMuX2lucHV0RWwgPSBpbnB1dFNlbGVjdG9yO1xuXG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZSkge1xuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2F1dG9jb21wbGV0ZSA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoJ0F1dG9Db21wbGV0ZScsIHtcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0uYXV0b2NvbXBsZXRlYCxcbiAgICAgIGNvbnRhaW5lcjogJy55eHQtU2VhcmNoQmFyLWF1dG9jb21wbGV0ZScsXG4gICAgICBiYXJLZXk6IHRoaXMuX2JhcktleSxcbiAgICAgIGF1dG9Gb2N1czogdGhpcy5hdXRvRm9jdXMgJiYgIXRoaXMuYXV0b2NvbXBsZXRlT25Mb2FkLFxuICAgICAgdmVydGljYWxLZXk6IHRoaXMuX3ZlcnRpY2FsS2V5LFxuICAgICAgcHJvbXB0SGVhZGVyOiB0aGlzLnByb21wdEhlYWRlcixcbiAgICAgIG9yaWdpbmFsUXVlcnk6IHRoaXMucXVlcnksXG4gICAgICBpbnB1dEVsOiBpbnB1dFNlbGVjdG9yLFxuICAgICAgb25TdWJtaXQ6ICgpID0+IHtcbiAgICAgICAgRE9NLnRyaWdnZXIodGhpcy5fZm9ybUVsLCAnc3VibWl0Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZWFyY2ggKHF1ZXJ5KSB7XG4gICAgaWYgKHRoaXMuX3Rocm90dGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3Rocm90dGxlZCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuX3Rocm90dGxlZCA9IGZhbHNlOyB9LCB0aGlzLl9zZWFyY2hDb29sZG93bik7XG5cbiAgICBpZiAodGhpcy5fdmVydGljYWxLZXkpIHtcbiAgICAgIGNvbnN0IGFsbEZpbHRlcnMgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICAgIGNvbnN0IHRvdGFsRmlsdGVyID0gYWxsRmlsdGVycy5sZW5ndGggPiAxXG4gICAgICAgID8gRmlsdGVyLmFuZCguLi5hbGxGaWx0ZXJzKVxuICAgICAgICA6IGFsbEZpbHRlcnNbMF07XG4gICAgICBjb25zdCBmYWNldEZpbHRlciA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GQUNFVF9GSUxURVIpWzBdO1xuICAgICAgcmV0dXJuIHRoaXMuY29yZS52ZXJ0aWNhbFNlYXJjaCh0aGlzLl92ZXJ0aWNhbEtleSwge1xuICAgICAgICBpbnB1dDogcXVlcnksXG4gICAgICAgIGZpbHRlcjogSlNPTi5zdHJpbmdpZnkodG90YWxGaWx0ZXIpLFxuICAgICAgICBmYWNldEZpbHRlcjogSlNPTi5zdHJpbmdpZnkoZmFjZXRGaWx0ZXIpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTk9URShiaWxseSkgVGVtcG9yYXJ5IGhhY2sgZm9yIERFTU9cbiAgICAgIC8vIFJlbW92ZSBtZSBhZnRlciB0aGUgZGVtb1xuICAgICAgbGV0IG5hdiA9IHRoaXMuY29tcG9uZW50TWFuYWdlclxuICAgICAgICAuZ2V0QWN0aXZlQ29tcG9uZW50KCdOYXZpZ2F0aW9uJyk7XG5cbiAgICAgIGlmIChuYXYpIHtcbiAgICAgICAgbGV0IHRhYnMgPSBuYXYuZ2V0U3RhdGUoJ3RhYnMnKTtcbiAgICAgICAgbGV0IHVybHMgPSB7fTtcblxuICAgICAgICBpZiAodGFicyAmJiBBcnJheS5pc0FycmF5KHRhYnMpKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcGFyYW1zID0gbmV3IFNlYXJjaFBhcmFtcyh0YWJzW2ldLnVybC5zcGxpdCgnPycpWzFdKTtcbiAgICAgICAgICAgIHBhcmFtcy5zZXQoJ3F1ZXJ5JywgcXVlcnkpO1xuXG4gICAgICAgICAgICBsZXQgdXJsID0gdGFic1tpXS5iYXNlVXJsO1xuICAgICAgICAgICAgaWYgKHBhcmFtcy50b1N0cmluZygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgdXJsICs9ICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXJsc1t0YWJzW2ldLmNvbmZpZ0lkXSA9IHVybDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29yZS5zZWFyY2gocXVlcnksIHVybHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb3JlLnNlYXJjaChxdWVyeSk7XG4gICAgfVxuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIGxhYmVsVGV4dDogdGhpcy5sYWJlbFRleHQsXG4gICAgICBzdWJtaXRJY29uOiB0aGlzLnN1Ym1pdEljb24sXG4gICAgICBzdWJtaXRUZXh0OiB0aGlzLnN1Ym1pdFRleHQsXG4gICAgICBxdWVyeTogdGhpcy5xdWVyeVxuICAgIH0sIGRhdGEpKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyU2VhcmNoQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5cbi8qKlxuICogRmlsdGVyU2VhcmNoQ29tcG9uZW50IGlzIHVzZWQgZm9yIGF1dG9jb21wbGV0ZSB1c2luZyB0aGUgRmlsdGVyU2VhcmNoIGJhY2tlbmQuXG4gKiBJdCdsbCBhbGxvdyB5b3UgdG8gcGljayBwcmUtc2V0IGZpbHRlcnMgdGhhdCBhcmUgc2V0dXAgb24gdGhlIGJhY2tlbmQgd2l0aGluXG4gKiBhIHZlcnRpY2FsIHNlYXJjaCBjb250ZXh0LlxuICpcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlucHV0IGtleSBmb3IgdGhlIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9iYXJLZXkgPSBjb25maWcuYmFyS2V5IHx8IGNvbmZpZy5pbnB1dEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnRpY2FsIGtleSBmb3IgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzdG9yZSB0aGUgZmlsdGVyIHZhbHVlIGJ1dCBkbyBub3Qgc2VhcmNoIG9uIGNoYW5nZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RvcmVPbkNoYW5nZSA9IGNvbmZpZy5zdG9yZU9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogUXVlcnkgc3VibWlzc2lvbiBpcyBiYXNlZCBvbiBhIGZvcm0gYXMgY29udGV4dC5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gbmF0aXZlIGZvcm0gbm9kZSB3aXRoaW4gY29udGFpbmVyXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5fZm9ybUVsID0gY29uZmlnLmZvcm1TZWxlY3RvciB8fCAnZm9ybSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5wdXQgZWxlbWVudCB1c2VkIGZvciBzZWFyY2hpbmcgYW5kIHdpcmVzIHVwIHRoZSBrZXlib2FyZCBpbnRlcmFjdGlvblxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5faW5wdXRFbCA9IGNvbmZpZy5pbnB1dEVsIHx8ICcuanMteWV4dC1xdWVyeSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgdXNlZCwgcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlIGFzIGEgZGF0YSBwb2ludFxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnRpdGxlID0gY29uZmlnLnRpdGxlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlYXJjaCB0ZXh0IHVzZWQgZm9yIGxhYmVsaW5nIHRoZSBpbnB1dCBib3gsIGFsc28gcHJvdmlkZWQgdG8gdGVtcGxhdGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gY29uZmlnLnNlYXJjaFRleHQgfHwgJ1doYXQgYXJlIHlvdSBpbnRlcmVzdGVkIGluPyc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgdGV4dCB0byBzaG93IGFzIHRoZSBmaXJzdCBpdGVtIGZvciBhdXRvIGNvbXBsZXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucHJvbXB0SGVhZGVyID0gY29uZmlnLnByb21wdEhlYWRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQXV0byBmb2N1c2VzIHRoZSBpbnB1dCBib3ggaWYgc2V0IHRvIHRydWUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvRm9jdXMgPSBjb25maWcuYXV0b0ZvY3VzID09PSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogc3VibWl0VVJMIHdpbGwgZm9yY2UgdGhlIHNlYXJjaCBxdWVyeSBzdWJtaXNzaW9uIHRvIGdldFxuICAgICAqIHJlZGlyZWN0ZWQgdG8gdGhlIFVSTCBwcm92aWRlZC5cbiAgICAgKiBPcHRpb25hbCwgZGVmYXVsdHMgdG8gbnVsbC5cbiAgICAgKlxuICAgICAqIElmIG5vIHJlZGlyZWN0VXJsIHByb3ZpZGVkLCB3ZSBrZWVwIHRoZSBwYWdlIGFzIGEgc2luZ2xlIHBhZ2UgYXBwLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZWRpcmVjdFVybCA9IGNvbmZpZy5yZWRpcmVjdFVybCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHN0cmluZyB0byB1c2UgZm9yIHRoZSBpbnB1dCBib3gsIHByb3ZpZGVkIHRvIHRlbXBsYXRlIGZvciByZW5kZXJpbmcuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5xdWVyeSA9IGNvbmZpZy5xdWVyeSB8fCB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCkgfHwgJyc7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gLCBxID0+IHtcbiAgICAgIHRoaXMucXVlcnkgPSBxO1xuICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaWx0ZXIgc3RyaW5nIHRvIHVzZSBmb3IgdGhlIHByb3ZpZGVkIHF1ZXJ5XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5maWx0ZXIgPSBjb25maWcuZmlsdGVyIHx8IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCkgfHwgJyc7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpbHRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gSlNPTi5wYXJzZSh0aGlzLmZpbHRlcik7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWAsIGYgPT4geyB0aGlzLmZpbHRlciA9IGY7IH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0ZpbHRlclNlYXJjaCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lICgpIHtcbiAgICByZXR1cm4gJ3NlYXJjaC9maWx0ZXJzZWFyY2gnO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIGlmICh0aGlzLnF1ZXJ5ICYmIHRoaXMuZmlsdGVyKSB7XG4gICAgICB0aGlzLnNlYXJjaCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIC8vIFdpcmUgdXAgb3VyIHNlYXJjaCBoYW5kbGluZyBhbmQgYXV0byBjb21wbGV0ZVxuICAgIHRoaXMuaW5pdEF1dG9Db21wbGV0ZSh0aGlzLl9pbnB1dEVsKTtcblxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cyA9PT0gdHJ1ZSAmJiB0aGlzLnF1ZXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5faW5wdXRFbCkuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHdpcmUgdXAgb3VyIGF1dG8gY29tcGxldGUgb24gYW4gaW5wdXQgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIGF1dG8gY29tcGxldGUgY29tcG9uZW50IHRvXG4gICAqL1xuICBpbml0QXV0b0NvbXBsZXRlIChpbnB1dFNlbGVjdG9yKSB7XG4gICAgdGhpcy5faW5wdXRFbCA9IGlucHV0U2VsZWN0b3I7XG5cbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKCdBdXRvQ29tcGxldGUnLCB7XG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmF1dG9jb21wbGV0ZWAsXG4gICAgICBpc0ZpbHRlclNlYXJjaDogdHJ1ZSxcbiAgICAgIGNvbnRhaW5lcjogJy55eHQtU2VhcmNoQmFyLWF1dG9jb21wbGV0ZScsXG4gICAgICBwcm9tcHRIZWFkZXI6IHRoaXMucHJvbXB0SGVhZGVyLFxuICAgICAgb3JpZ2luYWxRdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgIG9yaWdpbmFsRmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgIGlucHV0RWw6IGlucHV0U2VsZWN0b3IsXG4gICAgICB2ZXJ0aWNhbEtleTogdGhpcy5fdmVydGljYWxLZXksXG4gICAgICBiYXJLZXk6IHRoaXMuX2JhcktleSxcbiAgICAgIG9uU3VibWl0OiAocXVlcnksIGZpbHRlcikgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICAgICAgcGFyYW1zLnNldChgJHt0aGlzLm5hbWV9LnF1ZXJ5YCwgcXVlcnkpO1xuICAgICAgICBwYXJhbXMuc2V0KGAke3RoaXMubmFtZX0uZmlsdGVyYCwgZmlsdGVyKTtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgcmVkaXJlY3RVcmwsIHdlIHdhbnQgdGhlIHBhcmFtcyB0byBiZVxuICAgICAgICAvLyBzZXJpYWxpemVkIGFuZCBzdWJtaXR0ZWQuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5yZWRpcmVjdFVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMucmVkaXJlY3RVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzYXZlIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBmb3IgdGhlIG5leHQgc2VhcmNoXG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBGaWx0ZXIuZnJvbVJlc3BvbnNlKGZpbHRlcik7XG4gICAgICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWAsIHRoaXMucXVlcnkpO1xuICAgICAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCwgdGhpcy5maWx0ZXIpO1xuICAgICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgdGhpcy5maWx0ZXIpO1xuICAgICAgICB0aGlzLnNlYXJjaCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gdGhlIHZlcnRpY2FsIHNlYXJjaCB3aXRoIGFsbCBzYXZlZCBmaWx0ZXJzIGFuZCBxdWVyeSxcbiAgICogb3B0aW9uYWxseSByZWRpcmVjdGluZyBiYXNlZCBvbiBjb25maWdcbiAgICovXG4gIHNlYXJjaCAoKSB7XG4gICAgaWYgKHRoaXMuX3N0b3JlT25DaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgbGV0IHRvdGFsRmlsdGVyID0gZmlsdGVyc1swXTtcbiAgICBpZiAoZmlsdGVycy5sZW5ndGggPiAxKSB7XG4gICAgICB0b3RhbEZpbHRlciA9IEZpbHRlci5hbmQoLi4uZmlsdGVycyk7XG4gICAgfVxuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpIHx8ICcnO1xuICAgIGNvbnN0IGZhY2V0RmlsdGVyID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZBQ0VUX0ZJTFRFUilbMF07XG5cbiAgICB0aGlzLmNvcmUudmVydGljYWxTZWFyY2godGhpcy5fdmVydGljYWxLZXksIHtcbiAgICAgIGlucHV0OiBzZWFyY2hRdWVyeSxcbiAgICAgIGZpbHRlcjogSlNPTi5zdHJpbmdpZnkodG90YWxGaWx0ZXIpLFxuICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKVxuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIHNlYXJjaFRleHQ6IHRoaXMuc2VhcmNoVGV4dCxcbiAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlclxuICAgIH0sIGRhdGEpKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuY29uc3QgS2V5cyA9IHtcbiAgQkFDS1NQQUNFOiA4LFxuICBUQUI6IDksXG4gIEVOVEVSOiAxMyxcbiAgU0hJRlQ6IDE2LFxuICBDVFJMOiAxNyxcbiAgQUxUOiAxOCxcbiAgRVNDQVBFOiAyNyxcblxuICBMRUZUOiAzNyxcbiAgUklHSFQ6IDM5LFxuICBVUDogMzgsXG5cbiAgREVMRVRFOiA0NixcbiAgRE9XTjogNDAsXG4gIExFRlRfT1NfS0VZOiA5MSxcbiAgUklHSFRfT1NfS0VZOiA5MixcbiAgU0VMRUNUX0tFWTogOTNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Db21wbGV0ZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgYXV0b2NvbXBsZXRlIGlzIHNpbXBsZSBvciBmaWx0ZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmlzRmlsdGVyU2VhcmNoID0gb3B0cy5pc0ZpbHRlclNlYXJjaCB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgYmFyS2V5YCBpbiB0aGUgdmVydGljYWwgc2VhcmNoIHRvIHVzZSBmb3IgYXV0by1jb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYmFyS2V5ID0gb3B0cy5iYXJLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgdmVydGljYWxLZXlgIG9mIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggdG8gdXNlIGZvciBhdXRvLWNvbXBsZXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IG9wdHMudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBpbnB1dCBlbCBzZWxlY3RvciBmb3IgYXV0byBjb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5faW5wdXRFbCA9IG9wdHMuaW5wdXRFbCB8fCAnLmpzLXlleHQtcXVlcnknO1xuXG4gICAgLyoqXG4gICAgICogQSBzZWxlY3RvciBmb3IgdGhlIGF1dG9jb21wbGV0ZSBlbGVtZW50ZXNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2F1dG9jb21wbGV0ZUVscyA9IG9wdHMuYXV0b0NvbXBsZXRlRWxzIHx8ICcuanMteWV4dC1hdXRvY29tbGV0ZS1vcHRpb24nO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIGZvciB0aGUgZGF0YS1zdG9yYWdlIHRvIGxpc3RlbiBmb3IgdXBkYXRlcyBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBgJHtTdG9yYWdlS2V5cy5BVVRPQ09NUExFVEV9LiR7dGhpcy5uYW1lfWA7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGlucHV0IHZhbHVlIHdoZW4gdHlwaW5nLlxuICAgICAqIFdlIHVzZSB0aGlzIGZvciByZXNldHRpbmcgdGhlIHN0YXRlIG9mIHRoZSBpbnB1dCB2YWx1ZSB3aGVuIG90aGVyIGludGVyYWN0aW9ucyAoZS5nLiByZXN1bHQgbmF2aWdhdGlvbilcbiAgICAgKiBjaGFuZ2UgYmFzZWQgb24gaW50ZXJhY3Rpb25zLiBGb3IgaW5zdGFuY2UsIGhpdHRpbmcgZXNjYXBlIHNob3VsZCByZXNldCB0aGUgdmFsdWUgdG8gdGhlIG9yaWdpbmFsIHR5cGVkIHF1ZXJ5LlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fb3JpZ2luYWxRdWVyeSA9IG9wdHMub3JpZ2luYWxRdWVyeSB8fCAnJztcblxuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIGtleWJvYXJkIG5hdmlnYXRpb24gdGhyb3VnaCByZXN1bHRzLlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBzZWN0aW9uIHdlJ3JlIG5hdmlnYXRpbmcgaW4uXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9zZWN0aW9uSW5kZXggPSAwO1xuXG4gICAgLyoqXG4gICAgICogVXNlZCBmb3Iga2V5Ym9hcmQgbmF2aWdhdGlvbiB0aHJvdWdoIHJlc3VsdHMuXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IHJlc3VsdCBpbmRleCB3ZSdyZSBuYXZpZ2F0aW5nIG9uLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVzdWx0SW5kZXggPSAtMTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSB0ZXh0IHRvIHNob3cgYXMgdGhlIGZpcnN0IGl0ZW0gZm9yIGF1dG8gY29tcGxldGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5wcm9tcHRIZWFkZXIgPSBvcHRzLnByb21wdEhlYWRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgaW5wdXQgaXMgYXV0b2NvbWF0aWNhbGx5IGZvY3VzZWQgb3Igbm90XG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5fYXV0b0ZvY3VzID0gb3B0cy5hdXRvRm9jdXMgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBpbnZva2VkIHdoZW4gdGhlIGBFbnRlcmAga2V5IGlzIHByZXNzZWQgb24gYXV0byBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICB0aGlzLl9vblN1Ym1pdCA9IG9wdHMub25TdWJtaXQgfHwgZnVuY3Rpb24gKCkge307XG4gIH1cblxuICAvKipcbiAgICogVGhlIGFsaWFzZWQgdXNlZCBieSB0aGUgY29tcG9uZW50IG1hbmFnZXIgZm9yIGNyZWF0aW9uLlxuICAgKi9cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0F1dG9Db21wbGV0ZSc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3NlYXJjaC9hdXRvY29tcGxldGUnO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldFN0YXRlIGlzIG92ZXJyaWRkZW4gc28gdGhhdCB3ZSBjYW4gcHJvdmlkZSBhZGRpdGlvbmFsIG1ldGEgZGF0YVxuICAgKiB0byB0aGUgdGVtcGxhdGUgKGUuZy4gdGhlIHNlY3Rpb25JbmRleCBhbmQgcmVzdWx0SW5kZXgpLCBzaW5jZVxuICAgKiB0aG9zZSBhcmUgY2xpZW50LWludGVyYWN0aW9uIHNwZWNpZmljIHZhbHVlcyBhbmQgYXJlbid0IHJldHVybmVkIGZyb20gdGhlIHNlcnZlci5cbiAgICovXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgaGFzUmVzdWx0czogdGhpcy5oYXNSZXN1bHRzKGRhdGEpLFxuICAgICAgc2VjdGlvbkluZGV4OiB0aGlzLl9zZWN0aW9uSW5kZXgsXG4gICAgICByZXN1bHRJbmRleDogdGhpcy5fcmVzdWx0SW5kZXgsXG4gICAgICBwcm9tcHRIZWFkZXI6IHRoaXMuX29yaWdpbmFsUXVlcnkubGVuZ3RoID09PSAwID8gdGhpcy5wcm9tcHRIZWFkZXIgOiBudWxsXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIHVwZGF0ZVN0YXRlIGlzIGEgaGVscGVyIHRvIGFwcGx5IHRoZSBjdXJyZW50IHN0YXRlIHdpdGggbmV3IGNsaWVudC1zdGF0ZS5cbiAgICovXG4gIHVwZGF0ZVN0YXRlICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuX3N0YXRlLmdldCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbkNyZWF0ZSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGNvbnN0cnVjdGVkIGZyb20gdGhlIGZyYW1ld29yay5cbiAgICogT25jZSB3ZSdyZSBpbml0YWxpemVkLCB3ZSB3aXJlIHVwIGFsbCBvZiBvdXIgdXNlciBpbnRlcmFjdGlvbnNcbiAgICovXG4gIG9uQ3JlYXRlICgpIHtcbiAgICAvLyBVc2UgdGhlIGNvbnRleHQgb2YgdGhlIHBhcmVudCBjb21wb25lbnQgdG8gZmluZCB0aGUgaW5wdXQgbm9kZS5cbiAgICBsZXQgcXVlcnlJbnB1dCA9IERPTS5xdWVyeSh0aGlzLl9wYXJlbnQuX2NvbnRhaW5lciwgdGhpcy5faW5wdXRFbCk7XG4gICAgaWYgKCFxdWVyeUlucHV0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBpbml0aWFsaXplIEF1dG9Db21wbGV0ZS4gQ2FuIG5vdCBmaW5kIHtIVE1MRWxlbWVudH0gYCcsIHRoaXMuX2lucHV0RWwsICdgLicpO1xuICAgIH1cblxuICAgIC8vIERpc2FibGUgdGhlIG5hdGl2ZSBhdXRvY29tcGxldGUsIGF1dG9jb3JyZWN0ICYgc3BlbGxjaGVja1xuICAgIERPTS5hdHRyaWJ1dGVzKHF1ZXJ5SW5wdXQsIHtcbiAgICAgIGF1dG9jb21wbGV0ZTogJ29mZicsXG4gICAgICBhdXRvY29ycmVjdDogJ29mZicsXG4gICAgICBzcGVsbGNoZWNrOiAnZmFsc2UnXG4gICAgfSk7XG5cbiAgICAvLyBUaGUgdXNlciBleGl0cyB0aGUgaW5wdXQsIHNvIHdlIHdhbnQgdG8gcmVzZXQgdGhlIHN0YXRlIGFuZCBjbG9zZVxuICAgIC8vIHRoZSBhdXRvIGNvbXBsZXRlXG4gICAgLy8gVE9ETyhqZGVsZXJtZSk6IENsb3NlIGxvZ2ljIHRvIGJlIG1vdmVkIHRvIHBhcmVudFxuICAgIERPTS5vbihkb2N1bWVudCwgJ2NsaWNrJywgZSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmpzLXl4dC1BdXRvQ29tcGxldGUtd3JhcHBlciAqJykgfHwgZS50YXJnZXQubWF0Y2hlcyh0aGlzLl9pbnB1dEVsKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIGEgdXNlciBmb2N1c2VzIHRoZSBpbnB1dCwgd2Ugc2hvdWxkIHBvcHVsYXRlIHRoZSBhdXRvY29tcGxldGUgYmFzZWRcbiAgICAvLyBvbiB0aGUgY3VycmVudCB2YWx1ZVxuICAgIERPTS5vbihxdWVyeUlucHV0LCAnZm9jdXMnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmF1dG9Db21wbGV0ZShxdWVyeUlucHV0LnZhbHVlKTtcbiAgICB9KTtcblxuICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIG5hdmlnYXRlIGJldHdlZW4gdGhlIHJlc3VsdHMgdXNpbmcgdGhlIGtleWJvYXJkXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlTmF2aWdhdGVSZXN1bHRzKGUua2V5Q29kZSwgZSk7XG4gICAgICB0aGlzLmhhbmRsZVN1Ym1pdFJlc3VsdChlLmtleUNvZGUsIHF1ZXJ5SW5wdXQudmFsdWUsIGUpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuX2F1dG9Gb2N1cykge1xuICAgICAgRE9NLm9uY2UocXVlcnlJbnB1dCwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZShxdWVyeUlucHV0LnZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIHNlbGVjdCBhIHJlc3VsdCB3aXRoIHRoZSBtb3VzZVxuICAgIERPTS5kZWxlZ2F0ZSh0aGlzLl9jb250YWluZXIsICcuanMteWV4dC1hdXRvY29tcGxldGUtb3B0aW9uJywgJ2NsaWNrJywgKGV2dCwgdGFyZ2V0KSA9PiB7XG4gICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhc2V0O1xuICAgICAgbGV0IHZhbCA9IGRhdGEuc2hvcnQ7XG5cbiAgICAgIHRoaXMudXBkYXRlUXVlcnkodmFsKTtcbiAgICAgIHRoaXMuX29uU3VibWl0KHZhbCwgZGF0YS5maWx0ZXIpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gV2hlbiB0aGUgdXNlciBpcyB0eXBpbmcgaW4gdGhlIGlucHV0LCBwcm9jZXNzIHRoZSBhdXRvIGNvbXBsZXRlLlxuICAgIERPTS5vbihxdWVyeUlucHV0LCAna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVUeXBpbmcoZS5rZXlDb2RlLCBxdWVyeUlucHV0LnZhbHVlLCBlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjbG9zZSB3aWxsIGhpZGUgdGhlIGF1dG8gY29tcGxldGUgcmVzdWx0cyBhbmQgcmVzZXQgdGhlIHN0YXRlLlxuICAgKi9cbiAgY2xvc2UgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe30pO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXNldHMgdGhlIGNsaWVudCBzdGF0ZSB0byB0aGVpciBvcmlnaW5hbCB2YWx1ZXMgYW5kIHRyaWdnZXJzXG4gICAqIGEgdGVtcGxhdGUtcmVyZW5kZXIgdmlhIHVwZGF0ZVN0YXRlXG4gICAqL1xuICByZXNldCAoKSB7XG4gICAgdGhpcy5fc2VjdGlvbkluZGV4ID0gMDtcbiAgICB0aGlzLl9yZXN1bHRJbmRleCA9IC0xO1xuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHRvIHVwZGF0ZSB0aGUgaW5wdXQgdGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0VmFsdWUgT3B0aW9uIHZhbHVlIHByb3ZpZGVkLlxuICAgKiBJZiBubyB2YWx1ZSBwcm92aWRlZCwgd2UnbGwgdHJ5IHRvIGZpbmQgaXQgYmFzZWQgb24gdGhlIHNlbGVjdGlvbiBpbmRleGVzLlxuICAgKi9cbiAgdXBkYXRlUXVlcnkgKG9wdFZhbHVlKSB7XG4gICAgLy8gT25seSB3YW50IHRvIHVwZGF0ZSB0aGUgcXVlcnkgc3RyaW5nIGlmIHRoZXJlcyBhIHZhbHVlLlxuICAgIC8vIElmIG9uZSBpcyBwcm92aWRlZCwgZ3JlYXQuXG4gICAgLy8gT3RoZXJ3aXNlLCBsZXRzIHRyeSB0byBmaW5kIGl0IGZyb20gdGhlIGN1cnJlbnQgc2VsZWN0aW9uIGluIHRoZSByZXN1bHRzLlxuICAgIGlmIChvcHRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG5cbiAgICAgIGxldCByZXN1bHRzID0gc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzO1xuICAgICAgb3B0VmFsdWUgPSByZXN1bHRzW3RoaXMuX3Jlc3VsdEluZGV4XS5zaG9ydFZhbHVlO1xuICAgIH1cblxuICAgIGxldCBxdWVyeUVsID0gRE9NLnF1ZXJ5KHRoaXMuX3BhcmVudC5fY29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKTtcbiAgICBxdWVyeUVsLnZhbHVlID0gb3B0VmFsdWU7XG4gIH1cblxuICBoYW5kbGVUeXBpbmcgKGtleSwgdmFsdWUsIGUpIHtcbiAgICBsZXQgaWdub3JlZEtleXMgPSBbXG4gICAgICBLZXlzLkRPV04sXG4gICAgICBLZXlzLlVQLFxuICAgICAgS2V5cy5DVFJMLFxuICAgICAgS2V5cy5BTFQsXG4gICAgICBLZXlzLlNISUZULFxuICAgICAgS2V5cy5MRUZULFxuICAgICAgS2V5cy5SSUdIVCxcbiAgICAgIEtleXMuTEVGVF9PU19LRVksXG4gICAgICBLZXlzLlJJR0hUX09TX0tFWSxcbiAgICAgIEtleXMuRU5URVIsXG4gICAgICBLZXlzLlRBQixcbiAgICAgIEtleXMuU0VMRUNUX0tFWVxuICAgIF07XG5cbiAgICBpZiAoaWdub3JlZEtleXMuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBVc2VyIGVzY2FwZXMgb3V0IG9mIGF1dG8gY29tcGxldGUsIHNvIHdlIHJlc2V0IGl0IHRvIHRoZSBvcmlnaW5hbCBpbnB1dFxuICAgIGlmIChrZXkgPT09IEtleXMuRVNDQVBFKSB7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHRoaXMuX29yaWdpbmFsUXVlcnkpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgb3JpZ2luYWwgdmFsdWUgYmFzZWQgb24gdGhlIHVzZXIgaW5wdXRcbiAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gdmFsdWU7XG5cbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgdGhpcy5hdXRvQ29tcGxldGUodmFsdWUpO1xuICB9XG5cbiAgYXV0b0NvbXBsZXRlIChpbnB1dCkge1xuICAgIGlmICh0aGlzLmlzRmlsdGVyU2VhcmNoKSB7XG4gICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlRmlsdGVyKGlucHV0LCB0aGlzLm5hbWUsIHRoaXMuX3ZlcnRpY2FsS2V5LCB0aGlzLl9iYXJLZXkpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fdmVydGljYWxLZXkgfHwgdGhpcy5fYmFyS2V5KSB7XG4gICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlVmVydGljYWwoaW5wdXQsIHRoaXMubmFtZSwgdGhpcy5fdmVydGljYWxLZXksIHRoaXMuX2JhcktleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29yZS5hdXRvQ29tcGxldGVVbml2ZXJzYWwoaW5wdXQsIHRoaXMubmFtZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdHJ1ZSBpZiB3ZSBoYXZlIHJlc3VsdHMgaW4gYW55IHNlY3Rpb25cbiAgICogQHJldHVybnMgYm9vbGVhblxuICAgKi9cbiAgaGFzUmVzdWx0cyAoZGF0YSkge1xuICAgIGlmICghZGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgc2VjdGlvbnMgPSBkYXRhWydzZWN0aW9ucyddO1xuICAgIGlmICghc2VjdGlvbnMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkYXRhID0gc2VjdGlvbnNbaV07XG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjb25zdCByZXN1bHRzID0gZGF0YS5yZXN1bHRzO1xuICAgICAgaWYgKCFyZXN1bHRzKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhhbmRsZU5hdmlnYXRlUmVzdWx0cyAoa2V5LCBlKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gdGhpcy5fc3RhdGUuZ2V0KCdzZWN0aW9ucycpO1xuICAgIGlmIChzZWN0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IHNlY3Rpb25zLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVGFiYmluZyBvdXQgb3IgZW50ZXIgc2hvdWxkIGNsb3NlIHRoZSBhdXRvIGNvbXBsZXRlLlxuICAgIGlmIChrZXkgPT09IEtleXMuVEFCKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdHMgPSBzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHM7XG4gICAgaWYgKGtleSA9PT0gS2V5cy5VUCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRoaXMuX3Jlc3VsdEluZGV4IDw9IDApIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlY3Rpb25JbmRleCA+IDApIHtcbiAgICAgICAgICB0aGlzLl9zZWN0aW9uSW5kZXgtLTtcbiAgICAgICAgICB0aGlzLl9yZXN1bHRJbmRleCA9IHNlY3Rpb25zW3RoaXMuX3NlY3Rpb25JbmRleF0ucmVzdWx0cy5sZW5ndGggLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudXBkYXRlUXVlcnkodGhpcy5fb3JpZ2luYWxRdWVyeSk7XG4gICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZXN1bHRJbmRleC0tO1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChrZXkgPT09IEtleXMuRE9XTikge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRoaXMuX3Jlc3VsdEluZGV4ID49IHJlc3VsdHMubGVuZ3RoIC0gMSkge1xuICAgICAgICBpZiAodGhpcy5fc2VjdGlvbkluZGV4IDwgc2VjdGlvbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHRoaXMuX3NlY3Rpb25JbmRleCsrO1xuICAgICAgICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZXN1bHRJbmRleCsrO1xuICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdFJlc3VsdCAoa2V5LCB2YWx1ZSwgZSkge1xuICAgIGxldCBzZWN0aW9ucyA9IHRoaXMuX3N0YXRlLmdldCgnc2VjdGlvbnMnKTtcbiAgICBpZiAoc2VjdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBzZWN0aW9ucy5sZW5ndGggPD0gMCkge1xuICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJTZWFyY2gpIHtcbiAgICAgICAgdGhpcy5hdXRvQ29tcGxldGUodmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHN1Ym1pdCB0aGUgc2VhcmNoIG9uIGVudGVyXG4gICAgaWYgKGtleSA9PT0gS2V5cy5FTlRFUikge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAodGhpcy5pc0ZpbHRlclNlYXJjaCAmJiB0aGlzLl9yZXN1bHRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgZmlsdGVyID0gJyc7XG4gICAgICBpZiAodGhpcy5fc2VjdGlvbkluZGV4ID49IDAgJiYgdGhpcy5fcmVzdWx0SW5kZXggPj0gMCkge1xuICAgICAgICBmaWx0ZXIgPSBKU09OLnN0cmluZ2lmeShzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHNbdGhpcy5fcmVzdWx0SW5kZXhdLmZpbHRlcik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlUXVlcnkodmFsdWUpO1xuICAgICAgdGhpcy5fb3JpZ2luYWxRdWVyeSA9IHZhbHVlO1xuICAgICAgdGhpcy5fb25TdWJtaXQodmFsdWUsIGZpbHRlcik7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGYWNldCAqL1xuXG4vKipcbiAqIE1vZGVsIHJlcHJlc2VudGluZyBhIGZhY2V0IGZpbHRlciB3aXRoIHRoZSBmb3JtYXQgb2ZcbiAqIHtcbiAqICAgXCJmaWVsZF9uYW1lXCI6IFsgRmlsdGVycy4uLiBdLFxuICogICAuLi5cbiAqIH1cbiAqXG4gKiBAc2VlIHtAbGluayBGaWx0ZXJ9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBmYWNldCBmaWx0ZXIgZnJvbSBhIGxpc3Qgb2YgRmlsdGVyc1xuICAgKiBAcGFyYW0gIHsuLi5GaWx0ZXJ9IGZpbHRlcnMgVGhlIGZpbHRlcnMgdG8gdXNlIGluIHRoaXMgZmFjZXRcbiAgICogQHJldHVybnMge0ZhY2V0fVxuICAgKi9cbiAgc3RhdGljIGZyb21GaWx0ZXJzICguLi5maWx0ZXJzKSB7XG4gICAgY29uc3QgZ3JvdXBzID0ge307XG4gICAgY29uc3QgZmxhdEZpbHRlcnMgPSBmaWx0ZXJzLmZsYXRNYXAoZiA9PiBmLiRvciB8fCBmKTtcbiAgICBmbGF0RmlsdGVycy5mb3JFYWNoKGYgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMoZilbMF07XG4gICAgICBpZiAoIWdyb3Vwc1trZXldKSB7XG4gICAgICAgIGdyb3Vwc1trZXldID0gW107XG4gICAgICB9XG4gICAgICBncm91cHNba2V5XS5wdXNoKGYpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBGYWNldChncm91cHMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXJCb3hDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBGYWNldCBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9mYWNldCc7XG5cbi8qKlxuICogUmVuZGVycyBhIHNldCBvZiBmaWx0ZXJzLCBhbmQgc2VhcmNoZXMgd2l0aCB0aGVtIHdoZW4gYXBwbGllZC5cbiAqIE11bHRpcGxlIEZpbHRlckJveCBjb21wb25lbnRzIHdpbGwgQU5EIHRvZ2V0aGVyIGJ1dCB3aWxsIG5vdCBzaGFyZSBzdGF0ZS5cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJCb3hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgaWYgKCFjb25maWcuZmlsdGVycyB8fCAhKGNvbmZpZy5maWx0ZXJzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICAnRmlsdGVyQm94IHJlcXVpcmVzIGZpbHRlcnMgdG8gYmUgcHJvdmlkZWQgYXMgYW4gYXJyYXknLFxuICAgICAgICAnRmlsdGVyQm94Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGxpc3Qgb2YgZmlsdGVycyB0byBkaXNwbGF5IGFuZCBjb250cm9sXG4gICAgICogQHR5cGUge29iamVjdFtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVyQ29uZmlncyA9IGNvbmZpZy5maWx0ZXJzO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIHNlYXJjaFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IGNvbmZpZy52ZXJ0aWNhbEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdHJpZ2dlciBhIHNlYXJjaCBvbiBlYWNoIGNoYW5nZSB0byBhIGZpbHRlclxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc2VhcmNoT25DaGFuZ2UgPSBjb25maWcuc2VhcmNoT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0b3Igb2YgdGhlIGFwcGx5IGJ1dHRvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcHBseUJ1dHRvblNlbGVjdG9yID0gY29uZmlnLmFwcGx5QnV0dG9uU2VsZWN0b3IgfHwgJy5qcy15ZXh0LWZpbHRlcmJveC1hcHBseSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9uZW50cyBjcmVhdGVkIGZvciBlYWNoIGZpbHRlciBjb25maWdcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50W119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWx0ZXJDb21wb25lbnRzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZmlsdGVyIGNvbXBvbmVudHMgaW4gdGhlIGJveFxuICAgICAqIEB0eXBlIHtGaWx0ZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWx0ZXJzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGZpbHRlcmJveCBjb250YWlucyBkeW5hbWljIGZpbHRlcnMuIFRoaXMgYWZmZWN0cyB0aGVcbiAgICAgKiB0aGUgd2F5IHRoZSBmaWx0ZXJzIGFyZSB1c2VkIGluIHRoZSBzZWFyY2hcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2lzRHluYW1pYyA9IGNvbmZpZy5pc0R5bmFtaWMgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IGBmaWx0ZXJzL2ZpbHRlcmJveGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRmlsdGVyQm94JztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICBmaWx0ZXJDb25maWdzOiB0aGlzLl9maWx0ZXJDb25maWdzLFxuICAgICAgc2hvd0FwcGx5QnV0dG9uOiAhdGhpcy5fc2VhcmNoT25DaGFuZ2VcbiAgICB9KSk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICBpZiAodGhpcy5fZmlsdGVyQ29tcG9uZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2ZpbHRlckNvbXBvbmVudHMuZm9yRWFjaChjID0+IGMucmVtb3ZlKCkpO1xuICAgICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cyA9IFtdO1xuICAgICAgdGhpcy5fZmlsdGVycyA9IFtdO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgZmlsdGVycyBmcm9tIGNvbmZpZ3NcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2ZpbHRlckNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuX2ZpbHRlckNvbmZpZ3NbaV07XG4gICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKGNvbmZpZy50eXBlLCBPYmplY3QuYXNzaWduKHt9LFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfS5maWx0ZXIke2l9YCxcbiAgICAgICAgICBzdG9yZU9uQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICBjb250YWluZXI6IGAuanMteWV4dC1maWx0ZXJib3gtZmlsdGVyJHtpfWAsXG4gICAgICAgICAgb25DaGFuZ2U6IChmaWx0ZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25GaWx0ZXJDaGFuZ2UoaSwgZmlsdGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgIGNvbXBvbmVudC5tb3VudCgpO1xuICAgICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICB0aGlzLl9maWx0ZXJzW2ldID0gY29tcG9uZW50LmdldEZpbHRlcigpO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgYXBwbHkgYnV0dG9uXG4gICAgaWYgKCF0aGlzLl9zZWFyY2hPbkNoYW5nZSkge1xuICAgICAgY29uc3QgYnV0dG9uID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fYXBwbHlCdXR0b25TZWxlY3Rvcik7XG5cbiAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgRE9NLm9uKGJ1dHRvbiwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3NhdmVGaWx0ZXJzVG9TdG9yYWdlKCk7XG4gICAgICAgICAgdGhpcy5fc2VhcmNoKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgY2hhbmdlcyB0byBjaGlsZCBmaWx0ZXIgY29tcG9uZW50c1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBjaGFuZ2VkIGZpbHRlclxuICAgKiBAcGFyYW0ge0ZpbHRlcn0gZmlsdGVyIFRoZSBuZXcgZmlsdGVyXG4gICAqL1xuICBvbkZpbHRlckNoYW5nZSAoaW5kZXgsIGZpbHRlcikge1xuICAgIHRoaXMuX2ZpbHRlcnNbaW5kZXhdID0gZmlsdGVyO1xuICAgIGlmICh0aGlzLl9zZWFyY2hPbkNoYW5nZSkge1xuICAgICAgdGhpcy5fc2F2ZUZpbHRlcnNUb1N0b3JhZ2UoKTtcbiAgICAgIHRoaXMuX3NlYXJjaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGZpbHRlciBjb21wb25lbnRzIGFsb25nIHdpdGggdGhpcyBjb21wb25lbnRcbiAgICovXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cy5mb3JFYWNoKGMgPT4gYy5yZW1vdmUoKSk7XG4gICAgc3VwZXIucmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSBjdXJyZW50IGZpbHRlcnMgdG8gc3RvcmFnZSB0byBiZSB1c2VkIGluIHRoZSBuZXh0IHNlYXJjaFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NhdmVGaWx0ZXJzVG9TdG9yYWdlICgpIHtcbiAgICBjb25zdCB2YWxpZEZpbHRlcnMgPSB0aGlzLl9maWx0ZXJzLmZpbHRlcihmID0+XG4gICAgICBmICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIGYgIT09IG51bGwgJiZcbiAgICAgIE9iamVjdC5rZXlzKGYpLmxlbmd0aCA+IDApO1xuXG4gICAgaWYgKHRoaXMuX2lzRHluYW1pYykge1xuICAgICAgY29uc3QgY29tYmluZWRGaWx0ZXIgPSBGYWNldC5mcm9tRmlsdGVycyguLi52YWxpZEZpbHRlcnMpO1xuICAgICAgdGhpcy5jb3JlLnNldEZhY2V0RmlsdGVyKHRoaXMubmFtZSwgY29tYmluZWRGaWx0ZXIgfHwge30pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb21iaW5lZEZpbHRlciA9IHZhbGlkRmlsdGVycy5sZW5ndGggPiAxXG4gICAgICAgID8gRmlsdGVyLmFuZCguLi52YWxpZEZpbHRlcnMpXG4gICAgICAgIDogdmFsaWRGaWx0ZXJzWzBdO1xuICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGNvbWJpbmVkRmlsdGVyIHx8IHt9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBhIHNlYXJjaCB3aXRoIGFsbCBmaWx0ZXJzIGluIHN0b3JhZ2VcbiAgICovXG4gIF9zZWFyY2ggKCkge1xuICAgIGNvbnN0IGFsbEZpbHRlcnMgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICBjb25zdCB0b3RhbEZpbHRlciA9IGFsbEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgPyBGaWx0ZXIuYW5kKC4uLmFsbEZpbHRlcnMpXG4gICAgICA6IGFsbEZpbHRlcnNbMF07XG5cbiAgICBjb25zdCBxdWVyeSA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKTtcblxuICAgIGNvbnN0IGZhY2V0RmlsdGVyID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZBQ0VUX0ZJTFRFUilbMF07XG5cbiAgICB0aGlzLmNvcmUudmVydGljYWxTZWFyY2godGhpcy5fdmVydGljYWxLZXksIHtcbiAgICAgIGlucHV0OiBxdWVyeSxcbiAgICAgIGZpbHRlcjogSlNPTi5zdHJpbmdpZnkodG90YWxGaWx0ZXIpLFxuICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXJPcHRpb25zQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgc3VwcG9ydGVkIGNvbnRyb2xzXG4gKiBAdHlwZSB7c3RyaW5nW119XG4gKi9cbmNvbnN0IFNVUFBPUlRFRF9DT05UUk9MUyA9IFtcbiAgJ3NpbmdsZW9wdGlvbicsXG4gICdtdWx0aW9wdGlvbidcbl07XG5cbi8qKlxuICogUmVuZGVycyBhIHNldCBvZiBvcHRpb25zLCBlYWNoIG9uZSByZXByZXNlbnRpbmcgYSBmaWx0ZXIgaW4gYSBzZWFyY2guXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlck9wdGlvbnNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgaWYgKCFjb25maWcuY29udHJvbCB8fCAhU1VQUE9SVEVEX0NPTlRST0xTLmluY2x1ZGVzKGNvbmZpZy5jb250cm9sKSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMgcmVxdWlyZXMgYSB2YWxpZCBcImNvbnRyb2xcIiB0byBiZSBwcm92aWRlZCcsXG4gICAgICAgICdGaWx0ZXJPcHRpb25zJyk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25maWcub3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMgY29tcG9uZW50IHJlcXVpcmVzIG9wdGlvbnMgdG8gYmUgcHJvdmlkZWQnLFxuICAgICAgICAnRmlsdGVyT3B0aW9ucycpO1xuICAgIH1cblxuICAgIGxldCBwcmV2aW91c09wdGlvbnMgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZSh0aGlzLm5hbWUpO1xuICAgIGlmICh0eXBlb2YgcHJldmlvdXNPcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcHJldmlvdXNPcHRpb25zID0gSlNPTi5wYXJzZShwcmV2aW91c09wdGlvbnMpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gICAgbGV0IHNlbGVjdGVkT3B0aW9ucyA9IHByZXZpb3VzT3B0aW9ucyB8fCBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGZpbHRlciBvcHRpb25zIHRvIGRpc3BsYXkgd2l0aCBjaGVja2VkIHN0YXR1c1xuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29wdGlvbnMgPSBjb25maWcub3B0aW9ucy5tYXAobyA9PiBPYmplY3QuYXNzaWduKHt9LCB7IHNlbGVjdGVkOiBzZWxlY3RlZE9wdGlvbnMuaW5jbHVkZXMoby5sYWJlbCkgfSwgbykpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgY29udHJvbCB0byBkaXNwbGF5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2NvbnRyb2wgPSBjb25maWcuY29udHJvbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RvciB1c2VkIGZvciBvcHRpb25zIGluIHRoZSB0ZW1wbGF0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vcHRpb25TZWxlY3RvciA9IGNvbmZpZy5vcHRpb25TZWxlY3RvciB8fCAnLmpzLXlleHQtZmlsdGVyLW9wdGlvbic7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzdG9yZXMgdGhlIGZpbHRlciB0byBzdG9yYWdlIG9uIGVhY2ggY2hhbmdlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdG9yZU9uQ2hhbmdlID0gY29uZmlnLnN0b3JlT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNoYW5nZWRcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vbkNoYW5nZSA9IGNvbmZpZy5vbkNoYW5nZSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB0byBiZSB1c2VkIGluIHRoZSBsZWdlbmRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbGFiZWwgPSBjb25maWcubGFiZWwgfHwgJ0ZpbHRlcnMnO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0ZpbHRlck9wdGlvbnMnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXIsIGJhc2VkIG9uIHRoZSBjb250cm9sXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiBgY29udHJvbHMvJHtjb25maWcuY29udHJvbH1gO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgIG9wdGlvbnM6IHRoaXMuX29wdGlvbnMsXG4gICAgICBsYWJlbDogdGhpcy5fbGFiZWxcbiAgICB9KSk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICBET00uZGVsZWdhdGUoXG4gICAgICBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCBgLiR7dGhpcy5fY29udHJvbH0tZmllbGRzZXRgKSxcbiAgICAgIHRoaXMuX29wdGlvblNlbGVjdG9yLFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlT3B0aW9uKHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4KSwgZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xuXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuX2J1aWxkRmlsdGVyKCk7XG4gICAgICAgIGlmICh0aGlzLl9zdG9yZU9uQ2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGZpbHRlcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9vbkNoYW5nZShmaWx0ZXIpO1xuICAgICAgfSk7XG4gIH1cblxuICBfdXBkYXRlT3B0aW9uIChpbmRleCwgc2VsZWN0ZWQpIHtcbiAgICBpZiAodGhpcy5fY29udHJvbCA9PT0gJ3NpbmdsZW9wdGlvbicpIHtcbiAgICAgIHRoaXMuX29wdGlvbnMgPSB0aGlzLl9vcHRpb25zLm1hcChvID0+IE9iamVjdC5hc3NpZ24oe30sIG8sIHsgc2VsZWN0ZWQ6IGZhbHNlIH0pKTtcbiAgICB9XG5cbiAgICB0aGlzLl9vcHRpb25zW2luZGV4XSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX29wdGlvbnNbaW5kZXhdLCB7IHNlbGVjdGVkIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoKTtcbiAgfVxuXG4gIGdldEZpbHRlciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkRmlsdGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIG9wdGlvbnNcbiAgICovXG4gIGNsZWFyICgpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IERPTS5xdWVyeUFsbCh0aGlzLl9jb250YWluZXIsIHRoaXMuX29wdGlvblNlbGVjdG9yKTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGUgPT4gZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnZmFsc2UnKSk7XG4gICAgdGhpcy5fYXBwbHlGaWx0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCBhbmQgcmV0dXJuIHRoZSBGaWx0ZXIgdGhhdCByZXByZXNlbnRzIHRoZSBjdXJyZW50IHN0YXRlXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYnVpbGRGaWx0ZXIgKCkge1xuICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLl9vcHRpb25zXG4gICAgICAuZmlsdGVyKG8gPT4gby5zZWxlY3RlZClcbiAgICAgIC5tYXAobyA9PiBvLmZpbHRlclxuICAgICAgICA/IG8uZmlsdGVyXG4gICAgICAgIDogRmlsdGVyLmVxdWFsKG8uZmllbGQsIG8udmFsdWUpKTtcblxuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQodGhpcy5uYW1lLCB0aGlzLl9vcHRpb25zLmZpbHRlcihvID0+IG8uc2VsZWN0ZWQpLm1hcChvID0+IG8ubGFiZWwpKTtcbiAgICByZXR1cm4gZmlsdGVycy5sZW5ndGggPiAwXG4gICAgICA/IEZpbHRlci5ncm91cCguLi5maWx0ZXJzKVxuICAgICAgOiB7fTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmFuZ2VGaWx0ZXJDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZ2VGaWx0ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpZWxkIHRvIGZpbHRlciBvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWVsZCA9IGNvbmZpZy5maWVsZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGZpbHRlciB2YWx1ZSBjaGFuZ2VzXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBjb25maWcub25DaGFuZ2UgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzdG9yZXMgdGhlIGZpbHRlciB0byBzdG9yYWdlIG9uIGVhY2ggY2hhbmdlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdG9yZU9uQ2hhbmdlID0gY29uZmlnLnN0b3JlT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICBsZXQgbWluVmFsID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7dGhpcy5uYW1lfS5taW5gKTtcbiAgICBpZiAodHlwZW9mIG1pblZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG1pblZhbCA9IE51bWJlci5wYXJzZUludChtaW5WYWwpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gICAgbGV0IG1heFZhbCA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke3RoaXMubmFtZX0ubWF4YCk7XG4gICAgaWYgKHR5cGVvZiBtaW5WYWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBtYXhWYWwgPSBOdW1iZXIucGFyc2VJbnQobWF4VmFsKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgcmFuZ2UgcmVwcmVzZW50ZWRcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcmFuZ2UgPSB7XG4gICAgICBtaW46IG1pblZhbCB8fCBjb25maWcuaW5pdGlhbE1pbiB8fCAwLFxuICAgICAgbWF4OiBtYXhWYWwgfHwgY29uZmlnLmluaXRpYWxNYXggfHwgMTBcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIHRvIGRpc3BsYXkgZm9yIHRoZSByYW5nZSBjb250cm9sXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RpdGxlID0gY29uZmlnLnRpdGxlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGxhYmVsIHRvIGRpc3BsYXkgZm9yIHRoZSBtaW4gaW5wdXRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbWluTGFiZWwgPSBjb25maWcubWluTGFiZWwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBsYWJlbCB0byBkaXNwbGF5IGZvciB0aGUgbWF4IGlucHV0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX21heExhYmVsID0gY29uZmlnLm1heExhYmVsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IGBjb250cm9scy9yYW5nZWA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUmFuZ2VGaWx0ZXInO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB0aXRsZTogdGhpcy5fdGl0bGUsXG4gICAgICBtaW5MYWJlbDogdGhpcy5fbWluTGFiZWwsXG4gICAgICBtYXhMYWJlbDogdGhpcy5fbWF4TGFiZWwsXG4gICAgICBtaW5WYWx1ZTogdGhpcy5fcmFuZ2UubWluLFxuICAgICAgbWF4VmFsdWU6IHRoaXMuX3JhbmdlLm1heFxuICAgIH0pKTtcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICBET00uZGVsZWdhdGUodGhpcy5fY29udGFpbmVyLCAnLmpzLXlleHQtcmFuZ2UnLCAnY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl91cGRhdGVSYW5nZShldmVudC50YXJnZXQuZGF0YXNldC5rZXksIE51bWJlci5wYXJzZUludChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldE1pbiAodmFsdWUpIHtcbiAgICB0aGlzLl91cGRhdGVSYW5nZSgnbWluJywgdmFsdWUpO1xuICB9XG5cbiAgc2V0TWF4ICh2YWx1ZSkge1xuICAgIHRoaXMuX3VwZGF0ZVJhbmdlKCdtYXgnLCB2YWx1ZSk7XG4gIH1cblxuICBnZXRGaWx0ZXIgKCkge1xuICAgIHJldHVybiB0aGlzLl9idWlsZEZpbHRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgY3VycmVudCByYW5nZSBzdGF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByYW5nZSBrZXkgdG8gdXBkYXRlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgbmV3IHZhbHVlIGZvciB0aGUga2V5XG4gICAqL1xuICBfdXBkYXRlUmFuZ2UgKGtleSwgdmFsdWUpIHtcbiAgICB0aGlzLl9yYW5nZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX3JhbmdlLCB7IFtrZXldOiB2YWx1ZSB9KTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG5cbiAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLl9idWlsZEZpbHRlcigpO1xuICAgIGlmICh0aGlzLl9zdG9yZU9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgZmlsdGVyKTtcbiAgICB9XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHt0aGlzLm5hbWV9Lm1pbmAsIHRoaXMuX3JhbmdlLm1pbik7XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHt0aGlzLm5hbWV9Lm1heGAsIHRoaXMuX3JhbmdlLm1heCk7XG5cbiAgICB0aGlzLl9vbkNoYW5nZShmaWx0ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHRoZSBmaWx0ZXIgcmVwcmVzZW50YXRpb24gb2YgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIF9idWlsZEZpbHRlciAoKSB7XG4gICAgcmV0dXJuIEZpbHRlci5pbmNsdXNpdmVSYW5nZSh0aGlzLl9maWVsZCwgdGhpcy5fcmFuZ2UubWluLCB0aGlzLl9yYW5nZS5tYXgpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEYXRlRmlsdGVyQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5cbi8qKlxuICogQSBmaWx0ZXIgZm9yIGEgcmFuZ2Ugb2YgZGF0ZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVJhbmdlRmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcGkgZmllbGQgdGhpcyBmaWx0ZXIgY29udHJvbHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmllbGQgPSBjb25maWcuZmllbGQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgdG8gZGlzcGxheSBmb3IgdGhlIGRhdGUgcmFuZ2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGl0bGUgPSBjb25maWcudGl0bGU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgbGFiZWwgdG8gc2hvdyBmb3IgdGhlIG1pbiBkYXRlIGlucHV0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX21pbkxhYmVsID0gY29uZmlnLm1pbkxhYmVsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgbGFiZWwgdG8gc2hvdyBmb3IgdGhlIG1heCBkYXRlIGlucHV0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX21heExhYmVsID0gY29uZmlnLm1heExhYmVsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2FsbGJhY2sgdXNlZCB3aGVuIGEgZGF0ZSBpcyBjaGFuZ2VkXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBjb25maWcub25DaGFuZ2UgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzdG9yZXMgdGhlIGZpbHRlciB0byBzdG9yYWdlIG9uIGVhY2ggY2hhbmdlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdG9yZU9uQ2hhbmdlID0gY29uZmlnLnN0b3JlT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGlzIGZpbHRlciByZXByZXNlbnRzIGFuIGV4Y2x1c2l2ZSByYW5nZSwgcmF0aGVyIHRoYW4gYW4gaW5jbHVzaXZlIG9uZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faXNFeGNsdXNpdmUgPSBjb25maWcuaXNFeGNsdXNpdmU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgZm9yIHRoaXMgY29tcG9uZW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSBgY29udHJvbHMvZGF0ZWA7XG5cbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdG9kYXlTdHJpbmcgPSBgJHt0b2RheS5nZXRGdWxsWWVhcigpfS0ke2Ake3RvZGF5LmdldE1vbnRoKCkgKyAxfWAucGFkU3RhcnQoMiwgJzAnKX0tJHtgJHt0b2RheS5nZXREYXRlKCl9YC5wYWRTdGFydCgyLCAnMCcpfWA7XG4gICAgY29uc3QgbWluRGF0ZSA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke3RoaXMubmFtZX0ubWluYCk7XG4gICAgY29uc3QgbWF4RGF0ZSA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke3RoaXMubmFtZX0ubWF4YCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBkYXRlIHJhbmdlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9kYXRlID0ge1xuICAgICAgbWluOiBtaW5EYXRlIHx8IGNvbmZpZy5pbml0aWFsTWluIHx8IHRvZGF5U3RyaW5nLFxuICAgICAgbWF4OiBtYXhEYXRlIHx8IGNvbmZpZy5pbml0aWFsTWF4IHx8IHRvZGF5U3RyaW5nXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdEYXRlUmFuZ2VGaWx0ZXInO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB0aXRsZTogdGhpcy5fdGl0bGUsXG4gICAgICBtaW5MYWJlbDogdGhpcy5fbWluTGFiZWwsXG4gICAgICBtYXhMYWJlbDogdGhpcy5fbWF4TGFiZWwsXG4gICAgICBkYXRlTWluOiB0aGlzLl9kYXRlLm1pbixcbiAgICAgIGRhdGVNYXg6IHRoaXMuX2RhdGUubWF4XG4gICAgfSkpO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIERPTS5kZWxlZ2F0ZSh0aGlzLl9jb250YWluZXIsICcuanMteWV4dC1kYXRlJywgJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdXBkYXRlUmFuZ2UoZXZlbnQudGFyZ2V0LmRhdGFzZXQua2V5LCBldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbWluIGRhdGUgdG8gdGhlIG9uZSBwcm92aWRlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0ZSBEYXRlIHRvIHNldCBpbiB5eXl5LW1tLWRkIHN0cmluZyBmb3JtYXRcbiAgICovXG4gIHNldE1pbiAoZGF0ZSkge1xuICAgIHRoaXMuX3VwZGF0ZVJhbmdlKCdtaW4nLCBkYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG1heCBkYXRlIHRvIHRoZSBvbmUgcHJvdmlkZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGUgRGF0ZSB0byBzZXQgaW4geXl5eS1tbS1kZCBzdHJpbmcgZm9ybWF0XG4gICAqL1xuICBzZXRNYXggKGRhdGUpIHtcbiAgICB0aGlzLl91cGRhdGVSYW5nZSgnbWF4JywgZGF0ZSk7XG4gIH1cblxuICBnZXRGaWx0ZXIgKCkge1xuICAgIHJldHVybiB0aGlzLl9idWlsZEZpbHRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGRhdGUgcmFuZ2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IGZvciB0aGUgZGF0ZSB2YWx1ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIHN0cmluZyBkYXRlIHZhbHVlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdXBkYXRlUmFuZ2UgKGtleSwgdmFsdWUpIHtcbiAgICB0aGlzLl9kYXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZGF0ZSwgeyBba2V5XTogdmFsdWUgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSgpO1xuXG4gICAgY29uc3QgZmlsdGVyID0gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgICBpZiAodGhpcy5fc3RvcmVPbkNoYW5nZSkge1xuICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGZpbHRlcik7XG4gICAgfVxuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7dGhpcy5uYW1lfS5taW5gLCB0aGlzLl9kYXRlLm1pbik7XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHt0aGlzLm5hbWV9Lm1heGAsIHRoaXMuX2RhdGUubWF4KTtcblxuICAgIHRoaXMuX29uQ2hhbmdlKGZpbHRlcik7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0IGFuIGFwaSBmaWx0ZXIgd2l0aCB0aGUgY3VycmVudCBkYXRlIHN0YXRlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYnVpbGRGaWx0ZXIgKCkge1xuICAgIGlmICh0aGlzLl9kYXRlLm1pbiA9PT0gJycgfHwgdGhpcy5fZGF0ZS5tYXggPT09ICcnKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9pc0V4Y2x1c2l2ZVxuICAgICAgPyBGaWx0ZXIuZXhjbHVzaXZlUmFuZ2UodGhpcy5fZmllbGQsIHRoaXMuX2RhdGUubWluLCB0aGlzLl9kYXRlLm1heClcbiAgICAgIDogRmlsdGVyLmluY2x1c2l2ZVJhbmdlKHRoaXMuX2ZpZWxkLCB0aGlzLl9kYXRlLm1pbiwgdGhpcy5fZGF0ZS5tYXgpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEeW5hbWljRmlsdGVyc0NvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuLyoqXG4gKiBEaXNwbGF5cyBhIHNldCBvZiBkeW5hbWljIGZpbHRlcnMgcmV0dXJuZWQgZnJvbSB0aGUgYmFja2VuZFxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNGaWx0ZXJzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBzZWFyY2hcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRyaWdnZXIgYSBzZWFyY2ggb24gZWFjaCBjaGFuZ2UgdG8gYSBmaWx0ZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaE9uQ2hhbmdlID0gY29uZmlnLnNlYXJjaE9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdG9yIG9mIHRoZSBhcHBseSBidXR0b25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBwbHlCdXR0b25TZWxlY3RvciA9IGNvbmZpZy5hcHBseUJ1dHRvblNlbGVjdG9yIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29udHJvbHMgdG8gdXNlIGZvciBlYWNoIGZpZWxkLiBFYWNoIHR5cGUgb2YgZmlsdGVyIGhhcyBhIGRlZmF1bHRcbiAgICAgKiAkZXEgOiBtdWx0aW9wdGlvbiAoY2hlY2tib3gpXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9maWVsZENvbnRyb2xzID0gY29uZmlnLmZpZWxkQ29udHJvbHMgfHwge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdmaWx0ZXJzL2R5bmFtaWMnO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIGZvciB0aGUgZGF0YSBzdG9yYWdlIHRvIGxpc3RlbiBmb3IgdXBkYXRlcyBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5EWU5BTUlDX0ZJTFRFUlM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmlsdGVyIGJveCB0aGF0IGRpc3BsYXlzIHRoZSBkeW5hbWljIGZpbHRlcnNcbiAgICAgKiBAdHlwZSB7RmlsdGVyQm94Q29tcG9uZW50fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVyYm94ID0gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdEeW5hbWljRmlsdGVycyc7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICB0aGlzLmNvcmUuZW5hYmxlRHluYW1pY0ZpbHRlcnMoKTtcblxuICAgIGlmICh0aGlzLl9maWx0ZXJib3gpIHtcbiAgICAgIHRoaXMuX2ZpbHRlcmJveC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBsZXQgeyBmaWx0ZXJzIH0gPSB0aGlzLl9zdGF0ZS5nZXQoKTtcblxuICAgIGlmICghZmlsdGVycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZpbHRlcnMgPSBmaWx0ZXJzLm1hcChmID0+IHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBmLCB7XG4gICAgICAgIHR5cGU6ICdGaWx0ZXJPcHRpb25zJyxcbiAgICAgICAgY29udHJvbDogdGhpcy5fZmllbGRDb250cm9sc1tmLmZpZWxkSWRdIHx8ICdtdWx0aW9wdGlvbidcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fZmlsdGVyYm94ID0gdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZShcbiAgICAgICdGaWx0ZXJCb3gnLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0uZmlsdGVyYm94YCxcbiAgICAgICAgY29udGFpbmVyOiAnLmpzLXlleHQtZHluYW1pYy1maWx0ZXJzJyxcbiAgICAgICAgc2VhcmNoT25DaGFuZ2U6IHRoaXMuX3NlYXJjaE9uQ2hhbmdlLFxuICAgICAgICB2ZXJ0aWNhbEtleTogdGhpcy5fdmVydGljYWxLZXksXG4gICAgICAgIGlzRHluYW1pYzogdHJ1ZSxcbiAgICAgICAgZmlsdGVyc1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5fZmlsdGVyYm94Lm1vdW50KCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEdlb0xvY2F0aW9uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuY29uc3QgTUVURVJTX1BFUl9NSUxFID0gMTYwOS4zNDQ7XG5cbmNvbnN0IERFRkFVTFRfQ09ORklHID0ge1xuICAvKipcbiAgICogVGhlIHJhZGl1cywgaW4gbWlsZXMsIGFyb3VuZCB0aGUgdXNlcidzIGxvY2F0aW9uIHRvIGZpbmQgcmVzdWx0cy5cbiAgICogSWYgbG9jYXRpb24gYWNjdXJhY3kgaXMgbG93LCBhIGxhcmdlciByYWRpdXMgbWF5IGJlIHVzZWQgYXV0b21hdGljYWxseVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgcmFkaXVzOiA1MCxcblxuICAvKipcbiAgICogVGhlIHZlcnRpY2FsIGtleSB0byB1c2VcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHZlcnRpY2FsS2V5OiBudWxsLFxuXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBzdWJtaXRzIGEgc2VhcmNoIHdoZW4gdGhlIHZhbHVlIGlzIGNoYW5nZWRcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBzZWFyY2hPbkNoYW5nZTogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFRoZSB0aXRsZSB0byBkaXNwbGF5XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICB0aXRsZTogJ0xvY2F0aW9uJyxcblxuICAvKipcbiAgICogVGhlIGxhYmVsIHRvIGRpc3BsYXlcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGxhYmVsOiAnTG9jYXRpb24nLFxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB1cmwgdG8gc2hvdyBpbiB0aGUgZ2VvIGJ1dHRvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2VvQnV0dG9uSWNvbjogJycsXG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IHRvIHNob3cgaW4gdGhlIGdlbyBidXR0b25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdlb0J1dHRvblRleHQ6ICdVc2UgTXkgTG9jYXRpb24nLFxuXG4gIC8qKlxuICAgKiBUaGUgdGV4dCB0byBzaG93IHdoZW4gZ2VvbG9jYXRpb24gaXMgZW5hYmxlZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZW5hYmxlZFRleHQ6ICdDdXJyZW50IExvY2F0aW9uJyxcblxuICAvKipcbiAgICogVGhlIHRleHQgdG8gc2hvdyB3aGVuIGxvYWRpbmcgdGhlIHVzZXIncyBsb2NhdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgbG9hZGluZ1RleHQ6ICdGaW5kaW5nIFlvdXIgTG9jYXRpb24uLi4nLFxuXG4gIC8qKlxuICAgKiBUaGUgdGV4dCB0byBzaG93IGlmIHRoZSB1c2VyJ3MgbG9jYXRpb24gY2Fubm90IGJlIGZvdW5kXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBlcnJvclRleHQ6ICdDb3VsZCBOb3QgRmluZCBZb3VyIExvY2F0aW9uJyxcblxuICAvKipcbiAgICogVGhlIENTUyBzZWxlY3RvciBvZiB0aGUgdG9nZ2xlIGJ1dHRvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgYnV0dG9uU2VsZWN0b3I6ICcuanMteXh0LUdlb0xvY2F0aW9uRmlsdGVyLWJ1dHRvbicsXG5cbiAgLyoqXG4gICAqIFRoZSBDU1Mgc2VsZWN0b3Igb2YgdGhlIHF1ZXJ5IGlucHV0XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBpbnB1dFNlbGVjdG9yOiAnLmpzLXl4dC1HZW9Mb2NhdGlvbkZpbHRlci1pbnB1dCdcbn07XG5cbi8qKlxuICogUmVuZGVycyBhIGJ1dHRvbiB0aGF0IHdoZW4gY2xpY2tlZCBhZGRzIGEgc3RhdGljIGZpbHRlciByZXByZXNlbnRpbmcgdGhlIHVzZXIncyBsb2NhdGlvblxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlb0xvY2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoeyAuLi5ERUZBVUxUX0NPTkZJRywgLi4uY29uZmlnIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHN0cmluZyB0byB1c2UgZm9yIHRoZSBpbnB1dCBib3gsIHByb3ZpZGVkIHRvIHRlbXBsYXRlIGZvciByZW5kZXJpbmcuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWApIHx8ICcnO1xuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCwgcSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gcTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaWx0ZXIgdG8gdXNlIGZvciB0aGUgY3VycmVudCBxdWVyeVxuICAgICAqIEB0eXBlIHtGaWx0ZXJ9XG4gICAgICovXG4gICAgdGhpcy5maWx0ZXIgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWApIHx8IHt9O1xuICAgIGlmICh0eXBlb2YgdGhpcy5maWx0ZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmZpbHRlciA9IEpTT04ucGFyc2UodGhpcy5maWx0ZXIpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG5cbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke3RoaXMubmFtZX1gLCBmID0+IHsgdGhpcy5maWx0ZXIgPSBmOyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdHZW9Mb2NhdGlvbkZpbHRlcic7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoKSB7XG4gICAgcmV0dXJuICdjb250cm9scy9nZW9sb2NhdGlvbic7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIGxldCBwbGFjZWhvbGRlciA9ICcnO1xuICAgIGlmICh0aGlzLl9lbmFibGVkKSB7XG4gICAgICBwbGFjZWhvbGRlciA9IHRoaXMuX2NvbmZpZy5lbmFibGVkVGV4dDtcbiAgICB9XG4gICAgaWYgKGRhdGEuZ2VvTG9hZGluZykge1xuICAgICAgcGxhY2Vob2xkZXIgPSB0aGlzLl9jb25maWcubG9hZGluZ1RleHQ7XG4gICAgfVxuICAgIGlmIChkYXRhLmdlb0Vycm9yKSB7XG4gICAgICBwbGFjZWhvbGRlciA9IHRoaXMuX2NvbmZpZy5lcnJvclRleHQ7XG4gICAgfVxuICAgIHN1cGVyLnNldFN0YXRlKHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICB0aXRsZTogdGhpcy5fY29uZmlnLnRpdGxlLFxuICAgICAgZ2VvRW5hYmxlZDogdGhpcy5fZW5hYmxlZCxcbiAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgbGFiZWxUZXh0OiB0aGlzLl9jb25maWcubGFiZWwsXG4gICAgICBlbmFibGVkVGV4dDogdGhpcy5fY29uZmlnLmVuYWJsZWRUZXh0LFxuICAgICAgbG9hZGluZ1RleHQ6IHRoaXMuX2NvbmZpZy5sb2FkaW5nVGV4dCxcbiAgICAgIGVycm9yVGV4dDogdGhpcy5fY29uZmlnLmVycm9yVGV4dCxcbiAgICAgIGdlb0J1dHRvbkljb246IHRoaXMuX2NvbmZpZy5nZW9CdXR0b25JY29uLFxuICAgICAgZ2VvVmFsdWU6IHRoaXMuX2VuYWJsZWQgfHwgZGF0YS5nZW9Mb2FkaW5nIHx8IGRhdGEuZ2VvRXJyb3IgPyAnJyA6IHRoaXMucXVlcnksXG4gICAgICBnZW9QbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICBnZW9CdXR0b25UZXh0OiB0aGlzLl9jb25maWcuZ2VvQnV0dG9uVGV4dFxuICAgIH0pO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZSkge1xuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2luaXRBdXRvQ29tcGxldGUodGhpcy5fY29uZmlnLmlucHV0U2VsZWN0b3IpO1xuICAgIERPTS5vbih0aGlzLl9jb25maWcuYnV0dG9uU2VsZWN0b3IsICdjbGljaycsICgpID0+IHRoaXMuX3RvZ2dsZUdlb0ZpbHRlcigpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gd2lyZSB1cCBvdXIgYXV0byBjb21wbGV0ZSBvbiBhbiBpbnB1dCBzZWxlY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRTZWxlY3RvciBDU1Mgc2VsZWN0b3IgdG8gYmluZCBvdXIgYXV0byBjb21wbGV0ZSBjb21wb25lbnQgdG9cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pbml0QXV0b0NvbXBsZXRlIChpbnB1dFNlbGVjdG9yKSB7XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZSkge1xuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2F1dG9jb21wbGV0ZSA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoJ0F1dG9Db21wbGV0ZScsIHtcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0uYXV0b2NvbXBsZXRlYCxcbiAgICAgIGlzRmlsdGVyU2VhcmNoOiB0cnVlLFxuICAgICAgY29udGFpbmVyOiAnLmpzLXl4dC1HZW9Mb2NhdGlvbkZpbHRlci1hdXRvY29tcGxldGUnLFxuICAgICAgb3JpZ2luYWxRdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgIG9yaWdpbmFsRmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgIGlucHV0RWw6IGlucHV0U2VsZWN0b3IsXG4gICAgICB2ZXJ0aWNhbEtleTogdGhpcy5fdmVydGljYWxLZXksXG4gICAgICBvblN1Ym1pdDogKHF1ZXJ5LCBmaWx0ZXIpID0+IHtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmZpbHRlciA9IEZpbHRlci5mcm9tUmVzcG9uc2UoZmlsdGVyKTtcbiAgICAgICAgdGhpcy5fc2F2ZURhdGFUb1N0b3JhZ2UocXVlcnksIHRoaXMuZmlsdGVyKTtcbiAgICAgICAgdGhpcy5fZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIHN0YXRpYyBmaWx0ZXIgcmVwcmVzZW50aW5nIHRoZSB1c2VyJ3MgbG9jYXRpb25cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF90b2dnbGVHZW9GaWx0ZXIgKCkge1xuICAgIGlmICghbmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZ2VvRXJyb3I6IHRydWUgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9lbmFibGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZ2VvTG9hZGluZzogdHJ1ZSB9KTtcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4gICAgICAgIHBvc2l0aW9uID0+IHtcbiAgICAgICAgICB0aGlzLl9zYXZlRGF0YVRvU3RvcmFnZSgnJywgdGhpcy5fYnVpbGRGaWx0ZXIocG9zaXRpb24pKTtcbiAgICAgICAgICB0aGlzLl9lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHt9KTtcbiAgICAgICAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2UuZGVsZXRlKGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gKTtcbiAgICAgICAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2UuZGVsZXRlKGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCk7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHRoaXMuc2V0U3RhdGUoeyBnZW9FcnJvcjogdHJ1ZSB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2F2ZXMgdGhlIHByb3ZpZGVkIGZpbHRlciB1bmRlciB0aGlzIGNvbXBvbmVudCdzIG5hbWVcbiAgICogQHBhcmFtIHtGaWx0ZXJ9IGZpbHRlciBUaGUgZmlsdGVyIHRvIHNhdmVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zYXZlRGF0YVRvU3RvcmFnZSAocXVlcnksIGZpbHRlcikge1xuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWAsIHF1ZXJ5KTtcbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCwgZmlsdGVyKTtcbiAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgZmlsdGVyKTtcblxuICAgIGlmICh0aGlzLl9jb25maWcuc2VhcmNoT25DaGFuZ2UpIHtcbiAgICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICAgIGxldCB0b3RhbEZpbHRlciA9IGZpbHRlcnNbMF07XG4gICAgICBpZiAoZmlsdGVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRvdGFsRmlsdGVyID0gRmlsdGVyLmFuZCguLi5maWx0ZXJzKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpIHx8ICcnO1xuICAgICAgY29uc3QgZmFjZXRGaWx0ZXIgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRkFDRVRfRklMVEVSKVswXTtcblxuICAgICAgdGhpcy5jb3JlLnZlcnRpY2FsU2VhcmNoKHRoaXMuX2NvbmZpZy52ZXJ0aWNhbEtleSwge1xuICAgICAgICBpbnB1dDogc2VhcmNoUXVlcnksXG4gICAgICAgIGZpbHRlcjogSlNPTi5zdHJpbmdpZnkodG90YWxGaWx0ZXIpLFxuICAgICAgICBmYWNldEZpbHRlcjogSlNPTi5zdHJpbmdpZnkoZmFjZXRGaWx0ZXIpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYSBwb3NpdGlvbiwgY29uc3RydWN0IGEgRmlsdGVyIG9iamVjdFxuICAgKiBAcGFyYW0ge1Bvc3RpdGlvbn0gcG9zaXRpb24gVGhlIHBvc2l0aW9uXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYnVpbGRGaWx0ZXIgKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlLCBhY2N1cmFjeSB9ID0gcG9zaXRpb24uY29vcmRzO1xuICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgubWF4KGFjY3VyYWN5LCB0aGlzLl9jb25maWcucmFkaXVzICogTUVURVJTX1BFUl9NSUxFKTtcbiAgICByZXR1cm4gRmlsdGVyLnBvc2l0aW9uKGxhdGl0dWRlLCBsb25naXR1ZGUsIHJhZGl1cyk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIERpcmVjdEFuc3dlckNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgQW5hbHl0aWNzRXZlbnQgZnJvbSAnLi4vLi4vLi4vY29yZS9hbmFseXRpY3MvYW5hbHl0aWNzZXZlbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIEV2ZW50VHlwZXMgYXJlIGV4cGxpY2l0IHN0cmluZ3MgZGVmaW5lZFxuICogZm9yIHdoYXQgdGhlIHNlcnZlciBleHBlY3RzIGZvciBhbmFseXRpY3MuXG4gKlxuICogQGVudW1cbiAqL1xuY29uc3QgRXZlbnRUeXBlcyA9IHtcbiAgVEhVTUJTX1VQOiAnVEhVTUJTX1VQJyxcbiAgVEhVTUJTX0RPV046ICdUSFVNQlNfRE9XTidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdEFuc3dlckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBSZWNpZXZlIHVwZGF0ZXMgZnJvbSBzdG9yYWdlIGJhc2VkIG9uIHRoaXMgaW5kZXhcbiAgICAgKiBAdHlwZSB7U3RvcmFnZUtleX1cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuRElSRUNUX0FOU1dFUjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmb3JtIHVzZWQgZm9yIHN1Ym1pdHRpbmcgdGhlIGZlZWRiYWNrXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9mb3JtRWwgPSBjb25maWcuZm9ybUVsIHx8ICcuanMtZGlyZWN0QW5zd2VyLWZlZWRiYWNrLWZvcm0nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGB0aHVtYnMgdXBgIGNzcyBzZWxlY3RvciB0byBiaW5kIHVpIGludGVyYWN0aW9uIHRvIGZvciByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RodW1ic1VwU2VsZWN0b3IgPSBjb25maWcudGh1bWJzVXBTZWxlY3RvciB8fCAnLmpzLWRpcmVjdEFuc3dlci10aHVtYlVwJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBgdGh1bWJzIGRvd25gIGNzcyBzZWxlY3RvciB0byBiaW5kIHVpIGludGVyYWN0aW9uIHRvIGZvciByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RodW1ic0Rvd25TZWxlY3RvciA9IGNvbmZpZy50aHVtYnNEb3duU2VsZWN0b3IgfHwgJy5qcy1kaXJlY3RBbnN3ZXItdGh1bWJEb3duJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBkaXNwbGF5IHRleHQgZm9yIHRoZSBWaWV3IERldGFpbHMgY2xpY2sgdG8gYWN0aW9uIGxpbmtcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZpZXdEZXRhaWxzVGV4dCA9IGNvbmZpZy52aWV3RGV0YWlsc1RleHQgfHwgJ1ZpZXcgRGV0YWlscyc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRGlyZWN0QW5zd2VyJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9kaXJlY3RhbnN3ZXInO1xuICB9XG5cbiAgLyoqXG4gICAqIGJlZm9yZU1vdW50LCBvbmx5IGRpc3BsYXkgdGhlIGRpcmVjdCBhbnN3ZXIgY29tcG9uZW50IGlmIGl0IGhhcyBkYXRhXG4gICAqL1xuICBiZWZvcmVNb3VudCAoKSB7XG4gICAgaWYgKCF0aGlzLmhhc1N0YXRlKCdhbnN3ZXInKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIERPTSBpcyBjb25zdHJ1Y3RlZCxcbiAgICogd2Ugd2FudCB0byB3aXJlIHVwIHRoZSBiZWhhdmlvciBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgcXVhbGl0eSBmZWVkYmFjayByZXBvcnRpbmcgKHRodW1ic3VwL2Rvd24pXG4gICAqL1xuICBvbk1vdW50ICgpIHtcbiAgICAvLyBBdm9pZCBiaW5kaW5ncyBpZiB0aGUgZmVlZGJhY2sgaGFzIHByZXZpb3VzbHkgYmVlbiBzdWJtaXR0ZWRcbiAgICBpZiAodGhpcy5nZXRTdGF0ZSgnZmVlZGJhY2tTdWJtaXR0ZWQnKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gRm9yIFdDQUcgY29tcGxpYW5jZSwgdGhlIGZlZWRiYWNrIHNob3VsZCBiZSBhIHN1Ym1pdHRhYmxlIGZvcm1cbiAgICBET00ub24odGhpcy5fZm9ybUVsLCAnc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGxldCBmb3JtRWwgPSBlLnRhcmdldDtcbiAgICAgIGxldCBjaGVja2VkVmFsdWUgPSBET00ucXVlcnkoZm9ybUVsLCAnaW5wdXQ6Y2hlY2tlZCcpLmNoZWNrZWQ7XG5cbiAgICAgIHRoaXMucmVwb3J0UXVhbGl0eShjaGVja2VkVmFsdWUpO1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICdmZWVkYmFja1N1Ym1pdHRlZCc6IHRydWVcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gSXMgdGhpcyBhY3R1YWxseSBuZWNlc3Nhcnk/IEkgZ3Vlc3MgaXQncyBvbmx5IG5lY2Vzc2FyeSBpZiB0aGVcbiAgICAvLyBzdWJtaXQgYnV0dG9uIGlzIGhpZGRlbi5cbiAgICBET00ub24odGhpcy5fdGh1bWJzVXBTZWxlY3RvciwgJ2NsaWNrJywgKCkgPT4geyBET00udHJpZ2dlcih0aGlzLl9mb3JtRWwsICdzdWJtaXQnKTsgfSk7XG4gICAgRE9NLm9uKHRoaXMuX3RodW1ic0Rvd25TZWxlY3RvciwgJ2NsaWNrJywgKCkgPT4geyBET00udHJpZ2dlcih0aGlzLl9mb3JtRWwsICdzdWJtaXQnKTsgfSk7XG4gIH1cblxuICAvKipcbiAgICogdXBkYXRlU3RhdGUgZW5hYmxlcyBmb3IgcGFydGlhbCB1cGRhdGVzICh0aGUgZGVsdGEgYmV0d2VlbiB0aGUgb2xkIGFuZCBuZXcpXG4gICAqIEB0eXBlIHtvYmplY3R9IFRoZSBuZXcgc3RhdGUgdG8gYXBwbHkgdG8gdGhlIG9sZFxuICAgKi9cbiAgdXBkYXRlU3RhdGUgKHN0YXRlID0ge30pIHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZ2V0U3RhdGUoKSwgc3RhdGUpO1xuICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgZXZlbnRPcHRpb25zOiB0aGlzLmV2ZW50T3B0aW9ucyhkYXRhKSxcbiAgICAgIHZpZXdEZXRhaWxzVGV4dDogdGhpcy5fdmlld0RldGFpbHNUZXh0XG4gICAgfSkpO1xuICB9XG5cbiAgZXZlbnRPcHRpb25zIChkYXRhKSB7XG4gICAgaWYgKCFkYXRhIHx8IE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiBkYXRhLnJlbGF0ZWRJdGVtLnZlcnRpY2FsQ29uZmlnSWQsXG4gICAgICBzZWFyY2hlcjogJ1VOSVZFUlNBTCcsXG4gICAgICBlbnRpdHlJZDogZGF0YS5yZWxhdGVkSXRlbS5kYXRhLmlkLFxuICAgICAgY3RhTGFiZWw6IHRoaXMuX3ZpZXdEZXRhaWxzVGV4dC50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoJyAnLCAnXycpXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogcmVwb3J0UXVhbGl0eSB3aWxsIHNlbmQgdGhlIHF1YWxpdHkgZmVlZGJhY2sgdG8gYW5hbHl0aWNzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNHb29kIHRydWUgaWYgdGhlIGFuc3dlciBpcyB3aGF0IHlvdSB3ZXJlIGxvb2tpbmcgZm9yXG4gICAqL1xuICByZXBvcnRRdWFsaXR5IChpc0dvb2QpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBpc0dvb2QgPT09IHRydWUgPyBFdmVudFR5cGVzLlRIVU1CU19VUCA6IEV2ZW50VHlwZXMuVEhVTUJTX0RPV047XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgQW5hbHl0aWNzRXZlbnQoZXZlbnRUeXBlKVxuICAgICAgLmFkZE9wdGlvbnMoe1xuICAgICAgICAnZGlyZWN0QW5zd2VyJzogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICB0aGlzLmFuYWx5dGljc1JlcG9ydGVyLnJlcG9ydChldmVudCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlc3VsdHNJdGVtQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICAvKipcbiAgICAgKiB2ZXJ0aWNhbENvbmZpZ0lkIHVzZWQgZm9yIGFuYWx5dGljcyBhbmQgcGFzc2VkIHRvIGNoaWxkcmVuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsQ29uZmlnSWQgPSBvcHRzLnZlcnRpY2FsQ29uZmlnSWQ7XG5cbiAgICAvKipcbiAgICAgKiBpc1VuaXZlcnNhbCBpcyB1c2VkIGZvciBhbmFseXRpY3MgYW5kIHBhc3NlZCB0byBjaGlsZHJlbiBhbmQgaXMgc2V0IHRvXG4gICAgICogdHJ1ZSBpZiB0aGlzIGNvbXBvbmVudCBpcyBhZGRlZCBieSB0aGUgVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faXNVbml2ZXJzYWwgPSBvcHRzLmlzVW5pdmVyc2FsIHx8IGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1Jlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9yZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoZWxwZXIgdG8gY29uc3RydWN0IHRoZSBldmVudE9wdGlvbnMgb2JqZWN0IGZvciB0aGUgdGl0bGUgbGlua1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZXZlbnRPcHRpb25zIChlbnRpdHlJZCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiB0aGlzLl92ZXJ0aWNhbENvbmZpZ0lkLFxuICAgICAgc2VhcmNoZXI6IHRoaXMuX2lzVW5pdmVyc2FsID8gJ1VOSVZFUlNBTCcgOiAnVkVSVElDQUwnLFxuICAgICAgZW50aXR5SWQ6IGVudGl0eUlkXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogcGFzc2VzIGV2ZW50T3B0aW9ucyB0byB0aGUgdmlld01vZGVsXG4gICAqIEBvdmVycmlkZVxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0c0l0ZW1Db21wb25lbnR9XG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgIGV2ZW50T3B0aW9uczogdGhpcy5ldmVudE9wdGlvbnMoZGF0YS5pZClcbiAgICB9KSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvbG9jYXRpb25yZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBSZXN1bHRzSXRlbUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL3Blb3BsZXJlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNYXBQcm92aWRlciAqL1xuXG4vKipcbiAqIEEgTWFwUHJvdmlkZXIgaXMgYW4gaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB0aGF0IHNob3VsZCBiZSBpbXBsZW1lbnRlZFxuICogaW4gb3JkZXIgdG8gaW50ZWdyYXRlIHdpdGggYSBUaGlyZCBQYXJ0eSBNYXAgcHJvdmlkZXIgZm9yIGJvdGhcbiAqIHN0YXRpYyBhbmQgaW50ZXJhY3RpdmUgbWFwcy4gTWFwUHJvdmlkZXJzIGFyZSB1c2VkIGJ5IHRoZSBNYXBDb21wb25lbnQuXG4gKlxuICogSW1wbGVtZW50YXRpb25zIHNob3VsZCBleHRlbmQgdGhpcyBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcFByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdXNlZCBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgbWFwIHByb3ZpZGVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBjb25maWcuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgbWFwIHRvIGFwcGVuZCB0byB0aGUgRE9NLCBkZWZhdWx0cyB0byAxMDAlXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9oZWlnaHQgPSBjb25maWcuaGVpZ2h0IHx8IDIwMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgbWFwIHRvIGFwcGVuZCB0byB0aGUgRE9NLCBkZWZhdWx0cyB0byAxMDAlXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl93aWR0aCA9IGNvbmZpZy53aWR0aCB8fCA2MDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgem9vbSBsZXZlbCBvZiB0aGUgbWFwLCBkZWZhdWx0cyB0byA5XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl96b29tID0gY29uZmlnLnpvb20gfHwgOTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGNvb3JkaW5hdGVzIHRvIGRpc3BsYXkgaWYgdGhlcmUgYXJlIG5vIHJlc3VsdHMgcmV0dXJuZWRcbiAgICAgKiBPbmx5IHVzZWQgaWYgc2hvd0VtcHR5TWFwIGlzIHNldCB0byB0cnVlXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9kZWZhdWx0UG9zaXRpb24gPSBjb25maWcuZGVmYXVsdFBvc2l0aW9uIHx8IHsgbGF0OiAzNy4wOTAyLCBsbmc6IC05NS43MTI5IH07XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGFuIGVtcHR5IG1hcCBzaG91bGQgYmUgc2hvd24gd2hlbiB0aGVyZSBhcmUgbm8gcmVzdWx0c1xuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX3Nob3dFbXB0eU1hcCA9IGNvbmZpZy5zaG93RW1wdHlNYXAgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgdW5kZXJseWluZyBtYXAgaW5zdGFuY2UsIGNyZWF0ZWQgYnkgdGhlIGV4dGVybmFsIGxpYi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX21hcCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUZW1wb3JhcnkgYm9vbGVhbiB0cmFja2luZyB3aGV0aGVyIG9yIG5vdCB0aGUgZXh0ZXJuYWwgSlMgbGlicmFyeSBpcyBsb2FkZWQgKHNlZSBUT0RPIGJlbG93KVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2lzTG9hZGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiBhIHBpbiBpcyBjbGlja2VkLiBUaGUgY2xpY2tlZCBpdGVtKHMpIGFyZSBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMuX29uUGluQ2xpY2sgPSBjb25maWcub25QaW5DbGljayB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIG9uY2UgdGhlIEphdmFzY3JpcHQgaXMgbG9hZGVkXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMuX29uTG9hZGVkID0gY29uZmlnLm9uTG9hZGVkIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1c3RvbSBjb25maWd1cmF0aW9uIG92ZXJyaWRlIHRvIHVzZSBmb3IgdGhlIG1hcCBtYXJrZXJzXG4gICAgICogQHR5cGUge09iamVjdHxGdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLl9waW5Db25maWcgPSB0eXBlb2YgY29uZmlnLnBpbiA9PT0gJ2Z1bmN0aW9uJyA/IGNvbmZpZy5waW4gOiBPYmplY3QuYXNzaWduKE1hcFByb3ZpZGVyLkRFRkFVTFRfUElOX0NPTkZJRywgY29uZmlnLnBpbik7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRvIGNvbGxhcHNlIHBpbnMgYXQgdGhlIHNhbWUgbGF0L2xuZ1xuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2NvbGxhcHNlUGlucyA9IGNvbmZpZy5jb2xsYXBzZVBpbnMgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgY29uZmlndXJhdGlvbiB0byB1c2UgZm9yIHRoZSBtYXAgbWFya2Vyc1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKiBUT0RPKGJpbGx5KSBDcmVhdGUgYSBjb25maWd1cmF0aW9uIG1vZGVsXG4gICAqL1xuICBzdGF0aWMgZ2V0IERFRkFVTFRfUElOX0NPTkZJRyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGljb246IHtcbiAgICAgICAgYW5jaG9yOiBudWxsLCAvLyBlLmcuIHsgeDogMSwgeTogMSB9XG4gICAgICAgIHN2ZzogbnVsbCxcbiAgICAgICAgdXJsOiBudWxsLFxuICAgICAgICBzY2FsZWRTaXplOiBudWxsIC8vIGUuZy4geyB3OiAyMCwgaDogMjAgfVxuICAgICAgfSxcbiAgICAgIGxhYmVsVHlwZTogJ251bWVyaWMnXG4gICAgfTtcbiAgfVxuXG4gIG9uTG9hZGVkIChjYikge1xuICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9vbkxvYWRlZCA9IGNiO1xuICAgIGlmICh0aGlzLmlzTG9hZGVkKCkpIHtcbiAgICAgIHRoaXMuX29uTG9hZGVkKCk7XG4gICAgfVxuICB9XG5cbiAgaXNMb2FkZWQgKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0xvYWRlZDtcbiAgfVxuXG4gIGxvYWRKUyAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmltcGxlbWVudGVkIE1ldGhvZDogbG9hZEpTJyk7XG4gIH1cblxuICBsb2FkU3RhdGljICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaW1wbGVtZW50ZWQgTWV0aG9kOiBsb2FkU3RhdGljJyk7XG4gIH1cblxuICBpbml0IChtYXBEYXRhKSB7XG4gICAgLy8gVE9ETyhiaWxseSkgVGhpcyBzaG91bGQgYmUgYmFzZWQgb2ZmIGEgcHJvbWlzZSB0aGF0IGdldHMgY3JlYXRlZCBmcm9tIGxvYWRKU1xuICAgIHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCBNZXRob2Q6IGluaXQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhIGxpc3Qgb2YgbWFya2VycywgY29tYmluZSBtYXJrZXJzIHdpdGggdGhlIHNhbWUgbGF0L2xuZyBpbnRvIGEgc2luZ2xlIG1hcmtlclxuICAgKiBAcGFyYW0ge29iamVjdFtdfSBtYXJrZXJzIFRoZSBtYXJrZXJzIHRvIGNvbGxhcHNlXG4gICAqL1xuICBfY29sbGFwc2VNYXJrZXJzIChtYXJrZXJzKSB7XG4gICAgY29uc3QgbG9jYXRpb25Ub0l0ZW0gPSB7fTtcbiAgICBtYXJrZXJzLmZvckVhY2gobSA9PiB7XG4gICAgICBsb2NhdGlvblRvSXRlbVtgJHttLmxhdGl0dWRlfSR7bS5sb25naXR1ZGV9YF1cbiAgICAgICAgPyBsb2NhdGlvblRvSXRlbVtgJHttLmxhdGl0dWRlfSR7bS5sb25naXR1ZGV9YF0ucHVzaChtKVxuICAgICAgICA6IGxvY2F0aW9uVG9JdGVtW2Ake20ubGF0aXR1ZGV9JHttLmxvbmdpdHVkZX1gXSA9IFttXTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbGxhcHNlZE1hcmtlcnMgPSBbXTtcbiAgICBmb3IgKGxldCBbLCBtYXJrZXJzXSBvZiBPYmplY3QuZW50cmllcyhsb2NhdGlvblRvSXRlbSkpIHtcbiAgICAgIGlmIChtYXJrZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2VkTWFya2VyID0ge1xuICAgICAgICAgIGl0ZW06IG1hcmtlcnMubWFwKG0gPT4gbS5pdGVtKSxcbiAgICAgICAgICBsYWJlbDogbWFya2Vycy5sZW5ndGgsXG4gICAgICAgICAgbGF0aXR1ZGU6IG1hcmtlcnNbMF0ubGF0aXR1ZGUsXG4gICAgICAgICAgbG9uZ2l0dWRlOiBtYXJrZXJzWzBdLmxvbmdpdHVkZVxuICAgICAgICB9O1xuICAgICAgICBjb2xsYXBzZWRNYXJrZXJzLnB1c2goY29sbGFwc2VkTWFya2VyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxhcHNlZE1hcmtlcnMucHVzaChtYXJrZXJzWzBdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29sbGFwc2VkTWFya2VycztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgR29vZ2xlTWFwUHJvdmlkZXIgKi9cblxuaW1wb3J0IE1hcFByb3ZpZGVyIGZyb20gJy4vbWFwcHJvdmlkZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi8uLi9kb20vZG9tJztcblxuLyogZ2xvYmFsIGdvb2dsZSAqL1xuXG4vKipcbiAqIEdvb2dsZU1hcFByb3ZpZGVyIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIGEgTWFwUHJvdmlkZXJcbiAqIHRoYXQgaGFuZGxlcyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgdGhpcmQgcGFydHkgQVBJIHRvIGV4cG9zZSBtYXBzLlxuICogQGV4dGVuZHMgTWFwUHJvdmlkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29vZ2xlTWFwUHJvdmlkZXIgZXh0ZW5kcyBNYXBQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl9jbGllbnRJZCA9IG9wdHMuY2xpZW50SWQ7XG4gICAgdGhpcy5fc2lnbmF0dXJlID0gb3B0cy5zaWduYXR1cmU7XG5cbiAgICBpZiAoIXRoaXMuaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscygpICYmICF0aGlzLl9hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignR29vZ2xlTWFwc1Byb3ZpZGVyOiBNaXNzaW5nIGBhcGlLZXlgIG9yIHtgY2xpZW50SWRgLCBgc2lnbmF0dXJlYH0nKTtcbiAgICB9XG4gIH1cblxuICBsb2FkSlMgKG9uTG9hZCkge1xuICAgIGlmIChET00ucXVlcnkoJyN5ZXh0LW1hcC1qcycpKSB7XG4gICAgICBpZiAodHlwZW9mIG9uTG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvbkxvYWQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWpzJyxcbiAgICAgIG9ubG9hZDogKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX29uTG9hZGVkKCk7XG4gICAgICB9LFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzcmM6IGAvL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/JHt0aGlzLmdlbmVyYXRlQ3JlZGVudGlhbHMoKX1gXG4gICAgfSk7XG5cbiAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgfVxuXG4gIGdlbmVyYXRlU3RhdGljIChtYXBEYXRhKSB7XG4gICAgbGV0IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MgPSBHb29nbGVNYXBNYXJrZXJDb25maWcuZnJvbShcbiAgICAgIG1hcERhdGEubWFwTWFya2VycyxcbiAgICAgIHRoaXMuX3BpbkNvbmZpZ1xuICAgICk7XG5cbiAgICBsZXQgZW5jb2RlZE1hcmtlcnMgPSBHb29nbGVNYXBNYXJrZXJDb25maWcuc2VyaWFsaXplKGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MpO1xuICAgIHJldHVybiBgXG4gICAgICA8aW1nIHNyYz1cIi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9zdGF0aWNtYXA/JHtlbmNvZGVkTWFya2Vyc30mc2l6ZT0ke3RoaXMuX3dpZHRofXgke3RoaXMuX2hlaWdodH0mJHt0aGlzLmdlbmVyYXRlQ3JlZGVudGlhbHMoKX1cIj5gO1xuICB9XG5cbiAgZ2VuZXJhdGVDcmVkZW50aWFscyAoKSB7XG4gICAgaWYgKHRoaXMuaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscygpKSB7XG4gICAgICByZXR1cm4gYGNsaWVudD0ke3RoaXMuX2NsaWVudElkfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBga2V5PSR7dGhpcy5fYXBpS2V5fWA7XG4gICAgfVxuICB9XG5cbiAgaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscyAoKSB7XG4gICAgLy8gU2lnbmF0dXJlIGlzIG9ubHkgcmVxdWlyZWQgaWYgbWFwIGlzIHN0YXRpY1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRJZCAmJiAodGhpcy5fc2lnbmF0dXJlIHx8ICF0aGlzLl9pc1N0YXRpYyk7XG4gIH1cblxuICBpbml0IChlbCwgbWFwRGF0YSkge1xuICAgIGlmICgoIW1hcERhdGEgfHwgbWFwRGF0YS5tYXBNYXJrZXJzLmxlbmd0aCA8PSAwKSAmJiAhdGhpcy5fc2hvd0VtcHR5TWFwKSB7XG4gICAgICB0aGlzLl9tYXAgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vIE5PVEUoYmlsbHkpIFRoaXMgdGltZW91dCBpcyBhIGhhY2sgZm9yIGRlYWxpbmcgd2l0aCBhc3luYyBuYXR1cmUuXG4gICAgLy8gT25seSBoZXJlIGZvciBkZW1vIHB1cnBvc2VzLCBzbyB3ZSdsbCBmaXggbGF0ZXIuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgY29udGFpbmVyID0gRE9NLnF1ZXJ5KGVsKTtcbiAgICAgIERPTS5jc3MoY29udGFpbmVyLCB7XG4gICAgICAgIHdpZHRoOiB0aGlzLl93aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLl9oZWlnaHRcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoY29udGFpbmVyLCB7XG4gICAgICAgIHpvb206IHRoaXMuX3pvb21cbiAgICAgIH0pO1xuXG4gICAgICAvLyBBcHBseSBvdXIgc2VhcmNoIGRhdGEgdG8gb3VyIEdvb2dsZU1hcFxuICAgICAgbGV0IGJvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoKTtcblxuICAgICAgaWYgKG1hcERhdGEgJiYgbWFwRGF0YS5tYXBNYXJrZXJzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBjb2xsYXBzZWRNYXJrZXJzID0gdGhpcy5fY29sbGFwc2VQaW5zXG4gICAgICAgICAgPyB0aGlzLl9jb2xsYXBzZU1hcmtlcnMobWFwRGF0YS5tYXBNYXJrZXJzKVxuICAgICAgICAgIDogbWFwRGF0YS5tYXBNYXJrZXJzO1xuICAgICAgICBsZXQgZ29vZ2xlTWFwTWFya2VyQ29uZmlncyA9IEdvb2dsZU1hcE1hcmtlckNvbmZpZy5mcm9tKFxuICAgICAgICAgIGNvbGxhcHNlZE1hcmtlcnMsXG4gICAgICAgICAgdGhpcy5fcGluQ29uZmlnLFxuICAgICAgICAgIHRoaXMubWFwKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcihnb29nbGVNYXBNYXJrZXJDb25maWdzW2ldKTtcbiAgICAgICAgICBpZiAodGhpcy5fb25QaW5DbGljaykge1xuICAgICAgICAgICAgbWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuX29uUGluQ2xpY2soY29sbGFwc2VkTWFya2Vyc1tpXS5pdGVtKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvdW5kcy5leHRlbmQobWFya2VyLnBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhib3VuZHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tYXAuc2V0Q2VudGVyKG5ldyBnb29nbGUubWFwcy5MYXRMbmcodGhpcy5fZGVmYXVsdFBvc2l0aW9uLmxhdCwgdGhpcy5fZGVmYXVsdFBvc2l0aW9uLmxuZykpO1xuICAgICAgfVxuICAgIH0sIDEwMCk7XG4gIH1cbn1cblxuLy8gVE9ETyhiaWxseSkgTW92ZSB0byBvd24gY2xhc3NcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXBNYXJrZXJDb25maWcge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBnb29nbGUgbWFwLCB0aGF0IHRoZSBtYXJrZXIgaXMgYXBwZW5kZWQgdG9cbiAgICAgKiBAdHlwZSB7R29vZ2xlTWFwfVxuICAgICAqL1xuICAgIHRoaXMubWFwID0gb3B0cy5tYXAgfHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBtYXJrZXIgKGxhdC9sbmcpXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLnBvc2l0aW9uID0gb3B0cy5wb3NpdGlvbiB8fCB7XG4gICAgICBsYXQ6IHVuZGVmaW5lZCxcbiAgICAgIGxuZzogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBwcm9wZXJ0aWVzL3NldHRpbmdzIG9mIHRoZSBpY29uIHVzZWQgZm9yIHRoZSBtYXJrZXJcbiAgICAgKiBlLmcuIHtcbiAgICAgKiAgICAgICAgYW5jaG9yOiB7IHg6IDAsIHk6IDAgfVxuICAgICAqICAgICAgICB1cmw6ICdwYXRoL3RvL3VybC5qcGcnXG4gICAgICogICAgICAgIHNjYWxlZFNpemU6IHsgdzogMCwgaDogMCB9XG4gICAgICogICAgICAgfVxuICAgICAqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLmljb24gPSBvcHRzLmljb24gfHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIG9mIHRoZSBtYXJrZXIgdG8gdXNlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmxhYmVsID0gb3B0cy5sYWJlbCB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhbiBhcnJheSBvZiBtYXJrZXIgY29uZmlnc1xuICAgKiBAcGFyYW0ge0dvb2dsZU1hcE1hcmtlckNvbmZpZ1tdfSBnb29nbGVNYXBNYXJrZXJDb25maWdzXG4gICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemUgKGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MpIHtcbiAgICBsZXQgc2VyaWFsaXplZE1hcmtlcnMgPSBbXTtcbiAgICBnb29nbGVNYXBNYXJrZXJDb25maWdzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgc2VyaWFsaXplZE1hcmtlcnMucHVzaChgbWFya2Vycz1sYWJlbDoke21hcmtlci5sYWJlbH18JHttYXJrZXIucG9zaXRpb24ubGF0fSwke21hcmtlci5wb3NpdGlvbi5sbmd9YCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZWRNYXJrZXJzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgc3RvcmFnZSBkYXRhIG1vZGVsIG9mIG1hcmtlcnMgaW50byBHb29nbGVBUElNYXJrZXJcbiAgICogQHBhcmFtIHtvYmplY3RbXX0gbWFya2VycyBUaGUgZGF0YSBvZiB0aGUgbWFya2VyXG4gICAqIEBwYXJhbSB7KE9iamVjdHxmdW5jdGlvbil9IHBpbkNvbmZpZyBUaGUgY29uZmlndXJhdGlvbiB0byBhcHBseSB0byB0aGUgbWFya2VyXG4gICAqIEBwYXJhbSB7R29vZ2xlTWFwfSBtYXAgcmVmZXJlbmNlIHRvIHRoZSBnb29nbGUgbWFwIHRvIGFwcGx5IHRoZSBtYXJrZXIgdG9cbiAgICogQHJldHVybnMge0dvb2dsZU1hcE1hcmtlckNvbmZpZ1tdfVxuICAgKi9cbiAgc3RhdGljIGZyb20gKG1hcmtlcnMsIHBpbkNvbmZpZywgbWFwKSB7XG4gICAgbGV0IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MgPSBbXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobWFya2VycykpIHtcbiAgICAgIG1hcmtlcnMgPSBbbWFya2Vyc107XG4gICAgfVxuXG4gICAgbWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIC8vIFN1cHBvcnQgY29uZmlndXJhdGlvbiBhcyBhIGZ1bmN0aW9uXG4gICAgICBsZXQgcGluQ29uZmlnT2JqID0gcGluQ29uZmlnO1xuICAgICAgaWYgKHR5cGVvZiBwaW5Db25maWcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcGluQ29uZmlnT2JqID0gcGluQ29uZmlnKFxuICAgICAgICAgIG1hcmtlci5pdGVtLFxuICAgICAgICAgIE1hcFByb3ZpZGVyLkRFRkFVTFRfUElOX0NPTkZJRyxcbiAgICAgICAgICBtYXJrZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyBUcmFuc2Zvcm0gb3VyIENvbmZpZ3VyYXRpb24gT2JqZWN0IGludG8gdGhlIGV4cGVjdGVkXG4gICAgICAvLyBHb29nbGUgQVBJIGZvcm1hdC5cbiAgICAgIGxldCBpY29uID0ge307XG4gICAgICBpZiAocGluQ29uZmlnT2JqLmFuY2hvcikge1xuICAgICAgICBpY29uLmFuY2hvciA9IGdvb2dsZS5tYXBzLlBvaW50KHBpbkNvbmZpZ09iai5hbmNob3IueCwgcGluQ29uZmlnT2JqLmFuY2hvci55KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpbkNvbmZpZ09iai5zY2FsZWRTaXplKSB7XG4gICAgICAgIGljb24uc2NhbGVkU2l6ZSA9IG5ldyBnb29nbGUubWFwcy5TaXplKHBpbkNvbmZpZ09iai5zY2FsZWRTaXplLncsIHBpbkNvbmZpZ09iai5zY2FsZWRTaXplLmgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluQ29uZmlnT2JqLnVybCkge1xuICAgICAgICBpY29uLnVybCA9IHBpbkNvbmZpZ09iai51cmw7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW5Db25maWdPYmouc3ZnKSB7XG4gICAgICAgIGljb24udXJsID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCAke2VuY29kZVVSSUNvbXBvbmVudChwaW5Db25maWdPYmouc3ZnKX1gO1xuICAgICAgfVxuXG4gICAgICBsZXQgbGFiZWw7XG4gICAgICBpZiAocGluQ29uZmlnT2JqLmxhYmVsKSB7XG4gICAgICAgIGxhYmVsID0gcGluQ29uZmlnT2JqLmxhYmVsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFiZWwgPSBtYXJrZXIubGFiZWwudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgLy8gTk9URShiaWxseSkgR29vZ2xlIG1hcHMgZG9lc24ndCBoYW5kbGUgZW1wdHkgaWNvbiBvYmplY3RzIG5pY2VseVxuICAgICAgLy8gTWFrZSBnb29nbGUgbWFwcyBoYXBweSBpZiBubyBzZXR0aW5ncyBmb3IgaWNvbiBhcmUgcHJvdmlkZWQ7XG4gICAgICBpZiAoT2JqZWN0LmtleXMoaWNvbikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGljb24gPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MucHVzaChcbiAgICAgICAgbmV3IEdvb2dsZU1hcE1hcmtlckNvbmZpZyh7XG4gICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIGxhdDogbWFya2VyLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG5nOiBtYXJrZXIubG9uZ2l0dWRlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpY29uOiBpY29uLFxuICAgICAgICAgIGxhYmVsOiBsYWJlbFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBnb29nbGVNYXBNYXJrZXJDb25maWdzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNYXBCb3hNYXBQcm92aWRlciAqL1xuXG5pbXBvcnQgTWFwUHJvdmlkZXIgZnJvbSAnLi9tYXBwcm92aWRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uLy4uL2RvbS9kb20nO1xuXG4vKiBnbG9iYWwgbWFwYm94Z2wgKi9cblxuLyoqXG4gKiBNYXBCb3hNYXBQcm92aWRlciBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiBhIE1hcFByb3ZpZGVyXG4gKiB0aGF0IGhhbmRsZXMgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIHRoaXJkIHBhcnR5IEFQSSB0byBleHBvc2UgbWFwcy5cbiAqIEBleHRlbmRzIE1hcFByb3ZpZGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcEJveE1hcFByb3ZpZGVyIGV4dGVuZHMgTWFwUHJvdmlkZXIge1xuICAvKipcbiAgICogTG9hZCB0aGUgZXh0ZXJuYWwgSlMgTGlicmFyeVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkxvYWQgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdG8gaW52b2tlIG9uY2UgdGhlIEpTIGlzIGxvYWRlZC5cbiAgICovXG4gIGxvYWRKUyAob25Mb2FkKSB7XG4gICAgbGV0IHNjcmlwdCA9IERPTS5jcmVhdGVFbCgnc2NyaXB0Jywge1xuICAgICAgaWQ6ICd5ZXh0LW1hcC1qcycsXG4gICAgICBvbmxvYWQ6ICgpID0+IHtcbiAgICAgICAgdGhpcy5faXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICBtYXBib3hnbC5hY2Nlc3NUb2tlbiA9IHRoaXMuX2FwaUtleTtcblxuICAgICAgICBpZiAodHlwZW9mIG9uTG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG9uTG9hZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9vbkxvYWRlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMuX29uTG9hZGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIHNyYzogJ2h0dHBzOi8vYXBpLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL3YwLjQ0LjEvbWFwYm94LWdsLmpzJ1xuICAgIH0pO1xuXG4gICAgbGV0IGNzcyA9IERPTS5jcmVhdGVFbCgnbGluaycsIHtcbiAgICAgIGlkOiAneWV4dC1tYXAtY3NzJyxcbiAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vYXBpLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL3YwLjQ0LjEvbWFwYm94LWdsLmNzcydcbiAgICB9KTtcblxuICAgIERPTS5hcHBlbmQoJ2JvZHknLCBjc3MpO1xuICAgIERPTS5hcHBlbmQoJ2JvZHknLCBzY3JpcHQpO1xuICB9XG5cbiAgZ2VuZXJhdGVTdGF0aWMgKG1hcERhdGEpIHtcbiAgICBsZXQgbWFwYm94TWFwTWFya2VyQ29uZmlncyA9IE1hcEJveE1hcmtlckNvbmZpZy5mcm9tKFxuICAgICAgbWFwRGF0YS5tYXBNYXJrZXJzLFxuICAgICAgdGhpcy5fcGluQ29uZmlnXG4gICAgKTtcblxuICAgIGxldCBjZW50ZXIgPSBtYXBEYXRhLm1hcENlbnRlcjtcbiAgICBsZXQgd2lkdGggPSB0aGlzLl93aWR0aCB8fCA2MDA7XG4gICAgbGV0IGhlaWdodCA9IHRoaXMuX2hlaWdodCB8fCAyMDA7XG4gICAgbGV0IHpvb20gPSB0aGlzLl96b29tIHx8IDk7XG5cbiAgICBsZXQgZW5jb2RlZE1hcmtlcnMgPSBNYXBCb3hNYXJrZXJDb25maWcuc2VyaWFsaXplKG1hcGJveE1hcE1hcmtlckNvbmZpZ3MpO1xuICAgIHJldHVybiBgPGltZyBzcmM9XCJodHRwczovL2FwaS5tYXBib3guY29tL3N0eWxlcy92MS9tYXBib3gvc3RyZWV0cy12MTEvc3RhdGljLyR7ZW5jb2RlZE1hcmtlcnN9LyR7Y2VudGVyLmxvbmdpdHVkZX0sJHtjZW50ZXIubGF0aXR1ZGV9LCR7em9vbX0vYXV0by8ke3dpZHRofXgke2hlaWdodH0/YWNjZXNzX3Rva2VuPSR7dGhpcy5fYXBpS2V5fVwiPmA7XG4gIH1cblxuICBpbml0IChlbCwgbWFwRGF0YSkge1xuICAgIGlmICgoIW1hcERhdGEgfHwgbWFwRGF0YS5tYXBNYXJrZXJzLmxlbmd0aCA8PSAwKSAmJiAhdGhpcy5fc2hvd0VtcHR5TWFwKSB7XG4gICAgICB0aGlzLl9tYXAgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRhaW5lciA9IERPTS5xdWVyeShlbCk7XG4gICAgRE9NLmNzcyhjb250YWluZXIsIHtcbiAgICAgIHdpZHRoOiB0aGlzLl93aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5faGVpZ2h0XG4gICAgfSk7XG5cbiAgICB0aGlzLl9tYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgem9vbTogdGhpcy5fem9vbSxcbiAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXY5JyxcbiAgICAgIGNlbnRlcjogdGhpcy5nZXRDZW50ZXJNYXJrZXIobWFwRGF0YSlcbiAgICB9KTtcblxuICAgIGlmIChtYXBEYXRhKSB7XG4gICAgICBjb25zdCBjb2xsYXBzZWRNYXJrZXJzID0gdGhpcy5fY29sbGFwc2VQaW5zXG4gICAgICAgID8gdGhpcy5fY29sbGFwc2VNYXJrZXJzKG1hcERhdGEubWFwTWFya2VycylcbiAgICAgICAgOiBtYXBEYXRhLm1hcE1hcmtlcnM7XG4gICAgICBjb25zdCBtYXBib3hNYXBNYXJrZXJDb25maWdzID0gTWFwQm94TWFya2VyQ29uZmlnLmZyb20oXG4gICAgICAgIGNvbGxhcHNlZE1hcmtlcnMsXG4gICAgICAgIHRoaXMuX3BpbkNvbmZpZyxcbiAgICAgICAgdGhpcy5fbWFwKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXBib3hNYXBNYXJrZXJDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB3cmFwcGVyID0gbWFwYm94TWFwTWFya2VyQ29uZmlnc1tpXS53cmFwcGVyO1xuICAgICAgICBsZXQgY29vcmRzID0gbmV3IG1hcGJveGdsLkxuZ0xhdChcbiAgICAgICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzW2ldLnBvc2l0aW9uLmxvbmdpdHVkZSxcbiAgICAgICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzW2ldLnBvc2l0aW9uLmxhdGl0dWRlKTtcbiAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBtYXBib3hnbC5NYXJrZXIod3JhcHBlcikuc2V0TG5nTGF0KGNvb3Jkcyk7XG4gICAgICAgIG1hcmtlci5hZGRUbyh0aGlzLl9tYXApO1xuICAgICAgICBpZiAodGhpcy5fb25QaW5DbGljaykge1xuICAgICAgICAgIG1hcmtlci5nZXRFbGVtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9vblBpbkNsaWNrKGNvbGxhcHNlZE1hcmtlcnNbaV0uaXRlbSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2VudGVyTWFya2VyIChtYXBEYXRhKSB7XG4gICAgcmV0dXJuIG1hcERhdGEgJiYgbWFwRGF0YS5tYXBDZW50ZXIgJiYgbWFwRGF0YS5tYXBDZW50ZXIubG9uZ2l0dWRlICYmIG1hcERhdGEubWFwQ2VudGVyLmxhdGl0dWRlXG4gICAgICA/IFttYXBEYXRhLm1hcENlbnRlci5sb25naXR1ZGUsIG1hcERhdGEubWFwQ2VudGVyLmxhdGl0dWRlXVxuICAgICAgOiB7IGxuZzogdGhpcy5fZGVmYXVsdFBvc2l0aW9uLmxuZywgbGF0OiB0aGlzLl9kZWZhdWx0UG9zaXRpb24ubGF0IH07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hcEJveE1hcmtlckNvbmZpZyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIG1hcGJveCBtYXAsIHRoYXQgdGhlIG1hcmtlciBpcyBhcHBlbmRlZCB0b1xuICAgICAqIEB0eXBlIHtNYXBCb3h9XG4gICAgICovXG4gICAgdGhpcy5tYXAgPSBvcHRzLm1hcCB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1hcmtlciAobGF0L2xuZylcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMucG9zaXRpb24gPSBvcHRzLnBvc2l0aW9uIHx8IHtcbiAgICAgIGxhdGl0dWRlOiB1bmRlZmluZWQsXG4gICAgICBsb25naXR1ZGU6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaHRtbCBlbGVtZW50IHRvIGJlIHVzZWQgYXMgdGhlIG1hcCBtYXJrZXJcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMud3JhcHBlciA9IG9wdHMud3JhcHBlciB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgb2YgdGhlIG1hcmtlciB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWwgPSBvcHRzLmxhYmVsIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB1cmwgb2YgdGhlIHBpbiBmb3IgdGhlIHN0YXRpYyBtYXBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc3RhdGljTWFwUGluID0gb3B0cy5zdGF0aWNNYXBQaW4gfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYW4gYXJyYXkgb2YgbWFya2VyIGNvbmZpZ3NcbiAgICogQHBhcmFtIHtNYXBCb3hNYXJrZXJDb25maWdbXX0gbWFwYm94TWFwTWFya2VyQ29uZmlnc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplIChtYXBib3hNYXBNYXJrZXJDb25maWdzKSB7XG4gICAgbGV0IHNlcmlhbGl6ZWRNYXJrZXJzID0gW107XG4gICAgbWFwYm94TWFwTWFya2VyQ29uZmlncy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIGlmIChtYXJrZXIuc3RhdGljTWFwUGluKSB7XG4gICAgICAgIHNlcmlhbGl6ZWRNYXJrZXJzLnB1c2goYHVybC0ke21hcmtlci5zdGF0aWNNYXBQaW59KCR7bWFya2VyLnBvc2l0aW9uLmxvbmdpdHVkZX0sJHttYXJrZXIucG9zaXRpb24ubGF0aXR1ZGV9KWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VyaWFsaXplZE1hcmtlcnMucHVzaChgcGluLXMtJHttYXJrZXIubGFiZWx9KCR7bWFya2VyLnBvc2l0aW9uLmxvbmdpdHVkZX0sJHttYXJrZXIucG9zaXRpb24ubGF0aXR1ZGV9KWApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZXJpYWxpemVkTWFya2Vycy5qb2luKCcsJyk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIHN0b3JhZ2UgZGF0YSBtb2RlbCBvZiBtYXJrZXJzIGludG8gR29vZ2xlQVBJTWFya2VyXG4gICAqIEBwYXJhbSB7TWFwQm94fSBBIHJlZmVyZW5jZSB0byB0aGUgZ29vZ2xlIG1hcCB0byBhcHBseSB0aGUgbWFya2VyIHRvXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IG1hcmtlcnMgVGhlIGRhdGEgb2YgdGhlIG1hcmtlclxuICAgKiBAcGFyYW0ge09iamVjdH0gcGluQ29uZmlnIFRoZSBjb25maWd1cmF0aW9uIHRvIGFwcGx5IHRvIHRoZSBtYXJrZXJcbiAgICogQHJldHVybnMge01hcEJveE1hcmtlckNvbmZpZ1tdfVxuICAgKi9cbiAgc3RhdGljIGZyb20gKG1hcmtlcnMsIHBpbkNvbmZpZywgbWFwKSB7XG4gICAgbGV0IG1hcGJveE1hcE1hcmtlckNvbmZpZ3MgPSBbXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobWFya2VycykpIHtcbiAgICAgIG1hcmtlcnMgPSBbbWFya2Vyc107XG4gICAgfVxuXG4gICAgbWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIC8vIFN1cHBvcnQgY29uZmlndXJhdGlvbiBhcyBhIGZ1bmN0aW9uXG4gICAgICBsZXQgcGluQ29uZmlnT2JqID0gcGluQ29uZmlnO1xuICAgICAgaWYgKHR5cGVvZiBwaW5Db25maWcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcGluQ29uZmlnT2JqID0gcGluQ29uZmlnKFxuICAgICAgICAgIG1hcmtlci5pdGVtLFxuICAgICAgICAgIE1hcFByb3ZpZGVyLkRFRkFVTFRfUElOX0NPTkZJRyxcbiAgICAgICAgICBtYXJrZXIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB3cmFwcGVyID0gcGluQ29uZmlnT2JqLndyYXBwZXIgPyBwaW5Db25maWdPYmoud3JhcHBlciA6IG51bGw7XG4gICAgICBjb25zdCBzdGF0aWNNYXBQaW4gPSBwaW5Db25maWdPYmouc3RhdGljTWFwUGluID8gcGluQ29uZmlnT2JqLnN0YXRpY01hcFBpbiA6IG51bGw7XG5cbiAgICAgIG1hcGJveE1hcE1hcmtlckNvbmZpZ3MucHVzaChcbiAgICAgICAgbmV3IE1hcEJveE1hcmtlckNvbmZpZyh7XG4gICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIGxhdGl0dWRlOiBtYXJrZXIubGF0aXR1ZGUsXG4gICAgICAgICAgICBsb25naXR1ZGU6IG1hcmtlci5sb25naXR1ZGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHdyYXBwZXI6IHdyYXBwZXIsXG4gICAgICAgICAgbGFiZWw6IG1hcmtlci5sYWJlbCxcbiAgICAgICAgICBzdGF0aWNNYXBQaW46IHN0YXRpY01hcFBpblxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtYXBib3hNYXBNYXJrZXJDb25maWdzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNYXBDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5pbXBvcnQgR29vZ2xlTWFwUHJvdmlkZXIgZnJvbSAnLi9wcm92aWRlcnMvZ29vZ2xlbWFwcHJvdmlkZXInO1xuaW1wb3J0IE1hcEJveE1hcFByb3ZpZGVyIGZyb20gJy4vcHJvdmlkZXJzL21hcGJveG1hcHByb3ZpZGVyJztcblxuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbmNvbnN0IFByb3ZpZGVyVHlwZXMgPSB7XG4gICdnb29nbGUnOiBHb29nbGVNYXBQcm92aWRlcixcbiAgJ21hcGJveCc6IE1hcEJveE1hcFByb3ZpZGVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIHRoaXMgY29tcG9uZW50IHRvIGxpc3RlbiB0byB0aGUgc3RvcmFnZSBiYXNlZCBvbiB0aGlzIGtleVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWxpYXNlZCB1c2VkIHRvIGRldGVybWluZSB0aGUgdHlwZSBvZiBtYXAgcHJvdmlkZXIgdG8gdXNlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9tYXBQcm92aWRlciA9IG9wdHMubWFwUHJvdmlkZXI7XG4gICAgaWYgKCF0aGlzLl9tYXBQcm92aWRlciB8fCAhKHRoaXMuX21hcFByb3ZpZGVyLnRvTG93ZXJDYXNlKCkgaW4gUHJvdmlkZXJUeXBlcykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWFwQ29tcG9uZW50OiBJbnZhbGlkIE1hcCBQcm92aWRlcjsgbXVzdCBiZSBgZ29vZ2xlYCBvciBgbWFwQm94YCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIGluZGljYXRpb24gb2Ygd2hldGhlciBvciBub3QgdG8gdXNlIGEgc3RhdGljIG9yIGR5bmFtaWMgbWFwXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5faXNTdGF0aWMgPSBvcHRzLmlzU3RhdGljIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gYW4gaW5zdGFuY2Ugb2YgdGhlIHtNYXBQcm92aWRlcn0gdGhhdCdzIGNvbnN0cnVjdGVkXG4gICAgICogQHR5cGUge01hcFByb3ZpZGVyfVxuICAgICAqL1xuICAgIHRoaXMuX21hcCA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTWFwJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9tYXAnO1xuICB9XG5cbiAgLy8gVE9ETyhiaWxseSkgTWFrZSBQcm92aWRlclR5cGVzIGEgZmFjdG9yeSBjbGFzc1xuICBnZXRQcm92aWRlckluc3RhbmNlICh0eXBlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm92aWRlclR5cGVzW3R5cGUudG9Mb3dlckNhc2UoKV0odGhpcy5fY29uZmlnKTtcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICB0aGlzLl9tYXAgPSB0aGlzLmdldFByb3ZpZGVySW5zdGFuY2UodGhpcy5fbWFwUHJvdmlkZXIpO1xuICAgIGxldCBtYXBEYXRhID0gdGhpcy5nZXRTdGF0ZSgnbWFwJyk7XG4gICAgaWYgKG1hcERhdGEgPT09IHVuZGVmaW5lZCAmJiB0aGlzLl9pc1N0YXRpYykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU3RhdGljKSB7XG4gICAgICAvLyBUT0RPKGJpbGx5KSBUaGUgZXhpc3RpbmcgdGVtcGxhdGUgc2hvdWxkIGp1c3QgdGFrZSBpbiB0aGUgbWFwIGBpbWdVUkxgIGFzIGRhdGFcbiAgICAgIC8vIEluc3RlYWQgb2Ygb3ZlcnJpZGluZyB0aGUgdGVtcGxhdGUgbGlrZSBzbywgYnV0IE5CRCBmb3Igbm93LlxuICAgICAgdGhpcy5zZXRUZW1wbGF0ZSh0aGlzLl9tYXAuZ2VuZXJhdGVTdGF0aWMobWFwRGF0YSkpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fbWFwLmxvYWRKUygpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgdGhpcy5fbWFwLm9uTG9hZGVkKCgpID0+IHtcbiAgICAgIHRoaXMuX21hcC5pbml0KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5nZXRTdGF0ZSgnbWFwJykpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShkYXRhLCB2YWwpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBSZXN1bHRzQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vZXZlbnRyZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9wZW9wbGVyZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgTWFwQ29tcG9uZW50IGZyb20gJy4uL21hcC9tYXBjb21wb25lbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcblxuY29uc3QgUmVzdWx0VHlwZSA9IHtcbiAgRVZFTlQ6ICdldmVudCcsXG4gIExPQ0FUSU9OOiAnbG9jYXRpb24nLFxuICBQRU9QTEU6ICdwZW9wbGUnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHRzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIHZlcnRpY2FsQ29uZmlnSWQgdXNlZCBmb3IgYW5hbHl0aWNzIGFuZCBwYXNzZWQgdG8gY2hpbGRyZW5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxDb25maWdJZCA9IGNvbmZpZy52ZXJ0aWNhbENvbmZpZ0lkO1xuXG4gICAgLyoqXG4gICAgICogaXNVbml2ZXJzYWwgaXMgc2V0IHRvIHRydWUgaWYgdGhpcyBjb21wb25lbnQgaXMgYWRkZWQgYnkgdGhlIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2lzVW5pdmVyc2FsID0gY29uZmlnLmlzVW5pdmVyc2FsIHx8IGZhbHNlO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFM7XG4gICAgdGhpcy5faXRlbUNvbmZpZyA9IHtcbiAgICAgIGdsb2JhbDoge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9LFxuICAgICAgW0V2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZV06IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIFtMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50LnR5cGVdOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH0sXG4gICAgICBbUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZV06IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoY29uZmlnLnJlbmRlckl0ZW0gPT09IHVuZGVmaW5lZCAmJiBjb25maWcuX3BhcmVudE9wdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uZmlnLnJlbmRlckl0ZW0gPSBjb25maWcuX3BhcmVudE9wdHMucmVuZGVySXRlbTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLml0ZW1UZW1wbGF0ZSA9PT0gdW5kZWZpbmVkICYmIGNvbmZpZy5fcGFyZW50T3B0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25maWcuaXRlbVRlbXBsYXRlID0gY29uZmlnLl9wYXJlbnRPcHRzLml0ZW1UZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmxpbWl0KSB7XG4gICAgICBjb25zdCBsaW1pdCA9IGNvbmZpZy5saW1pdDtcbiAgICAgIGlmICh0eXBlb2YgbGltaXQgIT09ICdudW1iZXInIHx8IGxpbWl0IDwgMSB8fCBsaW1pdCA+IDUwKSB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoJ1NlYXJjaCBMaW1pdCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNTAnLCAnVmVydGljYWxSZXN1bHRzJyk7XG4gICAgICB9XG4gICAgICB0aGlzLmNvcmUuc2V0U2VhcmNoTGltaXQobGltaXQpO1xuICAgIH1cblxuICAgIHRoaXMuY29uZmlndXJlSXRlbSh7XG4gICAgICByZW5kZXI6IGNvbmZpZy5yZW5kZXJJdGVtLFxuICAgICAgdGVtcGxhdGU6IGNvbmZpZy5pdGVtVGVtcGxhdGVcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB1cmwgdG8gdGhlIHVuaXZlcnNhbCBwYWdlIGZvciB0aGUgbm8gcmVzdWx0cyBwYWdlIHRvIGxpbmsgYmFjayB0byB3aXRoIGN1cnJlbnQgcXVlcnlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5fdW5pdmVyc2FsVXJsID0gY29uZmlnLnVuaXZlcnNhbFVybDtcbiAgfVxuXG4gIG1vdW50ICgpIHtcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5nZXRTdGF0ZSgpKS5sZW5ndGggPiAwKSB7XG4gICAgICBzdXBlci5tb3VudCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RhdGljIGdldCBkdXBsaWNhdGVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSwgdmFsKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IGRhdGEucmVzdWx0cyB8fCBbXTtcbiAgICBjb25zdCBzZWFyY2hTdGF0ZSA9IGRhdGEuc2VhcmNoU3RhdGUgfHwgU2VhcmNoU3RhdGVzLlBSRV9TRUFSQ0g7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oeyByZXN1bHRzOiBbXSB9LCBkYXRhLCB7XG4gICAgICBpc1ByZVNlYXJjaDogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5QUkVfU0VBUkNILFxuICAgICAgaXNTZWFyY2hMb2FkaW5nOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlNFQVJDSF9MT0FESU5HLFxuICAgICAgaXNTZWFyY2hDb21wbGV0ZTogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5TRUFSQ0hfQ09NUExFVEUsXG4gICAgICBpbmNsdWRlTWFwOiB0aGlzLl9jb25maWcuaW5jbHVkZU1hcCxcbiAgICAgIG1hcENvbmZpZzogdGhpcy5fY29uZmlnLm1hcENvbmZpZyxcbiAgICAgIGV2ZW50T3B0aW9uczogdGhpcy5ldmVudE9wdGlvbnMoKSxcbiAgICAgIHVuaXZlcnNhbFVybDogdGhpcy5fdW5pdmVyc2FsVXJsID8gdGhpcy5fdW5pdmVyc2FsVXJsICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCA6ICcnLFxuICAgICAgc2hvd05vUmVzdWx0czogcmVzdWx0cy5sZW5ndGggPT09IDAsXG4gICAgICBxdWVyeTogdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpXG4gICAgfSksIHZhbCk7XG4gIH1cblxuICAvKipcbiAgICogaGVscGVyIHRvIGNvbnN0cnVjdCB0aGUgZXZlbnRPcHRpb25zIG9iamVjdCBmb3IgdGhlIHZpZXcgYWxsIGxpbmtcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGV2ZW50T3B0aW9ucyAoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHZlcnRpY2FsQ29uZmlnSWQ6IHRoaXMuX3ZlcnRpY2FsQ29uZmlnSWRcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdWZXJ0aWNhbFJlc3VsdHMnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL3Jlc3VsdHMnO1xuICB9XG5cbiAgY29uZmlndXJlSXRlbSAoY29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLl9pdGVtQ29uZmlnLmdsb2JhbC5yZW5kZXIgPSBjb25maWcucmVuZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29uZmlnLnJlbmRlcikge1xuICAgICAgICB0aGlzLnNldEl0ZW1SZW5kZXIoa2V5LCBjb25maWcucmVuZGVyW2tleV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRlbXBsYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5faXRlbUNvbmZpZy5nbG9iYWwudGVtcGxhdGUgPSBjb25maWcudGVtcGxhdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb25maWcudGVtcGxhdGUpIHtcbiAgICAgICAgdGhpcy5zZXRJdGVtVGVtcGxhdGUoa2V5LCBjb25maWcudGVtcGxhdGVba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0SXRlbVRlbXBsYXRlICh0eXBlLCB0ZW1wbGF0ZSkge1xuICAgIGxldCBjbGF6eiA9IHRoaXMuZ2V0SXRlbUNvbXBvbmVudCh0eXBlKTtcbiAgICB0aGlzLl9pdGVtQ29uZmlnW2NsYXp6LnR5cGVdLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gIH1cblxuICBzZXRJdGVtUmVuZGVyICh0eXBlLCByZW5kZXIpIHtcbiAgICBsZXQgY2xhenogPSB0aGlzLmdldEl0ZW1Db21wb25lbnQodHlwZSk7XG4gICAgdGhpcy5faXRlbUNvbmZpZ1tjbGF6ei50eXBlXS5yZW5kZXIgPSByZW5kZXI7XG4gIH1cblxuICBnZXRJdGVtQ29tcG9uZW50ICh0eXBlKSB7XG4gICAgbGV0IGNvbXAgPSBSZXN1bHRzSXRlbUNvbXBvbmVudDtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUmVzdWx0VHlwZS5FVkVOVDpcbiAgICAgICAgY29tcCA9IEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSZXN1bHRUeXBlLkxPQ0FUSU9OOlxuICAgICAgICBjb21wID0gTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJlc3VsdFR5cGUuUEVPUExFOlxuICAgICAgICBjb21wID0gUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wO1xuICB9XG5cbiAgYWRkQ2hpbGQgKGRhdGEsIHR5cGUsIG9wdHMpIHtcbiAgICAvLyBUT0RPKGJpbGx5KSBSZWZhY3RvciB0aGUgd2F5IGNvbmZpZ3VyYXRpb24gYW5kIGRhdGEgZmxvd3NcbiAgICAvLyB0aHJvdWdoIHRvcCBsZXZlbCBjb21wb25lbnRzIHRvIGNoaWxkIGNvbXBvbmVudHMuXG4gICAgaWYgKHR5cGUgPT09IFJlc3VsdHNJdGVtQ29tcG9uZW50LnR5cGUpIHtcbiAgICAgIGxldCBjbGF6eiA9IHRoaXMuZ2V0SXRlbUNvbXBvbmVudChkYXRhLnR5cGUpO1xuICAgICAgaWYgKGNsYXp6KSB7XG4gICAgICAgIHR5cGUgPSBjbGF6ei50eXBlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gTWFwQ29tcG9uZW50LnR5cGUpIHtcbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIG1hcDogZGF0YVxuICAgICAgfTtcbiAgICAgIGNvbnN0IG5ld09wdHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcubWFwQ29uZmlnLCBvcHRzKTtcbiAgICAgIHJldHVybiBzdXBlci5hZGRDaGlsZChkYXRhLCB0eXBlLCBuZXdPcHRzKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB0aGUgcHJvcGVyIGl0ZW0gcmVuZGVycyB0byB0aGUgdGhlIGNvbXBvbmVudHNcbiAgICAvLyBoYXZlIGp1c3QgYmVlbiBjb25zdHJ1Y3RlZC4gUHJpb3JpdGl6ZSBnbG9iYWwgb3ZlciBpbmRpdmlkdWFsIGl0ZW1zLlxuICAgIGxldCBjb21wID0gc3VwZXIuYWRkQ2hpbGQoZGF0YSwgdHlwZSwgT2JqZWN0LmFzc2lnbihvcHRzLCB7XG4gICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiB0aGlzLl92ZXJ0aWNhbENvbmZpZ0lkLFxuICAgICAgaXNVbml2ZXJzYWw6IHRoaXMuX2lzVW5pdmVyc2FsXG4gICAgfSkpO1xuICAgIGxldCBnbG9iYWxDb25maWcgPSB0aGlzLl9pdGVtQ29uZmlnLmdsb2JhbDtcbiAgICBsZXQgaXRlbUNvbmZpZyA9IHRoaXMuX2l0ZW1Db25maWdbY29tcC50eXBlXTtcbiAgICBsZXQgaGFzR2xvYmFsUmVuZGVyID0gdHlwZW9mIGdsb2JhbENvbmZpZy5yZW5kZXIgPT09ICdmdW5jdGlvbic7XG4gICAgbGV0IGhhc0dsb2JhbFRlbXBsYXRlID0gdHlwZW9mIGdsb2JhbENvbmZpZy50ZW1wbGF0ZSA9PT0gJ3N0cmluZyc7XG5cbiAgICBpZiAoaGFzR2xvYmFsUmVuZGVyKSB7XG4gICAgICBjb21wLnNldFJlbmRlcihnbG9iYWxDb25maWcucmVuZGVyKTtcbiAgICB9XG5cbiAgICBpZiAoaGFzR2xvYmFsVGVtcGxhdGUpIHtcbiAgICAgIGNvbXAuc2V0VGVtcGxhdGUoZ2xvYmFsQ29uZmlnLnRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICBpZiAoIWl0ZW1Db25maWcpIHtcbiAgICAgIHJldHVybiBjb21wO1xuICAgIH1cblxuICAgIGlmICghaGFzR2xvYmFsUmVuZGVyICYmIGl0ZW1Db25maWcucmVuZGVyKSB7XG4gICAgICBjb21wLnNldFJlbmRlcihpdGVtQ29uZmlnLnJlbmRlcik7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdGVtcGxhdGUgc3BlY2lmaWMgc2l0dWF0aW9uXG4gICAgaWYgKCFoYXNHbG9iYWxUZW1wbGF0ZSAmJiBpdGVtQ29uZmlnLnRlbXBsYXRlKSB7XG4gICAgICBjb21wLnNldFRlbXBsYXRlKGl0ZW1Db25maWcudGVtcGxhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gY29tcDtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudCAqL1xuaW1wb3J0IFJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgQW5hbHl0aWNzRXZlbnQgZnJvbSAnLi4vLi4vLi4vY29yZS9hbmFseXRpY3MvYW5hbHl0aWNzZXZlbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBiYXNlIHNlbGVjdG9yIHRvIHVzZSB3aGVuIGZpbmRpbmcgRE9NIHRhcmdldHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3NlbGVjdG9yQmFzZSA9IGNvbmZpZy5zZWxlY3RvckJhc2UgfHwgJy5qcy15eHQtQWNjb3JkaW9uUmVzdWx0JztcblxuICAgIC8qKlxuICAgICAqIGNvbGxhcHNlZCBzdGF0ZSBjbGFzc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5jb2xsYXBzZWRDbGFzcyA9IGNvbmZpZy5jb2xsYXBzZWRDbGFzcyB8fCAnaXMtY29sbGFwc2VkJztcblxuICAgIC8qKlxuICAgICAqIHZlcnRpY2FsIGNvbmZpZyBpZCBpcyByZXF1aXJlZCBmb3IgYW5hbHl0aWNzXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMudmVydGljYWxDb25maWdJZCA9IGNvbmZpZy52ZXJ0aWNhbENvbmZpZ0lkIHx8IGNvbmZpZy5fcGFyZW50T3B0cy52ZXJ0aWNhbENvbmZpZ0lkIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogdGhlIGNvbXBvbmVudCB0eXBlXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0FjY29yZGlvblJlc3VsdHMnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL3Jlc3VsdHNhY2NvcmRpb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIG92ZXJyaWRlcyBfb25Nb3VudCB0byBhZGQgYmluZGluZ3MgdG8gY2hhbmdlIHRoZSBoZWlnaHQgb24gY2xpY2tcbiAgICogQHJldHVybnMge0FjY29yZGlvblJlc3VsdHNDb21wb25lbnR9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgX29uTW91bnQgKCkge1xuICAgIHN1cGVyLl9vbk1vdW50KCk7XG5cbiAgICBjb25zdCBhY2NvcmRpb25FbHMgPSBET00ucXVlcnlBbGwodGhpcy5fY29udGFpbmVyLCB0aGlzLl9zZWxlY3RvckJhc2UpO1xuICAgIGFjY29yZGlvbkVscy5mb3JFYWNoKChhY2NvcmRpb25FbCkgPT4ge1xuICAgICAgY29uc3QgdG9nZ2xlRWwgPSBET00ucXVlcnkoYWNjb3JkaW9uRWwsIHRoaXMudG9nZ2xlU2VsZWN0b3IoKSk7XG4gICAgICBjb25zdCBjb250ZW50RWwgPSBET00ucXVlcnkoYWNjb3JkaW9uRWwsIHRoaXMuYm9keVNlbGVjdG9yKCkpO1xuICAgICAgdGhpcy5jaGFuZ2VIZWlnaHQoY29udGVudEVsLCBhY2NvcmRpb25FbCk7XG4gICAgICB0b2dnbGVFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayhhY2NvcmRpb25FbCwgdG9nZ2xlRWwsIGNvbnRlbnRFbCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgbW9kaWZpZXI6IHRoaXMudmVydGljYWxDb25maWdJZFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjbGljayBoYW5kbGVyIGZvciB0aGUgYWNjb3JkaW9uIHRvZ2dsZSBidXR0b25cbiAgICogQHBhcmFtIHdyYXBwZXJFbCB7SFRNTEVsZW1lbnR9IHRoZSB0b2dnbGUgY29udGFpbmVyXG4gICAqIEBwYXJhbSB0b2dnbGVFbCB7SFRNTEVsZW1lbnR9IHRoZSBidXR0b25cbiAgICogQHBhcmFtIGNvbnRlbnRFbCB7SFRNTEVsZW1lbnR9IHRoZSB0b2dnbGUgdGFyZ2V0XG4gICAqL1xuICBoYW5kbGVDbGljayAod3JhcHBlckVsLCB0b2dnbGVFbCwgY29udGVudEVsKSB7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgQW5hbHl0aWNzRXZlbnQodGhpcy5pc0NvbGxhcHNlZCh3cmFwcGVyRWwpID8gJ1JPV19FWFBBTkQnIDogJ1JPV19DT0xMQVBTRScpXG4gICAgICAuYWRkT3B0aW9ucyh7XG4gICAgICAgIHZlcnRpY2FsQ29uZmlnSWQ6IHRoaXMudmVydGljYWxDb25maWdJZCxcbiAgICAgICAgZW50aXR5SWQ6IHRvZ2dsZUVsLmRhdGFzZXQuZW50aXR5SWRcbiAgICAgIH0pO1xuICAgIHdyYXBwZXJFbC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuY29sbGFwc2VkQ2xhc3MpO1xuICAgIHRoaXMuY2hhbmdlSGVpZ2h0KGNvbnRlbnRFbCwgd3JhcHBlckVsKTtcbiAgICB0b2dnbGVFbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0aGlzLmlzQ29sbGFwc2VkKHdyYXBwZXJFbCkgPyAnZmFsc2UnIDogJ3RydWUnKTtcbiAgICB0aGlzLmFuYWx5dGljc1JlcG9ydGVyLnJlcG9ydChldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0cnVlIGlmIHRoZSBlbGVtZW50IGlzIGN1cnJlbnRseSBjb2xsYXBzZWRcbiAgICogQHBhcmFtIHdyYXBwZXJFbCB7SFRNTEVsZW1lbnR9IHRoZSB0b2dnbGUgY29udGFpbmVyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNDb2xsYXBzZWQgKHdyYXBwZXJFbCkge1xuICAgIGlmICghd3JhcHBlckVsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyYXBwZXJFbC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jb2xsYXBzZWRDbGFzcyk7XG4gIH1cblxuICAvKipcbiAgICogdG9nZ2xlcyB0aGUgaGVpZ2h0IGJldHdlZW4gMCBhbmQgdGhlIGNvbnRlbnQgaGVpZ2h0IGZvciBzbW9vdGggYW5pbWF0aW9uXG4gICAqIEBwYXJhbSB0YXJnZXRFbCB7SFRNTEVsZW1lbnR9XG4gICAqIEBwYXJhbSB3cmFwcGVyRWwge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgY2hhbmdlSGVpZ2h0ICh0YXJnZXRFbCwgd3JhcHBlckVsKSB7XG4gICAgdGFyZ2V0RWwuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5pc0NvbGxhcHNlZCh3cmFwcGVyRWwpID8gMCA6IHRhcmdldEVsLnNjcm9sbEhlaWdodH1weGA7XG4gIH1cblxuICAvKipcbiAgICogaGVscGVyIGZvciBjb21wb3NpbmcgY2hpbGQgZWxlbWVudCBzZWxlY3RvcnNcbiAgICogQHBhcmFtIGNoaWxkIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBidWlsZFNlbGVjdG9yIChjaGlsZCkge1xuICAgIHJldHVybiBgJHt0aGlzLl9zZWxlY3RvckJhc2V9JHtjaGlsZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIGhlbHBlciBmb3IgdGhlIHRvZ2dsZSBidXR0b24gc2VsZWN0b3JcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHRvZ2dsZVNlbGVjdG9yICgpIHtcbiAgICByZXR1cm4gdGhpcy5idWlsZFNlbGVjdG9yKCctdG9nZ2xlJyk7XG4gIH1cblxuICAvKipcbiAgICogaGVscGVyIGZvciB0aGUgY29udGVudCBlbGVtZW50IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBib2R5U2VsZWN0b3IgKCkge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkU2VsZWN0b3IoJy1ib2R5Jyk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuaW1wb3J0IEFjY29yZGlvblJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9hY2NvcmRpb25yZXN1bHRzY29tcG9uZW50LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUUztcbiAgICB0aGlzLl9saW1pdCA9IG9wdHMubGltaXQgfHwgMTA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnVW5pdmVyc2FsUmVzdWx0cyc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvdW5pdmVyc2FscmVzdWx0cyc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGluaXQgKG9wdHMpIHtcbiAgICBzdXBlci5pbml0KG9wdHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIGNvbnN0IHNlY3Rpb25zID0gZGF0YS5zZWN0aW9ucyB8fCBbXTtcbiAgICBjb25zdCBzZWFyY2hTdGF0ZSA9IGRhdGEuc2VhcmNoU3RhdGUgfHwgU2VhcmNoU3RhdGVzLlBSRV9TRUFSQ0g7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oeyBzZWN0aW9uczogW10gfSwgZGF0YSwge1xuICAgICAgaXNQcmVTZWFyY2g6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuUFJFX1NFQVJDSCxcbiAgICAgIGlzU2VhcmNoTG9hZGluZzogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyxcbiAgICAgIGlzU2VhcmNoQ29tcGxldGU6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFLFxuICAgICAgc2hvd05vUmVzdWx0czogc2VjdGlvbnMubGVuZ3RoID09PSAwLFxuICAgICAgcXVlcnk6IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKVxuICAgIH0pLCB2YWwpO1xuICB9XG5cbiAgYWRkQ2hpbGQgKGRhdGEgPSB7fSwgdHlwZSkge1xuICAgIGxldCBvcHRzID0gdGhpcy5nZXRDaGlsZENvbmZpZyhbZGF0YVsndmVydGljYWxDb25maWdJZCddXSk7XG4gICAgaWYgKG9wdHMudXNlQWNjb3JkaW9uID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gc3VwZXIuYWRkQ2hpbGQoZGF0YSwgQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudC50eXBlLCBvcHRzKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIG9wdHMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb25maWcgKGNvbmZpZ0lkKSB7XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZyA9IHtcbiAgICAgIHZlcnRpY2FsQ29uZmlnSWQ6IGNvbmZpZ0lkLFxuICAgICAgaXNVbml2ZXJzYWw6IHRydWVcbiAgICB9O1xuICAgIGxldCBjb25maWcgPSB0aGlzLl9jb25maWcuY29uZmlnO1xuICAgIGlmIChjb25maWcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRDb25maWc7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGRlZmF1bHRDb25maWcsIHRoaXMuX2NvbmZpZ1snY29uZmlnJ11bY29uZmlnSWRdIHx8IHRoaXMuX2NvbmZpZ1snY29uZmlnJ10pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFF1ZXN0aW9uU3VibWlzc2lvbiBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9xdWVzdGlvbnN1Ym1pc3Npb24nO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBBbmFseXRpY3NFdmVudCBmcm9tICcuLi8uLi8uLi9jb3JlL2FuYWx5dGljcy9hbmFseXRpY3NldmVudCc7XG5cbi8qKlxuICogQ29uZmlndXJhYmxlIG9wdGlvbnMgZm9yIHRoZSBjb21wb25lbnRcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmNvbnN0IERFRkFVTFRfQ09ORklHID0ge1xuICAvKipcbiAgICogVGhlIGVudGl0eSBpZGVudGlmaWVyIHRoYXQgdGhlIHF1ZXN0aW9uIGlzIGFzc29jaWF0ZWQgd2l0aC5cbiAgICogVGhpcyBpcyB0eXBpY2FsbHkgYW4gb3JnYW5pemF0aW9uIG9iamVjdFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgJ2VudGl0eUlkJzogbnVsbCxcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgbGFuZ3VhZ2Ugb2YgdGhlIHF1ZXN0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICAnbGFuZ3VhZ2UnOiAnRU4nLFxuXG4gIC8qKlxuICAgKiBUaGUgbWFpbiBDU1Mgc2VsZWN0b3IgdXNlZCB0byByZWZlcmVuY2UgdGhlIGZvcm0gZm9yIHRoZSBjb21wb25lbnQuXG4gICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgKi9cbiAgJ2Zvcm1TZWxlY3Rvcic6ICdmb3JtJyxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgbGFiZWwgdG8gdXNlIGZvciB0aGUgZS1tYWlsIGFkZHJlc3MgaW5wdXRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICdlbWFpbExhYmVsJzogJ0VtYWlsIEFkZHJlc3M6JyxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgbGFiZWwgdG8gdXNlIGZvciB0aGUgbmFtZSBpbnB1dFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgJ25hbWVMYWJlbCc6ICdOYW1lOicsXG5cbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIGxhYmVsIHRvIHVzZSBmb3IgdGhlIHF1ZXN0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICAncXVlc3Rpb25MYWJlbCc6ICdXaGF0IGlzIHlvdXIgcXVlc3Rpb24/JyxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgbGFiZWwgdG8gdXNlIGZvciB0aGUgUHJpdmFjeSBQb2xpY3lcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICdwcml2YWN5UG9saWN5TGFiZWwnOiAnSSBhZ3JlZSB0byBvdXIgUHJpdmFjeSBQb2xpY3k6JyxcblxuICAvKipcbiAgICogVGhlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIFN1Ym1pdCBidXR0b25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICdidXR0b25MYWJlbCc6ICdTdWJtaXQnXG59O1xuXG4vKipcbiAqIFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCBpcyBhIGNvbXBvbmVudCB0aGF0IGNyZWF0ZXMgYSBmb3JtXG4gKiB0aGF0cyBkaXNwbGF5ZWQgd2hlbmV2ZXIgYSBxdWVyeSBpcyBydW4uIEl0IGVuYWJsZXMgdGhlIHVzZXJcbiAqIHRvIHN1Ym1pdCBxdWVzdGlvbnMgdGhhdCB0aGV5IGNhbnQgZmluZCB0aGUgYW5zd2VyIGZvci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9DT05GSUcsIGNvbmZpZykpO1xuXG4gICAgLyoqXG4gICAgICogUmVmZXJlbmNlIHRvIHRoZSBzdG9yYWdlIG1vZGVsXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuUVVFU1RJT05fU1VCTUlTU0lPTjtcblxuICAgIC8qKlxuICAgICAqIE5PVEUoYmlsbHkpIGlmIHRoaXMgaXMgYSBwYXR0ZXJuIHdlIHdhbnQgdG8gZm9sbG93IGZvciBjb25maWd1cmF0aW9uXG4gICAgICogd2Ugc2hvdWxkIGJha2UgaXQgaW50byB0aGUgY29yZSBjbGFzcy5cbiAgICAgKi9cbiAgICB0aGlzLnZhbGlkYXRlQ29uZmlnKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3F1ZXN0aW9ucy9xdWVzdGlvbnN1Ym1pc3Npb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwdWJsaWMgaW50ZXJmYWNlIGFsaWFzIGZvciB0aGUgY29tcG9uZW50XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1FBU3VibWlzc2lvbic7XG4gIH1cblxuICAvKipcbiAgICogdmFsaWRhdGlvbkNvbmZpZyBjb250YWlucyBhIGJ1bmNoIG9mIHJ1bGVzXG4gICAqIHRoYXQgYXJlIHVzZWQgdG8gdmFsaWRhdGUgYWdpbnN0IGNvbmZpZ3VyYXRpb24gcHJvdmlkZWQgYnkgdGhlIHVzZXJcbiAgICovXG4gIHZhbGlkYXRlQ29uZmlnICgpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmVudGl0eUlkID09PSBudWxsIHx8XG4gICAgICAgIHR5cGVvZiB0aGlzLl9jb25maWcuZW50aXR5SWQgIT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICAnYGVudGl0eUlkYCBpcyBhIHJlcXVpcmVkIGNvbmZpZ3VyYXRpb24gb3B0aW9uIGZvciBRdWVzdGlvbiBTdWJtaXNzaW9uJyxcbiAgICAgICAgJ1F1ZXN0aW9uU3VibWlzc2lvbicpO1xuICAgIH1cbiAgfVxuXG4gIGJlZm9yZU1vdW50ICgpIHtcbiAgICAvLyBBdm9pZCBtb3VudGluZyB0aGUgY29tcG9uZW50IGlmIHRoZXJlcyBubyBkYXRhXG4gICAgLy8gTm90ZSwgMSBiZWNhdXNlIGBjb25maWdgIGlzIGFsd2F5cyBwYXJ0IG9mIHRoZSBzdGF0ZS5cbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5nZXRTdGF0ZSgpKS5sZW5ndGggPiAxO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgbGV0IGZvcm1FbCA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2NvbmZpZy5mb3JtU2VsZWN0b3IpO1xuICAgIGlmIChmb3JtRWwgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmJpbmRBbmFseXRpY3MoZm9ybUVsKTtcbiAgICB0aGlzLmJpbmRGb3JtU3VibWl0KGZvcm1FbCk7XG4gIH1cblxuICAvKipcbiAgICogYmluZEFuYWx5dGljcyB3aWxsIHdpcmUgdXAgRE9NIGV2ZW50IGhvb2tzIHRvIHNlcnZlcnNpZGUgcmVwb3J0aW5nXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1FbFxuICAgKi9cbiAgYmluZEFuYWx5dGljcyAoZm9ybUVsKSB7XG4gICAgaWYgKHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBxdWVzdGlvblRleHRFbCA9IERPTS5xdWVyeShmb3JtRWwsICcuanMtcXVlc3Rpb24tdGV4dCcpO1xuICAgIERPTS5vbihxdWVzdGlvblRleHRFbCwgJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlci5yZXBvcnQobmV3IEFuYWx5dGljc0V2ZW50KCdRVUVTVElPTl9GT0NVUycpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBiaW5kRm9ybVN1Ym1pdCBoYW5kbGVzIHN1Ym1pdHRpbmcgdGhlIHF1ZXN0aW9uIHRvIHRoZSBzZXJ2ZXIuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1FbFxuICAgKi9cbiAgYmluZEZvcm1TdWJtaXQgKGZvcm1FbCkge1xuICAgIERPTS5vbihmb3JtRWwsICdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gVE9ETyhiaWxseSkgd2UgcHJvYmFibHkgd2FudCB0byBkaXNhYmxlIHRoZSBmb3JtIGZyb20gYmVpbmcgc3VibWl0dGVkIHR3aWNlXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IHRoaXMucGFyc2UoZm9ybUVsKTtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMudmFsaWRhdGVSZXF1aXJlZChmb3JtRGF0YSk7XG4gICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKG5ldyBRdWVzdGlvblN1Ym1pc3Npb24oZm9ybURhdGEsIGVycm9ycykpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvcmUuc3VibWl0UXVlc3Rpb24oe1xuICAgICAgICAnZW50aXR5SWQnOiB0aGlzLl9jb25maWcuZW50aXR5SWQsXG4gICAgICAgICdxdWVzdGlvbkxhbmd1YWdlJzogdGhpcy5fY29uZmlnLmxhbmd1YWdlLFxuICAgICAgICAnc2l0ZSc6ICdGSVJTVF9QQVJUWScsXG4gICAgICAgICduYW1lJzogZm9ybURhdGEubmFtZSxcbiAgICAgICAgJ2VtYWlsJzogZm9ybURhdGEuZW1haWwsXG4gICAgICAgICdxdWVzdGlvblRleHQnOiBmb3JtRGF0YS5xdWVzdGlvblRleHQsXG4gICAgICAgICdxdWVzdGlvbkRlc2NyaXB0aW9uJzogZm9ybURhdGEucXVlc3Rpb25EZXNjcmlwdGlvblxuICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgbmV3IFF1ZXN0aW9uU3VibWlzc2lvbihmb3JtRGF0YSwge1xuICAgICAgICAgICAgICAnbmV0d29yayc6ICdUaGVyZSB3YXMgYSBwcm9ibGVtIHN1Ym1pdHRpbmcgeW91ciBxdWVzdGlvbi4gUGxlYXNlIHRyeSBhZ2Fpbi4nXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRha2VzIHRoZSBmb3JtLCBhbmQgYnVpbGRzIGEgb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgaW5wdXQgbmFtZXNcbiAgICogYW5kIHRleHQgZmllbGRzLlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtRWxcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHBhcnNlIChmb3JtRWwpIHtcbiAgICBjb25zdCBpbnB1dEZpZWxkcyA9IERPTS5xdWVyeUFsbChmb3JtRWwsICcuanMtcXVlc3Rpb24tZmllbGQnKTtcbiAgICBpZiAoIWlucHV0RmllbGRzIHx8IGlucHV0RmllbGRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGxldCBvYmogPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0RmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdmFsID0gaW5wdXRGaWVsZHNbaV0udmFsdWU7XG4gICAgICBpZiAoaW5wdXRGaWVsZHNbaV0udHlwZSA9PT0gJ2NoZWNrYm94JyAmJiB2YWwgPT09ICd0cnVlJykge1xuICAgICAgICB2YWwgPSB0cnVlO1xuICAgICAgfVxuICAgICAgb2JqW2lucHV0RmllbGRzW2ldLm5hbWVdID0gdmFsO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIHRoZSByZXF1aXJlZCBmaWVsZHMgKG9yIHJ1bGVzKSBmb3IgdGhlIGZvcm0gZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gZm9ybURhdGFcbiAgICogQHJldHVybnMge09iamVjdHxib29sZWFufSBlcnJvcnMgb2JqZWN0IGlmIGFueSBlcnJvcnMgZm91bmRcbiAgICovXG4gIHZhbGlkYXRlUmVxdWlyZWQgKGZvcm1EYXRhKSB7XG4gICAgbGV0IGVycm9ycyA9IHt9O1xuICAgIGlmICghZm9ybURhdGEuZW1haWwgfHwgdHlwZW9mIGZvcm1EYXRhLmVtYWlsICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3JzWydlbWFpbCddID0gJ01pc3NpbmcgZW1haWwgYWRkcmVzcyEnO1xuICAgIH1cblxuICAgIGlmICghZm9ybURhdGEucHJpdmFjeVBvbGljeSB8fCBmb3JtRGF0YS5wcml2YWN5UG9saWN5ICE9PSB0cnVlKSB7XG4gICAgICBlcnJvcnNbJ3ByaXZhY3lQb2xpY3knXSA9ICdBcHByb3Zpbmcgb3VyIHByaXZhY3kgcG9saWN5IHRlcm1zIGlzIHJlcXVpcmVkISc7XG4gICAgfVxuXG4gICAgaWYgKCFmb3JtRGF0YS5xdWVzdGlvblRleHQgfHwgdHlwZW9mIGZvcm1EYXRhLnF1ZXN0aW9uVGV4dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9yc1sncXVlc3Rpb25UZXh0J10gPSAnUXVlc3Rpb24gdGV4dCBpcyByZXF1aXJlZCEnO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA+IDAgPyBlcnJvcnMgOiBudWxsO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTVkdJY29uIHtcbiAgLyoqXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICogQHBhcmFtIGNvbmZpZy5uYW1lXG4gICAqIEBwYXJhbSBjb25maWcucGF0aFxuICAgKiBAcGFyYW0gY29uZmlnLmNvbXBsZXhDb250ZW50c1xuICAgKiBAcGFyYW0gY29uZmlnLnZpZXdCb3hcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgLyoqXG4gICAgICogdGhlIG5hbWUgb2YgdGhlIGljb25cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSBjb25maWcubmFtZTtcbiAgICAvKipcbiAgICAgKiBhbiBzdmcgcGF0aCBkZWZpbml0aW9uXG4gICAgICovXG4gICAgdGhpcy5wYXRoID0gY29uZmlnLnBhdGg7XG4gICAgLyoqXG4gICAgICogaWYgbm90IHVzaW5nIGEgcGF0aCwgYSB0aGUgbWFya3VwIGZvciBhIGNvbXBsZXggU1ZHXG4gICAgICovXG4gICAgdGhpcy5jb21wbGV4Q29udGVudHMgPSBjb25maWcuY29tcGxleENvbnRlbnRzO1xuICAgIC8qKlxuICAgICAqIHRoZSB2aWV3IGJveCBkZWZpbml0aW9uLCBkZWZhdWx0cyB0byAyNHgyNFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy52aWV3Qm94ID0gY29uZmlnLnZpZXdCb3ggfHwgJzAgMCAyNCAyNCc7XG4gICAgLyoqXG4gICAgICogYWN0dWFsIGNvbnRlbnRzIHVzZWRcbiAgICAgKi9cbiAgICB0aGlzLmNvbnRlbnRzID0gdGhpcy5wYXRoRGVmaW5pdGlvbigpO1xuICB9XG5cbiAgcGF0aERlZmluaXRpb24gKCkge1xuICAgIGlmICh0aGlzLmNvbXBsZXhDb250ZW50cykge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGxleENvbnRlbnRzO1xuICAgIH1cblxuICAgIHJldHVybiBgPHBhdGggZD1cIiR7dGhpcy5wYXRofVwiPjwvcGF0aD5gO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIHN2ZyBtYXJrdXBcbiAgICovXG4gIG1hcmt1cCAoKSB7XG4gICAgcmV0dXJuIGA8c3ZnIHZpZXdCb3g9XCIke3RoaXMudmlld0JveH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JHt0aGlzLmNvbnRlbnRzfTwvc3ZnPmA7XG4gIH1cbn1cbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICd0aHVtYicsXG4gIHZpZXdCb3g6ICcwIDAgMjQgMjInLFxuICBwYXRoOiAnTTE1LjI3MyAxSDUuNDU1Yy0uOTA2IDAtMS42OC41NS0yLjAwOCAxLjM0MkwuMTUzIDEwLjA5N0EyLjE5IDIuMTkgMCAwMDAgMTAuOXYyLjJjMCAxLjIxLjk4MiAyLjIgMi4xODIgMi4yaDYuODgzTDguMDMgMjAuMzI3bC0uMDMzLjM1MmMwIC40NTEuMTg2Ljg2OS40OCAxLjE2Nkw5LjYzMyAyM2w3LjE3OC03LjI0OWEyLjE2IDIuMTYgMCAwMC42NDQtMS41NTF2LTExYzAtMS4yMS0uOTgyLTIuMi0yLjE4Mi0yLjJ6bTAgMTMuMmwtNC43MzUgNC43NzRMMTEuNzUgMTMuMUgyLjE4MnYtMi4ybDMuMjczLTcuN2g5LjgxOHYxMXpNMTkuNjM2IDFIMjR2MTMuMmgtNC4zNjRWMXonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdyZWNlaXB0JyxcbiAgcGF0aDogJ00xNC42MDYgOS41Yy0uNjcxLS41MTUtMS41OTEtLjgzMy0yLjYwNi0uODMzIDEuMDE1IDAgMS45MzUuMzE4IDIuNjA2LjgzM3ptLTcuOTg1IDBIMS42NTVBMS42NiAxLjY2IDAgMDEwIDcuODMzVjMuNjY3QzAgMi43NDcuNzQxIDIgMS42NTUgMmgyMC42OUExLjY2IDEuNjYgMCAwMTI0IDMuNjY3djQuMTY2QTEuNjYgMS42NiAwIDAxMjIuMzQ1IDkuNWgtNC45NjZWMjJINi42MjFWOS41aDIuNzczSDYuNjJ6bTEwLjc1OC0xLjY2N2g0Ljk2NlYzLjY2N0gxLjY1NXY0LjE2Nmg0Ljk2NnYtMi41aDEwLjc1OHYyLjV6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncGFudGhlb24nLFxuICBwYXRoOiAnTTkuOTQ3IDE2LjU5OGguMjUyVjkuNDEyaC0uMjUyYS40MzIuNDMyIDAgMDEtLjIzLS4wNjVjLS4wNy0uMDQzLS4xMDYtLjA5My0uMTA2LS4xNUw5LjE1IDcuODJ2LS4xNWMwLS4wNDQuMDI4LS4wOC4wODQtLjEwOWEuNjkxLjY5MSAwIDAxLjEwNS0uMDg2LjI1NC4yNTQgMCAwMS4xNDYtLjA0M0gxMy42Yy4wNTYgMCAuMTA0LjAxNS4xNDYuMDQzLjA0Mi4wMy4wOTEuMDU4LjE0Ny4wODZhLjI3MS4yNzEgMCAwMS4wNjMuMTA4Yy4wMTQuMDQzLjAwNy4wOTMtLjAyLjE1bC0uNDIgMS4zNzhhLjM3NC4zNzQgMCAwMS0uMTQ3LjE1LjM3LjM3IDAgMDEtLjE5LjA2NWgtLjI1MXY3LjE4NmguMjUyYS4zNy4zNyAwIDAxLjE4OS4wNjVjLjA3LjA0My4xMTkuMDkzLjE0Ny4xNWwuNDIgMS4zNzhjLjAyNy4wMjguMDM0LjA3MS4wMi4xMjlhLjI3NS4yNzUgMCAwMS0uMDYzLjEyOSAxLjM2NCAxLjM2NCAwIDAwLS4xNDcuMDg2LjI1NC4yNTQgMCAwMS0uMTQ2LjA0M0g5LjQ4NWEuMjU0LjI1NCAwIDAxLS4xNDYtLjA0My42OTEuNjkxIDAgMDEtLjEwNS0uMDg2Yy0uMDU2LS4wMjktLjA4NC0uMDcyLS4wODQtLjEzdi0uMTI4bC40NjEtMS4zNzdjMC0uMDU4LjAzNS0uMTA4LjEwNS0uMTUxYS40MzIuNDMyIDAgMDEuMjMxLS4wNjV6bTUuNzkyIDBoLjI1MlY5LjQxMmgtLjI1MmEuNDMyLjQzMiAwIDAxLS4yMy0uMDY1LjM3NC4zNzQgMCAwMS0uMTQ4LS4xNWwtLjQyLTEuMzc3Yy0uMDI3LS4wMjktLjAzNC0uMDcyLS4wMi0uMTNhLjI3NS4yNzUgMCAwMS4wNjMtLjEyOWMuMDU2LS4wMjguMTA1LS4wNTcuMTQ2LS4wODZhLjI1NC4yNTQgMCAwMS4xNDctLjA0M2g0LjExNGMuMDU1IDAgLjEwNC4wMTUuMTQ2LjA0M2EuNjkxLjY5MSAwIDAxLjEwNS4wODZjLjA1Ni4wMy4wODQuMDcyLjA4NC4xM3YuMTI5bC0uNDIgMS4zNzdhLjM3NC4zNzQgMCAwMS0uMTQ2LjE1LjQzMi40MzIgMCAwMS0uMjMxLjA2NWgtLjIxdjcuMTg2aC4yMWEuNDMuNDMgMCAwMS4yMy4wNjVjLjA3LjA0My4xMi4wOTMuMTQ4LjE1bC40MiAxLjM3OHYuMTVjMCAuMDQzLS4wMjkuMDgtLjA4NS4xMDhhLjY5MS42OTEgMCAwMS0uMTA1LjA4Ni4yNTQuMjU0IDAgMDEtLjE0Ni4wNDNoLTQuMTE0YS4yNTQuMjU0IDAgMDEtLjE0Ny0uMDQzIDEuMzY0IDEuMzY0IDAgMDAtLjE0Ni0uMDg2LjI3MS4yNzEgMCAwMS0uMDYzLS4xMDhjLS4wMTQtLjA0My0uMDA3LS4wOTMuMDItLjE1bC40Mi0xLjM3N2EuMzc0LjM3NCAwIDAxLjE0Ny0uMTUxLjQzMi40MzIgMCAwMS4yMzEtLjA2NXptLTExLjc5NC0uMDg2aC4yNTJWOS40OThoLS4yNTJhLjMzNC4zMzQgMCAwMS0uMjEtLjA2NS4zODYuMzg2IDAgMDEtLjEyNi0uMTkzbC0uNDItMS4zNzdhLjI0OC4yNDggMCAwMS0uMDItLjE3Mi44NTQuODU0IDAgMDEuMDYzLS4xNzNjLjAyOC0uMDU3LjA3LS4xLjEyNi0uMTI5YS4zNjUuMzY1IDAgMDEuMTY4LS4wNDNoNC4wN2MuMDU3IDAgLjExMy4wMTUuMTY5LjA0M2EuMjc4LjI3OCAwIDAxLjEyNi4xMy44NTQuODU0IDAgMDEuMDYyLjE3Mi4yNDguMjQ4IDAgMDEtLjAyLjE3MmwtLjQyIDEuMzc3YS4zODYuMzg2IDAgMDEtLjEyNi4xOTMuMzM0LjMzNCAwIDAxLS4yMS4wNjVoLS4yMXY3LjAxNGguMjFjLjA4NCAwIC4xNTQuMDI5LjIxLjA4NmEuNjczLjY3MyAwIDAxLjEyNi4xNzJsLjQyIDEuMzc4YS4yNDguMjQ4IDAgMDEuMDIuMTcyLjg1NC44NTQgMCAwMS0uMDYyLjE3Mi4yNzguMjc4IDAgMDEtLjEyNi4xMjkuMzY1LjM2NSAwIDAxLS4xNjguMDQzSDMuNTI2YS4zNjUuMzY1IDAgMDEtLjE2OC0uMDQzLjI3OC4yNzggMCAwMS0uMTI2LS4xMy44NTQuODU0IDAgMDEtLjA2My0uMTcxLjI0OC4yNDggMCAwMS4wMi0uMTcybC40Mi0xLjM3OGEuNjczLjY3MyAwIDAxLjEyNi0uMTcyLjI4MS4yODEgMCAwMS4yMS0uMDg2ek0xLjc2MyA2LjY1OGEuNzE3LjcxNyAwIDAxLS41MDQtLjE5NC42NDQuNjQ0IDAgMDEtLjIxLS40OTV2LS40M2EuNzMuNzMgMCAwMS4xMDUtLjM4Ny42OC42OCAwIDAxLjI3My0uMjU5QzQuMzA5IDMuNDAyIDYuNTQgMi4yNzYgOC4xMjEgMS41MTUgOS43MDIuNzU1IDEwLjQ5My4zNjEgMTAuNDkzLjMzMmMuNTMxLS4yNTguOTcyLS4zNjYgMS4zMjItLjMyMy4zNS4wNDMuNzM0LjE2NSAxLjE1NC4zNjZsOC4zMSA0LjUxOGMuMTQuMDU4LjI0NS4xNDQuMzE1LjI1OWEuNzMuNzMgMCAwMS4xMDUuMzg3di40M2MwIC4yMDEtLjA3LjM2Ni0uMjEuNDk1YS43MTcuNzE3IDAgMDEtLjUwNC4xOTRIMS43NjN6bS0uNzE0IDEzLjM0YS41NC41NCAwIDAxLjE2OC0uMzg3LjUxNi41MTYgMCAwMS4zNzgtLjE3MmgxOS42NDJjLjE2OCAwIC4zMDguMDU3LjQyLjE3MmEuNTQxLjU0MSAwIDAxLjE2OC4zODd2LjgxOGEuNTIyLjUyMiAwIDAxLS4xNjguNDA4LjYwNS42MDUgMCAwMS0uNDIuMTUxSDEuNTk1YS41NTEuNTUxIDAgMDEtLjM3OC0uMTUuNTIyLjUyMiAwIDAxLS4xNjgtLjQxdi0uODE3em0yMS40MDUgMi4wMjJjLjE0IDAgLjI2Ni4wNTguMzc4LjE3M2EuNTkyLjU5MiAwIDAxLjE2OC40M3YuODE4YS41NDEuNTQxIDAgMDEtLjE2OC4zODcuNTE2LjUxNiAwIDAxLS4zNzguMTcyTC41NDYgMjMuOTU3YS41MTYuNTE2IDAgMDEtLjM3OC0uMTcyLjU0MS41NDEgMCAwMS0uMTY4LS4zODd2LS44MThhLjU5LjU5IDAgMDEuMTY4LS40My41MTYuNTE2IDAgMDEuMzc4LS4xNzNsMjEuOTA4LjA0M3onXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdtaWMnLFxuICBwYXRoOiAnTTEyIDE1YzEuNjYgMCAyLjk5LTEuMzQgMi45OS0zTDE1IDZjMC0xLjY2LTEuMzQtMy0zLTNTOSA0LjM0IDkgNnY2YzAgMS42NiAxLjM0IDMgMyAzem01LjMtM2MwIDMtMi41NCA1LjEtNS4zIDUuMVM2LjcgMTUgNi43IDEySDVjMCAzLjQxIDIuNzIgNi4yMyA2IDYuNzJWMjJoMnYtMy4yOGMzLjI4LS40OCA2LTMuMyA2LTYuNzJoLTEuN3onXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdkaXJlY3Rpb25zJyxcbiAgcGF0aDogJ00yMy42NDkgMTEuMTU0TDEyLjg0Ni4zNWExLjE5NSAxLjE5NSAwIDAwLTEuNjkyIDBMLjM1IDExLjE1NGExLjE5NSAxLjE5NSAwIDAwMCAxLjY5MkwxMS4xNTQgMjMuNjVhMS4xOTUgMS4xOTUgMCAwMDEuNjkyIDBMMjMuNjUgMTIuODQ2Yy40NjgtLjQ1Ni40NjgtMS4yMTIgMC0xLjY5MnptLTkuMjU0IDMuODUzdi0zLjAwMUg5LjU5M3YzLjZoLTIuNHYtNC44YzAtLjY2LjU0LTEuMiAxLjItMS4yaDYuMDAyVjYuNjA0bDQuMiA0LjItNC4yIDQuMjAyeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2NhbGVuZGFyJyxcbiAgcGF0aDogJ00xOC4xMTEgMTMuMkgxMnY2aDYuMTExdi02ek0xNi44OSAwdjIuNEg3LjExVjBINC42Njd2Mi40SDMuNDQ0Yy0xLjM1NiAwLTIuNDMyIDEuMDgtMi40MzIgMi40TDEgMjEuNkMxIDIyLjkyIDIuMDg4IDI0IDMuNDQ0IDI0aDE3LjExMkMyMS45IDI0IDIzIDIyLjkyIDIzIDIxLjZWNC44YzAtMS4zMi0xLjEtMi40LTIuNDQ0LTIuNGgtMS4yMjNWMEgxNi44OXptMy42NjcgMjEuNkgzLjQ0NFY4LjRoMTcuMTEydjEzLjJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnY2FsbG91dCcsXG4gIHBhdGg6ICdNMjEuOTkgNGMwLTEuMS0uODktMi0xLjk5LTJINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNGw0IDQtLjAxLTE4eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2luZm8nLFxuICBwYXRoOiAnTTEyIDguNEExLjIgMS4yIDAgMTAxMiA2YTEuMiAxLjIgMCAwMDAgMi40ek0xMiAwYzYuNjI0IDAgMTIgNS4zNzYgMTIgMTJzLTUuMzc2IDEyLTEyIDEyUzAgMTguNjI0IDAgMTIgNS4zNzYgMCAxMiAwem0wIDE4Yy42NiAwIDEuMi0uNTQgMS4yLTEuMlYxMmMwLS42Ni0uNTQtMS4yLTEuMi0xLjItLjY2IDAtMS4yLjU0LTEuMiAxLjJ2NC44YzAgLjY2LjU0IDEuMiAxLjIgMS4yeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2JyaWVmY2FzZScsXG4gIHBhdGg6ICdNMjAgN2gtNFY1YzAtMS4xMS0uODktMi0yLTJoLTRjLTEuMTEgMC0yIC44OS0yIDJ2Mkg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAyMGMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY5YzAtMS4xMS0uODktMi0yLTJ6bS02IDBoLTRWNWg0djJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAna2Fib2InLFxuICB2aWV3Qm94OiAnMCAwIDMgMTEnLFxuICBjb21wbGV4Q29udGVudHM6IGA8Y2lyY2xlIGN4PVwiMS41XCIgY3k9XCIxLjVcIiByPVwiMS41XCIvPjxjaXJjbGUgY3g9XCIxLjVcIiBjeT1cIjUuNVwiIHI9XCIxLjVcIi8+PGNpcmNsZSBjeD1cIjEuNVwiIGN5PVwiOS41XCIgcj1cIjEuNVwiLz5gXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdwZXJzb24nLFxuICB2aWV3Qm94OiAnMCAwIDE4IDE4JyxcbiAgcGF0aDogJ005IDljMi40ODYgMCA0LjUtMi4wMTQgNC41LTQuNVMxMS40ODYgMCA5IDBhNC40OTkgNC40OTkgMCAwMC00LjUgNC41QzQuNSA2Ljk4NiA2LjUxNCA5IDkgOXptMCAyLjI1Yy0zLjAwNCAwLTkgMS41MDgtOSA0LjV2MS4xMjVDMCAxNy40OTQuNTA2IDE4IDEuMTI1IDE4aDE1Ljc1Yy42MTkgMCAxLjEyNS0uNTA2IDEuMTI1LTEuMTI1VjE1Ljc1YzAtMi45OTItNS45OTYtNC41LTktNC41eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ21hZ25pZnlpbmdfZ2xhc3MnLFxuICBwYXRoOiAnTTE2LjEyNCAxMy4wNTFhNS4xNTQgNS4xNTQgMCAxMTAtMTAuMzA4IDUuMTU0IDUuMTU0IDAgMDEwIDEwLjMwOE0xNi4xMTQgMGE3Ljg4NiA3Ljg4NiAwIDAwLTYuNDYgMTIuNDA3TDAgMjIuMDYgMS45NCAyNGw5LjY1My05LjY1M0E3Ljg4NiA3Ljg4NiAwIDEwMTYuMTEzIDAnXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdvZmZpY2UnLFxuICBwYXRoOiAnTTEyIDdWM0gydjE4aDIwVjdIMTJ6TTYgMTlINHYtMmgydjJ6bTAtNEg0di0yaDJ2MnptMC00SDRWOWgydjJ6bTAtNEg0VjVoMnYyem00IDEySDh2LTJoMnYyem0wLTRIOHYtMmgydjJ6bTAtNEg4VjloMnYyem0wLTRIOFY1aDJ2MnptMTAgMTJoLTh2LTJoMnYtMmgtMnYtMmgydi0yaC0yVjloOHYxMHptLTItOGgtMnYyaDJ2LTJ6bTAgNGgtMnYyaDJ2LTJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnbGluaycsXG4gIHBhdGg6ICdNMi4yOCAxMkEzLjcyMyAzLjcyMyAwIDAxNiA4LjI4aDQuOFY2SDZjLTMuMzEyIDAtNiAyLjY4OC02IDZzMi42ODggNiA2IDZoNC44di0yLjI4SDZBMy43MjMgMy43MjMgMCAwMTIuMjggMTJ6bTQuOTIgMS4yaDkuNnYtMi40SDcuMnYyLjR6TTE4IDZoLTQuOHYyLjI4SDE4QTMuNzIzIDMuNzIzIDAgMDEyMS43MiAxMiAzLjcyMyAzLjcyMyAwIDAxMTggMTUuNzJoLTQuOFYxOEgxOGMzLjMxMiAwIDYtMi42ODggNi02cy0yLjY4OC02LTYtNnonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICd3aW5kb3cnLFxuICBwYXRoOiAnTTMgMTNoOFYzSDN2MTB6bTAgOGg4di02SDN2NnptMTAgMGg4VjExaC04djEwem0wLTE4djZoOFYzaC04eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3Bob25lJyxcbiAgcGF0aDogJ000LjgyNyAxMC4zODdhMjAuMTk4IDIwLjE5OCAwIDAwOC43ODYgOC43ODZsMi45MzQtMi45MzNjLjM2LS4zNi44OTMtLjQ4IDEuMzYtLjMyYTE1LjIxIDE1LjIxIDAgMDA0Ljc2Ljc2Yy43MzMgMCAxLjMzMy42IDEuMzMzIDEuMzMzdjQuNjU0QzI0IDIzLjQgMjMuNCAyNCAyMi42NjcgMjQgMTAuMTQ3IDI0IDAgMTMuODUzIDAgMS4zMzMgMCAuNi42IDAgMS4zMzMgMEg2Yy43MzMgMCAxLjMzMy42IDEuMzMzIDEuMzMzIDAgMS42NjcuMjY3IDMuMjY3Ljc2IDQuNzYuMTQ3LjQ2Ny4wNC45ODctLjMzMyAxLjM2bC0yLjkzMyAyLjkzNHonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICd0YWcnLFxuICB2aWV3Qm94OiAnMCAwIDE4IDE4JyxcbiAgcGF0aDogJ00xNy40NjkgOC42MjJsLTguMS04LjFBMS43ODkgMS43ODkgMCAwMDguMSAwSDEuOEMuODEgMCAwIC44MSAwIDEuOHY2LjNjMCAuNDk1LjE5OC45NDUuNTMxIDEuMjc4bDguMSA4LjFjLjMyNC4zMjQuNzc0LjUyMiAxLjI2OS41MjJhMS43NiAxLjc2IDAgMDAxLjI2OS0uNTMxbDYuMy02LjNBMS43NiAxLjc2IDAgMDAxOCA5LjljMC0uNDk1LS4yMDctLjk1NC0uNTMxLTEuMjc4ek0zLjE1IDQuNWMtLjc0NyAwLTEuMzUtLjYwMy0xLjM1LTEuMzUgMC0uNzQ3LjYwMy0xLjM1IDEuMzUtMS4zNS43NDcgMCAxLjM1LjYwMyAxLjM1IDEuMzUgMCAuNzQ3LS42MDMgMS4zNS0xLjM1IDEuMzV6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnZG9jdW1lbnQnLFxuICBwYXRoOiAnTTQgNkgydjE0YzAgMS4xLjkgMiAyIDJoMTR2LTJINFY2em0xNi00SDhjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoMTJjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnptLTEgOUg5VjloMTB2MnptLTQgNEg5di0yaDZ2MnptNC04SDlWNWgxMHYyeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2NoZXZyb24nLFxuICB2aWV3Qm94OiAnMCAwIDcgOScsXG4gIGNvbXBsZXhDb250ZW50czogYDxnIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEgLTgpXCI+PHBhdGggZD1cIm0yLjY0MTcwMDQgOC0xLjE0MTcwMDQgMS4wNTc1IDMuNzA4NTAyMDIgMy40NDI1LTMuNzA4NTAyMDIgMy40NDI1IDEuMTQxNzAwNCAxLjA1NzUgNC44NTgyOTk2LTQuNXpcIi8+PC9nPmBcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3N1cHBvcnQnLFxuICBwYXRoOiAnTTEyLjUgMkM3LjgxIDIgNCA1LjgxIDQgMTAuNWMwIDQuNjkgMy44MSA4LjUgOC41IDguNWguNXYzYzQuODYtMi4zNCA4LTcgOC0xMS41QzIxIDUuODEgMTcuMTkgMiAxMi41IDJ6bTEgMTQuNWgtMnYtMmgydjJ6bTAtMy41aC0yYzAtMy4yNSAzLTMgMy01IDAtMS4xLS45LTItMi0ycy0yIC45LTIgMmgtMmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0YzAgMi41LTMgMi43NS0zIDV6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAneWV4dCcsXG4gIHZpZXdCb3g6ICcwIDAgMzAgMzAnLFxuICBwYXRoOiAnTTI1LjUxNyAyOC4xNDJ2LjA5NWgtLjIwNHYuOTA1aC0uMDY2di0uOTA1aC0uMTk3di0uMDk1aC40Njd6bS42NjcgMGguMDY2djFoLS4wNjZ2LS44MjVsLS4yNC41OTVoLS4wMTNsLS4yNC0uNTk1di44MjVoLS4wNjZ2LTFoLjA2NmwuMjQ3LjYxLjI0Ni0uNjF6TTE1IDI4LjhjNy42MjIgMCAxMy44LTYuMTc4IDEzLjgtMTMuOCAwLTcuNjIyLTYuMTc4LTEzLjgtMTMuOC0xMy44QzcuMzc4IDEuMiAxLjIgNy4zNzggMS4yIDE1YzAgNy42MjIgNi4xNzggMTMuOCAxMy44IDEzLjh6TTE1IDBjOC4yODQgMCAxNSA2LjcxNiAxNSAxNSAwIDguMjg0LTYuNzE2IDE1LTE1IDE1LTguMjg0IDAtMTUtNi43MTYtMTUtMTVDMCA2LjcxNiA2LjcxNiAwIDE1IDB6bS40NSAxNi42NXYtMS4yaDYuNnYxLjJoLTIuN3Y1LjRoLTEuMnYtNS40aC0yLjd6bS0xLjU5OS0xLjM1bC44NDkuODQ5LTIuNjAxIDIuNjAxIDIuNjAxIDIuNjAxLS44NDkuODQ5LTIuNjAxLTIuNjAxTDguNjQ5IDIyLjJsLS44NDktLjg0OSAyLjYwMS0yLjYwMUw3LjggMTYuMTQ5bC44NDktLjg0OSAyLjYwMSAyLjYwMSAyLjYwMS0yLjYwMXpNMTguNjc1IDlhMi4xNzUgMi4xNzUgMCAwMC0xLjg0NyAzLjMyM2wyLjk5NS0yLjk5NUEyLjE2MyAyLjE2MyAwIDAwMTguNjc1IDl6bTAgNS41NWEzLjM3NSAzLjM3NSAwIDExMi44MzMtNS4yMDlsLTMuNzg5IDMuNzg4YTIuMTc1IDIuMTc1IDAgMDAzLjEzLTEuOTU0aDEuMjAxYTMuMzc1IDMuMzc1IDAgMDEtMy4zNzUgMy4zNzV6bS03LjQyNS0zLjczNEwxMy43OCA3LjhsLjkyLjc3MS0yLjg1IDMuMzk3djIuNTgyaC0xLjJ2LTIuNTgyTDcuOCA4LjU3bC45Mi0uNzcxIDIuNTMgMy4wMTZ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncGluJyxcbiAgdmlld0JveDogJzAgMCAxMyAxOCcsXG4gIHBhdGg6ICdtOS4zNzUgMGMtMy41MjQ0NjQyOSAwLTYuMzc1IDIuODE3LTYuMzc1IDYuMyAwIDQuNzI1IDYuMzc1IDExLjcgNi4zNzUgMTEuN3M2LjM3NS02Ljk3NSA2LjM3NS0xMS43YzAtMy40ODMtMi44NTA1MzU3LTYuMy02LjM3NS02LjN6bS4wMDAwMDAxOCA4LjU1MDAwMDA3Yy0xLjI1Njc4NTc2IDAtMi4yNzY3ODU3OS0xLjAwOC0yLjI3Njc4NTc5LTIuMjVzMS4wMjAwMDAwMy0yLjI1IDIuMjc2Nzg1NzktMi4yNWMxLjI1Njc4NTcyIDAgMi4yNzY3ODU4MiAxLjAwOCAyLjI3Njc4NTgyIDIuMjVzLTEuMDIwMDAwMSAyLjI1LTIuMjc2Nzg1ODIgMi4yNXonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdnZWFyJyxcbiAgcGF0aDogJ00xMiAxMGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bTctN0g1YTIgMiAwIDAwLTIgMnYxNGEyIDIgMCAwMDIgMmgxNGEyIDIgMCAwMDItMlY1YTIgMiAwIDAwLTItMnptLTEuNzUgOWMwIC4yMy0uMDIuNDYtLjA1LjY4bDEuNDggMS4xNmMuMTMuMTEuMTcuMy4wOC40NWwtMS40IDIuNDJjLS4wOS4xNS0uMjcuMjEtLjQzLjE1bC0xLjc0LS43Yy0uMzYuMjgtLjc2LjUxLTEuMTguNjlsLS4yNiAxLjg1Yy0uMDMuMTctLjE4LjMtLjM1LjNoLTIuOGMtLjE3IDAtLjMyLS4xMy0uMzUtLjI5bC0uMjYtMS44NWMtLjQzLS4xOC0uODItLjQxLTEuMTgtLjY5bC0xLjc0LjdjLS4xNi4wNi0uMzQgMC0uNDMtLjE1bC0xLjQtMi40MmEuMzUzLjM1MyAwIDAxLjA4LS40NWwxLjQ4LTEuMTZjLS4wMy0uMjMtLjA1LS40Ni0uMDUtLjY5IDAtLjIzLjAyLS40Ni4wNS0uNjhsLTEuNDgtMS4xNmEuMzUzLjM1MyAwIDAxLS4wOC0uNDVsMS40LTIuNDJjLjA5LS4xNS4yNy0uMjEuNDMtLjE1bDEuNzQuN2MuMzYtLjI4Ljc2LS41MSAxLjE4LS42OWwuMjYtMS44NWMuMDMtLjE3LjE4LS4zLjM1LS4zaDIuOGMuMTcgMCAuMzIuMTMuMzUuMjlsLjI2IDEuODVjLjQzLjE4LjgyLjQxIDEuMTguNjlsMS43NC0uN2MuMTYtLjA2LjM0IDAgLjQzLjE1bDEuNCAyLjQyYy4wOS4xNS4wNS4zNC0uMDguNDVsLTEuNDggMS4xNmMuMDMuMjMuMDUuNDYuMDUuNjl6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnbGlnaHRfYnVsYicsXG4gIHZpZXdCb3g6ICcwIDAgMzIgMzUnLFxuICBwYXRoOiAnTTExLjU4NSAzMS4wNTZsOC4zOC0uNDkzdi0uOTg2bC04LjM4LjQ5M3pNMTEuNTg1IDMzLjAyOEwxNS43NzUgMzVsNC4xOS0xLjk3MlYzMS41NWwtOC4zOC40OTN2Ljk4NnptNi45MjYtLjQwN2wtMi43MzYgMS4yOS0yLjEzLTEuMDA0IDQuODY2LS4yODZ6TTE1Ljc3NSA3LjM5NGMtNC42MyAwLTguMzggMy4yMDUtOC4zOCA4LjM4IDAgNS4xNzcgNC4xOSA2LjkwMiA0LjE5IDEyLjgxOHYuNDkzbDguMzgtLjQ5M2MwLTUuOTE2IDQuMTktOC4xODggNC4xOS0xMi44MTdhOC4zOCA4LjM4IDAgMDAtOC4zOC04LjM4em01LjYxNyAxMy40OGMtMS4wMjUgMS44MzctMi4xNzQgMy44OTItMi4zODEgNi43ODZsLTYuNDQuMzhjLS4xMjktMy4wMS0xLjI5LTUuMDIxLTIuMzItNi44MDgtLjQ5My0uOC0uOTI4LTEuNjM2LTEuMjk5LTIuNWgxMy41NTZjLS4zMjUuNzA4LS43MDQgMS40MDMtMS4xMTYgMi4xNDJ6bTEuNDc5LTMuMTI4SDguNjI3YTcuNzkzIDcuNzkzIDAgMDEtLjI0Ny0xLjk3MWMwLTQuMzUzIDMuMDQyLTcuMzk1IDcuMzk1LTcuMzk1YTcuMzk0IDcuMzk0IDAgMDE3LjM5NCA3LjM5NSA2LjczOSA2LjczOSAwIDAxLS4zIDEuOTcxaC4wMDJ6TTI2LjYyIDE1LjI4Mmg0LjkzdjFoLTQuOTN6TTIzLjA5NCA3Ljc1NmwyLjA5MS0yLjA5MS42OTguNjk3LTIuMDkyIDIuMDkyek0xNS4yODIgMGgxdjQuOTNoLTF6TTUuNjY2IDYuMzYybC42OTctLjY5NyAyLjA5MSAyLjA5MS0uNjk3LjY5N3pNMCAxNS4yODJoNC45M3YxSDB6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncmVjZWlwdCcsXG4gIHZpZXdCb3g6ICcwIDAgMTggMTgnLFxuICBwYXRoOiAnTTguOTkxIDBDNC4wMjMgMCAwIDQuMDMyIDAgOXM0LjAyMyA5IDguOTkxIDlDMTMuOTY4IDE4IDE4IDEzLjk2OCAxOCA5cy00LjAzMi05LTkuMDA5LTl6bTMuODE2IDE0LjRMOSAxMi4xMDUgNS4xOTMgMTQuNGwxLjAwOC00LjMyOS0zLjM1Ny0yLjkwNyA0LjQyOC0uMzc4TDkgMi43bDEuNzI4IDQuMDc3IDQuNDI4LjM3OC0zLjM1NyAyLjkwN3onXG59KTtcbiIsImltcG9ydCB0aHVtYkljb24gZnJvbSAnLi90aHVtYi5qcyc7XG5pbXBvcnQgcmVjZWlwdEljb24gZnJvbSAnLi9yZWNlaXB0LmpzJztcbmltcG9ydCBwYW50aGVvbkljb24gZnJvbSAnLi9wYW50aGVvbi5qcyc7XG5pbXBvcnQgbWljSWNvbiBmcm9tICcuL21pYy5qcyc7XG5pbXBvcnQgZGlyZWN0aW9uc0ljb24gZnJvbSAnLi9kaXJlY3Rpb25zLmpzJztcbmltcG9ydCBjYWxlbmRhckljb24gZnJvbSAnLi9jYWxlbmRhci5qcyc7XG5pbXBvcnQgY2FsbG91dEljb24gZnJvbSAnLi9jYWxsb3V0LmpzJztcbmltcG9ydCBpbmZvSWNvbiBmcm9tICcuL2luZm8uanMnO1xuaW1wb3J0IGJyaWVmY2FzZUljb24gZnJvbSAnLi9icmllZmNhc2UuanMnO1xuaW1wb3J0IGthYm9iSWNvbiBmcm9tICcuL2thYm9iLmpzJztcbmltcG9ydCBwZXJzb25JY29uIGZyb20gJy4vcGVyc29uLmpzJztcbmltcG9ydCBtYWduaWZ5aW5nR2xhc3NJY29uIGZyb20gJy4vbWFnbmlmeWluZ19nbGFzcy5qcyc7XG5pbXBvcnQgb2ZmaWNlSWNvbiBmcm9tICcuL29mZmljZS5qcyc7XG5pbXBvcnQgbGlua0ljb24gZnJvbSAnLi9saW5rLmpzJztcbmltcG9ydCB3aW5kb3dJY29uIGZyb20gJy4vd2luZG93LmpzJztcbmltcG9ydCBwaG9uZUljb24gZnJvbSAnLi9waG9uZS5qcyc7XG5pbXBvcnQgdGFnSWNvbiBmcm9tICcuL3RhZy5qcyc7XG5pbXBvcnQgZG9jdW1lbnRJY29uIGZyb20gJy4vZG9jdW1lbnQuanMnO1xuaW1wb3J0IGNoZXZyb25JY29uIGZyb20gJy4vY2hldnJvbi5qcyc7XG5pbXBvcnQgc3VwcG9ydEljb24gZnJvbSAnLi9zdXBwb3J0LmpzJztcbmltcG9ydCB5ZXh0SWNvbiBmcm9tICcuL3lleHQuanMnO1xuaW1wb3J0IHBpbkljb24gZnJvbSAnLi9waW4uanMnO1xuaW1wb3J0IGdlYXJJY29uIGZyb20gJy4vZ2Vhci5qcyc7XG5pbXBvcnQgbGlnaHRCdWxiSWNvbiBmcm9tICcuL2xpZ2h0X2J1bGIuanMnO1xuaW1wb3J0IHN0YXJJY29uIGZyb20gJy4vc3Rhci5qcyc7XG5cbmNvbnN0IGljb25zQXJyYXkgPSBbXG4gIHRodW1iSWNvbixcbiAgcmVjZWlwdEljb24sXG4gIHBhbnRoZW9uSWNvbixcbiAgbWljSWNvbixcbiAgZGlyZWN0aW9uc0ljb24sXG4gIGNhbGVuZGFySWNvbixcbiAgY2FsbG91dEljb24sXG4gIGluZm9JY29uLFxuICBicmllZmNhc2VJY29uLFxuICBrYWJvYkljb24sXG4gIHBlcnNvbkljb24sXG4gIG1hZ25pZnlpbmdHbGFzc0ljb24sXG4gIG9mZmljZUljb24sXG4gIGxpbmtJY29uLFxuICB3aW5kb3dJY29uLFxuICBwaG9uZUljb24sXG4gIHRhZ0ljb24sXG4gIGRvY3VtZW50SWNvbixcbiAgY2hldnJvbkljb24sXG4gIHN1cHBvcnRJY29uLFxuICB5ZXh0SWNvbixcbiAgcGluSWNvbixcbiAgZ2Vhckljb24sXG4gIGxpZ2h0QnVsYkljb25cbl07XG5cbmNvbnN0IEljb25zID0ge307XG5cbmljb25zQXJyYXkuZm9yRWFjaChpY29uID0+IHtcbiAgSWNvbnNbaWNvbi5uYW1lXSA9IGljb24ubWFya3VwKCk7XG59KTtcblxuSWNvbnMuZGVmYXVsdCA9IHN0YXJJY29uLm1hcmt1cCgpO1xuXG5leHBvcnQgZGVmYXVsdCBJY29ucztcbiIsIi8qKiBAbW9kdWxlIEljb25Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEljb25zIGZyb20gJy4uLy4uL2ljb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBJY29uQ29tcG9uZW50XG4gICAqIEBwYXJhbSBvcHRzXG4gICAqIEBwYXJhbSBvcHRzLmljb25OYW1lIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBvcHRzLmN1c3RvbUljb24ge3N0cmluZ31cbiAgICogQHBhcmFtIG9wdHMuaWNvblVybCB7c3RyaW5nfVxuICAgKi9cbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogbmFtZSBvZiBhbiBpY29uIGZyb20gdGhlIGRlZmF1bHQgaWNvbiBzZXRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuaWNvbk5hbWUgPSBvcHRzLmljb25OYW1lIHx8ICdkZWZhdWx0JztcblxuICAgIC8qKlxuICAgICAqIHRoZSBtYXJrdXAgZm9yIGEgZnVsbHkgY3VzdG9tIGljb25cbiAgICAgKiBAdHlwZSB7KnxudWxsfVxuICAgICAqL1xuICAgIHRoaXMuY3VzdG9tSWNvbiA9IG9wdHMuY3VzdG9tSWNvbiB8fCBudWxsO1xuICAgIC8qKlxuICAgICAqIHRoZSB1cmwgdG8gYSBjdXN0b20gaW1hZ2UgaWNvblxuICAgICAqIEB0eXBlIHtudWxsfVxuICAgICAqL1xuICAgIHRoaXMuaWNvblVybCA9IG9wdHMuaWNvblVybCB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldHRlciBmb3IgdGhlIGltYWdlIHBhc3RlZCB0byBoYW5kbGViYXJzXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgaW1hZ2UgKCkge1xuICAgIGlmICh0aGlzLmN1c3RvbUljb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmN1c3RvbUljb247XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaWNvblVybCkge1xuICAgICAgcmV0dXJuIGA8aW1nIHNyYz1cIiR7dGhpcy5pY29uVXJsfVwiIGFsdD1cIlwiIGNsYXNzPVwiSWNvbi1pbWFnZVwiPmA7XG4gICAgfVxuXG4gICAgaWYgKEljb25zW3RoaXMuaWNvbk5hbWVdKSB7XG4gICAgICByZXR1cm4gSWNvbnNbdGhpcy5pY29uTmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIEljb25zLmRlZmF1bHQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnSWNvbkNvbXBvbmVudCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ2ljb25zL2ljb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIGFsbG93aW5nIGR1cGxpY2F0ZXNcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogb3ZlcnJpZGVzIGRlZmF1bHQgZnVuY3Rpb25hbGl0eSB0byBwcm92aWRlIG5hbWUgYW5kIG1hcmt1cFxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7SWNvbkNvbXBvbmVudH1cbiAgICovXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgaW1hZ2U6IHRoaXMuaW1hZ2UsXG4gICAgICBuYW1lOiB0aGlzLmljb25OYW1lID8gdGhpcy5pY29uTmFtZSA6ICdjdXN0b20nXG4gICAgfSkpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tICcuL2NvbXBvbmVudG1hbmFnZXInO1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcblxuaW1wb3J0IE5hdmlnYXRpb25Db21wb25lbnQgZnJvbSAnLi9uYXZpZ2F0aW9uL25hdmlnYXRpb25jb21wb25lbnQnO1xuXG5pbXBvcnQgU2VhcmNoQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL3NlYXJjaGNvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyU2VhcmNoQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL2ZpbHRlcnNlYXJjaGNvbXBvbmVudCc7XG5pbXBvcnQgQXV0b0NvbXBsZXRlQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL2F1dG9jb21wbGV0ZWNvbXBvbmVudCc7XG5cbmltcG9ydCBGaWx0ZXJCb3hDb21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL2ZpbHRlcmJveGNvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyT3B0aW9uc0NvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZmlsdGVyb3B0aW9uc2NvbXBvbmVudCc7XG5pbXBvcnQgUmFuZ2VGaWx0ZXJDb21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL3JhbmdlZmlsdGVyY29tcG9uZW50JztcbmltcG9ydCBEYXRlUmFuZ2VGaWx0ZXJDb21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL2RhdGVyYW5nZWZpbHRlcmNvbXBvbmVudCc7XG5pbXBvcnQgRHluYW1pY0ZpbHRlcnNDb21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL2R5bmFtaWNmaWx0ZXJzY29tcG9uZW50JztcbmltcG9ydCBHZW9Mb2NhdGlvbkNvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZ2VvbG9jYXRpb25jb21wb25lbnQnO1xuXG5pbXBvcnQgRGlyZWN0QW5zd2VyQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9kaXJlY3RhbnN3ZXJjb21wb25lbnQnO1xuaW1wb3J0IFJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Jlc3VsdHNjb21wb25lbnQnO1xuaW1wb3J0IEFjY29yZGlvblJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2FjY29yZGlvbnJlc3VsdHNjb21wb25lbnQuanMnO1xuaW1wb3J0IFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHNjb21wb25lbnQnO1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50JztcblxuaW1wb3J0IFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9wZW9wbGVyZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmltcG9ydCBNYXBDb21wb25lbnQgZnJvbSAnLi9tYXAvbWFwY29tcG9uZW50JztcbmltcG9ydCBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgZnJvbSAnLi9xdWVzdGlvbnMvcXVlc3Rpb25zdWJtaXNzaW9uY29tcG9uZW50JztcblxuaW1wb3J0IEljb25Db21wb25lbnQgZnJvbSAnLi9pY29ucy9pY29uY29tcG9uZW50LmpzJztcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9NQU5BR0VSID0gbmV3IENvbXBvbmVudE1hbmFnZXIoKVxuLy8gQ29yZSBDb21wb25lbnRcbiAgLnJlZ2lzdGVyKENvbXBvbmVudClcblxuLy8gTmF2aWdhdGlvbiBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihOYXZpZ2F0aW9uQ29tcG9uZW50KVxuXG4vLyBTZWFyY2ggQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoU2VhcmNoQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRmlsdGVyU2VhcmNoQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoQXV0b0NvbXBsZXRlQ29tcG9uZW50KVxuXG4vLyBGaWx0ZXIgQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoRmlsdGVyQm94Q29tcG9uZW50KVxuICAucmVnaXN0ZXIoRmlsdGVyT3B0aW9uc0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFJhbmdlRmlsdGVyQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRGF0ZVJhbmdlRmlsdGVyQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRHluYW1pY0ZpbHRlcnNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihHZW9Mb2NhdGlvbkNvbXBvbmVudClcblxuLy8gUmVzdWx0cyBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihEaXJlY3RBbnN3ZXJDb21wb25lbnQpXG4gIC5yZWdpc3RlcihVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoUmVzdWx0c0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFJlc3VsdHNJdGVtQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQpXG4gIC5yZWdpc3RlcihFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQpXG5cbiAgLnJlZ2lzdGVyKE1hcENvbXBvbmVudClcblxuLy8gUXVlc3Rpb25zIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudClcblxuLy8gSGVscGVyIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKEljb25Db21wb25lbnQpO1xuIiwiLyoqIEBtb2R1bGUgVGVtcGxhdGVMb2FkZXIgKi9cblxuaW1wb3J0IERPTSBmcm9tICcuLi9kb20vZG9tJztcbmltcG9ydCB7IENPTVBJTEVEX1RFTVBMQVRFU19VUkwgfSBmcm9tICcuLi8uLi9jb3JlL2NvbnN0YW50cyc7XG5cbi8qKlxuICogVGVtcGxhdGVMb2FkZXIgZXhwb3NlcyBhbiBpbnRlcmZhY2UgZm9yIGxvYWRpbmcgdGVtcGxhdGVzIGFzeW5jaHJvbm91c2x5XG4gKiBmcm9tIHRoZSBzZXJ2ZXIgYW5kIHJlZ2lzdGVycyB0aGVtIHdpdGggdGhlIHByb3BlciByZW5kZXJlci5cbiAqIEl0IGFsc28gYWxsb3dzIHlvdSB0byBhc3NpZ24gdGhlbSBzeW5jaHJvbm91c2x5LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZUxvYWRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBpZiAoIVRlbXBsYXRlTG9hZGVyLnNldEluc3RhbmNlKHRoaXMpKSB7XG4gICAgICByZXR1cm4gVGVtcGxhdGVMb2FkZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgdXJsIHRvIGZldGNoIGNvbXBpbGVkIHRlbXBsYXRlcyBmcm9tXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlVXJsID0gY29uZmlnLnRlbXBsYXRlVXJsIHx8IENPTVBJTEVEX1RFTVBMQVRFU19VUkw7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB7fTtcbiAgICB0aGlzLl9vbkxvYWRlZCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHRoaXMuX2luaXQoKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRJbnN0YW5jZSAoaW5zdGFuY2UpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UgKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgX2luaXQgKCkge1xuICAgIHRoaXMuZmV0Y2hUZW1wbGF0ZXMoKTtcbiAgfVxuXG4gIGZldGNoVGVtcGxhdGVzICgpIHtcbiAgICAvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgdGVtcGxhdGVzIGxvYWRlZCwgZG8gbm90aGluZ1xuICAgIGxldCBub2RlID0gRE9NLnF1ZXJ5KCcjeWV4dC1hbnN3ZXJzLXRlbXBsYXRlcycpO1xuICAgIGlmIChub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSW5qZWN0IGEgc2NyaXB0IHRvIGZldGNoIHRoZSBjb21waWxlZCB0ZW1wbGF0ZXMsXG4gICAgLy8gd3JhcHBpbmcgaXQgYSBQcm9taXNlIGZvciBjbGVhbmxpbmVzc1xuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBzY3JpcHQgPSBET00uY3JlYXRlRWwoJ3NjcmlwdCcsIHtcbiAgICAgICAgaWQ6ICd5ZXh0LWFuc3dlcnMtdGVtcGxhdGVzJyxcbiAgICAgICAgb25sb2FkOiByZXNvbHZlLFxuICAgICAgICBvbmVycm9yOiByZWplY3QsXG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBzcmM6IHRoaXMuX3RlbXBsYXRlVXJsXG4gICAgICB9KTtcblxuICAgICAgRE9NLmFwcGVuZCgnYm9keScsIHNjcmlwdCk7XG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgLy8gVE9ETyhiaWxseSkgSW1wbG1lbmV0IGVycm9yIGhhbmRsaW5nIGhlcmUgKGUuZy4gcmVxdWVzdCBjb3VsZCBmYWlsKVxuICAgICAgICBjb25zb2xlLmxvZygnVGVtcGxhdGVzIGxvYWRlZCBzdWNjZXNzZnVsbHkhJyk7XG4gICAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZWdpc3RlciB0aGUgdGVtcGxhdGVzIGludGVybmFsbHkgc28gdGhhdCB0aGV5IGNhbiBiZSBsYXRlciBjb25zdW1lZFxuICAgKiAoZS5nLiBieSBjb21wb25lbnRzIGFuZCByZW5kZXJlcnMpIHdpdGggY29udmllbmllbmNlLlxuICAgKlxuICAgKiBgZmV0Y2hUZW1wbGF0ZXNgIHdpbGwgYXV0b21hdGljYWxseSBjYWxsIHRoaXMsIHByb3ZpZGluZyB0aGUgY29tcGlsZWQgdGVtcGxhdGVzIGZyb20gdGhlIHNlcnZlci5cbiAgICovXG4gIHJlZ2lzdGVyICh0ZW1wbGF0ZXMpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXM7XG5cbiAgICAvLyBOb3RpZnkgb3VyIGNvbnN1bWVycyB0aGF0IHRoZSB0ZW1wbGF0ZXMgYXJlIGhlcmUgOilcbiAgICB0aGlzLl9vbkxvYWRlZCh0aGlzLl90ZW1wbGF0ZXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb25Mb2FkZWQgKGNiKSB7XG4gICAgdGhpcy5fb25Mb2FkZWQgPSBjYjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCAodGVtcGxhdGVOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlc1t0ZW1wbGF0ZU5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4gVGhlIGludGVybmFsIHRlbXBsYXRlIGNvbGxlY3Rpb25cbiAgICovXG4gIGdldFRlbXBsYXRlcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlcztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuZXhwb3J0IHsgQ09NUE9ORU5UX01BTkFHRVIgfSBmcm9tICcuL2NvbXBvbmVudHMvY29uc3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBET00gfSBmcm9tICcuL2RvbS9kb20nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2hQYXJhbXMgfSBmcm9tICcuL2RvbS9zZWFyY2hwYXJhbXMnO1xuXG5leHBvcnQgeyBSZW5kZXJlcnMgfSBmcm9tICcuL3JlbmRlcmluZy9jb25zdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRlbXBsYXRlTG9hZGVyIH0gZnJvbSAnLi9yZW5kZXJpbmcvdGVtcGxhdGVsb2FkZXInO1xuIiwiLyoqIEBtb2R1bGUgRXJyb3JSZXBvcnRlciAqL1xuXG5pbXBvcnQgeyBBbnN3ZXJzQmFzZUVycm9yIH0gZnJvbSAnLi9lcnJvcnMnO1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IHsgTElCX1ZFUlNJT04gfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEVycm9yUmVwb3J0ZXIgaXMgdXNlZCBmb3IgcmVwb3J0aW5nIGVycm9ycyB0byB0aGUgc2VydmVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yUmVwb3J0ZXIge1xuICBjb25zdHJ1Y3RvciAoYXBpS2V5LCBhbnN3ZXJzS2V5KSB7XG4gICAgLyoqXG4gICAgICogVGhlIGFwaUtleSB0byB1c2UgZm9yIHJlcG9ydGluZ1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5hcGlLZXkgPSBhcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYW5zd2Vyc0tleSB0byB1c2Ugd2hlbiByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuYW5zd2Vyc0tleSA9IGFuc3dlcnNLZXk7XG4gIH1cblxuICAvKipcbiAgICogcmVwb3J0IHNlbmRzIGEgbmV0d29yayByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdG8gYmUgbG9nZ2VkXG4gICAqIEBwYXJhbSB7QW5zd2Vyc0Jhc2VFcnJvcn0gVGhlIGVycm9yIHRvIGJlIHJlcG9ydGVkXG4gICAqL1xuICByZXBvcnQgKGVycikge1xuICAgIGlmICghKGVyciBpbnN0YW5jZW9mIEFuc3dlcnNCYXNlRXJyb3IpIHx8IGVyci5yZXBvcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVyci5yZXBvcnRlZCA9IHRydWU7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9lcnJvcnMnLFxuICAgICAgYXBpS2V5OiB0aGlzLmFwaUtleSxcbiAgICAgIHZlcnNpb246IDIwMTkwMzAxLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdlcnJvcic6IGVyci50b0pzb24oKSxcbiAgICAgICAgJ2xpYlZlcnNpb24nOiBMSUJfVkVSU0lPTixcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLmFuc3dlcnNLZXlcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlcXVlc3QuZ2V0KClcbiAgICAgIC5jYXRjaChjb25zb2xlLmVycik7XG5cbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG4iLCJpbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uL2RvbS9zZWFyY2hwYXJhbXMnO1xuaW1wb3J0IHsgQW5zd2Vyc1N0b3JhZ2VFcnJvciB9IGZyb20gJy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5cbi8qKiBAbW9kdWxlIFBlcnNpc3RlbnRTdG9yYWdlICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcnNpc3RlbnRTdG9yYWdlIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgcGFyYW1zIG1vZGVsXG4gICAgICogQHR5cGUge1NlYXJjaFBhcmFtc31cbiAgICAgKi9cbiAgICB0aGlzLl9wYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IGhpc3RvcnkgZWRpdCB0aW1lciwgaWYgYW55XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9oaXN0b3J5VGltZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxpc3Qgb2YgbGlzdGVuZXJzIHRvIGV2ZXJ5IHN0b3JhZ2UgdXBkYXRlXG4gICAgICogQHR5cGUge2Z1bmN0aW9uW119XG4gICAgICovXG4gICAgdGhpcy5fdXBkYXRlTGlzdGVuZXIgPSBjb25maWcudXBkYXRlTGlzdGVuZXIgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBsaXN0ZW5lcnMgdG8gc3RvcmFnZSByZXNldHNcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb25bXX1cbiAgICAgKi9cbiAgICB0aGlzLl9yZXNldExpc3RlbmVyID0gY29uZmlnLnJlc2V0TGlzdGVuZXIgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICB3aW5kb3cub25wb3BzdGF0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX3BhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuICAgICAgdGhpcy5fY2FsbExpc3RlbmVyKHRoaXMuX3VwZGF0ZUxpc3RlbmVyKTtcbiAgICAgIHRoaXMuX2NhbGxMaXN0ZW5lcih0aGlzLl9yZXNldExpc3RlbmVyKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydCB0aGUgZ2l2ZW4ga2V5L3ZhbHVlIHBhaXIgaW50byBzdG9yYWdlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSB0byBpbnNlcnQgdGhlIGRhdGEgaW5cbiAgICogQHBhcmFtIHsqfSBkYXRhIFRoZSBkYXRhIHRvIGluc2VydFxuICAgKi9cbiAgc2V0IChrZXksIGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzU3RvcmFnZUVycm9yKCdTdG9yYWdlIGRhdGEga2V5IG11c3QgYmUgYSBzdHJpbmcnLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIGxldCBuZXdEYXRhID0gZGF0YTtcbiAgICBpZiAodHlwZW9mIGRhdGEgIT09ICdzdHJpbmcnKSB7XG4gICAgICBuZXdEYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHRoaXMuX3BhcmFtcy5zZXQoa2V5LCBuZXdEYXRhKTtcbiAgICB0aGlzLl91cGRhdGVIaXN0b3J5KCk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHRoZSBnaXZlbiBrZXkgZnJvbSBzdG9yYWdlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSB0byBkZWxldGVcbiAgICovXG4gIGRlbGV0ZSAoa2V5KSB7XG4gICAgdGhpcy5fcGFyYW1zLmRlbGV0ZShrZXkpO1xuICAgIHRoaXMuX3VwZGF0ZUhpc3RvcnkoKTtcbiAgfVxuXG4gIF91cGRhdGVIaXN0b3J5ICgpIHtcbiAgICBpZiAodGhpcy5faGlzdG9yeVRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5faGlzdG9yeVRpbWVyKTtcbiAgICB9XG5cbiAgICAvLyBiYXRjaCB1cGRhdGUgY2FsbHMgYWNyb3NzIGNvbXBvbmVudHMgdG8gYXZvaWQgdXBkYXRpbmcgdGhlIHVybCB0b28gbXVjaFxuICAgIHRoaXMuX2hpc3RvcnlUaW1lciA9IHNldFRpbWVvdXQoXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2hpc3RvcnlUaW1lciA9IG51bGw7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBgPyR7dGhpcy5fcGFyYW1zLnRvU3RyaW5nKCl9YCk7XG4gICAgICAgIHRoaXMuX2NhbGxMaXN0ZW5lcih0aGlzLl91cGRhdGVMaXN0ZW5lcik7XG4gICAgICB9LFxuICAgICAgMTAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2UgdGhlIGdpdmVuIGxpc3Qgb2YgY2FsbGJhY2tzIHdpdGggdGhlIGN1cnJlbnQgc3RvcmFnZSBkYXRhXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb25bXX0gbGlzdGVuZXJzIFRoZSBjYWxsYmFja3MgdG8gaW52b2tlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY2FsbExpc3RlbmVyIChsaXN0ZW5lcikge1xuICAgIGxpc3RlbmVyKHRoaXMuZ2V0QWxsKCksIHRoaXMuX3BhcmFtcy50b1N0cmluZygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIHRoZSBrZXkvdmFsdWUgcGFpcnMgaW4gc3RvcmFnZVxuICAgKi9cbiAgZ2V0QWxsICgpIHtcbiAgICBjb25zdCBhbGxQYXJhbXMgPSB7fTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgdGhpcy5fcGFyYW1zLmVudHJpZXMoKSkge1xuICAgICAgYWxsUGFyYW1zW2tleV0gPSB2YWw7XG4gICAgfVxuICAgIHJldHVybiBhbGxQYXJhbXM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbmltcG9ydCBDb3JlIGZyb20gJy4vY29yZS9jb3JlJztcblxuaW1wb3J0IHtcbiAgVGVtcGxhdGVMb2FkZXIsXG4gIENPTVBPTkVOVF9NQU5BR0VSLFxuICBSZW5kZXJlcnMsXG4gIERPTVxufSBmcm9tICcuL3VpL2luZGV4JztcblxuaW1wb3J0IEVycm9yUmVwb3J0ZXIgZnJvbSAnLi9jb3JlL2Vycm9ycy9lcnJvcnJlcG9ydGVyJztcbmltcG9ydCB7IEFuYWx5dGljc1JlcG9ydGVyIH0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCBQZXJzaXN0ZW50U3RvcmFnZSBmcm9tICcuL3VpL3N0b3JhZ2UvcGVyc2lzdGVudHN0b3JhZ2UnO1xuaW1wb3J0IEdsb2JhbFN0b3JhZ2UgZnJvbSAnLi9jb3JlL3N0b3JhZ2UvZ2xvYmFsc3RvcmFnZSc7XG5cbi8qKlxuICogVGhlIG1haW4gQW5zd2VycyBpbnRlcmZhY2VcbiAqL1xuY2xhc3MgQW5zd2VycyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBpZiAoIUFuc3dlcnMuc2V0SW5zdGFuY2UodGhpcykpIHtcbiAgICAgIHJldHVybiBBbnN3ZXJzLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2Ugb2YgdGhlIHJlbmRlcmVyIHRvIHVzZSBmb3IgdGhlIGNvbXBvbmVudHNcbiAgICAgKiBUaGlzIGlzIHByb3ZpZGVkIGR1cmluZyBpbml0aWFsaXphdGlvbi5cbiAgICAgKiBAdHlwZSB7UmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcnMuSGFuZGxlYmFycygpO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCBtYW5hZ2VyXG4gICAgICogQHR5cGUge0NvbXBvbmVudE1hbmFnZXJ9XG4gICAgICovXG4gICAgdGhpcy5jb21wb25lbnRzID0gQ09NUE9ORU5UX01BTkFHRVI7XG5cbiAgICAvKipcbiAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGludm9rZSBvbmNlIHRoZSBsaWJyYXJ5IGlzIHJlYWR5LlxuICAgICAqIFR5cGljYWxseSBmaXJlZCBhZnRlciB0ZW1wbGF0ZXMgYXJlIGZldGNoZWQgZnJvbSBzZXJ2ZXIgZm9yIHJlbmRlcmluZy5cbiAgICAgKi9cbiAgICB0aGlzLl9vblJlYWR5ID0gZnVuY3Rpb24gKCkge307XG4gIH1cblxuICBzdGF0aWMgc2V0SW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIGluaXQgKGNvbmZpZykge1xuICAgIGNvbnN0IGdsb2JhbFN0b3JhZ2UgPSBuZXcgR2xvYmFsU3RvcmFnZSgpO1xuICAgIGNvbnN0IHBlcnNpc3RlbnRTdG9yYWdlID0gbmV3IFBlcnNpc3RlbnRTdG9yYWdlKHtcbiAgICAgIHVwZGF0ZUxpc3RlbmVyOiBjb25maWcub25TdGF0ZUNoYW5nZSxcbiAgICAgIHJlc2V0TGlzdGVuZXI6IGRhdGEgPT4gZ2xvYmFsU3RvcmFnZS5zZXRBbGwoZGF0YSlcbiAgICB9KTtcbiAgICBnbG9iYWxTdG9yYWdlLnNldEFsbChwZXJzaXN0ZW50U3RvcmFnZS5nZXRBbGwoKSk7XG5cbiAgICBjb25zdCBjb3JlID0gbmV3IENvcmUoe1xuICAgICAgYXBpS2V5OiBjb25maWcuYXBpS2V5LFxuICAgICAgZ2xvYmFsU3RvcmFnZTogZ2xvYmFsU3RvcmFnZSxcbiAgICAgIHBlcnNpc3RlbnRTdG9yYWdlOiBwZXJzaXN0ZW50U3RvcmFnZSxcbiAgICAgIGFuc3dlcnNLZXk6IGNvbmZpZy5hbnN3ZXJzS2V5LFxuICAgICAgZmllbGRGb3JtYXR0ZXJzOiBjb25maWcuZmllbGRGb3JtYXR0ZXJzLFxuICAgICAgbG9jYWxlOiBjb25maWcubG9jYWxlXG4gICAgfSk7XG5cbiAgICBpZiAoY29uZmlnLm9uU3RhdGVDaGFuZ2UgJiYgdHlwZW9mIGNvbmZpZy5vblN0YXRlQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25maWcub25TdGF0ZUNoYW5nZShwZXJzaXN0ZW50U3RvcmFnZS5nZXRBbGwoKSwgd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSkpO1xuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1xuICAgICAgLnNldENvcmUoY29yZSlcbiAgICAgIC5zZXRSZW5kZXJlcih0aGlzLnJlbmRlcmVyKTtcblxuICAgIGlmIChjb25maWcuYnVzaW5lc3NJZCkge1xuICAgICAgdGhpcy5jb21wb25lbnRzLnNldEFuYWx5dGljc1JlcG9ydGVyKFxuICAgICAgICBuZXcgQW5hbHl0aWNzUmVwb3J0ZXIoXG4gICAgICAgICAgY29yZSxcbiAgICAgICAgICBjb25maWcuYW5zd2Vyc0tleSxcbiAgICAgICAgICBjb25maWcuYnVzaW5lc3NJZCxcbiAgICAgICAgICBjb25maWcuYW5hbHl0aWNzT3B0aW9ucylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5fb25SZWFkeSA9IGNvbmZpZy5vblJlYWR5IHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgaWYgKGNvbmZpZy51c2VUZW1wbGF0ZXMgPT09IGZhbHNlIHx8IGNvbmZpZy50ZW1wbGF0ZUJ1bmRsZSkge1xuICAgICAgaWYgKGNvbmZpZy50ZW1wbGF0ZUJ1bmRsZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmluaXQoY29uZmlnLnRlbXBsYXRlQnVuZGxlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fb25SZWFkeSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gVGVtcGxhdGVzIGFyZSBjdXJyZW50bHkgZG93bmxvYWRlZCBzZXBhcmF0ZWx5IGZyb20gdGhlIENPUkUgYW5kIFVJIGJ1bmRsZS5cbiAgICAvLyBGdXR1cmUgZW5oYW5jZW1lbnQgaXMgdG8gc2hpcCB0aGUgY29tcG9uZW50cyB3aXRoIHRlbXBsYXRlcyBpbiBhIHNlcGFyYXRlIGJ1bmRsZS5cbiAgICB0aGlzLnRlbXBsYXRlcyA9IG5ldyBUZW1wbGF0ZUxvYWRlcih7XG4gICAgICB0ZW1wbGF0ZVVybDogY29uZmlnLnRlbXBsYXRlVXJsXG4gICAgfSkub25Mb2FkZWQoKHRlbXBsYXRlcykgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5pbml0KHRlbXBsYXRlcyk7XG5cbiAgICAgIHRoaXMuX29uUmVhZHkoKTtcbiAgICB9KTtcblxuICAgIGlmICghY29uZmlnLnN1cHByZXNzRXJyb3JSZXBvcnRzKSB7XG4gICAgICB0aGlzLl9lcnJvclJlcG9ydGVyID0gbmV3IEVycm9yUmVwb3J0ZXIoY29uZmlnLmFwaUtleSwgY29uZmlnLmFuc3dlcnNLZXkpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZSA9PiB0aGlzLl9lcnJvclJlcG9ydGVyLnJlcG9ydChlLmVycm9yKSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndW5oYW5kbGVkcmVqZWN0aW9uJywgZSA9PiB0aGlzLl9lcnJvclJlcG9ydGVyLnJlcG9ydChlLmVycm9yKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkb21SZWFkeSAoY2IpIHtcbiAgICBET00ub25SZWFkeShjYik7XG4gIH1cblxuICBvblJlYWR5IChjYikge1xuICAgIHRoaXMuX29uUmVhZHkgPSBjYjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZENvbXBvbmVudCAodHlwZSwgb3B0cykge1xuICAgIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdHMgPSB7XG4gICAgICAgIGNvbnRhaW5lcjogb3B0c1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHMuY3JlYXRlKHR5cGUsIG9wdHMpLm1vdW50KCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjcmVhdGVDb21wb25lbnQgKG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzLmNyZWF0ZSgnQ29tcG9uZW50Jywgb3B0cykubW91bnQoKTtcbiAgfVxuXG4gIHJlZ2lzdGVySGVscGVyIChuYW1lLCBjYikge1xuICAgIHRoaXMucmVuZGVyZXIucmVnaXN0ZXJIZWxwZXIobmFtZSwgY2IpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmNvbnN0IEFOU1dFUlMgPSBuZXcgQW5zd2VycygpO1xuZXhwb3J0IGRlZmF1bHQgQU5TV0VSUztcbiJdLCJuYW1lcyI6WyJNZXRob2RzIiwiR0VUIiwiUE9TVCIsIlBVVCIsIkRFTEVURSIsIkh0dHBSZXF1ZXN0ZXIiLCJ1cmwiLCJkYXRhIiwib3B0cyIsInJlcXVlc3QiLCJlbmNvZGVQYXJhbXMiLCJPYmplY3QiLCJhc3NpZ24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNyZWRlbnRpYWxzIiwidW5kZWZpbmVkIiwibWV0aG9kIiwiZmV0Y2giLCJuYXZpZ2F0b3IiLCJzZW5kQmVhY29uIiwicGFyYW1zIiwiaGFzUGFyYW0iLCJpbmRleE9mIiwic2VhcmNoUXVlcnkiLCJrZXkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJMSUJfVkVSU0lPTiIsIkFQSV9CQVNFX1VSTCIsIkNPTVBJTEVEX1RFTVBMQVRFU19VUkwiLCJBTkFMWVRJQ1NfQkFTRV9VUkwiLCJTZWFyY2hQYXJhbXMiLCJfcGFyYW1zIiwid2luZG93IiwiVVJMU2VhcmNoUGFyYW1zIiwicGFyc2UiLCJzZWFyY2giLCJzbGljZSIsImVuY29kZWRQYXJhbXMiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJrZXlWYWwiLCJkZWNvZGUiLCJxdWVyeSIsIlN0cmluZyIsIm5hbWUiLCJ2YWx1ZSIsInN0cmluZyIsInB1c2giLCJlbmNvZGUiLCJqb2luIiwiZW50cmllcyIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJtYXRjaCIsIkFwaVJlcXVlc3QiLCJfcmVxdWVzdGVyIiwiX2Jhc2VVcmwiLCJiYXNlVXJsIiwiX2VuZHBvaW50IiwiZW5kcG9pbnQiLCJfYXBpS2V5IiwiYXBpS2V5IiwiX3ZlcnNpb24iLCJ2ZXJzaW9uIiwiZ2V0IiwicG9zdCIsImJhc2VQYXJhbXMiLCJ1cmxQYXJhbXMiLCJsb2NhdGlvbiIsInRvU3RyaW5nIiwiaGFzIiwia2V5cyIsImZvckVhY2giLCJBbnN3ZXJzQmFzZUVycm9yIiwiZXJyb3JDb2RlIiwibWVzc2FnZSIsImJvdW5kYXJ5IiwiY2F1c2VkQnkiLCJlcnJvck1lc3NhZ2UiLCJyZXBvcnRlZCIsImJ1aWx0aW5FcnJvciIsImVycm9yIiwiQW5zd2Vyc0Jhc2ljRXJyb3IiLCJzdGFjayIsIkVycm9yIiwiQW5zd2Vyc0NvbXBvbmVudEVycm9yIiwiY29tcG9uZW50IiwiQW5zd2Vyc0VuZHBvaW50RXJyb3IiLCJBbnN3ZXJzQ29yZUVycm9yIiwiQW5zd2Vyc1N0b3JhZ2VFcnJvciIsInN0b3JhZ2VLZXkiLCJBbnN3ZXJzQW5hbHl0aWNzRXJyb3IiLCJldmVudCIsIlNlYXJjaEFwaSIsImNvbmZpZyIsImFuc3dlcnNLZXkiLCJfYW5zd2Vyc0tleSIsImxvY2FsZSIsIl9sb2NhbGUiLCJ2ZXJ0aWNhbEtleSIsImlucHV0IiwiZmlsdGVyIiwiZmFjZXRGaWx0ZXIiLCJsaW1pdCIsIm9mZnNldCIsImlkIiwiaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicXVlcnlTdHJpbmciLCJBdXRvQ29tcGxldGVEYXRhIiwic2VjdGlvbnMiLCJxdWVyeUlkIiwiZnJlZXplIiwibWFwIiwicyIsImxhYmVsIiwicmVzdWx0cyIsInIiLCJBdXRvQ29tcGxldGVSZXN1bHQiLCJoaWdobGlnaHRlZFZhbHVlIiwiaGlnaGxpZ2h0IiwibWF0Y2hlZFN1YnN0cmluZ3MiLCJzaG9ydFZhbHVlIiwidmFsIiwic29ydCIsImEiLCJiIiwiaW52ZXJ0ZWRTdWJzdHJpbmdzIiwic3Vic3RyaW5nIiwibmV4dE9mZnNldCIsIm5leHRTdGFydCIsImoiLCJzdGFydCIsIk51bWJlciIsImVuZCIsIkF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lciIsIm1vZHVsZUlkIiwiZnJvbSIsIkF1dG9Db21wbGV0ZUFwaSIsImJhcktleSIsInZlcnRpY2FsIiwidW5pdmVyc2FsIiwiUXVlc3Rpb25BbnN3ZXJBcGkiLCJxdWVzdGlvbiIsImVudGl0eUlkIiwic2l0ZSIsImVtYWlsIiwicXVlc3Rpb25UZXh0IiwicXVlc3Rpb25EZXNjcmlwdGlvbiIsInF1ZXN0aW9uTGFuZ3VhZ2UiLCJQUkVfU0VBUkNIIiwiU0VBUkNIX0xPQURJTkciLCJTRUFSQ0hfQ09NUExFVEUiLCJSZXN1bHQiLCJfcmF3IiwicmF3IiwiX2Zvcm1hdHRlZCIsImZvcm1hdHRlZCIsIm9yZGluYWwiLCJ0aXRsZSIsImRldGFpbHMiLCJsaW5rIiwic3VidGl0bGUiLCJtb2RpZmllciIsImJpZ0RhdGUiLCJpbWFnZSIsImNhbGxzVG9BY3Rpb24iLCJjb2xsYXBzZWQiLCJSZXN1bHRGYWN0b3J5IiwicmVzdWx0c0RhdGEiLCJmb3JtYXR0ZXJzIiwidmVydGljYWxJZCIsImZvcm1hdHRlZERhdGEiLCJodG1sU25pcHBldCIsImh0bWxUaXRsZSIsImZyb21Hb29nbGVDdXN0b21TZWFyY2hFbmdpbmUiLCJmcm9tR2VuZXJpYyIsImluZGV4IiwiZGVzY3JpcHRpb24iLCJ0cnVuY2F0ZSIsIndlYnNpdGUiLCJzdHIiLCJ0cmFpbGluZyIsInNlcCIsIndvcmRzIiwibWF4IiwidHJ1bmNhdGVkIiwid29yZCIsIlNlY3Rpb24iLCJzZWFyY2hTdGF0ZSIsIlNlYXJjaFN0YXRlcyIsInZlcnRpY2FsQ29uZmlnSWQiLCJyZXN1bHRzQ291bnQiLCJlbmNvZGVkU3RhdGUiLCJhcHBsaWVkUXVlcnlGaWx0ZXJzIiwiQXBwbGllZFF1ZXJ5RmlsdGVyIiwiZmFjZXRzIiwicGFyc2VNYXAiLCJ2ZXJ0aWNhbFVSTCIsIm1hcE1hcmtlcnMiLCJjZW50ZXJDb29yZGluYXRlcyIsInJlc3VsdCIsInlleHREaXNwbGF5Q29vcmRpbmF0ZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiaXRlbSIsIm1vZHVsZXMiLCJ1cmxzIiwiQXJyYXkiLCJpc0FycmF5IiwiYXBwbGllZFF1ZXJ5RmlsdGVyIiwiZGlzcGxheUtleSIsImRpc3BsYXlWYWx1ZSIsImZpbHRlcnMiLCJVbml2ZXJzYWxSZXN1bHRzIiwiRGlyZWN0QW5zd2VyIiwiZGlyZWN0QW5zd2VyIiwiYW5zd2VyIiwicmVsYXRlZEl0ZW0iLCJmaWVsZEFwaU5hbWUiLCJmaWVsZFZhbHVlcyIsIk5hdmlnYXRpb24iLCJ0YWJPcmRlciIsIm5hdiIsIlZlcnRpY2FsUmVzdWx0cyIsIm1lcmdlZCIsImNvbmNhdCIsIk5BVklHQVRJT04iLCJVTklWRVJTQUxfUkVTVUxUUyIsIlZFUlRJQ0FMX1JFU1VMVFMiLCJBVVRPQ09NUExFVEUiLCJESVJFQ1RfQU5TV0VSIiwiRklMVEVSIiwiUVVFUlkiLCJRVUVSWV9JRCIsIkZBQ0VUX0ZJTFRFUiIsIkRZTkFNSUNfRklMVEVSUyIsIlNFQVJDSF9MSU1JVCIsIlBBUkFNUyIsIlFVRVNUSU9OX1NVQk1JU1NJT04iLCJEeW5hbWljRmlsdGVycyIsImR5bmFtaWNGaWx0ZXJzIiwiZiIsImZpZWxkSWQiLCJvcHRpb25zIiwibyIsImNvdW50TGFiZWwiLCJzZWxlY3RlZCIsIlNlYXJjaERhdGFUcmFuc2Zvcm1lciIsIlN0b3JhZ2VLZXlzIiwiUXVlc3Rpb25TdWJtaXNzaW9uIiwiZXJyb3JzIiwicHJpdmFjeVBvbGljeSIsInF1ZXN0aW9uU3VibWl0dGVkIiwiQ29yZSIsIl9maWVsZEZvcm1hdHRlcnMiLCJmaWVsZEZvcm1hdHRlcnMiLCJnbG9iYWxTdG9yYWdlIiwicGVyc2lzdGVudFN0b3JhZ2UiLCJfc2VhcmNoZXIiLCJfYXV0b0NvbXBsZXRlIiwiX3F1ZXN0aW9uQW5zd2VyIiwiYXBwZW5kIiwic2V0Iiwic2VhcmNoTG9hZGluZyIsInZlcnRpY2FsU2VhcmNoIiwiZ2V0U3RhdGUiLCJfaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQiLCJ0cmFuc2Zvcm1WZXJ0aWNhbCIsIm1lcmdlZFJlc3VsdHMiLCJ1bml2ZXJzYWxTZWFyY2giLCJ0cmFuc2Zvcm0iLCJuYW1lc3BhY2UiLCJxdWVyeVVuaXZlcnNhbCIsInF1ZXJ5VmVydGljYWwiLCJxdWVyeUZpbHRlciIsInN1Ym1pdFF1ZXN0aW9uIiwic3VibWl0dGVkIiwiZXZ0IiwiY2IiLCJvbiIsIkNvbXBvbmVudE1hbmFnZXIiLCJzZXRJbnN0YW5jZSIsImdldEluc3RhbmNlIiwiX2NvbXBvbmVudFJlZ2lzdHJ5IiwiX2FjdGl2ZUNvbXBvbmVudHMiLCJfY29yZSIsIl9yZW5kZXJlciIsIl9hbmFseXRpY3NSZXBvcnRlciIsInJlbmRlcmVyIiwiY29yZSIsInJlcG9ydGVyIiwiY29tcG9uZW50Q2xhenoiLCJ0eXBlIiwiY29tcG9uZW50VHlwZSIsImFuYWx5dGljc1JlcG9ydGVyIiwiY29tcG9uZW50TWFuYWdlciIsImNvbXBvbmVudENsYXNzIiwiYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkIiwic29tZSIsImMiLCJpbml0Iiwic2V0U3RhdGUiLCJvZmYiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJmaW5kIiwiY29uc3RydWN0b3IiLCJpbnN0YW5jZSIsIlJlbmRlcmVyIiwidGVtcGxhdGUiLCJIYW5kbGViYXJzUmVuZGVyZXIiLCJ0ZW1wbGF0ZXMiLCJfaGFuZGxlYmFycyIsIl9oYiIsIl90ZW1wbGF0ZXMiLCJfcmVnaXN0ZXJDdXN0b21IZWxwZXJzIiwicmVnaXN0ZXJIZWxwZXIiLCJjb21waWxlIiwidGVtcGxhdGVOYW1lIiwiZSIsImFyZzEiLCJhcmcyIiwiZm4iLCJpbnZlcnNlIiwicGhvbmVOdW1iZXJTdHJpbmciLCJjbGVhbmVkIiwiaW50bENvZGUiLCJhcmdzIiwiYXJndW1lbnRzIiwicm9vdCIsInYiLCJSZW5kZXJlcnMiLCJTT1kiLCJIYW5kbGViYXJzIiwiZG9jdW1lbnQiLCJET00iLCJkIiwicCIsImh0bWwiLCJjb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiZnJhZyIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwiYXBwZW5kQ2hpbGQiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJwYXJlbnQiLCJzZWxlY3RvciIsIkhUTUxFbGVtZW50IiwiV2luZG93IiwiSFRNTERvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZWFkeVN0YXRlIiwiZWwiLCJvcHRzX2RhdGEiLCJub2RlIiwicHJvcHMiLCJhZGRDbGFzcyIsImluc2VydEFkamFjZW50SFRNTCIsImNsYXNzTmFtZSIsImNsYXNzZXMiLCJsZW4iLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJzdHlsZXMiLCJwcm9wIiwic3R5bGUiLCJhdHRyIiwic2V0QXR0cmlidXRlIiwiYXR0cnMiLCJzZXR0aW5ncyIsIkV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwib25jZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjdHh0IiwidGFyZ2V0IiwiaXNFcXVhbE5vZGUiLCJtYXRjaGVzIiwicGFyZW50Tm9kZSIsIkV2ZW50RW1pdHRlciIsIl9saXN0ZW5lcnMiLCJsaXN0ZW5lcnMiLCJrZWVwIiwiU3RhdGUiLCJfc3RhdGUiLCJvcHRWYWwiLCJfc2V0IiwiZW1pdCIsIm9wdFByb3AiLCJBbmFseXRpY3NFdmVudCIsImV2ZW50VHlwZSIsInRvVXBwZXJDYXNlIiwiQW5hbHl0aWNzUmVwb3J0ZXIiLCJidXNpbmVzc0lkIiwiZ2xvYmFsT3B0aW9ucyIsIl9idXNpbmVzc0lkIiwiX2dsb2JhbE9wdGlvbnMiLCJzZXRRdWVyeUlkIiwiYWRkT3B0aW9ucyIsImJlYWNvbiIsInRvQXBpRXZlbnQiLCJNb2R1bGVEYXRhIiwiX2lkIiwiX2hpc3RvcnkiLCJfZGF0YSIsImNhcHR1cmVQcmV2aW91cyIsInNoaWZ0IiwicHJldmlvdXMiLCJfcHJldmlvdXMiLCJwb3AiLCJHbG9iYWxTdG9yYWdlIiwiX21vZHVsZURhdGFDb250YWluZXIiLCJfZnV0dXJlTGlzdGVuZXJzIiwiX2luaXREYXRhQ29udGFpbmVyIiwiX2FwcGx5RnV0dXJlTGlzdGVuZXJzIiwiZGF0YUtleSIsInN0YXJ0c1dpdGgiLCJtb2R1bGVEYXRhIiwiZnV0dXJlcyIsImZ1dHVyZSIsIkNvbXBvbmVudCIsIl9jb25maWciLCJfdHlwZSIsIl9wYXJlbnQiLCJfY2hpbGRyZW4iLCJzdGF0ZSIsIl9hbmFseXRpY3NPcHRpb25zIiwiYW5hbHl0aWNzT3B0aW9ucyIsIl9jb250YWluZXIiLCJjcmVhdGVFbCIsIl9jbGFzc05hbWUiLCJfcmVuZGVyIiwicmVuZGVyIiwiX3RlbXBsYXRlIiwiX3RlbXBsYXRlTmFtZSIsImRlZmF1bHRUZW1wbGF0ZU5hbWUiLCJfaXNNb3VudGVkIiwidHJhbnNmb3JtRGF0YSIsIm9uQ3JlYXRlIiwib25Nb3VudCIsIm9uVXBkYXRlIiwibW91bnQiLCJuZXdTdGF0ZSIsImNoaWxkQ29tcG9uZW50IiwiY3JlYXRlIiwiX3BhcmVudE9wdHMiLCJyZW1vdmUiLCJ1bk1vdW50IiwiZW1wdHkiLCJiZWZvcmVNb3VudCIsImFzSlNPTiIsIl9vbk1vdW50IiwiZG9tSG9va3MiLCJxdWVyeUFsbCIsIl9jcmVhdGVBbmFseXRpY3NIb29rIiwiYmluZCIsImNoaWxkIiwiYmVmb3JlUmVuZGVyIiwiZG9tQ29tcG9uZW50cyIsIl9jcmVhdGVTdWJjb21wb25lbnQiLCJhZnRlclJlbmRlciIsImRvbUNvbXBvbmVudCIsImRhdGFzZXQiLCJjaGlsZERhdGEiLCJhZGRDaGlsZCIsImNoaWxkSFRNTCIsImlzQW5hbHl0aWNzQXR0YWNoZWQiLCJldmVudHR5cGUiLCJldmVudGxhYmVsIiwiZXZlbnRvcHRpb25zIiwicmVwb3J0IiwiUkVTSVpFX0RFQk9VTkNFIiwiVGFiIiwiY29uZmlnSWQiLCJpc0ZpcnN0IiwiaXNBY3RpdmUiLCJ0YWJzQ29uZmlnIiwidGFicyIsInRhYiIsIk5hdmlnYXRpb25Db21wb25lbnQiLCJkcm9wZG93bkxhYmVsIiwiZHJvcGRvd25JY29uIiwiX3RhYnMiLCJfdGFiT3JkZXIiLCJnZXREZWZhdWx0VGFiT3JkZXIiLCJnZXRVcmxQYXJhbXMiLCJfbmF2QnJlYWtwb2ludHMiLCJfZGVib3VuY2VUaW1lciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJyZWZpdE5hdiIsImNoZWNrT3V0c2lkZUNsaWNrIiwidG9nZ2xlTW9yZURyb3Bkb3duIiwibW9yZUJ1dHRvbiIsIm1haW5MaW5rcyIsImNvbGxhcHNlZExpbmtzIiwibmF2V2lkdGgiLCJjb250YWlucyIsIm9mZnNldFdpZHRoIiwibnVtQnJlYWtwb2ludHMiLCJsYXN0TGluayIsImNoaWxkcmVuIiwicHJlcGVuZCIsImZpcnN0TGluayIsImNsb3NlTW9yZURyb3Bkb3duIiwidG9nZ2xlIiwiY2xvc2VzdCIsIm1lcmdlVGFiT3JkZXIiLCJnZW5lcmF0ZVRhYlVybCIsImluY2x1ZGVzIiwidW5zaGlmdCIsIm90aGVyVGFiT3JkZXIiLCJ0YWJDb25maWciLCJGaWx0ZXIiLCJyZXNwb25zZUZpbHRlciIsImdyb3VwcyIsImdyb3VwRmlsdGVycyIsImZpZWxkIiwib3IiLCJhbmQiLCJfZnJvbU1hdGNoZXIiLCJtaW4iLCJsYXQiLCJsbmciLCJyYWRpdXMiLCJtYXRjaGVyIiwiU2VhcmNoQ29tcG9uZW50IiwiX2JhcktleSIsIl92ZXJ0aWNhbEtleSIsIl9mb3JtRWwiLCJmb3JtU2VsZWN0b3IiLCJfaW5wdXRFbCIsImlucHV0RWwiLCJsYWJlbFRleHQiLCJzdWJtaXRUZXh0Iiwic3VibWl0SWNvbiIsInByb21wdEhlYWRlciIsImF1dG9Gb2N1cyIsImF1dG9jb21wbGV0ZU9uTG9hZCIsInJlZGlyZWN0VXJsIiwicSIsIl9zZWFyY2hDb29sZG93biIsInNlYXJjaENvb2xkb3duIiwic2V0UXVlcnkiLCJmb2N1cyIsImluaXRTZWFyY2giLCJpbml0QXV0b0NvbXBsZXRlIiwiZm9ybSIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsImJsdXIiLCJpbnB1dFNlbGVjdG9yIiwiX2F1dG9jb21wbGV0ZSIsIm9yaWdpbmFsUXVlcnkiLCJvblN1Ym1pdCIsInRyaWdnZXIiLCJfdGhyb3R0bGVkIiwiYWxsRmlsdGVycyIsImdldEFsbCIsInRvdGFsRmlsdGVyIiwiZ2V0QWN0aXZlQ29tcG9uZW50IiwiRmlsdGVyU2VhcmNoQ29tcG9uZW50IiwiaW5wdXRLZXkiLCJfc3RvcmVPbkNoYW5nZSIsInN0b3JlT25DaGFuZ2UiLCJzZWFyY2hUZXh0IiwiaXNGaWx0ZXJTZWFyY2giLCJvcmlnaW5hbEZpbHRlciIsImZyb21SZXNwb25zZSIsInNldEZpbHRlciIsIktleXMiLCJCQUNLU1BBQ0UiLCJUQUIiLCJFTlRFUiIsIlNISUZUIiwiQ1RSTCIsIkFMVCIsIkVTQ0FQRSIsIkxFRlQiLCJSSUdIVCIsIlVQIiwiRE9XTiIsIkxFRlRfT1NfS0VZIiwiUklHSFRfT1NfS0VZIiwiU0VMRUNUX0tFWSIsIkF1dG9Db21wbGV0ZUNvbXBvbmVudCIsIl9hdXRvY29tcGxldGVFbHMiLCJhdXRvQ29tcGxldGVFbHMiLCJfb3JpZ2luYWxRdWVyeSIsIl9zZWN0aW9uSW5kZXgiLCJfcmVzdWx0SW5kZXgiLCJfYXV0b0ZvY3VzIiwiX29uU3VibWl0IiwiaGFzUmVzdWx0cyIsInNlY3Rpb25JbmRleCIsInJlc3VsdEluZGV4IiwicXVlcnlJbnB1dCIsImF0dHJpYnV0ZXMiLCJhdXRvY29tcGxldGUiLCJhdXRvY29ycmVjdCIsInNwZWxsY2hlY2siLCJjbG9zZSIsInJlc2V0IiwiYXV0b0NvbXBsZXRlIiwiaGFuZGxlTmF2aWdhdGVSZXN1bHRzIiwia2V5Q29kZSIsImhhbmRsZVN1Ym1pdFJlc3VsdCIsImRlbGVnYXRlIiwidXBkYXRlUXVlcnkiLCJoYW5kbGVUeXBpbmciLCJ1cGRhdGVTdGF0ZSIsIm9wdFZhbHVlIiwicXVlcnlFbCIsImlnbm9yZWRLZXlzIiwiYXV0b0NvbXBsZXRlRmlsdGVyIiwiYXV0b0NvbXBsZXRlVmVydGljYWwiLCJhdXRvQ29tcGxldGVVbml2ZXJzYWwiLCJGYWNldCIsImZsYXRGaWx0ZXJzIiwiZmxhdE1hcCIsIiRvciIsIkZpbHRlckJveENvbXBvbmVudCIsIl9maWx0ZXJDb25maWdzIiwiX3NlYXJjaE9uQ2hhbmdlIiwic2VhcmNoT25DaGFuZ2UiLCJfYXBwbHlCdXR0b25TZWxlY3RvciIsImFwcGx5QnV0dG9uU2VsZWN0b3IiLCJfZmlsdGVyQ29tcG9uZW50cyIsIl9maWx0ZXJzIiwiX2lzRHluYW1pYyIsImlzRHluYW1pYyIsImZpbHRlckNvbmZpZ3MiLCJzaG93QXBwbHlCdXR0b24iLCJvbkNoYW5nZSIsIm9uRmlsdGVyQ2hhbmdlIiwiZ2V0RmlsdGVyIiwiYnV0dG9uIiwiX3NhdmVGaWx0ZXJzVG9TdG9yYWdlIiwiX3NlYXJjaCIsInZhbGlkRmlsdGVycyIsImNvbWJpbmVkRmlsdGVyIiwiZnJvbUZpbHRlcnMiLCJzZXRGYWNldEZpbHRlciIsIlNVUFBPUlRFRF9DT05UUk9MUyIsIkZpbHRlck9wdGlvbnNDb21wb25lbnQiLCJjb250cm9sIiwicHJldmlvdXNPcHRpb25zIiwic2VsZWN0ZWRPcHRpb25zIiwiX29wdGlvbnMiLCJfY29udHJvbCIsIl9vcHRpb25TZWxlY3RvciIsIm9wdGlvblNlbGVjdG9yIiwiX29uQ2hhbmdlIiwiX2xhYmVsIiwidG9Mb3dlckNhc2UiLCJfdXBkYXRlT3B0aW9uIiwicGFyc2VJbnQiLCJjaGVja2VkIiwiX2J1aWxkRmlsdGVyIiwiZWxlbWVudHMiLCJfYXBwbHlGaWx0ZXIiLCJlcXVhbCIsImdyb3VwIiwiUmFuZ2VGaWx0ZXJDb21wb25lbnQiLCJfZmllbGQiLCJtaW5WYWwiLCJtYXhWYWwiLCJfcmFuZ2UiLCJpbml0aWFsTWluIiwiaW5pdGlhbE1heCIsIl90aXRsZSIsIl9taW5MYWJlbCIsIm1pbkxhYmVsIiwiX21heExhYmVsIiwibWF4TGFiZWwiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwiX3VwZGF0ZVJhbmdlIiwiaW5jbHVzaXZlUmFuZ2UiLCJEYXRlUmFuZ2VGaWx0ZXJDb21wb25lbnQiLCJfaXNFeGNsdXNpdmUiLCJpc0V4Y2x1c2l2ZSIsInRvZGF5IiwiRGF0ZSIsInRvZGF5U3RyaW5nIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsInBhZFN0YXJ0IiwiZ2V0RGF0ZSIsIm1pbkRhdGUiLCJtYXhEYXRlIiwiX2RhdGUiLCJkYXRlTWluIiwiZGF0ZU1heCIsImRhdGUiLCJleGNsdXNpdmVSYW5nZSIsIkR5bmFtaWNGaWx0ZXJzQ29tcG9uZW50IiwiX2ZpZWxkQ29udHJvbHMiLCJmaWVsZENvbnRyb2xzIiwiX2ZpbHRlcmJveCIsImVuYWJsZUR5bmFtaWNGaWx0ZXJzIiwiTUVURVJTX1BFUl9NSUxFIiwiREVGQVVMVF9DT05GSUciLCJnZW9CdXR0b25JY29uIiwiZ2VvQnV0dG9uVGV4dCIsImVuYWJsZWRUZXh0IiwibG9hZGluZ1RleHQiLCJlcnJvclRleHQiLCJidXR0b25TZWxlY3RvciIsIkdlb0xvY2F0aW9uQ29tcG9uZW50IiwicGxhY2Vob2xkZXIiLCJfZW5hYmxlZCIsImdlb0xvYWRpbmciLCJnZW9FcnJvciIsImdlb0VuYWJsZWQiLCJnZW9WYWx1ZSIsImdlb1BsYWNlaG9sZGVyIiwiX2luaXRBdXRvQ29tcGxldGUiLCJfdG9nZ2xlR2VvRmlsdGVyIiwiX3NhdmVEYXRhVG9TdG9yYWdlIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsImNvb3JkcyIsImFjY3VyYWN5IiwiTWF0aCIsIkV2ZW50VHlwZXMiLCJUSFVNQlNfVVAiLCJUSFVNQlNfRE9XTiIsIkRpcmVjdEFuc3dlckNvbXBvbmVudCIsImZvcm1FbCIsIl90aHVtYnNVcFNlbGVjdG9yIiwidGh1bWJzVXBTZWxlY3RvciIsIl90aHVtYnNEb3duU2VsZWN0b3IiLCJ0aHVtYnNEb3duU2VsZWN0b3IiLCJfdmlld0RldGFpbHNUZXh0Iiwidmlld0RldGFpbHNUZXh0IiwiaGFzU3RhdGUiLCJjaGVja2VkVmFsdWUiLCJyZXBvcnRRdWFsaXR5IiwiZXZlbnRPcHRpb25zIiwic2VhcmNoZXIiLCJjdGFMYWJlbCIsImlzR29vZCIsIlJlc3VsdHNJdGVtQ29tcG9uZW50IiwiX3ZlcnRpY2FsQ29uZmlnSWQiLCJfaXNVbml2ZXJzYWwiLCJpc1VuaXZlcnNhbCIsIkxvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQiLCJFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IiwiUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQiLCJNYXBQcm92aWRlciIsIl9oZWlnaHQiLCJoZWlnaHQiLCJfd2lkdGgiLCJ3aWR0aCIsIl96b29tIiwiem9vbSIsIl9kZWZhdWx0UG9zaXRpb24iLCJkZWZhdWx0UG9zaXRpb24iLCJfc2hvd0VtcHR5TWFwIiwic2hvd0VtcHR5TWFwIiwiX21hcCIsIl9pc0xvYWRlZCIsIl9vblBpbkNsaWNrIiwib25QaW5DbGljayIsIl9vbkxvYWRlZCIsIm9uTG9hZGVkIiwiX3BpbkNvbmZpZyIsInBpbiIsIkRFRkFVTFRfUElOX0NPTkZJRyIsIl9jb2xsYXBzZVBpbnMiLCJjb2xsYXBzZVBpbnMiLCJpc0xvYWRlZCIsIm1hcERhdGEiLCJtYXJrZXJzIiwibG9jYXRpb25Ub0l0ZW0iLCJtIiwiY29sbGFwc2VkTWFya2VycyIsImNvbGxhcHNlZE1hcmtlciIsImljb24iLCJhbmNob3IiLCJzdmciLCJzY2FsZWRTaXplIiwibGFiZWxUeXBlIiwiR29vZ2xlTWFwUHJvdmlkZXIiLCJfY2xpZW50SWQiLCJjbGllbnRJZCIsIl9zaWduYXR1cmUiLCJzaWduYXR1cmUiLCJoYXNWYWxpZENsaWVudENyZWRlbnRpYWxzIiwib25Mb2FkIiwic2NyaXB0Iiwib25sb2FkIiwiYXN5bmMiLCJzcmMiLCJnZW5lcmF0ZUNyZWRlbnRpYWxzIiwiZ29vZ2xlTWFwTWFya2VyQ29uZmlncyIsIkdvb2dsZU1hcE1hcmtlckNvbmZpZyIsImVuY29kZWRNYXJrZXJzIiwic2VyaWFsaXplIiwiX2lzU3RhdGljIiwiY3NzIiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsImJvdW5kcyIsIkxhdExuZ0JvdW5kcyIsIl9jb2xsYXBzZU1hcmtlcnMiLCJtYXJrZXIiLCJNYXJrZXIiLCJhZGRMaXN0ZW5lciIsImV4dGVuZCIsImZpdEJvdW5kcyIsInNldENlbnRlciIsIkxhdExuZyIsInNlcmlhbGl6ZWRNYXJrZXJzIiwicGluQ29uZmlnIiwicGluQ29uZmlnT2JqIiwiUG9pbnQiLCJ4IiwieSIsIlNpemUiLCJ3IiwiaCIsIk1hcEJveE1hcFByb3ZpZGVyIiwibWFwYm94Z2wiLCJhY2Nlc3NUb2tlbiIsInJlbCIsIm1hcGJveE1hcE1hcmtlckNvbmZpZ3MiLCJNYXBCb3hNYXJrZXJDb25maWciLCJjZW50ZXIiLCJtYXBDZW50ZXIiLCJnZXRDZW50ZXJNYXJrZXIiLCJ3cmFwcGVyIiwiTG5nTGF0Iiwic2V0TG5nTGF0IiwiYWRkVG8iLCJnZXRFbGVtZW50Iiwic3RhdGljTWFwUGluIiwiUHJvdmlkZXJUeXBlcyIsIk1hcENvbXBvbmVudCIsIl9tYXBQcm92aWRlciIsIm1hcFByb3ZpZGVyIiwiaXNTdGF0aWMiLCJnZXRQcm92aWRlckluc3RhbmNlIiwic2V0VGVtcGxhdGUiLCJnZW5lcmF0ZVN0YXRpYyIsImxvYWRKUyIsIlJlc3VsdFR5cGUiLCJFVkVOVCIsIkxPQ0FUSU9OIiwiUEVPUExFIiwiUmVzdWx0c0NvbXBvbmVudCIsIl9pdGVtQ29uZmlnIiwiZ2xvYmFsIiwicmVuZGVySXRlbSIsIml0ZW1UZW1wbGF0ZSIsInNldFNlYXJjaExpbWl0IiwiY29uZmlndXJlSXRlbSIsIl91bml2ZXJzYWxVcmwiLCJ1bml2ZXJzYWxVcmwiLCJpc1ByZVNlYXJjaCIsImlzU2VhcmNoTG9hZGluZyIsImlzU2VhcmNoQ29tcGxldGUiLCJpbmNsdWRlTWFwIiwibWFwQ29uZmlnIiwic2hvd05vUmVzdWx0cyIsInNldEl0ZW1SZW5kZXIiLCJzZXRJdGVtVGVtcGxhdGUiLCJjbGF6eiIsImdldEl0ZW1Db21wb25lbnQiLCJjb21wIiwibmV3T3B0cyIsImdsb2JhbENvbmZpZyIsIml0ZW1Db25maWciLCJoYXNHbG9iYWxSZW5kZXIiLCJoYXNHbG9iYWxUZW1wbGF0ZSIsInNldFJlbmRlciIsIkFjY29yZGlvblJlc3VsdHNDb21wb25lbnQiLCJfc2VsZWN0b3JCYXNlIiwic2VsZWN0b3JCYXNlIiwiY29sbGFwc2VkQ2xhc3MiLCJhY2NvcmRpb25FbHMiLCJhY2NvcmRpb25FbCIsInRvZ2dsZUVsIiwidG9nZ2xlU2VsZWN0b3IiLCJjb250ZW50RWwiLCJib2R5U2VsZWN0b3IiLCJjaGFuZ2VIZWlnaHQiLCJoYW5kbGVDbGljayIsIndyYXBwZXJFbCIsImlzQ29sbGFwc2VkIiwidGFyZ2V0RWwiLCJzY3JvbGxIZWlnaHQiLCJidWlsZFNlbGVjdG9yIiwiVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudCIsIl9saW1pdCIsImdldENoaWxkQ29uZmlnIiwidXNlQWNjb3JkaW9uIiwiZGVmYXVsdENvbmZpZyIsIlF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCIsInZhbGlkYXRlQ29uZmlnIiwiYmluZEFuYWx5dGljcyIsImJpbmRGb3JtU3VibWl0IiwicXVlc3Rpb25UZXh0RWwiLCJmb3JtRGF0YSIsInZhbGlkYXRlUmVxdWlyZWQiLCJsYW5ndWFnZSIsImlucHV0RmllbGRzIiwib2JqIiwiU1ZHSWNvbiIsInBhdGgiLCJjb21wbGV4Q29udGVudHMiLCJ2aWV3Qm94IiwiY29udGVudHMiLCJwYXRoRGVmaW5pdGlvbiIsImljb25zQXJyYXkiLCJ0aHVtYkljb24iLCJyZWNlaXB0SWNvbiIsInBhbnRoZW9uSWNvbiIsIm1pY0ljb24iLCJkaXJlY3Rpb25zSWNvbiIsImNhbGVuZGFySWNvbiIsImNhbGxvdXRJY29uIiwiaW5mb0ljb24iLCJicmllZmNhc2VJY29uIiwia2Fib2JJY29uIiwicGVyc29uSWNvbiIsIm1hZ25pZnlpbmdHbGFzc0ljb24iLCJvZmZpY2VJY29uIiwibGlua0ljb24iLCJ3aW5kb3dJY29uIiwicGhvbmVJY29uIiwidGFnSWNvbiIsImRvY3VtZW50SWNvbiIsImNoZXZyb25JY29uIiwic3VwcG9ydEljb24iLCJ5ZXh0SWNvbiIsInBpbkljb24iLCJnZWFySWNvbiIsImxpZ2h0QnVsYkljb24iLCJJY29ucyIsIm1hcmt1cCIsInN0YXJJY29uIiwiSWNvbkNvbXBvbmVudCIsImljb25OYW1lIiwiY3VzdG9tSWNvbiIsImljb25VcmwiLCJDT01QT05FTlRfTUFOQUdFUiIsInJlZ2lzdGVyIiwiVGVtcGxhdGVMb2FkZXIiLCJfdGVtcGxhdGVVcmwiLCJ0ZW1wbGF0ZVVybCIsIl9pbml0IiwiZmV0Y2hUZW1wbGF0ZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiRXJyb3JSZXBvcnRlciIsImVyciIsInRvSnNvbiIsIlBlcnNpc3RlbnRTdG9yYWdlIiwiX2hpc3RvcnlUaW1lciIsIl91cGRhdGVMaXN0ZW5lciIsInVwZGF0ZUxpc3RlbmVyIiwiX3Jlc2V0TGlzdGVuZXIiLCJyZXNldExpc3RlbmVyIiwib25wb3BzdGF0ZSIsIl9jYWxsTGlzdGVuZXIiLCJuZXdEYXRhIiwiX3VwZGF0ZUhpc3RvcnkiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwibGlzdGVuZXIiLCJhbGxQYXJhbXMiLCJBbnN3ZXJzIiwiY29tcG9uZW50cyIsIl9vblJlYWR5Iiwib25TdGF0ZUNoYW5nZSIsInNldEFsbCIsInN1YnN0ciIsInNldENvcmUiLCJzZXRSZW5kZXJlciIsInNldEFuYWx5dGljc1JlcG9ydGVyIiwib25SZWFkeSIsInVzZVRlbXBsYXRlcyIsInRlbXBsYXRlQnVuZGxlIiwic3VwcHJlc3NFcnJvclJlcG9ydHMiLCJfZXJyb3JSZXBvcnRlciIsIkFOU1dFUlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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