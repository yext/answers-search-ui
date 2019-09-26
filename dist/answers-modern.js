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
  var LIB_VERSION = 'v0.8.7';
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

          if (source === 'GOOGLE_CSE' || source === 'CUSTOM_SEARCHER') {
            results.push(ResultFactory.fromGoogleCustomSearchEngine(data));
            return "continue";
          }

          if (source === 'BING_CSE') {
            results.push(ResultFactory.fromBingCustomSearchEngine(data));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2Vycy11bWQuanMiLCJzb3VyY2VzIjpbInNyYy9jb3JlL2h0dHAvaHR0cHJlcXVlc3Rlci5qcyIsInNyYy9jb3JlL2NvbnN0YW50cy5qcyIsInNyYy91aS9kb20vc2VhcmNocGFyYW1zLmpzIiwic3JjL2NvcmUvaHR0cC9hcGlyZXF1ZXN0LmpzIiwic3JjL2NvcmUvZXJyb3JzL2Vycm9ycy5qcyIsInNyYy9jb3JlL3NlYXJjaC9zZWFyY2hhcGkuanMiLCJzcmMvY29yZS9tb2RlbHMvYXV0b2NvbXBsZXRlZGF0YS5qcyIsInNyYy9jb3JlL3NlYXJjaC9hdXRvY29tcGxldGVkYXRhdHJhbnNmb3JtZXIuanMiLCJzcmMvY29yZS9zZWFyY2gvYXV0b2NvbXBsZXRlYXBpLmpzIiwic3JjL2NvcmUvc2VhcmNoL3F1ZXN0aW9uYW5zd2VyYXBpLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9zZWFyY2hzdGF0ZXMuanMiLCJzcmMvY29yZS9tb2RlbHMvcmVzdWx0LmpzIiwic3JjL2NvcmUvbW9kZWxzL3Jlc3VsdGZhY3RvcnkuanMiLCJzcmMvY29yZS9tb2RlbHMvc2VjdGlvbi5qcyIsInNyYy9jb3JlL21vZGVscy91bml2ZXJzYWxyZXN1bHRzLmpzIiwic3JjL2NvcmUvbW9kZWxzL2RpcmVjdGFuc3dlci5qcyIsInNyYy9jb3JlL21vZGVscy9uYXZpZ2F0aW9uLmpzIiwic3JjL2NvcmUvbW9kZWxzL3ZlcnRpY2FscmVzdWx0cy5qcyIsInNyYy9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMuanMiLCJzcmMvY29yZS9tb2RlbHMvZHluYW1pY2ZpbHRlcnMuanMiLCJzcmMvY29yZS9zZWFyY2gvc2VhcmNoZGF0YXRyYW5zZm9ybWVyLmpzIiwic3JjL2NvcmUvbW9kZWxzL3F1ZXN0aW9uc3VibWlzc2lvbi5qcyIsInNyYy9jb3JlL2NvcmUuanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnRtYW5hZ2VyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9yZW5kZXJlci5qcyIsInNyYy91aS9yZW5kZXJpbmcvaGFuZGxlYmFyc3JlbmRlcmVyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9jb25zdC5qcyIsInNyYy91aS9kb20vZG9tLmpzIiwic3JjL2NvcmUvZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL3N0YXRlLmpzIiwic3JjL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50LmpzIiwic3JjL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc3JlcG9ydGVyLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9tb2R1bGVkYXRhLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9nbG9iYWxzdG9yYWdlLmpzIiwic3JjL2NvcmUvaW5kZXguanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb25jb21wb25lbnQuanMiLCJzcmMvY29yZS9tb2RlbHMvZmlsdGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3NlYXJjaC9maWx0ZXJzZWFyY2hjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9zZWFyY2gvYXV0b2NvbXBsZXRlY29tcG9uZW50LmpzIiwic3JjL2NvcmUvbW9kZWxzL2ZhY2V0LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJib3hjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcm9wdGlvbnNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL3JhbmdlZmlsdGVyY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9kYXRlcmFuZ2VmaWx0ZXJjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2R5bmFtaWNmaWx0ZXJzY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9nZW9sb2NhdGlvbmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvZGlyZWN0YW5zd2VyY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvbG9jYXRpb25yZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvZXZlbnRyZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvcGVvcGxlcmVzdWx0c2l0ZW1jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvcHJvdmlkZXJzL21hcHByb3ZpZGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL3Byb3ZpZGVycy9nb29nbGVtYXBwcm92aWRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9wcm92aWRlcnMvbWFwYm94bWFwcHJvdmlkZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvbWFwY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHRzY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9hY2NvcmRpb25yZXN1bHRzY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy91bml2ZXJzYWxyZXN1bHRzY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcXVlc3Rpb25zL3F1ZXN0aW9uc3VibWlzc2lvbmNvbXBvbmVudC5qcyIsInNyYy91aS9pY29ucy9pY29uLmpzIiwic3JjL3VpL2ljb25zL3RodW1iLmpzIiwic3JjL3VpL2ljb25zL3JlY2VpcHQuanMiLCJzcmMvdWkvaWNvbnMvcGFudGhlb24uanMiLCJzcmMvdWkvaWNvbnMvbWljLmpzIiwic3JjL3VpL2ljb25zL2RpcmVjdGlvbnMuanMiLCJzcmMvdWkvaWNvbnMvY2FsZW5kYXIuanMiLCJzcmMvdWkvaWNvbnMvY2FsbG91dC5qcyIsInNyYy91aS9pY29ucy9pbmZvLmpzIiwic3JjL3VpL2ljb25zL2JyaWVmY2FzZS5qcyIsInNyYy91aS9pY29ucy9rYWJvYi5qcyIsInNyYy91aS9pY29ucy9wZXJzb24uanMiLCJzcmMvdWkvaWNvbnMvbWFnbmlmeWluZ19nbGFzcy5qcyIsInNyYy91aS9pY29ucy9vZmZpY2UuanMiLCJzcmMvdWkvaWNvbnMvbGluay5qcyIsInNyYy91aS9pY29ucy93aW5kb3cuanMiLCJzcmMvdWkvaWNvbnMvcGhvbmUuanMiLCJzcmMvdWkvaWNvbnMvdGFnLmpzIiwic3JjL3VpL2ljb25zL2RvY3VtZW50LmpzIiwic3JjL3VpL2ljb25zL2NoZXZyb24uanMiLCJzcmMvdWkvaWNvbnMvc3VwcG9ydC5qcyIsInNyYy91aS9pY29ucy95ZXh0LmpzIiwic3JjL3VpL2ljb25zL3Bpbi5qcyIsInNyYy91aS9pY29ucy9nZWFyLmpzIiwic3JjL3VpL2ljb25zL2xpZ2h0X2J1bGIuanMiLCJzcmMvdWkvaWNvbnMvc3Rhci5qcyIsInNyYy91aS9pY29ucy9pbmRleC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ljb25zL2ljb25jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb25zdC5qcyIsInNyYy91aS9yZW5kZXJpbmcvdGVtcGxhdGVsb2FkZXIuanMiLCJzcmMvdWkvaW5kZXguanMiLCJzcmMvY29yZS9lcnJvcnMvZXJyb3JyZXBvcnRlci5qcyIsInNyYy91aS9zdG9yYWdlL3BlcnNpc3RlbnRzdG9yYWdlLmpzIiwic3JjL2Fuc3dlcnMtdW1kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAbW9kdWxlIEh0dHBSZXF1ZXN0ZXIgKi9cblxuLyogZ2xvYmFsIGZldGNoICovXG5cbi8qKlxuICogVHlwZXMgb2YgSFRUUCByZXF1ZXN0c1xuICovXG5jb25zdCBNZXRob2RzID0ge1xuICBHRVQ6ICdnZXQnLFxuICBQT1NUOiAncG9zdCcsXG4gIFBVVDogJ3B1dCcsXG4gIERFTEVURTogJ2RlbGV0ZSdcbn07XG5cbi8qKlxuICogSHR0cFJlcXVlc3RlciBpcyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb24gb2YgQUpBWFxuICogcmVsYXRlZCBtYXR0ZXJzLiBJdCdzIHVzZWQgdG8gbWFrZSBhbGwgdHlwZXMgb2YgbmV0d29yayByZXF1ZXN0c1xuICogYW5kIGV4cG9zZXMgYSBwcm9taXNlIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHR0cFJlcXVlc3RlciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBHRVQgSFRUUCByZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBwcm92aWRlIChnZXRzIGVuY29kZWQgaW50byB0aGUgVVJMKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBDb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgKi9cbiAgZ2V0ICh1cmwsIGRhdGEsIG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KE1ldGhvZHMuR0VULCB0aGlzLmVuY29kZVBhcmFtcyh1cmwsIGRhdGEpLCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBQT1NUIEhUVFAgcmVxdWVzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gcHJvdmlkZSAoZ2V0cyBlbmNvZGVkIGludG8gdGhlIFVSTClcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgQ29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICovXG4gIHBvc3QgKHVybCwgZGF0YSwgb3B0cykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXG4gICAgICBNZXRob2RzLlBPU1QsXG4gICAgICB1cmwsXG4gICAgICBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIGNyZWRlbnRpYWxzOiB1bmRlZmluZWRcbiAgICAgIH0sIG9wdHMpXG4gICAgKTtcbiAgfVxuXG4gIHJlcXVlc3QgKG1ldGhvZCwgdXJsLCBvcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICBtZXRob2QsXG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgfSwgb3B0cykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBiZWFjb24gdG8gdGhlIHByb3ZpZGVkIHVybCB3aGljaCB3aWxsIHNlbmQgYSBub24tYmxvY2tpbmcgcmVxdWVzdFxuICAgKiB0byB0aGUgc2VydmVyIHRoYXQgaXMgZ3VhcmFudGVlZCB0byBzZW5kIGJlZm9yZSBwYWdlIGxvYWQuIE5vIHJlc3BvbnNlIGlzIHJldHVybmVkLFxuICAgKiBzbyBiZWFjb25zIGFyZSBwcmltYXJpbHkgdXNlZCBmb3IgYW5hbHl0aWNzIHJlcG9ydGluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIHNlbmQgdGhlIGJlYWNvbiB0b1xuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSBUaGUgZGF0YSBwYXlsb2FkIHRvIHNlbmQgaW4gdGhlIGJlYWNvblxuICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSByZXF1ZXN0IGlzIHN1Y2Nlc3NmdWxseSBxdWV1ZWRcbiAgICovXG4gIGJlYWNvbiAodXJsLCBkYXRhKSB7XG4gICAgcmV0dXJuIG5hdmlnYXRvci5zZW5kQmVhY29uKHVybCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9XG5cbiAgZW5jb2RlUGFyYW1zICh1cmwsIHBhcmFtcykge1xuICAgIGxldCBoYXNQYXJhbSA9IHVybC5pbmRleE9mKCc/JykgPiAtMTtcblxuICAgIGxldCBzZWFyY2hRdWVyeSA9ICcnO1xuICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgIGlmICghaGFzUGFyYW0pIHtcbiAgICAgICAgaGFzUGFyYW0gPSB0cnVlO1xuICAgICAgICBzZWFyY2hRdWVyeSArPSAnPyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWFyY2hRdWVyeSArPSAnJic7XG4gICAgICB9XG5cbiAgICAgIHNlYXJjaFF1ZXJ5ICs9IGtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiB1cmwgKyBzZWFyY2hRdWVyeTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuLyoqIFRoZSBjdXJyZW50IGxpYiB2ZXJzaW9uLCByZXBvcnRlZCB3aXRoIGVycm9ycyBhbmQgYW5hbHl0aWNzICovXG5leHBvcnQgY29uc3QgTElCX1ZFUlNJT04gPSAndjAuOC43JztcblxuLyoqIFRoZSBiYXNlIHVybCBmb3IgdGhlIGFwaSBiYWNrZW5kICovXG5leHBvcnQgY29uc3QgQVBJX0JBU0VfVVJMID0gJ2h0dHBzOi8vbGl2ZWFwaS55ZXh0LmNvbSc7XG5cbi8qKiBUaGUgZGVmYXVsdCB1cmwgZm9yIGNvbXBpbGVkIGNvbXBvbmVudCB0ZW1wbGF0ZXMgKi9cbmV4cG9ydCBjb25zdCBDT01QSUxFRF9URU1QTEFURVNfVVJMID0gYGh0dHBzOi8vYXNzZXRzLnNpdGVzY2RuLm5ldC9hbnN3ZXJzLyR7TElCX1ZFUlNJT059L2Fuc3dlcnN0ZW1wbGF0ZXMuY29tcGlsZWQubWluLmpzYDtcblxuLyoqIFRoZSBiYXNlIHVybCBmb3IgdGhlIGFuYWx5dGljcyBiYWNrZW5kICAqL1xuZXhwb3J0IGNvbnN0IEFOQUxZVElDU19CQVNFX1VSTCA9ICdodHRwczovL3JlYWx0aW1lYW5hbHl0aWNzLnlleHQuY29tJztcbiIsIi8qKiBAbW9kdWxlIFNlYXJjaFBhcmFtcyAqL1xuXG4vKiBnbG9iYWwgd2luZG93ICovXG5cbi8qKlxuICogU2VhcmNoUGFyYW1zIGlzIGEgY2xhc3MgdG8gZ2V0IHRoZSBzZWFyY2ggcGFyYW1zIGluIGEgVVJMLlxuICogSXQgaXMgYSByZXBsYWNlbWVudCBmb3IgVVJMLnNlYXJjaFBhcmFtcyBhbmQgVVJMU2VhcmNoUGFyYW1zIGZvciBicm93c2VycyBsaWtlIElFMTFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoUGFyYW1zIHtcbiAgY29uc3RydWN0b3IgKHVybCkge1xuICAgIC8qKlxuICAgICAqIE1hcHBpbmcgb2YgYWxsIHF1ZXJ5IHBhcmFtZXRlcnMgaW4gdGhlIGdpdmVuIHVybCwgcXVlcnkgcGFyYW0gLT4gdmFsdWVcbiAgICAgKiBPbmx5IHVzZWQgaWYgVVJMU2VhcmNoUGFyYW1zIGRvZXMgbm90IGV4aXN0IGluIHRoZSB3aW5kb3dcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcGFyYW1zID0ge307XG5cbiAgICBpZiAod2luZG93ICYmIHdpbmRvdy5VUkxTZWFyY2hQYXJhbXMpIHtcbiAgICAgIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BhcmFtcyA9IHRoaXMucGFyc2UodXJsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcGFyc2UgY3JlYXRlcyBhIG1hcHBpbmcgb2YgYWxsIHF1ZXJ5IHBhcmFtcyBpbiBhIGdpdmVuIHVybFxuICAgKiBUaGUgcXVlcnkgcGFyYW0gdmFsdWVzIGFyZSBkZWNvZGVkIGJlZm9yZSBiZWluZyBwdXQgaW4gdGhlIG1hcFxuICAgKiBUaHJlZSB0eXBlcyBvZiBpbnB1dCBhcmUgc3VwcG9ydGVkXG4gICAqICAgKDEpIGZ1bGwgVVJMIGUuZy4gaHR0cDovL3d3dy55ZXh0LmNvbS8/cT1oZWxsb1xuICAgKiAgICgyKSBwYXJhbXMgd2l0aCA/IGUuZy4gP3E9aGVsbG9cbiAgICogICAoMSkgcGFyYW1zIHdpdGhvdXQgPyBlLmcuIHE9aGVsbG9cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IG1hcHBpbmcgZnJvbSBxdWVyeSBwYXJhbSAtPiB2YWx1ZSB3aGVyZSB2YWx1ZSBpcyAnJyBpZiBubyB2YWx1ZSBpcyBwcm92aWRlZFxuICAgKi9cbiAgcGFyc2UgKHVybCkge1xuICAgIGxldCBwYXJhbXMgPSB7fTtcbiAgICBsZXQgc2VhcmNoID0gdXJsO1xuXG4gICAgaWYgKHNlYXJjaCA9PT0gJycpIHtcbiAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfVxuXG4gICAgLy8gTm9ybWFsaXplIGFsbCB1cmwgaW5wdXRzIHRvIHN0cmluZyBvZiBxdWVyeSBwYXJhbXMgc2VwYXJhdGVkIGJ5ICZcbiAgICBpZiAodXJsLmluZGV4T2YoJz8nKSA+IC0xKSB7XG4gICAgICBzZWFyY2ggPSB1cmwuc2xpY2UodXJsLmluZGV4T2YoJz8nKSArIDEpO1xuICAgIH1cblxuICAgIGNvbnN0IGVuY29kZWRQYXJhbXMgPSBzZWFyY2guc3BsaXQoJyYnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuY29kZWRQYXJhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleVZhbCA9IGVuY29kZWRQYXJhbXNbaV0uc3BsaXQoJz0nKTtcbiAgICAgIGlmIChrZXlWYWwubGVuZ3RoID4gMSkge1xuICAgICAgICBwYXJhbXNba2V5VmFsWzBdXSA9IFNlYXJjaFBhcmFtcy5kZWNvZGUoa2V5VmFsWzFdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtc1trZXlWYWxbMF1dID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIHF1ZXJ5IHBhcmFtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgcXVlcnkgcGFyYW0ga2V5IHRvIGdldCB0aGUgdmFsdWUgb2ZcbiAgICogQHJldHVybiB7c3RyaW5nfSBwYXJhbSB2YWx1ZSwgbnVsbCBvdGhlcndpc2VcbiAgICovXG4gIGdldCAocXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuX3BhcmFtc1tTdHJpbmcocXVlcnkpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcGFyYW1zW3F1ZXJ5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXQgY2hhbmdlcyB0aGUgdmFsdWUgb2YgYSBnaXZlbiBxdWVyeSBwYXJhbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSB0aGUgcXVlcnkgcGFyYW0ga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSB0aGUgdmFsdWUgb2YgdGhlIHF1ZXJ5IHBhcmFtIHVwZGF0ZSB3aXRoXG4gICAqL1xuICBzZXQgKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5fcGFyYW1zW1N0cmluZyhuYW1lKV0gPSBTdHJpbmcodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIGhhcyBjaGVja3MgdG8gc2VlIGlmIHRoZSBnaXZlbiBxdWVyeSBwYXJhbSBrZXkgZXhpc3RzIGluIHRoZSBwYXJhbXMgb2JqZWN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgcXVlcnkgcGFyYW0gdG8gY2hlY2tcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgcXVlcnkgcGFyYW0gaXMgaW4gdGhlIHBhcmFtcyBvYmplY3QsIGZhbHNlIG8vd1xuICAgKi9cbiAgaGFzIChxdWVyeSkge1xuICAgIHJldHVybiBxdWVyeSBpbiB0aGlzLl9wYXJhbXM7XG4gIH1cblxuICAvKipcbiAgICogdG9TdHJpbmcgcmV0dXJucyBhIHVybCB3aXRoIGFsbCB0aGUgcXVlcnkgcGFyYW1zIGluIHRoZSBwYXJhbXMgb2JqZWN0ICh3aXRob3V0IGEgPylcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9TdHJpbmcgKCkge1xuICAgIGxldCBzdHJpbmcgPSBbXTtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fcGFyYW1zKSB7XG4gICAgICBzdHJpbmcucHVzaChgJHtrZXl9PSR7U2VhcmNoUGFyYW1zLmVuY29kZSh0aGlzLl9wYXJhbXNba2V5XSl9YCk7XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmcuam9pbignJicpO1xuICB9XG5cbiAgZW50cmllcyAoKSB7XG4gICAgbGV0IGVudHJpZXMgPSBbXTtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fcGFyYW1zKSB7XG4gICAgICBlbnRyaWVzLnB1c2goW2tleSwgdGhpcy5fcGFyYW1zW2tleV1dKTtcbiAgICB9XG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICAvKipcbiAgICogZGVjb2RlIHJldHVybnMgdGhlIGRlY29kZWQgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIHRoZSBzdHJpbmcgdG8gZGVjb2RlXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBkZWNvZGUgKHN0cmluZykge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyaW5nLnJlcGxhY2UoL1sgK10vZywgJyUyMCcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBkZWNvZGUgcmV0dXJucyB0aGUgZW5jb2RlZCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gc3RyaW5nIChlLmcuICsgLT4gJTJCKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIHRoZSBzdHJpbmcgdG8gZW5jb2RlXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBlbmNvZGUgKHN0cmluZykge1xuICAgIGxldCByZXBsYWNlID0ge1xuICAgICAgJyEnOiAnJTIxJyxcbiAgICAgIFwiJ1wiOiAnJTI3JyxcbiAgICAgICcoJzogJyUyOCcsXG4gICAgICAnKSc6ICclMjknLFxuICAgICAgJyUyMCc6ICcrJ1xuICAgIH07XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmcpLnJlcGxhY2UoL1shJygpXXwlMjAvZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICByZXR1cm4gcmVwbGFjZVttYXRjaF07XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEFwaVJlcXVlc3QgKi9cblxuaW1wb3J0IEh0dHBSZXF1ZXN0ZXIgZnJvbSAnLi9odHRwcmVxdWVzdGVyJztcbmltcG9ydCB7IEFQSV9CQVNFX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uL3VpL2RvbS9zZWFyY2hwYXJhbXMnOyAvLyBUT0RPIGlkZWFsbHkgdGhpcyB3b3VsZCBiZSBwYXNzZWQgaW4gYXMgYSBwYXJhbVxuXG4vKipcbiAqIEFwaVJlcXVlc3QgaXMgdGhlIGJhc2UgY2xhc3MgZm9yIGFsbCBBUEkgcmVxdWVzdHMuXG4gKiBJdCBkZWZpbmVzIGFsbCBvZiB0aGUgY29yZSBwcm9wZXJ0aWVzIHJlcXVpcmVkIHRvIG1ha2UgYSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaVJlcXVlc3Qge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3Rpb24gdXNlZCBmb3IgbWFraW5nIG5ldHdvcmsgcmVxdWVzdCBhbmQgaGFuZGxpbmcgZXJyb3JzXG4gICAgICogQHR5cGUge0h0dHBSZXF1ZXN0ZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9yZXF1ZXN0ZXIgPSBuZXcgSHR0cFJlcXVlc3RlcigpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhc2VVcmwgdG8gdXNlIGZvciBtYWtpbmcgYSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Jhc2VVcmwgPSBvcHRzLmJhc2VVcmwgfHwgQVBJX0JBU0VfVVJMO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGVuZHBvaW50IHRvIHVzZSBpbiB0aGUgdXJsIChhcHBlbmRlZCB0byB0aGUge2Jhc2VVcmx9KVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9lbmRwb2ludCA9IG9wdHMuZW5kcG9pbnQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBpS2V5ID0gb3B0cy5hcGlLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBBUEkgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVyc2lvbiA9IG9wdHMudmVyc2lvbiB8fCAyMDE5MDEwMTtcblxuICAgIC8qKlxuICAgICAqIEFkZGl0aW9uYWwgZGF0YSBwYXJhbXMgdGhhdCBhcmUgc2VudCBhbG9uZyB3aXRoIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3BhcmFtcyA9IG9wdHMucGFyYW1zIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCBjcmVhdGVzIGEgbmV3IGBHRVRgIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGUgcmVxdWVzdCBjbGFzc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGdldCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3Rlci5nZXQodGhpcy5fYmFzZVVybCArIHRoaXMuX2VuZHBvaW50LCB0aGlzLnBhcmFtcyh0aGlzLl9wYXJhbXMpKTtcbiAgfVxuXG4gIHBvc3QgKG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdGVyLnBvc3QodGhpcy5fYmFzZVVybCArIHRoaXMuX2VuZHBvaW50LCB0aGlzLnBhcmFtcyh0aGlzLl9wYXJhbXMpLCBvcHRzKTtcbiAgfVxuXG4gIHBhcmFtcyAocGFyYW1zKSB7XG4gICAgdmFyIGJhc2VQYXJhbXMgPSB7XG4gICAgICAndic6IHRoaXMuX3ZlcnNpb24sXG4gICAgICAnYXBpX2tleSc6IHRoaXMuX2FwaUtleVxuICAgIH07XG5cbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpKTtcblxuICAgIGlmICh1cmxQYXJhbXMuaGFzKCdiZXRhJykpIHtcbiAgICAgIGJhc2VQYXJhbXNbJ2JldGEnXSA9IHVybFBhcmFtcy5nZXQoJ2JldGEnKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYW55IHBhcmFtYXRlcnMgd2hvcyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC5cbiAgICAvL1xuICAgIC8vIE5PVEUoYmlsbHkpIFByb2JhYmx5IGJldHRlciB0byBiZSBleHBsaWNpdCBhYm91dCBob3cgdG8gaGFuZGxlIHRoaXMgYXQgdGhlIHJlcXVlc3QgYnVpbGRpbmcgbGV2ZWwsXG4gICAgLy8gYnV0IEkgY2FuJ3Qgc2VlIGFueSBjYXNlcyB3aGVyZSB3ZSdkIGV2ZXIgd2FudCB0byBzZW5kICd1bmRlZmluZWQnIGFzIGEgdmFsdWUgdG8gdGhlIHNlcnZlci5cbiAgICAvLyBTbyBpdCdzIHByb2JhYmx5IGZpbmUgdG8gJ2NsZWFuJyB0aGUgcGFyYW1zIG9iamVjdCBoZXJlXG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAocGFyYW1zW2tleV0gPT09IHVuZGVmaW5lZCB8fCBwYXJhbXNba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgcGFyYW1zW2tleV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihiYXNlUGFyYW1zLCBwYXJhbXMgfHwge30pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBFcnJvcnMgKi9cblxuLyoqXG4gKiBBbnN3ZXJzQmFzZUVycm9yIGlzIGFuIGV4dGVuc2lvbiBvZiB0aGUgYmFzZSBFcnJvciBvYmplY3QuXG4gKiBUaGlzIGlzIHRoZSBvYmplY3QgdGhhdCBpcyB1c2VkIHRvIHdoZW4gcmVwb3J0aW5nIHRvIHRoZSBzZXJ2ZXIuXG4gKiBAZXh0ZW5kcyBFcnJvclxuICpcbiAqIEVycm9yIGNvZGVzIGZhbGwgaW50byBvbmUgb2YgZm91ciBjYXRlZ29yaWVzOlxuICogMVhYIGVycm9yczogQmFzaWMgZXJyb3JzXG4gKiAyWFggZXJyb3JzOiBVSSBlcnJvcnNcbiAqIDNYWCBlcnJvcnM6IEVuZHBvaW50IGVycm9yc1xuICogNFhYIGVycm9yczogQ29yZSBlcnJvcnNcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNCYXNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChlcnJvckNvZGUsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMuZXJyb3JDb2RlID0gZXJyb3JDb2RlO1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLmJvdW5kYXJ5ID0gYm91bmRhcnk7XG4gICAgdGhpcy5jYXVzZWRCeSA9IGNhdXNlZEJ5O1xuICAgIHRoaXMucmVwb3J0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHRvSnNvbiAoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKGJ1aWx0aW5FcnJvciwgYm91bmRhcnkpIHtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcihidWlsdGluRXJyb3IubWVzc2FnZSwgYm91bmRhcnkpO1xuICAgIGVycm9yLnN0YWNrID0gYnVpbHRpbkVycm9yLnN0YWNrO1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNCYXNpY0Vycm9yIGlzIGEgd3JhcHBlciBhcm91bmQgYWxsIHRoZSBidWlsdC1pbiBlcnJvcnNcbiAqIGUuZy4gdW5kZWZpbmVkIHZhcmlhYmxlcywgaW5jb3JyZWN0IHN5bnRheCwgdHlwZXMsIG1pc3NpbmcgbWV0aG9kcywgZXRjLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0Jhc2ljRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDEwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNVaUVycm9yIHVzZWQgZm9yIHRoaW5ncyBsaWtlIERPTSBlcnJvcnMuXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzVWlFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoMjAwLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc0NvbXBvbmVudEVycm9yIGlzIHVzZWQgZm9yIENvbXBvbmVudCBvcmllbnRlZCBlcnJvcnNcbiAqIGUuZy4gZmFpbHVyZSB0byByZW5kZXIsIG9yIGNhdGNoaW5nIHVua25vd25zLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0NvbXBvbmVudEVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBjb21wb25lbnQsIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoMjAxLCBtZXNzYWdlLCBjb21wb25lbnQsIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNFbmRwb2ludEVycm9yIHJlcHJlc2VudHMgYWxsIG5ldHdvcmsgcmVsYXRlZCBlcnJvcnMuXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzRW5kcG9pbnRFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoMzAwLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc0NvcmVFcnJvciByZXByZXNlbnRzIGVycm9ycyBmb3IgcHJlY29uZGl0aW9uIGZhaWx1cmVzIGluIHRoZSBjb3JlIGxpYnJhcnlcbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNDb3JlRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDQwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNTdG9yYWdlRXJyb3IgcmVwcmVzZW50cyBzdG9yYWdlIHJlbGF0ZWQgZXJyb3JzXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzU3RvcmFnZUVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBzdG9yYWdlS2V5LCBkYXRhLCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDQwMSwgbWVzc2FnZSwgJ1N0b3JhZ2UnLCBjYXVzZWRCeSk7XG4gICAgdGhpcy5zdG9yYWdlS2V5ID0gc3RvcmFnZUtleTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc0FuYWx5dGljc0Vycm9yIGlzIHVzZWQgZm9yIGVycm9ycyB3aGVuIHJlcG9ydGluZyBhbmFseXRpY3NcbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNBbmFseXRpY3NFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgZXZlbnQsIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoNDAyLCBtZXNzYWdlLCAnQW5hbHl0aWNzJywgY2F1c2VkQnkpO1xuICAgIHRoaXMuZXZlbnQgPSBldmVudDtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VhcmNoQXBpICovXG5cbmltcG9ydCBBcGlSZXF1ZXN0IGZyb20gJy4uL2h0dHAvYXBpcmVxdWVzdCc7XG5pbXBvcnQgeyBBbnN3ZXJzQmFzaWNFcnJvciwgQW5zd2Vyc0NvcmVFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvcnMnO1xuXG4vKipcbiAqIFNlYXJjaEFwaSBpcyB0aGUgQVBJIGZvciBkb2luZyB2YXJpb3VzIHR5cGVzIG9mIHNlYXJjaFxuICogb3ZlciB0aGUgbmV0d29yayAoZS5nLiB2ZXJ0aWNhbCBvciB1bml2ZXJzYWwpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEFwaSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFjb25maWcuYXBpS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0FwaSBLZXkgaXMgcmVxdWlyZWQnLCAnU2VhcmNoJyk7XG4gICAgfVxuICAgIHRoaXMuX2FwaUtleSA9IGNvbmZpZy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgQW5zd2VycyBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIWNvbmZpZy5hbnN3ZXJzS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0Fuc3dlcnMgS2V5IGlzIHJlcXVpcmVkJywgJ1NlYXJjaCcpO1xuICAgIH1cbiAgICB0aGlzLl9hbnN3ZXJzS2V5ID0gY29uZmlnLmFuc3dlcnNLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgQVBJIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnNpb24gPSBjb25maWcudmVyc2lvbiB8fCAyMDE5MDEwMSB8fCAyMDE5MDMwMTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBsb2NhbGUgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIWNvbmZpZy5sb2NhbGUpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignTG9jYWxlIGlzIHJlcXVpcmVkJywgJ1NlYXJjaCcpO1xuICAgIH1cbiAgICB0aGlzLl9sb2NhbGUgPSBjb25maWcubG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBpbiB0aGUgY29udGV4dCBvZiBhIHZlcnRpY2FsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbEtleSB2ZXJ0aWNhbCBJRCBmb3IgdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge29iamVjdH0gcXVlcnkgVGhlIHF1ZXJ5IGRldGFpbHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmlucHV0IFRoZSBpbnB1dCB0byBzZWFyY2ggZm9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5maWx0ZXIgVGhlIGZpbHRlciB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuZmFjZXRGaWx0ZXIgVGhlIGZhY2V0IGZpbHRlciB0byB1c2UgaW4gdGhlIHNlYXJjaFxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlcnkubGltaXQgVGhlIG1heCBudW1iZXIgb2YgcmVzdWx0cyB0byBpbmNsdWRlLCBtYXggb2YgNTBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1ZXJ5Lm9mZnNldCBUaGUgcmVzdWx0cyBvZmZzZXQsIGZvciBmZXRjaGluZyBtb3JlIHJlc3VsdHMgb2YgdGhlIHNhbWUgcXVlcnlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmlkIFRoZSBxdWVyeSBJRCB0byB1c2UuIElmIHBhZ2luZyB3aXRoaW4gYSBxdWVyeSwgdGhlIHNhbWUgSUQgc2hvdWxkIGJlIHVzZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBxdWVyeS5pc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCBJZiB0cnVlLCBhc2tzIHRoZSBzZXJ2ZXIgdG8gcmV0dXJuIGR5bmFtaWMgZmlsdGVyc1xuICAgKi9cbiAgdmVydGljYWxTZWFyY2ggKHZlcnRpY2FsS2V5LCB7IGlucHV0LCBmaWx0ZXIsIGZhY2V0RmlsdGVyLCBsaW1pdCwgb2Zmc2V0LCBpZCwgaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQgfSkge1xuICAgIGlmIChsaW1pdCA+IDUwKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvcmVFcnJvcignUHJvdmlkZWQgc2VhcmNoIGxpbWl0IHVuc3VwcG9ydGVkJywgJ1NlYXJjaEFwaScpO1xuICAgIH1cblxuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy92ZXJ0aWNhbC9xdWVyeScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogaW5wdXQsXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgICAgJ2ZpbHRlcnMnOiBmaWx0ZXIsXG4gICAgICAgICdmYWNldEZpbHRlcnMnOiBmYWNldEZpbHRlcixcbiAgICAgICAgJ3ZlcnRpY2FsS2V5JzogdmVydGljYWxLZXksXG4gICAgICAgICdsaW1pdCc6IGxpbWl0LFxuICAgICAgICAnb2Zmc2V0Jzogb2Zmc2V0LFxuICAgICAgICAncXVlcnlJZCc6IGlkLFxuICAgICAgICAncmV0cmlldmVGYWNldHMnOiBpc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH1cblxuICB1bml2ZXJzYWxTZWFyY2ggKHF1ZXJ5U3RyaW5nKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL3F1ZXJ5JyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBxdWVyeVN0cmluZyxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlRGF0YSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVEYXRhIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIHRoaXMuc2VjdGlvbnMgPSBkYXRhLnNlY3Rpb25zIHx8IFtdO1xuICAgIHRoaXMucXVlcnlJZCA9IGRhdGEucXVlcnlJZCB8fCAnJztcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlKSB7XG4gICAgbGV0IHNlY3Rpb25zO1xuICAgIGlmIChyZXNwb25zZS5zZWN0aW9ucykge1xuICAgICAgc2VjdGlvbnMgPSByZXNwb25zZS5zZWN0aW9ucy5tYXAocyA9PiAoe1xuICAgICAgICBsYWJlbDogcy5sYWJlbCxcbiAgICAgICAgcmVzdWx0czogcy5yZXN1bHRzLm1hcChyID0+IG5ldyBBdXRvQ29tcGxldGVSZXN1bHQocikpXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlY3Rpb25zID0gW3sgcmVzdWx0czogcmVzcG9uc2UucmVzdWx0cy5tYXAociA9PiBuZXcgQXV0b0NvbXBsZXRlUmVzdWx0KHIpKSB9XTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBBdXRvQ29tcGxldGVEYXRhKHsgc2VjdGlvbnMsIHF1ZXJ5SWQ6IHJlc3BvbnNlLnF1ZXJ5SWQgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9Db21wbGV0ZVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICB0aGlzLmZpbHRlciA9IGRhdGEuZmlsdGVyIHx8IHt9O1xuICAgIHRoaXMuaGlnaGxpZ2h0ZWRWYWx1ZSA9IHRoaXMuaGlnaGxpZ2h0KGRhdGEpO1xuICAgIHRoaXMua2V5ID0gZGF0YS5rZXkgfHwgJyc7XG4gICAgdGhpcy5tYXRjaGVkU3Vic3RyaW5ncyA9IGRhdGEubWF0Y2hlZFN1YnN0cmluZ3MgfHwgW107XG4gICAgdGhpcy52YWx1ZSA9IGRhdGEudmFsdWUgfHwgJyc7XG4gICAgdGhpcy5zaG9ydFZhbHVlID0gZGF0YS5zaG9ydFZhbHVlIHx8IHRoaXMudmFsdWU7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIC8vIFRPRE8oamRlbGVybWUpOiBjb25zb2xpZGF0ZSB3aXRoIG90aGVyIGhpZ2hsaWdodCBmdW5jdGlvbnNcbiAgaGlnaGxpZ2h0IChkYXRhKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgc2hvcnRWYWx1ZSwgbWF0Y2hlZFN1YnN0cmluZ3MgfSA9IGRhdGE7XG4gICAgY29uc3QgdmFsID0gdmFsdWUgfHwgc2hvcnRWYWx1ZTtcblxuICAgIGlmICghbWF0Y2hlZFN1YnN0cmluZ3MgfHwgbWF0Y2hlZFN1YnN0cmluZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSBvdXIgaGlnaGxpZ2h0ZWQgc3Vic3RyaW5ncyBhcmUgc29ydGVkXG4gICAgbWF0Y2hlZFN1YnN0cmluZ3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGEub2Zmc2V0IDwgYi5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuXG4gICAgICBpZiAoYS5vZmZzZXQgPiBiLm9mZnNldCkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgICAvLyBJbnZlcnQgaGlnaGxpZ2h0ZWQgc3Vic3RyaW5nc1xuICAgIGNvbnN0IGludmVydGVkU3Vic3RyaW5ncyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRjaGVkU3Vic3RyaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc3Vic3RyaW5nID0gbWF0Y2hlZFN1YnN0cmluZ3NbaV07XG4gICAgICBjb25zdCBuZXh0T2Zmc2V0ID0gc3Vic3RyaW5nLm9mZnNldCArIHN1YnN0cmluZy5sZW5ndGg7XG4gICAgICBpZiAoaSA9PT0gMCAmJiBzdWJzdHJpbmcub2Zmc2V0ICE9PSAwKSB7XG4gICAgICAgIGludmVydGVkU3Vic3RyaW5ncy5wdXNoKHsgb2Zmc2V0OiAwLCBsZW5ndGg6IHN1YnN0cmluZy5vZmZzZXQgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWwubGVuZ3RoID4gbmV4dE9mZnNldCkge1xuICAgICAgICBpbnZlcnRlZFN1YnN0cmluZ3MucHVzaCh7XG4gICAgICAgICAgb2Zmc2V0OiBuZXh0T2Zmc2V0LFxuICAgICAgICAgIGxlbmd0aDogaSA8IG1hdGNoZWRTdWJzdHJpbmdzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgID8gbWF0Y2hlZFN1YnN0cmluZ3NbaSArIDFdLm9mZnNldCAtIG5leHRPZmZzZXRcbiAgICAgICAgICAgIDogdmFsLmxlbmd0aCAtIG5leHRPZmZzZXRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQnVpbGQgb3VyIG5ldyB2YWx1ZSBiYXNlZCBvbiB0aGUgaGlnaGxpZ2h0c1xuICAgIGxldCBoaWdobGlnaHRlZFZhbHVlID0gJyc7XG4gICAgbGV0IG5leHRTdGFydCA9IDA7XG5cbiAgICBpZiAoaW52ZXJ0ZWRTdWJzdHJpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGludmVydGVkU3Vic3RyaW5ncy5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IHN0YXJ0ID0gTnVtYmVyKGludmVydGVkU3Vic3RyaW5nc1tqXS5vZmZzZXQpO1xuICAgICAgbGV0IGVuZCA9IHN0YXJ0ICsgaW52ZXJ0ZWRTdWJzdHJpbmdzW2pdLmxlbmd0aDtcblxuICAgICAgaGlnaGxpZ2h0ZWRWYWx1ZSArPSBbdmFsLnNsaWNlKG5leHRTdGFydCwgc3RhcnQpLCAnPHN0cm9uZz4nLCB2YWwuc2xpY2Uoc3RhcnQsIGVuZCksICc8L3N0cm9uZz4nXS5qb2luKCcnKTtcblxuICAgICAgaWYgKGogPT09IGludmVydGVkU3Vic3RyaW5ncy5sZW5ndGggLSAxICYmIGVuZCA8IHZhbC5sZW5ndGgpIHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRWYWx1ZSArPSB2YWwuc2xpY2UoZW5kKTtcbiAgICAgIH1cblxuICAgICAgbmV4dFN0YXJ0ID0gZW5kO1xuICAgIH1cblxuICAgIHJldHVybiBoaWdobGlnaHRlZFZhbHVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIgKi9cblxuaW1wb3J0IEF1dG9Db21wbGV0ZURhdGEgZnJvbSAnLi4vbW9kZWxzL2F1dG9jb21wbGV0ZWRhdGEnO1xuXG4vKipcbiAqIEEgRGF0YSBUcmFuc2Zvcm1lciB0aGF0IHRha2VzIHRoZSByZXNwb25zZSBvYmplY3QgZnJvbSBhIEF1dG9Db21wbGV0ZSByZXF1ZXN0XG4gKiBBbmQgdHJhbnNmb3JtcyBpbiB0byBhIGZyb250LWVuZCBvcmllbnRlZCBkYXRhIHN0cnVjdHVyZSB0aGF0IG91clxuICogY29tcG9uZW50IGxpYnJhcnkgYW5kIGNvcmUgc3RvcmFnZSB1bmRlcnN0YW5kLlxuICpcbiAqIFRPRE8oYmlsbHkpIENyZWF0ZSBvdXIgb3duIGZyb250LWVuZCBkYXRhIG1vZGVsc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIge1xuICBzdGF0aWMgY2xlYW4gKG1vZHVsZUlkLCBkYXRhKSB7XG4gICAgaWYgKGRhdGEuc2VjdGlvbnMgJiYgZGF0YS5zZWN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBkYXRhLnNlY3Rpb25zO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnNlY3Rpb25zICYmIGRhdGEuc2VjdGlvbnMubGVuZ3RoID09PSAxICYmIGRhdGEuc2VjdGlvbnNbMF0ucmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBkYXRhLnNlY3Rpb25zO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBbbW9kdWxlSWRdOiBkYXRhXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB1bml2ZXJzYWwgKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIEF1dG9Db21wbGV0ZURhdGEuZnJvbShyZXNwb25zZSk7XG4gIH1cblxuICBzdGF0aWMgZmlsdGVyIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG5cbiAgc3RhdGljIHZlcnRpY2FsIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVBcGkgKi9cblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIgZnJvbSAnLi9hdXRvY29tcGxldGVkYXRhdHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgQW5zd2Vyc0Jhc2ljRXJyb3IsIEFuc3dlcnNFbmRwb2ludEVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogQXV0b0NvbXBsZXRlQXBpIGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBuZXR3b3JrIHJlbGF0ZWQgbWF0dGVyc1xuICogZm9yIGFsbCB0aGUgYXV0b2NvbXBsZXRlIGVuZHBvaW50cy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlQXBpIHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFvcHRzLmFwaUtleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBcGkgS2V5IGlzIHJlcXVpcmVkJywgJ0F1dG9Db21wbGV0ZScpO1xuICAgIH1cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBBbnN3ZXJzIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghb3B0cy5hbnN3ZXJzS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0Fuc3dlcnMgS2V5IGlzIHJlcXVpcmVkJywgJ0F1dG9Db21wbGV0ZScpO1xuICAgIH1cbiAgICB0aGlzLl9hbnN3ZXJzS2V5ID0gb3B0cy5hbnN3ZXJzS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnNpb24gb2YgdGhlIEFQSSB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJzaW9uID0gb3B0cy52ZXJzaW9uIHx8IDIwMTkwMTAxIHx8IDIwMTkwMzAxO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxvY2FsZSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghb3B0cy5sb2NhbGUpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignTG9jYWxlIGlzIHJlcXVpcmVkJywgJ0F1dG9Db21wbGV0ZScpO1xuICAgIH1cbiAgICB0aGlzLl9sb2NhbGUgPSBvcHRzLmxvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdXRvY29tcGxldGUgZmlsdGVyc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgVGhlIGlucHV0IHRvIHVzZSBmb3IgYXV0byBjb21wbGV0ZVxuICAgKi9cbiAgcXVlcnlGaWx0ZXIgKGlucHV0LCB2ZXJ0aWNhbEtleSwgYmFyS2V5KSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL2ZpbHRlcnNlYXJjaCcsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogaW5wdXQsXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgICAgJ2V4cGVyaWVuY2VLZXknOiB2ZXJ0aWNhbEtleSxcbiAgICAgICAgJ2lucHV0S2V5JzogYmFyS2V5LFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLmZpbHRlcihyZXNwb25zZS5yZXNwb25zZSwgYmFyS2V5KSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzRW5kcG9pbnRFcnJvcignRmlsdGVyIHNlYXJjaCByZXF1ZXN0IGZhaWxlZCcsICdBdXRvQ29tcGxldGUnLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHF1ZXJ5VmVydGljYWwgKGlucHV0LCB2ZXJ0aWNhbEtleSwgYmFyS2V5KSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL3ZlcnRpY2FsL2F1dG9jb21wbGV0ZScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogaW5wdXQsXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgICAgJ3ZlcnRpY2FsS2V5JzogdmVydGljYWxLZXksXG4gICAgICAgICdiYXJLZXknOiBiYXJLZXksXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIudmVydGljYWwocmVzcG9uc2UucmVzcG9uc2UsIHJlcXVlc3QuX3BhcmFtcy5iYXJLZXkpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEFuc3dlcnNFbmRwb2ludEVycm9yKCdWZXJ0aWNhbCBzZWFyY2ggcmVxdWVzdCBmYWlsZWQnLCAnQXV0b0NvbXBsZXRlJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICBxdWVyeVVuaXZlcnNhbCAocXVlcnlTdHJpbmcpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvYXV0b2NvbXBsZXRlJyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBxdWVyeVN0cmluZyxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQocXVlcnlTdHJpbmcpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIudW5pdmVyc2FsKHJlc3BvbnNlLnJlc3BvbnNlKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzRW5kcG9pbnRFcnJvcignVW5pdmVyc2FsIHNlYXJjaCByZXF1ZXN0IGZhaWxlZCcsICdBdXRvQ29tcGxldGUnLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUXVlc3Rpb25BbnN3ZXJBcGkgKi9cblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCB7IEFuc3dlcnNCYXNpY0Vycm9yLCBBbnN3ZXJzRW5kcG9pbnRFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvcnMnO1xuXG4vKipcbiAqIFF1ZXN0aW9uQW5zd2VyQXBpIGV4cG9zZXMgYW4gaW50ZXJmYWNlIHRvIGRvIG5ldHdvcmt5IHRoaW5ncyBhZ2FpbnN0XG4gKiB0aGUgUSZBIFJFU1QgQVBJXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0aW9uQW5zd2VyQXBpIHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFvcHRzLmFwaUtleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBcGkgS2V5IGlzIHJlcXVpcmVkJywgJ1F1ZXN0aW9uQW5zd2VyQXBpJyk7XG4gICAgfVxuICAgIHRoaXMuX2FwaUtleSA9IG9wdHMuYXBpS2V5O1xuICB9XG5cbiAgLyoqXG4gICAqIHN1Ym1pdFF1ZXN0aW9uIHdpbGwgY3JlYXRlIGEgbmV0d29yayByZXF1ZXN0IHRvXG4gICAqIGNyZWF0ZSBhIHF1ZXN0aW9uIGZvciBRJkEuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBxdWVzdGlvbiBUaGUgcXVlc3Rpb24gb2JqZWN0IHRvIHN1Ym1pdCB0byB0aGUgc2VydmVyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBxdWVzdGlvbi5lbnRpdHlJZCBUaGUgZW50aXR5IHRvIGFzc29jaWF0ZSB3aXRoIHRoZSBxdWVzdGlvbiAocmVxdWlyZWQpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5sYW51YWdlIFRoZSBsYW5ndWFnZSBvZiB0aGUgcXVlc3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLnNpdGUgVGhlIFwicHVibGlzaGVyXCIgb2YgdGhlIChlLmcuICdGSVJTVF9QQVJUWScpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5uYW1lIFRoZSBuYW1lIG9mIHRoZSBhdXRob3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLmVtYWlsIFRoZSBlbWFpbCBhZGRyZXNzIG9mIHRoZSBhdXRob3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLnF1ZXN0aW9uVGV4dCBUaGUgcXVlc3Rpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLnF1ZXN0aW9uRGVzY3JpcHRpb24gQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcXVlc3Rpb25cbiAgICovXG4gIHN1Ym1pdFF1ZXN0aW9uIChxdWVzdGlvbikge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvcXVlc3Rpb25zJyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdlbnRpdHlJZCc6IHF1ZXN0aW9uLmVudGl0eUlkLFxuICAgICAgICAnc2l0ZSc6IHF1ZXN0aW9uLnNpdGUsXG4gICAgICAgICduYW1lJzogcXVlc3Rpb24ubmFtZSxcbiAgICAgICAgJ2VtYWlsJzogcXVlc3Rpb24uZW1haWwsXG4gICAgICAgICdxdWVzdGlvblRleHQnOiBxdWVzdGlvbi5xdWVzdGlvblRleHQsXG4gICAgICAgICdxdWVzdGlvbkRlc2NyaXB0aW9uJzogcXVlc3Rpb24ucXVlc3Rpb25EZXNjcmlwdGlvbixcbiAgICAgICAgJ3F1ZXN0aW9uTGFuZ3VhZ2UnOiBxdWVzdGlvbi5xdWVzdGlvbkxhbmd1YWdlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5wb3N0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzRW5kcG9pbnRFcnJvcihcbiAgICAgICAgICAnUXVlc3Rpb24gc3VibWl0IGZhaWxlZCcsXG4gICAgICAgICAgJ1F1ZXN0aW9uQW5zd2VyQXBpJyxcbiAgICAgICAgICBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VhcmNoU3RhdGVzICovXG5cbi8qKlxuICogU2VhcmNoU3RhdGVzIGlzIGFuIEVOVU0gZm9yIHRoZSB2YXJpb3VzIHN0YWdlcyBvZiBzZWFyY2hpbmcsXG4gKiB1c2VkIHRvIHNob3cgZGlmZmVyZW50IHRlbXBsYXRlc1xuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBQUkVfU0VBUkNIOiAncHJlLXNlYXJjaCcsXG4gIFNFQVJDSF9MT0FESU5HOiAnc2VhcmNoLWxvYWRpbmcnLFxuICBTRUFSQ0hfQ09NUExFVEU6ICdzZWFyY2gtY29tcGxldGUnXG59O1xuIiwiLyoqIEBtb2R1bGUgUmVzdWx0ICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmF3IHByb2ZpbGUgZGF0YVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9yYXcgPSBkYXRhLnJhdyB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZvcm1hdHRlZCBwcm9maWxlIGRhdGFcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZm9ybWF0dGVkID0gZGF0YS5mb3JtYXR0ZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5kZXggbnVtYmVyIG9mIHRoZSByZXN1bHRcbiAgICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMub3JkaW5hbCA9IGRhdGEub3JkaW5hbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIG9mIHRoZSByZXN1bHQgY2FyZFxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJvZHkgb2YgdGhlIGRldGFpbHMgc2VjdGlvbiBvZiB0aGUgcmVzdWx0IGNhcmQsIGNhbiBjb250YWluIEhUTUxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfCBudWxsfVxuICAgICAqL1xuICAgIHRoaXMuZGV0YWlscyA9IGRhdGEuZGV0YWlscyB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlc3RpbmF0aW9uIGxpbmsgZm9yIHRoZSB0aXRsZSBvZiB0aGUgcmVzdWx0IGNhcmRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5saW5rID0gZGF0YS5saW5rIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgRW50aXR5IElELCBvciBvdGhlciB1bmlxdWUgaWRlbnRpZmllciwgdXNlZCBmb3IgdG8gcG93ZXIgaW50ZXJhY3Rpdml0eVxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmlkID0gZGF0YS5pZCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN1YnRpdGxlIG9uIHRoZSByZXN1bHQgY2FyZFxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnN1YnRpdGxlID0gZGF0YS5zdWJ0aXRsZSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNsYXNzIG1vZGlmaWVyLCB1c3VhbGx5IGRlcml2ZWQgZnJvbSB0aGUgdmVydGljYWwgY29uZmlndXJhdGlvbiBJRFxuICAgICAqIFVzZWQgdG8gYXBwbHkgZGlmZmVyZW50IHN0eWxpbmcgdG8gZGlmZmVyZW50IHJlc3VsdCBjYXJkIHR5cGVzXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMubW9kaWZpZXIgPSBkYXRhLm1vZGlmaWVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxhcmdlIGRhdGUsIG9mIHRoZSBmb3JtYXQgeyBtb250aDogJ0phbicsIGRheTogJzAxJyB9XG4gICAgICogQHR5cGUge09iamVjdHxudWxsfVxuICAgICAqL1xuICAgIHRoaXMuYmlnRGF0ZSA9IGRhdGEuYmlnRGF0ZSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW1hZ2UgcHJvZmlsZSBvYmplY3QsIGV4cGVjdGVkIHRvIGhhdmUgYSB1cmwgcHJvcGVydHlcbiAgICAgKiBAdHlwZSB7T2JqZWN0fG51bGx9XG4gICAgICovXG4gICAgdGhpcy5pbWFnZSA9IGRhdGEuaW1hZ2UgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGNhbGxzIHRvIGFjdGlvbiwgb2YgdGhlIGZvcm1hdDpcbiAgICAgKiB7IGljb246ICcnLCB1cmw6ICcnLCB0ZXh0OiAnJywgZXZlbnRUeXBlOiAnJywgZXZlbnRPcHRpb25zOiB7fX1cbiAgICAgKiBAdHlwZSB7QXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5jYWxsc1RvQWN0aW9uID0gZGF0YS5jYWxsc1RvQWN0aW9uIHx8IFtdO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiBhbiBhY2NvcmRpYW4gcmVzdWx0IHNob3VsZCBiZSBjb2xsYXBzZWQgYnkgZGVmYXVsdFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuY29sbGFwc2VkID0gZGF0YS5jb2xsYXBzZWQgfHwgdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVzdWx0RmFjdG9yeSAqL1xuXG5pbXBvcnQgUmVzdWx0IGZyb20gJy4vcmVzdWx0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0RmFjdG9yeSB7XG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBBUEkgcmVzdWx0IG9iamVjdCBpbnRvIGEgUmVzdWx0IHZpZXcgbW9kZWwuXG4gICAqIEluY2x1ZGVzIGRlZmF1bHQgbWFwcGluZ3Mgb2YgR29vZ2xlQ3VzdG9tU2VhcmNoRW5naW5lIHJlc3VsdHMgdG9cbiAgICogdGhlIGZpZWxkcyBleHBvc2VkIGJ5IHRoZSB0ZW1wbGF0ZS5cbiAgICogQHBhcmFtIHJlc3VsdHNEYXRhICB7QXJyYXl9IGV4cGVjdGVkIGZvcm1hdDogeyBkYXRhOiB7IC4uLiB9LCBoaWdobGlnaHRlZEZpZWxkczogeyAuLi4gfX1cbiAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fSBmb3JtYXR0ZXJzIFRoZSBmb3JtYXR0ZXJzIHRvIGFwcGx5IHRvIHRoZSByZXN1bHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnRpY2FsSWQgVGhlIHZlcnRpY2FsIG9mIHRoZXNlIHJlc3VsdHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSBCYWNrZW5kIHNvdXJjZSBvZiB0aGVzZSByZXN1bHRzXG4gICAqIEByZXR1cm5zIHtSZXN1bHRbXX1cbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXN1bHRzRGF0YSwgZm9ybWF0dGVycywgdmVydGljYWxJZCwgc291cmNlKSB7XG4gICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdHNEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBUT0RPIHVzZSByZXN1bHREYXRhLmhpZ2hsaWdodGVkRmllbGRzIHRvXG4gICAgICAvLyB0cmFuc2Zvcm0gcmVzdWx0RGF0YS5kYXRhIGludG8gaHRtbC1mcmllbmRseSBzdHJpbmdzIHRoYXQgaGlnaGxpZ2h0IHZhbHVlcy5cbiAgICAgIC8vIENoZWNrIGZvciBuZXcgZGF0YSBmb3JtYXQsIG90aGVyd2lzZSBmYWxsYmFjayB0byBsZWdhY3lcblxuICAgICAgY29uc3QgZGF0YSA9IHJlc3VsdHNEYXRhW2ldLmRhdGEgfHwgcmVzdWx0c0RhdGFbaV07XG4gICAgICBjb25zdCBmb3JtYXR0ZWREYXRhID0ge307XG4gICAgICBpZiAoT2JqZWN0LmtleXMoZm9ybWF0dGVycykubGVuZ3RoID4gMCkge1xuICAgICAgICBPYmplY3QuZW50cmllcyhkYXRhKS5mb3JFYWNoKChba2V5LCB2YWxdKSA9PiB7XG4gICAgICAgICAgaWYgKGZvcm1hdHRlcnNba2V5XSkge1xuICAgICAgICAgICAgZm9ybWF0dGVkRGF0YVtrZXldID0gZm9ybWF0dGVyc1trZXldKHZhbCwgZGF0YSwgdmVydGljYWxJZCwgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzb3VyY2UgPT09ICdHT09HTEVfQ1NFJyB8fCBzb3VyY2UgPT09ICdDVVNUT01fU0VBUkNIRVInKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChSZXN1bHRGYWN0b3J5LmZyb21Hb29nbGVDdXN0b21TZWFyY2hFbmdpbmUoZGF0YSkpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNvdXJjZSA9PT0gJ0JJTkdfQ1NFJykge1xuICAgICAgICByZXN1bHRzLnB1c2goUmVzdWx0RmFjdG9yeS5mcm9tQmluZ0N1c3RvbVNlYXJjaEVuZ2luZShkYXRhKSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICByZXN1bHRzLnB1c2goUmVzdWx0RmFjdG9yeS5mcm9tR2VuZXJpYyhkYXRhLCBmb3JtYXR0ZWREYXRhLCBpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIGdlbmVyaWMgcmVzdWx0IHZpZXcgbW9kZWwuXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEBwYXJhbSBmb3JtYXR0ZWREYXRhXG4gICAqIEBwYXJhbSBpbmRleFxuICAgKiBAcmV0dXJucyB7UmVzdWx0fVxuICAgKi9cbiAgc3RhdGljIGZyb21HZW5lcmljIChkYXRhLCBmb3JtYXR0ZWREYXRhLCBpbmRleCkge1xuICAgIHJldHVybiBuZXcgUmVzdWx0KHtcbiAgICAgIHJhdzogZGF0YSxcbiAgICAgIGZvcm1hdHRlZDogZm9ybWF0dGVkRGF0YSxcbiAgICAgIHRpdGxlOiBmb3JtYXR0ZWREYXRhLm5hbWUgfHwgZGF0YS5uYW1lLFxuICAgICAgZGV0YWlsczogZm9ybWF0dGVkRGF0YS5kZXNjcmlwdGlvbiB8fCB0aGlzLnRydW5jYXRlKGRhdGEuZGVzY3JpcHRpb24pLFxuICAgICAgbGluazogZGF0YS53ZWJzaXRlLFxuICAgICAgaWQ6IGRhdGEuaWQsXG4gICAgICBvcmRpbmFsOiBpbmRleCArIDFcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBBUEkgcmVzdWx0IG9iamVjdCBpbnRvIGEgcmVzdWx0IHZpZXcgbW9kZWwuXG4gICAqIE1hcHMgdmlldyBtb2RlbCBmaWVsZHMgYmFzZWQgb24gdGhlIEFQSSBkYXRhIGZvciBhIEdvb2dsZSBDdXN0b20gU2VhcmNoIEVuZ2luZSBvYmplY3QuXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEByZXR1cm5zIHtSZXN1bHR9XG4gICAqL1xuICBzdGF0aWMgZnJvbUdvb2dsZUN1c3RvbVNlYXJjaEVuZ2luZSAoZGF0YSkge1xuICAgIHJldHVybiBuZXcgUmVzdWx0KHtcbiAgICAgIHJhdzogZGF0YSxcbiAgICAgIHRpdGxlOiBkYXRhLmh0bWxUaXRsZS5yZXBsYWNlKC8oPChbXj5dKyk+KS9pZywgJycpLFxuICAgICAgZGV0YWlsczogZGF0YS5odG1sU25pcHBldCxcbiAgICAgIGxpbms6IGRhdGEubGlua1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIEFQSSByZXN1bHQgb2JqZWN0IGludG8gYSByZXN1bHQgdmlldyBtb2RlbC5cbiAgICogTWFwcyB2aWV3IG1vZGVsIGZpZWxkcyBiYXNlZCBvbiB0aGUgQVBJIGRhdGEgZm9yIGEgQmluZyBDdXN0b20gU2VhcmNoIEVuZ2luZSBvYmplY3QuXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEByZXR1cm5zIHtSZXN1bHR9XG4gICAqL1xuICBzdGF0aWMgZnJvbUJpbmdDdXN0b21TZWFyY2hFbmdpbmUgKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh7XG4gICAgICByYXc6IGRhdGEsXG4gICAgICB0aXRsZTogZGF0YS5uYW1lLFxuICAgICAgZGV0YWlsczogZGF0YS5zbmlwcGV0LFxuICAgICAgbGluazogZGF0YS51cmxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcnVuY2F0ZXMgc3RyaW5ncyB0byAyNTAgY2hhcmFjdGVycywgYXR0ZW1wdGluZyB0byBwcmVzZXJ2ZSB3aG9sZSB3b3Jkc1xuICAgKiBAcGFyYW0gc3RyIHtzdHJpbmd9IHRoZSBzdHJpbmcgdG8gdHJ1bmNhdGVcbiAgICogQHBhcmFtIGxpbWl0IHtOdW1iZXJ9IHRoZSBtYXhpbXVtIGNoYXJhY3RlciBsZW5ndGggdG8gcmV0dXJuXG4gICAqIEBwYXJhbSB0cmFpbGluZyB7c3RyaW5nfSBhIHRyYWlsaW5nIHN0cmluZyB0byBkZW5vdGUgdHJ1bmNhdGlvbiwgZS5nLiAnLi4uJ1xuICAgKiBAcGFyYW0gc2VwIHtzdHJpbmd9IHRoZSB3b3JkIHNlcGFyYXRvclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIHRydW5jYXRlIChzdHIsIGxpbWl0ID0gMjUwLCB0cmFpbGluZyA9ICcuLi4nLCBzZXAgPSAnICcpIHtcbiAgICBpZiAoIXN0ciB8fCBzdHIubGVuZ3RoIDw9IGxpbWl0KSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIC8vIFRPRE8gKGJtY2dpbm5pcyk6IHNwbGl0IHB1bmN0dWF0aW9uIHRvbyBzbyB3ZSBkb24ndCBlbmQgdXAgd2l0aCBcImZvbywuLi5cIlxuICAgIGNvbnN0IHdvcmRzID0gc3RyLnNwbGl0KHNlcCk7XG4gICAgY29uc3QgbWF4ID0gbGltaXQgLSB0cmFpbGluZy5sZW5ndGg7XG4gICAgbGV0IHRydW5jYXRlZCA9ICcnO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgd29yZCA9IHdvcmRzW2ldO1xuICAgICAgaWYgKHRydW5jYXRlZC5sZW5ndGggKyB3b3JkLmxlbmd0aCA+IG1heCB8fFxuICAgICAgICAoaSAhPT0gMCAmJiB0cnVuY2F0ZWQubGVuZ3RoICsgd29yZC5sZW5ndGggKyBzZXAubGVuZ3RoID4gbWF4KSkge1xuICAgICAgICB0cnVuY2F0ZWQgKz0gdHJhaWxpbmc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICB0cnVuY2F0ZWQgKz0gaSA9PT0gMCA/IHdvcmQgOiBzZXAgKyB3b3JkO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVuY2F0ZWQ7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlY3Rpb24gKi9cblxuaW1wb3J0IFNlYXJjaFN0YXRlcyBmcm9tICcuLi9zdG9yYWdlL3NlYXJjaHN0YXRlcyc7XG5pbXBvcnQgUmVzdWx0RmFjdG9yeSBmcm9tICcuL3Jlc3VsdGZhY3RvcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcbiAgY29uc3RydWN0b3IgKGRhdGEsIHVybCwgZm9ybWF0dGVycykge1xuICAgIHRoaXMuc2VhcmNoU3RhdGUgPSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFO1xuICAgIHRoaXMudmVydGljYWxDb25maWdJZCA9IGRhdGEudmVydGljYWxDb25maWdJZCB8fCBudWxsO1xuICAgIHRoaXMucmVzdWx0c0NvdW50ID0gZGF0YS5yZXN1bHRzQ291bnQgfHwgMDtcbiAgICB0aGlzLmVuY29kZWRTdGF0ZSA9IGRhdGEuZW5jb2RlZFN0YXRlIHx8ICcnO1xuICAgIHRoaXMuYXBwbGllZFF1ZXJ5RmlsdGVycyA9IEFwcGxpZWRRdWVyeUZpbHRlci5mcm9tKGRhdGEuYXBwbGllZFF1ZXJ5RmlsdGVycyk7XG4gICAgdGhpcy5mYWNldHMgPSBkYXRhLmZhY2V0cyB8fCBudWxsO1xuICAgIHRoaXMucmVzdWx0cyA9IFJlc3VsdEZhY3RvcnkuZnJvbShkYXRhLnJlc3VsdHMsIGZvcm1hdHRlcnMsIHRoaXMudmVydGljYWxDb25maWdJZCwgZGF0YS5zb3VyY2UpO1xuICAgIHRoaXMubWFwID0gU2VjdGlvbi5wYXJzZU1hcChkYXRhLnJlc3VsdHMpO1xuICAgIHRoaXMudmVydGljYWxVUkwgPSB1cmwgfHwgbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBwYXJzZU1hcCAocmVzdWx0cykge1xuICAgIGxldCBtYXBNYXJrZXJzID0gW107XG5cbiAgICBsZXQgY2VudGVyQ29vcmRpbmF0ZXMgPSB7fTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmVzdWx0cy5sZW5ndGg7IGorKykge1xuICAgICAgLy8gVE9ETyhiaWxseSkgUmVtb3ZlIGxlZ2FjeSBmYWxsYmFjayBmcm9tIGFsbCBkYXRhIGZvcm1hdFxuICAgICAgbGV0IHJlc3VsdCA9IHJlc3VsdHNbal0uZGF0YSB8fCByZXN1bHRzW2pdO1xuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlKSB7XG4gICAgICAgIGlmICghY2VudGVyQ29vcmRpbmF0ZXMubGF0aXR1ZGUpIHtcbiAgICAgICAgICBjZW50ZXJDb29yZGluYXRlcyA9IHtcbiAgICAgICAgICAgIGxhdGl0dWRlOiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlLmxvbmdpdHVkZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgbWFwTWFya2Vycy5wdXNoKHtcbiAgICAgICAgICBpdGVtOiByZXN1bHQsXG4gICAgICAgICAgbGFiZWw6IG1hcE1hcmtlcnMubGVuZ3RoICsgMSxcbiAgICAgICAgICBsYXRpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sYXRpdHVkZSxcbiAgICAgICAgICBsb25naXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubG9uZ2l0dWRlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAnbWFwQ2VudGVyJzogY2VudGVyQ29vcmRpbmF0ZXMsXG4gICAgICAnbWFwTWFya2Vycyc6IG1hcE1hcmtlcnNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHNlY3Rpb24gZnJvbSB0aGUgcHJvdmlkZWQgZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdHxBcnJheX0gbW9kdWxlcyBUaGUgcmVzdWx0IG1vZHVsZXNcbiAgICogQHBhcmFtIHtPYmplY3R9IHVybHMgVGhlIHRhYiB1cmxzXG4gICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn0gZm9ybWF0dGVycyBGaWVsZCBmb3JtYXR0ZXJzIGZvciByZXN1bHRzXG4gICAqL1xuICBzdGF0aWMgZnJvbSAobW9kdWxlcywgdXJscywgZm9ybWF0dGVycykge1xuICAgIGxldCBzZWN0aW9ucyA9IFtdO1xuICAgIGlmICghbW9kdWxlcykge1xuICAgICAgcmV0dXJuIHNlY3Rpb25zO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShtb2R1bGVzKSkge1xuICAgICAgcmV0dXJuIG5ldyBTZWN0aW9uKG1vZHVsZXMsIG51bGwsIGZvcm1hdHRlcnMpO1xuICAgIH1cblxuICAgIC8vIE91ciBzZWN0aW9ucyBzaG91bGQgY29udGFpbiBhIHByb3BlcnR5IG9mIG1hcE1hcmtlciBvYmplY3RzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzZWN0aW9ucy5wdXNoKFxuICAgICAgICBuZXcgU2VjdGlvbihcbiAgICAgICAgICBtb2R1bGVzW2ldLFxuICAgICAgICAgIHVybHNbbW9kdWxlc1tpXS52ZXJ0aWNhbENvbmZpZ0lkXSxcbiAgICAgICAgICBmb3JtYXR0ZXJzXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlY3Rpb25zO1xuICB9XG59XG5cbmNsYXNzIEFwcGxpZWRRdWVyeUZpbHRlciB7XG4gIC8vIFN1cHBvcnQgbGVnYWN5IG1vZGVsIGFuZCBuZXcgbW9kZWwgdW50aWwgZnVsbHkgbWlncmF0ZWQuXG4gIC8vIFRPRE8oYmlsbHkpIFJlbW92ZSB0aGUgbGVmdCBleHByZXNzaW9uIGR1cmluZyBhc3NpZ25tZW50IHdoZW4gbWlncmF0ZWQuXG4gIGNvbnN0cnVjdG9yIChhcHBsaWVkUXVlcnlGaWx0ZXIpIHtcbiAgICB0aGlzLmtleSA9IGFwcGxpZWRRdWVyeUZpbHRlci5rZXkgfHwgYXBwbGllZFF1ZXJ5RmlsdGVyLmRpc3BsYXlLZXk7XG4gICAgdGhpcy52YWx1ZSA9IGFwcGxpZWRRdWVyeUZpbHRlci52YWx1ZSB8fCBhcHBsaWVkUXVlcnlGaWx0ZXIuZGlzcGxheVZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKGFwcGxpZWRRdWVyeUZpbHRlcnMpIHtcbiAgICBsZXQgZmlsdGVycyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwbGllZFF1ZXJ5RmlsdGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgZmlsdGVycy5wdXNoKG5ldyBBcHBsaWVkUXVlcnlGaWx0ZXIoYXBwbGllZFF1ZXJ5RmlsdGVyc1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVycztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgVW5pdmVyc2FsUmVzdWx0cyAqL1xuXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL3NlY3Rpb24nO1xuaW1wb3J0IFNlYXJjaFN0YXRlcyBmcm9tICcuLi9zdG9yYWdlL3NlYXJjaHN0YXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaXZlcnNhbFJlc3VsdHMge1xuICBjb25zdHJ1Y3RvciAoZGF0YSkge1xuICAgIHRoaXMucXVlcnlJZCA9IGRhdGEucXVlcnlJZCB8fCBudWxsO1xuICAgIHRoaXMuc2VjdGlvbnMgPSBkYXRhLnNlY3Rpb25zIHx8IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHNlYXJjaCwgdXNlZCB0byByZW5kZXIgZGlmZmVyZW50IHRlbXBsYXRlcyBiZWZvcmUsIGR1cmluZyxcbiAgICAgKiBhbmQgYWZ0ZXIgbG9hZGluZ1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zZWFyY2hTdGF0ZSA9IGRhdGEuc2VhcmNoU3RhdGUgfHwgU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdW5pdmVyc2FsIHJlc3VsdHMgZnJvbSBzZXJ2ZXIgZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2UgVGhlIHNlcnZlciByZXNwb25zZVxuICAgKiBAcGFyYW0ge09iamVjdH0gdXJscyBUaGUgdGFiIHVybHNcbiAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fSBmb3JtYXR0ZXJzIFRoZSBmaWVsZCBmb3JtYXR0ZXJzIHRvIHVzZVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlLCB1cmxzLCBmb3JtYXR0ZXJzKSB7XG4gICAgcmV0dXJuIG5ldyBVbml2ZXJzYWxSZXN1bHRzKHtcbiAgICAgIHF1ZXJ5SWQ6IHJlc3BvbnNlLnF1ZXJ5SWQsXG4gICAgICBzZWN0aW9uczogU2VjdGlvbi5mcm9tKHJlc3BvbnNlLm1vZHVsZXMsIHVybHMsIGZvcm1hdHRlcnMpXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0IGEgVW5pdmVydmFsUmVzdWx0cyBvYmplY3QgcmVwcmVzZW50aW5nIGxvYWRpbmcgcmVzdWx0c1xuICAgKiBAcmV0dXJuIHtVbml2ZXJzYWxSZXN1bHRzfVxuICAgKi9cbiAgc3RhdGljIHNlYXJjaExvYWRpbmcgKCkge1xuICAgIHJldHVybiBuZXcgVW5pdmVyc2FsUmVzdWx0cyh7IHNlYXJjaFN0YXRlOiBTZWFyY2hTdGF0ZXMuU0VBUkNIX0xPQURJTkcgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIERpcmVjdEFuc3dlciAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RBbnN3ZXIge1xuICBjb25zdHJ1Y3RvciAoZGlyZWN0QW5zd2VyID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRpcmVjdEFuc3dlcik7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEaXJlY3RBbnN3ZXIgbW9kZWwgZnJvbSB0aGUgZ2l2ZW4gc2VydmVyIGRhdGEgYW5kIGZvcm1hdHRlcnNcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlIFRoZSBzZXJ2ZXIgZGlyZWN0IGFuc3dlclxuICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59IGZvcm1hdHRlcnMgVGhlIGZvcm1hdHRlcnMgdG8gYXBwbHkgdG8gdGhpcyBkaXJlY3QgYW5zd2VyXG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UsIGZvcm1hdHRlcnMpIHtcbiAgICBjb25zdCBkYXRhID0geyAuLi5yZXNwb25zZSB9O1xuICAgIGNvbnN0IHsgYW5zd2VyLCByZWxhdGVkSXRlbSB9ID0gZGF0YTtcblxuICAgIGlmIChhbnN3ZXIgJiYgZm9ybWF0dGVyc1thbnN3ZXIuZmllbGRBcGlOYW1lXSkge1xuICAgICAgYW5zd2VyLnZhbHVlID0gZm9ybWF0dGVyc1thbnN3ZXIuZmllbGRBcGlOYW1lXShcbiAgICAgICAgYW5zd2VyLnZhbHVlLFxuICAgICAgICByZWxhdGVkSXRlbS5kYXRhLmZpZWxkVmFsdWVzLFxuICAgICAgICByZWxhdGVkSXRlbS52ZXJ0aWNhbENvbmZpZ0lkLFxuICAgICAgICB0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERpcmVjdEFuc3dlcihkYXRhKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTmF2aWdhdGlvbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIHtcbiAgY29uc3RydWN0b3IgKHRhYk9yZGVyKSB7XG4gICAgdGhpcy50YWJPcmRlciA9IHRhYk9yZGVyIHx8IFtdO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbSAobW9kdWxlcykge1xuICAgIGxldCBuYXYgPSBbXTtcbiAgICBpZiAoIW1vZHVsZXMgfHwgIUFycmF5LmlzQXJyYXkobW9kdWxlcykpIHtcbiAgICAgIHJldHVybiBuYXY7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbmF2LnB1c2gobW9kdWxlc1tpXS52ZXJ0aWNhbENvbmZpZ0lkKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBOYXZpZ2F0aW9uKG5hdik7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFZlcnRpY2FsUmVzdWx0cyAqL1xuXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL3NlY3Rpb24nO1xuaW1wb3J0IFNlYXJjaFN0YXRlcyBmcm9tICcuLi9zdG9yYWdlL3NlYXJjaHN0YXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRpY2FsUmVzdWx0cyB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHsgc2VhcmNoU3RhdGU6IFNlYXJjaFN0YXRlcy5TRUFSQ0hfQ09NUExFVEUgfSwgZGF0YSk7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmQgdGhlIHByb3ZpZGVkIHJlc3VsdHMgdG8gdGhlIGN1cnJlbnQgcmVzdWx0c1xuICAgKiBAcGFyYW0ge1ZlcnRpY2FsUmVzdWx0c30gcmVzdWx0cyB0aGUgcmVzdWx0cyB0byBhcHBlbmQgdG8gdGhlIGN1cnJlbnQgcmVzdWx0c1xuICAgKi9cbiAgYXBwZW5kIChyZXN1bHRzKSB7XG4gICAgY29uc3QgbWVyZ2VkID0geyAuLi50aGlzIH07XG4gICAgbWVyZ2VkLnJlc3VsdHMgPSB0aGlzLnJlc3VsdHMuY29uY2F0KHJlc3VsdHMucmVzdWx0cyk7XG4gICAgbWVyZ2VkLm1hcC5tYXBNYXJrZXJzID0gdGhpcy5tYXAubWFwTWFya2Vycy5jb25jYXQocmVzdWx0cy5tYXAubWFwTWFya2Vycyk7XG4gICAgcmV0dXJuIG5ldyBWZXJ0aWNhbFJlc3VsdHMobWVyZ2VkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdmVydGljYWwgcmVzdWx0cyBmcm9tIHNlcnZlciBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZSBUaGUgc2VydmVyIHJlc3BvbnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn0gZm9ybWF0dGVycyBUaGUgZmllbGQgZm9ybWF0dGVycyB0byB1c2VcbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSwgZm9ybWF0dGVycykge1xuICAgIHJldHVybiBuZXcgVmVydGljYWxSZXN1bHRzKFNlY3Rpb24uZnJvbShyZXNwb25zZSwgbnVsbCwgZm9ybWF0dGVycykpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIFZlcnRpY2FsUmVzdWx0cyBvYmplY3QgcmVwcmVzZW50aW5nIGxvYWRpbmcgcmVzdWx0c1xuICAgKiBAcmV0dXJuIHtWZXJ0aWNhbFJlc3VsdHN9XG4gICAqL1xuICBzdGF0aWMgc2VhcmNoTG9hZGluZyAoKSB7XG4gICAgcmV0dXJuIG5ldyBWZXJ0aWNhbFJlc3VsdHMoeyBzZWFyY2hTdGF0ZTogU2VhcmNoU3RhdGVzLlNFQVJDSF9MT0FESU5HIH0pO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFN0b3JhZ2VLZXlzICovXG5cbi8qKlxuICogU3RvcmFnZUtleXMgaXMgYW4gRU5VTSBhcmUgY29uc2lkZXJlZCB0aGUgcm9vdCBjb250ZXh0XG4gKiBmb3IgaG93IGRhdGEgaXMgc3RvcmVkIGFuZCBzY29wZWQgaW4gdGhlIHN0b3JhZ2UuXG4gKlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBOQVZJR0FUSU9OOiAnbmF2aWdhdGlvbicsXG4gIFVOSVZFUlNBTF9SRVNVTFRTOiAndW5pdmVyc2FsLXJlc3VsdHMnLFxuICBWRVJUSUNBTF9SRVNVTFRTOiAndmVydGljYWwtcmVzdWx0cycsXG4gIEFVVE9DT01QTEVURTogJ2F1dG9jb21wbGV0ZScsXG4gIERJUkVDVF9BTlNXRVI6ICdkaXJlY3QtYW5zd2VyJyxcbiAgRklMVEVSOiAnZmlsdGVyJyxcbiAgUVVFUlk6ICdxdWVyeScsXG4gIFFVRVJZX0lEOiAncXVlcnktaWQnLFxuICBGQUNFVF9GSUxURVI6ICdmYWNldC1maWx0ZXInLFxuICBEWU5BTUlDX0ZJTFRFUlM6ICdkeW5hbWljLWZpbHRlcnMnLFxuICBTRUFSQ0hfTElNSVQ6ICdzZWFyY2gtbGltaXQnLFxuICBQQVJBTVM6ICdwYXJhbXMnLFxuICBRVUVTVElPTl9TVUJNSVNTSU9OOiAncXVlc3Rpb24tc3VibWlzc2lvbidcbn07XG4iLCIvKiogQG1vZHVsZSBEeW5hbWljRmlsdGVycyAqL1xuXG4vKipcbiAqIE1vZGVsIHJlcHJlc2VudGluZyBhIHNldCBvZiBkeW5hbWljIGZpbHRlcnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHluYW1pY0ZpbHRlcnMge1xuICBjb25zdHJ1Y3RvciAoZGF0YSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGZpbHRlcnMgdGhpcyBtb2RlbCBob2xkc1xuICAgICAqIEB0eXBlIHt7bGFiZWw6IHN0cmluZywgZmllbGRJZDogc3RyaW5nLCBvcHRpb25zOiBvYmplY3RbXX19XG4gICAgICovXG4gICAgdGhpcy5maWx0ZXJzID0gZGF0YS5maWx0ZXJzIHx8IFtdO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogT3JnYW5pemUgJ2ZhY2V0cycgZnJvbSB0aGUgYXBpIHJlc3BvbnNlIGludG8gZHluYW1pYyBmaWx0ZXJzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZSBkeW5hbWljIGZpbHRlciByZXNwb25zZSBmcm9tIHRoZSBhcGlcbiAgICogQHJldHVybnMge0R5bmFtaWNGaWx0ZXJzfVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlKSB7XG4gICAgY29uc3QgeyBmYWNldHMgfSA9IHJlc3BvbnNlO1xuICAgIGNvbnN0IGR5bmFtaWNGaWx0ZXJzID0gZmFjZXRzLm1hcChmID0+ICh7XG4gICAgICBsYWJlbDogZlsnZGlzcGxheU5hbWUnXSxcbiAgICAgIGZpZWxkSWQ6IGZbJ2ZpZWxkSWQnXSxcbiAgICAgIG9wdGlvbnM6IGYub3B0aW9ucy5tYXAobyA9PiAoe1xuICAgICAgICBsYWJlbDogb1snZGlzcGxheU5hbWUnXSxcbiAgICAgICAgY291bnRMYWJlbDogb1snY291bnQnXSxcbiAgICAgICAgc2VsZWN0ZWQ6IG9bJ3NlbGVjdGVkJ10sXG4gICAgICAgIGZpbHRlcjogb1snZmlsdGVyJ11cbiAgICAgIH0pKVxuICAgIH0pKTtcblxuICAgIHJldHVybiBuZXcgRHluYW1pY0ZpbHRlcnMoeyBmaWx0ZXJzOiBkeW5hbWljRmlsdGVycyB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VhcmNoRGF0YVRyYW5zZm9ybWVyICovXG5cbmltcG9ydCBVbml2ZXJzYWxSZXN1bHRzIGZyb20gJy4uL21vZGVscy91bml2ZXJzYWxyZXN1bHRzJztcbmltcG9ydCBEaXJlY3RBbnN3ZXIgZnJvbSAnLi4vbW9kZWxzL2RpcmVjdGFuc3dlcic7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9tb2RlbHMvbmF2aWdhdGlvbic7XG5pbXBvcnQgVmVydGljYWxSZXN1bHRzIGZyb20gJy4uL21vZGVscy92ZXJ0aWNhbHJlc3VsdHMnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IER5bmFtaWNGaWx0ZXJzIGZyb20gJy4uL21vZGVscy9keW5hbWljZmlsdGVycyc7XG5cbi8qKlxuICogQSBEYXRhIFRyYW5zZm9ybWVyIHRoYXQgdGFrZXMgdGhlIHJlc3BvbnNlIG9iamVjdCBmcm9tIGEgU2VhcmNoIHJlcXVlc3RcbiAqIEFuZCB0cmFuc2Zvcm1zIGluIHRvIGEgZnJvbnQtZW5kIG9yaWVudGVkIGRhdGEgc3RydWN0dXJlIHRoYXQgb3VyXG4gKiBjb21wb25lbnQgbGlicmFyeSBhbmQgY29yZSBzdG9yYWdlIHVuZGVyc3RhbmQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaERhdGFUcmFuc2Zvcm1lciB7XG4gIHN0YXRpYyB0cmFuc2Zvcm0gKGRhdGEsIHVybHMgPSB7fSwgZm9ybWF0dGVycykge1xuICAgIGxldCByZXNwb25zZSA9IGRhdGEucmVzcG9uc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtTdG9yYWdlS2V5cy5RVUVSWV9JRF06IHJlc3BvbnNlLnF1ZXJ5SWQsXG4gICAgICBbU3RvcmFnZUtleXMuTkFWSUdBVElPTl06IE5hdmlnYXRpb24uZnJvbShyZXNwb25zZS5tb2R1bGVzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSXTogRGlyZWN0QW5zd2VyLmZyb20ocmVzcG9uc2UuZGlyZWN0QW5zd2VyLCBmb3JtYXR0ZXJzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUU106IFVuaXZlcnNhbFJlc3VsdHMuZnJvbShyZXNwb25zZSwgdXJscywgZm9ybWF0dGVycylcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHRyYW5zZm9ybVZlcnRpY2FsIChkYXRhLCBmb3JtYXR0ZXJzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtTdG9yYWdlS2V5cy5RVUVSWV9JRF06IGRhdGEucmVzcG9uc2UucXVlcnlJZCxcbiAgICAgIFtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXTogbmV3IE5hdmlnYXRpb24oKSwgLy8gVmVydGljYWwgZG9lc24ndCByZXNwb25kIHdpdGggb3JkZXJpbmcsIHNvIHVzZSBlbXB0eSBuYXYuXG4gICAgICBbU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUU106IFZlcnRpY2FsUmVzdWx0cy5mcm9tKGRhdGEucmVzcG9uc2UsIGZvcm1hdHRlcnMpLFxuICAgICAgW1N0b3JhZ2VLZXlzLkRZTkFNSUNfRklMVEVSU106IER5bmFtaWNGaWx0ZXJzLmZyb20oZGF0YS5yZXNwb25zZSlcbiAgICB9O1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBRdWVzdGlvblN1Ym1pc3Npb24gKi9cblxuLyoqXG4gKiBRdWVzdGlvblN1Ym1pc3Npb24gaXMgdGhlIGNvcmUgc3RhdGUgbW9kZWxcbiAqIHRvIHBvd2VyIHRoZSBRdWVzdGlvblN1Ym1pc3Npb24gY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0aW9uU3VibWlzc2lvbiB7XG4gIGNvbnN0cnVjdG9yIChxdWVzdGlvbiA9IHt9LCBlcnJvcnMpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgYXV0aG9yIG9mIHRoZSBxdWVzdGlvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5uYW1lID0gcXVlc3Rpb24ubmFtZSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIHF1ZXN0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmVtYWlsID0gcXVlc3Rpb24uZW1haWwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIHByaXZhY3kgcG9saWN5IHdhcyBhcHByb3ZlZFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucHJpdmFjeVBvbGljeSA9IHF1ZXN0aW9uLnByaXZhY3lQb2xpY3kgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVzdGlvbiB0byBiZSBzZW50IHRvIHRoZSBzZXJ2ZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlc3Rpb25UZXh0ID0gcXVlc3Rpb24ucXVlc3Rpb25UZXh0IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBbHRlcm5hdGl2ZSBxdWVzdGlvbiBtZXRhIGluZm9ybWF0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXN0aW9uRGVzY3JpcHRpb24gPSBxdWVzdGlvbi5xdWVzdGlvbkRlc2NyaXB0aW9uIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBDb250YWlucyBhbnkgZXJyb3JzIGFib3V0IHRoZSBxdWVzdGlvbiBzdWJtaXNzaW9uXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLmVycm9ycyA9IGVycm9ycyB8fCBudWxsO1xuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBzdWJtaXR0ZWQgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBxdWVzdGlvblN1Ym1pdHRlZDogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZXJyb3JzIChxdWVzdGlvbiwgZXJyb3JzKSB7XG4gICAgcmV0dXJuIFF1ZXN0aW9uU3VibWlzc2lvbihxdWVzdGlvbiwgZXJyb3JzKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQ29yZSAqL1xuXG5pbXBvcnQgU2VhcmNoQXBpIGZyb20gJy4vc2VhcmNoL3NlYXJjaGFwaSc7XG5pbXBvcnQgQXV0b0NvbXBsZXRlQXBpIGZyb20gJy4vc2VhcmNoL2F1dG9jb21wbGV0ZWFwaSc7XG5pbXBvcnQgUXVlc3Rpb25BbnN3ZXJBcGkgZnJvbSAnLi9zZWFyY2gvcXVlc3Rpb25hbnN3ZXJhcGknO1xuXG5pbXBvcnQgU2VhcmNoRGF0YVRyYW5zZm9ybWVyIGZyb20gJy4vc2VhcmNoL3NlYXJjaGRhdGF0cmFuc2Zvcm1lcic7XG5cbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFZlcnRpY2FsUmVzdWx0cyBmcm9tICcuL21vZGVscy92ZXJ0aWNhbHJlc3VsdHMnO1xuaW1wb3J0IFVuaXZlcnNhbFJlc3VsdHMgZnJvbSAnLi9tb2RlbHMvdW5pdmVyc2FscmVzdWx0cyc7XG5pbXBvcnQgUXVlc3Rpb25TdWJtaXNzaW9uIGZyb20gJy4vbW9kZWxzL3F1ZXN0aW9uc3VibWlzc2lvbic7XG5cbi8qKlxuICogQ29yZSBpcyB0aGUgbWFpbiBhcHBsaWNhdGlvbiBjb250YWluZXIgZm9yIGFsbCBvZiB0aGUgbmV0d29yayBhbmQgc3RvcmFnZVxuICogcmVsYXRlZCBiZWhhdmlvcnMgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JlIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcuYXBpS2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGBhcGlLZXlgLiBUeXBlIG11c3QgYmUge3N0cmluZ30nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5hbnN3ZXJzS2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGBhbnN3ZXJzS2V5YC4gVHlwZSBtdXN0IGJlIHtzdHJpbmd9Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNsaWVudCBBUEkgS2V5IHVzZWQgZm9yIGFsbCByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBjb25maWcuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNsaWVudCBBbnN3ZXJzIEtleSB1c2VkIGZvciBhbGwgcmVxdWVzdHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYW5zd2Vyc0tleSA9IGNvbmZpZy5hbnN3ZXJzS2V5O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNsaWVudCBsb2NhbGUgdXNlZCBmb3IgYWxsIHJlcXVlc3RzLiBJZiBub3Qgc3BlY2lmaWVkLCBkZWZhdWx0cyB0byBcImVuXCIgKGZvclxuICAgICAqIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5KS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbG9jYWxlID0gY29uZmlnLmxvY2FsZSB8fCAnZW4nO1xuXG4gICAgLyoqXG4gICAgICogQSBtYXAgb2YgZmllbGQgZm9ybWF0dGVycyB1c2VkIHRvIGZvcm1hdCByZXN1bHRzLCBpZiBwcmVzZW50XG4gICAgICogQHR5cGUge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWVsZEZvcm1hdHRlcnMgPSBjb25maWcuZmllbGRGb3JtYXR0ZXJzIHx8IHt9O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNvcmUgZGF0YSBzdG9yYWdlIHRoYXQgcG93ZXJzIHRoZSBVSVxuICAgICAqIEB0eXBlIHtHbG9iYWxTdG9yYWdlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlID0gY29uZmlnLmdsb2JhbFN0b3JhZ2U7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY29yZSBwZXJzaXN0ZW50IHN0b3JhZ2VcbiAgICAgKiBAdHlwZSB7UGVyc2lzdGVudFN0b3JhZ2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnBlcnNpc3RlbnRTdG9yYWdlID0gY29uZmlnLnBlcnNpc3RlbnRTdG9yYWdlO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3Rpb24gY29udGFpbmluZyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgUkVTVGZ1bCBzZWFyY2ggQVBJXG4gICAgICogRm9yIGJvdGggdmVydGljYWwgYW5kIHVuaXZlcnNhbCBzZWFyY2hcbiAgICAgKiBAdHlwZSB7U2VhcmNofVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc2VhcmNoZXIgPSBuZXcgU2VhcmNoQXBpKHtcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgYW5zd2Vyc0tleTogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgIGxvY2FsZTogdGhpcy5fbG9jYWxlXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiBjb250YWluaW5nIHRoZSBpbnRlZ3JhdGlvbiB3aXRoIHRoZSBSRVNUZnVsIGF1dG9jb21wbGV0ZSBBUElcbiAgICAgKiBGb3IgZmlsdGVyIHNlYXJjaCwgdmVydGljYWwgYXV0b2NvbXBsZXRlLCBhbmQgdW5pdmVyc2FsIGF1dG9jb21wbGV0ZVxuICAgICAqIEB0eXBlIHtBdXRvY29tcGxldGV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hdXRvQ29tcGxldGUgPSBuZXcgQXV0b0NvbXBsZXRlQXBpKHtcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgYW5zd2Vyc0tleTogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgIGxvY2FsZTogdGhpcy5fbG9jYWxlXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgUSZBIHJlc3QgaW50ZXJmYWNlXG4gICAgICogQHR5cGUge1F1ZXN0aW9uQW5zd2VyQXBpfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcXVlc3Rpb25BbnN3ZXIgPSBuZXcgUXVlc3Rpb25BbnN3ZXJBcGkoe1xuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXlcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggaW4gdGhlIGNvbnRleHQgb2YgYSB2ZXJ0aWNhbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmVydGljYWxLZXkgdmVydGljYWwgSUQgZm9yIHRoZSBzZWFyY2hcbiAgICogQHBhcmFtIHtvYmplY3R9IHF1ZXJ5IFRoZSBxdWVyeSBkZXRhaWxzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5pbnB1dCBUaGUgaW5wdXQgdG8gc2VhcmNoIGZvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuZmlsdGVyIFRoZSBmaWx0ZXIgdG8gdXNlIGluIHRoZSBzZWFyY2hcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmZhY2V0RmlsdGVyIFRoZSBmYWNldCBmaWx0ZXIgdG8gdXNlIGluIHRoZSBzZWFyY2hcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1ZXJ5LmxpbWl0IFRoZSBtYXggbnVtYmVyIG9mIHJlc3VsdHMgdG8gaW5jbHVkZSwgbWF4IG9mIDUwXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBxdWVyeS5vZmZzZXQgVGhlIHJlc3VsdHMgb2Zmc2V0LCBmb3IgZmV0Y2hpbmcgbW9yZSByZXN1bHRzIG9mIHRoZSBzYW1lIHF1ZXJ5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5pZCBUaGUgcXVlcnkgSUQgdG8gdXNlLiBJZiBwYWdpbmcgd2l0aGluIGEgcXVlcnksIHRoZSBzYW1lIElEIHNob3VsZCBiZSB1c2VkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcXVlcnkuYXBwZW5kIElmIHRydWUsIGFkZHMgdGhlIHJlc3VsdHMgb2YgdGhpcyBxdWVyeSB0byB0aGUgZW5kIG9mIHRoZSBjdXJyZW50IHJlc3VsdHMsIGRlZmF1bHRzIGZhbHNlXG4gICAqL1xuICB2ZXJ0aWNhbFNlYXJjaCAodmVydGljYWxLZXksIHF1ZXJ5KSB7XG4gICAgaWYgKCFxdWVyeS5hcHBlbmQpIHtcbiAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUywgVmVydGljYWxSZXN1bHRzLnNlYXJjaExvYWRpbmcoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaGVyXG4gICAgICAudmVydGljYWxTZWFyY2godmVydGljYWxLZXksIHtcbiAgICAgICAgbGltaXQ6IHRoaXMuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5TRUFSQ0hfTElNSVQpLFxuICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQ6IHRoaXMuX2lzRHluYW1pY0ZpbHRlcnNFbmFibGVkXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gU2VhcmNoRGF0YVRyYW5zZm9ybWVyLnRyYW5zZm9ybVZlcnRpY2FsKHJlc3BvbnNlLCB0aGlzLl9maWVsZEZvcm1hdHRlcnMpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFUllfSUQsIGRhdGFbU3RvcmFnZUtleXMuUVVFUllfSURdKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5OQVZJR0FUSU9OLCBkYXRhW1N0b3JhZ2VLZXlzLk5BVklHQVRJT05dKTtcblxuICAgICAgICBpZiAocXVlcnkuYXBwZW5kKSB7XG4gICAgICAgICAgY29uc3QgbWVyZ2VkUmVzdWx0cyA9IHRoaXMuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTKVxuICAgICAgICAgICAgLmFwcGVuZChkYXRhW1N0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFNdKTtcbiAgICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFMsIG1lcmdlZFJlc3VsdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUywgZGF0YVtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YVtTdG9yYWdlS2V5cy5EWU5BTUlDX0ZJTFRFUlNdKSB7XG4gICAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5EWU5BTUlDX0ZJTFRFUlMsIGRhdGFbU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoIChxdWVyeVN0cmluZywgdXJscykge1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFMsIFVuaXZlcnNhbFJlc3VsdHMuc2VhcmNoTG9hZGluZygpKTtcblxuICAgIHJldHVybiB0aGlzLl9zZWFyY2hlclxuICAgICAgLnVuaXZlcnNhbFNlYXJjaChxdWVyeVN0cmluZylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IFNlYXJjaERhdGFUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVzcG9uc2UsIHVybHMsIHRoaXMuX2ZpZWxkRm9ybWF0dGVycykpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWV9JRCwgZGF0YVtTdG9yYWdlS2V5cy5RVUVSWV9JRF0pO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLk5BVklHQVRJT04sIGRhdGFbU3RvcmFnZUtleXMuTkFWSUdBVElPTl0pO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVIsIGRhdGFbU3RvcmFnZUtleXMuRElSRUNUX0FOU1dFUl0pO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTLCBkYXRhW1N0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTXSwgdXJscyk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFU1RJT05fU1VCTUlTU0lPTiwgbmV3IFF1ZXN0aW9uU3VibWlzc2lvbih7XG4gICAgICAgICAgcXVlc3Rpb25UZXh0OiBxdWVyeVN0cmluZ1xuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhbiBpbnB1dCwgcXVlcnkgZm9yIGEgbGlzdCBvZiBzaW1pbGFyIHJlc3VsdHMgYW5kIHNldCBpbnRvIHN0b3JhZ2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0ICAgICB0aGUgc3RyaW5nIHRvIGF1dG9jb21wbGV0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIHRoZSBuYW1lc3BhY2UgdG8gdXNlIGZvciB0aGUgc3RvcmFnZSBrZXlcbiAgICovXG4gIGF1dG9Db21wbGV0ZVVuaXZlcnNhbCAoaW5wdXQsIG5hbWVzcGFjZSkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvQ29tcGxldGVcbiAgICAgIC5xdWVyeVVuaXZlcnNhbChpbnB1dClcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkFVVE9DT01QTEVURX0uJHtuYW1lc3BhY2V9YCwgZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhbiBpbnB1dCwgcXVlcnkgZm9yIGEgbGlzdCBvZiBzaW1pbGFyIHJlc3VsdHMgaW4gdGhlIHByb3ZpZGVkIHZlcnRpY2FsXG4gICAqIGFuZCBzZXQgaW50byBzdG9yYWdlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCAgICAgICB0aGUgc3RyaW5nIHRvIGF1dG9jb21wbGV0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIHRoZSBuYW1lc3BhY2UgdG8gdXNlIGZvciB0aGUgc3RvcmFnZSBrZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnRpY2FsS2V5IHRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBleHBlcmllbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiYXJLZXkgICAgICB0aGUgYmFyIGtleSBmb3IgdGhlIGV4cGVyaWVuY2VcbiAgICovXG4gIGF1dG9Db21wbGV0ZVZlcnRpY2FsIChpbnB1dCwgbmFtZXNwYWNlLCB2ZXJ0aWNhbEtleSwgYmFyS2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5VmVydGljYWwoaW5wdXQsIHZlcnRpY2FsS2V5LCBiYXJLZXkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5BVVRPQ09NUExFVEV9LiR7bmFtZXNwYWNlfWAsIGRhdGEpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYW4gaW5wdXQsIHByb3ZpZGUgYSBsaXN0IG9mIHN1aXRhYmxlIGZpbHRlcnMgZm9yIGF1dG9jb21wbGV0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCAgICAgICAgIHRoZSBzdHJpbmcgdG8gc2VhcmNoIGZvciBmaWx0ZXJzIHdpdGhcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSAgICAgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmVydGljYWxLZXkgICB0aGUgdmVydGljYWwga2V5IGZvciB0aGUgZXhwZXJpZW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gYmFyS2V5ICAgICAgICB0aGUgYmFyIGtleSBmb3IgdGhlIGV4cGVyaWVuY2VcbiAgICovXG4gIGF1dG9Db21wbGV0ZUZpbHRlciAoaW5wdXQsIG5hbWVzcGFjZSwgdmVydGljYWxLZXksIGJhcktleSkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvQ29tcGxldGVcbiAgICAgIC5xdWVyeUZpbHRlcihpbnB1dCwgdmVydGljYWxLZXksIGJhcktleSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkFVVE9DT01QTEVURX0uJHtuYW1lc3BhY2V9YCwgZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJtaXRzIGEgcXVlc3Rpb24gdG8gdGhlIHNlcnZlciBhbmQgdXBkYXRlcyB0aGUgdW5kZXJseWluZyBxdWVzdGlvbiBtb2RlbFxuICAgKiBAcGFyYW0ge29iamVjdH0gcXVlc3Rpb24gVGhlIHF1ZXN0aW9uIG9iamVjdCB0byBzdWJtaXQgdG8gdGhlIHNlcnZlclxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlc3Rpb24uZW50aXR5SWQgVGhlIGVudGl0eSB0byBhc3NvY2lhdGUgd2l0aCB0aGUgcXVlc3Rpb24gKHJlcXVpcmVkKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ubGFudWFnZSBUaGUgbGFuZ3VhZ2Ugb2YgdGhlIHF1ZXN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5zaXRlIFRoZSBcInB1Ymxpc2hlclwiIG9mIHRoZSAoZS5nLiAnRklSU1RfUEFSVFknKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ubmFtZSBUaGUgbmFtZSBvZiB0aGUgYXV0aG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5lbWFpbCBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgYXV0aG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5xdWVzdGlvblRleHQgVGhlIHF1ZXN0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVzdGlvbi5xdWVzdGlvbkRlc2NyaXB0aW9uIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHF1ZXN0aW9uXG4gICAqL1xuICBzdWJtaXRRdWVzdGlvbiAocXVlc3Rpb24pIHtcbiAgICByZXR1cm4gdGhpcy5fcXVlc3Rpb25BbnN3ZXJcbiAgICAgIC5zdWJtaXRRdWVzdGlvbihxdWVzdGlvbilcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFxuICAgICAgICAgIFN0b3JhZ2VLZXlzLlFVRVNUSU9OX1NVQk1JU1NJT04sXG4gICAgICAgICAgUXVlc3Rpb25TdWJtaXNzaW9uLnN1Ym1pdHRlZCgpKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgZ2l2ZW4gcXVlcnkgaW50byBzdG9yYWdlLCB0byBiZSB1c2VkIGZvciB0aGUgbmV4dCBzZWFyY2hcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBxdWVyeSB0byBzdG9yZVxuICAgKi9cbiAgc2V0UXVlcnkgKHF1ZXJ5KSB7XG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWSwgcXVlcnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgcHJvdmlkZWQgcXVlcnkgSUQsIHRvIGJlIHVzZWQgaW4gYW5hbHl0aWNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeUlkIFRoZSBxdWVyeSBpZCB0byBzdG9yZVxuICAgKi9cbiAgc2V0UXVlcnlJZCAocXVlcnlJZCkge1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFUllfSUQsIHF1ZXJ5SWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgZ2l2ZW4gZmlsdGVyIGludG8gc3RvcmFnZSwgdG8gYmUgdXNlZCBmb3IgdGhlIG5leHQgc2VhcmNoXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKiBAcGFyYW0ge0ZpbHRlcn0gZmlsdGVyICAgIHRoZSBmaWx0ZXIgdG8gc2V0XG4gICAqL1xuICBzZXRGaWx0ZXIgKG5hbWVzcGFjZSwgZmlsdGVyKSB7XG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7bmFtZXNwYWNlfWAsIGZpbHRlcik7XG4gIH1cblxuICBzZXRGYWNldEZpbHRlciAobmFtZXNwYWNlLCBmaWx0ZXIpIHtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkZBQ0VUX0ZJTFRFUn0uJHtuYW1lc3BhY2V9YCwgZmlsdGVyKTtcbiAgfVxuXG4gIGVuYWJsZUR5bmFtaWNGaWx0ZXJzICgpIHtcbiAgICB0aGlzLl9pc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBzZXRTZWFyY2hMaW1pdCAobGltaXQpIHtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlNFQVJDSF9MSU1JVCwgbGltaXQpO1xuICB9XG5cbiAgb24gKGV2dCwgbW9kdWxlSWQsIGNiKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2xvYmFsU3RvcmFnZS5vbihldnQsIG1vZHVsZUlkLCBjYik7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIENvbXBvbmVudE1hbmFnZXIgKi9cblxuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBDb21wb25lbnRNYW5hZ2VyIGlzIGEgU2luZ2xldG9uZSB0aGF0IGNvbnRhaW5zIGJvdGggYW4gaW50ZXJuYWwgcmVnaXN0cnkgb2ZcbiAqIGVsaWdpYmxlIGNvbXBvbmVudHMgdG8gYmUgY3JlYXRlZCwgYXMgd2VsbCBhcyBrZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudFxuICogaW5zdGFudGlhdGVkIGFuZCBhY3RpdmUgY29tcG9uZW50cy5cbiAqXG4gKiBBTEwgY29tcG9uZW50cyBzaG91bGQgYmUgY29uc3RydWN0ZWQgdXNpbmcgdGhlIHtDb21wb25lbnRNYW5hZ2VyfSB2aWEgaXRzIGBjcmVhdGVgIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50TWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBpZiAoIUNvbXBvbmVudE1hbmFnZXIuc2V0SW5zdGFuY2UodGhpcykpIHtcbiAgICAgIHJldHVybiBDb21wb25lbnRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudCByZWdpc3RyeSBpcyBhbiBpbnRlcm5hbCBtYXAsIHRoYXQgY29udGFpbnNcbiAgICAgKiBhbGwgYXZhaWxhYmxlIGNvbXBvbmVudCBDTEFTU0VTIHVzZWQgZm9yIGNyZWF0aW9uIG9yIG92ZXJyaWRlLlxuICAgICAqIEVhY2ggY29tcG9uZW50IGNsYXNzIGhhcyBhIHVuaXF1ZSBUWVBFLCB3aGljaCBpcyB1c2VkIGFzIHRoZSBrZXkgZm9yIHRoZSByZWdpc3RyeVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5fY29tcG9uZW50UmVnaXN0cnkgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhY3RpdmUgY29tcG9uZW50cyBpcyBhbiBpbnRlcm5hbCBjb250YWluZXIgdG8ga2VlcCB0cmFja1xuICAgICAqIG9mIGFsbCBvZiB0aGUgY29tcG9uZW50cyB0aGF0IGhhdmUgYmVlbiBjb25zdHJ1Y3RlZFxuICAgICAqL1xuICAgIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb3JlIGxpYnJhcnkgZGVwZW5kZW5jeVxuICAgICAqXG4gICAgICogVGhlIENvcmUgY29udGFpbnMgYm90aCB0aGUgc3RvcmFnZSBBTkQgc2VydmljZXMgdGhhdCBhcmUgbmVlZGVkIGZvciBwZXJmb3JtaW5nIG9wZXJhdGlvbnNcbiAgICAgKiBsaWtlIHNlYXJjaCBhbmQgYXV0byBjb21wbGV0ZS5cbiAgICAgKlxuICAgICAqIFRoZSBzdG9yYWdlIGlzIHRoZSBzb3VyY2Ugb2YgdHJ1dGggZm9yIHRoZSBzdGF0ZSBvZiBBTEwgY29tcG9uZW50cy5cbiAgICAgKiBXaGVuZXZlciB0aGUgc3RvcmFnZSBpcyB1cGRhdGVkLCB0aGUgc3RhdGUgZ2V0cyBwdXNoZWQgZG93biB0byB0aGUgbmVjZXNzYXJ5IGNvbXBvbmVudHMuXG4gICAgICogQHR5cGUge0NvcmV9XG4gICAgICovXG4gICAgdGhpcy5fY29yZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcHJpbWFyeSByZW5kZXJlciB0byB1c2UgZm9yIGFsbCBjb21wb25lbnRzXG4gICAgICogQHR5cGUge0hhbmRsZWJhcnNSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXJlciA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgYW5hbHl0aWNzIHJlcG9ydGVyIGRlcGVuZGVuY3lcbiAgICAgKi9cbiAgICB0aGlzLl9hbmFseXRpY3NSZXBvcnRlciA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgc2V0SW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIHNldFJlbmRlcmVyIChyZW5kZXJlcikge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRDb3JlIChjb3JlKSB7XG4gICAgdGhpcy5fY29yZSA9IGNvcmU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRBbmFseXRpY3NSZXBvcnRlciAocmVwb3J0ZXIpIHtcbiAgICB0aGlzLl9hbmFseXRpY3NSZXBvcnRlciA9IHJlcG9ydGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlZ2lzdGVycyBhIGNvbXBvbmVudCB0byBiZSBlbGlnaWJsZSBmb3IgY3JlYXRpb24gYW5kIG92ZXJyaWRlLlxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gVGhlIENvbXBvbmVudCBDbGFzcyB0byByZWdpc3RlclxuICAgKi9cbiAgcmVnaXN0ZXIgKGNvbXBvbmVudENsYXp6KSB7XG4gICAgdGhpcy5fY29tcG9uZW50UmVnaXN0cnlbY29tcG9uZW50Q2xhenoudHlwZV0gPSBjb21wb25lbnRDbGF6ejtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGUgaXMgdGhlIGVudHJ5IHBvaW50IGZvciBjb25zdHJ1Y3RpbmcgYW55IGFuZCBhbGwgY29tcG9uZW50cy5cbiAgICogSXQgd2lsbCBpbnN0YW50aWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgY29tcG9uZW50LCBhbmQgYm90aCBhcHBseVxuICAgKiBpbml0aWFsIHN0YXRlIGZyb20gdGhlIHN0b3JhZ2UgYW5kIGJpbmQgaXQgdG8gdGhlIHN0b3JhZ2UgZm9yIHVwZGF0ZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnRUeXBlIFRoZSBjb21wb25lbnQgdHlwZSB0byBjcmVhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgVGhlIG9wdGlvbnMgdG8gcGlwZSB0byB0aGUgY29uc3RydWN0aW9uIG9mIHRoZSBjb21wb25lbnRcbiAgICovXG4gIGNyZWF0ZSAoY29tcG9uZW50VHlwZSwgb3B0cykge1xuICAgIC8vIEV2ZXJ5IGNvbXBvbmVudCBuZWVkcyBsb2NhbCBhY2Nlc3MgdG8gdGhlIGNvbXBvbmVudCBtYW5hZ2VyXG4gICAgLy8gYmVjYXVzZSBzb21ldGltZXMgY29tcG9uZW50cyBoYXZlIHN1YmNvbXBvbmVudHMgdGhhdCBuZWVkIHRvIGJlXG4gICAgLy8gY29uc3RydWN0ZWQgZHVyaW5nIGNyZWF0aW9uXG4gICAgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29yZTogdGhpcy5fY29yZSxcbiAgICAgIHJlbmRlcmVyOiB0aGlzLl9yZW5kZXJlcixcbiAgICAgIGFuYWx5dGljc1JlcG9ydGVyOiB0aGlzLl9hbmFseXRpY3NSZXBvcnRlcixcbiAgICAgIGNvbXBvbmVudE1hbmFnZXI6IHRoaXNcbiAgICB9LCBvcHRzKTtcblxuICAgIGxldCBjb21wb25lbnRDbGFzcyA9IHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5W2NvbXBvbmVudFR5cGVdO1xuXG4gICAgaWYgKFxuICAgICAgIWNvbXBvbmVudENsYXNzLmFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCgpICYmXG4gICAgICB0aGlzLl9hY3RpdmVDb21wb25lbnRzLnNvbWUoYyA9PiBjLm5hbWUgPT09IG9wdHMubmFtZSlcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgIGBBbm90aGVyIGNvbXBvbmVudCB3aXRoIG5hbWUgJHtvcHRzLm5hbWV9IGFscmVhZHkgZXhpc3RzYCxcbiAgICAgICAgY29tcG9uZW50VHlwZSk7XG4gICAgfVxuXG4gICAgLy8gSW5zdGFudGlhdGUgb3VyIG5ldyBjb21wb25lbnQgYW5kIGtlZXAgdHJhY2sgb2YgaXRcbiAgICBsZXQgY29tcG9uZW50ID1cbiAgICAgIG5ldyB0aGlzLl9jb21wb25lbnRSZWdpc3RyeVtjb21wb25lbnRUeXBlXShvcHRzKVxuICAgICAgICAuaW5pdChvcHRzKTtcblxuICAgIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBnbG9iYWwgc3RvcmFnZSB0byBwb3dlciBzdGF0ZSwgYXBwbHkgdGhlIHN0YXRlXG4gICAgLy8gZnJvbSB0aGUgc3RvcmFnZSB0byB0aGUgY29tcG9uZW50LCBhbmQgdGhlbiBiaW5kIHRoZSBjb21wb25lbnRcbiAgICAvLyBzdGF0ZSB0byB0aGUgc3RvcmFnZSB2aWEgaXRzIHVwZGF0ZXNcbiAgICBpZiAodGhpcy5fY29yZSAmJiB0aGlzLl9jb3JlLmdsb2JhbFN0b3JhZ2UgIT09IG51bGwpIHtcbiAgICAgIGlmIChjb21wb25lbnQubW9kdWxlSWQgPT09IHVuZGVmaW5lZCB8fCBjb21wb25lbnQubW9kdWxlSWQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY29yZS5nbG9iYWxTdG9yYWdlXG4gICAgICAgIC5vbigndXBkYXRlJywgY29tcG9uZW50Lm1vZHVsZUlkLCAoZGF0YSkgPT4ge1xuICAgICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHByb3ZpZGVkIGNvbXBvbmVudCBmcm9tIHRoZSBsaXN0IG9mIGFjdGl2ZSBjb21wb25lbnRzIGFuZCByZW1vdmVcbiAgICogdGhlIGFzc29jaWF0ZWQgc3RvcmFnZSBldmVudCBsaXN0ZW5lclxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gY29tcG9uZW50IFRoZSBjb21wb25lbnQgdG8gcmVtb3ZlXG4gICAqL1xuICByZW1vdmUgKGNvbXBvbmVudCkge1xuICAgIHRoaXMuX2NvcmUuZ2xvYmFsU3RvcmFnZS5vZmYoJ3VwZGF0ZScsIGNvbXBvbmVudC5tb2R1bGVJZCk7XG5cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMuZmluZEluZGV4KGMgPT4gYy5uYW1lID09PSBjb21wb25lbnQubmFtZSk7XG4gICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgZ2V0QWN0aXZlQ29tcG9uZW50ICh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMuZmluZChjID0+IGMuY29uc3RydWN0b3IudHlwZSA9PT0gdHlwZSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlbmRlcmVyICovXG5cbi8qKlxuICogUmVuZGVyZXIgaXMgYW4gYWJzdHJhY3QgY2xhc3MgdGhhdCBhbGwgUmVuZGVyZXJzIHNob3VsZCBleHRlbmQgYW5kIGltcGxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciB7XG4gIC8qKlxuICAgKiByZW5kZXIgaXMgYSBjb3JlIG1ldGhvZCBmb3IgYWxsIHJlbmRlcmVycy5cbiAgICogQWxsIGltcGxlbWVudGF0aW9ucyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBjbGFzc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICovXG4gIHJlbmRlciAodGVtcGxhdGUsIGRhdGEpIHtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICByZWdpc3RlckhlbHBlciAobmFtZSwgY2IpIHtcblxuICB9XG5cbiAgY29tcGlsZSAodGVtcGxhdGUpIHtcblxuICB9XG59XG4iLCIvKiogQG1vZHVsZSBIYW5kbGViYXJzUmVuZGVyZXIgKi9cblxuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG4vKipcbiAqIEhhbmRsZWJhcnNSZW5kZXJlciBpcyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBuYXRpdmF0ZSBoYW5kbGViYXJzIHJlbmRlcmVyLlxuICogQGV4dGVuZHMgUmVuZGVyZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFuZGxlYmFyc1JlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvciAodGVtcGxhdGVzID0ge30sIG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgaGFuZGxlYmFycyBjb21waWxlclxuICAgICAqIEB0eXBlIHtIYW5kbGViYXJzfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faGFuZGxlYmFycyA9IHRlbXBsYXRlcy5faGIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBwcmUtY29tcGlsZWQgaGFuZGxlYmFycyB0ZW1wbGF0ZXNcbiAgICAgKiBAdHlwZSB7SGFuZGxlYmFyc31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHRlbXBsYXRlcyB8fCB7fTtcbiAgfVxuXG4gIGluaXQgKHRlbXBsYXRlcykge1xuICAgIC8vIEFzc2lnbiB0aGUgaGFuZGxlYmFycyBjb21waWxlciBhbmQgdGVtcGxhdGVzIGJhc2VkIG9uXG4gICAgLy8gaW5mb3JtYXRpb24gcHJvdmlkZWQgZnJvbSBleHRlcm5hbCBkZXAgKGluIGRlZmF1bHQgY2FzZSwgaXQgY29tZXMgZnJvbSBleHRlcm5hbCBzZXJ2ZXIgcmVxdWVzdClcbiAgICB0aGlzLl9oYW5kbGViYXJzID0gdGVtcGxhdGVzLl9oYjtcbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXM7XG5cbiAgICAvLyBUT0RPKGJpbGx5KSBPbmNlIHdlIHJlLXdyaXRlIHRlbXBsYXRlcyB1c2luZyB0aGUgbmV3IGhlbHBlcnMgbGlicmFyeVxuICAgIC8vIHdlIHByb2JhYmx5IGRvbid0IG5lZWQgdGhlc2UgY3VzdG9tIGhlbHBlcnMgYW55bW9yZVxuICAgIHRoaXMuX3JlZ2lzdGVyQ3VzdG9tSGVscGVycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlZ2lzdGVySGVscGVyIGlzIGEgcHVibGljIGludGVyZmFjZSBmb3IgZXh0ZXJuYWwgZGVwZW5kZW5jaWVzIHRvXG4gICAqIHJlZ2lzdGVyIHRoZWlyIG93biBjdXN0b20gaGVscGVycyB0byBvdXIgaW50ZXJuYWwgSGFuZGxlYmFycyBDb21waWxlclxuICAgKi9cbiAgcmVnaXN0ZXJIZWxwZXIgKG5hbWUsIGNiKSB7XG4gICAgdGhpcy5faGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihuYW1lLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogY29tcGlsZSBhIGhhbmRsZWJhcnMgdGVtcGxhdGUgc28gdGhhdCBpdCBjYW4gYmUgcmVuZGVyZWQsXG4gICAqIHVzaW5nIHRoZSB7SGFuZGxlYmFyc30gY29tcGlsZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlIFRoZSB0ZW1wbGF0ZSBzdHJpbmcgdG8gY29tcGlsZVxuICAgKi9cbiAgY29tcGlsZSAodGVtcGxhdGUpIHtcbiAgICBpZiAodHlwZW9mIHRlbXBsYXRlICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faGFuZGxlYmFycy5jb21waWxlKHRlbXBsYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZW5kZXIgd2lsbCByZW5kZXIgYSB0ZW1wbGF0ZSB3aXRoIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBQcm92aWRlIGVpdGhlciBhIHRlbXBsYXRlTmFtZSBvciBhIHByZS1jb21waWxlZCB0ZW1wbGF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBwcm92aWRlIHRvIHRoZSB0ZW1wbGF0ZVxuICAgKi9cbiAgcmVuZGVyIChjb25maWcsIGRhdGEpIHtcbiAgICAvLyBJZiBhIGN1c3RvbSB0ZW1wbGF0ZSBpcyBwcm92aWRlZCwgdXNlIGl0LFxuICAgIC8vIG90aGVyd2lzZSBmYWxsIGJhY2sgdG8gdGhlIHRlbXBsYXRlIG5hbWVcbiAgICAvLyBUT0RPKGJpbGx5KSBUaGlzIGludGVyZmFjZSBzaG91bGQgcHJvYmFibHkgYmUgbGVzcyB1Z2x5XG4gICAgaWYgKGNvbmZpZy50ZW1wbGF0ZSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNvbmZpZy50ZW1wbGF0ZShkYXRhKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlc1tjb25maWcudGVtcGxhdGVOYW1lXShkYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgZmluZC9yZW5kZXIgdGVtcGxhdGU6ICcgKyBjb25maWcudGVtcGxhdGVOYW1lLCBlKTtcbiAgICB9XG4gIH1cblxuICBfcmVnaXN0ZXJDdXN0b21IZWxwZXJzICgpIHtcbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdpZmVxJywgZnVuY3Rpb24gKGFyZzEsIGFyZzIsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiAoYXJnMSA9PT0gYXJnMikgPyBvcHRpb25zLmZuKHRoaXMpIDogb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignaWZub3RlcScsIGZ1bmN0aW9uIChhcmcxLCBhcmcyLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gKGFyZzEgIT09IGFyZzIpID8gb3B0aW9ucy5mbih0aGlzKSA6IG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2Zvcm1hdFBob25lTnVtYmVyJywgZnVuY3Rpb24gKHBob25lTnVtYmVyU3RyaW5nKSB7XG4gICAgICB2YXIgY2xlYW5lZCA9ICgnJyArIHBob25lTnVtYmVyU3RyaW5nKS5yZXBsYWNlKC9cXEQvZywgJycpO1xuICAgICAgdmFyIG1hdGNoID0gY2xlYW5lZC5tYXRjaCgvXigxfCk/KFxcZHszfSkoXFxkezN9KShcXGR7NH0pJC8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHZhciBpbnRsQ29kZSA9IChtYXRjaFsxXSA/ICcrMSAnIDogJycpO1xuICAgICAgICByZXR1cm4gW2ludGxDb2RlLCAnKCcsIG1hdGNoWzJdLCAnKSAnLCBtYXRjaFszXSwgJy0nLCBtYXRjaFs0XV0uam9pbignJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2Fzc2lnbicsIGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBvcHRpb25zID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAoIW9wdGlvbnMuZGF0YS5yb290KSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YS5yb290ID0ge307XG4gICAgICB9XG5cbiAgICAgIGxldCB2ID0gJyc7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIHYgPSB2ICsgYXJnc1tpXTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5kYXRhLnJvb3RbbmFtZV0gPSB2O1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignanNvbicsIGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG5hbWUgPT09IHVuZGVmaW5lZFxuICAgICAgICA/ICcnXG4gICAgICAgIDogSlNPTi5zdHJpbmdpZnkobmFtZSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBIYW5kbGViYXJzUmVuZGVyZXIgZnJvbSAnLi9oYW5kbGViYXJzcmVuZGVyZXInO1xuXG4vLyBJbiB0aGUgZnV0dXJlLCB0aGlzIHdpbGwgY29udGFpbiBhbGwgZGlmZmVyZW50IHR5cGVzIG9mIHJlbmRlcmVyc1xuLy8gRS5nLiBNdXN0YWNoZSwgU09ZLCBIYW5kbGVCYXJzLCBSZWFjdCwgZXRjLlxuZXhwb3J0IGNvbnN0IFJlbmRlcmVycyA9IHtcbiAgU09ZOiBSZW5kZXJlcixcbiAgSGFuZGxlYmFyczogSGFuZGxlYmFyc1JlbmRlcmVyXG59O1xuIiwiLyoqIEBtb2R1bGUgRE9NICovXG5cbi8qIGdsb2JhbCBIVE1MRWxlbWVudCwgSFRNTERvY3VtZW50LCBXaW5kb3csIEV2ZW50ICovXG5cbmxldCBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcblxuLyoqXG4gKiBTdGF0aWMgaW50ZXJmYWNlIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBET00gQVBJLlxuICogQG5hbWVzcGFjZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBET00ge1xuICBzdGF0aWMgc2V0dXAgKGQsIHApIHtcbiAgICBkb2N1bWVudCA9IGQ7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIGEgSFRNTEVsZW1lbnQgZnJvbSBhbmQgSFRNTCBzdHJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IGh0bWwgVGhlIEhUTUwgdG8gcGFyc2UgdG8gYSBET00gbm9kZS5cbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlIChodG1sKSB7XG4gICAgaWYgKCdjcmVhdGVSYW5nZScgaW4gZG9jdW1lbnQpIHtcbiAgICAgIC8vIHByZWZlciB0aGlzIGltcGxlbWVudGF0aW9uIGFzIGl0IGhhcyB3aWRlciBicm93c2VyIHN1cHBvcnRcbiAgICAgIC8vIGFuZCBpdCdzIGJldHRlciBwZXJmb3JtaW5nLlxuICAgICAgLy8gc2VlIGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2NvbnZlcnQtaHRtbC1zdGluZ3MtZG9tLW5vZGVzXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IGZyYWcgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChodG1sKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnKTtcbiAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgLy8gZmFsbGJhY2sgdG8gdGhpcyBiZWNhdXNlIG9mIGEgYnVnIGluIGpzZG9tIHRoYXQgY2F1c2VzIHRlc3RzIHRvIGZhaWxcbiAgICAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qc2RvbS9qc2RvbS9pc3N1ZXMvMzk5XG4gICAgcmV0dXJuIG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoaHRtbCwgJ3RleHQvaHRtbCcpLmJvZHk7XG4gIH1cblxuICAvKipcbiAgICogcXVlcnkgdGhlIERPTSBmb3IgYSBnaXZlbiBjc3Mgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50IE9wdGlvbmFsIGNvbnRleHQgdG8gdXNlIGZvciBhIHNlYXJjaC4gRGVmYXVsdHMgdG8gZG9jdW1lbnQgaWYgbm90IHByb3ZpZGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgdGhlIENTUyBzZWxlY3RvciB0byBxdWVyeSBmb3JcbiAgICpcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSB0aGUgRklSU1Qgbm9kZSBpdCBmaW5kcywgaWYgYW55XG4gICAqL1xuICBzdGF0aWMgcXVlcnkgKHBhcmVudCwgc2VsZWN0b3IpIHtcbiAgICAvLyBGYWNhZGUsIHNoaWZ0aW5nIHRoZSBzZWxlY3RvciB0byB0aGUgcGFyZW50IGFyZ3VtZW50IGlmIG9ubHkgb25lXG4gICAgLy8gYXJndW1lbnQgaXMgcHJvdmlkZWRcbiAgICBpZiAoc2VsZWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2VsZWN0b3IgPSBwYXJlbnQ7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIFdpbmRvdyB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxEb2N1bWVudCkge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogcXVlcnkgdGhlIERPTSBmb3IgYSBnaXZlbiBjc3Mgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50IE9wdGlvbmFsIGNvbnRleHQgdG8gdXNlIGZvciBhIHNlYXJjaC4gRGVmYXVsdHMgdG8gZG9jdW1lbnQgaWYgbm90IHByb3ZpZGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgdGhlIENTUyBzZWxlY3RvciB0byBxdWVyeSBmb3JcbiAgICpcbiAgICogQHJldHVybnMge0FycmF5fSB0aGUgRklSU1Qgbm9kZSBpdCBmaW5kcywgaWYgYW55XG4gICAqL1xuICBzdGF0aWMgcXVlcnlBbGwgKHBhcmVudCwgc2VsZWN0b3IpIHtcbiAgICAvLyBGYWNhZGUsIHNoaWZ0aW5nIHRoZSBzZWxlY3RvciB0byB0aGUgcGFyZW50IGFyZ3VtZW50IGlmIG9ubHkgb25lXG4gICAgLy8gYXJndW1lbnQgaXMgcHJvdmlkZWRcbiAgICBpZiAoc2VsZWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2VsZWN0b3IgPSBwYXJlbnQ7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgY2xpZW50IGNvZGUgaXMgdXNpbmcgYSBwb2ludGVyIHRvIGEgZG9tIG5vZGUgYW5kIGl0J3MgbnVsbCwgZS5nLiB0aGlzLl9jb250YWluZXJcbiAgICBpZiAocGFyZW50ID09IG51bGwpIHtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTERvY3VtZW50IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgV2luZG93KSB7XG4gICAgICByZXR1cm4gW3NlbGVjdG9yXTtcbiAgICB9XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuICB9XG5cbiAgc3RhdGljIG9uUmVhZHkgKGNiKSB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRlZCcgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJykge1xuICAgICAgY2IoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBET00ub24oZG9jdW1lbnQsICdET01Db250ZW50TG9hZGVkJywgY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZUVsZSB3aWxsIGNyZWF0ZSBhIHtIVE1MRWxlbWVudH0gYW5kIGFwcGx5IHRoZSBwcm9wZXJ0aWVzIGF0dHJpYnV0ZXMgdGhyb3VnaCBhbiBvYmplY3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbCBUaGUgZWxlbWVudCBgdGFnYCBuYW1lIHRvIGNvbnN0cnVjdFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c19kYXRhIE9wdGlvbmFsIGF0dHJpYnV0ZXMgdG8gYXBwbHkgdG8gdGhlIG5ldyBIVE1MRWxlbWVudFxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUVsIChlbCwgb3B0c19kYXRhID0ge30pIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwpO1xuICAgIGxldCBwcm9wcyA9IE9iamVjdC5rZXlzKG9wdHNfZGF0YSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocHJvcHNbaV0gPT09ICdjbGFzcycpIHtcbiAgICAgICAgRE9NLmFkZENsYXNzKG5vZGUsIG9wdHNfZGF0YVtwcm9wc1tpXV0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbm9kZVtwcm9wc1tpXV0gPSBvcHRzX2RhdGFbcHJvcHNbaV1dO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIGFwcGVuZCAocGFyZW50LCBub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbm9kZSA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcGFyZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgcGFyZW50ID0gRE9NLnF1ZXJ5KHBhcmVudCk7XG4gICAgfVxuXG4gICAgLy8gU3VwcG9ydCBIVE1MIGluamVjdGlvbiBhcyB3ZWxsIGFzIEhUTUxFbGVtZW50IGFwcGVuZHNcbiAgICBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlckJlZ2luJywgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYWRkQ2xhc3MgKG5vZGUsIGNsYXNzTmFtZSkge1xuICAgIGxldCBjbGFzc2VzID0gY2xhc3NOYW1lLnNwbGl0KCcsJyk7XG4gICAgbGV0IGxlbiA9IGNsYXNzZXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzZXNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBlbXB0eSAocGFyZW50KSB7XG4gICAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgc3RhdGljIGNzcyAoc2VsZWN0b3IsIHN0eWxlcykge1xuICAgIGxldCBub2RlID0gRE9NLnF1ZXJ5KHNlbGVjdG9yKTtcblxuICAgIGZvciAobGV0IHByb3AgaW4gc3R5bGVzKSB7XG4gICAgICBub2RlLnN0eWxlW3Byb3BdID0gc3R5bGVzW3Byb3BdO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhdHRyIChzZWxlY3RvciwgYXR0ciwgdmFsKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsKTtcbiAgfVxuXG4gIHN0YXRpYyBhdHRyaWJ1dGVzIChzZWxlY3RvciwgYXR0cnMpIHtcbiAgICBPYmplY3QuZW50cmllcyhhdHRycylcbiAgICAgIC5mb3JFYWNoKChbYXR0ciwgdmFsXSkgPT4gdGhpcy5hdHRyKHNlbGVjdG9yLCBhdHRyLCB2YWwpKTtcbiAgfVxuXG4gIHN0YXRpYyB0cmlnZ2VyIChzZWxlY3RvciwgZXZlbnQsIHNldHRpbmdzKSB7XG4gICAgbGV0IGUgPSBuZXcgRXZlbnQoZXZlbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgJ2J1YmJsZXMnOiB0cnVlLFxuICAgICAgJ2NhbmNlbGFibGUnOiB0cnVlXG4gICAgfSwgc2V0dGluZ3MgfHwge30pKTtcblxuICAgIERPTS5xdWVyeShzZWxlY3RvcikuZGlzcGF0Y2hFdmVudChlKTtcbiAgfVxuXG4gIHN0YXRpYyBvbiAoc2VsZWN0b3IsIGV2dCwgaGFuZGxlcikge1xuICAgIERPTS5xdWVyeShzZWxlY3RvcikuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIG9uY2UgKHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpIHtcbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCB7IG9uY2U6IHRydWUgfSk7XG4gIH1cblxuICBzdGF0aWMgb2ZmIChzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZGVsZWdhdGUgKGN0eHQsIHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpIHtcbiAgICBsZXQgZWwgPSBET00ucXVlcnkoY3R4dCk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIHdoaWxlICghdGFyZ2V0LmlzRXF1YWxOb2RlKGVsKSkge1xuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgaGFuZGxlcihldmVudCwgdGFyZ2V0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRXZlbnRFbWl0dGVyICovXG5cbi8qKlxuICogRXZlbnRFbWl0dGVyIGlzIGEgYmFzZSBjbGFzcyBmb3IgYW55IG9iamVjdCB0aGF0IHdhbnRzIHRvIGV4cG9zZVxuICogYSBwdWIvc3ViIGludGVyZmFjZSwgZm9yIGVtaXR0aW5nIG1lc3NhZ2VzIGFuZCBwcm92aWRpbmcgbGlzdGVuZXJzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgLyoqXG4gICAgICogVGhlIHN1YnNjcmliZXJzIG9mIG1lc3NhZ2VzXG4gICAgICogQHR5cGUge29iamVjdFtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbGlzdGVuZXJzID0ge307XG4gIH1cblxuICAvKipcbiAgICogb24gaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIHN1YnNjcmliaW5nIGV2ZW50cyB0aGF0IGFyZSBlbWl0dGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIGxpc3RlbiB0b1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gdGhlIHtldnR9IGlzIGVtaXR0ZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBvbmNlIE9wdGlvbmFsIHZhbHVlIHdoaWNoIHdpbGwgb25seSBoYW5kbGUgdGhlIG1lc3NhZ2Ugb25jZVxuICAgKi9cbiAgb24gKGV2dCwgY2IsIG9uY2UpIHtcbiAgICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbGxiYWNrIGhhbmRsZXIgc2hvdWxkIGJlIG9mIHR5cGUge2Z1bmN0aW9ufScpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9saXN0ZW5lcnNbZXZ0XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XSA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuX2xpc3RlbmVyc1tldnRdLnB1c2goe1xuICAgICAgZXZlbnQ6IGV2dCxcbiAgICAgIGNiOiBjYixcbiAgICAgIG9uY2U6IG9uY2UgfHwgZmFsc2VcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uY2UgaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIHN1YnNjcmliaW5nIGV2ZW50cyB0aGF0IGFyZSBlbWl0dGVkLlxuICAgKiBUaGUgaGFuZGxlciB3aWxsIG9ubHkgYmUgdHJpZ2dlcmVkIG9uY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gbGlzdGVuIHRvXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIFRoZSBjYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUge2V2dH0gaXMgZW1pdHRlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uY2UgT3B0aW9uYWwgdmFsdWUgd2hpY2ggd2lsbCBvbmx5IGhhbmRsZSB0aGUgbWVzc2FnZSBvbmNlXG4gICAqL1xuICBvbmNlIChldnQsIGNiKSB7XG4gICAgcmV0dXJuIHRoaXMub24oZXZ0LCBjYiwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogb2ZmIGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciB1bnN1YnNjcmliaW5nIGZyb20gYW4gZXZlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byB1bnN1YnNjcmliZSBmcm9tXG4gICAqL1xuICBvZmYgKGV2dCkge1xuICAgIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcnNbZXZ0XTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBlbWl0IGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciBicm9hZGNhc3RpbmcgbWVzc2FnZXMvZXZlbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gcHVibGlzaCBmcm9tXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIHRoZSBkYXRhIHRvIHNlbmQgYWxvbmcgdG8gdGhlIHN1YnNjcmliZXJzXG4gICAqL1xuICBlbWl0IChldnQsIGRhdGEpIHtcbiAgICBsZXQgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2dF07XG4gICAgaWYgKGxpc3RlbmVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSW52b2tlIGVhY2ggb2YgYWxsIHRoZSBsaXN0ZW5lciBoYW5kbGVycyBhbmQgcmVtb3ZlIHRoZSBvbmVzIHRoYXQgc2hvdWxkIGZpcmUgb25seSBvbmNlLlxuICAgIGxldCBrZWVwID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpc3RlbmVyc1tpXS5jYihkYXRhKTtcbiAgICAgIGlmIChsaXN0ZW5lcnNbaV0ub25jZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gSW5zdGVhZCBvZiBoYXZpbmcgYSAnZGlydHknIGFycmF5IHdpdGggZGVsZXRlZCBvciAndW5kZWZpbmVkJyBlbnRyaWVzLFxuICAgICAgLy8gd2UganVzdCBjcmVhdGUgYSBicmFuZCBuZXcgYXJyYXkgd2l0aG91dCB0aGUgbGlzdGVuZXJzIHRoYXQgd2VyZSByZW1vdmVkXG4gICAgICBrZWVwLnB1c2gobGlzdGVuZXJzW2ldKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgb3VyIG9sZCBsaXN0IG9mIGxpc3RlbmVycyB0byB0aGUgbmV3bHkgY3JlYXRlZCBhcnJheVxuICAgIHRoaXMuX2xpc3RlbmVyc1tldnRdID0ga2VlcDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU3RhdGUgKi9cblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi8uLi9jb3JlL2V2ZW50ZW1pdHRlci9ldmVudGVtaXR0ZXInO1xuXG4vKipcbiAqIFN0YXRlIGNvbnRhaW5zIHRoZSBkYXRhIGZvciB0aGUgY29tcG9uZW50XG4gKiBhbmQgZXhwb3NlcyBhbiB7RXZlbnRFbWl0dGVyfSBpbnRlcmZhY2Ugc28gdGhhdCBleHRlcm5hbFxuICogZGVwZW5kZW5jaWVzIGNhbiBsaXN0ZW4vaG9vayBzdWJzY3JpYmUgdG8gbWVzc2FnZXMvdXBkYXRlcy5cbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RhdGUgPSBkYXRhIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKiBOT1RFKGJpbGx5KTogRG9lcyBub3QgZmlyZSBhbiB1cGRhdGUgbWVzc2FnZVxuICAgKi9cbiAgaW5pdCAocHJvcCwgb3B0VmFsKSB7XG4gICAgdGhpcy5fc2V0KHByb3AsIG9wdFZhbCk7XG4gIH1cblxuICAvKipcbiAgICogc2V0dGVyIGZvciB0aGUgc3RhdGVcbiAgICogQHBhcmFtIHByb3Age3N0cmluZ3xPYmplY3R9IFRoZSBwcm9wZXJ0eSB0byBzZXRcbiAgICogQHBhcmFtIG9wdFZhbCBPcHRpb25hbCwgaWYgcHJvcCBpcyBhIHtzdHJpbmd9LCBpdCB3aWxsIGFzc2lnbiB0aGUgdmFsdWUgdG8gdGhhdCBwcm9wZXJ0eVxuICAgKi9cbiAgc2V0IChwcm9wLCBvcHRWYWwpIHtcbiAgICB0aGlzLl9zZXQocHJvcCwgb3B0VmFsKTtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldHRlciBmb3IgdGhlIHN0YXRlIGVuYWJsZXMgeW91IHRvIHVwZGF0ZSBhIHNpbmdsZSBwcm9wZXJ0eSwgb3IgY29tcGxldGUgc3RhdGVcbiAgICogZGVwZW5kaW5nIG9uIHRoZSBhcmd1bWVudHMgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSBwcm9wIHtzdHJpbmd8T2JqZWN0fSBUaGUgcHJvcGVydHkgdG8gc2V0XG4gICAqIEBwYXJhbSBvcHRWYWwgSWYgcHJvcCBpcyBhIHtzdHJpbmd9LCBwcm92aWRlIGl0cyB2YWx1ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NldCAocHJvcCwgb3B0VmFsKSB7XG4gICAgaWYgKG9wdFZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9zdGF0ZSA9IHByb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0YXRlW3Byb3BdID0gb3B0VmFsO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSAoZGF0YSkge1xuICAgIHRoaXMuX3N0YXRlID0gZGF0YTtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGEgcHJvcGVydGllcyB2YWx1ZSBmcm9tIHRoZSBzdGF0ZVxuICAgKiBJZiBubyBwcm9wZXJ0eSBwcm92aWRlZCwgcmV0dXJuIHRoZSBmdWxsIHN0YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRQcm9wIG9wdGlvbmFsIHByb3BlcnR5IHRvIHJldHJpZXZlXG4gICAqL1xuICBnZXQgKG9wdFByb3ApIHtcbiAgICBpZiAob3B0UHJvcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zdGF0ZVtvcHRQcm9wXTtcbiAgfVxuXG4gIGhhcyAocHJvcCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZVtwcm9wXSAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgYXNKU09OICgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gIH1cbn1cbiIsIi8qKlxuICogTW9kZWwgZm9yIHRoZSBhbmFseXRpY3MgZXZlbnQgdHlwZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmFseXRpY3NFdmVudCB7XG4gIGNvbnN0cnVjdG9yICh0eXBlLCBsYWJlbCkge1xuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIGV2ZW50IHRvIHJlcG9ydFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5ldmVudFR5cGUgPSB0eXBlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBvcHRpb25hbCBsYWJlbCB0byBiZSBwcm92aWRlZCBmb3IgdGhlIGV2ZW50XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgcHJvdmlkZWQgb3B0aW9ucyB0byB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgQWRkaXRpb25hbCBvcHRpb25zIGZvciB0aGUgZXZlbnRcbiAgICovXG4gIGFkZE9wdGlvbnMgKG9wdGlvbnMpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZXZlbnQgaW4gdGhlIGFwaSBmb3JtYXQsIHR5cGljYWxseSBmb3IgcmVwb3J0aW5nIHRvIHRoZSBhcGlcbiAgICovXG4gIHRvQXBpRXZlbnQgKCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQW5hbHl0aWNzUmVwb3J0ZXIgKi9cblxuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4vYW5hbHl0aWNzZXZlbnQnO1xuaW1wb3J0IHsgQW5zd2Vyc0FuYWx5dGljc0Vycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgeyBBTkFMWVRJQ1NfQkFTRV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IEh0dHBSZXF1ZXN0ZXIgZnJvbSAnLi4vaHR0cC9odHRwcmVxdWVzdGVyJztcblxuLyoqXG4gKiBDbGFzcyBmb3IgcmVwb3J0aW5nIGFuYWx5dGljcyBldmVudHMgdG8gdGhlIHNlcnZlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmFseXRpY3NSZXBvcnRlciB7XG4gIGNvbnN0cnVjdG9yIChjb3JlLCBhbnN3ZXJzS2V5LCBidXNpbmVzc0lkLCBnbG9iYWxPcHRpb25zID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBUaGUgaW50ZXJuYWwgYnVzaW5lc3MgaWRlbnRpZmllciB1c2VkIGZvciByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX2J1c2luZXNzSWQgPSBidXNpbmVzc0lkO1xuXG4gICAgLyoqXG4gICAgICogT3B0aW9ucyB0byBpbmNsdWRlIHdpdGggZXZlcnkgYW5hbHl0aWMgZXZlbnQgcmVwb3J0ZWQgdG8gdGhlIHNlcnZlclxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9nbG9iYWxPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZ2xvYmFsT3B0aW9ucywgeyBhbnN3ZXJzS2V5IH0pO1xuXG4gICAgLy8gbGlzdGVuIHRvIHF1ZXJ5IGlkIHVwZGF0ZXNcbiAgICBjb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBpZCA9PiB0aGlzLnNldFF1ZXJ5SWQoaWQpKTtcbiAgfVxuXG4gIHNldFF1ZXJ5SWQgKHF1ZXJ5SWQpIHtcbiAgICB0aGlzLl9nbG9iYWxPcHRpb25zLnF1ZXJ5SWQgPSBxdWVyeUlkO1xuICB9XG5cbiAgcmVwb3J0IChldmVudCkge1xuICAgIGlmICghKGV2ZW50IGluc3RhbmNlb2YgQW5hbHl0aWNzRXZlbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0FuYWx5dGljc0Vycm9yKCdUcmllZCB0byBzZW5kIGludmFsaWQgYW5hbHl0aWNzIGV2ZW50JywgZXZlbnQpO1xuICAgIH1cblxuICAgIGV2ZW50LmFkZE9wdGlvbnModGhpcy5fZ2xvYmFsT3B0aW9ucyk7XG5cbiAgICByZXR1cm4gbmV3IEh0dHBSZXF1ZXN0ZXIoKS5iZWFjb24oXG4gICAgICBgJHtBTkFMWVRJQ1NfQkFTRV9VUkx9L3JlYWx0aW1lYW5hbHl0aWNzL2RhdGEvYW5zd2Vycy8ke3RoaXMuX2J1c2luZXNzSWR9YCxcbiAgICAgIHtcbiAgICAgICAgJ2RhdGEnOiBldmVudC50b0FwaUV2ZW50KClcbiAgICAgIH1cbiAgICApO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNb2R1bGVEYXRhICovXG5cbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlcic7XG5cbi8qKlxuICogTW9kdWxlRGF0YSBpcyB1c2VkIGFzIGEgZ2VuZXJpYyBtb2RlbCBmb3IgU3RvcmFnZS5cbiAqIFR5cGljYWxseSBhbiBpbnN0YW5jZSBvZiBNb2R1bGVEYXRhIHBvd2VycyBhIHNpbmdsZSBjb21wb25lbnQuXG5cbiAqIEEgZGF0YSBtb2RlbCB0aGF0IGV4cG9zZXMgYW4gZXZlbnQgZW1pdHRlciBpbnRlcmZhY2UuXG4gKiBAZXh0ZW5kcyBFdmVudEVtaXR0ZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kdWxlRGF0YSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChpZCwgZGF0YSA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgdGhpcy5faGlzdG9yeSA9IFtdO1xuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgIHRoaXMuc2V0KGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcGxhY2VzIHRoZSBjdXJyZW50bHkgaGVsZCBkYXRhIHdpdGggdGhlIGdpdmVuIGRhdGFcbiAgICogQHBhcmFtIHsqfSBkYXRhIHRoZSBkYXRhIHRvIHJlcGxhY2UgdGhlIGN1cnJlbnQgZGF0YVxuICAgKi9cbiAgc2V0IChkYXRhKSB7XG4gICAgdGhpcy5jYXB0dXJlUHJldmlvdXMoKTtcblxuICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShkYXRhKSB8fCBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKHRoaXMuX2RhdGEpLmxlbmd0aCkge1xuICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuX2RhdGEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGZvciBzaGFsbG93IGVxdWFsaXR5XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgICAgIGlmICh0aGlzLl9kYXRhW2tleV0gIT09IGRhdGFba2V5XSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLl9kYXRhKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNhcHR1cmVQcmV2aW91cyAoKSB7XG4gICAgaWYgKHRoaXMuX2hpc3RvcnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5faGlzdG9yeSA9IFtdO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9oaXN0b3J5Lmxlbmd0aCArIDEgPiA1KSB7XG4gICAgICB0aGlzLl9oaXN0b3J5LnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgLy8gSWYgZGF0YSBpcyBldmVyIHVuZGVmaW5lZCwgd2UgZGVmYXVsdCB0byBlbXB0eSBvYmplY3RcbiAgICB0aGlzLl9oaXN0b3J5LnB1c2goSlNPTi5zdHJpbmdpZnkodGhpcy5fZGF0YSB8fCB7fSkpO1xuICB9XG5cbiAgdW5kbyAoKSB7XG4gICAgbGV0IHByZXZpb3VzID0ge307XG4gICAgaWYgKHRoaXMuX3ByZXZpb3VzLmxlbmd0aCA+IDApIHtcbiAgICAgIHByZXZpb3VzID0gSlNPTi5wYXJzZSh0aGlzLl9wcmV2aW91cy5wb3AoKSk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0YS5zZXQocHJldmlvdXMpO1xuICB9XG5cbiAgcmF3ICgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgR2xvYmFsU3RvcmFnZSAqL1xuXG5pbXBvcnQgTW9kdWxlRGF0YSBmcm9tICcuL21vZHVsZWRhdGEnO1xuaW1wb3J0IHsgQW5zd2Vyc1N0b3JhZ2VFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvcnMnO1xuXG4vKipcbiAqIFN0b3JhZ2UgaXMgYSBjb250YWluZXIgYXJvdW5kIGFwcGxpY2F0aW9uIHN0YXRlLlxuICogSXQgZXhwb3NlcyBhbiBpbnRlcmZhY2UgZm9yIENSVUQgb3BlcmF0aW9ucyBhcyB3ZWxsIGFzIGxpc3RlbmluZ1xuICogZm9yIHN0YXRlZnVsIGNoYW5nZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JhbFN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lciA9IHt9O1xuICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGF0YSBpbiBzdG9yYWdlIHdpdGggdGhlIGdpdmVuIGtleSB0byB0aGUgcHJvdmlkZWQgZGF0YSxcbiAgICogY29tcGxldGVseSBvdmVyd3JpdGluZyBhbnkgZXhpc3RpbmcgZGF0YS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSB0aGUgc3RvcmFnZSBrZXkgdG8gc2V0XG4gICAqIEBwYXJhbSB7Kn0gZGF0YSB0aGUgZGF0YSB0byBzZXRcbiAgICovXG4gIHNldCAoa2V5LCBkYXRhKSB7XG4gICAgdGhpcy5faW5pdERhdGFDb250YWluZXIoa2V5LCBkYXRhKTtcbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2tleV0uc2V0KGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhbGwga2V5L3ZhbHVlIHBhaXJzIGluIHRoZSBwcm92aWRlZCBtYXAgdG8gdGhlIHN0b3JhZ2VcbiAgICogQHBhcmFtIHsqfSBkYXRhIFRoZSBrZXkvdmFsdWUgcGFpcnMgdG8gc2V0IGluIHRoZSBzdG9yYWdlXG4gICAqL1xuICBzZXRBbGwgKGRhdGEpIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcbiAgICAgIHRoaXMuc2V0KGtleSwgdmFsKTtcbiAgICB9XG4gIH1cblxuICBfaW5pdERhdGFDb250YWluZXIgKGtleSwgZGF0YSkge1xuICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCB8fCBrZXkgPT09IG51bGwgfHwgdHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzU3RvcmFnZUVycm9yKCdJbnZhbGlkIHN0b3JhZ2Uga2V5IHByb3ZpZGVkJywga2V5LCBkYXRhKTtcbiAgICB9XG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCB8fCBkYXRhID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc1N0b3JhZ2VFcnJvcignTm8gZGF0YSBwcm92aWRlZCcsIGtleSwgZGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX21vZHVsZURhdGFDb250YWluZXJba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2tleV0gPSBuZXcgTW9kdWxlRGF0YShrZXkpO1xuICAgICAgdGhpcy5fYXBwbHlGdXR1cmVMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gIH1cblxuICBnZXRTdGF0ZSAobW9kdWxlSWQpIHtcbiAgICBpZiAodGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5yYXcoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRBbGwgKGtleSkge1xuICAgIGNvbnN0IGRhdGEgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGRhdGFLZXkgb2YgT2JqZWN0LmtleXModGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcikpIHtcbiAgICAgIGlmIChkYXRhS2V5LnN0YXJ0c1dpdGgoa2V5KSAmJiB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2RhdGFLZXldLnJhdygpICE9PSBudWxsKSB7XG4gICAgICAgIGRhdGEucHVzaCh0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2RhdGFLZXldLnJhdygpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBvbiAoZXZ0LCBtb2R1bGVJZCwgY2IpIHtcbiAgICBsZXQgbW9kdWxlRGF0YSA9IHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdO1xuICAgIGlmIChtb2R1bGVEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXSA9IFtdO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdLnB1c2goe1xuICAgICAgICBldmVudDogZXZ0LFxuICAgICAgICBjYjogY2JcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0ub24oZXZ0LCBjYik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBvZmYgKGV2dCwgbW9kdWxlSWQsIGNiKSB7XG4gICAgbGV0IG1vZHVsZURhdGEgPSB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXTtcbiAgICBpZiAobW9kdWxlRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0ucG9wKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdLm9mZihldnQsIGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9hcHBseUZ1dHVyZUxpc3RlbmVycyAobW9kdWxlSWQpIHtcbiAgICBsZXQgZnV0dXJlcyA9IHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF07XG4gICAgaWYgKCFmdXR1cmVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmdXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZnV0dXJlID0gZnV0dXJlc1tpXTtcbiAgICAgIHRoaXMub24oZnV0dXJlLmV2ZW50LCBtb2R1bGVJZCwgZnV0dXJlLmNiKTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF07XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VhcmNoQXBpIH0gZnJvbSAnLi9zZWFyY2gvc2VhcmNoYXBpJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQW5hbHl0aWNzUmVwb3J0ZXIgfSBmcm9tICcuL2FuYWx5dGljcy9hbmFseXRpY3NyZXBvcnRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZHVsZURhdGEgfSBmcm9tICcuL3N0b3JhZ2UvbW9kdWxlZGF0YSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UvZ2xvYmFsc3RvcmFnZSc7XG4iLCIvKiogQG1vZHVsZSBDb21wb25lbnQgKi9cblxuaW1wb3J0IHsgUmVuZGVyZXJzIH0gZnJvbSAnLi4vcmVuZGVyaW5nL2NvbnN0JztcblxuaW1wb3J0IERPTSBmcm9tICcuLi9kb20vZG9tJztcbmltcG9ydCBTdGF0ZSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IEFuYWx5dGljc1JlcG9ydGVyIH0gZnJvbSAnLi4vLi4vY29yZSc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCBBbmFseXRpY3NFdmVudCBmcm9tICcuLi8uLi9jb3JlL2FuYWx5dGljcy9hbmFseXRpY3NldmVudCc7XG5cbi8qKlxuICogQ29tcG9uZW50IGlzIGFuIGFic3RyYWN0aW9uIHRoYXQgZW5jYXBzdWxhdGVzIHN0YXRlLCBiZWhhdmlvcixcbiAqIGFuZCB2aWV3IGZvciBhIHBhcnRpY3VsYXIgY2h1bmsgb2YgZnVuY3Rpb25hbGl0eSBvbiB0aGUgcGFnZS5cbiAqXG4gKiBUaGUgQVBJIGV4cG9zZXMgZXZlbnQgbGlmZSBjeWNsZSBob29rcyBmb3Igd2hlbiB0aGluZ3MgYXJlIHJlbmRlcmVkLFxuICogbW91bnRlZCwgY3JlYXRlZCwgZXRjLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAodHlwZSwgY29uZmlnID0ge30pIHtcbiAgICAvLyBTaW1wbGUgZmFjYWRlIHBhdHRlcm4gdG8gZW5hYmxlIHRoZSB1c2VyIHRvIHBhc3MgYSBzaW5nbGUgb2JqZWN0XG4gICAgLy8gY29udGFpbmluZyBhbGwgdGhlIG5lY2Vzc2FyeSBvcHRpb25zIGFuZCBzZXR0aW5nc1xuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbmZpZyA9IHR5cGU7XG4gICAgICB0eXBlID0gY29uZmlnLnR5cGU7XG4gICAgfVxuXG4gICAgdGhpcy5tb2R1bGVJZCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBVbmlxdWUgbmFtZSBvZiB0aGlzIGNvbXBvbmVudCBpbnN0YW5jZVxuICAgICAqIFVzZWQgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBvdGhlciBjb21wb25lbnRzIG9mIHRoZSBzYW1lIHR5cGVcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubmFtZSA9IGNvbmZpZy5uYW1lIHx8IHRoaXMuY29uc3RydWN0b3IudHlwZTtcblxuICAgIC8qKlxuICAgICAqIENhY2hlIHRoZSBvcHRpb25zIHNvIHRoYXQgd2UgY2FuIHByb3BvZ2F0ZSBwcm9wZXJseSB0byBjaGlsZCBjb21wb25lbnRzXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpZGVudGlmaWVyIHVzZWQgdG8gY2xhc3NpZnkgdGhlIHR5cGUgb2YgY29tcG9uZW50LlxuICAgICAqIFRoZSBjb21wb25lbnQgbWFuYWdlciB1c2VzIHRoaXMgaW5mb3JtYXRpb24gaW4gb3JkZXIgdG8gcGVyc2lzdCBhbmQgb3JnYW5pemUgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtzdHJpbmd8Q29tcG9uZW50VHlwZX1cbiAgICAgKi9cbiAgICB0aGlzLl90eXBlID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIHBhcmVudCBjb21wb25lbnQsIGlmIGV4aXN0c1xuICAgICAqIEB0eXBlIHtDb21wb25lbnR9XG4gICAgICovXG4gICAgdGhpcy5fcGFyZW50ID0gY29uZmlnLnBhcmVudCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBjb250YWluZXIgZm9yIGFsbCB0aGUgY2hpbGQgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtDb21wb25lbnRbXX1cbiAgICAgKi9cbiAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN0YXRlIChkYXRhKSBvZiB0aGUgY29tcG9uZW50IHRvIGJlIHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9zdGF0ZSA9IG5ldyBTdGF0ZShjb25maWcuc3RhdGUpO1xuXG4gICAgLyoqXG4gICAgICogVE9ETyhiaWxseSkgVGhpcyBzaG91bGQgYmUgJ3NlcnZpY2VzJ1xuICAgICAqL1xuICAgIHRoaXMuY29yZSA9IGNvbmZpZy5jb3JlIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IG1hbmFnZXIsIHdoaWNoIGNvbnRhaW5zIGFsbCBvZiB0aGUgY29tcG9uZW50IGNsYXNzZXNcbiAgICAgKiBlbGlnaWJsZSB0byBiZSBjcmVhdGVkXG4gICAgICogQHR5cGUge0NvbXBvbmVudE1hbmFnZXJ9XG4gICAgICovXG4gICAgdGhpcy5jb21wb25lbnRNYW5hZ2VyID0gY29uZmlnLmNvbXBvbmVudE1hbmFnZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBhbmFseXRpY3MgcmVwb3J0ZXIsIHVzZWQgdG8gcmVwb3J0IGV2ZW50cyBmb3IgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7QW5hbHl0aWNzUmVwb3J0ZXJ9XG4gICAgICovXG4gICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlciA9IGNvbmZpZy5hbmFseXRpY3NSZXBvcnRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogT3B0aW9ucyB0byBpbmNsdWRlIHdpdGggYWxsIGFuYWx5dGljIGV2ZW50cyBzZW50IGJ5IHRoaXMgY29tcG9uZW50XG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FuYWx5dGljc09wdGlvbnMgPSBjb25maWcuYW5hbHl0aWNzT3B0aW9ucyB8fCB7fTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBET00gbm9kZSB0aGF0IHRoZSBjb21wb25lbnQgd2lsbCBiZSBhcHBlbmRlZCB0byB3aGVuIG1vdW50ZWQvcmVuZGVyZWQuXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIGlmICh0eXBlb2YgY29uZmlnLmNvbnRhaW5lciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGBjb250YWluZXJgIG9wdGlvbiBmb3IgY29tcG9uZW50IGNvbmZpZ3VyYXRpb24uIE11c3QgYmUgb2YgdHlwZSBgc3RyaW5nYC4nKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IERPTS5xdWVyeShjb25maWcuY29udGFpbmVyKSB8fCBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb250YWluZXIgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Ll9jb250YWluZXIsIGNvbmZpZy5jb250YWluZXIpO1xuXG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgcGFyZW50LCBhbmQgdGhlIGNvbnRhaW5lciBpcyBtaXNzaW5nIGZyb20gdGhlIERPTSxcbiAgICAgIC8vIHdlIGNvbnN0cnVjdCB0aGUgY29udGFpbmVyIGFuZCBhcHBlbmQgaXQgdG8gdGhlIHBhcmVudFxuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBET00uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogY29uZmlnLmNvbnRhaW5lci5zdWJzdHJpbmcoMSwgY29uZmlnLmNvbnRhaW5lci5sZW5ndGgpXG4gICAgICAgIH0pO1xuICAgICAgICBET00uYXBwZW5kKHRoaXMuX3BhcmVudC5fY29udGFpbmVyLCB0aGlzLl9jb250YWluZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb250YWluZXIgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgY29udGFpbmVyIERPTSBub2RlOiAnICsgY29uZmlnLmNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gY2xhc3MgdG8gYmUgYXBwbGllZCB0byB7dGhpcy5fY29udGFpbmVyfSBub2RlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9jbGFzc05hbWUgPSBjb25maWcuY2xhc3MgfHwgJ2NvbXBvbmVudCc7XG5cbiAgICAvKipcbiAgICAgKiBBIGN1c3RvbSByZW5kZXIgZnVuY3Rpb24gdG8gYmUgdXNlZCBpbnN0ZWFkIG9mIHVzaW5nIHRoZSBkZWZhdWx0IHJlbmRlcmVyXG4gICAgICogQHR5cGUge1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3JlbmRlciA9IGNvbmZpZy5yZW5kZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBkZWZhdWx0IHtSZW5kZXJlcn0gdGhhdCB3aWxsIGJlIHVzZWQgZm9yIHJlbmRlcmluZyB0aGUgdGVtcGxhdGVcbiAgICAgKiBAdHlwZSB7UmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyZXIgPSBjb25maWcucmVuZGVyZXIgfHwgUmVuZGVyZXJzLkhhbmRsZWJhcnM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgc3RyaW5nIHRvIHVzZSBmb3IgcmVuZGVyaW5nIHRoZSBjb21wb25lbnRcbiAgICAgKiBJZiB0aGlzIGlzIGxlZnQgZW1wdHksIHdlIGxvb2t1cCB0aGUgdGVtcGxhdGUgdGhlIGJhc2UgdGVtcGxhdGVzIHVzaW5nIHRoZSB0ZW1wbGF0ZU5hbWVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlID0gY29uZmlnLnRlbXBsYXRlID8gdGhpcy5fcmVuZGVyZXIuY29tcGlsZShjb25maWcudGVtcGxhdGUpIDogbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZU5hbWUgdG8gdXNlIGZvciByZW5kZXJpbmcgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBUaGlzIGlzIG9ubHkgdXNlZCBpZiBfdGVtcGxhdGUgaXMgZW1wdHkuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSBjb25maWcudGVtcGxhdGVOYW1lIHx8IHRoaXMuY29uc3RydWN0b3IuZGVmYXVsdFRlbXBsYXRlTmFtZShjb25maWcpO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgc3RhdGUgaW5kaWNhdGluZyB3aGV0aGVyIG9yIG5vdCB0aGUgY29tcG9uZW50IGhhcyBiZWVuIG1vdW50ZWQgdG8gdGhlIERPTVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrLCB0aGF0cyB1c2VkIHRvIHRyYW5zZm9ybSB0aGUgaW50ZXJuYWwgZGF0YVxuICAgICAqIG1vZGVscyBvZiB0aGUgY29tcG9uZW50cywgYmVmb3JlIGl0IGdldHMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50IHN0YXRlLlxuICAgICAqIEJ5IGRlZmF1bHQsIG5vIHRyYW5zZm9ybWF0aW9uIGhhcHBlbnMuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMudHJhbnNmb3JtRGF0YSA9IGNvbmZpZy50cmFuc2Zvcm1EYXRhIHx8IHRoaXMudHJhbnNmb3JtRGF0YSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBjcmVhdGVkLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLm9uQ3JlYXRlID0gY29uZmlnLm9uQ3JlYXRlIHx8IHRoaXMub25DcmVhdGUgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnQgaXMgTW91bnRlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vbk1vdW50ID0gY29uZmlnLm9uTW91bnQgfHwgdGhpcy5vbk1vdW50IHx8IGZ1bmN0aW9uICgpIHsgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudHMgc3RhdGUgaXMgdXBkYXRlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vblVwZGF0ZSA9IGNvbmZpZy5vblVwZGF0ZSB8fCB0aGlzLm9uVXBkYXRlIHx8IGZ1bmN0aW9uICgpIHsgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAnZGVmYXVsdCc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnQ29tcG9uZW50JztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGluaXQgKG9wdHMpIHtcbiAgICB0aGlzLnNldFN0YXRlKG9wdHMuZGF0YSB8fCBvcHRzLnN0YXRlIHx8IHt9KTtcbiAgICB0aGlzLm9uQ3JlYXRlKCk7XG4gICAgdGhpcy5fc3RhdGUub24oJ3VwZGF0ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25VcGRhdGUoKTtcbiAgICAgIHRoaXMubW91bnQoKTtcbiAgICB9KTtcblxuICAgIERPTS5hZGRDbGFzcyh0aGlzLl9jb250YWluZXIsIHRoaXMuX2NsYXNzTmFtZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIGNvbnN0IG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgeyBfY29uZmlnOiB0aGlzLl9jb25maWcgfSwgZGF0YSk7XG4gICAgdGhpcy5fc3RhdGUuc2V0KG5ld1N0YXRlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldFN0YXRlIChwcm9wKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmdldChwcm9wKTtcbiAgfVxuXG4gIGhhc1N0YXRlIChwcm9wKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmhhcyhwcm9wKTtcbiAgfVxuXG4gIHRyYW5zZm9ybURhdGEgKGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGFkZENoaWxkIChkYXRhLCB0eXBlLCBvcHRzKSB7XG4gICAgbGV0IGNoaWxkQ29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZShcbiAgICAgIHR5cGUsXG4gICAgICBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0sIG9wdHMgfHwge30sIHtcbiAgICAgICAgX3BhcmVudE9wdHM6IHRoaXMuX2NvbmZpZ1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5fY2hpbGRyZW4ucHVzaChjaGlsZENvbXBvbmVudCk7XG4gICAgcmV0dXJuIGNoaWxkQ29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFVubW91bnQgYW5kIHJlbW92ZSB0aGlzIGNvbXBvbmVudCBhbmQgaXRzIGNoaWxkcmVuIGZyb20gdGhlIGxpc3RcbiAgICogb2YgYWN0aXZlIGNvbXBvbmVudHNcbiAgICovXG4gIHJlbW92ZSAoKSB7XG4gICAgdGhpcy5fY2hpbGRyZW4uZm9yRWFjaChjID0+IGMucmVtb3ZlKCkpO1xuICAgIHRoaXMudW5Nb3VudCgpO1xuICAgIHRoaXMuY29tcG9uZW50TWFuYWdlci5yZW1vdmUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSByZW5kZXIgbWV0aG9kIHRvIGJlIHVzZWQgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlbmRlclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBzZXRSZW5kZXIgKHJlbmRlcikge1xuICAgIHRoaXMuX3JlbmRlciA9IHJlbmRlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHJlbmRlcmVyIGZvciB0aGUgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7UmVuZGVyZXJUeXBlfSByZW5kZXJlclxuICAgKi9cbiAgc2V0UmVuZGVyZXIgKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSBSZW5kZXJlcnNbcmVuZGVyZXJdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRlbXBsYXRlIGZvciB0aGUgY29tcG9uZW50IHRvIHVzZSB3aGVuIHJlbmRlcmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAgICovXG4gIHNldFRlbXBsYXRlICh0ZW1wbGF0ZSkge1xuICAgIHRoaXMuX3RlbXBsYXRlID0gdGhpcy5fcmVuZGVyZXIuY29tcGlsZSh0ZW1wbGF0ZSk7XG4gIH1cblxuICB1bk1vdW50ICgpIHtcbiAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xuICAgIERPTS5lbXB0eSh0aGlzLl9jb250YWluZXIpO1xuICB9XG5cbiAgbW91bnQgKCkge1xuICAgIGlmICghdGhpcy5fY29udGFpbmVyKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLnVuTW91bnQoKTtcbiAgICBpZiAodGhpcy5iZWZvcmVNb3VudCgpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgRE9NLmFwcGVuZCh0aGlzLl9jb250YWluZXIsIHRoaXMucmVuZGVyKHRoaXMuX3N0YXRlLmFzSlNPTigpKSk7XG5cbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIHRoaXMuX29uTW91bnQoKTtcblxuICAgIC8vIEF0dGFjaCBhbmFseXRpY3MgaG9va3MgYXMgbmVjZXNzYXJ5XG4gICAgaWYgKHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIpIHtcbiAgICAgIGxldCBkb21Ib29rcyA9IERPTS5xdWVyeUFsbCh0aGlzLl9jb250YWluZXIsICdbZGF0YS1ldmVudHR5cGVdOm5vdChbZGF0YS1pcy1hbmFseXRpY3MtYXR0YWNoZWRdKScpO1xuICAgICAgZG9tSG9va3MuZm9yRWFjaCh0aGlzLl9jcmVhdGVBbmFseXRpY3NIb29rLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX29uTW91bnQgKCkge1xuICAgIHRoaXMub25Nb3VudCh0aGlzKTtcbiAgICBpZiAodGhpcy5fY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBjaGlsZC5fb25Nb3VudCgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbmRlciB0aGUgdGVtcGxhdGUgdXNpbmcgdGhlIHtSZW5kZXJlcn0gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBhbmQgdGVtcGxhdGUgb2YgdGhlIGNvbXBvbmVudFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgcmVuZGVyIChkYXRhID0gdGhpcy5fc3RhdGUuZ2V0KCkpIHtcbiAgICB0aGlzLmJlZm9yZVJlbmRlcigpO1xuICAgIGRhdGEgPSB0aGlzLnRyYW5zZm9ybURhdGEoZGF0YSk7XG5cbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIC8vIFVzZSBlaXRoZXIgdGhlIGN1c3RvbSByZW5kZXIgZnVuY3Rpb24gb3IgdGhlIGludGVybmFsIHJlbmRlcmVyXG4gICAgLy8gZGVwZW5kYW50IG9uIHRoZSBjb21wb25lbnQgY29uZmlndXJhdGlvblxuICAgIGlmICh0eXBlb2YgdGhpcy5fcmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBodG1sID0gdGhpcy5fcmVuZGVyKGRhdGEpO1xuICAgICAgaWYgKHR5cGVvZiBodG1sICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlbmRlciBtZXRob2QgbXVzdCByZXR1cm4gSFRNTCBhcyB0eXBlIHtzdHJpbmd9Jyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlbmRlciB0aGUgZXhpc3RpbmcgdGVtcGxhdGVzIGFzIGEgc3RyaW5nXG4gICAgICBodG1sID0gdGhpcy5fcmVuZGVyZXIucmVuZGVyKHtcbiAgICAgICAgdGVtcGxhdGU6IHRoaXMuX3RlbXBsYXRlLFxuICAgICAgICB0ZW1wbGF0ZU5hbWU6IHRoaXMuX3RlbXBsYXRlTmFtZVxuICAgICAgfSwgZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gV2UgY3JlYXRlIGFuIEhUTUwgRG9jdW1lbnQgZnJhZ21lbnQgd2l0aCB0aGUgcmVuZGVyZWQgc3RyaW5nXG4gICAgLy8gU28gdGhhdCB3ZSBjYW4gcXVlcnkgaXQgZm9yIHByb2Nlc3Npbmcgb2Ygc3ViIGNvbXBvbmVudHNcbiAgICBsZXQgZWwgPSBET00uY3JlYXRlKGh0bWwpO1xuXG4gICAgLy8gUHJvY2VzcyB0aGUgRE9NIHRvIGRldGVybWluZSBpZiB3ZSBzaG91bGQgY3JlYXRlXG4gICAgLy8gaW4tbWVtb3J5IHN1Yi1jb21wb25lbnRzIGZvciByZW5kZXJpbmdcbiAgICBsZXQgZG9tQ29tcG9uZW50cyA9IERPTS5xdWVyeUFsbChlbCwgJ1tkYXRhLWNvbXBvbmVudF0nKTtcbiAgICBkb21Db21wb25lbnRzLmZvckVhY2goYyA9PiB0aGlzLl9jcmVhdGVTdWJjb21wb25lbnQoYywgZGF0YSkpO1xuXG4gICAgdGhpcy5hZnRlclJlbmRlcigpO1xuICAgIHJldHVybiBlbC5pbm5lckhUTUw7XG4gIH1cblxuICBfY3JlYXRlU3ViY29tcG9uZW50IChkb21Db21wb25lbnQsIGRhdGEpIHtcbiAgICBsZXQgZGF0YXNldCA9IGRvbUNvbXBvbmVudC5kYXRhc2V0O1xuICAgIGxldCB0eXBlID0gZGF0YXNldC5jb21wb25lbnQ7XG4gICAgbGV0IHByb3AgPSBkYXRhc2V0LnByb3A7XG4gICAgbGV0IG9wdHMgPSBkYXRhc2V0Lm9wdHMgPyBKU09OLnBhcnNlKGRhdGFzZXQub3B0cykgOiB7fTtcblxuICAgIC8vIFJlbmRlcmluZyBhIHN1YiBjb21wb25lbnQgc2hvdWxkIGJlIHdpdGhpbiB0aGUgY29udGV4dCxcbiAgICAvLyBvZiB0aGUgbm9kZSB0aGF0IHdlIHByb2Nlc3NlZCBpdCBmcm9tXG4gICAgb3B0cyA9IE9iamVjdC5hc3NpZ24ob3B0cywge1xuICAgICAgY29udGFpbmVyOiBkb21Db21wb25lbnRcbiAgICB9KTtcblxuICAgIGxldCBjaGlsZERhdGEgPSBkYXRhW3Byb3BdIHx8IHt9O1xuXG4gICAgLy8gVE9ETyhiaWxseSkgUmlnaHQgbm93LCBpZiB3ZSBwcm92aWRlIGFuIGFycmF5IGFzIHRoZSBkYXRhIHByb3AsXG4gICAgLy8gdGhlIGJlaGF2aW9yIGlzIHRvIGNyZWF0ZSBtYW55IGNvbXBvbmVudHMgZm9yIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkuXG4gICAgLy8gVEhBVCBpbnRlcmZhY2UgU0hPVUxEIGNoYW5nZSB0byB1c2UgYSBkaWZmZXJlbnQgcHJvcGVydHkgdGhhdCBkZWZpbmVzXG4gICAgLy8gd2hldGhlciB0byBhcnJheSBkYXRhIHNob3VsZCBiZSB1c2VkIGZvciBhIHNpbmdsZSBjb21wb25lbnQgb3JcbiAgICAvLyB0byBjcmVhdGUgbWFueSBjb21wb25lbnRzIGZvciBlYWNoIGl0ZW0uXG4gICAgLy8gT3ZlcmxvYWRpbmcgYW5kIGhhdmluZyB0aGlzIHNpZGUgZWZmZWN0IGlzIHVuaW50dWl0aXZlIGFuZCBXUk9OR1xuICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZERhdGEpKSB7XG4gICAgICBsZXQgY2hpbGRDb21wb25lbnQgPSB0aGlzLmFkZENoaWxkKGNoaWxkRGF0YSwgdHlwZSwgb3B0cyk7XG4gICAgICBET00uYXBwZW5kKGRvbUNvbXBvbmVudCwgY2hpbGRDb21wb25lbnQucmVuZGVyKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSwgcmVuZGVyIHRoZSBjb21wb25lbnQgYXMgZXhwZWN0ZWRcbiAgICBsZXQgY2hpbGRIVE1MID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZENvbXBvbmVudCA9IHRoaXMuYWRkQ2hpbGQoY2hpbGREYXRhW2ldLCB0eXBlLCBvcHRzKTtcbiAgICAgIGNoaWxkSFRNTC5wdXNoKGNoaWxkQ29tcG9uZW50LnJlbmRlcigpKTtcbiAgICB9XG5cbiAgICBET00uYXBwZW5kKGRvbUNvbXBvbmVudCwgY2hpbGRIVE1MLmpvaW4oJycpKTtcbiAgfVxuXG4gIF9jcmVhdGVBbmFseXRpY3NIb29rIChkb21Db21wb25lbnQpIHtcbiAgICBkb21Db21wb25lbnQuZGF0YXNldC5pc0FuYWx5dGljc0F0dGFjaGVkID0gdHJ1ZTtcbiAgICBjb25zdCBkYXRhc2V0ID0gZG9tQ29tcG9uZW50LmRhdGFzZXQ7XG4gICAgY29uc3QgdHlwZSA9IGRhdGFzZXQuZXZlbnR0eXBlO1xuICAgIGNvbnN0IGxhYmVsID0gZGF0YXNldC5ldmVudGxhYmVsO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBkYXRhc2V0LmV2ZW50b3B0aW9ucyA/IEpTT04ucGFyc2UoZGF0YXNldC5ldmVudG9wdGlvbnMpIDoge307XG5cbiAgICBET00ub24oZG9tQ29tcG9uZW50LCAnY2xpY2snLCBlID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEFuYWx5dGljc0V2ZW50KHR5cGUsIGxhYmVsKTtcbiAgICAgIGV2ZW50LmFkZE9wdGlvbnModGhpcy5fYW5hbHl0aWNzT3B0aW9ucyk7XG4gICAgICBldmVudC5hZGRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlci5yZXBvcnQoZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uQ3JlYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgY29uc3RydWN0ZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uQ3JlYXRlIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25VcGRhdGUgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgY2hhbmdlc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25VcGRhdGUgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBiZWZvcmVSZW5kZXIgZXZlbnQgaXMgdHJpZ2dlcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHJlbmRlcmVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBiZWZvcmVSZW5kZXIgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBhZnRlclJlbmRlciBldmVudCBpcyB0cmlnZ2VyZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYWZ0ZXJSZW5kZXIgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvbk1vdW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgYXBwZW5kZWQgdG8gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25Nb3VudCAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uVW5Nb3VudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIHJlbW92ZWQgZnJvbSB0aGUgRE9NXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvblVuTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBiZWZvcmVNb3VudCBpcyB0cmlnZ2VyZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZCB0byB0aGUgRE9NXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBiZWZvcmVNb3VudCAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uRGVzdHJveSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25EZXN0cm95IChjYikge1xuXG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE5hdmlnYXRpb25Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi9kb20vc2VhcmNocGFyYW1zJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5cbi8qKlxuICogVGhlIGRlYm91bmNlIGR1cmF0aW9uIGZvciByZXNpemUgZXZlbnRzXG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5jb25zdCBSRVNJWkVfREVCT1VOQ0UgPSAxMDA7XG5cbi8qKlxuICogVGhlIFRhYiBpcyBhIG1vZGVsIHRoYXQgaXMgdXNlZCB0byBwb3dlciB0aGUgTmF2aWdhdGlvbiB0YWJzIGluIHRoZSB2aWV3LlxuICogSXQncyBpbml0aWFsaXplZCB0aHJvdWdoIHRoZSBjb25maWd1cmF0aW9uIHByb3ZpZGVkIHRvIHRoZSBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBUYWIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIHRhYiB0aGF0IGlzIGV4cG9zZWQgZm9yIHRoZSBsaW5rXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmxhYmVsID0gY29uZmlnLmxhYmVsO1xuICAgIGlmICh0eXBlb2YgdGhpcy5sYWJlbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoJ2xhYmVsIGlzIGEgcmVxdWlyZWQgY29uZmlndXJhdGlvbiBvcHRpb24gZm9yIHRhYi4nLCAnTmF2aWdhdGlvbkNvbXBvbmVudCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb21wbGV0ZSBVUkwsIGluY2x1ZGluZyB0aGUgcGFyYW1zXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnVybCA9IGNvbmZpZy51cmw7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoJ3VybCBpcyBhIHJlcXVpcmVkIGNvbmZpZ3VyYXRpb24gb3B0aW9uIGZvciB0YWIuJywgJ05hdmlnYXRpb25Db21wb25lbnQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VydmVyc2lkZSB2ZXJ0aWNhbCBjb25maWcgaWQgdGhhdCB0aGlzIGlzIHJlZmVyZW5jZWQgdG8uXG4gICAgICogQnkgcHJvdmlkaW5nIHRoaXMsIGVuYWJsZXMgZHluYW1pYyBzb3J0aW5nIGJhc2VkIG9uIHJlc3VsdHMuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmNvbmZpZ0lkID0gY29uZmlnLmNvbmZpZ0lkIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYmFzZSBVUkwgdXNlZCBmb3IgY29uc3RydWN0aW5nIHRoZSBVUkwgd2l0aCBwYXJhbXNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuYmFzZVVybCA9IGNvbmZpZy51cmw7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gc2hvdyB0aGlzIHRhYiBmaXJzdCBpbiB0aGUgb3JkZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmlzRmlyc3QgPSBjb25maWcuaXNGaXJzdCB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgdG8gYXBwbHkgYSBzcGVjaWFsIGNsYXNzIHRvIHRoZVxuICAgICAqIG1hcmt1cCB0byBkZXRlcm1pbmUgaWYgaXQncyBhbiBhY3RpdmUgdGFiXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc0FjdGl2ZSA9IGNvbmZpZy5pc0FjdGl2ZSB8fCBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoZWxwZXIgdG8gY29uc3RydWN0IHRoZSBldmVudE9wdGlvbnMgZm9yIGFuYWx5dGljc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGV2ZW50T3B0aW9ucyAoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHZlcnRpY2FsQ29uZmlnSWQ6IHRoaXMuY29uZmlnSWRcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBmcm9tIHdpbGwgY29uc3RydWN0IGEgbWFwIG9mIGNvbmZpZ0lkIHRvIHtUYWJ9IGZyb21cbiAgICogYSBjb25maWd1cmF0aW9uIGZpbGVcbiAgICogQHBhcmFtIHtvYmplY3R9IHRhYnNDb25maWcgdGhlIGNvbmZpZ3VyYXRpb24gdG8gdXNlXG4gICAqL1xuICBzdGF0aWMgZnJvbSAodGFic0NvbmZpZykge1xuICAgIGxldCB0YWJzID0ge307XG4gICAgLy8gUGFyc2UgdGhlIG9wdGlvbnMgYW5kIGJ1aWxkIG91dCBvdXIgdGFicyBhbmRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNDb25maWcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB0YWIgPSB0YWJzQ29uZmlnW2ldO1xuICAgICAgLy8gRm9yIHRhYnMgd2l0aG91dCBjb25maWcgaWRzLCBtYXAgdGhlaXIgVVJMIHRvIHRoZSBjb25maWdJRFxuICAgICAgLy8gdG8gYXZvaWQgZHVwbGljYXRpb24gb2YgcmVuZGVyc1xuICAgICAgaWYgKHRhYi5jb25maWdJZCA9PT0gdW5kZWZpbmVkICYmIHRhYnNbdGFiLmNvbmZpZ0lkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhYi5jb25maWdJZCA9IHRhYi51cmw7XG4gICAgICB9XG5cbiAgICAgIHRhYnNbdGFiLmNvbmZpZ0lkXSA9IG5ldyBUYWIodGFiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhYnM7XG4gIH1cbn1cblxuLyoqXG4gKiBOYXZpZ2F0aW9uQ29tcG9uZW50IGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBidWlsZGluZyBhIGR5bmFtaWNcbiAqIG5hdmlnYXRpb24gdGhhdCBpcyBwb3dlcmVkIGJ5IHVuaXZlcnNhbCBzZWFyY2ggdXBkYXRlcy5cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB0byBzaG93IG9uIHRoZSBkcm9wZG93biBtZW51IGJ1dHRvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5kcm9wZG93bkxhYmVsID0gY29uZmlnLmRyb3Bkb3duTGFiZWwgfHwgJ01vcmUnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGljb24gdG8gc2hvdyBvbiB0aGUgZHJvcGRvd24gbWVudSBidXR0b25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZHJvcGRvd25JY29uID0gY29uZmlnLmRyb3Bkb3duSWNvbiB8fCAna2Fib2InO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgcmVuZGVyIGEgc3RhdGljIG5hdmlnYXRpb24gd2l0aCBubyBcIm1vcmVcIiBtZW51XG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5zdGF0aWMgPSBjb25maWcuc3RhdGljIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRhdGEgc3RvcmFnZSBrZXlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5OQVZJR0FUSU9OO1xuXG4gICAgLyoqXG4gICAgICogVW5vcmRlcmVkIG1hcCBvZiBlYWNoIHRhYiwga2V5ZWQgYnkgVlMgY29uZmlnSWRcbiAgICAgKiBAdHlwZSB7T2JqZWN0LjxTdHJpbmcsIE9iamVjdD59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90YWJzID0gVGFiLmZyb20oY29uZmlnLnRhYnMpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9yZGVyIG9mIHRoZSB0YWJzLCBwYXJzZWQgZnJvbSBjb25maWd1cmF0aW9uIG9yIFVSTC5cbiAgICAgKiBUaGlzIGdldHMgdXBkYXRlZCBiYXNlZCBvbiB0aGUgc2VydmVyIHJlc3VsdHNcbiAgICAgKiBAdHlwZSB7QXJyYXkuPFN0cmluZz59IFRoZSBsaXN0IG9mIFZTIGNvbmZpZ0lkc1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGFiT3JkZXIgPSB0aGlzLmdldERlZmF1bHRUYWJPcmRlcihjb25maWcudGFicywgdGhpcy5nZXRVcmxQYXJhbXMoKSk7XG5cbiAgICAvKipcbiAgICAgKiBCcmVha3BvaW50cyBhdCB3aGljaCBuYXZpZ2F0aW9uIGl0ZW1zIG1vdmUgdG8gdGhlIFwibW9yZVwiIGRyb3Bkb3duXG4gICAgICogQHR5cGUge251bWJlcltdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbmF2QnJlYWtwb2ludHMgPSBbXTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdOYXZpZ2F0aW9uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAnbmF2aWdhdGlvbi9uYXZpZ2F0aW9uJztcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGljKSB7XG4gICAgICBET00ub24od2luZG93LCAncmVzaXplJywgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fZGVib3VuY2VUaW1lcikge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kZWJvdW5jZVRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RlYm91bmNlVGltZXIgPSBzZXRUaW1lb3V0KHRoaXMucmVmaXROYXYuYmluZCh0aGlzKSwgUkVTSVpFX0RFQk9VTkNFKTtcbiAgICAgIH0pO1xuICAgICAgRE9NLm9uKHdpbmRvdywgJ2NsaWNrJywgdGhpcy5jaGVja091dHNpZGVDbGljay5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGljKSB7XG4gICAgICB0aGlzLnJlZml0TmF2KCk7XG4gICAgICBET00ub24oRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vcmUnKSwgJ2NsaWNrJywgdGhpcy50b2dnbGVNb3JlRHJvcGRvd24uYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgcmVmaXROYXYgKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1jb250YWluZXInKTtcbiAgICBjb25zdCBtb3JlQnV0dG9uID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vcmUnKTtcbiAgICBjb25zdCBtYWluTGlua3MgPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtZXhwYW5kZWQnKTtcbiAgICBjb25zdCBjb2xsYXBzZWRMaW5rcyA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb2RhbCcpO1xuXG4gICAgY29uc3QgbmF2V2lkdGggPSBtb3JlQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygneXh0LU5hdi1pdGVtLS1tb3JlJylcbiAgICAgID8gY29udGFpbmVyLm9mZnNldFdpZHRoXG4gICAgICA6IGNvbnRhaW5lci5vZmZzZXRXaWR0aCAtIG1vcmVCdXR0b24ub2Zmc2V0V2lkdGg7XG4gICAgbGV0IG51bUJyZWFrcG9pbnRzID0gdGhpcy5fbmF2QnJlYWtwb2ludHMubGVuZ3RoO1xuXG4gICAgaWYgKG1haW5MaW5rcy5vZmZzZXRXaWR0aCA+IG5hdldpZHRoKSB7XG4gICAgICB0aGlzLl9uYXZCcmVha3BvaW50cy5wdXNoKG1haW5MaW5rcy5vZmZzZXRXaWR0aCk7XG4gICAgICBjb25zdCBsYXN0TGluayA9IG1haW5MaW5rcy5jaGlsZHJlbi5pdGVtKG1haW5MaW5rcy5jaGlsZHJlbi5sZW5ndGggLSAxKTtcbiAgICAgIGlmIChsYXN0TGluayA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb2xsYXBzZWRMaW5rcy5wcmVwZW5kKGxhc3RMaW5rKTtcblxuICAgICAgaWYgKG1vcmVCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCd5eHQtTmF2LWl0ZW0tLW1vcmUnKSkge1xuICAgICAgICBtb3JlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3l4dC1OYXYtaXRlbS0tbW9yZScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobnVtQnJlYWtwb2ludHMgJiYgbmF2V2lkdGggPiB0aGlzLl9uYXZCcmVha3BvaW50c1tudW1CcmVha3BvaW50cyAtIDFdKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0TGluayA9IGNvbGxhcHNlZExpbmtzLmNoaWxkcmVuLml0ZW0oMCk7XG4gICAgICAgIGlmIChmaXJzdExpbmsgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbWFpbkxpbmtzLmFwcGVuZChmaXJzdExpbmspO1xuICAgICAgICB0aGlzLl9uYXZCcmVha3BvaW50cy5wb3AoKTtcbiAgICAgICAgbnVtQnJlYWtwb2ludHMtLTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbGxhcHNlZExpbmtzLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBtb3JlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3l4dC1OYXYtaXRlbS0tbW9yZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY2xvc2VNb3JlRHJvcGRvd24oKTtcbiAgICBpZiAobWFpbkxpbmtzLm9mZnNldFdpZHRoID4gbmF2V2lkdGggfHxcbiAgICAgIChudW1CcmVha3BvaW50cyA+IDAgJiYgbmF2V2lkdGggPiB0aGlzLl9uYXZCcmVha3BvaW50c1tudW1CcmVha3BvaW50cyAtIDFdKSkge1xuICAgICAgdGhpcy5yZWZpdE5hdigpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlTW9yZURyb3Bkb3duICgpIHtcbiAgICBjb25zdCBjb2xsYXBzZWQgPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9kYWwnKTtcbiAgICBjb2xsYXBzZWQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgY29uc3QgbW9yZUJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb3JlJyk7XG4gICAgbW9yZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gIH1cblxuICBvcGVuTW9yZURyb3Bkb3duICgpIHtcbiAgICBjb25zdCBjb2xsYXBzZWQgPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9kYWwnKTtcbiAgICBjb2xsYXBzZWQuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgY29uc3QgbW9yZUJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb3JlJyk7XG4gICAgbW9yZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcbiAgfVxuXG4gIHRvZ2dsZU1vcmVEcm9wZG93biAoKSB7XG4gICAgY29uc3QgY29sbGFwc2VkID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vZGFsJyk7XG4gICAgY29sbGFwc2VkLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgIGNvbnN0IG1vcmVCdXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9yZScpO1xuICAgIG1vcmVCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgY29sbGFwc2VkLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykpO1xuICB9XG5cbiAgY2hlY2tPdXRzaWRlQ2xpY2sgKGUpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLnl4dC1OYXYtY29udGFpbmVyJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNsb3NlTW9yZURyb3Bkb3duKCk7XG4gIH1cblxuICAvKipcbiAgICogU2luY2UgdGhlIHNlcnZlciBkYXRhIG9ubHkgcHJvdmlkZXMgYSBsaXN0IG9mXG4gICAqIFZTIGNvbmZpZ0lkcywgd2UgbmVlZCB0byBjb21wdXRlIGFuZCB0cmFuc2Zvcm1cbiAgICogdGhlIGRhdGEgaW50byB0aGUgcHJvcGVyIGZvcm1hdCBmb3IgcmVuZGVyaW5nLlxuICAgKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgaWYgKGRhdGEudGFiT3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fdGFiT3JkZXIgPSB0aGlzLm1lcmdlVGFiT3JkZXIoZGF0YS50YWJPcmRlciwgdGhpcy5fdGFiT3JkZXIpO1xuICAgIH1cblxuICAgIC8vIFNpbmNlIHRoZSB0YWIgb3JkZXJpbmcgY2FuIGNoYW5nZSBiYXNlZCBvbiB0aGUgc2VydmVyIGRhdGFcbiAgICAvLyB3ZSBuZWVkIHRvIHVwZGF0ZSBlYWNoIHRhYnMgVVJMIHRvIGluY2x1ZGUgdGhlIG9yZGVyIGFzIHBhcnQgb2YgdGhlaXIgcGFyYW1zLlxuICAgIC8vIFRoaXMgaGVscHMgd2l0aCBwZXJzaXN0aW5nIHN0YXRlIGFjcm9zcyB2ZXJ0aWNhbHMuXG4gICAgbGV0IHRhYnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3RhYk9yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdGFiID0gdGhpcy5fdGFic1t0aGlzLl90YWJPcmRlcltpXV07XG4gICAgICBpZiAodGFiICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGFiLnVybCA9IHRoaXMuZ2VuZXJhdGVUYWJVcmwodGFiLmJhc2VVcmwsIHRoaXMuZ2V0VXJsUGFyYW1zKCkpO1xuICAgICAgICB0YWJzLnB1c2godGFiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoe1xuICAgICAgdGFiczogdGFicyxcbiAgICAgIGRyb3Bkb3duTGFiZWw6IHRoaXMuZHJvcGRvd25MYWJlbCxcbiAgICAgIGRyb3Bkb3duSWNvbjogdGhpcy5kcm9wZG93bkljb24sXG4gICAgICBzdGF0aWM6IHRoaXMuc3RhdGljXG4gICAgfSk7XG4gIH1cblxuICBnZXRVcmxQYXJhbXMgKCkge1xuICAgIHJldHVybiBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXREZWZhdWx0VGFiT3JkZXIgd2lsbCBjb21wdXRlIHRoZSBpbml0aWFsIHRhYiBvcmRlcmluZyBiYXNlZFxuICAgKiBvbiBhIGNvbWJpbmF0aW9uIG9mIHRoZSBjb25maWd1cmF0aW9uIHByb3ZpZGVkIGRpcmVjdGx5IHRvIHRoZSBjb21wb25lbnRcbiAgICogYW5kIHRoZSB1cmwgcGFyYW1zLlxuICAgKiBAcGFyYW0ge09iamVjdFtdfSB0YWJzQ29uZmlnXG4gICAqIEBwYXJhbSB7U2VhcmNoUGFyYW1zfVxuICAgKi9cbiAgZ2V0RGVmYXVsdFRhYk9yZGVyICh0YWJzQ29uZmlnLCB1cmxQYXJhbXMpIHtcbiAgICBsZXQgdGFiT3JkZXIgPSBbXTtcblxuICAgIC8vIFVzZSB0aGUgb3JkZXJpbmcgZnJvbSB0aGUgVVJMIGFzIHRoZSBwcmltYXJ5IGNvbmZpZ3VyYXRpb25cbiAgICAvLyBBbmQgdGhlbiBtZXJnZSBpdCB3aXRoIHRoZSBsb2NhbCBjb25maWd1cmF0aW9uLCBpZiBwcm92aWRlZC5cbiAgICBpZiAodXJsUGFyYW1zICYmIHVybFBhcmFtcy5oYXMoJ3RhYk9yZGVyJykpIHtcbiAgICAgIHRhYk9yZGVyID0gdXJsUGFyYW1zLmdldCgndGFiT3JkZXInKS5zcGxpdCgnLCcpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFic0NvbmZpZy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGFiID0gdGFic0NvbmZpZ1tpXTtcbiAgICAgIC8vIFNvbWUgdGFicyBkb24ndCBoYXZlIGNvbmZpZ0lkLCBzbyB3ZSBtYXAgaXQgZnJvbSBVUkxcbiAgICAgIGlmICh0YWIuY29uZmlnSWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YWIuY29uZmlnSWQgPSB0YWIudXJsO1xuICAgICAgfVxuXG4gICAgICAvLyBBdm9pZCBkdXBsaWNhdGVzIGlmIGNvbmZpZyB3YXMgcHJvdmlkZWQgZnJvbSBVUkxcbiAgICAgIGlmICh0YWJPcmRlci5pbmNsdWRlcyh0YWIuY29uZmlnSWQpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBpc0ZpcnN0IHNob3VsZCBhbHdheXMgYmUgdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhlIGxpc3RcbiAgICAgIGlmICh0YWIuaXNGaXJzdCkge1xuICAgICAgICB0YWJPcmRlci51bnNoaWZ0KHRhYi5jb25maWdJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWJPcmRlci5wdXNoKHRhYi5jb25maWdJZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYk9yZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIG1lcmdlVGFiT3JkZXIgbWVyZ2VzIHR3byBhcnJheXMgaW50byBvbmVcbiAgICogYnkgYXBwZW5kaW5nIGFkZGl0aW9uYWwgdGFicyB0byB0aGUgZW5kIG9mIHRoZSBvcmlnaW5hbCBhcnJheVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB0YWJPcmRlciBUYWIgb3JkZXIgcHJvdmlkZWQgYnkgdGhlIHNlcnZlclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBvdGhlclRhYk9yZGVyIFRhYiBvcmRlciBwcm92aWRlZCBieSBjb25maWd1cmF0aW9uXG4gICAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICAgKi9cbiAgbWVyZ2VUYWJPcmRlciAodGFiT3JkZXIsIG90aGVyVGFiT3JkZXIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG90aGVyVGFiT3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhYkNvbmZpZyA9IG90aGVyVGFiT3JkZXJbaV07XG4gICAgICBpZiAodGFiT3JkZXIuaW5jbHVkZXModGFiQ29uZmlnKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gaXNGaXJzdCBzaG91bGQgYmUgYW4gb3ZlcnJpZGUgdG8gZHluYW1pYyB0YWIgb3JkZXJpbmcuXG4gICAgICBpZiAodGhpcy5fdGFic1t0YWJDb25maWddICYmIHRoaXMuX3RhYnNbdGFiQ29uZmlnXS5pc0ZpcnN0KSB7XG4gICAgICAgIHRhYk9yZGVyLnVuc2hpZnQodGFiQ29uZmlnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhYk9yZGVyLnB1c2godGFiQ29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFiT3JkZXI7XG4gIH1cblxuICBnZW5lcmF0ZVRhYlVybCAoYmFzZVVybCwgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpKSB7XG4gICAgLy8gV2Ugd2FudCB0byBwZXJzaXN0IHRoZSBwYXJhbXMgZnJvbSB0aGUgZXhpc3RpbmcgVVJMIHRvIHRoZSBuZXdcbiAgICAvLyBVUkxTIHdlIGNyZWF0ZS5cbiAgICBwYXJhbXMuc2V0KCd0YWJPcmRlcicsIHRoaXMuX3RhYk9yZGVyKTtcbiAgICByZXR1cm4gYmFzZVVybCArICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXIgKi9cblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIGFwaSBmaWx0ZXIgYW5kIHByb3ZpZGVzIHN0YXRpYyBtZXRob2RzIGZvciBlYXNpbHkgY29uc3RydWN0aW5nIEZpbHRlcnMuXG4gKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIueWV4dC5jb20vZG9jcy9hcGktcmVmZXJlbmNlLyNvcGVyYXRpb24vbGlzdEVudGl0aWVzIGZvciBzdHJ1Y3R1cmUgZGV0YWlsc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXIge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGEgSlNPTiBmb3JtYXQgZmlsdGVyIHJldHVybmVkIGZyb20gdGhlIHNlcnZlciBpbnRvIGEgRmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gcmVzcG9uc2VGaWx0ZXIgQSBmaWx0ZXIgaW4gSlNPTiBmb3JtYXQgcmV0dXJuZWQgZnJvbSB0aGUgYmFja2VuZFxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGZyb21SZXNwb25zZSAocmVzcG9uc2VGaWx0ZXIpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcihKU09OLnBhcnNlKHJlc3BvbnNlRmlsdGVyKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgbmV3IEZpbHRlciByZXByZXNlbnRpbmcgdGhlIE9SIG9mIGFsbCBwcm92aWRlZCBmaWx0ZXJzXG4gICAqIEBwYXJhbSAgey4uLkZpbHRlcn0gZmlsdGVycyBUaGUgZmlsdGVycyB0byBPUiB0b2dldGhlclxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIG9yICguLi5maWx0ZXJzKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgJyRvcic6IGZpbHRlcnNcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBuZXcgRmlsdGVyIHJlcHJlc2VudGluZyB0aGUgQU5EIG9mIGFsbCBwcm92aWRlZCBmaWx0ZXJzXG4gICAqIEBwYXJhbSAgey4uLkZpbHRlcn0gZmlsdGVycyBUaGUgZmlsdGVycyB0byBBTkQgdG9nZXRoZXJcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBhbmQgKC4uLmZpbHRlcnMpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcih7XG4gICAgICAnJGFuZCc6IGZpbHRlcnNcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPUiBmaWx0ZXJzIHdpdGggdGhlIHNhbWUga2V5cywgdGhlbiBBTkQgdGhlIHJlc3VsdGluZyBncm91cHNcbiAgICogQHBhcmFtICB7Li4uRmlsdGVyfSBmaWx0ZXJzIFRoZSBmaWx0ZXJzIHRvIGdyb3VwXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ3JvdXAgKC4uLmZpbHRlcnMpIHtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiBmaWx0ZXJzKSB7XG4gICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhmaWx0ZXIpWzBdO1xuICAgICAgaWYgKCFncm91cHNba2V5XSkge1xuICAgICAgICBncm91cHNba2V5XSA9IFtdO1xuICAgICAgfVxuICAgICAgZ3JvdXBzW2tleV0ucHVzaChmaWx0ZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGdyb3VwRmlsdGVycyA9IFtdO1xuICAgIGZvciAoY29uc3QgZmllbGQgb2YgT2JqZWN0LmtleXMoZ3JvdXBzKSkge1xuICAgICAgZ3JvdXBGaWx0ZXJzLnB1c2goZ3JvdXBzW2ZpZWxkXS5sZW5ndGggPiAxID8gRmlsdGVyLm9yKC4uLmdyb3Vwc1tmaWVsZF0pIDogZ3JvdXBzW2ZpZWxkXVswXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdyb3VwRmlsdGVycy5sZW5ndGggPiAxID8gRmlsdGVyLmFuZCguLi5ncm91cEZpbHRlcnMpIDogZ3JvdXBGaWx0ZXJzWzBdO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImVxdWFsIHRvXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgZXF1YWwgdG9cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBlcXVhbCAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckZXEnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwibGVzcyB0aGFuXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgbGVzcyB0aGFuXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgbGVzc1RoYW4gKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGx0JywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImxlc3MgdGhhbiBvciBlcXVhbCB0b1wiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0b1xuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGxlc3NUaGFuRXF1YWwgKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGxlJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImdyZWF0ZXIgdGhhblwiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhblxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGdyZWF0ZXJUaGFuIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRndCcsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG9cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG9cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBncmVhdGVyVGhhbkVxdWFsIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRnZScsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgaW5jbHVzaXZlIHJhbmdlIGZpbHRlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IG1pbiBUaGUgbWluaW11bSB2YWx1ZVxuICAgKiBAcGFyYW0geyp9IG1heCBUaGUgbWF4aW11bSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGluY2x1c2l2ZVJhbmdlIChmaWVsZCwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcih7XG4gICAgICBbZmllbGRdOiB7XG4gICAgICAgICckZ2UnOiBtaW4sXG4gICAgICAgICckbGUnOiBtYXhcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgZXhjbHVzaXZlIHJhbmdlIGZpbHRlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IG1pbiBUaGUgbWluaW11bSB2YWx1ZVxuICAgKiBAcGFyYW0geyp9IG1heCBUaGUgbWF4aW11bSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGV4Y2x1c2l2ZVJhbmdlIChmaWVsZCwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcih7XG4gICAgICBbZmllbGRdOiB7XG4gICAgICAgICckZ3QnOiBtaW4sXG4gICAgICAgICckbHQnOiBtYXhcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgcG9zaXRpb24gZmlsdGVyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsYXQgVGhlIGxhdGl0dWRlIG9mIHRoZSBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gbG5nIFRoZSBsb25naXR1ZGUgb2YgdGhlIHBvc2l0aW9uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgVGhlIHNlYXJjaCByYWRpdXMgKGluIG1ldGVycylcbiAgICovXG4gIHN0YXRpYyBwb3NpdGlvbiAobGF0LCBsbmcsIHJhZGl1cykge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKCdidWlsdGluLmxvY2F0aW9uJywgJyRuZWFyJywgeyBsYXQsIGxuZywgcmFkaXVzIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBmaWx0ZXIgd2l0aCB0aGUgZ2l2ZW4gbWF0Y2hlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWF0Y2hlciBUaGUgbWF0Y2hlciBmb3IgdGhlIGZpbGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGZvciB0aGUgZmlsdGVyXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgX2Zyb21NYXRjaGVyIChmaWVsZCwgbWF0Y2hlciwgdmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcih7XG4gICAgICBbZmllbGRdOiB7XG4gICAgICAgIFttYXRjaGVyXTogdmFsdWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VhcmNoQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5cbi8qKlxuICogU2VhcmNoQ29tcG9uZW50IGV4cG9zZXMgYW4gaW50ZXJmYWNlIGluIG9yZGVyIHRvIGNyZWF0ZVxuICogYSBVSSBTZWFyY2ggZXhwZXJpZW5jZSBmb3IgdmVydGljYWwgYW5kIHVuaXZlcnNhbCBzZWFyY2guXG4gKlxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgaW5wdXQga2V5IGZvciB0aGUgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBJZiBub3QgcHJvdmlkZWQsIGF1dG8tY29tcGxldGUgYW5kIHNlYXJjaCB3aWxsIGJlIGJhc2VkIG9uIHVuaXZlcnNhbFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYmFyS2V5ID0gY29uZmlnLmJhcktleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIHZlcnRpY2FsIGtleSBmb3IgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBJZiBub3QgcHJvdmlkZWQsIGF1dG8tY29tcGxldGUgYW5kIHNlYXJjaCB3aWxsIGJlIGJhc2VkIG9uIHVuaXZlcnNhbFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFF1ZXJ5IHN1Ym1pc3Npb24gaXMgYmFzZWQgb24gYSBmb3JtIGFzIGNvbnRleHQuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIG5hdGl2ZSBmb3JtIG5vZGUgd2l0aGluIGNvbnRhaW5lclxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2Zvcm1FbCA9IGNvbmZpZy5mb3JtU2VsZWN0b3IgfHwgJ2Zvcm0nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlucHV0IGVsZW1lbnQgdXNlZCBmb3Igc2VhcmNoaW5nIGFuZCB3aXJlcyB1cCB0aGUga2V5Ym9hcmQgaW50ZXJhY3Rpb25cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2lucHV0RWwgPSBjb25maWcuaW5wdXRFbCB8fCAnLmpzLXlleHQtcXVlcnknO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIHVzZWQsIHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZSBhcyBhIGRhdGEgcG9pbnRcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy50aXRsZSA9IGNvbmZpZy50aXRsZSB8fCAnQW5zd2VycyBVbml2ZXJzYWwgU2VhcmNoJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB0ZXh0IGlzIHVzZWQgZm9yIGxhYmVsaW5nIHRoZSBpbnB1dCBib3gsIGFsc28gcHJvdmlkZWQgdG8gdGVtcGxhdGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbFRleHQgPSBjb25maWcubGFiZWxUZXh0IHx8ICdXaGF0IGFyZSB5b3UgaW50ZXJlc3RlZCBpbj8nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN1Ym1pdCB0ZXh0IGlzIHVzZWQgZm9yIGxhYmVsaW5nIHRoZSBzdWJtaXQgYnV0dG9uLCBhbHNvIHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc3VibWl0VGV4dCA9IGNvbmZpZy5zdWJtaXRUZXh0IHx8ICdTdWJtaXQnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN1Ym1pdCBpY29uIGlzIGFuIGljb24gZm9yIHRoZSBzdWJtaXQgYnV0dG9uLCBpZiBwcm92aWRlZCBpdCB3aWxsIGJlIGRpc3BsYXllZCBhbmQgdGhlXG4gICAgICogc3VibWl0IHRleHQgd2lsbCBiZSB1c2VkIGZvciBzY3JlZW4gcmVhZGVycy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5zdWJtaXRJY29uID0gY29uZmlnLnN1Ym1pdEljb24gfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSB0ZXh0IHRvIHNob3cgYXMgdGhlIGZpcnN0IGl0ZW0gZm9yIGF1dG8gY29tcGxldGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5wcm9tcHRIZWFkZXIgPSBjb25maWcucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBdXRvIGZvY3VzZXMgdGhlIGlucHV0IGJveCBpZiBzZXQgdG8gdHJ1ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBkZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9Gb2N1cyA9IGNvbmZpZy5hdXRvRm9jdXMgPT09IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGF1dG9mb2N1c2luZyBvbiBsb2FkLCBvcHRpb25hbGx5IG9wZW4gdGhlIGF1dG9jb21wbGV0ZVxuICAgICAqIChwcmVzZXQgcHJvbXB0cylcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9jb21wbGV0ZU9uTG9hZCA9IGNvbmZpZy5hdXRvY29tcGxldGVPbkxvYWQgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBzdWJtaXRVUkwgd2lsbCBmb3JjZSB0aGUgc2VhcmNoIHF1ZXJ5IHN1Ym1pc3Npb24gdG8gZ2V0XG4gICAgICogcmVkaXJlY3RlZCB0byB0aGUgVVJMIHByb3ZpZGVkLlxuICAgICAqIE9wdGlvbmFsLCBkZWZhdWx0cyB0byBudWxsLlxuICAgICAqXG4gICAgICogSWYgbm8gcmVkaXJlY3RVcmwgcHJvdmlkZWQsIHdlIGtlZXAgdGhlIHBhZ2UgYXMgYSBzaW5nbGUgcGFnZSBhcHAuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnJlZGlyZWN0VXJsID0gY29uZmlnLnJlZGlyZWN0VXJsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgc3RyaW5nIHRvIHVzZSBmb3IgdGhlIGlucHV0IGJveCwgcHJvdmlkZWQgdG8gdGVtcGxhdGUgZm9yIHJlbmRlcmluZy5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXJ5ID0gY29uZmlnLnF1ZXJ5IHx8IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKSB8fCAnJztcbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgU3RvcmFnZUtleXMuUVVFUlksIHEgPT4ge1xuICAgICAgdGhpcy5xdWVyeSA9IHE7XG4gICAgICB0aGlzLnNldFN0YXRlKCk7XG4gICAgICB0aGlzLnNlYXJjaChxKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIHRpbWUgYWxsb3dlZCBpbiBtaWxsaXNlY29uZHMgYmV0d2VlbiBzZWFyY2hlcyB0byBwcmV2ZW50XG4gICAgICogbWFueSBkdXBsaWNhdGUgc2VhcmNoZXMgYmFjay10by1iYWNrXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaENvb2xkb3duID0gY29uZmlnLnNlYXJjaENvb2xkb3duIHx8IDMwMDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdTZWFyY2hCYXInO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoKSB7XG4gICAgcmV0dXJuICdzZWFyY2gvc2VhcmNoJztcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICBpZiAodGhpcy5xdWVyeSAmJiAhdGhpcy5yZWRpcmVjdFVybCkge1xuICAgICAgdGhpcy5jb3JlLnNldFF1ZXJ5KHRoaXMucXVlcnkpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIGlmICh0aGlzLmF1dG9Gb2N1cyA9PT0gdHJ1ZSAmJiB0aGlzLnF1ZXJ5Lmxlbmd0aCA9PT0gMCAmJiAhdGhpcy5hdXRvY29tcGxldGVPbkxvYWQpIHtcbiAgICAgIERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2lucHV0RWwpLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLy8gV2lyZSB1cCBvdXIgc2VhcmNoIGhhbmRsaW5nIGFuZCBhdXRvIGNvbXBsZXRlXG4gICAgdGhpcy5pbml0U2VhcmNoKHRoaXMuX2Zvcm1FbCk7XG4gICAgdGhpcy5pbml0QXV0b0NvbXBsZXRlKHRoaXMuX2lucHV0RWwpO1xuXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzID09PSB0cnVlICYmIHRoaXMucXVlcnkubGVuZ3RoID09PSAwICYmIHRoaXMuYXV0b2NvbXBsZXRlT25Mb2FkKSB7XG4gICAgICBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gdXNlIGZvciB3aXJpbmcgdXAgc2VhcmNoaW5nIG9uIGZvcm0gc3VibWlzc2lvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybVNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBzdWJtaXQgaGFuZGxpbmcgdG9cbiAgICovXG4gIGluaXRTZWFyY2ggKGZvcm1TZWxlY3Rvcikge1xuICAgIHRoaXMuX2Zvcm1FbCA9IGZvcm1TZWxlY3RvcjtcblxuICAgIHRoaXMuX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd5eHQtU2VhcmNoQmFyLXdyYXBwZXInKTtcblxuICAgIGxldCBmb3JtID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgZm9ybVNlbGVjdG9yKTtcbiAgICBpZiAoIWZvcm0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGluaXRpYWxpemUgU2VhcmNoQmFyOyBDYW4gbm90IGZpbmQge0hUTUxFbGVtZW50fSBgJywgdGhpcy5fZm9ybUVsLCAnYC4nKTtcbiAgICB9XG5cbiAgICBET00ub24oZm9ybSwgJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGxldCBpbnB1dEVsID0gZm9ybS5xdWVyeVNlbGVjdG9yKHRoaXMuX2lucHV0RWwpO1xuXG4gICAgICBsZXQgcXVlcnkgPSBpbnB1dEVsLnZhbHVlO1xuICAgICAgbGV0IHBhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuICAgICAgcGFyYW1zLnNldCgncXVlcnknLCBxdWVyeSk7XG5cbiAgICAgIC8vIElmIHdlIGhhdmUgYSByZWRpcmVjdFVybCwgd2Ugd2FudCB0aGUgZm9ybSB0byBiZVxuICAgICAgLy8gc2VyaWFsaXplZCBhbmQgc3VibWl0dGVkLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlZGlyZWN0VXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMucmVkaXJlY3RVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpbnB1dEVsLmJsdXIoKTtcblxuICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWSwgcXVlcnkpO1xuICAgICAgdGhpcy5jb3JlLnNldFF1ZXJ5KHF1ZXJ5KTtcbiAgICAgIHRoaXMuc2VhcmNoKHF1ZXJ5KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gd2lyZSB1cCBvdXIgYXV0byBjb21wbGV0ZSBvbiBhbiBpbnB1dCBzZWxlY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRTZWxlY3RvciBDU1Mgc2VsZWN0b3IgdG8gYmluZCBvdXIgYXV0byBjb21wbGV0ZSBjb21wb25lbnQgdG9cbiAgICovXG4gIGluaXRBdXRvQ29tcGxldGUgKGlucHV0U2VsZWN0b3IpIHtcbiAgICB0aGlzLl9pbnB1dEVsID0gaW5wdXRTZWxlY3RvcjtcblxuICAgIGlmICh0aGlzLl9hdXRvY29tcGxldGUpIHtcbiAgICAgIHRoaXMuX2F1dG9jb21wbGV0ZS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9hdXRvY29tcGxldGUgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKCdBdXRvQ29tcGxldGUnLCB7XG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmF1dG9jb21wbGV0ZWAsXG4gICAgICBjb250YWluZXI6ICcueXh0LVNlYXJjaEJhci1hdXRvY29tcGxldGUnLFxuICAgICAgYmFyS2V5OiB0aGlzLl9iYXJLZXksXG4gICAgICBhdXRvRm9jdXM6IHRoaXMuYXV0b0ZvY3VzICYmICF0aGlzLmF1dG9jb21wbGV0ZU9uTG9hZCxcbiAgICAgIHZlcnRpY2FsS2V5OiB0aGlzLl92ZXJ0aWNhbEtleSxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5wcm9tcHRIZWFkZXIsXG4gICAgICBvcmlnaW5hbFF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgaW5wdXRFbDogaW5wdXRTZWxlY3RvcixcbiAgICAgIG9uU3VibWl0OiAoKSA9PiB7XG4gICAgICAgIERPTS50cmlnZ2VyKHRoaXMuX2Zvcm1FbCwgJ3N1Ym1pdCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoIChxdWVyeSkge1xuICAgIGlmICh0aGlzLl90aHJvdHRsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl90aHJvdHRsZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLl90aHJvdHRsZWQgPSBmYWxzZTsgfSwgdGhpcy5fc2VhcmNoQ29vbGRvd24pO1xuXG4gICAgaWYgKHRoaXMuX3ZlcnRpY2FsS2V5KSB7XG4gICAgICBjb25zdCBhbGxGaWx0ZXJzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgICBjb25zdCB0b3RhbEZpbHRlciA9IGFsbEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgICA/IEZpbHRlci5hbmQoLi4uYWxsRmlsdGVycylcbiAgICAgICAgOiBhbGxGaWx0ZXJzWzBdO1xuICAgICAgY29uc3QgZmFjZXRGaWx0ZXIgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRkFDRVRfRklMVEVSKVswXTtcbiAgICAgIHJldHVybiB0aGlzLmNvcmUudmVydGljYWxTZWFyY2godGhpcy5fdmVydGljYWxLZXksIHtcbiAgICAgICAgaW5wdXQ6IHF1ZXJ5LFxuICAgICAgICBmaWx0ZXI6IEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSxcbiAgICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5PVEUoYmlsbHkpIFRlbXBvcmFyeSBoYWNrIGZvciBERU1PXG4gICAgICAvLyBSZW1vdmUgbWUgYWZ0ZXIgdGhlIGRlbW9cbiAgICAgIGxldCBuYXYgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXJcbiAgICAgICAgLmdldEFjdGl2ZUNvbXBvbmVudCgnTmF2aWdhdGlvbicpO1xuXG4gICAgICBpZiAobmF2KSB7XG4gICAgICAgIGxldCB0YWJzID0gbmF2LmdldFN0YXRlKCd0YWJzJyk7XG4gICAgICAgIGxldCB1cmxzID0ge307XG5cbiAgICAgICAgaWYgKHRhYnMgJiYgQXJyYXkuaXNBcnJheSh0YWJzKSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXModGFic1tpXS51cmwuc3BsaXQoJz8nKVsxXSk7XG4gICAgICAgICAgICBwYXJhbXMuc2V0KCdxdWVyeScsIHF1ZXJ5KTtcblxuICAgICAgICAgICAgbGV0IHVybCA9IHRhYnNbaV0uYmFzZVVybDtcbiAgICAgICAgICAgIGlmIChwYXJhbXMudG9TdHJpbmcoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHVybCArPSAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVybHNbdGFic1tpXS5jb25maWdJZF0gPSB1cmw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvcmUuc2VhcmNoKHF1ZXJ5LCB1cmxzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29yZS5zZWFyY2gocXVlcnkpO1xuICAgIH1cbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBsYWJlbFRleHQ6IHRoaXMubGFiZWxUZXh0LFxuICAgICAgc3VibWl0SWNvbjogdGhpcy5zdWJtaXRJY29uLFxuICAgICAgc3VibWl0VGV4dDogdGhpcy5zdWJtaXRUZXh0LFxuICAgICAgcXVlcnk6IHRoaXMucXVlcnlcbiAgICB9LCBkYXRhKSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZpbHRlclNlYXJjaENvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uL2RvbS9zZWFyY2hwYXJhbXMnO1xuXG4vKipcbiAqIEZpbHRlclNlYXJjaENvbXBvbmVudCBpcyB1c2VkIGZvciBhdXRvY29tcGxldGUgdXNpbmcgdGhlIEZpbHRlclNlYXJjaCBiYWNrZW5kLlxuICogSXQnbGwgYWxsb3cgeW91IHRvIHBpY2sgcHJlLXNldCBmaWx0ZXJzIHRoYXQgYXJlIHNldHVwIG9uIHRoZSBiYWNrZW5kIHdpdGhpblxuICogYSB2ZXJ0aWNhbCBzZWFyY2ggY29udGV4dC5cbiAqXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBrZXkgZm9yIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggY29uZmlndXJhdGlvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYmFyS2V5ID0gY29uZmlnLmJhcktleSB8fCBjb25maWcuaW5wdXRLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IGNvbmZpZy52ZXJ0aWNhbEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc3RvcmUgdGhlIGZpbHRlciB2YWx1ZSBidXQgZG8gbm90IHNlYXJjaCBvbiBjaGFuZ2VcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N0b3JlT25DaGFuZ2UgPSBjb25maWcuc3RvcmVPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFF1ZXJ5IHN1Ym1pc3Npb24gaXMgYmFzZWQgb24gYSBmb3JtIGFzIGNvbnRleHQuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIG5hdGl2ZSBmb3JtIG5vZGUgd2l0aGluIGNvbnRhaW5lclxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2Zvcm1FbCA9IGNvbmZpZy5mb3JtU2VsZWN0b3IgfHwgJ2Zvcm0nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlucHV0IGVsZW1lbnQgdXNlZCBmb3Igc2VhcmNoaW5nIGFuZCB3aXJlcyB1cCB0aGUga2V5Ym9hcmQgaW50ZXJhY3Rpb25cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2lucHV0RWwgPSBjb25maWcuaW5wdXRFbCB8fCAnLmpzLXlleHQtcXVlcnknO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIHVzZWQsIHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZSBhcyBhIGRhdGEgcG9pbnRcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy50aXRsZSA9IGNvbmZpZy50aXRsZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWFyY2ggdGV4dCB1c2VkIGZvciBsYWJlbGluZyB0aGUgaW5wdXQgYm94LCBhbHNvIHByb3ZpZGVkIHRvIHRlbXBsYXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc2VhcmNoVGV4dCA9IGNvbmZpZy5zZWFyY2hUZXh0IHx8ICdXaGF0IGFyZSB5b3UgaW50ZXJlc3RlZCBpbj8nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHRleHQgdG8gc2hvdyBhcyB0aGUgZmlyc3QgaXRlbSBmb3IgYXV0byBjb21wbGV0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnByb21wdEhlYWRlciA9IGNvbmZpZy5wcm9tcHRIZWFkZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEF1dG8gZm9jdXNlcyB0aGUgaW5wdXQgYm94IGlmIHNldCB0byB0cnVlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIGRlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuYXV0b0ZvY3VzID0gY29uZmlnLmF1dG9Gb2N1cyA9PT0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIHN1Ym1pdFVSTCB3aWxsIGZvcmNlIHRoZSBzZWFyY2ggcXVlcnkgc3VibWlzc2lvbiB0byBnZXRcbiAgICAgKiByZWRpcmVjdGVkIHRvIHRoZSBVUkwgcHJvdmlkZWQuXG4gICAgICogT3B0aW9uYWwsIGRlZmF1bHRzIHRvIG51bGwuXG4gICAgICpcbiAgICAgKiBJZiBubyByZWRpcmVjdFVybCBwcm92aWRlZCwgd2Uga2VlcCB0aGUgcGFnZSBhcyBhIHNpbmdsZSBwYWdlIGFwcC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucmVkaXJlY3RVcmwgPSBjb25maWcucmVkaXJlY3RVcmwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSBzdHJpbmcgdG8gdXNlIGZvciB0aGUgaW5wdXQgYm94LCBwcm92aWRlZCB0byB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlcnkgPSBjb25maWcucXVlcnkgfHwgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWApIHx8ICcnO1xuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCwgcSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gcTtcbiAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmlsdGVyIHN0cmluZyB0byB1c2UgZm9yIHRoZSBwcm92aWRlZCBxdWVyeVxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZmlsdGVyID0gY29uZmlnLmZpbHRlciB8fCB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWApIHx8ICcnO1xuICAgIGlmICh0eXBlb2YgdGhpcy5maWx0ZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmZpbHRlciA9IEpTT04ucGFyc2UodGhpcy5maWx0ZXIpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG5cbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke3RoaXMubmFtZX1gLCBmID0+IHsgdGhpcy5maWx0ZXIgPSBmOyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdGaWx0ZXJTZWFyY2gnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoKSB7XG4gICAgcmV0dXJuICdzZWFyY2gvZmlsdGVyc2VhcmNoJztcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICBpZiAodGhpcy5xdWVyeSAmJiB0aGlzLmZpbHRlcikge1xuICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICAvLyBXaXJlIHVwIG91ciBzZWFyY2ggaGFuZGxpbmcgYW5kIGF1dG8gY29tcGxldGVcbiAgICB0aGlzLmluaXRBdXRvQ29tcGxldGUodGhpcy5faW5wdXRFbCk7XG5cbiAgICBpZiAodGhpcy5hdXRvRm9jdXMgPT09IHRydWUgJiYgdGhpcy5xdWVyeS5sZW5ndGggPT09IDApIHtcbiAgICAgIERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2lucHV0RWwpLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgaGVscGVyIG1ldGhvZCB0byB3aXJlIHVwIG91ciBhdXRvIGNvbXBsZXRlIG9uIGFuIGlucHV0IHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBhdXRvIGNvbXBsZXRlIGNvbXBvbmVudCB0b1xuICAgKi9cbiAgaW5pdEF1dG9Db21wbGV0ZSAoaW5wdXRTZWxlY3Rvcikge1xuICAgIHRoaXMuX2lucHV0RWwgPSBpbnB1dFNlbGVjdG9yO1xuXG4gICAgdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZSgnQXV0b0NvbXBsZXRlJywge1xuICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfS5hdXRvY29tcGxldGVgLFxuICAgICAgaXNGaWx0ZXJTZWFyY2g6IHRydWUsXG4gICAgICBjb250YWluZXI6ICcueXh0LVNlYXJjaEJhci1hdXRvY29tcGxldGUnLFxuICAgICAgcHJvbXB0SGVhZGVyOiB0aGlzLnByb21wdEhlYWRlcixcbiAgICAgIG9yaWdpbmFsUXVlcnk6IHRoaXMucXVlcnksXG4gICAgICBvcmlnaW5hbEZpbHRlcjogdGhpcy5maWx0ZXIsXG4gICAgICBpbnB1dEVsOiBpbnB1dFNlbGVjdG9yLFxuICAgICAgdmVydGljYWxLZXk6IHRoaXMuX3ZlcnRpY2FsS2V5LFxuICAgICAgYmFyS2V5OiB0aGlzLl9iYXJLZXksXG4gICAgICBvblN1Ym1pdDogKHF1ZXJ5LCBmaWx0ZXIpID0+IHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG4gICAgICAgIHBhcmFtcy5zZXQoYCR7dGhpcy5uYW1lfS5xdWVyeWAsIHF1ZXJ5KTtcbiAgICAgICAgcGFyYW1zLnNldChgJHt0aGlzLm5hbWV9LmZpbHRlcmAsIGZpbHRlcik7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHJlZGlyZWN0VXJsLCB3ZSB3YW50IHRoZSBwYXJhbXMgdG8gYmVcbiAgICAgICAgLy8gc2VyaWFsaXplZCBhbmQgc3VibWl0dGVkLlxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucmVkaXJlY3RVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLnJlZGlyZWN0VXJsICsgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2F2ZSB0aGUgZmlsdGVyIHRvIHN0b3JhZ2UgZm9yIHRoZSBuZXh0IHNlYXJjaFxuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gRmlsdGVyLmZyb21SZXNwb25zZShmaWx0ZXIpO1xuICAgICAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gLCB0aGlzLnF1ZXJ5KTtcbiAgICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWAsIHRoaXMuZmlsdGVyKTtcbiAgICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIHRoaXMuZmlsdGVyKTtcbiAgICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggd2l0aCBhbGwgc2F2ZWQgZmlsdGVycyBhbmQgcXVlcnksXG4gICAqIG9wdGlvbmFsbHkgcmVkaXJlY3RpbmcgYmFzZWQgb24gY29uZmlnXG4gICAqL1xuICBzZWFyY2ggKCkge1xuICAgIGlmICh0aGlzLl9zdG9yZU9uQ2hhbmdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsdGVycyA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GSUxURVIpO1xuICAgIGxldCB0b3RhbEZpbHRlciA9IGZpbHRlcnNbMF07XG4gICAgaWYgKGZpbHRlcnMubGVuZ3RoID4gMSkge1xuICAgICAgdG90YWxGaWx0ZXIgPSBGaWx0ZXIuYW5kKC4uLmZpbHRlcnMpO1xuICAgIH1cbiAgICBjb25zdCBzZWFyY2hRdWVyeSA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKSB8fCAnJztcbiAgICBjb25zdCBmYWNldEZpbHRlciA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GQUNFVF9GSUxURVIpWzBdO1xuXG4gICAgdGhpcy5jb3JlLnZlcnRpY2FsU2VhcmNoKHRoaXMuX3ZlcnRpY2FsS2V5LCB7XG4gICAgICBpbnB1dDogc2VhcmNoUXVlcnksXG4gICAgICBmaWx0ZXI6IEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSxcbiAgICAgIGZhY2V0RmlsdGVyOiBKU09OLnN0cmluZ2lmeShmYWNldEZpbHRlcilcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBzZWFyY2hUZXh0OiB0aGlzLnNlYXJjaFRleHQsXG4gICAgICBxdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXJcbiAgICB9LCBkYXRhKSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEF1dG9Db21wbGV0ZUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbmNvbnN0IEtleXMgPSB7XG4gIEJBQ0tTUEFDRTogOCxcbiAgVEFCOiA5LFxuICBFTlRFUjogMTMsXG4gIFNISUZUOiAxNixcbiAgQ1RSTDogMTcsXG4gIEFMVDogMTgsXG4gIEVTQ0FQRTogMjcsXG5cbiAgTEVGVDogMzcsXG4gIFJJR0hUOiAzOSxcbiAgVVA6IDM4LFxuXG4gIERFTEVURTogNDYsXG4gIERPV046IDQwLFxuICBMRUZUX09TX0tFWTogOTEsXG4gIFJJR0hUX09TX0tFWTogOTIsXG4gIFNFTEVDVF9LRVk6IDkzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIGF1dG9jb21wbGV0ZSBpcyBzaW1wbGUgb3IgZmlsdGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc0ZpbHRlclNlYXJjaCA9IG9wdHMuaXNGaWx0ZXJTZWFyY2ggfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYGJhcktleWAgaW4gdGhlIHZlcnRpY2FsIHNlYXJjaCB0byB1c2UgZm9yIGF1dG8tY29tcGxldGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2JhcktleSA9IG9wdHMuYmFyS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYHZlcnRpY2FsS2V5YCBvZiB0aGUgdmVydGljYWwgc2VhcmNoIHRvIHVzZSBmb3IgYXV0by1jb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBvcHRzLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgaW5wdXQgZWwgc2VsZWN0b3IgZm9yIGF1dG8gY29tcGxldGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2lucHV0RWwgPSBvcHRzLmlucHV0RWwgfHwgJy5qcy15ZXh0LXF1ZXJ5JztcblxuICAgIC8qKlxuICAgICAqIEEgc2VsZWN0b3IgZm9yIHRoZSBhdXRvY29tcGxldGUgZWxlbWVudGVzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9hdXRvY29tcGxldGVFbHMgPSBvcHRzLmF1dG9Db21wbGV0ZUVscyB8fCAnLmpzLXlleHQtYXV0b2NvbWxldGUtb3B0aW9uJztcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSBmb3IgdGhlIGRhdGEtc3RvcmFnZSB0byBsaXN0ZW4gZm9yIHVwZGF0ZXMgZnJvbSB0aGUgc2VydmVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke3RoaXMubmFtZX1gO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBpbnB1dCB2YWx1ZSB3aGVuIHR5cGluZy5cbiAgICAgKiBXZSB1c2UgdGhpcyBmb3IgcmVzZXR0aW5nIHRoZSBzdGF0ZSBvZiB0aGUgaW5wdXQgdmFsdWUgd2hlbiBvdGhlciBpbnRlcmFjdGlvbnMgKGUuZy4gcmVzdWx0IG5hdmlnYXRpb24pXG4gICAgICogY2hhbmdlIGJhc2VkIG9uIGludGVyYWN0aW9ucy4gRm9yIGluc3RhbmNlLCBoaXR0aW5nIGVzY2FwZSBzaG91bGQgcmVzZXQgdGhlIHZhbHVlIHRvIHRoZSBvcmlnaW5hbCB0eXBlZCBxdWVyeS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX29yaWdpbmFsUXVlcnkgPSBvcHRzLm9yaWdpbmFsUXVlcnkgfHwgJyc7XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uIHRocm91Z2ggcmVzdWx0cy5cbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgc2VjdGlvbiB3ZSdyZSBuYXZpZ2F0aW5nIGluLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fc2VjdGlvbkluZGV4ID0gMDtcblxuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIGtleWJvYXJkIG5hdmlnYXRpb24gdGhyb3VnaCByZXN1bHRzLlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCByZXN1bHQgaW5kZXggd2UncmUgbmF2aWdhdGluZyBvbi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gLTE7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgdGV4dCB0byBzaG93IGFzIHRoZSBmaXJzdCBpdGVtIGZvciBhdXRvIGNvbXBsZXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucHJvbXB0SGVhZGVyID0gb3B0cy5wcm9tcHRIZWFkZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGlucHV0IGlzIGF1dG9jb21hdGljYWxseSBmb2N1c2VkIG9yIG5vdFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2F1dG9Gb2N1cyA9IG9wdHMuYXV0b0ZvY3VzIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgaW52b2tlZCB3aGVuIHRoZSBgRW50ZXJgIGtleSBpcyBwcmVzc2VkIG9uIGF1dG8gY29tcGxldGUuXG4gICAgICovXG4gICAgdGhpcy5fb25TdWJtaXQgPSBvcHRzLm9uU3VibWl0IHx8IGZ1bmN0aW9uICgpIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBhbGlhc2VkIHVzZWQgYnkgdGhlIGNvbXBvbmVudCBtYW5hZ2VyIGZvciBjcmVhdGlvbi5cbiAgICovXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdBdXRvQ29tcGxldGUnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdzZWFyY2gvYXV0b2NvbXBsZXRlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXRTdGF0ZSBpcyBvdmVycmlkZGVuIHNvIHRoYXQgd2UgY2FuIHByb3ZpZGUgYWRkaXRpb25hbCBtZXRhIGRhdGFcbiAgICogdG8gdGhlIHRlbXBsYXRlIChlLmcuIHRoZSBzZWN0aW9uSW5kZXggYW5kIHJlc3VsdEluZGV4KSwgc2luY2VcbiAgICogdGhvc2UgYXJlIGNsaWVudC1pbnRlcmFjdGlvbiBzcGVjaWZpYyB2YWx1ZXMgYW5kIGFyZW4ndCByZXR1cm5lZCBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIGhhc1Jlc3VsdHM6IHRoaXMuaGFzUmVzdWx0cyhkYXRhKSxcbiAgICAgIHNlY3Rpb25JbmRleDogdGhpcy5fc2VjdGlvbkluZGV4LFxuICAgICAgcmVzdWx0SW5kZXg6IHRoaXMuX3Jlc3VsdEluZGV4LFxuICAgICAgcHJvbXB0SGVhZGVyOiB0aGlzLl9vcmlnaW5hbFF1ZXJ5Lmxlbmd0aCA9PT0gMCA/IHRoaXMucHJvbXB0SGVhZGVyIDogbnVsbFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB1cGRhdGVTdGF0ZSBpcyBhIGhlbHBlciB0byBhcHBseSB0aGUgY3VycmVudCBzdGF0ZSB3aXRoIG5ldyBjbGllbnQtc3RhdGUuXG4gICAqL1xuICB1cGRhdGVTdGF0ZSAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9zdGF0ZS5nZXQoKSk7XG4gIH1cblxuICAvKipcbiAgICogb25DcmVhdGUgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBjb25zdHJ1Y3RlZCBmcm9tIHRoZSBmcmFtZXdvcmsuXG4gICAqIE9uY2Ugd2UncmUgaW5pdGFsaXplZCwgd2Ugd2lyZSB1cCBhbGwgb2Ygb3VyIHVzZXIgaW50ZXJhY3Rpb25zXG4gICAqL1xuICBvbkNyZWF0ZSAoKSB7XG4gICAgLy8gVXNlIHRoZSBjb250ZXh0IG9mIHRoZSBwYXJlbnQgY29tcG9uZW50IHRvIGZpbmQgdGhlIGlucHV0IG5vZGUuXG4gICAgbGV0IHF1ZXJ5SW5wdXQgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Ll9jb250YWluZXIsIHRoaXMuX2lucHV0RWwpO1xuICAgIGlmICghcXVlcnlJbnB1dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgaW5pdGlhbGl6ZSBBdXRvQ29tcGxldGUuIENhbiBub3QgZmluZCB7SFRNTEVsZW1lbnR9IGAnLCB0aGlzLl9pbnB1dEVsLCAnYC4nKTtcbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIHRoZSBuYXRpdmUgYXV0b2NvbXBsZXRlLCBhdXRvY29ycmVjdCAmIHNwZWxsY2hlY2tcbiAgICBET00uYXR0cmlidXRlcyhxdWVyeUlucHV0LCB7XG4gICAgICBhdXRvY29tcGxldGU6ICdvZmYnLFxuICAgICAgYXV0b2NvcnJlY3Q6ICdvZmYnLFxuICAgICAgc3BlbGxjaGVjazogJ2ZhbHNlJ1xuICAgIH0pO1xuXG4gICAgLy8gVGhlIHVzZXIgZXhpdHMgdGhlIGlucHV0LCBzbyB3ZSB3YW50IHRvIHJlc2V0IHRoZSBzdGF0ZSBhbmQgY2xvc2VcbiAgICAvLyB0aGUgYXV0byBjb21wbGV0ZVxuICAgIC8vIFRPRE8oamRlbGVybWUpOiBDbG9zZSBsb2dpYyB0byBiZSBtb3ZlZCB0byBwYXJlbnRcbiAgICBET00ub24oZG9jdW1lbnQsICdjbGljaycsIGUgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5qcy15eHQtQXV0b0NvbXBsZXRlLXdyYXBwZXIgKicpIHx8IGUudGFyZ2V0Lm1hdGNoZXModGhpcy5faW5wdXRFbCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gV2hlbiBhIHVzZXIgZm9jdXNlcyB0aGUgaW5wdXQsIHdlIHNob3VsZCBwb3B1bGF0ZSB0aGUgYXV0b2NvbXBsZXRlIGJhc2VkXG4gICAgLy8gb24gdGhlIGN1cnJlbnQgdmFsdWVcbiAgICBET00ub24ocXVlcnlJbnB1dCwgJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgdGhpcy5hdXRvQ29tcGxldGUocXVlcnlJbnB1dC52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBuYXZpZ2F0ZSBiZXR3ZWVuIHRoZSByZXN1bHRzIHVzaW5nIHRoZSBrZXlib2FyZFxuICAgIERPTS5vbihxdWVyeUlucHV0LCAna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZU5hdmlnYXRlUmVzdWx0cyhlLmtleUNvZGUsIGUpO1xuICAgICAgdGhpcy5oYW5kbGVTdWJtaXRSZXN1bHQoZS5rZXlDb2RlLCBxdWVyeUlucHV0LnZhbHVlLCBlKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLl9hdXRvRm9jdXMpIHtcbiAgICAgIERPTS5vbmNlKHF1ZXJ5SW5wdXQsICdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5hdXRvQ29tcGxldGUocXVlcnlJbnB1dC52YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBzZWxlY3QgYSByZXN1bHQgd2l0aCB0aGUgbW91c2VcbiAgICBET00uZGVsZWdhdGUodGhpcy5fY29udGFpbmVyLCAnLmpzLXlleHQtYXV0b2NvbXBsZXRlLW9wdGlvbicsICdjbGljaycsIChldnQsIHRhcmdldCkgPT4ge1xuICAgICAgbGV0IGRhdGEgPSB0YXJnZXQuZGF0YXNldDtcbiAgICAgIGxldCB2YWwgPSBkYXRhLnNob3J0O1xuXG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHZhbCk7XG4gICAgICB0aGlzLl9vblN1Ym1pdCh2YWwsIGRhdGEuZmlsdGVyKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIC8vIFdoZW4gdGhlIHVzZXIgaXMgdHlwaW5nIGluIHRoZSBpbnB1dCwgcHJvY2VzcyB0aGUgYXV0byBjb21wbGV0ZS5cbiAgICBET00ub24ocXVlcnlJbnB1dCwgJ2tleXVwJywgKGUpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlVHlwaW5nKGUua2V5Q29kZSwgcXVlcnlJbnB1dC52YWx1ZSwgZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogY2xvc2Ugd2lsbCBoaWRlIHRoZSBhdXRvIGNvbXBsZXRlIHJlc3VsdHMgYW5kIHJlc2V0IHRoZSBzdGF0ZS5cbiAgICovXG4gIGNsb3NlICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt9KTtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICAvKipcbiAgICogcmVzZXRzIHRoZSBjbGllbnQgc3RhdGUgdG8gdGhlaXIgb3JpZ2luYWwgdmFsdWVzIGFuZCB0cmlnZ2Vyc1xuICAgKiBhIHRlbXBsYXRlLXJlcmVuZGVyIHZpYSB1cGRhdGVTdGF0ZVxuICAgKi9cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuX3NlY3Rpb25JbmRleCA9IDA7XG4gICAgdGhpcy5fcmVzdWx0SW5kZXggPSAtMTtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB0byB1cGRhdGUgdGhlIGlucHV0IHRleHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdFZhbHVlIE9wdGlvbiB2YWx1ZSBwcm92aWRlZC5cbiAgICogSWYgbm8gdmFsdWUgcHJvdmlkZWQsIHdlJ2xsIHRyeSB0byBmaW5kIGl0IGJhc2VkIG9uIHRoZSBzZWxlY3Rpb24gaW5kZXhlcy5cbiAgICovXG4gIHVwZGF0ZVF1ZXJ5IChvcHRWYWx1ZSkge1xuICAgIC8vIE9ubHkgd2FudCB0byB1cGRhdGUgdGhlIHF1ZXJ5IHN0cmluZyBpZiB0aGVyZXMgYSB2YWx1ZS5cbiAgICAvLyBJZiBvbmUgaXMgcHJvdmlkZWQsIGdyZWF0LlxuICAgIC8vIE90aGVyd2lzZSwgbGV0cyB0cnkgdG8gZmluZCBpdCBmcm9tIHRoZSBjdXJyZW50IHNlbGVjdGlvbiBpbiB0aGUgcmVzdWx0cy5cbiAgICBpZiAob3B0VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IHNlY3Rpb25zID0gdGhpcy5fc3RhdGUuZ2V0KCdzZWN0aW9ucycpO1xuXG4gICAgICBsZXQgcmVzdWx0cyA9IHNlY3Rpb25zW3RoaXMuX3NlY3Rpb25JbmRleF0ucmVzdWx0cztcbiAgICAgIG9wdFZhbHVlID0gcmVzdWx0c1t0aGlzLl9yZXN1bHRJbmRleF0uc2hvcnRWYWx1ZTtcbiAgICB9XG5cbiAgICBsZXQgcXVlcnlFbCA9IERPTS5xdWVyeSh0aGlzLl9wYXJlbnQuX2NvbnRhaW5lciwgdGhpcy5faW5wdXRFbCk7XG4gICAgcXVlcnlFbC52YWx1ZSA9IG9wdFZhbHVlO1xuICB9XG5cbiAgaGFuZGxlVHlwaW5nIChrZXksIHZhbHVlLCBlKSB7XG4gICAgbGV0IGlnbm9yZWRLZXlzID0gW1xuICAgICAgS2V5cy5ET1dOLFxuICAgICAgS2V5cy5VUCxcbiAgICAgIEtleXMuQ1RSTCxcbiAgICAgIEtleXMuQUxULFxuICAgICAgS2V5cy5TSElGVCxcbiAgICAgIEtleXMuTEVGVCxcbiAgICAgIEtleXMuUklHSFQsXG4gICAgICBLZXlzLkxFRlRfT1NfS0VZLFxuICAgICAgS2V5cy5SSUdIVF9PU19LRVksXG4gICAgICBLZXlzLkVOVEVSLFxuICAgICAgS2V5cy5UQUIsXG4gICAgICBLZXlzLlNFTEVDVF9LRVlcbiAgICBdO1xuXG4gICAgaWYgKGlnbm9yZWRLZXlzLmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVXNlciBlc2NhcGVzIG91dCBvZiBhdXRvIGNvbXBsZXRlLCBzbyB3ZSByZXNldCBpdCB0byB0aGUgb3JpZ2luYWwgaW5wdXRcbiAgICBpZiAoa2V5ID09PSBLZXlzLkVTQ0FQRSkge1xuICAgICAgdGhpcy51cGRhdGVRdWVyeSh0aGlzLl9vcmlnaW5hbFF1ZXJ5KTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIG9yaWdpbmFsIHZhbHVlIGJhc2VkIG9uIHRoZSB1c2VyIGlucHV0XG4gICAgdGhpcy5fb3JpZ2luYWxRdWVyeSA9IHZhbHVlO1xuXG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHRoaXMuYXV0b0NvbXBsZXRlKHZhbHVlKTtcbiAgfVxuXG4gIGF1dG9Db21wbGV0ZSAoaW5wdXQpIHtcbiAgICBpZiAodGhpcy5pc0ZpbHRlclNlYXJjaCkge1xuICAgICAgdGhpcy5jb3JlLmF1dG9Db21wbGV0ZUZpbHRlcihpbnB1dCwgdGhpcy5uYW1lLCB0aGlzLl92ZXJ0aWNhbEtleSwgdGhpcy5fYmFyS2V5KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3ZlcnRpY2FsS2V5IHx8IHRoaXMuX2JhcktleSkge1xuICAgICAgdGhpcy5jb3JlLmF1dG9Db21wbGV0ZVZlcnRpY2FsKGlucHV0LCB0aGlzLm5hbWUsIHRoaXMuX3ZlcnRpY2FsS2V5LCB0aGlzLl9iYXJLZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlVW5pdmVyc2FsKGlucHV0LCB0aGlzLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRydWUgaWYgd2UgaGF2ZSByZXN1bHRzIGluIGFueSBzZWN0aW9uXG4gICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICovXG4gIGhhc1Jlc3VsdHMgKGRhdGEpIHtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHNlY3Rpb25zID0gZGF0YVsnc2VjdGlvbnMnXTtcbiAgICBpZiAoIXNlY3Rpb25zKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZGF0YSA9IHNlY3Rpb25zW2ldO1xuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzdWx0cyA9IGRhdGEucmVzdWx0cztcbiAgICAgIGlmICghcmVzdWx0cykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBoYW5kbGVOYXZpZ2F0ZVJlc3VsdHMgKGtleSwgZSkge1xuICAgIGxldCBzZWN0aW9ucyA9IHRoaXMuX3N0YXRlLmdldCgnc2VjdGlvbnMnKTtcbiAgICBpZiAoc2VjdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBzZWN0aW9ucy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRhYmJpbmcgb3V0IG9yIGVudGVyIHNob3VsZCBjbG9zZSB0aGUgYXV0byBjb21wbGV0ZS5cbiAgICBpZiAoa2V5ID09PSBLZXlzLlRBQikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCByZXN1bHRzID0gc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzO1xuICAgIGlmIChrZXkgPT09IEtleXMuVVApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLl9yZXN1bHRJbmRleCA8PSAwKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPiAwKSB7XG4gICAgICAgICAgdGhpcy5fc2VjdGlvbkluZGV4LS07XG4gICAgICAgICAgdGhpcy5fcmVzdWx0SW5kZXggPSBzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHMubGVuZ3RoIC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHRoaXMuX29yaWdpbmFsUXVlcnkpO1xuICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVzdWx0SW5kZXgtLTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSBLZXlzLkRPV04pIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLl9yZXN1bHRJbmRleCA+PSByZXN1bHRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlY3Rpb25JbmRleCA8IHNlY3Rpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLl9zZWN0aW9uSW5kZXgrKztcbiAgICAgICAgICB0aGlzLl9yZXN1bHRJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVzdWx0SW5kZXgrKztcbiAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTdWJtaXRSZXN1bHQgKGtleSwgdmFsdWUsIGUpIHtcbiAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG4gICAgaWYgKHNlY3Rpb25zID09PSB1bmRlZmluZWQgfHwgc2VjdGlvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIGlmICh0aGlzLmlzRmlsdGVyU2VhcmNoKSB7XG4gICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBzdWJtaXQgdGhlIHNlYXJjaCBvbiBlbnRlclxuICAgIGlmIChrZXkgPT09IEtleXMuRU5URVIpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJTZWFyY2ggJiYgdGhpcy5fcmVzdWx0SW5kZXggPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGZpbHRlciA9ICcnO1xuICAgICAgaWYgKHRoaXMuX3NlY3Rpb25JbmRleCA+PSAwICYmIHRoaXMuX3Jlc3VsdEluZGV4ID49IDApIHtcbiAgICAgICAgZmlsdGVyID0gSlNPTi5zdHJpbmdpZnkoc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzW3RoaXMuX3Jlc3VsdEluZGV4XS5maWx0ZXIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHZhbHVlKTtcbiAgICAgIHRoaXMuX29yaWdpbmFsUXVlcnkgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX29uU3VibWl0KHZhbHVlLCBmaWx0ZXIpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmFjZXQgKi9cblxuLyoqXG4gKiBNb2RlbCByZXByZXNlbnRpbmcgYSBmYWNldCBmaWx0ZXIgd2l0aCB0aGUgZm9ybWF0IG9mXG4gKiB7XG4gKiAgIFwiZmllbGRfbmFtZVwiOiBbIEZpbHRlcnMuLi4gXSxcbiAqICAgLi4uXG4gKiB9XG4gKlxuICogQHNlZSB7QGxpbmsgRmlsdGVyfVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgZmFjZXQgZmlsdGVyIGZyb20gYSBsaXN0IG9mIEZpbHRlcnNcbiAgICogQHBhcmFtICB7Li4uRmlsdGVyfSBmaWx0ZXJzIFRoZSBmaWx0ZXJzIHRvIHVzZSBpbiB0aGlzIGZhY2V0XG4gICAqIEByZXR1cm5zIHtGYWNldH1cbiAgICovXG4gIHN0YXRpYyBmcm9tRmlsdGVycyAoLi4uZmlsdGVycykge1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGNvbnN0IGZsYXRGaWx0ZXJzID0gZmlsdGVycy5mbGF0TWFwKGYgPT4gZi4kb3IgfHwgZik7XG4gICAgZmxhdEZpbHRlcnMuZm9yRWFjaChmID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKGYpWzBdO1xuICAgICAgaWYgKCFncm91cHNba2V5XSkge1xuICAgICAgICBncm91cHNba2V5XSA9IFtdO1xuICAgICAgfVxuICAgICAgZ3JvdXBzW2tleV0ucHVzaChmKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgRmFjZXQoZ3JvdXBzKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyQm94Q29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgRmFjZXQgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmFjZXQnO1xuXG4vKipcbiAqIFJlbmRlcnMgYSBzZXQgb2YgZmlsdGVycywgYW5kIHNlYXJjaGVzIHdpdGggdGhlbSB3aGVuIGFwcGxpZWQuXG4gKiBNdWx0aXBsZSBGaWx0ZXJCb3ggY29tcG9uZW50cyB3aWxsIEFORCB0b2dldGhlciBidXQgd2lsbCBub3Qgc2hhcmUgc3RhdGUuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyQm94Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIGlmICghY29uZmlnLmZpbHRlcnMgfHwgIShjb25maWcuZmlsdGVycyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlckJveCByZXF1aXJlcyBmaWx0ZXJzIHRvIGJlIHByb3ZpZGVkIGFzIGFuIGFycmF5JyxcbiAgICAgICAgJ0ZpbHRlckJveCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGZpbHRlcnMgdG8gZGlzcGxheSBhbmQgY29udHJvbFxuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlckNvbmZpZ3MgPSBjb25maWcuZmlsdGVycztcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBzZWFyY2hcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRyaWdnZXIgYSBzZWFyY2ggb24gZWFjaCBjaGFuZ2UgdG8gYSBmaWx0ZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaE9uQ2hhbmdlID0gY29uZmlnLnNlYXJjaE9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdG9yIG9mIHRoZSBhcHBseSBidXR0b25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBwbHlCdXR0b25TZWxlY3RvciA9IGNvbmZpZy5hcHBseUJ1dHRvblNlbGVjdG9yIHx8ICcuanMteWV4dC1maWx0ZXJib3gtYXBwbHknO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudHMgY3JlYXRlZCBmb3IgZWFjaCBmaWx0ZXIgY29uZmlnXG4gICAgICogQHR5cGUge0NvbXBvbmVudFtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGZpbHRlciBjb21wb25lbnRzIGluIHRoZSBib3hcbiAgICAgKiBAdHlwZSB7RmlsdGVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVycyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdGhpcyBmaWx0ZXJib3ggY29udGFpbnMgZHluYW1pYyBmaWx0ZXJzLiBUaGlzIGFmZmVjdHMgdGhlXG4gICAgICogdGhlIHdheSB0aGUgZmlsdGVycyBhcmUgdXNlZCBpbiB0aGUgc2VhcmNoXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9pc0R5bmFtaWMgPSBjb25maWcuaXNEeW5hbWljIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSBgZmlsdGVycy9maWx0ZXJib3hgO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0ZpbHRlckJveCc7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgZmlsdGVyQ29uZmlnczogdGhpcy5fZmlsdGVyQ29uZmlncyxcbiAgICAgIHNob3dBcHBseUJ1dHRvbjogIXRoaXMuX3NlYXJjaE9uQ2hhbmdlXG4gICAgfSkpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgaWYgKHRoaXMuX2ZpbHRlckNvbXBvbmVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9maWx0ZXJDb21wb25lbnRzLmZvckVhY2goYyA9PiBjLnJlbW92ZSgpKTtcbiAgICAgIHRoaXMuX2ZpbHRlckNvbXBvbmVudHMgPSBbXTtcbiAgICAgIHRoaXMuX2ZpbHRlcnMgPSBbXTtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGZpbHRlcnMgZnJvbSBjb25maWdzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9maWx0ZXJDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLl9maWx0ZXJDb25maWdzW2ldO1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZShjb25maWcudHlwZSwgT2JqZWN0LmFzc2lnbih7fSxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICB7XG4gICAgICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0uZmlsdGVyJHtpfWAsXG4gICAgICAgICAgc3RvcmVPbkNoYW5nZTogZmFsc2UsXG4gICAgICAgICAgY29udGFpbmVyOiBgLmpzLXlleHQtZmlsdGVyYm94LWZpbHRlciR7aX1gLFxuICAgICAgICAgIG9uQ2hhbmdlOiAoZmlsdGVyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uRmlsdGVyQ2hhbmdlKGksIGZpbHRlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICBjb21wb25lbnQubW91bnQoKTtcbiAgICAgIHRoaXMuX2ZpbHRlckNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgdGhpcy5fZmlsdGVyc1tpXSA9IGNvbXBvbmVudC5nZXRGaWx0ZXIoKTtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGFwcGx5IGJ1dHRvblxuICAgIGlmICghdGhpcy5fc2VhcmNoT25DaGFuZ2UpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2FwcGx5QnV0dG9uU2VsZWN0b3IpO1xuXG4gICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgIERPTS5vbihidXR0b24sICdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLl9zYXZlRmlsdGVyc1RvU3RvcmFnZSgpO1xuICAgICAgICAgIHRoaXMuX3NlYXJjaCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGNoYW5nZXMgdG8gY2hpbGQgZmlsdGVyIGNvbXBvbmVudHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgY2hhbmdlZCBmaWx0ZXJcbiAgICogQHBhcmFtIHtGaWx0ZXJ9IGZpbHRlciBUaGUgbmV3IGZpbHRlclxuICAgKi9cbiAgb25GaWx0ZXJDaGFuZ2UgKGluZGV4LCBmaWx0ZXIpIHtcbiAgICB0aGlzLl9maWx0ZXJzW2luZGV4XSA9IGZpbHRlcjtcbiAgICBpZiAodGhpcy5fc2VhcmNoT25DaGFuZ2UpIHtcbiAgICAgIHRoaXMuX3NhdmVGaWx0ZXJzVG9TdG9yYWdlKCk7XG4gICAgICB0aGlzLl9zZWFyY2goKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBmaWx0ZXIgY29tcG9uZW50cyBhbG9uZyB3aXRoIHRoaXMgY29tcG9uZW50XG4gICAqL1xuICByZW1vdmUgKCkge1xuICAgIHRoaXMuX2ZpbHRlckNvbXBvbmVudHMuZm9yRWFjaChjID0+IGMucmVtb3ZlKCkpO1xuICAgIHN1cGVyLnJlbW92ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgY3VycmVudCBmaWx0ZXJzIHRvIHN0b3JhZ2UgdG8gYmUgdXNlZCBpbiB0aGUgbmV4dCBzZWFyY2hcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zYXZlRmlsdGVyc1RvU3RvcmFnZSAoKSB7XG4gICAgY29uc3QgdmFsaWRGaWx0ZXJzID0gdGhpcy5fZmlsdGVycy5maWx0ZXIoZiA9PlxuICAgICAgZiAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBmICE9PSBudWxsICYmXG4gICAgICBPYmplY3Qua2V5cyhmKS5sZW5ndGggPiAwKTtcblxuICAgIGlmICh0aGlzLl9pc0R5bmFtaWMpIHtcbiAgICAgIGNvbnN0IGNvbWJpbmVkRmlsdGVyID0gRmFjZXQuZnJvbUZpbHRlcnMoLi4udmFsaWRGaWx0ZXJzKTtcbiAgICAgIHRoaXMuY29yZS5zZXRGYWNldEZpbHRlcih0aGlzLm5hbWUsIGNvbWJpbmVkRmlsdGVyIHx8IHt9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29tYmluZWRGaWx0ZXIgPSB2YWxpZEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgICA/IEZpbHRlci5hbmQoLi4udmFsaWRGaWx0ZXJzKVxuICAgICAgICA6IHZhbGlkRmlsdGVyc1swXTtcbiAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBjb21iaW5lZEZpbHRlciB8fCB7fSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYSBzZWFyY2ggd2l0aCBhbGwgZmlsdGVycyBpbiBzdG9yYWdlXG4gICAqL1xuICBfc2VhcmNoICgpIHtcbiAgICBjb25zdCBhbGxGaWx0ZXJzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgY29uc3QgdG90YWxGaWx0ZXIgPSBhbGxGaWx0ZXJzLmxlbmd0aCA+IDFcbiAgICAgID8gRmlsdGVyLmFuZCguLi5hbGxGaWx0ZXJzKVxuICAgICAgOiBhbGxGaWx0ZXJzWzBdO1xuXG4gICAgY29uc3QgcXVlcnkgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSk7XG5cbiAgICBjb25zdCBmYWNldEZpbHRlciA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GQUNFVF9GSUxURVIpWzBdO1xuXG4gICAgdGhpcy5jb3JlLnZlcnRpY2FsU2VhcmNoKHRoaXMuX3ZlcnRpY2FsS2V5LCB7XG4gICAgICBpbnB1dDogcXVlcnksXG4gICAgICBmaWx0ZXI6IEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSxcbiAgICAgIGZhY2V0RmlsdGVyOiBKU09OLnN0cmluZ2lmeShmYWNldEZpbHRlcilcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyT3B0aW9uc0NvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuLyoqXG4gKiBUaGUgY3VycmVudGx5IHN1cHBvcnRlZCBjb250cm9sc1xuICogQHR5cGUge3N0cmluZ1tdfVxuICovXG5jb25zdCBTVVBQT1JURURfQ09OVFJPTFMgPSBbXG4gICdzaW5nbGVvcHRpb24nLFxuICAnbXVsdGlvcHRpb24nXG5dO1xuXG4vKipcbiAqIFJlbmRlcnMgYSBzZXQgb2Ygb3B0aW9ucywgZWFjaCBvbmUgcmVwcmVzZW50aW5nIGEgZmlsdGVyIGluIGEgc2VhcmNoLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJPcHRpb25zQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIGlmICghY29uZmlnLmNvbnRyb2wgfHwgIVNVUFBPUlRFRF9DT05UUk9MUy5pbmNsdWRlcyhjb25maWcuY29udHJvbCkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICdGaWx0ZXJPcHRpb25zIHJlcXVpcmVzIGEgdmFsaWQgXCJjb250cm9sXCIgdG8gYmUgcHJvdmlkZWQnLFxuICAgICAgICAnRmlsdGVyT3B0aW9ucycpO1xuICAgIH1cblxuICAgIGlmICghY29uZmlnLm9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICdGaWx0ZXJPcHRpb25zIGNvbXBvbmVudCByZXF1aXJlcyBvcHRpb25zIHRvIGJlIHByb3ZpZGVkJyxcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMnKTtcbiAgICB9XG5cbiAgICBsZXQgcHJldmlvdXNPcHRpb25zID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUodGhpcy5uYW1lKTtcbiAgICBpZiAodHlwZW9mIHByZXZpb3VzT3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHByZXZpb3VzT3B0aW9ucyA9IEpTT04ucGFyc2UocHJldmlvdXNPcHRpb25zKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICAgIGxldCBzZWxlY3RlZE9wdGlvbnMgPSBwcmV2aW91c09wdGlvbnMgfHwgW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBmaWx0ZXIgb3B0aW9ucyB0byBkaXNwbGF5IHdpdGggY2hlY2tlZCBzdGF0dXNcbiAgICAgKiBAdHlwZSB7b2JqZWN0W119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vcHRpb25zID0gY29uZmlnLm9wdGlvbnMubWFwKG8gPT4gT2JqZWN0LmFzc2lnbih7fSwgeyBzZWxlY3RlZDogc2VsZWN0ZWRPcHRpb25zLmluY2x1ZGVzKG8ubGFiZWwpIH0sIG8pKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIGNvbnRyb2wgdG8gZGlzcGxheVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9jb250cm9sID0gY29uZmlnLmNvbnRyb2w7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0b3IgdXNlZCBmb3Igb3B0aW9ucyBpbiB0aGUgdGVtcGxhdGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb3B0aW9uU2VsZWN0b3IgPSBjb25maWcub3B0aW9uU2VsZWN0b3IgfHwgJy5qcy15ZXh0LWZpbHRlci1vcHRpb24nO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc3RvcmVzIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBvbiBlYWNoIGNoYW5nZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RvcmVPbkNoYW5nZSA9IGNvbmZpZy5zdG9yZU9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBjaGFuZ2VkXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBjb25maWcub25DaGFuZ2UgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gYmUgdXNlZCBpbiB0aGUgbGVnZW5kXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xhYmVsID0gY29uZmlnLmxhYmVsIHx8ICdGaWx0ZXJzJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdGaWx0ZXJPcHRpb25zJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyLCBiYXNlZCBvbiB0aGUgY29udHJvbFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gYGNvbnRyb2xzLyR7Y29uZmlnLmNvbnRyb2x9YDtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICBvcHRpb25zOiB0aGlzLl9vcHRpb25zLFxuICAgICAgbGFiZWw6IHRoaXMuX2xhYmVsXG4gICAgfSkpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgRE9NLmRlbGVnYXRlKFxuICAgICAgRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgYC4ke3RoaXMuX2NvbnRyb2x9LWZpZWxkc2V0YCksXG4gICAgICB0aGlzLl9vcHRpb25TZWxlY3RvcixcbiAgICAgICdjbGljaycsXG4gICAgICBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU9wdGlvbihwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC5pbmRleCksIGV2ZW50LnRhcmdldC5jaGVja2VkKTtcblxuICAgICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLl9idWlsZEZpbHRlcigpO1xuICAgICAgICBpZiAodGhpcy5fc3RvcmVPbkNoYW5nZSkge1xuICAgICAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBmaWx0ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fb25DaGFuZ2UoZmlsdGVyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgX3VwZGF0ZU9wdGlvbiAoaW5kZXgsIHNlbGVjdGVkKSB7XG4gICAgaWYgKHRoaXMuX2NvbnRyb2wgPT09ICdzaW5nbGVvcHRpb24nKSB7XG4gICAgICB0aGlzLl9vcHRpb25zID0gdGhpcy5fb3B0aW9ucy5tYXAobyA9PiBPYmplY3QuYXNzaWduKHt9LCBvLCB7IHNlbGVjdGVkOiBmYWxzZSB9KSk7XG4gICAgfVxuXG4gICAgdGhpcy5fb3B0aW9uc1tpbmRleF0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9vcHRpb25zW2luZGV4XSwgeyBzZWxlY3RlZCB9KTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG4gIH1cblxuICBnZXRGaWx0ZXIgKCkge1xuICAgIHJldHVybiB0aGlzLl9idWlsZEZpbHRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBvcHRpb25zXG4gICAqL1xuICBjbGVhciAoKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBET00ucXVlcnlBbGwodGhpcy5fY29udGFpbmVyLCB0aGlzLl9vcHRpb25TZWxlY3Rvcik7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlID0+IGUuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2ZhbHNlJykpO1xuICAgIHRoaXMuX2FwcGx5RmlsdGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgYW5kIHJldHVybiB0aGUgRmlsdGVyIHRoYXQgcmVwcmVzZW50cyB0aGUgY3VycmVudCBzdGF0ZVxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2J1aWxkRmlsdGVyICgpIHtcbiAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5fb3B0aW9uc1xuICAgICAgLmZpbHRlcihvID0+IG8uc2VsZWN0ZWQpXG4gICAgICAubWFwKG8gPT4gby5maWx0ZXJcbiAgICAgICAgPyBvLmZpbHRlclxuICAgICAgICA6IEZpbHRlci5lcXVhbChvLmZpZWxkLCBvLnZhbHVlKSk7XG5cbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KHRoaXMubmFtZSwgdGhpcy5fb3B0aW9ucy5maWx0ZXIobyA9PiBvLnNlbGVjdGVkKS5tYXAobyA9PiBvLmxhYmVsKSk7XG4gICAgcmV0dXJuIGZpbHRlcnMubGVuZ3RoID4gMFxuICAgICAgPyBGaWx0ZXIuZ3JvdXAoLi4uZmlsdGVycylcbiAgICAgIDoge307XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJhbmdlRmlsdGVyQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmdlRmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaWVsZCB0byBmaWx0ZXIgb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmllbGQgPSBjb25maWcuZmllbGQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBmaWx0ZXIgdmFsdWUgY2hhbmdlc1xuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29uQ2hhbmdlID0gY29uZmlnLm9uQ2hhbmdlIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc3RvcmVzIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBvbiBlYWNoIGNoYW5nZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RvcmVPbkNoYW5nZSA9IGNvbmZpZy5zdG9yZU9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgbGV0IG1pblZhbCA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke3RoaXMubmFtZX0ubWluYCk7XG4gICAgaWYgKHR5cGVvZiBtaW5WYWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBtaW5WYWwgPSBOdW1iZXIucGFyc2VJbnQobWluVmFsKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICAgIGxldCBtYXhWYWwgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHt0aGlzLm5hbWV9Lm1heGApO1xuICAgIGlmICh0eXBlb2YgbWluVmFsID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbWF4VmFsID0gTnVtYmVyLnBhcnNlSW50KG1heFZhbCk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHJhbmdlIHJlcHJlc2VudGVkXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3JhbmdlID0ge1xuICAgICAgbWluOiBtaW5WYWwgfHwgY29uZmlnLmluaXRpYWxNaW4gfHwgMCxcbiAgICAgIG1heDogbWF4VmFsIHx8IGNvbmZpZy5pbml0aWFsTWF4IHx8IDEwXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB0byBkaXNwbGF5IGZvciB0aGUgcmFuZ2UgY29udHJvbFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90aXRsZSA9IGNvbmZpZy50aXRsZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBsYWJlbCB0byBkaXNwbGF5IGZvciB0aGUgbWluIGlucHV0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX21pbkxhYmVsID0gY29uZmlnLm1pbkxhYmVsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgbGFiZWwgdG8gZGlzcGxheSBmb3IgdGhlIG1heCBpbnB1dFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9tYXhMYWJlbCA9IGNvbmZpZy5tYXhMYWJlbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSBgY29udHJvbHMvcmFuZ2VgO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1JhbmdlRmlsdGVyJztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgdGl0bGU6IHRoaXMuX3RpdGxlLFxuICAgICAgbWluTGFiZWw6IHRoaXMuX21pbkxhYmVsLFxuICAgICAgbWF4TGFiZWw6IHRoaXMuX21heExhYmVsLFxuICAgICAgbWluVmFsdWU6IHRoaXMuX3JhbmdlLm1pbixcbiAgICAgIG1heFZhbHVlOiB0aGlzLl9yYW5nZS5tYXhcbiAgICB9KSk7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgRE9NLmRlbGVnYXRlKHRoaXMuX2NvbnRhaW5lciwgJy5qcy15ZXh0LXJhbmdlJywgJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdXBkYXRlUmFuZ2UoZXZlbnQudGFyZ2V0LmRhdGFzZXQua2V5LCBOdW1iZXIucGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRNaW4gKHZhbHVlKSB7XG4gICAgdGhpcy5fdXBkYXRlUmFuZ2UoJ21pbicsIHZhbHVlKTtcbiAgfVxuXG4gIHNldE1heCAodmFsdWUpIHtcbiAgICB0aGlzLl91cGRhdGVSYW5nZSgnbWF4JywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0RmlsdGVyICgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgcmFuZ2Ugc3RhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmFuZ2Uga2V5IHRvIHVwZGF0ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIG5ldyB2YWx1ZSBmb3IgdGhlIGtleVxuICAgKi9cbiAgX3VwZGF0ZVJhbmdlIChrZXksIHZhbHVlKSB7XG4gICAgdGhpcy5fcmFuZ2UgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9yYW5nZSwgeyBba2V5XTogdmFsdWUgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSgpO1xuXG4gICAgY29uc3QgZmlsdGVyID0gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgICBpZiAodGhpcy5fc3RvcmVPbkNoYW5nZSkge1xuICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGZpbHRlcik7XG4gICAgfVxuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7dGhpcy5uYW1lfS5taW5gLCB0aGlzLl9yYW5nZS5taW4pO1xuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7dGhpcy5uYW1lfS5tYXhgLCB0aGlzLl9yYW5nZS5tYXgpO1xuXG4gICAgdGhpcy5fb25DaGFuZ2UoZmlsdGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgZmlsdGVyIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjdXJyZW50IHN0YXRlXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBfYnVpbGRGaWx0ZXIgKCkge1xuICAgIHJldHVybiBGaWx0ZXIuaW5jbHVzaXZlUmFuZ2UodGhpcy5fZmllbGQsIHRoaXMuX3JhbmdlLm1pbiwgdGhpcy5fcmFuZ2UubWF4KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRGF0ZUZpbHRlckNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIEEgZmlsdGVyIGZvciBhIHJhbmdlIG9mIGRhdGVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVSYW5nZUZpbHRlckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBpIGZpZWxkIHRoaXMgZmlsdGVyIGNvbnRyb2xzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpZWxkID0gY29uZmlnLmZpZWxkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIHRvIGRpc3BsYXkgZm9yIHRoZSBkYXRlIHJhbmdlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RpdGxlID0gY29uZmlnLnRpdGxlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGxhYmVsIHRvIHNob3cgZm9yIHRoZSBtaW4gZGF0ZSBpbnB1dFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9taW5MYWJlbCA9IGNvbmZpZy5taW5MYWJlbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGxhYmVsIHRvIHNob3cgZm9yIHRoZSBtYXggZGF0ZSBpbnB1dFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9tYXhMYWJlbCA9IGNvbmZpZy5tYXhMYWJlbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbGxiYWNrIHVzZWQgd2hlbiBhIGRhdGUgaXMgY2hhbmdlZFxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29uQ2hhbmdlID0gY29uZmlnLm9uQ2hhbmdlIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc3RvcmVzIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBvbiBlYWNoIGNoYW5nZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RvcmVPbkNoYW5nZSA9IGNvbmZpZy5zdG9yZU9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhpcyBmaWx0ZXIgcmVwcmVzZW50cyBhbiBleGNsdXNpdmUgcmFuZ2UsIHJhdGhlciB0aGFuIGFuIGluY2x1c2l2ZSBvbmVcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2lzRXhjbHVzaXZlID0gY29uZmlnLmlzRXhjbHVzaXZlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIGZvciB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gYGNvbnRyb2xzL2RhdGVgO1xuXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRvZGF5U3RyaW5nID0gYCR7dG9kYXkuZ2V0RnVsbFllYXIoKX0tJHtgJHt0b2RheS5nZXRNb250aCgpICsgMX1gLnBhZFN0YXJ0KDIsICcwJyl9LSR7YCR7dG9kYXkuZ2V0RGF0ZSgpfWAucGFkU3RhcnQoMiwgJzAnKX1gO1xuICAgIGNvbnN0IG1pbkRhdGUgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHt0aGlzLm5hbWV9Lm1pbmApO1xuICAgIGNvbnN0IG1heERhdGUgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHt0aGlzLm5hbWV9Lm1heGApO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgZGF0ZSByYW5nZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZGF0ZSA9IHtcbiAgICAgIG1pbjogbWluRGF0ZSB8fCBjb25maWcuaW5pdGlhbE1pbiB8fCB0b2RheVN0cmluZyxcbiAgICAgIG1heDogbWF4RGF0ZSB8fCBjb25maWcuaW5pdGlhbE1heCB8fCB0b2RheVN0cmluZ1xuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRGF0ZVJhbmdlRmlsdGVyJztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgdGl0bGU6IHRoaXMuX3RpdGxlLFxuICAgICAgbWluTGFiZWw6IHRoaXMuX21pbkxhYmVsLFxuICAgICAgbWF4TGFiZWw6IHRoaXMuX21heExhYmVsLFxuICAgICAgZGF0ZU1pbjogdGhpcy5fZGF0ZS5taW4sXG4gICAgICBkYXRlTWF4OiB0aGlzLl9kYXRlLm1heFxuICAgIH0pKTtcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICBET00uZGVsZWdhdGUodGhpcy5fY29udGFpbmVyLCAnLmpzLXlleHQtZGF0ZScsICdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3VwZGF0ZVJhbmdlKGV2ZW50LnRhcmdldC5kYXRhc2V0LmtleSwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG1pbiBkYXRlIHRvIHRoZSBvbmUgcHJvdmlkZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGUgRGF0ZSB0byBzZXQgaW4geXl5eS1tbS1kZCBzdHJpbmcgZm9ybWF0XG4gICAqL1xuICBzZXRNaW4gKGRhdGUpIHtcbiAgICB0aGlzLl91cGRhdGVSYW5nZSgnbWluJywgZGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBtYXggZGF0ZSB0byB0aGUgb25lIHByb3ZpZGVkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlIERhdGUgdG8gc2V0IGluIHl5eXktbW0tZGQgc3RyaW5nIGZvcm1hdFxuICAgKi9cbiAgc2V0TWF4IChkYXRlKSB7XG4gICAgdGhpcy5fdXBkYXRlUmFuZ2UoJ21heCcsIGRhdGUpO1xuICB9XG5cbiAgZ2V0RmlsdGVyICgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBkYXRlIHJhbmdlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBmb3IgdGhlIGRhdGUgdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSBzdHJpbmcgZGF0ZSB2YWx1ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3VwZGF0ZVJhbmdlIChrZXksIHZhbHVlKSB7XG4gICAgdGhpcy5fZGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2RhdGUsIHsgW2tleV06IHZhbHVlIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoKTtcblxuICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuX2J1aWxkRmlsdGVyKCk7XG4gICAgaWYgKHRoaXMuX3N0b3JlT25DaGFuZ2UpIHtcbiAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBmaWx0ZXIpO1xuICAgIH1cbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke3RoaXMubmFtZX0ubWluYCwgdGhpcy5fZGF0ZS5taW4pO1xuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7dGhpcy5uYW1lfS5tYXhgLCB0aGlzLl9kYXRlLm1heCk7XG5cbiAgICB0aGlzLl9vbkNoYW5nZShmaWx0ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhbiBhcGkgZmlsdGVyIHdpdGggdGhlIGN1cnJlbnQgZGF0ZSBzdGF0ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2J1aWxkRmlsdGVyICgpIHtcbiAgICBpZiAodGhpcy5fZGF0ZS5taW4gPT09ICcnIHx8IHRoaXMuX2RhdGUubWF4ID09PSAnJykge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faXNFeGNsdXNpdmVcbiAgICAgID8gRmlsdGVyLmV4Y2x1c2l2ZVJhbmdlKHRoaXMuX2ZpZWxkLCB0aGlzLl9kYXRlLm1pbiwgdGhpcy5fZGF0ZS5tYXgpXG4gICAgICA6IEZpbHRlci5pbmNsdXNpdmVSYW5nZSh0aGlzLl9maWVsZCwgdGhpcy5fZGF0ZS5taW4sIHRoaXMuX2RhdGUubWF4KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRHluYW1pY0ZpbHRlcnNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbi8qKlxuICogRGlzcGxheXMgYSBzZXQgb2YgZHluYW1pYyBmaWx0ZXJzIHJldHVybmVkIGZyb20gdGhlIGJhY2tlbmRcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljRmlsdGVyc0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVydGljYWwga2V5IGZvciB0aGUgc2VhcmNoXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0cmlnZ2VyIGEgc2VhcmNoIG9uIGVhY2ggY2hhbmdlIHRvIGEgZmlsdGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zZWFyY2hPbkNoYW5nZSA9IGNvbmZpZy5zZWFyY2hPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RvciBvZiB0aGUgYXBwbHkgYnV0dG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwcGx5QnV0dG9uU2VsZWN0b3IgPSBjb25maWcuYXBwbHlCdXR0b25TZWxlY3RvciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbnRyb2xzIHRvIHVzZSBmb3IgZWFjaCBmaWVsZC4gRWFjaCB0eXBlIG9mIGZpbHRlciBoYXMgYSBkZWZhdWx0XG4gICAgICogJGVxIDogbXVsdGlvcHRpb24gKGNoZWNrYm94KVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5fZmllbGRDb250cm9scyA9IGNvbmZpZy5maWVsZENvbnRyb2xzIHx8IHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAnZmlsdGVycy9keW5hbWljJztcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSBmb3IgdGhlIGRhdGEgc3RvcmFnZSB0byBsaXN0ZW4gZm9yIHVwZGF0ZXMgZnJvbSB0aGUgc2VydmVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpbHRlciBib3ggdGhhdCBkaXNwbGF5cyB0aGUgZHluYW1pYyBmaWx0ZXJzXG4gICAgICogQHR5cGUge0ZpbHRlckJveENvbXBvbmVudH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlcmJveCA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRHluYW1pY0ZpbHRlcnMnO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgdGhpcy5jb3JlLmVuYWJsZUR5bmFtaWNGaWx0ZXJzKCk7XG5cbiAgICBpZiAodGhpcy5fZmlsdGVyYm94KSB7XG4gICAgICB0aGlzLl9maWx0ZXJib3gucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgbGV0IHsgZmlsdGVycyB9ID0gdGhpcy5fc3RhdGUuZ2V0KCk7XG5cbiAgICBpZiAoIWZpbHRlcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmaWx0ZXJzID0gZmlsdGVycy5tYXAoZiA9PiB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZiwge1xuICAgICAgICB0eXBlOiAnRmlsdGVyT3B0aW9ucycsXG4gICAgICAgIGNvbnRyb2w6IHRoaXMuX2ZpZWxkQ29udHJvbHNbZi5maWVsZElkXSB8fCAnbXVsdGlvcHRpb24nXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2ZpbHRlcmJveCA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoXG4gICAgICAnRmlsdGVyQm94JyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmZpbHRlcmJveGAsXG4gICAgICAgIGNvbnRhaW5lcjogJy5qcy15ZXh0LWR5bmFtaWMtZmlsdGVycycsXG4gICAgICAgIHNlYXJjaE9uQ2hhbmdlOiB0aGlzLl9zZWFyY2hPbkNoYW5nZSxcbiAgICAgICAgdmVydGljYWxLZXk6IHRoaXMuX3ZlcnRpY2FsS2V5LFxuICAgICAgICBpc0R5bmFtaWM6IHRydWUsXG4gICAgICAgIGZpbHRlcnNcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuX2ZpbHRlcmJveC5tb3VudCgpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBHZW9Mb2NhdGlvbkNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbmNvbnN0IE1FVEVSU19QRVJfTUlMRSA9IDE2MDkuMzQ0O1xuXG5jb25zdCBERUZBVUxUX0NPTkZJRyA9IHtcbiAgLyoqXG4gICAqIFRoZSByYWRpdXMsIGluIG1pbGVzLCBhcm91bmQgdGhlIHVzZXIncyBsb2NhdGlvbiB0byBmaW5kIHJlc3VsdHMuXG4gICAqIElmIGxvY2F0aW9uIGFjY3VyYWN5IGlzIGxvdywgYSBsYXJnZXIgcmFkaXVzIG1heSBiZSB1c2VkIGF1dG9tYXRpY2FsbHlcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHJhZGl1czogNTAsXG5cbiAgLyoqXG4gICAqIFRoZSB2ZXJ0aWNhbCBrZXkgdG8gdXNlXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICB2ZXJ0aWNhbEtleTogbnVsbCxcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgc3VibWl0cyBhIHNlYXJjaCB3aGVuIHRoZSB2YWx1ZSBpcyBjaGFuZ2VkXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgc2VhcmNoT25DaGFuZ2U6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBUaGUgdGl0bGUgdG8gZGlzcGxheVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdGl0bGU6ICdMb2NhdGlvbicsXG5cbiAgLyoqXG4gICAqIFRoZSBsYWJlbCB0byBkaXNwbGF5XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBsYWJlbDogJ0xvY2F0aW9uJyxcblxuICAvKipcbiAgICogVGhlIGljb24gdXJsIHRvIHNob3cgaW4gdGhlIGdlbyBidXR0b25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdlb0J1dHRvbkljb246ICcnLFxuXG4gIC8qKlxuICAgKiBUaGUgdGV4dCB0byBzaG93IGluIHRoZSBnZW8gYnV0dG9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZW9CdXR0b25UZXh0OiAnVXNlIE15IExvY2F0aW9uJyxcblxuICAvKipcbiAgICogVGhlIHRleHQgdG8gc2hvdyB3aGVuIGdlb2xvY2F0aW9uIGlzIGVuYWJsZWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGVuYWJsZWRUZXh0OiAnQ3VycmVudCBMb2NhdGlvbicsXG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IHRvIHNob3cgd2hlbiBsb2FkaW5nIHRoZSB1c2VyJ3MgbG9jYXRpb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGxvYWRpbmdUZXh0OiAnRmluZGluZyBZb3VyIExvY2F0aW9uLi4uJyxcblxuICAvKipcbiAgICogVGhlIHRleHQgdG8gc2hvdyBpZiB0aGUgdXNlcidzIGxvY2F0aW9uIGNhbm5vdCBiZSBmb3VuZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZXJyb3JUZXh0OiAnQ291bGQgTm90IEZpbmQgWW91ciBMb2NhdGlvbicsXG5cbiAgLyoqXG4gICAqIFRoZSBDU1Mgc2VsZWN0b3Igb2YgdGhlIHRvZ2dsZSBidXR0b25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGJ1dHRvblNlbGVjdG9yOiAnLmpzLXl4dC1HZW9Mb2NhdGlvbkZpbHRlci1idXR0b24nLFxuXG4gIC8qKlxuICAgKiBUaGUgQ1NTIHNlbGVjdG9yIG9mIHRoZSBxdWVyeSBpbnB1dFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgaW5wdXRTZWxlY3RvcjogJy5qcy15eHQtR2VvTG9jYXRpb25GaWx0ZXItaW5wdXQnXG59O1xuXG4vKipcbiAqIFJlbmRlcnMgYSBidXR0b24gdGhhdCB3aGVuIGNsaWNrZWQgYWRkcyBhIHN0YXRpYyBmaWx0ZXIgcmVwcmVzZW50aW5nIHRoZSB1c2VyJ3MgbG9jYXRpb25cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW9Mb2NhdGlvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKHsgLi4uREVGQVVMVF9DT05GSUcsIC4uLmNvbmZpZyB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSBzdHJpbmcgdG8gdXNlIGZvciB0aGUgaW5wdXQgYm94LCBwcm92aWRlZCB0byB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5xdWVyeSA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gKSB8fCAnJztcbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWAsIHEgPT4ge1xuICAgICAgdGhpcy5xdWVyeSA9IHE7XG4gICAgICB0aGlzLnNldFN0YXRlKCk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmlsdGVyIHRvIHVzZSBmb3IgdGhlIGN1cnJlbnQgcXVlcnlcbiAgICAgKiBAdHlwZSB7RmlsdGVyfVxuICAgICAqL1xuICAgIHRoaXMuZmlsdGVyID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke3RoaXMubmFtZX1gKSB8fCB7fTtcbiAgICBpZiAodHlwZW9mIHRoaXMuZmlsdGVyID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBKU09OLnBhcnNlKHRoaXMuZmlsdGVyKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuXG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCwgZiA9PiB7IHRoaXMuZmlsdGVyID0gZjsgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnR2VvTG9jYXRpb25GaWx0ZXInO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKCkge1xuICAgIHJldHVybiAnY29udHJvbHMvZ2VvbG9jYXRpb24nO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBsZXQgcGxhY2Vob2xkZXIgPSAnJztcbiAgICBpZiAodGhpcy5fZW5hYmxlZCkge1xuICAgICAgcGxhY2Vob2xkZXIgPSB0aGlzLl9jb25maWcuZW5hYmxlZFRleHQ7XG4gICAgfVxuICAgIGlmIChkYXRhLmdlb0xvYWRpbmcpIHtcbiAgICAgIHBsYWNlaG9sZGVyID0gdGhpcy5fY29uZmlnLmxvYWRpbmdUZXh0O1xuICAgIH1cbiAgICBpZiAoZGF0YS5nZW9FcnJvcikge1xuICAgICAgcGxhY2Vob2xkZXIgPSB0aGlzLl9jb25maWcuZXJyb3JUZXh0O1xuICAgIH1cbiAgICBzdXBlci5zZXRTdGF0ZSh7XG4gICAgICAuLi5kYXRhLFxuICAgICAgdGl0bGU6IHRoaXMuX2NvbmZpZy50aXRsZSxcbiAgICAgIGdlb0VuYWJsZWQ6IHRoaXMuX2VuYWJsZWQsXG4gICAgICBxdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgIGxhYmVsVGV4dDogdGhpcy5fY29uZmlnLmxhYmVsLFxuICAgICAgZW5hYmxlZFRleHQ6IHRoaXMuX2NvbmZpZy5lbmFibGVkVGV4dCxcbiAgICAgIGxvYWRpbmdUZXh0OiB0aGlzLl9jb25maWcubG9hZGluZ1RleHQsXG4gICAgICBlcnJvclRleHQ6IHRoaXMuX2NvbmZpZy5lcnJvclRleHQsXG4gICAgICBnZW9CdXR0b25JY29uOiB0aGlzLl9jb25maWcuZ2VvQnV0dG9uSWNvbixcbiAgICAgIGdlb1ZhbHVlOiB0aGlzLl9lbmFibGVkIHx8IGRhdGEuZ2VvTG9hZGluZyB8fCBkYXRhLmdlb0Vycm9yID8gJycgOiB0aGlzLnF1ZXJ5LFxuICAgICAgZ2VvUGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAgZ2VvQnV0dG9uVGV4dDogdGhpcy5fY29uZmlnLmdlb0J1dHRvblRleHRcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIGlmICh0aGlzLl9hdXRvY29tcGxldGUpIHtcbiAgICAgIHRoaXMuX2F1dG9jb21wbGV0ZS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9pbml0QXV0b0NvbXBsZXRlKHRoaXMuX2NvbmZpZy5pbnB1dFNlbGVjdG9yKTtcbiAgICBET00ub24odGhpcy5fY29uZmlnLmJ1dHRvblNlbGVjdG9yLCAnY2xpY2snLCAoKSA9PiB0aGlzLl90b2dnbGVHZW9GaWx0ZXIoKSk7XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHdpcmUgdXAgb3VyIGF1dG8gY29tcGxldGUgb24gYW4gaW5wdXQgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIGF1dG8gY29tcGxldGUgY29tcG9uZW50IHRvXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaW5pdEF1dG9Db21wbGV0ZSAoaW5wdXRTZWxlY3Rvcikge1xuICAgIGlmICh0aGlzLl9hdXRvY29tcGxldGUpIHtcbiAgICAgIHRoaXMuX2F1dG9jb21wbGV0ZS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9hdXRvY29tcGxldGUgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKCdBdXRvQ29tcGxldGUnLCB7XG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmF1dG9jb21wbGV0ZWAsXG4gICAgICBpc0ZpbHRlclNlYXJjaDogdHJ1ZSxcbiAgICAgIGNvbnRhaW5lcjogJy5qcy15eHQtR2VvTG9jYXRpb25GaWx0ZXItYXV0b2NvbXBsZXRlJyxcbiAgICAgIG9yaWdpbmFsUXVlcnk6IHRoaXMucXVlcnksXG4gICAgICBvcmlnaW5hbEZpbHRlcjogdGhpcy5maWx0ZXIsXG4gICAgICBpbnB1dEVsOiBpbnB1dFNlbGVjdG9yLFxuICAgICAgdmVydGljYWxLZXk6IHRoaXMuX3ZlcnRpY2FsS2V5LFxuICAgICAgb25TdWJtaXQ6IChxdWVyeSwgZmlsdGVyKSA9PiB7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBGaWx0ZXIuZnJvbVJlc3BvbnNlKGZpbHRlcik7XG4gICAgICAgIHRoaXMuX3NhdmVEYXRhVG9TdG9yYWdlKHF1ZXJ5LCB0aGlzLmZpbHRlcik7XG4gICAgICAgIHRoaXMuX2VuYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBzdGF0aWMgZmlsdGVyIHJlcHJlc2VudGluZyB0aGUgdXNlcidzIGxvY2F0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdG9nZ2xlR2VvRmlsdGVyICgpIHtcbiAgICBpZiAoIW5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdlb0Vycm9yOiB0cnVlIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fZW5hYmxlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdlb0xvYWRpbmc6IHRydWUgfSk7XG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxuICAgICAgICBwb3NpdGlvbiA9PiB7XG4gICAgICAgICAgdGhpcy5fc2F2ZURhdGFUb1N0b3JhZ2UoJycsIHRoaXMuX2J1aWxkRmlsdGVyKHBvc2l0aW9uKSk7XG4gICAgICAgICAgdGhpcy5fZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7fSk7XG4gICAgICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLmRlbGV0ZShgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCk7XG4gICAgICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLmRlbGV0ZShgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWApO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZ2VvRXJyb3I6IHRydWUgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNhdmVzIHRoZSBwcm92aWRlZCBmaWx0ZXIgdW5kZXIgdGhpcyBjb21wb25lbnQncyBuYW1lXG4gICAqIEBwYXJhbSB7RmlsdGVyfSBmaWx0ZXIgVGhlIGZpbHRlciB0byBzYXZlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2F2ZURhdGFUb1N0b3JhZ2UgKHF1ZXJ5LCBmaWx0ZXIpIHtcbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gLCBxdWVyeSk7XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWAsIGZpbHRlcik7XG4gICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGZpbHRlcik7XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnNlYXJjaE9uQ2hhbmdlKSB7XG4gICAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgICBsZXQgdG90YWxGaWx0ZXIgPSBmaWx0ZXJzWzBdO1xuICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoID4gMSkge1xuICAgICAgICB0b3RhbEZpbHRlciA9IEZpbHRlci5hbmQoLi4uZmlsdGVycyk7XG4gICAgICB9XG4gICAgICBjb25zdCBzZWFyY2hRdWVyeSA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKSB8fCAnJztcbiAgICAgIGNvbnN0IGZhY2V0RmlsdGVyID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZBQ0VUX0ZJTFRFUilbMF07XG5cbiAgICAgIHRoaXMuY29yZS52ZXJ0aWNhbFNlYXJjaCh0aGlzLl9jb25maWcudmVydGljYWxLZXksIHtcbiAgICAgICAgaW5wdXQ6IHNlYXJjaFF1ZXJ5LFxuICAgICAgICBmaWx0ZXI6IEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSxcbiAgICAgICAgZmFjZXRGaWx0ZXI6IEpTT04uc3RyaW5naWZ5KGZhY2V0RmlsdGVyKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGEgcG9zaXRpb24sIGNvbnN0cnVjdCBhIEZpbHRlciBvYmplY3RcbiAgICogQHBhcmFtIHtQb3N0aXRpb259IHBvc2l0aW9uIFRoZSBwb3NpdGlvblxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2J1aWxkRmlsdGVyIChwb3NpdGlvbikge1xuICAgIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSwgYWNjdXJhY3kgfSA9IHBvc2l0aW9uLmNvb3JkcztcbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1heChhY2N1cmFjeSwgdGhpcy5fY29uZmlnLnJhZGl1cyAqIE1FVEVSU19QRVJfTUlMRSk7XG4gICAgcmV0dXJuIEZpbHRlci5wb3NpdGlvbihsYXRpdHVkZSwgbG9uZ2l0dWRlLCByYWRpdXMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEaXJlY3RBbnN3ZXJDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuLyoqXG4gKiBFdmVudFR5cGVzIGFyZSBleHBsaWNpdCBzdHJpbmdzIGRlZmluZWRcbiAqIGZvciB3aGF0IHRoZSBzZXJ2ZXIgZXhwZWN0cyBmb3IgYW5hbHl0aWNzLlxuICpcbiAqIEBlbnVtXG4gKi9cbmNvbnN0IEV2ZW50VHlwZXMgPSB7XG4gIFRIVU1CU19VUDogJ1RIVU1CU19VUCcsXG4gIFRIVU1CU19ET1dOOiAnVEhVTUJTX0RPV04nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RBbnN3ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgLyoqXG4gICAgICogUmVjaWV2ZSB1cGRhdGVzIGZyb20gc3RvcmFnZSBiYXNlZCBvbiB0aGlzIGluZGV4XG4gICAgICogQHR5cGUge1N0b3JhZ2VLZXl9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZm9ybSB1c2VkIGZvciBzdWJtaXR0aW5nIHRoZSBmZWVkYmFja1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fZm9ybUVsID0gY29uZmlnLmZvcm1FbCB8fCAnLmpzLWRpcmVjdEFuc3dlci1mZWVkYmFjay1mb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBgdGh1bWJzIHVwYCBjc3Mgc2VsZWN0b3IgdG8gYmluZCB1aSBpbnRlcmFjdGlvbiB0byBmb3IgcmVwb3J0aW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90aHVtYnNVcFNlbGVjdG9yID0gY29uZmlnLnRodW1ic1VwU2VsZWN0b3IgfHwgJy5qcy1kaXJlY3RBbnN3ZXItdGh1bWJVcCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYHRodW1icyBkb3duYCBjc3Mgc2VsZWN0b3IgdG8gYmluZCB1aSBpbnRlcmFjdGlvbiB0byBmb3IgcmVwb3J0aW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90aHVtYnNEb3duU2VsZWN0b3IgPSBjb25maWcudGh1bWJzRG93blNlbGVjdG9yIHx8ICcuanMtZGlyZWN0QW5zd2VyLXRodW1iRG93bic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlzcGxheSB0ZXh0IGZvciB0aGUgVmlldyBEZXRhaWxzIGNsaWNrIHRvIGFjdGlvbiBsaW5rXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92aWV3RGV0YWlsc1RleHQgPSBjb25maWcudmlld0RldGFpbHNUZXh0IHx8ICdWaWV3IERldGFpbHMnO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0RpcmVjdEFuc3dlcic7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvZGlyZWN0YW5zd2VyJztcbiAgfVxuXG4gIC8qKlxuICAgKiBiZWZvcmVNb3VudCwgb25seSBkaXNwbGF5IHRoZSBkaXJlY3QgYW5zd2VyIGNvbXBvbmVudCBpZiBpdCBoYXMgZGF0YVxuICAgKi9cbiAgYmVmb3JlTW91bnQgKCkge1xuICAgIGlmICghdGhpcy5oYXNTdGF0ZSgnYW5zd2VyJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBET00gaXMgY29uc3RydWN0ZWQsXG4gICAqIHdlIHdhbnQgdG8gd2lyZSB1cCB0aGUgYmVoYXZpb3IgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIHF1YWxpdHkgZmVlZGJhY2sgcmVwb3J0aW5nICh0aHVtYnN1cC9kb3duKVxuICAgKi9cbiAgb25Nb3VudCAoKSB7XG4gICAgLy8gQXZvaWQgYmluZGluZ3MgaWYgdGhlIGZlZWRiYWNrIGhhcyBwcmV2aW91c2x5IGJlZW4gc3VibWl0dGVkXG4gICAgaWYgKHRoaXMuZ2V0U3RhdGUoJ2ZlZWRiYWNrU3VibWl0dGVkJykgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIEZvciBXQ0FHIGNvbXBsaWFuY2UsIHRoZSBmZWVkYmFjayBzaG91bGQgYmUgYSBzdWJtaXR0YWJsZSBmb3JtXG4gICAgRE9NLm9uKHRoaXMuX2Zvcm1FbCwgJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBsZXQgZm9ybUVsID0gZS50YXJnZXQ7XG4gICAgICBsZXQgY2hlY2tlZFZhbHVlID0gRE9NLnF1ZXJ5KGZvcm1FbCwgJ2lucHV0OmNoZWNrZWQnKS5jaGVja2VkO1xuXG4gICAgICB0aGlzLnJlcG9ydFF1YWxpdHkoY2hlY2tlZFZhbHVlKTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgICAnZmVlZGJhY2tTdWJtaXR0ZWQnOiB0cnVlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIElzIHRoaXMgYWN0dWFsbHkgbmVjZXNzYXJ5PyBJIGd1ZXNzIGl0J3Mgb25seSBuZWNlc3NhcnkgaWYgdGhlXG4gICAgLy8gc3VibWl0IGJ1dHRvbiBpcyBoaWRkZW4uXG4gICAgRE9NLm9uKHRoaXMuX3RodW1ic1VwU2VsZWN0b3IsICdjbGljaycsICgpID0+IHsgRE9NLnRyaWdnZXIodGhpcy5fZm9ybUVsLCAnc3VibWl0Jyk7IH0pO1xuICAgIERPTS5vbih0aGlzLl90aHVtYnNEb3duU2VsZWN0b3IsICdjbGljaycsICgpID0+IHsgRE9NLnRyaWdnZXIodGhpcy5fZm9ybUVsLCAnc3VibWl0Jyk7IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHVwZGF0ZVN0YXRlIGVuYWJsZXMgZm9yIHBhcnRpYWwgdXBkYXRlcyAodGhlIGRlbHRhIGJldHdlZW4gdGhlIG9sZCBhbmQgbmV3KVxuICAgKiBAdHlwZSB7b2JqZWN0fSBUaGUgbmV3IHN0YXRlIHRvIGFwcGx5IHRvIHRoZSBvbGRcbiAgICovXG4gIHVwZGF0ZVN0YXRlIChzdGF0ZSA9IHt9KSB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmdldFN0YXRlKCksIHN0YXRlKTtcbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIGV2ZW50T3B0aW9uczogdGhpcy5ldmVudE9wdGlvbnMoZGF0YSksXG4gICAgICB2aWV3RGV0YWlsc1RleHQ6IHRoaXMuX3ZpZXdEZXRhaWxzVGV4dFxuICAgIH0pKTtcbiAgfVxuXG4gIGV2ZW50T3B0aW9ucyAoZGF0YSkge1xuICAgIGlmICghZGF0YSB8fCBPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdmVydGljYWxDb25maWdJZDogZGF0YS5yZWxhdGVkSXRlbS52ZXJ0aWNhbENvbmZpZ0lkLFxuICAgICAgc2VhcmNoZXI6ICdVTklWRVJTQUwnLFxuICAgICAgZW50aXR5SWQ6IGRhdGEucmVsYXRlZEl0ZW0uZGF0YS5pZCxcbiAgICAgIGN0YUxhYmVsOiB0aGlzLl92aWV3RGV0YWlsc1RleHQudG9VcHBlckNhc2UoKS5yZXBsYWNlKCcgJywgJ18nKVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcG9ydFF1YWxpdHkgd2lsbCBzZW5kIHRoZSBxdWFsaXR5IGZlZWRiYWNrIHRvIGFuYWx5dGljc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzR29vZCB0cnVlIGlmIHRoZSBhbnN3ZXIgaXMgd2hhdCB5b3Ugd2VyZSBsb29raW5nIGZvclxuICAgKi9cbiAgcmVwb3J0UXVhbGl0eSAoaXNHb29kKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gaXNHb29kID09PSB0cnVlID8gRXZlbnRUeXBlcy5USFVNQlNfVVAgOiBFdmVudFR5cGVzLlRIVU1CU19ET1dOO1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEFuYWx5dGljc0V2ZW50KGV2ZW50VHlwZSlcbiAgICAgIC5hZGRPcHRpb25zKHtcbiAgICAgICAgJ2RpcmVjdEFuc3dlcic6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlci5yZXBvcnQoZXZlbnQpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBSZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogdmVydGljYWxDb25maWdJZCB1c2VkIGZvciBhbmFseXRpY3MgYW5kIHBhc3NlZCB0byBjaGlsZHJlblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbENvbmZpZ0lkID0gb3B0cy52ZXJ0aWNhbENvbmZpZ0lkO1xuXG4gICAgLyoqXG4gICAgICogaXNVbml2ZXJzYWwgaXMgdXNlZCBmb3IgYW5hbHl0aWNzIGFuZCBwYXNzZWQgdG8gY2hpbGRyZW4gYW5kIGlzIHNldCB0b1xuICAgICAqIHRydWUgaWYgdGhpcyBjb21wb25lbnQgaXMgYWRkZWQgYnkgdGhlIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2lzVW5pdmVyc2FsID0gb3B0cy5pc1VuaXZlcnNhbCB8fCBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdSZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvcmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogaGVscGVyIHRvIGNvbnN0cnVjdCB0aGUgZXZlbnRPcHRpb25zIG9iamVjdCBmb3IgdGhlIHRpdGxlIGxpbmtcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGV2ZW50T3B0aW9ucyAoZW50aXR5SWQpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdmVydGljYWxDb25maWdJZDogdGhpcy5fdmVydGljYWxDb25maWdJZCxcbiAgICAgIHNlYXJjaGVyOiB0aGlzLl9pc1VuaXZlcnNhbCA/ICdVTklWRVJTQUwnIDogJ1ZFUlRJQ0FMJyxcbiAgICAgIGVudGl0eUlkOiBlbnRpdHlJZFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHBhc3NlcyBldmVudE9wdGlvbnMgdG8gdGhlIHZpZXdNb2RlbFxuICAgKiBAb3ZlcnJpZGVcbiAgICogQHBhcmFtIGRhdGFcbiAgICogQHJldHVybnMge1Jlc3VsdHNJdGVtQ29tcG9uZW50fVxuICAgKi9cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICBldmVudE9wdGlvbnM6IHRoaXMuZXZlbnRPcHRpb25zKGRhdGEuaWQpXG4gICAgfSkpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50ICovXG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNJdGVtQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0xvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL2xvY2F0aW9ucmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvZXZlbnRyZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNJdGVtQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1Blb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9wZW9wbGVyZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTWFwUHJvdmlkZXIgKi9cblxuLyoqXG4gKiBBIE1hcFByb3ZpZGVyIGlzIGFuIGludGVyZmFjZSB0aGF0IHJlcHJlc2VudHMgdGhhdCBzaG91bGQgYmUgaW1wbGVtZW50ZWRcbiAqIGluIG9yZGVyIHRvIGludGVncmF0ZSB3aXRoIGEgVGhpcmQgUGFydHkgTWFwIHByb3ZpZGVyIGZvciBib3RoXG4gKiBzdGF0aWMgYW5kIGludGVyYWN0aXZlIG1hcHMuIE1hcFByb3ZpZGVycyBhcmUgdXNlZCBieSB0aGUgTWFwQ29tcG9uZW50LlxuICpcbiAqIEltcGxlbWVudGF0aW9ucyBzaG91bGQgZXh0ZW5kIHRoaXMgaW50ZXJmYWNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHVzZWQgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIG1hcCBwcm92aWRlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYXBpS2V5ID0gY29uZmlnLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIG1hcCB0byBhcHBlbmQgdG8gdGhlIERPTSwgZGVmYXVsdHMgdG8gMTAwJVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5faGVpZ2h0ID0gY29uZmlnLmhlaWdodCB8fCAyMDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgdGhlIG1hcCB0byBhcHBlbmQgdG8gdGhlIERPTSwgZGVmYXVsdHMgdG8gMTAwJVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fd2lkdGggPSBjb25maWcud2lkdGggfHwgNjAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHpvb20gbGV2ZWwgb2YgdGhlIG1hcCwgZGVmYXVsdHMgdG8gOVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fem9vbSA9IGNvbmZpZy56b29tIHx8IDk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBjb29yZGluYXRlcyB0byBkaXNwbGF5IGlmIHRoZXJlIGFyZSBubyByZXN1bHRzIHJldHVybmVkXG4gICAgICogT25seSB1c2VkIGlmIHNob3dFbXB0eU1hcCBpcyBzZXQgdG8gdHJ1ZVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5fZGVmYXVsdFBvc2l0aW9uID0gY29uZmlnLmRlZmF1bHRQb3NpdGlvbiB8fCB7IGxhdDogMzcuMDkwMiwgbG5nOiAtOTUuNzEyOSB9O1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiBhbiBlbXB0eSBtYXAgc2hvdWxkIGJlIHNob3duIHdoZW4gdGhlcmUgYXJlIG5vIHJlc3VsdHNcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9zaG93RW1wdHlNYXAgPSBjb25maWcuc2hvd0VtcHR5TWFwIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIHVuZGVybHlpbmcgbWFwIGluc3RhbmNlLCBjcmVhdGVkIGJ5IHRoZSBleHRlcm5hbCBsaWIuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9tYXAgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGVtcG9yYXJ5IGJvb2xlYW4gdHJhY2tpbmcgd2hldGhlciBvciBub3QgdGhlIGV4dGVybmFsIEpTIGxpYnJhcnkgaXMgbG9hZGVkIChzZWUgVE9ETyBiZWxvdylcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9pc0xvYWRlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gYSBwaW4gaXMgY2xpY2tlZC4gVGhlIGNsaWNrZWQgaXRlbShzKSBhcmUgcGFzc2VkIHRvIHRoZSBjYWxsYmFja1xuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLl9vblBpbkNsaWNrID0gY29uZmlnLm9uUGluQ2xpY2sgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSBvbmNlIHRoZSBKYXZhc2NyaXB0IGlzIGxvYWRlZFxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLl9vbkxvYWRlZCA9IGNvbmZpZy5vbkxvYWRlZCB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXN0b20gY29uZmlndXJhdGlvbiBvdmVycmlkZSB0byB1c2UgZm9yIHRoZSBtYXAgbWFya2Vyc1xuICAgICAqIEB0eXBlIHtPYmplY3R8RnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5fcGluQ29uZmlnID0gdHlwZW9mIGNvbmZpZy5waW4gPT09ICdmdW5jdGlvbicgPyBjb25maWcucGluIDogT2JqZWN0LmFzc2lnbihNYXBQcm92aWRlci5ERUZBVUxUX1BJTl9DT05GSUcsIGNvbmZpZy5waW4pO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0byBjb2xsYXBzZSBwaW5zIGF0IHRoZSBzYW1lIGxhdC9sbmdcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9jb2xsYXBzZVBpbnMgPSBjb25maWcuY29sbGFwc2VQaW5zIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gdG8gdXNlIGZvciB0aGUgbWFwIG1hcmtlcnNcbiAgICogQHR5cGUge09iamVjdH1cbiAgICogVE9ETyhiaWxseSkgQ3JlYXRlIGEgY29uZmlndXJhdGlvbiBtb2RlbFxuICAgKi9cbiAgc3RhdGljIGdldCBERUZBVUxUX1BJTl9DT05GSUcgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpY29uOiB7XG4gICAgICAgIGFuY2hvcjogbnVsbCwgLy8gZS5nLiB7IHg6IDEsIHk6IDEgfVxuICAgICAgICBzdmc6IG51bGwsXG4gICAgICAgIHVybDogbnVsbCxcbiAgICAgICAgc2NhbGVkU2l6ZTogbnVsbCAvLyBlLmcuIHsgdzogMjAsIGg6IDIwIH1cbiAgICAgIH0sXG4gICAgICBsYWJlbFR5cGU6ICdudW1lcmljJ1xuICAgIH07XG4gIH1cblxuICBvbkxvYWRlZCAoY2IpIHtcbiAgICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fb25Mb2FkZWQgPSBjYjtcbiAgICBpZiAodGhpcy5pc0xvYWRlZCgpKSB7XG4gICAgICB0aGlzLl9vbkxvYWRlZCgpO1xuICAgIH1cbiAgfVxuXG4gIGlzTG9hZGVkICgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNMb2FkZWQ7XG4gIH1cblxuICBsb2FkSlMgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCBNZXRob2Q6IGxvYWRKUycpO1xuICB9XG5cbiAgbG9hZFN0YXRpYyAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmltcGxlbWVudGVkIE1ldGhvZDogbG9hZFN0YXRpYycpO1xuICB9XG5cbiAgaW5pdCAobWFwRGF0YSkge1xuICAgIC8vIFRPRE8oYmlsbHkpIFRoaXMgc2hvdWxkIGJlIGJhc2VkIG9mZiBhIHByb21pc2UgdGhhdCBnZXRzIGNyZWF0ZWQgZnJvbSBsb2FkSlNcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaW1wbGVtZW50ZWQgTWV0aG9kOiBpbml0Jyk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYSBsaXN0IG9mIG1hcmtlcnMsIGNvbWJpbmUgbWFya2VycyB3aXRoIHRoZSBzYW1lIGxhdC9sbmcgaW50byBhIHNpbmdsZSBtYXJrZXJcbiAgICogQHBhcmFtIHtvYmplY3RbXX0gbWFya2VycyBUaGUgbWFya2VycyB0byBjb2xsYXBzZVxuICAgKi9cbiAgX2NvbGxhcHNlTWFya2VycyAobWFya2Vycykge1xuICAgIGNvbnN0IGxvY2F0aW9uVG9JdGVtID0ge307XG4gICAgbWFya2Vycy5mb3JFYWNoKG0gPT4ge1xuICAgICAgbG9jYXRpb25Ub0l0ZW1bYCR7bS5sYXRpdHVkZX0ke20ubG9uZ2l0dWRlfWBdXG4gICAgICAgID8gbG9jYXRpb25Ub0l0ZW1bYCR7bS5sYXRpdHVkZX0ke20ubG9uZ2l0dWRlfWBdLnB1c2gobSlcbiAgICAgICAgOiBsb2NhdGlvblRvSXRlbVtgJHttLmxhdGl0dWRlfSR7bS5sb25naXR1ZGV9YF0gPSBbbV07XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb2xsYXBzZWRNYXJrZXJzID0gW107XG4gICAgZm9yIChsZXQgWywgbWFya2Vyc10gb2YgT2JqZWN0LmVudHJpZXMobG9jYXRpb25Ub0l0ZW0pKSB7XG4gICAgICBpZiAobWFya2Vycy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlZE1hcmtlciA9IHtcbiAgICAgICAgICBpdGVtOiBtYXJrZXJzLm1hcChtID0+IG0uaXRlbSksXG4gICAgICAgICAgbGFiZWw6IG1hcmtlcnMubGVuZ3RoLFxuICAgICAgICAgIGxhdGl0dWRlOiBtYXJrZXJzWzBdLmxhdGl0dWRlLFxuICAgICAgICAgIGxvbmdpdHVkZTogbWFya2Vyc1swXS5sb25naXR1ZGVcbiAgICAgICAgfTtcbiAgICAgICAgY29sbGFwc2VkTWFya2Vycy5wdXNoKGNvbGxhcHNlZE1hcmtlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsYXBzZWRNYXJrZXJzLnB1c2gobWFya2Vyc1swXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbGxhcHNlZE1hcmtlcnM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEdvb2dsZU1hcFByb3ZpZGVyICovXG5cbmltcG9ydCBNYXBQcm92aWRlciBmcm9tICcuL21hcHByb3ZpZGVyJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vLi4vZG9tL2RvbSc7XG5cbi8qIGdsb2JhbCBnb29nbGUgKi9cblxuLyoqXG4gKiBHb29nbGVNYXBQcm92aWRlciBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiBhIE1hcFByb3ZpZGVyXG4gKiB0aGF0IGhhbmRsZXMgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIHRoaXJkIHBhcnR5IEFQSSB0byBleHBvc2UgbWFwcy5cbiAqIEBleHRlbmRzIE1hcFByb3ZpZGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvb2dsZU1hcFByb3ZpZGVyIGV4dGVuZHMgTWFwUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5fY2xpZW50SWQgPSBvcHRzLmNsaWVudElkO1xuICAgIHRoaXMuX3NpZ25hdHVyZSA9IG9wdHMuc2lnbmF0dXJlO1xuXG4gICAgaWYgKCF0aGlzLmhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMoKSAmJiAhdGhpcy5fYXBpS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dvb2dsZU1hcHNQcm92aWRlcjogTWlzc2luZyBgYXBpS2V5YCBvciB7YGNsaWVudElkYCwgYHNpZ25hdHVyZWB9Jyk7XG4gICAgfVxuICB9XG5cbiAgbG9hZEpTIChvbkxvYWQpIHtcbiAgICBpZiAoRE9NLnF1ZXJ5KCcjeWV4dC1tYXAtanMnKSkge1xuICAgICAgaWYgKHR5cGVvZiBvbkxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb25Mb2FkKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHNjcmlwdCA9IERPTS5jcmVhdGVFbCgnc2NyaXB0Jywge1xuICAgICAgaWQ6ICd5ZXh0LW1hcC1qcycsXG4gICAgICBvbmxvYWQ6ICgpID0+IHtcbiAgICAgICAgdGhpcy5faXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9vbkxvYWRlZCgpO1xuICAgICAgfSxcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgc3JjOiBgLy9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzPyR7dGhpcy5nZW5lcmF0ZUNyZWRlbnRpYWxzKCl9YFxuICAgIH0pO1xuXG4gICAgRE9NLmFwcGVuZCgnYm9keScsIHNjcmlwdCk7XG4gIH1cblxuICBnZW5lcmF0ZVN0YXRpYyAobWFwRGF0YSkge1xuICAgIGxldCBnb29nbGVNYXBNYXJrZXJDb25maWdzID0gR29vZ2xlTWFwTWFya2VyQ29uZmlnLmZyb20oXG4gICAgICBtYXBEYXRhLm1hcE1hcmtlcnMsXG4gICAgICB0aGlzLl9waW5Db25maWdcbiAgICApO1xuXG4gICAgbGV0IGVuY29kZWRNYXJrZXJzID0gR29vZ2xlTWFwTWFya2VyQ29uZmlnLnNlcmlhbGl6ZShnb29nbGVNYXBNYXJrZXJDb25maWdzKTtcbiAgICByZXR1cm4gYFxuICAgICAgPGltZyBzcmM9XCIvL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvc3RhdGljbWFwPyR7ZW5jb2RlZE1hcmtlcnN9JnNpemU9JHt0aGlzLl93aWR0aH14JHt0aGlzLl9oZWlnaHR9JiR7dGhpcy5nZW5lcmF0ZUNyZWRlbnRpYWxzKCl9XCI+YDtcbiAgfVxuXG4gIGdlbmVyYXRlQ3JlZGVudGlhbHMgKCkge1xuICAgIGlmICh0aGlzLmhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMoKSkge1xuICAgICAgcmV0dXJuIGBjbGllbnQ9JHt0aGlzLl9jbGllbnRJZH1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYGtleT0ke3RoaXMuX2FwaUtleX1gO1xuICAgIH1cbiAgfVxuXG4gIGhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMgKCkge1xuICAgIC8vIFNpZ25hdHVyZSBpcyBvbmx5IHJlcXVpcmVkIGlmIG1hcCBpcyBzdGF0aWNcbiAgICByZXR1cm4gdGhpcy5fY2xpZW50SWQgJiYgKHRoaXMuX3NpZ25hdHVyZSB8fCAhdGhpcy5faXNTdGF0aWMpO1xuICB9XG5cbiAgaW5pdCAoZWwsIG1hcERhdGEpIHtcbiAgICBpZiAoKCFtYXBEYXRhIHx8IG1hcERhdGEubWFwTWFya2Vycy5sZW5ndGggPD0gMCkgJiYgIXRoaXMuX3Nob3dFbXB0eU1hcCkge1xuICAgICAgdGhpcy5fbWFwID0gbnVsbDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvLyBOT1RFKGJpbGx5KSBUaGlzIHRpbWVvdXQgaXMgYSBoYWNrIGZvciBkZWFsaW5nIHdpdGggYXN5bmMgbmF0dXJlLlxuICAgIC8vIE9ubHkgaGVyZSBmb3IgZGVtbyBwdXJwb3Nlcywgc28gd2UnbGwgZml4IGxhdGVyLlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0IGNvbnRhaW5lciA9IERPTS5xdWVyeShlbCk7XG4gICAgICBET00uY3NzKGNvbnRhaW5lciwge1xuICAgICAgICB3aWR0aDogdGhpcy5fd2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5faGVpZ2h0XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGNvbnRhaW5lciwge1xuICAgICAgICB6b29tOiB0aGlzLl96b29tXG4gICAgICB9KTtcblxuICAgICAgLy8gQXBwbHkgb3VyIHNlYXJjaCBkYXRhIHRvIG91ciBHb29nbGVNYXBcbiAgICAgIGxldCBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG5cbiAgICAgIGlmIChtYXBEYXRhICYmIG1hcERhdGEubWFwTWFya2Vycy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2VkTWFya2VycyA9IHRoaXMuX2NvbGxhcHNlUGluc1xuICAgICAgICAgID8gdGhpcy5fY29sbGFwc2VNYXJrZXJzKG1hcERhdGEubWFwTWFya2VycylcbiAgICAgICAgICA6IG1hcERhdGEubWFwTWFya2VycztcbiAgICAgICAgbGV0IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MgPSBHb29nbGVNYXBNYXJrZXJDb25maWcuZnJvbShcbiAgICAgICAgICBjb2xsYXBzZWRNYXJrZXJzLFxuICAgICAgICAgIHRoaXMuX3BpbkNvbmZpZyxcbiAgICAgICAgICB0aGlzLm1hcCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnb29nbGVNYXBNYXJrZXJDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoZ29vZ2xlTWFwTWFya2VyQ29uZmlnc1tpXSk7XG4gICAgICAgICAgaWYgKHRoaXMuX29uUGluQ2xpY2spIHtcbiAgICAgICAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9vblBpbkNsaWNrKGNvbGxhcHNlZE1hcmtlcnNbaV0uaXRlbSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib3VuZHMuZXh0ZW5kKG1hcmtlci5wb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1hcC5maXRCb3VuZHMoYm91bmRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWFwLnNldENlbnRlcihuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHRoaXMuX2RlZmF1bHRQb3NpdGlvbi5sYXQsIHRoaXMuX2RlZmF1bHRQb3NpdGlvbi5sbmcpKTtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuICB9XG59XG5cbi8vIFRPRE8oYmlsbHkpIE1vdmUgdG8gb3duIGNsYXNzXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwTWFya2VyQ29uZmlnIHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgZ29vZ2xlIG1hcCwgdGhhdCB0aGUgbWFya2VyIGlzIGFwcGVuZGVkIHRvXG4gICAgICogQHR5cGUge0dvb2dsZU1hcH1cbiAgICAgKi9cbiAgICB0aGlzLm1hcCA9IG9wdHMubWFwIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb29yZGluYXRlcyBvZiB0aGUgbWFya2VyIChsYXQvbG5nKVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5wb3NpdGlvbiA9IG9wdHMucG9zaXRpb24gfHwge1xuICAgICAgbGF0OiB1bmRlZmluZWQsXG4gICAgICBsbmc6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcHJvcGVydGllcy9zZXR0aW5ncyBvZiB0aGUgaWNvbiB1c2VkIGZvciB0aGUgbWFya2VyXG4gICAgICogZS5nLiB7XG4gICAgICogICAgICAgIGFuY2hvcjogeyB4OiAwLCB5OiAwIH1cbiAgICAgKiAgICAgICAgdXJsOiAncGF0aC90by91cmwuanBnJ1xuICAgICAqICAgICAgICBzY2FsZWRTaXplOiB7IHc6IDAsIGg6IDAgfVxuICAgICAqICAgICAgIH1cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5pY29uID0gb3B0cy5pY29uIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCBvZiB0aGUgbWFya2VyIHRvIHVzZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbCA9IG9wdHMubGFiZWwgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYW4gYXJyYXkgb2YgbWFya2VyIGNvbmZpZ3NcbiAgICogQHBhcmFtIHtHb29nbGVNYXBNYXJrZXJDb25maWdbXX0gZ29vZ2xlTWFwTWFya2VyQ29uZmlnc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplIChnb29nbGVNYXBNYXJrZXJDb25maWdzKSB7XG4gICAgbGV0IHNlcmlhbGl6ZWRNYXJrZXJzID0gW107XG4gICAgZ29vZ2xlTWFwTWFya2VyQ29uZmlncy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIHNlcmlhbGl6ZWRNYXJrZXJzLnB1c2goYG1hcmtlcnM9bGFiZWw6JHttYXJrZXIubGFiZWx9fCR7bWFya2VyLnBvc2l0aW9uLmxhdH0sJHttYXJrZXIucG9zaXRpb24ubG5nfWApO1xuICAgIH0pO1xuICAgIHJldHVybiBzZXJpYWxpemVkTWFya2Vycy5qb2luKCcmJyk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIHN0b3JhZ2UgZGF0YSBtb2RlbCBvZiBtYXJrZXJzIGludG8gR29vZ2xlQVBJTWFya2VyXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IG1hcmtlcnMgVGhlIGRhdGEgb2YgdGhlIG1hcmtlclxuICAgKiBAcGFyYW0geyhPYmplY3R8ZnVuY3Rpb24pfSBwaW5Db25maWcgVGhlIGNvbmZpZ3VyYXRpb24gdG8gYXBwbHkgdG8gdGhlIG1hcmtlclxuICAgKiBAcGFyYW0ge0dvb2dsZU1hcH0gbWFwIHJlZmVyZW5jZSB0byB0aGUgZ29vZ2xlIG1hcCB0byBhcHBseSB0aGUgbWFya2VyIHRvXG4gICAqIEByZXR1cm5zIHtHb29nbGVNYXBNYXJrZXJDb25maWdbXX1cbiAgICovXG4gIHN0YXRpYyBmcm9tIChtYXJrZXJzLCBwaW5Db25maWcsIG1hcCkge1xuICAgIGxldCBnb29nbGVNYXBNYXJrZXJDb25maWdzID0gW107XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1hcmtlcnMpKSB7XG4gICAgICBtYXJrZXJzID0gW21hcmtlcnNdO1xuICAgIH1cblxuICAgIG1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICAvLyBTdXBwb3J0IGNvbmZpZ3VyYXRpb24gYXMgYSBmdW5jdGlvblxuICAgICAgbGV0IHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZztcbiAgICAgIGlmICh0eXBlb2YgcGluQ29uZmlnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZyhcbiAgICAgICAgICBtYXJrZXIuaXRlbSxcbiAgICAgICAgICBNYXBQcm92aWRlci5ERUZBVUxUX1BJTl9DT05GSUcsXG4gICAgICAgICAgbWFya2VyKTtcbiAgICAgIH1cblxuICAgICAgLy8gVHJhbnNmb3JtIG91ciBDb25maWd1cmF0aW9uIE9iamVjdCBpbnRvIHRoZSBleHBlY3RlZFxuICAgICAgLy8gR29vZ2xlIEFQSSBmb3JtYXQuXG4gICAgICBsZXQgaWNvbiA9IHt9O1xuICAgICAgaWYgKHBpbkNvbmZpZ09iai5hbmNob3IpIHtcbiAgICAgICAgaWNvbi5hbmNob3IgPSBnb29nbGUubWFwcy5Qb2ludChwaW5Db25maWdPYmouYW5jaG9yLngsIHBpbkNvbmZpZ09iai5hbmNob3IueSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW5Db25maWdPYmouc2NhbGVkU2l6ZSkge1xuICAgICAgICBpY29uLnNjYWxlZFNpemUgPSBuZXcgZ29vZ2xlLm1hcHMuU2l6ZShwaW5Db25maWdPYmouc2NhbGVkU2l6ZS53LCBwaW5Db25maWdPYmouc2NhbGVkU2l6ZS5oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpbkNvbmZpZ09iai51cmwpIHtcbiAgICAgICAgaWNvbi51cmwgPSBwaW5Db25maWdPYmoudXJsO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluQ29uZmlnT2JqLnN2Zykge1xuICAgICAgICBpY29uLnVybCA9IGBkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwgJHtlbmNvZGVVUklDb21wb25lbnQocGluQ29uZmlnT2JqLnN2Zyl9YDtcbiAgICAgIH1cblxuICAgICAgbGV0IGxhYmVsO1xuICAgICAgaWYgKHBpbkNvbmZpZ09iai5sYWJlbCkge1xuICAgICAgICBsYWJlbCA9IHBpbkNvbmZpZ09iai5sYWJlbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhYmVsID0gbWFya2VyLmxhYmVsLnRvU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIE5PVEUoYmlsbHkpIEdvb2dsZSBtYXBzIGRvZXNuJ3QgaGFuZGxlIGVtcHR5IGljb24gb2JqZWN0cyBuaWNlbHlcbiAgICAgIC8vIE1ha2UgZ29vZ2xlIG1hcHMgaGFwcHkgaWYgbm8gc2V0dGluZ3MgZm9yIGljb24gYXJlIHByb3ZpZGVkO1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGljb24pLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpY29uID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBnb29nbGVNYXBNYXJrZXJDb25maWdzLnB1c2goXG4gICAgICAgIG5ldyBHb29nbGVNYXBNYXJrZXJDb25maWcoe1xuICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICBsYXQ6IG1hcmtlci5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxuZzogbWFya2VyLmxvbmdpdHVkZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaWNvbjogaWNvbixcbiAgICAgICAgICBsYWJlbDogbGFiZWxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZ29vZ2xlTWFwTWFya2VyQ29uZmlncztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTWFwQm94TWFwUHJvdmlkZXIgKi9cblxuaW1wb3J0IE1hcFByb3ZpZGVyIGZyb20gJy4vbWFwcHJvdmlkZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi8uLi9kb20vZG9tJztcblxuLyogZ2xvYmFsIG1hcGJveGdsICovXG5cbi8qKlxuICogTWFwQm94TWFwUHJvdmlkZXIgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgYSBNYXBQcm92aWRlclxuICogdGhhdCBoYW5kbGVzIHRoZSBpbnRlZ3JhdGlvbiB3aXRoIHRoZSB0aGlyZCBwYXJ0eSBBUEkgdG8gZXhwb3NlIG1hcHMuXG4gKiBAZXh0ZW5kcyBNYXBQcm92aWRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBCb3hNYXBQcm92aWRlciBleHRlbmRzIE1hcFByb3ZpZGVyIHtcbiAgLyoqXG4gICAqIExvYWQgdGhlIGV4dGVybmFsIEpTIExpYnJhcnlcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25Mb2FkIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRvIGludm9rZSBvbmNlIHRoZSBKUyBpcyBsb2FkZWQuXG4gICAqL1xuICBsb2FkSlMgKG9uTG9hZCkge1xuICAgIGxldCBzY3JpcHQgPSBET00uY3JlYXRlRWwoJ3NjcmlwdCcsIHtcbiAgICAgIGlkOiAneWV4dC1tYXAtanMnLFxuICAgICAgb25sb2FkOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgbWFwYm94Z2wuYWNjZXNzVG9rZW4gPSB0aGlzLl9hcGlLZXk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvbkxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBvbkxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fb25Mb2FkZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLl9vbkxvYWRlZCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzcmM6ICdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MC40NC4xL21hcGJveC1nbC5qcydcbiAgICB9KTtcblxuICAgIGxldCBjc3MgPSBET00uY3JlYXRlRWwoJ2xpbmsnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWNzcycsXG4gICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgIGhyZWY6ICdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MC40NC4xL21hcGJveC1nbC5jc3MnXG4gICAgfSk7XG5cbiAgICBET00uYXBwZW5kKCdib2R5JywgY3NzKTtcbiAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgfVxuXG4gIGdlbmVyYXRlU3RhdGljIChtYXBEYXRhKSB7XG4gICAgbGV0IG1hcGJveE1hcE1hcmtlckNvbmZpZ3MgPSBNYXBCb3hNYXJrZXJDb25maWcuZnJvbShcbiAgICAgIG1hcERhdGEubWFwTWFya2VycyxcbiAgICAgIHRoaXMuX3BpbkNvbmZpZ1xuICAgICk7XG5cbiAgICBsZXQgY2VudGVyID0gbWFwRGF0YS5tYXBDZW50ZXI7XG4gICAgbGV0IHdpZHRoID0gdGhpcy5fd2lkdGggfHwgNjAwO1xuICAgIGxldCBoZWlnaHQgPSB0aGlzLl9oZWlnaHQgfHwgMjAwO1xuICAgIGxldCB6b29tID0gdGhpcy5fem9vbSB8fCA5O1xuXG4gICAgbGV0IGVuY29kZWRNYXJrZXJzID0gTWFwQm94TWFya2VyQ29uZmlnLnNlcmlhbGl6ZShtYXBib3hNYXBNYXJrZXJDb25maWdzKTtcbiAgICByZXR1cm4gYDxpbWcgc3JjPVwiaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9zdHlsZXMvdjEvbWFwYm94L3N0cmVldHMtdjExL3N0YXRpYy8ke2VuY29kZWRNYXJrZXJzfS8ke2NlbnRlci5sb25naXR1ZGV9LCR7Y2VudGVyLmxhdGl0dWRlfSwke3pvb219L2F1dG8vJHt3aWR0aH14JHtoZWlnaHR9P2FjY2Vzc190b2tlbj0ke3RoaXMuX2FwaUtleX1cIj5gO1xuICB9XG5cbiAgaW5pdCAoZWwsIG1hcERhdGEpIHtcbiAgICBpZiAoKCFtYXBEYXRhIHx8IG1hcERhdGEubWFwTWFya2Vycy5sZW5ndGggPD0gMCkgJiYgIXRoaXMuX3Nob3dFbXB0eU1hcCkge1xuICAgICAgdGhpcy5fbWFwID0gbnVsbDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGxldCBjb250YWluZXIgPSBET00ucXVlcnkoZWwpO1xuICAgIERPTS5jc3MoY29udGFpbmVyLCB7XG4gICAgICB3aWR0aDogdGhpcy5fd2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuX2hlaWdodFxuICAgIH0pO1xuXG4gICAgdGhpcy5fbWFwID0gbmV3IG1hcGJveGdsLk1hcCh7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgIHpvb206IHRoaXMuX3pvb20sXG4gICAgICBzdHlsZTogJ21hcGJveDovL3N0eWxlcy9tYXBib3gvc3RyZWV0cy12OScsXG4gICAgICBjZW50ZXI6IHRoaXMuZ2V0Q2VudGVyTWFya2VyKG1hcERhdGEpXG4gICAgfSk7XG5cbiAgICBpZiAobWFwRGF0YSkge1xuICAgICAgY29uc3QgY29sbGFwc2VkTWFya2VycyA9IHRoaXMuX2NvbGxhcHNlUGluc1xuICAgICAgICA/IHRoaXMuX2NvbGxhcHNlTWFya2VycyhtYXBEYXRhLm1hcE1hcmtlcnMpXG4gICAgICAgIDogbWFwRGF0YS5tYXBNYXJrZXJzO1xuICAgICAgY29uc3QgbWFwYm94TWFwTWFya2VyQ29uZmlncyA9IE1hcEJveE1hcmtlckNvbmZpZy5mcm9tKFxuICAgICAgICBjb2xsYXBzZWRNYXJrZXJzLFxuICAgICAgICB0aGlzLl9waW5Db25maWcsXG4gICAgICAgIHRoaXMuX21hcCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFwYm94TWFwTWFya2VyQ29uZmlncy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgd3JhcHBlciA9IG1hcGJveE1hcE1hcmtlckNvbmZpZ3NbaV0ud3JhcHBlcjtcbiAgICAgICAgbGV0IGNvb3JkcyA9IG5ldyBtYXBib3hnbC5MbmdMYXQoXG4gICAgICAgICAgbWFwYm94TWFwTWFya2VyQ29uZmlnc1tpXS5wb3NpdGlvbi5sb25naXR1ZGUsXG4gICAgICAgICAgbWFwYm94TWFwTWFya2VyQ29uZmlnc1tpXS5wb3NpdGlvbi5sYXRpdHVkZSk7XG4gICAgICAgIGxldCBtYXJrZXIgPSBuZXcgbWFwYm94Z2wuTWFya2VyKHdyYXBwZXIpLnNldExuZ0xhdChjb29yZHMpO1xuICAgICAgICBtYXJrZXIuYWRkVG8odGhpcy5fbWFwKTtcbiAgICAgICAgaWYgKHRoaXMuX29uUGluQ2xpY2spIHtcbiAgICAgICAgICBtYXJrZXIuZ2V0RWxlbWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5fb25QaW5DbGljayhjb2xsYXBzZWRNYXJrZXJzW2ldLml0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENlbnRlck1hcmtlciAobWFwRGF0YSkge1xuICAgIHJldHVybiBtYXBEYXRhICYmIG1hcERhdGEubWFwQ2VudGVyICYmIG1hcERhdGEubWFwQ2VudGVyLmxvbmdpdHVkZSAmJiBtYXBEYXRhLm1hcENlbnRlci5sYXRpdHVkZVxuICAgICAgPyBbbWFwRGF0YS5tYXBDZW50ZXIubG9uZ2l0dWRlLCBtYXBEYXRhLm1hcENlbnRlci5sYXRpdHVkZV1cbiAgICAgIDogeyBsbmc6IHRoaXMuX2RlZmF1bHRQb3NpdGlvbi5sbmcsIGxhdDogdGhpcy5fZGVmYXVsdFBvc2l0aW9uLmxhdCB9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXBCb3hNYXJrZXJDb25maWcge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBtYXBib3ggbWFwLCB0aGF0IHRoZSBtYXJrZXIgaXMgYXBwZW5kZWQgdG9cbiAgICAgKiBAdHlwZSB7TWFwQm94fVxuICAgICAqL1xuICAgIHRoaXMubWFwID0gb3B0cy5tYXAgfHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBtYXJrZXIgKGxhdC9sbmcpXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLnBvc2l0aW9uID0gb3B0cy5wb3NpdGlvbiB8fCB7XG4gICAgICBsYXRpdHVkZTogdW5kZWZpbmVkLFxuICAgICAgbG9uZ2l0dWRlOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGh0bWwgZWxlbWVudCB0byBiZSB1c2VkIGFzIHRoZSBtYXAgbWFya2VyXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLndyYXBwZXIgPSBvcHRzLndyYXBwZXIgfHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIG9mIHRoZSBtYXJrZXIgdG8gdXNlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmxhYmVsID0gb3B0cy5sYWJlbCB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdXJsIG9mIHRoZSBwaW4gZm9yIHRoZSBzdGF0aWMgbWFwXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnN0YXRpY01hcFBpbiA9IG9wdHMuc3RhdGljTWFwUGluIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGFuIGFycmF5IG9mIG1hcmtlciBjb25maWdzXG4gICAqIEBwYXJhbSB7TWFwQm94TWFya2VyQ29uZmlnW119IG1hcGJveE1hcE1hcmtlckNvbmZpZ3NcbiAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZSAobWFwYm94TWFwTWFya2VyQ29uZmlncykge1xuICAgIGxldCBzZXJpYWxpemVkTWFya2VycyA9IFtdO1xuICAgIG1hcGJveE1hcE1hcmtlckNvbmZpZ3MuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBpZiAobWFya2VyLnN0YXRpY01hcFBpbikge1xuICAgICAgICBzZXJpYWxpemVkTWFya2Vycy5wdXNoKGB1cmwtJHttYXJrZXIuc3RhdGljTWFwUGlufSgke21hcmtlci5wb3NpdGlvbi5sb25naXR1ZGV9LCR7bWFya2VyLnBvc2l0aW9uLmxhdGl0dWRlfSlgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlcmlhbGl6ZWRNYXJrZXJzLnB1c2goYHBpbi1zLSR7bWFya2VyLmxhYmVsfSgke21hcmtlci5wb3NpdGlvbi5sb25naXR1ZGV9LCR7bWFya2VyLnBvc2l0aW9uLmxhdGl0dWRlfSlgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2VyaWFsaXplZE1hcmtlcnMuam9pbignLCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBzdG9yYWdlIGRhdGEgbW9kZWwgb2YgbWFya2VycyBpbnRvIEdvb2dsZUFQSU1hcmtlclxuICAgKiBAcGFyYW0ge01hcEJveH0gQSByZWZlcmVuY2UgdG8gdGhlIGdvb2dsZSBtYXAgdG8gYXBwbHkgdGhlIG1hcmtlciB0b1xuICAgKiBAcGFyYW0ge29iamVjdFtdfSBtYXJrZXJzIFRoZSBkYXRhIG9mIHRoZSBtYXJrZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IHBpbkNvbmZpZyBUaGUgY29uZmlndXJhdGlvbiB0byBhcHBseSB0byB0aGUgbWFya2VyXG4gICAqIEByZXR1cm5zIHtNYXBCb3hNYXJrZXJDb25maWdbXX1cbiAgICovXG4gIHN0YXRpYyBmcm9tIChtYXJrZXJzLCBwaW5Db25maWcsIG1hcCkge1xuICAgIGxldCBtYXBib3hNYXBNYXJrZXJDb25maWdzID0gW107XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1hcmtlcnMpKSB7XG4gICAgICBtYXJrZXJzID0gW21hcmtlcnNdO1xuICAgIH1cblxuICAgIG1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICAvLyBTdXBwb3J0IGNvbmZpZ3VyYXRpb24gYXMgYSBmdW5jdGlvblxuICAgICAgbGV0IHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZztcbiAgICAgIGlmICh0eXBlb2YgcGluQ29uZmlnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZyhcbiAgICAgICAgICBtYXJrZXIuaXRlbSxcbiAgICAgICAgICBNYXBQcm92aWRlci5ERUZBVUxUX1BJTl9DT05GSUcsXG4gICAgICAgICAgbWFya2VyKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgd3JhcHBlciA9IHBpbkNvbmZpZ09iai53cmFwcGVyID8gcGluQ29uZmlnT2JqLndyYXBwZXIgOiBudWxsO1xuICAgICAgY29uc3Qgc3RhdGljTWFwUGluID0gcGluQ29uZmlnT2JqLnN0YXRpY01hcFBpbiA/IHBpbkNvbmZpZ09iai5zdGF0aWNNYXBQaW4gOiBudWxsO1xuXG4gICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzLnB1c2goXG4gICAgICAgIG5ldyBNYXBCb3hNYXJrZXJDb25maWcoe1xuICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICBsYXRpdHVkZTogbWFya2VyLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBtYXJrZXIubG9uZ2l0dWRlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB3cmFwcGVyOiB3cmFwcGVyLFxuICAgICAgICAgIGxhYmVsOiBtYXJrZXIubGFiZWwsXG4gICAgICAgICAgc3RhdGljTWFwUGluOiBzdGF0aWNNYXBQaW5cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWFwYm94TWFwTWFya2VyQ29uZmlncztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTWFwQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuaW1wb3J0IEdvb2dsZU1hcFByb3ZpZGVyIGZyb20gJy4vcHJvdmlkZXJzL2dvb2dsZW1hcHByb3ZpZGVyJztcbmltcG9ydCBNYXBCb3hNYXBQcm92aWRlciBmcm9tICcuL3Byb3ZpZGVycy9tYXBib3htYXBwcm92aWRlcic7XG5cbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG5jb25zdCBQcm92aWRlclR5cGVzID0ge1xuICAnZ29vZ2xlJzogR29vZ2xlTWFwUHJvdmlkZXIsXG4gICdtYXBib3gnOiBNYXBCb3hNYXBQcm92aWRlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogQmluZCB0aGlzIGNvbXBvbmVudCB0byBsaXN0ZW4gdG8gdGhlIHN0b3JhZ2UgYmFzZWQgb24gdGhpcyBrZXlcbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUztcblxuICAgIC8qKlxuICAgICAqIEFuIGFsaWFzZWQgdXNlZCB0byBkZXRlcm1pbmUgdGhlIHR5cGUgb2YgbWFwIHByb3ZpZGVyIHRvIHVzZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fbWFwUHJvdmlkZXIgPSBvcHRzLm1hcFByb3ZpZGVyO1xuICAgIGlmICghdGhpcy5fbWFwUHJvdmlkZXIgfHwgISh0aGlzLl9tYXBQcm92aWRlci50b0xvd2VyQ2FzZSgpIGluIFByb3ZpZGVyVHlwZXMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hcENvbXBvbmVudDogSW52YWxpZCBNYXAgUHJvdmlkZXI7IG11c3QgYmUgYGdvb2dsZWAgb3IgYG1hcEJveGAnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBpbmRpY2F0aW9uIG9mIHdoZXRoZXIgb3Igbm90IHRvIHVzZSBhIHN0YXRpYyBvciBkeW5hbWljIG1hcFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2lzU3RhdGljID0gb3B0cy5pc1N0YXRpYyB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIGFuIGluc3RhbmNlIG9mIHRoZSB7TWFwUHJvdmlkZXJ9IHRoYXQncyBjb25zdHJ1Y3RlZFxuICAgICAqIEB0eXBlIHtNYXBQcm92aWRlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9tYXAgPSBudWxsO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ01hcCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvbWFwJztcbiAgfVxuXG4gIC8vIFRPRE8oYmlsbHkpIE1ha2UgUHJvdmlkZXJUeXBlcyBhIGZhY3RvcnkgY2xhc3NcbiAgZ2V0UHJvdmlkZXJJbnN0YW5jZSAodHlwZSkge1xuICAgIHJldHVybiBuZXcgUHJvdmlkZXJUeXBlc1t0eXBlLnRvTG93ZXJDYXNlKCldKHRoaXMuX2NvbmZpZyk7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgdGhpcy5fbWFwID0gdGhpcy5nZXRQcm92aWRlckluc3RhbmNlKHRoaXMuX21hcFByb3ZpZGVyKTtcbiAgICBsZXQgbWFwRGF0YSA9IHRoaXMuZ2V0U3RhdGUoJ21hcCcpO1xuICAgIGlmIChtYXBEYXRhID09PSB1bmRlZmluZWQgJiYgdGhpcy5faXNTdGF0aWMpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1N0YXRpYykge1xuICAgICAgLy8gVE9ETyhiaWxseSkgVGhlIGV4aXN0aW5nIHRlbXBsYXRlIHNob3VsZCBqdXN0IHRha2UgaW4gdGhlIG1hcCBgaW1nVVJMYCBhcyBkYXRhXG4gICAgICAvLyBJbnN0ZWFkIG9mIG92ZXJyaWRpbmcgdGhlIHRlbXBsYXRlIGxpa2Ugc28sIGJ1dCBOQkQgZm9yIG5vdy5cbiAgICAgIHRoaXMuc2V0VGVtcGxhdGUodGhpcy5fbWFwLmdlbmVyYXRlU3RhdGljKG1hcERhdGEpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX21hcC5sb2FkSlMoKTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIHRoaXMuX21hcC5vbkxvYWRlZCgoKSA9PiB7XG4gICAgICB0aGlzLl9tYXAuaW5pdCh0aGlzLl9jb250YWluZXIsIHRoaXMuZ2V0U3RhdGUoJ21hcCcpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhLCB2YWwpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoZGF0YSwgdmFsKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVzdWx0c0NvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vbG9jYXRpb25yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL2V2ZW50cmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcGVvcGxlcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IE1hcENvbXBvbmVudCBmcm9tICcuLi9tYXAvbWFwY29tcG9uZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFNlYXJjaFN0YXRlcyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5cbmNvbnN0IFJlc3VsdFR5cGUgPSB7XG4gIEVWRU5UOiAnZXZlbnQnLFxuICBMT0NBVElPTjogJ2xvY2F0aW9uJyxcbiAgUEVPUExFOiAncGVvcGxlJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0c0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiB2ZXJ0aWNhbENvbmZpZ0lkIHVzZWQgZm9yIGFuYWx5dGljcyBhbmQgcGFzc2VkIHRvIGNoaWxkcmVuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsQ29uZmlnSWQgPSBjb25maWcudmVydGljYWxDb25maWdJZDtcblxuICAgIC8qKlxuICAgICAqIGlzVW5pdmVyc2FsIGlzIHNldCB0byB0cnVlIGlmIHRoaXMgY29tcG9uZW50IGlzIGFkZGVkIGJ5IHRoZSBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50XG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9pc1VuaXZlcnNhbCA9IGNvbmZpZy5pc1VuaXZlcnNhbCB8fCBmYWxzZTtcblxuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTO1xuICAgIHRoaXMuX2l0ZW1Db25maWcgPSB7XG4gICAgICBnbG9iYWw6IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIFtFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50LnR5cGVdOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH0sXG4gICAgICBbTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlXToge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9LFxuICAgICAgW1Blb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50LnR5cGVdOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGNvbmZpZy5yZW5kZXJJdGVtID09PSB1bmRlZmluZWQgJiYgY29uZmlnLl9wYXJlbnRPcHRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbmZpZy5yZW5kZXJJdGVtID0gY29uZmlnLl9wYXJlbnRPcHRzLnJlbmRlckl0ZW07XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5pdGVtVGVtcGxhdGUgPT09IHVuZGVmaW5lZCAmJiBjb25maWcuX3BhcmVudE9wdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uZmlnLml0ZW1UZW1wbGF0ZSA9IGNvbmZpZy5fcGFyZW50T3B0cy5pdGVtVGVtcGxhdGU7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5saW1pdCkge1xuICAgICAgY29uc3QgbGltaXQgPSBjb25maWcubGltaXQ7XG4gICAgICBpZiAodHlwZW9mIGxpbWl0ICE9PSAnbnVtYmVyJyB8fCBsaW1pdCA8IDEgfHwgbGltaXQgPiA1MCkge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCdTZWFyY2ggTGltaXQgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDUwJywgJ1ZlcnRpY2FsUmVzdWx0cycpO1xuICAgICAgfVxuICAgICAgdGhpcy5jb3JlLnNldFNlYXJjaExpbWl0KGxpbWl0KTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbmZpZ3VyZUl0ZW0oe1xuICAgICAgcmVuZGVyOiBjb25maWcucmVuZGVySXRlbSxcbiAgICAgIHRlbXBsYXRlOiBjb25maWcuaXRlbVRlbXBsYXRlXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdXJsIHRvIHRoZSB1bml2ZXJzYWwgcGFnZSBmb3IgdGhlIG5vIHJlc3VsdHMgcGFnZSB0byBsaW5rIGJhY2sgdG8gd2l0aCBjdXJyZW50IHF1ZXJ5XG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMuX3VuaXZlcnNhbFVybCA9IGNvbmZpZy51bml2ZXJzYWxVcmw7XG4gIH1cblxuICBtb3VudCAoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZ2V0U3RhdGUoKSkubGVuZ3RoID4gMCkge1xuICAgICAgc3VwZXIubW91bnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZHVwbGljYXRlc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBkYXRhLnJlc3VsdHMgfHwgW107XG4gICAgY29uc3Qgc2VhcmNoU3RhdGUgPSBkYXRhLnNlYXJjaFN0YXRlIHx8IFNlYXJjaFN0YXRlcy5QUkVfU0VBUkNIO1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHsgcmVzdWx0czogW10gfSwgZGF0YSwge1xuICAgICAgaXNQcmVTZWFyY2g6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuUFJFX1NFQVJDSCxcbiAgICAgIGlzU2VhcmNoTG9hZGluZzogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyxcbiAgICAgIGlzU2VhcmNoQ29tcGxldGU6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFLFxuICAgICAgaW5jbHVkZU1hcDogdGhpcy5fY29uZmlnLmluY2x1ZGVNYXAsXG4gICAgICBtYXBDb25maWc6IHRoaXMuX2NvbmZpZy5tYXBDb25maWcsXG4gICAgICBldmVudE9wdGlvbnM6IHRoaXMuZXZlbnRPcHRpb25zKCksXG4gICAgICB1bml2ZXJzYWxVcmw6IHRoaXMuX3VuaXZlcnNhbFVybCA/IHRoaXMuX3VuaXZlcnNhbFVybCArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggOiAnJyxcbiAgICAgIHNob3dOb1Jlc3VsdHM6IHJlc3VsdHMubGVuZ3RoID09PSAwLFxuICAgICAgcXVlcnk6IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKVxuICAgIH0pLCB2YWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIGhlbHBlciB0byBjb25zdHJ1Y3QgdGhlIGV2ZW50T3B0aW9ucyBvYmplY3QgZm9yIHRoZSB2aWV3IGFsbCBsaW5rXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBldmVudE9wdGlvbnMgKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiB0aGlzLl92ZXJ0aWNhbENvbmZpZ0lkXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnVmVydGljYWxSZXN1bHRzJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9yZXN1bHRzJztcbiAgfVxuXG4gIGNvbmZpZ3VyZUl0ZW0gKGNvbmZpZykge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5faXRlbUNvbmZpZy5nbG9iYWwucmVuZGVyID0gY29uZmlnLnJlbmRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbmZpZy5yZW5kZXIpIHtcbiAgICAgICAgdGhpcy5zZXRJdGVtUmVuZGVyKGtleSwgY29uZmlnLnJlbmRlcltrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2l0ZW1Db25maWcuZ2xvYmFsLnRlbXBsYXRlID0gY29uZmlnLnRlbXBsYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29uZmlnLnRlbXBsYXRlKSB7XG4gICAgICAgIHRoaXMuc2V0SXRlbVRlbXBsYXRlKGtleSwgY29uZmlnLnRlbXBsYXRlW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldEl0ZW1UZW1wbGF0ZSAodHlwZSwgdGVtcGxhdGUpIHtcbiAgICBsZXQgY2xhenogPSB0aGlzLmdldEl0ZW1Db21wb25lbnQodHlwZSk7XG4gICAgdGhpcy5faXRlbUNvbmZpZ1tjbGF6ei50eXBlXS50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICB9XG5cbiAgc2V0SXRlbVJlbmRlciAodHlwZSwgcmVuZGVyKSB7XG4gICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KHR5cGUpO1xuICAgIHRoaXMuX2l0ZW1Db25maWdbY2xhenoudHlwZV0ucmVuZGVyID0gcmVuZGVyO1xuICB9XG5cbiAgZ2V0SXRlbUNvbXBvbmVudCAodHlwZSkge1xuICAgIGxldCBjb21wID0gUmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFJlc3VsdFR5cGUuRVZFTlQ6XG4gICAgICAgIGNvbXAgPSBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUmVzdWx0VHlwZS5MT0NBVElPTjpcbiAgICAgICAgY29tcCA9IExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSZXN1bHRUeXBlLlBFT1BMRTpcbiAgICAgICAgY29tcCA9IFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcDtcbiAgfVxuXG4gIGFkZENoaWxkIChkYXRhLCB0eXBlLCBvcHRzKSB7XG4gICAgLy8gVE9ETyhiaWxseSkgUmVmYWN0b3IgdGhlIHdheSBjb25maWd1cmF0aW9uIGFuZCBkYXRhIGZsb3dzXG4gICAgLy8gdGhyb3VnaCB0b3AgbGV2ZWwgY29tcG9uZW50cyB0byBjaGlsZCBjb21wb25lbnRzLlxuICAgIGlmICh0eXBlID09PSBSZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlKSB7XG4gICAgICBsZXQgY2xhenogPSB0aGlzLmdldEl0ZW1Db21wb25lbnQoZGF0YS50eXBlKTtcbiAgICAgIGlmIChjbGF6eikge1xuICAgICAgICB0eXBlID0gY2xhenoudHlwZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IE1hcENvbXBvbmVudC50eXBlKSB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICBtYXA6IGRhdGFcbiAgICAgIH07XG4gICAgICBjb25zdCBuZXdPcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLm1hcENvbmZpZywgb3B0cyk7XG4gICAgICByZXR1cm4gc3VwZXIuYWRkQ2hpbGQoZGF0YSwgdHlwZSwgbmV3T3B0cyk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdGhlIHByb3BlciBpdGVtIHJlbmRlcnMgdG8gdGhlIHRoZSBjb21wb25lbnRzXG4gICAgLy8gaGF2ZSBqdXN0IGJlZW4gY29uc3RydWN0ZWQuIFByaW9yaXRpemUgZ2xvYmFsIG92ZXIgaW5kaXZpZHVhbCBpdGVtcy5cbiAgICBsZXQgY29tcCA9IHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIE9iamVjdC5hc3NpZ24ob3B0cywge1xuICAgICAgdmVydGljYWxDb25maWdJZDogdGhpcy5fdmVydGljYWxDb25maWdJZCxcbiAgICAgIGlzVW5pdmVyc2FsOiB0aGlzLl9pc1VuaXZlcnNhbFxuICAgIH0pKTtcbiAgICBsZXQgZ2xvYmFsQ29uZmlnID0gdGhpcy5faXRlbUNvbmZpZy5nbG9iYWw7XG4gICAgbGV0IGl0ZW1Db25maWcgPSB0aGlzLl9pdGVtQ29uZmlnW2NvbXAudHlwZV07XG4gICAgbGV0IGhhc0dsb2JhbFJlbmRlciA9IHR5cGVvZiBnbG9iYWxDb25maWcucmVuZGVyID09PSAnZnVuY3Rpb24nO1xuICAgIGxldCBoYXNHbG9iYWxUZW1wbGF0ZSA9IHR5cGVvZiBnbG9iYWxDb25maWcudGVtcGxhdGUgPT09ICdzdHJpbmcnO1xuXG4gICAgaWYgKGhhc0dsb2JhbFJlbmRlcikge1xuICAgICAgY29tcC5zZXRSZW5kZXIoZ2xvYmFsQ29uZmlnLnJlbmRlcik7XG4gICAgfVxuXG4gICAgaWYgKGhhc0dsb2JhbFRlbXBsYXRlKSB7XG4gICAgICBjb21wLnNldFRlbXBsYXRlKGdsb2JhbENvbmZpZy50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKCFpdGVtQ29uZmlnKSB7XG4gICAgICByZXR1cm4gY29tcDtcbiAgICB9XG5cbiAgICBpZiAoIWhhc0dsb2JhbFJlbmRlciAmJiBpdGVtQ29uZmlnLnJlbmRlcikge1xuICAgICAgY29tcC5zZXRSZW5kZXIoaXRlbUNvbmZpZy5yZW5kZXIpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHRlbXBsYXRlIHNwZWNpZmljIHNpdHVhdGlvblxuICAgIGlmICghaGFzR2xvYmFsVGVtcGxhdGUgJiYgaXRlbUNvbmZpZy50ZW1wbGF0ZSkge1xuICAgICAgY29tcC5zZXRUZW1wbGF0ZShpdGVtQ29uZmlnLnRlbXBsYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXA7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEFjY29yZGlvblJlc3VsdHNDb21wb25lbnQgKi9cbmltcG9ydCBSZXN1bHRzQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgLyoqXG4gICAgICogYmFzZSBzZWxlY3RvciB0byB1c2Ugd2hlbiBmaW5kaW5nIERPTSB0YXJnZXRzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9zZWxlY3RvckJhc2UgPSBjb25maWcuc2VsZWN0b3JCYXNlIHx8ICcuanMteXh0LUFjY29yZGlvblJlc3VsdCc7XG5cbiAgICAvKipcbiAgICAgKiBjb2xsYXBzZWQgc3RhdGUgY2xhc3NcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuY29sbGFwc2VkQ2xhc3MgPSBjb25maWcuY29sbGFwc2VkQ2xhc3MgfHwgJ2lzLWNvbGxhcHNlZCc7XG5cbiAgICAvKipcbiAgICAgKiB2ZXJ0aWNhbCBjb25maWcgaWQgaXMgcmVxdWlyZWQgZm9yIGFuYWx5dGljc1xuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnZlcnRpY2FsQ29uZmlnSWQgPSBjb25maWcudmVydGljYWxDb25maWdJZCB8fCBjb25maWcuX3BhcmVudE9wdHMudmVydGljYWxDb25maWdJZCB8fCBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIHRoZSBjb21wb25lbnQgdHlwZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdBY2NvcmRpb25SZXN1bHRzJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9yZXN1bHRzYWNjb3JkaW9uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBvdmVycmlkZXMgX29uTW91bnQgdG8gYWRkIGJpbmRpbmdzIHRvIGNoYW5nZSB0aGUgaGVpZ2h0IG9uIGNsaWNrXG4gICAqIEByZXR1cm5zIHtBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50fVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIF9vbk1vdW50ICgpIHtcbiAgICBzdXBlci5fb25Nb3VudCgpO1xuXG4gICAgY29uc3QgYWNjb3JkaW9uRWxzID0gRE9NLnF1ZXJ5QWxsKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fc2VsZWN0b3JCYXNlKTtcbiAgICBhY2NvcmRpb25FbHMuZm9yRWFjaCgoYWNjb3JkaW9uRWwpID0+IHtcbiAgICAgIGNvbnN0IHRvZ2dsZUVsID0gRE9NLnF1ZXJ5KGFjY29yZGlvbkVsLCB0aGlzLnRvZ2dsZVNlbGVjdG9yKCkpO1xuICAgICAgY29uc3QgY29udGVudEVsID0gRE9NLnF1ZXJ5KGFjY29yZGlvbkVsLCB0aGlzLmJvZHlTZWxlY3RvcigpKTtcbiAgICAgIHRoaXMuY2hhbmdlSGVpZ2h0KGNvbnRlbnRFbCwgYWNjb3JkaW9uRWwpO1xuICAgICAgdG9nZ2xlRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2soYWNjb3JkaW9uRWwsIHRvZ2dsZUVsLCBjb250ZW50RWwpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIG1vZGlmaWVyOiB0aGlzLnZlcnRpY2FsQ29uZmlnSWRcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogY2xpY2sgaGFuZGxlciBmb3IgdGhlIGFjY29yZGlvbiB0b2dnbGUgYnV0dG9uXG4gICAqIEBwYXJhbSB3cmFwcGVyRWwge0hUTUxFbGVtZW50fSB0aGUgdG9nZ2xlIGNvbnRhaW5lclxuICAgKiBAcGFyYW0gdG9nZ2xlRWwge0hUTUxFbGVtZW50fSB0aGUgYnV0dG9uXG4gICAqIEBwYXJhbSBjb250ZW50RWwge0hUTUxFbGVtZW50fSB0aGUgdG9nZ2xlIHRhcmdldFxuICAgKi9cbiAgaGFuZGxlQ2xpY2sgKHdyYXBwZXJFbCwgdG9nZ2xlRWwsIGNvbnRlbnRFbCkge1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEFuYWx5dGljc0V2ZW50KHRoaXMuaXNDb2xsYXBzZWQod3JhcHBlckVsKSA/ICdST1dfRVhQQU5EJyA6ICdST1dfQ09MTEFQU0UnKVxuICAgICAgLmFkZE9wdGlvbnMoe1xuICAgICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiB0aGlzLnZlcnRpY2FsQ29uZmlnSWQsXG4gICAgICAgIGVudGl0eUlkOiB0b2dnbGVFbC5kYXRhc2V0LmVudGl0eUlkXG4gICAgICB9KTtcbiAgICB3cmFwcGVyRWwuY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLmNvbGxhcHNlZENsYXNzKTtcbiAgICB0aGlzLmNoYW5nZUhlaWdodChjb250ZW50RWwsIHdyYXBwZXJFbCk7XG4gICAgdG9nZ2xlRWwuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdGhpcy5pc0NvbGxhcHNlZCh3cmFwcGVyRWwpID8gJ2ZhbHNlJyA6ICd0cnVlJyk7XG4gICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlci5yZXBvcnQoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdHJ1ZSBpZiB0aGUgZWxlbWVudCBpcyBjdXJyZW50bHkgY29sbGFwc2VkXG4gICAqIEBwYXJhbSB3cmFwcGVyRWwge0hUTUxFbGVtZW50fSB0aGUgdG9nZ2xlIGNvbnRhaW5lclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzQ29sbGFwc2VkICh3cmFwcGVyRWwpIHtcbiAgICBpZiAoIXdyYXBwZXJFbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB3cmFwcGVyRWwuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY29sbGFwc2VkQ2xhc3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIHRvZ2dsZXMgdGhlIGhlaWdodCBiZXR3ZWVuIDAgYW5kIHRoZSBjb250ZW50IGhlaWdodCBmb3Igc21vb3RoIGFuaW1hdGlvblxuICAgKiBAcGFyYW0gdGFyZ2V0RWwge0hUTUxFbGVtZW50fVxuICAgKiBAcGFyYW0gd3JhcHBlckVsIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIGNoYW5nZUhlaWdodCAodGFyZ2V0RWwsIHdyYXBwZXJFbCkge1xuICAgIHRhcmdldEVsLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuaXNDb2xsYXBzZWQod3JhcHBlckVsKSA/IDAgOiB0YXJnZXRFbC5zY3JvbGxIZWlnaHR9cHhgO1xuICB9XG5cbiAgLyoqXG4gICAqIGhlbHBlciBmb3IgY29tcG9zaW5nIGNoaWxkIGVsZW1lbnQgc2VsZWN0b3JzXG4gICAqIEBwYXJhbSBjaGlsZCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgYnVpbGRTZWxlY3RvciAoY2hpbGQpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5fc2VsZWN0b3JCYXNlfSR7Y2hpbGR9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBoZWxwZXIgZm9yIHRoZSB0b2dnbGUgYnV0dG9uIHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICB0b2dnbGVTZWxlY3RvciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGRTZWxlY3RvcignLXRvZ2dsZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIGhlbHBlciBmb3IgdGhlIGNvbnRlbnQgZWxlbWVudCBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgYm9keVNlbGVjdG9yICgpIHtcbiAgICByZXR1cm4gdGhpcy5idWlsZFNlbGVjdG9yKCctYm9keScpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFNlYXJjaFN0YXRlcyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcbmltcG9ydCBBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50IGZyb20gJy4vYWNjb3JkaW9ucmVzdWx0c2NvbXBvbmVudC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFM7XG4gICAgdGhpcy5fbGltaXQgPSBvcHRzLmxpbWl0IHx8IDEwO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1VuaXZlcnNhbFJlc3VsdHMnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHMnO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpbml0IChvcHRzKSB7XG4gICAgc3VwZXIuaW5pdChvcHRzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhLCB2YWwpIHtcbiAgICBjb25zdCBzZWN0aW9ucyA9IGRhdGEuc2VjdGlvbnMgfHwgW107XG4gICAgY29uc3Qgc2VhcmNoU3RhdGUgPSBkYXRhLnNlYXJjaFN0YXRlIHx8IFNlYXJjaFN0YXRlcy5QUkVfU0VBUkNIO1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHsgc2VjdGlvbnM6IFtdIH0sIGRhdGEsIHtcbiAgICAgIGlzUHJlU2VhcmNoOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlBSRV9TRUFSQ0gsXG4gICAgICBpc1NlYXJjaExvYWRpbmc6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0xPQURJTkcsXG4gICAgICBpc1NlYXJjaENvbXBsZXRlOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURSxcbiAgICAgIHNob3dOb1Jlc3VsdHM6IHNlY3Rpb25zLmxlbmd0aCA9PT0gMCxcbiAgICAgIHF1ZXJ5OiB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSlcbiAgICB9KSwgdmFsKTtcbiAgfVxuXG4gIGFkZENoaWxkIChkYXRhID0ge30sIHR5cGUpIHtcbiAgICBsZXQgb3B0cyA9IHRoaXMuZ2V0Q2hpbGRDb25maWcoW2RhdGFbJ3ZlcnRpY2FsQ29uZmlnSWQnXV0pO1xuICAgIGlmIChvcHRzLnVzZUFjY29yZGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHN1cGVyLmFkZENoaWxkKGRhdGEsIEFjY29yZGlvblJlc3VsdHNDb21wb25lbnQudHlwZSwgb3B0cyk7XG4gICAgfVxuICAgIHJldHVybiBzdXBlci5hZGRDaGlsZChkYXRhLCB0eXBlLCBvcHRzKTtcbiAgfVxuXG4gIGdldENoaWxkQ29uZmlnIChjb25maWdJZCkge1xuICAgIGNvbnN0IGRlZmF1bHRDb25maWcgPSB7XG4gICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiBjb25maWdJZCxcbiAgICAgIGlzVW5pdmVyc2FsOiB0cnVlXG4gICAgfTtcbiAgICBsZXQgY29uZmlnID0gdGhpcy5fY29uZmlnLmNvbmZpZztcbiAgICBpZiAoY29uZmlnID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0Q29uZmlnO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q29uZmlnLCB0aGlzLl9jb25maWdbJ2NvbmZpZyddW2NvbmZpZ0lkXSB8fCB0aGlzLl9jb25maWdbJ2NvbmZpZyddKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBRdWVzdGlvblN1Ym1pc3Npb24gZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvcXVlc3Rpb25zdWJtaXNzaW9uJztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgQW5hbHl0aWNzRXZlbnQgZnJvbSAnLi4vLi4vLi4vY29yZS9hbmFseXRpY3MvYW5hbHl0aWNzZXZlbnQnO1xuXG4vKipcbiAqIENvbmZpZ3VyYWJsZSBvcHRpb25zIGZvciB0aGUgY29tcG9uZW50XG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5jb25zdCBERUZBVUxUX0NPTkZJRyA9IHtcbiAgLyoqXG4gICAqIFRoZSBlbnRpdHkgaWRlbnRpZmllciB0aGF0IHRoZSBxdWVzdGlvbiBpcyBhc3NvY2lhdGVkIHdpdGguXG4gICAqIFRoaXMgaXMgdHlwaWNhbGx5IGFuIG9yZ2FuaXphdGlvbiBvYmplY3RcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gICdlbnRpdHlJZCc6IG51bGwsXG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGxhbmd1YWdlIG9mIHRoZSBxdWVzdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgJ2xhbmd1YWdlJzogJ0VOJyxcblxuICAvKipcbiAgICogVGhlIG1haW4gQ1NTIHNlbGVjdG9yIHVzZWQgdG8gcmVmZXJlbmNlIHRoZSBmb3JtIGZvciB0aGUgY29tcG9uZW50LlxuICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICovXG4gICdmb3JtU2VsZWN0b3InOiAnZm9ybScsXG5cbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIGxhYmVsIHRvIHVzZSBmb3IgdGhlIGUtbWFpbCBhZGRyZXNzIGlucHV0XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICAnZW1haWxMYWJlbCc6ICdFbWFpbCBBZGRyZXNzOicsXG5cbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIGxhYmVsIHRvIHVzZSBmb3IgdGhlIG5hbWUgaW5wdXRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICduYW1lTGFiZWwnOiAnTmFtZTonLFxuXG4gIC8qKlxuICAgKiBBbiBvcHRpb25hbCBsYWJlbCB0byB1c2UgZm9yIHRoZSBxdWVzdGlvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgJ3F1ZXN0aW9uTGFiZWwnOiAnV2hhdCBpcyB5b3VyIHF1ZXN0aW9uPycsXG5cbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIGxhYmVsIHRvIHVzZSBmb3IgdGhlIFByaXZhY3kgUG9saWN5XG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICAncHJpdmFjeVBvbGljeUxhYmVsJzogJ0kgYWdyZWUgdG8gb3VyIFByaXZhY3kgUG9saWN5OicsXG5cbiAgLyoqXG4gICAqIFRoZSBsYWJlbCB0byB1c2UgZm9yIHRoZSBTdWJtaXQgYnV0dG9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICAnYnV0dG9uTGFiZWwnOiAnU3VibWl0J1xufTtcblxuLyoqXG4gKiBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgaXMgYSBjb21wb25lbnQgdGhhdCBjcmVhdGVzIGEgZm9ybVxuICogdGhhdHMgZGlzcGxheWVkIHdoZW5ldmVyIGEgcXVlcnkgaXMgcnVuLiBJdCBlbmFibGVzIHRoZSB1c2VyXG4gKiB0byBzdWJtaXQgcXVlc3Rpb25zIHRoYXQgdGhleSBjYW50IGZpbmQgdGhlIGFuc3dlciBmb3IuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfQ09ORklHLCBjb25maWcpKTtcblxuICAgIC8qKlxuICAgICAqIFJlZmVyZW5jZSB0byB0aGUgc3RvcmFnZSBtb2RlbFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlFVRVNUSU9OX1NVQk1JU1NJT047XG5cbiAgICAvKipcbiAgICAgKiBOT1RFKGJpbGx5KSBpZiB0aGlzIGlzIGEgcGF0dGVybiB3ZSB3YW50IHRvIGZvbGxvdyBmb3IgY29uZmlndXJhdGlvblxuICAgICAqIHdlIHNob3VsZCBiYWtlIGl0IGludG8gdGhlIGNvcmUgY2xhc3MuXG4gICAgICovXG4gICAgdGhpcy52YWxpZGF0ZUNvbmZpZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdxdWVzdGlvbnMvcXVlc3Rpb25zdWJtaXNzaW9uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcHVibGljIGludGVyZmFjZSBhbGlhcyBmb3IgdGhlIGNvbXBvbmVudFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdRQVN1Ym1pc3Npb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIHZhbGlkYXRpb25Db25maWcgY29udGFpbnMgYSBidW5jaCBvZiBydWxlc1xuICAgKiB0aGF0IGFyZSB1c2VkIHRvIHZhbGlkYXRlIGFnaW5zdCBjb25maWd1cmF0aW9uIHByb3ZpZGVkIGJ5IHRoZSB1c2VyXG4gICAqL1xuICB2YWxpZGF0ZUNvbmZpZyAoKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5lbnRpdHlJZCA9PT0gbnVsbCB8fFxuICAgICAgICB0eXBlb2YgdGhpcy5fY29uZmlnLmVudGl0eUlkICE9PSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ2BlbnRpdHlJZGAgaXMgYSByZXF1aXJlZCBjb25maWd1cmF0aW9uIG9wdGlvbiBmb3IgUXVlc3Rpb24gU3VibWlzc2lvbicsXG4gICAgICAgICdRdWVzdGlvblN1Ym1pc3Npb24nKTtcbiAgICB9XG4gIH1cblxuICBiZWZvcmVNb3VudCAoKSB7XG4gICAgLy8gQXZvaWQgbW91bnRpbmcgdGhlIGNvbXBvbmVudCBpZiB0aGVyZXMgbm8gZGF0YVxuICAgIC8vIE5vdGUsIDEgYmVjYXVzZSBgY29uZmlnYCBpcyBhbHdheXMgcGFydCBvZiB0aGUgc3RhdGUuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZ2V0U3RhdGUoKSkubGVuZ3RoID4gMTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIGxldCBmb3JtRWwgPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9jb25maWcuZm9ybVNlbGVjdG9yKTtcbiAgICBpZiAoZm9ybUVsID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5iaW5kQW5hbHl0aWNzKGZvcm1FbCk7XG4gICAgdGhpcy5iaW5kRm9ybVN1Ym1pdChmb3JtRWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIGJpbmRBbmFseXRpY3Mgd2lsbCB3aXJlIHVwIERPTSBldmVudCBob29rcyB0byBzZXJ2ZXJzaWRlIHJlcG9ydGluZ1xuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtRWxcbiAgICovXG4gIGJpbmRBbmFseXRpY3MgKGZvcm1FbCkge1xuICAgIGlmICh0aGlzLmFuYWx5dGljc1JlcG9ydGVyID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcXVlc3Rpb25UZXh0RWwgPSBET00ucXVlcnkoZm9ybUVsLCAnLmpzLXF1ZXN0aW9uLXRleHQnKTtcbiAgICBET00ub24ocXVlc3Rpb25UZXh0RWwsICdmb2N1cycsICgpID0+IHtcbiAgICAgIHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIucmVwb3J0KG5ldyBBbmFseXRpY3NFdmVudCgnUVVFU1RJT05fRk9DVVMnKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogYmluZEZvcm1TdWJtaXQgaGFuZGxlcyBzdWJtaXR0aW5nIHRoZSBxdWVzdGlvbiB0byB0aGUgc2VydmVyLlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtRWxcbiAgICovXG4gIGJpbmRGb3JtU3VibWl0IChmb3JtRWwpIHtcbiAgICBET00ub24oZm9ybUVsLCAnc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIHdlIHByb2JhYmx5IHdhbnQgdG8gZGlzYWJsZSB0aGUgZm9ybSBmcm9tIGJlaW5nIHN1Ym1pdHRlZCB0d2ljZVxuICAgICAgY29uc3QgZm9ybURhdGEgPSB0aGlzLnBhcnNlKGZvcm1FbCk7XG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnZhbGlkYXRlUmVxdWlyZWQoZm9ybURhdGEpO1xuICAgICAgaWYgKGVycm9ycykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZShuZXcgUXVlc3Rpb25TdWJtaXNzaW9uKGZvcm1EYXRhLCBlcnJvcnMpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb3JlLnN1Ym1pdFF1ZXN0aW9uKHtcbiAgICAgICAgJ2VudGl0eUlkJzogdGhpcy5fY29uZmlnLmVudGl0eUlkLFxuICAgICAgICAncXVlc3Rpb25MYW5ndWFnZSc6IHRoaXMuX2NvbmZpZy5sYW5ndWFnZSxcbiAgICAgICAgJ3NpdGUnOiAnRklSU1RfUEFSVFknLFxuICAgICAgICAnbmFtZSc6IGZvcm1EYXRhLm5hbWUsXG4gICAgICAgICdlbWFpbCc6IGZvcm1EYXRhLmVtYWlsLFxuICAgICAgICAncXVlc3Rpb25UZXh0JzogZm9ybURhdGEucXVlc3Rpb25UZXh0LFxuICAgICAgICAncXVlc3Rpb25EZXNjcmlwdGlvbic6IGZvcm1EYXRhLnF1ZXN0aW9uRGVzY3JpcHRpb25cbiAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgIG5ldyBRdWVzdGlvblN1Ym1pc3Npb24oZm9ybURhdGEsIHtcbiAgICAgICAgICAgICAgJ25ldHdvcmsnOiAnVGhlcmUgd2FzIGEgcHJvYmxlbSBzdWJtaXR0aW5nIHlvdXIgcXVlc3Rpb24uIFBsZWFzZSB0cnkgYWdhaW4uJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUYWtlcyB0aGUgZm9ybSwgYW5kIGJ1aWxkcyBhIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGlucHV0IG5hbWVzXG4gICAqIGFuZCB0ZXh0IGZpZWxkcy5cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZm9ybUVsXG4gICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAqL1xuICBwYXJzZSAoZm9ybUVsKSB7XG4gICAgY29uc3QgaW5wdXRGaWVsZHMgPSBET00ucXVlcnlBbGwoZm9ybUVsLCAnLmpzLXF1ZXN0aW9uLWZpZWxkJyk7XG4gICAgaWYgKCFpbnB1dEZpZWxkcyB8fCBpbnB1dEZpZWxkcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBsZXQgb2JqID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dEZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHZhbCA9IGlucHV0RmllbGRzW2ldLnZhbHVlO1xuICAgICAgaWYgKGlucHV0RmllbGRzW2ldLnR5cGUgPT09ICdjaGVja2JveCcgJiYgdmFsID09PSAndHJ1ZScpIHtcbiAgICAgICAgdmFsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIG9ialtpbnB1dEZpZWxkc1tpXS5uYW1lXSA9IHZhbDtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlcyB0aGUgcmVxdWlyZWQgZmllbGRzIChvciBydWxlcykgZm9yIHRoZSBmb3JtIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IGZvcm1EYXRhXG4gICAqIEByZXR1cm5zIHtPYmplY3R8Ym9vbGVhbn0gZXJyb3JzIG9iamVjdCBpZiBhbnkgZXJyb3JzIGZvdW5kXG4gICAqL1xuICB2YWxpZGF0ZVJlcXVpcmVkIChmb3JtRGF0YSkge1xuICAgIGxldCBlcnJvcnMgPSB7fTtcbiAgICBpZiAoIWZvcm1EYXRhLmVtYWlsIHx8IHR5cGVvZiBmb3JtRGF0YS5lbWFpbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9yc1snZW1haWwnXSA9ICdNaXNzaW5nIGVtYWlsIGFkZHJlc3MhJztcbiAgICB9XG5cbiAgICBpZiAoIWZvcm1EYXRhLnByaXZhY3lQb2xpY3kgfHwgZm9ybURhdGEucHJpdmFjeVBvbGljeSAhPT0gdHJ1ZSkge1xuICAgICAgZXJyb3JzWydwcml2YWN5UG9saWN5J10gPSAnQXBwcm92aW5nIG91ciBwcml2YWN5IHBvbGljeSB0ZXJtcyBpcyByZXF1aXJlZCEnO1xuICAgIH1cblxuICAgIGlmICghZm9ybURhdGEucXVlc3Rpb25UZXh0IHx8IHR5cGVvZiBmb3JtRGF0YS5xdWVzdGlvblRleHQgIT09ICdzdHJpbmcnKSB7XG4gICAgICBlcnJvcnNbJ3F1ZXN0aW9uVGV4dCddID0gJ1F1ZXN0aW9uIHRleHQgaXMgcmVxdWlyZWQhJztcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPiAwID8gZXJyb3JzIDogbnVsbDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1ZHSWNvbiB7XG4gIC8qKlxuICAgKiBAcGFyYW0gY29uZmlnXG4gICAqIEBwYXJhbSBjb25maWcubmFtZVxuICAgKiBAcGFyYW0gY29uZmlnLnBhdGhcbiAgICogQHBhcmFtIGNvbmZpZy5jb21wbGV4Q29udGVudHNcbiAgICogQHBhcmFtIGNvbmZpZy52aWV3Qm94XG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIC8qKlxuICAgICAqIHRoZSBuYW1lIG9mIHRoZSBpY29uXG4gICAgICovXG4gICAgdGhpcy5uYW1lID0gY29uZmlnLm5hbWU7XG4gICAgLyoqXG4gICAgICogYW4gc3ZnIHBhdGggZGVmaW5pdGlvblxuICAgICAqL1xuICAgIHRoaXMucGF0aCA9IGNvbmZpZy5wYXRoO1xuICAgIC8qKlxuICAgICAqIGlmIG5vdCB1c2luZyBhIHBhdGgsIGEgdGhlIG1hcmt1cCBmb3IgYSBjb21wbGV4IFNWR1xuICAgICAqL1xuICAgIHRoaXMuY29tcGxleENvbnRlbnRzID0gY29uZmlnLmNvbXBsZXhDb250ZW50cztcbiAgICAvKipcbiAgICAgKiB0aGUgdmlldyBib3ggZGVmaW5pdGlvbiwgZGVmYXVsdHMgdG8gMjR4MjRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudmlld0JveCA9IGNvbmZpZy52aWV3Qm94IHx8ICcwIDAgMjQgMjQnO1xuICAgIC8qKlxuICAgICAqIGFjdHVhbCBjb250ZW50cyB1c2VkXG4gICAgICovXG4gICAgdGhpcy5jb250ZW50cyA9IHRoaXMucGF0aERlZmluaXRpb24oKTtcbiAgfVxuXG4gIHBhdGhEZWZpbml0aW9uICgpIHtcbiAgICBpZiAodGhpcy5jb21wbGV4Q29udGVudHMpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXhDb250ZW50cztcbiAgICB9XG5cbiAgICByZXR1cm4gYDxwYXRoIGQ9XCIke3RoaXMucGF0aH1cIj48L3BhdGg+YDtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRoZSBzdmcgbWFya3VwXG4gICAqL1xuICBtYXJrdXAgKCkge1xuICAgIHJldHVybiBgPHN2ZyB2aWV3Qm94PVwiJHt0aGlzLnZpZXdCb3h9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPiR7dGhpcy5jb250ZW50c308L3N2Zz5gO1xuICB9XG59XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAndGh1bWInLFxuICB2aWV3Qm94OiAnMCAwIDI0IDIyJyxcbiAgcGF0aDogJ00xNS4yNzMgMUg1LjQ1NWMtLjkwNiAwLTEuNjguNTUtMi4wMDggMS4zNDJMLjE1MyAxMC4wOTdBMi4xOSAyLjE5IDAgMDAwIDEwLjl2Mi4yYzAgMS4yMS45ODIgMi4yIDIuMTgyIDIuMmg2Ljg4M0w4LjAzIDIwLjMyN2wtLjAzMy4zNTJjMCAuNDUxLjE4Ni44NjkuNDggMS4xNjZMOS42MzMgMjNsNy4xNzgtNy4yNDlhMi4xNiAyLjE2IDAgMDAuNjQ0LTEuNTUxdi0xMWMwLTEuMjEtLjk4Mi0yLjItMi4xODItMi4yem0wIDEzLjJsLTQuNzM1IDQuNzc0TDExLjc1IDEzLjFIMi4xODJ2LTIuMmwzLjI3My03LjdoOS44MTh2MTF6TTE5LjYzNiAxSDI0djEzLjJoLTQuMzY0VjF6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncmVjZWlwdCcsXG4gIHBhdGg6ICdNMTQuNjA2IDkuNWMtLjY3MS0uNTE1LTEuNTkxLS44MzMtMi42MDYtLjgzMyAxLjAxNSAwIDEuOTM1LjMxOCAyLjYwNi44MzN6bS03Ljk4NSAwSDEuNjU1QTEuNjYgMS42NiAwIDAxMCA3LjgzM1YzLjY2N0MwIDIuNzQ3Ljc0MSAyIDEuNjU1IDJoMjAuNjlBMS42NiAxLjY2IDAgMDEyNCAzLjY2N3Y0LjE2NkExLjY2IDEuNjYgMCAwMTIyLjM0NSA5LjVoLTQuOTY2VjIySDYuNjIxVjkuNWgyLjc3M0g2LjYyem0xMC43NTgtMS42NjdoNC45NjZWMy42NjdIMS42NTV2NC4xNjZoNC45NjZ2LTIuNWgxMC43NTh2Mi41eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3BhbnRoZW9uJyxcbiAgcGF0aDogJ005Ljk0NyAxNi41OThoLjI1MlY5LjQxMmgtLjI1MmEuNDMyLjQzMiAwIDAxLS4yMy0uMDY1Yy0uMDctLjA0My0uMTA2LS4wOTMtLjEwNi0uMTVMOS4xNSA3Ljgydi0uMTVjMC0uMDQ0LjAyOC0uMDguMDg0LS4xMDlhLjY5MS42OTEgMCAwMS4xMDUtLjA4Ni4yNTQuMjU0IDAgMDEuMTQ2LS4wNDNIMTMuNmMuMDU2IDAgLjEwNC4wMTUuMTQ2LjA0My4wNDIuMDMuMDkxLjA1OC4xNDcuMDg2YS4yNzEuMjcxIDAgMDEuMDYzLjEwOGMuMDE0LjA0My4wMDcuMDkzLS4wMi4xNWwtLjQyIDEuMzc4YS4zNzQuMzc0IDAgMDEtLjE0Ny4xNS4zNy4zNyAwIDAxLS4xOS4wNjVoLS4yNTF2Ny4xODZoLjI1MmEuMzcuMzcgMCAwMS4xODkuMDY1Yy4wNy4wNDMuMTE5LjA5My4xNDcuMTVsLjQyIDEuMzc4Yy4wMjcuMDI4LjAzNC4wNzEuMDIuMTI5YS4yNzUuMjc1IDAgMDEtLjA2My4xMjkgMS4zNjQgMS4zNjQgMCAwMC0uMTQ3LjA4Ni4yNTQuMjU0IDAgMDEtLjE0Ni4wNDNIOS40ODVhLjI1NC4yNTQgMCAwMS0uMTQ2LS4wNDMuNjkxLjY5MSAwIDAxLS4xMDUtLjA4NmMtLjA1Ni0uMDI5LS4wODQtLjA3Mi0uMDg0LS4xM3YtLjEyOGwuNDYxLTEuMzc3YzAtLjA1OC4wMzUtLjEwOC4xMDUtLjE1MWEuNDMyLjQzMiAwIDAxLjIzMS0uMDY1em01Ljc5MiAwaC4yNTJWOS40MTJoLS4yNTJhLjQzMi40MzIgMCAwMS0uMjMtLjA2NS4zNzQuMzc0IDAgMDEtLjE0OC0uMTVsLS40Mi0xLjM3N2MtLjAyNy0uMDI5LS4wMzQtLjA3Mi0uMDItLjEzYS4yNzUuMjc1IDAgMDEuMDYzLS4xMjljLjA1Ni0uMDI4LjEwNS0uMDU3LjE0Ni0uMDg2YS4yNTQuMjU0IDAgMDEuMTQ3LS4wNDNoNC4xMTRjLjA1NSAwIC4xMDQuMDE1LjE0Ni4wNDNhLjY5MS42OTEgMCAwMS4xMDUuMDg2Yy4wNTYuMDMuMDg0LjA3Mi4wODQuMTN2LjEyOWwtLjQyIDEuMzc3YS4zNzQuMzc0IDAgMDEtLjE0Ni4xNS40MzIuNDMyIDAgMDEtLjIzMS4wNjVoLS4yMXY3LjE4NmguMjFhLjQzLjQzIDAgMDEuMjMuMDY1Yy4wNy4wNDMuMTIuMDkzLjE0OC4xNWwuNDIgMS4zNzh2LjE1YzAgLjA0My0uMDI5LjA4LS4wODUuMTA4YS42OTEuNjkxIDAgMDEtLjEwNS4wODYuMjU0LjI1NCAwIDAxLS4xNDYuMDQzaC00LjExNGEuMjU0LjI1NCAwIDAxLS4xNDctLjA0MyAxLjM2NCAxLjM2NCAwIDAwLS4xNDYtLjA4Ni4yNzEuMjcxIDAgMDEtLjA2My0uMTA4Yy0uMDE0LS4wNDMtLjAwNy0uMDkzLjAyLS4xNWwuNDItMS4zNzdhLjM3NC4zNzQgMCAwMS4xNDctLjE1MS40MzIuNDMyIDAgMDEuMjMxLS4wNjV6bS0xMS43OTQtLjA4NmguMjUyVjkuNDk4aC0uMjUyYS4zMzQuMzM0IDAgMDEtLjIxLS4wNjUuMzg2LjM4NiAwIDAxLS4xMjYtLjE5M2wtLjQyLTEuMzc3YS4yNDguMjQ4IDAgMDEtLjAyLS4xNzIuODU0Ljg1NCAwIDAxLjA2My0uMTczYy4wMjgtLjA1Ny4wNy0uMS4xMjYtLjEyOWEuMzY1LjM2NSAwIDAxLjE2OC0uMDQzaDQuMDdjLjA1NyAwIC4xMTMuMDE1LjE2OS4wNDNhLjI3OC4yNzggMCAwMS4xMjYuMTMuODU0Ljg1NCAwIDAxLjA2Mi4xNzIuMjQ4LjI0OCAwIDAxLS4wMi4xNzJsLS40MiAxLjM3N2EuMzg2LjM4NiAwIDAxLS4xMjYuMTkzLjMzNC4zMzQgMCAwMS0uMjEuMDY1aC0uMjF2Ny4wMTRoLjIxYy4wODQgMCAuMTU0LjAyOS4yMS4wODZhLjY3My42NzMgMCAwMS4xMjYuMTcybC40MiAxLjM3OGEuMjQ4LjI0OCAwIDAxLjAyLjE3Mi44NTQuODU0IDAgMDEtLjA2Mi4xNzIuMjc4LjI3OCAwIDAxLS4xMjYuMTI5LjM2NS4zNjUgMCAwMS0uMTY4LjA0M0gzLjUyNmEuMzY1LjM2NSAwIDAxLS4xNjgtLjA0My4yNzguMjc4IDAgMDEtLjEyNi0uMTMuODU0Ljg1NCAwIDAxLS4wNjMtLjE3MS4yNDguMjQ4IDAgMDEuMDItLjE3MmwuNDItMS4zNzhhLjY3My42NzMgMCAwMS4xMjYtLjE3Mi4yODEuMjgxIDAgMDEuMjEtLjA4NnpNMS43NjMgNi42NThhLjcxNy43MTcgMCAwMS0uNTA0LS4xOTQuNjQ0LjY0NCAwIDAxLS4yMS0uNDk1di0uNDNhLjczLjczIDAgMDEuMTA1LS4zODcuNjguNjggMCAwMS4yNzMtLjI1OUM0LjMwOSAzLjQwMiA2LjU0IDIuMjc2IDguMTIxIDEuNTE1IDkuNzAyLjc1NSAxMC40OTMuMzYxIDEwLjQ5My4zMzJjLjUzMS0uMjU4Ljk3Mi0uMzY2IDEuMzIyLS4zMjMuMzUuMDQzLjczNC4xNjUgMS4xNTQuMzY2bDguMzEgNC41MThjLjE0LjA1OC4yNDUuMTQ0LjMxNS4yNTlhLjczLjczIDAgMDEuMTA1LjM4N3YuNDNjMCAuMjAxLS4wNy4zNjYtLjIxLjQ5NWEuNzE3LjcxNyAwIDAxLS41MDQuMTk0SDEuNzYzem0tLjcxNCAxMy4zNGEuNTQuNTQgMCAwMS4xNjgtLjM4Ny41MTYuNTE2IDAgMDEuMzc4LS4xNzJoMTkuNjQyYy4xNjggMCAuMzA4LjA1Ny40Mi4xNzJhLjU0MS41NDEgMCAwMS4xNjguMzg3di44MThhLjUyMi41MjIgMCAwMS0uMTY4LjQwOC42MDUuNjA1IDAgMDEtLjQyLjE1MUgxLjU5NWEuNTUxLjU1MSAwIDAxLS4zNzgtLjE1LjUyMi41MjIgMCAwMS0uMTY4LS40MXYtLjgxN3ptMjEuNDA1IDIuMDIyYy4xNCAwIC4yNjYuMDU4LjM3OC4xNzNhLjU5Mi41OTIgMCAwMS4xNjguNDN2LjgxOGEuNTQxLjU0MSAwIDAxLS4xNjguMzg3LjUxNi41MTYgMCAwMS0uMzc4LjE3MkwuNTQ2IDIzLjk1N2EuNTE2LjUxNiAwIDAxLS4zNzgtLjE3Mi41NDEuNTQxIDAgMDEtLjE2OC0uMzg3di0uODE4YS41OS41OSAwIDAxLjE2OC0uNDMuNTE2LjUxNiAwIDAxLjM3OC0uMTczbDIxLjkwOC4wNDN6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnbWljJyxcbiAgcGF0aDogJ00xMiAxNWMxLjY2IDAgMi45OS0xLjM0IDIuOTktM0wxNSA2YzAtMS42Ni0xLjM0LTMtMy0zUzkgNC4zNCA5IDZ2NmMwIDEuNjYgMS4zNCAzIDMgM3ptNS4zLTNjMCAzLTIuNTQgNS4xLTUuMyA1LjFTNi43IDE1IDYuNyAxMkg1YzAgMy40MSAyLjcyIDYuMjMgNiA2LjcyVjIyaDJ2LTMuMjhjMy4yOC0uNDggNi0zLjMgNi02LjcyaC0xLjd6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnZGlyZWN0aW9ucycsXG4gIHBhdGg6ICdNMjMuNjQ5IDExLjE1NEwxMi44NDYuMzVhMS4xOTUgMS4xOTUgMCAwMC0xLjY5MiAwTC4zNSAxMS4xNTRhMS4xOTUgMS4xOTUgMCAwMDAgMS42OTJMMTEuMTU0IDIzLjY1YTEuMTk1IDEuMTk1IDAgMDAxLjY5MiAwTDIzLjY1IDEyLjg0NmMuNDY4LS40NTYuNDY4LTEuMjEyIDAtMS42OTJ6bS05LjI1NCAzLjg1M3YtMy4wMDFIOS41OTN2My42aC0yLjR2LTQuOGMwLS42Ni41NC0xLjIgMS4yLTEuMmg2LjAwMlY2LjYwNGw0LjIgNC4yLTQuMiA0LjIwMnonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdjYWxlbmRhcicsXG4gIHBhdGg6ICdNMTguMTExIDEzLjJIMTJ2Nmg2LjExMXYtNnpNMTYuODkgMHYyLjRINy4xMVYwSDQuNjY3djIuNEgzLjQ0NGMtMS4zNTYgMC0yLjQzMiAxLjA4LTIuNDMyIDIuNEwxIDIxLjZDMSAyMi45MiAyLjA4OCAyNCAzLjQ0NCAyNGgxNy4xMTJDMjEuOSAyNCAyMyAyMi45MiAyMyAyMS42VjQuOGMwLTEuMzItMS4xLTIuNC0yLjQ0NC0yLjRoLTEuMjIzVjBIMTYuODl6bTMuNjY3IDIxLjZIMy40NDRWOC40aDE3LjExMnYxMy4yeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2NhbGxvdXQnLFxuICBwYXRoOiAnTTIxLjk5IDRjMC0xLjEtLjg5LTItMS45OS0ySDRjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoMTRsNCA0LS4wMS0xOHonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdpbmZvJyxcbiAgcGF0aDogJ00xMiA4LjRBMS4yIDEuMiAwIDEwMTIgNmExLjIgMS4yIDAgMDAwIDIuNHpNMTIgMGM2LjYyNCAwIDEyIDUuMzc2IDEyIDEycy01LjM3NiAxMi0xMiAxMlMwIDE4LjYyNCAwIDEyIDUuMzc2IDAgMTIgMHptMCAxOGMuNjYgMCAxLjItLjU0IDEuMi0xLjJWMTJjMC0uNjYtLjU0LTEuMi0xLjItMS4yLS42NiAwLTEuMi41NC0xLjIgMS4ydjQuOGMwIC42Ni41NCAxLjIgMS4yIDEuMnonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdicmllZmNhc2UnLFxuICBwYXRoOiAnTTIwIDdoLTRWNWMwLTEuMTEtLjg5LTItMi0yaC00Yy0xLjExIDAtMiAuODktMiAydjJINGMtMS4xMSAwLTEuOTkuODktMS45OSAyTDIgMjBjMCAxLjExLjg5IDIgMiAyaDE2YzEuMTEgMCAyLS44OSAyLTJWOWMwLTEuMTEtLjg5LTItMi0yem0tNiAwaC00VjVoNHYyeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2thYm9iJyxcbiAgdmlld0JveDogJzAgMCAzIDExJyxcbiAgY29tcGxleENvbnRlbnRzOiBgPGNpcmNsZSBjeD1cIjEuNVwiIGN5PVwiMS41XCIgcj1cIjEuNVwiLz48Y2lyY2xlIGN4PVwiMS41XCIgY3k9XCI1LjVcIiByPVwiMS41XCIvPjxjaXJjbGUgY3g9XCIxLjVcIiBjeT1cIjkuNVwiIHI9XCIxLjVcIi8+YFxufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncGVyc29uJyxcbiAgdmlld0JveDogJzAgMCAxOCAxOCcsXG4gIHBhdGg6ICdNOSA5YzIuNDg2IDAgNC41LTIuMDE0IDQuNS00LjVTMTEuNDg2IDAgOSAwYTQuNDk5IDQuNDk5IDAgMDAtNC41IDQuNUM0LjUgNi45ODYgNi41MTQgOSA5IDl6bTAgMi4yNWMtMy4wMDQgMC05IDEuNTA4LTkgNC41djEuMTI1QzAgMTcuNDk0LjUwNiAxOCAxLjEyNSAxOGgxNS43NWMuNjE5IDAgMS4xMjUtLjUwNiAxLjEyNS0xLjEyNVYxNS43NWMwLTIuOTkyLTUuOTk2LTQuNS05LTQuNXonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdtYWduaWZ5aW5nX2dsYXNzJyxcbiAgcGF0aDogJ00xNi4xMjQgMTMuMDUxYTUuMTU0IDUuMTU0IDAgMTEwLTEwLjMwOCA1LjE1NCA1LjE1NCAwIDAxMCAxMC4zMDhNMTYuMTE0IDBhNy44ODYgNy44ODYgMCAwMC02LjQ2IDEyLjQwN0wwIDIyLjA2IDEuOTQgMjRsOS42NTMtOS42NTNBNy44ODYgNy44ODYgMCAxMDE2LjExMyAwJ1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnb2ZmaWNlJyxcbiAgcGF0aDogJ00xMiA3VjNIMnYxOGgyMFY3SDEyek02IDE5SDR2LTJoMnYyem0wLTRINHYtMmgydjJ6bTAtNEg0VjloMnYyem0wLTRINFY1aDJ2MnptNCAxMkg4di0yaDJ2MnptMC00SDh2LTJoMnYyem0wLTRIOFY5aDJ2MnptMC00SDhWNWgydjJ6bTEwIDEyaC04di0yaDJ2LTJoLTJ2LTJoMnYtMmgtMlY5aDh2MTB6bS0yLThoLTJ2Mmgydi0yem0wIDRoLTJ2Mmgydi0yeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2xpbmsnLFxuICBwYXRoOiAnTTIuMjggMTJBMy43MjMgMy43MjMgMCAwMTYgOC4yOGg0LjhWNkg2Yy0zLjMxMiAwLTYgMi42ODgtNiA2czIuNjg4IDYgNiA2aDQuOHYtMi4yOEg2QTMuNzIzIDMuNzIzIDAgMDEyLjI4IDEyem00LjkyIDEuMmg5LjZ2LTIuNEg3LjJ2Mi40ek0xOCA2aC00Ljh2Mi4yOEgxOEEzLjcyMyAzLjcyMyAwIDAxMjEuNzIgMTIgMy43MjMgMy43MjMgMCAwMTE4IDE1LjcyaC00LjhWMThIMThjMy4zMTIgMCA2LTIuNjg4IDYtNnMtMi42ODgtNi02LTZ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnd2luZG93JyxcbiAgcGF0aDogJ00zIDEzaDhWM0gzdjEwem0wIDhoOHYtNkgzdjZ6bTEwIDBoOFYxMWgtOHYxMHptMC0xOHY2aDhWM2gtOHonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdwaG9uZScsXG4gIHBhdGg6ICdNNC44MjcgMTAuMzg3YTIwLjE5OCAyMC4xOTggMCAwMDguNzg2IDguNzg2bDIuOTM0LTIuOTMzYy4zNi0uMzYuODkzLS40OCAxLjM2LS4zMmExNS4yMSAxNS4yMSAwIDAwNC43Ni43NmMuNzMzIDAgMS4zMzMuNiAxLjMzMyAxLjMzM3Y0LjY1NEMyNCAyMy40IDIzLjQgMjQgMjIuNjY3IDI0IDEwLjE0NyAyNCAwIDEzLjg1MyAwIDEuMzMzIDAgLjYuNiAwIDEuMzMzIDBINmMuNzMzIDAgMS4zMzMuNiAxLjMzMyAxLjMzMyAwIDEuNjY3LjI2NyAzLjI2Ny43NiA0Ljc2LjE0Ny40NjcuMDQuOTg3LS4zMzMgMS4zNmwtMi45MzMgMi45MzR6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAndGFnJyxcbiAgdmlld0JveDogJzAgMCAxOCAxOCcsXG4gIHBhdGg6ICdNMTcuNDY5IDguNjIybC04LjEtOC4xQTEuNzg5IDEuNzg5IDAgMDA4LjEgMEgxLjhDLjgxIDAgMCAuODEgMCAxLjh2Ni4zYzAgLjQ5NS4xOTguOTQ1LjUzMSAxLjI3OGw4LjEgOC4xYy4zMjQuMzI0Ljc3NC41MjIgMS4yNjkuNTIyYTEuNzYgMS43NiAwIDAwMS4yNjktLjUzMWw2LjMtNi4zQTEuNzYgMS43NiAwIDAwMTggOS45YzAtLjQ5NS0uMjA3LS45NTQtLjUzMS0xLjI3OHpNMy4xNSA0LjVjLS43NDcgMC0xLjM1LS42MDMtMS4zNS0xLjM1IDAtLjc0Ny42MDMtMS4zNSAxLjM1LTEuMzUuNzQ3IDAgMS4zNS42MDMgMS4zNSAxLjM1IDAgLjc0Ny0uNjAzIDEuMzUtMS4zNSAxLjM1eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2RvY3VtZW50JyxcbiAgcGF0aDogJ000IDZIMnYxNGMwIDEuMS45IDIgMiAyaDE0di0ySDRWNnptMTYtNEg4Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDEyYzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS0xIDlIOVY5aDEwdjJ6bS00IDRIOXYtMmg2djJ6bTQtOEg5VjVoMTB2MnonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdjaGV2cm9uJyxcbiAgdmlld0JveDogJzAgMCA3IDknLFxuICBjb21wbGV4Q29udGVudHM6IGA8ZyBmaWxsLXJ1bGU9XCJldmVub2RkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xIC04KVwiPjxwYXRoIGQ9XCJtMi42NDE3MDA0IDgtMS4xNDE3MDA0IDEuMDU3NSAzLjcwODUwMjAyIDMuNDQyNS0zLjcwODUwMjAyIDMuNDQyNSAxLjE0MTcwMDQgMS4wNTc1IDQuODU4Mjk5Ni00LjV6XCIvPjwvZz5gXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdzdXBwb3J0JyxcbiAgcGF0aDogJ00xMi41IDJDNy44MSAyIDQgNS44MSA0IDEwLjVjMCA0LjY5IDMuODEgOC41IDguNSA4LjVoLjV2M2M0Ljg2LTIuMzQgOC03IDgtMTEuNUMyMSA1LjgxIDE3LjE5IDIgMTIuNSAyem0xIDE0LjVoLTJ2LTJoMnYyem0wLTMuNWgtMmMwLTMuMjUgMy0zIDMtNSAwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDJoLTJjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNGMwIDIuNS0zIDIuNzUtMyA1eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3lleHQnLFxuICB2aWV3Qm94OiAnMCAwIDMwIDMwJyxcbiAgcGF0aDogJ00yNS41MTcgMjguMTQydi4wOTVoLS4yMDR2LjkwNWgtLjA2NnYtLjkwNWgtLjE5N3YtLjA5NWguNDY3em0uNjY3IDBoLjA2NnYxaC0uMDY2di0uODI1bC0uMjQuNTk1aC0uMDEzbC0uMjQtLjU5NXYuODI1aC0uMDY2di0xaC4wNjZsLjI0Ny42MS4yNDYtLjYxek0xNSAyOC44YzcuNjIyIDAgMTMuOC02LjE3OCAxMy44LTEzLjggMC03LjYyMi02LjE3OC0xMy44LTEzLjgtMTMuOEM3LjM3OCAxLjIgMS4yIDcuMzc4IDEuMiAxNWMwIDcuNjIyIDYuMTc4IDEzLjggMTMuOCAxMy44ek0xNSAwYzguMjg0IDAgMTUgNi43MTYgMTUgMTUgMCA4LjI4NC02LjcxNiAxNS0xNSAxNS04LjI4NCAwLTE1LTYuNzE2LTE1LTE1QzAgNi43MTYgNi43MTYgMCAxNSAwem0uNDUgMTYuNjV2LTEuMmg2LjZ2MS4yaC0yLjd2NS40aC0xLjJ2LTUuNGgtMi43em0tMS41OTktMS4zNWwuODQ5Ljg0OS0yLjYwMSAyLjYwMSAyLjYwMSAyLjYwMS0uODQ5Ljg0OS0yLjYwMS0yLjYwMUw4LjY0OSAyMi4ybC0uODQ5LS44NDkgMi42MDEtMi42MDFMNy44IDE2LjE0OWwuODQ5LS44NDkgMi42MDEgMi42MDEgMi42MDEtMi42MDF6TTE4LjY3NSA5YTIuMTc1IDIuMTc1IDAgMDAtMS44NDcgMy4zMjNsMi45OTUtMi45OTVBMi4xNjMgMi4xNjMgMCAwMDE4LjY3NSA5em0wIDUuNTVhMy4zNzUgMy4zNzUgMCAxMTIuODMzLTUuMjA5bC0zLjc4OSAzLjc4OGEyLjE3NSAyLjE3NSAwIDAwMy4xMy0xLjk1NGgxLjIwMWEzLjM3NSAzLjM3NSAwIDAxLTMuMzc1IDMuMzc1em0tNy40MjUtMy43MzRMMTMuNzggNy44bC45Mi43NzEtMi44NSAzLjM5N3YyLjU4MmgtMS4ydi0yLjU4Mkw3LjggOC41N2wuOTItLjc3MSAyLjUzIDMuMDE2eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3BpbicsXG4gIHZpZXdCb3g6ICcwIDAgMTMgMTgnLFxuICBwYXRoOiAnbTkuMzc1IDBjLTMuNTI0NDY0MjkgMC02LjM3NSAyLjgxNy02LjM3NSA2LjMgMCA0LjcyNSA2LjM3NSAxMS43IDYuMzc1IDExLjdzNi4zNzUtNi45NzUgNi4zNzUtMTEuN2MwLTMuNDgzLTIuODUwNTM1Ny02LjMtNi4zNzUtNi4zem0uMDAwMDAwMTggOC41NTAwMDAwN2MtMS4yNTY3ODU3NiAwLTIuMjc2Nzg1NzktMS4wMDgtMi4yNzY3ODU3OS0yLjI1czEuMDIwMDAwMDMtMi4yNSAyLjI3Njc4NTc5LTIuMjVjMS4yNTY3ODU3MiAwIDIuMjc2Nzg1ODIgMS4wMDggMi4yNzY3ODU4MiAyLjI1cy0xLjAyMDAwMDEgMi4yNS0yLjI3Njc4NTgyIDIuMjV6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnZ2VhcicsXG4gIHBhdGg6ICdNMTIgMTBjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yem03LTdINWEyIDIgMCAwMC0yIDJ2MTRhMiAyIDAgMDAyIDJoMTRhMiAyIDAgMDAyLTJWNWEyIDIgMCAwMC0yLTJ6bS0xLjc1IDljMCAuMjMtLjAyLjQ2LS4wNS42OGwxLjQ4IDEuMTZjLjEzLjExLjE3LjMuMDguNDVsLTEuNCAyLjQyYy0uMDkuMTUtLjI3LjIxLS40My4xNWwtMS43NC0uN2MtLjM2LjI4LS43Ni41MS0xLjE4LjY5bC0uMjYgMS44NWMtLjAzLjE3LS4xOC4zLS4zNS4zaC0yLjhjLS4xNyAwLS4zMi0uMTMtLjM1LS4yOWwtLjI2LTEuODVjLS40My0uMTgtLjgyLS40MS0xLjE4LS42OWwtMS43NC43Yy0uMTYuMDYtLjM0IDAtLjQzLS4xNWwtMS40LTIuNDJhLjM1My4zNTMgMCAwMS4wOC0uNDVsMS40OC0xLjE2Yy0uMDMtLjIzLS4wNS0uNDYtLjA1LS42OSAwLS4yMy4wMi0uNDYuMDUtLjY4bC0xLjQ4LTEuMTZhLjM1My4zNTMgMCAwMS0uMDgtLjQ1bDEuNC0yLjQyYy4wOS0uMTUuMjctLjIxLjQzLS4xNWwxLjc0LjdjLjM2LS4yOC43Ni0uNTEgMS4xOC0uNjlsLjI2LTEuODVjLjAzLS4xNy4xOC0uMy4zNS0uM2gyLjhjLjE3IDAgLjMyLjEzLjM1LjI5bC4yNiAxLjg1Yy40My4xOC44Mi40MSAxLjE4LjY5bDEuNzQtLjdjLjE2LS4wNi4zNCAwIC40My4xNWwxLjQgMi40MmMuMDkuMTUuMDUuMzQtLjA4LjQ1bC0xLjQ4IDEuMTZjLjAzLjIzLjA1LjQ2LjA1LjY5eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2xpZ2h0X2J1bGInLFxuICB2aWV3Qm94OiAnMCAwIDMyIDM1JyxcbiAgcGF0aDogJ00xMS41ODUgMzEuMDU2bDguMzgtLjQ5M3YtLjk4NmwtOC4zOC40OTN6TTExLjU4NSAzMy4wMjhMMTUuNzc1IDM1bDQuMTktMS45NzJWMzEuNTVsLTguMzguNDkzdi45ODZ6bTYuOTI2LS40MDdsLTIuNzM2IDEuMjktMi4xMy0xLjAwNCA0Ljg2Ni0uMjg2ek0xNS43NzUgNy4zOTRjLTQuNjMgMC04LjM4IDMuMjA1LTguMzggOC4zOCAwIDUuMTc3IDQuMTkgNi45MDIgNC4xOSAxMi44MTh2LjQ5M2w4LjM4LS40OTNjMC01LjkxNiA0LjE5LTguMTg4IDQuMTktMTIuODE3YTguMzggOC4zOCAwIDAwLTguMzgtOC4zOHptNS42MTcgMTMuNDhjLTEuMDI1IDEuODM3LTIuMTc0IDMuODkyLTIuMzgxIDYuNzg2bC02LjQ0LjM4Yy0uMTI5LTMuMDEtMS4yOS01LjAyMS0yLjMyLTYuODA4LS40OTMtLjgtLjkyOC0xLjYzNi0xLjI5OS0yLjVoMTMuNTU2Yy0uMzI1LjcwOC0uNzA0IDEuNDAzLTEuMTE2IDIuMTQyem0xLjQ3OS0zLjEyOEg4LjYyN2E3Ljc5MyA3Ljc5MyAwIDAxLS4yNDctMS45NzFjMC00LjM1MyAzLjA0Mi03LjM5NSA3LjM5NS03LjM5NWE3LjM5NCA3LjM5NCAwIDAxNy4zOTQgNy4zOTUgNi43MzkgNi43MzkgMCAwMS0uMyAxLjk3MWguMDAyek0yNi42MiAxNS4yODJoNC45M3YxaC00Ljkzek0yMy4wOTQgNy43NTZsMi4wOTEtMi4wOTEuNjk4LjY5Ny0yLjA5MiAyLjA5MnpNMTUuMjgyIDBoMXY0LjkzaC0xek01LjY2NiA2LjM2MmwuNjk3LS42OTcgMi4wOTEgMi4wOTEtLjY5Ny42OTd6TTAgMTUuMjgyaDQuOTN2MUgweidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3JlY2VpcHQnLFxuICB2aWV3Qm94OiAnMCAwIDE4IDE4JyxcbiAgcGF0aDogJ004Ljk5MSAwQzQuMDIzIDAgMCA0LjAzMiAwIDlzNC4wMjMgOSA4Ljk5MSA5QzEzLjk2OCAxOCAxOCAxMy45NjggMTggOXMtNC4wMzItOS05LjAwOS05em0zLjgxNiAxNC40TDkgMTIuMTA1IDUuMTkzIDE0LjRsMS4wMDgtNC4zMjktMy4zNTctMi45MDcgNC40MjgtLjM3OEw5IDIuN2wxLjcyOCA0LjA3NyA0LjQyOC4zNzgtMy4zNTcgMi45MDd6J1xufSk7XG4iLCJpbXBvcnQgdGh1bWJJY29uIGZyb20gJy4vdGh1bWIuanMnO1xuaW1wb3J0IHJlY2VpcHRJY29uIGZyb20gJy4vcmVjZWlwdC5qcyc7XG5pbXBvcnQgcGFudGhlb25JY29uIGZyb20gJy4vcGFudGhlb24uanMnO1xuaW1wb3J0IG1pY0ljb24gZnJvbSAnLi9taWMuanMnO1xuaW1wb3J0IGRpcmVjdGlvbnNJY29uIGZyb20gJy4vZGlyZWN0aW9ucy5qcyc7XG5pbXBvcnQgY2FsZW5kYXJJY29uIGZyb20gJy4vY2FsZW5kYXIuanMnO1xuaW1wb3J0IGNhbGxvdXRJY29uIGZyb20gJy4vY2FsbG91dC5qcyc7XG5pbXBvcnQgaW5mb0ljb24gZnJvbSAnLi9pbmZvLmpzJztcbmltcG9ydCBicmllZmNhc2VJY29uIGZyb20gJy4vYnJpZWZjYXNlLmpzJztcbmltcG9ydCBrYWJvYkljb24gZnJvbSAnLi9rYWJvYi5qcyc7XG5pbXBvcnQgcGVyc29uSWNvbiBmcm9tICcuL3BlcnNvbi5qcyc7XG5pbXBvcnQgbWFnbmlmeWluZ0dsYXNzSWNvbiBmcm9tICcuL21hZ25pZnlpbmdfZ2xhc3MuanMnO1xuaW1wb3J0IG9mZmljZUljb24gZnJvbSAnLi9vZmZpY2UuanMnO1xuaW1wb3J0IGxpbmtJY29uIGZyb20gJy4vbGluay5qcyc7XG5pbXBvcnQgd2luZG93SWNvbiBmcm9tICcuL3dpbmRvdy5qcyc7XG5pbXBvcnQgcGhvbmVJY29uIGZyb20gJy4vcGhvbmUuanMnO1xuaW1wb3J0IHRhZ0ljb24gZnJvbSAnLi90YWcuanMnO1xuaW1wb3J0IGRvY3VtZW50SWNvbiBmcm9tICcuL2RvY3VtZW50LmpzJztcbmltcG9ydCBjaGV2cm9uSWNvbiBmcm9tICcuL2NoZXZyb24uanMnO1xuaW1wb3J0IHN1cHBvcnRJY29uIGZyb20gJy4vc3VwcG9ydC5qcyc7XG5pbXBvcnQgeWV4dEljb24gZnJvbSAnLi95ZXh0LmpzJztcbmltcG9ydCBwaW5JY29uIGZyb20gJy4vcGluLmpzJztcbmltcG9ydCBnZWFySWNvbiBmcm9tICcuL2dlYXIuanMnO1xuaW1wb3J0IGxpZ2h0QnVsYkljb24gZnJvbSAnLi9saWdodF9idWxiLmpzJztcbmltcG9ydCBzdGFySWNvbiBmcm9tICcuL3N0YXIuanMnO1xuXG5jb25zdCBpY29uc0FycmF5ID0gW1xuICB0aHVtYkljb24sXG4gIHJlY2VpcHRJY29uLFxuICBwYW50aGVvbkljb24sXG4gIG1pY0ljb24sXG4gIGRpcmVjdGlvbnNJY29uLFxuICBjYWxlbmRhckljb24sXG4gIGNhbGxvdXRJY29uLFxuICBpbmZvSWNvbixcbiAgYnJpZWZjYXNlSWNvbixcbiAga2Fib2JJY29uLFxuICBwZXJzb25JY29uLFxuICBtYWduaWZ5aW5nR2xhc3NJY29uLFxuICBvZmZpY2VJY29uLFxuICBsaW5rSWNvbixcbiAgd2luZG93SWNvbixcbiAgcGhvbmVJY29uLFxuICB0YWdJY29uLFxuICBkb2N1bWVudEljb24sXG4gIGNoZXZyb25JY29uLFxuICBzdXBwb3J0SWNvbixcbiAgeWV4dEljb24sXG4gIHBpbkljb24sXG4gIGdlYXJJY29uLFxuICBsaWdodEJ1bGJJY29uXG5dO1xuXG5jb25zdCBJY29ucyA9IHt9O1xuXG5pY29uc0FycmF5LmZvckVhY2goaWNvbiA9PiB7XG4gIEljb25zW2ljb24ubmFtZV0gPSBpY29uLm1hcmt1cCgpO1xufSk7XG5cbkljb25zLmRlZmF1bHQgPSBzdGFySWNvbi5tYXJrdXAoKTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbnM7XG4iLCIvKiogQG1vZHVsZSBJY29uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBJY29ucyBmcm9tICcuLi8uLi9pY29ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvKipcbiAgICogSWNvbkNvbXBvbmVudFxuICAgKiBAcGFyYW0gb3B0c1xuICAgKiBAcGFyYW0gb3B0cy5pY29uTmFtZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gb3B0cy5jdXN0b21JY29uIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBvcHRzLmljb25Vcmwge3N0cmluZ31cbiAgICovXG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIC8qKlxuICAgICAqIG5hbWUgb2YgYW4gaWNvbiBmcm9tIHRoZSBkZWZhdWx0IGljb24gc2V0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmljb25OYW1lID0gb3B0cy5pY29uTmFtZSB8fCAnZGVmYXVsdCc7XG5cbiAgICAvKipcbiAgICAgKiB0aGUgbWFya3VwIGZvciBhIGZ1bGx5IGN1c3RvbSBpY29uXG4gICAgICogQHR5cGUgeyp8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmN1c3RvbUljb24gPSBvcHRzLmN1c3RvbUljb24gfHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiB0aGUgdXJsIHRvIGEgY3VzdG9tIGltYWdlIGljb25cbiAgICAgKiBAdHlwZSB7bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmljb25VcmwgPSBvcHRzLmljb25VcmwgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXR0ZXIgZm9yIHRoZSBpbWFnZSBwYXN0ZWQgdG8gaGFuZGxlYmFyc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGltYWdlICgpIHtcbiAgICBpZiAodGhpcy5jdXN0b21JY29uKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXN0b21JY29uO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmljb25VcmwpIHtcbiAgICAgIHJldHVybiBgPGltZyBzcmM9XCIke3RoaXMuaWNvblVybH1cIiBhbHQ9XCJcIiBjbGFzcz1cIkljb24taW1hZ2VcIj5gO1xuICAgIH1cblxuICAgIGlmIChJY29uc1t0aGlzLmljb25OYW1lXSkge1xuICAgICAgcmV0dXJuIEljb25zW3RoaXMuaWNvbk5hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiBJY29ucy5kZWZhdWx0O1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0ljb25Db21wb25lbnQnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdpY29ucy9pY29uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBhbGxvd2luZyBkdXBsaWNhdGVzXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIG92ZXJyaWRlcyBkZWZhdWx0IGZ1bmN0aW9uYWxpdHkgdG8gcHJvdmlkZSBuYW1lIGFuZCBtYXJrdXBcbiAgICogQHBhcmFtIGRhdGFcbiAgICogQHJldHVybnMge0ljb25Db21wb25lbnR9XG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgbmFtZTogdGhpcy5pY29uTmFtZSA/IHRoaXMuaWNvbk5hbWUgOiAnY3VzdG9tJ1xuICAgIH0pKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi9jb21wb25lbnRtYW5hZ2VyJztcblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XG5cbmltcG9ydCBOYXZpZ2F0aW9uQ29tcG9uZW50IGZyb20gJy4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uY29tcG9uZW50JztcblxuaW1wb3J0IFNlYXJjaENvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9zZWFyY2hjb21wb25lbnQnO1xuaW1wb3J0IEZpbHRlclNlYXJjaENvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9maWx0ZXJzZWFyY2hjb21wb25lbnQnO1xuaW1wb3J0IEF1dG9Db21wbGV0ZUNvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9hdXRvY29tcGxldGVjb21wb25lbnQnO1xuXG5pbXBvcnQgRmlsdGVyQm94Q29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9maWx0ZXJib3hjb21wb25lbnQnO1xuaW1wb3J0IEZpbHRlck9wdGlvbnNDb21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL2ZpbHRlcm9wdGlvbnNjb21wb25lbnQnO1xuaW1wb3J0IFJhbmdlRmlsdGVyQ29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9yYW5nZWZpbHRlcmNvbXBvbmVudCc7XG5pbXBvcnQgRGF0ZVJhbmdlRmlsdGVyQ29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9kYXRlcmFuZ2VmaWx0ZXJjb21wb25lbnQnO1xuaW1wb3J0IER5bmFtaWNGaWx0ZXJzQ29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9keW5hbWljZmlsdGVyc2NvbXBvbmVudCc7XG5pbXBvcnQgR2VvTG9jYXRpb25Db21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL2dlb2xvY2F0aW9uY29tcG9uZW50JztcblxuaW1wb3J0IERpcmVjdEFuc3dlckNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvZGlyZWN0YW5zd2VyY29tcG9uZW50JztcbmltcG9ydCBSZXN1bHRzQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9yZXN1bHRzY29tcG9uZW50JztcbmltcG9ydCBBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9hY2NvcmRpb25yZXN1bHRzY29tcG9uZW50LmpzJztcbmltcG9ydCBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy91bml2ZXJzYWxyZXN1bHRzY29tcG9uZW50JztcblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvbG9jYXRpb25yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvZXZlbnRyZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmltcG9ydCBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcGVvcGxlcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5pbXBvcnQgTWFwQ29tcG9uZW50IGZyb20gJy4vbWFwL21hcGNvbXBvbmVudCc7XG5pbXBvcnQgUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IGZyb20gJy4vcXVlc3Rpb25zL3F1ZXN0aW9uc3VibWlzc2lvbmNvbXBvbmVudCc7XG5cbmltcG9ydCBJY29uQ29tcG9uZW50IGZyb20gJy4vaWNvbnMvaWNvbmNvbXBvbmVudC5qcyc7XG5cbmV4cG9ydCBjb25zdCBDT01QT05FTlRfTUFOQUdFUiA9IG5ldyBDb21wb25lbnRNYW5hZ2VyKClcbi8vIENvcmUgQ29tcG9uZW50XG4gIC5yZWdpc3RlcihDb21wb25lbnQpXG5cbi8vIE5hdmlnYXRpb24gQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoTmF2aWdhdGlvbkNvbXBvbmVudClcblxuLy8gU2VhcmNoIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKFNlYXJjaENvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEZpbHRlclNlYXJjaENvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEF1dG9Db21wbGV0ZUNvbXBvbmVudClcblxuLy8gRmlsdGVyIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKEZpbHRlckJveENvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEZpbHRlck9wdGlvbnNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihSYW5nZUZpbHRlckNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKERhdGVSYW5nZUZpbHRlckNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKER5bmFtaWNGaWx0ZXJzQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoR2VvTG9jYXRpb25Db21wb25lbnQpXG5cbi8vIFJlc3VsdHMgQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoRGlyZWN0QW5zd2VyQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFJlc3VsdHNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihSZXN1bHRzSXRlbUNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEFjY29yZGlvblJlc3VsdHNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50KVxuXG4gIC5yZWdpc3RlcihNYXBDb21wb25lbnQpXG5cbi8vIFF1ZXN0aW9ucyBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQpXG5cbi8vIEhlbHBlciBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihJY29uQ29tcG9uZW50KTtcbiIsIi8qKiBAbW9kdWxlIFRlbXBsYXRlTG9hZGVyICovXG5cbmltcG9ydCBET00gZnJvbSAnLi4vZG9tL2RvbSc7XG5pbXBvcnQgeyBDT01QSUxFRF9URU1QTEFURVNfVVJMIH0gZnJvbSAnLi4vLi4vY29yZS9jb25zdGFudHMnO1xuXG4vKipcbiAqIFRlbXBsYXRlTG9hZGVyIGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBsb2FkaW5nIHRlbXBsYXRlcyBhc3luY2hyb25vdXNseVxuICogZnJvbSB0aGUgc2VydmVyIGFuZCByZWdpc3RlcnMgdGhlbSB3aXRoIHRoZSBwcm9wZXIgcmVuZGVyZXIuXG4gKiBJdCBhbHNvIGFsbG93cyB5b3UgdG8gYXNzaWduIHRoZW0gc3luY2hyb25vdXNseS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVMb2FkZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgaWYgKCFUZW1wbGF0ZUxvYWRlci5zZXRJbnN0YW5jZSh0aGlzKSkge1xuICAgICAgcmV0dXJuIFRlbXBsYXRlTG9hZGVyLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHVybCB0byBmZXRjaCBjb21waWxlZCB0ZW1wbGF0ZXMgZnJvbVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZVVybCA9IGNvbmZpZy50ZW1wbGF0ZVVybCB8fCBDT01QSUxFRF9URU1QTEFURVNfVVJMO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVzID0ge307XG4gICAgdGhpcy5fb25Mb2FkZWQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB0aGlzLl9pbml0KCk7XG4gIH1cblxuICBzdGF0aWMgc2V0SW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIF9pbml0ICgpIHtcbiAgICB0aGlzLmZldGNoVGVtcGxhdGVzKCk7XG4gIH1cblxuICBmZXRjaFRlbXBsYXRlcyAoKSB7XG4gICAgLy8gSWYgd2UgYWxyZWFkeSBoYXZlIHRlbXBsYXRlcyBsb2FkZWQsIGRvIG5vdGhpbmdcbiAgICBsZXQgbm9kZSA9IERPTS5xdWVyeSgnI3lleHQtYW5zd2Vycy10ZW1wbGF0ZXMnKTtcbiAgICBpZiAobm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEluamVjdCBhIHNjcmlwdCB0byBmZXRjaCB0aGUgY29tcGlsZWQgdGVtcGxhdGVzLFxuICAgIC8vIHdyYXBwaW5nIGl0IGEgUHJvbWlzZSBmb3IgY2xlYW5saW5lc3NcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICAgIGlkOiAneWV4dC1hbnN3ZXJzLXRlbXBsYXRlcycsXG4gICAgICAgIG9ubG9hZDogcmVzb2x2ZSxcbiAgICAgICAgb25lcnJvcjogcmVqZWN0LFxuICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgc3JjOiB0aGlzLl90ZW1wbGF0ZVVybFxuICAgICAgfSk7XG5cbiAgICAgIERPTS5hcHBlbmQoJ2JvZHknLCBzY3JpcHQpO1xuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIEltcGxtZW5ldCBlcnJvciBoYW5kbGluZyBoZXJlIChlLmcuIHJlcXVlc3QgY291bGQgZmFpbClcbiAgICAgICAgY29uc29sZS5sb2coJ1RlbXBsYXRlcyBsb2FkZWQgc3VjY2Vzc2Z1bGx5IScpO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXIgdGhlIHRlbXBsYXRlcyBpbnRlcm5hbGx5IHNvIHRoYXQgdGhleSBjYW4gYmUgbGF0ZXIgY29uc3VtZWRcbiAgICogKGUuZy4gYnkgY29tcG9uZW50cyBhbmQgcmVuZGVyZXJzKSB3aXRoIGNvbnZpZW5pZW5jZS5cbiAgICpcbiAgICogYGZldGNoVGVtcGxhdGVzYCB3aWxsIGF1dG9tYXRpY2FsbHkgY2FsbCB0aGlzLCBwcm92aWRpbmcgdGhlIGNvbXBpbGVkIHRlbXBsYXRlcyBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICByZWdpc3RlciAodGVtcGxhdGVzKSB7XG4gICAgdGhpcy5fdGVtcGxhdGVzID0gdGVtcGxhdGVzO1xuXG4gICAgLy8gTm90aWZ5IG91ciBjb25zdW1lcnMgdGhhdCB0aGUgdGVtcGxhdGVzIGFyZSBoZXJlIDopXG4gICAgdGhpcy5fb25Mb2FkZWQodGhpcy5fdGVtcGxhdGVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9uTG9hZGVkIChjYikge1xuICAgIHRoaXMuX29uTG9hZGVkID0gY2I7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgKHRlbXBsYXRlTmFtZSkge1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXNbdGVtcGxhdGVOYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIFRoZSBpbnRlcm5hbCB0ZW1wbGF0ZSBjb2xsZWN0aW9uXG4gICAqL1xuICBnZXRUZW1wbGF0ZXMgKCkge1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbmV4cG9ydCB7IENPTVBPTkVOVF9NQU5BR0VSIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRE9NIH0gZnJvbSAnLi9kb20vZG9tJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi9kb20vc2VhcmNocGFyYW1zJztcblxuZXhwb3J0IHsgUmVuZGVyZXJzIH0gZnJvbSAnLi9yZW5kZXJpbmcvY29uc3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZW1wbGF0ZUxvYWRlciB9IGZyb20gJy4vcmVuZGVyaW5nL3RlbXBsYXRlbG9hZGVyJztcbiIsIi8qKiBAbW9kdWxlIEVycm9yUmVwb3J0ZXIgKi9cblxuaW1wb3J0IHsgQW5zd2Vyc0Jhc2VFcnJvciB9IGZyb20gJy4vZXJyb3JzJztcblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCB7IExJQl9WRVJTSU9OIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBFcnJvclJlcG9ydGVyIGlzIHVzZWQgZm9yIHJlcG9ydGluZyBlcnJvcnMgdG8gdGhlIHNlcnZlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvclJlcG9ydGVyIHtcbiAgY29uc3RydWN0b3IgKGFwaUtleSwgYW5zd2Vyc0tleSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBhcGlLZXkgdG8gdXNlIGZvciByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuYXBpS2V5ID0gYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFuc3dlcnNLZXkgdG8gdXNlIHdoZW4gcmVwb3J0aW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmFuc3dlcnNLZXkgPSBhbnN3ZXJzS2V5O1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcG9ydCBzZW5kcyBhIG5ldHdvcmsgcmVxdWVzdCB0byB0aGUgc2VydmVyIHRvIGJlIGxvZ2dlZFxuICAgKiBAcGFyYW0ge0Fuc3dlcnNCYXNlRXJyb3J9IFRoZSBlcnJvciB0byBiZSByZXBvcnRlZFxuICAgKi9cbiAgcmVwb3J0IChlcnIpIHtcbiAgICBpZiAoIShlcnIgaW5zdGFuY2VvZiBBbnN3ZXJzQmFzZUVycm9yKSB8fCBlcnIucmVwb3J0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnIucmVwb3J0ZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvZXJyb3JzJyxcbiAgICAgIGFwaUtleTogdGhpcy5hcGlLZXksXG4gICAgICB2ZXJzaW9uOiAyMDE5MDMwMSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnZXJyb3InOiBlcnIudG9Kc29uKCksXG4gICAgICAgICdsaWJWZXJzaW9uJzogTElCX1ZFUlNJT04sXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5hbnN3ZXJzS2V5XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXF1ZXN0LmdldCgpXG4gICAgICAuY2F0Y2goY29uc29sZS5lcnIpO1xuXG4gICAgcmV0dXJuIGVycjtcbiAgfVxufVxuIiwiaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi9kb20vc2VhcmNocGFyYW1zJztcbmltcG9ydCB7IEFuc3dlcnNTdG9yYWdlRXJyb3IgfSBmcm9tICcuLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuXG4vKiogQG1vZHVsZSBQZXJzaXN0ZW50U3RvcmFnZSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzaXN0ZW50U3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHBhcmFtcyBtb2RlbFxuICAgICAqIEB0eXBlIHtTZWFyY2hQYXJhbXN9XG4gICAgICovXG4gICAgdGhpcy5fcGFyYW1zID0gbmV3IFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBoaXN0b3J5IGVkaXQgdGltZXIsIGlmIGFueVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5faGlzdG9yeVRpbWVyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGxpc3RlbmVycyB0byBldmVyeSBzdG9yYWdlIHVwZGF0ZVxuICAgICAqIEB0eXBlIHtmdW5jdGlvbltdfVxuICAgICAqL1xuICAgIHRoaXMuX3VwZGF0ZUxpc3RlbmVyID0gY29uZmlnLnVwZGF0ZUxpc3RlbmVyIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxpc3Qgb2YgbGlzdGVuZXJzIHRvIHN0b3JhZ2UgcmVzZXRzXG4gICAgICogQHR5cGUge2Z1bmN0aW9uW119XG4gICAgICovXG4gICAgdGhpcy5fcmVzZXRMaXN0ZW5lciA9IGNvbmZpZy5yZXNldExpc3RlbmVyIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgd2luZG93Lm9ucG9wc3RhdGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9wYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICAgIHRoaXMuX2NhbGxMaXN0ZW5lcih0aGlzLl91cGRhdGVMaXN0ZW5lcik7XG4gICAgICB0aGlzLl9jYWxsTGlzdGVuZXIodGhpcy5fcmVzZXRMaXN0ZW5lcik7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnQgdGhlIGdpdmVuIGtleS92YWx1ZSBwYWlyIGludG8gc3RvcmFnZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgdG8gaW5zZXJ0IHRoZSBkYXRhIGluXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUgZGF0YSB0byBpbnNlcnRcbiAgICovXG4gIHNldCAoa2V5LCBkYXRhKSB7XG4gICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc1N0b3JhZ2VFcnJvcignU3RvcmFnZSBkYXRhIGtleSBtdXN0IGJlIGEgc3RyaW5nJywga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICBsZXQgbmV3RGF0YSA9IGRhdGE7XG4gICAgaWYgKHR5cGVvZiBkYXRhICE9PSAnc3RyaW5nJykge1xuICAgICAgbmV3RGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICB0aGlzLl9wYXJhbXMuc2V0KGtleSwgbmV3RGF0YSk7XG4gICAgdGhpcy5fdXBkYXRlSGlzdG9yeSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSB0aGUgZ2l2ZW4ga2V5IGZyb20gc3RvcmFnZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgdG8gZGVsZXRlXG4gICAqL1xuICBkZWxldGUgKGtleSkge1xuICAgIHRoaXMuX3BhcmFtcy5kZWxldGUoa2V5KTtcbiAgICB0aGlzLl91cGRhdGVIaXN0b3J5KCk7XG4gIH1cblxuICBfdXBkYXRlSGlzdG9yeSAoKSB7XG4gICAgaWYgKHRoaXMuX2hpc3RvcnlUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2hpc3RvcnlUaW1lcik7XG4gICAgfVxuXG4gICAgLy8gYmF0Y2ggdXBkYXRlIGNhbGxzIGFjcm9zcyBjb21wb25lbnRzIHRvIGF2b2lkIHVwZGF0aW5nIHRoZSB1cmwgdG9vIG11Y2hcbiAgICB0aGlzLl9oaXN0b3J5VGltZXIgPSBzZXRUaW1lb3V0KFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLl9oaXN0b3J5VGltZXIgPSBudWxsO1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgYD8ke3RoaXMuX3BhcmFtcy50b1N0cmluZygpfWApO1xuICAgICAgICB0aGlzLl9jYWxsTGlzdGVuZXIodGhpcy5fdXBkYXRlTGlzdGVuZXIpO1xuICAgICAgfSxcbiAgICAgIDEwMCk7XG4gIH1cblxuICAvKipcbiAgICogSW52b2tlIHRoZSBnaXZlbiBsaXN0IG9mIGNhbGxiYWNrcyB3aXRoIHRoZSBjdXJyZW50IHN0b3JhZ2UgZGF0YVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uW119IGxpc3RlbmVycyBUaGUgY2FsbGJhY2tzIHRvIGludm9rZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NhbGxMaXN0ZW5lciAobGlzdGVuZXIpIHtcbiAgICBsaXN0ZW5lcih0aGlzLmdldEFsbCgpLCB0aGlzLl9wYXJhbXMudG9TdHJpbmcoKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCB0aGUga2V5L3ZhbHVlIHBhaXJzIGluIHN0b3JhZ2VcbiAgICovXG4gIGdldEFsbCAoKSB7XG4gICAgY29uc3QgYWxsUGFyYW1zID0ge307XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIHRoaXMuX3BhcmFtcy5lbnRyaWVzKCkpIHtcbiAgICAgIGFsbFBhcmFtc1trZXldID0gdmFsO1xuICAgIH1cbiAgICByZXR1cm4gYWxsUGFyYW1zO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5pbXBvcnQgQ29yZSBmcm9tICcuL2NvcmUvY29yZSc7XG5cbmltcG9ydCB7XG4gIFRlbXBsYXRlTG9hZGVyLFxuICBDT01QT05FTlRfTUFOQUdFUixcbiAgUmVuZGVyZXJzLFxuICBET01cbn0gZnJvbSAnLi91aS9pbmRleCc7XG5cbmltcG9ydCBFcnJvclJlcG9ydGVyIGZyb20gJy4vY29yZS9lcnJvcnMvZXJyb3JyZXBvcnRlcic7XG5pbXBvcnQgeyBBbmFseXRpY3NSZXBvcnRlciB9IGZyb20gJy4vY29yZSc7XG5pbXBvcnQgUGVyc2lzdGVudFN0b3JhZ2UgZnJvbSAnLi91aS9zdG9yYWdlL3BlcnNpc3RlbnRzdG9yYWdlJztcbmltcG9ydCBHbG9iYWxTdG9yYWdlIGZyb20gJy4vY29yZS9zdG9yYWdlL2dsb2JhbHN0b3JhZ2UnO1xuXG4vKipcbiAqIFRoZSBtYWluIEFuc3dlcnMgaW50ZXJmYWNlXG4gKi9cbmNsYXNzIEFuc3dlcnMge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgaWYgKCFBbnN3ZXJzLnNldEluc3RhbmNlKHRoaXMpKSB7XG4gICAgICByZXR1cm4gQW5zd2Vycy5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIG9mIHRoZSByZW5kZXJlciB0byB1c2UgZm9yIHRoZSBjb21wb25lbnRzXG4gICAgICogVGhpcyBpcyBwcm92aWRlZCBkdXJpbmcgaW5pdGlhbGl6YXRpb24uXG4gICAgICogQHR5cGUge1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXJzLkhhbmRsZWJhcnMoKTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlclxuICAgICAqIEB0eXBlIHtDb21wb25lbnRNYW5hZ2VyfVxuICAgICAqL1xuICAgIHRoaXMuY29tcG9uZW50cyA9IENPTVBPTkVOVF9NQU5BR0VSO1xuXG4gICAgLyoqXG4gICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiB0byBpbnZva2Ugb25jZSB0aGUgbGlicmFyeSBpcyByZWFkeS5cbiAgICAgKiBUeXBpY2FsbHkgZmlyZWQgYWZ0ZXIgdGVtcGxhdGVzIGFyZSBmZXRjaGVkIGZyb20gc2VydmVyIGZvciByZW5kZXJpbmcuXG4gICAgICovXG4gICAgdGhpcy5fb25SZWFkeSA9IGZ1bmN0aW9uICgpIHt9O1xuICB9XG5cbiAgc3RhdGljIHNldEluc3RhbmNlIChpbnN0YW5jZSkge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cblxuICBpbml0IChjb25maWcpIHtcbiAgICBjb25zdCBnbG9iYWxTdG9yYWdlID0gbmV3IEdsb2JhbFN0b3JhZ2UoKTtcbiAgICBjb25zdCBwZXJzaXN0ZW50U3RvcmFnZSA9IG5ldyBQZXJzaXN0ZW50U3RvcmFnZSh7XG4gICAgICB1cGRhdGVMaXN0ZW5lcjogY29uZmlnLm9uU3RhdGVDaGFuZ2UsXG4gICAgICByZXNldExpc3RlbmVyOiBkYXRhID0+IGdsb2JhbFN0b3JhZ2Uuc2V0QWxsKGRhdGEpXG4gICAgfSk7XG4gICAgZ2xvYmFsU3RvcmFnZS5zZXRBbGwocGVyc2lzdGVudFN0b3JhZ2UuZ2V0QWxsKCkpO1xuXG4gICAgY29uc3QgY29yZSA9IG5ldyBDb3JlKHtcbiAgICAgIGFwaUtleTogY29uZmlnLmFwaUtleSxcbiAgICAgIGdsb2JhbFN0b3JhZ2U6IGdsb2JhbFN0b3JhZ2UsXG4gICAgICBwZXJzaXN0ZW50U3RvcmFnZTogcGVyc2lzdGVudFN0b3JhZ2UsXG4gICAgICBhbnN3ZXJzS2V5OiBjb25maWcuYW5zd2Vyc0tleSxcbiAgICAgIGZpZWxkRm9ybWF0dGVyczogY29uZmlnLmZpZWxkRm9ybWF0dGVycyxcbiAgICAgIGxvY2FsZTogY29uZmlnLmxvY2FsZVxuICAgIH0pO1xuXG4gICAgaWYgKGNvbmZpZy5vblN0YXRlQ2hhbmdlICYmIHR5cGVvZiBjb25maWcub25TdGF0ZUNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uZmlnLm9uU3RhdGVDaGFuZ2UocGVyc2lzdGVudFN0b3JhZ2UuZ2V0QWxsKCksIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyKDEpKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNcbiAgICAgIC5zZXRDb3JlKGNvcmUpXG4gICAgICAuc2V0UmVuZGVyZXIodGhpcy5yZW5kZXJlcik7XG5cbiAgICBpZiAoY29uZmlnLmJ1c2luZXNzSWQpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5zZXRBbmFseXRpY3NSZXBvcnRlcihcbiAgICAgICAgbmV3IEFuYWx5dGljc1JlcG9ydGVyKFxuICAgICAgICAgIGNvcmUsXG4gICAgICAgICAgY29uZmlnLmFuc3dlcnNLZXksXG4gICAgICAgICAgY29uZmlnLmJ1c2luZXNzSWQsXG4gICAgICAgICAgY29uZmlnLmFuYWx5dGljc09wdGlvbnMpXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMuX29uUmVhZHkgPSBjb25maWcub25SZWFkeSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIGlmIChjb25maWcudXNlVGVtcGxhdGVzID09PSBmYWxzZSB8fCBjb25maWcudGVtcGxhdGVCdW5kbGUpIHtcbiAgICAgIGlmIChjb25maWcudGVtcGxhdGVCdW5kbGUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbml0KGNvbmZpZy50ZW1wbGF0ZUJ1bmRsZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX29uUmVhZHkoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIFRlbXBsYXRlcyBhcmUgY3VycmVudGx5IGRvd25sb2FkZWQgc2VwYXJhdGVseSBmcm9tIHRoZSBDT1JFIGFuZCBVSSBidW5kbGUuXG4gICAgLy8gRnV0dXJlIGVuaGFuY2VtZW50IGlzIHRvIHNoaXAgdGhlIGNvbXBvbmVudHMgd2l0aCB0ZW1wbGF0ZXMgaW4gYSBzZXBhcmF0ZSBidW5kbGUuXG4gICAgdGhpcy50ZW1wbGF0ZXMgPSBuZXcgVGVtcGxhdGVMb2FkZXIoe1xuICAgICAgdGVtcGxhdGVVcmw6IGNvbmZpZy50ZW1wbGF0ZVVybFxuICAgIH0pLm9uTG9hZGVkKCh0ZW1wbGF0ZXMpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuaW5pdCh0ZW1wbGF0ZXMpO1xuXG4gICAgICB0aGlzLl9vblJlYWR5KCk7XG4gICAgfSk7XG5cbiAgICBpZiAoIWNvbmZpZy5zdXBwcmVzc0Vycm9yUmVwb3J0cykge1xuICAgICAgdGhpcy5fZXJyb3JSZXBvcnRlciA9IG5ldyBFcnJvclJlcG9ydGVyKGNvbmZpZy5hcGlLZXksIGNvbmZpZy5hbnN3ZXJzS2V5KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGUgPT4gdGhpcy5fZXJyb3JSZXBvcnRlci5yZXBvcnQoZS5lcnJvcikpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VuaGFuZGxlZHJlamVjdGlvbicsIGUgPT4gdGhpcy5fZXJyb3JSZXBvcnRlci5yZXBvcnQoZS5lcnJvcikpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZG9tUmVhZHkgKGNiKSB7XG4gICAgRE9NLm9uUmVhZHkoY2IpO1xuICB9XG5cbiAgb25SZWFkeSAoY2IpIHtcbiAgICB0aGlzLl9vblJlYWR5ID0gY2I7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRDb21wb25lbnQgKHR5cGUsIG9wdHMpIHtcbiAgICBpZiAodHlwZW9mIG9wdHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHRzID0ge1xuICAgICAgICBjb250YWluZXI6IG9wdHNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzLmNyZWF0ZSh0eXBlLCBvcHRzKS5tb3VudCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY3JlYXRlQ29tcG9uZW50IChvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50cy5jcmVhdGUoJ0NvbXBvbmVudCcsIG9wdHMpLm1vdW50KCk7XG4gIH1cblxuICByZWdpc3RlckhlbHBlciAobmFtZSwgY2IpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlZ2lzdGVySGVscGVyKG5hbWUsIGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5jb25zdCBBTlNXRVJTID0gbmV3IEFuc3dlcnMoKTtcbmV4cG9ydCBkZWZhdWx0IEFOU1dFUlM7XG4iXSwibmFtZXMiOlsiTWV0aG9kcyIsIkdFVCIsIlBPU1QiLCJQVVQiLCJERUxFVEUiLCJIdHRwUmVxdWVzdGVyIiwidXJsIiwiZGF0YSIsIm9wdHMiLCJyZXF1ZXN0IiwiZW5jb2RlUGFyYW1zIiwiT2JqZWN0IiwiYXNzaWduIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjcmVkZW50aWFscyIsInVuZGVmaW5lZCIsIm1ldGhvZCIsImZldGNoIiwibmF2aWdhdG9yIiwic2VuZEJlYWNvbiIsInBhcmFtcyIsImhhc1BhcmFtIiwiaW5kZXhPZiIsInNlYXJjaFF1ZXJ5Iiwia2V5IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiTElCX1ZFUlNJT04iLCJBUElfQkFTRV9VUkwiLCJDT01QSUxFRF9URU1QTEFURVNfVVJMIiwiQU5BTFlUSUNTX0JBU0VfVVJMIiwiU2VhcmNoUGFyYW1zIiwiX3BhcmFtcyIsIndpbmRvdyIsIlVSTFNlYXJjaFBhcmFtcyIsInBhcnNlIiwic2VhcmNoIiwic2xpY2UiLCJlbmNvZGVkUGFyYW1zIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwia2V5VmFsIiwiZGVjb2RlIiwicXVlcnkiLCJTdHJpbmciLCJuYW1lIiwidmFsdWUiLCJzdHJpbmciLCJwdXNoIiwiZW5jb2RlIiwiam9pbiIsImVudHJpZXMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwibWF0Y2giLCJBcGlSZXF1ZXN0IiwiX3JlcXVlc3RlciIsIl9iYXNlVXJsIiwiYmFzZVVybCIsIl9lbmRwb2ludCIsImVuZHBvaW50IiwiX2FwaUtleSIsImFwaUtleSIsIl92ZXJzaW9uIiwidmVyc2lvbiIsImdldCIsInBvc3QiLCJiYXNlUGFyYW1zIiwidXJsUGFyYW1zIiwibG9jYXRpb24iLCJ0b1N0cmluZyIsImhhcyIsImtleXMiLCJmb3JFYWNoIiwiQW5zd2Vyc0Jhc2VFcnJvciIsImVycm9yQ29kZSIsIm1lc3NhZ2UiLCJib3VuZGFyeSIsImNhdXNlZEJ5IiwiZXJyb3JNZXNzYWdlIiwicmVwb3J0ZWQiLCJidWlsdGluRXJyb3IiLCJlcnJvciIsIkFuc3dlcnNCYXNpY0Vycm9yIiwic3RhY2siLCJFcnJvciIsIkFuc3dlcnNDb21wb25lbnRFcnJvciIsImNvbXBvbmVudCIsIkFuc3dlcnNFbmRwb2ludEVycm9yIiwiQW5zd2Vyc0NvcmVFcnJvciIsIkFuc3dlcnNTdG9yYWdlRXJyb3IiLCJzdG9yYWdlS2V5IiwiQW5zd2Vyc0FuYWx5dGljc0Vycm9yIiwiZXZlbnQiLCJTZWFyY2hBcGkiLCJjb25maWciLCJhbnN3ZXJzS2V5IiwiX2Fuc3dlcnNLZXkiLCJsb2NhbGUiLCJfbG9jYWxlIiwidmVydGljYWxLZXkiLCJpbnB1dCIsImZpbHRlciIsImZhY2V0RmlsdGVyIiwibGltaXQiLCJvZmZzZXQiLCJpZCIsImlzRHluYW1pY0ZpbHRlcnNFbmFibGVkIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInF1ZXJ5U3RyaW5nIiwiQXV0b0NvbXBsZXRlRGF0YSIsInNlY3Rpb25zIiwicXVlcnlJZCIsImZyZWV6ZSIsIm1hcCIsInMiLCJsYWJlbCIsInJlc3VsdHMiLCJyIiwiQXV0b0NvbXBsZXRlUmVzdWx0IiwiaGlnaGxpZ2h0ZWRWYWx1ZSIsImhpZ2hsaWdodCIsIm1hdGNoZWRTdWJzdHJpbmdzIiwic2hvcnRWYWx1ZSIsInZhbCIsInNvcnQiLCJhIiwiYiIsImludmVydGVkU3Vic3RyaW5ncyIsInN1YnN0cmluZyIsIm5leHRPZmZzZXQiLCJuZXh0U3RhcnQiLCJqIiwic3RhcnQiLCJOdW1iZXIiLCJlbmQiLCJBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIiLCJtb2R1bGVJZCIsImZyb20iLCJBdXRvQ29tcGxldGVBcGkiLCJiYXJLZXkiLCJ2ZXJ0aWNhbCIsInVuaXZlcnNhbCIsIlF1ZXN0aW9uQW5zd2VyQXBpIiwicXVlc3Rpb24iLCJlbnRpdHlJZCIsInNpdGUiLCJlbWFpbCIsInF1ZXN0aW9uVGV4dCIsInF1ZXN0aW9uRGVzY3JpcHRpb24iLCJxdWVzdGlvbkxhbmd1YWdlIiwiUFJFX1NFQVJDSCIsIlNFQVJDSF9MT0FESU5HIiwiU0VBUkNIX0NPTVBMRVRFIiwiUmVzdWx0IiwiX3JhdyIsInJhdyIsIl9mb3JtYXR0ZWQiLCJmb3JtYXR0ZWQiLCJvcmRpbmFsIiwidGl0bGUiLCJkZXRhaWxzIiwibGluayIsInN1YnRpdGxlIiwibW9kaWZpZXIiLCJiaWdEYXRlIiwiaW1hZ2UiLCJjYWxsc1RvQWN0aW9uIiwiY29sbGFwc2VkIiwiUmVzdWx0RmFjdG9yeSIsInJlc3VsdHNEYXRhIiwiZm9ybWF0dGVycyIsInZlcnRpY2FsSWQiLCJzb3VyY2UiLCJmb3JtYXR0ZWREYXRhIiwiZnJvbUdvb2dsZUN1c3RvbVNlYXJjaEVuZ2luZSIsImZyb21CaW5nQ3VzdG9tU2VhcmNoRW5naW5lIiwiZnJvbUdlbmVyaWMiLCJpbmRleCIsImRlc2NyaXB0aW9uIiwidHJ1bmNhdGUiLCJ3ZWJzaXRlIiwiaHRtbFRpdGxlIiwiaHRtbFNuaXBwZXQiLCJzbmlwcGV0Iiwic3RyIiwidHJhaWxpbmciLCJzZXAiLCJ3b3JkcyIsIm1heCIsInRydW5jYXRlZCIsIndvcmQiLCJTZWN0aW9uIiwic2VhcmNoU3RhdGUiLCJTZWFyY2hTdGF0ZXMiLCJ2ZXJ0aWNhbENvbmZpZ0lkIiwicmVzdWx0c0NvdW50IiwiZW5jb2RlZFN0YXRlIiwiYXBwbGllZFF1ZXJ5RmlsdGVycyIsIkFwcGxpZWRRdWVyeUZpbHRlciIsImZhY2V0cyIsInBhcnNlTWFwIiwidmVydGljYWxVUkwiLCJtYXBNYXJrZXJzIiwiY2VudGVyQ29vcmRpbmF0ZXMiLCJyZXN1bHQiLCJ5ZXh0RGlzcGxheUNvb3JkaW5hdGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIml0ZW0iLCJtb2R1bGVzIiwidXJscyIsIkFycmF5IiwiaXNBcnJheSIsImFwcGxpZWRRdWVyeUZpbHRlciIsImRpc3BsYXlLZXkiLCJkaXNwbGF5VmFsdWUiLCJmaWx0ZXJzIiwiVW5pdmVyc2FsUmVzdWx0cyIsIkRpcmVjdEFuc3dlciIsImRpcmVjdEFuc3dlciIsImFuc3dlciIsInJlbGF0ZWRJdGVtIiwiZmllbGRBcGlOYW1lIiwiZmllbGRWYWx1ZXMiLCJOYXZpZ2F0aW9uIiwidGFiT3JkZXIiLCJuYXYiLCJWZXJ0aWNhbFJlc3VsdHMiLCJtZXJnZWQiLCJjb25jYXQiLCJOQVZJR0FUSU9OIiwiVU5JVkVSU0FMX1JFU1VMVFMiLCJWRVJUSUNBTF9SRVNVTFRTIiwiQVVUT0NPTVBMRVRFIiwiRElSRUNUX0FOU1dFUiIsIkZJTFRFUiIsIlFVRVJZIiwiUVVFUllfSUQiLCJGQUNFVF9GSUxURVIiLCJEWU5BTUlDX0ZJTFRFUlMiLCJTRUFSQ0hfTElNSVQiLCJQQVJBTVMiLCJRVUVTVElPTl9TVUJNSVNTSU9OIiwiRHluYW1pY0ZpbHRlcnMiLCJkeW5hbWljRmlsdGVycyIsImYiLCJmaWVsZElkIiwib3B0aW9ucyIsIm8iLCJjb3VudExhYmVsIiwic2VsZWN0ZWQiLCJTZWFyY2hEYXRhVHJhbnNmb3JtZXIiLCJTdG9yYWdlS2V5cyIsIlF1ZXN0aW9uU3VibWlzc2lvbiIsImVycm9ycyIsInByaXZhY3lQb2xpY3kiLCJxdWVzdGlvblN1Ym1pdHRlZCIsIkNvcmUiLCJfZmllbGRGb3JtYXR0ZXJzIiwiZmllbGRGb3JtYXR0ZXJzIiwiZ2xvYmFsU3RvcmFnZSIsInBlcnNpc3RlbnRTdG9yYWdlIiwiX3NlYXJjaGVyIiwiX2F1dG9Db21wbGV0ZSIsIl9xdWVzdGlvbkFuc3dlciIsImFwcGVuZCIsInNldCIsInNlYXJjaExvYWRpbmciLCJ2ZXJ0aWNhbFNlYXJjaCIsImdldFN0YXRlIiwiX2lzRHluYW1pY0ZpbHRlcnNFbmFibGVkIiwidHJhbnNmb3JtVmVydGljYWwiLCJtZXJnZWRSZXN1bHRzIiwidW5pdmVyc2FsU2VhcmNoIiwidHJhbnNmb3JtIiwibmFtZXNwYWNlIiwicXVlcnlVbml2ZXJzYWwiLCJxdWVyeVZlcnRpY2FsIiwicXVlcnlGaWx0ZXIiLCJzdWJtaXRRdWVzdGlvbiIsInN1Ym1pdHRlZCIsImV2dCIsImNiIiwib24iLCJDb21wb25lbnRNYW5hZ2VyIiwic2V0SW5zdGFuY2UiLCJnZXRJbnN0YW5jZSIsIl9jb21wb25lbnRSZWdpc3RyeSIsIl9hY3RpdmVDb21wb25lbnRzIiwiX2NvcmUiLCJfcmVuZGVyZXIiLCJfYW5hbHl0aWNzUmVwb3J0ZXIiLCJyZW5kZXJlciIsImNvcmUiLCJyZXBvcnRlciIsImNvbXBvbmVudENsYXp6IiwidHlwZSIsImNvbXBvbmVudFR5cGUiLCJhbmFseXRpY3NSZXBvcnRlciIsImNvbXBvbmVudE1hbmFnZXIiLCJjb21wb25lbnRDbGFzcyIsImFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCIsInNvbWUiLCJjIiwiaW5pdCIsInNldFN0YXRlIiwib2ZmIiwiZmluZEluZGV4Iiwic3BsaWNlIiwiZmluZCIsImNvbnN0cnVjdG9yIiwiaW5zdGFuY2UiLCJSZW5kZXJlciIsInRlbXBsYXRlIiwiSGFuZGxlYmFyc1JlbmRlcmVyIiwidGVtcGxhdGVzIiwiX2hhbmRsZWJhcnMiLCJfaGIiLCJfdGVtcGxhdGVzIiwiX3JlZ2lzdGVyQ3VzdG9tSGVscGVycyIsInJlZ2lzdGVySGVscGVyIiwiY29tcGlsZSIsInRlbXBsYXRlTmFtZSIsImUiLCJhcmcxIiwiYXJnMiIsImZuIiwiaW52ZXJzZSIsInBob25lTnVtYmVyU3RyaW5nIiwiY2xlYW5lZCIsImludGxDb2RlIiwiYXJncyIsImFyZ3VtZW50cyIsInJvb3QiLCJ2IiwiUmVuZGVyZXJzIiwiU09ZIiwiSGFuZGxlYmFycyIsImRvY3VtZW50IiwiRE9NIiwiZCIsInAiLCJodG1sIiwiY29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImZyYWciLCJjcmVhdGVSYW5nZSIsImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCIsImFwcGVuZENoaWxkIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwicGFyZW50Iiwic2VsZWN0b3IiLCJIVE1MRWxlbWVudCIsIldpbmRvdyIsIkhUTUxEb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVhZHlTdGF0ZSIsImVsIiwib3B0c19kYXRhIiwibm9kZSIsInByb3BzIiwiYWRkQ2xhc3MiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJjbGFzc05hbWUiLCJjbGFzc2VzIiwibGVuIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwic3R5bGVzIiwicHJvcCIsInN0eWxlIiwiYXR0ciIsInNldEF0dHJpYnV0ZSIsImF0dHJzIiwic2V0dGluZ3MiLCJFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uY2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3R4dCIsInRhcmdldCIsImlzRXF1YWxOb2RlIiwibWF0Y2hlcyIsInBhcmVudE5vZGUiLCJFdmVudEVtaXR0ZXIiLCJfbGlzdGVuZXJzIiwibGlzdGVuZXJzIiwia2VlcCIsIlN0YXRlIiwiX3N0YXRlIiwib3B0VmFsIiwiX3NldCIsImVtaXQiLCJvcHRQcm9wIiwiQW5hbHl0aWNzRXZlbnQiLCJldmVudFR5cGUiLCJ0b1VwcGVyQ2FzZSIsIkFuYWx5dGljc1JlcG9ydGVyIiwiYnVzaW5lc3NJZCIsImdsb2JhbE9wdGlvbnMiLCJfYnVzaW5lc3NJZCIsIl9nbG9iYWxPcHRpb25zIiwic2V0UXVlcnlJZCIsImFkZE9wdGlvbnMiLCJiZWFjb24iLCJ0b0FwaUV2ZW50IiwiTW9kdWxlRGF0YSIsIl9pZCIsIl9oaXN0b3J5IiwiX2RhdGEiLCJjYXB0dXJlUHJldmlvdXMiLCJzaGlmdCIsInByZXZpb3VzIiwiX3ByZXZpb3VzIiwicG9wIiwiR2xvYmFsU3RvcmFnZSIsIl9tb2R1bGVEYXRhQ29udGFpbmVyIiwiX2Z1dHVyZUxpc3RlbmVycyIsIl9pbml0RGF0YUNvbnRhaW5lciIsIl9hcHBseUZ1dHVyZUxpc3RlbmVycyIsImRhdGFLZXkiLCJzdGFydHNXaXRoIiwibW9kdWxlRGF0YSIsImZ1dHVyZXMiLCJmdXR1cmUiLCJDb21wb25lbnQiLCJfY29uZmlnIiwiX3R5cGUiLCJfcGFyZW50IiwiX2NoaWxkcmVuIiwic3RhdGUiLCJfYW5hbHl0aWNzT3B0aW9ucyIsImFuYWx5dGljc09wdGlvbnMiLCJfY29udGFpbmVyIiwiY3JlYXRlRWwiLCJfY2xhc3NOYW1lIiwiX3JlbmRlciIsInJlbmRlciIsIl90ZW1wbGF0ZSIsIl90ZW1wbGF0ZU5hbWUiLCJkZWZhdWx0VGVtcGxhdGVOYW1lIiwiX2lzTW91bnRlZCIsInRyYW5zZm9ybURhdGEiLCJvbkNyZWF0ZSIsIm9uTW91bnQiLCJvblVwZGF0ZSIsIm1vdW50IiwibmV3U3RhdGUiLCJjaGlsZENvbXBvbmVudCIsImNyZWF0ZSIsIl9wYXJlbnRPcHRzIiwicmVtb3ZlIiwidW5Nb3VudCIsImVtcHR5IiwiYmVmb3JlTW91bnQiLCJhc0pTT04iLCJfb25Nb3VudCIsImRvbUhvb2tzIiwicXVlcnlBbGwiLCJfY3JlYXRlQW5hbHl0aWNzSG9vayIsImJpbmQiLCJjaGlsZCIsImJlZm9yZVJlbmRlciIsImRvbUNvbXBvbmVudHMiLCJfY3JlYXRlU3ViY29tcG9uZW50IiwiYWZ0ZXJSZW5kZXIiLCJkb21Db21wb25lbnQiLCJkYXRhc2V0IiwiY2hpbGREYXRhIiwiYWRkQ2hpbGQiLCJjaGlsZEhUTUwiLCJpc0FuYWx5dGljc0F0dGFjaGVkIiwiZXZlbnR0eXBlIiwiZXZlbnRsYWJlbCIsImV2ZW50b3B0aW9ucyIsInJlcG9ydCIsIlJFU0laRV9ERUJPVU5DRSIsIlRhYiIsImNvbmZpZ0lkIiwiaXNGaXJzdCIsImlzQWN0aXZlIiwidGFic0NvbmZpZyIsInRhYnMiLCJ0YWIiLCJOYXZpZ2F0aW9uQ29tcG9uZW50IiwiZHJvcGRvd25MYWJlbCIsImRyb3Bkb3duSWNvbiIsIl90YWJzIiwiX3RhYk9yZGVyIiwiZ2V0RGVmYXVsdFRhYk9yZGVyIiwiZ2V0VXJsUGFyYW1zIiwiX25hdkJyZWFrcG9pbnRzIiwiX2RlYm91bmNlVGltZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicmVmaXROYXYiLCJjaGVja091dHNpZGVDbGljayIsInRvZ2dsZU1vcmVEcm9wZG93biIsIm1vcmVCdXR0b24iLCJtYWluTGlua3MiLCJjb2xsYXBzZWRMaW5rcyIsIm5hdldpZHRoIiwiY29udGFpbnMiLCJvZmZzZXRXaWR0aCIsIm51bUJyZWFrcG9pbnRzIiwibGFzdExpbmsiLCJjaGlsZHJlbiIsInByZXBlbmQiLCJmaXJzdExpbmsiLCJjbG9zZU1vcmVEcm9wZG93biIsInRvZ2dsZSIsImNsb3Nlc3QiLCJtZXJnZVRhYk9yZGVyIiwiZ2VuZXJhdGVUYWJVcmwiLCJpbmNsdWRlcyIsInVuc2hpZnQiLCJvdGhlclRhYk9yZGVyIiwidGFiQ29uZmlnIiwiRmlsdGVyIiwicmVzcG9uc2VGaWx0ZXIiLCJncm91cHMiLCJncm91cEZpbHRlcnMiLCJmaWVsZCIsIm9yIiwiYW5kIiwiX2Zyb21NYXRjaGVyIiwibWluIiwibGF0IiwibG5nIiwicmFkaXVzIiwibWF0Y2hlciIsIlNlYXJjaENvbXBvbmVudCIsIl9iYXJLZXkiLCJfdmVydGljYWxLZXkiLCJfZm9ybUVsIiwiZm9ybVNlbGVjdG9yIiwiX2lucHV0RWwiLCJpbnB1dEVsIiwibGFiZWxUZXh0Iiwic3VibWl0VGV4dCIsInN1Ym1pdEljb24iLCJwcm9tcHRIZWFkZXIiLCJhdXRvRm9jdXMiLCJhdXRvY29tcGxldGVPbkxvYWQiLCJyZWRpcmVjdFVybCIsInEiLCJfc2VhcmNoQ29vbGRvd24iLCJzZWFyY2hDb29sZG93biIsInNldFF1ZXJ5IiwiZm9jdXMiLCJpbml0U2VhcmNoIiwiaW5pdEF1dG9Db21wbGV0ZSIsImZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJibHVyIiwiaW5wdXRTZWxlY3RvciIsIl9hdXRvY29tcGxldGUiLCJvcmlnaW5hbFF1ZXJ5Iiwib25TdWJtaXQiLCJ0cmlnZ2VyIiwiX3Rocm90dGxlZCIsImFsbEZpbHRlcnMiLCJnZXRBbGwiLCJ0b3RhbEZpbHRlciIsImdldEFjdGl2ZUNvbXBvbmVudCIsIkZpbHRlclNlYXJjaENvbXBvbmVudCIsImlucHV0S2V5IiwiX3N0b3JlT25DaGFuZ2UiLCJzdG9yZU9uQ2hhbmdlIiwic2VhcmNoVGV4dCIsImlzRmlsdGVyU2VhcmNoIiwib3JpZ2luYWxGaWx0ZXIiLCJmcm9tUmVzcG9uc2UiLCJzZXRGaWx0ZXIiLCJLZXlzIiwiQkFDS1NQQUNFIiwiVEFCIiwiRU5URVIiLCJTSElGVCIsIkNUUkwiLCJBTFQiLCJFU0NBUEUiLCJMRUZUIiwiUklHSFQiLCJVUCIsIkRPV04iLCJMRUZUX09TX0tFWSIsIlJJR0hUX09TX0tFWSIsIlNFTEVDVF9LRVkiLCJBdXRvQ29tcGxldGVDb21wb25lbnQiLCJfYXV0b2NvbXBsZXRlRWxzIiwiYXV0b0NvbXBsZXRlRWxzIiwiX29yaWdpbmFsUXVlcnkiLCJfc2VjdGlvbkluZGV4IiwiX3Jlc3VsdEluZGV4IiwiX2F1dG9Gb2N1cyIsIl9vblN1Ym1pdCIsImhhc1Jlc3VsdHMiLCJzZWN0aW9uSW5kZXgiLCJyZXN1bHRJbmRleCIsInF1ZXJ5SW5wdXQiLCJhdHRyaWJ1dGVzIiwiYXV0b2NvbXBsZXRlIiwiYXV0b2NvcnJlY3QiLCJzcGVsbGNoZWNrIiwiY2xvc2UiLCJyZXNldCIsImF1dG9Db21wbGV0ZSIsImhhbmRsZU5hdmlnYXRlUmVzdWx0cyIsImtleUNvZGUiLCJoYW5kbGVTdWJtaXRSZXN1bHQiLCJkZWxlZ2F0ZSIsInVwZGF0ZVF1ZXJ5IiwiaGFuZGxlVHlwaW5nIiwidXBkYXRlU3RhdGUiLCJvcHRWYWx1ZSIsInF1ZXJ5RWwiLCJpZ25vcmVkS2V5cyIsImF1dG9Db21wbGV0ZUZpbHRlciIsImF1dG9Db21wbGV0ZVZlcnRpY2FsIiwiYXV0b0NvbXBsZXRlVW5pdmVyc2FsIiwiRmFjZXQiLCJmbGF0RmlsdGVycyIsImZsYXRNYXAiLCIkb3IiLCJGaWx0ZXJCb3hDb21wb25lbnQiLCJfZmlsdGVyQ29uZmlncyIsIl9zZWFyY2hPbkNoYW5nZSIsInNlYXJjaE9uQ2hhbmdlIiwiX2FwcGx5QnV0dG9uU2VsZWN0b3IiLCJhcHBseUJ1dHRvblNlbGVjdG9yIiwiX2ZpbHRlckNvbXBvbmVudHMiLCJfZmlsdGVycyIsIl9pc0R5bmFtaWMiLCJpc0R5bmFtaWMiLCJmaWx0ZXJDb25maWdzIiwic2hvd0FwcGx5QnV0dG9uIiwib25DaGFuZ2UiLCJvbkZpbHRlckNoYW5nZSIsImdldEZpbHRlciIsImJ1dHRvbiIsIl9zYXZlRmlsdGVyc1RvU3RvcmFnZSIsIl9zZWFyY2giLCJ2YWxpZEZpbHRlcnMiLCJjb21iaW5lZEZpbHRlciIsImZyb21GaWx0ZXJzIiwic2V0RmFjZXRGaWx0ZXIiLCJTVVBQT1JURURfQ09OVFJPTFMiLCJGaWx0ZXJPcHRpb25zQ29tcG9uZW50IiwiY29udHJvbCIsInByZXZpb3VzT3B0aW9ucyIsInNlbGVjdGVkT3B0aW9ucyIsIl9vcHRpb25zIiwiX2NvbnRyb2wiLCJfb3B0aW9uU2VsZWN0b3IiLCJvcHRpb25TZWxlY3RvciIsIl9vbkNoYW5nZSIsIl9sYWJlbCIsInRvTG93ZXJDYXNlIiwiX3VwZGF0ZU9wdGlvbiIsInBhcnNlSW50IiwiY2hlY2tlZCIsIl9idWlsZEZpbHRlciIsImVsZW1lbnRzIiwiX2FwcGx5RmlsdGVyIiwiZXF1YWwiLCJncm91cCIsIlJhbmdlRmlsdGVyQ29tcG9uZW50IiwiX2ZpZWxkIiwibWluVmFsIiwibWF4VmFsIiwiX3JhbmdlIiwiaW5pdGlhbE1pbiIsImluaXRpYWxNYXgiLCJfdGl0bGUiLCJfbWluTGFiZWwiLCJtaW5MYWJlbCIsIl9tYXhMYWJlbCIsIm1heExhYmVsIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsIl91cGRhdGVSYW5nZSIsImluY2x1c2l2ZVJhbmdlIiwiRGF0ZVJhbmdlRmlsdGVyQ29tcG9uZW50IiwiX2lzRXhjbHVzaXZlIiwiaXNFeGNsdXNpdmUiLCJ0b2RheSIsIkRhdGUiLCJ0b2RheVN0cmluZyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJwYWRTdGFydCIsImdldERhdGUiLCJtaW5EYXRlIiwibWF4RGF0ZSIsIl9kYXRlIiwiZGF0ZU1pbiIsImRhdGVNYXgiLCJkYXRlIiwiZXhjbHVzaXZlUmFuZ2UiLCJEeW5hbWljRmlsdGVyc0NvbXBvbmVudCIsIl9maWVsZENvbnRyb2xzIiwiZmllbGRDb250cm9scyIsIl9maWx0ZXJib3giLCJlbmFibGVEeW5hbWljRmlsdGVycyIsIk1FVEVSU19QRVJfTUlMRSIsIkRFRkFVTFRfQ09ORklHIiwiZ2VvQnV0dG9uSWNvbiIsImdlb0J1dHRvblRleHQiLCJlbmFibGVkVGV4dCIsImxvYWRpbmdUZXh0IiwiZXJyb3JUZXh0IiwiYnV0dG9uU2VsZWN0b3IiLCJHZW9Mb2NhdGlvbkNvbXBvbmVudCIsInBsYWNlaG9sZGVyIiwiX2VuYWJsZWQiLCJnZW9Mb2FkaW5nIiwiZ2VvRXJyb3IiLCJnZW9FbmFibGVkIiwiZ2VvVmFsdWUiLCJnZW9QbGFjZWhvbGRlciIsIl9pbml0QXV0b0NvbXBsZXRlIiwiX3RvZ2dsZUdlb0ZpbHRlciIsIl9zYXZlRGF0YVRvU3RvcmFnZSIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJjb29yZHMiLCJhY2N1cmFjeSIsIk1hdGgiLCJFdmVudFR5cGVzIiwiVEhVTUJTX1VQIiwiVEhVTUJTX0RPV04iLCJEaXJlY3RBbnN3ZXJDb21wb25lbnQiLCJmb3JtRWwiLCJfdGh1bWJzVXBTZWxlY3RvciIsInRodW1ic1VwU2VsZWN0b3IiLCJfdGh1bWJzRG93blNlbGVjdG9yIiwidGh1bWJzRG93blNlbGVjdG9yIiwiX3ZpZXdEZXRhaWxzVGV4dCIsInZpZXdEZXRhaWxzVGV4dCIsImhhc1N0YXRlIiwiY2hlY2tlZFZhbHVlIiwicmVwb3J0UXVhbGl0eSIsImV2ZW50T3B0aW9ucyIsInNlYXJjaGVyIiwiY3RhTGFiZWwiLCJpc0dvb2QiLCJSZXN1bHRzSXRlbUNvbXBvbmVudCIsIl92ZXJ0aWNhbENvbmZpZ0lkIiwiX2lzVW5pdmVyc2FsIiwiaXNVbml2ZXJzYWwiLCJMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IiwiRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCIsIlBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IiwiTWFwUHJvdmlkZXIiLCJfaGVpZ2h0IiwiaGVpZ2h0IiwiX3dpZHRoIiwid2lkdGgiLCJfem9vbSIsInpvb20iLCJfZGVmYXVsdFBvc2l0aW9uIiwiZGVmYXVsdFBvc2l0aW9uIiwiX3Nob3dFbXB0eU1hcCIsInNob3dFbXB0eU1hcCIsIl9tYXAiLCJfaXNMb2FkZWQiLCJfb25QaW5DbGljayIsIm9uUGluQ2xpY2siLCJfb25Mb2FkZWQiLCJvbkxvYWRlZCIsIl9waW5Db25maWciLCJwaW4iLCJERUZBVUxUX1BJTl9DT05GSUciLCJfY29sbGFwc2VQaW5zIiwiY29sbGFwc2VQaW5zIiwiaXNMb2FkZWQiLCJtYXBEYXRhIiwibWFya2VycyIsImxvY2F0aW9uVG9JdGVtIiwibSIsImNvbGxhcHNlZE1hcmtlcnMiLCJjb2xsYXBzZWRNYXJrZXIiLCJpY29uIiwiYW5jaG9yIiwic3ZnIiwic2NhbGVkU2l6ZSIsImxhYmVsVHlwZSIsIkdvb2dsZU1hcFByb3ZpZGVyIiwiX2NsaWVudElkIiwiY2xpZW50SWQiLCJfc2lnbmF0dXJlIiwic2lnbmF0dXJlIiwiaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscyIsIm9uTG9hZCIsInNjcmlwdCIsIm9ubG9hZCIsImFzeW5jIiwic3JjIiwiZ2VuZXJhdGVDcmVkZW50aWFscyIsImdvb2dsZU1hcE1hcmtlckNvbmZpZ3MiLCJHb29nbGVNYXBNYXJrZXJDb25maWciLCJlbmNvZGVkTWFya2VycyIsInNlcmlhbGl6ZSIsIl9pc1N0YXRpYyIsImNzcyIsImdvb2dsZSIsIm1hcHMiLCJNYXAiLCJib3VuZHMiLCJMYXRMbmdCb3VuZHMiLCJfY29sbGFwc2VNYXJrZXJzIiwibWFya2VyIiwiTWFya2VyIiwiYWRkTGlzdGVuZXIiLCJleHRlbmQiLCJmaXRCb3VuZHMiLCJzZXRDZW50ZXIiLCJMYXRMbmciLCJzZXJpYWxpemVkTWFya2VycyIsInBpbkNvbmZpZyIsInBpbkNvbmZpZ09iaiIsIlBvaW50IiwieCIsInkiLCJTaXplIiwidyIsImgiLCJNYXBCb3hNYXBQcm92aWRlciIsIm1hcGJveGdsIiwiYWNjZXNzVG9rZW4iLCJyZWwiLCJtYXBib3hNYXBNYXJrZXJDb25maWdzIiwiTWFwQm94TWFya2VyQ29uZmlnIiwiY2VudGVyIiwibWFwQ2VudGVyIiwiZ2V0Q2VudGVyTWFya2VyIiwid3JhcHBlciIsIkxuZ0xhdCIsInNldExuZ0xhdCIsImFkZFRvIiwiZ2V0RWxlbWVudCIsInN0YXRpY01hcFBpbiIsIlByb3ZpZGVyVHlwZXMiLCJNYXBDb21wb25lbnQiLCJfbWFwUHJvdmlkZXIiLCJtYXBQcm92aWRlciIsImlzU3RhdGljIiwiZ2V0UHJvdmlkZXJJbnN0YW5jZSIsInNldFRlbXBsYXRlIiwiZ2VuZXJhdGVTdGF0aWMiLCJsb2FkSlMiLCJSZXN1bHRUeXBlIiwiRVZFTlQiLCJMT0NBVElPTiIsIlBFT1BMRSIsIlJlc3VsdHNDb21wb25lbnQiLCJfaXRlbUNvbmZpZyIsImdsb2JhbCIsInJlbmRlckl0ZW0iLCJpdGVtVGVtcGxhdGUiLCJzZXRTZWFyY2hMaW1pdCIsImNvbmZpZ3VyZUl0ZW0iLCJfdW5pdmVyc2FsVXJsIiwidW5pdmVyc2FsVXJsIiwiaXNQcmVTZWFyY2giLCJpc1NlYXJjaExvYWRpbmciLCJpc1NlYXJjaENvbXBsZXRlIiwiaW5jbHVkZU1hcCIsIm1hcENvbmZpZyIsInNob3dOb1Jlc3VsdHMiLCJzZXRJdGVtUmVuZGVyIiwic2V0SXRlbVRlbXBsYXRlIiwiY2xhenoiLCJnZXRJdGVtQ29tcG9uZW50IiwiY29tcCIsIm5ld09wdHMiLCJnbG9iYWxDb25maWciLCJpdGVtQ29uZmlnIiwiaGFzR2xvYmFsUmVuZGVyIiwiaGFzR2xvYmFsVGVtcGxhdGUiLCJzZXRSZW5kZXIiLCJBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50IiwiX3NlbGVjdG9yQmFzZSIsInNlbGVjdG9yQmFzZSIsImNvbGxhcHNlZENsYXNzIiwiYWNjb3JkaW9uRWxzIiwiYWNjb3JkaW9uRWwiLCJ0b2dnbGVFbCIsInRvZ2dsZVNlbGVjdG9yIiwiY29udGVudEVsIiwiYm9keVNlbGVjdG9yIiwiY2hhbmdlSGVpZ2h0IiwiaGFuZGxlQ2xpY2siLCJ3cmFwcGVyRWwiLCJpc0NvbGxhcHNlZCIsInRhcmdldEVsIiwic2Nyb2xsSGVpZ2h0IiwiYnVpbGRTZWxlY3RvciIsIlVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQiLCJfbGltaXQiLCJnZXRDaGlsZENvbmZpZyIsInVzZUFjY29yZGlvbiIsImRlZmF1bHRDb25maWciLCJRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQiLCJ2YWxpZGF0ZUNvbmZpZyIsImJpbmRBbmFseXRpY3MiLCJiaW5kRm9ybVN1Ym1pdCIsInF1ZXN0aW9uVGV4dEVsIiwiZm9ybURhdGEiLCJ2YWxpZGF0ZVJlcXVpcmVkIiwibGFuZ3VhZ2UiLCJpbnB1dEZpZWxkcyIsIm9iaiIsIlNWR0ljb24iLCJwYXRoIiwiY29tcGxleENvbnRlbnRzIiwidmlld0JveCIsImNvbnRlbnRzIiwicGF0aERlZmluaXRpb24iLCJpY29uc0FycmF5IiwidGh1bWJJY29uIiwicmVjZWlwdEljb24iLCJwYW50aGVvbkljb24iLCJtaWNJY29uIiwiZGlyZWN0aW9uc0ljb24iLCJjYWxlbmRhckljb24iLCJjYWxsb3V0SWNvbiIsImluZm9JY29uIiwiYnJpZWZjYXNlSWNvbiIsImthYm9iSWNvbiIsInBlcnNvbkljb24iLCJtYWduaWZ5aW5nR2xhc3NJY29uIiwib2ZmaWNlSWNvbiIsImxpbmtJY29uIiwid2luZG93SWNvbiIsInBob25lSWNvbiIsInRhZ0ljb24iLCJkb2N1bWVudEljb24iLCJjaGV2cm9uSWNvbiIsInN1cHBvcnRJY29uIiwieWV4dEljb24iLCJwaW5JY29uIiwiZ2Vhckljb24iLCJsaWdodEJ1bGJJY29uIiwiSWNvbnMiLCJtYXJrdXAiLCJzdGFySWNvbiIsIkljb25Db21wb25lbnQiLCJpY29uTmFtZSIsImN1c3RvbUljb24iLCJpY29uVXJsIiwiQ09NUE9ORU5UX01BTkFHRVIiLCJyZWdpc3RlciIsIlRlbXBsYXRlTG9hZGVyIiwiX3RlbXBsYXRlVXJsIiwidGVtcGxhdGVVcmwiLCJfaW5pdCIsImZldGNoVGVtcGxhdGVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbmVycm9yIiwiY29uc29sZSIsImxvZyIsIkVycm9yUmVwb3J0ZXIiLCJlcnIiLCJ0b0pzb24iLCJQZXJzaXN0ZW50U3RvcmFnZSIsIl9oaXN0b3J5VGltZXIiLCJfdXBkYXRlTGlzdGVuZXIiLCJ1cGRhdGVMaXN0ZW5lciIsIl9yZXNldExpc3RlbmVyIiwicmVzZXRMaXN0ZW5lciIsIm9ucG9wc3RhdGUiLCJfY2FsbExpc3RlbmVyIiwibmV3RGF0YSIsIl91cGRhdGVIaXN0b3J5IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImxpc3RlbmVyIiwiYWxsUGFyYW1zIiwiQW5zd2VycyIsImNvbXBvbmVudHMiLCJfb25SZWFkeSIsIm9uU3RhdGVDaGFuZ2UiLCJzZXRBbGwiLCJzdWJzdHIiLCJzZXRDb3JlIiwic2V0UmVuZGVyZXIiLCJzZXRBbmFseXRpY3NSZXBvcnRlciIsIm9uUmVhZHkiLCJ1c2VUZW1wbGF0ZXMiLCJ0ZW1wbGF0ZUJ1bmRsZSIsInN1cHByZXNzRXJyb3JSZXBvcnRzIiwiX2Vycm9yUmVwb3J0ZXIiLCJBTlNXRVJTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQTs7RUFFQTs7RUFFQTs7O0VBR0EsSUFBTUEsT0FBTyxHQUFHO0VBQ2RDLEVBQUFBLEdBQUcsRUFBRSxLQURTO0VBRWRDLEVBQUFBLElBQUksRUFBRSxNQUZRO0VBR2RDLEVBQUFBLEdBQUcsRUFBRSxLQUhTO0VBSWRDLEVBQUFBLE1BQU0sRUFBRTtFQUpNLENBQWhCO0VBT0E7Ozs7OztNQUtxQkM7Ozs7Ozs7Ozs7RUFDbkI7Ozs7OzswQkFNS0MsS0FBS0MsTUFBTUMsTUFBTTtFQUNwQixhQUFPLEtBQUtDLE9BQUwsQ0FBYVQsT0FBTyxDQUFDQyxHQUFyQixFQUEwQixLQUFLUyxZQUFMLENBQWtCSixHQUFsQixFQUF1QkMsSUFBdkIsQ0FBMUIsRUFBd0RDLElBQXhELENBQVA7RUFDRDtFQUVEOzs7Ozs7Ozs7MkJBTU1GLEtBQUtDLE1BQU1DLE1BQU07RUFDckIsYUFBTyxLQUFLQyxPQUFMLENBQ0xULE9BQU8sQ0FBQ0UsSUFESCxFQUVMSSxHQUZLLEVBR0xLLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0VBQ1pDLFFBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVSLElBQWYsQ0FETTtFQUVaUyxRQUFBQSxXQUFXLEVBQUVDO0VBRkQsT0FBZCxFQUdHVCxJQUhILENBSEssQ0FBUDtFQVFEOzs7OEJBRVFVLFFBQVFaLEtBQUtFLE1BQU07RUFDMUIsYUFBT1csS0FBSyxDQUFDYixHQUFELEVBQU1LLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0VBQzlCTSxRQUFBQSxNQUFNLEVBQU5BLE1BRDhCO0VBRTlCRixRQUFBQSxXQUFXLEVBQUU7RUFGaUIsT0FBZCxFQUdmUixJQUhlLENBQU4sQ0FBWjtFQUlEO0VBRUQ7Ozs7Ozs7Ozs7OzZCQVFRRixLQUFLQyxNQUFNO0VBQ2pCLGFBQU9hLFNBQVMsQ0FBQ0MsVUFBVixDQUFxQmYsR0FBckIsRUFBMEJRLElBQUksQ0FBQ0MsU0FBTCxDQUFlUixJQUFmLENBQTFCLENBQVA7RUFDRDs7O21DQUVhRCxLQUFLZ0IsUUFBUTtFQUN6QixVQUFJQyxRQUFRLEdBQUdqQixHQUFHLENBQUNrQixPQUFKLENBQVksR0FBWixJQUFtQixDQUFDLENBQW5DO0VBRUEsVUFBSUMsV0FBVyxHQUFHLEVBQWxCOztFQUNBLFdBQUssSUFBSUMsR0FBVCxJQUFnQkosTUFBaEIsRUFBd0I7RUFDdEIsWUFBSSxDQUFDQyxRQUFMLEVBQWU7RUFDYkEsVUFBQUEsUUFBUSxHQUFHLElBQVg7RUFDQUUsVUFBQUEsV0FBVyxJQUFJLEdBQWY7RUFDRCxTQUhELE1BR087RUFDTEEsVUFBQUEsV0FBVyxJQUFJLEdBQWY7RUFDRDs7RUFFREEsUUFBQUEsV0FBVyxJQUFJQyxHQUFHLEdBQUcsR0FBTixHQUFZQyxrQkFBa0IsQ0FBQ0wsTUFBTSxDQUFDSSxHQUFELENBQVAsQ0FBN0M7RUFDRDs7RUFDRCxhQUFPcEIsR0FBRyxHQUFHbUIsV0FBYjtFQUNEOzs7Ozs7RUNqRkg7O0VBRUE7QUFDQSxFQUFPLElBQU1HLFdBQVcsR0FBRyxRQUFwQjtFQUVQOztBQUNBLEVBQU8sSUFBTUMsWUFBWSxHQUFHLDBCQUFyQjtFQUVQOztBQUNBLEVBQU8sSUFBTUMsc0JBQXNCLGlEQUEwQ0YsV0FBMUMsc0NBQTVCO0VBRVA7O0FBQ0EsRUFBTyxJQUFNRyxrQkFBa0IsR0FBRyxvQ0FBM0I7O0VDWlA7O0VBRUE7O0VBRUE7Ozs7TUFJcUJDOzs7RUFDbkIsd0JBQWExQixHQUFiLEVBQWtCO0VBQUE7O0VBQ2hCOzs7Ozs7RUFNQSxTQUFLMkIsT0FBTCxHQUFlLEVBQWY7O0VBRUEsUUFBSUMsTUFBTSxJQUFJQSxNQUFNLENBQUNDLGVBQXJCLEVBQXNDO0VBQ3BDLGFBQU8sSUFBSUEsZUFBSixDQUFvQjdCLEdBQXBCLENBQVA7RUFDRCxLQUZELE1BRU87RUFDTCxXQUFLMkIsT0FBTCxHQUFlLEtBQUtHLEtBQUwsQ0FBVzlCLEdBQVgsQ0FBZjtFQUNEO0VBQ0Y7RUFFRDs7Ozs7Ozs7Ozs7Ozs7NEJBVU9BLEtBQUs7RUFDVixVQUFJZ0IsTUFBTSxHQUFHLEVBQWI7RUFDQSxVQUFJZSxNQUFNLEdBQUcvQixHQUFiOztFQUVBLFVBQUkrQixNQUFNLEtBQUssRUFBZixFQUFtQjtFQUNqQixlQUFPZixNQUFQO0VBQ0QsT0FOUzs7O0VBU1YsVUFBSWhCLEdBQUcsQ0FBQ2tCLE9BQUosQ0FBWSxHQUFaLElBQW1CLENBQUMsQ0FBeEIsRUFBMkI7RUFDekJhLFFBQUFBLE1BQU0sR0FBRy9CLEdBQUcsQ0FBQ2dDLEtBQUosQ0FBVWhDLEdBQUcsQ0FBQ2tCLE9BQUosQ0FBWSxHQUFaLElBQW1CLENBQTdCLENBQVQ7RUFDRDs7RUFFRCxVQUFNZSxhQUFhLEdBQUdGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhLEdBQWIsQ0FBdEI7O0VBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixhQUFhLENBQUNHLE1BQWxDLEVBQTBDRCxDQUFDLEVBQTNDLEVBQStDO0VBQzdDLFlBQU1FLE1BQU0sR0FBR0osYUFBYSxDQUFDRSxDQUFELENBQWIsQ0FBaUJELEtBQWpCLENBQXVCLEdBQXZCLENBQWY7O0VBQ0EsWUFBSUcsTUFBTSxDQUFDRCxNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0VBQ3JCcEIsVUFBQUEsTUFBTSxDQUFDcUIsTUFBTSxDQUFDLENBQUQsQ0FBUCxDQUFOLEdBQW9CWCxZQUFZLENBQUNZLE1BQWIsQ0FBb0JELE1BQU0sQ0FBQyxDQUFELENBQTFCLENBQXBCO0VBQ0QsU0FGRCxNQUVPO0VBQ0xyQixVQUFBQSxNQUFNLENBQUNxQixNQUFNLENBQUMsQ0FBRCxDQUFQLENBQU4sR0FBb0IsRUFBcEI7RUFDRDtFQUNGOztFQUVELGFBQU9yQixNQUFQO0VBQ0Q7RUFFRDs7Ozs7Ozs7MEJBS0t1QixPQUFPO0VBQ1YsVUFBSSxPQUFPLEtBQUtaLE9BQUwsQ0FBYWEsTUFBTSxDQUFDRCxLQUFELENBQW5CLENBQVAsS0FBdUMsV0FBM0MsRUFBd0Q7RUFDdEQsZUFBTyxJQUFQO0VBQ0Q7O0VBQ0QsYUFBTyxLQUFLWixPQUFMLENBQWFZLEtBQWIsQ0FBUDtFQUNEO0VBRUQ7Ozs7Ozs7OzBCQUtLRSxNQUFNQyxPQUFPO0VBQ2hCLFdBQUtmLE9BQUwsQ0FBYWEsTUFBTSxDQUFDQyxJQUFELENBQW5CLElBQTZCRCxNQUFNLENBQUNFLEtBQUQsQ0FBbkM7RUFDRDtFQUVEOzs7Ozs7OzswQkFLS0gsT0FBTztFQUNWLGFBQU9BLEtBQUssSUFBSSxLQUFLWixPQUFyQjtFQUNEO0VBRUQ7Ozs7Ozs7aUNBSVk7RUFDVixVQUFJZ0IsTUFBTSxHQUFHLEVBQWI7O0VBQ0EsV0FBSyxJQUFJdkIsR0FBVCxJQUFnQixLQUFLTyxPQUFyQixFQUE4QjtFQUM1QmdCLFFBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxXQUFleEIsR0FBZixjQUFzQk0sWUFBWSxDQUFDbUIsTUFBYixDQUFvQixLQUFLbEIsT0FBTCxDQUFhUCxHQUFiLENBQXBCLENBQXRCO0VBQ0Q7O0VBQ0QsYUFBT3VCLE1BQU0sQ0FBQ0csSUFBUCxDQUFZLEdBQVosQ0FBUDtFQUNEOzs7Z0NBRVU7RUFDVCxVQUFJQyxPQUFPLEdBQUcsRUFBZDs7RUFDQSxXQUFLLElBQUkzQixHQUFULElBQWdCLEtBQUtPLE9BQXJCLEVBQThCO0VBQzVCb0IsUUFBQUEsT0FBTyxDQUFDSCxJQUFSLENBQWEsQ0FBQ3hCLEdBQUQsRUFBTSxLQUFLTyxPQUFMLENBQWFQLEdBQWIsQ0FBTixDQUFiO0VBQ0Q7O0VBQ0QsYUFBTzJCLE9BQVA7RUFDRDtFQUVEOzs7Ozs7Ozs2QkFLZUosUUFBUTtFQUNyQixhQUFPSyxrQkFBa0IsQ0FBQ0wsTUFBTSxDQUFDTSxPQUFQLENBQWUsT0FBZixFQUF3QixLQUF4QixDQUFELENBQXpCO0VBQ0Q7RUFFRDs7Ozs7Ozs7NkJBS2VOLFFBQVE7RUFDckIsVUFBSU0sT0FBTyxHQUFHO0VBQ1osYUFBSyxLQURPO0VBRVosYUFBSyxLQUZPO0VBR1osYUFBSyxLQUhPO0VBSVosYUFBSyxLQUpPO0VBS1osZUFBTztFQUxLLE9BQWQ7RUFPQSxhQUFPNUIsa0JBQWtCLENBQUNzQixNQUFELENBQWxCLENBQTJCTSxPQUEzQixDQUFtQyxhQUFuQyxFQUFrRCxVQUFVQyxLQUFWLEVBQWlCO0VBQ3hFLGVBQU9ELE9BQU8sQ0FBQ0MsS0FBRCxDQUFkO0VBQ0QsT0FGTSxDQUFQO0VBR0Q7Ozs7OztFQ2xJSDs7Ozs7TUFJcUJDOzs7RUFDbkIsd0JBQXdCO0VBQUEsUUFBWGpELElBQVcsdUVBQUosRUFBSTs7RUFBQTs7RUFDdEI7Ozs7O0VBS0EsU0FBS2tELFVBQUwsR0FBa0IsSUFBSXJELGFBQUosRUFBbEI7RUFFQTs7Ozs7O0VBS0EsU0FBS3NELFFBQUwsR0FBZ0JuRCxJQUFJLENBQUNvRCxPQUFMLElBQWdCL0IsWUFBaEM7RUFFQTs7Ozs7O0VBS0EsU0FBS2dDLFNBQUwsR0FBaUJyRCxJQUFJLENBQUNzRCxRQUFMLElBQWlCLElBQWxDO0VBRUE7Ozs7OztFQUtBLFNBQUtDLE9BQUwsR0FBZXZELElBQUksQ0FBQ3dELE1BQUwsSUFBZSxJQUE5QjtFQUVBOzs7Ozs7RUFLQSxTQUFLQyxRQUFMLEdBQWdCekQsSUFBSSxDQUFDMEQsT0FBTCxJQUFnQixRQUFoQztFQUVBOzs7Ozs7RUFLQSxTQUFLakMsT0FBTCxHQUFlekIsSUFBSSxDQUFDYyxNQUFMLElBQWUsRUFBOUI7RUFDRDtFQUVEOzs7Ozs7Ozs0QkFJTztFQUNMLGFBQU8sS0FBS29DLFVBQUwsQ0FBZ0JTLEdBQWhCLENBQW9CLEtBQUtSLFFBQUwsR0FBZ0IsS0FBS0UsU0FBekMsRUFBb0QsS0FBS3ZDLE1BQUwsQ0FBWSxLQUFLVyxPQUFqQixDQUFwRCxDQUFQO0VBQ0Q7OzsyQkFFS3pCLE1BQU07RUFDVixhQUFPLEtBQUtrRCxVQUFMLENBQWdCVSxJQUFoQixDQUFxQixLQUFLVCxRQUFMLEdBQWdCLEtBQUtFLFNBQTFDLEVBQXFELEtBQUt2QyxNQUFMLENBQVksS0FBS1csT0FBakIsQ0FBckQsRUFBZ0Z6QixJQUFoRixDQUFQO0VBQ0Q7Ozs2QkFFT2MsU0FBUTtFQUNkLFVBQUkrQyxVQUFVLEdBQUc7RUFDZixhQUFLLEtBQUtKLFFBREs7RUFFZixtQkFBVyxLQUFLRjtFQUZELE9BQWpCO0VBS0EsVUFBTU8sU0FBUyxHQUFHLElBQUl0QyxZQUFKLENBQWlCRSxNQUFNLENBQUNxQyxRQUFQLENBQWdCQyxRQUFoQixFQUFqQixDQUFsQjs7RUFFQSxVQUFJRixTQUFTLENBQUNHLEdBQVYsQ0FBYyxNQUFkLENBQUosRUFBMkI7RUFDekJKLFFBQUFBLFVBQVUsQ0FBQyxNQUFELENBQVYsR0FBcUJDLFNBQVMsQ0FBQ0gsR0FBVixDQUFjLE1BQWQsQ0FBckI7RUFDRCxPQVZhO0VBYWQ7RUFDQTtFQUNBO0VBQ0E7OztFQUNBeEQsTUFBQUEsTUFBTSxDQUFDK0QsSUFBUCxDQUFZcEQsT0FBWixFQUFvQnFELE9BQXBCLENBQTRCLFVBQUFqRCxHQUFHLEVBQUk7RUFDakMsWUFBSUosT0FBTSxDQUFDSSxHQUFELENBQU4sS0FBZ0JULFNBQWhCLElBQTZCSyxPQUFNLENBQUNJLEdBQUQsQ0FBTixLQUFnQixJQUFqRCxFQUF1RDtFQUNyRCxpQkFBT0osT0FBTSxDQUFDSSxHQUFELENBQWI7RUFDRDtFQUNGLE9BSkQ7RUFNQSxhQUFPZixNQUFNLENBQUNDLE1BQVAsQ0FBY3lELFVBQWQsRUFBMEIvQyxPQUFNLElBQUksRUFBcEMsQ0FBUDtFQUNEOzs7Ozs7RUMzRkg7O0VBRUE7Ozs7Ozs7Ozs7O0FBV0EsTUFBYXNELGdCQUFiO0VBQUE7RUFBQTtFQUFBOztFQUNFLDRCQUFhQyxTQUFiLEVBQXdCQyxPQUF4QixFQUFpQ0MsUUFBakMsRUFBMkNDLFFBQTNDLEVBQXFEO0VBQUE7O0VBQUE7O0VBQ25ELDBGQUFNRixPQUFOO0VBQ0EsVUFBS0QsU0FBTCxHQUFpQkEsU0FBakI7RUFDQSxVQUFLSSxZQUFMLEdBQW9CSCxPQUFwQjtFQUNBLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0VBQ0EsVUFBS0MsUUFBTCxHQUFnQkEsUUFBaEI7RUFDQSxVQUFLRSxRQUFMLEdBQWdCLEtBQWhCO0VBTm1EO0VBT3BEOztFQVJIO0VBQUE7RUFBQSw2QkFVWTtFQUNSLGFBQU9wRSxJQUFJLENBQUNDLFNBQUwsQ0FBZSxJQUFmLENBQVA7RUFDRDtFQVpIO0VBQUE7RUFBQSx5QkFjZW9FLFlBZGYsRUFjNkJKLFFBZDdCLEVBY3VDO0VBQ25DLFVBQU1LLEtBQUssR0FBRyxJQUFJQyxpQkFBSixDQUFzQkYsWUFBWSxDQUFDTCxPQUFuQyxFQUE0Q0MsUUFBNUMsQ0FBZDtFQUNBSyxNQUFBQSxLQUFLLENBQUNFLEtBQU4sR0FBY0gsWUFBWSxDQUFDRyxLQUEzQjtFQUNBLGFBQU9GLEtBQVA7RUFDRDtFQWxCSDs7RUFBQTtFQUFBLG1CQUFzQ0csS0FBdEM7RUFxQkE7Ozs7OztBQUtBLE1BQWFGLGlCQUFiO0VBQUE7RUFBQTtFQUFBOztFQUNFLDZCQUFhUCxPQUFiLEVBQXNCQyxRQUF0QixFQUFnQ0MsUUFBaEMsRUFBMEM7RUFBQTs7RUFBQSwwRkFDbEMsR0FEa0MsRUFDN0JGLE9BRDZCLEVBQ3BCQyxRQURvQixFQUNWQyxRQURVO0VBRXpDOztFQUhIO0VBQUEsRUFBdUNKLGdCQUF2QztBQU1BLEVBVUE7Ozs7OztBQUtBLE1BQWFZLHFCQUFiO0VBQUE7RUFBQTtFQUFBOztFQUNFLGlDQUFhVixPQUFiLEVBQXNCVyxTQUF0QixFQUFpQ1QsUUFBakMsRUFBMkM7RUFBQTs7RUFBQSw4RkFDbkMsR0FEbUMsRUFDOUJGLE9BRDhCLEVBQ3JCVyxTQURxQixFQUNWVCxRQURVO0VBRTFDOztFQUhIO0VBQUEsRUFBMkNKLGdCQUEzQztFQU1BOzs7OztBQUlBLE1BQWFjLG9CQUFiO0VBQUE7RUFBQTtFQUFBOztFQUNFLGdDQUFhWixPQUFiLEVBQXNCQyxRQUF0QixFQUFnQ0MsUUFBaEMsRUFBMEM7RUFBQTs7RUFBQSw2RkFDbEMsR0FEa0MsRUFDN0JGLE9BRDZCLEVBQ3BCQyxRQURvQixFQUNWQyxRQURVO0VBRXpDOztFQUhIO0VBQUEsRUFBMENKLGdCQUExQztFQU1BOzs7OztBQUlBLE1BQWFlLGdCQUFiO0VBQUE7RUFBQTtFQUFBOztFQUNFLDRCQUFhYixPQUFiLEVBQXNCQyxRQUF0QixFQUFnQ0MsUUFBaEMsRUFBMEM7RUFBQTs7RUFBQSx5RkFDbEMsR0FEa0MsRUFDN0JGLE9BRDZCLEVBQ3BCQyxRQURvQixFQUNWQyxRQURVO0VBRXpDOztFQUhIO0VBQUEsRUFBc0NKLGdCQUF0QztFQU1BOzs7OztBQUlBLE1BQWFnQixtQkFBYjtFQUFBO0VBQUE7RUFBQTs7RUFDRSwrQkFBYWQsT0FBYixFQUFzQmUsVUFBdEIsRUFBa0N0RixJQUFsQyxFQUF3Q3lFLFFBQXhDLEVBQWtEO0VBQUE7O0VBQUE7O0VBQ2hELDhGQUFNLEdBQU4sRUFBV0YsT0FBWCxFQUFvQixTQUFwQixFQUErQkUsUUFBL0I7RUFDQSxXQUFLYSxVQUFMLEdBQWtCQSxVQUFsQjtFQUNBLFdBQUt0RixJQUFMLEdBQVlBLElBQVo7RUFIZ0Q7RUFJakQ7O0VBTEg7RUFBQSxFQUF5Q3FFLGdCQUF6QztFQVFBOzs7OztBQUlBLE1BQWFrQixxQkFBYjtFQUFBO0VBQUE7RUFBQTs7RUFDRSxpQ0FBYWhCLE9BQWIsRUFBc0JpQixLQUF0QixFQUE2QmYsUUFBN0IsRUFBdUM7RUFBQTs7RUFBQTs7RUFDckMsZ0dBQU0sR0FBTixFQUFXRixPQUFYLEVBQW9CLFdBQXBCLEVBQWlDRSxRQUFqQztFQUNBLFdBQUtlLEtBQUwsR0FBYUEsS0FBYjtFQUZxQztFQUd0Qzs7RUFKSDtFQUFBLEVBQTJDbkIsZ0JBQTNDOztFQ2pHQTs7Ozs7TUFJcUJvQjs7O0VBQ25CLHVCQUEwQjtFQUFBLFFBQWJDLE1BQWEsdUVBQUosRUFBSTs7RUFBQTs7RUFDeEI7Ozs7O0VBS0EsUUFBSSxDQUFDQSxNQUFNLENBQUNqQyxNQUFaLEVBQW9CO0VBQ2xCLFlBQU0sSUFBSXFCLGlCQUFKLENBQXNCLHFCQUF0QixFQUE2QyxRQUE3QyxDQUFOO0VBQ0Q7O0VBQ0QsU0FBS3RCLE9BQUwsR0FBZWtDLE1BQU0sQ0FBQ2pDLE1BQXRCO0VBRUE7Ozs7OztFQUtBLFFBQUksQ0FBQ2lDLE1BQU0sQ0FBQ0MsVUFBWixFQUF3QjtFQUN0QixZQUFNLElBQUliLGlCQUFKLENBQXNCLHlCQUF0QixFQUFpRCxRQUFqRCxDQUFOO0VBQ0Q7O0VBQ0QsU0FBS2MsV0FBTCxHQUFtQkYsTUFBTSxDQUFDQyxVQUExQjtFQUVBOzs7Ozs7RUFLQSxTQUFLakMsUUFBTCxHQUFnQmdDLE1BQU0sQ0FBQy9CLE9BQVAsSUFBa0IsUUFBbEIsSUFBOEIsUUFBOUM7RUFFQTs7Ozs7O0VBS0EsUUFBSSxDQUFDK0IsTUFBTSxDQUFDRyxNQUFaLEVBQW9CO0VBQ2xCLFlBQU0sSUFBSWYsaUJBQUosQ0FBc0Isb0JBQXRCLEVBQTRDLFFBQTVDLENBQU47RUFDRDs7RUFDRCxTQUFLZ0IsT0FBTCxHQUFlSixNQUFNLENBQUNHLE1BQXRCO0VBQ0Q7RUFFRDs7Ozs7Ozs7Ozs7Ozs7OztxQ0FZZ0JFLG1CQUF5RjtFQUFBLFVBQTFFQyxLQUEwRSxRQUExRUEsS0FBMEU7RUFBQSxVQUFuRUMsTUFBbUUsUUFBbkVBLE1BQW1FO0VBQUEsVUFBM0RDLFdBQTJELFFBQTNEQSxXQUEyRDtFQUFBLFVBQTlDQyxLQUE4QyxRQUE5Q0EsS0FBOEM7RUFBQSxVQUF2Q0MsTUFBdUMsUUFBdkNBLE1BQXVDO0VBQUEsVUFBL0JDLEVBQStCLFFBQS9CQSxFQUErQjtFQUFBLFVBQTNCQyx1QkFBMkIsUUFBM0JBLHVCQUEyQjs7RUFDdkcsVUFBSUgsS0FBSyxHQUFHLEVBQVosRUFBZ0I7RUFDZCxjQUFNLElBQUlmLGdCQUFKLENBQXFCLG1DQUFyQixFQUEwRCxXQUExRCxDQUFOO0VBQ0Q7O0VBRUQsVUFBSWxGLE9BQU8sR0FBRyxJQUFJZ0QsVUFBSixDQUFlO0VBQzNCSyxRQUFBQSxRQUFRLEVBQUUsd0NBRGlCO0VBRTNCRSxRQUFBQSxNQUFNLEVBQUUsS0FBS0QsT0FGYztFQUczQkcsUUFBQUEsT0FBTyxFQUFFLEtBQUtELFFBSGE7RUFJM0IzQyxRQUFBQSxNQUFNLEVBQUU7RUFDTixtQkFBU2lGLEtBREg7RUFFTix3QkFBYyxLQUFLSixXQUZiO0VBR04scUJBQVdLLE1BSEw7RUFJTiwwQkFBZ0JDLFdBSlY7RUFLTix5QkFBZUgsV0FMVDtFQU1OLG1CQUFTSSxLQU5IO0VBT04sb0JBQVVDLE1BUEo7RUFRTixxQkFBV0MsRUFSTDtFQVNOLDRCQUFrQkMsdUJBVFo7RUFVTixvQkFBVSxLQUFLUjtFQVZUO0VBSm1CLE9BQWYsQ0FBZDtFQWtCQSxhQUFPNUYsT0FBTyxDQUFDMEQsR0FBUixHQUNKMkMsSUFESSxDQUNDLFVBQUFDLFFBQVE7RUFBQSxlQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtFQUFBLE9BRFQsQ0FBUDtFQUVEOzs7c0NBRWdCQyxhQUFhO0VBQzVCLFVBQUl4RyxPQUFPLEdBQUcsSUFBSWdELFVBQUosQ0FBZTtFQUMzQkssUUFBQUEsUUFBUSxFQUFFLCtCQURpQjtFQUUzQkUsUUFBQUEsTUFBTSxFQUFFLEtBQUtELE9BRmM7RUFHM0JHLFFBQUFBLE9BQU8sRUFBRSxLQUFLRCxRQUhhO0VBSTNCM0MsUUFBQUEsTUFBTSxFQUFFO0VBQ04sbUJBQVMyRixXQURIO0VBRU4sd0JBQWMsS0FBS2QsV0FGYjtFQUdOLG9CQUFVLEtBQUtFO0VBSFQ7RUFKbUIsT0FBZixDQUFkO0VBV0EsYUFBTzVGLE9BQU8sQ0FBQzBELEdBQVIsR0FDSjJDLElBREksQ0FDQyxVQUFBQyxRQUFRO0VBQUEsZUFBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7RUFBQSxPQURULENBQVA7RUFFRDs7Ozs7O0VDdEdIO01BRXFCRTs7O0VBQ25CLDhCQUF3QjtFQUFBLFFBQVgzRyxJQUFXLHVFQUFKLEVBQUk7O0VBQUE7O0VBQ3RCLFNBQUs0RyxRQUFMLEdBQWdCNUcsSUFBSSxDQUFDNEcsUUFBTCxJQUFpQixFQUFqQztFQUNBLFNBQUtDLE9BQUwsR0FBZTdHLElBQUksQ0FBQzZHLE9BQUwsSUFBZ0IsRUFBL0I7RUFDQXpHLElBQUFBLE1BQU0sQ0FBQzBHLE1BQVAsQ0FBYyxJQUFkO0VBQ0Q7Ozs7MkJBRVlOLFVBQVU7RUFDckIsVUFBSUksUUFBSjs7RUFDQSxVQUFJSixRQUFRLENBQUNJLFFBQWIsRUFBdUI7RUFDckJBLFFBQUFBLFFBQVEsR0FBR0osUUFBUSxDQUFDSSxRQUFULENBQWtCRyxHQUFsQixDQUFzQixVQUFBQyxDQUFDO0VBQUEsaUJBQUs7RUFDckNDLFlBQUFBLEtBQUssRUFBRUQsQ0FBQyxDQUFDQyxLQUQ0QjtFQUVyQ0MsWUFBQUEsT0FBTyxFQUFFRixDQUFDLENBQUNFLE9BQUYsQ0FBVUgsR0FBVixDQUFjLFVBQUFJLENBQUM7RUFBQSxxQkFBSSxJQUFJQyxrQkFBSixDQUF1QkQsQ0FBdkIsQ0FBSjtFQUFBLGFBQWY7RUFGNEIsV0FBTDtFQUFBLFNBQXZCLENBQVg7RUFJRCxPQUxELE1BS087RUFDTFAsUUFBQUEsUUFBUSxHQUFHLENBQUM7RUFBRU0sVUFBQUEsT0FBTyxFQUFFVixRQUFRLENBQUNVLE9BQVQsQ0FBaUJILEdBQWpCLENBQXFCLFVBQUFJLENBQUM7RUFBQSxtQkFBSSxJQUFJQyxrQkFBSixDQUF1QkQsQ0FBdkIsQ0FBSjtFQUFBLFdBQXRCO0VBQVgsU0FBRCxDQUFYO0VBQ0Q7O0VBQ0QsYUFBTyxJQUFJUixnQkFBSixDQUFxQjtFQUFFQyxRQUFBQSxRQUFRLEVBQVJBLFFBQUY7RUFBWUMsUUFBQUEsT0FBTyxFQUFFTCxRQUFRLENBQUNLO0VBQTlCLE9BQXJCLENBQVA7RUFDRDs7Ozs7TUFHVU8sa0JBQWI7RUFBQTtFQUFBO0VBQ0UsZ0NBQXdCO0VBQUEsUUFBWHBILElBQVcsdUVBQUosRUFBSTs7RUFBQTs7RUFDdEIsU0FBS2lHLE1BQUwsR0FBY2pHLElBQUksQ0FBQ2lHLE1BQUwsSUFBZSxFQUE3QjtFQUNBLFNBQUtvQixnQkFBTCxHQUF3QixLQUFLQyxTQUFMLENBQWV0SCxJQUFmLENBQXhCO0VBQ0EsU0FBS21CLEdBQUwsR0FBV25CLElBQUksQ0FBQ21CLEdBQUwsSUFBWSxFQUF2QjtFQUNBLFNBQUtvRyxpQkFBTCxHQUF5QnZILElBQUksQ0FBQ3VILGlCQUFMLElBQTBCLEVBQW5EO0VBQ0EsU0FBSzlFLEtBQUwsR0FBYXpDLElBQUksQ0FBQ3lDLEtBQUwsSUFBYyxFQUEzQjtFQUNBLFNBQUsrRSxVQUFMLEdBQWtCeEgsSUFBSSxDQUFDd0gsVUFBTCxJQUFtQixLQUFLL0UsS0FBMUM7RUFDQXJDLElBQUFBLE1BQU0sQ0FBQzBHLE1BQVAsQ0FBYyxJQUFkO0VBQ0QsR0FUSDs7O0VBQUE7RUFBQTtFQUFBLDhCQVlhOUcsSUFaYixFQVltQjtFQUFBLFVBQ1B5QyxLQURPLEdBQ2tDekMsSUFEbEMsQ0FDUHlDLEtBRE87RUFBQSxVQUNBK0UsVUFEQSxHQUNrQ3hILElBRGxDLENBQ0F3SCxVQURBO0VBQUEsVUFDWUQsaUJBRFosR0FDa0N2SCxJQURsQyxDQUNZdUgsaUJBRFo7RUFFZixVQUFNRSxHQUFHLEdBQUdoRixLQUFLLElBQUkrRSxVQUFyQjs7RUFFQSxVQUFJLENBQUNELGlCQUFELElBQXNCQSxpQkFBaUIsQ0FBQ3BGLE1BQWxCLEtBQTZCLENBQXZELEVBQTBEO0VBQ3hELGVBQU9zRixHQUFQO0VBQ0QsT0FOYzs7O0VBU2ZGLE1BQUFBLGlCQUFpQixDQUFDRyxJQUFsQixDQUF1QixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtFQUMvQixZQUFJRCxDQUFDLENBQUN2QixNQUFGLEdBQVd3QixDQUFDLENBQUN4QixNQUFqQixFQUF5QjtFQUN2QixpQkFBTyxDQUFDLENBQVI7RUFDRDs7RUFFRCxZQUFJdUIsQ0FBQyxDQUFDdkIsTUFBRixHQUFXd0IsQ0FBQyxDQUFDeEIsTUFBakIsRUFBeUI7RUFDdkIsaUJBQU8sQ0FBUDtFQUNEOztFQUVELGVBQU8sQ0FBUDtFQUNELE9BVkQsRUFUZTs7RUFzQmYsVUFBTXlCLGtCQUFrQixHQUFHLEVBQTNCOztFQUVBLFdBQUssSUFBSTNGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdxRixpQkFBaUIsQ0FBQ3BGLE1BQXRDLEVBQThDRCxDQUFDLEVBQS9DLEVBQW1EO0VBQ2pELFlBQU00RixTQUFTLEdBQUdQLGlCQUFpQixDQUFDckYsQ0FBRCxDQUFuQztFQUNBLFlBQU02RixVQUFVLEdBQUdELFNBQVMsQ0FBQzFCLE1BQVYsR0FBbUIwQixTQUFTLENBQUMzRixNQUFoRDs7RUFDQSxZQUFJRCxDQUFDLEtBQUssQ0FBTixJQUFXNEYsU0FBUyxDQUFDMUIsTUFBVixLQUFxQixDQUFwQyxFQUF1QztFQUNyQ3lCLFVBQUFBLGtCQUFrQixDQUFDbEYsSUFBbkIsQ0FBd0I7RUFBRXlELFlBQUFBLE1BQU0sRUFBRSxDQUFWO0VBQWFqRSxZQUFBQSxNQUFNLEVBQUUyRixTQUFTLENBQUMxQjtFQUEvQixXQUF4QjtFQUNEOztFQUVELFlBQUlxQixHQUFHLENBQUN0RixNQUFKLEdBQWE0RixVQUFqQixFQUE2QjtFQUMzQkYsVUFBQUEsa0JBQWtCLENBQUNsRixJQUFuQixDQUF3QjtFQUN0QnlELFlBQUFBLE1BQU0sRUFBRTJCLFVBRGM7RUFFdEI1RixZQUFBQSxNQUFNLEVBQUVELENBQUMsR0FBR3FGLGlCQUFpQixDQUFDcEYsTUFBbEIsR0FBMkIsQ0FBL0IsR0FDSm9GLGlCQUFpQixDQUFDckYsQ0FBQyxHQUFHLENBQUwsQ0FBakIsQ0FBeUJrRSxNQUF6QixHQUFrQzJCLFVBRDlCLEdBRUpOLEdBQUcsQ0FBQ3RGLE1BQUosR0FBYTRGO0VBSkssV0FBeEI7RUFNRDtFQUNGLE9BdkNjOzs7RUEwQ2YsVUFBSVYsZ0JBQWdCLEdBQUcsRUFBdkI7RUFDQSxVQUFJVyxTQUFTLEdBQUcsQ0FBaEI7O0VBRUEsVUFBSUgsa0JBQWtCLENBQUMxRixNQUFuQixLQUE4QixDQUFsQyxFQUFxQztFQUNuQyxlQUFPc0YsR0FBUDtFQUNEOztFQUVELFdBQUssSUFBSVEsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osa0JBQWtCLENBQUMxRixNQUF2QyxFQUErQzhGLENBQUMsRUFBaEQsRUFBb0Q7RUFDbEQsWUFBSUMsS0FBSyxHQUFHQyxNQUFNLENBQUNOLGtCQUFrQixDQUFDSSxDQUFELENBQWxCLENBQXNCN0IsTUFBdkIsQ0FBbEI7RUFDQSxZQUFJZ0MsR0FBRyxHQUFHRixLQUFLLEdBQUdMLGtCQUFrQixDQUFDSSxDQUFELENBQWxCLENBQXNCOUYsTUFBeEM7RUFFQWtGLFFBQUFBLGdCQUFnQixJQUFJLENBQUNJLEdBQUcsQ0FBQzFGLEtBQUosQ0FBVWlHLFNBQVYsRUFBcUJFLEtBQXJCLENBQUQsRUFBOEIsVUFBOUIsRUFBMENULEdBQUcsQ0FBQzFGLEtBQUosQ0FBVW1HLEtBQVYsRUFBaUJFLEdBQWpCLENBQTFDLEVBQWlFLFdBQWpFLEVBQThFdkYsSUFBOUUsQ0FBbUYsRUFBbkYsQ0FBcEI7O0VBRUEsWUFBSW9GLENBQUMsS0FBS0osa0JBQWtCLENBQUMxRixNQUFuQixHQUE0QixDQUFsQyxJQUF1Q2lHLEdBQUcsR0FBR1gsR0FBRyxDQUFDdEYsTUFBckQsRUFBNkQ7RUFDM0RrRixVQUFBQSxnQkFBZ0IsSUFBSUksR0FBRyxDQUFDMUYsS0FBSixDQUFVcUcsR0FBVixDQUFwQjtFQUNEOztFQUVESixRQUFBQSxTQUFTLEdBQUdJLEdBQVo7RUFDRDs7RUFFRCxhQUFPZixnQkFBUDtFQUNEO0VBM0VIOztFQUFBO0VBQUE7O0VDbkJBOzs7Ozs7OztNQU9xQmdCOzs7Ozs7Ozs7NEJBQ0xDLFVBQVV0SSxNQUFNO0VBQzVCLFVBQUlBLElBQUksQ0FBQzRHLFFBQUwsSUFBaUI1RyxJQUFJLENBQUM0RyxRQUFMLENBQWN6RSxNQUFkLEtBQXlCLENBQTlDLEVBQWlEO0VBQy9DLGVBQU9uQyxJQUFJLENBQUM0RyxRQUFaO0VBQ0Q7O0VBRUQsVUFBSTVHLElBQUksQ0FBQzRHLFFBQUwsSUFBaUI1RyxJQUFJLENBQUM0RyxRQUFMLENBQWN6RSxNQUFkLEtBQXlCLENBQTFDLElBQStDbkMsSUFBSSxDQUFDNEcsUUFBTCxDQUFjLENBQWQsRUFBaUJNLE9BQWpCLENBQXlCL0UsTUFBekIsS0FBb0MsQ0FBdkYsRUFBMEY7RUFDeEYsZUFBT25DLElBQUksQ0FBQzRHLFFBQVo7RUFDRDs7RUFFRCxpQ0FDRzBCLFFBREgsRUFDY3RJLElBRGQ7RUFHRDs7O2dDQUVpQndHLFVBQVU7RUFDMUIsYUFBT0csZ0JBQWdCLENBQUM0QixJQUFqQixDQUFzQi9CLFFBQXRCLENBQVA7RUFDRDs7OzZCQUVjQSxVQUFVO0VBQ3ZCLGFBQU9HLGdCQUFnQixDQUFDNEIsSUFBakIsQ0FBc0IvQixRQUF0QixDQUFQO0VBQ0Q7OzsrQkFFZ0JBLFVBQVU7RUFDekIsYUFBT0csZ0JBQWdCLENBQUM0QixJQUFqQixDQUFzQi9CLFFBQXRCLENBQVA7RUFDRDs7Ozs7O0VDOUJIOzs7OztNQUlxQmdDOzs7RUFDbkIsNkJBQXdCO0VBQUEsUUFBWHZJLElBQVcsdUVBQUosRUFBSTs7RUFBQTs7RUFDdEI7Ozs7O0VBS0EsUUFBSSxDQUFDQSxJQUFJLENBQUN3RCxNQUFWLEVBQWtCO0VBQ2hCLFlBQU0sSUFBSXFCLGlCQUFKLENBQXNCLHFCQUF0QixFQUE2QyxjQUE3QyxDQUFOO0VBQ0Q7O0VBQ0QsU0FBS3RCLE9BQUwsR0FBZXZELElBQUksQ0FBQ3dELE1BQXBCO0VBRUE7Ozs7OztFQUtBLFFBQUksQ0FBQ3hELElBQUksQ0FBQzBGLFVBQVYsRUFBc0I7RUFDcEIsWUFBTSxJQUFJYixpQkFBSixDQUFzQix5QkFBdEIsRUFBaUQsY0FBakQsQ0FBTjtFQUNEOztFQUNELFNBQUtjLFdBQUwsR0FBbUIzRixJQUFJLENBQUMwRixVQUF4QjtFQUVBOzs7Ozs7RUFLQSxTQUFLakMsUUFBTCxHQUFnQnpELElBQUksQ0FBQzBELE9BQUwsSUFBZ0IsUUFBaEIsSUFBNEIsUUFBNUM7RUFFQTs7Ozs7O0VBS0EsUUFBSSxDQUFDMUQsSUFBSSxDQUFDNEYsTUFBVixFQUFrQjtFQUNoQixZQUFNLElBQUlmLGlCQUFKLENBQXNCLG9CQUF0QixFQUE0QyxjQUE1QyxDQUFOO0VBQ0Q7O0VBQ0QsU0FBS2dCLE9BQUwsR0FBZTdGLElBQUksQ0FBQzRGLE1BQXBCO0VBQ0Q7RUFFRDs7Ozs7Ozs7a0NBSWFHLE9BQU9ELGFBQWEwQyxRQUFRO0VBQ3ZDLFVBQUl2SSxPQUFPLEdBQUcsSUFBSWdELFVBQUosQ0FBZTtFQUMzQkssUUFBQUEsUUFBUSxFQUFFLHNDQURpQjtFQUUzQkUsUUFBQUEsTUFBTSxFQUFFLEtBQUtELE9BRmM7RUFHM0JHLFFBQUFBLE9BQU8sRUFBRSxLQUFLRCxRQUhhO0VBSTNCM0MsUUFBQUEsTUFBTSxFQUFFO0VBQ04sbUJBQVNpRixLQURIO0VBRU4sd0JBQWMsS0FBS0osV0FGYjtFQUdOLDJCQUFpQkcsV0FIWDtFQUlOLHNCQUFZMEMsTUFKTjtFQUtOLG9CQUFVLEtBQUszQztFQUxUO0VBSm1CLE9BQWYsQ0FBZDtFQWFBLGFBQU81RixPQUFPLENBQUMwRCxHQUFSLEdBQ0oyQyxJQURJLENBQ0MsVUFBQUMsUUFBUTtFQUFBLGVBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0VBQUEsT0FEVCxFQUVKRixJQUZJLENBRUMsVUFBQUMsUUFBUTtFQUFBLGVBQUk2QiwyQkFBMkIsQ0FBQ3BDLE1BQTVCLENBQW1DTyxRQUFRLENBQUNBLFFBQTVDLEVBQXNEaUMsTUFBdEQsQ0FBSjtFQUFBLE9BRlQsV0FHRSxVQUFBNUQsS0FBSyxFQUFJO0VBQ2QsY0FBTSxJQUFJTSxvQkFBSixDQUF5Qiw4QkFBekIsRUFBeUQsY0FBekQsRUFBeUVOLEtBQXpFLENBQU47RUFDRCxPQUxJLENBQVA7RUFNRDs7O29DQUVjbUIsT0FBT0QsYUFBYTBDLFFBQVE7RUFDekMsVUFBSXZJLE9BQU8sR0FBRyxJQUFJZ0QsVUFBSixDQUFlO0VBQzNCSyxRQUFBQSxRQUFRLEVBQUUsK0NBRGlCO0VBRTNCRSxRQUFBQSxNQUFNLEVBQUUsS0FBS0QsT0FGYztFQUczQkcsUUFBQUEsT0FBTyxFQUFFLEtBQUtELFFBSGE7RUFJM0IzQyxRQUFBQSxNQUFNLEVBQUU7RUFDTixtQkFBU2lGLEtBREg7RUFFTix3QkFBYyxLQUFLSixXQUZiO0VBR04seUJBQWVHLFdBSFQ7RUFJTixvQkFBVTBDLE1BSko7RUFLTixvQkFBVSxLQUFLM0M7RUFMVDtFQUptQixPQUFmLENBQWQ7RUFhQSxhQUFPNUYsT0FBTyxDQUFDMEQsR0FBUixHQUNKMkMsSUFESSxDQUNDLFVBQUFDLFFBQVE7RUFBQSxlQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtFQUFBLE9BRFQsRUFFSkYsSUFGSSxDQUVDLFVBQUFDLFFBQVE7RUFBQSxlQUFJNkIsMkJBQTJCLENBQUNLLFFBQTVCLENBQXFDbEMsUUFBUSxDQUFDQSxRQUE5QyxFQUF3RHRHLE9BQU8sQ0FBQ3dCLE9BQVIsQ0FBZ0IrRyxNQUF4RSxDQUFKO0VBQUEsT0FGVCxXQUdFLFVBQUE1RCxLQUFLLEVBQUk7RUFDZCxjQUFNLElBQUlNLG9CQUFKLENBQXlCLGdDQUF6QixFQUEyRCxjQUEzRCxFQUEyRU4sS0FBM0UsQ0FBTjtFQUNELE9BTEksQ0FBUDtFQU1EOzs7cUNBRWU2QixhQUFhO0VBQzNCLFVBQUl4RyxPQUFPLEdBQUcsSUFBSWdELFVBQUosQ0FBZTtFQUMzQkssUUFBQUEsUUFBUSxFQUFFLHNDQURpQjtFQUUzQkUsUUFBQUEsTUFBTSxFQUFFLEtBQUtELE9BRmM7RUFHM0JHLFFBQUFBLE9BQU8sRUFBRSxLQUFLRCxRQUhhO0VBSTNCM0MsUUFBQUEsTUFBTSxFQUFFO0VBQ04sbUJBQVMyRixXQURIO0VBRU4sd0JBQWMsS0FBS2QsV0FGYjtFQUdOLG9CQUFVLEtBQUtFO0VBSFQ7RUFKbUIsT0FBZixDQUFkO0VBV0EsYUFBTzVGLE9BQU8sQ0FBQzBELEdBQVIsQ0FBWThDLFdBQVosRUFDSkgsSUFESSxDQUNDLFVBQUFDLFFBQVE7RUFBQSxlQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtFQUFBLE9BRFQsRUFFSkYsSUFGSSxDQUVDLFVBQUFDLFFBQVE7RUFBQSxlQUFJNkIsMkJBQTJCLENBQUNNLFNBQTVCLENBQXNDbkMsUUFBUSxDQUFDQSxRQUEvQyxDQUFKO0VBQUEsT0FGVCxXQUdFLFVBQUEzQixLQUFLLEVBQUk7RUFDZCxjQUFNLElBQUlNLG9CQUFKLENBQXlCLGlDQUF6QixFQUE0RCxjQUE1RCxFQUE0RU4sS0FBNUUsQ0FBTjtFQUNELE9BTEksQ0FBUDtFQU1EOzs7Ozs7RUMvR0g7Ozs7O01BSXFCK0Q7OztFQUNuQiwrQkFBd0I7RUFBQSxRQUFYM0ksSUFBVyx1RUFBSixFQUFJOztFQUFBOztFQUN0Qjs7Ozs7RUFLQSxRQUFJLENBQUNBLElBQUksQ0FBQ3dELE1BQVYsRUFBa0I7RUFDaEIsWUFBTSxJQUFJcUIsaUJBQUosQ0FBc0IscUJBQXRCLEVBQTZDLG1CQUE3QyxDQUFOO0VBQ0Q7O0VBQ0QsU0FBS3RCLE9BQUwsR0FBZXZELElBQUksQ0FBQ3dELE1BQXBCO0VBQ0Q7RUFFRDs7Ozs7Ozs7Ozs7Ozs7OztxQ0FZZ0JvRixVQUFVO0VBQ3hCLFVBQUkzSSxPQUFPLEdBQUcsSUFBSWdELFVBQUosQ0FBZTtFQUMzQkssUUFBQUEsUUFBUSxFQUFFLDJCQURpQjtFQUUzQkUsUUFBQUEsTUFBTSxFQUFFLEtBQUtELE9BRmM7RUFHM0J6QyxRQUFBQSxNQUFNLEVBQUU7RUFDTixzQkFBWThILFFBQVEsQ0FBQ0MsUUFEZjtFQUVOLGtCQUFRRCxRQUFRLENBQUNFLElBRlg7RUFHTixrQkFBUUYsUUFBUSxDQUFDckcsSUFIWDtFQUlOLG1CQUFTcUcsUUFBUSxDQUFDRyxLQUpaO0VBS04sMEJBQWdCSCxRQUFRLENBQUNJLFlBTG5CO0VBTU4saUNBQXVCSixRQUFRLENBQUNLLG1CQU4xQjtFQU9OLDhCQUFvQkwsUUFBUSxDQUFDTTtFQVB2QjtFQUhtQixPQUFmLENBQWQ7RUFjQSxhQUFPakosT0FBTyxDQUFDMkQsSUFBUixHQUNKMEMsSUFESSxDQUNDLFVBQUFDLFFBQVE7RUFBQSxlQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtFQUFBLE9BRFQsV0FFRSxVQUFBNUIsS0FBSyxFQUFJO0VBQ2QsY0FBTSxJQUFJTSxvQkFBSixDQUNKLHdCQURJLEVBRUosbUJBRkksRUFHSk4sS0FISSxDQUFOO0VBSUQsT0FQSSxDQUFQO0VBUUQ7Ozs7OztFQ3pESDs7RUFFQTs7Ozs7QUFLQSxxQkFBZTtFQUNidUUsRUFBQUEsVUFBVSxFQUFFLFlBREM7RUFFYkMsRUFBQUEsY0FBYyxFQUFFLGdCQUZIO0VBR2JDLEVBQUFBLGVBQWUsRUFBRTtFQUhKLENBQWY7O0VDUEE7TUFFcUJDLFNBQ25CLGtCQUF3QjtFQUFBLE1BQVh2SixJQUFXLHVFQUFKLEVBQUk7O0VBQUE7O0VBQ3RCOzs7OztFQUtBLE9BQUt3SixJQUFMLEdBQVl4SixJQUFJLENBQUN5SixHQUFMLElBQVksSUFBeEI7RUFFQTs7Ozs7O0VBS0EsT0FBS0MsVUFBTCxHQUFrQjFKLElBQUksQ0FBQzJKLFNBQXZCO0VBRUE7Ozs7O0VBSUEsT0FBS0MsT0FBTCxHQUFlNUosSUFBSSxDQUFDNEosT0FBTCxJQUFnQixJQUEvQjtFQUVBOzs7OztFQUlBLE9BQUtDLEtBQUwsR0FBYTdKLElBQUksQ0FBQzZKLEtBQUwsSUFBYyxJQUEzQjtFQUVBOzs7OztFQUlBLE9BQUtDLE9BQUwsR0FBZTlKLElBQUksQ0FBQzhKLE9BQUwsSUFBZ0IsSUFBL0I7RUFFQTs7Ozs7RUFJQSxPQUFLQyxJQUFMLEdBQVkvSixJQUFJLENBQUMrSixJQUFMLElBQWEsSUFBekI7RUFFQTs7Ozs7RUFJQSxPQUFLMUQsRUFBTCxHQUFVckcsSUFBSSxDQUFDcUcsRUFBTCxJQUFXLElBQXJCO0VBRUE7Ozs7O0VBSUEsT0FBSzJELFFBQUwsR0FBZ0JoSyxJQUFJLENBQUNnSyxRQUFMLElBQWlCLElBQWpDO0VBRUE7Ozs7OztFQUtBLE9BQUtDLFFBQUwsR0FBZ0JqSyxJQUFJLENBQUNpSyxRQUFMLElBQWlCLElBQWpDO0VBRUE7Ozs7O0VBSUEsT0FBS0MsT0FBTCxHQUFlbEssSUFBSSxDQUFDa0ssT0FBTCxJQUFnQixJQUEvQjtFQUVBOzs7OztFQUlBLE9BQUtDLEtBQUwsR0FBYW5LLElBQUksQ0FBQ21LLEtBQUwsSUFBYyxJQUEzQjtFQUVBOzs7Ozs7RUFLQSxPQUFLQyxhQUFMLEdBQXFCcEssSUFBSSxDQUFDb0ssYUFBTCxJQUFzQixFQUEzQztFQUVBOzs7OztFQUlBLE9BQUtDLFNBQUwsR0FBaUJySyxJQUFJLENBQUNxSyxTQUFMLElBQWtCLElBQW5DO0VBQ0Q7O01DakZrQkM7Ozs7Ozs7Ozs7RUFDbkI7Ozs7Ozs7Ozs7MkJBVWFDLGFBQWFDLFlBQVlDLFlBQVlDLFFBQVE7RUFDeEQsVUFBSXhELE9BQU8sR0FBRyxFQUFkOztFQUR3RCxpQ0FFL0NoRixDQUYrQztFQUd0RDtFQUNBO0VBQ0E7RUFFQSxZQUFNbEMsSUFBSSxHQUFHdUssV0FBVyxDQUFDckksQ0FBRCxDQUFYLENBQWVsQyxJQUFmLElBQXVCdUssV0FBVyxDQUFDckksQ0FBRCxDQUEvQztFQUNBLFlBQU15SSxhQUFhLEdBQUcsRUFBdEI7O0VBQ0EsWUFBSXZLLE1BQU0sQ0FBQytELElBQVAsQ0FBWXFHLFVBQVosRUFBd0JySSxNQUF4QixHQUFpQyxDQUFyQyxFQUF3QztFQUN0Qy9CLFVBQUFBLE1BQU0sQ0FBQzBDLE9BQVAsQ0FBZTlDLElBQWYsRUFBcUJvRSxPQUFyQixDQUE2QixnQkFBZ0I7RUFBQTtFQUFBLGdCQUFkakQsR0FBYztFQUFBLGdCQUFUc0csR0FBUzs7RUFDM0MsZ0JBQUkrQyxVQUFVLENBQUNySixHQUFELENBQWQsRUFBcUI7RUFDbkJ3SixjQUFBQSxhQUFhLENBQUN4SixHQUFELENBQWIsR0FBcUJxSixVQUFVLENBQUNySixHQUFELENBQVYsQ0FBZ0JzRyxHQUFoQixFQUFxQnpILElBQXJCLEVBQTJCeUssVUFBM0IsRUFBdUMsS0FBdkMsQ0FBckI7RUFDRDtFQUNGLFdBSkQ7RUFLRDs7RUFFRCxZQUFJQyxNQUFNLEtBQUssWUFBWCxJQUEyQkEsTUFBTSxLQUFLLGlCQUExQyxFQUE2RDtFQUMzRHhELFVBQUFBLE9BQU8sQ0FBQ3ZFLElBQVIsQ0FBYTJILGFBQWEsQ0FBQ00sNEJBQWQsQ0FBMkM1SyxJQUEzQyxDQUFiO0VBQ0E7RUFDRDs7RUFFRCxZQUFJMEssTUFBTSxLQUFLLFVBQWYsRUFBMkI7RUFDekJ4RCxVQUFBQSxPQUFPLENBQUN2RSxJQUFSLENBQWEySCxhQUFhLENBQUNPLDBCQUFkLENBQXlDN0ssSUFBekMsQ0FBYjtFQUNBO0VBQ0Q7O0VBRURrSCxRQUFBQSxPQUFPLENBQUN2RSxJQUFSLENBQWEySCxhQUFhLENBQUNRLFdBQWQsQ0FBMEI5SyxJQUExQixFQUFnQzJLLGFBQWhDLEVBQStDekksQ0FBL0MsQ0FBYjtFQTNCc0Q7O0VBRXhELFdBQUssSUFBSUEsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3FJLFdBQVcsQ0FBQ3BJLE1BQWhDLEVBQXdDRCxDQUFDLEVBQXpDLEVBQTZDO0VBQUEseUJBQXBDQSxDQUFvQzs7RUFBQSxpQ0FzQnpDO0VBSUg7O0VBRUQsYUFBT2dGLE9BQVA7RUFDRDtFQUVEOzs7Ozs7Ozs7O2tDQU9vQmxILE1BQU0ySyxlQUFlSSxPQUFPO0VBQzlDLGFBQU8sSUFBSXhCLE1BQUosQ0FBVztFQUNoQkUsUUFBQUEsR0FBRyxFQUFFekosSUFEVztFQUVoQjJKLFFBQUFBLFNBQVMsRUFBRWdCLGFBRks7RUFHaEJkLFFBQUFBLEtBQUssRUFBRWMsYUFBYSxDQUFDbkksSUFBZCxJQUFzQnhDLElBQUksQ0FBQ3dDLElBSGxCO0VBSWhCc0gsUUFBQUEsT0FBTyxFQUFFYSxhQUFhLENBQUNLLFdBQWQsSUFBNkIsS0FBS0MsUUFBTCxDQUFjakwsSUFBSSxDQUFDZ0wsV0FBbkIsQ0FKdEI7RUFLaEJqQixRQUFBQSxJQUFJLEVBQUUvSixJQUFJLENBQUNrTCxPQUxLO0VBTWhCN0UsUUFBQUEsRUFBRSxFQUFFckcsSUFBSSxDQUFDcUcsRUFOTztFQU9oQnVELFFBQUFBLE9BQU8sRUFBRW1CLEtBQUssR0FBRztFQVBELE9BQVgsQ0FBUDtFQVNEO0VBRUQ7Ozs7Ozs7OzttREFNcUMvSyxNQUFNO0VBQ3pDLGFBQU8sSUFBSXVKLE1BQUosQ0FBVztFQUNoQkUsUUFBQUEsR0FBRyxFQUFFekosSUFEVztFQUVoQjZKLFFBQUFBLEtBQUssRUFBRTdKLElBQUksQ0FBQ21MLFNBQUwsQ0FBZW5JLE9BQWYsQ0FBdUIsZUFBdkIsRUFBd0MsRUFBeEMsQ0FGUztFQUdoQjhHLFFBQUFBLE9BQU8sRUFBRTlKLElBQUksQ0FBQ29MLFdBSEU7RUFJaEJyQixRQUFBQSxJQUFJLEVBQUUvSixJQUFJLENBQUMrSjtFQUpLLE9BQVgsQ0FBUDtFQU1EO0VBRUQ7Ozs7Ozs7OztpREFNbUMvSixNQUFNO0VBQ3ZDLGFBQU8sSUFBSXVKLE1BQUosQ0FBVztFQUNoQkUsUUFBQUEsR0FBRyxFQUFFekosSUFEVztFQUVoQjZKLFFBQUFBLEtBQUssRUFBRTdKLElBQUksQ0FBQ3dDLElBRkk7RUFHaEJzSCxRQUFBQSxPQUFPLEVBQUU5SixJQUFJLENBQUNxTCxPQUhFO0VBSWhCdEIsUUFBQUEsSUFBSSxFQUFFL0osSUFBSSxDQUFDRDtFQUpLLE9BQVgsQ0FBUDtFQU1EO0VBRUQ7Ozs7Ozs7Ozs7OytCQVFpQnVMLEtBQStDO0VBQUEsVUFBMUNuRixLQUEwQyx1RUFBbEMsR0FBa0M7RUFBQSxVQUE3Qm9GLFFBQTZCLHVFQUFsQixLQUFrQjtFQUFBLFVBQVhDLEdBQVcsdUVBQUwsR0FBSzs7RUFDOUQsVUFBSSxDQUFDRixHQUFELElBQVFBLEdBQUcsQ0FBQ25KLE1BQUosSUFBY2dFLEtBQTFCLEVBQWlDO0VBQy9CLGVBQU9tRixHQUFQO0VBQ0QsT0FINkQ7OztFQU05RCxVQUFNRyxLQUFLLEdBQUdILEdBQUcsQ0FBQ3JKLEtBQUosQ0FBVXVKLEdBQVYsQ0FBZDtFQUNBLFVBQU1FLEdBQUcsR0FBR3ZGLEtBQUssR0FBR29GLFFBQVEsQ0FBQ3BKLE1BQTdCO0VBQ0EsVUFBSXdKLFNBQVMsR0FBRyxFQUFoQjs7RUFFQSxXQUFLLElBQUl6SixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHdUosS0FBSyxDQUFDdEosTUFBMUIsRUFBa0NELENBQUMsRUFBbkMsRUFBdUM7RUFDckMsWUFBTTBKLElBQUksR0FBR0gsS0FBSyxDQUFDdkosQ0FBRCxDQUFsQjs7RUFDQSxZQUFJeUosU0FBUyxDQUFDeEosTUFBVixHQUFtQnlKLElBQUksQ0FBQ3pKLE1BQXhCLEdBQWlDdUosR0FBakMsSUFDRHhKLENBQUMsS0FBSyxDQUFOLElBQVd5SixTQUFTLENBQUN4SixNQUFWLEdBQW1CeUosSUFBSSxDQUFDekosTUFBeEIsR0FBaUNxSixHQUFHLENBQUNySixNQUFyQyxHQUE4Q3VKLEdBRDVELEVBQ2tFO0VBQ2hFQyxVQUFBQSxTQUFTLElBQUlKLFFBQWI7RUFDQTtFQUNEOztFQUVESSxRQUFBQSxTQUFTLElBQUl6SixDQUFDLEtBQUssQ0FBTixHQUFVMEosSUFBVixHQUFpQkosR0FBRyxHQUFHSSxJQUFwQztFQUNEOztFQUVELGFBQU9ELFNBQVA7RUFDRDs7Ozs7O01DMUhrQkU7OztFQUNuQixtQkFBYTdMLElBQWIsRUFBbUJELEdBQW5CLEVBQXdCeUssVUFBeEIsRUFBb0M7RUFBQTs7RUFDbEMsU0FBS3NCLFdBQUwsR0FBbUJDLFlBQVksQ0FBQ3pDLGVBQWhDO0VBQ0EsU0FBSzBDLGdCQUFMLEdBQXdCaE0sSUFBSSxDQUFDZ00sZ0JBQUwsSUFBeUIsSUFBakQ7RUFDQSxTQUFLQyxZQUFMLEdBQW9Cak0sSUFBSSxDQUFDaU0sWUFBTCxJQUFxQixDQUF6QztFQUNBLFNBQUtDLFlBQUwsR0FBb0JsTSxJQUFJLENBQUNrTSxZQUFMLElBQXFCLEVBQXpDO0VBQ0EsU0FBS0MsbUJBQUwsR0FBMkJDLGtCQUFrQixDQUFDN0QsSUFBbkIsQ0FBd0J2SSxJQUFJLENBQUNtTSxtQkFBN0IsQ0FBM0I7RUFDQSxTQUFLRSxNQUFMLEdBQWNyTSxJQUFJLENBQUNxTSxNQUFMLElBQWUsSUFBN0I7RUFDQSxTQUFLbkYsT0FBTCxHQUFlb0QsYUFBYSxDQUFDL0IsSUFBZCxDQUFtQnZJLElBQUksQ0FBQ2tILE9BQXhCLEVBQWlDc0QsVUFBakMsRUFBNkMsS0FBS3dCLGdCQUFsRCxFQUFvRWhNLElBQUksQ0FBQzBLLE1BQXpFLENBQWY7RUFDQSxTQUFLM0QsR0FBTCxHQUFXOEUsT0FBTyxDQUFDUyxRQUFSLENBQWlCdE0sSUFBSSxDQUFDa0gsT0FBdEIsQ0FBWDtFQUNBLFNBQUtxRixXQUFMLEdBQW1CeE0sR0FBRyxJQUFJLElBQTFCO0VBQ0Q7Ozs7K0JBRWdCbUgsU0FBUztFQUN4QixVQUFJc0YsVUFBVSxHQUFHLEVBQWpCO0VBRUEsVUFBSUMsaUJBQWlCLEdBQUcsRUFBeEI7O0VBRUEsV0FBSyxJQUFJeEUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2YsT0FBTyxDQUFDL0UsTUFBNUIsRUFBb0M4RixDQUFDLEVBQXJDLEVBQXlDO0VBQ3ZDO0VBQ0EsWUFBSXlFLE1BQU0sR0FBR3hGLE9BQU8sQ0FBQ2UsQ0FBRCxDQUFQLENBQVdqSSxJQUFYLElBQW1Ca0gsT0FBTyxDQUFDZSxDQUFELENBQXZDOztFQUNBLFlBQUl5RSxNQUFNLElBQUlBLE1BQU0sQ0FBQ0MscUJBQXJCLEVBQTRDO0VBQzFDLGNBQUksQ0FBQ0YsaUJBQWlCLENBQUNHLFFBQXZCLEVBQWlDO0VBQy9CSCxZQUFBQSxpQkFBaUIsR0FBRztFQUNsQkcsY0FBQUEsUUFBUSxFQUFFRixNQUFNLENBQUNDLHFCQUFQLENBQTZCQyxRQURyQjtFQUVsQkMsY0FBQUEsU0FBUyxFQUFFSCxNQUFNLENBQUNDLHFCQUFQLENBQTZCRTtFQUZ0QixhQUFwQjtFQUlEOztFQUNETCxVQUFBQSxVQUFVLENBQUM3SixJQUFYLENBQWdCO0VBQ2RtSyxZQUFBQSxJQUFJLEVBQUVKLE1BRFE7RUFFZHpGLFlBQUFBLEtBQUssRUFBRXVGLFVBQVUsQ0FBQ3JLLE1BQVgsR0FBb0IsQ0FGYjtFQUdkeUssWUFBQUEsUUFBUSxFQUFFRixNQUFNLENBQUNDLHFCQUFQLENBQTZCQyxRQUh6QjtFQUlkQyxZQUFBQSxTQUFTLEVBQUVILE1BQU0sQ0FBQ0MscUJBQVAsQ0FBNkJFO0VBSjFCLFdBQWhCO0VBTUQ7RUFDRjs7RUFFRCxhQUFPO0VBQ0wscUJBQWFKLGlCQURSO0VBRUwsc0JBQWNEO0VBRlQsT0FBUDtFQUlEO0VBRUQ7Ozs7Ozs7OzsyQkFNYU8sU0FBU0MsTUFBTXhDLFlBQVk7RUFDdEMsVUFBSTVELFFBQVEsR0FBRyxFQUFmOztFQUNBLFVBQUksQ0FBQ21HLE9BQUwsRUFBYztFQUNaLGVBQU9uRyxRQUFQO0VBQ0Q7O0VBRUQsVUFBSSxDQUFDcUcsS0FBSyxDQUFDQyxPQUFOLENBQWNILE9BQWQsQ0FBTCxFQUE2QjtFQUMzQixlQUFPLElBQUlsQixPQUFKLENBQVlrQixPQUFaLEVBQXFCLElBQXJCLEVBQTJCdkMsVUFBM0IsQ0FBUDtFQUNELE9BUnFDOzs7RUFXdEMsV0FBSyxJQUFJdEksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzZLLE9BQU8sQ0FBQzVLLE1BQTVCLEVBQW9DRCxDQUFDLEVBQXJDLEVBQXlDO0VBQ3ZDMEUsUUFBQUEsUUFBUSxDQUFDakUsSUFBVCxDQUNFLElBQUlrSixPQUFKLENBQ0VrQixPQUFPLENBQUM3SyxDQUFELENBRFQsRUFFRThLLElBQUksQ0FBQ0QsT0FBTyxDQUFDN0ssQ0FBRCxDQUFQLENBQVc4SixnQkFBWixDQUZOLEVBR0V4QixVQUhGLENBREY7RUFPRDs7RUFFRCxhQUFPNUQsUUFBUDtFQUNEOzs7Ozs7TUFHR3dGOzs7RUFDSjtFQUNBO0VBQ0EsOEJBQWFlLGtCQUFiLEVBQWlDO0VBQUE7O0VBQy9CLFNBQUtoTSxHQUFMLEdBQVdnTSxrQkFBa0IsQ0FBQ2hNLEdBQW5CLElBQTBCZ00sa0JBQWtCLENBQUNDLFVBQXhEO0VBQ0EsU0FBSzNLLEtBQUwsR0FBYTBLLGtCQUFrQixDQUFDMUssS0FBbkIsSUFBNEIwSyxrQkFBa0IsQ0FBQ0UsWUFBNUQ7RUFDRDs7OzsyQkFFWWxCLHFCQUFxQjtFQUNoQyxVQUFJbUIsT0FBTyxHQUFHLEVBQWQ7O0VBQ0EsV0FBSyxJQUFJcEwsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2lLLG1CQUFtQixDQUFDaEssTUFBeEMsRUFBZ0RELENBQUMsRUFBakQsRUFBcUQ7RUFDbkRvTCxRQUFBQSxPQUFPLENBQUMzSyxJQUFSLENBQWEsSUFBSXlKLGtCQUFKLENBQXVCRCxtQkFBbUIsQ0FBQ2pLLENBQUQsQ0FBMUMsQ0FBYjtFQUNEOztFQUNELGFBQU9vTCxPQUFQO0VBQ0Q7Ozs7OztNQ3hGa0JDOzs7RUFDbkIsNEJBQWF2TixJQUFiLEVBQW1CO0VBQUE7O0VBQ2pCLFNBQUs2RyxPQUFMLEdBQWU3RyxJQUFJLENBQUM2RyxPQUFMLElBQWdCLElBQS9CO0VBQ0EsU0FBS0QsUUFBTCxHQUFnQjVHLElBQUksQ0FBQzRHLFFBQUwsSUFBaUIsRUFBakM7RUFFQTs7Ozs7O0VBS0EsU0FBS2tGLFdBQUwsR0FBbUI5TCxJQUFJLENBQUM4TCxXQUFMLElBQW9CQyxZQUFZLENBQUN6QyxlQUFwRDtFQUNEO0VBRUQ7Ozs7Ozs7Ozs7MkJBTWE5QyxVQUFVd0csTUFBTXhDLFlBQVk7RUFDdkMsYUFBTyxJQUFJK0MsZ0JBQUosQ0FBcUI7RUFDMUIxRyxRQUFBQSxPQUFPLEVBQUVMLFFBQVEsQ0FBQ0ssT0FEUTtFQUUxQkQsUUFBQUEsUUFBUSxFQUFFaUYsT0FBTyxDQUFDdEQsSUFBUixDQUFhL0IsUUFBUSxDQUFDdUcsT0FBdEIsRUFBK0JDLElBQS9CLEVBQXFDeEMsVUFBckM7RUFGZ0IsT0FBckIsQ0FBUDtFQUlEO0VBRUQ7Ozs7Ozs7c0NBSXdCO0VBQ3RCLGFBQU8sSUFBSStDLGdCQUFKLENBQXFCO0VBQUV6QixRQUFBQSxXQUFXLEVBQUVDLFlBQVksQ0FBQzFDO0VBQTVCLE9BQXJCLENBQVA7RUFDRDs7Ozs7O0VDckNIO01BRXFCbUU7OztFQUNuQiwwQkFBZ0M7RUFBQSxRQUFuQkMsWUFBbUIsdUVBQUosRUFBSTs7RUFBQTs7RUFDOUJyTixJQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLEVBQW9Cb04sWUFBcEI7RUFDQXJOLElBQUFBLE1BQU0sQ0FBQzBHLE1BQVAsQ0FBYyxJQUFkO0VBQ0Q7RUFFRDs7Ozs7Ozs7OzJCQUthTixVQUFVZ0UsWUFBWTtFQUNqQyxVQUFNeEssSUFBSSxxQkFBUXdHLFFBQVIsQ0FBVjs7RUFEaUMsVUFFekJrSCxNQUZ5QixHQUVEMU4sSUFGQyxDQUV6QjBOLE1BRnlCO0VBQUEsVUFFakJDLFdBRmlCLEdBRUQzTixJQUZDLENBRWpCMk4sV0FGaUI7O0VBSWpDLFVBQUlELE1BQU0sSUFBSWxELFVBQVUsQ0FBQ2tELE1BQU0sQ0FBQ0UsWUFBUixDQUF4QixFQUErQztFQUM3Q0YsUUFBQUEsTUFBTSxDQUFDakwsS0FBUCxHQUFlK0gsVUFBVSxDQUFDa0QsTUFBTSxDQUFDRSxZQUFSLENBQVYsQ0FDYkYsTUFBTSxDQUFDakwsS0FETSxFQUVia0wsV0FBVyxDQUFDM04sSUFBWixDQUFpQjZOLFdBRkosRUFHYkYsV0FBVyxDQUFDM0IsZ0JBSEMsRUFJYixJQUphLENBQWY7RUFLRDs7RUFFRCxhQUFPLElBQUl3QixZQUFKLENBQWlCeE4sSUFBakIsQ0FBUDtFQUNEOzs7Ozs7RUMxQkg7TUFFcUI4Tjs7O0VBQ25CLHNCQUFhQyxRQUFiLEVBQXVCO0VBQUE7O0VBQ3JCLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQVEsSUFBSSxFQUE1QjtFQUNBM04sSUFBQUEsTUFBTSxDQUFDMEcsTUFBUCxDQUFjLElBQWQ7RUFDRDs7OzsyQkFFWWlHLFNBQVM7RUFDcEIsVUFBSWlCLEdBQUcsR0FBRyxFQUFWOztFQUNBLFVBQUksQ0FBQ2pCLE9BQUQsSUFBWSxDQUFDRSxLQUFLLENBQUNDLE9BQU4sQ0FBY0gsT0FBZCxDQUFqQixFQUF5QztFQUN2QyxlQUFPaUIsR0FBUDtFQUNEOztFQUNELFdBQUssSUFBSTlMLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc2SyxPQUFPLENBQUM1SyxNQUE1QixFQUFvQ0QsQ0FBQyxFQUFyQyxFQUF5QztFQUN2QzhMLFFBQUFBLEdBQUcsQ0FBQ3JMLElBQUosQ0FBU29LLE9BQU8sQ0FBQzdLLENBQUQsQ0FBUCxDQUFXOEosZ0JBQXBCO0VBQ0Q7O0VBQ0QsYUFBTyxJQUFJOEIsVUFBSixDQUFlRSxHQUFmLENBQVA7RUFDRDs7Ozs7O01DWmtCQzs7O0VBQ25CLDZCQUF3QjtFQUFBLFFBQVhqTyxJQUFXLHVFQUFKLEVBQUk7O0VBQUE7O0VBQ3RCSSxJQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLEVBQW9CO0VBQUV5TCxNQUFBQSxXQUFXLEVBQUVDLFlBQVksQ0FBQ3pDO0VBQTVCLEtBQXBCLEVBQW1FdEosSUFBbkU7RUFDQUksSUFBQUEsTUFBTSxDQUFDMEcsTUFBUCxDQUFjLElBQWQ7RUFDRDtFQUVEOzs7Ozs7Ozs2QkFJUUksU0FBUztFQUNmLFVBQU1nSCxNQUFNLHFCQUFRLElBQVIsQ0FBWjs7RUFDQUEsTUFBQUEsTUFBTSxDQUFDaEgsT0FBUCxHQUFpQixLQUFLQSxPQUFMLENBQWFpSCxNQUFiLENBQW9CakgsT0FBTyxDQUFDQSxPQUE1QixDQUFqQjtFQUNBZ0gsTUFBQUEsTUFBTSxDQUFDbkgsR0FBUCxDQUFXeUYsVUFBWCxHQUF3QixLQUFLekYsR0FBTCxDQUFTeUYsVUFBVCxDQUFvQjJCLE1BQXBCLENBQTJCakgsT0FBTyxDQUFDSCxHQUFSLENBQVl5RixVQUF2QyxDQUF4QjtFQUNBLGFBQU8sSUFBSXlCLGVBQUosQ0FBb0JDLE1BQXBCLENBQVA7RUFDRDtFQUVEOzs7Ozs7OzsyQkFLYTFILFVBQVVnRSxZQUFZO0VBQ2pDLGFBQU8sSUFBSXlELGVBQUosQ0FBb0JwQyxPQUFPLENBQUN0RCxJQUFSLENBQWEvQixRQUFiLEVBQXVCLElBQXZCLEVBQTZCZ0UsVUFBN0IsQ0FBcEIsQ0FBUDtFQUNEO0VBRUQ7Ozs7Ozs7c0NBSXdCO0VBQ3RCLGFBQU8sSUFBSXlELGVBQUosQ0FBb0I7RUFBRW5DLFFBQUFBLFdBQVcsRUFBRUMsWUFBWSxDQUFDMUM7RUFBNUIsT0FBcEIsQ0FBUDtFQUNEOzs7aURBRWtDO0VBQ2pDLGFBQU8sSUFBUDtFQUNEOzs7Ozs7RUN6Q0g7O0VBRUE7Ozs7OztBQU1BLG9CQUFlO0VBQ2IrRSxFQUFBQSxVQUFVLEVBQUUsWUFEQztFQUViQyxFQUFBQSxpQkFBaUIsRUFBRSxtQkFGTjtFQUdiQyxFQUFBQSxnQkFBZ0IsRUFBRSxrQkFITDtFQUliQyxFQUFBQSxZQUFZLEVBQUUsY0FKRDtFQUtiQyxFQUFBQSxhQUFhLEVBQUUsZUFMRjtFQU1iQyxFQUFBQSxNQUFNLEVBQUUsUUFOSztFQU9iQyxFQUFBQSxLQUFLLEVBQUUsT0FQTTtFQVFiQyxFQUFBQSxRQUFRLEVBQUUsVUFSRztFQVNiQyxFQUFBQSxZQUFZLEVBQUUsY0FURDtFQVViQyxFQUFBQSxlQUFlLEVBQUUsaUJBVko7RUFXYkMsRUFBQUEsWUFBWSxFQUFFLGNBWEQ7RUFZYkMsRUFBQUEsTUFBTSxFQUFFLFFBWks7RUFhYkMsRUFBQUEsbUJBQW1CLEVBQUU7RUFiUixDQUFmOztFQ1JBOztFQUVBOzs7TUFHcUJDOzs7RUFDbkIsMEJBQWFqUCxJQUFiLEVBQW1CO0VBQUE7O0VBQ2pCOzs7O0VBSUEsU0FBS3NOLE9BQUwsR0FBZXROLElBQUksQ0FBQ3NOLE9BQUwsSUFBZ0IsRUFBL0I7RUFDQWxOLElBQUFBLE1BQU0sQ0FBQzBHLE1BQVAsQ0FBYyxJQUFkO0VBQ0Q7RUFFRDs7Ozs7Ozs7OzJCQUthTixVQUFVO0VBQUEsVUFDYjZGLE1BRGEsR0FDRjdGLFFBREUsQ0FDYjZGLE1BRGE7RUFFckIsVUFBTTZDLGNBQWMsR0FBRzdDLE1BQU0sQ0FBQ3RGLEdBQVAsQ0FBVyxVQUFBb0ksQ0FBQztFQUFBLGVBQUs7RUFDdENsSSxVQUFBQSxLQUFLLEVBQUVrSSxDQUFDLENBQUMsYUFBRCxDQUQ4QjtFQUV0Q0MsVUFBQUEsT0FBTyxFQUFFRCxDQUFDLENBQUMsU0FBRCxDQUY0QjtFQUd0Q0UsVUFBQUEsT0FBTyxFQUFFRixDQUFDLENBQUNFLE9BQUYsQ0FBVXRJLEdBQVYsQ0FBYyxVQUFBdUksQ0FBQztFQUFBLG1CQUFLO0VBQzNCckksY0FBQUEsS0FBSyxFQUFFcUksQ0FBQyxDQUFDLGFBQUQsQ0FEbUI7RUFFM0JDLGNBQUFBLFVBQVUsRUFBRUQsQ0FBQyxDQUFDLE9BQUQsQ0FGYztFQUczQkUsY0FBQUEsUUFBUSxFQUFFRixDQUFDLENBQUMsVUFBRCxDQUhnQjtFQUkzQnJKLGNBQUFBLE1BQU0sRUFBRXFKLENBQUMsQ0FBQyxRQUFEO0VBSmtCLGFBQUw7RUFBQSxXQUFmO0VBSDZCLFNBQUw7RUFBQSxPQUFaLENBQXZCO0VBV0EsYUFBTyxJQUFJTCxjQUFKLENBQW1CO0VBQUUzQixRQUFBQSxPQUFPLEVBQUU0QjtFQUFYLE9BQW5CLENBQVA7RUFDRDs7Ozs7O0VDekJIOzs7Ozs7TUFLcUJPOzs7Ozs7Ozs7Z0NBQ0R6UCxNQUE2QjtFQUFBOztFQUFBLFVBQXZCZ04sSUFBdUIsdUVBQWhCLEVBQWdCO0VBQUEsVUFBWnhDLFVBQVk7RUFDN0MsVUFBSWhFLFFBQVEsR0FBR3hHLElBQUksQ0FBQ3dHLFFBQXBCO0VBQ0EsOENBQ0drSixXQUFXLENBQUNmLFFBRGYsRUFDMEJuSSxRQUFRLENBQUNLLE9BRG5DLHlCQUVHNkksV0FBVyxDQUFDdEIsVUFGZixFQUU0Qk4sVUFBVSxDQUFDdkYsSUFBWCxDQUFnQi9CLFFBQVEsQ0FBQ3VHLE9BQXpCLENBRjVCLHlCQUdHMkMsV0FBVyxDQUFDbEIsYUFIZixFQUcrQmhCLFlBQVksQ0FBQ2pGLElBQWIsQ0FBa0IvQixRQUFRLENBQUNpSCxZQUEzQixFQUF5Q2pELFVBQXpDLENBSC9CLHlCQUlHa0YsV0FBVyxDQUFDckIsaUJBSmYsRUFJbUNkLGdCQUFnQixDQUFDaEYsSUFBakIsQ0FBc0IvQixRQUF0QixFQUFnQ3dHLElBQWhDLEVBQXNDeEMsVUFBdEMsQ0FKbkM7RUFNRDs7O3dDQUV5QnhLLE1BQU13SyxZQUFZO0VBQUE7O0VBQzFDLGdEQUNHa0YsV0FBVyxDQUFDZixRQURmLEVBQzBCM08sSUFBSSxDQUFDd0csUUFBTCxDQUFjSyxPQUR4QywwQkFFRzZJLFdBQVcsQ0FBQ3RCLFVBRmYsRUFFNEIsSUFBSU4sVUFBSixFQUY1QiwwQkFHRzRCLFdBQVcsQ0FBQ3BCLGdCQUhmLEVBR2tDTCxlQUFlLENBQUMxRixJQUFoQixDQUFxQnZJLElBQUksQ0FBQ3dHLFFBQTFCLEVBQW9DZ0UsVUFBcEMsQ0FIbEMsMEJBSUdrRixXQUFXLENBQUNiLGVBSmYsRUFJaUNJLGNBQWMsQ0FBQzFHLElBQWYsQ0FBb0J2SSxJQUFJLENBQUN3RyxRQUF6QixDQUpqQztFQU1EOzs7Ozs7RUNoQ0g7O0VBRUE7Ozs7TUFJcUJtSjs7O0VBQ25CLGdDQUFvQztFQUFBLFFBQXZCOUcsUUFBdUIsdUVBQVosRUFBWTtFQUFBLFFBQVIrRyxNQUFROztFQUFBOztFQUNsQzs7OztFQUlBLFNBQUtwTixJQUFMLEdBQVlxRyxRQUFRLENBQUNyRyxJQUFULElBQWlCLElBQTdCO0VBRUE7Ozs7O0VBSUEsU0FBS3dHLEtBQUwsR0FBYUgsUUFBUSxDQUFDRyxLQUFULElBQWtCLElBQS9CO0VBRUE7Ozs7O0VBSUEsU0FBSzZHLGFBQUwsR0FBcUJoSCxRQUFRLENBQUNnSCxhQUFULElBQTBCLElBQS9DO0VBRUE7Ozs7O0VBSUEsU0FBSzVHLFlBQUwsR0FBb0JKLFFBQVEsQ0FBQ0ksWUFBVCxJQUF5QixJQUE3QztFQUVBOzs7OztFQUlBLFNBQUtDLG1CQUFMLEdBQTJCTCxRQUFRLENBQUNLLG1CQUFULElBQWdDLElBQTNEO0VBRUE7Ozs7O0VBSUEsU0FBSzBHLE1BQUwsR0FBY0EsTUFBTSxJQUFJLElBQXhCO0VBRUF4UCxJQUFBQSxNQUFNLENBQUMwRyxNQUFQLENBQWMsSUFBZDtFQUNEOzs7O2tDQUVtQjtFQUNsQixhQUFPO0VBQ0xnSixRQUFBQSxpQkFBaUIsRUFBRTtFQURkLE9BQVA7RUFHRDs7OzZCQUVjakgsVUFBVStHLFNBQVE7RUFDL0IsYUFBT0Qsa0JBQWtCLENBQUM5RyxRQUFELEVBQVcrRyxPQUFYLENBQXpCO0VBQ0Q7Ozs7OztFQzFDSDs7Ozs7TUFJcUJHOzs7RUFDbkIsa0JBQTBCO0VBQUEsUUFBYnJLLE1BQWEsdUVBQUosRUFBSTs7RUFBQTs7RUFDeEIsUUFBSSxPQUFPQSxNQUFNLENBQUNqQyxNQUFkLEtBQXlCLFFBQTdCLEVBQXVDO0VBQ3JDLFlBQU0sSUFBSXVCLEtBQUosQ0FBVSxrREFBVixDQUFOO0VBQ0Q7O0VBRUQsUUFBSSxPQUFPVSxNQUFNLENBQUNDLFVBQWQsS0FBNkIsUUFBakMsRUFBMkM7RUFDekMsWUFBTSxJQUFJWCxLQUFKLENBQVUsc0RBQVYsQ0FBTjtFQUNEO0VBRUQ7Ozs7Ozs7RUFLQSxTQUFLeEIsT0FBTCxHQUFla0MsTUFBTSxDQUFDakMsTUFBdEI7RUFFQTs7Ozs7O0VBS0EsU0FBS21DLFdBQUwsR0FBbUJGLE1BQU0sQ0FBQ0MsVUFBMUI7RUFFQTs7Ozs7OztFQU1BLFNBQUtHLE9BQUwsR0FBZUosTUFBTSxDQUFDRyxNQUFQLElBQWlCLElBQWhDO0VBRUE7Ozs7OztFQUtBLFNBQUttSyxnQkFBTCxHQUF3QnRLLE1BQU0sQ0FBQ3VLLGVBQVAsSUFBMEIsRUFBbEQ7RUFFQTs7Ozs7O0VBS0EsU0FBS0MsYUFBTCxHQUFxQnhLLE1BQU0sQ0FBQ3dLLGFBQTVCO0VBRUE7Ozs7OztFQUtBLFNBQUtDLGlCQUFMLEdBQXlCekssTUFBTSxDQUFDeUssaUJBQWhDO0VBRUE7Ozs7Ozs7RUFNQSxTQUFLQyxTQUFMLEdBQWlCLElBQUkzSyxTQUFKLENBQWM7RUFDN0JoQyxNQUFBQSxNQUFNLEVBQUUsS0FBS0QsT0FEZ0I7RUFFN0JtQyxNQUFBQSxVQUFVLEVBQUUsS0FBS0MsV0FGWTtFQUc3QkMsTUFBQUEsTUFBTSxFQUFFLEtBQUtDO0VBSGdCLEtBQWQsQ0FBakI7RUFNQTs7Ozs7OztFQU1BLFNBQUt1SyxhQUFMLEdBQXFCLElBQUk3SCxlQUFKLENBQW9CO0VBQ3ZDL0UsTUFBQUEsTUFBTSxFQUFFLEtBQUtELE9BRDBCO0VBRXZDbUMsTUFBQUEsVUFBVSxFQUFFLEtBQUtDLFdBRnNCO0VBR3ZDQyxNQUFBQSxNQUFNLEVBQUUsS0FBS0M7RUFIMEIsS0FBcEIsQ0FBckI7RUFNQTs7Ozs7O0VBS0EsU0FBS3dLLGVBQUwsR0FBdUIsSUFBSTFILGlCQUFKLENBQXNCO0VBQzNDbkYsTUFBQUEsTUFBTSxFQUFFLEtBQUtEO0VBRDhCLEtBQXRCLENBQXZCO0VBR0Q7RUFFRDs7Ozs7Ozs7Ozs7Ozs7OztxQ0FZZ0J1QyxhQUFhekQsT0FBTztFQUFBOztFQUNsQyxVQUFJLENBQUNBLEtBQUssQ0FBQ2lPLE1BQVgsRUFBbUI7RUFDakIsYUFBS0wsYUFBTCxDQUFtQk0sR0FBbkIsQ0FBdUJkLFdBQVcsQ0FBQ3BCLGdCQUFuQyxFQUFxREwsZUFBZSxDQUFDd0MsYUFBaEIsRUFBckQ7RUFDRDs7RUFFRCxhQUFPLEtBQUtMLFNBQUwsQ0FDSk0sY0FESSxDQUNXM0ssV0FEWDtFQUVISSxRQUFBQSxLQUFLLEVBQUUsS0FBSytKLGFBQUwsQ0FBbUJTLFFBQW5CLENBQTRCakIsV0FBVyxDQUFDWixZQUF4QztFQUZKLFNBR0F4TSxLQUhBO0VBSUhnRSxRQUFBQSx1QkFBdUIsRUFBRSxLQUFLc0s7RUFKM0IsVUFNSnJLLElBTkksQ0FNQyxVQUFBQyxRQUFRO0VBQUEsZUFBSWlKLHFCQUFxQixDQUFDb0IsaUJBQXRCLENBQXdDckssUUFBeEMsRUFBa0QsS0FBSSxDQUFDd0osZ0JBQXZELENBQUo7RUFBQSxPQU5ULEVBT0p6SixJQVBJLENBT0MsVUFBQXZHLElBQUksRUFBSTtFQUNaLFFBQUEsS0FBSSxDQUFDa1EsYUFBTCxDQUFtQk0sR0FBbkIsQ0FBdUJkLFdBQVcsQ0FBQ2YsUUFBbkMsRUFBNkMzTyxJQUFJLENBQUMwUCxXQUFXLENBQUNmLFFBQWIsQ0FBakQ7O0VBQ0EsUUFBQSxLQUFJLENBQUN1QixhQUFMLENBQW1CTSxHQUFuQixDQUF1QmQsV0FBVyxDQUFDdEIsVUFBbkMsRUFBK0NwTyxJQUFJLENBQUMwUCxXQUFXLENBQUN0QixVQUFiLENBQW5EOztFQUVBLFlBQUk5TCxLQUFLLENBQUNpTyxNQUFWLEVBQWtCO0VBQ2hCLGNBQU1PLGFBQWEsR0FBRyxLQUFJLENBQUNaLGFBQUwsQ0FBbUJTLFFBQW5CLENBQTRCakIsV0FBVyxDQUFDcEIsZ0JBQXhDLEVBQ25CaUMsTUFEbUIsQ0FDWnZRLElBQUksQ0FBQzBQLFdBQVcsQ0FBQ3BCLGdCQUFiLENBRFEsQ0FBdEI7O0VBRUEsVUFBQSxLQUFJLENBQUM0QixhQUFMLENBQW1CTSxHQUFuQixDQUF1QmQsV0FBVyxDQUFDcEIsZ0JBQW5DLEVBQXFEd0MsYUFBckQ7RUFDRCxTQUpELE1BSU87RUFDTCxVQUFBLEtBQUksQ0FBQ1osYUFBTCxDQUFtQk0sR0FBbkIsQ0FBdUJkLFdBQVcsQ0FBQ3BCLGdCQUFuQyxFQUFxRHRPLElBQUksQ0FBQzBQLFdBQVcsQ0FBQ3BCLGdCQUFiLENBQXpEO0VBQ0Q7O0VBRUQsWUFBSXRPLElBQUksQ0FBQzBQLFdBQVcsQ0FBQ2IsZUFBYixDQUFSLEVBQXVDO0VBQ3JDLFVBQUEsS0FBSSxDQUFDcUIsYUFBTCxDQUFtQk0sR0FBbkIsQ0FBdUJkLFdBQVcsQ0FBQ2IsZUFBbkMsRUFBb0Q3TyxJQUFJLENBQUMwUCxXQUFXLENBQUNiLGVBQWIsQ0FBeEQ7RUFDRDtFQUNGLE9BdEJJLENBQVA7RUF1QkQ7Ozs2QkFFT25JLGFBQWFzRyxNQUFNO0VBQUE7O0VBQ3pCLFdBQUtrRCxhQUFMLENBQW1CTSxHQUFuQixDQUF1QmQsV0FBVyxDQUFDckIsaUJBQW5DLEVBQXNEZCxnQkFBZ0IsQ0FBQ2tELGFBQWpCLEVBQXREO0VBRUEsYUFBTyxLQUFLTCxTQUFMLENBQ0pXLGVBREksQ0FDWXJLLFdBRFosRUFFSkgsSUFGSSxDQUVDLFVBQUFDLFFBQVE7RUFBQSxlQUFJaUoscUJBQXFCLENBQUN1QixTQUF0QixDQUFnQ3hLLFFBQWhDLEVBQTBDd0csSUFBMUMsRUFBZ0QsTUFBSSxDQUFDZ0QsZ0JBQXJELENBQUo7RUFBQSxPQUZULEVBR0p6SixJQUhJLENBR0MsVUFBQXZHLElBQUksRUFBSTtFQUNaLFFBQUEsTUFBSSxDQUFDa1EsYUFBTCxDQUFtQk0sR0FBbkIsQ0FBdUJkLFdBQVcsQ0FBQ2YsUUFBbkMsRUFBNkMzTyxJQUFJLENBQUMwUCxXQUFXLENBQUNmLFFBQWIsQ0FBakQ7O0VBQ0EsUUFBQSxNQUFJLENBQUN1QixhQUFMLENBQW1CTSxHQUFuQixDQUF1QmQsV0FBVyxDQUFDdEIsVUFBbkMsRUFBK0NwTyxJQUFJLENBQUMwUCxXQUFXLENBQUN0QixVQUFiLENBQW5EOztFQUNBLFFBQUEsTUFBSSxDQUFDOEIsYUFBTCxDQUFtQk0sR0FBbkIsQ0FBdUJkLFdBQVcsQ0FBQ2xCLGFBQW5DLEVBQWtEeE8sSUFBSSxDQUFDMFAsV0FBVyxDQUFDbEIsYUFBYixDQUF0RDs7RUFDQSxRQUFBLE1BQUksQ0FBQzBCLGFBQUwsQ0FBbUJNLEdBQW5CLENBQXVCZCxXQUFXLENBQUNyQixpQkFBbkMsRUFBc0RyTyxJQUFJLENBQUMwUCxXQUFXLENBQUNyQixpQkFBYixDQUExRCxFQUEyRnJCLElBQTNGOztFQUNBLFFBQUEsTUFBSSxDQUFDa0QsYUFBTCxDQUFtQk0sR0FBbkIsQ0FBdUJkLFdBQVcsQ0FBQ1YsbUJBQW5DLEVBQXdELElBQUlXLGtCQUFKLENBQXVCO0VBQzdFMUcsVUFBQUEsWUFBWSxFQUFFdkM7RUFEK0QsU0FBdkIsQ0FBeEQ7RUFHRCxPQVhJLENBQVA7RUFZRDtFQUVEOzs7Ozs7Ozs7NENBTXVCVixPQUFPaUwsV0FBVztFQUFBOztFQUN2QyxhQUFPLEtBQUtaLGFBQUwsQ0FDSmEsY0FESSxDQUNXbEwsS0FEWCxFQUVKTyxJQUZJLENBRUMsVUFBQXZHLElBQUksRUFBSTtFQUNaLFFBQUEsTUFBSSxDQUFDa1EsYUFBTCxDQUFtQk0sR0FBbkIsV0FBMEJkLFdBQVcsQ0FBQ25CLFlBQXRDLGNBQXNEMEMsU0FBdEQsR0FBbUVqUixJQUFuRTtFQUNELE9BSkksQ0FBUDtFQUtEO0VBRUQ7Ozs7Ozs7Ozs7OzsyQ0FTc0JnRyxPQUFPaUwsV0FBV2xMLGFBQWEwQyxRQUFRO0VBQUE7O0VBQzNELGFBQU8sS0FBSzRILGFBQUwsQ0FDSmMsYUFESSxDQUNVbkwsS0FEVixFQUNpQkQsV0FEakIsRUFDOEIwQyxNQUQ5QixFQUVKbEMsSUFGSSxDQUVDLFVBQUF2RyxJQUFJLEVBQUk7RUFDWixRQUFBLE1BQUksQ0FBQ2tRLGFBQUwsQ0FBbUJNLEdBQW5CLFdBQTBCZCxXQUFXLENBQUNuQixZQUF0QyxjQUFzRDBDLFNBQXRELEdBQW1FalIsSUFBbkU7RUFDRCxPQUpJLENBQVA7RUFLRDtFQUVEOzs7Ozs7Ozs7Ozt5Q0FRb0JnRyxPQUFPaUwsV0FBV2xMLGFBQWEwQyxRQUFRO0VBQUE7O0VBQ3pELGFBQU8sS0FBSzRILGFBQUwsQ0FDSmUsV0FESSxDQUNRcEwsS0FEUixFQUNlRCxXQURmLEVBQzRCMEMsTUFENUIsRUFFSmxDLElBRkksQ0FFQyxVQUFBdkcsSUFBSSxFQUFJO0VBQ1osUUFBQSxNQUFJLENBQUNrUSxhQUFMLENBQW1CTSxHQUFuQixXQUEwQmQsV0FBVyxDQUFDbkIsWUFBdEMsY0FBc0QwQyxTQUF0RCxHQUFtRWpSLElBQW5FO0VBQ0QsT0FKSSxDQUFQO0VBS0Q7RUFFRDs7Ozs7Ozs7Ozs7Ozs7cUNBV2dCNkksVUFBVTtFQUFBOztFQUN4QixhQUFPLEtBQUt5SCxlQUFMLENBQ0plLGNBREksQ0FDV3hJLFFBRFgsRUFFSnRDLElBRkksQ0FFQyxVQUFBdkcsSUFBSSxFQUFJO0VBQ1osUUFBQSxNQUFJLENBQUNrUSxhQUFMLENBQW1CTSxHQUFuQixDQUNFZCxXQUFXLENBQUNWLG1CQURkLEVBRUVXLGtCQUFrQixDQUFDMkIsU0FBbkIsRUFGRjtFQUdELE9BTkksQ0FBUDtFQU9EO0VBRUQ7Ozs7Ozs7K0JBSVVoUCxPQUFPO0VBQ2YsV0FBSzROLGFBQUwsQ0FBbUJNLEdBQW5CLENBQXVCZCxXQUFXLENBQUNoQixLQUFuQyxFQUEwQ3BNLEtBQTFDO0VBQ0Q7RUFFRDs7Ozs7OztpQ0FJWXVFLFNBQVM7RUFDbkIsV0FBS3FKLGFBQUwsQ0FBbUJNLEdBQW5CLENBQXVCZCxXQUFXLENBQUNmLFFBQW5DLEVBQTZDOUgsT0FBN0M7RUFDRDtFQUVEOzs7Ozs7Ozs7Z0NBTVdvSyxXQUFXaEwsUUFBUTtFQUM1QixXQUFLaUssYUFBTCxDQUFtQk0sR0FBbkIsV0FBMEJkLFdBQVcsQ0FBQ2pCLE1BQXRDLGNBQWdEd0MsU0FBaEQsR0FBNkRoTCxNQUE3RDtFQUNEOzs7cUNBRWVnTCxXQUFXaEwsUUFBUTtFQUNqQyxXQUFLaUssYUFBTCxDQUFtQk0sR0FBbkIsV0FBMEJkLFdBQVcsQ0FBQ2QsWUFBdEMsY0FBc0RxQyxTQUF0RCxHQUFtRWhMLE1BQW5FO0VBQ0Q7Ozs2Q0FFdUI7RUFDdEIsV0FBSzJLLHdCQUFMLEdBQWdDLElBQWhDO0VBQ0Q7OztxQ0FFZXpLLE9BQU87RUFDckIsV0FBSytKLGFBQUwsQ0FBbUJNLEdBQW5CLENBQXVCZCxXQUFXLENBQUNaLFlBQW5DLEVBQWlEM0ksS0FBakQ7RUFDRDs7O3lCQUVHb0wsS0FBS2pKLFVBQVVrSixJQUFJO0VBQ3JCLGFBQU8sS0FBS3RCLGFBQUwsQ0FBbUJ1QixFQUFuQixDQUFzQkYsR0FBdEIsRUFBMkJqSixRQUEzQixFQUFxQ2tKLEVBQXJDLENBQVA7RUFDRDs7Ozs7O0VDM1FIOzs7Ozs7OztNQU9xQkU7OztFQUNuQiw4QkFBZTtFQUFBOztFQUNiLFFBQUksQ0FBQ0EsZ0JBQWdCLENBQUNDLFdBQWpCLENBQTZCLElBQTdCLENBQUwsRUFBeUM7RUFDdkMsYUFBT0QsZ0JBQWdCLENBQUNFLFdBQWpCLEVBQVA7RUFDRDtFQUVEOzs7Ozs7OztFQU1BLFNBQUtDLGtCQUFMLEdBQTBCLEVBQTFCO0VBRUE7Ozs7O0VBSUEsU0FBS0MsaUJBQUwsR0FBeUIsRUFBekI7RUFFQTs7Ozs7Ozs7Ozs7RUFVQSxTQUFLQyxLQUFMLEdBQWEsSUFBYjtFQUVBOzs7OztFQUlBLFNBQUtDLFNBQUwsR0FBaUIsSUFBakI7RUFFQTs7OztFQUdBLFNBQUtDLGtCQUFMLEdBQTBCLElBQTFCO0VBQ0Q7Ozs7a0NBY1lDLFVBQVU7RUFDckIsV0FBS0YsU0FBTCxHQUFpQkUsUUFBakI7RUFDQSxhQUFPLElBQVA7RUFDRDs7OzhCQUVRQyxNQUFNO0VBQ2IsV0FBS0osS0FBTCxHQUFhSSxJQUFiO0VBQ0EsYUFBTyxJQUFQO0VBQ0Q7OzsyQ0FFcUJDLFVBQVU7RUFDOUIsV0FBS0gsa0JBQUwsR0FBMEJHLFFBQTFCO0VBQ0EsYUFBTyxJQUFQO0VBQ0Q7RUFFRDs7Ozs7OzsrQkFJVUMsZ0JBQWdCO0VBQ3hCLFdBQUtSLGtCQUFMLENBQXdCUSxjQUFjLENBQUNDLElBQXZDLElBQStDRCxjQUEvQztFQUNBLGFBQU8sSUFBUDtFQUNEO0VBRUQ7Ozs7Ozs7Ozs7NkJBT1FFLGVBQWV0UyxNQUFNO0VBQzNCO0VBQ0E7RUFDQTtFQUNBQSxNQUFBQSxJQUFJLEdBQUdHLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0VBQ25COFIsUUFBQUEsSUFBSSxFQUFFLEtBQUtKLEtBRFE7RUFFbkJHLFFBQUFBLFFBQVEsRUFBRSxLQUFLRixTQUZJO0VBR25CUSxRQUFBQSxpQkFBaUIsRUFBRSxLQUFLUCxrQkFITDtFQUluQlEsUUFBQUEsZ0JBQWdCLEVBQUU7RUFKQyxPQUFkLEVBS0p4UyxJQUxJLENBQVA7RUFPQSxVQUFJeVMsY0FBYyxHQUFHLEtBQUtiLGtCQUFMLENBQXdCVSxhQUF4QixDQUFyQjs7RUFFQSxVQUNFLENBQUNHLGNBQWMsQ0FBQ0Msd0JBQWYsRUFBRCxJQUNBLEtBQUtiLGlCQUFMLENBQXVCYyxJQUF2QixDQUE0QixVQUFBQyxDQUFDO0VBQUEsZUFBSUEsQ0FBQyxDQUFDclEsSUFBRixLQUFXdkMsSUFBSSxDQUFDdUMsSUFBcEI7RUFBQSxPQUE3QixDQUZGLEVBR0U7RUFDQSxjQUFNLElBQUl5QyxxQkFBSix1Q0FDMkJoRixJQUFJLENBQUN1QyxJQURoQyxzQkFFSitQLGFBRkksQ0FBTjtFQUdELE9BcEIwQjs7O0VBdUIzQixVQUFJck4sU0FBUyxHQUNYLElBQUksS0FBSzJNLGtCQUFMLENBQXdCVSxhQUF4QixDQUFKLENBQTJDdFMsSUFBM0MsRUFDRzZTLElBREgsQ0FDUTdTLElBRFIsQ0FERjs7RUFJQSxXQUFLNlIsaUJBQUwsQ0FBdUJuUCxJQUF2QixDQUE0QnVDLFNBQTVCLEVBM0IyQjtFQThCM0I7RUFDQTs7O0VBQ0EsVUFBSSxLQUFLNk0sS0FBTCxJQUFjLEtBQUtBLEtBQUwsQ0FBVzdCLGFBQVgsS0FBNkIsSUFBL0MsRUFBcUQ7RUFDbkQsWUFBSWhMLFNBQVMsQ0FBQ29ELFFBQVYsS0FBdUI1SCxTQUF2QixJQUFvQ3dFLFNBQVMsQ0FBQ29ELFFBQVYsS0FBdUIsSUFBL0QsRUFBcUU7RUFDbkUsaUJBQU9wRCxTQUFQO0VBQ0Q7O0VBRUQsYUFBSzZNLEtBQUwsQ0FBVzdCLGFBQVgsQ0FDR3VCLEVBREgsQ0FDTSxRQUROLEVBQ2dCdk0sU0FBUyxDQUFDb0QsUUFEMUIsRUFDb0MsVUFBQ3RJLElBQUQsRUFBVTtFQUMxQ2tGLFVBQUFBLFNBQVMsQ0FBQzZOLFFBQVYsQ0FBbUIvUyxJQUFuQjtFQUNELFNBSEg7RUFJRDs7RUFFRCxhQUFPa0YsU0FBUDtFQUNEO0VBRUQ7Ozs7Ozs7OzZCQUtRQSxXQUFXO0VBQ2pCLFdBQUs2TSxLQUFMLENBQVc3QixhQUFYLENBQXlCOEMsR0FBekIsQ0FBNkIsUUFBN0IsRUFBdUM5TixTQUFTLENBQUNvRCxRQUFqRDs7RUFFQSxVQUFNeUMsS0FBSyxHQUFHLEtBQUsrRyxpQkFBTCxDQUF1Qm1CLFNBQXZCLENBQWlDLFVBQUFKLENBQUM7RUFBQSxlQUFJQSxDQUFDLENBQUNyUSxJQUFGLEtBQVcwQyxTQUFTLENBQUMxQyxJQUF6QjtFQUFBLE9BQWxDLENBQWQ7O0VBQ0EsV0FBS3NQLGlCQUFMLENBQXVCb0IsTUFBdkIsQ0FBOEJuSSxLQUE5QixFQUFxQyxDQUFyQztFQUNEOzs7eUNBRW1CdUgsTUFBTTtFQUN4QixhQUFPLEtBQUtSLGlCQUFMLENBQXVCcUIsSUFBdkIsQ0FBNEIsVUFBQU4sQ0FBQztFQUFBLGVBQUlBLENBQUMsQ0FBQ08sV0FBRixDQUFjZCxJQUFkLEtBQXVCQSxJQUEzQjtFQUFBLE9BQTdCLENBQVA7RUFDRDs7O2tDQXZHbUJlLFVBQVU7RUFDNUIsVUFBSSxDQUFDLEtBQUtBLFFBQVYsRUFBb0I7RUFDbEIsYUFBS0EsUUFBTCxHQUFnQkEsUUFBaEI7RUFDQSxlQUFPLElBQVA7RUFDRDs7RUFDRCxhQUFPLEtBQVA7RUFDRDs7O29DQUVxQjtFQUNwQixhQUFPLEtBQUtBLFFBQVo7RUFDRDs7Ozs7O0VDakVIOztFQUVBOzs7TUFHcUJDOzs7Ozs7Ozs7O0VBQ25COzs7Ozs7NkJBTVFDLFVBQVV2VCxNQUFNO0VBQ3RCLGFBQU91VCxRQUFQO0VBQ0Q7OztxQ0FFZS9RLE1BQU1nUCxJQUFJOzs7OEJBSWpCK0IsVUFBVTs7Ozs7O0VDaEJyQjs7Ozs7TUFJcUJDOzs7OztFQUNuQixnQ0FBd0M7RUFBQTs7RUFBQSxRQUEzQkMsU0FBMkIsdUVBQWYsRUFBZTtBQUFBO0VBQUE7O0VBQ3RDO0VBRUE7Ozs7OztFQUtBLFVBQUtDLFdBQUwsR0FBbUJELFNBQVMsQ0FBQ0UsR0FBVixJQUFpQixJQUFwQztFQUVBOzs7Ozs7RUFLQSxVQUFLQyxVQUFMLEdBQWtCSCxTQUFTLElBQUksRUFBL0I7RUFmc0M7RUFnQnZDOzs7OzJCQUVLQSxXQUFXO0VBQ2Y7RUFDQTtFQUNBLFdBQUtDLFdBQUwsR0FBbUJELFNBQVMsQ0FBQ0UsR0FBN0I7RUFDQSxXQUFLQyxVQUFMLEdBQWtCSCxTQUFsQixDQUplO0VBT2Y7O0VBQ0EsV0FBS0ksc0JBQUw7RUFDRDtFQUVEOzs7Ozs7O3FDQUlnQnJSLE1BQU1nUCxJQUFJO0VBQ3hCLFdBQUtrQyxXQUFMLENBQWlCSSxjQUFqQixDQUFnQ3RSLElBQWhDLEVBQXNDZ1AsRUFBdEM7RUFDRDtFQUVEOzs7Ozs7Ozs4QkFLUytCLFVBQVU7RUFDakIsVUFBSSxPQUFPQSxRQUFQLEtBQW9CLFFBQXhCLEVBQWtDO0VBQ2hDLGVBQU8sRUFBUDtFQUNEOztFQUNELGFBQU8sS0FBS0csV0FBTCxDQUFpQkssT0FBakIsQ0FBeUJSLFFBQXpCLENBQVA7RUFDRDtFQUVEOzs7Ozs7Ozs2QkFLUTdOLFFBQVExRixNQUFNO0VBQ3BCO0VBQ0E7RUFDQTtFQUNBLFVBQUkwRixNQUFNLENBQUM2TixRQUFQLEtBQW9CLElBQXhCLEVBQThCO0VBQzVCLGVBQU83TixNQUFNLENBQUM2TixRQUFQLENBQWdCdlQsSUFBaEIsQ0FBUDtFQUNEOztFQUVELFVBQUk7RUFDRixlQUFPLEtBQUs0VCxVQUFMLENBQWdCbE8sTUFBTSxDQUFDc08sWUFBdkIsRUFBcUNoVSxJQUFyQyxDQUFQO0VBQ0QsT0FGRCxDQUVFLE9BQU9pVSxDQUFQLEVBQVU7RUFDVixjQUFNLElBQUlqUCxLQUFKLENBQVUsbUNBQW1DVSxNQUFNLENBQUNzTyxZQUFwRCxFQUFrRUMsQ0FBbEUsQ0FBTjtFQUNEO0VBQ0Y7OzsrQ0FFeUI7RUFDeEIsV0FBS0gsY0FBTCxDQUFvQixNQUFwQixFQUE0QixVQUFVSSxJQUFWLEVBQWdCQyxJQUFoQixFQUFzQjlFLE9BQXRCLEVBQStCO0VBQ3pELGVBQVE2RSxJQUFJLEtBQUtDLElBQVYsR0FBa0I5RSxPQUFPLENBQUMrRSxFQUFSLENBQVcsSUFBWCxDQUFsQixHQUFxQy9FLE9BQU8sQ0FBQ2dGLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FBNUM7RUFDRCxPQUZEO0VBSUEsV0FBS1AsY0FBTCxDQUFvQixTQUFwQixFQUErQixVQUFVSSxJQUFWLEVBQWdCQyxJQUFoQixFQUFzQjlFLE9BQXRCLEVBQStCO0VBQzVELGVBQVE2RSxJQUFJLEtBQUtDLElBQVYsR0FBa0I5RSxPQUFPLENBQUMrRSxFQUFSLENBQVcsSUFBWCxDQUFsQixHQUFxQy9FLE9BQU8sQ0FBQ2dGLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FBNUM7RUFDRCxPQUZEO0VBSUEsV0FBS1AsY0FBTCxDQUFvQixtQkFBcEIsRUFBeUMsVUFBVVEsaUJBQVYsRUFBNkI7RUFDcEUsWUFBSUMsT0FBTyxHQUFHLENBQUMsS0FBS0QsaUJBQU4sRUFBeUJ0UixPQUF6QixDQUFpQyxLQUFqQyxFQUF3QyxFQUF4QyxDQUFkO0VBQ0EsWUFBSUMsS0FBSyxHQUFHc1IsT0FBTyxDQUFDdFIsS0FBUixDQUFjLDhCQUFkLENBQVo7O0VBQ0EsWUFBSUEsS0FBSixFQUFXO0VBQ1QsY0FBSXVSLFFBQVEsR0FBSXZSLEtBQUssQ0FBQyxDQUFELENBQUwsR0FBVyxLQUFYLEdBQW1CLEVBQW5DO0VBQ0EsaUJBQU8sQ0FBQ3VSLFFBQUQsRUFBVyxHQUFYLEVBQWdCdlIsS0FBSyxDQUFDLENBQUQsQ0FBckIsRUFBMEIsSUFBMUIsRUFBZ0NBLEtBQUssQ0FBQyxDQUFELENBQXJDLEVBQTBDLEdBQTFDLEVBQStDQSxLQUFLLENBQUMsQ0FBRCxDQUFwRCxFQUF5REosSUFBekQsQ0FBOEQsRUFBOUQsQ0FBUDtFQUNEOztFQUNELGVBQU8sSUFBUDtFQUNELE9BUkQ7RUFVQSxXQUFLaVIsY0FBTCxDQUFvQixRQUFwQixFQUE4QixVQUFVdFIsSUFBVixFQUFnQkMsS0FBaEIsRUFBdUI0TSxPQUF2QixFQUFnQztFQUM1RCxZQUFJb0YsSUFBSSxHQUFHQyxTQUFYO0VBQ0FyRixRQUFBQSxPQUFPLEdBQUdvRixJQUFJLENBQUNBLElBQUksQ0FBQ3RTLE1BQUwsR0FBYyxDQUFmLENBQWQ7O0VBRUEsWUFBSSxDQUFDa04sT0FBTyxDQUFDclAsSUFBUixDQUFhMlUsSUFBbEIsRUFBd0I7RUFDdEJ0RixVQUFBQSxPQUFPLENBQUNyUCxJQUFSLENBQWEyVSxJQUFiLEdBQW9CLEVBQXBCO0VBQ0Q7O0VBRUQsWUFBSUMsQ0FBQyxHQUFHLEVBQVI7O0VBQ0EsYUFBSyxJQUFJMVMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3VTLElBQUksQ0FBQ3RTLE1BQUwsR0FBYyxDQUFsQyxFQUFxQ0QsQ0FBQyxFQUF0QyxFQUEwQztFQUN4QzBTLFVBQUFBLENBQUMsR0FBR0EsQ0FBQyxHQUFHSCxJQUFJLENBQUN2UyxDQUFELENBQVo7RUFDRDs7RUFFRG1OLFFBQUFBLE9BQU8sQ0FBQ3JQLElBQVIsQ0FBYTJVLElBQWIsQ0FBa0JuUyxJQUFsQixJQUEwQm9TLENBQTFCO0VBQ0QsT0FkRDtFQWdCQSxXQUFLZCxjQUFMLENBQW9CLE1BQXBCLEVBQTRCLFVBQVV0UixJQUFWLEVBQWdCQyxLQUFoQixFQUF1QjRNLE9BQXZCLEVBQWdDO0VBQzFELGVBQU83TSxJQUFJLEtBQUs5QixTQUFULEdBQ0gsRUFERyxHQUVISCxJQUFJLENBQUNDLFNBQUwsQ0FBZWdDLElBQWYsQ0FGSjtFQUdELE9BSkQ7RUFLRDs7OztJQTlHNkM4UTs7RUNSaEQ7QUFFQSxFQUlBOztBQUNBLEVBQU8sSUFBTXVCLFNBQVMsR0FBRztFQUN2QkMsRUFBQUEsR0FBRyxFQUFFeEIsUUFEa0I7RUFFdkJ5QixFQUFBQSxVQUFVLEVBQUV2QjtFQUZXLENBQWxCOztFQ1BQOztFQUVBO0VBRUEsSUFBSXdCLFVBQVEsR0FBR3JULE1BQU0sQ0FBQ3FULFFBQXRCO0VBRUE7Ozs7O01BSXFCQzs7Ozs7Ozs7OzRCQUNMQyxHQUFHQyxHQUFHO0VBQ2xCSCxNQUFBQSxVQUFRLEdBQUdFLENBQVg7RUFDRDtFQUVEOzs7Ozs7Ozs2QkFLZUUsTUFBTTtFQUNuQixVQUFJLGlCQUFpQkosVUFBckIsRUFBK0I7RUFDN0I7RUFDQTtFQUNBO0VBQ0EsWUFBTUssU0FBUyxHQUFHTCxVQUFRLENBQUNNLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7RUFDQSxZQUFNQyxJQUFJLEdBQUdQLFVBQVEsQ0FBQ1EsV0FBVCxHQUF1QkMsd0JBQXZCLENBQWdETCxJQUFoRCxDQUFiO0VBQ0FDLFFBQUFBLFNBQVMsQ0FBQ0ssV0FBVixDQUFzQkgsSUFBdEI7RUFDQSxlQUFPRixTQUFQO0VBQ0QsT0FUa0I7RUFZbkI7OztFQUNBLGFBQU8sSUFBSU0sU0FBSixHQUFnQkMsZUFBaEIsQ0FBZ0NSLElBQWhDLEVBQXNDLFdBQXRDLEVBQW1EOVUsSUFBMUQ7RUFDRDtFQUVEOzs7Ozs7Ozs7OzRCQU9jdVYsUUFBUUMsVUFBVTtFQUM5QjtFQUNBO0VBQ0EsVUFBSUEsUUFBUSxLQUFLcFYsU0FBakIsRUFBNEI7RUFDMUJvVixRQUFBQSxRQUFRLEdBQUdELE1BQVg7RUFDQUEsUUFBQUEsTUFBTSxHQUFHYixVQUFUO0VBQ0Q7O0VBRUQsVUFBSWMsUUFBUSxZQUFZQyxXQUFwQixJQUFtQ0QsUUFBUSxZQUFZRSxNQUF2RCxJQUFpRUYsUUFBUSxZQUFZRyxZQUF6RixFQUF1RztFQUNyRyxlQUFPSCxRQUFQO0VBQ0Q7O0VBRUQsYUFBT0QsTUFBTSxDQUFDSyxhQUFQLENBQXFCSixRQUFyQixDQUFQO0VBQ0Q7RUFFRDs7Ozs7Ozs7OzsrQkFPaUJELFFBQVFDLFVBQVU7RUFDakM7RUFDQTtFQUNBLFVBQUlBLFFBQVEsS0FBS3BWLFNBQWpCLEVBQTRCO0VBQzFCb1YsUUFBQUEsUUFBUSxHQUFHRCxNQUFYO0VBQ0FBLFFBQUFBLE1BQU0sR0FBR2IsVUFBVDtFQUNELE9BTmdDOzs7RUFTakMsVUFBSWEsTUFBTSxJQUFJLElBQWQsRUFBb0I7RUFDbEJBLFFBQUFBLE1BQU0sR0FBR2IsVUFBVDtFQUNEOztFQUVELFVBQUljLFFBQVEsWUFBWUMsV0FBcEIsSUFBbUNELFFBQVEsWUFBWUcsWUFBdkQsSUFBdUVILFFBQVEsWUFBWUUsTUFBL0YsRUFBdUc7RUFDckcsZUFBTyxDQUFDRixRQUFELENBQVA7RUFDRDs7RUFFRCxhQUFPN0ksS0FBSyxDQUFDMUUsSUFBTixDQUFXc04sTUFBTSxDQUFDTSxnQkFBUCxDQUF3QkwsUUFBeEIsQ0FBWCxDQUFQO0VBQ0Q7Ozs4QkFFZXRFLElBQUk7RUFDbEIsVUFBSXdELFVBQVEsQ0FBQ29CLFVBQVQsS0FBd0IsVUFBeEIsSUFBc0NwQixVQUFRLENBQUNvQixVQUFULEtBQXdCLFFBQTlELElBQTBFcEIsVUFBUSxDQUFDb0IsVUFBVCxLQUF3QixhQUF0RyxFQUFxSDtFQUNuSDVFLFFBQUFBLEVBQUU7RUFDRjtFQUNEOztFQUVEeUQsTUFBQUEsR0FBRyxDQUFDeEQsRUFBSixDQUFPdUQsVUFBUCxFQUFpQixrQkFBakIsRUFBcUN4RCxFQUFyQztFQUNEO0VBRUQ7Ozs7Ozs7OytCQUtpQjZFLElBQW9CO0VBQUEsVUFBaEJDLFNBQWdCLHVFQUFKLEVBQUk7RUFDbkMsVUFBSUMsSUFBSSxHQUFHdkIsVUFBUSxDQUFDTSxhQUFULENBQXVCZSxFQUF2QixDQUFYO0VBQ0EsVUFBSUcsS0FBSyxHQUFHcFcsTUFBTSxDQUFDK0QsSUFBUCxDQUFZbVMsU0FBWixDQUFaOztFQUVBLFdBQUssSUFBSXBVLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdzVSxLQUFLLENBQUNyVSxNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztFQUNyQyxZQUFJc1UsS0FBSyxDQUFDdFUsQ0FBRCxDQUFMLEtBQWEsT0FBakIsRUFBMEI7RUFDeEIrUyxVQUFBQSxHQUFHLENBQUN3QixRQUFKLENBQWFGLElBQWIsRUFBbUJELFNBQVMsQ0FBQ0UsS0FBSyxDQUFDdFUsQ0FBRCxDQUFOLENBQTVCO0VBQ0E7RUFDRDs7RUFFRHFVLFFBQUFBLElBQUksQ0FBQ0MsS0FBSyxDQUFDdFUsQ0FBRCxDQUFOLENBQUosR0FBaUJvVSxTQUFTLENBQUNFLEtBQUssQ0FBQ3RVLENBQUQsQ0FBTixDQUExQjtFQUNEOztFQUVELGFBQU9xVSxJQUFQO0VBQ0Q7Ozs2QkFFY1YsUUFBUVUsTUFBTTtFQUMzQixVQUFJQSxJQUFJLEtBQUs3VixTQUFiLEVBQXdCO0VBQ3RCNlYsUUFBQUEsSUFBSSxHQUFHVixNQUFQO0VBQ0FBLFFBQUFBLE1BQU0sR0FBR2IsVUFBVDtFQUNEOztFQUVELFVBQUksT0FBT2EsTUFBUCxLQUFrQixRQUF0QixFQUFnQztFQUM5QkEsUUFBQUEsTUFBTSxHQUFHWixHQUFHLENBQUMzUyxLQUFKLENBQVV1VCxNQUFWLENBQVQ7RUFDRCxPQVIwQjs7O0VBVzNCLFVBQUksT0FBT1UsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtFQUM1QlYsUUFBQUEsTUFBTSxDQUFDYSxrQkFBUCxDQUEwQixZQUExQixFQUF3Q0gsSUFBeEM7RUFDRCxPQUZELE1BRU87RUFDTFYsUUFBQUEsTUFBTSxDQUFDSCxXQUFQLENBQW1CYSxJQUFuQjtFQUNEO0VBQ0Y7OzsrQkFFZ0JBLE1BQU1JLFdBQVc7RUFDaEMsVUFBSUMsT0FBTyxHQUFHRCxTQUFTLENBQUMxVSxLQUFWLENBQWdCLEdBQWhCLENBQWQ7RUFDQSxVQUFJNFUsR0FBRyxHQUFHRCxPQUFPLENBQUN6VSxNQUFsQjs7RUFFQSxXQUFLLElBQUlELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcyVSxHQUFwQixFQUF5QjNVLENBQUMsRUFBMUIsRUFBOEI7RUFDNUJxVSxRQUFBQSxJQUFJLENBQUNPLFNBQUwsQ0FBZUMsR0FBZixDQUFtQkgsT0FBTyxDQUFDMVUsQ0FBRCxDQUExQjtFQUNEO0VBQ0Y7Ozs0QkFFYTJULFFBQVE7RUFDcEJBLE1BQUFBLE1BQU0sQ0FBQ21CLFNBQVAsR0FBbUIsRUFBbkI7RUFDRDs7OzBCQUVXbEIsVUFBVW1CLFFBQVE7RUFDNUIsVUFBSVYsSUFBSSxHQUFHdEIsR0FBRyxDQUFDM1MsS0FBSixDQUFVd1QsUUFBVixDQUFYOztFQUVBLFdBQUssSUFBSW9CLElBQVQsSUFBaUJELE1BQWpCLEVBQXlCO0VBQ3ZCVixRQUFBQSxJQUFJLENBQUNZLEtBQUwsQ0FBV0QsSUFBWCxJQUFtQkQsTUFBTSxDQUFDQyxJQUFELENBQXpCO0VBQ0Q7RUFDRjs7OzJCQUVZcEIsVUFBVXNCLE9BQU0zUCxLQUFLO0VBQ2hDd04sTUFBQUEsR0FBRyxDQUFDM1MsS0FBSixDQUFVd1QsUUFBVixFQUFvQnVCLFlBQXBCLENBQWlDRCxLQUFqQyxFQUF1QzNQLEdBQXZDO0VBQ0Q7OztpQ0FFa0JxTyxVQUFVd0IsT0FBTztFQUFBOztFQUNsQ2xYLE1BQUFBLE1BQU0sQ0FBQzBDLE9BQVAsQ0FBZXdVLEtBQWYsRUFDR2xULE9BREgsQ0FDVztFQUFBO0VBQUEsWUFBRWdULElBQUY7RUFBQSxZQUFRM1AsR0FBUjs7RUFBQSxlQUFpQixLQUFJLENBQUMyUCxJQUFMLENBQVV0QixRQUFWLEVBQW9Cc0IsSUFBcEIsRUFBMEIzUCxHQUExQixDQUFqQjtFQUFBLE9BRFg7RUFFRDs7OzhCQUVlcU8sVUFBVXRRLE9BQU8rUixVQUFVO0VBQ3pDLFVBQUl0RCxDQUFDLEdBQUcsSUFBSXVELEtBQUosQ0FBVWhTLEtBQVYsRUFBaUJwRixNQUFNLENBQUNDLE1BQVAsQ0FBYztFQUNyQyxtQkFBVyxJQUQwQjtFQUVyQyxzQkFBYztFQUZ1QixPQUFkLEVBR3RCa1gsUUFBUSxJQUFJLEVBSFUsQ0FBakIsQ0FBUjtFQUtBdEMsTUFBQUEsR0FBRyxDQUFDM1MsS0FBSixDQUFVd1QsUUFBVixFQUFvQjJCLGFBQXBCLENBQWtDeEQsQ0FBbEM7RUFDRDs7O3lCQUVVNkIsVUFBVXZFLEtBQUttRyxTQUFTO0VBQ2pDekMsTUFBQUEsR0FBRyxDQUFDM1MsS0FBSixDQUFVd1QsUUFBVixFQUFvQjZCLGdCQUFwQixDQUFxQ3BHLEdBQXJDLEVBQTBDbUcsT0FBMUM7RUFDRDs7OzJCQUVZNUIsVUFBVXZFLEtBQUttRyxTQUFTO0VBQ25DekMsTUFBQUEsR0FBRyxDQUFDM1MsS0FBSixDQUFVd1QsUUFBVixFQUFvQjZCLGdCQUFwQixDQUFxQ3BHLEdBQXJDLEVBQTBDbUcsT0FBMUMsRUFBbUQ7RUFBRUUsUUFBQUEsSUFBSSxFQUFFO0VBQVIsT0FBbkQ7RUFDRDs7OzBCQUVXOUIsVUFBVXZFLEtBQUttRyxTQUFTO0VBQ2xDekMsTUFBQUEsR0FBRyxDQUFDM1MsS0FBSixDQUFVd1QsUUFBVixFQUFvQitCLG1CQUFwQixDQUF3Q3RHLEdBQXhDLEVBQTZDbUcsT0FBN0M7RUFDRDs7OytCQUVnQkksTUFBTWhDLFVBQVV2RSxLQUFLbUcsU0FBUztFQUM3QyxVQUFJckIsRUFBRSxHQUFHcEIsR0FBRyxDQUFDM1MsS0FBSixDQUFVd1YsSUFBVixDQUFUO0VBQ0F6QixNQUFBQSxFQUFFLENBQUNzQixnQkFBSCxDQUFvQnBHLEdBQXBCLEVBQXlCLFVBQVUvTCxLQUFWLEVBQWlCO0VBQ3hDLFlBQUl1UyxNQUFNLEdBQUd2UyxLQUFLLENBQUN1UyxNQUFuQjs7RUFDQSxlQUFPLENBQUNBLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQjNCLEVBQW5CLENBQVIsRUFBZ0M7RUFDOUIsY0FBSTBCLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlbkMsUUFBZixDQUFKLEVBQThCO0VBQzVCNEIsWUFBQUEsT0FBTyxDQUFDbFMsS0FBRCxFQUFRdVMsTUFBUixDQUFQO0VBQ0E7RUFDRDs7RUFDREEsVUFBQUEsTUFBTSxHQUFHQSxNQUFNLENBQUNHLFVBQWhCO0VBQ0Q7RUFDRixPQVREO0VBVUQ7Ozs7OztFQ3BNSDs7RUFFQTs7OztNQUlxQkM7OztFQUNuQiwwQkFBZTtFQUFBOztFQUNiOzs7OztFQUtBLFNBQUtDLFVBQUwsR0FBa0IsRUFBbEI7RUFDRDtFQUVEOzs7Ozs7Ozs7O3lCQU1JN0csS0FBS0MsSUFBSW9HLE1BQU07RUFDakIsVUFBSSxPQUFPcEcsRUFBUCxLQUFjLFVBQWxCLEVBQThCO0VBQzVCLGNBQU0sSUFBSXhNLEtBQUosQ0FBVSwrQ0FBVixDQUFOO0VBQ0Q7O0VBRUQsVUFBSSxLQUFLb1QsVUFBTCxDQUFnQjdHLEdBQWhCLE1BQXlCN1EsU0FBN0IsRUFBd0M7RUFDdEMsYUFBSzBYLFVBQUwsQ0FBZ0I3RyxHQUFoQixJQUF1QixFQUF2QjtFQUNEOztFQUVELFdBQUs2RyxVQUFMLENBQWdCN0csR0FBaEIsRUFBcUI1TyxJQUFyQixDQUEwQjtFQUN4QjZDLFFBQUFBLEtBQUssRUFBRStMLEdBRGlCO0VBRXhCQyxRQUFBQSxFQUFFLEVBQUVBLEVBRm9CO0VBR3hCb0csUUFBQUEsSUFBSSxFQUFFQSxJQUFJLElBQUk7RUFIVSxPQUExQjs7RUFNQSxhQUFPLElBQVA7RUFDRDtFQUVEOzs7Ozs7Ozs7OzsyQkFRTXJHLEtBQUtDLElBQUk7RUFDYixhQUFPLEtBQUtDLEVBQUwsQ0FBUUYsR0FBUixFQUFhQyxFQUFiLEVBQWlCLElBQWpCLENBQVA7RUFDRDtFQUVEOzs7Ozs7OzBCQUlLRCxLQUFLO0VBQ1IsYUFBTyxLQUFLNkcsVUFBTCxDQUFnQjdHLEdBQWhCLENBQVA7RUFDQSxhQUFPLElBQVA7RUFDRDtFQUVEOzs7Ozs7OzsyQkFLTUEsS0FBS3ZSLE1BQU07RUFDZixVQUFJcVksU0FBUyxHQUFHLEtBQUtELFVBQUwsQ0FBZ0I3RyxHQUFoQixDQUFoQjs7RUFDQSxVQUFJOEcsU0FBUyxLQUFLM1gsU0FBbEIsRUFBNkI7RUFDM0I7RUFDRCxPQUpjOzs7RUFPZixVQUFJNFgsSUFBSSxHQUFHLEVBQVg7O0VBQ0EsV0FBSyxJQUFJcFcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR21XLFNBQVMsQ0FBQ2xXLE1BQTlCLEVBQXNDRCxDQUFDLEVBQXZDLEVBQTJDO0VBQ3pDbVcsUUFBQUEsU0FBUyxDQUFDblcsQ0FBRCxDQUFULENBQWFzUCxFQUFiLENBQWdCeFIsSUFBaEI7O0VBQ0EsWUFBSXFZLFNBQVMsQ0FBQ25XLENBQUQsQ0FBVCxDQUFhMFYsSUFBYixLQUFzQixJQUExQixFQUFnQztFQUM5QjtFQUNELFNBSndDO0VBT3pDOzs7RUFDQVUsUUFBQUEsSUFBSSxDQUFDM1YsSUFBTCxDQUFVMFYsU0FBUyxDQUFDblcsQ0FBRCxDQUFuQjtFQUNELE9BakJjOzs7RUFvQmYsV0FBS2tXLFVBQUwsQ0FBZ0I3RyxHQUFoQixJQUF1QitHLElBQXZCO0VBQ0EsYUFBTyxJQUFQO0VBQ0Q7Ozs7OztFQ3BGSDs7Ozs7OztNQU1xQkM7Ozs7O0VBQ25CLGlCQUFhdlksSUFBYixFQUFtQjtFQUFBOztFQUFBOztFQUNqQjtFQUVBOzs7Ozs7RUFLQSxVQUFLd1ksTUFBTCxHQUFjeFksSUFBSSxJQUFJLEVBQXRCO0VBUmlCO0VBU2xCO0VBRUQ7Ozs7Ozs7OzJCQUlNa1gsTUFBTXVCLFFBQVE7RUFDbEIsV0FBS0MsSUFBTCxDQUFVeEIsSUFBVixFQUFnQnVCLE1BQWhCO0VBQ0Q7RUFFRDs7Ozs7Ozs7MEJBS0t2QixNQUFNdUIsUUFBUTtFQUNqQixXQUFLQyxJQUFMLENBQVV4QixJQUFWLEVBQWdCdUIsTUFBaEI7O0VBQ0EsV0FBS0UsSUFBTCxDQUFVLFFBQVY7RUFDRDtFQUVEOzs7Ozs7Ozs7OzJCQU9NekIsTUFBTXVCLFFBQVE7RUFDbEIsVUFBSUEsTUFBTSxLQUFLL1gsU0FBZixFQUEwQjtFQUN4QixhQUFLOFgsTUFBTCxHQUFjdEIsSUFBZDtFQUNELE9BRkQsTUFFTztFQUNMLGFBQUtzQixNQUFMLENBQVl0QixJQUFaLElBQW9CdUIsTUFBcEI7RUFDRDtFQUNGOzs7NkJBRU96WSxNQUFNO0VBQ1osV0FBS3dZLE1BQUwsR0FBY3hZLElBQWQ7RUFDQSxXQUFLMlksSUFBTCxDQUFVLFFBQVY7RUFDRDtFQUVEOzs7Ozs7OzswQkFLS0MsU0FBUztFQUNaLFVBQUlBLE9BQU8sS0FBS2xZLFNBQWhCLEVBQTJCO0VBQ3pCLGVBQU8sS0FBSzhYLE1BQVo7RUFDRDs7RUFDRCxhQUFPLEtBQUtBLE1BQUwsQ0FBWUksT0FBWixDQUFQO0VBQ0Q7OzswQkFFSTFCLE1BQU07RUFDVCxhQUFPLEtBQUtzQixNQUFMLENBQVl0QixJQUFaLE1BQXNCeFcsU0FBN0I7RUFDRDs7OytCQUVTO0VBQ1IsYUFBTyxLQUFLOFgsTUFBWjtFQUNEOzs7O0lBcEVnQ0w7O0VDVm5DOzs7TUFHcUJVOzs7RUFDbkIsMEJBQWF2RyxJQUFiLEVBQW1CckwsS0FBbkIsRUFBMEI7RUFBQTs7RUFDeEI7Ozs7RUFJQSxTQUFLNlIsU0FBTCxHQUFpQnhHLElBQUksQ0FBQ3lHLFdBQUwsRUFBakI7RUFFQTs7Ozs7RUFJQSxRQUFJOVIsS0FBSixFQUFXO0VBQ1QsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0VBQ0Q7RUFDRjtFQUVEOzs7Ozs7OztpQ0FJWW9JLFNBQVM7RUFDbkJqUCxNQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLEVBQW9CZ1AsT0FBcEI7RUFDQSxhQUFPLElBQVA7RUFDRDtFQUVEOzs7Ozs7bUNBR2M7RUFDWixhQUFPalAsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQixJQUFsQixDQUFQO0VBQ0Q7Ozs7OztFQzFCSDs7OztNQUdxQjJZOzs7RUFDbkIsNkJBQWE3RyxJQUFiLEVBQW1CeE0sVUFBbkIsRUFBK0JzVCxVQUEvQixFQUErRDtFQUFBOztFQUFBLFFBQXBCQyxhQUFvQix1RUFBSixFQUFJOztFQUFBOztFQUM3RDs7OztFQUlBLFNBQUtDLFdBQUwsR0FBbUJGLFVBQW5CO0VBRUE7Ozs7OztFQUtBLFNBQUtHLGNBQUwsR0FBc0JoWixNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCNlksYUFBbEIsRUFBaUM7RUFBRXZULE1BQUFBLFVBQVUsRUFBVkE7RUFBRixLQUFqQyxDQUF0QixDQVo2RDs7RUFlN0R3TSxJQUFBQSxJQUFJLENBQUNqQyxhQUFMLENBQW1CdUIsRUFBbkIsQ0FBc0IsUUFBdEIsRUFBZ0MvQixXQUFXLENBQUNmLFFBQTVDLEVBQXNELFVBQUF0SSxFQUFFO0VBQUEsYUFBSSxLQUFJLENBQUNnVCxVQUFMLENBQWdCaFQsRUFBaEIsQ0FBSjtFQUFBLEtBQXhEO0VBQ0Q7Ozs7aUNBRVdRLFNBQVM7RUFDbkIsV0FBS3VTLGNBQUwsQ0FBb0J2UyxPQUFwQixHQUE4QkEsT0FBOUI7RUFDRDs7OzZCQUVPckIsT0FBTztFQUNiLFVBQUksRUFBRUEsS0FBSyxZQUFZcVQsY0FBbkIsQ0FBSixFQUF3QztFQUN0QyxjQUFNLElBQUl0VCxxQkFBSixDQUEwQix1Q0FBMUIsRUFBbUVDLEtBQW5FLENBQU47RUFDRDs7RUFFREEsTUFBQUEsS0FBSyxDQUFDOFQsVUFBTixDQUFpQixLQUFLRixjQUF0QjtFQUVBLGFBQU8sSUFBSXRaLGFBQUosR0FBb0J5WixNQUFwQixXQUNGL1gsa0JBREUsNkNBQ21ELEtBQUsyWCxXQUR4RCxHQUVMO0VBQ0UsZ0JBQVEzVCxLQUFLLENBQUNnVSxVQUFOO0VBRFYsT0FGSyxDQUFQO0VBTUQ7Ozs7OztFQzNDSDs7Ozs7Ozs7TUFPcUJDOzs7OztFQUNuQixzQkFBYXBULEVBQWIsRUFBNEI7RUFBQTs7RUFBQSxRQUFYckcsSUFBVyx1RUFBSixFQUFJOztFQUFBOztFQUMxQjtFQUVBLFVBQUswWixHQUFMLEdBQVdyVCxFQUFYO0VBQ0EsVUFBS3NULFFBQUwsR0FBZ0IsRUFBaEI7RUFDQSxVQUFLQyxLQUFMLEdBQWE1WixJQUFiOztFQUNBLFVBQUt3USxHQUFMLENBQVN4USxJQUFUOztFQU4wQjtFQU8zQjtFQUVEOzs7Ozs7OzswQkFJS0EsTUFBTTtFQUNULFdBQUs2WixlQUFMOztFQUVBLFVBQUksUUFBTzdaLElBQVAsTUFBZ0IsUUFBaEIsSUFBNEJpTixLQUFLLENBQUNDLE9BQU4sQ0FBY2xOLElBQWQsQ0FBNUIsSUFBbURJLE1BQU0sQ0FBQytELElBQVAsQ0FBWW5FLElBQVosRUFBa0JtQyxNQUFsQixLQUE2Qi9CLE1BQU0sQ0FBQytELElBQVAsQ0FBWSxLQUFLeVYsS0FBakIsRUFBd0J6WCxNQUE1RyxFQUFvSDtFQUNsSCxhQUFLeVgsS0FBTCxHQUFhNVosSUFBYjtFQUNBLGFBQUsyWSxJQUFMLENBQVUsUUFBVixFQUFvQixLQUFLaUIsS0FBekI7RUFDQTtFQUNELE9BUFE7OztFQVVULHNDQUFrQnhaLE1BQU0sQ0FBQytELElBQVAsQ0FBWW5FLElBQVosQ0FBbEIsa0NBQXFDO0VBQWhDLFlBQU1tQixHQUFHLG1CQUFUOztFQUNILFlBQUksS0FBS3lZLEtBQUwsQ0FBV3pZLEdBQVgsTUFBb0JuQixJQUFJLENBQUNtQixHQUFELENBQTVCLEVBQW1DO0VBQ2pDLGVBQUt5WSxLQUFMLEdBQWE1WixJQUFiO0VBQ0EsZUFBSzJZLElBQUwsQ0FBVSxRQUFWLEVBQW9CLEtBQUtpQixLQUF6QjtFQUNBO0VBQ0Q7RUFDRjtFQUNGOzs7d0NBRWtCO0VBQ2pCLFVBQUksS0FBS0QsUUFBTCxLQUFrQmpaLFNBQXRCLEVBQWlDO0VBQy9CLGFBQUtpWixRQUFMLEdBQWdCLEVBQWhCO0VBQ0Q7O0VBRUQsVUFBSSxLQUFLQSxRQUFMLENBQWN4WCxNQUFkLEdBQXVCLENBQXZCLEdBQTJCLENBQS9CLEVBQWtDO0VBQ2hDLGFBQUt3WCxRQUFMLENBQWNHLEtBQWQ7RUFDRCxPQVBnQjs7O0VBVWpCLFdBQUtILFFBQUwsQ0FBY2hYLElBQWQsQ0FBbUJwQyxJQUFJLENBQUNDLFNBQUwsQ0FBZSxLQUFLb1osS0FBTCxJQUFjLEVBQTdCLENBQW5CO0VBQ0Q7Ozs2QkFFTztFQUNOLFVBQUlHLFFBQVEsR0FBRyxFQUFmOztFQUNBLFVBQUksS0FBS0MsU0FBTCxDQUFlN1gsTUFBZixHQUF3QixDQUE1QixFQUErQjtFQUM3QjRYLFFBQUFBLFFBQVEsR0FBR3haLElBQUksQ0FBQ3NCLEtBQUwsQ0FBVyxLQUFLbVksU0FBTCxDQUFlQyxHQUFmLEVBQVgsQ0FBWDtFQUNEOztFQUVELFdBQUtMLEtBQUwsQ0FBV3BKLEdBQVgsQ0FBZXVKLFFBQWY7RUFDRDs7OzRCQUVNO0VBQ0wsYUFBTyxLQUFLSCxLQUFaO0VBQ0Q7Ozs7SUF6RHFDekI7O0VDTnhDOzs7Ozs7TUFLcUIrQjs7O0VBQ25CLDJCQUFlO0VBQUE7O0VBQ2IsU0FBS0Msb0JBQUwsR0FBNEIsRUFBNUI7RUFDQSxTQUFLQyxnQkFBTCxHQUF3QixFQUF4QjtFQUNEO0VBRUQ7Ozs7Ozs7Ozs7MEJBTUtqWixLQUFLbkIsTUFBTTtFQUNkLFdBQUtxYSxrQkFBTCxDQUF3QmxaLEdBQXhCLEVBQTZCbkIsSUFBN0I7O0VBQ0EsV0FBS21hLG9CQUFMLENBQTBCaFosR0FBMUIsRUFBK0JxUCxHQUEvQixDQUFtQ3hRLElBQW5DO0VBQ0Q7RUFFRDs7Ozs7Ozs2QkFJUUEsTUFBTTtFQUNaLHlDQUF5QkksTUFBTSxDQUFDMEMsT0FBUCxDQUFlOUMsSUFBZixDQUF6QixxQ0FBK0M7RUFBQTtFQUFBLFlBQW5DbUIsR0FBbUM7RUFBQSxZQUE5QnNHLEdBQThCOztFQUM3QyxhQUFLK0ksR0FBTCxDQUFTclAsR0FBVCxFQUFjc0csR0FBZDtFQUNEO0VBQ0Y7Ozt5Q0FFbUJ0RyxLQUFLbkIsTUFBTTtFQUM3QixVQUFJbUIsR0FBRyxLQUFLVCxTQUFSLElBQXFCUyxHQUFHLEtBQUssSUFBN0IsSUFBcUMsT0FBT0EsR0FBUCxLQUFlLFFBQXhELEVBQWtFO0VBQ2hFLGNBQU0sSUFBSWtFLG1CQUFKLENBQXdCLDhCQUF4QixFQUF3RGxFLEdBQXhELEVBQTZEbkIsSUFBN0QsQ0FBTjtFQUNEOztFQUNELFVBQUlBLElBQUksS0FBS1UsU0FBVCxJQUFzQlYsSUFBSSxLQUFLLElBQW5DLEVBQXlDO0VBQ3ZDLGNBQU0sSUFBSXFGLG1CQUFKLENBQXdCLGtCQUF4QixFQUE0Q2xFLEdBQTVDLEVBQWlEbkIsSUFBakQsQ0FBTjtFQUNEOztFQUVELFVBQUksS0FBS21hLG9CQUFMLENBQTBCaFosR0FBMUIsTUFBbUNULFNBQXZDLEVBQWtEO0VBQ2hELGFBQUt5WixvQkFBTCxDQUEwQmhaLEdBQTFCLElBQWlDLElBQUlzWSxVQUFKLENBQWV0WSxHQUFmLENBQWpDOztFQUNBLGFBQUttWixxQkFBTCxDQUEyQm5aLEdBQTNCO0VBQ0Q7RUFDRjs7OytCQUVTbUgsVUFBVTtFQUNsQixVQUFJLEtBQUs2UixvQkFBTCxDQUEwQjdSLFFBQTFCLENBQUosRUFBeUM7RUFDdkMsZUFBTyxLQUFLNlIsb0JBQUwsQ0FBMEI3UixRQUExQixFQUFvQ21CLEdBQXBDLEVBQVA7RUFDRDs7RUFDRCxhQUFPLElBQVA7RUFDRDs7OzZCQUVPdEksS0FBSztFQUNYLFVBQU1uQixJQUFJLEdBQUcsRUFBYjs7RUFDQSx1Q0FBc0JJLE1BQU0sQ0FBQytELElBQVAsQ0FBWSxLQUFLZ1csb0JBQWpCLENBQXRCLG9DQUE4RDtFQUF6RCxZQUFNSSxPQUFPLG9CQUFiOztFQUNILFlBQUlBLE9BQU8sQ0FBQ0MsVUFBUixDQUFtQnJaLEdBQW5CLEtBQTJCLEtBQUtnWixvQkFBTCxDQUEwQkksT0FBMUIsRUFBbUM5USxHQUFuQyxPQUE2QyxJQUE1RSxFQUFrRjtFQUNoRnpKLFVBQUFBLElBQUksQ0FBQzJDLElBQUwsQ0FBVSxLQUFLd1gsb0JBQUwsQ0FBMEJJLE9BQTFCLEVBQW1DOVEsR0FBbkMsRUFBVjtFQUNEO0VBQ0Y7O0VBQ0QsYUFBT3pKLElBQVA7RUFDRDs7O3lCQUVHdVIsS0FBS2pKLFVBQVVrSixJQUFJO0VBQ3JCLFVBQUlpSixVQUFVLEdBQUcsS0FBS04sb0JBQUwsQ0FBMEI3UixRQUExQixDQUFqQjs7RUFDQSxVQUFJbVMsVUFBVSxLQUFLL1osU0FBbkIsRUFBOEI7RUFDNUIsWUFBSSxLQUFLMFosZ0JBQUwsQ0FBc0I5UixRQUF0QixNQUFvQzVILFNBQXhDLEVBQW1EO0VBQ2pELGVBQUswWixnQkFBTCxDQUFzQjlSLFFBQXRCLElBQWtDLEVBQWxDO0VBQ0Q7O0VBRUQsYUFBSzhSLGdCQUFMLENBQXNCOVIsUUFBdEIsRUFBZ0MzRixJQUFoQyxDQUFxQztFQUNuQzZDLFVBQUFBLEtBQUssRUFBRStMLEdBRDRCO0VBRW5DQyxVQUFBQSxFQUFFLEVBQUVBO0VBRitCLFNBQXJDOztFQUtBO0VBQ0Q7O0VBRUQsV0FBSzJJLG9CQUFMLENBQTBCN1IsUUFBMUIsRUFBb0NtSixFQUFwQyxDQUF1Q0YsR0FBdkMsRUFBNENDLEVBQTVDOztFQUNBLGFBQU8sSUFBUDtFQUNEOzs7MEJBRUlELEtBQUtqSixVQUFVa0osSUFBSTtFQUN0QixVQUFJaUosVUFBVSxHQUFHLEtBQUtOLG9CQUFMLENBQTBCN1IsUUFBMUIsQ0FBakI7O0VBQ0EsVUFBSW1TLFVBQVUsS0FBSy9aLFNBQW5CLEVBQThCO0VBQzVCLFlBQUksS0FBSzBaLGdCQUFMLENBQXNCOVIsUUFBdEIsTUFBb0M1SCxTQUF4QyxFQUFtRDtFQUNqRCxlQUFLMFosZ0JBQUwsQ0FBc0I5UixRQUF0QixFQUFnQzJSLEdBQWhDO0VBQ0Q7O0VBRUQsZUFBTyxJQUFQO0VBQ0Q7O0VBRUQsV0FBS0Usb0JBQUwsQ0FBMEI3UixRQUExQixFQUFvQzBLLEdBQXBDLENBQXdDekIsR0FBeEMsRUFBNkNDLEVBQTdDOztFQUNBLGFBQU8sSUFBUDtFQUNEOzs7NENBRXNCbEosVUFBVTtFQUMvQixVQUFJb1MsT0FBTyxHQUFHLEtBQUtOLGdCQUFMLENBQXNCOVIsUUFBdEIsQ0FBZDs7RUFDQSxVQUFJLENBQUNvUyxPQUFMLEVBQWM7RUFDWjtFQUNEOztFQUVELFdBQUssSUFBSXhZLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd3WSxPQUFPLENBQUN2WSxNQUE1QixFQUFvQ0QsQ0FBQyxFQUFyQyxFQUF5QztFQUN2QyxZQUFJeVksTUFBTSxHQUFHRCxPQUFPLENBQUN4WSxDQUFELENBQXBCO0VBQ0EsYUFBS3VQLEVBQUwsQ0FBUWtKLE1BQU0sQ0FBQ25WLEtBQWYsRUFBc0I4QyxRQUF0QixFQUFnQ3FTLE1BQU0sQ0FBQ25KLEVBQXZDO0VBQ0Q7O0VBQ0QsYUFBTyxLQUFLNEksZ0JBQUwsQ0FBc0I5UixRQUF0QixDQUFQO0VBQ0Q7Ozs7OztFQ2hISDs7RUNTQTs7Ozs7Ozs7TUFPcUJzUzs7O0VBQ25CLHFCQUFhdEksSUFBYixFQUFnQztFQUFBLFFBQWI1TSxNQUFhLHVFQUFKLEVBQUk7O0VBQUE7O0VBQzlCO0VBQ0E7RUFDQSxRQUFJLFFBQU80TSxJQUFQLE1BQWdCLFFBQXBCLEVBQThCO0VBQzVCNU0sTUFBQUEsTUFBTSxHQUFHNE0sSUFBVDtFQUNBQSxNQUFBQSxJQUFJLEdBQUc1TSxNQUFNLENBQUM0TSxJQUFkO0VBQ0Q7O0VBRUQsU0FBS2hLLFFBQUwsR0FBZ0IsSUFBaEI7RUFFQTs7Ozs7O0VBS0EsU0FBSzlGLElBQUwsR0FBWWtELE1BQU0sQ0FBQ2xELElBQVAsSUFBZSxLQUFLNFEsV0FBTCxDQUFpQmQsSUFBNUM7RUFFQTs7Ozs7RUFJQSxTQUFLdUksT0FBTCxHQUFlblYsTUFBZjtFQUVBOzs7Ozs7RUFLQSxTQUFLb1YsS0FBTCxHQUFhLEtBQUsxSCxXQUFMLENBQWlCNVEsSUFBOUI7RUFFQTs7Ozs7RUFJQSxTQUFLdVksT0FBTCxHQUFlclYsTUFBTSxDQUFDbVEsTUFBUCxJQUFpQixJQUFoQztFQUVBOzs7OztFQUlBLFNBQUttRixTQUFMLEdBQWlCLEVBQWpCO0VBRUE7Ozs7O0VBSUEsU0FBS3hDLE1BQUwsR0FBYyxJQUFJRCxLQUFKLENBQVU3UyxNQUFNLENBQUN1VixLQUFqQixDQUFkO0VBRUE7Ozs7RUFHQSxTQUFLOUksSUFBTCxHQUFZek0sTUFBTSxDQUFDeU0sSUFBUCxJQUFlLElBQTNCO0VBRUE7Ozs7OztFQUtBLFNBQUtNLGdCQUFMLEdBQXdCL00sTUFBTSxDQUFDK00sZ0JBQVAsSUFBMkIsSUFBbkQ7RUFFQTs7Ozs7RUFJQSxTQUFLRCxpQkFBTCxHQUF5QjlNLE1BQU0sQ0FBQzhNLGlCQUFQLElBQTRCLElBQXJEO0VBRUE7Ozs7OztFQUtBLFNBQUswSSxpQkFBTCxHQUF5QnhWLE1BQU0sQ0FBQ3lWLGdCQUFQLElBQTJCLEVBQXBEO0VBRUE7Ozs7O0VBSUEsUUFBSSxLQUFLSixPQUFMLEtBQWlCLElBQXJCLEVBQTJCO0VBQ3pCLFVBQUksT0FBT3JWLE1BQU0sQ0FBQzJQLFNBQWQsS0FBNEIsUUFBaEMsRUFBMEM7RUFDeEMsY0FBTSxJQUFJclEsS0FBSixDQUFVLG1GQUFWLENBQU47RUFDRDs7RUFDRCxXQUFLb1csVUFBTCxHQUFrQm5HLEdBQUcsQ0FBQzNTLEtBQUosQ0FBVW9ELE1BQU0sQ0FBQzJQLFNBQWpCLEtBQStCLElBQWpEO0VBQ0QsS0FMRCxNQUtPO0VBQ0wsV0FBSytGLFVBQUwsR0FBa0JuRyxHQUFHLENBQUMzUyxLQUFKLENBQVUsS0FBS3lZLE9BQUwsQ0FBYUssVUFBdkIsRUFBbUMxVixNQUFNLENBQUMyUCxTQUExQyxDQUFsQixDQURLO0VBSUw7O0VBQ0EsVUFBSSxLQUFLK0YsVUFBTCxLQUFvQixJQUF4QixFQUE4QjtFQUM1QixhQUFLQSxVQUFMLEdBQWtCbkcsR0FBRyxDQUFDb0csUUFBSixDQUFhLEtBQWIsRUFBb0I7RUFDcEMsbUJBQU8zVixNQUFNLENBQUMyUCxTQUFQLENBQWlCdk4sU0FBakIsQ0FBMkIsQ0FBM0IsRUFBOEJwQyxNQUFNLENBQUMyUCxTQUFQLENBQWlCbFQsTUFBL0M7RUFENkIsU0FBcEIsQ0FBbEI7RUFHQThTLFFBQUFBLEdBQUcsQ0FBQzFFLE1BQUosQ0FBVyxLQUFLd0ssT0FBTCxDQUFhSyxVQUF4QixFQUFvQyxLQUFLQSxVQUF6QztFQUNEO0VBQ0Y7O0VBRUQsUUFBSSxLQUFLQSxVQUFMLEtBQW9CLElBQXhCLEVBQThCO0VBQzVCLFlBQU0sSUFBSXBXLEtBQUosQ0FBVSxxQ0FBcUNVLE1BQU0sQ0FBQzJQLFNBQXRELENBQU47RUFDRDtFQUVEOzs7Ozs7RUFJQSxTQUFLaUcsVUFBTCxHQUFrQjVWLE1BQU0sU0FBTixJQUFnQixXQUFsQztFQUVBOzs7OztFQUlBLFNBQUs2VixPQUFMLEdBQWU3VixNQUFNLENBQUM4VixNQUFQLElBQWlCLElBQWhDO0VBRUE7Ozs7O0VBSUEsU0FBS3hKLFNBQUwsR0FBaUJ0TSxNQUFNLENBQUN3TSxRQUFQLElBQW1CMkMsU0FBUyxDQUFDRSxVQUE5QztFQUVBOzs7Ozs7RUFLQSxTQUFLMEcsU0FBTCxHQUFpQi9WLE1BQU0sQ0FBQzZOLFFBQVAsR0FBa0IsS0FBS3ZCLFNBQUwsQ0FBZStCLE9BQWYsQ0FBdUJyTyxNQUFNLENBQUM2TixRQUE5QixDQUFsQixHQUE0RCxJQUE3RTtFQUVBOzs7Ozs7RUFLQSxTQUFLbUksYUFBTCxHQUFxQmhXLE1BQU0sQ0FBQ3NPLFlBQVAsSUFBdUIsS0FBS1osV0FBTCxDQUFpQnVJLG1CQUFqQixDQUFxQ2pXLE1BQXJDLENBQTVDO0VBRUE7Ozs7O0VBSUEsU0FBS2tXLFVBQUwsR0FBa0IsS0FBbEI7RUFFQTs7Ozs7OztFQU1BLFNBQUtDLGFBQUwsR0FBcUJuVyxNQUFNLENBQUNtVyxhQUFQLElBQXdCLEtBQUtBLGFBQTdCLElBQThDLFlBQVksRUFBL0U7RUFFQTs7Ozs7O0VBSUEsU0FBS0MsUUFBTCxHQUFnQnBXLE1BQU0sQ0FBQ29XLFFBQVAsSUFBbUIsS0FBS0EsUUFBeEIsSUFBb0MsWUFBWSxFQUFoRTtFQUVBOzs7Ozs7RUFJQSxTQUFLQyxPQUFMLEdBQWVyVyxNQUFNLENBQUNxVyxPQUFQLElBQWtCLEtBQUtBLE9BQXZCLElBQWtDLFlBQVksRUFBN0Q7RUFFQTs7Ozs7O0VBSUEsU0FBS0MsUUFBTCxHQUFnQnRXLE1BQU0sQ0FBQ3NXLFFBQVAsSUFBbUIsS0FBS0EsUUFBeEIsSUFBb0MsWUFBWSxFQUFoRTtFQUNEO0VBRUQ7Ozs7Ozs7OzsyQkFpQk0vYixNQUFNO0VBQUE7O0VBQ1YsV0FBSzhTLFFBQUwsQ0FBYzlTLElBQUksQ0FBQ0QsSUFBTCxJQUFhQyxJQUFJLENBQUNnYixLQUFsQixJQUEyQixFQUF6QztFQUNBLFdBQUthLFFBQUw7O0VBQ0EsV0FBS3RELE1BQUwsQ0FBWS9HLEVBQVosQ0FBZSxRQUFmLEVBQXlCLFlBQU07RUFDN0IsUUFBQSxLQUFJLENBQUN1SyxRQUFMOztFQUNBLFFBQUEsS0FBSSxDQUFDQyxLQUFMO0VBQ0QsT0FIRDs7RUFLQWhILE1BQUFBLEdBQUcsQ0FBQ3dCLFFBQUosQ0FBYSxLQUFLMkUsVUFBbEIsRUFBOEIsS0FBS0UsVUFBbkM7RUFDQSxhQUFPLElBQVA7RUFDRDs7OytCQUVTdGIsTUFBTTtFQUNkLFVBQU1rYyxRQUFRLEdBQUc5YixNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCO0VBQUV3YSxRQUFBQSxPQUFPLEVBQUUsS0FBS0E7RUFBaEIsT0FBbEIsRUFBNkM3YSxJQUE3QyxDQUFqQjs7RUFDQSxXQUFLd1ksTUFBTCxDQUFZaEksR0FBWixDQUFnQjBMLFFBQWhCOztFQUNBLGFBQU8sSUFBUDtFQUNEOzs7K0JBRVNoRixNQUFNO0VBQ2QsYUFBTyxLQUFLc0IsTUFBTCxDQUFZNVUsR0FBWixDQUFnQnNULElBQWhCLENBQVA7RUFDRDs7OytCQUVTQSxNQUFNO0VBQ2QsYUFBTyxLQUFLc0IsTUFBTCxDQUFZdFUsR0FBWixDQUFnQmdULElBQWhCLENBQVA7RUFDRDs7O29DQUVjbFgsTUFBTTtFQUNuQixhQUFPQSxJQUFQO0VBQ0Q7OzsrQkFFU0EsTUFBTXNTLE1BQU1yUyxNQUFNO0VBQzFCLFVBQUlrYyxjQUFjLEdBQUcsS0FBSzFKLGdCQUFMLENBQXNCMkosTUFBdEIsQ0FDbkI5SixJQURtQixFQUVuQmxTLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0VBQ1ptQyxRQUFBQSxJQUFJLEVBQUV4QyxJQUFJLENBQUN3QyxJQURDO0VBRVpxVCxRQUFBQSxNQUFNLEVBQUUsSUFGSTtFQUdaN1YsUUFBQUEsSUFBSSxFQUFFQTtFQUhNLE9BQWQsRUFJR0MsSUFBSSxJQUFJLEVBSlgsRUFJZTtFQUNib2MsUUFBQUEsV0FBVyxFQUFFLEtBQUt4QjtFQURMLE9BSmYsQ0FGbUIsQ0FBckI7O0VBV0EsV0FBS0csU0FBTCxDQUFlclksSUFBZixDQUFvQndaLGNBQXBCOztFQUNBLGFBQU9BLGNBQVA7RUFDRDtFQUVEOzs7Ozs7OytCQUlVO0VBQ1IsV0FBS25CLFNBQUwsQ0FBZTVXLE9BQWYsQ0FBdUIsVUFBQXlPLENBQUM7RUFBQSxlQUFJQSxDQUFDLENBQUN5SixNQUFGLEVBQUo7RUFBQSxPQUF4Qjs7RUFDQSxXQUFLQyxPQUFMO0VBQ0EsV0FBSzlKLGdCQUFMLENBQXNCNkosTUFBdEIsQ0FBNkIsSUFBN0I7RUFDRDtFQUVEOzs7Ozs7OztnQ0FLV2QsUUFBUTtFQUNqQixXQUFLRCxPQUFMLEdBQWVDLE1BQWY7RUFDQSxhQUFPLElBQVA7RUFDRDtFQUVEOzs7Ozs7O2tDQUlhdEosVUFBVTtFQUNyQixXQUFLRixTQUFMLEdBQWlCNkMsU0FBUyxDQUFDM0MsUUFBRCxDQUExQjtFQUNBLGFBQU8sSUFBUDtFQUNEO0VBRUQ7Ozs7Ozs7a0NBSWFxQixVQUFVO0VBQ3JCLFdBQUtrSSxTQUFMLEdBQWlCLEtBQUt6SixTQUFMLENBQWUrQixPQUFmLENBQXVCUixRQUF2QixDQUFqQjtFQUNEOzs7Z0NBRVU7RUFDVCxXQUFLeUgsU0FBTCxHQUFpQixFQUFqQjtFQUNBL0YsTUFBQUEsR0FBRyxDQUFDdUgsS0FBSixDQUFVLEtBQUtwQixVQUFmO0VBQ0Q7Ozs4QkFFUTtFQUNQLFVBQUksQ0FBQyxLQUFLQSxVQUFWLEVBQXNCO0VBQ3BCLGVBQU8sSUFBUDtFQUNEOztFQUVELFdBQUttQixPQUFMOztFQUNBLFVBQUksS0FBS0UsV0FBTCxPQUF1QixLQUEzQixFQUFrQztFQUNoQyxlQUFPLElBQVA7RUFDRDs7RUFFRHhILE1BQUFBLEdBQUcsQ0FBQzFFLE1BQUosQ0FBVyxLQUFLNkssVUFBaEIsRUFBNEIsS0FBS0ksTUFBTCxDQUFZLEtBQUtoRCxNQUFMLENBQVlrRSxNQUFaLEVBQVosQ0FBNUI7RUFFQSxXQUFLZCxVQUFMLEdBQWtCLElBQWxCOztFQUNBLFdBQUtlLFFBQUwsR0FiTzs7O0VBZ0JQLFVBQUksS0FBS25LLGlCQUFULEVBQTRCO0VBQzFCLFlBQUlvSyxRQUFRLEdBQUczSCxHQUFHLENBQUM0SCxRQUFKLENBQWEsS0FBS3pCLFVBQWxCLEVBQThCLG9EQUE5QixDQUFmO0VBQ0F3QixRQUFBQSxRQUFRLENBQUN4WSxPQUFULENBQWlCLEtBQUswWSxvQkFBTCxDQUEwQkMsSUFBMUIsQ0FBK0IsSUFBL0IsQ0FBakI7RUFDRDs7RUFFRCxhQUFPLElBQVA7RUFDRDs7O2lDQUVXO0VBQ1YsV0FBS2hCLE9BQUwsQ0FBYSxJQUFiOztFQUNBLFVBQUksS0FBS2YsU0FBTCxDQUFlN1ksTUFBZixLQUEwQixDQUE5QixFQUFpQztFQUMvQjtFQUNEOztFQUVELFdBQUs2WSxTQUFMLENBQWU1VyxPQUFmLENBQXVCLFVBQUE0WSxLQUFLLEVBQUk7RUFDOUJBLFFBQUFBLEtBQUssQ0FBQ0wsUUFBTjtFQUNELE9BRkQ7RUFHRDtFQUVEOzs7Ozs7OytCQUlrQztFQUFBOztFQUFBLFVBQTFCM2MsSUFBMEIsdUVBQW5CLEtBQUt3WSxNQUFMLENBQVk1VSxHQUFaLEVBQW1CO0VBQ2hDLFdBQUtxWixZQUFMO0VBQ0FqZCxNQUFBQSxJQUFJLEdBQUcsS0FBSzZiLGFBQUwsQ0FBbUI3YixJQUFuQixDQUFQO0VBRUEsVUFBSW9WLElBQUksR0FBRyxFQUFYLENBSmdDO0VBTWhDOztFQUNBLFVBQUksT0FBTyxLQUFLbUcsT0FBWixLQUF3QixVQUE1QixFQUF3QztFQUN0Q25HLFFBQUFBLElBQUksR0FBRyxLQUFLbUcsT0FBTCxDQUFhdmIsSUFBYixDQUFQOztFQUNBLFlBQUksT0FBT29WLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7RUFDNUIsZ0JBQU0sSUFBSXBRLEtBQUosQ0FBVSxpREFBVixDQUFOO0VBQ0Q7RUFDRixPQUxELE1BS087RUFDTDtFQUNBb1EsUUFBQUEsSUFBSSxHQUFHLEtBQUtwRCxTQUFMLENBQWV3SixNQUFmLENBQXNCO0VBQzNCakksVUFBQUEsUUFBUSxFQUFFLEtBQUtrSSxTQURZO0VBRTNCekgsVUFBQUEsWUFBWSxFQUFFLEtBQUswSDtFQUZRLFNBQXRCLEVBR0oxYixJQUhJLENBQVA7RUFJRCxPQWxCK0I7RUFxQmhDOzs7RUFDQSxVQUFJcVcsRUFBRSxHQUFHcEIsR0FBRyxDQUFDbUgsTUFBSixDQUFXaEgsSUFBWCxDQUFULENBdEJnQztFQXlCaEM7O0VBQ0EsVUFBSThILGFBQWEsR0FBR2pJLEdBQUcsQ0FBQzRILFFBQUosQ0FBYXhHLEVBQWIsRUFBaUIsa0JBQWpCLENBQXBCO0VBQ0E2RyxNQUFBQSxhQUFhLENBQUM5WSxPQUFkLENBQXNCLFVBQUF5TyxDQUFDO0VBQUEsZUFBSSxNQUFJLENBQUNzSyxtQkFBTCxDQUF5QnRLLENBQXpCLEVBQTRCN1MsSUFBNUIsQ0FBSjtFQUFBLE9BQXZCO0VBRUEsV0FBS29kLFdBQUw7RUFDQSxhQUFPL0csRUFBRSxDQUFDVyxTQUFWO0VBQ0Q7OzswQ0FFb0JxRyxjQUFjcmQsTUFBTTtFQUN2QyxVQUFJc2QsT0FBTyxHQUFHRCxZQUFZLENBQUNDLE9BQTNCO0VBQ0EsVUFBSWhMLElBQUksR0FBR2dMLE9BQU8sQ0FBQ3BZLFNBQW5CO0VBQ0EsVUFBSWdTLElBQUksR0FBR29HLE9BQU8sQ0FBQ3BHLElBQW5CO0VBQ0EsVUFBSWpYLElBQUksR0FBR3FkLE9BQU8sQ0FBQ3JkLElBQVIsR0FBZU0sSUFBSSxDQUFDc0IsS0FBTCxDQUFXeWIsT0FBTyxDQUFDcmQsSUFBbkIsQ0FBZixHQUEwQyxFQUFyRCxDQUp1QztFQU92Qzs7RUFDQUEsTUFBQUEsSUFBSSxHQUFHRyxNQUFNLENBQUNDLE1BQVAsQ0FBY0osSUFBZCxFQUFvQjtFQUN6Qm9WLFFBQUFBLFNBQVMsRUFBRWdJO0VBRGMsT0FBcEIsQ0FBUDtFQUlBLFVBQUlFLFNBQVMsR0FBR3ZkLElBQUksQ0FBQ2tYLElBQUQsQ0FBSixJQUFjLEVBQTlCLENBWnVDO0VBZXZDO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBQ0EsVUFBSSxDQUFDakssS0FBSyxDQUFDQyxPQUFOLENBQWNxUSxTQUFkLENBQUwsRUFBK0I7RUFDN0IsWUFBSXBCLGNBQWMsR0FBRyxLQUFLcUIsUUFBTCxDQUFjRCxTQUFkLEVBQXlCakwsSUFBekIsRUFBK0JyUyxJQUEvQixDQUFyQjtFQUNBZ1YsUUFBQUEsR0FBRyxDQUFDMUUsTUFBSixDQUFXOE0sWUFBWCxFQUF5QmxCLGNBQWMsQ0FBQ1gsTUFBZixFQUF6QjtFQUNBO0VBQ0QsT0F4QnNDOzs7RUEyQnZDLFVBQUlpQyxTQUFTLEdBQUcsRUFBaEI7O0VBQ0EsV0FBSyxJQUFJdmIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3FiLFNBQVMsQ0FBQ3BiLE1BQTlCLEVBQXNDRCxDQUFDLEVBQXZDLEVBQTJDO0VBQ3pDLFlBQUlpYSxlQUFjLEdBQUcsS0FBS3FCLFFBQUwsQ0FBY0QsU0FBUyxDQUFDcmIsQ0FBRCxDQUF2QixFQUE0Qm9RLElBQTVCLEVBQWtDclMsSUFBbEMsQ0FBckI7O0VBQ0F3ZCxRQUFBQSxTQUFTLENBQUM5YSxJQUFWLENBQWV3WixlQUFjLENBQUNYLE1BQWYsRUFBZjtFQUNEOztFQUVEdkcsTUFBQUEsR0FBRyxDQUFDMUUsTUFBSixDQUFXOE0sWUFBWCxFQUF5QkksU0FBUyxDQUFDNWEsSUFBVixDQUFlLEVBQWYsQ0FBekI7RUFDRDs7OzJDQUVxQndhLGNBQWM7RUFBQTs7RUFDbENBLE1BQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkksbUJBQXJCLEdBQTJDLElBQTNDO0VBQ0EsVUFBTUosT0FBTyxHQUFHRCxZQUFZLENBQUNDLE9BQTdCO0VBQ0EsVUFBTWhMLElBQUksR0FBR2dMLE9BQU8sQ0FBQ0ssU0FBckI7RUFDQSxVQUFNMVcsS0FBSyxHQUFHcVcsT0FBTyxDQUFDTSxVQUF0QjtFQUNBLFVBQU12TyxPQUFPLEdBQUdpTyxPQUFPLENBQUNPLFlBQVIsR0FBdUJ0ZCxJQUFJLENBQUNzQixLQUFMLENBQVd5YixPQUFPLENBQUNPLFlBQW5CLENBQXZCLEdBQTBELEVBQTFFO0VBRUE1SSxNQUFBQSxHQUFHLENBQUN4RCxFQUFKLENBQU80TCxZQUFQLEVBQXFCLE9BQXJCLEVBQThCLFVBQUFwSixDQUFDLEVBQUk7RUFDakMsWUFBTXpPLEtBQUssR0FBRyxJQUFJcVQsY0FBSixDQUFtQnZHLElBQW5CLEVBQXlCckwsS0FBekIsQ0FBZDtFQUNBekIsUUFBQUEsS0FBSyxDQUFDOFQsVUFBTixDQUFpQixNQUFJLENBQUM0QixpQkFBdEI7RUFDQTFWLFFBQUFBLEtBQUssQ0FBQzhULFVBQU4sQ0FBaUJqSyxPQUFqQjs7RUFDQSxRQUFBLE1BQUksQ0FBQ21ELGlCQUFMLENBQXVCc0wsTUFBdkIsQ0FBOEJ0WSxLQUE5QjtFQUNELE9BTEQ7RUFNRDtFQUVEOzs7Ozs7OytCQUlVZ00sSUFBSTtFQUlkOzs7Ozs7OytCQUlVQSxJQUFJO0VBSWQ7Ozs7Ozs7bUNBSWNBLElBQUk7RUFJbEI7Ozs7Ozs7a0NBSWFBLElBQUk7RUFJakI7Ozs7Ozs7OEJBSVNBLElBQUk7RUFJYjs7Ozs7OztnQ0FJV0EsSUFBSTtFQUlmOzs7Ozs7O2tDQUlhQSxJQUFJO0VBSWpCOzs7Ozs7O2dDQUlXQSxJQUFJOzs7MENBM1JhOUwsUUFBUTtFQUNsQyxhQUFPLFNBQVA7RUFDRDs7O2lEQU1rQztFQUNqQyxhQUFPLEtBQVA7RUFDRDs7OzBCQU5rQjtFQUNqQixhQUFPLFdBQVA7RUFDRDs7Ozs7O0VDeExIOzs7OztFQUlBLElBQU1xWSxlQUFlLEdBQUcsR0FBeEI7RUFFQTs7Ozs7QUFJQSxNQUFhQyxHQUFiO0VBQUE7RUFBQTtFQUNFLGVBQWF0WSxNQUFiLEVBQXFCO0VBQUE7O0VBQ25COzs7O0VBSUEsU0FBS3VCLEtBQUwsR0FBYXZCLE1BQU0sQ0FBQ3VCLEtBQXBCOztFQUNBLFFBQUksT0FBTyxLQUFLQSxLQUFaLEtBQXNCLFFBQTFCLEVBQW9DO0VBQ2xDLFlBQU0sSUFBSWhDLHFCQUFKLENBQTBCLG1EQUExQixFQUErRSxxQkFBL0UsQ0FBTjtFQUNEO0VBRUQ7Ozs7OztFQUlBLFNBQUtsRixHQUFMLEdBQVcyRixNQUFNLENBQUMzRixHQUFsQjs7RUFDQSxRQUFJLE9BQU8sS0FBS0EsR0FBWixLQUFvQixRQUF4QixFQUFrQztFQUNoQyxZQUFNLElBQUlrRixxQkFBSixDQUEwQixpREFBMUIsRUFBNkUscUJBQTdFLENBQU47RUFDRDtFQUVEOzs7Ozs7O0VBS0EsU0FBS2daLFFBQUwsR0FBZ0J2WSxNQUFNLENBQUN1WSxRQUFQLElBQW1CLElBQW5DO0VBRUE7Ozs7O0VBSUEsU0FBSzVhLE9BQUwsR0FBZXFDLE1BQU0sQ0FBQzNGLEdBQXRCO0VBRUE7Ozs7O0VBSUEsU0FBS21lLE9BQUwsR0FBZXhZLE1BQU0sQ0FBQ3dZLE9BQVAsSUFBa0IsS0FBakM7RUFFQTs7Ozs7O0VBS0EsU0FBS0MsUUFBTCxHQUFnQnpZLE1BQU0sQ0FBQ3lZLFFBQVAsSUFBbUIsS0FBbkM7RUFDRDtFQUVEOzs7Ozs7RUEvQ0Y7RUFBQTtFQUFBLHdCQW1Ec0I7RUFDbEIsYUFBTzVkLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0VBQ3BCd0wsUUFBQUEsZ0JBQWdCLEVBQUUsS0FBS2lTO0VBREgsT0FBZixDQUFQO0VBR0Q7RUFFRDs7Ozs7O0VBekRGO0VBQUE7RUFBQSx5QkE4RGVHLFVBOURmLEVBOEQyQjtFQUN2QixVQUFJQyxJQUFJLEdBQUcsRUFBWCxDQUR1Qjs7RUFHdkIsV0FBSyxJQUFJbmMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2tjLFVBQVUsQ0FBQ2pjLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTRDO0VBQzFDLFlBQUlvYyxHQUFHLEdBQUdGLFVBQVUsQ0FBQ2xjLENBQUQsQ0FBcEIsQ0FEMEM7RUFHMUM7O0VBQ0EsWUFBSW9jLEdBQUcsQ0FBQ0wsUUFBSixLQUFpQnZkLFNBQWpCLElBQThCMmQsSUFBSSxDQUFDQyxHQUFHLENBQUNMLFFBQUwsQ0FBSixLQUF1QnZkLFNBQXpELEVBQW9FO0VBQ2xFNGQsVUFBQUEsR0FBRyxDQUFDTCxRQUFKLEdBQWVLLEdBQUcsQ0FBQ3ZlLEdBQW5CO0VBQ0Q7O0VBRURzZSxRQUFBQSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0wsUUFBTCxDQUFKLEdBQXFCLElBQUlELEdBQUosQ0FBUU0sR0FBUixDQUFyQjtFQUNEOztFQUNELGFBQU9ELElBQVA7RUFDRDtFQTVFSDs7RUFBQTtFQUFBO0VBK0VBOzs7Ozs7TUFLcUJFOzs7OztFQUNuQixpQ0FBMEI7RUFBQTs7RUFBQSxRQUFiN1ksTUFBYSx1RUFBSixFQUFJOztFQUFBOztFQUN4Qiw2RkFBTUEsTUFBTjtFQUVBOzs7OztFQUlBLFVBQUs4WSxhQUFMLEdBQXFCOVksTUFBTSxDQUFDOFksYUFBUCxJQUF3QixNQUE3QztFQUVBOzs7OztFQUlBLFVBQUtDLFlBQUwsR0FBb0IvWSxNQUFNLENBQUMrWSxZQUFQLElBQXVCLE9BQTNDO0VBRUE7Ozs7O0VBSUEsc0JBQWMvWSxNQUFNLFVBQU4sSUFBaUIsS0FBL0I7RUFFQTs7Ozs7RUFJQSxVQUFLNEMsUUFBTCxHQUFnQm9ILFdBQVcsQ0FBQ3RCLFVBQTVCO0VBRUE7Ozs7OztFQUtBLFVBQUtzUSxLQUFMLEdBQWFWLEdBQUcsQ0FBQ3pWLElBQUosQ0FBUzdDLE1BQU0sQ0FBQzJZLElBQWhCLENBQWI7RUFFQTs7Ozs7OztFQU1BLFVBQUtNLFNBQUwsR0FBaUIsTUFBS0Msa0JBQUwsQ0FBd0JsWixNQUFNLENBQUMyWSxJQUEvQixFQUFxQyxNQUFLUSxZQUFMLEVBQXJDLENBQWpCO0VBRUE7Ozs7OztFQUtBLFVBQUtDLGVBQUwsR0FBdUIsRUFBdkI7RUEvQ3dCO0VBZ0R6Qjs7OztpQ0FlVztFQUFBOztFQUNWLFVBQUksQ0FBQyxjQUFMLEVBQWtCO0VBQ2hCN0osUUFBQUEsR0FBRyxDQUFDeEQsRUFBSixDQUFPOVAsTUFBUCxFQUFlLFFBQWYsRUFBeUIsWUFBTTtFQUM3QixjQUFJLE1BQUksQ0FBQ29kLGNBQVQsRUFBeUI7RUFDdkJDLFlBQUFBLFlBQVksQ0FBQyxNQUFJLENBQUNELGNBQU4sQ0FBWjtFQUNEOztFQUVELFVBQUEsTUFBSSxDQUFDQSxjQUFMLEdBQXNCRSxVQUFVLENBQUMsTUFBSSxDQUFDQyxRQUFMLENBQWNuQyxJQUFkLENBQW1CLE1BQW5CLENBQUQsRUFBMkJnQixlQUEzQixDQUFoQztFQUNELFNBTkQ7RUFPQTlJLFFBQUFBLEdBQUcsQ0FBQ3hELEVBQUosQ0FBTzlQLE1BQVAsRUFBZSxPQUFmLEVBQXdCLEtBQUt3ZCxpQkFBTCxDQUF1QnBDLElBQXZCLENBQTRCLElBQTVCLENBQXhCO0VBQ0Q7RUFDRjs7O2dDQUVVO0VBQ1QsVUFBSSxDQUFDLGNBQUwsRUFBa0I7RUFDaEIsYUFBS21DLFFBQUw7RUFDQWpLLFFBQUFBLEdBQUcsQ0FBQ3hELEVBQUosQ0FBT3dELEdBQUcsQ0FBQzNTLEtBQUosQ0FBVSxLQUFLOFksVUFBZixFQUEyQixlQUEzQixDQUFQLEVBQW9ELE9BQXBELEVBQTZELEtBQUtnRSxrQkFBTCxDQUF3QnJDLElBQXhCLENBQTZCLElBQTdCLENBQTdEO0VBQ0Q7RUFDRjs7O2lDQUVXO0VBQ1YsVUFBTTFILFNBQVMsR0FBR0osR0FBRyxDQUFDM1MsS0FBSixDQUFVLEtBQUs4WSxVQUFmLEVBQTJCLG9CQUEzQixDQUFsQjtFQUNBLFVBQU1pRSxVQUFVLEdBQUdwSyxHQUFHLENBQUMzUyxLQUFKLENBQVUsS0FBSzhZLFVBQWYsRUFBMkIsZUFBM0IsQ0FBbkI7RUFDQSxVQUFNa0UsU0FBUyxHQUFHckssR0FBRyxDQUFDM1MsS0FBSixDQUFVLEtBQUs4WSxVQUFmLEVBQTJCLG1CQUEzQixDQUFsQjtFQUNBLFVBQU1tRSxjQUFjLEdBQUd0SyxHQUFHLENBQUMzUyxLQUFKLENBQVUsS0FBSzhZLFVBQWYsRUFBMkIsZ0JBQTNCLENBQXZCO0VBRUEsVUFBTW9FLFFBQVEsR0FBR0gsVUFBVSxDQUFDdkksU0FBWCxDQUFxQjJJLFFBQXJCLENBQThCLG9CQUE5QixJQUNicEssU0FBUyxDQUFDcUssV0FERyxHQUVickssU0FBUyxDQUFDcUssV0FBVixHQUF3QkwsVUFBVSxDQUFDSyxXQUZ2QztFQUdBLFVBQUlDLGNBQWMsR0FBRyxLQUFLYixlQUFMLENBQXFCM2MsTUFBMUM7O0VBRUEsVUFBSW1kLFNBQVMsQ0FBQ0ksV0FBVixHQUF3QkYsUUFBNUIsRUFBc0M7RUFDcEMsYUFBS1YsZUFBTCxDQUFxQm5jLElBQXJCLENBQTBCMmMsU0FBUyxDQUFDSSxXQUFwQzs7RUFDQSxZQUFNRSxRQUFRLEdBQUdOLFNBQVMsQ0FBQ08sUUFBVixDQUFtQi9TLElBQW5CLENBQXdCd1MsU0FBUyxDQUFDTyxRQUFWLENBQW1CMWQsTUFBbkIsR0FBNEIsQ0FBcEQsQ0FBakI7O0VBQ0EsWUFBSXlkLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtFQUNyQjtFQUNEOztFQUNETCxRQUFBQSxjQUFjLENBQUNPLE9BQWYsQ0FBdUJGLFFBQXZCOztFQUVBLFlBQUlQLFVBQVUsQ0FBQ3ZJLFNBQVgsQ0FBcUIySSxRQUFyQixDQUE4QixvQkFBOUIsQ0FBSixFQUF5RDtFQUN2REosVUFBQUEsVUFBVSxDQUFDdkksU0FBWCxDQUFxQndGLE1BQXJCLENBQTRCLG9CQUE1QjtFQUNEO0VBQ0YsT0FYRCxNQVdPO0VBQ0wsWUFBSXFELGNBQWMsSUFBSUgsUUFBUSxHQUFHLEtBQUtWLGVBQUwsQ0FBcUJhLGNBQWMsR0FBRyxDQUF0QyxDQUFqQyxFQUEyRTtFQUN6RSxjQUFNSSxTQUFTLEdBQUdSLGNBQWMsQ0FBQ00sUUFBZixDQUF3Qi9TLElBQXhCLENBQTZCLENBQTdCLENBQWxCOztFQUNBLGNBQUlpVCxTQUFTLEtBQUssSUFBbEIsRUFBd0I7RUFDdEI7RUFDRDs7RUFDRFQsVUFBQUEsU0FBUyxDQUFDL08sTUFBVixDQUFpQndQLFNBQWpCOztFQUNBLGVBQUtqQixlQUFMLENBQXFCN0UsR0FBckI7O0VBQ0EwRixVQUFBQSxjQUFjO0VBQ2Y7O0VBRUQsWUFBSUosY0FBYyxDQUFDTSxRQUFmLENBQXdCMWQsTUFBeEIsS0FBbUMsQ0FBdkMsRUFBMEM7RUFDeENrZCxVQUFBQSxVQUFVLENBQUN2SSxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixvQkFBekI7RUFDRDtFQUNGOztFQUVELFdBQUtpSixpQkFBTDs7RUFDQSxVQUFJVixTQUFTLENBQUNJLFdBQVYsR0FBd0JGLFFBQXhCLElBQ0RHLGNBQWMsR0FBRyxDQUFqQixJQUFzQkgsUUFBUSxHQUFHLEtBQUtWLGVBQUwsQ0FBcUJhLGNBQWMsR0FBRyxDQUF0QyxDQURwQyxFQUMrRTtFQUM3RSxhQUFLVCxRQUFMO0VBQ0Q7RUFDRjs7OzBDQUVvQjtFQUNuQixVQUFNN1UsU0FBUyxHQUFHNEssR0FBRyxDQUFDM1MsS0FBSixDQUFVLEtBQUs4WSxVQUFmLEVBQTJCLGdCQUEzQixDQUFsQjtFQUNBL1EsTUFBQUEsU0FBUyxDQUFDeU0sU0FBVixDQUFvQndGLE1BQXBCLENBQTJCLFdBQTNCO0VBQ0EsVUFBTStDLFVBQVUsR0FBR3BLLEdBQUcsQ0FBQzNTLEtBQUosQ0FBVSxLQUFLOFksVUFBZixFQUEyQixlQUEzQixDQUFuQjtFQUNBaUUsTUFBQUEsVUFBVSxDQUFDaEksWUFBWCxDQUF3QixlQUF4QixFQUF5QyxLQUF6QztFQUNEOzs7eUNBRW1CO0VBQ2xCLFVBQU1oTixTQUFTLEdBQUc0SyxHQUFHLENBQUMzUyxLQUFKLENBQVUsS0FBSzhZLFVBQWYsRUFBMkIsZ0JBQTNCLENBQWxCO0VBQ0EvUSxNQUFBQSxTQUFTLENBQUN5TSxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixXQUF4QjtFQUNBLFVBQU1zSSxVQUFVLEdBQUdwSyxHQUFHLENBQUMzUyxLQUFKLENBQVUsS0FBSzhZLFVBQWYsRUFBMkIsZUFBM0IsQ0FBbkI7RUFDQWlFLE1BQUFBLFVBQVUsQ0FBQ2hJLFlBQVgsQ0FBd0IsZUFBeEIsRUFBeUMsSUFBekM7RUFDRDs7OzJDQUVxQjtFQUNwQixVQUFNaE4sU0FBUyxHQUFHNEssR0FBRyxDQUFDM1MsS0FBSixDQUFVLEtBQUs4WSxVQUFmLEVBQTJCLGdCQUEzQixDQUFsQjtFQUNBL1EsTUFBQUEsU0FBUyxDQUFDeU0sU0FBVixDQUFvQm1KLE1BQXBCLENBQTJCLFdBQTNCO0VBQ0EsVUFBTVosVUFBVSxHQUFHcEssR0FBRyxDQUFDM1MsS0FBSixDQUFVLEtBQUs4WSxVQUFmLEVBQTJCLGVBQTNCLENBQW5CO0VBQ0FpRSxNQUFBQSxVQUFVLENBQUNoSSxZQUFYLENBQXdCLGVBQXhCLEVBQXlDaE4sU0FBUyxDQUFDeU0sU0FBVixDQUFvQjJJLFFBQXBCLENBQTZCLFdBQTdCLENBQXpDO0VBQ0Q7Ozt3Q0FFa0J4TCxHQUFHO0VBQ3BCLFVBQUlBLENBQUMsQ0FBQzhELE1BQUYsQ0FBU21JLE9BQVQsQ0FBaUIsb0JBQWpCLENBQUosRUFBNEM7RUFDMUM7RUFDRDs7RUFFRCxXQUFLRixpQkFBTDtFQUNEO0VBRUQ7Ozs7Ozs7Ozs7K0JBT1VoZ0IsTUFBTTtFQUNkLFVBQUlBLElBQUksQ0FBQytOLFFBQUwsS0FBa0JyTixTQUF0QixFQUFpQztFQUMvQixhQUFLaWUsU0FBTCxHQUFpQixLQUFLd0IsYUFBTCxDQUFtQm5nQixJQUFJLENBQUMrTixRQUF4QixFQUFrQyxLQUFLNFEsU0FBdkMsQ0FBakI7RUFDRCxPQUhhO0VBTWQ7RUFDQTs7O0VBQ0EsVUFBSU4sSUFBSSxHQUFHLEVBQVg7O0VBQ0EsV0FBSyxJQUFJbmMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLeWMsU0FBTCxDQUFleGMsTUFBbkMsRUFBMkNELENBQUMsRUFBNUMsRUFBZ0Q7RUFDOUMsWUFBSW9jLEdBQUcsR0FBRyxLQUFLSSxLQUFMLENBQVcsS0FBS0MsU0FBTCxDQUFlemMsQ0FBZixDQUFYLENBQVY7O0VBQ0EsWUFBSW9jLEdBQUcsS0FBSzVkLFNBQVosRUFBdUI7RUFDckI0ZCxVQUFBQSxHQUFHLENBQUN2ZSxHQUFKLEdBQVUsS0FBS3FnQixjQUFMLENBQW9COUIsR0FBRyxDQUFDamIsT0FBeEIsRUFBaUMsS0FBS3diLFlBQUwsRUFBakMsQ0FBVjtFQUNBUixVQUFBQSxJQUFJLENBQUMxYixJQUFMLENBQVUyYixHQUFWO0VBQ0Q7RUFDRjs7RUFFRCwrRkFBc0I7RUFDcEJELFFBQUFBLElBQUksRUFBRUEsSUFEYztFQUVwQkcsUUFBQUEsYUFBYSxFQUFFLEtBQUtBLGFBRkE7RUFHcEJDLFFBQUFBLFlBQVksRUFBRSxLQUFLQSxZQUhDO0VBSXBCLGtCQUFRO0VBSlksT0FBdEI7RUFNRDs7O3FDQUVlO0VBQ2QsYUFBTyxJQUFJaGQsWUFBSixDQUFpQkUsTUFBTSxDQUFDcUMsUUFBUCxDQUFnQmxDLE1BQWhCLENBQXVCZ0csU0FBdkIsQ0FBaUMsQ0FBakMsQ0FBakIsQ0FBUDtFQUNEO0VBRUQ7Ozs7Ozs7Ozs7eUNBT29Cc1csWUFBWXJhLFdBQVc7RUFDekMsVUFBSWdLLFFBQVEsR0FBRyxFQUFmLENBRHlDO0VBSXpDOztFQUNBLFVBQUloSyxTQUFTLElBQUlBLFNBQVMsQ0FBQ0csR0FBVixDQUFjLFVBQWQsQ0FBakIsRUFBNEM7RUFDMUM2SixRQUFBQSxRQUFRLEdBQUdoSyxTQUFTLENBQUNILEdBQVYsQ0FBYyxVQUFkLEVBQTBCM0IsS0FBMUIsQ0FBZ0MsR0FBaEMsQ0FBWDtFQUNEOztFQUVELFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2tjLFVBQVUsQ0FBQ2pjLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTRDO0VBQzFDLFlBQU1vYyxHQUFHLEdBQUdGLFVBQVUsQ0FBQ2xjLENBQUQsQ0FBdEIsQ0FEMEM7O0VBRzFDLFlBQUlvYyxHQUFHLENBQUNMLFFBQUosS0FBaUJ2ZCxTQUFyQixFQUFnQztFQUM5QjRkLFVBQUFBLEdBQUcsQ0FBQ0wsUUFBSixHQUFlSyxHQUFHLENBQUN2ZSxHQUFuQjtFQUNELFNBTHlDOzs7RUFRMUMsWUFBSWdPLFFBQVEsQ0FBQ3NTLFFBQVQsQ0FBa0IvQixHQUFHLENBQUNMLFFBQXRCLENBQUosRUFBcUM7RUFDbkM7RUFDRCxTQVZ5Qzs7O0VBYTFDLFlBQUlLLEdBQUcsQ0FBQ0osT0FBUixFQUFpQjtFQUNmblEsVUFBQUEsUUFBUSxDQUFDdVMsT0FBVCxDQUFpQmhDLEdBQUcsQ0FBQ0wsUUFBckI7RUFDRCxTQUZELE1BRU87RUFDTGxRLFVBQUFBLFFBQVEsQ0FBQ3BMLElBQVQsQ0FBYzJiLEdBQUcsQ0FBQ0wsUUFBbEI7RUFDRDtFQUNGOztFQUVELGFBQU9sUSxRQUFQO0VBQ0Q7RUFFRDs7Ozs7Ozs7OztvQ0FPZUEsVUFBVXdTLGVBQWU7RUFDdEMsV0FBSyxJQUFJcmUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3FlLGFBQWEsQ0FBQ3BlLE1BQWxDLEVBQTBDRCxDQUFDLEVBQTNDLEVBQStDO0VBQzdDLFlBQU1zZSxTQUFTLEdBQUdELGFBQWEsQ0FBQ3JlLENBQUQsQ0FBL0I7O0VBQ0EsWUFBSTZMLFFBQVEsQ0FBQ3NTLFFBQVQsQ0FBa0JHLFNBQWxCLENBQUosRUFBa0M7RUFDaEM7RUFDRCxTQUo0Qzs7O0VBTzdDLFlBQUksS0FBSzlCLEtBQUwsQ0FBVzhCLFNBQVgsS0FBeUIsS0FBSzlCLEtBQUwsQ0FBVzhCLFNBQVgsRUFBc0J0QyxPQUFuRCxFQUE0RDtFQUMxRG5RLFVBQUFBLFFBQVEsQ0FBQ3VTLE9BQVQsQ0FBaUJFLFNBQWpCO0VBQ0QsU0FGRCxNQUVPO0VBQ0x6UyxVQUFBQSxRQUFRLENBQUNwTCxJQUFULENBQWM2ZCxTQUFkO0VBQ0Q7RUFDRjs7RUFFRCxhQUFPelMsUUFBUDtFQUNEOzs7cUNBRWUxSyxTQUF5QztFQUFBLFVBQWhDdEMsTUFBZ0MsdUVBQXZCLElBQUlhLGVBQUosRUFBdUI7RUFDdkQ7RUFDQTtFQUNBYixNQUFBQSxNQUFNLENBQUN5UCxHQUFQLENBQVcsVUFBWCxFQUF1QixLQUFLbU8sU0FBNUI7RUFDQSxhQUFPdGIsT0FBTyxHQUFHLEdBQVYsR0FBZ0J0QyxNQUFNLENBQUNrRCxRQUFQLEVBQXZCO0VBQ0Q7Ozs7RUFoTkQ7Ozs7OzBDQUs0QnlCLFFBQVE7RUFDbEMsYUFBTyx1QkFBUDtFQUNEOzs7MEJBWGtCO0VBQ2pCLGFBQU8sWUFBUDtFQUNEOzs7O0lBckQ4Q2tWOztFQ3RHakQ7O0VBRUE7Ozs7TUFJcUI2Rjs7O0VBQ25CLG9CQUF3QjtFQUFBLFFBQVh6Z0IsSUFBVyx1RUFBSixFQUFJOztFQUFBOztFQUN0QkksSUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWMsSUFBZCxFQUFvQkwsSUFBcEI7RUFDQUksSUFBQUEsTUFBTSxDQUFDMEcsTUFBUCxDQUFjLElBQWQ7RUFDRDtFQUVEOzs7Ozs7Ozs7bUNBS3FCNFosZ0JBQWdCO0VBQ25DLGFBQU8sSUFBSUQsTUFBSixDQUFXbGdCLElBQUksQ0FBQ3NCLEtBQUwsQ0FBVzZlLGNBQVgsQ0FBWCxDQUFQO0VBQ0Q7RUFFRDs7Ozs7Ozs7MkJBS3VCO0VBQUEsd0NBQVRwVCxPQUFTO0VBQVRBLFFBQUFBLE9BQVM7RUFBQTs7RUFDckIsYUFBTyxJQUFJbVQsTUFBSixDQUFXO0VBQ2hCLGVBQU9uVDtFQURTLE9BQVgsQ0FBUDtFQUdEO0VBRUQ7Ozs7Ozs7OzRCQUt3QjtFQUFBLHlDQUFUQSxPQUFTO0VBQVRBLFFBQUFBLE9BQVM7RUFBQTs7RUFDdEIsYUFBTyxJQUFJbVQsTUFBSixDQUFXO0VBQ2hCLGdCQUFRblQ7RUFEUSxPQUFYLENBQVA7RUFHRDtFQUVEOzs7Ozs7Ozs4QkFLMEI7RUFDeEIsVUFBTXFULE1BQU0sR0FBRyxFQUFmOztFQUR3Qix5Q0FBVHJULE9BQVM7RUFBVEEsUUFBQUEsT0FBUztFQUFBOztFQUV4QixrQ0FBcUJBLE9BQXJCLDhCQUE4QjtFQUF6QixZQUFNckgsTUFBTSxlQUFaO0VBQ0gsWUFBTTlFLEdBQUcsR0FBR2YsTUFBTSxDQUFDK0QsSUFBUCxDQUFZOEIsTUFBWixFQUFvQixDQUFwQixDQUFaOztFQUNBLFlBQUksQ0FBQzBhLE1BQU0sQ0FBQ3hmLEdBQUQsQ0FBWCxFQUFrQjtFQUNoQndmLFVBQUFBLE1BQU0sQ0FBQ3hmLEdBQUQsQ0FBTixHQUFjLEVBQWQ7RUFDRDs7RUFDRHdmLFFBQUFBLE1BQU0sQ0FBQ3hmLEdBQUQsQ0FBTixDQUFZd0IsSUFBWixDQUFpQnNELE1BQWpCO0VBQ0Q7O0VBRUQsVUFBTTJhLFlBQVksR0FBRyxFQUFyQjs7RUFDQSx1Q0FBb0J4Z0IsTUFBTSxDQUFDK0QsSUFBUCxDQUFZd2MsTUFBWixDQUFwQixvQ0FBeUM7RUFBcEMsWUFBTUUsS0FBSyxvQkFBWDtFQUNIRCxRQUFBQSxZQUFZLENBQUNqZSxJQUFiLENBQWtCZ2UsTUFBTSxDQUFDRSxLQUFELENBQU4sQ0FBYzFlLE1BQWQsR0FBdUIsQ0FBdkIsR0FBMkJzZSxNQUFNLENBQUNLLEVBQVAsT0FBQUwsTUFBTSxxQkFBT0UsTUFBTSxDQUFDRSxLQUFELENBQWIsRUFBakMsR0FBeURGLE1BQU0sQ0FBQ0UsS0FBRCxDQUFOLENBQWMsQ0FBZCxDQUEzRTtFQUNEOztFQUVELGFBQU9ELFlBQVksQ0FBQ3plLE1BQWIsR0FBc0IsQ0FBdEIsR0FBMEJzZSxNQUFNLENBQUNNLEdBQVAsT0FBQU4sTUFBTSxFQUFRRyxZQUFSLENBQWhDLEdBQXdEQSxZQUFZLENBQUMsQ0FBRCxDQUEzRTtFQUNEO0VBRUQ7Ozs7Ozs7Ozs0QkFNY0MsT0FBT3BlLE9BQU87RUFDMUIsYUFBT2dlLE1BQU0sQ0FBQ08sWUFBUCxDQUFvQkgsS0FBcEIsRUFBMkIsS0FBM0IsRUFBa0NwZSxLQUFsQyxDQUFQO0VBQ0Q7RUFFRDs7Ozs7Ozs7OytCQU1pQm9lLE9BQU9wZSxPQUFPO0VBQzdCLGFBQU9nZSxNQUFNLENBQUNPLFlBQVAsQ0FBb0JILEtBQXBCLEVBQTJCLEtBQTNCLEVBQWtDcGUsS0FBbEMsQ0FBUDtFQUNEO0VBRUQ7Ozs7Ozs7OztvQ0FNc0JvZSxPQUFPcGUsT0FBTztFQUNsQyxhQUFPZ2UsTUFBTSxDQUFDTyxZQUFQLENBQW9CSCxLQUFwQixFQUEyQixLQUEzQixFQUFrQ3BlLEtBQWxDLENBQVA7RUFDRDtFQUVEOzs7Ozs7Ozs7a0NBTW9Cb2UsT0FBT3BlLE9BQU87RUFDaEMsYUFBT2dlLE1BQU0sQ0FBQ08sWUFBUCxDQUFvQkgsS0FBcEIsRUFBMkIsS0FBM0IsRUFBa0NwZSxLQUFsQyxDQUFQO0VBQ0Q7RUFFRDs7Ozs7Ozs7O3VDQU15Qm9lLE9BQU9wZSxPQUFPO0VBQ3JDLGFBQU9nZSxNQUFNLENBQUNPLFlBQVAsQ0FBb0JILEtBQXBCLEVBQTJCLEtBQTNCLEVBQWtDcGUsS0FBbEMsQ0FBUDtFQUNEO0VBRUQ7Ozs7Ozs7Ozs7cUNBT3VCb2UsT0FBT0ksS0FBS3ZWLEtBQUs7RUFDdEMsYUFBTyxJQUFJK1UsTUFBSixxQkFDSkksS0FESSxFQUNJO0VBQ1AsZUFBT0ksR0FEQTtFQUVQLGVBQU92VjtFQUZBLE9BREosRUFBUDtFQU1EO0VBRUQ7Ozs7Ozs7Ozs7cUNBT3VCbVYsT0FBT0ksS0FBS3ZWLEtBQUs7RUFDdEMsYUFBTyxJQUFJK1UsTUFBSixxQkFDSkksS0FESSxFQUNJO0VBQ1AsZUFBT0ksR0FEQTtFQUVQLGVBQU92VjtFQUZBLE9BREosRUFBUDtFQU1EO0VBRUQ7Ozs7Ozs7OzsrQkFNaUJ3VixLQUFLQyxLQUFLQyxRQUFRO0VBQ2pDLGFBQU9YLE1BQU0sQ0FBQ08sWUFBUCxDQUFvQixrQkFBcEIsRUFBd0MsT0FBeEMsRUFBaUQ7RUFBRUUsUUFBQUEsR0FBRyxFQUFIQSxHQUFGO0VBQU9DLFFBQUFBLEdBQUcsRUFBSEEsR0FBUDtFQUFZQyxRQUFBQSxNQUFNLEVBQU5BO0VBQVosT0FBakQsQ0FBUDtFQUNEO0VBRUQ7Ozs7Ozs7Ozs7O21DQVFxQlAsT0FBT1EsU0FBUzVlLE9BQU87RUFDMUMsYUFBTyxJQUFJZ2UsTUFBSixxQkFDSkksS0FESSxzQkFFRlEsT0FGRSxFQUVRNWUsS0FGUixHQUFQO0VBS0Q7Ozs7OztFQ3BLSDs7Ozs7OztNQU1xQjZlOzs7OztFQUNuQiw2QkFBMEI7RUFBQTs7RUFBQSxRQUFiNWIsTUFBYSx1RUFBSixFQUFJOztFQUFBOztFQUN4Qix5RkFBTUEsTUFBTjtFQUVBOzs7Ozs7RUFLQSxVQUFLNmIsT0FBTCxHQUFlN2IsTUFBTSxDQUFDK0MsTUFBUCxJQUFpQixJQUFoQztFQUVBOzs7Ozs7RUFLQSxVQUFLK1ksWUFBTCxHQUFvQjliLE1BQU0sQ0FBQ0ssV0FBUCxJQUFzQixJQUExQztFQUVBOzs7Ozs7RUFLQSxVQUFLMGIsT0FBTCxHQUFlL2IsTUFBTSxDQUFDZ2MsWUFBUCxJQUF1QixNQUF0QztFQUVBOzs7Ozs7RUFLQSxVQUFLQyxRQUFMLEdBQWdCamMsTUFBTSxDQUFDa2MsT0FBUCxJQUFrQixnQkFBbEM7RUFFQTs7Ozs7O0VBS0EsVUFBSy9YLEtBQUwsR0FBYW5FLE1BQU0sQ0FBQ21FLEtBQVAsSUFBZ0IsMEJBQTdCO0VBRUE7Ozs7OztFQUtBLFVBQUtnWSxTQUFMLEdBQWlCbmMsTUFBTSxDQUFDbWMsU0FBUCxJQUFvQiw2QkFBckM7RUFFQTs7Ozs7RUFJQSxVQUFLQyxVQUFMLEdBQWtCcGMsTUFBTSxDQUFDb2MsVUFBUCxJQUFxQixRQUF2QztFQUVBOzs7Ozs7RUFLQSxVQUFLQyxVQUFMLEdBQWtCcmMsTUFBTSxDQUFDcWMsVUFBUCxJQUFxQixJQUF2QztFQUVBOzs7Ozs7RUFLQSxVQUFLQyxZQUFMLEdBQW9CdGMsTUFBTSxDQUFDc2MsWUFBUCxJQUF1QixJQUEzQztFQUVBOzs7Ozs7RUFLQSxVQUFLQyxTQUFMLEdBQWlCdmMsTUFBTSxDQUFDdWMsU0FBUCxLQUFxQixJQUF0QztFQUVBOzs7Ozs7RUFLQSxVQUFLQyxrQkFBTCxHQUEwQnhjLE1BQU0sQ0FBQ3djLGtCQUFQLElBQTZCLEtBQXZEO0VBRUE7Ozs7Ozs7Ozs7RUFTQSxVQUFLQyxXQUFMLEdBQW1CemMsTUFBTSxDQUFDeWMsV0FBUCxJQUFzQixJQUF6QztFQUVBOzs7Ozs7RUFLQSxVQUFLN2YsS0FBTCxHQUFhb0QsTUFBTSxDQUFDcEQsS0FBUCxJQUFnQixNQUFLNlAsSUFBTCxDQUFVakMsYUFBVixDQUF3QlMsUUFBeEIsQ0FBaUNqQixXQUFXLENBQUNoQixLQUE3QyxDQUFoQixJQUF1RSxFQUFwRjs7RUFDQSxVQUFLeUQsSUFBTCxDQUFVakMsYUFBVixDQUF3QnVCLEVBQXhCLENBQTJCLFFBQTNCLEVBQXFDL0IsV0FBVyxDQUFDaEIsS0FBakQsRUFBd0QsVUFBQTBULENBQUMsRUFBSTtFQUMzRCxZQUFLOWYsS0FBTCxHQUFhOGYsQ0FBYjs7RUFDQSxZQUFLclAsUUFBTDs7RUFDQSxZQUFLalIsTUFBTCxDQUFZc2dCLENBQVo7RUFDRCxLQUpEO0VBTUE7Ozs7Ozs7O0VBTUEsVUFBS0MsZUFBTCxHQUF1QjNjLE1BQU0sQ0FBQzRjLGNBQVAsSUFBeUIsR0FBaEQ7RUE1R3dCO0VBNkd6Qjs7OztpQ0FlVztFQUNWLFVBQUksS0FBS2hnQixLQUFMLElBQWMsQ0FBQyxLQUFLNmYsV0FBeEIsRUFBcUM7RUFDbkMsYUFBS2hRLElBQUwsQ0FBVW9RLFFBQVYsQ0FBbUIsS0FBS2pnQixLQUF4QjtFQUNEO0VBQ0Y7OztnQ0FFVTtFQUNULFVBQUksS0FBSzJmLFNBQUwsS0FBbUIsSUFBbkIsSUFBMkIsS0FBSzNmLEtBQUwsQ0FBV0gsTUFBWCxLQUFzQixDQUFqRCxJQUFzRCxDQUFDLEtBQUsrZixrQkFBaEUsRUFBb0Y7RUFDbEZqTixRQUFBQSxHQUFHLENBQUMzUyxLQUFKLENBQVUsS0FBSzhZLFVBQWYsRUFBMkIsS0FBS3VHLFFBQWhDLEVBQTBDYSxLQUExQztFQUNELE9BSFE7OztFQU1ULFdBQUtDLFVBQUwsQ0FBZ0IsS0FBS2hCLE9BQXJCO0VBQ0EsV0FBS2lCLGdCQUFMLENBQXNCLEtBQUtmLFFBQTNCOztFQUVBLFVBQUksS0FBS00sU0FBTCxLQUFtQixJQUFuQixJQUEyQixLQUFLM2YsS0FBTCxDQUFXSCxNQUFYLEtBQXNCLENBQWpELElBQXNELEtBQUsrZixrQkFBL0QsRUFBbUY7RUFDakZqTixRQUFBQSxHQUFHLENBQUMzUyxLQUFKLENBQVUsS0FBSzhZLFVBQWYsRUFBMkIsS0FBS3VHLFFBQWhDLEVBQTBDYSxLQUExQztFQUNEO0VBQ0Y7RUFFRDs7Ozs7OztpQ0FJWWQsY0FBYztFQUFBOztFQUN4QixXQUFLRCxPQUFMLEdBQWVDLFlBQWY7O0VBRUEsV0FBS3RHLFVBQUwsQ0FBZ0J0RSxTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIsdUJBQTlCOztFQUVBLFVBQUk0TCxJQUFJLEdBQUcxTixHQUFHLENBQUMzUyxLQUFKLENBQVUsS0FBSzhZLFVBQWYsRUFBMkJzRyxZQUEzQixDQUFYOztFQUNBLFVBQUksQ0FBQ2lCLElBQUwsRUFBVztFQUNULGNBQU0sSUFBSTNkLEtBQUosQ0FBVSw4REFBVixFQUEwRSxLQUFLeWMsT0FBL0UsRUFBd0YsSUFBeEYsQ0FBTjtFQUNEOztFQUVEeE0sTUFBQUEsR0FBRyxDQUFDeEQsRUFBSixDQUFPa1IsSUFBUCxFQUFhLFFBQWIsRUFBdUIsVUFBQzFPLENBQUQsRUFBTztFQUM1QkEsUUFBQUEsQ0FBQyxDQUFDMk8sY0FBRjtFQUVBLFlBQUloQixPQUFPLEdBQUdlLElBQUksQ0FBQ3pNLGFBQUwsQ0FBbUIsTUFBSSxDQUFDeUwsUUFBeEIsQ0FBZDtFQUVBLFlBQUlyZixLQUFLLEdBQUdzZixPQUFPLENBQUNuZixLQUFwQjtFQUNBLFlBQUkxQixNQUFNLEdBQUcsSUFBSVUsWUFBSixDQUFpQkUsTUFBTSxDQUFDcUMsUUFBUCxDQUFnQmxDLE1BQWhCLENBQXVCZ0csU0FBdkIsQ0FBaUMsQ0FBakMsQ0FBakIsQ0FBYjtFQUNBL0csUUFBQUEsTUFBTSxDQUFDeVAsR0FBUCxDQUFXLE9BQVgsRUFBb0JsTyxLQUFwQixFQVA0QjtFQVU1Qjs7RUFDQSxZQUFJLE9BQU8sTUFBSSxDQUFDNmYsV0FBWixLQUE0QixRQUFoQyxFQUEwQztFQUN4Q3hnQixVQUFBQSxNQUFNLENBQUNxQyxRQUFQLENBQWdCNmUsSUFBaEIsR0FBdUIsTUFBSSxDQUFDVixXQUFMLEdBQW1CLEdBQW5CLEdBQXlCcGhCLE1BQU0sQ0FBQ2tELFFBQVAsRUFBaEQ7RUFDQSxpQkFBTyxLQUFQO0VBQ0Q7O0VBRUQyZCxRQUFBQSxPQUFPLENBQUNrQixJQUFSOztFQUVBLFFBQUEsTUFBSSxDQUFDM1EsSUFBTCxDQUFVaEMsaUJBQVYsQ0FBNEJLLEdBQTVCLENBQWdDZCxXQUFXLENBQUNoQixLQUE1QyxFQUFtRHBNLEtBQW5EOztFQUNBLFFBQUEsTUFBSSxDQUFDNlAsSUFBTCxDQUFVb1EsUUFBVixDQUFtQmpnQixLQUFuQjs7RUFDQSxRQUFBLE1BQUksQ0FBQ1IsTUFBTCxDQUFZUSxLQUFaOztFQUNBLGVBQU8sS0FBUDtFQUNELE9BdEJEO0VBdUJEO0VBRUQ7Ozs7Ozs7dUNBSWtCeWdCLGVBQWU7RUFBQTs7RUFDL0IsV0FBS3BCLFFBQUwsR0FBZ0JvQixhQUFoQjs7RUFFQSxVQUFJLEtBQUtDLGFBQVQsRUFBd0I7RUFDdEIsYUFBS0EsYUFBTCxDQUFtQjFHLE1BQW5CO0VBQ0Q7O0VBRUQsV0FBSzBHLGFBQUwsR0FBcUIsS0FBS3ZRLGdCQUFMLENBQXNCMkosTUFBdEIsQ0FBNkIsY0FBN0IsRUFBNkM7RUFDaEV2RyxRQUFBQSxNQUFNLEVBQUUsSUFEd0Q7RUFFaEVyVCxRQUFBQSxJQUFJLFlBQUssS0FBS0EsSUFBVixrQkFGNEQ7RUFHaEU2UyxRQUFBQSxTQUFTLEVBQUUsNkJBSHFEO0VBSWhFNU0sUUFBQUEsTUFBTSxFQUFFLEtBQUs4WSxPQUptRDtFQUtoRVUsUUFBQUEsU0FBUyxFQUFFLEtBQUtBLFNBQUwsSUFBa0IsQ0FBQyxLQUFLQyxrQkFMNkI7RUFNaEVuYyxRQUFBQSxXQUFXLEVBQUUsS0FBS3liLFlBTjhDO0VBT2hFUSxRQUFBQSxZQUFZLEVBQUUsS0FBS0EsWUFQNkM7RUFRaEVpQixRQUFBQSxhQUFhLEVBQUUsS0FBSzNnQixLQVI0QztFQVNoRXNmLFFBQUFBLE9BQU8sRUFBRW1CLGFBVHVEO0VBVWhFRyxRQUFBQSxRQUFRLEVBQUUsb0JBQU07RUFDZGpPLFVBQUFBLEdBQUcsQ0FBQ2tPLE9BQUosQ0FBWSxNQUFJLENBQUMxQixPQUFqQixFQUEwQixRQUExQjtFQUNEO0VBWitELE9BQTdDLENBQXJCO0VBY0Q7Ozs2QkFFT25mLE9BQU87RUFBQTs7RUFDYixVQUFJLEtBQUs4Z0IsVUFBVCxFQUFxQjtFQUNuQjtFQUNEOztFQUVELFdBQUtBLFVBQUwsR0FBa0IsSUFBbEI7RUFDQW5FLE1BQUFBLFVBQVUsQ0FBQyxZQUFNO0VBQUUsUUFBQSxNQUFJLENBQUNtRSxVQUFMLEdBQWtCLEtBQWxCO0VBQTBCLE9BQW5DLEVBQXFDLEtBQUtmLGVBQTFDLENBQVY7O0VBRUEsVUFBSSxLQUFLYixZQUFULEVBQXVCO0VBQ3JCLFlBQU02QixVQUFVLEdBQUcsS0FBS2xSLElBQUwsQ0FBVWpDLGFBQVYsQ0FBd0JvVCxNQUF4QixDQUErQjVULFdBQVcsQ0FBQ2pCLE1BQTNDLENBQW5CO0VBQ0EsWUFBTThVLFdBQVcsR0FBR0YsVUFBVSxDQUFDbGhCLE1BQVgsR0FBb0IsQ0FBcEIsR0FDaEJzZSxNQUFNLENBQUNNLEdBQVAsT0FBQU4sTUFBTSxxQkFBUTRDLFVBQVIsRUFEVSxHQUVoQkEsVUFBVSxDQUFDLENBQUQsQ0FGZDtFQUdBLFlBQU1uZCxXQUFXLEdBQUcsS0FBS2lNLElBQUwsQ0FBVWpDLGFBQVYsQ0FBd0JvVCxNQUF4QixDQUErQjVULFdBQVcsQ0FBQ2QsWUFBM0MsRUFBeUQsQ0FBekQsQ0FBcEI7RUFDQSxlQUFPLEtBQUt1RCxJQUFMLENBQVV6QixjQUFWLENBQXlCLEtBQUs4USxZQUE5QixFQUE0QztFQUNqRHhiLFVBQUFBLEtBQUssRUFBRTFELEtBRDBDO0VBRWpEMkQsVUFBQUEsTUFBTSxFQUFFMUYsSUFBSSxDQUFDQyxTQUFMLENBQWUraUIsV0FBZixDQUZ5QztFQUdqRHJkLFVBQUFBLFdBQVcsRUFBRTNGLElBQUksQ0FBQ0MsU0FBTCxDQUFlMEYsV0FBZjtFQUhvQyxTQUE1QyxDQUFQO0VBS0QsT0FYRCxNQVdPO0VBQ0w7RUFDQTtFQUNBLFlBQUk4SCxHQUFHLEdBQUcsS0FBS3lFLGdCQUFMLENBQ1ArUSxrQkFETyxDQUNZLFlBRFosQ0FBVjs7RUFHQSxZQUFJeFYsR0FBSixFQUFTO0VBQ1AsY0FBSXFRLElBQUksR0FBR3JRLEdBQUcsQ0FBQzJDLFFBQUosQ0FBYSxNQUFiLENBQVg7RUFDQSxjQUFJM0QsSUFBSSxHQUFHLEVBQVg7O0VBRUEsY0FBSXFSLElBQUksSUFBSXBSLEtBQUssQ0FBQ0MsT0FBTixDQUFjbVIsSUFBZCxDQUFaLEVBQWlDO0VBQy9CLGlCQUFLLElBQUluYyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHbWMsSUFBSSxDQUFDbGMsTUFBekIsRUFBaUNELENBQUMsRUFBbEMsRUFBc0M7RUFDcEMsa0JBQUluQixNQUFNLEdBQUcsSUFBSVUsWUFBSixDQUFpQjRjLElBQUksQ0FBQ25jLENBQUQsQ0FBSixDQUFRbkMsR0FBUixDQUFZa0MsS0FBWixDQUFrQixHQUFsQixFQUF1QixDQUF2QixDQUFqQixDQUFiO0VBQ0FsQixjQUFBQSxNQUFNLENBQUN5UCxHQUFQLENBQVcsT0FBWCxFQUFvQmxPLEtBQXBCO0VBRUEsa0JBQUl2QyxHQUFHLEdBQUdzZSxJQUFJLENBQUNuYyxDQUFELENBQUosQ0FBUW1CLE9BQWxCOztFQUNBLGtCQUFJdEMsTUFBTSxDQUFDa0QsUUFBUCxHQUFrQjlCLE1BQWxCLEdBQTJCLENBQS9CLEVBQWtDO0VBQ2hDcEMsZ0JBQUFBLEdBQUcsSUFBSSxNQUFNZ0IsTUFBTSxDQUFDa0QsUUFBUCxFQUFiO0VBQ0Q7O0VBQ0QrSSxjQUFBQSxJQUFJLENBQUNxUixJQUFJLENBQUNuYyxDQUFELENBQUosQ0FBUStiLFFBQVQsQ0FBSixHQUF5QmxlLEdBQXpCO0VBQ0Q7RUFDRjs7RUFDRCxpQkFBTyxLQUFLb1MsSUFBTCxDQUFVclEsTUFBVixDQUFpQlEsS0FBakIsRUFBd0IwSyxJQUF4QixDQUFQO0VBQ0Q7O0VBRUQsZUFBTyxLQUFLbUYsSUFBTCxDQUFVclEsTUFBVixDQUFpQlEsS0FBakIsQ0FBUDtFQUNEO0VBQ0Y7OzsrQkFFU3RDLE1BQU07RUFDZCwyRkFBc0JJLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0VBQ2xDd0osUUFBQUEsS0FBSyxFQUFFLEtBQUtBLEtBRHNCO0VBRWxDZ1ksUUFBQUEsU0FBUyxFQUFFLEtBQUtBLFNBRmtCO0VBR2xDRSxRQUFBQSxVQUFVLEVBQUUsS0FBS0EsVUFIaUI7RUFJbENELFFBQUFBLFVBQVUsRUFBRSxLQUFLQSxVQUppQjtFQUtsQ3hmLFFBQUFBLEtBQUssRUFBRSxLQUFLQTtFQUxzQixPQUFkLEVBTW5CdEMsSUFObUIsQ0FBdEI7RUFPRDs7OztFQXZKRDs7Ozs7NENBSzhCO0VBQzVCLGFBQU8sZUFBUDtFQUNEOzs7MEJBWGtCO0VBQ2pCLGFBQU8sV0FBUDtFQUNEOzs7O0lBbEgwQzRhOztFQ043Qzs7Ozs7Ozs7TUFPcUI2STs7Ozs7RUFDbkIsbUNBQTBCO0VBQUE7O0VBQUEsUUFBYi9kLE1BQWEsdUVBQUosRUFBSTs7RUFBQTs7RUFDeEIsK0ZBQU1BLE1BQU47RUFFQTs7Ozs7RUFJQSxVQUFLNmIsT0FBTCxHQUFlN2IsTUFBTSxDQUFDK0MsTUFBUCxJQUFpQi9DLE1BQU0sQ0FBQ2dlLFFBQXhCLElBQW9DLElBQW5EO0VBRUE7Ozs7O0VBSUEsVUFBS2xDLFlBQUwsR0FBb0I5YixNQUFNLENBQUNLLFdBQVAsSUFBc0IsSUFBMUM7RUFFQTs7Ozs7O0VBS0EsVUFBSzRkLGNBQUwsR0FBc0JqZSxNQUFNLENBQUNrZSxhQUFQLElBQXdCLEtBQTlDO0VBRUE7Ozs7OztFQUtBLFVBQUtuQyxPQUFMLEdBQWUvYixNQUFNLENBQUNnYyxZQUFQLElBQXVCLE1BQXRDO0VBRUE7Ozs7OztFQUtBLFVBQUtDLFFBQUwsR0FBZ0JqYyxNQUFNLENBQUNrYyxPQUFQLElBQWtCLGdCQUFsQztFQUVBOzs7Ozs7RUFLQSxVQUFLL1gsS0FBTCxHQUFhbkUsTUFBTSxDQUFDbUUsS0FBcEI7RUFFQTs7Ozs7O0VBS0EsVUFBS2dhLFVBQUwsR0FBa0JuZSxNQUFNLENBQUNtZSxVQUFQLElBQXFCLDZCQUF2QztFQUVBOzs7Ozs7RUFLQSxVQUFLN0IsWUFBTCxHQUFvQnRjLE1BQU0sQ0FBQ3NjLFlBQVAsSUFBdUIsSUFBM0M7RUFFQTs7Ozs7O0VBS0EsVUFBS0MsU0FBTCxHQUFpQnZjLE1BQU0sQ0FBQ3VjLFNBQVAsS0FBcUIsSUFBdEM7RUFFQTs7Ozs7Ozs7OztFQVNBLFVBQUtFLFdBQUwsR0FBbUJ6YyxNQUFNLENBQUN5YyxXQUFQLElBQXNCLElBQXpDO0VBRUE7Ozs7OztFQUtBLFVBQUs3ZixLQUFMLEdBQWFvRCxNQUFNLENBQUNwRCxLQUFQLElBQWdCLE1BQUs2UCxJQUFMLENBQVVqQyxhQUFWLENBQXdCUyxRQUF4QixXQUFvQ2pCLFdBQVcsQ0FBQ2hCLEtBQWhELGNBQXlELE1BQUtsTSxJQUE5RCxFQUFoQixJQUF5RixFQUF0Rzs7RUFDQSxVQUFLMlAsSUFBTCxDQUFVakMsYUFBVixDQUF3QnVCLEVBQXhCLENBQTJCLFFBQTNCLFlBQXdDL0IsV0FBVyxDQUFDaEIsS0FBcEQsY0FBNkQsTUFBS2xNLElBQWxFLEdBQTBFLFVBQUE0ZixDQUFDLEVBQUk7RUFDN0UsWUFBSzlmLEtBQUwsR0FBYThmLENBQWI7O0VBQ0EsWUFBS3RnQixNQUFMO0VBQ0QsS0FIRDtFQUtBOzs7Ozs7O0VBS0EsVUFBS21FLE1BQUwsR0FBY1AsTUFBTSxDQUFDTyxNQUFQLElBQWlCLE1BQUtrTSxJQUFMLENBQVVqQyxhQUFWLENBQXdCUyxRQUF4QixXQUFvQ2pCLFdBQVcsQ0FBQ2pCLE1BQWhELGNBQTBELE1BQUtqTSxJQUEvRCxFQUFqQixJQUEyRixFQUF6Rzs7RUFDQSxRQUFJLE9BQU8sTUFBS3lELE1BQVosS0FBdUIsUUFBM0IsRUFBcUM7RUFDbkMsVUFBSTtFQUNGLGNBQUtBLE1BQUwsR0FBYzFGLElBQUksQ0FBQ3NCLEtBQUwsQ0FBVyxNQUFLb0UsTUFBaEIsQ0FBZDtFQUNELE9BRkQsQ0FFRSxPQUFPZ08sQ0FBUCxFQUFVO0VBQ2I7O0VBRUQsVUFBSzlCLElBQUwsQ0FBVWpDLGFBQVYsQ0FBd0J1QixFQUF4QixDQUEyQixRQUEzQixZQUF3Qy9CLFdBQVcsQ0FBQ2pCLE1BQXBELGNBQThELE1BQUtqTSxJQUFuRSxHQUEyRSxVQUFBMk0sQ0FBQyxFQUFJO0VBQUUsWUFBS2xKLE1BQUwsR0FBY2tKLENBQWQ7RUFBa0IsS0FBcEc7O0VBbEd3QjtFQW1HekI7Ozs7aUNBZVc7RUFDVixVQUFJLEtBQUs3TSxLQUFMLElBQWMsS0FBSzJELE1BQXZCLEVBQStCO0VBQzdCLGFBQUtuRSxNQUFMO0VBQ0Q7RUFDRjs7O2dDQUVVO0VBQ1Q7RUFDQSxXQUFLNGdCLGdCQUFMLENBQXNCLEtBQUtmLFFBQTNCOztFQUVBLFVBQUksS0FBS00sU0FBTCxLQUFtQixJQUFuQixJQUEyQixLQUFLM2YsS0FBTCxDQUFXSCxNQUFYLEtBQXNCLENBQXJELEVBQXdEO0VBQ3REOFMsUUFBQUEsR0FBRyxDQUFDM1MsS0FBSixDQUFVLEtBQUs4WSxVQUFmLEVBQTJCLEtBQUt1RyxRQUFoQyxFQUEwQ2EsS0FBMUM7RUFDRDtFQUNGO0VBRUQ7Ozs7Ozs7dUNBSWtCTyxlQUFlO0VBQUE7O0VBQy9CLFdBQUtwQixRQUFMLEdBQWdCb0IsYUFBaEI7RUFFQSxXQUFLdFEsZ0JBQUwsQ0FBc0IySixNQUF0QixDQUE2QixjQUE3QixFQUE2QztFQUMzQ3ZHLFFBQUFBLE1BQU0sRUFBRSxJQURtQztFQUUzQ3JULFFBQUFBLElBQUksWUFBSyxLQUFLQSxJQUFWLGtCQUZ1QztFQUczQ3NoQixRQUFBQSxjQUFjLEVBQUUsSUFIMkI7RUFJM0N6TyxRQUFBQSxTQUFTLEVBQUUsNkJBSmdDO0VBSzNDMk0sUUFBQUEsWUFBWSxFQUFFLEtBQUtBLFlBTHdCO0VBTTNDaUIsUUFBQUEsYUFBYSxFQUFFLEtBQUszZ0IsS0FOdUI7RUFPM0N5aEIsUUFBQUEsY0FBYyxFQUFFLEtBQUs5ZCxNQVBzQjtFQVEzQzJiLFFBQUFBLE9BQU8sRUFBRW1CLGFBUmtDO0VBUzNDaGQsUUFBQUEsV0FBVyxFQUFFLEtBQUt5YixZQVR5QjtFQVUzQy9ZLFFBQUFBLE1BQU0sRUFBRSxLQUFLOFksT0FWOEI7RUFXM0MyQixRQUFBQSxRQUFRLEVBQUUsa0JBQUM1Z0IsS0FBRCxFQUFRMkQsTUFBUixFQUFtQjtFQUMzQixjQUFNbEYsTUFBTSxHQUFHLElBQUlVLFlBQUosQ0FBaUJFLE1BQU0sQ0FBQ3FDLFFBQVAsQ0FBZ0JsQyxNQUFoQixDQUF1QmdHLFNBQXZCLENBQWlDLENBQWpDLENBQWpCLENBQWY7RUFDQS9HLFVBQUFBLE1BQU0sQ0FBQ3lQLEdBQVAsV0FBYyxNQUFJLENBQUNoTyxJQUFuQixhQUFpQ0YsS0FBakM7RUFDQXZCLFVBQUFBLE1BQU0sQ0FBQ3lQLEdBQVAsV0FBYyxNQUFJLENBQUNoTyxJQUFuQixjQUFrQ3lELE1BQWxDLEVBSDJCO0VBTTNCOztFQUNBLGNBQUksT0FBTyxNQUFJLENBQUNrYyxXQUFaLEtBQTRCLFFBQWhDLEVBQTBDO0VBQ3hDeGdCLFlBQUFBLE1BQU0sQ0FBQ3FDLFFBQVAsQ0FBZ0I2ZSxJQUFoQixHQUF1QixNQUFJLENBQUNWLFdBQUwsR0FBbUIsR0FBbkIsR0FBeUJwaEIsTUFBTSxDQUFDa0QsUUFBUCxFQUFoRDtFQUNBLG1CQUFPLEtBQVA7RUFDRCxXQVYwQjs7O0VBYTNCLFVBQUEsTUFBSSxDQUFDM0IsS0FBTCxHQUFhQSxLQUFiO0VBQ0EsVUFBQSxNQUFJLENBQUMyRCxNQUFMLEdBQWN3YSxNQUFNLENBQUN1RCxZQUFQLENBQW9CL2QsTUFBcEIsQ0FBZDs7RUFDQSxVQUFBLE1BQUksQ0FBQ2tNLElBQUwsQ0FBVWhDLGlCQUFWLENBQTRCSyxHQUE1QixXQUFtQ2QsV0FBVyxDQUFDaEIsS0FBL0MsY0FBd0QsTUFBSSxDQUFDbE0sSUFBN0QsR0FBcUUsTUFBSSxDQUFDRixLQUExRTs7RUFDQSxVQUFBLE1BQUksQ0FBQzZQLElBQUwsQ0FBVWhDLGlCQUFWLENBQTRCSyxHQUE1QixXQUFtQ2QsV0FBVyxDQUFDakIsTUFBL0MsY0FBeUQsTUFBSSxDQUFDak0sSUFBOUQsR0FBc0UsTUFBSSxDQUFDeUQsTUFBM0U7O0VBQ0EsVUFBQSxNQUFJLENBQUNrTSxJQUFMLENBQVU4UixTQUFWLENBQW9CLE1BQUksQ0FBQ3poQixJQUF6QixFQUErQixNQUFJLENBQUN5RCxNQUFwQzs7RUFDQSxVQUFBLE1BQUksQ0FBQ25FLE1BQUw7RUFDRDtFQTlCMEMsT0FBN0M7RUFnQ0Q7RUFFRDs7Ozs7OzsrQkFJVTtFQUNSLFVBQUksS0FBSzZoQixjQUFULEVBQXlCO0VBQ3ZCO0VBQ0Q7O0VBRUQsVUFBTXJXLE9BQU8sR0FBRyxLQUFLNkUsSUFBTCxDQUFVakMsYUFBVixDQUF3Qm9ULE1BQXhCLENBQStCNVQsV0FBVyxDQUFDakIsTUFBM0MsQ0FBaEI7RUFDQSxVQUFJOFUsV0FBVyxHQUFHalcsT0FBTyxDQUFDLENBQUQsQ0FBekI7O0VBQ0EsVUFBSUEsT0FBTyxDQUFDbkwsTUFBUixHQUFpQixDQUFyQixFQUF3QjtFQUN0Qm9oQixRQUFBQSxXQUFXLEdBQUc5QyxNQUFNLENBQUNNLEdBQVAsT0FBQU4sTUFBTSxxQkFBUW5ULE9BQVIsRUFBcEI7RUFDRDs7RUFDRCxVQUFNcE0sV0FBVyxHQUFHLEtBQUtpUixJQUFMLENBQVVqQyxhQUFWLENBQXdCUyxRQUF4QixDQUFpQ2pCLFdBQVcsQ0FBQ2hCLEtBQTdDLEtBQXVELEVBQTNFO0VBQ0EsVUFBTXhJLFdBQVcsR0FBRyxLQUFLaU0sSUFBTCxDQUFVakMsYUFBVixDQUF3Qm9ULE1BQXhCLENBQStCNVQsV0FBVyxDQUFDZCxZQUEzQyxFQUF5RCxDQUF6RCxDQUFwQjtFQUVBLFdBQUt1RCxJQUFMLENBQVV6QixjQUFWLENBQXlCLEtBQUs4USxZQUE5QixFQUE0QztFQUMxQ3hiLFFBQUFBLEtBQUssRUFBRTlFLFdBRG1DO0VBRTFDK0UsUUFBQUEsTUFBTSxFQUFFMUYsSUFBSSxDQUFDQyxTQUFMLENBQWUraUIsV0FBZixDQUZrQztFQUcxQ3JkLFFBQUFBLFdBQVcsRUFBRTNGLElBQUksQ0FBQ0MsU0FBTCxDQUFlMEYsV0FBZjtFQUg2QixPQUE1QztFQUtEOzs7K0JBRVNsRyxNQUFNO0VBQ2QsaUdBQXNCSSxNQUFNLENBQUNDLE1BQVAsQ0FBYztFQUNsQ3dKLFFBQUFBLEtBQUssRUFBRSxLQUFLQSxLQURzQjtFQUVsQ2dhLFFBQUFBLFVBQVUsRUFBRSxLQUFLQSxVQUZpQjtFQUdsQ3ZoQixRQUFBQSxLQUFLLEVBQUUsS0FBS0EsS0FIc0I7RUFJbEMyRCxRQUFBQSxNQUFNLEVBQUUsS0FBS0E7RUFKcUIsT0FBZCxFQUtuQmpHLElBTG1CLENBQXRCO0VBTUQ7Ozs7RUFoR0Q7Ozs7OzRDQUs4QjtFQUM1QixhQUFPLHFCQUFQO0VBQ0Q7OzswQkFYa0I7RUFDakIsYUFBTyxjQUFQO0VBQ0Q7Ozs7SUF4R2dENGE7O0VDVG5ELElBQU1zSixJQUFJLEdBQUc7RUFDWEMsRUFBQUEsU0FBUyxFQUFFLENBREE7RUFFWEMsRUFBQUEsR0FBRyxFQUFFLENBRk07RUFHWEMsRUFBQUEsS0FBSyxFQUFFLEVBSEk7RUFJWEMsRUFBQUEsS0FBSyxFQUFFLEVBSkk7RUFLWEMsRUFBQUEsSUFBSSxFQUFFLEVBTEs7RUFNWEMsRUFBQUEsR0FBRyxFQUFFLEVBTk07RUFPWEMsRUFBQUEsTUFBTSxFQUFFLEVBUEc7RUFTWEMsRUFBQUEsSUFBSSxFQUFFLEVBVEs7RUFVWEMsRUFBQUEsS0FBSyxFQUFFLEVBVkk7RUFXWEMsRUFBQUEsRUFBRSxFQUFFLEVBWE87RUFhWC9rQixFQUFBQSxNQUFNLEVBQUUsRUFiRztFQWNYZ2xCLEVBQUFBLElBQUksRUFBRSxFQWRLO0VBZVhDLEVBQUFBLFdBQVcsRUFBRSxFQWZGO0VBZ0JYQyxFQUFBQSxZQUFZLEVBQUUsRUFoQkg7RUFpQlhDLEVBQUFBLFVBQVUsRUFBRTtFQWpCRCxDQUFiOztNQW9CcUJDOzs7OztFQUNuQixtQ0FBd0I7RUFBQTs7RUFBQSxRQUFYaGxCLElBQVcsdUVBQUosRUFBSTs7RUFBQTs7RUFDdEIsK0ZBQU1BLElBQU47RUFFQTs7Ozs7RUFJQSxVQUFLNmpCLGNBQUwsR0FBc0I3akIsSUFBSSxDQUFDNmpCLGNBQUwsSUFBdUIsS0FBN0M7RUFFQTs7Ozs7RUFJQSxVQUFLdkMsT0FBTCxHQUFldGhCLElBQUksQ0FBQ3dJLE1BQUwsSUFBZSxJQUE5QjtFQUVBOzs7OztFQUlBLFVBQUsrWSxZQUFMLEdBQW9CdmhCLElBQUksQ0FBQzhGLFdBQUwsSUFBb0IsSUFBeEM7RUFFQTs7Ozs7RUFJQSxVQUFLNGIsUUFBTCxHQUFnQjFoQixJQUFJLENBQUMyaEIsT0FBTCxJQUFnQixnQkFBaEM7RUFFQTs7Ozs7RUFJQSxVQUFLc0QsZ0JBQUwsR0FBd0JqbEIsSUFBSSxDQUFDa2xCLGVBQUwsSUFBd0IsNkJBQWhEO0VBRUE7Ozs7O0VBSUEsVUFBSzdjLFFBQUwsYUFBbUJvSCxXQUFXLENBQUNuQixZQUEvQixjQUErQyxNQUFLL0wsSUFBcEQ7RUFFQTs7Ozs7OztFQU1BLFVBQUs0aUIsY0FBTCxHQUFzQm5sQixJQUFJLENBQUNnakIsYUFBTCxJQUFzQixFQUE1QztFQUVBOzs7Ozs7RUFLQSxVQUFLb0MsYUFBTCxHQUFxQixDQUFyQjtFQUVBOzs7Ozs7RUFLQSxVQUFLQyxZQUFMLEdBQW9CLENBQUMsQ0FBckI7RUFFQTs7Ozs7O0VBS0EsVUFBS3RELFlBQUwsR0FBb0IvaEIsSUFBSSxDQUFDK2hCLFlBQUwsSUFBcUIsSUFBekM7RUFFQTs7Ozs7RUFJQSxVQUFLdUQsVUFBTCxHQUFrQnRsQixJQUFJLENBQUNnaUIsU0FBTCxJQUFrQixLQUFwQztFQUVBOzs7O0VBR0EsVUFBS3VELFNBQUwsR0FBaUJ2bEIsSUFBSSxDQUFDaWpCLFFBQUwsSUFBaUIsWUFBWSxFQUE5Qzs7RUE3RXNCO0VBOEV2QjtFQUVEOzs7Ozs7OztFQWdCQTs7Ozs7K0JBS1VsakIsTUFBTTtFQUNkLDBGQUFlSSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCTCxJQUFsQixFQUF3QjtFQUNyQ3lsQixRQUFBQSxVQUFVLEVBQUUsS0FBS0EsVUFBTCxDQUFnQnpsQixJQUFoQixDQUR5QjtFQUVyQzBsQixRQUFBQSxZQUFZLEVBQUUsS0FBS0wsYUFGa0I7RUFHckNNLFFBQUFBLFdBQVcsRUFBRSxLQUFLTCxZQUhtQjtFQUlyQ3RELFFBQUFBLFlBQVksRUFBRSxLQUFLb0QsY0FBTCxDQUFvQmpqQixNQUFwQixLQUErQixDQUEvQixHQUFtQyxLQUFLNmYsWUFBeEMsR0FBdUQ7RUFKaEMsT0FBeEIsQ0FBZjtFQU1EO0VBRUQ7Ozs7OztvQ0FHZTtFQUNiLFdBQUtqUCxRQUFMLENBQWMsS0FBS3lGLE1BQUwsQ0FBWTVVLEdBQVosRUFBZDtFQUNEO0VBRUQ7Ozs7Ozs7aUNBSVk7RUFBQTs7RUFDVjtFQUNBLFVBQUlnaUIsVUFBVSxHQUFHM1EsR0FBRyxDQUFDM1MsS0FBSixDQUFVLEtBQUt5WSxPQUFMLENBQWFLLFVBQXZCLEVBQW1DLEtBQUt1RyxRQUF4QyxDQUFqQjs7RUFDQSxVQUFJLENBQUNpRSxVQUFMLEVBQWlCO0VBQ2YsY0FBTSxJQUFJNWdCLEtBQUosQ0FBVSxpRUFBVixFQUE2RSxLQUFLMmMsUUFBbEYsRUFBNEYsSUFBNUYsQ0FBTjtFQUNELE9BTFM7OztFQVFWMU0sTUFBQUEsR0FBRyxDQUFDNFEsVUFBSixDQUFlRCxVQUFmLEVBQTJCO0VBQ3pCRSxRQUFBQSxZQUFZLEVBQUUsS0FEVztFQUV6QkMsUUFBQUEsV0FBVyxFQUFFLEtBRlk7RUFHekJDLFFBQUFBLFVBQVUsRUFBRTtFQUhhLE9BQTNCLEVBUlU7RUFlVjtFQUNBOztFQUNBL1EsTUFBQUEsR0FBRyxDQUFDeEQsRUFBSixDQUFPdUQsUUFBUCxFQUFpQixPQUFqQixFQUEwQixVQUFBZixDQUFDLEVBQUk7RUFDN0IsWUFBSUEsQ0FBQyxDQUFDOEQsTUFBRixDQUFTRSxPQUFULENBQWlCLGdDQUFqQixLQUFzRGhFLENBQUMsQ0FBQzhELE1BQUYsQ0FBU0UsT0FBVCxDQUFpQixNQUFJLENBQUMwSixRQUF0QixDQUExRCxFQUEyRjtFQUN6RjtFQUNEOztFQUNELFFBQUEsTUFBSSxDQUFDc0UsS0FBTDtFQUNELE9BTEQsRUFqQlU7RUF5QlY7O0VBQ0FoUixNQUFBQSxHQUFHLENBQUN4RCxFQUFKLENBQU9tVSxVQUFQLEVBQW1CLE9BQW5CLEVBQTRCLFlBQU07RUFDaEMsUUFBQSxNQUFJLENBQUNNLEtBQUw7O0VBQ0EsUUFBQSxNQUFJLENBQUNDLFlBQUwsQ0FBa0JQLFVBQVUsQ0FBQ25qQixLQUE3QjtFQUNELE9BSEQsRUExQlU7O0VBZ0NWd1MsTUFBQUEsR0FBRyxDQUFDeEQsRUFBSixDQUFPbVUsVUFBUCxFQUFtQixTQUFuQixFQUE4QixVQUFDM1IsQ0FBRCxFQUFPO0VBQ25DLFFBQUEsTUFBSSxDQUFDbVMscUJBQUwsQ0FBMkJuUyxDQUFDLENBQUNvUyxPQUE3QixFQUFzQ3BTLENBQXRDOztFQUNBLFFBQUEsTUFBSSxDQUFDcVMsa0JBQUwsQ0FBd0JyUyxDQUFDLENBQUNvUyxPQUExQixFQUFtQ1QsVUFBVSxDQUFDbmpCLEtBQTlDLEVBQXFEd1IsQ0FBckQ7RUFDRCxPQUhEOztFQUtBLFVBQUksS0FBS3NSLFVBQVQsRUFBcUI7RUFDbkJ0USxRQUFBQSxHQUFHLENBQUMyQyxJQUFKLENBQVNnTyxVQUFULEVBQXFCLE9BQXJCLEVBQThCLFlBQU07RUFDbEMsVUFBQSxNQUFJLENBQUNPLFlBQUwsQ0FBa0JQLFVBQVUsQ0FBQ25qQixLQUE3QjtFQUNELFNBRkQ7RUFHRCxPQXpDUzs7O0VBNENWd1MsTUFBQUEsR0FBRyxDQUFDc1IsUUFBSixDQUFhLEtBQUtuTCxVQUFsQixFQUE4Qiw4QkFBOUIsRUFBOEQsT0FBOUQsRUFBdUUsVUFBQzdKLEdBQUQsRUFBTXdHLE1BQU4sRUFBaUI7RUFDdEYsWUFBSS9YLElBQUksR0FBRytYLE1BQU0sQ0FBQ3VGLE9BQWxCO0VBQ0EsWUFBSTdWLEdBQUcsR0FBR3pILElBQUksU0FBZDs7RUFFQSxRQUFBLE1BQUksQ0FBQ3dtQixXQUFMLENBQWlCL2UsR0FBakI7O0VBQ0EsUUFBQSxNQUFJLENBQUMrZCxTQUFMLENBQWUvZCxHQUFmLEVBQW9CekgsSUFBSSxDQUFDaUcsTUFBekI7O0VBQ0EsUUFBQSxNQUFJLENBQUNnZ0IsS0FBTDtFQUNELE9BUEQsRUE1Q1U7O0VBc0RWaFIsTUFBQUEsR0FBRyxDQUFDeEQsRUFBSixDQUFPbVUsVUFBUCxFQUFtQixPQUFuQixFQUE0QixVQUFDM1IsQ0FBRCxFQUFPO0VBQ2pDLFFBQUEsTUFBSSxDQUFDd1MsWUFBTCxDQUFrQnhTLENBQUMsQ0FBQ29TLE9BQXBCLEVBQTZCVCxVQUFVLENBQUNuakIsS0FBeEMsRUFBK0N3UixDQUEvQztFQUNELE9BRkQ7RUFHRDtFQUVEOzs7Ozs7OEJBR1M7RUFDUCxXQUFLbEIsUUFBTCxDQUFjLEVBQWQ7RUFDQSxXQUFLbVQsS0FBTDtFQUNEO0VBRUQ7Ozs7Ozs7OEJBSVM7RUFDUCxXQUFLYixhQUFMLEdBQXFCLENBQXJCO0VBQ0EsV0FBS0MsWUFBTCxHQUFvQixDQUFDLENBQXJCO0VBQ0EsV0FBS29CLFdBQUw7RUFDRDtFQUVEOzs7Ozs7OztrQ0FLYUMsVUFBVTtFQUNyQjtFQUNBO0VBQ0E7RUFDQSxVQUFJQSxRQUFRLEtBQUtqbUIsU0FBakIsRUFBNEI7RUFDMUIsWUFBSWtHLFFBQVEsR0FBRyxLQUFLNFIsTUFBTCxDQUFZNVUsR0FBWixDQUFnQixVQUFoQixDQUFmOztFQUVBLFlBQUlzRCxPQUFPLEdBQUdOLFFBQVEsQ0FBQyxLQUFLeWUsYUFBTixDQUFSLENBQTZCbmUsT0FBM0M7RUFDQXlmLFFBQUFBLFFBQVEsR0FBR3pmLE9BQU8sQ0FBQyxLQUFLb2UsWUFBTixDQUFQLENBQTJCOWQsVUFBdEM7RUFDRDs7RUFFRCxVQUFJb2YsT0FBTyxHQUFHM1IsR0FBRyxDQUFDM1MsS0FBSixDQUFVLEtBQUt5WSxPQUFMLENBQWFLLFVBQXZCLEVBQW1DLEtBQUt1RyxRQUF4QyxDQUFkO0VBQ0FpRixNQUFBQSxPQUFPLENBQUNua0IsS0FBUixHQUFnQmtrQixRQUFoQjtFQUNEOzs7bUNBRWF4bEIsS0FBS3NCLE9BQU93UixHQUFHO0VBQzNCLFVBQUk0UyxXQUFXLEdBQUcsQ0FDaEIzQyxJQUFJLENBQUNXLElBRFcsRUFFaEJYLElBQUksQ0FBQ1UsRUFGVyxFQUdoQlYsSUFBSSxDQUFDSyxJQUhXLEVBSWhCTCxJQUFJLENBQUNNLEdBSlcsRUFLaEJOLElBQUksQ0FBQ0ksS0FMVyxFQU1oQkosSUFBSSxDQUFDUSxJQU5XLEVBT2hCUixJQUFJLENBQUNTLEtBUFcsRUFRaEJULElBQUksQ0FBQ1ksV0FSVyxFQVNoQlosSUFBSSxDQUFDYSxZQVRXLEVBVWhCYixJQUFJLENBQUNHLEtBVlcsRUFXaEJILElBQUksQ0FBQ0UsR0FYVyxFQVloQkYsSUFBSSxDQUFDYyxVQVpXLENBQWxCOztFQWVBLFVBQUk2QixXQUFXLENBQUM1bEIsT0FBWixDQUFvQkUsR0FBcEIsSUFBMkIsQ0FBQyxDQUFoQyxFQUFtQztFQUNqQztFQUNELE9BbEIwQjs7O0VBcUIzQixVQUFJQSxHQUFHLEtBQUsraUIsSUFBSSxDQUFDTyxNQUFqQixFQUF5QjtFQUN2QixhQUFLK0IsV0FBTCxDQUFpQixLQUFLcEIsY0FBdEI7RUFDQSxhQUFLYSxLQUFMO0VBQ0E7RUFDRCxPQXpCMEI7OztFQTRCM0IsV0FBS2IsY0FBTCxHQUFzQjNpQixLQUF0QjtFQUVBLFdBQUt5akIsS0FBTDtFQUNBLFdBQUtDLFlBQUwsQ0FBa0IxakIsS0FBbEI7RUFDRDs7O21DQUVhdUQsT0FBTztFQUNuQixVQUFJLEtBQUs4ZCxjQUFULEVBQXlCO0VBQ3ZCLGFBQUszUixJQUFMLENBQVUyVSxrQkFBVixDQUE2QjlnQixLQUE3QixFQUFvQyxLQUFLeEQsSUFBekMsRUFBK0MsS0FBS2dmLFlBQXBELEVBQWtFLEtBQUtELE9BQXZFO0VBQ0QsT0FGRCxNQUVPLElBQUksS0FBS0MsWUFBTCxJQUFxQixLQUFLRCxPQUE5QixFQUF1QztFQUM1QyxhQUFLcFAsSUFBTCxDQUFVNFUsb0JBQVYsQ0FBK0IvZ0IsS0FBL0IsRUFBc0MsS0FBS3hELElBQTNDLEVBQWlELEtBQUtnZixZQUF0RCxFQUFvRSxLQUFLRCxPQUF6RTtFQUNELE9BRk0sTUFFQTtFQUNMLGFBQUtwUCxJQUFMLENBQVU2VSxxQkFBVixDQUFnQ2hoQixLQUFoQyxFQUF1QyxLQUFLeEQsSUFBNUM7RUFDRDtFQUNGO0VBRUQ7Ozs7Ozs7aUNBSVl4QyxNQUFNO0VBQ2hCLFVBQUksQ0FBQ0EsSUFBTCxFQUFXO0VBQ1QsZUFBTyxLQUFQO0VBQ0Q7O0VBQ0QsVUFBSTRHLFFBQVEsR0FBRzVHLElBQUksQ0FBQyxVQUFELENBQW5COztFQUNBLFVBQUksQ0FBQzRHLFFBQUwsRUFBZTtFQUNiLGVBQU8sS0FBUDtFQUNEOztFQUVELFdBQUssSUFBSTFFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcwRSxRQUFRLENBQUN6RSxNQUE3QixFQUFxQ0QsQ0FBQyxFQUF0QyxFQUEwQztFQUN4QyxZQUFNbEMsS0FBSSxHQUFHNEcsUUFBUSxDQUFDMUUsQ0FBRCxDQUFyQjs7RUFDQSxZQUFJLENBQUNsQyxLQUFMLEVBQVc7RUFDVDtFQUNEOztFQUNELFlBQU1rSCxPQUFPLEdBQUdsSCxLQUFJLENBQUNrSCxPQUFyQjs7RUFDQSxZQUFJLENBQUNBLE9BQUwsRUFBYztFQUNaO0VBQ0Q7O0VBRUQsWUFBSUEsT0FBTyxDQUFDL0UsTUFBUixHQUFpQixDQUFyQixFQUF3QjtFQUN0QixpQkFBTyxJQUFQO0VBQ0Q7RUFDRjs7RUFFRCxhQUFPLEtBQVA7RUFDRDs7OzRDQUVzQmhCLEtBQUs4UyxHQUFHO0VBQzdCLFVBQUlyTixRQUFRLEdBQUcsS0FBSzRSLE1BQUwsQ0FBWTVVLEdBQVosQ0FBZ0IsVUFBaEIsQ0FBZjs7RUFDQSxVQUFJZ0QsUUFBUSxLQUFLbEcsU0FBYixJQUEwQmtHLFFBQVEsQ0FBQ3pFLE1BQVQsSUFBbUIsQ0FBakQsRUFBb0Q7RUFDbEQ7RUFDRCxPQUo0Qjs7O0VBTzdCLFVBQUloQixHQUFHLEtBQUsraUIsSUFBSSxDQUFDRSxHQUFqQixFQUFzQjtFQUNwQixhQUFLNkIsS0FBTDtFQUNBO0VBQ0Q7O0VBRUQsVUFBSS9lLE9BQU8sR0FBR04sUUFBUSxDQUFDLEtBQUt5ZSxhQUFOLENBQVIsQ0FBNkJuZSxPQUEzQzs7RUFDQSxVQUFJL0YsR0FBRyxLQUFLK2lCLElBQUksQ0FBQ1UsRUFBakIsRUFBcUI7RUFDbkIzUSxRQUFBQSxDQUFDLENBQUMyTyxjQUFGOztFQUNBLFlBQUksS0FBSzBDLFlBQUwsSUFBcUIsQ0FBekIsRUFBNEI7RUFDMUIsY0FBSSxLQUFLRCxhQUFMLEdBQXFCLENBQXpCLEVBQTRCO0VBQzFCLGlCQUFLQSxhQUFMO0VBQ0EsaUJBQUtDLFlBQUwsR0FBb0IxZSxRQUFRLENBQUMsS0FBS3llLGFBQU4sQ0FBUixDQUE2Qm5lLE9BQTdCLENBQXFDL0UsTUFBckMsR0FBOEMsQ0FBbEU7RUFDRCxXQUhELE1BR087RUFDTCxpQkFBS3FrQixXQUFMLENBQWlCLEtBQUtwQixjQUF0QjtFQUNBLGlCQUFLYyxLQUFMO0VBQ0E7RUFDRDs7RUFDRCxlQUFLTSxXQUFMO0VBQ0EsZUFBS0UsV0FBTDtFQUNBO0VBQ0Q7O0VBRUQsYUFBS3BCLFlBQUw7RUFDQSxhQUFLb0IsV0FBTDtFQUNBLGFBQUtGLFdBQUw7RUFDQTtFQUNEOztFQUVELFVBQUlybEIsR0FBRyxLQUFLK2lCLElBQUksQ0FBQ1csSUFBakIsRUFBdUI7RUFDckI1USxRQUFBQSxDQUFDLENBQUMyTyxjQUFGOztFQUNBLFlBQUksS0FBSzBDLFlBQUwsSUFBcUJwZSxPQUFPLENBQUMvRSxNQUFSLEdBQWlCLENBQTFDLEVBQTZDO0VBQzNDLGNBQUksS0FBS2tqQixhQUFMLEdBQXFCemUsUUFBUSxDQUFDekUsTUFBVCxHQUFrQixDQUEzQyxFQUE4QztFQUM1QyxpQkFBS2tqQixhQUFMO0VBQ0EsaUJBQUtDLFlBQUwsR0FBb0IsQ0FBcEI7RUFDRDs7RUFDRCxlQUFLa0IsV0FBTDtFQUNBLGVBQUtFLFdBQUw7RUFDQTtFQUNEOztFQUVELGFBQUtwQixZQUFMO0VBQ0EsYUFBS2tCLFdBQUw7RUFDQSxhQUFLRSxXQUFMO0VBQ0Q7RUFDRjs7O3lDQUVtQnZsQixLQUFLc0IsT0FBT3dSLEdBQUc7RUFDakMsVUFBSXJOLFFBQVEsR0FBRyxLQUFLNFIsTUFBTCxDQUFZNVUsR0FBWixDQUFnQixVQUFoQixDQUFmOztFQUNBLFVBQUlnRCxRQUFRLEtBQUtsRyxTQUFiLElBQTBCa0csUUFBUSxDQUFDekUsTUFBVCxJQUFtQixDQUFqRCxFQUFvRDtFQUNsRCxZQUFJLEtBQUsyaEIsY0FBVCxFQUF5QjtFQUN2QixlQUFLcUMsWUFBTCxDQUFrQjFqQixLQUFsQjtFQUNEOztFQUNEO0VBQ0QsT0FQZ0M7OztFQVVqQyxVQUFJdEIsR0FBRyxLQUFLK2lCLElBQUksQ0FBQ0csS0FBakIsRUFBd0I7RUFDdEJwUSxRQUFBQSxDQUFDLENBQUMyTyxjQUFGOztFQUVBLFlBQUksS0FBS2tCLGNBQUwsSUFBdUIsS0FBS3dCLFlBQUwsS0FBc0IsQ0FBQyxDQUFsRCxFQUFxRDtFQUNuRDtFQUNEOztFQUVELFlBQUlyZixNQUFNLEdBQUcsRUFBYjs7RUFDQSxZQUFJLEtBQUtvZixhQUFMLElBQXNCLENBQXRCLElBQTJCLEtBQUtDLFlBQUwsSUFBcUIsQ0FBcEQsRUFBdUQ7RUFDckRyZixVQUFBQSxNQUFNLEdBQUcxRixJQUFJLENBQUNDLFNBQUwsQ0FBZW9HLFFBQVEsQ0FBQyxLQUFLeWUsYUFBTixDQUFSLENBQTZCbmUsT0FBN0IsQ0FBcUMsS0FBS29lLFlBQTFDLEVBQXdEcmYsTUFBdkUsQ0FBVDtFQUNEOztFQUVELGFBQUt1Z0IsV0FBTCxDQUFpQi9qQixLQUFqQjtFQUNBLGFBQUsyaUIsY0FBTCxHQUFzQjNpQixLQUF0Qjs7RUFDQSxhQUFLK2lCLFNBQUwsQ0FBZS9pQixLQUFmLEVBQXNCd0QsTUFBdEI7O0VBQ0EsYUFBS2dnQixLQUFMO0VBQ0Q7RUFDRjs7OztFQTlSRDs7Ozs7MENBSzRCdmdCLFFBQVE7RUFDbEMsYUFBTyxxQkFBUDtFQUNEOzs7MEJBWGtCO0VBQ2pCLGFBQU8sY0FBUDtFQUNEOzs7O0lBdEZnRGtWOztFQzFCbkQ7O0VBRUE7Ozs7Ozs7OztNQVNxQnFNOzs7RUFDbkIsbUJBQXdCO0VBQUEsUUFBWGpuQixJQUFXLHVFQUFKLEVBQUk7O0VBQUE7O0VBQ3RCSSxJQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLEVBQW9CTCxJQUFwQjtFQUNBSSxJQUFBQSxNQUFNLENBQUMwRyxNQUFQLENBQWMsSUFBZDtFQUNEO0VBRUQ7Ozs7Ozs7OztvQ0FLZ0M7RUFDOUIsVUFBTTZaLE1BQU0sR0FBRyxFQUFmOztFQUQ4Qix3Q0FBVHJULE9BQVM7RUFBVEEsUUFBQUEsT0FBUztFQUFBOztFQUU5QixVQUFNNFosV0FBVyxHQUFHNVosT0FBTyxDQUFDNlosT0FBUixDQUFnQixVQUFBaFksQ0FBQztFQUFBLGVBQUlBLENBQUMsQ0FBQ2lZLEdBQUYsSUFBU2pZLENBQWI7RUFBQSxPQUFqQixDQUFwQjtFQUNBK1gsTUFBQUEsV0FBVyxDQUFDOWlCLE9BQVosQ0FBb0IsVUFBQStLLENBQUMsRUFBSTtFQUN2QixZQUFNaE8sR0FBRyxHQUFHZixNQUFNLENBQUMrRCxJQUFQLENBQVlnTCxDQUFaLEVBQWUsQ0FBZixDQUFaOztFQUNBLFlBQUksQ0FBQ3dSLE1BQU0sQ0FBQ3hmLEdBQUQsQ0FBWCxFQUFrQjtFQUNoQndmLFVBQUFBLE1BQU0sQ0FBQ3hmLEdBQUQsQ0FBTixHQUFjLEVBQWQ7RUFDRDs7RUFDRHdmLFFBQUFBLE1BQU0sQ0FBQ3hmLEdBQUQsQ0FBTixDQUFZd0IsSUFBWixDQUFpQndNLENBQWpCO0VBQ0QsT0FORDtFQVFBLGFBQU8sSUFBSThYLEtBQUosQ0FBVXRHLE1BQVYsQ0FBUDtFQUNEOzs7Ozs7RUN6Qkg7Ozs7OztNQUtxQjBHOzs7OztFQUNuQixnQ0FBMEI7RUFBQTs7RUFBQSxRQUFiM2hCLE1BQWEsdUVBQUosRUFBSTs7RUFBQTs7RUFDeEIsNEZBQU1BLE1BQU47O0VBRUEsUUFBSSxDQUFDQSxNQUFNLENBQUM0SCxPQUFSLElBQW1CLEVBQUU1SCxNQUFNLENBQUM0SCxPQUFQLFlBQTBCTCxLQUE1QixDQUF2QixFQUEyRDtFQUN6RCxZQUFNLElBQUloSSxxQkFBSixDQUNKLHVEQURJLEVBRUosV0FGSSxDQUFOO0VBR0Q7RUFFRDs7Ozs7OztFQUtBLFVBQUtxaUIsY0FBTCxHQUFzQjVoQixNQUFNLENBQUM0SCxPQUE3QjtFQUVBOzs7Ozs7RUFLQSxVQUFLa1UsWUFBTCxHQUFvQjliLE1BQU0sQ0FBQ0ssV0FBUCxJQUFzQixJQUExQztFQUVBOzs7Ozs7RUFLQSxVQUFLd2hCLGVBQUwsR0FBdUI3aEIsTUFBTSxDQUFDOGhCLGNBQVAsSUFBeUIsS0FBaEQ7RUFFQTs7Ozs7O0VBS0EsVUFBS0Msb0JBQUwsR0FBNEIvaEIsTUFBTSxDQUFDZ2lCLG1CQUFQLElBQThCLDBCQUExRDtFQUVBOzs7Ozs7RUFLQSxVQUFLQyxpQkFBTCxHQUF5QixFQUF6QjtFQUVBOzs7Ozs7RUFLQSxVQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0VBRUE7Ozs7Ozs7RUFNQSxVQUFLQyxVQUFMLEdBQWtCbmlCLE1BQU0sQ0FBQ29pQixTQUFQLElBQW9CLEtBQXRDO0VBRUE7Ozs7OztFQUtBLFVBQUtwTSxhQUFMO0VBaEV3QjtFQWlFekI7Ozs7K0JBTVMxYixNQUFNO0VBQ2QsdUZBQWVJLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTCxJQUFkLEVBQW9CO0VBQ2pDK25CLFFBQUFBLGFBQWEsRUFBRSxLQUFLVCxjQURhO0VBRWpDVSxRQUFBQSxlQUFlLEVBQUUsQ0FBQyxLQUFLVDtFQUZVLE9BQXBCLENBQWY7RUFJRDs7O2dDQUVVO0VBQUE7O0VBQ1QsVUFBSSxLQUFLSSxpQkFBTCxDQUF1QnhsQixNQUEzQixFQUFtQztFQUNqQyxhQUFLd2xCLGlCQUFMLENBQXVCdmpCLE9BQXZCLENBQStCLFVBQUF5TyxDQUFDO0VBQUEsaUJBQUlBLENBQUMsQ0FBQ3lKLE1BQUYsRUFBSjtFQUFBLFNBQWhDOztFQUNBLGFBQUtxTCxpQkFBTCxHQUF5QixFQUF6QjtFQUNBLGFBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7RUFDRCxPQUxROzs7RUFBQSxpQ0FRQTFsQixDQVJBO0VBU1AsWUFBTXdELE1BQU0sR0FBRyxNQUFJLENBQUM0aEIsY0FBTCxDQUFvQnBsQixDQUFwQixDQUFmOztFQUNBLFlBQU1nRCxTQUFTLEdBQUcsTUFBSSxDQUFDdU4sZ0JBQUwsQ0FBc0IySixNQUF0QixDQUE2QjFXLE1BQU0sQ0FBQzRNLElBQXBDLEVBQTBDbFMsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUMxRHFGLE1BRDBELEVBRTFEO0VBQ0VtUSxVQUFBQSxNQUFNLEVBQUUsTUFEVjtFQUVFclQsVUFBQUEsSUFBSSxZQUFLLE1BQUksQ0FBQ0EsSUFBVixvQkFBd0JOLENBQXhCLENBRk47RUFHRTBoQixVQUFBQSxhQUFhLEVBQUUsS0FIakI7RUFJRXZPLFVBQUFBLFNBQVMscUNBQThCblQsQ0FBOUIsQ0FKWDtFQUtFK2xCLFVBQUFBLFFBQVEsRUFBRSxrQkFBQ2hpQixNQUFELEVBQVk7RUFDcEIsWUFBQSxNQUFJLENBQUNpaUIsY0FBTCxDQUFvQmhtQixDQUFwQixFQUF1QitELE1BQXZCO0VBQ0Q7RUFQSCxTQUYwRCxDQUExQyxDQUFsQjs7RUFXQWYsUUFBQUEsU0FBUyxDQUFDK1csS0FBVjs7RUFDQSxRQUFBLE1BQUksQ0FBQzBMLGlCQUFMLENBQXVCaGxCLElBQXZCLENBQTRCdUMsU0FBNUI7O0VBQ0EsUUFBQSxNQUFJLENBQUMwaUIsUUFBTCxDQUFjMWxCLENBQWQsSUFBbUJnRCxTQUFTLENBQUNpakIsU0FBVixFQUFuQjtFQXZCTzs7RUFRVCxXQUFLLElBQUlqbUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLb2xCLGNBQUwsQ0FBb0JubEIsTUFBeEMsRUFBZ0RELENBQUMsRUFBakQsRUFBcUQ7RUFBQSxjQUE1Q0EsQ0FBNEM7RUFnQnBELE9BeEJROzs7RUEyQlQsVUFBSSxDQUFDLEtBQUtxbEIsZUFBVixFQUEyQjtFQUN6QixZQUFNYSxNQUFNLEdBQUduVCxHQUFHLENBQUMzUyxLQUFKLENBQVUsS0FBSzhZLFVBQWYsRUFBMkIsS0FBS3FNLG9CQUFoQyxDQUFmOztFQUVBLFlBQUlXLE1BQUosRUFBWTtFQUNWblQsVUFBQUEsR0FBRyxDQUFDeEQsRUFBSixDQUFPMlcsTUFBUCxFQUFlLE9BQWYsRUFBd0IsWUFBTTtFQUM1QixZQUFBLE1BQUksQ0FBQ0MscUJBQUw7O0VBQ0EsWUFBQSxNQUFJLENBQUNDLE9BQUw7RUFDRCxXQUhEO0VBSUQ7RUFDRjtFQUNGO0VBRUQ7Ozs7Ozs7O3FDQUtnQnZkLE9BQU85RSxRQUFRO0VBQzdCLFdBQUsyaEIsUUFBTCxDQUFjN2MsS0FBZCxJQUF1QjlFLE1BQXZCOztFQUNBLFVBQUksS0FBS3NoQixlQUFULEVBQTBCO0VBQ3hCLGFBQUtjLHFCQUFMOztFQUNBLGFBQUtDLE9BQUw7RUFDRDtFQUNGO0VBRUQ7Ozs7OzsrQkFHVTtFQUNSLFdBQUtYLGlCQUFMLENBQXVCdmpCLE9BQXZCLENBQStCLFVBQUF5TyxDQUFDO0VBQUEsZUFBSUEsQ0FBQyxDQUFDeUosTUFBRixFQUFKO0VBQUEsT0FBaEM7O0VBQ0E7RUFDRDtFQUVEOzs7Ozs7OzhDQUl5QjtFQUN2QixVQUFNaU0sWUFBWSxHQUFHLEtBQUtYLFFBQUwsQ0FBYzNoQixNQUFkLENBQXFCLFVBQUFrSixDQUFDO0VBQUEsZUFDekNBLENBQUMsS0FBS3pPLFNBQU4sSUFDQXlPLENBQUMsS0FBSyxJQUROLElBRUEvTyxNQUFNLENBQUMrRCxJQUFQLENBQVlnTCxDQUFaLEVBQWVoTixNQUFmLEdBQXdCLENBSGlCO0VBQUEsT0FBdEIsQ0FBckI7O0VBS0EsVUFBSSxLQUFLMGxCLFVBQVQsRUFBcUI7RUFDbkIsWUFBTVcsY0FBYyxHQUFHdkIsS0FBSyxDQUFDd0IsV0FBTixPQUFBeEIsS0FBSyxxQkFBZ0JzQixZQUFoQixFQUE1QjtFQUNBLGFBQUtwVyxJQUFMLENBQVV1VyxjQUFWLENBQXlCLEtBQUtsbUIsSUFBOUIsRUFBb0NnbUIsY0FBYyxJQUFJLEVBQXREO0VBQ0QsT0FIRCxNQUdPO0VBQ0wsWUFBTUEsZUFBYyxHQUFHRCxZQUFZLENBQUNwbUIsTUFBYixHQUFzQixDQUF0QixHQUNuQnNlLE1BQU0sQ0FBQ00sR0FBUCxPQUFBTixNQUFNLHFCQUFROEgsWUFBUixFQURhLEdBRW5CQSxZQUFZLENBQUMsQ0FBRCxDQUZoQjs7RUFHQSxhQUFLcFcsSUFBTCxDQUFVOFIsU0FBVixDQUFvQixLQUFLemhCLElBQXpCLEVBQStCZ21CLGVBQWMsSUFBSSxFQUFqRDtFQUNEO0VBQ0Y7RUFFRDs7Ozs7O2dDQUdXO0VBQ1QsVUFBTW5GLFVBQVUsR0FBRyxLQUFLbFIsSUFBTCxDQUFVakMsYUFBVixDQUF3Qm9ULE1BQXhCLENBQStCNVQsV0FBVyxDQUFDakIsTUFBM0MsQ0FBbkI7RUFDQSxVQUFNOFUsV0FBVyxHQUFHRixVQUFVLENBQUNsaEIsTUFBWCxHQUFvQixDQUFwQixHQUNoQnNlLE1BQU0sQ0FBQ00sR0FBUCxPQUFBTixNQUFNLHFCQUFRNEMsVUFBUixFQURVLEdBRWhCQSxVQUFVLENBQUMsQ0FBRCxDQUZkO0VBSUEsVUFBTS9nQixLQUFLLEdBQUcsS0FBSzZQLElBQUwsQ0FBVWpDLGFBQVYsQ0FBd0JTLFFBQXhCLENBQWlDakIsV0FBVyxDQUFDaEIsS0FBN0MsQ0FBZDtFQUVBLFVBQU14SSxXQUFXLEdBQUcsS0FBS2lNLElBQUwsQ0FBVWpDLGFBQVYsQ0FBd0JvVCxNQUF4QixDQUErQjVULFdBQVcsQ0FBQ2QsWUFBM0MsRUFBeUQsQ0FBekQsQ0FBcEI7RUFFQSxXQUFLdUQsSUFBTCxDQUFVekIsY0FBVixDQUF5QixLQUFLOFEsWUFBOUIsRUFBNEM7RUFDMUN4YixRQUFBQSxLQUFLLEVBQUUxRCxLQURtQztFQUUxQzJELFFBQUFBLE1BQU0sRUFBRTFGLElBQUksQ0FBQ0MsU0FBTCxDQUFlK2lCLFdBQWYsQ0FGa0M7RUFHMUNyZCxRQUFBQSxXQUFXLEVBQUUzRixJQUFJLENBQUNDLFNBQUwsQ0FBZTBGLFdBQWY7RUFINkIsT0FBNUM7RUFLRDs7OzBCQTlHa0I7RUFDakIsYUFBTyxXQUFQO0VBQ0Q7Ozs7SUF0RTZDMFU7O0VDUGhEOzs7OztFQUlBLElBQU0rTixrQkFBa0IsR0FBRyxDQUN6QixjQUR5QixFQUV6QixhQUZ5QixDQUEzQjtFQUtBOzs7O01BR3FCQzs7Ozs7RUFDbkIsb0NBQTBCO0VBQUE7O0VBQUEsUUFBYmxqQixNQUFhLHVFQUFKLEVBQUk7O0VBQUE7O0VBQ3hCLGdHQUFNQSxNQUFOOztFQUVBLFFBQUksQ0FBQ0EsTUFBTSxDQUFDbWpCLE9BQVIsSUFBbUIsQ0FBQ0Ysa0JBQWtCLENBQUN0SSxRQUFuQixDQUE0QjNhLE1BQU0sQ0FBQ21qQixPQUFuQyxDQUF4QixFQUFxRTtFQUNuRSxZQUFNLElBQUk1akIscUJBQUosQ0FDSix5REFESSxFQUVKLGVBRkksQ0FBTjtFQUdEOztFQUVELFFBQUksQ0FBQ1MsTUFBTSxDQUFDMkosT0FBWixFQUFxQjtFQUNuQixZQUFNLElBQUlwSyxxQkFBSixDQUNKLHlEQURJLEVBRUosZUFGSSxDQUFOO0VBR0Q7O0VBRUQsUUFBSTZqQixlQUFlLEdBQUcsTUFBSzNXLElBQUwsQ0FBVWpDLGFBQVYsQ0FBd0JTLFFBQXhCLENBQWlDLE1BQUtuTyxJQUF0QyxDQUF0Qjs7RUFDQSxRQUFJLE9BQU9zbUIsZUFBUCxLQUEyQixRQUEvQixFQUF5QztFQUN2QyxVQUFJO0VBQ0ZBLFFBQUFBLGVBQWUsR0FBR3ZvQixJQUFJLENBQUNzQixLQUFMLENBQVdpbkIsZUFBWCxDQUFsQjtFQUNELE9BRkQsQ0FFRSxPQUFPN1UsQ0FBUCxFQUFVO0VBQ2I7O0VBQ0QsUUFBSThVLGVBQWUsR0FBR0QsZUFBZSxJQUFJLEVBQXpDO0VBRUE7Ozs7OztFQUtBLFVBQUtFLFFBQUwsR0FBZ0J0akIsTUFBTSxDQUFDMkosT0FBUCxDQUFldEksR0FBZixDQUFtQixVQUFBdUksQ0FBQztFQUFBLGFBQUlsUCxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCO0VBQUVtUCxRQUFBQSxRQUFRLEVBQUV1WixlQUFlLENBQUMxSSxRQUFoQixDQUF5Qi9RLENBQUMsQ0FBQ3JJLEtBQTNCO0VBQVosT0FBbEIsRUFBbUVxSSxDQUFuRSxDQUFKO0VBQUEsS0FBcEIsQ0FBaEI7RUFFQTs7Ozs7O0VBS0EsVUFBSzJaLFFBQUwsR0FBZ0J2akIsTUFBTSxDQUFDbWpCLE9BQXZCO0VBRUE7Ozs7OztFQUtBLFVBQUtLLGVBQUwsR0FBdUJ4akIsTUFBTSxDQUFDeWpCLGNBQVAsSUFBeUIsd0JBQWhEO0VBRUE7Ozs7OztFQUtBLFVBQUt4RixjQUFMLEdBQXNCamUsTUFBTSxDQUFDa2UsYUFBUCxJQUF3QixLQUE5QztFQUVBOzs7Ozs7RUFLQSxVQUFLd0YsU0FBTCxHQUFpQjFqQixNQUFNLENBQUN1aUIsUUFBUCxJQUFtQixZQUFZLEVBQWhEO0VBRUE7Ozs7Ozs7RUFLQSxVQUFLb0IsTUFBTCxHQUFjM2pCLE1BQU0sQ0FBQ3VCLEtBQVAsSUFBZ0IsU0FBOUI7RUEvRHdCO0VBZ0V6Qjs7OzsrQkFlU2pILE1BQU07RUFDZCwyRkFBZUksTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQkwsSUFBbEIsRUFBd0I7RUFDckN3QyxRQUFBQSxJQUFJLEVBQUUsS0FBS0EsSUFBTCxDQUFVOG1CLFdBQVYsRUFEK0I7RUFFckNqYSxRQUFBQSxPQUFPLEVBQUUsS0FBSzJaLFFBRnVCO0VBR3JDL2hCLFFBQUFBLEtBQUssRUFBRSxLQUFLb2lCO0VBSHlCLE9BQXhCLENBQWY7RUFLRDs7O2dDQUVVO0VBQUE7O0VBQ1RwVSxNQUFBQSxHQUFHLENBQUNzUixRQUFKLENBQ0V0UixHQUFHLENBQUMzUyxLQUFKLENBQVUsS0FBSzhZLFVBQWYsYUFBK0IsS0FBSzZOLFFBQXBDLGVBREYsRUFFRSxLQUFLQyxlQUZQLEVBR0UsT0FIRixFQUlFLFVBQUExakIsS0FBSyxFQUFJO0VBQ1AsUUFBQSxNQUFJLENBQUMrakIsYUFBTCxDQUFtQkMsUUFBUSxDQUFDaGtCLEtBQUssQ0FBQ3VTLE1BQU4sQ0FBYXVGLE9BQWIsQ0FBcUJ2UyxLQUF0QixDQUEzQixFQUF5RHZGLEtBQUssQ0FBQ3VTLE1BQU4sQ0FBYTBSLE9BQXRFOztFQUVBLFlBQU14akIsTUFBTSxHQUFHLE1BQUksQ0FBQ3lqQixZQUFMLEVBQWY7O0VBQ0EsWUFBSSxNQUFJLENBQUMvRixjQUFULEVBQXlCO0VBQ3ZCLFVBQUEsTUFBSSxDQUFDeFIsSUFBTCxDQUFVOFIsU0FBVixDQUFvQixNQUFJLENBQUN6aEIsSUFBekIsRUFBK0J5RCxNQUEvQjtFQUNEOztFQUVELFFBQUEsTUFBSSxDQUFDbWpCLFNBQUwsQ0FBZW5qQixNQUFmO0VBQ0QsT0FiSDtFQWNEOzs7b0NBRWM4RSxPQUFPeUUsVUFBVTtFQUM5QixVQUFJLEtBQUt5WixRQUFMLEtBQWtCLGNBQXRCLEVBQXNDO0VBQ3BDLGFBQUtELFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjamlCLEdBQWQsQ0FBa0IsVUFBQXVJLENBQUM7RUFBQSxpQkFBSWxQLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JpUCxDQUFsQixFQUFxQjtFQUFFRSxZQUFBQSxRQUFRLEVBQUU7RUFBWixXQUFyQixDQUFKO0VBQUEsU0FBbkIsQ0FBaEI7RUFDRDs7RUFFRCxXQUFLd1osUUFBTCxDQUFjamUsS0FBZCxJQUF1QjNLLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBSzJvQixRQUFMLENBQWNqZSxLQUFkLENBQWxCLEVBQXdDO0VBQUV5RSxRQUFBQSxRQUFRLEVBQVJBO0VBQUYsT0FBeEMsQ0FBdkI7RUFDQSxXQUFLdUQsUUFBTDtFQUNEOzs7a0NBRVk7RUFDWCxhQUFPLEtBQUsyVyxZQUFMLEVBQVA7RUFDRDtFQUVEOzs7Ozs7OEJBR1M7RUFDUCxVQUFNQyxRQUFRLEdBQUcxVSxHQUFHLENBQUM0SCxRQUFKLENBQWEsS0FBS3pCLFVBQWxCLEVBQThCLEtBQUs4TixlQUFuQyxDQUFqQjtFQUNBUyxNQUFBQSxRQUFRLENBQUN2bEIsT0FBVCxDQUFpQixVQUFBNlAsQ0FBQztFQUFBLGVBQUlBLENBQUMsQ0FBQ29ELFlBQUYsQ0FBZSxTQUFmLEVBQTBCLE9BQTFCLENBQUo7RUFBQSxPQUFsQjs7RUFDQSxXQUFLdVMsWUFBTDtFQUNEO0VBRUQ7Ozs7Ozs7O3FDQUtnQjtFQUNkLFVBQU10YyxPQUFPLEdBQUcsS0FBSzBiLFFBQUwsQ0FDYi9pQixNQURhLENBQ04sVUFBQXFKLENBQUM7RUFBQSxlQUFJQSxDQUFDLENBQUNFLFFBQU47RUFBQSxPQURLLEVBRWJ6SSxHQUZhLENBRVQsVUFBQXVJLENBQUM7RUFBQSxlQUFJQSxDQUFDLENBQUNySixNQUFGLEdBQ05xSixDQUFDLENBQUNySixNQURJLEdBRU53YSxNQUFNLENBQUNvSixLQUFQLENBQWF2YSxDQUFDLENBQUN1UixLQUFmLEVBQXNCdlIsQ0FBQyxDQUFDN00sS0FBeEIsQ0FGRTtFQUFBLE9BRlEsQ0FBaEI7O0VBTUEsV0FBSzBQLElBQUwsQ0FBVWhDLGlCQUFWLENBQTRCSyxHQUE1QixDQUFnQyxLQUFLaE8sSUFBckMsRUFBMkMsS0FBS3dtQixRQUFMLENBQWMvaUIsTUFBZCxDQUFxQixVQUFBcUosQ0FBQztFQUFBLGVBQUlBLENBQUMsQ0FBQ0UsUUFBTjtFQUFBLE9BQXRCLEVBQXNDekksR0FBdEMsQ0FBMEMsVUFBQXVJLENBQUM7RUFBQSxlQUFJQSxDQUFDLENBQUNySSxLQUFOO0VBQUEsT0FBM0MsQ0FBM0M7RUFDQSxhQUFPcUcsT0FBTyxDQUFDbkwsTUFBUixHQUFpQixDQUFqQixHQUNIc2UsTUFBTSxDQUFDcUosS0FBUCxPQUFBckosTUFBTSxxQkFBVW5ULE9BQVYsRUFESCxHQUVILEVBRko7RUFHRDs7OztFQXhFRDs7Ozs7MENBSzRCNUgsUUFBUTtFQUNsQyxnQ0FBbUJBLE1BQU0sQ0FBQ21qQixPQUExQjtFQUNEOzs7MEJBWGtCO0VBQ2pCLGFBQU8sZUFBUDtFQUNEOzs7O0lBckVpRGpPOztNQ2IvQm1QOzs7OztFQUNuQixrQ0FBMEI7RUFBQTs7RUFBQSxRQUFicmtCLE1BQWEsdUVBQUosRUFBSTs7RUFBQTs7RUFDeEIsOEZBQU1BLE1BQU47RUFFQTs7Ozs7O0VBS0EsVUFBS3NrQixNQUFMLEdBQWN0a0IsTUFBTSxDQUFDbWIsS0FBckI7RUFFQTs7Ozs7O0VBS0EsVUFBS3VJLFNBQUwsR0FBaUIxakIsTUFBTSxDQUFDdWlCLFFBQVAsSUFBbUIsWUFBWSxFQUFoRDtFQUVBOzs7Ozs7O0VBS0EsVUFBS3RFLGNBQUwsR0FBc0JqZSxNQUFNLENBQUNrZSxhQUFQLElBQXdCLEtBQTlDOztFQUVBLFFBQUlxRyxNQUFNLEdBQUcsTUFBSzlYLElBQUwsQ0FBVWpDLGFBQVYsQ0FBd0JTLFFBQXhCLFdBQW9DLE1BQUtuTyxJQUF6QyxVQUFiOztFQUNBLFFBQUksT0FBT3luQixNQUFQLEtBQWtCLFFBQXRCLEVBQWdDO0VBQzlCLFVBQUk7RUFDRkEsUUFBQUEsTUFBTSxHQUFHOWhCLE1BQU0sQ0FBQ3FoQixRQUFQLENBQWdCUyxNQUFoQixDQUFUO0VBQ0QsT0FGRCxDQUVFLE9BQU9oVyxDQUFQLEVBQVU7RUFDYjs7RUFDRCxRQUFJaVcsTUFBTSxHQUFHLE1BQUsvWCxJQUFMLENBQVVqQyxhQUFWLENBQXdCUyxRQUF4QixXQUFvQyxNQUFLbk8sSUFBekMsVUFBYjs7RUFDQSxRQUFJLE9BQU95bkIsTUFBUCxLQUFrQixRQUF0QixFQUFnQztFQUM5QixVQUFJO0VBQ0ZDLFFBQUFBLE1BQU0sR0FBRy9oQixNQUFNLENBQUNxaEIsUUFBUCxDQUFnQlUsTUFBaEIsQ0FBVDtFQUNELE9BRkQsQ0FFRSxPQUFPalcsQ0FBUCxFQUFVO0VBQ2I7RUFFRDs7Ozs7OztFQUtBLFVBQUtrVyxNQUFMLEdBQWM7RUFDWmxKLE1BQUFBLEdBQUcsRUFBRWdKLE1BQU0sSUFBSXZrQixNQUFNLENBQUMwa0IsVUFBakIsSUFBK0IsQ0FEeEI7RUFFWjFlLE1BQUFBLEdBQUcsRUFBRXdlLE1BQU0sSUFBSXhrQixNQUFNLENBQUMya0IsVUFBakIsSUFBK0I7RUFGeEIsS0FBZDtFQUtBOzs7Ozs7RUFLQSxVQUFLQyxNQUFMLEdBQWM1a0IsTUFBTSxDQUFDbUUsS0FBckI7RUFFQTs7Ozs7O0VBS0EsVUFBSzBnQixTQUFMLEdBQWlCN2tCLE1BQU0sQ0FBQzhrQixRQUFQLElBQW1CLElBQXBDO0VBRUE7Ozs7OztFQUtBLFVBQUtDLFNBQUwsR0FBaUIva0IsTUFBTSxDQUFDZ2xCLFFBQVAsSUFBbUIsSUFBcEM7RUFFQTs7Ozs7O0VBS0EsVUFBS2hQLGFBQUw7RUF6RXdCO0VBMEV6Qjs7OzsrQkFNUzFiLE1BQU07RUFDZCx5RkFBZUksTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQkwsSUFBbEIsRUFBd0I7RUFDckN3QyxRQUFBQSxJQUFJLEVBQUUsS0FBS0EsSUFEMEI7RUFFckNxSCxRQUFBQSxLQUFLLEVBQUUsS0FBS3lnQixNQUZ5QjtFQUdyQ0UsUUFBQUEsUUFBUSxFQUFFLEtBQUtELFNBSHNCO0VBSXJDRyxRQUFBQSxRQUFRLEVBQUUsS0FBS0QsU0FKc0I7RUFLckNFLFFBQUFBLFFBQVEsRUFBRSxLQUFLUixNQUFMLENBQVlsSixHQUxlO0VBTXJDMkosUUFBQUEsUUFBUSxFQUFFLEtBQUtULE1BQUwsQ0FBWXplO0VBTmUsT0FBeEIsQ0FBZjtFQVFEOzs7aUNBRVc7RUFBQTs7RUFDVnVKLE1BQUFBLEdBQUcsQ0FBQ3NSLFFBQUosQ0FBYSxLQUFLbkwsVUFBbEIsRUFBOEIsZ0JBQTlCLEVBQWdELFFBQWhELEVBQTBELFVBQUM1VixLQUFELEVBQVc7RUFDbkUsUUFBQSxNQUFJLENBQUNxbEIsWUFBTCxDQUFrQnJsQixLQUFLLENBQUN1UyxNQUFOLENBQWF1RixPQUFiLENBQXFCbmMsR0FBdkMsRUFBNENnSCxNQUFNLENBQUNxaEIsUUFBUCxDQUFnQmhrQixLQUFLLENBQUN1UyxNQUFOLENBQWF0VixLQUE3QixDQUE1QztFQUNELE9BRkQ7RUFHRDs7OzZCQUVPQSxPQUFPO0VBQ2IsV0FBS29vQixZQUFMLENBQWtCLEtBQWxCLEVBQXlCcG9CLEtBQXpCO0VBQ0Q7Ozs2QkFFT0EsT0FBTztFQUNiLFdBQUtvb0IsWUFBTCxDQUFrQixLQUFsQixFQUF5QnBvQixLQUF6QjtFQUNEOzs7a0NBRVk7RUFDWCxhQUFPLEtBQUtpbkIsWUFBTCxFQUFQO0VBQ0Q7RUFFRDs7Ozs7Ozs7bUNBS2N2b0IsS0FBS3NCLE9BQU87RUFDeEIsV0FBSzBuQixNQUFMLEdBQWMvcEIsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLOHBCLE1BQXZCLHNCQUFrQ2hwQixHQUFsQyxFQUF3Q3NCLEtBQXhDLEVBQWQ7RUFDQSxXQUFLc1EsUUFBTDs7RUFFQSxVQUFNOU0sTUFBTSxHQUFHLEtBQUt5akIsWUFBTCxFQUFmOztFQUNBLFVBQUksS0FBSy9GLGNBQVQsRUFBeUI7RUFDdkIsYUFBS3hSLElBQUwsQ0FBVThSLFNBQVYsQ0FBb0IsS0FBS3poQixJQUF6QixFQUErQnlELE1BQS9CO0VBQ0Q7O0VBQ0QsV0FBS2tNLElBQUwsQ0FBVWhDLGlCQUFWLENBQTRCSyxHQUE1QixXQUFtQyxLQUFLaE8sSUFBeEMsV0FBb0QsS0FBSzJuQixNQUFMLENBQVlsSixHQUFoRTtFQUNBLFdBQUs5TyxJQUFMLENBQVVoQyxpQkFBVixDQUE0QkssR0FBNUIsV0FBbUMsS0FBS2hPLElBQXhDLFdBQW9ELEtBQUsybkIsTUFBTCxDQUFZemUsR0FBaEU7O0VBRUEsV0FBSzBkLFNBQUwsQ0FBZW5qQixNQUFmO0VBQ0Q7RUFFRDs7Ozs7OztxQ0FJZ0I7RUFDZCxhQUFPd2EsTUFBTSxDQUFDcUssY0FBUCxDQUFzQixLQUFLZCxNQUEzQixFQUFtQyxLQUFLRyxNQUFMLENBQVlsSixHQUEvQyxFQUFvRCxLQUFLa0osTUFBTCxDQUFZemUsR0FBaEUsQ0FBUDtFQUNEOzs7MEJBMURrQjtFQUNqQixhQUFPLGFBQVA7RUFDRDs7OztJQS9FK0NrUDs7RUNBbEQ7Ozs7TUFHcUJtUTs7Ozs7RUFDbkIsc0NBQTBCO0VBQUE7O0VBQUEsUUFBYnJsQixNQUFhLHVFQUFKLEVBQUk7O0VBQUE7O0VBQ3hCLGtHQUFNQSxNQUFOO0VBRUE7Ozs7OztFQUtBLFVBQUtza0IsTUFBTCxHQUFjdGtCLE1BQU0sQ0FBQ21iLEtBQXJCO0VBRUE7Ozs7OztFQUtBLFVBQUt5SixNQUFMLEdBQWM1a0IsTUFBTSxDQUFDbUUsS0FBckI7RUFFQTs7Ozs7O0VBS0EsVUFBSzBnQixTQUFMLEdBQWlCN2tCLE1BQU0sQ0FBQzhrQixRQUFQLElBQW1CLElBQXBDO0VBRUE7Ozs7OztFQUtBLFVBQUtDLFNBQUwsR0FBaUIva0IsTUFBTSxDQUFDZ2xCLFFBQVAsSUFBbUIsSUFBcEM7RUFFQTs7Ozs7O0VBS0EsVUFBS3RCLFNBQUwsR0FBaUIxakIsTUFBTSxDQUFDdWlCLFFBQVAsSUFBbUIsWUFBWSxFQUFoRDtFQUVBOzs7Ozs7O0VBS0EsVUFBS3RFLGNBQUwsR0FBc0JqZSxNQUFNLENBQUNrZSxhQUFQLElBQXdCLEtBQTlDO0VBRUE7Ozs7OztFQUtBLFVBQUtvSCxZQUFMLEdBQW9CdGxCLE1BQU0sQ0FBQ3VsQixXQUEzQjtFQUVBOzs7OztFQUlBLFVBQUt2UCxhQUFMO0VBRUEsUUFBTXdQLEtBQUssR0FBRyxJQUFJQyxJQUFKLEVBQWQ7RUFDQSxRQUFNQyxXQUFXLGFBQU1GLEtBQUssQ0FBQ0csV0FBTixFQUFOLGNBQTZCLFVBQUdILEtBQUssQ0FBQ0ksUUFBTixLQUFtQixDQUF0QixFQUEwQkMsUUFBMUIsQ0FBbUMsQ0FBbkMsRUFBc0MsR0FBdEMsQ0FBN0IsY0FBMkUsVUFBR0wsS0FBSyxDQUFDTSxPQUFOLEVBQUgsRUFBcUJELFFBQXJCLENBQThCLENBQTlCLEVBQWlDLEdBQWpDLENBQTNFLENBQWpCOztFQUNBLFFBQU1FLE9BQU8sR0FBRyxNQUFLdFosSUFBTCxDQUFVakMsYUFBVixDQUF3QlMsUUFBeEIsV0FBb0MsTUFBS25PLElBQXpDLFVBQWhCOztFQUNBLFFBQU1rcEIsT0FBTyxHQUFHLE1BQUt2WixJQUFMLENBQVVqQyxhQUFWLENBQXdCUyxRQUF4QixXQUFvQyxNQUFLbk8sSUFBekMsVUFBaEI7RUFFQTs7Ozs7O0VBSUEsVUFBS21wQixLQUFMLEdBQWE7RUFDWDFLLE1BQUFBLEdBQUcsRUFBRXdLLE9BQU8sSUFBSS9sQixNQUFNLENBQUMwa0IsVUFBbEIsSUFBZ0NnQixXQUQxQjtFQUVYMWYsTUFBQUEsR0FBRyxFQUFFZ2dCLE9BQU8sSUFBSWhtQixNQUFNLENBQUMya0IsVUFBbEIsSUFBZ0NlO0VBRjFCLEtBQWI7RUFuRXdCO0VBdUV6Qjs7OzsrQkFNU3ByQixNQUFNO0VBQ2QsNkZBQWVJLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JMLElBQWxCLEVBQXdCO0VBQ3JDd0MsUUFBQUEsSUFBSSxFQUFFLEtBQUtBLElBRDBCO0VBRXJDcUgsUUFBQUEsS0FBSyxFQUFFLEtBQUt5Z0IsTUFGeUI7RUFHckNFLFFBQUFBLFFBQVEsRUFBRSxLQUFLRCxTQUhzQjtFQUlyQ0csUUFBQUEsUUFBUSxFQUFFLEtBQUtELFNBSnNCO0VBS3JDbUIsUUFBQUEsT0FBTyxFQUFFLEtBQUtELEtBQUwsQ0FBVzFLLEdBTGlCO0VBTXJDNEssUUFBQUEsT0FBTyxFQUFFLEtBQUtGLEtBQUwsQ0FBV2pnQjtFQU5pQixPQUF4QixDQUFmO0VBUUQ7OztpQ0FFVztFQUFBOztFQUNWdUosTUFBQUEsR0FBRyxDQUFDc1IsUUFBSixDQUFhLEtBQUtuTCxVQUFsQixFQUE4QixlQUE5QixFQUErQyxRQUEvQyxFQUF5RCxVQUFDNVYsS0FBRCxFQUFXO0VBQ2xFLFFBQUEsTUFBSSxDQUFDcWxCLFlBQUwsQ0FBa0JybEIsS0FBSyxDQUFDdVMsTUFBTixDQUFhdUYsT0FBYixDQUFxQm5jLEdBQXZDLEVBQTRDcUUsS0FBSyxDQUFDdVMsTUFBTixDQUFhdFYsS0FBekQ7RUFDRCxPQUZEO0VBR0Q7RUFFRDs7Ozs7Ozs2QkFJUXFwQixNQUFNO0VBQ1osV0FBS2pCLFlBQUwsQ0FBa0IsS0FBbEIsRUFBeUJpQixJQUF6QjtFQUNEO0VBRUQ7Ozs7Ozs7NkJBSVFBLE1BQU07RUFDWixXQUFLakIsWUFBTCxDQUFrQixLQUFsQixFQUF5QmlCLElBQXpCO0VBQ0Q7OztrQ0FFWTtFQUNYLGFBQU8sS0FBS3BDLFlBQUwsRUFBUDtFQUNEO0VBRUQ7Ozs7Ozs7OzttQ0FNY3ZvQixLQUFLc0IsT0FBTztFQUN4QixXQUFLa3BCLEtBQUwsR0FBYXZyQixNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUtzckIsS0FBdkIsc0JBQWlDeHFCLEdBQWpDLEVBQXVDc0IsS0FBdkMsRUFBYjtFQUNBLFdBQUtzUSxRQUFMOztFQUVBLFVBQU05TSxNQUFNLEdBQUcsS0FBS3lqQixZQUFMLEVBQWY7O0VBQ0EsVUFBSSxLQUFLL0YsY0FBVCxFQUF5QjtFQUN2QixhQUFLeFIsSUFBTCxDQUFVOFIsU0FBVixDQUFvQixLQUFLemhCLElBQXpCLEVBQStCeUQsTUFBL0I7RUFDRDs7RUFDRCxXQUFLa00sSUFBTCxDQUFVaEMsaUJBQVYsQ0FBNEJLLEdBQTVCLFdBQW1DLEtBQUtoTyxJQUF4QyxXQUFvRCxLQUFLbXBCLEtBQUwsQ0FBVzFLLEdBQS9EO0VBQ0EsV0FBSzlPLElBQUwsQ0FBVWhDLGlCQUFWLENBQTRCSyxHQUE1QixXQUFtQyxLQUFLaE8sSUFBeEMsV0FBb0QsS0FBS21wQixLQUFMLENBQVdqZ0IsR0FBL0Q7O0VBRUEsV0FBSzBkLFNBQUwsQ0FBZW5qQixNQUFmO0VBQ0Q7RUFFRDs7Ozs7OztxQ0FJZ0I7RUFDZCxVQUFJLEtBQUswbEIsS0FBTCxDQUFXMUssR0FBWCxLQUFtQixFQUFuQixJQUF5QixLQUFLMEssS0FBTCxDQUFXamdCLEdBQVgsS0FBbUIsRUFBaEQsRUFBb0Q7RUFDbEQsZUFBTyxFQUFQO0VBQ0Q7O0VBQ0QsYUFBTyxLQUFLc2YsWUFBTCxHQUNIdkssTUFBTSxDQUFDc0wsY0FBUCxDQUFzQixLQUFLL0IsTUFBM0IsRUFBbUMsS0FBSzJCLEtBQUwsQ0FBVzFLLEdBQTlDLEVBQW1ELEtBQUswSyxLQUFMLENBQVdqZ0IsR0FBOUQsQ0FERyxHQUVIK1UsTUFBTSxDQUFDcUssY0FBUCxDQUFzQixLQUFLZCxNQUEzQixFQUFtQyxLQUFLMkIsS0FBTCxDQUFXMUssR0FBOUMsRUFBbUQsS0FBSzBLLEtBQUwsQ0FBV2pnQixHQUE5RCxDQUZKO0VBR0Q7OzswQkF4RWtCO0VBQ2pCLGFBQU8saUJBQVA7RUFDRDs7OztJQTVFbURrUDs7RUNKdEQ7Ozs7O01BSXFCb1I7Ozs7O0VBQ25CLHFDQUEwQjtFQUFBOztFQUFBLFFBQWJ0bUIsTUFBYSx1RUFBSixFQUFJOztFQUFBOztFQUN4QixpR0FBTUEsTUFBTjtFQUVBOzs7Ozs7RUFLQSxVQUFLOGIsWUFBTCxHQUFvQjliLE1BQU0sQ0FBQ0ssV0FBUCxJQUFzQixJQUExQztFQUVBOzs7Ozs7RUFLQSxVQUFLd2hCLGVBQUwsR0FBdUI3aEIsTUFBTSxDQUFDOGhCLGNBQVAsSUFBeUIsS0FBaEQ7RUFFQTs7Ozs7O0VBS0EsVUFBS0Msb0JBQUwsR0FBNEIvaEIsTUFBTSxDQUFDZ2lCLG1CQUFQLElBQThCLElBQTFEO0VBRUE7Ozs7OztFQUtBLFVBQUt1RSxjQUFMLEdBQXNCdm1CLE1BQU0sQ0FBQ3dtQixhQUFQLElBQXdCLEVBQTlDO0VBRUE7Ozs7OztFQUtBLFVBQUt4USxhQUFMLEdBQXFCLGlCQUFyQjtFQUVBOzs7OztFQUlBLFVBQUtwVCxRQUFMLEdBQWdCb0gsV0FBVyxDQUFDYixlQUE1QjtFQUVBOzs7Ozs7RUFLQSxVQUFLc2QsVUFBTCxHQUFrQixJQUFsQjtFQWpEd0I7RUFrRHpCOzs7O2dDQU1VO0VBQUE7O0VBQ1QsV0FBS2hhLElBQUwsQ0FBVWlhLG9CQUFWOztFQUVBLFVBQUksS0FBS0QsVUFBVCxFQUFxQjtFQUNuQixhQUFLQSxVQUFMLENBQWdCN1AsTUFBaEI7RUFDRDs7RUFMUSw2QkFPUyxLQUFLOUQsTUFBTCxDQUFZNVUsR0FBWixFQVBUO0VBQUEsVUFPSDBKLE9BUEcsb0JBT0hBLE9BUEc7O0VBU1QsVUFBSSxDQUFDQSxPQUFMLEVBQWM7RUFDWjtFQUNEOztFQUVEQSxNQUFBQSxPQUFPLEdBQUdBLE9BQU8sQ0FBQ3ZHLEdBQVIsQ0FBWSxVQUFBb0ksQ0FBQyxFQUFJO0VBQ3pCLGVBQU8vTyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCOE8sQ0FBbEIsRUFBcUI7RUFDMUJtRCxVQUFBQSxJQUFJLEVBQUUsZUFEb0I7RUFFMUJ1VyxVQUFBQSxPQUFPLEVBQUUsTUFBSSxDQUFDb0QsY0FBTCxDQUFvQjljLENBQUMsQ0FBQ0MsT0FBdEIsS0FBa0M7RUFGakIsU0FBckIsQ0FBUDtFQUlELE9BTFMsQ0FBVjtFQU9BLFdBQUsrYyxVQUFMLEdBQWtCLEtBQUsxWixnQkFBTCxDQUFzQjJKLE1BQXRCLENBQ2hCLFdBRGdCLEVBRWhCaGMsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQjtFQUNoQndWLFFBQUFBLE1BQU0sRUFBRSxJQURRO0VBRWhCclQsUUFBQUEsSUFBSSxZQUFLLEtBQUtBLElBQVYsZUFGWTtFQUdoQjZTLFFBQUFBLFNBQVMsRUFBRSwwQkFISztFQUloQm1TLFFBQUFBLGNBQWMsRUFBRSxLQUFLRCxlQUpMO0VBS2hCeGhCLFFBQUFBLFdBQVcsRUFBRSxLQUFLeWIsWUFMRjtFQU1oQnNHLFFBQUFBLFNBQVMsRUFBRSxJQU5LO0VBT2hCeGEsUUFBQUEsT0FBTyxFQUFQQTtFQVBnQixPQUFsQixDQUZnQixDQUFsQjs7RUFhQSxXQUFLNmUsVUFBTCxDQUFnQmxRLEtBQWhCO0VBQ0Q7OzswQkF0Q2tCO0VBQ2pCLGFBQU8sZ0JBQVA7RUFDRDs7OztJQXZEa0RyQjs7RUNGckQsSUFBTXlSLGVBQWUsR0FBRyxRQUF4QjtFQUVBLElBQU1DLGNBQWMsR0FBRztFQUNyQjs7Ozs7RUFLQWxMLEVBQUFBLE1BQU0sRUFBRSxFQU5hOztFQVFyQjs7OztFQUlBcmIsRUFBQUEsV0FBVyxFQUFFLElBWlE7O0VBY3JCOzs7O0VBSUF5aEIsRUFBQUEsY0FBYyxFQUFFLEtBbEJLOztFQW9CckI7Ozs7RUFJQTNkLEVBQUFBLEtBQUssRUFBRSxVQXhCYzs7RUEwQnJCOzs7O0VBSUE1QyxFQUFBQSxLQUFLLEVBQUUsVUE5QmM7O0VBZ0NyQjs7OztFQUlBc2xCLEVBQUFBLGFBQWEsRUFBRSxFQXBDTTs7RUFzQ3JCOzs7O0VBSUFDLEVBQUFBLGFBQWEsRUFBRSxpQkExQ007O0VBNENyQjs7OztFQUlBQyxFQUFBQSxXQUFXLEVBQUUsa0JBaERROztFQWtEckI7Ozs7RUFJQUMsRUFBQUEsV0FBVyxFQUFFLDBCQXREUTs7RUF3RHJCOzs7O0VBSUFDLEVBQUFBLFNBQVMsRUFBRSw4QkE1RFU7O0VBOERyQjs7OztFQUlBQyxFQUFBQSxjQUFjLEVBQUUsa0NBbEVLOztFQW9FckI7Ozs7RUFJQTdKLEVBQUFBLGFBQWEsRUFBRTtFQXhFTSxDQUF2QjtFQTJFQTs7Ozs7TUFJcUI4Sjs7Ozs7RUFDbkIsa0NBQTBCO0VBQUE7O0VBQUEsUUFBYm5uQixNQUFhLHVFQUFKLEVBQUk7O0VBQUE7O0VBQ3hCLGdIQUFXNG1CLGNBQVgsTUFBOEI1bUIsTUFBOUI7RUFFQTs7Ozs7RUFJQSxVQUFLcEQsS0FBTCxHQUFhLE1BQUs2UCxJQUFMLENBQVVqQyxhQUFWLENBQXdCUyxRQUF4QixXQUFvQ2pCLFdBQVcsQ0FBQ2hCLEtBQWhELGNBQXlELE1BQUtsTSxJQUE5RCxNQUF5RSxFQUF0Rjs7RUFDQSxVQUFLMlAsSUFBTCxDQUFVakMsYUFBVixDQUF3QnVCLEVBQXhCLENBQTJCLFFBQTNCLFlBQXdDL0IsV0FBVyxDQUFDaEIsS0FBcEQsY0FBNkQsTUFBS2xNLElBQWxFLEdBQTBFLFVBQUE0ZixDQUFDLEVBQUk7RUFDN0UsWUFBSzlmLEtBQUwsR0FBYThmLENBQWI7O0VBQ0EsWUFBS3JQLFFBQUw7RUFDRCxLQUhEO0VBS0E7Ozs7OztFQUlBLFVBQUs5TSxNQUFMLEdBQWMsTUFBS2tNLElBQUwsQ0FBVWpDLGFBQVYsQ0FBd0JTLFFBQXhCLFdBQW9DakIsV0FBVyxDQUFDakIsTUFBaEQsY0FBMEQsTUFBS2pNLElBQS9ELE1BQTBFLEVBQXhGOztFQUNBLFFBQUksT0FBTyxNQUFLeUQsTUFBWixLQUF1QixRQUEzQixFQUFxQztFQUNuQyxVQUFJO0VBQ0YsY0FBS0EsTUFBTCxHQUFjMUYsSUFBSSxDQUFDc0IsS0FBTCxDQUFXLE1BQUtvRSxNQUFoQixDQUFkO0VBQ0QsT0FGRCxDQUVFLE9BQU9nTyxDQUFQLEVBQVU7RUFDYjs7RUFFRCxVQUFLOUIsSUFBTCxDQUFVakMsYUFBVixDQUF3QnVCLEVBQXhCLENBQTJCLFFBQTNCLFlBQXdDL0IsV0FBVyxDQUFDakIsTUFBcEQsY0FBOEQsTUFBS2pNLElBQW5FLEdBQTJFLFVBQUEyTSxDQUFDLEVBQUk7RUFBRSxZQUFLbEosTUFBTCxHQUFja0osQ0FBZDtFQUFrQixLQUFwRzs7RUF4QndCO0VBeUJ6Qjs7OzsrQkFVU25QLE1BQU07RUFDZCxVQUFJOHNCLFdBQVcsR0FBRyxFQUFsQjs7RUFDQSxVQUFJLEtBQUtDLFFBQVQsRUFBbUI7RUFDakJELFFBQUFBLFdBQVcsR0FBRyxLQUFLalMsT0FBTCxDQUFhNFIsV0FBM0I7RUFDRDs7RUFDRCxVQUFJenNCLElBQUksQ0FBQ2d0QixVQUFULEVBQXFCO0VBQ25CRixRQUFBQSxXQUFXLEdBQUcsS0FBS2pTLE9BQUwsQ0FBYTZSLFdBQTNCO0VBQ0Q7O0VBQ0QsVUFBSTFzQixJQUFJLENBQUNpdEIsUUFBVCxFQUFtQjtFQUNqQkgsUUFBQUEsV0FBVyxHQUFHLEtBQUtqUyxPQUFMLENBQWE4UixTQUEzQjtFQUNEOztFQUNELDJHQUNLM3NCLElBREw7RUFFRTZKLFFBQUFBLEtBQUssRUFBRSxLQUFLZ1IsT0FBTCxDQUFhaFIsS0FGdEI7RUFHRXFqQixRQUFBQSxVQUFVLEVBQUUsS0FBS0gsUUFIbkI7RUFJRXpxQixRQUFBQSxLQUFLLEVBQUUsS0FBS0EsS0FKZDtFQUtFdWYsUUFBQUEsU0FBUyxFQUFFLEtBQUtoSCxPQUFMLENBQWE1VCxLQUwxQjtFQU1Fd2xCLFFBQUFBLFdBQVcsRUFBRSxLQUFLNVIsT0FBTCxDQUFhNFIsV0FONUI7RUFPRUMsUUFBQUEsV0FBVyxFQUFFLEtBQUs3UixPQUFMLENBQWE2UixXQVA1QjtFQVFFQyxRQUFBQSxTQUFTLEVBQUUsS0FBSzlSLE9BQUwsQ0FBYThSLFNBUjFCO0VBU0VKLFFBQUFBLGFBQWEsRUFBRSxLQUFLMVIsT0FBTCxDQUFhMFIsYUFUOUI7RUFVRVksUUFBQUEsUUFBUSxFQUFFLEtBQUtKLFFBQUwsSUFBaUIvc0IsSUFBSSxDQUFDZ3RCLFVBQXRCLElBQW9DaHRCLElBQUksQ0FBQ2l0QixRQUF6QyxHQUFvRCxFQUFwRCxHQUF5RCxLQUFLM3FCLEtBVjFFO0VBV0U4cUIsUUFBQUEsY0FBYyxFQUFFTixXQVhsQjtFQVlFTixRQUFBQSxhQUFhLEVBQUUsS0FBSzNSLE9BQUwsQ0FBYTJSO0VBWjlCO0VBY0Q7OztnQ0FFVTtFQUFBOztFQUNULFVBQUksS0FBS3hKLGFBQVQsRUFBd0I7RUFDdEIsYUFBS0EsYUFBTCxDQUFtQjFHLE1BQW5CO0VBQ0Q7O0VBRUQsV0FBSytRLGlCQUFMLENBQXVCLEtBQUt4UyxPQUFMLENBQWFrSSxhQUFwQzs7RUFDQTlOLE1BQUFBLEdBQUcsQ0FBQ3hELEVBQUosQ0FBTyxLQUFLb0osT0FBTCxDQUFhK1IsY0FBcEIsRUFBb0MsT0FBcEMsRUFBNkM7RUFBQSxlQUFNLE1BQUksQ0FBQ1UsZ0JBQUwsRUFBTjtFQUFBLE9BQTdDO0VBQ0Q7RUFFRDs7Ozs7Ozs7d0NBS21CdkssZUFBZTtFQUFBOztFQUNoQyxVQUFJLEtBQUtDLGFBQVQsRUFBd0I7RUFDdEIsYUFBS0EsYUFBTCxDQUFtQjFHLE1BQW5CO0VBQ0Q7O0VBRUQsV0FBSzBHLGFBQUwsR0FBcUIsS0FBS3ZRLGdCQUFMLENBQXNCMkosTUFBdEIsQ0FBNkIsY0FBN0IsRUFBNkM7RUFDaEV2RyxRQUFBQSxNQUFNLEVBQUUsSUFEd0Q7RUFFaEVyVCxRQUFBQSxJQUFJLFlBQUssS0FBS0EsSUFBVixrQkFGNEQ7RUFHaEVzaEIsUUFBQUEsY0FBYyxFQUFFLElBSGdEO0VBSWhFek8sUUFBQUEsU0FBUyxFQUFFLHdDQUpxRDtFQUtoRTROLFFBQUFBLGFBQWEsRUFBRSxLQUFLM2dCLEtBTDRDO0VBTWhFeWhCLFFBQUFBLGNBQWMsRUFBRSxLQUFLOWQsTUFOMkM7RUFPaEUyYixRQUFBQSxPQUFPLEVBQUVtQixhQVB1RDtFQVFoRWhkLFFBQUFBLFdBQVcsRUFBRSxLQUFLeWIsWUFSOEM7RUFTaEUwQixRQUFBQSxRQUFRLEVBQUUsa0JBQUM1Z0IsS0FBRCxFQUFRMkQsTUFBUixFQUFtQjtFQUMzQixVQUFBLE1BQUksQ0FBQzNELEtBQUwsR0FBYUEsS0FBYjtFQUNBLFVBQUEsTUFBSSxDQUFDMkQsTUFBTCxHQUFjd2EsTUFBTSxDQUFDdUQsWUFBUCxDQUFvQi9kLE1BQXBCLENBQWQ7O0VBQ0EsVUFBQSxNQUFJLENBQUNzbkIsa0JBQUwsQ0FBd0JqckIsS0FBeEIsRUFBK0IsTUFBSSxDQUFDMkQsTUFBcEM7O0VBQ0EsVUFBQSxNQUFJLENBQUM4bUIsUUFBTCxHQUFnQixLQUFoQjtFQUNEO0VBZCtELE9BQTdDLENBQXJCO0VBZ0JEO0VBRUQ7Ozs7Ozs7eUNBSW9CO0VBQUE7O0VBQ2xCLFVBQUksQ0FBQ2xzQixTQUFTLENBQUMyc0IsV0FBZixFQUE0QjtFQUMxQixhQUFLemEsUUFBTCxDQUFjO0VBQUVrYSxVQUFBQSxRQUFRLEVBQUU7RUFBWixTQUFkO0VBQ0E7RUFDRDs7RUFFRCxVQUFJLENBQUMsS0FBS0YsUUFBVixFQUFvQjtFQUNsQixhQUFLaGEsUUFBTCxDQUFjO0VBQUVpYSxVQUFBQSxVQUFVLEVBQUU7RUFBZCxTQUFkO0VBQ0Fuc0IsUUFBQUEsU0FBUyxDQUFDMnNCLFdBQVYsQ0FBc0JDLGtCQUF0QixDQUNFLFVBQUFDLFFBQVEsRUFBSTtFQUNWLFVBQUEsTUFBSSxDQUFDSCxrQkFBTCxDQUF3QixFQUF4QixFQUE0QixNQUFJLENBQUM3RCxZQUFMLENBQWtCZ0UsUUFBbEIsQ0FBNUI7O0VBQ0EsVUFBQSxNQUFJLENBQUNYLFFBQUwsR0FBZ0IsSUFBaEI7O0VBQ0EsVUFBQSxNQUFJLENBQUNoYSxRQUFMLENBQWMsRUFBZDs7RUFDQSxVQUFBLE1BQUksQ0FBQ1osSUFBTCxDQUFVaEMsaUJBQVYscUJBQXNDVCxXQUFXLENBQUNoQixLQUFsRCxjQUEyRCxNQUFJLENBQUNsTSxJQUFoRTs7RUFDQSxVQUFBLE1BQUksQ0FBQzJQLElBQUwsQ0FBVWhDLGlCQUFWLHFCQUFzQ1QsV0FBVyxDQUFDakIsTUFBbEQsY0FBNEQsTUFBSSxDQUFDak0sSUFBakU7RUFDRCxTQVBILEVBUUU7RUFBQSxpQkFBTSxNQUFJLENBQUN1USxRQUFMLENBQWM7RUFBRWthLFlBQUFBLFFBQVEsRUFBRTtFQUFaLFdBQWQsQ0FBTjtFQUFBLFNBUkY7RUFVRDtFQUNGO0VBRUQ7Ozs7Ozs7O3lDQUtvQjNxQixPQUFPMkQsUUFBUTtFQUNqQyxXQUFLa00sSUFBTCxDQUFVaEMsaUJBQVYsQ0FBNEJLLEdBQTVCLFdBQW1DZCxXQUFXLENBQUNoQixLQUEvQyxjQUF3RCxLQUFLbE0sSUFBN0QsR0FBcUVGLEtBQXJFO0VBQ0EsV0FBSzZQLElBQUwsQ0FBVWhDLGlCQUFWLENBQTRCSyxHQUE1QixXQUFtQ2QsV0FBVyxDQUFDakIsTUFBL0MsY0FBeUQsS0FBS2pNLElBQTlELEdBQXNFeUQsTUFBdEU7RUFDQSxXQUFLa00sSUFBTCxDQUFVOFIsU0FBVixDQUFvQixLQUFLemhCLElBQXpCLEVBQStCeUQsTUFBL0I7O0VBRUEsVUFBSSxLQUFLNFUsT0FBTCxDQUFhMk0sY0FBakIsRUFBaUM7RUFDL0IsWUFBTWxhLE9BQU8sR0FBRyxLQUFLNkUsSUFBTCxDQUFVakMsYUFBVixDQUF3Qm9ULE1BQXhCLENBQStCNVQsV0FBVyxDQUFDakIsTUFBM0MsQ0FBaEI7RUFDQSxZQUFJOFUsV0FBVyxHQUFHalcsT0FBTyxDQUFDLENBQUQsQ0FBekI7O0VBQ0EsWUFBSUEsT0FBTyxDQUFDbkwsTUFBUixHQUFpQixDQUFyQixFQUF3QjtFQUN0Qm9oQixVQUFBQSxXQUFXLEdBQUc5QyxNQUFNLENBQUNNLEdBQVAsT0FBQU4sTUFBTSxxQkFBUW5ULE9BQVIsRUFBcEI7RUFDRDs7RUFDRCxZQUFNcE0sV0FBVyxHQUFHLEtBQUtpUixJQUFMLENBQVVqQyxhQUFWLENBQXdCUyxRQUF4QixDQUFpQ2pCLFdBQVcsQ0FBQ2hCLEtBQTdDLEtBQXVELEVBQTNFO0VBQ0EsWUFBTXhJLFdBQVcsR0FBRyxLQUFLaU0sSUFBTCxDQUFVakMsYUFBVixDQUF3Qm9ULE1BQXhCLENBQStCNVQsV0FBVyxDQUFDZCxZQUEzQyxFQUF5RCxDQUF6RCxDQUFwQjtFQUVBLGFBQUt1RCxJQUFMLENBQVV6QixjQUFWLENBQXlCLEtBQUttSyxPQUFMLENBQWE5VSxXQUF0QyxFQUFtRDtFQUNqREMsVUFBQUEsS0FBSyxFQUFFOUUsV0FEMEM7RUFFakQrRSxVQUFBQSxNQUFNLEVBQUUxRixJQUFJLENBQUNDLFNBQUwsQ0FBZStpQixXQUFmLENBRnlDO0VBR2pEcmQsVUFBQUEsV0FBVyxFQUFFM0YsSUFBSSxDQUFDQyxTQUFMLENBQWUwRixXQUFmO0VBSG9DLFNBQW5EO0VBS0Q7RUFDRjtFQUVEOzs7Ozs7Ozs7bUNBTWN3bkIsVUFBVTtFQUFBLDZCQUNvQkEsUUFBUSxDQUFDQyxNQUQ3QjtFQUFBLFVBQ2QvZ0IsUUFEYyxvQkFDZEEsUUFEYztFQUFBLFVBQ0pDLFNBREksb0JBQ0pBLFNBREk7RUFBQSxVQUNPK2dCLFFBRFAsb0JBQ09BLFFBRFA7RUFFdEIsVUFBTXhNLE1BQU0sR0FBR3lNLElBQUksQ0FBQ25pQixHQUFMLENBQVNraUIsUUFBVCxFQUFtQixLQUFLL1MsT0FBTCxDQUFhdUcsTUFBYixHQUFzQmlMLGVBQXpDLENBQWY7RUFDQSxhQUFPNUwsTUFBTSxDQUFDaU4sUUFBUCxDQUFnQjlnQixRQUFoQixFQUEwQkMsU0FBMUIsRUFBcUN1VSxNQUFyQyxDQUFQO0VBQ0Q7Ozs0Q0FsSTZCO0VBQzVCLGFBQU8sc0JBQVA7RUFDRDs7OzBCQU5rQjtFQUNqQixhQUFPLG1CQUFQO0VBQ0Q7Ozs7SUE5QitDeEc7O0VDakZsRDs7Ozs7OztFQU1BLElBQU1rVCxVQUFVLEdBQUc7RUFDakJDLEVBQUFBLFNBQVMsRUFBRSxXQURNO0VBRWpCQyxFQUFBQSxXQUFXLEVBQUU7RUFGSSxDQUFuQjs7TUFLcUJDOzs7OztFQUNuQixtQ0FBMEI7RUFBQTs7RUFBQSxRQUFidm9CLE1BQWEsdUVBQUosRUFBSTs7RUFBQTs7RUFDeEIsK0ZBQU1BLE1BQU47RUFFQTs7Ozs7RUFJQSxVQUFLNEMsUUFBTCxHQUFnQm9ILFdBQVcsQ0FBQ2xCLGFBQTVCO0VBRUE7Ozs7O0VBSUEsVUFBS2lULE9BQUwsR0FBZS9iLE1BQU0sQ0FBQ3dvQixNQUFQLElBQWlCLGdDQUFoQztFQUVBOzs7OztFQUlBLFVBQUtDLGlCQUFMLEdBQXlCem9CLE1BQU0sQ0FBQzBvQixnQkFBUCxJQUEyQiwwQkFBcEQ7RUFFQTs7Ozs7RUFJQSxVQUFLQyxtQkFBTCxHQUEyQjNvQixNQUFNLENBQUM0b0Isa0JBQVAsSUFBNkIsNEJBQXhEO0VBRUE7Ozs7O0VBSUEsVUFBS0MsZ0JBQUwsR0FBd0I3b0IsTUFBTSxDQUFDOG9CLGVBQVAsSUFBMEIsY0FBbEQ7RUEvQndCO0VBZ0N6Qjs7Ozs7RUFlRDs7O29DQUdlO0VBQ2IsVUFBSSxDQUFDLEtBQUtDLFFBQUwsQ0FBYyxRQUFkLENBQUwsRUFBOEI7RUFDNUIsZUFBTyxLQUFQO0VBQ0Q7O0VBRUQsYUFBTyxJQUFQO0VBQ0Q7RUFFRDs7Ozs7OztnQ0FJVztFQUFBOztFQUNUO0VBQ0EsVUFBSSxLQUFLOWQsUUFBTCxDQUFjLG1CQUFkLE1BQXVDLElBQTNDLEVBQWlEO0VBQy9DLGVBQU8sSUFBUDtFQUNELE9BSlE7OztFQU9Uc0UsTUFBQUEsR0FBRyxDQUFDeEQsRUFBSixDQUFPLEtBQUtnUSxPQUFaLEVBQXFCLFFBQXJCLEVBQStCLFVBQUN4TixDQUFELEVBQU87RUFDcEMsWUFBSWlhLE1BQU0sR0FBR2phLENBQUMsQ0FBQzhELE1BQWY7RUFDQSxZQUFJMlcsWUFBWSxHQUFHelosR0FBRyxDQUFDM1MsS0FBSixDQUFVNHJCLE1BQVYsRUFBa0IsZUFBbEIsRUFBbUN6RSxPQUF0RDs7RUFFQSxRQUFBLE1BQUksQ0FBQ2tGLGFBQUwsQ0FBbUJELFlBQW5COztFQUNBLFFBQUEsTUFBSSxDQUFDaEksV0FBTCxDQUFpQjtFQUNmLCtCQUFxQjtFQUROLFNBQWpCO0VBR0QsT0FSRCxFQVBTO0VBa0JUOztFQUNBelIsTUFBQUEsR0FBRyxDQUFDeEQsRUFBSixDQUFPLEtBQUswYyxpQkFBWixFQUErQixPQUEvQixFQUF3QyxZQUFNO0VBQUVsWixRQUFBQSxHQUFHLENBQUNrTyxPQUFKLENBQVksTUFBSSxDQUFDMUIsT0FBakIsRUFBMEIsUUFBMUI7RUFBc0MsT0FBdEY7RUFDQXhNLE1BQUFBLEdBQUcsQ0FBQ3hELEVBQUosQ0FBTyxLQUFLNGMsbUJBQVosRUFBaUMsT0FBakMsRUFBMEMsWUFBTTtFQUFFcFosUUFBQUEsR0FBRyxDQUFDa08sT0FBSixDQUFZLE1BQUksQ0FBQzFCLE9BQWpCLEVBQTBCLFFBQTFCO0VBQXNDLE9BQXhGO0VBQ0Q7RUFFRDs7Ozs7OztvQ0FJeUI7RUFBQSxVQUFaeEcsS0FBWSx1RUFBSixFQUFJO0VBQ3ZCLFVBQU1pQixRQUFRLEdBQUc5YixNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUtzUSxRQUFMLEVBQWxCLEVBQW1Dc0ssS0FBbkMsQ0FBakI7RUFDQSxXQUFLbEksUUFBTCxDQUFjbUosUUFBZDtFQUNEOzs7K0JBRVNsYyxNQUFNO0VBQ2QsaUdBQXNCSSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCTCxJQUFsQixFQUF3QjtFQUM1QzR1QixRQUFBQSxZQUFZLEVBQUUsS0FBS0EsWUFBTCxDQUFrQjV1QixJQUFsQixDQUQ4QjtFQUU1Q3d1QixRQUFBQSxlQUFlLEVBQUUsS0FBS0Q7RUFGc0IsT0FBeEIsQ0FBdEI7RUFJRDs7O21DQUVhdnVCLE1BQU07RUFDbEIsVUFBSSxDQUFDQSxJQUFELElBQVNJLE1BQU0sQ0FBQytELElBQVAsQ0FBWW5FLElBQVosRUFBa0JtQyxNQUFsQixLQUE2QixDQUExQyxFQUE2QztFQUMzQyxlQUFPbkMsSUFBUDtFQUNEOztFQUNELGFBQU9PLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0VBQ3BCd0wsUUFBQUEsZ0JBQWdCLEVBQUVoTSxJQUFJLENBQUMyTixXQUFMLENBQWlCM0IsZ0JBRGY7RUFFcEI2aUIsUUFBQUEsUUFBUSxFQUFFLFdBRlU7RUFHcEIvbEIsUUFBQUEsUUFBUSxFQUFFOUksSUFBSSxDQUFDMk4sV0FBTCxDQUFpQjNOLElBQWpCLENBQXNCcUcsRUFIWjtFQUlwQnlvQixRQUFBQSxRQUFRLEVBQUUsS0FBS1AsZ0JBQUwsQ0FBc0J4VixXQUF0QixHQUFvQy9WLE9BQXBDLENBQTRDLEdBQTVDLEVBQWlELEdBQWpEO0VBSlUsT0FBZixDQUFQO0VBTUQ7RUFFRDs7Ozs7OztvQ0FJZStyQixRQUFRO0VBQ3JCLFVBQU1qVyxTQUFTLEdBQUdpVyxNQUFNLEtBQUssSUFBWCxHQUFrQmpCLFVBQVUsQ0FBQ0MsU0FBN0IsR0FBeUNELFVBQVUsQ0FBQ0UsV0FBdEU7RUFDQSxVQUFNeG9CLEtBQUssR0FBRyxJQUFJcVQsY0FBSixDQUFtQkMsU0FBbkIsRUFDWFEsVUFEVyxDQUNBO0VBQ1Ysd0JBQWdCO0VBRE4sT0FEQSxDQUFkO0VBS0EsV0FBSzlHLGlCQUFMLENBQXVCc0wsTUFBdkIsQ0FBOEJ0WSxLQUE5QjtFQUNEOzs7O0VBdkZEOzs7OzswQ0FLNEJFLFFBQVE7RUFDbEMsYUFBTyxzQkFBUDtFQUNEOzs7MEJBWGtCO0VBQ2pCLGFBQU8sY0FBUDtFQUNEOzs7O0lBckNnRGtWOztNQ2Q5Qm9VOzs7OztFQUNuQixrQ0FBd0I7RUFBQTs7RUFBQSxRQUFYL3VCLElBQVcsdUVBQUosRUFBSTs7RUFBQTs7RUFDdEIsOEZBQU1BLElBQU47RUFFQTs7Ozs7O0VBS0EsVUFBS2d2QixpQkFBTCxHQUF5Qmh2QixJQUFJLENBQUMrTCxnQkFBOUI7RUFFQTs7Ozs7OztFQU1BLFVBQUtrakIsWUFBTCxHQUFvQmp2QixJQUFJLENBQUNrdkIsV0FBTCxJQUFvQixLQUF4QztFQWhCc0I7RUFpQnZCOzs7OztFQW1CRDs7OzttQ0FJY3JtQixVQUFVO0VBQ3RCLGFBQU92SSxJQUFJLENBQUNDLFNBQUwsQ0FBZTtFQUNwQndMLFFBQUFBLGdCQUFnQixFQUFFLEtBQUtpakIsaUJBREg7RUFFcEJKLFFBQUFBLFFBQVEsRUFBRSxLQUFLSyxZQUFMLEdBQW9CLFdBQXBCLEdBQWtDLFVBRnhCO0VBR3BCcG1CLFFBQUFBLFFBQVEsRUFBRUE7RUFIVSxPQUFmLENBQVA7RUFLRDtFQUVEOzs7Ozs7Ozs7K0JBTVU5SSxNQUFNO0VBQ2QsZ0dBQXNCSSxNQUFNLENBQUNDLE1BQVAsQ0FBY0wsSUFBZCxFQUFvQjtFQUN4QzR1QixRQUFBQSxZQUFZLEVBQUUsS0FBS0EsWUFBTCxDQUFrQjV1QixJQUFJLENBQUNxRyxFQUF2QjtFQUQwQixPQUFwQixDQUF0QjtFQUdEOzs7O0VBbkNEOzs7OzswQ0FLNEJYLFFBQVE7RUFDbEMsYUFBTyxxQkFBUDtFQUNEOzs7aURBRWtDO0VBQ2pDLGFBQU8sSUFBUDtFQUNEOzs7MEJBZmtCO0VBQ2pCLGFBQU8sc0JBQVA7RUFDRDs7OztJQXRCK0NrVjs7TUNBN0J3VTs7Ozs7RUFDbkIsMENBQXdCO0VBQUEsUUFBWG52QixJQUFXLHVFQUFKLEVBQUk7O0VBQUE7O0VBQUEscUdBQ2hCQSxJQURnQjtFQUV2Qjs7Ozs7RUFNRDs7Ozs7MENBSzRCeUYsUUFBUTtFQUNsQyxhQUFPLDZCQUFQO0VBQ0Q7OztpREFFa0M7RUFDakMsYUFBTyxJQUFQO0VBQ0Q7OzswQkFma0I7RUFDakIsYUFBTyw4QkFBUDtFQUNEOzs7O0lBUHVEc3BCOztNQ0FyQ0s7Ozs7O0VBQ25CLHVDQUF3QjtFQUFBLFFBQVhwdkIsSUFBVyx1RUFBSixFQUFJOztFQUFBOztFQUFBLGtHQUNoQkEsSUFEZ0I7RUFFdkI7Ozs7O0VBTUQ7Ozs7OzBDQUs0QnlGLFFBQVE7RUFDbEMsYUFBTywwQkFBUDtFQUNEOzs7aURBRWtDO0VBQ2pDLGFBQU8sSUFBUDtFQUNEOzs7MEJBZmtCO0VBQ2pCLGFBQU8sMkJBQVA7RUFDRDs7OztJQVBvRHNwQjs7TUNBbENNOzs7OztFQUNuQix3Q0FBd0I7RUFBQSxRQUFYcnZCLElBQVcsdUVBQUosRUFBSTs7RUFBQTs7RUFBQSxtR0FDaEJBLElBRGdCO0VBRXZCOzs7OztFQU1EOzs7OzswQ0FLNEJ5RixRQUFRO0VBQ2xDLGFBQU8sMkJBQVA7RUFDRDs7O2lEQUVrQztFQUNqQyxhQUFPLElBQVA7RUFDRDs7OzBCQWZrQjtFQUNqQixhQUFPLDRCQUFQO0VBQ0Q7Ozs7SUFQcURzcEI7O0VDSnhEOztFQUVBOzs7Ozs7O01BT3FCTzs7O0VBQ25CLHlCQUEwQjtFQUFBLFFBQWI3cEIsTUFBYSx1RUFBSixFQUFJOztFQUFBOztFQUN4Qjs7OztFQUlBLFNBQUtsQyxPQUFMLEdBQWVrQyxNQUFNLENBQUNqQyxNQUF0QjtFQUVBOzs7OztFQUlBLFNBQUsrckIsT0FBTCxHQUFlOXBCLE1BQU0sQ0FBQytwQixNQUFQLElBQWlCLEdBQWhDO0VBRUE7Ozs7O0VBSUEsU0FBS0MsTUFBTCxHQUFjaHFCLE1BQU0sQ0FBQ2lxQixLQUFQLElBQWdCLEdBQTlCO0VBRUE7Ozs7O0VBSUEsU0FBS0MsS0FBTCxHQUFhbHFCLE1BQU0sQ0FBQ21xQixJQUFQLElBQWUsQ0FBNUI7RUFFQTs7Ozs7O0VBS0EsU0FBS0MsZ0JBQUwsR0FBd0JwcUIsTUFBTSxDQUFDcXFCLGVBQVAsSUFBMEI7RUFBRTdPLE1BQUFBLEdBQUcsRUFBRSxPQUFQO0VBQWdCQyxNQUFBQSxHQUFHLEVBQUUsQ0FBQztFQUF0QixLQUFsRDtFQUVBOzs7OztFQUlBLFNBQUs2TyxhQUFMLEdBQXFCdHFCLE1BQU0sQ0FBQ3VxQixZQUFQLElBQXVCLEtBQTVDO0VBRUE7Ozs7O0VBSUEsU0FBS0MsSUFBTCxHQUFZLElBQVo7RUFFQTs7Ozs7RUFJQSxTQUFLQyxTQUFMLEdBQWlCLEtBQWpCO0VBRUE7Ozs7O0VBSUEsU0FBS0MsV0FBTCxHQUFtQjFxQixNQUFNLENBQUMycUIsVUFBUCxJQUFxQixJQUF4QztFQUVBOzs7OztFQUlBLFNBQUtDLFNBQUwsR0FBaUI1cUIsTUFBTSxDQUFDNnFCLFFBQVAsSUFBbUIsWUFBWSxFQUFoRDtFQUVBOzs7Ozs7RUFJQSxTQUFLQyxVQUFMLEdBQWtCLE9BQU85cUIsTUFBTSxDQUFDK3FCLEdBQWQsS0FBc0IsVUFBdEIsR0FBbUMvcUIsTUFBTSxDQUFDK3FCLEdBQTFDLEdBQWdEcndCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFja3ZCLFdBQVcsQ0FBQ21CLGtCQUExQixFQUE4Q2hyQixNQUFNLENBQUMrcUIsR0FBckQsQ0FBbEU7RUFFQTs7Ozs7RUFJQSxTQUFLRSxhQUFMLEdBQXFCanJCLE1BQU0sQ0FBQ2tyQixZQUFQLElBQXVCLEtBQTVDO0VBQ0Q7RUFFRDs7Ozs7Ozs7OytCQWlCVXBmLElBQUk7RUFDWixVQUFJLE9BQU9BLEVBQVAsS0FBYyxVQUFsQixFQUE4QjtFQUM1QjtFQUNEOztFQUVELFdBQUs4ZSxTQUFMLEdBQWlCOWUsRUFBakI7O0VBQ0EsVUFBSSxLQUFLcWYsUUFBTCxFQUFKLEVBQXFCO0VBQ25CLGFBQUtQLFNBQUw7RUFDRDtFQUNGOzs7aUNBRVc7RUFDVixhQUFPLEtBQUtILFNBQVo7RUFDRDs7OytCQUVTO0VBQ1IsWUFBTSxJQUFJbnJCLEtBQUosQ0FBVSw4QkFBVixDQUFOO0VBQ0Q7OzttQ0FFYTtFQUNaLFlBQU0sSUFBSUEsS0FBSixDQUFVLGtDQUFWLENBQU47RUFDRDs7OzJCQUVLOHJCLFNBQVM7RUFDYjtFQUNBLFlBQU0sSUFBSTlyQixLQUFKLENBQVUsNEJBQVYsQ0FBTjtFQUNEO0VBRUQ7Ozs7Ozs7dUNBSWtCK3JCLFNBQVM7RUFDekIsVUFBTUMsY0FBYyxHQUFHLEVBQXZCO0VBQ0FELE1BQUFBLE9BQU8sQ0FBQzNzQixPQUFSLENBQWdCLFVBQUE2c0IsQ0FBQyxFQUFJO0VBQ25CRCxRQUFBQSxjQUFjLFdBQUlDLENBQUMsQ0FBQ3JrQixRQUFOLFNBQWlCcWtCLENBQUMsQ0FBQ3BrQixTQUFuQixFQUFkLEdBQ0lta0IsY0FBYyxXQUFJQyxDQUFDLENBQUNya0IsUUFBTixTQUFpQnFrQixDQUFDLENBQUNwa0IsU0FBbkIsRUFBZCxDQUE4Q2xLLElBQTlDLENBQW1Ec3VCLENBQW5ELENBREosR0FFSUQsY0FBYyxXQUFJQyxDQUFDLENBQUNya0IsUUFBTixTQUFpQnFrQixDQUFDLENBQUNwa0IsU0FBbkIsRUFBZCxHQUFnRCxDQUFDb2tCLENBQUQsQ0FGcEQ7RUFHRCxPQUpEO0VBTUEsVUFBTUMsZ0JBQWdCLEdBQUcsRUFBekI7O0VBQ0EseUNBQXdCOXdCLE1BQU0sQ0FBQzBDLE9BQVAsQ0FBZWt1QixjQUFmLENBQXhCLHFDQUF3RDtFQUFBO0VBQUEsWUFBNUNELFFBQTRDOztFQUN0RCxZQUFJQSxRQUFPLENBQUM1dUIsTUFBUixHQUFpQixDQUFyQixFQUF3QjtFQUN0QixjQUFNZ3ZCLGVBQWUsR0FBRztFQUN0QnJrQixZQUFBQSxJQUFJLEVBQUVpa0IsUUFBTyxDQUFDaHFCLEdBQVIsQ0FBWSxVQUFBa3FCLENBQUM7RUFBQSxxQkFBSUEsQ0FBQyxDQUFDbmtCLElBQU47RUFBQSxhQUFiLENBRGdCO0VBRXRCN0YsWUFBQUEsS0FBSyxFQUFFOHBCLFFBQU8sQ0FBQzV1QixNQUZPO0VBR3RCeUssWUFBQUEsUUFBUSxFQUFFbWtCLFFBQU8sQ0FBQyxDQUFELENBQVAsQ0FBV25rQixRQUhDO0VBSXRCQyxZQUFBQSxTQUFTLEVBQUVra0IsUUFBTyxDQUFDLENBQUQsQ0FBUCxDQUFXbGtCO0VBSkEsV0FBeEI7RUFNQXFrQixVQUFBQSxnQkFBZ0IsQ0FBQ3Z1QixJQUFqQixDQUFzQnd1QixlQUF0QjtFQUNELFNBUkQsTUFRTztFQUNMRCxVQUFBQSxnQkFBZ0IsQ0FBQ3Z1QixJQUFqQixDQUFzQm91QixRQUFPLENBQUMsQ0FBRCxDQUE3QjtFQUNEO0VBQ0Y7O0VBRUQsYUFBT0csZ0JBQVA7RUFDRDs7OzBCQXBFZ0M7RUFDL0IsYUFBTztFQUNMRSxRQUFBQSxJQUFJLEVBQUU7RUFDSkMsVUFBQUEsTUFBTSxFQUFFLElBREo7RUFDVTtFQUNkQyxVQUFBQSxHQUFHLEVBQUUsSUFGRDtFQUdKdnhCLFVBQUFBLEdBQUcsRUFBRSxJQUhEO0VBSUp3eEIsVUFBQUEsVUFBVSxFQUFFLElBSlI7O0VBQUEsU0FERDtFQU9MQyxRQUFBQSxTQUFTLEVBQUU7RUFQTixPQUFQO0VBU0Q7Ozs7OztFQy9GSDs7RUFFQTs7Ozs7O01BS3FCQzs7Ozs7RUFDbkIsNkJBQWF4eEIsSUFBYixFQUFtQjtFQUFBOztFQUFBOztFQUNqQiwyRkFBTUEsSUFBTjtFQUVBLFVBQUt5eEIsU0FBTCxHQUFpQnp4QixJQUFJLENBQUMweEIsUUFBdEI7RUFDQSxVQUFLQyxVQUFMLEdBQWtCM3hCLElBQUksQ0FBQzR4QixTQUF2Qjs7RUFFQSxRQUFJLENBQUMsTUFBS0MseUJBQUwsRUFBRCxJQUFxQyxDQUFDLE1BQUt0dUIsT0FBL0MsRUFBd0Q7RUFDdEQsWUFBTSxJQUFJd0IsS0FBSixDQUFVLG1FQUFWLENBQU47RUFDRDs7RUFSZ0I7RUFTbEI7Ozs7NkJBRU8rc0IsUUFBUTtFQUFBOztFQUNkLFVBQUk5YyxHQUFHLENBQUMzUyxLQUFKLENBQVUsY0FBVixDQUFKLEVBQStCO0VBQzdCLFlBQUksT0FBT3l2QixNQUFQLEtBQWtCLFVBQXRCLEVBQWtDO0VBQ2hDQSxVQUFBQSxNQUFNO0VBQ1A7O0VBQ0Q7RUFDRDs7RUFFRCxVQUFJQyxNQUFNLEdBQUcvYyxHQUFHLENBQUNvRyxRQUFKLENBQWEsUUFBYixFQUF1QjtFQUNsQ2hWLFFBQUFBLEVBQUUsRUFBRSxhQUQ4QjtFQUVsQzRyQixRQUFBQSxNQUFNLEVBQUUsa0JBQU07RUFDWixVQUFBLE1BQUksQ0FBQzlCLFNBQUwsR0FBaUIsSUFBakI7O0VBQ0EsVUFBQSxNQUFJLENBQUNHLFNBQUw7RUFDRCxTQUxpQztFQU1sQzRCLFFBQUFBLEtBQUssRUFBRSxJQU4yQjtFQU9sQ0MsUUFBQUEsR0FBRyw4Q0FBdUMsS0FBS0MsbUJBQUwsRUFBdkM7RUFQK0IsT0FBdkIsQ0FBYjtFQVVBbmQsTUFBQUEsR0FBRyxDQUFDMUUsTUFBSixDQUFXLE1BQVgsRUFBbUJ5aEIsTUFBbkI7RUFDRDs7O3FDQUVlbEIsU0FBUztFQUN2QixVQUFJdUIsc0JBQXNCLEdBQUdDLHFCQUFxQixDQUFDL3BCLElBQXRCLENBQzNCdW9CLE9BQU8sQ0FBQ3RrQixVQURtQixFQUUzQixLQUFLZ2tCLFVBRnNCLENBQTdCO0VBS0EsVUFBSStCLGNBQWMsR0FBR0QscUJBQXFCLENBQUNFLFNBQXRCLENBQWdDSCxzQkFBaEMsQ0FBckI7RUFDQSxtRkFDdURFLGNBRHZELG1CQUM4RSxLQUFLN0MsTUFEbkYsY0FDNkYsS0FBS0YsT0FEbEcsY0FDNkcsS0FBSzRDLG1CQUFMLEVBRDdHO0VBRUQ7Ozs0Q0FFc0I7RUFDckIsVUFBSSxLQUFLTix5QkFBTCxFQUFKLEVBQXNDO0VBQ3BDLGdDQUFpQixLQUFLSixTQUF0QjtFQUNELE9BRkQsTUFFTztFQUNMLDZCQUFjLEtBQUtsdUIsT0FBbkI7RUFDRDtFQUNGOzs7a0RBRTRCO0VBQzNCO0VBQ0EsYUFBTyxLQUFLa3VCLFNBQUwsS0FBbUIsS0FBS0UsVUFBTCxJQUFtQixDQUFDLEtBQUthLFNBQTVDLENBQVA7RUFDRDs7OzJCQUVLcGMsSUFBSXlhLFNBQVM7RUFBQTs7RUFDakIsVUFBSSxDQUFDLENBQUNBLE9BQUQsSUFBWUEsT0FBTyxDQUFDdGtCLFVBQVIsQ0FBbUJySyxNQUFuQixJQUE2QixDQUExQyxLQUFnRCxDQUFDLEtBQUs2dEIsYUFBMUQsRUFBeUU7RUFDdkUsYUFBS0UsSUFBTCxHQUFZLElBQVo7RUFDQSxlQUFPLElBQVA7RUFDRCxPQUpnQjtFQU1qQjs7O0VBQ0FqUixNQUFBQSxVQUFVLENBQUMsWUFBTTtFQUNmLFlBQUk1SixTQUFTLEdBQUdKLEdBQUcsQ0FBQzNTLEtBQUosQ0FBVStULEVBQVYsQ0FBaEI7RUFDQXBCLFFBQUFBLEdBQUcsQ0FBQ3lkLEdBQUosQ0FBUXJkLFNBQVIsRUFBbUI7RUFDakJzYSxVQUFBQSxLQUFLLEVBQUUsTUFBSSxDQUFDRCxNQURLO0VBRWpCRCxVQUFBQSxNQUFNLEVBQUUsTUFBSSxDQUFDRDtFQUZJLFNBQW5CO0VBS0EsUUFBQSxNQUFJLENBQUN6b0IsR0FBTCxHQUFXLElBQUk0ckIsTUFBTSxDQUFDQyxJQUFQLENBQVlDLEdBQWhCLENBQW9CeGQsU0FBcEIsRUFBK0I7RUFDeEN3YSxVQUFBQSxJQUFJLEVBQUUsTUFBSSxDQUFDRDtFQUQ2QixTQUEvQixDQUFYLENBUGU7O0VBWWYsWUFBSWtELE1BQU0sR0FBRyxJQUFJSCxNQUFNLENBQUNDLElBQVAsQ0FBWUcsWUFBaEIsRUFBYjs7RUFFQSxZQUFJakMsT0FBTyxJQUFJQSxPQUFPLENBQUN0a0IsVUFBUixDQUFtQnJLLE1BQWxDLEVBQTBDO0VBQUE7RUFDeEMsZ0JBQU0rdUIsZ0JBQWdCLEdBQUcsTUFBSSxDQUFDUCxhQUFMLEdBQ3JCLE1BQUksQ0FBQ3FDLGdCQUFMLENBQXNCbEMsT0FBTyxDQUFDdGtCLFVBQTlCLENBRHFCLEdBRXJCc2tCLE9BQU8sQ0FBQ3RrQixVQUZaO0VBR0EsZ0JBQUk2bEIsc0JBQXNCLEdBQUdDLHFCQUFxQixDQUFDL3BCLElBQXRCLENBQzNCMm9CLGdCQUQyQixFQUUzQixNQUFJLENBQUNWLFVBRnNCLEVBRzNCLE1BQUksQ0FBQ3pwQixHQUhzQixDQUE3Qjs7RUFKd0MsdUNBUy9CN0UsQ0FUK0I7RUFVdEMsa0JBQUkrd0IsTUFBTSxHQUFHLElBQUlOLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTSxNQUFoQixDQUF1QmIsc0JBQXNCLENBQUNud0IsQ0FBRCxDQUE3QyxDQUFiOztFQUNBLGtCQUFJLE1BQUksQ0FBQ2t1QixXQUFULEVBQXNCO0VBQ3BCNkMsZ0JBQUFBLE1BQU0sQ0FBQ0UsV0FBUCxDQUFtQixPQUFuQixFQUE0QjtFQUFBLHlCQUFNLE1BQUksQ0FBQy9DLFdBQUwsQ0FBaUJjLGdCQUFnQixDQUFDaHZCLENBQUQsQ0FBaEIsQ0FBb0I0SyxJQUFyQyxDQUFOO0VBQUEsaUJBQTVCO0VBQ0Q7O0VBQ0RnbUIsY0FBQUEsTUFBTSxDQUFDTSxNQUFQLENBQWNILE1BQU0sQ0FBQ3ZGLFFBQXJCO0VBZHNDOztFQVN4QyxpQkFBSyxJQUFJeHJCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdtd0Isc0JBQXNCLENBQUNsd0IsTUFBM0MsRUFBbURELENBQUMsRUFBcEQsRUFBd0Q7RUFBQSxvQkFBL0NBLENBQStDO0VBTXZEOztFQUVELFlBQUEsTUFBSSxDQUFDNkUsR0FBTCxDQUFTc3NCLFNBQVQsQ0FBbUJQLE1BQW5CO0VBakJ3QztFQWtCekMsU0FsQkQsTUFrQk87RUFDTCxVQUFBLE1BQUksQ0FBQy9yQixHQUFMLENBQVN1c0IsU0FBVCxDQUFtQixJQUFJWCxNQUFNLENBQUNDLElBQVAsQ0FBWVcsTUFBaEIsQ0FBdUIsTUFBSSxDQUFDekQsZ0JBQUwsQ0FBc0I1TyxHQUE3QyxFQUFrRCxNQUFJLENBQUM0TyxnQkFBTCxDQUFzQjNPLEdBQXhFLENBQW5CO0VBQ0Q7RUFDRixPQW5DUyxFQW1DUCxHQW5DTyxDQUFWO0VBb0NEOzs7O0lBcEc0Q29PO01Bd0dsQytDLHFCQUFiO0VBQUE7RUFBQTtFQUNFLGlDQUFhcnlCLElBQWIsRUFBbUI7RUFBQTs7RUFDakI7Ozs7RUFJQSxTQUFLOEcsR0FBTCxHQUFXOUcsSUFBSSxDQUFDOEcsR0FBTCxJQUFZckcsU0FBdkI7RUFFQTs7Ozs7RUFJQSxTQUFLZ3RCLFFBQUwsR0FBZ0J6dEIsSUFBSSxDQUFDeXRCLFFBQUwsSUFBaUI7RUFDL0J4TSxNQUFBQSxHQUFHLEVBQUV4Z0IsU0FEMEI7RUFFL0J5Z0IsTUFBQUEsR0FBRyxFQUFFemdCO0VBRjBCLEtBQWpDO0VBS0E7Ozs7Ozs7Ozs7O0VBVUEsU0FBSzB3QixJQUFMLEdBQVlueEIsSUFBSSxDQUFDbXhCLElBQUwsSUFBYTF3QixTQUF6QjtFQUVBOzs7OztFQUlBLFNBQUt1RyxLQUFMLEdBQWFoSCxJQUFJLENBQUNnSCxLQUFMLElBQWN2RyxTQUEzQjtFQUNEO0VBRUQ7Ozs7Ozs7RUFwQ0Y7RUFBQTtFQUFBLDhCQXlDb0IyeEIsc0JBekNwQixFQXlDNEM7RUFDeEMsVUFBSW1CLGlCQUFpQixHQUFHLEVBQXhCO0VBQ0FuQixNQUFBQSxzQkFBc0IsQ0FBQ2p1QixPQUF2QixDQUErQixVQUFDNnVCLE1BQUQsRUFBWTtFQUN6Q08sUUFBQUEsaUJBQWlCLENBQUM3d0IsSUFBbEIseUJBQXdDc3dCLE1BQU0sQ0FBQ2hzQixLQUEvQyxjQUF3RGdzQixNQUFNLENBQUN2RixRQUFQLENBQWdCeE0sR0FBeEUsY0FBK0UrUixNQUFNLENBQUN2RixRQUFQLENBQWdCdk0sR0FBL0Y7RUFDRCxPQUZEO0VBR0EsYUFBT3FTLGlCQUFpQixDQUFDM3dCLElBQWxCLENBQXVCLEdBQXZCLENBQVA7RUFDRDtFQUVEOzs7Ozs7OztFQWpERjtFQUFBO0VBQUEseUJBd0Rla3VCLE9BeERmLEVBd0R3QjBDLFNBeER4QixFQXdEbUMxc0IsR0F4RG5DLEVBd0R3QztFQUNwQyxVQUFJc3JCLHNCQUFzQixHQUFHLEVBQTdCOztFQUNBLFVBQUksQ0FBQ3BsQixLQUFLLENBQUNDLE9BQU4sQ0FBYzZqQixPQUFkLENBQUwsRUFBNkI7RUFDM0JBLFFBQUFBLE9BQU8sR0FBRyxDQUFDQSxPQUFELENBQVY7RUFDRDs7RUFFREEsTUFBQUEsT0FBTyxDQUFDM3NCLE9BQVIsQ0FBZ0IsVUFBQzZ1QixNQUFELEVBQVk7RUFDMUI7RUFDQSxZQUFJUyxZQUFZLEdBQUdELFNBQW5COztFQUNBLFlBQUksT0FBT0EsU0FBUCxLQUFxQixVQUF6QixFQUFxQztFQUNuQ0MsVUFBQUEsWUFBWSxHQUFHRCxTQUFTLENBQ3RCUixNQUFNLENBQUNubUIsSUFEZSxFQUV0QnlpQixXQUFXLENBQUNtQixrQkFGVSxFQUd0QnVDLE1BSHNCLENBQXhCO0VBSUQsU0FSeUI7RUFXMUI7OztFQUNBLFlBQUk3QixJQUFJLEdBQUcsRUFBWDs7RUFDQSxZQUFJc0MsWUFBWSxDQUFDckMsTUFBakIsRUFBeUI7RUFDdkJELFVBQUFBLElBQUksQ0FBQ0MsTUFBTCxHQUFjc0IsTUFBTSxDQUFDQyxJQUFQLENBQVllLEtBQVosQ0FBa0JELFlBQVksQ0FBQ3JDLE1BQWIsQ0FBb0J1QyxDQUF0QyxFQUF5Q0YsWUFBWSxDQUFDckMsTUFBYixDQUFvQndDLENBQTdELENBQWQ7RUFDRDs7RUFFRCxZQUFJSCxZQUFZLENBQUNuQyxVQUFqQixFQUE2QjtFQUMzQkgsVUFBQUEsSUFBSSxDQUFDRyxVQUFMLEdBQWtCLElBQUlvQixNQUFNLENBQUNDLElBQVAsQ0FBWWtCLElBQWhCLENBQXFCSixZQUFZLENBQUNuQyxVQUFiLENBQXdCd0MsQ0FBN0MsRUFBZ0RMLFlBQVksQ0FBQ25DLFVBQWIsQ0FBd0J5QyxDQUF4RSxDQUFsQjtFQUNEOztFQUVELFlBQUlOLFlBQVksQ0FBQzN6QixHQUFqQixFQUFzQjtFQUNwQnF4QixVQUFBQSxJQUFJLENBQUNyeEIsR0FBTCxHQUFXMnpCLFlBQVksQ0FBQzN6QixHQUF4QjtFQUNEOztFQUVELFlBQUkyekIsWUFBWSxDQUFDcEMsR0FBakIsRUFBc0I7RUFDcEJGLFVBQUFBLElBQUksQ0FBQ3J4QixHQUFMLCtDQUFnRHFCLGtCQUFrQixDQUFDc3lCLFlBQVksQ0FBQ3BDLEdBQWQsQ0FBbEU7RUFDRDs7RUFFRCxZQUFJcnFCLEtBQUo7O0VBQ0EsWUFBSXlzQixZQUFZLENBQUN6c0IsS0FBakIsRUFBd0I7RUFDdEJBLFVBQUFBLEtBQUssR0FBR3lzQixZQUFZLENBQUN6c0IsS0FBckI7RUFDRCxTQUZELE1BRU87RUFDTEEsVUFBQUEsS0FBSyxHQUFHZ3NCLE1BQU0sQ0FBQ2hzQixLQUFQLENBQWFoRCxRQUFiLEVBQVI7RUFDRCxTQWxDeUI7RUFxQzFCOzs7RUFDQSxZQUFJN0QsTUFBTSxDQUFDK0QsSUFBUCxDQUFZaXRCLElBQVosRUFBa0JqdkIsTUFBbEIsS0FBNkIsQ0FBakMsRUFBb0M7RUFDbENpdkIsVUFBQUEsSUFBSSxHQUFHMXdCLFNBQVA7RUFDRDs7RUFFRDJ4QixRQUFBQSxzQkFBc0IsQ0FBQzF2QixJQUF2QixDQUNFLElBQUkydkIscUJBQUosQ0FBMEI7RUFDeEJ2ckIsVUFBQUEsR0FBRyxFQUFFQSxHQURtQjtFQUV4QjJtQixVQUFBQSxRQUFRLEVBQUU7RUFDUnhNLFlBQUFBLEdBQUcsRUFBRStSLE1BQU0sQ0FBQ3JtQixRQURKO0VBRVJ1VSxZQUFBQSxHQUFHLEVBQUU4UixNQUFNLENBQUNwbUI7RUFGSixXQUZjO0VBTXhCdWtCLFVBQUFBLElBQUksRUFBRUEsSUFOa0I7RUFPeEJucUIsVUFBQUEsS0FBSyxFQUFFQTtFQVBpQixTQUExQixDQURGO0VBV0QsT0FyREQ7RUF1REEsYUFBT29yQixzQkFBUDtFQUNEO0VBdEhIOztFQUFBO0VBQUE7O0VDL0dBOztFQUVBOzs7Ozs7TUFLcUI0Qjs7Ozs7Ozs7Ozs7Ozs7RUFDbkI7Ozs7NkJBSVFsQyxRQUFRO0VBQUE7O0VBQ2QsVUFBSUMsTUFBTSxHQUFHL2MsR0FBRyxDQUFDb0csUUFBSixDQUFhLFFBQWIsRUFBdUI7RUFDbENoVixRQUFBQSxFQUFFLEVBQUUsYUFEOEI7RUFFbEM0ckIsUUFBQUEsTUFBTSxFQUFFLGtCQUFNO0VBQ1osVUFBQSxLQUFJLENBQUM5QixTQUFMLEdBQWlCLElBQWpCO0VBQ0ErRCxVQUFBQSxRQUFRLENBQUNDLFdBQVQsR0FBdUIsS0FBSSxDQUFDM3dCLE9BQTVCOztFQUVBLGNBQUksT0FBT3V1QixNQUFQLEtBQWtCLFVBQXRCLEVBQWtDO0VBQ2hDQSxZQUFBQSxNQUFNO0VBQ1A7O0VBRUQsY0FBSSxPQUFPLEtBQUksQ0FBQ3pCLFNBQVosS0FBMEIsVUFBOUIsRUFBMEM7RUFDeEMsWUFBQSxLQUFJLENBQUNBLFNBQUw7RUFDRDtFQUNGLFNBYmlDO0VBY2xDNEIsUUFBQUEsS0FBSyxFQUFFLElBZDJCO0VBZWxDQyxRQUFBQSxHQUFHLEVBQUU7RUFmNkIsT0FBdkIsQ0FBYjtFQWtCQSxVQUFJTyxHQUFHLEdBQUd6ZCxHQUFHLENBQUNvRyxRQUFKLENBQWEsTUFBYixFQUFxQjtFQUM3QmhWLFFBQUFBLEVBQUUsRUFBRSxjQUR5QjtFQUU3Qit0QixRQUFBQSxHQUFHLEVBQUUsWUFGd0I7RUFHN0J2UixRQUFBQSxJQUFJLEVBQUU7RUFIdUIsT0FBckIsQ0FBVjtFQU1BNU4sTUFBQUEsR0FBRyxDQUFDMUUsTUFBSixDQUFXLE1BQVgsRUFBbUJtaUIsR0FBbkI7RUFDQXpkLE1BQUFBLEdBQUcsQ0FBQzFFLE1BQUosQ0FBVyxNQUFYLEVBQW1CeWhCLE1BQW5CO0VBQ0Q7OztxQ0FFZWxCLFNBQVM7RUFDdkIsVUFBSXVELHNCQUFzQixHQUFHQyxrQkFBa0IsQ0FBQy9yQixJQUFuQixDQUMzQnVvQixPQUFPLENBQUN0a0IsVUFEbUIsRUFFM0IsS0FBS2drQixVQUZzQixDQUE3QjtFQUtBLFVBQUkrRCxNQUFNLEdBQUd6RCxPQUFPLENBQUMwRCxTQUFyQjtFQUNBLFVBQUk3RSxLQUFLLEdBQUcsS0FBS0QsTUFBTCxJQUFlLEdBQTNCO0VBQ0EsVUFBSUQsTUFBTSxHQUFHLEtBQUtELE9BQUwsSUFBZ0IsR0FBN0I7RUFDQSxVQUFJSyxJQUFJLEdBQUcsS0FBS0QsS0FBTCxJQUFjLENBQXpCO0VBRUEsVUFBSTJDLGNBQWMsR0FBRytCLGtCQUFrQixDQUFDOUIsU0FBbkIsQ0FBNkI2QixzQkFBN0IsQ0FBckI7RUFDQSw2RkFBK0U5QixjQUEvRSxjQUFpR2dDLE1BQU0sQ0FBQzFuQixTQUF4RyxjQUFxSDBuQixNQUFNLENBQUMzbkIsUUFBNUgsY0FBd0lpakIsSUFBeEksbUJBQXFKRixLQUFySixjQUE4SkYsTUFBOUosMkJBQXFMLEtBQUtqc0IsT0FBMUw7RUFDRDs7OzJCQUVLNlMsSUFBSXlhLFNBQVM7RUFBQTs7RUFDakIsVUFBSSxDQUFDLENBQUNBLE9BQUQsSUFBWUEsT0FBTyxDQUFDdGtCLFVBQVIsQ0FBbUJySyxNQUFuQixJQUE2QixDQUExQyxLQUFnRCxDQUFDLEtBQUs2dEIsYUFBMUQsRUFBeUU7RUFDdkUsYUFBS0UsSUFBTCxHQUFZLElBQVo7RUFDQSxlQUFPLElBQVA7RUFDRDs7RUFFRCxVQUFJN2EsU0FBUyxHQUFHSixHQUFHLENBQUMzUyxLQUFKLENBQVUrVCxFQUFWLENBQWhCO0VBQ0FwQixNQUFBQSxHQUFHLENBQUN5ZCxHQUFKLENBQVFyZCxTQUFSLEVBQW1CO0VBQ2pCc2EsUUFBQUEsS0FBSyxFQUFFLEtBQUtELE1BREs7RUFFakJELFFBQUFBLE1BQU0sRUFBRSxLQUFLRDtFQUZJLE9BQW5CO0VBS0EsV0FBS1UsSUFBTCxHQUFZLElBQUlnRSxRQUFRLENBQUNyQixHQUFiLENBQWlCO0VBQzNCeGQsUUFBQUEsU0FBUyxFQUFFQSxTQURnQjtFQUUzQndhLFFBQUFBLElBQUksRUFBRSxLQUFLRCxLQUZnQjtFQUczQnpZLFFBQUFBLEtBQUssRUFBRSxtQ0FIb0I7RUFJM0JvZCxRQUFBQSxNQUFNLEVBQUUsS0FBS0UsZUFBTCxDQUFxQjNELE9BQXJCO0VBSm1CLE9BQWpCLENBQVo7O0VBT0EsVUFBSUEsT0FBSixFQUFhO0VBQUE7RUFDWCxjQUFNSSxnQkFBZ0IsR0FBRyxNQUFJLENBQUNQLGFBQUwsR0FDckIsTUFBSSxDQUFDcUMsZ0JBQUwsQ0FBc0JsQyxPQUFPLENBQUN0a0IsVUFBOUIsQ0FEcUIsR0FFckJza0IsT0FBTyxDQUFDdGtCLFVBRlo7RUFHQSxjQUFNNm5CLHNCQUFzQixHQUFHQyxrQkFBa0IsQ0FBQy9yQixJQUFuQixDQUM3QjJvQixnQkFENkIsRUFFN0IsTUFBSSxDQUFDVixVQUZ3QixFQUc3QixNQUFJLENBQUNOLElBSHdCLENBQS9COztFQUpXLHFDQVNGaHVCLENBVEU7RUFVVCxnQkFBSXd5QixPQUFPLEdBQUdMLHNCQUFzQixDQUFDbnlCLENBQUQsQ0FBdEIsQ0FBMEJ3eUIsT0FBeEM7RUFDQSxnQkFBSS9HLE1BQU0sR0FBRyxJQUFJdUcsUUFBUSxDQUFDUyxNQUFiLENBQ1hOLHNCQUFzQixDQUFDbnlCLENBQUQsQ0FBdEIsQ0FBMEJ3ckIsUUFBMUIsQ0FBbUM3Z0IsU0FEeEIsRUFFWHduQixzQkFBc0IsQ0FBQ255QixDQUFELENBQXRCLENBQTBCd3JCLFFBQTFCLENBQW1DOWdCLFFBRnhCLENBQWI7RUFHQSxnQkFBSXFtQixNQUFNLEdBQUcsSUFBSWlCLFFBQVEsQ0FBQ2hCLE1BQWIsQ0FBb0J3QixPQUFwQixFQUE2QkUsU0FBN0IsQ0FBdUNqSCxNQUF2QyxDQUFiO0VBQ0FzRixZQUFBQSxNQUFNLENBQUM0QixLQUFQLENBQWEsTUFBSSxDQUFDM0UsSUFBbEI7O0VBQ0EsZ0JBQUksTUFBSSxDQUFDRSxXQUFULEVBQXNCO0VBQ3BCNkMsY0FBQUEsTUFBTSxDQUFDNkIsVUFBUCxHQUFvQm5kLGdCQUFwQixDQUFxQyxPQUFyQyxFQUE4QztFQUFBLHVCQUFNLE1BQUksQ0FBQ3lZLFdBQUwsQ0FBaUJjLGdCQUFnQixDQUFDaHZCLENBQUQsQ0FBaEIsQ0FBb0I0SyxJQUFyQyxDQUFOO0VBQUEsZUFBOUM7RUFDRDtFQWxCUTs7RUFTWCxlQUFLLElBQUk1SyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHbXlCLHNCQUFzQixDQUFDbHlCLE1BQTNDLEVBQW1ERCxDQUFDLEVBQXBELEVBQXdEO0VBQUEsa0JBQS9DQSxDQUErQztFQVV2RDtFQW5CVTtFQW9CWjtFQUNGOzs7c0NBRWdCNHVCLFNBQVM7RUFDeEIsYUFBT0EsT0FBTyxJQUFJQSxPQUFPLENBQUMwRCxTQUFuQixJQUFnQzFELE9BQU8sQ0FBQzBELFNBQVIsQ0FBa0IzbkIsU0FBbEQsSUFBK0Rpa0IsT0FBTyxDQUFDMEQsU0FBUixDQUFrQjVuQixRQUFqRixHQUNILENBQUNra0IsT0FBTyxDQUFDMEQsU0FBUixDQUFrQjNuQixTQUFuQixFQUE4QmlrQixPQUFPLENBQUMwRCxTQUFSLENBQWtCNW5CLFFBQWhELENBREcsR0FFSDtFQUFFdVUsUUFBQUEsR0FBRyxFQUFFLEtBQUsyTyxnQkFBTCxDQUFzQjNPLEdBQTdCO0VBQWtDRCxRQUFBQSxHQUFHLEVBQUUsS0FBSzRPLGdCQUFMLENBQXNCNU87RUFBN0QsT0FGSjtFQUdEOzs7O0lBL0Y0Q3FPO01Ba0dsQytFLGtCQUFiO0VBQUE7RUFBQTtFQUNFLDhCQUFhcjBCLElBQWIsRUFBbUI7RUFBQTs7RUFDakI7Ozs7RUFJQSxTQUFLOEcsR0FBTCxHQUFXOUcsSUFBSSxDQUFDOEcsR0FBTCxJQUFZckcsU0FBdkI7RUFFQTs7Ozs7RUFJQSxTQUFLZ3RCLFFBQUwsR0FBZ0J6dEIsSUFBSSxDQUFDeXRCLFFBQUwsSUFBaUI7RUFDL0I5Z0IsTUFBQUEsUUFBUSxFQUFFbE0sU0FEcUI7RUFFL0JtTSxNQUFBQSxTQUFTLEVBQUVuTTtFQUZvQixLQUFqQztFQUtBOzs7OztFQUlBLFNBQUtnMEIsT0FBTCxHQUFlejBCLElBQUksQ0FBQ3kwQixPQUFMLElBQWdCaDBCLFNBQS9CO0VBRUE7Ozs7O0VBSUEsU0FBS3VHLEtBQUwsR0FBYWhILElBQUksQ0FBQ2dILEtBQUwsSUFBY3ZHLFNBQTNCO0VBRUE7Ozs7O0VBSUEsU0FBS3EwQixZQUFMLEdBQW9COTBCLElBQUksQ0FBQzgwQixZQUFMLElBQXFCcjBCLFNBQXpDO0VBQ0Q7RUFFRDs7Ozs7OztFQXBDRjtFQUFBO0VBQUEsOEJBeUNvQjJ6QixzQkF6Q3BCLEVBeUM0QztFQUN4QyxVQUFJYixpQkFBaUIsR0FBRyxFQUF4QjtFQUNBYSxNQUFBQSxzQkFBc0IsQ0FBQ2p3QixPQUF2QixDQUErQixVQUFDNnVCLE1BQUQsRUFBWTtFQUN6QyxZQUFJQSxNQUFNLENBQUM4QixZQUFYLEVBQXlCO0VBQ3ZCdkIsVUFBQUEsaUJBQWlCLENBQUM3d0IsSUFBbEIsZUFBOEJzd0IsTUFBTSxDQUFDOEIsWUFBckMsY0FBcUQ5QixNQUFNLENBQUN2RixRQUFQLENBQWdCN2dCLFNBQXJFLGNBQWtGb21CLE1BQU0sQ0FBQ3ZGLFFBQVAsQ0FBZ0I5Z0IsUUFBbEc7RUFDRCxTQUZELE1BRU87RUFDTDRtQixVQUFBQSxpQkFBaUIsQ0FBQzd3QixJQUFsQixpQkFBZ0Nzd0IsTUFBTSxDQUFDaHNCLEtBQXZDLGNBQWdEZ3NCLE1BQU0sQ0FBQ3ZGLFFBQVAsQ0FBZ0I3Z0IsU0FBaEUsY0FBNkVvbUIsTUFBTSxDQUFDdkYsUUFBUCxDQUFnQjlnQixRQUE3RjtFQUNEO0VBQ0YsT0FORDtFQU9BLGFBQU80bUIsaUJBQWlCLENBQUMzd0IsSUFBbEIsQ0FBdUIsR0FBdkIsQ0FBUDtFQUNEO0VBRUQ7Ozs7Ozs7O0VBckRGO0VBQUE7RUFBQSx5QkE0RGVrdUIsT0E1RGYsRUE0RHdCMEMsU0E1RHhCLEVBNERtQzFzQixHQTVEbkMsRUE0RHdDO0VBQ3BDLFVBQUlzdEIsc0JBQXNCLEdBQUcsRUFBN0I7O0VBQ0EsVUFBSSxDQUFDcG5CLEtBQUssQ0FBQ0MsT0FBTixDQUFjNmpCLE9BQWQsQ0FBTCxFQUE2QjtFQUMzQkEsUUFBQUEsT0FBTyxHQUFHLENBQUNBLE9BQUQsQ0FBVjtFQUNEOztFQUVEQSxNQUFBQSxPQUFPLENBQUMzc0IsT0FBUixDQUFnQixVQUFDNnVCLE1BQUQsRUFBWTtFQUMxQjtFQUNBLFlBQUlTLFlBQVksR0FBR0QsU0FBbkI7O0VBQ0EsWUFBSSxPQUFPQSxTQUFQLEtBQXFCLFVBQXpCLEVBQXFDO0VBQ25DQyxVQUFBQSxZQUFZLEdBQUdELFNBQVMsQ0FDdEJSLE1BQU0sQ0FBQ25tQixJQURlLEVBRXRCeWlCLFdBQVcsQ0FBQ21CLGtCQUZVLEVBR3RCdUMsTUFIc0IsQ0FBeEI7RUFJRDs7RUFFRCxZQUFNeUIsT0FBTyxHQUFHaEIsWUFBWSxDQUFDZ0IsT0FBYixHQUF1QmhCLFlBQVksQ0FBQ2dCLE9BQXBDLEdBQThDLElBQTlEO0VBQ0EsWUFBTUssWUFBWSxHQUFHckIsWUFBWSxDQUFDcUIsWUFBYixHQUE0QnJCLFlBQVksQ0FBQ3FCLFlBQXpDLEdBQXdELElBQTdFO0VBRUFWLFFBQUFBLHNCQUFzQixDQUFDMXhCLElBQXZCLENBQ0UsSUFBSTJ4QixrQkFBSixDQUF1QjtFQUNyQnZ0QixVQUFBQSxHQUFHLEVBQUVBLEdBRGdCO0VBRXJCMm1CLFVBQUFBLFFBQVEsRUFBRTtFQUNSOWdCLFlBQUFBLFFBQVEsRUFBRXFtQixNQUFNLENBQUNybUIsUUFEVDtFQUVSQyxZQUFBQSxTQUFTLEVBQUVvbUIsTUFBTSxDQUFDcG1CO0VBRlYsV0FGVztFQU1yQjZuQixVQUFBQSxPQUFPLEVBQUVBLE9BTlk7RUFPckJ6dEIsVUFBQUEsS0FBSyxFQUFFZ3NCLE1BQU0sQ0FBQ2hzQixLQVBPO0VBUXJCOHRCLFVBQUFBLFlBQVksRUFBRUE7RUFSTyxTQUF2QixDQURGO0VBWUQsT0F6QkQ7RUEyQkEsYUFBT1Ysc0JBQVA7RUFDRDtFQTlGSDs7RUFBQTtFQUFBOztFQ3JHQSxJQUFNVyxhQUFhLEdBQUc7RUFDcEIsWUFBVXZELGlCQURVO0VBRXBCLFlBQVV3QztFQUZVLENBQXRCOztNQUtxQmdCOzs7OztFQUNuQiwwQkFBd0I7RUFBQTs7RUFBQSxRQUFYaDFCLElBQVcsdUVBQUosRUFBSTs7RUFBQTs7RUFDdEIsc0ZBQU1BLElBQU47RUFFQTs7OztFQUdBLFVBQUtxSSxRQUFMLEdBQWdCb0gsV0FBVyxDQUFDcEIsZ0JBQTVCO0VBRUE7Ozs7O0VBSUEsVUFBSzRtQixZQUFMLEdBQW9CajFCLElBQUksQ0FBQ2sxQixXQUF6Qjs7RUFDQSxRQUFJLENBQUMsTUFBS0QsWUFBTixJQUFzQixFQUFFLE1BQUtBLFlBQUwsQ0FBa0I1TCxXQUFsQixNQUFtQzBMLGFBQXJDLENBQTFCLEVBQStFO0VBQzdFLFlBQU0sSUFBSWh3QixLQUFKLENBQVUsa0VBQVYsQ0FBTjtFQUNEO0VBRUQ7Ozs7OztFQUlBLFVBQUt5dEIsU0FBTCxHQUFpQnh5QixJQUFJLENBQUNtMUIsUUFBTCxJQUFpQixLQUFsQztFQUVBOzs7OztFQUlBLFVBQUtsRixJQUFMLEdBQVksSUFBWjtFQTNCc0I7RUE0QnZCOzs7O0VBZUQ7MENBQ3FCNWQsTUFBTTtFQUN6QixhQUFPLElBQUkwaUIsYUFBYSxDQUFDMWlCLElBQUksQ0FBQ2dYLFdBQUwsRUFBRCxDQUFqQixDQUFzQyxLQUFLek8sT0FBM0MsQ0FBUDtFQUNEOzs7aUNBRVc7RUFDVixXQUFLcVYsSUFBTCxHQUFZLEtBQUttRixtQkFBTCxDQUF5QixLQUFLSCxZQUE5QixDQUFaO0VBQ0EsVUFBSXBFLE9BQU8sR0FBRyxLQUFLbmdCLFFBQUwsQ0FBYyxLQUFkLENBQWQ7O0VBQ0EsVUFBSW1nQixPQUFPLEtBQUtwd0IsU0FBWixJQUF5QixLQUFLK3hCLFNBQWxDLEVBQTZDO0VBQzNDLGVBQU8sSUFBUDtFQUNEOztFQUVELFVBQUksS0FBS0EsU0FBVCxFQUFvQjtFQUNsQjtFQUNBO0VBQ0EsYUFBSzZDLFdBQUwsQ0FBaUIsS0FBS3BGLElBQUwsQ0FBVXFGLGNBQVYsQ0FBeUJ6RSxPQUF6QixDQUFqQjtFQUNBLGVBQU8sSUFBUDtFQUNEOztFQUVELFdBQUtaLElBQUwsQ0FBVXNGLE1BQVY7RUFDRDs7O2dDQUVVO0VBQUE7O0VBQ1QsV0FBS3RGLElBQUwsQ0FBVUssUUFBVixDQUFtQixZQUFNO0VBQ3ZCLFFBQUEsTUFBSSxDQUFDTCxJQUFMLENBQVVwZCxJQUFWLENBQWUsTUFBSSxDQUFDc0ksVUFBcEIsRUFBZ0MsTUFBSSxDQUFDekssUUFBTCxDQUFjLEtBQWQsQ0FBaEM7RUFDRCxPQUZEO0VBR0Q7OzsrQkFFUzNRLE1BQU15SCxLQUFLO0VBQ25CLFVBQUlySCxNQUFNLENBQUMrRCxJQUFQLENBQVluRSxJQUFaLEVBQWtCbUMsTUFBbEIsS0FBNkIsQ0FBakMsRUFBb0M7RUFDbEMsZUFBTyxJQUFQO0VBQ0Q7O0VBRUQsd0ZBQXNCbkMsSUFBdEIsRUFBNEJ5SCxHQUE1QjtFQUNEOzs7O0VBM0NEOzs7OzswQ0FLNEIvQixRQUFRO0VBQ2xDLGFBQU8sYUFBUDtFQUNEOzs7MEJBWGtCO0VBQ2pCLGFBQU8sS0FBUDtFQUNEOzs7O0lBakN1Q2tWOztFQ0QxQyxJQUFNNmEsVUFBVSxHQUFHO0VBQ2pCQyxFQUFBQSxLQUFLLEVBQUUsT0FEVTtFQUVqQkMsRUFBQUEsUUFBUSxFQUFFLFVBRk87RUFHakJDLEVBQUFBLE1BQU0sRUFBRTtFQUhTLENBQW5COztNQU1xQkM7Ozs7O0VBQ25CLDhCQUEwQjtFQUFBOztFQUFBOztFQUFBLFFBQWJud0IsTUFBYSx1RUFBSixFQUFJOztFQUFBOztFQUN4QiwwRkFBTUEsTUFBTjtFQUVBOzs7Ozs7RUFLQSxVQUFLdXBCLGlCQUFMLEdBQXlCdnBCLE1BQU0sQ0FBQ3NHLGdCQUFoQztFQUVBOzs7Ozs7RUFLQSxVQUFLa2pCLFlBQUwsR0FBb0J4cEIsTUFBTSxDQUFDeXBCLFdBQVAsSUFBc0IsS0FBMUM7RUFFQSxVQUFLN21CLFFBQUwsR0FBZ0JvSCxXQUFXLENBQUNwQixnQkFBNUI7RUFDQSxVQUFLd25CLFdBQUw7RUFDRUMsTUFBQUEsTUFBTSxFQUFFO0VBQ052YSxRQUFBQSxNQUFNLEVBQUUsSUFERjtFQUVOakksUUFBQUEsUUFBUSxFQUFFO0VBRko7RUFEViwwQ0FLRzhiLHlCQUF5QixDQUFDL2MsSUFMN0IsRUFLb0M7RUFDaENrSixNQUFBQSxNQUFNLEVBQUUsSUFEd0I7RUFFaENqSSxNQUFBQSxRQUFRLEVBQUU7RUFGc0IsS0FMcEMsc0NBU0c2Yiw0QkFBNEIsQ0FBQzljLElBVGhDLEVBU3VDO0VBQ25Da0osTUFBQUEsTUFBTSxFQUFFLElBRDJCO0VBRW5DakksTUFBQUEsUUFBUSxFQUFFO0VBRnlCLEtBVHZDLHNDQWFHK2IsMEJBQTBCLENBQUNoZCxJQWI5QixFQWFxQztFQUNqQ2tKLE1BQUFBLE1BQU0sRUFBRSxJQUR5QjtFQUVqQ2pJLE1BQUFBLFFBQVEsRUFBRTtFQUZ1QixLQWJyQzs7RUFtQkEsUUFBSTdOLE1BQU0sQ0FBQ3N3QixVQUFQLEtBQXNCdDFCLFNBQXRCLElBQW1DZ0YsTUFBTSxDQUFDMlcsV0FBUCxLQUF1QjNiLFNBQTlELEVBQXlFO0VBQ3ZFZ0YsTUFBQUEsTUFBTSxDQUFDc3dCLFVBQVAsR0FBb0J0d0IsTUFBTSxDQUFDMlcsV0FBUCxDQUFtQjJaLFVBQXZDO0VBQ0Q7O0VBRUQsUUFBSXR3QixNQUFNLENBQUN1d0IsWUFBUCxLQUF3QnYxQixTQUF4QixJQUFxQ2dGLE1BQU0sQ0FBQzJXLFdBQVAsS0FBdUIzYixTQUFoRSxFQUEyRTtFQUN6RWdGLE1BQUFBLE1BQU0sQ0FBQ3V3QixZQUFQLEdBQXNCdndCLE1BQU0sQ0FBQzJXLFdBQVAsQ0FBbUI0WixZQUF6QztFQUNEOztFQUVELFFBQUl2d0IsTUFBTSxDQUFDUyxLQUFYLEVBQWtCO0VBQ2hCLFVBQU1BLEtBQUssR0FBR1QsTUFBTSxDQUFDUyxLQUFyQjs7RUFDQSxVQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBakIsSUFBNkJBLEtBQUssR0FBRyxDQUFyQyxJQUEwQ0EsS0FBSyxHQUFHLEVBQXRELEVBQTBEO0VBQ3hELGNBQU0sSUFBSWxCLHFCQUFKLENBQTBCLHVDQUExQixFQUFtRSxpQkFBbkUsQ0FBTjtFQUNEOztFQUNELFlBQUtrTixJQUFMLENBQVUrakIsY0FBVixDQUF5Qi92QixLQUF6QjtFQUNEOztFQUVELFVBQUtnd0IsYUFBTCxDQUFtQjtFQUNqQjNhLE1BQUFBLE1BQU0sRUFBRTlWLE1BQU0sQ0FBQ3N3QixVQURFO0VBRWpCemlCLE1BQUFBLFFBQVEsRUFBRTdOLE1BQU0sQ0FBQ3V3QjtFQUZBLEtBQW5CO0VBS0E7Ozs7OztFQUlBLFVBQUtHLGFBQUwsR0FBcUIxd0IsTUFBTSxDQUFDMndCLFlBQTVCO0VBOUR3QjtFQStEekI7Ozs7OEJBRVE7RUFDUCxVQUFJajJCLE1BQU0sQ0FBQytELElBQVAsQ0FBWSxLQUFLd00sUUFBTCxFQUFaLEVBQTZCeE8sTUFBN0IsR0FBc0MsQ0FBMUMsRUFBNkM7RUFDM0M7RUFDRDs7RUFFRCxhQUFPLElBQVA7RUFDRDs7OytCQU1TbkMsTUFBTXlILEtBQUs7RUFDbkIsVUFBTVAsT0FBTyxHQUFHbEgsSUFBSSxDQUFDa0gsT0FBTCxJQUFnQixFQUFoQztFQUNBLFVBQU00RSxXQUFXLEdBQUc5TCxJQUFJLENBQUM4TCxXQUFMLElBQW9CQyxZQUFZLENBQUMzQyxVQUFyRDtFQUNBLDRGQUFzQmhKLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0VBQUU2RyxRQUFBQSxPQUFPLEVBQUU7RUFBWCxPQUFkLEVBQStCbEgsSUFBL0IsRUFBcUM7RUFDekRzMkIsUUFBQUEsV0FBVyxFQUFFeHFCLFdBQVcsS0FBS0MsWUFBWSxDQUFDM0MsVUFEZTtFQUV6RG10QixRQUFBQSxlQUFlLEVBQUV6cUIsV0FBVyxLQUFLQyxZQUFZLENBQUMxQyxjQUZXO0VBR3pEbXRCLFFBQUFBLGdCQUFnQixFQUFFMXFCLFdBQVcsS0FBS0MsWUFBWSxDQUFDekMsZUFIVTtFQUl6RG10QixRQUFBQSxVQUFVLEVBQUUsS0FBSzViLE9BQUwsQ0FBYTRiLFVBSmdDO0VBS3pEQyxRQUFBQSxTQUFTLEVBQUUsS0FBSzdiLE9BQUwsQ0FBYTZiLFNBTGlDO0VBTXpEOUgsUUFBQUEsWUFBWSxFQUFFLEtBQUtBLFlBQUwsRUFOMkM7RUFPekR5SCxRQUFBQSxZQUFZLEVBQUUsS0FBS0QsYUFBTCxHQUFxQixLQUFLQSxhQUFMLEdBQXFCejBCLE1BQU0sQ0FBQ3FDLFFBQVAsQ0FBZ0JsQyxNQUExRCxHQUFtRSxFQVB4QjtFQVF6RDYwQixRQUFBQSxhQUFhLEVBQUV6dkIsT0FBTyxDQUFDL0UsTUFBUixLQUFtQixDQVJ1QjtFQVN6REcsUUFBQUEsS0FBSyxFQUFFLEtBQUs2UCxJQUFMLENBQVVqQyxhQUFWLENBQXdCUyxRQUF4QixDQUFpQ2pCLFdBQVcsQ0FBQ2hCLEtBQTdDO0VBVGtELE9BQXJDLENBQXRCLEVBVUlqSCxHQVZKO0VBV0Q7RUFFRDs7Ozs7OztxQ0FJZ0I7RUFDZCxhQUFPbEgsSUFBSSxDQUFDQyxTQUFMLENBQWU7RUFDcEJ3TCxRQUFBQSxnQkFBZ0IsRUFBRSxLQUFLaWpCO0VBREgsT0FBZixDQUFQO0VBR0Q7OztvQ0FlY3ZwQixRQUFRO0VBQ3JCLFVBQUksT0FBT0EsTUFBTSxDQUFDOFYsTUFBZCxLQUF5QixVQUE3QixFQUF5QztFQUN2QyxhQUFLc2EsV0FBTCxDQUFpQkMsTUFBakIsQ0FBd0J2YSxNQUF4QixHQUFpQzlWLE1BQU0sQ0FBQzhWLE1BQXhDO0VBQ0QsT0FGRCxNQUVPO0VBQ0wsYUFBSyxJQUFJcmEsR0FBVCxJQUFnQnVFLE1BQU0sQ0FBQzhWLE1BQXZCLEVBQStCO0VBQzdCLGVBQUtvYixhQUFMLENBQW1CejFCLEdBQW5CLEVBQXdCdUUsTUFBTSxDQUFDOFYsTUFBUCxDQUFjcmEsR0FBZCxDQUF4QjtFQUNEO0VBQ0Y7O0VBRUQsVUFBSSxPQUFPdUUsTUFBTSxDQUFDNk4sUUFBZCxLQUEyQixRQUEvQixFQUF5QztFQUN2QyxhQUFLdWlCLFdBQUwsQ0FBaUJDLE1BQWpCLENBQXdCeGlCLFFBQXhCLEdBQW1DN04sTUFBTSxDQUFDNk4sUUFBMUM7RUFDRCxPQUZELE1BRU87RUFDTCxhQUFLLElBQUlwUyxJQUFULElBQWdCdUUsTUFBTSxDQUFDNk4sUUFBdkIsRUFBaUM7RUFDL0IsZUFBS3NqQixlQUFMLENBQXFCMTFCLElBQXJCLEVBQTBCdUUsTUFBTSxDQUFDNk4sUUFBUCxDQUFnQnBTLElBQWhCLENBQTFCO0VBQ0Q7RUFDRjtFQUNGOzs7c0NBRWdCbVIsTUFBTWlCLFVBQVU7RUFDL0IsVUFBSXVqQixLQUFLLEdBQUcsS0FBS0MsZ0JBQUwsQ0FBc0J6a0IsSUFBdEIsQ0FBWjtFQUNBLFdBQUt3akIsV0FBTCxDQUFpQmdCLEtBQUssQ0FBQ3hrQixJQUF2QixFQUE2QmlCLFFBQTdCLEdBQXdDQSxRQUF4QztFQUNEOzs7b0NBRWNqQixNQUFNa0osUUFBUTtFQUMzQixVQUFJc2IsS0FBSyxHQUFHLEtBQUtDLGdCQUFMLENBQXNCemtCLElBQXRCLENBQVo7RUFDQSxXQUFLd2pCLFdBQUwsQ0FBaUJnQixLQUFLLENBQUN4a0IsSUFBdkIsRUFBNkJrSixNQUE3QixHQUFzQ0EsTUFBdEM7RUFDRDs7O3VDQUVpQmxKLE1BQU07RUFDdEIsVUFBSTBrQixJQUFJLEdBQUdoSSxvQkFBWDs7RUFDQSxjQUFRMWMsSUFBUjtFQUNFLGFBQUttakIsVUFBVSxDQUFDQyxLQUFoQjtFQUNFc0IsVUFBQUEsSUFBSSxHQUFHM0gseUJBQVA7RUFDQTs7RUFDRixhQUFLb0csVUFBVSxDQUFDRSxRQUFoQjtFQUNFcUIsVUFBQUEsSUFBSSxHQUFHNUgsNEJBQVA7RUFDQTs7RUFDRixhQUFLcUcsVUFBVSxDQUFDRyxNQUFoQjtFQUNFb0IsVUFBQUEsSUFBSSxHQUFHMUgsMEJBQVA7RUFDQTtFQVRKOztFQVlBLGFBQU8wSCxJQUFQO0VBQ0Q7OzsrQkFFU2gzQixNQUFNc1MsTUFBTXJTLE1BQU07RUFDMUI7RUFDQTtFQUNBLFVBQUlxUyxJQUFJLEtBQUswYyxvQkFBb0IsQ0FBQzFjLElBQWxDLEVBQXdDO0VBQ3RDLFlBQUl3a0IsS0FBSyxHQUFHLEtBQUtDLGdCQUFMLENBQXNCLzJCLElBQUksQ0FBQ3NTLElBQTNCLENBQVo7O0VBQ0EsWUFBSXdrQixLQUFKLEVBQVc7RUFDVHhrQixVQUFBQSxJQUFJLEdBQUd3a0IsS0FBSyxDQUFDeGtCLElBQWI7RUFDRDtFQUNGLE9BTEQsTUFLTyxJQUFJQSxJQUFJLEtBQUsyaUIsWUFBWSxDQUFDM2lCLElBQTFCLEVBQWdDO0VBQ3JDdFMsUUFBQUEsSUFBSSxHQUFHO0VBQ0wrRyxVQUFBQSxHQUFHLEVBQUUvRztFQURBLFNBQVA7RUFHQSxZQUFNaTNCLE9BQU8sR0FBRzcyQixNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUt3YSxPQUFMLENBQWE2YixTQUEvQixFQUEwQ3oyQixJQUExQyxDQUFoQjtFQUNBLDhGQUFzQkQsSUFBdEIsRUFBNEJzUyxJQUE1QixFQUFrQzJrQixPQUFsQztFQUNELE9BZHlCO0VBaUIxQjs7O0VBQ0EsVUFBSUQsSUFBSSxrRkFBa0JoM0IsSUFBbEIsRUFBd0JzUyxJQUF4QixFQUE4QmxTLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSixJQUFkLEVBQW9CO0VBQ3hEK0wsUUFBQUEsZ0JBQWdCLEVBQUUsS0FBS2lqQixpQkFEaUM7RUFFeERFLFFBQUFBLFdBQVcsRUFBRSxLQUFLRDtFQUZzQyxPQUFwQixDQUE5QixDQUFSOztFQUlBLFVBQUlnSSxZQUFZLEdBQUcsS0FBS3BCLFdBQUwsQ0FBaUJDLE1BQXBDO0VBQ0EsVUFBSW9CLFVBQVUsR0FBRyxLQUFLckIsV0FBTCxDQUFpQmtCLElBQUksQ0FBQzFrQixJQUF0QixDQUFqQjtFQUNBLFVBQUk4a0IsZUFBZSxHQUFHLE9BQU9GLFlBQVksQ0FBQzFiLE1BQXBCLEtBQStCLFVBQXJEO0VBQ0EsVUFBSTZiLGlCQUFpQixHQUFHLE9BQU9ILFlBQVksQ0FBQzNqQixRQUFwQixLQUFpQyxRQUF6RDs7RUFFQSxVQUFJNmpCLGVBQUosRUFBcUI7RUFDbkJKLFFBQUFBLElBQUksQ0FBQ00sU0FBTCxDQUFlSixZQUFZLENBQUMxYixNQUE1QjtFQUNEOztFQUVELFVBQUk2YixpQkFBSixFQUF1QjtFQUNyQkwsUUFBQUEsSUFBSSxDQUFDMUIsV0FBTCxDQUFpQjRCLFlBQVksQ0FBQzNqQixRQUE5QjtFQUNEOztFQUVELFVBQUksQ0FBQzRqQixVQUFMLEVBQWlCO0VBQ2YsZUFBT0gsSUFBUDtFQUNEOztFQUVELFVBQUksQ0FBQ0ksZUFBRCxJQUFvQkQsVUFBVSxDQUFDM2IsTUFBbkMsRUFBMkM7RUFDekN3YixRQUFBQSxJQUFJLENBQUNNLFNBQUwsQ0FBZUgsVUFBVSxDQUFDM2IsTUFBMUI7RUFDRCxPQXpDeUI7OztFQTRDMUIsVUFBSSxDQUFDNmIsaUJBQUQsSUFBc0JGLFVBQVUsQ0FBQzVqQixRQUFyQyxFQUErQztFQUM3Q3lqQixRQUFBQSxJQUFJLENBQUMxQixXQUFMLENBQWlCNkIsVUFBVSxDQUFDNWpCLFFBQTVCO0VBQ0Q7O0VBQ0QsYUFBT3lqQixJQUFQO0VBQ0Q7Ozs7RUF0R0Q7Ozs7OzBDQUs0QnR4QixRQUFRO0VBQ2xDLGFBQU8saUJBQVA7RUFDRDs7OzBCQXpDK0I7RUFDOUIsYUFBTyxJQUFQO0VBQ0Q7OzswQkE0QmtCO0VBQ2pCLGFBQU8saUJBQVA7RUFDRDs7OztJQTFHMkNrVjs7TUNkekIyYzs7Ozs7RUFDbkIsdUNBQTBCO0VBQUE7O0VBQUEsUUFBYjd4QixNQUFhLHVFQUFKLEVBQUk7O0VBQUE7O0VBQ3hCLG1HQUFNQSxNQUFOO0VBRUE7Ozs7O0VBSUEsVUFBSzh4QixhQUFMLEdBQXFCOXhCLE1BQU0sQ0FBQyt4QixZQUFQLElBQXVCLHlCQUE1QztFQUVBOzs7OztFQUlBLFVBQUtDLGNBQUwsR0FBc0JoeUIsTUFBTSxDQUFDZ3lCLGNBQVAsSUFBeUIsY0FBL0M7RUFFQTs7Ozs7RUFJQSxVQUFLMXJCLGdCQUFMLEdBQXdCdEcsTUFBTSxDQUFDc0csZ0JBQVAsSUFBMkJ0RyxNQUFNLENBQUMyVyxXQUFQLENBQW1CclEsZ0JBQTlDLElBQWtFLElBQTFGO0VBbkJ3QjtFQW9CekI7RUFFRDs7Ozs7Ozs7OztFQWtCQTs7Ozs7aUNBS1k7RUFBQTs7RUFDVjs7RUFFQSxVQUFNMnJCLFlBQVksR0FBRzFpQixHQUFHLENBQUM0SCxRQUFKLENBQWEsS0FBS3pCLFVBQWxCLEVBQThCLEtBQUtvYyxhQUFuQyxDQUFyQjtFQUNBRyxNQUFBQSxZQUFZLENBQUN2ekIsT0FBYixDQUFxQixVQUFDd3pCLFdBQUQsRUFBaUI7RUFDcEMsWUFBTUMsUUFBUSxHQUFHNWlCLEdBQUcsQ0FBQzNTLEtBQUosQ0FBVXMxQixXQUFWLEVBQXVCLE1BQUksQ0FBQ0UsY0FBTCxFQUF2QixDQUFqQjtFQUNBLFlBQU1DLFNBQVMsR0FBRzlpQixHQUFHLENBQUMzUyxLQUFKLENBQVVzMUIsV0FBVixFQUF1QixNQUFJLENBQUNJLFlBQUwsRUFBdkIsQ0FBbEI7O0VBQ0EsUUFBQSxNQUFJLENBQUNDLFlBQUwsQ0FBa0JGLFNBQWxCLEVBQTZCSCxXQUE3Qjs7RUFDQUMsUUFBQUEsUUFBUSxDQUFDbGdCLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFlBQU07RUFDdkMsVUFBQSxNQUFJLENBQUN1Z0IsV0FBTCxDQUFpQk4sV0FBakIsRUFBOEJDLFFBQTlCLEVBQXdDRSxTQUF4QztFQUNELFNBRkQ7RUFHRCxPQVBEO0VBU0EsYUFBTyxJQUFQO0VBQ0Q7OzsrQkFFUy8zQixNQUFNO0VBQ2QscUdBQXNCSSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCTCxJQUFsQixFQUF3QjtFQUM1Q2lLLFFBQUFBLFFBQVEsRUFBRSxLQUFLK0I7RUFENkIsT0FBeEIsQ0FBdEI7RUFHRDtFQUVEOzs7Ozs7Ozs7a0NBTWFtc0IsV0FBV04sVUFBVUUsV0FBVztFQUMzQyxVQUFNdnlCLEtBQUssR0FBRyxJQUFJcVQsY0FBSixDQUFtQixLQUFLdWYsV0FBTCxDQUFpQkQsU0FBakIsSUFBOEIsWUFBOUIsR0FBNkMsY0FBaEUsRUFDWDdlLFVBRFcsQ0FDQTtFQUNWdE4sUUFBQUEsZ0JBQWdCLEVBQUUsS0FBS0EsZ0JBRGI7RUFFVmxELFFBQUFBLFFBQVEsRUFBRSt1QixRQUFRLENBQUN2YSxPQUFULENBQWlCeFU7RUFGakIsT0FEQSxDQUFkO0VBS0FxdkIsTUFBQUEsU0FBUyxDQUFDcmhCLFNBQVYsQ0FBb0JtSixNQUFwQixDQUEyQixLQUFLeVgsY0FBaEM7RUFDQSxXQUFLTyxZQUFMLENBQWtCRixTQUFsQixFQUE2QkksU0FBN0I7RUFDQU4sTUFBQUEsUUFBUSxDQUFDeGdCLFlBQVQsQ0FBc0IsZUFBdEIsRUFBdUMsS0FBSytnQixXQUFMLENBQWlCRCxTQUFqQixJQUE4QixPQUE5QixHQUF3QyxNQUEvRTtFQUNBLFdBQUszbEIsaUJBQUwsQ0FBdUJzTCxNQUF2QixDQUE4QnRZLEtBQTlCO0VBQ0Q7RUFFRDs7Ozs7Ozs7a0NBS2EyeUIsV0FBVztFQUN0QixVQUFJLENBQUNBLFNBQUwsRUFBZ0I7RUFDZCxlQUFPLEtBQVA7RUFDRDs7RUFFRCxhQUFPQSxTQUFTLENBQUNyaEIsU0FBVixDQUFvQjJJLFFBQXBCLENBQTZCLEtBQUtpWSxjQUFsQyxDQUFQO0VBQ0Q7RUFFRDs7Ozs7Ozs7bUNBS2NXLFVBQVVGLFdBQVc7RUFDakNFLE1BQUFBLFFBQVEsQ0FBQ2xoQixLQUFULENBQWVzWSxNQUFmLGFBQTJCLEtBQUsySSxXQUFMLENBQWlCRCxTQUFqQixJQUE4QixDQUE5QixHQUFrQ0UsUUFBUSxDQUFDQyxZQUF0RTtFQUNEO0VBRUQ7Ozs7Ozs7O29DQUtldGIsT0FBTztFQUNwQix1QkFBVSxLQUFLd2EsYUFBZixTQUErQnhhLEtBQS9CO0VBQ0Q7RUFFRDs7Ozs7Ozt1Q0FJa0I7RUFDaEIsYUFBTyxLQUFLdWIsYUFBTCxDQUFtQixTQUFuQixDQUFQO0VBQ0Q7RUFFRDs7Ozs7OztxQ0FJZ0I7RUFDZCxhQUFPLEtBQUtBLGFBQUwsQ0FBbUIsT0FBbkIsQ0FBUDtFQUNEOzs7O0VBbkdEOzs7OzswQ0FLNEI3eUIsUUFBUTtFQUNsQyxhQUFPLDBCQUFQO0VBQ0Q7OzswQkFYa0I7RUFDakIsYUFBTyxrQkFBUDtFQUNEOzs7O0lBOUJvRG13Qjs7TUNFbEMyQzs7Ozs7RUFDbkIsdUNBQXdCO0VBQUE7O0VBQUEsUUFBWHY0QixJQUFXLHVFQUFKLEVBQUk7O0VBQUE7O0VBQ3RCLG1HQUFNQSxJQUFOO0VBRUEsVUFBS3FJLFFBQUwsR0FBZ0JvSCxXQUFXLENBQUNyQixpQkFBNUI7RUFDQSxVQUFLb3FCLE1BQUwsR0FBY3g0QixJQUFJLENBQUNrRyxLQUFMLElBQWMsRUFBNUI7RUFKc0I7RUFLdkI7Ozs7MkJBbUJLbEcsTUFBTTtFQUNWLDBGQUFXQSxJQUFYOztFQUNBLGFBQU8sSUFBUDtFQUNEOzs7K0JBRVNELE1BQU15SCxLQUFLO0VBQ25CLFVBQU1iLFFBQVEsR0FBRzVHLElBQUksQ0FBQzRHLFFBQUwsSUFBaUIsRUFBbEM7RUFDQSxVQUFNa0YsV0FBVyxHQUFHOUwsSUFBSSxDQUFDOEwsV0FBTCxJQUFvQkMsWUFBWSxDQUFDM0MsVUFBckQ7RUFDQSxxR0FBc0JoSixNQUFNLENBQUNDLE1BQVAsQ0FBYztFQUFFdUcsUUFBQUEsUUFBUSxFQUFFO0VBQVosT0FBZCxFQUFnQzVHLElBQWhDLEVBQXNDO0VBQzFEczJCLFFBQUFBLFdBQVcsRUFBRXhxQixXQUFXLEtBQUtDLFlBQVksQ0FBQzNDLFVBRGdCO0VBRTFEbXRCLFFBQUFBLGVBQWUsRUFBRXpxQixXQUFXLEtBQUtDLFlBQVksQ0FBQzFDLGNBRlk7RUFHMURtdEIsUUFBQUEsZ0JBQWdCLEVBQUUxcUIsV0FBVyxLQUFLQyxZQUFZLENBQUN6QyxlQUhXO0VBSTFEcXRCLFFBQUFBLGFBQWEsRUFBRS92QixRQUFRLENBQUN6RSxNQUFULEtBQW9CLENBSnVCO0VBSzFERyxRQUFBQSxLQUFLLEVBQUUsS0FBSzZQLElBQUwsQ0FBVWpDLGFBQVYsQ0FBd0JTLFFBQXhCLENBQWlDakIsV0FBVyxDQUFDaEIsS0FBN0M7RUFMbUQsT0FBdEMsQ0FBdEIsRUFNSWpILEdBTko7RUFPRDs7O2lDQUUwQjtFQUFBLFVBQWpCekgsSUFBaUIsdUVBQVYsRUFBVTtFQUFBLFVBQU5zUyxJQUFNO0VBQ3pCLFVBQUlyUyxJQUFJLEdBQUcsS0FBS3k0QixjQUFMLENBQW9CLENBQUMxNEIsSUFBSSxDQUFDLGtCQUFELENBQUwsQ0FBcEIsQ0FBWDs7RUFDQSxVQUFJQyxJQUFJLENBQUMwNEIsWUFBTCxLQUFzQixJQUExQixFQUFnQztFQUM5Qix1R0FBc0IzNEIsSUFBdEIsRUFBNEJ1M0IseUJBQXlCLENBQUNqbEIsSUFBdEQsRUFBNERyUyxJQUE1RDtFQUNEOztFQUNELHFHQUFzQkQsSUFBdEIsRUFBNEJzUyxJQUE1QixFQUFrQ3JTLElBQWxDO0VBQ0Q7OztxQ0FFZWdlLFVBQVU7RUFDeEIsVUFBTTJhLGFBQWEsR0FBRztFQUNwQjVzQixRQUFBQSxnQkFBZ0IsRUFBRWlTLFFBREU7RUFFcEJrUixRQUFBQSxXQUFXLEVBQUU7RUFGTyxPQUF0QjtFQUlBLFVBQUl6cEIsTUFBTSxHQUFHLEtBQUttVixPQUFMLENBQWFuVixNQUExQjs7RUFDQSxVQUFJQSxNQUFNLEtBQUtoRixTQUFmLEVBQTBCO0VBQ3hCLGVBQU9rNEIsYUFBUDtFQUNEOztFQUNELGFBQU94NEIsTUFBTSxDQUFDQyxNQUFQLENBQWN1NEIsYUFBZCxFQUE2QixLQUFLL2QsT0FBTCxDQUFhLFFBQWIsRUFBdUJvRCxRQUF2QixLQUFvQyxLQUFLcEQsT0FBTCxDQUFhLFFBQWIsQ0FBakUsQ0FBUDtFQUNEOzs7O0VBaEREOzs7OzswQ0FLNEJuVixRQUFRO0VBQ2xDLGFBQU8sMEJBQVA7RUFDRDs7O2lEQUVrQztFQUNqQyxhQUFPLElBQVA7RUFDRDs7OzBCQWZrQjtFQUNqQixhQUFPLGtCQUFQO0VBQ0Q7Ozs7SUFWb0RrVjs7RUNFdkQ7Ozs7O0VBSUEsSUFBTTBSLGdCQUFjLEdBQUc7RUFDckI7Ozs7O0VBS0EsY0FBWSxJQU5TOztFQVFyQjs7OztFQUlBLGNBQVksSUFaUzs7RUFjckI7Ozs7RUFJQSxrQkFBZ0IsTUFsQks7O0VBb0JyQjs7OztFQUlBLGdCQUFjLGdCQXhCTzs7RUEwQnJCOzs7O0VBSUEsZUFBYSxPQTlCUTs7RUFnQ3JCOzs7O0VBSUEsbUJBQWlCLHdCQXBDSTs7RUFzQ3JCOzs7O0VBSUEsd0JBQXNCLGdDQTFDRDs7RUE0Q3JCOzs7O0VBSUEsaUJBQWU7RUFoRE0sQ0FBdkI7RUFtREE7Ozs7OztNQUtxQnVNOzs7OztFQUNuQix5Q0FBMEI7RUFBQTs7RUFBQSxRQUFibnpCLE1BQWEsdUVBQUosRUFBSTs7RUFBQTs7RUFDeEIscUdBQU10RixNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCaXNCLGdCQUFsQixFQUFrQzVtQixNQUFsQyxDQUFOO0VBRUE7Ozs7O0VBSUEsVUFBSzRDLFFBQUwsR0FBZ0JvSCxXQUFXLENBQUNWLG1CQUE1QjtFQUVBOzs7OztFQUlBLFVBQUs4cEIsY0FBTDs7RUFid0I7RUFjekI7RUFFRDs7Ozs7Ozs7OztFQWtCQTs7Ozt1Q0FJa0I7RUFDaEIsVUFBSSxLQUFLamUsT0FBTCxDQUFhL1IsUUFBYixLQUEwQixJQUExQixJQUNBLE9BQU8sS0FBSytSLE9BQUwsQ0FBYS9SLFFBQXBCLEtBQWlDLFFBRHJDLEVBQytDO0VBQzdDLGNBQU0sSUFBSTdELHFCQUFKLENBQ0osdUVBREksRUFFSixvQkFGSSxDQUFOO0VBR0Q7RUFDRjs7O29DQUVjO0VBQ2I7RUFDQTtFQUNBLGFBQU83RSxNQUFNLENBQUMrRCxJQUFQLENBQVksS0FBS3dNLFFBQUwsRUFBWixFQUE2QnhPLE1BQTdCLEdBQXNDLENBQTdDO0VBQ0Q7OztnQ0FFVTtFQUNULFVBQUkrckIsTUFBTSxHQUFHalosR0FBRyxDQUFDM1MsS0FBSixDQUFVLEtBQUs4WSxVQUFmLEVBQTJCLEtBQUtQLE9BQUwsQ0FBYTZHLFlBQXhDLENBQWI7O0VBQ0EsVUFBSXdNLE1BQU0sS0FBSyxJQUFmLEVBQXFCO0VBQ25CO0VBQ0Q7O0VBRUQsV0FBSzZLLGFBQUwsQ0FBbUI3SyxNQUFuQjtFQUNBLFdBQUs4SyxjQUFMLENBQW9COUssTUFBcEI7RUFDRDtFQUVEOzs7Ozs7O29DQUllQSxRQUFRO0VBQUE7O0VBQ3JCLFVBQUksS0FBSzFiLGlCQUFMLEtBQTJCLElBQS9CLEVBQXFDO0VBQ25DO0VBQ0Q7O0VBRUQsVUFBTXltQixjQUFjLEdBQUdoa0IsR0FBRyxDQUFDM1MsS0FBSixDQUFVNHJCLE1BQVYsRUFBa0IsbUJBQWxCLENBQXZCO0VBQ0FqWixNQUFBQSxHQUFHLENBQUN4RCxFQUFKLENBQU93bkIsY0FBUCxFQUF1QixPQUF2QixFQUFnQyxZQUFNO0VBQ3BDLFFBQUEsTUFBSSxDQUFDem1CLGlCQUFMLENBQXVCc0wsTUFBdkIsQ0FBOEIsSUFBSWpGLGNBQUosQ0FBbUIsZ0JBQW5CLENBQTlCO0VBQ0QsT0FGRDtFQUdEO0VBRUQ7Ozs7Ozs7cUNBSWdCcVYsUUFBUTtFQUFBOztFQUN0QmpaLE1BQUFBLEdBQUcsQ0FBQ3hELEVBQUosQ0FBT3ljLE1BQVAsRUFBZSxRQUFmLEVBQXlCLFVBQUNqYSxDQUFELEVBQU87RUFDOUJBLFFBQUFBLENBQUMsQ0FBQzJPLGNBQUYsR0FEOEI7O0VBRzlCLFlBQU1zVyxRQUFRLEdBQUcsTUFBSSxDQUFDcjNCLEtBQUwsQ0FBV3FzQixNQUFYLENBQWpCOztFQUNBLFlBQU10ZSxNQUFNLEdBQUcsTUFBSSxDQUFDdXBCLGdCQUFMLENBQXNCRCxRQUF0QixDQUFmOztFQUNBLFlBQUl0cEIsTUFBSixFQUFZO0VBQ1YsaUJBQU8sTUFBSSxDQUFDbUQsUUFBTCxDQUFjLElBQUlwRCxrQkFBSixDQUF1QnVwQixRQUF2QixFQUFpQ3RwQixNQUFqQyxDQUFkLENBQVA7RUFDRDs7RUFFRCxRQUFBLE1BQUksQ0FBQ3VDLElBQUwsQ0FBVWQsY0FBVixDQUF5QjtFQUN2QixzQkFBWSxNQUFJLENBQUN3SixPQUFMLENBQWEvUixRQURGO0VBRXZCLDhCQUFvQixNQUFJLENBQUMrUixPQUFMLENBQWF1ZSxRQUZWO0VBR3ZCLGtCQUFRLGFBSGU7RUFJdkIsa0JBQVFGLFFBQVEsQ0FBQzEyQixJQUpNO0VBS3ZCLG1CQUFTMDJCLFFBQVEsQ0FBQ2x3QixLQUxLO0VBTXZCLDBCQUFnQmt3QixRQUFRLENBQUNqd0IsWUFORjtFQU92QixpQ0FBdUJpd0IsUUFBUSxDQUFDaHdCO0VBUFQsU0FBekIsV0FTUyxVQUFBckUsS0FBSyxFQUFJO0VBQ2QsVUFBQSxNQUFJLENBQUNrTyxRQUFMLENBQ0UsSUFBSXBELGtCQUFKLENBQXVCdXBCLFFBQXZCLEVBQWlDO0VBQy9CLHVCQUFXO0VBRG9CLFdBQWpDLENBREY7O0VBS0EsZ0JBQU1yMEIsS0FBTjtFQUNELFNBaEJIO0VBaUJELE9BMUJEO0VBMkJEO0VBRUQ7Ozs7Ozs7Ozs0QkFNT3FwQixRQUFRO0VBQ2IsVUFBTW1MLFdBQVcsR0FBR3BrQixHQUFHLENBQUM0SCxRQUFKLENBQWFxUixNQUFiLEVBQXFCLG9CQUFyQixDQUFwQjs7RUFDQSxVQUFJLENBQUNtTCxXQUFELElBQWdCQSxXQUFXLENBQUNsM0IsTUFBWixLQUF1QixDQUEzQyxFQUE4QztFQUM1QyxlQUFPLEVBQVA7RUFDRDs7RUFFRCxVQUFJbTNCLEdBQUcsR0FBRyxFQUFWOztFQUNBLFdBQUssSUFBSXAzQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHbTNCLFdBQVcsQ0FBQ2wzQixNQUFoQyxFQUF3Q0QsQ0FBQyxFQUF6QyxFQUE2QztFQUMzQyxZQUFJdUYsR0FBRyxHQUFHNHhCLFdBQVcsQ0FBQ24zQixDQUFELENBQVgsQ0FBZU8sS0FBekI7O0VBQ0EsWUFBSTQyQixXQUFXLENBQUNuM0IsQ0FBRCxDQUFYLENBQWVvUSxJQUFmLEtBQXdCLFVBQXhCLElBQXNDN0ssR0FBRyxLQUFLLE1BQWxELEVBQTBEO0VBQ3hEQSxVQUFBQSxHQUFHLEdBQUcsSUFBTjtFQUNEOztFQUNENnhCLFFBQUFBLEdBQUcsQ0FBQ0QsV0FBVyxDQUFDbjNCLENBQUQsQ0FBWCxDQUFlTSxJQUFoQixDQUFILEdBQTJCaUYsR0FBM0I7RUFDRDs7RUFFRCxhQUFPNnhCLEdBQVA7RUFDRDtFQUVEOzs7Ozs7Ozt1Q0FLa0JKLFVBQVU7RUFDMUIsVUFBSXRwQixNQUFNLEdBQUcsRUFBYjs7RUFDQSxVQUFJLENBQUNzcEIsUUFBUSxDQUFDbHdCLEtBQVYsSUFBbUIsT0FBT2t3QixRQUFRLENBQUNsd0IsS0FBaEIsS0FBMEIsUUFBakQsRUFBMkQ7RUFDekQ0RyxRQUFBQSxNQUFNLENBQUMsT0FBRCxDQUFOLEdBQWtCLHdCQUFsQjtFQUNEOztFQUVELFVBQUksQ0FBQ3NwQixRQUFRLENBQUNycEIsYUFBVixJQUEyQnFwQixRQUFRLENBQUNycEIsYUFBVCxLQUEyQixJQUExRCxFQUFnRTtFQUM5REQsUUFBQUEsTUFBTSxDQUFDLGVBQUQsQ0FBTixHQUEwQixpREFBMUI7RUFDRDs7RUFFRCxVQUFJLENBQUNzcEIsUUFBUSxDQUFDandCLFlBQVYsSUFBMEIsT0FBT2l3QixRQUFRLENBQUNqd0IsWUFBaEIsS0FBaUMsUUFBL0QsRUFBeUU7RUFDdkUyRyxRQUFBQSxNQUFNLENBQUMsY0FBRCxDQUFOLEdBQXlCLDRCQUF6QjtFQUNEOztFQUVELGFBQU94UCxNQUFNLENBQUMrRCxJQUFQLENBQVl5TCxNQUFaLEVBQW9Cek4sTUFBcEIsR0FBNkIsQ0FBN0IsR0FBaUN5TixNQUFqQyxHQUEwQyxJQUFqRDtFQUNEOzs7MENBdkkyQmxLLFFBQVE7RUFDbEMsYUFBTyw4QkFBUDtFQUNEO0VBRUQ7Ozs7Ozs7OzBCQUttQjtFQUNqQixhQUFPLGNBQVA7RUFDRDs7OztJQWpDc0RrVjs7TUNyRXBDMmU7OztFQUNuQjs7Ozs7Ozs7RUFRQSxtQkFBYTd6QixNQUFiLEVBQXFCO0VBQUE7O0VBQ25COzs7RUFHQSxTQUFLbEQsSUFBTCxHQUFZa0QsTUFBTSxDQUFDbEQsSUFBbkI7RUFDQTs7OztFQUdBLFNBQUtnM0IsSUFBTCxHQUFZOXpCLE1BQU0sQ0FBQzh6QixJQUFuQjtFQUNBOzs7O0VBR0EsU0FBS0MsZUFBTCxHQUF1Qi96QixNQUFNLENBQUMrekIsZUFBOUI7RUFDQTs7Ozs7RUFJQSxTQUFLQyxPQUFMLEdBQWVoMEIsTUFBTSxDQUFDZzBCLE9BQVAsSUFBa0IsV0FBakM7RUFDQTs7OztFQUdBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS0MsY0FBTCxFQUFoQjtFQUNEOzs7O3VDQUVpQjtFQUNoQixVQUFJLEtBQUtILGVBQVQsRUFBMEI7RUFDeEIsZUFBTyxLQUFLQSxlQUFaO0VBQ0Q7O0VBRUQsaUNBQW1CLEtBQUtELElBQXhCO0VBQ0Q7RUFFRDs7Ozs7OytCQUdVO0VBQ1Isc0NBQXdCLEtBQUtFLE9BQTdCLHFEQUE0RSxLQUFLQyxRQUFqRjtFQUNEOzs7Ozs7QUM3Q0gsa0JBQWUsSUFBSUosT0FBSixDQUFZO0VBQ3pCLzJCLEVBQUFBLElBQUksRUFBRSxPQURtQjtFQUV6QmszQixFQUFBQSxPQUFPLEVBQUUsV0FGZ0I7RUFHekJGLEVBQUFBLElBQUksRUFBRTtFQUhtQixDQUFaLENBQWY7O0FDQUEsb0JBQWUsSUFBSUQsT0FBSixDQUFZO0VBQ3pCLzJCLEVBQUFBLElBQUksRUFBRSxTQURtQjtFQUV6QmczQixFQUFBQSxJQUFJLEVBQUU7RUFGbUIsQ0FBWixDQUFmOztBQ0FBLHFCQUFlLElBQUlELE9BQUosQ0FBWTtFQUN6Qi8yQixFQUFBQSxJQUFJLEVBQUUsVUFEbUI7RUFFekJnM0IsRUFBQUEsSUFBSSxFQUFFO0VBRm1CLENBQVosQ0FBZjs7QUNBQSxnQkFBZSxJQUFJRCxPQUFKLENBQVk7RUFDekIvMkIsRUFBQUEsSUFBSSxFQUFFLEtBRG1CO0VBRXpCZzNCLEVBQUFBLElBQUksRUFBRTtFQUZtQixDQUFaLENBQWY7O0FDQUEsdUJBQWUsSUFBSUQsT0FBSixDQUFZO0VBQ3pCLzJCLEVBQUFBLElBQUksRUFBRSxZQURtQjtFQUV6QmczQixFQUFBQSxJQUFJLEVBQUU7RUFGbUIsQ0FBWixDQUFmOztBQ0FBLHFCQUFlLElBQUlELE9BQUosQ0FBWTtFQUN6Qi8yQixFQUFBQSxJQUFJLEVBQUUsVUFEbUI7RUFFekJnM0IsRUFBQUEsSUFBSSxFQUFFO0VBRm1CLENBQVosQ0FBZjs7QUNBQSxvQkFBZSxJQUFJRCxPQUFKLENBQVk7RUFDekIvMkIsRUFBQUEsSUFBSSxFQUFFLFNBRG1CO0VBRXpCZzNCLEVBQUFBLElBQUksRUFBRTtFQUZtQixDQUFaLENBQWY7O0FDQUEsaUJBQWUsSUFBSUQsT0FBSixDQUFZO0VBQ3pCLzJCLEVBQUFBLElBQUksRUFBRSxNQURtQjtFQUV6QmczQixFQUFBQSxJQUFJLEVBQUU7RUFGbUIsQ0FBWixDQUFmOztBQ0FBLHNCQUFlLElBQUlELE9BQUosQ0FBWTtFQUN6Qi8yQixFQUFBQSxJQUFJLEVBQUUsV0FEbUI7RUFFekJnM0IsRUFBQUEsSUFBSSxFQUFFO0VBRm1CLENBQVosQ0FBZjs7QUNBQSxrQkFBZSxJQUFJRCxPQUFKLENBQVk7RUFDekIvMkIsRUFBQUEsSUFBSSxFQUFFLE9BRG1CO0VBRXpCazNCLEVBQUFBLE9BQU8sRUFBRSxVQUZnQjtFQUd6QkQsRUFBQUEsZUFBZTtFQUhVLENBQVosQ0FBZjs7QUNBQSxtQkFBZSxJQUFJRixPQUFKLENBQVk7RUFDekIvMkIsRUFBQUEsSUFBSSxFQUFFLFFBRG1CO0VBRXpCazNCLEVBQUFBLE9BQU8sRUFBRSxXQUZnQjtFQUd6QkYsRUFBQUEsSUFBSSxFQUFFO0VBSG1CLENBQVosQ0FBZjs7QUNBQSw0QkFBZSxJQUFJRCxPQUFKLENBQVk7RUFDekIvMkIsRUFBQUEsSUFBSSxFQUFFLGtCQURtQjtFQUV6QmczQixFQUFBQSxJQUFJLEVBQUU7RUFGbUIsQ0FBWixDQUFmOztBQ0FBLG1CQUFlLElBQUlELE9BQUosQ0FBWTtFQUN6Qi8yQixFQUFBQSxJQUFJLEVBQUUsUUFEbUI7RUFFekJnM0IsRUFBQUEsSUFBSSxFQUFFO0VBRm1CLENBQVosQ0FBZjs7QUNBQSxpQkFBZSxJQUFJRCxPQUFKLENBQVk7RUFDekIvMkIsRUFBQUEsSUFBSSxFQUFFLE1BRG1CO0VBRXpCZzNCLEVBQUFBLElBQUksRUFBRTtFQUZtQixDQUFaLENBQWY7O0FDQUEsbUJBQWUsSUFBSUQsT0FBSixDQUFZO0VBQ3pCLzJCLEVBQUFBLElBQUksRUFBRSxRQURtQjtFQUV6QmczQixFQUFBQSxJQUFJLEVBQUU7RUFGbUIsQ0FBWixDQUFmOztBQ0FBLGtCQUFlLElBQUlELE9BQUosQ0FBWTtFQUN6Qi8yQixFQUFBQSxJQUFJLEVBQUUsT0FEbUI7RUFFekJnM0IsRUFBQUEsSUFBSSxFQUFFO0VBRm1CLENBQVosQ0FBZjs7QUNBQSxnQkFBZSxJQUFJRCxPQUFKLENBQVk7RUFDekIvMkIsRUFBQUEsSUFBSSxFQUFFLEtBRG1CO0VBRXpCazNCLEVBQUFBLE9BQU8sRUFBRSxXQUZnQjtFQUd6QkYsRUFBQUEsSUFBSSxFQUFFO0VBSG1CLENBQVosQ0FBZjs7QUNBQSxxQkFBZSxJQUFJRCxPQUFKLENBQVk7RUFDekIvMkIsRUFBQUEsSUFBSSxFQUFFLFVBRG1CO0VBRXpCZzNCLEVBQUFBLElBQUksRUFBRTtFQUZtQixDQUFaLENBQWY7O0FDQUEsb0JBQWUsSUFBSUQsT0FBSixDQUFZO0VBQ3pCLzJCLEVBQUFBLElBQUksRUFBRSxTQURtQjtFQUV6QmszQixFQUFBQSxPQUFPLEVBQUUsU0FGZ0I7RUFHekJELEVBQUFBLGVBQWU7RUFIVSxDQUFaLENBQWY7O0FDQUEsb0JBQWUsSUFBSUYsT0FBSixDQUFZO0VBQ3pCLzJCLEVBQUFBLElBQUksRUFBRSxTQURtQjtFQUV6QmczQixFQUFBQSxJQUFJLEVBQUU7RUFGbUIsQ0FBWixDQUFmOztBQ0FBLGlCQUFlLElBQUlELE9BQUosQ0FBWTtFQUN6Qi8yQixFQUFBQSxJQUFJLEVBQUUsTUFEbUI7RUFFekJrM0IsRUFBQUEsT0FBTyxFQUFFLFdBRmdCO0VBR3pCRixFQUFBQSxJQUFJLEVBQUU7RUFIbUIsQ0FBWixDQUFmOztBQ0FBLGdCQUFlLElBQUlELE9BQUosQ0FBWTtFQUN6Qi8yQixFQUFBQSxJQUFJLEVBQUUsS0FEbUI7RUFFekJrM0IsRUFBQUEsT0FBTyxFQUFFLFdBRmdCO0VBR3pCRixFQUFBQSxJQUFJLEVBQUU7RUFIbUIsQ0FBWixDQUFmOztBQ0FBLGlCQUFlLElBQUlELE9BQUosQ0FBWTtFQUN6Qi8yQixFQUFBQSxJQUFJLEVBQUUsTUFEbUI7RUFFekJnM0IsRUFBQUEsSUFBSSxFQUFFO0VBRm1CLENBQVosQ0FBZjs7QUNBQSxzQkFBZSxJQUFJRCxPQUFKLENBQVk7RUFDekIvMkIsRUFBQUEsSUFBSSxFQUFFLFlBRG1CO0VBRXpCazNCLEVBQUFBLE9BQU8sRUFBRSxXQUZnQjtFQUd6QkYsRUFBQUEsSUFBSSxFQUFFO0VBSG1CLENBQVosQ0FBZjs7QUNBQSxpQkFBZSxJQUFJRCxPQUFKLENBQVk7RUFDekIvMkIsRUFBQUEsSUFBSSxFQUFFLFNBRG1CO0VBRXpCazNCLEVBQUFBLE9BQU8sRUFBRSxXQUZnQjtFQUd6QkYsRUFBQUEsSUFBSSxFQUFFO0VBSG1CLENBQVosQ0FBZjs7RUN5QkEsSUFBTUssVUFBVSxHQUFHLENBQ2pCQyxTQURpQixFQUVqQkMsV0FGaUIsRUFHakJDLFlBSGlCLEVBSWpCQyxPQUppQixFQUtqQkMsY0FMaUIsRUFNakJDLFlBTmlCLEVBT2pCQyxXQVBpQixFQVFqQkMsUUFSaUIsRUFTakJDLGFBVGlCLEVBVWpCQyxTQVZpQixFQVdqQkMsVUFYaUIsRUFZakJDLG1CQVppQixFQWFqQkMsVUFiaUIsRUFjakJDLFFBZGlCLEVBZWpCQyxVQWZpQixFQWdCakJDLFNBaEJpQixFQWlCakJDLE9BakJpQixFQWtCakJDLFlBbEJpQixFQW1CakJDLFdBbkJpQixFQW9CakJDLFdBcEJpQixFQXFCakJDLFFBckJpQixFQXNCakJDLE9BdEJpQixFQXVCakJDLFFBdkJpQixFQXdCakJDLGFBeEJpQixDQUFuQjtFQTJCQSxJQUFNQyxLQUFLLEdBQUcsRUFBZDtFQUVBekIsVUFBVSxDQUFDejFCLE9BQVgsQ0FBbUIsVUFBQWd0QixJQUFJLEVBQUk7RUFDekJrSyxFQUFBQSxLQUFLLENBQUNsSyxJQUFJLENBQUM1dUIsSUFBTixDQUFMLEdBQW1CNHVCLElBQUksQ0FBQ21LLE1BQUwsRUFBbkI7RUFDRCxDQUZEO0VBSUFELEtBQUssV0FBTCxHQUFnQkUsUUFBUSxDQUFDRCxNQUFULEVBQWhCOztNQ3REcUJFOzs7OztFQUNuQjs7Ozs7OztFQU9BLDJCQUF3QjtFQUFBOztFQUFBLFFBQVh4N0IsSUFBVyx1RUFBSixFQUFJOztFQUFBOztFQUN0Qix1RkFBTUEsSUFBTjtFQUVBOzs7OztFQUlBLFVBQUt5N0IsUUFBTCxHQUFnQno3QixJQUFJLENBQUN5N0IsUUFBTCxJQUFpQixTQUFqQztFQUVBOzs7OztFQUlBLFVBQUtDLFVBQUwsR0FBa0IxN0IsSUFBSSxDQUFDMDdCLFVBQUwsSUFBbUIsSUFBckM7RUFDQTs7Ozs7RUFJQSxVQUFLQyxPQUFMLEdBQWUzN0IsSUFBSSxDQUFDMjdCLE9BQUwsSUFBZ0IsSUFBL0I7RUFsQnNCO0VBbUJ2QjtFQUVEOzs7Ozs7Ozs7RUEwQ0E7Ozs7OytCQUtVNTdCLE1BQU07RUFDZCx5RkFBc0JJLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTCxJQUFkLEVBQW9CO0VBQ3hDbUssUUFBQUEsS0FBSyxFQUFFLEtBQUtBLEtBRDRCO0VBRXhDM0gsUUFBQUEsSUFBSSxFQUFFLEtBQUtrNUIsUUFBTCxHQUFnQixLQUFLQSxRQUFyQixHQUFnQztFQUZFLE9BQXBCLENBQXRCO0VBSUQ7OzswQkFoRFk7RUFDWCxVQUFJLEtBQUtDLFVBQVQsRUFBcUI7RUFDbkIsZUFBTyxLQUFLQSxVQUFaO0VBQ0Q7O0VBRUQsVUFBSSxLQUFLQyxPQUFULEVBQWtCO0VBQ2hCLG9DQUFvQixLQUFLQSxPQUF6QjtFQUNEOztFQUVELFVBQUlOLEtBQUssQ0FBQyxLQUFLSSxRQUFOLENBQVQsRUFBMEI7RUFDeEIsZUFBT0osS0FBSyxDQUFDLEtBQUtJLFFBQU4sQ0FBWjtFQUNEOztFQUVELGFBQU9KLEtBQUssV0FBWjtFQUNEOzs7O0VBTUQ7Ozs7OzBDQUs0QjUxQixRQUFRO0VBQ2xDLGFBQU8sWUFBUDtFQUNEO0VBRUQ7Ozs7Ozs7O2lEQUttQztFQUNqQyxhQUFPLElBQVA7RUFDRDs7OzBCQXBCa0I7RUFDakIsYUFBTyxlQUFQO0VBQ0Q7Ozs7SUFuRHdDa1Y7O0VDTDNDO0FBRUEsRUFpQ08sSUFBTWloQixpQkFBaUIsR0FBRyxJQUFJbnFCLGdCQUFKO0VBQUEsQ0FFOUJvcUIsUUFGOEIsQ0FFckJsaEIsU0FGcUI7RUFBQSxDQUs5QmtoQixRQUw4QixDQUtyQnZkLG1CQUxxQjtFQUFBLENBUTlCdWQsUUFSOEIsQ0FRckJ4YSxlQVJxQixFQVM5QndhLFFBVDhCLENBU3JCclkscUJBVHFCLEVBVTlCcVksUUFWOEIsQ0FVckI3VyxxQkFWcUI7RUFBQSxDQWE5QjZXLFFBYjhCLENBYXJCelUsa0JBYnFCLEVBYzlCeVUsUUFkOEIsQ0FjckJsVCxzQkFkcUIsRUFlOUJrVCxRQWY4QixDQWVyQi9SLG9CQWZxQixFQWdCOUIrUixRQWhCOEIsQ0FnQnJCL1Esd0JBaEJxQixFQWlCOUIrUSxRQWpCOEIsQ0FpQnJCOVAsdUJBakJxQixFQWtCOUI4UCxRQWxCOEIsQ0FrQnJCalAsb0JBbEJxQjtFQUFBLENBcUI5QmlQLFFBckI4QixDQXFCckI3TixxQkFyQnFCLEVBc0I5QjZOLFFBdEI4QixDQXNCckJ0RCx5QkF0QnFCLEVBdUI5QnNELFFBdkI4QixDQXVCckJqRyxnQkF2QnFCLEVBd0I5QmlHLFFBeEI4QixDQXdCckI5TSxvQkF4QnFCLEVBeUI5QjhNLFFBekI4QixDQXlCckJ2RSx5QkF6QnFCLEVBMEI5QnVFLFFBMUI4QixDQTBCckIxTSw0QkExQnFCLEVBMkI5QjBNLFFBM0I4QixDQTJCckJ6TSx5QkEzQnFCLEVBNEI5QnlNLFFBNUI4QixDQTRCckJ4TSwwQkE1QnFCLEVBOEI5QndNLFFBOUI4QixDQThCckI3RyxZQTlCcUI7RUFBQSxDQWlDOUI2RyxRQWpDOEIsQ0FpQ3JCakQsMkJBakNxQjtFQUFBLENBb0M5QmlELFFBcEM4QixDQW9DckJMLGFBcENxQixDQUExQjs7RUM5QlA7Ozs7OztNQUtxQk07OztFQUNuQiwwQkFBYXIyQixNQUFiLEVBQXFCO0VBQUE7O0VBQ25CLFFBQUksQ0FBQ3EyQixjQUFjLENBQUNwcUIsV0FBZixDQUEyQixJQUEzQixDQUFMLEVBQXVDO0VBQ3JDLGFBQU9vcUIsY0FBYyxDQUFDbnFCLFdBQWYsRUFBUDtFQUNEO0VBRUQ7Ozs7Ozs7RUFLQSxTQUFLb3FCLFlBQUwsR0FBb0J0MkIsTUFBTSxDQUFDdTJCLFdBQVAsSUFBc0IxNkIsc0JBQTFDO0VBRUEsU0FBS3FTLFVBQUwsR0FBa0IsRUFBbEI7O0VBQ0EsU0FBSzBjLFNBQUwsR0FBaUIsWUFBWSxFQUE3Qjs7RUFDQSxTQUFLNEwsS0FBTDtFQUNEOzs7OzhCQWNRO0VBQ1AsV0FBS0MsY0FBTDtFQUNEOzs7dUNBRWlCO0VBQUE7O0VBQ2hCO0VBQ0EsVUFBSTVsQixJQUFJLEdBQUd0QixHQUFHLENBQUMzUyxLQUFKLENBQVUseUJBQVYsQ0FBWDs7RUFDQSxVQUFJaVUsSUFBSixFQUFVO0VBQ1I7RUFDRCxPQUxlO0VBUWhCOzs7RUFDQSxVQUFJNmxCLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7RUFDL0IsWUFBSXRLLE1BQU0sR0FBRy9jLEdBQUcsQ0FBQ29HLFFBQUosQ0FBYSxRQUFiLEVBQXVCO0VBQ2xDaFYsVUFBQUEsRUFBRSxFQUFFLHdCQUQ4QjtFQUVsQzRyQixVQUFBQSxNQUFNLEVBQUVvSyxPQUYwQjtFQUdsQ0UsVUFBQUEsT0FBTyxFQUFFRCxNQUh5QjtFQUlsQ3BLLFVBQUFBLEtBQUssRUFBRSxJQUoyQjtFQUtsQ0MsVUFBQUEsR0FBRyxFQUFFLEtBQUksQ0FBQzZKO0VBTHdCLFNBQXZCLENBQWI7RUFRQS9tQixRQUFBQSxHQUFHLENBQUMxRSxNQUFKLENBQVcsTUFBWCxFQUFtQnloQixNQUFuQjtFQUNELE9BVkQsRUFXR3pyQixJQVhILENBV1EsVUFBQ0MsUUFBRCxFQUFjO0VBQ3BCO0VBQ0VnMkIsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0NBQVo7RUFDRCxPQWRIO0VBZUEsYUFBTyxJQUFQO0VBQ0Q7RUFFRDs7Ozs7Ozs7OytCQU1VaHBCLFdBQVc7RUFDbkIsV0FBS0csVUFBTCxHQUFrQkgsU0FBbEIsQ0FEbUI7O0VBSW5CLFdBQUs2YyxTQUFMLENBQWUsS0FBSzFjLFVBQXBCOztFQUNBLGFBQU8sSUFBUDtFQUNEOzs7K0JBRVNwQyxJQUFJO0VBQ1osV0FBSzhlLFNBQUwsR0FBaUI5ZSxFQUFqQjtFQUNBLGFBQU8sSUFBUDtFQUNEOzs7MEJBRUl3QyxjQUFjO0VBQ2pCLGFBQU8sS0FBS0osVUFBTCxDQUFnQkksWUFBaEIsQ0FBUDtFQUNEO0VBRUQ7Ozs7OztxQ0FHZ0I7RUFDZCxhQUFPLEtBQUtKLFVBQVo7RUFDRDs7O2tDQXZFbUJQLFVBQVU7RUFDNUIsVUFBSSxDQUFDLEtBQUtBLFFBQVYsRUFBb0I7RUFDbEIsYUFBS0EsUUFBTCxHQUFnQkEsUUFBaEI7RUFDQSxlQUFPLElBQVA7RUFDRDs7RUFDRCxhQUFPLEtBQVA7RUFDRDs7O29DQUVxQjtFQUNwQixhQUFPLEtBQUtBLFFBQVo7RUFDRDs7Ozs7O0VDdENIOztFQ09BOzs7O01BR3FCcXBCOzs7RUFDbkIseUJBQWFqNUIsTUFBYixFQUFxQmtDLFVBQXJCLEVBQWlDO0VBQUE7O0VBQy9COzs7O0VBSUEsU0FBS2xDLE1BQUwsR0FBY0EsTUFBZDtFQUVBOzs7OztFQUlBLFNBQUtrQyxVQUFMLEdBQWtCQSxVQUFsQjtFQUNEO0VBRUQ7Ozs7Ozs7OzZCQUlRZzNCLEtBQUs7RUFDWCxVQUFJLEVBQUVBLEdBQUcsWUFBWXQ0QixnQkFBakIsS0FBc0NzNEIsR0FBRyxDQUFDaDRCLFFBQTlDLEVBQXdEO0VBQ3REO0VBQ0Q7O0VBRURnNEIsTUFBQUEsR0FBRyxDQUFDaDRCLFFBQUosR0FBZSxJQUFmO0VBRUEsVUFBTXpFLE9BQU8sR0FBRyxJQUFJZ0QsVUFBSixDQUFlO0VBQzdCSyxRQUFBQSxRQUFRLEVBQUUsZ0NBRG1CO0VBRTdCRSxRQUFBQSxNQUFNLEVBQUUsS0FBS0EsTUFGZ0I7RUFHN0JFLFFBQUFBLE9BQU8sRUFBRSxRQUhvQjtFQUk3QjVDLFFBQUFBLE1BQU0sRUFBRTtFQUNOLG1CQUFTNDdCLEdBQUcsQ0FBQ0MsTUFBSixFQURIO0VBRU4sd0JBQWN2N0IsV0FGUjtFQUdOLHdCQUFjLEtBQUtzRTtFQUhiO0VBSnFCLE9BQWYsQ0FBaEI7RUFXQXpGLE1BQUFBLE9BQU8sQ0FBQzBELEdBQVIsWUFDUzQ0QixPQUFPLENBQUNHLEdBRGpCO0VBR0EsYUFBT0EsR0FBUDtFQUNEOzs7Ozs7RUNoREg7O01BRXFCRTs7O0VBQ25CLCtCQUEwQjtFQUFBOztFQUFBLFFBQWJuM0IsTUFBYSx1RUFBSixFQUFJOztFQUFBOztFQUN4Qjs7OztFQUlBLFNBQUtoRSxPQUFMLEdBQWUsSUFBSUQsWUFBSixDQUFpQkUsTUFBTSxDQUFDcUMsUUFBUCxDQUFnQmxDLE1BQWhCLENBQXVCZ0csU0FBdkIsQ0FBaUMsQ0FBakMsQ0FBakIsQ0FBZjtFQUVBOzs7OztFQUlBLFNBQUtnMUIsYUFBTCxHQUFxQixJQUFyQjtFQUVBOzs7OztFQUlBLFNBQUtDLGVBQUwsR0FBdUJyM0IsTUFBTSxDQUFDczNCLGNBQVAsSUFBeUIsWUFBWSxFQUE1RDtFQUVBOzs7Ozs7RUFJQSxTQUFLQyxjQUFMLEdBQXNCdjNCLE1BQU0sQ0FBQ3czQixhQUFQLElBQXdCLFlBQVksRUFBMUQ7O0VBRUF2N0IsSUFBQUEsTUFBTSxDQUFDdzdCLFVBQVAsR0FBb0IsWUFBTTtFQUN4QixNQUFBLEtBQUksQ0FBQ3o3QixPQUFMLEdBQWUsSUFBSUQsWUFBSixDQUFpQkUsTUFBTSxDQUFDcUMsUUFBUCxDQUFnQmxDLE1BQWhCLENBQXVCZ0csU0FBdkIsQ0FBaUMsQ0FBakMsQ0FBakIsQ0FBZjs7RUFDQSxNQUFBLEtBQUksQ0FBQ3MxQixhQUFMLENBQW1CLEtBQUksQ0FBQ0wsZUFBeEI7O0VBQ0EsTUFBQSxLQUFJLENBQUNLLGFBQUwsQ0FBbUIsS0FBSSxDQUFDSCxjQUF4QjtFQUNELEtBSkQ7RUFLRDtFQUVEOzs7Ozs7Ozs7MEJBS0s5N0IsS0FBS25CLE1BQU07RUFDZCxVQUFJLE9BQU9tQixHQUFQLEtBQWUsUUFBbkIsRUFBNkI7RUFDM0IsY0FBTSxJQUFJa0UsbUJBQUosQ0FBd0IsbUNBQXhCLEVBQTZEbEUsR0FBN0QsRUFBa0VuQixJQUFsRSxDQUFOO0VBQ0Q7O0VBRUQsVUFBSXE5QixPQUFPLEdBQUdyOUIsSUFBZDs7RUFDQSxVQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7RUFDNUJxOUIsUUFBQUEsT0FBTyxHQUFHOThCLElBQUksQ0FBQ0MsU0FBTCxDQUFlUixJQUFmLENBQVY7RUFDRDs7RUFDRCxXQUFLMEIsT0FBTCxDQUFhOE8sR0FBYixDQUFpQnJQLEdBQWpCLEVBQXNCazhCLE9BQXRCOztFQUNBLFdBQUtDLGNBQUw7RUFDRDtFQUVEOzs7Ozs7OzhCQUlRbjhCLEtBQUs7RUFDWCxXQUFLTyxPQUFMLFdBQW9CUCxHQUFwQjs7RUFDQSxXQUFLbThCLGNBQUw7RUFDRDs7O3VDQUVpQjtFQUFBOztFQUNoQixVQUFJLEtBQUtSLGFBQVQsRUFBd0I7RUFDdEI5ZCxRQUFBQSxZQUFZLENBQUMsS0FBSzhkLGFBQU4sQ0FBWjtFQUNELE9BSGU7OztFQU1oQixXQUFLQSxhQUFMLEdBQXFCN2QsVUFBVSxDQUM3QixZQUFNO0VBQ0osUUFBQSxNQUFJLENBQUM2ZCxhQUFMLEdBQXFCLElBQXJCO0VBQ0FuN0IsUUFBQUEsTUFBTSxDQUFDNDdCLE9BQVAsQ0FBZUMsU0FBZixDQUF5QixJQUF6QixFQUErQixJQUEvQixhQUF5QyxNQUFJLENBQUM5N0IsT0FBTCxDQUFhdUMsUUFBYixFQUF6Qzs7RUFDQSxRQUFBLE1BQUksQ0FBQ201QixhQUFMLENBQW1CLE1BQUksQ0FBQ0wsZUFBeEI7RUFDRCxPQUw0QixFQU03QixHQU42QixDQUEvQjtFQU9EO0VBRUQ7Ozs7Ozs7O29DQUtlVSxVQUFVO0VBQ3ZCQSxNQUFBQSxRQUFRLENBQUMsS0FBS25hLE1BQUwsRUFBRCxFQUFnQixLQUFLNWhCLE9BQUwsQ0FBYXVDLFFBQWIsRUFBaEIsQ0FBUjtFQUNEO0VBRUQ7Ozs7OzsrQkFHVTtFQUNSLFVBQU15NUIsU0FBUyxHQUFHLEVBQWxCO0VBRFE7RUFBQTtFQUFBOztFQUFBO0VBRVIsNkJBQXlCLEtBQUtoOEIsT0FBTCxDQUFhb0IsT0FBYixFQUF6Qiw4SEFBaUQ7RUFBQTtFQUFBLGNBQXJDM0IsR0FBcUM7RUFBQSxjQUFoQ3NHLEdBQWdDOztFQUMvQ2kyQixVQUFBQSxTQUFTLENBQUN2OEIsR0FBRCxDQUFULEdBQWlCc0csR0FBakI7RUFDRDtFQUpPO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7O0VBS1IsYUFBT2kyQixTQUFQO0VBQ0Q7Ozs7OztFQ2xGSDs7OztNQUdNQzs7O0VBQ0oscUJBQWU7RUFBQTs7RUFDYixRQUFJLENBQUNBLE9BQU8sQ0FBQ2hzQixXQUFSLENBQW9CLElBQXBCLENBQUwsRUFBZ0M7RUFDOUIsYUFBT2dzQixPQUFPLENBQUMvckIsV0FBUixFQUFQO0VBQ0Q7RUFFRDs7Ozs7OztFQUtBLFNBQUtNLFFBQUwsR0FBZ0IsSUFBSTJDLFNBQVMsQ0FBQ0UsVUFBZCxFQUFoQjtFQUVBOzs7OztFQUlBLFNBQUs2b0IsVUFBTCxHQUFrQi9CLGlCQUFsQjtFQUVBOzs7OztFQUlBLFNBQUtnQyxRQUFMLEdBQWdCLFlBQVksRUFBNUI7RUFDRDs7OzsyQkFjS240QixRQUFRO0VBQUE7O0VBQ1osVUFBTXdLLGFBQWEsR0FBRyxJQUFJZ0ssYUFBSixFQUF0QjtFQUNBLFVBQU0vSixpQkFBaUIsR0FBRyxJQUFJMHNCLGlCQUFKLENBQXNCO0VBQzlDRyxRQUFBQSxjQUFjLEVBQUV0M0IsTUFBTSxDQUFDbzRCLGFBRHVCO0VBRTlDWixRQUFBQSxhQUFhLEVBQUUsdUJBQUFsOUIsSUFBSTtFQUFBLGlCQUFJa1EsYUFBYSxDQUFDNnRCLE1BQWQsQ0FBcUIvOUIsSUFBckIsQ0FBSjtFQUFBO0VBRjJCLE9BQXRCLENBQTFCO0VBSUFrUSxNQUFBQSxhQUFhLENBQUM2dEIsTUFBZCxDQUFxQjV0QixpQkFBaUIsQ0FBQ21ULE1BQWxCLEVBQXJCO0VBRUEsVUFBTW5SLElBQUksR0FBRyxJQUFJcEMsSUFBSixDQUFTO0VBQ3BCdE0sUUFBQUEsTUFBTSxFQUFFaUMsTUFBTSxDQUFDakMsTUFESztFQUVwQnlNLFFBQUFBLGFBQWEsRUFBRUEsYUFGSztFQUdwQkMsUUFBQUEsaUJBQWlCLEVBQUVBLGlCQUhDO0VBSXBCeEssUUFBQUEsVUFBVSxFQUFFRCxNQUFNLENBQUNDLFVBSkM7RUFLcEJzSyxRQUFBQSxlQUFlLEVBQUV2SyxNQUFNLENBQUN1SyxlQUxKO0VBTXBCcEssUUFBQUEsTUFBTSxFQUFFSCxNQUFNLENBQUNHO0VBTkssT0FBVCxDQUFiOztFQVNBLFVBQUlILE1BQU0sQ0FBQ280QixhQUFQLElBQXdCLE9BQU9wNEIsTUFBTSxDQUFDbzRCLGFBQWQsS0FBZ0MsVUFBNUQsRUFBd0U7RUFDdEVwNEIsUUFBQUEsTUFBTSxDQUFDbzRCLGFBQVAsQ0FBcUIzdEIsaUJBQWlCLENBQUNtVCxNQUFsQixFQUFyQixFQUFpRDNoQixNQUFNLENBQUNxQyxRQUFQLENBQWdCbEMsTUFBaEIsQ0FBdUJrOEIsTUFBdkIsQ0FBOEIsQ0FBOUIsQ0FBakQ7RUFDRDs7RUFFRCxXQUFLSixVQUFMLENBQ0dLLE9BREgsQ0FDVzlyQixJQURYLEVBRUcrckIsV0FGSCxDQUVlLEtBQUtoc0IsUUFGcEI7O0VBSUEsVUFBSXhNLE1BQU0sQ0FBQ3VULFVBQVgsRUFBdUI7RUFDckIsYUFBSzJrQixVQUFMLENBQWdCTyxvQkFBaEIsQ0FDRSxJQUFJbmxCLGlCQUFKLENBQ0U3RyxJQURGLEVBRUV6TSxNQUFNLENBQUNDLFVBRlQsRUFHRUQsTUFBTSxDQUFDdVQsVUFIVCxFQUlFdlQsTUFBTSxDQUFDeVYsZ0JBSlQsQ0FERjtFQU9EOztFQUVELFdBQUswaUIsUUFBTCxHQUFnQm40QixNQUFNLENBQUMwNEIsT0FBUCxJQUFrQixZQUFZLEVBQTlDOztFQUVBLFVBQUkxNEIsTUFBTSxDQUFDMjRCLFlBQVAsS0FBd0IsS0FBeEIsSUFBaUMzNEIsTUFBTSxDQUFDNDRCLGNBQTVDLEVBQTREO0VBQzFELFlBQUk1NEIsTUFBTSxDQUFDNDRCLGNBQVgsRUFBMkI7RUFDekIsZUFBS3BzQixRQUFMLENBQWNZLElBQWQsQ0FBbUJwTixNQUFNLENBQUM0NEIsY0FBMUI7RUFDRDs7RUFFRCxhQUFLVCxRQUFMOztFQUNBLGVBQU8sSUFBUDtFQUNELE9BNUNXO0VBK0NaOzs7RUFDQSxXQUFLcHFCLFNBQUwsR0FBaUIsSUFBSXNvQixjQUFKLENBQW1CO0VBQ2xDRSxRQUFBQSxXQUFXLEVBQUV2MkIsTUFBTSxDQUFDdTJCO0VBRGMsT0FBbkIsRUFFZDFMLFFBRmMsQ0FFTCxVQUFDOWMsU0FBRCxFQUFlO0VBQ3pCLFFBQUEsS0FBSSxDQUFDdkIsUUFBTCxDQUFjWSxJQUFkLENBQW1CVyxTQUFuQjs7RUFFQSxRQUFBLEtBQUksQ0FBQ29xQixRQUFMO0VBQ0QsT0FOZ0IsQ0FBakI7O0VBUUEsVUFBSSxDQUFDbjRCLE1BQU0sQ0FBQzY0QixvQkFBWixFQUFrQztFQUNoQyxhQUFLQyxjQUFMLEdBQXNCLElBQUk5QixhQUFKLENBQWtCaDNCLE1BQU0sQ0FBQ2pDLE1BQXpCLEVBQWlDaUMsTUFBTSxDQUFDQyxVQUF4QyxDQUF0QjtFQUNBaEUsUUFBQUEsTUFBTSxDQUFDZ1csZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBQTFELENBQUM7RUFBQSxpQkFBSSxLQUFJLENBQUN1cUIsY0FBTCxDQUFvQjFnQixNQUFwQixDQUEyQjdKLENBQUMsQ0FBQ3BQLEtBQTdCLENBQUo7RUFBQSxTQUFsQztFQUNBbEQsUUFBQUEsTUFBTSxDQUFDZ1csZ0JBQVAsQ0FBd0Isb0JBQXhCLEVBQThDLFVBQUExRCxDQUFDO0VBQUEsaUJBQUksS0FBSSxDQUFDdXFCLGNBQUwsQ0FBb0IxZ0IsTUFBcEIsQ0FBMkI3SixDQUFDLENBQUNwUCxLQUE3QixDQUFKO0VBQUEsU0FBL0M7RUFDRDs7RUFFRCxhQUFPLElBQVA7RUFDRDs7OytCQUVTMk0sSUFBSTtFQUNaeUQsTUFBQUEsR0FBRyxDQUFDbXBCLE9BQUosQ0FBWTVzQixFQUFaO0VBQ0Q7Ozs4QkFFUUEsSUFBSTtFQUNYLFdBQUtxc0IsUUFBTCxHQUFnQnJzQixFQUFoQjtFQUNBLGFBQU8sSUFBUDtFQUNEOzs7bUNBRWFjLE1BQU1yUyxNQUFNO0VBQ3hCLFVBQUksT0FBT0EsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtFQUM1QkEsUUFBQUEsSUFBSSxHQUFHO0VBQ0xvVixVQUFBQSxTQUFTLEVBQUVwVjtFQUROLFNBQVA7RUFHRDs7RUFFRCxXQUFLMjlCLFVBQUwsQ0FBZ0J4aEIsTUFBaEIsQ0FBdUI5SixJQUF2QixFQUE2QnJTLElBQTdCLEVBQW1DZ2MsS0FBbkM7RUFDQSxhQUFPLElBQVA7RUFDRDs7O3NDQUVnQmhjLE1BQU07RUFDckIsYUFBTyxLQUFLMjlCLFVBQUwsQ0FBZ0J4aEIsTUFBaEIsQ0FBdUIsV0FBdkIsRUFBb0NuYyxJQUFwQyxFQUEwQ2djLEtBQTFDLEVBQVA7RUFDRDs7O3FDQUVlelosTUFBTWdQLElBQUk7RUFDeEIsV0FBS1UsUUFBTCxDQUFjNEIsY0FBZCxDQUE2QnRSLElBQTdCLEVBQW1DZ1AsRUFBbkM7RUFDQSxhQUFPLElBQVA7RUFDRDs7O2tDQXhHbUI2QixVQUFVO0VBQzVCLFVBQUksQ0FBQyxLQUFLQSxRQUFWLEVBQW9CO0VBQ2xCLGFBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0VBQ0EsZUFBTyxJQUFQO0VBQ0Q7O0VBQ0QsYUFBTyxLQUFQO0VBQ0Q7OztvQ0FFcUI7RUFDcEIsYUFBTyxLQUFLQSxRQUFaO0VBQ0Q7Ozs7OztFQWlHSCxJQUFNb3JCLE9BQU8sR0FBRyxJQUFJZCxPQUFKLEVBQWhCOzs7Ozs7OzsifQ==