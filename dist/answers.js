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

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, FilterSearchComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterSearchComponent).call(this, config));
      /**
       * The template name to use for rendering with handlebars
       * @type {string}
       */

      _this._templateName = 'search/filtersearch';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2Vycy11bWQuanMiLCJzb3VyY2VzIjpbInNyYy9jb3JlL2h0dHAvaHR0cHJlcXVlc3Rlci5qcyIsInNyYy9jb3JlL2NvbnN0YW50cy5qcyIsInNyYy91aS9kb20vc2VhcmNocGFyYW1zLmpzIiwic3JjL2NvcmUvaHR0cC9hcGlyZXF1ZXN0LmpzIiwic3JjL2NvcmUvZXJyb3JzL2Vycm9ycy5qcyIsInNyYy9jb3JlL3NlYXJjaC9zZWFyY2hhcGkuanMiLCJzcmMvY29yZS9tb2RlbHMvYXV0b2NvbXBsZXRlZGF0YS5qcyIsInNyYy9jb3JlL3NlYXJjaC9hdXRvY29tcGxldGVkYXRhdHJhbnNmb3JtZXIuanMiLCJzcmMvY29yZS9zZWFyY2gvYXV0b2NvbXBsZXRlYXBpLmpzIiwic3JjL2NvcmUvbW9kZWxzL3Jlc3VsdC5qcyIsInNyYy9jb3JlL3N0b3JhZ2Uvc2VhcmNoc3RhdGVzLmpzIiwic3JjL2NvcmUvbW9kZWxzL3NlY3Rpb24uanMiLCJzcmMvY29yZS9tb2RlbHMvdW5pdmVyc2FscmVzdWx0cy5qcyIsInNyYy9jb3JlL21vZGVscy9kaXJlY3RhbnN3ZXIuanMiLCJzcmMvY29yZS9tb2RlbHMvbmF2aWdhdGlvbi5qcyIsInNyYy9jb3JlL21vZGVscy92ZXJ0aWNhbHJlc3VsdHMuanMiLCJzcmMvY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzLmpzIiwic3JjL2NvcmUvc2VhcmNoL3NlYXJjaGRhdGF0cmFuc2Zvcm1lci5qcyIsInNyYy9jb3JlL2V2ZW50ZW1pdHRlci9ldmVudGVtaXR0ZXIuanMiLCJzcmMvY29yZS9zdG9yYWdlL21vZHVsZWRhdGEuanMiLCJzcmMvY29yZS9zdG9yYWdlL3N0b3JhZ2UuanMiLCJzcmMvY29yZS9jb3JlLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvY29tcG9uZW50bWFuYWdlci5qcyIsInNyYy91aS9yZW5kZXJpbmcvcmVuZGVyZXIuanMiLCJzcmMvdWkvcmVuZGVyaW5nL2hhbmRsZWJhcnNyZW5kZXJlci5qcyIsInNyYy91aS9yZW5kZXJpbmcvY29uc3QuanMiLCJzcmMvdWkvZG9tL2RvbS5qcyIsInNyYy91aS9jb21wb25lbnRzL3N0YXRlLmpzIiwic3JjL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50LmpzIiwic3JjL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc3JlcG9ydGVyLmpzIiwic3JjL2NvcmUvaW5kZXguanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb25jb21wb25lbnQuanMiLCJzcmMvY29yZS9tb2RlbHMvZmlsdGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3NlYXJjaC9maWx0ZXJzZWFyY2hjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9zZWFyY2gvYXV0b2NvbXBsZXRlY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJvcHRpb25zY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJib3hjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL2RpcmVjdGFuc3dlcmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvcmVzdWx0c2l0ZW1jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL2xvY2F0aW9ucmVzdWx0c2l0ZW1jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL2V2ZW50cmVzdWx0c2l0ZW1jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3Blb3BsZXJlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL3Byb3ZpZGVycy9tYXBwcm92aWRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9wcm92aWRlcnMvZ29vZ2xlbWFwcHJvdmlkZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvcHJvdmlkZXJzL21hcGJveG1hcHByb3ZpZGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL21hcGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvcmVzdWx0c2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvdW5pdmVyc2FscmVzdWx0c2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3F1ZXN0aW9ucy9xdWVzdGlvbnN1Ym1pc3Npb25jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb25zdC5qcyIsInNyYy91aS9yZW5kZXJpbmcvdGVtcGxhdGVsb2FkZXIuanMiLCJzcmMvdWkvaW5kZXguanMiLCJzcmMvY29yZS9lcnJvcnMvZXJyb3JyZXBvcnRlci5qcyIsInNyYy9hbnN3ZXJzLXVtZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQG1vZHVsZSBIdHRwUmVxdWVzdGVyICovXG5cbi8qIGdsb2JhbCBmZXRjaCAqL1xuXG4vKipcbiAqIFR5cGVzIG9mIEhUVFAgcmVxdWVzdHNcbiAqL1xuY29uc3QgTWV0aG9kcyA9IHtcbiAgR0VUOiAnZ2V0JyxcbiAgUE9TVDogJ3Bvc3QnLFxuICBQVVQ6ICdwdXQnLFxuICBERUxFVEU6ICdkZWxldGUnXG59O1xuXG4vKipcbiAqIEh0dHBSZXF1ZXN0ZXIgaXMgYSB3cmFwcGVyIGFyb3VuZCB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uIG9mIEFKQVhcbiAqIHJlbGF0ZWQgbWF0dGVycy4gSXQncyB1c2VkIHRvIG1ha2UgYWxsIHR5cGVzIG9mIG5ldHdvcmsgcmVxdWVzdHNcbiAqIGFuZCBleHBvc2VzIGEgcHJvbWlzZSBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0dHBSZXF1ZXN0ZXIge1xuICAvKipcbiAgICogQ3JlYXRlIGEgR0VUIEhUVFAgcmVxdWVzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gcHJvdmlkZSAoZ2V0cyBlbmNvZGVkIGludG8gdGhlIFVSTClcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgQ29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICovXG4gIGdldCAodXJsLCBkYXRhLCBvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChNZXRob2RzLkdFVCwgdGhpcy5lbmNvZGVQYXJhbXModXJsLCBkYXRhKSwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgUE9TVCBIVFRQIHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHByb3ZpZGUgKGdldHMgZW5jb2RlZCBpbnRvIHRoZSBVUkwpXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIENvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAqL1xuICBwb3N0ICh1cmwsIGRhdGEsIG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxuICAgICAgTWV0aG9kcy5QT1NULFxuICAgICAgdXJsLFxuICAgICAgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICBjcmVkZW50aWFsczogdW5kZWZpbmVkXG4gICAgICB9LCBvcHRzKVxuICAgICk7XG4gIH1cblxuICByZXF1ZXN0IChtZXRob2QsIHVybCwgb3B0cykge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgbWV0aG9kLFxuICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICAgIH0sIG9wdHMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgYmVhY29uIHRvIHRoZSBwcm92aWRlZCB1cmwgd2hpY2ggd2lsbCBzZW5kIGEgbm9uLWJsb2NraW5nIHJlcXVlc3RcbiAgICogdG8gdGhlIHNlcnZlciB0aGF0IGlzIGd1YXJhbnRlZWQgdG8gc2VuZCBiZWZvcmUgcGFnZSBsb2FkLiBObyByZXNwb25zZSBpcyByZXR1cm5lZCxcbiAgICogc28gYmVhY29ucyBhcmUgcHJpbWFyaWx5IHVzZWQgZm9yIGFuYWx5dGljcyByZXBvcnRpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBzZW5kIHRoZSBiZWFjb24gdG9cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgVGhlIGRhdGEgcGF5bG9hZCB0byBzZW5kIGluIHRoZSBiZWFjb25cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgcmVxdWVzdCBpcyBzdWNjZXNzZnVsbHkgcXVldWVkXG4gICAqL1xuICBiZWFjb24gKHVybCwgZGF0YSkge1xuICAgIHJldHVybiBuYXZpZ2F0b3Iuc2VuZEJlYWNvbih1cmwsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgfVxuXG4gIGVuY29kZVBhcmFtcyAodXJsLCBwYXJhbXMpIHtcbiAgICBsZXQgaGFzUGFyYW0gPSB1cmwuaW5kZXhPZignPycpID4gLTE7XG5cbiAgICBsZXQgc2VhcmNoUXVlcnkgPSAnJztcbiAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICBpZiAoIWhhc1BhcmFtKSB7XG4gICAgICAgIGhhc1BhcmFtID0gdHJ1ZTtcbiAgICAgICAgc2VhcmNoUXVlcnkgKz0gJz8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VhcmNoUXVlcnkgKz0gJyYnO1xuICAgICAgfVxuXG4gICAgICBzZWFyY2hRdWVyeSArPSBrZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gdXJsICsgc2VhcmNoUXVlcnk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbi8qKiBUaGUgY3VycmVudCBsaWIgdmVyc2lvbiwgcmVwb3J0ZWQgd2l0aCBlcnJvcnMgYW5kIGFuYWx5dGljcyAqL1xuZXhwb3J0IGNvbnN0IExJQl9WRVJTSU9OID0gJ3YwLjcuNSc7XG5cbi8qKiBUaGUgYmFzZSB1cmwgZm9yIHRoZSBhcGkgYmFja2VuZCAqL1xuZXhwb3J0IGNvbnN0IEFQSV9CQVNFX1VSTCA9ICdodHRwczovL2xpdmVhcGkueWV4dC5jb20nO1xuXG4vKiogVGhlIGRlZmF1bHQgdXJsIGZvciBjb21waWxlZCBjb21wb25lbnQgdGVtcGxhdGVzICovXG5leHBvcnQgY29uc3QgQ09NUElMRURfVEVNUExBVEVTX1VSTCA9ICdodHRwczovL2Fzc2V0cy5zaXRlc2Nkbi5uZXQvYW5zd2Vycy9hbnN3ZXJzdGVtcGxhdGVzLmNvbXBpbGVkLm1pbi5qcyc7XG5cbi8qKiBUaGUgYmFzZSB1cmwgZm9yIHRoZSBhbmFseXRpY3MgYmFja2VuZCAgKi9cbmV4cG9ydCBjb25zdCBBTkFMWVRJQ1NfQkFTRV9VUkwgPSAnaHR0cHM6Ly9yZWFsdGltZWFuYWx5dGljcy55ZXh0LmNvbSc7XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hQYXJhbXMgKi9cblxuLyogZ2xvYmFsIHdpbmRvdyAqL1xuXG4vKipcbiAqIFNlYXJjaFBhcmFtcyBpcyBhIGNsYXNzIHRvIGdldCB0aGUgc2VhcmNoIHBhcmFtcyBpbiBhIFVSTC5cbiAqIEl0IGlzIGEgcmVwbGFjZW1lbnQgZm9yIFVSTC5zZWFyY2hQYXJhbXMgYW5kIFVSTFNlYXJjaFBhcmFtcyBmb3IgYnJvd3NlcnMgbGlrZSBJRTExXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0cnVjdG9yICh1cmwpIHtcbiAgICAvKipcbiAgICAgKiBNYXBwaW5nIG9mIGFsbCBxdWVyeSBwYXJhbWV0ZXJzIGluIHRoZSBnaXZlbiB1cmwsIHF1ZXJ5IHBhcmFtIC0+IHZhbHVlXG4gICAgICogT25seSB1c2VkIGlmIFVSTFNlYXJjaFBhcmFtcyBkb2VzIG5vdCBleGlzdCBpbiB0aGUgd2luZG93XG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3BhcmFtcyA9IHt9O1xuXG4gICAgaWYgKHdpbmRvdyAmJiB3aW5kb3cuVVJMU2VhcmNoUGFyYW1zKSB7XG4gICAgICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyh1cmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wYXJhbXMgPSB0aGlzLnBhcnNlKHVybCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHBhcnNlIGNyZWF0ZXMgYSBtYXBwaW5nIG9mIGFsbCBxdWVyeSBwYXJhbXMgaW4gYSBnaXZlbiB1cmxcbiAgICogVGhlIHF1ZXJ5IHBhcmFtIHZhbHVlcyBhcmUgZGVjb2RlZCBiZWZvcmUgYmVpbmcgcHV0IGluIHRoZSBtYXBcbiAgICogVGhyZWUgdHlwZXMgb2YgaW5wdXQgYXJlIHN1cHBvcnRlZFxuICAgKiAgICgxKSBmdWxsIFVSTCBlLmcuIGh0dHA6Ly93d3cueWV4dC5jb20vP3E9aGVsbG9cbiAgICogICAoMikgcGFyYW1zIHdpdGggPyBlLmcuID9xPWhlbGxvXG4gICAqICAgKDEpIHBhcmFtcyB3aXRob3V0ID8gZS5nLiBxPWhlbGxvXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybFxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBtYXBwaW5nIGZyb20gcXVlcnkgcGFyYW0gLT4gdmFsdWUgd2hlcmUgdmFsdWUgaXMgJycgaWYgbm8gdmFsdWUgaXMgcHJvdmlkZWRcbiAgICovXG4gIHBhcnNlICh1cmwpIHtcbiAgICBsZXQgcGFyYW1zID0ge307XG4gICAgbGV0IHNlYXJjaCA9IHVybDtcblxuICAgIGlmIChzZWFyY2ggPT09ICcnKSB7XG4gICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cblxuICAgIC8vIE5vcm1hbGl6ZSBhbGwgdXJsIGlucHV0cyB0byBzdHJpbmcgb2YgcXVlcnkgcGFyYW1zIHNlcGFyYXRlZCBieSAmXG4gICAgaWYgKHVybC5pbmRleE9mKCc/JykgPiAtMSkge1xuICAgICAgc2VhcmNoID0gdXJsLnNsaWNlKHVybC5pbmRleE9mKCc/JykgKyAxKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbmNvZGVkUGFyYW1zID0gc2VhcmNoLnNwbGl0KCcmJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmNvZGVkUGFyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrZXlWYWwgPSBlbmNvZGVkUGFyYW1zW2ldLnNwbGl0KCc9Jyk7XG4gICAgICBpZiAoa2V5VmFsLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcGFyYW1zW2tleVZhbFswXV0gPSBTZWFyY2hQYXJhbXMuZGVjb2RlKGtleVZhbFsxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXNba2V5VmFsWzBdXSA9ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJhbXM7XG4gIH1cblxuICAvKipcbiAgICogZ2V0IHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBxdWVyeSBwYXJhbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgdGhlIHF1ZXJ5IHBhcmFtIGtleSB0byBnZXQgdGhlIHZhbHVlIG9mXG4gICAqIEByZXR1cm4ge3N0cmluZ30gcGFyYW0gdmFsdWUsIG51bGwgb3RoZXJ3aXNlXG4gICAqL1xuICBnZXQgKHF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl9wYXJhbXNbU3RyaW5nKHF1ZXJ5KV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtc1txdWVyeV07XG4gIH1cblxuICAvKipcbiAgICogc2V0IGNoYW5nZXMgdGhlIHZhbHVlIG9mIGEgZ2l2ZW4gcXVlcnkgcGFyYW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgdGhlIHF1ZXJ5IHBhcmFtIGtleVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgdGhlIHZhbHVlIG9mIHRoZSBxdWVyeSBwYXJhbSB1cGRhdGUgd2l0aFxuICAgKi9cbiAgc2V0IChuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMuX3BhcmFtc1tTdHJpbmcobmFtZSldID0gU3RyaW5nKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBoYXMgY2hlY2tzIHRvIHNlZSBpZiB0aGUgZ2l2ZW4gcXVlcnkgcGFyYW0ga2V5IGV4aXN0cyBpbiB0aGUgcGFyYW1zIG9iamVjdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgdGhlIHF1ZXJ5IHBhcmFtIHRvIGNoZWNrXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIHF1ZXJ5IHBhcmFtIGlzIGluIHRoZSBwYXJhbXMgb2JqZWN0LCBmYWxzZSBvL3dcbiAgICovXG4gIGhhcyAocXVlcnkpIHtcbiAgICByZXR1cm4gcXVlcnkgaW4gdGhpcy5fcGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIHRvU3RyaW5nIHJldHVybnMgYSB1cmwgd2l0aCBhbGwgdGhlIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgcGFyYW1zIG9iamVjdCAod2l0aG91dCBhID8pXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvU3RyaW5nICgpIHtcbiAgICBsZXQgc3RyaW5nID0gW107XG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuX3BhcmFtcykge1xuICAgICAgc3RyaW5nLnB1c2goYCR7a2V5fT0ke1NlYXJjaFBhcmFtcy5lbmNvZGUodGhpcy5fcGFyYW1zW2tleV0pfWApO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nLmpvaW4oJyYnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBkZWNvZGUgcmV0dXJucyB0aGUgZGVjb2RlZCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyB0byBkZWNvZGVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGRlY29kZSAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHJpbmcucmVwbGFjZSgvWyArXS9nLCAnJTIwJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIGRlY29kZSByZXR1cm5zIHRoZSBlbmNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBzdHJpbmcgKGUuZy4gKyAtPiAlMkIpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyB0byBlbmNvZGVcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGVuY29kZSAoc3RyaW5nKSB7XG4gICAgbGV0IHJlcGxhY2UgPSB7XG4gICAgICAnISc6ICclMjEnLFxuICAgICAgXCInXCI6ICclMjcnLFxuICAgICAgJygnOiAnJTI4JyxcbiAgICAgICcpJzogJyUyOScsXG4gICAgICAnJTIwJzogJysnXG4gICAgfTtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZykucmVwbGFjZSgvWyEnKCldfCUyMC9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgIHJldHVybiByZXBsYWNlW21hdGNoXTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXBpUmVxdWVzdCAqL1xuXG5pbXBvcnQgSHR0cFJlcXVlc3RlciBmcm9tICcuL2h0dHByZXF1ZXN0ZXInO1xuaW1wb3J0IHsgQVBJX0JBU0VfVVJMIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vdWkvZG9tL3NlYXJjaHBhcmFtcyc7IC8vIFRPRE8gaWRlYWxseSB0aGlzIHdvdWxkIGJlIHBhc3NlZCBpbiBhcyBhIHBhcmFtXG5cbi8qKlxuICogQXBpUmVxdWVzdCBpcyB0aGUgYmFzZSBjbGFzcyBmb3IgYWxsIEFQSSByZXF1ZXN0cy5cbiAqIEl0IGRlZmluZXMgYWxsIG9mIHRoZSBjb3JlIHByb3BlcnRpZXMgcmVxdWlyZWQgdG8gbWFrZSBhIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpUmVxdWVzdCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiB1c2VkIGZvciBtYWtpbmcgbmV0d29yayByZXF1ZXN0IGFuZCBoYW5kbGluZyBlcnJvcnNcbiAgICAgKiBAdHlwZSB7SHR0cFJlcXVlc3Rlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3JlcXVlc3RlciA9IG5ldyBIdHRwUmVxdWVzdGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYmFzZVVybCB0byB1c2UgZm9yIG1ha2luZyBhIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYmFzZVVybCA9IG9wdHMuYmFzZVVybCB8fCBBUElfQkFTRV9VUkw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZW5kcG9pbnQgdG8gdXNlIGluIHRoZSB1cmwgKGFwcGVuZGVkIHRvIHRoZSB7YmFzZVVybH0pXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2VuZHBvaW50ID0gb3B0cy5lbmRwb2ludCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnNpb24gb2YgdGhlIEFQSSB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJzaW9uID0gb3B0cy52ZXJzaW9uIHx8IDIwMTkwMTAxO1xuXG4gICAgLyoqXG4gICAgICogQWRkaXRpb25hbCBkYXRhIHBhcmFtcyB0aGF0IGFyZSBzZW50IGFsb25nIHdpdGggdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcGFyYW1zID0gb3B0cy5wYXJhbXMgfHwge307XG4gIH1cblxuICAvKipcbiAgICogZ2V0IGNyZWF0ZXMgYSBuZXcgYEdFVGAgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSByZXF1ZXN0IGNsYXNzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZ2V0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdGVyLmdldCh0aGlzLl9iYXNlVXJsICsgdGhpcy5fZW5kcG9pbnQsIHRoaXMucGFyYW1zKHRoaXMuX3BhcmFtcykpO1xuICB9XG5cbiAgcG9zdCAob3B0cykge1xuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0ZXIucG9zdCh0aGlzLl9iYXNlVXJsICsgdGhpcy5fZW5kcG9pbnQsIHRoaXMucGFyYW1zKHRoaXMuX3BhcmFtcyksIG9wdHMpO1xuICB9XG5cbiAgcGFyYW1zIChwYXJhbXMpIHtcbiAgICB2YXIgYmFzZVBhcmFtcyA9IHtcbiAgICAgICd2JzogdGhpcy5fdmVyc2lvbixcbiAgICAgICdhcGlfa2V5JzogdGhpcy5fYXBpS2V5XG4gICAgfTtcblxuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKCkpO1xuXG4gICAgaWYgKHVybFBhcmFtcy5oYXMoJ2JldGEnKSkge1xuICAgICAgYmFzZVBhcmFtc1snYmV0YSddID0gdXJsUGFyYW1zLmdldCgnYmV0YScpO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbnkgcGFyYW1hdGVycyB3aG9zIHZhbHVlIGlzIGB1bmRlZmluZWRgLlxuICAgIC8vXG4gICAgLy8gTk9URShiaWxseSkgUHJvYmFibHkgYmV0dGVyIHRvIGJlIGV4cGxpY2l0IGFib3V0IGhvdyB0byBoYW5kbGUgdGhpcyBhdCB0aGUgcmVxdWVzdCBidWlsZGluZyBsZXZlbCxcbiAgICAvLyBidXQgSSBjYW4ndCBzZWUgYW55IGNhc2VzIHdoZXJlIHdlJ2QgZXZlciB3YW50IHRvIHNlbmQgJ3VuZGVmaW5lZCcgYXMgYSB2YWx1ZSB0byB0aGUgc2VydmVyLlxuICAgIC8vIFNvIGl0J3MgcHJvYmFibHkgZmluZSB0byAnY2xlYW4nIHRoZSBwYXJhbXMgb2JqZWN0IGhlcmVcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGlmIChwYXJhbXNba2V5XSA9PT0gdW5kZWZpbmVkIHx8IHBhcmFtc1trZXldID09PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBwYXJhbXNba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGJhc2VQYXJhbXMsIHBhcmFtcyB8fCB7fSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEVycm9ycyAqL1xuXG4vKipcbiAqIEFuc3dlcnNCYXNlRXJyb3IgaXMgYW4gZXh0ZW5zaW9uIG9mIHRoZSBiYXNlIEVycm9yIG9iamVjdC5cbiAqIFRoaXMgaXMgdGhlIG9iamVjdCB0aGF0IGlzIHVzZWQgdG8gd2hlbiByZXBvcnRpbmcgdG8gdGhlIHNlcnZlci5cbiAqIEBleHRlbmRzIEVycm9yXG4gKlxuICogRXJyb3IgY29kZXMgZmFsbCBpbnRvIG9uZSBvZiBmb3VyIGNhdGVnb3JpZXM6XG4gKiAxWFggZXJyb3JzOiBCYXNpYyBlcnJvcnNcbiAqIDJYWCBlcnJvcnM6IFVJIGVycm9yc1xuICogM1hYIGVycm9yczogRW5kcG9pbnQgZXJyb3JzXG4gKiA0WFggZXJyb3JzOiBDb3JlIGVycm9yc1xuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0Jhc2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IgKGVycm9yQ29kZSwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5lcnJvckNvZGUgPSBlcnJvckNvZGU7XG4gICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuYm91bmRhcnkgPSBib3VuZGFyeTtcbiAgICB0aGlzLmNhdXNlZEJ5ID0gY2F1c2VkQnk7XG4gICAgdGhpcy5yZXBvcnRlZCA9IGZhbHNlO1xuICB9XG5cbiAgdG9Kc29uICgpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbSAoYnVpbHRpbkVycm9yLCBib3VuZGFyeSkge1xuICAgIGNvbnN0IGVycm9yID0gbmV3IEFuc3dlcnNCYXNpY0Vycm9yKGJ1aWx0aW5FcnJvci5tZXNzYWdlLCBib3VuZGFyeSk7XG4gICAgZXJyb3Iuc3RhY2sgPSBidWlsdGluRXJyb3Iuc3RhY2s7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc0Jhc2ljRXJyb3IgaXMgYSB3cmFwcGVyIGFyb3VuZCBhbGwgdGhlIGJ1aWx0LWluIGVycm9yc1xuICogZS5nLiB1bmRlZmluZWQgdmFyaWFibGVzLCBpbmNvcnJlY3Qgc3ludGF4LCB0eXBlcywgbWlzc2luZyBtZXRob2RzLCBldGMuXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQmFzaWNFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoMTAwLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc1VpRXJyb3IgdXNlZCBmb3IgdGhpbmdzIGxpa2UgRE9NIGVycm9ycy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNVaUVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigyMDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgaXMgdXNlZCBmb3IgQ29tcG9uZW50IG9yaWVudGVkIGVycm9yc1xuICogZS5nLiBmYWlsdXJlIHRvIHJlbmRlciwgb3IgY2F0Y2hpbmcgdW5rbm93bnMuXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGNvbXBvbmVudCwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigyMDEsIG1lc3NhZ2UsIGNvbXBvbmVudCwgY2F1c2VkQnkpO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc0VuZHBvaW50RXJyb3IgcmVwcmVzZW50cyBhbGwgbmV0d29yayByZWxhdGVkIGVycm9ycy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNFbmRwb2ludEVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigzMDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzQ29yZUVycm9yIHJlcHJlc2VudHMgZXJyb3JzIGZvciBwcmVjb25kaXRpb24gZmFpbHVyZXMgaW4gdGhlIGNvcmUgbGlicmFyeVxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0NvcmVFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoNDAwLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpO1xuICB9XG59XG4vKipcbiAqIEFuc3dlcnNTdG9yYWdlRXJyb3IgcmVwcmVzZW50cyBzdG9yYWdlIHJlbGF0ZWQgZXJyb3JzXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzU3RvcmFnZUVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBzdG9yYWdlS2V5LCBkYXRhLCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDQwMSwgbWVzc2FnZSwgJ1N0b3JhZ2UnLCBjYXVzZWRCeSk7XG4gICAgdGhpcy5zdG9yYWdlS2V5ID0gc3RvcmFnZUtleTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGV2ZW50LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDQwMiwgbWVzc2FnZSwgJ0FuYWx5dGljcycsIGNhdXNlZEJ5KTtcbiAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlYXJjaEFwaSAqL1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IHsgQW5zd2Vyc0Jhc2ljRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBTZWFyY2hBcGkgaXMgdGhlIEFQSSBmb3IgZG9pbmcgdmFyaW91cyB0eXBlcyBvZiBzZWFyY2hcbiAqIG92ZXIgdGhlIG5ldHdvcmsgKGUuZy4gdmVydGljYWwgb3IgdW5pdmVyc2FsKVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hBcGkge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIW9wdHMuYXBpS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0FwaSBLZXkgaXMgcmVxdWlyZWQnLCAnU2VhcmNoJyk7XG4gICAgfVxuICAgIHRoaXMuX2FwaUtleSA9IG9wdHMuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIEFuc3dlcnMgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFvcHRzLmFuc3dlcnNLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQW5zd2VycyBLZXkgaXMgcmVxdWlyZWQnLCAnU2VhcmNoJyk7XG4gICAgfVxuICAgIHRoaXMuX2Fuc3dlcnNLZXkgPSBvcHRzLmFuc3dlcnNLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgQVBJIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnNpb24gPSBvcHRzLnZlcnNpb24gfHwgMjAxOTAxMDEgfHwgMjAxOTAzMDE7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgbG9jYWxlIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFvcHRzLmxvY2FsZSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdMb2NhbGUgaXMgcmVxdWlyZWQnLCAnU2VhcmNoJyk7XG4gICAgfVxuICAgIHRoaXMuX2xvY2FsZSA9IG9wdHMubG9jYWxlO1xuICB9XG5cbiAgdmVydGljYWxRdWVyeSAocXVlcnlTdHJpbmcsIHZlcnRpY2FsS2V5LCBmaWx0ZXIpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvdmVydGljYWwvcXVlcnknLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IHF1ZXJ5U3RyaW5nLFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICAgICdmaWx0ZXJzJzogZmlsdGVyLFxuICAgICAgICAndmVydGljYWxLZXknOiB2ZXJ0aWNhbEtleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH1cblxuICBxdWVyeSAocXVlcnlTdHJpbmcpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvcXVlcnknLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IHF1ZXJ5U3RyaW5nLFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVEYXRhICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Db21wbGV0ZURhdGEge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgdGhpcy5zZWN0aW9ucyA9IGRhdGEuc2VjdGlvbnMgfHwgW107XG4gICAgdGhpcy5xdWVyeUlkID0gZGF0YS5xdWVyeUlkIHx8ICcnO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UpIHtcbiAgICBsZXQgc2VjdGlvbnM7XG4gICAgaWYgKHJlc3BvbnNlLnNlY3Rpb25zKSB7XG4gICAgICBzZWN0aW9ucyA9IHJlc3BvbnNlLnNlY3Rpb25zLm1hcChzID0+ICh7XG4gICAgICAgIGxhYmVsOiBzLmxhYmVsLFxuICAgICAgICByZXN1bHRzOiBzLnJlc3VsdHMubWFwKHIgPT4gbmV3IEF1dG9Db21wbGV0ZVJlc3VsdChyKSlcbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VjdGlvbnMgPSBbeyByZXN1bHRzOiByZXNwb25zZS5yZXN1bHRzLm1hcChyID0+IG5ldyBBdXRvQ29tcGxldGVSZXN1bHQocikpIH1dO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEF1dG9Db21wbGV0ZURhdGEoeyBzZWN0aW9ucywgcXVlcnlJZDogcmVzcG9uc2UucXVlcnlJZCB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXV0b0NvbXBsZXRlUmVzdWx0IHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIHRoaXMuZmlsdGVyID0gZGF0YS5maWx0ZXIgfHwge307XG4gICAgdGhpcy5oaWdobGlnaHRlZFZhbHVlID0gdGhpcy5oaWdobGlnaHQoZGF0YSk7XG4gICAgdGhpcy5rZXkgPSBkYXRhLmtleSB8fCAnJztcbiAgICB0aGlzLm1hdGNoZWRTdWJzdHJpbmdzID0gZGF0YS5tYXRjaGVkU3Vic3RyaW5ncyB8fCBbXTtcbiAgICB0aGlzLnZhbHVlID0gZGF0YS52YWx1ZSB8fCAnJztcbiAgICB0aGlzLnNob3J0VmFsdWUgPSBkYXRhLnNob3J0VmFsdWUgfHwgdGhpcy52YWx1ZTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLy8gVE9ETyhqZGVsZXJtZSk6IGNvbnNvbGlkYXRlIHdpdGggb3RoZXIgaGlnaGxpZ2h0IGZ1bmN0aW9uc1xuICBoaWdobGlnaHQgKGRhdGEpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBzaG9ydFZhbHVlLCBtYXRjaGVkU3Vic3RyaW5ncyB9ID0gZGF0YTtcbiAgICBjb25zdCB2YWwgPSB2YWx1ZSB8fCBzaG9ydFZhbHVlO1xuXG4gICAgaWYgKCFtYXRjaGVkU3Vic3RyaW5ncyB8fCBtYXRjaGVkU3Vic3RyaW5ncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIG91ciBoaWdobGlnaHRlZCBzdWJzdHJpbmdzIGFyZSBzb3J0ZWRcbiAgICBtYXRjaGVkU3Vic3RyaW5ncy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAoYS5vZmZzZXQgPCBiLm9mZnNldCkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG5cbiAgICAgIGlmIChhLm9mZnNldCA+IGIub2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIC8vIEJ1aWxkIG91ciBuZXcgdmFsdWUgYmFzZWQgb24gdGhlIGhpZ2hsaWdodHNcbiAgICBsZXQgaGlnaGxpZ2h0ZWRWYWx1ZSA9ICcnO1xuICAgIGxldCBuZXh0U3RhcnQgPSAwO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXRjaGVkU3Vic3RyaW5ncy5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IHN0YXJ0ID0gTnVtYmVyKG1hdGNoZWRTdWJzdHJpbmdzW2pdLm9mZnNldCk7XG4gICAgICBsZXQgZW5kID0gc3RhcnQgKyBtYXRjaGVkU3Vic3RyaW5nc1tqXS5sZW5ndGg7XG5cbiAgICAgIGhpZ2hsaWdodGVkVmFsdWUgKz0gW3ZhbC5zbGljZShuZXh0U3RhcnQsIHN0YXJ0KSwgJzxzdHJvbmc+JywgdmFsLnNsaWNlKHN0YXJ0LCBlbmQpLCAnPC9zdHJvbmc+J10uam9pbignJyk7XG5cbiAgICAgIGlmIChqID09PSBtYXRjaGVkU3Vic3RyaW5ncy5sZW5ndGggLSAxICYmIGVuZCA8IHZhbC5sZW5ndGgpIHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRWYWx1ZSArPSB2YWwuc2xpY2UoZW5kKTtcbiAgICAgIH1cblxuICAgICAgbmV4dFN0YXJ0ID0gZW5kO1xuICAgIH1cblxuICAgIHJldHVybiBoaWdobGlnaHRlZFZhbHVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIgKi9cblxuaW1wb3J0IEF1dG9Db21wbGV0ZURhdGEgZnJvbSAnLi4vbW9kZWxzL2F1dG9jb21wbGV0ZWRhdGEnO1xuXG4vKipcbiAqIEEgRGF0YSBUcmFuc2Zvcm1lciB0aGF0IHRha2VzIHRoZSByZXNwb25zZSBvYmplY3QgZnJvbSBhIEF1dG9Db21wbGV0ZSByZXF1ZXN0XG4gKiBBbmQgdHJhbnNmb3JtcyBpbiB0byBhIGZyb250LWVuZCBvcmllbnRlZCBkYXRhIHN0cnVjdHVyZSB0aGF0IG91clxuICogY29tcG9uZW50IGxpYnJhcnkgYW5kIGNvcmUgc3RvcmFnZSB1bmRlcnN0YW5kLlxuICpcbiAqIFRPRE8oYmlsbHkpIENyZWF0ZSBvdXIgb3duIGZyb250LWVuZCBkYXRhIG1vZGVsc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIge1xuICBzdGF0aWMgY2xlYW4gKG1vZHVsZUlkLCBkYXRhKSB7XG4gICAgaWYgKGRhdGEuc2VjdGlvbnMgJiYgZGF0YS5zZWN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBkYXRhLnNlY3Rpb25zO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnNlY3Rpb25zICYmIGRhdGEuc2VjdGlvbnMubGVuZ3RoID09PSAxICYmIGRhdGEuc2VjdGlvbnNbMF0ucmVzdWx0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBkYXRhLnNlY3Rpb25zO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBbbW9kdWxlSWRdOiBkYXRhXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB1bml2ZXJzYWwgKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIEF1dG9Db21wbGV0ZURhdGEuZnJvbShyZXNwb25zZSk7XG4gIH1cblxuICBzdGF0aWMgZmlsdGVyIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG5cbiAgc3RhdGljIHZlcnRpY2FsIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBdXRvQ29tcGxldGVBcGkgKi9cblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIgZnJvbSAnLi9hdXRvY29tcGxldGVkYXRhdHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgQW5zd2Vyc0Jhc2ljRXJyb3IsIEFuc3dlcnNFbmRwb2ludEVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogQXV0b0NvbXBsZXRlQXBpIGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBuZXR3b3JrIHJlbGF0ZWQgbWF0dGVyc1xuICogZm9yIGFsbCB0aGUgYXV0b2NvbXBsZXRlIGVuZHBvaW50cy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlQXBpIHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFvcHRzLmFwaUtleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBcGkgS2V5IGlzIHJlcXVpcmVkJywgJ0F1dG9Db21wbGV0ZScpO1xuICAgIH1cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBBbnN3ZXJzIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghb3B0cy5hbnN3ZXJzS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0Fuc3dlcnMgS2V5IGlzIHJlcXVpcmVkJywgJ0F1dG9Db21wbGV0ZScpO1xuICAgIH1cbiAgICB0aGlzLl9hbnN3ZXJzS2V5ID0gb3B0cy5hbnN3ZXJzS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnNpb24gb2YgdGhlIEFQSSB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJzaW9uID0gb3B0cy52ZXJzaW9uIHx8IDIwMTkwMTAxIHx8IDIwMTkwMzAxO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxvY2FsZSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghb3B0cy5sb2NhbGUpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignTG9jYWxlIGlzIHJlcXVpcmVkJywgJ0F1dG9Db21wbGV0ZScpO1xuICAgIH1cbiAgICB0aGlzLl9sb2NhbGUgPSBvcHRzLmxvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdXRvY29tcGxldGUgZmlsdGVyc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgVGhlIGlucHV0IHRvIHVzZSBmb3IgYXV0byBjb21wbGV0ZVxuICAgKi9cbiAgcXVlcnlGaWx0ZXIgKGlucHV0LCB2ZXJ0aWNhbEtleSwgYmFyS2V5KSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL2ZpbHRlcnNlYXJjaCcsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogaW5wdXQsXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgICAgJ2V4cGVyaWVuY2VLZXknOiB2ZXJ0aWNhbEtleSxcbiAgICAgICAgJ2lucHV0S2V5JzogYmFyS2V5LFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLmZpbHRlcihyZXNwb25zZS5yZXNwb25zZSwgYmFyS2V5KSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzRW5kcG9pbnRFcnJvcignRmlsdGVyIHNlYXJjaCByZXF1ZXN0IGZhaWxlZCcsICdBdXRvQ29tcGxldGUnLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHF1ZXJ5VmVydGljYWwgKGlucHV0LCB2ZXJ0aWNhbEtleSwgYmFyS2V5KSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL2F1dG9jb21wbGV0ZScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogaW5wdXQsXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgICAgJ2V4cGVyaWVuY2VLZXknOiB2ZXJ0aWNhbEtleSxcbiAgICAgICAgJ2JhcktleSc6IGJhcktleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lci52ZXJ0aWNhbChyZXNwb25zZS5yZXNwb25zZSwgcmVxdWVzdC5fcGFyYW1zLmJhcktleSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoJ1ZlcnRpY2FsIHNlYXJjaCByZXF1ZXN0IGZhaWxlZCcsICdBdXRvQ29tcGxldGUnLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHF1ZXJ5VW5pdmVyc2FsIChxdWVyeVN0cmluZykge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9hdXRvY29tcGxldGUnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IHF1ZXJ5U3RyaW5nLFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldChxdWVyeVN0cmluZylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lci51bml2ZXJzYWwocmVzcG9uc2UucmVzcG9uc2UpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEFuc3dlcnNFbmRwb2ludEVycm9yKCdVbml2ZXJzYWwgc2VhcmNoIHJlcXVlc3QgZmFpbGVkJywgJ0F1dG9Db21wbGV0ZScsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBSZXN1bHQgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0IHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogcmVzdWx0c0RhdGEgZXhwZWN0ZWQgZm9ybWF0OiB7IGRhdGE6IHsgLi4uIH0sIGhpZ2hsaWdodGVkRmllbGRzOiB7IC4uLiB9fVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHJlc3VsdHNEYXRhKSB7XG4gICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdHNEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBUT0RPIHVzZSByZXN1bHREYXRhLmhpZ2hsaWdodGVkRmllbGRzIHRvXG4gICAgICAvLyB0cmFuc2Zvcm0gcmVzdWx0RGF0YS5kYXRhIGludG8gaHRtbC1mcmllbmRseSBzdHJpbmdzIHRoYXQgaGlnaGxpZ2h0IHZhbHVlcy5cblxuICAgICAgLy8gQ2hlY2sgZm9yIG5ldyBkYXRhIGZvcm1hdCwgb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGxlZ2FjeVxuICAgICAgcmVzdWx0cy5wdXNoKG5ldyBSZXN1bHQocmVzdWx0c0RhdGFbaV0uZGF0YSB8fCByZXN1bHRzRGF0YVtpXSkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hTdGF0ZXMgKi9cblxuLyoqXG4gKiBTZWFyY2hTdGF0ZXMgaXMgYW4gRU5VTSBmb3IgdGhlIHZhcmlvdXMgc3RhZ2VzIG9mIHNlYXJjaGluZyxcbiAqIHVzZWQgdG8gc2hvdyBkaWZmZXJlbnQgdGVtcGxhdGVzXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIFBSRV9TRUFSQ0g6ICdwcmUtc2VhcmNoJyxcbiAgU0VBUkNIX0xPQURJTkc6ICdzZWFyY2gtbG9hZGluZycsXG4gIFNFQVJDSF9DT01QTEVURTogJ3NlYXJjaC1jb21wbGV0ZSdcbn07XG4iLCIvKiogQG1vZHVsZSBTZWN0aW9uICovXG5cbmltcG9ydCBSZXN1bHQgZnJvbSAnLi9yZXN1bHQnO1xuaW1wb3J0IFNlYXJjaFN0YXRlcyBmcm9tICcuLi9zdG9yYWdlL3NlYXJjaHN0YXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3RvciAoZGF0YSwgdXJsKSB7XG4gICAgdGhpcy5zZWFyY2hTdGF0ZSA9IFNlYXJjaFN0YXRlcy5TRUFSQ0hfQ09NUExFVEU7XG4gICAgdGhpcy52ZXJ0aWNhbENvbmZpZ0lkID0gZGF0YS52ZXJ0aWNhbENvbmZpZ0lkIHx8IG51bGw7XG4gICAgdGhpcy5yZXN1bHRzQ291bnQgPSBkYXRhLnJlc3VsdHNDb3VudCB8fCAwO1xuICAgIHRoaXMuZW5jb2RlZFN0YXRlID0gZGF0YS5lbmNvZGVkU3RhdGUgfHwgJyc7XG4gICAgdGhpcy5hcHBsaWVkUXVlcnlGaWx0ZXJzID0gQXBwbGllZFF1ZXJ5RmlsdGVyLmZyb20oZGF0YS5hcHBsaWVkUXVlcnlGaWx0ZXJzKTtcbiAgICB0aGlzLmZhY2V0cyA9IGRhdGEuZmFjZXRzIHx8IG51bGw7XG4gICAgdGhpcy5yZXN1bHRzID0gUmVzdWx0LmZyb20oZGF0YS5yZXN1bHRzKTtcbiAgICB0aGlzLm1hcCA9IFNlY3Rpb24ucGFyc2VNYXAoZGF0YS5yZXN1bHRzKTtcbiAgICB0aGlzLnZlcnRpY2FsVVJMID0gdXJsIHx8IG51bGw7XG4gIH1cblxuICBzdGF0aWMgcGFyc2VNYXAgKHJlc3VsdHMpIHtcbiAgICBsZXQgbWFwTWFya2VycyA9IFtdO1xuXG4gICAgbGV0IGNlbnRlckNvb3JkaW5hdGVzID0ge307XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc3VsdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIFJlbW92ZSBsZWdhY3kgZmFsbGJhY2sgZnJvbSBhbGwgZGF0YSBmb3JtYXRcbiAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzW2pdLmRhdGEgfHwgcmVzdWx0c1tqXTtcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZSkge1xuICAgICAgICBpZiAoIWNlbnRlckNvb3JkaW5hdGVzLmxhdGl0dWRlKSB7XG4gICAgICAgICAgY2VudGVyQ29vcmRpbmF0ZXMgPSB7XG4gICAgICAgICAgICBsYXRpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sb25naXR1ZGVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIG1hcE1hcmtlcnMucHVzaCh7XG4gICAgICAgICAgaXRlbTogcmVzdWx0LFxuICAgICAgICAgIGxhYmVsOiBtYXBNYXJrZXJzLmxlbmd0aCArIDEsXG4gICAgICAgICAgbGF0aXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubGF0aXR1ZGUsXG4gICAgICAgICAgbG9uZ2l0dWRlOiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlLmxvbmdpdHVkZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgJ21hcENlbnRlcic6IGNlbnRlckNvb3JkaW5hdGVzLFxuICAgICAgJ21hcE1hcmtlcnMnOiBtYXBNYXJrZXJzXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChtb2R1bGVzLCB1cmxzKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gW107XG4gICAgaWYgKCFtb2R1bGVzKSB7XG4gICAgICByZXR1cm4gc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmV3IFNlY3Rpb24obW9kdWxlcyk7XG4gICAgfVxuXG4gICAgLy8gT3VyIHNlY3Rpb25zIHNob3VsZCBjb250YWluIGEgcHJvcGVydHkgb2YgbWFwTWFya2VyIG9iamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNlY3Rpb25zLnB1c2goXG4gICAgICAgIG5ldyBTZWN0aW9uKFxuICAgICAgICAgIG1vZHVsZXNbaV0sXG4gICAgICAgICAgdXJsc1ttb2R1bGVzW2ldLnZlcnRpY2FsQ29uZmlnSWRdXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlY3Rpb25zO1xuICB9XG59XG5cbmNsYXNzIEFwcGxpZWRRdWVyeUZpbHRlciB7XG4gIC8vIFN1cHBvcnQgbGVnYWN5IG1vZGVsIGFuZCBuZXcgbW9kZWwgdW50aWwgZnVsbHkgbWlncmF0ZWQuXG4gIC8vIFRPRE8oYmlsbHkpIFJlbW92ZSB0aGUgbGVmdCBleHByZXNzaW9uIGR1cmluZyBhc3NpZ25tZW50IHdoZW4gbWlncmF0ZWQuXG4gIGNvbnN0cnVjdG9yIChhcHBsaWVkUXVlcnlGaWx0ZXIpIHtcbiAgICB0aGlzLmtleSA9IGFwcGxpZWRRdWVyeUZpbHRlci5rZXkgfHwgYXBwbGllZFF1ZXJ5RmlsdGVyLmRpc3BsYXlLZXk7XG4gICAgdGhpcy52YWx1ZSA9IGFwcGxpZWRRdWVyeUZpbHRlci52YWx1ZSB8fCBhcHBsaWVkUXVlcnlGaWx0ZXIuZGlzcGxheVZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKGFwcGxpZWRRdWVyeUZpbHRlcnMpIHtcbiAgICBsZXQgZmlsdGVycyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwbGllZFF1ZXJ5RmlsdGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgZmlsdGVycy5wdXNoKG5ldyBBcHBsaWVkUXVlcnlGaWx0ZXIoYXBwbGllZFF1ZXJ5RmlsdGVyc1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVycztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgVW5pdmVyc2FsUmVzdWx0cyAqL1xuXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL3NlY3Rpb24nO1xuaW1wb3J0IFNlYXJjaFN0YXRlcyBmcm9tICcuLi9zdG9yYWdlL3NlYXJjaHN0YXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaXZlcnNhbFJlc3VsdHMge1xuICBjb25zdHJ1Y3RvciAoZGF0YSkge1xuICAgIHRoaXMucXVlcnlJZCA9IGRhdGEucXVlcnlJZCB8fCBudWxsO1xuICAgIHRoaXMuc2VjdGlvbnMgPSBkYXRhLnNlY3Rpb25zIHx8IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHNlYXJjaCwgdXNlZCB0byByZW5kZXIgZGlmZmVyZW50IHRlbXBsYXRlcyBiZWZvcmUsIGR1cmluZyxcbiAgICAgKiBhbmQgYWZ0ZXIgbG9hZGluZ1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zZWFyY2hTdGF0ZSA9IGRhdGEuc2VhcmNoU3RhdGUgfHwgU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSwgdXJscykge1xuICAgIHJldHVybiBuZXcgVW5pdmVyc2FsUmVzdWx0cyh7XG4gICAgICBxdWVyeUlkOiByZXNwb25zZS5xdWVyeUlkLFxuICAgICAgc2VjdGlvbnM6IFNlY3Rpb24uZnJvbShyZXNwb25zZS5tb2R1bGVzLCB1cmxzKVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBhIFVuaXZlcnZhbFJlc3VsdHMgb2JqZWN0IHJlcHJlc2VudGluZyBsb2FkaW5nIHJlc3VsdHNcbiAgICogQHJldHVybiB7VW5pdmVyc2FsUmVzdWx0c31cbiAgICovXG4gIHN0YXRpYyBzZWFyY2hMb2FkaW5nICgpIHtcbiAgICByZXR1cm4gbmV3IFVuaXZlcnNhbFJlc3VsdHMoeyBzZWFyY2hTdGF0ZTogU2VhcmNoU3RhdGVzLlNFQVJDSF9MT0FESU5HIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEaXJlY3RBbnN3ZXIgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0QW5zd2VyIHtcbiAgY29uc3RydWN0b3IgKGRpcmVjdEFuc3dlciA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkaXJlY3RBbnN3ZXIpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE5hdmlnYXRpb24gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiB7XG4gIGNvbnN0cnVjdG9yICh0YWJPcmRlcikge1xuICAgIHRoaXMudGFiT3JkZXIgPSB0YWJPcmRlciB8fCBbXTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKG1vZHVsZXMpIHtcbiAgICBsZXQgbmF2ID0gW107XG4gICAgaWYgKCFtb2R1bGVzIHx8ICFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmF2O1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5hdi5wdXNoKG1vZHVsZXNbaV0udmVydGljYWxDb25maWdJZCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgTmF2aWdhdGlvbihuYXYpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBWZXJ0aWNhbFJlc3VsdHMgKi9cblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9zZWN0aW9uJztcbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0aWNhbFJlc3VsdHMge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IHNlYXJjaFN0YXRlOiBTZWFyY2hTdGF0ZXMuU0VBUkNIX0NPTVBMRVRFIH0sIGRhdGEpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gbmV3IFZlcnRpY2FsUmVzdWx0cyhTZWN0aW9uLmZyb20ocmVzcG9uc2UpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgYSBWZXJ0aWNhbFJlc3VsdHMgb2JqZWN0IHJlcHJlc2VudGluZyBsb2FkaW5nIHJlc3VsdHNcbiAgICogQHJldHVybiB7VmVydGljYWxSZXN1bHRzfVxuICAgKi9cbiAgc3RhdGljIHNlYXJjaExvYWRpbmcgKCkge1xuICAgIHJldHVybiBuZXcgVmVydGljYWxSZXN1bHRzKHsgc2VhcmNoU3RhdGU6IFNlYXJjaFN0YXRlcy5TRUFSQ0hfTE9BRElORyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTdG9yYWdlS2V5cyAqL1xuXG4vKipcbiAqIFN0b3JhZ2VLZXlzIGlzIGFuIEVOVU0gYXJlIGNvbnNpZGVyZWQgdGhlIHJvb3QgY29udGV4dFxuICogZm9yIGhvdyBkYXRhIGlzIHN0b3JlZCBhbmQgc2NvcGVkIGluIHRoZSBzdG9yYWdlLlxuICpcbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgTkFWSUdBVElPTjogJ25hdmlnYXRpb24nLFxuICBVTklWRVJTQUxfUkVTVUxUUzogJ3VuaXZlcnNhbC1yZXN1bHRzJyxcbiAgVkVSVElDQUxfUkVTVUxUUzogJ3ZlcnRpY2FsLXJlc3VsdHMnLFxuICBBVVRPQ09NUExFVEU6ICdhdXRvY29tcGxldGUnLFxuICBESVJFQ1RfQU5TV0VSOiAnZGlyZWN0LWFuc3dlcicsXG4gIEZJTFRFUjogJ2ZpbHRlcicsXG4gIFFVRVJZOiAncXVlcnknLFxuICBRVUVSWV9JRDogJ3F1ZXJ5LWlkJ1xufTtcbiIsIi8qKiBAbW9kdWxlIFNlYXJjaERhdGFUcmFuc2Zvcm1lciAqL1xuXG5pbXBvcnQgVW5pdmVyc2FsUmVzdWx0cyBmcm9tICcuLi9tb2RlbHMvdW5pdmVyc2FscmVzdWx0cyc7XG5pbXBvcnQgRGlyZWN0QW5zd2VyIGZyb20gJy4uL21vZGVscy9kaXJlY3RhbnN3ZXInO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vbW9kZWxzL25hdmlnYXRpb24nO1xuaW1wb3J0IFZlcnRpY2FsUmVzdWx0cyBmcm9tICcuLi9tb2RlbHMvdmVydGljYWxyZXN1bHRzJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuLyoqXG4gKiBBIERhdGEgVHJhbnNmb3JtZXIgdGhhdCB0YWtlcyB0aGUgcmVzcG9uc2Ugb2JqZWN0IGZyb20gYSBTZWFyY2ggcmVxdWVzdFxuICogQW5kIHRyYW5zZm9ybXMgaW4gdG8gYSBmcm9udC1lbmQgb3JpZW50ZWQgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBvdXJcbiAqIGNvbXBvbmVudCBsaWJyYXJ5IGFuZCBjb3JlIHN0b3JhZ2UgdW5kZXJzdGFuZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoRGF0YVRyYW5zZm9ybWVyIHtcbiAgc3RhdGljIHRyYW5zZm9ybSAoZGF0YSwgdXJscyA9IHt9KSB7XG4gICAgbGV0IHJlc3BvbnNlID0gZGF0YS5yZXNwb25zZTtcbiAgICByZXR1cm4ge1xuICAgICAgW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXTogcmVzcG9uc2UucXVlcnlJZCxcbiAgICAgIFtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXTogTmF2aWdhdGlvbi5mcm9tKHJlc3BvbnNlLm1vZHVsZXMpLFxuICAgICAgW1N0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVJdOiBuZXcgRGlyZWN0QW5zd2VyKHJlc3BvbnNlLmRpcmVjdEFuc3dlciksXG4gICAgICBbU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFNdOiBVbml2ZXJzYWxSZXN1bHRzLmZyb20ocmVzcG9uc2UsIHVybHMpXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB0cmFuc2Zvcm1WZXJ0aWNhbCAoZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICBbU3RvcmFnZUtleXMuUVVFUllfSURdOiBkYXRhLnJlc3BvbnNlLnF1ZXJ5SWQsXG4gICAgICBbU3RvcmFnZUtleXMuTkFWSUdBVElPTl06IG5ldyBOYXZpZ2F0aW9uKCksIC8vIFZlcml0Y2FsIGRvZXNuJ3QgcmVzcG9uZCB3aXRoIG9yZGVyaW5nLCBzbyB1c2UgZW1wdHkgbmF2LlxuICAgICAgW1N0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFNdOiBWZXJ0aWNhbFJlc3VsdHMuZnJvbShkYXRhLnJlc3BvbnNlKVxuICAgIH07XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEV2ZW50RW1pdHRlciAqL1xuXG4vKipcbiAqIEV2ZW50RW1pdHRlciBpcyBhIGJhc2UgY2xhc3MgZm9yIGFueSBvYmplY3QgdGhhdCB3YW50cyB0byBleHBvc2VcbiAqIGEgcHViL3N1YiBpbnRlcmZhY2UsIGZvciBlbWl0dGluZyBtZXNzYWdlcyBhbmQgcHJvdmlkaW5nIGxpc3RlbmVycy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8qKlxuICAgICAqIFRoZSBzdWJzY3JpYmVycyBvZiBtZXNzYWdlc1xuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIG9uIGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciBzdWJzY3JpYmluZyBldmVudHMgdGhhdCBhcmUgZW1pdHRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byBsaXN0ZW4gdG9cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgVGhlIGNhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSB7ZXZ0fSBpcyBlbWl0dGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSBPcHRpb25hbCB2YWx1ZSB3aGljaCB3aWxsIG9ubHkgaGFuZGxlIHRoZSBtZXNzYWdlIG9uY2VcbiAgICovXG4gIG9uIChldnQsIGNiLCBvbmNlKSB7XG4gICAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBoYW5kbGVyIHNob3VsZCBiZSBvZiB0eXBlIHtmdW5jdGlvbn0nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbGlzdGVuZXJzW2V2dF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzW2V2dF0gPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XS5wdXNoKHtcbiAgICAgIGV2ZW50OiBldnQsXG4gICAgICBjYjogY2IsXG4gICAgICBvbmNlOiBvbmNlIHx8IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBvbmNlIGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciBzdWJzY3JpYmluZyBldmVudHMgdGhhdCBhcmUgZW1pdHRlZC5cbiAgICogVGhlIGhhbmRsZXIgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBvbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIGxpc3RlbiB0b1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gdGhlIHtldnR9IGlzIGVtaXR0ZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBvbmNlIE9wdGlvbmFsIHZhbHVlIHdoaWNoIHdpbGwgb25seSBoYW5kbGUgdGhlIG1lc3NhZ2Ugb25jZVxuICAgKi9cbiAgb25jZSAoZXZ0LCBjYikge1xuICAgIHJldHVybiB0aGlzLm9uKGV2dCwgY2IsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIG9mZiBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3IgdW5zdWJzY3JpYmluZyBmcm9tIGFuIGV2ZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gdW5zdWJzY3JpYmUgZnJvbVxuICAgKi9cbiAgb2ZmIChldnQpIHtcbiAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW2V2dF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogZW1pdCBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3IgYnJvYWRjYXN0aW5nIG1lc3NhZ2VzL2V2ZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIHB1Ymxpc2ggZnJvbVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSB0aGUgZGF0YSB0byBzZW5kIGFsb25nIHRvIHRoZSBzdWJzY3JpYmVyc1xuICAgKi9cbiAgZW1pdCAoZXZ0LCBkYXRhKSB7XG4gICAgbGV0IGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1tldnRdO1xuICAgIGlmIChsaXN0ZW5lcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEludm9rZSBlYWNoIG9mIGFsbCB0aGUgbGlzdGVuZXIgaGFuZGxlcnMgYW5kIHJlbW92ZSB0aGUgb25lcyB0aGF0IHNob3VsZCBmaXJlIG9ubHkgb25jZS5cbiAgICBsZXQga2VlcCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0uY2IoZGF0YSk7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldLm9uY2UgPT09IHRydWUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEluc3RlYWQgb2YgaGF2aW5nIGEgJ2RpcnR5JyBhcnJheSB3aXRoIGRlbGV0ZWQgb3IgJ3VuZGVmaW5lZCcgZW50cmllcyxcbiAgICAgIC8vIHdlIGp1c3QgY3JlYXRlIGEgYnJhbmQgbmV3IGFycmF5IHdpdGhvdXQgdGhlIGxpc3RlbmVycyB0aGF0IHdlcmUgcmVtb3ZlZFxuICAgICAga2VlcC5wdXNoKGxpc3RlbmVyc1tpXSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIG91ciBvbGQgbGlzdCBvZiBsaXN0ZW5lcnMgdG8gdGhlIG5ld2x5IGNyZWF0ZWQgYXJyYXlcbiAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XSA9IGtlZXA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE1vZHVsZURhdGEgKi9cblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudGVtaXR0ZXIvZXZlbnRlbWl0dGVyJztcblxuLyoqXG4gKiBNb2R1bGVEYXRhIGlzIHVzZWQgYXMgYSBnZW5lcmljIG1vZGVsIGZvciBTdG9yYWdlLlxuICogVHlwaWNhbGx5IGFuIGluc3RhbmNlIG9mIE1vZHVsZURhdGEgcG93ZXJzIGEgc2luZ2xlIGNvbXBvbmVudC5cblxuICogQSBkYXRhIG1vZGVsIHRoYXQgZXhwb3NlcyBhbiBldmVudCBlbWl0dGVyIGludGVyZmFjZS5cbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2R1bGVEYXRhIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGlkLCBkYXRhID0ge30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5faWQgPSBpZDtcbiAgICB0aGlzLl9oaXN0b3J5ID0gW107XG4gICAgdGhpcy5fZGF0YSA9IHt9O1xuICAgIHRoaXMuc2V0KGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcGxhY2VzIHRoZSBjdXJyZW50bHkgaGVsZCBkYXRhIHdpdGggdGhlIGdpdmVuIGRhdGFcbiAgICogQHBhcmFtIHsqfSBkYXRhIHRoZSBkYXRhIHRvIHJlcGxhY2UgdGhlIGN1cnJlbnQgZGF0YVxuICAgKi9cbiAgc2V0IChkYXRhKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IGRhdGEgfHwge307XG5cbiAgICB0aGlzLmNhcHR1cmVQcmV2aW91cygpO1xuXG4gICAgaWYgKE9iamVjdC5rZXlzKG5ld0RhdGEpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXModGhpcy5fZGF0YSkubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9kYXRhID0gbmV3RGF0YTtcbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5fZGF0YSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgZm9yIHNoYWxsb3cgZXF1YWxpdHlcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhuZXdEYXRhKSkge1xuICAgICAgaWYgKHRoaXMuX2RhdGFba2V5XSAhPT0gbmV3RGF0YVtrZXldKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBuZXdEYXRhO1xuICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuX2RhdGEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2FwdHVyZVByZXZpb3VzICgpIHtcbiAgICBpZiAodGhpcy5faGlzdG9yeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9oaXN0b3J5ID0gW107XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hpc3RvcnkubGVuZ3RoICsgMSA+IDUpIHtcbiAgICAgIHRoaXMuX2hpc3Rvcnkuc2hpZnQoKTtcbiAgICB9XG5cbiAgICAvLyBJZiBkYXRhIGlzIGV2ZXIgdW5kZWZpbmVkLCB3ZSBkZWZhdWx0IHRvIGVtcHR5IG9iamVjdFxuICAgIHRoaXMuX2hpc3RvcnkucHVzaChKU09OLnN0cmluZ2lmeSh0aGlzLl9kYXRhIHx8IHt9KSk7XG4gIH1cblxuICB1bmRvICgpIHtcbiAgICBsZXQgcHJldmlvdXMgPSB7fTtcbiAgICBpZiAodGhpcy5fcHJldmlvdXMubGVuZ3RoID4gMCkge1xuICAgICAgcHJldmlvdXMgPSBKU09OLnBhcnNlKHRoaXMuX3ByZXZpb3VzLnBvcCgpKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRhLnNldChwcmV2aW91cyk7XG4gIH1cblxuICByYXcgKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTdG9yYWdlICovXG5cbmltcG9ydCBNb2R1bGVEYXRhIGZyb20gJy4vbW9kdWxlZGF0YSc7XG5pbXBvcnQgeyBBbnN3ZXJzU3RvcmFnZUVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogU3RvcmFnZSBpcyBhIGNvbnRhaW5lciBhcm91bmQgYXBwbGljYXRpb24gc3RhdGUuXG4gKiBJdCBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgQ1JVRCBvcGVyYXRpb25zIGFzIHdlbGwgYXMgbGlzdGVuaW5nXG4gKiBmb3Igc3RhdGVmdWwgY2hhbmdlcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyID0ge307XG4gICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzID0ge307XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkYXRhIGluIHN0b3JhZ2Ugd2l0aCB0aGUgZ2l2ZW4ga2V5IHRvIHRoZSBwcm92aWRlZCBkYXRhLFxuICAgKiBjb21wbGV0ZWx5IG92ZXJ3cml0aW5nIGFueSBleGlzdGluZyBkYXRhLlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRoZSBzdG9yYWdlIGtleSB0byBzZXRcbiAgICogQHBhcmFtIHsqfSBkYXRhIHRoZSBkYXRhIHRvIHNldFxuICAgKi9cbiAgc2V0IChrZXksIGRhdGEpIHtcbiAgICB0aGlzLl9pbml0RGF0YUNvbnRhaW5lcihrZXksIGRhdGEpO1xuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJba2V5XS5zZXQoZGF0YSk7XG4gIH1cblxuICBfaW5pdERhdGFDb250YWluZXIgKGtleSwgZGF0YSkge1xuICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCB8fCBrZXkgPT09IG51bGwgfHwgdHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzU3RvcmFnZUVycm9yKCdJbnZhbGlkIHN0b3JhZ2Uga2V5IHByb3ZpZGVkJywga2V5LCBkYXRhKTtcbiAgICB9XG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCB8fCBkYXRhID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc1N0b3JhZ2VFcnJvcignTm8gZGF0YSBwcm92aWRlZCcsIGtleSwgZGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX21vZHVsZURhdGFDb250YWluZXJba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2tleV0gPSBuZXcgTW9kdWxlRGF0YShrZXkpO1xuICAgICAgdGhpcy5fYXBwbHlGdXR1cmVMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gIH1cblxuICBnZXRTdGF0ZSAobW9kdWxlSWQpIHtcbiAgICBpZiAodGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5yYXcoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRBbGwgKGtleSkge1xuICAgIGNvbnN0IGRhdGEgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGRhdGFLZXkgb2YgT2JqZWN0LmtleXModGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcikpIHtcbiAgICAgIGlmIChkYXRhS2V5LnN0YXJ0c1dpdGgoa2V5KSAmJiB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2RhdGFLZXldLnJhdygpICE9PSBudWxsKSB7XG4gICAgICAgIGRhdGEucHVzaCh0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2RhdGFLZXldLnJhdygpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBvbiAoZXZ0LCBtb2R1bGVJZCwgY2IpIHtcbiAgICBsZXQgbW9kdWxlRGF0YSA9IHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdO1xuICAgIGlmIChtb2R1bGVEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXSA9IFtdO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdLnB1c2goe1xuICAgICAgICBldmVudDogZXZ0LFxuICAgICAgICBjYjogY2JcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0ub24oZXZ0LCBjYik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBvZmYgKGV2dCwgbW9kdWxlSWQsIGNiKSB7XG4gICAgbGV0IG1vZHVsZURhdGEgPSB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXTtcbiAgICBpZiAobW9kdWxlRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0ucG9wKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdLm9mZihldnQsIGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9hcHBseUZ1dHVyZUxpc3RlbmVycyAobW9kdWxlSWQpIHtcbiAgICBsZXQgZnV0dXJlcyA9IHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF07XG4gICAgaWYgKCFmdXR1cmVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmdXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZnV0dXJlID0gZnV0dXJlc1tpXTtcbiAgICAgIHRoaXMub24oZnV0dXJlLmV2ZW50LCBtb2R1bGVJZCwgZnV0dXJlLmNiKTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF07XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIENvcmUgKi9cblxuaW1wb3J0IFNlYXJjaEFwaSBmcm9tICcuL3NlYXJjaC9zZWFyY2hhcGknO1xuaW1wb3J0IEF1dG9Db21wbGV0ZUFwaSBmcm9tICcuL3NlYXJjaC9hdXRvY29tcGxldGVhcGknO1xuXG5pbXBvcnQgU2VhcmNoRGF0YVRyYW5zZm9ybWVyIGZyb20gJy4vc2VhcmNoL3NlYXJjaGRhdGF0cmFuc2Zvcm1lcic7XG5cbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZS9zdG9yYWdlJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFZlcnRpY2FsUmVzdWx0cyBmcm9tICcuL21vZGVscy92ZXJ0aWNhbHJlc3VsdHMnO1xuaW1wb3J0IFVuaXZlcnNhbFJlc3VsdHMgZnJvbSAnLi9tb2RlbHMvdW5pdmVyc2FscmVzdWx0cyc7XG5cbi8qKlxuICogQ29yZSBpcyB0aGUgbWFpbiBhcHBsaWNhdGlvbiBjb250YWluZXIgZm9yIGFsbCBvZiB0aGUgbmV0d29yayBhbmQgc3RvcmFnZVxuICogcmVsYXRlZCBiZWhhdmlvcnMgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JlIHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIGlmICh0eXBlb2Ygb3B0cy5hcGlLZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYGFwaUtleWAuIFR5cGUgbXVzdCBiZSB7c3RyaW5nfScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0cy5hbnN3ZXJzS2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGBhbnN3ZXJzS2V5YC4gVHlwZSBtdXN0IGJlIHtzdHJpbmd9Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNsaWVudCBBUEkgS2V5IHVzZWQgZm9yIGFsbCByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjbGllbnQgQW5zd2VycyBLZXkgdXNlZCBmb3IgYWxsIHJlcXVlc3RzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Fuc3dlcnNLZXkgPSBvcHRzLmFuc3dlcnNLZXk7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IGxvY2FsZSB1c2VkIGZvciBhbGwgcmVxdWVzdHMuIElmIG5vdCBzcGVjaWZpZWQsIGRlZmF1bHRzIHRvIFwiZW5cIiAoZm9yXG4gICAgICogYmFja3dhcmRzIGNvbXBhdGliaWxpdHkpLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9sb2NhbGUgPSBvcHRzLmxvY2FsZSB8fCAnZW4nO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNvcmUgZGF0YSBzdG9yYWdlIHRoYXQgcG93ZXJzIHRoZSBVSVxuICAgICAqIEB0eXBlIHtTdG9yYWdlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5zdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIGNvbnRhaW5pbmcgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIFJFU1RmdWwgc2VhcmNoIEFQSVxuICAgICAqIEZvciBib3RoIHZlcnRpY2FsIGFuZCB1bml2ZXJzYWwgc2VhcmNoXG4gICAgICogQHR5cGUge1NlYXJjaH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaGVyID0gbmV3IFNlYXJjaEFwaSh7XG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIGFuc3dlcnNLZXk6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3Rpb24gY29udGFpbmluZyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgUkVTVGZ1bCBhdXRvY29tcGxldGUgQVBJXG4gICAgICogRm9yIGZpbHRlciBzZWFyY2gsIHZlcnRpY2FsIGF1dG9jb21wbGV0ZSwgYW5kIHVuaXZlcnNhbCBhdXRvY29tcGxldGVcbiAgICAgKiBAdHlwZSB7QXV0b2NvbXBsZXRlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXV0b0NvbXBsZXRlID0gbmV3IEF1dG9Db21wbGV0ZUFwaSh7XG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIGFuc3dlcnNLZXk6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZVxuICAgIH0pO1xuICB9XG5cbiAgdmVydGljYWxTZWFyY2ggKHF1ZXJ5U3RyaW5nLCB2ZXJ0aWNhbEtleSwgZmlsdGVyKSB7XG4gICAgdGhpcy5zdG9yYWdlLnNldChTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTLCBWZXJ0aWNhbFJlc3VsdHMuc2VhcmNoTG9hZGluZygpKTtcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoZXJcbiAgICAgIC52ZXJ0aWNhbFF1ZXJ5KHF1ZXJ5U3RyaW5nLCB2ZXJ0aWNhbEtleSwgZmlsdGVyKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gU2VhcmNoRGF0YVRyYW5zZm9ybWVyLnRyYW5zZm9ybVZlcnRpY2FsKHJlc3BvbnNlKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBkYXRhW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuTkFWSUdBVElPTiwgZGF0YVtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUywgZGF0YVtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaCAocXVlcnlTdHJpbmcsIHVybHMpIHtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTLCBVbml2ZXJzYWxSZXN1bHRzLnNlYXJjaExvYWRpbmcoKSk7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaGVyXG4gICAgICAucXVlcnkocXVlcnlTdHJpbmcpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBTZWFyY2hEYXRhVHJhbnNmb3JtZXIudHJhbnNmb3JtKHJlc3BvbnNlLCB1cmxzKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBkYXRhW1N0b3JhZ2VLZXlzLlFVRVJZX0lEXSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuTkFWSUdBVElPTiwgZGF0YVtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuRElSRUNUX0FOU1dFUiwgZGF0YVtTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSXSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFMsIGRhdGFbU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFNdLCB1cmxzKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGFuIGlucHV0LCBxdWVyeSBmb3IgYSBsaXN0IG9mIHNpbWlsYXIgcmVzdWx0cyBhbmQgc2V0IGludG8gc3RvcmFnZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgICAgIHRoZSBzdHJpbmcgdG8gYXV0b2NvbXBsZXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlVW5pdmVyc2FsIChpbnB1dCwgbmFtZXNwYWNlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5VW5pdmVyc2FsKGlucHV0KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke25hbWVzcGFjZX1gLCBkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGFuIGlucHV0LCBxdWVyeSBmb3IgYSBsaXN0IG9mIHNpbWlsYXIgcmVzdWx0cyBpbiB0aGUgcHJvdmlkZWQgdmVydGljYWxcbiAgICogYW5kIHNldCBpbnRvIHN0b3JhZ2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0ICAgICAgIHRoZSBzdHJpbmcgdG8gYXV0b2NvbXBsZXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmVydGljYWxLZXkgdGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIGV4cGVyaWVuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJhcktleSAgICAgIHRoZSBiYXIga2V5IGZvciB0aGUgZXhwZXJpZW5jZVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlVmVydGljYWwgKGlucHV0LCBuYW1lc3BhY2UsIHZlcnRpY2FsS2V5LCBiYXJLZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0NvbXBsZXRlXG4gICAgICAucXVlcnlWZXJ0aWNhbChpbnB1dCwgdmVydGljYWxLZXksIGJhcktleSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkFVVE9DT01QTEVURX0uJHtuYW1lc3BhY2V9YCwgZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhbiBpbnB1dCwgcHJvdmlkZSBhIGxpc3Qgb2Ygc3VpdGFibGUgZmlsdGVycyBmb3IgYXV0b2NvbXBsZXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0ICAgICAgICAgdGhlIHN0cmluZyB0byBzZWFyY2ggZm9yIGZpbHRlcnMgd2l0aFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlICAgICB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbEtleSAgIHRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBleHBlcmllbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiYXJLZXkgICAgICAgIHRoZSBiYXIga2V5IGZvciB0aGUgZXhwZXJpZW5jZVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlRmlsdGVyIChpbnB1dCwgbmFtZXNwYWNlLCB2ZXJ0aWNhbEtleSwgYmFyS2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5RmlsdGVyKGlucHV0LCB2ZXJ0aWNhbEtleSwgYmFyS2V5KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke25hbWVzcGFjZX1gLCBkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgZ2l2ZW4gcXVlcnkgaW50byBzdG9yYWdlLCB0byBiZSB1c2VkIGZvciB0aGUgbmV4dCBzZWFyY2hcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBxdWVyeSB0byBzdG9yZVxuICAgKi9cbiAgc2V0UXVlcnkgKHF1ZXJ5KSB7XG4gICAgdGhpcy5zdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWSwgcXVlcnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgcHJvdmlkZWQgcXVlcnkgSUQsIHRvIGJlIHVzZWQgaW4gYW5hbHl0aWNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeUlkIFRoZSBxdWVyeSBpZCB0byBzdG9yZVxuICAgKi9cbiAgc2V0UXVlcnlJZCAocXVlcnlJZCkge1xuICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFUllfSUQsIHF1ZXJ5SWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgZ2l2ZW4gZmlsdGVyIGludG8gc3RvcmFnZSwgdG8gYmUgdXNlZCBmb3IgdGhlIG5leHQgc2VhcmNoXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKiBAcGFyYW0ge0ZpbHRlcn0gZmlsdGVyICAgIHRoZSBmaWx0ZXIgdG8gc2V0XG4gICAqL1xuICBzZXRGaWx0ZXIgKG5hbWVzcGFjZSwgZmlsdGVyKSB7XG4gICAgdGhpcy5zdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7bmFtZXNwYWNlfWAsIGZpbHRlcik7XG4gIH1cblxuICBvbiAoZXZ0LCBtb2R1bGVJZCwgY2IpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLm9uKGV2dCwgbW9kdWxlSWQsIGNiKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQ29tcG9uZW50TWFuYWdlciAqL1xuXG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuXG4vKipcbiAqIENvbXBvbmVudE1hbmFnZXIgaXMgYSBTaW5nbGV0b25lIHRoYXQgY29udGFpbnMgYm90aCBhbiBpbnRlcm5hbCByZWdpc3RyeSBvZlxuICogZWxpZ2libGUgY29tcG9uZW50cyB0byBiZSBjcmVhdGVkLCBhcyB3ZWxsIGFzIGtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50XG4gKiBpbnN0YW50aWF0ZWQgYW5kIGFjdGl2ZSBjb21wb25lbnRzLlxuICpcbiAqIEFMTCBjb21wb25lbnRzIHNob3VsZCBiZSBjb25zdHJ1Y3RlZCB1c2luZyB0aGUge0NvbXBvbmVudE1hbmFnZXJ9IHZpYSBpdHMgYGNyZWF0ZWAgbWV0aG9kLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIGlmICghQ29tcG9uZW50TWFuYWdlci5zZXRJbnN0YW5jZSh0aGlzKSkge1xuICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9uZW50IHJlZ2lzdHJ5IGlzIGFuIGludGVybmFsIG1hcCwgdGhhdCBjb250YWluc1xuICAgICAqIGFsbCBhdmFpbGFibGUgY29tcG9uZW50IENMQVNTRVMgdXNlZCBmb3IgY3JlYXRpb24gb3Igb3ZlcnJpZGUuXG4gICAgICogRWFjaCBjb21wb25lbnQgY2xhc3MgaGFzIGEgdW5pcXVlIFRZUEUsIHdoaWNoIGlzIHVzZWQgYXMgdGhlIGtleSBmb3IgdGhlIHJlZ2lzdHJ5XG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9jb21wb25lbnRSZWdpc3RyeSA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFjdGl2ZSBjb21wb25lbnRzIGlzIGFuIGludGVybmFsIGNvbnRhaW5lciB0byBrZWVwIHRyYWNrXG4gICAgICogb2YgYWxsIG9mIHRoZSBjb21wb25lbnRzIHRoYXQgaGF2ZSBiZWVuIGNvbnN0cnVjdGVkXG4gICAgICovXG4gICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNvcmUgbGlicmFyeSBkZXBlbmRlbmN5XG4gICAgICpcbiAgICAgKiBUaGUgQ29yZSBjb250YWlucyBib3RoIHRoZSBzdG9yYWdlIEFORCBzZXJ2aWNlcyB0aGF0IGFyZSBuZWVkZWQgZm9yIHBlcmZvcm1pbmcgb3BlcmF0aW9uc1xuICAgICAqIGxpa2Ugc2VhcmNoIGFuZCBhdXRvIGNvbXBsZXRlLlxuICAgICAqXG4gICAgICogVGhlIHN0b3JhZ2UgaXMgdGhlIHNvdXJjZSBvZiB0cnV0aCBmb3IgdGhlIHN0YXRlIG9mIEFMTCBjb21wb25lbnRzLlxuICAgICAqIFdoZW5ldmVyIHRoZSBzdG9yYWdlIGlzIHVwZGF0ZWQsIHRoZSBzdGF0ZSBnZXRzIHB1c2hlZCBkb3duIHRvIHRoZSBuZWNlc3NhcnkgY29tcG9uZW50cy5cbiAgICAgKiBAdHlwZSB7Q29yZX1cbiAgICAgKi9cbiAgICB0aGlzLl9jb3JlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBwcmltYXJ5IHJlbmRlcmVyIHRvIHVzZSBmb3IgYWxsIGNvbXBvbmVudHNcbiAgICAgKiBAdHlwZSB7SGFuZGxlYmFyc1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3JlbmRlcmVyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBhbmFseXRpY3MgcmVwb3J0ZXIgZGVwZW5kZW5jeVxuICAgICAqL1xuICAgIHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyID0gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBzZXRJbnN0YW5jZSAoaW5zdGFuY2UpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UgKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgc2V0UmVuZGVyZXIgKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldENvcmUgKGNvcmUpIHtcbiAgICB0aGlzLl9jb3JlID0gY29yZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldEFuYWx5dGljc1JlcG9ydGVyIChyZXBvcnRlcikge1xuICAgIHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyID0gcmVwb3J0ZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXJzIGEgY29tcG9uZW50IHRvIGJlIGVsaWdpYmxlIGZvciBjcmVhdGlvbiBhbmQgb3ZlcnJpZGUuXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBUaGUgQ29tcG9uZW50IENsYXNzIHRvIHJlZ2lzdGVyXG4gICAqL1xuICByZWdpc3RlciAoY29tcG9uZW50Q2xhenopIHtcbiAgICB0aGlzLl9jb21wb25lbnRSZWdpc3RyeVtjb21wb25lbnRDbGF6ei50eXBlXSA9IGNvbXBvbmVudENsYXp6O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZSBpcyB0aGUgZW50cnkgcG9pbnQgZm9yIGNvbnN0cnVjdGluZyBhbnkgYW5kIGFsbCBjb21wb25lbnRzLlxuICAgKiBJdCB3aWxsIGluc3RhbnRpYXRlIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQsIGFuZCBib3RoIGFwcGx5XG4gICAqIGluaXRpYWwgc3RhdGUgZnJvbSB0aGUgc3RvcmFnZSBhbmQgYmluZCBpdCB0byB0aGUgc3RvcmFnZSBmb3IgdXBkYXRlcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudFR5cGUgVGhlIGNvbXBvbmVudCB0eXBlIHRvIGNyZWF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBUaGUgb3B0aW9ucyB0byBwaXBlIHRvIHRoZSBjb25zdHJ1Y3Rpb24gb2YgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgY3JlYXRlIChjb21wb25lbnRUeXBlLCBvcHRzKSB7XG4gICAgLy8gRXZlcnkgY29tcG9uZW50IG5lZWRzIGxvY2FsIGFjY2VzcyB0byB0aGUgY29tcG9uZW50IG1hbmFnZXJcbiAgICAvLyBiZWNhdXNlIHNvbWV0aW1lcyBjb21wb25lbnRzIGhhdmUgc3ViY29tcG9uZW50cyB0aGF0IG5lZWQgdG8gYmVcbiAgICAvLyBjb25zdHJ1Y3RlZCBkdXJpbmcgY3JlYXRpb25cbiAgICBvcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb3JlOiB0aGlzLl9jb3JlLFxuICAgICAgcmVuZGVyZXI6IHRoaXMuX3JlbmRlcmVyLFxuICAgICAgYW5hbHl0aWNzUmVwb3J0ZXI6IHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyLFxuICAgICAgY29tcG9uZW50TWFuYWdlcjogdGhpc1xuICAgIH0sIG9wdHMpO1xuXG4gICAgbGV0IGNvbXBvbmVudENsYXNzID0gdGhpcy5fY29tcG9uZW50UmVnaXN0cnlbY29tcG9uZW50VHlwZV07XG5cbiAgICBpZiAoXG4gICAgICAhY29tcG9uZW50Q2xhc3MuYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkKCkgJiZcbiAgICAgIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMuc29tZShjID0+IGMubmFtZSA9PT0gb3B0cy5uYW1lKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgYEFub3RoZXIgY29tcG9uZW50IHdpdGggbmFtZSAke29wdHMubmFtZX0gYWxyZWFkeSBleGlzdHNgLFxuICAgICAgICBjb21wb25lbnRUeXBlKTtcbiAgICB9XG5cbiAgICAvLyBJbnN0YW50aWF0ZSBvdXIgbmV3IGNvbXBvbmVudCBhbmQga2VlcCB0cmFjayBvZiBpdFxuICAgIGxldCBjb21wb25lbnQgPVxuICAgICAgbmV3IHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5W2NvbXBvbmVudFR5cGVdKG9wdHMpXG4gICAgICAgIC5pbml0KG9wdHMpO1xuXG4gICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIGxvY2FsIHN0b3JhZ2UgdG8gcG93ZXIgc3RhdGUsIGFwcGx5IHRoZSBzdGF0ZVxuICAgIC8vIGZyb20gdGhlIHN0b3JhZ2UgdG8gdGhlIGNvbXBvbmVudCwgYW5kIHRoZW4gYmluZCB0aGUgY29tcG9uZW50XG4gICAgLy8gc3RhdGUgdG8gdGhlIHN0b3JhZ2UgdmlhIGl0cyB1cGRhdGVzXG4gICAgaWYgKHRoaXMuX2NvcmUgJiYgdGhpcy5fY29yZS5zdG9yYWdlICE9PSBudWxsKSB7XG4gICAgICBpZiAoY29tcG9uZW50Lm1vZHVsZUlkID09PSB1bmRlZmluZWQgfHwgY29tcG9uZW50Lm1vZHVsZUlkID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NvcmUuc3RvcmFnZVxuICAgICAgICAub24oJ3VwZGF0ZScsIGNvbXBvbmVudC5tb2R1bGVJZCwgKGRhdGEpID0+IHtcbiAgICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnQ7XG4gIH1cblxuICBnZXRBY3RpdmVDb21wb25lbnQgKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5maW5kKGMgPT4gYy5jb25zdHJ1Y3Rvci50eXBlID09PSB0eXBlKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVuZGVyZXIgKi9cblxuLyoqXG4gKiBSZW5kZXJlciBpcyBhbiBhYnN0cmFjdCBjbGFzcyB0aGF0IGFsbCBSZW5kZXJlcnMgc2hvdWxkIGV4dGVuZCBhbmQgaW1wbGVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcbiAgLyoqXG4gICAqIHJlbmRlciBpcyBhIGNvcmUgbWV0aG9kIGZvciBhbGwgcmVuZGVyZXJzLlxuICAgKiBBbGwgaW1wbGVtZW50YXRpb25zIHNob3VsZCBvdmVycmlkZSB0aGlzIGNsYXNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKi9cbiAgcmVuZGVyICh0ZW1wbGF0ZSwgZGF0YSkge1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHJlZ2lzdGVySGVscGVyIChuYW1lLCBjYikge1xuXG4gIH1cblxuICBjb21waWxlICh0ZW1wbGF0ZSkge1xuXG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEhhbmRsZWJhcnNSZW5kZXJlciAqL1xuXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbi8qKlxuICogSGFuZGxlYmFyc1JlbmRlcmVyIGlzIGEgd3JhcHBlciBhcm91bmQgdGhlIG5hdGl2YXRlIGhhbmRsZWJhcnMgcmVuZGVyZXIuXG4gKiBAZXh0ZW5kcyBSZW5kZXJlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYW5kbGViYXJzUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yICh0ZW1wbGF0ZXMgPSB7fSwgb3B0cyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBoYW5kbGViYXJzIGNvbXBpbGVyXG4gICAgICogQHR5cGUge0hhbmRsZWJhcnN9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9oYW5kbGViYXJzID0gdGVtcGxhdGVzLl9oYiB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIHByZS1jb21waWxlZCBoYW5kbGViYXJzIHRlbXBsYXRlc1xuICAgICAqIEB0eXBlIHtIYW5kbGViYXJzfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVzID0gdGVtcGxhdGVzIHx8IHt9O1xuICB9XG5cbiAgaW5pdCAodGVtcGxhdGVzKSB7XG4gICAgLy8gQXNzaWduIHRoZSBoYW5kbGViYXJzIGNvbXBpbGVyIGFuZCB0ZW1wbGF0ZXMgYmFzZWQgb25cbiAgICAvLyBpbmZvcm1hdGlvbiBwcm92aWRlZCBmcm9tIGV4dGVybmFsIGRlcCAoaW4gZGVmYXVsdCBjYXNlLCBpdCBjb21lcyBmcm9tIGV4dGVybmFsIHNlcnZlciByZXF1ZXN0KVxuICAgIHRoaXMuX2hhbmRsZWJhcnMgPSB0ZW1wbGF0ZXMuX2hiO1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHRlbXBsYXRlcztcblxuICAgIC8vIFRPRE8oYmlsbHkpIE9uY2Ugd2UgcmUtd3JpdGUgdGVtcGxhdGVzIHVzaW5nIHRoZSBuZXcgaGVscGVycyBsaWJyYXJ5XG4gICAgLy8gd2UgcHJvYmFibHkgZG9uJ3QgbmVlZCB0aGVzZSBjdXN0b20gaGVscGVycyBhbnltb3JlXG4gICAgdGhpcy5fcmVnaXN0ZXJDdXN0b21IZWxwZXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXJIZWxwZXIgaXMgYSBwdWJsaWMgaW50ZXJmYWNlIGZvciBleHRlcm5hbCBkZXBlbmRlbmNpZXMgdG9cbiAgICogcmVnaXN0ZXIgdGhlaXIgb3duIGN1c3RvbSBoZWxwZXJzIHRvIG91ciBpbnRlcm5hbCBIYW5kbGViYXJzIENvbXBpbGVyXG4gICAqL1xuICByZWdpc3RlckhlbHBlciAobmFtZSwgY2IpIHtcbiAgICB0aGlzLl9oYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKG5hbWUsIGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb21waWxlIGEgaGFuZGxlYmFycyB0ZW1wbGF0ZSBzbyB0aGF0IGl0IGNhbiBiZSByZW5kZXJlZCxcbiAgICogdXNpbmcgdGhlIHtIYW5kbGViYXJzfSBjb21waWxlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgVGhlIHRlbXBsYXRlIHN0cmluZyB0byBjb21waWxlXG4gICAqL1xuICBjb21waWxlICh0ZW1wbGF0ZSkge1xuICAgIGlmICh0eXBlb2YgdGVtcGxhdGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9oYW5kbGViYXJzLmNvbXBpbGUodGVtcGxhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbmRlciB3aWxsIHJlbmRlciBhIHRlbXBsYXRlIHdpdGggZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFByb3ZpZGUgZWl0aGVyIGEgdGVtcGxhdGVOYW1lIG9yIGEgcHJlLWNvbXBpbGVkIHRlbXBsYXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHByb3ZpZGUgdG8gdGhlIHRlbXBsYXRlXG4gICAqL1xuICByZW5kZXIgKGNvbmZpZywgZGF0YSkge1xuICAgIC8vIElmIGEgY3VzdG9tIHRlbXBsYXRlIGlzIHByb3ZpZGVkLCB1c2UgaXQsXG4gICAgLy8gb3RoZXJ3aXNlIGZhbGwgYmFjayB0byB0aGUgdGVtcGxhdGUgbmFtZVxuICAgIC8vIFRPRE8oYmlsbHkpIFRoaXMgaW50ZXJmYWNlIHNob3VsZCBwcm9iYWJseSBiZSBsZXNzIHVnbHlcbiAgICBpZiAoY29uZmlnLnRlbXBsYXRlICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gY29uZmlnLnRlbXBsYXRlKGRhdGEpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVzW2NvbmZpZy50ZW1wbGF0ZU5hbWVdKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBmaW5kL3JlbmRlciB0ZW1wbGF0ZTogJyArIGNvbmZpZy50ZW1wbGF0ZU5hbWUsIGUpO1xuICAgIH1cbiAgfVxuXG4gIF9yZWdpc3RlckN1c3RvbUhlbHBlcnMgKCkge1xuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2lmZXEnLCBmdW5jdGlvbiAoYXJnMSwgYXJnMiwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIChhcmcxID09PSBhcmcyKSA/IG9wdGlvbnMuZm4odGhpcykgOiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdpZm5vdGVxJywgZnVuY3Rpb24gKGFyZzEsIGFyZzIsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiAoYXJnMSAhPT0gYXJnMikgPyBvcHRpb25zLmZuKHRoaXMpIDogb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignZm9ybWF0UGhvbmVOdW1iZXInLCBmdW5jdGlvbiAocGhvbmVOdW1iZXJTdHJpbmcpIHtcbiAgICAgIHZhciBjbGVhbmVkID0gKCcnICsgcGhvbmVOdW1iZXJTdHJpbmcpLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG4gICAgICB2YXIgbWF0Y2ggPSBjbGVhbmVkLm1hdGNoKC9eKDF8KT8oXFxkezN9KShcXGR7M30pKFxcZHs0fSkkLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdmFyIGludGxDb2RlID0gKG1hdGNoWzFdID8gJysxICcgOiAnJyk7XG4gICAgICAgIHJldHVybiBbaW50bENvZGUsICcoJywgbWF0Y2hbMl0sICcpICcsIG1hdGNoWzNdLCAnLScsIG1hdGNoWzRdXS5qb2luKCcnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignYXNzaWduJywgZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIG9wdGlvbnMgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmICghb3B0aW9ucy5kYXRhLnJvb3QpIHtcbiAgICAgICAgb3B0aW9ucy5kYXRhLnJvb3QgPSB7fTtcbiAgICAgIH1cblxuICAgICAgbGV0IHYgPSAnJztcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgdiA9IHYgKyBhcmdzW2ldO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLmRhdGEucm9vdFtuYW1lXSA9IHY7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdqc29uJywgZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gbmFtZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgID8gJydcbiAgICAgICAgOiBKU09OLnN0cmluZ2lmeShuYW1lKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEhhbmRsZWJhcnNSZW5kZXJlciBmcm9tICcuL2hhbmRsZWJhcnNyZW5kZXJlcic7XG5cbi8vIEluIHRoZSBmdXR1cmUsIHRoaXMgd2lsbCBjb250YWluIGFsbCBkaWZmZXJlbnQgdHlwZXMgb2YgcmVuZGVyZXJzXG4vLyBFLmcuIE11c3RhY2hlLCBTT1ksIEhhbmRsZUJhcnMsIFJlYWN0LCBldGMuXG5leHBvcnQgY29uc3QgUmVuZGVyZXJzID0ge1xuICBTT1k6IFJlbmRlcmVyLFxuICBIYW5kbGViYXJzOiBIYW5kbGViYXJzUmVuZGVyZXJcbn07XG4iLCIvKiogQG1vZHVsZSBET00gKi9cblxuLyogZ2xvYmFsIEhUTUxFbGVtZW50LCBIVE1MRG9jdW1lbnQsIFdpbmRvdywgRXZlbnQgKi9cblxubGV0IGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuXG4vKipcbiAqIFN0YXRpYyBpbnRlcmZhY2UgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIERPTSBBUEkuXG4gKiBAbmFtZXNwYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTSB7XG4gIHN0YXRpYyBzZXR1cCAoZCwgcCkge1xuICAgIGRvY3VtZW50ID0gZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGUgYSBIVE1MRWxlbWVudCBmcm9tIGFuZCBIVE1MIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gaHRtbCBUaGUgSFRNTCB0byBwYXJzZSB0byBhIERPTSBub2RlLlxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGUgKGh0bWwpIHtcbiAgICBpZiAoJ2NyZWF0ZVJhbmdlJyBpbiBkb2N1bWVudCkge1xuICAgICAgLy8gcHJlZmVyIHRoaXMgaW1wbGVtZW50YXRpb24gYXMgaXQgaGFzIHdpZGVyIGJyb3dzZXIgc3VwcG9ydFxuICAgICAgLy8gYW5kIGl0J3MgYmV0dGVyIHBlcmZvcm1pbmcuXG4gICAgICAvLyBzZWUgaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvY29udmVydC1odG1sLXN0aW5ncy1kb20tbm9kZXNcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGh0bWwpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWcpO1xuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvLyBmYWxsYmFjayB0byB0aGlzIGJlY2F1c2Ugb2YgYSBidWcgaW4ganNkb20gdGhhdCBjYXVzZXMgdGVzdHMgdG8gZmFpbFxuICAgIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pzZG9tL2pzZG9tL2lzc3Vlcy8zOTlcbiAgICByZXR1cm4gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC9odG1sJykuYm9keTtcbiAgfVxuXG4gIC8qKlxuICAgKiBxdWVyeSB0aGUgRE9NIGZvciBhIGdpdmVuIGNzcyBzZWxlY3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgT3B0aW9uYWwgY29udGV4dCB0byB1c2UgZm9yIGEgc2VhcmNoLiBEZWZhdWx0cyB0byBkb2N1bWVudCBpZiBub3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciB0aGUgQ1NTIHNlbGVjdG9yIHRvIHF1ZXJ5IGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IHRoZSBGSVJTVCBub2RlIGl0IGZpbmRzLCBpZiBhbnlcbiAgICovXG4gIHN0YXRpYyBxdWVyeSAocGFyZW50LCBzZWxlY3Rvcikge1xuICAgIC8vIEZhY2FkZSwgc2hpZnRpbmcgdGhlIHNlbGVjdG9yIHRvIHRoZSBwYXJlbnQgYXJndW1lbnQgaWYgb25seSBvbmVcbiAgICAvLyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RvciA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgV2luZG93IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTERvY3VtZW50KSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBxdWVyeSB0aGUgRE9NIGZvciBhIGdpdmVuIGNzcyBzZWxlY3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgT3B0aW9uYWwgY29udGV4dCB0byB1c2UgZm9yIGEgc2VhcmNoLiBEZWZhdWx0cyB0byBkb2N1bWVudCBpZiBub3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciB0aGUgQ1NTIHNlbGVjdG9yIHRvIHF1ZXJ5IGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IHRoZSBGSVJTVCBub2RlIGl0IGZpbmRzLCBpZiBhbnlcbiAgICovXG4gIHN0YXRpYyBxdWVyeUFsbCAocGFyZW50LCBzZWxlY3Rvcikge1xuICAgIC8vIEZhY2FkZSwgc2hpZnRpbmcgdGhlIHNlbGVjdG9yIHRvIHRoZSBwYXJlbnQgYXJndW1lbnQgaWYgb25seSBvbmVcbiAgICAvLyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RvciA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIC8vIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSBjbGllbnQgY29kZSBpcyB1c2luZyBhIHBvaW50ZXIgdG8gYSBkb20gbm9kZSBhbmQgaXQncyBudWxsLCBlLmcuIHRoaXMuX2NvbnRhaW5lclxuICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBXaW5kb3cpIHtcbiAgICAgIHJldHVybiBbc2VsZWN0b3JdO1xuICAgIH1cblxuICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gIH1cblxuICBzdGF0aWMgb25SZWFkeSAoY2IpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGVkJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKSB7XG4gICAgICBjYigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIERPTS5vbihkb2N1bWVudCwgJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlRWxlIHdpbGwgY3JlYXRlIGEge0hUTUxFbGVtZW50fSBhbmQgYXBwbHkgdGhlIHByb3BlcnRpZXMgYXR0cmlidXRlcyB0aHJvdWdoIGFuIG9iamVjdCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGVsIFRoZSBlbGVtZW50IGB0YWdgIG5hbWUgdG8gY29uc3RydWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzX2RhdGEgT3B0aW9uYWwgYXR0cmlidXRlcyB0byBhcHBseSB0byB0aGUgbmV3IEhUTUxFbGVtZW50XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlRWwgKGVsLCBvcHRzX2RhdGEgPSB7fSkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbCk7XG4gICAgbGV0IHByb3BzID0gT2JqZWN0LmtleXMob3B0c19kYXRhKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9wc1tpXSA9PT0gJ2NsYXNzJykge1xuICAgICAgICBET00uYWRkQ2xhc3Mobm9kZSwgb3B0c19kYXRhW3Byb3BzW2ldXSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBub2RlW3Byb3BzW2ldXSA9IG9wdHNfZGF0YVtwcm9wc1tpXV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgYXBwZW5kIChwYXJlbnQsIG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBub2RlID0gcGFyZW50O1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXJlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJlbnQgPSBET00ucXVlcnkocGFyZW50KTtcbiAgICB9XG5cbiAgICAvLyBTdXBwb3J0IEhUTUwgaW5qZWN0aW9uIGFzIHdlbGwgYXMgSFRNTEVsZW1lbnQgYXBwZW5kc1xuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyQmVnaW4nLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhZGRDbGFzcyAobm9kZSwgY2xhc3NOYW1lKSB7XG4gICAgbGV0IGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJywnKTtcbiAgICBsZXQgbGVuID0gY2xhc3Nlcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBub2RlLmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGVtcHR5IChwYXJlbnQpIHtcbiAgICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICBzdGF0aWMgY3NzIChzZWxlY3Rvciwgc3R5bGVzKSB7XG4gICAgbGV0IG5vZGUgPSBET00ucXVlcnkoc2VsZWN0b3IpO1xuXG4gICAgZm9yIChsZXQgcHJvcCBpbiBzdHlsZXMpIHtcbiAgICAgIG5vZGUuc3R5bGVbcHJvcF0gPSBzdHlsZXNbcHJvcF07XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGF0dHIgKHNlbGVjdG9yLCBhdHRyLCB2YWwpIHtcbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLnNldEF0dHJpYnV0ZShhdHRyLCB2YWwpO1xuICB9XG5cbiAgc3RhdGljIHRyaWdnZXIgKHNlbGVjdG9yLCBldmVudCwgc2V0dGluZ3MpIHtcbiAgICBsZXQgZSA9IG5ldyBFdmVudChldmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAnYnViYmxlcyc6IHRydWUsXG4gICAgICAnY2FuY2VsYWJsZSc6IHRydWVcbiAgICB9LCBzZXR0aW5ncyB8fCB7fSkpO1xuXG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5kaXNwYXRjaEV2ZW50KGUpO1xuICB9XG5cbiAgc3RhdGljIG9uIChzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgb2ZmIChzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZGVsZWdhdGUgKGN0eHQsIHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpIHtcbiAgICBsZXQgZWwgPSBET00ucXVlcnkoY3R4dCk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIHdoaWxlICghdGFyZ2V0LmlzRXF1YWxOb2RlKGVsKSkge1xuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgaGFuZGxlcihldmVudCwgdGFyZ2V0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU3RhdGUgKi9cblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi8uLi9jb3JlL2V2ZW50ZW1pdHRlci9ldmVudGVtaXR0ZXInO1xuXG4vKipcbiAqIFN0YXRlIGNvbnRhaW5zIHRoZSBkYXRhIGZvciB0aGUgY29tcG9uZW50XG4gKiBhbmQgZXhwb3NlcyBhbiB7RXZlbnRFbWl0dGVyfSBpbnRlcmZhY2Ugc28gdGhhdCBleHRlcm5hbFxuICogZGVwZW5kZW5jaWVzIGNhbiBsaXN0ZW4vaG9vayBzdWJzY3JpYmUgdG8gbWVzc2FnZXMvdXBkYXRlcy5cbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RhdGUgPSBkYXRhIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKiBOT1RFKGJpbGx5KTogRG9lcyBub3QgZmlyZSBhbiB1cGRhdGUgbWVzc2FnZVxuICAgKi9cbiAgaW5pdCAocHJvcCwgb3B0VmFsKSB7XG4gICAgdGhpcy5fc2V0KHByb3AsIG9wdFZhbCk7XG4gIH1cblxuICAvKipcbiAgICogc2V0dGVyIGZvciB0aGUgc3RhdGVcbiAgICogQHBhcmFtIHByb3Age3N0cmluZ3xPYmplY3R9IFRoZSBwcm9wZXJ0eSB0byBzZXRcbiAgICogQHBhcmFtIG9wdFZhbCBPcHRpb25hbCwgaWYgcHJvcCBpcyBhIHtzdHJpbmd9LCBpdCB3aWxsIGFzc2lnbiB0aGUgdmFsdWUgdG8gdGhhdCBwcm9wZXJ0eVxuICAgKi9cbiAgc2V0IChwcm9wLCBvcHRWYWwpIHtcbiAgICB0aGlzLl9zZXQocHJvcCwgb3B0VmFsKTtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldHRlciBmb3IgdGhlIHN0YXRlIGVuYWJsZXMgeW91IHRvIHVwZGF0ZSBhIHNpbmdsZSBwcm9wZXJ0eSwgb3IgY29tcGxldGUgc3RhdGVcbiAgICogZGVwZW5kaW5nIG9uIHRoZSBhcmd1bWVudHMgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSBwcm9wIHtzdHJpbmd8T2JqZWN0fSBUaGUgcHJvcGVydHkgdG8gc2V0XG4gICAqIEBwYXJhbSBvcHRWYWwgSWYgcHJvcCBpcyBhIHtzdHJpbmd9LCBwcm92aWRlIGl0cyB2YWx1ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NldCAocHJvcCwgb3B0VmFsKSB7XG4gICAgaWYgKG9wdFZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9zdGF0ZSA9IHByb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0YXRlW3Byb3BdID0gb3B0VmFsO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSAoZGF0YSkge1xuICAgIHRoaXMuX3N0YXRlID0gZGF0YTtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGEgcHJvcGVydGllcyB2YWx1ZSBmcm9tIHRoZSBzdGF0ZVxuICAgKiBJZiBubyBwcm9wZXJ0eSBwcm92aWRlZCwgcmV0dXJuIHRoZSBmdWxsIHN0YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRQcm9wIG9wdGlvbmFsIHByb3BlcnR5IHRvIHJldHJpZXZlXG4gICAqL1xuICBnZXQgKG9wdFByb3ApIHtcbiAgICBpZiAob3B0UHJvcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zdGF0ZVtvcHRQcm9wXTtcbiAgfVxuXG4gIGhhcyAocHJvcCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZVtwcm9wXSAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgYXNKU09OICgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gIH1cbn1cbiIsIi8qKlxuICogTW9kZWwgZm9yIHRoZSBhbmFseXRpY3MgZXZlbnQgdHlwZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmFseXRpY3NFdmVudCB7XG4gIGNvbnN0cnVjdG9yICh0eXBlLCBsYWJlbCkge1xuICAgIHRoaXMuZXZlbnRUeXBlID0gdHlwZS50b1VwcGVyQ2FzZSgpO1xuICAgIGlmIChsYWJlbCkge1xuICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBwcm92aWRlZCBvcHRpb25zIHRvIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBBZGRpdGlvbmFsIG9wdGlvbnMgZm9yIHRoZSBldmVudFxuICAgKi9cbiAgYWRkT3B0aW9ucyAob3B0aW9ucykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBldmVudCBpbiB0aGUgYXBpIGZvcm1hdCwgdHlwaWNhbGx5IGZvciByZXBvcnRpbmcgdG8gdGhlIGFwaVxuICAgKi9cbiAgdG9BcGlFdmVudCAoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBbmFseXRpY3NSZXBvcnRlciAqL1xuXG5pbXBvcnQgQW5hbHl0aWNzRXZlbnQgZnJvbSAnLi9hbmFseXRpY3NldmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCB7IEFOQUxZVElDU19CQVNFX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgSHR0cFJlcXVlc3RlciBmcm9tICcuLi9odHRwL2h0dHByZXF1ZXN0ZXInO1xuXG4vKipcbiAqIENsYXNzIGZvciByZXBvcnRpbmcgYW5hbHl0aWNzIGV2ZW50cyB0byB0aGUgc2VydmVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuYWx5dGljc1JlcG9ydGVyIHtcbiAgY29uc3RydWN0b3IgKGNvcmUsIGFuc3dlcnNLZXksIGJ1c2luZXNzSWQsIGdsb2JhbE9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuX2J1c2luZXNzSWQgPSBidXNpbmVzc0lkO1xuXG4gICAgLyoqXG4gICAgICogT3B0aW9ucyB0byBpbmNsdWRlIHdpdGggZXZlcnkgYW5hbHl0aWMgZXZlbnQgcmVwb3J0ZWQgdG8gdGhlIHNlcnZlclxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9nbG9iYWxPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZ2xvYmFsT3B0aW9ucywgeyBhbnN3ZXJzS2V5IH0pO1xuXG4gICAgLy8gbGlzdGVuIHRvIHF1ZXJ5IGlkIHVwZGF0ZXNcbiAgICBjb3JlLnN0b3JhZ2Uub24oJ3VwZGF0ZScsIFN0b3JhZ2VLZXlzLlFVRVJZX0lELCBpZCA9PiB0aGlzLnNldFF1ZXJ5SWQoaWQpKTtcbiAgfVxuXG4gIHNldFF1ZXJ5SWQgKHF1ZXJ5SWQpIHtcbiAgICB0aGlzLl9nbG9iYWxPcHRpb25zLnF1ZXJ5SWQgPSBxdWVyeUlkO1xuICB9XG5cbiAgcmVwb3J0IChldmVudCkge1xuICAgIGlmICghKGV2ZW50IGluc3RhbmNlb2YgQW5hbHl0aWNzRXZlbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0FuYWx5dGljc0Vycm9yKCdUcmllZCB0byBzZW5kIGludmFsaWQgYW5hbHl0aWNzIGV2ZW50JywgZXZlbnQpO1xuICAgIH1cblxuICAgIGV2ZW50LmFkZE9wdGlvbnModGhpcy5fZ2xvYmFsT3B0aW9ucyk7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IEh0dHBSZXF1ZXN0ZXIoKTtcblxuICAgIHJldHVybiByZXF1ZXN0LmJlYWNvbihcbiAgICAgIGAke0FOQUxZVElDU19CQVNFX1VSTH0vcmVhbHRpbWVhbmFseXRpY3MvZGF0YS9hbnN3ZXJzLyR7dGhpcy5fYnVzaW5lc3NJZH1gLFxuICAgICAgeyAnZGF0YSc6IGV2ZW50LnRvQXBpRXZlbnQoKSB9XG4gICAgKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2hBcGkgfSBmcm9tICcuL3NlYXJjaC9zZWFyY2hhcGknO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBbmFseXRpY3NSZXBvcnRlciB9IGZyb20gJy4vYW5hbHl0aWNzL2FuYWx5dGljc3JlcG9ydGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kdWxlRGF0YSB9IGZyb20gJy4vc3RvcmFnZS9tb2R1bGVkYXRhJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZS9zdG9yYWdlJztcbiIsIi8qKiBAbW9kdWxlIENvbXBvbmVudCAqL1xuXG5pbXBvcnQgeyBSZW5kZXJlcnMgfSBmcm9tICcuLi9yZW5kZXJpbmcvY29uc3QnO1xuXG5pbXBvcnQgRE9NIGZyb20gJy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0YXRlIGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgQW5hbHl0aWNzUmVwb3J0ZXIgfSBmcm9tICcuLi8uLi9jb3JlJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcblxuLyoqXG4gKiBDb21wb25lbnQgaXMgYW4gYWJzdHJhY3Rpb24gdGhhdCBlbmNhcHN1bGF0ZXMgc3RhdGUsIGJlaGF2aW9yLFxuICogYW5kIHZpZXcgZm9yIGEgcGFydGljdWxhciBjaHVuayBvZiBmdW5jdGlvbmFsaXR5IG9uIHRoZSBwYWdlLlxuICpcbiAqIFRoZSBBUEkgZXhwb3NlcyBldmVudCBsaWZlIGN5Y2xlIGhvb2tzIGZvciB3aGVuIHRoaW5ncyBhcmUgcmVuZGVyZWQsXG4gKiBtb3VudGVkLCBjcmVhdGVkLCBldGMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yICh0eXBlLCBjb25maWcgPSB7fSkge1xuICAgIC8vIFNpbXBsZSBmYWNhZGUgcGF0dGVybiB0byBlbmFibGUgdGhlIHVzZXIgdG8gcGFzcyBhIHNpbmdsZSBvYmplY3RcbiAgICAvLyBjb250YWluaW5nIGFsbCB0aGUgbmVjZXNzYXJ5IG9wdGlvbnMgYW5kIHNldHRpbmdzXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uZmlnID0gdHlwZTtcbiAgICAgIHR5cGUgPSBjb25maWcudHlwZTtcbiAgICB9XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFVuaXF1ZSBuYW1lIG9mIHRoaXMgY29tcG9uZW50IGluc3RhbmNlXG4gICAgICogVXNlZCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIG90aGVyIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgdHlwZVxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5uYW1lID0gY29uZmlnLm5hbWUgfHwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gICAgLyoqXG4gICAgICogQ2FjaGUgdGhlIG9wdGlvbnMgc28gdGhhdCB3ZSBjYW4gcHJvcG9nYXRlIHByb3Blcmx5IHRvIGNoaWxkIGNvbXBvbmVudHNcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcblxuICAgIC8qKlxuICAgICAqIEFuIGlkZW50aWZpZXIgdXNlZCB0byBjbGFzc2lmeSB0aGUgdHlwZSBvZiBjb21wb25lbnQuXG4gICAgICogVGhlIGNvbXBvbmVudCBtYW5hZ2VyIHVzZXMgdGhpcyBpbmZvcm1hdGlvbiBpbiBvcmRlciB0byBwZXJzaXN0IGFuZCBvcmdhbml6ZSBjb21wb25lbnRzXG4gICAgICogQHR5cGUge3N0cmluZ3xDb21wb25lbnRUeXBlfVxuICAgICAqL1xuICAgIHRoaXMuX3R5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgcGFyZW50IGNvbXBvbmVudCwgaWYgZXhpc3RzXG4gICAgICogQHR5cGUge0NvbXBvbmVudH1cbiAgICAgKi9cbiAgICB0aGlzLl9wYXJlbnQgPSBjb25maWcucGFyZW50IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGNvbnRhaW5lciBmb3IgYWxsIHRoZSBjaGlsZCBjb21wb25lbnRzXG4gICAgICogQHR5cGUge0NvbXBvbmVudFtdfVxuICAgICAqL1xuICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3RhdGUgKGRhdGEpIG9mIHRoZSBjb21wb25lbnQgdG8gYmUgcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlIGZvciByZW5kZXJpbmdcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX3N0YXRlID0gbmV3IFN0YXRlKGNvbmZpZy5zdGF0ZSk7XG5cbiAgICAvKipcbiAgICAgKiBUT0RPKGJpbGx5KSBUaGlzIHNob3VsZCBiZSAnc2VydmljZXMnXG4gICAgICovXG4gICAgdGhpcy5jb3JlID0gY29uZmlnLmNvcmUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlciwgd2hpY2ggY29udGFpbnMgYWxsIG9mIHRoZSBjb21wb25lbnQgY2xhc3Nlc1xuICAgICAqIGVsaWdpYmxlIHRvIGJlIGNyZWF0ZWRcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50TWFuYWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIgPSBjb25maWcuY29tcG9uZW50TWFuYWdlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGFuYWx5dGljcyByZXBvcnRlciwgdXNlZCB0byByZXBvcnQgZXZlbnRzIGZvciB0aGlzIGNvbXBvbmVudFxuICAgICAqIEB0eXBlIHtBbmFseXRpY3NSZXBvcnRlcn1cbiAgICAgKi9cbiAgICB0aGlzLmFuYWx5dGljc1JlcG9ydGVyID0gY29uZmlnLmFuYWx5dGljc1JlcG9ydGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBPcHRpb25zIHRvIGluY2x1ZGUgd2l0aCBhbGwgYW5hbHl0aWMgZXZlbnRzIHNlbnQgYnkgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYW5hbHl0aWNzT3B0aW9ucyA9IGNvbmZpZy5hbmFseXRpY3NPcHRpb25zIHx8IHt9O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIERPTSBub2RlIHRoYXQgdGhlIGNvbXBvbmVudCB3aWxsIGJlIGFwcGVuZGVkIHRvIHdoZW4gbW91bnRlZC9yZW5kZXJlZC5cbiAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICovXG4gICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gbnVsbCkge1xuICAgICAgaWYgKHR5cGVvZiBjb25maWcuY29udGFpbmVyICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgYGNvbnRhaW5lcmAgb3B0aW9uIGZvciBjb21wb25lbnQgY29uZmlndXJhdGlvbi4gTXVzdCBiZSBvZiB0eXBlIGBzdHJpbmdgLicpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29udGFpbmVyID0gRE9NLnF1ZXJ5KGNvbmZpZy5jb250YWluZXIpIHx8IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IERPTS5xdWVyeSh0aGlzLl9wYXJlbnQuX2NvbnRhaW5lciwgY29uZmlnLmNvbnRhaW5lcik7XG5cbiAgICAgIC8vIElmIHdlIGhhdmUgYSBwYXJlbnQsIGFuZCB0aGUgY29udGFpbmVyIGlzIG1pc3NpbmcgZnJvbSB0aGUgRE9NLFxuICAgICAgLy8gd2UgY29uc3RydWN0IHRoZSBjb250YWluZXIgYW5kIGFwcGVuZCBpdCB0byB0aGUgcGFyZW50XG4gICAgICBpZiAodGhpcy5fY29udGFpbmVyID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IERPTS5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiBjb25maWcuY29udGFpbmVyLnN1YnN0cmluZygxLCBjb25maWcuY29udGFpbmVyLmxlbmd0aClcbiAgICAgICAgfSk7XG4gICAgICAgIERPTS5hcHBlbmQodGhpcy5fcGFyZW50Ll9jb250YWluZXIsIHRoaXMuX2NvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBjb250YWluZXIgRE9NIG5vZGU6ICcgKyBjb25maWcuY29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIGN1c3RvbSBjbGFzcyB0byBiZSBhcHBsaWVkIHRvIHt0aGlzLl9jb250YWluZXJ9IG5vZGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2NsYXNzTmFtZSA9IGNvbmZpZy5jbGFzcyB8fCAnY29tcG9uZW50JztcblxuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIHJlbmRlciBmdW5jdGlvbiB0byBiZSB1c2VkIGluc3RlYWQgb2YgdXNpbmcgdGhlIGRlZmF1bHQgcmVuZGVyZXJcbiAgICAgKiBAdHlwZSB7UmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyID0gY29uZmlnLnJlbmRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGRlZmF1bHQge1JlbmRlcmVyfSB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgcmVuZGVyaW5nIHRoZSB0ZW1wbGF0ZVxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXJlciA9IGNvbmZpZy5yZW5kZXJlciB8fCBSZW5kZXJlcnMuSGFuZGxlYmFycztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSBzdHJpbmcgdG8gdXNlIGZvciByZW5kZXJpbmcgdGhlIGNvbXBvbmVudFxuICAgICAqIElmIHRoaXMgaXMgbGVmdCBlbXB0eSwgd2UgbG9va3VwIHRoZSB0ZW1wbGF0ZSB0aGUgYmFzZSB0ZW1wbGF0ZXMgdXNpbmcgdGhlIHRlbXBsYXRlTmFtZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGUgPSBjb25maWcudGVtcGxhdGUgPyB0aGlzLl9yZW5kZXJlci5jb21waWxlKGNvbmZpZy50ZW1wbGF0ZSkgOiBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlTmFtZSB0byB1c2UgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50LlxuICAgICAqIFRoaXMgaXMgb25seSB1c2VkIGlmIF90ZW1wbGF0ZSBpcyBlbXB0eS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IGNvbmZpZy50ZW1wbGF0ZU5hbWUgfHwgJ2RlZmF1bHQnO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgc3RhdGUgaW5kaWNhdGluZyB3aGV0aGVyIG9yIG5vdCB0aGUgY29tcG9uZW50IGhhcyBiZWVuIG1vdW50ZWQgdG8gdGhlIERPTVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrLCB0aGF0cyB1c2VkIHRvIHRyYW5zZm9ybSB0aGUgaW50ZXJuYWwgZGF0YVxuICAgICAqIG1vZGVscyBvZiB0aGUgY29tcG9uZW50cywgYmVmb3JlIGl0IGdldHMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50IHN0YXRlLlxuICAgICAqIEJ5IGRlZmF1bHQsIG5vIHRyYW5zZm9ybWF0aW9uIGhhcHBlbnMuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMudHJhbnNmb3JtRGF0YSA9IGNvbmZpZy50cmFuc2Zvcm1EYXRhIHx8IHRoaXMudHJhbnNmb3JtRGF0YSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBjcmVhdGVkLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLm9uQ3JlYXRlID0gY29uZmlnLm9uQ3JlYXRlIHx8IHRoaXMub25DcmVhdGUgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnQgaXMgTW91bnRlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vbk1vdW50ID0gY29uZmlnLm9uTW91bnQgfHwgdGhpcy5vbk1vdW50IHx8IGZ1bmN0aW9uICgpIHsgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudHMgc3RhdGUgaXMgdXBkYXRlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vblVwZGF0ZSA9IGNvbmZpZy5vblVwZGF0ZSB8fCB0aGlzLm9uVXBkYXRlIHx8IGZ1bmN0aW9uICgpIHsgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdDb21wb25lbnQnO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaW5pdCAob3B0cykge1xuICAgIHRoaXMuc2V0U3RhdGUob3B0cy5kYXRhIHx8IG9wdHMuc3RhdGUgfHwge30pO1xuICAgIHRoaXMub25DcmVhdGUoKTtcbiAgICB0aGlzLl9zdGF0ZS5vbigndXBkYXRlJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgICAgdGhpcy5tb3VudCgpO1xuICAgIH0pO1xuXG4gICAgRE9NLmFkZENsYXNzKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB7IF9jb25maWc6IHRoaXMuX2NvbmZpZyB9LCBkYXRhKTtcbiAgICB0aGlzLl9zdGF0ZS5zZXQobmV3U3RhdGUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0U3RhdGUgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuZ2V0KHByb3ApO1xuICB9XG5cbiAgaGFzU3RhdGUgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuaGFzKHByb3ApO1xuICB9XG5cbiAgdHJhbnNmb3JtRGF0YSAoZGF0YSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYWRkQ2hpbGQgKGRhdGEsIHR5cGUsIG9wdHMpIHtcbiAgICBsZXQgY2hpbGRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKFxuICAgICAgdHlwZSxcbiAgICAgIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSwgb3B0cyB8fCB7fSwge1xuICAgICAgICBfcGFyZW50T3B0czogdGhpcy5fY29uZmlnXG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGNoaWxkQ29tcG9uZW50KTtcbiAgICByZXR1cm4gY2hpbGRDb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSByZW5kZXIgbWV0aG9kIHRvIGJlIHVzZWQgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlbmRlclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBzZXRSZW5kZXIgKHJlbmRlcikge1xuICAgIHRoaXMuX3JlbmRlciA9IHJlbmRlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHJlbmRlcmVyIGZvciB0aGUgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7UmVuZGVyZXJUeXBlfSByZW5kZXJlclxuICAgKi9cbiAgc2V0UmVuZGVyZXIgKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSBSZW5kZXJlcnNbcmVuZGVyZXJdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRlbXBsYXRlIGZvciB0aGUgY29tcG9uZW50IHRvIHVzZSB3aGVuIHJlbmRlcmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAgICovXG4gIHNldFRlbXBsYXRlICh0ZW1wbGF0ZSkge1xuICAgIHRoaXMuX3RlbXBsYXRlID0gdGhpcy5fcmVuZGVyZXIuY29tcGlsZSh0ZW1wbGF0ZSk7XG4gIH1cblxuICB1bk1vdW50ICgpIHtcbiAgICBET00uZW1wdHkodGhpcy5fY29udGFpbmVyKTtcbiAgfVxuXG4gIG1vdW50ICgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy51bk1vdW50KCk7XG4gICAgaWYgKHRoaXMuYmVmb3JlTW91bnQoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIERPTS5hcHBlbmQodGhpcy5fY29udGFpbmVyLCB0aGlzLnJlbmRlcih0aGlzLl9zdGF0ZS5hc0pTT04oKSkpO1xuXG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9vbk1vdW50KCk7XG5cbiAgICAvLyBBdHRhY2ggYW5hbHl0aWNzIGhvb2tzIGFzIG5lY2Vzc2FyeVxuICAgIGlmICh0aGlzLmFuYWx5dGljc1JlcG9ydGVyKSB7XG4gICAgICBsZXQgZG9tSG9va3MgPSBET00ucXVlcnlBbGwodGhpcy5fY29udGFpbmVyLCAnW2RhdGEtZXZlbnR0eXBlXTpub3QoW2RhdGEtaXMtYW5hbHl0aWNzLWF0dGFjaGVkXSknKTtcbiAgICAgIGRvbUhvb2tzLmZvckVhY2godGhpcy5fY3JlYXRlQW5hbHl0aWNzSG9vay5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9vbk1vdW50ICgpIHtcbiAgICB0aGlzLm9uTW91bnQodGhpcyk7XG4gICAgaWYgKHRoaXMuX2NoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgY2hpbGQuX29uTW91bnQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZW5kZXIgdGhlIHRlbXBsYXRlIHVzaW5nIHRoZSB7UmVuZGVyZXJ9IHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgYW5kIHRlbXBsYXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHJlbmRlciAoZGF0YSA9IHRoaXMuX3N0YXRlLmdldCgpKSB7XG4gICAgdGhpcy5iZWZvcmVSZW5kZXIoKTtcbiAgICBkYXRhID0gdGhpcy50cmFuc2Zvcm1EYXRhKGRhdGEpO1xuXG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICAvLyBVc2UgZWl0aGVyIHRoZSBjdXN0b20gcmVuZGVyIGZ1bmN0aW9uIG9yIHRoZSBpbnRlcm5hbCByZW5kZXJlclxuICAgIC8vIGRlcGVuZGFudCBvbiB0aGUgY29tcG9uZW50IGNvbmZpZ3VyYXRpb25cbiAgICBpZiAodHlwZW9mIHRoaXMuX3JlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaHRtbCA9IHRoaXMuX3JlbmRlcihkYXRhKTtcbiAgICAgIGlmICh0eXBlb2YgaHRtbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW5kZXIgbWV0aG9kIG11c3QgcmV0dXJuIEhUTUwgYXMgdHlwZSB7c3RyaW5nfScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZW5kZXIgdGhlIGV4aXN0aW5nIHRlbXBsYXRlcyBhcyBhIHN0cmluZ1xuICAgICAgaHRtbCA9IHRoaXMuX3JlbmRlcmVyLnJlbmRlcih7XG4gICAgICAgIHRlbXBsYXRlOiB0aGlzLl90ZW1wbGF0ZSxcbiAgICAgICAgdGVtcGxhdGVOYW1lOiB0aGlzLl90ZW1wbGF0ZU5hbWVcbiAgICAgIH0sIGRhdGEpO1xuICAgIH1cblxuICAgIC8vIFdlIGNyZWF0ZSBhbiBIVE1MIERvY3VtZW50IGZyYWdtZW50IHdpdGggdGhlIHJlbmRlcmVkIHN0cmluZ1xuICAgIC8vIFNvIHRoYXQgd2UgY2FuIHF1ZXJ5IGl0IGZvciBwcm9jZXNzaW5nIG9mIHN1YiBjb21wb25lbnRzXG4gICAgbGV0IGVsID0gRE9NLmNyZWF0ZShodG1sKTtcblxuICAgIC8vIFByb2Nlc3MgdGhlIERPTSB0byBkZXRlcm1pbmUgaWYgd2Ugc2hvdWxkIGNyZWF0ZVxuICAgIC8vIGluLW1lbW9yeSBzdWItY29tcG9uZW50cyBmb3IgcmVuZGVyaW5nXG4gICAgbGV0IGRvbUNvbXBvbmVudHMgPSBET00ucXVlcnlBbGwoZWwsICdbZGF0YS1jb21wb25lbnRdJyk7XG4gICAgZG9tQ29tcG9uZW50cy5mb3JFYWNoKGMgPT4gdGhpcy5fY3JlYXRlU3ViY29tcG9uZW50KGMsIGRhdGEpKTtcblxuICAgIHRoaXMuYWZ0ZXJSZW5kZXIoKTtcbiAgICByZXR1cm4gZWwuaW5uZXJIVE1MO1xuICB9XG5cbiAgX2NyZWF0ZVN1YmNvbXBvbmVudCAoZG9tQ29tcG9uZW50LCBkYXRhKSB7XG4gICAgbGV0IGRhdGFzZXQgPSBkb21Db21wb25lbnQuZGF0YXNldDtcbiAgICBsZXQgdHlwZSA9IGRhdGFzZXQuY29tcG9uZW50O1xuICAgIGxldCBwcm9wID0gZGF0YXNldC5wcm9wO1xuICAgIGxldCBvcHRzID0gZGF0YXNldC5vcHRzID8gSlNPTi5wYXJzZShkYXRhc2V0Lm9wdHMpIDoge307XG5cbiAgICAvLyBSZW5kZXJpbmcgYSBzdWIgY29tcG9uZW50IHNob3VsZCBiZSB3aXRoaW4gdGhlIGNvbnRleHQsXG4gICAgLy8gb2YgdGhlIG5vZGUgdGhhdCB3ZSBwcm9jZXNzZWQgaXQgZnJvbVxuICAgIG9wdHMgPSBPYmplY3QuYXNzaWduKG9wdHMsIHtcbiAgICAgIGNvbnRhaW5lcjogZG9tQ29tcG9uZW50XG4gICAgfSk7XG5cbiAgICBsZXQgY2hpbGREYXRhID0gZGF0YVtwcm9wXTtcblxuICAgIC8vIFRPRE8oYmlsbHkpIFJpZ2h0IG5vdywgaWYgd2UgcHJvdmlkZSBhbiBhcnJheSBhcyB0aGUgZGF0YSBwcm9wLFxuICAgIC8vIHRoZSBiZWhhdmlvciBpcyB0byBjcmVhdGUgbWFueSBjb21wb25lbnRzIGZvciBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5LlxuICAgIC8vIFRIQVQgaW50ZXJmYWNlIFNIT1VMRCBjaGFuZ2UgdG8gdXNlIGEgZGlmZmVyZW50IHByb3BlcnR5IHRoYXQgZGVmaW5lc1xuICAgIC8vIHdoZXRoZXIgdG8gYXJyYXkgZGF0YSBzaG91bGQgYmUgdXNlZCBmb3IgYSBzaW5nbGUgY29tcG9uZW50IG9yXG4gICAgLy8gdG8gY3JlYXRlIG1hbnkgY29tcG9uZW50cyBmb3IgZWFjaCBpdGVtLlxuICAgIC8vIE92ZXJsb2FkaW5nIGFuZCBoYXZpbmcgdGhpcyBzaWRlIGVmZmVjdCBpcyB1bmludHVpdGl2ZSBhbmQgV1JPTkdcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGREYXRhKSkge1xuICAgICAgbGV0IGNoaWxkQ29tcG9uZW50ID0gdGhpcy5hZGRDaGlsZChjaGlsZERhdGEsIHR5cGUsIG9wdHMpO1xuICAgICAgRE9NLmFwcGVuZChkb21Db21wb25lbnQsIGNoaWxkQ29tcG9uZW50LnJlbmRlcigpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UsIHJlbmRlciB0aGUgY29tcG9uZW50IGFzIGV4cGVjdGVkXG4gICAgbGV0IGNoaWxkSFRNTCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGREYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGRDb21wb25lbnQgPSB0aGlzLmFkZENoaWxkKGNoaWxkRGF0YVtpXSwgdHlwZSwgb3B0cyk7XG4gICAgICBjaGlsZEhUTUwucHVzaChjaGlsZENvbXBvbmVudC5yZW5kZXIoKSk7XG4gICAgfVxuXG4gICAgRE9NLmFwcGVuZChkb21Db21wb25lbnQsIGNoaWxkSFRNTC5qb2luKCcnKSk7XG4gIH1cblxuICBfY3JlYXRlQW5hbHl0aWNzSG9vayAoZG9tQ29tcG9uZW50KSB7XG4gICAgZG9tQ29tcG9uZW50LmRhdGFzZXQuaXNBbmFseXRpY3NBdHRhY2hlZCA9IHRydWU7XG4gICAgY29uc3QgZGF0YXNldCA9IGRvbUNvbXBvbmVudC5kYXRhc2V0O1xuICAgIGNvbnN0IHR5cGUgPSBkYXRhc2V0LmV2ZW50dHlwZTtcbiAgICBjb25zdCBsYWJlbCA9IGRhdGFzZXQuZXZlbnRsYWJlbDtcbiAgICBjb25zdCBvcHRpb25zID0gZGF0YXNldC5ldmVudG9wdGlvbnMgPyBKU09OLnBhcnNlKGRhdGFzZXQuZXZlbnRvcHRpb25zKSA6IHt9O1xuXG4gICAgRE9NLm9uKGRvbUNvbXBvbmVudCwgJ2NsaWNrJywgZSA9PiB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBBbmFseXRpY3NFdmVudCh0eXBlLCBsYWJlbCk7XG4gICAgICBldmVudC5hZGRPcHRpb25zKHRoaXMuX2FuYWx5dGljc09wdGlvbnMpO1xuICAgICAgZXZlbnQuYWRkT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgIHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIucmVwb3J0KGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbkNyZWF0ZSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGNvbnN0cnVjdGVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvbkNyZWF0ZSAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uVXBkYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGNoYW5nZXNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uVXBkYXRlIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlUmVuZGVyIGV2ZW50IGlzIHRyaWdnZXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYmVmb3JlUmVuZGVyIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYWZ0ZXJSZW5kZXIgZXZlbnQgaXMgdHJpZ2dlcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIGFmdGVyUmVuZGVyIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25Nb3VudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFwcGVuZGVkIHRvIHRoZSBET01cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvblVuTW91bnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyByZW1vdmVkIGZyb20gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25Vbk1vdW50IChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlTW91bnQgaXMgdHJpZ2dlcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQgdG8gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYmVmb3JlTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvbkRlc3Ryb3kgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uRGVzdHJveSAoY2IpIHtcblxuICB9XG59XG4iLCIvKiogQG1vZHVsZSBOYXZpZ2F0aW9uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5cbi8qKlxuICogVGhlIFRhYiBpcyBhIG1vZGVsIHRoYXQgaXMgdXNlZCB0byBwb3dlciB0aGUgTmF2aWdhdGlvbiB0YWJzIGluIHRoZSB2aWV3LlxuICogSXQncyBpbml0aWFsaXplZCB0aHJvdWdoIHRoZSBjb25maWd1cmF0aW9uIHByb3ZpZGVkIHRvIHRoZSBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBUYWIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIHRhYiB0aGF0IGlzIGV4cG9zZWQgZm9yIHRoZSBsaW5rXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmxhYmVsID0gY29uZmlnLmxhYmVsO1xuICAgIGlmICh0eXBlb2YgdGhpcy5sYWJlbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoJ2xhYmVsIGlzIGEgcmVxdWlyZWQgY29uZmlndXJhdGlvbiBvcHRpb24gZm9yIHRhYi4nLCAnTmF2aWdhdGlvbkNvbXBvbmVudCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb21wbGV0ZSBVUkwsIGluY2x1ZGluZyB0aGUgcGFyYW1zXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnVybCA9IGNvbmZpZy51cmw7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoJ3VybCBpcyBhIHJlcXVpcmVkIGNvbmZpZ3VyYXRpb24gb3B0aW9uIGZvciB0YWIuJywgJ05hdmlnYXRpb25Db21wb25lbnQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VydmVyc2lkZSB2ZXJ0aWNhbCBjb25maWcgaWQgdGhhdCB0aGlzIGlzIHJlZmVyZW5jZWQgdG8uXG4gICAgICogQnkgcHJvdmlkaW5nIHRoaXMsIGVuYWJsZXMgZHluYW1pYyBzb3J0aW5nIGJhc2VkIG9uIHJlc3VsdHMuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmNvbmZpZ0lkID0gY29uZmlnLmNvbmZpZ0lkIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYmFzZSBVUkwgdXNlZCBmb3IgY29uc3RydWN0aW5nIHRoZSBVUkwgd2l0aCBwYXJhbXNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuYmFzZVVybCA9IGNvbmZpZy51cmw7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gc2hvdyB0aGlzIHRhYiBmaXJzdCBpbiB0aGUgb3JkZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmlzRmlyc3QgPSBjb25maWcuaXNGaXJzdCB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgdG8gYXBwbHkgYSBzcGVjaWFsIGNsYXNzIHRvIHRoZVxuICAgICAqIG1hcmt1cCB0byBkZXRlcm1pbmUgaWYgaXQncyBhbiBhY3RpdmUgdGFiXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc0FjdGl2ZSA9IGNvbmZpZy5pc0FjdGl2ZSB8fCBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBmcm9tIHdpbGwgY29uc3RydWN0IGEgbWFwIG9mIGNvbmZpZ0lkIHRvIHtUYWJ9IGZyb21cbiAgICogYSBjb25maWd1cmF0aW9uIGZpbGVcbiAgICogQHBhcmFtIHtvYmplY3R9IHRhYnNDb25maWcgdGhlIGNvbmZpZ3VyYXRpb24gdG8gdXNlXG4gICAqL1xuICBzdGF0aWMgZnJvbSAodGFic0NvbmZpZykge1xuICAgIGxldCB0YWJzID0ge307XG4gICAgLy8gUGFyc2UgdGhlIG9wdGlvbnMgYW5kIGJ1aWxkIG91dCBvdXIgdGFicyBhbmRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNDb25maWcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB0YWIgPSB0YWJzQ29uZmlnW2ldO1xuICAgICAgLy8gRm9yIHRhYnMgd2l0aG91dCBjb25maWcgaWRzLCBtYXAgdGhlaXIgVVJMIHRvIHRoZSBjb25maWdJRFxuICAgICAgLy8gdG8gYXZvaWQgZHVwbGljYXRpb24gb2YgcmVuZGVyc1xuICAgICAgaWYgKHRhYi5jb25maWdJZCA9PT0gdW5kZWZpbmVkICYmIHRhYnNbdGFiLmNvbmZpZ0lkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhYi5jb25maWdJZCA9IHRhYi51cmw7XG4gICAgICB9XG5cbiAgICAgIHRhYnNbdGFiLmNvbmZpZ0lkXSA9IG5ldyBUYWIodGFiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhYnM7XG4gIH1cbn1cblxuLyoqXG4gKiBOYXZpZ2F0aW9uQ29tcG9uZW50IGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBidWlsZGluZyBhIGR5bmFtaWNcbiAqIG5hdmlnYXRpb24gdGhhdCBpcyBwb3dlcmVkIGJ5IHVuaXZlcnNhbCBzZWFyY2ggdXBkYXRlcy5cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkYXRhIHN0b3JhZ2Uga2V5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuTkFWSUdBVElPTjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBoYW5kbGViYXJzIHRlbXBsYXRlIHRvIHVzZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAnbmF2aWdhdGlvbi9uYXZpZ2F0aW9uJztcblxuICAgIC8qKlxuICAgICAqIFVub3JkZXJlZCBtYXAgb2YgZWFjaCB0YWIsIGtleWVkIGJ5IFZTIGNvbmZpZ0lkXG4gICAgICogQHR5cGUge09iamVjdC48U3RyaW5nLCBPYmplY3Q+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGFicyA9IFRhYi5mcm9tKGNvbmZpZy50YWJzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcmRlciBvZiB0aGUgdGFicywgcGFyc2VkIGZyb20gY29uZmlndXJhdGlvbiBvciBVUkwuXG4gICAgICogVGhpcyBnZXRzIHVwZGF0ZWQgYmFzZWQgb24gdGhlIHNlcnZlciByZXN1bHRzXG4gICAgICogQHR5cGUge0FycmF5LjxTdHJpbmc+fSBUaGUgbGlzdCBvZiBWUyBjb25maWdJZHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RhYk9yZGVyID0gdGhpcy5nZXREZWZhdWx0VGFiT3JkZXIoY29uZmlnLnRhYnMsIHRoaXMuZ2V0VXJsUGFyYW1zKCkpO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ05hdmlnYXRpb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbmNlIHRoZSBzZXJ2ZXIgZGF0YSBvbmx5IHByb3ZpZGVzIGEgbGlzdCBvZlxuICAgKiBWUyBjb25maWdJZHMsIHdlIG5lZWQgdG8gY29tcHV0ZSBhbmQgdHJhbnNmb3JtXG4gICAqIHRoZSBkYXRhIGludG8gdGhlIHByb3BlciBmb3JtYXQgZm9yIHJlbmRlcmluZy5cbiAgICpcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIGlmIChkYXRhLnRhYk9yZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3RhYk9yZGVyID0gdGhpcy5tZXJnZVRhYk9yZGVyKGRhdGEudGFiT3JkZXIsIHRoaXMuX3RhYk9yZGVyKTtcbiAgICB9XG5cbiAgICAvLyBTaW5jZSB0aGUgdGFiIG9yZGVyaW5nIGNhbiBjaGFuZ2UgYmFzZWQgb24gdGhlIHNlcnZlciBkYXRhXG4gICAgLy8gd2UgbmVlZCB0byB1cGRhdGUgZWFjaCB0YWJzIFVSTCB0byBpbmNsdWRlIHRoZSBvcmRlciBhcyBwYXJ0IG9mIHRoZWlyIHBhcmFtcy5cbiAgICAvLyBUaGlzIGhlbHBzIHdpdGggcGVyc2lzdGluZyBzdGF0ZSBhY3Jvc3MgdmVydGljYWxzLlxuICAgIGxldCB0YWJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90YWJPcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRhYiA9IHRoaXMuX3RhYnNbdGhpcy5fdGFiT3JkZXJbaV1dO1xuICAgICAgaWYgKHRhYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhYi51cmwgPSB0aGlzLmdlbmVyYXRlVGFiVXJsKHRhYi5iYXNlVXJsLCB0aGlzLmdldFVybFBhcmFtcygpKTtcbiAgICAgICAgdGFicy5wdXNoKHRhYik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKHtcbiAgICAgIHRhYnM6IHRhYnNcbiAgICB9KTtcbiAgfVxuXG4gIGdldFVybFBhcmFtcyAoKSB7XG4gICAgcmV0dXJuIG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldERlZmF1bHRUYWJPcmRlciB3aWxsIGNvbXB1dGUgdGhlIGluaXRpYWwgdGFiIG9yZGVyaW5nIGJhc2VkXG4gICAqIG9uIGEgY29tYmluYXRpb24gb2YgdGhlIGNvbmZpZ3VyYXRpb24gcHJvdmlkZWQgZGlyZWN0bHkgdG8gdGhlIGNvbXBvbmVudFxuICAgKiBhbmQgdGhlIHVybCBwYXJhbXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0W119IHRhYnNDb25maWdcbiAgICogQHBhcmFtIHtTZWFyY2hQYXJhbXN9XG4gICAqL1xuICBnZXREZWZhdWx0VGFiT3JkZXIgKHRhYnNDb25maWcsIHVybFBhcmFtcykge1xuICAgIGxldCB0YWJPcmRlciA9IFtdO1xuXG4gICAgLy8gVXNlIHRoZSBvcmRlcmluZyBmcm9tIHRoZSBVUkwgYXMgdGhlIHByaW1hcnkgY29uZmlndXJhdGlvblxuICAgIC8vIEFuZCB0aGVuIG1lcmdlIGl0IHdpdGggdGhlIGxvY2FsIGNvbmZpZ3VyYXRpb24sIGlmIHByb3ZpZGVkLlxuICAgIGlmICh1cmxQYXJhbXMgJiYgdXJsUGFyYW1zLmhhcygndGFiT3JkZXInKSkge1xuICAgICAgdGFiT3JkZXIgPSB1cmxQYXJhbXMuZ2V0KCd0YWJPcmRlcicpLnNwbGl0KCcsJyk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzQ29uZmlnLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YWIgPSB0YWJzQ29uZmlnW2ldO1xuICAgICAgLy8gU29tZSB0YWJzIGRvbid0IGhhdmUgY29uZmlnSWQsIHNvIHdlIG1hcCBpdCBmcm9tIFVSTFxuICAgICAgaWYgKHRhYi5jb25maWdJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhYi5jb25maWdJZCA9IHRhYi51cmw7XG4gICAgICB9XG5cbiAgICAgIC8vIEF2b2lkIGR1cGxpY2F0ZXMgaWYgY29uZmlnIHdhcyBwcm92aWRlZCBmcm9tIFVSTFxuICAgICAgaWYgKHRhYk9yZGVyLmluY2x1ZGVzKHRhYi5jb25maWdJZCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIGlzRmlyc3Qgc2hvdWxkIGFsd2F5cyBiZSB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgbGlzdFxuICAgICAgaWYgKHRhYi5pc0ZpcnN0KSB7XG4gICAgICAgIHRhYk9yZGVyLnVuc2hpZnQodGFiLmNvbmZpZ0lkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhYk9yZGVyLnB1c2godGFiLmNvbmZpZ0lkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFiT3JkZXI7XG4gIH1cblxuICAvKipcbiAgICogbWVyZ2VUYWJPcmRlciBtZXJnZXMgdHdvIGFycmF5cyBpbnRvIG9uZVxuICAgKiBieSBhcHBlbmRpbmcgYWRkaXRpb25hbCB0YWJzIHRvIHRoZSBlbmQgb2YgdGhlIG9yaWdpbmFsIGFycmF5XG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHRhYk9yZGVyIFRhYiBvcmRlciBwcm92aWRlZCBieSB0aGUgc2VydmVyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IG90aGVyVGFiT3JkZXIgVGFiIG9yZGVyIHByb3ZpZGVkIGJ5IGNvbmZpZ3VyYXRpb25cbiAgICogQHJldHVybiB7c3RyaW5nW119XG4gICAqL1xuICBtZXJnZVRhYk9yZGVyICh0YWJPcmRlciwgb3RoZXJUYWJPcmRlcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3RoZXJUYWJPcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGFiQ29uZmlnID0gb3RoZXJUYWJPcmRlcltpXTtcbiAgICAgIGlmICh0YWJPcmRlci5pbmNsdWRlcyh0YWJDb25maWcpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBpc0ZpcnN0IHNob3VsZCBiZSBhbiBvdmVycmlkZSB0byBkeW5hbWljIHRhYiBvcmRlcmluZy5cbiAgICAgIGlmICh0aGlzLl90YWJzW3RhYkNvbmZpZ10gJiYgdGhpcy5fdGFic1t0YWJDb25maWddLmlzRmlyc3QpIHtcbiAgICAgICAgdGFiT3JkZXIudW5zaGlmdCh0YWJDb25maWcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFiT3JkZXIucHVzaCh0YWJDb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YWJPcmRlcjtcbiAgfVxuXG4gIGdlbmVyYXRlVGFiVXJsIChiYXNlVXJsLCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCkpIHtcbiAgICAvLyBXZSB3YW50IHRvIHBlcnNpc3QgdGhlIHBhcmFtcyBmcm9tIHRoZSBleGlzdGluZyBVUkwgdG8gdGhlIG5ld1xuICAgIC8vIFVSTFMgd2UgY3JlYXRlLlxuICAgIHBhcmFtcy5zZXQoJ3RhYk9yZGVyJywgdGhpcy5fdGFiT3JkZXIpO1xuICAgIHJldHVybiBiYXNlVXJsICsgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZpbHRlciAqL1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gYXBpIGZpbHRlciBhbmQgcHJvdmlkZXMgc3RhdGljIG1ldGhvZHMgZm9yIGVhc2lseSBjb25zdHJ1Y3RpbmcgRmlsdGVycy5cbiAqIFNlZSBodHRwczovL2RldmVsb3Blci55ZXh0LmNvbS9kb2NzL2FwaS1yZWZlcmVuY2UvI29wZXJhdGlvbi9saXN0RW50aXRpZXMgZm9yIHN0cnVjdHVyZSBkZXRhaWxzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlciB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgYSBKU09OIGZvcm1hdCBmaWx0ZXIgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyIGludG8gYSBGaWx0ZXJcbiAgICogQHBhcmFtIHsqfSByZXNwb25zZUZpbHRlciBBIGZpbHRlciBpbiBKU09OIGZvcm1hdCByZXR1cm5lZCBmcm9tIHRoZSBiYWNrZW5kXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZnJvbVJlc3BvbnNlIChyZXNwb25zZUZpbHRlcikge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKEpTT04ucGFyc2UocmVzcG9uc2VGaWx0ZXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBuZXcgRmlsdGVyIHJlcHJlc2VudGluZyB0aGUgT1Igb2YgYWxsIHByb3ZpZGVkIGZpbHRlcnNcbiAgICogQHBhcmFtICB7Li4uRmlsdGVyfSBmaWx0ZXJzIFRoZSBmaWx0ZXJzIHRvIE9SIHRvZ2V0aGVyXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgb3IgKC4uLmZpbHRlcnMpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcih7XG4gICAgICAnJG9yJzogZmlsdGVyc1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIG5ldyBGaWx0ZXIgcmVwcmVzZW50aW5nIHRoZSBBTkQgb2YgYWxsIHByb3ZpZGVkIGZpbHRlcnNcbiAgICogQHBhcmFtICB7Li4uRmlsdGVyfSBmaWx0ZXJzIFRoZSBmaWx0ZXJzIHRvIEFORCB0b2dldGhlclxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGFuZCAoLi4uZmlsdGVycykge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgICckYW5kJzogZmlsdGVyc1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9SIGZpbHRlcnMgd2l0aCB0aGUgc2FtZSBrZXlzLCB0aGVuIEFORCB0aGUgcmVzdWx0aW5nIGdyb3Vwc1xuICAgKiBAcGFyYW0gIHsuLi5GaWx0ZXJ9IGZpbHRlcnMgVGhlIGZpbHRlcnMgdG8gZ3JvdXBcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBncm91cCAoLi4uZmlsdGVycykge1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGZvciAoY29uc3QgZmlsdGVyIG9mIGZpbHRlcnMpIHtcbiAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKGZpbHRlcilbMF07XG4gICAgICBpZiAoIWdyb3Vwc1trZXldKSB7XG4gICAgICAgIGdyb3Vwc1trZXldID0gW107XG4gICAgICB9XG4gICAgICBncm91cHNba2V5XS5wdXNoKGZpbHRlcik7XG4gICAgfVxuXG4gICAgY29uc3QgZ3JvdXBGaWx0ZXJzID0gW107XG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiBPYmplY3Qua2V5cyhncm91cHMpKSB7XG4gICAgICBncm91cEZpbHRlcnMucHVzaChncm91cHNbZmllbGRdLmxlbmd0aCA+IDEgPyBGaWx0ZXIub3IoLi4uZ3JvdXBzW2ZpZWxkXSkgOiBncm91cHNbZmllbGRdWzBdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ3JvdXBGaWx0ZXJzLmxlbmd0aCA+IDEgPyBGaWx0ZXIuYW5kKC4uLmdyb3VwRmlsdGVycykgOiBncm91cEZpbHRlcnNbMF07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwiZXF1YWwgdG9cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBlcXVhbCB0b1xuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGVxdWFsIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRlcScsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJsZXNzIHRoYW5cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBsZXNzIHRoYW5cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBsZXNzVGhhbiAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckbHQnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwibGVzcyB0aGFuIG9yIGVxdWFsIHRvXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgbGVzc1RoYW5FcXVhbCAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckbGUnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwiZ3JlYXRlciB0aGFuXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ3JlYXRlclRoYW4gKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGd0JywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0b1wiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0b1xuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGdyZWF0ZXJUaGFuRXF1YWwgKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGdlJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBpbmNsdXNpdmUgcmFuZ2UgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gbWluIFRoZSBtaW5pbXVtIHZhbHVlIG9mIHRoZSByYW5nZVxuICAgKiBAcGFyYW0geyp9IG1heCBUaGUgbWF4aW11bSB2YWx1ZSBvZiB0aGUgcmFuZ2VyXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgcmFuZ2UgKGZpZWxkLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBGaWx0ZXIuYW5kKEZpbHRlci5ncmVhdGVyVGhhbkVxdWFsKGZpZWxkLCBtaW4pLCBGaWx0ZXIubGVzc1RoYW5FcXVhbChmaWVsZCwgbWF4KSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGZpbHRlciB3aXRoIHRoZSBnaXZlbiBtYXRjaGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRjaGVyIFRoZSBtYXRjaGVyIGZvciB0aGUgZmlsZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgZm9yIHRoZSBmaWx0ZXJcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBfZnJvbU1hdGNoZXIgKGZpZWxkLCBtYXRjaGVyLCB2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgIFtmaWVsZF06IHtcbiAgICAgICAgW21hdGNoZXJdOiB2YWx1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi9kb20vc2VhcmNocGFyYW1zJztcblxuLyoqXG4gKiBTZWFyY2hDb21wb25lbnQgZXhwb3NlcyBhbiBpbnRlcmZhY2UgaW4gb3JkZXIgdG8gY3JlYXRlXG4gKiBhIFVJIFNlYXJjaCBleHBlcmllbmNlIGZvciB2ZXJ0aWNhbCBhbmQgdW5pdmVyc2FsIHNlYXJjaC5cbiAqXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSBuYW1lIHRvIHVzZSBmb3IgcmVuZGVyaW5nIHdpdGggaGFuZGxlYmFyc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3NlYXJjaC9zZWFyY2gnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGlucHV0IGtleSBmb3IgdGhlIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCBhdXRvLWNvbXBsZXRlIGFuZCBzZWFyY2ggd2lsbCBiZSBiYXNlZCBvbiB1bml2ZXJzYWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2JhcktleSA9IGNvbmZpZy5iYXJLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCB2ZXJ0aWNhbCBrZXkgZm9yIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCBhdXRvLWNvbXBsZXRlIGFuZCBzZWFyY2ggd2lsbCBiZSBiYXNlZCBvbiB1bml2ZXJzYWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBRdWVyeSBzdWJtaXNzaW9uIGlzIGJhc2VkIG9uIGEgZm9ybSBhcyBjb250ZXh0LlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBuYXRpdmUgZm9ybSBub2RlIHdpdGhpbiBjb250YWluZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9mb3JtRWwgPSBjb25maWcuZm9ybVNlbGVjdG9yIHx8ICdmb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBlbGVtZW50IHVzZWQgZm9yIHNlYXJjaGluZyBhbmQgd2lyZXMgdXAgdGhlIGtleWJvYXJkIGludGVyYWN0aW9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gY29uZmlnLmlucHV0RWwgfHwgJy5qcy15ZXh0LXF1ZXJ5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB1c2VkLCBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgYXMgYSBkYXRhIHBvaW50XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudGl0bGUgPSBjb25maWcudGl0bGUgfHwgJ0Fuc3dlcnMgVW5pdmVyc2FsIFNlYXJjaCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdGV4dCBpcyB1c2VkIGZvciBsYWJlbGluZyB0aGUgaW5wdXQgYm94LCBhbHNvIHByb3ZpZGVkIHRvIHRlbXBsYXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWxUZXh0ID0gY29uZmlnLmxhYmVsVGV4dCB8fCAnV2hhdCBhcmUgeW91IGludGVyZXN0ZWQgaW4/JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdWJtaXQgdGV4dCBpcyB1c2VkIGZvciBsYWJlbGluZyB0aGUgc3VibWl0IGJ1dHRvbiwgYWxzbyBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnN1Ym1pdFRleHQgPSBjb25maWcuc3VibWl0VGV4dCB8fCAnU3VibWl0JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdWJtaXQgaWNvbiBpcyBhbiBpY29uIGZvciB0aGUgc3VibWl0IGJ1dHRvbiwgaWYgcHJvdmlkZWQgaXQgd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHRoZVxuICAgICAqIHN1Ym1pdCB0ZXh0IHdpbGwgYmUgdXNlZCBmb3Igc2NyZWVuIHJlYWRlcnMuXG4gICAgICogQHR5cGUge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHRoaXMuc3VibWl0SWNvbiA9IGNvbmZpZy5zdWJtaXRJY29uIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgdGV4dCB0byBzaG93IGFzIHRoZSBmaXJzdCBpdGVtIGZvciBhdXRvIGNvbXBsZXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucHJvbXB0SGVhZGVyID0gY29uZmlnLnByb21wdEhlYWRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQXV0byBmb2N1c2VzIHRoZSBpbnB1dCBib3ggaWYgc2V0IHRvIHRydWUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvRm9jdXMgPSBjb25maWcuYXV0b0ZvY3VzID09PSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogc3VibWl0VVJMIHdpbGwgZm9yY2UgdGhlIHNlYXJjaCBxdWVyeSBzdWJtaXNzaW9uIHRvIGdldFxuICAgICAqIHJlZGlyZWN0ZWQgdG8gdGhlIFVSTCBwcm92aWRlZC5cbiAgICAgKiBPcHRpb25hbCwgZGVmYXVsdHMgdG8gbnVsbC5cbiAgICAgKlxuICAgICAqIElmIG5vIHJlZGlyZWN0VXJsIHByb3ZpZGVkLCB3ZSBrZWVwIHRoZSBwYWdlIGFzIGEgc2luZ2xlIHBhZ2UgYXBwLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZWRpcmVjdFVybCA9IGNvbmZpZy5yZWRpcmVjdFVybCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHN0cmluZyB0byB1c2UgZm9yIHRoZSBpbnB1dCBib3gsIHByb3ZpZGVkIHRvIHRlbXBsYXRlIGZvciByZW5kZXJpbmcuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5xdWVyeSA9IGNvbmZpZy5xdWVyeSB8fCB0aGlzLmdldFVybFBhcmFtcygpLmdldCgncXVlcnknKSB8fCAnJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIHRpbWUgYWxsb3dlZCBpbiBtaWxsaXNlY29uZHMgYmV0d2VlbiBzZWFyY2hlcyB0byBwcmV2ZW50XG4gICAgICogbWFueSBkdXBsaWNhdGUgc2VhcmNoZXMgYmFjay10by1iYWNrXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaENvb2xkb3duID0gY29uZmlnLnNlYXJjaENvb2xkb3duIHx8IDMwMDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdTZWFyY2hCYXInO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIGlmICh0aGlzLnF1ZXJ5ICYmIHRoaXMucXVlcnkubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jb3JlLnNldFF1ZXJ5KHRoaXMucXVlcnkpO1xuICAgICAgdGhpcy5zZWFyY2godGhpcy5xdWVyeSk7XG4gICAgfVxuXG4gICAgdGhpcy5iaW5kQnJvd3Nlckhpc3RvcnkoKTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIC8vIFdpcmUgdXAgb3VyIHNlYXJjaCBoYW5kbGluZyBhbmQgYXV0byBjb21wbGV0ZVxuICAgIHRoaXMuaW5pdFNlYXJjaCh0aGlzLl9mb3JtRWwpO1xuICAgIHRoaXMuaW5pdEF1dG9Db21wbGV0ZSh0aGlzLl9pbnB1dEVsKTtcblxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cyA9PT0gdHJ1ZSAmJiB0aGlzLnF1ZXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5faW5wdXRFbCkuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHVzZSBmb3Igd2lyaW5nIHVwIHNlYXJjaGluZyBvbiBmb3JtIHN1Ym1pc3Npb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGZvcm1TZWxlY3RvciBDU1Mgc2VsZWN0b3IgdG8gYmluZCBvdXIgc3VibWl0IGhhbmRsaW5nIHRvXG4gICAqL1xuICBpbml0U2VhcmNoIChmb3JtU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9mb3JtRWwgPSBmb3JtU2VsZWN0b3I7XG5cbiAgICBsZXQgZm9ybSA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIGZvcm1TZWxlY3Rvcik7XG4gICAgaWYgKCFmb3JtKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBpbml0aWFsaXplIFNlYXJjaEJhcjsgQ2FuIG5vdCBmaW5kIHtIVE1MRWxlbWVudH0gYCcsIHRoaXMuX2Zvcm1FbCwgJ2AuJyk7XG4gICAgfVxuXG4gICAgRE9NLm9uKGZvcm0sICdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBsZXQgcXVlcnkgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IodGhpcy5faW5wdXRFbCkudmFsdWU7XG4gICAgICBsZXQgcGFyYW1zID0gdGhpcy5nZXRVcmxQYXJhbXMoKTtcbiAgICAgIHBhcmFtcy5zZXQoJ3F1ZXJ5JywgcXVlcnkpO1xuXG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgcmVkaXJlY3RVcmwsIHdlIHdhbnQgdGhlIGZvcm0gdG8gYmVcbiAgICAgIC8vIHNlcmlhbGl6ZWQgYW5kIHN1Ym1pdHRlZC5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5yZWRpcmVjdFVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLnJlZGlyZWN0VXJsICsgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHtcbiAgICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgICB9LCBxdWVyeSwgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCkpO1xuXG4gICAgICB0aGlzLmNvcmUuc2V0UXVlcnkocXVlcnkpO1xuICAgICAgdGhpcy5zZWFyY2gocXVlcnkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgaGVscGVyIG1ldGhvZCB0byB3aXJlIHVwIG91ciBhdXRvIGNvbXBsZXRlIG9uIGFuIGlucHV0IHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBhdXRvIGNvbXBsZXRlIGNvbXBvbmVudCB0b1xuICAgKi9cbiAgaW5pdEF1dG9Db21wbGV0ZSAoaW5wdXRTZWxlY3Rvcikge1xuICAgIHRoaXMuX2lucHV0RWwgPSBpbnB1dFNlbGVjdG9yO1xuXG4gICAgdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZSgnQXV0b0NvbXBsZXRlJywge1xuICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfS5hdXRvY29tcGxldGVgLFxuICAgICAgY29udGFpbmVyOiAnLnlleHQtc2VhcmNoLWF1dG9jb21wbGV0ZScsXG4gICAgICBiYXJLZXk6IHRoaXMuX2JhcktleSxcbiAgICAgIHZlcnRpY2FsS2V5OiB0aGlzLl92ZXJ0aWNhbEtleSxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5wcm9tcHRIZWFkZXIsXG4gICAgICBvcmlnaW5hbFF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgaW5wdXRFbDogaW5wdXRTZWxlY3RvcixcbiAgICAgIG9uU3VibWl0OiAoKSA9PiB7XG4gICAgICAgIERPTS50cmlnZ2VyKCdmb3JtJywgJ3N1Ym1pdCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoIChxdWVyeSkge1xuICAgIGlmICh0aGlzLl90aHJvdHRsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl90aHJvdHRsZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLl90aHJvdHRsZWQgPSBmYWxzZTsgfSwgdGhpcy5fc2VhcmNoQ29vbGRvd24pO1xuXG4gICAgaWYgKHRoaXMuX3ZlcnRpY2FsS2V5KSB7XG4gICAgICBjb25zdCBhbGxGaWx0ZXJzID0gdGhpcy5jb3JlLnN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgICBjb25zdCB0b3RhbEZpbHRlciA9IGFsbEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgICA/IEZpbHRlci5hbmQoLi4uYWxsRmlsdGVycylcbiAgICAgICAgOiBhbGxGaWx0ZXJzWzBdO1xuICAgICAgcmV0dXJuIHRoaXMuY29yZS52ZXJ0aWNhbFNlYXJjaChxdWVyeSwgdGhpcy5fdmVydGljYWxLZXksIEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5PVEUoYmlsbHkpIFRlbXBvcmFyeSBoYWNrIGZvciBERU1PXG4gICAgICAvLyBSZW1vdmUgbWUgYWZ0ZXIgdGhlIGRlbW9cbiAgICAgIGxldCBuYXYgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXJcbiAgICAgICAgLmdldEFjdGl2ZUNvbXBvbmVudCgnTmF2aWdhdGlvbicpO1xuXG4gICAgICBpZiAobmF2KSB7XG4gICAgICAgIGxldCB0YWJzID0gbmF2LmdldFN0YXRlKCd0YWJzJyk7XG4gICAgICAgIGxldCB1cmxzID0ge307XG5cbiAgICAgICAgaWYgKHRhYnMgJiYgQXJyYXkuaXNBcnJheSh0YWJzKSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHRoaXMuZ2V0VXJsUGFyYW1zKHRhYnNbaV0udXJsLnNwbGl0KCc/JylbMV0pO1xuICAgICAgICAgICAgcGFyYW1zLnNldCgncXVlcnknLCBxdWVyeSk7XG5cbiAgICAgICAgICAgIGxldCB1cmwgPSB0YWJzW2ldLmJhc2VVcmw7XG4gICAgICAgICAgICBpZiAocGFyYW1zLnRvU3RyaW5nKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICB1cmwgKz0gJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cmxzW3RhYnNbaV0uY29uZmlnSWRdID0gdXJsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb3JlLnNlYXJjaChxdWVyeSwgdXJscyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvcmUuc2VhcmNoKHF1ZXJ5KTtcbiAgICB9XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgbGFiZWxUZXh0OiB0aGlzLmxhYmVsVGV4dCxcbiAgICAgIHN1Ym1pdEljb246IHRoaXMuc3VibWl0SWNvbixcbiAgICAgIHN1Ym1pdFRleHQ6IHRoaXMuc3VibWl0VGV4dCxcbiAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5XG4gICAgfSwgZGF0YSkpO1xuICB9XG5cbiAgZ2V0VXJsUGFyYW1zICh1cmwpIHtcbiAgICB1cmwgPSB1cmwgfHwgd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7XG4gICAgcmV0dXJuIG5ldyBTZWFyY2hQYXJhbXModXJsKTtcbiAgfVxuXG4gIGJpbmRCcm93c2VySGlzdG9yeSAoKSB7XG4gICAgRE9NLm9uKHdpbmRvdywgJ3BvcHN0YXRlJywgKCkgPT4ge1xuICAgICAgdGhpcy5xdWVyeSA9IHRoaXMuZ2V0VXJsUGFyYW1zKCkuZ2V0KCdxdWVyeScpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jb3JlLnNldFF1ZXJ5KHRoaXMucXVlcnkpO1xuXG4gICAgICB0aGlzLnNlYXJjaCh0aGlzLnF1ZXJ5KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyU2VhcmNoQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5cbi8qKlxuICogRmlsdGVyU2VhcmNoQ29tcG9uZW50IGlzIHVzZWQgZm9yIGF1dG9jb21wbGV0ZSB1c2luZyB0aGUgRmlsdGVyU2VhcmNoIGJhY2tlbmQuXG4gKiBJdCdsbCBhbGxvdyB5b3UgdG8gcGljayBwcmUtc2V0IGZpbHRlcnMgdGhhdCBhcmUgc2V0dXAgb24gdGhlIGJhY2tlbmQgd2l0aGluXG4gKiBhIHZlcnRpY2FsIHNlYXJjaCBjb250ZXh0LlxuICpcbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIG5hbWUgdG8gdXNlIGZvciByZW5kZXJpbmcgd2l0aCBoYW5kbGViYXJzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAnc2VhcmNoL2ZpbHRlcnNlYXJjaCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5wdXQga2V5IGZvciB0aGUgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2JhcktleSA9IGNvbmZpZy5iYXJLZXkgfHwgY29uZmlnLmlucHV0S2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVydGljYWwga2V5IGZvciB2ZXJ0aWNhbCBzZWFyY2ggY29uZmlndXJhdGlvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHN0b3JlIHRoZSBmaWx0ZXIgdmFsdWUgYnV0IGRvIG5vdCBzZWFyY2ggb24gY2hhbmdlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdG9yZU9uQ2hhbmdlID0gY29uZmlnLnN0b3JlT25DaGFuZ2UgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBRdWVyeSBzdWJtaXNzaW9uIGlzIGJhc2VkIG9uIGEgZm9ybSBhcyBjb250ZXh0LlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBuYXRpdmUgZm9ybSBub2RlIHdpdGhpbiBjb250YWluZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9mb3JtRWwgPSBjb25maWcuZm9ybVNlbGVjdG9yIHx8ICdmb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBlbGVtZW50IHVzZWQgZm9yIHNlYXJjaGluZyBhbmQgd2lyZXMgdXAgdGhlIGtleWJvYXJkIGludGVyYWN0aW9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gY29uZmlnLmlucHV0RWwgfHwgJy5qcy15ZXh0LXF1ZXJ5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB1c2VkLCBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgYXMgYSBkYXRhIHBvaW50XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudGl0bGUgPSBjb25maWcudGl0bGU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VhcmNoIHRleHQgdXNlZCBmb3IgbGFiZWxpbmcgdGhlIGlucHV0IGJveCwgYWxzbyBwcm92aWRlZCB0byB0ZW1wbGF0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnNlYXJjaFRleHQgPSBjb25maWcuc2VhcmNoVGV4dCB8fCAnV2hhdCBhcmUgeW91IGludGVyZXN0ZWQgaW4/JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSB0ZXh0IHRvIHNob3cgYXMgdGhlIGZpcnN0IGl0ZW0gZm9yIGF1dG8gY29tcGxldGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5wcm9tcHRIZWFkZXIgPSBjb25maWcucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBdXRvIGZvY3VzZXMgdGhlIGlucHV0IGJveCBpZiBzZXQgdG8gdHJ1ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBkZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9Gb2N1cyA9IGNvbmZpZy5hdXRvRm9jdXMgPT09IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBzdWJtaXRVUkwgd2lsbCBmb3JjZSB0aGUgc2VhcmNoIHF1ZXJ5IHN1Ym1pc3Npb24gdG8gZ2V0XG4gICAgICogcmVkaXJlY3RlZCB0byB0aGUgVVJMIHByb3ZpZGVkLlxuICAgICAqIE9wdGlvbmFsLCBkZWZhdWx0cyB0byBudWxsLlxuICAgICAqXG4gICAgICogSWYgbm8gcmVkaXJlY3RVcmwgcHJvdmlkZWQsIHdlIGtlZXAgdGhlIHBhZ2UgYXMgYSBzaW5nbGUgcGFnZSBhcHAuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnJlZGlyZWN0VXJsID0gY29uZmlnLnJlZGlyZWN0VXJsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgc3RyaW5nIHRvIHVzZSBmb3IgdGhlIGlucHV0IGJveCwgcHJvdmlkZWQgdG8gdGVtcGxhdGUgZm9yIHJlbmRlcmluZy5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXJ5ID0gY29uZmlnLnF1ZXJ5IHx8IHRoaXMuZ2V0VXJsUGFyYW1zKCkuZ2V0KGAke3RoaXMubmFtZX0ucXVlcnlgKSB8fCAnJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaWx0ZXIgc3RyaW5nIHRvIHVzZSBmb3IgdGhlIHByb3ZpZGVkIHF1ZXJ5XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5maWx0ZXIgPSBjb25maWcuZmlsdGVyIHx8IHRoaXMuZ2V0VXJsUGFyYW1zKCkuZ2V0KGAke3RoaXMubmFtZX0uZmlsdGVyYCkgfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRmlsdGVyU2VhcmNoJztcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICBpZiAodGhpcy5xdWVyeSAmJiB0aGlzLnF1ZXJ5Lmxlbmd0aCA+IDAgJiYgdGhpcy5maWx0ZXIgJiYgdGhpcy5maWx0ZXIubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy5nZXRVcmxQYXJhbXMoKTtcbiAgICAgIHBhcmFtcy5zZXQoYCR7dGhpcy5uYW1lfS5xdWVyeWAsIHRoaXMucXVlcnkpO1xuICAgICAgcGFyYW1zLnNldChgJHt0aGlzLm5hbWV9LmZpbHRlcmAsIHRoaXMuZmlsdGVyKTtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsICc/JyArIHBhcmFtcy50b1N0cmluZygpKTtcbiAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBGaWx0ZXIuZnJvbVJlc3BvbnNlKHRoaXMuZmlsdGVyKSk7XG4gICAgICB0aGlzLnNlYXJjaCgpO1xuICAgIH1cblxuICAgIHRoaXMuYmluZEJyb3dzZXJIaXN0b3J5KCk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICAvLyBXaXJlIHVwIG91ciBzZWFyY2ggaGFuZGxpbmcgYW5kIGF1dG8gY29tcGxldGVcbiAgICB0aGlzLmluaXRBdXRvQ29tcGxldGUodGhpcy5faW5wdXRFbCk7XG5cbiAgICBpZiAodGhpcy5hdXRvRm9jdXMgPT09IHRydWUgJiYgdGhpcy5xdWVyeS5sZW5ndGggPT09IDApIHtcbiAgICAgIERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2lucHV0RWwpLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgaGVscGVyIG1ldGhvZCB0byB3aXJlIHVwIG91ciBhdXRvIGNvbXBsZXRlIG9uIGFuIGlucHV0IHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBhdXRvIGNvbXBsZXRlIGNvbXBvbmVudCB0b1xuICAgKi9cbiAgaW5pdEF1dG9Db21wbGV0ZSAoaW5wdXRTZWxlY3Rvcikge1xuICAgIHRoaXMuX2lucHV0RWwgPSBpbnB1dFNlbGVjdG9yO1xuXG4gICAgdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZSgnQXV0b0NvbXBsZXRlJywge1xuICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfS5hdXRvY29tcGxldGVgLFxuICAgICAgaXNGaWx0ZXJTZWFyY2g6IHRydWUsXG4gICAgICBjb250YWluZXI6ICcueWV4dC1zZWFyY2gtYXV0b2NvbXBsZXRlJyxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5wcm9tcHRIZWFkZXIsXG4gICAgICBvcmlnaW5hbFF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgb3JpZ2luYWxGaWx0ZXI6IHRoaXMuZmlsdGVyLFxuICAgICAgaW5wdXRFbDogaW5wdXRTZWxlY3RvcixcbiAgICAgIHZlcnRpY2FsS2V5OiB0aGlzLl92ZXJ0aWNhbEtleSxcbiAgICAgIGJhcktleTogdGhpcy5fYmFyS2V5LFxuICAgICAgb25TdWJtaXQ6IChxdWVyeSwgZmlsdGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuZ2V0VXJsUGFyYW1zKCk7XG4gICAgICAgIHBhcmFtcy5zZXQoYCR7dGhpcy5uYW1lfS5xdWVyeWAsIHF1ZXJ5KTtcbiAgICAgICAgcGFyYW1zLnNldChgJHt0aGlzLm5hbWV9LmZpbHRlcmAsIGZpbHRlcik7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHJlZGlyZWN0VXJsLCB3ZSB3YW50IHRoZSBwYXJhbXMgdG8gYmVcbiAgICAgICAgLy8gc2VyaWFsaXplZCBhbmQgc3VibWl0dGVkLlxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucmVkaXJlY3RVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLnJlZGlyZWN0VXJsICsgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCkpO1xuXG4gICAgICAgIC8vIHNhdmUgdGhlIGZpbHRlciB0byBzdG9yYWdlIGZvciB0aGUgbmV4dCBzZWFyY2hcbiAgICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIEZpbHRlci5mcm9tUmVzcG9uc2UoZmlsdGVyKSk7XG4gICAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybSB0aGUgdmVydGljYWwgc2VhcmNoIHdpdGggYWxsIHNhdmVkIGZpbHRlcnMgYW5kIHF1ZXJ5LFxuICAgKiBvcHRpb25hbGx5IHJlZGlyZWN0aW5nIGJhc2VkIG9uIGNvbmZpZ1xuICAgKi9cbiAgc2VhcmNoICgpIHtcbiAgICBpZiAodGhpcy5fc3RvcmVPbkNoYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmNvcmUuc3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICBsZXQgdG90YWxGaWx0ZXIgPSBmaWx0ZXJzWzBdO1xuICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRvdGFsRmlsdGVyID0gRmlsdGVyLmFuZCguLi5maWx0ZXJzKTtcbiAgICB9XG4gICAgY29uc3Qgc2VhcmNoUXVlcnkgPSB0aGlzLmNvcmUuc3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSkgfHwgJyc7XG5cbiAgICB0aGlzLmNvcmUudmVydGljYWxTZWFyY2goc2VhcmNoUXVlcnksIHRoaXMuX3ZlcnRpY2FsS2V5LCBKU09OLnN0cmluZ2lmeSh0b3RhbEZpbHRlcikpO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIHNlYXJjaFRleHQ6IHRoaXMuc2VhcmNoVGV4dCxcbiAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlclxuICAgIH0sIGRhdGEpKTtcbiAgfVxuXG4gIGdldFVybFBhcmFtcyAodXJsKSB7XG4gICAgdXJsID0gdXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpO1xuICAgIHJldHVybiBuZXcgU2VhcmNoUGFyYW1zKHVybCk7XG4gIH1cblxuICBiaW5kQnJvd3Nlckhpc3RvcnkgKCkge1xuICAgIERPTS5vbih3aW5kb3csICdwb3BzdGF0ZScsICgpID0+IHtcbiAgICAgIHRoaXMucXVlcnkgPSB0aGlzLmdldFVybFBhcmFtcygpLmdldChgJHt0aGlzLm5hbWV9LnF1ZXJ5YCk7XG4gICAgICB0aGlzLmZpbHRlciA9IHRoaXMuZ2V0VXJsUGFyYW1zKCkuZ2V0KGAke3RoaXMubmFtZX0uZmlsdGVyYCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcXVlcnk6IHRoaXMucXVlcnksXG4gICAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXJcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9zYXZlUXVlcnlBbmRGaWx0ZXIodGhpcy5xdWVyeSwgdGhpcy5maWx0ZXIpO1xuICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuY29uc3QgS2V5cyA9IHtcbiAgQkFDS1NQQUNFOiA4LFxuICBUQUI6IDksXG4gIEVOVEVSOiAxMyxcbiAgU0hJRlQ6IDE2LFxuICBDVFJMOiAxNyxcbiAgQUxUOiAxOCxcbiAgRVNDQVBFOiAyNyxcblxuICBMRUZUOiAzNyxcbiAgUklHSFQ6IDM5LFxuICBVUDogMzgsXG5cbiAgREVMRVRFOiA0NixcbiAgRE9XTjogNDAsXG4gIExFRlRfT1NfS0VZOiA5MSxcbiAgUklHSFRfT1NfS0VZOiA5MixcbiAgU0VMRUNUX0tFWTogOTNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Db21wbGV0ZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgYXV0b2NvbXBsZXRlIGlzIHNpbXBsZSBvciBmaWx0ZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmlzRmlsdGVyU2VhcmNoID0gb3B0cy5pc0ZpbHRlclNlYXJjaCB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgYmFyS2V5YCBpbiB0aGUgdmVydGljYWwgc2VhcmNoIHRvIHVzZSBmb3IgYXV0by1jb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYmFyS2V5ID0gb3B0cy5iYXJLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgdmVydGljYWxLZXlgIG9mIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggdG8gdXNlIGZvciBhdXRvLWNvbXBsZXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IG9wdHMudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBpbnB1dCBlbCBzZWxlY3RvciBmb3IgYXV0byBjb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5faW5wdXRFbCA9IG9wdHMuaW5wdXRFbCB8fCAnLmpzLXlleHQtcXVlcnknO1xuXG4gICAgLyoqXG4gICAgICogQSBzZWxlY3RvciBmb3IgdGhlIGF1dG9jb21wbGV0ZSBlbGVtZW50ZXNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2F1dG9jb21wbGV0ZUVscyA9IG9wdHMuYXV0b0NvbXBsZXRlRWxzIHx8ICcuanMteWV4dC1hdXRvY29tbGV0ZS1vcHRpb24nO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIGZvciB0aGUgZGF0YS1zdG9yYWdlIHRvIGxpc3RlbiBmb3IgdXBkYXRlcyBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBgJHtTdG9yYWdlS2V5cy5BVVRPQ09NUExFVEV9LiR7dGhpcy5uYW1lfWA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBoYW5kbGViYXJzIHRlbXBsYXRlIG5hbWUgdG8gdXNlIGZvciByZW5kZXJpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdzZWFyY2gvYXV0b2NvbXBsZXRlJztcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgaW5wdXQgdmFsdWUgd2hlbiB0eXBpbmcuXG4gICAgICogV2UgdXNlIHRoaXMgZm9yIHJlc2V0dGluZyB0aGUgc3RhdGUgb2YgdGhlIGlucHV0IHZhbHVlIHdoZW4gb3RoZXIgaW50ZXJhY3Rpb25zIChlLmcuIHJlc3VsdCBuYXZpZ2F0aW9uKVxuICAgICAqIGNoYW5nZSBiYXNlZCBvbiBpbnRlcmFjdGlvbnMuIEZvciBpbnN0YW5jZSwgaGl0dGluZyBlc2NhcGUgc2hvdWxkIHJlc2V0IHRoZSB2YWx1ZSB0byB0aGUgb3JpZ2luYWwgdHlwZWQgcXVlcnkuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gb3B0cy5vcmlnaW5hbFF1ZXJ5IHx8ICcnO1xuXG4gICAgLyoqXG4gICAgICogVXNlZCBmb3Iga2V5Ym9hcmQgbmF2aWdhdGlvbiB0aHJvdWdoIHJlc3VsdHMuXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IHNlY3Rpb24gd2UncmUgbmF2aWdhdGluZyBpbi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3NlY3Rpb25JbmRleCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uIHRocm91Z2ggcmVzdWx0cy5cbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgcmVzdWx0IGluZGV4IHdlJ3JlIG5hdmlnYXRpbmcgb24uXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZXN1bHRJbmRleCA9IC0xO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHRleHQgdG8gc2hvdyBhcyB0aGUgZmlyc3QgaXRlbSBmb3IgYXV0byBjb21wbGV0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnByb21wdEhlYWRlciA9IG9wdHMucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBpbnZva2VkIHdoZW4gdGhlIGBFbnRlcmAga2V5IGlzIHByZXNzZWQgb24gYXV0byBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICB0aGlzLl9vblN1Ym1pdCA9IG9wdHMub25TdWJtaXQgfHwgZnVuY3Rpb24gKCkge307XG4gIH1cblxuICAvKipcbiAgICogVGhlIGFsaWFzZWQgdXNlZCBieSB0aGUgY29tcG9uZW50IG1hbmFnZXIgZm9yIGNyZWF0aW9uLlxuICAgKi9cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0F1dG9Db21wbGV0ZSc7XG4gIH1cblxuICAvKipcbiAgICogc2V0U3RhdGUgaXMgb3ZlcnJpZGRlbiBzbyB0aGF0IHdlIGNhbiBwcm92aWRlIGFkZGl0aW9uYWwgbWV0YSBkYXRhXG4gICAqIHRvIHRoZSB0ZW1wbGF0ZSAoZS5nLiB0aGUgc2VjdGlvbkluZGV4IGFuZCByZXN1bHRJbmRleCksIHNpbmNlXG4gICAqIHRob3NlIGFyZSBjbGllbnQtaW50ZXJhY3Rpb24gc3BlY2lmaWMgdmFsdWVzIGFuZCBhcmVuJ3QgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyLlxuICAgKi9cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBzZWN0aW9uSW5kZXg6IHRoaXMuX3NlY3Rpb25JbmRleCxcbiAgICAgIHJlc3VsdEluZGV4OiB0aGlzLl9yZXN1bHRJbmRleCxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5fb3JpZ2luYWxRdWVyeS5sZW5ndGggPT09IDAgPyB0aGlzLnByb21wdEhlYWRlciA6IG51bGxcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogdXBkYXRlU3RhdGUgaXMgYSBoZWxwZXIgdG8gYXBwbHkgdGhlIGN1cnJlbnQgc3RhdGUgd2l0aCBuZXcgY2xpZW50LXN0YXRlLlxuICAgKi9cbiAgdXBkYXRlU3RhdGUgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fc3RhdGUuZ2V0KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uQ3JlYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgY29uc3RydWN0ZWQgZnJvbSB0aGUgZnJhbWV3b3JrLlxuICAgKiBPbmNlIHdlJ3JlIGluaXRhbGl6ZWQsIHdlIHdpcmUgdXAgYWxsIG9mIG91ciB1c2VyIGludGVyYWN0aW9uc1xuICAgKi9cbiAgb25DcmVhdGUgKCkge1xuICAgIC8vIFVzZSB0aGUgY29udGV4dCBvZiB0aGUgcGFyZW50IGNvbXBvbmVudCB0byBmaW5kIHRoZSBpbnB1dCBub2RlLlxuICAgIGxldCBxdWVyeUlucHV0ID0gRE9NLnF1ZXJ5KHRoaXMuX3BhcmVudC5fY29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKTtcbiAgICBpZiAoIXF1ZXJ5SW5wdXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGluaXRpYWxpemUgQXV0b0NvbXBsZXRlLiBDYW4gbm90IGZpbmQge0hUTUxFbGVtZW50fSBgJywgdGhpcy5faW5wdXRFbCwgJ2AuJyk7XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSB0aGUgbmF0aXZlIGF1dG8gY29tcGxldGVcbiAgICBET00uYXR0cihxdWVyeUlucHV0LCAnYXV0b0NvbXBsZXRlJywgJ29mZicpO1xuXG4gICAgLy8gVGhlIHVzZXIgZXhpdHMgdGhlIGlucHV0LCBzbyB3ZSB3YW50IHRvIHJlc2V0IHRoZSBzdGF0ZSBhbmQgY2xvc2VcbiAgICAvLyB0aGUgYXV0byBjb21wbGV0ZVxuICAgIC8vIFRPRE8oamRlbGVybWUpOiBDbG9zZSBsb2dpYyB0byBiZSBtb3ZlZCB0byBwYXJlbnRcbiAgICBET00ub24oZG9jdW1lbnQsICdjbGljaycsIGUgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5qcy15ZXh0LWF1dG9jb21wbGV0ZS1jb250YWluZXIgKicpIHx8IGUudGFyZ2V0Lm1hdGNoZXModGhpcy5faW5wdXRFbCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gV2hlbiBhIHVzZXIgZm9jdXNlcyB0aGUgaW5wdXQsIHdlIHNob3VsZCBwb3B1bGF0ZSB0aGUgYXV0b2NvbXBsZXRlIGJhc2VkXG4gICAgLy8gb24gdGhlIGN1cnJlbnQgdmFsdWVcbiAgICBET00ub24ocXVlcnlJbnB1dCwgJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgdGhpcy5hdXRvQ29tcGxldGUocXVlcnlJbnB1dC52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBuYXZpZ2F0ZSBiZXR3ZWVuIHRoZSByZXN1bHRzIHVzaW5nIHRoZSBrZXlib2FyZFxuICAgIERPTS5vbihxdWVyeUlucHV0LCAna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZU5hdmlnYXRlUmVzdWx0cyhlLmtleUNvZGUsIGUpO1xuICAgICAgdGhpcy5oYW5kbGVTdWJtaXRSZXN1bHQoZS5rZXlDb2RlLCBxdWVyeUlucHV0LnZhbHVlLCBlKTtcbiAgICB9KTtcblxuICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIHNlbGVjdCBhIHJlc3VsdCB3aXRoIHRoZSBtb3VzZVxuICAgIERPTS5kZWxlZ2F0ZSh0aGlzLl9jb250YWluZXIsICcuanMteWV4dC1hdXRvY29tcGxldGUtb3B0aW9uJywgJ2NsaWNrJywgKGV2dCwgdGFyZ2V0KSA9PiB7XG4gICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhc2V0O1xuICAgICAgbGV0IHZhbCA9IGRhdGEuc2hvcnQ7XG5cbiAgICAgIHRoaXMudXBkYXRlUXVlcnkodmFsKTtcbiAgICAgIHRoaXMuX29uU3VibWl0KHZhbCwgZGF0YS5maWx0ZXIpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gV2hlbiB0aGUgdXNlciBpcyB0eXBpbmcgaW4gdGhlIGlucHV0LCBwcm9jZXNzIHRoZSBhdXRvIGNvbXBsZXRlLlxuICAgIERPTS5vbihxdWVyeUlucHV0LCAna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVUeXBpbmcoZS5rZXlDb2RlLCBxdWVyeUlucHV0LnZhbHVlLCBlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjbG9zZSB3aWxsIGhpZGUgdGhlIGF1dG8gY29tcGxldGUgcmVzdWx0cyBhbmQgcmVzZXQgdGhlIHN0YXRlLlxuICAgKi9cbiAgY2xvc2UgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe30pO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXNldHMgdGhlIGNsaWVudCBzdGF0ZSB0byB0aGVpciBvcmlnaW5hbCB2YWx1ZXMgYW5kIHRyaWdnZXJzXG4gICAqIGEgdGVtcGxhdGUtcmVyZW5kZXIgdmlhIHVwZGF0ZVN0YXRlXG4gICAqL1xuICByZXNldCAoKSB7XG4gICAgdGhpcy5fc2VjdGlvbkluZGV4ID0gMDtcbiAgICB0aGlzLl9yZXN1bHRJbmRleCA9IC0xO1xuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHRvIHVwZGF0ZSB0aGUgaW5wdXQgdGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0VmFsdWUgT3B0aW9uIHZhbHVlIHByb3ZpZGVkLlxuICAgKiBJZiBubyB2YWx1ZSBwcm92aWRlZCwgd2UnbGwgdHJ5IHRvIGZpbmQgaXQgYmFzZWQgb24gdGhlIHNlbGVjdGlvbiBpbmRleGVzLlxuICAgKi9cbiAgdXBkYXRlUXVlcnkgKG9wdFZhbHVlKSB7XG4gICAgLy8gT25seSB3YW50IHRvIHVwZGF0ZSB0aGUgcXVlcnkgc3RyaW5nIGlmIHRoZXJlcyBhIHZhbHVlLlxuICAgIC8vIElmIG9uZSBpcyBwcm92aWRlZCwgZ3JlYXQuXG4gICAgLy8gT3RoZXJ3aXNlLCBsZXRzIHRyeSB0byBmaW5kIGl0IGZyb20gdGhlIGN1cnJlbnQgc2VsZWN0aW9uIGluIHRoZSByZXN1bHRzLlxuICAgIGlmIChvcHRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG5cbiAgICAgIGxldCByZXN1bHRzID0gc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzO1xuICAgICAgb3B0VmFsdWUgPSByZXN1bHRzW3RoaXMuX3Jlc3VsdEluZGV4XS5zaG9ydFZhbHVlO1xuICAgIH1cblxuICAgIGxldCBxdWVyeUVsID0gRE9NLnF1ZXJ5KHRoaXMuX3BhcmVudC5fY29udGFpbmVyLCAnLmpzLXlleHQtcXVlcnknKTtcbiAgICBxdWVyeUVsLnZhbHVlID0gb3B0VmFsdWU7XG4gIH1cblxuICBoYW5kbGVUeXBpbmcgKGtleSwgdmFsdWUsIGUpIHtcbiAgICBsZXQgaWdub3JlZEtleXMgPSBbXG4gICAgICBLZXlzLkRPV04sXG4gICAgICBLZXlzLlVQLFxuICAgICAgS2V5cy5DVFJMLFxuICAgICAgS2V5cy5BTFQsXG4gICAgICBLZXlzLlNISUZULFxuICAgICAgS2V5cy5MRUZULFxuICAgICAgS2V5cy5SSUdIVCxcbiAgICAgIEtleXMuTEVGVF9PU19LRVksXG4gICAgICBLZXlzLlJJR0hUX09TX0tFWSxcbiAgICAgIEtleXMuRU5URVIsXG4gICAgICBLZXlzLlNFTEVDVF9LRVlcbiAgICBdO1xuXG4gICAgaWYgKGlnbm9yZWRLZXlzLmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVXNlciBlc2NhcGVzIG91dCBvZiBhdXRvIGNvbXBsZXRlLCBzbyB3ZSByZXNldCBpdCB0byB0aGUgb3JpZ2luYWwgaW5wdXRcbiAgICBpZiAoa2V5ID09PSBLZXlzLkVTQ0FQRSkge1xuICAgICAgdGhpcy51cGRhdGVRdWVyeSh0aGlzLl9vcmlnaW5hbFF1ZXJ5KTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUYWJiaW5nIG91dCBvciBlbnRlciBzaG91bGQgY2xvc2UgdGhlIGF1dG8gY29tcGxldGUuXG4gICAgaWYgKGtleSA9PT0gS2V5cy5UQUIpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIG9yaWdpbmFsIHZhbHVlIGJhc2VkIG9uIHRoZSB1c2VyIGlucHV0XG4gICAgdGhpcy5fb3JpZ2luYWxRdWVyeSA9IHZhbHVlO1xuXG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHRoaXMuYXV0b0NvbXBsZXRlKHZhbHVlKTtcbiAgfVxuXG4gIGF1dG9Db21wbGV0ZSAoaW5wdXQpIHtcbiAgICBpZiAodGhpcy5pc0ZpbHRlclNlYXJjaCkge1xuICAgICAgdGhpcy5jb3JlLmF1dG9Db21wbGV0ZUZpbHRlcihpbnB1dCwgdGhpcy5uYW1lLCB0aGlzLl92ZXJ0aWNhbEtleSwgdGhpcy5fYmFyS2V5KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3ZlcnRpY2FsS2V5IHx8IHRoaXMuX2JhcktleSkge1xuICAgICAgdGhpcy5jb3JlLmF1dG9Db21wbGV0ZVZlcnRpY2FsKGlucHV0LCB0aGlzLm5hbWUsIHRoaXMuX3ZlcnRpY2FsS2V5LCB0aGlzLl9iYXJLZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlVW5pdmVyc2FsKGlucHV0LCB0aGlzLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU5hdmlnYXRlUmVzdWx0cyAoa2V5LCBlKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gdGhpcy5fc3RhdGUuZ2V0KCdzZWN0aW9ucycpO1xuICAgIGlmIChzZWN0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IHNlY3Rpb25zLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdHMgPSBzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHM7XG4gICAgaWYgKGtleSA9PT0gS2V5cy5VUCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRoaXMuX3Jlc3VsdEluZGV4IDw9IDApIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlY3Rpb25JbmRleCA+IDApIHtcbiAgICAgICAgICB0aGlzLl9zZWN0aW9uSW5kZXgtLTtcbiAgICAgICAgICB0aGlzLl9yZXN1bHRJbmRleCA9IHNlY3Rpb25zW3RoaXMuX3NlY3Rpb25JbmRleF0ucmVzdWx0cy5sZW5ndGggLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudXBkYXRlUXVlcnkodGhpcy5fb3JpZ2luYWxRdWVyeSk7XG4gICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZXN1bHRJbmRleC0tO1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChrZXkgPT09IEtleXMuRE9XTikge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRoaXMuX3Jlc3VsdEluZGV4ID49IHJlc3VsdHMubGVuZ3RoIC0gMSkge1xuICAgICAgICBpZiAodGhpcy5fc2VjdGlvbkluZGV4IDwgc2VjdGlvbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHRoaXMuX3NlY3Rpb25JbmRleCsrO1xuICAgICAgICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZXN1bHRJbmRleCsrO1xuICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdFJlc3VsdCAoa2V5LCB2YWx1ZSwgZSkge1xuICAgIGxldCBzZWN0aW9ucyA9IHRoaXMuX3N0YXRlLmdldCgnc2VjdGlvbnMnKTtcbiAgICBpZiAoc2VjdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBzZWN0aW9ucy5sZW5ndGggPD0gMCkge1xuICAgICAgaWYgKHRoaXMuaXNGaWx0ZXJTZWFyY2gpIHtcbiAgICAgICAgdGhpcy5hdXRvQ29tcGxldGUodmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHN1Ym1pdCB0aGUgc2VhcmNoIG9uIGVudGVyXG4gICAgaWYgKGtleSA9PT0gS2V5cy5FTlRFUikge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAodGhpcy5pc0ZpbHRlclNlYXJjaCAmJiB0aGlzLl9yZXN1bHRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgZmlsdGVyID0gJyc7XG4gICAgICBpZiAodGhpcy5fc2VjdGlvbkluZGV4ID49IDAgJiYgdGhpcy5fcmVzdWx0SW5kZXggPj0gMCkge1xuICAgICAgICBmaWx0ZXIgPSBKU09OLnN0cmluZ2lmeShzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHNbdGhpcy5fcmVzdWx0SW5kZXhdLmZpbHRlcik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlUXVlcnkodmFsdWUpO1xuICAgICAgdGhpcy5fb3JpZ2luYWxRdWVyeSA9IHZhbHVlO1xuICAgICAgdGhpcy5fb25TdWJtaXQodmFsdWUsIGZpbHRlcik7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXJPcHRpb25zQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgc3VwcG9ydGVkIGNvbnRyb2xzXG4gKiBAdHlwZSB7c3RyaW5nW119XG4gKi9cbmNvbnN0IFNVUFBPUlRFRF9DT05UUk9MUyA9IFtcbiAgJ3NpbmdsZW9wdGlvbicsXG4gICdtdWx0aW9wdGlvbidcbl07XG5cbi8qKlxuICogUmVuZGVycyBhIHNldCBvZiBvcHRpb25zLCBlYWNoIG9uZSByZXByZXNlbnRpbmcgYSBmaWx0ZXIgaW4gYSBzZWFyY2guXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlck9wdGlvbnNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgaWYgKCFjb25maWcuY29udHJvbCB8fCAhU1VQUE9SVEVEX0NPTlRST0xTLmluY2x1ZGVzKGNvbmZpZy5jb250cm9sKSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMgcmVxdWlyZXMgYSB2YWxpZCBcImNvbnRyb2xcIiB0byBiZSBwcm92aWRlZCcsXG4gICAgICAgICdGaWx0ZXJPcHRpb25zJyk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25maWcub3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMgY29tcG9uZW50IHJlcXVpcmVzIG9wdGlvbnMgdG8gYmUgcHJvdmlkZWQnLFxuICAgICAgICAnRmlsdGVyT3B0aW9ucycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGZpbHRlciBvcHRpb25zIHRvIGRpc3BsYXkgd2l0aCBjaGVja2VkIHN0YXR1c1xuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29wdGlvbnMgPSBjb25maWcub3B0aW9ucy5tYXAobyA9PiBPYmplY3QuYXNzaWduKHt9LCBvLCB7IGNoZWNrZWQ6IGZhbHNlIH0pKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIGNvbnRyb2wgdG8gZGlzcGxheVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9jb250cm9sID0gY29uZmlnLmNvbnRyb2w7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0b3IgdXNlZCBmb3Igb3B0aW9ucyBpbiB0aGUgdGVtcGxhdGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb3B0aW9uU2VsZWN0b3IgPSBjb25maWcub3B0aW9uU2VsZWN0b3IgfHwgJy5qcy15ZXh0LWZpbHRlci1vcHRpb24nO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc3RvcmVzIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBvbiBlYWNoIGNoYW5nZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RvcmVPbkNoYW5nZSA9IGNvbmZpZy5zdG9yZU9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBjaGFuZ2VkXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBjb25maWcub25DaGFuZ2UgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gYmUgdXNlZCBpbiB0aGUgbGVnZW5kXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xhYmVsID0gY29uZmlnLmxhYmVsIHx8ICdGaWx0ZXJzJztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXIsIGJhc2VkIG9uIHRoZSBjb250cm9sXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IGBjb250cm9scy8ke2NvbmZpZy5jb250cm9sfWA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRmlsdGVyT3B0aW9ucyc7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIG9wdGlvbnM6IHRoaXMuX29wdGlvbnMsXG4gICAgICBsYWJlbDogdGhpcy5fbGFiZWxcbiAgICB9KSk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICBET00uZGVsZWdhdGUodGhpcy5fY29udGFpbmVyLCB0aGlzLl9vcHRpb25TZWxlY3RvciwgJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl91cGRhdGVPcHRpb24ocGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXgpLCBldmVudC50YXJnZXQuY2hlY2tlZCk7XG5cbiAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuX2J1aWxkRmlsdGVyKCk7XG4gICAgICBpZiAodGhpcy5fc3RvcmVPbkNoYW5nZSkge1xuICAgICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgZmlsdGVyKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fb25DaGFuZ2UoZmlsdGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIF91cGRhdGVPcHRpb24gKGluZGV4LCBjaGVja2VkKSB7XG4gICAgaWYgKHRoaXMuX2NvbnRyb2wgPT09ICdzaW5nbGVvcHRpb24nKSB7XG4gICAgICB0aGlzLl9vcHRpb25zID0gdGhpcy5fb3B0aW9ucy5tYXAobyA9PiBPYmplY3QuYXNzaWduKHt9LCBvLCB7IGNoZWNrZWQ6IGZhbHNlIH0pKTtcbiAgICB9XG5cbiAgICB0aGlzLl9vcHRpb25zW2luZGV4XSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX29wdGlvbnNbaW5kZXhdLCB7IGNoZWNrZWQgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBvcHRpb25zXG4gICAqL1xuICBjbGVhciAoKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBET00ucXVlcnlBbGwodGhpcy5fY29udGFpbmVyLCB0aGlzLl9vcHRpb25TZWxlY3Rvcik7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlID0+IGUuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2ZhbHNlJykpO1xuICAgIHRoaXMuX2FwcGx5RmlsdGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgYW5kIHJldHVybiB0aGUgRmlsdGVyIHRoYXQgcmVwcmVzZW50cyB0aGUgY3VycmVudCBzdGF0ZVxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2J1aWxkRmlsdGVyICgpIHtcbiAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5fb3B0aW9uc1xuICAgICAgLmZpbHRlcihvID0+IG8uY2hlY2tlZClcbiAgICAgIC5tYXAobyA9PiBGaWx0ZXIuZXF1YWwoby5maWVsZCwgby52YWx1ZSkpO1xuXG4gICAgcmV0dXJuIGZpbHRlcnMubGVuZ3RoID4gMFxuICAgICAgPyBGaWx0ZXIuZ3JvdXAoLi4uZmlsdGVycylcbiAgICAgIDoge307XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZpbHRlckJveENvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuXG4vKipcbiAqIFJlbmRlcnMgYSBzZXQgb2YgZmlsdGVycywgYW5kIHNlYXJjaGVzIHdpdGggdGhlbSB3aGVuIGFwcGxpZWQuXG4gKiBNdWx0aXBsZSBGaWx0ZXJCb3ggY29tcG9uZW50cyB3aWxsIEFORCB0b2dldGhlciBidXQgd2lsbCBub3Qgc2hhcmUgc3RhdGUuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyQm94Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIGlmICghY29uZmlnLmZpbHRlcnMgfHwgIShjb25maWcuZmlsdGVycyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlckJveCByZXF1aXJlcyBmaWx0ZXJzIHRvIGJlIHByb3ZpZGVkIGFzIGFuIGFycmF5JyxcbiAgICAgICAgJ0ZpbHRlckJveCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGZpbHRlcnMgdG8gZGlzcGxheSBhbmQgY29udHJvbFxuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlckNvbmZpZ3MgPSBjb25maWcuZmlsdGVycztcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBzZWFyY2hcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRyaWdnZXIgYSBzZWFyY2ggb24gZWFjaCBjaGFuZ2UgdG8gYSBmaWx0ZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaE9uQ2hhbmdlID0gY29uZmlnLnNlYXJjaE9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdG9yIG9mIHRoZSBhcHBseSBidXR0b25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBwbHlCdXR0b25TZWxlY3RvciA9IGNvbmZpZy5hcHBseUJ1dHRvblNlbGVjdG9yIHx8ICcuanMteWV4dC1maWx0ZXJib3gtYXBwbHknO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudHMgY3JlYXRlZCBmb3IgZWFjaCBmaWx0ZXIgY29uZmlnXG4gICAgICogQHR5cGUge0NvbXBvbmVudFtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGZpbHRlciBjb21wb25lbnRzIGluIHRoZSBib3hcbiAgICAgKiBAdHlwZSB7RmlsdGVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVycyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSBgZmlsdGVycy9maWx0ZXJib3hgO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0ZpbHRlckJveCc7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgZmlsdGVyQ29uZmlnczogdGhpcy5fZmlsdGVyQ29uZmlncyxcbiAgICAgIHNob3dBcHBseUJ1dHRvbjogIXRoaXMuX3NlYXJjaE9uQ2hhbmdlXG4gICAgfSkpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgLy8gSW5pdGlhbGl6ZSBmaWx0ZXJzIGZyb20gY29uZmlnc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZmlsdGVyQ29uZmlncy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5fZmlsdGVyQ29uZmlnc1tpXTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoY29uZmlnLnR5cGUsIE9iamVjdC5hc3NpZ24oe30sXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmZpbHRlciR7aX1gLFxuICAgICAgICAgIHN0b3JlT25DaGFuZ2U6IGZhbHNlLFxuICAgICAgICAgIGNvbnRhaW5lcjogYC5qcy15ZXh0LWZpbHRlcmJveC1maWx0ZXIke2l9YCxcbiAgICAgICAgICBvbkNoYW5nZTogKGYpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25GaWx0ZXJDaGFuZ2UoaSwgZik7XG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICBjb21wb25lbnQubW91bnQoKTtcbiAgICAgIHRoaXMuX2ZpbHRlckNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgYXBwbHkgYnV0dG9uXG4gICAgaWYgKCF0aGlzLl9zZWFyY2hPbkNoYW5nZSkge1xuICAgICAgY29uc3QgYnV0dG9uID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fYXBwbHlCdXR0b25TZWxlY3Rvcik7XG4gICAgICBET00ub24oYnV0dG9uLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NhdmVGaWx0ZXJzVG9TdG9yYWdlKCk7XG4gICAgICAgIHRoaXMuX3NlYXJjaCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBjaGFuZ2VzIHRvIGNoaWxkIGZpbHRlciBjb21wb25lbnRzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGNoYW5nZWQgZmlsdGVyXG4gICAqIEBwYXJhbSB7RmlsdGVyfSBmaWx0ZXIgVGhlIG5ldyBmaWx0ZXJcbiAgICovXG4gIG9uRmlsdGVyQ2hhbmdlIChpbmRleCwgZmlsdGVyKSB7XG4gICAgdGhpcy5fZmlsdGVyc1tpbmRleF0gPSBmaWx0ZXI7XG4gICAgaWYgKHRoaXMuX3NlYXJjaE9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLl9zYXZlRmlsdGVyc1RvU3RvcmFnZSgpO1xuICAgICAgdGhpcy5fc2VhcmNoKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgY3VycmVudCBmaWx0ZXJzIHRvIHN0b3JhZ2UgdG8gYmUgdXNlZCBpbiB0aGUgbmV4dCBzZWFyY2hcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zYXZlRmlsdGVyc1RvU3RvcmFnZSAoKSB7XG4gICAgY29uc3QgdmFsaWRGaWx0ZXJzID0gdGhpcy5fZmlsdGVycy5maWx0ZXIoZiA9PiBmICE9PSB1bmRlZmluZWQgJiYgZiAhPT0gbnVsbCk7XG4gICAgY29uc3QgY29tYmluZWRGaWx0ZXIgPSB2YWxpZEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgPyBGaWx0ZXIuYW5kKC4uLnZhbGlkRmlsdGVycylcbiAgICAgIDogdmFsaWRGaWx0ZXJzWzBdO1xuICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBjb21iaW5lZEZpbHRlciB8fCB7fSk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBhIHNlYXJjaCB3aXRoIGFsbCBmaWx0ZXJzIGluIHN0b3JhZ2VcbiAgICovXG4gIF9zZWFyY2ggKCkge1xuICAgIGNvbnN0IGFsbEZpbHRlcnMgPSB0aGlzLmNvcmUuc3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICBjb25zdCB0b3RhbEZpbHRlciA9IGFsbEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgPyBGaWx0ZXIuYW5kKC4uLmFsbEZpbHRlcnMpXG4gICAgICA6IGFsbEZpbHRlcnNbMF07XG5cbiAgICBjb25zdCBxdWVyeSA9IHRoaXMuY29yZS5zdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKSB8fCAnJztcblxuICAgIHRoaXMuY29yZS52ZXJ0aWNhbFNlYXJjaChxdWVyeSwgdGhpcy5fdmVydGljYWxLZXksIEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIERpcmVjdEFuc3dlckNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0QW5zd2VyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVI7XG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3Jlc3VsdHMvZGlyZWN0YW5zd2VyJztcbiAgfVxuXG4gIGJlZm9yZU1vdW50ICgpIHtcbiAgICBpZiAoIXRoaXMuaGFzU3RhdGUoJ2Fuc3dlcicpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRGlyZWN0QW5zd2VyJztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdyZXN1bHRzL3Jlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdSZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBSZXN1bHRzSXRlbUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdyZXN1bHRzL2xvY2F0aW9ucmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0xvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncmVzdWx0cy9wZW9wbGVyZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE1hcFByb3ZpZGVyICovXG5cbi8qKlxuICogQSBNYXBQcm92aWRlciBpcyBhbiBpbnRlcmZhY2UgdGhhdCByZXByZXNlbnRzIHRoYXQgc2hvdWxkIGJlIGltcGxlbWVudGVkXG4gKiBpbiBvcmRlciB0byBpbnRlZ3JhdGUgd2l0aCBhIFRoaXJkIFBhcnR5IE1hcCBwcm92aWRlciBmb3IgYm90aFxuICogc3RhdGljIGFuZCBpbnRlcmFjdGl2ZSBtYXBzLiBNYXBQcm92aWRlcnMgYXJlIHVzZWQgYnkgdGhlIE1hcENvbXBvbmVudC5cbiAqXG4gKiBJbXBsZW1lbnRhdGlvbnMgc2hvdWxkIGV4dGVuZCB0aGlzIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdXNlZCBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgbWFwIHByb3ZpZGVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIG1hcCB0byBhcHBlbmQgdG8gdGhlIERPTSwgZGVmYXVsdHMgdG8gMTAwJVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5faGVpZ2h0ID0gb3B0cy5oZWlnaHQgfHwgMjAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSBtYXAgdG8gYXBwZW5kIHRvIHRoZSBET00sIGRlZmF1bHRzIHRvIDEwMCVcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3dpZHRoID0gb3B0cy53aWR0aCB8fCA2MDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgem9vbSBsZXZlbCBvZiB0aGUgbWFwLCBkZWZhdWx0cyB0byA5XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl96b29tID0gb3B0cy56b29tIHx8IDk7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgdW5kZXJseWluZyBtYXAgaW5zdGFuY2UsIGNyZWF0ZWQgYnkgdGhlIGV4dGVybmFsIGxpYi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX21hcCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUZW1wb3JhcnkgYm9vbGVhbiB0cmFja2luZyB3aGV0aGVyIG9yIG5vdCB0aGUgZXh0ZXJuYWwgSlMgbGlicmFyeSBpcyBsb2FkZWQgKHNlZSBUT0RPIGJlbG93KVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2lzTG9hZGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugb25jZSB0aGUgSmF2YXNjcmlwdCBpcyBsb2FkZWRcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5fb25Mb2FkZWQgPSBvcHRzLm9uTG9hZGVkIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1c3RvbSBjb25maWd1cmF0aW9uIG92ZXJyaWRlIHRvIHVzZSBmb3IgdGhlIG1hcCBtYXJrZXJzXG4gICAgICogQHR5cGUge09iamVjdHxGdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLl9waW5Db25maWcgPSB0eXBlb2Ygb3B0cy5waW4gPT09ICdmdW5jdGlvbicgPyBvcHRzLnBpbiA6IE9iamVjdC5hc3NpZ24oTWFwUHJvdmlkZXIuREVGQVVMVF9QSU5fQ09ORklHLCBvcHRzLnBpbik7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgY29uZmlndXJhdGlvbiB0byB1c2UgZm9yIHRoZSBtYXAgbWFya2Vyc1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKiBUT0RPKGJpbGx5KSBDcmVhdGUgYSBjb25maWd1cmF0aW9uIG1vZGVsXG4gICAqL1xuICBzdGF0aWMgZ2V0IERFRkFVTFRfUElOX0NPTkZJRyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGljb246IHtcbiAgICAgICAgYW5jaG9yOiBudWxsLCAvLyBlLmcuIHsgeDogMSwgeTogMSB9XG4gICAgICAgIHN2ZzogbnVsbCxcbiAgICAgICAgdXJsOiBudWxsLFxuICAgICAgICBzY2FsZWRTaXplOiBudWxsIC8vIGUuZy4geyB3OiAyMCwgaDogMjAgfVxuICAgICAgfSxcbiAgICAgIGxhYmVsVHlwZTogJ251bWVyaWMnXG4gICAgfTtcbiAgfVxuXG4gIG9uTG9hZGVkIChjYikge1xuICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9vbkxvYWRlZCA9IGNiO1xuICAgIGlmICh0aGlzLmlzTG9hZGVkKCkpIHtcbiAgICAgIHRoaXMuX29uTG9hZGVkKCk7XG4gICAgfVxuICB9XG5cbiAgaXNMb2FkZWQgKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0xvYWRlZDtcbiAgfVxuXG4gIGxvYWRKUyAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmltcGxlbWVudGVkIE1ldGhvZDogbG9hZEpTJyk7XG4gIH1cblxuICBsb2FkU3RhdGljICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaW1wbGVtZW50ZWQgTWV0aG9kOiBsb2FkU3RhdGljJyk7XG4gIH1cblxuICBpbml0IChtYXBEYXRhKSB7XG4gICAgLy8gVE9ETyhiaWxseSkgVGhpcyBzaG91bGQgYmUgYmFzZWQgb2ZmIGEgcHJvbWlzZSB0aGF0IGdldHMgY3JlYXRlZCBmcm9tIGxvYWRKU1xuICAgIHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCBNZXRob2Q6IGluaXQnKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgR29vZ2xlTWFwUHJvdmlkZXIgKi9cblxuaW1wb3J0IE1hcFByb3ZpZGVyIGZyb20gJy4vbWFwcHJvdmlkZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi8uLi9kb20vZG9tJztcblxuLyogZ2xvYmFsIGdvb2dsZSAqL1xuXG4vKipcbiAqIEdvb2dsZU1hcFByb3ZpZGVyIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIGEgTWFwUHJvdmlkZXJcbiAqIHRoYXQgaGFuZGxlcyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgdGhpcmQgcGFydHkgQVBJIHRvIGV4cG9zZSBtYXBzLlxuICogQGV4dGVuZHMgTWFwUHJvdmlkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29vZ2xlTWFwUHJvdmlkZXIgZXh0ZW5kcyBNYXBQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl9jbGllbnRJZCA9IG9wdHMuY2xpZW50SWQ7XG4gICAgdGhpcy5fc2lnbmF0dXJlID0gb3B0cy5zaWduYXR1cmU7XG5cbiAgICBpZiAoIXRoaXMuaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscygpICYmICF0aGlzLl9hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignR29vZ2xlTWFwc1Byb3ZpZGVyOiBNaXNzaW5nIGBhcGlLZXlgIG9yIHtgY2xpZW50SWRgLCBgc2lnbmF0dXJlYH0nKTtcbiAgICB9XG4gIH1cblxuICBsb2FkSlMgKG9uTG9hZCkge1xuICAgIGlmIChET00ucXVlcnkoJyN5ZXh0LW1hcC1qcycpKSB7XG4gICAgICBpZiAodHlwZW9mIG9uTG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvbkxvYWQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWpzJyxcbiAgICAgIG9ubG9hZDogKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX29uTG9hZGVkKCk7XG4gICAgICB9LFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzcmM6IGAvL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/JHt0aGlzLmdlbmVyYXRlQ3JlZGVudGlhbHMoKX1gXG4gICAgfSk7XG5cbiAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgfVxuXG4gIGdlbmVyYXRlU3RhdGljIChtYXBEYXRhKSB7XG4gICAgbGV0IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MgPSBHb29nbGVNYXBNYXJrZXJDb25maWcuZnJvbShcbiAgICAgIG1hcERhdGEubWFwTWFya2VycyxcbiAgICAgIHRoaXMuX3BpbkNvbmZpZ1xuICAgICk7XG5cbiAgICBsZXQgZW5jb2RlZE1hcmtlcnMgPSBHb29nbGVNYXBNYXJrZXJDb25maWcuc2VyaWFsaXplKGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MpO1xuICAgIHJldHVybiBgXG4gICAgICA8aW1nIHNyYz1cIi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9zdGF0aWNtYXA/JHtlbmNvZGVkTWFya2Vyc30mc2l6ZT0ke3RoaXMuX3dpZHRofXgke3RoaXMuX2hlaWdodH0mJHt0aGlzLmdlbmVyYXRlQ3JlZGVudGlhbHMoKX1cIj5gO1xuICB9XG5cbiAgZ2VuZXJhdGVDcmVkZW50aWFscyAoKSB7XG4gICAgaWYgKHRoaXMuaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscygpKSB7XG4gICAgICByZXR1cm4gYGNsaWVudD0ke3RoaXMuX2NsaWVudElkfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBga2V5PSR7dGhpcy5fYXBpS2V5fWA7XG4gICAgfVxuICB9XG5cbiAgaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscyAoKSB7XG4gICAgLy8gU2lnbmF0dXJlIGlzIG9ubHkgcmVxdWlyZWQgaWYgbWFwIGlzIHN0YXRpY1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRJZCAmJiAodGhpcy5fc2lnbmF0dXJlIHx8ICF0aGlzLl9pc1N0YXRpYyk7XG4gIH1cblxuICBpbml0IChlbCwgbWFwRGF0YSkge1xuICAgIGlmICghbWFwRGF0YSB8fCBtYXBEYXRhLm1hcE1hcmtlcnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHRoaXMuX21hcCA9IG51bGw7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBOT1RFKGJpbGx5KSBUaGlzIHRpbWVvdXQgaXMgYSBoYWNrIGZvciBkZWFsaW5nIHdpdGggYXN5bmMgbmF0dXJlLlxuICAgIC8vIE9ubHkgaGVyZSBmb3IgZGVtbyBwdXJwb3Nlcywgc28gd2UnbGwgZml4IGxhdGVyLlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0IGNvbnRhaW5lciA9IERPTS5xdWVyeShlbCk7XG4gICAgICBET00uY3NzKGNvbnRhaW5lciwge1xuICAgICAgICB3aWR0aDogdGhpcy5fd2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5faGVpZ2h0XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGNvbnRhaW5lciwge1xuICAgICAgICB6b29tOiB0aGlzLl96b29tXG4gICAgICB9KTtcblxuICAgICAgLy8gQXBwbHkgb3VyIHNlYXJjaCBkYXRhIHRvIG91ciBHb29nbGVNYXBcbiAgICAgIGxldCBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG4gICAgICBsZXQgZ29vZ2xlTWFwTWFya2VyQ29uZmlncyA9IEdvb2dsZU1hcE1hcmtlckNvbmZpZy5mcm9tKFxuICAgICAgICBtYXBEYXRhLm1hcE1hcmtlcnMsXG4gICAgICAgIHRoaXMuX3BpbkNvbmZpZyxcbiAgICAgICAgdGhpcy5tYXApO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoZ29vZ2xlTWFwTWFya2VyQ29uZmlnc1tpXSk7XG4gICAgICAgIGJvdW5kcy5leHRlbmQobWFya2VyLnBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKGJvdW5kcyk7XG4gICAgfSwgMTAwKTtcbiAgfVxufVxuXG4vLyBUT0RPKGJpbGx5KSBNb3ZlIHRvIG93biBjbGFzc1xuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcE1hcmtlckNvbmZpZyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGdvb2dsZSBtYXAsIHRoYXQgdGhlIG1hcmtlciBpcyBhcHBlbmRlZCB0b1xuICAgICAqIEB0eXBlIHtHb29nbGVNYXB9XG4gICAgICovXG4gICAgdGhpcy5tYXAgPSBvcHRzLm1hcCB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1hcmtlciAobGF0L2xuZylcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMucG9zaXRpb24gPSBvcHRzLnBvc2l0aW9uIHx8IHtcbiAgICAgIGxhdDogdW5kZWZpbmVkLFxuICAgICAgbG5nOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHByb3BlcnRpZXMvc2V0dGluZ3Mgb2YgdGhlIGljb24gdXNlZCBmb3IgdGhlIG1hcmtlclxuICAgICAqIGUuZy4ge1xuICAgICAqICAgICAgICBhbmNob3I6IHsgeDogMCwgeTogMCB9XG4gICAgICogICAgICAgIHVybDogJ3BhdGgvdG8vdXJsLmpwZydcbiAgICAgKiAgICAgICAgc2NhbGVkU2l6ZTogeyB3OiAwLCBoOiAwIH1cbiAgICAgKiAgICAgICB9XG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuaWNvbiA9IG9wdHMuaWNvbiB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgb2YgdGhlIG1hcmtlciB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWwgPSBvcHRzLmxhYmVsIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGFuIGFycmF5IG9mIG1hcmtlciBjb25maWdzXG4gICAqIEBwYXJhbSB7R29vZ2xlTWFwTWFya2VyQ29uZmlnW119IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3NcbiAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZSAoZ29vZ2xlTWFwTWFya2VyQ29uZmlncykge1xuICAgIGxldCBzZXJpYWxpemVkTWFya2VycyA9IFtdO1xuICAgIGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBzZXJpYWxpemVkTWFya2Vycy5wdXNoKGBtYXJrZXJzPWxhYmVsOiR7bWFya2VyLmxhYmVsfXwke21hcmtlci5wb3NpdGlvbi5sYXR9LCR7bWFya2VyLnBvc2l0aW9uLmxuZ31gKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VyaWFsaXplZE1hcmtlcnMuam9pbignJicpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBzdG9yYWdlIGRhdGEgbW9kZWwgb2YgbWFya2VycyBpbnRvIEdvb2dsZUFQSU1hcmtlclxuICAgKiBAcGFyYW0ge0dvb2dsZU1hcH0gQSByZWZlcmVuY2UgdG8gdGhlIGdvb2dsZSBtYXAgdG8gYXBwbHkgdGhlIG1hcmtlciB0b1xuICAgKiBAcGFyYW0ge29iamVjdFtdfSBtYXJrZXJzIFRoZSBkYXRhIG9mIHRoZSBtYXJrZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IHBpbkNvbmZpZyBUaGUgY29uZmlndXJhdGlvbiB0byBhcHBseSB0byB0aGUgbWFya2VyXG4gICAqIEByZXR1cm5zIHtHb29nbGVNYXBNYXJrZXJDb25maWdbXX1cbiAgICovXG4gIHN0YXRpYyBmcm9tIChtYXJrZXJzLCBwaW5Db25maWcsIG1hcCkge1xuICAgIGxldCBnb29nbGVNYXBNYXJrZXJDb25maWdzID0gW107XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1hcmtlcnMpKSB7XG4gICAgICBtYXJrZXJzID0gW21hcmtlcnNdO1xuICAgIH1cblxuICAgIG1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICAvLyBTdXBwb3J0IGNvbmZpZ3VyYXRpb24gYXMgYSBmdW5jdGlvblxuICAgICAgbGV0IHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZztcbiAgICAgIGlmICh0eXBlb2YgcGluQ29uZmlnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZyhcbiAgICAgICAgICBtYXJrZXIuaXRlbSxcbiAgICAgICAgICBNYXBQcm92aWRlci5ERUZBVUxUX1BJTl9DT05GSUcsXG4gICAgICAgICAgbWFya2VyKTtcbiAgICAgIH1cblxuICAgICAgLy8gVHJhbnNmb3JtIG91ciBDb25maWd1cmF0aW9uIE9iamVjdCBpbnRvIHRoZSBleHBlY3RlZFxuICAgICAgLy8gR29vZ2xlIEFQSSBmb3JtYXQuXG4gICAgICBsZXQgaWNvbiA9IHt9O1xuICAgICAgaWYgKHBpbkNvbmZpZ09iai5hbmNob3IpIHtcbiAgICAgICAgaWNvbi5hbmNob3IgPSBnb29nbGUubWFwcy5Qb2ludChwaW5Db25maWdPYmouYW5jaG9yLngsIHBpbkNvbmZpZ09iai5hbmNob3IueSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW5Db25maWdPYmouc2NhbGVkU2l6ZSkge1xuICAgICAgICBpY29uLnNjYWxlZFNpemUgPSBnb29nbGUubWFwcy5TaXplKHBpbkNvbmZpZ09iai5zY2FsZWRTaXplLncsIHBpbkNvbmZpZ09iai5zY2FsZWRTaXplLmgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluQ29uZmlnT2JqLnVybCkge1xuICAgICAgICBpY29uLnVybCA9IHBpbkNvbmZpZ09iai51cmw7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW5Db25maWdPYmouc3ZnKSB7XG4gICAgICAgIGljb24udXJsID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCAke2VuY29kZVVSSUNvbXBvbmVudChwaW5Db25maWdPYmouc3ZnKX1gO1xuICAgICAgfVxuXG4gICAgICBsZXQgbGFiZWw7XG4gICAgICBpZiAocGluQ29uZmlnT2JqLmxhYmVsKSB7XG4gICAgICAgIGxhYmVsID0gcGluQ29uZmlnT2JqLmxhYmVsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFiZWwgPSBtYXJrZXIubGFiZWwudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgLy8gTk9URShiaWxseSkgR29vZ2xlIG1hcHMgZG9lc24ndCBoYW5kbGUgZW1wdHkgaWNvbiBvYmplY3RzIG5pY2VseVxuICAgICAgLy8gTWFrZSBnb29nbGUgbWFwcyBoYXBweSBpZiBubyBzZXR0aW5ncyBmb3IgaWNvbiBhcmUgcHJvdmlkZWQ7XG4gICAgICBpZiAoT2JqZWN0LmtleXMoaWNvbikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGljb24gPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MucHVzaChcbiAgICAgICAgbmV3IEdvb2dsZU1hcE1hcmtlckNvbmZpZyh7XG4gICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIGxhdDogbWFya2VyLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG5nOiBtYXJrZXIubG9uZ2l0dWRlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpY29uOiBpY29uLFxuICAgICAgICAgIGxhYmVsOiBsYWJlbFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBnb29nbGVNYXBNYXJrZXJDb25maWdzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNYXBCb3hNYXBQcm92aWRlciAqL1xuXG5pbXBvcnQgTWFwUHJvdmlkZXIgZnJvbSAnLi9tYXBwcm92aWRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uLy4uL2RvbS9kb20nO1xuXG4vKiBnbG9iYWwgbWFwYm94Z2wgKi9cblxuLyoqXG4gKiBNYXBCb3hNYXBQcm92aWRlciBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiBhIE1hcFByb3ZpZGVyXG4gKiB0aGF0IGhhbmRsZXMgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIHRoaXJkIHBhcnR5IEFQSSB0byBleHBvc2UgbWFwcy5cbiAqIEBleHRlbmRzIE1hcFByb3ZpZGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcEJveE1hcFByb3ZpZGVyIGV4dGVuZHMgTWFwUHJvdmlkZXIge1xuICAvKipcbiAgICogTG9hZCB0aGUgZXh0ZXJuYWwgSlMgTGlicmFyeVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkxvYWQgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdG8gaW52b2tlIG9uY2UgdGhlIEpTIGlzIGxvYWRlZC5cbiAgICovXG4gIGxvYWRKUyAob25Mb2FkKSB7XG4gICAgbGV0IHNjcmlwdCA9IERPTS5jcmVhdGVFbCgnc2NyaXB0Jywge1xuICAgICAgaWQ6ICd5ZXh0LW1hcC1qcycsXG4gICAgICBvbmxvYWQ6ICgpID0+IHtcbiAgICAgICAgdGhpcy5faXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICBtYXBib3hnbC5hY2Nlc3NUb2tlbiA9IHRoaXMuX2FwaUtleTtcblxuICAgICAgICBpZiAodHlwZW9mIG9uTG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG9uTG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzcmM6ICdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MC40NC4xL21hcGJveC1nbC5qcydcbiAgICB9KTtcblxuICAgIGxldCBjc3MgPSBET00uY3JlYXRlRWwoJ2xpbmsnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWNzcycsXG4gICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgIGhyZWY6ICdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MC40NC4xL21hcGJveC1nbC5jc3MnXG4gICAgfSk7XG5cbiAgICBET00uYXBwZW5kKCdib2R5JywgY3NzKTtcbiAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgfVxuXG4gIGdlbmVyYXRlU3RhdGljIChtYXBEYXRhKSB7XG4gICAgbGV0IG1hcGJveE1hcE1hcmtlckNvbmZpZ3MgPSBNYXBCb3hNYXJrZXJDb25maWcuZnJvbShcbiAgICAgIG1hcERhdGEubWFwTWFya2VycyxcbiAgICAgIHRoaXMuX3BpbkNvbmZpZ1xuICAgICk7XG5cbiAgICBsZXQgY2VudGVyID0gbWFwRGF0YS5tYXBDZW50ZXI7XG4gICAgbGV0IHdpZHRoID0gdGhpcy5fd2lkdGggfHwgNjAwO1xuICAgIGxldCBoZWlnaHQgPSB0aGlzLl9oZWlnaHQgfHwgMjAwO1xuICAgIGxldCB6b29tID0gdGhpcy5fem9vbSB8fCA5O1xuXG4gICAgbGV0IGVuY29kZWRNYXJrZXJzID0gTWFwQm94TWFya2VyQ29uZmlnLnNlcmlhbGl6ZShtYXBib3hNYXBNYXJrZXJDb25maWdzKTtcbiAgICByZXR1cm4gYDxpbWcgc3JjPVwiaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9zdHlsZXMvdjEvbWFwYm94L3N0cmVldHMtdjExL3N0YXRpYy8ke2VuY29kZWRNYXJrZXJzfS8ke2NlbnRlci5sb25naXR1ZGV9LCR7Y2VudGVyLmxhdGl0dWRlfSwke3pvb219L2F1dG8vJHt3aWR0aH14JHtoZWlnaHR9P2FjY2Vzc190b2tlbj0ke3RoaXMuX2FwaUtleX1cIj5gO1xuICB9XG5cbiAgaW5pdCAoZWwsIG1hcERhdGEpIHtcbiAgICBpZiAoIW1hcERhdGEgfHwgbWFwRGF0YS5tYXBNYXJrZXJzLmxlbmd0aCA8PSAwKSB7XG4gICAgICB0aGlzLl9tYXAgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRhaW5lciA9IERPTS5xdWVyeShlbCk7XG4gICAgRE9NLmNzcyhjb250YWluZXIsIHtcbiAgICAgIHdpZHRoOiB0aGlzLl93aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5faGVpZ2h0XG4gICAgfSk7XG5cbiAgICB0aGlzLl9tYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgem9vbTogdGhpcy5fem9vbSxcbiAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXY5JyxcbiAgICAgIGNlbnRlcjogW21hcERhdGEubWFwQ2VudGVyLmxvbmdpdHVkZSwgbWFwRGF0YS5tYXBDZW50ZXIubGF0aXR1ZGVdXG4gICAgfSk7XG5cbiAgICBjb25zdCBtYXBib3hNYXBNYXJrZXJDb25maWdzID0gTWFwQm94TWFya2VyQ29uZmlnLmZyb20oXG4gICAgICBtYXBEYXRhLm1hcE1hcmtlcnMsXG4gICAgICB0aGlzLl9waW5Db25maWcsXG4gICAgICB0aGlzLl9tYXApO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXBib3hNYXBNYXJrZXJDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgd3JhcHBlciA9IG1hcGJveE1hcE1hcmtlckNvbmZpZ3NbaV0ud3JhcHBlcjtcbiAgICAgIGxldCBjb29yZHMgPSBuZXcgbWFwYm94Z2wuTG5nTGF0KFxuICAgICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzW2ldLnBvc2l0aW9uLmxvbmdpdHVkZSxcbiAgICAgICAgbWFwYm94TWFwTWFya2VyQ29uZmlnc1tpXS5wb3NpdGlvbi5sYXRpdHVkZSk7XG4gICAgICBsZXQgbWFya2VyID0gbmV3IG1hcGJveGdsLk1hcmtlcih3cmFwcGVyKS5zZXRMbmdMYXQoY29vcmRzKTtcbiAgICAgIG1hcmtlci5hZGRUbyh0aGlzLl9tYXApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWFwQm94TWFya2VyQ29uZmlnIHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgbWFwYm94IG1hcCwgdGhhdCB0aGUgbWFya2VyIGlzIGFwcGVuZGVkIHRvXG4gICAgICogQHR5cGUge01hcEJveH1cbiAgICAgKi9cbiAgICB0aGlzLm1hcCA9IG9wdHMubWFwIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb29yZGluYXRlcyBvZiB0aGUgbWFya2VyIChsYXQvbG5nKVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5wb3NpdGlvbiA9IG9wdHMucG9zaXRpb24gfHwge1xuICAgICAgbGF0aXR1ZGU6IHVuZGVmaW5lZCxcbiAgICAgIGxvbmdpdHVkZTogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBodG1sIGVsZW1lbnQgdG8gYmUgdXNlZCBhcyB0aGUgbWFwIG1hcmtlclxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgdGhpcy53cmFwcGVyID0gb3B0cy53cmFwcGVyIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCBvZiB0aGUgbWFya2VyIHRvIHVzZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbCA9IG9wdHMubGFiZWwgfHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHVybCBvZiB0aGUgcGluIGZvciB0aGUgc3RhdGljIG1hcFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zdGF0aWNNYXBQaW4gPSBvcHRzLnN0YXRpY01hcFBpbiB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhbiBhcnJheSBvZiBtYXJrZXIgY29uZmlnc1xuICAgKiBAcGFyYW0ge01hcEJveE1hcmtlckNvbmZpZ1tdfSBtYXBib3hNYXBNYXJrZXJDb25maWdzXG4gICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemUgKG1hcGJveE1hcE1hcmtlckNvbmZpZ3MpIHtcbiAgICBsZXQgc2VyaWFsaXplZE1hcmtlcnMgPSBbXTtcbiAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgaWYgKG1hcmtlci5zdGF0aWNNYXBQaW4pIHtcbiAgICAgICAgc2VyaWFsaXplZE1hcmtlcnMucHVzaChgdXJsLSR7bWFya2VyLnN0YXRpY01hcFBpbn0oJHttYXJrZXIucG9zaXRpb24ubG9uZ2l0dWRlfSwke21hcmtlci5wb3NpdGlvbi5sYXRpdHVkZX0pYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXJpYWxpemVkTWFya2Vycy5wdXNoKGBwaW4tcy0ke21hcmtlci5sYWJlbH0oJHttYXJrZXIucG9zaXRpb24ubG9uZ2l0dWRlfSwke21hcmtlci5wb3NpdGlvbi5sYXRpdHVkZX0pYCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZWRNYXJrZXJzLmpvaW4oJywnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgc3RvcmFnZSBkYXRhIG1vZGVsIG9mIG1hcmtlcnMgaW50byBHb29nbGVBUElNYXJrZXJcbiAgICogQHBhcmFtIHtNYXBCb3h9IEEgcmVmZXJlbmNlIHRvIHRoZSBnb29nbGUgbWFwIHRvIGFwcGx5IHRoZSBtYXJrZXIgdG9cbiAgICogQHBhcmFtIHtvYmplY3RbXX0gbWFya2VycyBUaGUgZGF0YSBvZiB0aGUgbWFya2VyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwaW5Db25maWcgVGhlIGNvbmZpZ3VyYXRpb24gdG8gYXBwbHkgdG8gdGhlIG1hcmtlclxuICAgKiBAcmV0dXJucyB7TWFwQm94TWFya2VyQ29uZmlnW119XG4gICAqL1xuICBzdGF0aWMgZnJvbSAobWFya2VycywgcGluQ29uZmlnLCBtYXApIHtcbiAgICBsZXQgbWFwYm94TWFwTWFya2VyQ29uZmlncyA9IFtdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShtYXJrZXJzKSkge1xuICAgICAgbWFya2VycyA9IFttYXJrZXJzXTtcbiAgICB9XG5cbiAgICBtYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgLy8gU3VwcG9ydCBjb25maWd1cmF0aW9uIGFzIGEgZnVuY3Rpb25cbiAgICAgIGxldCBwaW5Db25maWdPYmogPSBwaW5Db25maWc7XG4gICAgICBpZiAodHlwZW9mIHBpbkNvbmZpZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwaW5Db25maWdPYmogPSBwaW5Db25maWcoXG4gICAgICAgICAgbWFya2VyLml0ZW0sXG4gICAgICAgICAgTWFwUHJvdmlkZXIuREVGQVVMVF9QSU5fQ09ORklHLFxuICAgICAgICAgIG1hcmtlcik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHdyYXBwZXIgPSBwaW5Db25maWdPYmoud3JhcHBlciA/IHBpbkNvbmZpZ09iai53cmFwcGVyIDogbnVsbDtcbiAgICAgIGNvbnN0IHN0YXRpY01hcFBpbiA9IHBpbkNvbmZpZ09iai5zdGF0aWNNYXBQaW4gPyBwaW5Db25maWdPYmouc3RhdGljTWFwUGluIDogbnVsbDtcblxuICAgICAgbWFwYm94TWFwTWFya2VyQ29uZmlncy5wdXNoKFxuICAgICAgICBuZXcgTWFwQm94TWFya2VyQ29uZmlnKHtcbiAgICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgbGF0aXR1ZGU6IG1hcmtlci5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogbWFya2VyLmxvbmdpdHVkZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgd3JhcHBlcjogd3JhcHBlcixcbiAgICAgICAgICBsYWJlbDogbWFya2VyLmxhYmVsLFxuICAgICAgICAgIHN0YXRpY01hcFBpbjogc3RhdGljTWFwUGluXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hcGJveE1hcE1hcmtlckNvbmZpZ3M7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE1hcENvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmltcG9ydCBHb29nbGVNYXBQcm92aWRlciBmcm9tICcuL3Byb3ZpZGVycy9nb29nbGVtYXBwcm92aWRlcic7XG5pbXBvcnQgTWFwQm94TWFwUHJvdmlkZXIgZnJvbSAnLi9wcm92aWRlcnMvbWFwYm94bWFwcHJvdmlkZXInO1xuXG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuY29uc3QgUHJvdmlkZXJUeXBlcyA9IHtcbiAgJ2dvb2dsZSc6IEdvb2dsZU1hcFByb3ZpZGVyLFxuICAnbWFwYm94JzogTWFwQm94TWFwUHJvdmlkZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIC8qKlxuICAgICAqIEJpbmQgdGhpcyBjb21wb25lbnQgdG8gbGlzdGVuIHRvIHRoZSBzdG9yYWdlIGJhc2VkIG9uIHRoaXMga2V5XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCB0ZW1wbGF0ZSB0byB1c2UgdG8gcmVuZGVyIHRoaXMgY29tcG9uZW50XG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3Jlc3VsdHMvbWFwJztcblxuICAgIC8qKlxuICAgICAqIEFuIGFsaWFzZWQgdXNlZCB0byBkZXRlcm1pbmUgdGhlIHR5cGUgb2YgbWFwIHByb3ZpZGVyIHRvIHVzZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fbWFwUHJvdmlkZXIgPSBvcHRzLm1hcFByb3ZpZGVyO1xuICAgIGlmICghdGhpcy5fbWFwUHJvdmlkZXIgfHwgISh0aGlzLl9tYXBQcm92aWRlci50b0xvd2VyQ2FzZSgpIGluIFByb3ZpZGVyVHlwZXMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hcENvbXBvbmVudDogSW52YWxpZCBNYXAgUHJvdmlkZXI7IG11c3QgYmUgYGdvb2dsZWAgb3IgYG1hcEJveGAnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBpbmRpY2F0aW9uIG9mIHdoZXRoZXIgb3Igbm90IHRvIHVzZSBhIHN0YXRpYyBvciBkeW5hbWljIG1hcFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2lzU3RhdGljID0gb3B0cy5pc1N0YXRpYyB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIGFuIGluc3RhbmNlIG9mIHRoZSB7TWFwUHJvdmlkZXJ9IHRoYXQncyBjb25zdHJ1Y3RlZFxuICAgICAqIEB0eXBlIHtNYXBQcm92aWRlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9tYXAgPSBudWxsO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ01hcCc7XG4gIH1cblxuICAvLyBUT0RPKGJpbGx5KSBNYWtlIFByb3ZpZGVyVHlwZXMgYSBmYWN0b3J5IGNsYXNzXG4gIGdldFByb3ZpZGVySW5zdGFuY2UgKHR5cGUpIHtcbiAgICByZXR1cm4gbmV3IFByb3ZpZGVyVHlwZXNbdHlwZS50b0xvd2VyQ2FzZSgpXSh0aGlzLl9jb25maWcpO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIHRoaXMuX21hcCA9IHRoaXMuZ2V0UHJvdmlkZXJJbnN0YW5jZSh0aGlzLl9tYXBQcm92aWRlcik7XG4gICAgbGV0IG1hcERhdGEgPSB0aGlzLmdldFN0YXRlKCdtYXAnKTtcbiAgICBpZiAobWFwRGF0YSA9PT0gdW5kZWZpbmVkICYmIHRoaXMuX2lzU3RhdGljKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTdGF0aWMpIHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIFRoZSBleGlzdGluZyB0ZW1wbGF0ZSBzaG91bGQganVzdCB0YWtlIGluIHRoZSBtYXAgYGltZ1VSTGAgYXMgZGF0YVxuICAgICAgLy8gSW5zdGVhZCBvZiBvdmVycmlkaW5nIHRoZSB0ZW1wbGF0ZSBsaWtlIHNvLCBidXQgTkJEIGZvciBub3cuXG4gICAgICB0aGlzLnNldFRlbXBsYXRlKHRoaXMuX21hcC5nZW5lcmF0ZVN0YXRpYyhtYXBEYXRhKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLl9tYXAubG9hZEpTKCk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICB0aGlzLl9tYXAub25Mb2FkZWQoKCkgPT4ge1xuICAgICAgdGhpcy5fbWFwLmluaXQodGhpcy5fY29udGFpbmVyLCB0aGlzLmdldFN0YXRlKCdtYXAnKSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSwgdmFsKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKGRhdGEsIHZhbCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlc3VsdHNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL2xvY2F0aW9ucmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Blb3BsZXJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBNYXBDb21wb25lbnQgZnJvbSAnLi4vbWFwL21hcGNvbXBvbmVudCc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hTdGF0ZXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3NlYXJjaHN0YXRlcyc7XG5cbmNvbnN0IFJlc3VsdFR5cGUgPSB7XG4gIEVWRU5UOiAnZXZlbnQnLFxuICBMT0NBVElPTjogJ2xvY2F0aW9uJyxcbiAgUEVPUExFOiAncGVvcGxlJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0c0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTO1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdyZXN1bHRzL3Jlc3VsdHMnO1xuICAgIHRoaXMubGltaXQgPSBvcHRzLmxpbWl0IHx8IDU7XG4gICAgdGhpcy5faXRlbUNvbmZpZyA9IHtcbiAgICAgIGdsb2JhbDoge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9LFxuICAgICAgW0V2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZV06IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIFtMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50LnR5cGVdOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH0sXG4gICAgICBbUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZV06IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAob3B0cy5yZW5kZXJJdGVtID09PSB1bmRlZmluZWQgJiYgb3B0cy5fcGFyZW50T3B0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcHRzLnJlbmRlckl0ZW0gPSBvcHRzLl9wYXJlbnRPcHRzLnJlbmRlckl0ZW07XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuaXRlbVRlbXBsYXRlID09PSB1bmRlZmluZWQgJiYgb3B0cy5fcGFyZW50T3B0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcHRzLml0ZW1UZW1wbGF0ZSA9IG9wdHMuX3BhcmVudE9wdHMuaXRlbVRlbXBsYXRlO1xuICAgIH1cblxuICAgIHRoaXMuY29uZmlndXJlSXRlbSh7XG4gICAgICByZW5kZXI6IG9wdHMucmVuZGVySXRlbSxcbiAgICAgIHRlbXBsYXRlOiBvcHRzLml0ZW1UZW1wbGF0ZVxuICAgIH0pO1xuICB9XG5cbiAgbW91bnQgKCkge1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmdldFN0YXRlKCkpLmxlbmd0aCA+IDApIHtcbiAgICAgIHN1cGVyLm1vdW50KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGR1cGxpY2F0ZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhLCB2YWwpIHtcbiAgICBjb25zdCBzZWFyY2hTdGF0ZSA9IGRhdGEuc2VhcmNoU3RhdGUgfHwgU2VhcmNoU3RhdGVzLlBSRV9TRUFSQ0g7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oeyByZXN1bHRzOiBbXSB9LCBkYXRhLCB7XG4gICAgICBpc1ByZVNlYXJjaDogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5QUkVfU0VBUkNILFxuICAgICAgaXNTZWFyY2hMb2FkaW5nOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlNFQVJDSF9MT0FESU5HLFxuICAgICAgaXNTZWFyY2hDb21wbGV0ZTogc2VhcmNoU3RhdGUgPT09IFNlYXJjaFN0YXRlcy5TRUFSQ0hfQ09NUExFVEUsXG4gICAgICBpbmNsdWRlTWFwOiB0aGlzLl9jb25maWcuaW5jbHVkZU1hcCxcbiAgICAgIG1hcENvbmZpZzogdGhpcy5fY29uZmlnLm1hcENvbmZpZ1xuICAgIH0pLCB2YWwpO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1ZlcnRpY2FsUmVzdWx0cyc7XG4gIH1cblxuICBjb25maWd1cmVJdGVtIChjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX2l0ZW1Db25maWcuZ2xvYmFsLnJlbmRlciA9IGNvbmZpZy5yZW5kZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb25maWcucmVuZGVyKSB7XG4gICAgICAgIHRoaXMuc2V0SXRlbVJlbmRlcihrZXksIGNvbmZpZy5yZW5kZXJba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9pdGVtQ29uZmlnLmdsb2JhbC50ZW1wbGF0ZSA9IGNvbmZpZy50ZW1wbGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbmZpZy50ZW1wbGF0ZSkge1xuICAgICAgICB0aGlzLnNldEl0ZW1UZW1wbGF0ZShrZXksIGNvbmZpZy50ZW1wbGF0ZVtrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRJdGVtVGVtcGxhdGUgKHR5cGUsIHRlbXBsYXRlKSB7XG4gICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KHR5cGUpO1xuICAgIHRoaXMuX2l0ZW1Db25maWdbY2xhenoudHlwZV0udGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHNldEl0ZW1SZW5kZXIgKHR5cGUsIHJlbmRlcikge1xuICAgIGxldCBjbGF6eiA9IHRoaXMuZ2V0SXRlbUNvbXBvbmVudCh0eXBlKTtcbiAgICB0aGlzLl9pdGVtQ29uZmlnW2NsYXp6LnR5cGVdLnJlbmRlciA9IHJlbmRlcjtcbiAgfVxuXG4gIGdldEl0ZW1Db21wb25lbnQgKHR5cGUpIHtcbiAgICBsZXQgY29tcCA9IFJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSZXN1bHRUeXBlLkVWRU5UOlxuICAgICAgICBjb21wID0gRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJlc3VsdFR5cGUuTE9DQVRJT046XG4gICAgICAgIGNvbXAgPSBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUmVzdWx0VHlwZS5QRU9QTEU6XG4gICAgICAgIGNvbXAgPSBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXA7XG4gIH1cblxuICBhZGRDaGlsZCAoZGF0YSwgdHlwZSwgb3B0cykge1xuICAgIC8vIFRPRE8oYmlsbHkpIFJlZmFjdG9yIHRoZSB3YXkgY29uZmlndXJhdGlvbiBhbmQgZGF0YSBmbG93c1xuICAgIC8vIHRocm91Z2ggdG9wIGxldmVsIGNvbXBvbmVudHMgdG8gY2hpbGQgY29tcG9uZW50cy5cbiAgICBpZiAodHlwZSA9PT0gUmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZSkge1xuICAgICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KGRhdGEudHlwZSk7XG4gICAgICBpZiAoY2xhenopIHtcbiAgICAgICAgdHlwZSA9IGNsYXp6LnR5cGU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBNYXBDb21wb25lbnQudHlwZSkge1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgbWFwOiBkYXRhXG4gICAgICB9O1xuICAgICAgY29uc3QgbmV3T3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZy5tYXBDb25maWcsIG9wdHMpO1xuICAgICAgcmV0dXJuIHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIG5ld09wdHMpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHRoZSBwcm9wZXIgaXRlbSByZW5kZXJzIHRvIHRoZSB0aGUgY29tcG9uZW50c1xuICAgIC8vIGhhdmUganVzdCBiZWVuIGNvbnN0cnVjdGVkLiBQcmlvcml0aXplIGdsb2JhbCBvdmVyIGluZGl2aWR1YWwgaXRlbXMuXG4gICAgbGV0IGNvbXAgPSBzdXBlci5hZGRDaGlsZChkYXRhLCB0eXBlLCBvcHRzKTtcbiAgICBsZXQgZ2xvYmFsQ29uZmlnID0gdGhpcy5faXRlbUNvbmZpZy5nbG9iYWw7XG4gICAgbGV0IGl0ZW1Db25maWcgPSB0aGlzLl9pdGVtQ29uZmlnW2NvbXAudHlwZV07XG4gICAgbGV0IGhhc0dsb2JhbFJlbmRlciA9IHR5cGVvZiBnbG9iYWxDb25maWcucmVuZGVyID09PSAnZnVuY3Rpb24nO1xuICAgIGxldCBoYXNHbG9iYWxUZW1wbGF0ZSA9IHR5cGVvZiBnbG9iYWxDb25maWcudGVtcGxhdGUgPT09ICdzdHJpbmcnO1xuXG4gICAgaWYgKGhhc0dsb2JhbFJlbmRlcikge1xuICAgICAgY29tcC5zZXRSZW5kZXIoZ2xvYmFsQ29uZmlnLnJlbmRlcik7XG4gICAgfVxuXG4gICAgaWYgKGhhc0dsb2JhbFRlbXBsYXRlKSB7XG4gICAgICBjb21wLnNldFRlbXBsYXRlKGdsb2JhbENvbmZpZy50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKCFpdGVtQ29uZmlnKSB7XG4gICAgICByZXR1cm4gY29tcDtcbiAgICB9XG5cbiAgICBpZiAoIWhhc0dsb2JhbFJlbmRlciAmJiBpdGVtQ29uZmlnLnJlbmRlcikge1xuICAgICAgY29tcC5zZXRSZW5kZXIoaXRlbUNvbmZpZy5yZW5kZXIpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHRlbXBsYXRlIHNwZWNpZmljIHNpdHVhdGlvblxuICAgIGlmICghaGFzR2xvYmFsVGVtcGxhdGUgJiYgaXRlbUNvbmZpZy50ZW1wbGF0ZSkge1xuICAgICAgY29tcC5zZXRUZW1wbGF0ZShpdGVtQ29uZmlnLnRlbXBsYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXA7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgU2VhcmNoU3RhdGVzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zZWFyY2hzdGF0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTO1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdyZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHMnO1xuICAgIHRoaXMuX2xpbWl0ID0gb3B0cy5saW1pdCB8fCAxMDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdVbml2ZXJzYWxSZXN1bHRzJztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaW5pdCAob3B0cykge1xuICAgIHN1cGVyLmluaXQob3B0cyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSwgdmFsKSB7XG4gICAgY29uc3Qgc2VhcmNoU3RhdGUgPSBkYXRhLnNlYXJjaFN0YXRlIHx8IFNlYXJjaFN0YXRlcy5QUkVfU0VBUkNIO1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHsgc2VjdGlvbnM6IFtdIH0sIGRhdGEsIHtcbiAgICAgIGlzUHJlU2VhcmNoOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlBSRV9TRUFSQ0gsXG4gICAgICBpc1NlYXJjaExvYWRpbmc6IHNlYXJjaFN0YXRlID09PSBTZWFyY2hTdGF0ZXMuU0VBUkNIX0xPQURJTkcsXG4gICAgICBpc1NlYXJjaENvbXBsZXRlOiBzZWFyY2hTdGF0ZSA9PT0gU2VhcmNoU3RhdGVzLlNFQVJDSF9DT01QTEVURVxuICAgIH0pLCB2YWwpO1xuICB9XG5cbiAgYWRkQ2hpbGQgKGRhdGEgPSB7fSwgdHlwZSkge1xuICAgIGxldCBvcHRzID0gdGhpcy5nZXRDaGlsZENvbmZpZyhbZGF0YVsndmVydGljYWxDb25maWdJZCddXSk7XG4gICAgcmV0dXJuIHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIG9wdHMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb25maWcgKGNvbmZpZ0lkKSB7XG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuX2NvbmZpZy5jb25maWc7XG4gICAgaWYgKGNvbmZpZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9jb25maWdbJ2NvbmZpZyddW2NvbmZpZ0lkXSB8fCB0aGlzLl9jb25maWdbJ2NvbmZpZyddO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi9kb20vc2VhcmNocGFyYW1zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3F1ZXN0aW9ucy9zdWJtaXNzaW9uJztcblxuICAgIC8qKlxuICAgICAqIFF1ZXN0aW9uIHN1Ym1pc3Npb24gaXMgYmFzZWQgb24gYSBmb3JtIGFzIGNvbnRleHQuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIG5hdGl2ZSBmb3JtIG5vZGUgd2l0aGluIGNvbnRhaW5lclxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2Zvcm1FbCA9IG9wdHMuZm9ybVNlbGVjdG9yIHx8ICdmb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB0byB1c2UgZm9yIHRoZSBlLW1haWwgYWRkcmVzcyBpbnB1dFxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBgRW1haWwgQWRkcmVzc2BcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2VtYWlsTGFiZWwgPSBvcHRzLmVtYWlsTGFiZWwgfHwgJypFbWFpbCBBZGRyZXNzOic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgbmFtZSBpbnB1dFxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBgTmFtZWBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX25hbWVMYWJlbCA9IG9wdHMubmFtZUxhYmVsIHx8ICdOYW1lOic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgUXVlc3Rpb25cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gYFdoYXQgaXMgeW91ciBxdWVzdGlvbj9gXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9xdWVzdGlvbkxhYmVsID0gb3B0cy5xdWVzdGlvbkxhYmVsIHx8ICcqV2hhdCBpcyB5b3VyIHF1ZXN0aW9uPyc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgUHJpdmFjeSBQb2xpY3lcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gYFdoYXQgaXMgeW91ciBxdWVzdGlvbj9gXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9wcml2YWN5UG9saWN5TGFiZWwgPSBvcHRzLnByaXZhY3lQb2xpY3lMYWJlbCB8fCAnSSBhZ3JlZSB0byBvdXIgUHJpdmFjeSBQb2xpY3k6JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB0byB1c2UgZm9yIHRoZSBTdWJtaXQgYnV0dG9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIGBTdWJtaXQ/YFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYnV0dG9uTGFiZWwgPSBvcHRzLmJ1dHRvbkxhYmVsIHx8ICdTdWJtaXQnO1xuICB9XG5cbiAgYmVmb3JlTW91bnQgKCkge1xuICAgIC8vIE9ubHkgbW91bnQgb3VyIGNvbXBvbmVudCBpZiB0aGUgcXVlcnkgaGFzIGJlZW4gdHJpZ2dlcmVkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRoaXMuZ2V0U3RhdGUoJ2hhc1F1ZXJpZWQnKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgdGhpcy5pbml0U3VibWl0KHRoaXMuX2Zvcm1FbCk7XG4gIH1cblxuICBpbml0U3VibWl0IChmb3JtU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9mb3JtRWwgPSBmb3JtU2VsZWN0b3I7XG5cbiAgICBsZXQgZm9ybSA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2Zvcm1FbCk7XG5cbiAgICBET00ub24oZm9ybSwgJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAvLyBUT0RPKGJpbGx5KSBTZXJpYWxpemUgZm9ybVxuICAgICAgLy8gdGhpcy5jb3JlLnN1Ym1pdFF1ZXN0aW9uKGZvcm0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1FBU3VibWlzc2lvbic7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSwgdmFsKSB7XG4gICAgLy8gU2luY2Ugd2UncmUgYmluZGluZyB0byBzZWFyY2ggcmVzdWx0cyxcbiAgICAvLyBhbmQgd2Ugb25seSB3YW50IHRvIHNob3cgdGhlIFFBIHN1Ym1pc3Npb25cbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoe1xuICAgICAgaGFzUXVlcmllZDogZGF0YS5zZWN0aW9ucyAhPT0gdW5kZWZpbmVkLFxuICAgICAgZW1haWxMYWJlbDogdGhpcy5fZW1haWxMYWJlbCxcbiAgICAgIG5hbWVMYWJlbDogdGhpcy5fbmFtZUxhYmVsLFxuICAgICAgcXVlc3Rpb25MYWJlbDogdGhpcy5fcXVlc3Rpb25MYWJlbCxcbiAgICAgIHByaXZhY3lQb2xpY3lMYWJlbDogdGhpcy5fcHJpdmFjeVBvbGljeUxhYmVsLFxuICAgICAgYnV0dG9uTGFiZWw6IHRoaXMuX2J1dHRvbkxhYmVsLFxuICAgICAgcXVlc3Rpb246IG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpLmdldCgncXVlcnknKVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tICcuL2NvbXBvbmVudG1hbmFnZXInO1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcblxuaW1wb3J0IE5hdmlnYXRpb25Db21wb25lbnQgZnJvbSAnLi9uYXZpZ2F0aW9uL25hdmlnYXRpb25jb21wb25lbnQnO1xuXG5pbXBvcnQgU2VhcmNoQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL3NlYXJjaGNvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyU2VhcmNoQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL2ZpbHRlcnNlYXJjaGNvbXBvbmVudCc7XG5pbXBvcnQgQXV0b0NvbXBsZXRlQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL2F1dG9jb21wbGV0ZWNvbXBvbmVudCc7XG5cbmltcG9ydCBGaWx0ZXJPcHRpb25zQ29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9maWx0ZXJvcHRpb25zY29tcG9uZW50JztcbmltcG9ydCBGaWx0ZXJCb3hDb21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL2ZpbHRlcmJveGNvbXBvbmVudCc7XG5cbmltcG9ydCBEaXJlY3RBbnN3ZXJDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2RpcmVjdGFuc3dlcmNvbXBvbmVudCc7XG5pbXBvcnQgUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcmVzdWx0c2NvbXBvbmVudCc7XG5pbXBvcnQgVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvdW5pdmVyc2FscmVzdWx0c2NvbXBvbmVudCc7XG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2xvY2F0aW9ucmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2V2ZW50cmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9wZW9wbGVyZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmltcG9ydCBNYXBDb21wb25lbnQgZnJvbSAnLi9tYXAvbWFwY29tcG9uZW50JztcblxuaW1wb3J0IFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCBmcm9tICcuL3F1ZXN0aW9ucy9xdWVzdGlvbnN1Ym1pc3Npb25jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX01BTkFHRVIgPSBuZXcgQ29tcG9uZW50TWFuYWdlcigpXG4vLyBDb3JlIENvbXBvbmVudFxuICAucmVnaXN0ZXIoQ29tcG9uZW50KVxuXG4vLyBOYXZpZ2F0aW9uIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKE5hdmlnYXRpb25Db21wb25lbnQpXG5cbi8vIFNlYXJjaCBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihTZWFyY2hDb21wb25lbnQpXG4gIC5yZWdpc3RlcihGaWx0ZXJTZWFyY2hDb21wb25lbnQpXG4gIC5yZWdpc3RlcihBdXRvQ29tcGxldGVDb21wb25lbnQpXG5cbi8vIEZpbHRlciBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihGaWx0ZXJCb3hDb21wb25lbnQpXG4gIC5yZWdpc3RlcihGaWx0ZXJPcHRpb25zQ29tcG9uZW50KVxuXG4vLyBSZXN1bHRzIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKERpcmVjdEFuc3dlckNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihSZXN1bHRzQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoUmVzdWx0c0l0ZW1Db21wb25lbnQpXG4gIC5yZWdpc3RlcihMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50KVxuXG4gIC5yZWdpc3RlcihNYXBDb21wb25lbnQpXG5cbi8vIFF1ZXN0aW9ucyBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQpO1xuIiwiLyoqIEBtb2R1bGUgVGVtcGxhdGVMb2FkZXIgKi9cblxuaW1wb3J0IERPTSBmcm9tICcuLi9kb20vZG9tJztcbmltcG9ydCB7IENPTVBJTEVEX1RFTVBMQVRFU19VUkwgfSBmcm9tICcuLi8uLi9jb3JlL2NvbnN0YW50cyc7XG5cbi8qKlxuICogVGVtcGxhdGVMb2FkZXIgZXhwb3NlcyBhbiBpbnRlcmZhY2UgZm9yIGxvYWRpbmcgdGVtcGxhdGVzIGFzeW5jaHJvbm91c2x5XG4gKiBmcm9tIHRoZSBzZXJ2ZXIgYW5kIHJlZ2lzdGVycyB0aGVtIHdpdGggdGhlIHByb3BlciByZW5kZXJlci5cbiAqIEl0IGFsc28gYWxsb3dzIHlvdSB0byBhc3NpZ24gdGhlbSBzeW5jaHJvbm91c2x5LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZUxvYWRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBpZiAoIVRlbXBsYXRlTG9hZGVyLnNldEluc3RhbmNlKHRoaXMpKSB7XG4gICAgICByZXR1cm4gVGVtcGxhdGVMb2FkZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgdXJsIHRvIGZldGNoIGNvbXBpbGVkIHRlbXBsYXRlcyBmcm9tXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlVXJsID0gY29uZmlnLnRlbXBsYXRlVXJsIHx8IENPTVBJTEVEX1RFTVBMQVRFU19VUkw7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB7fTtcbiAgICB0aGlzLl9vbkxvYWRlZCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHRoaXMuX2luaXQoKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRJbnN0YW5jZSAoaW5zdGFuY2UpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UgKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgX2luaXQgKCkge1xuICAgIHRoaXMuZmV0Y2hUZW1wbGF0ZXMoKTtcbiAgfVxuXG4gIGZldGNoVGVtcGxhdGVzICgpIHtcbiAgICAvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgdGVtcGxhdGVzIGxvYWRlZCwgZG8gbm90aGluZ1xuICAgIGxldCBub2RlID0gRE9NLnF1ZXJ5KCcjeWV4dC1hbnN3ZXJzLXRlbXBsYXRlcycpO1xuICAgIGlmIChub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSW5qZWN0IGEgc2NyaXB0IHRvIGZldGNoIHRoZSBjb21waWxlZCB0ZW1wbGF0ZXMsXG4gICAgLy8gd3JhcHBpbmcgaXQgYSBQcm9taXNlIGZvciBjbGVhbmxpbmVzc1xuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBzY3JpcHQgPSBET00uY3JlYXRlRWwoJ3NjcmlwdCcsIHtcbiAgICAgICAgaWQ6ICd5ZXh0LWFuc3dlcnMtdGVtcGxhdGVzJyxcbiAgICAgICAgb25sb2FkOiByZXNvbHZlLFxuICAgICAgICBvbmVycm9yOiByZWplY3QsXG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBzcmM6IHRoaXMuX3RlbXBsYXRlVXJsXG4gICAgICB9KTtcblxuICAgICAgRE9NLmFwcGVuZCgnYm9keScsIHNjcmlwdCk7XG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgLy8gVE9ETyhiaWxseSkgSW1wbG1lbmV0IGVycm9yIGhhbmRsaW5nIGhlcmUgKGUuZy4gcmVxdWVzdCBjb3VsZCBmYWlsKVxuICAgICAgICBjb25zb2xlLmxvZygnVGVtcGxhdGVzIGxvYWRlZCBzdWNjZXNzZnVsbHkhJyk7XG4gICAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZWdpc3RlciB0aGUgdGVtcGxhdGVzIGludGVybmFsbHkgc28gdGhhdCB0aGV5IGNhbiBiZSBsYXRlciBjb25zdW1lZFxuICAgKiAoZS5nLiBieSBjb21wb25lbnRzIGFuZCByZW5kZXJlcnMpIHdpdGggY29udmllbmllbmNlLlxuICAgKlxuICAgKiBgZmV0Y2hUZW1wbGF0ZXNgIHdpbGwgYXV0b21hdGljYWxseSBjYWxsIHRoaXMsIHByb3ZpZGluZyB0aGUgY29tcGlsZWQgdGVtcGxhdGVzIGZyb20gdGhlIHNlcnZlci5cbiAgICovXG4gIHJlZ2lzdGVyICh0ZW1wbGF0ZXMpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXM7XG5cbiAgICAvLyBOb3RpZnkgb3VyIGNvbnN1bWVycyB0aGF0IHRoZSB0ZW1wbGF0ZXMgYXJlIGhlcmUgOilcbiAgICB0aGlzLl9vbkxvYWRlZCh0aGlzLl90ZW1wbGF0ZXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb25Mb2FkZWQgKGNiKSB7XG4gICAgdGhpcy5fb25Mb2FkZWQgPSBjYjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCAodGVtcGxhdGVOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlc1t0ZW1wbGF0ZU5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4gVGhlIGludGVybmFsIHRlbXBsYXRlIGNvbGxlY3Rpb25cbiAgICovXG4gIGdldFRlbXBsYXRlcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlcztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuZXhwb3J0IHsgQ09NUE9ORU5UX01BTkFHRVIgfSBmcm9tICcuL2NvbXBvbmVudHMvY29uc3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBET00gfSBmcm9tICcuL2RvbS9kb20nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2hQYXJhbXMgfSBmcm9tICcuL2RvbS9zZWFyY2hwYXJhbXMnO1xuXG5leHBvcnQgeyBSZW5kZXJlcnMgfSBmcm9tICcuL3JlbmRlcmluZy9jb25zdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRlbXBsYXRlTG9hZGVyIH0gZnJvbSAnLi9yZW5kZXJpbmcvdGVtcGxhdGVsb2FkZXInO1xuIiwiLyoqIEBtb2R1bGUgRXJyb3JSZXBvcnRlciAqL1xuXG5pbXBvcnQgeyBBbnN3ZXJzQmFzZUVycm9yIH0gZnJvbSAnLi9lcnJvcnMnO1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IHsgTElCX1ZFUlNJT04gfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEVycm9yUmVwb3J0ZXIgaXMgdXNlZCBmb3IgcmVwb3J0aW5nIGVycm9ycyB0byB0aGUgc2VydmVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yUmVwb3J0ZXIge1xuICBjb25zdHJ1Y3RvciAoYXBpS2V5LCBhbnN3ZXJzS2V5KSB7XG4gICAgLyoqXG4gICAgICogVGhlIGFwaUtleSB0byB1c2UgZm9yIHJlcG9ydGluZ1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5hcGlLZXkgPSBhcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYW5zd2Vyc0tleSB0byB1c2Ugd2hlbiByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuYW5zd2Vyc0tleSA9IGFuc3dlcnNLZXk7XG4gIH1cblxuICAvKipcbiAgICogcmVwb3J0IHNlbmRzIGEgbmV0d29yayByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdG8gYmUgbG9nZ2VkXG4gICAqIEBwYXJhbSB7QW5zd2Vyc0Jhc2VFcnJvcn0gVGhlIGVycm9yIHRvIGJlIHJlcG9ydGVkXG4gICAqL1xuICByZXBvcnQgKGVycikge1xuICAgIGlmICghKGVyciBpbnN0YW5jZW9mIEFuc3dlcnNCYXNlRXJyb3IpIHx8IGVyci5yZXBvcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVyci5yZXBvcnRlZCA9IHRydWU7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9lcnJvcnMnLFxuICAgICAgYXBpS2V5OiB0aGlzLmFwaUtleSxcbiAgICAgIHZlcnNpb246IDIwMTkwMzAxLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdlcnJvcic6IGVyci50b0pzb24oKSxcbiAgICAgICAgJ2xpYlZlcnNpb24nOiBMSUJfVkVSU0lPTixcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLmFuc3dlcnNLZXlcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlcXVlc3QuZ2V0KClcbiAgICAgIC5jYXRjaChjb25zb2xlLmVycik7XG5cbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5pbXBvcnQgQ29yZSBmcm9tICcuL2NvcmUvY29yZSc7XG5cbmltcG9ydCB7XG4gIFRlbXBsYXRlTG9hZGVyLFxuICBDT01QT05FTlRfTUFOQUdFUixcbiAgUmVuZGVyZXJzLFxuICBET01cbn0gZnJvbSAnLi91aS9pbmRleCc7XG5cbmltcG9ydCBFcnJvclJlcG9ydGVyIGZyb20gJy4vY29yZS9lcnJvcnMvZXJyb3JyZXBvcnRlcic7XG5pbXBvcnQgeyBBbmFseXRpY3NSZXBvcnRlciB9IGZyb20gJy4vY29yZSc7XG5cbi8qKlxuICogVGhlIG1haW4gQW5zd2VycyBpbnRlcmZhY2VcbiAqL1xuY2xhc3MgQW5zd2VycyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBpZiAoIUFuc3dlcnMuc2V0SW5zdGFuY2UodGhpcykpIHtcbiAgICAgIHJldHVybiBBbnN3ZXJzLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2Ugb2YgdGhlIHJlbmRlcmVyIHRvIHVzZSBmb3IgdGhlIGNvbXBvbmVudHNcbiAgICAgKiBUaGlzIGlzIHByb3ZpZGVkIGR1cmluZyBpbml0aWFsaXphdGlvbi5cbiAgICAgKiBAdHlwZSB7UmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcnMuSGFuZGxlYmFycygpO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCBtYW5hZ2VyXG4gICAgICogQHR5cGUge0NvbXBvbmVudE1hbmFnZXJ9XG4gICAgICovXG4gICAgdGhpcy5jb21wb25lbnRzID0gQ09NUE9ORU5UX01BTkFHRVI7XG5cbiAgICAvKipcbiAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGludm9rZSBvbmNlIHRoZSBsaWJyYXJ5IGlzIHJlYWR5LlxuICAgICAqIFR5cGljYWxseSBmaXJlZCBhZnRlciB0ZW1wbGF0ZXMgYXJlIGZldGNoZWQgZnJvbSBzZXJ2ZXIgZm9yIHJlbmRlcmluZy5cbiAgICAgKi9cbiAgICB0aGlzLl9vblJlYWR5ID0gZnVuY3Rpb24gKCkge307XG4gIH1cblxuICBzdGF0aWMgc2V0SW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIGluaXQgKGNvbmZpZykge1xuICAgIGNvbnN0IGNvcmUgPSBuZXcgQ29yZSh7XG4gICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgICBhbnN3ZXJzS2V5OiBjb25maWcuYW5zd2Vyc0tleSxcbiAgICAgIGxvY2FsZTogY29uZmlnLmxvY2FsZVxuICAgIH0pO1xuICAgIHRoaXMuY29tcG9uZW50cy5zZXRDb3JlKGNvcmUpXG4gICAgICAuc2V0UmVuZGVyZXIodGhpcy5yZW5kZXJlcik7XG5cbiAgICBpZiAoY29uZmlnLmJ1c2luZXNzSWQpIHtcbiAgICAgIGNvbnN0IHJlcG9ydGVyID0gbmV3IEFuYWx5dGljc1JlcG9ydGVyKGNvcmUsIGNvbmZpZy5hbnN3ZXJzS2V5LCBjb25maWcuYnVzaW5lc3NJZCwgY29uZmlnLmFuYWx5dGljc09wdGlvbnMpO1xuICAgICAgdGhpcy5jb21wb25lbnRzLnNldEFuYWx5dGljc1JlcG9ydGVyKHJlcG9ydGVyKTtcbiAgICB9XG5cbiAgICB0aGlzLl9vblJlYWR5ID0gY29uZmlnLm9uUmVhZHkgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICBpZiAoY29uZmlnLnVzZVRlbXBsYXRlcyA9PT0gZmFsc2UgfHwgY29uZmlnLnRlbXBsYXRlQnVuZGxlKSB7XG4gICAgICBpZiAoY29uZmlnLnRlbXBsYXRlQnVuZGxlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5pdChjb25maWcudGVtcGxhdGVCdW5kbGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9vblJlYWR5KCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBUZW1wbGF0ZXMgYXJlIGN1cnJlbnRseSBkb3dubG9hZGVkIHNlcGFyYXRlbHkgZnJvbSB0aGUgQ09SRSBhbmQgVUkgYnVuZGxlLlxuICAgIC8vIEZ1dHVyZSBlbmhhbmNlbWVudCBpcyB0byBzaGlwIHRoZSBjb21wb25lbnRzIHdpdGggdGVtcGxhdGVzIGluIGEgc2VwYXJhdGUgYnVuZGxlLlxuICAgIHRoaXMudGVtcGxhdGVzID0gbmV3IFRlbXBsYXRlTG9hZGVyKHtcbiAgICAgIHRlbXBsYXRlVXJsOiBjb25maWcudGVtcGxhdGVVcmxcbiAgICB9KS5vbkxvYWRlZCgodGVtcGxhdGVzKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmluaXQodGVtcGxhdGVzKTtcblxuICAgICAgdGhpcy5fb25SZWFkeSgpO1xuICAgIH0pO1xuXG4gICAgaWYgKCFjb25maWcuc3VwcHJlc3NFcnJvclJlcG9ydHMpIHtcbiAgICAgIHRoaXMuX2Vycm9yUmVwb3J0ZXIgPSBuZXcgRXJyb3JSZXBvcnRlcihjb25maWcuYXBpS2V5LCBjb25maWcuYW5zd2Vyc0tleSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlID0+IHRoaXMuX2Vycm9yUmVwb3J0ZXIucmVwb3J0KGUuZXJyb3IpKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmhhbmRsZWRyZWplY3Rpb24nLCBlID0+IHRoaXMuX2Vycm9yUmVwb3J0ZXIucmVwb3J0KGUuZXJyb3IpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRvbVJlYWR5IChjYikge1xuICAgIERPTS5vblJlYWR5KGNiKTtcbiAgfVxuXG4gIG9uUmVhZHkgKGNiKSB7XG4gICAgdGhpcy5fb25SZWFkeSA9IGNiO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkQ29tcG9uZW50ICh0eXBlLCBvcHRzKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuICAgICAgb3B0cyA9IHtcbiAgICAgICAgY29udGFpbmVyOiBvcHRzXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50cy5jcmVhdGUodHlwZSwgb3B0cykubW91bnQoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNyZWF0ZUNvbXBvbmVudCAob3B0cykge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHMuY3JlYXRlKCdDb21wb25lbnQnLCBvcHRzKS5tb3VudCgpO1xuICB9XG5cbiAgcmVnaXN0ZXJIZWxwZXIgKG5hbWUsIGNiKSB7XG4gICAgdGhpcy5yZW5kZXJlci5yZWdpc3RlckhlbHBlcihuYW1lLCBjYik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuY29uc3QgQU5TV0VSUyA9IG5ldyBBbnN3ZXJzKCk7XG5leHBvcnQgZGVmYXVsdCBBTlNXRVJTO1xuIl0sIm5hbWVzIjpbIk1ldGhvZHMiLCJHRVQiLCJQT1NUIiwiUFVUIiwiREVMRVRFIiwiSHR0cFJlcXVlc3RlciIsInVybCIsImRhdGEiLCJvcHRzIiwicmVxdWVzdCIsImVuY29kZVBhcmFtcyIsIk9iamVjdCIsImFzc2lnbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY3JlZGVudGlhbHMiLCJ1bmRlZmluZWQiLCJtZXRob2QiLCJmZXRjaCIsIm5hdmlnYXRvciIsInNlbmRCZWFjb24iLCJwYXJhbXMiLCJoYXNQYXJhbSIsImluZGV4T2YiLCJzZWFyY2hRdWVyeSIsImtleSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkxJQl9WRVJTSU9OIiwiQVBJX0JBU0VfVVJMIiwiQ09NUElMRURfVEVNUExBVEVTX1VSTCIsIkFOQUxZVElDU19CQVNFX1VSTCIsIlNlYXJjaFBhcmFtcyIsIl9wYXJhbXMiLCJ3aW5kb3ciLCJVUkxTZWFyY2hQYXJhbXMiLCJwYXJzZSIsInNlYXJjaCIsInNsaWNlIiwiZW5jb2RlZFBhcmFtcyIsInNwbGl0IiwiaSIsImxlbmd0aCIsImtleVZhbCIsImRlY29kZSIsInF1ZXJ5IiwiU3RyaW5nIiwibmFtZSIsInZhbHVlIiwic3RyaW5nIiwicHVzaCIsImVuY29kZSIsImpvaW4iLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwibWF0Y2giLCJBcGlSZXF1ZXN0IiwiX3JlcXVlc3RlciIsIl9iYXNlVXJsIiwiYmFzZVVybCIsIl9lbmRwb2ludCIsImVuZHBvaW50IiwiX2FwaUtleSIsImFwaUtleSIsIl92ZXJzaW9uIiwidmVyc2lvbiIsImdldCIsInBvc3QiLCJiYXNlUGFyYW1zIiwidXJsUGFyYW1zIiwibG9jYXRpb24iLCJ0b1N0cmluZyIsImhhcyIsImtleXMiLCJmb3JFYWNoIiwiQW5zd2Vyc0Jhc2VFcnJvciIsImVycm9yQ29kZSIsIm1lc3NhZ2UiLCJib3VuZGFyeSIsImNhdXNlZEJ5IiwiZXJyb3JNZXNzYWdlIiwicmVwb3J0ZWQiLCJidWlsdGluRXJyb3IiLCJlcnJvciIsIkFuc3dlcnNCYXNpY0Vycm9yIiwic3RhY2siLCJFcnJvciIsIkFuc3dlcnNDb21wb25lbnRFcnJvciIsImNvbXBvbmVudCIsIkFuc3dlcnNFbmRwb2ludEVycm9yIiwiQW5zd2Vyc1N0b3JhZ2VFcnJvciIsInN0b3JhZ2VLZXkiLCJBbnN3ZXJzQW5hbHl0aWNzRXJyb3IiLCJldmVudCIsIlNlYXJjaEFwaSIsImFuc3dlcnNLZXkiLCJfYW5zd2Vyc0tleSIsImxvY2FsZSIsIl9sb2NhbGUiLCJxdWVyeVN0cmluZyIsInZlcnRpY2FsS2V5IiwiZmlsdGVyIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIkF1dG9Db21wbGV0ZURhdGEiLCJzZWN0aW9ucyIsInF1ZXJ5SWQiLCJmcmVlemUiLCJtYXAiLCJzIiwibGFiZWwiLCJyZXN1bHRzIiwiciIsIkF1dG9Db21wbGV0ZVJlc3VsdCIsImhpZ2hsaWdodGVkVmFsdWUiLCJoaWdobGlnaHQiLCJtYXRjaGVkU3Vic3RyaW5ncyIsInNob3J0VmFsdWUiLCJ2YWwiLCJzb3J0IiwiYSIsImIiLCJvZmZzZXQiLCJuZXh0U3RhcnQiLCJqIiwic3RhcnQiLCJOdW1iZXIiLCJlbmQiLCJBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIiLCJtb2R1bGVJZCIsImZyb20iLCJBdXRvQ29tcGxldGVBcGkiLCJpbnB1dCIsImJhcktleSIsImNhdGNoIiwidmVydGljYWwiLCJ1bml2ZXJzYWwiLCJSZXN1bHQiLCJyZXN1bHRzRGF0YSIsIlBSRV9TRUFSQ0giLCJTRUFSQ0hfTE9BRElORyIsIlNFQVJDSF9DT01QTEVURSIsIlNlY3Rpb24iLCJzZWFyY2hTdGF0ZSIsIlNlYXJjaFN0YXRlcyIsInZlcnRpY2FsQ29uZmlnSWQiLCJyZXN1bHRzQ291bnQiLCJlbmNvZGVkU3RhdGUiLCJhcHBsaWVkUXVlcnlGaWx0ZXJzIiwiQXBwbGllZFF1ZXJ5RmlsdGVyIiwiZmFjZXRzIiwicGFyc2VNYXAiLCJ2ZXJ0aWNhbFVSTCIsIm1hcE1hcmtlcnMiLCJjZW50ZXJDb29yZGluYXRlcyIsInJlc3VsdCIsInlleHREaXNwbGF5Q29vcmRpbmF0ZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiaXRlbSIsIm1vZHVsZXMiLCJ1cmxzIiwiQXJyYXkiLCJpc0FycmF5IiwiYXBwbGllZFF1ZXJ5RmlsdGVyIiwiZGlzcGxheUtleSIsImRpc3BsYXlWYWx1ZSIsImZpbHRlcnMiLCJVbml2ZXJzYWxSZXN1bHRzIiwiRGlyZWN0QW5zd2VyIiwiZGlyZWN0QW5zd2VyIiwiTmF2aWdhdGlvbiIsInRhYk9yZGVyIiwibmF2IiwiVmVydGljYWxSZXN1bHRzIiwiTkFWSUdBVElPTiIsIlVOSVZFUlNBTF9SRVNVTFRTIiwiVkVSVElDQUxfUkVTVUxUUyIsIkFVVE9DT01QTEVURSIsIkRJUkVDVF9BTlNXRVIiLCJGSUxURVIiLCJRVUVSWSIsIlFVRVJZX0lEIiwiU2VhcmNoRGF0YVRyYW5zZm9ybWVyIiwiU3RvcmFnZUtleXMiLCJFdmVudEVtaXR0ZXIiLCJfbGlzdGVuZXJzIiwiZXZ0IiwiY2IiLCJvbmNlIiwib24iLCJsaXN0ZW5lcnMiLCJrZWVwIiwiTW9kdWxlRGF0YSIsImlkIiwiX2lkIiwiX2hpc3RvcnkiLCJfZGF0YSIsInNldCIsIm5ld0RhdGEiLCJjYXB0dXJlUHJldmlvdXMiLCJlbWl0Iiwic2hpZnQiLCJwcmV2aW91cyIsIl9wcmV2aW91cyIsInBvcCIsIlN0b3JhZ2UiLCJfbW9kdWxlRGF0YUNvbnRhaW5lciIsIl9mdXR1cmVMaXN0ZW5lcnMiLCJfaW5pdERhdGFDb250YWluZXIiLCJfYXBwbHlGdXR1cmVMaXN0ZW5lcnMiLCJyYXciLCJkYXRhS2V5Iiwic3RhcnRzV2l0aCIsIm1vZHVsZURhdGEiLCJvZmYiLCJmdXR1cmVzIiwiZnV0dXJlIiwiQ29yZSIsInN0b3JhZ2UiLCJfc2VhcmNoZXIiLCJfYXV0b0NvbXBsZXRlIiwic2VhcmNoTG9hZGluZyIsInZlcnRpY2FsUXVlcnkiLCJ0cmFuc2Zvcm1WZXJ0aWNhbCIsInRyYW5zZm9ybSIsIm5hbWVzcGFjZSIsInF1ZXJ5VW5pdmVyc2FsIiwicXVlcnlWZXJ0aWNhbCIsInF1ZXJ5RmlsdGVyIiwiQ29tcG9uZW50TWFuYWdlciIsInNldEluc3RhbmNlIiwiZ2V0SW5zdGFuY2UiLCJfY29tcG9uZW50UmVnaXN0cnkiLCJfYWN0aXZlQ29tcG9uZW50cyIsIl9jb3JlIiwiX3JlbmRlcmVyIiwiX2FuYWx5dGljc1JlcG9ydGVyIiwicmVuZGVyZXIiLCJjb3JlIiwicmVwb3J0ZXIiLCJjb21wb25lbnRDbGF6eiIsInR5cGUiLCJjb21wb25lbnRUeXBlIiwiYW5hbHl0aWNzUmVwb3J0ZXIiLCJjb21wb25lbnRNYW5hZ2VyIiwiY29tcG9uZW50Q2xhc3MiLCJhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQiLCJzb21lIiwiYyIsImluaXQiLCJzZXRTdGF0ZSIsImZpbmQiLCJjb25zdHJ1Y3RvciIsImluc3RhbmNlIiwiUmVuZGVyZXIiLCJ0ZW1wbGF0ZSIsIkhhbmRsZWJhcnNSZW5kZXJlciIsInRlbXBsYXRlcyIsIl9oYW5kbGViYXJzIiwiX2hiIiwiX3RlbXBsYXRlcyIsIl9yZWdpc3RlckN1c3RvbUhlbHBlcnMiLCJyZWdpc3RlckhlbHBlciIsImNvbXBpbGUiLCJjb25maWciLCJ0ZW1wbGF0ZU5hbWUiLCJlIiwiYXJnMSIsImFyZzIiLCJvcHRpb25zIiwiZm4iLCJpbnZlcnNlIiwicGhvbmVOdW1iZXJTdHJpbmciLCJjbGVhbmVkIiwiaW50bENvZGUiLCJhcmdzIiwiYXJndW1lbnRzIiwicm9vdCIsInYiLCJSZW5kZXJlcnMiLCJTT1kiLCJIYW5kbGViYXJzIiwiZG9jdW1lbnQiLCJET00iLCJkIiwicCIsImh0bWwiLCJjb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiZnJhZyIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwiYXBwZW5kQ2hpbGQiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJwYXJlbnQiLCJzZWxlY3RvciIsIkhUTUxFbGVtZW50IiwiV2luZG93IiwiSFRNTERvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZWFkeVN0YXRlIiwiZWwiLCJvcHRzX2RhdGEiLCJub2RlIiwicHJvcHMiLCJhZGRDbGFzcyIsImluc2VydEFkamFjZW50SFRNTCIsImNsYXNzTmFtZSIsImNsYXNzZXMiLCJsZW4iLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJzdHlsZXMiLCJwcm9wIiwic3R5bGUiLCJhdHRyIiwic2V0QXR0cmlidXRlIiwic2V0dGluZ3MiLCJFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjdHh0IiwidGFyZ2V0IiwiaXNFcXVhbE5vZGUiLCJtYXRjaGVzIiwicGFyZW50Tm9kZSIsIlN0YXRlIiwiX3N0YXRlIiwib3B0VmFsIiwiX3NldCIsIm9wdFByb3AiLCJBbmFseXRpY3NFdmVudCIsImV2ZW50VHlwZSIsInRvVXBwZXJDYXNlIiwiQW5hbHl0aWNzUmVwb3J0ZXIiLCJidXNpbmVzc0lkIiwiZ2xvYmFsT3B0aW9ucyIsIl9idXNpbmVzc0lkIiwiX2dsb2JhbE9wdGlvbnMiLCJzZXRRdWVyeUlkIiwiYWRkT3B0aW9ucyIsImJlYWNvbiIsInRvQXBpRXZlbnQiLCJDb21wb25lbnQiLCJfY29uZmlnIiwiX3R5cGUiLCJfcGFyZW50IiwiX2NoaWxkcmVuIiwic3RhdGUiLCJfYW5hbHl0aWNzT3B0aW9ucyIsImFuYWx5dGljc09wdGlvbnMiLCJfY29udGFpbmVyIiwiY3JlYXRlRWwiLCJjbGFzcyIsInN1YnN0cmluZyIsImFwcGVuZCIsIl9jbGFzc05hbWUiLCJfcmVuZGVyIiwicmVuZGVyIiwiX3RlbXBsYXRlIiwiX3RlbXBsYXRlTmFtZSIsIl9pc01vdW50ZWQiLCJ0cmFuc2Zvcm1EYXRhIiwib25DcmVhdGUiLCJvbk1vdW50Iiwib25VcGRhdGUiLCJtb3VudCIsIm5ld1N0YXRlIiwiY2hpbGRDb21wb25lbnQiLCJjcmVhdGUiLCJfcGFyZW50T3B0cyIsImVtcHR5IiwidW5Nb3VudCIsImJlZm9yZU1vdW50IiwiYXNKU09OIiwiX29uTW91bnQiLCJkb21Ib29rcyIsInF1ZXJ5QWxsIiwiX2NyZWF0ZUFuYWx5dGljc0hvb2siLCJiaW5kIiwiY2hpbGQiLCJiZWZvcmVSZW5kZXIiLCJkb21Db21wb25lbnRzIiwiX2NyZWF0ZVN1YmNvbXBvbmVudCIsImFmdGVyUmVuZGVyIiwiZG9tQ29tcG9uZW50IiwiZGF0YXNldCIsImNoaWxkRGF0YSIsImFkZENoaWxkIiwiY2hpbGRIVE1MIiwiaXNBbmFseXRpY3NBdHRhY2hlZCIsImV2ZW50dHlwZSIsImV2ZW50bGFiZWwiLCJldmVudG9wdGlvbnMiLCJyZXBvcnQiLCJUYWIiLCJjb25maWdJZCIsImlzRmlyc3QiLCJpc0FjdGl2ZSIsInRhYnNDb25maWciLCJ0YWJzIiwidGFiIiwiTmF2aWdhdGlvbkNvbXBvbmVudCIsIl90YWJzIiwiX3RhYk9yZGVyIiwiZ2V0RGVmYXVsdFRhYk9yZGVyIiwiZ2V0VXJsUGFyYW1zIiwibWVyZ2VUYWJPcmRlciIsImdlbmVyYXRlVGFiVXJsIiwiaW5jbHVkZXMiLCJ1bnNoaWZ0Iiwib3RoZXJUYWJPcmRlciIsInRhYkNvbmZpZyIsIkZpbHRlciIsInJlc3BvbnNlRmlsdGVyIiwiZ3JvdXBzIiwiZ3JvdXBGaWx0ZXJzIiwiZmllbGQiLCJvciIsImFuZCIsIl9mcm9tTWF0Y2hlciIsIm1pbiIsIm1heCIsImdyZWF0ZXJUaGFuRXF1YWwiLCJsZXNzVGhhbkVxdWFsIiwibWF0Y2hlciIsIlNlYXJjaENvbXBvbmVudCIsIl9iYXJLZXkiLCJfdmVydGljYWxLZXkiLCJfZm9ybUVsIiwiZm9ybVNlbGVjdG9yIiwiX2lucHV0RWwiLCJpbnB1dEVsIiwidGl0bGUiLCJsYWJlbFRleHQiLCJzdWJtaXRUZXh0Iiwic3VibWl0SWNvbiIsInByb21wdEhlYWRlciIsImF1dG9Gb2N1cyIsInJlZGlyZWN0VXJsIiwiX3NlYXJjaENvb2xkb3duIiwic2VhcmNoQ29vbGRvd24iLCJzZXRRdWVyeSIsImJpbmRCcm93c2VySGlzdG9yeSIsImluaXRTZWFyY2giLCJpbml0QXV0b0NvbXBsZXRlIiwiZm9jdXMiLCJmb3JtIiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImlucHV0U2VsZWN0b3IiLCJvcmlnaW5hbFF1ZXJ5Iiwib25TdWJtaXQiLCJ0cmlnZ2VyIiwiX3Rocm90dGxlZCIsInNldFRpbWVvdXQiLCJhbGxGaWx0ZXJzIiwiZ2V0QWxsIiwidG90YWxGaWx0ZXIiLCJ2ZXJ0aWNhbFNlYXJjaCIsImdldEFjdGl2ZUNvbXBvbmVudCIsImdldFN0YXRlIiwiRmlsdGVyU2VhcmNoQ29tcG9uZW50IiwiaW5wdXRLZXkiLCJfc3RvcmVPbkNoYW5nZSIsInN0b3JlT25DaGFuZ2UiLCJzZWFyY2hUZXh0Iiwic2V0RmlsdGVyIiwiZnJvbVJlc3BvbnNlIiwiaXNGaWx0ZXJTZWFyY2giLCJvcmlnaW5hbEZpbHRlciIsIl9zYXZlUXVlcnlBbmRGaWx0ZXIiLCJLZXlzIiwiQkFDS1NQQUNFIiwiVEFCIiwiRU5URVIiLCJTSElGVCIsIkNUUkwiLCJBTFQiLCJFU0NBUEUiLCJMRUZUIiwiUklHSFQiLCJVUCIsIkRPV04iLCJMRUZUX09TX0tFWSIsIlJJR0hUX09TX0tFWSIsIlNFTEVDVF9LRVkiLCJBdXRvQ29tcGxldGVDb21wb25lbnQiLCJfYXV0b2NvbXBsZXRlRWxzIiwiYXV0b0NvbXBsZXRlRWxzIiwiX29yaWdpbmFsUXVlcnkiLCJfc2VjdGlvbkluZGV4IiwiX3Jlc3VsdEluZGV4IiwiX29uU3VibWl0Iiwic2VjdGlvbkluZGV4IiwicmVzdWx0SW5kZXgiLCJxdWVyeUlucHV0IiwiY2xvc2UiLCJyZXNldCIsImF1dG9Db21wbGV0ZSIsImhhbmRsZU5hdmlnYXRlUmVzdWx0cyIsImtleUNvZGUiLCJoYW5kbGVTdWJtaXRSZXN1bHQiLCJkZWxlZ2F0ZSIsInNob3J0IiwidXBkYXRlUXVlcnkiLCJoYW5kbGVUeXBpbmciLCJ1cGRhdGVTdGF0ZSIsIm9wdFZhbHVlIiwicXVlcnlFbCIsImlnbm9yZWRLZXlzIiwiYXV0b0NvbXBsZXRlRmlsdGVyIiwiYXV0b0NvbXBsZXRlVmVydGljYWwiLCJhdXRvQ29tcGxldGVVbml2ZXJzYWwiLCJTVVBQT1JURURfQ09OVFJPTFMiLCJGaWx0ZXJPcHRpb25zQ29tcG9uZW50IiwiY29udHJvbCIsIl9vcHRpb25zIiwibyIsImNoZWNrZWQiLCJfY29udHJvbCIsIl9vcHRpb25TZWxlY3RvciIsIm9wdGlvblNlbGVjdG9yIiwiX29uQ2hhbmdlIiwib25DaGFuZ2UiLCJfbGFiZWwiLCJfdXBkYXRlT3B0aW9uIiwicGFyc2VJbnQiLCJpbmRleCIsIl9idWlsZEZpbHRlciIsImVsZW1lbnRzIiwiX2FwcGx5RmlsdGVyIiwiZXF1YWwiLCJncm91cCIsIkZpbHRlckJveENvbXBvbmVudCIsIl9maWx0ZXJDb25maWdzIiwiX3NlYXJjaE9uQ2hhbmdlIiwic2VhcmNoT25DaGFuZ2UiLCJfYXBwbHlCdXR0b25TZWxlY3RvciIsImFwcGx5QnV0dG9uU2VsZWN0b3IiLCJfZmlsdGVyQ29tcG9uZW50cyIsIl9maWx0ZXJzIiwiZmlsdGVyQ29uZmlncyIsInNob3dBcHBseUJ1dHRvbiIsImYiLCJvbkZpbHRlckNoYW5nZSIsImJ1dHRvbiIsIl9zYXZlRmlsdGVyc1RvU3RvcmFnZSIsIl9zZWFyY2giLCJ2YWxpZEZpbHRlcnMiLCJjb21iaW5lZEZpbHRlciIsIkRpcmVjdEFuc3dlckNvbXBvbmVudCIsImhhc1N0YXRlIiwiUmVzdWx0c0l0ZW1Db21wb25lbnQiLCJMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IiwiRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCIsIlBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IiwiTWFwUHJvdmlkZXIiLCJfaGVpZ2h0IiwiaGVpZ2h0IiwiX3dpZHRoIiwid2lkdGgiLCJfem9vbSIsInpvb20iLCJfbWFwIiwiX2lzTG9hZGVkIiwiX29uTG9hZGVkIiwib25Mb2FkZWQiLCJfcGluQ29uZmlnIiwicGluIiwiREVGQVVMVF9QSU5fQ09ORklHIiwiaXNMb2FkZWQiLCJtYXBEYXRhIiwiaWNvbiIsImFuY2hvciIsInN2ZyIsInNjYWxlZFNpemUiLCJsYWJlbFR5cGUiLCJHb29nbGVNYXBQcm92aWRlciIsIl9jbGllbnRJZCIsImNsaWVudElkIiwiX3NpZ25hdHVyZSIsInNpZ25hdHVyZSIsImhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMiLCJvbkxvYWQiLCJzY3JpcHQiLCJvbmxvYWQiLCJhc3luYyIsInNyYyIsImdlbmVyYXRlQ3JlZGVudGlhbHMiLCJnb29nbGVNYXBNYXJrZXJDb25maWdzIiwiR29vZ2xlTWFwTWFya2VyQ29uZmlnIiwiZW5jb2RlZE1hcmtlcnMiLCJzZXJpYWxpemUiLCJfaXNTdGF0aWMiLCJjc3MiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiYm91bmRzIiwiTGF0TG5nQm91bmRzIiwibWFya2VyIiwiTWFya2VyIiwiZXh0ZW5kIiwicG9zaXRpb24iLCJmaXRCb3VuZHMiLCJsYXQiLCJsbmciLCJzZXJpYWxpemVkTWFya2VycyIsIm1hcmtlcnMiLCJwaW5Db25maWciLCJwaW5Db25maWdPYmoiLCJQb2ludCIsIngiLCJ5IiwiU2l6ZSIsInciLCJoIiwiTWFwQm94TWFwUHJvdmlkZXIiLCJtYXBib3hnbCIsImFjY2Vzc1Rva2VuIiwicmVsIiwibWFwYm94TWFwTWFya2VyQ29uZmlncyIsIk1hcEJveE1hcmtlckNvbmZpZyIsImNlbnRlciIsIm1hcENlbnRlciIsIndyYXBwZXIiLCJjb29yZHMiLCJMbmdMYXQiLCJzZXRMbmdMYXQiLCJhZGRUbyIsInN0YXRpY01hcFBpbiIsIlByb3ZpZGVyVHlwZXMiLCJNYXBDb21wb25lbnQiLCJfbWFwUHJvdmlkZXIiLCJtYXBQcm92aWRlciIsInRvTG93ZXJDYXNlIiwiaXNTdGF0aWMiLCJnZXRQcm92aWRlckluc3RhbmNlIiwic2V0VGVtcGxhdGUiLCJnZW5lcmF0ZVN0YXRpYyIsImxvYWRKUyIsIlJlc3VsdFR5cGUiLCJFVkVOVCIsIkxPQ0FUSU9OIiwiUEVPUExFIiwiUmVzdWx0c0NvbXBvbmVudCIsImxpbWl0IiwiX2l0ZW1Db25maWciLCJnbG9iYWwiLCJyZW5kZXJJdGVtIiwiaXRlbVRlbXBsYXRlIiwiY29uZmlndXJlSXRlbSIsImlzUHJlU2VhcmNoIiwiaXNTZWFyY2hMb2FkaW5nIiwiaXNTZWFyY2hDb21wbGV0ZSIsImluY2x1ZGVNYXAiLCJtYXBDb25maWciLCJzZXRJdGVtUmVuZGVyIiwic2V0SXRlbVRlbXBsYXRlIiwiY2xhenoiLCJnZXRJdGVtQ29tcG9uZW50IiwiY29tcCIsIm5ld09wdHMiLCJnbG9iYWxDb25maWciLCJpdGVtQ29uZmlnIiwiaGFzR2xvYmFsUmVuZGVyIiwiaGFzR2xvYmFsVGVtcGxhdGUiLCJzZXRSZW5kZXIiLCJVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50IiwiX2xpbWl0IiwiZ2V0Q2hpbGRDb25maWciLCJRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQiLCJfZW1haWxMYWJlbCIsImVtYWlsTGFiZWwiLCJfbmFtZUxhYmVsIiwibmFtZUxhYmVsIiwiX3F1ZXN0aW9uTGFiZWwiLCJxdWVzdGlvbkxhYmVsIiwiX3ByaXZhY3lQb2xpY3lMYWJlbCIsInByaXZhY3lQb2xpY3lMYWJlbCIsIl9idXR0b25MYWJlbCIsImJ1dHRvbkxhYmVsIiwiaW5pdFN1Ym1pdCIsImhhc1F1ZXJpZWQiLCJxdWVzdGlvbiIsIkNPTVBPTkVOVF9NQU5BR0VSIiwicmVnaXN0ZXIiLCJUZW1wbGF0ZUxvYWRlciIsIl90ZW1wbGF0ZVVybCIsInRlbXBsYXRlVXJsIiwiX2luaXQiLCJmZXRjaFRlbXBsYXRlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25lcnJvciIsImNvbnNvbGUiLCJsb2ciLCJFcnJvclJlcG9ydGVyIiwiZXJyIiwidG9Kc29uIiwiQW5zd2VycyIsImNvbXBvbmVudHMiLCJfb25SZWFkeSIsInNldENvcmUiLCJzZXRSZW5kZXJlciIsInNldEFuYWx5dGljc1JlcG9ydGVyIiwib25SZWFkeSIsInVzZVRlbXBsYXRlcyIsInRlbXBsYXRlQnVuZGxlIiwic3VwcHJlc3NFcnJvclJlcG9ydHMiLCJfZXJyb3JSZXBvcnRlciIsIkFOU1dFUlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBOztFQUVBOztFQUVBOzs7RUFHQSxJQUFNQSxPQUFPLEdBQUc7RUFDZEMsRUFBQUEsR0FBRyxFQUFFLEtBRFM7RUFFZEMsRUFBQUEsSUFBSSxFQUFFLE1BRlE7RUFHZEMsRUFBQUEsR0FBRyxFQUFFLEtBSFM7RUFJZEMsRUFBQUEsTUFBTSxFQUFFO0VBSk0sQ0FBaEI7RUFPQTs7Ozs7O01BS3FCQzs7Ozs7Ozs7OztFQUNuQjs7Ozs7OzBCQU1LQyxLQUFLQyxNQUFNQyxNQUFNO0VBQ3BCLGFBQU8sS0FBS0MsT0FBTCxDQUFhVCxPQUFPLENBQUNDLEdBQXJCLEVBQTBCLEtBQUtTLFlBQUwsQ0FBa0JKLEdBQWxCLEVBQXVCQyxJQUF2QixDQUExQixFQUF3REMsSUFBeEQsQ0FBUDtFQUNEO0VBRUQ7Ozs7Ozs7OzsyQkFNTUYsS0FBS0MsTUFBTUMsTUFBTTtFQUNyQixhQUFPLEtBQUtDLE9BQUwsQ0FDTFQsT0FBTyxDQUFDRSxJQURILEVBRUxJLEdBRkssRUFHTEssTUFBTSxDQUFDQyxNQUFQLENBQWM7RUFDWkMsUUFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVIsSUFBZixDQURN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