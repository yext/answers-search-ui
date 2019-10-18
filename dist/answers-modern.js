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
  var LIB_VERSION = 'v0.8.8';
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
     * @param {Object} query.geolocation The user's geolocation position used to bias the results
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
            geolocation = _ref.geolocation,
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
            'location': geolocation ? "".concat(geolocation.lat, ",").concat(geolocation.lng) : null,
            'radius': geolocation ? geolocation.radius : null,
            'queryId': id,
            'retrieveFacets': isDynamicFiltersEnabled,
            'locale': this._locale
          }
        });
        return request.get().then(function (response) {
          return response.json();
        });
      }
      /**
       * Search across all verticals
       * @param {string} queryString The input to search for
       * @param {Object} geolocation the user's geolocation position used to bias the results
       */

    }, {
      key: "universalSearch",
      value: function universalSearch(queryString, geolocation) {
        var request = new ApiRequest({
          endpoint: '/v2/accounts/me/answers/query',
          apiKey: this._apiKey,
          version: this._version,
          params: {
            'input': queryString,
            'answersKey': this._answersKey,
            'location': geolocation ? "".concat(geolocation.lat, ",").concat(geolocation.lng) : null,
            'radius': geolocation ? geolocation.radius : null,
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

          if (source === 'GOOGLE_CSE') {
            results.push(ResultFactory.fromGoogleCustomSearchEngine(data));
            return "continue";
          }

          if (source === 'BING_CSE') {
            results.push(ResultFactory.fromBingCustomSearchEngine(data));
            return "continue";
          }

          if (source === 'ZENDESK') {
            results.push(ResultFactory.fromZendeskSearchEngine(data));
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
    GEOLOCATION: 'geolocation',
    INTENTS: 'intents',
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
        return _ref = {}, _defineProperty(_ref, StorageKeys.QUERY_ID, response.queryId), _defineProperty(_ref, StorageKeys.NAVIGATION, Navigation.from(response.modules)), _defineProperty(_ref, StorageKeys.DIRECT_ANSWER, DirectAnswer.from(response.directAnswer, formatters)), _defineProperty(_ref, StorageKeys.UNIVERSAL_RESULTS, UniversalResults.from(response, urls, formatters)), _defineProperty(_ref, StorageKeys.INTENTS, SearchIntents.from(response.searchIntents)), _ref;
      }
    }, {
      key: "transformVertical",
      value: function transformVertical(data, formatters) {
        var _ref2;

        return _ref2 = {}, _defineProperty(_ref2, StorageKeys.QUERY_ID, data.response.queryId), _defineProperty(_ref2, StorageKeys.NAVIGATION, new Navigation()), _defineProperty(_ref2, StorageKeys.VERTICAL_RESULTS, VerticalResults.from(data.response, formatters)), _defineProperty(_ref2, StorageKeys.DYNAMIC_FILTERS, DynamicFilters.from(data.response)), _defineProperty(_ref2, StorageKeys.INTENTS, SearchIntents.from(data.response.searchIntents)), _ref2;
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
          limit: this.globalStorage.getState(StorageKeys.SEARCH_LIMIT),
          geolocation: this.globalStorage.getState(StorageKeys.GEOLOCATION)
        }, query, {
          isDynamicFiltersEnabled: this._isDynamicFiltersEnabled
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
        });
      }
    }, {
      key: "search",
      value: function search(queryString, urls) {
        var _this2 = this;

        this.globalStorage.set(StorageKeys.UNIVERSAL_RESULTS, UniversalResults.searchLoading());
        return this._searcher.universalSearch(queryString, this.globalStorage.getState(StorageKeys.GEOLOCATION)).then(function (response) {
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
            _this4._saveDataToStorage('', position);

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
       * @param {Object} position The position to save
       * @private
       */

    }, {
      key: "_saveDataToStorage",
      value: function _saveDataToStorage(query, position) {
        var filter = this._buildFilter(position);

        this.core.persistentStorage.set("".concat(StorageKeys.QUERY, ".").concat(this.name), query);
        this.core.persistentStorage.set("".concat(StorageKeys.FILTER, ".").concat(this.name), filter);
        this.core.setFilter(this.name, filter);
        this.core.globalStorage.set(StorageKeys.GEOLOCATION, {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          radius: position.coords.accuracy
        });

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2Vycy11bWQuanMiLCJzb3VyY2VzIjpbInNyYy9jb3JlL2h0dHAvaHR0cHJlcXVlc3Rlci5qcyIsInNyYy9jb3JlL2NvbnN0YW50cy5qcyIsInNyYy91aS9kb20vc2VhcmNocGFyYW1zLmpzIiwic3JjL2NvcmUvaHR0cC9hcGlyZXF1ZXN0LmpzIiwic3JjL2NvcmUvZXJyb3JzL2Vycm9ycy5qcyIsInNyYy9jb3JlL3NlYXJjaC9zZWFyY2hhcGkuanMiLCJzcmMvY29yZS9tb2RlbHMvYXV0b2NvbXBsZXRlZGF0YS5qcyIsInNyYy9jb3JlL3NlYXJjaC9hdXRvY29tcGxldGVkYXRhdHJhbnNmb3JtZXIuanMiLCJzcmMvY29yZS9zZWFyY2gvYXV0b2NvbXBsZXRlYXBpLmpzIiwic3JjL2NvcmUvc2VhcmNoL3F1ZXN0aW9uYW5zd2VyYXBpLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9zZWFyY2hzdGF0ZXMuanMiLCJzcmMvY29yZS9tb2RlbHMvcmVzdWx0LmpzIiwic3JjL2NvcmUvbW9kZWxzL3Jlc3VsdGZhY3RvcnkuanMiLCJzcmMvY29yZS9tb2RlbHMvc2VjdGlvbi5qcyIsInNyYy9jb3JlL21vZGVscy91bml2ZXJzYWxyZXN1bHRzLmpzIiwic3JjL2NvcmUvbW9kZWxzL2RpcmVjdGFuc3dlci5qcyIsInNyYy9jb3JlL21vZGVscy9uYXZpZ2F0aW9uLmpzIiwic3JjL2NvcmUvbW9kZWxzL3ZlcnRpY2FscmVzdWx0cy5qcyIsInNyYy9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMuanMiLCJzcmMvY29yZS9tb2RlbHMvZHluYW1pY2ZpbHRlcnMuanMiLCJzcmMvY29yZS9tb2RlbHMvc2VhcmNoaW50ZW50cy5qcyIsInNyYy9jb3JlL3NlYXJjaC9zZWFyY2hkYXRhdHJhbnNmb3JtZXIuanMiLCJzcmMvY29yZS9tb2RlbHMvcXVlc3Rpb25zdWJtaXNzaW9uLmpzIiwic3JjL2NvcmUvY29yZS5qcyIsInNyYy91aS9jb21wb25lbnRzL2NvbXBvbmVudG1hbmFnZXIuanMiLCJzcmMvdWkvcmVuZGVyaW5nL3JlbmRlcmVyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9oYW5kbGViYXJzcmVuZGVyZXIuanMiLCJzcmMvdWkvcmVuZGVyaW5nL2NvbnN0LmpzIiwic3JjL3VpL2RvbS9kb20uanMiLCJzcmMvY29yZS9ldmVudGVtaXR0ZXIvZXZlbnRlbWl0dGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc3RhdGUuanMiLCJzcmMvY29yZS9hbmFseXRpY3MvYW5hbHl0aWNzZXZlbnQuanMiLCJzcmMvY29yZS9hbmFseXRpY3MvYW5hbHl0aWNzcmVwb3J0ZXIuanMiLCJzcmMvY29yZS9zdG9yYWdlL21vZHVsZWRhdGEuanMiLCJzcmMvY29yZS9zdG9yYWdlL2dsb2JhbHN0b3JhZ2UuanMiLCJzcmMvY29yZS9pbmRleC5qcyIsInNyYy91aS9jb21wb25lbnRzL2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbmNvbXBvbmVudC5qcyIsInNyYy9jb3JlL21vZGVscy9maWx0ZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL2ZpbHRlcnNlYXJjaGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3NlYXJjaC9hdXRvY29tcGxldGVjb21wb25lbnQuanMiLCJzcmMvY29yZS9tb2RlbHMvZmFjZXQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcmJveGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyb3B0aW9uc2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcnMvcmFuZ2VmaWx0ZXJjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2RhdGVyYW5nZWZpbHRlcmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcnMvZHluYW1pY2ZpbHRlcnNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2dlb2xvY2F0aW9uY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9kaXJlY3RhbnN3ZXJjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9wZW9wbGVyZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9wcm92aWRlcnMvbWFwcHJvdmlkZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvcHJvdmlkZXJzL2dvb2dsZW1hcHByb3ZpZGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL3Byb3ZpZGVycy9tYXBib3htYXBwcm92aWRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9tYXBjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL2FjY29yZGlvbnJlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9xdWVzdGlvbnMvcXVlc3Rpb25zdWJtaXNzaW9uY29tcG9uZW50LmpzIiwic3JjL3VpL2ljb25zL2ljb24uanMiLCJzcmMvdWkvaWNvbnMvdGh1bWIuanMiLCJzcmMvdWkvaWNvbnMvcmVjZWlwdC5qcyIsInNyYy91aS9pY29ucy9wYW50aGVvbi5qcyIsInNyYy91aS9pY29ucy9taWMuanMiLCJzcmMvdWkvaWNvbnMvZGlyZWN0aW9ucy5qcyIsInNyYy91aS9pY29ucy9jYWxlbmRhci5qcyIsInNyYy91aS9pY29ucy9jYWxsb3V0LmpzIiwic3JjL3VpL2ljb25zL2luZm8uanMiLCJzcmMvdWkvaWNvbnMvYnJpZWZjYXNlLmpzIiwic3JjL3VpL2ljb25zL2thYm9iLmpzIiwic3JjL3VpL2ljb25zL3BlcnNvbi5qcyIsInNyYy91aS9pY29ucy9tYWduaWZ5aW5nX2dsYXNzLmpzIiwic3JjL3VpL2ljb25zL29mZmljZS5qcyIsInNyYy91aS9pY29ucy9saW5rLmpzIiwic3JjL3VpL2ljb25zL3dpbmRvdy5qcyIsInNyYy91aS9pY29ucy9waG9uZS5qcyIsInNyYy91aS9pY29ucy90YWcuanMiLCJzcmMvdWkvaWNvbnMvZG9jdW1lbnQuanMiLCJzcmMvdWkvaWNvbnMvY2hldnJvbi5qcyIsInNyYy91aS9pY29ucy9zdXBwb3J0LmpzIiwic3JjL3VpL2ljb25zL3lleHQuanMiLCJzcmMvdWkvaWNvbnMvcGluLmpzIiwic3JjL3VpL2ljb25zL2dlYXIuanMiLCJzcmMvdWkvaWNvbnMvbGlnaHRfYnVsYi5qcyIsInNyYy91aS9pY29ucy9zdGFyLmpzIiwic3JjL3VpL2ljb25zL2Nsb3NlLmpzIiwic3JjL3VpL2ljb25zL2luZGV4LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvaWNvbnMvaWNvbmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2NvbnN0LmpzIiwic3JjL3VpL3JlbmRlcmluZy90ZW1wbGF0ZWxvYWRlci5qcyIsInNyYy91aS9pbmRleC5qcyIsInNyYy9jb3JlL2Vycm9ycy9lcnJvcnJlcG9ydGVyLmpzIiwic3JjL3VpL3N0b3JhZ2UvcGVyc2lzdGVudHN0b3JhZ2UuanMiLCJzcmMvYW5zd2Vycy11bWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBtb2R1bGUgSHR0cFJlcXVlc3RlciAqL1xuXG4vKiBnbG9iYWwgZmV0Y2ggKi9cblxuLyoqXG4gKiBUeXBlcyBvZiBIVFRQIHJlcXVlc3RzXG4gKi9cbmNvbnN0IE1ldGhvZHMgPSB7XG4gIEdFVDogJ2dldCcsXG4gIFBPU1Q6ICdwb3N0JyxcbiAgUFVUOiAncHV0JyxcbiAgREVMRVRFOiAnZGVsZXRlJ1xufTtcblxuLyoqXG4gKiBIdHRwUmVxdWVzdGVyIGlzIGEgd3JhcHBlciBhcm91bmQgdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiBvZiBBSkFYXG4gKiByZWxhdGVkIG1hdHRlcnMuIEl0J3MgdXNlZCB0byBtYWtlIGFsbCB0eXBlcyBvZiBuZXR3b3JrIHJlcXVlc3RzXG4gKiBhbmQgZXhwb3NlcyBhIHByb21pc2UgaW50ZXJmYWNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwUmVxdWVzdGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIEdFVCBIVFRQIHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHByb3ZpZGUgKGdldHMgZW5jb2RlZCBpbnRvIHRoZSBVUkwpXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIENvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAqL1xuICBnZXQgKHVybCwgZGF0YSwgb3B0cykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoTWV0aG9kcy5HRVQsIHRoaXMuZW5jb2RlUGFyYW1zKHVybCwgZGF0YSksIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIFBPU1QgSFRUUCByZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBwcm92aWRlIChnZXRzIGVuY29kZWQgaW50byB0aGUgVVJMKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBDb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgKi9cbiAgcG9zdCAodXJsLCBkYXRhLCBvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcbiAgICAgIE1ldGhvZHMuUE9TVCxcbiAgICAgIHVybCxcbiAgICAgIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgY3JlZGVudGlhbHM6IHVuZGVmaW5lZFxuICAgICAgfSwgb3B0cylcbiAgICApO1xuICB9XG5cbiAgcmVxdWVzdCAobWV0aG9kLCB1cmwsIG9wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIG1ldGhvZCxcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcbiAgICB9LCBvcHRzKSk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIGJlYWNvbiB0byB0aGUgcHJvdmlkZWQgdXJsIHdoaWNoIHdpbGwgc2VuZCBhIG5vbi1ibG9ja2luZyByZXF1ZXN0XG4gICAqIHRvIHRoZSBzZXJ2ZXIgdGhhdCBpcyBndWFyYW50ZWVkIHRvIHNlbmQgYmVmb3JlIHBhZ2UgbG9hZC4gTm8gcmVzcG9uc2UgaXMgcmV0dXJuZWQsXG4gICAqIHNvIGJlYWNvbnMgYXJlIHByaW1hcmlseSB1c2VkIGZvciBhbmFseXRpY3MgcmVwb3J0aW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gc2VuZCB0aGUgYmVhY29uIHRvXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIFRoZSBkYXRhIHBheWxvYWQgdG8gc2VuZCBpbiB0aGUgYmVhY29uXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bGx5IHF1ZXVlZFxuICAgKi9cbiAgYmVhY29uICh1cmwsIGRhdGEpIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLnNlbmRCZWFjb24odXJsLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIH1cblxuICBlbmNvZGVQYXJhbXMgKHVybCwgcGFyYW1zKSB7XG4gICAgbGV0IGhhc1BhcmFtID0gdXJsLmluZGV4T2YoJz8nKSA+IC0xO1xuXG4gICAgbGV0IHNlYXJjaFF1ZXJ5ID0gJyc7XG4gICAgZm9yIChsZXQga2V5IGluIHBhcmFtcykge1xuICAgICAgaWYgKCFoYXNQYXJhbSkge1xuICAgICAgICBoYXNQYXJhbSA9IHRydWU7XG4gICAgICAgIHNlYXJjaFF1ZXJ5ICs9ICc/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlYXJjaFF1ZXJ5ICs9ICcmJztcbiAgICAgIH1cblxuICAgICAgc2VhcmNoUXVlcnkgKz0ga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybCArIHNlYXJjaFF1ZXJ5O1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG4vKiogVGhlIGN1cnJlbnQgbGliIHZlcnNpb24sIHJlcG9ydGVkIHdpdGggZXJyb3JzIGFuZCBhbmFseXRpY3MgKi9cbmV4cG9ydCBjb25zdCBMSUJfVkVSU0lPTiA9ICd2MC44LjgnO1xuXG4vKiogVGhlIGJhc2UgdXJsIGZvciB0aGUgYXBpIGJhY2tlbmQgKi9cbmV4cG9ydCBjb25zdCBBUElfQkFTRV9VUkwgPSAnaHR0cHM6Ly9saXZlYXBpLnlleHQuY29tJztcblxuLyoqIFRoZSBkZWZhdWx0IHVybCBmb3IgY29tcGlsZWQgY29tcG9uZW50IHRlbXBsYXRlcyAqL1xuZXhwb3J0IGNvbnN0IENPTVBJTEVEX1RFTVBMQVRFU19VUkwgPSBgaHR0cHM6Ly9hc3NldHMuc2l0ZXNjZG4ubmV0L2Fuc3dlcnMvJHtMSUJfVkVSU0lPTn0vYW5zd2Vyc3RlbXBsYXRlcy5jb21waWxlZC5taW4uanNgO1xuXG4vKiogVGhlIGJhc2UgdXJsIGZvciB0aGUgYW5hbHl0aWNzIGJhY2tlbmQgICovXG5leHBvcnQgY29uc3QgQU5BTFlUSUNTX0JBU0VfVVJMID0gJ2h0dHBzOi8vcmVhbHRpbWVhbmFseXRpY3MueWV4dC5jb20nO1xuIiwiLyoqIEBtb2R1bGUgU2VhcmNoUGFyYW1zICovXG5cbi8qIGdsb2JhbCB3aW5kb3cgKi9cblxuLyoqXG4gKiBTZWFyY2hQYXJhbXMgaXMgYSBjbGFzcyB0byBnZXQgdGhlIHNlYXJjaCBwYXJhbXMgaW4gYSBVUkwuXG4gKiBJdCBpcyBhIHJlcGxhY2VtZW50IGZvciBVUkwuc2VhcmNoUGFyYW1zIGFuZCBVUkxTZWFyY2hQYXJhbXMgZm9yIGJyb3dzZXJzIGxpa2UgSUUxMVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hQYXJhbXMge1xuICBjb25zdHJ1Y3RvciAodXJsKSB7XG4gICAgLyoqXG4gICAgICogTWFwcGluZyBvZiBhbGwgcXVlcnkgcGFyYW1ldGVycyBpbiB0aGUgZ2l2ZW4gdXJsLCBxdWVyeSBwYXJhbSAtPiB2YWx1ZVxuICAgICAqIE9ubHkgdXNlZCBpZiBVUkxTZWFyY2hQYXJhbXMgZG9lcyBub3QgZXhpc3QgaW4gdGhlIHdpbmRvd1xuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9wYXJhbXMgPSB7fTtcblxuICAgIGlmICh3aW5kb3cgJiYgd2luZG93LlVSTFNlYXJjaFBhcmFtcykge1xuICAgICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXModXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGFyYW1zID0gdGhpcy5wYXJzZSh1cmwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJzZSBjcmVhdGVzIGEgbWFwcGluZyBvZiBhbGwgcXVlcnkgcGFyYW1zIGluIGEgZ2l2ZW4gdXJsXG4gICAqIFRoZSBxdWVyeSBwYXJhbSB2YWx1ZXMgYXJlIGRlY29kZWQgYmVmb3JlIGJlaW5nIHB1dCBpbiB0aGUgbWFwXG4gICAqIFRocmVlIHR5cGVzIG9mIGlucHV0IGFyZSBzdXBwb3J0ZWRcbiAgICogICAoMSkgZnVsbCBVUkwgZS5nLiBodHRwOi8vd3d3LnlleHQuY29tLz9xPWhlbGxvXG4gICAqICAgKDIpIHBhcmFtcyB3aXRoID8gZS5nLiA/cT1oZWxsb1xuICAgKiAgICgxKSBwYXJhbXMgd2l0aG91dCA/IGUuZy4gcT1oZWxsb1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmxcbiAgICogQHJldHVybnMge09iamVjdH0gbWFwcGluZyBmcm9tIHF1ZXJ5IHBhcmFtIC0+IHZhbHVlIHdoZXJlIHZhbHVlIGlzICcnIGlmIG5vIHZhbHVlIGlzIHByb3ZpZGVkXG4gICAqL1xuICBwYXJzZSAodXJsKSB7XG4gICAgbGV0IHBhcmFtcyA9IHt9O1xuICAgIGxldCBzZWFyY2ggPSB1cmw7XG5cbiAgICBpZiAoc2VhcmNoID09PSAnJykge1xuICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9XG5cbiAgICAvLyBOb3JtYWxpemUgYWxsIHVybCBpbnB1dHMgdG8gc3RyaW5nIG9mIHF1ZXJ5IHBhcmFtcyBzZXBhcmF0ZWQgYnkgJlxuICAgIGlmICh1cmwuaW5kZXhPZignPycpID4gLTEpIHtcbiAgICAgIHNlYXJjaCA9IHVybC5zbGljZSh1cmwuaW5kZXhPZignPycpICsgMSk7XG4gICAgfVxuXG4gICAgY29uc3QgZW5jb2RlZFBhcmFtcyA9IHNlYXJjaC5zcGxpdCgnJicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5jb2RlZFBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5VmFsID0gZW5jb2RlZFBhcmFtc1tpXS5zcGxpdCgnPScpO1xuICAgICAgaWYgKGtleVZhbC5sZW5ndGggPiAxKSB7XG4gICAgICAgIHBhcmFtc1trZXlWYWxbMF1dID0gU2VhcmNoUGFyYW1zLmRlY29kZShrZXlWYWxbMV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zW2tleVZhbFswXV0gPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gcXVlcnkgcGFyYW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBxdWVyeSBwYXJhbSBrZXkgdG8gZ2V0IHRoZSB2YWx1ZSBvZlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IHBhcmFtIHZhbHVlLCBudWxsIG90aGVyd2lzZVxuICAgKi9cbiAgZ2V0IChxdWVyeSkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5fcGFyYW1zW1N0cmluZyhxdWVyeSldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9wYXJhbXNbcXVlcnldO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldCBjaGFuZ2VzIHRoZSB2YWx1ZSBvZiBhIGdpdmVuIHF1ZXJ5IHBhcmFtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIHRoZSBxdWVyeSBwYXJhbSBrZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIHRoZSB2YWx1ZSBvZiB0aGUgcXVlcnkgcGFyYW0gdXBkYXRlIHdpdGhcbiAgICovXG4gIHNldCAobmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLl9wYXJhbXNbU3RyaW5nKG5hbWUpXSA9IFN0cmluZyh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogaGFzIGNoZWNrcyB0byBzZWUgaWYgdGhlIGdpdmVuIHF1ZXJ5IHBhcmFtIGtleSBleGlzdHMgaW4gdGhlIHBhcmFtcyBvYmplY3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBxdWVyeSBwYXJhbSB0byBjaGVja1xuICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBxdWVyeSBwYXJhbSBpcyBpbiB0aGUgcGFyYW1zIG9iamVjdCwgZmFsc2Ugby93XG4gICAqL1xuICBoYXMgKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHF1ZXJ5IGluIHRoaXMuX3BhcmFtcztcbiAgfVxuXG4gIC8qKlxuICAgKiB0b1N0cmluZyByZXR1cm5zIGEgdXJsIHdpdGggYWxsIHRoZSBxdWVyeSBwYXJhbXMgaW4gdGhlIHBhcmFtcyBvYmplY3QgKHdpdGhvdXQgYSA/KVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1N0cmluZyAoKSB7XG4gICAgbGV0IHN0cmluZyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9wYXJhbXMpIHtcbiAgICAgIHN0cmluZy5wdXNoKGAke2tleX09JHtTZWFyY2hQYXJhbXMuZW5jb2RlKHRoaXMuX3BhcmFtc1trZXldKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZy5qb2luKCcmJyk7XG4gIH1cblxuICBlbnRyaWVzICgpIHtcbiAgICBsZXQgZW50cmllcyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9wYXJhbXMpIHtcbiAgICAgIGVudHJpZXMucHVzaChba2V5LCB0aGlzLl9wYXJhbXNba2V5XV0pO1xuICAgIH1cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIC8qKlxuICAgKiBkZWNvZGUgcmV0dXJucyB0aGUgZGVjb2RlZCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyB0byBkZWNvZGVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGRlY29kZSAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHJpbmcucmVwbGFjZSgvWyArXS9nLCAnJTIwJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIGRlY29kZSByZXR1cm5zIHRoZSBlbmNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBzdHJpbmcgKGUuZy4gKyAtPiAlMkIpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyB0byBlbmNvZGVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGVuY29kZSAoc3RyaW5nKSB7XG4gICAgbGV0IHJlcGxhY2UgPSB7XG4gICAgICAnISc6ICclMjEnLFxuICAgICAgXCInXCI6ICclMjcnLFxuICAgICAgJygnOiAnJTI4JyxcbiAgICAgICcpJzogJyUyOScsXG4gICAgICAnJTIwJzogJysnXG4gICAgfTtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZykucmVwbGFjZSgvWyEnKCldfCUyMC9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiByZXBsYWNlW21hdGNoXTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXBpUmVxdWVzdCAqL1xuXG5pbXBvcnQgSHR0cFJlcXVlc3RlciBmcm9tICcuL2h0dHByZXF1ZXN0ZXInO1xuaW1wb3J0IHsgQVBJX0JBU0VfVVJMIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vdWkvZG9tL3NlYXJjaHBhcmFtcyc7IC8vIFRPRE8gaWRlYWxseSB0aGlzIHdvdWxkIGJlIHBhc3NlZCBpbiBhcyBhIHBhcmFtXG5cbi8qKlxuICogQXBpUmVxdWVzdCBpcyB0aGUgYmFzZSBjbGFzcyBmb3IgYWxsIEFQSSByZXF1ZXN0cy5cbiAqIEl0IGRlZmluZXMgYWxsIG9mIHRoZSBjb3JlIHByb3BlcnRpZXMgcmVxdWlyZWQgdG8gbWFrZSBhIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpUmVxdWVzdCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiB1c2VkIGZvciBtYWtpbmcgbmV0d29yayByZXF1ZXN0IGFuZCBoYW5kbGluZyBlcnJvcnNcbiAgICAgKiBAdHlwZSB7SHR0cFJlcXVlc3Rlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3JlcXVlc3RlciA9IG5ldyBIdHRwUmVxdWVzdGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYmFzZVVybCB0byB1c2UgZm9yIG1ha2luZyBhIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYmFzZVVybCA9IG9wdHMuYmFzZVVybCB8fCBBUElfQkFTRV9VUkw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZW5kcG9pbnQgdG8gdXNlIGluIHRoZSB1cmwgKGFwcGVuZGVkIHRvIHRoZSB7YmFzZVVybH0pXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2VuZHBvaW50ID0gb3B0cy5lbmRwb2ludCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnNpb24gb2YgdGhlIEFQSSB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJzaW9uID0gb3B0cy52ZXJzaW9uIHx8IDIwMTkwMTAxO1xuXG4gICAgLyoqXG4gICAgICogQWRkaXRpb25hbCBkYXRhIHBhcmFtcyB0aGF0IGFyZSBzZW50IGFsb25nIHdpdGggdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcGFyYW1zID0gb3B0cy5wYXJhbXMgfHwge307XG4gIH1cblxuICAvKipcbiAgICogZ2V0IGNyZWF0ZXMgYSBuZXcgYEdFVGAgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSByZXF1ZXN0IGNsYXNzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZ2V0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdGVyLmdldCh0aGlzLl9iYXNlVXJsICsgdGhpcy5fZW5kcG9pbnQsIHRoaXMucGFyYW1zKHRoaXMuX3BhcmFtcykpO1xuICB9XG5cbiAgcG9zdCAob3B0cykge1xuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0ZXIucG9zdCh0aGlzLl9iYXNlVXJsICsgdGhpcy5fZW5kcG9pbnQsIHRoaXMucGFyYW1zKHRoaXMuX3BhcmFtcyksIG9wdHMpO1xuICB9XG5cbiAgcGFyYW1zIChwYXJhbXMpIHtcbiAgICB2YXIgYmFzZVBhcmFtcyA9IHtcbiAgICAgICd2JzogdGhpcy5fdmVyc2lvbixcbiAgICAgICdhcGlfa2V5JzogdGhpcy5fYXBpS2V5XG4gICAgfTtcblxuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKCkpO1xuXG4gICAgaWYgKHVybFBhcmFtcy5oYXMoJ2JldGEnKSkge1xuICAgICAgYmFzZVBhcmFtc1snYmV0YSddID0gdXJsUGFyYW1zLmdldCgnYmV0YScpO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbnkgcGFyYW1hdGVycyB3aG9zIHZhbHVlIGlzIGB1bmRlZmluZWRgLlxuICAgIC8vXG4gICAgLy8gTk9URShiaWxseSkgUHJvYmFibHkgYmV0dGVyIHRvIGJlIGV4cGxpY2l0IGFib3V0IGhvdyB0byBoYW5kbGUgdGhpcyBhdCB0aGUgcmVxdWVzdCBidWlsZGluZyBsZXZlbCxcbiAgICAvLyBidXQgSSBjYW4ndCBzZWUgYW55IGNhc2VzIHdoZXJlIHdlJ2QgZXZlciB3YW50IHRvIHNlbmQgJ3VuZGVmaW5lZCcgYXMgYSB2YWx1ZSB0byB0aGUgc2VydmVyLlxuICAgIC8vIFNvIGl0J3MgcHJvYmFibHkgZmluZSB0byAnY2xlYW4nIHRoZSBwYXJhbXMgb2JqZWN0IGhlcmVcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmIChwYXJhbXNba2V5XSA9PT0gdW5kZWZpbmVkIHx8IHBhcmFtc1trZXldID09PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBwYXJhbXNba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGJhc2VQYXJhbXMsIHBhcmFtcyB8fCB7fSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEVycm9ycyAqL1xuXG4vKipcbiAqIEFuc3dlcnNCYXNlRXJyb3IgaXMgYW4gZXh0ZW5zaW9uIG9mIHRoZSBiYXNlIEVycm9yIG9iamVjdC5cbiAqIFRoaXMgaXMgdGhlIG9iamVjdCB0aGF0IGlzIHVzZWQgdG8gd2hlbiByZXBvcnRpbmcgdG8gdGhlIHNlcnZlci5cbiAqIEBleHRlbmRzIEVycm9yXG4gKlxuICogRXJyb3IgY29kZXMgZmFsbCBpbnRvIG9uZSBvZiBmb3VyIGNhdGVnb3JpZXM6XG4gKiAxWFggZXJyb3JzOiBCYXNpYyBlcnJvcnNcbiAqIDJYWCBlcnJvcnM6IFVJIGVycm9yc1xuICogM1hYIGVycm9yczogRW5kcG9pbnQgZXJyb3JzXG4gKiA0WFggZXJyb3JzOiBDb3JlIGVycm9yc1xuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0Jhc2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IgKGVycm9yQ29kZSwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5lcnJvckNvZGUgPSBlcnJvckNvZGU7XG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuYm91bmRhcnkgPSBib3VuZGFyeTtcbiAgICB0aGlzLmNhdXNlZEJ5ID0gY2F1c2VkQnk7XG4gICAgdGhpcy5yZXBvcnRlZCA9IGZhbHNlO1xuICB9XG5cbiAgdG9Kc29uICgpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbSAoYnVpbHRpbkVycm9yLCBib3VuZGFyeSkge1xuICAgIGNvbnN0IGVycm9yID0gbmV3IEFuc3dlcnNCYXNpY0Vycm9yKGJ1aWx0aW5FcnJvci5tZXNzYWdlLCBib3VuZGFyeSk7XG4gICAgZXJyb3Iuc3RhY2sgPSBidWlsdGluRXJyb3Iuc3RhY2s7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc0Jhc2ljRXJyb3IgaXMgYSB3cmFwcGVyIGFyb3VuZCBhbGwgdGhlIGJ1aWx0LWluIGVycm9yc1xuICogZS5nLiB1bmRlZmluZWQgdmFyaWFibGVzLCBpbmNvcnJlY3Qgc3ludGF4LCB0eXBlcywgbWlzc2luZyBtZXRob2RzLCBldGMuXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQmFzaWNFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoMTAwLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc1VpRXJyb3IgdXNlZCBmb3IgdGhpbmdzIGxpa2UgRE9NIGVycm9ycy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNVaUVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigyMDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgaXMgdXNlZCBmb3IgQ29tcG9uZW50IG9yaWVudGVkIGVycm9yc1xuICogZS5nLiBmYWlsdXJlIHRvIHJlbmRlciwgb3IgY2F0Y2hpbmcgdW5rbm93bnMuXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGNvbXBvbmVudCwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigyMDEsIG1lc3NhZ2UsIGNvbXBvbmVudCwgY2F1c2VkQnkpO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc0VuZHBvaW50RXJyb3IgcmVwcmVzZW50cyBhbGwgbmV0d29yayByZWxhdGVkIGVycm9ycy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNFbmRwb2ludEVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigzMDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzQ29yZUVycm9yIHJlcHJlc2VudHMgZXJyb3JzIGZvciBwcmVjb25kaXRpb24gZmFpbHVyZXMgaW4gdGhlIGNvcmUgbGlicmFyeVxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0NvcmVFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoNDAwLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc1N0b3JhZ2VFcnJvciByZXByZXNlbnRzIHN0b3JhZ2UgcmVsYXRlZCBlcnJvcnNcbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNTdG9yYWdlRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIHN0b3JhZ2VLZXksIGRhdGEsIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoNDAxLCBtZXNzYWdlLCAnU3RvcmFnZScsIGNhdXNlZEJ5KTtcbiAgICB0aGlzLnN0b3JhZ2VLZXkgPSBzdG9yYWdlS2V5O1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IgaXMgdXNlZCBmb3IgZXJyb3JzIHdoZW4gcmVwb3J0aW5nIGFuYWx5dGljc1xuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0FuYWx5dGljc0Vycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBldmVudCwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcig0MDIsIG1lc3NhZ2UsICdBbmFseXRpY3MnLCBjYXVzZWRCeSk7XG4gICAgdGhpcy5ldmVudCA9IGV2ZW50O1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hBcGkgKi9cblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCB7IEFuc3dlcnNCYXNpY0Vycm9yLCBBbnN3ZXJzQ29yZUVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogU2VhcmNoQXBpIGlzIHRoZSBBUEkgZm9yIGRvaW5nIHZhcmlvdXMgdHlwZXMgb2Ygc2VhcmNoXG4gKiBvdmVyIHRoZSBuZXR3b3JrIChlLmcuIHZlcnRpY2FsIG9yIHVuaXZlcnNhbClcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQXBpIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIWNvbmZpZy5hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQXBpIEtleSBpcyByZXF1aXJlZCcsICdTZWFyY2gnKTtcbiAgICB9XG4gICAgdGhpcy5fYXBpS2V5ID0gY29uZmlnLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBBbnN3ZXJzIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghY29uZmlnLmFuc3dlcnNLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQW5zd2VycyBLZXkgaXMgcmVxdWlyZWQnLCAnU2VhcmNoJyk7XG4gICAgfVxuICAgIHRoaXMuX2Fuc3dlcnNLZXkgPSBjb25maWcuYW5zd2Vyc0tleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBBUEkgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVyc2lvbiA9IGNvbmZpZy52ZXJzaW9uIHx8IDIwMTkwMTAxIHx8IDIwMTkwMzAxO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGxvY2FsZSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghY29uZmlnLmxvY2FsZSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdMb2NhbGUgaXMgcmVxdWlyZWQnLCAnU2VhcmNoJyk7XG4gICAgfVxuICAgIHRoaXMuX2xvY2FsZSA9IGNvbmZpZy5sb2NhbGU7XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoIGluIHRoZSBjb250ZXh0IG9mIGEgdmVydGljYWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnRpY2FsS2V5IHZlcnRpY2FsIElEIGZvciB0aGUgc2VhcmNoXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBxdWVyeSBUaGUgcXVlcnkgZGV0YWlsc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuaW5wdXQgVGhlIGlucHV0IHRvIHNlYXJjaCBmb3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmZpbHRlciBUaGUgZmlsdGVyIHRvIHVzZSBpbiB0aGUgc2VhcmNoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5mYWNldEZpbHRlciBUaGUgZmFjZXQgZmlsdGVyIHRvIHVzZSBpbiB0aGUgc2VhcmNoXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBxdWVyeS5saW1pdCBUaGUgbWF4IG51bWJlciBvZiByZXN1bHRzIHRvIGluY2x1ZGUsIG1heCBvZiA1MFxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVlcnkub2Zmc2V0IFRoZSByZXN1bHRzIG9mZnNldCwgZm9yIGZldGNoaW5nIG1vcmUgcmVzdWx0cyBvZiB0aGUgc2FtZSBxdWVyeVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuaWQgVGhlIHF1ZXJ5IElEIHRvIHVzZS4gSWYgcGFnaW5nIHdpdGhpbiBhIHF1ZXJ5LCB0aGUgc2FtZSBJRCBzaG91bGQgYmUgdXNlZFxuICAgKiBAcGFyYW0ge09iamVjdH0gcXVlcnkuZ2VvbG9jYXRpb24gVGhlIHVzZXIncyBnZW9sb2NhdGlvbiBwb3NpdGlvbiB1c2VkIHRvIGJpYXMgdGhlIHJlc3VsdHNcbiAgICogQHBhcmFtIHtib29sZWFufSBxdWVyeS5pc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCBJZiB0cnVlLCBhc2tzIHRoZSBzZXJ2ZXIgdG8gcmV0dXJuIGR5bmFtaWMgZmlsdGVyc1xuICAgKi9cbiAgdmVydGljYWxTZWFyY2ggKHZlcnRpY2FsS2V5LCB7IGlucHV0LCBmaWx0ZXIsIGZhY2V0RmlsdGVyLCBsaW1pdCwgb2Zmc2V0LCBpZCwgZ2VvbG9jYXRpb24sIGlzRHluYW1pY0ZpbHRlcnNFbmFibGVkIH0pIHtcbiAgICBpZiAobGltaXQgPiA1MCkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb3JlRXJyb3IoJ1Byb3ZpZGVkIHNlYXJjaCBsaW1pdCB1bnN1cHBvcnRlZCcsICdTZWFyY2hBcGknKTtcbiAgICB9XG5cbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvdmVydGljYWwvcXVlcnknLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IGlucHV0LFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICAgICdmaWx0ZXJzJzogZmlsdGVyLFxuICAgICAgICAnZmFjZXRGaWx0ZXJzJzogZmFjZXRGaWx0ZXIsXG4gICAgICAgICd2ZXJ0aWNhbEtleSc6IHZlcnRpY2FsS2V5LFxuICAgICAgICAnbGltaXQnOiBsaW1pdCxcbiAgICAgICAgJ29mZnNldCc6IG9mZnNldCxcbiAgICAgICAgJ2xvY2F0aW9uJzogZ2VvbG9jYXRpb24gPyBgJHtnZW9sb2NhdGlvbi5sYXR9LCR7Z2VvbG9jYXRpb24ubG5nfWAgOiBudWxsLFxuICAgICAgICAncmFkaXVzJzogZ2VvbG9jYXRpb24gPyBnZW9sb2NhdGlvbi5yYWRpdXMgOiBudWxsLFxuICAgICAgICAncXVlcnlJZCc6IGlkLFxuICAgICAgICAncmV0cmlldmVGYWNldHMnOiBpc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZCxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoIGFjcm9zcyBhbGwgdmVydGljYWxzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeVN0cmluZyBUaGUgaW5wdXQgdG8gc2VhcmNoIGZvclxuICAgKiBAcGFyYW0ge09iamVjdH0gZ2VvbG9jYXRpb24gdGhlIHVzZXIncyBnZW9sb2NhdGlvbiBwb3NpdGlvbiB1c2VkIHRvIGJpYXMgdGhlIHJlc3VsdHNcbiAgICovXG4gIHVuaXZlcnNhbFNlYXJjaCAocXVlcnlTdHJpbmcsIGdlb2xvY2F0aW9uKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL3F1ZXJ5JyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBxdWVyeVN0cmluZyxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgICAnbG9jYXRpb24nOiBnZW9sb2NhdGlvbiA/IGAke2dlb2xvY2F0aW9uLmxhdH0sJHtnZW9sb2NhdGlvbi5sbmd9YCA6IG51bGwsXG4gICAgICAgICdyYWRpdXMnOiBnZW9sb2NhdGlvbiA/IGdlb2xvY2F0aW9uLnJhZGl1cyA6IG51bGwsXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVEYXRhICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Db21wbGV0ZURhdGEge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgdGhpcy5zZWN0aW9ucyA9IGRhdGEuc2VjdGlvbnMgfHwgW107XG4gICAgdGhpcy5xdWVyeUlkID0gZGF0YS5xdWVyeUlkIHx8ICcnO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UpIHtcbiAgICBsZXQgc2VjdGlvbnM7XG4gICAgaWYgKHJlc3BvbnNlLnNlY3Rpb25zKSB7XG4gICAgICBzZWN0aW9ucyA9IHJlc3BvbnNlLnNlY3Rpb25zLm1hcChzID0+ICh7XG4gICAgICAgIGxhYmVsOiBzLmxhYmVsLFxuICAgICAgICByZXN1bHRzOiBzLnJlc3VsdHMubWFwKHIgPT4gbmV3IEF1dG9Db21wbGV0ZVJlc3VsdChyKSlcbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VjdGlvbnMgPSBbeyByZXN1bHRzOiByZXNwb25zZS5yZXN1bHRzLm1hcChyID0+IG5ldyBBdXRvQ29tcGxldGVSZXN1bHQocikpIH1dO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEF1dG9Db21wbGV0ZURhdGEoeyBzZWN0aW9ucywgcXVlcnlJZDogcmVzcG9uc2UucXVlcnlJZCB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXV0b0NvbXBsZXRlUmVzdWx0IHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIHRoaXMuZmlsdGVyID0gZGF0YS5maWx0ZXIgfHwge307XG4gICAgdGhpcy5oaWdobGlnaHRlZFZhbHVlID0gdGhpcy5oaWdobGlnaHQoZGF0YSk7XG4gICAgdGhpcy5rZXkgPSBkYXRhLmtleSB8fCAnJztcbiAgICB0aGlzLm1hdGNoZWRTdWJzdHJpbmdzID0gZGF0YS5tYXRjaGVkU3Vic3RyaW5ncyB8fCBbXTtcbiAgICB0aGlzLnZhbHVlID0gZGF0YS52YWx1ZSB8fCAnJztcbiAgICB0aGlzLnNob3J0VmFsdWUgPSBkYXRhLnNob3J0VmFsdWUgfHwgdGhpcy52YWx1ZTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLy8gVE9ETyhqZGVsZXJtZSk6IGNvbnNvbGlkYXRlIHdpdGggb3RoZXIgaGlnaGxpZ2h0IGZ1bmN0aW9uc1xuICBoaWdobGlnaHQgKGRhdGEpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBzaG9ydFZhbHVlLCBtYXRjaGVkU3Vic3RyaW5ncyB9ID0gZGF0YTtcbiAgICBjb25zdCB2YWwgPSB2YWx1ZSB8fCBzaG9ydFZhbHVlO1xuXG4gICAgaWYgKCFtYXRjaGVkU3Vic3RyaW5ncyB8fCBtYXRjaGVkU3Vic3RyaW5ncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIG91ciBoaWdobGlnaHRlZCBzdWJzdHJpbmdzIGFyZSBzb3J0ZWRcbiAgICBtYXRjaGVkU3Vic3RyaW5ncy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAoYS5vZmZzZXQgPCBiLm9mZnNldCkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG5cbiAgICAgIGlmIChhLm9mZnNldCA+IGIub2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIC8vIEludmVydCBoaWdobGlnaHRlZCBzdWJzdHJpbmdzXG4gICAgY29uc3QgaW52ZXJ0ZWRTdWJzdHJpbmdzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdGNoZWRTdWJzdHJpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzdWJzdHJpbmcgPSBtYXRjaGVkU3Vic3RyaW5nc1tpXTtcbiAgICAgIGNvbnN0IG5leHRPZmZzZXQgPSBzdWJzdHJpbmcub2Zmc2V0ICsgc3Vic3RyaW5nLmxlbmd0aDtcbiAgICAgIGlmIChpID09PSAwICYmIHN1YnN0cmluZy5vZmZzZXQgIT09IDApIHtcbiAgICAgICAgaW52ZXJ0ZWRTdWJzdHJpbmdzLnB1c2goeyBvZmZzZXQ6IDAsIGxlbmd0aDogc3Vic3RyaW5nLm9mZnNldCB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbC5sZW5ndGggPiBuZXh0T2Zmc2V0KSB7XG4gICAgICAgIGludmVydGVkU3Vic3RyaW5ncy5wdXNoKHtcbiAgICAgICAgICBvZmZzZXQ6IG5leHRPZmZzZXQsXG4gICAgICAgICAgbGVuZ3RoOiBpIDwgbWF0Y2hlZFN1YnN0cmluZ3MubGVuZ3RoIC0gMVxuICAgICAgICAgICAgPyBtYXRjaGVkU3Vic3RyaW5nc1tpICsgMV0ub2Zmc2V0IC0gbmV4dE9mZnNldFxuICAgICAgICAgICAgOiB2YWwubGVuZ3RoIC0gbmV4dE9mZnNldFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBCdWlsZCBvdXIgbmV3IHZhbHVlIGJhc2VkIG9uIHRoZSBoaWdobGlnaHRzXG4gICAgbGV0IGhpZ2hsaWdodGVkVmFsdWUgPSAnJztcbiAgICBsZXQgbmV4dFN0YXJ0ID0gMDtcblxuICAgIGlmIChpbnZlcnRlZFN1YnN0cmluZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgaW52ZXJ0ZWRTdWJzdHJpbmdzLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgc3RhcnQgPSBOdW1iZXIoaW52ZXJ0ZWRTdWJzdHJpbmdzW2pdLm9mZnNldCk7XG4gICAgICBsZXQgZW5kID0gc3RhcnQgKyBpbnZlcnRlZFN1YnN0cmluZ3Nbal0ubGVuZ3RoO1xuXG4gICAgICBoaWdobGlnaHRlZFZhbHVlICs9IFt2YWwuc2xpY2UobmV4dFN0YXJ0LCBzdGFydCksICc8c3Ryb25nPicsIHZhbC5zbGljZShzdGFydCwgZW5kKSwgJzwvc3Ryb25nPiddLmpvaW4oJycpO1xuXG4gICAgICBpZiAoaiA9PT0gaW52ZXJ0ZWRTdWJzdHJpbmdzLmxlbmd0aCAtIDEgJiYgZW5kIDwgdmFsLmxlbmd0aCkge1xuICAgICAgICBoaWdobGlnaHRlZFZhbHVlICs9IHZhbC5zbGljZShlbmQpO1xuICAgICAgfVxuXG4gICAgICBuZXh0U3RhcnQgPSBlbmQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhpZ2hsaWdodGVkVmFsdWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lciAqL1xuXG5pbXBvcnQgQXV0b0NvbXBsZXRlRGF0YSBmcm9tICcuLi9tb2RlbHMvYXV0b2NvbXBsZXRlZGF0YSc7XG5cbi8qKlxuICogQSBEYXRhIFRyYW5zZm9ybWVyIHRoYXQgdGFrZXMgdGhlIHJlc3BvbnNlIG9iamVjdCBmcm9tIGEgQXV0b0NvbXBsZXRlIHJlcXVlc3RcbiAqIEFuZCB0cmFuc2Zvcm1zIGluIHRvIGEgZnJvbnQtZW5kIG9yaWVudGVkIGRhdGEgc3RydWN0dXJlIHRoYXQgb3VyXG4gKiBjb21wb25lbnQgbGlicmFyeSBhbmQgY29yZSBzdG9yYWdlIHVuZGVyc3RhbmQuXG4gKlxuICogVE9ETyhiaWxseSkgQ3JlYXRlIG91ciBvd24gZnJvbnQtZW5kIGRhdGEgbW9kZWxzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lciB7XG4gIHN0YXRpYyBjbGVhbiAobW9kdWxlSWQsIGRhdGEpIHtcbiAgICBpZiAoZGF0YS5zZWN0aW9ucyAmJiBkYXRhLnNlY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVsZXRlIGRhdGEuc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuc2VjdGlvbnMgJiYgZGF0YS5zZWN0aW9ucy5sZW5ndGggPT09IDEgJiYgZGF0YS5zZWN0aW9uc1swXS5yZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVsZXRlIGRhdGEuc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIFttb2R1bGVJZF06IGRhdGFcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHVuaXZlcnNhbCAocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gQXV0b0NvbXBsZXRlRGF0YS5mcm9tKHJlc3BvbnNlKTtcbiAgfVxuXG4gIHN0YXRpYyBmaWx0ZXIgKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIEF1dG9Db21wbGV0ZURhdGEuZnJvbShyZXNwb25zZSk7XG4gIH1cblxuICBzdGF0aWMgdmVydGljYWwgKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIEF1dG9Db21wbGV0ZURhdGEuZnJvbShyZXNwb25zZSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEF1dG9Db21wbGV0ZUFwaSAqL1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lciBmcm9tICcuL2F1dG9jb21wbGV0ZWRhdGF0cmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBBbnN3ZXJzQmFzaWNFcnJvciwgQW5zd2Vyc0VuZHBvaW50RXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBBdXRvQ29tcGxldGVBcGkgZXhwb3NlcyBhbiBpbnRlcmZhY2UgZm9yIG5ldHdvcmsgcmVsYXRlZCBtYXR0ZXJzXG4gKiBmb3IgYWxsIHRoZSBhdXRvY29tcGxldGUgZW5kcG9pbnRzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVBcGkge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIW9wdHMuYXBpS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0FwaSBLZXkgaXMgcmVxdWlyZWQnLCAnQXV0b0NvbXBsZXRlJyk7XG4gICAgfVxuICAgIHRoaXMuX2FwaUtleSA9IG9wdHMuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIEFuc3dlcnMgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFvcHRzLmFuc3dlcnNLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQW5zd2VycyBLZXkgaXMgcmVxdWlyZWQnLCAnQXV0b0NvbXBsZXRlJyk7XG4gICAgfVxuICAgIHRoaXMuX2Fuc3dlcnNLZXkgPSBvcHRzLmFuc3dlcnNLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgQVBJIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnNpb24gPSBvcHRzLnZlcnNpb24gfHwgMjAxOTAxMDEgfHwgMjAxOTAzMDE7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbG9jYWxlIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFvcHRzLmxvY2FsZSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdMb2NhbGUgaXMgcmVxdWlyZWQnLCAnQXV0b0NvbXBsZXRlJyk7XG4gICAgfVxuICAgIHRoaXMuX2xvY2FsZSA9IG9wdHMubG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEF1dG9jb21wbGV0ZSBmaWx0ZXJzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCBUaGUgaW5wdXQgdG8gdXNlIGZvciBhdXRvIGNvbXBsZXRlXG4gICAqL1xuICBxdWVyeUZpbHRlciAoaW5wdXQsIHZlcnRpY2FsS2V5LCBiYXJLZXkpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvZmlsdGVyc2VhcmNoJyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBpbnB1dCxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgICAnZXhwZXJpZW5jZUtleSc6IHZlcnRpY2FsS2V5LFxuICAgICAgICAnaW5wdXRLZXknOiBiYXJLZXksXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIuZmlsdGVyKHJlc3BvbnNlLnJlc3BvbnNlLCBiYXJLZXkpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEFuc3dlcnNFbmRwb2ludEVycm9yKCdGaWx0ZXIgc2VhcmNoIHJlcXVlc3QgZmFpbGVkJywgJ0F1dG9Db21wbGV0ZScsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcXVlcnlWZXJ0aWNhbCAoaW5wdXQsIHZlcnRpY2FsS2V5LCBiYXJLZXkpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvdmVydGljYWwvYXV0b2NvbXBsZXRlJyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBpbnB1dCxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgICAndmVydGljYWxLZXknOiB2ZXJ0aWNhbEtleSxcbiAgICAgICAgJ2JhcktleSc6IGJhcktleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lci52ZXJ0aWNhbChyZXNwb25zZS5yZXNwb25zZSwgcmVxdWVzdC5fcGFyYW1zLmJhcktleSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoJ1ZlcnRpY2FsIHNlYXJjaCByZXF1ZXN0IGZhaWxlZCcsICdBdXRvQ29tcGxldGUnLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHF1ZXJ5VW5pdmVyc2FsIChxdWVyeVN0cmluZykge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9hdXRvY29tcGxldGUnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IHF1ZXJ5U3RyaW5nLFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldChxdWVyeVN0cmluZylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lci51bml2ZXJzYWwocmVzcG9uc2UucmVzcG9uc2UpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEFuc3dlcnNFbmRwb2ludEVycm9yKCdVbml2ZXJzYWwgc2VhcmNoIHJlcXVlc3QgZmFpbGVkJywgJ0F1dG9Db21wbGV0ZScsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBRdWVzdGlvbkFuc3dlckFwaSAqL1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IHsgQW5zd2Vyc0Jhc2ljRXJyb3IsIEFuc3dlcnNFbmRwb2ludEVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogUXVlc3Rpb25BbnN3ZXJBcGkgZXhwb3NlcyBhbiBpbnRlcmZhY2UgdG8gZG8gbmV0d29ya3kgdGhpbmdzIGFnYWluc3RcbiAqIHRoZSBRJkEgUkVTVCBBUElcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb25BbnN3ZXJBcGkge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIW9wdHMuYXBpS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0FwaSBLZXkgaXMgcmVxdWlyZWQnLCAnUXVlc3Rpb25BbnN3ZXJBcGknKTtcbiAgICB9XG4gICAgdGhpcy5fYXBpS2V5ID0gb3B0cy5hcGlLZXk7XG4gIH1cblxuICAvKipcbiAgICogc3VibWl0UXVlc3Rpb24gd2lsbCBjcmVhdGUgYSBuZXR3b3JrIHJlcXVlc3QgdG9cbiAgICogY3JlYXRlIGEgcXVlc3Rpb24gZm9yIFEmQS5cbiAgICogQHBhcmFtIHtvYmplY3R9IHF1ZXN0aW9uIFRoZSBxdWVzdGlvbiBvYmplY3QgdG8gc3VibWl0IHRvIHRoZSBzZXJ2ZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1ZXN0aW9uLmVudGl0eUlkIFRoZSBlbnRpdHkgdG8gYXNzb2NpYXRlIHdpdGggdGhlIHF1ZXN0aW9uIChyZXF1aXJlZClcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLmxhbnVhZ2UgVGhlIGxhbmd1YWdlIG9mIHRoZSBxdWVzdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24uc2l0ZSBUaGUgXCJwdWJsaXNoZXJcIiBvZiB0aGUgKGUuZy4gJ0ZJUlNUX1BBUlRZJylcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLm5hbWUgVGhlIG5hbWUgb2YgdGhlIGF1dGhvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24uZW1haWwgVGhlIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIGF1dGhvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ucXVlc3Rpb25UZXh0IFRoZSBxdWVzdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ucXVlc3Rpb25EZXNjcmlwdGlvbiBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBxdWVzdGlvblxuICAgKi9cbiAgc3VibWl0UXVlc3Rpb24gKHF1ZXN0aW9uKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9xdWVzdGlvbnMnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2VudGl0eUlkJzogcXVlc3Rpb24uZW50aXR5SWQsXG4gICAgICAgICdzaXRlJzogcXVlc3Rpb24uc2l0ZSxcbiAgICAgICAgJ25hbWUnOiBxdWVzdGlvbi5uYW1lLFxuICAgICAgICAnZW1haWwnOiBxdWVzdGlvbi5lbWFpbCxcbiAgICAgICAgJ3F1ZXN0aW9uVGV4dCc6IHF1ZXN0aW9uLnF1ZXN0aW9uVGV4dCxcbiAgICAgICAgJ3F1ZXN0aW9uRGVzY3JpcHRpb24nOiBxdWVzdGlvbi5xdWVzdGlvbkRlc2NyaXB0aW9uLFxuICAgICAgICAncXVlc3Rpb25MYW5ndWFnZSc6IHF1ZXN0aW9uLnF1ZXN0aW9uTGFuZ3VhZ2VcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LnBvc3QoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEFuc3dlcnNFbmRwb2ludEVycm9yKFxuICAgICAgICAgICdRdWVzdGlvbiBzdWJtaXQgZmFpbGVkJyxcbiAgICAgICAgICAnUXVlc3Rpb25BbnN3ZXJBcGknLFxuICAgICAgICAgIGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hTdGF0ZXMgKi9cblxuLyoqXG4gKiBTZWFyY2hTdGF0ZXMgaXMgYW4gRU5VTSBmb3IgdGhlIHZhcmlvdXMgc3RhZ2VzIG9mIHNlYXJjaGluZyxcbiAqIHVzZWQgdG8gc2hvdyBkaWZmZXJlbnQgdGVtcGxhdGVzXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIFBSRV9TRUFSQ0g6ICdwcmUtc2VhcmNoJyxcbiAgU0VBUkNIX0xPQURJTkc6ICdzZWFyY2gtbG9hZGluZycsXG4gIFNFQVJDSF9DT01QTEVURTogJ3NlYXJjaC1jb21wbGV0ZSdcbn07XG4iLCIvKiogQG1vZHVsZSBSZXN1bHQgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0IHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSByYXcgcHJvZmlsZSBkYXRhXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3JhdyA9IGRhdGEucmF3IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZm9ybWF0dGVkIHByb2ZpbGUgZGF0YVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9mb3JtYXR0ZWQgPSBkYXRhLmZvcm1hdHRlZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbmRleCBudW1iZXIgb2YgdGhlIHJlc3VsdFxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5vcmRpbmFsID0gZGF0YS5vcmRpbmFsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgb2YgdGhlIHJlc3VsdCBjYXJkXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMudGl0bGUgPSBkYXRhLnRpdGxlIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYm9keSBvZiB0aGUgZGV0YWlscyBzZWN0aW9uIG9mIHRoZSByZXN1bHQgY2FyZCwgY2FuIGNvbnRhaW4gSFRNTFxuICAgICAqIEB0eXBlIHtzdHJpbmd8IG51bGx9XG4gICAgICovXG4gICAgdGhpcy5kZXRhaWxzID0gZGF0YS5kZXRhaWxzIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVzdGluYXRpb24gbGluayBmb3IgdGhlIHRpdGxlIG9mIHRoZSByZXN1bHQgY2FyZFxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmxpbmsgPSBkYXRhLmxpbmsgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBFbnRpdHkgSUQsIG9yIG90aGVyIHVuaXF1ZSBpZGVudGlmaWVyLCB1c2VkIGZvciB0byBwb3dlciBpbnRlcmFjdGl2aXR5XG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMuaWQgPSBkYXRhLmlkIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3VidGl0bGUgb24gdGhlIHJlc3VsdCBjYXJkXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMuc3VidGl0bGUgPSBkYXRhLnN1YnRpdGxlIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2xhc3MgbW9kaWZpZXIsIHVzdWFsbHkgZGVyaXZlZCBmcm9tIHRoZSB2ZXJ0aWNhbCBjb25maWd1cmF0aW9uIElEXG4gICAgICogVXNlZCB0byBhcHBseSBkaWZmZXJlbnQgc3R5bGluZyB0byBkaWZmZXJlbnQgcmVzdWx0IGNhcmQgdHlwZXNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5tb2RpZmllciA9IGRhdGEubW9kaWZpZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbGFyZ2UgZGF0ZSwgb2YgdGhlIGZvcm1hdCB7IG1vbnRoOiAnSmFuJywgZGF5OiAnMDEnIH1cbiAgICAgKiBAdHlwZSB7T2JqZWN0fG51bGx9XG4gICAgICovXG4gICAgdGhpcy5iaWdEYXRlID0gZGF0YS5iaWdEYXRlIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbWFnZSBwcm9maWxlIG9iamVjdCwgZXhwZWN0ZWQgdG8gaGF2ZSBhIHVybCBwcm9wZXJ0eVxuICAgICAqIEB0eXBlIHtPYmplY3R8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmltYWdlID0gZGF0YS5pbWFnZSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgY2FsbHMgdG8gYWN0aW9uLCBvZiB0aGUgZm9ybWF0OlxuICAgICAqIHsgaWNvbjogJycsIHVybDogJycsIHRleHQ6ICcnLCBldmVudFR5cGU6ICcnLCBldmVudE9wdGlvbnM6IHt9fVxuICAgICAqIEB0eXBlIHtBcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLmNhbGxzVG9BY3Rpb24gPSBkYXRhLmNhbGxzVG9BY3Rpb24gfHwgW107XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGFuIGFjY29yZGlhbiByZXN1bHQgc2hvdWxkIGJlIGNvbGxhcHNlZCBieSBkZWZhdWx0XG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5jb2xsYXBzZWQgPSBkYXRhLmNvbGxhcHNlZCB8fCB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBSZXN1bHRGYWN0b3J5ICovXG5cbmltcG9ydCBSZXN1bHQgZnJvbSAnLi9yZXN1bHQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHRGYWN0b3J5IHtcbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIEFQSSByZXN1bHQgb2JqZWN0IGludG8gYSBSZXN1bHQgdmlldyBtb2RlbC5cbiAgICogSW5jbHVkZXMgZGVmYXVsdCBtYXBwaW5ncyBvZiBHb29nbGVDdXN0b21TZWFyY2hFbmdpbmUgcmVzdWx0cyB0b1xuICAgKiB0aGUgZmllbGRzIGV4cG9zZWQgYnkgdGhlIHRlbXBsYXRlLlxuICAgKiBAcGFyYW0gcmVzdWx0c0RhdGEgIHtBcnJheX0gZXhwZWN0ZWQgZm9ybWF0OiB7IGRhdGE6IHsgLi4uIH0sIGhpZ2hsaWdodGVkRmllbGRzOiB7IC4uLiB9fVxuICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59IGZvcm1hdHRlcnMgVGhlIGZvcm1hdHRlcnMgdG8gYXBwbHkgdG8gdGhlIHJlc3VsdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmVydGljYWxJZCBUaGUgdmVydGljYWwgb2YgdGhlc2UgcmVzdWx0c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIEJhY2tlbmQgc291cmNlIG9mIHRoZXNlIHJlc3VsdHNcbiAgICogQHJldHVybnMge1Jlc3VsdFtdfVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHJlc3VsdHNEYXRhLCBmb3JtYXR0ZXJzLCB2ZXJ0aWNhbElkLCBzb3VyY2UpIHtcbiAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0c0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIFRPRE8gdXNlIHJlc3VsdERhdGEuaGlnaGxpZ2h0ZWRGaWVsZHMgdG9cbiAgICAgIC8vIHRyYW5zZm9ybSByZXN1bHREYXRhLmRhdGEgaW50byBodG1sLWZyaWVuZGx5IHN0cmluZ3MgdGhhdCBoaWdobGlnaHQgdmFsdWVzLlxuICAgICAgLy8gQ2hlY2sgZm9yIG5ldyBkYXRhIGZvcm1hdCwgb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGxlZ2FjeVxuXG4gICAgICBjb25zdCBkYXRhID0gcmVzdWx0c0RhdGFbaV0uZGF0YSB8fCByZXN1bHRzRGF0YVtpXTtcbiAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGEgPSB7fTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhmb3JtYXR0ZXJzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGRhdGEpLmZvckVhY2goKFtrZXksIHZhbF0pID0+IHtcbiAgICAgICAgICBpZiAoZm9ybWF0dGVyc1trZXldKSB7XG4gICAgICAgICAgICBmb3JtYXR0ZWREYXRhW2tleV0gPSBmb3JtYXR0ZXJzW2tleV0odmFsLCBkYXRhLCB2ZXJ0aWNhbElkLCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNvdXJjZSA9PT0gJ0dPT0dMRV9DU0UnKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChSZXN1bHRGYWN0b3J5LmZyb21Hb29nbGVDdXN0b21TZWFyY2hFbmdpbmUoZGF0YSkpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNvdXJjZSA9PT0gJ0JJTkdfQ1NFJykge1xuICAgICAgICByZXN1bHRzLnB1c2goUmVzdWx0RmFjdG9yeS5mcm9tQmluZ0N1c3RvbVNlYXJjaEVuZ2luZShkYXRhKSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc291cmNlID09PSAnWkVOREVTSycpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKFJlc3VsdEZhY3RvcnkuZnJvbVplbmRlc2tTZWFyY2hFbmdpbmUoZGF0YSkpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0cy5wdXNoKFJlc3VsdEZhY3RvcnkuZnJvbUdlbmVyaWMoZGF0YSwgZm9ybWF0dGVkRGF0YSwgaSkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGFuIEFQSSByZXN1bHQgb2JqZWN0IGludG8gYSBnZW5lcmljIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcGFyYW0gZm9ybWF0dGVkRGF0YVxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICogQHJldHVybnMge1Jlc3VsdH1cbiAgICovXG4gIHN0YXRpYyBmcm9tR2VuZXJpYyAoZGF0YSwgZm9ybWF0dGVkRGF0YSwgaW5kZXgpIHtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh7XG4gICAgICByYXc6IGRhdGEsXG4gICAgICBmb3JtYXR0ZWQ6IGZvcm1hdHRlZERhdGEsXG4gICAgICB0aXRsZTogZm9ybWF0dGVkRGF0YS5uYW1lIHx8IGRhdGEubmFtZSxcbiAgICAgIGRldGFpbHM6IGZvcm1hdHRlZERhdGEuZGVzY3JpcHRpb24gfHwgdGhpcy50cnVuY2F0ZShkYXRhLmRlc2NyaXB0aW9uKSxcbiAgICAgIGxpbms6IGRhdGEud2Vic2l0ZSxcbiAgICAgIGlkOiBkYXRhLmlkLFxuICAgICAgb3JkaW5hbDogaW5kZXggKyAxXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBNYXBzIHZpZXcgbW9kZWwgZmllbGRzIGJhc2VkIG9uIHRoZSBBUEkgZGF0YSBmb3IgYSBHb29nbGUgQ3VzdG9tIFNlYXJjaCBFbmdpbmUgb2JqZWN0LlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0fVxuICAgKi9cbiAgc3RhdGljIGZyb21Hb29nbGVDdXN0b21TZWFyY2hFbmdpbmUgKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFJlc3VsdCh7XG4gICAgICByYXc6IGRhdGEsXG4gICAgICB0aXRsZTogZGF0YS5odG1sVGl0bGUucmVwbGFjZSgvKDwoW14+XSspPikvaWcsICcnKSxcbiAgICAgIGRldGFpbHM6IGRhdGEuaHRtbFNuaXBwZXQsXG4gICAgICBsaW5rOiBkYXRhLmxpbmtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBBUEkgcmVzdWx0IG9iamVjdCBpbnRvIGEgcmVzdWx0IHZpZXcgbW9kZWwuXG4gICAqIE1hcHMgdmlldyBtb2RlbCBmaWVsZHMgYmFzZWQgb24gdGhlIEFQSSBkYXRhIGZvciBhIEJpbmcgQ3VzdG9tIFNlYXJjaCBFbmdpbmUgb2JqZWN0LlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0fVxuICAgKi9cbiAgc3RhdGljIGZyb21CaW5nQ3VzdG9tU2VhcmNoRW5naW5lIChkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBSZXN1bHQoe1xuICAgICAgcmF3OiBkYXRhLFxuICAgICAgdGl0bGU6IGRhdGEubmFtZSxcbiAgICAgIGRldGFpbHM6IGRhdGEuc25pcHBldCxcbiAgICAgIGxpbms6IGRhdGEudXJsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIHJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBNYXBzIHZpZXcgbW9kZWwgZmllbGRzIGJhc2VkIG9uIHRoZSBBUEkgZGF0YSBmb3IgYSBaZW5kZXNrIFNlYXJjaCBFbmdpbmUgb2JqZWN0LlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0fVxuICAgKi9cbiAgc3RhdGljIGZyb21aZW5kZXNrU2VhcmNoRW5naW5lIChkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBSZXN1bHQoe1xuICAgICAgcmF3OiBkYXRhLFxuICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgICBkZXRhaWxzOiBkYXRhLnNuaXBwZXQsXG4gICAgICBsaW5rOiBkYXRhLmh0bWxfdXJsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVHJ1bmNhdGVzIHN0cmluZ3MgdG8gMjUwIGNoYXJhY3RlcnMsIGF0dGVtcHRpbmcgdG8gcHJlc2VydmUgd2hvbGUgd29yZHNcbiAgICogQHBhcmFtIHN0ciB7c3RyaW5nfSB0aGUgc3RyaW5nIHRvIHRydW5jYXRlXG4gICAqIEBwYXJhbSBsaW1pdCB7TnVtYmVyfSB0aGUgbWF4aW11bSBjaGFyYWN0ZXIgbGVuZ3RoIHRvIHJldHVyblxuICAgKiBAcGFyYW0gdHJhaWxpbmcge3N0cmluZ30gYSB0cmFpbGluZyBzdHJpbmcgdG8gZGVub3RlIHRydW5jYXRpb24sIGUuZy4gJy4uLidcbiAgICogQHBhcmFtIHNlcCB7c3RyaW5nfSB0aGUgd29yZCBzZXBhcmF0b3JcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyB0cnVuY2F0ZSAoc3RyLCBsaW1pdCA9IDI1MCwgdHJhaWxpbmcgPSAnLi4uJywgc2VwID0gJyAnKSB7XG4gICAgaWYgKCFzdHIgfHwgc3RyLmxlbmd0aCA8PSBsaW1pdCkge1xuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICAvLyBUT0RPIChibWNnaW5uaXMpOiBzcGxpdCBwdW5jdHVhdGlvbiB0b28gc28gd2UgZG9uJ3QgZW5kIHVwIHdpdGggXCJmb28sLi4uXCJcbiAgICBjb25zdCB3b3JkcyA9IHN0ci5zcGxpdChzZXApO1xuICAgIGNvbnN0IG1heCA9IGxpbWl0IC0gdHJhaWxpbmcubGVuZ3RoO1xuICAgIGxldCB0cnVuY2F0ZWQgPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHdvcmQgPSB3b3Jkc1tpXTtcbiAgICAgIGlmICh0cnVuY2F0ZWQubGVuZ3RoICsgd29yZC5sZW5ndGggPiBtYXggfHxcbiAgICAgICAgKGkgIT09IDAgJiYgdHJ1bmNhdGVkLmxlbmd0aCArIHdvcmQubGVuZ3RoICsgc2VwLmxlbmd0aCA+IG1heCkpIHtcbiAgICAgICAgdHJ1bmNhdGVkICs9IHRyYWlsaW5nO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgdHJ1bmNhdGVkICs9IGkgPT09IDAgPyB3b3JkIDogc2VwICsgd29yZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1bmNhdGVkO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWN0aW9uICovXG5cbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuaW1wb3J0IFJlc3VsdEZhY3RvcnkgZnJvbSAnLi9yZXN1bHRmYWN0b3J5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yIChkYXRhLCB1cmwsIGZvcm1hdHRlcnMpIHtcbiAgICB0aGlzLnNlYXJjaFN0YXRlID0gU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURTtcbiAgICB0aGlzLnZlcnRpY2FsQ29uZmlnSWQgPSBkYXRhLnZlcnRpY2FsQ29uZmlnSWQgfHwgbnVsbDtcbiAgICB0aGlzLnJlc3VsdHNDb3VudCA9IGRhdGEucmVzdWx0c0NvdW50IHx8IDA7XG4gICAgdGhpcy5lbmNvZGVkU3RhdGUgPSBkYXRhLmVuY29kZWRTdGF0ZSB8fCAnJztcbiAgICB0aGlzLmFwcGxpZWRRdWVyeUZpbHRlcnMgPSBBcHBsaWVkUXVlcnlGaWx0ZXIuZnJvbShkYXRhLmFwcGxpZWRRdWVyeUZpbHRlcnMpO1xuICAgIHRoaXMuZmFjZXRzID0gZGF0YS5mYWNldHMgfHwgbnVsbDtcbiAgICB0aGlzLnJlc3VsdHMgPSBSZXN1bHRGYWN0b3J5LmZyb20oZGF0YS5yZXN1bHRzLCBmb3JtYXR0ZXJzLCB0aGlzLnZlcnRpY2FsQ29uZmlnSWQsIGRhdGEuc291cmNlKTtcbiAgICB0aGlzLm1hcCA9IFNlY3Rpb24ucGFyc2VNYXAoZGF0YS5yZXN1bHRzKTtcbiAgICB0aGlzLnZlcnRpY2FsVVJMID0gdXJsIHx8IG51bGw7XG4gIH1cblxuICBzdGF0aWMgcGFyc2VNYXAgKHJlc3VsdHMpIHtcbiAgICBsZXQgbWFwTWFya2VycyA9IFtdO1xuXG4gICAgbGV0IGNlbnRlckNvb3JkaW5hdGVzID0ge307XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc3VsdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIFJlbW92ZSBsZWdhY3kgZmFsbGJhY2sgZnJvbSBhbGwgZGF0YSBmb3JtYXRcbiAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzW2pdLmRhdGEgfHwgcmVzdWx0c1tqXTtcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZSkge1xuICAgICAgICBpZiAoIWNlbnRlckNvb3JkaW5hdGVzLmxhdGl0dWRlKSB7XG4gICAgICAgICAgY2VudGVyQ29vcmRpbmF0ZXMgPSB7XG4gICAgICAgICAgICBsYXRpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sb25naXR1ZGVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIG1hcE1hcmtlcnMucHVzaCh7XG4gICAgICAgICAgaXRlbTogcmVzdWx0LFxuICAgICAgICAgIGxhYmVsOiBtYXBNYXJrZXJzLmxlbmd0aCArIDEsXG4gICAgICAgICAgbGF0aXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubGF0aXR1ZGUsXG4gICAgICAgICAgbG9uZ2l0dWRlOiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlLmxvbmdpdHVkZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgJ21hcENlbnRlcic6IGNlbnRlckNvb3JkaW5hdGVzLFxuICAgICAgJ21hcE1hcmtlcnMnOiBtYXBNYXJrZXJzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzZWN0aW9uIGZyb20gdGhlIHByb3ZpZGVkIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG1vZHVsZXMgVGhlIHJlc3VsdCBtb2R1bGVzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB1cmxzIFRoZSB0YWIgdXJsc1xuICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59IGZvcm1hdHRlcnMgRmllbGQgZm9ybWF0dGVycyBmb3IgcmVzdWx0c1xuICAgKi9cbiAgc3RhdGljIGZyb20gKG1vZHVsZXMsIHVybHMsIGZvcm1hdHRlcnMpIHtcbiAgICBsZXQgc2VjdGlvbnMgPSBbXTtcbiAgICBpZiAoIW1vZHVsZXMpIHtcbiAgICAgIHJldHVybiBzZWN0aW9ucztcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobW9kdWxlcykpIHtcbiAgICAgIHJldHVybiBuZXcgU2VjdGlvbihtb2R1bGVzLCBudWxsLCBmb3JtYXR0ZXJzKTtcbiAgICB9XG5cbiAgICAvLyBPdXIgc2VjdGlvbnMgc2hvdWxkIGNvbnRhaW4gYSBwcm9wZXJ0eSBvZiBtYXBNYXJrZXIgb2JqZWN0c1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgc2VjdGlvbnMucHVzaChcbiAgICAgICAgbmV3IFNlY3Rpb24oXG4gICAgICAgICAgbW9kdWxlc1tpXSxcbiAgICAgICAgICB1cmxzW21vZHVsZXNbaV0udmVydGljYWxDb25maWdJZF0sXG4gICAgICAgICAgZm9ybWF0dGVyc1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBzZWN0aW9ucztcbiAgfVxufVxuXG5jbGFzcyBBcHBsaWVkUXVlcnlGaWx0ZXIge1xuICAvLyBTdXBwb3J0IGxlZ2FjeSBtb2RlbCBhbmQgbmV3IG1vZGVsIHVudGlsIGZ1bGx5IG1pZ3JhdGVkLlxuICAvLyBUT0RPKGJpbGx5KSBSZW1vdmUgdGhlIGxlZnQgZXhwcmVzc2lvbiBkdXJpbmcgYXNzaWdubWVudCB3aGVuIG1pZ3JhdGVkLlxuICBjb25zdHJ1Y3RvciAoYXBwbGllZFF1ZXJ5RmlsdGVyKSB7XG4gICAgdGhpcy5rZXkgPSBhcHBsaWVkUXVlcnlGaWx0ZXIua2V5IHx8IGFwcGxpZWRRdWVyeUZpbHRlci5kaXNwbGF5S2V5O1xuICAgIHRoaXMudmFsdWUgPSBhcHBsaWVkUXVlcnlGaWx0ZXIudmFsdWUgfHwgYXBwbGllZFF1ZXJ5RmlsdGVyLmRpc3BsYXlWYWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChhcHBsaWVkUXVlcnlGaWx0ZXJzKSB7XG4gICAgbGV0IGZpbHRlcnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFwcGxpZWRRdWVyeUZpbHRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZpbHRlcnMucHVzaChuZXcgQXBwbGllZFF1ZXJ5RmlsdGVyKGFwcGxpZWRRdWVyeUZpbHRlcnNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbHRlcnM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFVuaXZlcnNhbFJlc3VsdHMgKi9cblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9zZWN0aW9uJztcbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbml2ZXJzYWxSZXN1bHRzIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICB0aGlzLnF1ZXJ5SWQgPSBkYXRhLnF1ZXJ5SWQgfHwgbnVsbDtcbiAgICB0aGlzLnNlY3Rpb25zID0gZGF0YS5zZWN0aW9ucyB8fCBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBzZWFyY2gsIHVzZWQgdG8gcmVuZGVyIGRpZmZlcmVudCB0ZW1wbGF0ZXMgYmVmb3JlLCBkdXJpbmcsXG4gICAgICogYW5kIGFmdGVyIGxvYWRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc2VhcmNoU3RhdGUgPSBkYXRhLnNlYXJjaFN0YXRlIHx8IFNlYXJjaFN0YXRlcy5TRUFSQ0hfQ09NUExFVEU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHVuaXZlcnNhbCByZXN1bHRzIGZyb20gc2VydmVyIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlIFRoZSBzZXJ2ZXIgcmVzcG9uc2VcbiAgICogQHBhcmFtIHtPYmplY3R9IHVybHMgVGhlIHRhYiB1cmxzXG4gICAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn0gZm9ybWF0dGVycyBUaGUgZmllbGQgZm9ybWF0dGVycyB0byB1c2VcbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSwgdXJscywgZm9ybWF0dGVycykge1xuICAgIHJldHVybiBuZXcgVW5pdmVyc2FsUmVzdWx0cyh7XG4gICAgICBxdWVyeUlkOiByZXNwb25zZS5xdWVyeUlkLFxuICAgICAgc2VjdGlvbnM6IFNlY3Rpb24uZnJvbShyZXNwb25zZS5tb2R1bGVzLCB1cmxzLCBmb3JtYXR0ZXJzKVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIFVuaXZlcnZhbFJlc3VsdHMgb2JqZWN0IHJlcHJlc2VudGluZyBsb2FkaW5nIHJlc3VsdHNcbiAgICogQHJldHVybiB7VW5pdmVyc2FsUmVzdWx0c31cbiAgICovXG4gIHN0YXRpYyBzZWFyY2hMb2FkaW5nICgpIHtcbiAgICByZXR1cm4gbmV3IFVuaXZlcnNhbFJlc3VsdHMoeyBzZWFyY2hTdGF0ZTogU2VhcmNoU3RhdGVzLlNFQVJDSF9MT0FESU5HIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEaXJlY3RBbnN3ZXIgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0QW5zd2VyIHtcbiAgY29uc3RydWN0b3IgKGRpcmVjdEFuc3dlciA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkaXJlY3RBbnN3ZXIpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGlyZWN0QW5zd2VyIG1vZGVsIGZyb20gdGhlIGdpdmVuIHNlcnZlciBkYXRhIGFuZCBmb3JtYXR0ZXJzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZSBUaGUgc2VydmVyIGRpcmVjdCBhbnN3ZXJcbiAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fSBmb3JtYXR0ZXJzIFRoZSBmb3JtYXR0ZXJzIHRvIGFwcGx5IHRvIHRoaXMgZGlyZWN0IGFuc3dlclxuICAgKi9cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlLCBmb3JtYXR0ZXJzKSB7XG4gICAgY29uc3QgZGF0YSA9IHsgLi4ucmVzcG9uc2UgfTtcbiAgICBjb25zdCB7IGFuc3dlciwgcmVsYXRlZEl0ZW0gfSA9IGRhdGE7XG5cbiAgICBpZiAoYW5zd2VyICYmIGZvcm1hdHRlcnNbYW5zd2VyLmZpZWxkQXBpTmFtZV0pIHtcbiAgICAgIGFuc3dlci52YWx1ZSA9IGZvcm1hdHRlcnNbYW5zd2VyLmZpZWxkQXBpTmFtZV0oXG4gICAgICAgIGFuc3dlci52YWx1ZSxcbiAgICAgICAgcmVsYXRlZEl0ZW0uZGF0YS5maWVsZFZhbHVlcyxcbiAgICAgICAgcmVsYXRlZEl0ZW0udmVydGljYWxDb25maWdJZCxcbiAgICAgICAgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEaXJlY3RBbnN3ZXIoZGF0YSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE5hdmlnYXRpb24gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiB7XG4gIGNvbnN0cnVjdG9yICh0YWJPcmRlcikge1xuICAgIHRoaXMudGFiT3JkZXIgPSB0YWJPcmRlciB8fCBbXTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKG1vZHVsZXMpIHtcbiAgICBsZXQgbmF2ID0gW107XG4gICAgaWYgKCFtb2R1bGVzIHx8ICFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmF2O1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5hdi5wdXNoKG1vZHVsZXNbaV0udmVydGljYWxDb25maWdJZCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgTmF2aWdhdGlvbihuYXYpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBWZXJ0aWNhbFJlc3VsdHMgKi9cblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9zZWN0aW9uJztcbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0aWNhbFJlc3VsdHMge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IHNlYXJjaFN0YXRlOiBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFIH0sIGRhdGEpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kIHRoZSBwcm92aWRlZCByZXN1bHRzIHRvIHRoZSBjdXJyZW50IHJlc3VsdHNcbiAgICogQHBhcmFtIHtWZXJ0aWNhbFJlc3VsdHN9IHJlc3VsdHMgdGhlIHJlc3VsdHMgdG8gYXBwZW5kIHRvIHRoZSBjdXJyZW50IHJlc3VsdHNcbiAgICovXG4gIGFwcGVuZCAocmVzdWx0cykge1xuICAgIGNvbnN0IG1lcmdlZCA9IHsgLi4udGhpcyB9O1xuICAgIG1lcmdlZC5yZXN1bHRzID0gdGhpcy5yZXN1bHRzLmNvbmNhdChyZXN1bHRzLnJlc3VsdHMpO1xuICAgIG1lcmdlZC5tYXAubWFwTWFya2VycyA9IHRoaXMubWFwLm1hcE1hcmtlcnMuY29uY2F0KHJlc3VsdHMubWFwLm1hcE1hcmtlcnMpO1xuICAgIHJldHVybiBuZXcgVmVydGljYWxSZXN1bHRzKG1lcmdlZCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHZlcnRpY2FsIHJlc3VsdHMgZnJvbSBzZXJ2ZXIgZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2UgVGhlIHNlcnZlciByZXNwb25zZVxuICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59IGZvcm1hdHRlcnMgVGhlIGZpZWxkIGZvcm1hdHRlcnMgdG8gdXNlXG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UsIGZvcm1hdHRlcnMpIHtcbiAgICByZXR1cm4gbmV3IFZlcnRpY2FsUmVzdWx0cyhTZWN0aW9uLmZyb20ocmVzcG9uc2UsIG51bGwsIGZvcm1hdHRlcnMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBWZXJ0aWNhbFJlc3VsdHMgb2JqZWN0IHJlcHJlc2VudGluZyBsb2FkaW5nIHJlc3VsdHNcbiAgICogQHJldHVybiB7VmVydGljYWxSZXN1bHRzfVxuICAgKi9cbiAgc3RhdGljIHNlYXJjaExvYWRpbmcgKCkge1xuICAgIHJldHVybiBuZXcgVmVydGljYWxSZXN1bHRzKHsgc2VhcmNoU3RhdGU6IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTdG9yYWdlS2V5cyAqL1xuXG4vKipcbiAqIFN0b3JhZ2VLZXlzIGlzIGFuIEVOVU0gYXJlIGNvbnNpZGVyZWQgdGhlIHJvb3QgY29udGV4dFxuICogZm9yIGhvdyBkYXRhIGlzIHN0b3JlZCBhbmQgc2NvcGVkIGluIHRoZSBzdG9yYWdlLlxuICpcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgTkFWSUdBVElPTjogJ25hdmlnYXRpb24nLFxuICBVTklWRVJTQUxfUkVTVUxUUzogJ3VuaXZlcnNhbC1yZXN1bHRzJyxcbiAgVkVSVElDQUxfUkVTVUxUUzogJ3ZlcnRpY2FsLXJlc3VsdHMnLFxuICBBVVRPQ09NUExFVEU6ICdhdXRvY29tcGxldGUnLFxuICBESVJFQ1RfQU5TV0VSOiAnZGlyZWN0LWFuc3dlcicsXG4gIEZJTFRFUjogJ2ZpbHRlcicsXG4gIFFVRVJZOiAncXVlcnknLFxuICBRVUVSWV9JRDogJ3F1ZXJ5LWlkJyxcbiAgRkFDRVRfRklMVEVSOiAnZmFjZXQtZmlsdGVyJyxcbiAgRFlOQU1JQ19GSUxURVJTOiAnZHluYW1pYy1maWx0ZXJzJyxcbiAgU0VBUkNIX0xJTUlUOiAnc2VhcmNoLWxpbWl0JyxcbiAgUEFSQU1TOiAncGFyYW1zJyxcbiAgR0VPTE9DQVRJT046ICdnZW9sb2NhdGlvbicsXG4gIElOVEVOVFM6ICdpbnRlbnRzJyxcbiAgUVVFU1RJT05fU1VCTUlTU0lPTjogJ3F1ZXN0aW9uLXN1Ym1pc3Npb24nXG59O1xuIiwiLyoqIEBtb2R1bGUgRHluYW1pY0ZpbHRlcnMgKi9cblxuLyoqXG4gKiBNb2RlbCByZXByZXNlbnRpbmcgYSBzZXQgb2YgZHluYW1pYyBmaWx0ZXJzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNGaWx0ZXJzIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBmaWx0ZXJzIHRoaXMgbW9kZWwgaG9sZHNcbiAgICAgKiBAdHlwZSB7e2xhYmVsOiBzdHJpbmcsIGZpZWxkSWQ6IHN0cmluZywgb3B0aW9uczogb2JqZWN0W119fVxuICAgICAqL1xuICAgIHRoaXMuZmlsdGVycyA9IGRhdGEuZmlsdGVycyB8fCBbXTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9yZ2FuaXplICdmYWNldHMnIGZyb20gdGhlIGFwaSByZXNwb25zZSBpbnRvIGR5bmFtaWMgZmlsdGVyc1xuICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2UgZHluYW1pYyBmaWx0ZXIgcmVzcG9uc2UgZnJvbSB0aGUgYXBpXG4gICAqIEByZXR1cm5zIHtEeW5hbWljRmlsdGVyc31cbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSkge1xuICAgIGNvbnN0IHsgZmFjZXRzIH0gPSByZXNwb25zZTtcbiAgICBjb25zdCBkeW5hbWljRmlsdGVycyA9IGZhY2V0cy5tYXAoZiA9PiAoe1xuICAgICAgbGFiZWw6IGZbJ2Rpc3BsYXlOYW1lJ10sXG4gICAgICBmaWVsZElkOiBmWydmaWVsZElkJ10sXG4gICAgICBvcHRpb25zOiBmLm9wdGlvbnMubWFwKG8gPT4gKHtcbiAgICAgICAgbGFiZWw6IG9bJ2Rpc3BsYXlOYW1lJ10sXG4gICAgICAgIGNvdW50TGFiZWw6IG9bJ2NvdW50J10sXG4gICAgICAgIHNlbGVjdGVkOiBvWydzZWxlY3RlZCddLFxuICAgICAgICBmaWx0ZXI6IG9bJ2ZpbHRlciddXG4gICAgICB9KSlcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gbmV3IER5bmFtaWNGaWx0ZXJzKHsgZmlsdGVyczogZHluYW1pY0ZpbHRlcnMgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaEludGVudHMgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoSW50ZW50cyB7XG4gIGNvbnN0cnVjdG9yIChpbnRlbnRzKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGludGVudCB0byBmaW5kIHJlc3VsdHMgYmFzZWQgb24gdGhlIHVzZXIncyBsb2NhdGlvblxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMubmVhck1lID0gaW50ZW50cy5uZWFyTWU7XG5cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBTZWFyY2hJbnRlbnRzIGZyb20gc2VydmVyIHJlc3BvbnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZSBUaGUgc2VydmVyIHJlc3BvbnNlIGludGVudHNcbiAgICogQHJldHVybnMge1NlYXJjaEludGVudHN9XG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UpIHtcbiAgICBjb25zdCBpbnRlbnRzID0gcmVzcG9uc2UgfHwgW107XG5cbiAgICByZXR1cm4gbmV3IFNlYXJjaEludGVudHMoe1xuICAgICAgbmVhck1lOiBpbnRlbnRzLmluY2x1ZGVzKCdORUFSX01FJylcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VhcmNoRGF0YVRyYW5zZm9ybWVyICovXG5cbmltcG9ydCBVbml2ZXJzYWxSZXN1bHRzIGZyb20gJy4uL21vZGVscy91bml2ZXJzYWxyZXN1bHRzJztcbmltcG9ydCBEaXJlY3RBbnN3ZXIgZnJvbSAnLi4vbW9kZWxzL2RpcmVjdGFuc3dlcic7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9tb2RlbHMvbmF2aWdhdGlvbic7XG5pbXBvcnQgVmVydGljYWxSZXN1bHRzIGZyb20gJy4uL21vZGVscy92ZXJ0aWNhbHJlc3VsdHMnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IER5bmFtaWNGaWx0ZXJzIGZyb20gJy4uL21vZGVscy9keW5hbWljZmlsdGVycyc7XG5pbXBvcnQgU2VhcmNoSW50ZW50cyBmcm9tICcuLi9tb2RlbHMvc2VhcmNoaW50ZW50cyc7XG5cbi8qKlxuICogQSBEYXRhIFRyYW5zZm9ybWVyIHRoYXQgdGFrZXMgdGhlIHJlc3BvbnNlIG9iamVjdCBmcm9tIGEgU2VhcmNoIHJlcXVlc3RcbiAqIEFuZCB0cmFuc2Zvcm1zIGluIHRvIGEgZnJvbnQtZW5kIG9yaWVudGVkIGRhdGEgc3RydWN0dXJlIHRoYXQgb3VyXG4gKiBjb21wb25lbnQgbGlicmFyeSBhbmQgY29yZSBzdG9yYWdlIHVuZGVyc3RhbmQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaERhdGFUcmFuc2Zvcm1lciB7XG4gIHN0YXRpYyB0cmFuc2Zvcm0gKGRhdGEsIHVybHMgPSB7fSwgZm9ybWF0dGVycykge1xuICAgIGxldCByZXNwb25zZSA9IGRhdGEucmVzcG9uc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgIFtTdG9yYWdlS2V5cy5RVUVSWV9JRF06IHJlc3BvbnNlLnF1ZXJ5SWQsXG4gICAgICBbU3RvcmFnZUtleXMuTkFWSUdBVElPTl06IE5hdmlnYXRpb24uZnJvbShyZXNwb25zZS5tb2R1bGVzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSXTogRGlyZWN0QW5zd2VyLmZyb20ocmVzcG9uc2UuZGlyZWN0QW5zd2VyLCBmb3JtYXR0ZXJzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUU106IFVuaXZlcnNhbFJlc3VsdHMuZnJvbShyZXNwb25zZSwgdXJscywgZm9ybWF0dGVycyksXG4gICAgICBbU3RvcmFnZUtleXMuSU5URU5UU106IFNlYXJjaEludGVudHMuZnJvbShyZXNwb25zZS5zZWFyY2hJbnRlbnRzKVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgdHJhbnNmb3JtVmVydGljYWwgKGRhdGEsIGZvcm1hdHRlcnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXTogZGF0YS5yZXNwb25zZS5xdWVyeUlkLFxuICAgICAgW1N0b3JhZ2VLZXlzLk5BVklHQVRJT05dOiBuZXcgTmF2aWdhdGlvbigpLCAvLyBWZXJ0aWNhbCBkb2Vzbid0IHJlc3BvbmQgd2l0aCBvcmRlcmluZywgc28gdXNlIGVtcHR5IG5hdi5cbiAgICAgIFtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXTogVmVydGljYWxSZXN1bHRzLmZyb20oZGF0YS5yZXNwb25zZSwgZm9ybWF0dGVycyksXG4gICAgICBbU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTXTogRHluYW1pY0ZpbHRlcnMuZnJvbShkYXRhLnJlc3BvbnNlKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5JTlRFTlRTXTogU2VhcmNoSW50ZW50cy5mcm9tKGRhdGEucmVzcG9uc2Uuc2VhcmNoSW50ZW50cylcbiAgICB9O1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBRdWVzdGlvblN1Ym1pc3Npb24gKi9cblxuLyoqXG4gKiBRdWVzdGlvblN1Ym1pc3Npb24gaXMgdGhlIGNvcmUgc3RhdGUgbW9kZWxcbiAqIHRvIHBvd2VyIHRoZSBRdWVzdGlvblN1Ym1pc3Npb24gY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0aW9uU3VibWlzc2lvbiB7XG4gIGNvbnN0cnVjdG9yIChxdWVzdGlvbiA9IHt9LCBlcnJvcnMpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgYXV0aG9yIG9mIHRoZSBxdWVzdGlvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5uYW1lID0gcXVlc3Rpb24ubmFtZSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIHF1ZXN0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmVtYWlsID0gcXVlc3Rpb24uZW1haWwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIHByaXZhY3kgcG9saWN5IHdhcyBhcHByb3ZlZFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucHJpdmFjeVBvbGljeSA9IHF1ZXN0aW9uLnByaXZhY3lQb2xpY3kgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVzdGlvbiB0byBiZSBzZW50IHRvIHRoZSBzZXJ2ZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlc3Rpb25UZXh0ID0gcXVlc3Rpb24ucXVlc3Rpb25UZXh0IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBbHRlcm5hdGl2ZSBxdWVzdGlvbiBtZXRhIGluZm9ybWF0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXN0aW9uRGVzY3JpcHRpb24gPSBxdWVzdGlvbi5xdWVzdGlvbkRlc2NyaXB0aW9uIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBDb250YWlucyBhbnkgZXJyb3JzIGFib3V0IHRoZSBxdWVzdGlvbiBzdWJtaXNzaW9uXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLmVycm9ycyA9IGVycm9ycyB8fCBudWxsO1xuXG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBzdWJtaXR0ZWQgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBxdWVzdGlvblN1Ym1pdHRlZDogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZXJyb3JzIChxdWVzdGlvbiwgZXJyb3JzKSB7XG4gICAgcmV0dXJuIFF1ZXN0aW9uU3VibWlzc2lvbihxdWVzdGlvbiwgZXJyb3JzKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQ29yZSAqL1xuXG5pbXBvcnQgU2VhcmNoQXBpIGZyb20gJy4vc2VhcmNoL3NlYXJjaGFwaSc7XG5pbXBvcnQgQXV0b0NvbXBsZXRlQXBpIGZyb20gJy4vc2VhcmNoL2F1dG9jb21wbGV0ZWFwaSc7XG5pbXBvcnQgUXVlc3Rpb25BbnN3ZXJBcGkgZnJvbSAnLi9zZWFyY2gvcXVlc3Rpb25hbnN3ZXJhcGknO1xuXG5pbXBvcnQgU2VhcmNoRGF0YVRyYW5zZm9ybWVyIGZyb20gJy4vc2VhcmNoL3NlYXJjaGRhdGF0cmFuc2Zvcm1lcic7XG5cbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFZlcnRpY2FsUmVzdWx0cyBmcm9tICcuL21vZGVscy92ZXJ0aWNhbHJlc3VsdHMnO1xuaW1wb3J0IFVuaXZlcnNhbFJlc3VsdHMgZnJvbSAnLi9tb2RlbHMvdW5pdmVyc2FscmVzdWx0cyc7XG5pbXBvcnQgUXVlc3Rpb25TdWJtaXNzaW9uIGZyb20gJy4vbW9kZWxzL3F1ZXN0aW9uc3VibWlzc2lvbic7XG5cbi8qKlxuICogQ29yZSBpcyB0aGUgbWFpbiBhcHBsaWNhdGlvbiBjb250YWluZXIgZm9yIGFsbCBvZiB0aGUgbmV0d29yayBhbmQgc3RvcmFnZVxuICogcmVsYXRlZCBiZWhhdmlvcnMgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JlIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcuYXBpS2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGBhcGlLZXlgLiBUeXBlIG11c3QgYmUge3N0cmluZ30nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5hbnN3ZXJzS2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGBhbnN3ZXJzS2V5YC4gVHlwZSBtdXN0IGJlIHtzdHJpbmd9Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNsaWVudCBBUEkgS2V5IHVzZWQgZm9yIGFsbCByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBjb25maWcuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNsaWVudCBBbnN3ZXJzIEtleSB1c2VkIGZvciBhbGwgcmVxdWVzdHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYW5zd2Vyc0tleSA9IGNvbmZpZy5hbnN3ZXJzS2V5O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNsaWVudCBsb2NhbGUgdXNlZCBmb3IgYWxsIHJlcXVlc3RzLiBJZiBub3Qgc3BlY2lmaWVkLCBkZWZhdWx0cyB0byBcImVuXCIgKGZvclxuICAgICAqIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5KS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbG9jYWxlID0gY29uZmlnLmxvY2FsZSB8fCAnZW4nO1xuXG4gICAgLyoqXG4gICAgICogQSBtYXAgb2YgZmllbGQgZm9ybWF0dGVycyB1c2VkIHRvIGZvcm1hdCByZXN1bHRzLCBpZiBwcmVzZW50XG4gICAgICogQHR5cGUge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWVsZEZvcm1hdHRlcnMgPSBjb25maWcuZmllbGRGb3JtYXR0ZXJzIHx8IHt9O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNvcmUgZGF0YSBzdG9yYWdlIHRoYXQgcG93ZXJzIHRoZSBVSVxuICAgICAqIEB0eXBlIHtHbG9iYWxTdG9yYWdlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlID0gY29uZmlnLmdsb2JhbFN0b3JhZ2U7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY29yZSBwZXJzaXN0ZW50IHN0b3JhZ2VcbiAgICAgKiBAdHlwZSB7UGVyc2lzdGVudFN0b3JhZ2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnBlcnNpc3RlbnRTdG9yYWdlID0gY29uZmlnLnBlcnNpc3RlbnRTdG9yYWdlO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3Rpb24gY29udGFpbmluZyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgUkVTVGZ1bCBzZWFyY2ggQVBJXG4gICAgICogRm9yIGJvdGggdmVydGljYWwgYW5kIHVuaXZlcnNhbCBzZWFyY2hcbiAgICAgKiBAdHlwZSB7U2VhcmNofVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc2VhcmNoZXIgPSBuZXcgU2VhcmNoQXBpKHtcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgYW5zd2Vyc0tleTogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgIGxvY2FsZTogdGhpcy5fbG9jYWxlXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiBjb250YWluaW5nIHRoZSBpbnRlZ3JhdGlvbiB3aXRoIHRoZSBSRVNUZnVsIGF1dG9jb21wbGV0ZSBBUElcbiAgICAgKiBGb3IgZmlsdGVyIHNlYXJjaCwgdmVydGljYWwgYXV0b2NvbXBsZXRlLCBhbmQgdW5pdmVyc2FsIGF1dG9jb21wbGV0ZVxuICAgICAqIEB0eXBlIHtBdXRvY29tcGxldGV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hdXRvQ29tcGxldGUgPSBuZXcgQXV0b0NvbXBsZXRlQXBpKHtcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgYW5zd2Vyc0tleTogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgIGxvY2FsZTogdGhpcy5fbG9jYWxlXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgUSZBIHJlc3QgaW50ZXJmYWNlXG4gICAgICogQHR5cGUge1F1ZXN0aW9uQW5zd2VyQXBpfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcXVlc3Rpb25BbnN3ZXIgPSBuZXcgUXVlc3Rpb25BbnN3ZXJBcGkoe1xuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXlcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggaW4gdGhlIGNvbnRleHQgb2YgYSB2ZXJ0aWNhbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmVydGljYWxLZXkgdmVydGljYWwgSUQgZm9yIHRoZSBzZWFyY2hcbiAgICogQHBhcmFtIHtvYmplY3R9IHF1ZXJ5IFRoZSBxdWVyeSBkZXRhaWxzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5pbnB1dCBUaGUgaW5wdXQgdG8gc2VhcmNoIGZvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkuZmlsdGVyIFRoZSBmaWx0ZXIgdG8gdXNlIGluIHRoZSBzZWFyY2hcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5LmZhY2V0RmlsdGVyIFRoZSBmYWNldCBmaWx0ZXIgdG8gdXNlIGluIHRoZSBzZWFyY2hcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1ZXJ5LmxpbWl0IFRoZSBtYXggbnVtYmVyIG9mIHJlc3VsdHMgdG8gaW5jbHVkZSwgbWF4IG9mIDUwXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBxdWVyeS5vZmZzZXQgVGhlIHJlc3VsdHMgb2Zmc2V0LCBmb3IgZmV0Y2hpbmcgbW9yZSByZXN1bHRzIG9mIHRoZSBzYW1lIHF1ZXJ5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeS5pZCBUaGUgcXVlcnkgSUQgdG8gdXNlLiBJZiBwYWdpbmcgd2l0aGluIGEgcXVlcnksIHRoZSBzYW1lIElEIHNob3VsZCBiZSB1c2VkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcXVlcnkuYXBwZW5kIElmIHRydWUsIGFkZHMgdGhlIHJlc3VsdHMgb2YgdGhpcyBxdWVyeSB0byB0aGUgZW5kIG9mIHRoZSBjdXJyZW50IHJlc3VsdHMsIGRlZmF1bHRzIGZhbHNlXG4gICAqL1xuICB2ZXJ0aWNhbFNlYXJjaCAodmVydGljYWxLZXksIHF1ZXJ5KSB7XG4gICAgaWYgKCFxdWVyeS5hcHBlbmQpIHtcbiAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUywgVmVydGljYWxSZXN1bHRzLnNlYXJjaExvYWRpbmcoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaGVyXG4gICAgICAudmVydGljYWxTZWFyY2godmVydGljYWxLZXksIHtcbiAgICAgICAgbGltaXQ6IHRoaXMuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5TRUFSQ0hfTElNSVQpLFxuICAgICAgICBnZW9sb2NhdGlvbjogdGhpcy5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLkdFT0xPQ0FUSU9OKSxcbiAgICAgICAgLi4ucXVlcnksXG4gICAgICAgIGlzRHluYW1pY0ZpbHRlcnNFbmFibGVkOiB0aGlzLl9pc0R5bmFtaWNGaWx0ZXJzRW5hYmxlZFxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IFNlYXJjaERhdGFUcmFuc2Zvcm1lci50cmFuc2Zvcm1WZXJ0aWNhbChyZXNwb25zZSwgdGhpcy5fZmllbGRGb3JtYXR0ZXJzKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBkYXRhW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuTkFWSUdBVElPTiwgZGF0YVtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXSk7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuSU5URU5UUywgZGF0YVtTdG9yYWdlS2V5cy5JTlRFTlRTXSk7XG5cbiAgICAgICAgaWYgKHF1ZXJ5LmFwcGVuZCkge1xuICAgICAgICAgIGNvbnN0IG1lcmdlZFJlc3VsdHMgPSB0aGlzLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUylcbiAgICAgICAgICAgIC5hcHBlbmQoZGF0YVtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXSk7XG4gICAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTLCBtZXJnZWRSZXN1bHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFMsIGRhdGFbU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUU10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGFbU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTXSkge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuRFlOQU1JQ19GSUxURVJTLCBkYXRhW1N0b3JhZ2VLZXlzLkRZTkFNSUNfRklMVEVSU10pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaCAocXVlcnlTdHJpbmcsIHVybHMpIHtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTLCBVbml2ZXJzYWxSZXN1bHRzLnNlYXJjaExvYWRpbmcoKSk7XG5cbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoZXJcbiAgICAgIC51bml2ZXJzYWxTZWFyY2gocXVlcnlTdHJpbmcsIHRoaXMuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5HRU9MT0NBVElPTikpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBTZWFyY2hEYXRhVHJhbnNmb3JtZXIudHJhbnNmb3JtKHJlc3BvbnNlLCB1cmxzLCB0aGlzLl9maWVsZEZvcm1hdHRlcnMpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFUllfSUQsIGRhdGFbU3RvcmFnZUtleXMuUVVFUllfSURdKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5OQVZJR0FUSU9OLCBkYXRhW1N0b3JhZ2VLZXlzLk5BVklHQVRJT05dKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSLCBkYXRhW1N0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVJdKTtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUUywgZGF0YVtTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUU10sIHVybHMpO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLklOVEVOVFMsIGRhdGFbU3RvcmFnZUtleXMuSU5URU5UU10pO1xuICAgICAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVNUSU9OX1NVQk1JU1NJT04sIG5ldyBRdWVzdGlvblN1Ym1pc3Npb24oe1xuICAgICAgICAgIHF1ZXN0aW9uVGV4dDogcXVlcnlTdHJpbmdcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYW4gaW5wdXQsIHF1ZXJ5IGZvciBhIGxpc3Qgb2Ygc2ltaWxhciByZXN1bHRzIGFuZCBzZXQgaW50byBzdG9yYWdlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCAgICAgdGhlIHN0cmluZyB0byBhdXRvY29tcGxldGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqL1xuICBhdXRvQ29tcGxldGVVbml2ZXJzYWwgKGlucHV0LCBuYW1lc3BhY2UpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0NvbXBsZXRlXG4gICAgICAucXVlcnlVbml2ZXJzYWwoaW5wdXQpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5BVVRPQ09NUExFVEV9LiR7bmFtZXNwYWNlfWAsIGRhdGEpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYW4gaW5wdXQsIHF1ZXJ5IGZvciBhIGxpc3Qgb2Ygc2ltaWxhciByZXN1bHRzIGluIHRoZSBwcm92aWRlZCB2ZXJ0aWNhbFxuICAgKiBhbmQgc2V0IGludG8gc3RvcmFnZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgICAgICAgdGhlIHN0cmluZyB0byBhdXRvY29tcGxldGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbEtleSB0aGUgdmVydGljYWwga2V5IGZvciB0aGUgZXhwZXJpZW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gYmFyS2V5ICAgICAgdGhlIGJhciBrZXkgZm9yIHRoZSBleHBlcmllbmNlXG4gICAqL1xuICBhdXRvQ29tcGxldGVWZXJ0aWNhbCAoaW5wdXQsIG5hbWVzcGFjZSwgdmVydGljYWxLZXksIGJhcktleSkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvQ29tcGxldGVcbiAgICAgIC5xdWVyeVZlcnRpY2FsKGlucHV0LCB2ZXJ0aWNhbEtleSwgYmFyS2V5KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke25hbWVzcGFjZX1gLCBkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGFuIGlucHV0LCBwcm92aWRlIGEgbGlzdCBvZiBzdWl0YWJsZSBmaWx0ZXJzIGZvciBhdXRvY29tcGxldGlvblxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgICAgICAgICB0aGUgc3RyaW5nIHRvIHNlYXJjaCBmb3IgZmlsdGVycyB3aXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgICAgIHRoZSBuYW1lc3BhY2UgdG8gdXNlIGZvciB0aGUgc3RvcmFnZSBrZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnRpY2FsS2V5ICAgdGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIGV4cGVyaWVuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJhcktleSAgICAgICAgdGhlIGJhciBrZXkgZm9yIHRoZSBleHBlcmllbmNlXG4gICAqL1xuICBhdXRvQ29tcGxldGVGaWx0ZXIgKGlucHV0LCBuYW1lc3BhY2UsIHZlcnRpY2FsS2V5LCBiYXJLZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0NvbXBsZXRlXG4gICAgICAucXVlcnlGaWx0ZXIoaW5wdXQsIHZlcnRpY2FsS2V5LCBiYXJLZXkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5BVVRPQ09NUExFVEV9LiR7bmFtZXNwYWNlfWAsIGRhdGEpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3VibWl0cyBhIHF1ZXN0aW9uIHRvIHRoZSBzZXJ2ZXIgYW5kIHVwZGF0ZXMgdGhlIHVuZGVybHlpbmcgcXVlc3Rpb24gbW9kZWxcbiAgICogQHBhcmFtIHtvYmplY3R9IHF1ZXN0aW9uIFRoZSBxdWVzdGlvbiBvYmplY3QgdG8gc3VibWl0IHRvIHRoZSBzZXJ2ZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1ZXN0aW9uLmVudGl0eUlkIFRoZSBlbnRpdHkgdG8gYXNzb2NpYXRlIHdpdGggdGhlIHF1ZXN0aW9uIChyZXF1aXJlZClcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLmxhbnVhZ2UgVGhlIGxhbmd1YWdlIG9mIHRoZSBxdWVzdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24uc2l0ZSBUaGUgXCJwdWJsaXNoZXJcIiBvZiB0aGUgKGUuZy4gJ0ZJUlNUX1BBUlRZJylcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXN0aW9uLm5hbWUgVGhlIG5hbWUgb2YgdGhlIGF1dGhvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24uZW1haWwgVGhlIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIGF1dGhvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ucXVlc3Rpb25UZXh0IFRoZSBxdWVzdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24ucXVlc3Rpb25EZXNjcmlwdGlvbiBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBxdWVzdGlvblxuICAgKi9cbiAgc3VibWl0UXVlc3Rpb24gKHF1ZXN0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXN0aW9uQW5zd2VyXG4gICAgICAuc3VibWl0UXVlc3Rpb24ocXVlc3Rpb24pXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChcbiAgICAgICAgICBTdG9yYWdlS2V5cy5RVUVTVElPTl9TVUJNSVNTSU9OLFxuICAgICAgICAgIFF1ZXN0aW9uU3VibWlzc2lvbi5zdWJtaXR0ZWQoKSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9yZXMgdGhlIGdpdmVuIHF1ZXJ5IGludG8gc3RvcmFnZSwgdG8gYmUgdXNlZCBmb3IgdGhlIG5leHQgc2VhcmNoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgcXVlcnkgdG8gc3RvcmVcbiAgICovXG4gIHNldFF1ZXJ5IChxdWVyeSkge1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFUlksIHF1ZXJ5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9yZXMgdGhlIHByb3ZpZGVkIHF1ZXJ5IElELCB0byBiZSB1c2VkIGluIGFuYWx5dGljc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnlJZCBUaGUgcXVlcnkgaWQgdG8gc3RvcmVcbiAgICovXG4gIHNldFF1ZXJ5SWQgKHF1ZXJ5SWQpIHtcbiAgICB0aGlzLmdsb2JhbFN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBxdWVyeUlkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9yZXMgdGhlIGdpdmVuIGZpbHRlciBpbnRvIHN0b3JhZ2UsIHRvIGJlIHVzZWQgZm9yIHRoZSBuZXh0IHNlYXJjaFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIHRoZSBuYW1lc3BhY2UgdG8gdXNlIGZvciB0aGUgc3RvcmFnZSBrZXlcbiAgICogQHBhcmFtIHtGaWx0ZXJ9IGZpbHRlciAgICB0aGUgZmlsdGVyIHRvIHNldFxuICAgKi9cbiAgc2V0RmlsdGVyIChuYW1lc3BhY2UsIGZpbHRlcikge1xuICAgIHRoaXMuZ2xvYmFsU3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke25hbWVzcGFjZX1gLCBmaWx0ZXIpO1xuICB9XG5cbiAgc2V0RmFjZXRGaWx0ZXIgKG5hbWVzcGFjZSwgZmlsdGVyKSB7XG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5GQUNFVF9GSUxURVJ9LiR7bmFtZXNwYWNlfWAsIGZpbHRlcik7XG4gIH1cblxuICBlbmFibGVEeW5hbWljRmlsdGVycyAoKSB7XG4gICAgdGhpcy5faXNEeW5hbWljRmlsdGVyc0VuYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgc2V0U2VhcmNoTGltaXQgKGxpbWl0KSB7XG4gICAgdGhpcy5nbG9iYWxTdG9yYWdlLnNldChTdG9yYWdlS2V5cy5TRUFSQ0hfTElNSVQsIGxpbWl0KTtcbiAgfVxuXG4gIG9uIChldnQsIG1vZHVsZUlkLCBjYikge1xuICAgIHJldHVybiB0aGlzLmdsb2JhbFN0b3JhZ2Uub24oZXZ0LCBtb2R1bGVJZCwgY2IpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBDb21wb25lbnRNYW5hZ2VyICovXG5cbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogQ29tcG9uZW50TWFuYWdlciBpcyBhIFNpbmdsZXRvbmUgdGhhdCBjb250YWlucyBib3RoIGFuIGludGVybmFsIHJlZ2lzdHJ5IG9mXG4gKiBlbGlnaWJsZSBjb21wb25lbnRzIHRvIGJlIGNyZWF0ZWQsIGFzIHdlbGwgYXMga2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnRcbiAqIGluc3RhbnRpYXRlZCBhbmQgYWN0aXZlIGNvbXBvbmVudHMuXG4gKlxuICogQUxMIGNvbXBvbmVudHMgc2hvdWxkIGJlIGNvbnN0cnVjdGVkIHVzaW5nIHRoZSB7Q29tcG9uZW50TWFuYWdlcn0gdmlhIGl0cyBgY3JlYXRlYCBtZXRob2QuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudE1hbmFnZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgaWYgKCFDb21wb25lbnRNYW5hZ2VyLnNldEluc3RhbmNlKHRoaXMpKSB7XG4gICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnQgcmVnaXN0cnkgaXMgYW4gaW50ZXJuYWwgbWFwLCB0aGF0IGNvbnRhaW5zXG4gICAgICogYWxsIGF2YWlsYWJsZSBjb21wb25lbnQgQ0xBU1NFUyB1c2VkIGZvciBjcmVhdGlvbiBvciBvdmVycmlkZS5cbiAgICAgKiBFYWNoIGNvbXBvbmVudCBjbGFzcyBoYXMgYSB1bmlxdWUgVFlQRSwgd2hpY2ggaXMgdXNlZCBhcyB0aGUga2V5IGZvciB0aGUgcmVnaXN0cnlcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5ID0ge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYWN0aXZlIGNvbXBvbmVudHMgaXMgYW4gaW50ZXJuYWwgY29udGFpbmVyIHRvIGtlZXAgdHJhY2tcbiAgICAgKiBvZiBhbGwgb2YgdGhlIGNvbXBvbmVudHMgdGhhdCBoYXZlIGJlZW4gY29uc3RydWN0ZWRcbiAgICAgKi9cbiAgICB0aGlzLl9hY3RpdmVDb21wb25lbnRzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY29yZSBsaWJyYXJ5IGRlcGVuZGVuY3lcbiAgICAgKlxuICAgICAqIFRoZSBDb3JlIGNvbnRhaW5zIGJvdGggdGhlIHN0b3JhZ2UgQU5EIHNlcnZpY2VzIHRoYXQgYXJlIG5lZWRlZCBmb3IgcGVyZm9ybWluZyBvcGVyYXRpb25zXG4gICAgICogbGlrZSBzZWFyY2ggYW5kIGF1dG8gY29tcGxldGUuXG4gICAgICpcbiAgICAgKiBUaGUgc3RvcmFnZSBpcyB0aGUgc291cmNlIG9mIHRydXRoIGZvciB0aGUgc3RhdGUgb2YgQUxMIGNvbXBvbmVudHMuXG4gICAgICogV2hlbmV2ZXIgdGhlIHN0b3JhZ2UgaXMgdXBkYXRlZCwgdGhlIHN0YXRlIGdldHMgcHVzaGVkIGRvd24gdG8gdGhlIG5lY2Vzc2FyeSBjb21wb25lbnRzLlxuICAgICAqIEB0eXBlIHtDb3JlfVxuICAgICAqL1xuICAgIHRoaXMuX2NvcmUgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHByaW1hcnkgcmVuZGVyZXIgdG8gdXNlIGZvciBhbGwgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtIYW5kbGViYXJzUmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGFuYWx5dGljcyByZXBvcnRlciBkZXBlbmRlbmN5XG4gICAgICovXG4gICAgdGhpcy5fYW5hbHl0aWNzUmVwb3J0ZXIgPSBudWxsO1xuICB9XG5cbiAgc3RhdGljIHNldEluc3RhbmNlIChpbnN0YW5jZSkge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cblxuICBzZXRSZW5kZXJlciAocmVuZGVyZXIpIHtcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0Q29yZSAoY29yZSkge1xuICAgIHRoaXMuX2NvcmUgPSBjb3JlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0QW5hbHl0aWNzUmVwb3J0ZXIgKHJlcG9ydGVyKSB7XG4gICAgdGhpcy5fYW5hbHl0aWNzUmVwb3J0ZXIgPSByZXBvcnRlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZWdpc3RlcnMgYSBjb21wb25lbnQgdG8gYmUgZWxpZ2libGUgZm9yIGNyZWF0aW9uIGFuZCBvdmVycmlkZS5cbiAgICogQHBhcmFtIHtDb21wb25lbnR9IFRoZSBDb21wb25lbnQgQ2xhc3MgdG8gcmVnaXN0ZXJcbiAgICovXG4gIHJlZ2lzdGVyIChjb21wb25lbnRDbGF6eikge1xuICAgIHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5W2NvbXBvbmVudENsYXp6LnR5cGVdID0gY29tcG9uZW50Q2xheno7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIGlzIHRoZSBlbnRyeSBwb2ludCBmb3IgY29uc3RydWN0aW5nIGFueSBhbmQgYWxsIGNvbXBvbmVudHMuXG4gICAqIEl0IHdpbGwgaW5zdGFudGlhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudCwgYW5kIGJvdGggYXBwbHlcbiAgICogaW5pdGlhbCBzdGF0ZSBmcm9tIHRoZSBzdG9yYWdlIGFuZCBiaW5kIGl0IHRvIHRoZSBzdG9yYWdlIGZvciB1cGRhdGVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50VHlwZSBUaGUgY29tcG9uZW50IHR5cGUgdG8gY3JlYXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIFRoZSBvcHRpb25zIHRvIHBpcGUgdG8gdGhlIGNvbnN0cnVjdGlvbiBvZiB0aGUgY29tcG9uZW50XG4gICAqL1xuICBjcmVhdGUgKGNvbXBvbmVudFR5cGUsIG9wdHMpIHtcbiAgICAvLyBFdmVyeSBjb21wb25lbnQgbmVlZHMgbG9jYWwgYWNjZXNzIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlclxuICAgIC8vIGJlY2F1c2Ugc29tZXRpbWVzIGNvbXBvbmVudHMgaGF2ZSBzdWJjb21wb25lbnRzIHRoYXQgbmVlZCB0byBiZVxuICAgIC8vIGNvbnN0cnVjdGVkIGR1cmluZyBjcmVhdGlvblxuICAgIG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvcmU6IHRoaXMuX2NvcmUsXG4gICAgICByZW5kZXJlcjogdGhpcy5fcmVuZGVyZXIsXG4gICAgICBhbmFseXRpY3NSZXBvcnRlcjogdGhpcy5fYW5hbHl0aWNzUmVwb3J0ZXIsXG4gICAgICBjb21wb25lbnRNYW5hZ2VyOiB0aGlzXG4gICAgfSwgb3B0cyk7XG5cbiAgICBsZXQgY29tcG9uZW50Q2xhc3MgPSB0aGlzLl9jb21wb25lbnRSZWdpc3RyeVtjb21wb25lbnRUeXBlXTtcblxuICAgIGlmIChcbiAgICAgICFjb21wb25lbnRDbGFzcy5hcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQoKSAmJlxuICAgICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5zb21lKGMgPT4gYy5uYW1lID09PSBvcHRzLm5hbWUpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICBgQW5vdGhlciBjb21wb25lbnQgd2l0aCBuYW1lICR7b3B0cy5uYW1lfSBhbHJlYWR5IGV4aXN0c2AsXG4gICAgICAgIGNvbXBvbmVudFR5cGUpO1xuICAgIH1cblxuICAgIC8vIEluc3RhbnRpYXRlIG91ciBuZXcgY29tcG9uZW50IGFuZCBrZWVwIHRyYWNrIG9mIGl0XG4gICAgbGV0IGNvbXBvbmVudCA9XG4gICAgICBuZXcgdGhpcy5fY29tcG9uZW50UmVnaXN0cnlbY29tcG9uZW50VHlwZV0ob3B0cylcbiAgICAgICAgLmluaXQob3B0cyk7XG5cbiAgICB0aGlzLl9hY3RpdmVDb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcblxuICAgIC8vIElmIHRoZXJlIGlzIGEgZ2xvYmFsIHN0b3JhZ2UgdG8gcG93ZXIgc3RhdGUsIGFwcGx5IHRoZSBzdGF0ZVxuICAgIC8vIGZyb20gdGhlIHN0b3JhZ2UgdG8gdGhlIGNvbXBvbmVudCwgYW5kIHRoZW4gYmluZCB0aGUgY29tcG9uZW50XG4gICAgLy8gc3RhdGUgdG8gdGhlIHN0b3JhZ2UgdmlhIGl0cyB1cGRhdGVzXG4gICAgaWYgKHRoaXMuX2NvcmUgJiYgdGhpcy5fY29yZS5nbG9iYWxTdG9yYWdlICE9PSBudWxsKSB7XG4gICAgICBpZiAoY29tcG9uZW50Lm1vZHVsZUlkID09PSB1bmRlZmluZWQgfHwgY29tcG9uZW50Lm1vZHVsZUlkID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NvcmUuZ2xvYmFsU3RvcmFnZVxuICAgICAgICAub24oJ3VwZGF0ZScsIGNvbXBvbmVudC5tb2R1bGVJZCwgKGRhdGEpID0+IHtcbiAgICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBwcm92aWRlZCBjb21wb25lbnQgZnJvbSB0aGUgbGlzdCBvZiBhY3RpdmUgY29tcG9uZW50cyBhbmQgcmVtb3ZlXG4gICAqIHRoZSBhc3NvY2lhdGVkIHN0b3JhZ2UgZXZlbnQgbGlzdGVuZXJcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudCBUaGUgY29tcG9uZW50IHRvIHJlbW92ZVxuICAgKi9cbiAgcmVtb3ZlIChjb21wb25lbnQpIHtcbiAgICB0aGlzLl9jb3JlLmdsb2JhbFN0b3JhZ2Uub2ZmKCd1cGRhdGUnLCBjb21wb25lbnQubW9kdWxlSWQpO1xuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9hY3RpdmVDb21wb25lbnRzLmZpbmRJbmRleChjID0+IGMubmFtZSA9PT0gY29tcG9uZW50Lm5hbWUpO1xuICAgIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIGdldEFjdGl2ZUNvbXBvbmVudCAodHlwZSkge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVDb21wb25lbnRzLmZpbmQoYyA9PiBjLmNvbnN0cnVjdG9yLnR5cGUgPT09IHR5cGUpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBSZW5kZXJlciAqL1xuXG4vKipcbiAqIFJlbmRlcmVyIGlzIGFuIGFic3RyYWN0IGNsYXNzIHRoYXQgYWxsIFJlbmRlcmVycyBzaG91bGQgZXh0ZW5kIGFuZCBpbXBsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIge1xuICAvKipcbiAgICogcmVuZGVyIGlzIGEgY29yZSBtZXRob2QgZm9yIGFsbCByZW5kZXJlcnMuXG4gICAqIEFsbCBpbXBsZW1lbnRhdGlvbnMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgY2xhc3NcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqL1xuICByZW5kZXIgKHRlbXBsYXRlLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgcmVnaXN0ZXJIZWxwZXIgKG5hbWUsIGNiKSB7XG5cbiAgfVxuXG4gIGNvbXBpbGUgKHRlbXBsYXRlKSB7XG5cbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgSGFuZGxlYmFyc1JlbmRlcmVyICovXG5cbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuLyoqXG4gKiBIYW5kbGViYXJzUmVuZGVyZXIgaXMgYSB3cmFwcGVyIGFyb3VuZCB0aGUgbmF0aXZhdGUgaGFuZGxlYmFycyByZW5kZXJlci5cbiAqIEBleHRlbmRzIFJlbmRlcmVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbmRsZWJhcnNSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IgKHRlbXBsYXRlcyA9IHt9LCBvcHRzID0ge30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGhhbmRsZWJhcnMgY29tcGlsZXJcbiAgICAgKiBAdHlwZSB7SGFuZGxlYmFyc31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2hhbmRsZWJhcnMgPSB0ZW1wbGF0ZXMuX2hiIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgcHJlLWNvbXBpbGVkIGhhbmRsZWJhcnMgdGVtcGxhdGVzXG4gICAgICogQHR5cGUge0hhbmRsZWJhcnN9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXMgfHwge307XG4gIH1cblxuICBpbml0ICh0ZW1wbGF0ZXMpIHtcbiAgICAvLyBBc3NpZ24gdGhlIGhhbmRsZWJhcnMgY29tcGlsZXIgYW5kIHRlbXBsYXRlcyBiYXNlZCBvblxuICAgIC8vIGluZm9ybWF0aW9uIHByb3ZpZGVkIGZyb20gZXh0ZXJuYWwgZGVwIChpbiBkZWZhdWx0IGNhc2UsIGl0IGNvbWVzIGZyb20gZXh0ZXJuYWwgc2VydmVyIHJlcXVlc3QpXG4gICAgdGhpcy5faGFuZGxlYmFycyA9IHRlbXBsYXRlcy5faGI7XG4gICAgdGhpcy5fdGVtcGxhdGVzID0gdGVtcGxhdGVzO1xuXG4gICAgLy8gVE9ETyhiaWxseSkgT25jZSB3ZSByZS13cml0ZSB0ZW1wbGF0ZXMgdXNpbmcgdGhlIG5ldyBoZWxwZXJzIGxpYnJhcnlcbiAgICAvLyB3ZSBwcm9iYWJseSBkb24ndCBuZWVkIHRoZXNlIGN1c3RvbSBoZWxwZXJzIGFueW1vcmVcbiAgICB0aGlzLl9yZWdpc3RlckN1c3RvbUhlbHBlcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZWdpc3RlckhlbHBlciBpcyBhIHB1YmxpYyBpbnRlcmZhY2UgZm9yIGV4dGVybmFsIGRlcGVuZGVuY2llcyB0b1xuICAgKiByZWdpc3RlciB0aGVpciBvd24gY3VzdG9tIGhlbHBlcnMgdG8gb3VyIGludGVybmFsIEhhbmRsZWJhcnMgQ29tcGlsZXJcbiAgICovXG4gIHJlZ2lzdGVySGVscGVyIChuYW1lLCBjYikge1xuICAgIHRoaXMuX2hhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIobmFtZSwgY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbXBpbGUgYSBoYW5kbGViYXJzIHRlbXBsYXRlIHNvIHRoYXQgaXQgY2FuIGJlIHJlbmRlcmVkLFxuICAgKiB1c2luZyB0aGUge0hhbmRsZWJhcnN9IGNvbXBpbGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZSBUaGUgdGVtcGxhdGUgc3RyaW5nIHRvIGNvbXBpbGVcbiAgICovXG4gIGNvbXBpbGUgKHRlbXBsYXRlKSB7XG4gICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZWJhcnMuY29tcGlsZSh0ZW1wbGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogcmVuZGVyIHdpbGwgcmVuZGVyIGEgdGVtcGxhdGUgd2l0aCBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgUHJvdmlkZSBlaXRoZXIgYSB0ZW1wbGF0ZU5hbWUgb3IgYSBwcmUtY29tcGlsZWQgdGVtcGxhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gcHJvdmlkZSB0byB0aGUgdGVtcGxhdGVcbiAgICovXG4gIHJlbmRlciAoY29uZmlnLCBkYXRhKSB7XG4gICAgLy8gSWYgYSBjdXN0b20gdGVtcGxhdGUgaXMgcHJvdmlkZWQsIHVzZSBpdCxcbiAgICAvLyBvdGhlcndpc2UgZmFsbCBiYWNrIHRvIHRoZSB0ZW1wbGF0ZSBuYW1lXG4gICAgLy8gVE9ETyhiaWxseSkgVGhpcyBpbnRlcmZhY2Ugc2hvdWxkIHByb2JhYmx5IGJlIGxlc3MgdWdseVxuICAgIGlmIChjb25maWcudGVtcGxhdGUgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBjb25maWcudGVtcGxhdGUoZGF0YSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXNbY29uZmlnLnRlbXBsYXRlTmFtZV0oZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IGZpbmQvcmVuZGVyIHRlbXBsYXRlOiAnICsgY29uZmlnLnRlbXBsYXRlTmFtZSwgZSk7XG4gICAgfVxuICB9XG5cbiAgX3JlZ2lzdGVyQ3VzdG9tSGVscGVycyAoKSB7XG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignaWZlcScsIGZ1bmN0aW9uIChhcmcxLCBhcmcyLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gKGFyZzEgPT09IGFyZzIpID8gb3B0aW9ucy5mbih0aGlzKSA6IG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2lmbm90ZXEnLCBmdW5jdGlvbiAoYXJnMSwgYXJnMiwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIChhcmcxICE9PSBhcmcyKSA/IG9wdGlvbnMuZm4odGhpcykgOiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdmb3JtYXRQaG9uZU51bWJlcicsIGZ1bmN0aW9uIChwaG9uZU51bWJlclN0cmluZykge1xuICAgICAgdmFyIGNsZWFuZWQgPSAoJycgKyBwaG9uZU51bWJlclN0cmluZykucmVwbGFjZSgvXFxEL2csICcnKTtcbiAgICAgIHZhciBtYXRjaCA9IGNsZWFuZWQubWF0Y2goL14oMXwpPyhcXGR7M30pKFxcZHszfSkoXFxkezR9KSQvKTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICB2YXIgaW50bENvZGUgPSAobWF0Y2hbMV0gPyAnKzEgJyA6ICcnKTtcbiAgICAgICAgcmV0dXJuIFtpbnRsQ29kZSwgJygnLCBtYXRjaFsyXSwgJykgJywgbWF0Y2hbM10sICctJywgbWF0Y2hbNF1dLmpvaW4oJycpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdhc3NpZ24nLCBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgb3B0aW9ucyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcblxuICAgICAgaWYgKCFvcHRpb25zLmRhdGEucm9vdCkge1xuICAgICAgICBvcHRpb25zLmRhdGEucm9vdCA9IHt9O1xuICAgICAgfVxuXG4gICAgICBsZXQgdiA9ICcnO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICB2ID0gdiArIGFyZ3NbaV07XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMuZGF0YS5yb290W25hbWVdID0gdjtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2pzb24nLCBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBuYW1lID09PSB1bmRlZmluZWRcbiAgICAgICAgPyAnJ1xuICAgICAgICA6IEpTT04uc3RyaW5naWZ5KG5hbWUpO1xuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgSGFuZGxlYmFyc1JlbmRlcmVyIGZyb20gJy4vaGFuZGxlYmFyc3JlbmRlcmVyJztcblxuLy8gSW4gdGhlIGZ1dHVyZSwgdGhpcyB3aWxsIGNvbnRhaW4gYWxsIGRpZmZlcmVudCB0eXBlcyBvZiByZW5kZXJlcnNcbi8vIEUuZy4gTXVzdGFjaGUsIFNPWSwgSGFuZGxlQmFycywgUmVhY3QsIGV0Yy5cbmV4cG9ydCBjb25zdCBSZW5kZXJlcnMgPSB7XG4gIFNPWTogUmVuZGVyZXIsXG4gIEhhbmRsZWJhcnM6IEhhbmRsZWJhcnNSZW5kZXJlclxufTtcbiIsIi8qKiBAbW9kdWxlIERPTSAqL1xuXG4vKiBnbG9iYWwgSFRNTEVsZW1lbnQsIEhUTUxEb2N1bWVudCwgV2luZG93LCBFdmVudCAqL1xuXG5sZXQgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG5cbi8qKlxuICogU3RhdGljIGludGVyZmFjZSBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgRE9NIEFQSS5cbiAqIEBuYW1lc3BhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9NIHtcbiAgc3RhdGljIHNldHVwIChkLCBwKSB7XG4gICAgZG9jdW1lbnQgPSBkO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZSBhIEhUTUxFbGVtZW50IGZyb20gYW5kIEhUTUwgc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBodG1sIFRoZSBIVE1MIHRvIHBhcnNlIHRvIGEgRE9NIG5vZGUuXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZSAoaHRtbCkge1xuICAgIGlmICgnY3JlYXRlUmFuZ2UnIGluIGRvY3VtZW50KSB7XG4gICAgICAvLyBwcmVmZXIgdGhpcyBpbXBsZW1lbnRhdGlvbiBhcyBpdCBoYXMgd2lkZXIgYnJvd3NlciBzdXBwb3J0XG4gICAgICAvLyBhbmQgaXQncyBiZXR0ZXIgcGVyZm9ybWluZy5cbiAgICAgIC8vIHNlZSBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9jb252ZXJ0LWh0bWwtc3RpbmdzLWRvbS1ub2Rlc1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBmcmFnID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoaHRtbCk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZyk7XG4gICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIC8vIGZhbGxiYWNrIHRvIHRoaXMgYmVjYXVzZSBvZiBhIGJ1ZyBpbiBqc2RvbSB0aGF0IGNhdXNlcyB0ZXN0cyB0byBmYWlsXG4gICAgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vanNkb20vanNkb20vaXNzdWVzLzM5OVxuICAgIHJldHVybiBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGh0bWwsICd0ZXh0L2h0bWwnKS5ib2R5O1xuICB9XG5cbiAgLyoqXG4gICAqIHF1ZXJ5IHRoZSBET00gZm9yIGEgZ2l2ZW4gY3NzIHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudCBPcHRpb25hbCBjb250ZXh0IHRvIHVzZSBmb3IgYSBzZWFyY2guIERlZmF1bHRzIHRvIGRvY3VtZW50IGlmIG5vdCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIHRoZSBDU1Mgc2VsZWN0b3IgdG8gcXVlcnkgZm9yXG4gICAqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gdGhlIEZJUlNUIG5vZGUgaXQgZmluZHMsIGlmIGFueVxuICAgKi9cbiAgc3RhdGljIHF1ZXJ5IChwYXJlbnQsIHNlbGVjdG9yKSB7XG4gICAgLy8gRmFjYWRlLCBzaGlmdGluZyB0aGUgc2VsZWN0b3IgdG8gdGhlIHBhcmVudCBhcmd1bWVudCBpZiBvbmx5IG9uZVxuICAgIC8vIGFyZ3VtZW50IGlzIHByb3ZpZGVkXG4gICAgaWYgKHNlbGVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNlbGVjdG9yID0gcGFyZW50O1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBXaW5kb3cgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQpIHtcbiAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIHF1ZXJ5IHRoZSBET00gZm9yIGEgZ2l2ZW4gY3NzIHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudCBPcHRpb25hbCBjb250ZXh0IHRvIHVzZSBmb3IgYSBzZWFyY2guIERlZmF1bHRzIHRvIGRvY3VtZW50IGlmIG5vdCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIHRoZSBDU1Mgc2VsZWN0b3IgdG8gcXVlcnkgZm9yXG4gICAqXG4gICAqIEByZXR1cm5zIHtBcnJheX0gdGhlIEZJUlNUIG5vZGUgaXQgZmluZHMsIGlmIGFueVxuICAgKi9cbiAgc3RhdGljIHF1ZXJ5QWxsIChwYXJlbnQsIHNlbGVjdG9yKSB7XG4gICAgLy8gRmFjYWRlLCBzaGlmdGluZyB0aGUgc2VsZWN0b3IgdG8gdGhlIHBhcmVudCBhcmd1bWVudCBpZiBvbmx5IG9uZVxuICAgIC8vIGFyZ3VtZW50IGlzIHByb3ZpZGVkXG4gICAgaWYgKHNlbGVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNlbGVjdG9yID0gcGFyZW50O1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIGNsaWVudCBjb2RlIGlzIHVzaW5nIGEgcG9pbnRlciB0byBhIGRvbSBub2RlIGFuZCBpdCdzIG51bGwsIGUuZy4gdGhpcy5fY29udGFpbmVyXG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxEb2N1bWVudCB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIFdpbmRvdykge1xuICAgICAgcmV0dXJuIFtzZWxlY3Rvcl07XG4gICAgfVxuXG4gICAgcmV0dXJuIEFycmF5LmZyb20ocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbiAgfVxuXG4gIHN0YXRpYyBvblJlYWR5IChjYikge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkZWQnIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScpIHtcbiAgICAgIGNiKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgRE9NLm9uKGRvY3VtZW50LCAnRE9NQ29udGVudExvYWRlZCcsIGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGVFbGUgd2lsbCBjcmVhdGUgYSB7SFRNTEVsZW1lbnR9IGFuZCBhcHBseSB0aGUgcHJvcGVydGllcyBhdHRyaWJ1dGVzIHRocm91Z2ggYW4gb2JqZWN0IHByb3ZpZGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZWwgVGhlIGVsZW1lbnQgYHRhZ2AgbmFtZSB0byBjb25zdHJ1Y3RcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNfZGF0YSBPcHRpb25hbCBhdHRyaWJ1dGVzIHRvIGFwcGx5IHRvIHRoZSBuZXcgSFRNTEVsZW1lbnRcbiAgICovXG4gIHN0YXRpYyBjcmVhdGVFbCAoZWwsIG9wdHNfZGF0YSA9IHt9KSB7XG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsKTtcbiAgICBsZXQgcHJvcHMgPSBPYmplY3Qua2V5cyhvcHRzX2RhdGEpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByb3BzW2ldID09PSAnY2xhc3MnKSB7XG4gICAgICAgIERPTS5hZGRDbGFzcyhub2RlLCBvcHRzX2RhdGFbcHJvcHNbaV1dKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIG5vZGVbcHJvcHNbaV1dID0gb3B0c19kYXRhW3Byb3BzW2ldXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBhcHBlbmQgKHBhcmVudCwgbm9kZSkge1xuICAgIGlmIChub2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5vZGUgPSBwYXJlbnQ7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHBhcmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmVudCA9IERPTS5xdWVyeShwYXJlbnQpO1xuICAgIH1cblxuICAgIC8vIFN1cHBvcnQgSFRNTCBpbmplY3Rpb24gYXMgd2VsbCBhcyBIVE1MRWxlbWVudCBhcHBlbmRzXG4gICAgaWYgKHR5cGVvZiBub2RlID09PSAnc3RyaW5nJykge1xuICAgICAgcGFyZW50Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJCZWdpbicsIG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFkZENsYXNzIChub2RlLCBjbGFzc05hbWUpIHtcbiAgICBsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgnLCcpO1xuICAgIGxldCBsZW4gPSBjbGFzc2VzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChjbGFzc2VzW2ldKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZW1wdHkgKHBhcmVudCkge1xuICAgIHBhcmVudC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIHN0YXRpYyBjc3MgKHNlbGVjdG9yLCBzdHlsZXMpIHtcbiAgICBsZXQgbm9kZSA9IERPTS5xdWVyeShzZWxlY3Rvcik7XG5cbiAgICBmb3IgKGxldCBwcm9wIGluIHN0eWxlcykge1xuICAgICAgbm9kZS5zdHlsZVtwcm9wXSA9IHN0eWxlc1twcm9wXTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYXR0ciAoc2VsZWN0b3IsIGF0dHIsIHZhbCkge1xuICAgIERPTS5xdWVyeShzZWxlY3Rvcikuc2V0QXR0cmlidXRlKGF0dHIsIHZhbCk7XG4gIH1cblxuICBzdGF0aWMgYXR0cmlidXRlcyAoc2VsZWN0b3IsIGF0dHJzKSB7XG4gICAgT2JqZWN0LmVudHJpZXMoYXR0cnMpXG4gICAgICAuZm9yRWFjaCgoW2F0dHIsIHZhbF0pID0+IHRoaXMuYXR0cihzZWxlY3RvciwgYXR0ciwgdmFsKSk7XG4gIH1cblxuICBzdGF0aWMgdHJpZ2dlciAoc2VsZWN0b3IsIGV2ZW50LCBzZXR0aW5ncykge1xuICAgIGxldCBlID0gbmV3IEV2ZW50KGV2ZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICdidWJibGVzJzogdHJ1ZSxcbiAgICAgICdjYW5jZWxhYmxlJzogdHJ1ZVxuICAgIH0sIHNldHRpbmdzIHx8IHt9KSk7XG5cbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLmRpc3BhdGNoRXZlbnQoZSk7XG4gIH1cblxuICBzdGF0aWMgb24gKHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpIHtcbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBvbmNlIChzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlciwgeyBvbmNlOiB0cnVlIH0pO1xuICB9XG5cbiAgc3RhdGljIG9mZiAoc2VsZWN0b3IsIGV2dCwgaGFuZGxlcikge1xuICAgIERPTS5xdWVyeShzZWxlY3RvcikucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGRlbGVnYXRlIChjdHh0LCBzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgbGV0IGVsID0gRE9NLnF1ZXJ5KGN0eHQpO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICB3aGlsZSAoIXRhcmdldC5pc0VxdWFsTm9kZShlbCkpIHtcbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIGhhbmRsZXIoZXZlbnQsIHRhcmdldCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEV2ZW50RW1pdHRlciAqL1xuXG4vKipcbiAqIEV2ZW50RW1pdHRlciBpcyBhIGJhc2UgY2xhc3MgZm9yIGFueSBvYmplY3QgdGhhdCB3YW50cyB0byBleHBvc2VcbiAqIGEgcHViL3N1YiBpbnRlcmZhY2UsIGZvciBlbWl0dGluZyBtZXNzYWdlcyBhbmQgcHJvdmlkaW5nIGxpc3RlbmVycy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8qKlxuICAgICAqIFRoZSBzdWJzY3JpYmVycyBvZiBtZXNzYWdlc1xuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIG9uIGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciBzdWJzY3JpYmluZyBldmVudHMgdGhhdCBhcmUgZW1pdHRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byBsaXN0ZW4gdG9cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgVGhlIGNhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSB7ZXZ0fSBpcyBlbWl0dGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSBPcHRpb25hbCB2YWx1ZSB3aGljaCB3aWxsIG9ubHkgaGFuZGxlIHRoZSBtZXNzYWdlIG9uY2VcbiAgICovXG4gIG9uIChldnQsIGNiLCBvbmNlKSB7XG4gICAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBoYW5kbGVyIHNob3VsZCBiZSBvZiB0eXBlIHtmdW5jdGlvbn0nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbGlzdGVuZXJzW2V2dF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzW2V2dF0gPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XS5wdXNoKHtcbiAgICAgIGV2ZW50OiBldnQsXG4gICAgICBjYjogY2IsXG4gICAgICBvbmNlOiBvbmNlIHx8IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBvbmNlIGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciBzdWJzY3JpYmluZyBldmVudHMgdGhhdCBhcmUgZW1pdHRlZC5cbiAgICogVGhlIGhhbmRsZXIgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBvbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIGxpc3RlbiB0b1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gdGhlIHtldnR9IGlzIGVtaXR0ZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBvbmNlIE9wdGlvbmFsIHZhbHVlIHdoaWNoIHdpbGwgb25seSBoYW5kbGUgdGhlIG1lc3NhZ2Ugb25jZVxuICAgKi9cbiAgb25jZSAoZXZ0LCBjYikge1xuICAgIHJldHVybiB0aGlzLm9uKGV2dCwgY2IsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIG9mZiBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3IgdW5zdWJzY3JpYmluZyBmcm9tIGFuIGV2ZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gdW5zdWJzY3JpYmUgZnJvbVxuICAgKi9cbiAgb2ZmIChldnQpIHtcbiAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW2V2dF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogZW1pdCBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3IgYnJvYWRjYXN0aW5nIG1lc3NhZ2VzL2V2ZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIHB1Ymxpc2ggZnJvbVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSB0aGUgZGF0YSB0byBzZW5kIGFsb25nIHRvIHRoZSBzdWJzY3JpYmVyc1xuICAgKi9cbiAgZW1pdCAoZXZ0LCBkYXRhKSB7XG4gICAgbGV0IGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1tldnRdO1xuICAgIGlmIChsaXN0ZW5lcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEludm9rZSBlYWNoIG9mIGFsbCB0aGUgbGlzdGVuZXIgaGFuZGxlcnMgYW5kIHJlbW92ZSB0aGUgb25lcyB0aGF0IHNob3VsZCBmaXJlIG9ubHkgb25jZS5cbiAgICBsZXQga2VlcCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0uY2IoZGF0YSk7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldLm9uY2UgPT09IHRydWUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEluc3RlYWQgb2YgaGF2aW5nIGEgJ2RpcnR5JyBhcnJheSB3aXRoIGRlbGV0ZWQgb3IgJ3VuZGVmaW5lZCcgZW50cmllcyxcbiAgICAgIC8vIHdlIGp1c3QgY3JlYXRlIGEgYnJhbmQgbmV3IGFycmF5IHdpdGhvdXQgdGhlIGxpc3RlbmVycyB0aGF0IHdlcmUgcmVtb3ZlZFxuICAgICAga2VlcC5wdXNoKGxpc3RlbmVyc1tpXSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIG91ciBvbGQgbGlzdCBvZiBsaXN0ZW5lcnMgdG8gdGhlIG5ld2x5IGNyZWF0ZWQgYXJyYXlcbiAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XSA9IGtlZXA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFN0YXRlICovXG5cbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vLi4vY29yZS9ldmVudGVtaXR0ZXIvZXZlbnRlbWl0dGVyJztcblxuLyoqXG4gKiBTdGF0ZSBjb250YWlucyB0aGUgZGF0YSBmb3IgdGhlIGNvbXBvbmVudFxuICogYW5kIGV4cG9zZXMgYW4ge0V2ZW50RW1pdHRlcn0gaW50ZXJmYWNlIHNvIHRoYXQgZXh0ZXJuYWxcbiAqIGRlcGVuZGVuY2llcyBjYW4gbGlzdGVuL2hvb2sgc3Vic2NyaWJlIHRvIG1lc3NhZ2VzL3VwZGF0ZXMuXG4gKiBAZXh0ZW5kcyBFdmVudEVtaXR0ZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoZGF0YSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N0YXRlID0gZGF0YSB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICogTk9URShiaWxseSk6IERvZXMgbm90IGZpcmUgYW4gdXBkYXRlIG1lc3NhZ2VcbiAgICovXG4gIGluaXQgKHByb3AsIG9wdFZhbCkge1xuICAgIHRoaXMuX3NldChwcm9wLCBvcHRWYWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldHRlciBmb3IgdGhlIHN0YXRlXG4gICAqIEBwYXJhbSBwcm9wIHtzdHJpbmd8T2JqZWN0fSBUaGUgcHJvcGVydHkgdG8gc2V0XG4gICAqIEBwYXJhbSBvcHRWYWwgT3B0aW9uYWwsIGlmIHByb3AgaXMgYSB7c3RyaW5nfSwgaXQgd2lsbCBhc3NpZ24gdGhlIHZhbHVlIHRvIHRoYXQgcHJvcGVydHlcbiAgICovXG4gIHNldCAocHJvcCwgb3B0VmFsKSB7XG4gICAgdGhpcy5fc2V0KHByb3AsIG9wdFZhbCk7XG4gICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXR0ZXIgZm9yIHRoZSBzdGF0ZSBlbmFibGVzIHlvdSB0byB1cGRhdGUgYSBzaW5nbGUgcHJvcGVydHksIG9yIGNvbXBsZXRlIHN0YXRlXG4gICAqIGRlcGVuZGluZyBvbiB0aGUgYXJndW1lbnRzIHByb3ZpZGVkLlxuICAgKiBAcGFyYW0gcHJvcCB7c3RyaW5nfE9iamVjdH0gVGhlIHByb3BlcnR5IHRvIHNldFxuICAgKiBAcGFyYW0gb3B0VmFsIElmIHByb3AgaXMgYSB7c3RyaW5nfSwgcHJvdmlkZSBpdHMgdmFsdWVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZXQgKHByb3AsIG9wdFZhbCkge1xuICAgIGlmIChvcHRWYWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fc3RhdGUgPSBwcm9wO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zdGF0ZVtwcm9wXSA9IG9wdFZhbDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUgKGRhdGEpIHtcbiAgICB0aGlzLl9zdGF0ZSA9IGRhdGE7XG4gICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBhIHByb3BlcnRpZXMgdmFsdWUgZnJvbSB0aGUgc3RhdGVcbiAgICogSWYgbm8gcHJvcGVydHkgcHJvdmlkZWQsIHJldHVybiB0aGUgZnVsbCBzdGF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0UHJvcCBvcHRpb25hbCBwcm9wZXJ0eSB0byByZXRyaWV2ZVxuICAgKi9cbiAgZ2V0IChvcHRQcm9wKSB7XG4gICAgaWYgKG9wdFByb3AgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc3RhdGVbb3B0UHJvcF07XG4gIH1cblxuICBoYXMgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVbcHJvcF0gIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGFzSlNPTiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICB9XG59XG4iLCIvKipcbiAqIE1vZGVsIGZvciB0aGUgYW5hbHl0aWNzIGV2ZW50IHR5cGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5hbHl0aWNzRXZlbnQge1xuICBjb25zdHJ1Y3RvciAodHlwZSwgbGFiZWwpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiBldmVudCB0byByZXBvcnRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZXZlbnRUeXBlID0gdHlwZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgLyoqXG4gICAgICogQW4gb3B0aW9uYWwgbGFiZWwgdG8gYmUgcHJvdmlkZWQgZm9yIHRoZSBldmVudFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgaWYgKGxhYmVsKSB7XG4gICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIHByb3ZpZGVkIG9wdGlvbnMgdG8gdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIEFkZGl0aW9uYWwgb3B0aW9ucyBmb3IgdGhlIGV2ZW50XG4gICAqL1xuICBhZGRPcHRpb25zIChvcHRpb25zKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGV2ZW50IGluIHRoZSBhcGkgZm9ybWF0LCB0eXBpY2FsbHkgZm9yIHJlcG9ydGluZyB0byB0aGUgYXBpXG4gICAqL1xuICB0b0FwaUV2ZW50ICgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcyk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEFuYWx5dGljc1JlcG9ydGVyICovXG5cbmltcG9ydCBBbmFseXRpY3NFdmVudCBmcm9tICcuL2FuYWx5dGljc2V2ZW50JztcbmltcG9ydCB7IEFuc3dlcnNBbmFseXRpY3NFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IHsgQU5BTFlUSUNTX0JBU0VfVVJMIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBIdHRwUmVxdWVzdGVyIGZyb20gJy4uL2h0dHAvaHR0cHJlcXVlc3Rlcic7XG5cbi8qKlxuICogQ2xhc3MgZm9yIHJlcG9ydGluZyBhbmFseXRpY3MgZXZlbnRzIHRvIHRoZSBzZXJ2ZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5hbHl0aWNzUmVwb3J0ZXIge1xuICBjb25zdHJ1Y3RvciAoY29yZSwgYW5zd2Vyc0tleSwgYnVzaW5lc3NJZCwgZ2xvYmFsT3B0aW9ucyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIGludGVybmFsIGJ1c2luZXNzIGlkZW50aWZpZXIgdXNlZCBmb3IgcmVwb3J0aW5nXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9idXNpbmVzc0lkID0gYnVzaW5lc3NJZDtcblxuICAgIC8qKlxuICAgICAqIE9wdGlvbnMgdG8gaW5jbHVkZSB3aXRoIGV2ZXJ5IGFuYWx5dGljIGV2ZW50IHJlcG9ydGVkIHRvIHRoZSBzZXJ2ZXJcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZ2xvYmFsT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGdsb2JhbE9wdGlvbnMsIHsgYW5zd2Vyc0tleSB9KTtcblxuICAgIC8vIGxpc3RlbiB0byBxdWVyeSBpZCB1cGRhdGVzXG4gICAgY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBTdG9yYWdlS2V5cy5RVUVSWV9JRCwgaWQgPT4gdGhpcy5zZXRRdWVyeUlkKGlkKSk7XG4gIH1cblxuICBzZXRRdWVyeUlkIChxdWVyeUlkKSB7XG4gICAgdGhpcy5fZ2xvYmFsT3B0aW9ucy5xdWVyeUlkID0gcXVlcnlJZDtcbiAgfVxuXG4gIHJlcG9ydCAoZXZlbnQpIHtcbiAgICBpZiAoIShldmVudCBpbnN0YW5jZW9mIEFuYWx5dGljc0V2ZW50KSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNBbmFseXRpY3NFcnJvcignVHJpZWQgdG8gc2VuZCBpbnZhbGlkIGFuYWx5dGljcyBldmVudCcsIGV2ZW50KTtcbiAgICB9XG5cbiAgICBldmVudC5hZGRPcHRpb25zKHRoaXMuX2dsb2JhbE9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIG5ldyBIdHRwUmVxdWVzdGVyKCkuYmVhY29uKFxuICAgICAgYCR7QU5BTFlUSUNTX0JBU0VfVVJMfS9yZWFsdGltZWFuYWx5dGljcy9kYXRhL2Fuc3dlcnMvJHt0aGlzLl9idXNpbmVzc0lkfWAsXG4gICAgICB7XG4gICAgICAgICdkYXRhJzogZXZlbnQudG9BcGlFdmVudCgpXG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTW9kdWxlRGF0YSAqL1xuXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50ZW1pdHRlci9ldmVudGVtaXR0ZXInO1xuXG4vKipcbiAqIE1vZHVsZURhdGEgaXMgdXNlZCBhcyBhIGdlbmVyaWMgbW9kZWwgZm9yIFN0b3JhZ2UuXG4gKiBUeXBpY2FsbHkgYW4gaW5zdGFuY2Ugb2YgTW9kdWxlRGF0YSBwb3dlcnMgYSBzaW5nbGUgY29tcG9uZW50LlxuXG4gKiBBIGRhdGEgbW9kZWwgdGhhdCBleHBvc2VzIGFuIGV2ZW50IGVtaXR0ZXIgaW50ZXJmYWNlLlxuICogQGV4dGVuZHMgRXZlbnRFbWl0dGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZHVsZURhdGEgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoaWQsIGRhdGEgPSB7fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLl9pZCA9IGlkO1xuICAgIHRoaXMuX2hpc3RvcnkgPSBbXTtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB0aGlzLnNldChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXBsYWNlcyB0aGUgY3VycmVudGx5IGhlbGQgZGF0YSB3aXRoIHRoZSBnaXZlbiBkYXRhXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSB0aGUgZGF0YSB0byByZXBsYWNlIHRoZSBjdXJyZW50IGRhdGFcbiAgICovXG4gIHNldCAoZGF0YSkge1xuICAgIHRoaXMuY2FwdHVyZVByZXZpb3VzKCk7XG5cbiAgICBpZiAodHlwZW9mIGRhdGEgIT09ICdvYmplY3QnIHx8IEFycmF5LmlzQXJyYXkoZGF0YSkgfHwgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoICE9PSBPYmplY3Qua2V5cyh0aGlzLl9kYXRhKS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLl9kYXRhKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBmb3Igc2hhbGxvdyBlcXVhbGl0eVxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGRhdGEpKSB7XG4gICAgICBpZiAodGhpcy5fZGF0YVtrZXldICE9PSBkYXRhW2tleV0pIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5fZGF0YSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjYXB0dXJlUHJldmlvdXMgKCkge1xuICAgIGlmICh0aGlzLl9oaXN0b3J5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2hpc3RvcnkgPSBbXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faGlzdG9yeS5sZW5ndGggKyAxID4gNSkge1xuICAgICAgdGhpcy5faGlzdG9yeS5zaGlmdCgpO1xuICAgIH1cblxuICAgIC8vIElmIGRhdGEgaXMgZXZlciB1bmRlZmluZWQsIHdlIGRlZmF1bHQgdG8gZW1wdHkgb2JqZWN0XG4gICAgdGhpcy5faGlzdG9yeS5wdXNoKEpTT04uc3RyaW5naWZ5KHRoaXMuX2RhdGEgfHwge30pKTtcbiAgfVxuXG4gIHVuZG8gKCkge1xuICAgIGxldCBwcmV2aW91cyA9IHt9O1xuICAgIGlmICh0aGlzLl9wcmV2aW91cy5sZW5ndGggPiAwKSB7XG4gICAgICBwcmV2aW91cyA9IEpTT04ucGFyc2UodGhpcy5fcHJldmlvdXMucG9wKCkpO1xuICAgIH1cblxuICAgIHRoaXMuX2RhdGEuc2V0KHByZXZpb3VzKTtcbiAgfVxuXG4gIHJhdyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEdsb2JhbFN0b3JhZ2UgKi9cblxuaW1wb3J0IE1vZHVsZURhdGEgZnJvbSAnLi9tb2R1bGVkYXRhJztcbmltcG9ydCB7IEFuc3dlcnNTdG9yYWdlRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBTdG9yYWdlIGlzIGEgY29udGFpbmVyIGFyb3VuZCBhcHBsaWNhdGlvbiBzdGF0ZS5cbiAqIEl0IGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBDUlVEIG9wZXJhdGlvbnMgYXMgd2VsbCBhcyBsaXN0ZW5pbmdcbiAqIGZvciBzdGF0ZWZ1bCBjaGFuZ2VzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWxTdG9yYWdlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXIgPSB7fTtcbiAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGRhdGEgaW4gc3RvcmFnZSB3aXRoIHRoZSBnaXZlbiBrZXkgdG8gdGhlIHByb3ZpZGVkIGRhdGEsXG4gICAqIGNvbXBsZXRlbHkgb3ZlcndyaXRpbmcgYW55IGV4aXN0aW5nIGRhdGEuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdGhlIHN0b3JhZ2Uga2V5IHRvIHNldFxuICAgKiBAcGFyYW0geyp9IGRhdGEgdGhlIGRhdGEgdG8gc2V0XG4gICAqL1xuICBzZXQgKGtleSwgZGF0YSkge1xuICAgIHRoaXMuX2luaXREYXRhQ29udGFpbmVyKGtleSwgZGF0YSk7XG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltrZXldLnNldChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYWxsIGtleS92YWx1ZSBwYWlycyBpbiB0aGUgcHJvdmlkZWQgbWFwIHRvIHRoZSBzdG9yYWdlXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUga2V5L3ZhbHVlIHBhaXJzIHRvIHNldCBpbiB0aGUgc3RvcmFnZVxuICAgKi9cbiAgc2V0QWxsIChkYXRhKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XG4gICAgICB0aGlzLnNldChrZXksIHZhbCk7XG4gICAgfVxuICB9XG5cbiAgX2luaXREYXRhQ29udGFpbmVyIChrZXksIGRhdGEpIHtcbiAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQgfHwga2V5ID09PSBudWxsIHx8IHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc1N0b3JhZ2VFcnJvcignSW52YWxpZCBzdG9yYWdlIGtleSBwcm92aWRlZCcsIGtleSwgZGF0YSk7XG4gICAgfVxuICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQgfHwgZGF0YSA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNTdG9yYWdlRXJyb3IoJ05vIGRhdGEgcHJvdmlkZWQnLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltrZXldID0gbmV3IE1vZHVsZURhdGEoa2V5KTtcbiAgICAgIHRoaXMuX2FwcGx5RnV0dXJlTGlzdGVuZXJzKGtleSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3RhdGUgKG1vZHVsZUlkKSB7XG4gICAgaWYgKHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0ucmF3KCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0QWxsIChrZXkpIHtcbiAgICBjb25zdCBkYXRhID0gW107XG4gICAgZm9yIChjb25zdCBkYXRhS2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuX21vZHVsZURhdGFDb250YWluZXIpKSB7XG4gICAgICBpZiAoZGF0YUtleS5zdGFydHNXaXRoKGtleSkgJiYgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltkYXRhS2V5XS5yYXcoKSAhPT0gbnVsbCkge1xuICAgICAgICBkYXRhLnB1c2godGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltkYXRhS2V5XS5yYXcoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgb24gKGV2dCwgbW9kdWxlSWQsIGNiKSB7XG4gICAgbGV0IG1vZHVsZURhdGEgPSB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXTtcbiAgICBpZiAobW9kdWxlRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXS5wdXNoKHtcbiAgICAgICAgZXZlbnQ6IGV2dCxcbiAgICAgICAgY2I6IGNiXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdLm9uKGV2dCwgY2IpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb2ZmIChldnQsIG1vZHVsZUlkLCBjYikge1xuICAgIGxldCBtb2R1bGVEYXRhID0gdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF07XG4gICAgaWYgKG1vZHVsZURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdLnBvcCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5vZmYoZXZ0LCBjYik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfYXBwbHlGdXR1cmVMaXN0ZW5lcnMgKG1vZHVsZUlkKSB7XG4gICAgbGV0IGZ1dHVyZXMgPSB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdO1xuICAgIGlmICghZnV0dXJlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnV0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGZ1dHVyZSA9IGZ1dHVyZXNbaV07XG4gICAgICB0aGlzLm9uKGZ1dHVyZS5ldmVudCwgbW9kdWxlSWQsIGZ1dHVyZS5jYik7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlYXJjaEFwaSB9IGZyb20gJy4vc2VhcmNoL3NlYXJjaGFwaSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEFuYWx5dGljc1JlcG9ydGVyIH0gZnJvbSAnLi9hbmFseXRpY3MvYW5hbHl0aWNzcmVwb3J0ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2R1bGVEYXRhIH0gZnJvbSAnLi9zdG9yYWdlL21vZHVsZWRhdGEnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlL2dsb2JhbHN0b3JhZ2UnO1xuIiwiLyoqIEBtb2R1bGUgQ29tcG9uZW50ICovXG5cbmltcG9ydCB7IFJlbmRlcmVycyB9IGZyb20gJy4uL3JlbmRlcmluZy9jb25zdCc7XG5cbmltcG9ydCBET00gZnJvbSAnLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RhdGUgZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBBbmFseXRpY3NSZXBvcnRlciB9IGZyb20gJy4uLy4uL2NvcmUnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgQW5hbHl0aWNzRXZlbnQgZnJvbSAnLi4vLi4vY29yZS9hbmFseXRpY3MvYW5hbHl0aWNzZXZlbnQnO1xuXG4vKipcbiAqIENvbXBvbmVudCBpcyBhbiBhYnN0cmFjdGlvbiB0aGF0IGVuY2Fwc3VsYXRlcyBzdGF0ZSwgYmVoYXZpb3IsXG4gKiBhbmQgdmlldyBmb3IgYSBwYXJ0aWN1bGFyIGNodW5rIG9mIGZ1bmN0aW9uYWxpdHkgb24gdGhlIHBhZ2UuXG4gKlxuICogVGhlIEFQSSBleHBvc2VzIGV2ZW50IGxpZmUgY3ljbGUgaG9va3MgZm9yIHdoZW4gdGhpbmdzIGFyZSByZW5kZXJlZCxcbiAqIG1vdW50ZWQsIGNyZWF0ZWQsIGV0Yy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHR5cGUsIGNvbmZpZyA9IHt9KSB7XG4gICAgLy8gU2ltcGxlIGZhY2FkZSBwYXR0ZXJuIHRvIGVuYWJsZSB0aGUgdXNlciB0byBwYXNzIGEgc2luZ2xlIG9iamVjdFxuICAgIC8vIGNvbnRhaW5pbmcgYWxsIHRoZSBuZWNlc3Nhcnkgb3B0aW9ucyBhbmQgc2V0dGluZ3NcbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25maWcgPSB0eXBlO1xuICAgICAgdHlwZSA9IGNvbmZpZy50eXBlO1xuICAgIH1cblxuICAgIHRoaXMubW9kdWxlSWQgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVW5pcXVlIG5hbWUgb2YgdGhpcyBjb21wb25lbnQgaW5zdGFuY2VcbiAgICAgKiBVc2VkIHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gb3RoZXIgY29tcG9uZW50cyBvZiB0aGUgc2FtZSB0eXBlXG4gICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSBjb25maWcubmFtZSB8fCB0aGlzLmNvbnN0cnVjdG9yLnR5cGU7XG5cbiAgICAvKipcbiAgICAgKiBDYWNoZSB0aGUgb3B0aW9ucyBzbyB0aGF0IHdlIGNhbiBwcm9wb2dhdGUgcHJvcGVybHkgdG8gY2hpbGQgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuXG4gICAgLyoqXG4gICAgICogQW4gaWRlbnRpZmllciB1c2VkIHRvIGNsYXNzaWZ5IHRoZSB0eXBlIG9mIGNvbXBvbmVudC5cbiAgICAgKiBUaGUgY29tcG9uZW50IG1hbmFnZXIgdXNlcyB0aGlzIGluZm9ybWF0aW9uIGluIG9yZGVyIHRvIHBlcnNpc3QgYW5kIG9yZ2FuaXplIGNvbXBvbmVudHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfENvbXBvbmVudFR5cGV9XG4gICAgICovXG4gICAgdGhpcy5fdHlwZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgY29tcG9uZW50LCBpZiBleGlzdHNcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50fVxuICAgICAqL1xuICAgIHRoaXMuX3BhcmVudCA9IGNvbmZpZy5wYXJlbnQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgY29udGFpbmVyIGZvciBhbGwgdGhlIGNoaWxkIGNvbXBvbmVudHNcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50W119XG4gICAgICovXG4gICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdGF0ZSAoZGF0YSkgb2YgdGhlIGNvbXBvbmVudCB0byBiZSBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgZm9yIHJlbmRlcmluZ1xuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5fc3RhdGUgPSBuZXcgU3RhdGUoY29uZmlnLnN0YXRlKTtcblxuICAgIC8qKlxuICAgICAqIFRPRE8oYmlsbHkpIFRoaXMgc2hvdWxkIGJlICdzZXJ2aWNlcydcbiAgICAgKi9cbiAgICB0aGlzLmNvcmUgPSBjb25maWcuY29yZSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCBtYW5hZ2VyLCB3aGljaCBjb250YWlucyBhbGwgb2YgdGhlIGNvbXBvbmVudCBjbGFzc2VzXG4gICAgICogZWxpZ2libGUgdG8gYmUgY3JlYXRlZFxuICAgICAqIEB0eXBlIHtDb21wb25lbnRNYW5hZ2VyfVxuICAgICAqL1xuICAgIHRoaXMuY29tcG9uZW50TWFuYWdlciA9IGNvbmZpZy5jb21wb25lbnRNYW5hZ2VyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgYW5hbHl0aWNzIHJlcG9ydGVyLCB1c2VkIHRvIHJlcG9ydCBldmVudHMgZm9yIHRoaXMgY29tcG9uZW50XG4gICAgICogQHR5cGUge0FuYWx5dGljc1JlcG9ydGVyfVxuICAgICAqL1xuICAgIHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIgPSBjb25maWcuYW5hbHl0aWNzUmVwb3J0ZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIE9wdGlvbnMgdG8gaW5jbHVkZSB3aXRoIGFsbCBhbmFseXRpYyBldmVudHMgc2VudCBieSB0aGlzIGNvbXBvbmVudFxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hbmFseXRpY3NPcHRpb25zID0gY29uZmlnLmFuYWx5dGljc09wdGlvbnMgfHwge307XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgRE9NIG5vZGUgdGhhdCB0aGUgY29tcG9uZW50IHdpbGwgYmUgYXBwZW5kZWQgdG8gd2hlbiBtb3VudGVkL3JlbmRlcmVkLlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBpZiAodGhpcy5fcGFyZW50ID09PSBudWxsKSB7XG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy5jb250YWluZXIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBgY29udGFpbmVyYCBvcHRpb24gZm9yIGNvbXBvbmVudCBjb25maWd1cmF0aW9uLiBNdXN0IGJlIG9mIHR5cGUgYHN0cmluZ2AuJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jb250YWluZXIgPSBET00ucXVlcnkoY29uZmlnLmNvbnRhaW5lcikgfHwgbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29udGFpbmVyID0gRE9NLnF1ZXJ5KHRoaXMuX3BhcmVudC5fY29udGFpbmVyLCBjb25maWcuY29udGFpbmVyKTtcblxuICAgICAgLy8gSWYgd2UgaGF2ZSBhIHBhcmVudCwgYW5kIHRoZSBjb250YWluZXIgaXMgbWlzc2luZyBmcm9tIHRoZSBET00sXG4gICAgICAvLyB3ZSBjb25zdHJ1Y3QgdGhlIGNvbnRhaW5lciBhbmQgYXBwZW5kIGl0IHRvIHRoZSBwYXJlbnRcbiAgICAgIGlmICh0aGlzLl9jb250YWluZXIgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gRE9NLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IGNvbmZpZy5jb250YWluZXIuc3Vic3RyaW5nKDEsIGNvbmZpZy5jb250YWluZXIubGVuZ3RoKVxuICAgICAgICB9KTtcbiAgICAgICAgRE9NLmFwcGVuZCh0aGlzLl9wYXJlbnQuX2NvbnRhaW5lciwgdGhpcy5fY29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29udGFpbmVyID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIGNvbnRhaW5lciBET00gbm9kZTogJyArIGNvbmZpZy5jb250YWluZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIGNsYXNzIHRvIGJlIGFwcGxpZWQgdG8ge3RoaXMuX2NvbnRhaW5lcn0gbm9kZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fY2xhc3NOYW1lID0gY29uZmlnLmNsYXNzIHx8ICdjb21wb25lbnQnO1xuXG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gcmVuZGVyIGZ1bmN0aW9uIHRvIGJlIHVzZWQgaW5zdGVhZCBvZiB1c2luZyB0aGUgZGVmYXVsdCByZW5kZXJlclxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXIgPSBjb25maWcucmVuZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgZGVmYXVsdCB7UmVuZGVyZXJ9IHRoYXQgd2lsbCBiZSB1c2VkIGZvciByZW5kZXJpbmcgdGhlIHRlbXBsYXRlXG4gICAgICogQHR5cGUge1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3JlbmRlcmVyID0gY29uZmlnLnJlbmRlcmVyIHx8IFJlbmRlcmVycy5IYW5kbGViYXJzO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHN0cmluZyB0byB1c2UgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50XG4gICAgICogSWYgdGhpcyBpcyBsZWZ0IGVtcHR5LCB3ZSBsb29rdXAgdGhlIHRlbXBsYXRlIHRoZSBiYXNlIHRlbXBsYXRlcyB1c2luZyB0aGUgdGVtcGxhdGVOYW1lXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZSA9IGNvbmZpZy50ZW1wbGF0ZSA/IHRoaXMuX3JlbmRlcmVyLmNvbXBpbGUoY29uZmlnLnRlbXBsYXRlKSA6IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGVOYW1lIHRvIHVzZSBmb3IgcmVuZGVyaW5nIHRoZSBjb21wb25lbnQuXG4gICAgICogVGhpcyBpcyBvbmx5IHVzZWQgaWYgX3RlbXBsYXRlIGlzIGVtcHR5LlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gY29uZmlnLnRlbXBsYXRlTmFtZSB8fCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRUZW1wbGF0ZU5hbWUoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHN0YXRlIGluZGljYXRpbmcgd2hldGhlciBvciBub3QgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBtb3VudGVkIHRvIHRoZSBET01cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjaywgdGhhdHMgdXNlZCB0byB0cmFuc2Zvcm0gdGhlIGludGVybmFsIGRhdGFcbiAgICAgKiBtb2RlbHMgb2YgdGhlIGNvbXBvbmVudHMsIGJlZm9yZSBpdCBnZXRzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudCBzdGF0ZS5cbiAgICAgKiBCeSBkZWZhdWx0LCBubyB0cmFuc2Zvcm1hdGlvbiBoYXBwZW5zLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLnRyYW5zZm9ybURhdGEgPSBjb25maWcudHJhbnNmb3JtRGF0YSB8fCB0aGlzLnRyYW5zZm9ybURhdGEgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnQgaXMgY3JlYXRlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vbkNyZWF0ZSA9IGNvbmZpZy5vbkNyZWF0ZSB8fCB0aGlzLm9uQ3JlYXRlIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIGEgY29tcG9uZW50IGlzIE1vdW50ZWQuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMub25Nb3VudCA9IGNvbmZpZy5vbk1vdW50IHx8IHRoaXMub25Nb3VudCB8fCBmdW5jdGlvbiAoKSB7IH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnRzIHN0YXRlIGlzIHVwZGF0ZWQuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMub25VcGRhdGUgPSBjb25maWcub25VcGRhdGUgfHwgdGhpcy5vblVwZGF0ZSB8fCBmdW5jdGlvbiAoKSB7IH07XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ2RlZmF1bHQnO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0NvbXBvbmVudCc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpbml0IChvcHRzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShvcHRzLmRhdGEgfHwgb3B0cy5zdGF0ZSB8fCB7fSk7XG4gICAgdGhpcy5vbkNyZWF0ZSgpO1xuICAgIHRoaXMuX3N0YXRlLm9uKCd1cGRhdGUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uVXBkYXRlKCk7XG4gICAgICB0aGlzLm1vdW50KCk7XG4gICAgfSk7XG5cbiAgICBET00uYWRkQ2xhc3ModGhpcy5fY29udGFpbmVyLCB0aGlzLl9jbGFzc05hbWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHsgX2NvbmZpZzogdGhpcy5fY29uZmlnIH0sIGRhdGEpO1xuICAgIHRoaXMuX3N0YXRlLnNldChuZXdTdGF0ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRTdGF0ZSAocHJvcCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5nZXQocHJvcCk7XG4gIH1cblxuICBoYXNTdGF0ZSAocHJvcCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5oYXMocHJvcCk7XG4gIH1cblxuICB0cmFuc2Zvcm1EYXRhIChkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBhZGRDaGlsZCAoZGF0YSwgdHlwZSwgb3B0cykge1xuICAgIGxldCBjaGlsZENvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoXG4gICAgICB0eXBlLFxuICAgICAgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcbiAgICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9LCBvcHRzIHx8IHt9LCB7XG4gICAgICAgIF9wYXJlbnRPcHRzOiB0aGlzLl9jb25maWdcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGRDb21wb25lbnQpO1xuICAgIHJldHVybiBjaGlsZENvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbm1vdW50IGFuZCByZW1vdmUgdGhpcyBjb21wb25lbnQgYW5kIGl0cyBjaGlsZHJlbiBmcm9tIHRoZSBsaXN0XG4gICAqIG9mIGFjdGl2ZSBjb21wb25lbnRzXG4gICAqL1xuICByZW1vdmUgKCkge1xuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goYyA9PiBjLnJlbW92ZSgpKTtcbiAgICB0aGlzLnVuTW91bnQoKTtcbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIucmVtb3ZlKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgcmVuZGVyIG1ldGhvZCB0byBiZSB1c2VkIGZvciByZW5kZXJpbmcgdGhlIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZW5kZXJcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc2V0UmVuZGVyIChyZW5kZXIpIHtcbiAgICB0aGlzLl9yZW5kZXIgPSByZW5kZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSByZW5kZXJlciBmb3IgdGhlIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge1JlbmRlcmVyVHlwZX0gcmVuZGVyZXJcbiAgICovXG4gIHNldFJlbmRlcmVyIChyZW5kZXJlcikge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gUmVuZGVyZXJzW3JlbmRlcmVyXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0ZW1wbGF0ZSBmb3IgdGhlIGNvbXBvbmVudCB0byB1c2Ugd2hlbiByZW5kZXJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gICAqL1xuICBzZXRUZW1wbGF0ZSAodGVtcGxhdGUpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZSA9IHRoaXMuX3JlbmRlcmVyLmNvbXBpbGUodGVtcGxhdGUpO1xuICB9XG5cbiAgdW5Nb3VudCAoKSB7XG4gICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcbiAgICBET00uZW1wdHkodGhpcy5fY29udGFpbmVyKTtcbiAgfVxuXG4gIG1vdW50ICgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy51bk1vdW50KCk7XG4gICAgaWYgKHRoaXMuYmVmb3JlTW91bnQoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIERPTS5hcHBlbmQodGhpcy5fY29udGFpbmVyLCB0aGlzLnJlbmRlcih0aGlzLl9zdGF0ZS5hc0pTT04oKSkpO1xuXG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9vbk1vdW50KCk7XG5cbiAgICAvLyBBdHRhY2ggYW5hbHl0aWNzIGhvb2tzIGFzIG5lY2Vzc2FyeVxuICAgIGlmICh0aGlzLmFuYWx5dGljc1JlcG9ydGVyKSB7XG4gICAgICBsZXQgZG9tSG9va3MgPSBET00ucXVlcnlBbGwodGhpcy5fY29udGFpbmVyLCAnW2RhdGEtZXZlbnR0eXBlXTpub3QoW2RhdGEtaXMtYW5hbHl0aWNzLWF0dGFjaGVkXSknKTtcbiAgICAgIGRvbUhvb2tzLmZvckVhY2godGhpcy5fY3JlYXRlQW5hbHl0aWNzSG9vay5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9vbk1vdW50ICgpIHtcbiAgICB0aGlzLm9uTW91bnQodGhpcyk7XG4gICAgaWYgKHRoaXMuX2NoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgY2hpbGQuX29uTW91bnQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZW5kZXIgdGhlIHRlbXBsYXRlIHVzaW5nIHRoZSB7UmVuZGVyZXJ9IHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgYW5kIHRlbXBsYXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHJlbmRlciAoZGF0YSA9IHRoaXMuX3N0YXRlLmdldCgpKSB7XG4gICAgdGhpcy5iZWZvcmVSZW5kZXIoKTtcbiAgICBkYXRhID0gdGhpcy50cmFuc2Zvcm1EYXRhKGRhdGEpO1xuXG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICAvLyBVc2UgZWl0aGVyIHRoZSBjdXN0b20gcmVuZGVyIGZ1bmN0aW9uIG9yIHRoZSBpbnRlcm5hbCByZW5kZXJlclxuICAgIC8vIGRlcGVuZGFudCBvbiB0aGUgY29tcG9uZW50IGNvbmZpZ3VyYXRpb25cbiAgICBpZiAodHlwZW9mIHRoaXMuX3JlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaHRtbCA9IHRoaXMuX3JlbmRlcihkYXRhKTtcbiAgICAgIGlmICh0eXBlb2YgaHRtbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW5kZXIgbWV0aG9kIG11c3QgcmV0dXJuIEhUTUwgYXMgdHlwZSB7c3RyaW5nfScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZW5kZXIgdGhlIGV4aXN0aW5nIHRlbXBsYXRlcyBhcyBhIHN0cmluZ1xuICAgICAgaHRtbCA9IHRoaXMuX3JlbmRlcmVyLnJlbmRlcih7XG4gICAgICAgIHRlbXBsYXRlOiB0aGlzLl90ZW1wbGF0ZSxcbiAgICAgICAgdGVtcGxhdGVOYW1lOiB0aGlzLl90ZW1wbGF0ZU5hbWVcbiAgICAgIH0sIGRhdGEpO1xuICAgIH1cblxuICAgIC8vIFdlIGNyZWF0ZSBhbiBIVE1MIERvY3VtZW50IGZyYWdtZW50IHdpdGggdGhlIHJlbmRlcmVkIHN0cmluZ1xuICAgIC8vIFNvIHRoYXQgd2UgY2FuIHF1ZXJ5IGl0IGZvciBwcm9jZXNzaW5nIG9mIHN1YiBjb21wb25lbnRzXG4gICAgbGV0IGVsID0gRE9NLmNyZWF0ZShodG1sKTtcblxuICAgIC8vIFByb2Nlc3MgdGhlIERPTSB0byBkZXRlcm1pbmUgaWYgd2Ugc2hvdWxkIGNyZWF0ZVxuICAgIC8vIGluLW1lbW9yeSBzdWItY29tcG9uZW50cyBmb3IgcmVuZGVyaW5nXG4gICAgbGV0IGRvbUNvbXBvbmVudHMgPSBET00ucXVlcnlBbGwoZWwsICdbZGF0YS1jb21wb25lbnRdJyk7XG4gICAgZG9tQ29tcG9uZW50cy5mb3JFYWNoKGMgPT4gdGhpcy5fY3JlYXRlU3ViY29tcG9uZW50KGMsIGRhdGEpKTtcblxuICAgIHRoaXMuYWZ0ZXJSZW5kZXIoKTtcbiAgICByZXR1cm4gZWwuaW5uZXJIVE1MO1xuICB9XG5cbiAgX2NyZWF0ZVN1YmNvbXBvbmVudCAoZG9tQ29tcG9uZW50LCBkYXRhKSB7XG4gICAgbGV0IGRhdGFzZXQgPSBkb21Db21wb25lbnQuZGF0YXNldDtcbiAgICBsZXQgdHlwZSA9IGRhdGFzZXQuY29tcG9uZW50O1xuICAgIGxldCBwcm9wID0gZGF0YXNldC5wcm9wO1xuICAgIGxldCBvcHRzID0gZGF0YXNldC5vcHRzID8gSlNPTi5wYXJzZShkYXRhc2V0Lm9wdHMpIDoge307XG5cbiAgICAvLyBSZW5kZXJpbmcgYSBzdWIgY29tcG9uZW50IHNob3VsZCBiZSB3aXRoaW4gdGhlIGNvbnRleHQsXG4gICAgLy8gb2YgdGhlIG5vZGUgdGhhdCB3ZSBwcm9jZXNzZWQgaXQgZnJvbVxuICAgIG9wdHMgPSBPYmplY3QuYXNzaWduKG9wdHMsIHtcbiAgICAgIGNvbnRhaW5lcjogZG9tQ29tcG9uZW50XG4gICAgfSk7XG5cbiAgICBsZXQgY2hpbGREYXRhID0gZGF0YVtwcm9wXSB8fCB7fTtcblxuICAgIC8vIFRPRE8oYmlsbHkpIFJpZ2h0IG5vdywgaWYgd2UgcHJvdmlkZSBhbiBhcnJheSBhcyB0aGUgZGF0YSBwcm9wLFxuICAgIC8vIHRoZSBiZWhhdmlvciBpcyB0byBjcmVhdGUgbWFueSBjb21wb25lbnRzIGZvciBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5LlxuICAgIC8vIFRIQVQgaW50ZXJmYWNlIFNIT1VMRCBjaGFuZ2UgdG8gdXNlIGEgZGlmZmVyZW50IHByb3BlcnR5IHRoYXQgZGVmaW5lc1xuICAgIC8vIHdoZXRoZXIgdG8gYXJyYXkgZGF0YSBzaG91bGQgYmUgdXNlZCBmb3IgYSBzaW5nbGUgY29tcG9uZW50IG9yXG4gICAgLy8gdG8gY3JlYXRlIG1hbnkgY29tcG9uZW50cyBmb3IgZWFjaCBpdGVtLlxuICAgIC8vIE92ZXJsb2FkaW5nIGFuZCBoYXZpbmcgdGhpcyBzaWRlIGVmZmVjdCBpcyB1bmludHVpdGl2ZSBhbmQgV1JPTkdcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGREYXRhKSkge1xuICAgICAgbGV0IGNoaWxkQ29tcG9uZW50ID0gdGhpcy5hZGRDaGlsZChjaGlsZERhdGEsIHR5cGUsIG9wdHMpO1xuICAgICAgRE9NLmFwcGVuZChkb21Db21wb25lbnQsIGNoaWxkQ29tcG9uZW50LnJlbmRlcigpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UsIHJlbmRlciB0aGUgY29tcG9uZW50IGFzIGV4cGVjdGVkXG4gICAgbGV0IGNoaWxkSFRNTCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGREYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGRDb21wb25lbnQgPSB0aGlzLmFkZENoaWxkKGNoaWxkRGF0YVtpXSwgdHlwZSwgb3B0cyk7XG4gICAgICBjaGlsZEhUTUwucHVzaChjaGlsZENvbXBvbmVudC5yZW5kZXIoKSk7XG4gICAgfVxuXG4gICAgRE9NLmFwcGVuZChkb21Db21wb25lbnQsIGNoaWxkSFRNTC5qb2luKCcnKSk7XG4gIH1cblxuICBfY3JlYXRlQW5hbHl0aWNzSG9vayAoZG9tQ29tcG9uZW50KSB7XG4gICAgZG9tQ29tcG9uZW50LmRhdGFzZXQuaXNBbmFseXRpY3NBdHRhY2hlZCA9IHRydWU7XG4gICAgY29uc3QgZGF0YXNldCA9IGRvbUNvbXBvbmVudC5kYXRhc2V0O1xuICAgIGNvbnN0IHR5cGUgPSBkYXRhc2V0LmV2ZW50dHlwZTtcbiAgICBjb25zdCBsYWJlbCA9IGRhdGFzZXQuZXZlbnRsYWJlbDtcbiAgICBjb25zdCBvcHRpb25zID0gZGF0YXNldC5ldmVudG9wdGlvbnMgPyBKU09OLnBhcnNlKGRhdGFzZXQuZXZlbnRvcHRpb25zKSA6IHt9O1xuXG4gICAgRE9NLm9uKGRvbUNvbXBvbmVudCwgJ2NsaWNrJywgZSA9PiB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBBbmFseXRpY3NFdmVudCh0eXBlLCBsYWJlbCk7XG4gICAgICBldmVudC5hZGRPcHRpb25zKHRoaXMuX2FuYWx5dGljc09wdGlvbnMpO1xuICAgICAgZXZlbnQuYWRkT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgIHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIucmVwb3J0KGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbkNyZWF0ZSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGNvbnN0cnVjdGVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvbkNyZWF0ZSAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uVXBkYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGNoYW5nZXNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uVXBkYXRlIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlUmVuZGVyIGV2ZW50IGlzIHRyaWdnZXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYmVmb3JlUmVuZGVyIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYWZ0ZXJSZW5kZXIgZXZlbnQgaXMgdHJpZ2dlcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIGFmdGVyUmVuZGVyIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25Nb3VudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFwcGVuZGVkIHRvIHRoZSBET01cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvblVuTW91bnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyByZW1vdmVkIGZyb20gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25Vbk1vdW50IChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlTW91bnQgaXMgdHJpZ2dlcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQgdG8gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYmVmb3JlTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvbkRlc3Ryb3kgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uRGVzdHJveSAoY2IpIHtcblxuICB9XG59XG4iLCIvKiogQG1vZHVsZSBOYXZpZ2F0aW9uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIFRoZSBkZWJvdW5jZSBkdXJhdGlvbiBmb3IgcmVzaXplIGV2ZW50c1xuICogQHR5cGUge251bWJlcn1cbiAqL1xuY29uc3QgUkVTSVpFX0RFQk9VTkNFID0gMTAwO1xuXG4vKipcbiAqIFRoZSBUYWIgaXMgYSBtb2RlbCB0aGF0IGlzIHVzZWQgdG8gcG93ZXIgdGhlIE5hdmlnYXRpb24gdGFicyBpbiB0aGUgdmlldy5cbiAqIEl0J3MgaW5pdGlhbGl6ZWQgdGhyb3VnaCB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50LlxuICovXG5leHBvcnQgY2xhc3MgVGFiIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSB0YWIgdGhhdCBpcyBleHBvc2VkIGZvciB0aGUgbGlua1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbCA9IGNvbmZpZy5sYWJlbDtcbiAgICBpZiAodHlwZW9mIHRoaXMubGFiZWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCdsYWJlbCBpcyBhIHJlcXVpcmVkIGNvbmZpZ3VyYXRpb24gb3B0aW9uIGZvciB0YWIuJywgJ05hdmlnYXRpb25Db21wb25lbnQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcGxldGUgVVJMLCBpbmNsdWRpbmcgdGhlIHBhcmFtc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy51cmwgPSBjb25maWcudXJsO1xuICAgIGlmICh0eXBlb2YgdGhpcy51cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCd1cmwgaXMgYSByZXF1aXJlZCBjb25maWd1cmF0aW9uIG9wdGlvbiBmb3IgdGFiLicsICdOYXZpZ2F0aW9uQ29tcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlcnZlcnNpZGUgdmVydGljYWwgY29uZmlnIGlkIHRoYXQgdGhpcyBpcyByZWZlcmVuY2VkIHRvLlxuICAgICAqIEJ5IHByb3ZpZGluZyB0aGlzLCBlbmFibGVzIGR5bmFtaWMgc29ydGluZyBiYXNlZCBvbiByZXN1bHRzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5jb25maWdJZCA9IGNvbmZpZy5jb25maWdJZCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhc2UgVVJMIHVzZWQgZm9yIGNvbnN0cnVjdGluZyB0aGUgVVJMIHdpdGggcGFyYW1zXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmJhc2VVcmwgPSBjb25maWcudXJsO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHNob3cgdGhpcyB0YWIgZmlyc3QgaW4gdGhlIG9yZGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc0ZpcnN0ID0gY29uZmlnLmlzRmlyc3QgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRvIGFwcGx5IGEgc3BlY2lhbCBjbGFzcyB0byB0aGVcbiAgICAgKiBtYXJrdXAgdG8gZGV0ZXJtaW5lIGlmIGl0J3MgYW4gYWN0aXZlIHRhYlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNBY3RpdmUgPSBjb25maWcuaXNBY3RpdmUgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogaGVscGVyIHRvIGNvbnN0cnVjdCB0aGUgZXZlbnRPcHRpb25zIGZvciBhbmFseXRpY3NcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldCBldmVudE9wdGlvbnMgKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiB0aGlzLmNvbmZpZ0lkXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogZnJvbSB3aWxsIGNvbnN0cnVjdCBhIG1hcCBvZiBjb25maWdJZCB0byB7VGFifSBmcm9tXG4gICAqIGEgY29uZmlndXJhdGlvbiBmaWxlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0YWJzQ29uZmlnIHRoZSBjb25maWd1cmF0aW9uIHRvIHVzZVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHRhYnNDb25maWcpIHtcbiAgICBsZXQgdGFicyA9IHt9O1xuICAgIC8vIFBhcnNlIHRoZSBvcHRpb25zIGFuZCBidWlsZCBvdXQgb3VyIHRhYnMgYW5kXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzQ29uZmlnLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdGFiID0gdGFic0NvbmZpZ1tpXTtcbiAgICAgIC8vIEZvciB0YWJzIHdpdGhvdXQgY29uZmlnIGlkcywgbWFwIHRoZWlyIFVSTCB0byB0aGUgY29uZmlnSURcbiAgICAgIC8vIHRvIGF2b2lkIGR1cGxpY2F0aW9uIG9mIHJlbmRlcnNcbiAgICAgIGlmICh0YWIuY29uZmlnSWQgPT09IHVuZGVmaW5lZCAmJiB0YWJzW3RhYi5jb25maWdJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YWIuY29uZmlnSWQgPSB0YWIudXJsO1xuICAgICAgfVxuXG4gICAgICB0YWJzW3RhYi5jb25maWdJZF0gPSBuZXcgVGFiKHRhYik7XG4gICAgfVxuICAgIHJldHVybiB0YWJzO1xuICB9XG59XG5cbi8qKlxuICogTmF2aWdhdGlvbkNvbXBvbmVudCBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgYnVpbGRpbmcgYSBkeW5hbWljXG4gKiBuYXZpZ2F0aW9uIHRoYXQgaXMgcG93ZXJlZCBieSB1bml2ZXJzYWwgc2VhcmNoIHVwZGF0ZXMuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gc2hvdyBvbiB0aGUgZHJvcGRvd24gbWVudSBidXR0b25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZHJvcGRvd25MYWJlbCA9IGNvbmZpZy5kcm9wZG93bkxhYmVsIHx8ICdNb3JlJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBpY29uIHRvIHNob3cgb24gdGhlIGRyb3Bkb3duIG1lbnUgYnV0dG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmRyb3Bkb3duSWNvbiA9IGNvbmZpZy5kcm9wZG93bkljb24gfHwgJ2thYm9iJztcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHJlbmRlciBhIHN0YXRpYyBuYXZpZ2F0aW9uIHdpdGggbm8gXCJtb3JlXCIgbWVudVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuc3RhdGljID0gY29uZmlnLnN0YXRpYyB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkYXRhIHN0b3JhZ2Uga2V5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuTkFWSUdBVElPTjtcblxuICAgIC8qKlxuICAgICAqIFVub3JkZXJlZCBtYXAgb2YgZWFjaCB0YWIsIGtleWVkIGJ5IFZTIGNvbmZpZ0lkXG4gICAgICogQHR5cGUge09iamVjdC48U3RyaW5nLCBPYmplY3Q+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGFicyA9IFRhYi5mcm9tKGNvbmZpZy50YWJzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcmRlciBvZiB0aGUgdGFicywgcGFyc2VkIGZyb20gY29uZmlndXJhdGlvbiBvciBVUkwuXG4gICAgICogVGhpcyBnZXRzIHVwZGF0ZWQgYmFzZWQgb24gdGhlIHNlcnZlciByZXN1bHRzXG4gICAgICogQHR5cGUge0FycmF5LjxTdHJpbmc+fSBUaGUgbGlzdCBvZiBWUyBjb25maWdJZHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RhYk9yZGVyID0gdGhpcy5nZXREZWZhdWx0VGFiT3JkZXIoY29uZmlnLnRhYnMsIHRoaXMuZ2V0VXJsUGFyYW1zKCkpO1xuXG4gICAgLyoqXG4gICAgICogQnJlYWtwb2ludHMgYXQgd2hpY2ggbmF2aWdhdGlvbiBpdGVtcyBtb3ZlIHRvIHRoZSBcIm1vcmVcIiBkcm9wZG93blxuICAgICAqIEB0eXBlIHtudW1iZXJbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX25hdkJyZWFrcG9pbnRzID0gW107XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTmF2aWdhdGlvbic7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ25hdmlnYXRpb24vbmF2aWdhdGlvbic7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgRE9NLm9uKHdpbmRvdywgJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2RlYm91bmNlVGltZXIpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGVib3VuY2VUaW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kZWJvdW5jZVRpbWVyID0gc2V0VGltZW91dCh0aGlzLnJlZml0TmF2LmJpbmQodGhpcyksIFJFU0laRV9ERUJPVU5DRSk7XG4gICAgICB9KTtcbiAgICAgIERPTS5vbih3aW5kb3csICdjbGljaycsIHRoaXMuY2hlY2tPdXRzaWRlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgdGhpcy5yZWZpdE5hdigpO1xuICAgICAgRE9NLm9uKERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb3JlJyksICdjbGljaycsIHRoaXMudG9nZ2xlTW9yZURyb3Bkb3duLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHJlZml0TmF2ICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtY29udGFpbmVyJyk7XG4gICAgY29uc3QgbW9yZUJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb3JlJyk7XG4gICAgY29uc3QgbWFpbkxpbmtzID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LWV4cGFuZGVkJyk7XG4gICAgY29uc3QgY29sbGFwc2VkTGlua3MgPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9kYWwnKTtcblxuICAgIGNvbnN0IG5hdldpZHRoID0gbW9yZUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3l4dC1OYXYtaXRlbS0tbW9yZScpXG4gICAgICA/IGNvbnRhaW5lci5vZmZzZXRXaWR0aFxuICAgICAgOiBjb250YWluZXIub2Zmc2V0V2lkdGggLSBtb3JlQnV0dG9uLm9mZnNldFdpZHRoO1xuICAgIGxldCBudW1CcmVha3BvaW50cyA9IHRoaXMuX25hdkJyZWFrcG9pbnRzLmxlbmd0aDtcblxuICAgIGlmIChtYWluTGlua3Mub2Zmc2V0V2lkdGggPiBuYXZXaWR0aCkge1xuICAgICAgdGhpcy5fbmF2QnJlYWtwb2ludHMucHVzaChtYWluTGlua3Mub2Zmc2V0V2lkdGgpO1xuICAgICAgY29uc3QgbGFzdExpbmsgPSBtYWluTGlua3MuY2hpbGRyZW4uaXRlbShtYWluTGlua3MuY2hpbGRyZW4ubGVuZ3RoIC0gMSk7XG4gICAgICBpZiAobGFzdExpbmsgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29sbGFwc2VkTGlua3MucHJlcGVuZChsYXN0TGluayk7XG5cbiAgICAgIGlmIChtb3JlQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygneXh0LU5hdi1pdGVtLS1tb3JlJykpIHtcbiAgICAgICAgbW9yZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCd5eHQtTmF2LWl0ZW0tLW1vcmUnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG51bUJyZWFrcG9pbnRzICYmIG5hdldpZHRoID4gdGhpcy5fbmF2QnJlYWtwb2ludHNbbnVtQnJlYWtwb2ludHMgLSAxXSkge1xuICAgICAgICBjb25zdCBmaXJzdExpbmsgPSBjb2xsYXBzZWRMaW5rcy5jaGlsZHJlbi5pdGVtKDApO1xuICAgICAgICBpZiAoZmlyc3RMaW5rID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG1haW5MaW5rcy5hcHBlbmQoZmlyc3RMaW5rKTtcbiAgICAgICAgdGhpcy5fbmF2QnJlYWtwb2ludHMucG9wKCk7XG4gICAgICAgIG51bUJyZWFrcG9pbnRzLS07XG4gICAgICB9XG5cbiAgICAgIGlmIChjb2xsYXBzZWRMaW5rcy5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbW9yZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd5eHQtTmF2LWl0ZW0tLW1vcmUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNsb3NlTW9yZURyb3Bkb3duKCk7XG4gICAgaWYgKG1haW5MaW5rcy5vZmZzZXRXaWR0aCA+IG5hdldpZHRoIHx8XG4gICAgICAobnVtQnJlYWtwb2ludHMgPiAwICYmIG5hdldpZHRoID4gdGhpcy5fbmF2QnJlYWtwb2ludHNbbnVtQnJlYWtwb2ludHMgLSAxXSkpIHtcbiAgICAgIHRoaXMucmVmaXROYXYoKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZU1vcmVEcm9wZG93biAoKSB7XG4gICAgY29uc3QgY29sbGFwc2VkID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vZGFsJyk7XG4gICAgY29sbGFwc2VkLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgIGNvbnN0IG1vcmVCdXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9yZScpO1xuICAgIG1vcmVCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICB9XG5cbiAgb3Blbk1vcmVEcm9wZG93biAoKSB7XG4gICAgY29uc3QgY29sbGFwc2VkID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vZGFsJyk7XG4gICAgY29sbGFwc2VkLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgIGNvbnN0IG1vcmVCdXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLnl4dC1OYXYtbW9yZScpO1xuICAgIG1vcmVCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG4gIH1cblxuICB0b2dnbGVNb3JlRHJvcGRvd24gKCkge1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsICcueXh0LU5hdi1tb2RhbCcpO1xuICAgIGNvbGxhcHNlZC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgICBjb25zdCBtb3JlQnV0dG9uID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy55eHQtTmF2LW1vcmUnKTtcbiAgICBtb3JlQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGNvbGxhcHNlZC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKTtcbiAgfVxuXG4gIGNoZWNrT3V0c2lkZUNsaWNrIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy55eHQtTmF2LWNvbnRhaW5lcicpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZU1vcmVEcm9wZG93bigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbmNlIHRoZSBzZXJ2ZXIgZGF0YSBvbmx5IHByb3ZpZGVzIGEgbGlzdCBvZlxuICAgKiBWUyBjb25maWdJZHMsIHdlIG5lZWQgdG8gY29tcHV0ZSBhbmQgdHJhbnNmb3JtXG4gICAqIHRoZSBkYXRhIGludG8gdGhlIHByb3BlciBmb3JtYXQgZm9yIHJlbmRlcmluZy5cbiAgICpcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIGlmIChkYXRhLnRhYk9yZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3RhYk9yZGVyID0gdGhpcy5tZXJnZVRhYk9yZGVyKGRhdGEudGFiT3JkZXIsIHRoaXMuX3RhYk9yZGVyKTtcbiAgICB9XG5cbiAgICAvLyBTaW5jZSB0aGUgdGFiIG9yZGVyaW5nIGNhbiBjaGFuZ2UgYmFzZWQgb24gdGhlIHNlcnZlciBkYXRhXG4gICAgLy8gd2UgbmVlZCB0byB1cGRhdGUgZWFjaCB0YWJzIFVSTCB0byBpbmNsdWRlIHRoZSBvcmRlciBhcyBwYXJ0IG9mIHRoZWlyIHBhcmFtcy5cbiAgICAvLyBUaGlzIGhlbHBzIHdpdGggcGVyc2lzdGluZyBzdGF0ZSBhY3Jvc3MgdmVydGljYWxzLlxuICAgIGxldCB0YWJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90YWJPcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRhYiA9IHRoaXMuX3RhYnNbdGhpcy5fdGFiT3JkZXJbaV1dO1xuICAgICAgaWYgKHRhYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhYi51cmwgPSB0aGlzLmdlbmVyYXRlVGFiVXJsKHRhYi5iYXNlVXJsLCB0aGlzLmdldFVybFBhcmFtcygpKTtcbiAgICAgICAgdGFicy5wdXNoKHRhYik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKHtcbiAgICAgIHRhYnM6IHRhYnMsXG4gICAgICBkcm9wZG93bkxhYmVsOiB0aGlzLmRyb3Bkb3duTGFiZWwsXG4gICAgICBkcm9wZG93bkljb246IHRoaXMuZHJvcGRvd25JY29uLFxuICAgICAgc3RhdGljOiB0aGlzLnN0YXRpY1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VXJsUGFyYW1zICgpIHtcbiAgICByZXR1cm4gbmV3IFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0RGVmYXVsdFRhYk9yZGVyIHdpbGwgY29tcHV0ZSB0aGUgaW5pdGlhbCB0YWIgb3JkZXJpbmcgYmFzZWRcbiAgICogb24gYSBjb21iaW5hdGlvbiBvZiB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZCBkaXJlY3RseSB0byB0aGUgY29tcG9uZW50XG4gICAqIGFuZCB0aGUgdXJsIHBhcmFtcy5cbiAgICogQHBhcmFtIHtPYmplY3RbXX0gdGFic0NvbmZpZ1xuICAgKiBAcGFyYW0ge1NlYXJjaFBhcmFtc31cbiAgICovXG4gIGdldERlZmF1bHRUYWJPcmRlciAodGFic0NvbmZpZywgdXJsUGFyYW1zKSB7XG4gICAgbGV0IHRhYk9yZGVyID0gW107XG5cbiAgICAvLyBVc2UgdGhlIG9yZGVyaW5nIGZyb20gdGhlIFVSTCBhcyB0aGUgcHJpbWFyeSBjb25maWd1cmF0aW9uXG4gICAgLy8gQW5kIHRoZW4gbWVyZ2UgaXQgd2l0aCB0aGUgbG9jYWwgY29uZmlndXJhdGlvbiwgaWYgcHJvdmlkZWQuXG4gICAgaWYgKHVybFBhcmFtcyAmJiB1cmxQYXJhbXMuaGFzKCd0YWJPcmRlcicpKSB7XG4gICAgICB0YWJPcmRlciA9IHVybFBhcmFtcy5nZXQoJ3RhYk9yZGVyJykuc3BsaXQoJywnKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNDb25maWcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhYiA9IHRhYnNDb25maWdbaV07XG4gICAgICAvLyBTb21lIHRhYnMgZG9uJ3QgaGF2ZSBjb25maWdJZCwgc28gd2UgbWFwIGl0IGZyb20gVVJMXG4gICAgICBpZiAodGFiLmNvbmZpZ0lkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGFiLmNvbmZpZ0lkID0gdGFiLnVybDtcbiAgICAgIH1cblxuICAgICAgLy8gQXZvaWQgZHVwbGljYXRlcyBpZiBjb25maWcgd2FzIHByb3ZpZGVkIGZyb20gVVJMXG4gICAgICBpZiAodGFiT3JkZXIuaW5jbHVkZXModGFiLmNvbmZpZ0lkKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gaXNGaXJzdCBzaG91bGQgYWx3YXlzIGJlIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBsaXN0XG4gICAgICBpZiAodGFiLmlzRmlyc3QpIHtcbiAgICAgICAgdGFiT3JkZXIudW5zaGlmdCh0YWIuY29uZmlnSWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFiT3JkZXIucHVzaCh0YWIuY29uZmlnSWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YWJPcmRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBtZXJnZVRhYk9yZGVyIG1lcmdlcyB0d28gYXJyYXlzIGludG8gb25lXG4gICAqIGJ5IGFwcGVuZGluZyBhZGRpdGlvbmFsIHRhYnMgdG8gdGhlIGVuZCBvZiB0aGUgb3JpZ2luYWwgYXJyYXlcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdGFiT3JkZXIgVGFiIG9yZGVyIHByb3ZpZGVkIGJ5IHRoZSBzZXJ2ZXJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gb3RoZXJUYWJPcmRlciBUYWIgb3JkZXIgcHJvdmlkZWQgYnkgY29uZmlndXJhdGlvblxuICAgKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAgICovXG4gIG1lcmdlVGFiT3JkZXIgKHRhYk9yZGVyLCBvdGhlclRhYk9yZGVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdGhlclRhYk9yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YWJDb25maWcgPSBvdGhlclRhYk9yZGVyW2ldO1xuICAgICAgaWYgKHRhYk9yZGVyLmluY2x1ZGVzKHRhYkNvbmZpZykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIGlzRmlyc3Qgc2hvdWxkIGJlIGFuIG92ZXJyaWRlIHRvIGR5bmFtaWMgdGFiIG9yZGVyaW5nLlxuICAgICAgaWYgKHRoaXMuX3RhYnNbdGFiQ29uZmlnXSAmJiB0aGlzLl90YWJzW3RhYkNvbmZpZ10uaXNGaXJzdCkge1xuICAgICAgICB0YWJPcmRlci51bnNoaWZ0KHRhYkNvbmZpZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWJPcmRlci5wdXNoKHRhYkNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYk9yZGVyO1xuICB9XG5cbiAgZ2VuZXJhdGVUYWJVcmwgKGJhc2VVcmwsIHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKSkge1xuICAgIC8vIFdlIHdhbnQgdG8gcGVyc2lzdCB0aGUgcGFyYW1zIGZyb20gdGhlIGV4aXN0aW5nIFVSTCB0byB0aGUgbmV3XG4gICAgLy8gVVJMUyB3ZSBjcmVhdGUuXG4gICAgcGFyYW1zLnNldCgndGFiT3JkZXInLCB0aGlzLl90YWJPcmRlcik7XG4gICAgcmV0dXJuIGJhc2VVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyICovXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBhcGkgZmlsdGVyIGFuZCBwcm92aWRlcyBzdGF0aWMgbWV0aG9kcyBmb3IgZWFzaWx5IGNvbnN0cnVjdGluZyBGaWx0ZXJzLlxuICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLnlleHQuY29tL2RvY3MvYXBpLXJlZmVyZW5jZS8jb3BlcmF0aW9uL2xpc3RFbnRpdGllcyBmb3Igc3RydWN0dXJlIGRldGFpbHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBhIEpTT04gZm9ybWF0IGZpbHRlciByZXR1cm5lZCBmcm9tIHRoZSBzZXJ2ZXIgaW50byBhIEZpbHRlclxuICAgKiBAcGFyYW0geyp9IHJlc3BvbnNlRmlsdGVyIEEgZmlsdGVyIGluIEpTT04gZm9ybWF0IHJldHVybmVkIGZyb20gdGhlIGJhY2tlbmRcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBmcm9tUmVzcG9uc2UgKHJlc3BvbnNlRmlsdGVyKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoSlNPTi5wYXJzZShyZXNwb25zZUZpbHRlcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIG5ldyBGaWx0ZXIgcmVwcmVzZW50aW5nIHRoZSBPUiBvZiBhbGwgcHJvdmlkZWQgZmlsdGVyc1xuICAgKiBAcGFyYW0gIHsuLi5GaWx0ZXJ9IGZpbHRlcnMgVGhlIGZpbHRlcnMgdG8gT1IgdG9nZXRoZXJcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBvciAoLi4uZmlsdGVycykge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgICckb3InOiBmaWx0ZXJzXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgbmV3IEZpbHRlciByZXByZXNlbnRpbmcgdGhlIEFORCBvZiBhbGwgcHJvdmlkZWQgZmlsdGVyc1xuICAgKiBAcGFyYW0gIHsuLi5GaWx0ZXJ9IGZpbHRlcnMgVGhlIGZpbHRlcnMgdG8gQU5EIHRvZ2V0aGVyXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgYW5kICguLi5maWx0ZXJzKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgJyRhbmQnOiBmaWx0ZXJzXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT1IgZmlsdGVycyB3aXRoIHRoZSBzYW1lIGtleXMsIHRoZW4gQU5EIHRoZSByZXN1bHRpbmcgZ3JvdXBzXG4gICAqIEBwYXJhbSAgey4uLkZpbHRlcn0gZmlsdGVycyBUaGUgZmlsdGVycyB0byBncm91cFxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGdyb3VwICguLi5maWx0ZXJzKSB7XG4gICAgY29uc3QgZ3JvdXBzID0ge307XG4gICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgZmlsdGVycykge1xuICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMoZmlsdGVyKVswXTtcbiAgICAgIGlmICghZ3JvdXBzW2tleV0pIHtcbiAgICAgICAgZ3JvdXBzW2tleV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1trZXldLnB1c2goZmlsdGVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBncm91cEZpbHRlcnMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIE9iamVjdC5rZXlzKGdyb3VwcykpIHtcbiAgICAgIGdyb3VwRmlsdGVycy5wdXNoKGdyb3Vwc1tmaWVsZF0ubGVuZ3RoID4gMSA/IEZpbHRlci5vciguLi5ncm91cHNbZmllbGRdKSA6IGdyb3Vwc1tmaWVsZF1bMF0pO1xuICAgIH1cblxuICAgIHJldHVybiBncm91cEZpbHRlcnMubGVuZ3RoID4gMSA/IEZpbHRlci5hbmQoLi4uZ3JvdXBGaWx0ZXJzKSA6IGdyb3VwRmlsdGVyc1swXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJlcXVhbCB0b1wiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGVxdWFsIHRvXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZXF1YWwgKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGVxJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImxlc3MgdGhhblwiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGxlc3MgdGhhblxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGxlc3NUaGFuIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRsdCcsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJsZXNzIHRoYW4gb3IgZXF1YWwgdG9cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG9cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBsZXNzVGhhbkVxdWFsIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRsZScsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJncmVhdGVyIHRoYW5cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBncmVhdGVyIHRoYW5cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBncmVhdGVyVGhhbiAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckZ3QnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwiZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ3JlYXRlclRoYW5FcXVhbCAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckZ2UnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGluY2x1c2l2ZSByYW5nZSBmaWx0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSBtaW4gVGhlIG1pbmltdW0gdmFsdWVcbiAgICogQHBhcmFtIHsqfSBtYXggVGhlIG1heGltdW0gdmFsdWVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBpbmNsdXNpdmVSYW5nZSAoZmllbGQsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgW2ZpZWxkXToge1xuICAgICAgICAnJGdlJzogbWluLFxuICAgICAgICAnJGxlJzogbWF4XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGV4Y2x1c2l2ZSByYW5nZSBmaWx0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSBtaW4gVGhlIG1pbmltdW0gdmFsdWVcbiAgICogQHBhcmFtIHsqfSBtYXggVGhlIG1heGltdW0gdmFsdWVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBleGNsdXNpdmVSYW5nZSAoZmllbGQsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgW2ZpZWxkXToge1xuICAgICAgICAnJGd0JzogbWluLFxuICAgICAgICAnJGx0JzogbWF4XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IHBvc2l0aW9uIGZpbHRlclxuICAgKiBAcGFyYW0ge251bWJlcn0gbGF0IFRoZSBsYXRpdHVkZSBvZiB0aGUgcG9zaXRpb25cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxuZyBUaGUgbG9uZ2l0dWRlIG9mIHRoZSBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIFRoZSBzZWFyY2ggcmFkaXVzIChpbiBtZXRlcnMpXG4gICAqL1xuICBzdGF0aWMgcG9zaXRpb24gKGxhdCwgbG5nLCByYWRpdXMpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcignYnVpbHRpbi5sb2NhdGlvbicsICckbmVhcicsIHsgbGF0LCBsbmcsIHJhZGl1cyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgZmlsdGVyIHdpdGggdGhlIGdpdmVuIG1hdGNoZXJcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1hdGNoZXIgVGhlIG1hdGNoZXIgZm9yIHRoZSBmaWxlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBmb3IgdGhlIGZpbHRlclxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIF9mcm9tTWF0Y2hlciAoZmllbGQsIG1hdGNoZXIsIHZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgW2ZpZWxkXToge1xuICAgICAgICBbbWF0Y2hlcl06IHZhbHVlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaENvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uL2RvbS9zZWFyY2hwYXJhbXMnO1xuXG4vKipcbiAqIFNlYXJjaENvbXBvbmVudCBleHBvc2VzIGFuIGludGVyZmFjZSBpbiBvcmRlciB0byBjcmVhdGVcbiAqIGEgVUkgU2VhcmNoIGV4cGVyaWVuY2UgZm9yIHZlcnRpY2FsIGFuZCB1bml2ZXJzYWwgc2VhcmNoLlxuICpcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGlucHV0IGtleSBmb3IgdGhlIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCBhdXRvLWNvbXBsZXRlIGFuZCBzZWFyY2ggd2lsbCBiZSBiYXNlZCBvbiB1bml2ZXJzYWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2JhcktleSA9IGNvbmZpZy5iYXJLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCB2ZXJ0aWNhbCBrZXkgZm9yIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCBhdXRvLWNvbXBsZXRlIGFuZCBzZWFyY2ggd2lsbCBiZSBiYXNlZCBvbiB1bml2ZXJzYWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBRdWVyeSBzdWJtaXNzaW9uIGlzIGJhc2VkIG9uIGEgZm9ybSBhcyBjb250ZXh0LlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBuYXRpdmUgZm9ybSBub2RlIHdpdGhpbiBjb250YWluZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9mb3JtRWwgPSBjb25maWcuZm9ybVNlbGVjdG9yIHx8ICdmb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBlbGVtZW50IHVzZWQgZm9yIHNlYXJjaGluZyBhbmQgd2lyZXMgdXAgdGhlIGtleWJvYXJkIGludGVyYWN0aW9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gY29uZmlnLmlucHV0RWwgfHwgJy5qcy15ZXh0LXF1ZXJ5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB1c2VkLCBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgYXMgYSBkYXRhIHBvaW50XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudGl0bGUgPSBjb25maWcudGl0bGUgfHwgJ0Fuc3dlcnMgVW5pdmVyc2FsIFNlYXJjaCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdGV4dCBpcyB1c2VkIGZvciBsYWJlbGluZyB0aGUgaW5wdXQgYm94LCBhbHNvIHByb3ZpZGVkIHRvIHRlbXBsYXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWxUZXh0ID0gY29uZmlnLmxhYmVsVGV4dCB8fCAnV2hhdCBhcmUgeW91IGludGVyZXN0ZWQgaW4/JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdWJtaXQgdGV4dCBpcyB1c2VkIGZvciBsYWJlbGluZyB0aGUgc3VibWl0IGJ1dHRvbiwgYWxzbyBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnN1Ym1pdFRleHQgPSBjb25maWcuc3VibWl0VGV4dCB8fCAnU3VibWl0JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdWJtaXQgaWNvbiBpcyBhbiBpY29uIGZvciB0aGUgc3VibWl0IGJ1dHRvbiwgaWYgcHJvdmlkZWQgaXQgd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHRoZVxuICAgICAqIHN1Ym1pdCB0ZXh0IHdpbGwgYmUgdXNlZCBmb3Igc2NyZWVuIHJlYWRlcnMuXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMuc3VibWl0SWNvbiA9IGNvbmZpZy5zdWJtaXRJY29uIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgdGV4dCB0byBzaG93IGFzIHRoZSBmaXJzdCBpdGVtIGZvciBhdXRvIGNvbXBsZXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucHJvbXB0SGVhZGVyID0gY29uZmlnLnByb21wdEhlYWRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQXV0byBmb2N1c2VzIHRoZSBpbnB1dCBib3ggaWYgc2V0IHRvIHRydWUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvRm9jdXMgPSBjb25maWcuYXV0b0ZvY3VzID09PSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc2hvdyBhbiBcInhcIiB0aGF0IGFsbG93cyB0aGUgdXNlciB0byBjbGVhciB0aGUgY3VycmVudFxuICAgICAqIHF1ZXJ5XG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5jbGVhckJ1dHRvbiA9IGNvbmZpZy5jbGVhckJ1dHRvbiA9PT0gdW5kZWZpbmVkXG4gICAgICA/IHRydWVcbiAgICAgIDogY29uZmlnLmNsZWFyQnV0dG9uO1xuXG4gICAgLyoqXG4gICAgICogV2hlbiBhdXRvZm9jdXNpbmcgb24gbG9hZCwgb3B0aW9uYWxseSBvcGVuIHRoZSBhdXRvY29tcGxldGVcbiAgICAgKiAocHJlc2V0IHByb21wdHMpXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvY29tcGxldGVPbkxvYWQgPSBjb25maWcuYXV0b2NvbXBsZXRlT25Mb2FkIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogc3VibWl0VVJMIHdpbGwgZm9yY2UgdGhlIHNlYXJjaCBxdWVyeSBzdWJtaXNzaW9uIHRvIGdldFxuICAgICAqIHJlZGlyZWN0ZWQgdG8gdGhlIFVSTCBwcm92aWRlZC5cbiAgICAgKiBPcHRpb25hbCwgZGVmYXVsdHMgdG8gbnVsbC5cbiAgICAgKlxuICAgICAqIElmIG5vIHJlZGlyZWN0VXJsIHByb3ZpZGVkLCB3ZSBrZWVwIHRoZSBwYWdlIGFzIGEgc2luZ2xlIHBhZ2UgYXBwLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZWRpcmVjdFVybCA9IGNvbmZpZy5yZWRpcmVjdFVybCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHN0cmluZyB0byB1c2UgZm9yIHRoZSBpbnB1dCBib3gsIHByb3ZpZGVkIHRvIHRlbXBsYXRlIGZvciByZW5kZXJpbmcuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5xdWVyeSA9IGNvbmZpZy5xdWVyeSB8fCB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSkgfHwgJyc7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIFN0b3JhZ2VLZXlzLlFVRVJZLCBxID0+IHtcbiAgICAgIHRoaXMucXVlcnkgPSBxO1xuICAgICAgdGhpcy5zZXRTdGF0ZSgpO1xuICAgICAgdGhpcy5zZWFyY2gocSk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWluaW11bSB0aW1lIGFsbG93ZWQgaW4gbWlsbGlzZWNvbmRzIGJldHdlZW4gc2VhcmNoZXMgdG8gcHJldmVudFxuICAgICAqIG1hbnkgZHVwbGljYXRlIHNlYXJjaGVzIGJhY2stdG8tYmFja1xuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zZWFyY2hDb29sZG93biA9IGNvbmZpZy5zZWFyY2hDb29sZG93biB8fCAzMDA7XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUgYW5kIFwibmVhciBtZVwiIGludGVudCBpcyBleHByZXNzZWQsIHByb21wdCB0aGUgdXNlciBmb3IgdGhlaXIgZ2VvbG9jYXRpb25cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3Byb21wdEZvckxvY2F0aW9uID0gY29uZmlnLnByb21wdEZvckxvY2F0aW9uID09PSB1bmRlZmluZWRcbiAgICAgID8gdHJ1ZVxuICAgICAgOiBCb29sZWFuKGNvbmZpZy5wcm9tcHRGb3JMb2NhdGlvbik7XG5cbiAgICAvKipcbiAgICAgKiBDb250cm9scyBzaG93aW5nIGFuZCBoaWRpbmcgdGhlIHNlYXJjaCBjbGVhciBidXR0b25cbiAgICAgKi9cbiAgICB0aGlzLl9zaG93Q2xlYXJCdXR0b24gPSB0aGlzLmNsZWFyQnV0dG9uICYmIHRoaXMucXVlcnk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnU2VhcmNoQmFyJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKCkge1xuICAgIHJldHVybiAnc2VhcmNoL3NlYXJjaCc7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgaWYgKHRoaXMucXVlcnkgJiYgIXRoaXMucmVkaXJlY3RVcmwpIHtcbiAgICAgIHRoaXMuY29yZS5zZXRRdWVyeSh0aGlzLnF1ZXJ5KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Byb21wdEZvckxvY2F0aW9uKSB7XG4gICAgICB0aGlzLmluaXRMb2NhdGlvblByb21wdCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIGlmICh0aGlzLmF1dG9Gb2N1cyA9PT0gdHJ1ZSAmJiB0aGlzLnF1ZXJ5Lmxlbmd0aCA9PT0gMCAmJiAhdGhpcy5hdXRvY29tcGxldGVPbkxvYWQpIHtcbiAgICAgIERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2lucHV0RWwpLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLy8gV2lyZSB1cCBvdXIgc2VhcmNoIGhhbmRsaW5nIGFuZCBhdXRvIGNvbXBsZXRlXG4gICAgdGhpcy5pbml0U2VhcmNoKHRoaXMuX2Zvcm1FbCk7XG4gICAgdGhpcy5pbml0QXV0b0NvbXBsZXRlKHRoaXMuX2lucHV0RWwpO1xuXG4gICAgaWYgKHRoaXMuY2xlYXJCdXR0b24pIHtcbiAgICAgIHRoaXMuaW5pdENsZWFyQnV0dG9uKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzID09PSB0cnVlICYmIHRoaXMucXVlcnkubGVuZ3RoID09PSAwICYmIHRoaXMuYXV0b2NvbXBsZXRlT25Mb2FkKSB7XG4gICAgICBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGluaXRDbGVhckJ1dHRvbiAoKSB7XG4gICAgY29uc3QgYnV0dG9uID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgJy5qcy15eHQtU2VhcmNoQmFyLWNsZWFyJyk7XG4gICAgdGhpcy5fc2hvd0NsZWFyQnV0dG9uID0gdGhpcy5fc2hvd0NsZWFyQnV0dG9uIHx8IHRoaXMucXVlcnk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ3l4dC1TZWFyY2hCYXItLWhpZGRlbicsICF0aGlzLl9zaG93Q2xlYXJCdXR0b24pO1xuXG4gICAgRE9NLm9uKGJ1dHRvbiwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5xdWVyeSA9ICcnO1xuICAgICAgdGhpcy5fc2hvd0NsZWFyQnV0dG9uID0gZmFsc2U7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgneXh0LVNlYXJjaEJhci0taGlkZGVuJyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHt9KTtcbiAgICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFUlksIHRoaXMucXVlcnkpO1xuICAgICAgdGhpcy5jb3JlLnNldFF1ZXJ5KHRoaXMucXVlcnkpO1xuICAgIH0pO1xuXG4gICAgRE9NLm9uKHRoaXMuX2lucHV0RWwsICdpbnB1dCcsIGUgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGlmICghdGhpcy5fc2hvd0NsZWFyQnV0dG9uICYmIGlucHV0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5fc2hvd0NsZWFyQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3l4dC1TZWFyY2hCYXItLWhpZGRlbicpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9zaG93Q2xlYXJCdXR0b24gJiYgaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuX3Nob3dDbGVhckJ1dHRvbiA9IGZhbHNlO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgneXh0LVNlYXJjaEJhci0taGlkZGVuJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0TG9jYXRpb25Qcm9tcHQgKCkge1xuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBTdG9yYWdlS2V5cy5JTlRFTlRTLCBpbnRlbnQgPT4ge1xuICAgICAgaWYgKCFpbnRlbnQubmVhck1lIHx8IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLkdFT0xPQ0FUSU9OKSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ocG9zaXRpb24gPT4ge1xuICAgICAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuR0VPTE9DQVRJT04sIHtcbiAgICAgICAgICBsYXQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICBsbmc6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgICAgcmFkaXVzOiBwb3NpdGlvbi5jb29yZHMuYWNjdXJhY3lcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VhcmNoKHRoaXMucXVlcnkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHVzZSBmb3Igd2lyaW5nIHVwIHNlYXJjaGluZyBvbiBmb3JtIHN1Ym1pc3Npb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGZvcm1TZWxlY3RvciBDU1Mgc2VsZWN0b3IgdG8gYmluZCBvdXIgc3VibWl0IGhhbmRsaW5nIHRvXG4gICAqL1xuICBpbml0U2VhcmNoIChmb3JtU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9mb3JtRWwgPSBmb3JtU2VsZWN0b3I7XG5cbiAgICB0aGlzLl9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgneXh0LVNlYXJjaEJhci13cmFwcGVyJyk7XG5cbiAgICBsZXQgZm9ybSA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIGZvcm1TZWxlY3Rvcik7XG4gICAgaWYgKCFmb3JtKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBpbml0aWFsaXplIFNlYXJjaEJhcjsgQ2FuIG5vdCBmaW5kIHtIVE1MRWxlbWVudH0gYCcsIHRoaXMuX2Zvcm1FbCwgJ2AuJyk7XG4gICAgfVxuXG4gICAgRE9NLm9uKGZvcm0sICdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBsZXQgaW5wdXRFbCA9IGZvcm0ucXVlcnlTZWxlY3Rvcih0aGlzLl9pbnB1dEVsKTtcblxuICAgICAgbGV0IHF1ZXJ5ID0gaW5wdXRFbC52YWx1ZTtcbiAgICAgIGxldCBwYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICAgIHBhcmFtcy5zZXQoJ3F1ZXJ5JywgcXVlcnkpO1xuXG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgcmVkaXJlY3RVcmwsIHdlIHdhbnQgdGhlIGZvcm0gdG8gYmVcbiAgICAgIC8vIHNlcmlhbGl6ZWQgYW5kIHN1Ym1pdHRlZC5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5yZWRpcmVjdFVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLnJlZGlyZWN0VXJsICsgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaW5wdXRFbC5ibHVyKCk7XG5cbiAgICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFUlksIHF1ZXJ5KTtcbiAgICAgIHRoaXMuY29yZS5zZXRRdWVyeShxdWVyeSk7XG4gICAgICB0aGlzLnNlYXJjaChxdWVyeSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHdpcmUgdXAgb3VyIGF1dG8gY29tcGxldGUgb24gYW4gaW5wdXQgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIGF1dG8gY29tcGxldGUgY29tcG9uZW50IHRvXG4gICAqL1xuICBpbml0QXV0b0NvbXBsZXRlIChpbnB1dFNlbGVjdG9yKSB7XG4gICAgdGhpcy5faW5wdXRFbCA9IGlucHV0U2VsZWN0b3I7XG5cbiAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlKSB7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGUucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fYXV0b2NvbXBsZXRlID0gdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZSgnQXV0b0NvbXBsZXRlJywge1xuICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfS5hdXRvY29tcGxldGVgLFxuICAgICAgY29udGFpbmVyOiAnLnl4dC1TZWFyY2hCYXItYXV0b2NvbXBsZXRlJyxcbiAgICAgIGJhcktleTogdGhpcy5fYmFyS2V5LFxuICAgICAgYXV0b0ZvY3VzOiB0aGlzLmF1dG9Gb2N1cyAmJiAhdGhpcy5hdXRvY29tcGxldGVPbkxvYWQsXG4gICAgICB2ZXJ0aWNhbEtleTogdGhpcy5fdmVydGljYWxLZXksXG4gICAgICBwcm9tcHRIZWFkZXI6IHRoaXMucHJvbXB0SGVhZGVyLFxuICAgICAgb3JpZ2luYWxRdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgIGlucHV0RWw6IGlucHV0U2VsZWN0b3IsXG4gICAgICBvblN1Ym1pdDogKCkgPT4ge1xuICAgICAgICBET00udHJpZ2dlcih0aGlzLl9mb3JtRWwsICdzdWJtaXQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaCAocXVlcnkpIHtcbiAgICAvLyBEb24ndCBzZWFyY2ggaWYgd2UgcmVjZW50bHkgc2VhcmNoZWQsIG9yIGlmIHRoZXJlJ3Mgbm8gcXVlcnkgZm9yIHVuaXZlcnNhbCBzZWFyY2hcbiAgICBpZiAodGhpcy5fdGhyb3R0bGVkIHx8ICghcXVlcnkgJiYgIXRoaXMuX3ZlcnRpY2FsS2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3Rocm90dGxlZCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuX3Rocm90dGxlZCA9IGZhbHNlOyB9LCB0aGlzLl9zZWFyY2hDb29sZG93bik7XG5cbiAgICBpZiAodGhpcy5fdmVydGljYWxLZXkpIHtcbiAgICAgIGNvbnN0IGFsbEZpbHRlcnMgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICAgIGNvbnN0IHRvdGFsRmlsdGVyID0gYWxsRmlsdGVycy5sZW5ndGggPiAxXG4gICAgICAgID8gRmlsdGVyLmFuZCguLi5hbGxGaWx0ZXJzKVxuICAgICAgICA6IGFsbEZpbHRlcnNbMF07XG4gICAgICBjb25zdCBmYWNldEZpbHRlciA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GQUNFVF9GSUxURVIpWzBdO1xuICAgICAgcmV0dXJuIHRoaXMuY29yZS52ZXJ0aWNhbFNlYXJjaCh0aGlzLl92ZXJ0aWNhbEtleSwge1xuICAgICAgICBpbnB1dDogcXVlcnksXG4gICAgICAgIGZpbHRlcjogSlNPTi5zdHJpbmdpZnkodG90YWxGaWx0ZXIpLFxuICAgICAgICBmYWNldEZpbHRlcjogSlNPTi5zdHJpbmdpZnkoZmFjZXRGaWx0ZXIpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTk9URShiaWxseSkgVGVtcG9yYXJ5IGhhY2sgZm9yIERFTU9cbiAgICAgIC8vIFJlbW92ZSBtZSBhZnRlciB0aGUgZGVtb1xuICAgICAgbGV0IG5hdiA9IHRoaXMuY29tcG9uZW50TWFuYWdlclxuICAgICAgICAuZ2V0QWN0aXZlQ29tcG9uZW50KCdOYXZpZ2F0aW9uJyk7XG5cbiAgICAgIGlmIChuYXYpIHtcbiAgICAgICAgbGV0IHRhYnMgPSBuYXYuZ2V0U3RhdGUoJ3RhYnMnKTtcbiAgICAgICAgbGV0IHVybHMgPSB7fTtcblxuICAgICAgICBpZiAodGFicyAmJiBBcnJheS5pc0FycmF5KHRhYnMpKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcGFyYW1zID0gbmV3IFNlYXJjaFBhcmFtcyh0YWJzW2ldLnVybC5zcGxpdCgnPycpWzFdKTtcbiAgICAgICAgICAgIHBhcmFtcy5zZXQoJ3F1ZXJ5JywgcXVlcnkpO1xuXG4gICAgICAgICAgICBsZXQgdXJsID0gdGFic1tpXS5iYXNlVXJsO1xuICAgICAgICAgICAgaWYgKHBhcmFtcy50b1N0cmluZygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgdXJsICs9ICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXJsc1t0YWJzW2ldLmNvbmZpZ0lkXSA9IHVybDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29yZS5zZWFyY2gocXVlcnksIHVybHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb3JlLnNlYXJjaChxdWVyeSk7XG4gICAgfVxuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIGxhYmVsVGV4dDogdGhpcy5sYWJlbFRleHQsXG4gICAgICBzdWJtaXRJY29uOiB0aGlzLnN1Ym1pdEljb24sXG4gICAgICBzdWJtaXRUZXh0OiB0aGlzLnN1Ym1pdFRleHQsXG4gICAgICBzaG93Q2xlYXJCdXR0b246IHRoaXMuX3Nob3dDbGVhckJ1dHRvbixcbiAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5XG4gICAgfSwgZGF0YSkpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXJTZWFyY2hDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi9kb20vc2VhcmNocGFyYW1zJztcblxuLyoqXG4gKiBGaWx0ZXJTZWFyY2hDb21wb25lbnQgaXMgdXNlZCBmb3IgYXV0b2NvbXBsZXRlIHVzaW5nIHRoZSBGaWx0ZXJTZWFyY2ggYmFja2VuZC5cbiAqIEl0J2xsIGFsbG93IHlvdSB0byBwaWNrIHByZS1zZXQgZmlsdGVycyB0aGF0IGFyZSBzZXR1cCBvbiB0aGUgYmFja2VuZCB3aXRoaW5cbiAqIGEgdmVydGljYWwgc2VhcmNoIGNvbnRleHQuXG4gKlxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlclNlYXJjaENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5wdXQga2V5IGZvciB0aGUgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2JhcktleSA9IGNvbmZpZy5iYXJLZXkgfHwgY29uZmlnLmlucHV0S2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVydGljYWwga2V5IGZvciB2ZXJ0aWNhbCBzZWFyY2ggY29uZmlndXJhdGlvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHN0b3JlIHRoZSBmaWx0ZXIgdmFsdWUgYnV0IGRvIG5vdCBzZWFyY2ggb24gY2hhbmdlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdG9yZU9uQ2hhbmdlID0gY29uZmlnLnN0b3JlT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBRdWVyeSBzdWJtaXNzaW9uIGlzIGJhc2VkIG9uIGEgZm9ybSBhcyBjb250ZXh0LlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBuYXRpdmUgZm9ybSBub2RlIHdpdGhpbiBjb250YWluZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9mb3JtRWwgPSBjb25maWcuZm9ybVNlbGVjdG9yIHx8ICdmb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBlbGVtZW50IHVzZWQgZm9yIHNlYXJjaGluZyBhbmQgd2lyZXMgdXAgdGhlIGtleWJvYXJkIGludGVyYWN0aW9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gY29uZmlnLmlucHV0RWwgfHwgJy5qcy15ZXh0LXF1ZXJ5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB1c2VkLCBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgYXMgYSBkYXRhIHBvaW50XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudGl0bGUgPSBjb25maWcudGl0bGU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VhcmNoIHRleHQgdXNlZCBmb3IgbGFiZWxpbmcgdGhlIGlucHV0IGJveCwgYWxzbyBwcm92aWRlZCB0byB0ZW1wbGF0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnNlYXJjaFRleHQgPSBjb25maWcuc2VhcmNoVGV4dCB8fCAnV2hhdCBhcmUgeW91IGludGVyZXN0ZWQgaW4/JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSB0ZXh0IHRvIHNob3cgYXMgdGhlIGZpcnN0IGl0ZW0gZm9yIGF1dG8gY29tcGxldGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5wcm9tcHRIZWFkZXIgPSBjb25maWcucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBdXRvIGZvY3VzZXMgdGhlIGlucHV0IGJveCBpZiBzZXQgdG8gdHJ1ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBkZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9Gb2N1cyA9IGNvbmZpZy5hdXRvRm9jdXMgPT09IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBzdWJtaXRVUkwgd2lsbCBmb3JjZSB0aGUgc2VhcmNoIHF1ZXJ5IHN1Ym1pc3Npb24gdG8gZ2V0XG4gICAgICogcmVkaXJlY3RlZCB0byB0aGUgVVJMIHByb3ZpZGVkLlxuICAgICAqIE9wdGlvbmFsLCBkZWZhdWx0cyB0byBudWxsLlxuICAgICAqXG4gICAgICogSWYgbm8gcmVkaXJlY3RVcmwgcHJvdmlkZWQsIHdlIGtlZXAgdGhlIHBhZ2UgYXMgYSBzaW5nbGUgcGFnZSBhcHAuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnJlZGlyZWN0VXJsID0gY29uZmlnLnJlZGlyZWN0VXJsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgc3RyaW5nIHRvIHVzZSBmb3IgdGhlIGlucHV0IGJveCwgcHJvdmlkZWQgdG8gdGVtcGxhdGUgZm9yIHJlbmRlcmluZy5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXJ5ID0gY29uZmlnLnF1ZXJ5IHx8IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gKSB8fCAnJztcbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5vbigndXBkYXRlJywgYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWAsIHEgPT4ge1xuICAgICAgdGhpcy5xdWVyeSA9IHE7XG4gICAgICB0aGlzLnNlYXJjaCgpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpbHRlciBzdHJpbmcgdG8gdXNlIGZvciB0aGUgcHJvdmlkZWQgcXVlcnlcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmZpbHRlciA9IGNvbmZpZy5maWx0ZXIgfHwgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke3RoaXMubmFtZX1gKSB8fCAnJztcbiAgICBpZiAodHlwZW9mIHRoaXMuZmlsdGVyID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBKU09OLnBhcnNlKHRoaXMuZmlsdGVyKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuXG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCwgZiA9PiB7IHRoaXMuZmlsdGVyID0gZjsgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRmlsdGVyU2VhcmNoJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKCkge1xuICAgIHJldHVybiAnc2VhcmNoL2ZpbHRlcnNlYXJjaCc7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgaWYgKHRoaXMucXVlcnkgJiYgdGhpcy5maWx0ZXIpIHtcbiAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgLy8gV2lyZSB1cCBvdXIgc2VhcmNoIGhhbmRsaW5nIGFuZCBhdXRvIGNvbXBsZXRlXG4gICAgdGhpcy5pbml0QXV0b0NvbXBsZXRlKHRoaXMuX2lucHV0RWwpO1xuXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzID09PSB0cnVlICYmIHRoaXMucXVlcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gd2lyZSB1cCBvdXIgYXV0byBjb21wbGV0ZSBvbiBhbiBpbnB1dCBzZWxlY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRTZWxlY3RvciBDU1Mgc2VsZWN0b3IgdG8gYmluZCBvdXIgYXV0byBjb21wbGV0ZSBjb21wb25lbnQgdG9cbiAgICovXG4gIGluaXRBdXRvQ29tcGxldGUgKGlucHV0U2VsZWN0b3IpIHtcbiAgICB0aGlzLl9pbnB1dEVsID0gaW5wdXRTZWxlY3RvcjtcblxuICAgIHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoJ0F1dG9Db21wbGV0ZScsIHtcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0uYXV0b2NvbXBsZXRlYCxcbiAgICAgIGlzRmlsdGVyU2VhcmNoOiB0cnVlLFxuICAgICAgY29udGFpbmVyOiAnLnl4dC1TZWFyY2hCYXItYXV0b2NvbXBsZXRlJyxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5wcm9tcHRIZWFkZXIsXG4gICAgICBvcmlnaW5hbFF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgb3JpZ2luYWxGaWx0ZXI6IHRoaXMuZmlsdGVyLFxuICAgICAgaW5wdXRFbDogaW5wdXRTZWxlY3RvcixcbiAgICAgIHZlcnRpY2FsS2V5OiB0aGlzLl92ZXJ0aWNhbEtleSxcbiAgICAgIGJhcktleTogdGhpcy5fYmFyS2V5LFxuICAgICAgb25TdWJtaXQ6IChxdWVyeSwgZmlsdGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuICAgICAgICBwYXJhbXMuc2V0KGAke3RoaXMubmFtZX0ucXVlcnlgLCBxdWVyeSk7XG4gICAgICAgIHBhcmFtcy5zZXQoYCR7dGhpcy5uYW1lfS5maWx0ZXJgLCBmaWx0ZXIpO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSByZWRpcmVjdFVybCwgd2Ugd2FudCB0aGUgcGFyYW1zIHRvIGJlXG4gICAgICAgIC8vIHNlcmlhbGl6ZWQgYW5kIHN1Ym1pdHRlZC5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlZGlyZWN0VXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5yZWRpcmVjdFVybCArICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNhdmUgdGhlIGZpbHRlciB0byBzdG9yYWdlIGZvciB0aGUgbmV4dCBzZWFyY2hcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmZpbHRlciA9IEZpbHRlci5mcm9tUmVzcG9uc2UoZmlsdGVyKTtcbiAgICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCwgdGhpcy5xdWVyeSk7XG4gICAgICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke3RoaXMubmFtZX1gLCB0aGlzLmZpbHRlcik7XG4gICAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCB0aGlzLmZpbHRlcik7XG4gICAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybSB0aGUgdmVydGljYWwgc2VhcmNoIHdpdGggYWxsIHNhdmVkIGZpbHRlcnMgYW5kIHF1ZXJ5LFxuICAgKiBvcHRpb25hbGx5IHJlZGlyZWN0aW5nIGJhc2VkIG9uIGNvbmZpZ1xuICAgKi9cbiAgc2VhcmNoICgpIHtcbiAgICBpZiAodGhpcy5fc3RvcmVPbkNoYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICBsZXQgdG90YWxGaWx0ZXIgPSBmaWx0ZXJzWzBdO1xuICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRvdGFsRmlsdGVyID0gRmlsdGVyLmFuZCguLi5maWx0ZXJzKTtcbiAgICB9XG4gICAgY29uc3Qgc2VhcmNoUXVlcnkgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSkgfHwgJyc7XG4gICAgY29uc3QgZmFjZXRGaWx0ZXIgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRkFDRVRfRklMVEVSKVswXTtcblxuICAgIHRoaXMuY29yZS52ZXJ0aWNhbFNlYXJjaCh0aGlzLl92ZXJ0aWNhbEtleSwge1xuICAgICAgaW5wdXQ6IHNlYXJjaFF1ZXJ5LFxuICAgICAgZmlsdGVyOiBKU09OLnN0cmluZ2lmeSh0b3RhbEZpbHRlciksXG4gICAgICBmYWNldEZpbHRlcjogSlNPTi5zdHJpbmdpZnkoZmFjZXRGaWx0ZXIpXG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgc2VhcmNoVGV4dDogdGhpcy5zZWFyY2hUZXh0LFxuICAgICAgcXVlcnk6IHRoaXMucXVlcnksXG4gICAgICBmaWx0ZXI6IHRoaXMuZmlsdGVyXG4gICAgfSwgZGF0YSkpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG5jb25zdCBLZXlzID0ge1xuICBCQUNLU1BBQ0U6IDgsXG4gIFRBQjogOSxcbiAgRU5URVI6IDEzLFxuICBTSElGVDogMTYsXG4gIENUUkw6IDE3LFxuICBBTFQ6IDE4LFxuICBFU0NBUEU6IDI3LFxuXG4gIExFRlQ6IDM3LFxuICBSSUdIVDogMzksXG4gIFVQOiAzOCxcblxuICBERUxFVEU6IDQ2LFxuICBET1dOOiA0MCxcbiAgTEVGVF9PU19LRVk6IDkxLFxuICBSSUdIVF9PU19LRVk6IDkyLFxuICBTRUxFQ1RfS0VZOiA5M1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBhdXRvY29tcGxldGUgaXMgc2ltcGxlIG9yIGZpbHRlclxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNGaWx0ZXJTZWFyY2ggPSBvcHRzLmlzRmlsdGVyU2VhcmNoIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGBiYXJLZXlgIGluIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggdG8gdXNlIGZvciBhdXRvLWNvbXBsZXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9iYXJLZXkgPSBvcHRzLmJhcktleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGB2ZXJ0aWNhbEtleWAgb2YgdGhlIHZlcnRpY2FsIHNlYXJjaCB0byB1c2UgZm9yIGF1dG8tY29tcGxldGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gb3B0cy52ZXJ0aWNhbEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGlucHV0IGVsIHNlbGVjdG9yIGZvciBhdXRvIGNvbXBsZXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gb3B0cy5pbnB1dEVsIHx8ICcuanMteWV4dC1xdWVyeSc7XG5cbiAgICAvKipcbiAgICAgKiBBIHNlbGVjdG9yIGZvciB0aGUgYXV0b2NvbXBsZXRlIGVsZW1lbnRlc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYXV0b2NvbXBsZXRlRWxzID0gb3B0cy5hdXRvQ29tcGxldGVFbHMgfHwgJy5qcy15ZXh0LWF1dG9jb21sZXRlLW9wdGlvbic7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgZm9yIHRoZSBkYXRhLXN0b3JhZ2UgdG8gbGlzdGVuIGZvciB1cGRhdGVzIGZyb20gdGhlIHNlcnZlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IGAke1N0b3JhZ2VLZXlzLkFVVE9DT01QTEVURX0uJHt0aGlzLm5hbWV9YDtcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgaW5wdXQgdmFsdWUgd2hlbiB0eXBpbmcuXG4gICAgICogV2UgdXNlIHRoaXMgZm9yIHJlc2V0dGluZyB0aGUgc3RhdGUgb2YgdGhlIGlucHV0IHZhbHVlIHdoZW4gb3RoZXIgaW50ZXJhY3Rpb25zIChlLmcuIHJlc3VsdCBuYXZpZ2F0aW9uKVxuICAgICAqIGNoYW5nZSBiYXNlZCBvbiBpbnRlcmFjdGlvbnMuIEZvciBpbnN0YW5jZSwgaGl0dGluZyBlc2NhcGUgc2hvdWxkIHJlc2V0IHRoZSB2YWx1ZSB0byB0aGUgb3JpZ2luYWwgdHlwZWQgcXVlcnkuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gb3B0cy5vcmlnaW5hbFF1ZXJ5IHx8ICcnO1xuXG4gICAgLyoqXG4gICAgICogVXNlZCBmb3Iga2V5Ym9hcmQgbmF2aWdhdGlvbiB0aHJvdWdoIHJlc3VsdHMuXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IHNlY3Rpb24gd2UncmUgbmF2aWdhdGluZyBpbi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3NlY3Rpb25JbmRleCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uIHRocm91Z2ggcmVzdWx0cy5cbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgcmVzdWx0IGluZGV4IHdlJ3JlIG5hdmlnYXRpbmcgb24uXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZXN1bHRJbmRleCA9IC0xO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHRleHQgdG8gc2hvdyBhcyB0aGUgZmlyc3QgaXRlbSBmb3IgYXV0byBjb21wbGV0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnByb21wdEhlYWRlciA9IG9wdHMucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBpbnB1dCBpcyBhdXRvY29tYXRpY2FsbHkgZm9jdXNlZCBvciBub3RcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9hdXRvRm9jdXMgPSBvcHRzLmF1dG9Gb2N1cyB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGludm9rZWQgd2hlbiB0aGUgYEVudGVyYCBrZXkgaXMgcHJlc3NlZCBvbiBhdXRvIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIHRoaXMuX29uU3VibWl0ID0gb3B0cy5vblN1Ym1pdCB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYWxpYXNlZCB1c2VkIGJ5IHRoZSBjb21wb25lbnQgbWFuYWdlciBmb3IgY3JlYXRpb24uXG4gICAqL1xuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnQXV0b0NvbXBsZXRlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAnc2VhcmNoL2F1dG9jb21wbGV0ZSc7XG4gIH1cblxuICAvKipcbiAgICogc2V0U3RhdGUgaXMgb3ZlcnJpZGRlbiBzbyB0aGF0IHdlIGNhbiBwcm92aWRlIGFkZGl0aW9uYWwgbWV0YSBkYXRhXG4gICAqIHRvIHRoZSB0ZW1wbGF0ZSAoZS5nLiB0aGUgc2VjdGlvbkluZGV4IGFuZCByZXN1bHRJbmRleCksIHNpbmNlXG4gICAqIHRob3NlIGFyZSBjbGllbnQtaW50ZXJhY3Rpb24gc3BlY2lmaWMgdmFsdWVzIGFuZCBhcmVuJ3QgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyLlxuICAgKi9cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBoYXNSZXN1bHRzOiB0aGlzLmhhc1Jlc3VsdHMoZGF0YSksXG4gICAgICBzZWN0aW9uSW5kZXg6IHRoaXMuX3NlY3Rpb25JbmRleCxcbiAgICAgIHJlc3VsdEluZGV4OiB0aGlzLl9yZXN1bHRJbmRleCxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5fb3JpZ2luYWxRdWVyeS5sZW5ndGggPT09IDAgPyB0aGlzLnByb21wdEhlYWRlciA6IG51bGxcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogdXBkYXRlU3RhdGUgaXMgYSBoZWxwZXIgdG8gYXBwbHkgdGhlIGN1cnJlbnQgc3RhdGUgd2l0aCBuZXcgY2xpZW50LXN0YXRlLlxuICAgKi9cbiAgdXBkYXRlU3RhdGUgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fc3RhdGUuZ2V0KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uQ3JlYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgY29uc3RydWN0ZWQgZnJvbSB0aGUgZnJhbWV3b3JrLlxuICAgKiBPbmNlIHdlJ3JlIGluaXRhbGl6ZWQsIHdlIHdpcmUgdXAgYWxsIG9mIG91ciB1c2VyIGludGVyYWN0aW9uc1xuICAgKi9cbiAgb25DcmVhdGUgKCkge1xuICAgIC8vIFVzZSB0aGUgY29udGV4dCBvZiB0aGUgcGFyZW50IGNvbXBvbmVudCB0byBmaW5kIHRoZSBpbnB1dCBub2RlLlxuICAgIGxldCBxdWVyeUlucHV0ID0gRE9NLnF1ZXJ5KHRoaXMuX3BhcmVudC5fY29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKTtcbiAgICBpZiAoIXF1ZXJ5SW5wdXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGluaXRpYWxpemUgQXV0b0NvbXBsZXRlLiBDYW4gbm90IGZpbmQge0hUTUxFbGVtZW50fSBgJywgdGhpcy5faW5wdXRFbCwgJ2AuJyk7XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSB0aGUgbmF0aXZlIGF1dG9jb21wbGV0ZSwgYXV0b2NvcnJlY3QgJiBzcGVsbGNoZWNrXG4gICAgRE9NLmF0dHJpYnV0ZXMocXVlcnlJbnB1dCwge1xuICAgICAgYXV0b2NvbXBsZXRlOiAnb2ZmJyxcbiAgICAgIGF1dG9jb3JyZWN0OiAnb2ZmJyxcbiAgICAgIHNwZWxsY2hlY2s6ICdmYWxzZSdcbiAgICB9KTtcblxuICAgIC8vIFRoZSB1c2VyIGV4aXRzIHRoZSBpbnB1dCwgc28gd2Ugd2FudCB0byByZXNldCB0aGUgc3RhdGUgYW5kIGNsb3NlXG4gICAgLy8gdGhlIGF1dG8gY29tcGxldGVcbiAgICAvLyBUT0RPKGpkZWxlcm1lKTogQ2xvc2UgbG9naWMgdG8gYmUgbW92ZWQgdG8gcGFyZW50XG4gICAgRE9NLm9uKGRvY3VtZW50LCAnY2xpY2snLCBlID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuanMteXh0LUF1dG9Db21wbGV0ZS13cmFwcGVyIConKSB8fCBlLnRhcmdldC5tYXRjaGVzKHRoaXMuX2lucHV0RWwpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIC8vIFdoZW4gYSB1c2VyIGZvY3VzZXMgdGhlIGlucHV0LCB3ZSBzaG91bGQgcG9wdWxhdGUgdGhlIGF1dG9jb21wbGV0ZSBiYXNlZFxuICAgIC8vIG9uIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdmb2N1cycsICgpID0+IHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuYXV0b0NvbXBsZXRlKHF1ZXJ5SW5wdXQudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gbmF2aWdhdGUgYmV0d2VlbiB0aGUgcmVzdWx0cyB1c2luZyB0aGUga2V5Ym9hcmRcbiAgICBET00ub24ocXVlcnlJbnB1dCwgJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVOYXZpZ2F0ZVJlc3VsdHMoZS5rZXlDb2RlLCBlKTtcbiAgICAgIHRoaXMuaGFuZGxlU3VibWl0UmVzdWx0KGUua2V5Q29kZSwgcXVlcnlJbnB1dC52YWx1ZSwgZSk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5fYXV0b0ZvY3VzKSB7XG4gICAgICBET00ub25jZShxdWVyeUlucHV0LCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuYXV0b0NvbXBsZXRlKHF1ZXJ5SW5wdXQudmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gc2VsZWN0IGEgcmVzdWx0IHdpdGggdGhlIG1vdXNlXG4gICAgRE9NLmRlbGVnYXRlKHRoaXMuX2NvbnRhaW5lciwgJy5qcy15ZXh0LWF1dG9jb21wbGV0ZS1vcHRpb24nLCAnY2xpY2snLCAoZXZ0LCB0YXJnZXQpID0+IHtcbiAgICAgIGxldCBkYXRhID0gdGFyZ2V0LmRhdGFzZXQ7XG4gICAgICBsZXQgdmFsID0gZGF0YS5zaG9ydDtcblxuICAgICAgdGhpcy51cGRhdGVRdWVyeSh2YWwpO1xuICAgICAgdGhpcy5fb25TdWJtaXQodmFsLCBkYXRhLmZpbHRlcik7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIHRoZSB1c2VyIGlzIHR5cGluZyBpbiB0aGUgaW5wdXQsIHByb2Nlc3MgdGhlIGF1dG8gY29tcGxldGUuXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdrZXl1cCcsIChlKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZVR5cGluZyhlLmtleUNvZGUsIHF1ZXJ5SW5wdXQudmFsdWUsIGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGNsb3NlIHdpbGwgaGlkZSB0aGUgYXV0byBjb21wbGV0ZSByZXN1bHRzIGFuZCByZXNldCB0aGUgc3RhdGUuXG4gICAqL1xuICBjbG9zZSAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7fSk7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlc2V0cyB0aGUgY2xpZW50IHN0YXRlIHRvIHRoZWlyIG9yaWdpbmFsIHZhbHVlcyBhbmQgdHJpZ2dlcnNcbiAgICogYSB0ZW1wbGF0ZS1yZXJlbmRlciB2aWEgdXBkYXRlU3RhdGVcbiAgICovXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLl9zZWN0aW9uSW5kZXggPSAwO1xuICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gLTE7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gdXBkYXRlIHRoZSBpbnB1dCB0ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRWYWx1ZSBPcHRpb24gdmFsdWUgcHJvdmlkZWQuXG4gICAqIElmIG5vIHZhbHVlIHByb3ZpZGVkLCB3ZSdsbCB0cnkgdG8gZmluZCBpdCBiYXNlZCBvbiB0aGUgc2VsZWN0aW9uIGluZGV4ZXMuXG4gICAqL1xuICB1cGRhdGVRdWVyeSAob3B0VmFsdWUpIHtcbiAgICAvLyBPbmx5IHdhbnQgdG8gdXBkYXRlIHRoZSBxdWVyeSBzdHJpbmcgaWYgdGhlcmVzIGEgdmFsdWUuXG4gICAgLy8gSWYgb25lIGlzIHByb3ZpZGVkLCBncmVhdC5cbiAgICAvLyBPdGhlcndpc2UsIGxldHMgdHJ5IHRvIGZpbmQgaXQgZnJvbSB0aGUgY3VycmVudCBzZWxlY3Rpb24gaW4gdGhlIHJlc3VsdHMuXG4gICAgaWYgKG9wdFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCBzZWN0aW9ucyA9IHRoaXMuX3N0YXRlLmdldCgnc2VjdGlvbnMnKTtcblxuICAgICAgbGV0IHJlc3VsdHMgPSBzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHM7XG4gICAgICBvcHRWYWx1ZSA9IHJlc3VsdHNbdGhpcy5fcmVzdWx0SW5kZXhdLnNob3J0VmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IHF1ZXJ5RWwgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Ll9jb250YWluZXIsIHRoaXMuX2lucHV0RWwpO1xuICAgIHF1ZXJ5RWwudmFsdWUgPSBvcHRWYWx1ZTtcbiAgfVxuXG4gIGhhbmRsZVR5cGluZyAoa2V5LCB2YWx1ZSwgZSkge1xuICAgIGxldCBpZ25vcmVkS2V5cyA9IFtcbiAgICAgIEtleXMuRE9XTixcbiAgICAgIEtleXMuVVAsXG4gICAgICBLZXlzLkNUUkwsXG4gICAgICBLZXlzLkFMVCxcbiAgICAgIEtleXMuU0hJRlQsXG4gICAgICBLZXlzLkxFRlQsXG4gICAgICBLZXlzLlJJR0hULFxuICAgICAgS2V5cy5MRUZUX09TX0tFWSxcbiAgICAgIEtleXMuUklHSFRfT1NfS0VZLFxuICAgICAgS2V5cy5FTlRFUixcbiAgICAgIEtleXMuVEFCLFxuICAgICAgS2V5cy5TRUxFQ1RfS0VZXG4gICAgXTtcblxuICAgIGlmIChpZ25vcmVkS2V5cy5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFVzZXIgZXNjYXBlcyBvdXQgb2YgYXV0byBjb21wbGV0ZSwgc28gd2UgcmVzZXQgaXQgdG8gdGhlIG9yaWdpbmFsIGlucHV0XG4gICAgaWYgKGtleSA9PT0gS2V5cy5FU0NBUEUpIHtcbiAgICAgIHRoaXMudXBkYXRlUXVlcnkodGhpcy5fb3JpZ2luYWxRdWVyeSk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHRoZSBvcmlnaW5hbCB2YWx1ZSBiYXNlZCBvbiB0aGUgdXNlciBpbnB1dFxuICAgIHRoaXMuX29yaWdpbmFsUXVlcnkgPSB2YWx1ZTtcblxuICAgIHRoaXMucmVzZXQoKTtcbiAgICB0aGlzLmF1dG9Db21wbGV0ZSh2YWx1ZSk7XG4gIH1cblxuICBhdXRvQ29tcGxldGUgKGlucHV0KSB7XG4gICAgaWYgKHRoaXMuaXNGaWx0ZXJTZWFyY2gpIHtcbiAgICAgIHRoaXMuY29yZS5hdXRvQ29tcGxldGVGaWx0ZXIoaW5wdXQsIHRoaXMubmFtZSwgdGhpcy5fdmVydGljYWxLZXksIHRoaXMuX2JhcktleSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl92ZXJ0aWNhbEtleSB8fCB0aGlzLl9iYXJLZXkpIHtcbiAgICAgIHRoaXMuY29yZS5hdXRvQ29tcGxldGVWZXJ0aWNhbChpbnB1dCwgdGhpcy5uYW1lLCB0aGlzLl92ZXJ0aWNhbEtleSwgdGhpcy5fYmFyS2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb3JlLmF1dG9Db21wbGV0ZVVuaXZlcnNhbChpbnB1dCwgdGhpcy5uYW1lKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0cnVlIGlmIHdlIGhhdmUgcmVzdWx0cyBpbiBhbnkgc2VjdGlvblxuICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAqL1xuICBoYXNSZXN1bHRzIChkYXRhKSB7XG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBzZWN0aW9ucyA9IGRhdGFbJ3NlY3Rpb25zJ107XG4gICAgaWYgKCFzZWN0aW9ucykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBzZWN0aW9uc1tpXTtcbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBkYXRhLnJlc3VsdHM7XG4gICAgICBpZiAoIXJlc3VsdHMpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaGFuZGxlTmF2aWdhdGVSZXN1bHRzIChrZXksIGUpIHtcbiAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG4gICAgaWYgKHNlY3Rpb25zID09PSB1bmRlZmluZWQgfHwgc2VjdGlvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUYWJiaW5nIG91dCBvciBlbnRlciBzaG91bGQgY2xvc2UgdGhlIGF1dG8gY29tcGxldGUuXG4gICAgaWYgKGtleSA9PT0gS2V5cy5UQUIpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0cyA9IHNlY3Rpb25zW3RoaXMuX3NlY3Rpb25JbmRleF0ucmVzdWx0cztcbiAgICBpZiAoa2V5ID09PSBLZXlzLlVQKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5fcmVzdWx0SW5kZXggPD0gMCkge1xuICAgICAgICBpZiAodGhpcy5fc2VjdGlvbkluZGV4ID4gMCkge1xuICAgICAgICAgIHRoaXMuX3NlY3Rpb25JbmRleC0tO1xuICAgICAgICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzLmxlbmd0aCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVRdWVyeSh0aGlzLl9vcmlnaW5hbFF1ZXJ5KTtcbiAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3Jlc3VsdEluZGV4LS07XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gS2V5cy5ET1dOKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5fcmVzdWx0SW5kZXggPj0gcmVzdWx0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPCBzZWN0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgdGhpcy5fc2VjdGlvbkluZGV4Kys7XG4gICAgICAgICAgdGhpcy5fcmVzdWx0SW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3Jlc3VsdEluZGV4Kys7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU3VibWl0UmVzdWx0IChrZXksIHZhbHVlLCBlKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gdGhpcy5fc3RhdGUuZ2V0KCdzZWN0aW9ucycpO1xuICAgIGlmIChzZWN0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IHNlY3Rpb25zLmxlbmd0aCA8PSAwKSB7XG4gICAgICBpZiAodGhpcy5pc0ZpbHRlclNlYXJjaCkge1xuICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gc3VibWl0IHRoZSBzZWFyY2ggb24gZW50ZXJcbiAgICBpZiAoa2V5ID09PSBLZXlzLkVOVEVSKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICh0aGlzLmlzRmlsdGVyU2VhcmNoICYmIHRoaXMuX3Jlc3VsdEluZGV4ID09PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBmaWx0ZXIgPSAnJztcbiAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPj0gMCAmJiB0aGlzLl9yZXN1bHRJbmRleCA+PSAwKSB7XG4gICAgICAgIGZpbHRlciA9IEpTT04uc3RyaW5naWZ5KHNlY3Rpb25zW3RoaXMuX3NlY3Rpb25JbmRleF0ucmVzdWx0c1t0aGlzLl9yZXN1bHRJbmRleF0uZmlsdGVyKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGVRdWVyeSh2YWx1ZSk7XG4gICAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gdmFsdWU7XG4gICAgICB0aGlzLl9vblN1Ym1pdCh2YWx1ZSwgZmlsdGVyKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZhY2V0ICovXG5cbi8qKlxuICogTW9kZWwgcmVwcmVzZW50aW5nIGEgZmFjZXQgZmlsdGVyIHdpdGggdGhlIGZvcm1hdCBvZlxuICoge1xuICogICBcImZpZWxkX25hbWVcIjogWyBGaWx0ZXJzLi4uIF0sXG4gKiAgIC4uLlxuICogfVxuICpcbiAqIEBzZWUge0BsaW5rIEZpbHRlcn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZXQge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGZhY2V0IGZpbHRlciBmcm9tIGEgbGlzdCBvZiBGaWx0ZXJzXG4gICAqIEBwYXJhbSAgey4uLkZpbHRlcn0gZmlsdGVycyBUaGUgZmlsdGVycyB0byB1c2UgaW4gdGhpcyBmYWNldFxuICAgKiBAcmV0dXJucyB7RmFjZXR9XG4gICAqL1xuICBzdGF0aWMgZnJvbUZpbHRlcnMgKC4uLmZpbHRlcnMpIHtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBjb25zdCBmbGF0RmlsdGVycyA9IGZpbHRlcnMuZmxhdE1hcChmID0+IGYuJG9yIHx8IGYpO1xuICAgIGZsYXRGaWx0ZXJzLmZvckVhY2goZiA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhmKVswXTtcbiAgICAgIGlmICghZ3JvdXBzW2tleV0pIHtcbiAgICAgICAgZ3JvdXBzW2tleV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1trZXldLnB1c2goZik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IEZhY2V0KGdyb3Vwcyk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZpbHRlckJveENvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IEZhY2V0IGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZhY2V0JztcblxuLyoqXG4gKiBSZW5kZXJzIGEgc2V0IG9mIGZpbHRlcnMsIGFuZCBzZWFyY2hlcyB3aXRoIHRoZW0gd2hlbiBhcHBsaWVkLlxuICogTXVsdGlwbGUgRmlsdGVyQm94IGNvbXBvbmVudHMgd2lsbCBBTkQgdG9nZXRoZXIgYnV0IHdpbGwgbm90IHNoYXJlIHN0YXRlLlxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlckJveENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICBpZiAoIWNvbmZpZy5maWx0ZXJzIHx8ICEoY29uZmlnLmZpbHRlcnMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICdGaWx0ZXJCb3ggcmVxdWlyZXMgZmlsdGVycyB0byBiZSBwcm92aWRlZCBhcyBhbiBhcnJheScsXG4gICAgICAgICdGaWx0ZXJCb3gnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBmaWx0ZXJzIHRvIGRpc3BsYXkgYW5kIGNvbnRyb2xcbiAgICAgKiBAdHlwZSB7b2JqZWN0W119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWx0ZXJDb25maWdzID0gY29uZmlnLmZpbHRlcnM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVydGljYWwga2V5IGZvciB0aGUgc2VhcmNoXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0cmlnZ2VyIGEgc2VhcmNoIG9uIGVhY2ggY2hhbmdlIHRvIGEgZmlsdGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zZWFyY2hPbkNoYW5nZSA9IGNvbmZpZy5zZWFyY2hPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RvciBvZiB0aGUgYXBwbHkgYnV0dG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwcGx5QnV0dG9uU2VsZWN0b3IgPSBjb25maWcuYXBwbHlCdXR0b25TZWxlY3RvciB8fCAnLmpzLXlleHQtZmlsdGVyYm94LWFwcGx5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnRzIGNyZWF0ZWQgZm9yIGVhY2ggZmlsdGVyIGNvbmZpZ1xuICAgICAqIEB0eXBlIHtDb21wb25lbnRbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlckNvbXBvbmVudHMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBmaWx0ZXIgY29tcG9uZW50cyBpbiB0aGUgYm94XG4gICAgICogQHR5cGUge0ZpbHRlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlcnMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRoaXMgZmlsdGVyYm94IGNvbnRhaW5zIGR5bmFtaWMgZmlsdGVycy4gVGhpcyBhZmZlY3RzIHRoZVxuICAgICAqIHRoZSB3YXkgdGhlIGZpbHRlcnMgYXJlIHVzZWQgaW4gdGhlIHNlYXJjaFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faXNEeW5hbWljID0gY29uZmlnLmlzRHluYW1pYyB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gYGZpbHRlcnMvZmlsdGVyYm94YDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdGaWx0ZXJCb3gnO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgIGZpbHRlckNvbmZpZ3M6IHRoaXMuX2ZpbHRlckNvbmZpZ3MsXG4gICAgICBzaG93QXBwbHlCdXR0b246ICF0aGlzLl9zZWFyY2hPbkNoYW5nZVxuICAgIH0pKTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIGlmICh0aGlzLl9maWx0ZXJDb21wb25lbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cy5mb3JFYWNoKGMgPT4gYy5yZW1vdmUoKSk7XG4gICAgICB0aGlzLl9maWx0ZXJDb21wb25lbnRzID0gW107XG4gICAgICB0aGlzLl9maWx0ZXJzID0gW107XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBmaWx0ZXJzIGZyb20gY29uZmlnc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZmlsdGVyQ29uZmlncy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5fZmlsdGVyQ29uZmlnc1tpXTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoY29uZmlnLnR5cGUsIE9iamVjdC5hc3NpZ24oe30sXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmZpbHRlciR7aX1gLFxuICAgICAgICAgIHN0b3JlT25DaGFuZ2U6IGZhbHNlLFxuICAgICAgICAgIGNvbnRhaW5lcjogYC5qcy15ZXh0LWZpbHRlcmJveC1maWx0ZXIke2l9YCxcbiAgICAgICAgICBvbkNoYW5nZTogKGZpbHRlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkZpbHRlckNoYW5nZShpLCBmaWx0ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgY29tcG9uZW50Lm1vdW50KCk7XG4gICAgICB0aGlzLl9maWx0ZXJDb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgIHRoaXMuX2ZpbHRlcnNbaV0gPSBjb21wb25lbnQuZ2V0RmlsdGVyKCk7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBhcHBseSBidXR0b25cbiAgICBpZiAoIXRoaXMuX3NlYXJjaE9uQ2hhbmdlKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9hcHBseUJ1dHRvblNlbGVjdG9yKTtcblxuICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICBET00ub24oYnV0dG9uLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fc2F2ZUZpbHRlcnNUb1N0b3JhZ2UoKTtcbiAgICAgICAgICB0aGlzLl9zZWFyY2goKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBjaGFuZ2VzIHRvIGNoaWxkIGZpbHRlciBjb21wb25lbnRzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGNoYW5nZWQgZmlsdGVyXG4gICAqIEBwYXJhbSB7RmlsdGVyfSBmaWx0ZXIgVGhlIG5ldyBmaWx0ZXJcbiAgICovXG4gIG9uRmlsdGVyQ2hhbmdlIChpbmRleCwgZmlsdGVyKSB7XG4gICAgdGhpcy5fZmlsdGVyc1tpbmRleF0gPSBmaWx0ZXI7XG4gICAgaWYgKHRoaXMuX3NlYXJjaE9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLl9zYXZlRmlsdGVyc1RvU3RvcmFnZSgpO1xuICAgICAgdGhpcy5fc2VhcmNoKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgZmlsdGVyIGNvbXBvbmVudHMgYWxvbmcgd2l0aCB0aGlzIGNvbXBvbmVudFxuICAgKi9cbiAgcmVtb3ZlICgpIHtcbiAgICB0aGlzLl9maWx0ZXJDb21wb25lbnRzLmZvckVhY2goYyA9PiBjLnJlbW92ZSgpKTtcbiAgICBzdXBlci5yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIGN1cnJlbnQgZmlsdGVycyB0byBzdG9yYWdlIHRvIGJlIHVzZWQgaW4gdGhlIG5leHQgc2VhcmNoXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2F2ZUZpbHRlcnNUb1N0b3JhZ2UgKCkge1xuICAgIGNvbnN0IHZhbGlkRmlsdGVycyA9IHRoaXMuX2ZpbHRlcnMuZmlsdGVyKGYgPT5cbiAgICAgIGYgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgZiAhPT0gbnVsbCAmJlxuICAgICAgT2JqZWN0LmtleXMoZikubGVuZ3RoID4gMCk7XG5cbiAgICBpZiAodGhpcy5faXNEeW5hbWljKSB7XG4gICAgICBjb25zdCBjb21iaW5lZEZpbHRlciA9IEZhY2V0LmZyb21GaWx0ZXJzKC4uLnZhbGlkRmlsdGVycyk7XG4gICAgICB0aGlzLmNvcmUuc2V0RmFjZXRGaWx0ZXIodGhpcy5uYW1lLCBjb21iaW5lZEZpbHRlciB8fCB7fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbWJpbmVkRmlsdGVyID0gdmFsaWRGaWx0ZXJzLmxlbmd0aCA+IDFcbiAgICAgICAgPyBGaWx0ZXIuYW5kKC4uLnZhbGlkRmlsdGVycylcbiAgICAgICAgOiB2YWxpZEZpbHRlcnNbMF07XG4gICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgY29tYmluZWRGaWx0ZXIgfHwge30pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGEgc2VhcmNoIHdpdGggYWxsIGZpbHRlcnMgaW4gc3RvcmFnZVxuICAgKi9cbiAgX3NlYXJjaCAoKSB7XG4gICAgY29uc3QgYWxsRmlsdGVycyA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GSUxURVIpO1xuICAgIGNvbnN0IHRvdGFsRmlsdGVyID0gYWxsRmlsdGVycy5sZW5ndGggPiAxXG4gICAgICA/IEZpbHRlci5hbmQoLi4uYWxsRmlsdGVycylcbiAgICAgIDogYWxsRmlsdGVyc1swXTtcblxuICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpO1xuXG4gICAgY29uc3QgZmFjZXRGaWx0ZXIgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRkFDRVRfRklMVEVSKVswXTtcblxuICAgIHRoaXMuY29yZS52ZXJ0aWNhbFNlYXJjaCh0aGlzLl92ZXJ0aWNhbEtleSwge1xuICAgICAgaW5wdXQ6IHF1ZXJ5LFxuICAgICAgZmlsdGVyOiBKU09OLnN0cmluZ2lmeSh0b3RhbEZpbHRlciksXG4gICAgICBmYWNldEZpbHRlcjogSlNPTi5zdHJpbmdpZnkoZmFjZXRGaWx0ZXIpXG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZpbHRlck9wdGlvbnNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5cbi8qKlxuICogVGhlIGN1cnJlbnRseSBzdXBwb3J0ZWQgY29udHJvbHNcbiAqIEB0eXBlIHtzdHJpbmdbXX1cbiAqL1xuY29uc3QgU1VQUE9SVEVEX0NPTlRST0xTID0gW1xuICAnc2luZ2xlb3B0aW9uJyxcbiAgJ211bHRpb3B0aW9uJ1xuXTtcblxuLyoqXG4gKiBSZW5kZXJzIGEgc2V0IG9mIG9wdGlvbnMsIGVhY2ggb25lIHJlcHJlc2VudGluZyBhIGZpbHRlciBpbiBhIHNlYXJjaC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyT3B0aW9uc0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICBpZiAoIWNvbmZpZy5jb250cm9sIHx8ICFTVVBQT1JURURfQ09OVFJPTFMuaW5jbHVkZXMoY29uZmlnLmNvbnRyb2wpKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICAnRmlsdGVyT3B0aW9ucyByZXF1aXJlcyBhIHZhbGlkIFwiY29udHJvbFwiIHRvIGJlIHByb3ZpZGVkJyxcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMnKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmZpZy5vcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICAnRmlsdGVyT3B0aW9ucyBjb21wb25lbnQgcmVxdWlyZXMgb3B0aW9ucyB0byBiZSBwcm92aWRlZCcsXG4gICAgICAgICdGaWx0ZXJPcHRpb25zJyk7XG4gICAgfVxuXG4gICAgbGV0IHByZXZpb3VzT3B0aW9ucyA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKHRoaXMubmFtZSk7XG4gICAgaWYgKHR5cGVvZiBwcmV2aW91c09wdGlvbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBwcmV2aW91c09wdGlvbnMgPSBKU09OLnBhcnNlKHByZXZpb3VzT3B0aW9ucyk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgICBsZXQgc2VsZWN0ZWRPcHRpb25zID0gcHJldmlvdXNPcHRpb25zIHx8IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxpc3Qgb2YgZmlsdGVyIG9wdGlvbnMgdG8gZGlzcGxheSB3aXRoIGNoZWNrZWQgc3RhdHVzXG4gICAgICogQHR5cGUge29iamVjdFtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb3B0aW9ucyA9IGNvbmZpZy5vcHRpb25zLm1hcChvID0+IE9iamVjdC5hc3NpZ24oe30sIHsgc2VsZWN0ZWQ6IHNlbGVjdGVkT3B0aW9ucy5pbmNsdWRlcyhvLmxhYmVsKSB9LCBvKSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiBjb250cm9sIHRvIGRpc3BsYXlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fY29udHJvbCA9IGNvbmZpZy5jb250cm9sO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdG9yIHVzZWQgZm9yIG9wdGlvbnMgaW4gdGhlIHRlbXBsYXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29wdGlvblNlbGVjdG9yID0gY29uZmlnLm9wdGlvblNlbGVjdG9yIHx8ICcuanMteWV4dC1maWx0ZXItb3B0aW9uJztcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHN0b3JlcyB0aGUgZmlsdGVyIHRvIHN0b3JhZ2Ugb24gZWFjaCBjaGFuZ2VcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N0b3JlT25DaGFuZ2UgPSBjb25maWcuc3RvcmVPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB0byBjYWxsIHdoZW4gY2hhbmdlZFxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29uQ2hhbmdlID0gY29uZmlnLm9uQ2hhbmdlIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRvIGJlIHVzZWQgaW4gdGhlIGxlZ2VuZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9sYWJlbCA9IGNvbmZpZy5sYWJlbCB8fCAnRmlsdGVycyc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRmlsdGVyT3B0aW9ucyc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlciwgYmFzZWQgb24gdGhlIGNvbnRyb2xcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuIGBjb250cm9scy8ke2NvbmZpZy5jb250cm9sfWA7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgb3B0aW9uczogdGhpcy5fb3B0aW9ucyxcbiAgICAgIGxhYmVsOiB0aGlzLl9sYWJlbFxuICAgIH0pKTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIERPTS5kZWxlZ2F0ZShcbiAgICAgIERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIGAuJHt0aGlzLl9jb250cm9sfS1maWVsZHNldGApLFxuICAgICAgdGhpcy5fb3B0aW9uU2VsZWN0b3IsXG4gICAgICAnY2xpY2snLFxuICAgICAgZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLl91cGRhdGVPcHRpb24ocGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXgpLCBldmVudC50YXJnZXQuY2hlY2tlZCk7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgICAgICAgaWYgKHRoaXMuX3N0b3JlT25DaGFuZ2UpIHtcbiAgICAgICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgZmlsdGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX29uQ2hhbmdlKGZpbHRlcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIF91cGRhdGVPcHRpb24gKGluZGV4LCBzZWxlY3RlZCkge1xuICAgIGlmICh0aGlzLl9jb250cm9sID09PSAnc2luZ2xlb3B0aW9uJykge1xuICAgICAgdGhpcy5fb3B0aW9ucyA9IHRoaXMuX29wdGlvbnMubWFwKG8gPT4gT2JqZWN0LmFzc2lnbih7fSwgbywgeyBzZWxlY3RlZDogZmFsc2UgfSkpO1xuICAgIH1cblxuICAgIHRoaXMuX29wdGlvbnNbaW5kZXhdID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fb3B0aW9uc1tpbmRleF0sIHsgc2VsZWN0ZWQgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSgpO1xuICB9XG5cbiAgZ2V0RmlsdGVyICgpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgb3B0aW9uc1xuICAgKi9cbiAgY2xlYXIgKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gRE9NLnF1ZXJ5QWxsKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fb3B0aW9uU2VsZWN0b3IpO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZSA9PiBlLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdmYWxzZScpKTtcbiAgICB0aGlzLl9hcHBseUZpbHRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGFuZCByZXR1cm4gdGhlIEZpbHRlciB0aGF0IHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9idWlsZEZpbHRlciAoKSB7XG4gICAgY29uc3QgZmlsdGVycyA9IHRoaXMuX29wdGlvbnNcbiAgICAgIC5maWx0ZXIobyA9PiBvLnNlbGVjdGVkKVxuICAgICAgLm1hcChvID0+IG8uZmlsdGVyXG4gICAgICAgID8gby5maWx0ZXJcbiAgICAgICAgOiBGaWx0ZXIuZXF1YWwoby5maWVsZCwgby52YWx1ZSkpO1xuXG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldCh0aGlzLm5hbWUsIHRoaXMuX29wdGlvbnMuZmlsdGVyKG8gPT4gby5zZWxlY3RlZCkubWFwKG8gPT4gby5sYWJlbCkpO1xuICAgIHJldHVybiBmaWx0ZXJzLmxlbmd0aCA+IDBcbiAgICAgID8gRmlsdGVyLmdyb3VwKC4uLmZpbHRlcnMpXG4gICAgICA6IHt9O1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBSYW5nZUZpbHRlckNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5nZUZpbHRlckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmllbGQgdG8gZmlsdGVyIG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpZWxkID0gY29uZmlnLmZpZWxkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgZmlsdGVyIHZhbHVlIGNoYW5nZXNcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vbkNoYW5nZSA9IGNvbmZpZy5vbkNoYW5nZSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHN0b3JlcyB0aGUgZmlsdGVyIHRvIHN0b3JhZ2Ugb24gZWFjaCBjaGFuZ2VcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N0b3JlT25DaGFuZ2UgPSBjb25maWcuc3RvcmVPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIGxldCBtaW5WYWwgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHt0aGlzLm5hbWV9Lm1pbmApO1xuICAgIGlmICh0eXBlb2YgbWluVmFsID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbWluVmFsID0gTnVtYmVyLnBhcnNlSW50KG1pblZhbCk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgICBsZXQgbWF4VmFsID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7dGhpcy5uYW1lfS5tYXhgKTtcbiAgICBpZiAodHlwZW9mIG1pblZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG1heFZhbCA9IE51bWJlci5wYXJzZUludChtYXhWYWwpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCByYW5nZSByZXByZXNlbnRlZFxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9yYW5nZSA9IHtcbiAgICAgIG1pbjogbWluVmFsIHx8IGNvbmZpZy5pbml0aWFsTWluIHx8IDAsXG4gICAgICBtYXg6IG1heFZhbCB8fCBjb25maWcuaW5pdGlhbE1heCB8fCAxMFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgdG8gZGlzcGxheSBmb3IgdGhlIHJhbmdlIGNvbnRyb2xcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGl0bGUgPSBjb25maWcudGl0bGU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgbGFiZWwgdG8gZGlzcGxheSBmb3IgdGhlIG1pbiBpbnB1dFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9taW5MYWJlbCA9IGNvbmZpZy5taW5MYWJlbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGxhYmVsIHRvIGRpc3BsYXkgZm9yIHRoZSBtYXggaW5wdXRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbWF4TGFiZWwgPSBjb25maWcubWF4TGFiZWwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gYGNvbnRyb2xzL3JhbmdlYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdSYW5nZUZpbHRlcic7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIHRpdGxlOiB0aGlzLl90aXRsZSxcbiAgICAgIG1pbkxhYmVsOiB0aGlzLl9taW5MYWJlbCxcbiAgICAgIG1heExhYmVsOiB0aGlzLl9tYXhMYWJlbCxcbiAgICAgIG1pblZhbHVlOiB0aGlzLl9yYW5nZS5taW4sXG4gICAgICBtYXhWYWx1ZTogdGhpcy5fcmFuZ2UubWF4XG4gICAgfSkpO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIERPTS5kZWxlZ2F0ZSh0aGlzLl9jb250YWluZXIsICcuanMteWV4dC1yYW5nZScsICdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3VwZGF0ZVJhbmdlKGV2ZW50LnRhcmdldC5kYXRhc2V0LmtleSwgTnVtYmVyLnBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0TWluICh2YWx1ZSkge1xuICAgIHRoaXMuX3VwZGF0ZVJhbmdlKCdtaW4nLCB2YWx1ZSk7XG4gIH1cblxuICBzZXRNYXggKHZhbHVlKSB7XG4gICAgdGhpcy5fdXBkYXRlUmFuZ2UoJ21heCcsIHZhbHVlKTtcbiAgfVxuXG4gIGdldEZpbHRlciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkRmlsdGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBjdXJyZW50IHJhbmdlIHN0YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJhbmdlIGtleSB0byB1cGRhdGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBuZXcgdmFsdWUgZm9yIHRoZSBrZXlcbiAgICovXG4gIF91cGRhdGVSYW5nZSAoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXMuX3JhbmdlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fcmFuZ2UsIHsgW2tleV06IHZhbHVlIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoKTtcblxuICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuX2J1aWxkRmlsdGVyKCk7XG4gICAgaWYgKHRoaXMuX3N0b3JlT25DaGFuZ2UpIHtcbiAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBmaWx0ZXIpO1xuICAgIH1cbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke3RoaXMubmFtZX0ubWluYCwgdGhpcy5fcmFuZ2UubWluKTtcbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke3RoaXMubmFtZX0ubWF4YCwgdGhpcy5fcmFuZ2UubWF4KTtcblxuICAgIHRoaXMuX29uQ2hhbmdlKGZpbHRlcik7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgdGhlIGZpbHRlciByZXByZXNlbnRhdGlvbiBvZiB0aGUgY3VycmVudCBzdGF0ZVxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgX2J1aWxkRmlsdGVyICgpIHtcbiAgICByZXR1cm4gRmlsdGVyLmluY2x1c2l2ZVJhbmdlKHRoaXMuX2ZpZWxkLCB0aGlzLl9yYW5nZS5taW4sIHRoaXMuX3JhbmdlLm1heCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIERhdGVGaWx0ZXJDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuLyoqXG4gKiBBIGZpbHRlciBmb3IgYSByYW5nZSBvZiBkYXRlc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlUmFuZ2VGaWx0ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFwaSBmaWVsZCB0aGlzIGZpbHRlciBjb250cm9sc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWVsZCA9IGNvbmZpZy5maWVsZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB0byBkaXNwbGF5IGZvciB0aGUgZGF0ZSByYW5nZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90aXRsZSA9IGNvbmZpZy50aXRsZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBsYWJlbCB0byBzaG93IGZvciB0aGUgbWluIGRhdGUgaW5wdXRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbWluTGFiZWwgPSBjb25maWcubWluTGFiZWwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBsYWJlbCB0byBzaG93IGZvciB0aGUgbWF4IGRhdGUgaW5wdXRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbWF4TGFiZWwgPSBjb25maWcubWF4TGFiZWwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjYWxsYmFjayB1c2VkIHdoZW4gYSBkYXRlIGlzIGNoYW5nZWRcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vbkNoYW5nZSA9IGNvbmZpZy5vbkNoYW5nZSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHN0b3JlcyB0aGUgZmlsdGVyIHRvIHN0b3JhZ2Ugb24gZWFjaCBjaGFuZ2VcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N0b3JlT25DaGFuZ2UgPSBjb25maWcuc3RvcmVPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoaXMgZmlsdGVyIHJlcHJlc2VudHMgYW4gZXhjbHVzaXZlIHJhbmdlLCByYXRoZXIgdGhhbiBhbiBpbmNsdXNpdmUgb25lXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9pc0V4Y2x1c2l2ZSA9IGNvbmZpZy5pc0V4Y2x1c2l2ZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSBmb3IgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IGBjb250cm9scy9kYXRlYDtcblxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB0b2RheVN0cmluZyA9IGAke3RvZGF5LmdldEZ1bGxZZWFyKCl9LSR7YCR7dG9kYXkuZ2V0TW9udGgoKSArIDF9YC5wYWRTdGFydCgyLCAnMCcpfS0ke2Ake3RvZGF5LmdldERhdGUoKX1gLnBhZFN0YXJ0KDIsICcwJyl9YDtcbiAgICBjb25zdCBtaW5EYXRlID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7dGhpcy5uYW1lfS5taW5gKTtcbiAgICBjb25zdCBtYXhEYXRlID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoYCR7dGhpcy5uYW1lfS5tYXhgKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IGRhdGUgcmFuZ2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2RhdGUgPSB7XG4gICAgICBtaW46IG1pbkRhdGUgfHwgY29uZmlnLmluaXRpYWxNaW4gfHwgdG9kYXlTdHJpbmcsXG4gICAgICBtYXg6IG1heERhdGUgfHwgY29uZmlnLmluaXRpYWxNYXggfHwgdG9kYXlTdHJpbmdcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0RhdGVSYW5nZUZpbHRlcic7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIHRpdGxlOiB0aGlzLl90aXRsZSxcbiAgICAgIG1pbkxhYmVsOiB0aGlzLl9taW5MYWJlbCxcbiAgICAgIG1heExhYmVsOiB0aGlzLl9tYXhMYWJlbCxcbiAgICAgIGRhdGVNaW46IHRoaXMuX2RhdGUubWluLFxuICAgICAgZGF0ZU1heDogdGhpcy5fZGF0ZS5tYXhcbiAgICB9KSk7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgRE9NLmRlbGVnYXRlKHRoaXMuX2NvbnRhaW5lciwgJy5qcy15ZXh0LWRhdGUnLCAnY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl91cGRhdGVSYW5nZShldmVudC50YXJnZXQuZGF0YXNldC5rZXksIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBtaW4gZGF0ZSB0byB0aGUgb25lIHByb3ZpZGVkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlIERhdGUgdG8gc2V0IGluIHl5eXktbW0tZGQgc3RyaW5nIGZvcm1hdFxuICAgKi9cbiAgc2V0TWluIChkYXRlKSB7XG4gICAgdGhpcy5fdXBkYXRlUmFuZ2UoJ21pbicsIGRhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbWF4IGRhdGUgdG8gdGhlIG9uZSBwcm92aWRlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0ZSBEYXRlIHRvIHNldCBpbiB5eXl5LW1tLWRkIHN0cmluZyBmb3JtYXRcbiAgICovXG4gIHNldE1heCAoZGF0ZSkge1xuICAgIHRoaXMuX3VwZGF0ZVJhbmdlKCdtYXgnLCBkYXRlKTtcbiAgfVxuXG4gIGdldEZpbHRlciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkRmlsdGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZGF0ZSByYW5nZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgZm9yIHRoZSBkYXRlIHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgc3RyaW5nIGRhdGUgdmFsdWVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91cGRhdGVSYW5nZSAoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXMuX2RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9kYXRlLCB7IFtrZXldOiB2YWx1ZSB9KTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG5cbiAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLl9idWlsZEZpbHRlcigpO1xuICAgIGlmICh0aGlzLl9zdG9yZU9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgZmlsdGVyKTtcbiAgICB9XG4gICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLnNldChgJHt0aGlzLm5hbWV9Lm1pbmAsIHRoaXMuX2RhdGUubWluKTtcbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke3RoaXMubmFtZX0ubWF4YCwgdGhpcy5fZGF0ZS5tYXgpO1xuXG4gICAgdGhpcy5fb25DaGFuZ2UoZmlsdGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYW4gYXBpIGZpbHRlciB3aXRoIHRoZSBjdXJyZW50IGRhdGUgc3RhdGVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9idWlsZEZpbHRlciAoKSB7XG4gICAgaWYgKHRoaXMuX2RhdGUubWluID09PSAnJyB8fCB0aGlzLl9kYXRlLm1heCA9PT0gJycpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2lzRXhjbHVzaXZlXG4gICAgICA/IEZpbHRlci5leGNsdXNpdmVSYW5nZSh0aGlzLl9maWVsZCwgdGhpcy5fZGF0ZS5taW4sIHRoaXMuX2RhdGUubWF4KVxuICAgICAgOiBGaWx0ZXIuaW5jbHVzaXZlUmFuZ2UodGhpcy5fZmllbGQsIHRoaXMuX2RhdGUubWluLCB0aGlzLl9kYXRlLm1heCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIER5bmFtaWNGaWx0ZXJzQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG4vKipcbiAqIERpc3BsYXlzIGEgc2V0IG9mIGR5bmFtaWMgZmlsdGVycyByZXR1cm5lZCBmcm9tIHRoZSBiYWNrZW5kXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHluYW1pY0ZpbHRlcnNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIHNlYXJjaFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IGNvbmZpZy52ZXJ0aWNhbEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdHJpZ2dlciBhIHNlYXJjaCBvbiBlYWNoIGNoYW5nZSB0byBhIGZpbHRlclxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc2VhcmNoT25DaGFuZ2UgPSBjb25maWcuc2VhcmNoT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0b3Igb2YgdGhlIGFwcGx5IGJ1dHRvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcHBseUJ1dHRvblNlbGVjdG9yID0gY29uZmlnLmFwcGx5QnV0dG9uU2VsZWN0b3IgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb250cm9scyB0byB1c2UgZm9yIGVhY2ggZmllbGQuIEVhY2ggdHlwZSBvZiBmaWx0ZXIgaGFzIGEgZGVmYXVsdFxuICAgICAqICRlcSA6IG11bHRpb3B0aW9uIChjaGVja2JveClcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX2ZpZWxkQ29udHJvbHMgPSBjb25maWcuZmllbGRDb250cm9scyB8fCB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ2ZpbHRlcnMvZHluYW1pYyc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgZm9yIHRoZSBkYXRhIHN0b3JhZ2UgdG8gbGlzdGVuIGZvciB1cGRhdGVzIGZyb20gdGhlIHNlcnZlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLkRZTkFNSUNfRklMVEVSUztcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaWx0ZXIgYm94IHRoYXQgZGlzcGxheXMgdGhlIGR5bmFtaWMgZmlsdGVyc1xuICAgICAqIEB0eXBlIHtGaWx0ZXJCb3hDb21wb25lbnR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWx0ZXJib3ggPSBudWxsO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0R5bmFtaWNGaWx0ZXJzJztcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIHRoaXMuY29yZS5lbmFibGVEeW5hbWljRmlsdGVycygpO1xuXG4gICAgaWYgKHRoaXMuX2ZpbHRlcmJveCkge1xuICAgICAgdGhpcy5fZmlsdGVyYm94LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGxldCB7IGZpbHRlcnMgfSA9IHRoaXMuX3N0YXRlLmdldCgpO1xuXG4gICAgaWYgKCFmaWx0ZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmlsdGVycyA9IGZpbHRlcnMubWFwKGYgPT4ge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGYsIHtcbiAgICAgICAgdHlwZTogJ0ZpbHRlck9wdGlvbnMnLFxuICAgICAgICBjb250cm9sOiB0aGlzLl9maWVsZENvbnRyb2xzW2YuZmllbGRJZF0gfHwgJ211bHRpb3B0aW9uJ1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9maWx0ZXJib3ggPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKFxuICAgICAgJ0ZpbHRlckJveCcsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfS5maWx0ZXJib3hgLFxuICAgICAgICBjb250YWluZXI6ICcuanMteWV4dC1keW5hbWljLWZpbHRlcnMnLFxuICAgICAgICBzZWFyY2hPbkNoYW5nZTogdGhpcy5fc2VhcmNoT25DaGFuZ2UsXG4gICAgICAgIHZlcnRpY2FsS2V5OiB0aGlzLl92ZXJ0aWNhbEtleSxcbiAgICAgICAgaXNEeW5hbWljOiB0cnVlLFxuICAgICAgICBmaWx0ZXJzXG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLl9maWx0ZXJib3gubW91bnQoKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgR2VvTG9jYXRpb25Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG5jb25zdCBNRVRFUlNfUEVSX01JTEUgPSAxNjA5LjM0NDtcblxuY29uc3QgREVGQVVMVF9DT05GSUcgPSB7XG4gIC8qKlxuICAgKiBUaGUgcmFkaXVzLCBpbiBtaWxlcywgYXJvdW5kIHRoZSB1c2VyJ3MgbG9jYXRpb24gdG8gZmluZCByZXN1bHRzLlxuICAgKiBJZiBsb2NhdGlvbiBhY2N1cmFjeSBpcyBsb3csIGEgbGFyZ2VyIHJhZGl1cyBtYXkgYmUgdXNlZCBhdXRvbWF0aWNhbGx5XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICByYWRpdXM6IDUwLFxuXG4gIC8qKlxuICAgKiBUaGUgdmVydGljYWwga2V5IHRvIHVzZVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdmVydGljYWxLZXk6IG51bGwsXG5cbiAgLyoqXG4gICAqIElmIHRydWUsIHN1Ym1pdHMgYSBzZWFyY2ggd2hlbiB0aGUgdmFsdWUgaXMgY2hhbmdlZFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHNlYXJjaE9uQ2hhbmdlOiBmYWxzZSxcblxuICAvKipcbiAgICogVGhlIHRpdGxlIHRvIGRpc3BsYXlcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHRpdGxlOiAnTG9jYXRpb24nLFxuXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgdG8gZGlzcGxheVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgbGFiZWw6ICdMb2NhdGlvbicsXG5cbiAgLyoqXG4gICAqIFRoZSBpY29uIHVybCB0byBzaG93IGluIHRoZSBnZW8gYnV0dG9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZW9CdXR0b25JY29uOiAnJyxcblxuICAvKipcbiAgICogVGhlIHRleHQgdG8gc2hvdyBpbiB0aGUgZ2VvIGJ1dHRvblxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2VvQnV0dG9uVGV4dDogJ1VzZSBNeSBMb2NhdGlvbicsXG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IHRvIHNob3cgd2hlbiBnZW9sb2NhdGlvbiBpcyBlbmFibGVkXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBlbmFibGVkVGV4dDogJ0N1cnJlbnQgTG9jYXRpb24nLFxuXG4gIC8qKlxuICAgKiBUaGUgdGV4dCB0byBzaG93IHdoZW4gbG9hZGluZyB0aGUgdXNlcidzIGxvY2F0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBsb2FkaW5nVGV4dDogJ0ZpbmRpbmcgWW91ciBMb2NhdGlvbi4uLicsXG5cbiAgLyoqXG4gICAqIFRoZSB0ZXh0IHRvIHNob3cgaWYgdGhlIHVzZXIncyBsb2NhdGlvbiBjYW5ub3QgYmUgZm91bmRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGVycm9yVGV4dDogJ0NvdWxkIE5vdCBGaW5kIFlvdXIgTG9jYXRpb24nLFxuXG4gIC8qKlxuICAgKiBUaGUgQ1NTIHNlbGVjdG9yIG9mIHRoZSB0b2dnbGUgYnV0dG9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBidXR0b25TZWxlY3RvcjogJy5qcy15eHQtR2VvTG9jYXRpb25GaWx0ZXItYnV0dG9uJyxcblxuICAvKipcbiAgICogVGhlIENTUyBzZWxlY3RvciBvZiB0aGUgcXVlcnkgaW5wdXRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGlucHV0U2VsZWN0b3I6ICcuanMteXh0LUdlb0xvY2F0aW9uRmlsdGVyLWlucHV0J1xufTtcblxuLyoqXG4gKiBSZW5kZXJzIGEgYnV0dG9uIHRoYXQgd2hlbiBjbGlja2VkIGFkZHMgYSBzdGF0aWMgZmlsdGVyIHJlcHJlc2VudGluZyB0aGUgdXNlcidzIGxvY2F0aW9uXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VvTG9jYXRpb25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcih7IC4uLkRFRkFVTFRfQ09ORklHLCAuLi5jb25maWcgfSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgc3RyaW5nIHRvIHVzZSBmb3IgdGhlIGlucHV0IGJveCwgcHJvdmlkZWQgdG8gdGVtcGxhdGUgZm9yIHJlbmRlcmluZy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlcnkgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRTdGF0ZShgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCkgfHwgJyc7XG4gICAgdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2Uub24oJ3VwZGF0ZScsIGAke1N0b3JhZ2VLZXlzLlFVRVJZfS4ke3RoaXMubmFtZX1gLCBxID0+IHtcbiAgICAgIHRoaXMucXVlcnkgPSBxO1xuICAgICAgdGhpcy5zZXRTdGF0ZSgpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpbHRlciB0byB1c2UgZm9yIHRoZSBjdXJyZW50IHF1ZXJ5XG4gICAgICogQHR5cGUge0ZpbHRlcn1cbiAgICAgKi9cbiAgICB0aGlzLmZpbHRlciA9IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCkgfHwge307XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpbHRlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gSlNPTi5wYXJzZSh0aGlzLmZpbHRlcik7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLm9uKCd1cGRhdGUnLCBgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWAsIGYgPT4geyB0aGlzLmZpbHRlciA9IGY7IH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0dlb0xvY2F0aW9uRmlsdGVyJztcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lICgpIHtcbiAgICByZXR1cm4gJ2NvbnRyb2xzL2dlb2xvY2F0aW9uJztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgbGV0IHBsYWNlaG9sZGVyID0gJyc7XG4gICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcbiAgICAgIHBsYWNlaG9sZGVyID0gdGhpcy5fY29uZmlnLmVuYWJsZWRUZXh0O1xuICAgIH1cbiAgICBpZiAoZGF0YS5nZW9Mb2FkaW5nKSB7XG4gICAgICBwbGFjZWhvbGRlciA9IHRoaXMuX2NvbmZpZy5sb2FkaW5nVGV4dDtcbiAgICB9XG4gICAgaWYgKGRhdGEuZ2VvRXJyb3IpIHtcbiAgICAgIHBsYWNlaG9sZGVyID0gdGhpcy5fY29uZmlnLmVycm9yVGV4dDtcbiAgICB9XG4gICAgc3VwZXIuc2V0U3RhdGUoe1xuICAgICAgLi4uZGF0YSxcbiAgICAgIHRpdGxlOiB0aGlzLl9jb25maWcudGl0bGUsXG4gICAgICBnZW9FbmFibGVkOiB0aGlzLl9lbmFibGVkLFxuICAgICAgcXVlcnk6IHRoaXMucXVlcnksXG4gICAgICBsYWJlbFRleHQ6IHRoaXMuX2NvbmZpZy5sYWJlbCxcbiAgICAgIGVuYWJsZWRUZXh0OiB0aGlzLl9jb25maWcuZW5hYmxlZFRleHQsXG4gICAgICBsb2FkaW5nVGV4dDogdGhpcy5fY29uZmlnLmxvYWRpbmdUZXh0LFxuICAgICAgZXJyb3JUZXh0OiB0aGlzLl9jb25maWcuZXJyb3JUZXh0LFxuICAgICAgZ2VvQnV0dG9uSWNvbjogdGhpcy5fY29uZmlnLmdlb0J1dHRvbkljb24sXG4gICAgICBnZW9WYWx1ZTogdGhpcy5fZW5hYmxlZCB8fCBkYXRhLmdlb0xvYWRpbmcgfHwgZGF0YS5nZW9FcnJvciA/ICcnIDogdGhpcy5xdWVyeSxcbiAgICAgIGdlb1BsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgIGdlb0J1dHRvblRleHQ6IHRoaXMuX2NvbmZpZy5nZW9CdXR0b25UZXh0XG4gICAgfSk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlKSB7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGUucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5faW5pdEF1dG9Db21wbGV0ZSh0aGlzLl9jb25maWcuaW5wdXRTZWxlY3Rvcik7XG4gICAgRE9NLm9uKHRoaXMuX2NvbmZpZy5idXR0b25TZWxlY3RvciwgJ2NsaWNrJywgKCkgPT4gdGhpcy5fdG9nZ2xlR2VvRmlsdGVyKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgaGVscGVyIG1ldGhvZCB0byB3aXJlIHVwIG91ciBhdXRvIGNvbXBsZXRlIG9uIGFuIGlucHV0IHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBhdXRvIGNvbXBsZXRlIGNvbXBvbmVudCB0b1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2luaXRBdXRvQ29tcGxldGUgKGlucHV0U2VsZWN0b3IpIHtcbiAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlKSB7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGUucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fYXV0b2NvbXBsZXRlID0gdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZSgnQXV0b0NvbXBsZXRlJywge1xuICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfS5hdXRvY29tcGxldGVgLFxuICAgICAgaXNGaWx0ZXJTZWFyY2g6IHRydWUsXG4gICAgICBjb250YWluZXI6ICcuanMteXh0LUdlb0xvY2F0aW9uRmlsdGVyLWF1dG9jb21wbGV0ZScsXG4gICAgICBvcmlnaW5hbFF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgb3JpZ2luYWxGaWx0ZXI6IHRoaXMuZmlsdGVyLFxuICAgICAgaW5wdXRFbDogaW5wdXRTZWxlY3RvcixcbiAgICAgIHZlcnRpY2FsS2V5OiB0aGlzLl92ZXJ0aWNhbEtleSxcbiAgICAgIG9uU3VibWl0OiAocXVlcnksIGZpbHRlcikgPT4ge1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gRmlsdGVyLmZyb21SZXNwb25zZShmaWx0ZXIpO1xuICAgICAgICB0aGlzLl9zYXZlRGF0YVRvU3RvcmFnZShxdWVyeSwgdGhpcy5maWx0ZXIpO1xuICAgICAgICB0aGlzLl9lbmFibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgc3RhdGljIGZpbHRlciByZXByZXNlbnRpbmcgdGhlIHVzZXIncyBsb2NhdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3RvZ2dsZUdlb0ZpbHRlciAoKSB7XG4gICAgaWYgKCFuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBnZW9FcnJvcjogdHJ1ZSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2VuYWJsZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBnZW9Mb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihcbiAgICAgICAgcG9zaXRpb24gPT4ge1xuICAgICAgICAgIHRoaXMuX3NhdmVEYXRhVG9TdG9yYWdlKCcnLCBwb3NpdGlvbik7XG4gICAgICAgICAgdGhpcy5fZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7fSk7XG4gICAgICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLmRlbGV0ZShgJHtTdG9yYWdlS2V5cy5RVUVSWX0uJHt0aGlzLm5hbWV9YCk7XG4gICAgICAgICAgdGhpcy5jb3JlLnBlcnNpc3RlbnRTdG9yYWdlLmRlbGV0ZShgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7dGhpcy5uYW1lfWApO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZ2VvRXJyb3I6IHRydWUgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNhdmVzIHRoZSBwcm92aWRlZCBmaWx0ZXIgdW5kZXIgdGhpcyBjb21wb25lbnQncyBuYW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSBUaGUgcXVlcnkgdG8gc2F2ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gcG9zaXRpb24gVGhlIHBvc2l0aW9uIHRvIHNhdmVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zYXZlRGF0YVRvU3RvcmFnZSAocXVlcnksIHBvc2l0aW9uKSB7XG4gICAgY29uc3QgZmlsdGVyID0gdGhpcy5fYnVpbGRGaWx0ZXIocG9zaXRpb24pO1xuICAgIHRoaXMuY29yZS5wZXJzaXN0ZW50U3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuUVVFUll9LiR7dGhpcy5uYW1lfWAsIHF1ZXJ5KTtcbiAgICB0aGlzLmNvcmUucGVyc2lzdGVudFN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHt0aGlzLm5hbWV9YCwgZmlsdGVyKTtcbiAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgZmlsdGVyKTtcbiAgICB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuR0VPTE9DQVRJT04sIHtcbiAgICAgIGxhdDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxuICAgICAgbG5nOiBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlLFxuICAgICAgcmFkaXVzOiBwb3NpdGlvbi5jb29yZHMuYWNjdXJhY3lcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLl9jb25maWcuc2VhcmNoT25DaGFuZ2UpIHtcbiAgICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICAgIGxldCB0b3RhbEZpbHRlciA9IGZpbHRlcnNbMF07XG4gICAgICBpZiAoZmlsdGVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRvdGFsRmlsdGVyID0gRmlsdGVyLmFuZCguLi5maWx0ZXJzKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpIHx8ICcnO1xuICAgICAgY29uc3QgZmFjZXRGaWx0ZXIgPSB0aGlzLmNvcmUuZ2xvYmFsU3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRkFDRVRfRklMVEVSKVswXTtcblxuICAgICAgdGhpcy5jb3JlLnZlcnRpY2FsU2VhcmNoKHRoaXMuX2NvbmZpZy52ZXJ0aWNhbEtleSwge1xuICAgICAgICBpbnB1dDogc2VhcmNoUXVlcnksXG4gICAgICAgIGZpbHRlcjogSlNPTi5zdHJpbmdpZnkodG90YWxGaWx0ZXIpLFxuICAgICAgICBmYWNldEZpbHRlcjogSlNPTi5zdHJpbmdpZnkoZmFjZXRGaWx0ZXIpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYSBwb3NpdGlvbiwgY29uc3RydWN0IGEgRmlsdGVyIG9iamVjdFxuICAgKiBAcGFyYW0ge1Bvc3RpdGlvbn0gcG9zaXRpb24gVGhlIHBvc2l0aW9uXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYnVpbGRGaWx0ZXIgKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlLCBhY2N1cmFjeSB9ID0gcG9zaXRpb24uY29vcmRzO1xuICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgubWF4KGFjY3VyYWN5LCB0aGlzLl9jb25maWcucmFkaXVzICogTUVURVJTX1BFUl9NSUxFKTtcbiAgICByZXR1cm4gRmlsdGVyLnBvc2l0aW9uKGxhdGl0dWRlLCBsb25naXR1ZGUsIHJhZGl1cyk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIERpcmVjdEFuc3dlckNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgQW5hbHl0aWNzRXZlbnQgZnJvbSAnLi4vLi4vLi4vY29yZS9hbmFseXRpY3MvYW5hbHl0aWNzZXZlbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIEV2ZW50VHlwZXMgYXJlIGV4cGxpY2l0IHN0cmluZ3MgZGVmaW5lZFxuICogZm9yIHdoYXQgdGhlIHNlcnZlciBleHBlY3RzIGZvciBhbmFseXRpY3MuXG4gKlxuICogQGVudW1cbiAqL1xuY29uc3QgRXZlbnRUeXBlcyA9IHtcbiAgVEhVTUJTX1VQOiAnVEhVTUJTX1VQJyxcbiAgVEhVTUJTX0RPV046ICdUSFVNQlNfRE9XTidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdEFuc3dlckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBSZWNpZXZlIHVwZGF0ZXMgZnJvbSBzdG9yYWdlIGJhc2VkIG9uIHRoaXMgaW5kZXhcbiAgICAgKiBAdHlwZSB7U3RvcmFnZUtleX1cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuRElSRUNUX0FOU1dFUjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBmb3JtIHVzZWQgZm9yIHN1Ym1pdHRpbmcgdGhlIGZlZWRiYWNrXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9mb3JtRWwgPSBjb25maWcuZm9ybUVsIHx8ICcuanMtZGlyZWN0QW5zd2VyLWZlZWRiYWNrLWZvcm0nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGB0aHVtYnMgdXBgIGNzcyBzZWxlY3RvciB0byBiaW5kIHVpIGludGVyYWN0aW9uIHRvIGZvciByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RodW1ic1VwU2VsZWN0b3IgPSBjb25maWcudGh1bWJzVXBTZWxlY3RvciB8fCAnLmpzLWRpcmVjdEFuc3dlci10aHVtYlVwJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBgdGh1bWJzIGRvd25gIGNzcyBzZWxlY3RvciB0byBiaW5kIHVpIGludGVyYWN0aW9uIHRvIGZvciByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RodW1ic0Rvd25TZWxlY3RvciA9IGNvbmZpZy50aHVtYnNEb3duU2VsZWN0b3IgfHwgJy5qcy1kaXJlY3RBbnN3ZXItdGh1bWJEb3duJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBkaXNwbGF5IHRleHQgZm9yIHRoZSBWaWV3IERldGFpbHMgY2xpY2sgdG8gYWN0aW9uIGxpbmtcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZpZXdEZXRhaWxzVGV4dCA9IGNvbmZpZy52aWV3RGV0YWlsc1RleHQgfHwgJ1ZpZXcgRGV0YWlscyc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRGlyZWN0QW5zd2VyJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9kaXJlY3RhbnN3ZXInO1xuICB9XG5cbiAgLyoqXG4gICAqIGJlZm9yZU1vdW50LCBvbmx5IGRpc3BsYXkgdGhlIGRpcmVjdCBhbnN3ZXIgY29tcG9uZW50IGlmIGl0IGhhcyBkYXRhXG4gICAqL1xuICBiZWZvcmVNb3VudCAoKSB7XG4gICAgaWYgKCF0aGlzLmhhc1N0YXRlKCdhbnN3ZXInKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIERPTSBpcyBjb25zdHJ1Y3RlZCxcbiAgICogd2Ugd2FudCB0byB3aXJlIHVwIHRoZSBiZWhhdmlvciBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgcXVhbGl0eSBmZWVkYmFjayByZXBvcnRpbmcgKHRodW1ic3VwL2Rvd24pXG4gICAqL1xuICBvbk1vdW50ICgpIHtcbiAgICAvLyBBdm9pZCBiaW5kaW5ncyBpZiB0aGUgZmVlZGJhY2sgaGFzIHByZXZpb3VzbHkgYmVlbiBzdWJtaXR0ZWRcbiAgICBpZiAodGhpcy5nZXRTdGF0ZSgnZmVlZGJhY2tTdWJtaXR0ZWQnKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gRm9yIFdDQUcgY29tcGxpYW5jZSwgdGhlIGZlZWRiYWNrIHNob3VsZCBiZSBhIHN1Ym1pdHRhYmxlIGZvcm1cbiAgICBET00ub24odGhpcy5fZm9ybUVsLCAnc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGxldCBmb3JtRWwgPSBlLnRhcmdldDtcbiAgICAgIGxldCBjaGVja2VkVmFsdWUgPSBET00ucXVlcnkoZm9ybUVsLCAnaW5wdXQ6Y2hlY2tlZCcpLmNoZWNrZWQ7XG5cbiAgICAgIHRoaXMucmVwb3J0UXVhbGl0eShjaGVja2VkVmFsdWUpO1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICAgICdmZWVkYmFja1N1Ym1pdHRlZCc6IHRydWVcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gSXMgdGhpcyBhY3R1YWxseSBuZWNlc3Nhcnk/IEkgZ3Vlc3MgaXQncyBvbmx5IG5lY2Vzc2FyeSBpZiB0aGVcbiAgICAvLyBzdWJtaXQgYnV0dG9uIGlzIGhpZGRlbi5cbiAgICBET00ub24odGhpcy5fdGh1bWJzVXBTZWxlY3RvciwgJ2NsaWNrJywgKCkgPT4geyBET00udHJpZ2dlcih0aGlzLl9mb3JtRWwsICdzdWJtaXQnKTsgfSk7XG4gICAgRE9NLm9uKHRoaXMuX3RodW1ic0Rvd25TZWxlY3RvciwgJ2NsaWNrJywgKCkgPT4geyBET00udHJpZ2dlcih0aGlzLl9mb3JtRWwsICdzdWJtaXQnKTsgfSk7XG4gIH1cblxuICAvKipcbiAgICogdXBkYXRlU3RhdGUgZW5hYmxlcyBmb3IgcGFydGlhbCB1cGRhdGVzICh0aGUgZGVsdGEgYmV0d2VlbiB0aGUgb2xkIGFuZCBuZXcpXG4gICAqIEB0eXBlIHtvYmplY3R9IFRoZSBuZXcgc3RhdGUgdG8gYXBwbHkgdG8gdGhlIG9sZFxuICAgKi9cbiAgdXBkYXRlU3RhdGUgKHN0YXRlID0ge30pIHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZ2V0U3RhdGUoKSwgc3RhdGUpO1xuICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgZXZlbnRPcHRpb25zOiB0aGlzLmV2ZW50T3B0aW9ucyhkYXRhKSxcbiAgICAgIHZpZXdEZXRhaWxzVGV4dDogdGhpcy5fdmlld0RldGFpbHNUZXh0XG4gICAgfSkpO1xuICB9XG5cbiAgZXZlbnRPcHRpb25zIChkYXRhKSB7XG4gICAgaWYgKCFkYXRhIHx8IE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiBkYXRhLnJlbGF0ZWRJdGVtLnZlcnRpY2FsQ29uZmlnSWQsXG4gICAgICBzZWFyY2hlcjogJ1VOSVZFUlNBTCcsXG4gICAgICBlbnRpdHlJZDogZGF0YS5yZWxhdGVkSXRlbS5kYXRhLmlkLFxuICAgICAgY3RhTGFiZWw6IHRoaXMuX3ZpZXdEZXRhaWxzVGV4dC50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoJyAnLCAnXycpXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogcmVwb3J0UXVhbGl0eSB3aWxsIHNlbmQgdGhlIHF1YWxpdHkgZmVlZGJhY2sgdG8gYW5hbHl0aWNzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNHb29kIHRydWUgaWYgdGhlIGFuc3dlciBpcyB3aGF0IHlvdSB3ZXJlIGxvb2tpbmcgZm9yXG4gICAqL1xuICByZXBvcnRRdWFsaXR5IChpc0dvb2QpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBpc0dvb2QgPT09IHRydWUgPyBFdmVudFR5cGVzLlRIVU1CU19VUCA6IEV2ZW50VHlwZXMuVEhVTUJTX0RPV047XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgQW5hbHl0aWNzRXZlbnQoZXZlbnRUeXBlKVxuICAgICAgLmFkZE9wdGlvbnMoe1xuICAgICAgICAnZGlyZWN0QW5zd2VyJzogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICB0aGlzLmFuYWx5dGljc1JlcG9ydGVyLnJlcG9ydChldmVudCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlc3VsdHNJdGVtQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICAvKipcbiAgICAgKiB2ZXJ0aWNhbENvbmZpZ0lkIHVzZWQgZm9yIGFuYWx5dGljcyBhbmQgcGFzc2VkIHRvIGNoaWxkcmVuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsQ29uZmlnSWQgPSBvcHRzLnZlcnRpY2FsQ29uZmlnSWQ7XG5cbiAgICAvKipcbiAgICAgKiBpc1VuaXZlcnNhbCBpcyB1c2VkIGZvciBhbmFseXRpY3MgYW5kIHBhc3NlZCB0byBjaGlsZHJlbiBhbmQgaXMgc2V0IHRvXG4gICAgICogdHJ1ZSBpZiB0aGlzIGNvbXBvbmVudCBpcyBhZGRlZCBieSB0aGUgVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faXNVbml2ZXJzYWwgPSBvcHRzLmlzVW5pdmVyc2FsIHx8IGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1Jlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9yZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoZWxwZXIgdG8gY29uc3RydWN0IHRoZSBldmVudE9wdGlvbnMgb2JqZWN0IGZvciB0aGUgdGl0bGUgbGlua1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZXZlbnRPcHRpb25zIChlbnRpdHlJZCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiB0aGlzLl92ZXJ0aWNhbENvbmZpZ0lkLFxuICAgICAgc2VhcmNoZXI6IHRoaXMuX2lzVW5pdmVyc2FsID8gJ1VOSVZFUlNBTCcgOiAnVkVSVElDQUwnLFxuICAgICAgZW50aXR5SWQ6IGVudGl0eUlkXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogcGFzc2VzIGV2ZW50T3B0aW9ucyB0byB0aGUgdmlld01vZGVsXG4gICAqIEBvdmVycmlkZVxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJucyB7UmVzdWx0c0l0ZW1Db21wb25lbnR9XG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgIGV2ZW50T3B0aW9uczogdGhpcy5ldmVudE9wdGlvbnMoZGF0YS5pZClcbiAgICB9KSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvbG9jYXRpb25yZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBSZXN1bHRzSXRlbUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL3Blb3BsZXJlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNYXBQcm92aWRlciAqL1xuXG4vKipcbiAqIEEgTWFwUHJvdmlkZXIgaXMgYW4gaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB0aGF0IHNob3VsZCBiZSBpbXBsZW1lbnRlZFxuICogaW4gb3JkZXIgdG8gaW50ZWdyYXRlIHdpdGggYSBUaGlyZCBQYXJ0eSBNYXAgcHJvdmlkZXIgZm9yIGJvdGhcbiAqIHN0YXRpYyBhbmQgaW50ZXJhY3RpdmUgbWFwcy4gTWFwUHJvdmlkZXJzIGFyZSB1c2VkIGJ5IHRoZSBNYXBDb21wb25lbnQuXG4gKlxuICogSW1wbGVtZW50YXRpb25zIHNob3VsZCBleHRlbmQgdGhpcyBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcFByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdXNlZCBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgbWFwIHByb3ZpZGVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBjb25maWcuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgbWFwIHRvIGFwcGVuZCB0byB0aGUgRE9NLCBkZWZhdWx0cyB0byAxMDAlXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9oZWlnaHQgPSBjb25maWcuaGVpZ2h0IHx8IDIwMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgbWFwIHRvIGFwcGVuZCB0byB0aGUgRE9NLCBkZWZhdWx0cyB0byAxMDAlXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl93aWR0aCA9IGNvbmZpZy53aWR0aCB8fCA2MDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgem9vbSBsZXZlbCBvZiB0aGUgbWFwLCBkZWZhdWx0cyB0byA5XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl96b29tID0gY29uZmlnLnpvb20gfHwgOTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGNvb3JkaW5hdGVzIHRvIGRpc3BsYXkgaWYgdGhlcmUgYXJlIG5vIHJlc3VsdHMgcmV0dXJuZWRcbiAgICAgKiBPbmx5IHVzZWQgaWYgc2hvd0VtcHR5TWFwIGlzIHNldCB0byB0cnVlXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9kZWZhdWx0UG9zaXRpb24gPSBjb25maWcuZGVmYXVsdFBvc2l0aW9uIHx8IHsgbGF0OiAzNy4wOTAyLCBsbmc6IC05NS43MTI5IH07XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGFuIGVtcHR5IG1hcCBzaG91bGQgYmUgc2hvd24gd2hlbiB0aGVyZSBhcmUgbm8gcmVzdWx0c1xuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX3Nob3dFbXB0eU1hcCA9IGNvbmZpZy5zaG93RW1wdHlNYXAgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgdW5kZXJseWluZyBtYXAgaW5zdGFuY2UsIGNyZWF0ZWQgYnkgdGhlIGV4dGVybmFsIGxpYi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX21hcCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUZW1wb3JhcnkgYm9vbGVhbiB0cmFja2luZyB3aGV0aGVyIG9yIG5vdCB0aGUgZXh0ZXJuYWwgSlMgbGlicmFyeSBpcyBsb2FkZWQgKHNlZSBUT0RPIGJlbG93KVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2lzTG9hZGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugd2hlbiBhIHBpbiBpcyBjbGlja2VkLiBUaGUgY2xpY2tlZCBpdGVtKHMpIGFyZSBwYXNzZWQgdG8gdGhlIGNhbGxiYWNrXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMuX29uUGluQ2xpY2sgPSBjb25maWcub25QaW5DbGljayB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIG9uY2UgdGhlIEphdmFzY3JpcHQgaXMgbG9hZGVkXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMuX29uTG9hZGVkID0gY29uZmlnLm9uTG9hZGVkIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1c3RvbSBjb25maWd1cmF0aW9uIG92ZXJyaWRlIHRvIHVzZSBmb3IgdGhlIG1hcCBtYXJrZXJzXG4gICAgICogQHR5cGUge09iamVjdHxGdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLl9waW5Db25maWcgPSB0eXBlb2YgY29uZmlnLnBpbiA9PT0gJ2Z1bmN0aW9uJyA/IGNvbmZpZy5waW4gOiBPYmplY3QuYXNzaWduKE1hcFByb3ZpZGVyLkRFRkFVTFRfUElOX0NPTkZJRywgY29uZmlnLnBpbik7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRvIGNvbGxhcHNlIHBpbnMgYXQgdGhlIHNhbWUgbGF0L2xuZ1xuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2NvbGxhcHNlUGlucyA9IGNvbmZpZy5jb2xsYXBzZVBpbnMgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgY29uZmlndXJhdGlvbiB0byB1c2UgZm9yIHRoZSBtYXAgbWFya2Vyc1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKiBUT0RPKGJpbGx5KSBDcmVhdGUgYSBjb25maWd1cmF0aW9uIG1vZGVsXG4gICAqL1xuICBzdGF0aWMgZ2V0IERFRkFVTFRfUElOX0NPTkZJRyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGljb246IHtcbiAgICAgICAgYW5jaG9yOiBudWxsLCAvLyBlLmcuIHsgeDogMSwgeTogMSB9XG4gICAgICAgIHN2ZzogbnVsbCxcbiAgICAgICAgdXJsOiBudWxsLFxuICAgICAgICBzY2FsZWRTaXplOiBudWxsIC8vIGUuZy4geyB3OiAyMCwgaDogMjAgfVxuICAgICAgfSxcbiAgICAgIGxhYmVsVHlwZTogJ251bWVyaWMnXG4gICAgfTtcbiAgfVxuXG4gIG9uTG9hZGVkIChjYikge1xuICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9vbkxvYWRlZCA9IGNiO1xuICAgIGlmICh0aGlzLmlzTG9hZGVkKCkpIHtcbiAgICAgIHRoaXMuX29uTG9hZGVkKCk7XG4gICAgfVxuICB9XG5cbiAgaXNMb2FkZWQgKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0xvYWRlZDtcbiAgfVxuXG4gIGxvYWRKUyAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmltcGxlbWVudGVkIE1ldGhvZDogbG9hZEpTJyk7XG4gIH1cblxuICBsb2FkU3RhdGljICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaW1wbGVtZW50ZWQgTWV0aG9kOiBsb2FkU3RhdGljJyk7XG4gIH1cblxuICBpbml0IChtYXBEYXRhKSB7XG4gICAgLy8gVE9ETyhiaWxseSkgVGhpcyBzaG91bGQgYmUgYmFzZWQgb2ZmIGEgcHJvbWlzZSB0aGF0IGdldHMgY3JlYXRlZCBmcm9tIGxvYWRKU1xuICAgIHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCBNZXRob2Q6IGluaXQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhIGxpc3Qgb2YgbWFya2VycywgY29tYmluZSBtYXJrZXJzIHdpdGggdGhlIHNhbWUgbGF0L2xuZyBpbnRvIGEgc2luZ2xlIG1hcmtlclxuICAgKiBAcGFyYW0ge29iamVjdFtdfSBtYXJrZXJzIFRoZSBtYXJrZXJzIHRvIGNvbGxhcHNlXG4gICAqL1xuICBfY29sbGFwc2VNYXJrZXJzIChtYXJrZXJzKSB7XG4gICAgY29uc3QgbG9jYXRpb25Ub0l0ZW0gPSB7fTtcbiAgICBtYXJrZXJzLmZvckVhY2gobSA9PiB7XG4gICAgICBsb2NhdGlvblRvSXRlbVtgJHttLmxhdGl0dWRlfSR7bS5sb25naXR1ZGV9YF1cbiAgICAgICAgPyBsb2NhdGlvblRvSXRlbVtgJHttLmxhdGl0dWRlfSR7bS5sb25naXR1ZGV9YF0ucHVzaChtKVxuICAgICAgICA6IGxvY2F0aW9uVG9JdGVtW2Ake20ubGF0aXR1ZGV9JHttLmxvbmdpdHVkZX1gXSA9IFttXTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbGxhcHNlZE1hcmtlcnMgPSBbXTtcbiAgICBmb3IgKGxldCBbLCBtYXJrZXJzXSBvZiBPYmplY3QuZW50cmllcyhsb2NhdGlvblRvSXRlbSkpIHtcbiAgICAgIGlmIChtYXJrZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2VkTWFya2VyID0ge1xuICAgICAgICAgIGl0ZW06IG1hcmtlcnMubWFwKG0gPT4gbS5pdGVtKSxcbiAgICAgICAgICBsYWJlbDogbWFya2Vycy5sZW5ndGgsXG4gICAgICAgICAgbGF0aXR1ZGU6IG1hcmtlcnNbMF0ubGF0aXR1ZGUsXG4gICAgICAgICAgbG9uZ2l0dWRlOiBtYXJrZXJzWzBdLmxvbmdpdHVkZVxuICAgICAgICB9O1xuICAgICAgICBjb2xsYXBzZWRNYXJrZXJzLnB1c2goY29sbGFwc2VkTWFya2VyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxhcHNlZE1hcmtlcnMucHVzaChtYXJrZXJzWzBdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29sbGFwc2VkTWFya2VycztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgR29vZ2xlTWFwUHJvdmlkZXIgKi9cblxuaW1wb3J0IE1hcFByb3ZpZGVyIGZyb20gJy4vbWFwcHJvdmlkZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi8uLi9kb20vZG9tJztcblxuLyogZ2xvYmFsIGdvb2dsZSAqL1xuXG4vKipcbiAqIEdvb2dsZU1hcFByb3ZpZGVyIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIGEgTWFwUHJvdmlkZXJcbiAqIHRoYXQgaGFuZGxlcyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgdGhpcmQgcGFydHkgQVBJIHRvIGV4cG9zZSBtYXBzLlxuICogQGV4dGVuZHMgTWFwUHJvdmlkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29vZ2xlTWFwUHJvdmlkZXIgZXh0ZW5kcyBNYXBQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl9jbGllbnRJZCA9IG9wdHMuY2xpZW50SWQ7XG4gICAgdGhpcy5fc2lnbmF0dXJlID0gb3B0cy5zaWduYXR1cmU7XG5cbiAgICBpZiAoIXRoaXMuaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscygpICYmICF0aGlzLl9hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignR29vZ2xlTWFwc1Byb3ZpZGVyOiBNaXNzaW5nIGBhcGlLZXlgIG9yIHtgY2xpZW50SWRgLCBgc2lnbmF0dXJlYH0nKTtcbiAgICB9XG4gIH1cblxuICBsb2FkSlMgKG9uTG9hZCkge1xuICAgIGlmIChET00ucXVlcnkoJyN5ZXh0LW1hcC1qcycpKSB7XG4gICAgICBpZiAodHlwZW9mIG9uTG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvbkxvYWQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWpzJyxcbiAgICAgIG9ubG9hZDogKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX29uTG9hZGVkKCk7XG4gICAgICB9LFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzcmM6IGAvL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/JHt0aGlzLmdlbmVyYXRlQ3JlZGVudGlhbHMoKX1gXG4gICAgfSk7XG5cbiAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgfVxuXG4gIGdlbmVyYXRlU3RhdGljIChtYXBEYXRhKSB7XG4gICAgbGV0IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MgPSBHb29nbGVNYXBNYXJrZXJDb25maWcuZnJvbShcbiAgICAgIG1hcERhdGEubWFwTWFya2VycyxcbiAgICAgIHRoaXMuX3BpbkNvbmZpZ1xuICAgICk7XG5cbiAgICBsZXQgZW5jb2RlZE1hcmtlcnMgPSBHb29nbGVNYXBNYXJrZXJDb25maWcuc2VyaWFsaXplKGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MpO1xuICAgIHJldHVybiBgXG4gICAgICA8aW1nIHNyYz1cIi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9zdGF0aWNtYXA/JHtlbmNvZGVkTWFya2Vyc30mc2l6ZT0ke3RoaXMuX3dpZHRofXgke3RoaXMuX2hlaWdodH0mJHt0aGlzLmdlbmVyYXRlQ3JlZGVudGlhbHMoKX1cIj5gO1xuICB9XG5cbiAgZ2VuZXJhdGVDcmVkZW50aWFscyAoKSB7XG4gICAgaWYgKHRoaXMuaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscygpKSB7XG4gICAgICByZXR1cm4gYGNsaWVudD0ke3RoaXMuX2NsaWVudElkfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBga2V5PSR7dGhpcy5fYXBpS2V5fWA7XG4gICAgfVxuICB9XG5cbiAgaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscyAoKSB7XG4gICAgLy8gU2lnbmF0dXJlIGlzIG9ubHkgcmVxdWlyZWQgaWYgbWFwIGlzIHN0YXRpY1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRJZCAmJiAodGhpcy5fc2lnbmF0dXJlIHx8ICF0aGlzLl9pc1N0YXRpYyk7XG4gIH1cblxuICBpbml0IChlbCwgbWFwRGF0YSkge1xuICAgIGlmICgoIW1hcERhdGEgfHwgbWFwRGF0YS5tYXBNYXJrZXJzLmxlbmd0aCA8PSAwKSAmJiAhdGhpcy5fc2hvd0VtcHR5TWFwKSB7XG4gICAgICB0aGlzLl9tYXAgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vIE5PVEUoYmlsbHkpIFRoaXMgdGltZW91dCBpcyBhIGhhY2sgZm9yIGRlYWxpbmcgd2l0aCBhc3luYyBuYXR1cmUuXG4gICAgLy8gT25seSBoZXJlIGZvciBkZW1vIHB1cnBvc2VzLCBzbyB3ZSdsbCBmaXggbGF0ZXIuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgY29udGFpbmVyID0gRE9NLnF1ZXJ5KGVsKTtcbiAgICAgIERPTS5jc3MoY29udGFpbmVyLCB7XG4gICAgICAgIHdpZHRoOiB0aGlzLl93aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLl9oZWlnaHRcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoY29udGFpbmVyLCB7XG4gICAgICAgIHpvb206IHRoaXMuX3pvb21cbiAgICAgIH0pO1xuXG4gICAgICAvLyBBcHBseSBvdXIgc2VhcmNoIGRhdGEgdG8gb3VyIEdvb2dsZU1hcFxuICAgICAgbGV0IGJvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoKTtcblxuICAgICAgaWYgKG1hcERhdGEgJiYgbWFwRGF0YS5tYXBNYXJrZXJzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBjb2xsYXBzZWRNYXJrZXJzID0gdGhpcy5fY29sbGFwc2VQaW5zXG4gICAgICAgICAgPyB0aGlzLl9jb2xsYXBzZU1hcmtlcnMobWFwRGF0YS5tYXBNYXJrZXJzKVxuICAgICAgICAgIDogbWFwRGF0YS5tYXBNYXJrZXJzO1xuICAgICAgICBsZXQgZ29vZ2xlTWFwTWFya2VyQ29uZmlncyA9IEdvb2dsZU1hcE1hcmtlckNvbmZpZy5mcm9tKFxuICAgICAgICAgIGNvbGxhcHNlZE1hcmtlcnMsXG4gICAgICAgICAgdGhpcy5fcGluQ29uZmlnLFxuICAgICAgICAgIHRoaXMubWFwKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcihnb29nbGVNYXBNYXJrZXJDb25maWdzW2ldKTtcbiAgICAgICAgICBpZiAodGhpcy5fb25QaW5DbGljaykge1xuICAgICAgICAgICAgbWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuX29uUGluQ2xpY2soY29sbGFwc2VkTWFya2Vyc1tpXS5pdGVtKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvdW5kcy5leHRlbmQobWFya2VyLnBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhib3VuZHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tYXAuc2V0Q2VudGVyKG5ldyBnb29nbGUubWFwcy5MYXRMbmcodGhpcy5fZGVmYXVsdFBvc2l0aW9uLmxhdCwgdGhpcy5fZGVmYXVsdFBvc2l0aW9uLmxuZykpO1xuICAgICAgfVxuICAgIH0sIDEwMCk7XG4gIH1cbn1cblxuLy8gVE9ETyhiaWxseSkgTW92ZSB0byBvd24gY2xhc3NcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXBNYXJrZXJDb25maWcge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBnb29nbGUgbWFwLCB0aGF0IHRoZSBtYXJrZXIgaXMgYXBwZW5kZWQgdG9cbiAgICAgKiBAdHlwZSB7R29vZ2xlTWFwfVxuICAgICAqL1xuICAgIHRoaXMubWFwID0gb3B0cy5tYXAgfHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBtYXJrZXIgKGxhdC9sbmcpXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLnBvc2l0aW9uID0gb3B0cy5wb3NpdGlvbiB8fCB7XG4gICAgICBsYXQ6IHVuZGVmaW5lZCxcbiAgICAgIGxuZzogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBwcm9wZXJ0aWVzL3NldHRpbmdzIG9mIHRoZSBpY29uIHVzZWQgZm9yIHRoZSBtYXJrZXJcbiAgICAgKiBlLmcuIHtcbiAgICAgKiAgICAgICAgYW5jaG9yOiB7IHg6IDAsIHk6IDAgfVxuICAgICAqICAgICAgICB1cmw6ICdwYXRoL3RvL3VybC5qcGcnXG4gICAgICogICAgICAgIHNjYWxlZFNpemU6IHsgdzogMCwgaDogMCB9XG4gICAgICogICAgICAgfVxuICAgICAqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLmljb24gPSBvcHRzLmljb24gfHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIG9mIHRoZSBtYXJrZXIgdG8gdXNlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmxhYmVsID0gb3B0cy5sYWJlbCB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhbiBhcnJheSBvZiBtYXJrZXIgY29uZmlnc1xuICAgKiBAcGFyYW0ge0dvb2dsZU1hcE1hcmtlckNvbmZpZ1tdfSBnb29nbGVNYXBNYXJrZXJDb25maWdzXG4gICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemUgKGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MpIHtcbiAgICBsZXQgc2VyaWFsaXplZE1hcmtlcnMgPSBbXTtcbiAgICBnb29nbGVNYXBNYXJrZXJDb25maWdzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgc2VyaWFsaXplZE1hcmtlcnMucHVzaChgbWFya2Vycz1sYWJlbDoke21hcmtlci5sYWJlbH18JHttYXJrZXIucG9zaXRpb24ubGF0fSwke21hcmtlci5wb3NpdGlvbi5sbmd9YCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZWRNYXJrZXJzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgc3RvcmFnZSBkYXRhIG1vZGVsIG9mIG1hcmtlcnMgaW50byBHb29nbGVBUElNYXJrZXJcbiAgICogQHBhcmFtIHtvYmplY3RbXX0gbWFya2VycyBUaGUgZGF0YSBvZiB0aGUgbWFya2VyXG4gICAqIEBwYXJhbSB7KE9iamVjdHxmdW5jdGlvbil9IHBpbkNvbmZpZyBUaGUgY29uZmlndXJhdGlvbiB0byBhcHBseSB0byB0aGUgbWFya2VyXG4gICAqIEBwYXJhbSB7R29vZ2xlTWFwfSBtYXAgcmVmZXJlbmNlIHRvIHRoZSBnb29nbGUgbWFwIHRvIGFwcGx5IHRoZSBtYXJrZXIgdG9cbiAgICogQHJldHVybnMge0dvb2dsZU1hcE1hcmtlckNvbmZpZ1tdfVxuICAgKi9cbiAgc3RhdGljIGZyb20gKG1hcmtlcnMsIHBpbkNvbmZpZywgbWFwKSB7XG4gICAgbGV0IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MgPSBbXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobWFya2VycykpIHtcbiAgICAgIG1hcmtlcnMgPSBbbWFya2Vyc107XG4gICAgfVxuXG4gICAgbWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIC8vIFN1cHBvcnQgY29uZmlndXJhdGlvbiBhcyBhIGZ1bmN0aW9uXG4gICAgICBsZXQgcGluQ29uZmlnT2JqID0gcGluQ29uZmlnO1xuICAgICAgaWYgKHR5cGVvZiBwaW5Db25maWcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcGluQ29uZmlnT2JqID0gcGluQ29uZmlnKFxuICAgICAgICAgIG1hcmtlci5pdGVtLFxuICAgICAgICAgIE1hcFByb3ZpZGVyLkRFRkFVTFRfUElOX0NPTkZJRyxcbiAgICAgICAgICBtYXJrZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyBUcmFuc2Zvcm0gb3VyIENvbmZpZ3VyYXRpb24gT2JqZWN0IGludG8gdGhlIGV4cGVjdGVkXG4gICAgICAvLyBHb29nbGUgQVBJIGZvcm1hdC5cbiAgICAgIGxldCBpY29uID0ge307XG4gICAgICBpZiAocGluQ29uZmlnT2JqLmFuY2hvcikge1xuICAgICAgICBpY29uLmFuY2hvciA9IGdvb2dsZS5tYXBzLlBvaW50KHBpbkNvbmZpZ09iai5hbmNob3IueCwgcGluQ29uZmlnT2JqLmFuY2hvci55KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpbkNvbmZpZ09iai5zY2FsZWRTaXplKSB7XG4gICAgICAgIGljb24uc2NhbGVkU2l6ZSA9IG5ldyBnb29nbGUubWFwcy5TaXplKHBpbkNvbmZpZ09iai5zY2FsZWRTaXplLncsIHBpbkNvbmZpZ09iai5zY2FsZWRTaXplLmgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluQ29uZmlnT2JqLnVybCkge1xuICAgICAgICBpY29uLnVybCA9IHBpbkNvbmZpZ09iai51cmw7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW5Db25maWdPYmouc3ZnKSB7XG4gICAgICAgIGljb24udXJsID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCAke2VuY29kZVVSSUNvbXBvbmVudChwaW5Db25maWdPYmouc3ZnKX1gO1xuICAgICAgfVxuXG4gICAgICBsZXQgbGFiZWw7XG4gICAgICBpZiAocGluQ29uZmlnT2JqLmxhYmVsKSB7XG4gICAgICAgIGxhYmVsID0gcGluQ29uZmlnT2JqLmxhYmVsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFiZWwgPSBtYXJrZXIubGFiZWwudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgLy8gTk9URShiaWxseSkgR29vZ2xlIG1hcHMgZG9lc24ndCBoYW5kbGUgZW1wdHkgaWNvbiBvYmplY3RzIG5pY2VseVxuICAgICAgLy8gTWFrZSBnb29nbGUgbWFwcyBoYXBweSBpZiBubyBzZXR0aW5ncyBmb3IgaWNvbiBhcmUgcHJvdmlkZWQ7XG4gICAgICBpZiAoT2JqZWN0LmtleXMoaWNvbikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGljb24gPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MucHVzaChcbiAgICAgICAgbmV3IEdvb2dsZU1hcE1hcmtlckNvbmZpZyh7XG4gICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIGxhdDogbWFya2VyLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG5nOiBtYXJrZXIubG9uZ2l0dWRlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpY29uOiBpY29uLFxuICAgICAgICAgIGxhYmVsOiBsYWJlbFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBnb29nbGVNYXBNYXJrZXJDb25maWdzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNYXBCb3hNYXBQcm92aWRlciAqL1xuXG5pbXBvcnQgTWFwUHJvdmlkZXIgZnJvbSAnLi9tYXBwcm92aWRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uLy4uL2RvbS9kb20nO1xuXG4vKiBnbG9iYWwgbWFwYm94Z2wgKi9cblxuLyoqXG4gKiBNYXBCb3hNYXBQcm92aWRlciBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiBhIE1hcFByb3ZpZGVyXG4gKiB0aGF0IGhhbmRsZXMgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIHRoaXJkIHBhcnR5IEFQSSB0byBleHBvc2UgbWFwcy5cbiAqIEBleHRlbmRzIE1hcFByb3ZpZGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcEJveE1hcFByb3ZpZGVyIGV4dGVuZHMgTWFwUHJvdmlkZXIge1xuICAvKipcbiAgICogTG9hZCB0aGUgZXh0ZXJuYWwgSlMgTGlicmFyeVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkxvYWQgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdG8gaW52b2tlIG9uY2UgdGhlIEpTIGlzIGxvYWRlZC5cbiAgICovXG4gIGxvYWRKUyAob25Mb2FkKSB7XG4gICAgbGV0IHNjcmlwdCA9IERPTS5jcmVhdGVFbCgnc2NyaXB0Jywge1xuICAgICAgaWQ6ICd5ZXh0LW1hcC1qcycsXG4gICAgICBvbmxvYWQ6ICgpID0+IHtcbiAgICAgICAgdGhpcy5faXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICBtYXBib3hnbC5hY2Nlc3NUb2tlbiA9IHRoaXMuX2FwaUtleTtcblxuICAgICAgICBpZiAodHlwZW9mIG9uTG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG9uTG9hZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9vbkxvYWRlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMuX29uTG9hZGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIHNyYzogJ2h0dHBzOi8vYXBpLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL3YwLjQ0LjEvbWFwYm94LWdsLmpzJ1xuICAgIH0pO1xuXG4gICAgbGV0IGNzcyA9IERPTS5jcmVhdGVFbCgnbGluaycsIHtcbiAgICAgIGlkOiAneWV4dC1tYXAtY3NzJyxcbiAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vYXBpLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL3YwLjQ0LjEvbWFwYm94LWdsLmNzcydcbiAgICB9KTtcblxuICAgIERPTS5hcHBlbmQoJ2JvZHknLCBjc3MpO1xuICAgIERPTS5hcHBlbmQoJ2JvZHknLCBzY3JpcHQpO1xuICB9XG5cbiAgZ2VuZXJhdGVTdGF0aWMgKG1hcERhdGEpIHtcbiAgICBsZXQgbWFwYm94TWFwTWFya2VyQ29uZmlncyA9IE1hcEJveE1hcmtlckNvbmZpZy5mcm9tKFxuICAgICAgbWFwRGF0YS5tYXBNYXJrZXJzLFxuICAgICAgdGhpcy5fcGluQ29uZmlnXG4gICAgKTtcblxuICAgIGxldCBjZW50ZXIgPSBtYXBEYXRhLm1hcENlbnRlcjtcbiAgICBsZXQgd2lkdGggPSB0aGlzLl93aWR0aCB8fCA2MDA7XG4gICAgbGV0IGhlaWdodCA9IHRoaXMuX2hlaWdodCB8fCAyMDA7XG4gICAgbGV0IHpvb20gPSB0aGlzLl96b29tIHx8IDk7XG5cbiAgICBsZXQgZW5jb2RlZE1hcmtlcnMgPSBNYXBCb3hNYXJrZXJDb25maWcuc2VyaWFsaXplKG1hcGJveE1hcE1hcmtlckNvbmZpZ3MpO1xuICAgIHJldHVybiBgPGltZyBzcmM9XCJodHRwczovL2FwaS5tYXBib3guY29tL3N0eWxlcy92MS9tYXBib3gvc3RyZWV0cy12MTEvc3RhdGljLyR7ZW5jb2RlZE1hcmtlcnN9LyR7Y2VudGVyLmxvbmdpdHVkZX0sJHtjZW50ZXIubGF0aXR1ZGV9LCR7em9vbX0vYXV0by8ke3dpZHRofXgke2hlaWdodH0/YWNjZXNzX3Rva2VuPSR7dGhpcy5fYXBpS2V5fVwiPmA7XG4gIH1cblxuICBpbml0IChlbCwgbWFwRGF0YSkge1xuICAgIGlmICgoIW1hcERhdGEgfHwgbWFwRGF0YS5tYXBNYXJrZXJzLmxlbmd0aCA8PSAwKSAmJiAhdGhpcy5fc2hvd0VtcHR5TWFwKSB7XG4gICAgICB0aGlzLl9tYXAgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRhaW5lciA9IERPTS5xdWVyeShlbCk7XG4gICAgRE9NLmNzcyhjb250YWluZXIsIHtcbiAgICAgIHdpZHRoOiB0aGlzLl93aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5faGVpZ2h0XG4gICAgfSk7XG5cbiAgICB0aGlzLl9tYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgem9vbTogdGhpcy5fem9vbSxcbiAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXY5JyxcbiAgICAgIGNlbnRlcjogdGhpcy5nZXRDZW50ZXJNYXJrZXIobWFwRGF0YSlcbiAgICB9KTtcblxuICAgIGlmIChtYXBEYXRhKSB7XG4gICAgICBjb25zdCBjb2xsYXBzZWRNYXJrZXJzID0gdGhpcy5fY29sbGFwc2VQaW5zXG4gICAgICAgID8gdGhpcy5fY29sbGFwc2VNYXJrZXJzKG1hcERhdGEubWFwTWFya2VycylcbiAgICAgICAgOiBtYXBEYXRhLm1hcE1hcmtlcnM7XG4gICAgICBjb25zdCBtYXBib3hNYXBNYXJrZXJDb25maWdzID0gTWFwQm94TWFya2VyQ29uZmlnLmZyb20oXG4gICAgICAgIGNvbGxhcHNlZE1hcmtlcnMsXG4gICAgICAgIHRoaXMuX3BpbkNvbmZpZyxcbiAgICAgICAgdGhpcy5fbWFwKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXBib3hNYXBNYXJrZXJDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB3cmFwcGVyID0gbWFwYm94TWFwTWFya2VyQ29uZmlnc1tpXS53cmFwcGVyO1xuICAgICAgICBsZXQgY29vcmRzID0gbmV3IG1hcGJveGdsLkxuZ0xhdChcbiAgICAgICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzW2ldLnBvc2l0aW9uLmxvbmdpdHVkZSxcbiAgICAgICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzW2ldLnBvc2l0aW9uLmxhdGl0dWRlKTtcbiAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBtYXBib3hnbC5NYXJrZXIod3JhcHBlcikuc2V0TG5nTGF0KGNvb3Jkcyk7XG4gICAgICAgIG1hcmtlci5hZGRUbyh0aGlzLl9tYXApO1xuICAgICAgICBpZiAodGhpcy5fb25QaW5DbGljaykge1xuICAgICAgICAgIG1hcmtlci5nZXRFbGVtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLl9vblBpbkNsaWNrKGNvbGxhcHNlZE1hcmtlcnNbaV0uaXRlbSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2VudGVyTWFya2VyIChtYXBEYXRhKSB7XG4gICAgcmV0dXJuIG1hcERhdGEgJiYgbWFwRGF0YS5tYXBDZW50ZXIgJiYgbWFwRGF0YS5tYXBDZW50ZXIubG9uZ2l0dWRlICYmIG1hcERhdGEubWFwQ2VudGVyLmxhdGl0dWRlXG4gICAgICA/IFttYXBEYXRhLm1hcENlbnRlci5sb25naXR1ZGUsIG1hcERhdGEubWFwQ2VudGVyLmxhdGl0dWRlXVxuICAgICAgOiB7IGxuZzogdGhpcy5fZGVmYXVsdFBvc2l0aW9uLmxuZywgbGF0OiB0aGlzLl9kZWZhdWx0UG9zaXRpb24ubGF0IH07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hcEJveE1hcmtlckNvbmZpZyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIG1hcGJveCBtYXAsIHRoYXQgdGhlIG1hcmtlciBpcyBhcHBlbmRlZCB0b1xuICAgICAqIEB0eXBlIHtNYXBCb3h9XG4gICAgICovXG4gICAgdGhpcy5tYXAgPSBvcHRzLm1hcCB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1hcmtlciAobGF0L2xuZylcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMucG9zaXRpb24gPSBvcHRzLnBvc2l0aW9uIHx8IHtcbiAgICAgIGxhdGl0dWRlOiB1bmRlZmluZWQsXG4gICAgICBsb25naXR1ZGU6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaHRtbCBlbGVtZW50IHRvIGJlIHVzZWQgYXMgdGhlIG1hcCBtYXJrZXJcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMud3JhcHBlciA9IG9wdHMud3JhcHBlciB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgb2YgdGhlIG1hcmtlciB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWwgPSBvcHRzLmxhYmVsIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB1cmwgb2YgdGhlIHBpbiBmb3IgdGhlIHN0YXRpYyBtYXBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc3RhdGljTWFwUGluID0gb3B0cy5zdGF0aWNNYXBQaW4gfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYW4gYXJyYXkgb2YgbWFya2VyIGNvbmZpZ3NcbiAgICogQHBhcmFtIHtNYXBCb3hNYXJrZXJDb25maWdbXX0gbWFwYm94TWFwTWFya2VyQ29uZmlnc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplIChtYXBib3hNYXBNYXJrZXJDb25maWdzKSB7XG4gICAgbGV0IHNlcmlhbGl6ZWRNYXJrZXJzID0gW107XG4gICAgbWFwYm94TWFwTWFya2VyQ29uZmlncy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIGlmIChtYXJrZXIuc3RhdGljTWFwUGluKSB7XG4gICAgICAgIHNlcmlhbGl6ZWRNYXJrZXJzLnB1c2goYHVybC0ke21hcmtlci5zdGF0aWNNYXBQaW59KCR7bWFya2VyLnBvc2l0aW9uLmxvbmdpdHVkZX0sJHttYXJrZXIucG9zaXRpb24ubGF0aXR1ZGV9KWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VyaWFsaXplZE1hcmtlcnMucHVzaChgcGluLXMtJHttYXJrZXIubGFiZWx9KCR7bWFya2VyLnBvc2l0aW9uLmxvbmdpdHVkZX0sJHttYXJrZXIucG9zaXRpb24ubGF0aXR1ZGV9KWApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZXJpYWxpemVkTWFya2Vycy5qb2luKCcsJyk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIHN0b3JhZ2UgZGF0YSBtb2RlbCBvZiBtYXJrZXJzIGludG8gR29vZ2xlQVBJTWFya2VyXG4gICAqIEBwYXJhbSB7TWFwQm94fSBBIHJlZmVyZW5jZSB0byB0aGUgZ29vZ2xlIG1hcCB0byBhcHBseSB0aGUgbWFya2VyIHRvXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IG1hcmtlcnMgVGhlIGRhdGEgb2YgdGhlIG1hcmtlclxuICAgKiBAcGFyYW0ge09iamVjdH0gcGluQ29uZmlnIFRoZSBjb25maWd1cmF0aW9uIHRvIGFwcGx5IHRvIHRoZSBtYXJrZXJcbiAgICogQHJldHVybnMge01hcEJveE1hcmtlckNvbmZpZ1tdfVxuICAgKi9cbiAgc3RhdGljIGZyb20gKG1hcmtlcnMsIHBpbkNvbmZpZywgbWFwKSB7XG4gICAgbGV0IG1hcGJveE1hcE1hcmtlckNvbmZpZ3MgPSBbXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobWFya2VycykpIHtcbiAgICAgIG1hcmtlcnMgPSBbbWFya2Vyc107XG4gICAgfVxuXG4gICAgbWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIC8vIFN1cHBvcnQgY29uZmlndXJhdGlvbiBhcyBhIGZ1bmN0aW9uXG4gICAgICBsZXQgcGluQ29uZmlnT2JqID0gcGluQ29uZmlnO1xuICAgICAgaWYgKHR5cGVvZiBwaW5Db25maWcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcGluQ29uZmlnT2JqID0gcGluQ29uZmlnKFxuICAgICAgICAgIG1hcmtlci5pdGVtLFxuICAgICAgICAgIE1hcFByb3ZpZGVyLkRFRkFVTFRfUElOX0NPTkZJRyxcbiAgICAgICAgICBtYXJrZXIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB3cmFwcGVyID0gcGluQ29uZmlnT2JqLndyYXBwZXIgPyBwaW5Db25maWdPYmoud3JhcHBlciA6IG51bGw7XG4gICAgICBjb25zdCBzdGF0aWNNYXBQaW4gPSBwaW5Db25maWdPYmouc3RhdGljTWFwUGluID8gcGluQ29uZmlnT2JqLnN0YXRpY01hcFBpbiA6IG51bGw7XG5cbiAgICAgIG1hcGJveE1hcE1hcmtlckNvbmZpZ3MucHVzaChcbiAgICAgICAgbmV3IE1hcEJveE1hcmtlckNvbmZpZyh7XG4gICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIGxhdGl0dWRlOiBtYXJrZXIubGF0aXR1ZGUsXG4gICAgICAgICAgICBsb25naXR1ZGU6IG1hcmtlci5sb25naXR1ZGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHdyYXBwZXI6IHdyYXBwZXIsXG4gICAgICAgICAgbGFiZWw6IG1hcmtlci5sYWJlbCxcbiAgICAgICAgICBzdGF0aWNNYXBQaW46IHN0YXRpY01hcFBpblxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtYXBib3hNYXBNYXJrZXJDb25maWdzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNYXBDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5pbXBvcnQgR29vZ2xlTWFwUHJvdmlkZXIgZnJvbSAnLi9wcm92aWRlcnMvZ29vZ2xlbWFwcHJvdmlkZXInO1xuaW1wb3J0IE1hcEJveE1hcFByb3ZpZGVyIGZyb20gJy4vcHJvdmlkZXJzL21hcGJveG1hcHByb3ZpZGVyJztcblxuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbmNvbnN0IFByb3ZpZGVyVHlwZXMgPSB7XG4gICdnb29nbGUnOiBHb29nbGVNYXBQcm92aWRlcixcbiAgJ21hcGJveCc6IE1hcEJveE1hcFByb3ZpZGVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIHRoaXMgY29tcG9uZW50IHRvIGxpc3RlbiB0byB0aGUgc3RvcmFnZSBiYXNlZCBvbiB0aGlzIGtleVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWxpYXNlZCB1c2VkIHRvIGRldGVybWluZSB0aGUgdHlwZSBvZiBtYXAgcHJvdmlkZXIgdG8gdXNlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9tYXBQcm92aWRlciA9IG9wdHMubWFwUHJvdmlkZXI7XG4gICAgaWYgKCF0aGlzLl9tYXBQcm92aWRlciB8fCAhKHRoaXMuX21hcFByb3ZpZGVyLnRvTG93ZXJDYXNlKCkgaW4gUHJvdmlkZXJUeXBlcykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWFwQ29tcG9uZW50OiBJbnZhbGlkIE1hcCBQcm92aWRlcjsgbXVzdCBiZSBgZ29vZ2xlYCBvciBgbWFwQm94YCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIGluZGljYXRpb24gb2Ygd2hldGhlciBvciBub3QgdG8gdXNlIGEgc3RhdGljIG9yIGR5bmFtaWMgbWFwXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5faXNTdGF0aWMgPSBvcHRzLmlzU3RhdGljIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gYW4gaW5zdGFuY2Ugb2YgdGhlIHtNYXBQcm92aWRlcn0gdGhhdCdzIGNvbnN0cnVjdGVkXG4gICAgICogQHR5cGUge01hcFByb3ZpZGVyfVxuICAgICAqL1xuICAgIHRoaXMuX21hcCA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTWFwJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9tYXAnO1xuICB9XG5cbiAgLy8gVE9ETyhiaWxseSkgTWFrZSBQcm92aWRlclR5cGVzIGEgZmFjdG9yeSBjbGFzc1xuICBnZXRQcm92aWRlckluc3RhbmNlICh0eXBlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm92aWRlclR5cGVzW3R5cGUudG9Mb3dlckNhc2UoKV0odGhpcy5fY29uZmlnKTtcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICB0aGlzLl9tYXAgPSB0aGlzLmdldFByb3ZpZGVySW5zdGFuY2UodGhpcy5fbWFwUHJvdmlkZXIpO1xuICAgIGxldCBtYXBEYXRhID0gdGhpcy5nZXRTdGF0ZSgnbWFwJyk7XG4gICAgaWYgKG1hcERhdGEgPT09IHVuZGVmaW5lZCAmJiB0aGlzLl9pc1N0YXRpYykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU3RhdGljKSB7XG4gICAgICAvLyBUT0RPKGJpbGx5KSBUaGUgZXhpc3RpbmcgdGVtcGxhdGUgc2hvdWxkIGp1c3QgdGFrZSBpbiB0aGUgbWFwIGBpbWdVUkxgIGFzIGRhdGFcbiAgICAgIC8vIEluc3RlYWQgb2Ygb3ZlcnJpZGluZyB0aGUgdGVtcGxhdGUgbGlrZSBzbywgYnV0IE5CRCBmb3Igbm93LlxuICAgICAgdGhpcy5zZXRUZW1wbGF0ZSh0aGlzLl9tYXAuZ2VuZXJhdGVTdGF0aWMobWFwRGF0YSkpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fbWFwLmxvYWRKUygpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgdGhpcy5fbWFwLm9uTG9hZGVkKCgpID0+IHtcbiAgICAgIHRoaXMuX21hcC5pbml0KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5nZXRTdGF0ZSgnbWFwJykpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShkYXRhLCB2YWwpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBSZXN1bHRzQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vZXZlbnRyZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9wZW9wbGVyZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgTWFwQ29tcG9uZW50IGZyb20gJy4uL21hcC9tYXBjb21wb25lbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcblxuY29uc3QgUmVzdWx0VHlwZSA9IHtcbiAgRVZFTlQ6ICdldmVudCcsXG4gIExPQ0FUSU9OOiAnbG9jYXRpb24nLFxuICBQRU9QTEU6ICdwZW9wbGUnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHRzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIHZlcnRpY2FsQ29uZmlnSWQgdXNlZCBmb3IgYW5hbHl0aWNzIGFuZCBwYXNzZWQgdG8gY2hpbGRyZW5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxDb25maWdJZCA9IGNvbmZpZy52ZXJ0aWNhbENvbmZpZ0lkO1xuXG4gICAgLyoqXG4gICAgICogaXNVbml2ZXJzYWwgaXMgc2V0IHRvIHRydWUgaWYgdGhpcyBjb21wb25lbnQgaXMgYWRkZWQgYnkgdGhlIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnRcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2lzVW5pdmVyc2FsID0gY29uZmlnLmlzVW5pdmVyc2FsIHx8IGZhbHNlO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFM7XG4gICAgdGhpcy5faXRlbUNvbmZpZyA9IHtcbiAgICAgIGdsb2JhbDoge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9LFxuICAgICAgW0V2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZV06IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIFtMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50LnR5cGVdOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH0sXG4gICAgICBbUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZV06IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoY29uZmlnLnJlbmRlckl0ZW0gPT09IHVuZGVmaW5lZCAmJiBjb25maWcuX3BhcmVudE9wdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uZmlnLnJlbmRlckl0ZW0gPSBjb25maWcuX3BhcmVudE9wdHMucmVuZGVySXRlbTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLml0ZW1UZW1wbGF0ZSA9PT0gdW5kZWZpbmVkICYmIGNvbmZpZy5fcGFyZW50T3B0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25maWcuaXRlbVRlbXBsYXRlID0gY29uZmlnLl9wYXJlbnRPcHRzLml0ZW1UZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmxpbWl0KSB7XG4gICAgICBjb25zdCBsaW1pdCA9IGNvbmZpZy5saW1pdDtcbiAgICAgIGlmICh0eXBlb2YgbGltaXQgIT09ICdudW1iZXInIHx8IGxpbWl0IDwgMSB8fCBsaW1pdCA+IDUwKSB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoJ1NlYXJjaCBMaW1pdCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNTAnLCAnVmVydGljYWxSZXN1bHRzJyk7XG4gICAgICB9XG4gICAgICB0aGlzLmNvcmUuc2V0U2VhcmNoTGltaXQobGltaXQpO1xuICAgIH1cblxuICAgIHRoaXMuY29uZmlndXJlSXRlbSh7XG4gICAgICByZW5kZXI6IGNvbmZpZy5yZW5kZXJJdGVtLFxuICAgICAgdGVtcGxhdGU6IGNvbmZpZy5pdGVtVGVtcGxhdGVcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB1cmwgdG8gdGhlIHVuaXZlcnNhbCBwYWdlIGZvciB0aGUgbm8gcmVzdWx0cyBwYWdlIHRvIGxpbmsgYmFjayB0byB3aXRoIGN1cnJlbnQgcXVlcnlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5fdW5pdmVyc2FsVXJsID0gY29uZmlnLnVuaXZlcnNhbFVybDtcbiAgfVxuXG4gIG1vdW50ICgpIHtcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5nZXRTdGF0ZSgpKS5sZW5ndGggPiAwKSB7XG4gICAgICBzdXBlci5tb3VudCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RhdGljIGdldCBkdXBsaWNhdGVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSwgdmFsKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IGRhdGEucmVzdWx0cyB8fCBbXTtcbiAgICBjb25zdCBzZWFyY2hTdGF0ZSA9IGRhdGEuc2VhcmNoU3RhdGUgfHwgU2VhcmNoU3RhdGVzLlBSRV9TRUFSQ0g7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oeyByZXN1bHRzOiBbXSB9LCBkYXRhLCB7XG4gICAgICBpc1ByZVNlYXJjaDogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5QUkVfU0VBUkNILFxuICAgICAgaXNTZWFyY2hMb2FkaW5nOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlNFQVJDSF9MT0FESU5HLFxuICAgICAgaXNTZWFyY2hDb21wbGV0ZTogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5TRUFSQ0hfQ09NUExFVEUsXG4gICAgICBpbmNsdWRlTWFwOiB0aGlzLl9jb25maWcuaW5jbHVkZU1hcCxcbiAgICAgIG1hcENvbmZpZzogdGhpcy5fY29uZmlnLm1hcENvbmZpZyxcbiAgICAgIGV2ZW50T3B0aW9uczogdGhpcy5ldmVudE9wdGlvbnMoKSxcbiAgICAgIHVuaXZlcnNhbFVybDogdGhpcy5fdW5pdmVyc2FsVXJsID8gdGhpcy5fdW5pdmVyc2FsVXJsICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCA6ICcnLFxuICAgICAgc2hvd05vUmVzdWx0czogcmVzdWx0cy5sZW5ndGggPT09IDAsXG4gICAgICBxdWVyeTogdGhpcy5jb3JlLmdsb2JhbFN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpXG4gICAgfSksIHZhbCk7XG4gIH1cblxuICAvKipcbiAgICogaGVscGVyIHRvIGNvbnN0cnVjdCB0aGUgZXZlbnRPcHRpb25zIG9iamVjdCBmb3IgdGhlIHZpZXcgYWxsIGxpbmtcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGV2ZW50T3B0aW9ucyAoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHZlcnRpY2FsQ29uZmlnSWQ6IHRoaXMuX3ZlcnRpY2FsQ29uZmlnSWRcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdWZXJ0aWNhbFJlc3VsdHMnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL3Jlc3VsdHMnO1xuICB9XG5cbiAgY29uZmlndXJlSXRlbSAoY29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLl9pdGVtQ29uZmlnLmdsb2JhbC5yZW5kZXIgPSBjb25maWcucmVuZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29uZmlnLnJlbmRlcikge1xuICAgICAgICB0aGlzLnNldEl0ZW1SZW5kZXIoa2V5LCBjb25maWcucmVuZGVyW2tleV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRlbXBsYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5faXRlbUNvbmZpZy5nbG9iYWwudGVtcGxhdGUgPSBjb25maWcudGVtcGxhdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb25maWcudGVtcGxhdGUpIHtcbiAgICAgICAgdGhpcy5zZXRJdGVtVGVtcGxhdGUoa2V5LCBjb25maWcudGVtcGxhdGVba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0SXRlbVRlbXBsYXRlICh0eXBlLCB0ZW1wbGF0ZSkge1xuICAgIGxldCBjbGF6eiA9IHRoaXMuZ2V0SXRlbUNvbXBvbmVudCh0eXBlKTtcbiAgICB0aGlzLl9pdGVtQ29uZmlnW2NsYXp6LnR5cGVdLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gIH1cblxuICBzZXRJdGVtUmVuZGVyICh0eXBlLCByZW5kZXIpIHtcbiAgICBsZXQgY2xhenogPSB0aGlzLmdldEl0ZW1Db21wb25lbnQodHlwZSk7XG4gICAgdGhpcy5faXRlbUNvbmZpZ1tjbGF6ei50eXBlXS5yZW5kZXIgPSByZW5kZXI7XG4gIH1cblxuICBnZXRJdGVtQ29tcG9uZW50ICh0eXBlKSB7XG4gICAgbGV0IGNvbXAgPSBSZXN1bHRzSXRlbUNvbXBvbmVudDtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUmVzdWx0VHlwZS5FVkVOVDpcbiAgICAgICAgY29tcCA9IEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSZXN1bHRUeXBlLkxPQ0FUSU9OOlxuICAgICAgICBjb21wID0gTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJlc3VsdFR5cGUuUEVPUExFOlxuICAgICAgICBjb21wID0gUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wO1xuICB9XG5cbiAgYWRkQ2hpbGQgKGRhdGEsIHR5cGUsIG9wdHMpIHtcbiAgICAvLyBUT0RPKGJpbGx5KSBSZWZhY3RvciB0aGUgd2F5IGNvbmZpZ3VyYXRpb24gYW5kIGRhdGEgZmxvd3NcbiAgICAvLyB0aHJvdWdoIHRvcCBsZXZlbCBjb21wb25lbnRzIHRvIGNoaWxkIGNvbXBvbmVudHMuXG4gICAgaWYgKHR5cGUgPT09IFJlc3VsdHNJdGVtQ29tcG9uZW50LnR5cGUpIHtcbiAgICAgIGxldCBjbGF6eiA9IHRoaXMuZ2V0SXRlbUNvbXBvbmVudChkYXRhLnR5cGUpO1xuICAgICAgaWYgKGNsYXp6KSB7XG4gICAgICAgIHR5cGUgPSBjbGF6ei50eXBlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gTWFwQ29tcG9uZW50LnR5cGUpIHtcbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIG1hcDogZGF0YVxuICAgICAgfTtcbiAgICAgIGNvbnN0IG5ld09wdHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcubWFwQ29uZmlnLCBvcHRzKTtcbiAgICAgIHJldHVybiBzdXBlci5hZGRDaGlsZChkYXRhLCB0eXBlLCBuZXdPcHRzKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB0aGUgcHJvcGVyIGl0ZW0gcmVuZGVycyB0byB0aGUgdGhlIGNvbXBvbmVudHNcbiAgICAvLyBoYXZlIGp1c3QgYmVlbiBjb25zdHJ1Y3RlZC4gUHJpb3JpdGl6ZSBnbG9iYWwgb3ZlciBpbmRpdmlkdWFsIGl0ZW1zLlxuICAgIGxldCBjb21wID0gc3VwZXIuYWRkQ2hpbGQoZGF0YSwgdHlwZSwgT2JqZWN0LmFzc2lnbihvcHRzLCB7XG4gICAgICB2ZXJ0aWNhbENvbmZpZ0lkOiB0aGlzLl92ZXJ0aWNhbENvbmZpZ0lkLFxuICAgICAgaXNVbml2ZXJzYWw6IHRoaXMuX2lzVW5pdmVyc2FsXG4gICAgfSkpO1xuICAgIGxldCBnbG9iYWxDb25maWcgPSB0aGlzLl9pdGVtQ29uZmlnLmdsb2JhbDtcbiAgICBsZXQgaXRlbUNvbmZpZyA9IHRoaXMuX2l0ZW1Db25maWdbY29tcC50eXBlXTtcbiAgICBsZXQgaGFzR2xvYmFsUmVuZGVyID0gdHlwZW9mIGdsb2JhbENvbmZpZy5yZW5kZXIgPT09ICdmdW5jdGlvbic7XG4gICAgbGV0IGhhc0dsb2JhbFRlbXBsYXRlID0gdHlwZW9mIGdsb2JhbENvbmZpZy50ZW1wbGF0ZSA9PT0gJ3N0cmluZyc7XG5cbiAgICBpZiAoaGFzR2xvYmFsUmVuZGVyKSB7XG4gICAgICBjb21wLnNldFJlbmRlcihnbG9iYWxDb25maWcucmVuZGVyKTtcbiAgICB9XG5cbiAgICBpZiAoaGFzR2xvYmFsVGVtcGxhdGUpIHtcbiAgICAgIGNvbXAuc2V0VGVtcGxhdGUoZ2xvYmFsQ29uZmlnLnRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICBpZiAoIWl0ZW1Db25maWcpIHtcbiAgICAgIHJldHVybiBjb21wO1xuICAgIH1cblxuICAgIGlmICghaGFzR2xvYmFsUmVuZGVyICYmIGl0ZW1Db25maWcucmVuZGVyKSB7XG4gICAgICBjb21wLnNldFJlbmRlcihpdGVtQ29uZmlnLnJlbmRlcik7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdGVtcGxhdGUgc3BlY2lmaWMgc2l0dWF0aW9uXG4gICAgaWYgKCFoYXNHbG9iYWxUZW1wbGF0ZSAmJiBpdGVtQ29uZmlnLnRlbXBsYXRlKSB7XG4gICAgICBjb21wLnNldFRlbXBsYXRlKGl0ZW1Db25maWcudGVtcGxhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gY29tcDtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudCAqL1xuaW1wb3J0IFJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgQW5hbHl0aWNzRXZlbnQgZnJvbSAnLi4vLi4vLi4vY29yZS9hbmFseXRpY3MvYW5hbHl0aWNzZXZlbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBiYXNlIHNlbGVjdG9yIHRvIHVzZSB3aGVuIGZpbmRpbmcgRE9NIHRhcmdldHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3NlbGVjdG9yQmFzZSA9IGNvbmZpZy5zZWxlY3RvckJhc2UgfHwgJy5qcy15eHQtQWNjb3JkaW9uUmVzdWx0JztcblxuICAgIC8qKlxuICAgICAqIGNvbGxhcHNlZCBzdGF0ZSBjbGFzc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5jb2xsYXBzZWRDbGFzcyA9IGNvbmZpZy5jb2xsYXBzZWRDbGFzcyB8fCAnaXMtY29sbGFwc2VkJztcblxuICAgIC8qKlxuICAgICAqIHZlcnRpY2FsIGNvbmZpZyBpZCBpcyByZXF1aXJlZCBmb3IgYW5hbHl0aWNzXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMudmVydGljYWxDb25maWdJZCA9IGNvbmZpZy52ZXJ0aWNhbENvbmZpZ0lkIHx8IGNvbmZpZy5fcGFyZW50T3B0cy52ZXJ0aWNhbENvbmZpZ0lkIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogdGhlIGNvbXBvbmVudCB0eXBlXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0FjY29yZGlvblJlc3VsdHMnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL3Jlc3VsdHNhY2NvcmRpb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIG92ZXJyaWRlcyBfb25Nb3VudCB0byBhZGQgYmluZGluZ3MgdG8gY2hhbmdlIHRoZSBoZWlnaHQgb24gY2xpY2tcbiAgICogQHJldHVybnMge0FjY29yZGlvblJlc3VsdHNDb21wb25lbnR9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgX29uTW91bnQgKCkge1xuICAgIHN1cGVyLl9vbk1vdW50KCk7XG5cbiAgICBjb25zdCBhY2NvcmRpb25FbHMgPSBET00ucXVlcnlBbGwodGhpcy5fY29udGFpbmVyLCB0aGlzLl9zZWxlY3RvckJhc2UpO1xuICAgIGFjY29yZGlvbkVscy5mb3JFYWNoKChhY2NvcmRpb25FbCkgPT4ge1xuICAgICAgY29uc3QgdG9nZ2xlRWwgPSBET00ucXVlcnkoYWNjb3JkaW9uRWwsIHRoaXMudG9nZ2xlU2VsZWN0b3IoKSk7XG4gICAgICBjb25zdCBjb250ZW50RWwgPSBET00ucXVlcnkoYWNjb3JkaW9uRWwsIHRoaXMuYm9keVNlbGVjdG9yKCkpO1xuICAgICAgdGhpcy5jaGFuZ2VIZWlnaHQoY29udGVudEVsLCBhY2NvcmRpb25FbCk7XG4gICAgICB0b2dnbGVFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayhhY2NvcmRpb25FbCwgdG9nZ2xlRWwsIGNvbnRlbnRFbCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgbW9kaWZpZXI6IHRoaXMudmVydGljYWxDb25maWdJZFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjbGljayBoYW5kbGVyIGZvciB0aGUgYWNjb3JkaW9uIHRvZ2dsZSBidXR0b25cbiAgICogQHBhcmFtIHdyYXBwZXJFbCB7SFRNTEVsZW1lbnR9IHRoZSB0b2dnbGUgY29udGFpbmVyXG4gICAqIEBwYXJhbSB0b2dnbGVFbCB7SFRNTEVsZW1lbnR9IHRoZSBidXR0b25cbiAgICogQHBhcmFtIGNvbnRlbnRFbCB7SFRNTEVsZW1lbnR9IHRoZSB0b2dnbGUgdGFyZ2V0XG4gICAqL1xuICBoYW5kbGVDbGljayAod3JhcHBlckVsLCB0b2dnbGVFbCwgY29udGVudEVsKSB7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgQW5hbHl0aWNzRXZlbnQodGhpcy5pc0NvbGxhcHNlZCh3cmFwcGVyRWwpID8gJ1JPV19FWFBBTkQnIDogJ1JPV19DT0xMQVBTRScpXG4gICAgICAuYWRkT3B0aW9ucyh7XG4gICAgICAgIHZlcnRpY2FsQ29uZmlnSWQ6IHRoaXMudmVydGljYWxDb25maWdJZCxcbiAgICAgICAgZW50aXR5SWQ6IHRvZ2dsZUVsLmRhdGFzZXQuZW50aXR5SWRcbiAgICAgIH0pO1xuICAgIHdyYXBwZXJFbC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuY29sbGFwc2VkQ2xhc3MpO1xuICAgIHRoaXMuY2hhbmdlSGVpZ2h0KGNvbnRlbnRFbCwgd3JhcHBlckVsKTtcbiAgICB0b2dnbGVFbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0aGlzLmlzQ29sbGFwc2VkKHdyYXBwZXJFbCkgPyAnZmFsc2UnIDogJ3RydWUnKTtcbiAgICB0aGlzLmFuYWx5dGljc1JlcG9ydGVyLnJlcG9ydChldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0cnVlIGlmIHRoZSBlbGVtZW50IGlzIGN1cnJlbnRseSBjb2xsYXBzZWRcbiAgICogQHBhcmFtIHdyYXBwZXJFbCB7SFRNTEVsZW1lbnR9IHRoZSB0b2dnbGUgY29udGFpbmVyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNDb2xsYXBzZWQgKHdyYXBwZXJFbCkge1xuICAgIGlmICghd3JhcHBlckVsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyYXBwZXJFbC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jb2xsYXBzZWRDbGFzcyk7XG4gIH1cblxuICAvKipcbiAgICogdG9nZ2xlcyB0aGUgaGVpZ2h0IGJldHdlZW4gMCBhbmQgdGhlIGNvbnRlbnQgaGVpZ2h0IGZvciBzbW9vdGggYW5pbWF0aW9uXG4gICAqIEBwYXJhbSB0YXJnZXRFbCB7SFRNTEVsZW1lbnR9XG4gICAqIEBwYXJhbSB3cmFwcGVyRWwge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgY2hhbmdlSGVpZ2h0ICh0YXJnZXRFbCwgd3JhcHBlckVsKSB7XG4gICAgdGFyZ2V0RWwuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5pc0NvbGxhcHNlZCh3cmFwcGVyRWwpID8gMCA6IHRhcmdldEVsLnNjcm9sbEhlaWdodH1weGA7XG4gIH1cblxuICAvKipcbiAgICogaGVscGVyIGZvciBjb21wb3NpbmcgY2hpbGQgZWxlbWVudCBzZWxlY3RvcnNcbiAgICogQHBhcmFtIGNoaWxkIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBidWlsZFNlbGVjdG9yIChjaGlsZCkge1xuICAgIHJldHVybiBgJHt0aGlzLl9zZWxlY3RvckJhc2V9JHtjaGlsZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIGhlbHBlciBmb3IgdGhlIHRvZ2dsZSBidXR0b24gc2VsZWN0b3JcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHRvZ2dsZVNlbGVjdG9yICgpIHtcbiAgICByZXR1cm4gdGhpcy5idWlsZFNlbGVjdG9yKCctdG9nZ2xlJyk7XG4gIH1cblxuICAvKipcbiAgICogaGVscGVyIGZvciB0aGUgY29udGVudCBlbGVtZW50IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBib2R5U2VsZWN0b3IgKCkge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkU2VsZWN0b3IoJy1ib2R5Jyk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuaW1wb3J0IEFjY29yZGlvblJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9hY2NvcmRpb25yZXN1bHRzY29tcG9uZW50LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUUztcbiAgICB0aGlzLl9saW1pdCA9IG9wdHMubGltaXQgfHwgMTA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnVW5pdmVyc2FsUmVzdWx0cyc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvdW5pdmVyc2FscmVzdWx0cyc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGluaXQgKG9wdHMpIHtcbiAgICBzdXBlci5pbml0KG9wdHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIGNvbnN0IHNlY3Rpb25zID0gZGF0YS5zZWN0aW9ucyB8fCBbXTtcbiAgICBjb25zdCBzZWFyY2hTdGF0ZSA9IGRhdGEuc2VhcmNoU3RhdGUgfHwgU2VhcmNoU3RhdGVzLlBSRV9TRUFSQ0g7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oeyBzZWN0aW9uczogW10gfSwgZGF0YSwge1xuICAgICAgaXNQcmVTZWFyY2g6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuUFJFX1NFQVJDSCxcbiAgICAgIGlzU2VhcmNoTG9hZGluZzogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyxcbiAgICAgIGlzU2VhcmNoQ29tcGxldGU6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFLFxuICAgICAgc2hvd05vUmVzdWx0czogc2VjdGlvbnMubGVuZ3RoID09PSAwLFxuICAgICAgcXVlcnk6IHRoaXMuY29yZS5nbG9iYWxTdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKVxuICAgIH0pLCB2YWwpO1xuICB9XG5cbiAgYWRkQ2hpbGQgKGRhdGEgPSB7fSwgdHlwZSkge1xuICAgIGxldCBvcHRzID0gdGhpcy5nZXRDaGlsZENvbmZpZyhbZGF0YVsndmVydGljYWxDb25maWdJZCddXSk7XG4gICAgaWYgKG9wdHMudXNlQWNjb3JkaW9uID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gc3VwZXIuYWRkQ2hpbGQoZGF0YSwgQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudC50eXBlLCBvcHRzKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIG9wdHMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb25maWcgKGNvbmZpZ0lkKSB7XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZyA9IHtcbiAgICAgIHZlcnRpY2FsQ29uZmlnSWQ6IGNvbmZpZ0lkLFxuICAgICAgaXNVbml2ZXJzYWw6IHRydWVcbiAgICB9O1xuICAgIGxldCBjb25maWcgPSB0aGlzLl9jb25maWcuY29uZmlnO1xuICAgIGlmIChjb25maWcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRDb25maWc7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGRlZmF1bHRDb25maWcsIHRoaXMuX2NvbmZpZ1snY29uZmlnJ11bY29uZmlnSWRdIHx8IHRoaXMuX2NvbmZpZ1snY29uZmlnJ10pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFF1ZXN0aW9uU3VibWlzc2lvbiBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9xdWVzdGlvbnN1Ym1pc3Npb24nO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBBbmFseXRpY3NFdmVudCBmcm9tICcuLi8uLi8uLi9jb3JlL2FuYWx5dGljcy9hbmFseXRpY3NldmVudCc7XG5cbi8qKlxuICogQ29uZmlndXJhYmxlIG9wdGlvbnMgZm9yIHRoZSBjb21wb25lbnRcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmNvbnN0IERFRkFVTFRfQ09ORklHID0ge1xuICAvKipcbiAgICogVGhlIGVudGl0eSBpZGVudGlmaWVyIHRoYXQgdGhlIHF1ZXN0aW9uIGlzIGFzc29jaWF0ZWQgd2l0aC5cbiAgICogVGhpcyBpcyB0eXBpY2FsbHkgYW4gb3JnYW5pemF0aW9uIG9iamVjdFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgJ2VudGl0eUlkJzogbnVsbCxcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgbGFuZ3VhZ2Ugb2YgdGhlIHF1ZXN0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICAnbGFuZ3VhZ2UnOiAnRU4nLFxuXG4gIC8qKlxuICAgKiBUaGUgbWFpbiBDU1Mgc2VsZWN0b3IgdXNlZCB0byByZWZlcmVuY2UgdGhlIGZvcm0gZm9yIHRoZSBjb21wb25lbnQuXG4gICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgKi9cbiAgJ2Zvcm1TZWxlY3Rvcic6ICdmb3JtJyxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgbGFiZWwgdG8gdXNlIGZvciB0aGUgZS1tYWlsIGFkZHJlc3MgaW5wdXRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICdlbWFpbExhYmVsJzogJ0VtYWlsIEFkZHJlc3M6JyxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgbGFiZWwgdG8gdXNlIGZvciB0aGUgbmFtZSBpbnB1dFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgJ25hbWVMYWJlbCc6ICdOYW1lOicsXG5cbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIGxhYmVsIHRvIHVzZSBmb3IgdGhlIHF1ZXN0aW9uXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICAncXVlc3Rpb25MYWJlbCc6ICdXaGF0IGlzIHlvdXIgcXVlc3Rpb24/JyxcblxuICAvKipcbiAgICogQW4gb3B0aW9uYWwgbGFiZWwgdG8gdXNlIGZvciB0aGUgUHJpdmFjeSBQb2xpY3lcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICdwcml2YWN5UG9saWN5TGFiZWwnOiAnSSBhZ3JlZSB0byBvdXIgUHJpdmFjeSBQb2xpY3k6JyxcblxuICAvKipcbiAgICogVGhlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIFN1Ym1pdCBidXR0b25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gICdidXR0b25MYWJlbCc6ICdTdWJtaXQnXG59O1xuXG4vKipcbiAqIFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCBpcyBhIGNvbXBvbmVudCB0aGF0IGNyZWF0ZXMgYSBmb3JtXG4gKiB0aGF0cyBkaXNwbGF5ZWQgd2hlbmV2ZXIgYSBxdWVyeSBpcyBydW4uIEl0IGVuYWJsZXMgdGhlIHVzZXJcbiAqIHRvIHN1Ym1pdCBxdWVzdGlvbnMgdGhhdCB0aGV5IGNhbnQgZmluZCB0aGUgYW5zd2VyIGZvci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9DT05GSUcsIGNvbmZpZykpO1xuXG4gICAgLyoqXG4gICAgICogUmVmZXJlbmNlIHRvIHRoZSBzdG9yYWdlIG1vZGVsXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuUVVFU1RJT05fU1VCTUlTU0lPTjtcblxuICAgIC8qKlxuICAgICAqIE5PVEUoYmlsbHkpIGlmIHRoaXMgaXMgYSBwYXR0ZXJuIHdlIHdhbnQgdG8gZm9sbG93IGZvciBjb25maWd1cmF0aW9uXG4gICAgICogd2Ugc2hvdWxkIGJha2UgaXQgaW50byB0aGUgY29yZSBjbGFzcy5cbiAgICAgKi9cbiAgICB0aGlzLnZhbGlkYXRlQ29uZmlnKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3F1ZXN0aW9ucy9xdWVzdGlvbnN1Ym1pc3Npb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwdWJsaWMgaW50ZXJmYWNlIGFsaWFzIGZvciB0aGUgY29tcG9uZW50XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1FBU3VibWlzc2lvbic7XG4gIH1cblxuICAvKipcbiAgICogdmFsaWRhdGlvbkNvbmZpZyBjb250YWlucyBhIGJ1bmNoIG9mIHJ1bGVzXG4gICAqIHRoYXQgYXJlIHVzZWQgdG8gdmFsaWRhdGUgYWdpbnN0IGNvbmZpZ3VyYXRpb24gcHJvdmlkZWQgYnkgdGhlIHVzZXJcbiAgICovXG4gIHZhbGlkYXRlQ29uZmlnICgpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmVudGl0eUlkID09PSBudWxsIHx8XG4gICAgICAgIHR5cGVvZiB0aGlzLl9jb25maWcuZW50aXR5SWQgIT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICAnYGVudGl0eUlkYCBpcyBhIHJlcXVpcmVkIGNvbmZpZ3VyYXRpb24gb3B0aW9uIGZvciBRdWVzdGlvbiBTdWJtaXNzaW9uJyxcbiAgICAgICAgJ1F1ZXN0aW9uU3VibWlzc2lvbicpO1xuICAgIH1cbiAgfVxuXG4gIGJlZm9yZU1vdW50ICgpIHtcbiAgICAvLyBBdm9pZCBtb3VudGluZyB0aGUgY29tcG9uZW50IGlmIHRoZXJlcyBubyBkYXRhXG4gICAgLy8gTm90ZSwgMSBiZWNhdXNlIGBjb25maWdgIGlzIGFsd2F5cyBwYXJ0IG9mIHRoZSBzdGF0ZS5cbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5nZXRTdGF0ZSgpKS5sZW5ndGggPiAxO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgbGV0IGZvcm1FbCA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2NvbmZpZy5mb3JtU2VsZWN0b3IpO1xuICAgIGlmIChmb3JtRWwgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmJpbmRBbmFseXRpY3MoZm9ybUVsKTtcbiAgICB0aGlzLmJpbmRGb3JtU3VibWl0KGZvcm1FbCk7XG4gIH1cblxuICAvKipcbiAgICogYmluZEFuYWx5dGljcyB3aWxsIHdpcmUgdXAgRE9NIGV2ZW50IGhvb2tzIHRvIHNlcnZlcnNpZGUgcmVwb3J0aW5nXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1FbFxuICAgKi9cbiAgYmluZEFuYWx5dGljcyAoZm9ybUVsKSB7XG4gICAgaWYgKHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBxdWVzdGlvblRleHRFbCA9IERPTS5xdWVyeShmb3JtRWwsICcuanMtcXVlc3Rpb24tdGV4dCcpO1xuICAgIERPTS5vbihxdWVzdGlvblRleHRFbCwgJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlci5yZXBvcnQobmV3IEFuYWx5dGljc0V2ZW50KCdRVUVTVElPTl9GT0NVUycpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBiaW5kRm9ybVN1Ym1pdCBoYW5kbGVzIHN1Ym1pdHRpbmcgdGhlIHF1ZXN0aW9uIHRvIHRoZSBzZXJ2ZXIuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGZvcm1FbFxuICAgKi9cbiAgYmluZEZvcm1TdWJtaXQgKGZvcm1FbCkge1xuICAgIERPTS5vbihmb3JtRWwsICdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gVE9ETyhiaWxseSkgd2UgcHJvYmFibHkgd2FudCB0byBkaXNhYmxlIHRoZSBmb3JtIGZyb20gYmVpbmcgc3VibWl0dGVkIHR3aWNlXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IHRoaXMucGFyc2UoZm9ybUVsKTtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMudmFsaWRhdGVSZXF1aXJlZChmb3JtRGF0YSk7XG4gICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKG5ldyBRdWVzdGlvblN1Ym1pc3Npb24oZm9ybURhdGEsIGVycm9ycykpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvcmUuc3VibWl0UXVlc3Rpb24oe1xuICAgICAgICAnZW50aXR5SWQnOiB0aGlzLl9jb25maWcuZW50aXR5SWQsXG4gICAgICAgICdxdWVzdGlvbkxhbmd1YWdlJzogdGhpcy5fY29uZmlnLmxhbmd1YWdlLFxuICAgICAgICAnc2l0ZSc6ICdGSVJTVF9QQVJUWScsXG4gICAgICAgICduYW1lJzogZm9ybURhdGEubmFtZSxcbiAgICAgICAgJ2VtYWlsJzogZm9ybURhdGEuZW1haWwsXG4gICAgICAgICdxdWVzdGlvblRleHQnOiBmb3JtRGF0YS5xdWVzdGlvblRleHQsXG4gICAgICAgICdxdWVzdGlvbkRlc2NyaXB0aW9uJzogZm9ybURhdGEucXVlc3Rpb25EZXNjcmlwdGlvblxuICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgbmV3IFF1ZXN0aW9uU3VibWlzc2lvbihmb3JtRGF0YSwge1xuICAgICAgICAgICAgICAnbmV0d29yayc6ICdUaGVyZSB3YXMgYSBwcm9ibGVtIHN1Ym1pdHRpbmcgeW91ciBxdWVzdGlvbi4gUGxlYXNlIHRyeSBhZ2Fpbi4nXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRha2VzIHRoZSBmb3JtLCBhbmQgYnVpbGRzIGEgb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgaW5wdXQgbmFtZXNcbiAgICogYW5kIHRleHQgZmllbGRzLlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBmb3JtRWxcbiAgICogQHJldHVybnMge29iamVjdH1cbiAgICovXG4gIHBhcnNlIChmb3JtRWwpIHtcbiAgICBjb25zdCBpbnB1dEZpZWxkcyA9IERPTS5xdWVyeUFsbChmb3JtRWwsICcuanMtcXVlc3Rpb24tZmllbGQnKTtcbiAgICBpZiAoIWlucHV0RmllbGRzIHx8IGlucHV0RmllbGRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGxldCBvYmogPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0RmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdmFsID0gaW5wdXRGaWVsZHNbaV0udmFsdWU7XG4gICAgICBpZiAoaW5wdXRGaWVsZHNbaV0udHlwZSA9PT0gJ2NoZWNrYm94JyAmJiB2YWwgPT09ICd0cnVlJykge1xuICAgICAgICB2YWwgPSB0cnVlO1xuICAgICAgfVxuICAgICAgb2JqW2lucHV0RmllbGRzW2ldLm5hbWVdID0gdmFsO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGVzIHRoZSByZXF1aXJlZCBmaWVsZHMgKG9yIHJ1bGVzKSBmb3IgdGhlIGZvcm0gZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gZm9ybURhdGFcbiAgICogQHJldHVybnMge09iamVjdHxib29sZWFufSBlcnJvcnMgb2JqZWN0IGlmIGFueSBlcnJvcnMgZm91bmRcbiAgICovXG4gIHZhbGlkYXRlUmVxdWlyZWQgKGZvcm1EYXRhKSB7XG4gICAgbGV0IGVycm9ycyA9IHt9O1xuICAgIGlmICghZm9ybURhdGEuZW1haWwgfHwgdHlwZW9mIGZvcm1EYXRhLmVtYWlsICE9PSAnc3RyaW5nJykge1xuICAgICAgZXJyb3JzWydlbWFpbCddID0gJ01pc3NpbmcgZW1haWwgYWRkcmVzcyEnO1xuICAgIH1cblxuICAgIGlmICghZm9ybURhdGEucHJpdmFjeVBvbGljeSB8fCBmb3JtRGF0YS5wcml2YWN5UG9saWN5ICE9PSB0cnVlKSB7XG4gICAgICBlcnJvcnNbJ3ByaXZhY3lQb2xpY3knXSA9ICdBcHByb3Zpbmcgb3VyIHByaXZhY3kgcG9saWN5IHRlcm1zIGlzIHJlcXVpcmVkISc7XG4gICAgfVxuXG4gICAgaWYgKCFmb3JtRGF0YS5xdWVzdGlvblRleHQgfHwgdHlwZW9mIGZvcm1EYXRhLnF1ZXN0aW9uVGV4dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9yc1sncXVlc3Rpb25UZXh0J10gPSAnUXVlc3Rpb24gdGV4dCBpcyByZXF1aXJlZCEnO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA+IDAgPyBlcnJvcnMgOiBudWxsO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTVkdJY29uIHtcbiAgLyoqXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICogQHBhcmFtIGNvbmZpZy5uYW1lXG4gICAqIEBwYXJhbSBjb25maWcucGF0aFxuICAgKiBAcGFyYW0gY29uZmlnLmNvbXBsZXhDb250ZW50c1xuICAgKiBAcGFyYW0gY29uZmlnLnZpZXdCb3hcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgLyoqXG4gICAgICogdGhlIG5hbWUgb2YgdGhlIGljb25cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSBjb25maWcubmFtZTtcbiAgICAvKipcbiAgICAgKiBhbiBzdmcgcGF0aCBkZWZpbml0aW9uXG4gICAgICovXG4gICAgdGhpcy5wYXRoID0gY29uZmlnLnBhdGg7XG4gICAgLyoqXG4gICAgICogaWYgbm90IHVzaW5nIGEgcGF0aCwgYSB0aGUgbWFya3VwIGZvciBhIGNvbXBsZXggU1ZHXG4gICAgICovXG4gICAgdGhpcy5jb21wbGV4Q29udGVudHMgPSBjb25maWcuY29tcGxleENvbnRlbnRzO1xuICAgIC8qKlxuICAgICAqIHRoZSB2aWV3IGJveCBkZWZpbml0aW9uLCBkZWZhdWx0cyB0byAyNHgyNFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy52aWV3Qm94ID0gY29uZmlnLnZpZXdCb3ggfHwgJzAgMCAyNCAyNCc7XG4gICAgLyoqXG4gICAgICogYWN0dWFsIGNvbnRlbnRzIHVzZWRcbiAgICAgKi9cbiAgICB0aGlzLmNvbnRlbnRzID0gdGhpcy5wYXRoRGVmaW5pdGlvbigpO1xuICB9XG5cbiAgcGF0aERlZmluaXRpb24gKCkge1xuICAgIGlmICh0aGlzLmNvbXBsZXhDb250ZW50cykge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGxleENvbnRlbnRzO1xuICAgIH1cblxuICAgIHJldHVybiBgPHBhdGggZD1cIiR7dGhpcy5wYXRofVwiPjwvcGF0aD5gO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIHN2ZyBtYXJrdXBcbiAgICovXG4gIG1hcmt1cCAoKSB7XG4gICAgcmV0dXJuIGA8c3ZnIHZpZXdCb3g9XCIke3RoaXMudmlld0JveH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JHt0aGlzLmNvbnRlbnRzfTwvc3ZnPmA7XG4gIH1cbn1cbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICd0aHVtYicsXG4gIHZpZXdCb3g6ICcwIDAgMjQgMjInLFxuICBwYXRoOiAnTTE1LjI3MyAxSDUuNDU1Yy0uOTA2IDAtMS42OC41NS0yLjAwOCAxLjM0MkwuMTUzIDEwLjA5N0EyLjE5IDIuMTkgMCAwMDAgMTAuOXYyLjJjMCAxLjIxLjk4MiAyLjIgMi4xODIgMi4yaDYuODgzTDguMDMgMjAuMzI3bC0uMDMzLjM1MmMwIC40NTEuMTg2Ljg2OS40OCAxLjE2Nkw5LjYzMyAyM2w3LjE3OC03LjI0OWEyLjE2IDIuMTYgMCAwMC42NDQtMS41NTF2LTExYzAtMS4yMS0uOTgyLTIuMi0yLjE4Mi0yLjJ6bTAgMTMuMmwtNC43MzUgNC43NzRMMTEuNzUgMTMuMUgyLjE4MnYtMi4ybDMuMjczLTcuN2g5LjgxOHYxMXpNMTkuNjM2IDFIMjR2MTMuMmgtNC4zNjRWMXonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdyZWNlaXB0JyxcbiAgcGF0aDogJ00xNC42MDYgOS41Yy0uNjcxLS41MTUtMS41OTEtLjgzMy0yLjYwNi0uODMzIDEuMDE1IDAgMS45MzUuMzE4IDIuNjA2LjgzM3ptLTcuOTg1IDBIMS42NTVBMS42NiAxLjY2IDAgMDEwIDcuODMzVjMuNjY3QzAgMi43NDcuNzQxIDIgMS42NTUgMmgyMC42OUExLjY2IDEuNjYgMCAwMTI0IDMuNjY3djQuMTY2QTEuNjYgMS42NiAwIDAxMjIuMzQ1IDkuNWgtNC45NjZWMjJINi42MjFWOS41aDIuNzczSDYuNjJ6bTEwLjc1OC0xLjY2N2g0Ljk2NlYzLjY2N0gxLjY1NXY0LjE2Nmg0Ljk2NnYtMi41aDEwLjc1OHYyLjV6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncGFudGhlb24nLFxuICBwYXRoOiAnTTkuOTQ3IDE2LjU5OGguMjUyVjkuNDEyaC0uMjUyYS40MzIuNDMyIDAgMDEtLjIzLS4wNjVjLS4wNy0uMDQzLS4xMDYtLjA5My0uMTA2LS4xNUw5LjE1IDcuODJ2LS4xNWMwLS4wNDQuMDI4LS4wOC4wODQtLjEwOWEuNjkxLjY5MSAwIDAxLjEwNS0uMDg2LjI1NC4yNTQgMCAwMS4xNDYtLjA0M0gxMy42Yy4wNTYgMCAuMTA0LjAxNS4xNDYuMDQzLjA0Mi4wMy4wOTEuMDU4LjE0Ny4wODZhLjI3MS4yNzEgMCAwMS4wNjMuMTA4Yy4wMTQuMDQzLjAwNy4wOTMtLjAyLjE1bC0uNDIgMS4zNzhhLjM3NC4zNzQgMCAwMS0uMTQ3LjE1LjM3LjM3IDAgMDEtLjE5LjA2NWgtLjI1MXY3LjE4NmguMjUyYS4zNy4zNyAwIDAxLjE4OS4wNjVjLjA3LjA0My4xMTkuMDkzLjE0Ny4xNWwuNDIgMS4zNzhjLjAyNy4wMjguMDM0LjA3MS4wMi4xMjlhLjI3NS4yNzUgMCAwMS0uMDYzLjEyOSAxLjM2NCAxLjM2NCAwIDAwLS4xNDcuMDg2LjI1NC4yNTQgMCAwMS0uMTQ2LjA0M0g5LjQ4NWEuMjU0LjI1NCAwIDAxLS4xNDYtLjA0My42OTEuNjkxIDAgMDEtLjEwNS0uMDg2Yy0uMDU2LS4wMjktLjA4NC0uMDcyLS4wODQtLjEzdi0uMTI4bC40NjEtMS4zNzdjMC0uMDU4LjAzNS0uMTA4LjEwNS0uMTUxYS40MzIuNDMyIDAgMDEuMjMxLS4wNjV6bTUuNzkyIDBoLjI1MlY5LjQxMmgtLjI1MmEuNDMyLjQzMiAwIDAxLS4yMy0uMDY1LjM3NC4zNzQgMCAwMS0uMTQ4LS4xNWwtLjQyLTEuMzc3Yy0uMDI3LS4wMjktLjAzNC0uMDcyLS4wMi0uMTNhLjI3NS4yNzUgMCAwMS4wNjMtLjEyOWMuMDU2LS4wMjguMTA1LS4wNTcuMTQ2LS4wODZhLjI1NC4yNTQgMCAwMS4xNDctLjA0M2g0LjExNGMuMDU1IDAgLjEwNC4wMTUuMTQ2LjA0M2EuNjkxLjY5MSAwIDAxLjEwNS4wODZjLjA1Ni4wMy4wODQuMDcyLjA4NC4xM3YuMTI5bC0uNDIgMS4zNzdhLjM3NC4zNzQgMCAwMS0uMTQ2LjE1LjQzMi40MzIgMCAwMS0uMjMxLjA2NWgtLjIxdjcuMTg2aC4yMWEuNDMuNDMgMCAwMS4yMy4wNjVjLjA3LjA0My4xMi4wOTMuMTQ4LjE1bC40MiAxLjM3OHYuMTVjMCAuMDQzLS4wMjkuMDgtLjA4NS4xMDhhLjY5MS42OTEgMCAwMS0uMTA1LjA4Ni4yNTQuMjU0IDAgMDEtLjE0Ni4wNDNoLTQuMTE0YS4yNTQuMjU0IDAgMDEtLjE0Ny0uMDQzIDEuMzY0IDEuMzY0IDAgMDAtLjE0Ni0uMDg2LjI3MS4yNzEgMCAwMS0uMDYzLS4xMDhjLS4wMTQtLjA0My0uMDA3LS4wOTMuMDItLjE1bC40Mi0xLjM3N2EuMzc0LjM3NCAwIDAxLjE0Ny0uMTUxLjQzMi40MzIgMCAwMS4yMzEtLjA2NXptLTExLjc5NC0uMDg2aC4yNTJWOS40OThoLS4yNTJhLjMzNC4zMzQgMCAwMS0uMjEtLjA2NS4zODYuMzg2IDAgMDEtLjEyNi0uMTkzbC0uNDItMS4zNzdhLjI0OC4yNDggMCAwMS0uMDItLjE3Mi44NTQuODU0IDAgMDEuMDYzLS4xNzNjLjAyOC0uMDU3LjA3LS4xLjEyNi0uMTI5YS4zNjUuMzY1IDAgMDEuMTY4LS4wNDNoNC4wN2MuMDU3IDAgLjExMy4wMTUuMTY5LjA0M2EuMjc4LjI3OCAwIDAxLjEyNi4xMy44NTQuODU0IDAgMDEuMDYyLjE3Mi4yNDguMjQ4IDAgMDEtLjAyLjE3MmwtLjQyIDEuMzc3YS4zODYuMzg2IDAgMDEtLjEyNi4xOTMuMzM0LjMzNCAwIDAxLS4yMS4wNjVoLS4yMXY3LjAxNGguMjFjLjA4NCAwIC4xNTQuMDI5LjIxLjA4NmEuNjczLjY3MyAwIDAxLjEyNi4xNzJsLjQyIDEuMzc4YS4yNDguMjQ4IDAgMDEuMDIuMTcyLjg1NC44NTQgMCAwMS0uMDYyLjE3Mi4yNzguMjc4IDAgMDEtLjEyNi4xMjkuMzY1LjM2NSAwIDAxLS4xNjguMDQzSDMuNTI2YS4zNjUuMzY1IDAgMDEtLjE2OC0uMDQzLjI3OC4yNzggMCAwMS0uMTI2LS4xMy44NTQuODU0IDAgMDEtLjA2My0uMTcxLjI0OC4yNDggMCAwMS4wMi0uMTcybC40Mi0xLjM3OGEuNjczLjY3MyAwIDAxLjEyNi0uMTcyLjI4MS4yODEgMCAwMS4yMS0uMDg2ek0xLjc2MyA2LjY1OGEuNzE3LjcxNyAwIDAxLS41MDQtLjE5NC42NDQuNjQ0IDAgMDEtLjIxLS40OTV2LS40M2EuNzMuNzMgMCAwMS4xMDUtLjM4Ny42OC42OCAwIDAxLjI3My0uMjU5QzQuMzA5IDMuNDAyIDYuNTQgMi4yNzYgOC4xMjEgMS41MTUgOS43MDIuNzU1IDEwLjQ5My4zNjEgMTAuNDkzLjMzMmMuNTMxLS4yNTguOTcyLS4zNjYgMS4zMjItLjMyMy4zNS4wNDMuNzM0LjE2NSAxLjE1NC4zNjZsOC4zMSA0LjUxOGMuMTQuMDU4LjI0NS4xNDQuMzE1LjI1OWEuNzMuNzMgMCAwMS4xMDUuMzg3di40M2MwIC4yMDEtLjA3LjM2Ni0uMjEuNDk1YS43MTcuNzE3IDAgMDEtLjUwNC4xOTRIMS43NjN6bS0uNzE0IDEzLjM0YS41NC41NCAwIDAxLjE2OC0uMzg3LjUxNi41MTYgMCAwMS4zNzgtLjE3MmgxOS42NDJjLjE2OCAwIC4zMDguMDU3LjQyLjE3MmEuNTQxLjU0MSAwIDAxLjE2OC4zODd2LjgxOGEuNTIyLjUyMiAwIDAxLS4xNjguNDA4LjYwNS42MDUgMCAwMS0uNDIuMTUxSDEuNTk1YS41NTEuNTUxIDAgMDEtLjM3OC0uMTUuNTIyLjUyMiAwIDAxLS4xNjgtLjQxdi0uODE3em0yMS40MDUgMi4wMjJjLjE0IDAgLjI2Ni4wNTguMzc4LjE3M2EuNTkyLjU5MiAwIDAxLjE2OC40M3YuODE4YS41NDEuNTQxIDAgMDEtLjE2OC4zODcuNTE2LjUxNiAwIDAxLS4zNzguMTcyTC41NDYgMjMuOTU3YS41MTYuNTE2IDAgMDEtLjM3OC0uMTcyLjU0MS41NDEgMCAwMS0uMTY4LS4zODd2LS44MThhLjU5LjU5IDAgMDEuMTY4LS40My41MTYuNTE2IDAgMDEuMzc4LS4xNzNsMjEuOTA4LjA0M3onXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdtaWMnLFxuICBwYXRoOiAnTTEyIDE1YzEuNjYgMCAyLjk5LTEuMzQgMi45OS0zTDE1IDZjMC0xLjY2LTEuMzQtMy0zLTNTOSA0LjM0IDkgNnY2YzAgMS42NiAxLjM0IDMgMyAzem01LjMtM2MwIDMtMi41NCA1LjEtNS4zIDUuMVM2LjcgMTUgNi43IDEySDVjMCAzLjQxIDIuNzIgNi4yMyA2IDYuNzJWMjJoMnYtMy4yOGMzLjI4LS40OCA2LTMuMyA2LTYuNzJoLTEuN3onXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdkaXJlY3Rpb25zJyxcbiAgcGF0aDogJ00yMy42NDkgMTEuMTU0TDEyLjg0Ni4zNWExLjE5NSAxLjE5NSAwIDAwLTEuNjkyIDBMLjM1IDExLjE1NGExLjE5NSAxLjE5NSAwIDAwMCAxLjY5MkwxMS4xNTQgMjMuNjVhMS4xOTUgMS4xOTUgMCAwMDEuNjkyIDBMMjMuNjUgMTIuODQ2Yy40NjgtLjQ1Ni40NjgtMS4yMTIgMC0xLjY5MnptLTkuMjU0IDMuODUzdi0zLjAwMUg5LjU5M3YzLjZoLTIuNHYtNC44YzAtLjY2LjU0LTEuMiAxLjItMS4yaDYuMDAyVjYuNjA0bDQuMiA0LjItNC4yIDQuMjAyeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2NhbGVuZGFyJyxcbiAgcGF0aDogJ00xOC4xMTEgMTMuMkgxMnY2aDYuMTExdi02ek0xNi44OSAwdjIuNEg3LjExVjBINC42Njd2Mi40SDMuNDQ0Yy0xLjM1NiAwLTIuNDMyIDEuMDgtMi40MzIgMi40TDEgMjEuNkMxIDIyLjkyIDIuMDg4IDI0IDMuNDQ0IDI0aDE3LjExMkMyMS45IDI0IDIzIDIyLjkyIDIzIDIxLjZWNC44YzAtMS4zMi0xLjEtMi40LTIuNDQ0LTIuNGgtMS4yMjNWMEgxNi44OXptMy42NjcgMjEuNkgzLjQ0NFY4LjRoMTcuMTEydjEzLjJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnY2FsbG91dCcsXG4gIHBhdGg6ICdNMjEuOTkgNGMwLTEuMS0uODktMi0xLjk5LTJINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNGw0IDQtLjAxLTE4eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2luZm8nLFxuICBwYXRoOiAnTTEyIDguNEExLjIgMS4yIDAgMTAxMiA2YTEuMiAxLjIgMCAwMDAgMi40ek0xMiAwYzYuNjI0IDAgMTIgNS4zNzYgMTIgMTJzLTUuMzc2IDEyLTEyIDEyUzAgMTguNjI0IDAgMTIgNS4zNzYgMCAxMiAwem0wIDE4Yy42NiAwIDEuMi0uNTQgMS4yLTEuMlYxMmMwLS42Ni0uNTQtMS4yLTEuMi0xLjItLjY2IDAtMS4yLjU0LTEuMiAxLjJ2NC44YzAgLjY2LjU0IDEuMiAxLjIgMS4yeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2JyaWVmY2FzZScsXG4gIHBhdGg6ICdNMjAgN2gtNFY1YzAtMS4xMS0uODktMi0yLTJoLTRjLTEuMTEgMC0yIC44OS0yIDJ2Mkg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAyMGMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY5YzAtMS4xMS0uODktMi0yLTJ6bS02IDBoLTRWNWg0djJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAna2Fib2InLFxuICB2aWV3Qm94OiAnMCAwIDMgMTEnLFxuICBjb21wbGV4Q29udGVudHM6IGA8Y2lyY2xlIGN4PVwiMS41XCIgY3k9XCIxLjVcIiByPVwiMS41XCIvPjxjaXJjbGUgY3g9XCIxLjVcIiBjeT1cIjUuNVwiIHI9XCIxLjVcIi8+PGNpcmNsZSBjeD1cIjEuNVwiIGN5PVwiOS41XCIgcj1cIjEuNVwiLz5gXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdwZXJzb24nLFxuICB2aWV3Qm94OiAnMCAwIDE4IDE4JyxcbiAgcGF0aDogJ005IDljMi40ODYgMCA0LjUtMi4wMTQgNC41LTQuNVMxMS40ODYgMCA5IDBhNC40OTkgNC40OTkgMCAwMC00LjUgNC41QzQuNSA2Ljk4NiA2LjUxNCA5IDkgOXptMCAyLjI1Yy0zLjAwNCAwLTkgMS41MDgtOSA0LjV2MS4xMjVDMCAxNy40OTQuNTA2IDE4IDEuMTI1IDE4aDE1Ljc1Yy42MTkgMCAxLjEyNS0uNTA2IDEuMTI1LTEuMTI1VjE1Ljc1YzAtMi45OTItNS45OTYtNC41LTktNC41eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ21hZ25pZnlpbmdfZ2xhc3MnLFxuICBwYXRoOiAnTTE2LjEyNCAxMy4wNTFhNS4xNTQgNS4xNTQgMCAxMTAtMTAuMzA4IDUuMTU0IDUuMTU0IDAgMDEwIDEwLjMwOE0xNi4xMTQgMGE3Ljg4NiA3Ljg4NiAwIDAwLTYuNDYgMTIuNDA3TDAgMjIuMDYgMS45NCAyNGw5LjY1My05LjY1M0E3Ljg4NiA3Ljg4NiAwIDEwMTYuMTEzIDAnXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdvZmZpY2UnLFxuICBwYXRoOiAnTTEyIDdWM0gydjE4aDIwVjdIMTJ6TTYgMTlINHYtMmgydjJ6bTAtNEg0di0yaDJ2MnptMC00SDRWOWgydjJ6bTAtNEg0VjVoMnYyem00IDEySDh2LTJoMnYyem0wLTRIOHYtMmgydjJ6bTAtNEg4VjloMnYyem0wLTRIOFY1aDJ2MnptMTAgMTJoLTh2LTJoMnYtMmgtMnYtMmgydi0yaC0yVjloOHYxMHptLTItOGgtMnYyaDJ2LTJ6bTAgNGgtMnYyaDJ2LTJ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnbGluaycsXG4gIHBhdGg6ICdNMi4yOCAxMkEzLjcyMyAzLjcyMyAwIDAxNiA4LjI4aDQuOFY2SDZjLTMuMzEyIDAtNiAyLjY4OC02IDZzMi42ODggNiA2IDZoNC44di0yLjI4SDZBMy43MjMgMy43MjMgMCAwMTIuMjggMTJ6bTQuOTIgMS4yaDkuNnYtMi40SDcuMnYyLjR6TTE4IDZoLTQuOHYyLjI4SDE4QTMuNzIzIDMuNzIzIDAgMDEyMS43MiAxMiAzLjcyMyAzLjcyMyAwIDAxMTggMTUuNzJoLTQuOFYxOEgxOGMzLjMxMiAwIDYtMi42ODggNi02cy0yLjY4OC02LTYtNnonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICd3aW5kb3cnLFxuICBwYXRoOiAnTTMgMTNoOFYzSDN2MTB6bTAgOGg4di02SDN2NnptMTAgMGg4VjExaC04djEwem0wLTE4djZoOFYzaC04eidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3Bob25lJyxcbiAgcGF0aDogJ000LjgyNyAxMC4zODdhMjAuMTk4IDIwLjE5OCAwIDAwOC43ODYgOC43ODZsMi45MzQtMi45MzNjLjM2LS4zNi44OTMtLjQ4IDEuMzYtLjMyYTE1LjIxIDE1LjIxIDAgMDA0Ljc2Ljc2Yy43MzMgMCAxLjMzMy42IDEuMzMzIDEuMzMzdjQuNjU0QzI0IDIzLjQgMjMuNCAyNCAyMi42NjcgMjQgMTAuMTQ3IDI0IDAgMTMuODUzIDAgMS4zMzMgMCAuNi42IDAgMS4zMzMgMEg2Yy43MzMgMCAxLjMzMy42IDEuMzMzIDEuMzMzIDAgMS42NjcuMjY3IDMuMjY3Ljc2IDQuNzYuMTQ3LjQ2Ny4wNC45ODctLjMzMyAxLjM2bC0yLjkzMyAyLjkzNHonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICd0YWcnLFxuICB2aWV3Qm94OiAnMCAwIDE4IDE4JyxcbiAgcGF0aDogJ00xNy40NjkgOC42MjJsLTguMS04LjFBMS43ODkgMS43ODkgMCAwMDguMSAwSDEuOEMuODEgMCAwIC44MSAwIDEuOHY2LjNjMCAuNDk1LjE5OC45NDUuNTMxIDEuMjc4bDguMSA4LjFjLjMyNC4zMjQuNzc0LjUyMiAxLjI2OS41MjJhMS43NiAxLjc2IDAgMDAxLjI2OS0uNTMxbDYuMy02LjNBMS43NiAxLjc2IDAgMDAxOCA5LjljMC0uNDk1LS4yMDctLjk1NC0uNTMxLTEuMjc4ek0zLjE1IDQuNWMtLjc0NyAwLTEuMzUtLjYwMy0xLjM1LTEuMzUgMC0uNzQ3LjYwMy0xLjM1IDEuMzUtMS4zNS43NDcgMCAxLjM1LjYwMyAxLjM1IDEuMzUgMCAuNzQ3LS42MDMgMS4zNS0xLjM1IDEuMzV6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnZG9jdW1lbnQnLFxuICBwYXRoOiAnTTQgNkgydjE0YzAgMS4xLjkgMiAyIDJoMTR2LTJINFY2em0xNi00SDhjLTEuMSAwLTIgLjktMiAydjEyYzAgMS4xLjkgMiAyIDJoMTJjMS4xIDAgMi0uOSAyLTJWNGMwLTEuMS0uOS0yLTItMnptLTEgOUg5VjloMTB2MnptLTQgNEg5di0yaDZ2MnptNC04SDlWNWgxMHYyeidcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ2NoZXZyb24nLFxuICB2aWV3Qm94OiAnMCAwIDcgOScsXG4gIGNvbXBsZXhDb250ZW50czogYDxnIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEgLTgpXCI+PHBhdGggZD1cIm0yLjY0MTcwMDQgOC0xLjE0MTcwMDQgMS4wNTc1IDMuNzA4NTAyMDIgMy40NDI1LTMuNzA4NTAyMDIgMy40NDI1IDEuMTQxNzAwNCAxLjA1NzUgNC44NTgyOTk2LTQuNXpcIi8+PC9nPmBcbn0pO1xuIiwiaW1wb3J0IFNWR0ljb24gZnJvbSAnLi9pY29uLmpzJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBTVkdJY29uKHtcbiAgbmFtZTogJ3N1cHBvcnQnLFxuICBwYXRoOiAnTTEyLjUgMkM3LjgxIDIgNCA1LjgxIDQgMTAuNWMwIDQuNjkgMy44MSA4LjUgOC41IDguNWguNXYzYzQuODYtMi4zNCA4LTcgOC0xMS41QzIxIDUuODEgMTcuMTkgMiAxMi41IDJ6bTEgMTQuNWgtMnYtMmgydjJ6bTAtMy41aC0yYzAtMy4yNSAzLTMgMy01IDAtMS4xLS45LTItMi0ycy0yIC45LTIgMmgtMmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0YzAgMi41LTMgMi43NS0zIDV6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAneWV4dCcsXG4gIHZpZXdCb3g6ICcwIDAgMzAgMzAnLFxuICBwYXRoOiAnTTI1LjUxNyAyOC4xNDJ2LjA5NWgtLjIwNHYuOTA1aC0uMDY2di0uOTA1aC0uMTk3di0uMDk1aC40Njd6bS42NjcgMGguMDY2djFoLS4wNjZ2LS44MjVsLS4yNC41OTVoLS4wMTNsLS4yNC0uNTk1di44MjVoLS4wNjZ2LTFoLjA2NmwuMjQ3LjYxLjI0Ni0uNjF6TTE1IDI4LjhjNy42MjIgMCAxMy44LTYuMTc4IDEzLjgtMTMuOCAwLTcuNjIyLTYuMTc4LTEzLjgtMTMuOC0xMy44QzcuMzc4IDEuMiAxLjIgNy4zNzggMS4yIDE1YzAgNy42MjIgNi4xNzggMTMuOCAxMy44IDEzLjh6TTE1IDBjOC4yODQgMCAxNSA2LjcxNiAxNSAxNSAwIDguMjg0LTYuNzE2IDE1LTE1IDE1LTguMjg0IDAtMTUtNi43MTYtMTUtMTVDMCA2LjcxNiA2LjcxNiAwIDE1IDB6bS40NSAxNi42NXYtMS4yaDYuNnYxLjJoLTIuN3Y1LjRoLTEuMnYtNS40aC0yLjd6bS0xLjU5OS0xLjM1bC44NDkuODQ5LTIuNjAxIDIuNjAxIDIuNjAxIDIuNjAxLS44NDkuODQ5LTIuNjAxLTIuNjAxTDguNjQ5IDIyLjJsLS44NDktLjg0OSAyLjYwMS0yLjYwMUw3LjggMTYuMTQ5bC44NDktLjg0OSAyLjYwMSAyLjYwMSAyLjYwMS0yLjYwMXpNMTguNjc1IDlhMi4xNzUgMi4xNzUgMCAwMC0xLjg0NyAzLjMyM2wyLjk5NS0yLjk5NUEyLjE2MyAyLjE2MyAwIDAwMTguNjc1IDl6bTAgNS41NWEzLjM3NSAzLjM3NSAwIDExMi44MzMtNS4yMDlsLTMuNzg5IDMuNzg4YTIuMTc1IDIuMTc1IDAgMDAzLjEzLTEuOTU0aDEuMjAxYTMuMzc1IDMuMzc1IDAgMDEtMy4zNzUgMy4zNzV6bS03LjQyNS0zLjczNEwxMy43OCA3LjhsLjkyLjc3MS0yLjg1IDMuMzk3djIuNTgyaC0xLjJ2LTIuNTgyTDcuOCA4LjU3bC45Mi0uNzcxIDIuNTMgMy4wMTZ6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncGluJyxcbiAgdmlld0JveDogJzAgMCAxMyAxOCcsXG4gIHBhdGg6ICdtOS4zNzUgMGMtMy41MjQ0NjQyOSAwLTYuMzc1IDIuODE3LTYuMzc1IDYuMyAwIDQuNzI1IDYuMzc1IDExLjcgNi4zNzUgMTEuN3M2LjM3NS02Ljk3NSA2LjM3NS0xMS43YzAtMy40ODMtMi44NTA1MzU3LTYuMy02LjM3NS02LjN6bS4wMDAwMDAxOCA4LjU1MDAwMDA3Yy0xLjI1Njc4NTc2IDAtMi4yNzY3ODU3OS0xLjAwOC0yLjI3Njc4NTc5LTIuMjVzMS4wMjAwMDAwMy0yLjI1IDIuMjc2Nzg1NzktMi4yNWMxLjI1Njc4NTcyIDAgMi4yNzY3ODU4MiAxLjAwOCAyLjI3Njc4NTgyIDIuMjVzLTEuMDIwMDAwMSAyLjI1LTIuMjc2Nzg1ODIgMi4yNXonXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdnZWFyJyxcbiAgcGF0aDogJ00xMiAxMGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bTctN0g1YTIgMiAwIDAwLTIgMnYxNGEyIDIgMCAwMDIgMmgxNGEyIDIgMCAwMDItMlY1YTIgMiAwIDAwLTItMnptLTEuNzUgOWMwIC4yMy0uMDIuNDYtLjA1LjY4bDEuNDggMS4xNmMuMTMuMTEuMTcuMy4wOC40NWwtMS40IDIuNDJjLS4wOS4xNS0uMjcuMjEtLjQzLjE1bC0xLjc0LS43Yy0uMzYuMjgtLjc2LjUxLTEuMTguNjlsLS4yNiAxLjg1Yy0uMDMuMTctLjE4LjMtLjM1LjNoLTIuOGMtLjE3IDAtLjMyLS4xMy0uMzUtLjI5bC0uMjYtMS44NWMtLjQzLS4xOC0uODItLjQxLTEuMTgtLjY5bC0xLjc0LjdjLS4xNi4wNi0uMzQgMC0uNDMtLjE1bC0xLjQtMi40MmEuMzUzLjM1MyAwIDAxLjA4LS40NWwxLjQ4LTEuMTZjLS4wMy0uMjMtLjA1LS40Ni0uMDUtLjY5IDAtLjIzLjAyLS40Ni4wNS0uNjhsLTEuNDgtMS4xNmEuMzUzLjM1MyAwIDAxLS4wOC0uNDVsMS40LTIuNDJjLjA5LS4xNS4yNy0uMjEuNDMtLjE1bDEuNzQuN2MuMzYtLjI4Ljc2LS41MSAxLjE4LS42OWwuMjYtMS44NWMuMDMtLjE3LjE4LS4zLjM1LS4zaDIuOGMuMTcgMCAuMzIuMTMuMzUuMjlsLjI2IDEuODVjLjQzLjE4LjgyLjQxIDEuMTguNjlsMS43NC0uN2MuMTYtLjA2LjM0IDAgLjQzLjE1bDEuNCAyLjQyYy4wOS4xNS4wNS4zNC0uMDguNDVsLTEuNDggMS4xNmMuMDMuMjMuMDUuNDYuMDUuNjl6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAnbGlnaHRfYnVsYicsXG4gIHZpZXdCb3g6ICcwIDAgMzIgMzUnLFxuICBwYXRoOiAnTTExLjU4NSAzMS4wNTZsOC4zOC0uNDkzdi0uOTg2bC04LjM4LjQ5M3pNMTEuNTg1IDMzLjAyOEwxNS43NzUgMzVsNC4xOS0xLjk3MlYzMS41NWwtOC4zOC40OTN2Ljk4NnptNi45MjYtLjQwN2wtMi43MzYgMS4yOS0yLjEzLTEuMDA0IDQuODY2LS4yODZ6TTE1Ljc3NSA3LjM5NGMtNC42MyAwLTguMzggMy4yMDUtOC4zOCA4LjM4IDAgNS4xNzcgNC4xOSA2LjkwMiA0LjE5IDEyLjgxOHYuNDkzbDguMzgtLjQ5M2MwLTUuOTE2IDQuMTktOC4xODggNC4xOS0xMi44MTdhOC4zOCA4LjM4IDAgMDAtOC4zOC04LjM4em01LjYxNyAxMy40OGMtMS4wMjUgMS44MzctMi4xNzQgMy44OTItMi4zODEgNi43ODZsLTYuNDQuMzhjLS4xMjktMy4wMS0xLjI5LTUuMDIxLTIuMzItNi44MDgtLjQ5My0uOC0uOTI4LTEuNjM2LTEuMjk5LTIuNWgxMy41NTZjLS4zMjUuNzA4LS43MDQgMS40MDMtMS4xMTYgMi4xNDJ6bTEuNDc5LTMuMTI4SDguNjI3YTcuNzkzIDcuNzkzIDAgMDEtLjI0Ny0xLjk3MWMwLTQuMzUzIDMuMDQyLTcuMzk1IDcuMzk1LTcuMzk1YTcuMzk0IDcuMzk0IDAgMDE3LjM5NCA3LjM5NSA2LjczOSA2LjczOSAwIDAxLS4zIDEuOTcxaC4wMDJ6TTI2LjYyIDE1LjI4Mmg0LjkzdjFoLTQuOTN6TTIzLjA5NCA3Ljc1NmwyLjA5MS0yLjA5MS42OTguNjk3LTIuMDkyIDIuMDkyek0xNS4yODIgMGgxdjQuOTNoLTF6TTUuNjY2IDYuMzYybC42OTctLjY5NyAyLjA5MSAyLjA5MS0uNjk3LjY5N3pNMCAxNS4yODJoNC45M3YxSDB6J1xufSk7XG4iLCJpbXBvcnQgU1ZHSWNvbiBmcm9tICcuL2ljb24uanMnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFNWR0ljb24oe1xuICBuYW1lOiAncmVjZWlwdCcsXG4gIHZpZXdCb3g6ICcwIDAgMTggMTgnLFxuICBwYXRoOiAnTTguOTkxIDBDNC4wMjMgMCAwIDQuMDMyIDAgOXM0LjAyMyA5IDguOTkxIDlDMTMuOTY4IDE4IDE4IDEzLjk2OCAxOCA5cy00LjAzMi05LTkuMDA5LTl6bTMuODE2IDE0LjRMOSAxMi4xMDUgNS4xOTMgMTQuNGwxLjAwOC00LjMyOS0zLjM1Ny0yLjkwNyA0LjQyOC0uMzc4TDkgMi43bDEuNzI4IDQuMDc3IDQuNDI4LjM3OC0zLjM1NyAyLjkwN3onXG59KTtcbiIsImltcG9ydCBTVkdJY29uIGZyb20gJy4vaWNvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBuZXcgU1ZHSWNvbih7XG4gIG5hbWU6ICdjbG9zZScsXG4gIGNvbXBsZXhDb250ZW50czogYFxuICAgIDxwYXRoIGQ9XCJNNyA4bDkuNzE2IDkuNzE2bTAtOS43MTZMNyAxNy43MTZcIiBcbiAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCIvPlxuICBgXG59KTtcbiIsImltcG9ydCB0aHVtYkljb24gZnJvbSAnLi90aHVtYi5qcyc7XG5pbXBvcnQgcmVjZWlwdEljb24gZnJvbSAnLi9yZWNlaXB0LmpzJztcbmltcG9ydCBwYW50aGVvbkljb24gZnJvbSAnLi9wYW50aGVvbi5qcyc7XG5pbXBvcnQgbWljSWNvbiBmcm9tICcuL21pYy5qcyc7XG5pbXBvcnQgZGlyZWN0aW9uc0ljb24gZnJvbSAnLi9kaXJlY3Rpb25zLmpzJztcbmltcG9ydCBjYWxlbmRhckljb24gZnJvbSAnLi9jYWxlbmRhci5qcyc7XG5pbXBvcnQgY2FsbG91dEljb24gZnJvbSAnLi9jYWxsb3V0LmpzJztcbmltcG9ydCBpbmZvSWNvbiBmcm9tICcuL2luZm8uanMnO1xuaW1wb3J0IGJyaWVmY2FzZUljb24gZnJvbSAnLi9icmllZmNhc2UuanMnO1xuaW1wb3J0IGthYm9iSWNvbiBmcm9tICcuL2thYm9iLmpzJztcbmltcG9ydCBwZXJzb25JY29uIGZyb20gJy4vcGVyc29uLmpzJztcbmltcG9ydCBtYWduaWZ5aW5nR2xhc3NJY29uIGZyb20gJy4vbWFnbmlmeWluZ19nbGFzcy5qcyc7XG5pbXBvcnQgb2ZmaWNlSWNvbiBmcm9tICcuL29mZmljZS5qcyc7XG5pbXBvcnQgbGlua0ljb24gZnJvbSAnLi9saW5rLmpzJztcbmltcG9ydCB3aW5kb3dJY29uIGZyb20gJy4vd2luZG93LmpzJztcbmltcG9ydCBwaG9uZUljb24gZnJvbSAnLi9waG9uZS5qcyc7XG5pbXBvcnQgdGFnSWNvbiBmcm9tICcuL3RhZy5qcyc7XG5pbXBvcnQgZG9jdW1lbnRJY29uIGZyb20gJy4vZG9jdW1lbnQuanMnO1xuaW1wb3J0IGNoZXZyb25JY29uIGZyb20gJy4vY2hldnJvbi5qcyc7XG5pbXBvcnQgc3VwcG9ydEljb24gZnJvbSAnLi9zdXBwb3J0LmpzJztcbmltcG9ydCB5ZXh0SWNvbiBmcm9tICcuL3lleHQuanMnO1xuaW1wb3J0IHBpbkljb24gZnJvbSAnLi9waW4uanMnO1xuaW1wb3J0IGdlYXJJY29uIGZyb20gJy4vZ2Vhci5qcyc7XG5pbXBvcnQgbGlnaHRCdWxiSWNvbiBmcm9tICcuL2xpZ2h0X2J1bGIuanMnO1xuaW1wb3J0IHN0YXJJY29uIGZyb20gJy4vc3Rhci5qcyc7XG5pbXBvcnQgY2xvc2UgZnJvbSAnLi9jbG9zZS5qcyc7XG5cbmNvbnN0IGljb25zQXJyYXkgPSBbXG4gIHRodW1iSWNvbixcbiAgcmVjZWlwdEljb24sXG4gIHBhbnRoZW9uSWNvbixcbiAgbWljSWNvbixcbiAgZGlyZWN0aW9uc0ljb24sXG4gIGNhbGVuZGFySWNvbixcbiAgY2FsbG91dEljb24sXG4gIGluZm9JY29uLFxuICBicmllZmNhc2VJY29uLFxuICBrYWJvYkljb24sXG4gIHBlcnNvbkljb24sXG4gIG1hZ25pZnlpbmdHbGFzc0ljb24sXG4gIG9mZmljZUljb24sXG4gIGxpbmtJY29uLFxuICB3aW5kb3dJY29uLFxuICBwaG9uZUljb24sXG4gIHRhZ0ljb24sXG4gIGRvY3VtZW50SWNvbixcbiAgY2hldnJvbkljb24sXG4gIHN1cHBvcnRJY29uLFxuICB5ZXh0SWNvbixcbiAgcGluSWNvbixcbiAgZ2Vhckljb24sXG4gIGxpZ2h0QnVsYkljb24sXG4gIGNsb3NlXG5dO1xuXG5jb25zdCBJY29ucyA9IHt9O1xuXG5pY29uc0FycmF5LmZvckVhY2goaWNvbiA9PiB7XG4gIEljb25zW2ljb24ubmFtZV0gPSBpY29uLm1hcmt1cCgpO1xufSk7XG5cbkljb25zLmRlZmF1bHQgPSBzdGFySWNvbi5tYXJrdXAoKTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbnM7XG4iLCIvKiogQG1vZHVsZSBJY29uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBJY29ucyBmcm9tICcuLi8uLi9pY29ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvKipcbiAgICogSWNvbkNvbXBvbmVudFxuICAgKiBAcGFyYW0gb3B0c1xuICAgKiBAcGFyYW0gb3B0cy5pY29uTmFtZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gb3B0cy5jdXN0b21JY29uIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBvcHRzLmljb25Vcmwge3N0cmluZ31cbiAgICovXG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIC8qKlxuICAgICAqIG5hbWUgb2YgYW4gaWNvbiBmcm9tIHRoZSBkZWZhdWx0IGljb24gc2V0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmljb25OYW1lID0gb3B0cy5pY29uTmFtZSB8fCAnZGVmYXVsdCc7XG5cbiAgICAvKipcbiAgICAgKiB0aGUgbWFya3VwIGZvciBhIGZ1bGx5IGN1c3RvbSBpY29uXG4gICAgICogQHR5cGUgeyp8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmN1c3RvbUljb24gPSBvcHRzLmN1c3RvbUljb24gfHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiB0aGUgdXJsIHRvIGEgY3VzdG9tIGltYWdlIGljb25cbiAgICAgKiBAdHlwZSB7bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmljb25VcmwgPSBvcHRzLmljb25VcmwgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXR0ZXIgZm9yIHRoZSBpbWFnZSBwYXN0ZWQgdG8gaGFuZGxlYmFyc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGltYWdlICgpIHtcbiAgICBpZiAodGhpcy5jdXN0b21JY29uKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXN0b21JY29uO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmljb25VcmwpIHtcbiAgICAgIHJldHVybiBgPGltZyBzcmM9XCIke3RoaXMuaWNvblVybH1cIiBhbHQ9XCJcIiBjbGFzcz1cIkljb24taW1hZ2VcIj5gO1xuICAgIH1cblxuICAgIGlmIChJY29uc1t0aGlzLmljb25OYW1lXSkge1xuICAgICAgcmV0dXJuIEljb25zW3RoaXMuaWNvbk5hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiBJY29ucy5kZWZhdWx0O1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0ljb25Db21wb25lbnQnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdpY29ucy9pY29uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBhbGxvd2luZyBkdXBsaWNhdGVzXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIG92ZXJyaWRlcyBkZWZhdWx0IGZ1bmN0aW9uYWxpdHkgdG8gcHJvdmlkZSBuYW1lIGFuZCBtYXJrdXBcbiAgICogQHBhcmFtIGRhdGFcbiAgICogQHJldHVybnMge0ljb25Db21wb25lbnR9XG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgIGltYWdlOiB0aGlzLmltYWdlLFxuICAgICAgbmFtZTogdGhpcy5pY29uTmFtZSA/IHRoaXMuaWNvbk5hbWUgOiAnY3VzdG9tJ1xuICAgIH0pKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi9jb21wb25lbnRtYW5hZ2VyJztcblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XG5cbmltcG9ydCBOYXZpZ2F0aW9uQ29tcG9uZW50IGZyb20gJy4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uY29tcG9uZW50JztcblxuaW1wb3J0IFNlYXJjaENvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9zZWFyY2hjb21wb25lbnQnO1xuaW1wb3J0IEZpbHRlclNlYXJjaENvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9maWx0ZXJzZWFyY2hjb21wb25lbnQnO1xuaW1wb3J0IEF1dG9Db21wbGV0ZUNvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9hdXRvY29tcGxldGVjb21wb25lbnQnO1xuXG5pbXBvcnQgRmlsdGVyQm94Q29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9maWx0ZXJib3hjb21wb25lbnQnO1xuaW1wb3J0IEZpbHRlck9wdGlvbnNDb21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL2ZpbHRlcm9wdGlvbnNjb21wb25lbnQnO1xuaW1wb3J0IFJhbmdlRmlsdGVyQ29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9yYW5nZWZpbHRlcmNvbXBvbmVudCc7XG5pbXBvcnQgRGF0ZVJhbmdlRmlsdGVyQ29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9kYXRlcmFuZ2VmaWx0ZXJjb21wb25lbnQnO1xuaW1wb3J0IER5bmFtaWNGaWx0ZXJzQ29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9keW5hbWljZmlsdGVyc2NvbXBvbmVudCc7XG5pbXBvcnQgR2VvTG9jYXRpb25Db21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL2dlb2xvY2F0aW9uY29tcG9uZW50JztcblxuaW1wb3J0IERpcmVjdEFuc3dlckNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvZGlyZWN0YW5zd2VyY29tcG9uZW50JztcbmltcG9ydCBSZXN1bHRzQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9yZXN1bHRzY29tcG9uZW50JztcbmltcG9ydCBBY2NvcmRpb25SZXN1bHRzQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9hY2NvcmRpb25yZXN1bHRzY29tcG9uZW50LmpzJztcbmltcG9ydCBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy91bml2ZXJzYWxyZXN1bHRzY29tcG9uZW50JztcblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvbG9jYXRpb25yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvZXZlbnRyZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmltcG9ydCBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcGVvcGxlcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5pbXBvcnQgTWFwQ29tcG9uZW50IGZyb20gJy4vbWFwL21hcGNvbXBvbmVudCc7XG5pbXBvcnQgUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IGZyb20gJy4vcXVlc3Rpb25zL3F1ZXN0aW9uc3VibWlzc2lvbmNvbXBvbmVudCc7XG5cbmltcG9ydCBJY29uQ29tcG9uZW50IGZyb20gJy4vaWNvbnMvaWNvbmNvbXBvbmVudC5qcyc7XG5cbmV4cG9ydCBjb25zdCBDT01QT05FTlRfTUFOQUdFUiA9IG5ldyBDb21wb25lbnRNYW5hZ2VyKClcbi8vIENvcmUgQ29tcG9uZW50XG4gIC5yZWdpc3RlcihDb21wb25lbnQpXG5cbi8vIE5hdmlnYXRpb24gQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoTmF2aWdhdGlvbkNvbXBvbmVudClcblxuLy8gU2VhcmNoIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKFNlYXJjaENvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEZpbHRlclNlYXJjaENvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEF1dG9Db21wbGV0ZUNvbXBvbmVudClcblxuLy8gRmlsdGVyIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKEZpbHRlckJveENvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEZpbHRlck9wdGlvbnNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihSYW5nZUZpbHRlckNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKERhdGVSYW5nZUZpbHRlckNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKER5bmFtaWNGaWx0ZXJzQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoR2VvTG9jYXRpb25Db21wb25lbnQpXG5cbi8vIFJlc3VsdHMgQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoRGlyZWN0QW5zd2VyQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFJlc3VsdHNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihSZXN1bHRzSXRlbUNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEFjY29yZGlvblJlc3VsdHNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50KVxuXG4gIC5yZWdpc3RlcihNYXBDb21wb25lbnQpXG5cbi8vIFF1ZXN0aW9ucyBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQpXG5cbi8vIEhlbHBlciBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihJY29uQ29tcG9uZW50KTtcbiIsIi8qKiBAbW9kdWxlIFRlbXBsYXRlTG9hZGVyICovXG5cbmltcG9ydCBET00gZnJvbSAnLi4vZG9tL2RvbSc7XG5pbXBvcnQgeyBDT01QSUxFRF9URU1QTEFURVNfVVJMIH0gZnJvbSAnLi4vLi4vY29yZS9jb25zdGFudHMnO1xuXG4vKipcbiAqIFRlbXBsYXRlTG9hZGVyIGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBsb2FkaW5nIHRlbXBsYXRlcyBhc3luY2hyb25vdXNseVxuICogZnJvbSB0aGUgc2VydmVyIGFuZCByZWdpc3RlcnMgdGhlbSB3aXRoIHRoZSBwcm9wZXIgcmVuZGVyZXIuXG4gKiBJdCBhbHNvIGFsbG93cyB5b3UgdG8gYXNzaWduIHRoZW0gc3luY2hyb25vdXNseS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVMb2FkZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgaWYgKCFUZW1wbGF0ZUxvYWRlci5zZXRJbnN0YW5jZSh0aGlzKSkge1xuICAgICAgcmV0dXJuIFRlbXBsYXRlTG9hZGVyLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHVybCB0byBmZXRjaCBjb21waWxlZCB0ZW1wbGF0ZXMgZnJvbVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZVVybCA9IGNvbmZpZy50ZW1wbGF0ZVVybCB8fCBDT01QSUxFRF9URU1QTEFURVNfVVJMO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVzID0ge307XG4gICAgdGhpcy5fb25Mb2FkZWQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB0aGlzLl9pbml0KCk7XG4gIH1cblxuICBzdGF0aWMgc2V0SW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIF9pbml0ICgpIHtcbiAgICB0aGlzLmZldGNoVGVtcGxhdGVzKCk7XG4gIH1cblxuICBmZXRjaFRlbXBsYXRlcyAoKSB7XG4gICAgLy8gSWYgd2UgYWxyZWFkeSBoYXZlIHRlbXBsYXRlcyBsb2FkZWQsIGRvIG5vdGhpbmdcbiAgICBsZXQgbm9kZSA9IERPTS5xdWVyeSgnI3lleHQtYW5zd2Vycy10ZW1wbGF0ZXMnKTtcbiAgICBpZiAobm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEluamVjdCBhIHNjcmlwdCB0byBmZXRjaCB0aGUgY29tcGlsZWQgdGVtcGxhdGVzLFxuICAgIC8vIHdyYXBwaW5nIGl0IGEgUHJvbWlzZSBmb3IgY2xlYW5saW5lc3NcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICAgIGlkOiAneWV4dC1hbnN3ZXJzLXRlbXBsYXRlcycsXG4gICAgICAgIG9ubG9hZDogcmVzb2x2ZSxcbiAgICAgICAgb25lcnJvcjogcmVqZWN0LFxuICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgc3JjOiB0aGlzLl90ZW1wbGF0ZVVybFxuICAgICAgfSk7XG5cbiAgICAgIERPTS5hcHBlbmQoJ2JvZHknLCBzY3JpcHQpO1xuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIEltcGxtZW5ldCBlcnJvciBoYW5kbGluZyBoZXJlIChlLmcuIHJlcXVlc3QgY291bGQgZmFpbClcbiAgICAgICAgY29uc29sZS5sb2coJ1RlbXBsYXRlcyBsb2FkZWQgc3VjY2Vzc2Z1bGx5IScpO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXIgdGhlIHRlbXBsYXRlcyBpbnRlcm5hbGx5IHNvIHRoYXQgdGhleSBjYW4gYmUgbGF0ZXIgY29uc3VtZWRcbiAgICogKGUuZy4gYnkgY29tcG9uZW50cyBhbmQgcmVuZGVyZXJzKSB3aXRoIGNvbnZpZW5pZW5jZS5cbiAgICpcbiAgICogYGZldGNoVGVtcGxhdGVzYCB3aWxsIGF1dG9tYXRpY2FsbHkgY2FsbCB0aGlzLCBwcm92aWRpbmcgdGhlIGNvbXBpbGVkIHRlbXBsYXRlcyBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICByZWdpc3RlciAodGVtcGxhdGVzKSB7XG4gICAgdGhpcy5fdGVtcGxhdGVzID0gdGVtcGxhdGVzO1xuXG4gICAgLy8gTm90aWZ5IG91ciBjb25zdW1lcnMgdGhhdCB0aGUgdGVtcGxhdGVzIGFyZSBoZXJlIDopXG4gICAgdGhpcy5fb25Mb2FkZWQodGhpcy5fdGVtcGxhdGVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9uTG9hZGVkIChjYikge1xuICAgIHRoaXMuX29uTG9hZGVkID0gY2I7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgKHRlbXBsYXRlTmFtZSkge1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXNbdGVtcGxhdGVOYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIFRoZSBpbnRlcm5hbCB0ZW1wbGF0ZSBjb2xsZWN0aW9uXG4gICAqL1xuICBnZXRUZW1wbGF0ZXMgKCkge1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbmV4cG9ydCB7IENPTVBPTkVOVF9NQU5BR0VSIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRE9NIH0gZnJvbSAnLi9kb20vZG9tJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi9kb20vc2VhcmNocGFyYW1zJztcblxuZXhwb3J0IHsgUmVuZGVyZXJzIH0gZnJvbSAnLi9yZW5kZXJpbmcvY29uc3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZW1wbGF0ZUxvYWRlciB9IGZyb20gJy4vcmVuZGVyaW5nL3RlbXBsYXRlbG9hZGVyJztcbiIsIi8qKiBAbW9kdWxlIEVycm9yUmVwb3J0ZXIgKi9cblxuaW1wb3J0IHsgQW5zd2Vyc0Jhc2VFcnJvciB9IGZyb20gJy4vZXJyb3JzJztcblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCB7IExJQl9WRVJTSU9OIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBFcnJvclJlcG9ydGVyIGlzIHVzZWQgZm9yIHJlcG9ydGluZyBlcnJvcnMgdG8gdGhlIHNlcnZlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvclJlcG9ydGVyIHtcbiAgY29uc3RydWN0b3IgKGFwaUtleSwgYW5zd2Vyc0tleSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBhcGlLZXkgdG8gdXNlIGZvciByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuYXBpS2V5ID0gYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFuc3dlcnNLZXkgdG8gdXNlIHdoZW4gcmVwb3J0aW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmFuc3dlcnNLZXkgPSBhbnN3ZXJzS2V5O1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcG9ydCBzZW5kcyBhIG5ldHdvcmsgcmVxdWVzdCB0byB0aGUgc2VydmVyIHRvIGJlIGxvZ2dlZFxuICAgKiBAcGFyYW0ge0Fuc3dlcnNCYXNlRXJyb3J9IFRoZSBlcnJvciB0byBiZSByZXBvcnRlZFxuICAgKi9cbiAgcmVwb3J0IChlcnIpIHtcbiAgICBpZiAoIShlcnIgaW5zdGFuY2VvZiBBbnN3ZXJzQmFzZUVycm9yKSB8fCBlcnIucmVwb3J0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnIucmVwb3J0ZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvZXJyb3JzJyxcbiAgICAgIGFwaUtleTogdGhpcy5hcGlLZXksXG4gICAgICB2ZXJzaW9uOiAyMDE5MDMwMSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnZXJyb3InOiBlcnIudG9Kc29uKCksXG4gICAgICAgICdsaWJWZXJzaW9uJzogTElCX1ZFUlNJT04sXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5hbnN3ZXJzS2V5XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXF1ZXN0LmdldCgpXG4gICAgICAuY2F0Y2goY29uc29sZS5lcnIpO1xuXG4gICAgcmV0dXJuIGVycjtcbiAgfVxufVxuIiwiaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi9kb20vc2VhcmNocGFyYW1zJztcbmltcG9ydCB7IEFuc3dlcnNTdG9yYWdlRXJyb3IgfSBmcm9tICcuLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuXG4vKiogQG1vZHVsZSBQZXJzaXN0ZW50U3RvcmFnZSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzaXN0ZW50U3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHBhcmFtcyBtb2RlbFxuICAgICAqIEB0eXBlIHtTZWFyY2hQYXJhbXN9XG4gICAgICovXG4gICAgdGhpcy5fcGFyYW1zID0gbmV3IFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBoaXN0b3J5IGVkaXQgdGltZXIsIGlmIGFueVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5faGlzdG9yeVRpbWVyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGxpc3RlbmVycyB0byBldmVyeSBzdG9yYWdlIHVwZGF0ZVxuICAgICAqIEB0eXBlIHtmdW5jdGlvbltdfVxuICAgICAqL1xuICAgIHRoaXMuX3VwZGF0ZUxpc3RlbmVyID0gY29uZmlnLnVwZGF0ZUxpc3RlbmVyIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxpc3Qgb2YgbGlzdGVuZXJzIHRvIHN0b3JhZ2UgcmVzZXRzXG4gICAgICogQHR5cGUge2Z1bmN0aW9uW119XG4gICAgICovXG4gICAgdGhpcy5fcmVzZXRMaXN0ZW5lciA9IGNvbmZpZy5yZXNldExpc3RlbmVyIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgd2luZG93Lm9ucG9wc3RhdGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9wYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICAgIHRoaXMuX2NhbGxMaXN0ZW5lcih0aGlzLl91cGRhdGVMaXN0ZW5lcik7XG4gICAgICB0aGlzLl9jYWxsTGlzdGVuZXIodGhpcy5fcmVzZXRMaXN0ZW5lcik7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnQgdGhlIGdpdmVuIGtleS92YWx1ZSBwYWlyIGludG8gc3RvcmFnZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgdG8gaW5zZXJ0IHRoZSBkYXRhIGluXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUgZGF0YSB0byBpbnNlcnRcbiAgICovXG4gIHNldCAoa2V5LCBkYXRhKSB7XG4gICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc1N0b3JhZ2VFcnJvcignU3RvcmFnZSBkYXRhIGtleSBtdXN0IGJlIGEgc3RyaW5nJywga2V5LCBkYXRhKTtcbiAgICB9XG5cbiAgICBsZXQgbmV3RGF0YSA9IGRhdGE7XG4gICAgaWYgKHR5cGVvZiBkYXRhICE9PSAnc3RyaW5nJykge1xuICAgICAgbmV3RGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICB0aGlzLl9wYXJhbXMuc2V0KGtleSwgbmV3RGF0YSk7XG4gICAgdGhpcy5fdXBkYXRlSGlzdG9yeSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSB0aGUgZ2l2ZW4ga2V5IGZyb20gc3RvcmFnZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgdG8gZGVsZXRlXG4gICAqL1xuICBkZWxldGUgKGtleSkge1xuICAgIHRoaXMuX3BhcmFtcy5kZWxldGUoa2V5KTtcbiAgICB0aGlzLl91cGRhdGVIaXN0b3J5KCk7XG4gIH1cblxuICBfdXBkYXRlSGlzdG9yeSAoKSB7XG4gICAgaWYgKHRoaXMuX2hpc3RvcnlUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2hpc3RvcnlUaW1lcik7XG4gICAgfVxuXG4gICAgLy8gYmF0Y2ggdXBkYXRlIGNhbGxzIGFjcm9zcyBjb21wb25lbnRzIHRvIGF2b2lkIHVwZGF0aW5nIHRoZSB1cmwgdG9vIG11Y2hcbiAgICB0aGlzLl9oaXN0b3J5VGltZXIgPSBzZXRUaW1lb3V0KFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLl9oaXN0b3J5VGltZXIgPSBudWxsO1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgYD8ke3RoaXMuX3BhcmFtcy50b1N0cmluZygpfWApO1xuICAgICAgICB0aGlzLl9jYWxsTGlzdGVuZXIodGhpcy5fdXBkYXRlTGlzdGVuZXIpO1xuICAgICAgfSxcbiAgICAgIDEwMCk7XG4gIH1cblxuICAvKipcbiAgICogSW52b2tlIHRoZSBnaXZlbiBsaXN0IG9mIGNhbGxiYWNrcyB3aXRoIHRoZSBjdXJyZW50IHN0b3JhZ2UgZGF0YVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uW119IGxpc3RlbmVycyBUaGUgY2FsbGJhY2tzIHRvIGludm9rZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NhbGxMaXN0ZW5lciAobGlzdGVuZXIpIHtcbiAgICBsaXN0ZW5lcih0aGlzLmdldEFsbCgpLCB0aGlzLl9wYXJhbXMudG9TdHJpbmcoKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCB0aGUga2V5L3ZhbHVlIHBhaXJzIGluIHN0b3JhZ2VcbiAgICovXG4gIGdldEFsbCAoKSB7XG4gICAgY29uc3QgYWxsUGFyYW1zID0ge307XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIHRoaXMuX3BhcmFtcy5lbnRyaWVzKCkpIHtcbiAgICAgIGFsbFBhcmFtc1trZXldID0gdmFsO1xuICAgIH1cbiAgICByZXR1cm4gYWxsUGFyYW1zO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5pbXBvcnQgQ29yZSBmcm9tICcuL2NvcmUvY29yZSc7XG5cbmltcG9ydCB7XG4gIFRlbXBsYXRlTG9hZGVyLFxuICBDT01QT05FTlRfTUFOQUdFUixcbiAgUmVuZGVyZXJzLFxuICBET01cbn0gZnJvbSAnLi91aS9pbmRleCc7XG5cbmltcG9ydCBFcnJvclJlcG9ydGVyIGZyb20gJy4vY29yZS9lcnJvcnMvZXJyb3JyZXBvcnRlcic7XG5pbXBvcnQgeyBBbmFseXRpY3NSZXBvcnRlciB9IGZyb20gJy4vY29yZSc7XG5pbXBvcnQgUGVyc2lzdGVudFN0b3JhZ2UgZnJvbSAnLi91aS9zdG9yYWdlL3BlcnNpc3RlbnRzdG9yYWdlJztcbmltcG9ydCBHbG9iYWxTdG9yYWdlIGZyb20gJy4vY29yZS9zdG9yYWdlL2dsb2JhbHN0b3JhZ2UnO1xuXG4vKipcbiAqIFRoZSBtYWluIEFuc3dlcnMgaW50ZXJmYWNlXG4gKi9cbmNsYXNzIEFuc3dlcnMge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgaWYgKCFBbnN3ZXJzLnNldEluc3RhbmNlKHRoaXMpKSB7XG4gICAgICByZXR1cm4gQW5zd2Vycy5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIG9mIHRoZSByZW5kZXJlciB0byB1c2UgZm9yIHRoZSBjb21wb25lbnRzXG4gICAgICogVGhpcyBpcyBwcm92aWRlZCBkdXJpbmcgaW5pdGlhbGl6YXRpb24uXG4gICAgICogQHR5cGUge1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXJzLkhhbmRsZWJhcnMoKTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlclxuICAgICAqIEB0eXBlIHtDb21wb25lbnRNYW5hZ2VyfVxuICAgICAqL1xuICAgIHRoaXMuY29tcG9uZW50cyA9IENPTVBPTkVOVF9NQU5BR0VSO1xuXG4gICAgLyoqXG4gICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiB0byBpbnZva2Ugb25jZSB0aGUgbGlicmFyeSBpcyByZWFkeS5cbiAgICAgKiBUeXBpY2FsbHkgZmlyZWQgYWZ0ZXIgdGVtcGxhdGVzIGFyZSBmZXRjaGVkIGZyb20gc2VydmVyIGZvciByZW5kZXJpbmcuXG4gICAgICovXG4gICAgdGhpcy5fb25SZWFkeSA9IGZ1bmN0aW9uICgpIHt9O1xuICB9XG5cbiAgc3RhdGljIHNldEluc3RhbmNlIChpbnN0YW5jZSkge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cblxuICBpbml0IChjb25maWcpIHtcbiAgICBjb25zdCBnbG9iYWxTdG9yYWdlID0gbmV3IEdsb2JhbFN0b3JhZ2UoKTtcbiAgICBjb25zdCBwZXJzaXN0ZW50U3RvcmFnZSA9IG5ldyBQZXJzaXN0ZW50U3RvcmFnZSh7XG4gICAgICB1cGRhdGVMaXN0ZW5lcjogY29uZmlnLm9uU3RhdGVDaGFuZ2UsXG4gICAgICByZXNldExpc3RlbmVyOiBkYXRhID0+IGdsb2JhbFN0b3JhZ2Uuc2V0QWxsKGRhdGEpXG4gICAgfSk7XG4gICAgZ2xvYmFsU3RvcmFnZS5zZXRBbGwocGVyc2lzdGVudFN0b3JhZ2UuZ2V0QWxsKCkpO1xuXG4gICAgY29uc3QgY29yZSA9IG5ldyBDb3JlKHtcbiAgICAgIGFwaUtleTogY29uZmlnLmFwaUtleSxcbiAgICAgIGdsb2JhbFN0b3JhZ2U6IGdsb2JhbFN0b3JhZ2UsXG4gICAgICBwZXJzaXN0ZW50U3RvcmFnZTogcGVyc2lzdGVudFN0b3JhZ2UsXG4gICAgICBhbnN3ZXJzS2V5OiBjb25maWcuYW5zd2Vyc0tleSxcbiAgICAgIGZpZWxkRm9ybWF0dGVyczogY29uZmlnLmZpZWxkRm9ybWF0dGVycyxcbiAgICAgIGxvY2FsZTogY29uZmlnLmxvY2FsZVxuICAgIH0pO1xuXG4gICAgaWYgKGNvbmZpZy5vblN0YXRlQ2hhbmdlICYmIHR5cGVvZiBjb25maWcub25TdGF0ZUNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uZmlnLm9uU3RhdGVDaGFuZ2UocGVyc2lzdGVudFN0b3JhZ2UuZ2V0QWxsKCksIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyKDEpKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNcbiAgICAgIC5zZXRDb3JlKGNvcmUpXG4gICAgICAuc2V0UmVuZGVyZXIodGhpcy5yZW5kZXJlcik7XG5cbiAgICBpZiAoY29uZmlnLmJ1c2luZXNzSWQpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5zZXRBbmFseXRpY3NSZXBvcnRlcihcbiAgICAgICAgbmV3IEFuYWx5dGljc1JlcG9ydGVyKFxuICAgICAgICAgIGNvcmUsXG4gICAgICAgICAgY29uZmlnLmFuc3dlcnNLZXksXG4gICAgICAgICAgY29uZmlnLmJ1c2luZXNzSWQsXG4gICAgICAgICAgY29uZmlnLmFuYWx5dGljc09wdGlvbnMpXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMuX29uUmVhZHkgPSBjb25maWcub25SZWFkeSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIGlmIChjb25maWcudXNlVGVtcGxhdGVzID09PSBmYWxzZSB8fCBjb25maWcudGVtcGxhdGVCdW5kbGUpIHtcbiAgICAgIGlmIChjb25maWcudGVtcGxhdGVCdW5kbGUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbml0KGNvbmZpZy50ZW1wbGF0ZUJ1bmRsZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX29uUmVhZHkoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIFRlbXBsYXRlcyBhcmUgY3VycmVudGx5IGRvd25sb2FkZWQgc2VwYXJhdGVseSBmcm9tIHRoZSBDT1JFIGFuZCBVSSBidW5kbGUuXG4gICAgLy8gRnV0dXJlIGVuaGFuY2VtZW50IGlzIHRvIHNoaXAgdGhlIGNvbXBvbmVudHMgd2l0aCB0ZW1wbGF0ZXMgaW4gYSBzZXBhcmF0ZSBidW5kbGUuXG4gICAgdGhpcy50ZW1wbGF0ZXMgPSBuZXcgVGVtcGxhdGVMb2FkZXIoe1xuICAgICAgdGVtcGxhdGVVcmw6IGNvbmZpZy50ZW1wbGF0ZVVybFxuICAgIH0pLm9uTG9hZGVkKCh0ZW1wbGF0ZXMpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuaW5pdCh0ZW1wbGF0ZXMpO1xuXG4gICAgICB0aGlzLl9vblJlYWR5KCk7XG4gICAgfSk7XG5cbiAgICBpZiAoIWNvbmZpZy5zdXBwcmVzc0Vycm9yUmVwb3J0cykge1xuICAgICAgdGhpcy5fZXJyb3JSZXBvcnRlciA9IG5ldyBFcnJvclJlcG9ydGVyKGNvbmZpZy5hcGlLZXksIGNvbmZpZy5hbnN3ZXJzS2V5KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGUgPT4gdGhpcy5fZXJyb3JSZXBvcnRlci5yZXBvcnQoZS5lcnJvcikpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VuaGFuZGxlZHJlamVjdGlvbicsIGUgPT4gdGhpcy5fZXJyb3JSZXBvcnRlci5yZXBvcnQoZS5lcnJvcikpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZG9tUmVhZHkgKGNiKSB7XG4gICAgRE9NLm9uUmVhZHkoY2IpO1xuICB9XG5cbiAgb25SZWFkeSAoY2IpIHtcbiAgICB0aGlzLl9vblJlYWR5ID0gY2I7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRDb21wb25lbnQgKHR5cGUsIG9wdHMpIHtcbiAgICBpZiAodHlwZW9mIG9wdHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHRzID0ge1xuICAgICAgICBjb250YWluZXI6IG9wdHNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzLmNyZWF0ZSh0eXBlLCBvcHRzKS5tb3VudCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY3JlYXRlQ29tcG9uZW50IChvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50cy5jcmVhdGUoJ0NvbXBvbmVudCcsIG9wdHMpLm1vdW50KCk7XG4gIH1cblxuICByZWdpc3RlckhlbHBlciAobmFtZSwgY2IpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlZ2lzdGVySGVscGVyKG5hbWUsIGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5jb25zdCBBTlNXRVJTID0gbmV3IEFuc3dlcnMoKTtcbmV4cG9ydCBkZWZhdWx0IEFOU1dFUlM7XG4iXSwibmFtZXMiOlsiTWV0aG9kcyIsIkdFVCIsIlBPU1QiLCJQVVQiLCJERUxFVEUiLCJIdHRwUmVxdWVzdGVyIiwidXJsIiwiZGF0YSIsIm9wdHMiLCJyZXF1ZXN0IiwiZW5jb2RlUGFyYW1zIiwiT2JqZWN0IiwiYXNzaWduIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjcmVkZW50aWFscyIsInVuZGVmaW5lZCIsIm1ldGhvZCIsImZldGNoIiwibmF2aWdhdG9yIiwic2VuZEJlYWNvbiIsInBhcmFtcyIsImhhc1BhcmFtIiwiaW5kZXhPZiIsInNlYXJjaFF1ZXJ5Iiwia2V5IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiTElCX1ZFUlNJT04iLCJBUElfQkFTRV9VUkwiLCJDT01QSUxFRF9URU1QTEFURVNfVVJMIiwiQU5BTFlUSUNTX0JBU0VfVVJMIiwiU2VhcmNoUGFyYW1zIiwiX3BhcmFtcyIsIndpbmRvdyIsIlVSTFNlYXJjaFBhcmFtcyIsInBhcnNlIiwic2VhcmNoIiwic2xpY2UiLCJlbmNvZGVkUGFyYW1zIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwia2V5VmFsIiwiZGVjb2RlIiwicXVlcnkiLCJTdHJpbmciLCJuYW1lIiwidmFsdWUiLCJzdHJpbmciLCJwdXNoIiwiZW5jb2RlIiwiam9pbiIsImVudHJpZXMiLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwibWF0Y2giLCJBcGlSZXF1ZXN0IiwiX3JlcXVlc3RlciIsIl9iYXNlVXJsIiwiYmFzZVVybCIsIl9lbmRwb2ludCIsImVuZHBvaW50IiwiX2FwaUtleSIsImFwaUtleSIsIl92ZXJzaW9uIiwidmVyc2lvbiIsImdldCIsInBvc3QiLCJiYXNlUGFyYW1zIiwidXJsUGFyYW1zIiwibG9jYXRpb24iLCJ0b1N0cmluZyIsImhhcyIsImtleXMiLCJmb3JFYWNoIiwiQW5zd2Vyc0Jhc2VFcnJvciIsImVycm9yQ29kZSIsIm1lc3NhZ2UiLCJib3VuZGFyeSIsImNhdXNlZEJ5IiwiZXJyb3JNZXNzYWdlIiwicmVwb3J0ZWQiLCJidWlsdGluRXJyb3IiLCJlcnJvciIsIkFuc3dlcnNCYXNpY0Vycm9yIiwic3RhY2siLCJFcnJvciIsIkFuc3dlcnNDb21wb25lbnRFcnJvciIsImNvbXBvbmVudCIsIkFuc3dlcnNFbmRwb2ludEVycm9yIiwiQW5zd2Vyc0NvcmVFcnJvciIsIkFuc3dlcnNTdG9yYWdlRXJyb3IiLCJzdG9yYWdlS2V5IiwiQW5zd2Vyc0FuYWx5dGljc0Vycm9yIiwiZXZlbnQiLCJTZWFyY2hBcGkiLCJjb25maWciLCJhbnN3ZXJzS2V5IiwiX2Fuc3dlcnNLZXkiLCJsb2NhbGUiLCJfbG9jYWxlIiwidmVydGljYWxLZXkiLCJpbnB1dCIsImZpbHRlciIsImZhY2V0RmlsdGVyIiwibGltaXQiLCJvZmZzZXQiLCJpZCIsImdlb2xvY2F0aW9uIiwiaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQiLCJsYXQiLCJsbmciLCJyYWRpdXMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicXVlcnlTdHJpbmciLCJBdXRvQ29tcGxldGVEYXRhIiwic2VjdGlvbnMiLCJxdWVyeUlkIiwiZnJlZXplIiwibWFwIiwicyIsImxhYmVsIiwicmVzdWx0cyIsInIiLCJBdXRvQ29tcGxldGVSZXN1bHQiLCJoaWdobGlnaHRlZFZhbHVlIiwiaGlnaGxpZ2h0IiwibWF0Y2hlZFN1YnN0cmluZ3MiLCJzaG9ydFZhbHVlIiwidmFsIiwic29ydCIsImEiLCJiIiwiaW52ZXJ0ZWRTdWJzdHJpbmdzIiwic3Vic3RyaW5nIiwibmV4dE9mZnNldCIsIm5leHRTdGFydCIsImoiLCJzdGFydCIsIk51bWJlciIsImVuZCIsIkF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lciIsIm1vZHVsZUlkIiwiZnJvbSIsIkF1dG9Db21wbGV0ZUFwaSIsImJhcktleSIsInZlcnRpY2FsIiwidW5pdmVyc2FsIiwiUXVlc3Rpb25BbnN3ZXJBcGkiLCJxdWVzdGlvbiIsImVudGl0eUlkIiwic2l0ZSIsImVtYWlsIiwicXVlc3Rpb25UZXh0IiwicXVlc3Rpb25EZXNjcmlwdGlvbiIsInF1ZXN0aW9uTGFuZ3VhZ2UiLCJQUkVfU0VBUkNIIiwiU0VBUkNIX0xPQURJTkciLCJTRUFSQ0hfQ09NUExFVEUiLCJSZXN1bHQiLCJfcmF3IiwicmF3IiwiX2Zvcm1hdHRlZCIsImZvcm1hdHRlZCIsIm9yZGluYWwiLCJ0aXRsZSIsImRldGFpbHMiLCJsaW5rIiwic3VidGl0bGUiLCJtb2RpZmllciIsImJpZ0RhdGUiLCJpbWFnZSIsImNhbGxzVG9BY3Rpb24iLCJjb2xsYXBzZWQiLCJSZXN1bHRGYWN0b3J5IiwicmVzdWx0c0RhdGEiLCJmb3JtYXR0ZXJzIiwidmVydGljYWxJZCIsInNvdXJjZSIsImZvcm1hdHRlZERhdGEiLCJmcm9tR29vZ2xlQ3VzdG9tU2VhcmNoRW5naW5lIiwiZnJvbUJpbmdDdXN0b21TZWFyY2hFbmdpbmUiLCJmcm9tWmVuZGVza1NlYXJjaEVuZ2luZSIsImZyb21HZW5lcmljIiwiaW5kZXgiLCJkZXNjcmlwdGlvbiIsInRydW5jYXRlIiwid2Vic2l0ZSIsImh0bWxUaXRsZSIsImh0bWxTbmlwcGV0Iiwic25pcHBldCIsImh0bWxfdXJsIiwic3RyIiwidHJhaWxpbmciLCJzZXAiLCJ3b3JkcyIsIm1heCIsInRydW5jYXRlZCIsIndvcmQiLCJTZWN0aW9uIiwic2VhcmNoU3RhdGUiLCJTZWFyY2hTdGF0ZXMiLCJ2ZXJ0aWNhbENvbmZpZ0lkIiwicmVzdWx0c0NvdW50IiwiZW5jb2RlZFN0YXRlIiwiYXBwbGllZFF1ZXJ5RmlsdGVycyIsIkFwcGxpZWRRdWVyeUZpbHRlciIsImZhY2V0cyIsInBhcnNlTWFwIiwidmVydGljYWxVUkwiLCJtYXBNYXJrZXJzIiwiY2VudGVyQ29vcmRpbmF0ZXMiLCJyZXN1bHQiLCJ5ZXh0RGlzcGxheUNvb3JkaW5hdGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIml0ZW0iLCJtb2R1bGVzIiwidXJscyIsIkFycmF5IiwiaXNBcnJheSIsImFwcGxpZWRRdWVyeUZpbHRlciIsImRpc3BsYXlLZXkiLCJkaXNwbGF5VmFsdWUiLCJmaWx0ZXJzIiwiVW5pdmVyc2FsUmVzdWx0cyIsIkRpcmVjdEFuc3dlciIsImRpcmVjdEFuc3dlciIsImFuc3dlciIsInJlbGF0ZWRJdGVtIiwiZmllbGRBcGlOYW1lIiwiZmllbGRWYWx1ZXMiLCJOYXZpZ2F0aW9uIiwidGFiT3JkZXIiLCJuYXYiLCJWZXJ0aWNhbFJlc3VsdHMiLCJtZXJnZWQiLCJjb25jYXQiLCJOQVZJR0FUSU9OIiwiVU5JVkVSU0FMX1JFU1VMVFMiLCJWRVJUSUNBTF9SRVNVTFRTIiwiQVVUT0NPTVBMRVRFIiwiRElSRUNUX0FOU1dFUiIsIkZJTFRFUiIsIlFVRVJZIiwiUVVFUllfSUQiLCJGQUNFVF9GSUxURVIiLCJEWU5BTUlDX0ZJTFRFUlMiLCJTRUFSQ0hfTElNSVQiLCJQQVJBTVMiLCJHRU9MT0NBVElPTiIsIklOVEVOVFMiLCJRVUVTVElPTl9TVUJNSVNTSU9OIiwiRHluYW1pY0ZpbHRlcnMiLCJkeW5hbWljRmlsdGVycyIsImYiLCJmaWVsZElkIiwib3B0aW9ucyIsIm8iLCJjb3VudExhYmVsIiwic2VsZWN0ZWQiLCJTZWFyY2hJbnRlbnRzIiwiaW50ZW50cyIsIm5lYXJNZSIsImluY2x1ZGVzIiwiU2VhcmNoRGF0YVRyYW5zZm9ybWVyIiwiU3RvcmFnZUtleXMiLCJzZWFyY2hJbnRlbnRzIiwiUXVlc3Rpb25TdWJtaXNzaW9uIiwiZXJyb3JzIiwicHJpdmFjeVBvbGljeSIsInF1ZXN0aW9uU3VibWl0dGVkIiwiQ29yZSIsIl9maWVsZEZvcm1hdHRlcnMiLCJmaWVsZEZvcm1hdHRlcnMiLCJnbG9iYWxTdG9yYWdlIiwicGVyc2lzdGVudFN0b3JhZ2UiLCJfc2VhcmNoZXIiLCJfYXV0b0NvbXBsZXRlIiwiX3F1ZXN0aW9uQW5zd2VyIiwiYXBwZW5kIiwic2V0Iiwic2VhcmNoTG9hZGluZyIsInZlcnRpY2FsU2VhcmNoIiwiZ2V0U3RhdGUiLCJfaXNEeW5hbWljRmlsdGVyc0VuYWJsZWQiLCJ0cmFuc2Zvcm1WZXJ0aWNhbCIsIm1lcmdlZFJlc3VsdHMiLCJ1bml2ZXJzYWxTZWFyY2giLCJ0cmFuc2Zvcm0iLCJuYW1lc3BhY2UiLCJxdWVyeVVuaXZlcnNhbCIsInF1ZXJ5VmVydGljYWwiLCJxdWVyeUZpbHRlciIsInN1Ym1pdFF1ZXN0aW9uIiwic3VibWl0dGVkIiwiZXZ0IiwiY2IiLCJvbiIsIkNvbXBvbmVudE1hbmFnZXIiLCJzZXRJbnN0YW5jZSIsImdldEluc3RhbmNlIiwiX2NvbXBvbmVudFJlZ2lzdHJ5IiwiX2FjdGl2ZUNvbXBvbmVudHMiLCJfY29yZSIsIl9yZW5kZXJlciIsIl9hbmFseXRpY3NSZXBvcnRlciIsInJlbmRlcmVyIiwiY29yZSIsInJlcG9ydGVyIiwiY29tcG9uZW50Q2xhenoiLCJ0eXBlIiwiY29tcG9uZW50VHlwZSIsImFuYWx5dGljc1JlcG9ydGVyIiwiY29tcG9uZW50TWFuYWdlciIsImNvbXBvbmVudENsYXNzIiwiYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkIiwic29tZSIsImMiLCJpbml0Iiwic2V0U3RhdGUiLCJvZmYiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJmaW5kIiwiY29uc3RydWN0b3IiLCJpbnN0YW5jZSIsIlJlbmRlcmVyIiwidGVtcGxhdGUiLCJIYW5kbGViYXJzUmVuZGVyZXIiLCJ0ZW1wbGF0ZXMiLCJfaGFuZGxlYmFycyIsIl9oYiIsIl90ZW1wbGF0ZXMiLCJfcmVnaXN0ZXJDdXN0b21IZWxwZXJzIiwicmVnaXN0ZXJIZWxwZXIiLCJjb21waWxlIiwidGVtcGxhdGVOYW1lIiwiZSIsImFyZzEiLCJhcmcyIiwiZm4iLCJpbnZlcnNlIiwicGhvbmVOdW1iZXJTdHJpbmciLCJjbGVhbmVkIiwiaW50bENvZGUiLCJhcmdzIiwiYXJndW1lbnRzIiwicm9vdCIsInYiLCJSZW5kZXJlcnMiLCJTT1kiLCJIYW5kbGViYXJzIiwiZG9jdW1lbnQiLCJET00iLCJkIiwicCIsImh0bWwiLCJjb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiZnJhZyIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwiYXBwZW5kQ2hpbGQiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJwYXJlbnQiLCJzZWxlY3RvciIsIkhUTUxFbGVtZW50IiwiV2luZG93IiwiSFRNTERvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZWFkeVN0YXRlIiwiZWwiLCJvcHRzX2RhdGEiLCJub2RlIiwicHJvcHMiLCJhZGRDbGFzcyIsImluc2VydEFkamFjZW50SFRNTCIsImNsYXNzTmFtZSIsImNsYXNzZXMiLCJsZW4iLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJzdHlsZXMiLCJwcm9wIiwic3R5bGUiLCJhdHRyIiwic2V0QXR0cmlidXRlIiwiYXR0cnMiLCJzZXR0aW5ncyIsIkV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwib25jZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjdHh0IiwidGFyZ2V0IiwiaXNFcXVhbE5vZGUiLCJtYXRjaGVzIiwicGFyZW50Tm9kZSIsIkV2ZW50RW1pdHRlciIsIl9saXN0ZW5lcnMiLCJsaXN0ZW5lcnMiLCJrZWVwIiwiU3RhdGUiLCJfc3RhdGUiLCJvcHRWYWwiLCJfc2V0IiwiZW1pdCIsIm9wdFByb3AiLCJBbmFseXRpY3NFdmVudCIsImV2ZW50VHlwZSIsInRvVXBwZXJDYXNlIiwiQW5hbHl0aWNzUmVwb3J0ZXIiLCJidXNpbmVzc0lkIiwiZ2xvYmFsT3B0aW9ucyIsIl9idXNpbmVzc0lkIiwiX2dsb2JhbE9wdGlvbnMiLCJzZXRRdWVyeUlkIiwiYWRkT3B0aW9ucyIsImJlYWNvbiIsInRvQXBpRXZlbnQiLCJNb2R1bGVEYXRhIiwiX2lkIiwiX2hpc3RvcnkiLCJfZGF0YSIsImNhcHR1cmVQcmV2aW91cyIsInNoaWZ0IiwicHJldmlvdXMiLCJfcHJldmlvdXMiLCJwb3AiLCJHbG9iYWxTdG9yYWdlIiwiX21vZHVsZURhdGFDb250YWluZXIiLCJfZnV0dXJlTGlzdGVuZXJzIiwiX2luaXREYXRhQ29udGFpbmVyIiwiX2FwcGx5RnV0dXJlTGlzdGVuZXJzIiwiZGF0YUtleSIsInN0YXJ0c1dpdGgiLCJtb2R1bGVEYXRhIiwiZnV0dXJlcyIsImZ1dHVyZSIsIkNvbXBvbmVudCIsIl9jb25maWciLCJfdHlwZSIsIl9wYXJlbnQiLCJfY2hpbGRyZW4iLCJzdGF0ZSIsIl9hbmFseXRpY3NPcHRpb25zIiwiYW5hbHl0aWNzT3B0aW9ucyIsIl9jb250YWluZXIiLCJjcmVhdGVFbCIsIl9jbGFzc05hbWUiLCJfcmVuZGVyIiwicmVuZGVyIiwiX3RlbXBsYXRlIiwiX3RlbXBsYXRlTmFtZSIsImRlZmF1bHRUZW1wbGF0ZU5hbWUiLCJfaXNNb3VudGVkIiwidHJhbnNmb3JtRGF0YSIsIm9uQ3JlYXRlIiwib25Nb3VudCIsIm9uVXBkYXRlIiwibW91bnQiLCJuZXdTdGF0ZSIsImNoaWxkQ29tcG9uZW50IiwiY3JlYXRlIiwiX3BhcmVudE9wdHMiLCJyZW1vdmUiLCJ1bk1vdW50IiwiZW1wdHkiLCJiZWZvcmVNb3VudCIsImFzSlNPTiIsIl9vbk1vdW50IiwiZG9tSG9va3MiLCJxdWVyeUFsbCIsIl9jcmVhdGVBbmFseXRpY3NIb29rIiwiYmluZCIsImNoaWxkIiwiYmVmb3JlUmVuZGVyIiwiZG9tQ29tcG9uZW50cyIsIl9jcmVhdGVTdWJjb21wb25lbnQiLCJhZnRlclJlbmRlciIsImRvbUNvbXBvbmVudCIsImRhdGFzZXQiLCJjaGlsZERhdGEiLCJhZGRDaGlsZCIsImNoaWxkSFRNTCIsImlzQW5hbHl0aWNzQXR0YWNoZWQiLCJldmVudHR5cGUiLCJldmVudGxhYmVsIiwiZXZlbnRvcHRpb25zIiwicmVwb3J0IiwiUkVTSVpFX0RFQk9VTkNFIiwiVGFiIiwiY29uZmlnSWQiLCJpc0ZpcnN0IiwiaXNBY3RpdmUiLCJ0YWJzQ29uZmlnIiwidGFicyIsInRhYiIsIk5hdmlnYXRpb25Db21wb25lbnQiLCJkcm9wZG93bkxhYmVsIiwiZHJvcGRvd25JY29uIiwiX3RhYnMiLCJfdGFiT3JkZXIiLCJnZXREZWZhdWx0VGFiT3JkZXIiLCJnZXRVcmxQYXJhbXMiLCJfbmF2QnJlYWtwb2ludHMiLCJfZGVib3VuY2VUaW1lciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJyZWZpdE5hdiIsImNoZWNrT3V0c2lkZUNsaWNrIiwidG9nZ2xlTW9yZURyb3Bkb3duIiwibW9yZUJ1dHRvbiIsIm1haW5MaW5rcyIsImNvbGxhcHNlZExpbmtzIiwibmF2V2lkdGgiLCJjb250YWlucyIsIm9mZnNldFdpZHRoIiwibnVtQnJlYWtwb2ludHMiLCJsYXN0TGluayIsImNoaWxkcmVuIiwicHJlcGVuZCIsImZpcnN0TGluayIsImNsb3NlTW9yZURyb3Bkb3duIiwidG9nZ2xlIiwiY2xvc2VzdCIsIm1lcmdlVGFiT3JkZXIiLCJnZW5lcmF0ZVRhYlVybCIsInVuc2hpZnQiLCJvdGhlclRhYk9yZGVyIiwidGFiQ29uZmlnIiwiRmlsdGVyIiwicmVzcG9uc2VGaWx0ZXIiLCJncm91cHMiLCJncm91cEZpbHRlcnMiLCJmaWVsZCIsIm9yIiwiYW5kIiwiX2Zyb21NYXRjaGVyIiwibWluIiwibWF0Y2hlciIsIlNlYXJjaENvbXBvbmVudCIsIl9iYXJLZXkiLCJfdmVydGljYWxLZXkiLCJfZm9ybUVsIiwiZm9ybVNlbGVjdG9yIiwiX2lucHV0RWwiLCJpbnB1dEVsIiwibGFiZWxUZXh0Iiwic3VibWl0VGV4dCIsInN1Ym1pdEljb24iLCJwcm9tcHRIZWFkZXIiLCJhdXRvRm9jdXMiLCJjbGVhckJ1dHRvbiIsImF1dG9jb21wbGV0ZU9uTG9hZCIsInJlZGlyZWN0VXJsIiwicSIsIl9zZWFyY2hDb29sZG93biIsInNlYXJjaENvb2xkb3duIiwiX3Byb21wdEZvckxvY2F0aW9uIiwicHJvbXB0Rm9yTG9jYXRpb24iLCJCb29sZWFuIiwiX3Nob3dDbGVhckJ1dHRvbiIsInNldFF1ZXJ5IiwiaW5pdExvY2F0aW9uUHJvbXB0IiwiZm9jdXMiLCJpbml0U2VhcmNoIiwiaW5pdEF1dG9Db21wbGV0ZSIsImluaXRDbGVhckJ1dHRvbiIsImJ1dHRvbiIsImludGVudCIsImdldEN1cnJlbnRQb3NpdGlvbiIsInBvc2l0aW9uIiwiY29vcmRzIiwiYWNjdXJhY3kiLCJmb3JtIiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiYmx1ciIsImlucHV0U2VsZWN0b3IiLCJfYXV0b2NvbXBsZXRlIiwib3JpZ2luYWxRdWVyeSIsIm9uU3VibWl0IiwidHJpZ2dlciIsIl90aHJvdHRsZWQiLCJhbGxGaWx0ZXJzIiwiZ2V0QWxsIiwidG90YWxGaWx0ZXIiLCJnZXRBY3RpdmVDb21wb25lbnQiLCJzaG93Q2xlYXJCdXR0b24iLCJGaWx0ZXJTZWFyY2hDb21wb25lbnQiLCJpbnB1dEtleSIsIl9zdG9yZU9uQ2hhbmdlIiwic3RvcmVPbkNoYW5nZSIsInNlYXJjaFRleHQiLCJpc0ZpbHRlclNlYXJjaCIsIm9yaWdpbmFsRmlsdGVyIiwiZnJvbVJlc3BvbnNlIiwic2V0RmlsdGVyIiwiS2V5cyIsIkJBQ0tTUEFDRSIsIlRBQiIsIkVOVEVSIiwiU0hJRlQiLCJDVFJMIiwiQUxUIiwiRVNDQVBFIiwiTEVGVCIsIlJJR0hUIiwiVVAiLCJET1dOIiwiTEVGVF9PU19LRVkiLCJSSUdIVF9PU19LRVkiLCJTRUxFQ1RfS0VZIiwiQXV0b0NvbXBsZXRlQ29tcG9uZW50IiwiX2F1dG9jb21wbGV0ZUVscyIsImF1dG9Db21wbGV0ZUVscyIsIl9vcmlnaW5hbFF1ZXJ5IiwiX3NlY3Rpb25JbmRleCIsIl9yZXN1bHRJbmRleCIsIl9hdXRvRm9jdXMiLCJfb25TdWJtaXQiLCJoYXNSZXN1bHRzIiwic2VjdGlvbkluZGV4IiwicmVzdWx0SW5kZXgiLCJxdWVyeUlucHV0IiwiYXR0cmlidXRlcyIsImF1dG9jb21wbGV0ZSIsImF1dG9jb3JyZWN0Iiwic3BlbGxjaGVjayIsImNsb3NlIiwicmVzZXQiLCJhdXRvQ29tcGxldGUiLCJoYW5kbGVOYXZpZ2F0ZVJlc3VsdHMiLCJrZXlDb2RlIiwiaGFuZGxlU3VibWl0UmVzdWx0IiwiZGVsZWdhdGUiLCJ1cGRhdGVRdWVyeSIsImhhbmRsZVR5cGluZyIsInVwZGF0ZVN0YXRlIiwib3B0VmFsdWUiLCJxdWVyeUVsIiwiaWdub3JlZEtleXMiLCJhdXRvQ29tcGxldGVGaWx0ZXIiLCJhdXRvQ29tcGxldGVWZXJ0aWNhbCIsImF1dG9Db21wbGV0ZVVuaXZlcnNhbCIsIkZhY2V0IiwiZmxhdEZpbHRlcnMiLCJmbGF0TWFwIiwiJG9yIiwiRmlsdGVyQm94Q29tcG9uZW50IiwiX2ZpbHRlckNvbmZpZ3MiLCJfc2VhcmNoT25DaGFuZ2UiLCJzZWFyY2hPbkNoYW5nZSIsIl9hcHBseUJ1dHRvblNlbGVjdG9yIiwiYXBwbHlCdXR0b25TZWxlY3RvciIsIl9maWx0ZXJDb21wb25lbnRzIiwiX2ZpbHRlcnMiLCJfaXNEeW5hbWljIiwiaXNEeW5hbWljIiwiZmlsdGVyQ29uZmlncyIsInNob3dBcHBseUJ1dHRvbiIsIm9uQ2hhbmdlIiwib25GaWx0ZXJDaGFuZ2UiLCJnZXRGaWx0ZXIiLCJfc2F2ZUZpbHRlcnNUb1N0b3JhZ2UiLCJfc2VhcmNoIiwidmFsaWRGaWx0ZXJzIiwiY29tYmluZWRGaWx0ZXIiLCJmcm9tRmlsdGVycyIsInNldEZhY2V0RmlsdGVyIiwiU1VQUE9SVEVEX0NPTlRST0xTIiwiRmlsdGVyT3B0aW9uc0NvbXBvbmVudCIsImNvbnRyb2wiLCJwcmV2aW91c09wdGlvbnMiLCJzZWxlY3RlZE9wdGlvbnMiLCJfb3B0aW9ucyIsIl9jb250cm9sIiwiX29wdGlvblNlbGVjdG9yIiwib3B0aW9uU2VsZWN0b3IiLCJfb25DaGFuZ2UiLCJfbGFiZWwiLCJ0b0xvd2VyQ2FzZSIsIl91cGRhdGVPcHRpb24iLCJwYXJzZUludCIsImNoZWNrZWQiLCJfYnVpbGRGaWx0ZXIiLCJlbGVtZW50cyIsIl9hcHBseUZpbHRlciIsImVxdWFsIiwiZ3JvdXAiLCJSYW5nZUZpbHRlckNvbXBvbmVudCIsIl9maWVsZCIsIm1pblZhbCIsIm1heFZhbCIsIl9yYW5nZSIsImluaXRpYWxNaW4iLCJpbml0aWFsTWF4IiwiX3RpdGxlIiwiX21pbkxhYmVsIiwibWluTGFiZWwiLCJfbWF4TGFiZWwiLCJtYXhMYWJlbCIsIm1pblZhbHVlIiwibWF4VmFsdWUiLCJfdXBkYXRlUmFuZ2UiLCJpbmNsdXNpdmVSYW5nZSIsIkRhdGVSYW5nZUZpbHRlckNvbXBvbmVudCIsIl9pc0V4Y2x1c2l2ZSIsImlzRXhjbHVzaXZlIiwidG9kYXkiLCJEYXRlIiwidG9kYXlTdHJpbmciLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwicGFkU3RhcnQiLCJnZXREYXRlIiwibWluRGF0ZSIsIm1heERhdGUiLCJfZGF0ZSIsImRhdGVNaW4iLCJkYXRlTWF4IiwiZGF0ZSIsImV4Y2x1c2l2ZVJhbmdlIiwiRHluYW1pY0ZpbHRlcnNDb21wb25lbnQiLCJfZmllbGRDb250cm9scyIsImZpZWxkQ29udHJvbHMiLCJfZmlsdGVyYm94IiwiZW5hYmxlRHluYW1pY0ZpbHRlcnMiLCJNRVRFUlNfUEVSX01JTEUiLCJERUZBVUxUX0NPTkZJRyIsImdlb0J1dHRvbkljb24iLCJnZW9CdXR0b25UZXh0IiwiZW5hYmxlZFRleHQiLCJsb2FkaW5nVGV4dCIsImVycm9yVGV4dCIsImJ1dHRvblNlbGVjdG9yIiwiR2VvTG9jYXRpb25Db21wb25lbnQiLCJwbGFjZWhvbGRlciIsIl9lbmFibGVkIiwiZ2VvTG9hZGluZyIsImdlb0Vycm9yIiwiZ2VvRW5hYmxlZCIsImdlb1ZhbHVlIiwiZ2VvUGxhY2Vob2xkZXIiLCJfaW5pdEF1dG9Db21wbGV0ZSIsIl90b2dnbGVHZW9GaWx0ZXIiLCJfc2F2ZURhdGFUb1N0b3JhZ2UiLCJNYXRoIiwiRXZlbnRUeXBlcyIsIlRIVU1CU19VUCIsIlRIVU1CU19ET1dOIiwiRGlyZWN0QW5zd2VyQ29tcG9uZW50IiwiZm9ybUVsIiwiX3RodW1ic1VwU2VsZWN0b3IiLCJ0aHVtYnNVcFNlbGVjdG9yIiwiX3RodW1ic0Rvd25TZWxlY3RvciIsInRodW1ic0Rvd25TZWxlY3RvciIsIl92aWV3RGV0YWlsc1RleHQiLCJ2aWV3RGV0YWlsc1RleHQiLCJoYXNTdGF0ZSIsImNoZWNrZWRWYWx1ZSIsInJlcG9ydFF1YWxpdHkiLCJldmVudE9wdGlvbnMiLCJzZWFyY2hlciIsImN0YUxhYmVsIiwiaXNHb29kIiwiUmVzdWx0c0l0ZW1Db21wb25lbnQiLCJfdmVydGljYWxDb25maWdJZCIsIl9pc1VuaXZlcnNhbCIsImlzVW5pdmVyc2FsIiwiTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCIsIkV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQiLCJQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCIsIk1hcFByb3ZpZGVyIiwiX2hlaWdodCIsImhlaWdodCIsIl93aWR0aCIsIndpZHRoIiwiX3pvb20iLCJ6b29tIiwiX2RlZmF1bHRQb3NpdGlvbiIsImRlZmF1bHRQb3NpdGlvbiIsIl9zaG93RW1wdHlNYXAiLCJzaG93RW1wdHlNYXAiLCJfbWFwIiwiX2lzTG9hZGVkIiwiX29uUGluQ2xpY2siLCJvblBpbkNsaWNrIiwiX29uTG9hZGVkIiwib25Mb2FkZWQiLCJfcGluQ29uZmlnIiwicGluIiwiREVGQVVMVF9QSU5fQ09ORklHIiwiX2NvbGxhcHNlUGlucyIsImNvbGxhcHNlUGlucyIsImlzTG9hZGVkIiwibWFwRGF0YSIsIm1hcmtlcnMiLCJsb2NhdGlvblRvSXRlbSIsIm0iLCJjb2xsYXBzZWRNYXJrZXJzIiwiY29sbGFwc2VkTWFya2VyIiwiaWNvbiIsImFuY2hvciIsInN2ZyIsInNjYWxlZFNpemUiLCJsYWJlbFR5cGUiLCJHb29nbGVNYXBQcm92aWRlciIsIl9jbGllbnRJZCIsImNsaWVudElkIiwiX3NpZ25hdHVyZSIsInNpZ25hdHVyZSIsImhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMiLCJvbkxvYWQiLCJzY3JpcHQiLCJvbmxvYWQiLCJhc3luYyIsInNyYyIsImdlbmVyYXRlQ3JlZGVudGlhbHMiLCJnb29nbGVNYXBNYXJrZXJDb25maWdzIiwiR29vZ2xlTWFwTWFya2VyQ29uZmlnIiwiZW5jb2RlZE1hcmtlcnMiLCJzZXJpYWxpemUiLCJfaXNTdGF0aWMiLCJjc3MiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiYm91bmRzIiwiTGF0TG5nQm91bmRzIiwiX2NvbGxhcHNlTWFya2VycyIsIm1hcmtlciIsIk1hcmtlciIsImFkZExpc3RlbmVyIiwiZXh0ZW5kIiwiZml0Qm91bmRzIiwic2V0Q2VudGVyIiwiTGF0TG5nIiwic2VyaWFsaXplZE1hcmtlcnMiLCJwaW5Db25maWciLCJwaW5Db25maWdPYmoiLCJQb2ludCIsIngiLCJ5IiwiU2l6ZSIsInciLCJoIiwiTWFwQm94TWFwUHJvdmlkZXIiLCJtYXBib3hnbCIsImFjY2Vzc1Rva2VuIiwicmVsIiwibWFwYm94TWFwTWFya2VyQ29uZmlncyIsIk1hcEJveE1hcmtlckNvbmZpZyIsImNlbnRlciIsIm1hcENlbnRlciIsImdldENlbnRlck1hcmtlciIsIndyYXBwZXIiLCJMbmdMYXQiLCJzZXRMbmdMYXQiLCJhZGRUbyIsImdldEVsZW1lbnQiLCJzdGF0aWNNYXBQaW4iLCJQcm92aWRlclR5cGVzIiwiTWFwQ29tcG9uZW50IiwiX21hcFByb3ZpZGVyIiwibWFwUHJvdmlkZXIiLCJpc1N0YXRpYyIsImdldFByb3ZpZGVySW5zdGFuY2UiLCJzZXRUZW1wbGF0ZSIsImdlbmVyYXRlU3RhdGljIiwibG9hZEpTIiwiUmVzdWx0VHlwZSIsIkVWRU5UIiwiTE9DQVRJT04iLCJQRU9QTEUiLCJSZXN1bHRzQ29tcG9uZW50IiwiX2l0ZW1Db25maWciLCJnbG9iYWwiLCJyZW5kZXJJdGVtIiwiaXRlbVRlbXBsYXRlIiwic2V0U2VhcmNoTGltaXQiLCJjb25maWd1cmVJdGVtIiwiX3VuaXZlcnNhbFVybCIsInVuaXZlcnNhbFVybCIsImlzUHJlU2VhcmNoIiwiaXNTZWFyY2hMb2FkaW5nIiwiaXNTZWFyY2hDb21wbGV0ZSIsImluY2x1ZGVNYXAiLCJtYXBDb25maWciLCJzaG93Tm9SZXN1bHRzIiwic2V0SXRlbVJlbmRlciIsInNldEl0ZW1UZW1wbGF0ZSIsImNsYXp6IiwiZ2V0SXRlbUNvbXBvbmVudCIsImNvbXAiLCJuZXdPcHRzIiwiZ2xvYmFsQ29uZmlnIiwiaXRlbUNvbmZpZyIsImhhc0dsb2JhbFJlbmRlciIsImhhc0dsb2JhbFRlbXBsYXRlIiwic2V0UmVuZGVyIiwiQWNjb3JkaW9uUmVzdWx0c0NvbXBvbmVudCIsIl9zZWxlY3RvckJhc2UiLCJzZWxlY3RvckJhc2UiLCJjb2xsYXBzZWRDbGFzcyIsImFjY29yZGlvbkVscyIsImFjY29yZGlvbkVsIiwidG9nZ2xlRWwiLCJ0b2dnbGVTZWxlY3RvciIsImNvbnRlbnRFbCIsImJvZHlTZWxlY3RvciIsImNoYW5nZUhlaWdodCIsImhhbmRsZUNsaWNrIiwid3JhcHBlckVsIiwiaXNDb2xsYXBzZWQiLCJ0YXJnZXRFbCIsInNjcm9sbEhlaWdodCIsImJ1aWxkU2VsZWN0b3IiLCJVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50IiwiX2xpbWl0IiwiZ2V0Q2hpbGRDb25maWciLCJ1c2VBY2NvcmRpb24iLCJkZWZhdWx0Q29uZmlnIiwiUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IiwidmFsaWRhdGVDb25maWciLCJiaW5kQW5hbHl0aWNzIiwiYmluZEZvcm1TdWJtaXQiLCJxdWVzdGlvblRleHRFbCIsImZvcm1EYXRhIiwidmFsaWRhdGVSZXF1aXJlZCIsImxhbmd1YWdlIiwiaW5wdXRGaWVsZHMiLCJvYmoiLCJTVkdJY29uIiwicGF0aCIsImNvbXBsZXhDb250ZW50cyIsInZpZXdCb3giLCJjb250ZW50cyIsInBhdGhEZWZpbml0aW9uIiwiaWNvbnNBcnJheSIsInRodW1iSWNvbiIsInJlY2VpcHRJY29uIiwicGFudGhlb25JY29uIiwibWljSWNvbiIsImRpcmVjdGlvbnNJY29uIiwiY2FsZW5kYXJJY29uIiwiY2FsbG91dEljb24iLCJpbmZvSWNvbiIsImJyaWVmY2FzZUljb24iLCJrYWJvYkljb24iLCJwZXJzb25JY29uIiwibWFnbmlmeWluZ0dsYXNzSWNvbiIsIm9mZmljZUljb24iLCJsaW5rSWNvbiIsIndpbmRvd0ljb24iLCJwaG9uZUljb24iLCJ0YWdJY29uIiwiZG9jdW1lbnRJY29uIiwiY2hldnJvbkljb24iLCJzdXBwb3J0SWNvbiIsInlleHRJY29uIiwicGluSWNvbiIsImdlYXJJY29uIiwibGlnaHRCdWxiSWNvbiIsIkljb25zIiwibWFya3VwIiwic3Rhckljb24iLCJJY29uQ29tcG9uZW50IiwiaWNvbk5hbWUiLCJjdXN0b21JY29uIiwiaWNvblVybCIsIkNPTVBPTkVOVF9NQU5BR0VSIiwicmVnaXN0ZXIiLCJUZW1wbGF0ZUxvYWRlciIsIl90ZW1wbGF0ZVVybCIsInRlbXBsYXRlVXJsIiwiX2luaXQiLCJmZXRjaFRlbXBsYXRlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25lcnJvciIsImNvbnNvbGUiLCJsb2ciLCJFcnJvclJlcG9ydGVyIiwiZXJyIiwidG9Kc29uIiwiUGVyc2lzdGVudFN0b3JhZ2UiLCJfaGlzdG9yeVRpbWVyIiwiX3VwZGF0ZUxpc3RlbmVyIiwidXBkYXRlTGlzdGVuZXIiLCJfcmVzZXRMaXN0ZW5lciIsInJlc2V0TGlzdGVuZXIiLCJvbnBvcHN0YXRlIiwiX2NhbGxMaXN0ZW5lciIsIm5ld0RhdGEiLCJfdXBkYXRlSGlzdG9yeSIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJsaXN0ZW5lciIsImFsbFBhcmFtcyIsIkFuc3dlcnMiLCJjb21wb25lbnRzIiwiX29uUmVhZHkiLCJvblN0YXRlQ2hhbmdlIiwic2V0QWxsIiwic3Vic3RyIiwic2V0Q29yZSIsInNldFJlbmRlcmVyIiwic2V0QW5hbHl0aWNzUmVwb3J0ZXIiLCJvblJlYWR5IiwidXNlVGVtcGxhdGVzIiwidGVtcGxhdGVCdW5kbGUiLCJzdXBwcmVzc0Vycm9yUmVwb3J0cyIsIl9lcnJvclJlcG9ydGVyIiwiQU5TV0VSUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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