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
  var LIB_VERSION = 'v0.7.3';
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

  var Section =
  /*#__PURE__*/
  function () {
    function Section(data, url) {
      _classCallCheck(this, Section);

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
    }

    _createClass(UniversalResults, null, [{
      key: "from",
      value: function from(response, urls) {
        return new UniversalResults({
          queryId: response.queryId,
          sections: Section.from(response.modules, urls)
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

      Object.assign(this, data);
      Object.freeze(this);
    }

    _createClass(VerticalResults, null, [{
      key: "from",
      value: function from(response) {
        return new VerticalResults(Section.from(response));
      }
    }, {
      key: "areDuplicateNamesAllowed",
      value: function areDuplicateNamesAllowed() {
        return true;
      }
    }]);

    return VerticalResults;
  }();

  /** @module */

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
    QUERY: 'query'
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
        return _ref = {
          queryId: response.queryId
        }, _defineProperty(_ref, StorageKeys.NAVIGATION, Navigation.from(response.modules)), _defineProperty(_ref, StorageKeys.DIRECT_ANSWER, new DirectAnswer(response.directAnswer)), _defineProperty(_ref, StorageKeys.UNIVERSAL_RESULTS, UniversalResults.from(response, urls)), _ref;
      }
    }, {
      key: "transformVertical",
      value: function transformVertical(data) {
        var _ref2;

        return _ref2 = {
          queryId: data.response.queryId
        }, _defineProperty(_ref2, StorageKeys.NAVIGATION, new Navigation()), _defineProperty(_ref2, StorageKeys.VERTICAL_RESULTS, VerticalResults.from(data.response)), _ref2;
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

        return {};
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

        return this._searcher.verticalQuery(queryString, verticalKey, filter).then(function (response) {
          return SearchDataTransformer.transformVertical(response);
        }).then(function (data) {
          _this.storage.set(StorageKeys.NAVIGATION, data[StorageKeys.NAVIGATION]);

          _this.storage.set(StorageKeys.VERTICAL_RESULTS, data[StorageKeys.VERTICAL_RESULTS]);
        });
      }
    }, {
      key: "search",
      value: function search(queryString, urls) {
        var _this2 = this;

        return this._searcher.query(queryString).then(function (response) {
          return SearchDataTransformer.transform(response, urls);
        }).then(function (data) {
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
          return c.type === type;
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
      this.label = label;
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
    function AnalyticsReporter(apiKey, answersKey) {
      var _this = this;

      _classCallCheck(this, AnalyticsReporter);

      this._apiKey = apiKey;
      this._answersKey = answersKey; // TODO(jdelerme): Temporary workaround for getting internal business ID for the analytics endpoint
      // To be removed when the endpoint is moved behind liveapi

      var businessIdReq = new ApiRequest({
        endpoint: '/v2/accounts/me/answers/query',
        apiKey: this._apiKey,
        version: 20190301,
        params: {
          'input': '',
          'answersKey': this._answersKey
        }
      });
      businessIdReq.get().then(function (r) {
        return r.json();
      }).then(function (d) {
        _this._businessId = d.response.businessId;
      });
    }

    _createClass(AnalyticsReporter, [{
      key: "report",
      value: function report(event) {
        if (!(event instanceof AnalyticsEvent)) {
          throw new AnswersAnalyticsError('Tried to send invalid analytics event', event);
        }

        event.addOptions({
          answersKey: this._answersKey
        });
        var request = new ApiRequest({
          baseUrl: ANALYTICS_BASE_URL,
          endpoint: "/realtimeanalytics/data/answers/".concat(this._businessId),
          apiKey: this._apiKey,
          version: 20190301,
          params: {
            'data': event.toApiEvent()
          }
        });
        request.post()["catch"](console.err);
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
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Component);

      // Simple facade pattern to enable the user to pass a single object
      // containing all the necessary options and settings
      if (_typeof(type) === 'object') {
        opts = type;
        type = opts.type;
      }

      this.moduleId = null;
      /**
       * Unique name of this component instance
       * Used to distinguish between other components of the same type
       * @type {String}
       */

      this.name = opts.name || this.constructor.name;
      /**
       * Cache the options so that we can propogate properly to child components
       * @type {Object}
       */

      this._opts = opts;
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

      this._parent = opts.parent || null;
      /**
       * A container for all the child components
       * @type {Component[]}
       */

      this._children = [];
      /**
       * The state (data) of the component to be provided to the template for rendering
       * @type {object}
       */

      this._state = new State(opts.state);
      /**
       * TODO(billy) This should be 'services'
       */

      this.core = opts.core || null;
      /**
       * A local reference to the component manager, which contains all of the component classes
       * eligible to be created
       * @type {ComponentManager}
       */

      this.componentManager = opts.componentManager || null;
      /**
       * A local reference to the analytics reporter, used to report events for this component
       * @type {AnalyticsReporter}
       */

      this.analyticsReporter = opts.analyticsReporter || null;
      /**
       * A reference to the DOM node that the component will be appended to when mounted/rendered.
       * @type {HTMLElement}
       */

      if (this._parent === null) {
        if (typeof opts.container !== 'string') {
          throw new Error('Missing `container` option for component configuration. Must be of type `string`.');
        }

        this._container = DOM.query(opts.container) || null;
      } else {
        this._container = DOM.query(this._parent._container, opts.container); // If we have a parent, and the container is missing from the DOM,
        // we construct the container and append it to the parent

        if (this._container === null) {
          this._container = DOM.createEl('div', {
            "class": opts.container.substring(1, opts.container.length)
          });
          DOM.append(this._parent._container, this._container);
        }
      }

      if (this._container === null) {
        throw new Error('Cannot find container DOM node: ' + opts.container);
      }
      /**
       * A custom class to be applied to {this._container} node
       * @type {string}
       */


      this._className = opts["class"] || 'component';
      /**
       * A custom render function to be used instead of using the default renderer
       * @type {Renderer}
       */

      this._render = opts.render || null;
      /**
       * A local reference to the default {Renderer} that will be used for rendering the template
       * @type {Renderer}
       */

      this._renderer = opts.renderer || Renderers.Handlebars;
      /**
       * The template string to use for rendering the component
       * If this is left empty, we lookup the template the base templates using the templateName
       * @type {string}
       */

      this._template = opts.template ? this._renderer.compile(opts.template) : null;
      /**
       * The templateName to use for rendering the component.
       * This is only used if _template is empty.
       * @type {string}
       */

      this._templateName = opts.templateName || 'default';
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

      this.transformData = opts.transformData || this.transformData || function () {};
      /**
       * The a local reference to the callback that will be invoked when a component is created.
       * @type {function}
       */


      this.onCreate = opts.onCreate || this.onCreate || function () {};
      /**
       * The a local reference to the callback that will be invoked when a component is Mounted.
       * @type {function}
       */


      this.onMount = opts.onMount || this.onMount || function () {};
      /**
       * The a local reference to the callback that will be invoked when a components state is updated.
       * @type {function}
       */


      this.onUpdate = opts.onUpdate || this.onUpdate || function () {};
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
        this._state.set(data);

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
          _parentOpts: this._opts
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


        var domHooks = DOM.queryAll(this._container, '[data-eventtype]');
        domHooks.forEach(this._createAnalyticsHook.bind(this));
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

        var dataset = domComponent.dataset;
        var type = dataset.eventtype;
        var label = dataset.eventlabel;
        var options = dataset.eventoptions ? JSON.parse(dataset.eventoptions) : {};
        DOM.on(domComponent, 'mousedown', function () {
          var event = new AnalyticsEvent(type, label);
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

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, SearchComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchComponent).call(this, opts));
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

      _this._barKey = opts.barKey || null;
      /**
       * The optional vertical key for vertical search configuration
       * If not provided, auto-complete and search will be based on universal
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

      _this.title = opts.title || 'Answers Universal Search';
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

      _this.query = opts.query || _this.getUrlParams().get('query') || '';
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
          searchText: this.searchText,
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
        var _this3 = this;

        DOM.on(window, 'popstate', function () {
          _this3.query = _this3.getUrlParams().get('query');

          _this3.setState({
            query: _this3.query
          });

          _this3.core.setQuery(_this3.query);

          _this3.search(_this3.query);
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

        DOM.on(queryInput, 'blur', function () {
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

        DOM.delegate(this._container, '.js-yext-autocomplete-option', 'mousedown', function (evt, target) {
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
          options: this._options
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
          return e.removeAttribute('checked');
        });
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
       * The selector of the reset button
       * @type {string}
       * @private
       */

      _this._resetButtonSelector = config.resetButtonSelector || '.js-yext-filterbox-reset';
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
      /**
       * If true, show number of applied results next to title
       * @type {boolean}
       * @private
       */

      _this._showNumFilters = config.showNumFilters || false;
      /**
       * The selector of the inputs
       * @type {string}
       * @private
       */

      _this._inputSelector = config.inputSelector || '.js-yext-filter-option';
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
        } // Initializes reset button


        var resetButton = DOM.query(this._container, this._resetButtonSelector);
        DOM.on(resetButton, 'click', function () {
          _this2._clearFilters();
        });
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
       * Clear filers in storage and uncheck all selected filters
       * @private
       */

    }, {
      key: "_clearFilters",
      value: function _clearFilters() {
        this._filters = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this._filterComponents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var filterComponent = _step.value;

            if (filterComponent._type === 'FilterOptionsComponent') {
              filterComponent.clear();
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = filterComponent._options[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var option = _step2.value;
                  option.checked = false;
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                    _iterator2["return"]();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }
            }
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

        this._saveFiltersToStorage();

        this._search();
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
        var numElement = DOM.query(this._container, '.js-filterBoxNum');

        if (this._showNumFilters && numElement) {
          var filters = DOM.queryAll(this._container, this._inputSelector);
          var numAppliedFilters = filters.filter(function (e) {
            return e.checked;
          }).length;

          if (numAppliedFilters > 0) {
            numElement.innerHTML = numAppliedFilters;
          } else {
            numElement.innerHTML = '';
          }
        }
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
        return new ProviderTypes[type.toLowerCase()](this._opts);
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
        if (Object.keys(data).length === 0) {
          return this;
        }

        return _get(_getPrototypeOf(ResultsComponent.prototype), "setState", this).call(this, Object.assign({}, data, {
          includeMap: this._opts.includeMap,
          mapConfig: this._opts.mapConfig
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
          var newOpts = Object.assign({}, this._opts.mapConfig, opts);
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
        var config = this._opts.config;

        if (config === undefined) {
          return {};
        }

        return this._opts['config'][configId] || this._opts['config'];
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

        this.components.setCore(new Core({
          apiKey: config.apiKey,
          answersKey: config.answersKey,
          locale: config.locale
        })).setRenderer(this.renderer).setAnalyticsReporter(new AnalyticsReporter(config.apiKey, config.answersKey));

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2Vycy11bWQuanMiLCJzb3VyY2VzIjpbInNyYy9jb3JlL2h0dHAvaHR0cHJlcXVlc3Rlci5qcyIsInNyYy9jb3JlL2NvbnN0YW50cy5qcyIsInNyYy91aS9kb20vc2VhcmNocGFyYW1zLmpzIiwic3JjL2NvcmUvaHR0cC9hcGlyZXF1ZXN0LmpzIiwic3JjL2NvcmUvZXJyb3JzL2Vycm9ycy5qcyIsInNyYy9jb3JlL3NlYXJjaC9zZWFyY2hhcGkuanMiLCJzcmMvY29yZS9tb2RlbHMvYXV0b2NvbXBsZXRlZGF0YS5qcyIsInNyYy9jb3JlL3NlYXJjaC9hdXRvY29tcGxldGVkYXRhdHJhbnNmb3JtZXIuanMiLCJzcmMvY29yZS9zZWFyY2gvYXV0b2NvbXBsZXRlYXBpLmpzIiwic3JjL2NvcmUvbW9kZWxzL3Jlc3VsdC5qcyIsInNyYy9jb3JlL21vZGVscy9zZWN0aW9uLmpzIiwic3JjL2NvcmUvbW9kZWxzL3VuaXZlcnNhbHJlc3VsdHMuanMiLCJzcmMvY29yZS9tb2RlbHMvZGlyZWN0YW5zd2VyLmpzIiwic3JjL2NvcmUvbW9kZWxzL25hdmlnYXRpb24uanMiLCJzcmMvY29yZS9tb2RlbHMvdmVydGljYWxyZXN1bHRzLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cy5qcyIsInNyYy9jb3JlL3NlYXJjaC9zZWFyY2hkYXRhdHJhbnNmb3JtZXIuanMiLCJzcmMvY29yZS9ldmVudGVtaXR0ZXIvZXZlbnRlbWl0dGVyLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9tb2R1bGVkYXRhLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9zdG9yYWdlLmpzIiwic3JjL2NvcmUvY29yZS5qcyIsInNyYy91aS9jb21wb25lbnRzL2NvbXBvbmVudG1hbmFnZXIuanMiLCJzcmMvdWkvcmVuZGVyaW5nL3JlbmRlcmVyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9oYW5kbGViYXJzcmVuZGVyZXIuanMiLCJzcmMvdWkvcmVuZGVyaW5nL2NvbnN0LmpzIiwic3JjL3VpL2RvbS9kb20uanMiLCJzcmMvdWkvY29tcG9uZW50cy9zdGF0ZS5qcyIsInNyYy9jb3JlL2FuYWx5dGljcy9hbmFseXRpY3NldmVudC5qcyIsInNyYy9jb3JlL2FuYWx5dGljcy9hbmFseXRpY3NyZXBvcnRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbmNvbXBvbmVudC5qcyIsInNyYy9jb3JlL21vZGVscy9maWx0ZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL2ZpbHRlcnNlYXJjaGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3NlYXJjaC9hdXRvY29tcGxldGVjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcm9wdGlvbnNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcmJveGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvZGlyZWN0YW5zd2VyY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvbG9jYXRpb25yZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvZXZlbnRyZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvcGVvcGxlcmVzdWx0c2l0ZW1jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvcHJvdmlkZXJzL21hcHByb3ZpZGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL3Byb3ZpZGVycy9nb29nbGVtYXBwcm92aWRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9wcm92aWRlcnMvbWFwYm94bWFwcHJvdmlkZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvbWFwY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHRzY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy91bml2ZXJzYWxyZXN1bHRzY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcXVlc3Rpb25zL3F1ZXN0aW9uc3VibWlzc2lvbmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2NvbnN0LmpzIiwic3JjL3VpL3JlbmRlcmluZy90ZW1wbGF0ZWxvYWRlci5qcyIsInNyYy9jb3JlL2Vycm9ycy9lcnJvcnJlcG9ydGVyLmpzIiwic3JjL2Fuc3dlcnMtdW1kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAbW9kdWxlIEh0dHBSZXF1ZXN0ZXIgKi9cblxuLyogZ2xvYmFsIGZldGNoICovXG5cbi8qKlxuICogVHlwZXMgb2YgSFRUUCByZXF1ZXN0c1xuICovXG5jb25zdCBNZXRob2RzID0ge1xuICBHRVQ6ICdnZXQnLFxuICBQT1NUOiAncG9zdCcsXG4gIFBVVDogJ3B1dCcsXG4gIERFTEVURTogJ2RlbGV0ZSdcbn07XG5cbi8qKlxuICogSHR0cFJlcXVlc3RlciBpcyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb24gb2YgQUpBWFxuICogcmVsYXRlZCBtYXR0ZXJzLiBJdCdzIHVzZWQgdG8gbWFrZSBhbGwgdHlwZXMgb2YgbmV0d29yayByZXF1ZXN0c1xuICogYW5kIGV4cG9zZXMgYSBwcm9taXNlIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHR0cFJlcXVlc3RlciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBHRVQgSFRUUCByZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBwcm92aWRlIChnZXRzIGVuY29kZWQgaW50byB0aGUgVVJMKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBDb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgKi9cbiAgZ2V0ICh1cmwsIGRhdGEsIG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KE1ldGhvZHMuR0VULCB0aGlzLmVuY29kZVBhcmFtcyh1cmwsIGRhdGEpLCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBQT1NUIEhUVFAgcmVxdWVzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gcHJvdmlkZSAoZ2V0cyBlbmNvZGVkIGludG8gdGhlIFVSTClcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgQ29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICovXG4gIHBvc3QgKHVybCwgZGF0YSwgb3B0cykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXG4gICAgICBNZXRob2RzLlBPU1QsXG4gICAgICB1cmwsXG4gICAgICBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIGNyZWRlbnRpYWxzOiB1bmRlZmluZWRcbiAgICAgIH0sIG9wdHMpXG4gICAgKTtcbiAgfVxuXG4gIHJlcXVlc3QgKG1ldGhvZCwgdXJsLCBvcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICBtZXRob2QsXG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgfSwgb3B0cykpO1xuICB9XG5cbiAgZW5jb2RlUGFyYW1zICh1cmwsIHBhcmFtcykge1xuICAgIGxldCBoYXNQYXJhbSA9IHVybC5pbmRleE9mKCc/JykgPiAtMTtcblxuICAgIGxldCBzZWFyY2hRdWVyeSA9ICcnO1xuICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgIGlmICghaGFzUGFyYW0pIHtcbiAgICAgICAgaGFzUGFyYW0gPSB0cnVlO1xuICAgICAgICBzZWFyY2hRdWVyeSArPSAnPyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWFyY2hRdWVyeSArPSAnJic7XG4gICAgICB9XG5cbiAgICAgIHNlYXJjaFF1ZXJ5ICs9IGtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiB1cmwgKyBzZWFyY2hRdWVyeTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuLyoqIFRoZSBjdXJyZW50IGxpYiB2ZXJzaW9uLCByZXBvcnRlZCB3aXRoIGVycm9ycyBhbmQgYW5hbHl0aWNzICovXG5leHBvcnQgY29uc3QgTElCX1ZFUlNJT04gPSAndjAuNy4zJztcblxuLyoqIFRoZSBiYXNlIHVybCBmb3IgdGhlIGFwaSBiYWNrZW5kICovXG5leHBvcnQgY29uc3QgQVBJX0JBU0VfVVJMID0gJ2h0dHBzOi8vbGl2ZWFwaS55ZXh0LmNvbSc7XG5cbi8qKiBUaGUgZGVmYXVsdCB1cmwgZm9yIGNvbXBpbGVkIGNvbXBvbmVudCB0ZW1wbGF0ZXMgKi9cbmV4cG9ydCBjb25zdCBDT01QSUxFRF9URU1QTEFURVNfVVJMID0gJ2h0dHBzOi8vYXNzZXRzLnNpdGVzY2RuLm5ldC9hbnN3ZXJzL2Fuc3dlcnN0ZW1wbGF0ZXMuY29tcGlsZWQubWluLmpzJztcblxuLyoqIFRoZSBiYXNlIHVybCBmb3IgdGhlIGFuYWx5dGljcyBiYWNrZW5kICAqL1xuZXhwb3J0IGNvbnN0IEFOQUxZVElDU19CQVNFX1VSTCA9ICdodHRwczovL3JlYWx0aW1lYW5hbHl0aWNzLnlleHQuY29tJztcbiIsIi8qKiBAbW9kdWxlIFNlYXJjaFBhcmFtcyAqL1xuXG4vKiBnbG9iYWwgd2luZG93ICovXG5cbi8qKlxuICogU2VhcmNoUGFyYW1zIGlzIGEgY2xhc3MgdG8gZ2V0IHRoZSBzZWFyY2ggcGFyYW1zIGluIGEgVVJMLlxuICogSXQgaXMgYSByZXBsYWNlbWVudCBmb3IgVVJMLnNlYXJjaFBhcmFtcyBhbmQgVVJMU2VhcmNoUGFyYW1zIGZvciBicm93c2VycyBsaWtlIElFMTFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoUGFyYW1zIHtcbiAgY29uc3RydWN0b3IgKHVybCkge1xuICAgIC8qKlxuICAgICAqIE1hcHBpbmcgb2YgYWxsIHF1ZXJ5IHBhcmFtZXRlcnMgaW4gdGhlIGdpdmVuIHVybCwgcXVlcnkgcGFyYW0gLT4gdmFsdWVcbiAgICAgKiBPbmx5IHVzZWQgaWYgVVJMU2VhcmNoUGFyYW1zIGRvZXMgbm90IGV4aXN0IGluIHRoZSB3aW5kb3dcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcGFyYW1zID0ge307XG5cbiAgICBpZiAod2luZG93ICYmIHdpbmRvdy5VUkxTZWFyY2hQYXJhbXMpIHtcbiAgICAgIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BhcmFtcyA9IHRoaXMucGFyc2UodXJsKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcGFyc2UgY3JlYXRlcyBhIG1hcHBpbmcgb2YgYWxsIHF1ZXJ5IHBhcmFtcyBpbiBhIGdpdmVuIHVybFxuICAgKiBUaGUgcXVlcnkgcGFyYW0gdmFsdWVzIGFyZSBkZWNvZGVkIGJlZm9yZSBiZWluZyBwdXQgaW4gdGhlIG1hcFxuICAgKiBUaHJlZSB0eXBlcyBvZiBpbnB1dCBhcmUgc3VwcG9ydGVkXG4gICAqICAgKDEpIGZ1bGwgVVJMIGUuZy4gaHR0cDovL3d3dy55ZXh0LmNvbS8/cT1oZWxsb1xuICAgKiAgICgyKSBwYXJhbXMgd2l0aCA/IGUuZy4gP3E9aGVsbG9cbiAgICogICAoMSkgcGFyYW1zIHdpdGhvdXQgPyBlLmcuIHE9aGVsbG9cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IG1hcHBpbmcgZnJvbSBxdWVyeSBwYXJhbSAtPiB2YWx1ZSB3aGVyZSB2YWx1ZSBpcyAnJyBpZiBubyB2YWx1ZSBpcyBwcm92aWRlZFxuICAgKi9cbiAgcGFyc2UgKHVybCkge1xuICAgIGxldCBwYXJhbXMgPSB7fTtcbiAgICBsZXQgc2VhcmNoID0gdXJsO1xuXG4gICAgaWYgKHNlYXJjaCA9PT0gJycpIHtcbiAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfVxuXG4gICAgLy8gTm9ybWFsaXplIGFsbCB1cmwgaW5wdXRzIHRvIHN0cmluZyBvZiBxdWVyeSBwYXJhbXMgc2VwYXJhdGVkIGJ5ICZcbiAgICBpZiAodXJsLmluZGV4T2YoJz8nKSA+IC0xKSB7XG4gICAgICBzZWFyY2ggPSB1cmwuc2xpY2UodXJsLmluZGV4T2YoJz8nKSArIDEpO1xuICAgIH1cblxuICAgIGNvbnN0IGVuY29kZWRQYXJhbXMgPSBzZWFyY2guc3BsaXQoJyYnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuY29kZWRQYXJhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleVZhbCA9IGVuY29kZWRQYXJhbXNbaV0uc3BsaXQoJz0nKTtcbiAgICAgIGlmIChrZXlWYWwubGVuZ3RoID4gMSkge1xuICAgICAgICBwYXJhbXNba2V5VmFsWzBdXSA9IFNlYXJjaFBhcmFtcy5kZWNvZGUoa2V5VmFsWzFdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtc1trZXlWYWxbMF1dID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIHF1ZXJ5IHBhcmFtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgcXVlcnkgcGFyYW0ga2V5IHRvIGdldCB0aGUgdmFsdWUgb2ZcbiAgICogQHJldHVybiB7c3RyaW5nfSBwYXJhbSB2YWx1ZSwgbnVsbCBvdGhlcndpc2VcbiAgICovXG4gIGdldCAocXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuX3BhcmFtc1tTdHJpbmcocXVlcnkpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcGFyYW1zW3F1ZXJ5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXQgY2hhbmdlcyB0aGUgdmFsdWUgb2YgYSBnaXZlbiBxdWVyeSBwYXJhbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSB0aGUgcXVlcnkgcGFyYW0ga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSB0aGUgdmFsdWUgb2YgdGhlIHF1ZXJ5IHBhcmFtIHVwZGF0ZSB3aXRoXG4gICAqL1xuICBzZXQgKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5fcGFyYW1zW1N0cmluZyhuYW1lKV0gPSBTdHJpbmcodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIGhhcyBjaGVja3MgdG8gc2VlIGlmIHRoZSBnaXZlbiBxdWVyeSBwYXJhbSBrZXkgZXhpc3RzIGluIHRoZSBwYXJhbXMgb2JqZWN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgcXVlcnkgcGFyYW0gdG8gY2hlY2tcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgcXVlcnkgcGFyYW0gaXMgaW4gdGhlIHBhcmFtcyBvYmplY3QsIGZhbHNlIG8vd1xuICAgKi9cbiAgaGFzIChxdWVyeSkge1xuICAgIHJldHVybiBxdWVyeSBpbiB0aGlzLl9wYXJhbXM7XG4gIH1cblxuICAvKipcbiAgICogdG9TdHJpbmcgcmV0dXJucyBhIHVybCB3aXRoIGFsbCB0aGUgcXVlcnkgcGFyYW1zIGluIHRoZSBwYXJhbXMgb2JqZWN0ICh3aXRob3V0IGEgPylcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9TdHJpbmcgKCkge1xuICAgIGxldCBzdHJpbmcgPSBbXTtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fcGFyYW1zKSB7XG4gICAgICBzdHJpbmcucHVzaChgJHtrZXl9PSR7U2VhcmNoUGFyYW1zLmVuY29kZSh0aGlzLl9wYXJhbXNba2V5XSl9YCk7XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmcuam9pbignJicpO1xuICB9XG5cbiAgLyoqXG4gICAqIGRlY29kZSByZXR1cm5zIHRoZSBkZWNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBzdHJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyB0aGUgc3RyaW5nIHRvIGRlY29kZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZGVjb2RlIChzdHJpbmcpIHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cmluZy5yZXBsYWNlKC9bICtdL2csICclMjAnKSk7XG4gIH1cblxuICAvKipcbiAgICogZGVjb2RlIHJldHVybnMgdGhlIGVuY29kZWQgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIHN0cmluZyAoZS5nLiArIC0+ICUyQilcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyB0aGUgc3RyaW5nIHRvIGVuY29kZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZW5jb2RlIChzdHJpbmcpIHtcbiAgICBsZXQgcmVwbGFjZSA9IHtcbiAgICAgICchJzogJyUyMScsXG4gICAgICBcIidcIjogJyUyNycsXG4gICAgICAnKCc6ICclMjgnLFxuICAgICAgJyknOiAnJTI5JyxcbiAgICAgICclMjAnOiAnKydcbiAgICB9O1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5nKS5yZXBsYWNlKC9bIScoKV18JTIwL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgcmV0dXJuIHJlcGxhY2VbbWF0Y2hdO1xuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBcGlSZXF1ZXN0ICovXG5cbmltcG9ydCBIdHRwUmVxdWVzdGVyIGZyb20gJy4vaHR0cHJlcXVlc3Rlcic7XG5pbXBvcnQgeyBBUElfQkFTRV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi91aS9kb20vc2VhcmNocGFyYW1zJzsgLy8gVE9ETyBpZGVhbGx5IHRoaXMgd291bGQgYmUgcGFzc2VkIGluIGFzIGEgcGFyYW1cblxuLyoqXG4gKiBBcGlSZXF1ZXN0IGlzIHRoZSBiYXNlIGNsYXNzIGZvciBhbGwgQVBJIHJlcXVlc3RzLlxuICogSXQgZGVmaW5lcyBhbGwgb2YgdGhlIGNvcmUgcHJvcGVydGllcyByZXF1aXJlZCB0byBtYWtlIGEgcmVxdWVzdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcGlSZXF1ZXN0IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIHVzZWQgZm9yIG1ha2luZyBuZXR3b3JrIHJlcXVlc3QgYW5kIGhhbmRsaW5nIGVycm9yc1xuICAgICAqIEB0eXBlIHtIdHRwUmVxdWVzdGVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcmVxdWVzdGVyID0gbmV3IEh0dHBSZXF1ZXN0ZXIoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBiYXNlVXJsIHRvIHVzZSBmb3IgbWFraW5nIGEgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9iYXNlVXJsID0gb3B0cy5iYXNlVXJsIHx8IEFQSV9CQVNFX1VSTDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBlbmRwb2ludCB0byB1c2UgaW4gdGhlIHVybCAoYXBwZW5kZWQgdG8gdGhlIHtiYXNlVXJsfSlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZW5kcG9pbnQgPSBvcHRzLmVuZHBvaW50IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgQVBJIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwaUtleSA9IG9wdHMuYXBpS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgQVBJIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnNpb24gPSBvcHRzLnZlcnNpb24gfHwgMjAxOTAxMDE7XG5cbiAgICAvKipcbiAgICAgKiBBZGRpdGlvbmFsIGRhdGEgcGFyYW1zIHRoYXQgYXJlIHNlbnQgYWxvbmcgd2l0aCB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9wYXJhbXMgPSBvcHRzLnBhcmFtcyB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgY3JlYXRlcyBhIG5ldyBgR0VUYCByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIHJlcXVlc3QgY2xhc3NcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBnZXQgKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0ZXIuZ2V0KHRoaXMuX2Jhc2VVcmwgKyB0aGlzLl9lbmRwb2ludCwgdGhpcy5wYXJhbXModGhpcy5fcGFyYW1zKSk7XG4gIH1cblxuICBwb3N0IChvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3Rlci5wb3N0KHRoaXMuX2Jhc2VVcmwgKyB0aGlzLl9lbmRwb2ludCwgdGhpcy5wYXJhbXModGhpcy5fcGFyYW1zKSwgb3B0cyk7XG4gIH1cblxuICBwYXJhbXMgKHBhcmFtcykge1xuICAgIHZhciBiYXNlUGFyYW1zID0ge1xuICAgICAgJ3YnOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgJ2FwaV9rZXknOiB0aGlzLl9hcGlLZXlcbiAgICB9O1xuXG4gICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKSk7XG5cbiAgICBpZiAodXJsUGFyYW1zLmhhcygnYmV0YScpKSB7XG4gICAgICBiYXNlUGFyYW1zWydiZXRhJ10gPSB1cmxQYXJhbXMuZ2V0KCdiZXRhJyk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFueSBwYXJhbWF0ZXJzIHdob3MgdmFsdWUgaXMgYHVuZGVmaW5lZGAuXG4gICAgLy9cbiAgICAvLyBOT1RFKGJpbGx5KSBQcm9iYWJseSBiZXR0ZXIgdG8gYmUgZXhwbGljaXQgYWJvdXQgaG93IHRvIGhhbmRsZSB0aGlzIGF0IHRoZSByZXF1ZXN0IGJ1aWxkaW5nIGxldmVsLFxuICAgIC8vIGJ1dCBJIGNhbid0IHNlZSBhbnkgY2FzZXMgd2hlcmUgd2UnZCBldmVyIHdhbnQgdG8gc2VuZCAndW5kZWZpbmVkJyBhcyBhIHZhbHVlIHRvIHRoZSBzZXJ2ZXIuXG4gICAgLy8gU28gaXQncyBwcm9iYWJseSBmaW5lIHRvICdjbGVhbicgdGhlIHBhcmFtcyBvYmplY3QgaGVyZVxuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKHBhcmFtc1trZXldID09PSB1bmRlZmluZWQgfHwgcGFyYW1zW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIHBhcmFtc1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYmFzZVBhcmFtcywgcGFyYW1zIHx8IHt9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRXJyb3JzICovXG5cbi8qKlxuICogQW5zd2Vyc0Jhc2VFcnJvciBpcyBhbiBleHRlbnNpb24gb2YgdGhlIGJhc2UgRXJyb3Igb2JqZWN0LlxuICogVGhpcyBpcyB0aGUgb2JqZWN0IHRoYXQgaXMgdXNlZCB0byB3aGVuIHJlcG9ydGluZyB0byB0aGUgc2VydmVyLlxuICogQGV4dGVuZHMgRXJyb3JcbiAqXG4gKiBFcnJvciBjb2RlcyBmYWxsIGludG8gb25lIG9mIGZvdXIgY2F0ZWdvcmllczpcbiAqIDFYWCBlcnJvcnM6IEJhc2ljIGVycm9yc1xuICogMlhYIGVycm9yczogVUkgZXJyb3JzXG4gKiAzWFggZXJyb3JzOiBFbmRwb2ludCBlcnJvcnNcbiAqIDRYWCBlcnJvcnM6IENvcmUgZXJyb3JzXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQmFzZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAoZXJyb3JDb2RlLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLmVycm9yQ29kZSA9IGVycm9yQ29kZTtcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5ib3VuZGFyeSA9IGJvdW5kYXJ5O1xuICAgIHRoaXMuY2F1c2VkQnkgPSBjYXVzZWRCeTtcbiAgICB0aGlzLnJlcG9ydGVkID0gZmFsc2U7XG4gIH1cblxuICB0b0pzb24gKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChidWlsdGluRXJyb3IsIGJvdW5kYXJ5KSB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoYnVpbHRpbkVycm9yLm1lc3NhZ2UsIGJvdW5kYXJ5KTtcbiAgICBlcnJvci5zdGFjayA9IGJ1aWx0aW5FcnJvci5zdGFjaztcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzQmFzaWNFcnJvciBpcyBhIHdyYXBwZXIgYXJvdW5kIGFsbCB0aGUgYnVpbHQtaW4gZXJyb3JzXG4gKiBlLmcuIHVuZGVmaW5lZCB2YXJpYWJsZXMsIGluY29ycmVjdCBzeW50YXgsIHR5cGVzLCBtaXNzaW5nIG1ldGhvZHMsIGV0Yy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNCYXNpY0Vycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigxMDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzVWlFcnJvciB1c2VkIGZvciB0aGluZ3MgbGlrZSBET00gZXJyb3JzLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc1VpRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDIwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNDb21wb25lbnRFcnJvciBpcyB1c2VkIGZvciBDb21wb25lbnQgb3JpZW50ZWQgZXJyb3JzXG4gKiBlLmcuIGZhaWx1cmUgdG8gcmVuZGVyLCBvciBjYXRjaGluZyB1bmtub3ducy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNDb21wb25lbnRFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgY29tcG9uZW50LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDIwMSwgbWVzc2FnZSwgY29tcG9uZW50LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzRW5kcG9pbnRFcnJvciByZXByZXNlbnRzIGFsbCBuZXR3b3JrIHJlbGF0ZWQgZXJyb3JzLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0VuZHBvaW50RXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDMwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNDb3JlRXJyb3IgcmVwcmVzZW50cyBlcnJvcnMgZm9yIHByZWNvbmRpdGlvbiBmYWlsdXJlcyBpbiB0aGUgY29yZSBsaWJyYXJ5XG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQ29yZUVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcig0MDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cbi8qKlxuICogQW5zd2Vyc1N0b3JhZ2VFcnJvciByZXByZXNlbnRzIHN0b3JhZ2UgcmVsYXRlZCBlcnJvcnNcbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNTdG9yYWdlRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIHN0b3JhZ2VLZXksIGRhdGEsIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoNDAxLCBtZXNzYWdlLCAnU3RvcmFnZScsIGNhdXNlZEJ5KTtcbiAgICB0aGlzLnN0b3JhZ2VLZXkgPSBzdG9yYWdlS2V5O1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFuc3dlcnNBbmFseXRpY3NFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgZXZlbnQsIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoNDAyLCBtZXNzYWdlLCAnQW5hbHl0aWNzJywgY2F1c2VkQnkpO1xuICAgIHRoaXMuZXZlbnQgPSBldmVudDtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VhcmNoQXBpICovXG5cbmltcG9ydCBBcGlSZXF1ZXN0IGZyb20gJy4uL2h0dHAvYXBpcmVxdWVzdCc7XG5pbXBvcnQgeyBBbnN3ZXJzQmFzaWNFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvcnMnO1xuXG4vKipcbiAqIFNlYXJjaEFwaSBpcyB0aGUgQVBJIGZvciBkb2luZyB2YXJpb3VzIHR5cGVzIG9mIHNlYXJjaFxuICogb3ZlciB0aGUgbmV0d29yayAoZS5nLiB2ZXJ0aWNhbCBvciB1bml2ZXJzYWwpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEFwaSB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgQVBJIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghb3B0cy5hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQXBpIEtleSBpcyByZXF1aXJlZCcsICdTZWFyY2gnKTtcbiAgICB9XG4gICAgdGhpcy5fYXBpS2V5ID0gb3B0cy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgQW5zd2VycyBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIW9wdHMuYW5zd2Vyc0tleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBbnN3ZXJzIEtleSBpcyByZXF1aXJlZCcsICdTZWFyY2gnKTtcbiAgICB9XG4gICAgdGhpcy5fYW5zd2Vyc0tleSA9IG9wdHMuYW5zd2Vyc0tleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBBUEkgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVyc2lvbiA9IG9wdHMudmVyc2lvbiB8fCAyMDE5MDEwMSB8fCAyMDE5MDMwMTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBsb2NhbGUgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIW9wdHMubG9jYWxlKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0xvY2FsZSBpcyByZXF1aXJlZCcsICdTZWFyY2gnKTtcbiAgICB9XG4gICAgdGhpcy5fbG9jYWxlID0gb3B0cy5sb2NhbGU7XG4gIH1cblxuICB2ZXJ0aWNhbFF1ZXJ5IChxdWVyeVN0cmluZywgdmVydGljYWxLZXksIGZpbHRlcikge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy92ZXJ0aWNhbC9xdWVyeScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogcXVlcnlTdHJpbmcsXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgICAgJ2ZpbHRlcnMnOiBmaWx0ZXIsXG4gICAgICAgICd2ZXJ0aWNhbEtleSc6IHZlcnRpY2FsS2V5LFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfVxuXG4gIHF1ZXJ5IChxdWVyeVN0cmluZykge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9xdWVyeScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogcXVlcnlTdHJpbmcsXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEF1dG9Db21wbGV0ZURhdGEgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlRGF0YSB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICB0aGlzLnNlY3Rpb25zID0gZGF0YS5zZWN0aW9ucyB8fCBbXTtcbiAgICB0aGlzLnF1ZXJ5SWQgPSBkYXRhLnF1ZXJ5SWQgfHwgJyc7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSkge1xuICAgIGxldCBzZWN0aW9ucztcbiAgICBpZiAocmVzcG9uc2Uuc2VjdGlvbnMpIHtcbiAgICAgIHNlY3Rpb25zID0gcmVzcG9uc2Uuc2VjdGlvbnMubWFwKHMgPT4gKHtcbiAgICAgICAgbGFiZWw6IHMubGFiZWwsXG4gICAgICAgIHJlc3VsdHM6IHMucmVzdWx0cy5tYXAociA9PiBuZXcgQXV0b0NvbXBsZXRlUmVzdWx0KHIpKVxuICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWN0aW9ucyA9IFt7IHJlc3VsdHM6IHJlc3BvbnNlLnJlc3VsdHMubWFwKHIgPT4gbmV3IEF1dG9Db21wbGV0ZVJlc3VsdChyKSkgfV07XG4gICAgfVxuICAgIHJldHVybiBuZXcgQXV0b0NvbXBsZXRlRGF0YSh7IHNlY3Rpb25zLCBxdWVyeUlkOiByZXNwb25zZS5xdWVyeUlkIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvQ29tcGxldGVSZXN1bHQge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgdGhpcy5maWx0ZXIgPSBkYXRhLmZpbHRlciB8fCB7fTtcbiAgICB0aGlzLmhpZ2hsaWdodGVkVmFsdWUgPSB0aGlzLmhpZ2hsaWdodChkYXRhKTtcbiAgICB0aGlzLmtleSA9IGRhdGEua2V5IHx8ICcnO1xuICAgIHRoaXMubWF0Y2hlZFN1YnN0cmluZ3MgPSBkYXRhLm1hdGNoZWRTdWJzdHJpbmdzIHx8IFtdO1xuICAgIHRoaXMudmFsdWUgPSBkYXRhLnZhbHVlIHx8ICcnO1xuICAgIHRoaXMuc2hvcnRWYWx1ZSA9IGRhdGEuc2hvcnRWYWx1ZSB8fCB0aGlzLnZhbHVlO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICAvLyBUT0RPKGpkZWxlcm1lKTogY29uc29saWRhdGUgd2l0aCBvdGhlciBoaWdobGlnaHQgZnVuY3Rpb25zXG4gIGhpZ2hsaWdodCAoZGF0YSkge1xuICAgIGNvbnN0IHsgdmFsdWUsIHNob3J0VmFsdWUsIG1hdGNoZWRTdWJzdHJpbmdzIH0gPSBkYXRhO1xuICAgIGNvbnN0IHZhbCA9IHZhbHVlIHx8IHNob3J0VmFsdWU7XG5cbiAgICBpZiAoIW1hdGNoZWRTdWJzdHJpbmdzIHx8IG1hdGNoZWRTdWJzdHJpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgb3VyIGhpZ2hsaWdodGVkIHN1YnN0cmluZ3MgYXJlIHNvcnRlZFxuICAgIG1hdGNoZWRTdWJzdHJpbmdzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChhLm9mZnNldCA8IGIub2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGEub2Zmc2V0ID4gYi5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgLy8gQnVpbGQgb3VyIG5ldyB2YWx1ZSBiYXNlZCBvbiB0aGUgaGlnaGxpZ2h0c1xuICAgIGxldCBoaWdobGlnaHRlZFZhbHVlID0gJyc7XG4gICAgbGV0IG5leHRTdGFydCA9IDA7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hdGNoZWRTdWJzdHJpbmdzLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgc3RhcnQgPSBOdW1iZXIobWF0Y2hlZFN1YnN0cmluZ3Nbal0ub2Zmc2V0KTtcbiAgICAgIGxldCBlbmQgPSBzdGFydCArIG1hdGNoZWRTdWJzdHJpbmdzW2pdLmxlbmd0aDtcblxuICAgICAgaGlnaGxpZ2h0ZWRWYWx1ZSArPSBbdmFsLnNsaWNlKG5leHRTdGFydCwgc3RhcnQpLCAnPHN0cm9uZz4nLCB2YWwuc2xpY2Uoc3RhcnQsIGVuZCksICc8L3N0cm9uZz4nXS5qb2luKCcnKTtcblxuICAgICAgaWYgKGogPT09IG1hdGNoZWRTdWJzdHJpbmdzLmxlbmd0aCAtIDEgJiYgZW5kIDwgdmFsLmxlbmd0aCkge1xuICAgICAgICBoaWdobGlnaHRlZFZhbHVlICs9IHZhbC5zbGljZShlbmQpO1xuICAgICAgfVxuXG4gICAgICBuZXh0U3RhcnQgPSBlbmQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhpZ2hsaWdodGVkVmFsdWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lciAqL1xuXG5pbXBvcnQgQXV0b0NvbXBsZXRlRGF0YSBmcm9tICcuLi9tb2RlbHMvYXV0b2NvbXBsZXRlZGF0YSc7XG5cbi8qKlxuICogQSBEYXRhIFRyYW5zZm9ybWVyIHRoYXQgdGFrZXMgdGhlIHJlc3BvbnNlIG9iamVjdCBmcm9tIGEgQXV0b0NvbXBsZXRlIHJlcXVlc3RcbiAqIEFuZCB0cmFuc2Zvcm1zIGluIHRvIGEgZnJvbnQtZW5kIG9yaWVudGVkIGRhdGEgc3RydWN0dXJlIHRoYXQgb3VyXG4gKiBjb21wb25lbnQgbGlicmFyeSBhbmQgY29yZSBzdG9yYWdlIHVuZGVyc3RhbmQuXG4gKlxuICogVE9ETyhiaWxseSkgQ3JlYXRlIG91ciBvd24gZnJvbnQtZW5kIGRhdGEgbW9kZWxzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lciB7XG4gIHN0YXRpYyBjbGVhbiAobW9kdWxlSWQsIGRhdGEpIHtcbiAgICBpZiAoZGF0YS5zZWN0aW9ucyAmJiBkYXRhLnNlY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVsZXRlIGRhdGEuc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuc2VjdGlvbnMgJiYgZGF0YS5zZWN0aW9ucy5sZW5ndGggPT09IDEgJiYgZGF0YS5zZWN0aW9uc1swXS5yZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVsZXRlIGRhdGEuc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIFttb2R1bGVJZF06IGRhdGFcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHVuaXZlcnNhbCAocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gQXV0b0NvbXBsZXRlRGF0YS5mcm9tKHJlc3BvbnNlKTtcbiAgfVxuXG4gIHN0YXRpYyBmaWx0ZXIgKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIEF1dG9Db21wbGV0ZURhdGEuZnJvbShyZXNwb25zZSk7XG4gIH1cblxuICBzdGF0aWMgdmVydGljYWwgKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIEF1dG9Db21wbGV0ZURhdGEuZnJvbShyZXNwb25zZSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEF1dG9Db21wbGV0ZUFwaSAqL1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lciBmcm9tICcuL2F1dG9jb21wbGV0ZWRhdGF0cmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBBbnN3ZXJzQmFzaWNFcnJvciwgQW5zd2Vyc0VuZHBvaW50RXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBBdXRvQ29tcGxldGVBcGkgZXhwb3NlcyBhbiBpbnRlcmZhY2UgZm9yIG5ldHdvcmsgcmVsYXRlZCBtYXR0ZXJzXG4gKiBmb3IgYWxsIHRoZSBhdXRvY29tcGxldGUgZW5kcG9pbnRzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVBcGkge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIW9wdHMuYXBpS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0FwaSBLZXkgaXMgcmVxdWlyZWQnLCAnQXV0b0NvbXBsZXRlJyk7XG4gICAgfVxuICAgIHRoaXMuX2FwaUtleSA9IG9wdHMuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIEFuc3dlcnMgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFvcHRzLmFuc3dlcnNLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQW5zd2VycyBLZXkgaXMgcmVxdWlyZWQnLCAnQXV0b0NvbXBsZXRlJyk7XG4gICAgfVxuICAgIHRoaXMuX2Fuc3dlcnNLZXkgPSBvcHRzLmFuc3dlcnNLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgQVBJIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnNpb24gPSBvcHRzLnZlcnNpb24gfHwgMjAxOTAxMDEgfHwgMjAxOTAzMDE7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbG9jYWxlIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFvcHRzLmxvY2FsZSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdMb2NhbGUgaXMgcmVxdWlyZWQnLCAnQXV0b0NvbXBsZXRlJyk7XG4gICAgfVxuICAgIHRoaXMuX2xvY2FsZSA9IG9wdHMubG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEF1dG9jb21wbGV0ZSBmaWx0ZXJzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCBUaGUgaW5wdXQgdG8gdXNlIGZvciBhdXRvIGNvbXBsZXRlXG4gICAqL1xuICBxdWVyeUZpbHRlciAoaW5wdXQsIHZlcnRpY2FsS2V5LCBiYXJLZXkpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvZmlsdGVyc2VhcmNoJyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBpbnB1dCxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgICAnZXhwZXJpZW5jZUtleSc6IHZlcnRpY2FsS2V5LFxuICAgICAgICAnaW5wdXRLZXknOiBiYXJLZXksXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIuZmlsdGVyKHJlc3BvbnNlLnJlc3BvbnNlLCBiYXJLZXkpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEFuc3dlcnNFbmRwb2ludEVycm9yKCdGaWx0ZXIgc2VhcmNoIHJlcXVlc3QgZmFpbGVkJywgJ0F1dG9Db21wbGV0ZScsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcXVlcnlWZXJ0aWNhbCAoaW5wdXQsIHZlcnRpY2FsS2V5LCBiYXJLZXkpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvYXV0b2NvbXBsZXRlJyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBpbnB1dCxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgICAnZXhwZXJpZW5jZUtleSc6IHZlcnRpY2FsS2V5LFxuICAgICAgICAnYmFyS2V5JzogYmFyS2V5LFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLnZlcnRpY2FsKHJlc3BvbnNlLnJlc3BvbnNlLCByZXF1ZXN0Ll9wYXJhbXMuYmFyS2V5KSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzRW5kcG9pbnRFcnJvcignVmVydGljYWwgc2VhcmNoIHJlcXVlc3QgZmFpbGVkJywgJ0F1dG9Db21wbGV0ZScsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcXVlcnlVbml2ZXJzYWwgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL2F1dG9jb21wbGV0ZScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogcXVlcnlTdHJpbmcsXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHF1ZXJ5U3RyaW5nKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLnVuaXZlcnNhbChyZXNwb25zZS5yZXNwb25zZSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoJ1VuaXZlcnNhbCBzZWFyY2ggcmVxdWVzdCBmYWlsZWQnLCAnQXV0b0NvbXBsZXRlJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlc3VsdCAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHQge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXN1bHRzRGF0YSBleHBlY3RlZCBmb3JtYXQ6IHsgZGF0YTogeyAuLi4gfSwgaGlnaGxpZ2h0ZWRGaWVsZHM6IHsgLi4uIH19XG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzdWx0c0RhdGEpIHtcbiAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0c0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIFRPRE8gdXNlIHJlc3VsdERhdGEuaGlnaGxpZ2h0ZWRGaWVsZHMgdG9cbiAgICAgIC8vIHRyYW5zZm9ybSByZXN1bHREYXRhLmRhdGEgaW50byBodG1sLWZyaWVuZGx5IHN0cmluZ3MgdGhhdCBoaWdobGlnaHQgdmFsdWVzLlxuXG4gICAgICAvLyBDaGVjayBmb3IgbmV3IGRhdGEgZm9ybWF0LCBvdGhlcndpc2UgZmFsbGJhY2sgdG8gbGVnYWN5XG4gICAgICByZXN1bHRzLnB1c2gobmV3IFJlc3VsdChyZXN1bHRzRGF0YVtpXS5kYXRhIHx8IHJlc3VsdHNEYXRhW2ldKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlY3Rpb24gKi9cblxuaW1wb3J0IFJlc3VsdCBmcm9tICcuL3Jlc3VsdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3RvciAoZGF0YSwgdXJsKSB7XG4gICAgdGhpcy52ZXJ0aWNhbENvbmZpZ0lkID0gZGF0YS52ZXJ0aWNhbENvbmZpZ0lkIHx8IG51bGw7XG4gICAgdGhpcy5yZXN1bHRzQ291bnQgPSBkYXRhLnJlc3VsdHNDb3VudCB8fCAwO1xuICAgIHRoaXMuZW5jb2RlZFN0YXRlID0gZGF0YS5lbmNvZGVkU3RhdGUgfHwgJyc7XG4gICAgdGhpcy5hcHBsaWVkUXVlcnlGaWx0ZXJzID0gQXBwbGllZFF1ZXJ5RmlsdGVyLmZyb20oZGF0YS5hcHBsaWVkUXVlcnlGaWx0ZXJzKTtcbiAgICB0aGlzLmZhY2V0cyA9IGRhdGEuZmFjZXRzIHx8IG51bGw7XG4gICAgdGhpcy5yZXN1bHRzID0gUmVzdWx0LmZyb20oZGF0YS5yZXN1bHRzKTtcbiAgICB0aGlzLm1hcCA9IFNlY3Rpb24ucGFyc2VNYXAoZGF0YS5yZXN1bHRzKTtcbiAgICB0aGlzLnZlcnRpY2FsVVJMID0gdXJsIHx8IG51bGw7XG4gIH1cblxuICBzdGF0aWMgcGFyc2VNYXAgKHJlc3VsdHMpIHtcbiAgICBsZXQgbWFwTWFya2VycyA9IFtdO1xuXG4gICAgbGV0IGNlbnRlckNvb3JkaW5hdGVzID0ge307XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc3VsdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIFJlbW92ZSBsZWdhY3kgZmFsbGJhY2sgZnJvbSBhbGwgZGF0YSBmb3JtYXRcbiAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzW2pdLmRhdGEgfHwgcmVzdWx0c1tqXTtcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZSkge1xuICAgICAgICBpZiAoIWNlbnRlckNvb3JkaW5hdGVzLmxhdGl0dWRlKSB7XG4gICAgICAgICAgY2VudGVyQ29vcmRpbmF0ZXMgPSB7XG4gICAgICAgICAgICBsYXRpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sb25naXR1ZGVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIG1hcE1hcmtlcnMucHVzaCh7XG4gICAgICAgICAgaXRlbTogcmVzdWx0LFxuICAgICAgICAgIGxhYmVsOiBtYXBNYXJrZXJzLmxlbmd0aCArIDEsXG4gICAgICAgICAgbGF0aXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubGF0aXR1ZGUsXG4gICAgICAgICAgbG9uZ2l0dWRlOiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlLmxvbmdpdHVkZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgJ21hcENlbnRlcic6IGNlbnRlckNvb3JkaW5hdGVzLFxuICAgICAgJ21hcE1hcmtlcnMnOiBtYXBNYXJrZXJzXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChtb2R1bGVzLCB1cmxzKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gW107XG4gICAgaWYgKCFtb2R1bGVzKSB7XG4gICAgICByZXR1cm4gc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmV3IFNlY3Rpb24obW9kdWxlcyk7XG4gICAgfVxuXG4gICAgLy8gT3VyIHNlY3Rpb25zIHNob3VsZCBjb250YWluIGEgcHJvcGVydHkgb2YgbWFwTWFya2VyIG9iamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNlY3Rpb25zLnB1c2goXG4gICAgICAgIG5ldyBTZWN0aW9uKFxuICAgICAgICAgIG1vZHVsZXNbaV0sXG4gICAgICAgICAgdXJsc1ttb2R1bGVzW2ldLnZlcnRpY2FsQ29uZmlnSWRdXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlY3Rpb25zO1xuICB9XG59XG5cbmNsYXNzIEFwcGxpZWRRdWVyeUZpbHRlciB7XG4gIC8vIFN1cHBvcnQgbGVnYWN5IG1vZGVsIGFuZCBuZXcgbW9kZWwgdW50aWwgZnVsbHkgbWlncmF0ZWQuXG4gIC8vIFRPRE8oYmlsbHkpIFJlbW92ZSB0aGUgbGVmdCBleHByZXNzaW9uIGR1cmluZyBhc3NpZ25tZW50IHdoZW4gbWlncmF0ZWQuXG4gIGNvbnN0cnVjdG9yIChhcHBsaWVkUXVlcnlGaWx0ZXIpIHtcbiAgICB0aGlzLmtleSA9IGFwcGxpZWRRdWVyeUZpbHRlci5rZXkgfHwgYXBwbGllZFF1ZXJ5RmlsdGVyLmRpc3BsYXlLZXk7XG4gICAgdGhpcy52YWx1ZSA9IGFwcGxpZWRRdWVyeUZpbHRlci52YWx1ZSB8fCBhcHBsaWVkUXVlcnlGaWx0ZXIuZGlzcGxheVZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKGFwcGxpZWRRdWVyeUZpbHRlcnMpIHtcbiAgICBsZXQgZmlsdGVycyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwbGllZFF1ZXJ5RmlsdGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgZmlsdGVycy5wdXNoKG5ldyBBcHBsaWVkUXVlcnlGaWx0ZXIoYXBwbGllZFF1ZXJ5RmlsdGVyc1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVycztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgVW5pdmVyc2FsUmVzdWx0cyAqL1xuXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL3NlY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbml2ZXJzYWxSZXN1bHRzIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICB0aGlzLnF1ZXJ5SWQgPSBkYXRhLnF1ZXJ5SWQgfHwgbnVsbDtcbiAgICB0aGlzLnNlY3Rpb25zID0gZGF0YS5zZWN0aW9ucyB8fCBbXTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSwgdXJscykge1xuICAgIHJldHVybiBuZXcgVW5pdmVyc2FsUmVzdWx0cyh7XG4gICAgICBxdWVyeUlkOiByZXNwb25zZS5xdWVyeUlkLFxuICAgICAgc2VjdGlvbnM6IFNlY3Rpb24uZnJvbShyZXNwb25zZS5tb2R1bGVzLCB1cmxzKVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEaXJlY3RBbnN3ZXIgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0QW5zd2VyIHtcbiAgY29uc3RydWN0b3IgKGRpcmVjdEFuc3dlciA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkaXJlY3RBbnN3ZXIpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE5hdmlnYXRpb24gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiB7XG4gIGNvbnN0cnVjdG9yICh0YWJPcmRlcikge1xuICAgIHRoaXMudGFiT3JkZXIgPSB0YWJPcmRlciB8fCBbXTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKG1vZHVsZXMpIHtcbiAgICBsZXQgbmF2ID0gW107XG4gICAgaWYgKCFtb2R1bGVzIHx8ICFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmF2O1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5hdi5wdXNoKG1vZHVsZXNbaV0udmVydGljYWxDb25maWdJZCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgTmF2aWdhdGlvbihuYXYpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBWZXJ0aWNhbFJlc3VsdHMgKi9cblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9zZWN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGljYWxSZXN1bHRzIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSkge1xuICAgIHJldHVybiBuZXcgVmVydGljYWxSZXN1bHRzKFNlY3Rpb24uZnJvbShyZXNwb25zZSkpO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbi8qKlxuICogU3RvcmFnZUtleXMgaXMgYW4gRU5VTSBhcmUgY29uc2lkZXJlZCB0aGUgcm9vdCBjb250ZXh0XG4gKiBmb3IgaG93IGRhdGEgaXMgc3RvcmVkIGFuZCBzY29wZWQgaW4gdGhlIHN0b3JhZ2UuXG4gKlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBOQVZJR0FUSU9OOiAnbmF2aWdhdGlvbicsXG4gIFVOSVZFUlNBTF9SRVNVTFRTOiAndW5pdmVyc2FsLXJlc3VsdHMnLFxuICBWRVJUSUNBTF9SRVNVTFRTOiAndmVydGljYWwtcmVzdWx0cycsXG4gIEFVVE9DT01QTEVURTogJ2F1dG9jb21wbGV0ZScsXG4gIERJUkVDVF9BTlNXRVI6ICdkaXJlY3QtYW5zd2VyJyxcbiAgRklMVEVSOiAnZmlsdGVyJyxcbiAgUVVFUlk6ICdxdWVyeSdcbn07XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hEYXRhVHJhbnNmb3JtZXIgKi9cblxuaW1wb3J0IFVuaXZlcnNhbFJlc3VsdHMgZnJvbSAnLi4vbW9kZWxzL3VuaXZlcnNhbHJlc3VsdHMnO1xuaW1wb3J0IERpcmVjdEFuc3dlciBmcm9tICcuLi9tb2RlbHMvZGlyZWN0YW5zd2VyJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL21vZGVscy9uYXZpZ2F0aW9uJztcbmltcG9ydCBWZXJ0aWNhbFJlc3VsdHMgZnJvbSAnLi4vbW9kZWxzL3ZlcnRpY2FscmVzdWx0cyc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbi8qKlxuICogQSBEYXRhIFRyYW5zZm9ybWVyIHRoYXQgdGFrZXMgdGhlIHJlc3BvbnNlIG9iamVjdCBmcm9tIGEgU2VhcmNoIHJlcXVlc3RcbiAqIEFuZCB0cmFuc2Zvcm1zIGluIHRvIGEgZnJvbnQtZW5kIG9yaWVudGVkIGRhdGEgc3RydWN0dXJlIHRoYXQgb3VyXG4gKiBjb21wb25lbnQgbGlicmFyeSBhbmQgY29yZSBzdG9yYWdlIHVuZGVyc3RhbmQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaERhdGFUcmFuc2Zvcm1lciB7XG4gIHN0YXRpYyB0cmFuc2Zvcm0gKGRhdGEsIHVybHMgPSB7fSkge1xuICAgIGxldCByZXNwb25zZSA9IGRhdGEucmVzcG9uc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXJ5SWQ6IHJlc3BvbnNlLnF1ZXJ5SWQsXG4gICAgICBbU3RvcmFnZUtleXMuTkFWSUdBVElPTl06IE5hdmlnYXRpb24uZnJvbShyZXNwb25zZS5tb2R1bGVzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSXTogbmV3IERpcmVjdEFuc3dlcihyZXNwb25zZS5kaXJlY3RBbnN3ZXIpLFxuICAgICAgW1N0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTXTogVW5pdmVyc2FsUmVzdWx0cy5mcm9tKHJlc3BvbnNlLCB1cmxzKVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgdHJhbnNmb3JtVmVydGljYWwgKGRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlcnlJZDogZGF0YS5yZXNwb25zZS5xdWVyeUlkLFxuICAgICAgW1N0b3JhZ2VLZXlzLk5BVklHQVRJT05dOiBuZXcgTmF2aWdhdGlvbigpLCAvLyBWZXJpdGNhbCBkb2Vzbid0IHJlc3BvbmQgd2l0aCBvcmRlcmluZywgc28gdXNlIGVtcHR5IG5hdi5cbiAgICAgIFtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXTogVmVydGljYWxSZXN1bHRzLmZyb20oZGF0YS5yZXNwb25zZSlcbiAgICB9O1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBFdmVudEVtaXR0ZXIgKi9cblxuLyoqXG4gKiBFdmVudEVtaXR0ZXIgaXMgYSBiYXNlIGNsYXNzIGZvciBhbnkgb2JqZWN0IHRoYXQgd2FudHMgdG8gZXhwb3NlXG4gKiBhIHB1Yi9zdWIgaW50ZXJmYWNlLCBmb3IgZW1pdHRpbmcgbWVzc2FnZXMgYW5kIHByb3ZpZGluZyBsaXN0ZW5lcnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgc3Vic2NyaWJlcnMgb2YgbWVzc2FnZXNcbiAgICAgKiBAdHlwZSB7b2JqZWN0W119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbiBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3Igc3Vic2NyaWJpbmcgZXZlbnRzIHRoYXQgYXJlIGVtaXR0ZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gbGlzdGVuIHRvXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIFRoZSBjYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUge2V2dH0gaXMgZW1pdHRlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uY2UgT3B0aW9uYWwgdmFsdWUgd2hpY2ggd2lsbCBvbmx5IGhhbmRsZSB0aGUgbWVzc2FnZSBvbmNlXG4gICAqL1xuICBvbiAoZXZ0LCBjYiwgb25jZSkge1xuICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgaGFuZGxlciBzaG91bGQgYmUgb2YgdHlwZSB7ZnVuY3Rpb259Jyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xpc3RlbmVyc1tldnRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVyc1tldnRdID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5fbGlzdGVuZXJzW2V2dF0ucHVzaCh7XG4gICAgICBldmVudDogZXZ0LFxuICAgICAgY2I6IGNiLFxuICAgICAgb25jZTogb25jZSB8fCBmYWxzZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogb25jZSBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3Igc3Vic2NyaWJpbmcgZXZlbnRzIHRoYXQgYXJlIGVtaXR0ZWQuXG4gICAqIFRoZSBoYW5kbGVyIHdpbGwgb25seSBiZSB0cmlnZ2VyZWQgb25jZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byBsaXN0ZW4gdG9cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgVGhlIGNhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSB7ZXZ0fSBpcyBlbWl0dGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSBPcHRpb25hbCB2YWx1ZSB3aGljaCB3aWxsIG9ubHkgaGFuZGxlIHRoZSBtZXNzYWdlIG9uY2VcbiAgICovXG4gIG9uY2UgKGV2dCwgY2IpIHtcbiAgICByZXR1cm4gdGhpcy5vbihldnQsIGNiLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvZmYgaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIHVuc3Vic2NyaWJpbmcgZnJvbSBhbiBldmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIHVuc3Vic2NyaWJlIGZyb21cbiAgICovXG4gIG9mZiAoZXZ0KSB7XG4gICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyc1tldnRdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGVtaXQgaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIGJyb2FkY2FzdGluZyBtZXNzYWdlcy9ldmVudHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byBwdWJsaXNoIGZyb21cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgdGhlIGRhdGEgdG8gc2VuZCBhbG9uZyB0byB0aGUgc3Vic2NyaWJlcnNcbiAgICovXG4gIGVtaXQgKGV2dCwgZGF0YSkge1xuICAgIGxldCBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNbZXZ0XTtcbiAgICBpZiAobGlzdGVuZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJbnZva2UgZWFjaCBvZiBhbGwgdGhlIGxpc3RlbmVyIGhhbmRsZXJzIGFuZCByZW1vdmUgdGhlIG9uZXMgdGhhdCBzaG91bGQgZmlyZSBvbmx5IG9uY2UuXG4gICAgbGV0IGtlZXAgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdGVuZXJzW2ldLmNiKGRhdGEpO1xuICAgICAgaWYgKGxpc3RlbmVyc1tpXS5vbmNlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBJbnN0ZWFkIG9mIGhhdmluZyBhICdkaXJ0eScgYXJyYXkgd2l0aCBkZWxldGVkIG9yICd1bmRlZmluZWQnIGVudHJpZXMsXG4gICAgICAvLyB3ZSBqdXN0IGNyZWF0ZSBhIGJyYW5kIG5ldyBhcnJheSB3aXRob3V0IHRoZSBsaXN0ZW5lcnMgdGhhdCB3ZXJlIHJlbW92ZWRcbiAgICAgIGtlZXAucHVzaChsaXN0ZW5lcnNbaV0pO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBvdXIgb2xkIGxpc3Qgb2YgbGlzdGVuZXJzIHRvIHRoZSBuZXdseSBjcmVhdGVkIGFycmF5XG4gICAgdGhpcy5fbGlzdGVuZXJzW2V2dF0gPSBrZWVwO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNb2R1bGVEYXRhICovXG5cbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlcic7XG5cbi8qKlxuICogTW9kdWxlRGF0YSBpcyB1c2VkIGFzIGEgZ2VuZXJpYyBtb2RlbCBmb3IgU3RvcmFnZS5cbiAqIFR5cGljYWxseSBhbiBpbnN0YW5jZSBvZiBNb2R1bGVEYXRhIHBvd2VycyBhIHNpbmdsZSBjb21wb25lbnQuXG5cbiAqIEEgZGF0YSBtb2RlbCB0aGF0IGV4cG9zZXMgYW4gZXZlbnQgZW1pdHRlciBpbnRlcmZhY2UuXG4gKiBAZXh0ZW5kcyBFdmVudEVtaXR0ZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kdWxlRGF0YSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChpZCwgZGF0YSA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgdGhpcy5faGlzdG9yeSA9IFtdO1xuICAgIHRoaXMuX2RhdGEgPSB7fTtcbiAgICB0aGlzLnNldChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXBsYWNlcyB0aGUgY3VycmVudGx5IGhlbGQgZGF0YSB3aXRoIHRoZSBnaXZlbiBkYXRhXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSB0aGUgZGF0YSB0byByZXBsYWNlIHRoZSBjdXJyZW50IGRhdGFcbiAgICovXG4gIHNldCAoZGF0YSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBkYXRhIHx8IHt9O1xuXG4gICAgdGhpcy5jYXB0dXJlUHJldmlvdXMoKTtcblxuICAgIGlmIChPYmplY3Qua2V5cyhuZXdEYXRhKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKHRoaXMuX2RhdGEpLmxlbmd0aCkge1xuICAgICAgdGhpcy5fZGF0YSA9IG5ld0RhdGE7XG4gICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuX2RhdGEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGZvciBzaGFsbG93IGVxdWFsaXR5XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMobmV3RGF0YSkpIHtcbiAgICAgIGlmICh0aGlzLl9kYXRhW2tleV0gIT09IG5ld0RhdGFba2V5XSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gbmV3RGF0YTtcbiAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLl9kYXRhKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNhcHR1cmVQcmV2aW91cyAoKSB7XG4gICAgaWYgKHRoaXMuX2hpc3RvcnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5faGlzdG9yeSA9IFtdO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9oaXN0b3J5Lmxlbmd0aCArIDEgPiA1KSB7XG4gICAgICB0aGlzLl9oaXN0b3J5LnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgLy8gSWYgZGF0YSBpcyBldmVyIHVuZGVmaW5lZCwgd2UgZGVmYXVsdCB0byBlbXB0eSBvYmplY3RcbiAgICB0aGlzLl9oaXN0b3J5LnB1c2goSlNPTi5zdHJpbmdpZnkodGhpcy5fZGF0YSB8fCB7fSkpO1xuICB9XG5cbiAgdW5kbyAoKSB7XG4gICAgbGV0IHByZXZpb3VzID0ge307XG4gICAgaWYgKHRoaXMuX3ByZXZpb3VzLmxlbmd0aCA+IDApIHtcbiAgICAgIHByZXZpb3VzID0gSlNPTi5wYXJzZSh0aGlzLl9wcmV2aW91cy5wb3AoKSk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0YS5zZXQocHJldmlvdXMpO1xuICB9XG5cbiAgcmF3ICgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU3RvcmFnZSAqL1xuXG5pbXBvcnQgTW9kdWxlRGF0YSBmcm9tICcuL21vZHVsZWRhdGEnO1xuaW1wb3J0IHsgQW5zd2Vyc1N0b3JhZ2VFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvcnMnO1xuXG4vKipcbiAqIFN0b3JhZ2UgaXMgYSBjb250YWluZXIgYXJvdW5kIGFwcGxpY2F0aW9uIHN0YXRlLlxuICogSXQgZXhwb3NlcyBhbiBpbnRlcmZhY2UgZm9yIENSVUQgb3BlcmF0aW9ucyBhcyB3ZWxsIGFzIGxpc3RlbmluZ1xuICogZm9yIHN0YXRlZnVsIGNoYW5nZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lciA9IHt9O1xuICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGF0YSBpbiBzdG9yYWdlIHdpdGggdGhlIGdpdmVuIGtleSB0byB0aGUgcHJvdmlkZWQgZGF0YSxcbiAgICogY29tcGxldGVseSBvdmVyd3JpdGluZyBhbnkgZXhpc3RpbmcgZGF0YS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSB0aGUgc3RvcmFnZSBrZXkgdG8gc2V0XG4gICAqIEBwYXJhbSB7Kn0gZGF0YSB0aGUgZGF0YSB0byBzZXRcbiAgICovXG4gIHNldCAoa2V5LCBkYXRhKSB7XG4gICAgdGhpcy5faW5pdERhdGFDb250YWluZXIoa2V5LCBkYXRhKTtcbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2tleV0uc2V0KGRhdGEpO1xuICB9XG5cbiAgX2luaXREYXRhQ29udGFpbmVyIChrZXksIGRhdGEpIHtcbiAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQgfHwga2V5ID09PSBudWxsIHx8IHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc1N0b3JhZ2VFcnJvcignSW52YWxpZCBzdG9yYWdlIGtleSBwcm92aWRlZCcsIGtleSwgZGF0YSk7XG4gICAgfVxuICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQgfHwgZGF0YSA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNTdG9yYWdlRXJyb3IoJ05vIGRhdGEgcHJvdmlkZWQnLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltrZXldID0gbmV3IE1vZHVsZURhdGEoa2V5KTtcbiAgICAgIHRoaXMuX2FwcGx5RnV0dXJlTGlzdGVuZXJzKGtleSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3RhdGUgKG1vZHVsZUlkKSB7XG4gICAgaWYgKHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0ucmF3KCk7XG4gICAgfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGdldEFsbCAoa2V5KSB7XG4gICAgY29uc3QgZGF0YSA9IFtdO1xuICAgIGZvciAoY29uc3QgZGF0YUtleSBvZiBPYmplY3Qua2V5cyh0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyKSkge1xuICAgICAgaWYgKGRhdGFLZXkuc3RhcnRzV2l0aChrZXkpICYmIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbZGF0YUtleV0ucmF3KCkgIT09IG51bGwpIHtcbiAgICAgICAgZGF0YS5wdXNoKHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbZGF0YUtleV0ucmF3KCkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIG9uIChldnQsIG1vZHVsZUlkLCBjYikge1xuICAgIGxldCBtb2R1bGVEYXRhID0gdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF07XG4gICAgaWYgKG1vZHVsZURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdID0gW107XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0ucHVzaCh7XG4gICAgICAgIGV2ZW50OiBldnQsXG4gICAgICAgIGNiOiBjYlxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5vbihldnQsIGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9mZiAoZXZ0LCBtb2R1bGVJZCwgY2IpIHtcbiAgICBsZXQgbW9kdWxlRGF0YSA9IHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdO1xuICAgIGlmIChtb2R1bGVEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXS5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0ub2ZmKGV2dCwgY2IpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2FwcGx5RnV0dXJlTGlzdGVuZXJzIChtb2R1bGVJZCkge1xuICAgIGxldCBmdXR1cmVzID0gdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXTtcbiAgICBpZiAoIWZ1dHVyZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZ1dHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBmdXR1cmUgPSBmdXR1cmVzW2ldO1xuICAgICAgdGhpcy5vbihmdXR1cmUuZXZlbnQsIG1vZHVsZUlkLCBmdXR1cmUuY2IpO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQ29yZSAqL1xuXG5pbXBvcnQgU2VhcmNoQXBpIGZyb20gJy4vc2VhcmNoL3NlYXJjaGFwaSc7XG5pbXBvcnQgQXV0b0NvbXBsZXRlQXBpIGZyb20gJy4vc2VhcmNoL2F1dG9jb21wbGV0ZWFwaSc7XG5cbmltcG9ydCBTZWFyY2hEYXRhVHJhbnNmb3JtZXIgZnJvbSAnLi9zZWFyY2gvc2VhcmNoZGF0YXRyYW5zZm9ybWVyJztcblxuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlL3N0b3JhZ2UnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4vc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbi8qKlxuICogQ29yZSBpcyB0aGUgbWFpbiBhcHBsaWNhdGlvbiBjb250YWluZXIgZm9yIGFsbCBvZiB0aGUgbmV0d29yayBhbmQgc3RvcmFnZVxuICogcmVsYXRlZCBiZWhhdmlvcnMgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JlIHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIGlmICh0eXBlb2Ygb3B0cy5hcGlLZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYGFwaUtleWAuIFR5cGUgbXVzdCBiZSB7c3RyaW5nfScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0cy5hbnN3ZXJzS2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGBhbnN3ZXJzS2V5YC4gVHlwZSBtdXN0IGJlIHtzdHJpbmd9Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNsaWVudCBBUEkgS2V5IHVzZWQgZm9yIGFsbCByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjbGllbnQgQW5zd2VycyBLZXkgdXNlZCBmb3IgYWxsIHJlcXVlc3RzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Fuc3dlcnNLZXkgPSBvcHRzLmFuc3dlcnNLZXk7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IGxvY2FsZSB1c2VkIGZvciBhbGwgcmVxdWVzdHMuIElmIG5vdCBzcGVjaWZpZWQsIGRlZmF1bHRzIHRvIFwiZW5cIiAoZm9yXG4gICAgICogYmFja3dhcmRzIGNvbXBhdGliaWxpdHkpLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9sb2NhbGUgPSBvcHRzLmxvY2FsZSB8fCAnZW4nO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNvcmUgZGF0YSBzdG9yYWdlIHRoYXQgcG93ZXJzIHRoZSBVSVxuICAgICAqIEB0eXBlIHtTdG9yYWdlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5zdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIGNvbnRhaW5pbmcgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIFJFU1RmdWwgc2VhcmNoIEFQSVxuICAgICAqIEZvciBib3RoIHZlcnRpY2FsIGFuZCB1bml2ZXJzYWwgc2VhcmNoXG4gICAgICogQHR5cGUge1NlYXJjaH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaGVyID0gbmV3IFNlYXJjaEFwaSh7XG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIGFuc3dlcnNLZXk6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3Rpb24gY29udGFpbmluZyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgUkVTVGZ1bCBhdXRvY29tcGxldGUgQVBJXG4gICAgICogRm9yIGZpbHRlciBzZWFyY2gsIHZlcnRpY2FsIGF1dG9jb21wbGV0ZSwgYW5kIHVuaXZlcnNhbCBhdXRvY29tcGxldGVcbiAgICAgKiBAdHlwZSB7QXV0b2NvbXBsZXRlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXV0b0NvbXBsZXRlID0gbmV3IEF1dG9Db21wbGV0ZUFwaSh7XG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIGFuc3dlcnNLZXk6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZVxuICAgIH0pO1xuICB9XG5cbiAgdmVydGljYWxTZWFyY2ggKHF1ZXJ5U3RyaW5nLCB2ZXJ0aWNhbEtleSwgZmlsdGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaGVyXG4gICAgICAudmVydGljYWxRdWVyeShxdWVyeVN0cmluZywgdmVydGljYWxLZXksIGZpbHRlcilcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IFNlYXJjaERhdGFUcmFuc2Zvcm1lci50cmFuc2Zvcm1WZXJ0aWNhbChyZXNwb25zZSkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChTdG9yYWdlS2V5cy5OQVZJR0FUSU9OLCBkYXRhW1N0b3JhZ2VLZXlzLk5BVklHQVRJT05dKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTLCBkYXRhW1N0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFNdKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoIChxdWVyeVN0cmluZywgdXJscykge1xuICAgIHJldHVybiB0aGlzLl9zZWFyY2hlclxuICAgICAgLnF1ZXJ5KHF1ZXJ5U3RyaW5nKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gU2VhcmNoRGF0YVRyYW5zZm9ybWVyLnRyYW5zZm9ybShyZXNwb25zZSwgdXJscykpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChTdG9yYWdlS2V5cy5OQVZJR0FUSU9OLCBkYXRhW1N0b3JhZ2VLZXlzLk5BVklHQVRJT05dKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSLCBkYXRhW1N0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVJdKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUUywgZGF0YVtTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUU10sIHVybHMpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYW4gaW5wdXQsIHF1ZXJ5IGZvciBhIGxpc3Qgb2Ygc2ltaWxhciByZXN1bHRzIGFuZCBzZXQgaW50byBzdG9yYWdlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCAgICAgdGhlIHN0cmluZyB0byBhdXRvY29tcGxldGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqL1xuICBhdXRvQ29tcGxldGVVbml2ZXJzYWwgKGlucHV0LCBuYW1lc3BhY2UpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0NvbXBsZXRlXG4gICAgICAucXVlcnlVbml2ZXJzYWwoaW5wdXQpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5BVVRPQ09NUExFVEV9LiR7bmFtZXNwYWNlfWAsIGRhdGEpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYW4gaW5wdXQsIHF1ZXJ5IGZvciBhIGxpc3Qgb2Ygc2ltaWxhciByZXN1bHRzIGluIHRoZSBwcm92aWRlZCB2ZXJ0aWNhbFxuICAgKiBhbmQgc2V0IGludG8gc3RvcmFnZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgICAgICAgdGhlIHN0cmluZyB0byBhdXRvY29tcGxldGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbEtleSB0aGUgdmVydGljYWwga2V5IGZvciB0aGUgZXhwZXJpZW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gYmFyS2V5ICAgICAgdGhlIGJhciBrZXkgZm9yIHRoZSBleHBlcmllbmNlXG4gICAqL1xuICBhdXRvQ29tcGxldGVWZXJ0aWNhbCAoaW5wdXQsIG5hbWVzcGFjZSwgdmVydGljYWxLZXksIGJhcktleSkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvQ29tcGxldGVcbiAgICAgIC5xdWVyeVZlcnRpY2FsKGlucHV0LCB2ZXJ0aWNhbEtleSwgYmFyS2V5KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke25hbWVzcGFjZX1gLCBkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGFuIGlucHV0LCBwcm92aWRlIGEgbGlzdCBvZiBzdWl0YWJsZSBmaWx0ZXJzIGZvciBhdXRvY29tcGxldGlvblxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgICAgICAgICB0aGUgc3RyaW5nIHRvIHNlYXJjaCBmb3IgZmlsdGVycyB3aXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgICAgIHRoZSBuYW1lc3BhY2UgdG8gdXNlIGZvciB0aGUgc3RvcmFnZSBrZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnRpY2FsS2V5ICAgdGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIGV4cGVyaWVuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJhcktleSAgICAgICAgdGhlIGJhciBrZXkgZm9yIHRoZSBleHBlcmllbmNlXG4gICAqL1xuICBhdXRvQ29tcGxldGVGaWx0ZXIgKGlucHV0LCBuYW1lc3BhY2UsIHZlcnRpY2FsS2V5LCBiYXJLZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0NvbXBsZXRlXG4gICAgICAucXVlcnlGaWx0ZXIoaW5wdXQsIHZlcnRpY2FsS2V5LCBiYXJLZXkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5BVVRPQ09NUExFVEV9LiR7bmFtZXNwYWNlfWAsIGRhdGEpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmVzIHRoZSBnaXZlbiBxdWVyeSBpbnRvIHN0b3JhZ2UsIHRvIGJlIHVzZWQgZm9yIHRoZSBuZXh0IHNlYXJjaFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgdGhlIHF1ZXJ5IHRvIHN0b3JlXG4gICAqL1xuICBzZXRRdWVyeSAocXVlcnkpIHtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZLCBxdWVyeSk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmVzIHRoZSBnaXZlbiBmaWx0ZXIgaW50byBzdG9yYWdlLCB0byBiZSB1c2VkIGZvciB0aGUgbmV4dCBzZWFyY2hcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqIEBwYXJhbSB7RmlsdGVyfSBmaWx0ZXIgICAgdGhlIGZpbHRlciB0byBzZXRcbiAgICovXG4gIHNldEZpbHRlciAobmFtZXNwYWNlLCBmaWx0ZXIpIHtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHtuYW1lc3BhY2V9YCwgZmlsdGVyKTtcbiAgfVxuXG4gIG9uIChldnQsIG1vZHVsZUlkLCBjYikge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2Uub24oZXZ0LCBtb2R1bGVJZCwgY2IpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBDb21wb25lbnRNYW5hZ2VyICovXG5cbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogQ29tcG9uZW50TWFuYWdlciBpcyBhIFNpbmdsZXRvbmUgdGhhdCBjb250YWlucyBib3RoIGFuIGludGVybmFsIHJlZ2lzdHJ5IG9mXG4gKiBlbGlnaWJsZSBjb21wb25lbnRzIHRvIGJlIGNyZWF0ZWQsIGFzIHdlbGwgYXMga2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnRcbiAqIGluc3RhbnRpYXRlZCBhbmQgYWN0aXZlIGNvbXBvbmVudHMuXG4gKlxuICogQUxMIGNvbXBvbmVudHMgc2hvdWxkIGJlIGNvbnN0cnVjdGVkIHVzaW5nIHRoZSB7Q29tcG9uZW50TWFuYWdlcn0gdmlhIGl0cyBgY3JlYXRlYCBtZXRob2QuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudE1hbmFnZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgaWYgKCFDb21wb25lbnRNYW5hZ2VyLnNldEluc3RhbmNlKHRoaXMpKSB7XG4gICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnQgcmVnaXN0cnkgaXMgYW4gaW50ZXJuYWwgbWFwLCB0aGF0IGNvbnRhaW5zXG4gICAgICogYWxsIGF2YWlsYWJsZSBjb21wb25lbnQgQ0xBU1NFUyB1c2VkIGZvciBjcmVhdGlvbiBvciBvdmVycmlkZS5cbiAgICAgKiBFYWNoIGNvbXBvbmVudCBjbGFzcyBoYXMgYSB1bmlxdWUgVFlQRSwgd2hpY2ggaXMgdXNlZCBhcyB0aGUga2V5IGZvciB0aGUgcmVnaXN0cnlcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5ID0ge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYWN0aXZlIGNvbXBvbmVudHMgaXMgYW4gaW50ZXJuYWwgY29udGFpbmVyIHRvIGtlZXAgdHJhY2tcbiAgICAgKiBvZiBhbGwgb2YgdGhlIGNvbXBvbmVudHMgdGhhdCBoYXZlIGJlZW4gY29uc3RydWN0ZWRcbiAgICAgKi9cbiAgICB0aGlzLl9hY3RpdmVDb21wb25lbnRzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY29yZSBsaWJyYXJ5IGRlcGVuZGVuY3lcbiAgICAgKlxuICAgICAqIFRoZSBDb3JlIGNvbnRhaW5zIGJvdGggdGhlIHN0b3JhZ2UgQU5EIHNlcnZpY2VzIHRoYXQgYXJlIG5lZWRlZCBmb3IgcGVyZm9ybWluZyBvcGVyYXRpb25zXG4gICAgICogbGlrZSBzZWFyY2ggYW5kIGF1dG8gY29tcGxldGUuXG4gICAgICpcbiAgICAgKiBUaGUgc3RvcmFnZSBpcyB0aGUgc291cmNlIG9mIHRydXRoIGZvciB0aGUgc3RhdGUgb2YgQUxMIGNvbXBvbmVudHMuXG4gICAgICogV2hlbmV2ZXIgdGhlIHN0b3JhZ2UgaXMgdXBkYXRlZCwgdGhlIHN0YXRlIGdldHMgcHVzaGVkIGRvd24gdG8gdGhlIG5lY2Vzc2FyeSBjb21wb25lbnRzLlxuICAgICAqIEB0eXBlIHtDb3JlfVxuICAgICAqL1xuICAgIHRoaXMuX2NvcmUgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHByaW1hcnkgcmVuZGVyZXIgdG8gdXNlIGZvciBhbGwgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtIYW5kbGViYXJzUmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGFuYWx5dGljcyByZXBvcnRlciBkZXBlbmRlbmN5XG4gICAgICovXG4gICAgdGhpcy5fYW5hbHl0aWNzUmVwb3J0ZXIgPSBudWxsO1xuICB9XG5cbiAgc3RhdGljIHNldEluc3RhbmNlIChpbnN0YW5jZSkge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cblxuICBzZXRSZW5kZXJlciAocmVuZGVyZXIpIHtcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0Q29yZSAoY29yZSkge1xuICAgIHRoaXMuX2NvcmUgPSBjb3JlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0QW5hbHl0aWNzUmVwb3J0ZXIgKHJlcG9ydGVyKSB7XG4gICAgdGhpcy5fYW5hbHl0aWNzUmVwb3J0ZXIgPSByZXBvcnRlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZWdpc3RlcnMgYSBjb21wb25lbnQgdG8gYmUgZWxpZ2libGUgZm9yIGNyZWF0aW9uIGFuZCBvdmVycmlkZS5cbiAgICogQHBhcmFtIHtDb21wb25lbnR9IFRoZSBDb21wb25lbnQgQ2xhc3MgdG8gcmVnaXN0ZXJcbiAgICovXG4gIHJlZ2lzdGVyIChjb21wb25lbnRDbGF6eikge1xuICAgIHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5W2NvbXBvbmVudENsYXp6LnR5cGVdID0gY29tcG9uZW50Q2xheno7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIGlzIHRoZSBlbnRyeSBwb2ludCBmb3IgY29uc3RydWN0aW5nIGFueSBhbmQgYWxsIGNvbXBvbmVudHMuXG4gICAqIEl0IHdpbGwgaW5zdGFudGlhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudCwgYW5kIGJvdGggYXBwbHlcbiAgICogaW5pdGlhbCBzdGF0ZSBmcm9tIHRoZSBzdG9yYWdlIGFuZCBiaW5kIGl0IHRvIHRoZSBzdG9yYWdlIGZvciB1cGRhdGVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50VHlwZSBUaGUgY29tcG9uZW50IHR5cGUgdG8gY3JlYXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIFRoZSBvcHRpb25zIHRvIHBpcGUgdG8gdGhlIGNvbnN0cnVjdGlvbiBvZiB0aGUgY29tcG9uZW50XG4gICAqL1xuICBjcmVhdGUgKGNvbXBvbmVudFR5cGUsIG9wdHMpIHtcbiAgICAvLyBFdmVyeSBjb21wb25lbnQgbmVlZHMgbG9jYWwgYWNjZXNzIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlclxuICAgIC8vIGJlY2F1c2Ugc29tZXRpbWVzIGNvbXBvbmVudHMgaGF2ZSBzdWJjb21wb25lbnRzIHRoYXQgbmVlZCB0byBiZVxuICAgIC8vIGNvbnN0cnVjdGVkIGR1cmluZyBjcmVhdGlvblxuICAgIG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvcmU6IHRoaXMuX2NvcmUsXG4gICAgICByZW5kZXJlcjogdGhpcy5fcmVuZGVyZXIsXG4gICAgICBhbmFseXRpY3NSZXBvcnRlcjogdGhpcy5fYW5hbHl0aWNzUmVwb3J0ZXIsXG4gICAgICBjb21wb25lbnRNYW5hZ2VyOiB0aGlzXG4gICAgfSwgb3B0cyk7XG5cbiAgICBsZXQgY29tcG9uZW50Q2xhc3MgPSB0aGlzLl9jb21wb25lbnRSZWdpc3RyeVtjb21wb25lbnRUeXBlXTtcblxuICAgIGlmIChcbiAgICAgICFjb21wb25lbnRDbGFzcy5hcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQoKSAmJlxuICAgICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5zb21lKGMgPT4gYy5uYW1lID09PSBvcHRzLm5hbWUpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICBgQW5vdGhlciBjb21wb25lbnQgd2l0aCBuYW1lICR7b3B0cy5uYW1lfSBhbHJlYWR5IGV4aXN0c2AsXG4gICAgICAgIGNvbXBvbmVudFR5cGUpO1xuICAgIH1cblxuICAgIC8vIEluc3RhbnRpYXRlIG91ciBuZXcgY29tcG9uZW50IGFuZCBrZWVwIHRyYWNrIG9mIGl0XG4gICAgbGV0IGNvbXBvbmVudCA9XG4gICAgICBuZXcgdGhpcy5fY29tcG9uZW50UmVnaXN0cnlbY29tcG9uZW50VHlwZV0ob3B0cylcbiAgICAgICAgLmluaXQob3B0cyk7XG5cbiAgICB0aGlzLl9hY3RpdmVDb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcblxuICAgIC8vIElmIHRoZXJlIGlzIGEgbG9jYWwgc3RvcmFnZSB0byBwb3dlciBzdGF0ZSwgYXBwbHkgdGhlIHN0YXRlXG4gICAgLy8gZnJvbSB0aGUgc3RvcmFnZSB0byB0aGUgY29tcG9uZW50LCBhbmQgdGhlbiBiaW5kIHRoZSBjb21wb25lbnRcbiAgICAvLyBzdGF0ZSB0byB0aGUgc3RvcmFnZSB2aWEgaXRzIHVwZGF0ZXNcbiAgICBpZiAodGhpcy5fY29yZSAmJiB0aGlzLl9jb3JlLnN0b3JhZ2UgIT09IG51bGwpIHtcbiAgICAgIGlmIChjb21wb25lbnQubW9kdWxlSWQgPT09IHVuZGVmaW5lZCB8fCBjb21wb25lbnQubW9kdWxlSWQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY29yZS5zdG9yYWdlXG4gICAgICAgIC5vbigndXBkYXRlJywgY29tcG9uZW50Lm1vZHVsZUlkLCAoZGF0YSkgPT4ge1xuICAgICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgfVxuXG4gIGdldEFjdGl2ZUNvbXBvbmVudCAodHlwZSkge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVDb21wb25lbnRzLmZpbmQoYyA9PiBjLnR5cGUgPT09IHR5cGUpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBSZW5kZXJlciAqL1xuXG4vKipcbiAqIFJlbmRlcmVyIGlzIGFuIGFic3RyYWN0IGNsYXNzIHRoYXQgYWxsIFJlbmRlcmVycyBzaG91bGQgZXh0ZW5kIGFuZCBpbXBsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIge1xuICAvKipcbiAgICogcmVuZGVyIGlzIGEgY29yZSBtZXRob2QgZm9yIGFsbCByZW5kZXJlcnMuXG4gICAqIEFsbCBpbXBsZW1lbnRhdGlvbnMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgY2xhc3NcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqL1xuICByZW5kZXIgKHRlbXBsYXRlLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgcmVnaXN0ZXJIZWxwZXIgKG5hbWUsIGNiKSB7XG5cbiAgfVxuXG4gIGNvbXBpbGUgKHRlbXBsYXRlKSB7XG5cbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgSGFuZGxlYmFyc1JlbmRlcmVyICovXG5cbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuLyoqXG4gKiBIYW5kbGViYXJzUmVuZGVyZXIgaXMgYSB3cmFwcGVyIGFyb3VuZCB0aGUgbmF0aXZhdGUgaGFuZGxlYmFycyByZW5kZXJlci5cbiAqIEBleHRlbmRzIFJlbmRlcmVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbmRsZWJhcnNSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IgKHRlbXBsYXRlcyA9IHt9LCBvcHRzID0ge30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGhhbmRsZWJhcnMgY29tcGlsZXJcbiAgICAgKiBAdHlwZSB7SGFuZGxlYmFyc31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2hhbmRsZWJhcnMgPSB0ZW1wbGF0ZXMuX2hiIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgcHJlLWNvbXBpbGVkIGhhbmRsZWJhcnMgdGVtcGxhdGVzXG4gICAgICogQHR5cGUge0hhbmRsZWJhcnN9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXMgfHwge307XG4gIH1cblxuICBpbml0ICh0ZW1wbGF0ZXMpIHtcbiAgICAvLyBBc3NpZ24gdGhlIGhhbmRsZWJhcnMgY29tcGlsZXIgYW5kIHRlbXBsYXRlcyBiYXNlZCBvblxuICAgIC8vIGluZm9ybWF0aW9uIHByb3ZpZGVkIGZyb20gZXh0ZXJuYWwgZGVwIChpbiBkZWZhdWx0IGNhc2UsIGl0IGNvbWVzIGZyb20gZXh0ZXJuYWwgc2VydmVyIHJlcXVlc3QpXG4gICAgdGhpcy5faGFuZGxlYmFycyA9IHRlbXBsYXRlcy5faGI7XG4gICAgdGhpcy5fdGVtcGxhdGVzID0gdGVtcGxhdGVzO1xuXG4gICAgLy8gVE9ETyhiaWxseSkgT25jZSB3ZSByZS13cml0ZSB0ZW1wbGF0ZXMgdXNpbmcgdGhlIG5ldyBoZWxwZXJzIGxpYnJhcnlcbiAgICAvLyB3ZSBwcm9iYWJseSBkb24ndCBuZWVkIHRoZXNlIGN1c3RvbSBoZWxwZXJzIGFueW1vcmVcbiAgICB0aGlzLl9yZWdpc3RlckN1c3RvbUhlbHBlcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZWdpc3RlckhlbHBlciBpcyBhIHB1YmxpYyBpbnRlcmZhY2UgZm9yIGV4dGVybmFsIGRlcGVuZGVuY2llcyB0b1xuICAgKiByZWdpc3RlciB0aGVpciBvd24gY3VzdG9tIGhlbHBlcnMgdG8gb3VyIGludGVybmFsIEhhbmRsZWJhcnMgQ29tcGlsZXJcbiAgICovXG4gIHJlZ2lzdGVySGVscGVyIChuYW1lLCBjYikge1xuICAgIHRoaXMuX2hhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIobmFtZSwgY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbXBpbGUgYSBoYW5kbGViYXJzIHRlbXBsYXRlIHNvIHRoYXQgaXQgY2FuIGJlIHJlbmRlcmVkLFxuICAgKiB1c2luZyB0aGUge0hhbmRsZWJhcnN9IGNvbXBpbGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZSBUaGUgdGVtcGxhdGUgc3RyaW5nIHRvIGNvbXBpbGVcbiAgICovXG4gIGNvbXBpbGUgKHRlbXBsYXRlKSB7XG4gICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZWJhcnMuY29tcGlsZSh0ZW1wbGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogcmVuZGVyIHdpbGwgcmVuZGVyIGEgdGVtcGxhdGUgd2l0aCBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgUHJvdmlkZSBlaXRoZXIgYSB0ZW1wbGF0ZU5hbWUgb3IgYSBwcmUtY29tcGlsZWQgdGVtcGxhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gcHJvdmlkZSB0byB0aGUgdGVtcGxhdGVcbiAgICovXG4gIHJlbmRlciAoY29uZmlnLCBkYXRhKSB7XG4gICAgLy8gSWYgYSBjdXN0b20gdGVtcGxhdGUgaXMgcHJvdmlkZWQsIHVzZSBpdCxcbiAgICAvLyBvdGhlcndpc2UgZmFsbCBiYWNrIHRvIHRoZSB0ZW1wbGF0ZSBuYW1lXG4gICAgLy8gVE9ETyhiaWxseSkgVGhpcyBpbnRlcmZhY2Ugc2hvdWxkIHByb2JhYmx5IGJlIGxlc3MgdWdseVxuICAgIGlmIChjb25maWcudGVtcGxhdGUgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBjb25maWcudGVtcGxhdGUoZGF0YSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXNbY29uZmlnLnRlbXBsYXRlTmFtZV0oZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IGZpbmQvcmVuZGVyIHRlbXBsYXRlOiAnICsgY29uZmlnLnRlbXBsYXRlTmFtZSwgZSk7XG4gICAgfVxuICB9XG5cbiAgX3JlZ2lzdGVyQ3VzdG9tSGVscGVycyAoKSB7XG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignaWZlcScsIGZ1bmN0aW9uIChhcmcxLCBhcmcyLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gKGFyZzEgPT09IGFyZzIpID8gb3B0aW9ucy5mbih0aGlzKSA6IG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2lmbm90ZXEnLCBmdW5jdGlvbiAoYXJnMSwgYXJnMiwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIChhcmcxICE9PSBhcmcyKSA/IG9wdGlvbnMuZm4odGhpcykgOiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdmb3JtYXRQaG9uZU51bWJlcicsIGZ1bmN0aW9uIChwaG9uZU51bWJlclN0cmluZykge1xuICAgICAgdmFyIGNsZWFuZWQgPSAoJycgKyBwaG9uZU51bWJlclN0cmluZykucmVwbGFjZSgvXFxEL2csICcnKTtcbiAgICAgIHZhciBtYXRjaCA9IGNsZWFuZWQubWF0Y2goL14oMXwpPyhcXGR7M30pKFxcZHszfSkoXFxkezR9KSQvKTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICB2YXIgaW50bENvZGUgPSAobWF0Y2hbMV0gPyAnKzEgJyA6ICcnKTtcbiAgICAgICAgcmV0dXJuIFtpbnRsQ29kZSwgJygnLCBtYXRjaFsyXSwgJykgJywgbWF0Y2hbM10sICctJywgbWF0Y2hbNF1dLmpvaW4oJycpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdhc3NpZ24nLCBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgb3B0aW9ucyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcblxuICAgICAgaWYgKCFvcHRpb25zLmRhdGEucm9vdCkge1xuICAgICAgICBvcHRpb25zLmRhdGEucm9vdCA9IHt9O1xuICAgICAgfVxuXG4gICAgICBsZXQgdiA9ICcnO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICB2ID0gdiArIGFyZ3NbaV07XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMuZGF0YS5yb290W25hbWVdID0gdjtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2pzb24nLCBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBuYW1lID09PSB1bmRlZmluZWRcbiAgICAgICAgPyAnJ1xuICAgICAgICA6IEpTT04uc3RyaW5naWZ5KG5hbWUpO1xuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgSGFuZGxlYmFyc1JlbmRlcmVyIGZyb20gJy4vaGFuZGxlYmFyc3JlbmRlcmVyJztcblxuLy8gSW4gdGhlIGZ1dHVyZSwgdGhpcyB3aWxsIGNvbnRhaW4gYWxsIGRpZmZlcmVudCB0eXBlcyBvZiByZW5kZXJlcnNcbi8vIEUuZy4gTXVzdGFjaGUsIFNPWSwgSGFuZGxlQmFycywgUmVhY3QsIGV0Yy5cbmV4cG9ydCBjb25zdCBSZW5kZXJlcnMgPSB7XG4gIFNPWTogUmVuZGVyZXIsXG4gIEhhbmRsZWJhcnM6IEhhbmRsZWJhcnNSZW5kZXJlclxufTtcbiIsIi8qKiBAbW9kdWxlIERPTSAqL1xuXG4vKiBnbG9iYWwgSFRNTEVsZW1lbnQsIEhUTUxEb2N1bWVudCwgV2luZG93LCBFdmVudCAqL1xuXG5sZXQgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG5cbi8qKlxuICogU3RhdGljIGludGVyZmFjZSBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgRE9NIEFQSS5cbiAqIEBuYW1lc3BhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9NIHtcbiAgc3RhdGljIHNldHVwIChkLCBwKSB7XG4gICAgZG9jdW1lbnQgPSBkO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZSBhIEhUTUxFbGVtZW50IGZyb20gYW5kIEhUTUwgc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBodG1sIFRoZSBIVE1MIHRvIHBhcnNlIHRvIGEgRE9NIG5vZGUuXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZSAoaHRtbCkge1xuICAgIGlmICgnY3JlYXRlUmFuZ2UnIGluIGRvY3VtZW50KSB7XG4gICAgICAvLyBwcmVmZXIgdGhpcyBpbXBsZW1lbnRhdGlvbiBhcyBpdCBoYXMgd2lkZXIgYnJvd3NlciBzdXBwb3J0XG4gICAgICAvLyBhbmQgaXQncyBiZXR0ZXIgcGVyZm9ybWluZy5cbiAgICAgIC8vIHNlZSBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9jb252ZXJ0LWh0bWwtc3RpbmdzLWRvbS1ub2Rlc1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBmcmFnID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoaHRtbCk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZyk7XG4gICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIC8vIGZhbGxiYWNrIHRvIHRoaXMgYmVjYXVzZSBvZiBhIGJ1ZyBpbiBqc2RvbSB0aGF0IGNhdXNlcyB0ZXN0cyB0byBmYWlsXG4gICAgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vanNkb20vanNkb20vaXNzdWVzLzM5OVxuICAgIHJldHVybiBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGh0bWwsICd0ZXh0L2h0bWwnKS5ib2R5O1xuICB9XG5cbiAgLyoqXG4gICAqIHF1ZXJ5IHRoZSBET00gZm9yIGEgZ2l2ZW4gY3NzIHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudCBPcHRpb25hbCBjb250ZXh0IHRvIHVzZSBmb3IgYSBzZWFyY2guIERlZmF1bHRzIHRvIGRvY3VtZW50IGlmIG5vdCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIHRoZSBDU1Mgc2VsZWN0b3IgdG8gcXVlcnkgZm9yXG4gICAqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gdGhlIEZJUlNUIG5vZGUgaXQgZmluZHMsIGlmIGFueVxuICAgKi9cbiAgc3RhdGljIHF1ZXJ5IChwYXJlbnQsIHNlbGVjdG9yKSB7XG4gICAgLy8gRmFjYWRlLCBzaGlmdGluZyB0aGUgc2VsZWN0b3IgdG8gdGhlIHBhcmVudCBhcmd1bWVudCBpZiBvbmx5IG9uZVxuICAgIC8vIGFyZ3VtZW50IGlzIHByb3ZpZGVkXG4gICAgaWYgKHNlbGVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNlbGVjdG9yID0gcGFyZW50O1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBXaW5kb3cgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQpIHtcbiAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIHF1ZXJ5IHRoZSBET00gZm9yIGEgZ2l2ZW4gY3NzIHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudCBPcHRpb25hbCBjb250ZXh0IHRvIHVzZSBmb3IgYSBzZWFyY2guIERlZmF1bHRzIHRvIGRvY3VtZW50IGlmIG5vdCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIHRoZSBDU1Mgc2VsZWN0b3IgdG8gcXVlcnkgZm9yXG4gICAqXG4gICAqIEByZXR1cm5zIHtBcnJheX0gdGhlIEZJUlNUIG5vZGUgaXQgZmluZHMsIGlmIGFueVxuICAgKi9cbiAgc3RhdGljIHF1ZXJ5QWxsIChwYXJlbnQsIHNlbGVjdG9yKSB7XG4gICAgLy8gRmFjYWRlLCBzaGlmdGluZyB0aGUgc2VsZWN0b3IgdG8gdGhlIHBhcmVudCBhcmd1bWVudCBpZiBvbmx5IG9uZVxuICAgIC8vIGFyZ3VtZW50IGlzIHByb3ZpZGVkXG4gICAgaWYgKHNlbGVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNlbGVjdG9yID0gcGFyZW50O1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHRoZSBjYXNlIHdoZXJlIGNsaWVudCBjb2RlIGlzIHVzaW5nIGEgcG9pbnRlciB0byBhIGRvbSBub2RlIGFuZCBpdCdzIG51bGwsIGUuZy4gdGhpcy5fY29udGFpbmVyXG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxEb2N1bWVudCB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIFdpbmRvdykge1xuICAgICAgcmV0dXJuIFtzZWxlY3Rvcl07XG4gICAgfVxuXG4gICAgcmV0dXJuIEFycmF5LmZyb20ocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbiAgfVxuXG4gIHN0YXRpYyBvblJlYWR5IChjYikge1xuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkZWQnIHx8IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScpIHtcbiAgICAgIGNiKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgRE9NLm9uKGRvY3VtZW50LCAnRE9NQ29udGVudExvYWRlZCcsIGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGVFbGUgd2lsbCBjcmVhdGUgYSB7SFRNTEVsZW1lbnR9IGFuZCBhcHBseSB0aGUgcHJvcGVydGllcyBhdHRyaWJ1dGVzIHRocm91Z2ggYW4gb2JqZWN0IHByb3ZpZGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZWwgVGhlIGVsZW1lbnQgYHRhZ2AgbmFtZSB0byBjb25zdHJ1Y3RcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNfZGF0YSBPcHRpb25hbCBhdHRyaWJ1dGVzIHRvIGFwcGx5IHRvIHRoZSBuZXcgSFRNTEVsZW1lbnRcbiAgICovXG4gIHN0YXRpYyBjcmVhdGVFbCAoZWwsIG9wdHNfZGF0YSA9IHt9KSB7XG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsKTtcbiAgICBsZXQgcHJvcHMgPSBPYmplY3Qua2V5cyhvcHRzX2RhdGEpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByb3BzW2ldID09PSAnY2xhc3MnKSB7XG4gICAgICAgIERPTS5hZGRDbGFzcyhub2RlLCBvcHRzX2RhdGFbcHJvcHNbaV1dKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIG5vZGVbcHJvcHNbaV1dID0gb3B0c19kYXRhW3Byb3BzW2ldXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBhcHBlbmQgKHBhcmVudCwgbm9kZSkge1xuICAgIGlmIChub2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5vZGUgPSBwYXJlbnQ7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHBhcmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmVudCA9IERPTS5xdWVyeShwYXJlbnQpO1xuICAgIH1cblxuICAgIC8vIFN1cHBvcnQgSFRNTCBpbmplY3Rpb24gYXMgd2VsbCBhcyBIVE1MRWxlbWVudCBhcHBlbmRzXG4gICAgaWYgKHR5cGVvZiBub2RlID09PSAnc3RyaW5nJykge1xuICAgICAgcGFyZW50Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJCZWdpbicsIG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFkZENsYXNzIChub2RlLCBjbGFzc05hbWUpIHtcbiAgICBsZXQgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgnLCcpO1xuICAgIGxldCBsZW4gPSBjbGFzc2VzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChjbGFzc2VzW2ldKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZW1wdHkgKHBhcmVudCkge1xuICAgIHBhcmVudC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIHN0YXRpYyBjc3MgKHNlbGVjdG9yLCBzdHlsZXMpIHtcbiAgICBsZXQgbm9kZSA9IERPTS5xdWVyeShzZWxlY3Rvcik7XG5cbiAgICBmb3IgKGxldCBwcm9wIGluIHN0eWxlcykge1xuICAgICAgbm9kZS5zdHlsZVtwcm9wXSA9IHN0eWxlc1twcm9wXTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYXR0ciAoc2VsZWN0b3IsIGF0dHIsIHZhbCkge1xuICAgIERPTS5xdWVyeShzZWxlY3Rvcikuc2V0QXR0cmlidXRlKGF0dHIsIHZhbCk7XG4gIH1cblxuICBzdGF0aWMgdHJpZ2dlciAoc2VsZWN0b3IsIGV2ZW50LCBzZXR0aW5ncykge1xuICAgIGxldCBlID0gbmV3IEV2ZW50KGV2ZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICdidWJibGVzJzogdHJ1ZSxcbiAgICAgICdjYW5jZWxhYmxlJzogdHJ1ZVxuICAgIH0sIHNldHRpbmdzIHx8IHt9KSk7XG5cbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLmRpc3BhdGNoRXZlbnQoZSk7XG4gIH1cblxuICBzdGF0aWMgb24gKHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpIHtcbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBvZmYgKHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpIHtcbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWxlZ2F0ZSAoY3R4dCwgc2VsZWN0b3IsIGV2dCwgaGFuZGxlcikge1xuICAgIGxldCBlbCA9IERPTS5xdWVyeShjdHh0KTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2dCwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgd2hpbGUgKCF0YXJnZXQuaXNFcXVhbE5vZGUoZWwpKSB7XG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICBoYW5kbGVyKGV2ZW50LCB0YXJnZXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTdGF0ZSAqL1xuXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uLy4uL2NvcmUvZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlcic7XG5cbi8qKlxuICogU3RhdGUgY29udGFpbnMgdGhlIGRhdGEgZm9yIHRoZSBjb21wb25lbnRcbiAqIGFuZCBleHBvc2VzIGFuIHtFdmVudEVtaXR0ZXJ9IGludGVyZmFjZSBzbyB0aGF0IGV4dGVybmFsXG4gKiBkZXBlbmRlbmNpZXMgY2FuIGxpc3Rlbi9ob29rIHN1YnNjcmliZSB0byBtZXNzYWdlcy91cGRhdGVzLlxuICogQGV4dGVuZHMgRXZlbnRFbWl0dGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdGF0ZSA9IGRhdGEgfHwge307XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSBjb21wb25lbnQuXG4gICAqIE5PVEUoYmlsbHkpOiBEb2VzIG5vdCBmaXJlIGFuIHVwZGF0ZSBtZXNzYWdlXG4gICAqL1xuICBpbml0IChwcm9wLCBvcHRWYWwpIHtcbiAgICB0aGlzLl9zZXQocHJvcCwgb3B0VmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXR0ZXIgZm9yIHRoZSBzdGF0ZVxuICAgKiBAcGFyYW0gcHJvcCB7c3RyaW5nfE9iamVjdH0gVGhlIHByb3BlcnR5IHRvIHNldFxuICAgKiBAcGFyYW0gb3B0VmFsIE9wdGlvbmFsLCBpZiBwcm9wIGlzIGEge3N0cmluZ30sIGl0IHdpbGwgYXNzaWduIHRoZSB2YWx1ZSB0byB0aGF0IHByb3BlcnR5XG4gICAqL1xuICBzZXQgKHByb3AsIG9wdFZhbCkge1xuICAgIHRoaXMuX3NldChwcm9wLCBvcHRWYWwpO1xuICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gIH1cblxuICAvKipcbiAgICogc2V0dGVyIGZvciB0aGUgc3RhdGUgZW5hYmxlcyB5b3UgdG8gdXBkYXRlIGEgc2luZ2xlIHByb3BlcnR5LCBvciBjb21wbGV0ZSBzdGF0ZVxuICAgKiBkZXBlbmRpbmcgb24gdGhlIGFyZ3VtZW50cyBwcm92aWRlZC5cbiAgICogQHBhcmFtIHByb3Age3N0cmluZ3xPYmplY3R9IFRoZSBwcm9wZXJ0eSB0byBzZXRcbiAgICogQHBhcmFtIG9wdFZhbCBJZiBwcm9wIGlzIGEge3N0cmluZ30sIHByb3ZpZGUgaXRzIHZhbHVlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2V0IChwcm9wLCBvcHRWYWwpIHtcbiAgICBpZiAob3B0VmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3N0YXRlID0gcHJvcDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3RhdGVbcHJvcF0gPSBvcHRWYWw7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlIChkYXRhKSB7XG4gICAgdGhpcy5fc3RhdGUgPSBkYXRhO1xuICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgYSBwcm9wZXJ0aWVzIHZhbHVlIGZyb20gdGhlIHN0YXRlXG4gICAqIElmIG5vIHByb3BlcnR5IHByb3ZpZGVkLCByZXR1cm4gdGhlIGZ1bGwgc3RhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdFByb3Agb3B0aW9uYWwgcHJvcGVydHkgdG8gcmV0cmlldmVcbiAgICovXG4gIGdldCAob3B0UHJvcCkge1xuICAgIGlmIChvcHRQcm9wID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlW29wdFByb3BdO1xuICB9XG5cbiAgaGFzIChwcm9wKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlW3Byb3BdICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBhc0pTT04gKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgfVxufVxuIiwiLyoqXG4gKiBNb2RlbCBmb3IgdGhlIGFuYWx5dGljcyBldmVudCB0eXBlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuYWx5dGljc0V2ZW50IHtcbiAgY29uc3RydWN0b3IgKHR5cGUsIGxhYmVsKSB7XG4gICAgdGhpcy5ldmVudFR5cGUgPSB0eXBlLnRvVXBwZXJDYXNlKCk7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIHByb3ZpZGVkIG9wdGlvbnMgdG8gdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIEFkZGl0aW9uYWwgb3B0aW9ucyBmb3IgdGhlIGV2ZW50XG4gICAqL1xuICBhZGRPcHRpb25zIChvcHRpb25zKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGV2ZW50IGluIHRoZSBhcGkgZm9ybWF0LCB0eXBpY2FsbHkgZm9yIHJlcG9ydGluZyB0byB0aGUgYXBpXG4gICAqL1xuICB0b0FwaUV2ZW50ICgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcyk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEFuYWx5dGljc1JlcG9ydGVyICovXG5cbmltcG9ydCBBcGlSZXF1ZXN0IGZyb20gJy4uL2h0dHAvYXBpcmVxdWVzdCc7XG5pbXBvcnQgQW5hbHl0aWNzRXZlbnQgZnJvbSAnLi9hbmFseXRpY3NldmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCB7IEFOQUxZVElDU19CQVNFX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQ2xhc3MgZm9yIHJlcG9ydGluZyBhbmFseXRpY3MgZXZlbnRzIHRvIHRoZSBzZXJ2ZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5hbHl0aWNzUmVwb3J0ZXIge1xuICBjb25zdHJ1Y3RvciAoYXBpS2V5LCBhbnN3ZXJzS2V5KSB7XG4gICAgdGhpcy5fYXBpS2V5ID0gYXBpS2V5O1xuICAgIHRoaXMuX2Fuc3dlcnNLZXkgPSBhbnN3ZXJzS2V5O1xuXG4gICAgLy8gVE9ETyhqZGVsZXJtZSk6IFRlbXBvcmFyeSB3b3JrYXJvdW5kIGZvciBnZXR0aW5nIGludGVybmFsIGJ1c2luZXNzIElEIGZvciB0aGUgYW5hbHl0aWNzIGVuZHBvaW50XG4gICAgLy8gVG8gYmUgcmVtb3ZlZCB3aGVuIHRoZSBlbmRwb2ludCBpcyBtb3ZlZCBiZWhpbmQgbGl2ZWFwaVxuICAgIGNvbnN0IGJ1c2luZXNzSWRSZXEgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL3F1ZXJ5JyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogMjAxOTAzMDEsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogJycsXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5fYW5zd2Vyc0tleVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYnVzaW5lc3NJZFJlcS5nZXQoKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4oZCA9PiB7XG4gICAgICB0aGlzLl9idXNpbmVzc0lkID0gZC5yZXNwb25zZS5idXNpbmVzc0lkO1xuICAgIH0pO1xuICB9XG5cbiAgcmVwb3J0IChldmVudCkge1xuICAgIGlmICghKGV2ZW50IGluc3RhbmNlb2YgQW5hbHl0aWNzRXZlbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0FuYWx5dGljc0Vycm9yKCdUcmllZCB0byBzZW5kIGludmFsaWQgYW5hbHl0aWNzIGV2ZW50JywgZXZlbnQpO1xuICAgIH1cblxuICAgIGV2ZW50LmFkZE9wdGlvbnMoeyBhbnN3ZXJzS2V5OiB0aGlzLl9hbnN3ZXJzS2V5IH0pO1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGJhc2VVcmw6IEFOQUxZVElDU19CQVNFX1VSTCxcbiAgICAgIGVuZHBvaW50OiBgL3JlYWx0aW1lYW5hbHl0aWNzL2RhdGEvYW5zd2Vycy8ke3RoaXMuX2J1c2luZXNzSWR9YCxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogMjAxOTAzMDEsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2RhdGEnOiBldmVudC50b0FwaUV2ZW50KClcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlcXVlc3QucG9zdCgpXG4gICAgICAuY2F0Y2goY29uc29sZS5lcnIpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBDb21wb25lbnQgKi9cblxuaW1wb3J0IHsgUmVuZGVyZXJzIH0gZnJvbSAnLi4vcmVuZGVyaW5nL2NvbnN0JztcblxuaW1wb3J0IERPTSBmcm9tICcuLi9kb20vZG9tJztcbmltcG9ydCBTdGF0ZSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IEFuYWx5dGljc1JlcG9ydGVyIH0gZnJvbSAnLi4vLi4vY29yZSc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCBBbmFseXRpY3NFdmVudCBmcm9tICcuLi8uLi9jb3JlL2FuYWx5dGljcy9hbmFseXRpY3NldmVudCc7XG5cbi8qKlxuICogQ29tcG9uZW50IGlzIGFuIGFic3RyYWN0aW9uIHRoYXQgZW5jYXBzdWxhdGVzIHN0YXRlLCBiZWhhdmlvcixcbiAqIGFuZCB2aWV3IGZvciBhIHBhcnRpY3VsYXIgY2h1bmsgb2YgZnVuY3Rpb25hbGl0eSBvbiB0aGUgcGFnZS5cbiAqXG4gKiBUaGUgQVBJIGV4cG9zZXMgZXZlbnQgbGlmZSBjeWNsZSBob29rcyBmb3Igd2hlbiB0aGluZ3MgYXJlIHJlbmRlcmVkLFxuICogbW91bnRlZCwgY3JlYXRlZCwgZXRjLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAodHlwZSwgb3B0cyA9IHt9KSB7XG4gICAgLy8gU2ltcGxlIGZhY2FkZSBwYXR0ZXJuIHRvIGVuYWJsZSB0aGUgdXNlciB0byBwYXNzIGEgc2luZ2xlIG9iamVjdFxuICAgIC8vIGNvbnRhaW5pbmcgYWxsIHRoZSBuZWNlc3Nhcnkgb3B0aW9ucyBhbmQgc2V0dGluZ3NcbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBvcHRzID0gdHlwZTtcbiAgICAgIHR5cGUgPSBvcHRzLnR5cGU7XG4gICAgfVxuXG4gICAgdGhpcy5tb2R1bGVJZCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBVbmlxdWUgbmFtZSBvZiB0aGlzIGNvbXBvbmVudCBpbnN0YW5jZVxuICAgICAqIFVzZWQgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBvdGhlciBjb21wb25lbnRzIG9mIHRoZSBzYW1lIHR5cGVcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubmFtZSA9IG9wdHMubmFtZSB8fCB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICAvKipcbiAgICAgKiBDYWNoZSB0aGUgb3B0aW9ucyBzbyB0aGF0IHdlIGNhbiBwcm9wb2dhdGUgcHJvcGVybHkgdG8gY2hpbGQgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5fb3B0cyA9IG9wdHM7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpZGVudGlmaWVyIHVzZWQgdG8gY2xhc3NpZnkgdGhlIHR5cGUgb2YgY29tcG9uZW50LlxuICAgICAqIFRoZSBjb21wb25lbnQgbWFuYWdlciB1c2VzIHRoaXMgaW5mb3JtYXRpb24gaW4gb3JkZXIgdG8gcGVyc2lzdCBhbmQgb3JnYW5pemUgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtzdHJpbmd8Q29tcG9uZW50VHlwZX1cbiAgICAgKi9cbiAgICB0aGlzLl90eXBlID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIHBhcmVudCBjb21wb25lbnQsIGlmIGV4aXN0c1xuICAgICAqIEB0eXBlIHtDb21wb25lbnR9XG4gICAgICovXG4gICAgdGhpcy5fcGFyZW50ID0gb3B0cy5wYXJlbnQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgY29udGFpbmVyIGZvciBhbGwgdGhlIGNoaWxkIGNvbXBvbmVudHNcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50W119XG4gICAgICovXG4gICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdGF0ZSAoZGF0YSkgb2YgdGhlIGNvbXBvbmVudCB0byBiZSBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgZm9yIHJlbmRlcmluZ1xuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5fc3RhdGUgPSBuZXcgU3RhdGUob3B0cy5zdGF0ZSk7XG5cbiAgICAvKipcbiAgICAgKiBUT0RPKGJpbGx5KSBUaGlzIHNob3VsZCBiZSAnc2VydmljZXMnXG4gICAgICovXG4gICAgdGhpcy5jb3JlID0gb3B0cy5jb3JlIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IG1hbmFnZXIsIHdoaWNoIGNvbnRhaW5zIGFsbCBvZiB0aGUgY29tcG9uZW50IGNsYXNzZXNcbiAgICAgKiBlbGlnaWJsZSB0byBiZSBjcmVhdGVkXG4gICAgICogQHR5cGUge0NvbXBvbmVudE1hbmFnZXJ9XG4gICAgICovXG4gICAgdGhpcy5jb21wb25lbnRNYW5hZ2VyID0gb3B0cy5jb21wb25lbnRNYW5hZ2VyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgYW5hbHl0aWNzIHJlcG9ydGVyLCB1c2VkIHRvIHJlcG9ydCBldmVudHMgZm9yIHRoaXMgY29tcG9uZW50XG4gICAgICogQHR5cGUge0FuYWx5dGljc1JlcG9ydGVyfVxuICAgICAqL1xuICAgIHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIgPSBvcHRzLmFuYWx5dGljc1JlcG9ydGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgRE9NIG5vZGUgdGhhdCB0aGUgY29tcG9uZW50IHdpbGwgYmUgYXBwZW5kZWQgdG8gd2hlbiBtb3VudGVkL3JlbmRlcmVkLlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBpZiAodGhpcy5fcGFyZW50ID09PSBudWxsKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdHMuY29udGFpbmVyICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgYGNvbnRhaW5lcmAgb3B0aW9uIGZvciBjb21wb25lbnQgY29uZmlndXJhdGlvbi4gTXVzdCBiZSBvZiB0eXBlIGBzdHJpbmdgLicpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29udGFpbmVyID0gRE9NLnF1ZXJ5KG9wdHMuY29udGFpbmVyKSB8fCBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb250YWluZXIgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Ll9jb250YWluZXIsIG9wdHMuY29udGFpbmVyKTtcblxuICAgICAgLy8gSWYgd2UgaGF2ZSBhIHBhcmVudCwgYW5kIHRoZSBjb250YWluZXIgaXMgbWlzc2luZyBmcm9tIHRoZSBET00sXG4gICAgICAvLyB3ZSBjb25zdHJ1Y3QgdGhlIGNvbnRhaW5lciBhbmQgYXBwZW5kIGl0IHRvIHRoZSBwYXJlbnRcbiAgICAgIGlmICh0aGlzLl9jb250YWluZXIgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gRE9NLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IG9wdHMuY29udGFpbmVyLnN1YnN0cmluZygxLCBvcHRzLmNvbnRhaW5lci5sZW5ndGgpXG4gICAgICAgIH0pO1xuICAgICAgICBET00uYXBwZW5kKHRoaXMuX3BhcmVudC5fY29udGFpbmVyLCB0aGlzLl9jb250YWluZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb250YWluZXIgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgY29udGFpbmVyIERPTSBub2RlOiAnICsgb3B0cy5jb250YWluZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIGNsYXNzIHRvIGJlIGFwcGxpZWQgdG8ge3RoaXMuX2NvbnRhaW5lcn0gbm9kZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fY2xhc3NOYW1lID0gb3B0cy5jbGFzcyB8fCAnY29tcG9uZW50JztcblxuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIHJlbmRlciBmdW5jdGlvbiB0byBiZSB1c2VkIGluc3RlYWQgb2YgdXNpbmcgdGhlIGRlZmF1bHQgcmVuZGVyZXJcbiAgICAgKiBAdHlwZSB7UmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyID0gb3B0cy5yZW5kZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBkZWZhdWx0IHtSZW5kZXJlcn0gdGhhdCB3aWxsIGJlIHVzZWQgZm9yIHJlbmRlcmluZyB0aGUgdGVtcGxhdGVcbiAgICAgKiBAdHlwZSB7UmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyZXIgPSBvcHRzLnJlbmRlcmVyIHx8IFJlbmRlcmVycy5IYW5kbGViYXJzO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHN0cmluZyB0byB1c2UgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50XG4gICAgICogSWYgdGhpcyBpcyBsZWZ0IGVtcHR5LCB3ZSBsb29rdXAgdGhlIHRlbXBsYXRlIHRoZSBiYXNlIHRlbXBsYXRlcyB1c2luZyB0aGUgdGVtcGxhdGVOYW1lXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZSA9IG9wdHMudGVtcGxhdGUgPyB0aGlzLl9yZW5kZXJlci5jb21waWxlKG9wdHMudGVtcGxhdGUpIDogbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZU5hbWUgdG8gdXNlIGZvciByZW5kZXJpbmcgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBUaGlzIGlzIG9ubHkgdXNlZCBpZiBfdGVtcGxhdGUgaXMgZW1wdHkuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSBvcHRzLnRlbXBsYXRlTmFtZSB8fCAnZGVmYXVsdCc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCBzdGF0ZSBpbmRpY2F0aW5nIHdoZXRoZXIgb3Igbm90IHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbW91bnRlZCB0byB0aGUgRE9NXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2ssIHRoYXRzIHVzZWQgdG8gdHJhbnNmb3JtIHRoZSBpbnRlcm5hbCBkYXRhXG4gICAgICogbW9kZWxzIG9mIHRoZSBjb21wb25lbnRzLCBiZWZvcmUgaXQgZ2V0cyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQgc3RhdGUuXG4gICAgICogQnkgZGVmYXVsdCwgbm8gdHJhbnNmb3JtYXRpb24gaGFwcGVucy5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy50cmFuc2Zvcm1EYXRhID0gb3B0cy50cmFuc2Zvcm1EYXRhIHx8IHRoaXMudHJhbnNmb3JtRGF0YSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBjcmVhdGVkLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLm9uQ3JlYXRlID0gb3B0cy5vbkNyZWF0ZSB8fCB0aGlzLm9uQ3JlYXRlIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIGEgY29tcG9uZW50IGlzIE1vdW50ZWQuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMub25Nb3VudCA9IG9wdHMub25Nb3VudCB8fCB0aGlzLm9uTW91bnQgfHwgZnVuY3Rpb24gKCkgeyB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIGEgY29tcG9uZW50cyBzdGF0ZSBpcyB1cGRhdGVkLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLm9uVXBkYXRlID0gb3B0cy5vblVwZGF0ZSB8fCB0aGlzLm9uVXBkYXRlIHx8IGZ1bmN0aW9uICgpIHsgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdDb21wb25lbnQnO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaW5pdCAob3B0cykge1xuICAgIHRoaXMuc2V0U3RhdGUob3B0cy5kYXRhIHx8IG9wdHMuc3RhdGUgfHwge30pO1xuICAgIHRoaXMub25DcmVhdGUoKTtcbiAgICB0aGlzLl9zdGF0ZS5vbigndXBkYXRlJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgICAgdGhpcy5tb3VudCgpO1xuICAgIH0pO1xuXG4gICAgRE9NLmFkZENsYXNzKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgdGhpcy5fc3RhdGUuc2V0KGRhdGEpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0U3RhdGUgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuZ2V0KHByb3ApO1xuICB9XG5cbiAgaGFzU3RhdGUgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuaGFzKHByb3ApO1xuICB9XG5cbiAgdHJhbnNmb3JtRGF0YSAoZGF0YSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYWRkQ2hpbGQgKGRhdGEsIHR5cGUsIG9wdHMpIHtcbiAgICBsZXQgY2hpbGRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKFxuICAgICAgdHlwZSxcbiAgICAgIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSwgb3B0cyB8fCB7fSwge1xuICAgICAgICBfcGFyZW50T3B0czogdGhpcy5fb3B0c1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5fY2hpbGRyZW4ucHVzaChjaGlsZENvbXBvbmVudCk7XG4gICAgcmV0dXJuIGNoaWxkQ29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgcmVuZGVyIG1ldGhvZCB0byBiZSB1c2VkIGZvciByZW5kZXJpbmcgdGhlIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZW5kZXJcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc2V0UmVuZGVyIChyZW5kZXIpIHtcbiAgICB0aGlzLl9yZW5kZXIgPSByZW5kZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSByZW5kZXJlciBmb3IgdGhlIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge1JlbmRlcmVyVHlwZX0gcmVuZGVyZXJcbiAgICovXG4gIHNldFJlbmRlcmVyIChyZW5kZXJlcikge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gUmVuZGVyZXJzW3JlbmRlcmVyXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0ZW1wbGF0ZSBmb3IgdGhlIGNvbXBvbmVudCB0byB1c2Ugd2hlbiByZW5kZXJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gICAqL1xuICBzZXRUZW1wbGF0ZSAodGVtcGxhdGUpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZSA9IHRoaXMuX3JlbmRlcmVyLmNvbXBpbGUodGVtcGxhdGUpO1xuICB9XG5cbiAgdW5Nb3VudCAoKSB7XG4gICAgRE9NLmVtcHR5KHRoaXMuX2NvbnRhaW5lcik7XG4gIH1cblxuICBtb3VudCAoKSB7XG4gICAgaWYgKCF0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMudW5Nb3VudCgpO1xuICAgIGlmICh0aGlzLmJlZm9yZU1vdW50KCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBET00uYXBwZW5kKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5yZW5kZXIodGhpcy5fc3RhdGUuYXNKU09OKCkpKTtcblxuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy5fb25Nb3VudCgpO1xuXG4gICAgLy8gQXR0YWNoIGFuYWx5dGljcyBob29rcyBhcyBuZWNlc3NhcnlcbiAgICBsZXQgZG9tSG9va3MgPSBET00ucXVlcnlBbGwodGhpcy5fY29udGFpbmVyLCAnW2RhdGEtZXZlbnR0eXBlXScpO1xuICAgIGRvbUhvb2tzLmZvckVhY2godGhpcy5fY3JlYXRlQW5hbHl0aWNzSG9vay5iaW5kKHRoaXMpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX29uTW91bnQgKCkge1xuICAgIHRoaXMub25Nb3VudCh0aGlzKTtcbiAgICBpZiAodGhpcy5fY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBjaGlsZC5fb25Nb3VudCgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbmRlciB0aGUgdGVtcGxhdGUgdXNpbmcgdGhlIHtSZW5kZXJlcn0gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBhbmQgdGVtcGxhdGUgb2YgdGhlIGNvbXBvbmVudFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgcmVuZGVyIChkYXRhID0gdGhpcy5fc3RhdGUuZ2V0KCkpIHtcbiAgICB0aGlzLmJlZm9yZVJlbmRlcigpO1xuICAgIGRhdGEgPSB0aGlzLnRyYW5zZm9ybURhdGEoZGF0YSk7XG5cbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIC8vIFVzZSBlaXRoZXIgdGhlIGN1c3RvbSByZW5kZXIgZnVuY3Rpb24gb3IgdGhlIGludGVybmFsIHJlbmRlcmVyXG4gICAgLy8gZGVwZW5kYW50IG9uIHRoZSBjb21wb25lbnQgY29uZmlndXJhdGlvblxuICAgIGlmICh0eXBlb2YgdGhpcy5fcmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBodG1sID0gdGhpcy5fcmVuZGVyKGRhdGEpO1xuICAgICAgaWYgKHR5cGVvZiBodG1sICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlbmRlciBtZXRob2QgbXVzdCByZXR1cm4gSFRNTCBhcyB0eXBlIHtzdHJpbmd9Jyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlbmRlciB0aGUgZXhpc3RpbmcgdGVtcGxhdGVzIGFzIGEgc3RyaW5nXG4gICAgICBodG1sID0gdGhpcy5fcmVuZGVyZXIucmVuZGVyKHtcbiAgICAgICAgdGVtcGxhdGU6IHRoaXMuX3RlbXBsYXRlLFxuICAgICAgICB0ZW1wbGF0ZU5hbWU6IHRoaXMuX3RlbXBsYXRlTmFtZVxuICAgICAgfSwgZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gV2UgY3JlYXRlIGFuIEhUTUwgRG9jdW1lbnQgZnJhZ21lbnQgd2l0aCB0aGUgcmVuZGVyZWQgc3RyaW5nXG4gICAgLy8gU28gdGhhdCB3ZSBjYW4gcXVlcnkgaXQgZm9yIHByb2Nlc3Npbmcgb2Ygc3ViIGNvbXBvbmVudHNcbiAgICBsZXQgZWwgPSBET00uY3JlYXRlKGh0bWwpO1xuXG4gICAgLy8gUHJvY2VzcyB0aGUgRE9NIHRvIGRldGVybWluZSBpZiB3ZSBzaG91bGQgY3JlYXRlXG4gICAgLy8gaW4tbWVtb3J5IHN1Yi1jb21wb25lbnRzIGZvciByZW5kZXJpbmdcbiAgICBsZXQgZG9tQ29tcG9uZW50cyA9IERPTS5xdWVyeUFsbChlbCwgJ1tkYXRhLWNvbXBvbmVudF0nKTtcbiAgICBkb21Db21wb25lbnRzLmZvckVhY2goYyA9PiB0aGlzLl9jcmVhdGVTdWJjb21wb25lbnQoYywgZGF0YSkpO1xuXG4gICAgdGhpcy5hZnRlclJlbmRlcigpO1xuICAgIHJldHVybiBlbC5pbm5lckhUTUw7XG4gIH1cblxuICBfY3JlYXRlU3ViY29tcG9uZW50IChkb21Db21wb25lbnQsIGRhdGEpIHtcbiAgICBsZXQgZGF0YXNldCA9IGRvbUNvbXBvbmVudC5kYXRhc2V0O1xuICAgIGxldCB0eXBlID0gZGF0YXNldC5jb21wb25lbnQ7XG4gICAgbGV0IHByb3AgPSBkYXRhc2V0LnByb3A7XG4gICAgbGV0IG9wdHMgPSBkYXRhc2V0Lm9wdHMgPyBKU09OLnBhcnNlKGRhdGFzZXQub3B0cykgOiB7fTtcblxuICAgIC8vIFJlbmRlcmluZyBhIHN1YiBjb21wb25lbnQgc2hvdWxkIGJlIHdpdGhpbiB0aGUgY29udGV4dCxcbiAgICAvLyBvZiB0aGUgbm9kZSB0aGF0IHdlIHByb2Nlc3NlZCBpdCBmcm9tXG4gICAgb3B0cyA9IE9iamVjdC5hc3NpZ24ob3B0cywge1xuICAgICAgY29udGFpbmVyOiBkb21Db21wb25lbnRcbiAgICB9KTtcblxuICAgIGxldCBjaGlsZERhdGEgPSBkYXRhW3Byb3BdO1xuXG4gICAgLy8gVE9ETyhiaWxseSkgUmlnaHQgbm93LCBpZiB3ZSBwcm92aWRlIGFuIGFycmF5IGFzIHRoZSBkYXRhIHByb3AsXG4gICAgLy8gdGhlIGJlaGF2aW9yIGlzIHRvIGNyZWF0ZSBtYW55IGNvbXBvbmVudHMgZm9yIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkuXG4gICAgLy8gVEhBVCBpbnRlcmZhY2UgU0hPVUxEIGNoYW5nZSB0byB1c2UgYSBkaWZmZXJlbnQgcHJvcGVydHkgdGhhdCBkZWZpbmVzXG4gICAgLy8gd2hldGhlciB0byBhcnJheSBkYXRhIHNob3VsZCBiZSB1c2VkIGZvciBhIHNpbmdsZSBjb21wb25lbnQgb3JcbiAgICAvLyB0byBjcmVhdGUgbWFueSBjb21wb25lbnRzIGZvciBlYWNoIGl0ZW0uXG4gICAgLy8gT3ZlcmxvYWRpbmcgYW5kIGhhdmluZyB0aGlzIHNpZGUgZWZmZWN0IGlzIHVuaW50dWl0aXZlIGFuZCBXUk9OR1xuICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZERhdGEpKSB7XG4gICAgICBsZXQgY2hpbGRDb21wb25lbnQgPSB0aGlzLmFkZENoaWxkKGNoaWxkRGF0YSwgdHlwZSwgb3B0cyk7XG4gICAgICBET00uYXBwZW5kKGRvbUNvbXBvbmVudCwgY2hpbGRDb21wb25lbnQucmVuZGVyKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSwgcmVuZGVyIHRoZSBjb21wb25lbnQgYXMgZXhwZWN0ZWRcbiAgICBsZXQgY2hpbGRIVE1MID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZENvbXBvbmVudCA9IHRoaXMuYWRkQ2hpbGQoY2hpbGREYXRhW2ldLCB0eXBlLCBvcHRzKTtcbiAgICAgIGNoaWxkSFRNTC5wdXNoKGNoaWxkQ29tcG9uZW50LnJlbmRlcigpKTtcbiAgICB9XG5cbiAgICBET00uYXBwZW5kKGRvbUNvbXBvbmVudCwgY2hpbGRIVE1MLmpvaW4oJycpKTtcbiAgfVxuXG4gIF9jcmVhdGVBbmFseXRpY3NIb29rIChkb21Db21wb25lbnQpIHtcbiAgICBjb25zdCBkYXRhc2V0ID0gZG9tQ29tcG9uZW50LmRhdGFzZXQ7XG4gICAgY29uc3QgdHlwZSA9IGRhdGFzZXQuZXZlbnR0eXBlO1xuICAgIGNvbnN0IGxhYmVsID0gZGF0YXNldC5ldmVudGxhYmVsO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBkYXRhc2V0LmV2ZW50b3B0aW9ucyA/IEpTT04ucGFyc2UoZGF0YXNldC5ldmVudG9wdGlvbnMpIDoge307XG5cbiAgICBET00ub24oZG9tQ29tcG9uZW50LCAnbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQW5hbHl0aWNzRXZlbnQodHlwZSwgbGFiZWwpO1xuICAgICAgZXZlbnQuYWRkT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgIHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIucmVwb3J0KGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbkNyZWF0ZSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGNvbnN0cnVjdGVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvbkNyZWF0ZSAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uVXBkYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGNoYW5nZXNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uVXBkYXRlIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlUmVuZGVyIGV2ZW50IGlzIHRyaWdnZXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYmVmb3JlUmVuZGVyIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYWZ0ZXJSZW5kZXIgZXZlbnQgaXMgdHJpZ2dlcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIGFmdGVyUmVuZGVyIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25Nb3VudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFwcGVuZGVkIHRvIHRoZSBET01cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvblVuTW91bnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyByZW1vdmVkIGZyb20gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25Vbk1vdW50IChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlTW91bnQgaXMgdHJpZ2dlcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQgdG8gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYmVmb3JlTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvbkRlc3Ryb3kgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uRGVzdHJveSAoY2IpIHtcblxuICB9XG59XG4iLCIvKiogQG1vZHVsZSBOYXZpZ2F0aW9uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5cbi8qKlxuICogVGhlIFRhYiBpcyBhIG1vZGVsIHRoYXQgaXMgdXNlZCB0byBwb3dlciB0aGUgTmF2aWdhdGlvbiB0YWJzIGluIHRoZSB2aWV3LlxuICogSXQncyBpbml0aWFsaXplZCB0aHJvdWdoIHRoZSBjb25maWd1cmF0aW9uIHByb3ZpZGVkIHRvIHRoZSBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBUYWIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIHRhYiB0aGF0IGlzIGV4cG9zZWQgZm9yIHRoZSBsaW5rXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmxhYmVsID0gY29uZmlnLmxhYmVsO1xuICAgIGlmICh0eXBlb2YgdGhpcy5sYWJlbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoJ2xhYmVsIGlzIGEgcmVxdWlyZWQgY29uZmlndXJhdGlvbiBvcHRpb24gZm9yIHRhYi4nLCAnTmF2aWdhdGlvbkNvbXBvbmVudCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb21wbGV0ZSBVUkwsIGluY2x1ZGluZyB0aGUgcGFyYW1zXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnVybCA9IGNvbmZpZy51cmw7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoJ3VybCBpcyBhIHJlcXVpcmVkIGNvbmZpZ3VyYXRpb24gb3B0aW9uIGZvciB0YWIuJywgJ05hdmlnYXRpb25Db21wb25lbnQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VydmVyc2lkZSB2ZXJ0aWNhbCBjb25maWcgaWQgdGhhdCB0aGlzIGlzIHJlZmVyZW5jZWQgdG8uXG4gICAgICogQnkgcHJvdmlkaW5nIHRoaXMsIGVuYWJsZXMgZHluYW1pYyBzb3J0aW5nIGJhc2VkIG9uIHJlc3VsdHMuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmNvbmZpZ0lkID0gY29uZmlnLmNvbmZpZ0lkIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYmFzZSBVUkwgdXNlZCBmb3IgY29uc3RydWN0aW5nIHRoZSBVUkwgd2l0aCBwYXJhbXNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuYmFzZVVybCA9IGNvbmZpZy51cmw7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gc2hvdyB0aGlzIHRhYiBmaXJzdCBpbiB0aGUgb3JkZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmlzRmlyc3QgPSBjb25maWcuaXNGaXJzdCB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hldGhlciBvciBub3QgdG8gYXBwbHkgYSBzcGVjaWFsIGNsYXNzIHRvIHRoZVxuICAgICAqIG1hcmt1cCB0byBkZXRlcm1pbmUgaWYgaXQncyBhbiBhY3RpdmUgdGFiXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc0FjdGl2ZSA9IGNvbmZpZy5pc0FjdGl2ZSB8fCBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBmcm9tIHdpbGwgY29uc3RydWN0IGEgbWFwIG9mIGNvbmZpZ0lkIHRvIHtUYWJ9IGZyb21cbiAgICogYSBjb25maWd1cmF0aW9uIGZpbGVcbiAgICogQHBhcmFtIHtvYmplY3R9IHRhYnNDb25maWcgdGhlIGNvbmZpZ3VyYXRpb24gdG8gdXNlXG4gICAqL1xuICBzdGF0aWMgZnJvbSAodGFic0NvbmZpZykge1xuICAgIGxldCB0YWJzID0ge307XG4gICAgLy8gUGFyc2UgdGhlIG9wdGlvbnMgYW5kIGJ1aWxkIG91dCBvdXIgdGFicyBhbmRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNDb25maWcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB0YWIgPSB0YWJzQ29uZmlnW2ldO1xuICAgICAgLy8gRm9yIHRhYnMgd2l0aG91dCBjb25maWcgaWRzLCBtYXAgdGhlaXIgVVJMIHRvIHRoZSBjb25maWdJRFxuICAgICAgLy8gdG8gYXZvaWQgZHVwbGljYXRpb24gb2YgcmVuZGVyc1xuICAgICAgaWYgKHRhYi5jb25maWdJZCA9PT0gdW5kZWZpbmVkICYmIHRhYnNbdGFiLmNvbmZpZ0lkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhYi5jb25maWdJZCA9IHRhYi51cmw7XG4gICAgICB9XG5cbiAgICAgIHRhYnNbdGFiLmNvbmZpZ0lkXSA9IG5ldyBUYWIodGFiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhYnM7XG4gIH1cbn1cblxuLyoqXG4gKiBOYXZpZ2F0aW9uQ29tcG9uZW50IGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBidWlsZGluZyBhIGR5bmFtaWNcbiAqIG5hdmlnYXRpb24gdGhhdCBpcyBwb3dlcmVkIGJ5IHVuaXZlcnNhbCBzZWFyY2ggdXBkYXRlcy5cbiAqIEBleHRlbmRzIENvbXBvbmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkYXRhIHN0b3JhZ2Uga2V5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuTkFWSUdBVElPTjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBoYW5kbGViYXJzIHRlbXBsYXRlIHRvIHVzZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAnbmF2aWdhdGlvbi9uYXZpZ2F0aW9uJztcblxuICAgIC8qKlxuICAgICAqIFVub3JkZXJlZCBtYXAgb2YgZWFjaCB0YWIsIGtleWVkIGJ5IFZTIGNvbmZpZ0lkXG4gICAgICogQHR5cGUge09iamVjdC48U3RyaW5nLCBPYmplY3Q+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGFicyA9IFRhYi5mcm9tKGNvbmZpZy50YWJzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcmRlciBvZiB0aGUgdGFicywgcGFyc2VkIGZyb20gY29uZmlndXJhdGlvbiBvciBVUkwuXG4gICAgICogVGhpcyBnZXRzIHVwZGF0ZWQgYmFzZWQgb24gdGhlIHNlcnZlciByZXN1bHRzXG4gICAgICogQHR5cGUge0FycmF5LjxTdHJpbmc+fSBUaGUgbGlzdCBvZiBWUyBjb25maWdJZHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RhYk9yZGVyID0gdGhpcy5nZXREZWZhdWx0VGFiT3JkZXIoY29uZmlnLnRhYnMsIHRoaXMuZ2V0VXJsUGFyYW1zKCkpO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ05hdmlnYXRpb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbmNlIHRoZSBzZXJ2ZXIgZGF0YSBvbmx5IHByb3ZpZGVzIGEgbGlzdCBvZlxuICAgKiBWUyBjb25maWdJZHMsIHdlIG5lZWQgdG8gY29tcHV0ZSBhbmQgdHJhbnNmb3JtXG4gICAqIHRoZSBkYXRhIGludG8gdGhlIHByb3BlciBmb3JtYXQgZm9yIHJlbmRlcmluZy5cbiAgICpcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIGlmIChkYXRhLnRhYk9yZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3RhYk9yZGVyID0gdGhpcy5tZXJnZVRhYk9yZGVyKGRhdGEudGFiT3JkZXIsIHRoaXMuX3RhYk9yZGVyKTtcbiAgICB9XG5cbiAgICAvLyBTaW5jZSB0aGUgdGFiIG9yZGVyaW5nIGNhbiBjaGFuZ2UgYmFzZWQgb24gdGhlIHNlcnZlciBkYXRhXG4gICAgLy8gd2UgbmVlZCB0byB1cGRhdGUgZWFjaCB0YWJzIFVSTCB0byBpbmNsdWRlIHRoZSBvcmRlciBhcyBwYXJ0IG9mIHRoZWlyIHBhcmFtcy5cbiAgICAvLyBUaGlzIGhlbHBzIHdpdGggcGVyc2lzdGluZyBzdGF0ZSBhY3Jvc3MgdmVydGljYWxzLlxuICAgIGxldCB0YWJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90YWJPcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRhYiA9IHRoaXMuX3RhYnNbdGhpcy5fdGFiT3JkZXJbaV1dO1xuICAgICAgaWYgKHRhYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhYi51cmwgPSB0aGlzLmdlbmVyYXRlVGFiVXJsKHRhYi5iYXNlVXJsLCB0aGlzLmdldFVybFBhcmFtcygpKTtcbiAgICAgICAgdGFicy5wdXNoKHRhYik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKHtcbiAgICAgIHRhYnM6IHRhYnNcbiAgICB9KTtcbiAgfVxuXG4gIGdldFVybFBhcmFtcyAoKSB7XG4gICAgcmV0dXJuIG5ldyBTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldERlZmF1bHRUYWJPcmRlciB3aWxsIGNvbXB1dGUgdGhlIGluaXRpYWwgdGFiIG9yZGVyaW5nIGJhc2VkXG4gICAqIG9uIGEgY29tYmluYXRpb24gb2YgdGhlIGNvbmZpZ3VyYXRpb24gcHJvdmlkZWQgZGlyZWN0bHkgdG8gdGhlIGNvbXBvbmVudFxuICAgKiBhbmQgdGhlIHVybCBwYXJhbXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0W119IHRhYnNDb25maWdcbiAgICogQHBhcmFtIHtTZWFyY2hQYXJhbXN9XG4gICAqL1xuICBnZXREZWZhdWx0VGFiT3JkZXIgKHRhYnNDb25maWcsIHVybFBhcmFtcykge1xuICAgIGxldCB0YWJPcmRlciA9IFtdO1xuXG4gICAgLy8gVXNlIHRoZSBvcmRlcmluZyBmcm9tIHRoZSBVUkwgYXMgdGhlIHByaW1hcnkgY29uZmlndXJhdGlvblxuICAgIC8vIEFuZCB0aGVuIG1lcmdlIGl0IHdpdGggdGhlIGxvY2FsIGNvbmZpZ3VyYXRpb24sIGlmIHByb3ZpZGVkLlxuICAgIGlmICh1cmxQYXJhbXMgJiYgdXJsUGFyYW1zLmhhcygndGFiT3JkZXInKSkge1xuICAgICAgdGFiT3JkZXIgPSB1cmxQYXJhbXMuZ2V0KCd0YWJPcmRlcicpLnNwbGl0KCcsJyk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzQ29uZmlnLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YWIgPSB0YWJzQ29uZmlnW2ldO1xuICAgICAgLy8gU29tZSB0YWJzIGRvbid0IGhhdmUgY29uZmlnSWQsIHNvIHdlIG1hcCBpdCBmcm9tIFVSTFxuICAgICAgaWYgKHRhYi5jb25maWdJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhYi5jb25maWdJZCA9IHRhYi51cmw7XG4gICAgICB9XG5cbiAgICAgIC8vIEF2b2lkIGR1cGxpY2F0ZXMgaWYgY29uZmlnIHdhcyBwcm92aWRlZCBmcm9tIFVSTFxuICAgICAgaWYgKHRhYk9yZGVyLmluY2x1ZGVzKHRhYi5jb25maWdJZCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIGlzRmlyc3Qgc2hvdWxkIGFsd2F5cyBiZSB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgbGlzdFxuICAgICAgaWYgKHRhYi5pc0ZpcnN0KSB7XG4gICAgICAgIHRhYk9yZGVyLnVuc2hpZnQodGFiLmNvbmZpZ0lkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhYk9yZGVyLnB1c2godGFiLmNvbmZpZ0lkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFiT3JkZXI7XG4gIH1cblxuICAvKipcbiAgICogbWVyZ2VUYWJPcmRlciBtZXJnZXMgdHdvIGFycmF5cyBpbnRvIG9uZVxuICAgKiBieSBhcHBlbmRpbmcgYWRkaXRpb25hbCB0YWJzIHRvIHRoZSBlbmQgb2YgdGhlIG9yaWdpbmFsIGFycmF5XG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHRhYk9yZGVyIFRhYiBvcmRlciBwcm92aWRlZCBieSB0aGUgc2VydmVyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IG90aGVyVGFiT3JkZXIgVGFiIG9yZGVyIHByb3ZpZGVkIGJ5IGNvbmZpZ3VyYXRpb25cbiAgICogQHJldHVybiB7c3RyaW5nW119XG4gICAqL1xuICBtZXJnZVRhYk9yZGVyICh0YWJPcmRlciwgb3RoZXJUYWJPcmRlcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3RoZXJUYWJPcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGFiQ29uZmlnID0gb3RoZXJUYWJPcmRlcltpXTtcbiAgICAgIGlmICh0YWJPcmRlci5pbmNsdWRlcyh0YWJDb25maWcpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBpc0ZpcnN0IHNob3VsZCBiZSBhbiBvdmVycmlkZSB0byBkeW5hbWljIHRhYiBvcmRlcmluZy5cbiAgICAgIGlmICh0aGlzLl90YWJzW3RhYkNvbmZpZ10gJiYgdGhpcy5fdGFic1t0YWJDb25maWddLmlzRmlyc3QpIHtcbiAgICAgICAgdGFiT3JkZXIudW5zaGlmdCh0YWJDb25maWcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFiT3JkZXIucHVzaCh0YWJDb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YWJPcmRlcjtcbiAgfVxuXG4gIGdlbmVyYXRlVGFiVXJsIChiYXNlVXJsLCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCkpIHtcbiAgICAvLyBXZSB3YW50IHRvIHBlcnNpc3QgdGhlIHBhcmFtcyBmcm9tIHRoZSBleGlzdGluZyBVUkwgdG8gdGhlIG5ld1xuICAgIC8vIFVSTFMgd2UgY3JlYXRlLlxuICAgIHBhcmFtcy5zZXQoJ3RhYk9yZGVyJywgdGhpcy5fdGFiT3JkZXIpO1xuICAgIHJldHVybiBiYXNlVXJsICsgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZpbHRlciAqL1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gYXBpIGZpbHRlciBhbmQgcHJvdmlkZXMgc3RhdGljIG1ldGhvZHMgZm9yIGVhc2lseSBjb25zdHJ1Y3RpbmcgRmlsdGVycy5cbiAqIFNlZSBodHRwczovL2RldmVsb3Blci55ZXh0LmNvbS9kb2NzL2FwaS1yZWZlcmVuY2UvI29wZXJhdGlvbi9saXN0RW50aXRpZXMgZm9yIHN0cnVjdHVyZSBkZXRhaWxzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlciB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgYSBKU09OIGZvcm1hdCBmaWx0ZXIgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyIGludG8gYSBGaWx0ZXJcbiAgICogQHBhcmFtIHsqfSByZXNwb25zZUZpbHRlciBBIGZpbHRlciBpbiBKU09OIGZvcm1hdCByZXR1cm5lZCBmcm9tIHRoZSBiYWNrZW5kXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZnJvbVJlc3BvbnNlIChyZXNwb25zZUZpbHRlcikge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKEpTT04ucGFyc2UocmVzcG9uc2VGaWx0ZXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBuZXcgRmlsdGVyIHJlcHJlc2VudGluZyB0aGUgT1Igb2YgYWxsIHByb3ZpZGVkIGZpbHRlcnNcbiAgICogQHBhcmFtICB7Li4uRmlsdGVyfSBmaWx0ZXJzIFRoZSBmaWx0ZXJzIHRvIE9SIHRvZ2V0aGVyXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgb3IgKC4uLmZpbHRlcnMpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcih7XG4gICAgICAnJG9yJzogZmlsdGVyc1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIG5ldyBGaWx0ZXIgcmVwcmVzZW50aW5nIHRoZSBBTkQgb2YgYWxsIHByb3ZpZGVkIGZpbHRlcnNcbiAgICogQHBhcmFtICB7Li4uRmlsdGVyfSBmaWx0ZXJzIFRoZSBmaWx0ZXJzIHRvIEFORCB0b2dldGhlclxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGFuZCAoLi4uZmlsdGVycykge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgICckYW5kJzogZmlsdGVyc1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE9SIGZpbHRlcnMgd2l0aCB0aGUgc2FtZSBrZXlzLCB0aGVuIEFORCB0aGUgcmVzdWx0aW5nIGdyb3Vwc1xuICAgKiBAcGFyYW0gIHsuLi5GaWx0ZXJ9IGZpbHRlcnMgVGhlIGZpbHRlcnMgdG8gZ3JvdXBcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBncm91cCAoLi4uZmlsdGVycykge1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGZvciAoY29uc3QgZmlsdGVyIG9mIGZpbHRlcnMpIHtcbiAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKGZpbHRlcilbMF07XG4gICAgICBpZiAoIWdyb3Vwc1trZXldKSB7XG4gICAgICAgIGdyb3Vwc1trZXldID0gW107XG4gICAgICB9XG4gICAgICBncm91cHNba2V5XS5wdXNoKGZpbHRlcik7XG4gICAgfVxuXG4gICAgY29uc3QgZ3JvdXBGaWx0ZXJzID0gW107XG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiBPYmplY3Qua2V5cyhncm91cHMpKSB7XG4gICAgICBncm91cEZpbHRlcnMucHVzaChncm91cHNbZmllbGRdLmxlbmd0aCA+IDEgPyBGaWx0ZXIub3IoLi4uZ3JvdXBzW2ZpZWxkXSkgOiBncm91cHNbZmllbGRdWzBdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ3JvdXBGaWx0ZXJzLmxlbmd0aCA+IDEgPyBGaWx0ZXIuYW5kKC4uLmdyb3VwRmlsdGVycykgOiBncm91cEZpbHRlcnNbMF07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwiZXF1YWwgdG9cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBlcXVhbCB0b1xuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGVxdWFsIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRlcScsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJsZXNzIHRoYW5cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBsZXNzIHRoYW5cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBsZXNzVGhhbiAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckbHQnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwibGVzcyB0aGFuIG9yIGVxdWFsIHRvXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgbGVzc1RoYW5FcXVhbCAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckbGUnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwiZ3JlYXRlciB0aGFuXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ3JlYXRlclRoYW4gKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGd0JywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0b1wiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0b1xuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGdyZWF0ZXJUaGFuRXF1YWwgKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGdlJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBpbmNsdXNpdmUgcmFuZ2UgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gbWluIFRoZSBtaW5pbXVtIHZhbHVlIG9mIHRoZSByYW5nZVxuICAgKiBAcGFyYW0geyp9IG1heCBUaGUgbWF4aW11bSB2YWx1ZSBvZiB0aGUgcmFuZ2VyXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgcmFuZ2UgKGZpZWxkLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBGaWx0ZXIuYW5kKEZpbHRlci5ncmVhdGVyVGhhbkVxdWFsKGZpZWxkLCBtaW4pLCBGaWx0ZXIubGVzc1RoYW5FcXVhbChmaWVsZCwgbWF4KSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IGZpbHRlciB3aXRoIHRoZSBnaXZlbiBtYXRjaGVyXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtYXRjaGVyIFRoZSBtYXRjaGVyIGZvciB0aGUgZmlsZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgZm9yIHRoZSBmaWx0ZXJcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBfZnJvbU1hdGNoZXIgKGZpZWxkLCBtYXRjaGVyLCB2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgRmlsdGVyKHtcbiAgICAgIFtmaWVsZF06IHtcbiAgICAgICAgW21hdGNoZXJdOiB2YWx1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi9kb20vc2VhcmNocGFyYW1zJztcblxuLyoqXG4gKiBTZWFyY2hDb21wb25lbnQgZXhwb3NlcyBhbiBpbnRlcmZhY2UgaW4gb3JkZXIgdG8gY3JlYXRlXG4gKiBhIFVJIFNlYXJjaCBleHBlcmllbmNlIGZvciB2ZXJ0aWNhbCBhbmQgdW5pdmVyc2FsIHNlYXJjaC5cbiAqXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIG5hbWUgdG8gdXNlIGZvciByZW5kZXJpbmcgd2l0aCBoYW5kbGViYXJzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAnc2VhcmNoL3NlYXJjaCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgaW5wdXQga2V5IGZvciB0aGUgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBJZiBub3QgcHJvdmlkZWQsIGF1dG8tY29tcGxldGUgYW5kIHNlYXJjaCB3aWxsIGJlIGJhc2VkIG9uIHVuaXZlcnNhbFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYmFyS2V5ID0gb3B0cy5iYXJLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCB2ZXJ0aWNhbCBrZXkgZm9yIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCBhdXRvLWNvbXBsZXRlIGFuZCBzZWFyY2ggd2lsbCBiZSBiYXNlZCBvbiB1bml2ZXJzYWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gb3B0cy52ZXJ0aWNhbEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogUXVlcnkgc3VibWlzc2lvbiBpcyBiYXNlZCBvbiBhIGZvcm0gYXMgY29udGV4dC5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gbmF0aXZlIGZvcm0gbm9kZSB3aXRoaW4gY29udGFpbmVyXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5fZm9ybUVsID0gb3B0cy5mb3JtU2VsZWN0b3IgfHwgJ2Zvcm0nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlucHV0IGVsZW1lbnQgdXNlZCBmb3Igc2VhcmNoaW5nIGFuZCB3aXJlcyB1cCB0aGUga2V5Ym9hcmQgaW50ZXJhY3Rpb25cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2lucHV0RWwgPSBvcHRzLmlucHV0RWwgfHwgJy5qcy15ZXh0LXF1ZXJ5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB1c2VkLCBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgYXMgYSBkYXRhIHBvaW50XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudGl0bGUgPSBvcHRzLnRpdGxlIHx8ICdBbnN3ZXJzIFVuaXZlcnNhbCBTZWFyY2gnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlYXJjaCB0ZXh0IHVzZWQgZm9yIGxhYmVsaW5nIHRoZSBpbnB1dCBib3gsIGFsc28gcHJvdmlkZWQgdG8gdGVtcGxhdGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gb3B0cy5zZWFyY2hUZXh0IHx8ICdXaGF0IGFyZSB5b3UgaW50ZXJlc3RlZCBpbj8nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHRleHQgdG8gc2hvdyBhcyB0aGUgZmlyc3QgaXRlbSBmb3IgYXV0byBjb21wbGV0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnByb21wdEhlYWRlciA9IG9wdHMucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBdXRvIGZvY3VzZXMgdGhlIGlucHV0IGJveCBpZiBzZXQgdG8gdHJ1ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBkZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9Gb2N1cyA9IG9wdHMuYXV0b0ZvY3VzID09PSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogc3VibWl0VVJMIHdpbGwgZm9yY2UgdGhlIHNlYXJjaCBxdWVyeSBzdWJtaXNzaW9uIHRvIGdldFxuICAgICAqIHJlZGlyZWN0ZWQgdG8gdGhlIFVSTCBwcm92aWRlZC5cbiAgICAgKiBPcHRpb25hbCwgZGVmYXVsdHMgdG8gbnVsbC5cbiAgICAgKlxuICAgICAqIElmIG5vIHJlZGlyZWN0VXJsIHByb3ZpZGVkLCB3ZSBrZWVwIHRoZSBwYWdlIGFzIGEgc2luZ2xlIHBhZ2UgYXBwLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZWRpcmVjdFVybCA9IG9wdHMucmVkaXJlY3RVcmwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSBzdHJpbmcgdG8gdXNlIGZvciB0aGUgaW5wdXQgYm94LCBwcm92aWRlZCB0byB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlcnkgPSBvcHRzLnF1ZXJ5IHx8IHRoaXMuZ2V0VXJsUGFyYW1zKCkuZ2V0KCdxdWVyeScpIHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1NlYXJjaEJhcic7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgaWYgKHRoaXMucXVlcnkgJiYgdGhpcy5xdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNvcmUuc2V0UXVlcnkodGhpcy5xdWVyeSk7XG4gICAgICB0aGlzLnNlYXJjaCh0aGlzLnF1ZXJ5KTtcbiAgICB9XG5cbiAgICB0aGlzLmJpbmRCcm93c2VySGlzdG9yeSgpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgLy8gV2lyZSB1cCBvdXIgc2VhcmNoIGhhbmRsaW5nIGFuZCBhdXRvIGNvbXBsZXRlXG4gICAgdGhpcy5pbml0U2VhcmNoKHRoaXMuX2Zvcm1FbCk7XG4gICAgdGhpcy5pbml0QXV0b0NvbXBsZXRlKHRoaXMuX2lucHV0RWwpO1xuXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzID09PSB0cnVlICYmIHRoaXMucXVlcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gdXNlIGZvciB3aXJpbmcgdXAgc2VhcmNoaW5nIG9uIGZvcm0gc3VibWlzc2lvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybVNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBzdWJtaXQgaGFuZGxpbmcgdG9cbiAgICovXG4gIGluaXRTZWFyY2ggKGZvcm1TZWxlY3Rvcikge1xuICAgIHRoaXMuX2Zvcm1FbCA9IGZvcm1TZWxlY3RvcjtcblxuICAgIGxldCBmb3JtID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgZm9ybVNlbGVjdG9yKTtcbiAgICBpZiAoIWZvcm0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGluaXRpYWxpemUgU2VhcmNoQmFyOyBDYW4gbm90IGZpbmQge0hUTUxFbGVtZW50fSBgJywgdGhpcy5fZm9ybUVsLCAnYC4nKTtcbiAgICB9XG5cbiAgICBET00ub24oZm9ybSwgJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGxldCBxdWVyeSA9IGZvcm0ucXVlcnlTZWxlY3Rvcih0aGlzLl9pbnB1dEVsKS52YWx1ZTtcbiAgICAgIGxldCBwYXJhbXMgPSB0aGlzLmdldFVybFBhcmFtcygpO1xuICAgICAgcGFyYW1zLnNldCgncXVlcnknLCBxdWVyeSk7XG5cbiAgICAgIC8vIElmIHdlIGhhdmUgYSByZWRpcmVjdFVybCwgd2Ugd2FudCB0aGUgZm9ybSB0byBiZVxuICAgICAgLy8gc2VyaWFsaXplZCBhbmQgc3VibWl0dGVkLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlZGlyZWN0VXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMucmVkaXJlY3RVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe1xuICAgICAgICBxdWVyeTogcXVlcnlcbiAgICAgIH0sIHF1ZXJ5LCAnPycgKyBwYXJhbXMudG9TdHJpbmcoKSk7XG5cbiAgICAgIHRoaXMuY29yZS5zZXRRdWVyeShxdWVyeSk7XG4gICAgICB0aGlzLnNlYXJjaChxdWVyeSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHdpcmUgdXAgb3VyIGF1dG8gY29tcGxldGUgb24gYW4gaW5wdXQgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIGF1dG8gY29tcGxldGUgY29tcG9uZW50IHRvXG4gICAqL1xuICBpbml0QXV0b0NvbXBsZXRlIChpbnB1dFNlbGVjdG9yKSB7XG4gICAgdGhpcy5faW5wdXRFbCA9IGlucHV0U2VsZWN0b3I7XG5cbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKCdBdXRvQ29tcGxldGUnLCB7XG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmF1dG9jb21wbGV0ZWAsXG4gICAgICBjb250YWluZXI6ICcueWV4dC1zZWFyY2gtYXV0b2NvbXBsZXRlJyxcbiAgICAgIGJhcktleTogdGhpcy5fYmFyS2V5LFxuICAgICAgdmVydGljYWxLZXk6IHRoaXMuX3ZlcnRpY2FsS2V5LFxuICAgICAgcHJvbXB0SGVhZGVyOiB0aGlzLnByb21wdEhlYWRlcixcbiAgICAgIG9yaWdpbmFsUXVlcnk6IHRoaXMucXVlcnksXG4gICAgICBpbnB1dEVsOiBpbnB1dFNlbGVjdG9yLFxuICAgICAgb25TdWJtaXQ6ICgpID0+IHtcbiAgICAgICAgRE9NLnRyaWdnZXIoJ2Zvcm0nLCAnc3VibWl0Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZWFyY2ggKHF1ZXJ5KSB7XG4gICAgaWYgKHRoaXMuX3ZlcnRpY2FsS2V5KSB7XG4gICAgICBjb25zdCBhbGxGaWx0ZXJzID0gdGhpcy5jb3JlLnN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgICBjb25zdCB0b3RhbEZpbHRlciA9IGFsbEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgICA/IEZpbHRlci5hbmQoLi4uYWxsRmlsdGVycylcbiAgICAgICAgOiBhbGxGaWx0ZXJzWzBdO1xuICAgICAgcmV0dXJuIHRoaXMuY29yZS52ZXJ0aWNhbFNlYXJjaChxdWVyeSwgdGhpcy5fdmVydGljYWxLZXksIEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5PVEUoYmlsbHkpIFRlbXBvcmFyeSBoYWNrIGZvciBERU1PXG4gICAgICAvLyBSZW1vdmUgbWUgYWZ0ZXIgdGhlIGRlbW9cbiAgICAgIGxldCBuYXYgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXJcbiAgICAgICAgLmdldEFjdGl2ZUNvbXBvbmVudCgnTmF2aWdhdGlvbicpO1xuXG4gICAgICBpZiAobmF2KSB7XG4gICAgICAgIGxldCB0YWJzID0gbmF2LmdldFN0YXRlKCd0YWJzJyk7XG4gICAgICAgIGxldCB1cmxzID0ge307XG5cbiAgICAgICAgaWYgKHRhYnMgJiYgQXJyYXkuaXNBcnJheSh0YWJzKSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHRoaXMuZ2V0VXJsUGFyYW1zKHRhYnNbaV0udXJsLnNwbGl0KCc/JylbMV0pO1xuICAgICAgICAgICAgcGFyYW1zLnNldCgncXVlcnknLCBxdWVyeSk7XG5cbiAgICAgICAgICAgIGxldCB1cmwgPSB0YWJzW2ldLmJhc2VVcmw7XG4gICAgICAgICAgICBpZiAocGFyYW1zLnRvU3RyaW5nKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICB1cmwgKz0gJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cmxzW3RhYnNbaV0uY29uZmlnSWRdID0gdXJsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb3JlLnNlYXJjaChxdWVyeSwgdXJscyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvcmUuc2VhcmNoKHF1ZXJ5KTtcbiAgICB9XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgc2VhcmNoVGV4dDogdGhpcy5zZWFyY2hUZXh0LFxuICAgICAgcXVlcnk6IHRoaXMucXVlcnlcbiAgICB9LCBkYXRhKSk7XG4gIH1cblxuICBnZXRVcmxQYXJhbXMgKHVybCkge1xuICAgIHVybCA9IHVybCB8fCB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTtcbiAgICByZXR1cm4gbmV3IFNlYXJjaFBhcmFtcyh1cmwpO1xuICB9XG5cbiAgYmluZEJyb3dzZXJIaXN0b3J5ICgpIHtcbiAgICBET00ub24od2luZG93LCAncG9wc3RhdGUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5nZXRVcmxQYXJhbXMoKS5nZXQoJ3F1ZXJ5Jyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcXVlcnk6IHRoaXMucXVlcnlcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNvcmUuc2V0UXVlcnkodGhpcy5xdWVyeSk7XG5cbiAgICAgIHRoaXMuc2VhcmNoKHRoaXMucXVlcnkpO1xuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXJTZWFyY2hDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IFNlYXJjaFBhcmFtcyBmcm9tICcuLi8uLi9kb20vc2VhcmNocGFyYW1zJztcblxuLyoqXG4gKiBGaWx0ZXJTZWFyY2hDb21wb25lbnQgaXMgdXNlZCBmb3IgYXV0b2NvbXBsZXRlIHVzaW5nIHRoZSBGaWx0ZXJTZWFyY2ggYmFja2VuZC5cbiAqIEl0J2xsIGFsbG93IHlvdSB0byBwaWNrIHByZS1zZXQgZmlsdGVycyB0aGF0IGFyZSBzZXR1cCBvbiB0aGUgYmFja2VuZCB3aXRoaW5cbiAqIGEgdmVydGljYWwgc2VhcmNoIGNvbnRleHQuXG4gKlxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlclNlYXJjaENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSBuYW1lIHRvIHVzZSBmb3IgcmVuZGVyaW5nIHdpdGggaGFuZGxlYmFyc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3NlYXJjaC9maWx0ZXJzZWFyY2gnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlucHV0IGtleSBmb3IgdGhlIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9iYXJLZXkgPSBvcHRzLmJhcktleSB8fCBvcHRzLmlucHV0S2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVydGljYWwga2V5IGZvciB2ZXJ0aWNhbCBzZWFyY2ggY29uZmlndXJhdGlvblxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBvcHRzLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBRdWVyeSBzdWJtaXNzaW9uIGlzIGJhc2VkIG9uIGEgZm9ybSBhcyBjb250ZXh0LlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBuYXRpdmUgZm9ybSBub2RlIHdpdGhpbiBjb250YWluZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9mb3JtRWwgPSBvcHRzLmZvcm1TZWxlY3RvciB8fCAnZm9ybSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5wdXQgZWxlbWVudCB1c2VkIGZvciBzZWFyY2hpbmcgYW5kIHdpcmVzIHVwIHRoZSBrZXlib2FyZCBpbnRlcmFjdGlvblxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5faW5wdXRFbCA9IG9wdHMuaW5wdXRFbCB8fCAnLmpzLXlleHQtcXVlcnknO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIHVzZWQsIHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZSBhcyBhIGRhdGEgcG9pbnRcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy50aXRsZSA9IG9wdHMudGl0bGU7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VhcmNoIHRleHQgdXNlZCBmb3IgbGFiZWxpbmcgdGhlIGlucHV0IGJveCwgYWxzbyBwcm92aWRlZCB0byB0ZW1wbGF0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnNlYXJjaFRleHQgPSBvcHRzLnNlYXJjaFRleHQgfHwgJ1doYXQgYXJlIHlvdSBpbnRlcmVzdGVkIGluPyc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgdGV4dCB0byBzaG93IGFzIHRoZSBmaXJzdCBpdGVtIGZvciBhdXRvIGNvbXBsZXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucHJvbXB0SGVhZGVyID0gb3B0cy5wcm9tcHRIZWFkZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEF1dG8gZm9jdXNlcyB0aGUgaW5wdXQgYm94IGlmIHNldCB0byB0cnVlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIGRlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuYXV0b0ZvY3VzID0gb3B0cy5hdXRvRm9jdXMgPT09IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBzdWJtaXRVUkwgd2lsbCBmb3JjZSB0aGUgc2VhcmNoIHF1ZXJ5IHN1Ym1pc3Npb24gdG8gZ2V0XG4gICAgICogcmVkaXJlY3RlZCB0byB0aGUgVVJMIHByb3ZpZGVkLlxuICAgICAqIE9wdGlvbmFsLCBkZWZhdWx0cyB0byBudWxsLlxuICAgICAqXG4gICAgICogSWYgbm8gcmVkaXJlY3RVcmwgcHJvdmlkZWQsIHdlIGtlZXAgdGhlIHBhZ2UgYXMgYSBzaW5nbGUgcGFnZSBhcHAuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLnJlZGlyZWN0VXJsID0gb3B0cy5yZWRpcmVjdFVybCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHN0cmluZyB0byB1c2UgZm9yIHRoZSBpbnB1dCBib3gsIHByb3ZpZGVkIHRvIHRlbXBsYXRlIGZvciByZW5kZXJpbmcuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5xdWVyeSA9IG9wdHMucXVlcnkgfHwgdGhpcy5nZXRVcmxQYXJhbXMoKS5nZXQoYCR7dGhpcy5uYW1lfS5xdWVyeWApIHx8ICcnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpbHRlciBzdHJpbmcgdG8gdXNlIGZvciB0aGUgcHJvdmlkZWQgcXVlcnlcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmZpbHRlciA9IG9wdHMuZmlsdGVyIHx8IHRoaXMuZ2V0VXJsUGFyYW1zKCkuZ2V0KGAke3RoaXMubmFtZX0uZmlsdGVyYCkgfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRmlsdGVyU2VhcmNoJztcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICBpZiAodGhpcy5xdWVyeSAmJiB0aGlzLnF1ZXJ5Lmxlbmd0aCA+IDAgJiYgdGhpcy5maWx0ZXIgJiYgdGhpcy5maWx0ZXIubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy5nZXRVcmxQYXJhbXMoKTtcbiAgICAgIHBhcmFtcy5zZXQoYCR7dGhpcy5uYW1lfS5xdWVyeWAsIHRoaXMucXVlcnkpO1xuICAgICAgcGFyYW1zLnNldChgJHt0aGlzLm5hbWV9LmZpbHRlcmAsIHRoaXMuZmlsdGVyKTtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsICc/JyArIHBhcmFtcy50b1N0cmluZygpKTtcbiAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBGaWx0ZXIuZnJvbVJlc3BvbnNlKHRoaXMuZmlsdGVyKSk7XG4gICAgICB0aGlzLnNlYXJjaCgpO1xuICAgIH1cblxuICAgIHRoaXMuYmluZEJyb3dzZXJIaXN0b3J5KCk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICAvLyBXaXJlIHVwIG91ciBzZWFyY2ggaGFuZGxpbmcgYW5kIGF1dG8gY29tcGxldGVcbiAgICB0aGlzLmluaXRBdXRvQ29tcGxldGUodGhpcy5faW5wdXRFbCk7XG5cbiAgICBpZiAodGhpcy5hdXRvRm9jdXMgPT09IHRydWUgJiYgdGhpcy5xdWVyeS5sZW5ndGggPT09IDApIHtcbiAgICAgIERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2lucHV0RWwpLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgaGVscGVyIG1ldGhvZCB0byB3aXJlIHVwIG91ciBhdXRvIGNvbXBsZXRlIG9uIGFuIGlucHV0IHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBhdXRvIGNvbXBsZXRlIGNvbXBvbmVudCB0b1xuICAgKi9cbiAgaW5pdEF1dG9Db21wbGV0ZSAoaW5wdXRTZWxlY3Rvcikge1xuICAgIHRoaXMuX2lucHV0RWwgPSBpbnB1dFNlbGVjdG9yO1xuXG4gICAgdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZSgnQXV0b0NvbXBsZXRlJywge1xuICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfS5hdXRvY29tcGxldGVgLFxuICAgICAgaXNGaWx0ZXJTZWFyY2g6IHRydWUsXG4gICAgICBjb250YWluZXI6ICcueWV4dC1zZWFyY2gtYXV0b2NvbXBsZXRlJyxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5wcm9tcHRIZWFkZXIsXG4gICAgICBvcmlnaW5hbFF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgb3JpZ2luYWxGaWx0ZXI6IHRoaXMuZmlsdGVyLFxuICAgICAgaW5wdXRFbDogaW5wdXRTZWxlY3RvcixcbiAgICAgIHZlcnRpY2FsS2V5OiB0aGlzLl92ZXJ0aWNhbEtleSxcbiAgICAgIGJhcktleTogdGhpcy5fYmFyS2V5LFxuICAgICAgb25TdWJtaXQ6IChxdWVyeSwgZmlsdGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuZ2V0VXJsUGFyYW1zKCk7XG4gICAgICAgIHBhcmFtcy5zZXQoYCR7dGhpcy5uYW1lfS5xdWVyeWAsIHF1ZXJ5KTtcbiAgICAgICAgcGFyYW1zLnNldChgJHt0aGlzLm5hbWV9LmZpbHRlcmAsIGZpbHRlcik7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHJlZGlyZWN0VXJsLCB3ZSB3YW50IHRoZSBwYXJhbXMgdG8gYmVcbiAgICAgICAgLy8gc2VyaWFsaXplZCBhbmQgc3VibWl0dGVkLlxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucmVkaXJlY3RVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLnJlZGlyZWN0VXJsICsgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCkpO1xuXG4gICAgICAgIC8vIHNhdmUgdGhlIGZpbHRlciB0byBzdG9yYWdlIGZvciB0aGUgbmV4dCBzZWFyY2hcbiAgICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIEZpbHRlci5mcm9tUmVzcG9uc2UoZmlsdGVyKSk7XG4gICAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybSB0aGUgdmVydGljYWwgc2VhcmNoIHdpdGggYWxsIHNhdmVkIGZpbHRlcnMgYW5kIHF1ZXJ5LFxuICAgKiBvcHRpb25hbGx5IHJlZGlyZWN0aW5nIGJhc2VkIG9uIGNvbmZpZ1xuICAgKi9cbiAgc2VhcmNoICgpIHtcbiAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5jb3JlLnN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgbGV0IHRvdGFsRmlsdGVyID0gZmlsdGVyc1swXTtcbiAgICBpZiAoZmlsdGVycy5sZW5ndGggPiAxKSB7XG4gICAgICB0b3RhbEZpbHRlciA9IEZpbHRlci5hbmQoLi4uZmlsdGVycyk7XG4gICAgfVxuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gdGhpcy5jb3JlLnN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpIHx8ICcnO1xuXG4gICAgdGhpcy5jb3JlLnZlcnRpY2FsU2VhcmNoKHNlYXJjaFF1ZXJ5LCB0aGlzLl92ZXJ0aWNhbEtleSwgSlNPTi5zdHJpbmdpZnkodG90YWxGaWx0ZXIpKTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBzZWFyY2hUZXh0OiB0aGlzLnNlYXJjaFRleHQsXG4gICAgICBxdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXJcbiAgICB9LCBkYXRhKSk7XG4gIH1cblxuICBnZXRVcmxQYXJhbXMgKHVybCkge1xuICAgIHVybCA9IHVybCB8fCB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTtcbiAgICByZXR1cm4gbmV3IFNlYXJjaFBhcmFtcyh1cmwpO1xuICB9XG5cbiAgYmluZEJyb3dzZXJIaXN0b3J5ICgpIHtcbiAgICBET00ub24od2luZG93LCAncG9wc3RhdGUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5nZXRVcmxQYXJhbXMoKS5nZXQoYCR7dGhpcy5uYW1lfS5xdWVyeWApO1xuICAgICAgdGhpcy5maWx0ZXIgPSB0aGlzLmdldFVybFBhcmFtcygpLmdldChgJHt0aGlzLm5hbWV9LmZpbHRlcmApO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgICBmaWx0ZXI6IHRoaXMuZmlsdGVyXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fc2F2ZVF1ZXJ5QW5kRmlsdGVyKHRoaXMucXVlcnksIHRoaXMuZmlsdGVyKTtcbiAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEF1dG9Db21wbGV0ZUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbmNvbnN0IEtleXMgPSB7XG4gIEJBQ0tTUEFDRTogOCxcbiAgVEFCOiA5LFxuICBFTlRFUjogMTMsXG4gIFNISUZUOiAxNixcbiAgQ1RSTDogMTcsXG4gIEFMVDogMTgsXG4gIEVTQ0FQRTogMjcsXG5cbiAgTEVGVDogMzcsXG4gIFJJR0hUOiAzOSxcbiAgVVA6IDM4LFxuXG4gIERFTEVURTogNDYsXG4gIERPV046IDQwLFxuICBMRUZUX09TX0tFWTogOTEsXG4gIFJJR0hUX09TX0tFWTogOTIsXG4gIFNFTEVDVF9LRVk6IDkzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIGF1dG9jb21wbGV0ZSBpcyBzaW1wbGUgb3IgZmlsdGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc0ZpbHRlclNlYXJjaCA9IG9wdHMuaXNGaWx0ZXJTZWFyY2ggfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYGJhcktleWAgaW4gdGhlIHZlcnRpY2FsIHNlYXJjaCB0byB1c2UgZm9yIGF1dG8tY29tcGxldGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2JhcktleSA9IG9wdHMuYmFyS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYHZlcnRpY2FsS2V5YCBvZiB0aGUgdmVydGljYWwgc2VhcmNoIHRvIHVzZSBmb3IgYXV0by1jb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBvcHRzLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgaW5wdXQgZWwgc2VsZWN0b3IgZm9yIGF1dG8gY29tcGxldGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2lucHV0RWwgPSBvcHRzLmlucHV0RWwgfHwgJy5qcy15ZXh0LXF1ZXJ5JztcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSBmb3IgdGhlIGRhdGEtc3RvcmFnZSB0byBsaXN0ZW4gZm9yIHVwZGF0ZXMgZnJvbSB0aGUgc2VydmVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke3RoaXMubmFtZX1gO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlZmF1bHQgaGFuZGxlYmFycyB0ZW1wbGF0ZSBuYW1lIHRvIHVzZSBmb3IgcmVuZGVyaW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAnc2VhcmNoL2F1dG9jb21wbGV0ZSc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGlucHV0IHZhbHVlIHdoZW4gdHlwaW5nLlxuICAgICAqIFdlIHVzZSB0aGlzIGZvciByZXNldHRpbmcgdGhlIHN0YXRlIG9mIHRoZSBpbnB1dCB2YWx1ZSB3aGVuIG90aGVyIGludGVyYWN0aW9ucyAoZS5nLiByZXN1bHQgbmF2aWdhdGlvbilcbiAgICAgKiBjaGFuZ2UgYmFzZWQgb24gaW50ZXJhY3Rpb25zLiBGb3IgaW5zdGFuY2UsIGhpdHRpbmcgZXNjYXBlIHNob3VsZCByZXNldCB0aGUgdmFsdWUgdG8gdGhlIG9yaWdpbmFsIHR5cGVkIHF1ZXJ5LlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fb3JpZ2luYWxRdWVyeSA9IG9wdHMub3JpZ2luYWxRdWVyeSB8fCAnJztcblxuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIGtleWJvYXJkIG5hdmlnYXRpb24gdGhyb3VnaCByZXN1bHRzLlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBzZWN0aW9uIHdlJ3JlIG5hdmlnYXRpbmcgaW4uXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9zZWN0aW9uSW5kZXggPSAwO1xuXG4gICAgLyoqXG4gICAgICogVXNlZCBmb3Iga2V5Ym9hcmQgbmF2aWdhdGlvbiB0aHJvdWdoIHJlc3VsdHMuXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IHJlc3VsdCBpbmRleCB3ZSdyZSBuYXZpZ2F0aW5nIG9uLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVzdWx0SW5kZXggPSAtMTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSB0ZXh0IHRvIHNob3cgYXMgdGhlIGZpcnN0IGl0ZW0gZm9yIGF1dG8gY29tcGxldGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5wcm9tcHRIZWFkZXIgPSBvcHRzLnByb21wdEhlYWRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgaW52b2tlZCB3aGVuIHRoZSBgRW50ZXJgIGtleSBpcyBwcmVzc2VkIG9uIGF1dG8gY29tcGxldGUuXG4gICAgICovXG4gICAgdGhpcy5fb25TdWJtaXQgPSBvcHRzLm9uU3VibWl0IHx8IGZ1bmN0aW9uICgpIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBhbGlhc2VkIHVzZWQgYnkgdGhlIGNvbXBvbmVudCBtYW5hZ2VyIGZvciBjcmVhdGlvbi5cbiAgICovXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdBdXRvQ29tcGxldGUnO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldFN0YXRlIGlzIG92ZXJyaWRkZW4gc28gdGhhdCB3ZSBjYW4gcHJvdmlkZSBhZGRpdGlvbmFsIG1ldGEgZGF0YVxuICAgKiB0byB0aGUgdGVtcGxhdGUgKGUuZy4gdGhlIHNlY3Rpb25JbmRleCBhbmQgcmVzdWx0SW5kZXgpLCBzaW5jZVxuICAgKiB0aG9zZSBhcmUgY2xpZW50LWludGVyYWN0aW9uIHNwZWNpZmljIHZhbHVlcyBhbmQgYXJlbid0IHJldHVybmVkIGZyb20gdGhlIHNlcnZlci5cbiAgICovXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgc2VjdGlvbkluZGV4OiB0aGlzLl9zZWN0aW9uSW5kZXgsXG4gICAgICByZXN1bHRJbmRleDogdGhpcy5fcmVzdWx0SW5kZXgsXG4gICAgICBwcm9tcHRIZWFkZXI6IHRoaXMuX29yaWdpbmFsUXVlcnkubGVuZ3RoID09PSAwID8gdGhpcy5wcm9tcHRIZWFkZXIgOiBudWxsXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIHVwZGF0ZVN0YXRlIGlzIGEgaGVscGVyIHRvIGFwcGx5IHRoZSBjdXJyZW50IHN0YXRlIHdpdGggbmV3IGNsaWVudC1zdGF0ZS5cbiAgICovXG4gIHVwZGF0ZVN0YXRlICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuX3N0YXRlLmdldCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbkNyZWF0ZSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGNvbnN0cnVjdGVkIGZyb20gdGhlIGZyYW1ld29yay5cbiAgICogT25jZSB3ZSdyZSBpbml0YWxpemVkLCB3ZSB3aXJlIHVwIGFsbCBvZiBvdXIgdXNlciBpbnRlcmFjdGlvbnNcbiAgICovXG4gIG9uQ3JlYXRlICgpIHtcbiAgICAvLyBVc2UgdGhlIGNvbnRleHQgb2YgdGhlIHBhcmVudCBjb21wb25lbnQgdG8gZmluZCB0aGUgaW5wdXQgbm9kZS5cbiAgICBsZXQgcXVlcnlJbnB1dCA9IERPTS5xdWVyeSh0aGlzLl9wYXJlbnQuX2NvbnRhaW5lciwgdGhpcy5faW5wdXRFbCk7XG4gICAgaWYgKCFxdWVyeUlucHV0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBpbml0aWFsaXplIEF1dG9Db21wbGV0ZS4gQ2FuIG5vdCBmaW5kIHtIVE1MRWxlbWVudH0gYCcsIHRoaXMuX2lucHV0RWwsICdgLicpO1xuICAgIH1cblxuICAgIC8vIERpc2FibGUgdGhlIG5hdGl2ZSBhdXRvIGNvbXBsZXRlXG4gICAgRE9NLmF0dHIocXVlcnlJbnB1dCwgJ2F1dG9Db21wbGV0ZScsICdvZmYnKTtcblxuICAgIC8vIFRoZSB1c2VyIGV4aXRzIHRoZSBpbnB1dCwgc28gd2Ugd2FudCB0byByZXNldCB0aGUgc3RhdGUgYW5kIGNsb3NlXG4gICAgLy8gdGhlIGF1dG8gY29tcGxldGVcbiAgICBET00ub24ocXVlcnlJbnB1dCwgJ2JsdXInLCAoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIGEgdXNlciBmb2N1c2VzIHRoZSBpbnB1dCwgd2Ugc2hvdWxkIHBvcHVsYXRlIHRoZSBhdXRvY29tcGxldGUgYmFzZWRcbiAgICAvLyBvbiB0aGUgY3VycmVudCB2YWx1ZVxuICAgIERPTS5vbihxdWVyeUlucHV0LCAnZm9jdXMnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmF1dG9Db21wbGV0ZShxdWVyeUlucHV0LnZhbHVlKTtcbiAgICB9KTtcblxuICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIG5hdmlnYXRlIGJldHdlZW4gdGhlIHJlc3VsdHMgdXNpbmcgdGhlIGtleWJvYXJkXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlTmF2aWdhdGVSZXN1bHRzKGUua2V5Q29kZSwgZSk7XG4gICAgICB0aGlzLmhhbmRsZVN1Ym1pdFJlc3VsdChlLmtleUNvZGUsIHF1ZXJ5SW5wdXQudmFsdWUsIGUpO1xuICAgIH0pO1xuXG4gICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gc2VsZWN0IGEgcmVzdWx0IHdpdGggdGhlIG1vdXNlXG4gICAgRE9NLmRlbGVnYXRlKHRoaXMuX2NvbnRhaW5lciwgJy5qcy15ZXh0LWF1dG9jb21wbGV0ZS1vcHRpb24nLCAnbW91c2Vkb3duJywgKGV2dCwgdGFyZ2V0KSA9PiB7XG4gICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhc2V0O1xuICAgICAgbGV0IHZhbCA9IGRhdGEuc2hvcnQ7XG5cbiAgICAgIHRoaXMudXBkYXRlUXVlcnkodmFsKTtcbiAgICAgIHRoaXMuX29uU3VibWl0KHZhbCwgZGF0YS5maWx0ZXIpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gV2hlbiB0aGUgdXNlciBpcyB0eXBpbmcgaW4gdGhlIGlucHV0LCBwcm9jZXNzIHRoZSBhdXRvIGNvbXBsZXRlLlxuICAgIERPTS5vbihxdWVyeUlucHV0LCAna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVUeXBpbmcoZS5rZXlDb2RlLCBxdWVyeUlucHV0LnZhbHVlLCBlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjbG9zZSB3aWxsIGhpZGUgdGhlIGF1dG8gY29tcGxldGUgcmVzdWx0cyBhbmQgcmVzZXQgdGhlIHN0YXRlLlxuICAgKi9cbiAgY2xvc2UgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe30pO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXNldHMgdGhlIGNsaWVudCBzdGF0ZSB0byB0aGVpciBvcmlnaW5hbCB2YWx1ZXMgYW5kIHRyaWdnZXJzXG4gICAqIGEgdGVtcGxhdGUtcmVyZW5kZXIgdmlhIHVwZGF0ZVN0YXRlXG4gICAqL1xuICByZXNldCAoKSB7XG4gICAgdGhpcy5fc2VjdGlvbkluZGV4ID0gMDtcbiAgICB0aGlzLl9yZXN1bHRJbmRleCA9IC0xO1xuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgbWV0aG9kIHRvIHVwZGF0ZSB0aGUgaW5wdXQgdGV4dFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0VmFsdWUgT3B0aW9uIHZhbHVlIHByb3ZpZGVkLlxuICAgKiBJZiBubyB2YWx1ZSBwcm92aWRlZCwgd2UnbGwgdHJ5IHRvIGZpbmQgaXQgYmFzZWQgb24gdGhlIHNlbGVjdGlvbiBpbmRleGVzLlxuICAgKi9cbiAgdXBkYXRlUXVlcnkgKG9wdFZhbHVlKSB7XG4gICAgLy8gT25seSB3YW50IHRvIHVwZGF0ZSB0aGUgcXVlcnkgc3RyaW5nIGlmIHRoZXJlcyBhIHZhbHVlLlxuICAgIC8vIElmIG9uZSBpcyBwcm92aWRlZCwgZ3JlYXQuXG4gICAgLy8gT3RoZXJ3aXNlLCBsZXRzIHRyeSB0byBmaW5kIGl0IGZyb20gdGhlIGN1cnJlbnQgc2VsZWN0aW9uIGluIHRoZSByZXN1bHRzLlxuICAgIGlmIChvcHRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG5cbiAgICAgIGxldCByZXN1bHRzID0gc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzO1xuICAgICAgb3B0VmFsdWUgPSByZXN1bHRzW3RoaXMuX3Jlc3VsdEluZGV4XS5zaG9ydFZhbHVlO1xuICAgIH1cblxuICAgIGxldCBxdWVyeUVsID0gRE9NLnF1ZXJ5KHRoaXMuX3BhcmVudC5fY29udGFpbmVyLCAnLmpzLXlleHQtcXVlcnknKTtcbiAgICBxdWVyeUVsLnZhbHVlID0gb3B0VmFsdWU7XG4gIH1cblxuICBoYW5kbGVUeXBpbmcgKGtleSwgdmFsdWUsIGUpIHtcbiAgICBsZXQgaWdub3JlZEtleXMgPSBbXG4gICAgICBLZXlzLkRPV04sXG4gICAgICBLZXlzLlVQLFxuICAgICAgS2V5cy5DVFJMLFxuICAgICAgS2V5cy5BTFQsXG4gICAgICBLZXlzLlNISUZULFxuICAgICAgS2V5cy5MRUZULFxuICAgICAgS2V5cy5SSUdIVCxcbiAgICAgIEtleXMuTEVGVF9PU19LRVksXG4gICAgICBLZXlzLlJJR0hUX09TX0tFWSxcbiAgICAgIEtleXMuU0VMRUNUX0tFWVxuICAgIF07XG5cbiAgICBpZiAoaWdub3JlZEtleXMuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBVc2VyIGVzY2FwZXMgb3V0IG9mIGF1dG8gY29tcGxldGUsIHNvIHdlIHJlc2V0IGl0IHRvIHRoZSBvcmlnaW5hbCBpbnB1dFxuICAgIGlmIChrZXkgPT09IEtleXMuRVNDQVBFKSB7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHRoaXMuX29yaWdpbmFsUXVlcnkpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRhYmJpbmcgb3V0IG9yIGVudGVyIHNob3VsZCBjbG9zZSB0aGUgYXV0byBjb21wbGV0ZS5cbiAgICBpZiAoa2V5ID09PSBLZXlzLkVOVEVSIHx8IGtleSA9PT0gS2V5cy5UQUIpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIG9yaWdpbmFsIHZhbHVlIGJhc2VkIG9uIHRoZSB1c2VyIGlucHV0XG4gICAgdGhpcy5fb3JpZ2luYWxRdWVyeSA9IHZhbHVlO1xuXG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHRoaXMuYXV0b0NvbXBsZXRlKHZhbHVlKTtcbiAgfVxuXG4gIGF1dG9Db21wbGV0ZSAoaW5wdXQpIHtcbiAgICBpZiAodGhpcy5pc0ZpbHRlclNlYXJjaCkge1xuICAgICAgdGhpcy5jb3JlLmF1dG9Db21wbGV0ZUZpbHRlcihpbnB1dCwgdGhpcy5uYW1lLCB0aGlzLl92ZXJ0aWNhbEtleSwgdGhpcy5fYmFyS2V5KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3ZlcnRpY2FsS2V5IHx8IHRoaXMuX2JhcktleSkge1xuICAgICAgdGhpcy5jb3JlLmF1dG9Db21wbGV0ZVZlcnRpY2FsKGlucHV0LCB0aGlzLm5hbWUsIHRoaXMuX3ZlcnRpY2FsS2V5LCB0aGlzLl9iYXJLZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlVW5pdmVyc2FsKGlucHV0LCB0aGlzLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU5hdmlnYXRlUmVzdWx0cyAoa2V5LCBlKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gdGhpcy5fc3RhdGUuZ2V0KCdzZWN0aW9ucycpO1xuICAgIGlmIChzZWN0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IHNlY3Rpb25zLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdHMgPSBzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHM7XG4gICAgaWYgKGtleSA9PT0gS2V5cy5VUCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRoaXMuX3Jlc3VsdEluZGV4IDw9IDApIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlY3Rpb25JbmRleCA+IDApIHtcbiAgICAgICAgICB0aGlzLl9zZWN0aW9uSW5kZXgtLTtcbiAgICAgICAgICB0aGlzLl9yZXN1bHRJbmRleCA9IHNlY3Rpb25zW3RoaXMuX3NlY3Rpb25JbmRleF0ucmVzdWx0cy5sZW5ndGggLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudXBkYXRlUXVlcnkodGhpcy5fb3JpZ2luYWxRdWVyeSk7XG4gICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZXN1bHRJbmRleC0tO1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChrZXkgPT09IEtleXMuRE9XTikge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRoaXMuX3Jlc3VsdEluZGV4ID49IHJlc3VsdHMubGVuZ3RoIC0gMSkge1xuICAgICAgICBpZiAodGhpcy5fc2VjdGlvbkluZGV4IDwgc2VjdGlvbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHRoaXMuX3NlY3Rpb25JbmRleCsrO1xuICAgICAgICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZXN1bHRJbmRleCsrO1xuICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdFJlc3VsdCAoa2V5LCB2YWx1ZSwgZSkge1xuICAgIGxldCBzZWN0aW9ucyA9IHRoaXMuX3N0YXRlLmdldCgnc2VjdGlvbnMnKTtcbiAgICBpZiAoc2VjdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBzZWN0aW9ucy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHN1Ym1pdCB0aGUgc2VhcmNoIG9uIGVudGVyXG4gICAgaWYgKGtleSA9PT0gS2V5cy5FTlRFUikge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0IGZpbHRlciA9ICcnO1xuICAgICAgaWYgKHRoaXMuX3NlY3Rpb25JbmRleCA+PSAwICYmIHRoaXMuX3Jlc3VsdEluZGV4ID49IDApIHtcbiAgICAgICAgZmlsdGVyID0gSlNPTi5zdHJpbmdpZnkoc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzW3RoaXMuX3Jlc3VsdEluZGV4XS5maWx0ZXIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHZhbHVlKTtcbiAgICAgIHRoaXMuX29yaWdpbmFsUXVlcnkgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX29uU3VibWl0KHZhbHVlLCBmaWx0ZXIpO1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRmlsdGVyT3B0aW9uc0NvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuLyoqXG4gKiBUaGUgY3VycmVudGx5IHN1cHBvcnRlZCBjb250cm9sc1xuICogQHR5cGUge3N0cmluZ1tdfVxuICovXG5jb25zdCBTVVBQT1JURURfQ09OVFJPTFMgPSBbXG4gICdzaW5nbGVvcHRpb24nLFxuICAnbXVsdGlvcHRpb24nXG5dO1xuXG4vKipcbiAqIFJlbmRlcnMgYSBzZXQgb2Ygb3B0aW9ucywgZWFjaCBvbmUgcmVwcmVzZW50aW5nIGEgZmlsdGVyIGluIGEgc2VhcmNoLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJPcHRpb25zQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIGlmICghY29uZmlnLmNvbnRyb2wgfHwgIVNVUFBPUlRFRF9DT05UUk9MUy5pbmNsdWRlcyhjb25maWcuY29udHJvbCkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICdGaWx0ZXJPcHRpb25zIHJlcXVpcmVzIGEgdmFsaWQgXCJjb250cm9sXCIgdG8gYmUgcHJvdmlkZWQnLFxuICAgICAgICAnRmlsdGVyT3B0aW9ucycpO1xuICAgIH1cblxuICAgIGlmICghY29uZmlnLm9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICdGaWx0ZXJPcHRpb25zIGNvbXBvbmVudCByZXF1aXJlcyBvcHRpb25zIHRvIGJlIHByb3ZpZGVkJyxcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBmaWx0ZXIgb3B0aW9ucyB0byBkaXNwbGF5IHdpdGggY2hlY2tlZCBzdGF0dXNcbiAgICAgKiBAdHlwZSB7b2JqZWN0W119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9vcHRpb25zID0gY29uZmlnLm9wdGlvbnMubWFwKG8gPT4gT2JqZWN0LmFzc2lnbih7fSwgbywgeyBjaGVja2VkOiBmYWxzZSB9KSk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiBjb250cm9sIHRvIGRpc3BsYXlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fY29udHJvbCA9IGNvbmZpZy5jb250cm9sO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdG9yIHVzZWQgZm9yIG9wdGlvbnMgaW4gdGhlIHRlbXBsYXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29wdGlvblNlbGVjdG9yID0gY29uZmlnLm9wdGlvblNlbGVjdG9yIHx8ICcuanMteWV4dC1maWx0ZXItb3B0aW9uJztcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHN0b3JlcyB0aGUgZmlsdGVyIHRvIHN0b3JhZ2Ugb24gZWFjaCBjaGFuZ2VcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N0b3JlT25DaGFuZ2UgPSBjb25maWcuc3RvcmVPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB0byBjYWxsIHdoZW4gY2hhbmdlZFxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29uQ2hhbmdlID0gY29uZmlnLm9uQ2hhbmdlIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlciwgYmFzZWQgb24gdGhlIGNvbnRyb2xcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gYGNvbnRyb2xzLyR7Y29uZmlnLmNvbnRyb2x9YDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdGaWx0ZXJPcHRpb25zJztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgb3B0aW9uczogdGhpcy5fb3B0aW9uc1xuICAgIH0pKTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIERPTS5kZWxlZ2F0ZSh0aGlzLl9jb250YWluZXIsIHRoaXMuX29wdGlvblNlbGVjdG9yLCAnY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3VwZGF0ZU9wdGlvbihwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC5pbmRleCksIGV2ZW50LnRhcmdldC5jaGVja2VkKTtcblxuICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy5fYnVpbGRGaWx0ZXIoKTtcbiAgICAgIGlmICh0aGlzLl9zdG9yZU9uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBmaWx0ZXIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9vbkNoYW5nZShmaWx0ZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgX3VwZGF0ZU9wdGlvbiAoaW5kZXgsIGNoZWNrZWQpIHtcbiAgICBpZiAodGhpcy5fY29udHJvbCA9PT0gJ3NpbmdsZW9wdGlvbicpIHtcbiAgICAgIHRoaXMuX29wdGlvbnMgPSB0aGlzLl9vcHRpb25zLm1hcChvID0+IE9iamVjdC5hc3NpZ24oe30sIG8sIHsgY2hlY2tlZDogZmFsc2UgfSkpO1xuICAgIH1cblxuICAgIHRoaXMuX29wdGlvbnNbaW5kZXhdID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fb3B0aW9uc1tpbmRleF0sIHsgY2hlY2tlZCB9KTtcbiAgICB0aGlzLnNldFN0YXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIG9wdGlvbnNcbiAgICovXG4gIGNsZWFyICgpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IERPTS5xdWVyeUFsbCh0aGlzLl9jb250YWluZXIsIHRoaXMuX29wdGlvblNlbGVjdG9yKTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGUgPT4gZS5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKSk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgYW5kIHJldHVybiB0aGUgRmlsdGVyIHRoYXQgcmVwcmVzZW50cyB0aGUgY3VycmVudCBzdGF0ZVxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2J1aWxkRmlsdGVyICgpIHtcbiAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5fb3B0aW9uc1xuICAgICAgLmZpbHRlcihvID0+IG8uY2hlY2tlZClcbiAgICAgIC5tYXAobyA9PiBGaWx0ZXIuZXF1YWwoby5maWVsZCwgby52YWx1ZSkpO1xuXG4gICAgcmV0dXJuIGZpbHRlcnMubGVuZ3RoID4gMFxuICAgICAgPyBGaWx0ZXIuZ3JvdXAoLi4uZmlsdGVycylcbiAgICAgIDoge307XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZpbHRlckJveENvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuXG4vKipcbiAqIFJlbmRlcnMgYSBzZXQgb2YgZmlsdGVycywgYW5kIHNlYXJjaGVzIHdpdGggdGhlbSB3aGVuIGFwcGxpZWQuXG4gKiBNdWx0aXBsZSBGaWx0ZXJCb3ggY29tcG9uZW50cyB3aWxsIEFORCB0b2dldGhlciBidXQgd2lsbCBub3Qgc2hhcmUgc3RhdGUuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyQm94Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIGlmICghY29uZmlnLmZpbHRlcnMgfHwgIShjb25maWcuZmlsdGVycyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlckJveCByZXF1aXJlcyBmaWx0ZXJzIHRvIGJlIHByb3ZpZGVkIGFzIGFuIGFycmF5JyxcbiAgICAgICAgJ0ZpbHRlckJveCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGZpbHRlcnMgdG8gZGlzcGxheSBhbmQgY29udHJvbFxuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlckNvbmZpZ3MgPSBjb25maWcuZmlsdGVycztcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBzZWFyY2hcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRyaWdnZXIgYSBzZWFyY2ggb24gZWFjaCBjaGFuZ2UgdG8gYSBmaWx0ZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaE9uQ2hhbmdlID0gY29uZmlnLnNlYXJjaE9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdG9yIG9mIHRoZSBhcHBseSBidXR0b25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBwbHlCdXR0b25TZWxlY3RvciA9IGNvbmZpZy5hcHBseUJ1dHRvblNlbGVjdG9yIHx8ICcuanMteWV4dC1maWx0ZXJib3gtYXBwbHknO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdG9yIG9mIHRoZSByZXNldCBidXR0b25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcmVzZXRCdXR0b25TZWxlY3RvciA9IGNvbmZpZy5yZXNldEJ1dHRvblNlbGVjdG9yIHx8ICcuanMteWV4dC1maWx0ZXJib3gtcmVzZXQnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudHMgY3JlYXRlZCBmb3IgZWFjaCBmaWx0ZXIgY29uZmlnXG4gICAgICogQHR5cGUge0NvbXBvbmVudFtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGZpbHRlciBjb21wb25lbnRzIGluIHRoZSBib3hcbiAgICAgKiBAdHlwZSB7RmlsdGVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVycyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSBgZmlsdGVycy9maWx0ZXJib3hgO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc2hvdyBudW1iZXIgb2YgYXBwbGllZCByZXN1bHRzIG5leHQgdG8gdGl0bGVcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3Nob3dOdW1GaWx0ZXJzID0gY29uZmlnLnNob3dOdW1GaWx0ZXJzIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdG9yIG9mIHRoZSBpbnB1dHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IGNvbmZpZy5pbnB1dFNlbGVjdG9yIHx8ICcuanMteWV4dC1maWx0ZXItb3B0aW9uJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdGaWx0ZXJCb3gnO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgIGZpbHRlckNvbmZpZ3M6IHRoaXMuX2ZpbHRlckNvbmZpZ3MsXG4gICAgICBzaG93QXBwbHlCdXR0b246ICF0aGlzLl9zZWFyY2hPbkNoYW5nZVxuICAgIH0pKTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIC8vIEluaXRpYWxpemUgZmlsdGVycyBmcm9tIGNvbmZpZ3NcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2ZpbHRlckNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuX2ZpbHRlckNvbmZpZ3NbaV07XG4gICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKGNvbmZpZy50eXBlLCBPYmplY3QuYXNzaWduKHt9LFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfS5maWx0ZXIke2l9YCxcbiAgICAgICAgICBzdG9yZU9uQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICBjb250YWluZXI6IGAuanMteWV4dC1maWx0ZXJib3gtZmlsdGVyJHtpfWAsXG4gICAgICAgICAgb25DaGFuZ2U6IChmKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uRmlsdGVyQ2hhbmdlKGksIGYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgY29tcG9uZW50Lm1vdW50KCk7XG4gICAgICB0aGlzLl9maWx0ZXJDb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGFwcGx5IGJ1dHRvblxuICAgIGlmICghdGhpcy5fc2VhcmNoT25DaGFuZ2UpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2FwcGx5QnV0dG9uU2VsZWN0b3IpO1xuICAgICAgRE9NLm9uKGJ1dHRvbiwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9zYXZlRmlsdGVyc1RvU3RvcmFnZSgpO1xuICAgICAgICB0aGlzLl9zZWFyY2goKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemVzIHJlc2V0IGJ1dHRvblxuICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fcmVzZXRCdXR0b25TZWxlY3Rvcik7XG4gICAgRE9NLm9uKHJlc2V0QnV0dG9uLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLl9jbGVhckZpbHRlcnMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgY2hhbmdlcyB0byBjaGlsZCBmaWx0ZXIgY29tcG9uZW50c1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBjaGFuZ2VkIGZpbHRlclxuICAgKiBAcGFyYW0ge0ZpbHRlcn0gZmlsdGVyIFRoZSBuZXcgZmlsdGVyXG4gICAqL1xuICBvbkZpbHRlckNoYW5nZSAoaW5kZXgsIGZpbHRlcikge1xuICAgIHRoaXMuX2ZpbHRlcnNbaW5kZXhdID0gZmlsdGVyO1xuICAgIGlmICh0aGlzLl9zZWFyY2hPbkNoYW5nZSkge1xuICAgICAgdGhpcy5fc2F2ZUZpbHRlcnNUb1N0b3JhZ2UoKTtcbiAgICAgIHRoaXMuX3NlYXJjaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIGN1cnJlbnQgZmlsdGVycyB0byBzdG9yYWdlIHRvIGJlIHVzZWQgaW4gdGhlIG5leHQgc2VhcmNoXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2F2ZUZpbHRlcnNUb1N0b3JhZ2UgKCkge1xuICAgIGNvbnN0IHZhbGlkRmlsdGVycyA9IHRoaXMuX2ZpbHRlcnMuZmlsdGVyKGYgPT4gZiAhPT0gdW5kZWZpbmVkICYmIGYgIT09IG51bGwpO1xuICAgIGNvbnN0IGNvbWJpbmVkRmlsdGVyID0gdmFsaWRGaWx0ZXJzLmxlbmd0aCA+IDFcbiAgICAgID8gRmlsdGVyLmFuZCguLi52YWxpZEZpbHRlcnMpXG4gICAgICA6IHZhbGlkRmlsdGVyc1swXTtcbiAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgY29tYmluZWRGaWx0ZXIgfHwge30pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGZpbGVycyBpbiBzdG9yYWdlIGFuZCB1bmNoZWNrIGFsbCBzZWxlY3RlZCBmaWx0ZXJzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY2xlYXJGaWx0ZXJzICgpIHtcbiAgICB0aGlzLl9maWx0ZXJzID0gW107XG4gICAgZm9yIChjb25zdCBmaWx0ZXJDb21wb25lbnQgb2YgdGhpcy5fZmlsdGVyQ29tcG9uZW50cykge1xuICAgICAgaWYgKGZpbHRlckNvbXBvbmVudC5fdHlwZSA9PT0gJ0ZpbHRlck9wdGlvbnNDb21wb25lbnQnKSB7XG4gICAgICAgIGZpbHRlckNvbXBvbmVudC5jbGVhcigpO1xuICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBmaWx0ZXJDb21wb25lbnQuX29wdGlvbnMpIHtcbiAgICAgICAgICBvcHRpb24uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fc2F2ZUZpbHRlcnNUb1N0b3JhZ2UoKTtcbiAgICB0aGlzLl9zZWFyY2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIGEgc2VhcmNoIHdpdGggYWxsIGZpbHRlcnMgaW4gc3RvcmFnZVxuICAgKi9cbiAgX3NlYXJjaCAoKSB7XG4gICAgY29uc3QgYWxsRmlsdGVycyA9IHRoaXMuY29yZS5zdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GSUxURVIpO1xuICAgIGNvbnN0IHRvdGFsRmlsdGVyID0gYWxsRmlsdGVycy5sZW5ndGggPiAxXG4gICAgICA/IEZpbHRlci5hbmQoLi4uYWxsRmlsdGVycylcbiAgICAgIDogYWxsRmlsdGVyc1swXTtcblxuICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5jb3JlLnN0b3JhZ2UuZ2V0U3RhdGUoU3RvcmFnZUtleXMuUVVFUlkpIHx8ICcnO1xuXG4gICAgdGhpcy5jb3JlLnZlcnRpY2FsU2VhcmNoKHF1ZXJ5LCB0aGlzLl92ZXJ0aWNhbEtleSwgSlNPTi5zdHJpbmdpZnkodG90YWxGaWx0ZXIpKTtcblxuICAgIGNvbnN0IG51bUVsZW1lbnQgPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCAnLmpzLWZpbHRlckJveE51bScpO1xuXG4gICAgaWYgKHRoaXMuX3Nob3dOdW1GaWx0ZXJzICYmIG51bUVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGZpbHRlcnMgPSBET00ucXVlcnlBbGwodGhpcy5fY29udGFpbmVyLCB0aGlzLl9pbnB1dFNlbGVjdG9yKTtcbiAgICAgIGNvbnN0IG51bUFwcGxpZWRGaWx0ZXJzID0gZmlsdGVycy5maWx0ZXIoZSA9PiBlLmNoZWNrZWQpLmxlbmd0aDtcblxuICAgICAgaWYgKG51bUFwcGxpZWRGaWx0ZXJzID4gMCkge1xuICAgICAgICBudW1FbGVtZW50LmlubmVySFRNTCA9IG51bUFwcGxpZWRGaWx0ZXJzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbnVtRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIERpcmVjdEFuc3dlckNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0QW5zd2VyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVI7XG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3Jlc3VsdHMvZGlyZWN0YW5zd2VyJztcbiAgfVxuXG4gIGJlZm9yZU1vdW50ICgpIHtcbiAgICBpZiAoIXRoaXMuaGFzU3RhdGUoJ2Fuc3dlcicpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRGlyZWN0QW5zd2VyJztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdyZXN1bHRzL3Jlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdSZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBSZXN1bHRzSXRlbUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdyZXN1bHRzL2xvY2F0aW9ucmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0xvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncmVzdWx0cy9wZW9wbGVyZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE1hcFByb3ZpZGVyICovXG5cbi8qKlxuICogQSBNYXBQcm92aWRlciBpcyBhbiBpbnRlcmZhY2UgdGhhdCByZXByZXNlbnRzIHRoYXQgc2hvdWxkIGJlIGltcGxlbWVudGVkXG4gKiBpbiBvcmRlciB0byBpbnRlZ3JhdGUgd2l0aCBhIFRoaXJkIFBhcnR5IE1hcCBwcm92aWRlciBmb3IgYm90aFxuICogc3RhdGljIGFuZCBpbnRlcmFjdGl2ZSBtYXBzLiBNYXBQcm92aWRlcnMgYXJlIHVzZWQgYnkgdGhlIE1hcENvbXBvbmVudC5cbiAqXG4gKiBJbXBsZW1lbnRhdGlvbnMgc2hvdWxkIGV4dGVuZCB0aGlzIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdXNlZCBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgbWFwIHByb3ZpZGVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIG1hcCB0byBhcHBlbmQgdG8gdGhlIERPTSwgZGVmYXVsdHMgdG8gMTAwJVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5faGVpZ2h0ID0gb3B0cy5oZWlnaHQgfHwgMjAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSBtYXAgdG8gYXBwZW5kIHRvIHRoZSBET00sIGRlZmF1bHRzIHRvIDEwMCVcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3dpZHRoID0gb3B0cy53aWR0aCB8fCA2MDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgem9vbSBsZXZlbCBvZiB0aGUgbWFwLCBkZWZhdWx0cyB0byA5XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl96b29tID0gb3B0cy56b29tIHx8IDk7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgdW5kZXJseWluZyBtYXAgaW5zdGFuY2UsIGNyZWF0ZWQgYnkgdGhlIGV4dGVybmFsIGxpYi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX21hcCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUZW1wb3JhcnkgYm9vbGVhbiB0cmFja2luZyB3aGV0aGVyIG9yIG5vdCB0aGUgZXh0ZXJuYWwgSlMgbGlicmFyeSBpcyBsb2FkZWQgKHNlZSBUT0RPIGJlbG93KVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2lzTG9hZGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugb25jZSB0aGUgSmF2YXNjcmlwdCBpcyBsb2FkZWRcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5fb25Mb2FkZWQgPSBvcHRzLm9uTG9hZGVkIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1c3RvbSBjb25maWd1cmF0aW9uIG92ZXJyaWRlIHRvIHVzZSBmb3IgdGhlIG1hcCBtYXJrZXJzXG4gICAgICogQHR5cGUge09iamVjdHxGdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLl9waW5Db25maWcgPSB0eXBlb2Ygb3B0cy5waW4gPT09ICdmdW5jdGlvbicgPyBvcHRzLnBpbiA6IE9iamVjdC5hc3NpZ24oTWFwUHJvdmlkZXIuREVGQVVMVF9QSU5fQ09ORklHLCBvcHRzLnBpbik7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgY29uZmlndXJhdGlvbiB0byB1c2UgZm9yIHRoZSBtYXAgbWFya2Vyc1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKiBUT0RPKGJpbGx5KSBDcmVhdGUgYSBjb25maWd1cmF0aW9uIG1vZGVsXG4gICAqL1xuICBzdGF0aWMgZ2V0IERFRkFVTFRfUElOX0NPTkZJRyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGljb246IHtcbiAgICAgICAgYW5jaG9yOiBudWxsLCAvLyBlLmcuIHsgeDogMSwgeTogMSB9XG4gICAgICAgIHN2ZzogbnVsbCxcbiAgICAgICAgdXJsOiBudWxsLFxuICAgICAgICBzY2FsZWRTaXplOiBudWxsIC8vIGUuZy4geyB3OiAyMCwgaDogMjAgfVxuICAgICAgfSxcbiAgICAgIGxhYmVsVHlwZTogJ251bWVyaWMnXG4gICAgfTtcbiAgfVxuXG4gIG9uTG9hZGVkIChjYikge1xuICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9vbkxvYWRlZCA9IGNiO1xuICAgIGlmICh0aGlzLmlzTG9hZGVkKCkpIHtcbiAgICAgIHRoaXMuX29uTG9hZGVkKCk7XG4gICAgfVxuICB9XG5cbiAgaXNMb2FkZWQgKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0xvYWRlZDtcbiAgfVxuXG4gIGxvYWRKUyAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmltcGxlbWVudGVkIE1ldGhvZDogbG9hZEpTJyk7XG4gIH1cblxuICBsb2FkU3RhdGljICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaW1wbGVtZW50ZWQgTWV0aG9kOiBsb2FkU3RhdGljJyk7XG4gIH1cblxuICBpbml0IChtYXBEYXRhKSB7XG4gICAgLy8gVE9ETyhiaWxseSkgVGhpcyBzaG91bGQgYmUgYmFzZWQgb2ZmIGEgcHJvbWlzZSB0aGF0IGdldHMgY3JlYXRlZCBmcm9tIGxvYWRKU1xuICAgIHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCBNZXRob2Q6IGluaXQnKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgR29vZ2xlTWFwUHJvdmlkZXIgKi9cblxuaW1wb3J0IE1hcFByb3ZpZGVyIGZyb20gJy4vbWFwcHJvdmlkZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi8uLi9kb20vZG9tJztcblxuLyogZ2xvYmFsIGdvb2dsZSAqL1xuXG4vKipcbiAqIEdvb2dsZU1hcFByb3ZpZGVyIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIGEgTWFwUHJvdmlkZXJcbiAqIHRoYXQgaGFuZGxlcyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgdGhpcmQgcGFydHkgQVBJIHRvIGV4cG9zZSBtYXBzLlxuICogQGV4dGVuZHMgTWFwUHJvdmlkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29vZ2xlTWFwUHJvdmlkZXIgZXh0ZW5kcyBNYXBQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl9jbGllbnRJZCA9IG9wdHMuY2xpZW50SWQ7XG4gICAgdGhpcy5fc2lnbmF0dXJlID0gb3B0cy5zaWduYXR1cmU7XG5cbiAgICBpZiAoIXRoaXMuaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscygpICYmICF0aGlzLl9hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignR29vZ2xlTWFwc1Byb3ZpZGVyOiBNaXNzaW5nIGBhcGlLZXlgIG9yIHtgY2xpZW50SWRgLCBgc2lnbmF0dXJlYH0nKTtcbiAgICB9XG4gIH1cblxuICBsb2FkSlMgKG9uTG9hZCkge1xuICAgIGlmIChET00ucXVlcnkoJyN5ZXh0LW1hcC1qcycpKSB7XG4gICAgICBpZiAodHlwZW9mIG9uTG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvbkxvYWQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWpzJyxcbiAgICAgIG9ubG9hZDogKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX29uTG9hZGVkKCk7XG4gICAgICB9LFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzcmM6IGAvL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/JHt0aGlzLmdlbmVyYXRlQ3JlZGVudGlhbHMoKX1gXG4gICAgfSk7XG5cbiAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgfVxuXG4gIGdlbmVyYXRlU3RhdGljIChtYXBEYXRhKSB7XG4gICAgbGV0IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MgPSBHb29nbGVNYXBNYXJrZXJDb25maWcuZnJvbShcbiAgICAgIG1hcERhdGEubWFwTWFya2VycyxcbiAgICAgIHRoaXMuX3BpbkNvbmZpZ1xuICAgICk7XG5cbiAgICBsZXQgZW5jb2RlZE1hcmtlcnMgPSBHb29nbGVNYXBNYXJrZXJDb25maWcuc2VyaWFsaXplKGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MpO1xuICAgIHJldHVybiBgXG4gICAgICA8aW1nIHNyYz1cIi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9zdGF0aWNtYXA/JHtlbmNvZGVkTWFya2Vyc30mc2l6ZT0ke3RoaXMuX3dpZHRofXgke3RoaXMuX2hlaWdodH0mJHt0aGlzLmdlbmVyYXRlQ3JlZGVudGlhbHMoKX1cIj5gO1xuICB9XG5cbiAgZ2VuZXJhdGVDcmVkZW50aWFscyAoKSB7XG4gICAgaWYgKHRoaXMuaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscygpKSB7XG4gICAgICByZXR1cm4gYGNsaWVudD0ke3RoaXMuX2NsaWVudElkfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBga2V5PSR7dGhpcy5fYXBpS2V5fWA7XG4gICAgfVxuICB9XG5cbiAgaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscyAoKSB7XG4gICAgLy8gU2lnbmF0dXJlIGlzIG9ubHkgcmVxdWlyZWQgaWYgbWFwIGlzIHN0YXRpY1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRJZCAmJiAodGhpcy5fc2lnbmF0dXJlIHx8ICF0aGlzLl9pc1N0YXRpYyk7XG4gIH1cblxuICBpbml0IChlbCwgbWFwRGF0YSkge1xuICAgIGlmICghbWFwRGF0YSB8fCBtYXBEYXRhLm1hcE1hcmtlcnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHRoaXMuX21hcCA9IG51bGw7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBOT1RFKGJpbGx5KSBUaGlzIHRpbWVvdXQgaXMgYSBoYWNrIGZvciBkZWFsaW5nIHdpdGggYXN5bmMgbmF0dXJlLlxuICAgIC8vIE9ubHkgaGVyZSBmb3IgZGVtbyBwdXJwb3Nlcywgc28gd2UnbGwgZml4IGxhdGVyLlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0IGNvbnRhaW5lciA9IERPTS5xdWVyeShlbCk7XG4gICAgICBET00uY3NzKGNvbnRhaW5lciwge1xuICAgICAgICB3aWR0aDogdGhpcy5fd2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5faGVpZ2h0XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGNvbnRhaW5lciwge1xuICAgICAgICB6b29tOiB0aGlzLl96b29tXG4gICAgICB9KTtcblxuICAgICAgLy8gQXBwbHkgb3VyIHNlYXJjaCBkYXRhIHRvIG91ciBHb29nbGVNYXBcbiAgICAgIGxldCBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG4gICAgICBsZXQgZ29vZ2xlTWFwTWFya2VyQ29uZmlncyA9IEdvb2dsZU1hcE1hcmtlckNvbmZpZy5mcm9tKFxuICAgICAgICBtYXBEYXRhLm1hcE1hcmtlcnMsXG4gICAgICAgIHRoaXMuX3BpbkNvbmZpZyxcbiAgICAgICAgdGhpcy5tYXApO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoZ29vZ2xlTWFwTWFya2VyQ29uZmlnc1tpXSk7XG4gICAgICAgIGJvdW5kcy5leHRlbmQobWFya2VyLnBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKGJvdW5kcyk7XG4gICAgfSwgMTAwKTtcbiAgfVxufVxuXG4vLyBUT0RPKGJpbGx5KSBNb3ZlIHRvIG93biBjbGFzc1xuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcE1hcmtlckNvbmZpZyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGdvb2dsZSBtYXAsIHRoYXQgdGhlIG1hcmtlciBpcyBhcHBlbmRlZCB0b1xuICAgICAqIEB0eXBlIHtHb29nbGVNYXB9XG4gICAgICovXG4gICAgdGhpcy5tYXAgPSBvcHRzLm1hcCB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1hcmtlciAobGF0L2xuZylcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMucG9zaXRpb24gPSBvcHRzLnBvc2l0aW9uIHx8IHtcbiAgICAgIGxhdDogdW5kZWZpbmVkLFxuICAgICAgbG5nOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHByb3BlcnRpZXMvc2V0dGluZ3Mgb2YgdGhlIGljb24gdXNlZCBmb3IgdGhlIG1hcmtlclxuICAgICAqIGUuZy4ge1xuICAgICAqICAgICAgICBhbmNob3I6IHsgeDogMCwgeTogMCB9XG4gICAgICogICAgICAgIHVybDogJ3BhdGgvdG8vdXJsLmpwZydcbiAgICAgKiAgICAgICAgc2NhbGVkU2l6ZTogeyB3OiAwLCBoOiAwIH1cbiAgICAgKiAgICAgICB9XG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuaWNvbiA9IG9wdHMuaWNvbiB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgb2YgdGhlIG1hcmtlciB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWwgPSBvcHRzLmxhYmVsIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGFuIGFycmF5IG9mIG1hcmtlciBjb25maWdzXG4gICAqIEBwYXJhbSB7R29vZ2xlTWFwTWFya2VyQ29uZmlnW119IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3NcbiAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZSAoZ29vZ2xlTWFwTWFya2VyQ29uZmlncykge1xuICAgIGxldCBzZXJpYWxpemVkTWFya2VycyA9IFtdO1xuICAgIGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBzZXJpYWxpemVkTWFya2Vycy5wdXNoKGBtYXJrZXJzPWxhYmVsOiR7bWFya2VyLmxhYmVsfXwke21hcmtlci5wb3NpdGlvbi5sYXR9LCR7bWFya2VyLnBvc2l0aW9uLmxuZ31gKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VyaWFsaXplZE1hcmtlcnMuam9pbignJicpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBzdG9yYWdlIGRhdGEgbW9kZWwgb2YgbWFya2VycyBpbnRvIEdvb2dsZUFQSU1hcmtlclxuICAgKiBAcGFyYW0ge0dvb2dsZU1hcH0gQSByZWZlcmVuY2UgdG8gdGhlIGdvb2dsZSBtYXAgdG8gYXBwbHkgdGhlIG1hcmtlciB0b1xuICAgKiBAcGFyYW0ge29iamVjdFtdfSBtYXJrZXJzIFRoZSBkYXRhIG9mIHRoZSBtYXJrZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IHBpbkNvbmZpZyBUaGUgY29uZmlndXJhdGlvbiB0byBhcHBseSB0byB0aGUgbWFya2VyXG4gICAqIEByZXR1cm5zIHtHb29nbGVNYXBNYXJrZXJDb25maWdbXX1cbiAgICovXG4gIHN0YXRpYyBmcm9tIChtYXJrZXJzLCBwaW5Db25maWcsIG1hcCkge1xuICAgIGxldCBnb29nbGVNYXBNYXJrZXJDb25maWdzID0gW107XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1hcmtlcnMpKSB7XG4gICAgICBtYXJrZXJzID0gW21hcmtlcnNdO1xuICAgIH1cblxuICAgIG1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICAvLyBTdXBwb3J0IGNvbmZpZ3VyYXRpb24gYXMgYSBmdW5jdGlvblxuICAgICAgbGV0IHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZztcbiAgICAgIGlmICh0eXBlb2YgcGluQ29uZmlnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZyhcbiAgICAgICAgICBtYXJrZXIuaXRlbSxcbiAgICAgICAgICBNYXBQcm92aWRlci5ERUZBVUxUX1BJTl9DT05GSUcsXG4gICAgICAgICAgbWFya2VyKTtcbiAgICAgIH1cblxuICAgICAgLy8gVHJhbnNmb3JtIG91ciBDb25maWd1cmF0aW9uIE9iamVjdCBpbnRvIHRoZSBleHBlY3RlZFxuICAgICAgLy8gR29vZ2xlIEFQSSBmb3JtYXQuXG4gICAgICBsZXQgaWNvbiA9IHt9O1xuICAgICAgaWYgKHBpbkNvbmZpZ09iai5hbmNob3IpIHtcbiAgICAgICAgaWNvbi5hbmNob3IgPSBnb29nbGUubWFwcy5Qb2ludChwaW5Db25maWdPYmouYW5jaG9yLngsIHBpbkNvbmZpZ09iai5hbmNob3IueSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW5Db25maWdPYmouc2NhbGVkU2l6ZSkge1xuICAgICAgICBpY29uLnNjYWxlZFNpemUgPSBnb29nbGUubWFwcy5TaXplKHBpbkNvbmZpZ09iai5zY2FsZWRTaXplLncsIHBpbkNvbmZpZ09iai5zY2FsZWRTaXplLmgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluQ29uZmlnT2JqLnVybCkge1xuICAgICAgICBpY29uLnVybCA9IHBpbkNvbmZpZ09iai51cmw7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW5Db25maWdPYmouc3ZnKSB7XG4gICAgICAgIGljb24udXJsID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCAke2VuY29kZVVSSUNvbXBvbmVudChwaW5Db25maWdPYmouc3ZnKX1gO1xuICAgICAgfVxuXG4gICAgICBsZXQgbGFiZWw7XG4gICAgICBpZiAocGluQ29uZmlnT2JqLmxhYmVsKSB7XG4gICAgICAgIGxhYmVsID0gcGluQ29uZmlnT2JqLmxhYmVsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFiZWwgPSBtYXJrZXIubGFiZWwudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgLy8gTk9URShiaWxseSkgR29vZ2xlIG1hcHMgZG9lc24ndCBoYW5kbGUgZW1wdHkgaWNvbiBvYmplY3RzIG5pY2VseVxuICAgICAgLy8gTWFrZSBnb29nbGUgbWFwcyBoYXBweSBpZiBubyBzZXR0aW5ncyBmb3IgaWNvbiBhcmUgcHJvdmlkZWQ7XG4gICAgICBpZiAoT2JqZWN0LmtleXMoaWNvbikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGljb24gPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MucHVzaChcbiAgICAgICAgbmV3IEdvb2dsZU1hcE1hcmtlckNvbmZpZyh7XG4gICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIGxhdDogbWFya2VyLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG5nOiBtYXJrZXIubG9uZ2l0dWRlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpY29uOiBpY29uLFxuICAgICAgICAgIGxhYmVsOiBsYWJlbFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBnb29nbGVNYXBNYXJrZXJDb25maWdzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNYXBCb3hNYXBQcm92aWRlciAqL1xuXG5pbXBvcnQgTWFwUHJvdmlkZXIgZnJvbSAnLi9tYXBwcm92aWRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uLy4uL2RvbS9kb20nO1xuXG4vKiBnbG9iYWwgbWFwYm94Z2wgKi9cblxuLyoqXG4gKiBNYXBCb3hNYXBQcm92aWRlciBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiBhIE1hcFByb3ZpZGVyXG4gKiB0aGF0IGhhbmRsZXMgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIHRoaXJkIHBhcnR5IEFQSSB0byBleHBvc2UgbWFwcy5cbiAqIEBleHRlbmRzIE1hcFByb3ZpZGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcEJveE1hcFByb3ZpZGVyIGV4dGVuZHMgTWFwUHJvdmlkZXIge1xuICAvKipcbiAgICogTG9hZCB0aGUgZXh0ZXJuYWwgSlMgTGlicmFyeVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkxvYWQgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdG8gaW52b2tlIG9uY2UgdGhlIEpTIGlzIGxvYWRlZC5cbiAgICovXG4gIGxvYWRKUyAob25Mb2FkKSB7XG4gICAgbGV0IHNjcmlwdCA9IERPTS5jcmVhdGVFbCgnc2NyaXB0Jywge1xuICAgICAgaWQ6ICd5ZXh0LW1hcC1qcycsXG4gICAgICBvbmxvYWQ6ICgpID0+IHtcbiAgICAgICAgdGhpcy5faXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICBtYXBib3hnbC5hY2Nlc3NUb2tlbiA9IHRoaXMuX2FwaUtleTtcblxuICAgICAgICBvbkxvYWQoKTtcbiAgICAgIH0sXG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIHNyYzogJ2h0dHBzOi8vYXBpLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL3YwLjQ0LjEvbWFwYm94LWdsLmpzJ1xuICAgIH0pO1xuXG4gICAgbGV0IGNzcyA9IERPTS5jcmVhdGVFbCgnbGluaycsIHtcbiAgICAgIGlkOiAneWV4dC1tYXAtY3NzJyxcbiAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vYXBpLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL3YwLjQ0LjEvbWFwYm94LWdsLmNzcydcbiAgICB9KTtcblxuICAgIERPTS5hcHBlbmQoJ2JvZHknLCBjc3MpO1xuICAgIERPTS5hcHBlbmQoJ2JvZHknLCBzY3JpcHQpO1xuICB9XG5cbiAgZ2VuZXJhdGVTdGF0aWMgKG1hcERhdGEpIHtcbiAgICBsZXQgbWFwYm94TWFwTWFya2VyQ29uZmlncyA9IE1hcEJveE1hcmtlckNvbmZpZy5mcm9tKFxuICAgICAgbWFwRGF0YS5tYXBNYXJrZXJzLFxuICAgICAgdGhpcy5fcGluQ29uZmlnXG4gICAgKTtcblxuICAgIGxldCBjZW50ZXIgPSBtYXBEYXRhLm1hcENlbnRlcjtcbiAgICBsZXQgd2lkdGggPSB0aGlzLl93aWR0aCB8fCA2MDA7XG4gICAgbGV0IGhlaWdodCA9IHRoaXMuX2hlaWdodCB8fCAyMDA7XG4gICAgbGV0IHpvb20gPSB0aGlzLl96b29tIHx8IDk7XG5cbiAgICBsZXQgZW5jb2RlZE1hcmtlcnMgPSBNYXBCb3hNYXJrZXJDb25maWcuc2VyaWFsaXplKG1hcGJveE1hcE1hcmtlckNvbmZpZ3MpO1xuICAgIHJldHVybiBgPGltZyBzcmM9XCJodHRwczovL2FwaS5tYXBib3guY29tL3N0eWxlcy92MS9tYXBib3gvc3RyZWV0cy12MTEvc3RhdGljLyR7ZW5jb2RlZE1hcmtlcnN9LyR7Y2VudGVyLmxvbmdpdHVkZX0sJHtjZW50ZXIubGF0aXR1ZGV9LCR7em9vbX0vYXV0by8ke3dpZHRofXgke2hlaWdodH0/YWNjZXNzX3Rva2VuPSR7dGhpcy5fYXBpS2V5fVwiPmA7XG4gIH1cblxuICBpbml0IChlbCwgbWFwRGF0YSkge1xuICAgIGlmICghbWFwRGF0YSB8fCBtYXBEYXRhLm1hcE1hcmtlcnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHRoaXMuX21hcCA9IG51bGw7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBsZXQgY29udGFpbmVyID0gRE9NLnF1ZXJ5KGVsKTtcbiAgICBET00uY3NzKGNvbnRhaW5lciwge1xuICAgICAgd2lkdGg6IHRoaXMuX3dpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLl9oZWlnaHRcbiAgICB9KTtcblxuICAgIHRoaXMuX21hcCA9IG5ldyBtYXBib3hnbC5NYXAoe1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICB6b29tOiB0aGlzLl96b29tLFxuICAgICAgc3R5bGU6ICdtYXBib3g6Ly9zdHlsZXMvbWFwYm94L3N0cmVldHMtdjknLFxuICAgICAgY2VudGVyOiBbbWFwRGF0YS5tYXBDZW50ZXIubG9uZ2l0dWRlLCBtYXBEYXRhLm1hcENlbnRlci5sYXRpdHVkZV1cbiAgICB9KTtcblxuICAgIGNvbnN0IG1hcGJveE1hcE1hcmtlckNvbmZpZ3MgPSBNYXBCb3hNYXJrZXJDb25maWcuZnJvbShcbiAgICAgIG1hcERhdGEubWFwTWFya2VycyxcbiAgICAgIHRoaXMuX3BpbkNvbmZpZyxcbiAgICAgIHRoaXMuX21hcCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcGJveE1hcE1hcmtlckNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB3cmFwcGVyID0gbWFwYm94TWFwTWFya2VyQ29uZmlnc1tpXS53cmFwcGVyO1xuICAgICAgbGV0IGNvb3JkcyA9IG5ldyBtYXBib3hnbC5MbmdMYXQoXG4gICAgICAgIG1hcGJveE1hcE1hcmtlckNvbmZpZ3NbaV0ucG9zaXRpb24ubG9uZ2l0dWRlLFxuICAgICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzW2ldLnBvc2l0aW9uLmxhdGl0dWRlKTtcbiAgICAgIGxldCBtYXJrZXIgPSBuZXcgbWFwYm94Z2wuTWFya2VyKHdyYXBwZXIpLnNldExuZ0xhdChjb29yZHMpO1xuICAgICAgbWFya2VyLmFkZFRvKHRoaXMuX21hcCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXBCb3hNYXJrZXJDb25maWcge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBtYXBib3ggbWFwLCB0aGF0IHRoZSBtYXJrZXIgaXMgYXBwZW5kZWQgdG9cbiAgICAgKiBAdHlwZSB7TWFwQm94fVxuICAgICAqL1xuICAgIHRoaXMubWFwID0gb3B0cy5tYXAgfHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBtYXJrZXIgKGxhdC9sbmcpXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLnBvc2l0aW9uID0gb3B0cy5wb3NpdGlvbiB8fCB7XG4gICAgICBsYXRpdHVkZTogdW5kZWZpbmVkLFxuICAgICAgbG9uZ2l0dWRlOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGh0bWwgZWxlbWVudCB0byBiZSB1c2VkIGFzIHRoZSBtYXAgbWFya2VyXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLndyYXBwZXIgPSBvcHRzLndyYXBwZXIgfHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIG9mIHRoZSBtYXJrZXIgdG8gdXNlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmxhYmVsID0gb3B0cy5sYWJlbCB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdXJsIG9mIHRoZSBwaW4gZm9yIHRoZSBzdGF0aWMgbWFwXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnN0YXRpY01hcFBpbiA9IG9wdHMuc3RhdGljTWFwUGluIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGFuIGFycmF5IG9mIG1hcmtlciBjb25maWdzXG4gICAqIEBwYXJhbSB7TWFwQm94TWFya2VyQ29uZmlnW119IG1hcGJveE1hcE1hcmtlckNvbmZpZ3NcbiAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZSAobWFwYm94TWFwTWFya2VyQ29uZmlncykge1xuICAgIGxldCBzZXJpYWxpemVkTWFya2VycyA9IFtdO1xuICAgIG1hcGJveE1hcE1hcmtlckNvbmZpZ3MuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBpZiAobWFya2VyLnN0YXRpY01hcFBpbikge1xuICAgICAgICBzZXJpYWxpemVkTWFya2Vycy5wdXNoKGB1cmwtJHttYXJrZXIuc3RhdGljTWFwUGlufSgke21hcmtlci5wb3NpdGlvbi5sb25naXR1ZGV9LCR7bWFya2VyLnBvc2l0aW9uLmxhdGl0dWRlfSlgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlcmlhbGl6ZWRNYXJrZXJzLnB1c2goYHBpbi1zLSR7bWFya2VyLmxhYmVsfSgke21hcmtlci5wb3NpdGlvbi5sb25naXR1ZGV9LCR7bWFya2VyLnBvc2l0aW9uLmxhdGl0dWRlfSlgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2VyaWFsaXplZE1hcmtlcnMuam9pbignLCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBzdG9yYWdlIGRhdGEgbW9kZWwgb2YgbWFya2VycyBpbnRvIEdvb2dsZUFQSU1hcmtlclxuICAgKiBAcGFyYW0ge01hcEJveH0gQSByZWZlcmVuY2UgdG8gdGhlIGdvb2dsZSBtYXAgdG8gYXBwbHkgdGhlIG1hcmtlciB0b1xuICAgKiBAcGFyYW0ge29iamVjdFtdfSBtYXJrZXJzIFRoZSBkYXRhIG9mIHRoZSBtYXJrZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IHBpbkNvbmZpZyBUaGUgY29uZmlndXJhdGlvbiB0byBhcHBseSB0byB0aGUgbWFya2VyXG4gICAqIEByZXR1cm5zIHtNYXBCb3hNYXJrZXJDb25maWdbXX1cbiAgICovXG4gIHN0YXRpYyBmcm9tIChtYXJrZXJzLCBwaW5Db25maWcsIG1hcCkge1xuICAgIGxldCBtYXBib3hNYXBNYXJrZXJDb25maWdzID0gW107XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1hcmtlcnMpKSB7XG4gICAgICBtYXJrZXJzID0gW21hcmtlcnNdO1xuICAgIH1cblxuICAgIG1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICAvLyBTdXBwb3J0IGNvbmZpZ3VyYXRpb24gYXMgYSBmdW5jdGlvblxuICAgICAgbGV0IHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZztcbiAgICAgIGlmICh0eXBlb2YgcGluQ29uZmlnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZyhcbiAgICAgICAgICBtYXJrZXIuaXRlbSxcbiAgICAgICAgICBNYXBQcm92aWRlci5ERUZBVUxUX1BJTl9DT05GSUcsXG4gICAgICAgICAgbWFya2VyKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgd3JhcHBlciA9IHBpbkNvbmZpZ09iai53cmFwcGVyID8gcGluQ29uZmlnT2JqLndyYXBwZXIgOiBudWxsO1xuICAgICAgY29uc3Qgc3RhdGljTWFwUGluID0gcGluQ29uZmlnT2JqLnN0YXRpY01hcFBpbiA/IHBpbkNvbmZpZ09iai5zdGF0aWNNYXBQaW4gOiBudWxsO1xuXG4gICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzLnB1c2goXG4gICAgICAgIG5ldyBNYXBCb3hNYXJrZXJDb25maWcoe1xuICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICBsYXRpdHVkZTogbWFya2VyLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBtYXJrZXIubG9uZ2l0dWRlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB3cmFwcGVyOiB3cmFwcGVyLFxuICAgICAgICAgIGxhYmVsOiBtYXJrZXIubGFiZWwsXG4gICAgICAgICAgc3RhdGljTWFwUGluOiBzdGF0aWNNYXBQaW5cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWFwYm94TWFwTWFya2VyQ29uZmlncztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTWFwQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuaW1wb3J0IEdvb2dsZU1hcFByb3ZpZGVyIGZyb20gJy4vcHJvdmlkZXJzL2dvb2dsZW1hcHByb3ZpZGVyJztcbmltcG9ydCBNYXBCb3hNYXBQcm92aWRlciBmcm9tICcuL3Byb3ZpZGVycy9tYXBib3htYXBwcm92aWRlcic7XG5cbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG5jb25zdCBQcm92aWRlclR5cGVzID0ge1xuICAnZ29vZ2xlJzogR29vZ2xlTWFwUHJvdmlkZXIsXG4gICdtYXBib3gnOiBNYXBCb3hNYXBQcm92aWRlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogQmluZCB0aGlzIGNvbXBvbmVudCB0byBsaXN0ZW4gdG8gdGhlIHN0b3JhZ2UgYmFzZWQgb24gdGhpcyBrZXlcbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUztcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IHRlbXBsYXRlIHRvIHVzZSB0byByZW5kZXIgdGhpcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncmVzdWx0cy9tYXAnO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWxpYXNlZCB1c2VkIHRvIGRldGVybWluZSB0aGUgdHlwZSBvZiBtYXAgcHJvdmlkZXIgdG8gdXNlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9tYXBQcm92aWRlciA9IG9wdHMubWFwUHJvdmlkZXI7XG4gICAgaWYgKCF0aGlzLl9tYXBQcm92aWRlciB8fCAhKHRoaXMuX21hcFByb3ZpZGVyLnRvTG93ZXJDYXNlKCkgaW4gUHJvdmlkZXJUeXBlcykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWFwQ29tcG9uZW50OiBJbnZhbGlkIE1hcCBQcm92aWRlcjsgbXVzdCBiZSBgZ29vZ2xlYCBvciBgbWFwQm94YCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIGluZGljYXRpb24gb2Ygd2hldGhlciBvciBub3QgdG8gdXNlIGEgc3RhdGljIG9yIGR5bmFtaWMgbWFwXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5faXNTdGF0aWMgPSBvcHRzLmlzU3RhdGljIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gYW4gaW5zdGFuY2Ugb2YgdGhlIHtNYXBQcm92aWRlcn0gdGhhdCdzIGNvbnN0cnVjdGVkXG4gICAgICogQHR5cGUge01hcFByb3ZpZGVyfVxuICAgICAqL1xuICAgIHRoaXMuX21hcCA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTWFwJztcbiAgfVxuXG4gIC8vIFRPRE8oYmlsbHkpIE1ha2UgUHJvdmlkZXJUeXBlcyBhIGZhY3RvcnkgY2xhc3NcbiAgZ2V0UHJvdmlkZXJJbnN0YW5jZSAodHlwZSkge1xuICAgIHJldHVybiBuZXcgUHJvdmlkZXJUeXBlc1t0eXBlLnRvTG93ZXJDYXNlKCldKHRoaXMuX29wdHMpO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIHRoaXMuX21hcCA9IHRoaXMuZ2V0UHJvdmlkZXJJbnN0YW5jZSh0aGlzLl9tYXBQcm92aWRlcik7XG4gICAgbGV0IG1hcERhdGEgPSB0aGlzLmdldFN0YXRlKCdtYXAnKTtcbiAgICBpZiAobWFwRGF0YSA9PT0gdW5kZWZpbmVkICYmIHRoaXMuX2lzU3RhdGljKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTdGF0aWMpIHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIFRoZSBleGlzdGluZyB0ZW1wbGF0ZSBzaG91bGQganVzdCB0YWtlIGluIHRoZSBtYXAgYGltZ1VSTGAgYXMgZGF0YVxuICAgICAgLy8gSW5zdGVhZCBvZiBvdmVycmlkaW5nIHRoZSB0ZW1wbGF0ZSBsaWtlIHNvLCBidXQgTkJEIGZvciBub3cuXG4gICAgICB0aGlzLnNldFRlbXBsYXRlKHRoaXMuX21hcC5nZW5lcmF0ZVN0YXRpYyhtYXBEYXRhKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLl9tYXAubG9hZEpTKCk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICB0aGlzLl9tYXAub25Mb2FkZWQoKCkgPT4ge1xuICAgICAgdGhpcy5fbWFwLmluaXQodGhpcy5fY29udGFpbmVyLCB0aGlzLmdldFN0YXRlKCdtYXAnKSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSwgdmFsKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKGRhdGEsIHZhbCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlc3VsdHNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL2xvY2F0aW9ucmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Blb3BsZXJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBNYXBDb21wb25lbnQgZnJvbSAnLi4vbWFwL21hcGNvbXBvbmVudCc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuY29uc3QgUmVzdWx0VHlwZSA9IHtcbiAgRVZFTlQ6ICdldmVudCcsXG4gIExPQ0FUSU9OOiAnbG9jYXRpb24nLFxuICBQRU9QTEU6ICdwZW9wbGUnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHRzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFM7XG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3Jlc3VsdHMvcmVzdWx0cyc7XG4gICAgdGhpcy5saW1pdCA9IG9wdHMubGltaXQgfHwgNTtcbiAgICB0aGlzLl9pdGVtQ29uZmlnID0ge1xuICAgICAgZ2xvYmFsOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH0sXG4gICAgICBbRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlXToge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9LFxuICAgICAgW0xvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZV06IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIFtQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlXToge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChvcHRzLnJlbmRlckl0ZW0gPT09IHVuZGVmaW5lZCAmJiBvcHRzLl9wYXJlbnRPcHRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdHMucmVuZGVySXRlbSA9IG9wdHMuX3BhcmVudE9wdHMucmVuZGVySXRlbTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5pdGVtVGVtcGxhdGUgPT09IHVuZGVmaW5lZCAmJiBvcHRzLl9wYXJlbnRPcHRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdHMuaXRlbVRlbXBsYXRlID0gb3B0cy5fcGFyZW50T3B0cy5pdGVtVGVtcGxhdGU7XG4gICAgfVxuXG4gICAgdGhpcy5jb25maWd1cmVJdGVtKHtcbiAgICAgIHJlbmRlcjogb3B0cy5yZW5kZXJJdGVtLFxuICAgICAgdGVtcGxhdGU6IG9wdHMuaXRlbVRlbXBsYXRlXG4gICAgfSk7XG4gIH1cblxuICBtb3VudCAoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZ2V0U3RhdGUoKSkubGVuZ3RoID4gMCkge1xuICAgICAgc3VwZXIubW91bnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZHVwbGljYXRlc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBpbmNsdWRlTWFwOiB0aGlzLl9vcHRzLmluY2x1ZGVNYXAsXG4gICAgICBtYXBDb25maWc6IHRoaXMuX29wdHMubWFwQ29uZmlnXG4gICAgfSksIHZhbCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnVmVydGljYWxSZXN1bHRzJztcbiAgfVxuXG4gIGNvbmZpZ3VyZUl0ZW0gKGNvbmZpZykge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5faXRlbUNvbmZpZy5nbG9iYWwucmVuZGVyID0gY29uZmlnLnJlbmRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbmZpZy5yZW5kZXIpIHtcbiAgICAgICAgdGhpcy5zZXRJdGVtUmVuZGVyKGtleSwgY29uZmlnLnJlbmRlcltrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2l0ZW1Db25maWcuZ2xvYmFsLnRlbXBsYXRlID0gY29uZmlnLnRlbXBsYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29uZmlnLnRlbXBsYXRlKSB7XG4gICAgICAgIHRoaXMuc2V0SXRlbVRlbXBsYXRlKGtleSwgY29uZmlnLnRlbXBsYXRlW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldEl0ZW1UZW1wbGF0ZSAodHlwZSwgdGVtcGxhdGUpIHtcbiAgICBsZXQgY2xhenogPSB0aGlzLmdldEl0ZW1Db21wb25lbnQodHlwZSk7XG4gICAgdGhpcy5faXRlbUNvbmZpZ1tjbGF6ei50eXBlXS50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICB9XG5cbiAgc2V0SXRlbVJlbmRlciAodHlwZSwgcmVuZGVyKSB7XG4gICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KHR5cGUpO1xuICAgIHRoaXMuX2l0ZW1Db25maWdbY2xhenoudHlwZV0ucmVuZGVyID0gcmVuZGVyO1xuICB9XG5cbiAgZ2V0SXRlbUNvbXBvbmVudCAodHlwZSkge1xuICAgIGxldCBjb21wID0gUmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFJlc3VsdFR5cGUuRVZFTlQ6XG4gICAgICAgIGNvbXAgPSBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUmVzdWx0VHlwZS5MT0NBVElPTjpcbiAgICAgICAgY29tcCA9IExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSZXN1bHRUeXBlLlBFT1BMRTpcbiAgICAgICAgY29tcCA9IFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcDtcbiAgfVxuXG4gIGFkZENoaWxkIChkYXRhLCB0eXBlLCBvcHRzKSB7XG4gICAgLy8gVE9ETyhiaWxseSkgUmVmYWN0b3IgdGhlIHdheSBjb25maWd1cmF0aW9uIGFuZCBkYXRhIGZsb3dzXG4gICAgLy8gdGhyb3VnaCB0b3AgbGV2ZWwgY29tcG9uZW50cyB0byBjaGlsZCBjb21wb25lbnRzLlxuICAgIGlmICh0eXBlID09PSBSZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlKSB7XG4gICAgICBsZXQgY2xhenogPSB0aGlzLmdldEl0ZW1Db21wb25lbnQoZGF0YS50eXBlKTtcbiAgICAgIGlmIChjbGF6eikge1xuICAgICAgICB0eXBlID0gY2xhenoudHlwZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IE1hcENvbXBvbmVudC50eXBlKSB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICBtYXA6IGRhdGFcbiAgICAgIH07XG4gICAgICBjb25zdCBuZXdPcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fb3B0cy5tYXBDb25maWcsIG9wdHMpO1xuICAgICAgcmV0dXJuIHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIG5ld09wdHMpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHRoZSBwcm9wZXIgaXRlbSByZW5kZXJzIHRvIHRoZSB0aGUgY29tcG9uZW50c1xuICAgIC8vIGhhdmUganVzdCBiZWVuIGNvbnN0cnVjdGVkLiBQcmlvcml0aXplIGdsb2JhbCBvdmVyIGluZGl2aWR1YWwgaXRlbXMuXG4gICAgbGV0IGNvbXAgPSBzdXBlci5hZGRDaGlsZChkYXRhLCB0eXBlLCBvcHRzKTtcbiAgICBsZXQgZ2xvYmFsQ29uZmlnID0gdGhpcy5faXRlbUNvbmZpZy5nbG9iYWw7XG4gICAgbGV0IGl0ZW1Db25maWcgPSB0aGlzLl9pdGVtQ29uZmlnW2NvbXAudHlwZV07XG4gICAgbGV0IGhhc0dsb2JhbFJlbmRlciA9IHR5cGVvZiBnbG9iYWxDb25maWcucmVuZGVyID09PSAnZnVuY3Rpb24nO1xuICAgIGxldCBoYXNHbG9iYWxUZW1wbGF0ZSA9IHR5cGVvZiBnbG9iYWxDb25maWcudGVtcGxhdGUgPT09ICdzdHJpbmcnO1xuXG4gICAgaWYgKGhhc0dsb2JhbFJlbmRlcikge1xuICAgICAgY29tcC5zZXRSZW5kZXIoZ2xvYmFsQ29uZmlnLnJlbmRlcik7XG4gICAgfVxuXG4gICAgaWYgKGhhc0dsb2JhbFRlbXBsYXRlKSB7XG4gICAgICBjb21wLnNldFRlbXBsYXRlKGdsb2JhbENvbmZpZy50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKCFpdGVtQ29uZmlnKSB7XG4gICAgICByZXR1cm4gY29tcDtcbiAgICB9XG5cbiAgICBpZiAoIWhhc0dsb2JhbFJlbmRlciAmJiBpdGVtQ29uZmlnLnJlbmRlcikge1xuICAgICAgY29tcC5zZXRSZW5kZXIoaXRlbUNvbmZpZy5yZW5kZXIpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHRlbXBsYXRlIHNwZWNpZmljIHNpdHVhdGlvblxuICAgIGlmICghaGFzR2xvYmFsVGVtcGxhdGUgJiYgaXRlbUNvbmZpZy50ZW1wbGF0ZSkge1xuICAgICAgY29tcC5zZXRUZW1wbGF0ZShpdGVtQ29uZmlnLnRlbXBsYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXA7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFM7XG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3Jlc3VsdHMvdW5pdmVyc2FscmVzdWx0cyc7XG4gICAgdGhpcy5fbGltaXQgPSBvcHRzLmxpbWl0IHx8IDEwO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1VuaXZlcnNhbFJlc3VsdHMnO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpbml0IChvcHRzKSB7XG4gICAgc3VwZXIuaW5pdChvcHRzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZENoaWxkIChkYXRhID0ge30sIHR5cGUpIHtcbiAgICBsZXQgb3B0cyA9IHRoaXMuZ2V0Q2hpbGRDb25maWcoW2RhdGFbJ3ZlcnRpY2FsQ29uZmlnSWQnXV0pO1xuICAgIHJldHVybiBzdXBlci5hZGRDaGlsZChkYXRhLCB0eXBlLCBvcHRzKTtcbiAgfVxuXG4gIGdldENoaWxkQ29uZmlnIChjb25maWdJZCkge1xuICAgIGxldCBjb25maWcgPSB0aGlzLl9vcHRzLmNvbmZpZztcbiAgICBpZiAoY29uZmlnID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX29wdHNbJ2NvbmZpZyddW2NvbmZpZ0lkXSB8fCB0aGlzLl9vcHRzWydjb25maWcnXTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUUztcblxuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdxdWVzdGlvbnMvc3VibWlzc2lvbic7XG5cbiAgICAvKipcbiAgICAgKiBRdWVzdGlvbiBzdWJtaXNzaW9uIGlzIGJhc2VkIG9uIGEgZm9ybSBhcyBjb250ZXh0LlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBuYXRpdmUgZm9ybSBub2RlIHdpdGhpbiBjb250YWluZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9mb3JtRWwgPSBvcHRzLmZvcm1TZWxlY3RvciB8fCAnZm9ybSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgZS1tYWlsIGFkZHJlc3MgaW5wdXRcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gYEVtYWlsIEFkZHJlc3NgXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9lbWFpbExhYmVsID0gb3B0cy5lbWFpbExhYmVsIHx8ICcqRW1haWwgQWRkcmVzczonO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIG5hbWUgaW5wdXRcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gYE5hbWVgXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9uYW1lTGFiZWwgPSBvcHRzLm5hbWVMYWJlbCB8fCAnTmFtZTonO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIFF1ZXN0aW9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIGBXaGF0IGlzIHlvdXIgcXVlc3Rpb24/YFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fcXVlc3Rpb25MYWJlbCA9IG9wdHMucXVlc3Rpb25MYWJlbCB8fCAnKldoYXQgaXMgeW91ciBxdWVzdGlvbj8nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIFByaXZhY3kgUG9saWN5XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIGBXaGF0IGlzIHlvdXIgcXVlc3Rpb24/YFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fcHJpdmFjeVBvbGljeUxhYmVsID0gb3B0cy5wcml2YWN5UG9saWN5TGFiZWwgfHwgJ0kgYWdyZWUgdG8gb3VyIFByaXZhY3kgUG9saWN5Oic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgU3VibWl0IGJ1dHRvblxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBgU3VibWl0P2BcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2J1dHRvbkxhYmVsID0gb3B0cy5idXR0b25MYWJlbCB8fCAnU3VibWl0JztcbiAgfVxuXG4gIGJlZm9yZU1vdW50ICgpIHtcbiAgICAvLyBPbmx5IG1vdW50IG91ciBjb21wb25lbnQgaWYgdGhlIHF1ZXJ5IGhhcyBiZWVuIHRyaWdnZXJlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0aGlzLmdldFN0YXRlKCdoYXNRdWVyaWVkJykgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIHRoaXMuaW5pdFN1Ym1pdCh0aGlzLl9mb3JtRWwpO1xuICB9XG5cbiAgaW5pdFN1Ym1pdCAoZm9ybVNlbGVjdG9yKSB7XG4gICAgdGhpcy5fZm9ybUVsID0gZm9ybVNlbGVjdG9yO1xuXG4gICAgbGV0IGZvcm0gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9mb3JtRWwpO1xuXG4gICAgRE9NLm9uKGZvcm0sICdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gVE9ETyhiaWxseSkgU2VyaWFsaXplIGZvcm1cbiAgICAgIC8vIHRoaXMuY29yZS5zdWJtaXRRdWVzdGlvbihmb3JtKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdRQVN1Ym1pc3Npb24nO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIC8vIFNpbmNlIHdlJ3JlIGJpbmRpbmcgdG8gc2VhcmNoIHJlc3VsdHMsXG4gICAgLy8gYW5kIHdlIG9ubHkgd2FudCB0byBzaG93IHRoZSBRQSBzdWJtaXNzaW9uXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKHtcbiAgICAgIGhhc1F1ZXJpZWQ6IGRhdGEuc2VjdGlvbnMgIT09IHVuZGVmaW5lZCxcbiAgICAgIGVtYWlsTGFiZWw6IHRoaXMuX2VtYWlsTGFiZWwsXG4gICAgICBuYW1lTGFiZWw6IHRoaXMuX25hbWVMYWJlbCxcbiAgICAgIHF1ZXN0aW9uTGFiZWw6IHRoaXMuX3F1ZXN0aW9uTGFiZWwsXG4gICAgICBwcml2YWN5UG9saWN5TGFiZWw6IHRoaXMuX3ByaXZhY3lQb2xpY3lMYWJlbCxcbiAgICAgIGJ1dHRvbkxhYmVsOiB0aGlzLl9idXR0b25MYWJlbCxcbiAgICAgIHF1ZXN0aW9uOiBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKS5nZXQoJ3F1ZXJ5JylcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi9jb21wb25lbnRtYW5hZ2VyJztcblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XG5cbmltcG9ydCBOYXZpZ2F0aW9uQ29tcG9uZW50IGZyb20gJy4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uY29tcG9uZW50JztcblxuaW1wb3J0IFNlYXJjaENvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9zZWFyY2hjb21wb25lbnQnO1xuaW1wb3J0IEZpbHRlclNlYXJjaENvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9maWx0ZXJzZWFyY2hjb21wb25lbnQnO1xuaW1wb3J0IEF1dG9Db21wbGV0ZUNvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9hdXRvY29tcGxldGVjb21wb25lbnQnO1xuXG5pbXBvcnQgRmlsdGVyT3B0aW9uc0NvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZmlsdGVyb3B0aW9uc2NvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyQm94Q29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9maWx0ZXJib3hjb21wb25lbnQnO1xuXG5pbXBvcnQgRGlyZWN0QW5zd2VyQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9kaXJlY3RhbnN3ZXJjb21wb25lbnQnO1xuaW1wb3J0IFJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Jlc3VsdHNjb21wb25lbnQnO1xuaW1wb3J0IFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHNjb21wb25lbnQnO1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcGVvcGxlcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5pbXBvcnQgTWFwQ29tcG9uZW50IGZyb20gJy4vbWFwL21hcGNvbXBvbmVudCc7XG5cbmltcG9ydCBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgZnJvbSAnLi9xdWVzdGlvbnMvcXVlc3Rpb25zdWJtaXNzaW9uY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9NQU5BR0VSID0gbmV3IENvbXBvbmVudE1hbmFnZXIoKVxuLy8gQ29yZSBDb21wb25lbnRcbiAgLnJlZ2lzdGVyKENvbXBvbmVudClcblxuLy8gTmF2aWdhdGlvbiBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihOYXZpZ2F0aW9uQ29tcG9uZW50KVxuXG4vLyBTZWFyY2ggQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoU2VhcmNoQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRmlsdGVyU2VhcmNoQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoQXV0b0NvbXBsZXRlQ29tcG9uZW50KVxuXG4vLyBGaWx0ZXIgQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoRmlsdGVyQm94Q29tcG9uZW50KVxuICAucmVnaXN0ZXIoRmlsdGVyT3B0aW9uc0NvbXBvbmVudClcblxuLy8gUmVzdWx0cyBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihEaXJlY3RBbnN3ZXJDb21wb25lbnQpXG4gIC5yZWdpc3RlcihVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoUmVzdWx0c0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFJlc3VsdHNJdGVtQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQpXG4gIC5yZWdpc3RlcihQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudClcblxuICAucmVnaXN0ZXIoTWFwQ29tcG9uZW50KVxuXG4vLyBRdWVzdGlvbnMgQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50KTtcbiIsIi8qKiBAbW9kdWxlIFRlbXBsYXRlTG9hZGVyICovXG5cbmltcG9ydCBET00gZnJvbSAnLi4vZG9tL2RvbSc7XG5pbXBvcnQgeyBDT01QSUxFRF9URU1QTEFURVNfVVJMIH0gZnJvbSAnLi4vLi4vY29yZS9jb25zdGFudHMnO1xuXG4vKipcbiAqIFRlbXBsYXRlTG9hZGVyIGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBsb2FkaW5nIHRlbXBsYXRlcyBhc3luY2hyb25vdXNseVxuICogZnJvbSB0aGUgc2VydmVyIGFuZCByZWdpc3RlcnMgdGhlbSB3aXRoIHRoZSBwcm9wZXIgcmVuZGVyZXIuXG4gKiBJdCBhbHNvIGFsbG93cyB5b3UgdG8gYXNzaWduIHRoZW0gc3luY2hyb25vdXNseS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVMb2FkZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgaWYgKCFUZW1wbGF0ZUxvYWRlci5zZXRJbnN0YW5jZSh0aGlzKSkge1xuICAgICAgcmV0dXJuIFRlbXBsYXRlTG9hZGVyLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHVybCB0byBmZXRjaCBjb21waWxlZCB0ZW1wbGF0ZXMgZnJvbVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZVVybCA9IGNvbmZpZy50ZW1wbGF0ZVVybCB8fCBDT01QSUxFRF9URU1QTEFURVNfVVJMO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVzID0ge307XG4gICAgdGhpcy5fb25Mb2FkZWQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB0aGlzLl9pbml0KCk7XG4gIH1cblxuICBzdGF0aWMgc2V0SW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIF9pbml0ICgpIHtcbiAgICB0aGlzLmZldGNoVGVtcGxhdGVzKCk7XG4gIH1cblxuICBmZXRjaFRlbXBsYXRlcyAoKSB7XG4gICAgLy8gSWYgd2UgYWxyZWFkeSBoYXZlIHRlbXBsYXRlcyBsb2FkZWQsIGRvIG5vdGhpbmdcbiAgICBsZXQgbm9kZSA9IERPTS5xdWVyeSgnI3lleHQtYW5zd2Vycy10ZW1wbGF0ZXMnKTtcbiAgICBpZiAobm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEluamVjdCBhIHNjcmlwdCB0byBmZXRjaCB0aGUgY29tcGlsZWQgdGVtcGxhdGVzLFxuICAgIC8vIHdyYXBwaW5nIGl0IGEgUHJvbWlzZSBmb3IgY2xlYW5saW5lc3NcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICAgIGlkOiAneWV4dC1hbnN3ZXJzLXRlbXBsYXRlcycsXG4gICAgICAgIG9ubG9hZDogcmVzb2x2ZSxcbiAgICAgICAgb25lcnJvcjogcmVqZWN0LFxuICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgc3JjOiB0aGlzLl90ZW1wbGF0ZVVybFxuICAgICAgfSk7XG5cbiAgICAgIERPTS5hcHBlbmQoJ2JvZHknLCBzY3JpcHQpO1xuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIEltcGxtZW5ldCBlcnJvciBoYW5kbGluZyBoZXJlIChlLmcuIHJlcXVlc3QgY291bGQgZmFpbClcbiAgICAgICAgY29uc29sZS5sb2coJ1RlbXBsYXRlcyBsb2FkZWQgc3VjY2Vzc2Z1bGx5IScpO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXIgdGhlIHRlbXBsYXRlcyBpbnRlcm5hbGx5IHNvIHRoYXQgdGhleSBjYW4gYmUgbGF0ZXIgY29uc3VtZWRcbiAgICogKGUuZy4gYnkgY29tcG9uZW50cyBhbmQgcmVuZGVyZXJzKSB3aXRoIGNvbnZpZW5pZW5jZS5cbiAgICpcbiAgICogYGZldGNoVGVtcGxhdGVzYCB3aWxsIGF1dG9tYXRpY2FsbHkgY2FsbCB0aGlzLCBwcm92aWRpbmcgdGhlIGNvbXBpbGVkIHRlbXBsYXRlcyBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICByZWdpc3RlciAodGVtcGxhdGVzKSB7XG4gICAgdGhpcy5fdGVtcGxhdGVzID0gdGVtcGxhdGVzO1xuXG4gICAgLy8gTm90aWZ5IG91ciBjb25zdW1lcnMgdGhhdCB0aGUgdGVtcGxhdGVzIGFyZSBoZXJlIDopXG4gICAgdGhpcy5fb25Mb2FkZWQodGhpcy5fdGVtcGxhdGVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9uTG9hZGVkIChjYikge1xuICAgIHRoaXMuX29uTG9hZGVkID0gY2I7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgKHRlbXBsYXRlTmFtZSkge1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXNbdGVtcGxhdGVOYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIFRoZSBpbnRlcm5hbCB0ZW1wbGF0ZSBjb2xsZWN0aW9uXG4gICAqL1xuICBnZXRUZW1wbGF0ZXMgKCkge1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEVycm9yUmVwb3J0ZXIgKi9cblxuaW1wb3J0IHsgQW5zd2Vyc0Jhc2VFcnJvciB9IGZyb20gJy4vZXJyb3JzJztcblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCB7IExJQl9WRVJTSU9OIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBFcnJvclJlcG9ydGVyIGlzIHVzZWQgZm9yIHJlcG9ydGluZyBlcnJvcnMgdG8gdGhlIHNlcnZlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvclJlcG9ydGVyIHtcbiAgY29uc3RydWN0b3IgKGFwaUtleSwgYW5zd2Vyc0tleSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBhcGlLZXkgdG8gdXNlIGZvciByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuYXBpS2V5ID0gYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFuc3dlcnNLZXkgdG8gdXNlIHdoZW4gcmVwb3J0aW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmFuc3dlcnNLZXkgPSBhbnN3ZXJzS2V5O1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcG9ydCBzZW5kcyBhIG5ldHdvcmsgcmVxdWVzdCB0byB0aGUgc2VydmVyIHRvIGJlIGxvZ2dlZFxuICAgKiBAcGFyYW0ge0Fuc3dlcnNCYXNlRXJyb3J9IFRoZSBlcnJvciB0byBiZSByZXBvcnRlZFxuICAgKi9cbiAgcmVwb3J0IChlcnIpIHtcbiAgICBpZiAoIShlcnIgaW5zdGFuY2VvZiBBbnN3ZXJzQmFzZUVycm9yKSB8fCBlcnIucmVwb3J0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnIucmVwb3J0ZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvZXJyb3JzJyxcbiAgICAgIGFwaUtleTogdGhpcy5hcGlLZXksXG4gICAgICB2ZXJzaW9uOiAyMDE5MDMwMSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnZXJyb3InOiBlcnIudG9Kc29uKCksXG4gICAgICAgICdsaWJWZXJzaW9uJzogTElCX1ZFUlNJT04sXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5hbnN3ZXJzS2V5XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXF1ZXN0LmdldCgpXG4gICAgICAuY2F0Y2goY29uc29sZS5lcnIpO1xuXG4gICAgcmV0dXJuIGVycjtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuaW1wb3J0IENvcmUgZnJvbSAnLi9jb3JlL2NvcmUnO1xuXG5pbXBvcnQge1xuICBUZW1wbGF0ZUxvYWRlcixcbiAgQ09NUE9ORU5UX01BTkFHRVIsXG4gIFJlbmRlcmVycyxcbiAgRE9NXG59IGZyb20gJy4vdWkvaW5kZXgnO1xuXG5pbXBvcnQgRXJyb3JSZXBvcnRlciBmcm9tICcuL2NvcmUvZXJyb3JzL2Vycm9ycmVwb3J0ZXInO1xuaW1wb3J0IHsgQW5hbHl0aWNzUmVwb3J0ZXIgfSBmcm9tICcuL2NvcmUnO1xuXG4vKipcbiAqIFRoZSBtYWluIEFuc3dlcnMgaW50ZXJmYWNlXG4gKi9cbmNsYXNzIEFuc3dlcnMge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgaWYgKCFBbnN3ZXJzLnNldEluc3RhbmNlKHRoaXMpKSB7XG4gICAgICByZXR1cm4gQW5zd2Vycy5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIG9mIHRoZSByZW5kZXJlciB0byB1c2UgZm9yIHRoZSBjb21wb25lbnRzXG4gICAgICogVGhpcyBpcyBwcm92aWRlZCBkdXJpbmcgaW5pdGlhbGl6YXRpb24uXG4gICAgICogQHR5cGUge1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXJzLkhhbmRsZWJhcnMoKTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlclxuICAgICAqIEB0eXBlIHtDb21wb25lbnRNYW5hZ2VyfVxuICAgICAqL1xuICAgIHRoaXMuY29tcG9uZW50cyA9IENPTVBPTkVOVF9NQU5BR0VSO1xuXG4gICAgLyoqXG4gICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiB0byBpbnZva2Ugb25jZSB0aGUgbGlicmFyeSBpcyByZWFkeS5cbiAgICAgKiBUeXBpY2FsbHkgZmlyZWQgYWZ0ZXIgdGVtcGxhdGVzIGFyZSBmZXRjaGVkIGZyb20gc2VydmVyIGZvciByZW5kZXJpbmcuXG4gICAgICovXG4gICAgdGhpcy5fb25SZWFkeSA9IGZ1bmN0aW9uICgpIHt9O1xuICB9XG5cbiAgc3RhdGljIHNldEluc3RhbmNlIChpbnN0YW5jZSkge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cblxuICBpbml0IChjb25maWcpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMuc2V0Q29yZShuZXcgQ29yZSh7XG4gICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgICBhbnN3ZXJzS2V5OiBjb25maWcuYW5zd2Vyc0tleSxcbiAgICAgIGxvY2FsZTogY29uZmlnLmxvY2FsZVxuICAgIH0pKVxuICAgICAgLnNldFJlbmRlcmVyKHRoaXMucmVuZGVyZXIpXG4gICAgICAuc2V0QW5hbHl0aWNzUmVwb3J0ZXIobmV3IEFuYWx5dGljc1JlcG9ydGVyKGNvbmZpZy5hcGlLZXksIGNvbmZpZy5hbnN3ZXJzS2V5KSk7XG5cbiAgICB0aGlzLl9vblJlYWR5ID0gY29uZmlnLm9uUmVhZHkgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICBpZiAoY29uZmlnLnVzZVRlbXBsYXRlcyA9PT0gZmFsc2UgfHwgY29uZmlnLnRlbXBsYXRlQnVuZGxlKSB7XG4gICAgICBpZiAoY29uZmlnLnRlbXBsYXRlQnVuZGxlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5pdChjb25maWcudGVtcGxhdGVCdW5kbGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9vblJlYWR5KCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBUZW1wbGF0ZXMgYXJlIGN1cnJlbnRseSBkb3dubG9hZGVkIHNlcGFyYXRlbHkgZnJvbSB0aGUgQ09SRSBhbmQgVUkgYnVuZGxlLlxuICAgIC8vIEZ1dHVyZSBlbmhhbmNlbWVudCBpcyB0byBzaGlwIHRoZSBjb21wb25lbnRzIHdpdGggdGVtcGxhdGVzIGluIGEgc2VwYXJhdGUgYnVuZGxlLlxuICAgIHRoaXMudGVtcGxhdGVzID0gbmV3IFRlbXBsYXRlTG9hZGVyKHtcbiAgICAgIHRlbXBsYXRlVXJsOiBjb25maWcudGVtcGxhdGVVcmxcbiAgICB9KS5vbkxvYWRlZCgodGVtcGxhdGVzKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmluaXQodGVtcGxhdGVzKTtcblxuICAgICAgdGhpcy5fb25SZWFkeSgpO1xuICAgIH0pO1xuXG4gICAgaWYgKCFjb25maWcuc3VwcHJlc3NFcnJvclJlcG9ydHMpIHtcbiAgICAgIHRoaXMuX2Vycm9yUmVwb3J0ZXIgPSBuZXcgRXJyb3JSZXBvcnRlcihjb25maWcuYXBpS2V5LCBjb25maWcuYW5zd2Vyc0tleSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlID0+IHRoaXMuX2Vycm9yUmVwb3J0ZXIucmVwb3J0KGUuZXJyb3IpKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmhhbmRsZWRyZWplY3Rpb24nLCBlID0+IHRoaXMuX2Vycm9yUmVwb3J0ZXIucmVwb3J0KGUuZXJyb3IpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRvbVJlYWR5IChjYikge1xuICAgIERPTS5vblJlYWR5KGNiKTtcbiAgfVxuXG4gIG9uUmVhZHkgKGNiKSB7XG4gICAgdGhpcy5fb25SZWFkeSA9IGNiO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkQ29tcG9uZW50ICh0eXBlLCBvcHRzKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuICAgICAgb3B0cyA9IHtcbiAgICAgICAgY29udGFpbmVyOiBvcHRzXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50cy5jcmVhdGUodHlwZSwgb3B0cykubW91bnQoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNyZWF0ZUNvbXBvbmVudCAob3B0cykge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHMuY3JlYXRlKCdDb21wb25lbnQnLCBvcHRzKS5tb3VudCgpO1xuICB9XG5cbiAgcmVnaXN0ZXJIZWxwZXIgKG5hbWUsIGNiKSB7XG4gICAgdGhpcy5yZW5kZXJlci5yZWdpc3RlckhlbHBlcihuYW1lLCBjYik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuY29uc3QgQU5TV0VSUyA9IG5ldyBBbnN3ZXJzKCk7XG5leHBvcnQgZGVmYXVsdCBBTlNXRVJTO1xuIl0sIm5hbWVzIjpbIk1ldGhvZHMiLCJHRVQiLCJQT1NUIiwiUFVUIiwiREVMRVRFIiwiSHR0cFJlcXVlc3RlciIsInVybCIsImRhdGEiLCJvcHRzIiwicmVxdWVzdCIsImVuY29kZVBhcmFtcyIsIk9iamVjdCIsImFzc2lnbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY3JlZGVudGlhbHMiLCJ1bmRlZmluZWQiLCJtZXRob2QiLCJmZXRjaCIsInBhcmFtcyIsImhhc1BhcmFtIiwiaW5kZXhPZiIsInNlYXJjaFF1ZXJ5Iiwia2V5IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiTElCX1ZFUlNJT04iLCJBUElfQkFTRV9VUkwiLCJDT01QSUxFRF9URU1QTEFURVNfVVJMIiwiQU5BTFlUSUNTX0JBU0VfVVJMIiwiU2VhcmNoUGFyYW1zIiwiX3BhcmFtcyIsIndpbmRvdyIsIlVSTFNlYXJjaFBhcmFtcyIsInBhcnNlIiwic2VhcmNoIiwic2xpY2UiLCJlbmNvZGVkUGFyYW1zIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwia2V5VmFsIiwiZGVjb2RlIiwicXVlcnkiLCJTdHJpbmciLCJuYW1lIiwidmFsdWUiLCJzdHJpbmciLCJwdXNoIiwiZW5jb2RlIiwiam9pbiIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJtYXRjaCIsIkFwaVJlcXVlc3QiLCJfcmVxdWVzdGVyIiwiX2Jhc2VVcmwiLCJiYXNlVXJsIiwiX2VuZHBvaW50IiwiZW5kcG9pbnQiLCJfYXBpS2V5IiwiYXBpS2V5IiwiX3ZlcnNpb24iLCJ2ZXJzaW9uIiwiZ2V0IiwicG9zdCIsImJhc2VQYXJhbXMiLCJ1cmxQYXJhbXMiLCJsb2NhdGlvbiIsInRvU3RyaW5nIiwiaGFzIiwia2V5cyIsImZvckVhY2giLCJBbnN3ZXJzQmFzZUVycm9yIiwiZXJyb3JDb2RlIiwibWVzc2FnZSIsImJvdW5kYXJ5IiwiY2F1c2VkQnkiLCJlcnJvck1lc3NhZ2UiLCJyZXBvcnRlZCIsImJ1aWx0aW5FcnJvciIsImVycm9yIiwiQW5zd2Vyc0Jhc2ljRXJyb3IiLCJzdGFjayIsIkVycm9yIiwiQW5zd2Vyc0NvbXBvbmVudEVycm9yIiwiY29tcG9uZW50IiwiQW5zd2Vyc0VuZHBvaW50RXJyb3IiLCJBbnN3ZXJzU3RvcmFnZUVycm9yIiwic3RvcmFnZUtleSIsIkFuc3dlcnNBbmFseXRpY3NFcnJvciIsImV2ZW50IiwiU2VhcmNoQXBpIiwiYW5zd2Vyc0tleSIsIl9hbnN3ZXJzS2V5IiwibG9jYWxlIiwiX2xvY2FsZSIsInF1ZXJ5U3RyaW5nIiwidmVydGljYWxLZXkiLCJmaWx0ZXIiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiQXV0b0NvbXBsZXRlRGF0YSIsInNlY3Rpb25zIiwicXVlcnlJZCIsImZyZWV6ZSIsIm1hcCIsInMiLCJsYWJlbCIsInJlc3VsdHMiLCJyIiwiQXV0b0NvbXBsZXRlUmVzdWx0IiwiaGlnaGxpZ2h0ZWRWYWx1ZSIsImhpZ2hsaWdodCIsIm1hdGNoZWRTdWJzdHJpbmdzIiwic2hvcnRWYWx1ZSIsInZhbCIsInNvcnQiLCJhIiwiYiIsIm9mZnNldCIsIm5leHRTdGFydCIsImoiLCJzdGFydCIsIk51bWJlciIsImVuZCIsIkF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lciIsIm1vZHVsZUlkIiwiZnJvbSIsIkF1dG9Db21wbGV0ZUFwaSIsImlucHV0IiwiYmFyS2V5IiwidmVydGljYWwiLCJ1bml2ZXJzYWwiLCJSZXN1bHQiLCJyZXN1bHRzRGF0YSIsIlNlY3Rpb24iLCJ2ZXJ0aWNhbENvbmZpZ0lkIiwicmVzdWx0c0NvdW50IiwiZW5jb2RlZFN0YXRlIiwiYXBwbGllZFF1ZXJ5RmlsdGVycyIsIkFwcGxpZWRRdWVyeUZpbHRlciIsImZhY2V0cyIsInBhcnNlTWFwIiwidmVydGljYWxVUkwiLCJtYXBNYXJrZXJzIiwiY2VudGVyQ29vcmRpbmF0ZXMiLCJyZXN1bHQiLCJ5ZXh0RGlzcGxheUNvb3JkaW5hdGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIml0ZW0iLCJtb2R1bGVzIiwidXJscyIsIkFycmF5IiwiaXNBcnJheSIsImFwcGxpZWRRdWVyeUZpbHRlciIsImRpc3BsYXlLZXkiLCJkaXNwbGF5VmFsdWUiLCJmaWx0ZXJzIiwiVW5pdmVyc2FsUmVzdWx0cyIsIkRpcmVjdEFuc3dlciIsImRpcmVjdEFuc3dlciIsIk5hdmlnYXRpb24iLCJ0YWJPcmRlciIsIm5hdiIsIlZlcnRpY2FsUmVzdWx0cyIsIk5BVklHQVRJT04iLCJVTklWRVJTQUxfUkVTVUxUUyIsIlZFUlRJQ0FMX1JFU1VMVFMiLCJBVVRPQ09NUExFVEUiLCJESVJFQ1RfQU5TV0VSIiwiRklMVEVSIiwiUVVFUlkiLCJTZWFyY2hEYXRhVHJhbnNmb3JtZXIiLCJTdG9yYWdlS2V5cyIsIkV2ZW50RW1pdHRlciIsIl9saXN0ZW5lcnMiLCJldnQiLCJjYiIsIm9uY2UiLCJvbiIsImxpc3RlbmVycyIsImtlZXAiLCJNb2R1bGVEYXRhIiwiaWQiLCJfaWQiLCJfaGlzdG9yeSIsIl9kYXRhIiwic2V0IiwibmV3RGF0YSIsImNhcHR1cmVQcmV2aW91cyIsImVtaXQiLCJzaGlmdCIsInByZXZpb3VzIiwiX3ByZXZpb3VzIiwicG9wIiwiU3RvcmFnZSIsIl9tb2R1bGVEYXRhQ29udGFpbmVyIiwiX2Z1dHVyZUxpc3RlbmVycyIsIl9pbml0RGF0YUNvbnRhaW5lciIsIl9hcHBseUZ1dHVyZUxpc3RlbmVycyIsInJhdyIsImRhdGFLZXkiLCJzdGFydHNXaXRoIiwibW9kdWxlRGF0YSIsIm9mZiIsImZ1dHVyZXMiLCJmdXR1cmUiLCJDb3JlIiwic3RvcmFnZSIsIl9zZWFyY2hlciIsIl9hdXRvQ29tcGxldGUiLCJ2ZXJ0aWNhbFF1ZXJ5IiwidHJhbnNmb3JtVmVydGljYWwiLCJ0cmFuc2Zvcm0iLCJuYW1lc3BhY2UiLCJxdWVyeVVuaXZlcnNhbCIsInF1ZXJ5VmVydGljYWwiLCJxdWVyeUZpbHRlciIsIkNvbXBvbmVudE1hbmFnZXIiLCJzZXRJbnN0YW5jZSIsImdldEluc3RhbmNlIiwiX2NvbXBvbmVudFJlZ2lzdHJ5IiwiX2FjdGl2ZUNvbXBvbmVudHMiLCJfY29yZSIsIl9yZW5kZXJlciIsIl9hbmFseXRpY3NSZXBvcnRlciIsInJlbmRlcmVyIiwiY29yZSIsInJlcG9ydGVyIiwiY29tcG9uZW50Q2xhenoiLCJ0eXBlIiwiY29tcG9uZW50VHlwZSIsImFuYWx5dGljc1JlcG9ydGVyIiwiY29tcG9uZW50TWFuYWdlciIsImNvbXBvbmVudENsYXNzIiwiYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkIiwic29tZSIsImMiLCJpbml0Iiwic2V0U3RhdGUiLCJmaW5kIiwiaW5zdGFuY2UiLCJSZW5kZXJlciIsInRlbXBsYXRlIiwiSGFuZGxlYmFyc1JlbmRlcmVyIiwidGVtcGxhdGVzIiwiX2hhbmRsZWJhcnMiLCJfaGIiLCJfdGVtcGxhdGVzIiwiX3JlZ2lzdGVyQ3VzdG9tSGVscGVycyIsInJlZ2lzdGVySGVscGVyIiwiY29tcGlsZSIsImNvbmZpZyIsInRlbXBsYXRlTmFtZSIsImUiLCJhcmcxIiwiYXJnMiIsIm9wdGlvbnMiLCJmbiIsImludmVyc2UiLCJwaG9uZU51bWJlclN0cmluZyIsImNsZWFuZWQiLCJpbnRsQ29kZSIsImFyZ3MiLCJhcmd1bWVudHMiLCJyb290IiwidiIsIlJlbmRlcmVycyIsIlNPWSIsIkhhbmRsZWJhcnMiLCJkb2N1bWVudCIsIkRPTSIsImQiLCJwIiwiaHRtbCIsImNvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJmcmFnIiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJhcHBlbmRDaGlsZCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsInBhcmVudCIsInNlbGVjdG9yIiwiSFRNTEVsZW1lbnQiLCJXaW5kb3ciLCJIVE1MRG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsInJlYWR5U3RhdGUiLCJlbCIsIm9wdHNfZGF0YSIsIm5vZGUiLCJwcm9wcyIsImFkZENsYXNzIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiY2xhc3NOYW1lIiwiY2xhc3NlcyIsImxlbiIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsInN0eWxlcyIsInByb3AiLCJzdHlsZSIsImF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJzZXR0aW5ncyIsIkV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImN0eHQiLCJ0YXJnZXQiLCJpc0VxdWFsTm9kZSIsIm1hdGNoZXMiLCJwYXJlbnROb2RlIiwiU3RhdGUiLCJfc3RhdGUiLCJvcHRWYWwiLCJfc2V0Iiwib3B0UHJvcCIsIkFuYWx5dGljc0V2ZW50IiwiZXZlbnRUeXBlIiwidG9VcHBlckNhc2UiLCJBbmFseXRpY3NSZXBvcnRlciIsImJ1c2luZXNzSWRSZXEiLCJfYnVzaW5lc3NJZCIsImJ1c2luZXNzSWQiLCJhZGRPcHRpb25zIiwidG9BcGlFdmVudCIsImNvbnNvbGUiLCJlcnIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsIl9vcHRzIiwiX3R5cGUiLCJfcGFyZW50IiwiX2NoaWxkcmVuIiwic3RhdGUiLCJfY29udGFpbmVyIiwiY3JlYXRlRWwiLCJzdWJzdHJpbmciLCJhcHBlbmQiLCJfY2xhc3NOYW1lIiwiX3JlbmRlciIsInJlbmRlciIsIl90ZW1wbGF0ZSIsIl90ZW1wbGF0ZU5hbWUiLCJfaXNNb3VudGVkIiwidHJhbnNmb3JtRGF0YSIsIm9uQ3JlYXRlIiwib25Nb3VudCIsIm9uVXBkYXRlIiwibW91bnQiLCJjaGlsZENvbXBvbmVudCIsImNyZWF0ZSIsIl9wYXJlbnRPcHRzIiwiZW1wdHkiLCJ1bk1vdW50IiwiYmVmb3JlTW91bnQiLCJhc0pTT04iLCJfb25Nb3VudCIsImRvbUhvb2tzIiwicXVlcnlBbGwiLCJfY3JlYXRlQW5hbHl0aWNzSG9vayIsImJpbmQiLCJjaGlsZCIsImJlZm9yZVJlbmRlciIsImRvbUNvbXBvbmVudHMiLCJfY3JlYXRlU3ViY29tcG9uZW50IiwiYWZ0ZXJSZW5kZXIiLCJkb21Db21wb25lbnQiLCJkYXRhc2V0IiwiY2hpbGREYXRhIiwiYWRkQ2hpbGQiLCJjaGlsZEhUTUwiLCJldmVudHR5cGUiLCJldmVudGxhYmVsIiwiZXZlbnRvcHRpb25zIiwicmVwb3J0IiwiVGFiIiwiY29uZmlnSWQiLCJpc0ZpcnN0IiwiaXNBY3RpdmUiLCJ0YWJzQ29uZmlnIiwidGFicyIsInRhYiIsIk5hdmlnYXRpb25Db21wb25lbnQiLCJfdGFicyIsIl90YWJPcmRlciIsImdldERlZmF1bHRUYWJPcmRlciIsImdldFVybFBhcmFtcyIsIm1lcmdlVGFiT3JkZXIiLCJnZW5lcmF0ZVRhYlVybCIsImluY2x1ZGVzIiwidW5zaGlmdCIsIm90aGVyVGFiT3JkZXIiLCJ0YWJDb25maWciLCJGaWx0ZXIiLCJyZXNwb25zZUZpbHRlciIsImdyb3VwcyIsImdyb3VwRmlsdGVycyIsImZpZWxkIiwib3IiLCJhbmQiLCJfZnJvbU1hdGNoZXIiLCJtaW4iLCJtYXgiLCJncmVhdGVyVGhhbkVxdWFsIiwibGVzc1RoYW5FcXVhbCIsIm1hdGNoZXIiLCJTZWFyY2hDb21wb25lbnQiLCJfYmFyS2V5IiwiX3ZlcnRpY2FsS2V5IiwiX2Zvcm1FbCIsImZvcm1TZWxlY3RvciIsIl9pbnB1dEVsIiwiaW5wdXRFbCIsInRpdGxlIiwic2VhcmNoVGV4dCIsInByb21wdEhlYWRlciIsImF1dG9Gb2N1cyIsInJlZGlyZWN0VXJsIiwic2V0UXVlcnkiLCJiaW5kQnJvd3Nlckhpc3RvcnkiLCJpbml0U2VhcmNoIiwiaW5pdEF1dG9Db21wbGV0ZSIsImZvY3VzIiwiZm9ybSIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJpbnB1dFNlbGVjdG9yIiwib3JpZ2luYWxRdWVyeSIsIm9uU3VibWl0IiwidHJpZ2dlciIsImFsbEZpbHRlcnMiLCJnZXRBbGwiLCJ0b3RhbEZpbHRlciIsInZlcnRpY2FsU2VhcmNoIiwiZ2V0QWN0aXZlQ29tcG9uZW50IiwiZ2V0U3RhdGUiLCJGaWx0ZXJTZWFyY2hDb21wb25lbnQiLCJpbnB1dEtleSIsInNldEZpbHRlciIsImZyb21SZXNwb25zZSIsImlzRmlsdGVyU2VhcmNoIiwib3JpZ2luYWxGaWx0ZXIiLCJfc2F2ZVF1ZXJ5QW5kRmlsdGVyIiwiS2V5cyIsIkJBQ0tTUEFDRSIsIlRBQiIsIkVOVEVSIiwiU0hJRlQiLCJDVFJMIiwiQUxUIiwiRVNDQVBFIiwiTEVGVCIsIlJJR0hUIiwiVVAiLCJET1dOIiwiTEVGVF9PU19LRVkiLCJSSUdIVF9PU19LRVkiLCJTRUxFQ1RfS0VZIiwiQXV0b0NvbXBsZXRlQ29tcG9uZW50IiwiX29yaWdpbmFsUXVlcnkiLCJfc2VjdGlvbkluZGV4IiwiX3Jlc3VsdEluZGV4IiwiX29uU3VibWl0Iiwic2VjdGlvbkluZGV4IiwicmVzdWx0SW5kZXgiLCJxdWVyeUlucHV0IiwiY2xvc2UiLCJyZXNldCIsImF1dG9Db21wbGV0ZSIsImhhbmRsZU5hdmlnYXRlUmVzdWx0cyIsImtleUNvZGUiLCJoYW5kbGVTdWJtaXRSZXN1bHQiLCJkZWxlZ2F0ZSIsInVwZGF0ZVF1ZXJ5IiwiaGFuZGxlVHlwaW5nIiwidXBkYXRlU3RhdGUiLCJvcHRWYWx1ZSIsInF1ZXJ5RWwiLCJpZ25vcmVkS2V5cyIsImF1dG9Db21wbGV0ZUZpbHRlciIsImF1dG9Db21wbGV0ZVZlcnRpY2FsIiwiYXV0b0NvbXBsZXRlVW5pdmVyc2FsIiwiU1VQUE9SVEVEX0NPTlRST0xTIiwiRmlsdGVyT3B0aW9uc0NvbXBvbmVudCIsImNvbnRyb2wiLCJfb3B0aW9ucyIsIm8iLCJjaGVja2VkIiwiX2NvbnRyb2wiLCJfb3B0aW9uU2VsZWN0b3IiLCJvcHRpb25TZWxlY3RvciIsIl9zdG9yZU9uQ2hhbmdlIiwic3RvcmVPbkNoYW5nZSIsIl9vbkNoYW5nZSIsIm9uQ2hhbmdlIiwiX3VwZGF0ZU9wdGlvbiIsInBhcnNlSW50IiwiaW5kZXgiLCJfYnVpbGRGaWx0ZXIiLCJlbGVtZW50cyIsInJlbW92ZUF0dHJpYnV0ZSIsImVxdWFsIiwiZ3JvdXAiLCJGaWx0ZXJCb3hDb21wb25lbnQiLCJfZmlsdGVyQ29uZmlncyIsIl9zZWFyY2hPbkNoYW5nZSIsInNlYXJjaE9uQ2hhbmdlIiwiX2FwcGx5QnV0dG9uU2VsZWN0b3IiLCJhcHBseUJ1dHRvblNlbGVjdG9yIiwiX3Jlc2V0QnV0dG9uU2VsZWN0b3IiLCJyZXNldEJ1dHRvblNlbGVjdG9yIiwiX2ZpbHRlckNvbXBvbmVudHMiLCJfZmlsdGVycyIsIl9zaG93TnVtRmlsdGVycyIsInNob3dOdW1GaWx0ZXJzIiwiX2lucHV0U2VsZWN0b3IiLCJmaWx0ZXJDb25maWdzIiwic2hvd0FwcGx5QnV0dG9uIiwiZiIsIm9uRmlsdGVyQ2hhbmdlIiwiYnV0dG9uIiwiX3NhdmVGaWx0ZXJzVG9TdG9yYWdlIiwiX3NlYXJjaCIsInJlc2V0QnV0dG9uIiwiX2NsZWFyRmlsdGVycyIsInZhbGlkRmlsdGVycyIsImNvbWJpbmVkRmlsdGVyIiwiZmlsdGVyQ29tcG9uZW50IiwiY2xlYXIiLCJvcHRpb24iLCJudW1FbGVtZW50IiwibnVtQXBwbGllZEZpbHRlcnMiLCJEaXJlY3RBbnN3ZXJDb21wb25lbnQiLCJoYXNTdGF0ZSIsIlJlc3VsdHNJdGVtQ29tcG9uZW50IiwiTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCIsIkV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQiLCJQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCIsIk1hcFByb3ZpZGVyIiwiX2hlaWdodCIsImhlaWdodCIsIl93aWR0aCIsIndpZHRoIiwiX3pvb20iLCJ6b29tIiwiX21hcCIsIl9pc0xvYWRlZCIsIl9vbkxvYWRlZCIsIm9uTG9hZGVkIiwiX3BpbkNvbmZpZyIsInBpbiIsIkRFRkFVTFRfUElOX0NPTkZJRyIsImlzTG9hZGVkIiwibWFwRGF0YSIsImljb24iLCJhbmNob3IiLCJzdmciLCJzY2FsZWRTaXplIiwibGFiZWxUeXBlIiwiR29vZ2xlTWFwUHJvdmlkZXIiLCJfY2xpZW50SWQiLCJjbGllbnRJZCIsIl9zaWduYXR1cmUiLCJzaWduYXR1cmUiLCJoYXNWYWxpZENsaWVudENyZWRlbnRpYWxzIiwib25Mb2FkIiwic2NyaXB0Iiwib25sb2FkIiwiYXN5bmMiLCJzcmMiLCJnZW5lcmF0ZUNyZWRlbnRpYWxzIiwiZ29vZ2xlTWFwTWFya2VyQ29uZmlncyIsIkdvb2dsZU1hcE1hcmtlckNvbmZpZyIsImVuY29kZWRNYXJrZXJzIiwic2VyaWFsaXplIiwiX2lzU3RhdGljIiwic2V0VGltZW91dCIsImNzcyIsImdvb2dsZSIsIm1hcHMiLCJNYXAiLCJib3VuZHMiLCJMYXRMbmdCb3VuZHMiLCJtYXJrZXIiLCJNYXJrZXIiLCJleHRlbmQiLCJwb3NpdGlvbiIsImZpdEJvdW5kcyIsImxhdCIsImxuZyIsInNlcmlhbGl6ZWRNYXJrZXJzIiwibWFya2VycyIsInBpbkNvbmZpZyIsInBpbkNvbmZpZ09iaiIsIlBvaW50IiwieCIsInkiLCJTaXplIiwidyIsImgiLCJNYXBCb3hNYXBQcm92aWRlciIsIm1hcGJveGdsIiwiYWNjZXNzVG9rZW4iLCJyZWwiLCJtYXBib3hNYXBNYXJrZXJDb25maWdzIiwiTWFwQm94TWFya2VyQ29uZmlnIiwiY2VudGVyIiwibWFwQ2VudGVyIiwid3JhcHBlciIsImNvb3JkcyIsIkxuZ0xhdCIsInNldExuZ0xhdCIsImFkZFRvIiwic3RhdGljTWFwUGluIiwiUHJvdmlkZXJUeXBlcyIsIk1hcENvbXBvbmVudCIsIl9tYXBQcm92aWRlciIsIm1hcFByb3ZpZGVyIiwidG9Mb3dlckNhc2UiLCJpc1N0YXRpYyIsImdldFByb3ZpZGVySW5zdGFuY2UiLCJzZXRUZW1wbGF0ZSIsImdlbmVyYXRlU3RhdGljIiwibG9hZEpTIiwiUmVzdWx0VHlwZSIsIkVWRU5UIiwiTE9DQVRJT04iLCJQRU9QTEUiLCJSZXN1bHRzQ29tcG9uZW50IiwibGltaXQiLCJfaXRlbUNvbmZpZyIsImdsb2JhbCIsInJlbmRlckl0ZW0iLCJpdGVtVGVtcGxhdGUiLCJjb25maWd1cmVJdGVtIiwiaW5jbHVkZU1hcCIsIm1hcENvbmZpZyIsInNldEl0ZW1SZW5kZXIiLCJzZXRJdGVtVGVtcGxhdGUiLCJjbGF6eiIsImdldEl0ZW1Db21wb25lbnQiLCJjb21wIiwibmV3T3B0cyIsImdsb2JhbENvbmZpZyIsIml0ZW1Db25maWciLCJoYXNHbG9iYWxSZW5kZXIiLCJoYXNHbG9iYWxUZW1wbGF0ZSIsInNldFJlbmRlciIsIlVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQiLCJfbGltaXQiLCJnZXRDaGlsZENvbmZpZyIsIlF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCIsIl9lbWFpbExhYmVsIiwiZW1haWxMYWJlbCIsIl9uYW1lTGFiZWwiLCJuYW1lTGFiZWwiLCJfcXVlc3Rpb25MYWJlbCIsInF1ZXN0aW9uTGFiZWwiLCJfcHJpdmFjeVBvbGljeUxhYmVsIiwicHJpdmFjeVBvbGljeUxhYmVsIiwiX2J1dHRvbkxhYmVsIiwiYnV0dG9uTGFiZWwiLCJpbml0U3VibWl0IiwiaGFzUXVlcmllZCIsInF1ZXN0aW9uIiwiQ09NUE9ORU5UX01BTkFHRVIiLCJyZWdpc3RlciIsIlRlbXBsYXRlTG9hZGVyIiwiX3RlbXBsYXRlVXJsIiwidGVtcGxhdGVVcmwiLCJfaW5pdCIsImZldGNoVGVtcGxhdGVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbmVycm9yIiwibG9nIiwiRXJyb3JSZXBvcnRlciIsInRvSnNvbiIsIkFuc3dlcnMiLCJjb21wb25lbnRzIiwiX29uUmVhZHkiLCJzZXRDb3JlIiwic2V0UmVuZGVyZXIiLCJzZXRBbmFseXRpY3NSZXBvcnRlciIsIm9uUmVhZHkiLCJ1c2VUZW1wbGF0ZXMiLCJ0ZW1wbGF0ZUJ1bmRsZSIsInN1cHByZXNzRXJyb3JSZXBvcnRzIiwiX2Vycm9yUmVwb3J0ZXIiLCJBTlNXRVJTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQTs7RUFFQTs7RUFFQTs7O0VBR0EsSUFBTUEsT0FBTyxHQUFHO0VBQ2RDLEVBQUFBLEdBQUcsRUFBRSxLQURTO0VBRWRDLEVB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