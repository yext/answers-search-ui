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
  var LIB_VERSION = 'v0.7.4';
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
    function AnalyticsReporter(answersKey, businessId) {
      var globalOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, AnalyticsReporter);

      this._businessId = businessId;
      /**
       * Options to include with every analytic event reported to the server
       * @type {object}
       * @private
       */

      this._globalOptions = Object.assign({}, globalOptions, {
        answersKey: answersKey
      });
    }

    _createClass(AnalyticsReporter, [{
      key: "report",
      value: function report(event) {
        if (!(event instanceof AnalyticsEvent)) {
          throw new AnswersAnalyticsError('Tried to send invalid analytics event', event);
        }

        event.addOptions(this._globalOptions);
        var request = new ApiRequest({
          baseUrl: ANALYTICS_BASE_URL,
          endpoint: "/realtimeanalytics/data/answers/".concat(this._businessId),
          version: 20190301,
          params: {
            'data': event.toApiEvent()
          }
        });
        return request.post().catch(console.err);
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
            class: opts.container.substring(1, opts.container.length)
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


      this._className = opts.class || 'component';
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
      /**
       * The amount of time to wait for an analytics event to complete before navigating off a page, in ms
       * @type {number}
       * @private
       */


      this._analyticsTimeout = 300;
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
          event.addOptions(options);

          var reportPromise = _this3.analyticsReporter.report(event); // Wait for analytics response before navigating, with timeout


          if (domComponent.tagName === 'A') {
            e.preventDefault();
            setTimeout(function () {
              window.location.href = domComponent.href;
            }, _this3._analyticsTimeout);
            reportPromise.then(function () {
              window.location.href = domComponent.href;
            });
          }
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

        this.components.setCore(new Core({
          apiKey: config.apiKey,
          answersKey: config.answersKey,
          locale: config.locale
        })).setRenderer(this.renderer);

        if (config.businessId) {
          this.components.setAnalyticsReporter(new AnalyticsReporter(config.answersKey, config.businessId, config.analyticsOptions));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2Vycy11bWQuanMiLCJzb3VyY2VzIjpbInNyYy9jb3JlL2h0dHAvaHR0cHJlcXVlc3Rlci5qcyIsInNyYy9jb3JlL2NvbnN0YW50cy5qcyIsInNyYy91aS9kb20vc2VhcmNocGFyYW1zLmpzIiwic3JjL2NvcmUvaHR0cC9hcGlyZXF1ZXN0LmpzIiwic3JjL2NvcmUvZXJyb3JzL2Vycm9ycy5qcyIsInNyYy9jb3JlL3NlYXJjaC9zZWFyY2hhcGkuanMiLCJzcmMvY29yZS9tb2RlbHMvYXV0b2NvbXBsZXRlZGF0YS5qcyIsInNyYy9jb3JlL3NlYXJjaC9hdXRvY29tcGxldGVkYXRhdHJhbnNmb3JtZXIuanMiLCJzcmMvY29yZS9zZWFyY2gvYXV0b2NvbXBsZXRlYXBpLmpzIiwic3JjL2NvcmUvbW9kZWxzL3Jlc3VsdC5qcyIsInNyYy9jb3JlL21vZGVscy9zZWN0aW9uLmpzIiwic3JjL2NvcmUvbW9kZWxzL3VuaXZlcnNhbHJlc3VsdHMuanMiLCJzcmMvY29yZS9tb2RlbHMvZGlyZWN0YW5zd2VyLmpzIiwic3JjL2NvcmUvbW9kZWxzL25hdmlnYXRpb24uanMiLCJzcmMvY29yZS9tb2RlbHMvdmVydGljYWxyZXN1bHRzLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cy5qcyIsInNyYy9jb3JlL3NlYXJjaC9zZWFyY2hkYXRhdHJhbnNmb3JtZXIuanMiLCJzcmMvY29yZS9ldmVudGVtaXR0ZXIvZXZlbnRlbWl0dGVyLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9tb2R1bGVkYXRhLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9zdG9yYWdlLmpzIiwic3JjL2NvcmUvY29yZS5qcyIsInNyYy91aS9jb21wb25lbnRzL2NvbXBvbmVudG1hbmFnZXIuanMiLCJzcmMvdWkvcmVuZGVyaW5nL3JlbmRlcmVyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9oYW5kbGViYXJzcmVuZGVyZXIuanMiLCJzcmMvdWkvcmVuZGVyaW5nL2NvbnN0LmpzIiwic3JjL3VpL2RvbS9kb20uanMiLCJzcmMvdWkvY29tcG9uZW50cy9zdGF0ZS5qcyIsInNyYy9jb3JlL2FuYWx5dGljcy9hbmFseXRpY3NldmVudC5qcyIsInNyYy9jb3JlL2FuYWx5dGljcy9hbmFseXRpY3NyZXBvcnRlci5qcyIsInNyYy9jb3JlL2luZGV4LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uY29tcG9uZW50LmpzIiwic3JjL2NvcmUvbW9kZWxzL2ZpbHRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2hjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9zZWFyY2gvZmlsdGVyc2VhcmNoY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL2F1dG9jb21wbGV0ZWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyb3B0aW9uc2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyYm94Y29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9kaXJlY3RhbnN3ZXJjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9wZW9wbGVyZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9wcm92aWRlcnMvbWFwcHJvdmlkZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvcHJvdmlkZXJzL2dvb2dsZW1hcHByb3ZpZGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL3Byb3ZpZGVycy9tYXBib3htYXBwcm92aWRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9tYXBjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9xdWVzdGlvbnMvcXVlc3Rpb25zdWJtaXNzaW9uY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvY29uc3QuanMiLCJzcmMvdWkvcmVuZGVyaW5nL3RlbXBsYXRlbG9hZGVyLmpzIiwic3JjL3VpL2luZGV4LmpzIiwic3JjL2NvcmUvZXJyb3JzL2Vycm9ycmVwb3J0ZXIuanMiLCJzcmMvYW5zd2Vycy11bWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBtb2R1bGUgSHR0cFJlcXVlc3RlciAqL1xuXG4vKiBnbG9iYWwgZmV0Y2ggKi9cblxuLyoqXG4gKiBUeXBlcyBvZiBIVFRQIHJlcXVlc3RzXG4gKi9cbmNvbnN0IE1ldGhvZHMgPSB7XG4gIEdFVDogJ2dldCcsXG4gIFBPU1Q6ICdwb3N0JyxcbiAgUFVUOiAncHV0JyxcbiAgREVMRVRFOiAnZGVsZXRlJ1xufTtcblxuLyoqXG4gKiBIdHRwUmVxdWVzdGVyIGlzIGEgd3JhcHBlciBhcm91bmQgdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiBvZiBBSkFYXG4gKiByZWxhdGVkIG1hdHRlcnMuIEl0J3MgdXNlZCB0byBtYWtlIGFsbCB0eXBlcyBvZiBuZXR3b3JrIHJlcXVlc3RzXG4gKiBhbmQgZXhwb3NlcyBhIHByb21pc2UgaW50ZXJmYWNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwUmVxdWVzdGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIEdFVCBIVFRQIHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHByb3ZpZGUgKGdldHMgZW5jb2RlZCBpbnRvIHRoZSBVUkwpXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIENvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAqL1xuICBnZXQgKHVybCwgZGF0YSwgb3B0cykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoTWV0aG9kcy5HRVQsIHRoaXMuZW5jb2RlUGFyYW1zKHVybCwgZGF0YSksIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIFBPU1QgSFRUUCByZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBwcm92aWRlIChnZXRzIGVuY29kZWQgaW50byB0aGUgVVJMKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBDb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgKi9cbiAgcG9zdCAodXJsLCBkYXRhLCBvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcbiAgICAgIE1ldGhvZHMuUE9TVCxcbiAgICAgIHVybCxcbiAgICAgIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgY3JlZGVudGlhbHM6IHVuZGVmaW5lZFxuICAgICAgfSwgb3B0cylcbiAgICApO1xuICB9XG5cbiAgcmVxdWVzdCAobWV0aG9kLCB1cmwsIG9wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIG1ldGhvZCxcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcbiAgICB9LCBvcHRzKSk7XG4gIH1cblxuICBlbmNvZGVQYXJhbXMgKHVybCwgcGFyYW1zKSB7XG4gICAgbGV0IGhhc1BhcmFtID0gdXJsLmluZGV4T2YoJz8nKSA+IC0xO1xuXG4gICAgbGV0IHNlYXJjaFF1ZXJ5ID0gJyc7XG4gICAgZm9yIChsZXQga2V5IGluIHBhcmFtcykge1xuICAgICAgaWYgKCFoYXNQYXJhbSkge1xuICAgICAgICBoYXNQYXJhbSA9IHRydWU7XG4gICAgICAgIHNlYXJjaFF1ZXJ5ICs9ICc/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlYXJjaFF1ZXJ5ICs9ICcmJztcbiAgICAgIH1cblxuICAgICAgc2VhcmNoUXVlcnkgKz0ga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybCArIHNlYXJjaFF1ZXJ5O1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG4vKiogVGhlIGN1cnJlbnQgbGliIHZlcnNpb24sIHJlcG9ydGVkIHdpdGggZXJyb3JzIGFuZCBhbmFseXRpY3MgKi9cbmV4cG9ydCBjb25zdCBMSUJfVkVSU0lPTiA9ICd2MC43LjQnO1xuXG4vKiogVGhlIGJhc2UgdXJsIGZvciB0aGUgYXBpIGJhY2tlbmQgKi9cbmV4cG9ydCBjb25zdCBBUElfQkFTRV9VUkwgPSAnaHR0cHM6Ly9saXZlYXBpLnlleHQuY29tJztcblxuLyoqIFRoZSBkZWZhdWx0IHVybCBmb3IgY29tcGlsZWQgY29tcG9uZW50IHRlbXBsYXRlcyAqL1xuZXhwb3J0IGNvbnN0IENPTVBJTEVEX1RFTVBMQVRFU19VUkwgPSAnaHR0cHM6Ly9hc3NldHMuc2l0ZXNjZG4ubmV0L2Fuc3dlcnMvYW5zd2Vyc3RlbXBsYXRlcy5jb21waWxlZC5taW4uanMnO1xuXG4vKiogVGhlIGJhc2UgdXJsIGZvciB0aGUgYW5hbHl0aWNzIGJhY2tlbmQgICovXG5leHBvcnQgY29uc3QgQU5BTFlUSUNTX0JBU0VfVVJMID0gJ2h0dHBzOi8vcmVhbHRpbWVhbmFseXRpY3MueWV4dC5jb20nO1xuIiwiLyoqIEBtb2R1bGUgU2VhcmNoUGFyYW1zICovXG5cbi8qIGdsb2JhbCB3aW5kb3cgKi9cblxuLyoqXG4gKiBTZWFyY2hQYXJhbXMgaXMgYSBjbGFzcyB0byBnZXQgdGhlIHNlYXJjaCBwYXJhbXMgaW4gYSBVUkwuXG4gKiBJdCBpcyBhIHJlcGxhY2VtZW50IGZvciBVUkwuc2VhcmNoUGFyYW1zIGFuZCBVUkxTZWFyY2hQYXJhbXMgZm9yIGJyb3dzZXJzIGxpa2UgSUUxMVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hQYXJhbXMge1xuICBjb25zdHJ1Y3RvciAodXJsKSB7XG4gICAgLyoqXG4gICAgICogTWFwcGluZyBvZiBhbGwgcXVlcnkgcGFyYW1ldGVycyBpbiB0aGUgZ2l2ZW4gdXJsLCBxdWVyeSBwYXJhbSAtPiB2YWx1ZVxuICAgICAqIE9ubHkgdXNlZCBpZiBVUkxTZWFyY2hQYXJhbXMgZG9lcyBub3QgZXhpc3QgaW4gdGhlIHdpbmRvd1xuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9wYXJhbXMgPSB7fTtcblxuICAgIGlmICh3aW5kb3cgJiYgd2luZG93LlVSTFNlYXJjaFBhcmFtcykge1xuICAgICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXModXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGFyYW1zID0gdGhpcy5wYXJzZSh1cmwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJzZSBjcmVhdGVzIGEgbWFwcGluZyBvZiBhbGwgcXVlcnkgcGFyYW1zIGluIGEgZ2l2ZW4gdXJsXG4gICAqIFRoZSBxdWVyeSBwYXJhbSB2YWx1ZXMgYXJlIGRlY29kZWQgYmVmb3JlIGJlaW5nIHB1dCBpbiB0aGUgbWFwXG4gICAqIFRocmVlIHR5cGVzIG9mIGlucHV0IGFyZSBzdXBwb3J0ZWRcbiAgICogICAoMSkgZnVsbCBVUkwgZS5nLiBodHRwOi8vd3d3LnlleHQuY29tLz9xPWhlbGxvXG4gICAqICAgKDIpIHBhcmFtcyB3aXRoID8gZS5nLiA/cT1oZWxsb1xuICAgKiAgICgxKSBwYXJhbXMgd2l0aG91dCA/IGUuZy4gcT1oZWxsb1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmxcbiAgICogQHJldHVybnMge09iamVjdH0gbWFwcGluZyBmcm9tIHF1ZXJ5IHBhcmFtIC0+IHZhbHVlIHdoZXJlIHZhbHVlIGlzICcnIGlmIG5vIHZhbHVlIGlzIHByb3ZpZGVkXG4gICAqL1xuICBwYXJzZSAodXJsKSB7XG4gICAgbGV0IHBhcmFtcyA9IHt9O1xuICAgIGxldCBzZWFyY2ggPSB1cmw7XG5cbiAgICBpZiAoc2VhcmNoID09PSAnJykge1xuICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9XG5cbiAgICAvLyBOb3JtYWxpemUgYWxsIHVybCBpbnB1dHMgdG8gc3RyaW5nIG9mIHF1ZXJ5IHBhcmFtcyBzZXBhcmF0ZWQgYnkgJlxuICAgIGlmICh1cmwuaW5kZXhPZignPycpID4gLTEpIHtcbiAgICAgIHNlYXJjaCA9IHVybC5zbGljZSh1cmwuaW5kZXhPZignPycpICsgMSk7XG4gICAgfVxuXG4gICAgY29uc3QgZW5jb2RlZFBhcmFtcyA9IHNlYXJjaC5zcGxpdCgnJicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5jb2RlZFBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5VmFsID0gZW5jb2RlZFBhcmFtc1tpXS5zcGxpdCgnPScpO1xuICAgICAgaWYgKGtleVZhbC5sZW5ndGggPiAxKSB7XG4gICAgICAgIHBhcmFtc1trZXlWYWxbMF1dID0gU2VhcmNoUGFyYW1zLmRlY29kZShrZXlWYWxbMV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zW2tleVZhbFswXV0gPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCByZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gcXVlcnkgcGFyYW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBxdWVyeSBwYXJhbSBrZXkgdG8gZ2V0IHRoZSB2YWx1ZSBvZlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IHBhcmFtIHZhbHVlLCBudWxsIG90aGVyd2lzZVxuICAgKi9cbiAgZ2V0IChxdWVyeSkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5fcGFyYW1zW1N0cmluZyhxdWVyeSldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9wYXJhbXNbcXVlcnldO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldCBjaGFuZ2VzIHRoZSB2YWx1ZSBvZiBhIGdpdmVuIHF1ZXJ5IHBhcmFtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIHRoZSBxdWVyeSBwYXJhbSBrZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIHRoZSB2YWx1ZSBvZiB0aGUgcXVlcnkgcGFyYW0gdXBkYXRlIHdpdGhcbiAgICovXG4gIHNldCAobmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLl9wYXJhbXNbU3RyaW5nKG5hbWUpXSA9IFN0cmluZyh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogaGFzIGNoZWNrcyB0byBzZWUgaWYgdGhlIGdpdmVuIHF1ZXJ5IHBhcmFtIGtleSBleGlzdHMgaW4gdGhlIHBhcmFtcyBvYmplY3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBxdWVyeSBwYXJhbSB0byBjaGVja1xuICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBxdWVyeSBwYXJhbSBpcyBpbiB0aGUgcGFyYW1zIG9iamVjdCwgZmFsc2Ugby93XG4gICAqL1xuICBoYXMgKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHF1ZXJ5IGluIHRoaXMuX3BhcmFtcztcbiAgfVxuXG4gIC8qKlxuICAgKiB0b1N0cmluZyByZXR1cm5zIGEgdXJsIHdpdGggYWxsIHRoZSBxdWVyeSBwYXJhbXMgaW4gdGhlIHBhcmFtcyBvYmplY3QgKHdpdGhvdXQgYSA/KVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1N0cmluZyAoKSB7XG4gICAgbGV0IHN0cmluZyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9wYXJhbXMpIHtcbiAgICAgIHN0cmluZy5wdXNoKGAke2tleX09JHtTZWFyY2hQYXJhbXMuZW5jb2RlKHRoaXMuX3BhcmFtc1trZXldKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZy5qb2luKCcmJyk7XG4gIH1cblxuICAvKipcbiAgICogZGVjb2RlIHJldHVybnMgdGhlIGRlY29kZWQgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIHRoZSBzdHJpbmcgdG8gZGVjb2RlXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBkZWNvZGUgKHN0cmluZykge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyaW5nLnJlcGxhY2UoL1sgK10vZywgJyUyMCcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBkZWNvZGUgcmV0dXJucyB0aGUgZW5jb2RlZCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gc3RyaW5nIChlLmcuICsgLT4gJTJCKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIHRoZSBzdHJpbmcgdG8gZW5jb2RlXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBlbmNvZGUgKHN0cmluZykge1xuICAgIGxldCByZXBsYWNlID0ge1xuICAgICAgJyEnOiAnJTIxJyxcbiAgICAgIFwiJ1wiOiAnJTI3JyxcbiAgICAgICcoJzogJyUyOCcsXG4gICAgICAnKSc6ICclMjknLFxuICAgICAgJyUyMCc6ICcrJ1xuICAgIH07XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmcpLnJlcGxhY2UoL1shJygpXXwlMjAvZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICByZXR1cm4gcmVwbGFjZVttYXRjaF07XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEFwaVJlcXVlc3QgKi9cblxuaW1wb3J0IEh0dHBSZXF1ZXN0ZXIgZnJvbSAnLi9odHRwcmVxdWVzdGVyJztcbmltcG9ydCB7IEFQSV9CQVNFX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uL3VpL2RvbS9zZWFyY2hwYXJhbXMnOyAvLyBUT0RPIGlkZWFsbHkgdGhpcyB3b3VsZCBiZSBwYXNzZWQgaW4gYXMgYSBwYXJhbVxuXG4vKipcbiAqIEFwaVJlcXVlc3QgaXMgdGhlIGJhc2UgY2xhc3MgZm9yIGFsbCBBUEkgcmVxdWVzdHMuXG4gKiBJdCBkZWZpbmVzIGFsbCBvZiB0aGUgY29yZSBwcm9wZXJ0aWVzIHJlcXVpcmVkIHRvIG1ha2UgYSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaVJlcXVlc3Qge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3Rpb24gdXNlZCBmb3IgbWFraW5nIG5ldHdvcmsgcmVxdWVzdCBhbmQgaGFuZGxpbmcgZXJyb3JzXG4gICAgICogQHR5cGUge0h0dHBSZXF1ZXN0ZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9yZXF1ZXN0ZXIgPSBuZXcgSHR0cFJlcXVlc3RlcigpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhc2VVcmwgdG8gdXNlIGZvciBtYWtpbmcgYSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Jhc2VVcmwgPSBvcHRzLmJhc2VVcmwgfHwgQVBJX0JBU0VfVVJMO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGVuZHBvaW50IHRvIHVzZSBpbiB0aGUgdXJsIChhcHBlbmRlZCB0byB0aGUge2Jhc2VVcmx9KVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9lbmRwb2ludCA9IG9wdHMuZW5kcG9pbnQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBpS2V5ID0gb3B0cy5hcGlLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBBUEkgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVyc2lvbiA9IG9wdHMudmVyc2lvbiB8fCAyMDE5MDEwMTtcblxuICAgIC8qKlxuICAgICAqIEFkZGl0aW9uYWwgZGF0YSBwYXJhbXMgdGhhdCBhcmUgc2VudCBhbG9uZyB3aXRoIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3BhcmFtcyA9IG9wdHMucGFyYW1zIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCBjcmVhdGVzIGEgbmV3IGBHRVRgIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGUgcmVxdWVzdCBjbGFzc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGdldCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3Rlci5nZXQodGhpcy5fYmFzZVVybCArIHRoaXMuX2VuZHBvaW50LCB0aGlzLnBhcmFtcyh0aGlzLl9wYXJhbXMpKTtcbiAgfVxuXG4gIHBvc3QgKG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdGVyLnBvc3QodGhpcy5fYmFzZVVybCArIHRoaXMuX2VuZHBvaW50LCB0aGlzLnBhcmFtcyh0aGlzLl9wYXJhbXMpLCBvcHRzKTtcbiAgfVxuXG4gIHBhcmFtcyAocGFyYW1zKSB7XG4gICAgdmFyIGJhc2VQYXJhbXMgPSB7XG4gICAgICAndic6IHRoaXMuX3ZlcnNpb24sXG4gICAgICAnYXBpX2tleSc6IHRoaXMuX2FwaUtleVxuICAgIH07XG5cbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpKTtcblxuICAgIGlmICh1cmxQYXJhbXMuaGFzKCdiZXRhJykpIHtcbiAgICAgIGJhc2VQYXJhbXNbJ2JldGEnXSA9IHVybFBhcmFtcy5nZXQoJ2JldGEnKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYW55IHBhcmFtYXRlcnMgd2hvcyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC5cbiAgICAvL1xuICAgIC8vIE5PVEUoYmlsbHkpIFByb2JhYmx5IGJldHRlciB0byBiZSBleHBsaWNpdCBhYm91dCBob3cgdG8gaGFuZGxlIHRoaXMgYXQgdGhlIHJlcXVlc3QgYnVpbGRpbmcgbGV2ZWwsXG4gICAgLy8gYnV0IEkgY2FuJ3Qgc2VlIGFueSBjYXNlcyB3aGVyZSB3ZSdkIGV2ZXIgd2FudCB0byBzZW5kICd1bmRlZmluZWQnIGFzIGEgdmFsdWUgdG8gdGhlIHNlcnZlci5cbiAgICAvLyBTbyBpdCdzIHByb2JhYmx5IGZpbmUgdG8gJ2NsZWFuJyB0aGUgcGFyYW1zIG9iamVjdCBoZXJlXG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAocGFyYW1zW2tleV0gPT09IHVuZGVmaW5lZCB8fCBwYXJhbXNba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgcGFyYW1zW2tleV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihiYXNlUGFyYW1zLCBwYXJhbXMgfHwge30pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBFcnJvcnMgKi9cblxuLyoqXG4gKiBBbnN3ZXJzQmFzZUVycm9yIGlzIGFuIGV4dGVuc2lvbiBvZiB0aGUgYmFzZSBFcnJvciBvYmplY3QuXG4gKiBUaGlzIGlzIHRoZSBvYmplY3QgdGhhdCBpcyB1c2VkIHRvIHdoZW4gcmVwb3J0aW5nIHRvIHRoZSBzZXJ2ZXIuXG4gKiBAZXh0ZW5kcyBFcnJvclxuICpcbiAqIEVycm9yIGNvZGVzIGZhbGwgaW50byBvbmUgb2YgZm91ciBjYXRlZ29yaWVzOlxuICogMVhYIGVycm9yczogQmFzaWMgZXJyb3JzXG4gKiAyWFggZXJyb3JzOiBVSSBlcnJvcnNcbiAqIDNYWCBlcnJvcnM6IEVuZHBvaW50IGVycm9yc1xuICogNFhYIGVycm9yczogQ29yZSBlcnJvcnNcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNCYXNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChlcnJvckNvZGUsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMuZXJyb3JDb2RlID0gZXJyb3JDb2RlO1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLmJvdW5kYXJ5ID0gYm91bmRhcnk7XG4gICAgdGhpcy5jYXVzZWRCeSA9IGNhdXNlZEJ5O1xuICAgIHRoaXMucmVwb3J0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHRvSnNvbiAoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKGJ1aWx0aW5FcnJvciwgYm91bmRhcnkpIHtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcihidWlsdGluRXJyb3IubWVzc2FnZSwgYm91bmRhcnkpO1xuICAgIGVycm9yLnN0YWNrID0gYnVpbHRpbkVycm9yLnN0YWNrO1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNCYXNpY0Vycm9yIGlzIGEgd3JhcHBlciBhcm91bmQgYWxsIHRoZSBidWlsdC1pbiBlcnJvcnNcbiAqIGUuZy4gdW5kZWZpbmVkIHZhcmlhYmxlcywgaW5jb3JyZWN0IHN5bnRheCwgdHlwZXMsIG1pc3NpbmcgbWV0aG9kcywgZXRjLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0Jhc2ljRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDEwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNVaUVycm9yIHVzZWQgZm9yIHRoaW5ncyBsaWtlIERPTSBlcnJvcnMuXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzVWlFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoMjAwLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc0NvbXBvbmVudEVycm9yIGlzIHVzZWQgZm9yIENvbXBvbmVudCBvcmllbnRlZCBlcnJvcnNcbiAqIGUuZy4gZmFpbHVyZSB0byByZW5kZXIsIG9yIGNhdGNoaW5nIHVua25vd25zLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0NvbXBvbmVudEVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBjb21wb25lbnQsIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoMjAxLCBtZXNzYWdlLCBjb21wb25lbnQsIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNFbmRwb2ludEVycm9yIHJlcHJlc2VudHMgYWxsIG5ldHdvcmsgcmVsYXRlZCBlcnJvcnMuXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzRW5kcG9pbnRFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoMzAwLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc0NvcmVFcnJvciByZXByZXNlbnRzIGVycm9ycyBmb3IgcHJlY29uZGl0aW9uIGZhaWx1cmVzIGluIHRoZSBjb3JlIGxpYnJhcnlcbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNDb3JlRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDQwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuLyoqXG4gKiBBbnN3ZXJzU3RvcmFnZUVycm9yIHJlcHJlc2VudHMgc3RvcmFnZSByZWxhdGVkIGVycm9yc1xuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc1N0b3JhZ2VFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgc3RvcmFnZUtleSwgZGF0YSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcig0MDEsIG1lc3NhZ2UsICdTdG9yYWdlJywgY2F1c2VkQnkpO1xuICAgIHRoaXMuc3RvcmFnZUtleSA9IHN0b3JhZ2VLZXk7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0FuYWx5dGljc0Vycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBldmVudCwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcig0MDIsIG1lc3NhZ2UsICdBbmFseXRpY3MnLCBjYXVzZWRCeSk7XG4gICAgdGhpcy5ldmVudCA9IGV2ZW50O1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hBcGkgKi9cblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCB7IEFuc3dlcnNCYXNpY0Vycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogU2VhcmNoQXBpIGlzIHRoZSBBUEkgZm9yIGRvaW5nIHZhcmlvdXMgdHlwZXMgb2Ygc2VhcmNoXG4gKiBvdmVyIHRoZSBuZXR3b3JrIChlLmcuIHZlcnRpY2FsIG9yIHVuaXZlcnNhbClcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQXBpIHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFvcHRzLmFwaUtleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBcGkgS2V5IGlzIHJlcXVpcmVkJywgJ1NlYXJjaCcpO1xuICAgIH1cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBBbnN3ZXJzIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghb3B0cy5hbnN3ZXJzS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0Fuc3dlcnMgS2V5IGlzIHJlcXVpcmVkJywgJ1NlYXJjaCcpO1xuICAgIH1cbiAgICB0aGlzLl9hbnN3ZXJzS2V5ID0gb3B0cy5hbnN3ZXJzS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnNpb24gb2YgdGhlIEFQSSB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJzaW9uID0gb3B0cy52ZXJzaW9uIHx8IDIwMTkwMTAxIHx8IDIwMTkwMzAxO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGxvY2FsZSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghb3B0cy5sb2NhbGUpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignTG9jYWxlIGlzIHJlcXVpcmVkJywgJ1NlYXJjaCcpO1xuICAgIH1cbiAgICB0aGlzLl9sb2NhbGUgPSBvcHRzLmxvY2FsZTtcbiAgfVxuXG4gIHZlcnRpY2FsUXVlcnkgKHF1ZXJ5U3RyaW5nLCB2ZXJ0aWNhbEtleSwgZmlsdGVyKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL3ZlcnRpY2FsL3F1ZXJ5JyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBxdWVyeVN0cmluZyxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgICAnZmlsdGVycyc6IGZpbHRlcixcbiAgICAgICAgJ3ZlcnRpY2FsS2V5JzogdmVydGljYWxLZXksXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9XG5cbiAgcXVlcnkgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL3F1ZXJ5JyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBxdWVyeVN0cmluZyxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlRGF0YSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVEYXRhIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIHRoaXMuc2VjdGlvbnMgPSBkYXRhLnNlY3Rpb25zIHx8IFtdO1xuICAgIHRoaXMucXVlcnlJZCA9IGRhdGEucXVlcnlJZCB8fCAnJztcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlKSB7XG4gICAgbGV0IHNlY3Rpb25zO1xuICAgIGlmIChyZXNwb25zZS5zZWN0aW9ucykge1xuICAgICAgc2VjdGlvbnMgPSByZXNwb25zZS5zZWN0aW9ucy5tYXAocyA9PiAoe1xuICAgICAgICBsYWJlbDogcy5sYWJlbCxcbiAgICAgICAgcmVzdWx0czogcy5yZXN1bHRzLm1hcChyID0+IG5ldyBBdXRvQ29tcGxldGVSZXN1bHQocikpXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlY3Rpb25zID0gW3sgcmVzdWx0czogcmVzcG9uc2UucmVzdWx0cy5tYXAociA9PiBuZXcgQXV0b0NvbXBsZXRlUmVzdWx0KHIpKSB9XTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBBdXRvQ29tcGxldGVEYXRhKHsgc2VjdGlvbnMsIHF1ZXJ5SWQ6IHJlc3BvbnNlLnF1ZXJ5SWQgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9Db21wbGV0ZVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICB0aGlzLmZpbHRlciA9IGRhdGEuZmlsdGVyIHx8IHt9O1xuICAgIHRoaXMuaGlnaGxpZ2h0ZWRWYWx1ZSA9IHRoaXMuaGlnaGxpZ2h0KGRhdGEpO1xuICAgIHRoaXMua2V5ID0gZGF0YS5rZXkgfHwgJyc7XG4gICAgdGhpcy5tYXRjaGVkU3Vic3RyaW5ncyA9IGRhdGEubWF0Y2hlZFN1YnN0cmluZ3MgfHwgW107XG4gICAgdGhpcy52YWx1ZSA9IGRhdGEudmFsdWUgfHwgJyc7XG4gICAgdGhpcy5zaG9ydFZhbHVlID0gZGF0YS5zaG9ydFZhbHVlIHx8IHRoaXMudmFsdWU7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIC8vIFRPRE8oamRlbGVybWUpOiBjb25zb2xpZGF0ZSB3aXRoIG90aGVyIGhpZ2hsaWdodCBmdW5jdGlvbnNcbiAgaGlnaGxpZ2h0IChkYXRhKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgc2hvcnRWYWx1ZSwgbWF0Y2hlZFN1YnN0cmluZ3MgfSA9IGRhdGE7XG4gICAgY29uc3QgdmFsID0gdmFsdWUgfHwgc2hvcnRWYWx1ZTtcblxuICAgIGlmICghbWF0Y2hlZFN1YnN0cmluZ3MgfHwgbWF0Y2hlZFN1YnN0cmluZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSBvdXIgaGlnaGxpZ2h0ZWQgc3Vic3RyaW5ncyBhcmUgc29ydGVkXG4gICAgbWF0Y2hlZFN1YnN0cmluZ3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGEub2Zmc2V0IDwgYi5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuXG4gICAgICBpZiAoYS5vZmZzZXQgPiBiLm9mZnNldCkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgICAvLyBCdWlsZCBvdXIgbmV3IHZhbHVlIGJhc2VkIG9uIHRoZSBoaWdobGlnaHRzXG4gICAgbGV0IGhpZ2hsaWdodGVkVmFsdWUgPSAnJztcbiAgICBsZXQgbmV4dFN0YXJ0ID0gMDtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWF0Y2hlZFN1YnN0cmluZ3MubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBzdGFydCA9IE51bWJlcihtYXRjaGVkU3Vic3RyaW5nc1tqXS5vZmZzZXQpO1xuICAgICAgbGV0IGVuZCA9IHN0YXJ0ICsgbWF0Y2hlZFN1YnN0cmluZ3Nbal0ubGVuZ3RoO1xuXG4gICAgICBoaWdobGlnaHRlZFZhbHVlICs9IFt2YWwuc2xpY2UobmV4dFN0YXJ0LCBzdGFydCksICc8c3Ryb25nPicsIHZhbC5zbGljZShzdGFydCwgZW5kKSwgJzwvc3Ryb25nPiddLmpvaW4oJycpO1xuXG4gICAgICBpZiAoaiA9PT0gbWF0Y2hlZFN1YnN0cmluZ3MubGVuZ3RoIC0gMSAmJiBlbmQgPCB2YWwubGVuZ3RoKSB7XG4gICAgICAgIGhpZ2hsaWdodGVkVmFsdWUgKz0gdmFsLnNsaWNlKGVuZCk7XG4gICAgICB9XG5cbiAgICAgIG5leHRTdGFydCA9IGVuZDtcbiAgICB9XG5cbiAgICByZXR1cm4gaGlnaGxpZ2h0ZWRWYWx1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyICovXG5cbmltcG9ydCBBdXRvQ29tcGxldGVEYXRhIGZyb20gJy4uL21vZGVscy9hdXRvY29tcGxldGVkYXRhJztcblxuLyoqXG4gKiBBIERhdGEgVHJhbnNmb3JtZXIgdGhhdCB0YWtlcyB0aGUgcmVzcG9uc2Ugb2JqZWN0IGZyb20gYSBBdXRvQ29tcGxldGUgcmVxdWVzdFxuICogQW5kIHRyYW5zZm9ybXMgaW4gdG8gYSBmcm9udC1lbmQgb3JpZW50ZWQgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBvdXJcbiAqIGNvbXBvbmVudCBsaWJyYXJ5IGFuZCBjb3JlIHN0b3JhZ2UgdW5kZXJzdGFuZC5cbiAqXG4gKiBUT0RPKGJpbGx5KSBDcmVhdGUgb3VyIG93biBmcm9udC1lbmQgZGF0YSBtb2RlbHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyIHtcbiAgc3RhdGljIGNsZWFuIChtb2R1bGVJZCwgZGF0YSkge1xuICAgIGlmIChkYXRhLnNlY3Rpb25zICYmIGRhdGEuc2VjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgZGF0YS5zZWN0aW9ucztcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5zZWN0aW9ucyAmJiBkYXRhLnNlY3Rpb25zLmxlbmd0aCA9PT0gMSAmJiBkYXRhLnNlY3Rpb25zWzBdLnJlc3VsdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgZGF0YS5zZWN0aW9ucztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgW21vZHVsZUlkXTogZGF0YVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgdW5pdmVyc2FsIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG5cbiAgc3RhdGljIGZpbHRlciAocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gQXV0b0NvbXBsZXRlRGF0YS5mcm9tKHJlc3BvbnNlKTtcbiAgfVxuXG4gIHN0YXRpYyB2ZXJ0aWNhbCAocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gQXV0b0NvbXBsZXRlRGF0YS5mcm9tKHJlc3BvbnNlKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlQXBpICovXG5cbmltcG9ydCBBcGlSZXF1ZXN0IGZyb20gJy4uL2h0dHAvYXBpcmVxdWVzdCc7XG5pbXBvcnQgQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyIGZyb20gJy4vYXV0b2NvbXBsZXRlZGF0YXRyYW5zZm9ybWVyJztcbmltcG9ydCB7IEFuc3dlcnNCYXNpY0Vycm9yLCBBbnN3ZXJzRW5kcG9pbnRFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvcnMnO1xuXG4vKipcbiAqIEF1dG9Db21wbGV0ZUFwaSBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgbmV0d29yayByZWxhdGVkIG1hdHRlcnNcbiAqIGZvciBhbGwgdGhlIGF1dG9jb21wbGV0ZSBlbmRwb2ludHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Db21wbGV0ZUFwaSB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBUaGUgQVBJIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghb3B0cy5hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQXBpIEtleSBpcyByZXF1aXJlZCcsICdBdXRvQ29tcGxldGUnKTtcbiAgICB9XG4gICAgdGhpcy5fYXBpS2V5ID0gb3B0cy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgQW5zd2VycyBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIW9wdHMuYW5zd2Vyc0tleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBbnN3ZXJzIEtleSBpcyByZXF1aXJlZCcsICdBdXRvQ29tcGxldGUnKTtcbiAgICB9XG4gICAgdGhpcy5fYW5zd2Vyc0tleSA9IG9wdHMuYW5zd2Vyc0tleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBBUEkgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVyc2lvbiA9IG9wdHMudmVyc2lvbiB8fCAyMDE5MDEwMSB8fCAyMDE5MDMwMTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsb2NhbGUgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIW9wdHMubG9jYWxlKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0xvY2FsZSBpcyByZXF1aXJlZCcsICdBdXRvQ29tcGxldGUnKTtcbiAgICB9XG4gICAgdGhpcy5fbG9jYWxlID0gb3B0cy5sb2NhbGU7XG4gIH1cblxuICAvKipcbiAgICogQXV0b2NvbXBsZXRlIGZpbHRlcnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0IFRoZSBpbnB1dCB0byB1c2UgZm9yIGF1dG8gY29tcGxldGVcbiAgICovXG4gIHF1ZXJ5RmlsdGVyIChpbnB1dCwgdmVydGljYWxLZXksIGJhcktleSkge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9maWx0ZXJzZWFyY2gnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IGlucHV0LFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICAgICdleHBlcmllbmNlS2V5JzogdmVydGljYWxLZXksXG4gICAgICAgICdpbnB1dEtleSc6IGJhcktleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lci5maWx0ZXIocmVzcG9uc2UucmVzcG9uc2UsIGJhcktleSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoJ0ZpbHRlciBzZWFyY2ggcmVxdWVzdCBmYWlsZWQnLCAnQXV0b0NvbXBsZXRlJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICBxdWVyeVZlcnRpY2FsIChpbnB1dCwgdmVydGljYWxLZXksIGJhcktleSkge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9hdXRvY29tcGxldGUnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IGlucHV0LFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICAgICdleHBlcmllbmNlS2V5JzogdmVydGljYWxLZXksXG4gICAgICAgICdiYXJLZXknOiBiYXJLZXksXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIudmVydGljYWwocmVzcG9uc2UucmVzcG9uc2UsIHJlcXVlc3QuX3BhcmFtcy5iYXJLZXkpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEFuc3dlcnNFbmRwb2ludEVycm9yKCdWZXJ0aWNhbCBzZWFyY2ggcmVxdWVzdCBmYWlsZWQnLCAnQXV0b0NvbXBsZXRlJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICBxdWVyeVVuaXZlcnNhbCAocXVlcnlTdHJpbmcpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvYXV0b2NvbXBsZXRlJyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBxdWVyeVN0cmluZyxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQocXVlcnlTdHJpbmcpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIudW5pdmVyc2FsKHJlc3BvbnNlLnJlc3BvbnNlKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzRW5kcG9pbnRFcnJvcignVW5pdmVyc2FsIHNlYXJjaCByZXF1ZXN0IGZhaWxlZCcsICdBdXRvQ29tcGxldGUnLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVzdWx0ICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlc3VsdHNEYXRhIGV4cGVjdGVkIGZvcm1hdDogeyBkYXRhOiB7IC4uLiB9LCBoaWdobGlnaHRlZEZpZWxkczogeyAuLi4gfX1cbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXN1bHRzRGF0YSkge1xuICAgIGxldCByZXN1bHRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gVE9ETyB1c2UgcmVzdWx0RGF0YS5oaWdobGlnaHRlZEZpZWxkcyB0b1xuICAgICAgLy8gdHJhbnNmb3JtIHJlc3VsdERhdGEuZGF0YSBpbnRvIGh0bWwtZnJpZW5kbHkgc3RyaW5ncyB0aGF0IGhpZ2hsaWdodCB2YWx1ZXMuXG5cbiAgICAgIC8vIENoZWNrIGZvciBuZXcgZGF0YSBmb3JtYXQsIG90aGVyd2lzZSBmYWxsYmFjayB0byBsZWdhY3lcbiAgICAgIHJlc3VsdHMucHVzaChuZXcgUmVzdWx0KHJlc3VsdHNEYXRhW2ldLmRhdGEgfHwgcmVzdWx0c0RhdGFbaV0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VjdGlvbiAqL1xuXG5pbXBvcnQgUmVzdWx0IGZyb20gJy4vcmVzdWx0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yIChkYXRhLCB1cmwpIHtcbiAgICB0aGlzLnZlcnRpY2FsQ29uZmlnSWQgPSBkYXRhLnZlcnRpY2FsQ29uZmlnSWQgfHwgbnVsbDtcbiAgICB0aGlzLnJlc3VsdHNDb3VudCA9IGRhdGEucmVzdWx0c0NvdW50IHx8IDA7XG4gICAgdGhpcy5lbmNvZGVkU3RhdGUgPSBkYXRhLmVuY29kZWRTdGF0ZSB8fCAnJztcbiAgICB0aGlzLmFwcGxpZWRRdWVyeUZpbHRlcnMgPSBBcHBsaWVkUXVlcnlGaWx0ZXIuZnJvbShkYXRhLmFwcGxpZWRRdWVyeUZpbHRlcnMpO1xuICAgIHRoaXMuZmFjZXRzID0gZGF0YS5mYWNldHMgfHwgbnVsbDtcbiAgICB0aGlzLnJlc3VsdHMgPSBSZXN1bHQuZnJvbShkYXRhLnJlc3VsdHMpO1xuICAgIHRoaXMubWFwID0gU2VjdGlvbi5wYXJzZU1hcChkYXRhLnJlc3VsdHMpO1xuICAgIHRoaXMudmVydGljYWxVUkwgPSB1cmwgfHwgbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBwYXJzZU1hcCAocmVzdWx0cykge1xuICAgIGxldCBtYXBNYXJrZXJzID0gW107XG5cbiAgICBsZXQgY2VudGVyQ29vcmRpbmF0ZXMgPSB7fTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmVzdWx0cy5sZW5ndGg7IGorKykge1xuICAgICAgLy8gVE9ETyhiaWxseSkgUmVtb3ZlIGxlZ2FjeSBmYWxsYmFjayBmcm9tIGFsbCBkYXRhIGZvcm1hdFxuICAgICAgbGV0IHJlc3VsdCA9IHJlc3VsdHNbal0uZGF0YSB8fCByZXN1bHRzW2pdO1xuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlKSB7XG4gICAgICAgIGlmICghY2VudGVyQ29vcmRpbmF0ZXMubGF0aXR1ZGUpIHtcbiAgICAgICAgICBjZW50ZXJDb29yZGluYXRlcyA9IHtcbiAgICAgICAgICAgIGxhdGl0dWRlOiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlLmxvbmdpdHVkZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgbWFwTWFya2Vycy5wdXNoKHtcbiAgICAgICAgICBpdGVtOiByZXN1bHQsXG4gICAgICAgICAgbGFiZWw6IG1hcE1hcmtlcnMubGVuZ3RoICsgMSxcbiAgICAgICAgICBsYXRpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sYXRpdHVkZSxcbiAgICAgICAgICBsb25naXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubG9uZ2l0dWRlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAnbWFwQ2VudGVyJzogY2VudGVyQ29vcmRpbmF0ZXMsXG4gICAgICAnbWFwTWFya2Vycyc6IG1hcE1hcmtlcnNcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZyb20gKG1vZHVsZXMsIHVybHMpIHtcbiAgICBsZXQgc2VjdGlvbnMgPSBbXTtcbiAgICBpZiAoIW1vZHVsZXMpIHtcbiAgICAgIHJldHVybiBzZWN0aW9ucztcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobW9kdWxlcykpIHtcbiAgICAgIHJldHVybiBuZXcgU2VjdGlvbihtb2R1bGVzKTtcbiAgICB9XG5cbiAgICAvLyBPdXIgc2VjdGlvbnMgc2hvdWxkIGNvbnRhaW4gYSBwcm9wZXJ0eSBvZiBtYXBNYXJrZXIgb2JqZWN0c1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgc2VjdGlvbnMucHVzaChcbiAgICAgICAgbmV3IFNlY3Rpb24oXG4gICAgICAgICAgbW9kdWxlc1tpXSxcbiAgICAgICAgICB1cmxzW21vZHVsZXNbaV0udmVydGljYWxDb25maWdJZF1cbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VjdGlvbnM7XG4gIH1cbn1cblxuY2xhc3MgQXBwbGllZFF1ZXJ5RmlsdGVyIHtcbiAgLy8gU3VwcG9ydCBsZWdhY3kgbW9kZWwgYW5kIG5ldyBtb2RlbCB1bnRpbCBmdWxseSBtaWdyYXRlZC5cbiAgLy8gVE9ETyhiaWxseSkgUmVtb3ZlIHRoZSBsZWZ0IGV4cHJlc3Npb24gZHVyaW5nIGFzc2lnbm1lbnQgd2hlbiBtaWdyYXRlZC5cbiAgY29uc3RydWN0b3IgKGFwcGxpZWRRdWVyeUZpbHRlcikge1xuICAgIHRoaXMua2V5ID0gYXBwbGllZFF1ZXJ5RmlsdGVyLmtleSB8fCBhcHBsaWVkUXVlcnlGaWx0ZXIuZGlzcGxheUtleTtcbiAgICB0aGlzLnZhbHVlID0gYXBwbGllZFF1ZXJ5RmlsdGVyLnZhbHVlIHx8IGFwcGxpZWRRdWVyeUZpbHRlci5kaXNwbGF5VmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbSAoYXBwbGllZFF1ZXJ5RmlsdGVycykge1xuICAgIGxldCBmaWx0ZXJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBsaWVkUXVlcnlGaWx0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmaWx0ZXJzLnB1c2gobmV3IEFwcGxpZWRRdWVyeUZpbHRlcihhcHBsaWVkUXVlcnlGaWx0ZXJzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXJzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBVbml2ZXJzYWxSZXN1bHRzICovXG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vc2VjdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaXZlcnNhbFJlc3VsdHMge1xuICBjb25zdHJ1Y3RvciAoZGF0YSkge1xuICAgIHRoaXMucXVlcnlJZCA9IGRhdGEucXVlcnlJZCB8fCBudWxsO1xuICAgIHRoaXMuc2VjdGlvbnMgPSBkYXRhLnNlY3Rpb25zIHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlLCB1cmxzKSB7XG4gICAgcmV0dXJuIG5ldyBVbml2ZXJzYWxSZXN1bHRzKHtcbiAgICAgIHF1ZXJ5SWQ6IHJlc3BvbnNlLnF1ZXJ5SWQsXG4gICAgICBzZWN0aW9uczogU2VjdGlvbi5mcm9tKHJlc3BvbnNlLm1vZHVsZXMsIHVybHMpXG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIERpcmVjdEFuc3dlciAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RBbnN3ZXIge1xuICBjb25zdHJ1Y3RvciAoZGlyZWN0QW5zd2VyID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRpcmVjdEFuc3dlcik7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTmF2aWdhdGlvbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIHtcbiAgY29uc3RydWN0b3IgKHRhYk9yZGVyKSB7XG4gICAgdGhpcy50YWJPcmRlciA9IHRhYk9yZGVyIHx8IFtdO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbSAobW9kdWxlcykge1xuICAgIGxldCBuYXYgPSBbXTtcbiAgICBpZiAoIW1vZHVsZXMgfHwgIUFycmF5LmlzQXJyYXkobW9kdWxlcykpIHtcbiAgICAgIHJldHVybiBuYXY7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbmF2LnB1c2gobW9kdWxlc1tpXS52ZXJ0aWNhbENvbmZpZ0lkKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBOYXZpZ2F0aW9uKG5hdik7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFZlcnRpY2FsUmVzdWx0cyAqL1xuXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL3NlY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0aWNhbFJlc3VsdHMge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIG5ldyBWZXJ0aWNhbFJlc3VsdHMoU2VjdGlvbi5mcm9tKHJlc3BvbnNlKSk7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuLyoqXG4gKiBTdG9yYWdlS2V5cyBpcyBhbiBFTlVNIGFyZSBjb25zaWRlcmVkIHRoZSByb290IGNvbnRleHRcbiAqIGZvciBob3cgZGF0YSBpcyBzdG9yZWQgYW5kIHNjb3BlZCBpbiB0aGUgc3RvcmFnZS5cbiAqXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIE5BVklHQVRJT046ICduYXZpZ2F0aW9uJyxcbiAgVU5JVkVSU0FMX1JFU1VMVFM6ICd1bml2ZXJzYWwtcmVzdWx0cycsXG4gIFZFUlRJQ0FMX1JFU1VMVFM6ICd2ZXJ0aWNhbC1yZXN1bHRzJyxcbiAgQVVUT0NPTVBMRVRFOiAnYXV0b2NvbXBsZXRlJyxcbiAgRElSRUNUX0FOU1dFUjogJ2RpcmVjdC1hbnN3ZXInLFxuICBGSUxURVI6ICdmaWx0ZXInLFxuICBRVUVSWTogJ3F1ZXJ5J1xufTtcbiIsIi8qKiBAbW9kdWxlIFNlYXJjaERhdGFUcmFuc2Zvcm1lciAqL1xuXG5pbXBvcnQgVW5pdmVyc2FsUmVzdWx0cyBmcm9tICcuLi9tb2RlbHMvdW5pdmVyc2FscmVzdWx0cyc7XG5pbXBvcnQgRGlyZWN0QW5zd2VyIGZyb20gJy4uL21vZGVscy9kaXJlY3RhbnN3ZXInO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vbW9kZWxzL25hdmlnYXRpb24nO1xuaW1wb3J0IFZlcnRpY2FsUmVzdWx0cyBmcm9tICcuLi9tb2RlbHMvdmVydGljYWxyZXN1bHRzJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuLyoqXG4gKiBBIERhdGEgVHJhbnNmb3JtZXIgdGhhdCB0YWtlcyB0aGUgcmVzcG9uc2Ugb2JqZWN0IGZyb20gYSBTZWFyY2ggcmVxdWVzdFxuICogQW5kIHRyYW5zZm9ybXMgaW4gdG8gYSBmcm9udC1lbmQgb3JpZW50ZWQgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBvdXJcbiAqIGNvbXBvbmVudCBsaWJyYXJ5IGFuZCBjb3JlIHN0b3JhZ2UgdW5kZXJzdGFuZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoRGF0YVRyYW5zZm9ybWVyIHtcbiAgc3RhdGljIHRyYW5zZm9ybSAoZGF0YSwgdXJscyA9IHt9KSB7XG4gICAgbGV0IHJlc3BvbnNlID0gZGF0YS5yZXNwb25zZTtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlcnlJZDogcmVzcG9uc2UucXVlcnlJZCxcbiAgICAgIFtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXTogTmF2aWdhdGlvbi5mcm9tKHJlc3BvbnNlLm1vZHVsZXMpLFxuICAgICAgW1N0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVJdOiBuZXcgRGlyZWN0QW5zd2VyKHJlc3BvbnNlLmRpcmVjdEFuc3dlciksXG4gICAgICBbU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFNdOiBVbml2ZXJzYWxSZXN1bHRzLmZyb20ocmVzcG9uc2UsIHVybHMpXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB0cmFuc2Zvcm1WZXJ0aWNhbCAoZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICBxdWVyeUlkOiBkYXRhLnJlc3BvbnNlLnF1ZXJ5SWQsXG4gICAgICBbU3RvcmFnZUtleXMuTkFWSUdBVElPTl06IG5ldyBOYXZpZ2F0aW9uKCksIC8vIFZlcml0Y2FsIGRvZXNuJ3QgcmVzcG9uZCB3aXRoIG9yZGVyaW5nLCBzbyB1c2UgZW1wdHkgbmF2LlxuICAgICAgW1N0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFNdOiBWZXJ0aWNhbFJlc3VsdHMuZnJvbShkYXRhLnJlc3BvbnNlKVxuICAgIH07XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEV2ZW50RW1pdHRlciAqL1xuXG4vKipcbiAqIEV2ZW50RW1pdHRlciBpcyBhIGJhc2UgY2xhc3MgZm9yIGFueSBvYmplY3QgdGhhdCB3YW50cyB0byBleHBvc2VcbiAqIGEgcHViL3N1YiBpbnRlcmZhY2UsIGZvciBlbWl0dGluZyBtZXNzYWdlcyBhbmQgcHJvdmlkaW5nIGxpc3RlbmVycy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8qKlxuICAgICAqIFRoZSBzdWJzY3JpYmVycyBvZiBtZXNzYWdlc1xuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIG9uIGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciBzdWJzY3JpYmluZyBldmVudHMgdGhhdCBhcmUgZW1pdHRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byBsaXN0ZW4gdG9cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgVGhlIGNhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSB7ZXZ0fSBpcyBlbWl0dGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSBPcHRpb25hbCB2YWx1ZSB3aGljaCB3aWxsIG9ubHkgaGFuZGxlIHRoZSBtZXNzYWdlIG9uY2VcbiAgICovXG4gIG9uIChldnQsIGNiLCBvbmNlKSB7XG4gICAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBoYW5kbGVyIHNob3VsZCBiZSBvZiB0eXBlIHtmdW5jdGlvbn0nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbGlzdGVuZXJzW2V2dF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzW2V2dF0gPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XS5wdXNoKHtcbiAgICAgIGV2ZW50OiBldnQsXG4gICAgICBjYjogY2IsXG4gICAgICBvbmNlOiBvbmNlIHx8IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBvbmNlIGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciBzdWJzY3JpYmluZyBldmVudHMgdGhhdCBhcmUgZW1pdHRlZC5cbiAgICogVGhlIGhhbmRsZXIgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBvbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIGxpc3RlbiB0b1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gdGhlIHtldnR9IGlzIGVtaXR0ZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBvbmNlIE9wdGlvbmFsIHZhbHVlIHdoaWNoIHdpbGwgb25seSBoYW5kbGUgdGhlIG1lc3NhZ2Ugb25jZVxuICAgKi9cbiAgb25jZSAoZXZ0LCBjYikge1xuICAgIHJldHVybiB0aGlzLm9uKGV2dCwgY2IsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIG9mZiBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3IgdW5zdWJzY3JpYmluZyBmcm9tIGFuIGV2ZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gdW5zdWJzY3JpYmUgZnJvbVxuICAgKi9cbiAgb2ZmIChldnQpIHtcbiAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW2V2dF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogZW1pdCBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3IgYnJvYWRjYXN0aW5nIG1lc3NhZ2VzL2V2ZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIHB1Ymxpc2ggZnJvbVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSB0aGUgZGF0YSB0byBzZW5kIGFsb25nIHRvIHRoZSBzdWJzY3JpYmVyc1xuICAgKi9cbiAgZW1pdCAoZXZ0LCBkYXRhKSB7XG4gICAgbGV0IGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1tldnRdO1xuICAgIGlmIChsaXN0ZW5lcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEludm9rZSBlYWNoIG9mIGFsbCB0aGUgbGlzdGVuZXIgaGFuZGxlcnMgYW5kIHJlbW92ZSB0aGUgb25lcyB0aGF0IHNob3VsZCBmaXJlIG9ubHkgb25jZS5cbiAgICBsZXQga2VlcCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0uY2IoZGF0YSk7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldLm9uY2UgPT09IHRydWUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEluc3RlYWQgb2YgaGF2aW5nIGEgJ2RpcnR5JyBhcnJheSB3aXRoIGRlbGV0ZWQgb3IgJ3VuZGVmaW5lZCcgZW50cmllcyxcbiAgICAgIC8vIHdlIGp1c3QgY3JlYXRlIGEgYnJhbmQgbmV3IGFycmF5IHdpdGhvdXQgdGhlIGxpc3RlbmVycyB0aGF0IHdlcmUgcmVtb3ZlZFxuICAgICAga2VlcC5wdXNoKGxpc3RlbmVyc1tpXSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIG91ciBvbGQgbGlzdCBvZiBsaXN0ZW5lcnMgdG8gdGhlIG5ld2x5IGNyZWF0ZWQgYXJyYXlcbiAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XSA9IGtlZXA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE1vZHVsZURhdGEgKi9cblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudGVtaXR0ZXIvZXZlbnRlbWl0dGVyJztcblxuLyoqXG4gKiBNb2R1bGVEYXRhIGlzIHVzZWQgYXMgYSBnZW5lcmljIG1vZGVsIGZvciBTdG9yYWdlLlxuICogVHlwaWNhbGx5IGFuIGluc3RhbmNlIG9mIE1vZHVsZURhdGEgcG93ZXJzIGEgc2luZ2xlIGNvbXBvbmVudC5cblxuICogQSBkYXRhIG1vZGVsIHRoYXQgZXhwb3NlcyBhbiBldmVudCBlbWl0dGVyIGludGVyZmFjZS5cbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2R1bGVEYXRhIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGlkLCBkYXRhID0ge30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5faWQgPSBpZDtcbiAgICB0aGlzLl9oaXN0b3J5ID0gW107XG4gICAgdGhpcy5fZGF0YSA9IHt9O1xuICAgIHRoaXMuc2V0KGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcGxhY2VzIHRoZSBjdXJyZW50bHkgaGVsZCBkYXRhIHdpdGggdGhlIGdpdmVuIGRhdGFcbiAgICogQHBhcmFtIHsqfSBkYXRhIHRoZSBkYXRhIHRvIHJlcGxhY2UgdGhlIGN1cnJlbnQgZGF0YVxuICAgKi9cbiAgc2V0IChkYXRhKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IGRhdGEgfHwge307XG5cbiAgICB0aGlzLmNhcHR1cmVQcmV2aW91cygpO1xuXG4gICAgaWYgKE9iamVjdC5rZXlzKG5ld0RhdGEpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXModGhpcy5fZGF0YSkubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9kYXRhID0gbmV3RGF0YTtcbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5fZGF0YSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgZm9yIHNoYWxsb3cgZXF1YWxpdHlcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhuZXdEYXRhKSkge1xuICAgICAgaWYgKHRoaXMuX2RhdGFba2V5XSAhPT0gbmV3RGF0YVtrZXldKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBuZXdEYXRhO1xuICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuX2RhdGEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2FwdHVyZVByZXZpb3VzICgpIHtcbiAgICBpZiAodGhpcy5faGlzdG9yeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9oaXN0b3J5ID0gW107XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hpc3RvcnkubGVuZ3RoICsgMSA+IDUpIHtcbiAgICAgIHRoaXMuX2hpc3Rvcnkuc2hpZnQoKTtcbiAgICB9XG5cbiAgICAvLyBJZiBkYXRhIGlzIGV2ZXIgdW5kZWZpbmVkLCB3ZSBkZWZhdWx0IHRvIGVtcHR5IG9iamVjdFxuICAgIHRoaXMuX2hpc3RvcnkucHVzaChKU09OLnN0cmluZ2lmeSh0aGlzLl9kYXRhIHx8IHt9KSk7XG4gIH1cblxuICB1bmRvICgpIHtcbiAgICBsZXQgcHJldmlvdXMgPSB7fTtcbiAgICBpZiAodGhpcy5fcHJldmlvdXMubGVuZ3RoID4gMCkge1xuICAgICAgcHJldmlvdXMgPSBKU09OLnBhcnNlKHRoaXMuX3ByZXZpb3VzLnBvcCgpKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRhLnNldChwcmV2aW91cyk7XG4gIH1cblxuICByYXcgKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTdG9yYWdlICovXG5cbmltcG9ydCBNb2R1bGVEYXRhIGZyb20gJy4vbW9kdWxlZGF0YSc7XG5pbXBvcnQgeyBBbnN3ZXJzU3RvcmFnZUVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogU3RvcmFnZSBpcyBhIGNvbnRhaW5lciBhcm91bmQgYXBwbGljYXRpb24gc3RhdGUuXG4gKiBJdCBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgQ1JVRCBvcGVyYXRpb25zIGFzIHdlbGwgYXMgbGlzdGVuaW5nXG4gKiBmb3Igc3RhdGVmdWwgY2hhbmdlcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyID0ge307XG4gICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzID0ge307XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkYXRhIGluIHN0b3JhZ2Ugd2l0aCB0aGUgZ2l2ZW4ga2V5IHRvIHRoZSBwcm92aWRlZCBkYXRhLFxuICAgKiBjb21wbGV0ZWx5IG92ZXJ3cml0aW5nIGFueSBleGlzdGluZyBkYXRhLlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRoZSBzdG9yYWdlIGtleSB0byBzZXRcbiAgICogQHBhcmFtIHsqfSBkYXRhIHRoZSBkYXRhIHRvIHNldFxuICAgKi9cbiAgc2V0IChrZXksIGRhdGEpIHtcbiAgICB0aGlzLl9pbml0RGF0YUNvbnRhaW5lcihrZXksIGRhdGEpO1xuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJba2V5XS5zZXQoZGF0YSk7XG4gIH1cblxuICBfaW5pdERhdGFDb250YWluZXIgKGtleSwgZGF0YSkge1xuICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCB8fCBrZXkgPT09IG51bGwgfHwgdHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzU3RvcmFnZUVycm9yKCdJbnZhbGlkIHN0b3JhZ2Uga2V5IHByb3ZpZGVkJywga2V5LCBkYXRhKTtcbiAgICB9XG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCB8fCBkYXRhID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc1N0b3JhZ2VFcnJvcignTm8gZGF0YSBwcm92aWRlZCcsIGtleSwgZGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX21vZHVsZURhdGFDb250YWluZXJba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2tleV0gPSBuZXcgTW9kdWxlRGF0YShrZXkpO1xuICAgICAgdGhpcy5fYXBwbHlGdXR1cmVMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gIH1cblxuICBnZXRTdGF0ZSAobW9kdWxlSWQpIHtcbiAgICBpZiAodGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5yYXcoKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRBbGwgKGtleSkge1xuICAgIGNvbnN0IGRhdGEgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGRhdGFLZXkgb2YgT2JqZWN0LmtleXModGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcikpIHtcbiAgICAgIGlmIChkYXRhS2V5LnN0YXJ0c1dpdGgoa2V5KSAmJiB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2RhdGFLZXldLnJhdygpICE9PSBudWxsKSB7XG4gICAgICAgIGRhdGEucHVzaCh0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2RhdGFLZXldLnJhdygpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBvbiAoZXZ0LCBtb2R1bGVJZCwgY2IpIHtcbiAgICBsZXQgbW9kdWxlRGF0YSA9IHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdO1xuICAgIGlmIChtb2R1bGVEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXSA9IFtdO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdLnB1c2goe1xuICAgICAgICBldmVudDogZXZ0LFxuICAgICAgICBjYjogY2JcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0ub24oZXZ0LCBjYik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBvZmYgKGV2dCwgbW9kdWxlSWQsIGNiKSB7XG4gICAgbGV0IG1vZHVsZURhdGEgPSB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXTtcbiAgICBpZiAobW9kdWxlRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0ucG9wKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdLm9mZihldnQsIGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9hcHBseUZ1dHVyZUxpc3RlbmVycyAobW9kdWxlSWQpIHtcbiAgICBsZXQgZnV0dXJlcyA9IHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF07XG4gICAgaWYgKCFmdXR1cmVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmdXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZnV0dXJlID0gZnV0dXJlc1tpXTtcbiAgICAgIHRoaXMub24oZnV0dXJlLmV2ZW50LCBtb2R1bGVJZCwgZnV0dXJlLmNiKTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF07XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIENvcmUgKi9cblxuaW1wb3J0IFNlYXJjaEFwaSBmcm9tICcuL3NlYXJjaC9zZWFyY2hhcGknO1xuaW1wb3J0IEF1dG9Db21wbGV0ZUFwaSBmcm9tICcuL3NlYXJjaC9hdXRvY29tcGxldGVhcGknO1xuXG5pbXBvcnQgU2VhcmNoRGF0YVRyYW5zZm9ybWVyIGZyb20gJy4vc2VhcmNoL3NlYXJjaGRhdGF0cmFuc2Zvcm1lcic7XG5cbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vc3RvcmFnZS9zdG9yYWdlJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG4vKipcbiAqIENvcmUgaXMgdGhlIG1haW4gYXBwbGljYXRpb24gY29udGFpbmVyIGZvciBhbGwgb2YgdGhlIG5ldHdvcmsgYW5kIHN0b3JhZ2VcbiAqIHJlbGF0ZWQgYmVoYXZpb3JzIG9mIHRoZSBhcHBsaWNhdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29yZSB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBpZiAodHlwZW9mIG9wdHMuYXBpS2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGBhcGlLZXlgLiBUeXBlIG11c3QgYmUge3N0cmluZ30nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdHMuYW5zd2Vyc0tleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBgYW5zd2Vyc0tleWAuIFR5cGUgbXVzdCBiZSB7c3RyaW5nfScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjbGllbnQgQVBJIEtleSB1c2VkIGZvciBhbGwgcmVxdWVzdHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBpS2V5ID0gb3B0cy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IEFuc3dlcnMgS2V5IHVzZWQgZm9yIGFsbCByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hbnN3ZXJzS2V5ID0gb3B0cy5hbnN3ZXJzS2V5O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNsaWVudCBsb2NhbGUgdXNlZCBmb3IgYWxsIHJlcXVlc3RzLiBJZiBub3Qgc3BlY2lmaWVkLCBkZWZhdWx0cyB0byBcImVuXCIgKGZvclxuICAgICAqIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5KS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fbG9jYWxlID0gb3B0cy5sb2NhbGUgfHwgJ2VuJztcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjb3JlIGRhdGEgc3RvcmFnZSB0aGF0IHBvd2VycyB0aGUgVUlcbiAgICAgKiBAdHlwZSB7U3RvcmFnZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiBjb250YWluaW5nIHRoZSBpbnRlZ3JhdGlvbiB3aXRoIHRoZSBSRVNUZnVsIHNlYXJjaCBBUElcbiAgICAgKiBGb3IgYm90aCB2ZXJ0aWNhbCBhbmQgdW5pdmVyc2FsIHNlYXJjaFxuICAgICAqIEB0eXBlIHtTZWFyY2h9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zZWFyY2hlciA9IG5ldyBTZWFyY2hBcGkoe1xuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICBhbnN3ZXJzS2V5OiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgbG9jYWxlOiB0aGlzLl9sb2NhbGVcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIGNvbnRhaW5pbmcgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIFJFU1RmdWwgYXV0b2NvbXBsZXRlIEFQSVxuICAgICAqIEZvciBmaWx0ZXIgc2VhcmNoLCB2ZXJ0aWNhbCBhdXRvY29tcGxldGUsIGFuZCB1bml2ZXJzYWwgYXV0b2NvbXBsZXRlXG4gICAgICogQHR5cGUge0F1dG9jb21wbGV0ZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2F1dG9Db21wbGV0ZSA9IG5ldyBBdXRvQ29tcGxldGVBcGkoe1xuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICBhbnN3ZXJzS2V5OiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgbG9jYWxlOiB0aGlzLl9sb2NhbGVcbiAgICB9KTtcbiAgfVxuXG4gIHZlcnRpY2FsU2VhcmNoIChxdWVyeVN0cmluZywgdmVydGljYWxLZXksIGZpbHRlcikge1xuICAgIHJldHVybiB0aGlzLl9zZWFyY2hlclxuICAgICAgLnZlcnRpY2FsUXVlcnkocXVlcnlTdHJpbmcsIHZlcnRpY2FsS2V5LCBmaWx0ZXIpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBTZWFyY2hEYXRhVHJhbnNmb3JtZXIudHJhbnNmb3JtVmVydGljYWwocmVzcG9uc2UpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuTkFWSUdBVElPTiwgZGF0YVtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUywgZGF0YVtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaCAocXVlcnlTdHJpbmcsIHVybHMpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoZXJcbiAgICAgIC5xdWVyeShxdWVyeVN0cmluZylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IFNlYXJjaERhdGFUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVzcG9uc2UsIHVybHMpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuTkFWSUdBVElPTiwgZGF0YVtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuRElSRUNUX0FOU1dFUiwgZGF0YVtTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSXSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFMsIGRhdGFbU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFNdLCB1cmxzKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGFuIGlucHV0LCBxdWVyeSBmb3IgYSBsaXN0IG9mIHNpbWlsYXIgcmVzdWx0cyBhbmQgc2V0IGludG8gc3RvcmFnZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgICAgIHRoZSBzdHJpbmcgdG8gYXV0b2NvbXBsZXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlVW5pdmVyc2FsIChpbnB1dCwgbmFtZXNwYWNlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5VW5pdmVyc2FsKGlucHV0KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke25hbWVzcGFjZX1gLCBkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGFuIGlucHV0LCBxdWVyeSBmb3IgYSBsaXN0IG9mIHNpbWlsYXIgcmVzdWx0cyBpbiB0aGUgcHJvdmlkZWQgdmVydGljYWxcbiAgICogYW5kIHNldCBpbnRvIHN0b3JhZ2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0ICAgICAgIHRoZSBzdHJpbmcgdG8gYXV0b2NvbXBsZXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmVydGljYWxLZXkgdGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIGV4cGVyaWVuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJhcktleSAgICAgIHRoZSBiYXIga2V5IGZvciB0aGUgZXhwZXJpZW5jZVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlVmVydGljYWwgKGlucHV0LCBuYW1lc3BhY2UsIHZlcnRpY2FsS2V5LCBiYXJLZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0NvbXBsZXRlXG4gICAgICAucXVlcnlWZXJ0aWNhbChpbnB1dCwgdmVydGljYWxLZXksIGJhcktleSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkFVVE9DT01QTEVURX0uJHtuYW1lc3BhY2V9YCwgZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhbiBpbnB1dCwgcHJvdmlkZSBhIGxpc3Qgb2Ygc3VpdGFibGUgZmlsdGVycyBmb3IgYXV0b2NvbXBsZXRpb25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0ICAgICAgICAgdGhlIHN0cmluZyB0byBzZWFyY2ggZm9yIGZpbHRlcnMgd2l0aFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlICAgICB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbEtleSAgIHRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBleHBlcmllbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiYXJLZXkgICAgICAgIHRoZSBiYXIga2V5IGZvciB0aGUgZXhwZXJpZW5jZVxuICAgKi9cbiAgYXV0b0NvbXBsZXRlRmlsdGVyIChpbnB1dCwgbmFtZXNwYWNlLCB2ZXJ0aWNhbEtleSwgYmFyS2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5RmlsdGVyKGlucHV0LCB2ZXJ0aWNhbEtleSwgYmFyS2V5KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke25hbWVzcGFjZX1gLCBkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgZ2l2ZW4gcXVlcnkgaW50byBzdG9yYWdlLCB0byBiZSB1c2VkIGZvciB0aGUgbmV4dCBzZWFyY2hcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IHRoZSBxdWVyeSB0byBzdG9yZVxuICAgKi9cbiAgc2V0UXVlcnkgKHF1ZXJ5KSB7XG4gICAgdGhpcy5zdG9yYWdlLnNldChTdG9yYWdlS2V5cy5RVUVSWSwgcXVlcnkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlcyB0aGUgZ2l2ZW4gZmlsdGVyIGludG8gc3RvcmFnZSwgdG8gYmUgdXNlZCBmb3IgdGhlIG5leHQgc2VhcmNoXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKiBAcGFyYW0ge0ZpbHRlcn0gZmlsdGVyICAgIHRoZSBmaWx0ZXIgdG8gc2V0XG4gICAqL1xuICBzZXRGaWx0ZXIgKG5hbWVzcGFjZSwgZmlsdGVyKSB7XG4gICAgdGhpcy5zdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5GSUxURVJ9LiR7bmFtZXNwYWNlfWAsIGZpbHRlcik7XG4gIH1cblxuICBvbiAoZXZ0LCBtb2R1bGVJZCwgY2IpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLm9uKGV2dCwgbW9kdWxlSWQsIGNiKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQ29tcG9uZW50TWFuYWdlciAqL1xuXG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuXG4vKipcbiAqIENvbXBvbmVudE1hbmFnZXIgaXMgYSBTaW5nbGV0b25lIHRoYXQgY29udGFpbnMgYm90aCBhbiBpbnRlcm5hbCByZWdpc3RyeSBvZlxuICogZWxpZ2libGUgY29tcG9uZW50cyB0byBiZSBjcmVhdGVkLCBhcyB3ZWxsIGFzIGtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50XG4gKiBpbnN0YW50aWF0ZWQgYW5kIGFjdGl2ZSBjb21wb25lbnRzLlxuICpcbiAqIEFMTCBjb21wb25lbnRzIHNob3VsZCBiZSBjb25zdHJ1Y3RlZCB1c2luZyB0aGUge0NvbXBvbmVudE1hbmFnZXJ9IHZpYSBpdHMgYGNyZWF0ZWAgbWV0aG9kLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIGlmICghQ29tcG9uZW50TWFuYWdlci5zZXRJbnN0YW5jZSh0aGlzKSkge1xuICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9uZW50IHJlZ2lzdHJ5IGlzIGFuIGludGVybmFsIG1hcCwgdGhhdCBjb250YWluc1xuICAgICAqIGFsbCBhdmFpbGFibGUgY29tcG9uZW50IENMQVNTRVMgdXNlZCBmb3IgY3JlYXRpb24gb3Igb3ZlcnJpZGUuXG4gICAgICogRWFjaCBjb21wb25lbnQgY2xhc3MgaGFzIGEgdW5pcXVlIFRZUEUsIHdoaWNoIGlzIHVzZWQgYXMgdGhlIGtleSBmb3IgdGhlIHJlZ2lzdHJ5XG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9jb21wb25lbnRSZWdpc3RyeSA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFjdGl2ZSBjb21wb25lbnRzIGlzIGFuIGludGVybmFsIGNvbnRhaW5lciB0byBrZWVwIHRyYWNrXG4gICAgICogb2YgYWxsIG9mIHRoZSBjb21wb25lbnRzIHRoYXQgaGF2ZSBiZWVuIGNvbnN0cnVjdGVkXG4gICAgICovXG4gICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNvcmUgbGlicmFyeSBkZXBlbmRlbmN5XG4gICAgICpcbiAgICAgKiBUaGUgQ29yZSBjb250YWlucyBib3RoIHRoZSBzdG9yYWdlIEFORCBzZXJ2aWNlcyB0aGF0IGFyZSBuZWVkZWQgZm9yIHBlcmZvcm1pbmcgb3BlcmF0aW9uc1xuICAgICAqIGxpa2Ugc2VhcmNoIGFuZCBhdXRvIGNvbXBsZXRlLlxuICAgICAqXG4gICAgICogVGhlIHN0b3JhZ2UgaXMgdGhlIHNvdXJjZSBvZiB0cnV0aCBmb3IgdGhlIHN0YXRlIG9mIEFMTCBjb21wb25lbnRzLlxuICAgICAqIFdoZW5ldmVyIHRoZSBzdG9yYWdlIGlzIHVwZGF0ZWQsIHRoZSBzdGF0ZSBnZXRzIHB1c2hlZCBkb3duIHRvIHRoZSBuZWNlc3NhcnkgY29tcG9uZW50cy5cbiAgICAgKiBAdHlwZSB7Q29yZX1cbiAgICAgKi9cbiAgICB0aGlzLl9jb3JlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBwcmltYXJ5IHJlbmRlcmVyIHRvIHVzZSBmb3IgYWxsIGNvbXBvbmVudHNcbiAgICAgKiBAdHlwZSB7SGFuZGxlYmFyc1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3JlbmRlcmVyID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBhbmFseXRpY3MgcmVwb3J0ZXIgZGVwZW5kZW5jeVxuICAgICAqL1xuICAgIHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyID0gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBzZXRJbnN0YW5jZSAoaW5zdGFuY2UpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UgKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgc2V0UmVuZGVyZXIgKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldENvcmUgKGNvcmUpIHtcbiAgICB0aGlzLl9jb3JlID0gY29yZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldEFuYWx5dGljc1JlcG9ydGVyIChyZXBvcnRlcikge1xuICAgIHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyID0gcmVwb3J0ZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXJzIGEgY29tcG9uZW50IHRvIGJlIGVsaWdpYmxlIGZvciBjcmVhdGlvbiBhbmQgb3ZlcnJpZGUuXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBUaGUgQ29tcG9uZW50IENsYXNzIHRvIHJlZ2lzdGVyXG4gICAqL1xuICByZWdpc3RlciAoY29tcG9uZW50Q2xhenopIHtcbiAgICB0aGlzLl9jb21wb25lbnRSZWdpc3RyeVtjb21wb25lbnRDbGF6ei50eXBlXSA9IGNvbXBvbmVudENsYXp6O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZSBpcyB0aGUgZW50cnkgcG9pbnQgZm9yIGNvbnN0cnVjdGluZyBhbnkgYW5kIGFsbCBjb21wb25lbnRzLlxuICAgKiBJdCB3aWxsIGluc3RhbnRpYXRlIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQsIGFuZCBib3RoIGFwcGx5XG4gICAqIGluaXRpYWwgc3RhdGUgZnJvbSB0aGUgc3RvcmFnZSBhbmQgYmluZCBpdCB0byB0aGUgc3RvcmFnZSBmb3IgdXBkYXRlcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudFR5cGUgVGhlIGNvbXBvbmVudCB0eXBlIHRvIGNyZWF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBUaGUgb3B0aW9ucyB0byBwaXBlIHRvIHRoZSBjb25zdHJ1Y3Rpb24gb2YgdGhlIGNvbXBvbmVudFxuICAgKi9cbiAgY3JlYXRlIChjb21wb25lbnRUeXBlLCBvcHRzKSB7XG4gICAgLy8gRXZlcnkgY29tcG9uZW50IG5lZWRzIGxvY2FsIGFjY2VzcyB0byB0aGUgY29tcG9uZW50IG1hbmFnZXJcbiAgICAvLyBiZWNhdXNlIHNvbWV0aW1lcyBjb21wb25lbnRzIGhhdmUgc3ViY29tcG9uZW50cyB0aGF0IG5lZWQgdG8gYmVcbiAgICAvLyBjb25zdHJ1Y3RlZCBkdXJpbmcgY3JlYXRpb25cbiAgICBvcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb3JlOiB0aGlzLl9jb3JlLFxuICAgICAgcmVuZGVyZXI6IHRoaXMuX3JlbmRlcmVyLFxuICAgICAgYW5hbHl0aWNzUmVwb3J0ZXI6IHRoaXMuX2FuYWx5dGljc1JlcG9ydGVyLFxuICAgICAgY29tcG9uZW50TWFuYWdlcjogdGhpc1xuICAgIH0sIG9wdHMpO1xuXG4gICAgbGV0IGNvbXBvbmVudENsYXNzID0gdGhpcy5fY29tcG9uZW50UmVnaXN0cnlbY29tcG9uZW50VHlwZV07XG5cbiAgICBpZiAoXG4gICAgICAhY29tcG9uZW50Q2xhc3MuYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkKCkgJiZcbiAgICAgIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMuc29tZShjID0+IGMubmFtZSA9PT0gb3B0cy5uYW1lKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgYEFub3RoZXIgY29tcG9uZW50IHdpdGggbmFtZSAke29wdHMubmFtZX0gYWxyZWFkeSBleGlzdHNgLFxuICAgICAgICBjb21wb25lbnRUeXBlKTtcbiAgICB9XG5cbiAgICAvLyBJbnN0YW50aWF0ZSBvdXIgbmV3IGNvbXBvbmVudCBhbmQga2VlcCB0cmFjayBvZiBpdFxuICAgIGxldCBjb21wb25lbnQgPVxuICAgICAgbmV3IHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5W2NvbXBvbmVudFR5cGVdKG9wdHMpXG4gICAgICAgIC5pbml0KG9wdHMpO1xuXG4gICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIGxvY2FsIHN0b3JhZ2UgdG8gcG93ZXIgc3RhdGUsIGFwcGx5IHRoZSBzdGF0ZVxuICAgIC8vIGZyb20gdGhlIHN0b3JhZ2UgdG8gdGhlIGNvbXBvbmVudCwgYW5kIHRoZW4gYmluZCB0aGUgY29tcG9uZW50XG4gICAgLy8gc3RhdGUgdG8gdGhlIHN0b3JhZ2UgdmlhIGl0cyB1cGRhdGVzXG4gICAgaWYgKHRoaXMuX2NvcmUgJiYgdGhpcy5fY29yZS5zdG9yYWdlICE9PSBudWxsKSB7XG4gICAgICBpZiAoY29tcG9uZW50Lm1vZHVsZUlkID09PSB1bmRlZmluZWQgfHwgY29tcG9uZW50Lm1vZHVsZUlkID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NvcmUuc3RvcmFnZVxuICAgICAgICAub24oJ3VwZGF0ZScsIGNvbXBvbmVudC5tb2R1bGVJZCwgKGRhdGEpID0+IHtcbiAgICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnQ7XG4gIH1cblxuICBnZXRBY3RpdmVDb21wb25lbnQgKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5maW5kKGMgPT4gYy50eXBlID09PSB0eXBlKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVuZGVyZXIgKi9cblxuLyoqXG4gKiBSZW5kZXJlciBpcyBhbiBhYnN0cmFjdCBjbGFzcyB0aGF0IGFsbCBSZW5kZXJlcnMgc2hvdWxkIGV4dGVuZCBhbmQgaW1wbGVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcbiAgLyoqXG4gICAqIHJlbmRlciBpcyBhIGNvcmUgbWV0aG9kIGZvciBhbGwgcmVuZGVyZXJzLlxuICAgKiBBbGwgaW1wbGVtZW50YXRpb25zIHNob3VsZCBvdmVycmlkZSB0aGlzIGNsYXNzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZVxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKi9cbiAgcmVuZGVyICh0ZW1wbGF0ZSwgZGF0YSkge1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHJlZ2lzdGVySGVscGVyIChuYW1lLCBjYikge1xuXG4gIH1cblxuICBjb21waWxlICh0ZW1wbGF0ZSkge1xuXG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEhhbmRsZWJhcnNSZW5kZXJlciAqL1xuXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5cbi8qKlxuICogSGFuZGxlYmFyc1JlbmRlcmVyIGlzIGEgd3JhcHBlciBhcm91bmQgdGhlIG5hdGl2YXRlIGhhbmRsZWJhcnMgcmVuZGVyZXIuXG4gKiBAZXh0ZW5kcyBSZW5kZXJlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYW5kbGViYXJzUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yICh0ZW1wbGF0ZXMgPSB7fSwgb3B0cyA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBoYW5kbGViYXJzIGNvbXBpbGVyXG4gICAgICogQHR5cGUge0hhbmRsZWJhcnN9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9oYW5kbGViYXJzID0gdGVtcGxhdGVzLl9oYiB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIHByZS1jb21waWxlZCBoYW5kbGViYXJzIHRlbXBsYXRlc1xuICAgICAqIEB0eXBlIHtIYW5kbGViYXJzfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVzID0gdGVtcGxhdGVzIHx8IHt9O1xuICB9XG5cbiAgaW5pdCAodGVtcGxhdGVzKSB7XG4gICAgLy8gQXNzaWduIHRoZSBoYW5kbGViYXJzIGNvbXBpbGVyIGFuZCB0ZW1wbGF0ZXMgYmFzZWQgb25cbiAgICAvLyBpbmZvcm1hdGlvbiBwcm92aWRlZCBmcm9tIGV4dGVybmFsIGRlcCAoaW4gZGVmYXVsdCBjYXNlLCBpdCBjb21lcyBmcm9tIGV4dGVybmFsIHNlcnZlciByZXF1ZXN0KVxuICAgIHRoaXMuX2hhbmRsZWJhcnMgPSB0ZW1wbGF0ZXMuX2hiO1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHRlbXBsYXRlcztcblxuICAgIC8vIFRPRE8oYmlsbHkpIE9uY2Ugd2UgcmUtd3JpdGUgdGVtcGxhdGVzIHVzaW5nIHRoZSBuZXcgaGVscGVycyBsaWJyYXJ5XG4gICAgLy8gd2UgcHJvYmFibHkgZG9uJ3QgbmVlZCB0aGVzZSBjdXN0b20gaGVscGVycyBhbnltb3JlXG4gICAgdGhpcy5fcmVnaXN0ZXJDdXN0b21IZWxwZXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXJIZWxwZXIgaXMgYSBwdWJsaWMgaW50ZXJmYWNlIGZvciBleHRlcm5hbCBkZXBlbmRlbmNpZXMgdG9cbiAgICogcmVnaXN0ZXIgdGhlaXIgb3duIGN1c3RvbSBoZWxwZXJzIHRvIG91ciBpbnRlcm5hbCBIYW5kbGViYXJzIENvbXBpbGVyXG4gICAqL1xuICByZWdpc3RlckhlbHBlciAobmFtZSwgY2IpIHtcbiAgICB0aGlzLl9oYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKG5hbWUsIGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb21waWxlIGEgaGFuZGxlYmFycyB0ZW1wbGF0ZSBzbyB0aGF0IGl0IGNhbiBiZSByZW5kZXJlZCxcbiAgICogdXNpbmcgdGhlIHtIYW5kbGViYXJzfSBjb21waWxlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgVGhlIHRlbXBsYXRlIHN0cmluZyB0byBjb21waWxlXG4gICAqL1xuICBjb21waWxlICh0ZW1wbGF0ZSkge1xuICAgIGlmICh0eXBlb2YgdGVtcGxhdGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9oYW5kbGViYXJzLmNvbXBpbGUodGVtcGxhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbmRlciB3aWxsIHJlbmRlciBhIHRlbXBsYXRlIHdpdGggZGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFByb3ZpZGUgZWl0aGVyIGEgdGVtcGxhdGVOYW1lIG9yIGEgcHJlLWNvbXBpbGVkIHRlbXBsYXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHByb3ZpZGUgdG8gdGhlIHRlbXBsYXRlXG4gICAqL1xuICByZW5kZXIgKGNvbmZpZywgZGF0YSkge1xuICAgIC8vIElmIGEgY3VzdG9tIHRlbXBsYXRlIGlzIHByb3ZpZGVkLCB1c2UgaXQsXG4gICAgLy8gb3RoZXJ3aXNlIGZhbGwgYmFjayB0byB0aGUgdGVtcGxhdGUgbmFtZVxuICAgIC8vIFRPRE8oYmlsbHkpIFRoaXMgaW50ZXJmYWNlIHNob3VsZCBwcm9iYWJseSBiZSBsZXNzIHVnbHlcbiAgICBpZiAoY29uZmlnLnRlbXBsYXRlICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gY29uZmlnLnRlbXBsYXRlKGRhdGEpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVzW2NvbmZpZy50ZW1wbGF0ZU5hbWVdKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBmaW5kL3JlbmRlciB0ZW1wbGF0ZTogJyArIGNvbmZpZy50ZW1wbGF0ZU5hbWUsIGUpO1xuICAgIH1cbiAgfVxuXG4gIF9yZWdpc3RlckN1c3RvbUhlbHBlcnMgKCkge1xuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2lmZXEnLCBmdW5jdGlvbiAoYXJnMSwgYXJnMiwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIChhcmcxID09PSBhcmcyKSA/IG9wdGlvbnMuZm4odGhpcykgOiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdpZm5vdGVxJywgZnVuY3Rpb24gKGFyZzEsIGFyZzIsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiAoYXJnMSAhPT0gYXJnMikgPyBvcHRpb25zLmZuKHRoaXMpIDogb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignZm9ybWF0UGhvbmVOdW1iZXInLCBmdW5jdGlvbiAocGhvbmVOdW1iZXJTdHJpbmcpIHtcbiAgICAgIHZhciBjbGVhbmVkID0gKCcnICsgcGhvbmVOdW1iZXJTdHJpbmcpLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG4gICAgICB2YXIgbWF0Y2ggPSBjbGVhbmVkLm1hdGNoKC9eKDF8KT8oXFxkezN9KShcXGR7M30pKFxcZHs0fSkkLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdmFyIGludGxDb2RlID0gKG1hdGNoWzFdID8gJysxICcgOiAnJyk7XG4gICAgICAgIHJldHVybiBbaW50bENvZGUsICcoJywgbWF0Y2hbMl0sICcpICcsIG1hdGNoWzNdLCAnLScsIG1hdGNoWzRdXS5qb2luKCcnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignYXNzaWduJywgZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIG9wdGlvbnMgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmICghb3B0aW9ucy5kYXRhLnJvb3QpIHtcbiAgICAgICAgb3B0aW9ucy5kYXRhLnJvb3QgPSB7fTtcbiAgICAgIH1cblxuICAgICAgbGV0IHYgPSAnJztcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgdiA9IHYgKyBhcmdzW2ldO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLmRhdGEucm9vdFtuYW1lXSA9IHY7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdqc29uJywgZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gbmFtZSA9PT0gdW5kZWZpbmVkXG4gICAgICAgID8gJydcbiAgICAgICAgOiBKU09OLnN0cmluZ2lmeShuYW1lKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEhhbmRsZWJhcnNSZW5kZXJlciBmcm9tICcuL2hhbmRsZWJhcnNyZW5kZXJlcic7XG5cbi8vIEluIHRoZSBmdXR1cmUsIHRoaXMgd2lsbCBjb250YWluIGFsbCBkaWZmZXJlbnQgdHlwZXMgb2YgcmVuZGVyZXJzXG4vLyBFLmcuIE11c3RhY2hlLCBTT1ksIEhhbmRsZUJhcnMsIFJlYWN0LCBldGMuXG5leHBvcnQgY29uc3QgUmVuZGVyZXJzID0ge1xuICBTT1k6IFJlbmRlcmVyLFxuICBIYW5kbGViYXJzOiBIYW5kbGViYXJzUmVuZGVyZXJcbn07XG4iLCIvKiogQG1vZHVsZSBET00gKi9cblxuLyogZ2xvYmFsIEhUTUxFbGVtZW50LCBIVE1MRG9jdW1lbnQsIFdpbmRvdywgRXZlbnQgKi9cblxubGV0IGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuXG4vKipcbiAqIFN0YXRpYyBpbnRlcmZhY2UgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIERPTSBBUEkuXG4gKiBAbmFtZXNwYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTSB7XG4gIHN0YXRpYyBzZXR1cCAoZCwgcCkge1xuICAgIGRvY3VtZW50ID0gZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGUgYSBIVE1MRWxlbWVudCBmcm9tIGFuZCBIVE1MIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gaHRtbCBUaGUgSFRNTCB0byBwYXJzZSB0byBhIERPTSBub2RlLlxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIHN0YXRpYyBjcmVhdGUgKGh0bWwpIHtcbiAgICBpZiAoJ2NyZWF0ZVJhbmdlJyBpbiBkb2N1bWVudCkge1xuICAgICAgLy8gcHJlZmVyIHRoaXMgaW1wbGVtZW50YXRpb24gYXMgaXQgaGFzIHdpZGVyIGJyb3dzZXIgc3VwcG9ydFxuICAgICAgLy8gYW5kIGl0J3MgYmV0dGVyIHBlcmZvcm1pbmcuXG4gICAgICAvLyBzZWUgaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvY29udmVydC1odG1sLXN0aW5ncy1kb20tbm9kZXNcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGh0bWwpO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWcpO1xuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvLyBmYWxsYmFjayB0byB0aGlzIGJlY2F1c2Ugb2YgYSBidWcgaW4ganNkb20gdGhhdCBjYXVzZXMgdGVzdHMgdG8gZmFpbFxuICAgIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pzZG9tL2pzZG9tL2lzc3Vlcy8zOTlcbiAgICByZXR1cm4gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC9odG1sJykuYm9keTtcbiAgfVxuXG4gIC8qKlxuICAgKiBxdWVyeSB0aGUgRE9NIGZvciBhIGdpdmVuIGNzcyBzZWxlY3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgT3B0aW9uYWwgY29udGV4dCB0byB1c2UgZm9yIGEgc2VhcmNoLiBEZWZhdWx0cyB0byBkb2N1bWVudCBpZiBub3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciB0aGUgQ1NTIHNlbGVjdG9yIHRvIHF1ZXJ5IGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IHRoZSBGSVJTVCBub2RlIGl0IGZpbmRzLCBpZiBhbnlcbiAgICovXG4gIHN0YXRpYyBxdWVyeSAocGFyZW50LCBzZWxlY3Rvcikge1xuICAgIC8vIEZhY2FkZSwgc2hpZnRpbmcgdGhlIHNlbGVjdG9yIHRvIHRoZSBwYXJlbnQgYXJndW1lbnQgaWYgb25seSBvbmVcbiAgICAvLyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RvciA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgV2luZG93IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTERvY3VtZW50KSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBxdWVyeSB0aGUgRE9NIGZvciBhIGdpdmVuIGNzcyBzZWxlY3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgT3B0aW9uYWwgY29udGV4dCB0byB1c2UgZm9yIGEgc2VhcmNoLiBEZWZhdWx0cyB0byBkb2N1bWVudCBpZiBub3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciB0aGUgQ1NTIHNlbGVjdG9yIHRvIHF1ZXJ5IGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IHRoZSBGSVJTVCBub2RlIGl0IGZpbmRzLCBpZiBhbnlcbiAgICovXG4gIHN0YXRpYyBxdWVyeUFsbCAocGFyZW50LCBzZWxlY3Rvcikge1xuICAgIC8vIEZhY2FkZSwgc2hpZnRpbmcgdGhlIHNlbGVjdG9yIHRvIHRoZSBwYXJlbnQgYXJndW1lbnQgaWYgb25seSBvbmVcbiAgICAvLyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RvciA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIC8vIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSBjbGllbnQgY29kZSBpcyB1c2luZyBhIHBvaW50ZXIgdG8gYSBkb20gbm9kZSBhbmQgaXQncyBudWxsLCBlLmcuIHRoaXMuX2NvbnRhaW5lclxuICAgIGlmIChwYXJlbnQgPT0gbnVsbCkge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBXaW5kb3cpIHtcbiAgICAgIHJldHVybiBbc2VsZWN0b3JdO1xuICAgIH1cblxuICAgIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gIH1cblxuICBzdGF0aWMgb25SZWFkeSAoY2IpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGVkJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKSB7XG4gICAgICBjYigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIERPTS5vbihkb2N1bWVudCwgJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlRWxlIHdpbGwgY3JlYXRlIGEge0hUTUxFbGVtZW50fSBhbmQgYXBwbHkgdGhlIHByb3BlcnRpZXMgYXR0cmlidXRlcyB0aHJvdWdoIGFuIG9iamVjdCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGVsIFRoZSBlbGVtZW50IGB0YWdgIG5hbWUgdG8gY29uc3RydWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzX2RhdGEgT3B0aW9uYWwgYXR0cmlidXRlcyB0byBhcHBseSB0byB0aGUgbmV3IEhUTUxFbGVtZW50XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlRWwgKGVsLCBvcHRzX2RhdGEgPSB7fSkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbCk7XG4gICAgbGV0IHByb3BzID0gT2JqZWN0LmtleXMob3B0c19kYXRhKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9wc1tpXSA9PT0gJ2NsYXNzJykge1xuICAgICAgICBET00uYWRkQ2xhc3Mobm9kZSwgb3B0c19kYXRhW3Byb3BzW2ldXSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBub2RlW3Byb3BzW2ldXSA9IG9wdHNfZGF0YVtwcm9wc1tpXV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgYXBwZW5kIChwYXJlbnQsIG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBub2RlID0gcGFyZW50O1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXJlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJlbnQgPSBET00ucXVlcnkocGFyZW50KTtcbiAgICB9XG5cbiAgICAvLyBTdXBwb3J0IEhUTUwgaW5qZWN0aW9uIGFzIHdlbGwgYXMgSFRNTEVsZW1lbnQgYXBwZW5kc1xuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyQmVnaW4nLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhZGRDbGFzcyAobm9kZSwgY2xhc3NOYW1lKSB7XG4gICAgbGV0IGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJywnKTtcbiAgICBsZXQgbGVuID0gY2xhc3Nlcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBub2RlLmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGVtcHR5IChwYXJlbnQpIHtcbiAgICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICBzdGF0aWMgY3NzIChzZWxlY3Rvciwgc3R5bGVzKSB7XG4gICAgbGV0IG5vZGUgPSBET00ucXVlcnkoc2VsZWN0b3IpO1xuXG4gICAgZm9yIChsZXQgcHJvcCBpbiBzdHlsZXMpIHtcbiAgICAgIG5vZGUuc3R5bGVbcHJvcF0gPSBzdHlsZXNbcHJvcF07XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGF0dHIgKHNlbGVjdG9yLCBhdHRyLCB2YWwpIHtcbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLnNldEF0dHJpYnV0ZShhdHRyLCB2YWwpO1xuICB9XG5cbiAgc3RhdGljIHRyaWdnZXIgKHNlbGVjdG9yLCBldmVudCwgc2V0dGluZ3MpIHtcbiAgICBsZXQgZSA9IG5ldyBFdmVudChldmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAnYnViYmxlcyc6IHRydWUsXG4gICAgICAnY2FuY2VsYWJsZSc6IHRydWVcbiAgICB9LCBzZXR0aW5ncyB8fCB7fSkpO1xuXG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5kaXNwYXRjaEV2ZW50KGUpO1xuICB9XG5cbiAgc3RhdGljIG9uIChzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgb2ZmIChzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZGVsZWdhdGUgKGN0eHQsIHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpIHtcbiAgICBsZXQgZWwgPSBET00ucXVlcnkoY3R4dCk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIHdoaWxlICghdGFyZ2V0LmlzRXF1YWxOb2RlKGVsKSkge1xuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgaGFuZGxlcihldmVudCwgdGFyZ2V0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU3RhdGUgKi9cblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi8uLi9jb3JlL2V2ZW50ZW1pdHRlci9ldmVudGVtaXR0ZXInO1xuXG4vKipcbiAqIFN0YXRlIGNvbnRhaW5zIHRoZSBkYXRhIGZvciB0aGUgY29tcG9uZW50XG4gKiBhbmQgZXhwb3NlcyBhbiB7RXZlbnRFbWl0dGVyfSBpbnRlcmZhY2Ugc28gdGhhdCBleHRlcm5hbFxuICogZGVwZW5kZW5jaWVzIGNhbiBsaXN0ZW4vaG9vayBzdWJzY3JpYmUgdG8gbWVzc2FnZXMvdXBkYXRlcy5cbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RhdGUgPSBkYXRhIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKiBOT1RFKGJpbGx5KTogRG9lcyBub3QgZmlyZSBhbiB1cGRhdGUgbWVzc2FnZVxuICAgKi9cbiAgaW5pdCAocHJvcCwgb3B0VmFsKSB7XG4gICAgdGhpcy5fc2V0KHByb3AsIG9wdFZhbCk7XG4gIH1cblxuICAvKipcbiAgICogc2V0dGVyIGZvciB0aGUgc3RhdGVcbiAgICogQHBhcmFtIHByb3Age3N0cmluZ3xPYmplY3R9IFRoZSBwcm9wZXJ0eSB0byBzZXRcbiAgICogQHBhcmFtIG9wdFZhbCBPcHRpb25hbCwgaWYgcHJvcCBpcyBhIHtzdHJpbmd9LCBpdCB3aWxsIGFzc2lnbiB0aGUgdmFsdWUgdG8gdGhhdCBwcm9wZXJ0eVxuICAgKi9cbiAgc2V0IChwcm9wLCBvcHRWYWwpIHtcbiAgICB0aGlzLl9zZXQocHJvcCwgb3B0VmFsKTtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldHRlciBmb3IgdGhlIHN0YXRlIGVuYWJsZXMgeW91IHRvIHVwZGF0ZSBhIHNpbmdsZSBwcm9wZXJ0eSwgb3IgY29tcGxldGUgc3RhdGVcbiAgICogZGVwZW5kaW5nIG9uIHRoZSBhcmd1bWVudHMgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSBwcm9wIHtzdHJpbmd8T2JqZWN0fSBUaGUgcHJvcGVydHkgdG8gc2V0XG4gICAqIEBwYXJhbSBvcHRWYWwgSWYgcHJvcCBpcyBhIHtzdHJpbmd9LCBwcm92aWRlIGl0cyB2YWx1ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NldCAocHJvcCwgb3B0VmFsKSB7XG4gICAgaWYgKG9wdFZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9zdGF0ZSA9IHByb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0YXRlW3Byb3BdID0gb3B0VmFsO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSAoZGF0YSkge1xuICAgIHRoaXMuX3N0YXRlID0gZGF0YTtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGEgcHJvcGVydGllcyB2YWx1ZSBmcm9tIHRoZSBzdGF0ZVxuICAgKiBJZiBubyBwcm9wZXJ0eSBwcm92aWRlZCwgcmV0dXJuIHRoZSBmdWxsIHN0YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRQcm9wIG9wdGlvbmFsIHByb3BlcnR5IHRvIHJldHJpZXZlXG4gICAqL1xuICBnZXQgKG9wdFByb3ApIHtcbiAgICBpZiAob3B0UHJvcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zdGF0ZVtvcHRQcm9wXTtcbiAgfVxuXG4gIGhhcyAocHJvcCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZVtwcm9wXSAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgYXNKU09OICgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gIH1cbn1cbiIsIi8qKlxuICogTW9kZWwgZm9yIHRoZSBhbmFseXRpY3MgZXZlbnQgdHlwZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmFseXRpY3NFdmVudCB7XG4gIGNvbnN0cnVjdG9yICh0eXBlLCBsYWJlbCkge1xuICAgIHRoaXMuZXZlbnRUeXBlID0gdHlwZS50b1VwcGVyQ2FzZSgpO1xuICAgIGlmIChsYWJlbCkge1xuICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBwcm92aWRlZCBvcHRpb25zIHRvIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBBZGRpdGlvbmFsIG9wdGlvbnMgZm9yIHRoZSBldmVudFxuICAgKi9cbiAgYWRkT3B0aW9ucyAob3B0aW9ucykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBldmVudCBpbiB0aGUgYXBpIGZvcm1hdCwgdHlwaWNhbGx5IGZvciByZXBvcnRpbmcgdG8gdGhlIGFwaVxuICAgKi9cbiAgdG9BcGlFdmVudCAoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBbmFseXRpY3NSZXBvcnRlciAqL1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4vYW5hbHl0aWNzZXZlbnQnO1xuaW1wb3J0IHsgQW5zd2Vyc0FuYWx5dGljc0Vycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgeyBBTkFMWVRJQ1NfQkFTRV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIENsYXNzIGZvciByZXBvcnRpbmcgYW5hbHl0aWNzIGV2ZW50cyB0byB0aGUgc2VydmVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuYWx5dGljc1JlcG9ydGVyIHtcbiAgY29uc3RydWN0b3IgKGFuc3dlcnNLZXksIGJ1c2luZXNzSWQsIGdsb2JhbE9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuX2J1c2luZXNzSWQgPSBidXNpbmVzc0lkO1xuXG4gICAgLyoqXG4gICAgICogT3B0aW9ucyB0byBpbmNsdWRlIHdpdGggZXZlcnkgYW5hbHl0aWMgZXZlbnQgcmVwb3J0ZWQgdG8gdGhlIHNlcnZlclxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9nbG9iYWxPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZ2xvYmFsT3B0aW9ucywgeyBhbnN3ZXJzS2V5IH0pO1xuICB9XG5cbiAgcmVwb3J0IChldmVudCkge1xuICAgIGlmICghKGV2ZW50IGluc3RhbmNlb2YgQW5hbHl0aWNzRXZlbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0FuYWx5dGljc0Vycm9yKCdUcmllZCB0byBzZW5kIGludmFsaWQgYW5hbHl0aWNzIGV2ZW50JywgZXZlbnQpO1xuICAgIH1cblxuICAgIGV2ZW50LmFkZE9wdGlvbnModGhpcy5fZ2xvYmFsT3B0aW9ucyk7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgYmFzZVVybDogQU5BTFlUSUNTX0JBU0VfVVJMLFxuICAgICAgZW5kcG9pbnQ6IGAvcmVhbHRpbWVhbmFseXRpY3MvZGF0YS9hbnN3ZXJzLyR7dGhpcy5fYnVzaW5lc3NJZH1gLFxuICAgICAgdmVyc2lvbjogMjAxOTAzMDEsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2RhdGEnOiBldmVudC50b0FwaUV2ZW50KClcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LnBvc3QoKVxuICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2hBcGkgfSBmcm9tICcuL3NlYXJjaC9zZWFyY2hhcGknO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBbmFseXRpY3NSZXBvcnRlciB9IGZyb20gJy4vYW5hbHl0aWNzL2FuYWx5dGljc3JlcG9ydGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kdWxlRGF0YSB9IGZyb20gJy4vc3RvcmFnZS9tb2R1bGVkYXRhJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZS9zdG9yYWdlJztcbiIsIi8qKiBAbW9kdWxlIENvbXBvbmVudCAqL1xuXG5pbXBvcnQgeyBSZW5kZXJlcnMgfSBmcm9tICcuLi9yZW5kZXJpbmcvY29uc3QnO1xuXG5pbXBvcnQgRE9NIGZyb20gJy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0YXRlIGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgQW5hbHl0aWNzUmVwb3J0ZXIgfSBmcm9tICcuLi8uLi9jb3JlJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcblxuLyoqXG4gKiBDb21wb25lbnQgaXMgYW4gYWJzdHJhY3Rpb24gdGhhdCBlbmNhcHN1bGF0ZXMgc3RhdGUsIGJlaGF2aW9yLFxuICogYW5kIHZpZXcgZm9yIGEgcGFydGljdWxhciBjaHVuayBvZiBmdW5jdGlvbmFsaXR5IG9uIHRoZSBwYWdlLlxuICpcbiAqIFRoZSBBUEkgZXhwb3NlcyBldmVudCBsaWZlIGN5Y2xlIGhvb2tzIGZvciB3aGVuIHRoaW5ncyBhcmUgcmVuZGVyZWQsXG4gKiBtb3VudGVkLCBjcmVhdGVkLCBldGMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yICh0eXBlLCBvcHRzID0ge30pIHtcbiAgICAvLyBTaW1wbGUgZmFjYWRlIHBhdHRlcm4gdG8gZW5hYmxlIHRoZSB1c2VyIHRvIHBhc3MgYSBzaW5nbGUgb2JqZWN0XG4gICAgLy8gY29udGFpbmluZyBhbGwgdGhlIG5lY2Vzc2FyeSBvcHRpb25zIGFuZCBzZXR0aW5nc1xuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG9wdHMgPSB0eXBlO1xuICAgICAgdHlwZSA9IG9wdHMudHlwZTtcbiAgICB9XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFVuaXF1ZSBuYW1lIG9mIHRoaXMgY29tcG9uZW50IGluc3RhbmNlXG4gICAgICogVXNlZCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIG90aGVyIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgdHlwZVxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5uYW1lID0gb3B0cy5uYW1lIHx8IHRoaXMuY29uc3RydWN0b3IubmFtZTtcblxuICAgIC8qKlxuICAgICAqIENhY2hlIHRoZSBvcHRpb25zIHNvIHRoYXQgd2UgY2FuIHByb3BvZ2F0ZSBwcm9wZXJseSB0byBjaGlsZCBjb21wb25lbnRzXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9vcHRzID0gb3B0cztcblxuICAgIC8qKlxuICAgICAqIEFuIGlkZW50aWZpZXIgdXNlZCB0byBjbGFzc2lmeSB0aGUgdHlwZSBvZiBjb21wb25lbnQuXG4gICAgICogVGhlIGNvbXBvbmVudCBtYW5hZ2VyIHVzZXMgdGhpcyBpbmZvcm1hdGlvbiBpbiBvcmRlciB0byBwZXJzaXN0IGFuZCBvcmdhbml6ZSBjb21wb25lbnRzXG4gICAgICogQHR5cGUge3N0cmluZ3xDb21wb25lbnRUeXBlfVxuICAgICAqL1xuICAgIHRoaXMuX3R5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgcGFyZW50IGNvbXBvbmVudCwgaWYgZXhpc3RzXG4gICAgICogQHR5cGUge0NvbXBvbmVudH1cbiAgICAgKi9cbiAgICB0aGlzLl9wYXJlbnQgPSBvcHRzLnBhcmVudCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBjb250YWluZXIgZm9yIGFsbCB0aGUgY2hpbGQgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtDb21wb25lbnRbXX1cbiAgICAgKi9cbiAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN0YXRlIChkYXRhKSBvZiB0aGUgY29tcG9uZW50IHRvIGJlIHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9zdGF0ZSA9IG5ldyBTdGF0ZShvcHRzLnN0YXRlKTtcblxuICAgIC8qKlxuICAgICAqIFRPRE8oYmlsbHkpIFRoaXMgc2hvdWxkIGJlICdzZXJ2aWNlcydcbiAgICAgKi9cbiAgICB0aGlzLmNvcmUgPSBvcHRzLmNvcmUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlciwgd2hpY2ggY29udGFpbnMgYWxsIG9mIHRoZSBjb21wb25lbnQgY2xhc3Nlc1xuICAgICAqIGVsaWdpYmxlIHRvIGJlIGNyZWF0ZWRcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50TWFuYWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIgPSBvcHRzLmNvbXBvbmVudE1hbmFnZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBhbmFseXRpY3MgcmVwb3J0ZXIsIHVzZWQgdG8gcmVwb3J0IGV2ZW50cyBmb3IgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7QW5hbHl0aWNzUmVwb3J0ZXJ9XG4gICAgICovXG4gICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlciA9IG9wdHMuYW5hbHl0aWNzUmVwb3J0ZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBET00gbm9kZSB0aGF0IHRoZSBjb21wb25lbnQgd2lsbCBiZSBhcHBlbmRlZCB0byB3aGVuIG1vdW50ZWQvcmVuZGVyZWQuXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIGlmICh0eXBlb2Ygb3B0cy5jb250YWluZXIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBgY29udGFpbmVyYCBvcHRpb24gZm9yIGNvbXBvbmVudCBjb25maWd1cmF0aW9uLiBNdXN0IGJlIG9mIHR5cGUgYHN0cmluZ2AuJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jb250YWluZXIgPSBET00ucXVlcnkob3B0cy5jb250YWluZXIpIHx8IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IERPTS5xdWVyeSh0aGlzLl9wYXJlbnQuX2NvbnRhaW5lciwgb3B0cy5jb250YWluZXIpO1xuXG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgcGFyZW50LCBhbmQgdGhlIGNvbnRhaW5lciBpcyBtaXNzaW5nIGZyb20gdGhlIERPTSxcbiAgICAgIC8vIHdlIGNvbnN0cnVjdCB0aGUgY29udGFpbmVyIGFuZCBhcHBlbmQgaXQgdG8gdGhlIHBhcmVudFxuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBET00uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogb3B0cy5jb250YWluZXIuc3Vic3RyaW5nKDEsIG9wdHMuY29udGFpbmVyLmxlbmd0aClcbiAgICAgICAgfSk7XG4gICAgICAgIERPTS5hcHBlbmQodGhpcy5fcGFyZW50Ll9jb250YWluZXIsIHRoaXMuX2NvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBjb250YWluZXIgRE9NIG5vZGU6ICcgKyBvcHRzLmNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gY2xhc3MgdG8gYmUgYXBwbGllZCB0byB7dGhpcy5fY29udGFpbmVyfSBub2RlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9jbGFzc05hbWUgPSBvcHRzLmNsYXNzIHx8ICdjb21wb25lbnQnO1xuXG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gcmVuZGVyIGZ1bmN0aW9uIHRvIGJlIHVzZWQgaW5zdGVhZCBvZiB1c2luZyB0aGUgZGVmYXVsdCByZW5kZXJlclxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXIgPSBvcHRzLnJlbmRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGRlZmF1bHQge1JlbmRlcmVyfSB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgcmVuZGVyaW5nIHRoZSB0ZW1wbGF0ZVxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXJlciA9IG9wdHMucmVuZGVyZXIgfHwgUmVuZGVyZXJzLkhhbmRsZWJhcnM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgc3RyaW5nIHRvIHVzZSBmb3IgcmVuZGVyaW5nIHRoZSBjb21wb25lbnRcbiAgICAgKiBJZiB0aGlzIGlzIGxlZnQgZW1wdHksIHdlIGxvb2t1cCB0aGUgdGVtcGxhdGUgdGhlIGJhc2UgdGVtcGxhdGVzIHVzaW5nIHRoZSB0ZW1wbGF0ZU5hbWVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlID0gb3B0cy50ZW1wbGF0ZSA/IHRoaXMuX3JlbmRlcmVyLmNvbXBpbGUob3B0cy50ZW1wbGF0ZSkgOiBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlTmFtZSB0byB1c2UgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50LlxuICAgICAqIFRoaXMgaXMgb25seSB1c2VkIGlmIF90ZW1wbGF0ZSBpcyBlbXB0eS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IG9wdHMudGVtcGxhdGVOYW1lIHx8ICdkZWZhdWx0JztcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHN0YXRlIGluZGljYXRpbmcgd2hldGhlciBvciBub3QgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBtb3VudGVkIHRvIHRoZSBET01cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjaywgdGhhdHMgdXNlZCB0byB0cmFuc2Zvcm0gdGhlIGludGVybmFsIGRhdGFcbiAgICAgKiBtb2RlbHMgb2YgdGhlIGNvbXBvbmVudHMsIGJlZm9yZSBpdCBnZXRzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudCBzdGF0ZS5cbiAgICAgKiBCeSBkZWZhdWx0LCBubyB0cmFuc2Zvcm1hdGlvbiBoYXBwZW5zLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLnRyYW5zZm9ybURhdGEgPSBvcHRzLnRyYW5zZm9ybURhdGEgfHwgdGhpcy50cmFuc2Zvcm1EYXRhIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIGEgY29tcG9uZW50IGlzIGNyZWF0ZWQuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMub25DcmVhdGUgPSBvcHRzLm9uQ3JlYXRlIHx8IHRoaXMub25DcmVhdGUgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnQgaXMgTW91bnRlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vbk1vdW50ID0gb3B0cy5vbk1vdW50IHx8IHRoaXMub25Nb3VudCB8fCBmdW5jdGlvbiAoKSB7IH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnRzIHN0YXRlIGlzIHVwZGF0ZWQuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMub25VcGRhdGUgPSBvcHRzLm9uVXBkYXRlIHx8IHRoaXMub25VcGRhdGUgfHwgZnVuY3Rpb24gKCkgeyB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFtb3VudCBvZiB0aW1lIHRvIHdhaXQgZm9yIGFuIGFuYWx5dGljcyBldmVudCB0byBjb21wbGV0ZSBiZWZvcmUgbmF2aWdhdGluZyBvZmYgYSBwYWdlLCBpbiBtc1xuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hbmFseXRpY3NUaW1lb3V0ID0gMzAwO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0NvbXBvbmVudCc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpbml0IChvcHRzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShvcHRzLmRhdGEgfHwgb3B0cy5zdGF0ZSB8fCB7fSk7XG4gICAgdGhpcy5vbkNyZWF0ZSgpO1xuICAgIHRoaXMuX3N0YXRlLm9uKCd1cGRhdGUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uVXBkYXRlKCk7XG4gICAgICB0aGlzLm1vdW50KCk7XG4gICAgfSk7XG5cbiAgICBET00uYWRkQ2xhc3ModGhpcy5fY29udGFpbmVyLCB0aGlzLl9jbGFzc05hbWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICB0aGlzLl9zdGF0ZS5zZXQoZGF0YSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRTdGF0ZSAocHJvcCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5nZXQocHJvcCk7XG4gIH1cblxuICBoYXNTdGF0ZSAocHJvcCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5oYXMocHJvcCk7XG4gIH1cblxuICB0cmFuc2Zvcm1EYXRhIChkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBhZGRDaGlsZCAoZGF0YSwgdHlwZSwgb3B0cykge1xuICAgIGxldCBjaGlsZENvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoXG4gICAgICB0eXBlLFxuICAgICAgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcbiAgICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9LCBvcHRzIHx8IHt9LCB7XG4gICAgICAgIF9wYXJlbnRPcHRzOiB0aGlzLl9vcHRzXG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGNoaWxkQ29tcG9uZW50KTtcbiAgICByZXR1cm4gY2hpbGRDb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSByZW5kZXIgbWV0aG9kIHRvIGJlIHVzZWQgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlbmRlclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBzZXRSZW5kZXIgKHJlbmRlcikge1xuICAgIHRoaXMuX3JlbmRlciA9IHJlbmRlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHJlbmRlcmVyIGZvciB0aGUgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7UmVuZGVyZXJUeXBlfSByZW5kZXJlclxuICAgKi9cbiAgc2V0UmVuZGVyZXIgKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSBSZW5kZXJlcnNbcmVuZGVyZXJdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRlbXBsYXRlIGZvciB0aGUgY29tcG9uZW50IHRvIHVzZSB3aGVuIHJlbmRlcmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAgICovXG4gIHNldFRlbXBsYXRlICh0ZW1wbGF0ZSkge1xuICAgIHRoaXMuX3RlbXBsYXRlID0gdGhpcy5fcmVuZGVyZXIuY29tcGlsZSh0ZW1wbGF0ZSk7XG4gIH1cblxuICB1bk1vdW50ICgpIHtcbiAgICBET00uZW1wdHkodGhpcy5fY29udGFpbmVyKTtcbiAgfVxuXG4gIG1vdW50ICgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy51bk1vdW50KCk7XG4gICAgaWYgKHRoaXMuYmVmb3JlTW91bnQoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIERPTS5hcHBlbmQodGhpcy5fY29udGFpbmVyLCB0aGlzLnJlbmRlcih0aGlzLl9zdGF0ZS5hc0pTT04oKSkpO1xuXG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9vbk1vdW50KCk7XG5cbiAgICAvLyBBdHRhY2ggYW5hbHl0aWNzIGhvb2tzIGFzIG5lY2Vzc2FyeVxuICAgIGlmICh0aGlzLmFuYWx5dGljc1JlcG9ydGVyKSB7XG4gICAgICBsZXQgZG9tSG9va3MgPSBET00ucXVlcnlBbGwodGhpcy5fY29udGFpbmVyLCAnW2RhdGEtZXZlbnR0eXBlXTpub3QoW2RhdGEtaXMtYW5hbHl0aWNzLWF0dGFjaGVkXSknKTtcbiAgICAgIGRvbUhvb2tzLmZvckVhY2godGhpcy5fY3JlYXRlQW5hbHl0aWNzSG9vay5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9vbk1vdW50ICgpIHtcbiAgICB0aGlzLm9uTW91bnQodGhpcyk7XG4gICAgaWYgKHRoaXMuX2NoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2NoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgY2hpbGQuX29uTW91bnQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZW5kZXIgdGhlIHRlbXBsYXRlIHVzaW5nIHRoZSB7UmVuZGVyZXJ9IHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgYW5kIHRlbXBsYXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHJlbmRlciAoZGF0YSA9IHRoaXMuX3N0YXRlLmdldCgpKSB7XG4gICAgdGhpcy5iZWZvcmVSZW5kZXIoKTtcbiAgICBkYXRhID0gdGhpcy50cmFuc2Zvcm1EYXRhKGRhdGEpO1xuXG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICAvLyBVc2UgZWl0aGVyIHRoZSBjdXN0b20gcmVuZGVyIGZ1bmN0aW9uIG9yIHRoZSBpbnRlcm5hbCByZW5kZXJlclxuICAgIC8vIGRlcGVuZGFudCBvbiB0aGUgY29tcG9uZW50IGNvbmZpZ3VyYXRpb25cbiAgICBpZiAodHlwZW9mIHRoaXMuX3JlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaHRtbCA9IHRoaXMuX3JlbmRlcihkYXRhKTtcbiAgICAgIGlmICh0eXBlb2YgaHRtbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW5kZXIgbWV0aG9kIG11c3QgcmV0dXJuIEhUTUwgYXMgdHlwZSB7c3RyaW5nfScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZW5kZXIgdGhlIGV4aXN0aW5nIHRlbXBsYXRlcyBhcyBhIHN0cmluZ1xuICAgICAgaHRtbCA9IHRoaXMuX3JlbmRlcmVyLnJlbmRlcih7XG4gICAgICAgIHRlbXBsYXRlOiB0aGlzLl90ZW1wbGF0ZSxcbiAgICAgICAgdGVtcGxhdGVOYW1lOiB0aGlzLl90ZW1wbGF0ZU5hbWVcbiAgICAgIH0sIGRhdGEpO1xuICAgIH1cblxuICAgIC8vIFdlIGNyZWF0ZSBhbiBIVE1MIERvY3VtZW50IGZyYWdtZW50IHdpdGggdGhlIHJlbmRlcmVkIHN0cmluZ1xuICAgIC8vIFNvIHRoYXQgd2UgY2FuIHF1ZXJ5IGl0IGZvciBwcm9jZXNzaW5nIG9mIHN1YiBjb21wb25lbnRzXG4gICAgbGV0IGVsID0gRE9NLmNyZWF0ZShodG1sKTtcblxuICAgIC8vIFByb2Nlc3MgdGhlIERPTSB0byBkZXRlcm1pbmUgaWYgd2Ugc2hvdWxkIGNyZWF0ZVxuICAgIC8vIGluLW1lbW9yeSBzdWItY29tcG9uZW50cyBmb3IgcmVuZGVyaW5nXG4gICAgbGV0IGRvbUNvbXBvbmVudHMgPSBET00ucXVlcnlBbGwoZWwsICdbZGF0YS1jb21wb25lbnRdJyk7XG4gICAgZG9tQ29tcG9uZW50cy5mb3JFYWNoKGMgPT4gdGhpcy5fY3JlYXRlU3ViY29tcG9uZW50KGMsIGRhdGEpKTtcblxuICAgIHRoaXMuYWZ0ZXJSZW5kZXIoKTtcbiAgICByZXR1cm4gZWwuaW5uZXJIVE1MO1xuICB9XG5cbiAgX2NyZWF0ZVN1YmNvbXBvbmVudCAoZG9tQ29tcG9uZW50LCBkYXRhKSB7XG4gICAgbGV0IGRhdGFzZXQgPSBkb21Db21wb25lbnQuZGF0YXNldDtcbiAgICBsZXQgdHlwZSA9IGRhdGFzZXQuY29tcG9uZW50O1xuICAgIGxldCBwcm9wID0gZGF0YXNldC5wcm9wO1xuICAgIGxldCBvcHRzID0gZGF0YXNldC5vcHRzID8gSlNPTi5wYXJzZShkYXRhc2V0Lm9wdHMpIDoge307XG5cbiAgICAvLyBSZW5kZXJpbmcgYSBzdWIgY29tcG9uZW50IHNob3VsZCBiZSB3aXRoaW4gdGhlIGNvbnRleHQsXG4gICAgLy8gb2YgdGhlIG5vZGUgdGhhdCB3ZSBwcm9jZXNzZWQgaXQgZnJvbVxuICAgIG9wdHMgPSBPYmplY3QuYXNzaWduKG9wdHMsIHtcbiAgICAgIGNvbnRhaW5lcjogZG9tQ29tcG9uZW50XG4gICAgfSk7XG5cbiAgICBsZXQgY2hpbGREYXRhID0gZGF0YVtwcm9wXTtcblxuICAgIC8vIFRPRE8oYmlsbHkpIFJpZ2h0IG5vdywgaWYgd2UgcHJvdmlkZSBhbiBhcnJheSBhcyB0aGUgZGF0YSBwcm9wLFxuICAgIC8vIHRoZSBiZWhhdmlvciBpcyB0byBjcmVhdGUgbWFueSBjb21wb25lbnRzIGZvciBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5LlxuICAgIC8vIFRIQVQgaW50ZXJmYWNlIFNIT1VMRCBjaGFuZ2UgdG8gdXNlIGEgZGlmZmVyZW50IHByb3BlcnR5IHRoYXQgZGVmaW5lc1xuICAgIC8vIHdoZXRoZXIgdG8gYXJyYXkgZGF0YSBzaG91bGQgYmUgdXNlZCBmb3IgYSBzaW5nbGUgY29tcG9uZW50IG9yXG4gICAgLy8gdG8gY3JlYXRlIG1hbnkgY29tcG9uZW50cyBmb3IgZWFjaCBpdGVtLlxuICAgIC8vIE92ZXJsb2FkaW5nIGFuZCBoYXZpbmcgdGhpcyBzaWRlIGVmZmVjdCBpcyB1bmludHVpdGl2ZSBhbmQgV1JPTkdcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGREYXRhKSkge1xuICAgICAgbGV0IGNoaWxkQ29tcG9uZW50ID0gdGhpcy5hZGRDaGlsZChjaGlsZERhdGEsIHR5cGUsIG9wdHMpO1xuICAgICAgRE9NLmFwcGVuZChkb21Db21wb25lbnQsIGNoaWxkQ29tcG9uZW50LnJlbmRlcigpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UsIHJlbmRlciB0aGUgY29tcG9uZW50IGFzIGV4cGVjdGVkXG4gICAgbGV0IGNoaWxkSFRNTCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGREYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hpbGRDb21wb25lbnQgPSB0aGlzLmFkZENoaWxkKGNoaWxkRGF0YVtpXSwgdHlwZSwgb3B0cyk7XG4gICAgICBjaGlsZEhUTUwucHVzaChjaGlsZENvbXBvbmVudC5yZW5kZXIoKSk7XG4gICAgfVxuXG4gICAgRE9NLmFwcGVuZChkb21Db21wb25lbnQsIGNoaWxkSFRNTC5qb2luKCcnKSk7XG4gIH1cblxuICBfY3JlYXRlQW5hbHl0aWNzSG9vayAoZG9tQ29tcG9uZW50KSB7XG4gICAgZG9tQ29tcG9uZW50LmRhdGFzZXQuaXNBbmFseXRpY3NBdHRhY2hlZCA9IHRydWU7XG4gICAgY29uc3QgZGF0YXNldCA9IGRvbUNvbXBvbmVudC5kYXRhc2V0O1xuICAgIGNvbnN0IHR5cGUgPSBkYXRhc2V0LmV2ZW50dHlwZTtcbiAgICBjb25zdCBsYWJlbCA9IGRhdGFzZXQuZXZlbnRsYWJlbDtcbiAgICBjb25zdCBvcHRpb25zID0gZGF0YXNldC5ldmVudG9wdGlvbnMgPyBKU09OLnBhcnNlKGRhdGFzZXQuZXZlbnRvcHRpb25zKSA6IHt9O1xuXG4gICAgRE9NLm9uKGRvbUNvbXBvbmVudCwgJ2NsaWNrJywgZSA9PiB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBBbmFseXRpY3NFdmVudCh0eXBlLCBsYWJlbCk7XG4gICAgICBldmVudC5hZGRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgY29uc3QgcmVwb3J0UHJvbWlzZSA9IHRoaXMuYW5hbHl0aWNzUmVwb3J0ZXIucmVwb3J0KGV2ZW50KTtcbiAgICAgIC8vIFdhaXQgZm9yIGFuYWx5dGljcyByZXNwb25zZSBiZWZvcmUgbmF2aWdhdGluZywgd2l0aCB0aW1lb3V0XG4gICAgICBpZiAoZG9tQ29tcG9uZW50LnRhZ05hbWUgPT09ICdBJykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRvbUNvbXBvbmVudC5ocmVmOyB9LCB0aGlzLl9hbmFseXRpY3NUaW1lb3V0KTtcbiAgICAgICAgcmVwb3J0UHJvbWlzZS50aGVuKCgpID0+IHsgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkb21Db21wb25lbnQuaHJlZjsgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogb25DcmVhdGUgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBjb25zdHJ1Y3RlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25DcmVhdGUgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvblVwZGF0ZSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgc3RhdGUgb2YgdGhlIGNvbXBvbmVudCBjaGFuZ2VzXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvblVwZGF0ZSAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIGJlZm9yZVJlbmRlciBldmVudCBpcyB0cmlnZ2VyZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIGJlZm9yZVJlbmRlciAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIGFmdGVyUmVuZGVyIGV2ZW50IGlzIHRyaWdnZXJlZCBhZnRlciB0aGUgY29tcG9uZW50IGlzIHJlbmRlcmVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBhZnRlclJlbmRlciAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uTW91bnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBhcHBlbmRlZCB0byB0aGUgRE9NXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvbk1vdW50IChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25Vbk1vdW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBET01cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uVW5Nb3VudCAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIGJlZm9yZU1vdW50IGlzIHRyaWdnZXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkIHRvIHRoZSBET01cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIGJlZm9yZU1vdW50IChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25EZXN0cm95IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvbkRlc3Ryb3kgKGNiKSB7XG5cbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTmF2aWdhdGlvbkNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uL2RvbS9zZWFyY2hwYXJhbXMnO1xuXG4vKipcbiAqIFRoZSBUYWIgaXMgYSBtb2RlbCB0aGF0IGlzIHVzZWQgdG8gcG93ZXIgdGhlIE5hdmlnYXRpb24gdGFicyBpbiB0aGUgdmlldy5cbiAqIEl0J3MgaW5pdGlhbGl6ZWQgdGhyb3VnaCB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50LlxuICovXG5leHBvcnQgY2xhc3MgVGFiIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSB0YWIgdGhhdCBpcyBleHBvc2VkIGZvciB0aGUgbGlua1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbCA9IGNvbmZpZy5sYWJlbDtcbiAgICBpZiAodHlwZW9mIHRoaXMubGFiZWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCdsYWJlbCBpcyBhIHJlcXVpcmVkIGNvbmZpZ3VyYXRpb24gb3B0aW9uIGZvciB0YWIuJywgJ05hdmlnYXRpb25Db21wb25lbnQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcGxldGUgVVJMLCBpbmNsdWRpbmcgdGhlIHBhcmFtc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy51cmwgPSBjb25maWcudXJsO1xuICAgIGlmICh0eXBlb2YgdGhpcy51cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCd1cmwgaXMgYSByZXF1aXJlZCBjb25maWd1cmF0aW9uIG9wdGlvbiBmb3IgdGFiLicsICdOYXZpZ2F0aW9uQ29tcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlcnZlcnNpZGUgdmVydGljYWwgY29uZmlnIGlkIHRoYXQgdGhpcyBpcyByZWZlcmVuY2VkIHRvLlxuICAgICAqIEJ5IHByb3ZpZGluZyB0aGlzLCBlbmFibGVzIGR5bmFtaWMgc29ydGluZyBiYXNlZCBvbiByZXN1bHRzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5jb25maWdJZCA9IGNvbmZpZy5jb25maWdJZCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhc2UgVVJMIHVzZWQgZm9yIGNvbnN0cnVjdGluZyB0aGUgVVJMIHdpdGggcGFyYW1zXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmJhc2VVcmwgPSBjb25maWcudXJsO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHNob3cgdGhpcyB0YWIgZmlyc3QgaW4gdGhlIG9yZGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc0ZpcnN0ID0gY29uZmlnLmlzRmlyc3QgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRvIGFwcGx5IGEgc3BlY2lhbCBjbGFzcyB0byB0aGVcbiAgICAgKiBtYXJrdXAgdG8gZGV0ZXJtaW5lIGlmIGl0J3MgYW4gYWN0aXZlIHRhYlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNBY3RpdmUgPSBjb25maWcuaXNBY3RpdmUgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogZnJvbSB3aWxsIGNvbnN0cnVjdCBhIG1hcCBvZiBjb25maWdJZCB0byB7VGFifSBmcm9tXG4gICAqIGEgY29uZmlndXJhdGlvbiBmaWxlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0YWJzQ29uZmlnIHRoZSBjb25maWd1cmF0aW9uIHRvIHVzZVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHRhYnNDb25maWcpIHtcbiAgICBsZXQgdGFicyA9IHt9O1xuICAgIC8vIFBhcnNlIHRoZSBvcHRpb25zIGFuZCBidWlsZCBvdXQgb3VyIHRhYnMgYW5kXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzQ29uZmlnLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdGFiID0gdGFic0NvbmZpZ1tpXTtcbiAgICAgIC8vIEZvciB0YWJzIHdpdGhvdXQgY29uZmlnIGlkcywgbWFwIHRoZWlyIFVSTCB0byB0aGUgY29uZmlnSURcbiAgICAgIC8vIHRvIGF2b2lkIGR1cGxpY2F0aW9uIG9mIHJlbmRlcnNcbiAgICAgIGlmICh0YWIuY29uZmlnSWQgPT09IHVuZGVmaW5lZCAmJiB0YWJzW3RhYi5jb25maWdJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YWIuY29uZmlnSWQgPSB0YWIudXJsO1xuICAgICAgfVxuXG4gICAgICB0YWJzW3RhYi5jb25maWdJZF0gPSBuZXcgVGFiKHRhYik7XG4gICAgfVxuICAgIHJldHVybiB0YWJzO1xuICB9XG59XG5cbi8qKlxuICogTmF2aWdhdGlvbkNvbXBvbmVudCBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgYnVpbGRpbmcgYSBkeW5hbWljXG4gKiBuYXZpZ2F0aW9uIHRoYXQgaXMgcG93ZXJlZCBieSB1bml2ZXJzYWwgc2VhcmNoIHVwZGF0ZXMuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGF0YSBzdG9yYWdlIGtleVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLk5BVklHQVRJT047XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGFuZGxlYmFycyB0ZW1wbGF0ZSB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ25hdmlnYXRpb24vbmF2aWdhdGlvbic7XG5cbiAgICAvKipcbiAgICAgKiBVbm9yZGVyZWQgbWFwIG9mIGVhY2ggdGFiLCBrZXllZCBieSBWUyBjb25maWdJZFxuICAgICAqIEB0eXBlIHtPYmplY3QuPFN0cmluZywgT2JqZWN0Pn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RhYnMgPSBUYWIuZnJvbShjb25maWcudGFicyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3JkZXIgb2YgdGhlIHRhYnMsIHBhcnNlZCBmcm9tIGNvbmZpZ3VyYXRpb24gb3IgVVJMLlxuICAgICAqIFRoaXMgZ2V0cyB1cGRhdGVkIGJhc2VkIG9uIHRoZSBzZXJ2ZXIgcmVzdWx0c1xuICAgICAqIEB0eXBlIHtBcnJheS48U3RyaW5nPn0gVGhlIGxpc3Qgb2YgVlMgY29uZmlnSWRzXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90YWJPcmRlciA9IHRoaXMuZ2V0RGVmYXVsdFRhYk9yZGVyKGNvbmZpZy50YWJzLCB0aGlzLmdldFVybFBhcmFtcygpKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdOYXZpZ2F0aW9uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBTaW5jZSB0aGUgc2VydmVyIGRhdGEgb25seSBwcm92aWRlcyBhIGxpc3Qgb2ZcbiAgICogVlMgY29uZmlnSWRzLCB3ZSBuZWVkIHRvIGNvbXB1dGUgYW5kIHRyYW5zZm9ybVxuICAgKiB0aGUgZGF0YSBpbnRvIHRoZSBwcm9wZXIgZm9ybWF0IGZvciByZW5kZXJpbmcuXG4gICAqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBpZiAoZGF0YS50YWJPcmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl90YWJPcmRlciA9IHRoaXMubWVyZ2VUYWJPcmRlcihkYXRhLnRhYk9yZGVyLCB0aGlzLl90YWJPcmRlcik7XG4gICAgfVxuXG4gICAgLy8gU2luY2UgdGhlIHRhYiBvcmRlcmluZyBjYW4gY2hhbmdlIGJhc2VkIG9uIHRoZSBzZXJ2ZXIgZGF0YVxuICAgIC8vIHdlIG5lZWQgdG8gdXBkYXRlIGVhY2ggdGFicyBVUkwgdG8gaW5jbHVkZSB0aGUgb3JkZXIgYXMgcGFydCBvZiB0aGVpciBwYXJhbXMuXG4gICAgLy8gVGhpcyBoZWxwcyB3aXRoIHBlcnNpc3Rpbmcgc3RhdGUgYWNyb3NzIHZlcnRpY2Fscy5cbiAgICBsZXQgdGFicyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdGFiT3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB0YWIgPSB0aGlzLl90YWJzW3RoaXMuX3RhYk9yZGVyW2ldXTtcbiAgICAgIGlmICh0YWIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YWIudXJsID0gdGhpcy5nZW5lcmF0ZVRhYlVybCh0YWIuYmFzZVVybCwgdGhpcy5nZXRVcmxQYXJhbXMoKSk7XG4gICAgICAgIHRhYnMucHVzaCh0YWIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZSh7XG4gICAgICB0YWJzOiB0YWJzXG4gICAgfSk7XG4gIH1cblxuICBnZXRVcmxQYXJhbXMgKCkge1xuICAgIHJldHVybiBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXREZWZhdWx0VGFiT3JkZXIgd2lsbCBjb21wdXRlIHRoZSBpbml0aWFsIHRhYiBvcmRlcmluZyBiYXNlZFxuICAgKiBvbiBhIGNvbWJpbmF0aW9uIG9mIHRoZSBjb25maWd1cmF0aW9uIHByb3ZpZGVkIGRpcmVjdGx5IHRvIHRoZSBjb21wb25lbnRcbiAgICogYW5kIHRoZSB1cmwgcGFyYW1zLlxuICAgKiBAcGFyYW0ge09iamVjdFtdfSB0YWJzQ29uZmlnXG4gICAqIEBwYXJhbSB7U2VhcmNoUGFyYW1zfVxuICAgKi9cbiAgZ2V0RGVmYXVsdFRhYk9yZGVyICh0YWJzQ29uZmlnLCB1cmxQYXJhbXMpIHtcbiAgICBsZXQgdGFiT3JkZXIgPSBbXTtcblxuICAgIC8vIFVzZSB0aGUgb3JkZXJpbmcgZnJvbSB0aGUgVVJMIGFzIHRoZSBwcmltYXJ5IGNvbmZpZ3VyYXRpb25cbiAgICAvLyBBbmQgdGhlbiBtZXJnZSBpdCB3aXRoIHRoZSBsb2NhbCBjb25maWd1cmF0aW9uLCBpZiBwcm92aWRlZC5cbiAgICBpZiAodXJsUGFyYW1zICYmIHVybFBhcmFtcy5oYXMoJ3RhYk9yZGVyJykpIHtcbiAgICAgIHRhYk9yZGVyID0gdXJsUGFyYW1zLmdldCgndGFiT3JkZXInKS5zcGxpdCgnLCcpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFic0NvbmZpZy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGFiID0gdGFic0NvbmZpZ1tpXTtcbiAgICAgIC8vIFNvbWUgdGFicyBkb24ndCBoYXZlIGNvbmZpZ0lkLCBzbyB3ZSBtYXAgaXQgZnJvbSBVUkxcbiAgICAgIGlmICh0YWIuY29uZmlnSWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YWIuY29uZmlnSWQgPSB0YWIudXJsO1xuICAgICAgfVxuXG4gICAgICAvLyBBdm9pZCBkdXBsaWNhdGVzIGlmIGNvbmZpZyB3YXMgcHJvdmlkZWQgZnJvbSBVUkxcbiAgICAgIGlmICh0YWJPcmRlci5pbmNsdWRlcyh0YWIuY29uZmlnSWQpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBpc0ZpcnN0IHNob3VsZCBhbHdheXMgYmUgdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhlIGxpc3RcbiAgICAgIGlmICh0YWIuaXNGaXJzdCkge1xuICAgICAgICB0YWJPcmRlci51bnNoaWZ0KHRhYi5jb25maWdJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWJPcmRlci5wdXNoKHRhYi5jb25maWdJZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYk9yZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIG1lcmdlVGFiT3JkZXIgbWVyZ2VzIHR3byBhcnJheXMgaW50byBvbmVcbiAgICogYnkgYXBwZW5kaW5nIGFkZGl0aW9uYWwgdGFicyB0byB0aGUgZW5kIG9mIHRoZSBvcmlnaW5hbCBhcnJheVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB0YWJPcmRlciBUYWIgb3JkZXIgcHJvdmlkZWQgYnkgdGhlIHNlcnZlclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBvdGhlclRhYk9yZGVyIFRhYiBvcmRlciBwcm92aWRlZCBieSBjb25maWd1cmF0aW9uXG4gICAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICAgKi9cbiAgbWVyZ2VUYWJPcmRlciAodGFiT3JkZXIsIG90aGVyVGFiT3JkZXIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG90aGVyVGFiT3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhYkNvbmZpZyA9IG90aGVyVGFiT3JkZXJbaV07XG4gICAgICBpZiAodGFiT3JkZXIuaW5jbHVkZXModGFiQ29uZmlnKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gaXNGaXJzdCBzaG91bGQgYmUgYW4gb3ZlcnJpZGUgdG8gZHluYW1pYyB0YWIgb3JkZXJpbmcuXG4gICAgICBpZiAodGhpcy5fdGFic1t0YWJDb25maWddICYmIHRoaXMuX3RhYnNbdGFiQ29uZmlnXS5pc0ZpcnN0KSB7XG4gICAgICAgIHRhYk9yZGVyLnVuc2hpZnQodGFiQ29uZmlnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhYk9yZGVyLnB1c2godGFiQ29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFiT3JkZXI7XG4gIH1cblxuICBnZW5lcmF0ZVRhYlVybCAoYmFzZVVybCwgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpKSB7XG4gICAgLy8gV2Ugd2FudCB0byBwZXJzaXN0IHRoZSBwYXJhbXMgZnJvbSB0aGUgZXhpc3RpbmcgVVJMIHRvIHRoZSBuZXdcbiAgICAvLyBVUkxTIHdlIGNyZWF0ZS5cbiAgICBwYXJhbXMuc2V0KCd0YWJPcmRlcicsIHRoaXMuX3RhYk9yZGVyKTtcbiAgICByZXR1cm4gYmFzZVVybCArICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXIgKi9cblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIGFwaSBmaWx0ZXIgYW5kIHByb3ZpZGVzIHN0YXRpYyBtZXRob2RzIGZvciBlYXNpbHkgY29uc3RydWN0aW5nIEZpbHRlcnMuXG4gKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIueWV4dC5jb20vZG9jcy9hcGktcmVmZXJlbmNlLyNvcGVyYXRpb24vbGlzdEVudGl0aWVzIGZvciBzdHJ1Y3R1cmUgZGV0YWlsc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXIge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGEgSlNPTiBmb3JtYXQgZmlsdGVyIHJldHVybmVkIGZyb20gdGhlIHNlcnZlciBpbnRvIGEgRmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gcmVzcG9uc2VGaWx0ZXIgQSBmaWx0ZXIgaW4gSlNPTiBmb3JtYXQgcmV0dXJuZWQgZnJvbSB0aGUgYmFja2VuZFxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGZyb21SZXNwb25zZSAocmVzcG9uc2VGaWx0ZXIpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcihKU09OLnBhcnNlKHJlc3BvbnNlRmlsdGVyKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgbmV3IEZpbHRlciByZXByZXNlbnRpbmcgdGhlIE9SIG9mIGFsbCBwcm92aWRlZCBmaWx0ZXJzXG4gICAqIEBwYXJhbSAgey4uLkZpbHRlcn0gZmlsdGVycyBUaGUgZmlsdGVycyB0byBPUiB0b2dldGhlclxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIG9yICguLi5maWx0ZXJzKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgJyRvcic6IGZpbHRlcnNcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBuZXcgRmlsdGVyIHJlcHJlc2VudGluZyB0aGUgQU5EIG9mIGFsbCBwcm92aWRlZCBmaWx0ZXJzXG4gICAqIEBwYXJhbSAgey4uLkZpbHRlcn0gZmlsdGVycyBUaGUgZmlsdGVycyB0byBBTkQgdG9nZXRoZXJcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBhbmQgKC4uLmZpbHRlcnMpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcih7XG4gICAgICAnJGFuZCc6IGZpbHRlcnNcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPUiBmaWx0ZXJzIHdpdGggdGhlIHNhbWUga2V5cywgdGhlbiBBTkQgdGhlIHJlc3VsdGluZyBncm91cHNcbiAgICogQHBhcmFtICB7Li4uRmlsdGVyfSBmaWx0ZXJzIFRoZSBmaWx0ZXJzIHRvIGdyb3VwXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ3JvdXAgKC4uLmZpbHRlcnMpIHtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiBmaWx0ZXJzKSB7XG4gICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhmaWx0ZXIpWzBdO1xuICAgICAgaWYgKCFncm91cHNba2V5XSkge1xuICAgICAgICBncm91cHNba2V5XSA9IFtdO1xuICAgICAgfVxuICAgICAgZ3JvdXBzW2tleV0ucHVzaChmaWx0ZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGdyb3VwRmlsdGVycyA9IFtdO1xuICAgIGZvciAoY29uc3QgZmllbGQgb2YgT2JqZWN0LmtleXMoZ3JvdXBzKSkge1xuICAgICAgZ3JvdXBGaWx0ZXJzLnB1c2goZ3JvdXBzW2ZpZWxkXS5sZW5ndGggPiAxID8gRmlsdGVyLm9yKC4uLmdyb3Vwc1tmaWVsZF0pIDogZ3JvdXBzW2ZpZWxkXVswXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdyb3VwRmlsdGVycy5sZW5ndGggPiAxID8gRmlsdGVyLmFuZCguLi5ncm91cEZpbHRlcnMpIDogZ3JvdXBGaWx0ZXJzWzBdO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImVxdWFsIHRvXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgZXF1YWwgdG9cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBlcXVhbCAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckZXEnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwibGVzcyB0aGFuXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgbGVzcyB0aGFuXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgbGVzc1RoYW4gKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGx0JywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImxlc3MgdGhhbiBvciBlcXVhbCB0b1wiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0b1xuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGxlc3NUaGFuRXF1YWwgKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGxlJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImdyZWF0ZXIgdGhhblwiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhblxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGdyZWF0ZXJUaGFuIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRndCcsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG9cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG9cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBncmVhdGVyVGhhbkVxdWFsIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRnZScsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgaW5jbHVzaXZlIHJhbmdlIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IG1pbiBUaGUgbWluaW11bSB2YWx1ZSBvZiB0aGUgcmFuZ2VcbiAgICogQHBhcmFtIHsqfSBtYXggVGhlIG1heGltdW0gdmFsdWUgb2YgdGhlIHJhbmdlclxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIHJhbmdlIChmaWVsZCwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gRmlsdGVyLmFuZChGaWx0ZXIuZ3JlYXRlclRoYW5FcXVhbChmaWVsZCwgbWluKSwgRmlsdGVyLmxlc3NUaGFuRXF1YWwoZmllbGQsIG1heCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBmaWx0ZXIgd2l0aCB0aGUgZ2l2ZW4gbWF0Y2hlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWF0Y2hlciBUaGUgbWF0Y2hlciBmb3IgdGhlIGZpbGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGZvciB0aGUgZmlsdGVyXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgX2Zyb21NYXRjaGVyIChmaWVsZCwgbWF0Y2hlciwgdmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcih7XG4gICAgICBbZmllbGRdOiB7XG4gICAgICAgIFttYXRjaGVyXTogdmFsdWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VhcmNoQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5cbi8qKlxuICogU2VhcmNoQ29tcG9uZW50IGV4cG9zZXMgYW4gaW50ZXJmYWNlIGluIG9yZGVyIHRvIGNyZWF0ZVxuICogYSBVSSBTZWFyY2ggZXhwZXJpZW5jZSBmb3IgdmVydGljYWwgYW5kIHVuaXZlcnNhbCBzZWFyY2guXG4gKlxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgbmFtZSB0byB1c2UgZm9yIHJlbmRlcmluZyB3aXRoIGhhbmRsZWJhcnNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdzZWFyY2gvc2VhcmNoJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBpbnB1dCBrZXkgZm9yIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggY29uZmlndXJhdGlvblxuICAgICAqIElmIG5vdCBwcm92aWRlZCwgYXV0by1jb21wbGV0ZSBhbmQgc2VhcmNoIHdpbGwgYmUgYmFzZWQgb24gdW5pdmVyc2FsXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9iYXJLZXkgPSBjb25maWcuYmFyS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgdmVydGljYWwga2V5IGZvciB2ZXJ0aWNhbCBzZWFyY2ggY29uZmlndXJhdGlvblxuICAgICAqIElmIG5vdCBwcm92aWRlZCwgYXV0by1jb21wbGV0ZSBhbmQgc2VhcmNoIHdpbGwgYmUgYmFzZWQgb24gdW5pdmVyc2FsXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IGNvbmZpZy52ZXJ0aWNhbEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogUXVlcnkgc3VibWlzc2lvbiBpcyBiYXNlZCBvbiBhIGZvcm0gYXMgY29udGV4dC5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gbmF0aXZlIGZvcm0gbm9kZSB3aXRoaW4gY29udGFpbmVyXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5fZm9ybUVsID0gY29uZmlnLmZvcm1TZWxlY3RvciB8fCAnZm9ybSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5wdXQgZWxlbWVudCB1c2VkIGZvciBzZWFyY2hpbmcgYW5kIHdpcmVzIHVwIHRoZSBrZXlib2FyZCBpbnRlcmFjdGlvblxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5faW5wdXRFbCA9IGNvbmZpZy5pbnB1dEVsIHx8ICcuanMteWV4dC1xdWVyeSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgdXNlZCwgcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlIGFzIGEgZGF0YSBwb2ludFxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnRpdGxlID0gY29uZmlnLnRpdGxlIHx8ICdBbnN3ZXJzIFVuaXZlcnNhbCBTZWFyY2gnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRleHQgaXMgdXNlZCBmb3IgbGFiZWxpbmcgdGhlIGlucHV0IGJveCwgYWxzbyBwcm92aWRlZCB0byB0ZW1wbGF0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmxhYmVsVGV4dCA9IGNvbmZpZy5sYWJlbFRleHQgfHwgJ1doYXQgYXJlIHlvdSBpbnRlcmVzdGVkIGluPyc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3VibWl0IHRleHQgaXMgdXNlZCBmb3IgbGFiZWxpbmcgdGhlIHN1Ym1pdCBidXR0b24sIGFsc28gcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zdWJtaXRUZXh0ID0gY29uZmlnLnN1Ym1pdFRleHQgfHwgJ1N1Ym1pdCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3VibWl0IGljb24gaXMgYW4gaWNvbiBmb3IgdGhlIHN1Ym1pdCBidXR0b24sIGlmIHByb3ZpZGVkIGl0IHdpbGwgYmUgZGlzcGxheWVkIGFuZCB0aGVcbiAgICAgKiBzdWJtaXQgdGV4dCB3aWxsIGJlIHVzZWQgZm9yIHNjcmVlbiByZWFkZXJzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICB0aGlzLnN1Ym1pdEljb24gPSBjb25maWcuc3VibWl0SWNvbiB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHRleHQgdG8gc2hvdyBhcyB0aGUgZmlyc3QgaXRlbSBmb3IgYXV0byBjb21wbGV0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnByb21wdEhlYWRlciA9IGNvbmZpZy5wcm9tcHRIZWFkZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEF1dG8gZm9jdXNlcyB0aGUgaW5wdXQgYm94IGlmIHNldCB0byB0cnVlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIGRlZmF1bHRzIHRvIGZhbHNlLlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuYXV0b0ZvY3VzID0gY29uZmlnLmF1dG9Gb2N1cyA9PT0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIHN1Ym1pdFVSTCB3aWxsIGZvcmNlIHRoZSBzZWFyY2ggcXVlcnkgc3VibWlzc2lvbiB0byBnZXRcbiAgICAgKiByZWRpcmVjdGVkIHRvIHRoZSBVUkwgcHJvdmlkZWQuXG4gICAgICogT3B0aW9uYWwsIGRlZmF1bHRzIHRvIG51bGwuXG4gICAgICpcbiAgICAgKiBJZiBubyByZWRpcmVjdFVybCBwcm92aWRlZCwgd2Uga2VlcCB0aGUgcGFnZSBhcyBhIHNpbmdsZSBwYWdlIGFwcC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucmVkaXJlY3RVcmwgPSBjb25maWcucmVkaXJlY3RVcmwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSBzdHJpbmcgdG8gdXNlIGZvciB0aGUgaW5wdXQgYm94LCBwcm92aWRlZCB0byB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlcnkgPSBjb25maWcucXVlcnkgfHwgdGhpcy5nZXRVcmxQYXJhbXMoKS5nZXQoJ3F1ZXJ5JykgfHwgJyc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWluaW11bSB0aW1lIGFsbG93ZWQgaW4gbWlsbGlzZWNvbmRzIGJldHdlZW4gc2VhcmNoZXMgdG8gcHJldmVudFxuICAgICAqIG1hbnkgZHVwbGljYXRlIHNlYXJjaGVzIGJhY2stdG8tYmFja1xuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zZWFyY2hDb29sZG93biA9IGNvbmZpZy5zZWFyY2hDb29sZG93biB8fCAzMDA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnU2VhcmNoQmFyJztcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICBpZiAodGhpcy5xdWVyeSAmJiB0aGlzLnF1ZXJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY29yZS5zZXRRdWVyeSh0aGlzLnF1ZXJ5KTtcbiAgICAgIHRoaXMuc2VhcmNoKHRoaXMucXVlcnkpO1xuICAgIH1cblxuICAgIHRoaXMuYmluZEJyb3dzZXJIaXN0b3J5KCk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICAvLyBXaXJlIHVwIG91ciBzZWFyY2ggaGFuZGxpbmcgYW5kIGF1dG8gY29tcGxldGVcbiAgICB0aGlzLmluaXRTZWFyY2godGhpcy5fZm9ybUVsKTtcbiAgICB0aGlzLmluaXRBdXRvQ29tcGxldGUodGhpcy5faW5wdXRFbCk7XG5cbiAgICBpZiAodGhpcy5hdXRvRm9jdXMgPT09IHRydWUgJiYgdGhpcy5xdWVyeS5sZW5ndGggPT09IDApIHtcbiAgICAgIERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2lucHV0RWwpLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgaGVscGVyIG1ldGhvZCB0byB1c2UgZm9yIHdpcmluZyB1cCBzZWFyY2hpbmcgb24gZm9ybSBzdWJtaXNzaW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtU2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIHN1Ym1pdCBoYW5kbGluZyB0b1xuICAgKi9cbiAgaW5pdFNlYXJjaCAoZm9ybVNlbGVjdG9yKSB7XG4gICAgdGhpcy5fZm9ybUVsID0gZm9ybVNlbGVjdG9yO1xuXG4gICAgbGV0IGZvcm0gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCBmb3JtU2VsZWN0b3IpO1xuICAgIGlmICghZm9ybSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgaW5pdGlhbGl6ZSBTZWFyY2hCYXI7IENhbiBub3QgZmluZCB7SFRNTEVsZW1lbnR9IGAnLCB0aGlzLl9mb3JtRWwsICdgLicpO1xuICAgIH1cblxuICAgIERPTS5vbihmb3JtLCAnc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IHF1ZXJ5ID0gZm9ybS5xdWVyeVNlbGVjdG9yKHRoaXMuX2lucHV0RWwpLnZhbHVlO1xuICAgICAgbGV0IHBhcmFtcyA9IHRoaXMuZ2V0VXJsUGFyYW1zKCk7XG4gICAgICBwYXJhbXMuc2V0KCdxdWVyeScsIHF1ZXJ5KTtcblxuICAgICAgLy8gSWYgd2UgaGF2ZSBhIHJlZGlyZWN0VXJsLCB3ZSB3YW50IHRoZSBmb3JtIHRvIGJlXG4gICAgICAvLyBzZXJpYWxpemVkIGFuZCBzdWJtaXR0ZWQuXG4gICAgICBpZiAodHlwZW9mIHRoaXMucmVkaXJlY3RVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5yZWRpcmVjdFVybCArICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7XG4gICAgICAgIHF1ZXJ5OiBxdWVyeVxuICAgICAgfSwgcXVlcnksICc/JyArIHBhcmFtcy50b1N0cmluZygpKTtcblxuICAgICAgdGhpcy5jb3JlLnNldFF1ZXJ5KHF1ZXJ5KTtcbiAgICAgIHRoaXMuc2VhcmNoKHF1ZXJ5KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gd2lyZSB1cCBvdXIgYXV0byBjb21wbGV0ZSBvbiBhbiBpbnB1dCBzZWxlY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRTZWxlY3RvciBDU1Mgc2VsZWN0b3IgdG8gYmluZCBvdXIgYXV0byBjb21wbGV0ZSBjb21wb25lbnQgdG9cbiAgICovXG4gIGluaXRBdXRvQ29tcGxldGUgKGlucHV0U2VsZWN0b3IpIHtcbiAgICB0aGlzLl9pbnB1dEVsID0gaW5wdXRTZWxlY3RvcjtcblxuICAgIHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoJ0F1dG9Db21wbGV0ZScsIHtcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgIG5hbWU6IGAke3RoaXMubmFtZX0uYXV0b2NvbXBsZXRlYCxcbiAgICAgIGNvbnRhaW5lcjogJy55ZXh0LXNlYXJjaC1hdXRvY29tcGxldGUnLFxuICAgICAgYmFyS2V5OiB0aGlzLl9iYXJLZXksXG4gICAgICB2ZXJ0aWNhbEtleTogdGhpcy5fdmVydGljYWxLZXksXG4gICAgICBwcm9tcHRIZWFkZXI6IHRoaXMucHJvbXB0SGVhZGVyLFxuICAgICAgb3JpZ2luYWxRdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgIGlucHV0RWw6IGlucHV0U2VsZWN0b3IsXG4gICAgICBvblN1Ym1pdDogKCkgPT4ge1xuICAgICAgICBET00udHJpZ2dlcignZm9ybScsICdzdWJtaXQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaCAocXVlcnkpIHtcbiAgICBpZiAodGhpcy5fdGhyb3R0bGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdGhyb3R0bGVkID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5fdGhyb3R0bGVkID0gZmFsc2U7IH0sIHRoaXMuX3NlYXJjaENvb2xkb3duKTtcblxuICAgIGlmICh0aGlzLl92ZXJ0aWNhbEtleSkge1xuICAgICAgY29uc3QgYWxsRmlsdGVycyA9IHRoaXMuY29yZS5zdG9yYWdlLmdldEFsbChTdG9yYWdlS2V5cy5GSUxURVIpO1xuICAgICAgY29uc3QgdG90YWxGaWx0ZXIgPSBhbGxGaWx0ZXJzLmxlbmd0aCA+IDFcbiAgICAgICAgPyBGaWx0ZXIuYW5kKC4uLmFsbEZpbHRlcnMpXG4gICAgICAgIDogYWxsRmlsdGVyc1swXTtcbiAgICAgIHJldHVybiB0aGlzLmNvcmUudmVydGljYWxTZWFyY2gocXVlcnksIHRoaXMuX3ZlcnRpY2FsS2V5LCBKU09OLnN0cmluZ2lmeSh0b3RhbEZpbHRlcikpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOT1RFKGJpbGx5KSBUZW1wb3JhcnkgaGFjayBmb3IgREVNT1xuICAgICAgLy8gUmVtb3ZlIG1lIGFmdGVyIHRoZSBkZW1vXG4gICAgICBsZXQgbmF2ID0gdGhpcy5jb21wb25lbnRNYW5hZ2VyXG4gICAgICAgIC5nZXRBY3RpdmVDb21wb25lbnQoJ05hdmlnYXRpb24nKTtcblxuICAgICAgaWYgKG5hdikge1xuICAgICAgICBsZXQgdGFicyA9IG5hdi5nZXRTdGF0ZSgndGFicycpO1xuICAgICAgICBsZXQgdXJscyA9IHt9O1xuXG4gICAgICAgIGlmICh0YWJzICYmIEFycmF5LmlzQXJyYXkodGFicykpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB0aGlzLmdldFVybFBhcmFtcyh0YWJzW2ldLnVybC5zcGxpdCgnPycpWzFdKTtcbiAgICAgICAgICAgIHBhcmFtcy5zZXQoJ3F1ZXJ5JywgcXVlcnkpO1xuXG4gICAgICAgICAgICBsZXQgdXJsID0gdGFic1tpXS5iYXNlVXJsO1xuICAgICAgICAgICAgaWYgKHBhcmFtcy50b1N0cmluZygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgdXJsICs9ICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXJsc1t0YWJzW2ldLmNvbmZpZ0lkXSA9IHVybDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29yZS5zZWFyY2gocXVlcnksIHVybHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb3JlLnNlYXJjaChxdWVyeSk7XG4gICAgfVxuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIGxhYmVsVGV4dDogdGhpcy5sYWJlbFRleHQsXG4gICAgICBzdWJtaXRJY29uOiB0aGlzLnN1Ym1pdEljb24sXG4gICAgICBzdWJtaXRUZXh0OiB0aGlzLnN1Ym1pdFRleHQsXG4gICAgICBxdWVyeTogdGhpcy5xdWVyeVxuICAgIH0sIGRhdGEpKTtcbiAgfVxuXG4gIGdldFVybFBhcmFtcyAodXJsKSB7XG4gICAgdXJsID0gdXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpO1xuICAgIHJldHVybiBuZXcgU2VhcmNoUGFyYW1zKHVybCk7XG4gIH1cblxuICBiaW5kQnJvd3Nlckhpc3RvcnkgKCkge1xuICAgIERPTS5vbih3aW5kb3csICdwb3BzdGF0ZScsICgpID0+IHtcbiAgICAgIHRoaXMucXVlcnkgPSB0aGlzLmdldFVybFBhcmFtcygpLmdldCgncXVlcnknKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBxdWVyeTogdGhpcy5xdWVyeVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY29yZS5zZXRRdWVyeSh0aGlzLnF1ZXJ5KTtcblxuICAgICAgdGhpcy5zZWFyY2godGhpcy5xdWVyeSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZpbHRlclNlYXJjaENvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgU2VhcmNoUGFyYW1zIGZyb20gJy4uLy4uL2RvbS9zZWFyY2hwYXJhbXMnO1xuXG4vKipcbiAqIEZpbHRlclNlYXJjaENvbXBvbmVudCBpcyB1c2VkIGZvciBhdXRvY29tcGxldGUgdXNpbmcgdGhlIEZpbHRlclNlYXJjaCBiYWNrZW5kLlxuICogSXQnbGwgYWxsb3cgeW91IHRvIHBpY2sgcHJlLXNldCBmaWx0ZXJzIHRoYXQgYXJlIHNldHVwIG9uIHRoZSBiYWNrZW5kIHdpdGhpblxuICogYSB2ZXJ0aWNhbCBzZWFyY2ggY29udGV4dC5cbiAqXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIG5hbWUgdG8gdXNlIGZvciByZW5kZXJpbmcgd2l0aCBoYW5kbGViYXJzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAnc2VhcmNoL2ZpbHRlcnNlYXJjaCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5wdXQga2V5IGZvciB0aGUgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2JhcktleSA9IG9wdHMuYmFyS2V5IHx8IG9wdHMuaW5wdXRLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IG9wdHMudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFF1ZXJ5IHN1Ym1pc3Npb24gaXMgYmFzZWQgb24gYSBmb3JtIGFzIGNvbnRleHQuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIG5hdGl2ZSBmb3JtIG5vZGUgd2l0aGluIGNvbnRhaW5lclxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2Zvcm1FbCA9IG9wdHMuZm9ybVNlbGVjdG9yIHx8ICdmb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBlbGVtZW50IHVzZWQgZm9yIHNlYXJjaGluZyBhbmQgd2lyZXMgdXAgdGhlIGtleWJvYXJkIGludGVyYWN0aW9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gb3B0cy5pbnB1dEVsIHx8ICcuanMteWV4dC1xdWVyeSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgdXNlZCwgcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlIGFzIGEgZGF0YSBwb2ludFxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnRpdGxlID0gb3B0cy50aXRsZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWFyY2ggdGV4dCB1c2VkIGZvciBsYWJlbGluZyB0aGUgaW5wdXQgYm94LCBhbHNvIHByb3ZpZGVkIHRvIHRlbXBsYXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc2VhcmNoVGV4dCA9IG9wdHMuc2VhcmNoVGV4dCB8fCAnV2hhdCBhcmUgeW91IGludGVyZXN0ZWQgaW4/JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSB0ZXh0IHRvIHNob3cgYXMgdGhlIGZpcnN0IGl0ZW0gZm9yIGF1dG8gY29tcGxldGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5wcm9tcHRIZWFkZXIgPSBvcHRzLnByb21wdEhlYWRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQXV0byBmb2N1c2VzIHRoZSBpbnB1dCBib3ggaWYgc2V0IHRvIHRydWUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvRm9jdXMgPSBvcHRzLmF1dG9Gb2N1cyA9PT0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIHN1Ym1pdFVSTCB3aWxsIGZvcmNlIHRoZSBzZWFyY2ggcXVlcnkgc3VibWlzc2lvbiB0byBnZXRcbiAgICAgKiByZWRpcmVjdGVkIHRvIHRoZSBVUkwgcHJvdmlkZWQuXG4gICAgICogT3B0aW9uYWwsIGRlZmF1bHRzIHRvIG51bGwuXG4gICAgICpcbiAgICAgKiBJZiBubyByZWRpcmVjdFVybCBwcm92aWRlZCwgd2Uga2VlcCB0aGUgcGFnZSBhcyBhIHNpbmdsZSBwYWdlIGFwcC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucmVkaXJlY3RVcmwgPSBvcHRzLnJlZGlyZWN0VXJsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgc3RyaW5nIHRvIHVzZSBmb3IgdGhlIGlucHV0IGJveCwgcHJvdmlkZWQgdG8gdGVtcGxhdGUgZm9yIHJlbmRlcmluZy5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXJ5ID0gb3B0cy5xdWVyeSB8fCB0aGlzLmdldFVybFBhcmFtcygpLmdldChgJHt0aGlzLm5hbWV9LnF1ZXJ5YCkgfHwgJyc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmlsdGVyIHN0cmluZyB0byB1c2UgZm9yIHRoZSBwcm92aWRlZCBxdWVyeVxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZmlsdGVyID0gb3B0cy5maWx0ZXIgfHwgdGhpcy5nZXRVcmxQYXJhbXMoKS5nZXQoYCR7dGhpcy5uYW1lfS5maWx0ZXJgKSB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdGaWx0ZXJTZWFyY2gnO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIGlmICh0aGlzLnF1ZXJ5ICYmIHRoaXMucXVlcnkubGVuZ3RoID4gMCAmJiB0aGlzLmZpbHRlciAmJiB0aGlzLmZpbHRlci5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmdldFVybFBhcmFtcygpO1xuICAgICAgcGFyYW1zLnNldChgJHt0aGlzLm5hbWV9LnF1ZXJ5YCwgdGhpcy5xdWVyeSk7XG4gICAgICBwYXJhbXMuc2V0KGAke3RoaXMubmFtZX0uZmlsdGVyYCwgdGhpcy5maWx0ZXIpO1xuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCkpO1xuICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIEZpbHRlci5mcm9tUmVzcG9uc2UodGhpcy5maWx0ZXIpKTtcbiAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgfVxuXG4gICAgdGhpcy5iaW5kQnJvd3Nlckhpc3RvcnkoKTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIC8vIFdpcmUgdXAgb3VyIHNlYXJjaCBoYW5kbGluZyBhbmQgYXV0byBjb21wbGV0ZVxuICAgIHRoaXMuaW5pdEF1dG9Db21wbGV0ZSh0aGlzLl9pbnB1dEVsKTtcblxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cyA9PT0gdHJ1ZSAmJiB0aGlzLnF1ZXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5faW5wdXRFbCkuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHdpcmUgdXAgb3VyIGF1dG8gY29tcGxldGUgb24gYW4gaW5wdXQgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIGF1dG8gY29tcGxldGUgY29tcG9uZW50IHRvXG4gICAqL1xuICBpbml0QXV0b0NvbXBsZXRlIChpbnB1dFNlbGVjdG9yKSB7XG4gICAgdGhpcy5faW5wdXRFbCA9IGlucHV0U2VsZWN0b3I7XG5cbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKCdBdXRvQ29tcGxldGUnLCB7XG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmF1dG9jb21wbGV0ZWAsXG4gICAgICBpc0ZpbHRlclNlYXJjaDogdHJ1ZSxcbiAgICAgIGNvbnRhaW5lcjogJy55ZXh0LXNlYXJjaC1hdXRvY29tcGxldGUnLFxuICAgICAgcHJvbXB0SGVhZGVyOiB0aGlzLnByb21wdEhlYWRlcixcbiAgICAgIG9yaWdpbmFsUXVlcnk6IHRoaXMucXVlcnksXG4gICAgICBvcmlnaW5hbEZpbHRlcjogdGhpcy5maWx0ZXIsXG4gICAgICBpbnB1dEVsOiBpbnB1dFNlbGVjdG9yLFxuICAgICAgdmVydGljYWxLZXk6IHRoaXMuX3ZlcnRpY2FsS2V5LFxuICAgICAgYmFyS2V5OiB0aGlzLl9iYXJLZXksXG4gICAgICBvblN1Ym1pdDogKHF1ZXJ5LCBmaWx0ZXIpID0+IHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy5nZXRVcmxQYXJhbXMoKTtcbiAgICAgICAgcGFyYW1zLnNldChgJHt0aGlzLm5hbWV9LnF1ZXJ5YCwgcXVlcnkpO1xuICAgICAgICBwYXJhbXMuc2V0KGAke3RoaXMubmFtZX0uZmlsdGVyYCwgZmlsdGVyKTtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgcmVkaXJlY3RVcmwsIHdlIHdhbnQgdGhlIHBhcmFtcyB0byBiZVxuICAgICAgICAvLyBzZXJpYWxpemVkIGFuZCBzdWJtaXR0ZWQuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5yZWRpcmVjdFVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMucmVkaXJlY3RVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCAnPycgKyBwYXJhbXMudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgLy8gc2F2ZSB0aGUgZmlsdGVyIHRvIHN0b3JhZ2UgZm9yIHRoZSBuZXh0IHNlYXJjaFxuICAgICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgRmlsdGVyLmZyb21SZXNwb25zZShmaWx0ZXIpKTtcbiAgICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggd2l0aCBhbGwgc2F2ZWQgZmlsdGVycyBhbmQgcXVlcnksXG4gICAqIG9wdGlvbmFsbHkgcmVkaXJlY3RpbmcgYmFzZWQgb24gY29uZmlnXG4gICAqL1xuICBzZWFyY2ggKCkge1xuICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmNvcmUuc3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICBsZXQgdG90YWxGaWx0ZXIgPSBmaWx0ZXJzWzBdO1xuICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRvdGFsRmlsdGVyID0gRmlsdGVyLmFuZCguLi5maWx0ZXJzKTtcbiAgICB9XG4gICAgY29uc3Qgc2VhcmNoUXVlcnkgPSB0aGlzLmNvcmUuc3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSkgfHwgJyc7XG5cbiAgICB0aGlzLmNvcmUudmVydGljYWxTZWFyY2goc2VhcmNoUXVlcnksIHRoaXMuX3ZlcnRpY2FsS2V5LCBKU09OLnN0cmluZ2lmeSh0b3RhbEZpbHRlcikpO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIHNlYXJjaFRleHQ6IHRoaXMuc2VhcmNoVGV4dCxcbiAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlclxuICAgIH0sIGRhdGEpKTtcbiAgfVxuXG4gIGdldFVybFBhcmFtcyAodXJsKSB7XG4gICAgdXJsID0gdXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpO1xuICAgIHJldHVybiBuZXcgU2VhcmNoUGFyYW1zKHVybCk7XG4gIH1cblxuICBiaW5kQnJvd3Nlckhpc3RvcnkgKCkge1xuICAgIERPTS5vbih3aW5kb3csICdwb3BzdGF0ZScsICgpID0+IHtcbiAgICAgIHRoaXMucXVlcnkgPSB0aGlzLmdldFVybFBhcmFtcygpLmdldChgJHt0aGlzLm5hbWV9LnF1ZXJ5YCk7XG4gICAgICB0aGlzLmZpbHRlciA9IHRoaXMuZ2V0VXJsUGFyYW1zKCkuZ2V0KGAke3RoaXMubmFtZX0uZmlsdGVyYCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcXVlcnk6IHRoaXMucXVlcnksXG4gICAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXJcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9zYXZlUXVlcnlBbmRGaWx0ZXIodGhpcy5xdWVyeSwgdGhpcy5maWx0ZXIpO1xuICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuY29uc3QgS2V5cyA9IHtcbiAgQkFDS1NQQUNFOiA4LFxuICBUQUI6IDksXG4gIEVOVEVSOiAxMyxcbiAgU0hJRlQ6IDE2LFxuICBDVFJMOiAxNyxcbiAgQUxUOiAxOCxcbiAgRVNDQVBFOiAyNyxcblxuICBMRUZUOiAzNyxcbiAgUklHSFQ6IDM5LFxuICBVUDogMzgsXG5cbiAgREVMRVRFOiA0NixcbiAgRE9XTjogNDAsXG4gIExFRlRfT1NfS0VZOiA5MSxcbiAgUklHSFRfT1NfS0VZOiA5MixcbiAgU0VMRUNUX0tFWTogOTNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Db21wbGV0ZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgYXV0b2NvbXBsZXRlIGlzIHNpbXBsZSBvciBmaWx0ZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmlzRmlsdGVyU2VhcmNoID0gb3B0cy5pc0ZpbHRlclNlYXJjaCB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgYmFyS2V5YCBpbiB0aGUgdmVydGljYWwgc2VhcmNoIHRvIHVzZSBmb3IgYXV0by1jb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYmFyS2V5ID0gb3B0cy5iYXJLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgdmVydGljYWxLZXlgIG9mIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggdG8gdXNlIGZvciBhdXRvLWNvbXBsZXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IG9wdHMudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBpbnB1dCBlbCBzZWxlY3RvciBmb3IgYXV0byBjb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5faW5wdXRFbCA9IG9wdHMuaW5wdXRFbCB8fCAnLmpzLXlleHQtcXVlcnknO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIGZvciB0aGUgZGF0YS1zdG9yYWdlIHRvIGxpc3RlbiBmb3IgdXBkYXRlcyBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBgJHtTdG9yYWdlS2V5cy5BVVRPQ09NUExFVEV9LiR7dGhpcy5uYW1lfWA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBoYW5kbGViYXJzIHRlbXBsYXRlIG5hbWUgdG8gdXNlIGZvciByZW5kZXJpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdzZWFyY2gvYXV0b2NvbXBsZXRlJztcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgaW5wdXQgdmFsdWUgd2hlbiB0eXBpbmcuXG4gICAgICogV2UgdXNlIHRoaXMgZm9yIHJlc2V0dGluZyB0aGUgc3RhdGUgb2YgdGhlIGlucHV0IHZhbHVlIHdoZW4gb3RoZXIgaW50ZXJhY3Rpb25zIChlLmcuIHJlc3VsdCBuYXZpZ2F0aW9uKVxuICAgICAqIGNoYW5nZSBiYXNlZCBvbiBpbnRlcmFjdGlvbnMuIEZvciBpbnN0YW5jZSwgaGl0dGluZyBlc2NhcGUgc2hvdWxkIHJlc2V0IHRoZSB2YWx1ZSB0byB0aGUgb3JpZ2luYWwgdHlwZWQgcXVlcnkuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gb3B0cy5vcmlnaW5hbFF1ZXJ5IHx8ICcnO1xuXG4gICAgLyoqXG4gICAgICogVXNlZCBmb3Iga2V5Ym9hcmQgbmF2aWdhdGlvbiB0aHJvdWdoIHJlc3VsdHMuXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IHNlY3Rpb24gd2UncmUgbmF2aWdhdGluZyBpbi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3NlY3Rpb25JbmRleCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uIHRocm91Z2ggcmVzdWx0cy5cbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgcmVzdWx0IGluZGV4IHdlJ3JlIG5hdmlnYXRpbmcgb24uXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZXN1bHRJbmRleCA9IC0xO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHRleHQgdG8gc2hvdyBhcyB0aGUgZmlyc3QgaXRlbSBmb3IgYXV0byBjb21wbGV0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnByb21wdEhlYWRlciA9IG9wdHMucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBpbnZva2VkIHdoZW4gdGhlIGBFbnRlcmAga2V5IGlzIHByZXNzZWQgb24gYXV0byBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICB0aGlzLl9vblN1Ym1pdCA9IG9wdHMub25TdWJtaXQgfHwgZnVuY3Rpb24gKCkge307XG4gIH1cblxuICAvKipcbiAgICogVGhlIGFsaWFzZWQgdXNlZCBieSB0aGUgY29tcG9uZW50IG1hbmFnZXIgZm9yIGNyZWF0aW9uLlxuICAgKi9cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0F1dG9Db21wbGV0ZSc7XG4gIH1cblxuICAvKipcbiAgICogc2V0U3RhdGUgaXMgb3ZlcnJpZGRlbiBzbyB0aGF0IHdlIGNhbiBwcm92aWRlIGFkZGl0aW9uYWwgbWV0YSBkYXRhXG4gICAqIHRvIHRoZSB0ZW1wbGF0ZSAoZS5nLiB0aGUgc2VjdGlvbkluZGV4IGFuZCByZXN1bHRJbmRleCksIHNpbmNlXG4gICAqIHRob3NlIGFyZSBjbGllbnQtaW50ZXJhY3Rpb24gc3BlY2lmaWMgdmFsdWVzIGFuZCBhcmVuJ3QgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyLlxuICAgKi9cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBzZWN0aW9uSW5kZXg6IHRoaXMuX3NlY3Rpb25JbmRleCxcbiAgICAgIHJlc3VsdEluZGV4OiB0aGlzLl9yZXN1bHRJbmRleCxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5fb3JpZ2luYWxRdWVyeS5sZW5ndGggPT09IDAgPyB0aGlzLnByb21wdEhlYWRlciA6IG51bGxcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogdXBkYXRlU3RhdGUgaXMgYSBoZWxwZXIgdG8gYXBwbHkgdGhlIGN1cnJlbnQgc3RhdGUgd2l0aCBuZXcgY2xpZW50LXN0YXRlLlxuICAgKi9cbiAgdXBkYXRlU3RhdGUgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fc3RhdGUuZ2V0KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uQ3JlYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgY29uc3RydWN0ZWQgZnJvbSB0aGUgZnJhbWV3b3JrLlxuICAgKiBPbmNlIHdlJ3JlIGluaXRhbGl6ZWQsIHdlIHdpcmUgdXAgYWxsIG9mIG91ciB1c2VyIGludGVyYWN0aW9uc1xuICAgKi9cbiAgb25DcmVhdGUgKCkge1xuICAgIC8vIFVzZSB0aGUgY29udGV4dCBvZiB0aGUgcGFyZW50IGNvbXBvbmVudCB0byBmaW5kIHRoZSBpbnB1dCBub2RlLlxuICAgIGxldCBxdWVyeUlucHV0ID0gRE9NLnF1ZXJ5KHRoaXMuX3BhcmVudC5fY29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKTtcbiAgICBpZiAoIXF1ZXJ5SW5wdXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGluaXRpYWxpemUgQXV0b0NvbXBsZXRlLiBDYW4gbm90IGZpbmQge0hUTUxFbGVtZW50fSBgJywgdGhpcy5faW5wdXRFbCwgJ2AuJyk7XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSB0aGUgbmF0aXZlIGF1dG8gY29tcGxldGVcbiAgICBET00uYXR0cihxdWVyeUlucHV0LCAnYXV0b0NvbXBsZXRlJywgJ29mZicpO1xuXG4gICAgLy8gVGhlIHVzZXIgZXhpdHMgdGhlIGlucHV0LCBzbyB3ZSB3YW50IHRvIHJlc2V0IHRoZSBzdGF0ZSBhbmQgY2xvc2VcbiAgICAvLyB0aGUgYXV0byBjb21wbGV0ZVxuICAgIERPTS5vbihxdWVyeUlucHV0LCAnYmx1cicsICgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIC8vIFdoZW4gYSB1c2VyIGZvY3VzZXMgdGhlIGlucHV0LCB3ZSBzaG91bGQgcG9wdWxhdGUgdGhlIGF1dG9jb21wbGV0ZSBiYXNlZFxuICAgIC8vIG9uIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdmb2N1cycsICgpID0+IHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuYXV0b0NvbXBsZXRlKHF1ZXJ5SW5wdXQudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gbmF2aWdhdGUgYmV0d2VlbiB0aGUgcmVzdWx0cyB1c2luZyB0aGUga2V5Ym9hcmRcbiAgICBET00ub24ocXVlcnlJbnB1dCwgJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVOYXZpZ2F0ZVJlc3VsdHMoZS5rZXlDb2RlLCBlKTtcbiAgICAgIHRoaXMuaGFuZGxlU3VibWl0UmVzdWx0KGUua2V5Q29kZSwgcXVlcnlJbnB1dC52YWx1ZSwgZSk7XG4gICAgfSk7XG5cbiAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBzZWxlY3QgYSByZXN1bHQgd2l0aCB0aGUgbW91c2VcbiAgICBET00uZGVsZWdhdGUodGhpcy5fY29udGFpbmVyLCAnLmpzLXlleHQtYXV0b2NvbXBsZXRlLW9wdGlvbicsICdtb3VzZWRvd24nLCAoZXZ0LCB0YXJnZXQpID0+IHtcbiAgICAgIGxldCBkYXRhID0gdGFyZ2V0LmRhdGFzZXQ7XG4gICAgICBsZXQgdmFsID0gZGF0YS5zaG9ydDtcblxuICAgICAgdGhpcy51cGRhdGVRdWVyeSh2YWwpO1xuICAgICAgdGhpcy5fb25TdWJtaXQodmFsLCBkYXRhLmZpbHRlcik7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIHRoZSB1c2VyIGlzIHR5cGluZyBpbiB0aGUgaW5wdXQsIHByb2Nlc3MgdGhlIGF1dG8gY29tcGxldGUuXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdrZXl1cCcsIChlKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZVR5cGluZyhlLmtleUNvZGUsIHF1ZXJ5SW5wdXQudmFsdWUsIGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGNsb3NlIHdpbGwgaGlkZSB0aGUgYXV0byBjb21wbGV0ZSByZXN1bHRzIGFuZCByZXNldCB0aGUgc3RhdGUuXG4gICAqL1xuICBjbG9zZSAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7fSk7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlc2V0cyB0aGUgY2xpZW50IHN0YXRlIHRvIHRoZWlyIG9yaWdpbmFsIHZhbHVlcyBhbmQgdHJpZ2dlcnNcbiAgICogYSB0ZW1wbGF0ZS1yZXJlbmRlciB2aWEgdXBkYXRlU3RhdGVcbiAgICovXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLl9zZWN0aW9uSW5kZXggPSAwO1xuICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gLTE7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gdXBkYXRlIHRoZSBpbnB1dCB0ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRWYWx1ZSBPcHRpb24gdmFsdWUgcHJvdmlkZWQuXG4gICAqIElmIG5vIHZhbHVlIHByb3ZpZGVkLCB3ZSdsbCB0cnkgdG8gZmluZCBpdCBiYXNlZCBvbiB0aGUgc2VsZWN0aW9uIGluZGV4ZXMuXG4gICAqL1xuICB1cGRhdGVRdWVyeSAob3B0VmFsdWUpIHtcbiAgICAvLyBPbmx5IHdhbnQgdG8gdXBkYXRlIHRoZSBxdWVyeSBzdHJpbmcgaWYgdGhlcmVzIGEgdmFsdWUuXG4gICAgLy8gSWYgb25lIGlzIHByb3ZpZGVkLCBncmVhdC5cbiAgICAvLyBPdGhlcndpc2UsIGxldHMgdHJ5IHRvIGZpbmQgaXQgZnJvbSB0aGUgY3VycmVudCBzZWxlY3Rpb24gaW4gdGhlIHJlc3VsdHMuXG4gICAgaWYgKG9wdFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCBzZWN0aW9ucyA9IHRoaXMuX3N0YXRlLmdldCgnc2VjdGlvbnMnKTtcblxuICAgICAgbGV0IHJlc3VsdHMgPSBzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHM7XG4gICAgICBvcHRWYWx1ZSA9IHJlc3VsdHNbdGhpcy5fcmVzdWx0SW5kZXhdLnNob3J0VmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IHF1ZXJ5RWwgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Ll9jb250YWluZXIsICcuanMteWV4dC1xdWVyeScpO1xuICAgIHF1ZXJ5RWwudmFsdWUgPSBvcHRWYWx1ZTtcbiAgfVxuXG4gIGhhbmRsZVR5cGluZyAoa2V5LCB2YWx1ZSwgZSkge1xuICAgIGxldCBpZ25vcmVkS2V5cyA9IFtcbiAgICAgIEtleXMuRE9XTixcbiAgICAgIEtleXMuVVAsXG4gICAgICBLZXlzLkNUUkwsXG4gICAgICBLZXlzLkFMVCxcbiAgICAgIEtleXMuU0hJRlQsXG4gICAgICBLZXlzLkxFRlQsXG4gICAgICBLZXlzLlJJR0hULFxuICAgICAgS2V5cy5MRUZUX09TX0tFWSxcbiAgICAgIEtleXMuUklHSFRfT1NfS0VZLFxuICAgICAgS2V5cy5TRUxFQ1RfS0VZXG4gICAgXTtcblxuICAgIGlmIChpZ25vcmVkS2V5cy5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFVzZXIgZXNjYXBlcyBvdXQgb2YgYXV0byBjb21wbGV0ZSwgc28gd2UgcmVzZXQgaXQgdG8gdGhlIG9yaWdpbmFsIGlucHV0XG4gICAgaWYgKGtleSA9PT0gS2V5cy5FU0NBUEUpIHtcbiAgICAgIHRoaXMudXBkYXRlUXVlcnkodGhpcy5fb3JpZ2luYWxRdWVyeSk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVGFiYmluZyBvdXQgb3IgZW50ZXIgc2hvdWxkIGNsb3NlIHRoZSBhdXRvIGNvbXBsZXRlLlxuICAgIGlmIChrZXkgPT09IEtleXMuRU5URVIgfHwga2V5ID09PSBLZXlzLlRBQikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgb3JpZ2luYWwgdmFsdWUgYmFzZWQgb24gdGhlIHVzZXIgaW5wdXRcbiAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gdmFsdWU7XG5cbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgdGhpcy5hdXRvQ29tcGxldGUodmFsdWUpO1xuICB9XG5cbiAgYXV0b0NvbXBsZXRlIChpbnB1dCkge1xuICAgIGlmICh0aGlzLmlzRmlsdGVyU2VhcmNoKSB7XG4gICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlRmlsdGVyKGlucHV0LCB0aGlzLm5hbWUsIHRoaXMuX3ZlcnRpY2FsS2V5LCB0aGlzLl9iYXJLZXkpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fdmVydGljYWxLZXkgfHwgdGhpcy5fYmFyS2V5KSB7XG4gICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlVmVydGljYWwoaW5wdXQsIHRoaXMubmFtZSwgdGhpcy5fdmVydGljYWxLZXksIHRoaXMuX2JhcktleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29yZS5hdXRvQ29tcGxldGVVbml2ZXJzYWwoaW5wdXQsIHRoaXMubmFtZSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTmF2aWdhdGVSZXN1bHRzIChrZXksIGUpIHtcbiAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG4gICAgaWYgKHNlY3Rpb25zID09PSB1bmRlZmluZWQgfHwgc2VjdGlvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0cyA9IHNlY3Rpb25zW3RoaXMuX3NlY3Rpb25JbmRleF0ucmVzdWx0cztcbiAgICBpZiAoa2V5ID09PSBLZXlzLlVQKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5fcmVzdWx0SW5kZXggPD0gMCkge1xuICAgICAgICBpZiAodGhpcy5fc2VjdGlvbkluZGV4ID4gMCkge1xuICAgICAgICAgIHRoaXMuX3NlY3Rpb25JbmRleC0tO1xuICAgICAgICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzLmxlbmd0aCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVRdWVyeSh0aGlzLl9vcmlnaW5hbFF1ZXJ5KTtcbiAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3Jlc3VsdEluZGV4LS07XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gS2V5cy5ET1dOKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5fcmVzdWx0SW5kZXggPj0gcmVzdWx0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPCBzZWN0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgdGhpcy5fc2VjdGlvbkluZGV4Kys7XG4gICAgICAgICAgdGhpcy5fcmVzdWx0SW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3Jlc3VsdEluZGV4Kys7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU3VibWl0UmVzdWx0IChrZXksIHZhbHVlLCBlKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gdGhpcy5fc3RhdGUuZ2V0KCdzZWN0aW9ucycpO1xuICAgIGlmIChzZWN0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IHNlY3Rpb25zLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gc3VibWl0IHRoZSBzZWFyY2ggb24gZW50ZXJcbiAgICBpZiAoa2V5ID09PSBLZXlzLkVOVEVSKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgZmlsdGVyID0gJyc7XG4gICAgICBpZiAodGhpcy5fc2VjdGlvbkluZGV4ID49IDAgJiYgdGhpcy5fcmVzdWx0SW5kZXggPj0gMCkge1xuICAgICAgICBmaWx0ZXIgPSBKU09OLnN0cmluZ2lmeShzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHNbdGhpcy5fcmVzdWx0SW5kZXhdLmZpbHRlcik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlUXVlcnkodmFsdWUpO1xuICAgICAgdGhpcy5fb3JpZ2luYWxRdWVyeSA9IHZhbHVlO1xuICAgICAgdGhpcy5fb25TdWJtaXQodmFsdWUsIGZpbHRlcik7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXJPcHRpb25zQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgc3VwcG9ydGVkIGNvbnRyb2xzXG4gKiBAdHlwZSB7c3RyaW5nW119XG4gKi9cbmNvbnN0IFNVUFBPUlRFRF9DT05UUk9MUyA9IFtcbiAgJ3NpbmdsZW9wdGlvbicsXG4gICdtdWx0aW9wdGlvbidcbl07XG5cbi8qKlxuICogUmVuZGVycyBhIHNldCBvZiBvcHRpb25zLCBlYWNoIG9uZSByZXByZXNlbnRpbmcgYSBmaWx0ZXIgaW4gYSBzZWFyY2guXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlck9wdGlvbnNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgaWYgKCFjb25maWcuY29udHJvbCB8fCAhU1VQUE9SVEVEX0NPTlRST0xTLmluY2x1ZGVzKGNvbmZpZy5jb250cm9sKSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMgcmVxdWlyZXMgYSB2YWxpZCBcImNvbnRyb2xcIiB0byBiZSBwcm92aWRlZCcsXG4gICAgICAgICdGaWx0ZXJPcHRpb25zJyk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25maWcub3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMgY29tcG9uZW50IHJlcXVpcmVzIG9wdGlvbnMgdG8gYmUgcHJvdmlkZWQnLFxuICAgICAgICAnRmlsdGVyT3B0aW9ucycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGZpbHRlciBvcHRpb25zIHRvIGRpc3BsYXkgd2l0aCBjaGVja2VkIHN0YXR1c1xuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29wdGlvbnMgPSBjb25maWcub3B0aW9ucy5tYXAobyA9PiBPYmplY3QuYXNzaWduKHt9LCBvLCB7IGNoZWNrZWQ6IGZhbHNlIH0pKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIGNvbnRyb2wgdG8gZGlzcGxheVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9jb250cm9sID0gY29uZmlnLmNvbnRyb2w7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0b3IgdXNlZCBmb3Igb3B0aW9ucyBpbiB0aGUgdGVtcGxhdGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb3B0aW9uU2VsZWN0b3IgPSBjb25maWcub3B0aW9uU2VsZWN0b3IgfHwgJy5qcy15ZXh0LWZpbHRlci1vcHRpb24nO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc3RvcmVzIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBvbiBlYWNoIGNoYW5nZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RvcmVPbkNoYW5nZSA9IGNvbmZpZy5zdG9yZU9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBjaGFuZ2VkXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBjb25maWcub25DaGFuZ2UgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gYmUgdXNlZCBpbiB0aGUgbGVnZW5kXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xhYmVsID0gY29uZmlnLmxhYmVsIHx8ICdGaWx0ZXJzJztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXIsIGJhc2VkIG9uIHRoZSBjb250cm9sXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IGBjb250cm9scy8ke2NvbmZpZy5jb250cm9sfWA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRmlsdGVyT3B0aW9ucyc7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIG9wdGlvbnM6IHRoaXMuX29wdGlvbnMsXG4gICAgICBsYWJlbDogdGhpcy5fbGFiZWxcbiAgICB9KSk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICBET00uZGVsZWdhdGUodGhpcy5fY29udGFpbmVyLCB0aGlzLl9vcHRpb25TZWxlY3RvciwgJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl91cGRhdGVPcHRpb24ocGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXgpLCBldmVudC50YXJnZXQuY2hlY2tlZCk7XG5cbiAgICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuX2J1aWxkRmlsdGVyKCk7XG4gICAgICBpZiAodGhpcy5fc3RvcmVPbkNoYW5nZSkge1xuICAgICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgZmlsdGVyKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fb25DaGFuZ2UoZmlsdGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIF91cGRhdGVPcHRpb24gKGluZGV4LCBjaGVja2VkKSB7XG4gICAgaWYgKHRoaXMuX2NvbnRyb2wgPT09ICdzaW5nbGVvcHRpb24nKSB7XG4gICAgICB0aGlzLl9vcHRpb25zID0gdGhpcy5fb3B0aW9ucy5tYXAobyA9PiBPYmplY3QuYXNzaWduKHt9LCBvLCB7IGNoZWNrZWQ6IGZhbHNlIH0pKTtcbiAgICB9XG5cbiAgICB0aGlzLl9vcHRpb25zW2luZGV4XSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX29wdGlvbnNbaW5kZXhdLCB7IGNoZWNrZWQgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBvcHRpb25zXG4gICAqL1xuICBjbGVhciAoKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBET00ucXVlcnlBbGwodGhpcy5fY29udGFpbmVyLCB0aGlzLl9vcHRpb25TZWxlY3Rvcik7XG4gICAgZWxlbWVudHMuZm9yRWFjaChlID0+IGUuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2ZhbHNlJykpO1xuICAgIHRoaXMuX2FwcGx5RmlsdGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgYW5kIHJldHVybiB0aGUgRmlsdGVyIHRoYXQgcmVwcmVzZW50cyB0aGUgY3VycmVudCBzdGF0ZVxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2J1aWxkRmlsdGVyICgpIHtcbiAgICBjb25zdCBmaWx0ZXJzID0gdGhpcy5fb3B0aW9uc1xuICAgICAgLmZpbHRlcihvID0+IG8uY2hlY2tlZClcbiAgICAgIC5tYXAobyA9PiBGaWx0ZXIuZXF1YWwoby5maWVsZCwgby52YWx1ZSkpO1xuXG4gICAgcmV0dXJuIGZpbHRlcnMubGVuZ3RoID4gMFxuICAgICAgPyBGaWx0ZXIuZ3JvdXAoLi4uZmlsdGVycylcbiAgICAgIDoge307XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEZpbHRlckJveENvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuXG4vKipcbiAqIFJlbmRlcnMgYSBzZXQgb2YgZmlsdGVycywgYW5kIHNlYXJjaGVzIHdpdGggdGhlbSB3aGVuIGFwcGxpZWQuXG4gKiBNdWx0aXBsZSBGaWx0ZXJCb3ggY29tcG9uZW50cyB3aWxsIEFORCB0b2dldGhlciBidXQgd2lsbCBub3Qgc2hhcmUgc3RhdGUuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyQm94Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZyA9IHt9KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIGlmICghY29uZmlnLmZpbHRlcnMgfHwgIShjb25maWcuZmlsdGVycyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlckJveCByZXF1aXJlcyBmaWx0ZXJzIHRvIGJlIHByb3ZpZGVkIGFzIGFuIGFycmF5JyxcbiAgICAgICAgJ0ZpbHRlckJveCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGZpbHRlcnMgdG8gZGlzcGxheSBhbmQgY29udHJvbFxuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlckNvbmZpZ3MgPSBjb25maWcuZmlsdGVycztcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBzZWFyY2hcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVydGljYWxLZXkgPSBjb25maWcudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRyaWdnZXIgYSBzZWFyY2ggb24gZWFjaCBjaGFuZ2UgdG8gYSBmaWx0ZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaE9uQ2hhbmdlID0gY29uZmlnLnNlYXJjaE9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdG9yIG9mIHRoZSBhcHBseSBidXR0b25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBwbHlCdXR0b25TZWxlY3RvciA9IGNvbmZpZy5hcHBseUJ1dHRvblNlbGVjdG9yIHx8ICcuanMteWV4dC1maWx0ZXJib3gtYXBwbHknO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudHMgY3JlYXRlZCBmb3IgZWFjaCBmaWx0ZXIgY29uZmlnXG4gICAgICogQHR5cGUge0NvbXBvbmVudFtdfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVyQ29tcG9uZW50cyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGZpbHRlciBjb21wb25lbnRzIGluIHRoZSBib3hcbiAgICAgKiBAdHlwZSB7RmlsdGVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fZmlsdGVycyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHRvIHJlbmRlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSBgZmlsdGVycy9maWx0ZXJib3hgO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0ZpbHRlckJveCc7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgZmlsdGVyQ29uZmlnczogdGhpcy5fZmlsdGVyQ29uZmlncyxcbiAgICAgIHNob3dBcHBseUJ1dHRvbjogIXRoaXMuX3NlYXJjaE9uQ2hhbmdlXG4gICAgfSkpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgLy8gSW5pdGlhbGl6ZSBmaWx0ZXJzIGZyb20gY29uZmlnc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZmlsdGVyQ29uZmlncy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5fZmlsdGVyQ29uZmlnc1tpXTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoY29uZmlnLnR5cGUsIE9iamVjdC5hc3NpZ24oe30sXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmZpbHRlciR7aX1gLFxuICAgICAgICAgIHN0b3JlT25DaGFuZ2U6IGZhbHNlLFxuICAgICAgICAgIGNvbnRhaW5lcjogYC5qcy15ZXh0LWZpbHRlcmJveC1maWx0ZXIke2l9YCxcbiAgICAgICAgICBvbkNoYW5nZTogKGYpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25GaWx0ZXJDaGFuZ2UoaSwgZik7XG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICBjb21wb25lbnQubW91bnQoKTtcbiAgICAgIHRoaXMuX2ZpbHRlckNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgYXBwbHkgYnV0dG9uXG4gICAgaWYgKCF0aGlzLl9zZWFyY2hPbkNoYW5nZSkge1xuICAgICAgY29uc3QgYnV0dG9uID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fYXBwbHlCdXR0b25TZWxlY3Rvcik7XG4gICAgICBET00ub24oYnV0dG9uLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NhdmVGaWx0ZXJzVG9TdG9yYWdlKCk7XG4gICAgICAgIHRoaXMuX3NlYXJjaCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBjaGFuZ2VzIHRvIGNoaWxkIGZpbHRlciBjb21wb25lbnRzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGNoYW5nZWQgZmlsdGVyXG4gICAqIEBwYXJhbSB7RmlsdGVyfSBmaWx0ZXIgVGhlIG5ldyBmaWx0ZXJcbiAgICovXG4gIG9uRmlsdGVyQ2hhbmdlIChpbmRleCwgZmlsdGVyKSB7XG4gICAgdGhpcy5fZmlsdGVyc1tpbmRleF0gPSBmaWx0ZXI7XG4gICAgaWYgKHRoaXMuX3NlYXJjaE9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLl9zYXZlRmlsdGVyc1RvU3RvcmFnZSgpO1xuICAgICAgdGhpcy5fc2VhcmNoKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgY3VycmVudCBmaWx0ZXJzIHRvIHN0b3JhZ2UgdG8gYmUgdXNlZCBpbiB0aGUgbmV4dCBzZWFyY2hcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zYXZlRmlsdGVyc1RvU3RvcmFnZSAoKSB7XG4gICAgY29uc3QgdmFsaWRGaWx0ZXJzID0gdGhpcy5fZmlsdGVycy5maWx0ZXIoZiA9PiBmICE9PSB1bmRlZmluZWQgJiYgZiAhPT0gbnVsbCk7XG4gICAgY29uc3QgY29tYmluZWRGaWx0ZXIgPSB2YWxpZEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgPyBGaWx0ZXIuYW5kKC4uLnZhbGlkRmlsdGVycylcbiAgICAgIDogdmFsaWRGaWx0ZXJzWzBdO1xuICAgIHRoaXMuY29yZS5zZXRGaWx0ZXIodGhpcy5uYW1lLCBjb21iaW5lZEZpbHRlciB8fCB7fSk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBhIHNlYXJjaCB3aXRoIGFsbCBmaWx0ZXJzIGluIHN0b3JhZ2VcbiAgICovXG4gIF9zZWFyY2ggKCkge1xuICAgIGNvbnN0IGFsbEZpbHRlcnMgPSB0aGlzLmNvcmUuc3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICBjb25zdCB0b3RhbEZpbHRlciA9IGFsbEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgPyBGaWx0ZXIuYW5kKC4uLmFsbEZpbHRlcnMpXG4gICAgICA6IGFsbEZpbHRlcnNbMF07XG5cbiAgICBjb25zdCBxdWVyeSA9IHRoaXMuY29yZS5zdG9yYWdlLmdldFN0YXRlKFN0b3JhZ2VLZXlzLlFVRVJZKSB8fCAnJztcblxuICAgIHRoaXMuY29yZS52ZXJ0aWNhbFNlYXJjaChxdWVyeSwgdGhpcy5fdmVydGljYWxLZXksIEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIERpcmVjdEFuc3dlckNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0QW5zd2VyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVI7XG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3Jlc3VsdHMvZGlyZWN0YW5zd2VyJztcbiAgfVxuXG4gIGJlZm9yZU1vdW50ICgpIHtcbiAgICBpZiAoIXRoaXMuaGFzU3RhdGUoJ2Fuc3dlcicpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRGlyZWN0QW5zd2VyJztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdyZXN1bHRzL3Jlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdSZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBSZXN1bHRzSXRlbUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdyZXN1bHRzL2xvY2F0aW9ucmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0xvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCAqL1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncmVzdWx0cy9wZW9wbGVyZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE1hcFByb3ZpZGVyICovXG5cbi8qKlxuICogQSBNYXBQcm92aWRlciBpcyBhbiBpbnRlcmZhY2UgdGhhdCByZXByZXNlbnRzIHRoYXQgc2hvdWxkIGJlIGltcGxlbWVudGVkXG4gKiBpbiBvcmRlciB0byBpbnRlZ3JhdGUgd2l0aCBhIFRoaXJkIFBhcnR5IE1hcCBwcm92aWRlciBmb3IgYm90aFxuICogc3RhdGljIGFuZCBpbnRlcmFjdGl2ZSBtYXBzLiBNYXBQcm92aWRlcnMgYXJlIHVzZWQgYnkgdGhlIE1hcENvbXBvbmVudC5cbiAqXG4gKiBJbXBsZW1lbnRhdGlvbnMgc2hvdWxkIGV4dGVuZCB0aGlzIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdXNlZCBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgbWFwIHByb3ZpZGVyXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIG1hcCB0byBhcHBlbmQgdG8gdGhlIERPTSwgZGVmYXVsdHMgdG8gMTAwJVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5faGVpZ2h0ID0gb3B0cy5oZWlnaHQgfHwgMjAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSBtYXAgdG8gYXBwZW5kIHRvIHRoZSBET00sIGRlZmF1bHRzIHRvIDEwMCVcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3dpZHRoID0gb3B0cy53aWR0aCB8fCA2MDA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgem9vbSBsZXZlbCBvZiB0aGUgbWFwLCBkZWZhdWx0cyB0byA5XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl96b29tID0gb3B0cy56b29tIHx8IDk7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgdW5kZXJseWluZyBtYXAgaW5zdGFuY2UsIGNyZWF0ZWQgYnkgdGhlIGV4dGVybmFsIGxpYi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX21hcCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUZW1wb3JhcnkgYm9vbGVhbiB0cmFja2luZyB3aGV0aGVyIG9yIG5vdCB0aGUgZXh0ZXJuYWwgSlMgbGlicmFyeSBpcyBsb2FkZWQgKHNlZSBUT0RPIGJlbG93KVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2lzTG9hZGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBpbnZva2Ugb25jZSB0aGUgSmF2YXNjcmlwdCBpcyBsb2FkZWRcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5fb25Mb2FkZWQgPSBvcHRzLm9uTG9hZGVkIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGN1c3RvbSBjb25maWd1cmF0aW9uIG92ZXJyaWRlIHRvIHVzZSBmb3IgdGhlIG1hcCBtYXJrZXJzXG4gICAgICogQHR5cGUge09iamVjdHxGdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLl9waW5Db25maWcgPSB0eXBlb2Ygb3B0cy5waW4gPT09ICdmdW5jdGlvbicgPyBvcHRzLnBpbiA6IE9iamVjdC5hc3NpZ24oTWFwUHJvdmlkZXIuREVGQVVMVF9QSU5fQ09ORklHLCBvcHRzLnBpbik7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgY29uZmlndXJhdGlvbiB0byB1c2UgZm9yIHRoZSBtYXAgbWFya2Vyc1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKiBUT0RPKGJpbGx5KSBDcmVhdGUgYSBjb25maWd1cmF0aW9uIG1vZGVsXG4gICAqL1xuICBzdGF0aWMgZ2V0IERFRkFVTFRfUElOX0NPTkZJRyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGljb246IHtcbiAgICAgICAgYW5jaG9yOiBudWxsLCAvLyBlLmcuIHsgeDogMSwgeTogMSB9XG4gICAgICAgIHN2ZzogbnVsbCxcbiAgICAgICAgdXJsOiBudWxsLFxuICAgICAgICBzY2FsZWRTaXplOiBudWxsIC8vIGUuZy4geyB3OiAyMCwgaDogMjAgfVxuICAgICAgfSxcbiAgICAgIGxhYmVsVHlwZTogJ251bWVyaWMnXG4gICAgfTtcbiAgfVxuXG4gIG9uTG9hZGVkIChjYikge1xuICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9vbkxvYWRlZCA9IGNiO1xuICAgIGlmICh0aGlzLmlzTG9hZGVkKCkpIHtcbiAgICAgIHRoaXMuX29uTG9hZGVkKCk7XG4gICAgfVxuICB9XG5cbiAgaXNMb2FkZWQgKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0xvYWRlZDtcbiAgfVxuXG4gIGxvYWRKUyAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmltcGxlbWVudGVkIE1ldGhvZDogbG9hZEpTJyk7XG4gIH1cblxuICBsb2FkU3RhdGljICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaW1wbGVtZW50ZWQgTWV0aG9kOiBsb2FkU3RhdGljJyk7XG4gIH1cblxuICBpbml0IChtYXBEYXRhKSB7XG4gICAgLy8gVE9ETyhiaWxseSkgVGhpcyBzaG91bGQgYmUgYmFzZWQgb2ZmIGEgcHJvbWlzZSB0aGF0IGdldHMgY3JlYXRlZCBmcm9tIGxvYWRKU1xuICAgIHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCBNZXRob2Q6IGluaXQnKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgR29vZ2xlTWFwUHJvdmlkZXIgKi9cblxuaW1wb3J0IE1hcFByb3ZpZGVyIGZyb20gJy4vbWFwcHJvdmlkZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi8uLi9kb20vZG9tJztcblxuLyogZ2xvYmFsIGdvb2dsZSAqL1xuXG4vKipcbiAqIEdvb2dsZU1hcFByb3ZpZGVyIGlzIGFuIGltcGxlbWVudGF0aW9uIG9mIGEgTWFwUHJvdmlkZXJcbiAqIHRoYXQgaGFuZGxlcyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgdGhpcmQgcGFydHkgQVBJIHRvIGV4cG9zZSBtYXBzLlxuICogQGV4dGVuZHMgTWFwUHJvdmlkZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29vZ2xlTWFwUHJvdmlkZXIgZXh0ZW5kcyBNYXBQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl9jbGllbnRJZCA9IG9wdHMuY2xpZW50SWQ7XG4gICAgdGhpcy5fc2lnbmF0dXJlID0gb3B0cy5zaWduYXR1cmU7XG5cbiAgICBpZiAoIXRoaXMuaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscygpICYmICF0aGlzLl9hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignR29vZ2xlTWFwc1Byb3ZpZGVyOiBNaXNzaW5nIGBhcGlLZXlgIG9yIHtgY2xpZW50SWRgLCBgc2lnbmF0dXJlYH0nKTtcbiAgICB9XG4gIH1cblxuICBsb2FkSlMgKG9uTG9hZCkge1xuICAgIGlmIChET00ucXVlcnkoJyN5ZXh0LW1hcC1qcycpKSB7XG4gICAgICBpZiAodHlwZW9mIG9uTG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvbkxvYWQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWpzJyxcbiAgICAgIG9ubG9hZDogKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX29uTG9hZGVkKCk7XG4gICAgICB9LFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzcmM6IGAvL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/JHt0aGlzLmdlbmVyYXRlQ3JlZGVudGlhbHMoKX1gXG4gICAgfSk7XG5cbiAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgfVxuXG4gIGdlbmVyYXRlU3RhdGljIChtYXBEYXRhKSB7XG4gICAgbGV0IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MgPSBHb29nbGVNYXBNYXJrZXJDb25maWcuZnJvbShcbiAgICAgIG1hcERhdGEubWFwTWFya2VycyxcbiAgICAgIHRoaXMuX3BpbkNvbmZpZ1xuICAgICk7XG5cbiAgICBsZXQgZW5jb2RlZE1hcmtlcnMgPSBHb29nbGVNYXBNYXJrZXJDb25maWcuc2VyaWFsaXplKGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MpO1xuICAgIHJldHVybiBgXG4gICAgICA8aW1nIHNyYz1cIi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9zdGF0aWNtYXA/JHtlbmNvZGVkTWFya2Vyc30mc2l6ZT0ke3RoaXMuX3dpZHRofXgke3RoaXMuX2hlaWdodH0mJHt0aGlzLmdlbmVyYXRlQ3JlZGVudGlhbHMoKX1cIj5gO1xuICB9XG5cbiAgZ2VuZXJhdGVDcmVkZW50aWFscyAoKSB7XG4gICAgaWYgKHRoaXMuaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscygpKSB7XG4gICAgICByZXR1cm4gYGNsaWVudD0ke3RoaXMuX2NsaWVudElkfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBga2V5PSR7dGhpcy5fYXBpS2V5fWA7XG4gICAgfVxuICB9XG5cbiAgaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscyAoKSB7XG4gICAgLy8gU2lnbmF0dXJlIGlzIG9ubHkgcmVxdWlyZWQgaWYgbWFwIGlzIHN0YXRpY1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRJZCAmJiAodGhpcy5fc2lnbmF0dXJlIHx8ICF0aGlzLl9pc1N0YXRpYyk7XG4gIH1cblxuICBpbml0IChlbCwgbWFwRGF0YSkge1xuICAgIGlmICghbWFwRGF0YSB8fCBtYXBEYXRhLm1hcE1hcmtlcnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHRoaXMuX21hcCA9IG51bGw7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBOT1RFKGJpbGx5KSBUaGlzIHRpbWVvdXQgaXMgYSBoYWNrIGZvciBkZWFsaW5nIHdpdGggYXN5bmMgbmF0dXJlLlxuICAgIC8vIE9ubHkgaGVyZSBmb3IgZGVtbyBwdXJwb3Nlcywgc28gd2UnbGwgZml4IGxhdGVyLlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0IGNvbnRhaW5lciA9IERPTS5xdWVyeShlbCk7XG4gICAgICBET00uY3NzKGNvbnRhaW5lciwge1xuICAgICAgICB3aWR0aDogdGhpcy5fd2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5faGVpZ2h0XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGNvbnRhaW5lciwge1xuICAgICAgICB6b29tOiB0aGlzLl96b29tXG4gICAgICB9KTtcblxuICAgICAgLy8gQXBwbHkgb3VyIHNlYXJjaCBkYXRhIHRvIG91ciBHb29nbGVNYXBcbiAgICAgIGxldCBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG4gICAgICBsZXQgZ29vZ2xlTWFwTWFya2VyQ29uZmlncyA9IEdvb2dsZU1hcE1hcmtlckNvbmZpZy5mcm9tKFxuICAgICAgICBtYXBEYXRhLm1hcE1hcmtlcnMsXG4gICAgICAgIHRoaXMuX3BpbkNvbmZpZyxcbiAgICAgICAgdGhpcy5tYXApO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoZ29vZ2xlTWFwTWFya2VyQ29uZmlnc1tpXSk7XG4gICAgICAgIGJvdW5kcy5leHRlbmQobWFya2VyLnBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKGJvdW5kcyk7XG4gICAgfSwgMTAwKTtcbiAgfVxufVxuXG4vLyBUT0RPKGJpbGx5KSBNb3ZlIHRvIG93biBjbGFzc1xuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcE1hcmtlckNvbmZpZyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGdvb2dsZSBtYXAsIHRoYXQgdGhlIG1hcmtlciBpcyBhcHBlbmRlZCB0b1xuICAgICAqIEB0eXBlIHtHb29nbGVNYXB9XG4gICAgICovXG4gICAgdGhpcy5tYXAgPSBvcHRzLm1hcCB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1hcmtlciAobGF0L2xuZylcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMucG9zaXRpb24gPSBvcHRzLnBvc2l0aW9uIHx8IHtcbiAgICAgIGxhdDogdW5kZWZpbmVkLFxuICAgICAgbG5nOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHByb3BlcnRpZXMvc2V0dGluZ3Mgb2YgdGhlIGljb24gdXNlZCBmb3IgdGhlIG1hcmtlclxuICAgICAqIGUuZy4ge1xuICAgICAqICAgICAgICBhbmNob3I6IHsgeDogMCwgeTogMCB9XG4gICAgICogICAgICAgIHVybDogJ3BhdGgvdG8vdXJsLmpwZydcbiAgICAgKiAgICAgICAgc2NhbGVkU2l6ZTogeyB3OiAwLCBoOiAwIH1cbiAgICAgKiAgICAgICB9XG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuaWNvbiA9IG9wdHMuaWNvbiB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgb2YgdGhlIG1hcmtlciB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWwgPSBvcHRzLmxhYmVsIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGFuIGFycmF5IG9mIG1hcmtlciBjb25maWdzXG4gICAqIEBwYXJhbSB7R29vZ2xlTWFwTWFya2VyQ29uZmlnW119IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3NcbiAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZSAoZ29vZ2xlTWFwTWFya2VyQ29uZmlncykge1xuICAgIGxldCBzZXJpYWxpemVkTWFya2VycyA9IFtdO1xuICAgIGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBzZXJpYWxpemVkTWFya2Vycy5wdXNoKGBtYXJrZXJzPWxhYmVsOiR7bWFya2VyLmxhYmVsfXwke21hcmtlci5wb3NpdGlvbi5sYXR9LCR7bWFya2VyLnBvc2l0aW9uLmxuZ31gKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VyaWFsaXplZE1hcmtlcnMuam9pbignJicpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBzdG9yYWdlIGRhdGEgbW9kZWwgb2YgbWFya2VycyBpbnRvIEdvb2dsZUFQSU1hcmtlclxuICAgKiBAcGFyYW0ge0dvb2dsZU1hcH0gQSByZWZlcmVuY2UgdG8gdGhlIGdvb2dsZSBtYXAgdG8gYXBwbHkgdGhlIG1hcmtlciB0b1xuICAgKiBAcGFyYW0ge29iamVjdFtdfSBtYXJrZXJzIFRoZSBkYXRhIG9mIHRoZSBtYXJrZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IHBpbkNvbmZpZyBUaGUgY29uZmlndXJhdGlvbiB0byBhcHBseSB0byB0aGUgbWFya2VyXG4gICAqIEByZXR1cm5zIHtHb29nbGVNYXBNYXJrZXJDb25maWdbXX1cbiAgICovXG4gIHN0YXRpYyBmcm9tIChtYXJrZXJzLCBwaW5Db25maWcsIG1hcCkge1xuICAgIGxldCBnb29nbGVNYXBNYXJrZXJDb25maWdzID0gW107XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1hcmtlcnMpKSB7XG4gICAgICBtYXJrZXJzID0gW21hcmtlcnNdO1xuICAgIH1cblxuICAgIG1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICAvLyBTdXBwb3J0IGNvbmZpZ3VyYXRpb24gYXMgYSBmdW5jdGlvblxuICAgICAgbGV0IHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZztcbiAgICAgIGlmICh0eXBlb2YgcGluQ29uZmlnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZyhcbiAgICAgICAgICBtYXJrZXIuaXRlbSxcbiAgICAgICAgICBNYXBQcm92aWRlci5ERUZBVUxUX1BJTl9DT05GSUcsXG4gICAgICAgICAgbWFya2VyKTtcbiAgICAgIH1cblxuICAgICAgLy8gVHJhbnNmb3JtIG91ciBDb25maWd1cmF0aW9uIE9iamVjdCBpbnRvIHRoZSBleHBlY3RlZFxuICAgICAgLy8gR29vZ2xlIEFQSSBmb3JtYXQuXG4gICAgICBsZXQgaWNvbiA9IHt9O1xuICAgICAgaWYgKHBpbkNvbmZpZ09iai5hbmNob3IpIHtcbiAgICAgICAgaWNvbi5hbmNob3IgPSBnb29nbGUubWFwcy5Qb2ludChwaW5Db25maWdPYmouYW5jaG9yLngsIHBpbkNvbmZpZ09iai5hbmNob3IueSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW5Db25maWdPYmouc2NhbGVkU2l6ZSkge1xuICAgICAgICBpY29uLnNjYWxlZFNpemUgPSBnb29nbGUubWFwcy5TaXplKHBpbkNvbmZpZ09iai5zY2FsZWRTaXplLncsIHBpbkNvbmZpZ09iai5zY2FsZWRTaXplLmgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluQ29uZmlnT2JqLnVybCkge1xuICAgICAgICBpY29uLnVybCA9IHBpbkNvbmZpZ09iai51cmw7XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW5Db25maWdPYmouc3ZnKSB7XG4gICAgICAgIGljb24udXJsID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCAke2VuY29kZVVSSUNvbXBvbmVudChwaW5Db25maWdPYmouc3ZnKX1gO1xuICAgICAgfVxuXG4gICAgICBsZXQgbGFiZWw7XG4gICAgICBpZiAocGluQ29uZmlnT2JqLmxhYmVsKSB7XG4gICAgICAgIGxhYmVsID0gcGluQ29uZmlnT2JqLmxhYmVsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFiZWwgPSBtYXJrZXIubGFiZWwudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgLy8gTk9URShiaWxseSkgR29vZ2xlIG1hcHMgZG9lc24ndCBoYW5kbGUgZW1wdHkgaWNvbiBvYmplY3RzIG5pY2VseVxuICAgICAgLy8gTWFrZSBnb29nbGUgbWFwcyBoYXBweSBpZiBubyBzZXR0aW5ncyBmb3IgaWNvbiBhcmUgcHJvdmlkZWQ7XG4gICAgICBpZiAoT2JqZWN0LmtleXMoaWNvbikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGljb24gPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MucHVzaChcbiAgICAgICAgbmV3IEdvb2dsZU1hcE1hcmtlckNvbmZpZyh7XG4gICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIGxhdDogbWFya2VyLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG5nOiBtYXJrZXIubG9uZ2l0dWRlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpY29uOiBpY29uLFxuICAgICAgICAgIGxhYmVsOiBsYWJlbFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBnb29nbGVNYXBNYXJrZXJDb25maWdzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNYXBCb3hNYXBQcm92aWRlciAqL1xuXG5pbXBvcnQgTWFwUHJvdmlkZXIgZnJvbSAnLi9tYXBwcm92aWRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uLy4uL2RvbS9kb20nO1xuXG4vKiBnbG9iYWwgbWFwYm94Z2wgKi9cblxuLyoqXG4gKiBNYXBCb3hNYXBQcm92aWRlciBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiBhIE1hcFByb3ZpZGVyXG4gKiB0aGF0IGhhbmRsZXMgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIHRoaXJkIHBhcnR5IEFQSSB0byBleHBvc2UgbWFwcy5cbiAqIEBleHRlbmRzIE1hcFByb3ZpZGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcEJveE1hcFByb3ZpZGVyIGV4dGVuZHMgTWFwUHJvdmlkZXIge1xuICAvKipcbiAgICogTG9hZCB0aGUgZXh0ZXJuYWwgSlMgTGlicmFyeVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkxvYWQgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdG8gaW52b2tlIG9uY2UgdGhlIEpTIGlzIGxvYWRlZC5cbiAgICovXG4gIGxvYWRKUyAob25Mb2FkKSB7XG4gICAgbGV0IHNjcmlwdCA9IERPTS5jcmVhdGVFbCgnc2NyaXB0Jywge1xuICAgICAgaWQ6ICd5ZXh0LW1hcC1qcycsXG4gICAgICBvbmxvYWQ6ICgpID0+IHtcbiAgICAgICAgdGhpcy5faXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICBtYXBib3hnbC5hY2Nlc3NUb2tlbiA9IHRoaXMuX2FwaUtleTtcblxuICAgICAgICBvbkxvYWQoKTtcbiAgICAgIH0sXG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIHNyYzogJ2h0dHBzOi8vYXBpLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL3YwLjQ0LjEvbWFwYm94LWdsLmpzJ1xuICAgIH0pO1xuXG4gICAgbGV0IGNzcyA9IERPTS5jcmVhdGVFbCgnbGluaycsIHtcbiAgICAgIGlkOiAneWV4dC1tYXAtY3NzJyxcbiAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vYXBpLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL3YwLjQ0LjEvbWFwYm94LWdsLmNzcydcbiAgICB9KTtcblxuICAgIERPTS5hcHBlbmQoJ2JvZHknLCBjc3MpO1xuICAgIERPTS5hcHBlbmQoJ2JvZHknLCBzY3JpcHQpO1xuICB9XG5cbiAgZ2VuZXJhdGVTdGF0aWMgKG1hcERhdGEpIHtcbiAgICBsZXQgbWFwYm94TWFwTWFya2VyQ29uZmlncyA9IE1hcEJveE1hcmtlckNvbmZpZy5mcm9tKFxuICAgICAgbWFwRGF0YS5tYXBNYXJrZXJzLFxuICAgICAgdGhpcy5fcGluQ29uZmlnXG4gICAgKTtcblxuICAgIGxldCBjZW50ZXIgPSBtYXBEYXRhLm1hcENlbnRlcjtcbiAgICBsZXQgd2lkdGggPSB0aGlzLl93aWR0aCB8fCA2MDA7XG4gICAgbGV0IGhlaWdodCA9IHRoaXMuX2hlaWdodCB8fCAyMDA7XG4gICAgbGV0IHpvb20gPSB0aGlzLl96b29tIHx8IDk7XG5cbiAgICBsZXQgZW5jb2RlZE1hcmtlcnMgPSBNYXBCb3hNYXJrZXJDb25maWcuc2VyaWFsaXplKG1hcGJveE1hcE1hcmtlckNvbmZpZ3MpO1xuICAgIHJldHVybiBgPGltZyBzcmM9XCJodHRwczovL2FwaS5tYXBib3guY29tL3N0eWxlcy92MS9tYXBib3gvc3RyZWV0cy12MTEvc3RhdGljLyR7ZW5jb2RlZE1hcmtlcnN9LyR7Y2VudGVyLmxvbmdpdHVkZX0sJHtjZW50ZXIubGF0aXR1ZGV9LCR7em9vbX0vYXV0by8ke3dpZHRofXgke2hlaWdodH0/YWNjZXNzX3Rva2VuPSR7dGhpcy5fYXBpS2V5fVwiPmA7XG4gIH1cblxuICBpbml0IChlbCwgbWFwRGF0YSkge1xuICAgIGlmICghbWFwRGF0YSB8fCBtYXBEYXRhLm1hcE1hcmtlcnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHRoaXMuX21hcCA9IG51bGw7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBsZXQgY29udGFpbmVyID0gRE9NLnF1ZXJ5KGVsKTtcbiAgICBET00uY3NzKGNvbnRhaW5lciwge1xuICAgICAgd2lkdGg6IHRoaXMuX3dpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLl9oZWlnaHRcbiAgICB9KTtcblxuICAgIHRoaXMuX21hcCA9IG5ldyBtYXBib3hnbC5NYXAoe1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICB6b29tOiB0aGlzLl96b29tLFxuICAgICAgc3R5bGU6ICdtYXBib3g6Ly9zdHlsZXMvbWFwYm94L3N0cmVldHMtdjknLFxuICAgICAgY2VudGVyOiBbbWFwRGF0YS5tYXBDZW50ZXIubG9uZ2l0dWRlLCBtYXBEYXRhLm1hcENlbnRlci5sYXRpdHVkZV1cbiAgICB9KTtcblxuICAgIGNvbnN0IG1hcGJveE1hcE1hcmtlckNvbmZpZ3MgPSBNYXBCb3hNYXJrZXJDb25maWcuZnJvbShcbiAgICAgIG1hcERhdGEubWFwTWFya2VycyxcbiAgICAgIHRoaXMuX3BpbkNvbmZpZyxcbiAgICAgIHRoaXMuX21hcCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcGJveE1hcE1hcmtlckNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB3cmFwcGVyID0gbWFwYm94TWFwTWFya2VyQ29uZmlnc1tpXS53cmFwcGVyO1xuICAgICAgbGV0IGNvb3JkcyA9IG5ldyBtYXBib3hnbC5MbmdMYXQoXG4gICAgICAgIG1hcGJveE1hcE1hcmtlckNvbmZpZ3NbaV0ucG9zaXRpb24ubG9uZ2l0dWRlLFxuICAgICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzW2ldLnBvc2l0aW9uLmxhdGl0dWRlKTtcbiAgICAgIGxldCBtYXJrZXIgPSBuZXcgbWFwYm94Z2wuTWFya2VyKHdyYXBwZXIpLnNldExuZ0xhdChjb29yZHMpO1xuICAgICAgbWFya2VyLmFkZFRvKHRoaXMuX21hcCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXBCb3hNYXJrZXJDb25maWcge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBtYXBib3ggbWFwLCB0aGF0IHRoZSBtYXJrZXIgaXMgYXBwZW5kZWQgdG9cbiAgICAgKiBAdHlwZSB7TWFwQm94fVxuICAgICAqL1xuICAgIHRoaXMubWFwID0gb3B0cy5tYXAgfHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBtYXJrZXIgKGxhdC9sbmcpXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLnBvc2l0aW9uID0gb3B0cy5wb3NpdGlvbiB8fCB7XG4gICAgICBsYXRpdHVkZTogdW5kZWZpbmVkLFxuICAgICAgbG9uZ2l0dWRlOiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGh0bWwgZWxlbWVudCB0byBiZSB1c2VkIGFzIHRoZSBtYXAgbWFya2VyXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLndyYXBwZXIgPSBvcHRzLndyYXBwZXIgfHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIG9mIHRoZSBtYXJrZXIgdG8gdXNlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmxhYmVsID0gb3B0cy5sYWJlbCB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdXJsIG9mIHRoZSBwaW4gZm9yIHRoZSBzdGF0aWMgbWFwXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnN0YXRpY01hcFBpbiA9IG9wdHMuc3RhdGljTWFwUGluIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGFuIGFycmF5IG9mIG1hcmtlciBjb25maWdzXG4gICAqIEBwYXJhbSB7TWFwQm94TWFya2VyQ29uZmlnW119IG1hcGJveE1hcE1hcmtlckNvbmZpZ3NcbiAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZSAobWFwYm94TWFwTWFya2VyQ29uZmlncykge1xuICAgIGxldCBzZXJpYWxpemVkTWFya2VycyA9IFtdO1xuICAgIG1hcGJveE1hcE1hcmtlckNvbmZpZ3MuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBpZiAobWFya2VyLnN0YXRpY01hcFBpbikge1xuICAgICAgICBzZXJpYWxpemVkTWFya2Vycy5wdXNoKGB1cmwtJHttYXJrZXIuc3RhdGljTWFwUGlufSgke21hcmtlci5wb3NpdGlvbi5sb25naXR1ZGV9LCR7bWFya2VyLnBvc2l0aW9uLmxhdGl0dWRlfSlgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlcmlhbGl6ZWRNYXJrZXJzLnB1c2goYHBpbi1zLSR7bWFya2VyLmxhYmVsfSgke21hcmtlci5wb3NpdGlvbi5sb25naXR1ZGV9LCR7bWFya2VyLnBvc2l0aW9uLmxhdGl0dWRlfSlgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2VyaWFsaXplZE1hcmtlcnMuam9pbignLCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBzdG9yYWdlIGRhdGEgbW9kZWwgb2YgbWFya2VycyBpbnRvIEdvb2dsZUFQSU1hcmtlclxuICAgKiBAcGFyYW0ge01hcEJveH0gQSByZWZlcmVuY2UgdG8gdGhlIGdvb2dsZSBtYXAgdG8gYXBwbHkgdGhlIG1hcmtlciB0b1xuICAgKiBAcGFyYW0ge29iamVjdFtdfSBtYXJrZXJzIFRoZSBkYXRhIG9mIHRoZSBtYXJrZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IHBpbkNvbmZpZyBUaGUgY29uZmlndXJhdGlvbiB0byBhcHBseSB0byB0aGUgbWFya2VyXG4gICAqIEByZXR1cm5zIHtNYXBCb3hNYXJrZXJDb25maWdbXX1cbiAgICovXG4gIHN0YXRpYyBmcm9tIChtYXJrZXJzLCBwaW5Db25maWcsIG1hcCkge1xuICAgIGxldCBtYXBib3hNYXBNYXJrZXJDb25maWdzID0gW107XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1hcmtlcnMpKSB7XG4gICAgICBtYXJrZXJzID0gW21hcmtlcnNdO1xuICAgIH1cblxuICAgIG1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICAvLyBTdXBwb3J0IGNvbmZpZ3VyYXRpb24gYXMgYSBmdW5jdGlvblxuICAgICAgbGV0IHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZztcbiAgICAgIGlmICh0eXBlb2YgcGluQ29uZmlnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBpbkNvbmZpZ09iaiA9IHBpbkNvbmZpZyhcbiAgICAgICAgICBtYXJrZXIuaXRlbSxcbiAgICAgICAgICBNYXBQcm92aWRlci5ERUZBVUxUX1BJTl9DT05GSUcsXG4gICAgICAgICAgbWFya2VyKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgd3JhcHBlciA9IHBpbkNvbmZpZ09iai53cmFwcGVyID8gcGluQ29uZmlnT2JqLndyYXBwZXIgOiBudWxsO1xuICAgICAgY29uc3Qgc3RhdGljTWFwUGluID0gcGluQ29uZmlnT2JqLnN0YXRpY01hcFBpbiA/IHBpbkNvbmZpZ09iai5zdGF0aWNNYXBQaW4gOiBudWxsO1xuXG4gICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzLnB1c2goXG4gICAgICAgIG5ldyBNYXBCb3hNYXJrZXJDb25maWcoe1xuICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICBsYXRpdHVkZTogbWFya2VyLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiBtYXJrZXIubG9uZ2l0dWRlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB3cmFwcGVyOiB3cmFwcGVyLFxuICAgICAgICAgIGxhYmVsOiBtYXJrZXIubGFiZWwsXG4gICAgICAgICAgc3RhdGljTWFwUGluOiBzdGF0aWNNYXBQaW5cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWFwYm94TWFwTWFya2VyQ29uZmlncztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTWFwQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuaW1wb3J0IEdvb2dsZU1hcFByb3ZpZGVyIGZyb20gJy4vcHJvdmlkZXJzL2dvb2dsZW1hcHByb3ZpZGVyJztcbmltcG9ydCBNYXBCb3hNYXBQcm92aWRlciBmcm9tICcuL3Byb3ZpZGVycy9tYXBib3htYXBwcm92aWRlcic7XG5cbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG5jb25zdCBQcm92aWRlclR5cGVzID0ge1xuICAnZ29vZ2xlJzogR29vZ2xlTWFwUHJvdmlkZXIsXG4gICdtYXBib3gnOiBNYXBCb3hNYXBQcm92aWRlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogQmluZCB0aGlzIGNvbXBvbmVudCB0byBsaXN0ZW4gdG8gdGhlIHN0b3JhZ2UgYmFzZWQgb24gdGhpcyBrZXlcbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUztcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IHRlbXBsYXRlIHRvIHVzZSB0byByZW5kZXIgdGhpcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncmVzdWx0cy9tYXAnO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWxpYXNlZCB1c2VkIHRvIGRldGVybWluZSB0aGUgdHlwZSBvZiBtYXAgcHJvdmlkZXIgdG8gdXNlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9tYXBQcm92aWRlciA9IG9wdHMubWFwUHJvdmlkZXI7XG4gICAgaWYgKCF0aGlzLl9tYXBQcm92aWRlciB8fCAhKHRoaXMuX21hcFByb3ZpZGVyLnRvTG93ZXJDYXNlKCkgaW4gUHJvdmlkZXJUeXBlcykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWFwQ29tcG9uZW50OiBJbnZhbGlkIE1hcCBQcm92aWRlcjsgbXVzdCBiZSBgZ29vZ2xlYCBvciBgbWFwQm94YCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIGluZGljYXRpb24gb2Ygd2hldGhlciBvciBub3QgdG8gdXNlIGEgc3RhdGljIG9yIGR5bmFtaWMgbWFwXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5faXNTdGF0aWMgPSBvcHRzLmlzU3RhdGljIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gYW4gaW5zdGFuY2Ugb2YgdGhlIHtNYXBQcm92aWRlcn0gdGhhdCdzIGNvbnN0cnVjdGVkXG4gICAgICogQHR5cGUge01hcFByb3ZpZGVyfVxuICAgICAqL1xuICAgIHRoaXMuX21hcCA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTWFwJztcbiAgfVxuXG4gIC8vIFRPRE8oYmlsbHkpIE1ha2UgUHJvdmlkZXJUeXBlcyBhIGZhY3RvcnkgY2xhc3NcbiAgZ2V0UHJvdmlkZXJJbnN0YW5jZSAodHlwZSkge1xuICAgIHJldHVybiBuZXcgUHJvdmlkZXJUeXBlc1t0eXBlLnRvTG93ZXJDYXNlKCldKHRoaXMuX29wdHMpO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIHRoaXMuX21hcCA9IHRoaXMuZ2V0UHJvdmlkZXJJbnN0YW5jZSh0aGlzLl9tYXBQcm92aWRlcik7XG4gICAgbGV0IG1hcERhdGEgPSB0aGlzLmdldFN0YXRlKCdtYXAnKTtcbiAgICBpZiAobWFwRGF0YSA9PT0gdW5kZWZpbmVkICYmIHRoaXMuX2lzU3RhdGljKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTdGF0aWMpIHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIFRoZSBleGlzdGluZyB0ZW1wbGF0ZSBzaG91bGQganVzdCB0YWtlIGluIHRoZSBtYXAgYGltZ1VSTGAgYXMgZGF0YVxuICAgICAgLy8gSW5zdGVhZCBvZiBvdmVycmlkaW5nIHRoZSB0ZW1wbGF0ZSBsaWtlIHNvLCBidXQgTkJEIGZvciBub3cuXG4gICAgICB0aGlzLnNldFRlbXBsYXRlKHRoaXMuX21hcC5nZW5lcmF0ZVN0YXRpYyhtYXBEYXRhKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLl9tYXAubG9hZEpTKCk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICB0aGlzLl9tYXAub25Mb2FkZWQoKCkgPT4ge1xuICAgICAgdGhpcy5fbWFwLmluaXQodGhpcy5fY29udGFpbmVyLCB0aGlzLmdldFN0YXRlKCdtYXAnKSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSwgdmFsKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKGRhdGEsIHZhbCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlc3VsdHNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL2xvY2F0aW9ucmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Blb3BsZXJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBNYXBDb21wb25lbnQgZnJvbSAnLi4vbWFwL21hcGNvbXBvbmVudCc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuY29uc3QgUmVzdWx0VHlwZSA9IHtcbiAgRVZFTlQ6ICdldmVudCcsXG4gIExPQ0FUSU9OOiAnbG9jYXRpb24nLFxuICBQRU9QTEU6ICdwZW9wbGUnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHRzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFM7XG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3Jlc3VsdHMvcmVzdWx0cyc7XG4gICAgdGhpcy5saW1pdCA9IG9wdHMubGltaXQgfHwgNTtcbiAgICB0aGlzLl9pdGVtQ29uZmlnID0ge1xuICAgICAgZ2xvYmFsOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH0sXG4gICAgICBbRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlXToge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9LFxuICAgICAgW0xvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZV06IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIFtQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlXToge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChvcHRzLnJlbmRlckl0ZW0gPT09IHVuZGVmaW5lZCAmJiBvcHRzLl9wYXJlbnRPcHRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdHMucmVuZGVySXRlbSA9IG9wdHMuX3BhcmVudE9wdHMucmVuZGVySXRlbTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5pdGVtVGVtcGxhdGUgPT09IHVuZGVmaW5lZCAmJiBvcHRzLl9wYXJlbnRPcHRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdHMuaXRlbVRlbXBsYXRlID0gb3B0cy5fcGFyZW50T3B0cy5pdGVtVGVtcGxhdGU7XG4gICAgfVxuXG4gICAgdGhpcy5jb25maWd1cmVJdGVtKHtcbiAgICAgIHJlbmRlcjogb3B0cy5yZW5kZXJJdGVtLFxuICAgICAgdGVtcGxhdGU6IG9wdHMuaXRlbVRlbXBsYXRlXG4gICAgfSk7XG4gIH1cblxuICBtb3VudCAoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZ2V0U3RhdGUoKSkubGVuZ3RoID4gMCkge1xuICAgICAgc3VwZXIubW91bnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZHVwbGljYXRlc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBpbmNsdWRlTWFwOiB0aGlzLl9vcHRzLmluY2x1ZGVNYXAsXG4gICAgICBtYXBDb25maWc6IHRoaXMuX29wdHMubWFwQ29uZmlnXG4gICAgfSksIHZhbCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnVmVydGljYWxSZXN1bHRzJztcbiAgfVxuXG4gIGNvbmZpZ3VyZUl0ZW0gKGNvbmZpZykge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5faXRlbUNvbmZpZy5nbG9iYWwucmVuZGVyID0gY29uZmlnLnJlbmRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbmZpZy5yZW5kZXIpIHtcbiAgICAgICAgdGhpcy5zZXRJdGVtUmVuZGVyKGtleSwgY29uZmlnLnJlbmRlcltrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2l0ZW1Db25maWcuZ2xvYmFsLnRlbXBsYXRlID0gY29uZmlnLnRlbXBsYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29uZmlnLnRlbXBsYXRlKSB7XG4gICAgICAgIHRoaXMuc2V0SXRlbVRlbXBsYXRlKGtleSwgY29uZmlnLnRlbXBsYXRlW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldEl0ZW1UZW1wbGF0ZSAodHlwZSwgdGVtcGxhdGUpIHtcbiAgICBsZXQgY2xhenogPSB0aGlzLmdldEl0ZW1Db21wb25lbnQodHlwZSk7XG4gICAgdGhpcy5faXRlbUNvbmZpZ1tjbGF6ei50eXBlXS50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICB9XG5cbiAgc2V0SXRlbVJlbmRlciAodHlwZSwgcmVuZGVyKSB7XG4gICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KHR5cGUpO1xuICAgIHRoaXMuX2l0ZW1Db25maWdbY2xhenoudHlwZV0ucmVuZGVyID0gcmVuZGVyO1xuICB9XG5cbiAgZ2V0SXRlbUNvbXBvbmVudCAodHlwZSkge1xuICAgIGxldCBjb21wID0gUmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFJlc3VsdFR5cGUuRVZFTlQ6XG4gICAgICAgIGNvbXAgPSBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUmVzdWx0VHlwZS5MT0NBVElPTjpcbiAgICAgICAgY29tcCA9IExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSZXN1bHRUeXBlLlBFT1BMRTpcbiAgICAgICAgY29tcCA9IFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcDtcbiAgfVxuXG4gIGFkZENoaWxkIChkYXRhLCB0eXBlLCBvcHRzKSB7XG4gICAgLy8gVE9ETyhiaWxseSkgUmVmYWN0b3IgdGhlIHdheSBjb25maWd1cmF0aW9uIGFuZCBkYXRhIGZsb3dzXG4gICAgLy8gdGhyb3VnaCB0b3AgbGV2ZWwgY29tcG9uZW50cyB0byBjaGlsZCBjb21wb25lbnRzLlxuICAgIGlmICh0eXBlID09PSBSZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlKSB7XG4gICAgICBsZXQgY2xhenogPSB0aGlzLmdldEl0ZW1Db21wb25lbnQoZGF0YS50eXBlKTtcbiAgICAgIGlmIChjbGF6eikge1xuICAgICAgICB0eXBlID0gY2xhenoudHlwZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IE1hcENvbXBvbmVudC50eXBlKSB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICBtYXA6IGRhdGFcbiAgICAgIH07XG4gICAgICBjb25zdCBuZXdPcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fb3B0cy5tYXBDb25maWcsIG9wdHMpO1xuICAgICAgcmV0dXJuIHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIG5ld09wdHMpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHRoZSBwcm9wZXIgaXRlbSByZW5kZXJzIHRvIHRoZSB0aGUgY29tcG9uZW50c1xuICAgIC8vIGhhdmUganVzdCBiZWVuIGNvbnN0cnVjdGVkLiBQcmlvcml0aXplIGdsb2JhbCBvdmVyIGluZGl2aWR1YWwgaXRlbXMuXG4gICAgbGV0IGNvbXAgPSBzdXBlci5hZGRDaGlsZChkYXRhLCB0eXBlLCBvcHRzKTtcbiAgICBsZXQgZ2xvYmFsQ29uZmlnID0gdGhpcy5faXRlbUNvbmZpZy5nbG9iYWw7XG4gICAgbGV0IGl0ZW1Db25maWcgPSB0aGlzLl9pdGVtQ29uZmlnW2NvbXAudHlwZV07XG4gICAgbGV0IGhhc0dsb2JhbFJlbmRlciA9IHR5cGVvZiBnbG9iYWxDb25maWcucmVuZGVyID09PSAnZnVuY3Rpb24nO1xuICAgIGxldCBoYXNHbG9iYWxUZW1wbGF0ZSA9IHR5cGVvZiBnbG9iYWxDb25maWcudGVtcGxhdGUgPT09ICdzdHJpbmcnO1xuXG4gICAgaWYgKGhhc0dsb2JhbFJlbmRlcikge1xuICAgICAgY29tcC5zZXRSZW5kZXIoZ2xvYmFsQ29uZmlnLnJlbmRlcik7XG4gICAgfVxuXG4gICAgaWYgKGhhc0dsb2JhbFRlbXBsYXRlKSB7XG4gICAgICBjb21wLnNldFRlbXBsYXRlKGdsb2JhbENvbmZpZy50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKCFpdGVtQ29uZmlnKSB7XG4gICAgICByZXR1cm4gY29tcDtcbiAgICB9XG5cbiAgICBpZiAoIWhhc0dsb2JhbFJlbmRlciAmJiBpdGVtQ29uZmlnLnJlbmRlcikge1xuICAgICAgY29tcC5zZXRSZW5kZXIoaXRlbUNvbmZpZy5yZW5kZXIpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHRlbXBsYXRlIHNwZWNpZmljIHNpdHVhdGlvblxuICAgIGlmICghaGFzR2xvYmFsVGVtcGxhdGUgJiYgaXRlbUNvbmZpZy50ZW1wbGF0ZSkge1xuICAgICAgY29tcC5zZXRUZW1wbGF0ZShpdGVtQ29uZmlnLnRlbXBsYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXA7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFM7XG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3Jlc3VsdHMvdW5pdmVyc2FscmVzdWx0cyc7XG4gICAgdGhpcy5fbGltaXQgPSBvcHRzLmxpbWl0IHx8IDEwO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1VuaXZlcnNhbFJlc3VsdHMnO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpbml0IChvcHRzKSB7XG4gICAgc3VwZXIuaW5pdChvcHRzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZENoaWxkIChkYXRhID0ge30sIHR5cGUpIHtcbiAgICBsZXQgb3B0cyA9IHRoaXMuZ2V0Q2hpbGRDb25maWcoW2RhdGFbJ3ZlcnRpY2FsQ29uZmlnSWQnXV0pO1xuICAgIHJldHVybiBzdXBlci5hZGRDaGlsZChkYXRhLCB0eXBlLCBvcHRzKTtcbiAgfVxuXG4gIGdldENoaWxkQ29uZmlnIChjb25maWdJZCkge1xuICAgIGxldCBjb25maWcgPSB0aGlzLl9vcHRzLmNvbmZpZztcbiAgICBpZiAoY29uZmlnID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX29wdHNbJ2NvbmZpZyddW2NvbmZpZ0lkXSB8fCB0aGlzLl9vcHRzWydjb25maWcnXTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBTZWFyY2hQYXJhbXMgZnJvbSAnLi4vLi4vZG9tL3NlYXJjaHBhcmFtcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUUztcblxuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdxdWVzdGlvbnMvc3VibWlzc2lvbic7XG5cbiAgICAvKipcbiAgICAgKiBRdWVzdGlvbiBzdWJtaXNzaW9uIGlzIGJhc2VkIG9uIGEgZm9ybSBhcyBjb250ZXh0LlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBuYXRpdmUgZm9ybSBub2RlIHdpdGhpbiBjb250YWluZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9mb3JtRWwgPSBvcHRzLmZvcm1TZWxlY3RvciB8fCAnZm9ybSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgZS1tYWlsIGFkZHJlc3MgaW5wdXRcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gYEVtYWlsIEFkZHJlc3NgXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9lbWFpbExhYmVsID0gb3B0cy5lbWFpbExhYmVsIHx8ICcqRW1haWwgQWRkcmVzczonO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIG5hbWUgaW5wdXRcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gYE5hbWVgXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9uYW1lTGFiZWwgPSBvcHRzLm5hbWVMYWJlbCB8fCAnTmFtZTonO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIFF1ZXN0aW9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIGBXaGF0IGlzIHlvdXIgcXVlc3Rpb24/YFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fcXVlc3Rpb25MYWJlbCA9IG9wdHMucXVlc3Rpb25MYWJlbCB8fCAnKldoYXQgaXMgeW91ciBxdWVzdGlvbj8nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIFByaXZhY3kgUG9saWN5XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIGBXaGF0IGlzIHlvdXIgcXVlc3Rpb24/YFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fcHJpdmFjeVBvbGljeUxhYmVsID0gb3B0cy5wcml2YWN5UG9saWN5TGFiZWwgfHwgJ0kgYWdyZWUgdG8gb3VyIFByaXZhY3kgUG9saWN5Oic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgU3VibWl0IGJ1dHRvblxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBgU3VibWl0P2BcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2J1dHRvbkxhYmVsID0gb3B0cy5idXR0b25MYWJlbCB8fCAnU3VibWl0JztcbiAgfVxuXG4gIGJlZm9yZU1vdW50ICgpIHtcbiAgICAvLyBPbmx5IG1vdW50IG91ciBjb21wb25lbnQgaWYgdGhlIHF1ZXJ5IGhhcyBiZWVuIHRyaWdnZXJlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0aGlzLmdldFN0YXRlKCdoYXNRdWVyaWVkJykgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIHRoaXMuaW5pdFN1Ym1pdCh0aGlzLl9mb3JtRWwpO1xuICB9XG5cbiAgaW5pdFN1Ym1pdCAoZm9ybVNlbGVjdG9yKSB7XG4gICAgdGhpcy5fZm9ybUVsID0gZm9ybVNlbGVjdG9yO1xuXG4gICAgbGV0IGZvcm0gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9mb3JtRWwpO1xuXG4gICAgRE9NLm9uKGZvcm0sICdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gVE9ETyhiaWxseSkgU2VyaWFsaXplIGZvcm1cbiAgICAgIC8vIHRoaXMuY29yZS5zdWJtaXRRdWVzdGlvbihmb3JtKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdRQVN1Ym1pc3Npb24nO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIC8vIFNpbmNlIHdlJ3JlIGJpbmRpbmcgdG8gc2VhcmNoIHJlc3VsdHMsXG4gICAgLy8gYW5kIHdlIG9ubHkgd2FudCB0byBzaG93IHRoZSBRQSBzdWJtaXNzaW9uXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKHtcbiAgICAgIGhhc1F1ZXJpZWQ6IGRhdGEuc2VjdGlvbnMgIT09IHVuZGVmaW5lZCxcbiAgICAgIGVtYWlsTGFiZWw6IHRoaXMuX2VtYWlsTGFiZWwsXG4gICAgICBuYW1lTGFiZWw6IHRoaXMuX25hbWVMYWJlbCxcbiAgICAgIHF1ZXN0aW9uTGFiZWw6IHRoaXMuX3F1ZXN0aW9uTGFiZWwsXG4gICAgICBwcml2YWN5UG9saWN5TGFiZWw6IHRoaXMuX3ByaXZhY3lQb2xpY3lMYWJlbCxcbiAgICAgIGJ1dHRvbkxhYmVsOiB0aGlzLl9idXR0b25MYWJlbCxcbiAgICAgIHF1ZXN0aW9uOiBuZXcgU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKS5nZXQoJ3F1ZXJ5JylcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi9jb21wb25lbnRtYW5hZ2VyJztcblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XG5cbmltcG9ydCBOYXZpZ2F0aW9uQ29tcG9uZW50IGZyb20gJy4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uY29tcG9uZW50JztcblxuaW1wb3J0IFNlYXJjaENvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9zZWFyY2hjb21wb25lbnQnO1xuaW1wb3J0IEZpbHRlclNlYXJjaENvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9maWx0ZXJzZWFyY2hjb21wb25lbnQnO1xuaW1wb3J0IEF1dG9Db21wbGV0ZUNvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9hdXRvY29tcGxldGVjb21wb25lbnQnO1xuXG5pbXBvcnQgRmlsdGVyT3B0aW9uc0NvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZmlsdGVyb3B0aW9uc2NvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyQm94Q29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9maWx0ZXJib3hjb21wb25lbnQnO1xuXG5pbXBvcnQgRGlyZWN0QW5zd2VyQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9kaXJlY3RhbnN3ZXJjb21wb25lbnQnO1xuaW1wb3J0IFJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Jlc3VsdHNjb21wb25lbnQnO1xuaW1wb3J0IFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHNjb21wb25lbnQnO1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcGVvcGxlcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5pbXBvcnQgTWFwQ29tcG9uZW50IGZyb20gJy4vbWFwL21hcGNvbXBvbmVudCc7XG5cbmltcG9ydCBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgZnJvbSAnLi9xdWVzdGlvbnMvcXVlc3Rpb25zdWJtaXNzaW9uY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9NQU5BR0VSID0gbmV3IENvbXBvbmVudE1hbmFnZXIoKVxuLy8gQ29yZSBDb21wb25lbnRcbiAgLnJlZ2lzdGVyKENvbXBvbmVudClcblxuLy8gTmF2aWdhdGlvbiBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihOYXZpZ2F0aW9uQ29tcG9uZW50KVxuXG4vLyBTZWFyY2ggQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoU2VhcmNoQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRmlsdGVyU2VhcmNoQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoQXV0b0NvbXBsZXRlQ29tcG9uZW50KVxuXG4vLyBGaWx0ZXIgQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoRmlsdGVyQm94Q29tcG9uZW50KVxuICAucmVnaXN0ZXIoRmlsdGVyT3B0aW9uc0NvbXBvbmVudClcblxuLy8gUmVzdWx0cyBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihEaXJlY3RBbnN3ZXJDb21wb25lbnQpXG4gIC5yZWdpc3RlcihVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoUmVzdWx0c0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFJlc3VsdHNJdGVtQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQpXG4gIC5yZWdpc3RlcihQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudClcblxuICAucmVnaXN0ZXIoTWFwQ29tcG9uZW50KVxuXG4vLyBRdWVzdGlvbnMgQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50KTtcbiIsIi8qKiBAbW9kdWxlIFRlbXBsYXRlTG9hZGVyICovXG5cbmltcG9ydCBET00gZnJvbSAnLi4vZG9tL2RvbSc7XG5pbXBvcnQgeyBDT01QSUxFRF9URU1QTEFURVNfVVJMIH0gZnJvbSAnLi4vLi4vY29yZS9jb25zdGFudHMnO1xuXG4vKipcbiAqIFRlbXBsYXRlTG9hZGVyIGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBsb2FkaW5nIHRlbXBsYXRlcyBhc3luY2hyb25vdXNseVxuICogZnJvbSB0aGUgc2VydmVyIGFuZCByZWdpc3RlcnMgdGhlbSB3aXRoIHRoZSBwcm9wZXIgcmVuZGVyZXIuXG4gKiBJdCBhbHNvIGFsbG93cyB5b3UgdG8gYXNzaWduIHRoZW0gc3luY2hyb25vdXNseS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVMb2FkZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgaWYgKCFUZW1wbGF0ZUxvYWRlci5zZXRJbnN0YW5jZSh0aGlzKSkge1xuICAgICAgcmV0dXJuIFRlbXBsYXRlTG9hZGVyLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHVybCB0byBmZXRjaCBjb21waWxlZCB0ZW1wbGF0ZXMgZnJvbVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZVVybCA9IGNvbmZpZy50ZW1wbGF0ZVVybCB8fCBDT01QSUxFRF9URU1QTEFURVNfVVJMO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVzID0ge307XG4gICAgdGhpcy5fb25Mb2FkZWQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB0aGlzLl9pbml0KCk7XG4gIH1cblxuICBzdGF0aWMgc2V0SW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIF9pbml0ICgpIHtcbiAgICB0aGlzLmZldGNoVGVtcGxhdGVzKCk7XG4gIH1cblxuICBmZXRjaFRlbXBsYXRlcyAoKSB7XG4gICAgLy8gSWYgd2UgYWxyZWFkeSBoYXZlIHRlbXBsYXRlcyBsb2FkZWQsIGRvIG5vdGhpbmdcbiAgICBsZXQgbm9kZSA9IERPTS5xdWVyeSgnI3lleHQtYW5zd2Vycy10ZW1wbGF0ZXMnKTtcbiAgICBpZiAobm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEluamVjdCBhIHNjcmlwdCB0byBmZXRjaCB0aGUgY29tcGlsZWQgdGVtcGxhdGVzLFxuICAgIC8vIHdyYXBwaW5nIGl0IGEgUHJvbWlzZSBmb3IgY2xlYW5saW5lc3NcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICAgIGlkOiAneWV4dC1hbnN3ZXJzLXRlbXBsYXRlcycsXG4gICAgICAgIG9ubG9hZDogcmVzb2x2ZSxcbiAgICAgICAgb25lcnJvcjogcmVqZWN0LFxuICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgc3JjOiB0aGlzLl90ZW1wbGF0ZVVybFxuICAgICAgfSk7XG5cbiAgICAgIERPTS5hcHBlbmQoJ2JvZHknLCBzY3JpcHQpO1xuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIEltcGxtZW5ldCBlcnJvciBoYW5kbGluZyBoZXJlIChlLmcuIHJlcXVlc3QgY291bGQgZmFpbClcbiAgICAgICAgY29uc29sZS5sb2coJ1RlbXBsYXRlcyBsb2FkZWQgc3VjY2Vzc2Z1bGx5IScpO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXIgdGhlIHRlbXBsYXRlcyBpbnRlcm5hbGx5IHNvIHRoYXQgdGhleSBjYW4gYmUgbGF0ZXIgY29uc3VtZWRcbiAgICogKGUuZy4gYnkgY29tcG9uZW50cyBhbmQgcmVuZGVyZXJzKSB3aXRoIGNvbnZpZW5pZW5jZS5cbiAgICpcbiAgICogYGZldGNoVGVtcGxhdGVzYCB3aWxsIGF1dG9tYXRpY2FsbHkgY2FsbCB0aGlzLCBwcm92aWRpbmcgdGhlIGNvbXBpbGVkIHRlbXBsYXRlcyBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICByZWdpc3RlciAodGVtcGxhdGVzKSB7XG4gICAgdGhpcy5fdGVtcGxhdGVzID0gdGVtcGxhdGVzO1xuXG4gICAgLy8gTm90aWZ5IG91ciBjb25zdW1lcnMgdGhhdCB0aGUgdGVtcGxhdGVzIGFyZSBoZXJlIDopXG4gICAgdGhpcy5fb25Mb2FkZWQodGhpcy5fdGVtcGxhdGVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9uTG9hZGVkIChjYikge1xuICAgIHRoaXMuX29uTG9hZGVkID0gY2I7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgKHRlbXBsYXRlTmFtZSkge1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXNbdGVtcGxhdGVOYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIFRoZSBpbnRlcm5hbCB0ZW1wbGF0ZSBjb2xsZWN0aW9uXG4gICAqL1xuICBnZXRUZW1wbGF0ZXMgKCkge1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbmV4cG9ydCB7IENPTVBPTkVOVF9NQU5BR0VSIH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRE9NIH0gZnJvbSAnLi9kb20vZG9tJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi9kb20vc2VhcmNocGFyYW1zJztcblxuZXhwb3J0IHsgUmVuZGVyZXJzIH0gZnJvbSAnLi9yZW5kZXJpbmcvY29uc3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZW1wbGF0ZUxvYWRlciB9IGZyb20gJy4vcmVuZGVyaW5nL3RlbXBsYXRlbG9hZGVyJztcbiIsIi8qKiBAbW9kdWxlIEVycm9yUmVwb3J0ZXIgKi9cblxuaW1wb3J0IHsgQW5zd2Vyc0Jhc2VFcnJvciB9IGZyb20gJy4vZXJyb3JzJztcblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCB7IExJQl9WRVJTSU9OIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBFcnJvclJlcG9ydGVyIGlzIHVzZWQgZm9yIHJlcG9ydGluZyBlcnJvcnMgdG8gdGhlIHNlcnZlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvclJlcG9ydGVyIHtcbiAgY29uc3RydWN0b3IgKGFwaUtleSwgYW5zd2Vyc0tleSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBhcGlLZXkgdG8gdXNlIGZvciByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuYXBpS2V5ID0gYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFuc3dlcnNLZXkgdG8gdXNlIHdoZW4gcmVwb3J0aW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmFuc3dlcnNLZXkgPSBhbnN3ZXJzS2V5O1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcG9ydCBzZW5kcyBhIG5ldHdvcmsgcmVxdWVzdCB0byB0aGUgc2VydmVyIHRvIGJlIGxvZ2dlZFxuICAgKiBAcGFyYW0ge0Fuc3dlcnNCYXNlRXJyb3J9IFRoZSBlcnJvciB0byBiZSByZXBvcnRlZFxuICAgKi9cbiAgcmVwb3J0IChlcnIpIHtcbiAgICBpZiAoIShlcnIgaW5zdGFuY2VvZiBBbnN3ZXJzQmFzZUVycm9yKSB8fCBlcnIucmVwb3J0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnIucmVwb3J0ZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvZXJyb3JzJyxcbiAgICAgIGFwaUtleTogdGhpcy5hcGlLZXksXG4gICAgICB2ZXJzaW9uOiAyMDE5MDMwMSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnZXJyb3InOiBlcnIudG9Kc29uKCksXG4gICAgICAgICdsaWJWZXJzaW9uJzogTElCX1ZFUlNJT04sXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5hbnN3ZXJzS2V5XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXF1ZXN0LmdldCgpXG4gICAgICAuY2F0Y2goY29uc29sZS5lcnIpO1xuXG4gICAgcmV0dXJuIGVycjtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuaW1wb3J0IENvcmUgZnJvbSAnLi9jb3JlL2NvcmUnO1xuXG5pbXBvcnQge1xuICBUZW1wbGF0ZUxvYWRlcixcbiAgQ09NUE9ORU5UX01BTkFHRVIsXG4gIFJlbmRlcmVycyxcbiAgRE9NXG59IGZyb20gJy4vdWkvaW5kZXgnO1xuXG5pbXBvcnQgRXJyb3JSZXBvcnRlciBmcm9tICcuL2NvcmUvZXJyb3JzL2Vycm9ycmVwb3J0ZXInO1xuaW1wb3J0IHsgQW5hbHl0aWNzUmVwb3J0ZXIgfSBmcm9tICcuL2NvcmUnO1xuXG4vKipcbiAqIFRoZSBtYWluIEFuc3dlcnMgaW50ZXJmYWNlXG4gKi9cbmNsYXNzIEFuc3dlcnMge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgaWYgKCFBbnN3ZXJzLnNldEluc3RhbmNlKHRoaXMpKSB7XG4gICAgICByZXR1cm4gQW5zd2Vycy5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIG9mIHRoZSByZW5kZXJlciB0byB1c2UgZm9yIHRoZSBjb21wb25lbnRzXG4gICAgICogVGhpcyBpcyBwcm92aWRlZCBkdXJpbmcgaW5pdGlhbGl6YXRpb24uXG4gICAgICogQHR5cGUge1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXJzLkhhbmRsZWJhcnMoKTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlclxuICAgICAqIEB0eXBlIHtDb21wb25lbnRNYW5hZ2VyfVxuICAgICAqL1xuICAgIHRoaXMuY29tcG9uZW50cyA9IENPTVBPTkVOVF9NQU5BR0VSO1xuXG4gICAgLyoqXG4gICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiB0byBpbnZva2Ugb25jZSB0aGUgbGlicmFyeSBpcyByZWFkeS5cbiAgICAgKiBUeXBpY2FsbHkgZmlyZWQgYWZ0ZXIgdGVtcGxhdGVzIGFyZSBmZXRjaGVkIGZyb20gc2VydmVyIGZvciByZW5kZXJpbmcuXG4gICAgICovXG4gICAgdGhpcy5fb25SZWFkeSA9IGZ1bmN0aW9uICgpIHt9O1xuICB9XG5cbiAgc3RhdGljIHNldEluc3RhbmNlIChpbnN0YW5jZSkge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cblxuICBpbml0IChjb25maWcpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMuc2V0Q29yZShuZXcgQ29yZSh7XG4gICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgICBhbnN3ZXJzS2V5OiBjb25maWcuYW5zd2Vyc0tleSxcbiAgICAgIGxvY2FsZTogY29uZmlnLmxvY2FsZVxuICAgIH0pKVxuICAgICAgLnNldFJlbmRlcmVyKHRoaXMucmVuZGVyZXIpO1xuXG4gICAgaWYgKGNvbmZpZy5idXNpbmVzc0lkKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNcbiAgICAgICAgLnNldEFuYWx5dGljc1JlcG9ydGVyKG5ldyBBbmFseXRpY3NSZXBvcnRlcihjb25maWcuYW5zd2Vyc0tleSwgY29uZmlnLmJ1c2luZXNzSWQsIGNvbmZpZy5hbmFseXRpY3NPcHRpb25zKSk7XG4gICAgfVxuXG4gICAgdGhpcy5fb25SZWFkeSA9IGNvbmZpZy5vblJlYWR5IHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgaWYgKGNvbmZpZy51c2VUZW1wbGF0ZXMgPT09IGZhbHNlIHx8IGNvbmZpZy50ZW1wbGF0ZUJ1bmRsZSkge1xuICAgICAgaWYgKGNvbmZpZy50ZW1wbGF0ZUJ1bmRsZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmluaXQoY29uZmlnLnRlbXBsYXRlQnVuZGxlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fb25SZWFkeSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gVGVtcGxhdGVzIGFyZSBjdXJyZW50bHkgZG93bmxvYWRlZCBzZXBhcmF0ZWx5IGZyb20gdGhlIENPUkUgYW5kIFVJIGJ1bmRsZS5cbiAgICAvLyBGdXR1cmUgZW5oYW5jZW1lbnQgaXMgdG8gc2hpcCB0aGUgY29tcG9uZW50cyB3aXRoIHRlbXBsYXRlcyBpbiBhIHNlcGFyYXRlIGJ1bmRsZS5cbiAgICB0aGlzLnRlbXBsYXRlcyA9IG5ldyBUZW1wbGF0ZUxvYWRlcih7XG4gICAgICB0ZW1wbGF0ZVVybDogY29uZmlnLnRlbXBsYXRlVXJsXG4gICAgfSkub25Mb2FkZWQoKHRlbXBsYXRlcykgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5pbml0KHRlbXBsYXRlcyk7XG5cbiAgICAgIHRoaXMuX29uUmVhZHkoKTtcbiAgICB9KTtcblxuICAgIGlmICghY29uZmlnLnN1cHByZXNzRXJyb3JSZXBvcnRzKSB7XG4gICAgICB0aGlzLl9lcnJvclJlcG9ydGVyID0gbmV3IEVycm9yUmVwb3J0ZXIoY29uZmlnLmFwaUtleSwgY29uZmlnLmFuc3dlcnNLZXkpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZSA9PiB0aGlzLl9lcnJvclJlcG9ydGVyLnJlcG9ydChlLmVycm9yKSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndW5oYW5kbGVkcmVqZWN0aW9uJywgZSA9PiB0aGlzLl9lcnJvclJlcG9ydGVyLnJlcG9ydChlLmVycm9yKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkb21SZWFkeSAoY2IpIHtcbiAgICBET00ub25SZWFkeShjYik7XG4gIH1cblxuICBvblJlYWR5IChjYikge1xuICAgIHRoaXMuX29uUmVhZHkgPSBjYjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZENvbXBvbmVudCAodHlwZSwgb3B0cykge1xuICAgIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdHMgPSB7XG4gICAgICAgIGNvbnRhaW5lcjogb3B0c1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHMuY3JlYXRlKHR5cGUsIG9wdHMpLm1vdW50KCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjcmVhdGVDb21wb25lbnQgKG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzLmNyZWF0ZSgnQ29tcG9uZW50Jywgb3B0cykubW91bnQoKTtcbiAgfVxuXG4gIHJlZ2lzdGVySGVscGVyIChuYW1lLCBjYikge1xuICAgIHRoaXMucmVuZGVyZXIucmVnaXN0ZXJIZWxwZXIobmFtZSwgY2IpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmNvbnN0IEFOU1dFUlMgPSBuZXcgQW5zd2VycygpO1xuZXhwb3J0IGRlZmF1bHQgQU5TV0VSUztcbiJdLCJuYW1lcyI6WyJNZXRob2RzIiwiR0VUIiwiUE9TVCIsIlBVVCIsIkRFTEVURSIsIkh0dHBSZXF1ZXN0ZXIiLCJ1cmwiLCJkYXRhIiwib3B0cyIsInJlcXVlc3QiLCJlbmNvZGVQYXJhbXMiLCJPYmplY3QiLCJhc3NpZ24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNyZWRlbnRpYWxzIiwidW5kZWZpbmVkIiwibWV0aG9kIiwiZmV0Y2giLCJwYXJhbXMiLCJoYXNQYXJhbSIsImluZGV4T2YiLCJzZWFyY2hRdWVyeSIsImtleSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkxJQl9WRVJTSU9OIiwiQVBJX0JBU0VfVVJMIiwiQ09NUElMRURfVEVNUExBVEVTX1VSTCIsIkFOQUxZVElDU19CQVNFX1VSTCIsIlNlYXJjaFBhcmFtcyIsIl9wYXJhbXMiLCJ3aW5kb3ciLCJVUkxTZWFyY2hQYXJhbXMiLCJwYXJzZSIsInNlYXJjaCIsInNsaWNlIiwiZW5jb2RlZFBhcmFtcyIsInNwbGl0IiwiaSIsImxlbmd0aCIsImtleVZhbCIsImRlY29kZSIsInF1ZXJ5IiwiU3RyaW5nIiwibmFtZSIsInZhbHVlIiwic3RyaW5nIiwicHVzaCIsImVuY29kZSIsImpvaW4iLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwibWF0Y2giLCJBcGlSZXF1ZXN0IiwiX3JlcXVlc3RlciIsIl9iYXNlVXJsIiwiYmFzZVVybCIsIl9lbmRwb2ludCIsImVuZHBvaW50IiwiX2FwaUtleSIsImFwaUtleSIsIl92ZXJzaW9uIiwidmVyc2lvbiIsImdldCIsInBvc3QiLCJiYXNlUGFyYW1zIiwidXJsUGFyYW1zIiwibG9jYXRpb24iLCJ0b1N0cmluZyIsImhhcyIsImtleXMiLCJmb3JFYWNoIiwiQW5zd2Vyc0Jhc2VFcnJvciIsImVycm9yQ29kZSIsIm1lc3NhZ2UiLCJib3VuZGFyeSIsImNhdXNlZEJ5IiwiZXJyb3JNZXNzYWdlIiwicmVwb3J0ZWQiLCJidWlsdGluRXJyb3IiLCJlcnJvciIsIkFuc3dlcnNCYXNpY0Vycm9yIiwic3RhY2siLCJFcnJvciIsIkFuc3dlcnNDb21wb25lbnRFcnJvciIsImNvbXBvbmVudCIsIkFuc3dlcnNFbmRwb2ludEVycm9yIiwiQW5zd2Vyc1N0b3JhZ2VFcnJvciIsInN0b3JhZ2VLZXkiLCJBbnN3ZXJzQW5hbHl0aWNzRXJyb3IiLCJldmVudCIsIlNlYXJjaEFwaSIsImFuc3dlcnNLZXkiLCJfYW5zd2Vyc0tleSIsImxvY2FsZSIsIl9sb2NhbGUiLCJxdWVyeVN0cmluZyIsInZlcnRpY2FsS2V5IiwiZmlsdGVyIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIkF1dG9Db21wbGV0ZURhdGEiLCJzZWN0aW9ucyIsInF1ZXJ5SWQiLCJmcmVlemUiLCJtYXAiLCJzIiwibGFiZWwiLCJyZXN1bHRzIiwiciIsIkF1dG9Db21wbGV0ZVJlc3VsdCIsImhpZ2hsaWdodGVkVmFsdWUiLCJoaWdobGlnaHQiLCJtYXRjaGVkU3Vic3RyaW5ncyIsInNob3J0VmFsdWUiLCJ2YWwiLCJzb3J0IiwiYSIsImIiLCJvZmZzZXQiLCJuZXh0U3RhcnQiLCJqIiwic3RhcnQiLCJOdW1iZXIiLCJlbmQiLCJBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIiLCJtb2R1bGVJZCIsImZyb20iLCJBdXRvQ29tcGxldGVBcGkiLCJpbnB1dCIsImJhcktleSIsImNhdGNoIiwidmVydGljYWwiLCJ1bml2ZXJzYWwiLCJSZXN1bHQiLCJyZXN1bHRzRGF0YSIsIlNlY3Rpb24iLCJ2ZXJ0aWNhbENvbmZpZ0lkIiwicmVzdWx0c0NvdW50IiwiZW5jb2RlZFN0YXRlIiwiYXBwbGllZFF1ZXJ5RmlsdGVycyIsIkFwcGxpZWRRdWVyeUZpbHRlciIsImZhY2V0cyIsInBhcnNlTWFwIiwidmVydGljYWxVUkwiLCJtYXBNYXJrZXJzIiwiY2VudGVyQ29vcmRpbmF0ZXMiLCJyZXN1bHQiLCJ5ZXh0RGlzcGxheUNvb3JkaW5hdGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIml0ZW0iLCJtb2R1bGVzIiwidXJscyIsIkFycmF5IiwiaXNBcnJheSIsImFwcGxpZWRRdWVyeUZpbHRlciIsImRpc3BsYXlLZXkiLCJkaXNwbGF5VmFsdWUiLCJmaWx0ZXJzIiwiVW5pdmVyc2FsUmVzdWx0cyIsIkRpcmVjdEFuc3dlciIsImRpcmVjdEFuc3dlciIsIk5hdmlnYXRpb24iLCJ0YWJPcmRlciIsIm5hdiIsIlZlcnRpY2FsUmVzdWx0cyIsIk5BVklHQVRJT04iLCJVTklWRVJTQUxfUkVTVUxUUyIsIlZFUlRJQ0FMX1JFU1VMVFMiLCJBVVRPQ09NUExFVEUiLCJESVJFQ1RfQU5TV0VSIiwiRklMVEVSIiwiUVVFUlkiLCJTZWFyY2hEYXRhVHJhbnNmb3JtZXIiLCJTdG9yYWdlS2V5cyIsIkV2ZW50RW1pdHRlciIsIl9saXN0ZW5lcnMiLCJldnQiLCJjYiIsIm9uY2UiLCJvbiIsImxpc3RlbmVycyIsImtlZXAiLCJNb2R1bGVEYXRhIiwiaWQiLCJfaWQiLCJfaGlzdG9yeSIsIl9kYXRhIiwic2V0IiwibmV3RGF0YSIsImNhcHR1cmVQcmV2aW91cyIsImVtaXQiLCJzaGlmdCIsInByZXZpb3VzIiwiX3ByZXZpb3VzIiwicG9wIiwiU3RvcmFnZSIsIl9tb2R1bGVEYXRhQ29udGFpbmVyIiwiX2Z1dHVyZUxpc3RlbmVycyIsIl9pbml0RGF0YUNvbnRhaW5lciIsIl9hcHBseUZ1dHVyZUxpc3RlbmVycyIsInJhdyIsImRhdGFLZXkiLCJzdGFydHNXaXRoIiwibW9kdWxlRGF0YSIsIm9mZiIsImZ1dHVyZXMiLCJmdXR1cmUiLCJDb3JlIiwic3RvcmFnZSIsIl9zZWFyY2hlciIsIl9hdXRvQ29tcGxldGUiLCJ2ZXJ0aWNhbFF1ZXJ5IiwidHJhbnNmb3JtVmVydGljYWwiLCJ0cmFuc2Zvcm0iLCJuYW1lc3BhY2UiLCJxdWVyeVVuaXZlcnNhbCIsInF1ZXJ5VmVydGljYWwiLCJxdWVyeUZpbHRlciIsIkNvbXBvbmVudE1hbmFnZXIiLCJzZXRJbnN0YW5jZSIsImdldEluc3RhbmNlIiwiX2NvbXBvbmVudFJlZ2lzdHJ5IiwiX2FjdGl2ZUNvbXBvbmVudHMiLCJfY29yZSIsIl9yZW5kZXJlciIsIl9hbmFseXRpY3NSZXBvcnRlciIsInJlbmRlcmVyIiwiY29yZSIsInJlcG9ydGVyIiwiY29tcG9uZW50Q2xhenoiLCJ0eXBlIiwiY29tcG9uZW50VHlwZSIsImFuYWx5dGljc1JlcG9ydGVyIiwiY29tcG9uZW50TWFuYWdlciIsImNvbXBvbmVudENsYXNzIiwiYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkIiwic29tZSIsImMiLCJpbml0Iiwic2V0U3RhdGUiLCJmaW5kIiwiaW5zdGFuY2UiLCJSZW5kZXJlciIsInRlbXBsYXRlIiwiSGFuZGxlYmFyc1JlbmRlcmVyIiwidGVtcGxhdGVzIiwiX2hhbmRsZWJhcnMiLCJfaGIiLCJfdGVtcGxhdGVzIiwiX3JlZ2lzdGVyQ3VzdG9tSGVscGVycyIsInJlZ2lzdGVySGVscGVyIiwiY29tcGlsZSIsImNvbmZpZyIsInRlbXBsYXRlTmFtZSIsImUiLCJhcmcxIiwiYXJnMiIsIm9wdGlvbnMiLCJmbiIsImludmVyc2UiLCJwaG9uZU51bWJlclN0cmluZyIsImNsZWFuZWQiLCJpbnRsQ29kZSIsImFyZ3MiLCJhcmd1bWVudHMiLCJyb290IiwidiIsIlJlbmRlcmVycyIsIlNPWSIsIkhhbmRsZWJhcnMiLCJkb2N1bWVudCIsIkRPTSIsImQiLCJwIiwiaHRtbCIsImNvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJmcmFnIiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJhcHBlbmRDaGlsZCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsInBhcmVudCIsInNlbGVjdG9yIiwiSFRNTEVsZW1lbnQiLCJXaW5kb3ciLCJIVE1MRG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsInJlYWR5U3RhdGUiLCJlbCIsIm9wdHNfZGF0YSIsIm5vZGUiLCJwcm9wcyIsImFkZENsYXNzIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiY2xhc3NOYW1lIiwiY2xhc3NlcyIsImxlbiIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsInN0eWxlcyIsInByb3AiLCJzdHlsZSIsImF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJzZXR0aW5ncyIsIkV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImN0eHQiLCJ0YXJnZXQiLCJpc0VxdWFsTm9kZSIsIm1hdGNoZXMiLCJwYXJlbnROb2RlIiwiU3RhdGUiLCJfc3RhdGUiLCJvcHRWYWwiLCJfc2V0Iiwib3B0UHJvcCIsIkFuYWx5dGljc0V2ZW50IiwiZXZlbnRUeXBlIiwidG9VcHBlckNhc2UiLCJBbmFseXRpY3NSZXBvcnRlciIsImJ1c2luZXNzSWQiLCJnbG9iYWxPcHRpb25zIiwiX2J1c2luZXNzSWQiLCJfZ2xvYmFsT3B0aW9ucyIsImFkZE9wdGlvbnMiLCJ0b0FwaUV2ZW50IiwiY29uc29sZSIsImVyciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiX29wdHMiLCJfdHlwZSIsIl9wYXJlbnQiLCJfY2hpbGRyZW4iLCJzdGF0ZSIsIl9jb250YWluZXIiLCJjcmVhdGVFbCIsImNsYXNzIiwic3Vic3RyaW5nIiwiYXBwZW5kIiwiX2NsYXNzTmFtZSIsIl9yZW5kZXIiLCJyZW5kZXIiLCJfdGVtcGxhdGUiLCJfdGVtcGxhdGVOYW1lIiwiX2lzTW91bnRlZCIsInRyYW5zZm9ybURhdGEiLCJvbkNyZWF0ZSIsIm9uTW91bnQiLCJvblVwZGF0ZSIsIl9hbmFseXRpY3NUaW1lb3V0IiwibW91bnQiLCJjaGlsZENvbXBvbmVudCIsImNyZWF0ZSIsIl9wYXJlbnRPcHRzIiwiZW1wdHkiLCJ1bk1vdW50IiwiYmVmb3JlTW91bnQiLCJhc0pTT04iLCJfb25Nb3VudCIsImRvbUhvb2tzIiwicXVlcnlBbGwiLCJfY3JlYXRlQW5hbHl0aWNzSG9vayIsImJpbmQiLCJjaGlsZCIsImJlZm9yZVJlbmRlciIsImRvbUNvbXBvbmVudHMiLCJfY3JlYXRlU3ViY29tcG9uZW50IiwiYWZ0ZXJSZW5kZXIiLCJkb21Db21wb25lbnQiLCJkYXRhc2V0IiwiY2hpbGREYXRhIiwiYWRkQ2hpbGQiLCJjaGlsZEhUTUwiLCJpc0FuYWx5dGljc0F0dGFjaGVkIiwiZXZlbnR0eXBlIiwiZXZlbnRsYWJlbCIsImV2ZW50b3B0aW9ucyIsInJlcG9ydFByb21pc2UiLCJyZXBvcnQiLCJ0YWdOYW1lIiwicHJldmVudERlZmF1bHQiLCJzZXRUaW1lb3V0IiwiaHJlZiIsIlRhYiIsImNvbmZpZ0lkIiwiaXNGaXJzdCIsImlzQWN0aXZlIiwidGFic0NvbmZpZyIsInRhYnMiLCJ0YWIiLCJOYXZpZ2F0aW9uQ29tcG9uZW50IiwiX3RhYnMiLCJfdGFiT3JkZXIiLCJnZXREZWZhdWx0VGFiT3JkZXIiLCJnZXRVcmxQYXJhbXMiLCJtZXJnZVRhYk9yZGVyIiwiZ2VuZXJhdGVUYWJVcmwiLCJpbmNsdWRlcyIsInVuc2hpZnQiLCJvdGhlclRhYk9yZGVyIiwidGFiQ29uZmlnIiwiRmlsdGVyIiwicmVzcG9uc2VGaWx0ZXIiLCJncm91cHMiLCJncm91cEZpbHRlcnMiLCJmaWVsZCIsIm9yIiwiYW5kIiwiX2Zyb21NYXRjaGVyIiwibWluIiwibWF4IiwiZ3JlYXRlclRoYW5FcXVhbCIsImxlc3NUaGFuRXF1YWwiLCJtYXRjaGVyIiwiU2VhcmNoQ29tcG9uZW50IiwiX2JhcktleSIsIl92ZXJ0aWNhbEtleSIsIl9mb3JtRWwiLCJmb3JtU2VsZWN0b3IiLCJfaW5wdXRFbCIsImlucHV0RWwiLCJ0aXRsZSIsImxhYmVsVGV4dCIsInN1Ym1pdFRleHQiLCJzdWJtaXRJY29uIiwicHJvbXB0SGVhZGVyIiwiYXV0b0ZvY3VzIiwicmVkaXJlY3RVcmwiLCJfc2VhcmNoQ29vbGRvd24iLCJzZWFyY2hDb29sZG93biIsInNldFF1ZXJ5IiwiYmluZEJyb3dzZXJIaXN0b3J5IiwiaW5pdFNlYXJjaCIsImluaXRBdXRvQ29tcGxldGUiLCJmb2N1cyIsImZvcm0iLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiaW5wdXRTZWxlY3RvciIsIm9yaWdpbmFsUXVlcnkiLCJvblN1Ym1pdCIsInRyaWdnZXIiLCJfdGhyb3R0bGVkIiwiYWxsRmlsdGVycyIsImdldEFsbCIsInRvdGFsRmlsdGVyIiwidmVydGljYWxTZWFyY2giLCJnZXRBY3RpdmVDb21wb25lbnQiLCJnZXRTdGF0ZSIsIkZpbHRlclNlYXJjaENvbXBvbmVudCIsImlucHV0S2V5Iiwic2VhcmNoVGV4dCIsInNldEZpbHRlciIsImZyb21SZXNwb25zZSIsImlzRmlsdGVyU2VhcmNoIiwib3JpZ2luYWxGaWx0ZXIiLCJfc2F2ZVF1ZXJ5QW5kRmlsdGVyIiwiS2V5cyIsIkJBQ0tTUEFDRSIsIlRBQiIsIkVOVEVSIiwiU0hJRlQiLCJDVFJMIiwiQUxUIiwiRVNDQVBFIiwiTEVGVCIsIlJJR0hUIiwiVVAiLCJET1dOIiwiTEVGVF9PU19LRVkiLCJSSUdIVF9PU19LRVkiLCJTRUxFQ1RfS0VZIiwiQXV0b0NvbXBsZXRlQ29tcG9uZW50IiwiX29yaWdpbmFsUXVlcnkiLCJfc2VjdGlvbkluZGV4IiwiX3Jlc3VsdEluZGV4IiwiX29uU3VibWl0Iiwic2VjdGlvbkluZGV4IiwicmVzdWx0SW5kZXgiLCJxdWVyeUlucHV0IiwiY2xvc2UiLCJyZXNldCIsImF1dG9Db21wbGV0ZSIsImhhbmRsZU5hdmlnYXRlUmVzdWx0cyIsImtleUNvZGUiLCJoYW5kbGVTdWJtaXRSZXN1bHQiLCJkZWxlZ2F0ZSIsInNob3J0IiwidXBkYXRlUXVlcnkiLCJoYW5kbGVUeXBpbmciLCJ1cGRhdGVTdGF0ZSIsIm9wdFZhbHVlIiwicXVlcnlFbCIsImlnbm9yZWRLZXlzIiwiYXV0b0NvbXBsZXRlRmlsdGVyIiwiYXV0b0NvbXBsZXRlVmVydGljYWwiLCJhdXRvQ29tcGxldGVVbml2ZXJzYWwiLCJTVVBQT1JURURfQ09OVFJPTFMiLCJGaWx0ZXJPcHRpb25zQ29tcG9uZW50IiwiY29udHJvbCIsIl9vcHRpb25zIiwibyIsImNoZWNrZWQiLCJfY29udHJvbCIsIl9vcHRpb25TZWxlY3RvciIsIm9wdGlvblNlbGVjdG9yIiwiX3N0b3JlT25DaGFuZ2UiLCJzdG9yZU9uQ2hhbmdlIiwiX29uQ2hhbmdlIiwib25DaGFuZ2UiLCJfbGFiZWwiLCJfdXBkYXRlT3B0aW9uIiwicGFyc2VJbnQiLCJpbmRleCIsIl9idWlsZEZpbHRlciIsImVsZW1lbnRzIiwiX2FwcGx5RmlsdGVyIiwiZXF1YWwiLCJncm91cCIsIkZpbHRlckJveENvbXBvbmVudCIsIl9maWx0ZXJDb25maWdzIiwiX3NlYXJjaE9uQ2hhbmdlIiwic2VhcmNoT25DaGFuZ2UiLCJfYXBwbHlCdXR0b25TZWxlY3RvciIsImFwcGx5QnV0dG9uU2VsZWN0b3IiLCJfZmlsdGVyQ29tcG9uZW50cyIsIl9maWx0ZXJzIiwiZmlsdGVyQ29uZmlncyIsInNob3dBcHBseUJ1dHRvbiIsImYiLCJvbkZpbHRlckNoYW5nZSIsImJ1dHRvbiIsIl9zYXZlRmlsdGVyc1RvU3RvcmFnZSIsIl9zZWFyY2giLCJ2YWxpZEZpbHRlcnMiLCJjb21iaW5lZEZpbHRlciIsIkRpcmVjdEFuc3dlckNvbXBvbmVudCIsImhhc1N0YXRlIiwiUmVzdWx0c0l0ZW1Db21wb25lbnQiLCJMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IiwiRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCIsIlBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IiwiTWFwUHJvdmlkZXIiLCJfaGVpZ2h0IiwiaGVpZ2h0IiwiX3dpZHRoIiwid2lkdGgiLCJfem9vbSIsInpvb20iLCJfbWFwIiwiX2lzTG9hZGVkIiwiX29uTG9hZGVkIiwib25Mb2FkZWQiLCJfcGluQ29uZmlnIiwicGluIiwiREVGQVVMVF9QSU5fQ09ORklHIiwiaXNMb2FkZWQiLCJtYXBEYXRhIiwiaWNvbiIsImFuY2hvciIsInN2ZyIsInNjYWxlZFNpemUiLCJsYWJlbFR5cGUiLCJHb29nbGVNYXBQcm92aWRlciIsIl9jbGllbnRJZCIsImNsaWVudElkIiwiX3NpZ25hdHVyZSIsInNpZ25hdHVyZSIsImhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMiLCJvbkxvYWQiLCJzY3JpcHQiLCJvbmxvYWQiLCJhc3luYyIsInNyYyIsImdlbmVyYXRlQ3JlZGVudGlhbHMiLCJnb29nbGVNYXBNYXJrZXJDb25maWdzIiwiR29vZ2xlTWFwTWFya2VyQ29uZmlnIiwiZW5jb2RlZE1hcmtlcnMiLCJzZXJpYWxpemUiLCJfaXNTdGF0aWMiLCJjc3MiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiYm91bmRzIiwiTGF0TG5nQm91bmRzIiwibWFya2VyIiwiTWFya2VyIiwiZXh0ZW5kIiwicG9zaXRpb24iLCJmaXRCb3VuZHMiLCJsYXQiLCJsbmciLCJzZXJpYWxpemVkTWFya2VycyIsIm1hcmtlcnMiLCJwaW5Db25maWciLCJwaW5Db25maWdPYmoiLCJQb2ludCIsIngiLCJ5IiwiU2l6ZSIsInciLCJoIiwiTWFwQm94TWFwUHJvdmlkZXIiLCJtYXBib3hnbCIsImFjY2Vzc1Rva2VuIiwicmVsIiwibWFwYm94TWFwTWFya2VyQ29uZmlncyIsIk1hcEJveE1hcmtlckNvbmZpZyIsImNlbnRlciIsIm1hcENlbnRlciIsIndyYXBwZXIiLCJjb29yZHMiLCJMbmdMYXQiLCJzZXRMbmdMYXQiLCJhZGRUbyIsInN0YXRpY01hcFBpbiIsIlByb3ZpZGVyVHlwZXMiLCJNYXBDb21wb25lbnQiLCJfbWFwUHJvdmlkZXIiLCJtYXBQcm92aWRlciIsInRvTG93ZXJDYXNlIiwiaXNTdGF0aWMiLCJnZXRQcm92aWRlckluc3RhbmNlIiwic2V0VGVtcGxhdGUiLCJnZW5lcmF0ZVN0YXRpYyIsImxvYWRKUyIsIlJlc3VsdFR5cGUiLCJFVkVOVCIsIkxPQ0FUSU9OIiwiUEVPUExFIiwiUmVzdWx0c0NvbXBvbmVudCIsImxpbWl0IiwiX2l0ZW1Db25maWciLCJnbG9iYWwiLCJyZW5kZXJJdGVtIiwiaXRlbVRlbXBsYXRlIiwiY29uZmlndXJlSXRlbSIsImluY2x1ZGVNYXAiLCJtYXBDb25maWciLCJzZXRJdGVtUmVuZGVyIiwic2V0SXRlbVRlbXBsYXRlIiwiY2xhenoiLCJnZXRJdGVtQ29tcG9uZW50IiwiY29tcCIsIm5ld09wdHMiLCJnbG9iYWxDb25maWciLCJpdGVtQ29uZmlnIiwiaGFzR2xvYmFsUmVuZGVyIiwiaGFzR2xvYmFsVGVtcGxhdGUiLCJzZXRSZW5kZXIiLCJVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50IiwiX2xpbWl0IiwiZ2V0Q2hpbGRDb25maWciLCJRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQiLCJfZW1haWxMYWJlbCIsImVtYWlsTGFiZWwiLCJfbmFtZUxhYmVsIiwibmFtZUxhYmVsIiwiX3F1ZXN0aW9uTGFiZWwiLCJxdWVzdGlvbkxhYmVsIiwiX3ByaXZhY3lQb2xpY3lMYWJlbCIsInByaXZhY3lQb2xpY3lMYWJlbCIsIl9idXR0b25MYWJlbCIsImJ1dHRvbkxhYmVsIiwiaW5pdFN1Ym1pdCIsImhhc1F1ZXJpZWQiLCJxdWVzdGlvbiIsIkNPTVBPTkVOVF9NQU5BR0VSIiwicmVnaXN0ZXIiLCJUZW1wbGF0ZUxvYWRlciIsIl90ZW1wbGF0ZVVybCIsInRlbXBsYXRlVXJsIiwiX2luaXQiLCJmZXRjaFRlbXBsYXRlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25lcnJvciIsImxvZyIsIkVycm9yUmVwb3J0ZXIiLCJ0b0pzb24iLCJBbnN3ZXJzIiwiY29tcG9uZW50cyIsIl9vblJlYWR5Iiwic2V0Q29yZSIsInNldFJlbmRlcmVyIiwic2V0QW5hbHl0aWNzUmVwb3J0ZXIiLCJhbmFseXRpY3NPcHRpb25zIiwib25SZWFkeSIsInVzZVRlbXBsYXRlcyIsInRlbXBsYXRlQnVuZGxlIiwic3VwcHJlc3NFcnJvclJlcG9ydHMiLCJfZXJyb3JSZXBvcnRlciIsIkFOU1dFUlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBOztFQUVBOztFQUVBOzs7RUFHQSxJQUFNQSxPQUFPLEdBQUc7RUFDZEMsRUFBQUEsR0FBRyxFQUFFLEtBRFM7RUFFZEMsRUFBQUEsSUFBSSxFQUFFLE1BRlE7RUFHZEMsRUFBQUEsR0FBRyxFQUFFLEtBSFM7RUFJZEMsRUFBQUEsTUFBTSxFQUFFO0VBSk0sQ0FBaEI7RUFPQTs7Ozs7O01BS3FCQzs7Ozs7Ozs7OztFQUNuQjs7Ozs7OzBCQU1LQyxLQUFLQyxNQUFNQyxNQUFNO0VBQ3BCLGFBQU8sS0FBS0MsT0FBTCxDQUFhVCxPQUFPLENBQUNDLEdBQXJCLEVBQTBCLEtBQUtTLFlBQUwsQ0FBa0JKLEdBQWxCLEVBQXVCQyxJQUF2QixDQUExQixFQUF3REMsSUFBeEQsQ0FBUDtFQUNEO0VBRUQ7Ozs7Ozs7OzsyQkFNTUYsS0FBS0MsTUFBTUMsTUFBTTtFQUNyQixhQUFPLEtBQUtDLE9B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