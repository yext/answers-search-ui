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
        var urlParams = new URL(window.location.toString()).searchParams;

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
  var parser = new DOMParser();
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
        parser = p;
      }
      /**
       * create a HTMLElement from and HTML string
       * @param {string} html The HTML to parse to a DOM node.
       * @return {HTMLElement}
       */

    }, {
      key: "create",
      value: function create(html) {
        return parser.parseFromString(html, 'text/html').body;
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
       * @returns {HTMLElement} the FIRST node it finds, if any
       */

    }, {
      key: "queryAll",
      value: function queryAll(parent, selector) {
        // Facade, shifting the selector to the parent argument if only one
        // argument is provided
        if (selector === undefined) {
          selector = parent;
          parent = document;
        }

        if (selector instanceof HTMLElement || selector instanceof HTMLDocument || selector instanceof Window) {
          return selector;
        }

        return parent.querySelectorAll(selector);
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
        return new URLSearchParams(window.location.search.substring(1));
      }
      /**
       * getDefaultTabOrder will compute the initial tab ordering based
       * on a combination of the configuration provided directly to the component
       * and the url params.
       * @param {Object[]} tabsConfig
       * @param {UrlSearchParams}
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
        return new URLSearchParams(url);
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
        return new URLSearchParams(url);
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
          question: new URLSearchParams(window.location.search.substring(1)).get('query')
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2Vycy11bWQuanMiLCJzb3VyY2VzIjpbInNyYy9jb3JlL2h0dHAvaHR0cHJlcXVlc3Rlci5qcyIsInNyYy9jb3JlL2NvbnN0YW50cy5qcyIsInNyYy9jb3JlL2h0dHAvYXBpcmVxdWVzdC5qcyIsInNyYy9jb3JlL2Vycm9ycy9lcnJvcnMuanMiLCJzcmMvY29yZS9zZWFyY2gvc2VhcmNoYXBpLmpzIiwic3JjL2NvcmUvbW9kZWxzL2F1dG9jb21wbGV0ZWRhdGEuanMiLCJzcmMvY29yZS9zZWFyY2gvYXV0b2NvbXBsZXRlZGF0YXRyYW5zZm9ybWVyLmpzIiwic3JjL2NvcmUvc2VhcmNoL2F1dG9jb21wbGV0ZWFwaS5qcyIsInNyYy9jb3JlL21vZGVscy9yZXN1bHQuanMiLCJzcmMvY29yZS9tb2RlbHMvc2VjdGlvbi5qcyIsInNyYy9jb3JlL21vZGVscy91bml2ZXJzYWxyZXN1bHRzLmpzIiwic3JjL2NvcmUvbW9kZWxzL2RpcmVjdGFuc3dlci5qcyIsInNyYy9jb3JlL21vZGVscy9uYXZpZ2F0aW9uLmpzIiwic3JjL2NvcmUvbW9kZWxzL3ZlcnRpY2FscmVzdWx0cy5qcyIsInNyYy9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMuanMiLCJzcmMvY29yZS9zZWFyY2gvc2VhcmNoZGF0YXRyYW5zZm9ybWVyLmpzIiwic3JjL2NvcmUvZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlci5qcyIsInNyYy9jb3JlL3N0b3JhZ2UvbW9kdWxlZGF0YS5qcyIsInNyYy9jb3JlL3N0b3JhZ2Uvc3RvcmFnZS5qcyIsInNyYy9jb3JlL2NvcmUuanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnRtYW5hZ2VyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9yZW5kZXJlci5qcyIsInNyYy91aS9yZW5kZXJpbmcvaGFuZGxlYmFyc3JlbmRlcmVyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9jb25zdC5qcyIsInNyYy91aS9kb20vZG9tLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc3RhdGUuanMiLCJzcmMvY29yZS9hbmFseXRpY3MvYW5hbHl0aWNzZXZlbnQuanMiLCJzcmMvY29yZS9hbmFseXRpY3MvYW5hbHl0aWNzcmVwb3J0ZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb25jb21wb25lbnQuanMiLCJzcmMvY29yZS9tb2RlbHMvZmlsdGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3NlYXJjaC9maWx0ZXJzZWFyY2hjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9zZWFyY2gvYXV0b2NvbXBsZXRlY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJvcHRpb25zY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJib3hjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL2RpcmVjdGFuc3dlcmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvcmVzdWx0c2l0ZW1jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL2xvY2F0aW9ucmVzdWx0c2l0ZW1jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL2V2ZW50cmVzdWx0c2l0ZW1jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3Blb3BsZXJlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL3Byb3ZpZGVycy9tYXBwcm92aWRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9wcm92aWRlcnMvZ29vZ2xlbWFwcHJvdmlkZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvcHJvdmlkZXJzL21hcGJveG1hcHByb3ZpZGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL21hcGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvcmVzdWx0c2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvdW5pdmVyc2FscmVzdWx0c2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3F1ZXN0aW9ucy9xdWVzdGlvbnN1Ym1pc3Npb25jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb25zdC5qcyIsInNyYy91aS9yZW5kZXJpbmcvdGVtcGxhdGVsb2FkZXIuanMiLCJzcmMvY29yZS9lcnJvcnMvZXJyb3JyZXBvcnRlci5qcyIsInNyYy9hbnN3ZXJzLXVtZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQG1vZHVsZSBIdHRwUmVxdWVzdGVyICovXG5cbi8qIGdsb2JhbCBmZXRjaCAqL1xuXG4vKipcbiAqIFR5cGVzIG9mIEhUVFAgcmVxdWVzdHNcbiAqL1xuY29uc3QgTWV0aG9kcyA9IHtcbiAgR0VUOiAnZ2V0JyxcbiAgUE9TVDogJ3Bvc3QnLFxuICBQVVQ6ICdwdXQnLFxuICBERUxFVEU6ICdkZWxldGUnXG59O1xuXG4vKipcbiAqIEh0dHBSZXF1ZXN0ZXIgaXMgYSB3cmFwcGVyIGFyb3VuZCB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uIG9mIEFKQVhcbiAqIHJlbGF0ZWQgbWF0dGVycy4gSXQncyB1c2VkIHRvIG1ha2UgYWxsIHR5cGVzIG9mIG5ldHdvcmsgcmVxdWVzdHNcbiAqIGFuZCBleHBvc2VzIGEgcHJvbWlzZSBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEh0dHBSZXF1ZXN0ZXIge1xuICAvKipcbiAgICogQ3JlYXRlIGEgR0VUIEhUVFAgcmVxdWVzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gcHJvdmlkZSAoZ2V0cyBlbmNvZGVkIGludG8gdGhlIFVSTClcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgQ29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICovXG4gIGdldCAodXJsLCBkYXRhLCBvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChNZXRob2RzLkdFVCwgdGhpcy5lbmNvZGVQYXJhbXModXJsLCBkYXRhKSwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgUE9TVCBIVFRQIHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHByb3ZpZGUgKGdldHMgZW5jb2RlZCBpbnRvIHRoZSBVUkwpXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIENvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAqL1xuICBwb3N0ICh1cmwsIGRhdGEsIG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFxuICAgICAgTWV0aG9kcy5QT1NULFxuICAgICAgdXJsLFxuICAgICAgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICBjcmVkZW50aWFsczogdW5kZWZpbmVkXG4gICAgICB9LCBvcHRzKVxuICAgICk7XG4gIH1cblxuICByZXF1ZXN0IChtZXRob2QsIHVybCwgb3B0cykge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgbWV0aG9kLFxuICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICAgIH0sIG9wdHMpKTtcbiAgfVxuXG4gIGVuY29kZVBhcmFtcyAodXJsLCBwYXJhbXMpIHtcbiAgICBsZXQgaGFzUGFyYW0gPSB1cmwuaW5kZXhPZignPycpID4gLTE7XG5cbiAgICBsZXQgc2VhcmNoUXVlcnkgPSAnJztcbiAgICBmb3IgKGxldCBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICBpZiAoIWhhc1BhcmFtKSB7XG4gICAgICAgIGhhc1BhcmFtID0gdHJ1ZTtcbiAgICAgICAgc2VhcmNoUXVlcnkgKz0gJz8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VhcmNoUXVlcnkgKz0gJyYnO1xuICAgICAgfVxuXG4gICAgICBzZWFyY2hRdWVyeSArPSBrZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gdXJsICsgc2VhcmNoUXVlcnk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbi8qKiBUaGUgY3VycmVudCBsaWIgdmVyc2lvbiwgcmVwb3J0ZWQgd2l0aCBlcnJvcnMgYW5kIGFuYWx5dGljcyAqL1xuZXhwb3J0IGNvbnN0IExJQl9WRVJTSU9OID0gJ3YwLjcuMyc7XG5cbi8qKiBUaGUgYmFzZSB1cmwgZm9yIHRoZSBhcGkgYmFja2VuZCAqL1xuZXhwb3J0IGNvbnN0IEFQSV9CQVNFX1VSTCA9ICdodHRwczovL2xpdmVhcGkueWV4dC5jb20nO1xuXG4vKiogVGhlIGRlZmF1bHQgdXJsIGZvciBjb21waWxlZCBjb21wb25lbnQgdGVtcGxhdGVzICovXG5leHBvcnQgY29uc3QgQ09NUElMRURfVEVNUExBVEVTX1VSTCA9ICdodHRwczovL2Fzc2V0cy5zaXRlc2Nkbi5uZXQvYW5zd2Vycy9hbnN3ZXJzdGVtcGxhdGVzLmNvbXBpbGVkLm1pbi5qcyc7XG5cbi8qKiBUaGUgYmFzZSB1cmwgZm9yIHRoZSBhbmFseXRpY3MgYmFja2VuZCAgKi9cbmV4cG9ydCBjb25zdCBBTkFMWVRJQ1NfQkFTRV9VUkwgPSAnaHR0cHM6Ly9yZWFsdGltZWFuYWx5dGljcy55ZXh0LmNvbSc7XG4iLCIvKiogQG1vZHVsZSBBcGlSZXF1ZXN0ICovXG5cbmltcG9ydCBIdHRwUmVxdWVzdGVyIGZyb20gJy4vaHR0cHJlcXVlc3Rlcic7XG5pbXBvcnQgeyBBUElfQkFTRV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEFwaVJlcXVlc3QgaXMgdGhlIGJhc2UgY2xhc3MgZm9yIGFsbCBBUEkgcmVxdWVzdHMuXG4gKiBJdCBkZWZpbmVzIGFsbCBvZiB0aGUgY29yZSBwcm9wZXJ0aWVzIHJlcXVpcmVkIHRvIG1ha2UgYSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaVJlcXVlc3Qge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3Rpb24gdXNlZCBmb3IgbWFraW5nIG5ldHdvcmsgcmVxdWVzdCBhbmQgaGFuZGxpbmcgZXJyb3JzXG4gICAgICogQHR5cGUge0h0dHBSZXF1ZXN0ZXJ9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9yZXF1ZXN0ZXIgPSBuZXcgSHR0cFJlcXVlc3RlcigpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhc2VVcmwgdG8gdXNlIGZvciBtYWtpbmcgYSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Jhc2VVcmwgPSBvcHRzLmJhc2VVcmwgfHwgQVBJX0JBU0VfVVJMO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGVuZHBvaW50IHRvIHVzZSBpbiB0aGUgdXJsIChhcHBlbmRlZCB0byB0aGUge2Jhc2VVcmx9KVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9lbmRwb2ludCA9IG9wdHMuZW5kcG9pbnQgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBpS2V5ID0gb3B0cy5hcGlLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBBUEkgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVyc2lvbiA9IG9wdHMudmVyc2lvbiB8fCAyMDE5MDEwMTtcblxuICAgIC8qKlxuICAgICAqIEFkZGl0aW9uYWwgZGF0YSBwYXJhbXMgdGhhdCBhcmUgc2VudCBhbG9uZyB3aXRoIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3BhcmFtcyA9IG9wdHMucGFyYW1zIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCBjcmVhdGVzIGEgbmV3IGBHRVRgIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGUgcmVxdWVzdCBjbGFzc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGdldCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3Rlci5nZXQodGhpcy5fYmFzZVVybCArIHRoaXMuX2VuZHBvaW50LCB0aGlzLnBhcmFtcyh0aGlzLl9wYXJhbXMpKTtcbiAgfVxuXG4gIHBvc3QgKG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdGVyLnBvc3QodGhpcy5fYmFzZVVybCArIHRoaXMuX2VuZHBvaW50LCB0aGlzLnBhcmFtcyh0aGlzLl9wYXJhbXMpLCBvcHRzKTtcbiAgfVxuXG4gIHBhcmFtcyAocGFyYW1zKSB7XG4gICAgdmFyIGJhc2VQYXJhbXMgPSB7XG4gICAgICAndic6IHRoaXMuX3ZlcnNpb24sXG4gICAgICAnYXBpX2tleSc6IHRoaXMuX2FwaUtleVxuICAgIH07XG5cbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpKS5zZWFyY2hQYXJhbXM7XG5cbiAgICBpZiAodXJsUGFyYW1zLmhhcygnYmV0YScpKSB7XG4gICAgICBiYXNlUGFyYW1zWydiZXRhJ10gPSB1cmxQYXJhbXMuZ2V0KCdiZXRhJyk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFueSBwYXJhbWF0ZXJzIHdob3MgdmFsdWUgaXMgYHVuZGVmaW5lZGAuXG4gICAgLy9cbiAgICAvLyBOT1RFKGJpbGx5KSBQcm9iYWJseSBiZXR0ZXIgdG8gYmUgZXhwbGljaXQgYWJvdXQgaG93IHRvIGhhbmRsZSB0aGlzIGF0IHRoZSByZXF1ZXN0IGJ1aWxkaW5nIGxldmVsLFxuICAgIC8vIGJ1dCBJIGNhbid0IHNlZSBhbnkgY2FzZXMgd2hlcmUgd2UnZCBldmVyIHdhbnQgdG8gc2VuZCAndW5kZWZpbmVkJyBhcyBhIHZhbHVlIHRvIHRoZSBzZXJ2ZXIuXG4gICAgLy8gU28gaXQncyBwcm9iYWJseSBmaW5lIHRvICdjbGVhbicgdGhlIHBhcmFtcyBvYmplY3QgaGVyZVxuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKHBhcmFtc1trZXldID09PSB1bmRlZmluZWQgfHwgcGFyYW1zW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIHBhcmFtc1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYmFzZVBhcmFtcywgcGFyYW1zIHx8IHt9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgRXJyb3JzICovXG5cbi8qKlxuICogQW5zd2Vyc0Jhc2VFcnJvciBpcyBhbiBleHRlbnNpb24gb2YgdGhlIGJhc2UgRXJyb3Igb2JqZWN0LlxuICogVGhpcyBpcyB0aGUgb2JqZWN0IHRoYXQgaXMgdXNlZCB0byB3aGVuIHJlcG9ydGluZyB0byB0aGUgc2VydmVyLlxuICogQGV4dGVuZHMgRXJyb3JcbiAqXG4gKiBFcnJvciBjb2RlcyBmYWxsIGludG8gb25lIG9mIGZvdXIgY2F0ZWdvcmllczpcbiAqIDFYWCBlcnJvcnM6IEJhc2ljIGVycm9yc1xuICogMlhYIGVycm9yczogVUkgZXJyb3JzXG4gKiAzWFggZXJyb3JzOiBFbmRwb2ludCBlcnJvcnNcbiAqIDRYWCBlcnJvcnM6IENvcmUgZXJyb3JzXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQmFzZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAoZXJyb3JDb2RlLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLmVycm9yQ29kZSA9IGVycm9yQ29kZTtcbiAgICB0aGlzLmVycm9yTWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5ib3VuZGFyeSA9IGJvdW5kYXJ5O1xuICAgIHRoaXMuY2F1c2VkQnkgPSBjYXVzZWRCeTtcbiAgICB0aGlzLnJlcG9ydGVkID0gZmFsc2U7XG4gIH1cblxuICB0b0pzb24gKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChidWlsdGluRXJyb3IsIGJvdW5kYXJ5KSB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoYnVpbHRpbkVycm9yLm1lc3NhZ2UsIGJvdW5kYXJ5KTtcbiAgICBlcnJvci5zdGFjayA9IGJ1aWx0aW5FcnJvci5zdGFjaztcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzQmFzaWNFcnJvciBpcyBhIHdyYXBwZXIgYXJvdW5kIGFsbCB0aGUgYnVpbHQtaW4gZXJyb3JzXG4gKiBlLmcuIHVuZGVmaW5lZCB2YXJpYWJsZXMsIGluY29ycmVjdCBzeW50YXgsIHR5cGVzLCBtaXNzaW5nIG1ldGhvZHMsIGV0Yy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNCYXNpY0Vycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcigxMDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzVWlFcnJvciB1c2VkIGZvciB0aGluZ3MgbGlrZSBET00gZXJyb3JzLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc1VpRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDIwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNDb21wb25lbnRFcnJvciBpcyB1c2VkIGZvciBDb21wb25lbnQgb3JpZW50ZWQgZXJyb3JzXG4gKiBlLmcuIGZhaWx1cmUgdG8gcmVuZGVyLCBvciBjYXRjaGluZyB1bmtub3ducy5cbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNDb21wb25lbnRFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgY29tcG9uZW50LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDIwMSwgbWVzc2FnZSwgY29tcG9uZW50LCBjYXVzZWRCeSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBbnN3ZXJzRW5kcG9pbnRFcnJvciByZXByZXNlbnRzIGFsbCBuZXR3b3JrIHJlbGF0ZWQgZXJyb3JzLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0VuZHBvaW50RXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDMwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNDb3JlRXJyb3IgcmVwcmVzZW50cyBlcnJvcnMgZm9yIHByZWNvbmRpdGlvbiBmYWlsdXJlcyBpbiB0aGUgY29yZSBsaWJyYXJ5XG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzQ29yZUVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcig0MDAsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSk7XG4gIH1cbn1cbi8qKlxuICogQW5zd2Vyc1N0b3JhZ2VFcnJvciByZXByZXNlbnRzIHN0b3JhZ2UgcmVsYXRlZCBlcnJvcnNcbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNTdG9yYWdlRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIHN0b3JhZ2VLZXksIGRhdGEsIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoNDAxLCBtZXNzYWdlLCAnU3RvcmFnZScsIGNhdXNlZEJ5KTtcbiAgICB0aGlzLnN0b3JhZ2VLZXkgPSBzdG9yYWdlS2V5O1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFuc3dlcnNBbmFseXRpY3NFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgZXZlbnQsIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoNDAyLCBtZXNzYWdlLCAnQW5hbHl0aWNzJywgY2F1c2VkQnkpO1xuICAgIHRoaXMuZXZlbnQgPSBldmVudDtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VhcmNoQXBpICovXG5cbmltcG9ydCBBcGlSZXF1ZXN0IGZyb20gJy4uL2h0dHAvYXBpcmVxdWVzdCc7XG5pbXBvcnQgeyBBbnN3ZXJzQmFzaWNFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvcnMnO1xuXG4vKipcbiAqIFNlYXJjaEFwaSBpcyB0aGUgQVBJIGZvciBkb2luZyB2YXJpb3VzIHR5cGVzIG9mIHNlYXJjaFxuICogb3ZlciB0aGUgbmV0d29yayAoZS5nLiB2ZXJ0aWNhbCBvciB1bml2ZXJzYWwpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaEFwaSB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgQVBJIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghb3B0cy5hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQXBpIEtleSBpcyByZXF1aXJlZCcsICdTZWFyY2gnKTtcbiAgICB9XG4gICAgdGhpcy5fYXBpS2V5ID0gb3B0cy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgQW5zd2VycyBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIW9wdHMuYW5zd2Vyc0tleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBbnN3ZXJzIEtleSBpcyByZXF1aXJlZCcsICdTZWFyY2gnKTtcbiAgICB9XG4gICAgdGhpcy5fYW5zd2Vyc0tleSA9IG9wdHMuYW5zd2Vyc0tleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBBUEkgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVyc2lvbiA9IG9wdHMudmVyc2lvbiB8fCAyMDE5MDEwMSB8fCAyMDE5MDMwMTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBsb2NhbGUgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIW9wdHMubG9jYWxlKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0xvY2FsZSBpcyByZXF1aXJlZCcsICdTZWFyY2gnKTtcbiAgICB9XG4gICAgdGhpcy5fbG9jYWxlID0gb3B0cy5sb2NhbGU7XG4gIH1cblxuICB2ZXJ0aWNhbFF1ZXJ5IChxdWVyeVN0cmluZywgdmVydGljYWxLZXksIGZpbHRlcikge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy92ZXJ0aWNhbC9xdWVyeScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogcXVlcnlTdHJpbmcsXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgICAgJ2ZpbHRlcnMnOiBmaWx0ZXIsXG4gICAgICAgICd2ZXJ0aWNhbEtleSc6IHZlcnRpY2FsS2V5LFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfVxuXG4gIHF1ZXJ5IChxdWVyeVN0cmluZykge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9xdWVyeScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogcXVlcnlTdHJpbmcsXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEF1dG9Db21wbGV0ZURhdGEgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlRGF0YSB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICB0aGlzLnNlY3Rpb25zID0gZGF0YS5zZWN0aW9ucyB8fCBbXTtcbiAgICB0aGlzLnF1ZXJ5SWQgPSBkYXRhLnF1ZXJ5SWQgfHwgJyc7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSkge1xuICAgIGxldCBzZWN0aW9ucztcbiAgICBpZiAocmVzcG9uc2Uuc2VjdGlvbnMpIHtcbiAgICAgIHNlY3Rpb25zID0gcmVzcG9uc2Uuc2VjdGlvbnMubWFwKHMgPT4gKHtcbiAgICAgICAgbGFiZWw6IHMubGFiZWwsXG4gICAgICAgIHJlc3VsdHM6IHMucmVzdWx0cy5tYXAociA9PiBuZXcgQXV0b0NvbXBsZXRlUmVzdWx0KHIpKVxuICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWN0aW9ucyA9IFt7IHJlc3VsdHM6IHJlc3BvbnNlLnJlc3VsdHMubWFwKHIgPT4gbmV3IEF1dG9Db21wbGV0ZVJlc3VsdChyKSkgfV07XG4gICAgfVxuICAgIHJldHVybiBuZXcgQXV0b0NvbXBsZXRlRGF0YSh7IHNlY3Rpb25zLCBxdWVyeUlkOiByZXNwb25zZS5xdWVyeUlkIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvQ29tcGxldGVSZXN1bHQge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgdGhpcy5maWx0ZXIgPSBkYXRhLmZpbHRlciB8fCB7fTtcbiAgICB0aGlzLmhpZ2hsaWdodGVkVmFsdWUgPSB0aGlzLmhpZ2hsaWdodChkYXRhKTtcbiAgICB0aGlzLmtleSA9IGRhdGEua2V5IHx8ICcnO1xuICAgIHRoaXMubWF0Y2hlZFN1YnN0cmluZ3MgPSBkYXRhLm1hdGNoZWRTdWJzdHJpbmdzIHx8IFtdO1xuICAgIHRoaXMudmFsdWUgPSBkYXRhLnZhbHVlIHx8ICcnO1xuICAgIHRoaXMuc2hvcnRWYWx1ZSA9IGRhdGEuc2hvcnRWYWx1ZSB8fCB0aGlzLnZhbHVlO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICAvLyBUT0RPKGpkZWxlcm1lKTogY29uc29saWRhdGUgd2l0aCBvdGhlciBoaWdobGlnaHQgZnVuY3Rpb25zXG4gIGhpZ2hsaWdodCAoZGF0YSkge1xuICAgIGNvbnN0IHsgdmFsdWUsIHNob3J0VmFsdWUsIG1hdGNoZWRTdWJzdHJpbmdzIH0gPSBkYXRhO1xuICAgIGNvbnN0IHZhbCA9IHZhbHVlIHx8IHNob3J0VmFsdWU7XG5cbiAgICBpZiAoIW1hdGNoZWRTdWJzdHJpbmdzIHx8IG1hdGNoZWRTdWJzdHJpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgb3VyIGhpZ2hsaWdodGVkIHN1YnN0cmluZ3MgYXJlIHNvcnRlZFxuICAgIG1hdGNoZWRTdWJzdHJpbmdzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChhLm9mZnNldCA8IGIub2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGEub2Zmc2V0ID4gYi5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgLy8gQnVpbGQgb3VyIG5ldyB2YWx1ZSBiYXNlZCBvbiB0aGUgaGlnaGxpZ2h0c1xuICAgIGxldCBoaWdobGlnaHRlZFZhbHVlID0gJyc7XG4gICAgbGV0IG5leHRTdGFydCA9IDA7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hdGNoZWRTdWJzdHJpbmdzLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgc3RhcnQgPSBOdW1iZXIobWF0Y2hlZFN1YnN0cmluZ3Nbal0ub2Zmc2V0KTtcbiAgICAgIGxldCBlbmQgPSBzdGFydCArIG1hdGNoZWRTdWJzdHJpbmdzW2pdLmxlbmd0aDtcblxuICAgICAgaGlnaGxpZ2h0ZWRWYWx1ZSArPSBbdmFsLnNsaWNlKG5leHRTdGFydCwgc3RhcnQpLCAnPHN0cm9uZz4nLCB2YWwuc2xpY2Uoc3RhcnQsIGVuZCksICc8L3N0cm9uZz4nXS5qb2luKCcnKTtcblxuICAgICAgaWYgKGogPT09IG1hdGNoZWRTdWJzdHJpbmdzLmxlbmd0aCAtIDEgJiYgZW5kIDwgdmFsLmxlbmd0aCkge1xuICAgICAgICBoaWdobGlnaHRlZFZhbHVlICs9IHZhbC5zbGljZShlbmQpO1xuICAgICAgfVxuXG4gICAgICBuZXh0U3RhcnQgPSBlbmQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhpZ2hsaWdodGVkVmFsdWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lciAqL1xuXG5pbXBvcnQgQXV0b0NvbXBsZXRlRGF0YSBmcm9tICcuLi9tb2RlbHMvYXV0b2NvbXBsZXRlZGF0YSc7XG5cbi8qKlxuICogQSBEYXRhIFRyYW5zZm9ybWVyIHRoYXQgdGFrZXMgdGhlIHJlc3BvbnNlIG9iamVjdCBmcm9tIGEgQXV0b0NvbXBsZXRlIHJlcXVlc3RcbiAqIEFuZCB0cmFuc2Zvcm1zIGluIHRvIGEgZnJvbnQtZW5kIG9yaWVudGVkIGRhdGEgc3RydWN0dXJlIHRoYXQgb3VyXG4gKiBjb21wb25lbnQgbGlicmFyeSBhbmQgY29yZSBzdG9yYWdlIHVuZGVyc3RhbmQuXG4gKlxuICogVE9ETyhiaWxseSkgQ3JlYXRlIG91ciBvd24gZnJvbnQtZW5kIGRhdGEgbW9kZWxzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lciB7XG4gIHN0YXRpYyBjbGVhbiAobW9kdWxlSWQsIGRhdGEpIHtcbiAgICBpZiAoZGF0YS5zZWN0aW9ucyAmJiBkYXRhLnNlY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVsZXRlIGRhdGEuc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuc2VjdGlvbnMgJiYgZGF0YS5zZWN0aW9ucy5sZW5ndGggPT09IDEgJiYgZGF0YS5zZWN0aW9uc1swXS5yZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVsZXRlIGRhdGEuc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIFttb2R1bGVJZF06IGRhdGFcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHVuaXZlcnNhbCAocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gQXV0b0NvbXBsZXRlRGF0YS5mcm9tKHJlc3BvbnNlKTtcbiAgfVxuXG4gIHN0YXRpYyBmaWx0ZXIgKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIEF1dG9Db21wbGV0ZURhdGEuZnJvbShyZXNwb25zZSk7XG4gIH1cblxuICBzdGF0aWMgdmVydGljYWwgKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIEF1dG9Db21wbGV0ZURhdGEuZnJvbShyZXNwb25zZSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEF1dG9Db21wbGV0ZUFwaSAqL1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lciBmcm9tICcuL2F1dG9jb21wbGV0ZWRhdGF0cmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBBbnN3ZXJzQmFzaWNFcnJvciwgQW5zd2Vyc0VuZHBvaW50RXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBBdXRvQ29tcGxldGVBcGkgZXhwb3NlcyBhbiBpbnRlcmZhY2UgZm9yIG5ldHdvcmsgcmVsYXRlZCBtYXR0ZXJzXG4gKiBmb3IgYWxsIHRoZSBhdXRvY29tcGxldGUgZW5kcG9pbnRzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVBcGkge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIW9wdHMuYXBpS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0FwaSBLZXkgaXMgcmVxdWlyZWQnLCAnQXV0b0NvbXBsZXRlJyk7XG4gICAgfVxuICAgIHRoaXMuX2FwaUtleSA9IG9wdHMuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIEFuc3dlcnMgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFvcHRzLmFuc3dlcnNLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQW5zd2VycyBLZXkgaXMgcmVxdWlyZWQnLCAnQXV0b0NvbXBsZXRlJyk7XG4gICAgfVxuICAgIHRoaXMuX2Fuc3dlcnNLZXkgPSBvcHRzLmFuc3dlcnNLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgQVBJIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnNpb24gPSBvcHRzLnZlcnNpb24gfHwgMjAxOTAxMDEgfHwgMjAxOTAzMDE7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbG9jYWxlIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFvcHRzLmxvY2FsZSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdMb2NhbGUgaXMgcmVxdWlyZWQnLCAnQXV0b0NvbXBsZXRlJyk7XG4gICAgfVxuICAgIHRoaXMuX2xvY2FsZSA9IG9wdHMubG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEF1dG9jb21wbGV0ZSBmaWx0ZXJzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCBUaGUgaW5wdXQgdG8gdXNlIGZvciBhdXRvIGNvbXBsZXRlXG4gICAqL1xuICBxdWVyeUZpbHRlciAoaW5wdXQsIHZlcnRpY2FsS2V5LCBiYXJLZXkpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvZmlsdGVyc2VhcmNoJyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBpbnB1dCxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgICAnZXhwZXJpZW5jZUtleSc6IHZlcnRpY2FsS2V5LFxuICAgICAgICAnaW5wdXRLZXknOiBiYXJLZXksXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIuZmlsdGVyKHJlc3BvbnNlLnJlc3BvbnNlLCBiYXJLZXkpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEFuc3dlcnNFbmRwb2ludEVycm9yKCdGaWx0ZXIgc2VhcmNoIHJlcXVlc3QgZmFpbGVkJywgJ0F1dG9Db21wbGV0ZScsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcXVlcnlWZXJ0aWNhbCAoaW5wdXQsIHZlcnRpY2FsS2V5LCBiYXJLZXkpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvYXV0b2NvbXBsZXRlJyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBpbnB1dCxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgICAnZXhwZXJpZW5jZUtleSc6IHZlcnRpY2FsS2V5LFxuICAgICAgICAnYmFyS2V5JzogYmFyS2V5LFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLnZlcnRpY2FsKHJlc3BvbnNlLnJlc3BvbnNlLCByZXF1ZXN0Ll9wYXJhbXMuYmFyS2V5KSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzRW5kcG9pbnRFcnJvcignVmVydGljYWwgc2VhcmNoIHJlcXVlc3QgZmFpbGVkJywgJ0F1dG9Db21wbGV0ZScsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcXVlcnlVbml2ZXJzYWwgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL2F1dG9jb21wbGV0ZScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogcXVlcnlTdHJpbmcsXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHF1ZXJ5U3RyaW5nKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLnVuaXZlcnNhbChyZXNwb25zZS5yZXNwb25zZSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoJ1VuaXZlcnNhbCBzZWFyY2ggcmVxdWVzdCBmYWlsZWQnLCAnQXV0b0NvbXBsZXRlJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlc3VsdCAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHQge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXN1bHRzRGF0YSBleHBlY3RlZCBmb3JtYXQ6IHsgZGF0YTogeyAuLi4gfSwgaGlnaGxpZ2h0ZWRGaWVsZHM6IHsgLi4uIH19XG4gICAqL1xuICBzdGF0aWMgZnJvbSAocmVzdWx0c0RhdGEpIHtcbiAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0c0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIFRPRE8gdXNlIHJlc3VsdERhdGEuaGlnaGxpZ2h0ZWRGaWVsZHMgdG9cbiAgICAgIC8vIHRyYW5zZm9ybSByZXN1bHREYXRhLmRhdGEgaW50byBodG1sLWZyaWVuZGx5IHN0cmluZ3MgdGhhdCBoaWdobGlnaHQgdmFsdWVzLlxuXG4gICAgICAvLyBDaGVjayBmb3IgbmV3IGRhdGEgZm9ybWF0LCBvdGhlcndpc2UgZmFsbGJhY2sgdG8gbGVnYWN5XG4gICAgICByZXN1bHRzLnB1c2gobmV3IFJlc3VsdChyZXN1bHRzRGF0YVtpXS5kYXRhIHx8IHJlc3VsdHNEYXRhW2ldKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFNlY3Rpb24gKi9cblxuaW1wb3J0IFJlc3VsdCBmcm9tICcuL3Jlc3VsdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3RvciAoZGF0YSwgdXJsKSB7XG4gICAgdGhpcy52ZXJ0aWNhbENvbmZpZ0lkID0gZGF0YS52ZXJ0aWNhbENvbmZpZ0lkIHx8IG51bGw7XG4gICAgdGhpcy5yZXN1bHRzQ291bnQgPSBkYXRhLnJlc3VsdHNDb3VudCB8fCAwO1xuICAgIHRoaXMuZW5jb2RlZFN0YXRlID0gZGF0YS5lbmNvZGVkU3RhdGUgfHwgJyc7XG4gICAgdGhpcy5hcHBsaWVkUXVlcnlGaWx0ZXJzID0gQXBwbGllZFF1ZXJ5RmlsdGVyLmZyb20oZGF0YS5hcHBsaWVkUXVlcnlGaWx0ZXJzKTtcbiAgICB0aGlzLmZhY2V0cyA9IGRhdGEuZmFjZXRzIHx8IG51bGw7XG4gICAgdGhpcy5yZXN1bHRzID0gUmVzdWx0LmZyb20oZGF0YS5yZXN1bHRzKTtcbiAgICB0aGlzLm1hcCA9IFNlY3Rpb24ucGFyc2VNYXAoZGF0YS5yZXN1bHRzKTtcbiAgICB0aGlzLnZlcnRpY2FsVVJMID0gdXJsIHx8IG51bGw7XG4gIH1cblxuICBzdGF0aWMgcGFyc2VNYXAgKHJlc3VsdHMpIHtcbiAgICBsZXQgbWFwTWFya2VycyA9IFtdO1xuXG4gICAgbGV0IGNlbnRlckNvb3JkaW5hdGVzID0ge307XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc3VsdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIFJlbW92ZSBsZWdhY3kgZmFsbGJhY2sgZnJvbSBhbGwgZGF0YSBmb3JtYXRcbiAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzW2pdLmRhdGEgfHwgcmVzdWx0c1tqXTtcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZSkge1xuICAgICAgICBpZiAoIWNlbnRlckNvb3JkaW5hdGVzLmxhdGl0dWRlKSB7XG4gICAgICAgICAgY2VudGVyQ29vcmRpbmF0ZXMgPSB7XG4gICAgICAgICAgICBsYXRpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sb25naXR1ZGVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIG1hcE1hcmtlcnMucHVzaCh7XG4gICAgICAgICAgaXRlbTogcmVzdWx0LFxuICAgICAgICAgIGxhYmVsOiBtYXBNYXJrZXJzLmxlbmd0aCArIDEsXG4gICAgICAgICAgbGF0aXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubGF0aXR1ZGUsXG4gICAgICAgICAgbG9uZ2l0dWRlOiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlLmxvbmdpdHVkZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgJ21hcENlbnRlcic6IGNlbnRlckNvb3JkaW5hdGVzLFxuICAgICAgJ21hcE1hcmtlcnMnOiBtYXBNYXJrZXJzXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChtb2R1bGVzLCB1cmxzKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gW107XG4gICAgaWYgKCFtb2R1bGVzKSB7XG4gICAgICByZXR1cm4gc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmV3IFNlY3Rpb24obW9kdWxlcyk7XG4gICAgfVxuXG4gICAgLy8gT3VyIHNlY3Rpb25zIHNob3VsZCBjb250YWluIGEgcHJvcGVydHkgb2YgbWFwTWFya2VyIG9iamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNlY3Rpb25zLnB1c2goXG4gICAgICAgIG5ldyBTZWN0aW9uKFxuICAgICAgICAgIG1vZHVsZXNbaV0sXG4gICAgICAgICAgdXJsc1ttb2R1bGVzW2ldLnZlcnRpY2FsQ29uZmlnSWRdXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlY3Rpb25zO1xuICB9XG59XG5cbmNsYXNzIEFwcGxpZWRRdWVyeUZpbHRlciB7XG4gIC8vIFN1cHBvcnQgbGVnYWN5IG1vZGVsIGFuZCBuZXcgbW9kZWwgdW50aWwgZnVsbHkgbWlncmF0ZWQuXG4gIC8vIFRPRE8oYmlsbHkpIFJlbW92ZSB0aGUgbGVmdCBleHByZXNzaW9uIGR1cmluZyBhc3NpZ25tZW50IHdoZW4gbWlncmF0ZWQuXG4gIGNvbnN0cnVjdG9yIChhcHBsaWVkUXVlcnlGaWx0ZXIpIHtcbiAgICB0aGlzLmtleSA9IGFwcGxpZWRRdWVyeUZpbHRlci5rZXkgfHwgYXBwbGllZFF1ZXJ5RmlsdGVyLmRpc3BsYXlLZXk7XG4gICAgdGhpcy52YWx1ZSA9IGFwcGxpZWRRdWVyeUZpbHRlci52YWx1ZSB8fCBhcHBsaWVkUXVlcnlGaWx0ZXIuZGlzcGxheVZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKGFwcGxpZWRRdWVyeUZpbHRlcnMpIHtcbiAgICBsZXQgZmlsdGVycyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwbGllZFF1ZXJ5RmlsdGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgZmlsdGVycy5wdXNoKG5ldyBBcHBsaWVkUXVlcnlGaWx0ZXIoYXBwbGllZFF1ZXJ5RmlsdGVyc1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVycztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgVW5pdmVyc2FsUmVzdWx0cyAqL1xuXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL3NlY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbml2ZXJzYWxSZXN1bHRzIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICB0aGlzLnF1ZXJ5SWQgPSBkYXRhLnF1ZXJ5SWQgfHwgbnVsbDtcbiAgICB0aGlzLnNlY3Rpb25zID0gZGF0YS5zZWN0aW9ucyB8fCBbXTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSwgdXJscykge1xuICAgIHJldHVybiBuZXcgVW5pdmVyc2FsUmVzdWx0cyh7XG4gICAgICBxdWVyeUlkOiByZXNwb25zZS5xdWVyeUlkLFxuICAgICAgc2VjdGlvbnM6IFNlY3Rpb24uZnJvbShyZXNwb25zZS5tb2R1bGVzLCB1cmxzKVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEaXJlY3RBbnN3ZXIgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0QW5zd2VyIHtcbiAgY29uc3RydWN0b3IgKGRpcmVjdEFuc3dlciA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkaXJlY3RBbnN3ZXIpO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE5hdmlnYXRpb24gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiB7XG4gIGNvbnN0cnVjdG9yICh0YWJPcmRlcikge1xuICAgIHRoaXMudGFiT3JkZXIgPSB0YWJPcmRlciB8fCBbXTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKG1vZHVsZXMpIHtcbiAgICBsZXQgbmF2ID0gW107XG4gICAgaWYgKCFtb2R1bGVzIHx8ICFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmF2O1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5hdi5wdXNoKG1vZHVsZXNbaV0udmVydGljYWxDb25maWdJZCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgTmF2aWdhdGlvbihuYXYpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBWZXJ0aWNhbFJlc3VsdHMgKi9cblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9zZWN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGljYWxSZXN1bHRzIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSkge1xuICAgIHJldHVybiBuZXcgVmVydGljYWxSZXN1bHRzKFNlY3Rpb24uZnJvbShyZXNwb25zZSkpO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbi8qKlxuICogU3RvcmFnZUtleXMgaXMgYW4gRU5VTSBhcmUgY29uc2lkZXJlZCB0aGUgcm9vdCBjb250ZXh0XG4gKiBmb3IgaG93IGRhdGEgaXMgc3RvcmVkIGFuZCBzY29wZWQgaW4gdGhlIHN0b3JhZ2UuXG4gKlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBOQVZJR0FUSU9OOiAnbmF2aWdhdGlvbicsXG4gIFVOSVZFUlNBTF9SRVNVTFRTOiAndW5pdmVyc2FsLXJlc3VsdHMnLFxuICBWRVJUSUNBTF9SRVNVTFRTOiAndmVydGljYWwtcmVzdWx0cycsXG4gIEFVVE9DT01QTEVURTogJ2F1dG9jb21wbGV0ZScsXG4gIERJUkVDVF9BTlNXRVI6ICdkaXJlY3QtYW5zd2VyJyxcbiAgRklMVEVSOiAnZmlsdGVyJyxcbiAgUVVFUlk6ICdxdWVyeSdcbn07XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hEYXRhVHJhbnNmb3JtZXIgKi9cblxuaW1wb3J0IFVuaXZlcnNhbFJlc3VsdHMgZnJvbSAnLi4vbW9kZWxzL3VuaXZlcnNhbHJlc3VsdHMnO1xuaW1wb3J0IERpcmVjdEFuc3dlciBmcm9tICcuLi9tb2RlbHMvZGlyZWN0YW5zd2VyJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL21vZGVscy9uYXZpZ2F0aW9uJztcbmltcG9ydCBWZXJ0aWNhbFJlc3VsdHMgZnJvbSAnLi4vbW9kZWxzL3ZlcnRpY2FscmVzdWx0cyc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbi8qKlxuICogQSBEYXRhIFRyYW5zZm9ybWVyIHRoYXQgdGFrZXMgdGhlIHJlc3BvbnNlIG9iamVjdCBmcm9tIGEgU2VhcmNoIHJlcXVlc3RcbiAqIEFuZCB0cmFuc2Zvcm1zIGluIHRvIGEgZnJvbnQtZW5kIG9yaWVudGVkIGRhdGEgc3RydWN0dXJlIHRoYXQgb3VyXG4gKiBjb21wb25lbnQgbGlicmFyeSBhbmQgY29yZSBzdG9yYWdlIHVuZGVyc3RhbmQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaERhdGFUcmFuc2Zvcm1lciB7XG4gIHN0YXRpYyB0cmFuc2Zvcm0gKGRhdGEsIHVybHMgPSB7fSkge1xuICAgIGxldCByZXNwb25zZSA9IGRhdGEucmVzcG9uc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXJ5SWQ6IHJlc3BvbnNlLnF1ZXJ5SWQsXG4gICAgICBbU3RvcmFnZUtleXMuTkFWSUdBVElPTl06IE5hdmlnYXRpb24uZnJvbShyZXNwb25zZS5tb2R1bGVzKSxcbiAgICAgIFtTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSXTogbmV3IERpcmVjdEFuc3dlcihyZXNwb25zZS5kaXJlY3RBbnN3ZXIpLFxuICAgICAgW1N0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTXTogVW5pdmVyc2FsUmVzdWx0cy5mcm9tKHJlc3BvbnNlLCB1cmxzKVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgdHJhbnNmb3JtVmVydGljYWwgKGRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlcnlJZDogZGF0YS5yZXNwb25zZS5xdWVyeUlkLFxuICAgICAgW1N0b3JhZ2VLZXlzLk5BVklHQVRJT05dOiBuZXcgTmF2aWdhdGlvbigpLCAvLyBWZXJpdGNhbCBkb2Vzbid0IHJlc3BvbmQgd2l0aCBvcmRlcmluZywgc28gdXNlIGVtcHR5IG5hdi5cbiAgICAgIFtTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTXTogVmVydGljYWxSZXN1bHRzLmZyb20oZGF0YS5yZXNwb25zZSlcbiAgICB9O1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBFdmVudEVtaXR0ZXIgKi9cblxuLyoqXG4gKiBFdmVudEVtaXR0ZXIgaXMgYSBiYXNlIGNsYXNzIGZvciBhbnkgb2JqZWN0IHRoYXQgd2FudHMgdG8gZXhwb3NlXG4gKiBhIHB1Yi9zdWIgaW50ZXJmYWNlLCBmb3IgZW1pdHRpbmcgbWVzc2FnZXMgYW5kIHByb3ZpZGluZyBsaXN0ZW5lcnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgc3Vic2NyaWJlcnMgb2YgbWVzc2FnZXNcbiAgICAgKiBAdHlwZSB7b2JqZWN0W119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbiBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3Igc3Vic2NyaWJpbmcgZXZlbnRzIHRoYXQgYXJlIGVtaXR0ZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gbGlzdGVuIHRvXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIFRoZSBjYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUge2V2dH0gaXMgZW1pdHRlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uY2UgT3B0aW9uYWwgdmFsdWUgd2hpY2ggd2lsbCBvbmx5IGhhbmRsZSB0aGUgbWVzc2FnZSBvbmNlXG4gICAqL1xuICBvbiAoZXZ0LCBjYiwgb25jZSkge1xuICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgaGFuZGxlciBzaG91bGQgYmUgb2YgdHlwZSB7ZnVuY3Rpb259Jyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xpc3RlbmVyc1tldnRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVyc1tldnRdID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5fbGlzdGVuZXJzW2V2dF0ucHVzaCh7XG4gICAgICBldmVudDogZXZ0LFxuICAgICAgY2I6IGNiLFxuICAgICAgb25jZTogb25jZSB8fCBmYWxzZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogb25jZSBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3Igc3Vic2NyaWJpbmcgZXZlbnRzIHRoYXQgYXJlIGVtaXR0ZWQuXG4gICAqIFRoZSBoYW5kbGVyIHdpbGwgb25seSBiZSB0cmlnZ2VyZWQgb25jZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byBsaXN0ZW4gdG9cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgVGhlIGNhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSB7ZXZ0fSBpcyBlbWl0dGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSBPcHRpb25hbCB2YWx1ZSB3aGljaCB3aWxsIG9ubHkgaGFuZGxlIHRoZSBtZXNzYWdlIG9uY2VcbiAgICovXG4gIG9uY2UgKGV2dCwgY2IpIHtcbiAgICByZXR1cm4gdGhpcy5vbihldnQsIGNiLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvZmYgaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIHVuc3Vic2NyaWJpbmcgZnJvbSBhbiBldmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIHVuc3Vic2NyaWJlIGZyb21cbiAgICovXG4gIG9mZiAoZXZ0KSB7XG4gICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyc1tldnRdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGVtaXQgaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIGJyb2FkY2FzdGluZyBtZXNzYWdlcy9ldmVudHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byBwdWJsaXNoIGZyb21cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgdGhlIGRhdGEgdG8gc2VuZCBhbG9uZyB0byB0aGUgc3Vic2NyaWJlcnNcbiAgICovXG4gIGVtaXQgKGV2dCwgZGF0YSkge1xuICAgIGxldCBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNbZXZ0XTtcbiAgICBpZiAobGlzdGVuZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJbnZva2UgZWFjaCBvZiBhbGwgdGhlIGxpc3RlbmVyIGhhbmRsZXJzIGFuZCByZW1vdmUgdGhlIG9uZXMgdGhhdCBzaG91bGQgZmlyZSBvbmx5IG9uY2UuXG4gICAgbGV0IGtlZXAgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdGVuZXJzW2ldLmNiKGRhdGEpO1xuICAgICAgaWYgKGxpc3RlbmVyc1tpXS5vbmNlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBJbnN0ZWFkIG9mIGhhdmluZyBhICdkaXJ0eScgYXJyYXkgd2l0aCBkZWxldGVkIG9yICd1bmRlZmluZWQnIGVudHJpZXMsXG4gICAgICAvLyB3ZSBqdXN0IGNyZWF0ZSBhIGJyYW5kIG5ldyBhcnJheSB3aXRob3V0IHRoZSBsaXN0ZW5lcnMgdGhhdCB3ZXJlIHJlbW92ZWRcbiAgICAgIGtlZXAucHVzaChsaXN0ZW5lcnNbaV0pO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBvdXIgb2xkIGxpc3Qgb2YgbGlzdGVuZXJzIHRvIHRoZSBuZXdseSBjcmVhdGVkIGFycmF5XG4gICAgdGhpcy5fbGlzdGVuZXJzW2V2dF0gPSBrZWVwO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNb2R1bGVEYXRhICovXG5cbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlcic7XG5cbi8qKlxuICogTW9kdWxlRGF0YSBpcyB1c2VkIGFzIGEgZ2VuZXJpYyBtb2RlbCBmb3IgU3RvcmFnZS5cbiAqIFR5cGljYWxseSBhbiBpbnN0YW5jZSBvZiBNb2R1bGVEYXRhIHBvd2VycyBhIHNpbmdsZSBjb21wb25lbnQuXG5cbiAqIEEgZGF0YSBtb2RlbCB0aGF0IGV4cG9zZXMgYW4gZXZlbnQgZW1pdHRlciBpbnRlcmZhY2UuXG4gKiBAZXh0ZW5kcyBFdmVudEVtaXR0ZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kdWxlRGF0YSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChpZCwgZGF0YSA9IHt9KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgdGhpcy5faGlzdG9yeSA9IFtdO1xuICAgIHRoaXMuX2RhdGEgPSB7fTtcbiAgICB0aGlzLnNldChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXBsYWNlcyB0aGUgY3VycmVudGx5IGhlbGQgZGF0YSB3aXRoIHRoZSBnaXZlbiBkYXRhXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSB0aGUgZGF0YSB0byByZXBsYWNlIHRoZSBjdXJyZW50IGRhdGFcbiAgICovXG4gIHNldCAoZGF0YSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBkYXRhIHx8IHt9O1xuXG4gICAgdGhpcy5jYXB0dXJlUHJldmlvdXMoKTtcblxuICAgIGlmIChPYmplY3Qua2V5cyhuZXdEYXRhKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKHRoaXMuX2RhdGEpLmxlbmd0aCkge1xuICAgICAgdGhpcy5fZGF0YSA9IG5ld0RhdGE7XG4gICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuX2RhdGEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGNoZWNrIGZvciBzaGFsbG93IGVxdWFsaXR5XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMobmV3RGF0YSkpIHtcbiAgICAgIGlmICh0aGlzLl9kYXRhW2tleV0gIT09IG5ld0RhdGFba2V5XSkge1xuICAgICAgICB0aGlzLl9kYXRhID0gbmV3RGF0YTtcbiAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB0aGlzLl9kYXRhKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNhcHR1cmVQcmV2aW91cyAoKSB7XG4gICAgaWYgKHRoaXMuX2hpc3RvcnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5faGlzdG9yeSA9IFtdO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9oaXN0b3J5Lmxlbmd0aCArIDEgPiA1KSB7XG4gICAgICB0aGlzLl9oaXN0b3J5LnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgLy8gSWYgZGF0YSBpcyBldmVyIHVuZGVmaW5lZCwgd2UgZGVmYXVsdCB0byBlbXB0eSBvYmplY3RcbiAgICB0aGlzLl9oaXN0b3J5LnB1c2goSlNPTi5zdHJpbmdpZnkodGhpcy5fZGF0YSB8fCB7fSkpO1xuICB9XG5cbiAgdW5kbyAoKSB7XG4gICAgbGV0IHByZXZpb3VzID0ge307XG4gICAgaWYgKHRoaXMuX3ByZXZpb3VzLmxlbmd0aCA+IDApIHtcbiAgICAgIHByZXZpb3VzID0gSlNPTi5wYXJzZSh0aGlzLl9wcmV2aW91cy5wb3AoKSk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0YS5zZXQocHJldmlvdXMpO1xuICB9XG5cbiAgcmF3ICgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU3RvcmFnZSAqL1xuXG5pbXBvcnQgTW9kdWxlRGF0YSBmcm9tICcuL21vZHVsZWRhdGEnO1xuaW1wb3J0IHsgQW5zd2Vyc1N0b3JhZ2VFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvcnMnO1xuXG4vKipcbiAqIFN0b3JhZ2UgaXMgYSBjb250YWluZXIgYXJvdW5kIGFwcGxpY2F0aW9uIHN0YXRlLlxuICogSXQgZXhwb3NlcyBhbiBpbnRlcmZhY2UgZm9yIENSVUQgb3BlcmF0aW9ucyBhcyB3ZWxsIGFzIGxpc3RlbmluZ1xuICogZm9yIHN0YXRlZnVsIGNoYW5nZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lciA9IHt9O1xuICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGF0YSBpbiBzdG9yYWdlIHdpdGggdGhlIGdpdmVuIGtleSB0byB0aGUgcHJvdmlkZWQgZGF0YSxcbiAgICogY29tcGxldGVseSBvdmVyd3JpdGluZyBhbnkgZXhpc3RpbmcgZGF0YS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSB0aGUgc3RvcmFnZSBrZXkgdG8gc2V0XG4gICAqIEBwYXJhbSB7Kn0gZGF0YSB0aGUgZGF0YSB0byBzZXRcbiAgICovXG4gIHNldCAoa2V5LCBkYXRhKSB7XG4gICAgdGhpcy5faW5pdERhdGFDb250YWluZXIoa2V5LCBkYXRhKTtcbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2tleV0uc2V0KGRhdGEpO1xuICB9XG5cbiAgX2luaXREYXRhQ29udGFpbmVyIChrZXksIGRhdGEpIHtcbiAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQgfHwga2V5ID09PSBudWxsIHx8IHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc1N0b3JhZ2VFcnJvcignSW52YWxpZCBzdG9yYWdlIGtleSBwcm92aWRlZCcsIGtleSwgZGF0YSk7XG4gICAgfVxuICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQgfHwgZGF0YSA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNTdG9yYWdlRXJyb3IoJ05vIGRhdGEgcHJvdmlkZWQnLCBrZXksIGRhdGEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltrZXldID0gbmV3IE1vZHVsZURhdGEoa2V5KTtcbiAgICAgIHRoaXMuX2FwcGx5RnV0dXJlTGlzdGVuZXJzKGtleSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U3RhdGUgKG1vZHVsZUlkKSB7XG4gICAgaWYgKHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0ucmF3KCk7XG4gICAgfVxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGdldEFsbCAoa2V5KSB7XG4gICAgY29uc3QgZGF0YSA9IFtdO1xuICAgIGZvciAoY29uc3QgZGF0YUtleSBvZiBPYmplY3Qua2V5cyh0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyKSkge1xuICAgICAgaWYgKGRhdGFLZXkuc3RhcnRzV2l0aChrZXkpICYmIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbZGF0YUtleV0ucmF3KCkgIT09IG51bGwpIHtcbiAgICAgICAgZGF0YS5wdXNoKHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbZGF0YUtleV0ucmF3KCkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIG9uIChldnQsIG1vZHVsZUlkLCBjYikge1xuICAgIGxldCBtb2R1bGVEYXRhID0gdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF07XG4gICAgaWYgKG1vZHVsZURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdID0gW107XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0ucHVzaCh7XG4gICAgICAgIGV2ZW50OiBldnQsXG4gICAgICAgIGNiOiBjYlxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5vbihldnQsIGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9mZiAoZXZ0LCBtb2R1bGVJZCwgY2IpIHtcbiAgICBsZXQgbW9kdWxlRGF0YSA9IHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdO1xuICAgIGlmIChtb2R1bGVEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXS5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0ub2ZmKGV2dCwgY2IpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2FwcGx5RnV0dXJlTGlzdGVuZXJzIChtb2R1bGVJZCkge1xuICAgIGxldCBmdXR1cmVzID0gdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXTtcbiAgICBpZiAoIWZ1dHVyZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZ1dHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBmdXR1cmUgPSBmdXR1cmVzW2ldO1xuICAgICAgdGhpcy5vbihmdXR1cmUuZXZlbnQsIG1vZHVsZUlkLCBmdXR1cmUuY2IpO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQ29yZSAqL1xuXG5pbXBvcnQgU2VhcmNoQXBpIGZyb20gJy4vc2VhcmNoL3NlYXJjaGFwaSc7XG5pbXBvcnQgQXV0b0NvbXBsZXRlQXBpIGZyb20gJy4vc2VhcmNoL2F1dG9jb21wbGV0ZWFwaSc7XG5cbmltcG9ydCBTZWFyY2hEYXRhVHJhbnNmb3JtZXIgZnJvbSAnLi9zZWFyY2gvc2VhcmNoZGF0YXRyYW5zZm9ybWVyJztcblxuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlL3N0b3JhZ2UnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4vc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbi8qKlxuICogQ29yZSBpcyB0aGUgbWFpbiBhcHBsaWNhdGlvbiBjb250YWluZXIgZm9yIGFsbCBvZiB0aGUgbmV0d29yayBhbmQgc3RvcmFnZVxuICogcmVsYXRlZCBiZWhhdmlvcnMgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3JlIHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIGlmICh0eXBlb2Ygb3B0cy5hcGlLZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYGFwaUtleWAuIFR5cGUgbXVzdCBiZSB7c3RyaW5nfScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0cy5hbnN3ZXJzS2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGBhbnN3ZXJzS2V5YC4gVHlwZSBtdXN0IGJlIHtzdHJpbmd9Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNsaWVudCBBUEkgS2V5IHVzZWQgZm9yIGFsbCByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjbGllbnQgQW5zd2VycyBLZXkgdXNlZCBmb3IgYWxsIHJlcXVlc3RzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Fuc3dlcnNLZXkgPSBvcHRzLmFuc3dlcnNLZXk7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IGxvY2FsZSB1c2VkIGZvciBhbGwgcmVxdWVzdHMuIElmIG5vdCBzcGVjaWZpZWQsIGRlZmF1bHRzIHRvIFwiZW5cIiAoZm9yXG4gICAgICogYmFja3dhcmRzIGNvbXBhdGliaWxpdHkpLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9sb2NhbGUgPSBvcHRzLmxvY2FsZSB8fCAnZW4nO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNvcmUgZGF0YSBzdG9yYWdlIHRoYXQgcG93ZXJzIHRoZSBVSVxuICAgICAqIEB0eXBlIHtTdG9yYWdlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5zdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIGNvbnRhaW5pbmcgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIFJFU1RmdWwgc2VhcmNoIEFQSVxuICAgICAqIEZvciBib3RoIHZlcnRpY2FsIGFuZCB1bml2ZXJzYWwgc2VhcmNoXG4gICAgICogQHR5cGUge1NlYXJjaH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaGVyID0gbmV3IFNlYXJjaEFwaSh7XG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIGFuc3dlcnNLZXk6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3Rpb24gY29udGFpbmluZyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgUkVTVGZ1bCBhdXRvY29tcGxldGUgQVBJXG4gICAgICogRm9yIGZpbHRlciBzZWFyY2gsIHZlcnRpY2FsIGF1dG9jb21wbGV0ZSwgYW5kIHVuaXZlcnNhbCBhdXRvY29tcGxldGVcbiAgICAgKiBAdHlwZSB7QXV0b2NvbXBsZXRlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXV0b0NvbXBsZXRlID0gbmV3IEF1dG9Db21wbGV0ZUFwaSh7XG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIGFuc3dlcnNLZXk6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICBsb2NhbGU6IHRoaXMuX2xvY2FsZVxuICAgIH0pO1xuICB9XG5cbiAgdmVydGljYWxTZWFyY2ggKHF1ZXJ5U3RyaW5nLCB2ZXJ0aWNhbEtleSwgZmlsdGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaGVyXG4gICAgICAudmVydGljYWxRdWVyeShxdWVyeVN0cmluZywgdmVydGljYWxLZXksIGZpbHRlcilcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IFNlYXJjaERhdGFUcmFuc2Zvcm1lci50cmFuc2Zvcm1WZXJ0aWNhbChyZXNwb25zZSkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChTdG9yYWdlS2V5cy5OQVZJR0FUSU9OLCBkYXRhW1N0b3JhZ2VLZXlzLk5BVklHQVRJT05dKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTLCBkYXRhW1N0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFNdKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoIChxdWVyeVN0cmluZywgdXJscykge1xuICAgIHJldHVybiB0aGlzLl9zZWFyY2hlclxuICAgICAgLnF1ZXJ5KHF1ZXJ5U3RyaW5nKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gU2VhcmNoRGF0YVRyYW5zZm9ybWVyLnRyYW5zZm9ybShyZXNwb25zZSwgdXJscykpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChTdG9yYWdlS2V5cy5OQVZJR0FUSU9OLCBkYXRhW1N0b3JhZ2VLZXlzLk5BVklHQVRJT05dKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSLCBkYXRhW1N0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVJdKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUUywgZGF0YVtTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUU10sIHVybHMpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYW4gaW5wdXQsIHF1ZXJ5IGZvciBhIGxpc3Qgb2Ygc2ltaWxhciByZXN1bHRzIGFuZCBzZXQgaW50byBzdG9yYWdlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCAgICAgdGhlIHN0cmluZyB0byBhdXRvY29tcGxldGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqL1xuICBhdXRvQ29tcGxldGVVbml2ZXJzYWwgKGlucHV0LCBuYW1lc3BhY2UpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0NvbXBsZXRlXG4gICAgICAucXVlcnlVbml2ZXJzYWwoaW5wdXQpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5BVVRPQ09NUExFVEV9LiR7bmFtZXNwYWNlfWAsIGRhdGEpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYW4gaW5wdXQsIHF1ZXJ5IGZvciBhIGxpc3Qgb2Ygc2ltaWxhciByZXN1bHRzIGluIHRoZSBwcm92aWRlZCB2ZXJ0aWNhbFxuICAgKiBhbmQgc2V0IGludG8gc3RvcmFnZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgICAgICAgdGhlIHN0cmluZyB0byBhdXRvY29tcGxldGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJ0aWNhbEtleSB0aGUgdmVydGljYWwga2V5IGZvciB0aGUgZXhwZXJpZW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gYmFyS2V5ICAgICAgdGhlIGJhciBrZXkgZm9yIHRoZSBleHBlcmllbmNlXG4gICAqL1xuICBhdXRvQ29tcGxldGVWZXJ0aWNhbCAoaW5wdXQsIG5hbWVzcGFjZSwgdmVydGljYWxLZXksIGJhcktleSkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvQ29tcGxldGVcbiAgICAgIC5xdWVyeVZlcnRpY2FsKGlucHV0LCB2ZXJ0aWNhbEtleSwgYmFyS2V5KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuQVVUT0NPTVBMRVRFfS4ke25hbWVzcGFjZX1gLCBkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIGFuIGlucHV0LCBwcm92aWRlIGEgbGlzdCBvZiBzdWl0YWJsZSBmaWx0ZXJzIGZvciBhdXRvY29tcGxldGlvblxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgICAgICAgICB0aGUgc3RyaW5nIHRvIHNlYXJjaCBmb3IgZmlsdGVycyB3aXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgICAgIHRoZSBuYW1lc3BhY2UgdG8gdXNlIGZvciB0aGUgc3RvcmFnZSBrZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnRpY2FsS2V5ICAgdGhlIHZlcnRpY2FsIGtleSBmb3IgdGhlIGV4cGVyaWVuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJhcktleSAgICAgICAgdGhlIGJhciBrZXkgZm9yIHRoZSBleHBlcmllbmNlXG4gICAqL1xuICBhdXRvQ29tcGxldGVGaWx0ZXIgKGlucHV0LCBuYW1lc3BhY2UsIHZlcnRpY2FsS2V5LCBiYXJLZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0NvbXBsZXRlXG4gICAgICAucXVlcnlGaWx0ZXIoaW5wdXQsIHZlcnRpY2FsS2V5LCBiYXJLZXkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5BVVRPQ09NUExFVEV9LiR7bmFtZXNwYWNlfWAsIGRhdGEpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmVzIHRoZSBnaXZlbiBxdWVyeSBpbnRvIHN0b3JhZ2UsIHRvIGJlIHVzZWQgZm9yIHRoZSBuZXh0IHNlYXJjaFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgdGhlIHF1ZXJ5IHRvIHN0b3JlXG4gICAqL1xuICBzZXRRdWVyeSAocXVlcnkpIHtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlFVRVJZLCBxdWVyeSk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmVzIHRoZSBnaXZlbiBmaWx0ZXIgaW50byBzdG9yYWdlLCB0byBiZSB1c2VkIGZvciB0aGUgbmV4dCBzZWFyY2hcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSB0aGUgbmFtZXNwYWNlIHRvIHVzZSBmb3IgdGhlIHN0b3JhZ2Uga2V5XG4gICAqIEBwYXJhbSB7RmlsdGVyfSBmaWx0ZXIgICAgdGhlIGZpbHRlciB0byBzZXRcbiAgICovXG4gIHNldEZpbHRlciAobmFtZXNwYWNlLCBmaWx0ZXIpIHtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkZJTFRFUn0uJHtuYW1lc3BhY2V9YCwgZmlsdGVyKTtcbiAgfVxuXG4gIG9uIChldnQsIG1vZHVsZUlkLCBjYikge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2Uub24oZXZ0LCBtb2R1bGVJZCwgY2IpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBDb21wb25lbnRNYW5hZ2VyICovXG5cbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogQ29tcG9uZW50TWFuYWdlciBpcyBhIFNpbmdsZXRvbmUgdGhhdCBjb250YWlucyBib3RoIGFuIGludGVybmFsIHJlZ2lzdHJ5IG9mXG4gKiBlbGlnaWJsZSBjb21wb25lbnRzIHRvIGJlIGNyZWF0ZWQsIGFzIHdlbGwgYXMga2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnRcbiAqIGluc3RhbnRpYXRlZCBhbmQgYWN0aXZlIGNvbXBvbmVudHMuXG4gKlxuICogQUxMIGNvbXBvbmVudHMgc2hvdWxkIGJlIGNvbnN0cnVjdGVkIHVzaW5nIHRoZSB7Q29tcG9uZW50TWFuYWdlcn0gdmlhIGl0cyBgY3JlYXRlYCBtZXRob2QuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudE1hbmFnZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgaWYgKCFDb21wb25lbnRNYW5hZ2VyLnNldEluc3RhbmNlKHRoaXMpKSB7XG4gICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnQgcmVnaXN0cnkgaXMgYW4gaW50ZXJuYWwgbWFwLCB0aGF0IGNvbnRhaW5zXG4gICAgICogYWxsIGF2YWlsYWJsZSBjb21wb25lbnQgQ0xBU1NFUyB1c2VkIGZvciBjcmVhdGlvbiBvciBvdmVycmlkZS5cbiAgICAgKiBFYWNoIGNvbXBvbmVudCBjbGFzcyBoYXMgYSB1bmlxdWUgVFlQRSwgd2hpY2ggaXMgdXNlZCBhcyB0aGUga2V5IGZvciB0aGUgcmVnaXN0cnlcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5ID0ge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYWN0aXZlIGNvbXBvbmVudHMgaXMgYW4gaW50ZXJuYWwgY29udGFpbmVyIHRvIGtlZXAgdHJhY2tcbiAgICAgKiBvZiBhbGwgb2YgdGhlIGNvbXBvbmVudHMgdGhhdCBoYXZlIGJlZW4gY29uc3RydWN0ZWRcbiAgICAgKi9cbiAgICB0aGlzLl9hY3RpdmVDb21wb25lbnRzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY29yZSBsaWJyYXJ5IGRlcGVuZGVuY3lcbiAgICAgKlxuICAgICAqIFRoZSBDb3JlIGNvbnRhaW5zIGJvdGggdGhlIHN0b3JhZ2UgQU5EIHNlcnZpY2VzIHRoYXQgYXJlIG5lZWRlZCBmb3IgcGVyZm9ybWluZyBvcGVyYXRpb25zXG4gICAgICogbGlrZSBzZWFyY2ggYW5kIGF1dG8gY29tcGxldGUuXG4gICAgICpcbiAgICAgKiBUaGUgc3RvcmFnZSBpcyB0aGUgc291cmNlIG9mIHRydXRoIGZvciB0aGUgc3RhdGUgb2YgQUxMIGNvbXBvbmVudHMuXG4gICAgICogV2hlbmV2ZXIgdGhlIHN0b3JhZ2UgaXMgdXBkYXRlZCwgdGhlIHN0YXRlIGdldHMgcHVzaGVkIGRvd24gdG8gdGhlIG5lY2Vzc2FyeSBjb21wb25lbnRzLlxuICAgICAqIEB0eXBlIHtDb3JlfVxuICAgICAqL1xuICAgIHRoaXMuX2NvcmUgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHByaW1hcnkgcmVuZGVyZXIgdG8gdXNlIGZvciBhbGwgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtIYW5kbGViYXJzUmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyZXIgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGFuYWx5dGljcyByZXBvcnRlciBkZXBlbmRlbmN5XG4gICAgICovXG4gICAgdGhpcy5fYW5hbHl0aWNzUmVwb3J0ZXIgPSBudWxsO1xuICB9XG5cbiAgc3RhdGljIHNldEluc3RhbmNlIChpbnN0YW5jZSkge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cblxuICBzZXRSZW5kZXJlciAocmVuZGVyZXIpIHtcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0Q29yZSAoY29yZSkge1xuICAgIHRoaXMuX2NvcmUgPSBjb3JlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0QW5hbHl0aWNzUmVwb3J0ZXIgKHJlcG9ydGVyKSB7XG4gICAgdGhpcy5fYW5hbHl0aWNzUmVwb3J0ZXIgPSByZXBvcnRlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZWdpc3RlcnMgYSBjb21wb25lbnQgdG8gYmUgZWxpZ2libGUgZm9yIGNyZWF0aW9uIGFuZCBvdmVycmlkZS5cbiAgICogQHBhcmFtIHtDb21wb25lbnR9IFRoZSBDb21wb25lbnQgQ2xhc3MgdG8gcmVnaXN0ZXJcbiAgICovXG4gIHJlZ2lzdGVyIChjb21wb25lbnRDbGF6eikge1xuICAgIHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5W2NvbXBvbmVudENsYXp6LnR5cGVdID0gY29tcG9uZW50Q2xheno7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIGlzIHRoZSBlbnRyeSBwb2ludCBmb3IgY29uc3RydWN0aW5nIGFueSBhbmQgYWxsIGNvbXBvbmVudHMuXG4gICAqIEl0IHdpbGwgaW5zdGFudGlhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudCwgYW5kIGJvdGggYXBwbHlcbiAgICogaW5pdGlhbCBzdGF0ZSBmcm9tIHRoZSBzdG9yYWdlIGFuZCBiaW5kIGl0IHRvIHRoZSBzdG9yYWdlIGZvciB1cGRhdGVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50VHlwZSBUaGUgY29tcG9uZW50IHR5cGUgdG8gY3JlYXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIFRoZSBvcHRpb25zIHRvIHBpcGUgdG8gdGhlIGNvbnN0cnVjdGlvbiBvZiB0aGUgY29tcG9uZW50XG4gICAqL1xuICBjcmVhdGUgKGNvbXBvbmVudFR5cGUsIG9wdHMpIHtcbiAgICAvLyBFdmVyeSBjb21wb25lbnQgbmVlZHMgbG9jYWwgYWNjZXNzIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlclxuICAgIC8vIGJlY2F1c2Ugc29tZXRpbWVzIGNvbXBvbmVudHMgaGF2ZSBzdWJjb21wb25lbnRzIHRoYXQgbmVlZCB0byBiZVxuICAgIC8vIGNvbnN0cnVjdGVkIGR1cmluZyBjcmVhdGlvblxuICAgIG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvcmU6IHRoaXMuX2NvcmUsXG4gICAgICByZW5kZXJlcjogdGhpcy5fcmVuZGVyZXIsXG4gICAgICBhbmFseXRpY3NSZXBvcnRlcjogdGhpcy5fYW5hbHl0aWNzUmVwb3J0ZXIsXG4gICAgICBjb21wb25lbnRNYW5hZ2VyOiB0aGlzXG4gICAgfSwgb3B0cyk7XG5cbiAgICBsZXQgY29tcG9uZW50Q2xhc3MgPSB0aGlzLl9jb21wb25lbnRSZWdpc3RyeVtjb21wb25lbnRUeXBlXTtcblxuICAgIGlmIChcbiAgICAgICFjb21wb25lbnRDbGFzcy5hcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQoKSAmJlxuICAgICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cy5zb21lKGMgPT4gYy5uYW1lID09PSBvcHRzLm5hbWUpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKFxuICAgICAgICBgQW5vdGhlciBjb21wb25lbnQgd2l0aCBuYW1lICR7b3B0cy5uYW1lfSBhbHJlYWR5IGV4aXN0c2AsXG4gICAgICAgIGNvbXBvbmVudFR5cGUpO1xuICAgIH1cblxuICAgIC8vIEluc3RhbnRpYXRlIG91ciBuZXcgY29tcG9uZW50IGFuZCBrZWVwIHRyYWNrIG9mIGl0XG4gICAgbGV0IGNvbXBvbmVudCA9XG4gICAgICBuZXcgdGhpcy5fY29tcG9uZW50UmVnaXN0cnlbY29tcG9uZW50VHlwZV0ob3B0cylcbiAgICAgICAgLmluaXQob3B0cyk7XG5cbiAgICB0aGlzLl9hY3RpdmVDb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcblxuICAgIC8vIElmIHRoZXJlIGlzIGEgbG9jYWwgc3RvcmFnZSB0byBwb3dlciBzdGF0ZSwgYXBwbHkgdGhlIHN0YXRlXG4gICAgLy8gZnJvbSB0aGUgc3RvcmFnZSB0byB0aGUgY29tcG9uZW50LCBhbmQgdGhlbiBiaW5kIHRoZSBjb21wb25lbnRcbiAgICAvLyBzdGF0ZSB0byB0aGUgc3RvcmFnZSB2aWEgaXRzIHVwZGF0ZXNcbiAgICBpZiAodGhpcy5fY29yZSAmJiB0aGlzLl9jb3JlLnN0b3JhZ2UgIT09IG51bGwpIHtcbiAgICAgIGlmIChjb21wb25lbnQubW9kdWxlSWQgPT09IHVuZGVmaW5lZCB8fCBjb21wb25lbnQubW9kdWxlSWQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY29yZS5zdG9yYWdlXG4gICAgICAgIC5vbigndXBkYXRlJywgY29tcG9uZW50Lm1vZHVsZUlkLCAoZGF0YSkgPT4ge1xuICAgICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgfVxuXG4gIGdldEFjdGl2ZUNvbXBvbmVudCAodHlwZSkge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVDb21wb25lbnRzLmZpbmQoYyA9PiBjLnR5cGUgPT09IHR5cGUpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBSZW5kZXJlciAqL1xuXG4vKipcbiAqIFJlbmRlcmVyIGlzIGFuIGFic3RyYWN0IGNsYXNzIHRoYXQgYWxsIFJlbmRlcmVycyBzaG91bGQgZXh0ZW5kIGFuZCBpbXBsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIge1xuICAvKipcbiAgICogcmVuZGVyIGlzIGEgY29yZSBtZXRob2QgZm9yIGFsbCByZW5kZXJlcnMuXG4gICAqIEFsbCBpbXBsZW1lbnRhdGlvbnMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgY2xhc3NcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqL1xuICByZW5kZXIgKHRlbXBsYXRlLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgcmVnaXN0ZXJIZWxwZXIgKG5hbWUsIGNiKSB7XG5cbiAgfVxuXG4gIGNvbXBpbGUgKHRlbXBsYXRlKSB7XG5cbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgSGFuZGxlYmFyc1JlbmRlcmVyICovXG5cbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcblxuLyoqXG4gKiBIYW5kbGViYXJzUmVuZGVyZXIgaXMgYSB3cmFwcGVyIGFyb3VuZCB0aGUgbmF0aXZhdGUgaGFuZGxlYmFycyByZW5kZXJlci5cbiAqIEBleHRlbmRzIFJlbmRlcmVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhbmRsZWJhcnNSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IgKHRlbXBsYXRlcyA9IHt9LCBvcHRzID0ge30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGhhbmRsZWJhcnMgY29tcGlsZXJcbiAgICAgKiBAdHlwZSB7SGFuZGxlYmFyc31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2hhbmRsZWJhcnMgPSB0ZW1wbGF0ZXMuX2hiIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgcHJlLWNvbXBpbGVkIGhhbmRsZWJhcnMgdGVtcGxhdGVzXG4gICAgICogQHR5cGUge0hhbmRsZWJhcnN9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXMgfHwge307XG4gIH1cblxuICBpbml0ICh0ZW1wbGF0ZXMpIHtcbiAgICAvLyBBc3NpZ24gdGhlIGhhbmRsZWJhcnMgY29tcGlsZXIgYW5kIHRlbXBsYXRlcyBiYXNlZCBvblxuICAgIC8vIGluZm9ybWF0aW9uIHByb3ZpZGVkIGZyb20gZXh0ZXJuYWwgZGVwIChpbiBkZWZhdWx0IGNhc2UsIGl0IGNvbWVzIGZyb20gZXh0ZXJuYWwgc2VydmVyIHJlcXVlc3QpXG4gICAgdGhpcy5faGFuZGxlYmFycyA9IHRlbXBsYXRlcy5faGI7XG4gICAgdGhpcy5fdGVtcGxhdGVzID0gdGVtcGxhdGVzO1xuXG4gICAgLy8gVE9ETyhiaWxseSkgT25jZSB3ZSByZS13cml0ZSB0ZW1wbGF0ZXMgdXNpbmcgdGhlIG5ldyBoZWxwZXJzIGxpYnJhcnlcbiAgICAvLyB3ZSBwcm9iYWJseSBkb24ndCBuZWVkIHRoZXNlIGN1c3RvbSBoZWxwZXJzIGFueW1vcmVcbiAgICB0aGlzLl9yZWdpc3RlckN1c3RvbUhlbHBlcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZWdpc3RlckhlbHBlciBpcyBhIHB1YmxpYyBpbnRlcmZhY2UgZm9yIGV4dGVybmFsIGRlcGVuZGVuY2llcyB0b1xuICAgKiByZWdpc3RlciB0aGVpciBvd24gY3VzdG9tIGhlbHBlcnMgdG8gb3VyIGludGVybmFsIEhhbmRsZWJhcnMgQ29tcGlsZXJcbiAgICovXG4gIHJlZ2lzdGVySGVscGVyIChuYW1lLCBjYikge1xuICAgIHRoaXMuX2hhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIobmFtZSwgY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbXBpbGUgYSBoYW5kbGViYXJzIHRlbXBsYXRlIHNvIHRoYXQgaXQgY2FuIGJlIHJlbmRlcmVkLFxuICAgKiB1c2luZyB0aGUge0hhbmRsZWJhcnN9IGNvbXBpbGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZSBUaGUgdGVtcGxhdGUgc3RyaW5nIHRvIGNvbXBpbGVcbiAgICovXG4gIGNvbXBpbGUgKHRlbXBsYXRlKSB7XG4gICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZWJhcnMuY29tcGlsZSh0ZW1wbGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogcmVuZGVyIHdpbGwgcmVuZGVyIGEgdGVtcGxhdGUgd2l0aCBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgUHJvdmlkZSBlaXRoZXIgYSB0ZW1wbGF0ZU5hbWUgb3IgYSBwcmUtY29tcGlsZWQgdGVtcGxhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gcHJvdmlkZSB0byB0aGUgdGVtcGxhdGVcbiAgICovXG4gIHJlbmRlciAoY29uZmlnLCBkYXRhKSB7XG4gICAgLy8gSWYgYSBjdXN0b20gdGVtcGxhdGUgaXMgcHJvdmlkZWQsIHVzZSBpdCxcbiAgICAvLyBvdGhlcndpc2UgZmFsbCBiYWNrIHRvIHRoZSB0ZW1wbGF0ZSBuYW1lXG4gICAgLy8gVE9ETyhiaWxseSkgVGhpcyBpbnRlcmZhY2Ugc2hvdWxkIHByb2JhYmx5IGJlIGxlc3MgdWdseVxuICAgIGlmIChjb25maWcudGVtcGxhdGUgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBjb25maWcudGVtcGxhdGUoZGF0YSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXNbY29uZmlnLnRlbXBsYXRlTmFtZV0oZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gbm90IGZpbmQvcmVuZGVyIHRlbXBsYXRlOiAnICsgY29uZmlnLnRlbXBsYXRlTmFtZSwgZSk7XG4gICAgfVxuICB9XG5cbiAgX3JlZ2lzdGVyQ3VzdG9tSGVscGVycyAoKSB7XG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignaWZlcScsIGZ1bmN0aW9uIChhcmcxLCBhcmcyLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gKGFyZzEgPT09IGFyZzIpID8gb3B0aW9ucy5mbih0aGlzKSA6IG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2lmbm90ZXEnLCBmdW5jdGlvbiAoYXJnMSwgYXJnMiwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIChhcmcxICE9PSBhcmcyKSA/IG9wdGlvbnMuZm4odGhpcykgOiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdmb3JtYXRQaG9uZU51bWJlcicsIGZ1bmN0aW9uIChwaG9uZU51bWJlclN0cmluZykge1xuICAgICAgdmFyIGNsZWFuZWQgPSAoJycgKyBwaG9uZU51bWJlclN0cmluZykucmVwbGFjZSgvXFxEL2csICcnKTtcbiAgICAgIHZhciBtYXRjaCA9IGNsZWFuZWQubWF0Y2goL14oMXwpPyhcXGR7M30pKFxcZHszfSkoXFxkezR9KSQvKTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICB2YXIgaW50bENvZGUgPSAobWF0Y2hbMV0gPyAnKzEgJyA6ICcnKTtcbiAgICAgICAgcmV0dXJuIFtpbnRsQ29kZSwgJygnLCBtYXRjaFsyXSwgJykgJywgbWF0Y2hbM10sICctJywgbWF0Y2hbNF1dLmpvaW4oJycpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdhc3NpZ24nLCBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgb3B0aW9ucyA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcblxuICAgICAgaWYgKCFvcHRpb25zLmRhdGEucm9vdCkge1xuICAgICAgICBvcHRpb25zLmRhdGEucm9vdCA9IHt9O1xuICAgICAgfVxuXG4gICAgICBsZXQgdiA9ICcnO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICB2ID0gdiArIGFyZ3NbaV07XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMuZGF0YS5yb290W25hbWVdID0gdjtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2pzb24nLCBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBuYW1lID09PSB1bmRlZmluZWRcbiAgICAgICAgPyAnJ1xuICAgICAgICA6IEpTT04uc3RyaW5naWZ5KG5hbWUpO1xuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgSGFuZGxlYmFyc1JlbmRlcmVyIGZyb20gJy4vaGFuZGxlYmFyc3JlbmRlcmVyJztcblxuLy8gSW4gdGhlIGZ1dHVyZSwgdGhpcyB3aWxsIGNvbnRhaW4gYWxsIGRpZmZlcmVudCB0eXBlcyBvZiByZW5kZXJlcnNcbi8vIEUuZy4gTXVzdGFjaGUsIFNPWSwgSGFuZGxlQmFycywgUmVhY3QsIGV0Yy5cbmV4cG9ydCBjb25zdCBSZW5kZXJlcnMgPSB7XG4gIFNPWTogUmVuZGVyZXIsXG4gIEhhbmRsZWJhcnM6IEhhbmRsZWJhcnNSZW5kZXJlclxufTtcbiIsIi8qKiBAbW9kdWxlIERPTSAqL1xuXG4vKiBnbG9iYWwgSFRNTEVsZW1lbnQsIEhUTUxEb2N1bWVudCwgV2luZG93LCBFdmVudCAqL1xuXG5sZXQgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG5sZXQgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuXG4vKipcbiAqIFN0YXRpYyBpbnRlcmZhY2UgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIERPTSBBUEkuXG4gKiBAbmFtZXNwYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTSB7XG4gIHN0YXRpYyBzZXR1cCAoZCwgcCkge1xuICAgIGRvY3VtZW50ID0gZDtcbiAgICBwYXJzZXIgPSBwO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZSBhIEhUTUxFbGVtZW50IGZyb20gYW5kIEhUTUwgc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBodG1sIFRoZSBIVE1MIHRvIHBhcnNlIHRvIGEgRE9NIG5vZGUuXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZSAoaHRtbCkge1xuICAgIHJldHVybiBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGh0bWwsICd0ZXh0L2h0bWwnKS5ib2R5O1xuICB9XG5cbiAgLyoqXG4gICAqIHF1ZXJ5IHRoZSBET00gZm9yIGEgZ2l2ZW4gY3NzIHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudCBPcHRpb25hbCBjb250ZXh0IHRvIHVzZSBmb3IgYSBzZWFyY2guIERlZmF1bHRzIHRvIGRvY3VtZW50IGlmIG5vdCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIHRoZSBDU1Mgc2VsZWN0b3IgdG8gcXVlcnkgZm9yXG4gICAqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gdGhlIEZJUlNUIG5vZGUgaXQgZmluZHMsIGlmIGFueVxuICAgKi9cbiAgc3RhdGljIHF1ZXJ5IChwYXJlbnQsIHNlbGVjdG9yKSB7XG4gICAgLy8gRmFjYWRlLCBzaGlmdGluZyB0aGUgc2VsZWN0b3IgdG8gdGhlIHBhcmVudCBhcmd1bWVudCBpZiBvbmx5IG9uZVxuICAgIC8vIGFyZ3VtZW50IGlzIHByb3ZpZGVkXG4gICAgaWYgKHNlbGVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNlbGVjdG9yID0gcGFyZW50O1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBXaW5kb3cgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQpIHtcbiAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIHF1ZXJ5IHRoZSBET00gZm9yIGEgZ2l2ZW4gY3NzIHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudCBPcHRpb25hbCBjb250ZXh0IHRvIHVzZSBmb3IgYSBzZWFyY2guIERlZmF1bHRzIHRvIGRvY3VtZW50IGlmIG5vdCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIHRoZSBDU1Mgc2VsZWN0b3IgdG8gcXVlcnkgZm9yXG4gICAqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gdGhlIEZJUlNUIG5vZGUgaXQgZmluZHMsIGlmIGFueVxuICAgKi9cbiAgc3RhdGljIHF1ZXJ5QWxsIChwYXJlbnQsIHNlbGVjdG9yKSB7XG4gICAgLy8gRmFjYWRlLCBzaGlmdGluZyB0aGUgc2VsZWN0b3IgdG8gdGhlIHBhcmVudCBhcmd1bWVudCBpZiBvbmx5IG9uZVxuICAgIC8vIGFyZ3VtZW50IGlzIHByb3ZpZGVkXG4gICAgaWYgKHNlbGVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNlbGVjdG9yID0gcGFyZW50O1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBXaW5kb3cpIHtcbiAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICB9XG5cbiAgc3RhdGljIG9uUmVhZHkgKGNiKSB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRlZCcgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJykge1xuICAgICAgY2IoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBET00ub24oZG9jdW1lbnQsICdET01Db250ZW50TG9hZGVkJywgY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZUVsZSB3aWxsIGNyZWF0ZSBhIHtIVE1MRWxlbWVudH0gYW5kIGFwcGx5IHRoZSBwcm9wZXJ0aWVzIGF0dHJpYnV0ZXMgdGhyb3VnaCBhbiBvYmplY3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbCBUaGUgZWxlbWVudCBgdGFnYCBuYW1lIHRvIGNvbnN0cnVjdFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c19kYXRhIE9wdGlvbmFsIGF0dHJpYnV0ZXMgdG8gYXBwbHkgdG8gdGhlIG5ldyBIVE1MRWxlbWVudFxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUVsIChlbCwgb3B0c19kYXRhID0ge30pIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwpO1xuICAgIGxldCBwcm9wcyA9IE9iamVjdC5rZXlzKG9wdHNfZGF0YSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocHJvcHNbaV0gPT09ICdjbGFzcycpIHtcbiAgICAgICAgRE9NLmFkZENsYXNzKG5vZGUsIG9wdHNfZGF0YVtwcm9wc1tpXV0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbm9kZVtwcm9wc1tpXV0gPSBvcHRzX2RhdGFbcHJvcHNbaV1dO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIGFwcGVuZCAocGFyZW50LCBub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbm9kZSA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcGFyZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgcGFyZW50ID0gRE9NLnF1ZXJ5KHBhcmVudCk7XG4gICAgfVxuXG4gICAgLy8gU3VwcG9ydCBIVE1MIGluamVjdGlvbiBhcyB3ZWxsIGFzIEhUTUxFbGVtZW50IGFwcGVuZHNcbiAgICBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlckJlZ2luJywgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYWRkQ2xhc3MgKG5vZGUsIGNsYXNzTmFtZSkge1xuICAgIGxldCBjbGFzc2VzID0gY2xhc3NOYW1lLnNwbGl0KCcsJyk7XG4gICAgbGV0IGxlbiA9IGNsYXNzZXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzZXNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBlbXB0eSAocGFyZW50KSB7XG4gICAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgc3RhdGljIGNzcyAoc2VsZWN0b3IsIHN0eWxlcykge1xuICAgIGxldCBub2RlID0gRE9NLnF1ZXJ5KHNlbGVjdG9yKTtcblxuICAgIGZvciAobGV0IHByb3AgaW4gc3R5bGVzKSB7XG4gICAgICBub2RlLnN0eWxlW3Byb3BdID0gc3R5bGVzW3Byb3BdO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhdHRyIChzZWxlY3RvciwgYXR0ciwgdmFsKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsKTtcbiAgfVxuXG4gIHN0YXRpYyB0cmlnZ2VyIChzZWxlY3RvciwgZXZlbnQsIHNldHRpbmdzKSB7XG4gICAgbGV0IGUgPSBuZXcgRXZlbnQoZXZlbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgJ2J1YmJsZXMnOiB0cnVlLFxuICAgICAgJ2NhbmNlbGFibGUnOiB0cnVlXG4gICAgfSwgc2V0dGluZ3MgfHwge30pKTtcblxuICAgIERPTS5xdWVyeShzZWxlY3RvcikuZGlzcGF0Y2hFdmVudChlKTtcbiAgfVxuXG4gIHN0YXRpYyBvbiAoc2VsZWN0b3IsIGV2dCwgaGFuZGxlcikge1xuICAgIERPTS5xdWVyeShzZWxlY3RvcikuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIG9mZiAoc2VsZWN0b3IsIGV2dCwgaGFuZGxlcikge1xuICAgIERPTS5xdWVyeShzZWxlY3RvcikucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGRlbGVnYXRlIChjdHh0LCBzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgbGV0IGVsID0gRE9NLnF1ZXJ5KGN0eHQpO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICB3aGlsZSAoIXRhcmdldC5pc0VxdWFsTm9kZShlbCkpIHtcbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIGhhbmRsZXIoZXZlbnQsIHRhcmdldCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFN0YXRlICovXG5cbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vLi4vY29yZS9ldmVudGVtaXR0ZXIvZXZlbnRlbWl0dGVyJztcblxuLyoqXG4gKiBTdGF0ZSBjb250YWlucyB0aGUgZGF0YSBmb3IgdGhlIGNvbXBvbmVudFxuICogYW5kIGV4cG9zZXMgYW4ge0V2ZW50RW1pdHRlcn0gaW50ZXJmYWNlIHNvIHRoYXQgZXh0ZXJuYWxcbiAqIGRlcGVuZGVuY2llcyBjYW4gbGlzdGVuL2hvb2sgc3Vic2NyaWJlIHRvIG1lc3NhZ2VzL3VwZGF0ZXMuXG4gKiBAZXh0ZW5kcyBFdmVudEVtaXR0ZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoZGF0YSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N0YXRlID0gZGF0YSB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICogTk9URShiaWxseSk6IERvZXMgbm90IGZpcmUgYW4gdXBkYXRlIG1lc3NhZ2VcbiAgICovXG4gIGluaXQgKHByb3AsIG9wdFZhbCkge1xuICAgIHRoaXMuX3NldChwcm9wLCBvcHRWYWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldHRlciBmb3IgdGhlIHN0YXRlXG4gICAqIEBwYXJhbSBwcm9wIHtzdHJpbmd8T2JqZWN0fSBUaGUgcHJvcGVydHkgdG8gc2V0XG4gICAqIEBwYXJhbSBvcHRWYWwgT3B0aW9uYWwsIGlmIHByb3AgaXMgYSB7c3RyaW5nfSwgaXQgd2lsbCBhc3NpZ24gdGhlIHZhbHVlIHRvIHRoYXQgcHJvcGVydHlcbiAgICovXG4gIHNldCAocHJvcCwgb3B0VmFsKSB7XG4gICAgdGhpcy5fc2V0KHByb3AsIG9wdFZhbCk7XG4gICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXR0ZXIgZm9yIHRoZSBzdGF0ZSBlbmFibGVzIHlvdSB0byB1cGRhdGUgYSBzaW5nbGUgcHJvcGVydHksIG9yIGNvbXBsZXRlIHN0YXRlXG4gICAqIGRlcGVuZGluZyBvbiB0aGUgYXJndW1lbnRzIHByb3ZpZGVkLlxuICAgKiBAcGFyYW0gcHJvcCB7c3RyaW5nfE9iamVjdH0gVGhlIHByb3BlcnR5IHRvIHNldFxuICAgKiBAcGFyYW0gb3B0VmFsIElmIHByb3AgaXMgYSB7c3RyaW5nfSwgcHJvdmlkZSBpdHMgdmFsdWVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZXQgKHByb3AsIG9wdFZhbCkge1xuICAgIGlmIChvcHRWYWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fc3RhdGUgPSBwcm9wO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zdGF0ZVtwcm9wXSA9IG9wdFZhbDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUgKGRhdGEpIHtcbiAgICB0aGlzLl9zdGF0ZSA9IGRhdGE7XG4gICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBhIHByb3BlcnRpZXMgdmFsdWUgZnJvbSB0aGUgc3RhdGVcbiAgICogSWYgbm8gcHJvcGVydHkgcHJvdmlkZWQsIHJldHVybiB0aGUgZnVsbCBzdGF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0UHJvcCBvcHRpb25hbCBwcm9wZXJ0eSB0byByZXRyaWV2ZVxuICAgKi9cbiAgZ2V0IChvcHRQcm9wKSB7XG4gICAgaWYgKG9wdFByb3AgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc3RhdGVbb3B0UHJvcF07XG4gIH1cblxuICBoYXMgKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVbcHJvcF0gIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGFzSlNPTiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICB9XG59XG4iLCIvKipcbiAqIE1vZGVsIGZvciB0aGUgYW5hbHl0aWNzIGV2ZW50IHR5cGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5hbHl0aWNzRXZlbnQge1xuICBjb25zdHJ1Y3RvciAodHlwZSwgbGFiZWwpIHtcbiAgICB0aGlzLmV2ZW50VHlwZSA9IHR5cGUudG9VcHBlckNhc2UoKTtcbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgcHJvdmlkZWQgb3B0aW9ucyB0byB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgQWRkaXRpb25hbCBvcHRpb25zIGZvciB0aGUgZXZlbnRcbiAgICovXG4gIGFkZE9wdGlvbnMgKG9wdGlvbnMpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZXZlbnQgaW4gdGhlIGFwaSBmb3JtYXQsIHR5cGljYWxseSBmb3IgcmVwb3J0aW5nIHRvIHRoZSBhcGlcbiAgICovXG4gIHRvQXBpRXZlbnQgKCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQW5hbHl0aWNzUmVwb3J0ZXIgKi9cblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCBBbmFseXRpY3NFdmVudCBmcm9tICcuL2FuYWx5dGljc2V2ZW50JztcbmltcG9ydCB7IEFuc3dlcnNBbmFseXRpY3NFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvcnMnO1xuaW1wb3J0IHsgQU5BTFlUSUNTX0JBU0VfVVJMIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBDbGFzcyBmb3IgcmVwb3J0aW5nIGFuYWx5dGljcyBldmVudHMgdG8gdGhlIHNlcnZlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmFseXRpY3NSZXBvcnRlciB7XG4gIGNvbnN0cnVjdG9yIChhcGlLZXksIGFuc3dlcnNLZXkpIHtcbiAgICB0aGlzLl9hcGlLZXkgPSBhcGlLZXk7XG4gICAgdGhpcy5fYW5zd2Vyc0tleSA9IGFuc3dlcnNLZXk7XG5cbiAgICAvLyBUT0RPKGpkZWxlcm1lKTogVGVtcG9yYXJ5IHdvcmthcm91bmQgZm9yIGdldHRpbmcgaW50ZXJuYWwgYnVzaW5lc3MgSUQgZm9yIHRoZSBhbmFseXRpY3MgZW5kcG9pbnRcbiAgICAvLyBUbyBiZSByZW1vdmVkIHdoZW4gdGhlIGVuZHBvaW50IGlzIG1vdmVkIGJlaGluZCBsaXZlYXBpXG4gICAgY29uc3QgYnVzaW5lc3NJZFJlcSA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvcXVlcnknLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiAyMDE5MDMwMSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiAnJyxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBidXNpbmVzc0lkUmVxLmdldCgpLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihkID0+IHtcbiAgICAgIHRoaXMuX2J1c2luZXNzSWQgPSBkLnJlc3BvbnNlLmJ1c2luZXNzSWQ7XG4gICAgfSk7XG4gIH1cblxuICByZXBvcnQgKGV2ZW50KSB7XG4gICAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBBbmFseXRpY3NFdmVudCkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQW5hbHl0aWNzRXJyb3IoJ1RyaWVkIHRvIHNlbmQgaW52YWxpZCBhbmFseXRpY3MgZXZlbnQnLCBldmVudCk7XG4gICAgfVxuXG4gICAgZXZlbnQuYWRkT3B0aW9ucyh7IGFuc3dlcnNLZXk6IHRoaXMuX2Fuc3dlcnNLZXkgfSk7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgYmFzZVVybDogQU5BTFlUSUNTX0JBU0VfVVJMLFxuICAgICAgZW5kcG9pbnQ6IGAvcmVhbHRpbWVhbmFseXRpY3MvZGF0YS9hbnN3ZXJzLyR7dGhpcy5fYnVzaW5lc3NJZH1gLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiAyMDE5MDMwMSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnZGF0YSc6IGV2ZW50LnRvQXBpRXZlbnQoKVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVxdWVzdC5wb3N0KClcbiAgICAgIC5jYXRjaChjb25zb2xlLmVycik7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIENvbXBvbmVudCAqL1xuXG5pbXBvcnQgeyBSZW5kZXJlcnMgfSBmcm9tICcuLi9yZW5kZXJpbmcvY29uc3QnO1xuXG5pbXBvcnQgRE9NIGZyb20gJy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0YXRlIGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgQW5hbHl0aWNzUmVwb3J0ZXIgfSBmcm9tICcuLi8uLi9jb3JlJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcblxuLyoqXG4gKiBDb21wb25lbnQgaXMgYW4gYWJzdHJhY3Rpb24gdGhhdCBlbmNhcHN1bGF0ZXMgc3RhdGUsIGJlaGF2aW9yLFxuICogYW5kIHZpZXcgZm9yIGEgcGFydGljdWxhciBjaHVuayBvZiBmdW5jdGlvbmFsaXR5IG9uIHRoZSBwYWdlLlxuICpcbiAqIFRoZSBBUEkgZXhwb3NlcyBldmVudCBsaWZlIGN5Y2xlIGhvb2tzIGZvciB3aGVuIHRoaW5ncyBhcmUgcmVuZGVyZWQsXG4gKiBtb3VudGVkLCBjcmVhdGVkLCBldGMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yICh0eXBlLCBvcHRzID0ge30pIHtcbiAgICAvLyBTaW1wbGUgZmFjYWRlIHBhdHRlcm4gdG8gZW5hYmxlIHRoZSB1c2VyIHRvIHBhc3MgYSBzaW5nbGUgb2JqZWN0XG4gICAgLy8gY29udGFpbmluZyBhbGwgdGhlIG5lY2Vzc2FyeSBvcHRpb25zIGFuZCBzZXR0aW5nc1xuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG9wdHMgPSB0eXBlO1xuICAgICAgdHlwZSA9IG9wdHMudHlwZTtcbiAgICB9XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFVuaXF1ZSBuYW1lIG9mIHRoaXMgY29tcG9uZW50IGluc3RhbmNlXG4gICAgICogVXNlZCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIG90aGVyIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgdHlwZVxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5uYW1lID0gb3B0cy5uYW1lIHx8IHRoaXMuY29uc3RydWN0b3IubmFtZTtcblxuICAgIC8qKlxuICAgICAqIENhY2hlIHRoZSBvcHRpb25zIHNvIHRoYXQgd2UgY2FuIHByb3BvZ2F0ZSBwcm9wZXJseSB0byBjaGlsZCBjb21wb25lbnRzXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9vcHRzID0gb3B0cztcblxuICAgIC8qKlxuICAgICAqIEFuIGlkZW50aWZpZXIgdXNlZCB0byBjbGFzc2lmeSB0aGUgdHlwZSBvZiBjb21wb25lbnQuXG4gICAgICogVGhlIGNvbXBvbmVudCBtYW5hZ2VyIHVzZXMgdGhpcyBpbmZvcm1hdGlvbiBpbiBvcmRlciB0byBwZXJzaXN0IGFuZCBvcmdhbml6ZSBjb21wb25lbnRzXG4gICAgICogQHR5cGUge3N0cmluZ3xDb21wb25lbnRUeXBlfVxuICAgICAqL1xuICAgIHRoaXMuX3R5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgcGFyZW50IGNvbXBvbmVudCwgaWYgZXhpc3RzXG4gICAgICogQHR5cGUge0NvbXBvbmVudH1cbiAgICAgKi9cbiAgICB0aGlzLl9wYXJlbnQgPSBvcHRzLnBhcmVudCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBjb250YWluZXIgZm9yIGFsbCB0aGUgY2hpbGQgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtDb21wb25lbnRbXX1cbiAgICAgKi9cbiAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN0YXRlIChkYXRhKSBvZiB0aGUgY29tcG9uZW50IHRvIGJlIHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9zdGF0ZSA9IG5ldyBTdGF0ZShvcHRzLnN0YXRlKTtcblxuICAgIC8qKlxuICAgICAqIFRPRE8oYmlsbHkpIFRoaXMgc2hvdWxkIGJlICdzZXJ2aWNlcydcbiAgICAgKi9cbiAgICB0aGlzLmNvcmUgPSBvcHRzLmNvcmUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlciwgd2hpY2ggY29udGFpbnMgYWxsIG9mIHRoZSBjb21wb25lbnQgY2xhc3Nlc1xuICAgICAqIGVsaWdpYmxlIHRvIGJlIGNyZWF0ZWRcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50TWFuYWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIgPSBvcHRzLmNvbXBvbmVudE1hbmFnZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBhbmFseXRpY3MgcmVwb3J0ZXIsIHVzZWQgdG8gcmVwb3J0IGV2ZW50cyBmb3IgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7QW5hbHl0aWNzUmVwb3J0ZXJ9XG4gICAgICovXG4gICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlciA9IG9wdHMuYW5hbHl0aWNzUmVwb3J0ZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBET00gbm9kZSB0aGF0IHRoZSBjb21wb25lbnQgd2lsbCBiZSBhcHBlbmRlZCB0byB3aGVuIG1vdW50ZWQvcmVuZGVyZWQuXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIGlmICh0eXBlb2Ygb3B0cy5jb250YWluZXIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBgY29udGFpbmVyYCBvcHRpb24gZm9yIGNvbXBvbmVudCBjb25maWd1cmF0aW9uLiBNdXN0IGJlIG9mIHR5cGUgYHN0cmluZ2AuJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jb250YWluZXIgPSBET00ucXVlcnkob3B0cy5jb250YWluZXIpIHx8IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IERPTS5xdWVyeSh0aGlzLl9wYXJlbnQuX2NvbnRhaW5lciwgb3B0cy5jb250YWluZXIpO1xuXG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgcGFyZW50LCBhbmQgdGhlIGNvbnRhaW5lciBpcyBtaXNzaW5nIGZyb20gdGhlIERPTSxcbiAgICAgIC8vIHdlIGNvbnN0cnVjdCB0aGUgY29udGFpbmVyIGFuZCBhcHBlbmQgaXQgdG8gdGhlIHBhcmVudFxuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBET00uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogb3B0cy5jb250YWluZXIuc3Vic3RyaW5nKDEsIG9wdHMuY29udGFpbmVyLmxlbmd0aClcbiAgICAgICAgfSk7XG4gICAgICAgIERPTS5hcHBlbmQodGhpcy5fcGFyZW50Ll9jb250YWluZXIsIHRoaXMuX2NvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBjb250YWluZXIgRE9NIG5vZGU6ICcgKyBvcHRzLmNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gY2xhc3MgdG8gYmUgYXBwbGllZCB0byB7dGhpcy5fY29udGFpbmVyfSBub2RlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9jbGFzc05hbWUgPSBvcHRzLmNsYXNzIHx8ICdjb21wb25lbnQnO1xuXG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gcmVuZGVyIGZ1bmN0aW9uIHRvIGJlIHVzZWQgaW5zdGVhZCBvZiB1c2luZyB0aGUgZGVmYXVsdCByZW5kZXJlclxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXIgPSBvcHRzLnJlbmRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGRlZmF1bHQge1JlbmRlcmVyfSB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgcmVuZGVyaW5nIHRoZSB0ZW1wbGF0ZVxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXJlciA9IG9wdHMucmVuZGVyZXIgfHwgUmVuZGVyZXJzLkhhbmRsZWJhcnM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgc3RyaW5nIHRvIHVzZSBmb3IgcmVuZGVyaW5nIHRoZSBjb21wb25lbnRcbiAgICAgKiBJZiB0aGlzIGlzIGxlZnQgZW1wdHksIHdlIGxvb2t1cCB0aGUgdGVtcGxhdGUgdGhlIGJhc2UgdGVtcGxhdGVzIHVzaW5nIHRoZSB0ZW1wbGF0ZU5hbWVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlID0gb3B0cy50ZW1wbGF0ZSA/IHRoaXMuX3JlbmRlcmVyLmNvbXBpbGUob3B0cy50ZW1wbGF0ZSkgOiBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlTmFtZSB0byB1c2UgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50LlxuICAgICAqIFRoaXMgaXMgb25seSB1c2VkIGlmIF90ZW1wbGF0ZSBpcyBlbXB0eS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IG9wdHMudGVtcGxhdGVOYW1lIHx8ICdkZWZhdWx0JztcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHN0YXRlIGluZGljYXRpbmcgd2hldGhlciBvciBub3QgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBtb3VudGVkIHRvIHRoZSBET01cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjaywgdGhhdHMgdXNlZCB0byB0cmFuc2Zvcm0gdGhlIGludGVybmFsIGRhdGFcbiAgICAgKiBtb2RlbHMgb2YgdGhlIGNvbXBvbmVudHMsIGJlZm9yZSBpdCBnZXRzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudCBzdGF0ZS5cbiAgICAgKiBCeSBkZWZhdWx0LCBubyB0cmFuc2Zvcm1hdGlvbiBoYXBwZW5zLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLnRyYW5zZm9ybURhdGEgPSBvcHRzLnRyYW5zZm9ybURhdGEgfHwgdGhpcy50cmFuc2Zvcm1EYXRhIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIGEgY29tcG9uZW50IGlzIGNyZWF0ZWQuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMub25DcmVhdGUgPSBvcHRzLm9uQ3JlYXRlIHx8IHRoaXMub25DcmVhdGUgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnQgaXMgTW91bnRlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vbk1vdW50ID0gb3B0cy5vbk1vdW50IHx8IHRoaXMub25Nb3VudCB8fCBmdW5jdGlvbiAoKSB7IH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnRzIHN0YXRlIGlzIHVwZGF0ZWQuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMub25VcGRhdGUgPSBvcHRzLm9uVXBkYXRlIHx8IHRoaXMub25VcGRhdGUgfHwgZnVuY3Rpb24gKCkgeyB9O1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0NvbXBvbmVudCc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpbml0IChvcHRzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShvcHRzLmRhdGEgfHwgb3B0cy5zdGF0ZSB8fCB7fSk7XG4gICAgdGhpcy5vbkNyZWF0ZSgpO1xuICAgIHRoaXMuX3N0YXRlLm9uKCd1cGRhdGUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uVXBkYXRlKCk7XG4gICAgICB0aGlzLm1vdW50KCk7XG4gICAgfSk7XG5cbiAgICBET00uYWRkQ2xhc3ModGhpcy5fY29udGFpbmVyLCB0aGlzLl9jbGFzc05hbWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICB0aGlzLl9zdGF0ZS5zZXQoZGF0YSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRTdGF0ZSAocHJvcCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5nZXQocHJvcCk7XG4gIH1cblxuICBoYXNTdGF0ZSAocHJvcCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5oYXMocHJvcCk7XG4gIH1cblxuICB0cmFuc2Zvcm1EYXRhIChkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBhZGRDaGlsZCAoZGF0YSwgdHlwZSwgb3B0cykge1xuICAgIGxldCBjaGlsZENvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoXG4gICAgICB0eXBlLFxuICAgICAgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcbiAgICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9LCBvcHRzIHx8IHt9LCB7XG4gICAgICAgIF9wYXJlbnRPcHRzOiB0aGlzLl9vcHRzXG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGNoaWxkQ29tcG9uZW50KTtcbiAgICByZXR1cm4gY2hpbGRDb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSByZW5kZXIgbWV0aG9kIHRvIGJlIHVzZWQgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlbmRlclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBzZXRSZW5kZXIgKHJlbmRlcikge1xuICAgIHRoaXMuX3JlbmRlciA9IHJlbmRlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHJlbmRlcmVyIGZvciB0aGUgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7UmVuZGVyZXJUeXBlfSByZW5kZXJlclxuICAgKi9cbiAgc2V0UmVuZGVyZXIgKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSBSZW5kZXJlcnNbcmVuZGVyZXJdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRlbXBsYXRlIGZvciB0aGUgY29tcG9uZW50IHRvIHVzZSB3aGVuIHJlbmRlcmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAgICovXG4gIHNldFRlbXBsYXRlICh0ZW1wbGF0ZSkge1xuICAgIHRoaXMuX3RlbXBsYXRlID0gdGhpcy5fcmVuZGVyZXIuY29tcGlsZSh0ZW1wbGF0ZSk7XG4gIH1cblxuICB1bk1vdW50ICgpIHtcbiAgICBET00uZW1wdHkodGhpcy5fY29udGFpbmVyKTtcbiAgfVxuXG4gIG1vdW50ICgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy51bk1vdW50KCk7XG4gICAgaWYgKHRoaXMuYmVmb3JlTW91bnQoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIERPTS5hcHBlbmQodGhpcy5fY29udGFpbmVyLCB0aGlzLnJlbmRlcih0aGlzLl9zdGF0ZS5hc0pTT04oKSkpO1xuXG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9vbk1vdW50KCk7XG5cbiAgICAvLyBBdHRhY2ggYW5hbHl0aWNzIGhvb2tzIGFzIG5lY2Vzc2FyeVxuICAgIGxldCBkb21Ib29rcyA9IERPTS5xdWVyeUFsbCh0aGlzLl9jb250YWluZXIsICdbZGF0YS1ldmVudHR5cGVdJyk7XG4gICAgZG9tSG9va3MuZm9yRWFjaCh0aGlzLl9jcmVhdGVBbmFseXRpY3NIb29rLmJpbmQodGhpcykpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfb25Nb3VudCAoKSB7XG4gICAgdGhpcy5vbk1vdW50KHRoaXMpO1xuICAgIGlmICh0aGlzLl9jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgIGNoaWxkLl9vbk1vdW50KCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogcmVuZGVyIHRoZSB0ZW1wbGF0ZSB1c2luZyB0aGUge1JlbmRlcmVyfSB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGFuZCB0ZW1wbGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICByZW5kZXIgKGRhdGEgPSB0aGlzLl9zdGF0ZS5nZXQoKSkge1xuICAgIHRoaXMuYmVmb3JlUmVuZGVyKCk7XG4gICAgZGF0YSA9IHRoaXMudHJhbnNmb3JtRGF0YShkYXRhKTtcblxuICAgIGxldCBodG1sID0gJyc7XG4gICAgLy8gVXNlIGVpdGhlciB0aGUgY3VzdG9tIHJlbmRlciBmdW5jdGlvbiBvciB0aGUgaW50ZXJuYWwgcmVuZGVyZXJcbiAgICAvLyBkZXBlbmRhbnQgb24gdGhlIGNvbXBvbmVudCBjb25maWd1cmF0aW9uXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGh0bWwgPSB0aGlzLl9yZW5kZXIoZGF0YSk7XG4gICAgICBpZiAodHlwZW9mIGh0bWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVuZGVyIG1ldGhvZCBtdXN0IHJldHVybiBIVE1MIGFzIHR5cGUge3N0cmluZ30nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVuZGVyIHRoZSBleGlzdGluZyB0ZW1wbGF0ZXMgYXMgYSBzdHJpbmdcbiAgICAgIGh0bWwgPSB0aGlzLl9yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgICB0ZW1wbGF0ZTogdGhpcy5fdGVtcGxhdGUsXG4gICAgICAgIHRlbXBsYXRlTmFtZTogdGhpcy5fdGVtcGxhdGVOYW1lXG4gICAgICB9LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvLyBXZSBjcmVhdGUgYW4gSFRNTCBEb2N1bWVudCBmcmFnbWVudCB3aXRoIHRoZSByZW5kZXJlZCBzdHJpbmdcbiAgICAvLyBTbyB0aGF0IHdlIGNhbiBxdWVyeSBpdCBmb3IgcHJvY2Vzc2luZyBvZiBzdWIgY29tcG9uZW50c1xuICAgIGxldCBlbCA9IERPTS5jcmVhdGUoaHRtbCk7XG5cbiAgICAvLyBQcm9jZXNzIHRoZSBET00gdG8gZGV0ZXJtaW5lIGlmIHdlIHNob3VsZCBjcmVhdGVcbiAgICAvLyBpbi1tZW1vcnkgc3ViLWNvbXBvbmVudHMgZm9yIHJlbmRlcmluZ1xuICAgIGxldCBkb21Db21wb25lbnRzID0gRE9NLnF1ZXJ5QWxsKGVsLCAnW2RhdGEtY29tcG9uZW50XScpO1xuICAgIGRvbUNvbXBvbmVudHMuZm9yRWFjaChjID0+IHRoaXMuX2NyZWF0ZVN1YmNvbXBvbmVudChjLCBkYXRhKSk7XG5cbiAgICB0aGlzLmFmdGVyUmVuZGVyKCk7XG4gICAgcmV0dXJuIGVsLmlubmVySFRNTDtcbiAgfVxuXG4gIF9jcmVhdGVTdWJjb21wb25lbnQgKGRvbUNvbXBvbmVudCwgZGF0YSkge1xuICAgIGxldCBkYXRhc2V0ID0gZG9tQ29tcG9uZW50LmRhdGFzZXQ7XG4gICAgbGV0IHR5cGUgPSBkYXRhc2V0LmNvbXBvbmVudDtcbiAgICBsZXQgcHJvcCA9IGRhdGFzZXQucHJvcDtcbiAgICBsZXQgb3B0cyA9IGRhdGFzZXQub3B0cyA/IEpTT04ucGFyc2UoZGF0YXNldC5vcHRzKSA6IHt9O1xuXG4gICAgLy8gUmVuZGVyaW5nIGEgc3ViIGNvbXBvbmVudCBzaG91bGQgYmUgd2l0aGluIHRoZSBjb250ZXh0LFxuICAgIC8vIG9mIHRoZSBub2RlIHRoYXQgd2UgcHJvY2Vzc2VkIGl0IGZyb21cbiAgICBvcHRzID0gT2JqZWN0LmFzc2lnbihvcHRzLCB7XG4gICAgICBjb250YWluZXI6IGRvbUNvbXBvbmVudFxuICAgIH0pO1xuXG4gICAgbGV0IGNoaWxkRGF0YSA9IGRhdGFbcHJvcF07XG5cbiAgICAvLyBUT0RPKGJpbGx5KSBSaWdodCBub3csIGlmIHdlIHByb3ZpZGUgYW4gYXJyYXkgYXMgdGhlIGRhdGEgcHJvcCxcbiAgICAvLyB0aGUgYmVoYXZpb3IgaXMgdG8gY3JlYXRlIG1hbnkgY29tcG9uZW50cyBmb3IgZWFjaCBpdGVtIGluIHRoZSBhcnJheS5cbiAgICAvLyBUSEFUIGludGVyZmFjZSBTSE9VTEQgY2hhbmdlIHRvIHVzZSBhIGRpZmZlcmVudCBwcm9wZXJ0eSB0aGF0IGRlZmluZXNcbiAgICAvLyB3aGV0aGVyIHRvIGFycmF5IGRhdGEgc2hvdWxkIGJlIHVzZWQgZm9yIGEgc2luZ2xlIGNvbXBvbmVudCBvclxuICAgIC8vIHRvIGNyZWF0ZSBtYW55IGNvbXBvbmVudHMgZm9yIGVhY2ggaXRlbS5cbiAgICAvLyBPdmVybG9hZGluZyBhbmQgaGF2aW5nIHRoaXMgc2lkZSBlZmZlY3QgaXMgdW5pbnR1aXRpdmUgYW5kIFdST05HXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNoaWxkRGF0YSkpIHtcbiAgICAgIGxldCBjaGlsZENvbXBvbmVudCA9IHRoaXMuYWRkQ2hpbGQoY2hpbGREYXRhLCB0eXBlLCBvcHRzKTtcbiAgICAgIERPTS5hcHBlbmQoZG9tQ29tcG9uZW50LCBjaGlsZENvbXBvbmVudC5yZW5kZXIoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlLCByZW5kZXIgdGhlIGNvbXBvbmVudCBhcyBleHBlY3RlZFxuICAgIGxldCBjaGlsZEhUTUwgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkQ29tcG9uZW50ID0gdGhpcy5hZGRDaGlsZChjaGlsZERhdGFbaV0sIHR5cGUsIG9wdHMpO1xuICAgICAgY2hpbGRIVE1MLnB1c2goY2hpbGRDb21wb25lbnQucmVuZGVyKCkpO1xuICAgIH1cblxuICAgIERPTS5hcHBlbmQoZG9tQ29tcG9uZW50LCBjaGlsZEhUTUwuam9pbignJykpO1xuICB9XG5cbiAgX2NyZWF0ZUFuYWx5dGljc0hvb2sgKGRvbUNvbXBvbmVudCkge1xuICAgIGNvbnN0IGRhdGFzZXQgPSBkb21Db21wb25lbnQuZGF0YXNldDtcbiAgICBjb25zdCB0eXBlID0gZGF0YXNldC5ldmVudHR5cGU7XG4gICAgY29uc3QgbGFiZWwgPSBkYXRhc2V0LmV2ZW50bGFiZWw7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGRhdGFzZXQuZXZlbnRvcHRpb25zID8gSlNPTi5wYXJzZShkYXRhc2V0LmV2ZW50b3B0aW9ucykgOiB7fTtcblxuICAgIERPTS5vbihkb21Db21wb25lbnQsICdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBBbmFseXRpY3NFdmVudCh0eXBlLCBsYWJlbCk7XG4gICAgICBldmVudC5hZGRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlci5yZXBvcnQoZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uQ3JlYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgY29uc3RydWN0ZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uQ3JlYXRlIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25VcGRhdGUgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgY2hhbmdlc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25VcGRhdGUgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBiZWZvcmVSZW5kZXIgZXZlbnQgaXMgdHJpZ2dlcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHJlbmRlcmVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBiZWZvcmVSZW5kZXIgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBhZnRlclJlbmRlciBldmVudCBpcyB0cmlnZ2VyZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYWZ0ZXJSZW5kZXIgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvbk1vdW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgYXBwZW5kZWQgdG8gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25Nb3VudCAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uVW5Nb3VudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIHJlbW92ZWQgZnJvbSB0aGUgRE9NXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvblVuTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBiZWZvcmVNb3VudCBpcyB0cmlnZ2VyZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZCB0byB0aGUgRE9NXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBiZWZvcmVNb3VudCAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uRGVzdHJveSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25EZXN0cm95IChjYikge1xuXG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE5hdmlnYXRpb25Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG4vKipcbiAqIFRoZSBUYWIgaXMgYSBtb2RlbCB0aGF0IGlzIHVzZWQgdG8gcG93ZXIgdGhlIE5hdmlnYXRpb24gdGFicyBpbiB0aGUgdmlldy5cbiAqIEl0J3MgaW5pdGlhbGl6ZWQgdGhyb3VnaCB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50LlxuICovXG5leHBvcnQgY2xhc3MgVGFiIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSB0YWIgdGhhdCBpcyBleHBvc2VkIGZvciB0aGUgbGlua1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbCA9IGNvbmZpZy5sYWJlbDtcbiAgICBpZiAodHlwZW9mIHRoaXMubGFiZWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCdsYWJlbCBpcyBhIHJlcXVpcmVkIGNvbmZpZ3VyYXRpb24gb3B0aW9uIGZvciB0YWIuJywgJ05hdmlnYXRpb25Db21wb25lbnQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcGxldGUgVVJMLCBpbmNsdWRpbmcgdGhlIHBhcmFtc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy51cmwgPSBjb25maWcudXJsO1xuICAgIGlmICh0eXBlb2YgdGhpcy51cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCd1cmwgaXMgYSByZXF1aXJlZCBjb25maWd1cmF0aW9uIG9wdGlvbiBmb3IgdGFiLicsICdOYXZpZ2F0aW9uQ29tcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlcnZlcnNpZGUgdmVydGljYWwgY29uZmlnIGlkIHRoYXQgdGhpcyBpcyByZWZlcmVuY2VkIHRvLlxuICAgICAqIEJ5IHByb3ZpZGluZyB0aGlzLCBlbmFibGVzIGR5bmFtaWMgc29ydGluZyBiYXNlZCBvbiByZXN1bHRzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5jb25maWdJZCA9IGNvbmZpZy5jb25maWdJZCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhc2UgVVJMIHVzZWQgZm9yIGNvbnN0cnVjdGluZyB0aGUgVVJMIHdpdGggcGFyYW1zXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmJhc2VVcmwgPSBjb25maWcudXJsO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHNob3cgdGhpcyB0YWIgZmlyc3QgaW4gdGhlIG9yZGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc0ZpcnN0ID0gY29uZmlnLmlzRmlyc3QgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRvIGFwcGx5IGEgc3BlY2lhbCBjbGFzcyB0byB0aGVcbiAgICAgKiBtYXJrdXAgdG8gZGV0ZXJtaW5lIGlmIGl0J3MgYW4gYWN0aXZlIHRhYlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNBY3RpdmUgPSBjb25maWcuaXNBY3RpdmUgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogZnJvbSB3aWxsIGNvbnN0cnVjdCBhIG1hcCBvZiBjb25maWdJZCB0byB7VGFifSBmcm9tXG4gICAqIGEgY29uZmlndXJhdGlvbiBmaWxlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0YWJzQ29uZmlnIHRoZSBjb25maWd1cmF0aW9uIHRvIHVzZVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHRhYnNDb25maWcpIHtcbiAgICBsZXQgdGFicyA9IHt9O1xuICAgIC8vIFBhcnNlIHRoZSBvcHRpb25zIGFuZCBidWlsZCBvdXQgb3VyIHRhYnMgYW5kXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzQ29uZmlnLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdGFiID0gdGFic0NvbmZpZ1tpXTtcbiAgICAgIC8vIEZvciB0YWJzIHdpdGhvdXQgY29uZmlnIGlkcywgbWFwIHRoZWlyIFVSTCB0byB0aGUgY29uZmlnSURcbiAgICAgIC8vIHRvIGF2b2lkIGR1cGxpY2F0aW9uIG9mIHJlbmRlcnNcbiAgICAgIGlmICh0YWIuY29uZmlnSWQgPT09IHVuZGVmaW5lZCAmJiB0YWJzW3RhYi5jb25maWdJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YWIuY29uZmlnSWQgPSB0YWIudXJsO1xuICAgICAgfVxuXG4gICAgICB0YWJzW3RhYi5jb25maWdJZF0gPSBuZXcgVGFiKHRhYik7XG4gICAgfVxuICAgIHJldHVybiB0YWJzO1xuICB9XG59XG5cbi8qKlxuICogTmF2aWdhdGlvbkNvbXBvbmVudCBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgYnVpbGRpbmcgYSBkeW5hbWljXG4gKiBuYXZpZ2F0aW9uIHRoYXQgaXMgcG93ZXJlZCBieSB1bml2ZXJzYWwgc2VhcmNoIHVwZGF0ZXMuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGF0YSBzdG9yYWdlIGtleVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLk5BVklHQVRJT047XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGFuZGxlYmFycyB0ZW1wbGF0ZSB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ25hdmlnYXRpb24vbmF2aWdhdGlvbic7XG5cbiAgICAvKipcbiAgICAgKiBVbm9yZGVyZWQgbWFwIG9mIGVhY2ggdGFiLCBrZXllZCBieSBWUyBjb25maWdJZFxuICAgICAqIEB0eXBlIHtPYmplY3QuPFN0cmluZywgT2JqZWN0Pn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RhYnMgPSBUYWIuZnJvbShjb25maWcudGFicyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3JkZXIgb2YgdGhlIHRhYnMsIHBhcnNlZCBmcm9tIGNvbmZpZ3VyYXRpb24gb3IgVVJMLlxuICAgICAqIFRoaXMgZ2V0cyB1cGRhdGVkIGJhc2VkIG9uIHRoZSBzZXJ2ZXIgcmVzdWx0c1xuICAgICAqIEB0eXBlIHtBcnJheS48U3RyaW5nPn0gVGhlIGxpc3Qgb2YgVlMgY29uZmlnSWRzXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90YWJPcmRlciA9IHRoaXMuZ2V0RGVmYXVsdFRhYk9yZGVyKGNvbmZpZy50YWJzLCB0aGlzLmdldFVybFBhcmFtcygpKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdOYXZpZ2F0aW9uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBTaW5jZSB0aGUgc2VydmVyIGRhdGEgb25seSBwcm92aWRlcyBhIGxpc3Qgb2ZcbiAgICogVlMgY29uZmlnSWRzLCB3ZSBuZWVkIHRvIGNvbXB1dGUgYW5kIHRyYW5zZm9ybVxuICAgKiB0aGUgZGF0YSBpbnRvIHRoZSBwcm9wZXIgZm9ybWF0IGZvciByZW5kZXJpbmcuXG4gICAqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBpZiAoZGF0YS50YWJPcmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl90YWJPcmRlciA9IHRoaXMubWVyZ2VUYWJPcmRlcihkYXRhLnRhYk9yZGVyLCB0aGlzLl90YWJPcmRlcik7XG4gICAgfVxuXG4gICAgLy8gU2luY2UgdGhlIHRhYiBvcmRlcmluZyBjYW4gY2hhbmdlIGJhc2VkIG9uIHRoZSBzZXJ2ZXIgZGF0YVxuICAgIC8vIHdlIG5lZWQgdG8gdXBkYXRlIGVhY2ggdGFicyBVUkwgdG8gaW5jbHVkZSB0aGUgb3JkZXIgYXMgcGFydCBvZiB0aGVpciBwYXJhbXMuXG4gICAgLy8gVGhpcyBoZWxwcyB3aXRoIHBlcnNpc3Rpbmcgc3RhdGUgYWNyb3NzIHZlcnRpY2Fscy5cbiAgICBsZXQgdGFicyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdGFiT3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB0YWIgPSB0aGlzLl90YWJzW3RoaXMuX3RhYk9yZGVyW2ldXTtcbiAgICAgIGlmICh0YWIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YWIudXJsID0gdGhpcy5nZW5lcmF0ZVRhYlVybCh0YWIuYmFzZVVybCwgdGhpcy5nZXRVcmxQYXJhbXMoKSk7XG4gICAgICAgIHRhYnMucHVzaCh0YWIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZSh7XG4gICAgICB0YWJzOiB0YWJzXG4gICAgfSk7XG4gIH1cblxuICBnZXRVcmxQYXJhbXMgKCkge1xuICAgIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXREZWZhdWx0VGFiT3JkZXIgd2lsbCBjb21wdXRlIHRoZSBpbml0aWFsIHRhYiBvcmRlcmluZyBiYXNlZFxuICAgKiBvbiBhIGNvbWJpbmF0aW9uIG9mIHRoZSBjb25maWd1cmF0aW9uIHByb3ZpZGVkIGRpcmVjdGx5IHRvIHRoZSBjb21wb25lbnRcbiAgICogYW5kIHRoZSB1cmwgcGFyYW1zLlxuICAgKiBAcGFyYW0ge09iamVjdFtdfSB0YWJzQ29uZmlnXG4gICAqIEBwYXJhbSB7VXJsU2VhcmNoUGFyYW1zfVxuICAgKi9cbiAgZ2V0RGVmYXVsdFRhYk9yZGVyICh0YWJzQ29uZmlnLCB1cmxQYXJhbXMpIHtcbiAgICBsZXQgdGFiT3JkZXIgPSBbXTtcblxuICAgIC8vIFVzZSB0aGUgb3JkZXJpbmcgZnJvbSB0aGUgVVJMIGFzIHRoZSBwcmltYXJ5IGNvbmZpZ3VyYXRpb25cbiAgICAvLyBBbmQgdGhlbiBtZXJnZSBpdCB3aXRoIHRoZSBsb2NhbCBjb25maWd1cmF0aW9uLCBpZiBwcm92aWRlZC5cbiAgICBpZiAodXJsUGFyYW1zICYmIHVybFBhcmFtcy5oYXMoJ3RhYk9yZGVyJykpIHtcbiAgICAgIHRhYk9yZGVyID0gdXJsUGFyYW1zLmdldCgndGFiT3JkZXInKS5zcGxpdCgnLCcpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFic0NvbmZpZy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGFiID0gdGFic0NvbmZpZ1tpXTtcbiAgICAgIC8vIFNvbWUgdGFicyBkb24ndCBoYXZlIGNvbmZpZ0lkLCBzbyB3ZSBtYXAgaXQgZnJvbSBVUkxcbiAgICAgIGlmICh0YWIuY29uZmlnSWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YWIuY29uZmlnSWQgPSB0YWIudXJsO1xuICAgICAgfVxuXG4gICAgICAvLyBBdm9pZCBkdXBsaWNhdGVzIGlmIGNvbmZpZyB3YXMgcHJvdmlkZWQgZnJvbSBVUkxcbiAgICAgIGlmICh0YWJPcmRlci5pbmNsdWRlcyh0YWIuY29uZmlnSWQpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBpc0ZpcnN0IHNob3VsZCBhbHdheXMgYmUgdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhlIGxpc3RcbiAgICAgIGlmICh0YWIuaXNGaXJzdCkge1xuICAgICAgICB0YWJPcmRlci51bnNoaWZ0KHRhYi5jb25maWdJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWJPcmRlci5wdXNoKHRhYi5jb25maWdJZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYk9yZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIG1lcmdlVGFiT3JkZXIgbWVyZ2VzIHR3byBhcnJheXMgaW50byBvbmVcbiAgICogYnkgYXBwZW5kaW5nIGFkZGl0aW9uYWwgdGFicyB0byB0aGUgZW5kIG9mIHRoZSBvcmlnaW5hbCBhcnJheVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB0YWJPcmRlciBUYWIgb3JkZXIgcHJvdmlkZWQgYnkgdGhlIHNlcnZlclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBvdGhlclRhYk9yZGVyIFRhYiBvcmRlciBwcm92aWRlZCBieSBjb25maWd1cmF0aW9uXG4gICAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICAgKi9cbiAgbWVyZ2VUYWJPcmRlciAodGFiT3JkZXIsIG90aGVyVGFiT3JkZXIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG90aGVyVGFiT3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhYkNvbmZpZyA9IG90aGVyVGFiT3JkZXJbaV07XG4gICAgICBpZiAodGFiT3JkZXIuaW5jbHVkZXModGFiQ29uZmlnKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gaXNGaXJzdCBzaG91bGQgYmUgYW4gb3ZlcnJpZGUgdG8gZHluYW1pYyB0YWIgb3JkZXJpbmcuXG4gICAgICBpZiAodGhpcy5fdGFic1t0YWJDb25maWddICYmIHRoaXMuX3RhYnNbdGFiQ29uZmlnXS5pc0ZpcnN0KSB7XG4gICAgICAgIHRhYk9yZGVyLnVuc2hpZnQodGFiQ29uZmlnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhYk9yZGVyLnB1c2godGFiQ29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFiT3JkZXI7XG4gIH1cblxuICBnZW5lcmF0ZVRhYlVybCAoYmFzZVVybCwgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpKSB7XG4gICAgLy8gV2Ugd2FudCB0byBwZXJzaXN0IHRoZSBwYXJhbXMgZnJvbSB0aGUgZXhpc3RpbmcgVVJMIHRvIHRoZSBuZXdcbiAgICAvLyBVUkxTIHdlIGNyZWF0ZS5cbiAgICBwYXJhbXMuc2V0KCd0YWJPcmRlcicsIHRoaXMuX3RhYk9yZGVyKTtcbiAgICByZXR1cm4gYmFzZVVybCArICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXIgKi9cblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIGFwaSBmaWx0ZXIgYW5kIHByb3ZpZGVzIHN0YXRpYyBtZXRob2RzIGZvciBlYXNpbHkgY29uc3RydWN0aW5nIEZpbHRlcnMuXG4gKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIueWV4dC5jb20vZG9jcy9hcGktcmVmZXJlbmNlLyNvcGVyYXRpb24vbGlzdEVudGl0aWVzIGZvciBzdHJ1Y3R1cmUgZGV0YWlsc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXIge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGEgSlNPTiBmb3JtYXQgZmlsdGVyIHJldHVybmVkIGZyb20gdGhlIHNlcnZlciBpbnRvIGEgRmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gcmVzcG9uc2VGaWx0ZXIgQSBmaWx0ZXIgaW4gSlNPTiBmb3JtYXQgcmV0dXJuZWQgZnJvbSB0aGUgYmFja2VuZFxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGZyb21SZXNwb25zZSAocmVzcG9uc2VGaWx0ZXIpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcihKU09OLnBhcnNlKHJlc3BvbnNlRmlsdGVyKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgbmV3IEZpbHRlciByZXByZXNlbnRpbmcgdGhlIE9SIG9mIGFsbCBwcm92aWRlZCBmaWx0ZXJzXG4gICAqIEBwYXJhbSAgey4uLkZpbHRlcn0gZmlsdGVycyBUaGUgZmlsdGVycyB0byBPUiB0b2dldGhlclxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIG9yICguLi5maWx0ZXJzKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgJyRvcic6IGZpbHRlcnNcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBuZXcgRmlsdGVyIHJlcHJlc2VudGluZyB0aGUgQU5EIG9mIGFsbCBwcm92aWRlZCBmaWx0ZXJzXG4gICAqIEBwYXJhbSAgey4uLkZpbHRlcn0gZmlsdGVycyBUaGUgZmlsdGVycyB0byBBTkQgdG9nZXRoZXJcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBhbmQgKC4uLmZpbHRlcnMpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcih7XG4gICAgICAnJGFuZCc6IGZpbHRlcnNcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPUiBmaWx0ZXJzIHdpdGggdGhlIHNhbWUga2V5cywgdGhlbiBBTkQgdGhlIHJlc3VsdGluZyBncm91cHNcbiAgICogQHBhcmFtICB7Li4uRmlsdGVyfSBmaWx0ZXJzIFRoZSBmaWx0ZXJzIHRvIGdyb3VwXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ3JvdXAgKC4uLmZpbHRlcnMpIHtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiBmaWx0ZXJzKSB7XG4gICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhmaWx0ZXIpWzBdO1xuICAgICAgaWYgKCFncm91cHNba2V5XSkge1xuICAgICAgICBncm91cHNba2V5XSA9IFtdO1xuICAgICAgfVxuICAgICAgZ3JvdXBzW2tleV0ucHVzaChmaWx0ZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGdyb3VwRmlsdGVycyA9IFtdO1xuICAgIGZvciAoY29uc3QgZmllbGQgb2YgT2JqZWN0LmtleXMoZ3JvdXBzKSkge1xuICAgICAgZ3JvdXBGaWx0ZXJzLnB1c2goZ3JvdXBzW2ZpZWxkXS5sZW5ndGggPiAxID8gRmlsdGVyLm9yKC4uLmdyb3Vwc1tmaWVsZF0pIDogZ3JvdXBzW2ZpZWxkXVswXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdyb3VwRmlsdGVycy5sZW5ndGggPiAxID8gRmlsdGVyLmFuZCguLi5ncm91cEZpbHRlcnMpIDogZ3JvdXBGaWx0ZXJzWzBdO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImVxdWFsIHRvXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgZXF1YWwgdG9cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBlcXVhbCAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckZXEnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwibGVzcyB0aGFuXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgbGVzcyB0aGFuXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgbGVzc1RoYW4gKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGx0JywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImxlc3MgdGhhbiBvciBlcXVhbCB0b1wiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0b1xuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGxlc3NUaGFuRXF1YWwgKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGxlJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImdyZWF0ZXIgdGhhblwiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhblxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGdyZWF0ZXJUaGFuIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRndCcsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG9cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG9cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBncmVhdGVyVGhhbkVxdWFsIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRnZScsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgaW5jbHVzaXZlIHJhbmdlIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IG1pbiBUaGUgbWluaW11bSB2YWx1ZSBvZiB0aGUgcmFuZ2VcbiAgICogQHBhcmFtIHsqfSBtYXggVGhlIG1heGltdW0gdmFsdWUgb2YgdGhlIHJhbmdlclxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIHJhbmdlIChmaWVsZCwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gRmlsdGVyLmFuZChGaWx0ZXIuZ3JlYXRlclRoYW5FcXVhbChmaWVsZCwgbWluKSwgRmlsdGVyLmxlc3NUaGFuRXF1YWwoZmllbGQsIG1heCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBmaWx0ZXIgd2l0aCB0aGUgZ2l2ZW4gbWF0Y2hlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWF0Y2hlciBUaGUgbWF0Y2hlciBmb3IgdGhlIGZpbGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGZvciB0aGUgZmlsdGVyXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgX2Zyb21NYXRjaGVyIChmaWVsZCwgbWF0Y2hlciwgdmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcih7XG4gICAgICBbZmllbGRdOiB7XG4gICAgICAgIFttYXRjaGVyXTogdmFsdWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VhcmNoQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuLyoqXG4gKiBTZWFyY2hDb21wb25lbnQgZXhwb3NlcyBhbiBpbnRlcmZhY2UgaW4gb3JkZXIgdG8gY3JlYXRlXG4gKiBhIFVJIFNlYXJjaCBleHBlcmllbmNlIGZvciB2ZXJ0aWNhbCBhbmQgdW5pdmVyc2FsIHNlYXJjaC5cbiAqXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIG5hbWUgdG8gdXNlIGZvciByZW5kZXJpbmcgd2l0aCBoYW5kbGViYXJzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAnc2VhcmNoL3NlYXJjaCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgaW5wdXQga2V5IGZvciB0aGUgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBJZiBub3QgcHJvdmlkZWQsIGF1dG8tY29tcGxldGUgYW5kIHNlYXJjaCB3aWxsIGJlIGJhc2VkIG9uIHVuaXZlcnNhbFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYmFyS2V5ID0gb3B0cy5iYXJLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCB2ZXJ0aWNhbCBrZXkgZm9yIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCBhdXRvLWNvbXBsZXRlIGFuZCBzZWFyY2ggd2lsbCBiZSBiYXNlZCBvbiB1bml2ZXJzYWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gb3B0cy52ZXJ0aWNhbEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogUXVlcnkgc3VibWlzc2lvbiBpcyBiYXNlZCBvbiBhIGZvcm0gYXMgY29udGV4dC5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gbmF0aXZlIGZvcm0gbm9kZSB3aXRoaW4gY29udGFpbmVyXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5fZm9ybUVsID0gb3B0cy5mb3JtU2VsZWN0b3IgfHwgJ2Zvcm0nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlucHV0IGVsZW1lbnQgdXNlZCBmb3Igc2VhcmNoaW5nIGFuZCB3aXJlcyB1cCB0aGUga2V5Ym9hcmQgaW50ZXJhY3Rpb25cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2lucHV0RWwgPSBvcHRzLmlucHV0RWwgfHwgJy5qcy15ZXh0LXF1ZXJ5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB1c2VkLCBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgYXMgYSBkYXRhIHBvaW50XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudGl0bGUgPSBvcHRzLnRpdGxlIHx8ICdBbnN3ZXJzIFVuaXZlcnNhbCBTZWFyY2gnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlYXJjaCB0ZXh0IHVzZWQgZm9yIGxhYmVsaW5nIHRoZSBpbnB1dCBib3gsIGFsc28gcHJvdmlkZWQgdG8gdGVtcGxhdGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gb3B0cy5zZWFyY2hUZXh0IHx8ICdXaGF0IGFyZSB5b3UgaW50ZXJlc3RlZCBpbj8nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHRleHQgdG8gc2hvdyBhcyB0aGUgZmlyc3QgaXRlbSBmb3IgYXV0byBjb21wbGV0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnByb21wdEhlYWRlciA9IG9wdHMucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBdXRvIGZvY3VzZXMgdGhlIGlucHV0IGJveCBpZiBzZXQgdG8gdHJ1ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBkZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9Gb2N1cyA9IG9wdHMuYXV0b0ZvY3VzID09PSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogc3VibWl0VVJMIHdpbGwgZm9yY2UgdGhlIHNlYXJjaCBxdWVyeSBzdWJtaXNzaW9uIHRvIGdldFxuICAgICAqIHJlZGlyZWN0ZWQgdG8gdGhlIFVSTCBwcm92aWRlZC5cbiAgICAgKiBPcHRpb25hbCwgZGVmYXVsdHMgdG8gbnVsbC5cbiAgICAgKlxuICAgICAqIElmIG5vIHJlZGlyZWN0VXJsIHByb3ZpZGVkLCB3ZSBrZWVwIHRoZSBwYWdlIGFzIGEgc2luZ2xlIHBhZ2UgYXBwLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZWRpcmVjdFVybCA9IG9wdHMucmVkaXJlY3RVcmwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSBzdHJpbmcgdG8gdXNlIGZvciB0aGUgaW5wdXQgYm94LCBwcm92aWRlZCB0byB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlcnkgPSBvcHRzLnF1ZXJ5IHx8IHRoaXMuZ2V0VXJsUGFyYW1zKCkuZ2V0KCdxdWVyeScpIHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1NlYXJjaEJhcic7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgaWYgKHRoaXMucXVlcnkgJiYgdGhpcy5xdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNvcmUuc2V0UXVlcnkodGhpcy5xdWVyeSk7XG4gICAgICB0aGlzLnNlYXJjaCh0aGlzLnF1ZXJ5KTtcbiAgICB9XG5cbiAgICB0aGlzLmJpbmRCcm93c2VySGlzdG9yeSgpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgLy8gV2lyZSB1cCBvdXIgc2VhcmNoIGhhbmRsaW5nIGFuZCBhdXRvIGNvbXBsZXRlXG4gICAgdGhpcy5pbml0U2VhcmNoKHRoaXMuX2Zvcm1FbCk7XG4gICAgdGhpcy5pbml0QXV0b0NvbXBsZXRlKHRoaXMuX2lucHV0RWwpO1xuXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzID09PSB0cnVlICYmIHRoaXMucXVlcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gdXNlIGZvciB3aXJpbmcgdXAgc2VhcmNoaW5nIG9uIGZvcm0gc3VibWlzc2lvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybVNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBzdWJtaXQgaGFuZGxpbmcgdG9cbiAgICovXG4gIGluaXRTZWFyY2ggKGZvcm1TZWxlY3Rvcikge1xuICAgIHRoaXMuX2Zvcm1FbCA9IGZvcm1TZWxlY3RvcjtcblxuICAgIGxldCBmb3JtID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgZm9ybVNlbGVjdG9yKTtcbiAgICBpZiAoIWZvcm0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGluaXRpYWxpemUgU2VhcmNoQmFyOyBDYW4gbm90IGZpbmQge0hUTUxFbGVtZW50fSBgJywgdGhpcy5fZm9ybUVsLCAnYC4nKTtcbiAgICB9XG5cbiAgICBET00ub24oZm9ybSwgJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGxldCBxdWVyeSA9IGZvcm0ucXVlcnlTZWxlY3Rvcih0aGlzLl9pbnB1dEVsKS52YWx1ZTtcbiAgICAgIGxldCBwYXJhbXMgPSB0aGlzLmdldFVybFBhcmFtcygpO1xuICAgICAgcGFyYW1zLnNldCgncXVlcnknLCBxdWVyeSk7XG5cbiAgICAgIC8vIElmIHdlIGhhdmUgYSByZWRpcmVjdFVybCwgd2Ugd2FudCB0aGUgZm9ybSB0byBiZVxuICAgICAgLy8gc2VyaWFsaXplZCBhbmQgc3VibWl0dGVkLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlZGlyZWN0VXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMucmVkaXJlY3RVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe1xuICAgICAgICBxdWVyeTogcXVlcnlcbiAgICAgIH0sIHF1ZXJ5LCAnPycgKyBwYXJhbXMudG9TdHJpbmcoKSk7XG5cbiAgICAgIHRoaXMuY29yZS5zZXRRdWVyeShxdWVyeSk7XG4gICAgICB0aGlzLnNlYXJjaChxdWVyeSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHdpcmUgdXAgb3VyIGF1dG8gY29tcGxldGUgb24gYW4gaW5wdXQgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIGF1dG8gY29tcGxldGUgY29tcG9uZW50IHRvXG4gICAqL1xuICBpbml0QXV0b0NvbXBsZXRlIChpbnB1dFNlbGVjdG9yKSB7XG4gICAgdGhpcy5faW5wdXRFbCA9IGlucHV0U2VsZWN0b3I7XG5cbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKCdBdXRvQ29tcGxldGUnLCB7XG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmF1dG9jb21wbGV0ZWAsXG4gICAgICBjb250YWluZXI6ICcueWV4dC1zZWFyY2gtYXV0b2NvbXBsZXRlJyxcbiAgICAgIGJhcktleTogdGhpcy5fYmFyS2V5LFxuICAgICAgdmVydGljYWxLZXk6IHRoaXMuX3ZlcnRpY2FsS2V5LFxuICAgICAgcHJvbXB0SGVhZGVyOiB0aGlzLnByb21wdEhlYWRlcixcbiAgICAgIG9yaWdpbmFsUXVlcnk6IHRoaXMucXVlcnksXG4gICAgICBpbnB1dEVsOiBpbnB1dFNlbGVjdG9yLFxuICAgICAgb25TdWJtaXQ6ICgpID0+IHtcbiAgICAgICAgRE9NLnRyaWdnZXIoJ2Zvcm0nLCAnc3VibWl0Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZWFyY2ggKHF1ZXJ5KSB7XG4gICAgaWYgKHRoaXMuX3ZlcnRpY2FsS2V5KSB7XG4gICAgICBjb25zdCBhbGxGaWx0ZXJzID0gdGhpcy5jb3JlLnN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgICBjb25zdCB0b3RhbEZpbHRlciA9IGFsbEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgICA/IEZpbHRlci5hbmQoLi4uYWxsRmlsdGVycylcbiAgICAgICAgOiBhbGxGaWx0ZXJzWzBdO1xuICAgICAgcmV0dXJuIHRoaXMuY29yZS52ZXJ0aWNhbFNlYXJjaChxdWVyeSwgdGhpcy5fdmVydGljYWxLZXksIEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5PVEUoYmlsbHkpIFRlbXBvcmFyeSBoYWNrIGZvciBERU1PXG4gICAgICAvLyBSZW1vdmUgbWUgYWZ0ZXIgdGhlIGRlbW9cbiAgICAgIGxldCBuYXYgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXJcbiAgICAgICAgLmdldEFjdGl2ZUNvbXBvbmVudCgnTmF2aWdhdGlvbicpO1xuXG4gICAgICBpZiAobmF2KSB7XG4gICAgICAgIGxldCB0YWJzID0gbmF2LmdldFN0YXRlKCd0YWJzJyk7XG4gICAgICAgIGxldCB1cmxzID0ge307XG5cbiAgICAgICAgaWYgKHRhYnMgJiYgQXJyYXkuaXNBcnJheSh0YWJzKSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHRoaXMuZ2V0VXJsUGFyYW1zKHRhYnNbaV0udXJsLnNwbGl0KCc/JylbMV0pO1xuICAgICAgICAgICAgcGFyYW1zLnNldCgncXVlcnknLCBxdWVyeSk7XG5cbiAgICAgICAgICAgIGxldCB1cmwgPSB0YWJzW2ldLmJhc2VVcmw7XG4gICAgICAgICAgICBpZiAocGFyYW1zLnRvU3RyaW5nKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICB1cmwgKz0gJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cmxzW3RhYnNbaV0uY29uZmlnSWRdID0gdXJsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb3JlLnNlYXJjaChxdWVyeSwgdXJscyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvcmUuc2VhcmNoKHF1ZXJ5KTtcbiAgICB9XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgc2VhcmNoVGV4dDogdGhpcy5zZWFyY2hUZXh0LFxuICAgICAgcXVlcnk6IHRoaXMucXVlcnlcbiAgICB9LCBkYXRhKSk7XG4gIH1cblxuICBnZXRVcmxQYXJhbXMgKHVybCkge1xuICAgIHVybCA9IHVybCB8fCB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTtcbiAgICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyh1cmwpO1xuICB9XG5cbiAgYmluZEJyb3dzZXJIaXN0b3J5ICgpIHtcbiAgICBET00ub24od2luZG93LCAncG9wc3RhdGUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5nZXRVcmxQYXJhbXMoKS5nZXQoJ3F1ZXJ5Jyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcXVlcnk6IHRoaXMucXVlcnlcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNvcmUuc2V0UXVlcnkodGhpcy5xdWVyeSk7XG5cbiAgICAgIHRoaXMuc2VhcmNoKHRoaXMucXVlcnkpO1xuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXJTZWFyY2hDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuXG4vKipcbiAqIEZpbHRlclNlYXJjaENvbXBvbmVudCBpcyB1c2VkIGZvciBhdXRvY29tcGxldGUgdXNpbmcgdGhlIEZpbHRlclNlYXJjaCBiYWNrZW5kLlxuICogSXQnbGwgYWxsb3cgeW91IHRvIHBpY2sgcHJlLXNldCBmaWx0ZXJzIHRoYXQgYXJlIHNldHVwIG9uIHRoZSBiYWNrZW5kIHdpdGhpblxuICogYSB2ZXJ0aWNhbCBzZWFyY2ggY29udGV4dC5cbiAqXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIG5hbWUgdG8gdXNlIGZvciByZW5kZXJpbmcgd2l0aCBoYW5kbGViYXJzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAnc2VhcmNoL2ZpbHRlcnNlYXJjaCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5wdXQga2V5IGZvciB0aGUgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2JhcktleSA9IG9wdHMuYmFyS2V5IHx8IG9wdHMuaW5wdXRLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IG9wdHMudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFF1ZXJ5IHN1Ym1pc3Npb24gaXMgYmFzZWQgb24gYSBmb3JtIGFzIGNvbnRleHQuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIG5hdGl2ZSBmb3JtIG5vZGUgd2l0aGluIGNvbnRhaW5lclxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2Zvcm1FbCA9IG9wdHMuZm9ybVNlbGVjdG9yIHx8ICdmb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBlbGVtZW50IHVzZWQgZm9yIHNlYXJjaGluZyBhbmQgd2lyZXMgdXAgdGhlIGtleWJvYXJkIGludGVyYWN0aW9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gb3B0cy5pbnB1dEVsIHx8ICcuanMteWV4dC1xdWVyeSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgdXNlZCwgcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlIGFzIGEgZGF0YSBwb2ludFxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnRpdGxlID0gb3B0cy50aXRsZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWFyY2ggdGV4dCB1c2VkIGZvciBsYWJlbGluZyB0aGUgaW5wdXQgYm94LCBhbHNvIHByb3ZpZGVkIHRvIHRlbXBsYXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc2VhcmNoVGV4dCA9IG9wdHMuc2VhcmNoVGV4dCB8fCAnV2hhdCBhcmUgeW91IGludGVyZXN0ZWQgaW4/JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSB0ZXh0IHRvIHNob3cgYXMgdGhlIGZpcnN0IGl0ZW0gZm9yIGF1dG8gY29tcGxldGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5wcm9tcHRIZWFkZXIgPSBvcHRzLnByb21wdEhlYWRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQXV0byBmb2N1c2VzIHRoZSBpbnB1dCBib3ggaWYgc2V0IHRvIHRydWUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvRm9jdXMgPSBvcHRzLmF1dG9Gb2N1cyA9PT0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIHN1Ym1pdFVSTCB3aWxsIGZvcmNlIHRoZSBzZWFyY2ggcXVlcnkgc3VibWlzc2lvbiB0byBnZXRcbiAgICAgKiByZWRpcmVjdGVkIHRvIHRoZSBVUkwgcHJvdmlkZWQuXG4gICAgICogT3B0aW9uYWwsIGRlZmF1bHRzIHRvIG51bGwuXG4gICAgICpcbiAgICAgKiBJZiBubyByZWRpcmVjdFVybCBwcm92aWRlZCwgd2Uga2VlcCB0aGUgcGFnZSBhcyBhIHNpbmdsZSBwYWdlIGFwcC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucmVkaXJlY3RVcmwgPSBvcHRzLnJlZGlyZWN0VXJsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgc3RyaW5nIHRvIHVzZSBmb3IgdGhlIGlucHV0IGJveCwgcHJvdmlkZWQgdG8gdGVtcGxhdGUgZm9yIHJlbmRlcmluZy5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXJ5ID0gb3B0cy5xdWVyeSB8fCB0aGlzLmdldFVybFBhcmFtcygpLmdldChgJHt0aGlzLm5hbWV9LnF1ZXJ5YCkgfHwgJyc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmlsdGVyIHN0cmluZyB0byB1c2UgZm9yIHRoZSBwcm92aWRlZCBxdWVyeVxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZmlsdGVyID0gb3B0cy5maWx0ZXIgfHwgdGhpcy5nZXRVcmxQYXJhbXMoKS5nZXQoYCR7dGhpcy5uYW1lfS5maWx0ZXJgKSB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdGaWx0ZXJTZWFyY2gnO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIGlmICh0aGlzLnF1ZXJ5ICYmIHRoaXMucXVlcnkubGVuZ3RoID4gMCAmJiB0aGlzLmZpbHRlciAmJiB0aGlzLmZpbHRlci5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmdldFVybFBhcmFtcygpO1xuICAgICAgcGFyYW1zLnNldChgJHt0aGlzLm5hbWV9LnF1ZXJ5YCwgdGhpcy5xdWVyeSk7XG4gICAgICBwYXJhbXMuc2V0KGAke3RoaXMubmFtZX0uZmlsdGVyYCwgdGhpcy5maWx0ZXIpO1xuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCkpO1xuICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIEZpbHRlci5mcm9tUmVzcG9uc2UodGhpcy5maWx0ZXIpKTtcbiAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgfVxuXG4gICAgdGhpcy5iaW5kQnJvd3Nlckhpc3RvcnkoKTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIC8vIFdpcmUgdXAgb3VyIHNlYXJjaCBoYW5kbGluZyBhbmQgYXV0byBjb21wbGV0ZVxuICAgIHRoaXMuaW5pdEF1dG9Db21wbGV0ZSh0aGlzLl9pbnB1dEVsKTtcblxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cyA9PT0gdHJ1ZSAmJiB0aGlzLnF1ZXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5faW5wdXRFbCkuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHdpcmUgdXAgb3VyIGF1dG8gY29tcGxldGUgb24gYW4gaW5wdXQgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIGF1dG8gY29tcGxldGUgY29tcG9uZW50IHRvXG4gICAqL1xuICBpbml0QXV0b0NvbXBsZXRlIChpbnB1dFNlbGVjdG9yKSB7XG4gICAgdGhpcy5faW5wdXRFbCA9IGlucHV0U2VsZWN0b3I7XG5cbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKCdBdXRvQ29tcGxldGUnLCB7XG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmF1dG9jb21wbGV0ZWAsXG4gICAgICBpc0ZpbHRlclNlYXJjaDogdHJ1ZSxcbiAgICAgIGNvbnRhaW5lcjogJy55ZXh0LXNlYXJjaC1hdXRvY29tcGxldGUnLFxuICAgICAgcHJvbXB0SGVhZGVyOiB0aGlzLnByb21wdEhlYWRlcixcbiAgICAgIG9yaWdpbmFsUXVlcnk6IHRoaXMucXVlcnksXG4gICAgICBvcmlnaW5hbEZpbHRlcjogdGhpcy5maWx0ZXIsXG4gICAgICBpbnB1dEVsOiBpbnB1dFNlbGVjdG9yLFxuICAgICAgdmVydGljYWxLZXk6IHRoaXMuX3ZlcnRpY2FsS2V5LFxuICAgICAgYmFyS2V5OiB0aGlzLl9iYXJLZXksXG4gICAgICBvblN1Ym1pdDogKHF1ZXJ5LCBmaWx0ZXIpID0+IHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy5nZXRVcmxQYXJhbXMoKTtcbiAgICAgICAgcGFyYW1zLnNldChgJHt0aGlzLm5hbWV9LnF1ZXJ5YCwgcXVlcnkpO1xuICAgICAgICBwYXJhbXMuc2V0KGAke3RoaXMubmFtZX0uZmlsdGVyYCwgZmlsdGVyKTtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgcmVkaXJlY3RVcmwsIHdlIHdhbnQgdGhlIHBhcmFtcyB0byBiZVxuICAgICAgICAvLyBzZXJpYWxpemVkIGFuZCBzdWJtaXR0ZWQuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5yZWRpcmVjdFVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMucmVkaXJlY3RVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCAnPycgKyBwYXJhbXMudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgLy8gc2F2ZSB0aGUgZmlsdGVyIHRvIHN0b3JhZ2UgZm9yIHRoZSBuZXh0IHNlYXJjaFxuICAgICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgRmlsdGVyLmZyb21SZXNwb25zZShmaWx0ZXIpKTtcbiAgICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggd2l0aCBhbGwgc2F2ZWQgZmlsdGVycyBhbmQgcXVlcnksXG4gICAqIG9wdGlvbmFsbHkgcmVkaXJlY3RpbmcgYmFzZWQgb24gY29uZmlnXG4gICAqL1xuICBzZWFyY2ggKCkge1xuICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmNvcmUuc3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICBsZXQgdG90YWxGaWx0ZXIgPSBmaWx0ZXJzWzBdO1xuICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRvdGFsRmlsdGVyID0gRmlsdGVyLmFuZCguLi5maWx0ZXJzKTtcbiAgICB9XG4gICAgY29uc3Qgc2VhcmNoUXVlcnkgPSB0aGlzLmNvcmUuc3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSkgfHwgJyc7XG5cbiAgICB0aGlzLmNvcmUudmVydGljYWxTZWFyY2goc2VhcmNoUXVlcnksIHRoaXMuX3ZlcnRpY2FsS2V5LCBKU09OLnN0cmluZ2lmeSh0b3RhbEZpbHRlcikpO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIHNlYXJjaFRleHQ6IHRoaXMuc2VhcmNoVGV4dCxcbiAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlclxuICAgIH0sIGRhdGEpKTtcbiAgfVxuXG4gIGdldFVybFBhcmFtcyAodXJsKSB7XG4gICAgdXJsID0gdXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpO1xuICAgIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybCk7XG4gIH1cblxuICBiaW5kQnJvd3Nlckhpc3RvcnkgKCkge1xuICAgIERPTS5vbih3aW5kb3csICdwb3BzdGF0ZScsICgpID0+IHtcbiAgICAgIHRoaXMucXVlcnkgPSB0aGlzLmdldFVybFBhcmFtcygpLmdldChgJHt0aGlzLm5hbWV9LnF1ZXJ5YCk7XG4gICAgICB0aGlzLmZpbHRlciA9IHRoaXMuZ2V0VXJsUGFyYW1zKCkuZ2V0KGAke3RoaXMubmFtZX0uZmlsdGVyYCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcXVlcnk6IHRoaXMucXVlcnksXG4gICAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXJcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9zYXZlUXVlcnlBbmRGaWx0ZXIodGhpcy5xdWVyeSwgdGhpcy5maWx0ZXIpO1xuICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuY29uc3QgS2V5cyA9IHtcbiAgQkFDS1NQQUNFOiA4LFxuICBUQUI6IDksXG4gIEVOVEVSOiAxMyxcbiAgU0hJRlQ6IDE2LFxuICBDVFJMOiAxNyxcbiAgQUxUOiAxOCxcbiAgRVNDQVBFOiAyNyxcblxuICBMRUZUOiAzNyxcbiAgUklHSFQ6IDM5LFxuICBVUDogMzgsXG5cbiAgREVMRVRFOiA0NixcbiAgRE9XTjogNDAsXG4gIExFRlRfT1NfS0VZOiA5MSxcbiAgUklHSFRfT1NfS0VZOiA5MixcbiAgU0VMRUNUX0tFWTogOTNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Db21wbGV0ZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgYXV0b2NvbXBsZXRlIGlzIHNpbXBsZSBvciBmaWx0ZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmlzRmlsdGVyU2VhcmNoID0gb3B0cy5pc0ZpbHRlclNlYXJjaCB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgYmFyS2V5YCBpbiB0aGUgdmVydGljYWwgc2VhcmNoIHRvIHVzZSBmb3IgYXV0by1jb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYmFyS2V5ID0gb3B0cy5iYXJLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgdmVydGljYWxLZXlgIG9mIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggdG8gdXNlIGZvciBhdXRvLWNvbXBsZXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IG9wdHMudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBpbnB1dCBlbCBzZWxlY3RvciBmb3IgYXV0byBjb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5faW5wdXRFbCA9IG9wdHMuaW5wdXRFbCB8fCAnLmpzLXlleHQtcXVlcnknO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIGZvciB0aGUgZGF0YS1zdG9yYWdlIHRvIGxpc3RlbiBmb3IgdXBkYXRlcyBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBgJHtTdG9yYWdlS2V5cy5BVVRPQ09NUExFVEV9LiR7dGhpcy5uYW1lfWA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBoYW5kbGViYXJzIHRlbXBsYXRlIG5hbWUgdG8gdXNlIGZvciByZW5kZXJpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdzZWFyY2gvYXV0b2NvbXBsZXRlJztcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgaW5wdXQgdmFsdWUgd2hlbiB0eXBpbmcuXG4gICAgICogV2UgdXNlIHRoaXMgZm9yIHJlc2V0dGluZyB0aGUgc3RhdGUgb2YgdGhlIGlucHV0IHZhbHVlIHdoZW4gb3RoZXIgaW50ZXJhY3Rpb25zIChlLmcuIHJlc3VsdCBuYXZpZ2F0aW9uKVxuICAgICAqIGNoYW5nZSBiYXNlZCBvbiBpbnRlcmFjdGlvbnMuIEZvciBpbnN0YW5jZSwgaGl0dGluZyBlc2NhcGUgc2hvdWxkIHJlc2V0IHRoZSB2YWx1ZSB0byB0aGUgb3JpZ2luYWwgdHlwZWQgcXVlcnkuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gb3B0cy5vcmlnaW5hbFF1ZXJ5IHx8ICcnO1xuXG4gICAgLyoqXG4gICAgICogVXNlZCBmb3Iga2V5Ym9hcmQgbmF2aWdhdGlvbiB0aHJvdWdoIHJlc3VsdHMuXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IHNlY3Rpb24gd2UncmUgbmF2aWdhdGluZyBpbi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3NlY3Rpb25JbmRleCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uIHRocm91Z2ggcmVzdWx0cy5cbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgcmVzdWx0IGluZGV4IHdlJ3JlIG5hdmlnYXRpbmcgb24uXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZXN1bHRJbmRleCA9IC0xO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHRleHQgdG8gc2hvdyBhcyB0aGUgZmlyc3QgaXRlbSBmb3IgYXV0byBjb21wbGV0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnByb21wdEhlYWRlciA9IG9wdHMucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBpbnZva2VkIHdoZW4gdGhlIGBFbnRlcmAga2V5IGlzIHByZXNzZWQgb24gYXV0byBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICB0aGlzLl9vblN1Ym1pdCA9IG9wdHMub25TdWJtaXQgfHwgZnVuY3Rpb24gKCkge307XG4gIH1cblxuICAvKipcbiAgICogVGhlIGFsaWFzZWQgdXNlZCBieSB0aGUgY29tcG9uZW50IG1hbmFnZXIgZm9yIGNyZWF0aW9uLlxuICAgKi9cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0F1dG9Db21wbGV0ZSc7XG4gIH1cblxuICAvKipcbiAgICogc2V0U3RhdGUgaXMgb3ZlcnJpZGRlbiBzbyB0aGF0IHdlIGNhbiBwcm92aWRlIGFkZGl0aW9uYWwgbWV0YSBkYXRhXG4gICAqIHRvIHRoZSB0ZW1wbGF0ZSAoZS5nLiB0aGUgc2VjdGlvbkluZGV4IGFuZCByZXN1bHRJbmRleCksIHNpbmNlXG4gICAqIHRob3NlIGFyZSBjbGllbnQtaW50ZXJhY3Rpb24gc3BlY2lmaWMgdmFsdWVzIGFuZCBhcmVuJ3QgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyLlxuICAgKi9cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBzZWN0aW9uSW5kZXg6IHRoaXMuX3NlY3Rpb25JbmRleCxcbiAgICAgIHJlc3VsdEluZGV4OiB0aGlzLl9yZXN1bHRJbmRleCxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5fb3JpZ2luYWxRdWVyeS5sZW5ndGggPT09IDAgPyB0aGlzLnByb21wdEhlYWRlciA6IG51bGxcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogdXBkYXRlU3RhdGUgaXMgYSBoZWxwZXIgdG8gYXBwbHkgdGhlIGN1cnJlbnQgc3RhdGUgd2l0aCBuZXcgY2xpZW50LXN0YXRlLlxuICAgKi9cbiAgdXBkYXRlU3RhdGUgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fc3RhdGUuZ2V0KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uQ3JlYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgY29uc3RydWN0ZWQgZnJvbSB0aGUgZnJhbWV3b3JrLlxuICAgKiBPbmNlIHdlJ3JlIGluaXRhbGl6ZWQsIHdlIHdpcmUgdXAgYWxsIG9mIG91ciB1c2VyIGludGVyYWN0aW9uc1xuICAgKi9cbiAgb25DcmVhdGUgKCkge1xuICAgIC8vIFVzZSB0aGUgY29udGV4dCBvZiB0aGUgcGFyZW50IGNvbXBvbmVudCB0byBmaW5kIHRoZSBpbnB1dCBub2RlLlxuICAgIGxldCBxdWVyeUlucHV0ID0gRE9NLnF1ZXJ5KHRoaXMuX3BhcmVudC5fY29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKTtcbiAgICBpZiAoIXF1ZXJ5SW5wdXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGluaXRpYWxpemUgQXV0b0NvbXBsZXRlLiBDYW4gbm90IGZpbmQge0hUTUxFbGVtZW50fSBgJywgdGhpcy5faW5wdXRFbCwgJ2AuJyk7XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSB0aGUgbmF0aXZlIGF1dG8gY29tcGxldGVcbiAgICBET00uYXR0cihxdWVyeUlucHV0LCAnYXV0b0NvbXBsZXRlJywgJ29mZicpO1xuXG4gICAgLy8gVGhlIHVzZXIgZXhpdHMgdGhlIGlucHV0LCBzbyB3ZSB3YW50IHRvIHJlc2V0IHRoZSBzdGF0ZSBhbmQgY2xvc2VcbiAgICAvLyB0aGUgYXV0byBjb21wbGV0ZVxuICAgIERPTS5vbihxdWVyeUlucHV0LCAnYmx1cicsICgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIC8vIFdoZW4gYSB1c2VyIGZvY3VzZXMgdGhlIGlucHV0LCB3ZSBzaG91bGQgcG9wdWxhdGUgdGhlIGF1dG9jb21wbGV0ZSBiYXNlZFxuICAgIC8vIG9uIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdmb2N1cycsICgpID0+IHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuYXV0b0NvbXBsZXRlKHF1ZXJ5SW5wdXQudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gbmF2aWdhdGUgYmV0d2VlbiB0aGUgcmVzdWx0cyB1c2luZyB0aGUga2V5Ym9hcmRcbiAgICBET00ub24ocXVlcnlJbnB1dCwgJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVOYXZpZ2F0ZVJlc3VsdHMoZS5rZXlDb2RlLCBlKTtcbiAgICAgIHRoaXMuaGFuZGxlU3VibWl0UmVzdWx0KGUua2V5Q29kZSwgcXVlcnlJbnB1dC52YWx1ZSwgZSk7XG4gICAgfSk7XG5cbiAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBzZWxlY3QgYSByZXN1bHQgd2l0aCB0aGUgbW91c2VcbiAgICBET00uZGVsZWdhdGUodGhpcy5fY29udGFpbmVyLCAnLmpzLXlleHQtYXV0b2NvbXBsZXRlLW9wdGlvbicsICdtb3VzZWRvd24nLCAoZXZ0LCB0YXJnZXQpID0+IHtcbiAgICAgIGxldCBkYXRhID0gdGFyZ2V0LmRhdGFzZXQ7XG4gICAgICBsZXQgdmFsID0gZGF0YS5zaG9ydDtcblxuICAgICAgdGhpcy51cGRhdGVRdWVyeSh2YWwpO1xuICAgICAgdGhpcy5fb25TdWJtaXQodmFsLCBkYXRhLmZpbHRlcik7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIHRoZSB1c2VyIGlzIHR5cGluZyBpbiB0aGUgaW5wdXQsIHByb2Nlc3MgdGhlIGF1dG8gY29tcGxldGUuXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdrZXl1cCcsIChlKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZVR5cGluZyhlLmtleUNvZGUsIHF1ZXJ5SW5wdXQudmFsdWUsIGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGNsb3NlIHdpbGwgaGlkZSB0aGUgYXV0byBjb21wbGV0ZSByZXN1bHRzIGFuZCByZXNldCB0aGUgc3RhdGUuXG4gICAqL1xuICBjbG9zZSAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7fSk7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlc2V0cyB0aGUgY2xpZW50IHN0YXRlIHRvIHRoZWlyIG9yaWdpbmFsIHZhbHVlcyBhbmQgdHJpZ2dlcnNcbiAgICogYSB0ZW1wbGF0ZS1yZXJlbmRlciB2aWEgdXBkYXRlU3RhdGVcbiAgICovXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLl9zZWN0aW9uSW5kZXggPSAwO1xuICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gLTE7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gdXBkYXRlIHRoZSBpbnB1dCB0ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRWYWx1ZSBPcHRpb24gdmFsdWUgcHJvdmlkZWQuXG4gICAqIElmIG5vIHZhbHVlIHByb3ZpZGVkLCB3ZSdsbCB0cnkgdG8gZmluZCBpdCBiYXNlZCBvbiB0aGUgc2VsZWN0aW9uIGluZGV4ZXMuXG4gICAqL1xuICB1cGRhdGVRdWVyeSAob3B0VmFsdWUpIHtcbiAgICAvLyBPbmx5IHdhbnQgdG8gdXBkYXRlIHRoZSBxdWVyeSBzdHJpbmcgaWYgdGhlcmVzIGEgdmFsdWUuXG4gICAgLy8gSWYgb25lIGlzIHByb3ZpZGVkLCBncmVhdC5cbiAgICAvLyBPdGhlcndpc2UsIGxldHMgdHJ5IHRvIGZpbmQgaXQgZnJvbSB0aGUgY3VycmVudCBzZWxlY3Rpb24gaW4gdGhlIHJlc3VsdHMuXG4gICAgaWYgKG9wdFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCBzZWN0aW9ucyA9IHRoaXMuX3N0YXRlLmdldCgnc2VjdGlvbnMnKTtcblxuICAgICAgbGV0IHJlc3VsdHMgPSBzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHM7XG4gICAgICBvcHRWYWx1ZSA9IHJlc3VsdHNbdGhpcy5fcmVzdWx0SW5kZXhdLnNob3J0VmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IHF1ZXJ5RWwgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Ll9jb250YWluZXIsICcuanMteWV4dC1xdWVyeScpO1xuICAgIHF1ZXJ5RWwudmFsdWUgPSBvcHRWYWx1ZTtcbiAgfVxuXG4gIGhhbmRsZVR5cGluZyAoa2V5LCB2YWx1ZSwgZSkge1xuICAgIGxldCBpZ25vcmVkS2V5cyA9IFtcbiAgICAgIEtleXMuRE9XTixcbiAgICAgIEtleXMuVVAsXG4gICAgICBLZXlzLkNUUkwsXG4gICAgICBLZXlzLkFMVCxcbiAgICAgIEtleXMuU0hJRlQsXG4gICAgICBLZXlzLkxFRlQsXG4gICAgICBLZXlzLlJJR0hULFxuICAgICAgS2V5cy5MRUZUX09TX0tFWSxcbiAgICAgIEtleXMuUklHSFRfT1NfS0VZLFxuICAgICAgS2V5cy5TRUxFQ1RfS0VZXG4gICAgXTtcblxuICAgIGlmIChpZ25vcmVkS2V5cy5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFVzZXIgZXNjYXBlcyBvdXQgb2YgYXV0byBjb21wbGV0ZSwgc28gd2UgcmVzZXQgaXQgdG8gdGhlIG9yaWdpbmFsIGlucHV0XG4gICAgaWYgKGtleSA9PT0gS2V5cy5FU0NBUEUpIHtcbiAgICAgIHRoaXMudXBkYXRlUXVlcnkodGhpcy5fb3JpZ2luYWxRdWVyeSk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVGFiYmluZyBvdXQgb3IgZW50ZXIgc2hvdWxkIGNsb3NlIHRoZSBhdXRvIGNvbXBsZXRlLlxuICAgIGlmIChrZXkgPT09IEtleXMuRU5URVIgfHwga2V5ID09PSBLZXlzLlRBQikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgb3JpZ2luYWwgdmFsdWUgYmFzZWQgb24gdGhlIHVzZXIgaW5wdXRcbiAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gdmFsdWU7XG5cbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgdGhpcy5hdXRvQ29tcGxldGUodmFsdWUpO1xuICB9XG5cbiAgYXV0b0NvbXBsZXRlIChpbnB1dCkge1xuICAgIGlmICh0aGlzLmlzRmlsdGVyU2VhcmNoKSB7XG4gICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlRmlsdGVyKGlucHV0LCB0aGlzLm5hbWUsIHRoaXMuX3ZlcnRpY2FsS2V5LCB0aGlzLl9iYXJLZXkpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fdmVydGljYWxLZXkgfHwgdGhpcy5fYmFyS2V5KSB7XG4gICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlVmVydGljYWwoaW5wdXQsIHRoaXMubmFtZSwgdGhpcy5fdmVydGljYWxLZXksIHRoaXMuX2JhcktleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29yZS5hdXRvQ29tcGxldGVVbml2ZXJzYWwoaW5wdXQsIHRoaXMubmFtZSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTmF2aWdhdGVSZXN1bHRzIChrZXksIGUpIHtcbiAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG4gICAgaWYgKHNlY3Rpb25zID09PSB1bmRlZmluZWQgfHwgc2VjdGlvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0cyA9IHNlY3Rpb25zW3RoaXMuX3NlY3Rpb25JbmRleF0ucmVzdWx0cztcbiAgICBpZiAoa2V5ID09PSBLZXlzLlVQKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5fcmVzdWx0SW5kZXggPD0gMCkge1xuICAgICAgICBpZiAodGhpcy5fc2VjdGlvbkluZGV4ID4gMCkge1xuICAgICAgICAgIHRoaXMuX3NlY3Rpb25JbmRleC0tO1xuICAgICAgICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzLmxlbmd0aCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVRdWVyeSh0aGlzLl9vcmlnaW5hbFF1ZXJ5KTtcbiAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3Jlc3VsdEluZGV4LS07XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gS2V5cy5ET1dOKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5fcmVzdWx0SW5kZXggPj0gcmVzdWx0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPCBzZWN0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgdGhpcy5fc2VjdGlvbkluZGV4Kys7XG4gICAgICAgICAgdGhpcy5fcmVzdWx0SW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3Jlc3VsdEluZGV4Kys7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU3VibWl0UmVzdWx0IChrZXksIHZhbHVlLCBlKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gdGhpcy5fc3RhdGUuZ2V0KCdzZWN0aW9ucycpO1xuICAgIGlmIChzZWN0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IHNlY3Rpb25zLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gc3VibWl0IHRoZSBzZWFyY2ggb24gZW50ZXJcbiAgICBpZiAoa2V5ID09PSBLZXlzLkVOVEVSKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgZmlsdGVyID0gJyc7XG4gICAgICBpZiAodGhpcy5fc2VjdGlvbkluZGV4ID49IDAgJiYgdGhpcy5fcmVzdWx0SW5kZXggPj0gMCkge1xuICAgICAgICBmaWx0ZXIgPSBKU09OLnN0cmluZ2lmeShzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHNbdGhpcy5fcmVzdWx0SW5kZXhdLmZpbHRlcik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlUXVlcnkodmFsdWUpO1xuICAgICAgdGhpcy5fb3JpZ2luYWxRdWVyeSA9IHZhbHVlO1xuICAgICAgdGhpcy5fb25TdWJtaXQodmFsdWUsIGZpbHRlcik7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXJPcHRpb25zQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgc3VwcG9ydGVkIGNvbnRyb2xzXG4gKiBAdHlwZSB7c3RyaW5nW119XG4gKi9cbmNvbnN0IFNVUFBPUlRFRF9DT05UUk9MUyA9IFtcbiAgJ3NpbmdsZW9wdGlvbicsXG4gICdtdWx0aW9wdGlvbidcbl07XG5cbi8qKlxuICogUmVuZGVycyBhIHNldCBvZiBvcHRpb25zLCBlYWNoIG9uZSByZXByZXNlbnRpbmcgYSBmaWx0ZXIgaW4gYSBzZWFyY2guXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlck9wdGlvbnNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgaWYgKCFjb25maWcuY29udHJvbCB8fCAhU1VQUE9SVEVEX0NPTlRST0xTLmluY2x1ZGVzKGNvbmZpZy5jb250cm9sKSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMgcmVxdWlyZXMgYSB2YWxpZCBcImNvbnRyb2xcIiB0byBiZSBwcm92aWRlZCcsXG4gICAgICAgICdGaWx0ZXJPcHRpb25zJyk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25maWcub3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMgY29tcG9uZW50IHJlcXVpcmVzIG9wdGlvbnMgdG8gYmUgcHJvdmlkZWQnLFxuICAgICAgICAnRmlsdGVyT3B0aW9ucycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGZpbHRlciBvcHRpb25zIHRvIGRpc3BsYXkgd2l0aCBjaGVja2VkIHN0YXR1c1xuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29wdGlvbnMgPSBjb25maWcub3B0aW9ucy5tYXAobyA9PiBPYmplY3QuYXNzaWduKHt9LCBvLCB7IGNoZWNrZWQ6IGZhbHNlIH0pKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIGNvbnRyb2wgdG8gZGlzcGxheVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9jb250cm9sID0gY29uZmlnLmNvbnRyb2w7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0b3IgdXNlZCBmb3Igb3B0aW9ucyBpbiB0aGUgdGVtcGxhdGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb3B0aW9uU2VsZWN0b3IgPSBjb25maWcub3B0aW9uU2VsZWN0b3IgfHwgJy5qcy15ZXh0LWZpbHRlci1vcHRpb24nO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc3RvcmVzIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBvbiBlYWNoIGNoYW5nZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RvcmVPbkNoYW5nZSA9IGNvbmZpZy5zdG9yZU9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBjaGFuZ2VkXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBjb25maWcub25DaGFuZ2UgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyLCBiYXNlZCBvbiB0aGUgY29udHJvbFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSBgY29udHJvbHMvJHtjb25maWcuY29udHJvbH1gO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0ZpbHRlck9wdGlvbnMnO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBvcHRpb25zOiB0aGlzLl9vcHRpb25zXG4gICAgfSkpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgRE9NLmRlbGVnYXRlKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fb3B0aW9uU2VsZWN0b3IsICdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdXBkYXRlT3B0aW9uKHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4KSwgZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xuXG4gICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLl9idWlsZEZpbHRlcigpO1xuICAgICAgaWYgKHRoaXMuX3N0b3JlT25DaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGZpbHRlcik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX29uQ2hhbmdlKGZpbHRlcik7XG4gICAgfSk7XG4gIH1cblxuICBfdXBkYXRlT3B0aW9uIChpbmRleCwgY2hlY2tlZCkge1xuICAgIGlmICh0aGlzLl9jb250cm9sID09PSAnc2luZ2xlb3B0aW9uJykge1xuICAgICAgdGhpcy5fb3B0aW9ucyA9IHRoaXMuX29wdGlvbnMubWFwKG8gPT4gT2JqZWN0LmFzc2lnbih7fSwgbywgeyBjaGVja2VkOiBmYWxzZSB9KSk7XG4gICAgfVxuXG4gICAgdGhpcy5fb3B0aW9uc1tpbmRleF0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9vcHRpb25zW2luZGV4XSwgeyBjaGVja2VkIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgb3B0aW9uc1xuICAgKi9cbiAgY2xlYXIgKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gRE9NLnF1ZXJ5QWxsKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fb3B0aW9uU2VsZWN0b3IpO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZSA9PiBlLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdmYWxzZScpKTtcbiAgICB0aGlzLl9hcHBseUZpbHRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGFuZCByZXR1cm4gdGhlIEZpbHRlciB0aGF0IHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9idWlsZEZpbHRlciAoKSB7XG4gICAgY29uc3QgZmlsdGVycyA9IHRoaXMuX29wdGlvbnNcbiAgICAgIC5maWx0ZXIobyA9PiBvLmNoZWNrZWQpXG4gICAgICAubWFwKG8gPT4gRmlsdGVyLmVxdWFsKG8uZmllbGQsIG8udmFsdWUpKTtcblxuICAgIHJldHVybiBmaWx0ZXJzLmxlbmd0aCA+IDBcbiAgICAgID8gRmlsdGVyLmdyb3VwKC4uLmZpbHRlcnMpXG4gICAgICA6IHt9O1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXJCb3hDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcblxuLyoqXG4gKiBSZW5kZXJzIGEgc2V0IG9mIGZpbHRlcnMsIGFuZCBzZWFyY2hlcyB3aXRoIHRoZW0gd2hlbiBhcHBsaWVkLlxuICogTXVsdGlwbGUgRmlsdGVyQm94IGNvbXBvbmVudHMgd2lsbCBBTkQgdG9nZXRoZXIgYnV0IHdpbGwgbm90IHNoYXJlIHN0YXRlLlxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlckJveENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICBpZiAoIWNvbmZpZy5maWx0ZXJzIHx8ICEoY29uZmlnLmZpbHRlcnMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICdGaWx0ZXJCb3ggcmVxdWlyZXMgZmlsdGVycyB0byBiZSBwcm92aWRlZCBhcyBhbiBhcnJheScsXG4gICAgICAgICdGaWx0ZXJCb3gnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBmaWx0ZXJzIHRvIGRpc3BsYXkgYW5kIGNvbnRyb2xcbiAgICAgKiBAdHlwZSB7b2JqZWN0W119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWx0ZXJDb25maWdzID0gY29uZmlnLmZpbHRlcnM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVydGljYWwga2V5IGZvciB0aGUgc2VhcmNoXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0cmlnZ2VyIGEgc2VhcmNoIG9uIGVhY2ggY2hhbmdlIHRvIGEgZmlsdGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zZWFyY2hPbkNoYW5nZSA9IGNvbmZpZy5zZWFyY2hPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RvciBvZiB0aGUgYXBwbHkgYnV0dG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwcGx5QnV0dG9uU2VsZWN0b3IgPSBjb25maWcuYXBwbHlCdXR0b25TZWxlY3RvciB8fCAnLmpzLXlleHQtZmlsdGVyYm94LWFwcGx5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnRzIGNyZWF0ZWQgZm9yIGVhY2ggZmlsdGVyIGNvbmZpZ1xuICAgICAqIEB0eXBlIHtDb21wb25lbnRbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlckNvbXBvbmVudHMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBmaWx0ZXIgY29tcG9uZW50cyBpbiB0aGUgYm94XG4gICAgICogQHR5cGUge0ZpbHRlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlcnMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gYGZpbHRlcnMvZmlsdGVyYm94YDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdGaWx0ZXJCb3gnO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgIGZpbHRlckNvbmZpZ3M6IHRoaXMuX2ZpbHRlckNvbmZpZ3MsXG4gICAgICBzaG93QXBwbHlCdXR0b246ICF0aGlzLl9zZWFyY2hPbkNoYW5nZVxuICAgIH0pKTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIC8vIEluaXRpYWxpemUgZmlsdGVycyBmcm9tIGNvbmZpZ3NcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2ZpbHRlckNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuX2ZpbHRlckNvbmZpZ3NbaV07XG4gICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKGNvbmZpZy50eXBlLCBPYmplY3QuYXNzaWduKHt9LFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfS5maWx0ZXIke2l9YCxcbiAgICAgICAgICBzdG9yZU9uQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICBjb250YWluZXI6IGAuanMteWV4dC1maWx0ZXJib3gtZmlsdGVyJHtpfWAsXG4gICAgICAgICAgb25DaGFuZ2U6IChmKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uRmlsdGVyQ2hhbmdlKGksIGYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgY29tcG9uZW50Lm1vdW50KCk7XG4gICAgICB0aGlzLl9maWx0ZXJDb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGFwcGx5IGJ1dHRvblxuICAgIGlmICghdGhpcy5fc2VhcmNoT25DaGFuZ2UpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2FwcGx5QnV0dG9uU2VsZWN0b3IpO1xuICAgICAgRE9NLm9uKGJ1dHRvbiwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9zYXZlRmlsdGVyc1RvU3RvcmFnZSgpO1xuICAgICAgICB0aGlzLl9zZWFyY2goKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgY2hhbmdlcyB0byBjaGlsZCBmaWx0ZXIgY29tcG9uZW50c1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBjaGFuZ2VkIGZpbHRlclxuICAgKiBAcGFyYW0ge0ZpbHRlcn0gZmlsdGVyIFRoZSBuZXcgZmlsdGVyXG4gICAqL1xuICBvbkZpbHRlckNoYW5nZSAoaW5kZXgsIGZpbHRlcikge1xuICAgIHRoaXMuX2ZpbHRlcnNbaW5kZXhdID0gZmlsdGVyO1xuICAgIGlmICh0aGlzLl9zZWFyY2hPbkNoYW5nZSkge1xuICAgICAgdGhpcy5fc2F2ZUZpbHRlcnNUb1N0b3JhZ2UoKTtcbiAgICAgIHRoaXMuX3NlYXJjaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIGN1cnJlbnQgZmlsdGVycyB0byBzdG9yYWdlIHRvIGJlIHVzZWQgaW4gdGhlIG5leHQgc2VhcmNoXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2F2ZUZpbHRlcnNUb1N0b3JhZ2UgKCkge1xuICAgIGNvbnN0IHZhbGlkRmlsdGVycyA9IHRoaXMuX2ZpbHRlcnMuZmlsdGVyKGYgPT4gZiAhPT0gdW5kZWZpbmVkICYmIGYgIT09IG51bGwpO1xuICAgIGNvbnN0IGNvbWJpbmVkRmlsdGVyID0gdmFsaWRGaWx0ZXJzLmxlbmd0aCA+IDFcbiAgICAgID8gRmlsdGVyLmFuZCguLi52YWxpZEZpbHRlcnMpXG4gICAgICA6IHZhbGlkRmlsdGVyc1swXTtcbiAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgY29tYmluZWRGaWx0ZXIgfHwge30pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYSBzZWFyY2ggd2l0aCBhbGwgZmlsdGVycyBpbiBzdG9yYWdlXG4gICAqL1xuICBfc2VhcmNoICgpIHtcbiAgICBjb25zdCBhbGxGaWx0ZXJzID0gdGhpcy5jb3JlLnN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgY29uc3QgdG90YWxGaWx0ZXIgPSBhbGxGaWx0ZXJzLmxlbmd0aCA+IDFcbiAgICAgID8gRmlsdGVyLmFuZCguLi5hbGxGaWx0ZXJzKVxuICAgICAgOiBhbGxGaWx0ZXJzWzBdO1xuXG4gICAgY29uc3QgcXVlcnkgPSB0aGlzLmNvcmUuc3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSkgfHwgJyc7XG5cbiAgICB0aGlzLmNvcmUudmVydGljYWxTZWFyY2gocXVlcnksIHRoaXMuX3ZlcnRpY2FsS2V5LCBKU09OLnN0cmluZ2lmeSh0b3RhbEZpbHRlcikpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEaXJlY3RBbnN3ZXJDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdEFuc3dlckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSO1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdyZXN1bHRzL2RpcmVjdGFuc3dlcic7XG4gIH1cblxuICBiZWZvcmVNb3VudCAoKSB7XG4gICAgaWYgKCF0aGlzLmhhc1N0YXRlKCdhbnN3ZXInKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0RpcmVjdEFuc3dlcic7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlc3VsdHNJdGVtQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncmVzdWx0cy9yZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50ICovXG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNJdGVtQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3Jlc3VsdHMvZXZlbnRyZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNJdGVtQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3Jlc3VsdHMvcGVvcGxlcmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1Blb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNYXBQcm92aWRlciAqL1xuXG4vKipcbiAqIEEgTWFwUHJvdmlkZXIgaXMgYW4gaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB0aGF0IHNob3VsZCBiZSBpbXBsZW1lbnRlZFxuICogaW4gb3JkZXIgdG8gaW50ZWdyYXRlIHdpdGggYSBUaGlyZCBQYXJ0eSBNYXAgcHJvdmlkZXIgZm9yIGJvdGhcbiAqIHN0YXRpYyBhbmQgaW50ZXJhY3RpdmUgbWFwcy4gTWFwUHJvdmlkZXJzIGFyZSB1c2VkIGJ5IHRoZSBNYXBDb21wb25lbnQuXG4gKlxuICogSW1wbGVtZW50YXRpb25zIHNob3VsZCBleHRlbmQgdGhpcyBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcFByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHVzZWQgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIG1hcCBwcm92aWRlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYXBpS2V5ID0gb3B0cy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBtYXAgdG8gYXBwZW5kIHRvIHRoZSBET00sIGRlZmF1bHRzIHRvIDEwMCVcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX2hlaWdodCA9IG9wdHMuaGVpZ2h0IHx8IDIwMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgbWFwIHRvIGFwcGVuZCB0byB0aGUgRE9NLCBkZWZhdWx0cyB0byAxMDAlXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl93aWR0aCA9IG9wdHMud2lkdGggfHwgNjAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHpvb20gbGV2ZWwgb2YgdGhlIG1hcCwgZGVmYXVsdHMgdG8gOVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fem9vbSA9IG9wdHMuem9vbSB8fCA5O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIHVuZGVybHlpbmcgbWFwIGluc3RhbmNlLCBjcmVhdGVkIGJ5IHRoZSBleHRlcm5hbCBsaWIuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9tYXAgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGVtcG9yYXJ5IGJvb2xlYW4gdHJhY2tpbmcgd2hldGhlciBvciBub3QgdGhlIGV4dGVybmFsIEpTIGxpYnJhcnkgaXMgbG9hZGVkIChzZWUgVE9ETyBiZWxvdylcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9pc0xvYWRlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIG9uY2UgdGhlIEphdmFzY3JpcHQgaXMgbG9hZGVkXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMuX29uTG9hZGVkID0gb3B0cy5vbkxvYWRlZCB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXN0b20gY29uZmlndXJhdGlvbiBvdmVycmlkZSB0byB1c2UgZm9yIHRoZSBtYXAgbWFya2Vyc1xuICAgICAqIEB0eXBlIHtPYmplY3R8RnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5fcGluQ29uZmlnID0gdHlwZW9mIG9wdHMucGluID09PSAnZnVuY3Rpb24nID8gb3B0cy5waW4gOiBPYmplY3QuYXNzaWduKE1hcFByb3ZpZGVyLkRFRkFVTFRfUElOX0NPTkZJRywgb3B0cy5waW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gdG8gdXNlIGZvciB0aGUgbWFwIG1hcmtlcnNcbiAgICogQHR5cGUge09iamVjdH1cbiAgICogVE9ETyhiaWxseSkgQ3JlYXRlIGEgY29uZmlndXJhdGlvbiBtb2RlbFxuICAgKi9cbiAgc3RhdGljIGdldCBERUZBVUxUX1BJTl9DT05GSUcgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpY29uOiB7XG4gICAgICAgIGFuY2hvcjogbnVsbCwgLy8gZS5nLiB7IHg6IDEsIHk6IDEgfVxuICAgICAgICBzdmc6IG51bGwsXG4gICAgICAgIHVybDogbnVsbCxcbiAgICAgICAgc2NhbGVkU2l6ZTogbnVsbCAvLyBlLmcuIHsgdzogMjAsIGg6IDIwIH1cbiAgICAgIH0sXG4gICAgICBsYWJlbFR5cGU6ICdudW1lcmljJ1xuICAgIH07XG4gIH1cblxuICBvbkxvYWRlZCAoY2IpIHtcbiAgICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fb25Mb2FkZWQgPSBjYjtcbiAgICBpZiAodGhpcy5pc0xvYWRlZCgpKSB7XG4gICAgICB0aGlzLl9vbkxvYWRlZCgpO1xuICAgIH1cbiAgfVxuXG4gIGlzTG9hZGVkICgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNMb2FkZWQ7XG4gIH1cblxuICBsb2FkSlMgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCBNZXRob2Q6IGxvYWRKUycpO1xuICB9XG5cbiAgbG9hZFN0YXRpYyAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmltcGxlbWVudGVkIE1ldGhvZDogbG9hZFN0YXRpYycpO1xuICB9XG5cbiAgaW5pdCAobWFwRGF0YSkge1xuICAgIC8vIFRPRE8oYmlsbHkpIFRoaXMgc2hvdWxkIGJlIGJhc2VkIG9mZiBhIHByb21pc2UgdGhhdCBnZXRzIGNyZWF0ZWQgZnJvbSBsb2FkSlNcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaW1wbGVtZW50ZWQgTWV0aG9kOiBpbml0Jyk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEdvb2dsZU1hcFByb3ZpZGVyICovXG5cbmltcG9ydCBNYXBQcm92aWRlciBmcm9tICcuL21hcHByb3ZpZGVyJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vLi4vZG9tL2RvbSc7XG5cbi8qIGdsb2JhbCBnb29nbGUgKi9cblxuLyoqXG4gKiBHb29nbGVNYXBQcm92aWRlciBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiBhIE1hcFByb3ZpZGVyXG4gKiB0aGF0IGhhbmRsZXMgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIHRoaXJkIHBhcnR5IEFQSSB0byBleHBvc2UgbWFwcy5cbiAqIEBleHRlbmRzIE1hcFByb3ZpZGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvb2dsZU1hcFByb3ZpZGVyIGV4dGVuZHMgTWFwUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5fY2xpZW50SWQgPSBvcHRzLmNsaWVudElkO1xuICAgIHRoaXMuX3NpZ25hdHVyZSA9IG9wdHMuc2lnbmF0dXJlO1xuXG4gICAgaWYgKCF0aGlzLmhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMoKSAmJiAhdGhpcy5fYXBpS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dvb2dsZU1hcHNQcm92aWRlcjogTWlzc2luZyBgYXBpS2V5YCBvciB7YGNsaWVudElkYCwgYHNpZ25hdHVyZWB9Jyk7XG4gICAgfVxuICB9XG5cbiAgbG9hZEpTIChvbkxvYWQpIHtcbiAgICBpZiAoRE9NLnF1ZXJ5KCcjeWV4dC1tYXAtanMnKSkge1xuICAgICAgaWYgKHR5cGVvZiBvbkxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb25Mb2FkKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHNjcmlwdCA9IERPTS5jcmVhdGVFbCgnc2NyaXB0Jywge1xuICAgICAgaWQ6ICd5ZXh0LW1hcC1qcycsXG4gICAgICBvbmxvYWQ6ICgpID0+IHtcbiAgICAgICAgdGhpcy5faXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9vbkxvYWRlZCgpO1xuICAgICAgfSxcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgc3JjOiBgLy9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzPyR7dGhpcy5nZW5lcmF0ZUNyZWRlbnRpYWxzKCl9YFxuICAgIH0pO1xuXG4gICAgRE9NLmFwcGVuZCgnYm9keScsIHNjcmlwdCk7XG4gIH1cblxuICBnZW5lcmF0ZVN0YXRpYyAobWFwRGF0YSkge1xuICAgIGxldCBnb29nbGVNYXBNYXJrZXJDb25maWdzID0gR29vZ2xlTWFwTWFya2VyQ29uZmlnLmZyb20oXG4gICAgICBtYXBEYXRhLm1hcE1hcmtlcnMsXG4gICAgICB0aGlzLl9waW5Db25maWdcbiAgICApO1xuXG4gICAgbGV0IGVuY29kZWRNYXJrZXJzID0gR29vZ2xlTWFwTWFya2VyQ29uZmlnLnNlcmlhbGl6ZShnb29nbGVNYXBNYXJrZXJDb25maWdzKTtcbiAgICByZXR1cm4gYFxuICAgICAgPGltZyBzcmM9XCIvL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvc3RhdGljbWFwPyR7ZW5jb2RlZE1hcmtlcnN9JnNpemU9JHt0aGlzLl93aWR0aH14JHt0aGlzLl9oZWlnaHR9JiR7dGhpcy5nZW5lcmF0ZUNyZWRlbnRpYWxzKCl9XCI+YDtcbiAgfVxuXG4gIGdlbmVyYXRlQ3JlZGVudGlhbHMgKCkge1xuICAgIGlmICh0aGlzLmhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMoKSkge1xuICAgICAgcmV0dXJuIGBjbGllbnQ9JHt0aGlzLl9jbGllbnRJZH1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYGtleT0ke3RoaXMuX2FwaUtleX1gO1xuICAgIH1cbiAgfVxuXG4gIGhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMgKCkge1xuICAgIC8vIFNpZ25hdHVyZSBpcyBvbmx5IHJlcXVpcmVkIGlmIG1hcCBpcyBzdGF0aWNcbiAgICByZXR1cm4gdGhpcy5fY2xpZW50SWQgJiYgKHRoaXMuX3NpZ25hdHVyZSB8fCAhdGhpcy5faXNTdGF0aWMpO1xuICB9XG5cbiAgaW5pdCAoZWwsIG1hcERhdGEpIHtcbiAgICBpZiAoIW1hcERhdGEgfHwgbWFwRGF0YS5tYXBNYXJrZXJzLmxlbmd0aCA8PSAwKSB7XG4gICAgICB0aGlzLl9tYXAgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gTk9URShiaWxseSkgVGhpcyB0aW1lb3V0IGlzIGEgaGFjayBmb3IgZGVhbGluZyB3aXRoIGFzeW5jIG5hdHVyZS5cbiAgICAvLyBPbmx5IGhlcmUgZm9yIGRlbW8gcHVycG9zZXMsIHNvIHdlJ2xsIGZpeCBsYXRlci5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBjb250YWluZXIgPSBET00ucXVlcnkoZWwpO1xuICAgICAgRE9NLmNzcyhjb250YWluZXIsIHtcbiAgICAgICAgd2lkdGg6IHRoaXMuX3dpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuX2hlaWdodFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMubWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChjb250YWluZXIsIHtcbiAgICAgICAgem9vbTogdGhpcy5fem9vbVxuICAgICAgfSk7XG5cbiAgICAgIC8vIEFwcGx5IG91ciBzZWFyY2ggZGF0YSB0byBvdXIgR29vZ2xlTWFwXG4gICAgICBsZXQgYm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xuICAgICAgbGV0IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MgPSBHb29nbGVNYXBNYXJrZXJDb25maWcuZnJvbShcbiAgICAgICAgbWFwRGF0YS5tYXBNYXJrZXJzLFxuICAgICAgICB0aGlzLl9waW5Db25maWcsXG4gICAgICAgIHRoaXMubWFwKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnb29nbGVNYXBNYXJrZXJDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKGdvb2dsZU1hcE1hcmtlckNvbmZpZ3NbaV0pO1xuICAgICAgICBib3VuZHMuZXh0ZW5kKG1hcmtlci5wb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhib3VuZHMpO1xuICAgIH0sIDEwMCk7XG4gIH1cbn1cblxuLy8gVE9ETyhiaWxseSkgTW92ZSB0byBvd24gY2xhc3NcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXBNYXJrZXJDb25maWcge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBnb29nbGUgbWFwLCB0aGF0IHRoZSBtYXJrZXIgaXMgYXBwZW5kZWQgdG9cbiAgICAgKiBAdHlwZSB7R29vZ2xlTWFwfVxuICAgICAqL1xuICAgIHRoaXMubWFwID0gb3B0cy5tYXAgfHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBtYXJrZXIgKGxhdC9sbmcpXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLnBvc2l0aW9uID0gb3B0cy5wb3NpdGlvbiB8fCB7XG4gICAgICBsYXQ6IHVuZGVmaW5lZCxcbiAgICAgIGxuZzogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBwcm9wZXJ0aWVzL3NldHRpbmdzIG9mIHRoZSBpY29uIHVzZWQgZm9yIHRoZSBtYXJrZXJcbiAgICAgKiBlLmcuIHtcbiAgICAgKiAgICAgICAgYW5jaG9yOiB7IHg6IDAsIHk6IDAgfVxuICAgICAqICAgICAgICB1cmw6ICdwYXRoL3RvL3VybC5qcGcnXG4gICAgICogICAgICAgIHNjYWxlZFNpemU6IHsgdzogMCwgaDogMCB9XG4gICAgICogICAgICAgfVxuICAgICAqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLmljb24gPSBvcHRzLmljb24gfHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIG9mIHRoZSBtYXJrZXIgdG8gdXNlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmxhYmVsID0gb3B0cy5sYWJlbCB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhbiBhcnJheSBvZiBtYXJrZXIgY29uZmlnc1xuICAgKiBAcGFyYW0ge0dvb2dsZU1hcE1hcmtlckNvbmZpZ1tdfSBnb29nbGVNYXBNYXJrZXJDb25maWdzXG4gICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemUgKGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MpIHtcbiAgICBsZXQgc2VyaWFsaXplZE1hcmtlcnMgPSBbXTtcbiAgICBnb29nbGVNYXBNYXJrZXJDb25maWdzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgc2VyaWFsaXplZE1hcmtlcnMucHVzaChgbWFya2Vycz1sYWJlbDoke21hcmtlci5sYWJlbH18JHttYXJrZXIucG9zaXRpb24ubGF0fSwke21hcmtlci5wb3NpdGlvbi5sbmd9YCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZWRNYXJrZXJzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgc3RvcmFnZSBkYXRhIG1vZGVsIG9mIG1hcmtlcnMgaW50byBHb29nbGVBUElNYXJrZXJcbiAgICogQHBhcmFtIHtHb29nbGVNYXB9IEEgcmVmZXJlbmNlIHRvIHRoZSBnb29nbGUgbWFwIHRvIGFwcGx5IHRoZSBtYXJrZXIgdG9cbiAgICogQHBhcmFtIHtvYmplY3RbXX0gbWFya2VycyBUaGUgZGF0YSBvZiB0aGUgbWFya2VyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwaW5Db25maWcgVGhlIGNvbmZpZ3VyYXRpb24gdG8gYXBwbHkgdG8gdGhlIG1hcmtlclxuICAgKiBAcmV0dXJucyB7R29vZ2xlTWFwTWFya2VyQ29uZmlnW119XG4gICAqL1xuICBzdGF0aWMgZnJvbSAobWFya2VycywgcGluQ29uZmlnLCBtYXApIHtcbiAgICBsZXQgZ29vZ2xlTWFwTWFya2VyQ29uZmlncyA9IFtdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShtYXJrZXJzKSkge1xuICAgICAgbWFya2VycyA9IFttYXJrZXJzXTtcbiAgICB9XG5cbiAgICBtYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgLy8gU3VwcG9ydCBjb25maWd1cmF0aW9uIGFzIGEgZnVuY3Rpb25cbiAgICAgIGxldCBwaW5Db25maWdPYmogPSBwaW5Db25maWc7XG4gICAgICBpZiAodHlwZW9mIHBpbkNvbmZpZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwaW5Db25maWdPYmogPSBwaW5Db25maWcoXG4gICAgICAgICAgbWFya2VyLml0ZW0sXG4gICAgICAgICAgTWFwUHJvdmlkZXIuREVGQVVMVF9QSU5fQ09ORklHLFxuICAgICAgICAgIG1hcmtlcik7XG4gICAgICB9XG5cbiAgICAgIC8vIFRyYW5zZm9ybSBvdXIgQ29uZmlndXJhdGlvbiBPYmplY3QgaW50byB0aGUgZXhwZWN0ZWRcbiAgICAgIC8vIEdvb2dsZSBBUEkgZm9ybWF0LlxuICAgICAgbGV0IGljb24gPSB7fTtcbiAgICAgIGlmIChwaW5Db25maWdPYmouYW5jaG9yKSB7XG4gICAgICAgIGljb24uYW5jaG9yID0gZ29vZ2xlLm1hcHMuUG9pbnQocGluQ29uZmlnT2JqLmFuY2hvci54LCBwaW5Db25maWdPYmouYW5jaG9yLnkpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluQ29uZmlnT2JqLnNjYWxlZFNpemUpIHtcbiAgICAgICAgaWNvbi5zY2FsZWRTaXplID0gZ29vZ2xlLm1hcHMuU2l6ZShwaW5Db25maWdPYmouc2NhbGVkU2l6ZS53LCBwaW5Db25maWdPYmouc2NhbGVkU2l6ZS5oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpbkNvbmZpZ09iai51cmwpIHtcbiAgICAgICAgaWNvbi51cmwgPSBwaW5Db25maWdPYmoudXJsO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluQ29uZmlnT2JqLnN2Zykge1xuICAgICAgICBpY29uLnVybCA9IGBkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwgJHtlbmNvZGVVUklDb21wb25lbnQocGluQ29uZmlnT2JqLnN2Zyl9YDtcbiAgICAgIH1cblxuICAgICAgbGV0IGxhYmVsO1xuICAgICAgaWYgKHBpbkNvbmZpZ09iai5sYWJlbCkge1xuICAgICAgICBsYWJlbCA9IHBpbkNvbmZpZ09iai5sYWJlbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhYmVsID0gbWFya2VyLmxhYmVsLnRvU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIE5PVEUoYmlsbHkpIEdvb2dsZSBtYXBzIGRvZXNuJ3QgaGFuZGxlIGVtcHR5IGljb24gb2JqZWN0cyBuaWNlbHlcbiAgICAgIC8vIE1ha2UgZ29vZ2xlIG1hcHMgaGFwcHkgaWYgbm8gc2V0dGluZ3MgZm9yIGljb24gYXJlIHByb3ZpZGVkO1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGljb24pLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpY29uID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBnb29nbGVNYXBNYXJrZXJDb25maWdzLnB1c2goXG4gICAgICAgIG5ldyBHb29nbGVNYXBNYXJrZXJDb25maWcoe1xuICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICBsYXQ6IG1hcmtlci5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxuZzogbWFya2VyLmxvbmdpdHVkZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaWNvbjogaWNvbixcbiAgICAgICAgICBsYWJlbDogbGFiZWxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZ29vZ2xlTWFwTWFya2VyQ29uZmlncztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTWFwQm94TWFwUHJvdmlkZXIgKi9cblxuaW1wb3J0IE1hcFByb3ZpZGVyIGZyb20gJy4vbWFwcHJvdmlkZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi8uLi9kb20vZG9tJztcblxuLyogZ2xvYmFsIG1hcGJveGdsICovXG5cbi8qKlxuICogTWFwQm94TWFwUHJvdmlkZXIgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgYSBNYXBQcm92aWRlclxuICogdGhhdCBoYW5kbGVzIHRoZSBpbnRlZ3JhdGlvbiB3aXRoIHRoZSB0aGlyZCBwYXJ0eSBBUEkgdG8gZXhwb3NlIG1hcHMuXG4gKiBAZXh0ZW5kcyBNYXBQcm92aWRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBCb3hNYXBQcm92aWRlciBleHRlbmRzIE1hcFByb3ZpZGVyIHtcbiAgLyoqXG4gICAqIExvYWQgdGhlIGV4dGVybmFsIEpTIExpYnJhcnlcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25Mb2FkIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRvIGludm9rZSBvbmNlIHRoZSBKUyBpcyBsb2FkZWQuXG4gICAqL1xuICBsb2FkSlMgKG9uTG9hZCkge1xuICAgIGxldCBzY3JpcHQgPSBET00uY3JlYXRlRWwoJ3NjcmlwdCcsIHtcbiAgICAgIGlkOiAneWV4dC1tYXAtanMnLFxuICAgICAgb25sb2FkOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgbWFwYm94Z2wuYWNjZXNzVG9rZW4gPSB0aGlzLl9hcGlLZXk7XG5cbiAgICAgICAgb25Mb2FkKCk7XG4gICAgICB9LFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzcmM6ICdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MC40NC4xL21hcGJveC1nbC5qcydcbiAgICB9KTtcblxuICAgIGxldCBjc3MgPSBET00uY3JlYXRlRWwoJ2xpbmsnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWNzcycsXG4gICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgIGhyZWY6ICdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MC40NC4xL21hcGJveC1nbC5jc3MnXG4gICAgfSk7XG5cbiAgICBET00uYXBwZW5kKCdib2R5JywgY3NzKTtcbiAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgfVxuXG4gIGdlbmVyYXRlU3RhdGljIChtYXBEYXRhKSB7XG4gICAgbGV0IG1hcGJveE1hcE1hcmtlckNvbmZpZ3MgPSBNYXBCb3hNYXJrZXJDb25maWcuZnJvbShcbiAgICAgIG1hcERhdGEubWFwTWFya2VycyxcbiAgICAgIHRoaXMuX3BpbkNvbmZpZ1xuICAgICk7XG5cbiAgICBsZXQgY2VudGVyID0gbWFwRGF0YS5tYXBDZW50ZXI7XG4gICAgbGV0IHdpZHRoID0gdGhpcy5fd2lkdGggfHwgNjAwO1xuICAgIGxldCBoZWlnaHQgPSB0aGlzLl9oZWlnaHQgfHwgMjAwO1xuICAgIGxldCB6b29tID0gdGhpcy5fem9vbSB8fCA5O1xuXG4gICAgbGV0IGVuY29kZWRNYXJrZXJzID0gTWFwQm94TWFya2VyQ29uZmlnLnNlcmlhbGl6ZShtYXBib3hNYXBNYXJrZXJDb25maWdzKTtcbiAgICByZXR1cm4gYDxpbWcgc3JjPVwiaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9zdHlsZXMvdjEvbWFwYm94L3N0cmVldHMtdjExL3N0YXRpYy8ke2VuY29kZWRNYXJrZXJzfS8ke2NlbnRlci5sb25naXR1ZGV9LCR7Y2VudGVyLmxhdGl0dWRlfSwke3pvb219L2F1dG8vJHt3aWR0aH14JHtoZWlnaHR9P2FjY2Vzc190b2tlbj0ke3RoaXMuX2FwaUtleX1cIj5gO1xuICB9XG5cbiAgaW5pdCAoZWwsIG1hcERhdGEpIHtcbiAgICBpZiAoIW1hcERhdGEgfHwgbWFwRGF0YS5tYXBNYXJrZXJzLmxlbmd0aCA8PSAwKSB7XG4gICAgICB0aGlzLl9tYXAgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRhaW5lciA9IERPTS5xdWVyeShlbCk7XG4gICAgRE9NLmNzcyhjb250YWluZXIsIHtcbiAgICAgIHdpZHRoOiB0aGlzLl93aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5faGVpZ2h0XG4gICAgfSk7XG5cbiAgICB0aGlzLl9tYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgem9vbTogdGhpcy5fem9vbSxcbiAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXY5JyxcbiAgICAgIGNlbnRlcjogW21hcERhdGEubWFwQ2VudGVyLmxvbmdpdHVkZSwgbWFwRGF0YS5tYXBDZW50ZXIubGF0aXR1ZGVdXG4gICAgfSk7XG5cbiAgICBjb25zdCBtYXBib3hNYXBNYXJrZXJDb25maWdzID0gTWFwQm94TWFya2VyQ29uZmlnLmZyb20oXG4gICAgICBtYXBEYXRhLm1hcE1hcmtlcnMsXG4gICAgICB0aGlzLl9waW5Db25maWcsXG4gICAgICB0aGlzLl9tYXApO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXBib3hNYXBNYXJrZXJDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgd3JhcHBlciA9IG1hcGJveE1hcE1hcmtlckNvbmZpZ3NbaV0ud3JhcHBlcjtcbiAgICAgIGxldCBjb29yZHMgPSBuZXcgbWFwYm94Z2wuTG5nTGF0KFxuICAgICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzW2ldLnBvc2l0aW9uLmxvbmdpdHVkZSxcbiAgICAgICAgbWFwYm94TWFwTWFya2VyQ29uZmlnc1tpXS5wb3NpdGlvbi5sYXRpdHVkZSk7XG4gICAgICBsZXQgbWFya2VyID0gbmV3IG1hcGJveGdsLk1hcmtlcih3cmFwcGVyKS5zZXRMbmdMYXQoY29vcmRzKTtcbiAgICAgIG1hcmtlci5hZGRUbyh0aGlzLl9tYXApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWFwQm94TWFya2VyQ29uZmlnIHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgbWFwYm94IG1hcCwgdGhhdCB0aGUgbWFya2VyIGlzIGFwcGVuZGVkIHRvXG4gICAgICogQHR5cGUge01hcEJveH1cbiAgICAgKi9cbiAgICB0aGlzLm1hcCA9IG9wdHMubWFwIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb29yZGluYXRlcyBvZiB0aGUgbWFya2VyIChsYXQvbG5nKVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5wb3NpdGlvbiA9IG9wdHMucG9zaXRpb24gfHwge1xuICAgICAgbGF0aXR1ZGU6IHVuZGVmaW5lZCxcbiAgICAgIGxvbmdpdHVkZTogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBodG1sIGVsZW1lbnQgdG8gYmUgdXNlZCBhcyB0aGUgbWFwIG1hcmtlclxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgdGhpcy53cmFwcGVyID0gb3B0cy53cmFwcGVyIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCBvZiB0aGUgbWFya2VyIHRvIHVzZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbCA9IG9wdHMubGFiZWwgfHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHVybCBvZiB0aGUgcGluIGZvciB0aGUgc3RhdGljIG1hcFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zdGF0aWNNYXBQaW4gPSBvcHRzLnN0YXRpY01hcFBpbiB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhbiBhcnJheSBvZiBtYXJrZXIgY29uZmlnc1xuICAgKiBAcGFyYW0ge01hcEJveE1hcmtlckNvbmZpZ1tdfSBtYXBib3hNYXBNYXJrZXJDb25maWdzXG4gICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemUgKG1hcGJveE1hcE1hcmtlckNvbmZpZ3MpIHtcbiAgICBsZXQgc2VyaWFsaXplZE1hcmtlcnMgPSBbXTtcbiAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgaWYgKG1hcmtlci5zdGF0aWNNYXBQaW4pIHtcbiAgICAgICAgc2VyaWFsaXplZE1hcmtlcnMucHVzaChgdXJsLSR7bWFya2VyLnN0YXRpY01hcFBpbn0oJHttYXJrZXIucG9zaXRpb24ubG9uZ2l0dWRlfSwke21hcmtlci5wb3NpdGlvbi5sYXRpdHVkZX0pYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXJpYWxpemVkTWFya2Vycy5wdXNoKGBwaW4tcy0ke21hcmtlci5sYWJlbH0oJHttYXJrZXIucG9zaXRpb24ubG9uZ2l0dWRlfSwke21hcmtlci5wb3NpdGlvbi5sYXRpdHVkZX0pYCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZWRNYXJrZXJzLmpvaW4oJywnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgc3RvcmFnZSBkYXRhIG1vZGVsIG9mIG1hcmtlcnMgaW50byBHb29nbGVBUElNYXJrZXJcbiAgICogQHBhcmFtIHtNYXBCb3h9IEEgcmVmZXJlbmNlIHRvIHRoZSBnb29nbGUgbWFwIHRvIGFwcGx5IHRoZSBtYXJrZXIgdG9cbiAgICogQHBhcmFtIHtvYmplY3RbXX0gbWFya2VycyBUaGUgZGF0YSBvZiB0aGUgbWFya2VyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwaW5Db25maWcgVGhlIGNvbmZpZ3VyYXRpb24gdG8gYXBwbHkgdG8gdGhlIG1hcmtlclxuICAgKiBAcmV0dXJucyB7TWFwQm94TWFya2VyQ29uZmlnW119XG4gICAqL1xuICBzdGF0aWMgZnJvbSAobWFya2VycywgcGluQ29uZmlnLCBtYXApIHtcbiAgICBsZXQgbWFwYm94TWFwTWFya2VyQ29uZmlncyA9IFtdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShtYXJrZXJzKSkge1xuICAgICAgbWFya2VycyA9IFttYXJrZXJzXTtcbiAgICB9XG5cbiAgICBtYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgLy8gU3VwcG9ydCBjb25maWd1cmF0aW9uIGFzIGEgZnVuY3Rpb25cbiAgICAgIGxldCBwaW5Db25maWdPYmogPSBwaW5Db25maWc7XG4gICAgICBpZiAodHlwZW9mIHBpbkNvbmZpZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwaW5Db25maWdPYmogPSBwaW5Db25maWcoXG4gICAgICAgICAgbWFya2VyLml0ZW0sXG4gICAgICAgICAgTWFwUHJvdmlkZXIuREVGQVVMVF9QSU5fQ09ORklHLFxuICAgICAgICAgIG1hcmtlcik7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHdyYXBwZXIgPSBwaW5Db25maWdPYmoud3JhcHBlciA/IHBpbkNvbmZpZ09iai53cmFwcGVyIDogbnVsbDtcbiAgICAgIGNvbnN0IHN0YXRpY01hcFBpbiA9IHBpbkNvbmZpZ09iai5zdGF0aWNNYXBQaW4gPyBwaW5Db25maWdPYmouc3RhdGljTWFwUGluIDogbnVsbDtcblxuICAgICAgbWFwYm94TWFwTWFya2VyQ29uZmlncy5wdXNoKFxuICAgICAgICBuZXcgTWFwQm94TWFya2VyQ29uZmlnKHtcbiAgICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgbGF0aXR1ZGU6IG1hcmtlci5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogbWFya2VyLmxvbmdpdHVkZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgd3JhcHBlcjogd3JhcHBlcixcbiAgICAgICAgICBsYWJlbDogbWFya2VyLmxhYmVsLFxuICAgICAgICAgIHN0YXRpY01hcFBpbjogc3RhdGljTWFwUGluXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hcGJveE1hcE1hcmtlckNvbmZpZ3M7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE1hcENvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmltcG9ydCBHb29nbGVNYXBQcm92aWRlciBmcm9tICcuL3Byb3ZpZGVycy9nb29nbGVtYXBwcm92aWRlcic7XG5pbXBvcnQgTWFwQm94TWFwUHJvdmlkZXIgZnJvbSAnLi9wcm92aWRlcnMvbWFwYm94bWFwcHJvdmlkZXInO1xuXG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuY29uc3QgUHJvdmlkZXJUeXBlcyA9IHtcbiAgJ2dvb2dsZSc6IEdvb2dsZU1hcFByb3ZpZGVyLFxuICAnbWFwYm94JzogTWFwQm94TWFwUHJvdmlkZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIC8qKlxuICAgICAqIEJpbmQgdGhpcyBjb21wb25lbnQgdG8gbGlzdGVuIHRvIHRoZSBzdG9yYWdlIGJhc2VkIG9uIHRoaXMga2V5XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCB0ZW1wbGF0ZSB0byB1c2UgdG8gcmVuZGVyIHRoaXMgY29tcG9uZW50XG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3Jlc3VsdHMvbWFwJztcblxuICAgIC8qKlxuICAgICAqIEFuIGFsaWFzZWQgdXNlZCB0byBkZXRlcm1pbmUgdGhlIHR5cGUgb2YgbWFwIHByb3ZpZGVyIHRvIHVzZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fbWFwUHJvdmlkZXIgPSBvcHRzLm1hcFByb3ZpZGVyO1xuICAgIGlmICghdGhpcy5fbWFwUHJvdmlkZXIgfHwgISh0aGlzLl9tYXBQcm92aWRlci50b0xvd2VyQ2FzZSgpIGluIFByb3ZpZGVyVHlwZXMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hcENvbXBvbmVudDogSW52YWxpZCBNYXAgUHJvdmlkZXI7IG11c3QgYmUgYGdvb2dsZWAgb3IgYG1hcEJveGAnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBpbmRpY2F0aW9uIG9mIHdoZXRoZXIgb3Igbm90IHRvIHVzZSBhIHN0YXRpYyBvciBkeW5hbWljIG1hcFxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuX2lzU3RhdGljID0gb3B0cy5pc1N0YXRpYyB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIGFuIGluc3RhbmNlIG9mIHRoZSB7TWFwUHJvdmlkZXJ9IHRoYXQncyBjb25zdHJ1Y3RlZFxuICAgICAqIEB0eXBlIHtNYXBQcm92aWRlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9tYXAgPSBudWxsO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ01hcCc7XG4gIH1cblxuICAvLyBUT0RPKGJpbGx5KSBNYWtlIFByb3ZpZGVyVHlwZXMgYSBmYWN0b3J5IGNsYXNzXG4gIGdldFByb3ZpZGVySW5zdGFuY2UgKHR5cGUpIHtcbiAgICByZXR1cm4gbmV3IFByb3ZpZGVyVHlwZXNbdHlwZS50b0xvd2VyQ2FzZSgpXSh0aGlzLl9vcHRzKTtcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICB0aGlzLl9tYXAgPSB0aGlzLmdldFByb3ZpZGVySW5zdGFuY2UodGhpcy5fbWFwUHJvdmlkZXIpO1xuICAgIGxldCBtYXBEYXRhID0gdGhpcy5nZXRTdGF0ZSgnbWFwJyk7XG4gICAgaWYgKG1hcERhdGEgPT09IHVuZGVmaW5lZCAmJiB0aGlzLl9pc1N0YXRpYykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU3RhdGljKSB7XG4gICAgICAvLyBUT0RPKGJpbGx5KSBUaGUgZXhpc3RpbmcgdGVtcGxhdGUgc2hvdWxkIGp1c3QgdGFrZSBpbiB0aGUgbWFwIGBpbWdVUkxgIGFzIGRhdGFcbiAgICAgIC8vIEluc3RlYWQgb2Ygb3ZlcnJpZGluZyB0aGUgdGVtcGxhdGUgbGlrZSBzbywgYnV0IE5CRCBmb3Igbm93LlxuICAgICAgdGhpcy5zZXRUZW1wbGF0ZSh0aGlzLl9tYXAuZ2VuZXJhdGVTdGF0aWMobWFwRGF0YSkpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5fbWFwLmxvYWRKUygpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgdGhpcy5fbWFwLm9uTG9hZGVkKCgpID0+IHtcbiAgICAgIHRoaXMuX21hcC5pbml0KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5nZXRTdGF0ZSgnbWFwJykpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShkYXRhLCB2YWwpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBSZXN1bHRzQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vZXZlbnRyZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9wZW9wbGVyZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgTWFwQ29tcG9uZW50IGZyb20gJy4uL21hcC9tYXBjb21wb25lbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbmNvbnN0IFJlc3VsdFR5cGUgPSB7XG4gIEVWRU5UOiAnZXZlbnQnLFxuICBMT0NBVElPTjogJ2xvY2F0aW9uJyxcbiAgUEVPUExFOiAncGVvcGxlJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0c0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5WRVJUSUNBTF9SRVNVTFRTO1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdyZXN1bHRzL3Jlc3VsdHMnO1xuICAgIHRoaXMubGltaXQgPSBvcHRzLmxpbWl0IHx8IDU7XG4gICAgdGhpcy5faXRlbUNvbmZpZyA9IHtcbiAgICAgIGdsb2JhbDoge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9LFxuICAgICAgW0V2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZV06IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIFtMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50LnR5cGVdOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH0sXG4gICAgICBbUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZV06IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAob3B0cy5yZW5kZXJJdGVtID09PSB1bmRlZmluZWQgJiYgb3B0cy5fcGFyZW50T3B0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcHRzLnJlbmRlckl0ZW0gPSBvcHRzLl9wYXJlbnRPcHRzLnJlbmRlckl0ZW07XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuaXRlbVRlbXBsYXRlID09PSB1bmRlZmluZWQgJiYgb3B0cy5fcGFyZW50T3B0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcHRzLml0ZW1UZW1wbGF0ZSA9IG9wdHMuX3BhcmVudE9wdHMuaXRlbVRlbXBsYXRlO1xuICAgIH1cblxuICAgIHRoaXMuY29uZmlndXJlSXRlbSh7XG4gICAgICByZW5kZXI6IG9wdHMucmVuZGVySXRlbSxcbiAgICAgIHRlbXBsYXRlOiBvcHRzLml0ZW1UZW1wbGF0ZVxuICAgIH0pO1xuICB9XG5cbiAgbW91bnQgKCkge1xuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmdldFN0YXRlKCkpLmxlbmd0aCA+IDApIHtcbiAgICAgIHN1cGVyLm1vdW50KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGR1cGxpY2F0ZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhLCB2YWwpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgaW5jbHVkZU1hcDogdGhpcy5fb3B0cy5pbmNsdWRlTWFwLFxuICAgICAgbWFwQ29uZmlnOiB0aGlzLl9vcHRzLm1hcENvbmZpZ1xuICAgIH0pLCB2YWwpO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1ZlcnRpY2FsUmVzdWx0cyc7XG4gIH1cblxuICBjb25maWd1cmVJdGVtIChjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX2l0ZW1Db25maWcuZ2xvYmFsLnJlbmRlciA9IGNvbmZpZy5yZW5kZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb25maWcucmVuZGVyKSB7XG4gICAgICAgIHRoaXMuc2V0SXRlbVJlbmRlcihrZXksIGNvbmZpZy5yZW5kZXJba2V5XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9pdGVtQ29uZmlnLmdsb2JhbC50ZW1wbGF0ZSA9IGNvbmZpZy50ZW1wbGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbmZpZy50ZW1wbGF0ZSkge1xuICAgICAgICB0aGlzLnNldEl0ZW1UZW1wbGF0ZShrZXksIGNvbmZpZy50ZW1wbGF0ZVtrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRJdGVtVGVtcGxhdGUgKHR5cGUsIHRlbXBsYXRlKSB7XG4gICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KHR5cGUpO1xuICAgIHRoaXMuX2l0ZW1Db25maWdbY2xhenoudHlwZV0udGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHNldEl0ZW1SZW5kZXIgKHR5cGUsIHJlbmRlcikge1xuICAgIGxldCBjbGF6eiA9IHRoaXMuZ2V0SXRlbUNvbXBvbmVudCh0eXBlKTtcbiAgICB0aGlzLl9pdGVtQ29uZmlnW2NsYXp6LnR5cGVdLnJlbmRlciA9IHJlbmRlcjtcbiAgfVxuXG4gIGdldEl0ZW1Db21wb25lbnQgKHR5cGUpIHtcbiAgICBsZXQgY29tcCA9IFJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSZXN1bHRUeXBlLkVWRU5UOlxuICAgICAgICBjb21wID0gRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJlc3VsdFR5cGUuTE9DQVRJT046XG4gICAgICAgIGNvbXAgPSBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUmVzdWx0VHlwZS5QRU9QTEU6XG4gICAgICAgIGNvbXAgPSBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXA7XG4gIH1cblxuICBhZGRDaGlsZCAoZGF0YSwgdHlwZSwgb3B0cykge1xuICAgIC8vIFRPRE8oYmlsbHkpIFJlZmFjdG9yIHRoZSB3YXkgY29uZmlndXJhdGlvbiBhbmQgZGF0YSBmbG93c1xuICAgIC8vIHRocm91Z2ggdG9wIGxldmVsIGNvbXBvbmVudHMgdG8gY2hpbGQgY29tcG9uZW50cy5cbiAgICBpZiAodHlwZSA9PT0gUmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZSkge1xuICAgICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KGRhdGEudHlwZSk7XG4gICAgICBpZiAoY2xhenopIHtcbiAgICAgICAgdHlwZSA9IGNsYXp6LnR5cGU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBNYXBDb21wb25lbnQudHlwZSkge1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgbWFwOiBkYXRhXG4gICAgICB9O1xuICAgICAgY29uc3QgbmV3T3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX29wdHMubWFwQ29uZmlnLCBvcHRzKTtcbiAgICAgIHJldHVybiBzdXBlci5hZGRDaGlsZChkYXRhLCB0eXBlLCBuZXdPcHRzKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB0aGUgcHJvcGVyIGl0ZW0gcmVuZGVycyB0byB0aGUgdGhlIGNvbXBvbmVudHNcbiAgICAvLyBoYXZlIGp1c3QgYmVlbiBjb25zdHJ1Y3RlZC4gUHJpb3JpdGl6ZSBnbG9iYWwgb3ZlciBpbmRpdmlkdWFsIGl0ZW1zLlxuICAgIGxldCBjb21wID0gc3VwZXIuYWRkQ2hpbGQoZGF0YSwgdHlwZSwgb3B0cyk7XG4gICAgbGV0IGdsb2JhbENvbmZpZyA9IHRoaXMuX2l0ZW1Db25maWcuZ2xvYmFsO1xuICAgIGxldCBpdGVtQ29uZmlnID0gdGhpcy5faXRlbUNvbmZpZ1tjb21wLnR5cGVdO1xuICAgIGxldCBoYXNHbG9iYWxSZW5kZXIgPSB0eXBlb2YgZ2xvYmFsQ29uZmlnLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJztcbiAgICBsZXQgaGFzR2xvYmFsVGVtcGxhdGUgPSB0eXBlb2YgZ2xvYmFsQ29uZmlnLnRlbXBsYXRlID09PSAnc3RyaW5nJztcblxuICAgIGlmIChoYXNHbG9iYWxSZW5kZXIpIHtcbiAgICAgIGNvbXAuc2V0UmVuZGVyKGdsb2JhbENvbmZpZy5yZW5kZXIpO1xuICAgIH1cblxuICAgIGlmIChoYXNHbG9iYWxUZW1wbGF0ZSkge1xuICAgICAgY29tcC5zZXRUZW1wbGF0ZShnbG9iYWxDb25maWcudGVtcGxhdGUpO1xuICAgIH1cblxuICAgIGlmICghaXRlbUNvbmZpZykge1xuICAgICAgcmV0dXJuIGNvbXA7XG4gICAgfVxuXG4gICAgaWYgKCFoYXNHbG9iYWxSZW5kZXIgJiYgaXRlbUNvbmZpZy5yZW5kZXIpIHtcbiAgICAgIGNvbXAuc2V0UmVuZGVyKGl0ZW1Db25maWcucmVuZGVyKTtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB0ZW1wbGF0ZSBzcGVjaWZpYyBzaXR1YXRpb25cbiAgICBpZiAoIWhhc0dsb2JhbFRlbXBsYXRlICYmIGl0ZW1Db25maWcudGVtcGxhdGUpIHtcbiAgICAgIGNvbXAuc2V0VGVtcGxhdGUoaXRlbUNvbmZpZy50ZW1wbGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBjb21wO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTO1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdyZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHMnO1xuICAgIHRoaXMuX2xpbWl0ID0gb3B0cy5saW1pdCB8fCAxMDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdVbml2ZXJzYWxSZXN1bHRzJztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaW5pdCAob3B0cykge1xuICAgIHN1cGVyLmluaXQob3B0cyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRDaGlsZCAoZGF0YSA9IHt9LCB0eXBlKSB7XG4gICAgbGV0IG9wdHMgPSB0aGlzLmdldENoaWxkQ29uZmlnKFtkYXRhWyd2ZXJ0aWNhbENvbmZpZ0lkJ11dKTtcbiAgICByZXR1cm4gc3VwZXIuYWRkQ2hpbGQoZGF0YSwgdHlwZSwgb3B0cyk7XG4gIH1cblxuICBnZXRDaGlsZENvbmZpZyAoY29uZmlnSWQpIHtcbiAgICBsZXQgY29uZmlnID0gdGhpcy5fb3B0cy5jb25maWc7XG4gICAgaWYgKGNvbmZpZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9vcHRzWydjb25maWcnXVtjb25maWdJZF0gfHwgdGhpcy5fb3B0c1snY29uZmlnJ107XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCAqL1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5VTklWRVJTQUxfUkVTVUxUUztcblxuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdxdWVzdGlvbnMvc3VibWlzc2lvbic7XG5cbiAgICAvKipcbiAgICAgKiBRdWVzdGlvbiBzdWJtaXNzaW9uIGlzIGJhc2VkIG9uIGEgZm9ybSBhcyBjb250ZXh0LlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBuYXRpdmUgZm9ybSBub2RlIHdpdGhpbiBjb250YWluZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9mb3JtRWwgPSBvcHRzLmZvcm1TZWxlY3RvciB8fCAnZm9ybSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgZS1tYWlsIGFkZHJlc3MgaW5wdXRcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gYEVtYWlsIEFkZHJlc3NgXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9lbWFpbExhYmVsID0gb3B0cy5lbWFpbExhYmVsIHx8ICcqRW1haWwgQWRkcmVzczonO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIG5hbWUgaW5wdXRcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gYE5hbWVgXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9uYW1lTGFiZWwgPSBvcHRzLm5hbWVMYWJlbCB8fCAnTmFtZTonO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIFF1ZXN0aW9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIGBXaGF0IGlzIHlvdXIgcXVlc3Rpb24/YFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fcXVlc3Rpb25MYWJlbCA9IG9wdHMucXVlc3Rpb25MYWJlbCB8fCAnKldoYXQgaXMgeW91ciBxdWVzdGlvbj8nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIFByaXZhY3kgUG9saWN5XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIGBXaGF0IGlzIHlvdXIgcXVlc3Rpb24/YFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fcHJpdmFjeVBvbGljeUxhYmVsID0gb3B0cy5wcml2YWN5UG9saWN5TGFiZWwgfHwgJ0kgYWdyZWUgdG8gb3VyIFByaXZhY3kgUG9saWN5Oic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgU3VibWl0IGJ1dHRvblxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBgU3VibWl0P2BcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2J1dHRvbkxhYmVsID0gb3B0cy5idXR0b25MYWJlbCB8fCAnU3VibWl0JztcbiAgfVxuXG4gIGJlZm9yZU1vdW50ICgpIHtcbiAgICAvLyBPbmx5IG1vdW50IG91ciBjb21wb25lbnQgaWYgdGhlIHF1ZXJ5IGhhcyBiZWVuIHRyaWdnZXJlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0aGlzLmdldFN0YXRlKCdoYXNRdWVyaWVkJykgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIHRoaXMuaW5pdFN1Ym1pdCh0aGlzLl9mb3JtRWwpO1xuICB9XG5cbiAgaW5pdFN1Ym1pdCAoZm9ybVNlbGVjdG9yKSB7XG4gICAgdGhpcy5fZm9ybUVsID0gZm9ybVNlbGVjdG9yO1xuXG4gICAgbGV0IGZvcm0gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9mb3JtRWwpO1xuXG4gICAgRE9NLm9uKGZvcm0sICdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gVE9ETyhiaWxseSkgU2VyaWFsaXplIGZvcm1cbiAgICAgIC8vIHRoaXMuY29yZS5zdWJtaXRRdWVzdGlvbihmb3JtKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdRQVN1Ym1pc3Npb24nO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIC8vIFNpbmNlIHdlJ3JlIGJpbmRpbmcgdG8gc2VhcmNoIHJlc3VsdHMsXG4gICAgLy8gYW5kIHdlIG9ubHkgd2FudCB0byBzaG93IHRoZSBRQSBzdWJtaXNzaW9uXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKHtcbiAgICAgIGhhc1F1ZXJpZWQ6IGRhdGEuc2VjdGlvbnMgIT09IHVuZGVmaW5lZCxcbiAgICAgIGVtYWlsTGFiZWw6IHRoaXMuX2VtYWlsTGFiZWwsXG4gICAgICBuYW1lTGFiZWw6IHRoaXMuX25hbWVMYWJlbCxcbiAgICAgIHF1ZXN0aW9uTGFiZWw6IHRoaXMuX3F1ZXN0aW9uTGFiZWwsXG4gICAgICBwcml2YWN5UG9saWN5TGFiZWw6IHRoaXMuX3ByaXZhY3lQb2xpY3lMYWJlbCxcbiAgICAgIGJ1dHRvbkxhYmVsOiB0aGlzLl9idXR0b25MYWJlbCxcbiAgICAgIHF1ZXN0aW9uOiBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKS5nZXQoJ3F1ZXJ5JylcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi9jb21wb25lbnRtYW5hZ2VyJztcblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XG5cbmltcG9ydCBOYXZpZ2F0aW9uQ29tcG9uZW50IGZyb20gJy4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uY29tcG9uZW50JztcblxuaW1wb3J0IFNlYXJjaENvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9zZWFyY2hjb21wb25lbnQnO1xuaW1wb3J0IEZpbHRlclNlYXJjaENvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9maWx0ZXJzZWFyY2hjb21wb25lbnQnO1xuaW1wb3J0IEF1dG9Db21wbGV0ZUNvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9hdXRvY29tcGxldGVjb21wb25lbnQnO1xuXG5pbXBvcnQgRmlsdGVyT3B0aW9uc0NvbXBvbmVudCBmcm9tICcuL2ZpbHRlcnMvZmlsdGVyb3B0aW9uc2NvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyQm94Q29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9maWx0ZXJib3hjb21wb25lbnQnO1xuXG5pbXBvcnQgRGlyZWN0QW5zd2VyQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9kaXJlY3RhbnN3ZXJjb21wb25lbnQnO1xuaW1wb3J0IFJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Jlc3VsdHNjb21wb25lbnQnO1xuaW1wb3J0IFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHNjb21wb25lbnQnO1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcGVvcGxlcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5pbXBvcnQgTWFwQ29tcG9uZW50IGZyb20gJy4vbWFwL21hcGNvbXBvbmVudCc7XG5cbmltcG9ydCBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgZnJvbSAnLi9xdWVzdGlvbnMvcXVlc3Rpb25zdWJtaXNzaW9uY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9NQU5BR0VSID0gbmV3IENvbXBvbmVudE1hbmFnZXIoKVxuLy8gQ29yZSBDb21wb25lbnRcbiAgLnJlZ2lzdGVyKENvbXBvbmVudClcblxuLy8gTmF2aWdhdGlvbiBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihOYXZpZ2F0aW9uQ29tcG9uZW50KVxuXG4vLyBTZWFyY2ggQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoU2VhcmNoQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRmlsdGVyU2VhcmNoQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoQXV0b0NvbXBsZXRlQ29tcG9uZW50KVxuXG4vLyBGaWx0ZXIgQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoRmlsdGVyQm94Q29tcG9uZW50KVxuICAucmVnaXN0ZXIoRmlsdGVyT3B0aW9uc0NvbXBvbmVudClcblxuLy8gUmVzdWx0cyBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihEaXJlY3RBbnN3ZXJDb21wb25lbnQpXG4gIC5yZWdpc3RlcihVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoUmVzdWx0c0NvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFJlc3VsdHNJdGVtQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQpXG4gIC5yZWdpc3RlcihQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudClcblxuICAucmVnaXN0ZXIoTWFwQ29tcG9uZW50KVxuXG4vLyBRdWVzdGlvbnMgQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50KTtcbiIsIi8qKiBAbW9kdWxlIFRlbXBsYXRlTG9hZGVyICovXG5cbmltcG9ydCBET00gZnJvbSAnLi4vZG9tL2RvbSc7XG5pbXBvcnQgeyBDT01QSUxFRF9URU1QTEFURVNfVVJMIH0gZnJvbSAnLi4vLi4vY29yZS9jb25zdGFudHMnO1xuXG4vKipcbiAqIFRlbXBsYXRlTG9hZGVyIGV4cG9zZXMgYW4gaW50ZXJmYWNlIGZvciBsb2FkaW5nIHRlbXBsYXRlcyBhc3luY2hyb25vdXNseVxuICogZnJvbSB0aGUgc2VydmVyIGFuZCByZWdpc3RlcnMgdGhlbSB3aXRoIHRoZSBwcm9wZXIgcmVuZGVyZXIuXG4gKiBJdCBhbHNvIGFsbG93cyB5b3UgdG8gYXNzaWduIHRoZW0gc3luY2hyb25vdXNseS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVMb2FkZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgaWYgKCFUZW1wbGF0ZUxvYWRlci5zZXRJbnN0YW5jZSh0aGlzKSkge1xuICAgICAgcmV0dXJuIFRlbXBsYXRlTG9hZGVyLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHVybCB0byBmZXRjaCBjb21waWxlZCB0ZW1wbGF0ZXMgZnJvbVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZVVybCA9IGNvbmZpZy50ZW1wbGF0ZVVybCB8fCBDT01QSUxFRF9URU1QTEFURVNfVVJMO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVzID0ge307XG4gICAgdGhpcy5fb25Mb2FkZWQgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB0aGlzLl9pbml0KCk7XG4gIH1cblxuICBzdGF0aWMgc2V0SW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIF9pbml0ICgpIHtcbiAgICB0aGlzLmZldGNoVGVtcGxhdGVzKCk7XG4gIH1cblxuICBmZXRjaFRlbXBsYXRlcyAoKSB7XG4gICAgLy8gSWYgd2UgYWxyZWFkeSBoYXZlIHRlbXBsYXRlcyBsb2FkZWQsIGRvIG5vdGhpbmdcbiAgICBsZXQgbm9kZSA9IERPTS5xdWVyeSgnI3lleHQtYW5zd2Vycy10ZW1wbGF0ZXMnKTtcbiAgICBpZiAobm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEluamVjdCBhIHNjcmlwdCB0byBmZXRjaCB0aGUgY29tcGlsZWQgdGVtcGxhdGVzLFxuICAgIC8vIHdyYXBwaW5nIGl0IGEgUHJvbWlzZSBmb3IgY2xlYW5saW5lc3NcbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICAgIGlkOiAneWV4dC1hbnN3ZXJzLXRlbXBsYXRlcycsXG4gICAgICAgIG9ubG9hZDogcmVzb2x2ZSxcbiAgICAgICAgb25lcnJvcjogcmVqZWN0LFxuICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgc3JjOiB0aGlzLl90ZW1wbGF0ZVVybFxuICAgICAgfSk7XG5cbiAgICAgIERPTS5hcHBlbmQoJ2JvZHknLCBzY3JpcHQpO1xuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIEltcGxtZW5ldCBlcnJvciBoYW5kbGluZyBoZXJlIChlLmcuIHJlcXVlc3QgY291bGQgZmFpbClcbiAgICAgICAgY29uc29sZS5sb2coJ1RlbXBsYXRlcyBsb2FkZWQgc3VjY2Vzc2Z1bGx5IScpO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXIgdGhlIHRlbXBsYXRlcyBpbnRlcm5hbGx5IHNvIHRoYXQgdGhleSBjYW4gYmUgbGF0ZXIgY29uc3VtZWRcbiAgICogKGUuZy4gYnkgY29tcG9uZW50cyBhbmQgcmVuZGVyZXJzKSB3aXRoIGNvbnZpZW5pZW5jZS5cbiAgICpcbiAgICogYGZldGNoVGVtcGxhdGVzYCB3aWxsIGF1dG9tYXRpY2FsbHkgY2FsbCB0aGlzLCBwcm92aWRpbmcgdGhlIGNvbXBpbGVkIHRlbXBsYXRlcyBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICByZWdpc3RlciAodGVtcGxhdGVzKSB7XG4gICAgdGhpcy5fdGVtcGxhdGVzID0gdGVtcGxhdGVzO1xuXG4gICAgLy8gTm90aWZ5IG91ciBjb25zdW1lcnMgdGhhdCB0aGUgdGVtcGxhdGVzIGFyZSBoZXJlIDopXG4gICAgdGhpcy5fb25Mb2FkZWQodGhpcy5fdGVtcGxhdGVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9uTG9hZGVkIChjYikge1xuICAgIHRoaXMuX29uTG9hZGVkID0gY2I7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgKHRlbXBsYXRlTmFtZSkge1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXNbdGVtcGxhdGVOYW1lXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIFRoZSBpbnRlcm5hbCB0ZW1wbGF0ZSBjb2xsZWN0aW9uXG4gICAqL1xuICBnZXRUZW1wbGF0ZXMgKCkge1xuICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZXM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEVycm9yUmVwb3J0ZXIgKi9cblxuaW1wb3J0IHsgQW5zd2Vyc0Jhc2VFcnJvciB9IGZyb20gJy4vZXJyb3JzJztcblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCB7IExJQl9WRVJTSU9OIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBFcnJvclJlcG9ydGVyIGlzIHVzZWQgZm9yIHJlcG9ydGluZyBlcnJvcnMgdG8gdGhlIHNlcnZlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvclJlcG9ydGVyIHtcbiAgY29uc3RydWN0b3IgKGFwaUtleSwgYW5zd2Vyc0tleSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBhcGlLZXkgdG8gdXNlIGZvciByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuYXBpS2V5ID0gYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFuc3dlcnNLZXkgdG8gdXNlIHdoZW4gcmVwb3J0aW5nXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmFuc3dlcnNLZXkgPSBhbnN3ZXJzS2V5O1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcG9ydCBzZW5kcyBhIG5ldHdvcmsgcmVxdWVzdCB0byB0aGUgc2VydmVyIHRvIGJlIGxvZ2dlZFxuICAgKiBAcGFyYW0ge0Fuc3dlcnNCYXNlRXJyb3J9IFRoZSBlcnJvciB0byBiZSByZXBvcnRlZFxuICAgKi9cbiAgcmVwb3J0IChlcnIpIHtcbiAgICBpZiAoIShlcnIgaW5zdGFuY2VvZiBBbnN3ZXJzQmFzZUVycm9yKSB8fCBlcnIucmVwb3J0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnIucmVwb3J0ZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvZXJyb3JzJyxcbiAgICAgIGFwaUtleTogdGhpcy5hcGlLZXksXG4gICAgICB2ZXJzaW9uOiAyMDE5MDMwMSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnZXJyb3InOiBlcnIudG9Kc29uKCksXG4gICAgICAgICdsaWJWZXJzaW9uJzogTElCX1ZFUlNJT04sXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5hbnN3ZXJzS2V5XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXF1ZXN0LmdldCgpXG4gICAgICAuY2F0Y2goY29uc29sZS5lcnIpO1xuXG4gICAgcmV0dXJuIGVycjtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuaW1wb3J0IENvcmUgZnJvbSAnLi9jb3JlL2NvcmUnO1xuXG5pbXBvcnQge1xuICBUZW1wbGF0ZUxvYWRlcixcbiAgQ09NUE9ORU5UX01BTkFHRVIsXG4gIFJlbmRlcmVycyxcbiAgRE9NXG59IGZyb20gJy4vdWkvaW5kZXgnO1xuXG5pbXBvcnQgRXJyb3JSZXBvcnRlciBmcm9tICcuL2NvcmUvZXJyb3JzL2Vycm9ycmVwb3J0ZXInO1xuaW1wb3J0IHsgQW5hbHl0aWNzUmVwb3J0ZXIgfSBmcm9tICcuL2NvcmUnO1xuXG4vKipcbiAqIFRoZSBtYWluIEFuc3dlcnMgaW50ZXJmYWNlXG4gKi9cbmNsYXNzIEFuc3dlcnMge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgaWYgKCFBbnN3ZXJzLnNldEluc3RhbmNlKHRoaXMpKSB7XG4gICAgICByZXR1cm4gQW5zd2Vycy5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIG9mIHRoZSByZW5kZXJlciB0byB1c2UgZm9yIHRoZSBjb21wb25lbnRzXG4gICAgICogVGhpcyBpcyBwcm92aWRlZCBkdXJpbmcgaW5pdGlhbGl6YXRpb24uXG4gICAgICogQHR5cGUge1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXJzLkhhbmRsZWJhcnMoKTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlclxuICAgICAqIEB0eXBlIHtDb21wb25lbnRNYW5hZ2VyfVxuICAgICAqL1xuICAgIHRoaXMuY29tcG9uZW50cyA9IENPTVBPTkVOVF9NQU5BR0VSO1xuXG4gICAgLyoqXG4gICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiB0byBpbnZva2Ugb25jZSB0aGUgbGlicmFyeSBpcyByZWFkeS5cbiAgICAgKiBUeXBpY2FsbHkgZmlyZWQgYWZ0ZXIgdGVtcGxhdGVzIGFyZSBmZXRjaGVkIGZyb20gc2VydmVyIGZvciByZW5kZXJpbmcuXG4gICAgICovXG4gICAgdGhpcy5fb25SZWFkeSA9IGZ1bmN0aW9uICgpIHt9O1xuICB9XG5cbiAgc3RhdGljIHNldEluc3RhbmNlIChpbnN0YW5jZSkge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gIH1cblxuICBpbml0IChjb25maWcpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMuc2V0Q29yZShuZXcgQ29yZSh7XG4gICAgICBhcGlLZXk6IGNvbmZpZy5hcGlLZXksXG4gICAgICBhbnN3ZXJzS2V5OiBjb25maWcuYW5zd2Vyc0tleSxcbiAgICAgIGxvY2FsZTogY29uZmlnLmxvY2FsZVxuICAgIH0pKVxuICAgICAgLnNldFJlbmRlcmVyKHRoaXMucmVuZGVyZXIpXG4gICAgICAuc2V0QW5hbHl0aWNzUmVwb3J0ZXIobmV3IEFuYWx5dGljc1JlcG9ydGVyKGNvbmZpZy5hcGlLZXksIGNvbmZpZy5hbnN3ZXJzS2V5KSk7XG5cbiAgICB0aGlzLl9vblJlYWR5ID0gY29uZmlnLm9uUmVhZHkgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICBpZiAoY29uZmlnLnVzZVRlbXBsYXRlcyA9PT0gZmFsc2UgfHwgY29uZmlnLnRlbXBsYXRlQnVuZGxlKSB7XG4gICAgICBpZiAoY29uZmlnLnRlbXBsYXRlQnVuZGxlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5pdChjb25maWcudGVtcGxhdGVCdW5kbGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9vblJlYWR5KCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBUZW1wbGF0ZXMgYXJlIGN1cnJlbnRseSBkb3dubG9hZGVkIHNlcGFyYXRlbHkgZnJvbSB0aGUgQ09SRSBhbmQgVUkgYnVuZGxlLlxuICAgIC8vIEZ1dHVyZSBlbmhhbmNlbWVudCBpcyB0byBzaGlwIHRoZSBjb21wb25lbnRzIHdpdGggdGVtcGxhdGVzIGluIGEgc2VwYXJhdGUgYnVuZGxlLlxuICAgIHRoaXMudGVtcGxhdGVzID0gbmV3IFRlbXBsYXRlTG9hZGVyKHtcbiAgICAgIHRlbXBsYXRlVXJsOiBjb25maWcudGVtcGxhdGVVcmxcbiAgICB9KS5vbkxvYWRlZCgodGVtcGxhdGVzKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmluaXQodGVtcGxhdGVzKTtcblxuICAgICAgdGhpcy5fb25SZWFkeSgpO1xuICAgIH0pO1xuXG4gICAgaWYgKCFjb25maWcuc3VwcHJlc3NFcnJvclJlcG9ydHMpIHtcbiAgICAgIHRoaXMuX2Vycm9yUmVwb3J0ZXIgPSBuZXcgRXJyb3JSZXBvcnRlcihjb25maWcuYXBpS2V5LCBjb25maWcuYW5zd2Vyc0tleSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlID0+IHRoaXMuX2Vycm9yUmVwb3J0ZXIucmVwb3J0KGUuZXJyb3IpKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmhhbmRsZWRyZWplY3Rpb24nLCBlID0+IHRoaXMuX2Vycm9yUmVwb3J0ZXIucmVwb3J0KGUuZXJyb3IpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRvbVJlYWR5IChjYikge1xuICAgIERPTS5vblJlYWR5KGNiKTtcbiAgfVxuXG4gIG9uUmVhZHkgKGNiKSB7XG4gICAgdGhpcy5fb25SZWFkeSA9IGNiO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkQ29tcG9uZW50ICh0eXBlLCBvcHRzKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuICAgICAgb3B0cyA9IHtcbiAgICAgICAgY29udGFpbmVyOiBvcHRzXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50cy5jcmVhdGUodHlwZSwgb3B0cykubW91bnQoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNyZWF0ZUNvbXBvbmVudCAob3B0cykge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHMuY3JlYXRlKCdDb21wb25lbnQnLCBvcHRzKS5tb3VudCgpO1xuICB9XG5cbiAgcmVnaXN0ZXJIZWxwZXIgKG5hbWUsIGNiKSB7XG4gICAgdGhpcy5yZW5kZXJlci5yZWdpc3RlckhlbHBlcihuYW1lLCBjYik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuY29uc3QgQU5TV0VSUyA9IG5ldyBBbnN3ZXJzKCk7XG5leHBvcnQgZGVmYXVsdCBBTlNXRVJTO1xuIl0sIm5hbWVzIjpbIk1ldGhvZHMiLCJHRVQiLCJQT1NUIiwiUFVUIiwiREVMRVRFIiwiSHR0cFJlcXVlc3RlciIsInVybCIsImRhdGEiLCJvcHRzIiwicmVxdWVzdCIsImVuY29kZVBhcmFtcyIsIk9iamVjdCIsImFzc2lnbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY3JlZGVudGlhbHMiLCJ1bmRlZmluZWQiLCJtZXRob2QiLCJmZXRjaCIsInBhcmFtcyIsImhhc1BhcmFtIiwiaW5kZXhPZiIsInNlYXJjaFF1ZXJ5Iiwia2V5IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiTElCX1ZFUlNJT04iLCJBUElfQkFTRV9VUkwiLCJDT01QSUxFRF9URU1QTEFURVNfVVJMIiwiQU5BTFlUSUNTX0JBU0VfVVJMIiwiQXBpUmVxdWVzdCIsIl9yZXF1ZXN0ZXIiLCJfYmFzZVVybCIsImJhc2VVcmwiLCJfZW5kcG9pbnQiLCJlbmRwb2ludCIsIl9hcGlLZXkiLCJhcGlLZXkiLCJfdmVyc2lvbiIsInZlcnNpb24iLCJfcGFyYW1zIiwiZ2V0IiwicG9zdCIsImJhc2VQYXJhbXMiLCJ1cmxQYXJhbXMiLCJVUkwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInRvU3RyaW5nIiwic2VhcmNoUGFyYW1zIiwiaGFzIiwia2V5cyIsImZvckVhY2giLCJBbnN3ZXJzQmFzZUVycm9yIiwiZXJyb3JDb2RlIiwibWVzc2FnZSIsImJvdW5kYXJ5IiwiY2F1c2VkQnkiLCJlcnJvck1lc3NhZ2UiLCJyZXBvcnRlZCIsImJ1aWx0aW5FcnJvciIsImVycm9yIiwiQW5zd2Vyc0Jhc2ljRXJyb3IiLCJzdGFjayIsIkVycm9yIiwiQW5zd2Vyc0NvbXBvbmVudEVycm9yIiwiY29tcG9uZW50IiwiQW5zd2Vyc0VuZHBvaW50RXJyb3IiLCJBbnN3ZXJzU3RvcmFnZUVycm9yIiwic3RvcmFnZUtleSIsIkFuc3dlcnNBbmFseXRpY3NFcnJvciIsImV2ZW50IiwiU2VhcmNoQXBpIiwiYW5zd2Vyc0tleSIsIl9hbnN3ZXJzS2V5IiwibG9jYWxlIiwiX2xvY2FsZSIsInF1ZXJ5U3RyaW5nIiwidmVydGljYWxLZXkiLCJmaWx0ZXIiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiQXV0b0NvbXBsZXRlRGF0YSIsInNlY3Rpb25zIiwicXVlcnlJZCIsImZyZWV6ZSIsIm1hcCIsInMiLCJsYWJlbCIsInJlc3VsdHMiLCJyIiwiQXV0b0NvbXBsZXRlUmVzdWx0IiwiaGlnaGxpZ2h0ZWRWYWx1ZSIsImhpZ2hsaWdodCIsIm1hdGNoZWRTdWJzdHJpbmdzIiwidmFsdWUiLCJzaG9ydFZhbHVlIiwidmFsIiwibGVuZ3RoIiwic29ydCIsImEiLCJiIiwib2Zmc2V0IiwibmV4dFN0YXJ0IiwiaiIsInN0YXJ0IiwiTnVtYmVyIiwiZW5kIiwic2xpY2UiLCJqb2luIiwiQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyIiwibW9kdWxlSWQiLCJmcm9tIiwiQXV0b0NvbXBsZXRlQXBpIiwiaW5wdXQiLCJiYXJLZXkiLCJ2ZXJ0aWNhbCIsInVuaXZlcnNhbCIsIlJlc3VsdCIsInJlc3VsdHNEYXRhIiwiaSIsInB1c2giLCJTZWN0aW9uIiwidmVydGljYWxDb25maWdJZCIsInJlc3VsdHNDb3VudCIsImVuY29kZWRTdGF0ZSIsImFwcGxpZWRRdWVyeUZpbHRlcnMiLCJBcHBsaWVkUXVlcnlGaWx0ZXIiLCJmYWNldHMiLCJwYXJzZU1hcCIsInZlcnRpY2FsVVJMIiwibWFwTWFya2VycyIsImNlbnRlckNvb3JkaW5hdGVzIiwicmVzdWx0IiwieWV4dERpc3BsYXlDb29yZGluYXRlIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJpdGVtIiwibW9kdWxlcyIsInVybHMiLCJBcnJheSIsImlzQXJyYXkiLCJhcHBsaWVkUXVlcnlGaWx0ZXIiLCJkaXNwbGF5S2V5IiwiZGlzcGxheVZhbHVlIiwiZmlsdGVycyIsIlVuaXZlcnNhbFJlc3VsdHMiLCJEaXJlY3RBbnN3ZXIiLCJkaXJlY3RBbnN3ZXIiLCJOYXZpZ2F0aW9uIiwidGFiT3JkZXIiLCJuYXYiLCJWZXJ0aWNhbFJlc3VsdHMiLCJOQVZJR0FUSU9OIiwiVU5JVkVSU0FMX1JFU1VMVFMiLCJWRVJUSUNBTF9SRVNVTFRTIiwiQVVUT0NPTVBMRVRFIiwiRElSRUNUX0FOU1dFUiIsIkZJTFRFUiIsIlFVRVJZIiwiU2VhcmNoRGF0YVRyYW5zZm9ybWVyIiwiU3RvcmFnZUtleXMiLCJFdmVudEVtaXR0ZXIiLCJfbGlzdGVuZXJzIiwiZXZ0IiwiY2IiLCJvbmNlIiwib24iLCJsaXN0ZW5lcnMiLCJrZWVwIiwiTW9kdWxlRGF0YSIsImlkIiwiX2lkIiwiX2hpc3RvcnkiLCJfZGF0YSIsInNldCIsIm5ld0RhdGEiLCJjYXB0dXJlUHJldmlvdXMiLCJlbWl0Iiwic2hpZnQiLCJwcmV2aW91cyIsIl9wcmV2aW91cyIsInBhcnNlIiwicG9wIiwiU3RvcmFnZSIsIl9tb2R1bGVEYXRhQ29udGFpbmVyIiwiX2Z1dHVyZUxpc3RlbmVycyIsIl9pbml0RGF0YUNvbnRhaW5lciIsIl9hcHBseUZ1dHVyZUxpc3RlbmVycyIsInJhdyIsImRhdGFLZXkiLCJzdGFydHNXaXRoIiwibW9kdWxlRGF0YSIsIm9mZiIsImZ1dHVyZXMiLCJmdXR1cmUiLCJDb3JlIiwic3RvcmFnZSIsIl9zZWFyY2hlciIsIl9hdXRvQ29tcGxldGUiLCJ2ZXJ0aWNhbFF1ZXJ5IiwidHJhbnNmb3JtVmVydGljYWwiLCJxdWVyeSIsInRyYW5zZm9ybSIsIm5hbWVzcGFjZSIsInF1ZXJ5VW5pdmVyc2FsIiwicXVlcnlWZXJ0aWNhbCIsInF1ZXJ5RmlsdGVyIiwiQ29tcG9uZW50TWFuYWdlciIsInNldEluc3RhbmNlIiwiZ2V0SW5zdGFuY2UiLCJfY29tcG9uZW50UmVnaXN0cnkiLCJfYWN0aXZlQ29tcG9uZW50cyIsIl9jb3JlIiwiX3JlbmRlcmVyIiwiX2FuYWx5dGljc1JlcG9ydGVyIiwicmVuZGVyZXIiLCJjb3JlIiwicmVwb3J0ZXIiLCJjb21wb25lbnRDbGF6eiIsInR5cGUiLCJjb21wb25lbnRUeXBlIiwiYW5hbHl0aWNzUmVwb3J0ZXIiLCJjb21wb25lbnRNYW5hZ2VyIiwiY29tcG9uZW50Q2xhc3MiLCJhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQiLCJzb21lIiwiYyIsIm5hbWUiLCJpbml0Iiwic2V0U3RhdGUiLCJmaW5kIiwiaW5zdGFuY2UiLCJSZW5kZXJlciIsInRlbXBsYXRlIiwiSGFuZGxlYmFyc1JlbmRlcmVyIiwidGVtcGxhdGVzIiwiX2hhbmRsZWJhcnMiLCJfaGIiLCJfdGVtcGxhdGVzIiwiX3JlZ2lzdGVyQ3VzdG9tSGVscGVycyIsInJlZ2lzdGVySGVscGVyIiwiY29tcGlsZSIsImNvbmZpZyIsInRlbXBsYXRlTmFtZSIsImUiLCJhcmcxIiwiYXJnMiIsIm9wdGlvbnMiLCJmbiIsImludmVyc2UiLCJwaG9uZU51bWJlclN0cmluZyIsImNsZWFuZWQiLCJyZXBsYWNlIiwibWF0Y2giLCJpbnRsQ29kZSIsImFyZ3MiLCJhcmd1bWVudHMiLCJyb290IiwidiIsIlJlbmRlcmVycyIsIlNPWSIsIkhhbmRsZWJhcnMiLCJkb2N1bWVudCIsInBhcnNlciIsIkRPTVBhcnNlciIsIkRPTSIsImQiLCJwIiwiaHRtbCIsInBhcnNlRnJvbVN0cmluZyIsInBhcmVudCIsInNlbGVjdG9yIiwiSFRNTEVsZW1lbnQiLCJXaW5kb3ciLCJIVE1MRG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsInJlYWR5U3RhdGUiLCJlbCIsIm9wdHNfZGF0YSIsIm5vZGUiLCJjcmVhdGVFbGVtZW50IiwicHJvcHMiLCJhZGRDbGFzcyIsImluc2VydEFkamFjZW50SFRNTCIsImFwcGVuZENoaWxkIiwiY2xhc3NOYW1lIiwiY2xhc3NlcyIsInNwbGl0IiwibGVuIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwic3R5bGVzIiwicHJvcCIsInN0eWxlIiwiYXR0ciIsInNldEF0dHJpYnV0ZSIsInNldHRpbmdzIiwiRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3R4dCIsInRhcmdldCIsImlzRXF1YWxOb2RlIiwibWF0Y2hlcyIsInBhcmVudE5vZGUiLCJTdGF0ZSIsIl9zdGF0ZSIsIm9wdFZhbCIsIl9zZXQiLCJvcHRQcm9wIiwiQW5hbHl0aWNzRXZlbnQiLCJldmVudFR5cGUiLCJ0b1VwcGVyQ2FzZSIsIkFuYWx5dGljc1JlcG9ydGVyIiwiYnVzaW5lc3NJZFJlcSIsIl9idXNpbmVzc0lkIiwiYnVzaW5lc3NJZCIsImFkZE9wdGlvbnMiLCJ0b0FwaUV2ZW50IiwiY29uc29sZSIsImVyciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiX29wdHMiLCJfdHlwZSIsIl9wYXJlbnQiLCJfY2hpbGRyZW4iLCJzdGF0ZSIsImNvbnRhaW5lciIsIl9jb250YWluZXIiLCJjcmVhdGVFbCIsInN1YnN0cmluZyIsImFwcGVuZCIsIl9jbGFzc05hbWUiLCJfcmVuZGVyIiwicmVuZGVyIiwiX3RlbXBsYXRlIiwiX3RlbXBsYXRlTmFtZSIsIl9pc01vdW50ZWQiLCJ0cmFuc2Zvcm1EYXRhIiwib25DcmVhdGUiLCJvbk1vdW50Iiwib25VcGRhdGUiLCJtb3VudCIsImNoaWxkQ29tcG9uZW50IiwiY3JlYXRlIiwiX3BhcmVudE9wdHMiLCJlbXB0eSIsInVuTW91bnQiLCJiZWZvcmVNb3VudCIsImFzSlNPTiIsIl9vbk1vdW50IiwiZG9tSG9va3MiLCJxdWVyeUFsbCIsIl9jcmVhdGVBbmFseXRpY3NIb29rIiwiYmluZCIsImNoaWxkIiwiYmVmb3JlUmVuZGVyIiwiZG9tQ29tcG9uZW50cyIsIl9jcmVhdGVTdWJjb21wb25lbnQiLCJhZnRlclJlbmRlciIsImRvbUNvbXBvbmVudCIsImRhdGFzZXQiLCJjaGlsZERhdGEiLCJhZGRDaGlsZCIsImNoaWxkSFRNTCIsImV2ZW50dHlwZSIsImV2ZW50bGFiZWwiLCJldmVudG9wdGlvbnMiLCJyZXBvcnQiLCJUYWIiLCJjb25maWdJZCIsImlzRmlyc3QiLCJpc0FjdGl2ZSIsInRhYnNDb25maWciLCJ0YWJzIiwidGFiIiwiTmF2aWdhdGlvbkNvbXBvbmVudCIsIl90YWJzIiwiX3RhYk9yZGVyIiwiZ2V0RGVmYXVsdFRhYk9yZGVyIiwiZ2V0VXJsUGFyYW1zIiwibWVyZ2VUYWJPcmRlciIsImdlbmVyYXRlVGFiVXJsIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwiaW5jbHVkZXMiLCJ1bnNoaWZ0Iiwib3RoZXJUYWJPcmRlciIsInRhYkNvbmZpZyIsIkZpbHRlciIsInJlc3BvbnNlRmlsdGVyIiwiZ3JvdXBzIiwiZ3JvdXBGaWx0ZXJzIiwiZmllbGQiLCJvciIsImFuZCIsIl9mcm9tTWF0Y2hlciIsIm1pbiIsIm1heCIsImdyZWF0ZXJUaGFuRXF1YWwiLCJsZXNzVGhhbkVxdWFsIiwibWF0Y2hlciIsIlNlYXJjaENvbXBvbmVudCIsIl9iYXJLZXkiLCJfdmVydGljYWxLZXkiLCJfZm9ybUVsIiwiZm9ybVNlbGVjdG9yIiwiX2lucHV0RWwiLCJpbnB1dEVsIiwidGl0bGUiLCJzZWFyY2hUZXh0IiwicHJvbXB0SGVhZGVyIiwiYXV0b0ZvY3VzIiwicmVkaXJlY3RVcmwiLCJzZXRRdWVyeSIsImJpbmRCcm93c2VySGlzdG9yeSIsImluaXRTZWFyY2giLCJpbml0QXV0b0NvbXBsZXRlIiwiZm9jdXMiLCJmb3JtIiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImlucHV0U2VsZWN0b3IiLCJvcmlnaW5hbFF1ZXJ5Iiwib25TdWJtaXQiLCJ0cmlnZ2VyIiwiYWxsRmlsdGVycyIsImdldEFsbCIsInRvdGFsRmlsdGVyIiwidmVydGljYWxTZWFyY2giLCJnZXRBY3RpdmVDb21wb25lbnQiLCJnZXRTdGF0ZSIsIkZpbHRlclNlYXJjaENvbXBvbmVudCIsImlucHV0S2V5Iiwic2V0RmlsdGVyIiwiZnJvbVJlc3BvbnNlIiwiaXNGaWx0ZXJTZWFyY2giLCJvcmlnaW5hbEZpbHRlciIsIl9zYXZlUXVlcnlBbmRGaWx0ZXIiLCJLZXlzIiwiQkFDS1NQQUNFIiwiVEFCIiwiRU5URVIiLCJTSElGVCIsIkNUUkwiLCJBTFQiLCJFU0NBUEUiLCJMRUZUIiwiUklHSFQiLCJVUCIsIkRPV04iLCJMRUZUX09TX0tFWSIsIlJJR0hUX09TX0tFWSIsIlNFTEVDVF9LRVkiLCJBdXRvQ29tcGxldGVDb21wb25lbnQiLCJfb3JpZ2luYWxRdWVyeSIsIl9zZWN0aW9uSW5kZXgiLCJfcmVzdWx0SW5kZXgiLCJfb25TdWJtaXQiLCJzZWN0aW9uSW5kZXgiLCJyZXN1bHRJbmRleCIsInF1ZXJ5SW5wdXQiLCJjbG9zZSIsInJlc2V0IiwiYXV0b0NvbXBsZXRlIiwiaGFuZGxlTmF2aWdhdGVSZXN1bHRzIiwia2V5Q29kZSIsImhhbmRsZVN1Ym1pdFJlc3VsdCIsImRlbGVnYXRlIiwidXBkYXRlUXVlcnkiLCJoYW5kbGVUeXBpbmciLCJ1cGRhdGVTdGF0ZSIsIm9wdFZhbHVlIiwicXVlcnlFbCIsImlnbm9yZWRLZXlzIiwiYXV0b0NvbXBsZXRlRmlsdGVyIiwiYXV0b0NvbXBsZXRlVmVydGljYWwiLCJhdXRvQ29tcGxldGVVbml2ZXJzYWwiLCJTVVBQT1JURURfQ09OVFJPTFMiLCJGaWx0ZXJPcHRpb25zQ29tcG9uZW50IiwiY29udHJvbCIsIl9vcHRpb25zIiwibyIsImNoZWNrZWQiLCJfY29udHJvbCIsIl9vcHRpb25TZWxlY3RvciIsIm9wdGlvblNlbGVjdG9yIiwiX3N0b3JlT25DaGFuZ2UiLCJzdG9yZU9uQ2hhbmdlIiwiX29uQ2hhbmdlIiwib25DaGFuZ2UiLCJfdXBkYXRlT3B0aW9uIiwicGFyc2VJbnQiLCJpbmRleCIsIl9idWlsZEZpbHRlciIsImVsZW1lbnRzIiwiX2FwcGx5RmlsdGVyIiwiZXF1YWwiLCJncm91cCIsIkZpbHRlckJveENvbXBvbmVudCIsIl9maWx0ZXJDb25maWdzIiwiX3NlYXJjaE9uQ2hhbmdlIiwic2VhcmNoT25DaGFuZ2UiLCJfYXBwbHlCdXR0b25TZWxlY3RvciIsImFwcGx5QnV0dG9uU2VsZWN0b3IiLCJfZmlsdGVyQ29tcG9uZW50cyIsIl9maWx0ZXJzIiwiZmlsdGVyQ29uZmlncyIsInNob3dBcHBseUJ1dHRvbiIsImYiLCJvbkZpbHRlckNoYW5nZSIsImJ1dHRvbiIsIl9zYXZlRmlsdGVyc1RvU3RvcmFnZSIsIl9zZWFyY2giLCJ2YWxpZEZpbHRlcnMiLCJjb21iaW5lZEZpbHRlciIsIkRpcmVjdEFuc3dlckNvbXBvbmVudCIsImhhc1N0YXRlIiwiUmVzdWx0c0l0ZW1Db21wb25lbnQiLCJMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IiwiRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCIsIlBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IiwiTWFwUHJvdmlkZXIiLCJfaGVpZ2h0IiwiaGVpZ2h0IiwiX3dpZHRoIiwid2lkdGgiLCJfem9vbSIsInpvb20iLCJfbWFwIiwiX2lzTG9hZGVkIiwiX29uTG9hZGVkIiwib25Mb2FkZWQiLCJfcGluQ29uZmlnIiwicGluIiwiREVGQVVMVF9QSU5fQ09ORklHIiwiaXNMb2FkZWQiLCJtYXBEYXRhIiwiaWNvbiIsImFuY2hvciIsInN2ZyIsInNjYWxlZFNpemUiLCJsYWJlbFR5cGUiLCJHb29nbGVNYXBQcm92aWRlciIsIl9jbGllbnRJZCIsImNsaWVudElkIiwiX3NpZ25hdHVyZSIsInNpZ25hdHVyZSIsImhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMiLCJvbkxvYWQiLCJzY3JpcHQiLCJvbmxvYWQiLCJhc3luYyIsInNyYyIsImdlbmVyYXRlQ3JlZGVudGlhbHMiLCJnb29nbGVNYXBNYXJrZXJDb25maWdzIiwiR29vZ2xlTWFwTWFya2VyQ29uZmlnIiwiZW5jb2RlZE1hcmtlcnMiLCJzZXJpYWxpemUiLCJfaXNTdGF0aWMiLCJzZXRUaW1lb3V0IiwiY3NzIiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsImJvdW5kcyIsIkxhdExuZ0JvdW5kcyIsIm1hcmtlciIsIk1hcmtlciIsImV4dGVuZCIsInBvc2l0aW9uIiwiZml0Qm91bmRzIiwibGF0IiwibG5nIiwic2VyaWFsaXplZE1hcmtlcnMiLCJtYXJrZXJzIiwicGluQ29uZmlnIiwicGluQ29uZmlnT2JqIiwiUG9pbnQiLCJ4IiwieSIsIlNpemUiLCJ3IiwiaCIsIk1hcEJveE1hcFByb3ZpZGVyIiwibWFwYm94Z2wiLCJhY2Nlc3NUb2tlbiIsInJlbCIsIm1hcGJveE1hcE1hcmtlckNvbmZpZ3MiLCJNYXBCb3hNYXJrZXJDb25maWciLCJjZW50ZXIiLCJtYXBDZW50ZXIiLCJ3cmFwcGVyIiwiY29vcmRzIiwiTG5nTGF0Iiwic2V0TG5nTGF0IiwiYWRkVG8iLCJzdGF0aWNNYXBQaW4iLCJQcm92aWRlclR5cGVzIiwiTWFwQ29tcG9uZW50IiwiX21hcFByb3ZpZGVyIiwibWFwUHJvdmlkZXIiLCJ0b0xvd2VyQ2FzZSIsImlzU3RhdGljIiwiZ2V0UHJvdmlkZXJJbnN0YW5jZSIsInNldFRlbXBsYXRlIiwiZ2VuZXJhdGVTdGF0aWMiLCJsb2FkSlMiLCJSZXN1bHRUeXBlIiwiRVZFTlQiLCJMT0NBVElPTiIsIlBFT1BMRSIsIlJlc3VsdHNDb21wb25lbnQiLCJsaW1pdCIsIl9pdGVtQ29uZmlnIiwiZ2xvYmFsIiwicmVuZGVySXRlbSIsIml0ZW1UZW1wbGF0ZSIsImNvbmZpZ3VyZUl0ZW0iLCJpbmNsdWRlTWFwIiwibWFwQ29uZmlnIiwic2V0SXRlbVJlbmRlciIsInNldEl0ZW1UZW1wbGF0ZSIsImNsYXp6IiwiZ2V0SXRlbUNvbXBvbmVudCIsImNvbXAiLCJuZXdPcHRzIiwiZ2xvYmFsQ29uZmlnIiwiaXRlbUNvbmZpZyIsImhhc0dsb2JhbFJlbmRlciIsImhhc0dsb2JhbFRlbXBsYXRlIiwic2V0UmVuZGVyIiwiVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudCIsIl9saW1pdCIsImdldENoaWxkQ29uZmlnIiwiUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IiwiX2VtYWlsTGFiZWwiLCJlbWFpbExhYmVsIiwiX25hbWVMYWJlbCIsIm5hbWVMYWJlbCIsIl9xdWVzdGlvbkxhYmVsIiwicXVlc3Rpb25MYWJlbCIsIl9wcml2YWN5UG9saWN5TGFiZWwiLCJwcml2YWN5UG9saWN5TGFiZWwiLCJfYnV0dG9uTGFiZWwiLCJidXR0b25MYWJlbCIsImluaXRTdWJtaXQiLCJoYXNRdWVyaWVkIiwicXVlc3Rpb24iLCJDT01QT05FTlRfTUFOQUdFUiIsInJlZ2lzdGVyIiwiVGVtcGxhdGVMb2FkZXIiLCJfdGVtcGxhdGVVcmwiLCJ0ZW1wbGF0ZVVybCIsIl9pbml0IiwiZmV0Y2hUZW1wbGF0ZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uZXJyb3IiLCJsb2ciLCJFcnJvclJlcG9ydGVyIiwidG9Kc29uIiwiQW5zd2VycyIsImNvbXBvbmVudHMiLCJfb25SZWFkeSIsInNldENvcmUiLCJzZXRSZW5kZXJlciIsInNldEFuYWx5dGljc1JlcG9ydGVyIiwib25SZWFkeSIsInVzZVRlbXBsYXRlcyIsInRlbXBsYXRlQnVuZGxlIiwic3VwcHJlc3NFcnJvclJlcG9ydHMiLCJfZXJyb3JSZXBvcnRlciIsIkFOU1dFUlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBOztFQUVBOztFQUVBOzs7RUFHQSxJQUFNQSxPQUFPLEdBQUc7RUFDZEMsRUFBQUEsR0FBRyxFQUFFLEtBRFM7RUFFZEMsRUFBQUEsSUFBSSxFQUFFLE1BRlE7RUFHZEMsRUFBQUEsR0FBRyxFQUFFLEtBSFM7RUFJZEMsRUFBQUEsTUFBTSxFQUFFO0VBSk0sQ0FBaEI7RUFPQTs7Ozs7O01BS3FCQzs7Ozs7Ozs7OztFQUNuQjs7Ozs7OzBCQU1LQyxLQUFLQyxNQUFNQyxNQUFNO0VBQ3BCLGFBQU8sS0FBS0MsT0FBTCxDQUFhVCxPQUFPLENBQUNDLEdBQXJCLEVBQTBCLEtBQUtTLFlBQUwsQ0FBa0JKLEdBQWxCLEVBQXVCQyxJQUF2QixDQUExQixFQUF3REMsSUFBeEQsQ0FBUDtFQUNEO0VBRUQ7Ozs7Ozs7OzsyQkFNTUYsS0FBS0MsTUFBTUMsTUFBTTtFQUNy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