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

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
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
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, SearchApi);

      /**
       * A local reference to the API Key to use for the request
       * @type {string}
       * @private
       */
      if (!opts.apiKey) {
        throw new AnswersBasicError('Api Key is required', 'Search');
      }

      this._apiKey = opts.apiKey;
      /**
       * A local reference to the Answers Key to use for the request
       * @type {string}
       * @private
       */

      if (!opts.answersKey) {
        throw new AnswersBasicError('Answers Key is required', 'Search');
      }

      this._answersKey = opts.answersKey;
      /**
       * The version of the API to make a request to
       * @type {string}
       * @private
       */

      this._version = opts.version || 20190101 || 20190301;
      /**
       * A local reference to the locale to use for the request
       * @type {string}
       * @private
       */

      if (!opts.locale) {
        throw new AnswersBasicError('Locale is required', 'Search');
      }

      this._locale = opts.locale;
    }

    _createClass(SearchApi, [{
      key: "verticalQuery",
      value: function verticalQuery(queryString, verticalKey, filter) {
        var request = new ApiRequest({
          endpoint: '/v2/accounts/me/answers/vertical/query',
          apiKey: this._apiKey,
          version: this._version,
          params: {
            'input': queryString,
            'answersKey': this._answersKey,
            'filters': filter,
            'verticalKey': verticalKey,
            'locale': this._locale
          }
        });
        return request.get().then(function (response) {
          return response.json();
        });
      }
    }, {
      key: "query",
      value: function query(queryString) {
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

  /** @module Result */
  var Result =
  /*#__PURE__*/
  function () {
    function Result() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Result);

      Object.assign(this, data);
    }
    /**
     * resultsData expected format: { data: { ... }, highlightedFields: { ... }}
     */


    _createClass(Result, null, [{
      key: "from",
      value: function from(resultsData) {
        var results = [];

        for (var i = 0; i < resultsData.length; i++) {
          // TODO use resultData.highlightedFields to
          // transform resultData.data into html-friendly strings that highlight values.
          // Check for new data format, otherwise fallback to legacy
          results.push(new Result(resultsData[i].data || resultsData[i]));
        }

        return results;
      }
    }]);

    return Result;
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
      this.results = Result.from(data.results);
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

    _createClass(VerticalResults, null, [{
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
    QUERY_ID: 'query-id'
  };

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

        return _ref2 = {}, _defineProperty(_ref2, StorageKeys.QUERY_ID, data.response.queryId), _defineProperty(_ref2, StorageKeys.NAVIGATION, new Navigation()), _defineProperty(_ref2, StorageKeys.VERTICAL_RESULTS, VerticalResults.from(data.response)), _ref2;
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

        if (Object.keys(newData).length !== Object.keys(this._data).length) {
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

  /**
   * Core is the main application container for all of the network and storage
   * related behaviors of the application.
   */

  var Core =
  /*#__PURE__*/
  function () {
    function Core() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Core);

      if (typeof opts.apiKey !== 'string') {
        throw new Error('Missing required `apiKey`. Type must be {string}');
      }

      if (typeof opts.answersKey !== 'string') {
        throw new Error('Missing required `answersKey`. Type must be {string}');
      }
      /**
       * A reference to the client API Key used for all requests
       * @type {string}
       * @private
       */


      this._apiKey = opts.apiKey;
      /**
       * A reference to the client Answers Key used for all requests
       * @type {string}
       * @private
       */

      this._answersKey = opts.answersKey;
      /**
       * A reference to the client locale used for all requests. If not specified, defaults to "en" (for
       * backwards compatibility).
       * @type {string}
       * @private
       */

      this._locale = opts.locale || 'en';
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
    }

    _createClass(Core, [{
      key: "verticalSearch",
      value: function verticalSearch(queryString, verticalKey, filter) {
        var _this = this;

        this.storage.set(StorageKeys.VERTICAL_RESULTS, VerticalResults.searchLoading());
        return this._searcher.verticalQuery(queryString, verticalKey, filter).then(function (response) {
          return SearchDataTransformer.transformVertical(response);
        }).then(function (data) {
          _this.storage.set(StorageKeys.QUERY_ID, data[StorageKeys.QUERY_ID]);

          _this.storage.set(StorageKeys.NAVIGATION, data[StorageKeys.NAVIGATION]);

          _this.storage.set(StorageKeys.VERTICAL_RESULTS, data[StorageKeys.VERTICAL_RESULTS]);
        });
      }
    }, {
      key: "search",
      value: function search(queryString, urls) {
        var _this2 = this;

        this.storage.set(StorageKeys.UNIVERSAL_RESULTS, UniversalResults.searchLoading());
        return this._searcher.query(queryString).then(function (response) {
          return SearchDataTransformer.transform(response, urls);
        }).then(function (data) {
          _this2.storage.set(StorageKeys.QUERY_ID, data[StorageKeys.QUERY_ID]);

          _this2.storage.set(StorageKeys.NAVIGATION, data[StorageKeys.NAVIGATION]);

          _this2.storage.set(StorageKeys.DIRECT_ANSWER, data[StorageKeys.DIRECT_ANSWER]);

          _this2.storage.set(StorageKeys.UNIVERSAL_RESULTS, data[StorageKeys.UNIVERSAL_RESULTS], urls);
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
  var document = window.document;
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
        document = d;
      }
      /**
       * create a HTMLElement from and HTML string
       * @param {string} html The HTML to parse to a DOM node.
       * @return {HTMLElement}
       */

    }, {
      key: "create",
      value: function create(html) {
        if ('createRange' in document) {
          // prefer this implementation as it has wider browser support
          // and it's better performing.
          // see https://davidwalsh.name/convert-html-stings-dom-nodes
          var container = document.createElement('div');
          var frag = document.createRange().createContextualFragment(html);
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
          parent = document;
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
          parent = document;
        } // handle the case where client code is using a pointer to a dom node and it's null, e.g. this._container


        if (parent == null) {
          parent = document;
        }

        if (selector instanceof HTMLElement || selector instanceof HTMLDocument || selector instanceof Window) {
          return [selector];
        }

        return Array.from(parent.querySelectorAll(selector));
      }
    }, {
      key: "onReady",
      value: function onReady(cb) {
        if (document.readyState === 'complete' || document.readyState === 'loaded' || document.readyState === 'interactive') {
          cb();
          return;
        }

        DOM.on(document, 'DOMContentLoaded', cb);
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
        var node = document.createElement(el);
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
          parent = document;
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

      this.eventType = type.toUpperCase();

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
        var request = new HttpRequester();
        return request.beacon("".concat(ANALYTICS_BASE_URL, "/realtimeanalytics/data/answers/").concat(this._businessId), {
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

      this._templateName = config.templateName || 'default';
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
       * The handlebars template to use
       * @type {string}
       * @private
       */

      _this._templateName = 'navigation/navigation';
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
       * Create a new inclusive range filter for a field
       * @param {string} field The subject field of the filter
       * @param {*} min The minimum value of the range
       * @param {*} max The maximum value of the ranger
       * @returns {Filter}
       */

    }, {
      key: "range",
      value: function range(field, min, max) {
        return Filter.and(Filter.greaterThanEqual(field, min), Filter.lessThanEqual(field, max));
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
       * The template name to use for rendering with handlebars
       * @type {string}
       */

      _this._templateName = 'search/search';
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
          var query = form.querySelector(_this2._inputEl).value;

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
            DOM.trigger('form', 'submit');
          }
        });
      }
    }, {
      key: "search",
      value: function search(query) {
        var _this3 = this;

        if (this._throttled) {
          return;
        }

        this._throttled = true;
        setTimeout(function () {
          _this3._throttled = false;
        }, this._searchCooldown);

        if (this._verticalKey) {
          var allFilters = this.core.storage.getAll(StorageKeys.FILTER);
          var totalFilter = allFilters.length > 1 ? Filter.and.apply(Filter, _toConsumableArray(allFilters)) : allFilters[0];
          return this.core.verticalSearch(query, this._verticalKey, JSON.stringify(totalFilter));
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
        var _this4 = this;

        DOM.on(window, 'popstate', function () {
          _this4.query = _this4.getUrlParams().get('query');

          _this4.setState({
            query: _this4.query
          });

          _this4.core.setQuery(_this4.query);

          _this4.search(_this4.query);
        });
      }
    }], [{
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

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, FilterSearchComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterSearchComponent).call(this, opts));
      /**
       * The template name to use for rendering with handlebars
       * @type {string}
       */

      _this._templateName = 'search/filtersearch';
      /**
       * The input key for the vertical search configuration
       * @type {string}
       */

      _this._barKey = opts.barKey || opts.inputKey || null;
      /**
       * The vertical key for vertical search configuration
       * @type {string}
       */

      _this._verticalKey = opts.verticalKey || null;
      /**
       * Query submission is based on a form as context.
       * Optionally provided, otherwise defaults to native form node within container
       * @type {string} CSS selector
       */

      _this._formEl = opts.formSelector || 'form';
      /**
       * The input element used for searching and wires up the keyboard interaction
       * Optionally provided.
       * @type {string} CSS selector
       */

      _this._inputEl = opts.inputEl || '.js-yext-query';
      /**
       * The title used, provided to the template as a data point
       * Optionally provided.
       * @type {string}
       */

      _this.title = opts.title;
      /**
       * The search text used for labeling the input box, also provided to template.
       * Optionally provided
       * @type {string}
       */

      _this.searchText = opts.searchText || 'What are you interested in?';
      /**
       * The query text to show as the first item for auto complete.
       * Optionally provided
       * @type {string}
       */

      _this.promptHeader = opts.promptHeader || null;
      /**
       * Auto focuses the input box if set to true.
       * Optionally provided, defaults to false.
       * @type {boolean}
       */

      _this.autoFocus = opts.autoFocus === true;
      /**
       * submitURL will force the search query submission to get
       * redirected to the URL provided.
       * Optional, defaults to null.
       *
       * If no redirectUrl provided, we keep the page as a single page app.
       *
       * @type {boolean}
       */

      _this.redirectUrl = opts.redirectUrl || null;
      /**
       * The query string to use for the input box, provided to template for rendering.
       * Optionally provided
       * @type {string}
       */

      _this.query = opts.query || _this.getUrlParams().get("".concat(_this.name, ".query")) || '';
      /**
       * The filter string to use for the provided query
       * Optionally provided
       * @type {string}
       */

      _this.filter = opts.filter || _this.getUrlParams().get("".concat(_this.name, ".filter")) || '';
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
        var filters = this.core.storage.getAll(StorageKeys.FILTER);
        var totalFilter = filters[0];

        if (filters.length > 1) {
          totalFilter = Filter.and.apply(Filter, _toConsumableArray(filters));
        }

        var searchQuery = this.core.storage.getState(StorageKeys.QUERY) || '';
        this.core.verticalSearch(searchQuery, this._verticalKey, JSON.stringify(totalFilter));
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
       * The default handlebars template name to use for rendering
       * @type {string}
       */

      _this._templateName = 'search/autocomplete';
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

        DOM.on(queryInput, 'blur', function (e) {
          // TODO(jdelerme): temporary hack to allow click handlers to fire. Close logic to be moved to parent
          setTimeout(function () {
            return _this2.close();
          }, 100);
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
        var ignoredKeys = [Keys.DOWN, Keys.UP, Keys.CTRL, Keys.ALT, Keys.SHIFT, Keys.LEFT, Keys.RIGHT, Keys.LEFT_OS_KEY, Keys.RIGHT_OS_KEY, Keys.SELECT_KEY];

        if (ignoredKeys.indexOf(key) > -1) {
          return;
        } // User escapes out of auto complete, so we reset it to the original input


        if (key === Keys.ESCAPE) {
          this.updateQuery(this._originalQuery);
          this.close();
          return;
        } // Tabbing out or enter should close the auto complete.


        if (key === Keys.ENTER || key === Keys.TAB) {
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
          return;
        } // submit the search on enter


        if (key === Keys.ENTER) {
          e.preventDefault();
          var filter = '';

          if (this._sectionIndex >= 0 && this._resultIndex >= 0) {
            filter = JSON.stringify(sections[this._sectionIndex].results[this._resultIndex].filter);
          }

          this.updateQuery(value);
          this._originalQuery = value;

          this._onSubmit(value, filter);

          this.reset();
          this.close();
        }
      }
    }], [{
      key: "type",
      get: function get() {
        return 'AutoComplete';
      }
    }]);

    return AutoCompleteComponent;
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
        return Object.assign({}, o, {
          checked: false
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
      /**
       * The template to render, based on the control
       * @type {string}
       * @private
       */

      _this._templateName = "controls/".concat(config.control);
      return _this;
    }

    _createClass(FilterOptionsComponent, [{
      key: "setState",
      value: function setState(data) {
        _get(_getPrototypeOf(FilterOptionsComponent.prototype), "setState", this).call(this, Object.assign({}, data, {
          name: this.name,
          options: this._options,
          label: this._label
        }));
      }
    }, {
      key: "onMount",
      value: function onMount() {
        var _this2 = this;

        DOM.delegate(this._container, this._optionSelector, 'click', function (event) {
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
      value: function _updateOption(index, checked) {
        if (this._control === 'singleoption') {
          this._options = this._options.map(function (o) {
            return Object.assign({}, o, {
              checked: false
            });
          });
        }

        this._options[index] = Object.assign({}, this._options[index], {
          checked: checked
        });
        this.setState();
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
          return o.checked;
        }).map(function (o) {
          return Filter.equal(o.field, o.value);
        });

        return filters.length > 0 ? Filter.group.apply(Filter, _toConsumableArray(filters)) : {};
      }
    }], [{
      key: "type",
      get: function get() {
        return 'FilterOptions';
      }
    }]);

    return FilterOptionsComponent;
  }(Component);

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

        var _loop = function _loop(i) {
          var config = _this2._filterConfigs[i];

          var component = _this2.componentManager.create(config.type, Object.assign({}, config, {
            parent: _this2,
            name: "".concat(_this2.name, ".filter").concat(i),
            storeOnChange: false,
            container: ".js-yext-filterbox-filter".concat(i),
            onChange: function onChange(f) {
              _this2.onFilterChange(i, f);
            }
          }));

          component.mount();

          _this2._filterComponents.push(component);
        };

        // Initialize filters from configs
        for (var i = 0; i < this._filterConfigs.length; i++) {
          _loop(i);
        } // Initialize apply button


        if (!this._searchOnChange) {
          var button = DOM.query(this._container, this._applyButtonSelector);
          DOM.on(button, 'click', function () {
            _this2._saveFiltersToStorage();

            _this2._search();
          });
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
       * Save current filters to storage to be used in the next search
       * @private
       */

    }, {
      key: "_saveFiltersToStorage",
      value: function _saveFiltersToStorage() {
        var validFilters = this._filters.filter(function (f) {
          return f !== undefined && f !== null;
        });

        var combinedFilter = validFilters.length > 1 ? Filter.and.apply(Filter, _toConsumableArray(validFilters)) : validFilters[0];
        this.core.setFilter(this.name, combinedFilter || {});
      }
      /**
       * Trigger a search with all filters in storage
       */

    }, {
      key: "_search",
      value: function _search() {
        var allFilters = this.core.storage.getAll(StorageKeys.FILTER);
        var totalFilter = allFilters.length > 1 ? Filter.and.apply(Filter, _toConsumableArray(allFilters)) : allFilters[0];
        var query = this.core.storage.getState(StorageKeys.QUERY) || '';
        this.core.verticalSearch(query, this._verticalKey, JSON.stringify(totalFilter));
      }
    }], [{
      key: "type",
      get: function get() {
        return 'FilterBox';
      }
    }]);

    return FilterBoxComponent;
  }(Component);

  var DirectAnswerComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(DirectAnswerComponent, _Component);

    function DirectAnswerComponent() {
      var _this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, DirectAnswerComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DirectAnswerComponent).call(this, opts));
      _this.moduleId = StorageKeys.DIRECT_ANSWER;
      _this._templateName = 'results/directanswer';
      return _this;
    }

    _createClass(DirectAnswerComponent, [{
      key: "beforeMount",
      value: function beforeMount() {
        if (!this.hasState('answer')) {
          return false;
        }

        return true;
      }
    }], [{
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
      _this._templateName = 'results/resultsitem';
      return _this;
    }

    _createClass(ResultsItemComponent, null, [{
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
      var _this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, LocationResultsItemComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(LocationResultsItemComponent).call(this, opts));
      _this._templateName = 'results/locationresultsitem';
      return _this;
    }

    _createClass(LocationResultsItemComponent, null, [{
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
      var _this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, EventResultsItemComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(EventResultsItemComponent).call(this, opts));
      _this._templateName = 'results/eventresultsitem';
      return _this;
    }

    _createClass(EventResultsItemComponent, null, [{
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
      var _this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, PeopleResultsItemComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(PeopleResultsItemComponent).call(this, opts));
      _this._templateName = 'results/peopleresultsitem';
      return _this;
    }

    _createClass(PeopleResultsItemComponent, null, [{
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
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, MapProvider);

      /**
       * The API Key used for interacting with the map provider
       * @type {string}
       */
      this._apiKey = opts.apiKey;
      /**
       * The height of the map to append to the DOM, defaults to 100%
       * @type {number}
       */

      this._height = opts.height || 200;
      /**
       * The width of the map to append to the DOM, defaults to 100%
       * @type {number}
       */

      this._width = opts.width || 600;
      /**
       * The zoom level of the map, defaults to 9
       * @type {number}
       */

      this._zoom = opts.zoom || 9;
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
       * Callback to invoke once the Javascript is loaded
       * @type {function}
       */

      this._onLoaded = opts.onLoaded || function () {};
      /**
       * The custom configuration override to use for the map markers
       * @type {Object|Function}
       */


      this._pinConfig = typeof opts.pin === 'function' ? opts.pin : Object.assign(MapProvider.DEFAULT_PIN_CONFIG, opts.pin);
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

        if (!mapData || mapData.mapMarkers.length <= 0) {
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
          var googleMapMarkerConfigs = GoogleMapMarkerConfig.from(mapData.mapMarkers, _this3._pinConfig, _this3.map);

          for (var i = 0; i < googleMapMarkerConfigs.length; i++) {
            var marker = new google.maps.Marker(googleMapMarkerConfigs[i]);
            bounds.extend(marker.position);
          }

          _this3.map.fitBounds(bounds);
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
       * @param {GoogleMap} A reference to the google map to apply the marker to
       * @param {object[]} markers The data of the marker
       * @param {Object} pinConfig The configuration to apply to the marker
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
            onLoad();
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
        if (!mapData || mapData.mapMarkers.length <= 0) {
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
          center: [mapData.mapCenter.longitude, mapData.mapCenter.latitude]
        });
        var mapboxMapMarkerConfigs = MapBoxMarkerConfig.from(mapData.mapMarkers, this._pinConfig, this._map);

        for (var i = 0; i < mapboxMapMarkerConfigs.length; i++) {
          var wrapper = mapboxMapMarkerConfigs[i].wrapper;
          var coords = new mapboxgl.LngLat(mapboxMapMarkerConfigs[i].position.longitude, mapboxMapMarkerConfigs[i].position.latitude);
          var marker = new mapboxgl.Marker(wrapper).setLngLat(coords);
          marker.addTo(this._map);
        }
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
       * The default template to use to render this component
       */

      _this._templateName = 'results/map';
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

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, ResultsComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ResultsComponent).call(this, opts));
      _this.moduleId = StorageKeys.VERTICAL_RESULTS;
      _this._templateName = 'results/results';
      _this.limit = opts.limit || 5;
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

      if (opts.renderItem === undefined && opts._parentOpts !== undefined) {
        opts.renderItem = opts._parentOpts.renderItem;
      }

      if (opts.itemTemplate === undefined && opts._parentOpts !== undefined) {
        opts.itemTemplate = opts._parentOpts.itemTemplate;
      }

      _this.configureItem({
        render: opts.renderItem,
        template: opts.itemTemplate
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
      _this._templateName = 'results/universalresults';
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

  var QuestionSubmissionComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(QuestionSubmissionComponent, _Component);

    function QuestionSubmissionComponent() {
      var _this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, QuestionSubmissionComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(QuestionSubmissionComponent).call(this, opts));
      _this.moduleId = StorageKeys.UNIVERSAL_RESULTS;
      _this._templateName = 'questions/submission';
      /**
       * Question submission is based on a form as context.
       * Optionally provided, otherwise defaults to native form node within container
       * @type {string} CSS selector
       */

      _this._formEl = opts.formSelector || 'form';
      /**
       * The label to use for the e-mail address input
       * Optionally provided, otherwise defaults to `Email Address`
       * @type {string}
       */

      _this._emailLabel = opts.emailLabel || '*Email Address:';
      /**
       * The label to use for the name input
       * Optionally provided, otherwise defaults to `Name`
       * @type {string}
       */

      _this._nameLabel = opts.nameLabel || 'Name:';
      /**
       * The label to use for the Question
       * Optionally provided, otherwise defaults to `What is your question?`
       * @type {string}
       */

      _this._questionLabel = opts.questionLabel || '*What is your question?';
      /**
       * The label to use for the Privacy Policy
       * Optionally provided, otherwise defaults to `What is your question?`
       * @type {string}
       */

      _this._privacyPolicyLabel = opts.privacyPolicyLabel || 'I agree to our Privacy Policy:';
      /**
       * The label to use for the Submit button
       * Optionally provided, otherwise defaults to `Submit?`
       * @type {string}
       */

      _this._buttonLabel = opts.buttonLabel || 'Submit';
      return _this;
    }

    _createClass(QuestionSubmissionComponent, [{
      key: "beforeMount",
      value: function beforeMount() {
        // Only mount our component if the query has been triggered at least once.
        if (this.getState('hasQueried') === true) {
          return true;
        }

        return false;
      }
    }, {
      key: "onMount",
      value: function onMount() {
        this.initSubmit(this._formEl);
      }
    }, {
      key: "initSubmit",
      value: function initSubmit(formSelector) {
        this._formEl = formSelector;
        var form = DOM.query(this._container, this._formEl);
        DOM.on(form, 'submit', function (e) {
          e.preventDefault(); // TODO(billy) Serialize form
          // this.core.submitQuestion(form);
        });
      }
    }, {
      key: "setState",
      value: function setState(data, val) {
        // Since we're binding to search results,
        // and we only want to show the QA submission
        return _get(_getPrototypeOf(QuestionSubmissionComponent.prototype), "setState", this).call(this, {
          hasQueried: data.sections !== undefined,
          emailLabel: this._emailLabel,
          nameLabel: this._nameLabel,
          questionLabel: this._questionLabel,
          privacyPolicyLabel: this._privacyPolicyLabel,
          buttonLabel: this._buttonLabel,
          question: new SearchParams(window.location.search.substring(1)).get('query')
        });
      }
    }], [{
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
  .register(FilterBoxComponent).register(FilterOptionsComponent) // Results Components
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
          var reporter = new AnalyticsReporter(core, config.answersKey, config.businessId, config.analyticsOptions);
          this.components.setAnalyticsReporter(reporter);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2Vycy11bWQuanMiLCJzb3VyY2VzIjpbInNyYy9jb3JlL2h0dHAvaHR0cHJlcXVlc3Rlci5qcyIsInNyYy9jb3JlL2NvbnN0YW50cy5qcyIsInNyYy91aS9kb20vc2VhcmNocGFyYW1zLmpzIiwic3JjL2NvcmUvaHR0cC9hcGlyZXF1ZXN0LmpzIiwic3JjL2NvcmUvZXJyb3JzL2Vycm9ycy5qcyIsInNyYy9jb3JlL3NlYXJjaC9zZWFyY2hhcGkuanMiLCJzcmMvY29yZS9tb2RlbHMvYXV0b2NvbXBsZXRlZGF0YS5qcyIsInNyYy9jb3JlL3NlYXJjaC9hdXRvY29tcGxldGVkYXRhdHJhbnNmb3JtZXIuanMiLCJzcmMvY29yZS9zZWFyY2gvYXV0b2NvbXBsZXRlYXBpLmpzIiwic3JjL2NvcmUvbW9kZWxzL3Jlc3VsdC5qcyIsInNyYy9jb3JlL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzLmpzIiwic3JjL2NvcmUvbW9kZWxzL3NlY3Rpb24uanMiLCJzcmMvY29yZS9tb2RlbHMvdW5pdmVyc2FscmVzdWx0cy5qcyIsInNyYy9jb3JlL21vZGVscy9kaXJlY3RhbnN3ZXIuanMiLCJzcmMvY29yZS9tb2RlbHMvbmF2aWdhdGlvbi5qcyIsInNyYy9jb3JlL21vZGVscy92ZXJ0aWNhbHJlc3VsdHMuanMiLCJzcmMvY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzLmpzIiwic3JjL2NvcmUvc2VhcmNoL3NlYXJjaGRhdGF0cmFuc2Zvcm1lci5qcyIsInNyYy9jb3JlL2V2ZW50ZW1pdHRlci9ldmVudGVtaXR0ZXIuanMiLCJzcmMvY29yZS9zdG9yYWdlL21vZHVsZWRhdGEuanMiLCJzcmMvY29yZS9zdG9yYWdlL3N0b3JhZ2UuanMiLCJzcmMvY29yZS9jb3JlLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvY29tcG9uZW50bWFuYWdlci5qcyIsInNyYy91aS9yZW5kZXJpbmcvcmVuZGVyZXIuanMiLCJzcmMvdWkvcmVuZGVyaW5nL2hhbmRsZWJhcnNyZW5kZXJlci5qcyIsInNyYy91aS9yZW5kZXJpbmcvY29uc3QuanMiLCJzcmMvdWkvZG9tL2RvbS5qcyIsInNyYy91aS9jb21wb25lbnRzL3N0YXRlLmpzIiwic3JjL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50LmpzIiwic3JjL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc3JlcG9ydGVyLmpzIiwic3JjL2NvcmUvaW5kZXguanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb25jb21wb25lbnQuanMiLCJzcmMvY29yZS9tb2RlbHMvZmlsdGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3NlYXJjaC9maWx0ZXJzZWFyY2hjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9zZWFyY2gvYXV0b2NvbXBsZXRlY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJvcHRpb25zY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJib3hjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL2RpcmVjdGFuc3dlcmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvcmVzdWx0c2l0ZW1jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL2xvY2F0aW9ucmVzdWx0c2l0ZW1jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL2V2ZW50cmVzdWx0c2l0ZW1jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3Blb3BsZXJlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL3Byb3ZpZGVycy9tYXBwcm92aWRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9wcm92aWRlcnMvZ29vZ2xlbWFwcHJvdmlkZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvcHJvdmlkZXJzL21hcGJveG1hcHByb3ZpZGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL21hcGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvcmVzdWx0c2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvdW5pdmVyc2FscmVzdWx0c2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3F1ZXN0aW9ucy9xdWVzdGlvbnN1Ym1pc3Npb25jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb25zdC5qcyIsInNyYy91aS9yZW5kZXJpbmcvdGVtcGxhdGVsb2FkZXIuanMiLCJzcmMvdWkvaW5kZXguanMiLCJzcmMvY29yZS9lcnJvcnMvZXJyb3JyZXBvcnRlci5qcyIsInNyYy9hbnN3ZXJzLXVtZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQG1vZHVsZSBIdHRwUmVxdWVzdGVyICovXG5cbi8qIGdsb2JhbCBmZXRjaCAqL1xuXG4vKipcbiAqIFR5cGVzIG9mIEhUVFAgcmVxdWVzdHNcbiAqL1xuY29uc3QgTWV0aG9kcyA9IHtcbiAgR0VUOiAnZ2V0JyxcbiAgUE9TVDogJ3Bvc3QnLFxuICBQVVQ6ICdwdXQnLFxuICBERUxFVEU6ICdkZWxldGUnXG59O1xuXG4vKipcbiAqIEh0dHBSZXF1ZXN0ZXIgaXMgYSB3cmFwcGVyIGFyb3VuZCB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uIG9mIEFKQVhcbiAqIHJlbGF0ZWQgbWF0dGVycy4gSXQncyB1c2VkIHRvIG1ha2UgYWxsIHR5cGVzIG9mIG5ldHdvcmsgcmVxdWVzdHNcbiAqIGFuZCBleHBvc2VzIGEgcHJvbWlzZSBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0dHBSZXF1ZXN0ZXIge1xuICAvKipcbiAgICogQ3JlYXRlIGEgR0VUIEhUVFAgcmVxdWVzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gcHJvdmlkZSAoZ2V0cyBlbmNvZGVkIGludG8gdGhlIFVSTClcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgQ29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICovXG4gIGdldCAodXJsLCBkYXRhLCBvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChNZXRob2RzLkdFVCwgdGhpcy5lbmNvZGVQYXJhbXModXJsLCBkYXRhKSwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgUE9TVCBIVFRQIHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHByb3ZpZGUgKGdldHMgZW5jb2RlZCBpbnRvIHRoZSBVUkwpXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIENvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAqL1xuICBwb3N0ICh1cmwsIGRhdGEsIG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxuICAgICAgTWV0aG9kcy5QT1NULFxuICAgICAgdXJsLFxuICAgICAgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICBjcmVkZW50aWFsczogdW5kZWZpbmVkXG4gICAgICB9LCBvcHRzKVxuICAgICk7XG4gIH1cblxuICByZXF1ZXN0IChtZXRob2QsIHVybCwgb3B0cykge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgbWV0aG9kLFxuICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICAgIH0sIG9wdHMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgYmVhY29uIHRvIHRoZSBwcm92aWRlZCB1cmwgd2hpY2ggd2lsbCBzZW5kIGEgbm9uLWJsb2NraW5nIHJlcXVlc3RcbiAgICogdG8gdGhlIHNlcnZlciB0aGF0IGlzIGd1YXJhbnRlZWQgdG8gc2VuZCBiZWZvcmUgcGFnZSBsb2FkLiBObyByZXNwb25zZSBpcyByZXR1cm5lZCxcbiAgICogc28gYmVhY29ucyBhcmUgcHJpbWFyaWx5IHVzZWQgZm9yIGFuYWx5dGljcyByZXBvcnRpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBzZW5kIHRoZSBiZWFjb24gdG9cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgVGhlIGRhdGEgcGF5bG9hZCB0byBzZW5kIGluIHRoZSBiZWFjb25cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgcmVxdWVzdCBpcyBzdWNjZXNzZnVsbHkgcXVldWVkXG4gICAqL1xuICBiZWFjb24gKHVybCwgZGF0YSkge1xuICAgIHJldHVybiBuYXZpZ2F0b3Iuc2VuZEJlYWNvbih1cmwsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgfVxuXG4gIGVuY29kZVBhcmFtcyAodXJsLCBwYXJhbXMpIHtcbiAgICBsZXQgaGFzUGFyYW0gPSB1cmwuaW5kZXhPZignPycpID4gLTE7XG5cbiAgICBsZXQgc2VhcmNoUXVlcnkgPSAnJztcbiAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICBpZiAoIWhhc1BhcmFtKSB7XG4gICAgICAgIGhhc1BhcmFtID0gdHJ1ZTtcbiAgICAgICAgc2VhcmNoUXVlcnkgKz0gJz8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VhcmNoUXVlcnkgKz0gJyYnO1xuICAgICAgfVxuXG4gICAgICBzZWFyY2hRdWVyeSArPSBrZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gdXJsICsgc2VhcmNoUXVlcnk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbi8qKiBUaGUgY3VycmVudCBsaWIgdmVyc2lvbiwgcmVwb3J0ZWQgd2l0aCBlcnJvcnMgYW5kIGFuYWx5dGljcyAqL1xuZXhwb3J0IGNvbnN0IExJQl9WRVJTSU9OID0gJ3YwLjcuNSc7XG5cbi8qKiBUaGUgYmFzZSB1cmwgZm9yIHRoZSBhcGkgYmFja2VuZCAqL1xuZXhwb3J0IGNvbnN0IEFQSV9CQVNFX1VSTCA9ICdodHRwczovL2xpdmVhcGkueWV4dC5jb20nO1xuXG4vKiogVGhlIGRlZmF1bHQgdXJsIGZvciBjb21waWxlZCBjb21wb25lbnQgdGVtcGxhdGVzICovXG5leHBvcnQgY29uc3QgQ09NUElMRURfVEVNUExBVEVTX1VSTCA9ICdodHRwczovL2Fzc2V0cy5zaXRlc2Nkbi5uZXQvYW5zd2Vycy9hbnN3ZXJzdGVtcGxhdGVzLmNvbXBpbGVkLm1pbi5qcyc7XG5cbi8qKiBUaGUgYmFzZSB1cmwgZm9yIHRoZSBhbmFseXRpY3MgYmFja2VuZCAgKi9cbmV4cG9ydCBjb25zdCBBTkFMWVRJQ1NfQkFTRV9VUkwgPSAnaHR0cHM6Ly9yZWFsdGltZWFuYWx5dGljcy55ZXh0LmNvbSc7XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hQYXJhbXMgKi9cblxuLyogZ2xvYmFsIHdpbmRvdyAqL1xuXG4vKipcbiAqIFNlYXJjaFBhcmFtcyBpcyBhIGNsYXNzIHRvIGdldCB0aGUgc2VhcmNoIHBhcmFtcyBpbiBhIFVSTC5cbiAqIEl0IGlzIGEgcmVwbGFjZW1lbnQgZm9yIFVSTC5zZWFyY2hQYXJhbXMgYW5kIFVSTFNlYXJjaFBhcmFtcyBmb3IgYnJvd3NlcnMgbGlrZSBJRTExXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0cnVjdG9yICh1cmwpIHtcbiAgICAvKipcbiAgICAgKiBNYXBwaW5nIG9mIGFsbCBxdWVyeSBwYXJhbWV0ZXJzIGluIHRoZSBnaXZlbiB1cmwsIHF1ZXJ5IHBhcmFtIC0+IHZhbHVlXG4gICAgICogT25seSB1c2VkIGlmIFVSTFNlYXJjaFBhcmFtcyBkb2VzIG5vdCBleGlzdCBpbiB0aGUgd2luZG93XG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3BhcmFtcyA9IHt9O1xuXG4gICAgaWYgKHdpbmRvdyAmJiB3aW5kb3cuVVJMU2VhcmNoUGFyYW1zKSB7XG4gICAgICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyh1cmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wYXJhbXMgPSB0aGlzLnBhcnNlKHVybCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHBhcnNlIGNyZWF0ZXMgYSBtYXBwaW5nIG9mIGFsbCBxdWVyeSBwYXJhbXMgaW4gYSBnaXZlbiB1cmxcbiAgICogVGhlIHF1ZXJ5IHBhcmFtIHZhbHVlcyBhcmUgZGVjb2RlZCBiZWZvcmUgYmVpbmcgcHV0IGluIHRoZSBtYXBcbiAgICogVGhyZWUgdHlwZXMgb2YgaW5wdXQgYXJlIHN1cHBvcnRlZFxuICAgKiAgICgxKSBmdWxsIFVSTCBlLmcuIGh0dHA6Ly93d3cueWV4dC5jb20vP3E9aGVsbG9cbiAgICogICAoMikgcGFyYW1zIHdpdGggPyBlLmcuID9xPWhlbGxvXG4gICAqICAgKDEpIHBhcmFtcyB3aXRob3V0ID8gZS5nLiBxPWhlbGxvXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybFxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBtYXBwaW5nIGZyb20gcXVlcnkgcGFyYW0gLT4gdmFsdWUgd2hlcmUgdmFsdWUgaXMgJycgaWYgbm8gdmFsdWUgaXMgcHJvdmlkZWRcbiAgICovXG4gIHBhcnNlICh1cmwpIHtcbiAgICBsZXQgcGFyYW1zID0ge307XG4gICAgbGV0IHNlYXJjaCA9IHVybDtcblxuICAgIGlmIChzZWFyY2ggPT09ICcnKSB7XG4gICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cblxuICAgIC8vIE5vcm1hbGl6ZSBhbGwgdXJsIGlucHV0cyB0byBzdHJpbmcgb2YgcXVlcnkgcGFyYW1zIHNlcGFyYXRlZCBieSAmXG4gICAgaWYgKHVybC5pbmRleE9mKCc/JykgPiAtMSkge1xuICAgICAgc2VhcmNoID0gdXJsLnNsaWNlKHVybC5pbmRleE9mKCc/JykgKyAxKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbmNvZGVkUGFyYW1zID0gc2VhcmNoLnNwbGl0KCcmJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmNvZGVkUGFyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrZXlWYWwgPSBlbmNvZGVkUGFyYW1zW2ldLnNwbGl0KCc9Jyk7XG4gICAgICBpZiAoa2V5VmFsLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcGFyYW1zW2tleVZhbFswXV0gPSBTZWFyY2hQYXJhbXMuZGVjb2RlKGtleVZhbFsxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXNba2V5VmFsWzBdXSA9ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJhbXM7XG4gIH1cblxuICAvKipcbiAgICogZ2V0IHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBxdWVyeSBwYXJhbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgdGhlIHF1ZXJ5IHBhcmFtIGtleSB0byBnZXQgdGhlIHZhbHVlIG9mXG4gICAqIEByZXR1cm4ge3N0cmluZ30gcGFyYW0gdmFsdWUsIG51bGwgb3RoZXJ3aXNlXG4gICAqL1xuICBnZXQgKHF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl9wYXJhbXNbU3RyaW5nKHF1ZXJ5KV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtc1txdWVyeV07XG4gIH1cblxuICAvKipcbiAgICogc2V0IGNoYW5nZXMgdGhlIHZhbHVlIG9mIGEgZ2l2ZW4gcXVlcnkgcGFyYW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgdGhlIHF1ZXJ5IHBhcmFtIGtleVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgdGhlIHZhbHVlIG9mIHRoZSBxdWVyeSBwYXJhbSB1cGRhdGUgd2l0aFxuICAgKi9cbiAgc2V0IChuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMuX3BhcmFtc1tTdHJpbmcobmFtZSldID0gU3RyaW5nKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoYXMgY2hlY2tzIHRvIHNlZSBpZiB0aGUgZ2l2ZW4gcXVlcnkgcGFyYW0ga2V5IGV4aXN0cyBpbiB0aGUgcGFyYW1zIG9iamVjdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgdGhlIHF1ZXJ5IHBhcmFtIHRvIGNoZWNrXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIHF1ZXJ5IHBhcmFtIGlzIGluIHRoZSBwYXJhbXMgb2JqZWN0LCBmYWxzZSBvL3dcbiAgICovXG4gIGhhcyAocXVlcnkpIHtcbiAgICByZXR1cm4gcXVlcnkgaW4gdGhpcy5fcGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIHRvU3RyaW5nIHJldHVybnMgYSB1cmwgd2l0aCBhbGwgdGhlIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgcGFyYW1zIG9iamVjdCAod2l0aG91dCBhID8pXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvU3RyaW5nICgpIHtcbiAgICBsZXQgc3RyaW5nID0gW107XG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuX3BhcmFtcykge1xuICAgICAgc3RyaW5nLnB1c2goYCR7a2V5fT0ke1NlYXJjaFBhcmFtcy5lbmNvZGUodGhpcy5fcGFyYW1zW2tleV0pfWApO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nLmpvaW4oJyYnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBkZWNvZGUgcmV0dXJucyB0aGUgZGVjb2RlZCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyB0byBkZWNvZGVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGRlY29kZSAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHJpbmcucmVwbGFjZSgvWyArXS9nLCAnJTIwJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIGRlY29kZSByZXR1cm5zIHRoZSBlbmNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBzdHJpbmcgKGUuZy4gKyAtPiAlMkIpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyB0byBlbmNvZGVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGVuY29kZSAoc3RyaW5nKSB7XG4gICAgbGV0IHJlcGxhY2UgPSB7XG4gICAgICAnISc6ICclMjEnLFxuICAgICAgXCInXCI6ICclMjcnLFxuICAgICAgJygnOiAnJTI4JyxcbiAgICAgICcpJzogJyUyOScsXG4gICAgICAnJTIwJzogJysnXG4gICAgfTtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZykucmVwbGFjZSgvWyEnKCldfCUyMC9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiByZXBsYWNlW21hdGNoXTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXBpUmVxdWVzdCAqL1xuXG5pbXBvcnQgSHR0cFJlcXVlc3RlciBmcm9tICcuL2h0dHByZXF1ZXN0ZXInO1xuaW1wb3J0IHsgQVBJX0JBU0VfVVJMIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vdWkvZG9tL3NlYXJjaHBhcmFtcyc7IC8vIFRPRE8gaWRlYWxseSB0aGlzIHdvdWxkIGJlIHBhc3NlZCBpbiBhcyBhIHBhcmFtXG5cbi8qKlxuICogQXBpUmVxdWVzdCBpcyB0aGUgYmFzZSBjbGFzcyBmb3IgYWxsIEFQSSByZXF1ZXN0cy5cbiAqIEl0IGRlZmluZXMgYWxsIG9mIHRoZSBjb3JlIHByb3BlcnRpZXMgcmVxdWlyZWQgdG8gbWFrZSBhIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpUmVxdWVzdCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiB1c2VkIGZvciBtYWtpbmcgbmV0d29yayByZXF1ZXN0IGFuZCBoYW5kbGluZyBlcnJvcnNcbiAgICAgKiBAdHlwZSB7SHR0cFJlcXVlc3Rlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3JlcXVlc3RlciA9IG5ldyBIdHRwUmVxdWVzdGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYmFzZVVybCB0byB1c2UgZm9yIG1ha2luZyBhIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYmFzZVVybCA9IG9wdHMuYmFzZVVybCB8fCBBUElfQkFTRV9VUkw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZW5kcG9pbnQgdG8gdXNlIGluIHRoZSB1cmwgKGFwcGVuZGVkIHRvIHRoZSB7YmFzZVVybH0pXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2VuZHBvaW50ID0gb3B0cy5lbmRwb2ludCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnNpb24gb2YgdGhlIEFQSSB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJzaW9uID0gb3B0cy52ZXJzaW9uIHx8IDIwMTkwMTAxO1xuXG4gICAgLyoqXG4gICAgICogQWRkaXRpb25hbCBkYXRhIHBhcmFtcyB0aGF0IGFyZSBzZW50IGFsb25nIHdpdGggdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcGFyYW1zID0gb3B0cy5wYXJhbXMgfHwge307XG4gIH1cblxuICAvKipcbiAgICogZ2V0IGNyZWF0ZXMgYSBuZXcgYEdFVGAgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSByZXF1ZXN0IGNsYXNzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZ2V0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdGVyLmdldCh0aGlzLl9iYXNlVXJsICsgdGhpcy5fZW5kcG9pbnQsIHRoaXMucGFyYW1zKHRoaXMuX3BhcmFtcykpO1xuICB9XG5cbiAgcG9zdCAob3B0cykge1xuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0ZXIucG9zdCh0aGlzLl9iYXNlVXJsICsgdGhpcy5fZW5kcG9pbnQsIHRoaXMucGFyYW1zKHRoaXMuX3BhcmFtcyksIG9wdHMpO1xuICB9XG5cbiAgcGFyYW1zIChwYXJhbXMpIHtcbiAgICB2YXIgYmFzZVBhcmFtcyA9IHtcbiAgICAgICd2JzogdGhpcy5fdmVyc2lvbixcbiAgICAgICdhcGlfa2V5JzogdGhpcy5fYXBpS2V5XG4gICAgfTtcblxuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKCkpO1xuXG4gICAgaWYgKHVybFBhcmFtcy5oYXMoJ2JldGEnKSkge1xuICAgICAgYmFzZVBhcmFtc1snYmV0YSddID0gdXJsUGFyYW1zLmdldCgnYmV0YScpO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbnkgcGFyYW1hdGVycyB3aG9zIHZhbHVlIGlzIGB1bmRlZmluZWRgLlxuICAgIC8vXG4gICAgLy8gTk9URShiaWxseSkgUHJvYmFibHkgYmV0dGVyIHRvIGJlIGV4cGxpY2l0IGFib3V0IGhvdyB0byBoYW5kbGUgdGhpcyBhdCB0aGUgcmVxdWVzdCBidWlsZGluZyBsZXZlbCxcbiAgICAvLyBidXQgSSBjYW4ndCBzZWUgYW55IGNhc2VzIHdoZXJlIHdlJ2QgZXZlciB3YW50IHRvIHNlbmQgJ3VuZGVmaW5lZCcgYXMgYSB2YWx1ZSB0byB0aGUgc2VydmVyLlxuICAgIC8vIFNvIGl0J3MgcHJvYmFibHkgZmluZSB0byAnY2xlYW4nIHRoZSBwYXJhbXMgb2JqZWN0IGhlcmVcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmIChwYXJhbXNba2V5XSA9PT0gdW5kZWZpbmVkIHx8IHBhcmFtc1trZXldID09PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBwYXJhbXNba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGJhc2VQYXJhbXMsIHBhcmFtcyB8fCB7fSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEVycm9ycyAqL1xuXG4vKipcbiAqIEFuc3dlcnNCYXNlRXJyb3IgaXMgYW4gZXh0ZW5zaW9uIG9mIHRoZSBiYXNlIEVycm9yIG9iamVjdC5cbiAqIFRoaXMgaXMgdGhlIG9iamVjdCB0aGF0IGlzIHVzZWQgdG8gd2hlbiByZXBvcnRpbmcgdG8gdGhlIHNlcnZlci5cbiAqIEBleHRlbmRzIEVycm9yXG4gKlxuICogRXJyb3IgY29kZXMgZmFsbCBpbnRvIG9uZSBvZiBmb3VyIGNhdGVnb3JpZXM6XG4gKiAxWFggZXJyb3JzOiBCYXNpYyBlcnJvcnNcbiAqIDJYWCBlcnJvcnM6IFVJIGVycm9yc1xuICogM1hYIGVycm9yczogRW5kcG9pbnQgZXJyb3JzXG4gKiA0WFggZXJyb3JzOiBDb3JlIGVycm9yc1xuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0Jhc2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IgKGVycm9yQ29kZSwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5lcnJvckNvZGUgPSBlcnJvckNvZGU7XG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuYm91bmRhcnkgPSBib3VuZGFyeTtcbiAgICB0aGlzLmNhdXNlZEJ5ID0gY2F1c2VkQnk7XG4gICAgdGhpcy5yZXBvcnRlZCA9IGZhbHNlO1xuICB9XG5cbiAgdG9Kc29uICgpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbSAoYnVpbHRpbkVycm9yLCBib3VuZGFyeSkge1xuICAgIGNvbnN0IGVycm9yID0gbmV3IEFuc3dlcnNCYXNpY0Vycm9yKGJ1aWx0aW5FcnJvci5tZXNzYWdlLCBib3VuZGFyeSk7XG4gICAgZXJyb3Iuc3RhY2sgPSBidWlsdGluRXJyb3Iuc3RhY2s7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc0Jhc2ljRXJyb3IgaXMgYSB3cmFwcGVyIGFyb3VuZCBhbGwgdGhlIGJ1aWx0LWluIGVycm9yc1xuICogZS5nLiB1bmRlZmluZWQgdmFyaWFibGVzLCBpbmNvcnJlY3Qgc3ludGF4LCB0eXBlcywgbWlzc2luZyBtZXRob2RzLCBldGMuXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQmFzaWNFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoMTAwLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc1VpRXJyb3IgdXNlZCBmb3IgdGhpbmdzIGxpa2UgRE9NIGVycm9ycy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNVaUVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigyMDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgaXMgdXNlZCBmb3IgQ29tcG9uZW50IG9yaWVudGVkIGVycm9yc1xuICogZS5nLiBmYWlsdXJlIHRvIHJlbmRlciwgb3IgY2F0Y2hpbmcgdW5rbm93bnMuXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGNvbXBvbmVudCwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigyMDEsIG1lc3NhZ2UsIGNvbXBvbmVudCwgY2F1c2VkQnkpO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc0VuZHBvaW50RXJyb3IgcmVwcmVzZW50cyBhbGwgbmV0d29yayByZWxhdGVkIGVycm9ycy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNFbmRwb2ludEVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigzMDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzQ29yZUVycm9yIHJlcHJlc2VudHMgZXJyb3JzIGZvciBwcmVjb25kaXRpb24gZmFpbHVyZXMgaW4gdGhlIGNvcmUgbGlicmFyeVxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0NvcmVFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoNDAwLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpO1xuICB9XG59XG4vKipcbiAqIEFuc3dlcnNTdG9yYWdlRXJyb3IgcmVwcmVzZW50cyBzdG9yYWdlIHJlbGF0ZWQgZXJyb3JzXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzU3RvcmFnZUVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBzdG9yYWdlS2V5LCBkYXRhLCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDQwMSwgbWVzc2FnZSwgJ1N0b3JhZ2UnLCBjYXVzZWRCeSk7XG4gICAgdGhpcy5zdG9yYWdlS2V5ID0gc3RvcmFnZUtleTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGV2ZW50LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDQwMiwgbWVzc2FnZSwgJ0FuYWx5dGljcycsIGNhdXNlZEJ5KTtcbiAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaEFwaSAqL1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IHsgQW5zd2Vyc0Jhc2ljRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBTZWFyY2hBcGkgaXMgdGhlIEFQSSBmb3IgZG9pbmcgdmFyaW91cyB0eXBlcyBvZiBzZWFyY2hcbiAqIG92ZXIgdGhlIG5ldHdvcmsgKGUuZy4gdmVydGljYWwgb3IgdW5pdmVyc2FsKVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hBcGkge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIW9wdHMuYXBpS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0FwaSBLZXkgaXMgcmVxdWlyZWQnLCAnU2VhcmNoJyk7XG4gICAgfVxuICAgIHRoaXMuX2FwaUtleSA9IG9wdHMuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIEFuc3dlcnMgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFvcHRzLmFuc3dlcnNLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQW5zd2VycyBLZXkgaXMgcmVxdWlyZWQnLCAnU2VhcmNoJyk7XG4gICAgfVxuICAgIHRoaXMuX2Fuc3dlcnNLZXkgPSBvcHRzLmFuc3dlcnNLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgQVBJIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnNpb24gPSBvcHRzLnZlcnNpb24gfHwgMjAxOTAxMDEgfHwgMjAxOTAzMDE7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgbG9jYWxlIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFvcHRzLmxvY2FsZSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdMb2NhbGUgaXMgcmVxdWlyZWQnLCAnU2VhcmNoJyk7XG4gICAgfVxuICAgIHRoaXMuX2xvY2FsZSA9IG9wdHMubG9jYWxlO1xuICB9XG5cbiAgdmVydGljYWxRdWVyeSAocXVlcnlTdHJpbmcsIHZlcnRpY2FsS2V5LCBmaWx0ZXIpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvdmVydGljYWwvcXVlcnknLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IHF1ZXJ5U3RyaW5nLFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICAgICdmaWx0ZXJzJzogZmlsdGVyLFxuICAgICAgICAndmVydGljYWxLZXknOiB2ZXJ0aWNhbEtleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH1cblxuICBxdWVyeSAocXVlcnlTdHJpbmcpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvcXVlcnknLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IHF1ZXJ5U3RyaW5nLFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVEYXRhICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Db21wbGV0ZURhdGEge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgdGhpcy5zZWN0aW9ucyA9IGRhdGEuc2VjdGlvbnMgfHwgW107XG4gICAgdGhpcy5xdWVyeUlkID0gZGF0YS5xdWVyeUlkIHx8ICcnO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UpIHtcbiAgICBsZXQgc2VjdGlvbnM7XG4gICAgaWYgKHJlc3BvbnNlLnNlY3Rpb25zKSB7XG4gICAgICBzZWN0aW9ucyA9IHJlc3BvbnNlLnNlY3Rpb25zLm1hcChzID0+ICh7XG4gICAgICAgIGxhYmVsOiBzLmxhYmVsLFxuICAgICAgICByZXN1bHRzOiBzLnJlc3VsdHMubWFwKHIgPT4gbmV3IEF1dG9Db21wbGV0ZVJlc3VsdChyKSlcbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VjdGlvbnMgPSBbeyByZXN1bHRzOiByZXNwb25zZS5yZXN1bHRzLm1hcChyID0+IG5ldyBBdXRvQ29tcGxldGVSZXN1bHQocikpIH1dO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEF1dG9Db21wbGV0ZURhdGEoeyBzZWN0aW9ucywgcXVlcnlJZDogcmVzcG9uc2UucXVlcnlJZCB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXV0b0NvbXBsZXRlUmVzdWx0IHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIHRoaXMuZmlsdGVyID0gZGF0YS5maWx0ZXIgfHwge307XG4gICAgdGhpcy5oaWdobGlnaHRlZFZhbHVlID0gdGhpcy5oaWdobGlnaHQoZGF0YSk7XG4gICAgdGhpcy5rZXkgPSBkYXRhLmtleSB8fCAnJztcbiAgICB0aGlzLm1hdGNoZWRTdWJzdHJpbmdzID0gZGF0YS5tYXRjaGVkU3Vic3RyaW5ncyB8fCBbXTtcbiAgICB0aGlzLnZhbHVlID0gZGF0YS52YWx1ZSB8fCAnJztcbiAgICB0aGlzLnNob3J0VmFsdWUgPSBkYXRhLnNob3J0VmFsdWUgfHwgdGhpcy52YWx1ZTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLy8gVE9ETyhqZGVsZXJtZSk6IGNvbnNvbGlkYXRlIHdpdGggb3RoZXIgaGlnaGxpZ2h0IGZ1bmN0aW9uc1xuICBoaWdobGlnaHQgKGRhdGEpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBzaG9ydFZhbHVlLCBtYXRjaGVkU3Vic3RyaW5ncyB9ID0gZGF0YTtcbiAgICBjb25zdCB2YWwgPSB2YWx1ZSB8fCBzaG9ydFZhbHVlO1xuXG4gICAgaWYgKCFtYXRjaGVkU3Vic3RyaW5ncyB8fCBtYXRjaGVkU3Vic3RyaW5ncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIG91ciBoaWdobGlnaHRlZCBzdWJzdHJpbmdzIGFyZSBzb3J0ZWRcbiAgICBtYXRjaGVkU3Vic3RyaW5ncy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAoYS5vZmZzZXQgPCBiLm9mZnNldCkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG5cbiAgICAgIGlmIChhLm9mZnNldCA+IGIub2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIC8vIEJ1aWxkIG91ciBuZXcgdmFsdWUgYmFzZWQgb24gdGhlIGhpZ2hsaWdodHNcbiAgICBsZXQgaGlnaGxpZ2h0ZWRWYWx1ZSA9ICcnO1xuICAgIGxldCBuZXh0U3RhcnQgPSAwO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXRjaGVkU3Vic3RyaW5ncy5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IHN0YXJ0ID0gTnVtYmVyKG1hdGNoZWRTdWJzdHJpbmdzW2pdLm9mZnNldCk7XG4gICAgICBsZXQgZW5kID0gc3RhcnQgKyBtYXRjaGVkU3Vic3RyaW5nc1tqXS5sZW5ndGg7XG5cbiAgICAgIGhpZ2hsaWdodGVkVmFsdWUgKz0gW3ZhbC5zbGljZShuZXh0U3RhcnQsIHN0YXJ0KSwgJzxzdHJvbmc+JywgdmFsLnNsaWNlKHN0YXJ0LCBlbmQpLCAnPC9zdHJvbmc+J10uam9pbignJyk7XG5cbiAgICAgIGlmIChqID09PSBtYXRjaGVkU3Vic3RyaW5ncy5sZW5ndGggLSAxICYmIGVuZCA8IHZhbC5sZW5ndGgpIHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRWYWx1ZSArPSB2YWwuc2xpY2UoZW5kKTtcbiAgICAgIH1cblxuICAgICAgbmV4dFN0YXJ0ID0gZW5kO1xuICAgIH1cblxuICAgIHJldHVybiBoaWdobGlnaHRlZFZhbHVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIgKi9cblxuaW1wb3J0IEF1dG9Db21wbGV0ZURhdGEgZnJvbSAnLi4vbW9kZWxzL2F1dG9jb21wbGV0ZWRhdGEnO1xuXG4vKipcbiAqIEEgRGF0YSBUcmFuc2Zvcm1lciB0aGF0IHRha2VzIHRoZSByZXNwb25zZSBvYmplY3QgZnJvbSBhIEF1dG9Db21wbGV0ZSByZXF1ZXN0XG4gKiBBbmQgdHJhbnNmb3JtcyBpbiB0byBhIGZyb250LWVuZCBvcmllbnRlZCBkYXRhIHN0cnVjdHVyZSB0aGF0IG91clxuICogY29tcG9uZW50IGxpYnJhcnkgYW5kIGNvcmUgc3RvcmFnZSB1bmRlcnN0YW5kLlxuICpcbiAqIFRPRE8oYmlsbHkpIENyZWF0ZSBvdXIgb3duIGZyb250LWVuZCBkYXRhIG1vZGVsc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIge1xuICBzdGF0aWMgY2xlYW4gKG1vZHVsZUlkLCBkYXRhKSB7XG4gICAgaWYgKGRhdGEuc2VjdGlvbnMgJiYgZGF0YS5zZWN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBkYXRhLnNlY3Rpb25zO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnNlY3Rpb25zICYmIGRhdGEuc2VjdGlvbnMubGVuZ3RoID09PSAxICYmIGRhdGEuc2VjdGlvbnNbMF0ucmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBkYXRhLnNlY3Rpb25zO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBbbW9kdWxlSWRdOiBkYXRhXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB1bml2ZXJzYWwgKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIEF1dG9Db21wbGV0ZURhdGEuZnJvbShyZXNwb25zZSk7XG4gIH1cblxuICBzdGF0aWMgZmlsdGVyIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG5cbiAgc3RhdGljIHZlcnRpY2FsIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVBcGkgKi9cblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIgZnJvbSAnLi9hdXRvY29tcGxldGVkYXRhdHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgQW5zd2Vyc0Jhc2ljRXJyb3IsIEFuc3dlcnNFbmRwb2ludEVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogQXV0b0NvbXBsZXRlQXBpIGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBuZXR3b3JrIHJlbGF0ZWQgbWF0dGVyc1xuICogZm9yIGFsbCB0aGUgYXV0b2NvbXBsZXRlIGVuZHBvaW50cy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlQXBpIHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFvcHRzLmFwaUtleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBcGkgS2V5IGlzIHJlcXVpcmVkJywgJ0F1dG9Db21wbGV0ZScpO1xuICAgIH1cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBBbnN3ZXJzIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghb3B0cy5hbnN3ZXJzS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0Fuc3dlcnMgS2V5IGlzIHJlcXVpcmVkJywgJ0F1dG9Db21wbGV0ZScpO1xuICAgIH1cbiAgICB0aGlzLl9hbnN3ZXJzS2V5ID0gb3B0cy5hbnN3ZXJzS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnNpb24gb2YgdGhlIEFQSSB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJzaW9uID0gb3B0cy52ZXJzaW9uIHx8IDIwMTkwMTAxIHx8IDIwMTkwMzAxO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxvY2FsZSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghb3B0cy5sb2NhbGUpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignTG9jYWxlIGlzIHJlcXVpcmVkJywgJ0F1dG9Db21wbGV0ZScpO1xuICAgIH1cbiAgICB0aGlzLl9sb2NhbGUgPSBvcHRzLmxvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdXRvY29tcGxldGUgZmlsdGVyc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgVGhlIGlucHV0IHRvIHVzZSBmb3IgYXV0byBjb21wbGV0ZVxuICAgKi9cbiAgcXVlcnlGaWx0ZXIgKGlucHV0LCB2ZXJ0aWNhbEtleSwgYmFyS2V5KSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL2ZpbHRlcnNlYXJjaCcsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogaW5wdXQsXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgICAgJ2V4cGVyaWVuY2VLZXknOiB2ZXJ0aWNhbEtleSxcbiAgICAgICAgJ2lucHV0S2V5JzogYmFyS2V5LFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLmZpbHRlcihyZXNwb25zZS5yZXNwb25zZSwgYmFyS2V5KSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzRW5kcG9pbnRFcnJvcignRmlsdGVyIHNlYXJjaCByZXF1ZXN0IGZhaWxlZCcsICdBdXRvQ29tcGxldGUnLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHF1ZXJ5VmVydGljYWwgKGlucHV0LCB2ZXJ0aWNhbEtleSwgYmFyS2V5KSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL2F1dG9jb21wbGV0ZScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogaW5wdXQsXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgICAgJ2V4cGVyaWVuY2VLZXknOiB2ZXJ0aWNhbEtleSxcbiAgICAgICAgJ2JhcktleSc6IGJhcktleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lci52ZXJ0aWNhbChyZXNwb25zZS5yZXNwb25zZSwgcmVxdWVzdC5fcGFyYW1zLmJhcktleSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoJ1ZlcnRpY2FsIHNlYXJjaCByZXF1ZXN0IGZhaWxlZCcsICdBdXRvQ29tcGxldGUnLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHF1ZXJ5VW5pdmVyc2FsIChxdWVyeVN0cmluZykge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9hdXRvY29tcGxldGUnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IHF1ZXJ5U3RyaW5nLFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldChxdWVyeVN0cmluZylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lci51bml2ZXJzYWwocmVzcG9uc2UucmVzcG9uc2UpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEFuc3dlcnNFbmRwb2ludEVycm9yKCdVbml2ZXJzYWwgc2VhcmNoIHJlcXVlc3QgZmFpbGVkJywgJ0F1dG9Db21wbGV0ZScsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBSZXN1bHQgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0IHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogcmVzdWx0c0RhdGEgZXhwZWN0ZWQgZm9ybWF0OiB7IGRhdGE6IHsgLi4uIH0sIGhpZ2hsaWdodGVkRmllbGRzOiB7IC4uLiB9fVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHJlc3VsdHNEYXRhKSB7XG4gICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdHNEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBUT0RPIHVzZSByZXN1bHREYXRhLmhpZ2hsaWdodGVkRmllbGRzIHRvXG4gICAgICAvLyB0cmFuc2Zvcm0gcmVzdWx0RGF0YS5kYXRhIGludG8gaHRtbC1mcmllbmRseSBzdHJpbmdzIHRoYXQgaGlnaGxpZ2h0IHZhbHVlcy5cblxuICAgICAgLy8gQ2hlY2sgZm9yIG5ldyBkYXRhIGZvcm1hdCwgb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGxlZ2FjeVxuICAgICAgcmVzdWx0cy5wdXNoKG5ldyBSZXN1bHQocmVzdWx0c0RhdGFbaV0uZGF0YSB8fCByZXN1bHRzRGF0YVtpXSkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hTdGF0ZXMgKi9cblxuLyoqXG4gKiBTZWFyY2hTdGF0ZXMgaXMgYW4gRU5VTSBmb3IgdGhlIHZhcmlvdXMgc3RhZ2VzIG9mIHNlYXJjaGluZyxcbiAqIHVzZWQgdG8gc2hvdyBkaWZmZXJlbnQgdGVtcGxhdGVzXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIFBSRV9TRUFSQ0g6ICdwcmUtc2VhcmNoJyxcbiAgU0VBUkNIX0xPQURJTkc6ICdzZWFyY2gtbG9hZGluZycsXG4gIFNFQVJDSF9DT01QTEVURTogJ3NlYXJjaC1jb21wbGV0ZSdcbn07XG4iLCIvKiogQG1vZHVsZSBTZWN0aW9uICovXG5cbmltcG9ydCBSZXN1bHQgZnJvbSAnLi9yZXN1bHQnO1xuaW1wb3J0IFNlYXJjaFN0YXRlcyBmcm9tICcuLi9zdG9yYWdlL3NlYXJjaHN0YXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3RvciAoZGF0YSwgdXJsKSB7XG4gICAgdGhpcy5zZWFyY2hTdGF0ZSA9IFNlYXJjaFN0YXRlcy5TRUFSQ0hfQ09NUExFVEU7XG4gICAgdGhpcy52ZXJ0aWNhbENvbmZpZ0lkID0gZGF0YS52ZXJ0aWNhbENvbmZpZ0lkIHx8IG51bGw7XG4gICAgdGhpcy5yZXN1bHRzQ291bnQgPSBkYXRhLnJlc3VsdHNDb3VudCB8fCAwO1xuICAgIHRoaXMuZW5jb2RlZFN0YXRlID0gZGF0YS5lbmNvZGVkU3RhdGUgfHwgJyc7XG4gICAgdGhpcy5hcHBsaWVkUXVlcnlGaWx0ZXJzID0gQXBwbGllZFF1ZXJ5RmlsdGVyLmZyb20oZGF0YS5hcHBsaWVkUXVlcnlGaWx0ZXJzKTtcbiAgICB0aGlzLmZhY2V0cyA9IGRhdGEuZmFjZXRzIHx8IG51bGw7XG4gICAgdGhpcy5yZXN1bHRzID0gUmVzdWx0LmZyb20oZGF0YS5yZXN1bHRzKTtcbiAgICB0aGlzLm1hcCA9IFNlY3Rpb24ucGFyc2VNYXAoZGF0YS5yZXN1bHRzKTtcbiAgICB0aGlzLnZlcnRpY2FsVVJMID0gdXJsIHx8IG51bGw7XG4gIH1cblxuICBzdGF0aWMgcGFyc2VNYXAgKHJlc3VsdHMpIHtcbiAgICBsZXQgbWFwTWFya2VycyA9IFtdO1xuXG4gICAgbGV0IGNlbnRlckNvb3JkaW5hdGVzID0ge307XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc3VsdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIFJlbW92ZSBsZWdhY3kgZmFsbGJhY2sgZnJvbSBhbGwgZGF0YSBmb3JtYXRcbiAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzW2pdLmRhdGEgfHwgcmVzdWx0c1tqXTtcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZSkge1xuICAgICAgICBpZiAoIWNlbnRlckNvb3JkaW5hdGVzLmxhdGl0dWRlKSB7XG4gICAgICAgICAgY2VudGVyQ29vcmRpbmF0ZXMgPSB7XG4gICAgICAgICAgICBsYXRpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sb25naXR1ZGVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIG1hcE1hcmtlcnMucHVzaCh7XG4gICAgICAgICAgaXRlbTogcmVzdWx0LFxuICAgICAgICAgIGxhYmVsOiBtYXBNYXJrZXJzLmxlbmd0aCArIDEsXG4gICAgICAgICAgbGF0aXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubGF0aXR1ZGUsXG4gICAgICAgICAgbG9uZ2l0dWRlOiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlLmxvbmdpdHVkZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgJ21hcENlbnRlcic6IGNlbnRlckNvb3JkaW5hdGVzLFxuICAgICAgJ21hcE1hcmtlcnMnOiBtYXBNYXJrZXJzXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChtb2R1bGVzLCB1cmxzKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gW107XG4gICAgaWYgKCFtb2R1bGVzKSB7XG4gICAgICByZXR1cm4gc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmV3IFNlY3Rpb24obW9kdWxlcyk7XG4gICAgfVxuXG4gICAgLy8gT3VyIHNlY3Rpb25zIHNob3VsZCBjb250YWluIGEgcHJvcGVydHkgb2YgbWFwTWFya2VyIG9iamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNlY3Rpb25zLnB1c2goXG4gICAgICAgIG5ldyBTZWN0aW9uKFxuICAgICAgICAgIG1vZHVsZXNbaV0sXG4gICAgICAgICAgdXJsc1ttb2R1bGVzW2ldLnZlcnRpY2FsQ29uZmlnSWRdXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlY3Rpb25zO1xuICB9XG59XG5cbmNsYXNzIEFwcGxpZWRRdWVyeUZpbHRlciB7XG4gIC8vIFN1cHBvcnQgbGVnYWN5IG1vZGVsIGFuZCBuZXcgbW9kZWwgdW50aWwgZnVsbHkgbWlncmF0ZWQuXG4gIC8vIFRPRE8oYmlsbHkpIFJlbW92ZSB0aGUgbGVmdCBleHByZXNzaW9uIGR1cmluZyBhc3NpZ25tZW50IHdoZW4gbWlncmF0ZWQuXG4gIGNvbnN0cnVjdG9yIChhcHBsaWVkUXVlcnlGaWx0ZXIpIHtcbiAgICB0aGlzLmtleSA9IGFwcGxpZWRRdWVyeUZpbHRlci5rZXkgfHwgYXBwbGllZFF1ZXJ5RmlsdGVyLmRpc3BsYXlLZXk7XG4gICAgdGhpcy52YWx1ZSA9IGFwcGxpZWRRdWVyeUZpbHRlci52YWx1ZSB8fCBhcHBsaWVkUXVlcnlGaWx0ZXIuZGlzcGxheVZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKGFwcGxpZWRRdWVyeUZpbHRlcnMpIHtcbiAgICBsZXQgZmlsdGVycyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwbGllZFF1ZXJ5RmlsdGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgZmlsdGVycy5wdXNoKG5ldyBBcHBsaWVkUXVlcnlGaWx0ZXIoYXBwbGllZFF1ZXJ5RmlsdGVyc1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVycztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgVW5pdmVyc2FsUmVzdWx0cyAqL1xuXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL3NlY3Rpb24nO1xuaW1wb3J0IFNlYXJjaFN0YXRlcyBmcm9tICcuLi9zdG9yYWdlL3NlYXJjaHN0YXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaXZlcnNhbFJlc3VsdHMge1xuICBjb25zdHJ1Y3RvciAoZGF0YSkge1xuICAgIHRoaXMucXVlcnlJZCA9IGRhdGEucXVlcnlJZCB8fCBudWxsO1xuICAgIHRoaXMuc2VjdGlvbnMgPSBkYXRhLnNlY3Rpb25zIHx8IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHNlYXJjaCwgdXNlZCB0byByZW5kZXIgZGlmZmVyZW50IHRlbXBsYXRlcyBiZWZvcmUsIGR1cmluZyxcbiAgICAgKiBhbmQgYWZ0ZXIgbG9hZGluZ1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zZWFyY2hTdGF0ZSA9IGRhdGEuc2VhcmNoU3RhdGUgfHwgU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSwgdXJscykge1xuICAgIHJldHVybiBuZXcgVW5pdmVyc2FsUmVzdWx0cyh7XG4gICAgICBxdWVyeUlkOiByZXNwb25zZS5xdWVyeUlkLFxuICAgICAgc2VjdGlvbnM6IFNlY3Rpb24uZnJvbShyZXNwb25zZS5tb2R1bGVzLCB1cmxzKVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIFVuaXZlcnZhbFJlc3VsdHMgb2JqZWN0IHJlcHJlc2VudGluZyBsb2FkaW5nIHJlc3VsdHNcbiAgICogQHJldHVybiB7VW5pdmVyc2FsUmVzdWx0c31cbiAgICovXG4gIHN0YXRpYyBzZWFyY2hMb2FkaW5nICgpIHtcbiAgICByZXR1cm4gbmV3IFVuaXZlcnNhbFJlc3VsdHMoeyBzZWFyY2hTdGF0ZTogU2VhcmNoU3RhdGVzLlNFQVJDSF9MT0FESU5HIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEaXJlY3RBbnN3ZXIgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0QW5zd2VyIHtcbiAgY29uc3RydWN0b3IgKGRpcmVjdEFuc3dlciA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkaXJlY3RBbnN3ZXIpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE5hdmlnYXRpb24gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiB7XG4gIGNvbnN0cnVjdG9yICh0YWJPcmRlcikge1xuICAgIHRoaXMudGFiT3JkZXIgPSB0YWJPcmRlciB8fCBbXTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKG1vZHVsZXMpIHtcbiAgICBsZXQgbmF2ID0gW107XG4gICAgaWYgKCFtb2R1bGVzIHx8ICFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmF2O1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5hdi5wdXNoKG1vZHVsZXNbaV0udmVydGljYWxDb25maWdJZCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgTmF2aWdhdGlvbihuYXYpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBWZXJ0aWNhbFJlc3VsdHMgKi9cblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9zZWN0aW9uJztcbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0aWNhbFJlc3VsdHMge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IHNlYXJjaFN0YXRlOiBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFIH0sIGRhdGEpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gbmV3IFZlcnRpY2FsUmVzdWx0cyhTZWN0aW9uLmZyb20ocmVzcG9uc2UpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBWZXJ0aWNhbFJlc3VsdHMgb2JqZWN0IHJlcHJlc2VudGluZyBsb2FkaW5nIHJlc3VsdHNcbiAgICogQHJldHVybiB7VmVydGljYWxSZXN1bHRzfVxuICAgKi9cbiAgc3RhdGljIHNlYXJjaExvYWRpbmcgKCkge1xuICAgIHJldHVybiBuZXcgVmVydGljYWxSZXN1bHRzKHsgc2VhcmNoU3RhdGU6IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTdG9yYWdlS2V5cyAqL1xuXG4vKipcbiAqIFN0b3JhZ2VLZXlzIGlzIGFuIEVOVU0gYXJlIGNvbnNpZGVyZWQgdGhlIHJvb3QgY29udGV4dFxuICogZm9yIGhvdyBkYXRhIGlzIHN0b3JlZCBhbmQgc2NvcGVkIGluIHRoZSBzdG9yYWdlLlxuICpcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgTkFWSUdBVElPTjogJ25hdmlnYXRpb24nLFxuICBVTklWRVJTQUxfUkVTVUxUUzogJ3VuaXZlcnNhbC1yZXN1bHRzJyxcbiAgVkVSVElDQUxfUkVTVUxUUzogJ3ZlcnRpY2FsLXJlc3VsdHMnLFxuICBBVVRPQ09NUExFVEU6ICdhdXRvY29tcGxldGUnLFxuICBESVJFQ1RfQU5TV0VSOiAnZGlyZWN0LWFuc3dlcicsXG4gIEZJTFRFUjogJ2ZpbHRlcicsXG4gIFFVRVJZOiAncXVlcnknLFxuICBRVUVSWV9JRDogJ3F1ZXJ5LWlkJ1xufTtcbiIsIi8qKiBAbW9kdWxlIFNlYXJjaERhdGFUcmFuc2Zvcm1lciAqL1xuXG5pbXBvcnQgVW5pdmVyc2FsUmVzdWx0cyBmcm9tICcuLi9tb2RlbHMvdW5pdmVyc2FscmVzdWx0cyc7XG5pbXBvcnQgRGlyZWN0QW5zd2VyIGZyb20gJy4uL21vZGVscy9kaXJlY3RhbnN3ZXInO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vbW9kZWxzL25hdmlnYXRpb24nO1xuaW1wb3J0IFZlcnRpY2FsUmVzdWx0cyBmcm9tICcuLi9tb2RlbHMvdmVydGljYWxyZXN1bHRzJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuLyoqXG4gKiBBIERhdGEgVHJhbnNmb3JtZXIgdGhhdCB0YWtlcyB0aGUgcmVzcG9uc2Ugb2JqZWN0IGZyb20gYSBTZWFyY2ggcmVxdWVzdFxuICogQW5kIHRyYW5zZm9ybXMgaW4gdG8gYSBmcm9udC1lbmQgb3JpZW50ZWQgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBvdXJcbiAqIGNvbXBvbmVudCBsaWJyYXJ5IGFuZCBjb3JlIHN0b3JhZ2UgdW5kZXJzdGFuZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoRGF0YVRyYW5zZm9ybWVyIHtcbiAgc3RhdGljIHRyYW5zZm9ybSAoZGF0YSwgdXJscyA9IHt9KSB7XG4gICAgbGV0IHJlc3BvbnNlID0gZGF0YS5yZXNwb25zZTtcbiAgICByZXR1cm4ge1xuICAgICAgW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXTogcmVzcG9uc2UucXVlcnlJZCxcbiAgICAgIFtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXTogTmF2aWdhdGlvbi5mcm9tKHJlc3BvbnNlLm1vZHVsZXMpLFxuICAgICAgW1N0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVJdOiBuZXcgRGlyZWN0QW5zd2VyKHJlc3BvbnNlLmRpcmVjdEFuc3dlciksXG4gICAgICBbU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFNdOiBVbml2ZXJzYWxSZXN1bHRzLmZyb20ocmVzcG9uc2UsIHVybHMpXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB0cmFuc2Zvcm1WZXJ0aWNhbCAoZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICBbU3RvcmFnZUtleXMuUVVFUllfSURdOiBkYXRhLnJlc3BvbnNlLnF1ZXJ5SWQsXG4gICAgICBbU3RvcmFnZUtleXMuTkFWSUdBVElPTl06IG5ldyBOYXZpZ2F0aW9uKCksIC8vIFZlcml0Y2FsIGRvZXNuJ3QgcmVzcG9uZCB3aXRoIG9yZGVyaW5nLCBzbyB1c2UgZW1wdHkgbmF2LlxuICAgICAgW1N0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFNdOiBWZXJ0aWNhbFJlc3VsdHMuZnJvbShkYXRhLnJlc3BvbnNlKVxuICAgIH07XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEV2ZW50RW1pdHRlciAqL1xuXG4vKipcbiAqIEV2ZW50RW1pdHRlciBpcyBhIGJhc2UgY2xhc3MgZm9yIGFueSBvYmplY3QgdGhhdCB3YW50cyB0byBleHBvc2VcbiAqIGEgcHViL3N1YiBpbnRlcmZhY2UsIGZvciBlbWl0dGluZyBtZXNzYWdlcyBhbmQgcHJvdmlkaW5nIGxpc3RlbmVycy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8qKlxuICAgICAqIFRoZSBzdWJzY3JpYmVycyBvZiBtZXNzYWdlc1xuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIG9uIGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciBzdWJzY3JpYmluZyBldmVudHMgdGhhdCBhcmUgZW1pdHRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byBsaXN0ZW4gdG9cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgVGhlIGNhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSB7ZXZ0fSBpcyBlbWl0dGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSBPcHRpb25hbCB2YWx1ZSB3aGljaCB3aWxsIG9ubHkgaGFuZGxlIHRoZSBtZXNzYWdlIG9uY2VcbiAgICovXG4gIG9uIChldnQsIGNiLCBvbmNlKSB7XG4gICAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBoYW5kbGVyIHNob3VsZCBiZSBvZiB0eXBlIHtmdW5jdGlvbn0nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbGlzdGVuZXJzW2V2dF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzW2V2dF0gPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XS5wdXNoKHtcbiAgICAgIGV2ZW50OiBldnQsXG4gICAgICBjYjogY2IsXG4gICAgICBvbmNlOiBvbmNlIHx8IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBvbmNlIGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciBzdWJzY3JpYmluZyBldmVudHMgdGhhdCBhcmUgZW1pdHRlZC5cbiAgICogVGhlIGhhbmRsZXIgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBvbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIGxpc3RlbiB0b1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gdGhlIHtldnR9IGlzIGVtaXR0ZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBvbmNlIE9wdGlvbmFsIHZhbHVlIHdoaWNoIHdpbGwgb25seSBoYW5kbGUgdGhlIG1lc3NhZ2Ugb25jZVxuICAgKi9cbiAgb25jZSAoZXZ0LCBjYikge1xuICAgIHJldHVybiB0aGlzLm9uKGV2dCwgY2IsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIG9mZiBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3IgdW5zdWJzY3JpYmluZyBmcm9tIGFuIGV2ZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gdW5zdWJzY3JpYmUgZnJvbVxuICAgKi9cbiAgb2ZmIChldnQpIHtcbiAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW2V2dF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogZW1pdCBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3IgYnJvYWRjYXN0aW5nIG1lc3NhZ2VzL2V2ZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIHB1Ymxpc2ggZnJvbVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSB0aGUgZGF0YSB0byBzZW5kIGFsb25nIHRvIHRoZSBzdWJzY3JpYmVyc1xuICAgKi9cbiAgZW1pdCAoZXZ0LCBkYXRhKSB7XG4gICAgbGV0IGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1tldnRdO1xuICAgIGlmIChsaXN0ZW5lcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEludm9rZSBlYWNoIG9mIGFsbCB0aGUgbGlzdGVuZXIgaGFuZGxlcnMgYW5kIHJlbW92ZSB0aGUgb25lcyB0aGF0IHNob3VsZCBmaXJlIG9ubHkgb25jZS5cbiAgICBsZXQga2VlcCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0uY2IoZGF0YSk7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldLm9uY2UgPT09IHRydWUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEluc3RlYWQgb2YgaGF2aW5nIGEgJ2RpcnR5JyBhcnJheSB3aXRoIGRlbGV0ZWQgb3IgJ3VuZGVmaW5lZCcgZW50cmllcyxcbiAgICAgIC8vIHdlIGp1c3QgY3JlYXRlIGEgYnJhbmQgbmV3IGFycmF5IHdpdGhvdXQgdGhlIGxpc3RlbmVycyB0aGF0IHdlcmUgcmVtb3ZlZFxuICAgICAga2VlcC5wdXNoKGxpc3RlbmVyc1tpXSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIG91ciBvbGQgbGlzdCBvZiBsaXN0ZW5lcnMgdG8gdGhlIG5ld2x5IGNyZWF0ZWQgYXJyYXlcbiAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XSA9IGtlZXA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE1vZHVsZURhdGEgKi9cblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudGVtaXR0ZXIvZXZlbnRlbWl0dGVyJztcblxuLyoqXG4gKiBNb2R1bGVEYXRhIGlzIHVzZWQgYXMgYSBnZW5lcmljIG1vZGVsIGZvciBTdG9yYWdlLlxuICogVHlwaWNhbGx5IGFuIGluc3RhbmNlIG9mIE1vZHVsZURhdGEgcG93ZXJzIGEgc2luZ2xlIGNvbXBvbmVudC5cblxuICogQSBkYXRhIG1vZGVsIHRoYXQgZXhwb3NlcyBhbiBldmVudCBlbWl0dGVyIGludGVyZmFjZS5cbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2R1bGVEYXRhIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGlkLCBkYXRhID0ge30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5faWQgPSBpZDtcbiAgICB0aGlzLl9oaXN0b3J5ID0gW107XG4gICAgdGhpcy5fZGF0YSA9IHt9O1xuICAgIHRoaXMuc2V0KGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcGxhY2VzIHRoZSBjdXJyZW50bHkgaGVsZCBkYXRhIHdpdGggdGhlIGdpdmVuIGRhdGFcbiAgICogQHBhcmFtIHsqfSBkYXRhIHRoZSBkYXRhIHRvIHJlcGxhY2UgdGhlIGN1cnJlbnQgZGF0YVxuICAgKi9cbiAgc2V0IChkYXRhKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IGRhdGEgfHwge307XG5cbiAgICB0aGlzLmNhcHR1cmVQcmV2aW91cygpO1xuXG4gICAgaWYgKE9iamVjdC5rZXlzKG5ld0RhdGEpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXModGhpcy5fZGF0YSkubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9kYXRhID0gbmV3RGF0YTtcbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5fZGF0YSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgZm9yIHNoYWxsb3cgZXF1YWxpdHlcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhuZXdEYXRhKSkge1xuICAgICAgaWYgKHRoaXMuX2RhdGFba2V5XSAhPT0gbmV3RGF0YVtrZXldKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBuZXdEYXRhO1xuICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuX2RhdGEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2FwdHVyZVByZXZpb3VzICgpIHtcbiAgICBpZiAodGhpcy5faGlzdG9yeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9oaXN0b3J5ID0gW107XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hpc3RvcnkubGVuZ3RoICsgMSA+IDUpIHtcbiAgICAgIHRoaXMuX2hpc3Rvcnkuc2hpZnQoKTtcbiAgICB9XG5cbiAgICAvLyBJZiBkYXRhIGlzIGV2ZXIgdW5kZWZpbmVkLCB3ZSBkZWZhdWx0IHRvIGVtcHR5IG9iamVjdFxuICAgIHRoaXMuX2hpc3RvcnkucHVzaChKU09OLnN0cmluZ2lmeSh0aGlzLl9kYXRhIHx8IHt9KSk7XG4gIH1cblxuICB1bmRvICgpIHtcbiAgICBsZXQgcHJldmlvdXMgPSB7fTtcbiAgICBpZiAodGhpcy5fcHJldmlvdXMubGVuZ3RoID4gMCkge1xuICAgICAgcHJldmlvdXMgPSBKU09OLnBhcnNlKHRoaXMuX3ByZXZpb3VzLnBvcCgpKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRhLnNldChwcmV2aW91cyk7XG4gIH1cblxuICByYXcgKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTdG9yYWdlICovXG5cbmltcG9ydCBNb2R1bGVEYXRhIGZyb20gJy4vbW9kdWxlZGF0YSc7XG5pbXBvcnQgeyBBbnN3ZXJzU3RvcmFnZUVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogU3RvcmFnZSBpcyBhIGNvbnRhaW5lciBhcm91bmQgYXBwbGljYXRpb24gc3RhdGUuXG4gKiBJdCBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgQ1JVRCBvcGVyYXRpb25zIGFzIHdlbGwgYXMgbGlzdGVuaW5nXG4gKiBmb3Igc3RhdGVmdWwgY2hhbmdlcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyID0ge307XG4gICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzID0ge307XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkYXRhIGluIHN0b3JhZ2Ugd2l0aCB0aGUgZ2l2ZW4ga2V5IHRvIHRoZSBwcm92aWRlZCBkYXRhLFxuICAgKiBjb21wbGV0ZWx5IG92ZXJ3cml0aW5nIGFueSBleGlzdGluZyBkYXRhLlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRoZSBzdG9yYWdlIGtleSB0byBzZXRcbiAgICogQHBhcmFtIHsqfSBkYXRhIHRoZSBkYXRhIHRvIHNldFxuICAgKi9cbiAgc2V0IChrZXksIGRhdGEpIHtcbiAgICB0aGlzLl9pbml0RGF0YUNvbnRhaW5lcihrZXksIGRhdGEpO1xuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJba2V5XS5zZXQoZGF0YSk7XG4gIH1cblxuICBfaW5pdERhdGFDb250YWluZXIgKGtleSwgZGF0YSkge1xuICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCB8fCBrZXkgPT09IG51bGwgfHwgdHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzU3RvcmFnZUVycm9yKCdJbnZhbGlkIHN0b3JhZ2Uga2V5IHByb3ZpZGVkJywga2V5LCBkYXRhKTtcbiAgICB9XG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCB8fCBkYXRhID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc1N0b3JhZ2VFcnJvcignTm8gZGF0YSBwcm92aWRlZCcsIGtleSwgZGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX21vZHVsZURhdGFDb250YWluZXJba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2tleV0gPSBuZXcgTW9kdWxlRGF0YShrZXkpO1xuICAgICAgdGhpcy5fYXBwbHlGdXR1cmVMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gIH1cblxuICBnZXRTdGF0ZSAobW9kdWxlSWQpIHtcbiAgICBpZiAodGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5yYXcoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRBbGwgKGtleSkge1xuICAgIGNvbnN0IGRhdGEgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGRhdGFLZXkgb2YgT2JqZWN0LmtleXModGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcikpIHtcbiAgICAgIGlmIChkYXRhS2V5LnN0YXJ0c1dpdGgoa2V5KSAmJiB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2RhdGFLZXldLnJhdygpICE9PSBudWxsKSB7XG4gICAgICAgIGRhdGEucHVzaCh0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2RhdGFLZXldLnJhdygpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBvbiAoZXZ0LCBtb2R1bGVJZCwgY2IpIHtcbiAgICBsZXQgbW9kdWxlRGF0YSA9IHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdO1xuICAgIGlmIChtb2R1bGVEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXSA9IFtdO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdLnB1c2goe1xuICAgICAgICBldmVudDogZXZ0LFxuICAgICAgICBjYjogY2JcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0ub24oZXZ0LCBjYik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBvZmYgKGV2dCwgbW9kdWxlSWQsIGNiKSB7XG4gICAgbGV0IG1vZHVsZURhdGEgPSB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXTtcbiAgICBpZiAobW9kdWxlRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0ucG9wKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdLm9mZihldnQsIGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9hcHBseUZ1dHVyZUxpc3RlbmVycyAobW9kdWxlSWQpIHtcbiAgICBsZXQgZnV0dXJlcyA9IHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF07XG4gICAgaWYgKCFmdXR1cmVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmdXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZnV0dXJlID0gZnV0dXJlc1tpXTtcbiAgICAgIHRoaXMub24oZnV0dXJlLmV2ZW50LCBtb2R1bGVJZCwgZnV0dXJlLmNiKTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF07XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIENvcmUgKi9cblxuaW1wb3J0IFNlYXJjaEFwaSBmcm9tICcuL3NlYXJjaC9zZWFyY2hhcGknO1xuaW1wb3J0IEF1dG9Db21wbGV0ZUFwaSBmcm9tICcuL3NlYXJjaC9hdXRvY29tcGxldGVhcGknO1xuXG5pbXBvcnQgU2VhcmNoRGF0YVRyYW5zZm9ybWVyIGZyb20gJy4vc2VhcmNoL3NlYXJjaGRhdGF0cmFuc2Zvcm1lcic7XG5cbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZS9zdG9yYWdlJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFZlcnRpY2FsUmVzdWx0cyBmcm9tICcuL21vZGVscy92ZXJ0aWNhbHJlc3VsdHMnO1xuaW1wb3J0IFVuaXZlcnNhbFJlc3VsdHMgZnJvbSAnLi9tb2RlbHMvdW5pdmVyc2FscmVzdWx0cyc7XG5cbi8qKlxuICogQ29yZSBpcyB0aGUgbWFpbiBhcHBsaWNhdGlvbiBjb250YWluZXIgZm9yIGFsbCBvZiB0aGUgbmV0d29yayBhbmQgc3RvcmFnZVxuICogcmVsYXRlZCBiZWhhdmlvcnMgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JlIHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIGlmICh0eXBlb2Ygb3B0cy5hcGlLZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYGFwaUtleWAuIFR5cGUgbXVzdCBiZSB7c3RyaW5nfScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0cy5hbnN3ZXJzS2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGBhbnN3ZXJzS2V5YC4gVHlwZSBtdXN0IGJlIHtzdHJpbmd9Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNsaWVudCBBUEkgS2V5IHVzZWQgZm9yIGFsbCByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjbGllbnQgQW5zd2VycyBLZXkgdXNlZCBmb3IgYWxsIHJlcXVlc3RzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Fuc3dlcnNLZXkgPSBvcHRzLmFuc3dlcnNLZXk7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IGxvY2FsZSB1c2VkIGZvciBhbGwgcmVxdWVzdHMuIElmIG5vdCBzcGVjaWZpZWQsIGRlZmF1bHRzIHRvIFwiZW5cIiAoZm9yXG4gICAgICogYmFja3dhcmRzIGNvbXBhdGliaWxpdHkpLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9sb2NhbGUgPSBvcHRzLmxvY2FsZSB8fCAnZW4nO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNvcmUgZGF0YSBzdG9yYWdlIHRoYXQgcG93ZXJzIHRoZSBVSVxuICAgICAqIEB0eXBlIHtTdG9yYWdlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5zdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIGNvbnRhaW5pbmcgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIFJFU1RmdWwgc2VhcmNoIEFQSVxuICAgICAqIEZvciBib3RoIHZlcnRpY2FsIGFuZCB1bml2ZXJzYWwgc2VhcmNoXG4gICAgICogQHR5cGUge1NlYXJjaH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaGVyID0gbmV3IFNlYXJjaEFwaSh7XG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIGFuc3dlcnNLZXk6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3Rpb24gY29udGFpbmluZyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgUkVTVGZ1bCBhdXRvY29tcGxldGUgQVBJXG4gICAgICogRm9yIGZpbHRlciBzZWFyY2gsIHZlcnRpY2FsIGF1dG9jb21wbGV0ZSwgYW5kIHVuaXZlcnNhbCBhdXRvY29tcGxldGVcbiAgICAgKiBAdHlwZSB7QXV0b2NvbXBsZXRlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXV0b0NvbXBsZXRlID0gbmV3IEF1dG9Db21wbGV0ZUFwaSh7XG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIGFuc3dlcnNLZXk6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZVxuICAgIH0pO1xuICB9XG5cbiAgdmVydGljYWxTZWFyY2ggKHF1ZXJ5U3RyaW5nLCB2ZXJ0aWNhbEtleSwgZmlsdGVyKSB7XG4gICAgdGhpcy5zdG9yYWdlLnNldChTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTLCBWZXJ0aWNhbFJlc3VsdHMuc2VhcmNoTG9hZGluZygpKTtcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoZXJcbiAgICAgIC52ZXJ0aWNhbFF1ZXJ5KHF1ZXJ5U3RyaW5nLCB2ZXJ0aWNhbEtleSwgZmlsdGVyKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gU2VhcmNoRGF0YVRyYW5zZm9ybWVyLnRyYW5zZm9ybVZlcnRpY2FsKHJlc3BvbnNlKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBkYXRhW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuTkFWSUdBVElPTiwgZGF0YVtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUywgZGF0YVtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaCAocXVlcnlTdHJpbmcsIHVybHMpIHtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTLCBVbml2ZXJzYWxSZXN1bHRzLnNlYXJjaExvYWRpbmcoKSk7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaGVyXG4gICAgICAucXVlcnkocXVlcnlTdHJpbmcpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBTZWFyY2hEYXRhVHJhbnNmb3JtZXIudHJhbnNmb3JtKHJlc3BvbnNlLCB1cmxzKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBkYXRhW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuTkFWSUdBVElPTiwgZGF0YVtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuRElSRUNUX0FOU1dFUiwgZGF0YVtTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSXSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFMsIGRhdGFbU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFNdLCB1cmxzKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGFuIGlucHV0LCBxdWVyeSBmb3IgYSBsaXN0IG9mIHNpbWlsYXIgcmVzdWx0cyBhbmQgc2V0IGludG8gc3RvcmFnZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgICAgIHRoZSBzdHJpbmcgdG8gYXV0b2NvbXBsZXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlVW5pdmVyc2FsIChpbnB1dCwgbmFtZXNwYWNlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5VW5pdmVyc2FsKGlucHV0KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke25hbWVzcGFjZX1gLCBkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGFuIGlucHV0LCBxdWVyeSBmb3IgYSBsaXN0IG9mIHNpbWlsYXIgcmVzdWx0cyBpbiB0aGUgcHJvdmlkZWQgdmVydGljYWxcbiAgICogYW5kIHNldCBpbnRvIHN0b3JhZ2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0ICAgICAgIHRoZSBzdHJpbmcgdG8gYXV0b2NvbXBsZXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmVydGljYWxLZXkgdGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIGV4cGVyaWVuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJhcktleSAgICAgIHRoZSBiYXIga2V5IGZvciB0aGUgZXhwZXJpZW5jZVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlVmVydGljYWwgKGlucHV0LCBuYW1lc3BhY2UsIHZlcnRpY2FsS2V5LCBiYXJLZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0NvbXBsZXRlXG4gICAgICAucXVlcnlWZXJ0aWNhbChpbnB1dCwgdmVydGljYWxLZXksIGJhcktleSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkFVVE9DT01QTEVURX0uJHtuYW1lc3BhY2V9YCwgZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhbiBpbnB1dCwgcHJvdmlkZSBhIGxpc3Qgb2Ygc3VpdGFibGUgZmlsdGVycyBmb3IgYXV0b2NvbXBsZXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0ICAgICAgICAgdGhlIHN0cmluZyB0byBzZWFyY2ggZm9yIGZpbHRlcnMgd2l0aFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlICAgICB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbEtleSAgIHRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBleHBlcmllbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiYXJLZXkgICAgICAgIHRoZSBiYXIga2V5IGZvciB0aGUgZXhwZXJpZW5jZVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlRmlsdGVyIChpbnB1dCwgbmFtZXNwYWNlLCB2ZXJ0aWNhbEtleSwgYmFyS2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5RmlsdGVyKGlucHV0LCB2ZXJ0aWNhbEtleSwgYmFyS2V5KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke25hbWVzcGFjZX1gLCBkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgZ2l2ZW4gcXVlcnkgaW50byBzdG9yYWdlLCB0byBiZSB1c2VkIGZvciB0aGUgbmV4dCBzZWFyY2hcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBxdWVyeSB0byBzdG9yZVxuICAgKi9cbiAgc2V0UXVlcnkgKHF1ZXJ5KSB7XG4gICAgdGhpcy5zdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWSwgcXVlcnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgcHJvdmlkZWQgcXVlcnkgSUQsIHRvIGJlIHVzZWQgaW4gYW5hbHl0aWNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeUlkIFRoZSBxdWVyeSBpZCB0byBzdG9yZVxuICAgKi9cbiAgc2V0UXVlcnlJZCAocXVlcnlJZCkge1xuICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFUllfSUQsIHF1ZXJ5SWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgZ2l2ZW4gZmlsdGVyIGludG8gc3RvcmFnZSwgdG8gYmUgdXNlZCBmb3IgdGhlIG5leHQgc2VhcmNoXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKiBAcGFyYW0ge0ZpbHRlcn0gZmlsdGVyICAgIHRoZSBmaWx0ZXIgdG8gc2V0XG4gICAqL1xuICBzZXRGaWx0ZXIgKG5hbWVzcGFjZSwgZmlsdGVyKSB7XG4gICAgdGhpcy5zdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7bmFtZXNwYWNlfWAsIGZpbHRlcik7XG4gIH1cblxuICBvbiAoZXZ0LCBtb2R1bGVJZCwgY2IpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLm9uKGV2dCwgbW9kdWxlSWQsIGNiKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQ29tcG9uZW50TWFuYWdlciAqL1xuXG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuXG4vKipcbiAqIENvbXBvbmVudE1hbmFnZXIgaXMgYSBTaW5nbGV0b25lIHRoYXQgY29udGFpbnMgYm90aCBhbiBpbnRlcm5hbCByZWdpc3RyeSBvZlxuICogZWxpZ2libGUgY29tcG9uZW50cyB0byBiZSBjcmVhdGVkLCBhcyB3ZWxsIGFzIGtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50XG4gKiBpbnN0YW50aWF0ZWQgYW5kIGFjdGl2ZSBjb21wb25lbnRzLlxuICpcbiAqIEFMTCBjb21wb25lbnRzIHNob3VsZCBiZSBjb25zdHJ1Y3RlZCB1c2luZyB0aGUge0NvbXBvbmVudE1hbmFnZXJ9IHZpYSBpdHMgYGNyZWF0ZWAgbWV0aG9kLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIGlmICghQ29tcG9uZW50TWFuYWdlci5zZXRJbnN0YW5jZSh0aGlzKSkge1xuICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9uZW50IHJlZ2lzdHJ5IGlzIGFuIGludGVybmFsIG1hcCwgdGhhdCBjb250YWluc1xuICAgICAqIGFsbCBhdmFpbGFibGUgY29tcG9uZW50IENMQVNTRVMgdXNlZCBmb3IgY3JlYXRpb24gb3Igb3ZlcnJpZGUuXG4gICAgICogRWFjaCBjb21wb25lbnQgY2xhc3MgaGFzIGEgdW5pcXVlIFRZUEUsIHdoaWNoIGlzIHVzZWQgYXMgdGhlIGtleSBmb3IgdGhlIHJlZ2lzdHJ5XG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9jb21wb25lbnRSZWdpc3RyeSA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFjdGl2ZSBjb21wb25lbnRzIGlzIGFuIGludGVybmFsIGNvbnRhaW5lciB0byBrZWVwIHRyYWNrXG4gICAgICogb2YgYWxsIG9mIHRoZSBjb21wb25lbnRzIHRoYXQgaGF2ZSBiZWVuIGNvbnN0cnVjdGVkXG4gICAgICovXG4gICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNvcmUgbGlicmFyeSBkZXBlbmRlbmN5XG4gICAgICpcbiAgICAgKiBUaGUgQ29yZSBjb250YWlucyBib3RoIHRoZSBzdG9yYWdlIEFORCBzZXJ2aWNlcyB0aGF0IGFyZSBuZWVkZWQgZm9yIHBlcmZvcm1pbmcgb3BlcmF0aW9uc1xuICAgICAqIGxpa2Ugc2VhcmNoIGFuZCBhdXRvIGNvbXBsZXRlLlxuICAgICAqXG4gICAgICogVGhlIHN0b3JhZ2UgaXMgdGhlIHNvdXJjZSBvZiB0cnV0aCBmb3IgdGhlIHN0YXRlIG9mIEFMTCBjb21wb25lbnRzLlxuICAgICAqIFdoZW5ldmVyIHRoZSBzdG9yYWdlIGlzIHVwZGF0ZWQsIHRoZSBzdGF0ZSBnZXRzIHB1c2hlZCBkb3duIHRvIHRoZSBuZWNlc3NhcnkgY29tcG9uZW50cy5cbiAgICAgKiBAdHlwZSB7Q29yZX1cbiAgICAgKi9cbiAgICB0aGlzLl9jb3JlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBwcmltYXJ5IHJlbmRlcmVyIHRvIHVzZSBmb3IgYWxsIGNvbXBvbmVudHNcbiAgICAgKiBAdHlwZSB7SGFuZGxlYmFyc1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3JlbmRlcmVyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBhbmFseXRpY3MgcmVwb3J0ZXIgZGVwZW5kZW5jeVxuICAgICAqL1xuICAgIHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyID0gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBzZXRJbnN0YW5jZSAoaW5zdGFuY2UpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UgKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgc2V0UmVuZGVyZXIgKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldENvcmUgKGNvcmUpIHtcbiAgICB0aGlzLl9jb3JlID0gY29yZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldEFuYWx5dGljc1JlcG9ydGVyIChyZXBvcnRlcikge1xuICAgIHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyID0gcmVwb3J0ZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXJzIGEgY29tcG9uZW50IHRvIGJlIGVsaWdpYmxlIGZvciBjcmVhdGlvbiBhbmQgb3ZlcnJpZGUuXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBUaGUgQ29tcG9uZW50IENsYXNzIHRvIHJlZ2lzdGVyXG4gICAqL1xuICByZWdpc3RlciAoY29tcG9uZW50Q2xhenopIHtcbiAgICB0aGlzLl9jb21wb25lbnRSZWdpc3RyeVtjb21wb25lbnRDbGF6ei50eXBlXSA9IGNvbXBvbmVudENsYXp6O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZSBpcyB0aGUgZW50cnkgcG9pbnQgZm9yIGNvbnN0cnVjdGluZyBhbnkgYW5kIGFsbCBjb21wb25lbnRzLlxuICAgKiBJdCB3aWxsIGluc3RhbnRpYXRlIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQsIGFuZCBib3RoIGFwcGx5XG4gICAqIGluaXRpYWwgc3RhdGUgZnJvbSB0aGUgc3RvcmFnZSBhbmQgYmluZCBpdCB0byB0aGUgc3RvcmFnZSBmb3IgdXBkYXRlcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudFR5cGUgVGhlIGNvbXBvbmVudCB0eXBlIHRvIGNyZWF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBUaGUgb3B0aW9ucyB0byBwaXBlIHRvIHRoZSBjb25zdHJ1Y3Rpb24gb2YgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgY3JlYXRlIChjb21wb25lbnRUeXBlLCBvcHRzKSB7XG4gICAgLy8gRXZlcnkgY29tcG9uZW50IG5lZWRzIGxvY2FsIGFjY2VzcyB0byB0aGUgY29tcG9uZW50IG1hbmFnZXJcbiAgICAvLyBiZWNhdXNlIHNvbWV0aW1lcyBjb21wb25lbnRzIGhhdmUgc3ViY29tcG9uZW50cyB0aGF0IG5lZWQgdG8gYmVcbiAgICAvLyBjb25zdHJ1Y3RlZCBkdXJpbmcgY3JlYXRpb25cbiAgICBvcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb3JlOiB0aGlzLl9jb3JlLFxuICAgICAgcmVuZGVyZXI6IHRoaXMuX3JlbmRlcmVyLFxuICAgICAgYW5hbHl0aWNzUmVwb3J0ZXI6IHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyLFxuICAgICAgY29tcG9uZW50TWFuYWdlcjogdGhpc1xuICAgIH0sIG9wdHMpO1xuXG4gICAgbGV0IGNvbXBvbmVudENsYXNzID0gdGhpcy5fY29tcG9uZW50UmVnaXN0cnlbY29tcG9uZW50VHlwZV07XG5cbiAgICBpZiAoXG4gICAgICAhY29tcG9uZW50Q2xhc3MuYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkKCkgJiZcbiAgICAgIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMuc29tZShjID0+IGMubmFtZSA9PT0gb3B0cy5uYW1lKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgYEFub3RoZXIgY29tcG9uZW50IHdpdGggbmFtZSAke29wdHMubmFtZX0gYWxyZWFkeSBleGlzdHNgLFxuICAgICAgICBjb21wb25lbnRUeXBlKTtcbiAgICB9XG5cbiAgICAvLyBJbnN0YW50aWF0ZSBvdXIgbmV3IGNvbXBvbmVudCBhbmQga2VlcCB0cmFjayBvZiBpdFxuICAgIGxldCBjb21wb25lbnQgPVxuICAgICAgbmV3IHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5W2NvbXBvbmVudFR5cGVdKG9wdHMpXG4gICAgICAgIC5pbml0KG9wdHMpO1xuXG4gICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIGxvY2FsIHN0b3JhZ2UgdG8gcG93ZXIgc3RhdGUsIGFwcGx5IHRoZSBzdGF0ZVxuICAgIC8vIGZyb20gdGhlIHN0b3JhZ2UgdG8gdGhlIGNvbXBvbmVudCwgYW5kIHRoZW4gYmluZCB0aGUgY29tcG9uZW50XG4gICAgLy8gc3RhdGUgdG8gdGhlIHN0b3JhZ2UgdmlhIGl0cyB1cGRhdGVzXG4gICAgaWYgKHRoaXMuX2NvcmUgJiYgdGhpcy5fY29yZS5zdG9yYWdlICE9PSBudWxsKSB7XG4gICAgICBpZiAoY29tcG9uZW50Lm1vZHVsZUlkID09PSB1bmRlZmluZWQgfHwgY29tcG9uZW50Lm1vZHVsZUlkID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NvcmUuc3RvcmFnZVxuICAgICAgICAub24oJ3VwZGF0ZScsIGNvbXBvbmVudC5tb2R1bGVJZCwgKGRhdGEpID0+IHtcbiAgICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnQ7XG4gIH1cblxuICBnZXRBY3RpdmVDb21wb25lbnQgKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5maW5kKGMgPT4gYy5jb25zdHJ1Y3Rvci50eXBlID09PSB0eXBlKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVuZGVyZXIgKi9cblxuLyoqXG4gKiBSZW5kZXJlciBpcyBhbiBhYnN0cmFjdCBjbGFzcyB0aGF0IGFsbCBSZW5kZXJlcnMgc2hvdWxkIGV4dGVuZCBhbmQgaW1wbGVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcbiAgLyoqXG4gICAqIHJlbmRlciBpcyBhIGNvcmUgbWV0aG9kIGZvciBhbGwgcmVuZGVyZXJzLlxuICAgKiBBbGwgaW1wbGVtZW50YXRpb25zIHNob3VsZCBvdmVycmlkZSB0aGlzIGNsYXNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKi9cbiAgcmVuZGVyICh0ZW1wbGF0ZSwgZGF0YSkge1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHJlZ2lzdGVySGVscGVyIChuYW1lLCBjYikge1xuXG4gIH1cblxuICBjb21waWxlICh0ZW1wbGF0ZSkge1xuXG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEhhbmRsZWJhcnNSZW5kZXJlciAqL1xuXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbi8qKlxuICogSGFuZGxlYmFyc1JlbmRlcmVyIGlzIGEgd3JhcHBlciBhcm91bmQgdGhlIG5hdGl2YXRlIGhhbmRsZWJhcnMgcmVuZGVyZXIuXG4gKiBAZXh0ZW5kcyBSZW5kZXJlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYW5kbGViYXJzUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yICh0ZW1wbGF0ZXMgPSB7fSwgb3B0cyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBoYW5kbGViYXJzIGNvbXBpbGVyXG4gICAgICogQHR5cGUge0hhbmRsZWJhcnN9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9oYW5kbGViYXJzID0gdGVtcGxhdGVzLl9oYiB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIHByZS1jb21waWxlZCBoYW5kbGViYXJzIHRlbXBsYXRlc1xuICAgICAqIEB0eXBlIHtIYW5kbGViYXJzfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVzID0gdGVtcGxhdGVzIHx8IHt9O1xuICB9XG5cbiAgaW5pdCAodGVtcGxhdGVzKSB7XG4gICAgLy8gQXNzaWduIHRoZSBoYW5kbGViYXJzIGNvbXBpbGVyIGFuZCB0ZW1wbGF0ZXMgYmFzZWQgb25cbiAgICAvLyBpbmZvcm1hdGlvbiBwcm92aWRlZCBmcm9tIGV4dGVybmFsIGRlcCAoaW4gZGVmYXVsdCBjYXNlLCBpdCBjb21lcyBmcm9tIGV4dGVybmFsIHNlcnZlciByZXF1ZXN0KVxuICAgIHRoaXMuX2hhbmRsZWJhcnMgPSB0ZW1wbGF0ZXMuX2hiO1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHRlbXBsYXRlcztcblxuICAgIC8vIFRPRE8oYmlsbHkpIE9uY2Ugd2UgcmUtd3JpdGUgdGVtcGxhdGVzIHVzaW5nIHRoZSBuZXcgaGVscGVycyBsaWJyYXJ5XG4gICAgLy8gd2UgcHJvYmFibHkgZG9uJ3QgbmVlZCB0aGVzZSBjdXN0b20gaGVscGVycyBhbnltb3JlXG4gICAgdGhpcy5fcmVnaXN0ZXJDdXN0b21IZWxwZXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXJIZWxwZXIgaXMgYSBwdWJsaWMgaW50ZXJmYWNlIGZvciBleHRlcm5hbCBkZXBlbmRlbmNpZXMgdG9cbiAgICogcmVnaXN0ZXIgdGhlaXIgb3duIGN1c3RvbSBoZWxwZXJzIHRvIG91ciBpbnRlcm5hbCBIYW5kbGViYXJzIENvbXBpbGVyXG4gICAqL1xuICByZWdpc3RlckhlbHBlciAobmFtZSwgY2IpIHtcbiAgICB0aGlzLl9oYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKG5hbWUsIGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb21waWxlIGEgaGFuZGxlYmFycyB0ZW1wbGF0ZSBzbyB0aGF0IGl0IGNhbiBiZSByZW5kZXJlZCxcbiAgICogdXNpbmcgdGhlIHtIYW5kbGViYXJzfSBjb21waWxlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgVGhlIHRlbXBsYXRlIHN0cmluZyB0byBjb21waWxlXG4gICAqL1xuICBjb21waWxlICh0ZW1wbGF0ZSkge1xuICAgIGlmICh0eXBlb2YgdGVtcGxhdGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9oYW5kbGViYXJzLmNvbXBpbGUodGVtcGxhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbmRlciB3aWxsIHJlbmRlciBhIHRlbXBsYXRlIHdpdGggZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFByb3ZpZGUgZWl0aGVyIGEgdGVtcGxhdGVOYW1lIG9yIGEgcHJlLWNvbXBpbGVkIHRlbXBsYXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHByb3ZpZGUgdG8gdGhlIHRlbXBsYXRlXG4gICAqL1xuICByZW5kZXIgKGNvbmZpZywgZGF0YSkge1xuICAgIC8vIElmIGEgY3VzdG9tIHRlbXBsYXRlIGlzIHByb3ZpZGVkLCB1c2UgaXQsXG4gICAgLy8gb3RoZXJ3aXNlIGZhbGwgYmFjayB0byB0aGUgdGVtcGxhdGUgbmFtZVxuICAgIC8vIFRPRE8oYmlsbHkpIFRoaXMgaW50ZXJmYWNlIHNob3VsZCBwcm9iYWJseSBiZSBsZXNzIHVnbHlcbiAgICBpZiAoY29uZmlnLnRlbXBsYXRlICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gY29uZmlnLnRlbXBsYXRlKGRhdGEpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVzW2NvbmZpZy50ZW1wbGF0ZU5hbWVdKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBmaW5kL3JlbmRlciB0ZW1wbGF0ZTogJyArIGNvbmZpZy50ZW1wbGF0ZU5hbWUsIGUpO1xuICAgIH1cbiAgfVxuXG4gIF9yZWdpc3RlckN1c3RvbUhlbHBlcnMgKCkge1xuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2lmZXEnLCBmdW5jdGlvbiAoYXJnMSwgYXJnMiwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIChhcmcxID09PSBhcmcyKSA/IG9wdGlvbnMuZm4odGhpcykgOiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdpZm5vdGVxJywgZnVuY3Rpb24gKGFyZzEsIGFyZzIsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiAoYXJnMSAhPT0gYXJnMikgPyBvcHRpb25zLmZuKHRoaXMpIDogb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignZm9ybWF0UGhvbmVOdW1iZXInLCBmdW5jdGlvbiAocGhvbmVOdW1iZXJTdHJpbmcpIHtcbiAgICAgIHZhciBjbGVhbmVkID0gKCcnICsgcGhvbmVOdW1iZXJTdHJpbmcpLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG4gICAgICB2YXIgbWF0Y2ggPSBjbGVhbmVkLm1hdGNoKC9eKDF8KT8oXFxkezN9KShcXGR7M30pKFxcZHs0fSkkLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdmFyIGludGxDb2RlID0gKG1hdGNoWzFdID8gJysxICcgOiAnJyk7XG4gICAgICAgIHJldHVybiBbaW50bENvZGUsICcoJywgbWF0Y2hbMl0sICcpICcsIG1hdGNoWzNdLCAnLScsIG1hdGNoWzRdXS5qb2luKCcnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignYXNzaWduJywgZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIG9wdGlvbnMgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmICghb3B0aW9ucy5kYXRhLnJvb3QpIHtcbiAgICAgICAgb3B0aW9ucy5kYXRhLnJvb3QgPSB7fTtcbiAgICAgIH1cblxuICAgICAgbGV0IHYgPSAnJztcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgdiA9IHYgKyBhcmdzW2ldO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLmRhdGEucm9vdFtuYW1lXSA9IHY7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdqc29uJywgZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gbmFtZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgID8gJydcbiAgICAgICAgOiBKU09OLnN0cmluZ2lmeShuYW1lKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEhhbmRsZWJhcnNSZW5kZXJlciBmcm9tICcuL2hhbmRsZWJhcnNyZW5kZXJlcic7XG5cbi8vIEluIHRoZSBmdXR1cmUsIHRoaXMgd2lsbCBjb250YWluIGFsbCBkaWZmZXJlbnQgdHlwZXMgb2YgcmVuZGVyZXJzXG4vLyBFLmcuIE11c3RhY2hlLCBTT1ksIEhhbmRsZUJhcnMsIFJlYWN0LCBldGMuXG5leHBvcnQgY29uc3QgUmVuZGVyZXJzID0ge1xuICBTT1k6IFJlbmRlcmVyLFxuICBIYW5kbGViYXJzOiBIYW5kbGViYXJzUmVuZGVyZXJcbn07XG4iLCIvKiogQG1vZHVsZSBET00gKi9cblxuLyogZ2xvYmFsIEhUTUxFbGVtZW50LCBIVE1MRG9jdW1lbnQsIFdpbmRvdywgRXZlbnQgKi9cblxubGV0IGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuXG4vKipcbiAqIFN0YXRpYyBpbnRlcmZhY2UgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIERPTSBBUEkuXG4gKiBAbmFtZXNwYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTSB7XG4gIHN0YXRpYyBzZXR1cCAoZCwgcCkge1xuICAgIGRvY3VtZW50ID0gZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGUgYSBIVE1MRWxlbWVudCBmcm9tIGFuZCBIVE1MIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gaHRtbCBUaGUgSFRNTCB0byBwYXJzZSB0byBhIERPTSBub2RlLlxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGUgKGh0bWwpIHtcbiAgICBpZiAoJ2NyZWF0ZVJhbmdlJyBpbiBkb2N1bWVudCkge1xuICAgICAgLy8gcHJlZmVyIHRoaXMgaW1wbGVtZW50YXRpb24gYXMgaXQgaGFzIHdpZGVyIGJyb3dzZXIgc3VwcG9ydFxuICAgICAgLy8gYW5kIGl0J3MgYmV0dGVyIHBlcmZvcm1pbmcuXG4gICAgICAvLyBzZWUgaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvY29udmVydC1odG1sLXN0aW5ncy1kb20tbm9kZXNcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGh0bWwpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWcpO1xuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvLyBmYWxsYmFjayB0byB0aGlzIGJlY2F1c2Ugb2YgYSBidWcgaW4ganNkb20gdGhhdCBjYXVzZXMgdGVzdHMgdG8gZmFpbFxuICAgIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pzZG9tL2pzZG9tL2lzc3Vlcy8zOTlcbiAgICByZXR1cm4gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC9odG1sJykuYm9keTtcbiAgfVxuXG4gIC8qKlxuICAgKiBxdWVyeSB0aGUgRE9NIGZvciBhIGdpdmVuIGNzcyBzZWxlY3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgT3B0aW9uYWwgY29udGV4dCB0byB1c2UgZm9yIGEgc2VhcmNoLiBEZWZhdWx0cyB0byBkb2N1bWVudCBpZiBub3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciB0aGUgQ1NTIHNlbGVjdG9yIHRvIHF1ZXJ5IGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IHRoZSBGSVJTVCBub2RlIGl0IGZpbmRzLCBpZiBhbnlcbiAgICovXG4gIHN0YXRpYyBxdWVyeSAocGFyZW50LCBzZWxlY3Rvcikge1xuICAgIC8vIEZhY2FkZSwgc2hpZnRpbmcgdGhlIHNlbGVjdG9yIHRvIHRoZSBwYXJlbnQgYXJndW1lbnQgaWYgb25seSBvbmVcbiAgICAvLyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RvciA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgV2luZG93IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTERvY3VtZW50KSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBxdWVyeSB0aGUgRE9NIGZvciBhIGdpdmVuIGNzcyBzZWxlY3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgT3B0aW9uYWwgY29udGV4dCB0byB1c2UgZm9yIGEgc2VhcmNoLiBEZWZhdWx0cyB0byBkb2N1bWVudCBpZiBub3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciB0aGUgQ1NTIHNlbGVjdG9yIHRvIHF1ZXJ5IGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IHRoZSBGSVJTVCBub2RlIGl0IGZpbmRzLCBpZiBhbnlcbiAgICovXG4gIHN0YXRpYyBxdWVyeUFsbCAocGFyZW50LCBzZWxlY3Rvcikge1xuICAgIC8vIEZhY2FkZSwgc2hpZnRpbmcgdGhlIHNlbGVjdG9yIHRvIHRoZSBwYXJlbnQgYXJndW1lbnQgaWYgb25seSBvbmVcbiAgICAvLyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RvciA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIC8vIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSBjbGllbnQgY29kZSBpcyB1c2luZyBhIHBvaW50ZXIgdG8gYSBkb20gbm9kZSBhbmQgaXQncyBudWxsLCBlLmcuIHRoaXMuX2NvbnRhaW5lclxuICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBXaW5kb3cpIHtcbiAgICAgIHJldHVybiBbc2VsZWN0b3JdO1xuICAgIH1cblxuICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gIH1cblxuICBzdGF0aWMgb25SZWFkeSAoY2IpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGVkJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKSB7XG4gICAgICBjYigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIERPTS5vbihkb2N1bWVudCwgJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlRWxlIHdpbGwgY3JlYXRlIGEge0hUTUxFbGVtZW50fSBhbmQgYXBwbHkgdGhlIHByb3BlcnRpZXMgYXR0cmlidXRlcyB0aHJvdWdoIGFuIG9iamVjdCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGVsIFRoZSBlbGVtZW50IGB0YWdgIG5hbWUgdG8gY29uc3RydWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzX2RhdGEgT3B0aW9uYWwgYXR0cmlidXRlcyB0byBhcHBseSB0byB0aGUgbmV3IEhUTUxFbGVtZW50XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlRWwgKGVsLCBvcHRzX2RhdGEgPSB7fSkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbCk7XG4gICAgbGV0IHByb3BzID0gT2JqZWN0LmtleXMob3B0c19kYXRhKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9wc1tpXSA9PT0gJ2NsYXNzJykge1xuICAgICAgICBET00uYWRkQ2xhc3Mobm9kZSwgb3B0c19kYXRhW3Byb3BzW2ldXSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBub2RlW3Byb3BzW2ldXSA9IG9wdHNfZGF0YVtwcm9wc1tpXV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgYXBwZW5kIChwYXJlbnQsIG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBub2RlID0gcGFyZW50O1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXJlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJlbnQgPSBET00ucXVlcnkocGFyZW50KTtcbiAgICB9XG5cbiAgICAvLyBTdXBwb3J0IEhUTUwgaW5qZWN0aW9uIGFzIHdlbGwgYXMgSFRNTEVsZW1lbnQgYXBwZW5kc1xuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyQmVnaW4nLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhZGRDbGFzcyAobm9kZSwgY2xhc3NOYW1lKSB7XG4gICAgbGV0IGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJywnKTtcbiAgICBsZXQgbGVuID0gY2xhc3Nlcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBub2RlLmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGVtcHR5IChwYXJlbnQpIHtcbiAgICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICBzdGF0aWMgY3NzIChzZWxlY3Rvciwgc3R5bGVzKSB7XG4gICAgbGV0IG5vZGUgPSBET00ucXVlcnkoc2VsZWN0b3IpO1xuXG4gICAgZm9yIChsZXQgcHJvcCBpbiBzdHlsZXMpIHtcbiAgICAgIG5vZGUuc3R5bGVbcHJvcF0gPSBzdHlsZXNbcHJvcF07XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGF0dHIgKHNlbGVjdG9yLCBhdHRyLCB2YWwpIHtcbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLnNldEF0dHJpYnV0ZShhdHRyLCB2YWwpO1xuICB9XG5cbiAgc3RhdGljIHRyaWdnZXIgKHNlbGVjdG9yLCBldmVudCwgc2V0dGluZ3MpIHtcbiAgICBsZXQgZSA9IG5ldyBFdmVudChldmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAnYnViYmxlcyc6IHRydWUsXG4gICAgICAnY2FuY2VsYWJsZSc6IHRydWVcbiAgICB9LCBzZXR0aW5ncyB8fCB7fSkpO1xuXG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5kaXNwYXRjaEV2ZW50KGUpO1xuICB9XG5cbiAgc3RhdGljIG9uIChzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgb2ZmIChzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZGVsZWdhdGUgKGN0eHQsIHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpIHtcbiAgICBsZXQgZWwgPSBET00ucXVlcnkoY3R4dCk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIHdoaWxlICghdGFyZ2V0LmlzRXF1YWxOb2RlKGVsKSkge1xuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgaGFuZGxlcihldmVudCwgdGFyZ2V0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU3RhdGUgKi9cblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi8uLi9jb3JlL2V2ZW50ZW1pdHRlci9ldmVudGVtaXR0ZXInO1xuXG4vKipcbiAqIFN0YXRlIGNvbnRhaW5zIHRoZSBkYXRhIGZvciB0aGUgY29tcG9uZW50XG4gKiBhbmQgZXhwb3NlcyBhbiB7RXZlbnRFbWl0dGVyfSBpbnRlcmZhY2Ugc28gdGhhdCBleHRlcm5hbFxuICogZGVwZW5kZW5jaWVzIGNhbiBsaXN0ZW4vaG9vayBzdWJzY3JpYmUgdG8gbWVzc2FnZXMvdXBkYXRlcy5cbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RhdGUgPSBkYXRhIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKiBOT1RFKGJpbGx5KTogRG9lcyBub3QgZmlyZSBhbiB1cGRhdGUgbWVzc2FnZVxuICAgKi9cbiAgaW5pdCAocHJvcCwgb3B0VmFsKSB7XG4gICAgdGhpcy5fc2V0KHByb3AsIG9wdFZhbCk7XG4gIH1cblxuICAvKipcbiAgICogc2V0dGVyIGZvciB0aGUgc3RhdGVcbiAgICogQHBhcmFtIHByb3Age3N0cmluZ3xPYmplY3R9IFRoZSBwcm9wZXJ0eSB0byBzZXRcbiAgICogQHBhcmFtIG9wdFZhbCBPcHRpb25hbCwgaWYgcHJvcCBpcyBhIHtzdHJpbmd9LCBpdCB3aWxsIGFzc2lnbiB0aGUgdmFsdWUgdG8gdGhhdCBwcm9wZXJ0eVxuICAgKi9cbiAgc2V0IChwcm9wLCBvcHRWYWwpIHtcbiAgICB0aGlzLl9zZXQocHJvcCwgb3B0VmFsKTtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldHRlciBmb3IgdGhlIHN0YXRlIGVuYWJsZXMgeW91IHRvIHVwZGF0ZSBhIHNpbmdsZSBwcm9wZXJ0eSwgb3IgY29tcGxldGUgc3RhdGVcbiAgICogZGVwZW5kaW5nIG9uIHRoZSBhcmd1bWVudHMgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSBwcm9wIHtzdHJpbmd8T2JqZWN0fSBUaGUgcHJvcGVydHkgdG8gc2V0XG4gICAqIEBwYXJhbSBvcHRWYWwgSWYgcHJvcCBpcyBhIHtzdHJpbmd9LCBwcm92aWRlIGl0cyB2YWx1ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NldCAocHJvcCwgb3B0VmFsKSB7XG4gICAgaWYgKG9wdFZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9zdGF0ZSA9IHByb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0YXRlW3Byb3BdID0gb3B0VmFsO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSAoZGF0YSkge1xuICAgIHRoaXMuX3N0YXRlID0gZGF0YTtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGEgcHJvcGVydGllcyB2YWx1ZSBmcm9tIHRoZSBzdGF0ZVxuICAgKiBJZiBubyBwcm9wZXJ0eSBwcm92aWRlZCwgcmV0dXJuIHRoZSBmdWxsIHN0YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRQcm9wIG9wdGlvbmFsIHByb3BlcnR5IHRvIHJldHJpZXZlXG4gICAqL1xuICBnZXQgKG9wdFByb3ApIHtcbiAgICBpZiAob3B0UHJvcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zdGF0ZVtvcHRQcm9wXTtcbiAgfVxuXG4gIGhhcyAocHJvcCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZVtwcm9wXSAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgYXNKU09OICgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gIH1cbn1cbiIsIi8qKlxuICogTW9kZWwgZm9yIHRoZSBhbmFseXRpY3MgZXZlbnQgdHlwZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmFseXRpY3NFdmVudCB7XG4gIGNvbnN0cnVjdG9yICh0eXBlLCBsYWJlbCkge1xuICAgIHRoaXMuZXZlbnRUeXBlID0gdHlwZS50b1VwcGVyQ2FzZSgpO1xuICAgIGlmIChsYWJlbCkge1xuICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBwcm92aWRlZCBvcHRpb25zIHRvIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBBZGRpdGlvbmFsIG9wdGlvbnMgZm9yIHRoZSBldmVudFxuICAgKi9cbiAgYWRkT3B0aW9ucyAob3B0aW9ucykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBldmVudCBpbiB0aGUgYXBpIGZvcm1hdCwgdHlwaWNhbGx5IGZvciByZXBvcnRpbmcgdG8gdGhlIGFwaVxuICAgKi9cbiAgdG9BcGlFdmVudCAoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBbmFseXRpY3NSZXBvcnRlciAqL1xuXG5pbXBvcnQgQW5hbHl0aWNzRXZlbnQgZnJvbSAnLi9hbmFseXRpY3NldmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCB7IEFOQUxZVElDU19CQVNFX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgSHR0cFJlcXVlc3RlciBmcm9tICcuLi9odHRwL2h0dHByZXF1ZXN0ZXInO1xuXG4vKipcbiAqIENsYXNzIGZvciByZXBvcnRpbmcgYW5hbHl0aWNzIGV2ZW50cyB0byB0aGUgc2VydmVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuYWx5dGljc1JlcG9ydGVyIHtcbiAgY29uc3RydWN0b3IgKGNvcmUsIGFuc3dlcnNLZXksIGJ1c2luZXNzSWQsIGdsb2JhbE9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuX2J1c2luZXNzSWQgPSBidXNpbmVzc0lkO1xuXG4gICAgLyoqXG4gICAgICogT3B0aW9ucyB0byBpbmNsdWRlIHdpdGggZXZlcnkgYW5hbHl0aWMgZXZlbnQgcmVwb3J0ZWQgdG8gdGhlIHNlcnZlclxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9nbG9iYWxPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZ2xvYmFsT3B0aW9ucywgeyBhbnN3ZXJzS2V5IH0pO1xuXG4gICAgLy8gbGlzdGVuIHRvIHF1ZXJ5IGlkIHVwZGF0ZXNcbiAgICBjb3JlLnN0b3JhZ2Uub24oJ3VwZGF0ZScsIFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBpZCA9PiB0aGlzLnNldFF1ZXJ5SWQoaWQpKTtcbiAgfVxuXG4gIHNldFF1ZXJ5SWQgKHF1ZXJ5SWQpIHtcbiAgICB0aGlzLl9nbG9iYWxPcHRpb25zLnF1ZXJ5SWQgPSBxdWVyeUlkO1xuICB9XG5cbiAgcmVwb3J0IChldmVudCkge1xuICAgIGlmICghKGV2ZW50IGluc3RhbmNlb2YgQW5hbHl0aWNzRXZlbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0FuYWx5dGljc0Vycm9yKCdUcmllZCB0byBzZW5kIGludmFsaWQgYW5hbHl0aWNzIGV2ZW50JywgZXZlbnQpO1xuICAgIH1cblxuICAgIGV2ZW50LmFkZE9wdGlvbnModGhpcy5fZ2xvYmFsT3B0aW9ucyk7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IEh0dHBSZXF1ZXN0ZXIoKTtcblxuICAgIHJldHVybiByZXF1ZXN0LmJlYWNvbihcbiAgICAgIGAke0FOQUxZVElDU19CQVNFX1VSTH0vcmVhbHRpbWVhbmFseXRpY3MvZGF0YS9hbnN3ZXJzLyR7dGhpcy5fYnVzaW5lc3NJZH1gLFxuICAgICAgeyAnZGF0YSc6IGV2ZW50LnRvQXBpRXZlbnQoKSB9XG4gICAgKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2hBcGkgfSBmcm9tICcuL3NlYXJjaC9zZWFyY2hhcGknO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBbmFseXRpY3NSZXBvcnRlciB9IGZyb20gJy4vYW5hbHl0aWNzL2FuYWx5dGljc3JlcG9ydGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kdWxlRGF0YSB9IGZyb20gJy4vc3RvcmFnZS9tb2R1bGVkYXRhJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZS9zdG9yYWdlJztcbiIsIi8qKiBAbW9kdWxlIENvbXBvbmVudCAqL1xuXG5pbXBvcnQgeyBSZW5kZXJlcnMgfSBmcm9tICcuLi9yZW5kZXJpbmcvY29uc3QnO1xuXG5pbXBvcnQgRE9NIGZyb20gJy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0YXRlIGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgQW5hbHl0aWNzUmVwb3J0ZXIgfSBmcm9tICcuLi8uLi9jb3JlJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcblxuLyoqXG4gKiBDb21wb25lbnQgaXMgYW4gYWJzdHJhY3Rpb24gdGhhdCBlbmNhcHN1bGF0ZXMgc3RhdGUsIGJlaGF2aW9yLFxuICogYW5kIHZpZXcgZm9yIGEgcGFydGljdWxhciBjaHVuayBvZiBmdW5jdGlvbmFsaXR5IG9uIHRoZSBwYWdlLlxuICpcbiAqIFRoZSBBUEkgZXhwb3NlcyBldmVudCBsaWZlIGN5Y2xlIGhvb2tzIGZvciB3aGVuIHRoaW5ncyBhcmUgcmVuZGVyZWQsXG4gKiBtb3VudGVkLCBjcmVhdGVkLCBldGMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yICh0eXBlLCBjb25maWcgPSB7fSkge1xuICAgIC8vIFNpbXBsZSBmYWNhZGUgcGF0dGVybiB0byBlbmFibGUgdGhlIHVzZXIgdG8gcGFzcyBhIHNpbmdsZSBvYmplY3RcbiAgICAvLyBjb250YWluaW5nIGFsbCB0aGUgbmVjZXNzYXJ5IG9wdGlvbnMgYW5kIHNldHRpbmdzXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uZmlnID0gdHlwZTtcbiAgICAgIHR5cGUgPSBjb25maWcudHlwZTtcbiAgICB9XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFVuaXF1ZSBuYW1lIG9mIHRoaXMgY29tcG9uZW50IGluc3RhbmNlXG4gICAgICogVXNlZCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIG90aGVyIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgdHlwZVxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5uYW1lID0gY29uZmlnLm5hbWUgfHwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gICAgLyoqXG4gICAgICogQ2FjaGUgdGhlIG9wdGlvbnMgc28gdGhhdCB3ZSBjYW4gcHJvcG9nYXRlIHByb3Blcmx5IHRvIGNoaWxkIGNvbXBvbmVudHNcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcblxuICAgIC8qKlxuICAgICAqIEFuIGlkZW50aWZpZXIgdXNlZCB0byBjbGFzc2lmeSB0aGUgdHlwZSBvZiBjb21wb25lbnQuXG4gICAgICogVGhlIGNvbXBvbmVudCBtYW5hZ2VyIHVzZXMgdGhpcyBpbmZvcm1hdGlvbiBpbiBvcmRlciB0byBwZXJzaXN0IGFuZCBvcmdhbml6ZSBjb21wb25lbnRzXG4gICAgICogQHR5cGUge3N0cmluZ3xDb21wb25lbnRUeXBlfVxuICAgICAqL1xuICAgIHRoaXMuX3R5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgcGFyZW50IGNvbXBvbmVudCwgaWYgZXhpc3RzXG4gICAgICogQHR5cGUge0NvbXBvbmVudH1cbiAgICAgKi9cbiAgICB0aGlzLl9wYXJlbnQgPSBjb25maWcucGFyZW50IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGNvbnRhaW5lciBmb3IgYWxsIHRoZSBjaGlsZCBjb21wb25lbnRzXG4gICAgICogQHR5cGUge0NvbXBvbmVudFtdfVxuICAgICAqL1xuICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3RhdGUgKGRhdGEpIG9mIHRoZSBjb21wb25lbnQgdG8gYmUgcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlIGZvciByZW5kZXJpbmdcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX3N0YXRlID0gbmV3IFN0YXRlKGNvbmZpZy5zdGF0ZSk7XG5cbiAgICAvKipcbiAgICAgKiBUT0RPKGJpbGx5KSBUaGlzIHNob3VsZCBiZSAnc2VydmljZXMnXG4gICAgICovXG4gICAgdGhpcy5jb3JlID0gY29uZmlnLmNvcmUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlciwgd2hpY2ggY29udGFpbnMgYWxsIG9mIHRoZSBjb21wb25lbnQgY2xhc3Nlc1xuICAgICAqIGVsaWdpYmxlIHRvIGJlIGNyZWF0ZWRcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50TWFuYWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIgPSBjb25maWcuY29tcG9uZW50TWFuYWdlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGFuYWx5dGljcyByZXBvcnRlciwgdXNlZCB0byByZXBvcnQgZXZlbnRzIGZvciB0aGlzIGNvbXBvbmVudFxuICAgICAqIEB0eXBlIHtBbmFseXRpY3NSZXBvcnRlcn1cbiAgICAgKi9cbiAgICB0aGlzLmFuYWx5dGljc1JlcG9ydGVyID0gY29uZmlnLmFuYWx5dGljc1JlcG9ydGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBPcHRpb25zIHRvIGluY2x1ZGUgd2l0aCBhbGwgYW5hbHl0aWMgZXZlbnRzIHNlbnQgYnkgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYW5hbHl0aWNzT3B0aW9ucyA9IGNvbmZpZy5hbmFseXRpY3NPcHRpb25zIHx8IHt9O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIERPTSBub2RlIHRoYXQgdGhlIGNvbXBvbmVudCB3aWxsIGJlIGFwcGVuZGVkIHRvIHdoZW4gbW91bnRlZC9yZW5kZXJlZC5cbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gbnVsbCkge1xuICAgICAgaWYgKHR5cGVvZiBjb25maWcuY29udGFpbmVyICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgYGNvbnRhaW5lcmAgb3B0aW9uIGZvciBjb21wb25lbnQgY29uZmlndXJhdGlvbi4gTXVzdCBiZSBvZiB0eXBlIGBzdHJpbmdgLicpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29udGFpbmVyID0gRE9NLnF1ZXJ5KGNvbmZpZy5jb250YWluZXIpIHx8IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IERPTS5xdWVyeSh0aGlzLl9wYXJlbnQuX2NvbnRhaW5lciwgY29uZmlnLmNvbnRhaW5lcik7XG5cbiAgICAgIC8vIElmIHdlIGhhdmUgYSBwYXJlbnQsIGFuZCB0aGUgY29udGFpbmVyIGlzIG1pc3NpbmcgZnJvbSB0aGUgRE9NLFxuICAgICAgLy8gd2UgY29uc3RydWN0IHRoZSBjb250YWluZXIgYW5kIGFwcGVuZCBpdCB0byB0aGUgcGFyZW50XG4gICAgICBpZiAodGhpcy5fY29udGFpbmVyID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IERPTS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiBjb25maWcuY29udGFpbmVyLnN1YnN0cmluZygxLCBjb25maWcuY29udGFpbmVyLmxlbmd0aClcbiAgICAgICAgfSk7XG4gICAgICAgIERPTS5hcHBlbmQodGhpcy5fcGFyZW50Ll9jb250YWluZXIsIHRoaXMuX2NvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBjb250YWluZXIgRE9NIG5vZGU6ICcgKyBjb25maWcuY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIGN1c3RvbSBjbGFzcyB0byBiZSBhcHBsaWVkIHRvIHt0aGlzLl9jb250YWluZXJ9IG5vZGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2NsYXNzTmFtZSA9IGNvbmZpZy5jbGFzcyB8fCAnY29tcG9uZW50JztcblxuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIHJlbmRlciBmdW5jdGlvbiB0byBiZSB1c2VkIGluc3RlYWQgb2YgdXNpbmcgdGhlIGRlZmF1bHQgcmVuZGVyZXJcbiAgICAgKiBAdHlwZSB7UmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyID0gY29uZmlnLnJlbmRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGRlZmF1bHQge1JlbmRlcmVyfSB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgcmVuZGVyaW5nIHRoZSB0ZW1wbGF0ZVxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXJlciA9IGNvbmZpZy5yZW5kZXJlciB8fCBSZW5kZXJlcnMuSGFuZGxlYmFycztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSBzdHJpbmcgdG8gdXNlIGZvciByZW5kZXJpbmcgdGhlIGNvbXBvbmVudFxuICAgICAqIElmIHRoaXMgaXMgbGVmdCBlbXB0eSwgd2UgbG9va3VwIHRoZSB0ZW1wbGF0ZSB0aGUgYmFzZSB0ZW1wbGF0ZXMgdXNpbmcgdGhlIHRlbXBsYXRlTmFtZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGUgPSBjb25maWcudGVtcGxhdGUgPyB0aGlzLl9yZW5kZXJlci5jb21waWxlKGNvbmZpZy50ZW1wbGF0ZSkgOiBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlTmFtZSB0byB1c2UgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50LlxuICAgICAqIFRoaXMgaXMgb25seSB1c2VkIGlmIF90ZW1wbGF0ZSBpcyBlbXB0eS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IGNvbmZpZy50ZW1wbGF0ZU5hbWUgfHwgJ2RlZmF1bHQnO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgc3RhdGUgaW5kaWNhdGluZyB3aGV0aGVyIG9yIG5vdCB0aGUgY29tcG9uZW50IGhhcyBiZWVuIG1vdW50ZWQgdG8gdGhlIERPTVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrLCB0aGF0cyB1c2VkIHRvIHRyYW5zZm9ybSB0aGUgaW50ZXJuYWwgZGF0YVxuICAgICAqIG1vZGVscyBvZiB0aGUgY29tcG9uZW50cywgYmVmb3JlIGl0IGdldHMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50IHN0YXRlLlxuICAgICAqIEJ5IGRlZmF1bHQsIG5vIHRyYW5zZm9ybWF0aW9uIGhhcHBlbnMuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMudHJhbnNmb3JtRGF0YSA9IGNvbmZpZy50cmFuc2Zvcm1EYXRhIHx8IHRoaXMudHJhbnNmb3JtRGF0YSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBjcmVhdGVkLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLm9uQ3JlYXRlID0gY29uZmlnLm9uQ3JlYXRlIHx8IHRoaXMub25DcmVhdGUgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnQgaXMgTW91bnRlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vbk1vdW50ID0gY29uZmlnLm9uTW91bnQgfHwgdGhpcy5vbk1vdW50IHx8IGZ1bmN0aW9uICgpIHsgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudHMgc3RhdGUgaXMgdXBkYXRlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vblVwZGF0ZSA9IGNvbmZpZy5vblVwZGF0ZSB8fCB0aGlzLm9uVXBkYXRlIHx8IGZ1bmN0aW9uICgpIHsgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdDb21wb25lbnQnO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaW5pdCAob3B0cykge1xuICAgIHRoaXMuc2V0U3RhdGUob3B0cy5kYXRhIHx8IG9wdHMuc3RhdGUgfHwge30pO1xuICAgIHRoaXMub25DcmVhdGUoKTtcbiAgICB0aGlzLl9zdGF0ZS5vbigndXBkYXRlJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgICAgdGhpcy5tb3VudCgpO1xuICAgIH0pO1xuXG4gICAgRE9NLmFkZENsYXNzKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB7IF9jb25maWc6IHRoaXMuX2NvbmZpZyB9LCBkYXRhKTtcbiAgICB0aGlzLl9zdGF0ZS5zZXQobmV3U3RhdGUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0U3RhdGUgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuZ2V0KHByb3ApO1xuICB9XG5cbiAgaGFzU3RhdGUgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuaGFzKHByb3ApO1xuICB9XG5cbiAgdHJhbnNmb3JtRGF0YSAoZGF0YSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYWRkQ2hpbGQgKGRhdGEsIHR5cGUsIG9wdHMpIHtcbiAgICBsZXQgY2hpbGRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKFxuICAgICAgdHlwZSxcbiAgICAgIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSwgb3B0cyB8fCB7fSwge1xuICAgICAgICBfcGFyZW50T3B0czogdGhpcy5fY29uZmlnXG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGNoaWxkQ29tcG9uZW50KTtcbiAgICByZXR1cm4gY2hpbGRDb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSByZW5kZXIgbWV0aG9kIHRvIGJlIHVzZWQgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlbmRlclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBzZXRSZW5kZXIgKHJlbmRlcikge1xuICAgIHRoaXMuX3JlbmRlciA9IHJlbmRlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHJlbmRlcmVyIGZvciB0aGUgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7UmVuZGVyZXJUeXBlfSByZW5kZXJlclxuICAgKi9cbiAgc2V0UmVuZGVyZXIgKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSBSZW5kZXJlcnNbcmVuZGVyZXJdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRlbXBsYXRlIGZvciB0aGUgY29tcG9uZW50IHRvIHVzZSB3aGVuIHJlbmRlcmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAgICovXG4gIHNldFRlbXBsYXRlICh0ZW1wbGF0ZSkge1xuICAgIHRoaXMuX3RlbXBsYXRlID0gdGhpcy5fcmVuZGVyZXIuY29tcGlsZSh0ZW1wbGF0ZSk7XG4gIH1cblxuICB1bk1vdW50ICgpIHtcbiAgICBET00uZW1wdHkodGhpcy5fY29udGFpbmVyKTtcbiAgfVxuXG4gIG1vdW50ICgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy51bk1vdW50KCk7XG4gICAgaWYgKHRoaXMuYmVmb3JlTW91bnQoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIERPTS5hcHBlbmQodGhpcy5fY29udGFpbmVyLCB0aGlzLnJlbmRlcih0aGlzLl9zdGF0ZS5hc0pTT04oKSkpO1xuXG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9vbk1vdW50KCk7XG5cbiAgICAvLyBBdHRhY2ggYW5hbHl0aWNzIGhvb2tzIGFzIG5lY2Vzc2FyeVxuICAgIGlmICh0aGlzLmFuYWx5dGljc1JlcG9ydGVyKSB7XG4gICAgICBsZXQgZG9tSG9va3MgPSBET00ucXVlcnlBbGwodGhpcy5fY29udGFpbmVyLCAnW2RhdGEtZXZlbnR0eXBlXTpub3QoW2RhdGEtaXMtYW5hbHl0aWNzLWF0dGFjaGVkXSknKTtcbiAgICAgIGRvbUhvb2tzLmZvckVhY2godGhpcy5fY3JlYXRlQW5hbHl0aWNzSG9vay5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9vbk1vdW50ICgpIHtcbiAgICB0aGlzLm9uTW91bnQodGhpcyk7XG4gICAgaWYgKHRoaXMuX2NoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgY2hpbGQuX29uTW91bnQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZW5kZXIgdGhlIHRlbXBsYXRlIHVzaW5nIHRoZSB7UmVuZGVyZXJ9IHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgYW5kIHRlbXBsYXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHJlbmRlciAoZGF0YSA9IHRoaXMuX3N0YXRlLmdldCgpKSB7XG4gICAgdGhpcy5iZWZvcmVSZW5kZXIoKTtcbiAgICBkYXRhID0gdGhpcy50cmFuc2Zvcm1EYXRhKGRhdGEpO1xuXG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICAvLyBVc2UgZWl0aGVyIHRoZSBjdXN0b20gcmVuZGVyIGZ1bmN0aW9uIG9yIHRoZSBpbnRlcm5hbCByZW5kZXJlclxuICAgIC8vIGRlcGVuZGFudCBvbiB0aGUgY29tcG9uZW50IGNvbmZpZ3VyYXRpb25cbiAgICBpZiAodHlwZW9mIHRoaXMuX3JlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaHRtbCA9IHRoaXMuX3JlbmRlcihkYXRhKTtcbiAgICAgIGlmICh0eXBlb2YgaHRtbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW5kZXIgbWV0aG9kIG11c3QgcmV0dXJuIEhUTUwgYXMgdHlwZSB7c3RyaW5nfScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZW5kZXIgdGhlIGV4aXN0aW5nIHRlbXBsYXRlcyBhcyBhIHN0cmluZ1xuICAgICAgaHRtbCA9IHRoaXMuX3JlbmRlcmVyLnJlbmRlcih7XG4gICAgICAgIHRlbXBsYXRlOiB0aGlzLl90ZW1wbGF0ZSxcbiAgICAgICAgdGVtcGxhdGVOYW1lOiB0aGlzLl90ZW1wbGF0ZU5hbWVcbiAgICAgIH0sIGRhdGEpO1xuICAgIH1cblxuICAgIC8vIFdlIGNyZWF0ZSBhbiBIVE1MIERvY3VtZW50IGZyYWdtZW50IHdpdGggdGhlIHJlbmRlcmVkIHN0cmluZ1xuICAgIC8vIFNvIHRoYXQgd2UgY2FuIHF1ZXJ5IGl0IGZvciBwcm9jZXNzaW5nIG9mIHN1YiBjb21wb25lbnRzXG4gICAgbGV0IGVsID0gRE9NLmNyZWF0ZShodG1sKTtcblxuICAgIC8vIFByb2Nlc3MgdGhlIERPTSB0byBkZXRlcm1pbmUgaWYgd2Ugc2hvdWxkIGNyZWF0ZVxuICAgIC8vIGluLW1lbW9yeSBzdWItY29tcG9uZW50cyBmb3IgcmVuZGVyaW5nXG4gICAgbGV0IGRvbUNvbXBvbmVudHMgPSBET00ucXVlcnlBbGwoZWwsICdbZGF0YS1jb21wb25lbnRdJyk7XG4gICAgZG9tQ29tcG9uZW50cy5mb3JFYWNoKGMgPT4gdGhpcy5fY3JlYXRlU3ViY29tcG9uZW50KGMsIGRhdGEpKTtcblxuICAgIHRoaXMuYWZ0ZXJSZW5kZXIoKTtcbiAgICByZXR1cm4gZWwuaW5uZXJIVE1MO1xuICB9XG5cbiAgX2NyZWF0ZVN1YmNvbXBvbmVudCAoZG9tQ29tcG9uZW50LCBkYXRhKSB7XG4gICAgbGV0IGRhdGFzZXQgPSBkb21Db21wb25lbnQuZGF0YXNldDtcbiAgICBsZXQgdHlwZSA9IGRhdGFzZXQuY29tcG9uZW50O1xuICAgIGxldCBwcm9wID0gZGF0YXNldC5wcm9wO1xuICAgIGxldCBvcHRzID0gZGF0YXNldC5vcHRzID8gSlNPTi5wYXJzZShkYXRhc2V0Lm9wdHMpIDoge307XG5cbiAgICAvLyBSZW5kZXJpbmcgYSBzdWIgY29tcG9uZW50IHNob3VsZCBiZSB3aXRoaW4gdGhlIGNvbnRleHQsXG4gICAgLy8gb2YgdGhlIG5vZGUgdGhhdCB3ZSBwcm9jZXNzZWQgaXQgZnJvbVxuICAgIG9wdHMgPSBPYmplY3QuYXNzaWduKG9wdHMsIHtcbiAgICAgIGNvbnRhaW5lcjogZG9tQ29tcG9uZW50XG4gICAgfSk7XG5cbiAgICBsZXQgY2hpbGREYXRhID0gZGF0YVtwcm9wXTtcblxuICAgIC8vIFRPRE8oYmlsbHkpIFJpZ2h0IG5vdywgaWYgd2UgcHJvdmlkZSBhbiBhcnJheSBhcyB0aGUgZGF0YSBwcm9wLFxuICAgIC8vIHRoZSBiZWhhdmlvciBpcyB0byBjcmVhdGUgbWFueSBjb21wb25lbnRzIGZvciBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5LlxuICAgIC8vIFRIQVQgaW50ZXJmYWNlIFNIT1VMRCBjaGFuZ2UgdG8gdXNlIGEgZGlmZmVyZW50IHByb3BlcnR5IHRoYXQgZGVmaW5lc1xuICAgIC8vIHdoZXRoZXIgdG8gYXJyYXkgZGF0YSBzaG91bGQgYmUgdXNlZCBmb3IgYSBzaW5nbGUgY29tcG9uZW50IG9yXG4gICAgLy8gdG8gY3JlYXRlIG1hbnkgY29tcG9uZW50cyBmb3IgZWFjaCBpdGVtLlxuICAgIC8vIE92ZXJsb2FkaW5nIGFuZCBoYXZpbmcgdGhpcyBzaWRlIGVmZmVjdCBpcyB1bmludHVpdGl2ZSBhbmQgV1JPTkdcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGREYXRhKSkge1xuICAgICAgbGV0IGNoaWxkQ29tcG9uZW50ID0gdGhpcy5hZGRDaGlsZChjaGlsZERhdGEsIHR5cGUsIG9wdHMpO1xuICAgICAgRE9NLmFwcGVuZChkb21Db21wb25lbnQsIGNoaWxkQ29tcG9uZW50LnJlbmRlcigpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UsIHJlbmRlciB0aGUgY29tcG9uZW50IGFzIGV4cGVjdGVkXG4gICAgbGV0IGNoaWxkSFRNTCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGREYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGRDb21wb25lbnQgPSB0aGlzLmFkZENoaWxkKGNoaWxkRGF0YVtpXSwgdHlwZSwgb3B0cyk7XG4gICAgICBjaGlsZEhUTUwucHVzaChjaGlsZENvbXBvbmVudC5yZW5kZXIoKSk7XG4gICAgfVxuXG4gICAgRE9NLmFwcGVuZChkb21Db21wb25lbnQsIGNoaWxkSFRNTC5qb2luKCcnKSk7XG4gIH1cblxuICBfY3JlYXRlQW5hbHl0aWNzSG9vayAoZG9tQ29tcG9uZW50KSB7XG4gICAgZG9tQ29tcG9uZW50LmRhdGFzZXQuaXNBbmFseXRpY3NBdHRhY2hlZCA9IHRydWU7XG4gICAgY29uc3QgZGF0YXNldCA9IGRvbUNvbXBvbmVudC5kYXRhc2V0O1xuICAgIGNvbnN0IHR5cGUgPSBkYXRhc2V0LmV2ZW50dHlwZTtcbiAgICBjb25zdCBsYWJlbCA9IGRhdGFzZXQuZXZlbnRsYWJlbDtcbiAgICBjb25zdCBvcHRpb25zID0gZGF0YXNldC5ldmVudG9wdGlvbnMgPyBKU09OLnBhcnNlKGRhdGFzZXQuZXZlbnRvcHRpb25zKSA6IHt9O1xuXG4gICAgRE9NLm9uKGRvbUNvbXBvbmVudCwgJ2NsaWNrJywgZSA9PiB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBBbmFseXRpY3NFdmVudCh0eXBlLCBsYWJlbCk7XG4gICAgICBldmVudC5hZGRPcHRpb25zKHRoaXMuX2FuYWx5dGljc09wdGlvbnMpO1xuICAgICAgZXZlbnQuYWRkT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgIHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIucmVwb3J0KGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbkNyZWF0ZSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGNvbnN0cnVjdGVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvbkNyZWF0ZSAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uVXBkYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGNoYW5nZXNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uVXBkYXRlIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlUmVuZGVyIGV2ZW50IGlzIHRyaWdnZXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYmVmb3JlUmVuZGVyIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYWZ0ZXJSZW5kZXIgZXZlbnQgaXMgdHJpZ2dlcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIGFmdGVyUmVuZGVyIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25Nb3VudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFwcGVuZGVkIHRvIHRoZSBET01cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvblVuTW91bnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyByZW1vdmVkIGZyb20gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25Vbk1vdW50IChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlTW91bnQgaXMgdHJpZ2dlcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQgdG8gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYmVmb3JlTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvbkRlc3Ryb3kgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uRGVzdHJveSAoY2IpIHtcblxuICB9XG59XG4iLCIvKiogQG1vZHVsZSBOYXZpZ2F0aW9uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5cbi8qKlxuICogVGhlIFRhYiBpcyBhIG1vZGVsIHRoYXQgaXMgdXNlZCB0byBwb3dlciB0aGUgTmF2aWdhdGlvbiB0YWJzIGluIHRoZSB2aWV3LlxuICogSXQncyBpbml0aWFsaXplZCB0aHJvdWdoIHRoZSBjb25maWd1cmF0aW9uIHByb3ZpZGVkIHRvIHRoZSBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBUYWIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIHRhYiB0aGF0IGlzIGV4cG9zZWQgZm9yIHRoZSBsaW5rXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmxhYmVsID0gY29uZmlnLmxhYmVsO1xuICAgIGlmICh0eXBlb2YgdGhpcy5sYWJlbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoJ2xhYmVsIGlzIGEgcmVxdWlyZWQgY29uZmlndXJhdGlvbiBvcHRpb24gZm9yIHRhYi4nLCAnTmF2aWdhdGlvbkNvbXBvbmVudCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb21wbGV0ZSBVUkwsIGluY2x1ZGluZyB0aGUgcGFyYW1zXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnVybCA9IGNvbmZpZy51cmw7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoJ3VybCBpcyBhIHJlcXVpcmVkIGNvbmZpZ3VyYXRpb24gb3B0aW9uIGZvciB0YWIuJywgJ05hdmlnYXRpb25Db21wb25lbnQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VydmVyc2lkZSB2ZXJ0aWNhbCBjb25maWcgaWQgdGhhdCB0aGlzIGlzIHJlZmVyZW5jZWQgdG8uXG4gICAgICogQnkgcHJvdmlkaW5nIHRoaXMsIGVuYWJsZXMgZHluYW1pYyBzb3J0aW5nIGJhc2VkIG9uIHJlc3VsdHMuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmNvbmZpZ0lkID0gY29uZmlnLmNvbmZpZ0lkIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYmFzZSBVUkwgdXNlZCBmb3IgY29uc3RydWN0aW5nIHRoZSBVUkwgd2l0aCBwYXJhbXNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuYmFzZVVybCA9IGNvbmZpZy51cmw7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gc2hvdyB0aGlzIHRhYiBmaXJzdCBpbiB0aGUgb3JkZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmlzRmlyc3QgPSBjb25maWcuaXNGaXJzdCB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgdG8gYXBwbHkgYSBzcGVjaWFsIGNsYXNzIHRvIHRoZVxuICAgICAqIG1hcmt1cCB0byBkZXRlcm1pbmUgaWYgaXQncyBhbiBhY3RpdmUgdGFiXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc0FjdGl2ZSA9IGNvbmZpZy5pc0FjdGl2ZSB8fCBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBmcm9tIHdpbGwgY29uc3RydWN0IGEgbWFwIG9mIGNvbmZpZ0lkIHRvIHtUYWJ9IGZyb21cbiAgICogYSBjb25maWd1cmF0aW9uIGZpbGVcbiAgICogQHBhcmFtIHtvYmplY3R9IHRhYnNDb25maWcgdGhlIGNvbmZpZ3VyYXRpb24gdG8gdXNlXG4gICAqL1xuICBzdGF0aWMgZnJvbSAodGFic0NvbmZpZykge1xuICAgIGxldCB0YWJzID0ge307XG4gICAgLy8gUGFyc2UgdGhlIG9wdGlvbnMgYW5kIGJ1aWxkIG91dCBvdXIgdGFicyBhbmRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNDb25maWcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB0YWIgPSB0YWJzQ29uZmlnW2ldO1xuICAgICAgLy8gRm9yIHRhYnMgd2l0aG91dCBjb25maWcgaWRzLCBtYXAgdGhlaXIgVVJMIHRvIHRoZSBjb25maWdJRFxuICAgICAgLy8gdG8gYXZvaWQgZHVwbGljYXRpb24gb2YgcmVuZGVyc1xuICAgICAgaWYgKHRhYi5jb25maWdJZCA9PT0gdW5kZWZpbmVkICYmIHRhYnNbdGFiLmNvbmZpZ0lkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhYi5jb25maWdJZCA9IHRhYi51cmw7XG4gICAgICB9XG5cbiAgICAgIHRhYnNbdGFiLmNvbmZpZ0lkXSA9IG5ldyBUYWIodGFiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhYnM7XG4gIH1cbn1cblxuLyoqXG4gKiBOYXZpZ2F0aW9uQ29tcG9uZW50IGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBidWlsZGluZyBhIGR5bmFtaWNcbiAqIG5hdmlnYXRpb24gdGhhdCBpcyBwb3dlcmVkIGJ5IHVuaXZlcnNhbCBzZWFyY2ggdXBkYXRlcy5cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkYXRhIHN0b3JhZ2Uga2V5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuTkFWSUdBVElPTjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBoYW5kbGViYXJzIHRlbXBsYXRlIHRvIHVzZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAnbmF2aWdhdGlvbi9uYXZpZ2F0aW9uJztcblxuICAgIC8qKlxuICAgICAqIFVub3JkZXJlZCBtYXAgb2YgZWFjaCB0YWIsIGtleWVkIGJ5IFZTIGNvbmZpZ0lkXG4gICAgICogQHR5cGUge09iamVjdC48U3RyaW5nLCBPYmplY3Q+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGFicyA9IFRhYi5mcm9tKGNvbmZpZy50YWJzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcmRlciBvZiB0aGUgdGFicywgcGFyc2VkIGZyb20gY29uZmlndXJhdGlvbiBvciBVUkwuXG4gICAgICogVGhpcyBnZXRzIHVwZGF0ZWQgYmFzZWQgb24gdGhlIHNlcnZlciByZXN1bHRzXG4gICAgICogQHR5cGUge0FycmF5LjxTdHJpbmc+fSBUaGUgbGlzdCBvZiBWUyBjb25maWdJZHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RhYk9yZGVyID0gdGhpcy5nZXREZWZhdWx0VGFiT3JkZXIoY29uZmlnLnRhYnMsIHRoaXMuZ2V0VXJsUGFyYW1zKCkpO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ05hdmlnYXRpb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbmNlIHRoZSBzZXJ2ZXIgZGF0YSBvbmx5IHByb3ZpZGVzIGEgbGlzdCBvZlxuICAgKiBWUyBjb25maWdJZHMsIHdlIG5lZWQgdG8gY29tcHV0ZSBhbmQgdHJhbnNmb3JtXG4gICAqIHRoZSBkYXRhIGludG8gdGhlIHByb3BlciBmb3JtYXQgZm9yIHJlbmRlcmluZy5cbiAgICpcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIGlmIChkYXRhLnRhYk9yZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3RhYk9yZGVyID0gdGhpcy5tZXJnZVRhYk9yZGVyKGRhdGEudGFiT3JkZXIsIHRoaXMuX3RhYk9yZGVyKTtcbiAgICB9XG5cbiAgICAvLyBTaW5jZSB0aGUgdGFiIG9yZGVyaW5nIGNhbiBjaGFuZ2UgYmFzZWQgb24gdGhlIHNlcnZlciBkYXRhXG4gICAgLy8gd2UgbmVlZCB0byB1cGRhdGUgZWFjaCB0YWJzIFVSTCB0byBpbmNsdWRlIHRoZSBvcmRlciBhcyBwYXJ0IG9mIHRoZWlyIHBhcmFtcy5cbiAgICAvLyBUaGlzIGhlbHBzIHdpdGggcGVyc2lzdGluZyBzdGF0ZSBhY3Jvc3MgdmVydGljYWxzLlxuICAgIGxldCB0YWJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90YWJPcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRhYiA9IHRoaXMuX3RhYnNbdGhpcy5fdGFiT3JkZXJbaV1dO1xuICAgICAgaWYgKHRhYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhYi51cmwgPSB0aGlzLmdlbmVyYXRlVGFiVXJsKHRhYi5iYXNlVXJsLCB0aGlzLmdldFVybFBhcmFtcygpKTtcbiAgICAgICAgdGFicy5wdXNoKHRhYik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKHtcbiAgICAgIHRhYnM6IHRhYnNcbiAgICB9KTtcbiAgfVxuXG4gIGdldFVybFBhcmFtcyAoKSB7XG4gICAgcmV0dXJuIG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldERlZmF1bHRUYWJPcmRlciB3aWxsIGNvbXB1dGUgdGhlIGluaXRpYWwgdGFiIG9yZGVyaW5nIGJhc2VkXG4gICAqIG9uIGEgY29tYmluYXRpb24gb2YgdGhlIGNvbmZpZ3VyYXRpb24gcHJvdmlkZWQgZGlyZWN0bHkgdG8gdGhlIGNvbXBvbmVudFxuICAgKiBhbmQgdGhlIHVybCBwYXJhbXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0W119IHRhYnNDb25maWdcbiAgICogQHBhcmFtIHtTZWFyY2hQYXJhbXN9XG4gICAqL1xuICBnZXREZWZhdWx0VGFiT3JkZXIgKHRhYnNDb25maWcsIHVybFBhcmFtcykge1xuICAgIGxldCB0YWJPcmRlciA9IFtdO1xuXG4gICAgLy8gVXNlIHRoZSBvcmRlcmluZyBmcm9tIHRoZSBVUkwgYXMgdGhlIHByaW1hcnkgY29uZmlndXJhdGlvblxuICAgIC8vIEFuZCB0aGVuIG1lcmdlIGl0IHdpdGggdGhlIGxvY2FsIGNvbmZpZ3VyYXRpb24sIGlmIHByb3ZpZGVkLlxuICAgIGlmICh1cmxQYXJhbXMgJiYgdXJsUGFyYW1zLmhhcygndGFiT3JkZXInKSkge1xuICAgICAgdGFiT3JkZXIgPSB1cmxQYXJhbXMuZ2V0KCd0YWJPcmRlcicpLnNwbGl0KCcsJyk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzQ29uZmlnLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YWIgPSB0YWJzQ29uZmlnW2ldO1xuICAgICAgLy8gU29tZSB0YWJzIGRvbid0IGhhdmUgY29uZmlnSWQsIHNvIHdlIG1hcCBpdCBmcm9tIFVSTFxuICAgICAgaWYgKHRhYi5jb25maWdJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhYi5jb25maWdJZCA9IHRhYi51cmw7XG4gICAgICB9XG5cbiAgICAgIC8vIEF2b2lkIGR1cGxpY2F0ZXMgaWYgY29uZmlnIHdhcyBwcm92aWRlZCBmcm9tIFVSTFxuICAgICAgaWYgKHRhYk9yZGVyLmluY2x1ZGVzKHRhYi5jb25maWdJZCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIGlzRmlyc3Qgc2hvdWxkIGFsd2F5cyBiZSB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgbGlzdFxuICAgICAgaWYgKHRhYi5pc0ZpcnN0KSB7XG4gICAgICAgIHRhYk9yZGVyLnVuc2hpZnQodGFiLmNvbmZpZ0lkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhYk9yZGVyLnB1c2godGFiLmNvbmZpZ0lkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFiT3JkZXI7XG4gIH1cblxuICAvKipcbiAgICogbWVyZ2VUYWJPcmRlciBtZXJnZXMgdHdvIGFycmF5cyBpbnRvIG9uZVxuICAgKiBieSBhcHBlbmRpbmcgYWRkaXRpb25hbCB0YWJzIHRvIHRoZSBlbmQgb2YgdGhlIG9yaWdpbmFsIGFycmF5XG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHRhYk9yZGVyIFRhYiBvcmRlciBwcm92aWRlZCBieSB0aGUgc2VydmVyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IG90aGVyVGFiT3JkZXIgVGFiIG9yZGVyIHByb3ZpZGVkIGJ5IGNvbmZpZ3VyYXRpb25cbiAgICogQHJldHVybiB7c3RyaW5nW119XG4gICAqL1xuICBtZXJnZVRhYk9yZGVyICh0YWJPcmRlciwgb3RoZXJUYWJPcmRlcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3RoZXJUYWJPcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGFiQ29uZmlnID0gb3RoZXJUYWJPcmRlcltpXTtcbiAgICAgIGlmICh0YWJPcmRlci5pbmNsdWRlcyh0YWJDb25maWcpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBpc0ZpcnN0IHNob3VsZCBiZSBhbiBvdmVycmlkZSB0byBkeW5hbWljIHRhYiBvcmRlcmluZy5cbiAgICAgIGlmICh0aGlzLl90YWJzW3RhYkNvbmZpZ10gJiYgdGhpcy5fdGFic1t0YWJDb25maWddLmlzRmlyc3QpIHtcbiAgICAgICAgdGFiT3JkZXIudW5zaGlmdCh0YWJDb25maWcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFiT3JkZXIucHVzaCh0YWJDb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YWJPcmRlcjtcbiAgfVxuXG4gIGdlbmVyYXRlVGFiVXJsIChiYXNlVXJsLCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCkpIHtcbiAgICAvLyBXZSB3YW50IHRvIHBlcnNpc3QgdGhlIHBhcmFtcyBmcm9tIHRoZSBleGlzdGluZyBVUkwgdG8gdGhlIG5ld1xuICAgIC8vIFVSTFMgd2UgY3JlYXRlLlxuICAgIHBhcmFtcy5zZXQoJ3RhYk9yZGVyJywgdGhpcy5fdGFiT3JkZXIpO1xuICAgIHJldHVybiBiYXNlVXJsICsgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZpbHRlciAqL1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gYXBpIGZpbHRlciBhbmQgcHJvdmlkZXMgc3RhdGljIG1ldGhvZHMgZm9yIGVhc2lseSBjb25zdHJ1Y3RpbmcgRmlsdGVycy5cbiAqIFNlZSBodHRwczovL2RldmVsb3Blci55ZXh0LmNvbS9kb2NzL2FwaS1yZWZlcmVuY2UvI29wZXJhdGlvbi9saXN0RW50aXRpZXMgZm9yIHN0cnVjdHVyZSBkZXRhaWxzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlciB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgYSBKU09OIGZvcm1hdCBmaWx0ZXIgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyIGludG8gYSBGaWx0ZXJcbiAgICogQHBhcmFtIHsqfSByZXNwb25zZUZpbHRlciBBIGZpbHRlciBpbiBKU09OIGZvcm1hdCByZXR1cm5lZCBmcm9tIHRoZSBiYWNrZW5kXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZnJvbVJlc3BvbnNlIChyZXNwb25zZUZpbHRlcikge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKEpTT04ucGFyc2UocmVzcG9uc2VGaWx0ZXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBuZXcgRmlsdGVyIHJlcHJlc2VudGluZyB0aGUgT1Igb2YgYWxsIHByb3ZpZGVkIGZpbHRlcnNcbiAgICogQHBhcmFtICB7Li4uRmlsdGVyfSBmaWx0ZXJzIFRoZSBmaWx0ZXJzIHRvIE9SIHRvZ2V0aGVyXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgb3IgKC4uLmZpbHRlcnMpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcih7XG4gICAgICAnJG9yJzogZmlsdGVyc1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIG5ldyBGaWx0ZXIgcmVwcmVzZW50aW5nIHRoZSBBTkQgb2YgYWxsIHByb3ZpZGVkIGZpbHRlcnNcbiAgICogQHBhcmFtICB7Li4uRmlsdGVyfSBmaWx0ZXJzIFRoZSBmaWx0ZXJzIHRvIEFORCB0b2dldGhlclxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGFuZCAoLi4uZmlsdGVycykge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgICckYW5kJzogZmlsdGVyc1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9SIGZpbHRlcnMgd2l0aCB0aGUgc2FtZSBrZXlzLCB0aGVuIEFORCB0aGUgcmVzdWx0aW5nIGdyb3Vwc1xuICAgKiBAcGFyYW0gIHsuLi5GaWx0ZXJ9IGZpbHRlcnMgVGhlIGZpbHRlcnMgdG8gZ3JvdXBcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBncm91cCAoLi4uZmlsdGVycykge1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGZvciAoY29uc3QgZmlsdGVyIG9mIGZpbHRlcnMpIHtcbiAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKGZpbHRlcilbMF07XG4gICAgICBpZiAoIWdyb3Vwc1trZXldKSB7XG4gICAgICAgIGdyb3Vwc1trZXldID0gW107XG4gICAgICB9XG4gICAgICBncm91cHNba2V5XS5wdXNoKGZpbHRlcik7XG4gICAgfVxuXG4gICAgY29uc3QgZ3JvdXBGaWx0ZXJzID0gW107XG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiBPYmplY3Qua2V5cyhncm91cHMpKSB7XG4gICAgICBncm91cEZpbHRlcnMucHVzaChncm91cHNbZmllbGRdLmxlbmd0aCA+IDEgPyBGaWx0ZXIub3IoLi4uZ3JvdXBzW2ZpZWxkXSkgOiBncm91cHNbZmllbGRdWzBdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ3JvdXBGaWx0ZXJzLmxlbmd0aCA+IDEgPyBGaWx0ZXIuYW5kKC4uLmdyb3VwRmlsdGVycykgOiBncm91cEZpbHRlcnNbMF07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwiZXF1YWwgdG9cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBlcXVhbCB0b1xuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGVxdWFsIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRlcScsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJsZXNzIHRoYW5cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBsZXNzIHRoYW5cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBsZXNzVGhhbiAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckbHQnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwibGVzcyB0aGFuIG9yIGVxdWFsIHRvXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgbGVzc1RoYW5FcXVhbCAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckbGUnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwiZ3JlYXRlciB0aGFuXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ3JlYXRlclRoYW4gKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGd0JywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0b1wiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0b1xuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGdyZWF0ZXJUaGFuRXF1YWwgKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGdlJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBpbmNsdXNpdmUgcmFuZ2UgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gbWluIFRoZSBtaW5pbXVtIHZhbHVlIG9mIHRoZSByYW5nZVxuICAgKiBAcGFyYW0geyp9IG1heCBUaGUgbWF4aW11bSB2YWx1ZSBvZiB0aGUgcmFuZ2VyXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgcmFuZ2UgKGZpZWxkLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBGaWx0ZXIuYW5kKEZpbHRlci5ncmVhdGVyVGhhbkVxdWFsKGZpZWxkLCBtaW4pLCBGaWx0ZXIubGVzc1RoYW5FcXVhbChmaWVsZCwgbWF4KSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGZpbHRlciB3aXRoIHRoZSBnaXZlbiBtYXRjaGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRjaGVyIFRoZSBtYXRjaGVyIGZvciB0aGUgZmlsZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgZm9yIHRoZSBmaWx0ZXJcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBfZnJvbU1hdGNoZXIgKGZpZWxkLCBtYXRjaGVyLCB2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgIFtmaWVsZF06IHtcbiAgICAgICAgW21hdGNoZXJdOiB2YWx1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi9kb20vc2VhcmNocGFyYW1zJztcblxuLyoqXG4gKiBTZWFyY2hDb21wb25lbnQgZXhwb3NlcyBhbiBpbnRlcmZhY2UgaW4gb3JkZXIgdG8gY3JlYXRlXG4gKiBhIFVJIFNlYXJjaCBleHBlcmllbmNlIGZvciB2ZXJ0aWNhbCBhbmQgdW5pdmVyc2FsIHNlYXJjaC5cbiAqXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSBuYW1lIHRvIHVzZSBmb3IgcmVuZGVyaW5nIHdpdGggaGFuZGxlYmFyc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3NlYXJjaC9zZWFyY2gnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGlucHV0IGtleSBmb3IgdGhlIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCBhdXRvLWNvbXBsZXRlIGFuZCBzZWFyY2ggd2lsbCBiZSBiYXNlZCBvbiB1bml2ZXJzYWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2JhcktleSA9IGNvbmZpZy5iYXJLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCB2ZXJ0aWNhbCBrZXkgZm9yIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCBhdXRvLWNvbXBsZXRlIGFuZCBzZWFyY2ggd2lsbCBiZSBiYXNlZCBvbiB1bml2ZXJzYWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBRdWVyeSBzdWJtaXNzaW9uIGlzIGJhc2VkIG9uIGEgZm9ybSBhcyBjb250ZXh0LlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBuYXRpdmUgZm9ybSBub2RlIHdpdGhpbiBjb250YWluZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9mb3JtRWwgPSBjb25maWcuZm9ybVNlbGVjdG9yIHx8ICdmb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBlbGVtZW50IHVzZWQgZm9yIHNlYXJjaGluZyBhbmQgd2lyZXMgdXAgdGhlIGtleWJvYXJkIGludGVyYWN0aW9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gY29uZmlnLmlucHV0RWwgfHwgJy5qcy15ZXh0LXF1ZXJ5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB1c2VkLCBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgYXMgYSBkYXRhIHBvaW50XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudGl0bGUgPSBjb25maWcudGl0bGUgfHwgJ0Fuc3dlcnMgVW5pdmVyc2FsIFNlYXJjaCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdGV4dCBpcyB1c2VkIGZvciBsYWJlbGluZyB0aGUgaW5wdXQgYm94LCBhbHNvIHByb3ZpZGVkIHRvIHRlbXBsYXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWxUZXh0ID0gY29uZmlnLmxhYmVsVGV4dCB8fCAnV2hhdCBhcmUgeW91IGludGVyZXN0ZWQgaW4/JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdWJtaXQgdGV4dCBpcyB1c2VkIGZvciBsYWJlbGluZyB0aGUgc3VibWl0IGJ1dHRvbiwgYWxzbyBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnN1Ym1pdFRleHQgPSBjb25maWcuc3VibWl0VGV4dCB8fCAnU3VibWl0JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdWJtaXQgaWNvbiBpcyBhbiBpY29uIGZvciB0aGUgc3VibWl0IGJ1dHRvbiwgaWYgcHJvdmlkZWQgaXQgd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHRoZVxuICAgICAqIHN1Ym1pdCB0ZXh0IHdpbGwgYmUgdXNlZCBmb3Igc2NyZWVuIHJlYWRlcnMuXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMuc3VibWl0SWNvbiA9IGNvbmZpZy5zdWJtaXRJY29uIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgdGV4dCB0byBzaG93IGFzIHRoZSBmaXJzdCBpdGVtIGZvciBhdXRvIGNvbXBsZXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucHJvbXB0SGVhZGVyID0gY29uZmlnLnByb21wdEhlYWRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQXV0byBmb2N1c2VzIHRoZSBpbnB1dCBib3ggaWYgc2V0IHRvIHRydWUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvRm9jdXMgPSBjb25maWcuYXV0b0ZvY3VzID09PSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogc3VibWl0VVJMIHdpbGwgZm9yY2UgdGhlIHNlYXJjaCBxdWVyeSBzdWJtaXNzaW9uIHRvIGdldFxuICAgICAqIHJlZGlyZWN0ZWQgdG8gdGhlIFVSTCBwcm92aWRlZC5cbiAgICAgKiBPcHRpb25hbCwgZGVmYXVsdHMgdG8gbnVsbC5cbiAgICAgKlxuICAgICAqIElmIG5vIHJlZGlyZWN0VXJsIHByb3ZpZGVkLCB3ZSBrZWVwIHRoZSBwYWdlIGFzIGEgc2luZ2xlIHBhZ2UgYXBwLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZWRpcmVjdFVybCA9IGNvbmZpZy5yZWRpcmVjdFVybCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHN0cmluZyB0byB1c2UgZm9yIHRoZSBpbnB1dCBib3gsIHByb3ZpZGVkIHRvIHRlbXBsYXRlIGZvciByZW5kZXJpbmcuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5xdWVyeSA9IGNvbmZpZy5xdWVyeSB8fCB0aGlzLmdldFVybFBhcmFtcygpLmdldCgncXVlcnknKSB8fCAnJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIHRpbWUgYWxsb3dlZCBpbiBtaWxsaXNlY29uZHMgYmV0d2VlbiBzZWFyY2hlcyB0byBwcmV2ZW50XG4gICAgICogbWFueSBkdXBsaWNhdGUgc2VhcmNoZXMgYmFjay10by1iYWNrXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaENvb2xkb3duID0gY29uZmlnLnNlYXJjaENvb2xkb3duIHx8IDMwMDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdTZWFyY2hCYXInO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIGlmICh0aGlzLnF1ZXJ5ICYmIHRoaXMucXVlcnkubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jb3JlLnNldFF1ZXJ5KHRoaXMucXVlcnkpO1xuICAgICAgdGhpcy5zZWFyY2godGhpcy5xdWVyeSk7XG4gICAgfVxuXG4gICAgdGhpcy5iaW5kQnJvd3Nlckhpc3RvcnkoKTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIC8vIFdpcmUgdXAgb3VyIHNlYXJjaCBoYW5kbGluZyBhbmQgYXV0byBjb21wbGV0ZVxuICAgIHRoaXMuaW5pdFNlYXJjaCh0aGlzLl9mb3JtRWwpO1xuICAgIHRoaXMuaW5pdEF1dG9Db21wbGV0ZSh0aGlzLl9pbnB1dEVsKTtcblxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cyA9PT0gdHJ1ZSAmJiB0aGlzLnF1ZXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5faW5wdXRFbCkuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHVzZSBmb3Igd2lyaW5nIHVwIHNlYXJjaGluZyBvbiBmb3JtIHN1Ym1pc3Npb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGZvcm1TZWxlY3RvciBDU1Mgc2VsZWN0b3IgdG8gYmluZCBvdXIgc3VibWl0IGhhbmRsaW5nIHRvXG4gICAqL1xuICBpbml0U2VhcmNoIChmb3JtU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9mb3JtRWwgPSBmb3JtU2VsZWN0b3I7XG5cbiAgICBsZXQgZm9ybSA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIGZvcm1TZWxlY3Rvcik7XG4gICAgaWYgKCFmb3JtKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBpbml0aWFsaXplIFNlYXJjaEJhcjsgQ2FuIG5vdCBmaW5kIHtIVE1MRWxlbWVudH0gYCcsIHRoaXMuX2Zvcm1FbCwgJ2AuJyk7XG4gICAgfVxuXG4gICAgRE9NLm9uKGZvcm0sICdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBsZXQgcXVlcnkgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IodGhpcy5faW5wdXRFbCkudmFsdWU7XG4gICAgICBsZXQgcGFyYW1zID0gdGhpcy5nZXRVcmxQYXJhbXMoKTtcbiAgICAgIHBhcmFtcy5zZXQoJ3F1ZXJ5JywgcXVlcnkpO1xuXG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgcmVkaXJlY3RVcmwsIHdlIHdhbnQgdGhlIGZvcm0gdG8gYmVcbiAgICAgIC8vIHNlcmlhbGl6ZWQgYW5kIHN1Ym1pdHRlZC5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5yZWRpcmVjdFVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLnJlZGlyZWN0VXJsICsgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHtcbiAgICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgICB9LCBxdWVyeSwgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCkpO1xuXG4gICAgICB0aGlzLmNvcmUuc2V0UXVlcnkocXVlcnkpO1xuICAgICAgdGhpcy5zZWFyY2gocXVlcnkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgaGVscGVyIG1ldGhvZCB0byB3aXJlIHVwIG91ciBhdXRvIGNvbXBsZXRlIG9uIGFuIGlucHV0IHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBhdXRvIGNvbXBsZXRlIGNvbXBvbmVudCB0b1xuICAgKi9cbiAgaW5pdEF1dG9Db21wbGV0ZSAoaW5wdXRTZWxlY3Rvcikge1xuICAgIHRoaXMuX2lucHV0RWwgPSBpbnB1dFNlbGVjdG9yO1xuXG4gICAgdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZSgnQXV0b0NvbXBsZXRlJywge1xuICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfS5hdXRvY29tcGxldGVgLFxuICAgICAgY29udGFpbmVyOiAnLnlleHQtc2VhcmNoLWF1dG9jb21wbGV0ZScsXG4gICAgICBiYXJLZXk6IHRoaXMuX2JhcktleSxcbiAgICAgIHZlcnRpY2FsS2V5OiB0aGlzLl92ZXJ0aWNhbEtleSxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5wcm9tcHRIZWFkZXIsXG4gICAgICBvcmlnaW5hbFF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgaW5wdXRFbDogaW5wdXRTZWxlY3RvcixcbiAgICAgIG9uU3VibWl0OiAoKSA9PiB7XG4gICAgICAgIERPTS50cmlnZ2VyKCdmb3JtJywgJ3N1Ym1pdCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoIChxdWVyeSkge1xuICAgIGlmICh0aGlzLl90aHJvdHRsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl90aHJvdHRsZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLl90aHJvdHRsZWQgPSBmYWxzZTsgfSwgdGhpcy5fc2VhcmNoQ29vbGRvd24pO1xuXG4gICAgaWYgKHRoaXMuX3ZlcnRpY2FsS2V5KSB7XG4gICAgICBjb25zdCBhbGxGaWx0ZXJzID0gdGhpcy5jb3JlLnN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgICBjb25zdCB0b3RhbEZpbHRlciA9IGFsbEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgICA/IEZpbHRlci5hbmQoLi4uYWxsRmlsdGVycylcbiAgICAgICAgOiBhbGxGaWx0ZXJzWzBdO1xuICAgICAgcmV0dXJuIHRoaXMuY29yZS52ZXJ0aWNhbFNlYXJjaChxdWVyeSwgdGhpcy5fdmVydGljYWxLZXksIEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5PVEUoYmlsbHkpIFRlbXBvcmFyeSBoYWNrIGZvciBERU1PXG4gICAgICAvLyBSZW1vdmUgbWUgYWZ0ZXIgdGhlIGRlbW9cbiAgICAgIGxldCBuYXYgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXJcbiAgICAgICAgLmdldEFjdGl2ZUNvbXBvbmVudCgnTmF2aWdhdGlvbicpO1xuXG4gICAgICBpZiAobmF2KSB7XG4gICAgICAgIGxldCB0YWJzID0gbmF2LmdldFN0YXRlKCd0YWJzJyk7XG4gICAgICAgIGxldCB1cmxzID0ge307XG5cbiAgICAgICAgaWYgKHRhYnMgJiYgQXJyYXkuaXNBcnJheSh0YWJzKSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHRoaXMuZ2V0VXJsUGFyYW1zKHRhYnNbaV0udXJsLnNwbGl0KCc/JylbMV0pO1xuICAgICAgICAgICAgcGFyYW1zLnNldCgncXVlcnknLCBxdWVyeSk7XG5cbiAgICAgICAgICAgIGxldCB1cmwgPSB0YWJzW2ldLmJhc2VVcmw7XG4gICAgICAgICAgICBpZiAocGFyYW1zLnRvU3RyaW5nKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICB1cmwgKz0gJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cmxzW3RhYnNbaV0uY29uZmlnSWRdID0gdXJsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb3JlLnNlYXJjaChxdWVyeSwgdXJscyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvcmUuc2VhcmNoKHF1ZXJ5KTtcbiAgICB9XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgbGFiZWxUZXh0OiB0aGlzLmxhYmVsVGV4dCxcbiAgICAgIHN1Ym1pdEljb246IHRoaXMuc3VibWl0SWNvbixcbiAgICAgIHN1Ym1pdFRleHQ6IHRoaXMuc3VibWl0VGV4dCxcbiAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5XG4gICAgfSwgZGF0YSkpO1xuICB9XG5cbiAgZ2V0VXJsUGFyYW1zICh1cmwpIHtcbiAgICB1cmwgPSB1cmwgfHwgd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7XG4gICAgcmV0dXJuIG5ldyBTZWFyY2hQYXJhbXModXJsKTtcbiAgfVxuXG4gIGJpbmRCcm93c2VySGlzdG9yeSAoKSB7XG4gICAgRE9NLm9uKHdpbmRvdywgJ3BvcHN0YXRlJywgKCkgPT4ge1xuICAgICAgdGhpcy5xdWVyeSA9IHRoaXMuZ2V0VXJsUGFyYW1zKCkuZ2V0KCdxdWVyeScpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jb3JlLnNldFF1ZXJ5KHRoaXMucXVlcnkpO1xuXG4gICAgICB0aGlzLnNlYXJjaCh0aGlzLnF1ZXJ5KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyU2VhcmNoQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5cbi8qKlxuICogRmlsdGVyU2VhcmNoQ29tcG9uZW50IGlzIHVzZWQgZm9yIGF1dG9jb21wbGV0ZSB1c2luZyB0aGUgRmlsdGVyU2VhcmNoIGJhY2tlbmQuXG4gKiBJdCdsbCBhbGxvdyB5b3UgdG8gcGljayBwcmUtc2V0IGZpbHRlcnMgdGhhdCBhcmUgc2V0dXAgb24gdGhlIGJhY2tlbmQgd2l0aGluXG4gKiBhIHZlcnRpY2FsIHNlYXJjaCBjb250ZXh0LlxuICpcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgbmFtZSB0byB1c2UgZm9yIHJlbmRlcmluZyB3aXRoIGhhbmRsZWJhcnNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdzZWFyY2gvZmlsdGVyc2VhcmNoJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBrZXkgZm9yIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggY29uZmlndXJhdGlvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYmFyS2V5ID0gb3B0cy5iYXJLZXkgfHwgb3B0cy5pbnB1dEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnRpY2FsIGtleSBmb3IgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gb3B0cy52ZXJ0aWNhbEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogUXVlcnkgc3VibWlzc2lvbiBpcyBiYXNlZCBvbiBhIGZvcm0gYXMgY29udGV4dC5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gbmF0aXZlIGZvcm0gbm9kZSB3aXRoaW4gY29udGFpbmVyXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5fZm9ybUVsID0gb3B0cy5mb3JtU2VsZWN0b3IgfHwgJ2Zvcm0nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlucHV0IGVsZW1lbnQgdXNlZCBmb3Igc2VhcmNoaW5nIGFuZCB3aXJlcyB1cCB0aGUga2V5Ym9hcmQgaW50ZXJhY3Rpb25cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2lucHV0RWwgPSBvcHRzLmlucHV0RWwgfHwgJy5qcy15ZXh0LXF1ZXJ5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB1c2VkLCBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgYXMgYSBkYXRhIHBvaW50XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudGl0bGUgPSBvcHRzLnRpdGxlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlYXJjaCB0ZXh0IHVzZWQgZm9yIGxhYmVsaW5nIHRoZSBpbnB1dCBib3gsIGFsc28gcHJvdmlkZWQgdG8gdGVtcGxhdGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gb3B0cy5zZWFyY2hUZXh0IHx8ICdXaGF0IGFyZSB5b3UgaW50ZXJlc3RlZCBpbj8nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHRleHQgdG8gc2hvdyBhcyB0aGUgZmlyc3QgaXRlbSBmb3IgYXV0byBjb21wbGV0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnByb21wdEhlYWRlciA9IG9wdHMucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBdXRvIGZvY3VzZXMgdGhlIGlucHV0IGJveCBpZiBzZXQgdG8gdHJ1ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBkZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9Gb2N1cyA9IG9wdHMuYXV0b0ZvY3VzID09PSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogc3VibWl0VVJMIHdpbGwgZm9yY2UgdGhlIHNlYXJjaCBxdWVyeSBzdWJtaXNzaW9uIHRvIGdldFxuICAgICAqIHJlZGlyZWN0ZWQgdG8gdGhlIFVSTCBwcm92aWRlZC5cbiAgICAgKiBPcHRpb25hbCwgZGVmYXVsdHMgdG8gbnVsbC5cbiAgICAgKlxuICAgICAqIElmIG5vIHJlZGlyZWN0VXJsIHByb3ZpZGVkLCB3ZSBrZWVwIHRoZSBwYWdlIGFzIGEgc2luZ2xlIHBhZ2UgYXBwLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZWRpcmVjdFVybCA9IG9wdHMucmVkaXJlY3RVcmwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSBzdHJpbmcgdG8gdXNlIGZvciB0aGUgaW5wdXQgYm94LCBwcm92aWRlZCB0byB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlcnkgPSBvcHRzLnF1ZXJ5IHx8IHRoaXMuZ2V0VXJsUGFyYW1zKCkuZ2V0KGAke3RoaXMubmFtZX0ucXVlcnlgKSB8fCAnJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaWx0ZXIgc3RyaW5nIHRvIHVzZSBmb3IgdGhlIHByb3ZpZGVkIHF1ZXJ5XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5maWx0ZXIgPSBvcHRzLmZpbHRlciB8fCB0aGlzLmdldFVybFBhcmFtcygpLmdldChgJHt0aGlzLm5hbWV9LmZpbHRlcmApIHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0ZpbHRlclNlYXJjaCc7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgaWYgKHRoaXMucXVlcnkgJiYgdGhpcy5xdWVyeS5sZW5ndGggPiAwICYmIHRoaXMuZmlsdGVyICYmIHRoaXMuZmlsdGVyLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuZ2V0VXJsUGFyYW1zKCk7XG4gICAgICBwYXJhbXMuc2V0KGAke3RoaXMubmFtZX0ucXVlcnlgLCB0aGlzLnF1ZXJ5KTtcbiAgICAgIHBhcmFtcy5zZXQoYCR7dGhpcy5uYW1lfS5maWx0ZXJgLCB0aGlzLmZpbHRlcik7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCAnPycgKyBwYXJhbXMudG9TdHJpbmcoKSk7XG4gICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgRmlsdGVyLmZyb21SZXNwb25zZSh0aGlzLmZpbHRlcikpO1xuICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9XG5cbiAgICB0aGlzLmJpbmRCcm93c2VySGlzdG9yeSgpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgLy8gV2lyZSB1cCBvdXIgc2VhcmNoIGhhbmRsaW5nIGFuZCBhdXRvIGNvbXBsZXRlXG4gICAgdGhpcy5pbml0QXV0b0NvbXBsZXRlKHRoaXMuX2lucHV0RWwpO1xuXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzID09PSB0cnVlICYmIHRoaXMucXVlcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gd2lyZSB1cCBvdXIgYXV0byBjb21wbGV0ZSBvbiBhbiBpbnB1dCBzZWxlY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRTZWxlY3RvciBDU1Mgc2VsZWN0b3IgdG8gYmluZCBvdXIgYXV0byBjb21wbGV0ZSBjb21wb25lbnQgdG9cbiAgICovXG4gIGluaXRBdXRvQ29tcGxldGUgKGlucHV0U2VsZWN0b3IpIHtcbiAgICB0aGlzLl9pbnB1dEVsID0gaW5wdXRTZWxlY3RvcjtcblxuICAgIHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoJ0F1dG9Db21wbGV0ZScsIHtcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0uYXV0b2NvbXBsZXRlYCxcbiAgICAgIGlzRmlsdGVyU2VhcmNoOiB0cnVlLFxuICAgICAgY29udGFpbmVyOiAnLnlleHQtc2VhcmNoLWF1dG9jb21wbGV0ZScsXG4gICAgICBwcm9tcHRIZWFkZXI6IHRoaXMucHJvbXB0SGVhZGVyLFxuICAgICAgb3JpZ2luYWxRdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgIG9yaWdpbmFsRmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgIGlucHV0RWw6IGlucHV0U2VsZWN0b3IsXG4gICAgICB2ZXJ0aWNhbEtleTogdGhpcy5fdmVydGljYWxLZXksXG4gICAgICBiYXJLZXk6IHRoaXMuX2JhcktleSxcbiAgICAgIG9uU3VibWl0OiAocXVlcnksIGZpbHRlcikgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmdldFVybFBhcmFtcygpO1xuICAgICAgICBwYXJhbXMuc2V0KGAke3RoaXMubmFtZX0ucXVlcnlgLCBxdWVyeSk7XG4gICAgICAgIHBhcmFtcy5zZXQoYCR7dGhpcy5uYW1lfS5maWx0ZXJgLCBmaWx0ZXIpO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSByZWRpcmVjdFVybCwgd2Ugd2FudCB0aGUgcGFyYW1zIHRvIGJlXG4gICAgICAgIC8vIHNlcmlhbGl6ZWQgYW5kIHN1Ym1pdHRlZC5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlZGlyZWN0VXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5yZWRpcmVjdFVybCArICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsICc/JyArIHBhcmFtcy50b1N0cmluZygpKTtcblxuICAgICAgICAvLyBzYXZlIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBmb3IgdGhlIG5leHQgc2VhcmNoXG4gICAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBGaWx0ZXIuZnJvbVJlc3BvbnNlKGZpbHRlcikpO1xuICAgICAgICB0aGlzLnNlYXJjaCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gdGhlIHZlcnRpY2FsIHNlYXJjaCB3aXRoIGFsbCBzYXZlZCBmaWx0ZXJzIGFuZCBxdWVyeSxcbiAgICogb3B0aW9uYWxseSByZWRpcmVjdGluZyBiYXNlZCBvbiBjb25maWdcbiAgICovXG4gIHNlYXJjaCAoKSB7XG4gICAgY29uc3QgZmlsdGVycyA9IHRoaXMuY29yZS5zdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GSUxURVIpO1xuICAgIGxldCB0b3RhbEZpbHRlciA9IGZpbHRlcnNbMF07XG4gICAgaWYgKGZpbHRlcnMubGVuZ3RoID4gMSkge1xuICAgICAgdG90YWxGaWx0ZXIgPSBGaWx0ZXIuYW5kKC4uLmZpbHRlcnMpO1xuICAgIH1cbiAgICBjb25zdCBzZWFyY2hRdWVyeSA9IHRoaXMuY29yZS5zdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKSB8fCAnJztcblxuICAgIHRoaXMuY29yZS52ZXJ0aWNhbFNlYXJjaChzZWFyY2hRdWVyeSwgdGhpcy5fdmVydGljYWxLZXksIEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSk7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgc2VhcmNoVGV4dDogdGhpcy5zZWFyY2hUZXh0LFxuICAgICAgcXVlcnk6IHRoaXMucXVlcnksXG4gICAgICBmaWx0ZXI6IHRoaXMuZmlsdGVyXG4gICAgfSwgZGF0YSkpO1xuICB9XG5cbiAgZ2V0VXJsUGFyYW1zICh1cmwpIHtcbiAgICB1cmwgPSB1cmwgfHwgd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7XG4gICAgcmV0dXJuIG5ldyBTZWFyY2hQYXJhbXModXJsKTtcbiAgfVxuXG4gIGJpbmRCcm93c2VySGlzdG9yeSAoKSB7XG4gICAgRE9NLm9uKHdpbmRvdywgJ3BvcHN0YXRlJywgKCkgPT4ge1xuICAgICAgdGhpcy5xdWVyeSA9IHRoaXMuZ2V0VXJsUGFyYW1zKCkuZ2V0KGAke3RoaXMubmFtZX0ucXVlcnlgKTtcbiAgICAgIHRoaXMuZmlsdGVyID0gdGhpcy5nZXRVcmxQYXJhbXMoKS5nZXQoYCR7dGhpcy5uYW1lfS5maWx0ZXJgKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBxdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlclxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX3NhdmVRdWVyeUFuZEZpbHRlcih0aGlzLnF1ZXJ5LCB0aGlzLmZpbHRlcik7XG4gICAgICB0aGlzLnNlYXJjaCgpO1xuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG5jb25zdCBLZXlzID0ge1xuICBCQUNLU1BBQ0U6IDgsXG4gIFRBQjogOSxcbiAgRU5URVI6IDEzLFxuICBTSElGVDogMTYsXG4gIENUUkw6IDE3LFxuICBBTFQ6IDE4LFxuICBFU0NBUEU6IDI3LFxuXG4gIExFRlQ6IDM3LFxuICBSSUdIVDogMzksXG4gIFVQOiAzOCxcblxuICBERUxFVEU6IDQ2LFxuICBET1dOOiA0MCxcbiAgTEVGVF9PU19LRVk6IDkxLFxuICBSSUdIVF9PU19LRVk6IDkyLFxuICBTRUxFQ1RfS0VZOiA5M1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBhdXRvY29tcGxldGUgaXMgc2ltcGxlIG9yIGZpbHRlclxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNGaWx0ZXJTZWFyY2ggPSBvcHRzLmlzRmlsdGVyU2VhcmNoIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGBiYXJLZXlgIGluIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggdG8gdXNlIGZvciBhdXRvLWNvbXBsZXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9iYXJLZXkgPSBvcHRzLmJhcktleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGB2ZXJ0aWNhbEtleWAgb2YgdGhlIHZlcnRpY2FsIHNlYXJjaCB0byB1c2UgZm9yIGF1dG8tY29tcGxldGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gb3B0cy52ZXJ0aWNhbEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGlucHV0IGVsIHNlbGVjdG9yIGZvciBhdXRvIGNvbXBsZXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gb3B0cy5pbnB1dEVsIHx8ICcuanMteWV4dC1xdWVyeSc7XG5cbiAgICAvKipcbiAgICAgKiBBIHNlbGVjdG9yIGZvciB0aGUgYXV0b2NvbXBsZXRlIGVsZW1lbnRlc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYXV0b2NvbXBsZXRlRWxzID0gb3B0cy5hdXRvQ29tcGxldGVFbHMgfHwgJy5qcy15ZXh0LWF1dG9jb21sZXRlLW9wdGlvbic7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgZm9yIHRoZSBkYXRhLXN0b3JhZ2UgdG8gbGlzdGVuIGZvciB1cGRhdGVzIGZyb20gdGhlIHNlcnZlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IGAke1N0b3JhZ2VLZXlzLkFVVE9DT01QTEVURX0uJHt0aGlzLm5hbWV9YDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGhhbmRsZWJhcnMgdGVtcGxhdGUgbmFtZSB0byB1c2UgZm9yIHJlbmRlcmluZ1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3NlYXJjaC9hdXRvY29tcGxldGUnO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBpbnB1dCB2YWx1ZSB3aGVuIHR5cGluZy5cbiAgICAgKiBXZSB1c2UgdGhpcyBmb3IgcmVzZXR0aW5nIHRoZSBzdGF0ZSBvZiB0aGUgaW5wdXQgdmFsdWUgd2hlbiBvdGhlciBpbnRlcmFjdGlvbnMgKGUuZy4gcmVzdWx0IG5hdmlnYXRpb24pXG4gICAgICogY2hhbmdlIGJhc2VkIG9uIGludGVyYWN0aW9ucy4gRm9yIGluc3RhbmNlLCBoaXR0aW5nIGVzY2FwZSBzaG91bGQgcmVzZXQgdGhlIHZhbHVlIHRvIHRoZSBvcmlnaW5hbCB0eXBlZCBxdWVyeS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX29yaWdpbmFsUXVlcnkgPSBvcHRzLm9yaWdpbmFsUXVlcnkgfHwgJyc7XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uIHRocm91Z2ggcmVzdWx0cy5cbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgc2VjdGlvbiB3ZSdyZSBuYXZpZ2F0aW5nIGluLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fc2VjdGlvbkluZGV4ID0gMDtcblxuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIGtleWJvYXJkIG5hdmlnYXRpb24gdGhyb3VnaCByZXN1bHRzLlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCByZXN1bHQgaW5kZXggd2UncmUgbmF2aWdhdGluZyBvbi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gLTE7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgdGV4dCB0byBzaG93IGFzIHRoZSBmaXJzdCBpdGVtIGZvciBhdXRvIGNvbXBsZXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucHJvbXB0SGVhZGVyID0gb3B0cy5wcm9tcHRIZWFkZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGludm9rZWQgd2hlbiB0aGUgYEVudGVyYCBrZXkgaXMgcHJlc3NlZCBvbiBhdXRvIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIHRoaXMuX29uU3VibWl0ID0gb3B0cy5vblN1Ym1pdCB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYWxpYXNlZCB1c2VkIGJ5IHRoZSBjb21wb25lbnQgbWFuYWdlciBmb3IgY3JlYXRpb24uXG4gICAqL1xuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnQXV0b0NvbXBsZXRlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXRTdGF0ZSBpcyBvdmVycmlkZGVuIHNvIHRoYXQgd2UgY2FuIHByb3ZpZGUgYWRkaXRpb25hbCBtZXRhIGRhdGFcbiAgICogdG8gdGhlIHRlbXBsYXRlIChlLmcuIHRoZSBzZWN0aW9uSW5kZXggYW5kIHJlc3VsdEluZGV4KSwgc2luY2VcbiAgICogdGhvc2UgYXJlIGNsaWVudC1pbnRlcmFjdGlvbiBzcGVjaWZpYyB2YWx1ZXMgYW5kIGFyZW4ndCByZXR1cm5lZCBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIHNlY3Rpb25JbmRleDogdGhpcy5fc2VjdGlvbkluZGV4LFxuICAgICAgcmVzdWx0SW5kZXg6IHRoaXMuX3Jlc3VsdEluZGV4LFxuICAgICAgcHJvbXB0SGVhZGVyOiB0aGlzLl9vcmlnaW5hbFF1ZXJ5Lmxlbmd0aCA9PT0gMCA/IHRoaXMucHJvbXB0SGVhZGVyIDogbnVsbFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB1cGRhdGVTdGF0ZSBpcyBhIGhlbHBlciB0byBhcHBseSB0aGUgY3VycmVudCBzdGF0ZSB3aXRoIG5ldyBjbGllbnQtc3RhdGUuXG4gICAqL1xuICB1cGRhdGVTdGF0ZSAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9zdGF0ZS5nZXQoKSk7XG4gIH1cblxuICAvKipcbiAgICogb25DcmVhdGUgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBjb25zdHJ1Y3RlZCBmcm9tIHRoZSBmcmFtZXdvcmsuXG4gICAqIE9uY2Ugd2UncmUgaW5pdGFsaXplZCwgd2Ugd2lyZSB1cCBhbGwgb2Ygb3VyIHVzZXIgaW50ZXJhY3Rpb25zXG4gICAqL1xuICBvbkNyZWF0ZSAoKSB7XG4gICAgLy8gVXNlIHRoZSBjb250ZXh0IG9mIHRoZSBwYXJlbnQgY29tcG9uZW50IHRvIGZpbmQgdGhlIGlucHV0IG5vZGUuXG4gICAgbGV0IHF1ZXJ5SW5wdXQgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Ll9jb250YWluZXIsIHRoaXMuX2lucHV0RWwpO1xuICAgIGlmICghcXVlcnlJbnB1dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgaW5pdGlhbGl6ZSBBdXRvQ29tcGxldGUuIENhbiBub3QgZmluZCB7SFRNTEVsZW1lbnR9IGAnLCB0aGlzLl9pbnB1dEVsLCAnYC4nKTtcbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIHRoZSBuYXRpdmUgYXV0byBjb21wbGV0ZVxuICAgIERPTS5hdHRyKHF1ZXJ5SW5wdXQsICdhdXRvQ29tcGxldGUnLCAnb2ZmJyk7XG5cbiAgICAvLyBUaGUgdXNlciBleGl0cyB0aGUgaW5wdXQsIHNvIHdlIHdhbnQgdG8gcmVzZXQgdGhlIHN0YXRlIGFuZCBjbG9zZVxuICAgIC8vIHRoZSBhdXRvIGNvbXBsZXRlXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdibHVyJywgZSA9PiB7XG4gICAgICAvLyBUT0RPKGpkZWxlcm1lKTogdGVtcG9yYXJ5IGhhY2sgdG8gYWxsb3cgY2xpY2sgaGFuZGxlcnMgdG8gZmlyZS4gQ2xvc2UgbG9naWMgdG8gYmUgbW92ZWQgdG8gcGFyZW50XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2xvc2UoKSwgMTAwKTtcbiAgICB9KTtcblxuICAgIC8vIFdoZW4gYSB1c2VyIGZvY3VzZXMgdGhlIGlucHV0LCB3ZSBzaG91bGQgcG9wdWxhdGUgdGhlIGF1dG9jb21wbGV0ZSBiYXNlZFxuICAgIC8vIG9uIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdmb2N1cycsICgpID0+IHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuYXV0b0NvbXBsZXRlKHF1ZXJ5SW5wdXQudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gbmF2aWdhdGUgYmV0d2VlbiB0aGUgcmVzdWx0cyB1c2luZyB0aGUga2V5Ym9hcmRcbiAgICBET00ub24ocXVlcnlJbnB1dCwgJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVOYXZpZ2F0ZVJlc3VsdHMoZS5rZXlDb2RlLCBlKTtcbiAgICAgIHRoaXMuaGFuZGxlU3VibWl0UmVzdWx0KGUua2V5Q29kZSwgcXVlcnlJbnB1dC52YWx1ZSwgZSk7XG4gICAgfSk7XG5cbiAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBzZWxlY3QgYSByZXN1bHQgd2l0aCB0aGUgbW91c2VcbiAgICBET00uZGVsZWdhdGUodGhpcy5fY29udGFpbmVyLCAnLmpzLXlleHQtYXV0b2NvbXBsZXRlLW9wdGlvbicsICdjbGljaycsIChldnQsIHRhcmdldCkgPT4ge1xuICAgICAgbGV0IGRhdGEgPSB0YXJnZXQuZGF0YXNldDtcbiAgICAgIGxldCB2YWwgPSBkYXRhLnNob3J0O1xuXG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHZhbCk7XG4gICAgICB0aGlzLl9vblN1Ym1pdCh2YWwsIGRhdGEuZmlsdGVyKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIC8vIFdoZW4gdGhlIHVzZXIgaXMgdHlwaW5nIGluIHRoZSBpbnB1dCwgcHJvY2VzcyB0aGUgYXV0byBjb21wbGV0ZS5cbiAgICBET00ub24ocXVlcnlJbnB1dCwgJ2tleXVwJywgKGUpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlVHlwaW5nKGUua2V5Q29kZSwgcXVlcnlJbnB1dC52YWx1ZSwgZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogY2xvc2Ugd2lsbCBoaWRlIHRoZSBhdXRvIGNvbXBsZXRlIHJlc3VsdHMgYW5kIHJlc2V0IHRoZSBzdGF0ZS5cbiAgICovXG4gIGNsb3NlICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt9KTtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICAvKipcbiAgICogcmVzZXRzIHRoZSBjbGllbnQgc3RhdGUgdG8gdGhlaXIgb3JpZ2luYWwgdmFsdWVzIGFuZCB0cmlnZ2Vyc1xuICAgKiBhIHRlbXBsYXRlLXJlcmVuZGVyIHZpYSB1cGRhdGVTdGF0ZVxuICAgKi9cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuX3NlY3Rpb25JbmRleCA9IDA7XG4gICAgdGhpcy5fcmVzdWx0SW5kZXggPSAtMTtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB0byB1cGRhdGUgdGhlIGlucHV0IHRleHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdFZhbHVlIE9wdGlvbiB2YWx1ZSBwcm92aWRlZC5cbiAgICogSWYgbm8gdmFsdWUgcHJvdmlkZWQsIHdlJ2xsIHRyeSB0byBmaW5kIGl0IGJhc2VkIG9uIHRoZSBzZWxlY3Rpb24gaW5kZXhlcy5cbiAgICovXG4gIHVwZGF0ZVF1ZXJ5IChvcHRWYWx1ZSkge1xuICAgIC8vIE9ubHkgd2FudCB0byB1cGRhdGUgdGhlIHF1ZXJ5IHN0cmluZyBpZiB0aGVyZXMgYSB2YWx1ZS5cbiAgICAvLyBJZiBvbmUgaXMgcHJvdmlkZWQsIGdyZWF0LlxuICAgIC8vIE90aGVyd2lzZSwgbGV0cyB0cnkgdG8gZmluZCBpdCBmcm9tIHRoZSBjdXJyZW50IHNlbGVjdGlvbiBpbiB0aGUgcmVzdWx0cy5cbiAgICBpZiAob3B0VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IHNlY3Rpb25zID0gdGhpcy5fc3RhdGUuZ2V0KCdzZWN0aW9ucycpO1xuXG4gICAgICBsZXQgcmVzdWx0cyA9IHNlY3Rpb25zW3RoaXMuX3NlY3Rpb25JbmRleF0ucmVzdWx0cztcbiAgICAgIG9wdFZhbHVlID0gcmVzdWx0c1t0aGlzLl9yZXN1bHRJbmRleF0uc2hvcnRWYWx1ZTtcbiAgICB9XG5cbiAgICBsZXQgcXVlcnlFbCA9IERPTS5xdWVyeSh0aGlzLl9wYXJlbnQuX2NvbnRhaW5lciwgJy5qcy15ZXh0LXF1ZXJ5Jyk7XG4gICAgcXVlcnlFbC52YWx1ZSA9IG9wdFZhbHVlO1xuICB9XG5cbiAgaGFuZGxlVHlwaW5nIChrZXksIHZhbHVlLCBlKSB7XG4gICAgbGV0IGlnbm9yZWRLZXlzID0gW1xuICAgICAgS2V5cy5ET1dOLFxuICAgICAgS2V5cy5VUCxcbiAgICAgIEtleXMuQ1RSTCxcbiAgICAgIEtleXMuQUxULFxuICAgICAgS2V5cy5TSElGVCxcbiAgICAgIEtleXMuTEVGVCxcbiAgICAgIEtleXMuUklHSFQsXG4gICAgICBLZXlzLkxFRlRfT1NfS0VZLFxuICAgICAgS2V5cy5SSUdIVF9PU19LRVksXG4gICAgICBLZXlzLlNFTEVDVF9LRVlcbiAgICBdO1xuXG4gICAgaWYgKGlnbm9yZWRLZXlzLmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVXNlciBlc2NhcGVzIG91dCBvZiBhdXRvIGNvbXBsZXRlLCBzbyB3ZSByZXNldCBpdCB0byB0aGUgb3JpZ2luYWwgaW5wdXRcbiAgICBpZiAoa2V5ID09PSBLZXlzLkVTQ0FQRSkge1xuICAgICAgdGhpcy51cGRhdGVRdWVyeSh0aGlzLl9vcmlnaW5hbFF1ZXJ5KTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUYWJiaW5nIG91dCBvciBlbnRlciBzaG91bGQgY2xvc2UgdGhlIGF1dG8gY29tcGxldGUuXG4gICAgaWYgKGtleSA9PT0gS2V5cy5FTlRFUiB8fCBrZXkgPT09IEtleXMuVEFCKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHRoZSBvcmlnaW5hbCB2YWx1ZSBiYXNlZCBvbiB0aGUgdXNlciBpbnB1dFxuICAgIHRoaXMuX29yaWdpbmFsUXVlcnkgPSB2YWx1ZTtcblxuICAgIHRoaXMucmVzZXQoKTtcbiAgICB0aGlzLmF1dG9Db21wbGV0ZSh2YWx1ZSk7XG4gIH1cblxuICBhdXRvQ29tcGxldGUgKGlucHV0KSB7XG4gICAgaWYgKHRoaXMuaXNGaWx0ZXJTZWFyY2gpIHtcbiAgICAgIHRoaXMuY29yZS5hdXRvQ29tcGxldGVGaWx0ZXIoaW5wdXQsIHRoaXMubmFtZSwgdGhpcy5fdmVydGljYWxLZXksIHRoaXMuX2JhcktleSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl92ZXJ0aWNhbEtleSB8fCB0aGlzLl9iYXJLZXkpIHtcbiAgICAgIHRoaXMuY29yZS5hdXRvQ29tcGxldGVWZXJ0aWNhbChpbnB1dCwgdGhpcy5uYW1lLCB0aGlzLl92ZXJ0aWNhbEtleSwgdGhpcy5fYmFyS2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb3JlLmF1dG9Db21wbGV0ZVVuaXZlcnNhbChpbnB1dCwgdGhpcy5uYW1lKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVOYXZpZ2F0ZVJlc3VsdHMgKGtleSwgZSkge1xuICAgIGxldCBzZWN0aW9ucyA9IHRoaXMuX3N0YXRlLmdldCgnc2VjdGlvbnMnKTtcbiAgICBpZiAoc2VjdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBzZWN0aW9ucy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCByZXN1bHRzID0gc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzO1xuICAgIGlmIChrZXkgPT09IEtleXMuVVApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLl9yZXN1bHRJbmRleCA8PSAwKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPiAwKSB7XG4gICAgICAgICAgdGhpcy5fc2VjdGlvbkluZGV4LS07XG4gICAgICAgICAgdGhpcy5fcmVzdWx0SW5kZXggPSBzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHMubGVuZ3RoIC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHRoaXMuX29yaWdpbmFsUXVlcnkpO1xuICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVzdWx0SW5kZXgtLTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSBLZXlzLkRPV04pIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLl9yZXN1bHRJbmRleCA+PSByZXN1bHRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlY3Rpb25JbmRleCA8IHNlY3Rpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLl9zZWN0aW9uSW5kZXgrKztcbiAgICAgICAgICB0aGlzLl9yZXN1bHRJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVzdWx0SW5kZXgrKztcbiAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTdWJtaXRSZXN1bHQgKGtleSwgdmFsdWUsIGUpIHtcbiAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG4gICAgaWYgKHNlY3Rpb25zID09PSB1bmRlZmluZWQgfHwgc2VjdGlvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBzdWJtaXQgdGhlIHNlYXJjaCBvbiBlbnRlclxuICAgIGlmIChrZXkgPT09IEtleXMuRU5URVIpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxldCBmaWx0ZXIgPSAnJztcbiAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPj0gMCAmJiB0aGlzLl9yZXN1bHRJbmRleCA+PSAwKSB7XG4gICAgICAgIGZpbHRlciA9IEpTT04uc3RyaW5naWZ5KHNlY3Rpb25zW3RoaXMuX3NlY3Rpb25JbmRleF0ucmVzdWx0c1t0aGlzLl9yZXN1bHRJbmRleF0uZmlsdGVyKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGVRdWVyeSh2YWx1ZSk7XG4gICAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gdmFsdWU7XG4gICAgICB0aGlzLl9vblN1Ym1pdCh2YWx1ZSwgZmlsdGVyKTtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZpbHRlck9wdGlvbnNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5cbi8qKlxuICogVGhlIGN1cnJlbnRseSBzdXBwb3J0ZWQgY29udHJvbHNcbiAqIEB0eXBlIHtzdHJpbmdbXX1cbiAqL1xuY29uc3QgU1VQUE9SVEVEX0NPTlRST0xTID0gW1xuICAnc2luZ2xlb3B0aW9uJyxcbiAgJ211bHRpb3B0aW9uJ1xuXTtcblxuLyoqXG4gKiBSZW5kZXJzIGEgc2V0IG9mIG9wdGlvbnMsIGVhY2ggb25lIHJlcHJlc2VudGluZyBhIGZpbHRlciBpbiBhIHNlYXJjaC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyT3B0aW9uc0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICBpZiAoIWNvbmZpZy5jb250cm9sIHx8ICFTVVBQT1JURURfQ09OVFJPTFMuaW5jbHVkZXMoY29uZmlnLmNvbnRyb2wpKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICAnRmlsdGVyT3B0aW9ucyByZXF1aXJlcyBhIHZhbGlkIFwiY29udHJvbFwiIHRvIGJlIHByb3ZpZGVkJyxcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMnKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmZpZy5vcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICAnRmlsdGVyT3B0aW9ucyBjb21wb25lbnQgcmVxdWlyZXMgb3B0aW9ucyB0byBiZSBwcm92aWRlZCcsXG4gICAgICAgICdGaWx0ZXJPcHRpb25zJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGxpc3Qgb2YgZmlsdGVyIG9wdGlvbnMgdG8gZGlzcGxheSB3aXRoIGNoZWNrZWQgc3RhdHVzXG4gICAgICogQHR5cGUge29iamVjdFtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb3B0aW9ucyA9IGNvbmZpZy5vcHRpb25zLm1hcChvID0+IE9iamVjdC5hc3NpZ24oe30sIG8sIHsgY2hlY2tlZDogZmFsc2UgfSkpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgY29udHJvbCB0byBkaXNwbGF5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2NvbnRyb2wgPSBjb25maWcuY29udHJvbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RvciB1c2VkIGZvciBvcHRpb25zIGluIHRoZSB0ZW1wbGF0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vcHRpb25TZWxlY3RvciA9IGNvbmZpZy5vcHRpb25TZWxlY3RvciB8fCAnLmpzLXlleHQtZmlsdGVyLW9wdGlvbic7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzdG9yZXMgdGhlIGZpbHRlciB0byBzdG9yYWdlIG9uIGVhY2ggY2hhbmdlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdG9yZU9uQ2hhbmdlID0gY29uZmlnLnN0b3JlT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNoYW5nZWRcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vbkNoYW5nZSA9IGNvbmZpZy5vbkNoYW5nZSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB0byBiZSB1c2VkIGluIHRoZSBsZWdlbmRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbGFiZWwgPSBjb25maWcubGFiZWwgfHwgJ0ZpbHRlcnMnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlciwgYmFzZWQgb24gdGhlIGNvbnRyb2xcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gYGNvbnRyb2xzLyR7Y29uZmlnLmNvbnRyb2x9YDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdGaWx0ZXJPcHRpb25zJztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgb3B0aW9uczogdGhpcy5fb3B0aW9ucyxcbiAgICAgIGxhYmVsOiB0aGlzLl9sYWJlbFxuICAgIH0pKTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIERPTS5kZWxlZ2F0ZSh0aGlzLl9jb250YWluZXIsIHRoaXMuX29wdGlvblNlbGVjdG9yLCAnY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3VwZGF0ZU9wdGlvbihwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC5pbmRleCksIGV2ZW50LnRhcmdldC5jaGVja2VkKTtcblxuICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgICAgIGlmICh0aGlzLl9zdG9yZU9uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBmaWx0ZXIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9vbkNoYW5nZShmaWx0ZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgX3VwZGF0ZU9wdGlvbiAoaW5kZXgsIGNoZWNrZWQpIHtcbiAgICBpZiAodGhpcy5fY29udHJvbCA9PT0gJ3NpbmdsZW9wdGlvbicpIHtcbiAgICAgIHRoaXMuX29wdGlvbnMgPSB0aGlzLl9vcHRpb25zLm1hcChvID0+IE9iamVjdC5hc3NpZ24oe30sIG8sIHsgY2hlY2tlZDogZmFsc2UgfSkpO1xuICAgIH1cblxuICAgIHRoaXMuX29wdGlvbnNbaW5kZXhdID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fb3B0aW9uc1tpbmRleF0sIHsgY2hlY2tlZCB9KTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIG9wdGlvbnNcbiAgICovXG4gIGNsZWFyICgpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IERPTS5xdWVyeUFsbCh0aGlzLl9jb250YWluZXIsIHRoaXMuX29wdGlvblNlbGVjdG9yKTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGUgPT4gZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnZmFsc2UnKSk7XG4gICAgdGhpcy5fYXBwbHlGaWx0ZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCBhbmQgcmV0dXJuIHRoZSBGaWx0ZXIgdGhhdCByZXByZXNlbnRzIHRoZSBjdXJyZW50IHN0YXRlXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYnVpbGRGaWx0ZXIgKCkge1xuICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLl9vcHRpb25zXG4gICAgICAuZmlsdGVyKG8gPT4gby5jaGVja2VkKVxuICAgICAgLm1hcChvID0+IEZpbHRlci5lcXVhbChvLmZpZWxkLCBvLnZhbHVlKSk7XG5cbiAgICByZXR1cm4gZmlsdGVycy5sZW5ndGggPiAwXG4gICAgICA/IEZpbHRlci5ncm91cCguLi5maWx0ZXJzKVxuICAgICAgOiB7fTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyQm94Q29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5cbi8qKlxuICogUmVuZGVycyBhIHNldCBvZiBmaWx0ZXJzLCBhbmQgc2VhcmNoZXMgd2l0aCB0aGVtIHdoZW4gYXBwbGllZC5cbiAqIE11bHRpcGxlIEZpbHRlckJveCBjb21wb25lbnRzIHdpbGwgQU5EIHRvZ2V0aGVyIGJ1dCB3aWxsIG5vdCBzaGFyZSBzdGF0ZS5cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJCb3hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgaWYgKCFjb25maWcuZmlsdGVycyB8fCAhKGNvbmZpZy5maWx0ZXJzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICAnRmlsdGVyQm94IHJlcXVpcmVzIGZpbHRlcnMgdG8gYmUgcHJvdmlkZWQgYXMgYW4gYXJyYXknLFxuICAgICAgICAnRmlsdGVyQm94Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGxpc3Qgb2YgZmlsdGVycyB0byBkaXNwbGF5IGFuZCBjb250cm9sXG4gICAgICogQHR5cGUge29iamVjdFtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVyQ29uZmlncyA9IGNvbmZpZy5maWx0ZXJzO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIHNlYXJjaFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IGNvbmZpZy52ZXJ0aWNhbEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdHJpZ2dlciBhIHNlYXJjaCBvbiBlYWNoIGNoYW5nZSB0byBhIGZpbHRlclxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc2VhcmNoT25DaGFuZ2UgPSBjb25maWcuc2VhcmNoT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0b3Igb2YgdGhlIGFwcGx5IGJ1dHRvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcHBseUJ1dHRvblNlbGVjdG9yID0gY29uZmlnLmFwcGx5QnV0dG9uU2VsZWN0b3IgfHwgJy5qcy15ZXh0LWZpbHRlcmJveC1hcHBseSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9uZW50cyBjcmVhdGVkIGZvciBlYWNoIGZpbHRlciBjb25maWdcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50W119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWx0ZXJDb21wb25lbnRzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZmlsdGVyIGNvbXBvbmVudHMgaW4gdGhlIGJveFxuICAgICAqIEB0eXBlIHtGaWx0ZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWx0ZXJzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IGBmaWx0ZXJzL2ZpbHRlcmJveGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRmlsdGVyQm94JztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICBmaWx0ZXJDb25maWdzOiB0aGlzLl9maWx0ZXJDb25maWdzLFxuICAgICAgc2hvd0FwcGx5QnV0dG9uOiAhdGhpcy5fc2VhcmNoT25DaGFuZ2VcbiAgICB9KSk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICAvLyBJbml0aWFsaXplIGZpbHRlcnMgZnJvbSBjb25maWdzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9maWx0ZXJDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLl9maWx0ZXJDb25maWdzW2ldO1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZShjb25maWcudHlwZSwgT2JqZWN0LmFzc2lnbih7fSxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICB7XG4gICAgICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0uZmlsdGVyJHtpfWAsXG4gICAgICAgICAgc3RvcmVPbkNoYW5nZTogZmFsc2UsXG4gICAgICAgICAgY29udGFpbmVyOiBgLmpzLXlleHQtZmlsdGVyYm94LWZpbHRlciR7aX1gLFxuICAgICAgICAgIG9uQ2hhbmdlOiAoZikgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkZpbHRlckNoYW5nZShpLCBmKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgIGNvbXBvbmVudC5tb3VudCgpO1xuICAgICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBhcHBseSBidXR0b25cbiAgICBpZiAoIXRoaXMuX3NlYXJjaE9uQ2hhbmdlKSB7XG4gICAgICBjb25zdCBidXR0b24gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9hcHBseUJ1dHRvblNlbGVjdG9yKTtcbiAgICAgIERPTS5vbihidXR0b24sICdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5fc2F2ZUZpbHRlcnNUb1N0b3JhZ2UoKTtcbiAgICAgICAgdGhpcy5fc2VhcmNoKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGNoYW5nZXMgdG8gY2hpbGQgZmlsdGVyIGNvbXBvbmVudHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgY2hhbmdlZCBmaWx0ZXJcbiAgICogQHBhcmFtIHtGaWx0ZXJ9IGZpbHRlciBUaGUgbmV3IGZpbHRlclxuICAgKi9cbiAgb25GaWx0ZXJDaGFuZ2UgKGluZGV4LCBmaWx0ZXIpIHtcbiAgICB0aGlzLl9maWx0ZXJzW2luZGV4XSA9IGZpbHRlcjtcbiAgICBpZiAodGhpcy5fc2VhcmNoT25DaGFuZ2UpIHtcbiAgICAgIHRoaXMuX3NhdmVGaWx0ZXJzVG9TdG9yYWdlKCk7XG4gICAgICB0aGlzLl9zZWFyY2goKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSBjdXJyZW50IGZpbHRlcnMgdG8gc3RvcmFnZSB0byBiZSB1c2VkIGluIHRoZSBuZXh0IHNlYXJjaFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NhdmVGaWx0ZXJzVG9TdG9yYWdlICgpIHtcbiAgICBjb25zdCB2YWxpZEZpbHRlcnMgPSB0aGlzLl9maWx0ZXJzLmZpbHRlcihmID0+IGYgIT09IHVuZGVmaW5lZCAmJiBmICE9PSBudWxsKTtcbiAgICBjb25zdCBjb21iaW5lZEZpbHRlciA9IHZhbGlkRmlsdGVycy5sZW5ndGggPiAxXG4gICAgICA/IEZpbHRlci5hbmQoLi4udmFsaWRGaWx0ZXJzKVxuICAgICAgOiB2YWxpZEZpbHRlcnNbMF07XG4gICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGNvbWJpbmVkRmlsdGVyIHx8IHt9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGEgc2VhcmNoIHdpdGggYWxsIGZpbHRlcnMgaW4gc3RvcmFnZVxuICAgKi9cbiAgX3NlYXJjaCAoKSB7XG4gICAgY29uc3QgYWxsRmlsdGVycyA9IHRoaXMuY29yZS5zdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GSUxURVIpO1xuICAgIGNvbnN0IHRvdGFsRmlsdGVyID0gYWxsRmlsdGVycy5sZW5ndGggPiAxXG4gICAgICA/IEZpbHRlci5hbmQoLi4uYWxsRmlsdGVycylcbiAgICAgIDogYWxsRmlsdGVyc1swXTtcblxuICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5jb3JlLnN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpIHx8ICcnO1xuXG4gICAgdGhpcy5jb3JlLnZlcnRpY2FsU2VhcmNoKHF1ZXJ5LCB0aGlzLl92ZXJ0aWNhbEtleSwgSlNPTi5zdHJpbmdpZnkodG90YWxGaWx0ZXIpKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRGlyZWN0QW5zd2VyQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RBbnN3ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuRElSRUNUX0FOU1dFUjtcbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncmVzdWx0cy9kaXJlY3RhbnN3ZXInO1xuICB9XG5cbiAgYmVmb3JlTW91bnQgKCkge1xuICAgIGlmICghdGhpcy5oYXNTdGF0ZSgnYW5zd2VyJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdEaXJlY3RBbnN3ZXInO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBSZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3Jlc3VsdHMvcmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1Jlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50ICovXG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNJdGVtQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3Jlc3VsdHMvbG9jYXRpb25yZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBSZXN1bHRzSXRlbUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdyZXN1bHRzL2V2ZW50cmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0V2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50ICovXG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBSZXN1bHRzSXRlbUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdyZXN1bHRzL3Blb3BsZXJlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTWFwUHJvdmlkZXIgKi9cblxuLyoqXG4gKiBBIE1hcFByb3ZpZGVyIGlzIGFuIGludGVyZmFjZSB0aGF0IHJlcHJlc2VudHMgdGhhdCBzaG91bGQgYmUgaW1wbGVtZW50ZWRcbiAqIGluIG9yZGVyIHRvIGludGVncmF0ZSB3aXRoIGEgVGhpcmQgUGFydHkgTWFwIHByb3ZpZGVyIGZvciBib3RoXG4gKiBzdGF0aWMgYW5kIGludGVyYWN0aXZlIG1hcHMuIE1hcFByb3ZpZGVycyBhcmUgdXNlZCBieSB0aGUgTWFwQ29tcG9uZW50LlxuICpcbiAqIEltcGxlbWVudGF0aW9ucyBzaG91bGQgZXh0ZW5kIHRoaXMgaW50ZXJmYWNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBUaGUgQVBJIEtleSB1c2VkIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBtYXAgcHJvdmlkZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2FwaUtleSA9IG9wdHMuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgbWFwIHRvIGFwcGVuZCB0byB0aGUgRE9NLCBkZWZhdWx0cyB0byAxMDAlXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9oZWlnaHQgPSBvcHRzLmhlaWdodCB8fCAyMDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgdGhlIG1hcCB0byBhcHBlbmQgdG8gdGhlIERPTSwgZGVmYXVsdHMgdG8gMTAwJVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fd2lkdGggPSBvcHRzLndpZHRoIHx8IDYwMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB6b29tIGxldmVsIG9mIHRoZSBtYXAsIGRlZmF1bHRzIHRvIDlcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3pvb20gPSBvcHRzLnpvb20gfHwgOTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSB1bmRlcmx5aW5nIG1hcCBpbnN0YW5jZSwgY3JlYXRlZCBieSB0aGUgZXh0ZXJuYWwgbGliLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fbWFwID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRlbXBvcmFyeSBib29sZWFuIHRyYWNraW5nIHdoZXRoZXIgb3Igbm90IHRoZSBleHRlcm5hbCBKUyBsaWJyYXJ5IGlzIGxvYWRlZCAoc2VlIFRPRE8gYmVsb3cpXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5faXNMb2FkZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGludm9rZSBvbmNlIHRoZSBKYXZhc2NyaXB0IGlzIGxvYWRlZFxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLl9vbkxvYWRlZCA9IG9wdHMub25Mb2FkZWQgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VzdG9tIGNvbmZpZ3VyYXRpb24gb3ZlcnJpZGUgdG8gdXNlIGZvciB0aGUgbWFwIG1hcmtlcnNcbiAgICAgKiBAdHlwZSB7T2JqZWN0fEZ1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMuX3BpbkNvbmZpZyA9IHR5cGVvZiBvcHRzLnBpbiA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMucGluIDogT2JqZWN0LmFzc2lnbihNYXBQcm92aWRlci5ERUZBVUxUX1BJTl9DT05GSUcsIG9wdHMucGluKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBjb25maWd1cmF0aW9uIHRvIHVzZSBmb3IgdGhlIG1hcCBtYXJrZXJzXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqIFRPRE8oYmlsbHkpIENyZWF0ZSBhIGNvbmZpZ3VyYXRpb24gbW9kZWxcbiAgICovXG4gIHN0YXRpYyBnZXQgREVGQVVMVF9QSU5fQ09ORklHICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWNvbjoge1xuICAgICAgICBhbmNob3I6IG51bGwsIC8vIGUuZy4geyB4OiAxLCB5OiAxIH1cbiAgICAgICAgc3ZnOiBudWxsLFxuICAgICAgICB1cmw6IG51bGwsXG4gICAgICAgIHNjYWxlZFNpemU6IG51bGwgLy8gZS5nLiB7IHc6IDIwLCBoOiAyMCB9XG4gICAgICB9LFxuICAgICAgbGFiZWxUeXBlOiAnbnVtZXJpYydcbiAgICB9O1xuICB9XG5cbiAgb25Mb2FkZWQgKGNiKSB7XG4gICAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX29uTG9hZGVkID0gY2I7XG4gICAgaWYgKHRoaXMuaXNMb2FkZWQoKSkge1xuICAgICAgdGhpcy5fb25Mb2FkZWQoKTtcbiAgICB9XG4gIH1cblxuICBpc0xvYWRlZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzTG9hZGVkO1xuICB9XG5cbiAgbG9hZEpTICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaW1wbGVtZW50ZWQgTWV0aG9kOiBsb2FkSlMnKTtcbiAgfVxuXG4gIGxvYWRTdGF0aWMgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCBNZXRob2Q6IGxvYWRTdGF0aWMnKTtcbiAgfVxuXG4gIGluaXQgKG1hcERhdGEpIHtcbiAgICAvLyBUT0RPKGJpbGx5KSBUaGlzIHNob3VsZCBiZSBiYXNlZCBvZmYgYSBwcm9taXNlIHRoYXQgZ2V0cyBjcmVhdGVkIGZyb20gbG9hZEpTXG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmltcGxlbWVudGVkIE1ldGhvZDogaW5pdCcpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBHb29nbGVNYXBQcm92aWRlciAqL1xuXG5pbXBvcnQgTWFwUHJvdmlkZXIgZnJvbSAnLi9tYXBwcm92aWRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uLy4uL2RvbS9kb20nO1xuXG4vKiBnbG9iYWwgZ29vZ2xlICovXG5cbi8qKlxuICogR29vZ2xlTWFwUHJvdmlkZXIgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgYSBNYXBQcm92aWRlclxuICogdGhhdCBoYW5kbGVzIHRoZSBpbnRlZ3JhdGlvbiB3aXRoIHRoZSB0aGlyZCBwYXJ0eSBBUEkgdG8gZXhwb3NlIG1hcHMuXG4gKiBAZXh0ZW5kcyBNYXBQcm92aWRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb29nbGVNYXBQcm92aWRlciBleHRlbmRzIE1hcFByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMuX2NsaWVudElkID0gb3B0cy5jbGllbnRJZDtcbiAgICB0aGlzLl9zaWduYXR1cmUgPSBvcHRzLnNpZ25hdHVyZTtcblxuICAgIGlmICghdGhpcy5oYXNWYWxpZENsaWVudENyZWRlbnRpYWxzKCkgJiYgIXRoaXMuX2FwaUtleSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdHb29nbGVNYXBzUHJvdmlkZXI6IE1pc3NpbmcgYGFwaUtleWAgb3Ige2BjbGllbnRJZGAsIGBzaWduYXR1cmVgfScpO1xuICAgIH1cbiAgfVxuXG4gIGxvYWRKUyAob25Mb2FkKSB7XG4gICAgaWYgKERPTS5xdWVyeSgnI3lleHQtbWFwLWpzJykpIHtcbiAgICAgIGlmICh0eXBlb2Ygb25Mb2FkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9uTG9hZCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBzY3JpcHQgPSBET00uY3JlYXRlRWwoJ3NjcmlwdCcsIHtcbiAgICAgIGlkOiAneWV4dC1tYXAtanMnLFxuICAgICAgb25sb2FkOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fb25Mb2FkZWQoKTtcbiAgICAgIH0sXG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIHNyYzogYC8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz8ke3RoaXMuZ2VuZXJhdGVDcmVkZW50aWFscygpfWBcbiAgICB9KTtcblxuICAgIERPTS5hcHBlbmQoJ2JvZHknLCBzY3JpcHQpO1xuICB9XG5cbiAgZ2VuZXJhdGVTdGF0aWMgKG1hcERhdGEpIHtcbiAgICBsZXQgZ29vZ2xlTWFwTWFya2VyQ29uZmlncyA9IEdvb2dsZU1hcE1hcmtlckNvbmZpZy5mcm9tKFxuICAgICAgbWFwRGF0YS5tYXBNYXJrZXJzLFxuICAgICAgdGhpcy5fcGluQ29uZmlnXG4gICAgKTtcblxuICAgIGxldCBlbmNvZGVkTWFya2VycyA9IEdvb2dsZU1hcE1hcmtlckNvbmZpZy5zZXJpYWxpemUoZ29vZ2xlTWFwTWFya2VyQ29uZmlncyk7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxpbWcgc3JjPVwiLy9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3N0YXRpY21hcD8ke2VuY29kZWRNYXJrZXJzfSZzaXplPSR7dGhpcy5fd2lkdGh9eCR7dGhpcy5faGVpZ2h0fSYke3RoaXMuZ2VuZXJhdGVDcmVkZW50aWFscygpfVwiPmA7XG4gIH1cblxuICBnZW5lcmF0ZUNyZWRlbnRpYWxzICgpIHtcbiAgICBpZiAodGhpcy5oYXNWYWxpZENsaWVudENyZWRlbnRpYWxzKCkpIHtcbiAgICAgIHJldHVybiBgY2xpZW50PSR7dGhpcy5fY2xpZW50SWR9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGBrZXk9JHt0aGlzLl9hcGlLZXl9YDtcbiAgICB9XG4gIH1cblxuICBoYXNWYWxpZENsaWVudENyZWRlbnRpYWxzICgpIHtcbiAgICAvLyBTaWduYXR1cmUgaXMgb25seSByZXF1aXJlZCBpZiBtYXAgaXMgc3RhdGljXG4gICAgcmV0dXJuIHRoaXMuX2NsaWVudElkICYmICh0aGlzLl9zaWduYXR1cmUgfHwgIXRoaXMuX2lzU3RhdGljKTtcbiAgfVxuXG4gIGluaXQgKGVsLCBtYXBEYXRhKSB7XG4gICAgaWYgKCFtYXBEYXRhIHx8IG1hcERhdGEubWFwTWFya2Vycy5sZW5ndGggPD0gMCkge1xuICAgICAgdGhpcy5fbWFwID0gbnVsbDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIE5PVEUoYmlsbHkpIFRoaXMgdGltZW91dCBpcyBhIGhhY2sgZm9yIGRlYWxpbmcgd2l0aCBhc3luYyBuYXR1cmUuXG4gICAgLy8gT25seSBoZXJlIGZvciBkZW1vIHB1cnBvc2VzLCBzbyB3ZSdsbCBmaXggbGF0ZXIuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgY29udGFpbmVyID0gRE9NLnF1ZXJ5KGVsKTtcbiAgICAgIERPTS5jc3MoY29udGFpbmVyLCB7XG4gICAgICAgIHdpZHRoOiB0aGlzLl93aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLl9oZWlnaHRcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoY29udGFpbmVyLCB7XG4gICAgICAgIHpvb206IHRoaXMuX3pvb21cbiAgICAgIH0pO1xuXG4gICAgICAvLyBBcHBseSBvdXIgc2VhcmNoIGRhdGEgdG8gb3VyIEdvb2dsZU1hcFxuICAgICAgbGV0IGJvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoKTtcbiAgICAgIGxldCBnb29nbGVNYXBNYXJrZXJDb25maWdzID0gR29vZ2xlTWFwTWFya2VyQ29uZmlnLmZyb20oXG4gICAgICAgIG1hcERhdGEubWFwTWFya2VycyxcbiAgICAgICAgdGhpcy5fcGluQ29uZmlnLFxuICAgICAgICB0aGlzLm1hcCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ29vZ2xlTWFwTWFya2VyQ29uZmlncy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcihnb29nbGVNYXBNYXJrZXJDb25maWdzW2ldKTtcbiAgICAgICAgYm91bmRzLmV4dGVuZChtYXJrZXIucG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm1hcC5maXRCb3VuZHMoYm91bmRzKTtcbiAgICB9LCAxMDApO1xuICB9XG59XG5cbi8vIFRPRE8oYmlsbHkpIE1vdmUgdG8gb3duIGNsYXNzXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwTWFya2VyQ29uZmlnIHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgZ29vZ2xlIG1hcCwgdGhhdCB0aGUgbWFya2VyIGlzIGFwcGVuZGVkIHRvXG4gICAgICogQHR5cGUge0dvb2dsZU1hcH1cbiAgICAgKi9cbiAgICB0aGlzLm1hcCA9IG9wdHMubWFwIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb29yZGluYXRlcyBvZiB0aGUgbWFya2VyIChsYXQvbG5nKVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5wb3NpdGlvbiA9IG9wdHMucG9zaXRpb24gfHwge1xuICAgICAgbGF0OiB1bmRlZmluZWQsXG4gICAgICBsbmc6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcHJvcGVydGllcy9zZXR0aW5ncyBvZiB0aGUgaWNvbiB1c2VkIGZvciB0aGUgbWFya2VyXG4gICAgICogZS5nLiB7XG4gICAgICogICAgICAgIGFuY2hvcjogeyB4OiAwLCB5OiAwIH1cbiAgICAgKiAgICAgICAgdXJsOiAncGF0aC90by91cmwuanBnJ1xuICAgICAqICAgICAgICBzY2FsZWRTaXplOiB7IHc6IDAsIGg6IDAgfVxuICAgICAqICAgICAgIH1cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5pY29uID0gb3B0cy5pY29uIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCBvZiB0aGUgbWFya2VyIHRvIHVzZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbCA9IG9wdHMubGFiZWwgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYW4gYXJyYXkgb2YgbWFya2VyIGNvbmZpZ3NcbiAgICogQHBhcmFtIHtHb29nbGVNYXBNYXJrZXJDb25maWdbXX0gZ29vZ2xlTWFwTWFya2VyQ29uZmlnc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplIChnb29nbGVNYXBNYXJrZXJDb25maWdzKSB7XG4gICAgbGV0IHNlcmlhbGl6ZWRNYXJrZXJzID0gW107XG4gICAgZ29vZ2xlTWFwTWFya2VyQ29uZmlncy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIHNlcmlhbGl6ZWRNYXJrZXJzLnB1c2goYG1hcmtlcnM9bGFiZWw6JHttYXJrZXIubGFiZWx9fCR7bWFya2VyLnBvc2l0aW9uLmxhdH0sJHttYXJrZXIucG9zaXRpb24ubG5nfWApO1xuICAgIH0pO1xuICAgIHJldHVybiBzZXJpYWxpemVkTWFya2Vycy5qb2luKCcmJyk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIHN0b3JhZ2UgZGF0YSBtb2RlbCBvZiBtYXJrZXJzIGludG8gR29vZ2xlQVBJTWFya2VyXG4gICAqIEBwYXJhbSB7R29vZ2xlTWFwfSBBIHJlZmVyZW5jZSB0byB0aGUgZ29vZ2xlIG1hcCB0byBhcHBseSB0aGUgbWFya2VyIHRvXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IG1hcmtlcnMgVGhlIGRhdGEgb2YgdGhlIG1hcmtlclxuICAgKiBAcGFyYW0ge09iamVjdH0gcGluQ29uZmlnIFRoZSBjb25maWd1cmF0aW9uIHRvIGFwcGx5IHRvIHRoZSBtYXJrZXJcbiAgICogQHJldHVybnMge0dvb2dsZU1hcE1hcmtlckNvbmZpZ1tdfVxuICAgKi9cbiAgc3RhdGljIGZyb20gKG1hcmtlcnMsIHBpbkNvbmZpZywgbWFwKSB7XG4gICAgbGV0IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MgPSBbXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobWFya2VycykpIHtcbiAgICAgIG1hcmtlcnMgPSBbbWFya2Vyc107XG4gICAgfVxuXG4gICAgbWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIC8vIFN1cHBvcnQgY29uZmlndXJhdGlvbiBhcyBhIGZ1bmN0aW9uXG4gICAgICBsZXQgcGluQ29uZmlnT2JqID0gcGluQ29uZmlnO1xuICAgICAgaWYgKHR5cGVvZiBwaW5Db25maWcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcGluQ29uZmlnT2JqID0gcGluQ29uZmlnKFxuICAgICAgICAgIG1hcmtlci5pdGVtLFxuICAgICAgICAgIE1hcFByb3ZpZGVyLkRFRkFVTFRfUElOX0NPTkZJRyxcbiAgICAgICAgICBtYXJrZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyBUcmFuc2Zvcm0gb3VyIENvbmZpZ3VyYXRpb24gT2JqZWN0IGludG8gdGhlIGV4cGVjdGVkXG4gICAgICAvLyBHb29nbGUgQVBJIGZvcm1hdC5cbiAgICAgIGxldCBpY29uID0ge307XG4gICAgICBpZiAocGluQ29uZmlnT2JqLmFuY2hvcikge1xuICAgICAgICBpY29uLmFuY2hvciA9IGdvb2dsZS5tYXBzLlBvaW50KHBpbkNvbmZpZ09iai5hbmNob3IueCwgcGluQ29uZmlnT2JqLmFuY2hvci55KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpbkNvbmZpZ09iai5zY2FsZWRTaXplKSB7XG4gICAgICAgIGljb24uc2NhbGVkU2l6ZSA9IGdvb2dsZS5tYXBzLlNpemUocGluQ29uZmlnT2JqLnNjYWxlZFNpemUudywgcGluQ29uZmlnT2JqLnNjYWxlZFNpemUuaCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW5Db25maWdPYmoudXJsKSB7XG4gICAgICAgIGljb24udXJsID0gcGluQ29uZmlnT2JqLnVybDtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpbkNvbmZpZ09iai5zdmcpIHtcbiAgICAgICAgaWNvbi51cmwgPSBgZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsICR7ZW5jb2RlVVJJQ29tcG9uZW50KHBpbkNvbmZpZ09iai5zdmcpfWA7XG4gICAgICB9XG5cbiAgICAgIGxldCBsYWJlbDtcbiAgICAgIGlmIChwaW5Db25maWdPYmoubGFiZWwpIHtcbiAgICAgICAgbGFiZWwgPSBwaW5Db25maWdPYmoubGFiZWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYWJlbCA9IG1hcmtlci5sYWJlbC50b1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICAvLyBOT1RFKGJpbGx5KSBHb29nbGUgbWFwcyBkb2Vzbid0IGhhbmRsZSBlbXB0eSBpY29uIG9iamVjdHMgbmljZWx5XG4gICAgICAvLyBNYWtlIGdvb2dsZSBtYXBzIGhhcHB5IGlmIG5vIHNldHRpbmdzIGZvciBpY29uIGFyZSBwcm92aWRlZDtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhpY29uKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWNvbiA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgZ29vZ2xlTWFwTWFya2VyQ29uZmlncy5wdXNoKFxuICAgICAgICBuZXcgR29vZ2xlTWFwTWFya2VyQ29uZmlnKHtcbiAgICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgbGF0OiBtYXJrZXIubGF0aXR1ZGUsXG4gICAgICAgICAgICBsbmc6IG1hcmtlci5sb25naXR1ZGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGljb246IGljb24sXG4gICAgICAgICAgbGFiZWw6IGxhYmVsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGdvb2dsZU1hcE1hcmtlckNvbmZpZ3M7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE1hcEJveE1hcFByb3ZpZGVyICovXG5cbmltcG9ydCBNYXBQcm92aWRlciBmcm9tICcuL21hcHByb3ZpZGVyJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vLi4vZG9tL2RvbSc7XG5cbi8qIGdsb2JhbCBtYXBib3hnbCAqL1xuXG4vKipcbiAqIE1hcEJveE1hcFByb3ZpZGVyIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIGEgTWFwUHJvdmlkZXJcbiAqIHRoYXQgaGFuZGxlcyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgdGhpcmQgcGFydHkgQVBJIHRvIGV4cG9zZSBtYXBzLlxuICogQGV4dGVuZHMgTWFwUHJvdmlkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwQm94TWFwUHJvdmlkZXIgZXh0ZW5kcyBNYXBQcm92aWRlciB7XG4gIC8qKlxuICAgKiBMb2FkIHRoZSBleHRlcm5hbCBKUyBMaWJyYXJ5XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uTG9hZCBBbiBvcHRpb25hbCBjYWxsYmFjayB0byBpbnZva2Ugb25jZSB0aGUgSlMgaXMgbG9hZGVkLlxuICAgKi9cbiAgbG9hZEpTIChvbkxvYWQpIHtcbiAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWpzJyxcbiAgICAgIG9ubG9hZDogKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIG1hcGJveGdsLmFjY2Vzc1Rva2VuID0gdGhpcy5fYXBpS2V5O1xuXG4gICAgICAgIG9uTG9hZCgpO1xuICAgICAgfSxcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgc3JjOiAnaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9tYXBib3gtZ2wtanMvdjAuNDQuMS9tYXBib3gtZ2wuanMnXG4gICAgfSk7XG5cbiAgICBsZXQgY3NzID0gRE9NLmNyZWF0ZUVsKCdsaW5rJywge1xuICAgICAgaWQ6ICd5ZXh0LW1hcC1jc3MnLFxuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOiAnaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9tYXBib3gtZ2wtanMvdjAuNDQuMS9tYXBib3gtZ2wuY3NzJ1xuICAgIH0pO1xuXG4gICAgRE9NLmFwcGVuZCgnYm9keScsIGNzcyk7XG4gICAgRE9NLmFwcGVuZCgnYm9keScsIHNjcmlwdCk7XG4gIH1cblxuICBnZW5lcmF0ZVN0YXRpYyAobWFwRGF0YSkge1xuICAgIGxldCBtYXBib3hNYXBNYXJrZXJDb25maWdzID0gTWFwQm94TWFya2VyQ29uZmlnLmZyb20oXG4gICAgICBtYXBEYXRhLm1hcE1hcmtlcnMsXG4gICAgICB0aGlzLl9waW5Db25maWdcbiAgICApO1xuXG4gICAgbGV0IGNlbnRlciA9IG1hcERhdGEubWFwQ2VudGVyO1xuICAgIGxldCB3aWR0aCA9IHRoaXMuX3dpZHRoIHx8IDYwMDtcbiAgICBsZXQgaGVpZ2h0ID0gdGhpcy5faGVpZ2h0IHx8IDIwMDtcbiAgICBsZXQgem9vbSA9IHRoaXMuX3pvb20gfHwgOTtcblxuICAgIGxldCBlbmNvZGVkTWFya2VycyA9IE1hcEJveE1hcmtlckNvbmZpZy5zZXJpYWxpemUobWFwYm94TWFwTWFya2VyQ29uZmlncyk7XG4gICAgcmV0dXJuIGA8aW1nIHNyYz1cImh0dHBzOi8vYXBpLm1hcGJveC5jb20vc3R5bGVzL3YxL21hcGJveC9zdHJlZXRzLXYxMS9zdGF0aWMvJHtlbmNvZGVkTWFya2Vyc30vJHtjZW50ZXIubG9uZ2l0dWRlfSwke2NlbnRlci5sYXRpdHVkZX0sJHt6b29tfS9hdXRvLyR7d2lkdGh9eCR7aGVpZ2h0fT9hY2Nlc3NfdG9rZW49JHt0aGlzLl9hcGlLZXl9XCI+YDtcbiAgfVxuXG4gIGluaXQgKGVsLCBtYXBEYXRhKSB7XG4gICAgaWYgKCFtYXBEYXRhIHx8IG1hcERhdGEubWFwTWFya2Vycy5sZW5ndGggPD0gMCkge1xuICAgICAgdGhpcy5fbWFwID0gbnVsbDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGxldCBjb250YWluZXIgPSBET00ucXVlcnkoZWwpO1xuICAgIERPTS5jc3MoY29udGFpbmVyLCB7XG4gICAgICB3aWR0aDogdGhpcy5fd2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuX2hlaWdodFxuICAgIH0pO1xuXG4gICAgdGhpcy5fbWFwID0gbmV3IG1hcGJveGdsLk1hcCh7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgIHpvb206IHRoaXMuX3pvb20sXG4gICAgICBzdHlsZTogJ21hcGJveDovL3N0eWxlcy9tYXBib3gvc3RyZWV0cy12OScsXG4gICAgICBjZW50ZXI6IFttYXBEYXRhLm1hcENlbnRlci5sb25naXR1ZGUsIG1hcERhdGEubWFwQ2VudGVyLmxhdGl0dWRlXVxuICAgIH0pO1xuXG4gICAgY29uc3QgbWFwYm94TWFwTWFya2VyQ29uZmlncyA9IE1hcEJveE1hcmtlckNvbmZpZy5mcm9tKFxuICAgICAgbWFwRGF0YS5tYXBNYXJrZXJzLFxuICAgICAgdGhpcy5fcGluQ29uZmlnLFxuICAgICAgdGhpcy5fbWFwKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFwYm94TWFwTWFya2VyQ29uZmlncy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHdyYXBwZXIgPSBtYXBib3hNYXBNYXJrZXJDb25maWdzW2ldLndyYXBwZXI7XG4gICAgICBsZXQgY29vcmRzID0gbmV3IG1hcGJveGdsLkxuZ0xhdChcbiAgICAgICAgbWFwYm94TWFwTWFya2VyQ29uZmlnc1tpXS5wb3NpdGlvbi5sb25naXR1ZGUsXG4gICAgICAgIG1hcGJveE1hcE1hcmtlckNvbmZpZ3NbaV0ucG9zaXRpb24ubGF0aXR1ZGUpO1xuICAgICAgbGV0IG1hcmtlciA9IG5ldyBtYXBib3hnbC5NYXJrZXIod3JhcHBlcikuc2V0TG5nTGF0KGNvb3Jkcyk7XG4gICAgICBtYXJrZXIuYWRkVG8odGhpcy5fbWFwKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hcEJveE1hcmtlckNvbmZpZyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIG1hcGJveCBtYXAsIHRoYXQgdGhlIG1hcmtlciBpcyBhcHBlbmRlZCB0b1xuICAgICAqIEB0eXBlIHtNYXBCb3h9XG4gICAgICovXG4gICAgdGhpcy5tYXAgPSBvcHRzLm1hcCB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1hcmtlciAobGF0L2xuZylcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMucG9zaXRpb24gPSBvcHRzLnBvc2l0aW9uIHx8IHtcbiAgICAgIGxhdGl0dWRlOiB1bmRlZmluZWQsXG4gICAgICBsb25naXR1ZGU6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaHRtbCBlbGVtZW50IHRvIGJlIHVzZWQgYXMgdGhlIG1hcCBtYXJrZXJcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMud3JhcHBlciA9IG9wdHMud3JhcHBlciB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgb2YgdGhlIG1hcmtlciB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWwgPSBvcHRzLmxhYmVsIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB1cmwgb2YgdGhlIHBpbiBmb3IgdGhlIHN0YXRpYyBtYXBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc3RhdGljTWFwUGluID0gb3B0cy5zdGF0aWNNYXBQaW4gfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYW4gYXJyYXkgb2YgbWFya2VyIGNvbmZpZ3NcbiAgICogQHBhcmFtIHtNYXBCb3hNYXJrZXJDb25maWdbXX0gbWFwYm94TWFwTWFya2VyQ29uZmlnc1xuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplIChtYXBib3hNYXBNYXJrZXJDb25maWdzKSB7XG4gICAgbGV0IHNlcmlhbGl6ZWRNYXJrZXJzID0gW107XG4gICAgbWFwYm94TWFwTWFya2VyQ29uZmlncy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIGlmIChtYXJrZXIuc3RhdGljTWFwUGluKSB7XG4gICAgICAgIHNlcmlhbGl6ZWRNYXJrZXJzLnB1c2goYHVybC0ke21hcmtlci5zdGF0aWNNYXBQaW59KCR7bWFya2VyLnBvc2l0aW9uLmxvbmdpdHVkZX0sJHttYXJrZXIucG9zaXRpb24ubGF0aXR1ZGV9KWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VyaWFsaXplZE1hcmtlcnMucHVzaChgcGluLXMtJHttYXJrZXIubGFiZWx9KCR7bWFya2VyLnBvc2l0aW9uLmxvbmdpdHVkZX0sJHttYXJrZXIucG9zaXRpb24ubGF0aXR1ZGV9KWApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZXJpYWxpemVkTWFya2Vycy5qb2luKCcsJyk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIHN0b3JhZ2UgZGF0YSBtb2RlbCBvZiBtYXJrZXJzIGludG8gR29vZ2xlQVBJTWFya2VyXG4gICAqIEBwYXJhbSB7TWFwQm94fSBBIHJlZmVyZW5jZSB0byB0aGUgZ29vZ2xlIG1hcCB0byBhcHBseSB0aGUgbWFya2VyIHRvXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IG1hcmtlcnMgVGhlIGRhdGEgb2YgdGhlIG1hcmtlclxuICAgKiBAcGFyYW0ge09iamVjdH0gcGluQ29uZmlnIFRoZSBjb25maWd1cmF0aW9uIHRvIGFwcGx5IHRvIHRoZSBtYXJrZXJcbiAgICogQHJldHVybnMge01hcEJveE1hcmtlckNvbmZpZ1tdfVxuICAgKi9cbiAgc3RhdGljIGZyb20gKG1hcmtlcnMsIHBpbkNvbmZpZywgbWFwKSB7XG4gICAgbGV0IG1hcGJveE1hcE1hcmtlckNvbmZpZ3MgPSBbXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobWFya2VycykpIHtcbiAgICAgIG1hcmtlcnMgPSBbbWFya2Vyc107XG4gICAgfVxuXG4gICAgbWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIC8vIFN1cHBvcnQgY29uZmlndXJhdGlvbiBhcyBhIGZ1bmN0aW9uXG4gICAgICBsZXQgcGluQ29uZmlnT2JqID0gcGluQ29uZmlnO1xuICAgICAgaWYgKHR5cGVvZiBwaW5Db25maWcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcGluQ29uZmlnT2JqID0gcGluQ29uZmlnKFxuICAgICAgICAgIG1hcmtlci5pdGVtLFxuICAgICAgICAgIE1hcFByb3ZpZGVyLkRFRkFVTFRfUElOX0NPTkZJRyxcbiAgICAgICAgICBtYXJrZXIpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB3cmFwcGVyID0gcGluQ29uZmlnT2JqLndyYXBwZXIgPyBwaW5Db25maWdPYmoud3JhcHBlciA6IG51bGw7XG4gICAgICBjb25zdCBzdGF0aWNNYXBQaW4gPSBwaW5Db25maWdPYmouc3RhdGljTWFwUGluID8gcGluQ29uZmlnT2JqLnN0YXRpY01hcFBpbiA6IG51bGw7XG5cbiAgICAgIG1hcGJveE1hcE1hcmtlckNvbmZpZ3MucHVzaChcbiAgICAgICAgbmV3IE1hcEJveE1hcmtlckNvbmZpZyh7XG4gICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIGxhdGl0dWRlOiBtYXJrZXIubGF0aXR1ZGUsXG4gICAgICAgICAgICBsb25naXR1ZGU6IG1hcmtlci5sb25naXR1ZGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHdyYXBwZXI6IHdyYXBwZXIsXG4gICAgICAgICAgbGFiZWw6IG1hcmtlci5sYWJlbCxcbiAgICAgICAgICBzdGF0aWNNYXBQaW46IHN0YXRpY01hcFBpblxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtYXBib3hNYXBNYXJrZXJDb25maWdzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNYXBDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5pbXBvcnQgR29vZ2xlTWFwUHJvdmlkZXIgZnJvbSAnLi9wcm92aWRlcnMvZ29vZ2xlbWFwcHJvdmlkZXInO1xuaW1wb3J0IE1hcEJveE1hcFByb3ZpZGVyIGZyb20gJy4vcHJvdmlkZXJzL21hcGJveG1hcHByb3ZpZGVyJztcblxuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbmNvbnN0IFByb3ZpZGVyVHlwZXMgPSB7XG4gICdnb29nbGUnOiBHb29nbGVNYXBQcm92aWRlcixcbiAgJ21hcGJveCc6IE1hcEJveE1hcFByb3ZpZGVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIHRoaXMgY29tcG9uZW50IHRvIGxpc3RlbiB0byB0aGUgc3RvcmFnZSBiYXNlZCBvbiB0aGlzIGtleVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgdGVtcGxhdGUgdG8gdXNlIHRvIHJlbmRlciB0aGlzIGNvbXBvbmVudFxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdyZXN1bHRzL21hcCc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhbGlhc2VkIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSB0eXBlIG9mIG1hcCBwcm92aWRlciB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX21hcFByb3ZpZGVyID0gb3B0cy5tYXBQcm92aWRlcjtcbiAgICBpZiAoIXRoaXMuX21hcFByb3ZpZGVyIHx8ICEodGhpcy5fbWFwUHJvdmlkZXIudG9Mb3dlckNhc2UoKSBpbiBQcm92aWRlclR5cGVzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXBDb21wb25lbnQ6IEludmFsaWQgTWFwIFByb3ZpZGVyOyBtdXN0IGJlIGBnb29nbGVgIG9yIGBtYXBCb3hgJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgaW5kaWNhdGlvbiBvZiB3aGV0aGVyIG9yIG5vdCB0byB1c2UgYSBzdGF0aWMgb3IgZHluYW1pYyBtYXBcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9pc1N0YXRpYyA9IG9wdHMuaXNTdGF0aWMgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byBhbiBpbnN0YW5jZSBvZiB0aGUge01hcFByb3ZpZGVyfSB0aGF0J3MgY29uc3RydWN0ZWRcbiAgICAgKiBAdHlwZSB7TWFwUHJvdmlkZXJ9XG4gICAgICovXG4gICAgdGhpcy5fbWFwID0gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdNYXAnO1xuICB9XG5cbiAgLy8gVE9ETyhiaWxseSkgTWFrZSBQcm92aWRlclR5cGVzIGEgZmFjdG9yeSBjbGFzc1xuICBnZXRQcm92aWRlckluc3RhbmNlICh0eXBlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm92aWRlclR5cGVzW3R5cGUudG9Mb3dlckNhc2UoKV0odGhpcy5fY29uZmlnKTtcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICB0aGlzLl9tYXAgPSB0aGlzLmdldFByb3ZpZGVySW5zdGFuY2UodGhpcy5fbWFwUHJvdmlkZXIpO1xuICAgIGxldCBtYXBEYXRhID0gdGhpcy5nZXRTdGF0ZSgnbWFwJyk7XG4gICAgaWYgKG1hcERhdGEgPT09IHVuZGVmaW5lZCAmJiB0aGlzLl9pc1N0YXRpYykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU3RhdGljKSB7XG4gICAgICAvLyBUT0RPKGJpbGx5KSBUaGUgZXhpc3RpbmcgdGVtcGxhdGUgc2hvdWxkIGp1c3QgdGFrZSBpbiB0aGUgbWFwIGBpbWdVUkxgIGFzIGRhdGFcbiAgICAgIC8vIEluc3RlYWQgb2Ygb3ZlcnJpZGluZyB0aGUgdGVtcGxhdGUgbGlrZSBzbywgYnV0IE5CRCBmb3Igbm93LlxuICAgICAgdGhpcy5zZXRUZW1wbGF0ZSh0aGlzLl9tYXAuZ2VuZXJhdGVTdGF0aWMobWFwRGF0YSkpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fbWFwLmxvYWRKUygpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgdGhpcy5fbWFwLm9uTG9hZGVkKCgpID0+IHtcbiAgICAgIHRoaXMuX21hcC5pbml0KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5nZXRTdGF0ZSgnbWFwJykpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShkYXRhLCB2YWwpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBSZXN1bHRzQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vZXZlbnRyZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9wZW9wbGVyZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgTWFwQ29tcG9uZW50IGZyb20gJy4uL21hcC9tYXBjb21wb25lbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuXG5jb25zdCBSZXN1bHRUeXBlID0ge1xuICBFVkVOVDogJ2V2ZW50JyxcbiAgTE9DQVRJT046ICdsb2NhdGlvbicsXG4gIFBFT1BMRTogJ3Blb3BsZSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdHNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUztcbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncmVzdWx0cy9yZXN1bHRzJztcbiAgICB0aGlzLmxpbWl0ID0gb3B0cy5saW1pdCB8fCA1O1xuICAgIHRoaXMuX2l0ZW1Db25maWcgPSB7XG4gICAgICBnbG9iYWw6IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIFtFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50LnR5cGVdOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH0sXG4gICAgICBbTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlXToge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9LFxuICAgICAgW1Blb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50LnR5cGVdOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKG9wdHMucmVuZGVySXRlbSA9PT0gdW5kZWZpbmVkICYmIG9wdHMuX3BhcmVudE9wdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0cy5yZW5kZXJJdGVtID0gb3B0cy5fcGFyZW50T3B0cy5yZW5kZXJJdGVtO1xuICAgIH1cblxuICAgIGlmIChvcHRzLml0ZW1UZW1wbGF0ZSA9PT0gdW5kZWZpbmVkICYmIG9wdHMuX3BhcmVudE9wdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgb3B0cy5pdGVtVGVtcGxhdGUgPSBvcHRzLl9wYXJlbnRPcHRzLml0ZW1UZW1wbGF0ZTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbmZpZ3VyZUl0ZW0oe1xuICAgICAgcmVuZGVyOiBvcHRzLnJlbmRlckl0ZW0sXG4gICAgICB0ZW1wbGF0ZTogb3B0cy5pdGVtVGVtcGxhdGVcbiAgICB9KTtcbiAgfVxuXG4gIG1vdW50ICgpIHtcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5nZXRTdGF0ZSgpKS5sZW5ndGggPiAwKSB7XG4gICAgICBzdXBlci5tb3VudCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RhdGljIGdldCBkdXBsaWNhdGVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSwgdmFsKSB7XG4gICAgY29uc3Qgc2VhcmNoU3RhdGUgPSBkYXRhLnNlYXJjaFN0YXRlIHx8IFNlYXJjaFN0YXRlcy5QUkVfU0VBUkNIO1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHsgcmVzdWx0czogW10gfSwgZGF0YSwge1xuICAgICAgaXNQcmVTZWFyY2g6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuUFJFX1NFQVJDSCxcbiAgICAgIGlzU2VhcmNoTG9hZGluZzogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyxcbiAgICAgIGlzU2VhcmNoQ29tcGxldGU6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFLFxuICAgICAgaW5jbHVkZU1hcDogdGhpcy5fY29uZmlnLmluY2x1ZGVNYXAsXG4gICAgICBtYXBDb25maWc6IHRoaXMuX2NvbmZpZy5tYXBDb25maWdcbiAgICB9KSwgdmFsKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdWZXJ0aWNhbFJlc3VsdHMnO1xuICB9XG5cbiAgY29uZmlndXJlSXRlbSAoY29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLl9pdGVtQ29uZmlnLmdsb2JhbC5yZW5kZXIgPSBjb25maWcucmVuZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29uZmlnLnJlbmRlcikge1xuICAgICAgICB0aGlzLnNldEl0ZW1SZW5kZXIoa2V5LCBjb25maWcucmVuZGVyW2tleV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRlbXBsYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5faXRlbUNvbmZpZy5nbG9iYWwudGVtcGxhdGUgPSBjb25maWcudGVtcGxhdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb25maWcudGVtcGxhdGUpIHtcbiAgICAgICAgdGhpcy5zZXRJdGVtVGVtcGxhdGUoa2V5LCBjb25maWcudGVtcGxhdGVba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0SXRlbVRlbXBsYXRlICh0eXBlLCB0ZW1wbGF0ZSkge1xuICAgIGxldCBjbGF6eiA9IHRoaXMuZ2V0SXRlbUNvbXBvbmVudCh0eXBlKTtcbiAgICB0aGlzLl9pdGVtQ29uZmlnW2NsYXp6LnR5cGVdLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gIH1cblxuICBzZXRJdGVtUmVuZGVyICh0eXBlLCByZW5kZXIpIHtcbiAgICBsZXQgY2xhenogPSB0aGlzLmdldEl0ZW1Db21wb25lbnQodHlwZSk7XG4gICAgdGhpcy5faXRlbUNvbmZpZ1tjbGF6ei50eXBlXS5yZW5kZXIgPSByZW5kZXI7XG4gIH1cblxuICBnZXRJdGVtQ29tcG9uZW50ICh0eXBlKSB7XG4gICAgbGV0IGNvbXAgPSBSZXN1bHRzSXRlbUNvbXBvbmVudDtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUmVzdWx0VHlwZS5FVkVOVDpcbiAgICAgICAgY29tcCA9IEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSZXN1bHRUeXBlLkxPQ0FUSU9OOlxuICAgICAgICBjb21wID0gTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJlc3VsdFR5cGUuUEVPUExFOlxuICAgICAgICBjb21wID0gUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wO1xuICB9XG5cbiAgYWRkQ2hpbGQgKGRhdGEsIHR5cGUsIG9wdHMpIHtcbiAgICAvLyBUT0RPKGJpbGx5KSBSZWZhY3RvciB0aGUgd2F5IGNvbmZpZ3VyYXRpb24gYW5kIGRhdGEgZmxvd3NcbiAgICAvLyB0aHJvdWdoIHRvcCBsZXZlbCBjb21wb25lbnRzIHRvIGNoaWxkIGNvbXBvbmVudHMuXG4gICAgaWYgKHR5cGUgPT09IFJlc3VsdHNJdGVtQ29tcG9uZW50LnR5cGUpIHtcbiAgICAgIGxldCBjbGF6eiA9IHRoaXMuZ2V0SXRlbUNvbXBvbmVudChkYXRhLnR5cGUpO1xuICAgICAgaWYgKGNsYXp6KSB7XG4gICAgICAgIHR5cGUgPSBjbGF6ei50eXBlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gTWFwQ29tcG9uZW50LnR5cGUpIHtcbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIG1hcDogZGF0YVxuICAgICAgfTtcbiAgICAgIGNvbnN0IG5ld09wdHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcubWFwQ29uZmlnLCBvcHRzKTtcbiAgICAgIHJldHVybiBzdXBlci5hZGRDaGlsZChkYXRhLCB0eXBlLCBuZXdPcHRzKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB0aGUgcHJvcGVyIGl0ZW0gcmVuZGVycyB0byB0aGUgdGhlIGNvbXBvbmVudHNcbiAgICAvLyBoYXZlIGp1c3QgYmVlbiBjb25zdHJ1Y3RlZC4gUHJpb3JpdGl6ZSBnbG9iYWwgb3ZlciBpbmRpdmlkdWFsIGl0ZW1zLlxuICAgIGxldCBjb21wID0gc3VwZXIuYWRkQ2hpbGQoZGF0YSwgdHlwZSwgb3B0cyk7XG4gICAgbGV0IGdsb2JhbENvbmZpZyA9IHRoaXMuX2l0ZW1Db25maWcuZ2xvYmFsO1xuICAgIGxldCBpdGVtQ29uZmlnID0gdGhpcy5faXRlbUNvbmZpZ1tjb21wLnR5cGVdO1xuICAgIGxldCBoYXNHbG9iYWxSZW5kZXIgPSB0eXBlb2YgZ2xvYmFsQ29uZmlnLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJztcbiAgICBsZXQgaGFzR2xvYmFsVGVtcGxhdGUgPSB0eXBlb2YgZ2xvYmFsQ29uZmlnLnRlbXBsYXRlID09PSAnc3RyaW5nJztcblxuICAgIGlmIChoYXNHbG9iYWxSZW5kZXIpIHtcbiAgICAgIGNvbXAuc2V0UmVuZGVyKGdsb2JhbENvbmZpZy5yZW5kZXIpO1xuICAgIH1cblxuICAgIGlmIChoYXNHbG9iYWxUZW1wbGF0ZSkge1xuICAgICAgY29tcC5zZXRUZW1wbGF0ZShnbG9iYWxDb25maWcudGVtcGxhdGUpO1xuICAgIH1cblxuICAgIGlmICghaXRlbUNvbmZpZykge1xuICAgICAgcmV0dXJuIGNvbXA7XG4gICAgfVxuXG4gICAgaWYgKCFoYXNHbG9iYWxSZW5kZXIgJiYgaXRlbUNvbmZpZy5yZW5kZXIpIHtcbiAgICAgIGNvbXAuc2V0UmVuZGVyKGl0ZW1Db25maWcucmVuZGVyKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB0ZW1wbGF0ZSBzcGVjaWZpYyBzaXR1YXRpb25cbiAgICBpZiAoIWhhc0dsb2JhbFRlbXBsYXRlICYmIGl0ZW1Db25maWcudGVtcGxhdGUpIHtcbiAgICAgIGNvbXAuc2V0VGVtcGxhdGUoaXRlbUNvbmZpZy50ZW1wbGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBjb21wO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFNlYXJjaFN0YXRlcyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUUztcbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncmVzdWx0cy91bml2ZXJzYWxyZXN1bHRzJztcbiAgICB0aGlzLl9saW1pdCA9IG9wdHMubGltaXQgfHwgMTA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnVW5pdmVyc2FsUmVzdWx0cyc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGluaXQgKG9wdHMpIHtcbiAgICBzdXBlci5pbml0KG9wdHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIGNvbnN0IHNlYXJjaFN0YXRlID0gZGF0YS5zZWFyY2hTdGF0ZSB8fCBTZWFyY2hTdGF0ZXMuUFJFX1NFQVJDSDtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7IHNlY3Rpb25zOiBbXSB9LCBkYXRhLCB7XG4gICAgICBpc1ByZVNlYXJjaDogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5QUkVfU0VBUkNILFxuICAgICAgaXNTZWFyY2hMb2FkaW5nOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlNFQVJDSF9MT0FESU5HLFxuICAgICAgaXNTZWFyY2hDb21wbGV0ZTogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5TRUFSQ0hfQ09NUExFVEVcbiAgICB9KSwgdmFsKTtcbiAgfVxuXG4gIGFkZENoaWxkIChkYXRhID0ge30sIHR5cGUpIHtcbiAgICBsZXQgb3B0cyA9IHRoaXMuZ2V0Q2hpbGRDb25maWcoW2RhdGFbJ3ZlcnRpY2FsQ29uZmlnSWQnXV0pO1xuICAgIHJldHVybiBzdXBlci5hZGRDaGlsZChkYXRhLCB0eXBlLCBvcHRzKTtcbiAgfVxuXG4gIGdldENoaWxkQ29uZmlnIChjb25maWdJZCkge1xuICAgIGxldCBjb25maWcgPSB0aGlzLl9jb25maWcuY29uZmlnO1xuICAgIGlmIChjb25maWcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fY29uZmlnWydjb25maWcnXVtjb25maWdJZF0gfHwgdGhpcy5fY29uZmlnWydjb25maWcnXTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUUztcblxuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdxdWVzdGlvbnMvc3VibWlzc2lvbic7XG5cbiAgICAvKipcbiAgICAgKiBRdWVzdGlvbiBzdWJtaXNzaW9uIGlzIGJhc2VkIG9uIGEgZm9ybSBhcyBjb250ZXh0LlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBuYXRpdmUgZm9ybSBub2RlIHdpdGhpbiBjb250YWluZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9mb3JtRWwgPSBvcHRzLmZvcm1TZWxlY3RvciB8fCAnZm9ybSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgZS1tYWlsIGFkZHJlc3MgaW5wdXRcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gYEVtYWlsIEFkZHJlc3NgXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9lbWFpbExhYmVsID0gb3B0cy5lbWFpbExhYmVsIHx8ICcqRW1haWwgQWRkcmVzczonO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIG5hbWUgaW5wdXRcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gYE5hbWVgXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9uYW1lTGFiZWwgPSBvcHRzLm5hbWVMYWJlbCB8fCAnTmFtZTonO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIFF1ZXN0aW9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIGBXaGF0IGlzIHlvdXIgcXVlc3Rpb24/YFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fcXVlc3Rpb25MYWJlbCA9IG9wdHMucXVlc3Rpb25MYWJlbCB8fCAnKldoYXQgaXMgeW91ciBxdWVzdGlvbj8nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIFByaXZhY3kgUG9saWN5XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIGBXaGF0IGlzIHlvdXIgcXVlc3Rpb24/YFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fcHJpdmFjeVBvbGljeUxhYmVsID0gb3B0cy5wcml2YWN5UG9saWN5TGFiZWwgfHwgJ0kgYWdyZWUgdG8gb3VyIFByaXZhY3kgUG9saWN5Oic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgU3VibWl0IGJ1dHRvblxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBgU3VibWl0P2BcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2J1dHRvbkxhYmVsID0gb3B0cy5idXR0b25MYWJlbCB8fCAnU3VibWl0JztcbiAgfVxuXG4gIGJlZm9yZU1vdW50ICgpIHtcbiAgICAvLyBPbmx5IG1vdW50IG91ciBjb21wb25lbnQgaWYgdGhlIHF1ZXJ5IGhhcyBiZWVuIHRyaWdnZXJlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0aGlzLmdldFN0YXRlKCdoYXNRdWVyaWVkJykgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIHRoaXMuaW5pdFN1Ym1pdCh0aGlzLl9mb3JtRWwpO1xuICB9XG5cbiAgaW5pdFN1Ym1pdCAoZm9ybVNlbGVjdG9yKSB7XG4gICAgdGhpcy5fZm9ybUVsID0gZm9ybVNlbGVjdG9yO1xuXG4gICAgbGV0IGZvcm0gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9mb3JtRWwpO1xuXG4gICAgRE9NLm9uKGZvcm0sICdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gVE9ETyhiaWxseSkgU2VyaWFsaXplIGZvcm1cbiAgICAgIC8vIHRoaXMuY29yZS5zdWJtaXRRdWVzdGlvbihmb3JtKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdRQVN1Ym1pc3Npb24nO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIC8vIFNpbmNlIHdlJ3JlIGJpbmRpbmcgdG8gc2VhcmNoIHJlc3VsdHMsXG4gICAgLy8gYW5kIHdlIG9ubHkgd2FudCB0byBzaG93IHRoZSBRQSBzdWJtaXNzaW9uXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKHtcbiAgICAgIGhhc1F1ZXJpZWQ6IGRhdGEuc2VjdGlvbnMgIT09IHVuZGVmaW5lZCxcbiAgICAgIGVtYWlsTGFiZWw6IHRoaXMuX2VtYWlsTGFiZWwsXG4gICAgICBuYW1lTGFiZWw6IHRoaXMuX25hbWVMYWJlbCxcbiAgICAgIHF1ZXN0aW9uTGFiZWw6IHRoaXMuX3F1ZXN0aW9uTGFiZWwsXG4gICAgICBwcml2YWN5UG9saWN5TGFiZWw6IHRoaXMuX3ByaXZhY3lQb2xpY3lMYWJlbCxcbiAgICAgIGJ1dHRvbkxhYmVsOiB0aGlzLl9idXR0b25MYWJlbCxcbiAgICAgIHF1ZXN0aW9uOiBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKS5nZXQoJ3F1ZXJ5JylcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi9jb21wb25lbnRtYW5hZ2VyJztcblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XG5cbmltcG9ydCBOYXZpZ2F0aW9uQ29tcG9uZW50IGZyb20gJy4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uY29tcG9uZW50JztcblxuaW1wb3J0IFNlYXJjaENvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9zZWFyY2hjb21wb25lbnQnO1xuaW1wb3J0IEZpbHRlclNlYXJjaENvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9maWx0ZXJzZWFyY2hjb21wb25lbnQnO1xuaW1wb3J0IEF1dG9Db21wbGV0ZUNvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9hdXRvY29tcGxldGVjb21wb25lbnQnO1xuXG5pbXBvcnQgRmlsdGVyT3B0aW9uc0NvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZmlsdGVyb3B0aW9uc2NvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyQm94Q29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9maWx0ZXJib3hjb21wb25lbnQnO1xuXG5pbXBvcnQgRGlyZWN0QW5zd2VyQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9kaXJlY3RhbnN3ZXJjb21wb25lbnQnO1xuaW1wb3J0IFJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Jlc3VsdHNjb21wb25lbnQnO1xuaW1wb3J0IFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHNjb21wb25lbnQnO1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcGVvcGxlcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5pbXBvcnQgTWFwQ29tcG9uZW50IGZyb20gJy4vbWFwL21hcGNvbXBvbmVudCc7XG5cbmltcG9ydCBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgZnJvbSAnLi9xdWVzdGlvbnMvcXVlc3Rpb25zdWJtaXNzaW9uY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9NQU5BR0VSID0gbmV3IENvbXBvbmVudE1hbmFnZXIoKVxuLy8gQ29yZSBDb21wb25lbnRcbiAgLnJlZ2lzdGVyKENvbXBvbmVudClcblxuLy8gTmF2aWdhdGlvbiBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihOYXZpZ2F0aW9uQ29tcG9uZW50KVxuXG4vLyBTZWFyY2ggQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoU2VhcmNoQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRmlsdGVyU2VhcmNoQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoQXV0b0NvbXBsZXRlQ29tcG9uZW50KVxuXG4vLyBGaWx0ZXIgQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoRmlsdGVyQm94Q29tcG9uZW50KVxuICAucmVnaXN0ZXIoRmlsdGVyT3B0aW9uc0NvbXBvbmVudClcblxuLy8gUmVzdWx0cyBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihEaXJlY3RBbnN3ZXJDb21wb25lbnQpXG4gIC5yZWdpc3RlcihVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoUmVzdWx0c0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFJlc3VsdHNJdGVtQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQpXG4gIC5yZWdpc3RlcihQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudClcblxuICAucmVnaXN0ZXIoTWFwQ29tcG9uZW50KVxuXG4vLyBRdWVzdGlvbnMgQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50KTtcbiIsIi8qKiBAbW9kdWxlIFRlbXBsYXRlTG9hZGVyICovXG5cbmltcG9ydCBET00gZnJvbSAnLi4vZG9tL2RvbSc7XG5pbXBvcnQgeyBDT01QSUxFRF9URU1QTEFURVNfVVJMIH0gZnJvbSAnLi4vLi4vY29yZS9jb25zdGFudHMnO1xuXG4vKipcbiAqIFRlbXBsYXRlTG9hZGVyIGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBsb2FkaW5nIHRlbXBsYXRlcyBhc3luY2hyb25vdXNseVxuICogZnJvbSB0aGUgc2VydmVyIGFuZCByZWdpc3RlcnMgdGhlbSB3aXRoIHRoZSBwcm9wZXIgcmVuZGVyZXIuXG4gKiBJdCBhbHNvIGFsbG93cyB5b3UgdG8gYXNzaWduIHRoZW0gc3luY2hyb25vdXNseS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVMb2FkZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgaWYgKCFUZW1wbGF0ZUxvYWRlci5zZXRJbnN0YW5jZSh0aGlzKSkge1xuICAgICAgcmV0dXJuIFRlbXBsYXRlTG9hZGVyLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHVybCB0byBmZXRjaCBjb21waWxlZCB0ZW1wbGF0ZXMgZnJvbVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZVVybCA9IGNvbmZpZy50ZW1wbGF0ZVVybCB8fCBDT01QSUxFRF9URU1QTEFURVNfVVJMO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVzID0ge307XG4gICAgdGhpcy5fb25Mb2FkZWQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB0aGlzLl9pbml0KCk7XG4gIH1cblxuICBzdGF0aWMgc2V0SW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIF9pbml0ICgpIHtcbiAgICB0aGlzLmZldGNoVGVtcGxhdGVzKCk7XG4gIH1cblxuICBmZXRjaFRlbXBsYXRlcyAoKSB7XG4gICAgLy8gSWYgd2UgYWxyZWFkeSBoYXZlIHRlbXBsYXRlcyBsb2FkZWQsIGRvIG5vdGhpbmdcbiAgICBsZXQgbm9kZSA9IERPTS5xdWVyeSgnI3lleHQtYW5zd2Vycy10ZW1wbGF0ZXMnKTtcbiAgICBpZiAobm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEluamVjdCBhIHNjcmlwdCB0byBmZXRjaCB0aGUgY29tcGlsZWQgdGVtcGxhdGVzLFxuICAgIC8vIHdyYXBwaW5nIGl0IGEgUHJvbWlzZSBmb3IgY2xlYW5saW5lc3NcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICAgIGlkOiAneWV4dC1hbnN3ZXJzLXRlbXBsYXRlcycsXG4gICAgICAgIG9ubG9hZDogcmVzb2x2ZSxcbiAgICAgICAgb25lcnJvcjogcmVqZWN0LFxuICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgc3JjOiB0aGlzLl90ZW1wbGF0ZVVybFxuICAgICAgfSk7XG5cbiAgICAgIERPTS5hcHBlbmQoJ2JvZHknLCBzY3JpcHQpO1xuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIEltcGxtZW5ldCBlcnJvciBoYW5kbGluZyBoZXJlIChlLmcuIHJlcXVlc3QgY291bGQgZmFpbClcbiAgICAgICAgY29uc29sZS5sb2coJ1RlbXBsYXRlcyBsb2FkZWQgc3VjY2Vzc2Z1bGx5IScpO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXIgdGhlIHRlbXBsYXRlcyBpbnRlcm5hbGx5IHNvIHRoYXQgdGhleSBjYW4gYmUgbGF0ZXIgY29uc3VtZWRcbiAgICogKGUuZy4gYnkgY29tcG9uZW50cyBhbmQgcmVuZGVyZXJzKSB3aXRoIGNvbnZpZW5pZW5jZS5cbiAgICpcbiAgICogYGZldGNoVGVtcGxhdGVzYCB3aWxsIGF1dG9tYXRpY2FsbHkgY2FsbCB0aGlzLCBwcm92aWRpbmcgdGhlIGNvbXBpbGVkIHRlbXBsYXRlcyBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICByZWdpc3RlciAodGVtcGxhdGVzKSB7XG4gICAgdGhpcy5fdGVtcGxhdGVzID0gdGVtcGxhdGVzO1xuXG4gICAgLy8gTm90aWZ5IG91ciBjb25zdW1lcnMgdGhhdCB0aGUgdGVtcGxhdGVzIGFyZSBoZXJlIDopXG4gICAgdGhpcy5fb25Mb2FkZWQodGhpcy5fdGVtcGxhdGVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9uTG9hZGVkIChjYikge1xuICAgIHRoaXMuX29uTG9hZGVkID0gY2I7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgKHRlbXBsYXRlTmFtZSkge1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXNbdGVtcGxhdGVOYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIFRoZSBpbnRlcm5hbCB0ZW1wbGF0ZSBjb2xsZWN0aW9uXG4gICAqL1xuICBnZXRUZW1wbGF0ZXMgKCkge1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbmV4cG9ydCB7IENPTVBPTkVOVF9NQU5BR0VSIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRE9NIH0gZnJvbSAnLi9kb20vZG9tJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi9kb20vc2VhcmNocGFyYW1zJztcblxuZXhwb3J0IHsgUmVuZGVyZXJzIH0gZnJvbSAnLi9yZW5kZXJpbmcvY29uc3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZW1wbGF0ZUxvYWRlciB9IGZyb20gJy4vcmVuZGVyaW5nL3RlbXBsYXRlbG9hZGVyJztcbiIsIi8qKiBAbW9kdWxlIEVycm9yUmVwb3J0ZXIgKi9cblxuaW1wb3J0IHsgQW5zd2Vyc0Jhc2VFcnJvciB9IGZyb20gJy4vZXJyb3JzJztcblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCB7IExJQl9WRVJTSU9OIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBFcnJvclJlcG9ydGVyIGlzIHVzZWQgZm9yIHJlcG9ydGluZyBlcnJvcnMgdG8gdGhlIHNlcnZlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvclJlcG9ydGVyIHtcbiAgY29uc3RydWN0b3IgKGFwaUtleSwgYW5zd2Vyc0tleSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBhcGlLZXkgdG8gdXNlIGZvciByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuYXBpS2V5ID0gYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFuc3dlcnNLZXkgdG8gdXNlIHdoZW4gcmVwb3J0aW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmFuc3dlcnNLZXkgPSBhbnN3ZXJzS2V5O1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcG9ydCBzZW5kcyBhIG5ldHdvcmsgcmVxdWVzdCB0byB0aGUgc2VydmVyIHRvIGJlIGxvZ2dlZFxuICAgKiBAcGFyYW0ge0Fuc3dlcnNCYXNlRXJyb3J9IFRoZSBlcnJvciB0byBiZSByZXBvcnRlZFxuICAgKi9cbiAgcmVwb3J0IChlcnIpIHtcbiAgICBpZiAoIShlcnIgaW5zdGFuY2VvZiBBbnN3ZXJzQmFzZUVycm9yKSB8fCBlcnIucmVwb3J0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnIucmVwb3J0ZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvZXJyb3JzJyxcbiAgICAgIGFwaUtleTogdGhpcy5hcGlLZXksXG4gICAgICB2ZXJzaW9uOiAyMDE5MDMwMSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnZXJyb3InOiBlcnIudG9Kc29uKCksXG4gICAgICAgICdsaWJWZXJzaW9uJzogTElCX1ZFUlNJT04sXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5hbnN3ZXJzS2V5XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXF1ZXN0LmdldCgpXG4gICAgICAuY2F0Y2goY29uc29sZS5lcnIpO1xuXG4gICAgcmV0dXJuIGVycjtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuaW1wb3J0IENvcmUgZnJvbSAnLi9jb3JlL2NvcmUnO1xuXG5pbXBvcnQge1xuICBUZW1wbGF0ZUxvYWRlcixcbiAgQ09NUE9ORU5UX01BTkFHRVIsXG4gIFJlbmRlcmVycyxcbiAgRE9NXG59IGZyb20gJy4vdWkvaW5kZXgnO1xuXG5pbXBvcnQgRXJyb3JSZXBvcnRlciBmcm9tICcuL2NvcmUvZXJyb3JzL2Vycm9ycmVwb3J0ZXInO1xuaW1wb3J0IHsgQW5hbHl0aWNzUmVwb3J0ZXIgfSBmcm9tICcuL2NvcmUnO1xuXG4vKipcbiAqIFRoZSBtYWluIEFuc3dlcnMgaW50ZXJmYWNlXG4gKi9cbmNsYXNzIEFuc3dlcnMge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgaWYgKCFBbnN3ZXJzLnNldEluc3RhbmNlKHRoaXMpKSB7XG4gICAgICByZXR1cm4gQW5zd2Vycy5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIG9mIHRoZSByZW5kZXJlciB0byB1c2UgZm9yIHRoZSBjb21wb25lbnRzXG4gICAgICogVGhpcyBpcyBwcm92aWRlZCBkdXJpbmcgaW5pdGlhbGl6YXRpb24uXG4gICAgICogQHR5cGUge1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXJzLkhhbmRsZWJhcnMoKTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlclxuICAgICAqIEB0eXBlIHtDb21wb25lbnRNYW5hZ2VyfVxuICAgICAqL1xuICAgIHRoaXMuY29tcG9uZW50cyA9IENPTVBPTkVOVF9NQU5BR0VSO1xuXG4gICAgLyoqXG4gICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiB0byBpbnZva2Ugb25jZSB0aGUgbGlicmFyeSBpcyByZWFkeS5cbiAgICAgKiBUeXBpY2FsbHkgZmlyZWQgYWZ0ZXIgdGVtcGxhdGVzIGFyZSBmZXRjaGVkIGZyb20gc2VydmVyIGZvciByZW5kZXJpbmcuXG4gICAgICovXG4gICAgdGhpcy5fb25SZWFkeSA9IGZ1bmN0aW9uICgpIHt9O1xuICB9XG5cbiAgc3RhdGljIHNldEluc3RhbmNlIChpbnN0YW5jZSkge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cblxuICBpbml0IChjb25maWcpIHtcbiAgICBjb25zdCBjb3JlID0gbmV3IENvcmUoe1xuICAgICAgYXBpS2V5OiBjb25maWcuYXBpS2V5LFxuICAgICAgYW5zd2Vyc0tleTogY29uZmlnLmFuc3dlcnNLZXksXG4gICAgICBsb2NhbGU6IGNvbmZpZy5sb2NhbGVcbiAgICB9KTtcbiAgICB0aGlzLmNvbXBvbmVudHMuc2V0Q29yZShjb3JlKVxuICAgICAgLnNldFJlbmRlcmVyKHRoaXMucmVuZGVyZXIpO1xuXG4gICAgaWYgKGNvbmZpZy5idXNpbmVzc0lkKSB7XG4gICAgICBjb25zdCByZXBvcnRlciA9IG5ldyBBbmFseXRpY3NSZXBvcnRlcihjb3JlLCBjb25maWcuYW5zd2Vyc0tleSwgY29uZmlnLmJ1c2luZXNzSWQsIGNvbmZpZy5hbmFseXRpY3NPcHRpb25zKTtcbiAgICAgIHRoaXMuY29tcG9uZW50cy5zZXRBbmFseXRpY3NSZXBvcnRlcihyZXBvcnRlcik7XG4gICAgfVxuXG4gICAgdGhpcy5fb25SZWFkeSA9IGNvbmZpZy5vblJlYWR5IHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgaWYgKGNvbmZpZy51c2VUZW1wbGF0ZXMgPT09IGZhbHNlIHx8IGNvbmZpZy50ZW1wbGF0ZUJ1bmRsZSkge1xuICAgICAgaWYgKGNvbmZpZy50ZW1wbGF0ZUJ1bmRsZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmluaXQoY29uZmlnLnRlbXBsYXRlQnVuZGxlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fb25SZWFkeSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gVGVtcGxhdGVzIGFyZSBjdXJyZW50bHkgZG93bmxvYWRlZCBzZXBhcmF0ZWx5IGZyb20gdGhlIENPUkUgYW5kIFVJIGJ1bmRsZS5cbiAgICAvLyBGdXR1cmUgZW5oYW5jZW1lbnQgaXMgdG8gc2hpcCB0aGUgY29tcG9uZW50cyB3aXRoIHRlbXBsYXRlcyBpbiBhIHNlcGFyYXRlIGJ1bmRsZS5cbiAgICB0aGlzLnRlbXBsYXRlcyA9IG5ldyBUZW1wbGF0ZUxvYWRlcih7XG4gICAgICB0ZW1wbGF0ZVVybDogY29uZmlnLnRlbXBsYXRlVXJsXG4gICAgfSkub25Mb2FkZWQoKHRlbXBsYXRlcykgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5pbml0KHRlbXBsYXRlcyk7XG5cbiAgICAgIHRoaXMuX29uUmVhZHkoKTtcbiAgICB9KTtcblxuICAgIGlmICghY29uZmlnLnN1cHByZXNzRXJyb3JSZXBvcnRzKSB7XG4gICAgICB0aGlzLl9lcnJvclJlcG9ydGVyID0gbmV3IEVycm9yUmVwb3J0ZXIoY29uZmlnLmFwaUtleSwgY29uZmlnLmFuc3dlcnNLZXkpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZSA9PiB0aGlzLl9lcnJvclJlcG9ydGVyLnJlcG9ydChlLmVycm9yKSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndW5oYW5kbGVkcmVqZWN0aW9uJywgZSA9PiB0aGlzLl9lcnJvclJlcG9ydGVyLnJlcG9ydChlLmVycm9yKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkb21SZWFkeSAoY2IpIHtcbiAgICBET00ub25SZWFkeShjYik7XG4gIH1cblxuICBvblJlYWR5IChjYikge1xuICAgIHRoaXMuX29uUmVhZHkgPSBjYjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZENvbXBvbmVudCAodHlwZSwgb3B0cykge1xuICAgIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdHMgPSB7XG4gICAgICAgIGNvbnRhaW5lcjogb3B0c1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHMuY3JlYXRlKHR5cGUsIG9wdHMpLm1vdW50KCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjcmVhdGVDb21wb25lbnQgKG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzLmNyZWF0ZSgnQ29tcG9uZW50Jywgb3B0cykubW91bnQoKTtcbiAgfVxuXG4gIHJlZ2lzdGVySGVscGVyIChuYW1lLCBjYikge1xuICAgIHRoaXMucmVuZGVyZXIucmVnaXN0ZXJIZWxwZXIobmFtZSwgY2IpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmNvbnN0IEFOU1dFUlMgPSBuZXcgQW5zd2VycygpO1xuZXhwb3J0IGRlZmF1bHQgQU5TV0VSUztcbiJdLCJuYW1lcyI6WyJNZXRob2RzIiwiR0VUIiwiUE9TVCIsIlBVVCIsIkRFTEVURSIsIkh0dHBSZXF1ZXN0ZXIiLCJ1cmwiLCJkYXRhIiwib3B0cyIsInJlcXVlc3QiLCJlbmNvZGVQYXJhbXMiLCJPYmplY3QiLCJhc3NpZ24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNyZWRlbnRpYWxzIiwidW5kZWZpbmVkIiwibWV0aG9kIiwiZmV0Y2giLCJuYXZpZ2F0b3IiLCJzZW5kQmVhY29uIiwicGFyYW1zIiwiaGFzUGFyYW0iLCJpbmRleE9mIiwic2VhcmNoUXVlcnkiLCJrZXkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJMSUJfVkVSU0lPTiIsIkFQSV9CQVNFX1VSTCIsIkNPTVBJTEVEX1RFTVBMQVRFU19VUkwiLCJBTkFMWVRJQ1NfQkFTRV9VUkwiLCJTZWFyY2hQYXJhbXMiLCJfcGFyYW1zIiwid2luZG93IiwiVVJMU2VhcmNoUGFyYW1zIiwicGFyc2UiLCJzZWFyY2giLCJzbGljZSIsImVuY29kZWRQYXJhbXMiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJrZXlWYWwiLCJkZWNvZGUiLCJxdWVyeSIsIlN0cmluZyIsIm5hbWUiLCJ2YWx1ZSIsInN0cmluZyIsInB1c2giLCJlbmNvZGUiLCJqb2luIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmVwbGFjZSIsIm1hdGNoIiwiQXBpUmVxdWVzdCIsIl9yZXF1ZXN0ZXIiLCJfYmFzZVVybCIsImJhc2VVcmwiLCJfZW5kcG9pbnQiLCJlbmRwb2ludCIsIl9hcGlLZXkiLCJhcGlLZXkiLCJfdmVyc2lvbiIsInZlcnNpb24iLCJnZXQiLCJwb3N0IiwiYmFzZVBhcmFtcyIsInVybFBhcmFtcyIsImxvY2F0aW9uIiwidG9TdHJpbmciLCJoYXMiLCJrZXlzIiwiZm9yRWFjaCIsIkFuc3dlcnNCYXNlRXJyb3IiLCJlcnJvckNvZGUiLCJtZXNzYWdlIiwiYm91bmRhcnkiLCJjYXVzZWRCeSIsImVycm9yTWVzc2FnZSIsInJlcG9ydGVkIiwiYnVpbHRpbkVycm9yIiwiZXJyb3IiLCJBbnN3ZXJzQmFzaWNFcnJvciIsInN0YWNrIiwiRXJyb3IiLCJBbnN3ZXJzQ29tcG9uZW50RXJyb3IiLCJjb21wb25lbnQiLCJBbnN3ZXJzRW5kcG9pbnRFcnJvciIsIkFuc3dlcnNTdG9yYWdlRXJyb3IiLCJzdG9yYWdlS2V5IiwiQW5zd2Vyc0FuYWx5dGljc0Vycm9yIiwiZXZlbnQiLCJTZWFyY2hBcGkiLCJhbnN3ZXJzS2V5IiwiX2Fuc3dlcnNLZXkiLCJsb2NhbGUiLCJfbG9jYWxlIiwicXVlcnlTdHJpbmciLCJ2ZXJ0aWNhbEtleSIsImZpbHRlciIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJBdXRvQ29tcGxldGVEYXRhIiwic2VjdGlvbnMiLCJxdWVyeUlkIiwiZnJlZXplIiwibWFwIiwicyIsImxhYmVsIiwicmVzdWx0cyIsInIiLCJBdXRvQ29tcGxldGVSZXN1bHQiLCJoaWdobGlnaHRlZFZhbHVlIiwiaGlnaGxpZ2h0IiwibWF0Y2hlZFN1YnN0cmluZ3MiLCJzaG9ydFZhbHVlIiwidmFsIiwic29ydCIsImEiLCJiIiwib2Zmc2V0IiwibmV4dFN0YXJ0IiwiaiIsInN0YXJ0IiwiTnVtYmVyIiwiZW5kIiwiQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyIiwibW9kdWxlSWQiLCJmcm9tIiwiQXV0b0NvbXBsZXRlQXBpIiwiaW5wdXQiLCJiYXJLZXkiLCJjYXRjaCIsInZlcnRpY2FsIiwidW5pdmVyc2FsIiwiUmVzdWx0IiwicmVzdWx0c0RhdGEiLCJQUkVfU0VBUkNIIiwiU0VBUkNIX0xPQURJTkciLCJTRUFSQ0hfQ09NUExFVEUiLCJTZWN0aW9uIiwic2VhcmNoU3RhdGUiLCJTZWFyY2hTdGF0ZXMiLCJ2ZXJ0aWNhbENvbmZpZ0lkIiwicmVzdWx0c0NvdW50IiwiZW5jb2RlZFN0YXRlIiwiYXBwbGllZFF1ZXJ5RmlsdGVycyIsIkFwcGxpZWRRdWVyeUZpbHRlciIsImZhY2V0cyIsInBhcnNlTWFwIiwidmVydGljYWxVUkwiLCJtYXBNYXJrZXJzIiwiY2VudGVyQ29vcmRpbmF0ZXMiLCJyZXN1bHQiLCJ5ZXh0RGlzcGxheUNvb3JkaW5hdGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIml0ZW0iLCJtb2R1bGVzIiwidXJscyIsIkFycmF5IiwiaXNBcnJheSIsImFwcGxpZWRRdWVyeUZpbHRlciIsImRpc3BsYXlLZXkiLCJkaXNwbGF5VmFsdWUiLCJmaWx0ZXJzIiwiVW5pdmVyc2FsUmVzdWx0cyIsIkRpcmVjdEFuc3dlciIsImRpcmVjdEFuc3dlciIsIk5hdmlnYXRpb24iLCJ0YWJPcmRlciIsIm5hdiIsIlZlcnRpY2FsUmVzdWx0cyIsIk5BVklHQVRJT04iLCJVTklWRVJTQUxfUkVTVUxUUyIsIlZFUlRJQ0FMX1JFU1VMVFMiLCJBVVRPQ09NUExFVEUiLCJESVJFQ1RfQU5TV0VSIiwiRklMVEVSIiwiUVVFUlkiLCJRVUVSWV9JRCIsIlNlYXJjaERhdGFUcmFuc2Zvcm1lciIsIlN0b3JhZ2VLZXlzIiwiRXZlbnRFbWl0dGVyIiwiX2xpc3RlbmVycyIsImV2dCIsImNiIiwib25jZSIsIm9uIiwibGlzdGVuZXJzIiwia2VlcCIsIk1vZHVsZURhdGEiLCJpZCIsIl9pZCIsIl9oaXN0b3J5IiwiX2RhdGEiLCJzZXQiLCJuZXdEYXRhIiwiY2FwdHVyZVByZXZpb3VzIiwiZW1pdCIsInNoaWZ0IiwicHJldmlvdXMiLCJfcHJldmlvdXMiLCJwb3AiLCJTdG9yYWdlIiwiX21vZHVsZURhdGFDb250YWluZXIiLCJfZnV0dXJlTGlzdGVuZXJzIiwiX2luaXREYXRhQ29udGFpbmVyIiwiX2FwcGx5RnV0dXJlTGlzdGVuZXJzIiwicmF3IiwiZGF0YUtleSIsInN0YXJ0c1dpdGgiLCJtb2R1bGVEYXRhIiwib2ZmIiwiZnV0dXJlcyIsImZ1dHVyZSIsIkNvcmUiLCJzdG9yYWdlIiwiX3NlYXJjaGVyIiwiX2F1dG9Db21wbGV0ZSIsInNlYXJjaExvYWRpbmciLCJ2ZXJ0aWNhbFF1ZXJ5IiwidHJhbnNmb3JtVmVydGljYWwiLCJ0cmFuc2Zvcm0iLCJuYW1lc3BhY2UiLCJxdWVyeVVuaXZlcnNhbCIsInF1ZXJ5VmVydGljYWwiLCJxdWVyeUZpbHRlciIsIkNvbXBvbmVudE1hbmFnZXIiLCJzZXRJbnN0YW5jZSIsImdldEluc3RhbmNlIiwiX2NvbXBvbmVudFJlZ2lzdHJ5IiwiX2FjdGl2ZUNvbXBvbmVudHMiLCJfY29yZSIsIl9yZW5kZXJlciIsIl9hbmFseXRpY3NSZXBvcnRlciIsInJlbmRlcmVyIiwiY29yZSIsInJlcG9ydGVyIiwiY29tcG9uZW50Q2xhenoiLCJ0eXBlIiwiY29tcG9uZW50VHlwZSIsImFuYWx5dGljc1JlcG9ydGVyIiwiY29tcG9uZW50TWFuYWdlciIsImNvbXBvbmVudENsYXNzIiwiYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkIiwic29tZSIsImMiLCJpbml0Iiwic2V0U3RhdGUiLCJmaW5kIiwiY29uc3RydWN0b3IiLCJpbnN0YW5jZSIsIlJlbmRlcmVyIiwidGVtcGxhdGUiLCJIYW5kbGViYXJzUmVuZGVyZXIiLCJ0ZW1wbGF0ZXMiLCJfaGFuZGxlYmFycyIsIl9oYiIsIl90ZW1wbGF0ZXMiLCJfcmVnaXN0ZXJDdXN0b21IZWxwZXJzIiwicmVnaXN0ZXJIZWxwZXIiLCJjb21waWxlIiwiY29uZmlnIiwidGVtcGxhdGVOYW1lIiwiZSIsImFyZzEiLCJhcmcyIiwib3B0aW9ucyIsImZuIiwiaW52ZXJzZSIsInBob25lTnVtYmVyU3RyaW5nIiwiY2xlYW5lZCIsImludGxDb2RlIiwiYXJncyIsImFyZ3VtZW50cyIsInJvb3QiLCJ2IiwiUmVuZGVyZXJzIiwiU09ZIiwiSGFuZGxlYmFycyIsImRvY3VtZW50IiwiRE9NIiwiZCIsInAiLCJodG1sIiwiY29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImZyYWciLCJjcmVhdGVSYW5nZSIsImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCIsImFwcGVuZENoaWxkIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwicGFyZW50Iiwic2VsZWN0b3IiLCJIVE1MRWxlbWVudCIsIldpbmRvdyIsIkhUTUxEb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVhZHlTdGF0ZSIsImVsIiwib3B0c19kYXRhIiwibm9kZSIsInByb3BzIiwiYWRkQ2xhc3MiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJjbGFzc05hbWUiLCJjbGFzc2VzIiwibGVuIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwic3R5bGVzIiwicHJvcCIsInN0eWxlIiwiYXR0ciIsInNldEF0dHJpYnV0ZSIsInNldHRpbmdzIiwiRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3R4dCIsInRhcmdldCIsImlzRXF1YWxOb2RlIiwibWF0Y2hlcyIsInBhcmVudE5vZGUiLCJTdGF0ZSIsIl9zdGF0ZSIsIm9wdFZhbCIsIl9zZXQiLCJvcHRQcm9wIiwiQW5hbHl0aWNzRXZlbnQiLCJldmVudFR5cGUiLCJ0b1VwcGVyQ2FzZSIsIkFuYWx5dGljc1JlcG9ydGVyIiwiYnVzaW5lc3NJZCIsImdsb2JhbE9wdGlvbnMiLCJfYnVzaW5lc3NJZCIsIl9nbG9iYWxPcHRpb25zIiwic2V0UXVlcnlJZCIsImFkZE9wdGlvbnMiLCJiZWFjb24iLCJ0b0FwaUV2ZW50IiwiQ29tcG9uZW50IiwiX2NvbmZpZyIsIl90eXBlIiwiX3BhcmVudCIsIl9jaGlsZHJlbiIsInN0YXRlIiwiX2FuYWx5dGljc09wdGlvbnMiLCJhbmFseXRpY3NPcHRpb25zIiwiX2NvbnRhaW5lciIsImNyZWF0ZUVsIiwiY2xhc3MiLCJzdWJzdHJpbmciLCJhcHBlbmQiLCJfY2xhc3NOYW1lIiwiX3JlbmRlciIsInJlbmRlciIsIl90ZW1wbGF0ZSIsIl90ZW1wbGF0ZU5hbWUiLCJfaXNNb3VudGVkIiwidHJhbnNmb3JtRGF0YSIsIm9uQ3JlYXRlIiwib25Nb3VudCIsIm9uVXBkYXRlIiwibW91bnQiLCJuZXdTdGF0ZSIsImNoaWxkQ29tcG9uZW50IiwiY3JlYXRlIiwiX3BhcmVudE9wdHMiLCJlbXB0eSIsInVuTW91bnQiLCJiZWZvcmVNb3VudCIsImFzSlNPTiIsIl9vbk1vdW50IiwiZG9tSG9va3MiLCJxdWVyeUFsbCIsIl9jcmVhdGVBbmFseXRpY3NIb29rIiwiYmluZCIsImNoaWxkIiwiYmVmb3JlUmVuZGVyIiwiZG9tQ29tcG9uZW50cyIsIl9jcmVhdGVTdWJjb21wb25lbnQiLCJhZnRlclJlbmRlciIsImRvbUNvbXBvbmVudCIsImRhdGFzZXQiLCJjaGlsZERhdGEiLCJhZGRDaGlsZCIsImNoaWxkSFRNTCIsImlzQW5hbHl0aWNzQXR0YWNoZWQiLCJldmVudHR5cGUiLCJldmVudGxhYmVsIiwiZXZlbnRvcHRpb25zIiwicmVwb3J0IiwiVGFiIiwiY29uZmlnSWQiLCJpc0ZpcnN0IiwiaXNBY3RpdmUiLCJ0YWJzQ29uZmlnIiwidGFicyIsInRhYiIsIk5hdmlnYXRpb25Db21wb25lbnQiLCJfdGFicyIsIl90YWJPcmRlciIsImdldERlZmF1bHRUYWJPcmRlciIsImdldFVybFBhcmFtcyIsIm1lcmdlVGFiT3JkZXIiLCJnZW5lcmF0ZVRhYlVybCIsImluY2x1ZGVzIiwidW5zaGlmdCIsIm90aGVyVGFiT3JkZXIiLCJ0YWJDb25maWciLCJGaWx0ZXIiLCJyZXNwb25zZUZpbHRlciIsImdyb3VwcyIsImdyb3VwRmlsdGVycyIsImZpZWxkIiwib3IiLCJhbmQiLCJfZnJvbU1hdGNoZXIiLCJtaW4iLCJtYXgiLCJncmVhdGVyVGhhbkVxdWFsIiwibGVzc1RoYW5FcXVhbCIsIm1hdGNoZXIiLCJTZWFyY2hDb21wb25lbnQiLCJfYmFyS2V5IiwiX3ZlcnRpY2FsS2V5IiwiX2Zvcm1FbCIsImZvcm1TZWxlY3RvciIsIl9pbnB1dEVsIiwiaW5wdXRFbCIsInRpdGxlIiwibGFiZWxUZXh0Iiwic3VibWl0VGV4dCIsInN1Ym1pdEljb24iLCJwcm9tcHRIZWFkZXIiLCJhdXRvRm9jdXMiLCJyZWRpcmVjdFVybCIsIl9zZWFyY2hDb29sZG93biIsInNlYXJjaENvb2xkb3duIiwic2V0UXVlcnkiLCJiaW5kQnJvd3Nlckhpc3RvcnkiLCJpbml0U2VhcmNoIiwiaW5pdEF1dG9Db21wbGV0ZSIsImZvY3VzIiwiZm9ybSIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJpbnB1dFNlbGVjdG9yIiwib3JpZ2luYWxRdWVyeSIsIm9uU3VibWl0IiwidHJpZ2dlciIsIl90aHJvdHRsZWQiLCJzZXRUaW1lb3V0IiwiYWxsRmlsdGVycyIsImdldEFsbCIsInRvdGFsRmlsdGVyIiwidmVydGljYWxTZWFyY2giLCJnZXRBY3RpdmVDb21wb25lbnQiLCJnZXRTdGF0ZSIsIkZpbHRlclNlYXJjaENvbXBvbmVudCIsImlucHV0S2V5Iiwic2VhcmNoVGV4dCIsInNldEZpbHRlciIsImZyb21SZXNwb25zZSIsImlzRmlsdGVyU2VhcmNoIiwib3JpZ2luYWxGaWx0ZXIiLCJfc2F2ZVF1ZXJ5QW5kRmlsdGVyIiwiS2V5cyIsIkJBQ0tTUEFDRSIsIlRBQiIsIkVOVEVSIiwiU0hJRlQiLCJDVFJMIiwiQUxUIiwiRVNDQVBFIiwiTEVGVCIsIlJJR0hUIiwiVVAiLCJET1dOIiwiTEVGVF9PU19LRVkiLCJSSUdIVF9PU19LRVkiLCJTRUxFQ1RfS0VZIiwiQXV0b0NvbXBsZXRlQ29tcG9uZW50IiwiX2F1dG9jb21wbGV0ZUVscyIsImF1dG9Db21wbGV0ZUVscyIsIl9vcmlnaW5hbFF1ZXJ5IiwiX3NlY3Rpb25JbmRleCIsIl9yZXN1bHRJbmRleCIsIl9vblN1Ym1pdCIsInNlY3Rpb25JbmRleCIsInJlc3VsdEluZGV4IiwicXVlcnlJbnB1dCIsImNsb3NlIiwicmVzZXQiLCJhdXRvQ29tcGxldGUiLCJoYW5kbGVOYXZpZ2F0ZVJlc3VsdHMiLCJrZXlDb2RlIiwiaGFuZGxlU3VibWl0UmVzdWx0IiwiZGVsZWdhdGUiLCJzaG9ydCIsInVwZGF0ZVF1ZXJ5IiwiaGFuZGxlVHlwaW5nIiwidXBkYXRlU3RhdGUiLCJvcHRWYWx1ZSIsInF1ZXJ5RWwiLCJpZ25vcmVkS2V5cyIsImF1dG9Db21wbGV0ZUZpbHRlciIsImF1dG9Db21wbGV0ZVZlcnRpY2FsIiwiYXV0b0NvbXBsZXRlVW5pdmVyc2FsIiwiU1VQUE9SVEVEX0NPTlRST0xTIiwiRmlsdGVyT3B0aW9uc0NvbXBvbmVudCIsImNvbnRyb2wiLCJfb3B0aW9ucyIsIm8iLCJjaGVja2VkIiwiX2NvbnRyb2wiLCJfb3B0aW9uU2VsZWN0b3IiLCJvcHRpb25TZWxlY3RvciIsIl9zdG9yZU9uQ2hhbmdlIiwic3RvcmVPbkNoYW5nZSIsIl9vbkNoYW5nZSIsIm9uQ2hhbmdlIiwiX2xhYmVsIiwiX3VwZGF0ZU9wdGlvbiIsInBhcnNlSW50IiwiaW5kZXgiLCJfYnVpbGRGaWx0ZXIiLCJlbGVtZW50cyIsIl9hcHBseUZpbHRlciIsImVxdWFsIiwiZ3JvdXAiLCJGaWx0ZXJCb3hDb21wb25lbnQiLCJfZmlsdGVyQ29uZmlncyIsIl9zZWFyY2hPbkNoYW5nZSIsInNlYXJjaE9uQ2hhbmdlIiwiX2FwcGx5QnV0dG9uU2VsZWN0b3IiLCJhcHBseUJ1dHRvblNlbGVjdG9yIiwiX2ZpbHRlckNvbXBvbmVudHMiLCJfZmlsdGVycyIsImZpbHRlckNvbmZpZ3MiLCJzaG93QXBwbHlCdXR0b24iLCJmIiwib25GaWx0ZXJDaGFuZ2UiLCJidXR0b24iLCJfc2F2ZUZpbHRlcnNUb1N0b3JhZ2UiLCJfc2VhcmNoIiwidmFsaWRGaWx0ZXJzIiwiY29tYmluZWRGaWx0ZXIiLCJEaXJlY3RBbnN3ZXJDb21wb25lbnQiLCJoYXNTdGF0ZSIsIlJlc3VsdHNJdGVtQ29tcG9uZW50IiwiTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCIsIkV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQiLCJQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCIsIk1hcFByb3ZpZGVyIiwiX2hlaWdodCIsImhlaWdodCIsIl93aWR0aCIsIndpZHRoIiwiX3pvb20iLCJ6b29tIiwiX21hcCIsIl9pc0xvYWRlZCIsIl9vbkxvYWRlZCIsIm9uTG9hZGVkIiwiX3BpbkNvbmZpZyIsInBpbiIsIkRFRkFVTFRfUElOX0NPTkZJRyIsImlzTG9hZGVkIiwibWFwRGF0YSIsImljb24iLCJhbmNob3IiLCJzdmciLCJzY2FsZWRTaXplIiwibGFiZWxUeXBlIiwiR29vZ2xlTWFwUHJvdmlkZXIiLCJfY2xpZW50SWQiLCJjbGllbnRJZCIsIl9zaWduYXR1cmUiLCJzaWduYXR1cmUiLCJoYXNWYWxpZENsaWVudENyZWRlbnRpYWxzIiwib25Mb2FkIiwic2NyaXB0Iiwib25sb2FkIiwiYXN5bmMiLCJzcmMiLCJnZW5lcmF0ZUNyZWRlbnRpYWxzIiwiZ29vZ2xlTWFwTWFya2VyQ29uZmlncyIsIkdvb2dsZU1hcE1hcmtlckNvbmZpZyIsImVuY29kZWRNYXJrZXJzIiwic2VyaWFsaXplIiwiX2lzU3RhdGljIiwiY3NzIiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsImJvdW5kcyIsIkxhdExuZ0JvdW5kcyIsIm1hcmtlciIsIk1hcmtlciIsImV4dGVuZCIsInBvc2l0aW9uIiwiZml0Qm91bmRzIiwibGF0IiwibG5nIiwic2VyaWFsaXplZE1hcmtlcnMiLCJtYXJrZXJzIiwicGluQ29uZmlnIiwicGluQ29uZmlnT2JqIiwiUG9pbnQiLCJ4IiwieSIsIlNpemUiLCJ3IiwiaCIsIk1hcEJveE1hcFByb3ZpZGVyIiwibWFwYm94Z2wiLCJhY2Nlc3NUb2tlbiIsInJlbCIsIm1hcGJveE1hcE1hcmtlckNvbmZpZ3MiLCJNYXBCb3hNYXJrZXJDb25maWciLCJjZW50ZXIiLCJtYXBDZW50ZXIiLCJ3cmFwcGVyIiwiY29vcmRzIiwiTG5nTGF0Iiwic2V0TG5nTGF0IiwiYWRkVG8iLCJzdGF0aWNNYXBQaW4iLCJQcm92aWRlclR5cGVzIiwiTWFwQ29tcG9uZW50IiwiX21hcFByb3ZpZGVyIiwibWFwUHJvdmlkZXIiLCJ0b0xvd2VyQ2FzZSIsImlzU3RhdGljIiwiZ2V0UHJvdmlkZXJJbnN0YW5jZSIsInNldFRlbXBsYXRlIiwiZ2VuZXJhdGVTdGF0aWMiLCJsb2FkSlMiLCJSZXN1bHRUeXBlIiwiRVZFTlQiLCJMT0NBVElPTiIsIlBFT1BMRSIsIlJlc3VsdHNDb21wb25lbnQiLCJsaW1pdCIsIl9pdGVtQ29uZmlnIiwiZ2xvYmFsIiwicmVuZGVySXRlbSIsIml0ZW1UZW1wbGF0ZSIsImNvbmZpZ3VyZUl0ZW0iLCJpc1ByZVNlYXJjaCIsImlzU2VhcmNoTG9hZGluZyIsImlzU2VhcmNoQ29tcGxldGUiLCJpbmNsdWRlTWFwIiwibWFwQ29uZmlnIiwic2V0SXRlbVJlbmRlciIsInNldEl0ZW1UZW1wbGF0ZSIsImNsYXp6IiwiZ2V0SXRlbUNvbXBvbmVudCIsImNvbXAiLCJuZXdPcHRzIiwiZ2xvYmFsQ29uZmlnIiwiaXRlbUNvbmZpZyIsImhhc0dsb2JhbFJlbmRlciIsImhhc0dsb2JhbFRlbXBsYXRlIiwic2V0UmVuZGVyIiwiVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudCIsIl9saW1pdCIsImdldENoaWxkQ29uZmlnIiwiUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IiwiX2VtYWlsTGFiZWwiLCJlbWFpbExhYmVsIiwiX25hbWVMYWJlbCIsIm5hbWVMYWJlbCIsIl9xdWVzdGlvbkxhYmVsIiwicXVlc3Rpb25MYWJlbCIsIl9wcml2YWN5UG9saWN5TGFiZWwiLCJwcml2YWN5UG9saWN5TGFiZWwiLCJfYnV0dG9uTGFiZWwiLCJidXR0b25MYWJlbCIsImluaXRTdWJtaXQiLCJoYXNRdWVyaWVkIiwicXVlc3Rpb24iLCJDT01QT05FTlRfTUFOQUdFUiIsInJlZ2lzdGVyIiwiVGVtcGxhdGVMb2FkZXIiLCJfdGVtcGxhdGVVcmwiLCJ0ZW1wbGF0ZVVybCIsIl9pbml0IiwiZmV0Y2hUZW1wbGF0ZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiRXJyb3JSZXBvcnRlciIsImVyciIsInRvSnNvbiIsIkFuc3dlcnMiLCJjb21wb25lbnRzIiwiX29uUmVhZHkiLCJzZXRDb3JlIiwic2V0UmVuZGVyZXIiLCJzZXRBbmFseXRpY3NSZXBvcnRlciIsIm9uUmVhZHkiLCJ1c2VUZW1wbGF0ZXMiLCJ0ZW1wbGF0ZUJ1bmRsZSIsInN1cHByZXNzRXJyb3JSZXBvcnRzIiwiX2Vycm9yUmVwb3J0ZXIiLCJBTlNXRVJTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQTs7RUFFQTs7RUFFQTs7O0VBR0EsSUFBTUEsT0FBTyxHQUFHO0VBQ2RDLEVBQUFBLEdBQUcsRUFBRSxLQURTO0VBRWRDLEVBQUFBLElBQUksRUFBRSxNQUZRO0VBR2RDLEVBQUFBLEdBQUcsRUFBRSxLQUhTO0VBSWRDLEVBQUFBLE1B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