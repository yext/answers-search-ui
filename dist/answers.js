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
        })["catch"](function (error) {
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

          results.push(ResultFactory.fromGeneric(data));
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
      value: function fromGeneric(data) {
        return new Result({
          raw: data,
          title: data.name,
          details: data.description,
          link: data.website,
          id: data.id
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


        for (var _i = 0, _Object$keys = Object.keys(newData); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];

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

        for (var _i = 0, _Object$keys = Object.keys(this._moduleDataContainer); _i < _Object$keys.length; _i++) {
          var dataKey = _Object$keys[_i];

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
      _this._onMountAddition = config.onMountAddition || null;
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

        this._onMountAddition();
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
      _this._saveOnChange = config.saveOnChange || false;
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

        if (this._saveOnChange) {
          this._saveFiltersToStorage();
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
          console.log(event.target.dataset.key, event.target.value);

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

            if (typeof onLoad === 'function') {
              onLoad();
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

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, ResultsComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ResultsComponent).call(this, opts));
      _this.moduleId = StorageKeys.VERTICAL_RESULTS;
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
    /**
     * The template to render
     * @returns {string}
     * @override
     */


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
      key: "defaultTemplateName",
      value: function defaultTemplateName(config) {
        return 'questions/submission';
      }
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
  .register(FilterBoxComponent).register(FilterOptionsComponent).register(RangeFilterComponent).register(DateRangeFilterComponent) // Results Components
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2Vycy11bWQuanMiLCJzb3VyY2VzIjpbInNyYy9jb3JlL2h0dHAvaHR0cHJlcXVlc3Rlci5qcyIsInNyYy9jb3JlL2NvbnN0YW50cy5qcyIsInNyYy91aS9kb20vc2VhcmNocGFyYW1zLmpzIiwic3JjL2NvcmUvaHR0cC9hcGlyZXF1ZXN0LmpzIiwic3JjL2NvcmUvZXJyb3JzL2Vycm9ycy5qcyIsInNyYy9jb3JlL3NlYXJjaC9zZWFyY2hhcGkuanMiLCJzcmMvY29yZS9tb2RlbHMvYXV0b2NvbXBsZXRlZGF0YS5qcyIsInNyYy9jb3JlL3NlYXJjaC9hdXRvY29tcGxldGVkYXRhdHJhbnNmb3JtZXIuanMiLCJzcmMvY29yZS9zZWFyY2gvYXV0b2NvbXBsZXRlYXBpLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9zZWFyY2hzdGF0ZXMuanMiLCJzcmMvY29yZS9tb2RlbHMvcmVzdWx0LmpzIiwic3JjL2NvcmUvbW9kZWxzL3Jlc3VsdGZhY3RvcnkuanMiLCJzcmMvY29yZS9tb2RlbHMvc2VjdGlvbi5qcyIsInNyYy9jb3JlL21vZGVscy91bml2ZXJzYWxyZXN1bHRzLmpzIiwic3JjL2NvcmUvbW9kZWxzL2RpcmVjdGFuc3dlci5qcyIsInNyYy9jb3JlL21vZGVscy9uYXZpZ2F0aW9uLmpzIiwic3JjL2NvcmUvbW9kZWxzL3ZlcnRpY2FscmVzdWx0cy5qcyIsInNyYy9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMuanMiLCJzcmMvY29yZS9zZWFyY2gvc2VhcmNoZGF0YXRyYW5zZm9ybWVyLmpzIiwic3JjL2NvcmUvZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlci5qcyIsInNyYy9jb3JlL3N0b3JhZ2UvbW9kdWxlZGF0YS5qcyIsInNyYy9jb3JlL3N0b3JhZ2Uvc3RvcmFnZS5qcyIsInNyYy9jb3JlL2NvcmUuanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnRtYW5hZ2VyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9yZW5kZXJlci5qcyIsInNyYy91aS9yZW5kZXJpbmcvaGFuZGxlYmFyc3JlbmRlcmVyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9jb25zdC5qcyIsInNyYy91aS9kb20vZG9tLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc3RhdGUuanMiLCJzcmMvY29yZS9hbmFseXRpY3MvYW5hbHl0aWNzZXZlbnQuanMiLCJzcmMvY29yZS9hbmFseXRpY3MvYW5hbHl0aWNzcmVwb3J0ZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb25jb21wb25lbnQuanMiLCJzcmMvY29yZS9tb2RlbHMvZmlsdGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3NlYXJjaC9maWx0ZXJzZWFyY2hjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9zZWFyY2gvYXV0b2NvbXBsZXRlY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJib3hjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcm9wdGlvbnNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL3JhbmdlZmlsdGVyY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9kYXRlcmFuZ2VmaWx0ZXJjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL2RpcmVjdGFuc3dlcmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvcmVzdWx0c2l0ZW1jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL2xvY2F0aW9ucmVzdWx0c2l0ZW1jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL2V2ZW50cmVzdWx0c2l0ZW1jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3Blb3BsZXJlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL3Byb3ZpZGVycy9tYXBwcm92aWRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9wcm92aWRlcnMvZ29vZ2xlbWFwcHJvdmlkZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvcHJvdmlkZXJzL21hcGJveG1hcHByb3ZpZGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL21hcGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvcmVzdWx0c2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvdW5pdmVyc2FscmVzdWx0c2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3F1ZXN0aW9ucy9xdWVzdGlvbnN1Ym1pc3Npb25jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb25zdC5qcyIsInNyYy91aS9yZW5kZXJpbmcvdGVtcGxhdGVsb2FkZXIuanMiLCJzcmMvY29yZS9lcnJvcnMvZXJyb3JyZXBvcnRlci5qcyIsInNyYy9hbnN3ZXJzLXVtZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQG1vZHVsZSBIdHRwUmVxdWVzdGVyICovXG5cbi8qIGdsb2JhbCBmZXRjaCAqL1xuXG4vKipcbiAqIFR5cGVzIG9mIEhUVFAgcmVxdWVzdHNcbiAqL1xuY29uc3QgTWV0aG9kcyA9IHtcbiAgR0VUOiAnZ2V0JyxcbiAgUE9TVDogJ3Bvc3QnLFxuICBQVVQ6ICdwdXQnLFxuICBERUxFVEU6ICdkZWxldGUnXG59O1xuXG4vKipcbiAqIEh0dHBSZXF1ZXN0ZXIgaXMgYSB3cmFwcGVyIGFyb3VuZCB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uIG9mIEFKQVhcbiAqIHJlbGF0ZWQgbWF0dGVycy4gSXQncyB1c2VkIHRvIG1ha2UgYWxsIHR5cGVzIG9mIG5ldHdvcmsgcmVxdWVzdHNcbiAqIGFuZCBleHBvc2VzIGEgcHJvbWlzZSBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0dHBSZXF1ZXN0ZXIge1xuICAvKipcbiAgICogQ3JlYXRlIGEgR0VUIEhUVFAgcmVxdWVzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gcHJvdmlkZSAoZ2V0cyBlbmNvZGVkIGludG8gdGhlIFVSTClcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgQ29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICovXG4gIGdldCAodXJsLCBkYXRhLCBvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChNZXRob2RzLkdFVCwgdGhpcy5lbmNvZGVQYXJhbXModXJsLCBkYXRhKSwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgUE9TVCBIVFRQIHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHByb3ZpZGUgKGdldHMgZW5jb2RlZCBpbnRvIHRoZSBVUkwpXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIENvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAqL1xuICBwb3N0ICh1cmwsIGRhdGEsIG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxuICAgICAgTWV0aG9kcy5QT1NULFxuICAgICAgdXJsLFxuICAgICAgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICBjcmVkZW50aWFsczogdW5kZWZpbmVkXG4gICAgICB9LCBvcHRzKVxuICAgICk7XG4gIH1cblxuICByZXF1ZXN0IChtZXRob2QsIHVybCwgb3B0cykge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgbWV0aG9kLFxuICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICAgIH0sIG9wdHMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgYmVhY29uIHRvIHRoZSBwcm92aWRlZCB1cmwgd2hpY2ggd2lsbCBzZW5kIGEgbm9uLWJsb2NraW5nIHJlcXVlc3RcbiAgICogdG8gdGhlIHNlcnZlciB0aGF0IGlzIGd1YXJhbnRlZWQgdG8gc2VuZCBiZWZvcmUgcGFnZSBsb2FkLiBObyByZXNwb25zZSBpcyByZXR1cm5lZCxcbiAgICogc28gYmVhY29ucyBhcmUgcHJpbWFyaWx5IHVzZWQgZm9yIGFuYWx5dGljcyByZXBvcnRpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBzZW5kIHRoZSBiZWFjb24gdG9cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgVGhlIGRhdGEgcGF5bG9hZCB0byBzZW5kIGluIHRoZSBiZWFjb25cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgcmVxdWVzdCBpcyBzdWNjZXNzZnVsbHkgcXVldWVkXG4gICAqL1xuICBiZWFjb24gKHVybCwgZGF0YSkge1xuICAgIHJldHVybiBuYXZpZ2F0b3Iuc2VuZEJlYWNvbih1cmwsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgfVxuXG4gIGVuY29kZVBhcmFtcyAodXJsLCBwYXJhbXMpIHtcbiAgICBsZXQgaGFzUGFyYW0gPSB1cmwuaW5kZXhPZignPycpID4gLTE7XG5cbiAgICBsZXQgc2VhcmNoUXVlcnkgPSAnJztcbiAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICBpZiAoIWhhc1BhcmFtKSB7XG4gICAgICAgIGhhc1BhcmFtID0gdHJ1ZTtcbiAgICAgICAgc2VhcmNoUXVlcnkgKz0gJz8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VhcmNoUXVlcnkgKz0gJyYnO1xuICAgICAgfVxuXG4gICAgICBzZWFyY2hRdWVyeSArPSBrZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gdXJsICsgc2VhcmNoUXVlcnk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbi8qKiBUaGUgY3VycmVudCBsaWIgdmVyc2lvbiwgcmVwb3J0ZWQgd2l0aCBlcnJvcnMgYW5kIGFuYWx5dGljcyAqL1xuZXhwb3J0IGNvbnN0IExJQl9WRVJTSU9OID0gJ3YwLjcuNSc7XG5cbi8qKiBUaGUgYmFzZSB1cmwgZm9yIHRoZSBhcGkgYmFja2VuZCAqL1xuZXhwb3J0IGNvbnN0IEFQSV9CQVNFX1VSTCA9ICdodHRwczovL2xpdmVhcGkueWV4dC5jb20nO1xuXG4vKiogVGhlIGRlZmF1bHQgdXJsIGZvciBjb21waWxlZCBjb21wb25lbnQgdGVtcGxhdGVzICovXG5leHBvcnQgY29uc3QgQ09NUElMRURfVEVNUExBVEVTX1VSTCA9ICdodHRwczovL2Fzc2V0cy5zaXRlc2Nkbi5uZXQvYW5zd2Vycy9hbnN3ZXJzdGVtcGxhdGVzLmNvbXBpbGVkLm1pbi5qcyc7XG5cbi8qKiBUaGUgYmFzZSB1cmwgZm9yIHRoZSBhbmFseXRpY3MgYmFja2VuZCAgKi9cbmV4cG9ydCBjb25zdCBBTkFMWVRJQ1NfQkFTRV9VUkwgPSAnaHR0cHM6Ly9yZWFsdGltZWFuYWx5dGljcy55ZXh0LmNvbSc7XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hQYXJhbXMgKi9cblxuLyogZ2xvYmFsIHdpbmRvdyAqL1xuXG4vKipcbiAqIFNlYXJjaFBhcmFtcyBpcyBhIGNsYXNzIHRvIGdldCB0aGUgc2VhcmNoIHBhcmFtcyBpbiBhIFVSTC5cbiAqIEl0IGlzIGEgcmVwbGFjZW1lbnQgZm9yIFVSTC5zZWFyY2hQYXJhbXMgYW5kIFVSTFNlYXJjaFBhcmFtcyBmb3IgYnJvd3NlcnMgbGlrZSBJRTExXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0cnVjdG9yICh1cmwpIHtcbiAgICAvKipcbiAgICAgKiBNYXBwaW5nIG9mIGFsbCBxdWVyeSBwYXJhbWV0ZXJzIGluIHRoZSBnaXZlbiB1cmwsIHF1ZXJ5IHBhcmFtIC0+IHZhbHVlXG4gICAgICogT25seSB1c2VkIGlmIFVSTFNlYXJjaFBhcmFtcyBkb2VzIG5vdCBleGlzdCBpbiB0aGUgd2luZG93XG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3BhcmFtcyA9IHt9O1xuXG4gICAgaWYgKHdpbmRvdyAmJiB3aW5kb3cuVVJMU2VhcmNoUGFyYW1zKSB7XG4gICAgICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyh1cmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wYXJhbXMgPSB0aGlzLnBhcnNlKHVybCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHBhcnNlIGNyZWF0ZXMgYSBtYXBwaW5nIG9mIGFsbCBxdWVyeSBwYXJhbXMgaW4gYSBnaXZlbiB1cmxcbiAgICogVGhlIHF1ZXJ5IHBhcmFtIHZhbHVlcyBhcmUgZGVjb2RlZCBiZWZvcmUgYmVpbmcgcHV0IGluIHRoZSBtYXBcbiAgICogVGhyZWUgdHlwZXMgb2YgaW5wdXQgYXJlIHN1cHBvcnRlZFxuICAgKiAgICgxKSBmdWxsIFVSTCBlLmcuIGh0dHA6Ly93d3cueWV4dC5jb20vP3E9aGVsbG9cbiAgICogICAoMikgcGFyYW1zIHdpdGggPyBlLmcuID9xPWhlbGxvXG4gICAqICAgKDEpIHBhcmFtcyB3aXRob3V0ID8gZS5nLiBxPWhlbGxvXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybFxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBtYXBwaW5nIGZyb20gcXVlcnkgcGFyYW0gLT4gdmFsdWUgd2hlcmUgdmFsdWUgaXMgJycgaWYgbm8gdmFsdWUgaXMgcHJvdmlkZWRcbiAgICovXG4gIHBhcnNlICh1cmwpIHtcbiAgICBsZXQgcGFyYW1zID0ge307XG4gICAgbGV0IHNlYXJjaCA9IHVybDtcblxuICAgIGlmIChzZWFyY2ggPT09ICcnKSB7XG4gICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cblxuICAgIC8vIE5vcm1hbGl6ZSBhbGwgdXJsIGlucHV0cyB0byBzdHJpbmcgb2YgcXVlcnkgcGFyYW1zIHNlcGFyYXRlZCBieSAmXG4gICAgaWYgKHVybC5pbmRleE9mKCc/JykgPiAtMSkge1xuICAgICAgc2VhcmNoID0gdXJsLnNsaWNlKHVybC5pbmRleE9mKCc/JykgKyAxKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbmNvZGVkUGFyYW1zID0gc2VhcmNoLnNwbGl0KCcmJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmNvZGVkUGFyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrZXlWYWwgPSBlbmNvZGVkUGFyYW1zW2ldLnNwbGl0KCc9Jyk7XG4gICAgICBpZiAoa2V5VmFsLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcGFyYW1zW2tleVZhbFswXV0gPSBTZWFyY2hQYXJhbXMuZGVjb2RlKGtleVZhbFsxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXNba2V5VmFsWzBdXSA9ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJhbXM7XG4gIH1cblxuICAvKipcbiAgICogZ2V0IHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBxdWVyeSBwYXJhbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgdGhlIHF1ZXJ5IHBhcmFtIGtleSB0byBnZXQgdGhlIHZhbHVlIG9mXG4gICAqIEByZXR1cm4ge3N0cmluZ30gcGFyYW0gdmFsdWUsIG51bGwgb3RoZXJ3aXNlXG4gICAqL1xuICBnZXQgKHF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl9wYXJhbXNbU3RyaW5nKHF1ZXJ5KV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtc1txdWVyeV07XG4gIH1cblxuICAvKipcbiAgICogc2V0IGNoYW5nZXMgdGhlIHZhbHVlIG9mIGEgZ2l2ZW4gcXVlcnkgcGFyYW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgdGhlIHF1ZXJ5IHBhcmFtIGtleVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgdGhlIHZhbHVlIG9mIHRoZSBxdWVyeSBwYXJhbSB1cGRhdGUgd2l0aFxuICAgKi9cbiAgc2V0IChuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMuX3BhcmFtc1tTdHJpbmcobmFtZSldID0gU3RyaW5nKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoYXMgY2hlY2tzIHRvIHNlZSBpZiB0aGUgZ2l2ZW4gcXVlcnkgcGFyYW0ga2V5IGV4aXN0cyBpbiB0aGUgcGFyYW1zIG9iamVjdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgdGhlIHF1ZXJ5IHBhcmFtIHRvIGNoZWNrXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIHF1ZXJ5IHBhcmFtIGlzIGluIHRoZSBwYXJhbXMgb2JqZWN0LCBmYWxzZSBvL3dcbiAgICovXG4gIGhhcyAocXVlcnkpIHtcbiAgICByZXR1cm4gcXVlcnkgaW4gdGhpcy5fcGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIHRvU3RyaW5nIHJldHVybnMgYSB1cmwgd2l0aCBhbGwgdGhlIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgcGFyYW1zIG9iamVjdCAod2l0aG91dCBhID8pXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvU3RyaW5nICgpIHtcbiAgICBsZXQgc3RyaW5nID0gW107XG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuX3BhcmFtcykge1xuICAgICAgc3RyaW5nLnB1c2goYCR7a2V5fT0ke1NlYXJjaFBhcmFtcy5lbmNvZGUodGhpcy5fcGFyYW1zW2tleV0pfWApO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nLmpvaW4oJyYnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBkZWNvZGUgcmV0dXJucyB0aGUgZGVjb2RlZCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyB0byBkZWNvZGVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGRlY29kZSAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHJpbmcucmVwbGFjZSgvWyArXS9nLCAnJTIwJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIGRlY29kZSByZXR1cm5zIHRoZSBlbmNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBzdHJpbmcgKGUuZy4gKyAtPiAlMkIpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyB0byBlbmNvZGVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGVuY29kZSAoc3RyaW5nKSB7XG4gICAgbGV0IHJlcGxhY2UgPSB7XG4gICAgICAnISc6ICclMjEnLFxuICAgICAgXCInXCI6ICclMjcnLFxuICAgICAgJygnOiAnJTI4JyxcbiAgICAgICcpJzogJyUyOScsXG4gICAgICAnJTIwJzogJysnXG4gICAgfTtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZykucmVwbGFjZSgvWyEnKCldfCUyMC9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiByZXBsYWNlW21hdGNoXTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXBpUmVxdWVzdCAqL1xuXG5pbXBvcnQgSHR0cFJlcXVlc3RlciBmcm9tICcuL2h0dHByZXF1ZXN0ZXInO1xuaW1wb3J0IHsgQVBJX0JBU0VfVVJMIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vdWkvZG9tL3NlYXJjaHBhcmFtcyc7IC8vIFRPRE8gaWRlYWxseSB0aGlzIHdvdWxkIGJlIHBhc3NlZCBpbiBhcyBhIHBhcmFtXG5cbi8qKlxuICogQXBpUmVxdWVzdCBpcyB0aGUgYmFzZSBjbGFzcyBmb3IgYWxsIEFQSSByZXF1ZXN0cy5cbiAqIEl0IGRlZmluZXMgYWxsIG9mIHRoZSBjb3JlIHByb3BlcnRpZXMgcmVxdWlyZWQgdG8gbWFrZSBhIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpUmVxdWVzdCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiB1c2VkIGZvciBtYWtpbmcgbmV0d29yayByZXF1ZXN0IGFuZCBoYW5kbGluZyBlcnJvcnNcbiAgICAgKiBAdHlwZSB7SHR0cFJlcXVlc3Rlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3JlcXVlc3RlciA9IG5ldyBIdHRwUmVxdWVzdGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYmFzZVVybCB0byB1c2UgZm9yIG1ha2luZyBhIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYmFzZVVybCA9IG9wdHMuYmFzZVVybCB8fCBBUElfQkFTRV9VUkw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZW5kcG9pbnQgdG8gdXNlIGluIHRoZSB1cmwgKGFwcGVuZGVkIHRvIHRoZSB7YmFzZVVybH0pXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2VuZHBvaW50ID0gb3B0cy5lbmRwb2ludCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnNpb24gb2YgdGhlIEFQSSB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJzaW9uID0gb3B0cy52ZXJzaW9uIHx8IDIwMTkwMTAxO1xuXG4gICAgLyoqXG4gICAgICogQWRkaXRpb25hbCBkYXRhIHBhcmFtcyB0aGF0IGFyZSBzZW50IGFsb25nIHdpdGggdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcGFyYW1zID0gb3B0cy5wYXJhbXMgfHwge307XG4gIH1cblxuICAvKipcbiAgICogZ2V0IGNyZWF0ZXMgYSBuZXcgYEdFVGAgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSByZXF1ZXN0IGNsYXNzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZ2V0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdGVyLmdldCh0aGlzLl9iYXNlVXJsICsgdGhpcy5fZW5kcG9pbnQsIHRoaXMucGFyYW1zKHRoaXMuX3BhcmFtcykpO1xuICB9XG5cbiAgcG9zdCAob3B0cykge1xuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0ZXIucG9zdCh0aGlzLl9iYXNlVXJsICsgdGhpcy5fZW5kcG9pbnQsIHRoaXMucGFyYW1zKHRoaXMuX3BhcmFtcyksIG9wdHMpO1xuICB9XG5cbiAgcGFyYW1zIChwYXJhbXMpIHtcbiAgICB2YXIgYmFzZVBhcmFtcyA9IHtcbiAgICAgICd2JzogdGhpcy5fdmVyc2lvbixcbiAgICAgICdhcGlfa2V5JzogdGhpcy5fYXBpS2V5XG4gICAgfTtcblxuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKCkpO1xuXG4gICAgaWYgKHVybFBhcmFtcy5oYXMoJ2JldGEnKSkge1xuICAgICAgYmFzZVBhcmFtc1snYmV0YSddID0gdXJsUGFyYW1zLmdldCgnYmV0YScpO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbnkgcGFyYW1hdGVycyB3aG9zIHZhbHVlIGlzIGB1bmRlZmluZWRgLlxuICAgIC8vXG4gICAgLy8gTk9URShiaWxseSkgUHJvYmFibHkgYmV0dGVyIHRvIGJlIGV4cGxpY2l0IGFib3V0IGhvdyB0byBoYW5kbGUgdGhpcyBhdCB0aGUgcmVxdWVzdCBidWlsZGluZyBsZXZlbCxcbiAgICAvLyBidXQgSSBjYW4ndCBzZWUgYW55IGNhc2VzIHdoZXJlIHdlJ2QgZXZlciB3YW50IHRvIHNlbmQgJ3VuZGVmaW5lZCcgYXMgYSB2YWx1ZSB0byB0aGUgc2VydmVyLlxuICAgIC8vIFNvIGl0J3MgcHJvYmFibHkgZmluZSB0byAnY2xlYW4nIHRoZSBwYXJhbXMgb2JqZWN0IGhlcmVcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmIChwYXJhbXNba2V5XSA9PT0gdW5kZWZpbmVkIHx8IHBhcmFtc1trZXldID09PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBwYXJhbXNba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGJhc2VQYXJhbXMsIHBhcmFtcyB8fCB7fSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEVycm9ycyAqL1xuXG4vKipcbiAqIEFuc3dlcnNCYXNlRXJyb3IgaXMgYW4gZXh0ZW5zaW9uIG9mIHRoZSBiYXNlIEVycm9yIG9iamVjdC5cbiAqIFRoaXMgaXMgdGhlIG9iamVjdCB0aGF0IGlzIHVzZWQgdG8gd2hlbiByZXBvcnRpbmcgdG8gdGhlIHNlcnZlci5cbiAqIEBleHRlbmRzIEVycm9yXG4gKlxuICogRXJyb3IgY29kZXMgZmFsbCBpbnRvIG9uZSBvZiBmb3VyIGNhdGVnb3JpZXM6XG4gKiAxWFggZXJyb3JzOiBCYXNpYyBlcnJvcnNcbiAqIDJYWCBlcnJvcnM6IFVJIGVycm9yc1xuICogM1hYIGVycm9yczogRW5kcG9pbnQgZXJyb3JzXG4gKiA0WFggZXJyb3JzOiBDb3JlIGVycm9yc1xuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0Jhc2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IgKGVycm9yQ29kZSwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5lcnJvckNvZGUgPSBlcnJvckNvZGU7XG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuYm91bmRhcnkgPSBib3VuZGFyeTtcbiAgICB0aGlzLmNhdXNlZEJ5ID0gY2F1c2VkQnk7XG4gICAgdGhpcy5yZXBvcnRlZCA9IGZhbHNlO1xuICB9XG5cbiAgdG9Kc29uICgpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbSAoYnVpbHRpbkVycm9yLCBib3VuZGFyeSkge1xuICAgIGNvbnN0IGVycm9yID0gbmV3IEFuc3dlcnNCYXNpY0Vycm9yKGJ1aWx0aW5FcnJvci5tZXNzYWdlLCBib3VuZGFyeSk7XG4gICAgZXJyb3Iuc3RhY2sgPSBidWlsdGluRXJyb3Iuc3RhY2s7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc0Jhc2ljRXJyb3IgaXMgYSB3cmFwcGVyIGFyb3VuZCBhbGwgdGhlIGJ1aWx0LWluIGVycm9yc1xuICogZS5nLiB1bmRlZmluZWQgdmFyaWFibGVzLCBpbmNvcnJlY3Qgc3ludGF4LCB0eXBlcywgbWlzc2luZyBtZXRob2RzLCBldGMuXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQmFzaWNFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoMTAwLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc1VpRXJyb3IgdXNlZCBmb3IgdGhpbmdzIGxpa2UgRE9NIGVycm9ycy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNVaUVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigyMDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgaXMgdXNlZCBmb3IgQ29tcG9uZW50IG9yaWVudGVkIGVycm9yc1xuICogZS5nLiBmYWlsdXJlIHRvIHJlbmRlciwgb3IgY2F0Y2hpbmcgdW5rbm93bnMuXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGNvbXBvbmVudCwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigyMDEsIG1lc3NhZ2UsIGNvbXBvbmVudCwgY2F1c2VkQnkpO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc0VuZHBvaW50RXJyb3IgcmVwcmVzZW50cyBhbGwgbmV0d29yayByZWxhdGVkIGVycm9ycy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNFbmRwb2ludEVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigzMDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzQ29yZUVycm9yIHJlcHJlc2VudHMgZXJyb3JzIGZvciBwcmVjb25kaXRpb24gZmFpbHVyZXMgaW4gdGhlIGNvcmUgbGlicmFyeVxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0NvcmVFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoNDAwLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpO1xuICB9XG59XG4vKipcbiAqIEFuc3dlcnNTdG9yYWdlRXJyb3IgcmVwcmVzZW50cyBzdG9yYWdlIHJlbGF0ZWQgZXJyb3JzXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzU3RvcmFnZUVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBzdG9yYWdlS2V5LCBkYXRhLCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDQwMSwgbWVzc2FnZSwgJ1N0b3JhZ2UnLCBjYXVzZWRCeSk7XG4gICAgdGhpcy5zdG9yYWdlS2V5ID0gc3RvcmFnZUtleTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGV2ZW50LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDQwMiwgbWVzc2FnZSwgJ0FuYWx5dGljcycsIGNhdXNlZEJ5KTtcbiAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaEFwaSAqL1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IHsgQW5zd2Vyc0Jhc2ljRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBTZWFyY2hBcGkgaXMgdGhlIEFQSSBmb3IgZG9pbmcgdmFyaW91cyB0eXBlcyBvZiBzZWFyY2hcbiAqIG92ZXIgdGhlIG5ldHdvcmsgKGUuZy4gdmVydGljYWwgb3IgdW5pdmVyc2FsKVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hBcGkge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIW9wdHMuYXBpS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0FwaSBLZXkgaXMgcmVxdWlyZWQnLCAnU2VhcmNoJyk7XG4gICAgfVxuICAgIHRoaXMuX2FwaUtleSA9IG9wdHMuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIEFuc3dlcnMgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFvcHRzLmFuc3dlcnNLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQW5zd2VycyBLZXkgaXMgcmVxdWlyZWQnLCAnU2VhcmNoJyk7XG4gICAgfVxuICAgIHRoaXMuX2Fuc3dlcnNLZXkgPSBvcHRzLmFuc3dlcnNLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgQVBJIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnNpb24gPSBvcHRzLnZlcnNpb24gfHwgMjAxOTAxMDEgfHwgMjAxOTAzMDE7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgbG9jYWxlIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFvcHRzLmxvY2FsZSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdMb2NhbGUgaXMgcmVxdWlyZWQnLCAnU2VhcmNoJyk7XG4gICAgfVxuICAgIHRoaXMuX2xvY2FsZSA9IG9wdHMubG9jYWxlO1xuICB9XG5cbiAgdmVydGljYWxRdWVyeSAocXVlcnlTdHJpbmcsIHZlcnRpY2FsS2V5LCBmaWx0ZXIpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvdmVydGljYWwvcXVlcnknLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IHF1ZXJ5U3RyaW5nLFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICAgICdmaWx0ZXJzJzogZmlsdGVyLFxuICAgICAgICAndmVydGljYWxLZXknOiB2ZXJ0aWNhbEtleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH1cblxuICBxdWVyeSAocXVlcnlTdHJpbmcpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvcXVlcnknLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IHF1ZXJ5U3RyaW5nLFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVEYXRhICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Db21wbGV0ZURhdGEge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgdGhpcy5zZWN0aW9ucyA9IGRhdGEuc2VjdGlvbnMgfHwgW107XG4gICAgdGhpcy5xdWVyeUlkID0gZGF0YS5xdWVyeUlkIHx8ICcnO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UpIHtcbiAgICBsZXQgc2VjdGlvbnM7XG4gICAgaWYgKHJlc3BvbnNlLnNlY3Rpb25zKSB7XG4gICAgICBzZWN0aW9ucyA9IHJlc3BvbnNlLnNlY3Rpb25zLm1hcChzID0+ICh7XG4gICAgICAgIGxhYmVsOiBzLmxhYmVsLFxuICAgICAgICByZXN1bHRzOiBzLnJlc3VsdHMubWFwKHIgPT4gbmV3IEF1dG9Db21wbGV0ZVJlc3VsdChyKSlcbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VjdGlvbnMgPSBbeyByZXN1bHRzOiByZXNwb25zZS5yZXN1bHRzLm1hcChyID0+IG5ldyBBdXRvQ29tcGxldGVSZXN1bHQocikpIH1dO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEF1dG9Db21wbGV0ZURhdGEoeyBzZWN0aW9ucywgcXVlcnlJZDogcmVzcG9uc2UucXVlcnlJZCB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXV0b0NvbXBsZXRlUmVzdWx0IHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIHRoaXMuZmlsdGVyID0gZGF0YS5maWx0ZXIgfHwge307XG4gICAgdGhpcy5oaWdobGlnaHRlZFZhbHVlID0gdGhpcy5oaWdobGlnaHQoZGF0YSk7XG4gICAgdGhpcy5rZXkgPSBkYXRhLmtleSB8fCAnJztcbiAgICB0aGlzLm1hdGNoZWRTdWJzdHJpbmdzID0gZGF0YS5tYXRjaGVkU3Vic3RyaW5ncyB8fCBbXTtcbiAgICB0aGlzLnZhbHVlID0gZGF0YS52YWx1ZSB8fCAnJztcbiAgICB0aGlzLnNob3J0VmFsdWUgPSBkYXRhLnNob3J0VmFsdWUgfHwgdGhpcy52YWx1ZTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLy8gVE9ETyhqZGVsZXJtZSk6IGNvbnNvbGlkYXRlIHdpdGggb3RoZXIgaGlnaGxpZ2h0IGZ1bmN0aW9uc1xuICBoaWdobGlnaHQgKGRhdGEpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBzaG9ydFZhbHVlLCBtYXRjaGVkU3Vic3RyaW5ncyB9ID0gZGF0YTtcbiAgICBjb25zdCB2YWwgPSB2YWx1ZSB8fCBzaG9ydFZhbHVlO1xuXG4gICAgaWYgKCFtYXRjaGVkU3Vic3RyaW5ncyB8fCBtYXRjaGVkU3Vic3RyaW5ncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIG91ciBoaWdobGlnaHRlZCBzdWJzdHJpbmdzIGFyZSBzb3J0ZWRcbiAgICBtYXRjaGVkU3Vic3RyaW5ncy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAoYS5vZmZzZXQgPCBiLm9mZnNldCkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG5cbiAgICAgIGlmIChhLm9mZnNldCA+IGIub2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIC8vIEJ1aWxkIG91ciBuZXcgdmFsdWUgYmFzZWQgb24gdGhlIGhpZ2hsaWdodHNcbiAgICBsZXQgaGlnaGxpZ2h0ZWRWYWx1ZSA9ICcnO1xuICAgIGxldCBuZXh0U3RhcnQgPSAwO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXRjaGVkU3Vic3RyaW5ncy5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IHN0YXJ0ID0gTnVtYmVyKG1hdGNoZWRTdWJzdHJpbmdzW2pdLm9mZnNldCk7XG4gICAgICBsZXQgZW5kID0gc3RhcnQgKyBtYXRjaGVkU3Vic3RyaW5nc1tqXS5sZW5ndGg7XG5cbiAgICAgIGhpZ2hsaWdodGVkVmFsdWUgKz0gW3ZhbC5zbGljZShuZXh0U3RhcnQsIHN0YXJ0KSwgJzxzdHJvbmc+JywgdmFsLnNsaWNlKHN0YXJ0LCBlbmQpLCAnPC9zdHJvbmc+J10uam9pbignJyk7XG5cbiAgICAgIGlmIChqID09PSBtYXRjaGVkU3Vic3RyaW5ncy5sZW5ndGggLSAxICYmIGVuZCA8IHZhbC5sZW5ndGgpIHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRWYWx1ZSArPSB2YWwuc2xpY2UoZW5kKTtcbiAgICAgIH1cblxuICAgICAgbmV4dFN0YXJ0ID0gZW5kO1xuICAgIH1cblxuICAgIHJldHVybiBoaWdobGlnaHRlZFZhbHVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIgKi9cblxuaW1wb3J0IEF1dG9Db21wbGV0ZURhdGEgZnJvbSAnLi4vbW9kZWxzL2F1dG9jb21wbGV0ZWRhdGEnO1xuXG4vKipcbiAqIEEgRGF0YSBUcmFuc2Zvcm1lciB0aGF0IHRha2VzIHRoZSByZXNwb25zZSBvYmplY3QgZnJvbSBhIEF1dG9Db21wbGV0ZSByZXF1ZXN0XG4gKiBBbmQgdHJhbnNmb3JtcyBpbiB0byBhIGZyb250LWVuZCBvcmllbnRlZCBkYXRhIHN0cnVjdHVyZSB0aGF0IG91clxuICogY29tcG9uZW50IGxpYnJhcnkgYW5kIGNvcmUgc3RvcmFnZSB1bmRlcnN0YW5kLlxuICpcbiAqIFRPRE8oYmlsbHkpIENyZWF0ZSBvdXIgb3duIGZyb250LWVuZCBkYXRhIG1vZGVsc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIge1xuICBzdGF0aWMgY2xlYW4gKG1vZHVsZUlkLCBkYXRhKSB7XG4gICAgaWYgKGRhdGEuc2VjdGlvbnMgJiYgZGF0YS5zZWN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBkYXRhLnNlY3Rpb25zO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnNlY3Rpb25zICYmIGRhdGEuc2VjdGlvbnMubGVuZ3RoID09PSAxICYmIGRhdGEuc2VjdGlvbnNbMF0ucmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBkYXRhLnNlY3Rpb25zO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBbbW9kdWxlSWRdOiBkYXRhXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB1bml2ZXJzYWwgKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIEF1dG9Db21wbGV0ZURhdGEuZnJvbShyZXNwb25zZSk7XG4gIH1cblxuICBzdGF0aWMgZmlsdGVyIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG5cbiAgc3RhdGljIHZlcnRpY2FsIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVBcGkgKi9cblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIgZnJvbSAnLi9hdXRvY29tcGxldGVkYXRhdHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgQW5zd2Vyc0Jhc2ljRXJyb3IsIEFuc3dlcnNFbmRwb2ludEVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogQXV0b0NvbXBsZXRlQXBpIGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBuZXR3b3JrIHJlbGF0ZWQgbWF0dGVyc1xuICogZm9yIGFsbCB0aGUgYXV0b2NvbXBsZXRlIGVuZHBvaW50cy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlQXBpIHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFvcHRzLmFwaUtleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBcGkgS2V5IGlzIHJlcXVpcmVkJywgJ0F1dG9Db21wbGV0ZScpO1xuICAgIH1cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBBbnN3ZXJzIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghb3B0cy5hbnN3ZXJzS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0Fuc3dlcnMgS2V5IGlzIHJlcXVpcmVkJywgJ0F1dG9Db21wbGV0ZScpO1xuICAgIH1cbiAgICB0aGlzLl9hbnN3ZXJzS2V5ID0gb3B0cy5hbnN3ZXJzS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnNpb24gb2YgdGhlIEFQSSB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJzaW9uID0gb3B0cy52ZXJzaW9uIHx8IDIwMTkwMTAxIHx8IDIwMTkwMzAxO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxvY2FsZSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghb3B0cy5sb2NhbGUpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignTG9jYWxlIGlzIHJlcXVpcmVkJywgJ0F1dG9Db21wbGV0ZScpO1xuICAgIH1cbiAgICB0aGlzLl9sb2NhbGUgPSBvcHRzLmxvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdXRvY29tcGxldGUgZmlsdGVyc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgVGhlIGlucHV0IHRvIHVzZSBmb3IgYXV0byBjb21wbGV0ZVxuICAgKi9cbiAgcXVlcnlGaWx0ZXIgKGlucHV0LCB2ZXJ0aWNhbEtleSwgYmFyS2V5KSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL2ZpbHRlcnNlYXJjaCcsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogaW5wdXQsXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgICAgJ2V4cGVyaWVuY2VLZXknOiB2ZXJ0aWNhbEtleSxcbiAgICAgICAgJ2lucHV0S2V5JzogYmFyS2V5LFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLmZpbHRlcihyZXNwb25zZS5yZXNwb25zZSwgYmFyS2V5KSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzRW5kcG9pbnRFcnJvcignRmlsdGVyIHNlYXJjaCByZXF1ZXN0IGZhaWxlZCcsICdBdXRvQ29tcGxldGUnLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHF1ZXJ5VmVydGljYWwgKGlucHV0LCB2ZXJ0aWNhbEtleSwgYmFyS2V5KSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL2F1dG9jb21wbGV0ZScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogaW5wdXQsXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgICAgJ2V4cGVyaWVuY2VLZXknOiB2ZXJ0aWNhbEtleSxcbiAgICAgICAgJ2JhcktleSc6IGJhcktleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lci52ZXJ0aWNhbChyZXNwb25zZS5yZXNwb25zZSwgcmVxdWVzdC5fcGFyYW1zLmJhcktleSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoJ1ZlcnRpY2FsIHNlYXJjaCByZXF1ZXN0IGZhaWxlZCcsICdBdXRvQ29tcGxldGUnLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHF1ZXJ5VW5pdmVyc2FsIChxdWVyeVN0cmluZykge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9hdXRvY29tcGxldGUnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IHF1ZXJ5U3RyaW5nLFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldChxdWVyeVN0cmluZylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lci51bml2ZXJzYWwocmVzcG9uc2UucmVzcG9uc2UpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEFuc3dlcnNFbmRwb2ludEVycm9yKCdVbml2ZXJzYWwgc2VhcmNoIHJlcXVlc3QgZmFpbGVkJywgJ0F1dG9Db21wbGV0ZScsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hTdGF0ZXMgKi9cblxuLyoqXG4gKiBTZWFyY2hTdGF0ZXMgaXMgYW4gRU5VTSBmb3IgdGhlIHZhcmlvdXMgc3RhZ2VzIG9mIHNlYXJjaGluZyxcbiAqIHVzZWQgdG8gc2hvdyBkaWZmZXJlbnQgdGVtcGxhdGVzXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIFBSRV9TRUFSQ0g6ICdwcmUtc2VhcmNoJyxcbiAgU0VBUkNIX0xPQURJTkc6ICdzZWFyY2gtbG9hZGluZycsXG4gIFNFQVJDSF9DT01QTEVURTogJ3NlYXJjaC1jb21wbGV0ZSdcbn07XG4iLCIvKiogQG1vZHVsZSBSZXN1bHQgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0IHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSByYXcgcHJvZmlsZSBkYXRhXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3JhdyA9IGRhdGEucmF3IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgb2YgdGhlIHJlc3VsdCBjYXJkXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMudGl0bGUgPSBkYXRhLnRpdGxlIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYm9keSBvZiB0aGUgZGV0YWlscyBzZWN0aW9uIG9mIHRoZSByZXN1bHQgY2FyZCwgY2FuIGNvbnRhaW4gSFRNTFxuICAgICAqIEB0eXBlIHtzdHJpbmd8IG51bGx9XG4gICAgICovXG4gICAgdGhpcy5kZXRhaWxzID0gZGF0YS5kZXRhaWxzIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVzdGluYXRpb24gbGluayBmb3IgdGhlIHRpdGxlIG9mIHRoZSByZXN1bHQgY2FyZFxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmxpbmsgPSBkYXRhLmxpbmsgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBFbnRpdHkgSUQsIG9yIG90aGVyIHVuaXF1ZSBpZGVudGlmaWVyLCB1c2VkIGZvciB0byBwb3dlciBpbnRlcmFjdGl2aXR5XG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMuaWQgPSBkYXRhLmlkIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3VidGl0bGUgb24gdGhlIHJlc3VsdCBjYXJkXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMuc3VidGl0bGUgPSBkYXRhLnN1YnRpdGxlIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2xhc3MgbW9kaWZpZXIsIHVzdWFsbHkgZGVyaXZlZCBmcm9tIHRoZSB2ZXJ0aWNhbCBjb25maWd1cmF0aW9uIElEXG4gICAgICogVXNlZCB0byBhcHBseSBkaWZmZXJlbnQgc3R5bGluZyB0byBkaWZmZXJlbnQgcmVzdWx0IGNhcmQgdHlwZXNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgdGhpcy5tb2RpZmllciA9IGRhdGEubW9kaWZpZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbGFyZ2UgZGF0ZSwgb2YgdGhlIGZvcm1hdCB7IG1vbnRoOiAnSmFuJywgZGF5OiAnMDEnIH1cbiAgICAgKiBAdHlwZSB7T2JqZWN0fG51bGx9XG4gICAgICovXG4gICAgdGhpcy5iaWdEYXRlID0gZGF0YS5iaWdEYXRlIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbWFnZSBwcm9maWxlIG9iamVjdCwgZXhwZWN0ZWQgdG8gaGF2ZSBhIHVybCBwcm9wZXJ0eVxuICAgICAqIEB0eXBlIHtPYmplY3R8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLmltYWdlID0gZGF0YS5pbWFnZSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgY2FsbHMgdG8gYWN0aW9uLCBvZiB0aGUgZm9ybWF0OlxuICAgICAqIHsgaWNvbjogJycsIHVybDogJycsIHRleHQ6ICcnLCBldmVudFR5cGU6ICcnLCBldmVudE9wdGlvbnM6IHt9fVxuICAgICAqIEB0eXBlIHtBcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLmNhbGxzVG9BY3Rpb24gPSBkYXRhLmNhbGxzVG9BY3Rpb24gfHwgW107XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlc3VsdEZhY3RvcnkgKi9cblxuaW1wb3J0IFJlc3VsdCBmcm9tICcuL3Jlc3VsdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdEZhY3Rvcnkge1xuICAvKipcbiAgICogQ29udmVydHMgYW4gQVBJIHJlc3VsdCBvYmplY3QgaW50byBhIFJlc3VsdCB2aWV3IG1vZGVsLlxuICAgKiBJbmNsdWRlcyBkZWZhdWx0IG1hcHBpbmdzIG9mIEdvb2dsZUN1c3RvbVNlYXJjaEVuZ2luZSByZXN1bHRzIHRvXG4gICAqIHRoZSBmaWVsZHMgZXhwb3NlZCBieSB0aGUgdGVtcGxhdGUuXG4gICAqIEBwYXJhbSByZXN1bHRzRGF0YSAge0FycmF5fSBleHBlY3RlZCBmb3JtYXQ6IHsgZGF0YTogeyAuLi4gfSwgaGlnaGxpZ2h0ZWRGaWVsZHM6IHsgLi4uIH19XG4gICAqIEByZXR1cm5zIHtSZXN1bHRbXX1cbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXN1bHRzRGF0YSkge1xuICAgIGxldCByZXN1bHRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gVE9ETyB1c2UgcmVzdWx0RGF0YS5oaWdobGlnaHRlZEZpZWxkcyB0b1xuICAgICAgLy8gdHJhbnNmb3JtIHJlc3VsdERhdGEuZGF0YSBpbnRvIGh0bWwtZnJpZW5kbHkgc3RyaW5ncyB0aGF0IGhpZ2hsaWdodCB2YWx1ZXMuXG4gICAgICAvLyBDaGVjayBmb3IgbmV3IGRhdGEgZm9ybWF0LCBvdGhlcndpc2UgZmFsbGJhY2sgdG8gbGVnYWN5XG5cbiAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHRzRGF0YVtpXS5kYXRhIHx8IHJlc3VsdHNEYXRhW2ldO1xuXG4gICAgICBpZiAoZGF0YS5odG1sU25pcHBldCkge1xuICAgICAgICByZXN1bHRzLnB1c2goUmVzdWx0RmFjdG9yeS5mcm9tR29vZ2xlQ3VzdG9tU2VhcmNoRW5naW5lKGRhdGEpKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdHMucHVzaChSZXN1bHRGYWN0b3J5LmZyb21HZW5lcmljKGRhdGEpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBBUEkgcmVzdWx0IG9iamVjdCBpbnRvIGEgZ2VuZXJpYyByZXN1bHQgdmlldyBtb2RlbC5cbiAgICogQHBhcmFtIGRhdGFcbiAgICogQHJldHVybnMge1Jlc3VsdH1cbiAgICovXG4gIHN0YXRpYyBmcm9tR2VuZXJpYyAoZGF0YSkge1xuICAgIHJldHVybiBuZXcgUmVzdWx0KHtcbiAgICAgIHJhdzogZGF0YSxcbiAgICAgIHRpdGxlOiBkYXRhLm5hbWUsXG4gICAgICBkZXRhaWxzOiBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgbGluazogZGF0YS53ZWJzaXRlLFxuICAgICAgaWQ6IGRhdGEuaWRcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBBUEkgcmVzdWx0IG9iamVjdCBpbnRvIGEgcmVzdWx0IHZpZXcgbW9kZWwuXG4gICAqIE1hcHMgdmlldyBtb2RlbCBmaWVsZHMgYmFzZWQgb24gdGhlIEFQSSBkYXRhIGZvciBhIEdvb2dsZSBDdXN0b20gU2VhcmNoIEVuZ2luZSBvYmplY3QuXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEByZXR1cm5zIHtSZXN1bHR9XG4gICAqL1xuICBzdGF0aWMgZnJvbUdvb2dsZUN1c3RvbVNlYXJjaEVuZ2luZSAoZGF0YSkge1xuICAgIHJldHVybiBuZXcgUmVzdWx0KHtcbiAgICAgIHJhdzogZGF0YSxcbiAgICAgIHRpdGxlOiBkYXRhLmh0bWxUaXRsZS5yZXBsYWNlKC8oPChbXj5dKyk+KS9pZywgJycpLFxuICAgICAgZGV0YWlsczogZGF0YS5odG1sU25pcHBldCxcbiAgICAgIGxpbms6IGRhdGEubGlua1xuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWN0aW9uICovXG5cbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuaW1wb3J0IFJlc3VsdEZhY3RvcnkgZnJvbSAnLi9yZXN1bHRmYWN0b3J5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yIChkYXRhLCB1cmwpIHtcbiAgICB0aGlzLnNlYXJjaFN0YXRlID0gU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURTtcbiAgICB0aGlzLnZlcnRpY2FsQ29uZmlnSWQgPSBkYXRhLnZlcnRpY2FsQ29uZmlnSWQgfHwgbnVsbDtcbiAgICB0aGlzLnJlc3VsdHNDb3VudCA9IGRhdGEucmVzdWx0c0NvdW50IHx8IDA7XG4gICAgdGhpcy5lbmNvZGVkU3RhdGUgPSBkYXRhLmVuY29kZWRTdGF0ZSB8fCAnJztcbiAgICB0aGlzLmFwcGxpZWRRdWVyeUZpbHRlcnMgPSBBcHBsaWVkUXVlcnlGaWx0ZXIuZnJvbShkYXRhLmFwcGxpZWRRdWVyeUZpbHRlcnMpO1xuICAgIHRoaXMuZmFjZXRzID0gZGF0YS5mYWNldHMgfHwgbnVsbDtcbiAgICB0aGlzLnJlc3VsdHMgPSBSZXN1bHRGYWN0b3J5LmZyb20oZGF0YS5yZXN1bHRzKTtcbiAgICB0aGlzLm1hcCA9IFNlY3Rpb24ucGFyc2VNYXAoZGF0YS5yZXN1bHRzKTtcbiAgICB0aGlzLnZlcnRpY2FsVVJMID0gdXJsIHx8IG51bGw7XG4gIH1cblxuICBzdGF0aWMgcGFyc2VNYXAgKHJlc3VsdHMpIHtcbiAgICBsZXQgbWFwTWFya2VycyA9IFtdO1xuXG4gICAgbGV0IGNlbnRlckNvb3JkaW5hdGVzID0ge307XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc3VsdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIFJlbW92ZSBsZWdhY3kgZmFsbGJhY2sgZnJvbSBhbGwgZGF0YSBmb3JtYXRcbiAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzW2pdLmRhdGEgfHwgcmVzdWx0c1tqXTtcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZSkge1xuICAgICAgICBpZiAoIWNlbnRlckNvb3JkaW5hdGVzLmxhdGl0dWRlKSB7XG4gICAgICAgICAgY2VudGVyQ29vcmRpbmF0ZXMgPSB7XG4gICAgICAgICAgICBsYXRpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sb25naXR1ZGVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIG1hcE1hcmtlcnMucHVzaCh7XG4gICAgICAgICAgaXRlbTogcmVzdWx0LFxuICAgICAgICAgIGxhYmVsOiBtYXBNYXJrZXJzLmxlbmd0aCArIDEsXG4gICAgICAgICAgbGF0aXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubGF0aXR1ZGUsXG4gICAgICAgICAgbG9uZ2l0dWRlOiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlLmxvbmdpdHVkZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgJ21hcENlbnRlcic6IGNlbnRlckNvb3JkaW5hdGVzLFxuICAgICAgJ21hcE1hcmtlcnMnOiBtYXBNYXJrZXJzXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChtb2R1bGVzLCB1cmxzKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gW107XG4gICAgaWYgKCFtb2R1bGVzKSB7XG4gICAgICByZXR1cm4gc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmV3IFNlY3Rpb24obW9kdWxlcyk7XG4gICAgfVxuXG4gICAgLy8gT3VyIHNlY3Rpb25zIHNob3VsZCBjb250YWluIGEgcHJvcGVydHkgb2YgbWFwTWFya2VyIG9iamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNlY3Rpb25zLnB1c2goXG4gICAgICAgIG5ldyBTZWN0aW9uKFxuICAgICAgICAgIG1vZHVsZXNbaV0sXG4gICAgICAgICAgdXJsc1ttb2R1bGVzW2ldLnZlcnRpY2FsQ29uZmlnSWRdXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlY3Rpb25zO1xuICB9XG59XG5cbmNsYXNzIEFwcGxpZWRRdWVyeUZpbHRlciB7XG4gIC8vIFN1cHBvcnQgbGVnYWN5IG1vZGVsIGFuZCBuZXcgbW9kZWwgdW50aWwgZnVsbHkgbWlncmF0ZWQuXG4gIC8vIFRPRE8oYmlsbHkpIFJlbW92ZSB0aGUgbGVmdCBleHByZXNzaW9uIGR1cmluZyBhc3NpZ25tZW50IHdoZW4gbWlncmF0ZWQuXG4gIGNvbnN0cnVjdG9yIChhcHBsaWVkUXVlcnlGaWx0ZXIpIHtcbiAgICB0aGlzLmtleSA9IGFwcGxpZWRRdWVyeUZpbHRlci5rZXkgfHwgYXBwbGllZFF1ZXJ5RmlsdGVyLmRpc3BsYXlLZXk7XG4gICAgdGhpcy52YWx1ZSA9IGFwcGxpZWRRdWVyeUZpbHRlci52YWx1ZSB8fCBhcHBsaWVkUXVlcnlGaWx0ZXIuZGlzcGxheVZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKGFwcGxpZWRRdWVyeUZpbHRlcnMpIHtcbiAgICBsZXQgZmlsdGVycyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwbGllZFF1ZXJ5RmlsdGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgZmlsdGVycy5wdXNoKG5ldyBBcHBsaWVkUXVlcnlGaWx0ZXIoYXBwbGllZFF1ZXJ5RmlsdGVyc1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVycztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgVW5pdmVyc2FsUmVzdWx0cyAqL1xuXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL3NlY3Rpb24nO1xuaW1wb3J0IFNlYXJjaFN0YXRlcyBmcm9tICcuLi9zdG9yYWdlL3NlYXJjaHN0YXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaXZlcnNhbFJlc3VsdHMge1xuICBjb25zdHJ1Y3RvciAoZGF0YSkge1xuICAgIHRoaXMucXVlcnlJZCA9IGRhdGEucXVlcnlJZCB8fCBudWxsO1xuICAgIHRoaXMuc2VjdGlvbnMgPSBkYXRhLnNlY3Rpb25zIHx8IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHNlYXJjaCwgdXNlZCB0byByZW5kZXIgZGlmZmVyZW50IHRlbXBsYXRlcyBiZWZvcmUsIGR1cmluZyxcbiAgICAgKiBhbmQgYWZ0ZXIgbG9hZGluZ1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zZWFyY2hTdGF0ZSA9IGRhdGEuc2VhcmNoU3RhdGUgfHwgU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSwgdXJscykge1xuICAgIHJldHVybiBuZXcgVW5pdmVyc2FsUmVzdWx0cyh7XG4gICAgICBxdWVyeUlkOiByZXNwb25zZS5xdWVyeUlkLFxuICAgICAgc2VjdGlvbnM6IFNlY3Rpb24uZnJvbShyZXNwb25zZS5tb2R1bGVzLCB1cmxzKVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIFVuaXZlcnZhbFJlc3VsdHMgb2JqZWN0IHJlcHJlc2VudGluZyBsb2FkaW5nIHJlc3VsdHNcbiAgICogQHJldHVybiB7VW5pdmVyc2FsUmVzdWx0c31cbiAgICovXG4gIHN0YXRpYyBzZWFyY2hMb2FkaW5nICgpIHtcbiAgICByZXR1cm4gbmV3IFVuaXZlcnNhbFJlc3VsdHMoeyBzZWFyY2hTdGF0ZTogU2VhcmNoU3RhdGVzLlNFQVJDSF9MT0FESU5HIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEaXJlY3RBbnN3ZXIgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0QW5zd2VyIHtcbiAgY29uc3RydWN0b3IgKGRpcmVjdEFuc3dlciA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkaXJlY3RBbnN3ZXIpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE5hdmlnYXRpb24gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiB7XG4gIGNvbnN0cnVjdG9yICh0YWJPcmRlcikge1xuICAgIHRoaXMudGFiT3JkZXIgPSB0YWJPcmRlciB8fCBbXTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKG1vZHVsZXMpIHtcbiAgICBsZXQgbmF2ID0gW107XG4gICAgaWYgKCFtb2R1bGVzIHx8ICFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmF2O1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5hdi5wdXNoKG1vZHVsZXNbaV0udmVydGljYWxDb25maWdJZCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgTmF2aWdhdGlvbihuYXYpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBWZXJ0aWNhbFJlc3VsdHMgKi9cblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9zZWN0aW9uJztcbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0aWNhbFJlc3VsdHMge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IHNlYXJjaFN0YXRlOiBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFIH0sIGRhdGEpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gbmV3IFZlcnRpY2FsUmVzdWx0cyhTZWN0aW9uLmZyb20ocmVzcG9uc2UpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBWZXJ0aWNhbFJlc3VsdHMgb2JqZWN0IHJlcHJlc2VudGluZyBsb2FkaW5nIHJlc3VsdHNcbiAgICogQHJldHVybiB7VmVydGljYWxSZXN1bHRzfVxuICAgKi9cbiAgc3RhdGljIHNlYXJjaExvYWRpbmcgKCkge1xuICAgIHJldHVybiBuZXcgVmVydGljYWxSZXN1bHRzKHsgc2VhcmNoU3RhdGU6IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTdG9yYWdlS2V5cyAqL1xuXG4vKipcbiAqIFN0b3JhZ2VLZXlzIGlzIGFuIEVOVU0gYXJlIGNvbnNpZGVyZWQgdGhlIHJvb3QgY29udGV4dFxuICogZm9yIGhvdyBkYXRhIGlzIHN0b3JlZCBhbmQgc2NvcGVkIGluIHRoZSBzdG9yYWdlLlxuICpcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgTkFWSUdBVElPTjogJ25hdmlnYXRpb24nLFxuICBVTklWRVJTQUxfUkVTVUxUUzogJ3VuaXZlcnNhbC1yZXN1bHRzJyxcbiAgVkVSVElDQUxfUkVTVUxUUzogJ3ZlcnRpY2FsLXJlc3VsdHMnLFxuICBBVVRPQ09NUExFVEU6ICdhdXRvY29tcGxldGUnLFxuICBESVJFQ1RfQU5TV0VSOiAnZGlyZWN0LWFuc3dlcicsXG4gIEZJTFRFUjogJ2ZpbHRlcicsXG4gIFFVRVJZOiAncXVlcnknLFxuICBRVUVSWV9JRDogJ3F1ZXJ5LWlkJ1xufTtcbiIsIi8qKiBAbW9kdWxlIFNlYXJjaERhdGFUcmFuc2Zvcm1lciAqL1xuXG5pbXBvcnQgVW5pdmVyc2FsUmVzdWx0cyBmcm9tICcuLi9tb2RlbHMvdW5pdmVyc2FscmVzdWx0cyc7XG5pbXBvcnQgRGlyZWN0QW5zd2VyIGZyb20gJy4uL21vZGVscy9kaXJlY3RhbnN3ZXInO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vbW9kZWxzL25hdmlnYXRpb24nO1xuaW1wb3J0IFZlcnRpY2FsUmVzdWx0cyBmcm9tICcuLi9tb2RlbHMvdmVydGljYWxyZXN1bHRzJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuLyoqXG4gKiBBIERhdGEgVHJhbnNmb3JtZXIgdGhhdCB0YWtlcyB0aGUgcmVzcG9uc2Ugb2JqZWN0IGZyb20gYSBTZWFyY2ggcmVxdWVzdFxuICogQW5kIHRyYW5zZm9ybXMgaW4gdG8gYSBmcm9udC1lbmQgb3JpZW50ZWQgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBvdXJcbiAqIGNvbXBvbmVudCBsaWJyYXJ5IGFuZCBjb3JlIHN0b3JhZ2UgdW5kZXJzdGFuZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoRGF0YVRyYW5zZm9ybWVyIHtcbiAgc3RhdGljIHRyYW5zZm9ybSAoZGF0YSwgdXJscyA9IHt9KSB7XG4gICAgbGV0IHJlc3BvbnNlID0gZGF0YS5yZXNwb25zZTtcbiAgICByZXR1cm4ge1xuICAgICAgW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXTogcmVzcG9uc2UucXVlcnlJZCxcbiAgICAgIFtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXTogTmF2aWdhdGlvbi5mcm9tKHJlc3BvbnNlLm1vZHVsZXMpLFxuICAgICAgW1N0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVJdOiBuZXcgRGlyZWN0QW5zd2VyKHJlc3BvbnNlLmRpcmVjdEFuc3dlciksXG4gICAgICBbU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFNdOiBVbml2ZXJzYWxSZXN1bHRzLmZyb20ocmVzcG9uc2UsIHVybHMpXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB0cmFuc2Zvcm1WZXJ0aWNhbCAoZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICBbU3RvcmFnZUtleXMuUVVFUllfSURdOiBkYXRhLnJlc3BvbnNlLnF1ZXJ5SWQsXG4gICAgICBbU3RvcmFnZUtleXMuTkFWSUdBVElPTl06IG5ldyBOYXZpZ2F0aW9uKCksIC8vIFZlcml0Y2FsIGRvZXNuJ3QgcmVzcG9uZCB3aXRoIG9yZGVyaW5nLCBzbyB1c2UgZW1wdHkgbmF2LlxuICAgICAgW1N0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFNdOiBWZXJ0aWNhbFJlc3VsdHMuZnJvbShkYXRhLnJlc3BvbnNlKVxuICAgIH07XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEV2ZW50RW1pdHRlciAqL1xuXG4vKipcbiAqIEV2ZW50RW1pdHRlciBpcyBhIGJhc2UgY2xhc3MgZm9yIGFueSBvYmplY3QgdGhhdCB3YW50cyB0byBleHBvc2VcbiAqIGEgcHViL3N1YiBpbnRlcmZhY2UsIGZvciBlbWl0dGluZyBtZXNzYWdlcyBhbmQgcHJvdmlkaW5nIGxpc3RlbmVycy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8qKlxuICAgICAqIFRoZSBzdWJzY3JpYmVycyBvZiBtZXNzYWdlc1xuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIG9uIGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciBzdWJzY3JpYmluZyBldmVudHMgdGhhdCBhcmUgZW1pdHRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byBsaXN0ZW4gdG9cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgVGhlIGNhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSB7ZXZ0fSBpcyBlbWl0dGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSBPcHRpb25hbCB2YWx1ZSB3aGljaCB3aWxsIG9ubHkgaGFuZGxlIHRoZSBtZXNzYWdlIG9uY2VcbiAgICovXG4gIG9uIChldnQsIGNiLCBvbmNlKSB7XG4gICAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBoYW5kbGVyIHNob3VsZCBiZSBvZiB0eXBlIHtmdW5jdGlvbn0nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbGlzdGVuZXJzW2V2dF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzW2V2dF0gPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XS5wdXNoKHtcbiAgICAgIGV2ZW50OiBldnQsXG4gICAgICBjYjogY2IsXG4gICAgICBvbmNlOiBvbmNlIHx8IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBvbmNlIGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciBzdWJzY3JpYmluZyBldmVudHMgdGhhdCBhcmUgZW1pdHRlZC5cbiAgICogVGhlIGhhbmRsZXIgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBvbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIGxpc3RlbiB0b1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gdGhlIHtldnR9IGlzIGVtaXR0ZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBvbmNlIE9wdGlvbmFsIHZhbHVlIHdoaWNoIHdpbGwgb25seSBoYW5kbGUgdGhlIG1lc3NhZ2Ugb25jZVxuICAgKi9cbiAgb25jZSAoZXZ0LCBjYikge1xuICAgIHJldHVybiB0aGlzLm9uKGV2dCwgY2IsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIG9mZiBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3IgdW5zdWJzY3JpYmluZyBmcm9tIGFuIGV2ZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gdW5zdWJzY3JpYmUgZnJvbVxuICAgKi9cbiAgb2ZmIChldnQpIHtcbiAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW2V2dF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogZW1pdCBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3IgYnJvYWRjYXN0aW5nIG1lc3NhZ2VzL2V2ZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIHB1Ymxpc2ggZnJvbVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSB0aGUgZGF0YSB0byBzZW5kIGFsb25nIHRvIHRoZSBzdWJzY3JpYmVyc1xuICAgKi9cbiAgZW1pdCAoZXZ0LCBkYXRhKSB7XG4gICAgbGV0IGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1tldnRdO1xuICAgIGlmIChsaXN0ZW5lcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEludm9rZSBlYWNoIG9mIGFsbCB0aGUgbGlzdGVuZXIgaGFuZGxlcnMgYW5kIHJlbW92ZSB0aGUgb25lcyB0aGF0IHNob3VsZCBmaXJlIG9ubHkgb25jZS5cbiAgICBsZXQga2VlcCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0uY2IoZGF0YSk7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldLm9uY2UgPT09IHRydWUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEluc3RlYWQgb2YgaGF2aW5nIGEgJ2RpcnR5JyBhcnJheSB3aXRoIGRlbGV0ZWQgb3IgJ3VuZGVmaW5lZCcgZW50cmllcyxcbiAgICAgIC8vIHdlIGp1c3QgY3JlYXRlIGEgYnJhbmQgbmV3IGFycmF5IHdpdGhvdXQgdGhlIGxpc3RlbmVycyB0aGF0IHdlcmUgcmVtb3ZlZFxuICAgICAga2VlcC5wdXNoKGxpc3RlbmVyc1tpXSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIG91ciBvbGQgbGlzdCBvZiBsaXN0ZW5lcnMgdG8gdGhlIG5ld2x5IGNyZWF0ZWQgYXJyYXlcbiAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XSA9IGtlZXA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE1vZHVsZURhdGEgKi9cblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudGVtaXR0ZXIvZXZlbnRlbWl0dGVyJztcblxuLyoqXG4gKiBNb2R1bGVEYXRhIGlzIHVzZWQgYXMgYSBnZW5lcmljIG1vZGVsIGZvciBTdG9yYWdlLlxuICogVHlwaWNhbGx5IGFuIGluc3RhbmNlIG9mIE1vZHVsZURhdGEgcG93ZXJzIGEgc2luZ2xlIGNvbXBvbmVudC5cblxuICogQSBkYXRhIG1vZGVsIHRoYXQgZXhwb3NlcyBhbiBldmVudCBlbWl0dGVyIGludGVyZmFjZS5cbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2R1bGVEYXRhIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGlkLCBkYXRhID0ge30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5faWQgPSBpZDtcbiAgICB0aGlzLl9oaXN0b3J5ID0gW107XG4gICAgdGhpcy5fZGF0YSA9IHt9O1xuICAgIHRoaXMuc2V0KGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcGxhY2VzIHRoZSBjdXJyZW50bHkgaGVsZCBkYXRhIHdpdGggdGhlIGdpdmVuIGRhdGFcbiAgICogQHBhcmFtIHsqfSBkYXRhIHRoZSBkYXRhIHRvIHJlcGxhY2UgdGhlIGN1cnJlbnQgZGF0YVxuICAgKi9cbiAgc2V0IChkYXRhKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IGRhdGEgfHwge307XG5cbiAgICB0aGlzLmNhcHR1cmVQcmV2aW91cygpO1xuXG4gICAgaWYgKE9iamVjdC5rZXlzKG5ld0RhdGEpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXModGhpcy5fZGF0YSkubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9kYXRhID0gbmV3RGF0YTtcbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5fZGF0YSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgZm9yIHNoYWxsb3cgZXF1YWxpdHlcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhuZXdEYXRhKSkge1xuICAgICAgaWYgKHRoaXMuX2RhdGFba2V5XSAhPT0gbmV3RGF0YVtrZXldKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBuZXdEYXRhO1xuICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuX2RhdGEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2FwdHVyZVByZXZpb3VzICgpIHtcbiAgICBpZiAodGhpcy5faGlzdG9yeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9oaXN0b3J5ID0gW107XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hpc3RvcnkubGVuZ3RoICsgMSA+IDUpIHtcbiAgICAgIHRoaXMuX2hpc3Rvcnkuc2hpZnQoKTtcbiAgICB9XG5cbiAgICAvLyBJZiBkYXRhIGlzIGV2ZXIgdW5kZWZpbmVkLCB3ZSBkZWZhdWx0IHRvIGVtcHR5IG9iamVjdFxuICAgIHRoaXMuX2hpc3RvcnkucHVzaChKU09OLnN0cmluZ2lmeSh0aGlzLl9kYXRhIHx8IHt9KSk7XG4gIH1cblxuICB1bmRvICgpIHtcbiAgICBsZXQgcHJldmlvdXMgPSB7fTtcbiAgICBpZiAodGhpcy5fcHJldmlvdXMubGVuZ3RoID4gMCkge1xuICAgICAgcHJldmlvdXMgPSBKU09OLnBhcnNlKHRoaXMuX3ByZXZpb3VzLnBvcCgpKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRhLnNldChwcmV2aW91cyk7XG4gIH1cblxuICByYXcgKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTdG9yYWdlICovXG5cbmltcG9ydCBNb2R1bGVEYXRhIGZyb20gJy4vbW9kdWxlZGF0YSc7XG5pbXBvcnQgeyBBbnN3ZXJzU3RvcmFnZUVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogU3RvcmFnZSBpcyBhIGNvbnRhaW5lciBhcm91bmQgYXBwbGljYXRpb24gc3RhdGUuXG4gKiBJdCBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgQ1JVRCBvcGVyYXRpb25zIGFzIHdlbGwgYXMgbGlzdGVuaW5nXG4gKiBmb3Igc3RhdGVmdWwgY2hhbmdlcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyID0ge307XG4gICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzID0ge307XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkYXRhIGluIHN0b3JhZ2Ugd2l0aCB0aGUgZ2l2ZW4ga2V5IHRvIHRoZSBwcm92aWRlZCBkYXRhLFxuICAgKiBjb21wbGV0ZWx5IG92ZXJ3cml0aW5nIGFueSBleGlzdGluZyBkYXRhLlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRoZSBzdG9yYWdlIGtleSB0byBzZXRcbiAgICogQHBhcmFtIHsqfSBkYXRhIHRoZSBkYXRhIHRvIHNldFxuICAgKi9cbiAgc2V0IChrZXksIGRhdGEpIHtcbiAgICB0aGlzLl9pbml0RGF0YUNvbnRhaW5lcihrZXksIGRhdGEpO1xuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJba2V5XS5zZXQoZGF0YSk7XG4gIH1cblxuICBfaW5pdERhdGFDb250YWluZXIgKGtleSwgZGF0YSkge1xuICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCB8fCBrZXkgPT09IG51bGwgfHwgdHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzU3RvcmFnZUVycm9yKCdJbnZhbGlkIHN0b3JhZ2Uga2V5IHByb3ZpZGVkJywga2V5LCBkYXRhKTtcbiAgICB9XG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCB8fCBkYXRhID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc1N0b3JhZ2VFcnJvcignTm8gZGF0YSBwcm92aWRlZCcsIGtleSwgZGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX21vZHVsZURhdGFDb250YWluZXJba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2tleV0gPSBuZXcgTW9kdWxlRGF0YShrZXkpO1xuICAgICAgdGhpcy5fYXBwbHlGdXR1cmVMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gIH1cblxuICBnZXRTdGF0ZSAobW9kdWxlSWQpIHtcbiAgICBpZiAodGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5yYXcoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRBbGwgKGtleSkge1xuICAgIGNvbnN0IGRhdGEgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGRhdGFLZXkgb2YgT2JqZWN0LmtleXModGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcikpIHtcbiAgICAgIGlmIChkYXRhS2V5LnN0YXJ0c1dpdGgoa2V5KSAmJiB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2RhdGFLZXldLnJhdygpICE9PSBudWxsKSB7XG4gICAgICAgIGRhdGEucHVzaCh0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2RhdGFLZXldLnJhdygpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBvbiAoZXZ0LCBtb2R1bGVJZCwgY2IpIHtcbiAgICBsZXQgbW9kdWxlRGF0YSA9IHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdO1xuICAgIGlmIChtb2R1bGVEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXSA9IFtdO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdLnB1c2goe1xuICAgICAgICBldmVudDogZXZ0LFxuICAgICAgICBjYjogY2JcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0ub24oZXZ0LCBjYik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBvZmYgKGV2dCwgbW9kdWxlSWQsIGNiKSB7XG4gICAgbGV0IG1vZHVsZURhdGEgPSB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXTtcbiAgICBpZiAobW9kdWxlRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0ucG9wKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdLm9mZihldnQsIGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9hcHBseUZ1dHVyZUxpc3RlbmVycyAobW9kdWxlSWQpIHtcbiAgICBsZXQgZnV0dXJlcyA9IHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF07XG4gICAgaWYgKCFmdXR1cmVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmdXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZnV0dXJlID0gZnV0dXJlc1tpXTtcbiAgICAgIHRoaXMub24oZnV0dXJlLmV2ZW50LCBtb2R1bGVJZCwgZnV0dXJlLmNiKTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF07XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIENvcmUgKi9cblxuaW1wb3J0IFNlYXJjaEFwaSBmcm9tICcuL3NlYXJjaC9zZWFyY2hhcGknO1xuaW1wb3J0IEF1dG9Db21wbGV0ZUFwaSBmcm9tICcuL3NlYXJjaC9hdXRvY29tcGxldGVhcGknO1xuXG5pbXBvcnQgU2VhcmNoRGF0YVRyYW5zZm9ybWVyIGZyb20gJy4vc2VhcmNoL3NlYXJjaGRhdGF0cmFuc2Zvcm1lcic7XG5cbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZS9zdG9yYWdlJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFZlcnRpY2FsUmVzdWx0cyBmcm9tICcuL21vZGVscy92ZXJ0aWNhbHJlc3VsdHMnO1xuaW1wb3J0IFVuaXZlcnNhbFJlc3VsdHMgZnJvbSAnLi9tb2RlbHMvdW5pdmVyc2FscmVzdWx0cyc7XG5cbi8qKlxuICogQ29yZSBpcyB0aGUgbWFpbiBhcHBsaWNhdGlvbiBjb250YWluZXIgZm9yIGFsbCBvZiB0aGUgbmV0d29yayBhbmQgc3RvcmFnZVxuICogcmVsYXRlZCBiZWhhdmlvcnMgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JlIHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIGlmICh0eXBlb2Ygb3B0cy5hcGlLZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYGFwaUtleWAuIFR5cGUgbXVzdCBiZSB7c3RyaW5nfScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0cy5hbnN3ZXJzS2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGBhbnN3ZXJzS2V5YC4gVHlwZSBtdXN0IGJlIHtzdHJpbmd9Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNsaWVudCBBUEkgS2V5IHVzZWQgZm9yIGFsbCByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjbGllbnQgQW5zd2VycyBLZXkgdXNlZCBmb3IgYWxsIHJlcXVlc3RzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Fuc3dlcnNLZXkgPSBvcHRzLmFuc3dlcnNLZXk7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IGxvY2FsZSB1c2VkIGZvciBhbGwgcmVxdWVzdHMuIElmIG5vdCBzcGVjaWZpZWQsIGRlZmF1bHRzIHRvIFwiZW5cIiAoZm9yXG4gICAgICogYmFja3dhcmRzIGNvbXBhdGliaWxpdHkpLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9sb2NhbGUgPSBvcHRzLmxvY2FsZSB8fCAnZW4nO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNvcmUgZGF0YSBzdG9yYWdlIHRoYXQgcG93ZXJzIHRoZSBVSVxuICAgICAqIEB0eXBlIHtTdG9yYWdlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5zdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIGNvbnRhaW5pbmcgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIFJFU1RmdWwgc2VhcmNoIEFQSVxuICAgICAqIEZvciBib3RoIHZlcnRpY2FsIGFuZCB1bml2ZXJzYWwgc2VhcmNoXG4gICAgICogQHR5cGUge1NlYXJjaH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaGVyID0gbmV3IFNlYXJjaEFwaSh7XG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIGFuc3dlcnNLZXk6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3Rpb24gY29udGFpbmluZyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgUkVTVGZ1bCBhdXRvY29tcGxldGUgQVBJXG4gICAgICogRm9yIGZpbHRlciBzZWFyY2gsIHZlcnRpY2FsIGF1dG9jb21wbGV0ZSwgYW5kIHVuaXZlcnNhbCBhdXRvY29tcGxldGVcbiAgICAgKiBAdHlwZSB7QXV0b2NvbXBsZXRlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXV0b0NvbXBsZXRlID0gbmV3IEF1dG9Db21wbGV0ZUFwaSh7XG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIGFuc3dlcnNLZXk6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZVxuICAgIH0pO1xuICB9XG5cbiAgdmVydGljYWxTZWFyY2ggKHF1ZXJ5U3RyaW5nLCB2ZXJ0aWNhbEtleSwgZmlsdGVyKSB7XG4gICAgdGhpcy5zdG9yYWdlLnNldChTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTLCBWZXJ0aWNhbFJlc3VsdHMuc2VhcmNoTG9hZGluZygpKTtcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoZXJcbiAgICAgIC52ZXJ0aWNhbFF1ZXJ5KHF1ZXJ5U3RyaW5nLCB2ZXJ0aWNhbEtleSwgZmlsdGVyKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gU2VhcmNoRGF0YVRyYW5zZm9ybWVyLnRyYW5zZm9ybVZlcnRpY2FsKHJlc3BvbnNlKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBkYXRhW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuTkFWSUdBVElPTiwgZGF0YVtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUywgZGF0YVtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaCAocXVlcnlTdHJpbmcsIHVybHMpIHtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTLCBVbml2ZXJzYWxSZXN1bHRzLnNlYXJjaExvYWRpbmcoKSk7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaGVyXG4gICAgICAucXVlcnkocXVlcnlTdHJpbmcpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBTZWFyY2hEYXRhVHJhbnNmb3JtZXIudHJhbnNmb3JtKHJlc3BvbnNlLCB1cmxzKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBkYXRhW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuTkFWSUdBVElPTiwgZGF0YVtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuRElSRUNUX0FOU1dFUiwgZGF0YVtTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSXSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFMsIGRhdGFbU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFNdLCB1cmxzKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGFuIGlucHV0LCBxdWVyeSBmb3IgYSBsaXN0IG9mIHNpbWlsYXIgcmVzdWx0cyBhbmQgc2V0IGludG8gc3RvcmFnZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgICAgIHRoZSBzdHJpbmcgdG8gYXV0b2NvbXBsZXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlVW5pdmVyc2FsIChpbnB1dCwgbmFtZXNwYWNlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5VW5pdmVyc2FsKGlucHV0KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke25hbWVzcGFjZX1gLCBkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGFuIGlucHV0LCBxdWVyeSBmb3IgYSBsaXN0IG9mIHNpbWlsYXIgcmVzdWx0cyBpbiB0aGUgcHJvdmlkZWQgdmVydGljYWxcbiAgICogYW5kIHNldCBpbnRvIHN0b3JhZ2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0ICAgICAgIHRoZSBzdHJpbmcgdG8gYXV0b2NvbXBsZXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmVydGljYWxLZXkgdGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIGV4cGVyaWVuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJhcktleSAgICAgIHRoZSBiYXIga2V5IGZvciB0aGUgZXhwZXJpZW5jZVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlVmVydGljYWwgKGlucHV0LCBuYW1lc3BhY2UsIHZlcnRpY2FsS2V5LCBiYXJLZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0NvbXBsZXRlXG4gICAgICAucXVlcnlWZXJ0aWNhbChpbnB1dCwgdmVydGljYWxLZXksIGJhcktleSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkFVVE9DT01QTEVURX0uJHtuYW1lc3BhY2V9YCwgZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhbiBpbnB1dCwgcHJvdmlkZSBhIGxpc3Qgb2Ygc3VpdGFibGUgZmlsdGVycyBmb3IgYXV0b2NvbXBsZXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0ICAgICAgICAgdGhlIHN0cmluZyB0byBzZWFyY2ggZm9yIGZpbHRlcnMgd2l0aFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlICAgICB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbEtleSAgIHRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBleHBlcmllbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiYXJLZXkgICAgICAgIHRoZSBiYXIga2V5IGZvciB0aGUgZXhwZXJpZW5jZVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlRmlsdGVyIChpbnB1dCwgbmFtZXNwYWNlLCB2ZXJ0aWNhbEtleSwgYmFyS2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5RmlsdGVyKGlucHV0LCB2ZXJ0aWNhbEtleSwgYmFyS2V5KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke25hbWVzcGFjZX1gLCBkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgZ2l2ZW4gcXVlcnkgaW50byBzdG9yYWdlLCB0byBiZSB1c2VkIGZvciB0aGUgbmV4dCBzZWFyY2hcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBxdWVyeSB0byBzdG9yZVxuICAgKi9cbiAgc2V0UXVlcnkgKHF1ZXJ5KSB7XG4gICAgdGhpcy5zdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWSwgcXVlcnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgcHJvdmlkZWQgcXVlcnkgSUQsIHRvIGJlIHVzZWQgaW4gYW5hbHl0aWNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeUlkIFRoZSBxdWVyeSBpZCB0byBzdG9yZVxuICAgKi9cbiAgc2V0UXVlcnlJZCAocXVlcnlJZCkge1xuICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFUllfSUQsIHF1ZXJ5SWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgZ2l2ZW4gZmlsdGVyIGludG8gc3RvcmFnZSwgdG8gYmUgdXNlZCBmb3IgdGhlIG5leHQgc2VhcmNoXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKiBAcGFyYW0ge0ZpbHRlcn0gZmlsdGVyICAgIHRoZSBmaWx0ZXIgdG8gc2V0XG4gICAqL1xuICBzZXRGaWx0ZXIgKG5hbWVzcGFjZSwgZmlsdGVyKSB7XG4gICAgdGhpcy5zdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7bmFtZXNwYWNlfWAsIGZpbHRlcik7XG4gIH1cblxuICBvbiAoZXZ0LCBtb2R1bGVJZCwgY2IpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLm9uKGV2dCwgbW9kdWxlSWQsIGNiKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQ29tcG9uZW50TWFuYWdlciAqL1xuXG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuXG4vKipcbiAqIENvbXBvbmVudE1hbmFnZXIgaXMgYSBTaW5nbGV0b25lIHRoYXQgY29udGFpbnMgYm90aCBhbiBpbnRlcm5hbCByZWdpc3RyeSBvZlxuICogZWxpZ2libGUgY29tcG9uZW50cyB0byBiZSBjcmVhdGVkLCBhcyB3ZWxsIGFzIGtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50XG4gKiBpbnN0YW50aWF0ZWQgYW5kIGFjdGl2ZSBjb21wb25lbnRzLlxuICpcbiAqIEFMTCBjb21wb25lbnRzIHNob3VsZCBiZSBjb25zdHJ1Y3RlZCB1c2luZyB0aGUge0NvbXBvbmVudE1hbmFnZXJ9IHZpYSBpdHMgYGNyZWF0ZWAgbWV0aG9kLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIGlmICghQ29tcG9uZW50TWFuYWdlci5zZXRJbnN0YW5jZSh0aGlzKSkge1xuICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9uZW50IHJlZ2lzdHJ5IGlzIGFuIGludGVybmFsIG1hcCwgdGhhdCBjb250YWluc1xuICAgICAqIGFsbCBhdmFpbGFibGUgY29tcG9uZW50IENMQVNTRVMgdXNlZCBmb3IgY3JlYXRpb24gb3Igb3ZlcnJpZGUuXG4gICAgICogRWFjaCBjb21wb25lbnQgY2xhc3MgaGFzIGEgdW5pcXVlIFRZUEUsIHdoaWNoIGlzIHVzZWQgYXMgdGhlIGtleSBmb3IgdGhlIHJlZ2lzdHJ5XG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9jb21wb25lbnRSZWdpc3RyeSA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFjdGl2ZSBjb21wb25lbnRzIGlzIGFuIGludGVybmFsIGNvbnRhaW5lciB0byBrZWVwIHRyYWNrXG4gICAgICogb2YgYWxsIG9mIHRoZSBjb21wb25lbnRzIHRoYXQgaGF2ZSBiZWVuIGNvbnN0cnVjdGVkXG4gICAgICovXG4gICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNvcmUgbGlicmFyeSBkZXBlbmRlbmN5XG4gICAgICpcbiAgICAgKiBUaGUgQ29yZSBjb250YWlucyBib3RoIHRoZSBzdG9yYWdlIEFORCBzZXJ2aWNlcyB0aGF0IGFyZSBuZWVkZWQgZm9yIHBlcmZvcm1pbmcgb3BlcmF0aW9uc1xuICAgICAqIGxpa2Ugc2VhcmNoIGFuZCBhdXRvIGNvbXBsZXRlLlxuICAgICAqXG4gICAgICogVGhlIHN0b3JhZ2UgaXMgdGhlIHNvdXJjZSBvZiB0cnV0aCBmb3IgdGhlIHN0YXRlIG9mIEFMTCBjb21wb25lbnRzLlxuICAgICAqIFdoZW5ldmVyIHRoZSBzdG9yYWdlIGlzIHVwZGF0ZWQsIHRoZSBzdGF0ZSBnZXRzIHB1c2hlZCBkb3duIHRvIHRoZSBuZWNlc3NhcnkgY29tcG9uZW50cy5cbiAgICAgKiBAdHlwZSB7Q29yZX1cbiAgICAgKi9cbiAgICB0aGlzLl9jb3JlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBwcmltYXJ5IHJlbmRlcmVyIHRvIHVzZSBmb3IgYWxsIGNvbXBvbmVudHNcbiAgICAgKiBAdHlwZSB7SGFuZGxlYmFyc1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3JlbmRlcmVyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBhbmFseXRpY3MgcmVwb3J0ZXIgZGVwZW5kZW5jeVxuICAgICAqL1xuICAgIHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyID0gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBzZXRJbnN0YW5jZSAoaW5zdGFuY2UpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UgKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgc2V0UmVuZGVyZXIgKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldENvcmUgKGNvcmUpIHtcbiAgICB0aGlzLl9jb3JlID0gY29yZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldEFuYWx5dGljc1JlcG9ydGVyIChyZXBvcnRlcikge1xuICAgIHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyID0gcmVwb3J0ZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXJzIGEgY29tcG9uZW50IHRvIGJlIGVsaWdpYmxlIGZvciBjcmVhdGlvbiBhbmQgb3ZlcnJpZGUuXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBUaGUgQ29tcG9uZW50IENsYXNzIHRvIHJlZ2lzdGVyXG4gICAqL1xuICByZWdpc3RlciAoY29tcG9uZW50Q2xhenopIHtcbiAgICB0aGlzLl9jb21wb25lbnRSZWdpc3RyeVtjb21wb25lbnRDbGF6ei50eXBlXSA9IGNvbXBvbmVudENsYXp6O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZSBpcyB0aGUgZW50cnkgcG9pbnQgZm9yIGNvbnN0cnVjdGluZyBhbnkgYW5kIGFsbCBjb21wb25lbnRzLlxuICAgKiBJdCB3aWxsIGluc3RhbnRpYXRlIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQsIGFuZCBib3RoIGFwcGx5XG4gICAqIGluaXRpYWwgc3RhdGUgZnJvbSB0aGUgc3RvcmFnZSBhbmQgYmluZCBpdCB0byB0aGUgc3RvcmFnZSBmb3IgdXBkYXRlcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudFR5cGUgVGhlIGNvbXBvbmVudCB0eXBlIHRvIGNyZWF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBUaGUgb3B0aW9ucyB0byBwaXBlIHRvIHRoZSBjb25zdHJ1Y3Rpb24gb2YgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgY3JlYXRlIChjb21wb25lbnRUeXBlLCBvcHRzKSB7XG4gICAgLy8gRXZlcnkgY29tcG9uZW50IG5lZWRzIGxvY2FsIGFjY2VzcyB0byB0aGUgY29tcG9uZW50IG1hbmFnZXJcbiAgICAvLyBiZWNhdXNlIHNvbWV0aW1lcyBjb21wb25lbnRzIGhhdmUgc3ViY29tcG9uZW50cyB0aGF0IG5lZWQgdG8gYmVcbiAgICAvLyBjb25zdHJ1Y3RlZCBkdXJpbmcgY3JlYXRpb25cbiAgICBvcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb3JlOiB0aGlzLl9jb3JlLFxuICAgICAgcmVuZGVyZXI6IHRoaXMuX3JlbmRlcmVyLFxuICAgICAgYW5hbHl0aWNzUmVwb3J0ZXI6IHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyLFxuICAgICAgY29tcG9uZW50TWFuYWdlcjogdGhpc1xuICAgIH0sIG9wdHMpO1xuXG4gICAgbGV0IGNvbXBvbmVudENsYXNzID0gdGhpcy5fY29tcG9uZW50UmVnaXN0cnlbY29tcG9uZW50VHlwZV07XG5cbiAgICBpZiAoXG4gICAgICAhY29tcG9uZW50Q2xhc3MuYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkKCkgJiZcbiAgICAgIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMuc29tZShjID0+IGMubmFtZSA9PT0gb3B0cy5uYW1lKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgYEFub3RoZXIgY29tcG9uZW50IHdpdGggbmFtZSAke29wdHMubmFtZX0gYWxyZWFkeSBleGlzdHNgLFxuICAgICAgICBjb21wb25lbnRUeXBlKTtcbiAgICB9XG5cbiAgICAvLyBJbnN0YW50aWF0ZSBvdXIgbmV3IGNvbXBvbmVudCBhbmQga2VlcCB0cmFjayBvZiBpdFxuICAgIGxldCBjb21wb25lbnQgPVxuICAgICAgbmV3IHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5W2NvbXBvbmVudFR5cGVdKG9wdHMpXG4gICAgICAgIC5pbml0KG9wdHMpO1xuXG4gICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIGxvY2FsIHN0b3JhZ2UgdG8gcG93ZXIgc3RhdGUsIGFwcGx5IHRoZSBzdGF0ZVxuICAgIC8vIGZyb20gdGhlIHN0b3JhZ2UgdG8gdGhlIGNvbXBvbmVudCwgYW5kIHRoZW4gYmluZCB0aGUgY29tcG9uZW50XG4gICAgLy8gc3RhdGUgdG8gdGhlIHN0b3JhZ2UgdmlhIGl0cyB1cGRhdGVzXG4gICAgaWYgKHRoaXMuX2NvcmUgJiYgdGhpcy5fY29yZS5zdG9yYWdlICE9PSBudWxsKSB7XG4gICAgICBpZiAoY29tcG9uZW50Lm1vZHVsZUlkID09PSB1bmRlZmluZWQgfHwgY29tcG9uZW50Lm1vZHVsZUlkID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NvcmUuc3RvcmFnZVxuICAgICAgICAub24oJ3VwZGF0ZScsIGNvbXBvbmVudC5tb2R1bGVJZCwgKGRhdGEpID0+IHtcbiAgICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnQ7XG4gIH1cblxuICBnZXRBY3RpdmVDb21wb25lbnQgKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5maW5kKGMgPT4gYy5jb25zdHJ1Y3Rvci50eXBlID09PSB0eXBlKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVuZGVyZXIgKi9cblxuLyoqXG4gKiBSZW5kZXJlciBpcyBhbiBhYnN0cmFjdCBjbGFzcyB0aGF0IGFsbCBSZW5kZXJlcnMgc2hvdWxkIGV4dGVuZCBhbmQgaW1wbGVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcbiAgLyoqXG4gICAqIHJlbmRlciBpcyBhIGNvcmUgbWV0aG9kIGZvciBhbGwgcmVuZGVyZXJzLlxuICAgKiBBbGwgaW1wbGVtZW50YXRpb25zIHNob3VsZCBvdmVycmlkZSB0aGlzIGNsYXNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKi9cbiAgcmVuZGVyICh0ZW1wbGF0ZSwgZGF0YSkge1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHJlZ2lzdGVySGVscGVyIChuYW1lLCBjYikge1xuXG4gIH1cblxuICBjb21waWxlICh0ZW1wbGF0ZSkge1xuXG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEhhbmRsZWJhcnNSZW5kZXJlciAqL1xuXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbi8qKlxuICogSGFuZGxlYmFyc1JlbmRlcmVyIGlzIGEgd3JhcHBlciBhcm91bmQgdGhlIG5hdGl2YXRlIGhhbmRsZWJhcnMgcmVuZGVyZXIuXG4gKiBAZXh0ZW5kcyBSZW5kZXJlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYW5kbGViYXJzUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yICh0ZW1wbGF0ZXMgPSB7fSwgb3B0cyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBoYW5kbGViYXJzIGNvbXBpbGVyXG4gICAgICogQHR5cGUge0hhbmRsZWJhcnN9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9oYW5kbGViYXJzID0gdGVtcGxhdGVzLl9oYiB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIHByZS1jb21waWxlZCBoYW5kbGViYXJzIHRlbXBsYXRlc1xuICAgICAqIEB0eXBlIHtIYW5kbGViYXJzfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVzID0gdGVtcGxhdGVzIHx8IHt9O1xuICB9XG5cbiAgaW5pdCAodGVtcGxhdGVzKSB7XG4gICAgLy8gQXNzaWduIHRoZSBoYW5kbGViYXJzIGNvbXBpbGVyIGFuZCB0ZW1wbGF0ZXMgYmFzZWQgb25cbiAgICAvLyBpbmZvcm1hdGlvbiBwcm92aWRlZCBmcm9tIGV4dGVybmFsIGRlcCAoaW4gZGVmYXVsdCBjYXNlLCBpdCBjb21lcyBmcm9tIGV4dGVybmFsIHNlcnZlciByZXF1ZXN0KVxuICAgIHRoaXMuX2hhbmRsZWJhcnMgPSB0ZW1wbGF0ZXMuX2hiO1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHRlbXBsYXRlcztcblxuICAgIC8vIFRPRE8oYmlsbHkpIE9uY2Ugd2UgcmUtd3JpdGUgdGVtcGxhdGVzIHVzaW5nIHRoZSBuZXcgaGVscGVycyBsaWJyYXJ5XG4gICAgLy8gd2UgcHJvYmFibHkgZG9uJ3QgbmVlZCB0aGVzZSBjdXN0b20gaGVscGVycyBhbnltb3JlXG4gICAgdGhpcy5fcmVnaXN0ZXJDdXN0b21IZWxwZXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXJIZWxwZXIgaXMgYSBwdWJsaWMgaW50ZXJmYWNlIGZvciBleHRlcm5hbCBkZXBlbmRlbmNpZXMgdG9cbiAgICogcmVnaXN0ZXIgdGhlaXIgb3duIGN1c3RvbSBoZWxwZXJzIHRvIG91ciBpbnRlcm5hbCBIYW5kbGViYXJzIENvbXBpbGVyXG4gICAqL1xuICByZWdpc3RlckhlbHBlciAobmFtZSwgY2IpIHtcbiAgICB0aGlzLl9oYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKG5hbWUsIGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb21waWxlIGEgaGFuZGxlYmFycyB0ZW1wbGF0ZSBzbyB0aGF0IGl0IGNhbiBiZSByZW5kZXJlZCxcbiAgICogdXNpbmcgdGhlIHtIYW5kbGViYXJzfSBjb21waWxlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgVGhlIHRlbXBsYXRlIHN0cmluZyB0byBjb21waWxlXG4gICAqL1xuICBjb21waWxlICh0ZW1wbGF0ZSkge1xuICAgIGlmICh0eXBlb2YgdGVtcGxhdGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9oYW5kbGViYXJzLmNvbXBpbGUodGVtcGxhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbmRlciB3aWxsIHJlbmRlciBhIHRlbXBsYXRlIHdpdGggZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFByb3ZpZGUgZWl0aGVyIGEgdGVtcGxhdGVOYW1lIG9yIGEgcHJlLWNvbXBpbGVkIHRlbXBsYXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHByb3ZpZGUgdG8gdGhlIHRlbXBsYXRlXG4gICAqL1xuICByZW5kZXIgKGNvbmZpZywgZGF0YSkge1xuICAgIC8vIElmIGEgY3VzdG9tIHRlbXBsYXRlIGlzIHByb3ZpZGVkLCB1c2UgaXQsXG4gICAgLy8gb3RoZXJ3aXNlIGZhbGwgYmFjayB0byB0aGUgdGVtcGxhdGUgbmFtZVxuICAgIC8vIFRPRE8oYmlsbHkpIFRoaXMgaW50ZXJmYWNlIHNob3VsZCBwcm9iYWJseSBiZSBsZXNzIHVnbHlcbiAgICBpZiAoY29uZmlnLnRlbXBsYXRlICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gY29uZmlnLnRlbXBsYXRlKGRhdGEpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVzW2NvbmZpZy50ZW1wbGF0ZU5hbWVdKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBmaW5kL3JlbmRlciB0ZW1wbGF0ZTogJyArIGNvbmZpZy50ZW1wbGF0ZU5hbWUsIGUpO1xuICAgIH1cbiAgfVxuXG4gIF9yZWdpc3RlckN1c3RvbUhlbHBlcnMgKCkge1xuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2lmZXEnLCBmdW5jdGlvbiAoYXJnMSwgYXJnMiwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIChhcmcxID09PSBhcmcyKSA/IG9wdGlvbnMuZm4odGhpcykgOiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdpZm5vdGVxJywgZnVuY3Rpb24gKGFyZzEsIGFyZzIsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiAoYXJnMSAhPT0gYXJnMikgPyBvcHRpb25zLmZuKHRoaXMpIDogb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignZm9ybWF0UGhvbmVOdW1iZXInLCBmdW5jdGlvbiAocGhvbmVOdW1iZXJTdHJpbmcpIHtcbiAgICAgIHZhciBjbGVhbmVkID0gKCcnICsgcGhvbmVOdW1iZXJTdHJpbmcpLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG4gICAgICB2YXIgbWF0Y2ggPSBjbGVhbmVkLm1hdGNoKC9eKDF8KT8oXFxkezN9KShcXGR7M30pKFxcZHs0fSkkLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdmFyIGludGxDb2RlID0gKG1hdGNoWzFdID8gJysxICcgOiAnJyk7XG4gICAgICAgIHJldHVybiBbaW50bENvZGUsICcoJywgbWF0Y2hbMl0sICcpICcsIG1hdGNoWzNdLCAnLScsIG1hdGNoWzRdXS5qb2luKCcnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignYXNzaWduJywgZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIG9wdGlvbnMgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmICghb3B0aW9ucy5kYXRhLnJvb3QpIHtcbiAgICAgICAgb3B0aW9ucy5kYXRhLnJvb3QgPSB7fTtcbiAgICAgIH1cblxuICAgICAgbGV0IHYgPSAnJztcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgdiA9IHYgKyBhcmdzW2ldO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLmRhdGEucm9vdFtuYW1lXSA9IHY7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdqc29uJywgZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gbmFtZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgID8gJydcbiAgICAgICAgOiBKU09OLnN0cmluZ2lmeShuYW1lKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEhhbmRsZWJhcnNSZW5kZXJlciBmcm9tICcuL2hhbmRsZWJhcnNyZW5kZXJlcic7XG5cbi8vIEluIHRoZSBmdXR1cmUsIHRoaXMgd2lsbCBjb250YWluIGFsbCBkaWZmZXJlbnQgdHlwZXMgb2YgcmVuZGVyZXJzXG4vLyBFLmcuIE11c3RhY2hlLCBTT1ksIEhhbmRsZUJhcnMsIFJlYWN0LCBldGMuXG5leHBvcnQgY29uc3QgUmVuZGVyZXJzID0ge1xuICBTT1k6IFJlbmRlcmVyLFxuICBIYW5kbGViYXJzOiBIYW5kbGViYXJzUmVuZGVyZXJcbn07XG4iLCIvKiogQG1vZHVsZSBET00gKi9cblxuLyogZ2xvYmFsIEhUTUxFbGVtZW50LCBIVE1MRG9jdW1lbnQsIFdpbmRvdywgRXZlbnQgKi9cblxubGV0IGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuXG4vKipcbiAqIFN0YXRpYyBpbnRlcmZhY2UgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIERPTSBBUEkuXG4gKiBAbmFtZXNwYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTSB7XG4gIHN0YXRpYyBzZXR1cCAoZCwgcCkge1xuICAgIGRvY3VtZW50ID0gZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGUgYSBIVE1MRWxlbWVudCBmcm9tIGFuZCBIVE1MIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gaHRtbCBUaGUgSFRNTCB0byBwYXJzZSB0byBhIERPTSBub2RlLlxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGUgKGh0bWwpIHtcbiAgICBpZiAoJ2NyZWF0ZVJhbmdlJyBpbiBkb2N1bWVudCkge1xuICAgICAgLy8gcHJlZmVyIHRoaXMgaW1wbGVtZW50YXRpb24gYXMgaXQgaGFzIHdpZGVyIGJyb3dzZXIgc3VwcG9ydFxuICAgICAgLy8gYW5kIGl0J3MgYmV0dGVyIHBlcmZvcm1pbmcuXG4gICAgICAvLyBzZWUgaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvY29udmVydC1odG1sLXN0aW5ncy1kb20tbm9kZXNcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGh0bWwpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWcpO1xuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvLyBmYWxsYmFjayB0byB0aGlzIGJlY2F1c2Ugb2YgYSBidWcgaW4ganNkb20gdGhhdCBjYXVzZXMgdGVzdHMgdG8gZmFpbFxuICAgIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pzZG9tL2pzZG9tL2lzc3Vlcy8zOTlcbiAgICByZXR1cm4gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC9odG1sJykuYm9keTtcbiAgfVxuXG4gIC8qKlxuICAgKiBxdWVyeSB0aGUgRE9NIGZvciBhIGdpdmVuIGNzcyBzZWxlY3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgT3B0aW9uYWwgY29udGV4dCB0byB1c2UgZm9yIGEgc2VhcmNoLiBEZWZhdWx0cyB0byBkb2N1bWVudCBpZiBub3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciB0aGUgQ1NTIHNlbGVjdG9yIHRvIHF1ZXJ5IGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IHRoZSBGSVJTVCBub2RlIGl0IGZpbmRzLCBpZiBhbnlcbiAgICovXG4gIHN0YXRpYyBxdWVyeSAocGFyZW50LCBzZWxlY3Rvcikge1xuICAgIC8vIEZhY2FkZSwgc2hpZnRpbmcgdGhlIHNlbGVjdG9yIHRvIHRoZSBwYXJlbnQgYXJndW1lbnQgaWYgb25seSBvbmVcbiAgICAvLyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RvciA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgV2luZG93IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTERvY3VtZW50KSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBxdWVyeSB0aGUgRE9NIGZvciBhIGdpdmVuIGNzcyBzZWxlY3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgT3B0aW9uYWwgY29udGV4dCB0byB1c2UgZm9yIGEgc2VhcmNoLiBEZWZhdWx0cyB0byBkb2N1bWVudCBpZiBub3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciB0aGUgQ1NTIHNlbGVjdG9yIHRvIHF1ZXJ5IGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IHRoZSBGSVJTVCBub2RlIGl0IGZpbmRzLCBpZiBhbnlcbiAgICovXG4gIHN0YXRpYyBxdWVyeUFsbCAocGFyZW50LCBzZWxlY3Rvcikge1xuICAgIC8vIEZhY2FkZSwgc2hpZnRpbmcgdGhlIHNlbGVjdG9yIHRvIHRoZSBwYXJlbnQgYXJndW1lbnQgaWYgb25seSBvbmVcbiAgICAvLyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RvciA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIC8vIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSBjbGllbnQgY29kZSBpcyB1c2luZyBhIHBvaW50ZXIgdG8gYSBkb20gbm9kZSBhbmQgaXQncyBudWxsLCBlLmcuIHRoaXMuX2NvbnRhaW5lclxuICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBXaW5kb3cpIHtcbiAgICAgIHJldHVybiBbc2VsZWN0b3JdO1xuICAgIH1cblxuICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gIH1cblxuICBzdGF0aWMgb25SZWFkeSAoY2IpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGVkJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKSB7XG4gICAgICBjYigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIERPTS5vbihkb2N1bWVudCwgJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlRWxlIHdpbGwgY3JlYXRlIGEge0hUTUxFbGVtZW50fSBhbmQgYXBwbHkgdGhlIHByb3BlcnRpZXMgYXR0cmlidXRlcyB0aHJvdWdoIGFuIG9iamVjdCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGVsIFRoZSBlbGVtZW50IGB0YWdgIG5hbWUgdG8gY29uc3RydWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzX2RhdGEgT3B0aW9uYWwgYXR0cmlidXRlcyB0byBhcHBseSB0byB0aGUgbmV3IEhUTUxFbGVtZW50XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlRWwgKGVsLCBvcHRzX2RhdGEgPSB7fSkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbCk7XG4gICAgbGV0IHByb3BzID0gT2JqZWN0LmtleXMob3B0c19kYXRhKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9wc1tpXSA9PT0gJ2NsYXNzJykge1xuICAgICAgICBET00uYWRkQ2xhc3Mobm9kZSwgb3B0c19kYXRhW3Byb3BzW2ldXSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBub2RlW3Byb3BzW2ldXSA9IG9wdHNfZGF0YVtwcm9wc1tpXV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgYXBwZW5kIChwYXJlbnQsIG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBub2RlID0gcGFyZW50O1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXJlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJlbnQgPSBET00ucXVlcnkocGFyZW50KTtcbiAgICB9XG5cbiAgICAvLyBTdXBwb3J0IEhUTUwgaW5qZWN0aW9uIGFzIHdlbGwgYXMgSFRNTEVsZW1lbnQgYXBwZW5kc1xuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyQmVnaW4nLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhZGRDbGFzcyAobm9kZSwgY2xhc3NOYW1lKSB7XG4gICAgbGV0IGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJywnKTtcbiAgICBsZXQgbGVuID0gY2xhc3Nlcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBub2RlLmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGVtcHR5IChwYXJlbnQpIHtcbiAgICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICBzdGF0aWMgY3NzIChzZWxlY3Rvciwgc3R5bGVzKSB7XG4gICAgbGV0IG5vZGUgPSBET00ucXVlcnkoc2VsZWN0b3IpO1xuXG4gICAgZm9yIChsZXQgcHJvcCBpbiBzdHlsZXMpIHtcbiAgICAgIG5vZGUuc3R5bGVbcHJvcF0gPSBzdHlsZXNbcHJvcF07XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGF0dHIgKHNlbGVjdG9yLCBhdHRyLCB2YWwpIHtcbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLnNldEF0dHJpYnV0ZShhdHRyLCB2YWwpO1xuICB9XG5cbiAgc3RhdGljIHRyaWdnZXIgKHNlbGVjdG9yLCBldmVudCwgc2V0dGluZ3MpIHtcbiAgICBsZXQgZSA9IG5ldyBFdmVudChldmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAnYnViYmxlcyc6IHRydWUsXG4gICAgICAnY2FuY2VsYWJsZSc6IHRydWVcbiAgICB9LCBzZXR0aW5ncyB8fCB7fSkpO1xuXG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5kaXNwYXRjaEV2ZW50KGUpO1xuICB9XG5cbiAgc3RhdGljIG9uIChzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgb2ZmIChzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZGVsZWdhdGUgKGN0eHQsIHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpIHtcbiAgICBsZXQgZWwgPSBET00ucXVlcnkoY3R4dCk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIHdoaWxlICghdGFyZ2V0LmlzRXF1YWxOb2RlKGVsKSkge1xuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgaGFuZGxlcihldmVudCwgdGFyZ2V0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU3RhdGUgKi9cblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi8uLi9jb3JlL2V2ZW50ZW1pdHRlci9ldmVudGVtaXR0ZXInO1xuXG4vKipcbiAqIFN0YXRlIGNvbnRhaW5zIHRoZSBkYXRhIGZvciB0aGUgY29tcG9uZW50XG4gKiBhbmQgZXhwb3NlcyBhbiB7RXZlbnRFbWl0dGVyfSBpbnRlcmZhY2Ugc28gdGhhdCBleHRlcm5hbFxuICogZGVwZW5kZW5jaWVzIGNhbiBsaXN0ZW4vaG9vayBzdWJzY3JpYmUgdG8gbWVzc2FnZXMvdXBkYXRlcy5cbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RhdGUgPSBkYXRhIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKiBOT1RFKGJpbGx5KTogRG9lcyBub3QgZmlyZSBhbiB1cGRhdGUgbWVzc2FnZVxuICAgKi9cbiAgaW5pdCAocHJvcCwgb3B0VmFsKSB7XG4gICAgdGhpcy5fc2V0KHByb3AsIG9wdFZhbCk7XG4gIH1cblxuICAvKipcbiAgICogc2V0dGVyIGZvciB0aGUgc3RhdGVcbiAgICogQHBhcmFtIHByb3Age3N0cmluZ3xPYmplY3R9IFRoZSBwcm9wZXJ0eSB0byBzZXRcbiAgICogQHBhcmFtIG9wdFZhbCBPcHRpb25hbCwgaWYgcHJvcCBpcyBhIHtzdHJpbmd9LCBpdCB3aWxsIGFzc2lnbiB0aGUgdmFsdWUgdG8gdGhhdCBwcm9wZXJ0eVxuICAgKi9cbiAgc2V0IChwcm9wLCBvcHRWYWwpIHtcbiAgICB0aGlzLl9zZXQocHJvcCwgb3B0VmFsKTtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldHRlciBmb3IgdGhlIHN0YXRlIGVuYWJsZXMgeW91IHRvIHVwZGF0ZSBhIHNpbmdsZSBwcm9wZXJ0eSwgb3IgY29tcGxldGUgc3RhdGVcbiAgICogZGVwZW5kaW5nIG9uIHRoZSBhcmd1bWVudHMgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSBwcm9wIHtzdHJpbmd8T2JqZWN0fSBUaGUgcHJvcGVydHkgdG8gc2V0XG4gICAqIEBwYXJhbSBvcHRWYWwgSWYgcHJvcCBpcyBhIHtzdHJpbmd9LCBwcm92aWRlIGl0cyB2YWx1ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NldCAocHJvcCwgb3B0VmFsKSB7XG4gICAgaWYgKG9wdFZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9zdGF0ZSA9IHByb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0YXRlW3Byb3BdID0gb3B0VmFsO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSAoZGF0YSkge1xuICAgIHRoaXMuX3N0YXRlID0gZGF0YTtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGEgcHJvcGVydGllcyB2YWx1ZSBmcm9tIHRoZSBzdGF0ZVxuICAgKiBJZiBubyBwcm9wZXJ0eSBwcm92aWRlZCwgcmV0dXJuIHRoZSBmdWxsIHN0YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRQcm9wIG9wdGlvbmFsIHByb3BlcnR5IHRvIHJldHJpZXZlXG4gICAqL1xuICBnZXQgKG9wdFByb3ApIHtcbiAgICBpZiAob3B0UHJvcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zdGF0ZVtvcHRQcm9wXTtcbiAgfVxuXG4gIGhhcyAocHJvcCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZVtwcm9wXSAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgYXNKU09OICgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gIH1cbn1cbiIsIi8qKlxuICogTW9kZWwgZm9yIHRoZSBhbmFseXRpY3MgZXZlbnQgdHlwZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmFseXRpY3NFdmVudCB7XG4gIGNvbnN0cnVjdG9yICh0eXBlLCBsYWJlbCkge1xuICAgIHRoaXMuZXZlbnRUeXBlID0gdHlwZS50b1VwcGVyQ2FzZSgpO1xuICAgIGlmIChsYWJlbCkge1xuICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBwcm92aWRlZCBvcHRpb25zIHRvIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBBZGRpdGlvbmFsIG9wdGlvbnMgZm9yIHRoZSBldmVudFxuICAgKi9cbiAgYWRkT3B0aW9ucyAob3B0aW9ucykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBldmVudCBpbiB0aGUgYXBpIGZvcm1hdCwgdHlwaWNhbGx5IGZvciByZXBvcnRpbmcgdG8gdGhlIGFwaVxuICAgKi9cbiAgdG9BcGlFdmVudCAoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBbmFseXRpY3NSZXBvcnRlciAqL1xuXG5pbXBvcnQgQW5hbHl0aWNzRXZlbnQgZnJvbSAnLi9hbmFseXRpY3NldmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCB7IEFOQUxZVElDU19CQVNFX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgSHR0cFJlcXVlc3RlciBmcm9tICcuLi9odHRwL2h0dHByZXF1ZXN0ZXInO1xuXG4vKipcbiAqIENsYXNzIGZvciByZXBvcnRpbmcgYW5hbHl0aWNzIGV2ZW50cyB0byB0aGUgc2VydmVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuYWx5dGljc1JlcG9ydGVyIHtcbiAgY29uc3RydWN0b3IgKGNvcmUsIGFuc3dlcnNLZXksIGJ1c2luZXNzSWQsIGdsb2JhbE9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuX2J1c2luZXNzSWQgPSBidXNpbmVzc0lkO1xuXG4gICAgLyoqXG4gICAgICogT3B0aW9ucyB0byBpbmNsdWRlIHdpdGggZXZlcnkgYW5hbHl0aWMgZXZlbnQgcmVwb3J0ZWQgdG8gdGhlIHNlcnZlclxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9nbG9iYWxPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZ2xvYmFsT3B0aW9ucywgeyBhbnN3ZXJzS2V5IH0pO1xuXG4gICAgLy8gbGlzdGVuIHRvIHF1ZXJ5IGlkIHVwZGF0ZXNcbiAgICBjb3JlLnN0b3JhZ2Uub24oJ3VwZGF0ZScsIFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBpZCA9PiB0aGlzLnNldFF1ZXJ5SWQoaWQpKTtcbiAgfVxuXG4gIHNldFF1ZXJ5SWQgKHF1ZXJ5SWQpIHtcbiAgICB0aGlzLl9nbG9iYWxPcHRpb25zLnF1ZXJ5SWQgPSBxdWVyeUlkO1xuICB9XG5cbiAgcmVwb3J0IChldmVudCkge1xuICAgIGlmICghKGV2ZW50IGluc3RhbmNlb2YgQW5hbHl0aWNzRXZlbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0FuYWx5dGljc0Vycm9yKCdUcmllZCB0byBzZW5kIGludmFsaWQgYW5hbHl0aWNzIGV2ZW50JywgZXZlbnQpO1xuICAgIH1cblxuICAgIGV2ZW50LmFkZE9wdGlvbnModGhpcy5fZ2xvYmFsT3B0aW9ucyk7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IEh0dHBSZXF1ZXN0ZXIoKTtcblxuICAgIHJldHVybiByZXF1ZXN0LmJlYWNvbihcbiAgICAgIGAke0FOQUxZVElDU19CQVNFX1VSTH0vcmVhbHRpbWVhbmFseXRpY3MvZGF0YS9hbnN3ZXJzLyR7dGhpcy5fYnVzaW5lc3NJZH1gLFxuICAgICAgeyAnZGF0YSc6IGV2ZW50LnRvQXBpRXZlbnQoKSB9XG4gICAgKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQ29tcG9uZW50ICovXG5cbmltcG9ydCB7IFJlbmRlcmVycyB9IGZyb20gJy4uL3JlbmRlcmluZy9jb25zdCc7XG5cbmltcG9ydCBET00gZnJvbSAnLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RhdGUgZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBBbmFseXRpY3NSZXBvcnRlciB9IGZyb20gJy4uLy4uL2NvcmUnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgQW5hbHl0aWNzRXZlbnQgZnJvbSAnLi4vLi4vY29yZS9hbmFseXRpY3MvYW5hbHl0aWNzZXZlbnQnO1xuXG4vKipcbiAqIENvbXBvbmVudCBpcyBhbiBhYnN0cmFjdGlvbiB0aGF0IGVuY2Fwc3VsYXRlcyBzdGF0ZSwgYmVoYXZpb3IsXG4gKiBhbmQgdmlldyBmb3IgYSBwYXJ0aWN1bGFyIGNodW5rIG9mIGZ1bmN0aW9uYWxpdHkgb24gdGhlIHBhZ2UuXG4gKlxuICogVGhlIEFQSSBleHBvc2VzIGV2ZW50IGxpZmUgY3ljbGUgaG9va3MgZm9yIHdoZW4gdGhpbmdzIGFyZSByZW5kZXJlZCxcbiAqIG1vdW50ZWQsIGNyZWF0ZWQsIGV0Yy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHR5cGUsIGNvbmZpZyA9IHt9KSB7XG4gICAgLy8gU2ltcGxlIGZhY2FkZSBwYXR0ZXJuIHRvIGVuYWJsZSB0aGUgdXNlciB0byBwYXNzIGEgc2luZ2xlIG9iamVjdFxuICAgIC8vIGNvbnRhaW5pbmcgYWxsIHRoZSBuZWNlc3Nhcnkgb3B0aW9ucyBhbmQgc2V0dGluZ3NcbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25maWcgPSB0eXBlO1xuICAgICAgdHlwZSA9IGNvbmZpZy50eXBlO1xuICAgIH1cblxuICAgIHRoaXMubW9kdWxlSWQgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVW5pcXVlIG5hbWUgb2YgdGhpcyBjb21wb25lbnQgaW5zdGFuY2VcbiAgICAgKiBVc2VkIHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gb3RoZXIgY29tcG9uZW50cyBvZiB0aGUgc2FtZSB0eXBlXG4gICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm5hbWUgPSBjb25maWcubmFtZSB8fCB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICAvKipcbiAgICAgKiBDYWNoZSB0aGUgb3B0aW9ucyBzbyB0aGF0IHdlIGNhbiBwcm9wb2dhdGUgcHJvcGVybHkgdG8gY2hpbGQgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuXG4gICAgLyoqXG4gICAgICogQW4gaWRlbnRpZmllciB1c2VkIHRvIGNsYXNzaWZ5IHRoZSB0eXBlIG9mIGNvbXBvbmVudC5cbiAgICAgKiBUaGUgY29tcG9uZW50IG1hbmFnZXIgdXNlcyB0aGlzIGluZm9ybWF0aW9uIGluIG9yZGVyIHRvIHBlcnNpc3QgYW5kIG9yZ2FuaXplIGNvbXBvbmVudHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfENvbXBvbmVudFR5cGV9XG4gICAgICovXG4gICAgdGhpcy5fdHlwZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgY29tcG9uZW50LCBpZiBleGlzdHNcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50fVxuICAgICAqL1xuICAgIHRoaXMuX3BhcmVudCA9IGNvbmZpZy5wYXJlbnQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgY29udGFpbmVyIGZvciBhbGwgdGhlIGNoaWxkIGNvbXBvbmVudHNcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50W119XG4gICAgICovXG4gICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdGF0ZSAoZGF0YSkgb2YgdGhlIGNvbXBvbmVudCB0byBiZSBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgZm9yIHJlbmRlcmluZ1xuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5fc3RhdGUgPSBuZXcgU3RhdGUoY29uZmlnLnN0YXRlKTtcblxuICAgIC8qKlxuICAgICAqIFRPRE8oYmlsbHkpIFRoaXMgc2hvdWxkIGJlICdzZXJ2aWNlcydcbiAgICAgKi9cbiAgICB0aGlzLmNvcmUgPSBjb25maWcuY29yZSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCBtYW5hZ2VyLCB3aGljaCBjb250YWlucyBhbGwgb2YgdGhlIGNvbXBvbmVudCBjbGFzc2VzXG4gICAgICogZWxpZ2libGUgdG8gYmUgY3JlYXRlZFxuICAgICAqIEB0eXBlIHtDb21wb25lbnRNYW5hZ2VyfVxuICAgICAqL1xuICAgIHRoaXMuY29tcG9uZW50TWFuYWdlciA9IGNvbmZpZy5jb21wb25lbnRNYW5hZ2VyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgYW5hbHl0aWNzIHJlcG9ydGVyLCB1c2VkIHRvIHJlcG9ydCBldmVudHMgZm9yIHRoaXMgY29tcG9uZW50XG4gICAgICogQHR5cGUge0FuYWx5dGljc1JlcG9ydGVyfVxuICAgICAqL1xuICAgIHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIgPSBjb25maWcuYW5hbHl0aWNzUmVwb3J0ZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIE9wdGlvbnMgdG8gaW5jbHVkZSB3aXRoIGFsbCBhbmFseXRpYyBldmVudHMgc2VudCBieSB0aGlzIGNvbXBvbmVudFxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hbmFseXRpY3NPcHRpb25zID0gY29uZmlnLmFuYWx5dGljc09wdGlvbnMgfHwge307XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgRE9NIG5vZGUgdGhhdCB0aGUgY29tcG9uZW50IHdpbGwgYmUgYXBwZW5kZWQgdG8gd2hlbiBtb3VudGVkL3JlbmRlcmVkLlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBpZiAodGhpcy5fcGFyZW50ID09PSBudWxsKSB7XG4gICAgICBpZiAodHlwZW9mIGNvbmZpZy5jb250YWluZXIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBgY29udGFpbmVyYCBvcHRpb24gZm9yIGNvbXBvbmVudCBjb25maWd1cmF0aW9uLiBNdXN0IGJlIG9mIHR5cGUgYHN0cmluZ2AuJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jb250YWluZXIgPSBET00ucXVlcnkoY29uZmlnLmNvbnRhaW5lcikgfHwgbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29udGFpbmVyID0gRE9NLnF1ZXJ5KHRoaXMuX3BhcmVudC5fY29udGFpbmVyLCBjb25maWcuY29udGFpbmVyKTtcblxuICAgICAgLy8gSWYgd2UgaGF2ZSBhIHBhcmVudCwgYW5kIHRoZSBjb250YWluZXIgaXMgbWlzc2luZyBmcm9tIHRoZSBET00sXG4gICAgICAvLyB3ZSBjb25zdHJ1Y3QgdGhlIGNvbnRhaW5lciBhbmQgYXBwZW5kIGl0IHRvIHRoZSBwYXJlbnRcbiAgICAgIGlmICh0aGlzLl9jb250YWluZXIgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gRE9NLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IGNvbmZpZy5jb250YWluZXIuc3Vic3RyaW5nKDEsIGNvbmZpZy5jb250YWluZXIubGVuZ3RoKVxuICAgICAgICB9KTtcbiAgICAgICAgRE9NLmFwcGVuZCh0aGlzLl9wYXJlbnQuX2NvbnRhaW5lciwgdGhpcy5fY29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29udGFpbmVyID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIGNvbnRhaW5lciBET00gbm9kZTogJyArIGNvbmZpZy5jb250YWluZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIGNsYXNzIHRvIGJlIGFwcGxpZWQgdG8ge3RoaXMuX2NvbnRhaW5lcn0gbm9kZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fY2xhc3NOYW1lID0gY29uZmlnLmNsYXNzIHx8ICdjb21wb25lbnQnO1xuXG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gcmVuZGVyIGZ1bmN0aW9uIHRvIGJlIHVzZWQgaW5zdGVhZCBvZiB1c2luZyB0aGUgZGVmYXVsdCByZW5kZXJlclxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXIgPSBjb25maWcucmVuZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgZGVmYXVsdCB7UmVuZGVyZXJ9IHRoYXQgd2lsbCBiZSB1c2VkIGZvciByZW5kZXJpbmcgdGhlIHRlbXBsYXRlXG4gICAgICogQHR5cGUge1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3JlbmRlcmVyID0gY29uZmlnLnJlbmRlcmVyIHx8IFJlbmRlcmVycy5IYW5kbGViYXJzO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHN0cmluZyB0byB1c2UgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50XG4gICAgICogSWYgdGhpcyBpcyBsZWZ0IGVtcHR5LCB3ZSBsb29rdXAgdGhlIHRlbXBsYXRlIHRoZSBiYXNlIHRlbXBsYXRlcyB1c2luZyB0aGUgdGVtcGxhdGVOYW1lXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZSA9IGNvbmZpZy50ZW1wbGF0ZSA/IHRoaXMuX3JlbmRlcmVyLmNvbXBpbGUoY29uZmlnLnRlbXBsYXRlKSA6IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGVOYW1lIHRvIHVzZSBmb3IgcmVuZGVyaW5nIHRoZSBjb21wb25lbnQuXG4gICAgICogVGhpcyBpcyBvbmx5IHVzZWQgaWYgX3RlbXBsYXRlIGlzIGVtcHR5LlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gY29uZmlnLnRlbXBsYXRlTmFtZSB8fCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRUZW1wbGF0ZU5hbWUoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHN0YXRlIGluZGljYXRpbmcgd2hldGhlciBvciBub3QgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBtb3VudGVkIHRvIHRoZSBET01cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjaywgdGhhdHMgdXNlZCB0byB0cmFuc2Zvcm0gdGhlIGludGVybmFsIGRhdGFcbiAgICAgKiBtb2RlbHMgb2YgdGhlIGNvbXBvbmVudHMsIGJlZm9yZSBpdCBnZXRzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudCBzdGF0ZS5cbiAgICAgKiBCeSBkZWZhdWx0LCBubyB0cmFuc2Zvcm1hdGlvbiBoYXBwZW5zLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLnRyYW5zZm9ybURhdGEgPSBjb25maWcudHJhbnNmb3JtRGF0YSB8fCB0aGlzLnRyYW5zZm9ybURhdGEgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnQgaXMgY3JlYXRlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vbkNyZWF0ZSA9IGNvbmZpZy5vbkNyZWF0ZSB8fCB0aGlzLm9uQ3JlYXRlIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIGEgY29tcG9uZW50IGlzIE1vdW50ZWQuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMub25Nb3VudCA9IGNvbmZpZy5vbk1vdW50IHx8IHRoaXMub25Nb3VudCB8fCBmdW5jdGlvbiAoKSB7IH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnRzIHN0YXRlIGlzIHVwZGF0ZWQuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMub25VcGRhdGUgPSBjb25maWcub25VcGRhdGUgfHwgdGhpcy5vblVwZGF0ZSB8fCBmdW5jdGlvbiAoKSB7IH07XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ2RlZmF1bHQnO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0NvbXBvbmVudCc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpbml0IChvcHRzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShvcHRzLmRhdGEgfHwgb3B0cy5zdGF0ZSB8fCB7fSk7XG4gICAgdGhpcy5vbkNyZWF0ZSgpO1xuICAgIHRoaXMuX3N0YXRlLm9uKCd1cGRhdGUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uVXBkYXRlKCk7XG4gICAgICB0aGlzLm1vdW50KCk7XG4gICAgfSk7XG5cbiAgICBET00uYWRkQ2xhc3ModGhpcy5fY29udGFpbmVyLCB0aGlzLl9jbGFzc05hbWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHsgX2NvbmZpZzogdGhpcy5fY29uZmlnIH0sIGRhdGEpO1xuICAgIHRoaXMuX3N0YXRlLnNldChuZXdTdGF0ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRTdGF0ZSAocHJvcCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5nZXQocHJvcCk7XG4gIH1cblxuICBoYXNTdGF0ZSAocHJvcCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5oYXMocHJvcCk7XG4gIH1cblxuICB0cmFuc2Zvcm1EYXRhIChkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBhZGRDaGlsZCAoZGF0YSwgdHlwZSwgb3B0cykge1xuICAgIGxldCBjaGlsZENvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoXG4gICAgICB0eXBlLFxuICAgICAgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcbiAgICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9LCBvcHRzIHx8IHt9LCB7XG4gICAgICAgIF9wYXJlbnRPcHRzOiB0aGlzLl9jb25maWdcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGRDb21wb25lbnQpO1xuICAgIHJldHVybiBjaGlsZENvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHJlbmRlciBtZXRob2QgdG8gYmUgdXNlZCBmb3IgcmVuZGVyaW5nIHRoZSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVuZGVyXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHNldFJlbmRlciAocmVuZGVyKSB7XG4gICAgdGhpcy5fcmVuZGVyID0gcmVuZGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgcmVuZGVyZXIgZm9yIHRoZSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtSZW5kZXJlclR5cGV9IHJlbmRlcmVyXG4gICAqL1xuICBzZXRSZW5kZXJlciAocmVuZGVyZXIpIHtcbiAgICB0aGlzLl9yZW5kZXJlciA9IFJlbmRlcmVyc1tyZW5kZXJlcl07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdGVtcGxhdGUgZm9yIHRoZSBjb21wb25lbnQgdG8gdXNlIHdoZW4gcmVuZGVyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICAgKi9cbiAgc2V0VGVtcGxhdGUgKHRlbXBsYXRlKSB7XG4gICAgdGhpcy5fdGVtcGxhdGUgPSB0aGlzLl9yZW5kZXJlci5jb21waWxlKHRlbXBsYXRlKTtcbiAgfVxuXG4gIHVuTW91bnQgKCkge1xuICAgIERPTS5lbXB0eSh0aGlzLl9jb250YWluZXIpO1xuICB9XG5cbiAgbW91bnQgKCkge1xuICAgIGlmICghdGhpcy5fY29udGFpbmVyKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLnVuTW91bnQoKTtcbiAgICBpZiAodGhpcy5iZWZvcmVNb3VudCgpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgRE9NLmFwcGVuZCh0aGlzLl9jb250YWluZXIsIHRoaXMucmVuZGVyKHRoaXMuX3N0YXRlLmFzSlNPTigpKSk7XG5cbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIHRoaXMuX29uTW91bnQoKTtcblxuICAgIC8vIEF0dGFjaCBhbmFseXRpY3MgaG9va3MgYXMgbmVjZXNzYXJ5XG4gICAgaWYgKHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIpIHtcbiAgICAgIGxldCBkb21Ib29rcyA9IERPTS5xdWVyeUFsbCh0aGlzLl9jb250YWluZXIsICdbZGF0YS1ldmVudHR5cGVdOm5vdChbZGF0YS1pcy1hbmFseXRpY3MtYXR0YWNoZWRdKScpO1xuICAgICAgZG9tSG9va3MuZm9yRWFjaCh0aGlzLl9jcmVhdGVBbmFseXRpY3NIb29rLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX29uTW91bnQgKCkge1xuICAgIHRoaXMub25Nb3VudCh0aGlzKTtcbiAgICBpZiAodGhpcy5fY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBjaGlsZC5fb25Nb3VudCgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbmRlciB0aGUgdGVtcGxhdGUgdXNpbmcgdGhlIHtSZW5kZXJlcn0gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBhbmQgdGVtcGxhdGUgb2YgdGhlIGNvbXBvbmVudFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgcmVuZGVyIChkYXRhID0gdGhpcy5fc3RhdGUuZ2V0KCkpIHtcbiAgICB0aGlzLmJlZm9yZVJlbmRlcigpO1xuICAgIGRhdGEgPSB0aGlzLnRyYW5zZm9ybURhdGEoZGF0YSk7XG5cbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIC8vIFVzZSBlaXRoZXIgdGhlIGN1c3RvbSByZW5kZXIgZnVuY3Rpb24gb3IgdGhlIGludGVybmFsIHJlbmRlcmVyXG4gICAgLy8gZGVwZW5kYW50IG9uIHRoZSBjb21wb25lbnQgY29uZmlndXJhdGlvblxuICAgIGlmICh0eXBlb2YgdGhpcy5fcmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBodG1sID0gdGhpcy5fcmVuZGVyKGRhdGEpO1xuICAgICAgaWYgKHR5cGVvZiBodG1sICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlbmRlciBtZXRob2QgbXVzdCByZXR1cm4gSFRNTCBhcyB0eXBlIHtzdHJpbmd9Jyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlbmRlciB0aGUgZXhpc3RpbmcgdGVtcGxhdGVzIGFzIGEgc3RyaW5nXG4gICAgICBodG1sID0gdGhpcy5fcmVuZGVyZXIucmVuZGVyKHtcbiAgICAgICAgdGVtcGxhdGU6IHRoaXMuX3RlbXBsYXRlLFxuICAgICAgICB0ZW1wbGF0ZU5hbWU6IHRoaXMuX3RlbXBsYXRlTmFtZVxuICAgICAgfSwgZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gV2UgY3JlYXRlIGFuIEhUTUwgRG9jdW1lbnQgZnJhZ21lbnQgd2l0aCB0aGUgcmVuZGVyZWQgc3RyaW5nXG4gICAgLy8gU28gdGhhdCB3ZSBjYW4gcXVlcnkgaXQgZm9yIHByb2Nlc3Npbmcgb2Ygc3ViIGNvbXBvbmVudHNcbiAgICBsZXQgZWwgPSBET00uY3JlYXRlKGh0bWwpO1xuXG4gICAgLy8gUHJvY2VzcyB0aGUgRE9NIHRvIGRldGVybWluZSBpZiB3ZSBzaG91bGQgY3JlYXRlXG4gICAgLy8gaW4tbWVtb3J5IHN1Yi1jb21wb25lbnRzIGZvciByZW5kZXJpbmdcbiAgICBsZXQgZG9tQ29tcG9uZW50cyA9IERPTS5xdWVyeUFsbChlbCwgJ1tkYXRhLWNvbXBvbmVudF0nKTtcbiAgICBkb21Db21wb25lbnRzLmZvckVhY2goYyA9PiB0aGlzLl9jcmVhdGVTdWJjb21wb25lbnQoYywgZGF0YSkpO1xuXG4gICAgdGhpcy5hZnRlclJlbmRlcigpO1xuICAgIHJldHVybiBlbC5pbm5lckhUTUw7XG4gIH1cblxuICBfY3JlYXRlU3ViY29tcG9uZW50IChkb21Db21wb25lbnQsIGRhdGEpIHtcbiAgICBsZXQgZGF0YXNldCA9IGRvbUNvbXBvbmVudC5kYXRhc2V0O1xuICAgIGxldCB0eXBlID0gZGF0YXNldC5jb21wb25lbnQ7XG4gICAgbGV0IHByb3AgPSBkYXRhc2V0LnByb3A7XG4gICAgbGV0IG9wdHMgPSBkYXRhc2V0Lm9wdHMgPyBKU09OLnBhcnNlKGRhdGFzZXQub3B0cykgOiB7fTtcblxuICAgIC8vIFJlbmRlcmluZyBhIHN1YiBjb21wb25lbnQgc2hvdWxkIGJlIHdpdGhpbiB0aGUgY29udGV4dCxcbiAgICAvLyBvZiB0aGUgbm9kZSB0aGF0IHdlIHByb2Nlc3NlZCBpdCBmcm9tXG4gICAgb3B0cyA9IE9iamVjdC5hc3NpZ24ob3B0cywge1xuICAgICAgY29udGFpbmVyOiBkb21Db21wb25lbnRcbiAgICB9KTtcblxuICAgIGxldCBjaGlsZERhdGEgPSBkYXRhW3Byb3BdO1xuXG4gICAgLy8gVE9ETyhiaWxseSkgUmlnaHQgbm93LCBpZiB3ZSBwcm92aWRlIGFuIGFycmF5IGFzIHRoZSBkYXRhIHByb3AsXG4gICAgLy8gdGhlIGJlaGF2aW9yIGlzIHRvIGNyZWF0ZSBtYW55IGNvbXBvbmVudHMgZm9yIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkuXG4gICAgLy8gVEhBVCBpbnRlcmZhY2UgU0hPVUxEIGNoYW5nZSB0byB1c2UgYSBkaWZmZXJlbnQgcHJvcGVydHkgdGhhdCBkZWZpbmVzXG4gICAgLy8gd2hldGhlciB0byBhcnJheSBkYXRhIHNob3VsZCBiZSB1c2VkIGZvciBhIHNpbmdsZSBjb21wb25lbnQgb3JcbiAgICAvLyB0byBjcmVhdGUgbWFueSBjb21wb25lbnRzIGZvciBlYWNoIGl0ZW0uXG4gICAgLy8gT3ZlcmxvYWRpbmcgYW5kIGhhdmluZyB0aGlzIHNpZGUgZWZmZWN0IGlzIHVuaW50dWl0aXZlIGFuZCBXUk9OR1xuICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZERhdGEpKSB7XG4gICAgICBsZXQgY2hpbGRDb21wb25lbnQgPSB0aGlzLmFkZENoaWxkKGNoaWxkRGF0YSwgdHlwZSwgb3B0cyk7XG4gICAgICBET00uYXBwZW5kKGRvbUNvbXBvbmVudCwgY2hpbGRDb21wb25lbnQucmVuZGVyKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSwgcmVuZGVyIHRoZSBjb21wb25lbnQgYXMgZXhwZWN0ZWRcbiAgICBsZXQgY2hpbGRIVE1MID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZENvbXBvbmVudCA9IHRoaXMuYWRkQ2hpbGQoY2hpbGREYXRhW2ldLCB0eXBlLCBvcHRzKTtcbiAgICAgIGNoaWxkSFRNTC5wdXNoKGNoaWxkQ29tcG9uZW50LnJlbmRlcigpKTtcbiAgICB9XG5cbiAgICBET00uYXBwZW5kKGRvbUNvbXBvbmVudCwgY2hpbGRIVE1MLmpvaW4oJycpKTtcbiAgfVxuXG4gIF9jcmVhdGVBbmFseXRpY3NIb29rIChkb21Db21wb25lbnQpIHtcbiAgICBkb21Db21wb25lbnQuZGF0YXNldC5pc0FuYWx5dGljc0F0dGFjaGVkID0gdHJ1ZTtcbiAgICBjb25zdCBkYXRhc2V0ID0gZG9tQ29tcG9uZW50LmRhdGFzZXQ7XG4gICAgY29uc3QgdHlwZSA9IGRhdGFzZXQuZXZlbnR0eXBlO1xuICAgIGNvbnN0IGxhYmVsID0gZGF0YXNldC5ldmVudGxhYmVsO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBkYXRhc2V0LmV2ZW50b3B0aW9ucyA/IEpTT04ucGFyc2UoZGF0YXNldC5ldmVudG9wdGlvbnMpIDoge307XG5cbiAgICBET00ub24oZG9tQ29tcG9uZW50LCAnY2xpY2snLCBlID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEFuYWx5dGljc0V2ZW50KHR5cGUsIGxhYmVsKTtcbiAgICAgIGV2ZW50LmFkZE9wdGlvbnModGhpcy5fYW5hbHl0aWNzT3B0aW9ucyk7XG4gICAgICBldmVudC5hZGRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlci5yZXBvcnQoZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uQ3JlYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgY29uc3RydWN0ZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uQ3JlYXRlIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25VcGRhdGUgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgY2hhbmdlc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25VcGRhdGUgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBiZWZvcmVSZW5kZXIgZXZlbnQgaXMgdHJpZ2dlcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHJlbmRlcmVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBiZWZvcmVSZW5kZXIgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBhZnRlclJlbmRlciBldmVudCBpcyB0cmlnZ2VyZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYWZ0ZXJSZW5kZXIgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvbk1vdW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgYXBwZW5kZWQgdG8gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25Nb3VudCAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uVW5Nb3VudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIHJlbW92ZWQgZnJvbSB0aGUgRE9NXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvblVuTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBiZWZvcmVNb3VudCBpcyB0cmlnZ2VyZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZCB0byB0aGUgRE9NXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBiZWZvcmVNb3VudCAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uRGVzdHJveSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25EZXN0cm95IChjYikge1xuXG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE5hdmlnYXRpb25Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi9kb20vc2VhcmNocGFyYW1zJztcblxuLyoqXG4gKiBUaGUgVGFiIGlzIGEgbW9kZWwgdGhhdCBpcyB1c2VkIHRvIHBvd2VyIHRoZSBOYXZpZ2F0aW9uIHRhYnMgaW4gdGhlIHZpZXcuXG4gKiBJdCdzIGluaXRpYWxpemVkIHRocm91Z2ggdGhlIGNvbmZpZ3VyYXRpb24gcHJvdmlkZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIFRhYiB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgdGFiIHRoYXQgaXMgZXhwb3NlZCBmb3IgdGhlIGxpbmtcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWwgPSBjb25maWcubGFiZWw7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmxhYmVsICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcignbGFiZWwgaXMgYSByZXF1aXJlZCBjb25maWd1cmF0aW9uIG9wdGlvbiBmb3IgdGFiLicsICdOYXZpZ2F0aW9uQ29tcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBsZXRlIFVSTCwgaW5jbHVkaW5nIHRoZSBwYXJhbXNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudXJsID0gY29uZmlnLnVybDtcbiAgICBpZiAodHlwZW9mIHRoaXMudXJsICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcigndXJsIGlzIGEgcmVxdWlyZWQgY29uZmlndXJhdGlvbiBvcHRpb24gZm9yIHRhYi4nLCAnTmF2aWdhdGlvbkNvbXBvbmVudCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBzZXJ2ZXJzaWRlIHZlcnRpY2FsIGNvbmZpZyBpZCB0aGF0IHRoaXMgaXMgcmVmZXJlbmNlZCB0by5cbiAgICAgKiBCeSBwcm92aWRpbmcgdGhpcywgZW5hYmxlcyBkeW5hbWljIHNvcnRpbmcgYmFzZWQgb24gcmVzdWx0cy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuY29uZmlnSWQgPSBjb25maWcuY29uZmlnSWQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBiYXNlIFVSTCB1c2VkIGZvciBjb25zdHJ1Y3RpbmcgdGhlIFVSTCB3aXRoIHBhcmFtc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5iYXNlVXJsID0gY29uZmlnLnVybDtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0byBzaG93IHRoaXMgdGFiIGZpcnN0IGluIHRoZSBvcmRlclxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNGaXJzdCA9IGNvbmZpZy5pc0ZpcnN0IHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0byBhcHBseSBhIHNwZWNpYWwgY2xhc3MgdG8gdGhlXG4gICAgICogbWFya3VwIHRvIGRldGVybWluZSBpZiBpdCdzIGFuIGFjdGl2ZSB0YWJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmlzQWN0aXZlID0gY29uZmlnLmlzQWN0aXZlIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIGZyb20gd2lsbCBjb25zdHJ1Y3QgYSBtYXAgb2YgY29uZmlnSWQgdG8ge1RhYn0gZnJvbVxuICAgKiBhIGNvbmZpZ3VyYXRpb24gZmlsZVxuICAgKiBAcGFyYW0ge29iamVjdH0gdGFic0NvbmZpZyB0aGUgY29uZmlndXJhdGlvbiB0byB1c2VcbiAgICovXG4gIHN0YXRpYyBmcm9tICh0YWJzQ29uZmlnKSB7XG4gICAgbGV0IHRhYnMgPSB7fTtcbiAgICAvLyBQYXJzZSB0aGUgb3B0aW9ucyBhbmQgYnVpbGQgb3V0IG91ciB0YWJzIGFuZFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFic0NvbmZpZy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRhYiA9IHRhYnNDb25maWdbaV07XG4gICAgICAvLyBGb3IgdGFicyB3aXRob3V0IGNvbmZpZyBpZHMsIG1hcCB0aGVpciBVUkwgdG8gdGhlIGNvbmZpZ0lEXG4gICAgICAvLyB0byBhdm9pZCBkdXBsaWNhdGlvbiBvZiByZW5kZXJzXG4gICAgICBpZiAodGFiLmNvbmZpZ0lkID09PSB1bmRlZmluZWQgJiYgdGFic1t0YWIuY29uZmlnSWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGFiLmNvbmZpZ0lkID0gdGFiLnVybDtcbiAgICAgIH1cblxuICAgICAgdGFic1t0YWIuY29uZmlnSWRdID0gbmV3IFRhYih0YWIpO1xuICAgIH1cbiAgICByZXR1cm4gdGFicztcbiAgfVxufVxuXG4vKipcbiAqIE5hdmlnYXRpb25Db21wb25lbnQgZXhwb3NlcyBhbiBpbnRlcmZhY2UgZm9yIGJ1aWxkaW5nIGEgZHluYW1pY1xuICogbmF2aWdhdGlvbiB0aGF0IGlzIHBvd2VyZWQgYnkgdW5pdmVyc2FsIHNlYXJjaCB1cGRhdGVzLlxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRhdGEgc3RvcmFnZSBrZXlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5OQVZJR0FUSU9OO1xuXG4gICAgLyoqXG4gICAgICogVW5vcmRlcmVkIG1hcCBvZiBlYWNoIHRhYiwga2V5ZWQgYnkgVlMgY29uZmlnSWRcbiAgICAgKiBAdHlwZSB7T2JqZWN0LjxTdHJpbmcsIE9iamVjdD59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90YWJzID0gVGFiLmZyb20oY29uZmlnLnRhYnMpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9yZGVyIG9mIHRoZSB0YWJzLCBwYXJzZWQgZnJvbSBjb25maWd1cmF0aW9uIG9yIFVSTC5cbiAgICAgKiBUaGlzIGdldHMgdXBkYXRlZCBiYXNlZCBvbiB0aGUgc2VydmVyIHJlc3VsdHNcbiAgICAgKiBAdHlwZSB7QXJyYXkuPFN0cmluZz59IFRoZSBsaXN0IG9mIFZTIGNvbmZpZ0lkc1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGFiT3JkZXIgPSB0aGlzLmdldERlZmF1bHRUYWJPcmRlcihjb25maWcudGFicywgdGhpcy5nZXRVcmxQYXJhbXMoKSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTmF2aWdhdGlvbic7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ25hdmlnYXRpb24vbmF2aWdhdGlvbic7XG4gIH1cblxuICAvKipcbiAgICogU2luY2UgdGhlIHNlcnZlciBkYXRhIG9ubHkgcHJvdmlkZXMgYSBsaXN0IG9mXG4gICAqIFZTIGNvbmZpZ0lkcywgd2UgbmVlZCB0byBjb21wdXRlIGFuZCB0cmFuc2Zvcm1cbiAgICogdGhlIGRhdGEgaW50byB0aGUgcHJvcGVyIGZvcm1hdCBmb3IgcmVuZGVyaW5nLlxuICAgKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgaWYgKGRhdGEudGFiT3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fdGFiT3JkZXIgPSB0aGlzLm1lcmdlVGFiT3JkZXIoZGF0YS50YWJPcmRlciwgdGhpcy5fdGFiT3JkZXIpO1xuICAgIH1cblxuICAgIC8vIFNpbmNlIHRoZSB0YWIgb3JkZXJpbmcgY2FuIGNoYW5nZSBiYXNlZCBvbiB0aGUgc2VydmVyIGRhdGFcbiAgICAvLyB3ZSBuZWVkIHRvIHVwZGF0ZSBlYWNoIHRhYnMgVVJMIHRvIGluY2x1ZGUgdGhlIG9yZGVyIGFzIHBhcnQgb2YgdGhlaXIgcGFyYW1zLlxuICAgIC8vIFRoaXMgaGVscHMgd2l0aCBwZXJzaXN0aW5nIHN0YXRlIGFjcm9zcyB2ZXJ0aWNhbHMuXG4gICAgbGV0IHRhYnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3RhYk9yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdGFiID0gdGhpcy5fdGFic1t0aGlzLl90YWJPcmRlcltpXV07XG4gICAgICBpZiAodGFiICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGFiLnVybCA9IHRoaXMuZ2VuZXJhdGVUYWJVcmwodGFiLmJhc2VVcmwsIHRoaXMuZ2V0VXJsUGFyYW1zKCkpO1xuICAgICAgICB0YWJzLnB1c2godGFiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoe1xuICAgICAgdGFiczogdGFic1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VXJsUGFyYW1zICgpIHtcbiAgICByZXR1cm4gbmV3IFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKSk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0RGVmYXVsdFRhYk9yZGVyIHdpbGwgY29tcHV0ZSB0aGUgaW5pdGlhbCB0YWIgb3JkZXJpbmcgYmFzZWRcbiAgICogb24gYSBjb21iaW5hdGlvbiBvZiB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZCBkaXJlY3RseSB0byB0aGUgY29tcG9uZW50XG4gICAqIGFuZCB0aGUgdXJsIHBhcmFtcy5cbiAgICogQHBhcmFtIHtPYmplY3RbXX0gdGFic0NvbmZpZ1xuICAgKiBAcGFyYW0ge1NlYXJjaFBhcmFtc31cbiAgICovXG4gIGdldERlZmF1bHRUYWJPcmRlciAodGFic0NvbmZpZywgdXJsUGFyYW1zKSB7XG4gICAgbGV0IHRhYk9yZGVyID0gW107XG5cbiAgICAvLyBVc2UgdGhlIG9yZGVyaW5nIGZyb20gdGhlIFVSTCBhcyB0aGUgcHJpbWFyeSBjb25maWd1cmF0aW9uXG4gICAgLy8gQW5kIHRoZW4gbWVyZ2UgaXQgd2l0aCB0aGUgbG9jYWwgY29uZmlndXJhdGlvbiwgaWYgcHJvdmlkZWQuXG4gICAgaWYgKHVybFBhcmFtcyAmJiB1cmxQYXJhbXMuaGFzKCd0YWJPcmRlcicpKSB7XG4gICAgICB0YWJPcmRlciA9IHVybFBhcmFtcy5nZXQoJ3RhYk9yZGVyJykuc3BsaXQoJywnKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNDb25maWcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhYiA9IHRhYnNDb25maWdbaV07XG4gICAgICAvLyBTb21lIHRhYnMgZG9uJ3QgaGF2ZSBjb25maWdJZCwgc28gd2UgbWFwIGl0IGZyb20gVVJMXG4gICAgICBpZiAodGFiLmNvbmZpZ0lkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGFiLmNvbmZpZ0lkID0gdGFiLnVybDtcbiAgICAgIH1cblxuICAgICAgLy8gQXZvaWQgZHVwbGljYXRlcyBpZiBjb25maWcgd2FzIHByb3ZpZGVkIGZyb20gVVJMXG4gICAgICBpZiAodGFiT3JkZXIuaW5jbHVkZXModGFiLmNvbmZpZ0lkKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gaXNGaXJzdCBzaG91bGQgYWx3YXlzIGJlIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBsaXN0XG4gICAgICBpZiAodGFiLmlzRmlyc3QpIHtcbiAgICAgICAgdGFiT3JkZXIudW5zaGlmdCh0YWIuY29uZmlnSWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFiT3JkZXIucHVzaCh0YWIuY29uZmlnSWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YWJPcmRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBtZXJnZVRhYk9yZGVyIG1lcmdlcyB0d28gYXJyYXlzIGludG8gb25lXG4gICAqIGJ5IGFwcGVuZGluZyBhZGRpdGlvbmFsIHRhYnMgdG8gdGhlIGVuZCBvZiB0aGUgb3JpZ2luYWwgYXJyYXlcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gdGFiT3JkZXIgVGFiIG9yZGVyIHByb3ZpZGVkIGJ5IHRoZSBzZXJ2ZXJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gb3RoZXJUYWJPcmRlciBUYWIgb3JkZXIgcHJvdmlkZWQgYnkgY29uZmlndXJhdGlvblxuICAgKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAgICovXG4gIG1lcmdlVGFiT3JkZXIgKHRhYk9yZGVyLCBvdGhlclRhYk9yZGVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdGhlclRhYk9yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YWJDb25maWcgPSBvdGhlclRhYk9yZGVyW2ldO1xuICAgICAgaWYgKHRhYk9yZGVyLmluY2x1ZGVzKHRhYkNvbmZpZykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIGlzRmlyc3Qgc2hvdWxkIGJlIGFuIG92ZXJyaWRlIHRvIGR5bmFtaWMgdGFiIG9yZGVyaW5nLlxuICAgICAgaWYgKHRoaXMuX3RhYnNbdGFiQ29uZmlnXSAmJiB0aGlzLl90YWJzW3RhYkNvbmZpZ10uaXNGaXJzdCkge1xuICAgICAgICB0YWJPcmRlci51bnNoaWZ0KHRhYkNvbmZpZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWJPcmRlci5wdXNoKHRhYkNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYk9yZGVyO1xuICB9XG5cbiAgZ2VuZXJhdGVUYWJVcmwgKGJhc2VVcmwsIHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKSkge1xuICAgIC8vIFdlIHdhbnQgdG8gcGVyc2lzdCB0aGUgcGFyYW1zIGZyb20gdGhlIGV4aXN0aW5nIFVSTCB0byB0aGUgbmV3XG4gICAgLy8gVVJMUyB3ZSBjcmVhdGUuXG4gICAgcGFyYW1zLnNldCgndGFiT3JkZXInLCB0aGlzLl90YWJPcmRlcik7XG4gICAgcmV0dXJuIGJhc2VVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyICovXG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBhcGkgZmlsdGVyIGFuZCBwcm92aWRlcyBzdGF0aWMgbWV0aG9kcyBmb3IgZWFzaWx5IGNvbnN0cnVjdGluZyBGaWx0ZXJzLlxuICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLnlleHQuY29tL2RvY3MvYXBpLXJlZmVyZW5jZS8jb3BlcmF0aW9uL2xpc3RFbnRpdGllcyBmb3Igc3RydWN0dXJlIGRldGFpbHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBhIEpTT04gZm9ybWF0IGZpbHRlciByZXR1cm5lZCBmcm9tIHRoZSBzZXJ2ZXIgaW50byBhIEZpbHRlclxuICAgKiBAcGFyYW0geyp9IHJlc3BvbnNlRmlsdGVyIEEgZmlsdGVyIGluIEpTT04gZm9ybWF0IHJldHVybmVkIGZyb20gdGhlIGJhY2tlbmRcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBmcm9tUmVzcG9uc2UgKHJlc3BvbnNlRmlsdGVyKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoSlNPTi5wYXJzZShyZXNwb25zZUZpbHRlcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIG5ldyBGaWx0ZXIgcmVwcmVzZW50aW5nIHRoZSBPUiBvZiBhbGwgcHJvdmlkZWQgZmlsdGVyc1xuICAgKiBAcGFyYW0gIHsuLi5GaWx0ZXJ9IGZpbHRlcnMgVGhlIGZpbHRlcnMgdG8gT1IgdG9nZXRoZXJcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBvciAoLi4uZmlsdGVycykge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgICckb3InOiBmaWx0ZXJzXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgbmV3IEZpbHRlciByZXByZXNlbnRpbmcgdGhlIEFORCBvZiBhbGwgcHJvdmlkZWQgZmlsdGVyc1xuICAgKiBAcGFyYW0gIHsuLi5GaWx0ZXJ9IGZpbHRlcnMgVGhlIGZpbHRlcnMgdG8gQU5EIHRvZ2V0aGVyXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgYW5kICguLi5maWx0ZXJzKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgJyRhbmQnOiBmaWx0ZXJzXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT1IgZmlsdGVycyB3aXRoIHRoZSBzYW1lIGtleXMsIHRoZW4gQU5EIHRoZSByZXN1bHRpbmcgZ3JvdXBzXG4gICAqIEBwYXJhbSAgey4uLkZpbHRlcn0gZmlsdGVycyBUaGUgZmlsdGVycyB0byBncm91cFxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGdyb3VwICguLi5maWx0ZXJzKSB7XG4gICAgY29uc3QgZ3JvdXBzID0ge307XG4gICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgZmlsdGVycykge1xuICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMoZmlsdGVyKVswXTtcbiAgICAgIGlmICghZ3JvdXBzW2tleV0pIHtcbiAgICAgICAgZ3JvdXBzW2tleV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1trZXldLnB1c2goZmlsdGVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBncm91cEZpbHRlcnMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIE9iamVjdC5rZXlzKGdyb3VwcykpIHtcbiAgICAgIGdyb3VwRmlsdGVycy5wdXNoKGdyb3Vwc1tmaWVsZF0ubGVuZ3RoID4gMSA/IEZpbHRlci5vciguLi5ncm91cHNbZmllbGRdKSA6IGdyb3Vwc1tmaWVsZF1bMF0pO1xuICAgIH1cblxuICAgIHJldHVybiBncm91cEZpbHRlcnMubGVuZ3RoID4gMSA/IEZpbHRlci5hbmQoLi4uZ3JvdXBGaWx0ZXJzKSA6IGdyb3VwRmlsdGVyc1swXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJlcXVhbCB0b1wiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGVxdWFsIHRvXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZXF1YWwgKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGVxJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImxlc3MgdGhhblwiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGxlc3MgdGhhblxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGxlc3NUaGFuIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRsdCcsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJsZXNzIHRoYW4gb3IgZXF1YWwgdG9cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG9cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBsZXNzVGhhbkVxdWFsIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRsZScsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJncmVhdGVyIHRoYW5cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBncmVhdGVyIHRoYW5cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBncmVhdGVyVGhhbiAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckZ3QnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwiZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ3JlYXRlclRoYW5FcXVhbCAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckZ2UnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGluY2x1c2l2ZSByYW5nZSBmaWx0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSBtaW4gVGhlIG1pbmltdW0gdmFsdWVcbiAgICogQHBhcmFtIHsqfSBtYXggVGhlIG1heGltdW0gdmFsdWVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBpbmNsdXNpdmVSYW5nZSAoZmllbGQsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgW2ZpZWxkXToge1xuICAgICAgICAnJGdlJzogbWluLFxuICAgICAgICAnJGxlJzogbWF4XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGV4Y2x1c2l2ZSByYW5nZSBmaWx0ZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSBtaW4gVGhlIG1pbmltdW0gdmFsdWVcbiAgICogQHBhcmFtIHsqfSBtYXggVGhlIG1heGltdW0gdmFsdWVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBleGNsdXNpdmVSYW5nZSAoZmllbGQsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgW2ZpZWxkXToge1xuICAgICAgICAnJGd0JzogbWluLFxuICAgICAgICAnJGx0JzogbWF4XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGZpbHRlciB3aXRoIHRoZSBnaXZlbiBtYXRjaGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRjaGVyIFRoZSBtYXRjaGVyIGZvciB0aGUgZmlsZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgZm9yIHRoZSBmaWx0ZXJcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBfZnJvbU1hdGNoZXIgKGZpZWxkLCBtYXRjaGVyLCB2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgIFtmaWVsZF06IHtcbiAgICAgICAgW21hdGNoZXJdOiB2YWx1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi9kb20vc2VhcmNocGFyYW1zJztcblxuLyoqXG4gKiBTZWFyY2hDb21wb25lbnQgZXhwb3NlcyBhbiBpbnRlcmZhY2UgaW4gb3JkZXIgdG8gY3JlYXRlXG4gKiBhIFVJIFNlYXJjaCBleHBlcmllbmNlIGZvciB2ZXJ0aWNhbCBhbmQgdW5pdmVyc2FsIHNlYXJjaC5cbiAqXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBpbnB1dCBrZXkgZm9yIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggY29uZmlndXJhdGlvblxuICAgICAqIElmIG5vdCBwcm92aWRlZCwgYXV0by1jb21wbGV0ZSBhbmQgc2VhcmNoIHdpbGwgYmUgYmFzZWQgb24gdW5pdmVyc2FsXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9iYXJLZXkgPSBjb25maWcuYmFyS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgdmVydGljYWwga2V5IGZvciB2ZXJ0aWNhbCBzZWFyY2ggY29uZmlndXJhdGlvblxuICAgICAqIElmIG5vdCBwcm92aWRlZCwgYXV0by1jb21wbGV0ZSBhbmQgc2VhcmNoIHdpbGwgYmUgYmFzZWQgb24gdW5pdmVyc2FsXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IGNvbmZpZy52ZXJ0aWNhbEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogUXVlcnkgc3VibWlzc2lvbiBpcyBiYXNlZCBvbiBhIGZvcm0gYXMgY29udGV4dC5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gbmF0aXZlIGZvcm0gbm9kZSB3aXRoaW4gY29udGFpbmVyXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5fZm9ybUVsID0gY29uZmlnLmZvcm1TZWxlY3RvciB8fCAnZm9ybSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5wdXQgZWxlbWVudCB1c2VkIGZvciBzZWFyY2hpbmcgYW5kIHdpcmVzIHVwIHRoZSBrZXlib2FyZCBpbnRlcmFjdGlvblxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5faW5wdXRFbCA9IGNvbmZpZy5pbnB1dEVsIHx8ICcuanMteWV4dC1xdWVyeSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgdXNlZCwgcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlIGFzIGEgZGF0YSBwb2ludFxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnRpdGxlID0gY29uZmlnLnRpdGxlIHx8ICdBbnN3ZXJzIFVuaXZlcnNhbCBTZWFyY2gnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRleHQgaXMgdXNlZCBmb3IgbGFiZWxpbmcgdGhlIGlucHV0IGJveCwgYWxzbyBwcm92aWRlZCB0byB0ZW1wbGF0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmxhYmVsVGV4dCA9IGNvbmZpZy5sYWJlbFRleHQgfHwgJ1doYXQgYXJlIHlvdSBpbnRlcmVzdGVkIGluPyc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3VibWl0IHRleHQgaXMgdXNlZCBmb3IgbGFiZWxpbmcgdGhlIHN1Ym1pdCBidXR0b24sIGFsc28gcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zdWJtaXRUZXh0ID0gY29uZmlnLnN1Ym1pdFRleHQgfHwgJ1N1Ym1pdCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3VibWl0IGljb24gaXMgYW4gaWNvbiBmb3IgdGhlIHN1Ym1pdCBidXR0b24sIGlmIHByb3ZpZGVkIGl0IHdpbGwgYmUgZGlzcGxheWVkIGFuZCB0aGVcbiAgICAgKiBzdWJtaXQgdGV4dCB3aWxsIGJlIHVzZWQgZm9yIHNjcmVlbiByZWFkZXJzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnN1Ym1pdEljb24gPSBjb25maWcuc3VibWl0SWNvbiB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHRleHQgdG8gc2hvdyBhcyB0aGUgZmlyc3QgaXRlbSBmb3IgYXV0byBjb21wbGV0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnByb21wdEhlYWRlciA9IGNvbmZpZy5wcm9tcHRIZWFkZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEF1dG8gZm9jdXNlcyB0aGUgaW5wdXQgYm94IGlmIHNldCB0byB0cnVlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIGRlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuYXV0b0ZvY3VzID0gY29uZmlnLmF1dG9Gb2N1cyA9PT0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIHN1Ym1pdFVSTCB3aWxsIGZvcmNlIHRoZSBzZWFyY2ggcXVlcnkgc3VibWlzc2lvbiB0byBnZXRcbiAgICAgKiByZWRpcmVjdGVkIHRvIHRoZSBVUkwgcHJvdmlkZWQuXG4gICAgICogT3B0aW9uYWwsIGRlZmF1bHRzIHRvIG51bGwuXG4gICAgICpcbiAgICAgKiBJZiBubyByZWRpcmVjdFVybCBwcm92aWRlZCwgd2Uga2VlcCB0aGUgcGFnZSBhcyBhIHNpbmdsZSBwYWdlIGFwcC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucmVkaXJlY3RVcmwgPSBjb25maWcucmVkaXJlY3RVcmwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSBzdHJpbmcgdG8gdXNlIGZvciB0aGUgaW5wdXQgYm94LCBwcm92aWRlZCB0byB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlcnkgPSBjb25maWcucXVlcnkgfHwgdGhpcy5nZXRVcmxQYXJhbXMoKS5nZXQoJ3F1ZXJ5JykgfHwgJyc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWluaW11bSB0aW1lIGFsbG93ZWQgaW4gbWlsbGlzZWNvbmRzIGJldHdlZW4gc2VhcmNoZXMgdG8gcHJldmVudFxuICAgICAqIG1hbnkgZHVwbGljYXRlIHNlYXJjaGVzIGJhY2stdG8tYmFja1xuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zZWFyY2hDb29sZG93biA9IGNvbmZpZy5zZWFyY2hDb29sZG93biB8fCAzMDA7XG5cbiAgICB0aGlzLl9vbk1vdW50QWRkaXRpb24gPSBjb25maWcub25Nb3VudEFkZGl0aW9uIHx8IG51bGw7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnU2VhcmNoQmFyJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAnc2VhcmNoL3NlYXJjaCc7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgaWYgKHRoaXMucXVlcnkgJiYgdGhpcy5xdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNvcmUuc2V0UXVlcnkodGhpcy5xdWVyeSk7XG4gICAgICB0aGlzLnNlYXJjaCh0aGlzLnF1ZXJ5KTtcbiAgICB9XG5cbiAgICB0aGlzLmJpbmRCcm93c2VySGlzdG9yeSgpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgLy8gV2lyZSB1cCBvdXIgc2VhcmNoIGhhbmRsaW5nIGFuZCBhdXRvIGNvbXBsZXRlXG4gICAgdGhpcy5pbml0U2VhcmNoKHRoaXMuX2Zvcm1FbCk7XG4gICAgdGhpcy5pbml0QXV0b0NvbXBsZXRlKHRoaXMuX2lucHV0RWwpO1xuXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzID09PSB0cnVlICYmIHRoaXMucXVlcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKS5mb2N1cygpO1xuICAgIH1cblxuICAgIHRoaXMuX29uTW91bnRBZGRpdGlvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgaGVscGVyIG1ldGhvZCB0byB1c2UgZm9yIHdpcmluZyB1cCBzZWFyY2hpbmcgb24gZm9ybSBzdWJtaXNzaW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtU2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIHN1Ym1pdCBoYW5kbGluZyB0b1xuICAgKi9cbiAgaW5pdFNlYXJjaCAoZm9ybVNlbGVjdG9yKSB7XG4gICAgdGhpcy5fZm9ybUVsID0gZm9ybVNlbGVjdG9yO1xuXG4gICAgbGV0IGZvcm0gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCBmb3JtU2VsZWN0b3IpO1xuICAgIGlmICghZm9ybSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgaW5pdGlhbGl6ZSBTZWFyY2hCYXI7IENhbiBub3QgZmluZCB7SFRNTEVsZW1lbnR9IGAnLCB0aGlzLl9mb3JtRWwsICdgLicpO1xuICAgIH1cblxuICAgIERPTS5vbihmb3JtLCAnc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IHF1ZXJ5ID0gZm9ybS5xdWVyeVNlbGVjdG9yKHRoaXMuX2lucHV0RWwpLnZhbHVlO1xuICAgICAgbGV0IHBhcmFtcyA9IHRoaXMuZ2V0VXJsUGFyYW1zKCk7XG4gICAgICBwYXJhbXMuc2V0KCdxdWVyeScsIHF1ZXJ5KTtcblxuICAgICAgLy8gSWYgd2UgaGF2ZSBhIHJlZGlyZWN0VXJsLCB3ZSB3YW50IHRoZSBmb3JtIHRvIGJlXG4gICAgICAvLyBzZXJpYWxpemVkIGFuZCBzdWJtaXR0ZWQuXG4gICAgICBpZiAodHlwZW9mIHRoaXMucmVkaXJlY3RVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5yZWRpcmVjdFVybCArICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7XG4gICAgICAgIHF1ZXJ5OiBxdWVyeVxuICAgICAgfSwgcXVlcnksICc/JyArIHBhcmFtcy50b1N0cmluZygpKTtcblxuICAgICAgdGhpcy5jb3JlLnNldFF1ZXJ5KHF1ZXJ5KTtcbiAgICAgIHRoaXMuc2VhcmNoKHF1ZXJ5KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gd2lyZSB1cCBvdXIgYXV0byBjb21wbGV0ZSBvbiBhbiBpbnB1dCBzZWxlY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRTZWxlY3RvciBDU1Mgc2VsZWN0b3IgdG8gYmluZCBvdXIgYXV0byBjb21wbGV0ZSBjb21wb25lbnQgdG9cbiAgICovXG4gIGluaXRBdXRvQ29tcGxldGUgKGlucHV0U2VsZWN0b3IpIHtcbiAgICB0aGlzLl9pbnB1dEVsID0gaW5wdXRTZWxlY3RvcjtcblxuICAgIHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoJ0F1dG9Db21wbGV0ZScsIHtcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0uYXV0b2NvbXBsZXRlYCxcbiAgICAgIGNvbnRhaW5lcjogJy55ZXh0LXNlYXJjaC1hdXRvY29tcGxldGUnLFxuICAgICAgYmFyS2V5OiB0aGlzLl9iYXJLZXksXG4gICAgICB2ZXJ0aWNhbEtleTogdGhpcy5fdmVydGljYWxLZXksXG4gICAgICBwcm9tcHRIZWFkZXI6IHRoaXMucHJvbXB0SGVhZGVyLFxuICAgICAgb3JpZ2luYWxRdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgIGlucHV0RWw6IGlucHV0U2VsZWN0b3IsXG4gICAgICBvblN1Ym1pdDogKCkgPT4ge1xuICAgICAgICBET00udHJpZ2dlcignZm9ybScsICdzdWJtaXQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaCAocXVlcnkpIHtcbiAgICBpZiAodGhpcy5fdGhyb3R0bGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdGhyb3R0bGVkID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5fdGhyb3R0bGVkID0gZmFsc2U7IH0sIHRoaXMuX3NlYXJjaENvb2xkb3duKTtcblxuICAgIGlmICh0aGlzLl92ZXJ0aWNhbEtleSkge1xuICAgICAgY29uc3QgYWxsRmlsdGVycyA9IHRoaXMuY29yZS5zdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GSUxURVIpO1xuICAgICAgY29uc3QgdG90YWxGaWx0ZXIgPSBhbGxGaWx0ZXJzLmxlbmd0aCA+IDFcbiAgICAgICAgPyBGaWx0ZXIuYW5kKC4uLmFsbEZpbHRlcnMpXG4gICAgICAgIDogYWxsRmlsdGVyc1swXTtcbiAgICAgIHJldHVybiB0aGlzLmNvcmUudmVydGljYWxTZWFyY2gocXVlcnksIHRoaXMuX3ZlcnRpY2FsS2V5LCBKU09OLnN0cmluZ2lmeSh0b3RhbEZpbHRlcikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOT1RFKGJpbGx5KSBUZW1wb3JhcnkgaGFjayBmb3IgREVNT1xuICAgICAgLy8gUmVtb3ZlIG1lIGFmdGVyIHRoZSBkZW1vXG4gICAgICBsZXQgbmF2ID0gdGhpcy5jb21wb25lbnRNYW5hZ2VyXG4gICAgICAgIC5nZXRBY3RpdmVDb21wb25lbnQoJ05hdmlnYXRpb24nKTtcblxuICAgICAgaWYgKG5hdikge1xuICAgICAgICBsZXQgdGFicyA9IG5hdi5nZXRTdGF0ZSgndGFicycpO1xuICAgICAgICBsZXQgdXJscyA9IHt9O1xuXG4gICAgICAgIGlmICh0YWJzICYmIEFycmF5LmlzQXJyYXkodGFicykpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB0aGlzLmdldFVybFBhcmFtcyh0YWJzW2ldLnVybC5zcGxpdCgnPycpWzFdKTtcbiAgICAgICAgICAgIHBhcmFtcy5zZXQoJ3F1ZXJ5JywgcXVlcnkpO1xuXG4gICAgICAgICAgICBsZXQgdXJsID0gdGFic1tpXS5iYXNlVXJsO1xuICAgICAgICAgICAgaWYgKHBhcmFtcy50b1N0cmluZygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgdXJsICs9ICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXJsc1t0YWJzW2ldLmNvbmZpZ0lkXSA9IHVybDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29yZS5zZWFyY2gocXVlcnksIHVybHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb3JlLnNlYXJjaChxdWVyeSk7XG4gICAgfVxuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIGxhYmVsVGV4dDogdGhpcy5sYWJlbFRleHQsXG4gICAgICBzdWJtaXRJY29uOiB0aGlzLnN1Ym1pdEljb24sXG4gICAgICBzdWJtaXRUZXh0OiB0aGlzLnN1Ym1pdFRleHQsXG4gICAgICBxdWVyeTogdGhpcy5xdWVyeVxuICAgIH0sIGRhdGEpKTtcbiAgfVxuXG4gIGdldFVybFBhcmFtcyAodXJsKSB7XG4gICAgdXJsID0gdXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpO1xuICAgIHJldHVybiBuZXcgU2VhcmNoUGFyYW1zKHVybCk7XG4gIH1cblxuICBiaW5kQnJvd3Nlckhpc3RvcnkgKCkge1xuICAgIERPTS5vbih3aW5kb3csICdwb3BzdGF0ZScsICgpID0+IHtcbiAgICAgIHRoaXMucXVlcnkgPSB0aGlzLmdldFVybFBhcmFtcygpLmdldCgncXVlcnknKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBxdWVyeTogdGhpcy5xdWVyeVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY29yZS5zZXRRdWVyeSh0aGlzLnF1ZXJ5KTtcblxuICAgICAgdGhpcy5zZWFyY2godGhpcy5xdWVyeSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZpbHRlclNlYXJjaENvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uL2RvbS9zZWFyY2hwYXJhbXMnO1xuXG4vKipcbiAqIEZpbHRlclNlYXJjaENvbXBvbmVudCBpcyB1c2VkIGZvciBhdXRvY29tcGxldGUgdXNpbmcgdGhlIEZpbHRlclNlYXJjaCBiYWNrZW5kLlxuICogSXQnbGwgYWxsb3cgeW91IHRvIHBpY2sgcHJlLXNldCBmaWx0ZXJzIHRoYXQgYXJlIHNldHVwIG9uIHRoZSBiYWNrZW5kIHdpdGhpblxuICogYSB2ZXJ0aWNhbCBzZWFyY2ggY29udGV4dC5cbiAqXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBrZXkgZm9yIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggY29uZmlndXJhdGlvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYmFyS2V5ID0gY29uZmlnLmJhcktleSB8fCBjb25maWcuaW5wdXRLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IGNvbmZpZy52ZXJ0aWNhbEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc3RvcmUgdGhlIGZpbHRlciB2YWx1ZSBidXQgZG8gbm90IHNlYXJjaCBvbiBjaGFuZ2VcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N0b3JlT25DaGFuZ2UgPSBjb25maWcuc3RvcmVPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFF1ZXJ5IHN1Ym1pc3Npb24gaXMgYmFzZWQgb24gYSBmb3JtIGFzIGNvbnRleHQuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIG5hdGl2ZSBmb3JtIG5vZGUgd2l0aGluIGNvbnRhaW5lclxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2Zvcm1FbCA9IGNvbmZpZy5mb3JtU2VsZWN0b3IgfHwgJ2Zvcm0nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlucHV0IGVsZW1lbnQgdXNlZCBmb3Igc2VhcmNoaW5nIGFuZCB3aXJlcyB1cCB0aGUga2V5Ym9hcmQgaW50ZXJhY3Rpb25cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2lucHV0RWwgPSBjb25maWcuaW5wdXRFbCB8fCAnLmpzLXlleHQtcXVlcnknO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIHVzZWQsIHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZSBhcyBhIGRhdGEgcG9pbnRcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy50aXRsZSA9IGNvbmZpZy50aXRsZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWFyY2ggdGV4dCB1c2VkIGZvciBsYWJlbGluZyB0aGUgaW5wdXQgYm94LCBhbHNvIHByb3ZpZGVkIHRvIHRlbXBsYXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc2VhcmNoVGV4dCA9IGNvbmZpZy5zZWFyY2hUZXh0IHx8ICdXaGF0IGFyZSB5b3UgaW50ZXJlc3RlZCBpbj8nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHRleHQgdG8gc2hvdyBhcyB0aGUgZmlyc3QgaXRlbSBmb3IgYXV0byBjb21wbGV0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnByb21wdEhlYWRlciA9IGNvbmZpZy5wcm9tcHRIZWFkZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEF1dG8gZm9jdXNlcyB0aGUgaW5wdXQgYm94IGlmIHNldCB0byB0cnVlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIGRlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuYXV0b0ZvY3VzID0gY29uZmlnLmF1dG9Gb2N1cyA9PT0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIHN1Ym1pdFVSTCB3aWxsIGZvcmNlIHRoZSBzZWFyY2ggcXVlcnkgc3VibWlzc2lvbiB0byBnZXRcbiAgICAgKiByZWRpcmVjdGVkIHRvIHRoZSBVUkwgcHJvdmlkZWQuXG4gICAgICogT3B0aW9uYWwsIGRlZmF1bHRzIHRvIG51bGwuXG4gICAgICpcbiAgICAgKiBJZiBubyByZWRpcmVjdFVybCBwcm92aWRlZCwgd2Uga2VlcCB0aGUgcGFnZSBhcyBhIHNpbmdsZSBwYWdlIGFwcC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucmVkaXJlY3RVcmwgPSBjb25maWcucmVkaXJlY3RVcmwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSBzdHJpbmcgdG8gdXNlIGZvciB0aGUgaW5wdXQgYm94LCBwcm92aWRlZCB0byB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlcnkgPSBjb25maWcucXVlcnkgfHwgdGhpcy5nZXRVcmxQYXJhbXMoKS5nZXQoYCR7dGhpcy5uYW1lfS5xdWVyeWApIHx8ICcnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpbHRlciBzdHJpbmcgdG8gdXNlIGZvciB0aGUgcHJvdmlkZWQgcXVlcnlcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmZpbHRlciA9IGNvbmZpZy5maWx0ZXIgfHwgdGhpcy5nZXRVcmxQYXJhbXMoKS5nZXQoYCR7dGhpcy5uYW1lfS5maWx0ZXJgKSB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdGaWx0ZXJTZWFyY2gnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdzZWFyY2gvZmlsdGVyc2VhcmNoJztcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICBpZiAodGhpcy5xdWVyeSAmJiB0aGlzLnF1ZXJ5Lmxlbmd0aCA+IDAgJiYgdGhpcy5maWx0ZXIgJiYgdGhpcy5maWx0ZXIubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy5nZXRVcmxQYXJhbXMoKTtcbiAgICAgIHBhcmFtcy5zZXQoYCR7dGhpcy5uYW1lfS5xdWVyeWAsIHRoaXMucXVlcnkpO1xuICAgICAgcGFyYW1zLnNldChgJHt0aGlzLm5hbWV9LmZpbHRlcmAsIHRoaXMuZmlsdGVyKTtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsICc/JyArIHBhcmFtcy50b1N0cmluZygpKTtcbiAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBGaWx0ZXIuZnJvbVJlc3BvbnNlKHRoaXMuZmlsdGVyKSk7XG4gICAgICB0aGlzLnNlYXJjaCgpO1xuICAgIH1cblxuICAgIHRoaXMuYmluZEJyb3dzZXJIaXN0b3J5KCk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICAvLyBXaXJlIHVwIG91ciBzZWFyY2ggaGFuZGxpbmcgYW5kIGF1dG8gY29tcGxldGVcbiAgICB0aGlzLmluaXRBdXRvQ29tcGxldGUodGhpcy5faW5wdXRFbCk7XG5cbiAgICBpZiAodGhpcy5hdXRvRm9jdXMgPT09IHRydWUgJiYgdGhpcy5xdWVyeS5sZW5ndGggPT09IDApIHtcbiAgICAgIERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2lucHV0RWwpLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgaGVscGVyIG1ldGhvZCB0byB3aXJlIHVwIG91ciBhdXRvIGNvbXBsZXRlIG9uIGFuIGlucHV0IHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBhdXRvIGNvbXBsZXRlIGNvbXBvbmVudCB0b1xuICAgKi9cbiAgaW5pdEF1dG9Db21wbGV0ZSAoaW5wdXRTZWxlY3Rvcikge1xuICAgIHRoaXMuX2lucHV0RWwgPSBpbnB1dFNlbGVjdG9yO1xuXG4gICAgdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZSgnQXV0b0NvbXBsZXRlJywge1xuICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfS5hdXRvY29tcGxldGVgLFxuICAgICAgaXNGaWx0ZXJTZWFyY2g6IHRydWUsXG4gICAgICBjb250YWluZXI6ICcueWV4dC1zZWFyY2gtYXV0b2NvbXBsZXRlJyxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5wcm9tcHRIZWFkZXIsXG4gICAgICBvcmlnaW5hbFF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgb3JpZ2luYWxGaWx0ZXI6IHRoaXMuZmlsdGVyLFxuICAgICAgaW5wdXRFbDogaW5wdXRTZWxlY3RvcixcbiAgICAgIHZlcnRpY2FsS2V5OiB0aGlzLl92ZXJ0aWNhbEtleSxcbiAgICAgIGJhcktleTogdGhpcy5fYmFyS2V5LFxuICAgICAgb25TdWJtaXQ6IChxdWVyeSwgZmlsdGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuZ2V0VXJsUGFyYW1zKCk7XG4gICAgICAgIHBhcmFtcy5zZXQoYCR7dGhpcy5uYW1lfS5xdWVyeWAsIHF1ZXJ5KTtcbiAgICAgICAgcGFyYW1zLnNldChgJHt0aGlzLm5hbWV9LmZpbHRlcmAsIGZpbHRlcik7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHJlZGlyZWN0VXJsLCB3ZSB3YW50IHRoZSBwYXJhbXMgdG8gYmVcbiAgICAgICAgLy8gc2VyaWFsaXplZCBhbmQgc3VibWl0dGVkLlxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucmVkaXJlY3RVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLnJlZGlyZWN0VXJsICsgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCkpO1xuXG4gICAgICAgIC8vIHNhdmUgdGhlIGZpbHRlciB0byBzdG9yYWdlIGZvciB0aGUgbmV4dCBzZWFyY2hcbiAgICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIEZpbHRlci5mcm9tUmVzcG9uc2UoZmlsdGVyKSk7XG4gICAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybSB0aGUgdmVydGljYWwgc2VhcmNoIHdpdGggYWxsIHNhdmVkIGZpbHRlcnMgYW5kIHF1ZXJ5LFxuICAgKiBvcHRpb25hbGx5IHJlZGlyZWN0aW5nIGJhc2VkIG9uIGNvbmZpZ1xuICAgKi9cbiAgc2VhcmNoICgpIHtcbiAgICBpZiAodGhpcy5fc3RvcmVPbkNoYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmNvcmUuc3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICBsZXQgdG90YWxGaWx0ZXIgPSBmaWx0ZXJzWzBdO1xuICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRvdGFsRmlsdGVyID0gRmlsdGVyLmFuZCguLi5maWx0ZXJzKTtcbiAgICB9XG4gICAgY29uc3Qgc2VhcmNoUXVlcnkgPSB0aGlzLmNvcmUuc3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSkgfHwgJyc7XG5cbiAgICB0aGlzLmNvcmUudmVydGljYWxTZWFyY2goc2VhcmNoUXVlcnksIHRoaXMuX3ZlcnRpY2FsS2V5LCBKU09OLnN0cmluZ2lmeSh0b3RhbEZpbHRlcikpO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIHNlYXJjaFRleHQ6IHRoaXMuc2VhcmNoVGV4dCxcbiAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlclxuICAgIH0sIGRhdGEpKTtcbiAgfVxuXG4gIGdldFVybFBhcmFtcyAodXJsKSB7XG4gICAgdXJsID0gdXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpO1xuICAgIHJldHVybiBuZXcgU2VhcmNoUGFyYW1zKHVybCk7XG4gIH1cblxuICBiaW5kQnJvd3Nlckhpc3RvcnkgKCkge1xuICAgIERPTS5vbih3aW5kb3csICdwb3BzdGF0ZScsICgpID0+IHtcbiAgICAgIHRoaXMucXVlcnkgPSB0aGlzLmdldFVybFBhcmFtcygpLmdldChgJHt0aGlzLm5hbWV9LnF1ZXJ5YCk7XG4gICAgICB0aGlzLmZpbHRlciA9IHRoaXMuZ2V0VXJsUGFyYW1zKCkuZ2V0KGAke3RoaXMubmFtZX0uZmlsdGVyYCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcXVlcnk6IHRoaXMucXVlcnksXG4gICAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXJcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9zYXZlUXVlcnlBbmRGaWx0ZXIodGhpcy5xdWVyeSwgdGhpcy5maWx0ZXIpO1xuICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuY29uc3QgS2V5cyA9IHtcbiAgQkFDS1NQQUNFOiA4LFxuICBUQUI6IDksXG4gIEVOVEVSOiAxMyxcbiAgU0hJRlQ6IDE2LFxuICBDVFJMOiAxNyxcbiAgQUxUOiAxOCxcbiAgRVNDQVBFOiAyNyxcblxuICBMRUZUOiAzNyxcbiAgUklHSFQ6IDM5LFxuICBVUDogMzgsXG5cbiAgREVMRVRFOiA0NixcbiAgRE9XTjogNDAsXG4gIExFRlRfT1NfS0VZOiA5MSxcbiAgUklHSFRfT1NfS0VZOiA5MixcbiAgU0VMRUNUX0tFWTogOTNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Db21wbGV0ZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgYXV0b2NvbXBsZXRlIGlzIHNpbXBsZSBvciBmaWx0ZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmlzRmlsdGVyU2VhcmNoID0gb3B0cy5pc0ZpbHRlclNlYXJjaCB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgYmFyS2V5YCBpbiB0aGUgdmVydGljYWwgc2VhcmNoIHRvIHVzZSBmb3IgYXV0by1jb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYmFyS2V5ID0gb3B0cy5iYXJLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgdmVydGljYWxLZXlgIG9mIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggdG8gdXNlIGZvciBhdXRvLWNvbXBsZXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IG9wdHMudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBpbnB1dCBlbCBzZWxlY3RvciBmb3IgYXV0byBjb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5faW5wdXRFbCA9IG9wdHMuaW5wdXRFbCB8fCAnLmpzLXlleHQtcXVlcnknO1xuXG4gICAgLyoqXG4gICAgICogQSBzZWxlY3RvciBmb3IgdGhlIGF1dG9jb21wbGV0ZSBlbGVtZW50ZXNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2F1dG9jb21wbGV0ZUVscyA9IG9wdHMuYXV0b0NvbXBsZXRlRWxzIHx8ICcuanMteWV4dC1hdXRvY29tbGV0ZS1vcHRpb24nO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIGZvciB0aGUgZGF0YS1zdG9yYWdlIHRvIGxpc3RlbiBmb3IgdXBkYXRlcyBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBgJHtTdG9yYWdlS2V5cy5BVVRPQ09NUExFVEV9LiR7dGhpcy5uYW1lfWA7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGlucHV0IHZhbHVlIHdoZW4gdHlwaW5nLlxuICAgICAqIFdlIHVzZSB0aGlzIGZvciByZXNldHRpbmcgdGhlIHN0YXRlIG9mIHRoZSBpbnB1dCB2YWx1ZSB3aGVuIG90aGVyIGludGVyYWN0aW9ucyAoZS5nLiByZXN1bHQgbmF2aWdhdGlvbilcbiAgICAgKiBjaGFuZ2UgYmFzZWQgb24gaW50ZXJhY3Rpb25zLiBGb3IgaW5zdGFuY2UsIGhpdHRpbmcgZXNjYXBlIHNob3VsZCByZXNldCB0aGUgdmFsdWUgdG8gdGhlIG9yaWdpbmFsIHR5cGVkIHF1ZXJ5LlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fb3JpZ2luYWxRdWVyeSA9IG9wdHMub3JpZ2luYWxRdWVyeSB8fCAnJztcblxuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIGtleWJvYXJkIG5hdmlnYXRpb24gdGhyb3VnaCByZXN1bHRzLlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBzZWN0aW9uIHdlJ3JlIG5hdmlnYXRpbmcgaW4uXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9zZWN0aW9uSW5kZXggPSAwO1xuXG4gICAgLyoqXG4gICAgICogVXNlZCBmb3Iga2V5Ym9hcmQgbmF2aWdhdGlvbiB0aHJvdWdoIHJlc3VsdHMuXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IHJlc3VsdCBpbmRleCB3ZSdyZSBuYXZpZ2F0aW5nIG9uLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVzdWx0SW5kZXggPSAtMTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSB0ZXh0IHRvIHNob3cgYXMgdGhlIGZpcnN0IGl0ZW0gZm9yIGF1dG8gY29tcGxldGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5wcm9tcHRIZWFkZXIgPSBvcHRzLnByb21wdEhlYWRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgaW52b2tlZCB3aGVuIHRoZSBgRW50ZXJgIGtleSBpcyBwcmVzc2VkIG9uIGF1dG8gY29tcGxldGUuXG4gICAgICovXG4gICAgdGhpcy5fb25TdWJtaXQgPSBvcHRzLm9uU3VibWl0IHx8IGZ1bmN0aW9uICgpIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBhbGlhc2VkIHVzZWQgYnkgdGhlIGNvbXBvbmVudCBtYW5hZ2VyIGZvciBjcmVhdGlvbi5cbiAgICovXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdBdXRvQ29tcGxldGUnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdzZWFyY2gvYXV0b2NvbXBsZXRlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXRTdGF0ZSBpcyBvdmVycmlkZGVuIHNvIHRoYXQgd2UgY2FuIHByb3ZpZGUgYWRkaXRpb25hbCBtZXRhIGRhdGFcbiAgICogdG8gdGhlIHRlbXBsYXRlIChlLmcuIHRoZSBzZWN0aW9uSW5kZXggYW5kIHJlc3VsdEluZGV4KSwgc2luY2VcbiAgICogdGhvc2UgYXJlIGNsaWVudC1pbnRlcmFjdGlvbiBzcGVjaWZpYyB2YWx1ZXMgYW5kIGFyZW4ndCByZXR1cm5lZCBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIHNlY3Rpb25JbmRleDogdGhpcy5fc2VjdGlvbkluZGV4LFxuICAgICAgcmVzdWx0SW5kZXg6IHRoaXMuX3Jlc3VsdEluZGV4LFxuICAgICAgcHJvbXB0SGVhZGVyOiB0aGlzLl9vcmlnaW5hbFF1ZXJ5Lmxlbmd0aCA9PT0gMCA/IHRoaXMucHJvbXB0SGVhZGVyIDogbnVsbFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB1cGRhdGVTdGF0ZSBpcyBhIGhlbHBlciB0byBhcHBseSB0aGUgY3VycmVudCBzdGF0ZSB3aXRoIG5ldyBjbGllbnQtc3RhdGUuXG4gICAqL1xuICB1cGRhdGVTdGF0ZSAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLl9zdGF0ZS5nZXQoKSk7XG4gIH1cblxuICAvKipcbiAgICogb25DcmVhdGUgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBjb25zdHJ1Y3RlZCBmcm9tIHRoZSBmcmFtZXdvcmsuXG4gICAqIE9uY2Ugd2UncmUgaW5pdGFsaXplZCwgd2Ugd2lyZSB1cCBhbGwgb2Ygb3VyIHVzZXIgaW50ZXJhY3Rpb25zXG4gICAqL1xuICBvbkNyZWF0ZSAoKSB7XG4gICAgLy8gVXNlIHRoZSBjb250ZXh0IG9mIHRoZSBwYXJlbnQgY29tcG9uZW50IHRvIGZpbmQgdGhlIGlucHV0IG5vZGUuXG4gICAgbGV0IHF1ZXJ5SW5wdXQgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Ll9jb250YWluZXIsIHRoaXMuX2lucHV0RWwpO1xuICAgIGlmICghcXVlcnlJbnB1dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgaW5pdGlhbGl6ZSBBdXRvQ29tcGxldGUuIENhbiBub3QgZmluZCB7SFRNTEVsZW1lbnR9IGAnLCB0aGlzLl9pbnB1dEVsLCAnYC4nKTtcbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIHRoZSBuYXRpdmUgYXV0byBjb21wbGV0ZVxuICAgIERPTS5hdHRyKHF1ZXJ5SW5wdXQsICdhdXRvQ29tcGxldGUnLCAnb2ZmJyk7XG5cbiAgICAvLyBUaGUgdXNlciBleGl0cyB0aGUgaW5wdXQsIHNvIHdlIHdhbnQgdG8gcmVzZXQgdGhlIHN0YXRlIGFuZCBjbG9zZVxuICAgIC8vIHRoZSBhdXRvIGNvbXBsZXRlXG4gICAgLy8gVE9ETyhqZGVsZXJtZSk6IENsb3NlIGxvZ2ljIHRvIGJlIG1vdmVkIHRvIHBhcmVudFxuICAgIERPTS5vbihkb2N1bWVudCwgJ2NsaWNrJywgZSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmpzLXlleHQtYXV0b2NvbXBsZXRlLWNvbnRhaW5lciAqJykgfHwgZS50YXJnZXQubWF0Y2hlcyh0aGlzLl9pbnB1dEVsKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIGEgdXNlciBmb2N1c2VzIHRoZSBpbnB1dCwgd2Ugc2hvdWxkIHBvcHVsYXRlIHRoZSBhdXRvY29tcGxldGUgYmFzZWRcbiAgICAvLyBvbiB0aGUgY3VycmVudCB2YWx1ZVxuICAgIERPTS5vbihxdWVyeUlucHV0LCAnZm9jdXMnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmF1dG9Db21wbGV0ZShxdWVyeUlucHV0LnZhbHVlKTtcbiAgICB9KTtcblxuICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIG5hdmlnYXRlIGJldHdlZW4gdGhlIHJlc3VsdHMgdXNpbmcgdGhlIGtleWJvYXJkXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlTmF2aWdhdGVSZXN1bHRzKGUua2V5Q29kZSwgZSk7XG4gICAgICB0aGlzLmhhbmRsZVN1Ym1pdFJlc3VsdChlLmtleUNvZGUsIHF1ZXJ5SW5wdXQudmFsdWUsIGUpO1xuICAgIH0pO1xuXG4gICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gc2VsZWN0IGEgcmVzdWx0IHdpdGggdGhlIG1vdXNlXG4gICAgRE9NLmRlbGVnYXRlKHRoaXMuX2NvbnRhaW5lciwgJy5qcy15ZXh0LWF1dG9jb21wbGV0ZS1vcHRpb24nLCAnY2xpY2snLCAoZXZ0LCB0YXJnZXQpID0+IHtcbiAgICAgIGxldCBkYXRhID0gdGFyZ2V0LmRhdGFzZXQ7XG4gICAgICBsZXQgdmFsID0gZGF0YS5zaG9ydDtcblxuICAgICAgdGhpcy51cGRhdGVRdWVyeSh2YWwpO1xuICAgICAgdGhpcy5fb25TdWJtaXQodmFsLCBkYXRhLmZpbHRlcik7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIHRoZSB1c2VyIGlzIHR5cGluZyBpbiB0aGUgaW5wdXQsIHByb2Nlc3MgdGhlIGF1dG8gY29tcGxldGUuXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdrZXl1cCcsIChlKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZVR5cGluZyhlLmtleUNvZGUsIHF1ZXJ5SW5wdXQudmFsdWUsIGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGNsb3NlIHdpbGwgaGlkZSB0aGUgYXV0byBjb21wbGV0ZSByZXN1bHRzIGFuZCByZXNldCB0aGUgc3RhdGUuXG4gICAqL1xuICBjbG9zZSAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7fSk7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlc2V0cyB0aGUgY2xpZW50IHN0YXRlIHRvIHRoZWlyIG9yaWdpbmFsIHZhbHVlcyBhbmQgdHJpZ2dlcnNcbiAgICogYSB0ZW1wbGF0ZS1yZXJlbmRlciB2aWEgdXBkYXRlU3RhdGVcbiAgICovXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLl9zZWN0aW9uSW5kZXggPSAwO1xuICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gLTE7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gdXBkYXRlIHRoZSBpbnB1dCB0ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRWYWx1ZSBPcHRpb24gdmFsdWUgcHJvdmlkZWQuXG4gICAqIElmIG5vIHZhbHVlIHByb3ZpZGVkLCB3ZSdsbCB0cnkgdG8gZmluZCBpdCBiYXNlZCBvbiB0aGUgc2VsZWN0aW9uIGluZGV4ZXMuXG4gICAqL1xuICB1cGRhdGVRdWVyeSAob3B0VmFsdWUpIHtcbiAgICAvLyBPbmx5IHdhbnQgdG8gdXBkYXRlIHRoZSBxdWVyeSBzdHJpbmcgaWYgdGhlcmVzIGEgdmFsdWUuXG4gICAgLy8gSWYgb25lIGlzIHByb3ZpZGVkLCBncmVhdC5cbiAgICAvLyBPdGhlcndpc2UsIGxldHMgdHJ5IHRvIGZpbmQgaXQgZnJvbSB0aGUgY3VycmVudCBzZWxlY3Rpb24gaW4gdGhlIHJlc3VsdHMuXG4gICAgaWYgKG9wdFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCBzZWN0aW9ucyA9IHRoaXMuX3N0YXRlLmdldCgnc2VjdGlvbnMnKTtcblxuICAgICAgbGV0IHJlc3VsdHMgPSBzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHM7XG4gICAgICBvcHRWYWx1ZSA9IHJlc3VsdHNbdGhpcy5fcmVzdWx0SW5kZXhdLnNob3J0VmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IHF1ZXJ5RWwgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Ll9jb250YWluZXIsICcuanMteWV4dC1xdWVyeScpO1xuICAgIHF1ZXJ5RWwudmFsdWUgPSBvcHRWYWx1ZTtcbiAgfVxuXG4gIGhhbmRsZVR5cGluZyAoa2V5LCB2YWx1ZSwgZSkge1xuICAgIGxldCBpZ25vcmVkS2V5cyA9IFtcbiAgICAgIEtleXMuRE9XTixcbiAgICAgIEtleXMuVVAsXG4gICAgICBLZXlzLkNUUkwsXG4gICAgICBLZXlzLkFMVCxcbiAgICAgIEtleXMuU0hJRlQsXG4gICAgICBLZXlzLkxFRlQsXG4gICAgICBLZXlzLlJJR0hULFxuICAgICAgS2V5cy5MRUZUX09TX0tFWSxcbiAgICAgIEtleXMuUklHSFRfT1NfS0VZLFxuICAgICAgS2V5cy5FTlRFUixcbiAgICAgIEtleXMuU0VMRUNUX0tFWVxuICAgIF07XG5cbiAgICBpZiAoaWdub3JlZEtleXMuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBVc2VyIGVzY2FwZXMgb3V0IG9mIGF1dG8gY29tcGxldGUsIHNvIHdlIHJlc2V0IGl0IHRvIHRoZSBvcmlnaW5hbCBpbnB1dFxuICAgIGlmIChrZXkgPT09IEtleXMuRVNDQVBFKSB7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHRoaXMuX29yaWdpbmFsUXVlcnkpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRhYmJpbmcgb3V0IG9yIGVudGVyIHNob3VsZCBjbG9zZSB0aGUgYXV0byBjb21wbGV0ZS5cbiAgICBpZiAoa2V5ID09PSBLZXlzLlRBQikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgb3JpZ2luYWwgdmFsdWUgYmFzZWQgb24gdGhlIHVzZXIgaW5wdXRcbiAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gdmFsdWU7XG5cbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgdGhpcy5hdXRvQ29tcGxldGUodmFsdWUpO1xuICB9XG5cbiAgYXV0b0NvbXBsZXRlIChpbnB1dCkge1xuICAgIGlmICh0aGlzLmlzRmlsdGVyU2VhcmNoKSB7XG4gICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlRmlsdGVyKGlucHV0LCB0aGlzLm5hbWUsIHRoaXMuX3ZlcnRpY2FsS2V5LCB0aGlzLl9iYXJLZXkpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fdmVydGljYWxLZXkgfHwgdGhpcy5fYmFyS2V5KSB7XG4gICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlVmVydGljYWwoaW5wdXQsIHRoaXMubmFtZSwgdGhpcy5fdmVydGljYWxLZXksIHRoaXMuX2JhcktleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29yZS5hdXRvQ29tcGxldGVVbml2ZXJzYWwoaW5wdXQsIHRoaXMubmFtZSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTmF2aWdhdGVSZXN1bHRzIChrZXksIGUpIHtcbiAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG4gICAgaWYgKHNlY3Rpb25zID09PSB1bmRlZmluZWQgfHwgc2VjdGlvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0cyA9IHNlY3Rpb25zW3RoaXMuX3NlY3Rpb25JbmRleF0ucmVzdWx0cztcbiAgICBpZiAoa2V5ID09PSBLZXlzLlVQKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5fcmVzdWx0SW5kZXggPD0gMCkge1xuICAgICAgICBpZiAodGhpcy5fc2VjdGlvbkluZGV4ID4gMCkge1xuICAgICAgICAgIHRoaXMuX3NlY3Rpb25JbmRleC0tO1xuICAgICAgICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzLmxlbmd0aCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVRdWVyeSh0aGlzLl9vcmlnaW5hbFF1ZXJ5KTtcbiAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3Jlc3VsdEluZGV4LS07XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gS2V5cy5ET1dOKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5fcmVzdWx0SW5kZXggPj0gcmVzdWx0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPCBzZWN0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgdGhpcy5fc2VjdGlvbkluZGV4Kys7XG4gICAgICAgICAgdGhpcy5fcmVzdWx0SW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3Jlc3VsdEluZGV4Kys7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU3VibWl0UmVzdWx0IChrZXksIHZhbHVlLCBlKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gdGhpcy5fc3RhdGUuZ2V0KCdzZWN0aW9ucycpO1xuICAgIGlmIChzZWN0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IHNlY3Rpb25zLmxlbmd0aCA8PSAwKSB7XG4gICAgICBpZiAodGhpcy5pc0ZpbHRlclNlYXJjaCkge1xuICAgICAgICB0aGlzLmF1dG9Db21wbGV0ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gc3VibWl0IHRoZSBzZWFyY2ggb24gZW50ZXJcbiAgICBpZiAoa2V5ID09PSBLZXlzLkVOVEVSKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICh0aGlzLmlzRmlsdGVyU2VhcmNoICYmIHRoaXMuX3Jlc3VsdEluZGV4ID09PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBmaWx0ZXIgPSAnJztcbiAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPj0gMCAmJiB0aGlzLl9yZXN1bHRJbmRleCA+PSAwKSB7XG4gICAgICAgIGZpbHRlciA9IEpTT04uc3RyaW5naWZ5KHNlY3Rpb25zW3RoaXMuX3NlY3Rpb25JbmRleF0ucmVzdWx0c1t0aGlzLl9yZXN1bHRJbmRleF0uZmlsdGVyKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGVRdWVyeSh2YWx1ZSk7XG4gICAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gdmFsdWU7XG4gICAgICB0aGlzLl9vblN1Ym1pdCh2YWx1ZSwgZmlsdGVyKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZpbHRlckJveENvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuXG4vKipcbiAqIFJlbmRlcnMgYSBzZXQgb2YgZmlsdGVycywgYW5kIHNlYXJjaGVzIHdpdGggdGhlbSB3aGVuIGFwcGxpZWQuXG4gKiBNdWx0aXBsZSBGaWx0ZXJCb3ggY29tcG9uZW50cyB3aWxsIEFORCB0b2dldGhlciBidXQgd2lsbCBub3Qgc2hhcmUgc3RhdGUuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyQm94Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIGlmICghY29uZmlnLmZpbHRlcnMgfHwgIShjb25maWcuZmlsdGVycyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlckJveCByZXF1aXJlcyBmaWx0ZXJzIHRvIGJlIHByb3ZpZGVkIGFzIGFuIGFycmF5JyxcbiAgICAgICAgJ0ZpbHRlckJveCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGZpbHRlcnMgdG8gZGlzcGxheSBhbmQgY29udHJvbFxuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlckNvbmZpZ3MgPSBjb25maWcuZmlsdGVycztcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBzZWFyY2hcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRyaWdnZXIgYSBzZWFyY2ggb24gZWFjaCBjaGFuZ2UgdG8gYSBmaWx0ZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaE9uQ2hhbmdlID0gY29uZmlnLnNlYXJjaE9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdG9yIG9mIHRoZSBhcHBseSBidXR0b25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBwbHlCdXR0b25TZWxlY3RvciA9IGNvbmZpZy5hcHBseUJ1dHRvblNlbGVjdG9yIHx8ICcuanMteWV4dC1maWx0ZXJib3gtYXBwbHknO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudHMgY3JlYXRlZCBmb3IgZWFjaCBmaWx0ZXIgY29uZmlnXG4gICAgICogQHR5cGUge0NvbXBvbmVudFtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGZpbHRlciBjb21wb25lbnRzIGluIHRoZSBib3hcbiAgICAgKiBAdHlwZSB7RmlsdGVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVycyA9IFtdO1xuXG4gICAgdGhpcy5fc2F2ZU9uQ2hhbmdlID0gY29uZmlnLnNhdmVPbkNoYW5nZSB8fCBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdGaWx0ZXJCb3gnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL3Jlc3VsdHMnO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgIGZpbHRlckNvbmZpZ3M6IHRoaXMuX2ZpbHRlckNvbmZpZ3MsXG4gICAgICBzaG93QXBwbHlCdXR0b246ICF0aGlzLl9zZWFyY2hPbkNoYW5nZVxuICAgIH0pKTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIC8vIEluaXRpYWxpemUgZmlsdGVycyBmcm9tIGNvbmZpZ3NcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2ZpbHRlckNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuX2ZpbHRlckNvbmZpZ3NbaV07XG4gICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKGNvbmZpZy50eXBlLCBPYmplY3QuYXNzaWduKHt9LFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfS5maWx0ZXIke2l9YCxcbiAgICAgICAgICBzdG9yZU9uQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICBjb250YWluZXI6IGAuanMteWV4dC1maWx0ZXJib3gtZmlsdGVyJHtpfWAsXG4gICAgICAgICAgb25DaGFuZ2U6IChmKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uRmlsdGVyQ2hhbmdlKGksIGYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgY29tcG9uZW50Lm1vdW50KCk7XG4gICAgICB0aGlzLl9maWx0ZXJDb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGFwcGx5IGJ1dHRvblxuICAgIGlmICghdGhpcy5fc2VhcmNoT25DaGFuZ2UpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2FwcGx5QnV0dG9uU2VsZWN0b3IpO1xuICAgICAgRE9NLm9uKGJ1dHRvbiwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9zYXZlRmlsdGVyc1RvU3RvcmFnZSgpO1xuICAgICAgICB0aGlzLl9zZWFyY2goKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgY2hhbmdlcyB0byBjaGlsZCBmaWx0ZXIgY29tcG9uZW50c1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBjaGFuZ2VkIGZpbHRlclxuICAgKiBAcGFyYW0ge0ZpbHRlcn0gZmlsdGVyIFRoZSBuZXcgZmlsdGVyXG4gICAqL1xuICBvbkZpbHRlckNoYW5nZSAoaW5kZXgsIGZpbHRlcikge1xuICAgIHRoaXMuX2ZpbHRlcnNbaW5kZXhdID0gZmlsdGVyO1xuICAgIGlmICh0aGlzLl9zZWFyY2hPbkNoYW5nZSkge1xuICAgICAgdGhpcy5fc2F2ZUZpbHRlcnNUb1N0b3JhZ2UoKTtcbiAgICAgIHRoaXMuX3NlYXJjaCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9zYXZlT25DaGFuZ2UpIHtcbiAgICAgIHRoaXMuX3NhdmVGaWx0ZXJzVG9TdG9yYWdlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgY3VycmVudCBmaWx0ZXJzIHRvIHN0b3JhZ2UgdG8gYmUgdXNlZCBpbiB0aGUgbmV4dCBzZWFyY2hcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zYXZlRmlsdGVyc1RvU3RvcmFnZSAoKSB7XG4gICAgY29uc3QgdmFsaWRGaWx0ZXJzID0gdGhpcy5fZmlsdGVycy5maWx0ZXIoZiA9PiBmICE9PSB1bmRlZmluZWQgJiYgZiAhPT0gbnVsbCk7XG4gICAgY29uc3QgY29tYmluZWRGaWx0ZXIgPSB2YWxpZEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgPyBGaWx0ZXIuYW5kKC4uLnZhbGlkRmlsdGVycylcbiAgICAgIDogdmFsaWRGaWx0ZXJzWzBdO1xuICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBjb21iaW5lZEZpbHRlciB8fCB7fSk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBhIHNlYXJjaCB3aXRoIGFsbCBmaWx0ZXJzIGluIHN0b3JhZ2VcbiAgICovXG4gIF9zZWFyY2ggKCkge1xuICAgIGNvbnN0IGFsbEZpbHRlcnMgPSB0aGlzLmNvcmUuc3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICBjb25zdCB0b3RhbEZpbHRlciA9IGFsbEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgPyBGaWx0ZXIuYW5kKC4uLmFsbEZpbHRlcnMpXG4gICAgICA6IGFsbEZpbHRlcnNbMF07XG5cbiAgICBjb25zdCBxdWVyeSA9IHRoaXMuY29yZS5zdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKSB8fCAnJztcblxuICAgIHRoaXMuY29yZS52ZXJ0aWNhbFNlYXJjaChxdWVyeSwgdGhpcy5fdmVydGljYWxLZXksIEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZpbHRlck9wdGlvbnNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5cbi8qKlxuICogVGhlIGN1cnJlbnRseSBzdXBwb3J0ZWQgY29udHJvbHNcbiAqIEB0eXBlIHtzdHJpbmdbXX1cbiAqL1xuY29uc3QgU1VQUE9SVEVEX0NPTlRST0xTID0gW1xuICAnc2luZ2xlb3B0aW9uJyxcbiAgJ211bHRpb3B0aW9uJ1xuXTtcblxuLyoqXG4gKiBSZW5kZXJzIGEgc2V0IG9mIG9wdGlvbnMsIGVhY2ggb25lIHJlcHJlc2VudGluZyBhIGZpbHRlciBpbiBhIHNlYXJjaC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyT3B0aW9uc0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICBpZiAoIWNvbmZpZy5jb250cm9sIHx8ICFTVVBQT1JURURfQ09OVFJPTFMuaW5jbHVkZXMoY29uZmlnLmNvbnRyb2wpKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICAnRmlsdGVyT3B0aW9ucyByZXF1aXJlcyBhIHZhbGlkIFwiY29udHJvbFwiIHRvIGJlIHByb3ZpZGVkJyxcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMnKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmZpZy5vcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICAnRmlsdGVyT3B0aW9ucyBjb21wb25lbnQgcmVxdWlyZXMgb3B0aW9ucyB0byBiZSBwcm92aWRlZCcsXG4gICAgICAgICdGaWx0ZXJPcHRpb25zJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGxpc3Qgb2YgZmlsdGVyIG9wdGlvbnMgdG8gZGlzcGxheSB3aXRoIGNoZWNrZWQgc3RhdHVzXG4gICAgICogQHR5cGUge29iamVjdFtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb3B0aW9ucyA9IGNvbmZpZy5vcHRpb25zLm1hcChvID0+IE9iamVjdC5hc3NpZ24oe30sIG8sIHsgY2hlY2tlZDogZmFsc2UgfSkpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgY29udHJvbCB0byBkaXNwbGF5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2NvbnRyb2wgPSBjb25maWcuY29udHJvbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RvciB1c2VkIGZvciBvcHRpb25zIGluIHRoZSB0ZW1wbGF0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vcHRpb25TZWxlY3RvciA9IGNvbmZpZy5vcHRpb25TZWxlY3RvciB8fCAnLmpzLXlleHQtZmlsdGVyLW9wdGlvbic7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBzdG9yZXMgdGhlIGZpbHRlciB0byBzdG9yYWdlIG9uIGVhY2ggY2hhbmdlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdG9yZU9uQ2hhbmdlID0gY29uZmlnLnN0b3JlT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNoYW5nZWRcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vbkNoYW5nZSA9IGNvbmZpZy5vbkNoYW5nZSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB0byBiZSB1c2VkIGluIHRoZSBsZWdlbmRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbGFiZWwgPSBjb25maWcubGFiZWwgfHwgJ0ZpbHRlcnMnO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0ZpbHRlck9wdGlvbnMnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXIsIGJhc2VkIG9uIHRoZSBjb250cm9sXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiBgY29udHJvbHMvJHtjb25maWcuY29udHJvbH1gO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBvcHRpb25zOiB0aGlzLl9vcHRpb25zLFxuICAgICAgbGFiZWw6IHRoaXMuX2xhYmVsXG4gICAgfSkpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgRE9NLmRlbGVnYXRlKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fb3B0aW9uU2VsZWN0b3IsICdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdXBkYXRlT3B0aW9uKHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4KSwgZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xuXG4gICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLl9idWlsZEZpbHRlcigpO1xuICAgICAgaWYgKHRoaXMuX3N0b3JlT25DaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGZpbHRlcik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX29uQ2hhbmdlKGZpbHRlcik7XG4gICAgfSk7XG4gIH1cblxuICBfdXBkYXRlT3B0aW9uIChpbmRleCwgY2hlY2tlZCkge1xuICAgIGlmICh0aGlzLl9jb250cm9sID09PSAnc2luZ2xlb3B0aW9uJykge1xuICAgICAgdGhpcy5fb3B0aW9ucyA9IHRoaXMuX29wdGlvbnMubWFwKG8gPT4gT2JqZWN0LmFzc2lnbih7fSwgbywgeyBjaGVja2VkOiBmYWxzZSB9KSk7XG4gICAgfVxuXG4gICAgdGhpcy5fb3B0aW9uc1tpbmRleF0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9vcHRpb25zW2luZGV4XSwgeyBjaGVja2VkIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgb3B0aW9uc1xuICAgKi9cbiAgY2xlYXIgKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gRE9NLnF1ZXJ5QWxsKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fb3B0aW9uU2VsZWN0b3IpO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZSA9PiBlLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdmYWxzZScpKTtcbiAgICB0aGlzLl9hcHBseUZpbHRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGFuZCByZXR1cm4gdGhlIEZpbHRlciB0aGF0IHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9idWlsZEZpbHRlciAoKSB7XG4gICAgY29uc3QgZmlsdGVycyA9IHRoaXMuX29wdGlvbnNcbiAgICAgIC5maWx0ZXIobyA9PiBvLmNoZWNrZWQpXG4gICAgICAubWFwKG8gPT4gRmlsdGVyLmVxdWFsKG8uZmllbGQsIG8udmFsdWUpKTtcblxuICAgIHJldHVybiBmaWx0ZXJzLmxlbmd0aCA+IDBcbiAgICAgID8gRmlsdGVyLmdyb3VwKC4uLmZpbHRlcnMpXG4gICAgICA6IHt9O1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBSYW5nZUZpbHRlckNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5nZUZpbHRlckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmllbGQgdG8gZmlsdGVyIG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpZWxkID0gY29uZmlnLmZpZWxkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgZmlsdGVyIHZhbHVlIGNoYW5nZXNcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vbkNoYW5nZSA9IGNvbmZpZy5vbkNoYW5nZSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHN0b3JlcyB0aGUgZmlsdGVyIHRvIHN0b3JhZ2Ugb24gZWFjaCBjaGFuZ2VcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N0b3JlT25DaGFuZ2UgPSBjb25maWcuc3RvcmVPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHJhbmdlIHJlcHJlc2VudGVkXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3JhbmdlID0ge1xuICAgICAgbWluOiBjb25maWcuaW5pdGlhbE1pbiB8fCAwLFxuICAgICAgbWF4OiBjb25maWcuaW5pdGlhbE1heCB8fCAxMFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgdG8gZGlzcGxheSBmb3IgdGhlIHJhbmdlIGNvbnRyb2xcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGl0bGUgPSBjb25maWcudGl0bGU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgbGFiZWwgdG8gZGlzcGxheSBmb3IgdGhlIG1pbiBpbnB1dFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9taW5MYWJlbCA9IGNvbmZpZy5taW5MYWJlbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGxhYmVsIHRvIGRpc3BsYXkgZm9yIHRoZSBtYXggaW5wdXRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbWF4TGFiZWwgPSBjb25maWcubWF4TGFiZWwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gYGNvbnRyb2xzL3JhbmdlYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdSYW5nZUZpbHRlcic7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIHRpdGxlOiB0aGlzLl90aXRsZSxcbiAgICAgIG1pbkxhYmVsOiB0aGlzLl9taW5MYWJlbCxcbiAgICAgIG1heExhYmVsOiB0aGlzLl9tYXhMYWJlbCxcbiAgICAgIG1pblZhbHVlOiB0aGlzLl9yYW5nZS5taW4sXG4gICAgICBtYXhWYWx1ZTogdGhpcy5fcmFuZ2UubWF4XG4gICAgfSkpO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIERPTS5kZWxlZ2F0ZSh0aGlzLl9jb250YWluZXIsICcuanMteWV4dC1yYW5nZScsICdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3VwZGF0ZVJhbmdlKGV2ZW50LnRhcmdldC5kYXRhc2V0LmtleSwgTnVtYmVyLnBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0TWluICh2YWx1ZSkge1xuICAgIHRoaXMuX3VwZGF0ZVJhbmdlKCdtaW4nLCB2YWx1ZSk7XG4gIH1cblxuICBzZXRNYXggKHZhbHVlKSB7XG4gICAgdGhpcy5fdXBkYXRlUmFuZ2UoJ21heCcsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGN1cnJlbnQgcmFuZ2Ugc3RhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmFuZ2Uga2V5IHRvIHVwZGF0ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIG5ldyB2YWx1ZSBmb3IgdGhlIGtleVxuICAgKi9cbiAgX3VwZGF0ZVJhbmdlIChrZXksIHZhbHVlKSB7XG4gICAgdGhpcy5fcmFuZ2UgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9yYW5nZSwgeyBba2V5XTogdmFsdWUgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSgpO1xuXG4gICAgY29uc3QgZmlsdGVyID0gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgICBpZiAodGhpcy5fc3RvcmVPbkNoYW5nZSkge1xuICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGZpbHRlcik7XG4gICAgfVxuXG4gICAgdGhpcy5fb25DaGFuZ2UoZmlsdGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgZmlsdGVyIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjdXJyZW50IHN0YXRlXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBfYnVpbGRGaWx0ZXIgKCkge1xuICAgIHJldHVybiBGaWx0ZXIuaW5jbHVzaXZlUmFuZ2UodGhpcy5fZmllbGQsIHRoaXMuX3JhbmdlLm1pbiwgdGhpcy5fcmFuZ2UubWF4KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRGF0ZUZpbHRlckNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIEEgZmlsdGVyIGZvciBhIHJhbmdlIG9mIGRhdGVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVSYW5nZUZpbHRlckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBpIGZpZWxkIHRoaXMgZmlsdGVyIGNvbnRyb2xzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpZWxkID0gY29uZmlnLmZpZWxkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIHRvIGRpc3BsYXkgZm9yIHRoZSBkYXRlIHJhbmdlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RpdGxlID0gY29uZmlnLnRpdGxlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGxhYmVsIHRvIHNob3cgZm9yIHRoZSBtaW4gZGF0ZSBpbnB1dFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9taW5MYWJlbCA9IGNvbmZpZy5taW5MYWJlbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGxhYmVsIHRvIHNob3cgZm9yIHRoZSBtYXggZGF0ZSBpbnB1dFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9tYXhMYWJlbCA9IGNvbmZpZy5tYXhMYWJlbCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbGxiYWNrIHVzZWQgd2hlbiBhIGRhdGUgaXMgY2hhbmdlZFxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29uQ2hhbmdlID0gY29uZmlnLm9uQ2hhbmdlIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc3RvcmVzIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBvbiBlYWNoIGNoYW5nZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RvcmVPbkNoYW5nZSA9IGNvbmZpZy5zdG9yZU9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhpcyBmaWx0ZXIgcmVwcmVzZW50cyBhbiBleGNsdXNpdmUgcmFuZ2UsIHJhdGhlciB0aGFuIGFuIGluY2x1c2l2ZSBvbmVcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2lzRXhjbHVzaXZlID0gY29uZmlnLmlzRXhjbHVzaXZlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIGZvciB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gYGNvbnRyb2xzL2RhdGVgO1xuXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRvZGF5U3RyaW5nID0gYCR7dG9kYXkuZ2V0RnVsbFllYXIoKX0tJHtgJHt0b2RheS5nZXRNb250aCgpICsgMX1gLnBhZFN0YXJ0KDIsICcwJyl9LSR7YCR7dG9kYXkuZ2V0RGF0ZSgpfWAucGFkU3RhcnQoMiwgJzAnKX1gO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgZGF0ZSByYW5nZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZGF0ZSA9IHtcbiAgICAgIG1pbjogY29uZmlnLmluaXRpYWxNaW4gfHwgdG9kYXlTdHJpbmcsXG4gICAgICBtYXg6IGNvbmZpZy5pbml0aWFsTWF4IHx8IHRvZGF5U3RyaW5nXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdEYXRlUmFuZ2VGaWx0ZXInO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB0aXRsZTogdGhpcy5fdGl0bGUsXG4gICAgICBtaW5MYWJlbDogdGhpcy5fbWluTGFiZWwsXG4gICAgICBtYXhMYWJlbDogdGhpcy5fbWF4TGFiZWwsXG4gICAgICBkYXRlTWluOiB0aGlzLl9kYXRlLm1pbixcbiAgICAgIGRhdGVNYXg6IHRoaXMuX2RhdGUubWF4XG4gICAgfSkpO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIERPTS5kZWxlZ2F0ZSh0aGlzLl9jb250YWluZXIsICcuanMteWV4dC1kYXRlJywgJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmRhdGFzZXQua2V5LCBldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgdGhpcy5fdXBkYXRlUmFuZ2UoZXZlbnQudGFyZ2V0LmRhdGFzZXQua2V5LCBldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgbWluIGRhdGUgdG8gdGhlIG9uZSBwcm92aWRlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0ZSBEYXRlIHRvIHNldCBpbiB5eXl5LW1tLWRkIHN0cmluZyBmb3JtYXRcbiAgICovXG4gIHNldE1pbiAoZGF0ZSkge1xuICAgIHRoaXMuX3VwZGF0ZVJhbmdlKCdtaW4nLCBkYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG1heCBkYXRlIHRvIHRoZSBvbmUgcHJvdmlkZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGUgRGF0ZSB0byBzZXQgaW4geXl5eS1tbS1kZCBzdHJpbmcgZm9ybWF0XG4gICAqL1xuICBzZXRNYXggKGRhdGUpIHtcbiAgICB0aGlzLl91cGRhdGVSYW5nZSgnbWF4JywgZGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZGF0ZSByYW5nZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgZm9yIHRoZSBkYXRlIHZhbHVlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgc3RyaW5nIGRhdGUgdmFsdWVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91cGRhdGVSYW5nZSAoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXMuX2RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9kYXRlLCB7IFtrZXldOiB2YWx1ZSB9KTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG5cbiAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLl9idWlsZEZpbHRlcigpO1xuICAgIGlmICh0aGlzLl9zdG9yZU9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgZmlsdGVyKTtcbiAgICB9XG5cbiAgICB0aGlzLl9vbkNoYW5nZShmaWx0ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhbiBhcGkgZmlsdGVyIHdpdGggdGhlIGN1cnJlbnQgZGF0ZSBzdGF0ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2J1aWxkRmlsdGVyICgpIHtcbiAgICBpZiAodGhpcy5fZGF0ZS5taW4gPT09ICcnIHx8IHRoaXMuX2RhdGUubWF4ID09PSAnJykge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faXNFeGNsdXNpdmVcbiAgICAgID8gRmlsdGVyLmV4Y2x1c2l2ZVJhbmdlKHRoaXMuX2ZpZWxkLCB0aGlzLl9kYXRlLm1pbiwgdGhpcy5fZGF0ZS5tYXgpXG4gICAgICA6IEZpbHRlci5pbmNsdXNpdmVSYW5nZSh0aGlzLl9maWVsZCwgdGhpcy5fZGF0ZS5taW4sIHRoaXMuX2RhdGUubWF4KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRGlyZWN0QW5zd2VyQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RBbnN3ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuRElSRUNUX0FOU1dFUjtcbiAgfVxuXG4gIGJlZm9yZU1vdW50ICgpIHtcbiAgICBpZiAoIXRoaXMuaGFzU3RhdGUoJ2Fuc3dlcicpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRGlyZWN0QW5zd2VyJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9kaXJlY3RhbnN3ZXInO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBSZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1Jlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9yZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBSZXN1bHRzSXRlbUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50ICovXG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNJdGVtQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0V2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL2V2ZW50cmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50ICovXG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBSZXN1bHRzSXRlbUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvcGVvcGxlcmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE1hcFByb3ZpZGVyICovXG5cbi8qKlxuICogQSBNYXBQcm92aWRlciBpcyBhbiBpbnRlcmZhY2UgdGhhdCByZXByZXNlbnRzIHRoYXQgc2hvdWxkIGJlIGltcGxlbWVudGVkXG4gKiBpbiBvcmRlciB0byBpbnRlZ3JhdGUgd2l0aCBhIFRoaXJkIFBhcnR5IE1hcCBwcm92aWRlciBmb3IgYm90aFxuICogc3RhdGljIGFuZCBpbnRlcmFjdGl2ZSBtYXBzLiBNYXBQcm92aWRlcnMgYXJlIHVzZWQgYnkgdGhlIE1hcENvbXBvbmVudC5cbiAqXG4gKiBJbXBsZW1lbnRhdGlvbnMgc2hvdWxkIGV4dGVuZCB0aGlzIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdXNlZCBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgbWFwIHByb3ZpZGVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIG1hcCB0byBhcHBlbmQgdG8gdGhlIERPTSwgZGVmYXVsdHMgdG8gMTAwJVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5faGVpZ2h0ID0gb3B0cy5oZWlnaHQgfHwgMjAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSBtYXAgdG8gYXBwZW5kIHRvIHRoZSBET00sIGRlZmF1bHRzIHRvIDEwMCVcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3dpZHRoID0gb3B0cy53aWR0aCB8fCA2MDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgem9vbSBsZXZlbCBvZiB0aGUgbWFwLCBkZWZhdWx0cyB0byA5XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl96b29tID0gb3B0cy56b29tIHx8IDk7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgdW5kZXJseWluZyBtYXAgaW5zdGFuY2UsIGNyZWF0ZWQgYnkgdGhlIGV4dGVybmFsIGxpYi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX21hcCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUZW1wb3JhcnkgYm9vbGVhbiB0cmFja2luZyB3aGV0aGVyIG9yIG5vdCB0aGUgZXh0ZXJuYWwgSlMgbGlicmFyeSBpcyBsb2FkZWQgKHNlZSBUT0RPIGJlbG93KVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2lzTG9hZGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugb25jZSB0aGUgSmF2YXNjcmlwdCBpcyBsb2FkZWRcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5fb25Mb2FkZWQgPSBvcHRzLm9uTG9hZGVkIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1c3RvbSBjb25maWd1cmF0aW9uIG92ZXJyaWRlIHRvIHVzZSBmb3IgdGhlIG1hcCBtYXJrZXJzXG4gICAgICogQHR5cGUge09iamVjdHxGdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLl9waW5Db25maWcgPSB0eXBlb2Ygb3B0cy5waW4gPT09ICdmdW5jdGlvbicgPyBvcHRzLnBpbiA6IE9iamVjdC5hc3NpZ24oTWFwUHJvdmlkZXIuREVGQVVMVF9QSU5fQ09ORklHLCBvcHRzLnBpbik7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgY29uZmlndXJhdGlvbiB0byB1c2UgZm9yIHRoZSBtYXAgbWFya2Vyc1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKiBUT0RPKGJpbGx5KSBDcmVhdGUgYSBjb25maWd1cmF0aW9uIG1vZGVsXG4gICAqL1xuICBzdGF0aWMgZ2V0IERFRkFVTFRfUElOX0NPTkZJRyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGljb246IHtcbiAgICAgICAgYW5jaG9yOiBudWxsLCAvLyBlLmcuIHsgeDogMSwgeTogMSB9XG4gICAgICAgIHN2ZzogbnVsbCxcbiAgICAgICAgdXJsOiBudWxsLFxuICAgICAgICBzY2FsZWRTaXplOiBudWxsIC8vIGUuZy4geyB3OiAyMCwgaDogMjAgfVxuICAgICAgfSxcbiAgICAgIGxhYmVsVHlwZTogJ251bWVyaWMnXG4gICAgfTtcbiAgfVxuXG4gIG9uTG9hZGVkIChjYikge1xuICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9vbkxvYWRlZCA9IGNiO1xuICAgIGlmICh0aGlzLmlzTG9hZGVkKCkpIHtcbiAgICAgIHRoaXMuX29uTG9hZGVkKCk7XG4gICAgfVxuICB9XG5cbiAgaXNMb2FkZWQgKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0xvYWRlZDtcbiAgfVxuXG4gIGxvYWRKUyAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmltcGxlbWVudGVkIE1ldGhvZDogbG9hZEpTJyk7XG4gIH1cblxuICBsb2FkU3RhdGljICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaW1wbGVtZW50ZWQgTWV0aG9kOiBsb2FkU3RhdGljJyk7XG4gIH1cblxuICBpbml0IChtYXBEYXRhKSB7XG4gICAgLy8gVE9ETyhiaWxseSkgVGhpcyBzaG91bGQgYmUgYmFzZWQgb2ZmIGEgcHJvbWlzZSB0aGF0IGdldHMgY3JlYXRlZCBmcm9tIGxvYWRKU1xuICAgIHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCBNZXRob2Q6IGluaXQnKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgR29vZ2xlTWFwUHJvdmlkZXIgKi9cblxuaW1wb3J0IE1hcFByb3ZpZGVyIGZyb20gJy4vbWFwcHJvdmlkZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi8uLi9kb20vZG9tJztcblxuLyogZ2xvYmFsIGdvb2dsZSAqL1xuXG4vKipcbiAqIEdvb2dsZU1hcFByb3ZpZGVyIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIGEgTWFwUHJvdmlkZXJcbiAqIHRoYXQgaGFuZGxlcyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgdGhpcmQgcGFydHkgQVBJIHRvIGV4cG9zZSBtYXBzLlxuICogQGV4dGVuZHMgTWFwUHJvdmlkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29vZ2xlTWFwUHJvdmlkZXIgZXh0ZW5kcyBNYXBQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl9jbGllbnRJZCA9IG9wdHMuY2xpZW50SWQ7XG4gICAgdGhpcy5fc2lnbmF0dXJlID0gb3B0cy5zaWduYXR1cmU7XG5cbiAgICBpZiAoIXRoaXMuaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscygpICYmICF0aGlzLl9hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignR29vZ2xlTWFwc1Byb3ZpZGVyOiBNaXNzaW5nIGBhcGlLZXlgIG9yIHtgY2xpZW50SWRgLCBgc2lnbmF0dXJlYH0nKTtcbiAgICB9XG4gIH1cblxuICBsb2FkSlMgKG9uTG9hZCkge1xuICAgIGlmIChET00ucXVlcnkoJyN5ZXh0LW1hcC1qcycpKSB7XG4gICAgICBpZiAodHlwZW9mIG9uTG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvbkxvYWQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWpzJyxcbiAgICAgIG9ubG9hZDogKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX29uTG9hZGVkKCk7XG4gICAgICB9LFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzcmM6IGAvL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/JHt0aGlzLmdlbmVyYXRlQ3JlZGVudGlhbHMoKX1gXG4gICAgfSk7XG5cbiAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgfVxuXG4gIGdlbmVyYXRlU3RhdGljIChtYXBEYXRhKSB7XG4gICAgbGV0IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MgPSBHb29nbGVNYXBNYXJrZXJDb25maWcuZnJvbShcbiAgICAgIG1hcERhdGEubWFwTWFya2VycyxcbiAgICAgIHRoaXMuX3BpbkNvbmZpZ1xuICAgICk7XG5cbiAgICBsZXQgZW5jb2RlZE1hcmtlcnMgPSBHb29nbGVNYXBNYXJrZXJDb25maWcuc2VyaWFsaXplKGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MpO1xuICAgIHJldHVybiBgXG4gICAgICA8aW1nIHNyYz1cIi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9zdGF0aWNtYXA/JHtlbmNvZGVkTWFya2Vyc30mc2l6ZT0ke3RoaXMuX3dpZHRofXgke3RoaXMuX2hlaWdodH0mJHt0aGlzLmdlbmVyYXRlQ3JlZGVudGlhbHMoKX1cIj5gO1xuICB9XG5cbiAgZ2VuZXJhdGVDcmVkZW50aWFscyAoKSB7XG4gICAgaWYgKHRoaXMuaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscygpKSB7XG4gICAgICByZXR1cm4gYGNsaWVudD0ke3RoaXMuX2NsaWVudElkfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBga2V5PSR7dGhpcy5fYXBpS2V5fWA7XG4gICAgfVxuICB9XG5cbiAgaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscyAoKSB7XG4gICAgLy8gU2lnbmF0dXJlIGlzIG9ubHkgcmVxdWlyZWQgaWYgbWFwIGlzIHN0YXRpY1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRJZCAmJiAodGhpcy5fc2lnbmF0dXJlIHx8ICF0aGlzLl9pc1N0YXRpYyk7XG4gIH1cblxuICBpbml0IChlbCwgbWFwRGF0YSkge1xuICAgIGlmICghbWFwRGF0YSB8fCBtYXBEYXRhLm1hcE1hcmtlcnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHRoaXMuX21hcCA9IG51bGw7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBOT1RFKGJpbGx5KSBUaGlzIHRpbWVvdXQgaXMgYSBoYWNrIGZvciBkZWFsaW5nIHdpdGggYXN5bmMgbmF0dXJlLlxuICAgIC8vIE9ubHkgaGVyZSBmb3IgZGVtbyBwdXJwb3Nlcywgc28gd2UnbGwgZml4IGxhdGVyLlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0IGNvbnRhaW5lciA9IERPTS5xdWVyeShlbCk7XG4gICAgICBET00uY3NzKGNvbnRhaW5lciwge1xuICAgICAgICB3aWR0aDogdGhpcy5fd2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5faGVpZ2h0XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGNvbnRhaW5lciwge1xuICAgICAgICB6b29tOiB0aGlzLl96b29tXG4gICAgICB9KTtcblxuICAgICAgLy8gQXBwbHkgb3VyIHNlYXJjaCBkYXRhIHRvIG91ciBHb29nbGVNYXBcbiAgICAgIGxldCBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG4gICAgICBsZXQgZ29vZ2xlTWFwTWFya2VyQ29uZmlncyA9IEdvb2dsZU1hcE1hcmtlckNvbmZpZy5mcm9tKFxuICAgICAgICBtYXBEYXRhLm1hcE1hcmtlcnMsXG4gICAgICAgIHRoaXMuX3BpbkNvbmZpZyxcbiAgICAgICAgdGhpcy5tYXApO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoZ29vZ2xlTWFwTWFya2VyQ29uZmlnc1tpXSk7XG4gICAgICAgIGJvdW5kcy5leHRlbmQobWFya2VyLnBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKGJvdW5kcyk7XG4gICAgfSwgMTAwKTtcbiAgfVxufVxuXG4vLyBUT0RPKGJpbGx5KSBNb3ZlIHRvIG93biBjbGFzc1xuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcE1hcmtlckNvbmZpZyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGdvb2dsZSBtYXAsIHRoYXQgdGhlIG1hcmtlciBpcyBhcHBlbmRlZCB0b1xuICAgICAqIEB0eXBlIHtHb29nbGVNYXB9XG4gICAgICovXG4gICAgdGhpcy5tYXAgPSBvcHRzLm1hcCB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1hcmtlciAobGF0L2xuZylcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMucG9zaXRpb24gPSBvcHRzLnBvc2l0aW9uIHx8IHtcbiAgICAgIGxhdDogdW5kZWZpbmVkLFxuICAgICAgbG5nOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHByb3BlcnRpZXMvc2V0dGluZ3Mgb2YgdGhlIGljb24gdXNlZCBmb3IgdGhlIG1hcmtlclxuICAgICAqIGUuZy4ge1xuICAgICAqICAgICAgICBhbmNob3I6IHsgeDogMCwgeTogMCB9XG4gICAgICogICAgICAgIHVybDogJ3BhdGgvdG8vdXJsLmpwZydcbiAgICAgKiAgICAgICAgc2NhbGVkU2l6ZTogeyB3OiAwLCBoOiAwIH1cbiAgICAgKiAgICAgICB9XG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuaWNvbiA9IG9wdHMuaWNvbiB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgb2YgdGhlIG1hcmtlciB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWwgPSBvcHRzLmxhYmVsIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGFuIGFycmF5IG9mIG1hcmtlciBjb25maWdzXG4gICAqIEBwYXJhbSB7R29vZ2xlTWFwTWFya2VyQ29uZmlnW119IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3NcbiAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZSAoZ29vZ2xlTWFwTWFya2VyQ29uZmlncykge1xuICAgIGxldCBzZXJpYWxpemVkTWFya2VycyA9IFtdO1xuICAgIGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBzZXJpYWxpemVkTWFya2Vycy5wdXNoKGBtYXJrZXJzPWxhYmVsOiR7bWFya2VyLmxhYmVsfXwke21hcmtlci5wb3NpdGlvbi5sYXR9LCR7bWFya2VyLnBvc2l0aW9uLmxuZ31gKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VyaWFsaXplZE1hcmtlcnMuam9pbignJicpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBzdG9yYWdlIGRhdGEgbW9kZWwgb2YgbWFya2VycyBpbnRvIEdvb2dsZUFQSU1hcmtlclxuICAgKiBAcGFyYW0ge0dvb2dsZU1hcH0gQSByZWZlcmVuY2UgdG8gdGhlIGdvb2dsZSBtYXAgdG8gYXBwbHkgdGhlIG1hcmtlciB0b1xuICAgKiBAcGFyYW0ge29iamVjdFtdfSBtYXJrZXJzIFRoZSBkYXRhIG9mIHRoZSBtYXJrZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IHBpbkNvbmZpZyBUaGUgY29uZmlndXJhdGlvbiB0byBhcHBseSB0byB0aGUgbWFya2VyXG4gICAqIEByZXR1cm5zIHtHb29nbGVNYXBNYXJrZXJDb25maWdbXX1cbiAgICovXG4gIHN0YXRpYyBmcm9tIChtYXJrZXJzLCBwaW5Db25maWcsIG1hcCkge1xuICAgIGxldCBnb29nbGVNYXBNYXJrZXJDb25maWdzID0gW107XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1hcmtlcnMpKSB7XG4gICAgICBtYXJrZXJzID0gW21hcmtlcnNdO1xuICAgIH1cblxuICAgIG1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICAvLyBTdXBwb3J0IGNvbmZpZ3VyYXRpb24gYXMgYSBmdW5jdGlvblxuICAgICAgbGV0IHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZztcbiAgICAgIGlmICh0eXBlb2YgcGluQ29uZmlnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZyhcbiAgICAgICAgICBtYXJrZXIuaXRlbSxcbiAgICAgICAgICBNYXBQcm92aWRlci5ERUZBVUxUX1BJTl9DT05GSUcsXG4gICAgICAgICAgbWFya2VyKTtcbiAgICAgIH1cblxuICAgICAgLy8gVHJhbnNmb3JtIG91ciBDb25maWd1cmF0aW9uIE9iamVjdCBpbnRvIHRoZSBleHBlY3RlZFxuICAgICAgLy8gR29vZ2xlIEFQSSBmb3JtYXQuXG4gICAgICBsZXQgaWNvbiA9IHt9O1xuICAgICAgaWYgKHBpbkNvbmZpZ09iai5hbmNob3IpIHtcbiAgICAgICAgaWNvbi5hbmNob3IgPSBnb29nbGUubWFwcy5Qb2ludChwaW5Db25maWdPYmouYW5jaG9yLngsIHBpbkNvbmZpZ09iai5hbmNob3IueSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW5Db25maWdPYmouc2NhbGVkU2l6ZSkge1xuICAgICAgICBpY29uLnNjYWxlZFNpemUgPSBnb29nbGUubWFwcy5TaXplKHBpbkNvbmZpZ09iai5zY2FsZWRTaXplLncsIHBpbkNvbmZpZ09iai5zY2FsZWRTaXplLmgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluQ29uZmlnT2JqLnVybCkge1xuICAgICAgICBpY29uLnVybCA9IHBpbkNvbmZpZ09iai51cmw7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW5Db25maWdPYmouc3ZnKSB7XG4gICAgICAgIGljb24udXJsID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCAke2VuY29kZVVSSUNvbXBvbmVudChwaW5Db25maWdPYmouc3ZnKX1gO1xuICAgICAgfVxuXG4gICAgICBsZXQgbGFiZWw7XG4gICAgICBpZiAocGluQ29uZmlnT2JqLmxhYmVsKSB7XG4gICAgICAgIGxhYmVsID0gcGluQ29uZmlnT2JqLmxhYmVsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFiZWwgPSBtYXJrZXIubGFiZWwudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgLy8gTk9URShiaWxseSkgR29vZ2xlIG1hcHMgZG9lc24ndCBoYW5kbGUgZW1wdHkgaWNvbiBvYmplY3RzIG5pY2VseVxuICAgICAgLy8gTWFrZSBnb29nbGUgbWFwcyBoYXBweSBpZiBubyBzZXR0aW5ncyBmb3IgaWNvbiBhcmUgcHJvdmlkZWQ7XG4gICAgICBpZiAoT2JqZWN0LmtleXMoaWNvbikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGljb24gPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MucHVzaChcbiAgICAgICAgbmV3IEdvb2dsZU1hcE1hcmtlckNvbmZpZyh7XG4gICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIGxhdDogbWFya2VyLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG5nOiBtYXJrZXIubG9uZ2l0dWRlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpY29uOiBpY29uLFxuICAgICAgICAgIGxhYmVsOiBsYWJlbFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBnb29nbGVNYXBNYXJrZXJDb25maWdzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNYXBCb3hNYXBQcm92aWRlciAqL1xuXG5pbXBvcnQgTWFwUHJvdmlkZXIgZnJvbSAnLi9tYXBwcm92aWRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uLy4uL2RvbS9kb20nO1xuXG4vKiBnbG9iYWwgbWFwYm94Z2wgKi9cblxuLyoqXG4gKiBNYXBCb3hNYXBQcm92aWRlciBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiBhIE1hcFByb3ZpZGVyXG4gKiB0aGF0IGhhbmRsZXMgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIHRoaXJkIHBhcnR5IEFQSSB0byBleHBvc2UgbWFwcy5cbiAqIEBleHRlbmRzIE1hcFByb3ZpZGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcEJveE1hcFByb3ZpZGVyIGV4dGVuZHMgTWFwUHJvdmlkZXIge1xuICAvKipcbiAgICogTG9hZCB0aGUgZXh0ZXJuYWwgSlMgTGlicmFyeVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkxvYWQgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdG8gaW52b2tlIG9uY2UgdGhlIEpTIGlzIGxvYWRlZC5cbiAgICovXG4gIGxvYWRKUyAob25Mb2FkKSB7XG4gICAgbGV0IHNjcmlwdCA9IERPTS5jcmVhdGVFbCgnc2NyaXB0Jywge1xuICAgICAgaWQ6ICd5ZXh0LW1hcC1qcycsXG4gICAgICBvbmxvYWQ6ICgpID0+IHtcbiAgICAgICAgdGhpcy5faXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICBtYXBib3hnbC5hY2Nlc3NUb2tlbiA9IHRoaXMuX2FwaUtleTtcblxuICAgICAgICBpZiAodHlwZW9mIG9uTG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG9uTG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzcmM6ICdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MC40NC4xL21hcGJveC1nbC5qcydcbiAgICB9KTtcblxuICAgIGxldCBjc3MgPSBET00uY3JlYXRlRWwoJ2xpbmsnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWNzcycsXG4gICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgIGhyZWY6ICdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MC40NC4xL21hcGJveC1nbC5jc3MnXG4gICAgfSk7XG5cbiAgICBET00uYXBwZW5kKCdib2R5JywgY3NzKTtcbiAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgfVxuXG4gIGdlbmVyYXRlU3RhdGljIChtYXBEYXRhKSB7XG4gICAgbGV0IG1hcGJveE1hcE1hcmtlckNvbmZpZ3MgPSBNYXBCb3hNYXJrZXJDb25maWcuZnJvbShcbiAgICAgIG1hcERhdGEubWFwTWFya2VycyxcbiAgICAgIHRoaXMuX3BpbkNvbmZpZ1xuICAgICk7XG5cbiAgICBsZXQgY2VudGVyID0gbWFwRGF0YS5tYXBDZW50ZXI7XG4gICAgbGV0IHdpZHRoID0gdGhpcy5fd2lkdGggfHwgNjAwO1xuICAgIGxldCBoZWlnaHQgPSB0aGlzLl9oZWlnaHQgfHwgMjAwO1xuICAgIGxldCB6b29tID0gdGhpcy5fem9vbSB8fCA5O1xuXG4gICAgbGV0IGVuY29kZWRNYXJrZXJzID0gTWFwQm94TWFya2VyQ29uZmlnLnNlcmlhbGl6ZShtYXBib3hNYXBNYXJrZXJDb25maWdzKTtcbiAgICByZXR1cm4gYDxpbWcgc3JjPVwiaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9zdHlsZXMvdjEvbWFwYm94L3N0cmVldHMtdjExL3N0YXRpYy8ke2VuY29kZWRNYXJrZXJzfS8ke2NlbnRlci5sb25naXR1ZGV9LCR7Y2VudGVyLmxhdGl0dWRlfSwke3pvb219L2F1dG8vJHt3aWR0aH14JHtoZWlnaHR9P2FjY2Vzc190b2tlbj0ke3RoaXMuX2FwaUtleX1cIj5gO1xuICB9XG5cbiAgaW5pdCAoZWwsIG1hcERhdGEpIHtcbiAgICBpZiAoIW1hcERhdGEgfHwgbWFwRGF0YS5tYXBNYXJrZXJzLmxlbmd0aCA8PSAwKSB7XG4gICAgICB0aGlzLl9tYXAgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRhaW5lciA9IERPTS5xdWVyeShlbCk7XG4gICAgRE9NLmNzcyhjb250YWluZXIsIHtcbiAgICAgIHdpZHRoOiB0aGlzLl93aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5faGVpZ2h0XG4gICAgfSk7XG5cbiAgICB0aGlzLl9tYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgem9vbTogdGhpcy5fem9vbSxcbiAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXY5JyxcbiAgICAgIGNlbnRlcjogW21hcERhdGEubWFwQ2VudGVyLmxvbmdpdHVkZSwgbWFwRGF0YS5tYXBDZW50ZXIubGF0aXR1ZGVdXG4gICAgfSk7XG5cbiAgICBjb25zdCBtYXBib3hNYXBNYXJrZXJDb25maWdzID0gTWFwQm94TWFya2VyQ29uZmlnLmZyb20oXG4gICAgICBtYXBEYXRhLm1hcE1hcmtlcnMsXG4gICAgICB0aGlzLl9waW5Db25maWcsXG4gICAgICB0aGlzLl9tYXApO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXBib3hNYXBNYXJrZXJDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgd3JhcHBlciA9IG1hcGJveE1hcE1hcmtlckNvbmZpZ3NbaV0ud3JhcHBlcjtcbiAgICAgIGxldCBjb29yZHMgPSBuZXcgbWFwYm94Z2wuTG5nTGF0KFxuICAgICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzW2ldLnBvc2l0aW9uLmxvbmdpdHVkZSxcbiAgICAgICAgbWFwYm94TWFwTWFya2VyQ29uZmlnc1tpXS5wb3NpdGlvbi5sYXRpdHVkZSk7XG4gICAgICBsZXQgbWFya2VyID0gbmV3IG1hcGJveGdsLk1hcmtlcih3cmFwcGVyKS5zZXRMbmdMYXQoY29vcmRzKTtcbiAgICAgIG1hcmtlci5hZGRUbyh0aGlzLl9tYXApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWFwQm94TWFya2VyQ29uZmlnIHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgbWFwYm94IG1hcCwgdGhhdCB0aGUgbWFya2VyIGlzIGFwcGVuZGVkIHRvXG4gICAgICogQHR5cGUge01hcEJveH1cbiAgICAgKi9cbiAgICB0aGlzLm1hcCA9IG9wdHMubWFwIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb29yZGluYXRlcyBvZiB0aGUgbWFya2VyIChsYXQvbG5nKVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5wb3NpdGlvbiA9IG9wdHMucG9zaXRpb24gfHwge1xuICAgICAgbGF0aXR1ZGU6IHVuZGVmaW5lZCxcbiAgICAgIGxvbmdpdHVkZTogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBodG1sIGVsZW1lbnQgdG8gYmUgdXNlZCBhcyB0aGUgbWFwIG1hcmtlclxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgdGhpcy53cmFwcGVyID0gb3B0cy53cmFwcGVyIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCBvZiB0aGUgbWFya2VyIHRvIHVzZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbCA9IG9wdHMubGFiZWwgfHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHVybCBvZiB0aGUgcGluIGZvciB0aGUgc3RhdGljIG1hcFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zdGF0aWNNYXBQaW4gPSBvcHRzLnN0YXRpY01hcFBpbiB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhbiBhcnJheSBvZiBtYXJrZXIgY29uZmlnc1xuICAgKiBAcGFyYW0ge01hcEJveE1hcmtlckNvbmZpZ1tdfSBtYXBib3hNYXBNYXJrZXJDb25maWdzXG4gICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemUgKG1hcGJveE1hcE1hcmtlckNvbmZpZ3MpIHtcbiAgICBsZXQgc2VyaWFsaXplZE1hcmtlcnMgPSBbXTtcbiAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgaWYgKG1hcmtlci5zdGF0aWNNYXBQaW4pIHtcbiAgICAgICAgc2VyaWFsaXplZE1hcmtlcnMucHVzaChgdXJsLSR7bWFya2VyLnN0YXRpY01hcFBpbn0oJHttYXJrZXIucG9zaXRpb24ubG9uZ2l0dWRlfSwke21hcmtlci5wb3NpdGlvbi5sYXRpdHVkZX0pYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXJpYWxpemVkTWFya2Vycy5wdXNoKGBwaW4tcy0ke21hcmtlci5sYWJlbH0oJHttYXJrZXIucG9zaXRpb24ubG9uZ2l0dWRlfSwke21hcmtlci5wb3NpdGlvbi5sYXRpdHVkZX0pYCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZWRNYXJrZXJzLmpvaW4oJywnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgc3RvcmFnZSBkYXRhIG1vZGVsIG9mIG1hcmtlcnMgaW50byBHb29nbGVBUElNYXJrZXJcbiAgICogQHBhcmFtIHtNYXBCb3h9IEEgcmVmZXJlbmNlIHRvIHRoZSBnb29nbGUgbWFwIHRvIGFwcGx5IHRoZSBtYXJrZXIgdG9cbiAgICogQHBhcmFtIHtvYmplY3RbXX0gbWFya2VycyBUaGUgZGF0YSBvZiB0aGUgbWFya2VyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwaW5Db25maWcgVGhlIGNvbmZpZ3VyYXRpb24gdG8gYXBwbHkgdG8gdGhlIG1hcmtlclxuICAgKiBAcmV0dXJucyB7TWFwQm94TWFya2VyQ29uZmlnW119XG4gICAqL1xuICBzdGF0aWMgZnJvbSAobWFya2VycywgcGluQ29uZmlnLCBtYXApIHtcbiAgICBsZXQgbWFwYm94TWFwTWFya2VyQ29uZmlncyA9IFtdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShtYXJrZXJzKSkge1xuICAgICAgbWFya2VycyA9IFttYXJrZXJzXTtcbiAgICB9XG5cbiAgICBtYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgLy8gU3VwcG9ydCBjb25maWd1cmF0aW9uIGFzIGEgZnVuY3Rpb25cbiAgICAgIGxldCBwaW5Db25maWdPYmogPSBwaW5Db25maWc7XG4gICAgICBpZiAodHlwZW9mIHBpbkNvbmZpZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwaW5Db25maWdPYmogPSBwaW5Db25maWcoXG4gICAgICAgICAgbWFya2VyLml0ZW0sXG4gICAgICAgICAgTWFwUHJvdmlkZXIuREVGQVVMVF9QSU5fQ09ORklHLFxuICAgICAgICAgIG1hcmtlcik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHdyYXBwZXIgPSBwaW5Db25maWdPYmoud3JhcHBlciA/IHBpbkNvbmZpZ09iai53cmFwcGVyIDogbnVsbDtcbiAgICAgIGNvbnN0IHN0YXRpY01hcFBpbiA9IHBpbkNvbmZpZ09iai5zdGF0aWNNYXBQaW4gPyBwaW5Db25maWdPYmouc3RhdGljTWFwUGluIDogbnVsbDtcblxuICAgICAgbWFwYm94TWFwTWFya2VyQ29uZmlncy5wdXNoKFxuICAgICAgICBuZXcgTWFwQm94TWFya2VyQ29uZmlnKHtcbiAgICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgbGF0aXR1ZGU6IG1hcmtlci5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogbWFya2VyLmxvbmdpdHVkZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgd3JhcHBlcjogd3JhcHBlcixcbiAgICAgICAgICBsYWJlbDogbWFya2VyLmxhYmVsLFxuICAgICAgICAgIHN0YXRpY01hcFBpbjogc3RhdGljTWFwUGluXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hcGJveE1hcE1hcmtlckNvbmZpZ3M7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE1hcENvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmltcG9ydCBHb29nbGVNYXBQcm92aWRlciBmcm9tICcuL3Byb3ZpZGVycy9nb29nbGVtYXBwcm92aWRlcic7XG5pbXBvcnQgTWFwQm94TWFwUHJvdmlkZXIgZnJvbSAnLi9wcm92aWRlcnMvbWFwYm94bWFwcHJvdmlkZXInO1xuXG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuY29uc3QgUHJvdmlkZXJUeXBlcyA9IHtcbiAgJ2dvb2dsZSc6IEdvb2dsZU1hcFByb3ZpZGVyLFxuICAnbWFwYm94JzogTWFwQm94TWFwUHJvdmlkZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIC8qKlxuICAgICAqIEJpbmQgdGhpcyBjb21wb25lbnQgdG8gbGlzdGVuIHRvIHRoZSBzdG9yYWdlIGJhc2VkIG9uIHRoaXMga2V5XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFM7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhbGlhc2VkIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSB0eXBlIG9mIG1hcCBwcm92aWRlciB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX21hcFByb3ZpZGVyID0gb3B0cy5tYXBQcm92aWRlcjtcbiAgICBpZiAoIXRoaXMuX21hcFByb3ZpZGVyIHx8ICEodGhpcy5fbWFwUHJvdmlkZXIudG9Mb3dlckNhc2UoKSBpbiBQcm92aWRlclR5cGVzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXBDb21wb25lbnQ6IEludmFsaWQgTWFwIFByb3ZpZGVyOyBtdXN0IGJlIGBnb29nbGVgIG9yIGBtYXBCb3hgJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgaW5kaWNhdGlvbiBvZiB3aGV0aGVyIG9yIG5vdCB0byB1c2UgYSBzdGF0aWMgb3IgZHluYW1pYyBtYXBcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9pc1N0YXRpYyA9IG9wdHMuaXNTdGF0aWMgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byBhbiBpbnN0YW5jZSBvZiB0aGUge01hcFByb3ZpZGVyfSB0aGF0J3MgY29uc3RydWN0ZWRcbiAgICAgKiBAdHlwZSB7TWFwUHJvdmlkZXJ9XG4gICAgICovXG4gICAgdGhpcy5fbWFwID0gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdNYXAnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzdGF0aWMgZGVmYXVsdFRlbXBsYXRlTmFtZSAoY29uZmlnKSB7XG4gICAgcmV0dXJuICdyZXN1bHRzL21hcCc7XG4gIH1cblxuICAvLyBUT0RPKGJpbGx5KSBNYWtlIFByb3ZpZGVyVHlwZXMgYSBmYWN0b3J5IGNsYXNzXG4gIGdldFByb3ZpZGVySW5zdGFuY2UgKHR5cGUpIHtcbiAgICByZXR1cm4gbmV3IFByb3ZpZGVyVHlwZXNbdHlwZS50b0xvd2VyQ2FzZSgpXSh0aGlzLl9jb25maWcpO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIHRoaXMuX21hcCA9IHRoaXMuZ2V0UHJvdmlkZXJJbnN0YW5jZSh0aGlzLl9tYXBQcm92aWRlcik7XG4gICAgbGV0IG1hcERhdGEgPSB0aGlzLmdldFN0YXRlKCdtYXAnKTtcbiAgICBpZiAobWFwRGF0YSA9PT0gdW5kZWZpbmVkICYmIHRoaXMuX2lzU3RhdGljKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTdGF0aWMpIHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIFRoZSBleGlzdGluZyB0ZW1wbGF0ZSBzaG91bGQganVzdCB0YWtlIGluIHRoZSBtYXAgYGltZ1VSTGAgYXMgZGF0YVxuICAgICAgLy8gSW5zdGVhZCBvZiBvdmVycmlkaW5nIHRoZSB0ZW1wbGF0ZSBsaWtlIHNvLCBidXQgTkJEIGZvciBub3cuXG4gICAgICB0aGlzLnNldFRlbXBsYXRlKHRoaXMuX21hcC5nZW5lcmF0ZVN0YXRpYyhtYXBEYXRhKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLl9tYXAubG9hZEpTKCk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICB0aGlzLl9tYXAub25Mb2FkZWQoKCkgPT4ge1xuICAgICAgdGhpcy5fbWFwLmluaXQodGhpcy5fY29udGFpbmVyLCB0aGlzLmdldFN0YXRlKCdtYXAnKSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSwgdmFsKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKGRhdGEsIHZhbCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlc3VsdHNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL2xvY2F0aW9ucmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Blb3BsZXJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBNYXBDb21wb25lbnQgZnJvbSAnLi4vbWFwL21hcGNvbXBvbmVudCc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3NlYXJjaHN0YXRlcyc7XG5cbmNvbnN0IFJlc3VsdFR5cGUgPSB7XG4gIEVWRU5UOiAnZXZlbnQnLFxuICBMT0NBVElPTjogJ2xvY2F0aW9uJyxcbiAgUEVPUExFOiAncGVvcGxlJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0c0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTO1xuICAgIHRoaXMubGltaXQgPSBvcHRzLmxpbWl0IHx8IDU7XG4gICAgdGhpcy5faXRlbUNvbmZpZyA9IHtcbiAgICAgIGdsb2JhbDoge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9LFxuICAgICAgW0V2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZV06IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIFtMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50LnR5cGVdOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH0sXG4gICAgICBbUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZV06IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAob3B0cy5yZW5kZXJJdGVtID09PSB1bmRlZmluZWQgJiYgb3B0cy5fcGFyZW50T3B0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcHRzLnJlbmRlckl0ZW0gPSBvcHRzLl9wYXJlbnRPcHRzLnJlbmRlckl0ZW07XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuaXRlbVRlbXBsYXRlID09PSB1bmRlZmluZWQgJiYgb3B0cy5fcGFyZW50T3B0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcHRzLml0ZW1UZW1wbGF0ZSA9IG9wdHMuX3BhcmVudE9wdHMuaXRlbVRlbXBsYXRlO1xuICAgIH1cblxuICAgIHRoaXMuY29uZmlndXJlSXRlbSh7XG4gICAgICByZW5kZXI6IG9wdHMucmVuZGVySXRlbSxcbiAgICAgIHRlbXBsYXRlOiBvcHRzLml0ZW1UZW1wbGF0ZVxuICAgIH0pO1xuICB9XG5cbiAgbW91bnQgKCkge1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmdldFN0YXRlKCkpLmxlbmd0aCA+IDApIHtcbiAgICAgIHN1cGVyLm1vdW50KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGR1cGxpY2F0ZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhLCB2YWwpIHtcbiAgICBjb25zdCBzZWFyY2hTdGF0ZSA9IGRhdGEuc2VhcmNoU3RhdGUgfHwgU2VhcmNoU3RhdGVzLlBSRV9TRUFSQ0g7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oeyByZXN1bHRzOiBbXSB9LCBkYXRhLCB7XG4gICAgICBpc1ByZVNlYXJjaDogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5QUkVfU0VBUkNILFxuICAgICAgaXNTZWFyY2hMb2FkaW5nOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlNFQVJDSF9MT0FESU5HLFxuICAgICAgaXNTZWFyY2hDb21wbGV0ZTogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5TRUFSQ0hfQ09NUExFVEUsXG4gICAgICBpbmNsdWRlTWFwOiB0aGlzLl9jb25maWcuaW5jbHVkZU1hcCxcbiAgICAgIG1hcENvbmZpZzogdGhpcy5fY29uZmlnLm1hcENvbmZpZ1xuICAgIH0pLCB2YWwpO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1ZlcnRpY2FsUmVzdWx0cyc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3Jlc3VsdHMvcmVzdWx0cyc7XG4gIH1cblxuICBjb25maWd1cmVJdGVtIChjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX2l0ZW1Db25maWcuZ2xvYmFsLnJlbmRlciA9IGNvbmZpZy5yZW5kZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb25maWcucmVuZGVyKSB7XG4gICAgICAgIHRoaXMuc2V0SXRlbVJlbmRlcihrZXksIGNvbmZpZy5yZW5kZXJba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9pdGVtQ29uZmlnLmdsb2JhbC50ZW1wbGF0ZSA9IGNvbmZpZy50ZW1wbGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbmZpZy50ZW1wbGF0ZSkge1xuICAgICAgICB0aGlzLnNldEl0ZW1UZW1wbGF0ZShrZXksIGNvbmZpZy50ZW1wbGF0ZVtrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRJdGVtVGVtcGxhdGUgKHR5cGUsIHRlbXBsYXRlKSB7XG4gICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KHR5cGUpO1xuICAgIHRoaXMuX2l0ZW1Db25maWdbY2xhenoudHlwZV0udGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHNldEl0ZW1SZW5kZXIgKHR5cGUsIHJlbmRlcikge1xuICAgIGxldCBjbGF6eiA9IHRoaXMuZ2V0SXRlbUNvbXBvbmVudCh0eXBlKTtcbiAgICB0aGlzLl9pdGVtQ29uZmlnW2NsYXp6LnR5cGVdLnJlbmRlciA9IHJlbmRlcjtcbiAgfVxuXG4gIGdldEl0ZW1Db21wb25lbnQgKHR5cGUpIHtcbiAgICBsZXQgY29tcCA9IFJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSZXN1bHRUeXBlLkVWRU5UOlxuICAgICAgICBjb21wID0gRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJlc3VsdFR5cGUuTE9DQVRJT046XG4gICAgICAgIGNvbXAgPSBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUmVzdWx0VHlwZS5QRU9QTEU6XG4gICAgICAgIGNvbXAgPSBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXA7XG4gIH1cblxuICBhZGRDaGlsZCAoZGF0YSwgdHlwZSwgb3B0cykge1xuICAgIC8vIFRPRE8oYmlsbHkpIFJlZmFjdG9yIHRoZSB3YXkgY29uZmlndXJhdGlvbiBhbmQgZGF0YSBmbG93c1xuICAgIC8vIHRocm91Z2ggdG9wIGxldmVsIGNvbXBvbmVudHMgdG8gY2hpbGQgY29tcG9uZW50cy5cbiAgICBpZiAodHlwZSA9PT0gUmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZSkge1xuICAgICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KGRhdGEudHlwZSk7XG4gICAgICBpZiAoY2xhenopIHtcbiAgICAgICAgdHlwZSA9IGNsYXp6LnR5cGU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBNYXBDb21wb25lbnQudHlwZSkge1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgbWFwOiBkYXRhXG4gICAgICB9O1xuICAgICAgY29uc3QgbmV3T3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZy5tYXBDb25maWcsIG9wdHMpO1xuICAgICAgcmV0dXJuIHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIG5ld09wdHMpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHRoZSBwcm9wZXIgaXRlbSByZW5kZXJzIHRvIHRoZSB0aGUgY29tcG9uZW50c1xuICAgIC8vIGhhdmUganVzdCBiZWVuIGNvbnN0cnVjdGVkLiBQcmlvcml0aXplIGdsb2JhbCBvdmVyIGluZGl2aWR1YWwgaXRlbXMuXG4gICAgbGV0IGNvbXAgPSBzdXBlci5hZGRDaGlsZChkYXRhLCB0eXBlLCBvcHRzKTtcbiAgICBsZXQgZ2xvYmFsQ29uZmlnID0gdGhpcy5faXRlbUNvbmZpZy5nbG9iYWw7XG4gICAgbGV0IGl0ZW1Db25maWcgPSB0aGlzLl9pdGVtQ29uZmlnW2NvbXAudHlwZV07XG4gICAgbGV0IGhhc0dsb2JhbFJlbmRlciA9IHR5cGVvZiBnbG9iYWxDb25maWcucmVuZGVyID09PSAnZnVuY3Rpb24nO1xuICAgIGxldCBoYXNHbG9iYWxUZW1wbGF0ZSA9IHR5cGVvZiBnbG9iYWxDb25maWcudGVtcGxhdGUgPT09ICdzdHJpbmcnO1xuXG4gICAgaWYgKGhhc0dsb2JhbFJlbmRlcikge1xuICAgICAgY29tcC5zZXRSZW5kZXIoZ2xvYmFsQ29uZmlnLnJlbmRlcik7XG4gICAgfVxuXG4gICAgaWYgKGhhc0dsb2JhbFRlbXBsYXRlKSB7XG4gICAgICBjb21wLnNldFRlbXBsYXRlKGdsb2JhbENvbmZpZy50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKCFpdGVtQ29uZmlnKSB7XG4gICAgICByZXR1cm4gY29tcDtcbiAgICB9XG5cbiAgICBpZiAoIWhhc0dsb2JhbFJlbmRlciAmJiBpdGVtQ29uZmlnLnJlbmRlcikge1xuICAgICAgY29tcC5zZXRSZW5kZXIoaXRlbUNvbmZpZy5yZW5kZXIpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHRlbXBsYXRlIHNwZWNpZmljIHNpdHVhdGlvblxuICAgIGlmICghaGFzR2xvYmFsVGVtcGxhdGUgJiYgaXRlbUNvbmZpZy50ZW1wbGF0ZSkge1xuICAgICAgY29tcC5zZXRUZW1wbGF0ZShpdGVtQ29uZmlnLnRlbXBsYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXA7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTO1xuICAgIHRoaXMuX2xpbWl0ID0gb3B0cy5saW1pdCB8fCAxMDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdVbml2ZXJzYWxSZXN1bHRzJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc3RhdGljIGRlZmF1bHRUZW1wbGF0ZU5hbWUgKGNvbmZpZykge1xuICAgIHJldHVybiAncmVzdWx0cy91bml2ZXJzYWxyZXN1bHRzJztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaW5pdCAob3B0cykge1xuICAgIHN1cGVyLmluaXQob3B0cyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSwgdmFsKSB7XG4gICAgY29uc3Qgc2VhcmNoU3RhdGUgPSBkYXRhLnNlYXJjaFN0YXRlIHx8IFNlYXJjaFN0YXRlcy5QUkVfU0VBUkNIO1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHsgc2VjdGlvbnM6IFtdIH0sIGRhdGEsIHtcbiAgICAgIGlzUHJlU2VhcmNoOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlBSRV9TRUFSQ0gsXG4gICAgICBpc1NlYXJjaExvYWRpbmc6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0xPQURJTkcsXG4gICAgICBpc1NlYXJjaENvbXBsZXRlOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURVxuICAgIH0pLCB2YWwpO1xuICB9XG5cbiAgYWRkQ2hpbGQgKGRhdGEgPSB7fSwgdHlwZSkge1xuICAgIGxldCBvcHRzID0gdGhpcy5nZXRDaGlsZENvbmZpZyhbZGF0YVsndmVydGljYWxDb25maWdJZCddXSk7XG4gICAgcmV0dXJuIHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIG9wdHMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb25maWcgKGNvbmZpZ0lkKSB7XG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuX2NvbmZpZy5jb25maWc7XG4gICAgaWYgKGNvbmZpZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9jb25maWdbJ2NvbmZpZyddW2NvbmZpZ0lkXSB8fCB0aGlzLl9jb25maWdbJ2NvbmZpZyddO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi9kb20vc2VhcmNocGFyYW1zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTO1xuXG4gICAgLyoqXG4gICAgICogUXVlc3Rpb24gc3VibWlzc2lvbiBpcyBiYXNlZCBvbiBhIGZvcm0gYXMgY29udGV4dC5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gbmF0aXZlIGZvcm0gbm9kZSB3aXRoaW4gY29udGFpbmVyXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5fZm9ybUVsID0gb3B0cy5mb3JtU2VsZWN0b3IgfHwgJ2Zvcm0nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIGUtbWFpbCBhZGRyZXNzIGlucHV0XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIGBFbWFpbCBBZGRyZXNzYFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fZW1haWxMYWJlbCA9IG9wdHMuZW1haWxMYWJlbCB8fCAnKkVtYWlsIEFkZHJlc3M6JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB0byB1c2UgZm9yIHRoZSBuYW1lIGlucHV0XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIGBOYW1lYFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fbmFtZUxhYmVsID0gb3B0cy5uYW1lTGFiZWwgfHwgJ05hbWU6JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB0byB1c2UgZm9yIHRoZSBRdWVzdGlvblxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBgV2hhdCBpcyB5b3VyIHF1ZXN0aW9uP2BcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3F1ZXN0aW9uTGFiZWwgPSBvcHRzLnF1ZXN0aW9uTGFiZWwgfHwgJypXaGF0IGlzIHlvdXIgcXVlc3Rpb24/JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB0byB1c2UgZm9yIHRoZSBQcml2YWN5IFBvbGljeVxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBgV2hhdCBpcyB5b3VyIHF1ZXN0aW9uP2BcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ByaXZhY3lQb2xpY3lMYWJlbCA9IG9wdHMucHJpdmFjeVBvbGljeUxhYmVsIHx8ICdJIGFncmVlIHRvIG91ciBQcml2YWN5IFBvbGljeTonO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIFN1Ym1pdCBidXR0b25cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gYFN1Ym1pdD9gXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9idXR0b25MYWJlbCA9IG9wdHMuYnV0dG9uTGFiZWwgfHwgJ1N1Ym1pdCc7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHN0YXRpYyBkZWZhdWx0VGVtcGxhdGVOYW1lIChjb25maWcpIHtcbiAgICByZXR1cm4gJ3F1ZXN0aW9ucy9zdWJtaXNzaW9uJztcbiAgfVxuXG4gIGJlZm9yZU1vdW50ICgpIHtcbiAgICAvLyBPbmx5IG1vdW50IG91ciBjb21wb25lbnQgaWYgdGhlIHF1ZXJ5IGhhcyBiZWVuIHRyaWdnZXJlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0aGlzLmdldFN0YXRlKCdoYXNRdWVyaWVkJykgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIHRoaXMuaW5pdFN1Ym1pdCh0aGlzLl9mb3JtRWwpO1xuICB9XG5cbiAgaW5pdFN1Ym1pdCAoZm9ybVNlbGVjdG9yKSB7XG4gICAgdGhpcy5fZm9ybUVsID0gZm9ybVNlbGVjdG9yO1xuXG4gICAgbGV0IGZvcm0gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9mb3JtRWwpO1xuXG4gICAgRE9NLm9uKGZvcm0sICdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gVE9ETyhiaWxseSkgU2VyaWFsaXplIGZvcm1cbiAgICAgIC8vIHRoaXMuY29yZS5zdWJtaXRRdWVzdGlvbihmb3JtKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdRQVN1Ym1pc3Npb24nO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIC8vIFNpbmNlIHdlJ3JlIGJpbmRpbmcgdG8gc2VhcmNoIHJlc3VsdHMsXG4gICAgLy8gYW5kIHdlIG9ubHkgd2FudCB0byBzaG93IHRoZSBRQSBzdWJtaXNzaW9uXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKHtcbiAgICAgIGhhc1F1ZXJpZWQ6IGRhdGEuc2VjdGlvbnMgIT09IHVuZGVmaW5lZCxcbiAgICAgIGVtYWlsTGFiZWw6IHRoaXMuX2VtYWlsTGFiZWwsXG4gICAgICBuYW1lTGFiZWw6IHRoaXMuX25hbWVMYWJlbCxcbiAgICAgIHF1ZXN0aW9uTGFiZWw6IHRoaXMuX3F1ZXN0aW9uTGFiZWwsXG4gICAgICBwcml2YWN5UG9saWN5TGFiZWw6IHRoaXMuX3ByaXZhY3lQb2xpY3lMYWJlbCxcbiAgICAgIGJ1dHRvbkxhYmVsOiB0aGlzLl9idXR0b25MYWJlbCxcbiAgICAgIHF1ZXN0aW9uOiBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKS5nZXQoJ3F1ZXJ5JylcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi9jb21wb25lbnRtYW5hZ2VyJztcblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XG5cbmltcG9ydCBOYXZpZ2F0aW9uQ29tcG9uZW50IGZyb20gJy4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uY29tcG9uZW50JztcblxuaW1wb3J0IFNlYXJjaENvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9zZWFyY2hjb21wb25lbnQnO1xuaW1wb3J0IEZpbHRlclNlYXJjaENvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9maWx0ZXJzZWFyY2hjb21wb25lbnQnO1xuaW1wb3J0IEF1dG9Db21wbGV0ZUNvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9hdXRvY29tcGxldGVjb21wb25lbnQnO1xuXG5pbXBvcnQgRmlsdGVyQm94Q29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9maWx0ZXJib3hjb21wb25lbnQnO1xuaW1wb3J0IEZpbHRlck9wdGlvbnNDb21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL2ZpbHRlcm9wdGlvbnNjb21wb25lbnQnO1xuaW1wb3J0IFJhbmdlRmlsdGVyQ29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9yYW5nZWZpbHRlcmNvbXBvbmVudCc7XG5pbXBvcnQgRGF0ZVJhbmdlRmlsdGVyQ29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9kYXRlcmFuZ2VmaWx0ZXJjb21wb25lbnQnO1xuXG5pbXBvcnQgRGlyZWN0QW5zd2VyQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9kaXJlY3RhbnN3ZXJjb21wb25lbnQnO1xuaW1wb3J0IFJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Jlc3VsdHNjb21wb25lbnQnO1xuaW1wb3J0IFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHNjb21wb25lbnQnO1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcGVvcGxlcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5pbXBvcnQgTWFwQ29tcG9uZW50IGZyb20gJy4vbWFwL21hcGNvbXBvbmVudCc7XG5cbmltcG9ydCBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgZnJvbSAnLi9xdWVzdGlvbnMvcXVlc3Rpb25zdWJtaXNzaW9uY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9NQU5BR0VSID0gbmV3IENvbXBvbmVudE1hbmFnZXIoKVxuLy8gQ29yZSBDb21wb25lbnRcbiAgLnJlZ2lzdGVyKENvbXBvbmVudClcblxuLy8gTmF2aWdhdGlvbiBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihOYXZpZ2F0aW9uQ29tcG9uZW50KVxuXG4vLyBTZWFyY2ggQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoU2VhcmNoQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRmlsdGVyU2VhcmNoQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoQXV0b0NvbXBsZXRlQ29tcG9uZW50KVxuXG4vLyBGaWx0ZXIgQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoRmlsdGVyQm94Q29tcG9uZW50KVxuICAucmVnaXN0ZXIoRmlsdGVyT3B0aW9uc0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFJhbmdlRmlsdGVyQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRGF0ZVJhbmdlRmlsdGVyQ29tcG9uZW50KVxuXG4vLyBSZXN1bHRzIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKERpcmVjdEFuc3dlckNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihSZXN1bHRzQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoUmVzdWx0c0l0ZW1Db21wb25lbnQpXG4gIC5yZWdpc3RlcihMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50KVxuXG4gIC5yZWdpc3RlcihNYXBDb21wb25lbnQpXG5cbi8vIFF1ZXN0aW9ucyBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQpO1xuIiwiLyoqIEBtb2R1bGUgVGVtcGxhdGVMb2FkZXIgKi9cblxuaW1wb3J0IERPTSBmcm9tICcuLi9kb20vZG9tJztcbmltcG9ydCB7IENPTVBJTEVEX1RFTVBMQVRFU19VUkwgfSBmcm9tICcuLi8uLi9jb3JlL2NvbnN0YW50cyc7XG5cbi8qKlxuICogVGVtcGxhdGVMb2FkZXIgZXhwb3NlcyBhbiBpbnRlcmZhY2UgZm9yIGxvYWRpbmcgdGVtcGxhdGVzIGFzeW5jaHJvbm91c2x5XG4gKiBmcm9tIHRoZSBzZXJ2ZXIgYW5kIHJlZ2lzdGVycyB0aGVtIHdpdGggdGhlIHByb3BlciByZW5kZXJlci5cbiAqIEl0IGFsc28gYWxsb3dzIHlvdSB0byBhc3NpZ24gdGhlbSBzeW5jaHJvbm91c2x5LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZUxvYWRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBpZiAoIVRlbXBsYXRlTG9hZGVyLnNldEluc3RhbmNlKHRoaXMpKSB7XG4gICAgICByZXR1cm4gVGVtcGxhdGVMb2FkZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgdXJsIHRvIGZldGNoIGNvbXBpbGVkIHRlbXBsYXRlcyBmcm9tXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlVXJsID0gY29uZmlnLnRlbXBsYXRlVXJsIHx8IENPTVBJTEVEX1RFTVBMQVRFU19VUkw7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB7fTtcbiAgICB0aGlzLl9vbkxvYWRlZCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHRoaXMuX2luaXQoKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRJbnN0YW5jZSAoaW5zdGFuY2UpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UgKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgX2luaXQgKCkge1xuICAgIHRoaXMuZmV0Y2hUZW1wbGF0ZXMoKTtcbiAgfVxuXG4gIGZldGNoVGVtcGxhdGVzICgpIHtcbiAgICAvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgdGVtcGxhdGVzIGxvYWRlZCwgZG8gbm90aGluZ1xuICAgIGxldCBub2RlID0gRE9NLnF1ZXJ5KCcjeWV4dC1hbnN3ZXJzLXRlbXBsYXRlcycpO1xuICAgIGlmIChub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSW5qZWN0IGEgc2NyaXB0IHRvIGZldGNoIHRoZSBjb21waWxlZCB0ZW1wbGF0ZXMsXG4gICAgLy8gd3JhcHBpbmcgaXQgYSBQcm9taXNlIGZvciBjbGVhbmxpbmVzc1xuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBzY3JpcHQgPSBET00uY3JlYXRlRWwoJ3NjcmlwdCcsIHtcbiAgICAgICAgaWQ6ICd5ZXh0LWFuc3dlcnMtdGVtcGxhdGVzJyxcbiAgICAgICAgb25sb2FkOiByZXNvbHZlLFxuICAgICAgICBvbmVycm9yOiByZWplY3QsXG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBzcmM6IHRoaXMuX3RlbXBsYXRlVXJsXG4gICAgICB9KTtcblxuICAgICAgRE9NLmFwcGVuZCgnYm9keScsIHNjcmlwdCk7XG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgLy8gVE9ETyhiaWxseSkgSW1wbG1lbmV0IGVycm9yIGhhbmRsaW5nIGhlcmUgKGUuZy4gcmVxdWVzdCBjb3VsZCBmYWlsKVxuICAgICAgICBjb25zb2xlLmxvZygnVGVtcGxhdGVzIGxvYWRlZCBzdWNjZXNzZnVsbHkhJyk7XG4gICAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZWdpc3RlciB0aGUgdGVtcGxhdGVzIGludGVybmFsbHkgc28gdGhhdCB0aGV5IGNhbiBiZSBsYXRlciBjb25zdW1lZFxuICAgKiAoZS5nLiBieSBjb21wb25lbnRzIGFuZCByZW5kZXJlcnMpIHdpdGggY29udmllbmllbmNlLlxuICAgKlxuICAgKiBgZmV0Y2hUZW1wbGF0ZXNgIHdpbGwgYXV0b21hdGljYWxseSBjYWxsIHRoaXMsIHByb3ZpZGluZyB0aGUgY29tcGlsZWQgdGVtcGxhdGVzIGZyb20gdGhlIHNlcnZlci5cbiAgICovXG4gIHJlZ2lzdGVyICh0ZW1wbGF0ZXMpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXM7XG5cbiAgICAvLyBOb3RpZnkgb3VyIGNvbnN1bWVycyB0aGF0IHRoZSB0ZW1wbGF0ZXMgYXJlIGhlcmUgOilcbiAgICB0aGlzLl9vbkxvYWRlZCh0aGlzLl90ZW1wbGF0ZXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb25Mb2FkZWQgKGNiKSB7XG4gICAgdGhpcy5fb25Mb2FkZWQgPSBjYjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCAodGVtcGxhdGVOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlc1t0ZW1wbGF0ZU5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4gVGhlIGludGVybmFsIHRlbXBsYXRlIGNvbGxlY3Rpb25cbiAgICovXG4gIGdldFRlbXBsYXRlcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlcztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRXJyb3JSZXBvcnRlciAqL1xuXG5pbXBvcnQgeyBBbnN3ZXJzQmFzZUVycm9yIH0gZnJvbSAnLi9lcnJvcnMnO1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IHsgTElCX1ZFUlNJT04gfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEVycm9yUmVwb3J0ZXIgaXMgdXNlZCBmb3IgcmVwb3J0aW5nIGVycm9ycyB0byB0aGUgc2VydmVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yUmVwb3J0ZXIge1xuICBjb25zdHJ1Y3RvciAoYXBpS2V5LCBhbnN3ZXJzS2V5KSB7XG4gICAgLyoqXG4gICAgICogVGhlIGFwaUtleSB0byB1c2UgZm9yIHJlcG9ydGluZ1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5hcGlLZXkgPSBhcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYW5zd2Vyc0tleSB0byB1c2Ugd2hlbiByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuYW5zd2Vyc0tleSA9IGFuc3dlcnNLZXk7XG4gIH1cblxuICAvKipcbiAgICogcmVwb3J0IHNlbmRzIGEgbmV0d29yayByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdG8gYmUgbG9nZ2VkXG4gICAqIEBwYXJhbSB7QW5zd2Vyc0Jhc2VFcnJvcn0gVGhlIGVycm9yIHRvIGJlIHJlcG9ydGVkXG4gICAqL1xuICByZXBvcnQgKGVycikge1xuICAgIGlmICghKGVyciBpbnN0YW5jZW9mIEFuc3dlcnNCYXNlRXJyb3IpIHx8IGVyci5yZXBvcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVyci5yZXBvcnRlZCA9IHRydWU7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9lcnJvcnMnLFxuICAgICAgYXBpS2V5OiB0aGlzLmFwaUtleSxcbiAgICAgIHZlcnNpb246IDIwMTkwMzAxLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdlcnJvcic6IGVyci50b0pzb24oKSxcbiAgICAgICAgJ2xpYlZlcnNpb24nOiBMSUJfVkVSU0lPTixcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLmFuc3dlcnNLZXlcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlcXVlc3QuZ2V0KClcbiAgICAgIC5jYXRjaChjb25zb2xlLmVycik7XG5cbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5pbXBvcnQgQ29yZSBmcm9tICcuL2NvcmUvY29yZSc7XG5cbmltcG9ydCB7XG4gIFRlbXBsYXRlTG9hZGVyLFxuICBDT01QT05FTlRfTUFOQUdFUixcbiAgUmVuZGVyZXJzLFxuICBET01cbn0gZnJvbSAnLi91aS9pbmRleCc7XG5cbmltcG9ydCBFcnJvclJlcG9ydGVyIGZyb20gJy4vY29yZS9lcnJvcnMvZXJyb3JyZXBvcnRlcic7XG5pbXBvcnQgeyBBbmFseXRpY3NSZXBvcnRlciB9IGZyb20gJy4vY29yZSc7XG5cbi8qKlxuICogVGhlIG1haW4gQW5zd2VycyBpbnRlcmZhY2VcbiAqL1xuY2xhc3MgQW5zd2VycyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBpZiAoIUFuc3dlcnMuc2V0SW5zdGFuY2UodGhpcykpIHtcbiAgICAgIHJldHVybiBBbnN3ZXJzLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2Ugb2YgdGhlIHJlbmRlcmVyIHRvIHVzZSBmb3IgdGhlIGNvbXBvbmVudHNcbiAgICAgKiBUaGlzIGlzIHByb3ZpZGVkIGR1cmluZyBpbml0aWFsaXphdGlvbi5cbiAgICAgKiBAdHlwZSB7UmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcnMuSGFuZGxlYmFycygpO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCBtYW5hZ2VyXG4gICAgICogQHR5cGUge0NvbXBvbmVudE1hbmFnZXJ9XG4gICAgICovXG4gICAgdGhpcy5jb21wb25lbnRzID0gQ09NUE9ORU5UX01BTkFHRVI7XG5cbiAgICAvKipcbiAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGludm9rZSBvbmNlIHRoZSBsaWJyYXJ5IGlzIHJlYWR5LlxuICAgICAqIFR5cGljYWxseSBmaXJlZCBhZnRlciB0ZW1wbGF0ZXMgYXJlIGZldGNoZWQgZnJvbSBzZXJ2ZXIgZm9yIHJlbmRlcmluZy5cbiAgICAgKi9cbiAgICB0aGlzLl9vblJlYWR5ID0gZnVuY3Rpb24gKCkge307XG4gIH1cblxuICBzdGF0aWMgc2V0SW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIGluaXQgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvcmUgPSBuZXcgQ29yZSh7XG4gICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgICBhbnN3ZXJzS2V5OiBjb25maWcuYW5zd2Vyc0tleSxcbiAgICAgIGxvY2FsZTogY29uZmlnLmxvY2FsZVxuICAgIH0pO1xuICAgIHRoaXMuY29tcG9uZW50cy5zZXRDb3JlKGNvcmUpXG4gICAgICAuc2V0UmVuZGVyZXIodGhpcy5yZW5kZXJlcik7XG5cbiAgICBpZiAoY29uZmlnLmJ1c2luZXNzSWQpIHtcbiAgICAgIGNvbnN0IHJlcG9ydGVyID0gbmV3IEFuYWx5dGljc1JlcG9ydGVyKGNvcmUsIGNvbmZpZy5hbnN3ZXJzS2V5LCBjb25maWcuYnVzaW5lc3NJZCwgY29uZmlnLmFuYWx5dGljc09wdGlvbnMpO1xuICAgICAgdGhpcy5jb21wb25lbnRzLnNldEFuYWx5dGljc1JlcG9ydGVyKHJlcG9ydGVyKTtcbiAgICB9XG5cbiAgICB0aGlzLl9vblJlYWR5ID0gY29uZmlnLm9uUmVhZHkgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICBpZiAoY29uZmlnLnVzZVRlbXBsYXRlcyA9PT0gZmFsc2UgfHwgY29uZmlnLnRlbXBsYXRlQnVuZGxlKSB7XG4gICAgICBpZiAoY29uZmlnLnRlbXBsYXRlQnVuZGxlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5pdChjb25maWcudGVtcGxhdGVCdW5kbGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9vblJlYWR5KCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBUZW1wbGF0ZXMgYXJlIGN1cnJlbnRseSBkb3dubG9hZGVkIHNlcGFyYXRlbHkgZnJvbSB0aGUgQ09SRSBhbmQgVUkgYnVuZGxlLlxuICAgIC8vIEZ1dHVyZSBlbmhhbmNlbWVudCBpcyB0byBzaGlwIHRoZSBjb21wb25lbnRzIHdpdGggdGVtcGxhdGVzIGluIGEgc2VwYXJhdGUgYnVuZGxlLlxuICAgIHRoaXMudGVtcGxhdGVzID0gbmV3IFRlbXBsYXRlTG9hZGVyKHtcbiAgICAgIHRlbXBsYXRlVXJsOiBjb25maWcudGVtcGxhdGVVcmxcbiAgICB9KS5vbkxvYWRlZCgodGVtcGxhdGVzKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmluaXQodGVtcGxhdGVzKTtcblxuICAgICAgdGhpcy5fb25SZWFkeSgpO1xuICAgIH0pO1xuXG4gICAgaWYgKCFjb25maWcuc3VwcHJlc3NFcnJvclJlcG9ydHMpIHtcbiAgICAgIHRoaXMuX2Vycm9yUmVwb3J0ZXIgPSBuZXcgRXJyb3JSZXBvcnRlcihjb25maWcuYXBpS2V5LCBjb25maWcuYW5zd2Vyc0tleSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlID0+IHRoaXMuX2Vycm9yUmVwb3J0ZXIucmVwb3J0KGUuZXJyb3IpKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmhhbmRsZWRyZWplY3Rpb24nLCBlID0+IHRoaXMuX2Vycm9yUmVwb3J0ZXIucmVwb3J0KGUuZXJyb3IpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRvbVJlYWR5IChjYikge1xuICAgIERPTS5vblJlYWR5KGNiKTtcbiAgfVxuXG4gIG9uUmVhZHkgKGNiKSB7XG4gICAgdGhpcy5fb25SZWFkeSA9IGNiO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkQ29tcG9uZW50ICh0eXBlLCBvcHRzKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuICAgICAgb3B0cyA9IHtcbiAgICAgICAgY29udGFpbmVyOiBvcHRzXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50cy5jcmVhdGUodHlwZSwgb3B0cykubW91bnQoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNyZWF0ZUNvbXBvbmVudCAob3B0cykge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHMuY3JlYXRlKCdDb21wb25lbnQnLCBvcHRzKS5tb3VudCgpO1xuICB9XG5cbiAgcmVnaXN0ZXJIZWxwZXIgKG5hbWUsIGNiKSB7XG4gICAgdGhpcy5yZW5kZXJlci5yZWdpc3RlckhlbHBlcihuYW1lLCBjYik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuY29uc3QgQU5TV0VSUyA9IG5ldyBBbnN3ZXJzKCk7XG5leHBvcnQgZGVmYXVsdCBBTlNXRVJTO1xuIl0sIm5hbWVzIjpbIk1ldGhvZHMiLCJHRVQiLCJQT1NUIiwiUFVUIiwiREVMRVRFIiwiSHR0cFJlcXVlc3RlciIsInVybCIsImRhdGEiLCJvcHRzIiwicmVxdWVzdCIsImVuY29kZVBhcmFtcyIsIk9iamVjdCIsImFzc2lnbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY3JlZGVudGlhbHMiLCJ1bmRlZmluZWQiLCJtZXRob2QiLCJmZXRjaCIsIm5hdmlnYXRvciIsInNlbmRCZWFjb24iLCJwYXJhbXMiLCJoYXNQYXJhbSIsImluZGV4T2YiLCJzZWFyY2hRdWVyeSIsImtleSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkxJQl9WRVJTSU9OIiwiQVBJX0JBU0VfVVJMIiwiQ09NUElMRURfVEVNUExBVEVTX1VSTCIsIkFOQUxZVElDU19CQVNFX1VSTCIsIlNlYXJjaFBhcmFtcyIsIl9wYXJhbXMiLCJ3aW5kb3ciLCJVUkxTZWFyY2hQYXJhbXMiLCJwYXJzZSIsInNlYXJjaCIsInNsaWNlIiwiZW5jb2RlZFBhcmFtcyIsInNwbGl0IiwiaSIsImxlbmd0aCIsImtleVZhbCIsImRlY29kZSIsInF1ZXJ5IiwiU3RyaW5nIiwibmFtZSIsInZhbHVlIiwic3RyaW5nIiwicHVzaCIsImVuY29kZSIsImpvaW4iLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwibWF0Y2giLCJBcGlSZXF1ZXN0IiwiX3JlcXVlc3RlciIsIl9iYXNlVXJsIiwiYmFzZVVybCIsIl9lbmRwb2ludCIsImVuZHBvaW50IiwiX2FwaUtleSIsImFwaUtleSIsIl92ZXJzaW9uIiwidmVyc2lvbiIsImdldCIsInBvc3QiLCJiYXNlUGFyYW1zIiwidXJsUGFyYW1zIiwibG9jYXRpb24iLCJ0b1N0cmluZyIsImhhcyIsImtleXMiLCJmb3JFYWNoIiwiQW5zd2Vyc0Jhc2VFcnJvciIsImVycm9yQ29kZSIsIm1lc3NhZ2UiLCJib3VuZGFyeSIsImNhdXNlZEJ5IiwiZXJyb3JNZXNzYWdlIiwicmVwb3J0ZWQiLCJidWlsdGluRXJyb3IiLCJlcnJvciIsIkFuc3dlcnNCYXNpY0Vycm9yIiwic3RhY2siLCJFcnJvciIsIkFuc3dlcnNDb21wb25lbnRFcnJvciIsImNvbXBvbmVudCIsIkFuc3dlcnNFbmRwb2ludEVycm9yIiwiQW5zd2Vyc1N0b3JhZ2VFcnJvciIsInN0b3JhZ2VLZXkiLCJBbnN3ZXJzQW5hbHl0aWNzRXJyb3IiLCJldmVudCIsIlNlYXJjaEFwaSIsImFuc3dlcnNLZXkiLCJfYW5zd2Vyc0tleSIsImxvY2FsZSIsIl9sb2NhbGUiLCJxdWVyeVN0cmluZyIsInZlcnRpY2FsS2V5IiwiZmlsdGVyIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIkF1dG9Db21wbGV0ZURhdGEiLCJzZWN0aW9ucyIsInF1ZXJ5SWQiLCJmcmVlemUiLCJtYXAiLCJzIiwibGFiZWwiLCJyZXN1bHRzIiwiciIsIkF1dG9Db21wbGV0ZVJlc3VsdCIsImhpZ2hsaWdodGVkVmFsdWUiLCJoaWdobGlnaHQiLCJtYXRjaGVkU3Vic3RyaW5ncyIsInNob3J0VmFsdWUiLCJ2YWwiLCJzb3J0IiwiYSIsImIiLCJvZmZzZXQiLCJuZXh0U3RhcnQiLCJqIiwic3RhcnQiLCJOdW1iZXIiLCJlbmQiLCJBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIiLCJtb2R1bGVJZCIsImZyb20iLCJBdXRvQ29tcGxldGVBcGkiLCJpbnB1dCIsImJhcktleSIsInZlcnRpY2FsIiwidW5pdmVyc2FsIiwiUFJFX1NFQVJDSCIsIlNFQVJDSF9MT0FESU5HIiwiU0VBUkNIX0NPTVBMRVRFIiwiUmVzdWx0IiwiX3JhdyIsInJhdyIsInRpdGxlIiwiZGV0YWlscyIsImxpbmsiLCJpZCIsInN1YnRpdGxlIiwibW9kaWZpZXIiLCJiaWdEYXRlIiwiaW1hZ2UiLCJjYWxsc1RvQWN0aW9uIiwiUmVzdWx0RmFjdG9yeSIsInJlc3VsdHNEYXRhIiwiaHRtbFNuaXBwZXQiLCJmcm9tR29vZ2xlQ3VzdG9tU2VhcmNoRW5naW5lIiwiZnJvbUdlbmVyaWMiLCJkZXNjcmlwdGlvbiIsIndlYnNpdGUiLCJodG1sVGl0bGUiLCJTZWN0aW9uIiwic2VhcmNoU3RhdGUiLCJTZWFyY2hTdGF0ZXMiLCJ2ZXJ0aWNhbENvbmZpZ0lkIiwicmVzdWx0c0NvdW50IiwiZW5jb2RlZFN0YXRlIiwiYXBwbGllZFF1ZXJ5RmlsdGVycyIsIkFwcGxpZWRRdWVyeUZpbHRlciIsImZhY2V0cyIsInBhcnNlTWFwIiwidmVydGljYWxVUkwiLCJtYXBNYXJrZXJzIiwiY2VudGVyQ29vcmRpbmF0ZXMiLCJyZXN1bHQiLCJ5ZXh0RGlzcGxheUNvb3JkaW5hdGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIml0ZW0iLCJtb2R1bGVzIiwidXJscyIsIkFycmF5IiwiaXNBcnJheSIsImFwcGxpZWRRdWVyeUZpbHRlciIsImRpc3BsYXlLZXkiLCJkaXNwbGF5VmFsdWUiLCJmaWx0ZXJzIiwiVW5pdmVyc2FsUmVzdWx0cyIsIkRpcmVjdEFuc3dlciIsImRpcmVjdEFuc3dlciIsIk5hdmlnYXRpb24iLCJ0YWJPcmRlciIsIm5hdiIsIlZlcnRpY2FsUmVzdWx0cyIsIk5BVklHQVRJT04iLCJVTklWRVJTQUxfUkVTVUxUUyIsIlZFUlRJQ0FMX1JFU1VMVFMiLCJBVVRPQ09NUExFVEUiLCJESVJFQ1RfQU5TV0VSIiwiRklMVEVSIiwiUVVFUlkiLCJRVUVSWV9JRCIsIlNlYXJjaERhdGFUcmFuc2Zvcm1lciIsIlN0b3JhZ2VLZXlzIiwiRXZlbnRFbWl0dGVyIiwiX2xpc3RlbmVycyIsImV2dCIsImNiIiwib25jZSIsIm9uIiwibGlzdGVuZXJzIiwia2VlcCIsIk1vZHVsZURhdGEiLCJfaWQiLCJfaGlzdG9yeSIsIl9kYXRhIiwic2V0IiwibmV3RGF0YSIsImNhcHR1cmVQcmV2aW91cyIsImVtaXQiLCJzaGlmdCIsInByZXZpb3VzIiwiX3ByZXZpb3VzIiwicG9wIiwiU3RvcmFnZSIsIl9tb2R1bGVEYXRhQ29udGFpbmVyIiwiX2Z1dHVyZUxpc3RlbmVycyIsIl9pbml0RGF0YUNvbnRhaW5lciIsIl9hcHBseUZ1dHVyZUxpc3RlbmVycyIsImRhdGFLZXkiLCJzdGFydHNXaXRoIiwibW9kdWxlRGF0YSIsIm9mZiIsImZ1dHVyZXMiLCJmdXR1cmUiLCJDb3JlIiwic3RvcmFnZSIsIl9zZWFyY2hlciIsIl9hdXRvQ29tcGxldGUiLCJzZWFyY2hMb2FkaW5nIiwidmVydGljYWxRdWVyeSIsInRyYW5zZm9ybVZlcnRpY2FsIiwidHJhbnNmb3JtIiwibmFtZXNwYWNlIiwicXVlcnlVbml2ZXJzYWwiLCJxdWVyeVZlcnRpY2FsIiwicXVlcnlGaWx0ZXIiLCJDb21wb25lbnRNYW5hZ2VyIiwic2V0SW5zdGFuY2UiLCJnZXRJbnN0YW5jZSIsIl9jb21wb25lbnRSZWdpc3RyeSIsIl9hY3RpdmVDb21wb25lbnRzIiwiX2NvcmUiLCJfcmVuZGVyZXIiLCJfYW5hbHl0aWNzUmVwb3J0ZXIiLCJyZW5kZXJlciIsImNvcmUiLCJyZXBvcnRlciIsImNvbXBvbmVudENsYXp6IiwidHlwZSIsImNvbXBvbmVudFR5cGUiLCJhbmFseXRpY3NSZXBvcnRlciIsImNvbXBvbmVudE1hbmFnZXIiLCJjb21wb25lbnRDbGFzcyIsImFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCIsInNvbWUiLCJjIiwiaW5pdCIsInNldFN0YXRlIiwiZmluZCIsImNvbnN0cnVjdG9yIiwiaW5zdGFuY2UiLCJSZW5kZXJlciIsInRlbXBsYXRlIiwiSGFuZGxlYmFyc1JlbmRlcmVyIiwidGVtcGxhdGVzIiwiX2hhbmRsZWJhcnMiLCJfaGIiLCJfdGVtcGxhdGVzIiwiX3JlZ2lzdGVyQ3VzdG9tSGVscGVycyIsInJlZ2lzdGVySGVscGVyIiwiY29tcGlsZSIsImNvbmZpZyIsInRlbXBsYXRlTmFtZSIsImUiLCJhcmcxIiwiYXJnMiIsIm9wdGlvbnMiLCJmbiIsImludmVyc2UiLCJwaG9uZU51bWJlclN0cmluZyIsImNsZWFuZWQiLCJpbnRsQ29kZSIsImFyZ3MiLCJhcmd1bWVudHMiLCJyb290IiwidiIsIlJlbmRlcmVycyIsIlNPWSIsIkhhbmRsZWJhcnMiLCJkb2N1bWVudCIsIkRPTSIsImQiLCJwIiwiaHRtbCIsImNvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJmcmFnIiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJhcHBlbmRDaGlsZCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsInBhcmVudCIsInNlbGVjdG9yIiwiSFRNTEVsZW1lbnQiLCJXaW5kb3ciLCJIVE1MRG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsInJlYWR5U3RhdGUiLCJlbCIsIm9wdHNfZGF0YSIsIm5vZGUiLCJwcm9wcyIsImFkZENsYXNzIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiY2xhc3NOYW1lIiwiY2xhc3NlcyIsImxlbiIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsInN0eWxlcyIsInByb3AiLCJzdHlsZSIsImF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJzZXR0aW5ncyIsIkV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImN0eHQiLCJ0YXJnZXQiLCJpc0VxdWFsTm9kZSIsIm1hdGNoZXMiLCJwYXJlbnROb2RlIiwiU3RhdGUiLCJfc3RhdGUiLCJvcHRWYWwiLCJfc2V0Iiwib3B0UHJvcCIsIkFuYWx5dGljc0V2ZW50IiwiZXZlbnRUeXBlIiwidG9VcHBlckNhc2UiLCJBbmFseXRpY3NSZXBvcnRlciIsImJ1c2luZXNzSWQiLCJnbG9iYWxPcHRpb25zIiwiX2J1c2luZXNzSWQiLCJfZ2xvYmFsT3B0aW9ucyIsInNldFF1ZXJ5SWQiLCJhZGRPcHRpb25zIiwiYmVhY29uIiwidG9BcGlFdmVudCIsIkNvbXBvbmVudCIsIl9jb25maWciLCJfdHlwZSIsIl9wYXJlbnQiLCJfY2hpbGRyZW4iLCJzdGF0ZSIsIl9hbmFseXRpY3NPcHRpb25zIiwiYW5hbHl0aWNzT3B0aW9ucyIsIl9jb250YWluZXIiLCJjcmVhdGVFbCIsInN1YnN0cmluZyIsImFwcGVuZCIsIl9jbGFzc05hbWUiLCJfcmVuZGVyIiwicmVuZGVyIiwiX3RlbXBsYXRlIiwiX3RlbXBsYXRlTmFtZSIsImRlZmF1bHRUZW1wbGF0ZU5hbWUiLCJfaXNNb3VudGVkIiwidHJhbnNmb3JtRGF0YSIsIm9uQ3JlYXRlIiwib25Nb3VudCIsIm9uVXBkYXRlIiwibW91bnQiLCJuZXdTdGF0ZSIsImNoaWxkQ29tcG9uZW50IiwiY3JlYXRlIiwiX3BhcmVudE9wdHMiLCJlbXB0eSIsInVuTW91bnQiLCJiZWZvcmVNb3VudCIsImFzSlNPTiIsIl9vbk1vdW50IiwiZG9tSG9va3MiLCJxdWVyeUFsbCIsIl9jcmVhdGVBbmFseXRpY3NIb29rIiwiYmluZCIsImNoaWxkIiwiYmVmb3JlUmVuZGVyIiwiZG9tQ29tcG9uZW50cyIsIl9jcmVhdGVTdWJjb21wb25lbnQiLCJhZnRlclJlbmRlciIsImRvbUNvbXBvbmVudCIsImRhdGFzZXQiLCJjaGlsZERhdGEiLCJhZGRDaGlsZCIsImNoaWxkSFRNTCIsImlzQW5hbHl0aWNzQXR0YWNoZWQiLCJldmVudHR5cGUiLCJldmVudGxhYmVsIiwiZXZlbnRvcHRpb25zIiwicmVwb3J0IiwiVGFiIiwiY29uZmlnSWQiLCJpc0ZpcnN0IiwiaXNBY3RpdmUiLCJ0YWJzQ29uZmlnIiwidGFicyIsInRhYiIsIk5hdmlnYXRpb25Db21wb25lbnQiLCJfdGFicyIsIl90YWJPcmRlciIsImdldERlZmF1bHRUYWJPcmRlciIsImdldFVybFBhcmFtcyIsIm1lcmdlVGFiT3JkZXIiLCJnZW5lcmF0ZVRhYlVybCIsImluY2x1ZGVzIiwidW5zaGlmdCIsIm90aGVyVGFiT3JkZXIiLCJ0YWJDb25maWciLCJGaWx0ZXIiLCJyZXNwb25zZUZpbHRlciIsImdyb3VwcyIsImdyb3VwRmlsdGVycyIsImZpZWxkIiwib3IiLCJhbmQiLCJfZnJvbU1hdGNoZXIiLCJtaW4iLCJtYXgiLCJtYXRjaGVyIiwiU2VhcmNoQ29tcG9uZW50IiwiX2JhcktleSIsIl92ZXJ0aWNhbEtleSIsIl9mb3JtRWwiLCJmb3JtU2VsZWN0b3IiLCJfaW5wdXRFbCIsImlucHV0RWwiLCJsYWJlbFRleHQiLCJzdWJtaXRUZXh0Iiwic3VibWl0SWNvbiIsInByb21wdEhlYWRlciIsImF1dG9Gb2N1cyIsInJlZGlyZWN0VXJsIiwiX3NlYXJjaENvb2xkb3duIiwic2VhcmNoQ29vbGRvd24iLCJfb25Nb3VudEFkZGl0aW9uIiwib25Nb3VudEFkZGl0aW9uIiwic2V0UXVlcnkiLCJiaW5kQnJvd3Nlckhpc3RvcnkiLCJpbml0U2VhcmNoIiwiaW5pdEF1dG9Db21wbGV0ZSIsImZvY3VzIiwiZm9ybSIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJpbnB1dFNlbGVjdG9yIiwib3JpZ2luYWxRdWVyeSIsIm9uU3VibWl0IiwidHJpZ2dlciIsIl90aHJvdHRsZWQiLCJzZXRUaW1lb3V0IiwiYWxsRmlsdGVycyIsImdldEFsbCIsInRvdGFsRmlsdGVyIiwidmVydGljYWxTZWFyY2giLCJnZXRBY3RpdmVDb21wb25lbnQiLCJnZXRTdGF0ZSIsIkZpbHRlclNlYXJjaENvbXBvbmVudCIsImlucHV0S2V5IiwiX3N0b3JlT25DaGFuZ2UiLCJzdG9yZU9uQ2hhbmdlIiwic2VhcmNoVGV4dCIsInNldEZpbHRlciIsImZyb21SZXNwb25zZSIsImlzRmlsdGVyU2VhcmNoIiwib3JpZ2luYWxGaWx0ZXIiLCJfc2F2ZVF1ZXJ5QW5kRmlsdGVyIiwiS2V5cyIsIkJBQ0tTUEFDRSIsIlRBQiIsIkVOVEVSIiwiU0hJRlQiLCJDVFJMIiwiQUxUIiwiRVNDQVBFIiwiTEVGVCIsIlJJR0hUIiwiVVAiLCJET1dOIiwiTEVGVF9PU19LRVkiLCJSSUdIVF9PU19LRVkiLCJTRUxFQ1RfS0VZIiwiQXV0b0NvbXBsZXRlQ29tcG9uZW50IiwiX2F1dG9jb21wbGV0ZUVscyIsImF1dG9Db21wbGV0ZUVscyIsIl9vcmlnaW5hbFF1ZXJ5IiwiX3NlY3Rpb25JbmRleCIsIl9yZXN1bHRJbmRleCIsIl9vblN1Ym1pdCIsInNlY3Rpb25JbmRleCIsInJlc3VsdEluZGV4IiwicXVlcnlJbnB1dCIsImNsb3NlIiwicmVzZXQiLCJhdXRvQ29tcGxldGUiLCJoYW5kbGVOYXZpZ2F0ZVJlc3VsdHMiLCJrZXlDb2RlIiwiaGFuZGxlU3VibWl0UmVzdWx0IiwiZGVsZWdhdGUiLCJ1cGRhdGVRdWVyeSIsImhhbmRsZVR5cGluZyIsInVwZGF0ZVN0YXRlIiwib3B0VmFsdWUiLCJxdWVyeUVsIiwiaWdub3JlZEtleXMiLCJhdXRvQ29tcGxldGVGaWx0ZXIiLCJhdXRvQ29tcGxldGVWZXJ0aWNhbCIsImF1dG9Db21wbGV0ZVVuaXZlcnNhbCIsIkZpbHRlckJveENvbXBvbmVudCIsIl9maWx0ZXJDb25maWdzIiwiX3NlYXJjaE9uQ2hhbmdlIiwic2VhcmNoT25DaGFuZ2UiLCJfYXBwbHlCdXR0b25TZWxlY3RvciIsImFwcGx5QnV0dG9uU2VsZWN0b3IiLCJfZmlsdGVyQ29tcG9uZW50cyIsIl9maWx0ZXJzIiwiX3NhdmVPbkNoYW5nZSIsInNhdmVPbkNoYW5nZSIsImZpbHRlckNvbmZpZ3MiLCJzaG93QXBwbHlCdXR0b24iLCJvbkNoYW5nZSIsImYiLCJvbkZpbHRlckNoYW5nZSIsImJ1dHRvbiIsIl9zYXZlRmlsdGVyc1RvU3RvcmFnZSIsIl9zZWFyY2giLCJpbmRleCIsInZhbGlkRmlsdGVycyIsImNvbWJpbmVkRmlsdGVyIiwiU1VQUE9SVEVEX0NPTlRST0xTIiwiRmlsdGVyT3B0aW9uc0NvbXBvbmVudCIsImNvbnRyb2wiLCJfb3B0aW9ucyIsIm8iLCJjaGVja2VkIiwiX2NvbnRyb2wiLCJfb3B0aW9uU2VsZWN0b3IiLCJvcHRpb25TZWxlY3RvciIsIl9vbkNoYW5nZSIsIl9sYWJlbCIsIl91cGRhdGVPcHRpb24iLCJwYXJzZUludCIsIl9idWlsZEZpbHRlciIsImVsZW1lbnRzIiwiX2FwcGx5RmlsdGVyIiwiZXF1YWwiLCJncm91cCIsIlJhbmdlRmlsdGVyQ29tcG9uZW50IiwiX2ZpZWxkIiwiX3JhbmdlIiwiaW5pdGlhbE1pbiIsImluaXRpYWxNYXgiLCJfdGl0bGUiLCJfbWluTGFiZWwiLCJtaW5MYWJlbCIsIl9tYXhMYWJlbCIsIm1heExhYmVsIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsIl91cGRhdGVSYW5nZSIsImluY2x1c2l2ZVJhbmdlIiwiRGF0ZVJhbmdlRmlsdGVyQ29tcG9uZW50IiwiX2lzRXhjbHVzaXZlIiwiaXNFeGNsdXNpdmUiLCJ0b2RheSIsIkRhdGUiLCJ0b2RheVN0cmluZyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJwYWRTdGFydCIsImdldERhdGUiLCJfZGF0ZSIsImRhdGVNaW4iLCJkYXRlTWF4IiwiY29uc29sZSIsImxvZyIsImRhdGUiLCJleGNsdXNpdmVSYW5nZSIsIkRpcmVjdEFuc3dlckNvbXBvbmVudCIsImhhc1N0YXRlIiwiUmVzdWx0c0l0ZW1Db21wb25lbnQiLCJMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IiwiRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCIsIlBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IiwiTWFwUHJvdmlkZXIiLCJfaGVpZ2h0IiwiaGVpZ2h0IiwiX3dpZHRoIiwid2lkdGgiLCJfem9vbSIsInpvb20iLCJfbWFwIiwiX2lzTG9hZGVkIiwiX29uTG9hZGVkIiwib25Mb2FkZWQiLCJfcGluQ29uZmlnIiwicGluIiwiREVGQVVMVF9QSU5fQ09ORklHIiwiaXNMb2FkZWQiLCJtYXBEYXRhIiwiaWNvbiIsImFuY2hvciIsInN2ZyIsInNjYWxlZFNpemUiLCJsYWJlbFR5cGUiLCJHb29nbGVNYXBQcm92aWRlciIsIl9jbGllbnRJZCIsImNsaWVudElkIiwiX3NpZ25hdHVyZSIsInNpZ25hdHVyZSIsImhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMiLCJvbkxvYWQiLCJzY3JpcHQiLCJvbmxvYWQiLCJhc3luYyIsInNyYyIsImdlbmVyYXRlQ3JlZGVudGlhbHMiLCJnb29nbGVNYXBNYXJrZXJDb25maWdzIiwiR29vZ2xlTWFwTWFya2VyQ29uZmlnIiwiZW5jb2RlZE1hcmtlcnMiLCJzZXJpYWxpemUiLCJfaXNTdGF0aWMiLCJjc3MiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiYm91bmRzIiwiTGF0TG5nQm91bmRzIiwibWFya2VyIiwiTWFya2VyIiwiZXh0ZW5kIiwicG9zaXRpb24iLCJmaXRCb3VuZHMiLCJsYXQiLCJsbmciLCJzZXJpYWxpemVkTWFya2VycyIsIm1hcmtlcnMiLCJwaW5Db25maWciLCJwaW5Db25maWdPYmoiLCJQb2ludCIsIngiLCJ5IiwiU2l6ZSIsInciLCJoIiwiTWFwQm94TWFwUHJvdmlkZXIiLCJtYXBib3hnbCIsImFjY2Vzc1Rva2VuIiwicmVsIiwibWFwYm94TWFwTWFya2VyQ29uZmlncyIsIk1hcEJveE1hcmtlckNvbmZpZyIsImNlbnRlciIsIm1hcENlbnRlciIsIndyYXBwZXIiLCJjb29yZHMiLCJMbmdMYXQiLCJzZXRMbmdMYXQiLCJhZGRUbyIsInN0YXRpY01hcFBpbiIsIlByb3ZpZGVyVHlwZXMiLCJNYXBDb21wb25lbnQiLCJfbWFwUHJvdmlkZXIiLCJtYXBQcm92aWRlciIsInRvTG93ZXJDYXNlIiwiaXNTdGF0aWMiLCJnZXRQcm92aWRlckluc3RhbmNlIiwic2V0VGVtcGxhdGUiLCJnZW5lcmF0ZVN0YXRpYyIsImxvYWRKUyIsIlJlc3VsdFR5cGUiLCJFVkVOVCIsIkxPQ0FUSU9OIiwiUEVPUExFIiwiUmVzdWx0c0NvbXBvbmVudCIsImxpbWl0IiwiX2l0ZW1Db25maWciLCJnbG9iYWwiLCJyZW5kZXJJdGVtIiwiaXRlbVRlbXBsYXRlIiwiY29uZmlndXJlSXRlbSIsImlzUHJlU2VhcmNoIiwiaXNTZWFyY2hMb2FkaW5nIiwiaXNTZWFyY2hDb21wbGV0ZSIsImluY2x1ZGVNYXAiLCJtYXBDb25maWciLCJzZXRJdGVtUmVuZGVyIiwic2V0SXRlbVRlbXBsYXRlIiwiY2xhenoiLCJnZXRJdGVtQ29tcG9uZW50IiwiY29tcCIsIm5ld09wdHMiLCJnbG9iYWxDb25maWciLCJpdGVtQ29uZmlnIiwiaGFzR2xvYmFsUmVuZGVyIiwiaGFzR2xvYmFsVGVtcGxhdGUiLCJzZXRSZW5kZXIiLCJVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50IiwiX2xpbWl0IiwiZ2V0Q2hpbGRDb25maWciLCJRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQiLCJfZW1haWxMYWJlbCIsImVtYWlsTGFiZWwiLCJfbmFtZUxhYmVsIiwibmFtZUxhYmVsIiwiX3F1ZXN0aW9uTGFiZWwiLCJxdWVzdGlvbkxhYmVsIiwiX3ByaXZhY3lQb2xpY3lMYWJlbCIsInByaXZhY3lQb2xpY3lMYWJlbCIsIl9idXR0b25MYWJlbCIsImJ1dHRvbkxhYmVsIiwiaW5pdFN1Ym1pdCIsImhhc1F1ZXJpZWQiLCJxdWVzdGlvbiIsIkNPTVBPTkVOVF9NQU5BR0VSIiwicmVnaXN0ZXIiLCJUZW1wbGF0ZUxvYWRlciIsIl90ZW1wbGF0ZVVybCIsInRlbXBsYXRlVXJsIiwiX2luaXQiLCJmZXRjaFRlbXBsYXRlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25lcnJvciIsIkVycm9yUmVwb3J0ZXIiLCJlcnIiLCJ0b0pzb24iLCJBbnN3ZXJzIiwiY29tcG9uZW50cyIsIl9vblJlYWR5Iiwic2V0Q29yZSIsInNldFJlbmRlcmVyIiwic2V0QW5hbHl0aWNzUmVwb3J0ZXIiLCJvblJlYWR5IiwidXNlVGVtcGxhdGVzIiwidGVtcGxhdGVCdW5kbGUiLCJzdXBwcmVzc0Vycm9yUmVwb3J0cyIsIl9lcnJvclJlcG9ydGVyIiwiQU5TV0VSUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7O0VBRUE7O0VBRUE7OztFQUdBLElBQU1BLE9BQU8sR0FBRztFQUNkQyxFQUFBQSxHQUFHLEVBQUUsS0FEUztFQUVkQyxFQUFBQSxJQUFJLEVBQUUsTUFGUTtFQUdkQyxFQUFBQSxHQUFHLEVBQUUsS0FIUztFQUlkQyxFQUFBQSxNQUFNLEVBQUU7RUFKTSxDQUFoQjtFQU9BOzs7Ozs7TUFLcUJDOzs7Ozs7Ozs7O0VBQ25COzs7Ozs7MEJBTUtDLEtBQUtDLE1BQU1DLE1BQU07RUFDcEIsYUFBTyxLQUFLQyxPQUFMLENBQWFULE9BQU8sQ0FBQ0MsR0FBckIsRUFBMEIsS0FBS1MsWUFBTCxDQUFrQkosR0FBbEIsRUFBdUJDLElBQXZCLENBQTFCLEVBQXdEQyxJQUF4RCxDQUFQO0VBQ0Q7RUFFRDs7Ozs7Ozs7OzJCQU1NRixLQUFLQyxNQUFNQyxNQUFNO0VBQ3JCLGFBQU8sS0FBS0MsT0FBTCxDQUNMVCxPQUFPLENBQUNFLElBREgsRUFFTEksR0FGSyxFQUdMSyxNQUFNLENBQUNDLE1BQVAsQ0FBYztFQUNaQyxRQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUixJQUFmLENBRE07RUFFWlMsUUFBQUEsV0FBVyxFQUFFQztFQUZELE9BQWQsRUFHR1Qs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