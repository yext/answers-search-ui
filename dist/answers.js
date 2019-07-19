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
  var LIB_VERSION = 'v0.5.2';
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

        return {};
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
        request.post().catch(console.err);
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
      value: function render(data) {
        var _this2 = this;

        this.beforeRender();
        data = this.transformData(data) || this.transformData(this._state.get());
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
          var marker = new mapboxgl.Marker(wrapper).setLngtLat(coords);
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
          serializedMarkers.push("pin-s-".concat(marker.label, "(").concat(marker.position.longitude, ",").concat(marker.position.latitude, ")"));
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
          mapboxMapMarkerConfigs.push(new MapBoxMarkerConfig({
            map: map,
            position: {
              latitude: marker.latitude,
              longitude: marker.longitude
            },
            wrapper: wrapper
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2Vycy11bWQuanMiLCJzb3VyY2VzIjpbInNyYy9jb3JlL2h0dHAvaHR0cHJlcXVlc3Rlci5qcyIsInNyYy9jb3JlL2NvbnN0YW50cy5qcyIsInNyYy9jb3JlL2h0dHAvYXBpcmVxdWVzdC5qcyIsInNyYy9jb3JlL2Vycm9ycy9lcnJvcnMuanMiLCJzcmMvY29yZS9zZWFyY2gvc2VhcmNoYXBpLmpzIiwic3JjL2NvcmUvbW9kZWxzL2F1dG9jb21wbGV0ZWRhdGEuanMiLCJzcmMvY29yZS9zZWFyY2gvYXV0b2NvbXBsZXRlZGF0YXRyYW5zZm9ybWVyLmpzIiwic3JjL2NvcmUvc2VhcmNoL2F1dG9jb21wbGV0ZWFwaS5qcyIsInNyYy9jb3JlL21vZGVscy9yZXN1bHQuanMiLCJzcmMvY29yZS9tb2RlbHMvc2VjdGlvbi5qcyIsInNyYy9jb3JlL21vZGVscy91bml2ZXJzYWxyZXN1bHRzLmpzIiwic3JjL2NvcmUvbW9kZWxzL2RpcmVjdGFuc3dlci5qcyIsInNyYy9jb3JlL21vZGVscy9uYXZpZ2F0aW9uLmpzIiwic3JjL2NvcmUvbW9kZWxzL3ZlcnRpY2FscmVzdWx0cy5qcyIsInNyYy9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMuanMiLCJzcmMvY29yZS9zZWFyY2gvc2VhcmNoZGF0YXRyYW5zZm9ybWVyLmpzIiwic3JjL2NvcmUvZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlci5qcyIsInNyYy9jb3JlL3N0b3JhZ2UvbW9kdWxlZGF0YS5qcyIsInNyYy9jb3JlL3N0b3JhZ2Uvc3RvcmFnZS5qcyIsInNyYy9jb3JlL2NvcmUuanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnRtYW5hZ2VyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9yZW5kZXJlci5qcyIsInNyYy91aS9yZW5kZXJpbmcvaGFuZGxlYmFyc3JlbmRlcmVyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9jb25zdC5qcyIsInNyYy91aS9kb20vZG9tLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc3RhdGUuanMiLCJzcmMvY29yZS9hbmFseXRpY3MvYW5hbHl0aWNzZXZlbnQuanMiLCJzcmMvY29yZS9hbmFseXRpY3MvYW5hbHl0aWNzcmVwb3J0ZXIuanMiLCJzcmMvY29yZS9pbmRleC5qcyIsInNyYy91aS9jb21wb25lbnRzL2NvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbmNvbXBvbmVudC5qcyIsInNyYy9jb3JlL21vZGVscy9maWx0ZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL2ZpbHRlcnNlYXJjaGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3NlYXJjaC9hdXRvY29tcGxldGVjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcm9wdGlvbnNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcmJveGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvZGlyZWN0YW5zd2VyY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvbG9jYXRpb25yZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvZXZlbnRyZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvcGVvcGxlcmVzdWx0c2l0ZW1jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvcHJvdmlkZXJzL21hcHByb3ZpZGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL3Byb3ZpZGVycy9nb29nbGVtYXBwcm92aWRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9wcm92aWRlcnMvbWFwYm94bWFwcHJvdmlkZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvbWFwY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHRzY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy91bml2ZXJzYWxyZXN1bHRzY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcXVlc3Rpb25zL3F1ZXN0aW9uc3VibWlzc2lvbmNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL2NvbnN0LmpzIiwic3JjL3VpL3JlbmRlcmluZy90ZW1wbGF0ZWxvYWRlci5qcyIsInNyYy91aS9pbmRleC5qcyIsInNyYy9jb3JlL2Vycm9ycy9lcnJvcnJlcG9ydGVyLmpzIiwic3JjL2Fuc3dlcnMtdW1kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAbW9kdWxlIEh0dHBSZXF1ZXN0ZXIgKi9cblxuLyogZ2xvYmFsIGZldGNoICovXG5cbi8qKlxuICogVHlwZXMgb2YgSFRUUCByZXF1ZXN0c1xuICovXG5jb25zdCBNZXRob2RzID0ge1xuICBHRVQ6ICdnZXQnLFxuICBQT1NUOiAncG9zdCcsXG4gIFBVVDogJ3B1dCcsXG4gIERFTEVURTogJ2RlbGV0ZSdcbn07XG5cbi8qKlxuICogSHR0cFJlcXVlc3RlciBpcyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb24gb2YgQUpBWFxuICogcmVsYXRlZCBtYXR0ZXJzLiBJdCdzIHVzZWQgdG8gbWFrZSBhbGwgdHlwZXMgb2YgbmV0d29yayByZXF1ZXN0c1xuICogYW5kIGV4cG9zZXMgYSBwcm9taXNlIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHR0cFJlcXVlc3RlciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBHRVQgSFRUUCByZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBwcm92aWRlIChnZXRzIGVuY29kZWQgaW50byB0aGUgVVJMKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBDb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgKi9cbiAgZ2V0ICh1cmwsIGRhdGEsIG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KE1ldGhvZHMuR0VULCB0aGlzLmVuY29kZVBhcmFtcyh1cmwsIGRhdGEpLCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBQT1NUIEhUVFAgcmVxdWVzdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gcHJvdmlkZSAoZ2V0cyBlbmNvZGVkIGludG8gdGhlIFVSTClcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgQ29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICovXG4gIHBvc3QgKHVybCwgZGF0YSwgb3B0cykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXG4gICAgICBNZXRob2RzLlBPU1QsXG4gICAgICB1cmwsXG4gICAgICBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIGNyZWRlbnRpYWxzOiB1bmRlZmluZWRcbiAgICAgIH0sIG9wdHMpXG4gICAgKTtcbiAgfVxuXG4gIHJlcXVlc3QgKG1ldGhvZCwgdXJsLCBvcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICBtZXRob2QsXG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgfSwgb3B0cykpO1xuICB9XG5cbiAgZW5jb2RlUGFyYW1zICh1cmwsIHBhcmFtcykge1xuICAgIGxldCBoYXNQYXJhbSA9IHVybC5pbmRleE9mKCc/JykgPiAtMTtcblxuICAgIGxldCBzZWFyY2hRdWVyeSA9ICcnO1xuICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgIGlmICghaGFzUGFyYW0pIHtcbiAgICAgICAgaGFzUGFyYW0gPSB0cnVlO1xuICAgICAgICBzZWFyY2hRdWVyeSArPSAnPyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWFyY2hRdWVyeSArPSAnJic7XG4gICAgICB9XG5cbiAgICAgIHNlYXJjaFF1ZXJ5ICs9IGtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiB1cmwgKyBzZWFyY2hRdWVyeTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuLyoqIFRoZSBjdXJyZW50IGxpYiB2ZXJzaW9uLCByZXBvcnRlZCB3aXRoIGVycm9ycyBhbmQgYW5hbHl0aWNzICovXG5leHBvcnQgY29uc3QgTElCX1ZFUlNJT04gPSAndjAuNS4yJztcblxuLyoqIFRoZSBiYXNlIHVybCBmb3IgdGhlIGFwaSBiYWNrZW5kICovXG5leHBvcnQgY29uc3QgQVBJX0JBU0VfVVJMID0gJ2h0dHBzOi8vbGl2ZWFwaS55ZXh0LmNvbSc7XG5cbi8qKiBUaGUgZGVmYXVsdCB1cmwgZm9yIGNvbXBpbGVkIGNvbXBvbmVudCB0ZW1wbGF0ZXMgKi9cbmV4cG9ydCBjb25zdCBDT01QSUxFRF9URU1QTEFURVNfVVJMID0gJ2h0dHBzOi8vYXNzZXRzLnNpdGVzY2RuLm5ldC9hbnN3ZXJzL2Fuc3dlcnN0ZW1wbGF0ZXMuY29tcGlsZWQubWluLmpzJztcblxuLyoqIFRoZSBiYXNlIHVybCBmb3IgdGhlIGFuYWx5dGljcyBiYWNrZW5kICAqL1xuZXhwb3J0IGNvbnN0IEFOQUxZVElDU19CQVNFX1VSTCA9ICdodHRwczovL3JlYWx0aW1lYW5hbHl0aWNzLnlleHQuY29tJztcbiIsIi8qKiBAbW9kdWxlIEFwaVJlcXVlc3QgKi9cblxuaW1wb3J0IEh0dHBSZXF1ZXN0ZXIgZnJvbSAnLi9odHRwcmVxdWVzdGVyJztcbmltcG9ydCB7IEFQSV9CQVNFX1VSTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQXBpUmVxdWVzdCBpcyB0aGUgYmFzZSBjbGFzcyBmb3IgYWxsIEFQSSByZXF1ZXN0cy5cbiAqIEl0IGRlZmluZXMgYWxsIG9mIHRoZSBjb3JlIHByb3BlcnRpZXMgcmVxdWlyZWQgdG8gbWFrZSBhIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpUmVxdWVzdCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiB1c2VkIGZvciBtYWtpbmcgbmV0d29yayByZXF1ZXN0IGFuZCBoYW5kbGluZyBlcnJvcnNcbiAgICAgKiBAdHlwZSB7SHR0cFJlcXVlc3Rlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3JlcXVlc3RlciA9IG5ldyBIdHRwUmVxdWVzdGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYmFzZVVybCB0byB1c2UgZm9yIG1ha2luZyBhIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYmFzZVVybCA9IG9wdHMuYmFzZVVybCB8fCBBUElfQkFTRV9VUkw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZW5kcG9pbnQgdG8gdXNlIGluIHRoZSB1cmwgKGFwcGVuZGVkIHRvIHRoZSB7YmFzZVVybH0pXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2VuZHBvaW50ID0gb3B0cy5lbmRwb2ludCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnNpb24gb2YgdGhlIEFQSSB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJzaW9uID0gb3B0cy52ZXJzaW9uIHx8IDIwMTkwMTAxO1xuXG4gICAgLyoqXG4gICAgICogQWRkaXRpb25hbCBkYXRhIHBhcmFtcyB0aGF0IGFyZSBzZW50IGFsb25nIHdpdGggdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcGFyYW1zID0gb3B0cy5wYXJhbXMgfHwge307XG4gIH1cblxuICAvKipcbiAgICogZ2V0IGNyZWF0ZXMgYSBuZXcgYEdFVGAgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSByZXF1ZXN0IGNsYXNzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZ2V0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdGVyLmdldCh0aGlzLl9iYXNlVXJsICsgdGhpcy5fZW5kcG9pbnQsIHRoaXMucGFyYW1zKHRoaXMuX3BhcmFtcykpO1xuICB9XG5cbiAgcG9zdCAob3B0cykge1xuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0ZXIucG9zdCh0aGlzLl9iYXNlVXJsICsgdGhpcy5fZW5kcG9pbnQsIHRoaXMucGFyYW1zKHRoaXMuX3BhcmFtcyksIG9wdHMpO1xuICB9XG5cbiAgcGFyYW1zIChwYXJhbXMpIHtcbiAgICB2YXIgYmFzZVBhcmFtcyA9IHtcbiAgICAgICd2JzogdGhpcy5fdmVyc2lvbixcbiAgICAgICdhcGlfa2V5JzogdGhpcy5fYXBpS2V5XG4gICAgfTtcblxuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKCkpLnNlYXJjaFBhcmFtcztcblxuICAgIGlmICh1cmxQYXJhbXMuaGFzKCdiZXRhJykpIHtcbiAgICAgIGJhc2VQYXJhbXNbJ2JldGEnXSA9IHVybFBhcmFtcy5nZXQoJ2JldGEnKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYW55IHBhcmFtYXRlcnMgd2hvcyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC5cbiAgICAvL1xuICAgIC8vIE5PVEUoYmlsbHkpIFByb2JhYmx5IGJldHRlciB0byBiZSBleHBsaWNpdCBhYm91dCBob3cgdG8gaGFuZGxlIHRoaXMgYXQgdGhlIHJlcXVlc3QgYnVpbGRpbmcgbGV2ZWwsXG4gICAgLy8gYnV0IEkgY2FuJ3Qgc2VlIGFueSBjYXNlcyB3aGVyZSB3ZSdkIGV2ZXIgd2FudCB0byBzZW5kICd1bmRlZmluZWQnIGFzIGEgdmFsdWUgdG8gdGhlIHNlcnZlci5cbiAgICAvLyBTbyBpdCdzIHByb2JhYmx5IGZpbmUgdG8gJ2NsZWFuJyB0aGUgcGFyYW1zIG9iamVjdCBoZXJlXG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAocGFyYW1zW2tleV0gPT09IHVuZGVmaW5lZCB8fCBwYXJhbXNba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgcGFyYW1zW2tleV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihiYXNlUGFyYW1zLCBwYXJhbXMgfHwge30pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBFcnJvcnMgKi9cblxuLyoqXG4gKiBBbnN3ZXJzQmFzZUVycm9yIGlzIGFuIGV4dGVuc2lvbiBvZiB0aGUgYmFzZSBFcnJvciBvYmplY3QuXG4gKiBUaGlzIGlzIHRoZSBvYmplY3QgdGhhdCBpcyB1c2VkIHRvIHdoZW4gcmVwb3J0aW5nIHRvIHRoZSBzZXJ2ZXIuXG4gKiBAZXh0ZW5kcyBFcnJvclxuICpcbiAqIEVycm9yIGNvZGVzIGZhbGwgaW50byBvbmUgb2YgZm91ciBjYXRlZ29yaWVzOlxuICogMVhYIGVycm9yczogQmFzaWMgZXJyb3JzXG4gKiAyWFggZXJyb3JzOiBVSSBlcnJvcnNcbiAqIDNYWCBlcnJvcnM6IEVuZHBvaW50IGVycm9yc1xuICogNFhYIGVycm9yczogQ29yZSBlcnJvcnNcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNCYXNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChlcnJvckNvZGUsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMuZXJyb3JDb2RlID0gZXJyb3JDb2RlO1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLmJvdW5kYXJ5ID0gYm91bmRhcnk7XG4gICAgdGhpcy5jYXVzZWRCeSA9IGNhdXNlZEJ5O1xuICAgIHRoaXMucmVwb3J0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHRvSnNvbiAoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKGJ1aWx0aW5FcnJvciwgYm91bmRhcnkpIHtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcihidWlsdGluRXJyb3IubWVzc2FnZSwgYm91bmRhcnkpO1xuICAgIGVycm9yLnN0YWNrID0gYnVpbHRpbkVycm9yLnN0YWNrO1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNCYXNpY0Vycm9yIGlzIGEgd3JhcHBlciBhcm91bmQgYWxsIHRoZSBidWlsdC1pbiBlcnJvcnNcbiAqIGUuZy4gdW5kZWZpbmVkIHZhcmlhYmxlcywgaW5jb3JyZWN0IHN5bnRheCwgdHlwZXMsIG1pc3NpbmcgbWV0aG9kcywgZXRjLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0Jhc2ljRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDEwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNVaUVycm9yIHVzZWQgZm9yIHRoaW5ncyBsaWtlIERPTSBlcnJvcnMuXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzVWlFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoMjAwLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc0NvbXBvbmVudEVycm9yIGlzIHVzZWQgZm9yIENvbXBvbmVudCBvcmllbnRlZCBlcnJvcnNcbiAqIGUuZy4gZmFpbHVyZSB0byByZW5kZXIsIG9yIGNhdGNoaW5nIHVua25vd25zLlxuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0NvbXBvbmVudEVycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBjb21wb25lbnQsIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoMjAxLCBtZXNzYWdlLCBjb21wb25lbnQsIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEFuc3dlcnNFbmRwb2ludEVycm9yIHJlcHJlc2VudHMgYWxsIG5ldHdvcmsgcmVsYXRlZCBlcnJvcnMuXG4gKiBAZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXJzRW5kcG9pbnRFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoMzAwLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpO1xuICB9XG59XG5cbi8qKlxuICogQW5zd2Vyc0NvcmVFcnJvciByZXByZXNlbnRzIGVycm9ycyBmb3IgcHJlY29uZGl0aW9uIGZhaWx1cmVzIGluIHRoZSBjb3JlIGxpYnJhcnlcbiAqIEBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3JcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNDb3JlRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDQwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuLyoqXG4gKiBBbnN3ZXJzU3RvcmFnZUVycm9yIHJlcHJlc2VudHMgc3RvcmFnZSByZWxhdGVkIGVycm9yc1xuICogQGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvclxuICovXG5leHBvcnQgY2xhc3MgQW5zd2Vyc1N0b3JhZ2VFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgc3RvcmFnZUtleSwgZGF0YSwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcig0MDEsIG1lc3NhZ2UsICdTdG9yYWdlJywgY2F1c2VkQnkpO1xuICAgIHRoaXMuc3RvcmFnZUtleSA9IHN0b3JhZ2VLZXk7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0FuYWx5dGljc0Vycm9yIGV4dGVuZHMgQW5zd2Vyc0Jhc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChtZXNzYWdlLCBldmVudCwgY2F1c2VkQnkpIHtcbiAgICBzdXBlcig0MDIsIG1lc3NhZ2UsICdBbmFseXRpY3MnLCBjYXVzZWRCeSk7XG4gICAgdGhpcy5ldmVudCA9IGV2ZW50O1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTZWFyY2hBcGkgKi9cblxuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcbmltcG9ydCB7IEFuc3dlcnNCYXNpY0Vycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogU2VhcmNoQXBpIGlzIHRoZSBBUEkgZm9yIGRvaW5nIHZhcmlvdXMgdHlwZXMgb2Ygc2VhcmNoXG4gKiBvdmVyIHRoZSBuZXR3b3JrIChlLmcuIHZlcnRpY2FsIG9yIHVuaXZlcnNhbClcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQXBpIHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaWYgKCFvcHRzLmFwaUtleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBcGkgS2V5IGlzIHJlcXVpcmVkJywgJ1NlYXJjaCcpO1xuICAgIH1cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBBbnN3ZXJzIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghb3B0cy5hbnN3ZXJzS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0Fuc3dlcnMgS2V5IGlzIHJlcXVpcmVkJywgJ1NlYXJjaCcpO1xuICAgIH1cbiAgICB0aGlzLl9hbnN3ZXJzS2V5ID0gb3B0cy5hbnN3ZXJzS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnNpb24gb2YgdGhlIEFQSSB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJzaW9uID0gb3B0cy52ZXJzaW9uIHx8IDIwMTkwMTAxIHx8IDIwMTkwMzAxO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGxvY2FsZSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghb3B0cy5sb2NhbGUpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignTG9jYWxlIGlzIHJlcXVpcmVkJywgJ1NlYXJjaCcpO1xuICAgIH1cbiAgICB0aGlzLl9sb2NhbGUgPSBvcHRzLmxvY2FsZTtcbiAgfVxuXG4gIHZlcnRpY2FsUXVlcnkgKHF1ZXJ5U3RyaW5nLCB2ZXJ0aWNhbEtleSwgZmlsdGVyKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL3ZlcnRpY2FsL3F1ZXJ5JyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBxdWVyeVN0cmluZyxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgICAnZmlsdGVycyc6IGZpbHRlcixcbiAgICAgICAgJ3ZlcnRpY2FsS2V5JzogdmVydGljYWxLZXksXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9XG5cbiAgcXVlcnkgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL3F1ZXJ5JyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBxdWVyeVN0cmluZyxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlRGF0YSAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVEYXRhIHtcbiAgY29uc3RydWN0b3IgKGRhdGEgPSB7fSkge1xuICAgIHRoaXMuc2VjdGlvbnMgPSBkYXRhLnNlY3Rpb25zIHx8IFtdO1xuICAgIHRoaXMucXVlcnlJZCA9IGRhdGEucXVlcnlJZCB8fCAnJztcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlKSB7XG4gICAgbGV0IHNlY3Rpb25zO1xuICAgIGlmIChyZXNwb25zZS5zZWN0aW9ucykge1xuICAgICAgc2VjdGlvbnMgPSByZXNwb25zZS5zZWN0aW9ucy5tYXAocyA9PiAoe1xuICAgICAgICBsYWJlbDogcy5sYWJlbCxcbiAgICAgICAgcmVzdWx0czogcy5yZXN1bHRzLm1hcChyID0+IG5ldyBBdXRvQ29tcGxldGVSZXN1bHQocikpXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlY3Rpb25zID0gW3sgcmVzdWx0czogcmVzcG9uc2UucmVzdWx0cy5tYXAociA9PiBuZXcgQXV0b0NvbXBsZXRlUmVzdWx0KHIpKSB9XTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBBdXRvQ29tcGxldGVEYXRhKHsgc2VjdGlvbnMsIHF1ZXJ5SWQ6IHJlc3BvbnNlLnF1ZXJ5SWQgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dG9Db21wbGV0ZVJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICB0aGlzLmZpbHRlciA9IGRhdGEuZmlsdGVyIHx8IHt9O1xuICAgIHRoaXMuaGlnaGxpZ2h0ZWRWYWx1ZSA9IHRoaXMuaGlnaGxpZ2h0KGRhdGEpO1xuICAgIHRoaXMua2V5ID0gZGF0YS5rZXkgfHwgJyc7XG4gICAgdGhpcy5tYXRjaGVkU3Vic3RyaW5ncyA9IGRhdGEubWF0Y2hlZFN1YnN0cmluZ3MgfHwgW107XG4gICAgdGhpcy52YWx1ZSA9IGRhdGEudmFsdWUgfHwgJyc7XG4gICAgdGhpcy5zaG9ydFZhbHVlID0gZGF0YS5zaG9ydFZhbHVlIHx8IHRoaXMudmFsdWU7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxuXG4gIC8vIFRPRE8oamRlbGVybWUpOiBjb25zb2xpZGF0ZSB3aXRoIG90aGVyIGhpZ2hsaWdodCBmdW5jdGlvbnNcbiAgaGlnaGxpZ2h0IChkYXRhKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgc2hvcnRWYWx1ZSwgbWF0Y2hlZFN1YnN0cmluZ3MgfSA9IGRhdGE7XG4gICAgY29uc3QgdmFsID0gdmFsdWUgfHwgc2hvcnRWYWx1ZTtcblxuICAgIGlmICghbWF0Y2hlZFN1YnN0cmluZ3MgfHwgbWF0Y2hlZFN1YnN0cmluZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSBvdXIgaGlnaGxpZ2h0ZWQgc3Vic3RyaW5ncyBhcmUgc29ydGVkXG4gICAgbWF0Y2hlZFN1YnN0cmluZ3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGEub2Zmc2V0IDwgYi5vZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuXG4gICAgICBpZiAoYS5vZmZzZXQgPiBiLm9mZnNldCkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgICAvLyBCdWlsZCBvdXIgbmV3IHZhbHVlIGJhc2VkIG9uIHRoZSBoaWdobGlnaHRzXG4gICAgbGV0IGhpZ2hsaWdodGVkVmFsdWUgPSAnJztcbiAgICBsZXQgbmV4dFN0YXJ0ID0gMDtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWF0Y2hlZFN1YnN0cmluZ3MubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBzdGFydCA9IE51bWJlcihtYXRjaGVkU3Vic3RyaW5nc1tqXS5vZmZzZXQpO1xuICAgICAgbGV0IGVuZCA9IHN0YXJ0ICsgbWF0Y2hlZFN1YnN0cmluZ3Nbal0ubGVuZ3RoO1xuXG4gICAgICBoaWdobGlnaHRlZFZhbHVlICs9IFt2YWwuc2xpY2UobmV4dFN0YXJ0LCBzdGFydCksICc8c3Ryb25nPicsIHZhbC5zbGljZShzdGFydCwgZW5kKSwgJzwvc3Ryb25nPiddLmpvaW4oJycpO1xuXG4gICAgICBpZiAoaiA9PT0gbWF0Y2hlZFN1YnN0cmluZ3MubGVuZ3RoIC0gMSAmJiBlbmQgPCB2YWwubGVuZ3RoKSB7XG4gICAgICAgIGhpZ2hsaWdodGVkVmFsdWUgKz0gdmFsLnNsaWNlKGVuZCk7XG4gICAgICB9XG5cbiAgICAgIG5leHRTdGFydCA9IGVuZDtcbiAgICB9XG5cbiAgICByZXR1cm4gaGlnaGxpZ2h0ZWRWYWx1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyICovXG5cbmltcG9ydCBBdXRvQ29tcGxldGVEYXRhIGZyb20gJy4uL21vZGVscy9hdXRvY29tcGxldGVkYXRhJztcblxuLyoqXG4gKiBBIERhdGEgVHJhbnNmb3JtZXIgdGhhdCB0YWtlcyB0aGUgcmVzcG9uc2Ugb2JqZWN0IGZyb20gYSBBdXRvQ29tcGxldGUgcmVxdWVzdFxuICogQW5kIHRyYW5zZm9ybXMgaW4gdG8gYSBmcm9udC1lbmQgb3JpZW50ZWQgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBvdXJcbiAqIGNvbXBvbmVudCBsaWJyYXJ5IGFuZCBjb3JlIHN0b3JhZ2UgdW5kZXJzdGFuZC5cbiAqXG4gKiBUT0RPKGJpbGx5KSBDcmVhdGUgb3VyIG93biBmcm9udC1lbmQgZGF0YSBtb2RlbHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyIHtcbiAgc3RhdGljIGNsZWFuIChtb2R1bGVJZCwgZGF0YSkge1xuICAgIGlmIChkYXRhLnNlY3Rpb25zICYmIGRhdGEuc2VjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgZGF0YS5zZWN0aW9ucztcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5zZWN0aW9ucyAmJiBkYXRhLnNlY3Rpb25zLmxlbmd0aCA9PT0gMSAmJiBkYXRhLnNlY3Rpb25zWzBdLnJlc3VsdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgZGF0YS5zZWN0aW9ucztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgW21vZHVsZUlkXTogZGF0YVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgdW5pdmVyc2FsIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhLmZyb20ocmVzcG9uc2UpO1xuICB9XG5cbiAgc3RhdGljIGZpbHRlciAocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gQXV0b0NvbXBsZXRlRGF0YS5mcm9tKHJlc3BvbnNlKTtcbiAgfVxuXG4gIHN0YXRpYyB2ZXJ0aWNhbCAocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gQXV0b0NvbXBsZXRlRGF0YS5mcm9tKHJlc3BvbnNlKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlQXBpICovXG5cbmltcG9ydCBBcGlSZXF1ZXN0IGZyb20gJy4uL2h0dHAvYXBpcmVxdWVzdCc7XG5pbXBvcnQgQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyIGZyb20gJy4vYXV0b2NvbXBsZXRlZGF0YXRyYW5zZm9ybWVyJztcbmltcG9ydCB7IEFuc3dlcnNCYXNpY0Vycm9yLCBBbnN3ZXJzRW5kcG9pbnRFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvcnMnO1xuXG4vKipcbiAqIEF1dG9Db21wbGV0ZUFwaSBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgbmV0d29yayByZWxhdGVkIG1hdHRlcnNcbiAqIGZvciBhbGwgdGhlIGF1dG9jb21wbGV0ZSBlbmRwb2ludHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Db21wbGV0ZUFwaSB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBUaGUgQVBJIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlmICghb3B0cy5hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcignQXBpIEtleSBpcyByZXF1aXJlZCcsICdBdXRvQ29tcGxldGUnKTtcbiAgICB9XG4gICAgdGhpcy5fYXBpS2V5ID0gb3B0cy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgQW5zd2VycyBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIW9wdHMuYW5zd2Vyc0tleSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNCYXNpY0Vycm9yKCdBbnN3ZXJzIEtleSBpcyByZXF1aXJlZCcsICdBdXRvQ29tcGxldGUnKTtcbiAgICB9XG4gICAgdGhpcy5fYW5zd2Vyc0tleSA9IG9wdHMuYW5zd2Vyc0tleTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBBUEkgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVyc2lvbiA9IG9wdHMudmVyc2lvbiB8fCAyMDE5MDEwMSB8fCAyMDE5MDMwMTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsb2NhbGUgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpZiAoIW9wdHMubG9jYWxlKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0Jhc2ljRXJyb3IoJ0xvY2FsZSBpcyByZXF1aXJlZCcsICdBdXRvQ29tcGxldGUnKTtcbiAgICB9XG4gICAgdGhpcy5fbG9jYWxlID0gb3B0cy5sb2NhbGU7XG4gIH1cblxuICAvKipcbiAgICogQXV0b2NvbXBsZXRlIGZpbHRlcnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0IFRoZSBpbnB1dCB0byB1c2UgZm9yIGF1dG8gY29tcGxldGVcbiAgICovXG4gIHF1ZXJ5RmlsdGVyIChpbnB1dCwgdmVydGljYWxLZXksIGJhcktleSkge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9maWx0ZXJzZWFyY2gnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IGlucHV0LFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICAgICdleHBlcmllbmNlS2V5JzogdmVydGljYWxLZXksXG4gICAgICAgICdpbnB1dEtleSc6IGJhcktleSxcbiAgICAgICAgJ2xvY2FsZSc6IHRoaXMuX2xvY2FsZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lci5maWx0ZXIocmVzcG9uc2UucmVzcG9uc2UsIGJhcktleSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgQW5zd2Vyc0VuZHBvaW50RXJyb3IoJ0ZpbHRlciBzZWFyY2ggcmVxdWVzdCBmYWlsZWQnLCAnQXV0b0NvbXBsZXRlJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICBxdWVyeVZlcnRpY2FsIChpbnB1dCwgdmVydGljYWxLZXksIGJhcktleSkge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9hdXRvY29tcGxldGUnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IGlucHV0LFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICAgICdleHBlcmllbmNlS2V5JzogdmVydGljYWxLZXksXG4gICAgICAgICdiYXJLZXknOiBiYXJLZXksXG4gICAgICAgICdsb2NhbGUnOiB0aGlzLl9sb2NhbGVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIudmVydGljYWwocmVzcG9uc2UucmVzcG9uc2UsIHJlcXVlc3QuX3BhcmFtcy5iYXJLZXkpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IEFuc3dlcnNFbmRwb2ludEVycm9yKCdWZXJ0aWNhbCBzZWFyY2ggcmVxdWVzdCBmYWlsZWQnLCAnQXV0b0NvbXBsZXRlJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICBxdWVyeVVuaXZlcnNhbCAocXVlcnlTdHJpbmcpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvYXV0b2NvbXBsZXRlJyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBxdWVyeVN0cmluZyxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgICAnbG9jYWxlJzogdGhpcy5fbG9jYWxlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQocXVlcnlTdHJpbmcpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIudW5pdmVyc2FsKHJlc3BvbnNlLnJlc3BvbnNlKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRocm93IG5ldyBBbnN3ZXJzRW5kcG9pbnRFcnJvcignVW5pdmVyc2FsIHNlYXJjaCByZXF1ZXN0IGZhaWxlZCcsICdBdXRvQ29tcGxldGUnLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUmVzdWx0ICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlc3VsdHNEYXRhIGV4cGVjdGVkIGZvcm1hdDogeyBkYXRhOiB7IC4uLiB9LCBoaWdobGlnaHRlZEZpZWxkczogeyAuLi4gfX1cbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXN1bHRzRGF0YSkge1xuICAgIGxldCByZXN1bHRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gVE9ETyB1c2UgcmVzdWx0RGF0YS5oaWdobGlnaHRlZEZpZWxkcyB0b1xuICAgICAgLy8gdHJhbnNmb3JtIHJlc3VsdERhdGEuZGF0YSBpbnRvIGh0bWwtZnJpZW5kbHkgc3RyaW5ncyB0aGF0IGhpZ2hsaWdodCB2YWx1ZXMuXG5cbiAgICAgIC8vIENoZWNrIGZvciBuZXcgZGF0YSBmb3JtYXQsIG90aGVyd2lzZSBmYWxsYmFjayB0byBsZWdhY3lcbiAgICAgIHJlc3VsdHMucHVzaChuZXcgUmVzdWx0KHJlc3VsdHNEYXRhW2ldLmRhdGEgfHwgcmVzdWx0c0RhdGFbaV0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VjdGlvbiAqL1xuXG5pbXBvcnQgUmVzdWx0IGZyb20gJy4vcmVzdWx0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yIChkYXRhLCB1cmwpIHtcbiAgICB0aGlzLnZlcnRpY2FsQ29uZmlnSWQgPSBkYXRhLnZlcnRpY2FsQ29uZmlnSWQgfHwgbnVsbDtcbiAgICB0aGlzLnJlc3VsdHNDb3VudCA9IGRhdGEucmVzdWx0c0NvdW50IHx8IDA7XG4gICAgdGhpcy5lbmNvZGVkU3RhdGUgPSBkYXRhLmVuY29kZWRTdGF0ZSB8fCAnJztcbiAgICB0aGlzLmFwcGxpZWRRdWVyeUZpbHRlcnMgPSBBcHBsaWVkUXVlcnlGaWx0ZXIuZnJvbShkYXRhLmFwcGxpZWRRdWVyeUZpbHRlcnMpO1xuICAgIHRoaXMuZmFjZXRzID0gZGF0YS5mYWNldHMgfHwgbnVsbDtcbiAgICB0aGlzLnJlc3VsdHMgPSBSZXN1bHQuZnJvbShkYXRhLnJlc3VsdHMpO1xuICAgIHRoaXMubWFwID0gU2VjdGlvbi5wYXJzZU1hcChkYXRhLnJlc3VsdHMpO1xuICAgIHRoaXMudmVydGljYWxVUkwgPSB1cmwgfHwgbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBwYXJzZU1hcCAocmVzdWx0cykge1xuICAgIGxldCBtYXBNYXJrZXJzID0gW107XG5cbiAgICBsZXQgY2VudGVyQ29vcmRpbmF0ZXMgPSB7fTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmVzdWx0cy5sZW5ndGg7IGorKykge1xuICAgICAgLy8gVE9ETyhiaWxseSkgUmVtb3ZlIGxlZ2FjeSBmYWxsYmFjayBmcm9tIGFsbCBkYXRhIGZvcm1hdFxuICAgICAgbGV0IHJlc3VsdCA9IHJlc3VsdHNbal0uZGF0YSB8fCByZXN1bHRzW2pdO1xuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlKSB7XG4gICAgICAgIGlmICghY2VudGVyQ29vcmRpbmF0ZXMubGF0aXR1ZGUpIHtcbiAgICAgICAgICBjZW50ZXJDb29yZGluYXRlcyA9IHtcbiAgICAgICAgICAgIGxhdGl0dWRlOiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG9uZ2l0dWRlOiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlLmxvbmdpdHVkZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgbWFwTWFya2Vycy5wdXNoKHtcbiAgICAgICAgICBpdGVtOiByZXN1bHQsXG4gICAgICAgICAgbGFiZWw6IG1hcE1hcmtlcnMubGVuZ3RoICsgMSxcbiAgICAgICAgICBsYXRpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sYXRpdHVkZSxcbiAgICAgICAgICBsb25naXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubG9uZ2l0dWRlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAnbWFwQ2VudGVyJzogY2VudGVyQ29vcmRpbmF0ZXMsXG4gICAgICAnbWFwTWFya2Vycyc6IG1hcE1hcmtlcnNcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZyb20gKG1vZHVsZXMsIHVybHMpIHtcbiAgICBsZXQgc2VjdGlvbnMgPSBbXTtcbiAgICBpZiAoIW1vZHVsZXMpIHtcbiAgICAgIHJldHVybiBzZWN0aW9ucztcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobW9kdWxlcykpIHtcbiAgICAgIHJldHVybiBuZXcgU2VjdGlvbihtb2R1bGVzKTtcbiAgICB9XG5cbiAgICAvLyBPdXIgc2VjdGlvbnMgc2hvdWxkIGNvbnRhaW4gYSBwcm9wZXJ0eSBvZiBtYXBNYXJrZXIgb2JqZWN0c1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgc2VjdGlvbnMucHVzaChcbiAgICAgICAgbmV3IFNlY3Rpb24oXG4gICAgICAgICAgbW9kdWxlc1tpXSxcbiAgICAgICAgICB1cmxzW21vZHVsZXNbaV0udmVydGljYWxDb25maWdJZF1cbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VjdGlvbnM7XG4gIH1cbn1cblxuY2xhc3MgQXBwbGllZFF1ZXJ5RmlsdGVyIHtcbiAgLy8gU3VwcG9ydCBsZWdhY3kgbW9kZWwgYW5kIG5ldyBtb2RlbCB1bnRpbCBmdWxseSBtaWdyYXRlZC5cbiAgLy8gVE9ETyhiaWxseSkgUmVtb3ZlIHRoZSBsZWZ0IGV4cHJlc3Npb24gZHVyaW5nIGFzc2lnbm1lbnQgd2hlbiBtaWdyYXRlZC5cbiAgY29uc3RydWN0b3IgKGFwcGxpZWRRdWVyeUZpbHRlcikge1xuICAgIHRoaXMua2V5ID0gYXBwbGllZFF1ZXJ5RmlsdGVyLmtleSB8fCBhcHBsaWVkUXVlcnlGaWx0ZXIuZGlzcGxheUtleTtcbiAgICB0aGlzLnZhbHVlID0gYXBwbGllZFF1ZXJ5RmlsdGVyLnZhbHVlIHx8IGFwcGxpZWRRdWVyeUZpbHRlci5kaXNwbGF5VmFsdWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbSAoYXBwbGllZFF1ZXJ5RmlsdGVycykge1xuICAgIGxldCBmaWx0ZXJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcHBsaWVkUXVlcnlGaWx0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmaWx0ZXJzLnB1c2gobmV3IEFwcGxpZWRRdWVyeUZpbHRlcihhcHBsaWVkUXVlcnlGaWx0ZXJzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBmaWx0ZXJzO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBVbml2ZXJzYWxSZXN1bHRzICovXG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vc2VjdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaXZlcnNhbFJlc3VsdHMge1xuICBjb25zdHJ1Y3RvciAoZGF0YSkge1xuICAgIHRoaXMucXVlcnlJZCA9IGRhdGEucXVlcnlJZCB8fCBudWxsO1xuICAgIHRoaXMuc2VjdGlvbnMgPSBkYXRhLnNlY3Rpb25zIHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlLCB1cmxzKSB7XG4gICAgcmV0dXJuIG5ldyBVbml2ZXJzYWxSZXN1bHRzKHtcbiAgICAgIHF1ZXJ5SWQ6IHJlc3BvbnNlLnF1ZXJ5SWQsXG4gICAgICBzZWN0aW9uczogU2VjdGlvbi5mcm9tKHJlc3BvbnNlLm1vZHVsZXMsIHVybHMpXG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIERpcmVjdEFuc3dlciAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXJlY3RBbnN3ZXIge1xuICBjb25zdHJ1Y3RvciAoZGlyZWN0QW5zd2VyID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRpcmVjdEFuc3dlcik7XG4gICAgT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTmF2aWdhdGlvbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIHtcbiAgY29uc3RydWN0b3IgKHRhYk9yZGVyKSB7XG4gICAgdGhpcy50YWJPcmRlciA9IHRhYk9yZGVyIHx8IFtdO1xuICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbSAobW9kdWxlcykge1xuICAgIGxldCBuYXYgPSBbXTtcbiAgICBpZiAoIW1vZHVsZXMgfHwgIUFycmF5LmlzQXJyYXkobW9kdWxlcykpIHtcbiAgICAgIHJldHVybiBuYXY7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbmF2LnB1c2gobW9kdWxlc1tpXS52ZXJ0aWNhbENvbmZpZ0lkKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBOYXZpZ2F0aW9uKG5hdik7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFZlcnRpY2FsUmVzdWx0cyAqL1xuXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL3NlY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0aWNhbFJlc3VsdHMge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIG5ldyBWZXJ0aWNhbFJlc3VsdHMoU2VjdGlvbi5mcm9tKHJlc3BvbnNlKSk7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuLyoqXG4gKiBTdG9yYWdlS2V5cyBpcyBhbiBFTlVNIGFyZSBjb25zaWRlcmVkIHRoZSByb290IGNvbnRleHRcbiAqIGZvciBob3cgZGF0YSBpcyBzdG9yZWQgYW5kIHNjb3BlZCBpbiB0aGUgc3RvcmFnZS5cbiAqXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIE5BVklHQVRJT046ICduYXZpZ2F0aW9uJyxcbiAgVU5JVkVSU0FMX1JFU1VMVFM6ICd1bml2ZXJzYWwtcmVzdWx0cycsXG4gIFZFUlRJQ0FMX1JFU1VMVFM6ICd2ZXJ0aWNhbC1yZXN1bHRzJyxcbiAgQVVUT0NPTVBMRVRFOiAnYXV0b2NvbXBsZXRlJyxcbiAgRElSRUNUX0FOU1dFUjogJ2RpcmVjdC1hbnN3ZXInLFxuICBGSUxURVI6ICdmaWx0ZXInLFxuICBRVUVSWTogJ3F1ZXJ5J1xufTtcbiIsIi8qKiBAbW9kdWxlIFNlYXJjaERhdGFUcmFuc2Zvcm1lciAqL1xuXG5pbXBvcnQgVW5pdmVyc2FsUmVzdWx0cyBmcm9tICcuLi9tb2RlbHMvdW5pdmVyc2FscmVzdWx0cyc7XG5pbXBvcnQgRGlyZWN0QW5zd2VyIGZyb20gJy4uL21vZGVscy9kaXJlY3RhbnN3ZXInO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vbW9kZWxzL25hdmlnYXRpb24nO1xuaW1wb3J0IFZlcnRpY2FsUmVzdWx0cyBmcm9tICcuLi9tb2RlbHMvdmVydGljYWxyZXN1bHRzJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuLyoqXG4gKiBBIERhdGEgVHJhbnNmb3JtZXIgdGhhdCB0YWtlcyB0aGUgcmVzcG9uc2Ugb2JqZWN0IGZyb20gYSBTZWFyY2ggcmVxdWVzdFxuICogQW5kIHRyYW5zZm9ybXMgaW4gdG8gYSBmcm9udC1lbmQgb3JpZW50ZWQgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBvdXJcbiAqIGNvbXBvbmVudCBsaWJyYXJ5IGFuZCBjb3JlIHN0b3JhZ2UgdW5kZXJzdGFuZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoRGF0YVRyYW5zZm9ybWVyIHtcbiAgc3RhdGljIHRyYW5zZm9ybSAoZGF0YSwgdXJscyA9IHt9KSB7XG4gICAgbGV0IHJlc3BvbnNlID0gZGF0YS5yZXNwb25zZTtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlcnlJZDogcmVzcG9uc2UucXVlcnlJZCxcbiAgICAgIFtTdG9yYWdlS2V5cy5OQVZJR0FUSU9OXTogTmF2aWdhdGlvbi5mcm9tKHJlc3BvbnNlLm1vZHVsZXMpLFxuICAgICAgW1N0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVJdOiBuZXcgRGlyZWN0QW5zd2VyKHJlc3BvbnNlLmRpcmVjdEFuc3dlciksXG4gICAgICBbU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFNdOiBVbml2ZXJzYWxSZXN1bHRzLmZyb20ocmVzcG9uc2UsIHVybHMpXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB0cmFuc2Zvcm1WZXJ0aWNhbCAoZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICBxdWVyeUlkOiBkYXRhLnJlc3BvbnNlLnF1ZXJ5SWQsXG4gICAgICBbU3RvcmFnZUtleXMuTkFWSUdBVElPTl06IG5ldyBOYXZpZ2F0aW9uKCksIC8vIFZlcml0Y2FsIGRvZXNuJ3QgcmVzcG9uZCB3aXRoIG9yZGVyaW5nLCBzbyB1c2UgZW1wdHkgbmF2LlxuICAgICAgW1N0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFNdOiBWZXJ0aWNhbFJlc3VsdHMuZnJvbShkYXRhLnJlc3BvbnNlKVxuICAgIH07XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEV2ZW50RW1pdHRlciAqL1xuXG4vKipcbiAqIEV2ZW50RW1pdHRlciBpcyBhIGJhc2UgY2xhc3MgZm9yIGFueSBvYmplY3QgdGhhdCB3YW50cyB0byBleHBvc2VcbiAqIGEgcHViL3N1YiBpbnRlcmZhY2UsIGZvciBlbWl0dGluZyBtZXNzYWdlcyBhbmQgcHJvdmlkaW5nIGxpc3RlbmVycy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8qKlxuICAgICAqIFRoZSBzdWJzY3JpYmVycyBvZiBtZXNzYWdlc1xuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIG9uIGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciBzdWJzY3JpYmluZyBldmVudHMgdGhhdCBhcmUgZW1pdHRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byBsaXN0ZW4gdG9cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgVGhlIGNhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSB7ZXZ0fSBpcyBlbWl0dGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSBPcHRpb25hbCB2YWx1ZSB3aGljaCB3aWxsIG9ubHkgaGFuZGxlIHRoZSBtZXNzYWdlIG9uY2VcbiAgICovXG4gIG9uIChldnQsIGNiLCBvbmNlKSB7XG4gICAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBoYW5kbGVyIHNob3VsZCBiZSBvZiB0eXBlIHtmdW5jdGlvbn0nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbGlzdGVuZXJzW2V2dF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzW2V2dF0gPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XS5wdXNoKHtcbiAgICAgIGV2ZW50OiBldnQsXG4gICAgICBjYjogY2IsXG4gICAgICBvbmNlOiBvbmNlIHx8IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBvbmNlIGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciBzdWJzY3JpYmluZyBldmVudHMgdGhhdCBhcmUgZW1pdHRlZC5cbiAgICogVGhlIGhhbmRsZXIgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBvbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIGxpc3RlbiB0b1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gdGhlIHtldnR9IGlzIGVtaXR0ZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBvbmNlIE9wdGlvbmFsIHZhbHVlIHdoaWNoIHdpbGwgb25seSBoYW5kbGUgdGhlIG1lc3NhZ2Ugb25jZVxuICAgKi9cbiAgb25jZSAoZXZ0LCBjYikge1xuICAgIHJldHVybiB0aGlzLm9uKGV2dCwgY2IsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIG9mZiBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3IgdW5zdWJzY3JpYmluZyBmcm9tIGFuIGV2ZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gdW5zdWJzY3JpYmUgZnJvbVxuICAgKi9cbiAgb2ZmIChldnQpIHtcbiAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW2V2dF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogZW1pdCBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3IgYnJvYWRjYXN0aW5nIG1lc3NhZ2VzL2V2ZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIHB1Ymxpc2ggZnJvbVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSB0aGUgZGF0YSB0byBzZW5kIGFsb25nIHRvIHRoZSBzdWJzY3JpYmVyc1xuICAgKi9cbiAgZW1pdCAoZXZ0LCBkYXRhKSB7XG4gICAgbGV0IGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1tldnRdO1xuICAgIGlmIChsaXN0ZW5lcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEludm9rZSBlYWNoIG9mIGFsbCB0aGUgbGlzdGVuZXIgaGFuZGxlcnMgYW5kIHJlbW92ZSB0aGUgb25lcyB0aGF0IHNob3VsZCBmaXJlIG9ubHkgb25jZS5cbiAgICBsZXQga2VlcCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0uY2IoZGF0YSk7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldLm9uY2UgPT09IHRydWUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEluc3RlYWQgb2YgaGF2aW5nIGEgJ2RpcnR5JyBhcnJheSB3aXRoIGRlbGV0ZWQgb3IgJ3VuZGVmaW5lZCcgZW50cmllcyxcbiAgICAgIC8vIHdlIGp1c3QgY3JlYXRlIGEgYnJhbmQgbmV3IGFycmF5IHdpdGhvdXQgdGhlIGxpc3RlbmVycyB0aGF0IHdlcmUgcmVtb3ZlZFxuICAgICAga2VlcC5wdXNoKGxpc3RlbmVyc1tpXSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIG91ciBvbGQgbGlzdCBvZiBsaXN0ZW5lcnMgdG8gdGhlIG5ld2x5IGNyZWF0ZWQgYXJyYXlcbiAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XSA9IGtlZXA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE1vZHVsZURhdGEgKi9cblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9ldmVudGVtaXR0ZXIvZXZlbnRlbWl0dGVyJztcblxuLyoqXG4gKiBNb2R1bGVEYXRhIGlzIHVzZWQgYXMgYSBnZW5lcmljIG1vZGVsIGZvciBTdG9yYWdlLlxuICogVHlwaWNhbGx5IGFuIGluc3RhbmNlIG9mIE1vZHVsZURhdGEgcG93ZXJzIGEgc2luZ2xlIGNvbXBvbmVudC5cblxuICogQSBkYXRhIG1vZGVsIHRoYXQgZXhwb3NlcyBhbiBldmVudCBlbWl0dGVyIGludGVyZmFjZS5cbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2R1bGVEYXRhIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGlkLCBkYXRhID0ge30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5faWQgPSBpZDtcbiAgICB0aGlzLl9oaXN0b3J5ID0gW107XG4gICAgdGhpcy5fZGF0YSA9IHt9O1xuICAgIHRoaXMuc2V0KGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlcGxhY2VzIHRoZSBjdXJyZW50bHkgaGVsZCBkYXRhIHdpdGggdGhlIGdpdmVuIGRhdGFcbiAgICogQHBhcmFtIHsqfSBkYXRhIHRoZSBkYXRhIHRvIHJlcGxhY2UgdGhlIGN1cnJlbnQgZGF0YVxuICAgKi9cbiAgc2V0IChkYXRhKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IGRhdGEgfHwge307XG5cbiAgICB0aGlzLmNhcHR1cmVQcmV2aW91cygpO1xuXG4gICAgaWYgKE9iamVjdC5rZXlzKG5ld0RhdGEpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXModGhpcy5fZGF0YSkubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9kYXRhID0gbmV3RGF0YTtcbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5fZGF0YSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgZm9yIHNoYWxsb3cgZXF1YWxpdHlcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhuZXdEYXRhKSkge1xuICAgICAgaWYgKHRoaXMuX2RhdGFba2V5XSAhPT0gbmV3RGF0YVtrZXldKSB7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBuZXdEYXRhO1xuICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHRoaXMuX2RhdGEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2FwdHVyZVByZXZpb3VzICgpIHtcbiAgICBpZiAodGhpcy5faGlzdG9yeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9oaXN0b3J5ID0gW107XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2hpc3RvcnkubGVuZ3RoICsgMSA+IDUpIHtcbiAgICAgIHRoaXMuX2hpc3Rvcnkuc2hpZnQoKTtcbiAgICB9XG5cbiAgICAvLyBJZiBkYXRhIGlzIGV2ZXIgdW5kZWZpbmVkLCB3ZSBkZWZhdWx0IHRvIGVtcHR5IG9iamVjdFxuICAgIHRoaXMuX2hpc3RvcnkucHVzaChKU09OLnN0cmluZ2lmeSh0aGlzLl9kYXRhIHx8IHt9KSk7XG4gIH1cblxuICB1bmRvICgpIHtcbiAgICBsZXQgcHJldmlvdXMgPSB7fTtcbiAgICBpZiAodGhpcy5fcHJldmlvdXMubGVuZ3RoID4gMCkge1xuICAgICAgcHJldmlvdXMgPSBKU09OLnBhcnNlKHRoaXMuX3ByZXZpb3VzLnBvcCgpKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRhLnNldChwcmV2aW91cyk7XG4gIH1cblxuICByYXcgKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBTdG9yYWdlICovXG5cbmltcG9ydCBNb2R1bGVEYXRhIGZyb20gJy4vbW9kdWxlZGF0YSc7XG5pbXBvcnQgeyBBbnN3ZXJzU3RvcmFnZUVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5cbi8qKlxuICogU3RvcmFnZSBpcyBhIGNvbnRhaW5lciBhcm91bmQgYXBwbGljYXRpb24gc3RhdGUuXG4gKiBJdCBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgQ1JVRCBvcGVyYXRpb25zIGFzIHdlbGwgYXMgbGlzdGVuaW5nXG4gKiBmb3Igc3RhdGVmdWwgY2hhbmdlcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyID0ge307XG4gICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzID0ge307XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkYXRhIGluIHN0b3JhZ2Ugd2l0aCB0aGUgZ2l2ZW4ga2V5IHRvIHRoZSBwcm92aWRlZCBkYXRhLFxuICAgKiBjb21wbGV0ZWx5IG92ZXJ3cml0aW5nIGFueSBleGlzdGluZyBkYXRhLlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRoZSBzdG9yYWdlIGtleSB0byBzZXRcbiAgICogQHBhcmFtIHsqfSBkYXRhIHRoZSBkYXRhIHRvIHNldFxuICAgKi9cbiAgc2V0IChrZXksIGRhdGEpIHtcbiAgICB0aGlzLl9pbml0RGF0YUNvbnRhaW5lcihrZXksIGRhdGEpO1xuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJba2V5XS5zZXQoZGF0YSk7XG4gIH1cblxuICBfaW5pdERhdGFDb250YWluZXIgKGtleSwgZGF0YSkge1xuICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCB8fCBrZXkgPT09IG51bGwgfHwgdHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzU3RvcmFnZUVycm9yKCdJbnZhbGlkIHN0b3JhZ2Uga2V5IHByb3ZpZGVkJywga2V5LCBkYXRhKTtcbiAgICB9XG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCB8fCBkYXRhID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc1N0b3JhZ2VFcnJvcignTm8gZGF0YSBwcm92aWRlZCcsIGtleSwgZGF0YSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX21vZHVsZURhdGFDb250YWluZXJba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW2tleV0gPSBuZXcgTW9kdWxlRGF0YShrZXkpO1xuICAgICAgdGhpcy5fYXBwbHlGdXR1cmVMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gIH1cblxuICBnZXRTdGF0ZSAobW9kdWxlSWQpIHtcbiAgICBpZiAodGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5yYXcoKTtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgZ2V0QWxsIChrZXkpIHtcbiAgICBjb25zdCBkYXRhID0gW107XG4gICAgZm9yIChjb25zdCBkYXRhS2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuX21vZHVsZURhdGFDb250YWluZXIpKSB7XG4gICAgICBpZiAoZGF0YUtleS5zdGFydHNXaXRoKGtleSkgJiYgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltkYXRhS2V5XS5yYXcoKSAhPT0gbnVsbCkge1xuICAgICAgICBkYXRhLnB1c2godGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lcltkYXRhS2V5XS5yYXcoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgb24gKGV2dCwgbW9kdWxlSWQsIGNiKSB7XG4gICAgbGV0IG1vZHVsZURhdGEgPSB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXTtcbiAgICBpZiAobW9kdWxlRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXS5wdXNoKHtcbiAgICAgICAgZXZlbnQ6IGV2dCxcbiAgICAgICAgY2I6IGNiXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdLm9uKGV2dCwgY2IpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb2ZmIChldnQsIG1vZHVsZUlkLCBjYikge1xuICAgIGxldCBtb2R1bGVEYXRhID0gdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF07XG4gICAgaWYgKG1vZHVsZURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdLnBvcCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5vZmYoZXZ0LCBjYik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfYXBwbHlGdXR1cmVMaXN0ZW5lcnMgKG1vZHVsZUlkKSB7XG4gICAgbGV0IGZ1dHVyZXMgPSB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdO1xuICAgIGlmICghZnV0dXJlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnV0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGZ1dHVyZSA9IGZ1dHVyZXNbaV07XG4gICAgICB0aGlzLm9uKGZ1dHVyZS5ldmVudCwgbW9kdWxlSWQsIGZ1dHVyZS5jYik7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBDb3JlICovXG5cbmltcG9ydCBTZWFyY2hBcGkgZnJvbSAnLi9zZWFyY2gvc2VhcmNoYXBpJztcbmltcG9ydCBBdXRvQ29tcGxldGVBcGkgZnJvbSAnLi9zZWFyY2gvYXV0b2NvbXBsZXRlYXBpJztcblxuaW1wb3J0IFNlYXJjaERhdGFUcmFuc2Zvcm1lciBmcm9tICcuL3NlYXJjaC9zZWFyY2hkYXRhdHJhbnNmb3JtZXInO1xuXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2Uvc3RvcmFnZSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuLyoqXG4gKiBDb3JlIGlzIHRoZSBtYWluIGFwcGxpY2F0aW9uIGNvbnRhaW5lciBmb3IgYWxsIG9mIHRoZSBuZXR3b3JrIGFuZCBzdG9yYWdlXG4gKiByZWxhdGVkIGJlaGF2aW9ycyBvZiB0aGUgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmUge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgaWYgKHR5cGVvZiBvcHRzLmFwaUtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBgYXBpS2V5YC4gVHlwZSBtdXN0IGJlIHtzdHJpbmd9Jyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRzLmFuc3dlcnNLZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYGFuc3dlcnNLZXlgLiBUeXBlIG11c3QgYmUge3N0cmluZ30nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IEFQSSBLZXkgdXNlZCBmb3IgYWxsIHJlcXVlc3RzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwaUtleSA9IG9wdHMuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNsaWVudCBBbnN3ZXJzIEtleSB1c2VkIGZvciBhbGwgcmVxdWVzdHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYW5zd2Vyc0tleSA9IG9wdHMuYW5zd2Vyc0tleTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjbGllbnQgbG9jYWxlIHVzZWQgZm9yIGFsbCByZXF1ZXN0cy4gSWYgbm90IHNwZWNpZmllZCwgZGVmYXVsdHMgdG8gXCJlblwiIChmb3JcbiAgICAgKiBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSkuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xvY2FsZSA9IG9wdHMubG9jYWxlIHx8ICdlbic7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY29yZSBkYXRhIHN0b3JhZ2UgdGhhdCBwb3dlcnMgdGhlIFVJXG4gICAgICogQHR5cGUge1N0b3JhZ2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWJzdHJhY3Rpb24gY29udGFpbmluZyB0aGUgaW50ZWdyYXRpb24gd2l0aCB0aGUgUkVTVGZ1bCBzZWFyY2ggQVBJXG4gICAgICogRm9yIGJvdGggdmVydGljYWwgYW5kIHVuaXZlcnNhbCBzZWFyY2hcbiAgICAgKiBAdHlwZSB7U2VhcmNofVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc2VhcmNoZXIgPSBuZXcgU2VhcmNoQXBpKHtcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgYW5zd2Vyc0tleTogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgIGxvY2FsZTogdGhpcy5fbG9jYWxlXG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiBjb250YWluaW5nIHRoZSBpbnRlZ3JhdGlvbiB3aXRoIHRoZSBSRVNUZnVsIGF1dG9jb21wbGV0ZSBBUElcbiAgICAgKiBGb3IgZmlsdGVyIHNlYXJjaCwgdmVydGljYWwgYXV0b2NvbXBsZXRlLCBhbmQgdW5pdmVyc2FsIGF1dG9jb21wbGV0ZVxuICAgICAqIEB0eXBlIHtBdXRvY29tcGxldGV9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hdXRvQ29tcGxldGUgPSBuZXcgQXV0b0NvbXBsZXRlQXBpKHtcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgYW5zd2Vyc0tleTogdGhpcy5fYW5zd2Vyc0tleSxcbiAgICAgIGxvY2FsZTogdGhpcy5fbG9jYWxlXG4gICAgfSk7XG4gIH1cblxuICB2ZXJ0aWNhbFNlYXJjaCAocXVlcnlTdHJpbmcsIHZlcnRpY2FsS2V5LCBmaWx0ZXIpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoZXJcbiAgICAgIC52ZXJ0aWNhbFF1ZXJ5KHF1ZXJ5U3RyaW5nLCB2ZXJ0aWNhbEtleSwgZmlsdGVyKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gU2VhcmNoRGF0YVRyYW5zZm9ybWVyLnRyYW5zZm9ybVZlcnRpY2FsKHJlc3BvbnNlKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLk5BVklHQVRJT04sIGRhdGFbU3RvcmFnZUtleXMuTkFWSUdBVElPTl0pO1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFMsIGRhdGFbU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUU10pO1xuICAgICAgfSk7XG4gIH1cblxuICBzZWFyY2ggKHF1ZXJ5U3RyaW5nLCB1cmxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaGVyXG4gICAgICAucXVlcnkocXVlcnlTdHJpbmcpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBTZWFyY2hEYXRhVHJhbnNmb3JtZXIudHJhbnNmb3JtKHJlc3BvbnNlLCB1cmxzKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLk5BVklHQVRJT04sIGRhdGFbU3RvcmFnZUtleXMuTkFWSUdBVElPTl0pO1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLkRJUkVDVF9BTlNXRVIsIGRhdGFbU3RvcmFnZUtleXMuRElSRUNUX0FOU1dFUl0pO1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KFN0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTLCBkYXRhW1N0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTXSwgdXJscyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhbiBpbnB1dCwgcXVlcnkgZm9yIGEgbGlzdCBvZiBzaW1pbGFyIHJlc3VsdHMgYW5kIHNldCBpbnRvIHN0b3JhZ2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0ICAgICB0aGUgc3RyaW5nIHRvIGF1dG9jb21wbGV0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIHRoZSBuYW1lc3BhY2UgdG8gdXNlIGZvciB0aGUgc3RvcmFnZSBrZXlcbiAgICovXG4gIGF1dG9Db21wbGV0ZVVuaXZlcnNhbCAoaW5wdXQsIG5hbWVzcGFjZSkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvQ29tcGxldGVcbiAgICAgIC5xdWVyeVVuaXZlcnNhbChpbnB1dClcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkFVVE9DT01QTEVURX0uJHtuYW1lc3BhY2V9YCwgZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhbiBpbnB1dCwgcXVlcnkgZm9yIGEgbGlzdCBvZiBzaW1pbGFyIHJlc3VsdHMgaW4gdGhlIHByb3ZpZGVkIHZlcnRpY2FsXG4gICAqIGFuZCBzZXQgaW50byBzdG9yYWdlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCAgICAgICB0aGUgc3RyaW5nIHRvIGF1dG9jb21wbGV0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIHRoZSBuYW1lc3BhY2UgdG8gdXNlIGZvciB0aGUgc3RvcmFnZSBrZXlcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlcnRpY2FsS2V5IHRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHRoZSBleHBlcmllbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiYXJLZXkgICAgICB0aGUgYmFyIGtleSBmb3IgdGhlIGV4cGVyaWVuY2VcbiAgICovXG4gIGF1dG9Db21wbGV0ZVZlcnRpY2FsIChpbnB1dCwgbmFtZXNwYWNlLCB2ZXJ0aWNhbEtleSwgYmFyS2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5VmVydGljYWwoaW5wdXQsIHZlcnRpY2FsS2V5LCBiYXJLZXkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldChgJHtTdG9yYWdlS2V5cy5BVVRPQ09NUExFVEV9LiR7bmFtZXNwYWNlfWAsIGRhdGEpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gYW4gaW5wdXQsIHByb3ZpZGUgYSBsaXN0IG9mIHN1aXRhYmxlIGZpbHRlcnMgZm9yIGF1dG9jb21wbGV0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCAgICAgICAgIHRoZSBzdHJpbmcgdG8gc2VhcmNoIGZvciBmaWx0ZXJzIHdpdGhcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSAgICAgdGhlIG5hbWVzcGFjZSB0byB1c2UgZm9yIHRoZSBzdG9yYWdlIGtleVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmVydGljYWxLZXkgICB0aGUgdmVydGljYWwga2V5IGZvciB0aGUgZXhwZXJpZW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gYmFyS2V5ICAgICAgICB0aGUgYmFyIGtleSBmb3IgdGhlIGV4cGVyaWVuY2VcbiAgICovXG4gIGF1dG9Db21wbGV0ZUZpbHRlciAoaW5wdXQsIG5hbWVzcGFjZSwgdmVydGljYWxLZXksIGJhcktleSkge1xuICAgIHJldHVybiB0aGlzLl9hdXRvQ29tcGxldGVcbiAgICAgIC5xdWVyeUZpbHRlcihpbnB1dCwgdmVydGljYWxLZXksIGJhcktleSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KGAke1N0b3JhZ2VLZXlzLkFVVE9DT01QTEVURX0uJHtuYW1lc3BhY2V9YCwgZGF0YSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9yZXMgdGhlIGdpdmVuIHF1ZXJ5IGludG8gc3RvcmFnZSwgdG8gYmUgdXNlZCBmb3IgdGhlIG5leHQgc2VhcmNoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgcXVlcnkgdG8gc3RvcmVcbiAgICovXG4gIHNldFF1ZXJ5IChxdWVyeSkge1xuICAgIHRoaXMuc3RvcmFnZS5zZXQoU3RvcmFnZUtleXMuUVVFUlksIHF1ZXJ5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9yZXMgdGhlIGdpdmVuIGZpbHRlciBpbnRvIHN0b3JhZ2UsIHRvIGJlIHVzZWQgZm9yIHRoZSBuZXh0IHNlYXJjaFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIHRoZSBuYW1lc3BhY2UgdG8gdXNlIGZvciB0aGUgc3RvcmFnZSBrZXlcbiAgICogQHBhcmFtIHtGaWx0ZXJ9IGZpbHRlciAgICB0aGUgZmlsdGVyIHRvIHNldFxuICAgKi9cbiAgc2V0RmlsdGVyIChuYW1lc3BhY2UsIGZpbHRlcikge1xuICAgIHRoaXMuc3RvcmFnZS5zZXQoYCR7U3RvcmFnZUtleXMuRklMVEVSfS4ke25hbWVzcGFjZX1gLCBmaWx0ZXIpO1xuICB9XG5cbiAgb24gKGV2dCwgbW9kdWxlSWQsIGNiKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5vbihldnQsIG1vZHVsZUlkLCBjYik7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIENvbXBvbmVudE1hbmFnZXIgKi9cblxuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcblxuLyoqXG4gKiBDb21wb25lbnRNYW5hZ2VyIGlzIGEgU2luZ2xldG9uZSB0aGF0IGNvbnRhaW5zIGJvdGggYW4gaW50ZXJuYWwgcmVnaXN0cnkgb2ZcbiAqIGVsaWdpYmxlIGNvbXBvbmVudHMgdG8gYmUgY3JlYXRlZCwgYXMgd2VsbCBhcyBrZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudFxuICogaW5zdGFudGlhdGVkIGFuZCBhY3RpdmUgY29tcG9uZW50cy5cbiAqXG4gKiBBTEwgY29tcG9uZW50cyBzaG91bGQgYmUgY29uc3RydWN0ZWQgdXNpbmcgdGhlIHtDb21wb25lbnRNYW5hZ2VyfSB2aWEgaXRzIGBjcmVhdGVgIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50TWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBpZiAoIUNvbXBvbmVudE1hbmFnZXIuc2V0SW5zdGFuY2UodGhpcykpIHtcbiAgICAgIHJldHVybiBDb21wb25lbnRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbXBvbmVudCByZWdpc3RyeSBpcyBhbiBpbnRlcm5hbCBtYXAsIHRoYXQgY29udGFpbnNcbiAgICAgKiBhbGwgYXZhaWxhYmxlIGNvbXBvbmVudCBDTEFTU0VTIHVzZWQgZm9yIGNyZWF0aW9uIG9yIG92ZXJyaWRlLlxuICAgICAqIEVhY2ggY29tcG9uZW50IGNsYXNzIGhhcyBhIHVuaXF1ZSBUWVBFLCB3aGljaCBpcyB1c2VkIGFzIHRoZSBrZXkgZm9yIHRoZSByZWdpc3RyeVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5fY29tcG9uZW50UmVnaXN0cnkgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhY3RpdmUgY29tcG9uZW50cyBpcyBhbiBpbnRlcm5hbCBjb250YWluZXIgdG8ga2VlcCB0cmFja1xuICAgICAqIG9mIGFsbCBvZiB0aGUgY29tcG9uZW50cyB0aGF0IGhhdmUgYmVlbiBjb25zdHJ1Y3RlZFxuICAgICAqL1xuICAgIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb3JlIGxpYnJhcnkgZGVwZW5kZW5jeVxuICAgICAqXG4gICAgICogVGhlIENvcmUgY29udGFpbnMgYm90aCB0aGUgc3RvcmFnZSBBTkQgc2VydmljZXMgdGhhdCBhcmUgbmVlZGVkIGZvciBwZXJmb3JtaW5nIG9wZXJhdGlvbnNcbiAgICAgKiBsaWtlIHNlYXJjaCBhbmQgYXV0byBjb21wbGV0ZS5cbiAgICAgKlxuICAgICAqIFRoZSBzdG9yYWdlIGlzIHRoZSBzb3VyY2Ugb2YgdHJ1dGggZm9yIHRoZSBzdGF0ZSBvZiBBTEwgY29tcG9uZW50cy5cbiAgICAgKiBXaGVuZXZlciB0aGUgc3RvcmFnZSBpcyB1cGRhdGVkLCB0aGUgc3RhdGUgZ2V0cyBwdXNoZWQgZG93biB0byB0aGUgbmVjZXNzYXJ5IGNvbXBvbmVudHMuXG4gICAgICogQHR5cGUge0NvcmV9XG4gICAgICovXG4gICAgdGhpcy5fY29yZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcHJpbWFyeSByZW5kZXJlciB0byB1c2UgZm9yIGFsbCBjb21wb25lbnRzXG4gICAgICogQHR5cGUge0hhbmRsZWJhcnNSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXJlciA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgYW5hbHl0aWNzIHJlcG9ydGVyIGRlcGVuZGVuY3lcbiAgICAgKi9cbiAgICB0aGlzLl9hbmFseXRpY3NSZXBvcnRlciA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgc2V0SW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIHNldFJlbmRlcmVyIChyZW5kZXJlcikge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRDb3JlIChjb3JlKSB7XG4gICAgdGhpcy5fY29yZSA9IGNvcmU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRBbmFseXRpY3NSZXBvcnRlciAocmVwb3J0ZXIpIHtcbiAgICB0aGlzLl9hbmFseXRpY3NSZXBvcnRlciA9IHJlcG9ydGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlZ2lzdGVycyBhIGNvbXBvbmVudCB0byBiZSBlbGlnaWJsZSBmb3IgY3JlYXRpb24gYW5kIG92ZXJyaWRlLlxuICAgKiBAcGFyYW0ge0NvbXBvbmVudH0gVGhlIENvbXBvbmVudCBDbGFzcyB0byByZWdpc3RlclxuICAgKi9cbiAgcmVnaXN0ZXIgKGNvbXBvbmVudENsYXp6KSB7XG4gICAgdGhpcy5fY29tcG9uZW50UmVnaXN0cnlbY29tcG9uZW50Q2xhenoudHlwZV0gPSBjb21wb25lbnRDbGF6ejtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBjcmVhdGUgaXMgdGhlIGVudHJ5IHBvaW50IGZvciBjb25zdHJ1Y3RpbmcgYW55IGFuZCBhbGwgY29tcG9uZW50cy5cbiAgICogSXQgd2lsbCBpbnN0YW50aWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgY29tcG9uZW50LCBhbmQgYm90aCBhcHBseVxuICAgKiBpbml0aWFsIHN0YXRlIGZyb20gdGhlIHN0b3JhZ2UgYW5kIGJpbmQgaXQgdG8gdGhlIHN0b3JhZ2UgZm9yIHVwZGF0ZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnRUeXBlIFRoZSBjb21wb25lbnQgdHlwZSB0byBjcmVhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgVGhlIG9wdGlvbnMgdG8gcGlwZSB0byB0aGUgY29uc3RydWN0aW9uIG9mIHRoZSBjb21wb25lbnRcbiAgICovXG4gIGNyZWF0ZSAoY29tcG9uZW50VHlwZSwgb3B0cykge1xuICAgIC8vIEV2ZXJ5IGNvbXBvbmVudCBuZWVkcyBsb2NhbCBhY2Nlc3MgdG8gdGhlIGNvbXBvbmVudCBtYW5hZ2VyXG4gICAgLy8gYmVjYXVzZSBzb21ldGltZXMgY29tcG9uZW50cyBoYXZlIHN1YmNvbXBvbmVudHMgdGhhdCBuZWVkIHRvIGJlXG4gICAgLy8gY29uc3RydWN0ZWQgZHVyaW5nIGNyZWF0aW9uXG4gICAgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29yZTogdGhpcy5fY29yZSxcbiAgICAgIHJlbmRlcmVyOiB0aGlzLl9yZW5kZXJlcixcbiAgICAgIGFuYWx5dGljc1JlcG9ydGVyOiB0aGlzLl9hbmFseXRpY3NSZXBvcnRlcixcbiAgICAgIGNvbXBvbmVudE1hbmFnZXI6IHRoaXNcbiAgICB9LCBvcHRzKTtcblxuICAgIGxldCBjb21wb25lbnRDbGFzcyA9IHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5W2NvbXBvbmVudFR5cGVdO1xuXG4gICAgaWYgKFxuICAgICAgIWNvbXBvbmVudENsYXNzLmFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCgpICYmXG4gICAgICB0aGlzLl9hY3RpdmVDb21wb25lbnRzLnNvbWUoYyA9PiBjLm5hbWUgPT09IG9wdHMubmFtZSlcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgIGBBbm90aGVyIGNvbXBvbmVudCB3aXRoIG5hbWUgJHtvcHRzLm5hbWV9IGFscmVhZHkgZXhpc3RzYCxcbiAgICAgICAgY29tcG9uZW50VHlwZSk7XG4gICAgfVxuXG4gICAgLy8gSW5zdGFudGlhdGUgb3VyIG5ldyBjb21wb25lbnQgYW5kIGtlZXAgdHJhY2sgb2YgaXRcbiAgICBsZXQgY29tcG9uZW50ID1cbiAgICAgIG5ldyB0aGlzLl9jb21wb25lbnRSZWdpc3RyeVtjb21wb25lbnRUeXBlXShvcHRzKVxuICAgICAgICAuaW5pdChvcHRzKTtcblxuICAgIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBsb2NhbCBzdG9yYWdlIHRvIHBvd2VyIHN0YXRlLCBhcHBseSB0aGUgc3RhdGVcbiAgICAvLyBmcm9tIHRoZSBzdG9yYWdlIHRvIHRoZSBjb21wb25lbnQsIGFuZCB0aGVuIGJpbmQgdGhlIGNvbXBvbmVudFxuICAgIC8vIHN0YXRlIHRvIHRoZSBzdG9yYWdlIHZpYSBpdHMgdXBkYXRlc1xuICAgIGlmICh0aGlzLl9jb3JlICYmIHRoaXMuX2NvcmUuc3RvcmFnZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKGNvbXBvbmVudC5tb2R1bGVJZCA9PT0gdW5kZWZpbmVkIHx8IGNvbXBvbmVudC5tb2R1bGVJZCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jb3JlLnN0b3JhZ2VcbiAgICAgICAgLm9uKCd1cGRhdGUnLCBjb21wb25lbnQubW9kdWxlSWQsIChkYXRhKSA9PiB7XG4gICAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50O1xuICB9XG5cbiAgZ2V0QWN0aXZlQ29tcG9uZW50ICh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHMuZmluZChjID0+IGMudHlwZSA9PT0gdHlwZSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlbmRlcmVyICovXG5cbi8qKlxuICogUmVuZGVyZXIgaXMgYW4gYWJzdHJhY3QgY2xhc3MgdGhhdCBhbGwgUmVuZGVyZXJzIHNob3VsZCBleHRlbmQgYW5kIGltcGxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciB7XG4gIC8qKlxuICAgKiByZW5kZXIgaXMgYSBjb3JlIG1ldGhvZCBmb3IgYWxsIHJlbmRlcmVycy5cbiAgICogQWxsIGltcGxlbWVudGF0aW9ucyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBjbGFzc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICovXG4gIHJlbmRlciAodGVtcGxhdGUsIGRhdGEpIHtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICByZWdpc3RlckhlbHBlciAobmFtZSwgY2IpIHtcblxuICB9XG5cbiAgY29tcGlsZSAodGVtcGxhdGUpIHtcblxuICB9XG59XG4iLCIvKiogQG1vZHVsZSBIYW5kbGViYXJzUmVuZGVyZXIgKi9cblxuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuXG4vKipcbiAqIEhhbmRsZWJhcnNSZW5kZXJlciBpcyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBuYXRpdmF0ZSBoYW5kbGViYXJzIHJlbmRlcmVyLlxuICogQGV4dGVuZHMgUmVuZGVyZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFuZGxlYmFyc1JlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvciAodGVtcGxhdGVzID0ge30sIG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgaGFuZGxlYmFycyBjb21waWxlclxuICAgICAqIEB0eXBlIHtIYW5kbGViYXJzfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faGFuZGxlYmFycyA9IHRlbXBsYXRlcy5faGIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBwcmUtY29tcGlsZWQgaGFuZGxlYmFycyB0ZW1wbGF0ZXNcbiAgICAgKiBAdHlwZSB7SGFuZGxlYmFyc31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHRlbXBsYXRlcyB8fCB7fTtcbiAgfVxuXG4gIGluaXQgKHRlbXBsYXRlcykge1xuICAgIC8vIEFzc2lnbiB0aGUgaGFuZGxlYmFycyBjb21waWxlciBhbmQgdGVtcGxhdGVzIGJhc2VkIG9uXG4gICAgLy8gaW5mb3JtYXRpb24gcHJvdmlkZWQgZnJvbSBleHRlcm5hbCBkZXAgKGluIGRlZmF1bHQgY2FzZSwgaXQgY29tZXMgZnJvbSBleHRlcm5hbCBzZXJ2ZXIgcmVxdWVzdClcbiAgICB0aGlzLl9oYW5kbGViYXJzID0gdGVtcGxhdGVzLl9oYjtcbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXM7XG5cbiAgICAvLyBUT0RPKGJpbGx5KSBPbmNlIHdlIHJlLXdyaXRlIHRlbXBsYXRlcyB1c2luZyB0aGUgbmV3IGhlbHBlcnMgbGlicmFyeVxuICAgIC8vIHdlIHByb2JhYmx5IGRvbid0IG5lZWQgdGhlc2UgY3VzdG9tIGhlbHBlcnMgYW55bW9yZVxuICAgIHRoaXMuX3JlZ2lzdGVyQ3VzdG9tSGVscGVycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlZ2lzdGVySGVscGVyIGlzIGEgcHVibGljIGludGVyZmFjZSBmb3IgZXh0ZXJuYWwgZGVwZW5kZW5jaWVzIHRvXG4gICAqIHJlZ2lzdGVyIHRoZWlyIG93biBjdXN0b20gaGVscGVycyB0byBvdXIgaW50ZXJuYWwgSGFuZGxlYmFycyBDb21waWxlclxuICAgKi9cbiAgcmVnaXN0ZXJIZWxwZXIgKG5hbWUsIGNiKSB7XG4gICAgdGhpcy5faGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihuYW1lLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogY29tcGlsZSBhIGhhbmRsZWJhcnMgdGVtcGxhdGUgc28gdGhhdCBpdCBjYW4gYmUgcmVuZGVyZWQsXG4gICAqIHVzaW5nIHRoZSB7SGFuZGxlYmFyc30gY29tcGlsZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlIFRoZSB0ZW1wbGF0ZSBzdHJpbmcgdG8gY29tcGlsZVxuICAgKi9cbiAgY29tcGlsZSAodGVtcGxhdGUpIHtcbiAgICBpZiAodHlwZW9mIHRlbXBsYXRlICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faGFuZGxlYmFycy5jb21waWxlKHRlbXBsYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZW5kZXIgd2lsbCByZW5kZXIgYSB0ZW1wbGF0ZSB3aXRoIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBQcm92aWRlIGVpdGhlciBhIHRlbXBsYXRlTmFtZSBvciBhIHByZS1jb21waWxlZCB0ZW1wbGF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBwcm92aWRlIHRvIHRoZSB0ZW1wbGF0ZVxuICAgKi9cbiAgcmVuZGVyIChjb25maWcsIGRhdGEpIHtcbiAgICAvLyBJZiBhIGN1c3RvbSB0ZW1wbGF0ZSBpcyBwcm92aWRlZCwgdXNlIGl0LFxuICAgIC8vIG90aGVyd2lzZSBmYWxsIGJhY2sgdG8gdGhlIHRlbXBsYXRlIG5hbWVcbiAgICAvLyBUT0RPKGJpbGx5KSBUaGlzIGludGVyZmFjZSBzaG91bGQgcHJvYmFibHkgYmUgbGVzcyB1Z2x5XG4gICAgaWYgKGNvbmZpZy50ZW1wbGF0ZSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNvbmZpZy50ZW1wbGF0ZShkYXRhKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlc1tjb25maWcudGVtcGxhdGVOYW1lXShkYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgZmluZC9yZW5kZXIgdGVtcGxhdGU6ICcgKyBjb25maWcudGVtcGxhdGVOYW1lLCBlKTtcbiAgICB9XG4gIH1cblxuICBfcmVnaXN0ZXJDdXN0b21IZWxwZXJzICgpIHtcbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdpZmVxJywgZnVuY3Rpb24gKGFyZzEsIGFyZzIsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiAoYXJnMSA9PT0gYXJnMikgPyBvcHRpb25zLmZuKHRoaXMpIDogb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignaWZub3RlcScsIGZ1bmN0aW9uIChhcmcxLCBhcmcyLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gKGFyZzEgIT09IGFyZzIpID8gb3B0aW9ucy5mbih0aGlzKSA6IG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2Zvcm1hdFBob25lTnVtYmVyJywgZnVuY3Rpb24gKHBob25lTnVtYmVyU3RyaW5nKSB7XG4gICAgICB2YXIgY2xlYW5lZCA9ICgnJyArIHBob25lTnVtYmVyU3RyaW5nKS5yZXBsYWNlKC9cXEQvZywgJycpO1xuICAgICAgdmFyIG1hdGNoID0gY2xlYW5lZC5tYXRjaCgvXigxfCk/KFxcZHszfSkoXFxkezN9KShcXGR7NH0pJC8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHZhciBpbnRsQ29kZSA9IChtYXRjaFsxXSA/ICcrMSAnIDogJycpO1xuICAgICAgICByZXR1cm4gW2ludGxDb2RlLCAnKCcsIG1hdGNoWzJdLCAnKSAnLCBtYXRjaFszXSwgJy0nLCBtYXRjaFs0XV0uam9pbignJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2Fzc2lnbicsIGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBvcHRpb25zID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAoIW9wdGlvbnMuZGF0YS5yb290KSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YS5yb290ID0ge307XG4gICAgICB9XG5cbiAgICAgIGxldCB2ID0gJyc7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIHYgPSB2ICsgYXJnc1tpXTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5kYXRhLnJvb3RbbmFtZV0gPSB2O1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignanNvbicsIGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG5hbWUgPT09IHVuZGVmaW5lZFxuICAgICAgICA/ICcnXG4gICAgICAgIDogSlNPTi5zdHJpbmdpZnkobmFtZSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlICovXG5cbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCBIYW5kbGViYXJzUmVuZGVyZXIgZnJvbSAnLi9oYW5kbGViYXJzcmVuZGVyZXInO1xuXG4vLyBJbiB0aGUgZnV0dXJlLCB0aGlzIHdpbGwgY29udGFpbiBhbGwgZGlmZmVyZW50IHR5cGVzIG9mIHJlbmRlcmVyc1xuLy8gRS5nLiBNdXN0YWNoZSwgU09ZLCBIYW5kbGVCYXJzLCBSZWFjdCwgZXRjLlxuZXhwb3J0IGNvbnN0IFJlbmRlcmVycyA9IHtcbiAgU09ZOiBSZW5kZXJlcixcbiAgSGFuZGxlYmFyczogSGFuZGxlYmFyc1JlbmRlcmVyXG59O1xuIiwiLyoqIEBtb2R1bGUgRE9NICovXG5cbi8qIGdsb2JhbCBIVE1MRWxlbWVudCwgSFRNTERvY3VtZW50LCBXaW5kb3csIEV2ZW50ICovXG5cbmxldCBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcbmxldCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG5cbi8qKlxuICogU3RhdGljIGludGVyZmFjZSBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgRE9NIEFQSS5cbiAqIEBuYW1lc3BhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9NIHtcbiAgc3RhdGljIHNldHVwIChkLCBwKSB7XG4gICAgZG9jdW1lbnQgPSBkO1xuICAgIHBhcnNlciA9IHA7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIGEgSFRNTEVsZW1lbnQgZnJvbSBhbmQgSFRNTCBzdHJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IGh0bWwgVGhlIEhUTUwgdG8gcGFyc2UgdG8gYSBET00gbm9kZS5cbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlIChodG1sKSB7XG4gICAgcmV0dXJuIHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgJ3RleHQvaHRtbCcpLmJvZHk7XG4gIH1cblxuICAvKipcbiAgICogcXVlcnkgdGhlIERPTSBmb3IgYSBnaXZlbiBjc3Mgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50IE9wdGlvbmFsIGNvbnRleHQgdG8gdXNlIGZvciBhIHNlYXJjaC4gRGVmYXVsdHMgdG8gZG9jdW1lbnQgaWYgbm90IHByb3ZpZGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgdGhlIENTUyBzZWxlY3RvciB0byBxdWVyeSBmb3JcbiAgICpcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSB0aGUgRklSU1Qgbm9kZSBpdCBmaW5kcywgaWYgYW55XG4gICAqL1xuICBzdGF0aWMgcXVlcnkgKHBhcmVudCwgc2VsZWN0b3IpIHtcbiAgICAvLyBGYWNhZGUsIHNoaWZ0aW5nIHRoZSBzZWxlY3RvciB0byB0aGUgcGFyZW50IGFyZ3VtZW50IGlmIG9ubHkgb25lXG4gICAgLy8gYXJndW1lbnQgaXMgcHJvdmlkZWRcbiAgICBpZiAoc2VsZWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2VsZWN0b3IgPSBwYXJlbnQ7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIFdpbmRvdyB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxEb2N1bWVudCkge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH1cblxuICAvKipcbiAgICogcXVlcnkgdGhlIERPTSBmb3IgYSBnaXZlbiBjc3Mgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50IE9wdGlvbmFsIGNvbnRleHQgdG8gdXNlIGZvciBhIHNlYXJjaC4gRGVmYXVsdHMgdG8gZG9jdW1lbnQgaWYgbm90IHByb3ZpZGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgdGhlIENTUyBzZWxlY3RvciB0byBxdWVyeSBmb3JcbiAgICpcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSB0aGUgRklSU1Qgbm9kZSBpdCBmaW5kcywgaWYgYW55XG4gICAqL1xuICBzdGF0aWMgcXVlcnlBbGwgKHBhcmVudCwgc2VsZWN0b3IpIHtcbiAgICAvLyBGYWNhZGUsIHNoaWZ0aW5nIHRoZSBzZWxlY3RvciB0byB0aGUgcGFyZW50IGFyZ3VtZW50IGlmIG9ubHkgb25lXG4gICAgLy8gYXJndW1lbnQgaXMgcHJvdmlkZWRcbiAgICBpZiAoc2VsZWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2VsZWN0b3IgPSBwYXJlbnQ7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxEb2N1bWVudCB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIFdpbmRvdykge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIH1cblxuICBzdGF0aWMgb25SZWFkeSAoY2IpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGVkJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKSB7XG4gICAgICBjYigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIERPTS5vbihkb2N1bWVudCwgJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlRWxlIHdpbGwgY3JlYXRlIGEge0hUTUxFbGVtZW50fSBhbmQgYXBwbHkgdGhlIHByb3BlcnRpZXMgYXR0cmlidXRlcyB0aHJvdWdoIGFuIG9iamVjdCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGVsIFRoZSBlbGVtZW50IGB0YWdgIG5hbWUgdG8gY29uc3RydWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzX2RhdGEgT3B0aW9uYWwgYXR0cmlidXRlcyB0byBhcHBseSB0byB0aGUgbmV3IEhUTUxFbGVtZW50XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlRWwgKGVsLCBvcHRzX2RhdGEgPSB7fSkge1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbCk7XG4gICAgbGV0IHByb3BzID0gT2JqZWN0LmtleXMob3B0c19kYXRhKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9wc1tpXSA9PT0gJ2NsYXNzJykge1xuICAgICAgICBET00uYWRkQ2xhc3Mobm9kZSwgb3B0c19kYXRhW3Byb3BzW2ldXSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBub2RlW3Byb3BzW2ldXSA9IG9wdHNfZGF0YVtwcm9wc1tpXV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgYXBwZW5kIChwYXJlbnQsIG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBub2RlID0gcGFyZW50O1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXJlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJlbnQgPSBET00ucXVlcnkocGFyZW50KTtcbiAgICB9XG5cbiAgICAvLyBTdXBwb3J0IEhUTUwgaW5qZWN0aW9uIGFzIHdlbGwgYXMgSFRNTEVsZW1lbnQgYXBwZW5kc1xuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBhcmVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyQmVnaW4nLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhZGRDbGFzcyAobm9kZSwgY2xhc3NOYW1lKSB7XG4gICAgbGV0IGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJywnKTtcbiAgICBsZXQgbGVuID0gY2xhc3Nlcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBub2RlLmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGVtcHR5IChwYXJlbnQpIHtcbiAgICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICBzdGF0aWMgY3NzIChzZWxlY3Rvciwgc3R5bGVzKSB7XG4gICAgbGV0IG5vZGUgPSBET00ucXVlcnkoc2VsZWN0b3IpO1xuXG4gICAgZm9yIChsZXQgcHJvcCBpbiBzdHlsZXMpIHtcbiAgICAgIG5vZGUuc3R5bGVbcHJvcF0gPSBzdHlsZXNbcHJvcF07XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGF0dHIgKHNlbGVjdG9yLCBhdHRyLCB2YWwpIHtcbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLnNldEF0dHJpYnV0ZShhdHRyLCB2YWwpO1xuICB9XG5cbiAgc3RhdGljIHRyaWdnZXIgKHNlbGVjdG9yLCBldmVudCwgc2V0dGluZ3MpIHtcbiAgICBsZXQgZSA9IG5ldyBFdmVudChldmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAnYnViYmxlcyc6IHRydWUsXG4gICAgICAnY2FuY2VsYWJsZSc6IHRydWVcbiAgICB9LCBzZXR0aW5ncyB8fCB7fSkpO1xuXG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5kaXNwYXRjaEV2ZW50KGUpO1xuICB9XG5cbiAgc3RhdGljIG9uIChzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgb2ZmIChzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZGVsZWdhdGUgKGN0eHQsIHNlbGVjdG9yLCBldnQsIGhhbmRsZXIpIHtcbiAgICBsZXQgZWwgPSBET00ucXVlcnkoY3R4dCk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIHdoaWxlICghdGFyZ2V0LmlzRXF1YWxOb2RlKGVsKSkge1xuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgICAgaGFuZGxlcihldmVudCwgdGFyZ2V0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU3RhdGUgKi9cblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi8uLi9jb3JlL2V2ZW50ZW1pdHRlci9ldmVudGVtaXR0ZXInO1xuXG4vKipcbiAqIFN0YXRlIGNvbnRhaW5zIHRoZSBkYXRhIGZvciB0aGUgY29tcG9uZW50XG4gKiBhbmQgZXhwb3NlcyBhbiB7RXZlbnRFbWl0dGVyfSBpbnRlcmZhY2Ugc28gdGhhdCBleHRlcm5hbFxuICogZGVwZW5kZW5jaWVzIGNhbiBsaXN0ZW4vaG9vayBzdWJzY3JpYmUgdG8gbWVzc2FnZXMvdXBkYXRlcy5cbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RhdGUgPSBkYXRhIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKiBOT1RFKGJpbGx5KTogRG9lcyBub3QgZmlyZSBhbiB1cGRhdGUgbWVzc2FnZVxuICAgKi9cbiAgaW5pdCAocHJvcCwgb3B0VmFsKSB7XG4gICAgdGhpcy5fc2V0KHByb3AsIG9wdFZhbCk7XG4gIH1cblxuICAvKipcbiAgICogc2V0dGVyIGZvciB0aGUgc3RhdGVcbiAgICogQHBhcmFtIHByb3Age3N0cmluZ3xPYmplY3R9IFRoZSBwcm9wZXJ0eSB0byBzZXRcbiAgICogQHBhcmFtIG9wdFZhbCBPcHRpb25hbCwgaWYgcHJvcCBpcyBhIHtzdHJpbmd9LCBpdCB3aWxsIGFzc2lnbiB0aGUgdmFsdWUgdG8gdGhhdCBwcm9wZXJ0eVxuICAgKi9cbiAgc2V0IChwcm9wLCBvcHRWYWwpIHtcbiAgICB0aGlzLl9zZXQocHJvcCwgb3B0VmFsKTtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldHRlciBmb3IgdGhlIHN0YXRlIGVuYWJsZXMgeW91IHRvIHVwZGF0ZSBhIHNpbmdsZSBwcm9wZXJ0eSwgb3IgY29tcGxldGUgc3RhdGVcbiAgICogZGVwZW5kaW5nIG9uIHRoZSBhcmd1bWVudHMgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSBwcm9wIHtzdHJpbmd8T2JqZWN0fSBUaGUgcHJvcGVydHkgdG8gc2V0XG4gICAqIEBwYXJhbSBvcHRWYWwgSWYgcHJvcCBpcyBhIHtzdHJpbmd9LCBwcm92aWRlIGl0cyB2YWx1ZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NldCAocHJvcCwgb3B0VmFsKSB7XG4gICAgaWYgKG9wdFZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9zdGF0ZSA9IHByb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0YXRlW3Byb3BdID0gb3B0VmFsO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSAoZGF0YSkge1xuICAgIHRoaXMuX3N0YXRlID0gZGF0YTtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGEgcHJvcGVydGllcyB2YWx1ZSBmcm9tIHRoZSBzdGF0ZVxuICAgKiBJZiBubyBwcm9wZXJ0eSBwcm92aWRlZCwgcmV0dXJuIHRoZSBmdWxsIHN0YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRQcm9wIG9wdGlvbmFsIHByb3BlcnR5IHRvIHJldHJpZXZlXG4gICAqL1xuICBnZXQgKG9wdFByb3ApIHtcbiAgICBpZiAob3B0UHJvcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zdGF0ZVtvcHRQcm9wXTtcbiAgfVxuXG4gIGhhcyAocHJvcCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZVtwcm9wXSAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgYXNKU09OICgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gIH1cbn1cbiIsIi8qKlxuICogTW9kZWwgZm9yIHRoZSBhbmFseXRpY3MgZXZlbnQgdHlwZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmFseXRpY3NFdmVudCB7XG4gIGNvbnN0cnVjdG9yICh0eXBlLCBsYWJlbCkge1xuICAgIHRoaXMuZXZlbnRUeXBlID0gdHlwZS50b1VwcGVyQ2FzZSgpO1xuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBwcm92aWRlZCBvcHRpb25zIHRvIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBBZGRpdGlvbmFsIG9wdGlvbnMgZm9yIHRoZSBldmVudFxuICAgKi9cbiAgYWRkT3B0aW9ucyAob3B0aW9ucykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBldmVudCBpbiB0aGUgYXBpIGZvcm1hdCwgdHlwaWNhbGx5IGZvciByZXBvcnRpbmcgdG8gdGhlIGFwaVxuICAgKi9cbiAgdG9BcGlFdmVudCAoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBBbmFseXRpY3NSZXBvcnRlciAqL1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4vYW5hbHl0aWNzZXZlbnQnO1xuaW1wb3J0IHsgQW5zd2Vyc0FuYWx5dGljc0Vycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgeyBBTkFMWVRJQ1NfQkFTRV9VUkwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIENsYXNzIGZvciByZXBvcnRpbmcgYW5hbHl0aWNzIGV2ZW50cyB0byB0aGUgc2VydmVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuYWx5dGljc1JlcG9ydGVyIHtcbiAgY29uc3RydWN0b3IgKGFwaUtleSwgYW5zd2Vyc0tleSkge1xuICAgIHRoaXMuX2FwaUtleSA9IGFwaUtleTtcbiAgICB0aGlzLl9hbnN3ZXJzS2V5ID0gYW5zd2Vyc0tleTtcblxuICAgIC8vIFRPRE8oamRlbGVybWUpOiBUZW1wb3Jhcnkgd29ya2Fyb3VuZCBmb3IgZ2V0dGluZyBpbnRlcm5hbCBidXNpbmVzcyBJRCBmb3IgdGhlIGFuYWx5dGljcyBlbmRwb2ludFxuICAgIC8vIFRvIGJlIHJlbW92ZWQgd2hlbiB0aGUgZW5kcG9pbnQgaXMgbW92ZWQgYmVoaW5kIGxpdmVhcGlcbiAgICBjb25zdCBidXNpbmVzc0lkUmVxID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9xdWVyeScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IDIwMTkwMzAxLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6ICcnLFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuX2Fuc3dlcnNLZXlcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGJ1c2luZXNzSWRSZXEuZ2V0KCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKGQgPT4ge1xuICAgICAgdGhpcy5fYnVzaW5lc3NJZCA9IGQucmVzcG9uc2UuYnVzaW5lc3NJZDtcbiAgICB9KTtcbiAgfVxuXG4gIHJlcG9ydCAoZXZlbnQpIHtcbiAgICBpZiAoIShldmVudCBpbnN0YW5jZW9mIEFuYWx5dGljc0V2ZW50KSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNBbmFseXRpY3NFcnJvcignVHJpZWQgdG8gc2VuZCBpbnZhbGlkIGFuYWx5dGljcyBldmVudCcsIGV2ZW50KTtcbiAgICB9XG5cbiAgICBldmVudC5hZGRPcHRpb25zKHsgYW5zd2Vyc0tleTogdGhpcy5fYW5zd2Vyc0tleSB9KTtcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBiYXNlVXJsOiBBTkFMWVRJQ1NfQkFTRV9VUkwsXG4gICAgICBlbmRwb2ludDogYC9yZWFsdGltZWFuYWx5dGljcy9kYXRhL2Fuc3dlcnMvJHt0aGlzLl9idXNpbmVzc0lkfWAsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IDIwMTkwMzAxLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdkYXRhJzogZXZlbnQudG9BcGlFdmVudCgpXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXF1ZXN0LnBvc3QoKVxuICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyKTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2hBcGkgfSBmcm9tICcuL3NlYXJjaC9zZWFyY2hhcGknO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBbmFseXRpY3NSZXBvcnRlciB9IGZyb20gJy4vYW5hbHl0aWNzL2FuYWx5dGljc3JlcG9ydGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kdWxlRGF0YSB9IGZyb20gJy4vc3RvcmFnZS9tb2R1bGVkYXRhJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZS9zdG9yYWdlJztcbiIsIi8qKiBAbW9kdWxlIENvbXBvbmVudCAqL1xuXG5pbXBvcnQgeyBSZW5kZXJlcnMgfSBmcm9tICcuLi9yZW5kZXJpbmcvY29uc3QnO1xuXG5pbXBvcnQgRE9NIGZyb20gJy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0YXRlIGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgQW5hbHl0aWNzUmVwb3J0ZXIgfSBmcm9tICcuLi8uLi9jb3JlJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IEFuYWx5dGljc0V2ZW50IGZyb20gJy4uLy4uL2NvcmUvYW5hbHl0aWNzL2FuYWx5dGljc2V2ZW50JztcblxuLyoqXG4gKiBDb21wb25lbnQgaXMgYW4gYWJzdHJhY3Rpb24gdGhhdCBlbmNhcHN1bGF0ZXMgc3RhdGUsIGJlaGF2aW9yLFxuICogYW5kIHZpZXcgZm9yIGEgcGFydGljdWxhciBjaHVuayBvZiBmdW5jdGlvbmFsaXR5IG9uIHRoZSBwYWdlLlxuICpcbiAqIFRoZSBBUEkgZXhwb3NlcyBldmVudCBsaWZlIGN5Y2xlIGhvb2tzIGZvciB3aGVuIHRoaW5ncyBhcmUgcmVuZGVyZWQsXG4gKiBtb3VudGVkLCBjcmVhdGVkLCBldGMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yICh0eXBlLCBvcHRzID0ge30pIHtcbiAgICAvLyBTaW1wbGUgZmFjYWRlIHBhdHRlcm4gdG8gZW5hYmxlIHRoZSB1c2VyIHRvIHBhc3MgYSBzaW5nbGUgb2JqZWN0XG4gICAgLy8gY29udGFpbmluZyBhbGwgdGhlIG5lY2Vzc2FyeSBvcHRpb25zIGFuZCBzZXR0aW5nc1xuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG9wdHMgPSB0eXBlO1xuICAgICAgdHlwZSA9IG9wdHMudHlwZTtcbiAgICB9XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFVuaXF1ZSBuYW1lIG9mIHRoaXMgY29tcG9uZW50IGluc3RhbmNlXG4gICAgICogVXNlZCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIG90aGVyIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgdHlwZVxuICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5uYW1lID0gb3B0cy5uYW1lIHx8IHRoaXMuY29uc3RydWN0b3IubmFtZTtcblxuICAgIC8qKlxuICAgICAqIENhY2hlIHRoZSBvcHRpb25zIHNvIHRoYXQgd2UgY2FuIHByb3BvZ2F0ZSBwcm9wZXJseSB0byBjaGlsZCBjb21wb25lbnRzXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9vcHRzID0gb3B0cztcblxuICAgIC8qKlxuICAgICAqIEFuIGlkZW50aWZpZXIgdXNlZCB0byBjbGFzc2lmeSB0aGUgdHlwZSBvZiBjb21wb25lbnQuXG4gICAgICogVGhlIGNvbXBvbmVudCBtYW5hZ2VyIHVzZXMgdGhpcyBpbmZvcm1hdGlvbiBpbiBvcmRlciB0byBwZXJzaXN0IGFuZCBvcmdhbml6ZSBjb21wb25lbnRzXG4gICAgICogQHR5cGUge3N0cmluZ3xDb21wb25lbnRUeXBlfVxuICAgICAqL1xuICAgIHRoaXMuX3R5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgcGFyZW50IGNvbXBvbmVudCwgaWYgZXhpc3RzXG4gICAgICogQHR5cGUge0NvbXBvbmVudH1cbiAgICAgKi9cbiAgICB0aGlzLl9wYXJlbnQgPSBvcHRzLnBhcmVudCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBjb250YWluZXIgZm9yIGFsbCB0aGUgY2hpbGQgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtDb21wb25lbnRbXX1cbiAgICAgKi9cbiAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN0YXRlIChkYXRhKSBvZiB0aGUgY29tcG9uZW50IHRvIGJlIHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9zdGF0ZSA9IG5ldyBTdGF0ZShvcHRzLnN0YXRlKTtcblxuICAgIC8qKlxuICAgICAqIFRPRE8oYmlsbHkpIFRoaXMgc2hvdWxkIGJlICdzZXJ2aWNlcydcbiAgICAgKi9cbiAgICB0aGlzLmNvcmUgPSBvcHRzLmNvcmUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlciwgd2hpY2ggY29udGFpbnMgYWxsIG9mIHRoZSBjb21wb25lbnQgY2xhc3Nlc1xuICAgICAqIGVsaWdpYmxlIHRvIGJlIGNyZWF0ZWRcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50TWFuYWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIgPSBvcHRzLmNvbXBvbmVudE1hbmFnZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBhbmFseXRpY3MgcmVwb3J0ZXIsIHVzZWQgdG8gcmVwb3J0IGV2ZW50cyBmb3IgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7QW5hbHl0aWNzUmVwb3J0ZXJ9XG4gICAgICovXG4gICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlciA9IG9wdHMuYW5hbHl0aWNzUmVwb3J0ZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBET00gbm9kZSB0aGF0IHRoZSBjb21wb25lbnQgd2lsbCBiZSBhcHBlbmRlZCB0byB3aGVuIG1vdW50ZWQvcmVuZGVyZWQuXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIGlmICh0eXBlb2Ygb3B0cy5jb250YWluZXIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBgY29udGFpbmVyYCBvcHRpb24gZm9yIGNvbXBvbmVudCBjb25maWd1cmF0aW9uLiBNdXN0IGJlIG9mIHR5cGUgYHN0cmluZ2AuJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jb250YWluZXIgPSBET00ucXVlcnkob3B0cy5jb250YWluZXIpIHx8IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IERPTS5xdWVyeSh0aGlzLl9wYXJlbnQuX2NvbnRhaW5lciwgb3B0cy5jb250YWluZXIpO1xuXG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgcGFyZW50LCBhbmQgdGhlIGNvbnRhaW5lciBpcyBtaXNzaW5nIGZyb20gdGhlIERPTSxcbiAgICAgIC8vIHdlIGNvbnN0cnVjdCB0aGUgY29udGFpbmVyIGFuZCBhcHBlbmQgaXQgdG8gdGhlIHBhcmVudFxuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBET00uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogb3B0cy5jb250YWluZXIuc3Vic3RyaW5nKDEsIG9wdHMuY29udGFpbmVyLmxlbmd0aClcbiAgICAgICAgfSk7XG4gICAgICAgIERPTS5hcHBlbmQodGhpcy5fcGFyZW50Ll9jb250YWluZXIsIHRoaXMuX2NvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBjb250YWluZXIgRE9NIG5vZGU6ICcgKyBvcHRzLmNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gY2xhc3MgdG8gYmUgYXBwbGllZCB0byB7dGhpcy5fY29udGFpbmVyfSBub2RlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9jbGFzc05hbWUgPSBvcHRzLmNsYXNzIHx8ICdjb21wb25lbnQnO1xuXG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gcmVuZGVyIGZ1bmN0aW9uIHRvIGJlIHVzZWQgaW5zdGVhZCBvZiB1c2luZyB0aGUgZGVmYXVsdCByZW5kZXJlclxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXIgPSBvcHRzLnJlbmRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGRlZmF1bHQge1JlbmRlcmVyfSB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgcmVuZGVyaW5nIHRoZSB0ZW1wbGF0ZVxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXJlciA9IG9wdHMucmVuZGVyZXIgfHwgUmVuZGVyZXJzLkhhbmRsZWJhcnM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgc3RyaW5nIHRvIHVzZSBmb3IgcmVuZGVyaW5nIHRoZSBjb21wb25lbnRcbiAgICAgKiBJZiB0aGlzIGlzIGxlZnQgZW1wdHksIHdlIGxvb2t1cCB0aGUgdGVtcGxhdGUgdGhlIGJhc2UgdGVtcGxhdGVzIHVzaW5nIHRoZSB0ZW1wbGF0ZU5hbWVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlID0gb3B0cy50ZW1wbGF0ZSA/IHRoaXMuX3JlbmRlcmVyLmNvbXBpbGUob3B0cy50ZW1wbGF0ZSkgOiBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlTmFtZSB0byB1c2UgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50LlxuICAgICAqIFRoaXMgaXMgb25seSB1c2VkIGlmIF90ZW1wbGF0ZSBpcyBlbXB0eS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IG9wdHMudGVtcGxhdGVOYW1lIHx8ICdkZWZhdWx0JztcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHN0YXRlIGluZGljYXRpbmcgd2hldGhlciBvciBub3QgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBtb3VudGVkIHRvIHRoZSBET01cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjaywgdGhhdHMgdXNlZCB0byB0cmFuc2Zvcm0gdGhlIGludGVybmFsIGRhdGFcbiAgICAgKiBtb2RlbHMgb2YgdGhlIGNvbXBvbmVudHMsIGJlZm9yZSBpdCBnZXRzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudCBzdGF0ZS5cbiAgICAgKiBCeSBkZWZhdWx0LCBubyB0cmFuc2Zvcm1hdGlvbiBoYXBwZW5zLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLnRyYW5zZm9ybURhdGEgPSBvcHRzLnRyYW5zZm9ybURhdGEgfHwgdGhpcy50cmFuc2Zvcm1EYXRhIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIGEgY29tcG9uZW50IGlzIGNyZWF0ZWQuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMub25DcmVhdGUgPSBvcHRzLm9uQ3JlYXRlIHx8IHRoaXMub25DcmVhdGUgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnQgaXMgTW91bnRlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vbk1vdW50ID0gb3B0cy5vbk1vdW50IHx8IHRoaXMub25Nb3VudCB8fCBmdW5jdGlvbiAoKSB7IH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnRzIHN0YXRlIGlzIHVwZGF0ZWQuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMub25VcGRhdGUgPSBvcHRzLm9uVXBkYXRlIHx8IHRoaXMub25VcGRhdGUgfHwgZnVuY3Rpb24gKCkgeyB9O1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0NvbXBvbmVudCc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpbml0IChvcHRzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShvcHRzLmRhdGEgfHwgb3B0cy5zdGF0ZSB8fCB7fSk7XG4gICAgdGhpcy5vbkNyZWF0ZSgpO1xuICAgIHRoaXMuX3N0YXRlLm9uKCd1cGRhdGUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uVXBkYXRlKCk7XG4gICAgICB0aGlzLm1vdW50KCk7XG4gICAgfSk7XG5cbiAgICBET00uYWRkQ2xhc3ModGhpcy5fY29udGFpbmVyLCB0aGlzLl9jbGFzc05hbWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICB0aGlzLl9zdGF0ZS5zZXQoZGF0YSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRTdGF0ZSAocHJvcCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5nZXQocHJvcCk7XG4gIH1cblxuICBoYXNTdGF0ZSAocHJvcCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5oYXMocHJvcCk7XG4gIH1cblxuICB0cmFuc2Zvcm1EYXRhIChkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBhZGRDaGlsZCAoZGF0YSwgdHlwZSwgb3B0cykge1xuICAgIGxldCBjaGlsZENvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoXG4gICAgICB0eXBlLFxuICAgICAgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcbiAgICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9LCBvcHRzIHx8IHt9LCB7XG4gICAgICAgIF9wYXJlbnRPcHRzOiB0aGlzLl9vcHRzXG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGNoaWxkQ29tcG9uZW50KTtcbiAgICByZXR1cm4gY2hpbGRDb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSByZW5kZXIgbWV0aG9kIHRvIGJlIHVzZWQgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlbmRlclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBzZXRSZW5kZXIgKHJlbmRlcikge1xuICAgIHRoaXMuX3JlbmRlciA9IHJlbmRlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHJlbmRlcmVyIGZvciB0aGUgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7UmVuZGVyZXJUeXBlfSByZW5kZXJlclxuICAgKi9cbiAgc2V0UmVuZGVyZXIgKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSBSZW5kZXJlcnNbcmVuZGVyZXJdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRlbXBsYXRlIGZvciB0aGUgY29tcG9uZW50IHRvIHVzZSB3aGVuIHJlbmRlcmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAgICovXG4gIHNldFRlbXBsYXRlICh0ZW1wbGF0ZSkge1xuICAgIHRoaXMuX3RlbXBsYXRlID0gdGhpcy5fcmVuZGVyZXIuY29tcGlsZSh0ZW1wbGF0ZSk7XG4gIH1cblxuICB1bk1vdW50ICgpIHtcbiAgICBET00uZW1wdHkodGhpcy5fY29udGFpbmVyKTtcbiAgfVxuXG4gIG1vdW50ICgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy51bk1vdW50KCk7XG4gICAgaWYgKHRoaXMuYmVmb3JlTW91bnQoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIERPTS5hcHBlbmQodGhpcy5fY29udGFpbmVyLCB0aGlzLnJlbmRlcih0aGlzLl9zdGF0ZS5hc0pTT04oKSkpO1xuXG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9vbk1vdW50KCk7XG5cbiAgICAvLyBBdHRhY2ggYW5hbHl0aWNzIGhvb2tzIGFzIG5lY2Vzc2FyeVxuICAgIGxldCBkb21Ib29rcyA9IERPTS5xdWVyeUFsbCh0aGlzLl9jb250YWluZXIsICdbZGF0YS1ldmVudHR5cGVdJyk7XG4gICAgZG9tSG9va3MuZm9yRWFjaCh0aGlzLl9jcmVhdGVBbmFseXRpY3NIb29rLmJpbmQodGhpcykpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfb25Nb3VudCAoKSB7XG4gICAgdGhpcy5vbk1vdW50KHRoaXMpO1xuICAgIGlmICh0aGlzLl9jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgIGNoaWxkLl9vbk1vdW50KCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogcmVuZGVyIHRoZSB0ZW1wbGF0ZSB1c2luZyB0aGUge1JlbmRlcmVyfSB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGFuZCB0ZW1wbGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICByZW5kZXIgKGRhdGEpIHtcbiAgICB0aGlzLmJlZm9yZVJlbmRlcigpO1xuICAgIGRhdGEgPSB0aGlzLnRyYW5zZm9ybURhdGEoZGF0YSkgfHwgdGhpcy50cmFuc2Zvcm1EYXRhKHRoaXMuX3N0YXRlLmdldCgpKTtcblxuICAgIGxldCBodG1sID0gJyc7XG4gICAgLy8gVXNlIGVpdGhlciB0aGUgY3VzdG9tIHJlbmRlciBmdW5jdGlvbiBvciB0aGUgaW50ZXJuYWwgcmVuZGVyZXJcbiAgICAvLyBkZXBlbmRhbnQgb24gdGhlIGNvbXBvbmVudCBjb25maWd1cmF0aW9uXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGh0bWwgPSB0aGlzLl9yZW5kZXIoZGF0YSk7XG4gICAgICBpZiAodHlwZW9mIGh0bWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUmVuZGVyIG1ldGhvZCBtdXN0IHJldHVybiBIVE1MIGFzIHR5cGUge3N0cmluZ30nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVuZGVyIHRoZSBleGlzdGluZyB0ZW1wbGF0ZXMgYXMgYSBzdHJpbmdcbiAgICAgIGh0bWwgPSB0aGlzLl9yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgICB0ZW1wbGF0ZTogdGhpcy5fdGVtcGxhdGUsXG4gICAgICAgIHRlbXBsYXRlTmFtZTogdGhpcy5fdGVtcGxhdGVOYW1lXG4gICAgICB9LCBkYXRhKTtcbiAgICB9XG5cbiAgICAvLyBXZSBjcmVhdGUgYW4gSFRNTCBEb2N1bWVudCBmcmFnbWVudCB3aXRoIHRoZSByZW5kZXJlZCBzdHJpbmdcbiAgICAvLyBTbyB0aGF0IHdlIGNhbiBxdWVyeSBpdCBmb3IgcHJvY2Vzc2luZyBvZiBzdWIgY29tcG9uZW50c1xuICAgIGxldCBlbCA9IERPTS5jcmVhdGUoaHRtbCk7XG5cbiAgICAvLyBQcm9jZXNzIHRoZSBET00gdG8gZGV0ZXJtaW5lIGlmIHdlIHNob3VsZCBjcmVhdGVcbiAgICAvLyBpbi1tZW1vcnkgc3ViLWNvbXBvbmVudHMgZm9yIHJlbmRlcmluZ1xuICAgIGxldCBkb21Db21wb25lbnRzID0gRE9NLnF1ZXJ5QWxsKGVsLCAnW2RhdGEtY29tcG9uZW50XScpO1xuICAgIGRvbUNvbXBvbmVudHMuZm9yRWFjaChjID0+IHRoaXMuX2NyZWF0ZVN1YmNvbXBvbmVudChjLCBkYXRhKSk7XG5cbiAgICB0aGlzLmFmdGVyUmVuZGVyKCk7XG4gICAgcmV0dXJuIGVsLmlubmVySFRNTDtcbiAgfVxuXG4gIF9jcmVhdGVTdWJjb21wb25lbnQgKGRvbUNvbXBvbmVudCwgZGF0YSkge1xuICAgIGxldCBkYXRhc2V0ID0gZG9tQ29tcG9uZW50LmRhdGFzZXQ7XG4gICAgbGV0IHR5cGUgPSBkYXRhc2V0LmNvbXBvbmVudDtcbiAgICBsZXQgcHJvcCA9IGRhdGFzZXQucHJvcDtcbiAgICBsZXQgb3B0cyA9IGRhdGFzZXQub3B0cyA/IEpTT04ucGFyc2UoZGF0YXNldC5vcHRzKSA6IHt9O1xuXG4gICAgLy8gUmVuZGVyaW5nIGEgc3ViIGNvbXBvbmVudCBzaG91bGQgYmUgd2l0aGluIHRoZSBjb250ZXh0LFxuICAgIC8vIG9mIHRoZSBub2RlIHRoYXQgd2UgcHJvY2Vzc2VkIGl0IGZyb21cbiAgICBvcHRzID0gT2JqZWN0LmFzc2lnbihvcHRzLCB7XG4gICAgICBjb250YWluZXI6IGRvbUNvbXBvbmVudFxuICAgIH0pO1xuXG4gICAgbGV0IGNoaWxkRGF0YSA9IGRhdGFbcHJvcF07XG5cbiAgICAvLyBUT0RPKGJpbGx5KSBSaWdodCBub3csIGlmIHdlIHByb3ZpZGUgYW4gYXJyYXkgYXMgdGhlIGRhdGEgcHJvcCxcbiAgICAvLyB0aGUgYmVoYXZpb3IgaXMgdG8gY3JlYXRlIG1hbnkgY29tcG9uZW50cyBmb3IgZWFjaCBpdGVtIGluIHRoZSBhcnJheS5cbiAgICAvLyBUSEFUIGludGVyZmFjZSBTSE9VTEQgY2hhbmdlIHRvIHVzZSBhIGRpZmZlcmVudCBwcm9wZXJ0eSB0aGF0IGRlZmluZXNcbiAgICAvLyB3aGV0aGVyIHRvIGFycmF5IGRhdGEgc2hvdWxkIGJlIHVzZWQgZm9yIGEgc2luZ2xlIGNvbXBvbmVudCBvclxuICAgIC8vIHRvIGNyZWF0ZSBtYW55IGNvbXBvbmVudHMgZm9yIGVhY2ggaXRlbS5cbiAgICAvLyBPdmVybG9hZGluZyBhbmQgaGF2aW5nIHRoaXMgc2lkZSBlZmZlY3QgaXMgdW5pbnR1aXRpdmUgYW5kIFdST05HXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNoaWxkRGF0YSkpIHtcbiAgICAgIGxldCBjaGlsZENvbXBvbmVudCA9IHRoaXMuYWRkQ2hpbGQoY2hpbGREYXRhLCB0eXBlLCBvcHRzKTtcbiAgICAgIERPTS5hcHBlbmQoZG9tQ29tcG9uZW50LCBjaGlsZENvbXBvbmVudC5yZW5kZXIoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlLCByZW5kZXIgdGhlIGNvbXBvbmVudCBhcyBleHBlY3RlZFxuICAgIGxldCBjaGlsZEhUTUwgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNoaWxkQ29tcG9uZW50ID0gdGhpcy5hZGRDaGlsZChjaGlsZERhdGFbaV0sIHR5cGUsIG9wdHMpO1xuICAgICAgY2hpbGRIVE1MLnB1c2goY2hpbGRDb21wb25lbnQucmVuZGVyKCkpO1xuICAgIH1cblxuICAgIERPTS5hcHBlbmQoZG9tQ29tcG9uZW50LCBjaGlsZEhUTUwuam9pbignJykpO1xuICB9XG5cbiAgX2NyZWF0ZUFuYWx5dGljc0hvb2sgKGRvbUNvbXBvbmVudCkge1xuICAgIGNvbnN0IGRhdGFzZXQgPSBkb21Db21wb25lbnQuZGF0YXNldDtcbiAgICBjb25zdCB0eXBlID0gZGF0YXNldC5ldmVudHR5cGU7XG4gICAgY29uc3QgbGFiZWwgPSBkYXRhc2V0LmV2ZW50bGFiZWw7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGRhdGFzZXQuZXZlbnRvcHRpb25zID8gSlNPTi5wYXJzZShkYXRhc2V0LmV2ZW50b3B0aW9ucykgOiB7fTtcblxuICAgIERPTS5vbihkb21Db21wb25lbnQsICdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBBbmFseXRpY3NFdmVudCh0eXBlLCBsYWJlbCk7XG4gICAgICBldmVudC5hZGRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgdGhpcy5hbmFseXRpY3NSZXBvcnRlci5yZXBvcnQoZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uQ3JlYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgY29uc3RydWN0ZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uQ3JlYXRlIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25VcGRhdGUgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgY2hhbmdlc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25VcGRhdGUgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBiZWZvcmVSZW5kZXIgZXZlbnQgaXMgdHJpZ2dlcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHJlbmRlcmVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBiZWZvcmVSZW5kZXIgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBhZnRlclJlbmRlciBldmVudCBpcyB0cmlnZ2VyZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYWZ0ZXJSZW5kZXIgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvbk1vdW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgYXBwZW5kZWQgdG8gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25Nb3VudCAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uVW5Nb3VudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIHJlbW92ZWQgZnJvbSB0aGUgRE9NXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvblVuTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBiZWZvcmVNb3VudCBpcyB0cmlnZ2VyZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZCB0byB0aGUgRE9NXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBiZWZvcmVNb3VudCAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uRGVzdHJveSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25EZXN0cm95IChjYikge1xuXG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIE5hdmlnYXRpb25Db21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG4vKipcbiAqIFRoZSBUYWIgaXMgYSBtb2RlbCB0aGF0IGlzIHVzZWQgdG8gcG93ZXIgdGhlIE5hdmlnYXRpb24gdGFicyBpbiB0aGUgdmlldy5cbiAqIEl0J3MgaW5pdGlhbGl6ZWQgdGhyb3VnaCB0aGUgY29uZmlndXJhdGlvbiBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50LlxuICovXG5leHBvcnQgY2xhc3MgVGFiIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSB0YWIgdGhhdCBpcyBleHBvc2VkIGZvciB0aGUgbGlua1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbCA9IGNvbmZpZy5sYWJlbDtcbiAgICBpZiAodHlwZW9mIHRoaXMubGFiZWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCdsYWJlbCBpcyBhIHJlcXVpcmVkIGNvbmZpZ3VyYXRpb24gb3B0aW9uIGZvciB0YWIuJywgJ05hdmlnYXRpb25Db21wb25lbnQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcGxldGUgVVJMLCBpbmNsdWRpbmcgdGhlIHBhcmFtc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy51cmwgPSBjb25maWcudXJsO1xuICAgIGlmICh0eXBlb2YgdGhpcy51cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgQW5zd2Vyc0NvbXBvbmVudEVycm9yKCd1cmwgaXMgYSByZXF1aXJlZCBjb25maWd1cmF0aW9uIG9wdGlvbiBmb3IgdGFiLicsICdOYXZpZ2F0aW9uQ29tcG9uZW50Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlcnZlcnNpZGUgdmVydGljYWwgY29uZmlnIGlkIHRoYXQgdGhpcyBpcyByZWZlcmVuY2VkIHRvLlxuICAgICAqIEJ5IHByb3ZpZGluZyB0aGlzLCBlbmFibGVzIGR5bmFtaWMgc29ydGluZyBiYXNlZCBvbiByZXN1bHRzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5jb25maWdJZCA9IGNvbmZpZy5jb25maWdJZCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhc2UgVVJMIHVzZWQgZm9yIGNvbnN0cnVjdGluZyB0aGUgVVJMIHdpdGggcGFyYW1zXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmJhc2VVcmwgPSBjb25maWcudXJsO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHNob3cgdGhpcyB0YWIgZmlyc3QgaW4gdGhlIG9yZGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc0ZpcnN0ID0gY29uZmlnLmlzRmlyc3QgfHwgZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRvIGFwcGx5IGEgc3BlY2lhbCBjbGFzcyB0byB0aGVcbiAgICAgKiBtYXJrdXAgdG8gZGV0ZXJtaW5lIGlmIGl0J3MgYW4gYWN0aXZlIHRhYlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNBY3RpdmUgPSBjb25maWcuaXNBY3RpdmUgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogZnJvbSB3aWxsIGNvbnN0cnVjdCBhIG1hcCBvZiBjb25maWdJZCB0byB7VGFifSBmcm9tXG4gICAqIGEgY29uZmlndXJhdGlvbiBmaWxlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0YWJzQ29uZmlnIHRoZSBjb25maWd1cmF0aW9uIHRvIHVzZVxuICAgKi9cbiAgc3RhdGljIGZyb20gKHRhYnNDb25maWcpIHtcbiAgICBsZXQgdGFicyA9IHt9O1xuICAgIC8vIFBhcnNlIHRoZSBvcHRpb25zIGFuZCBidWlsZCBvdXQgb3VyIHRhYnMgYW5kXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzQ29uZmlnLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdGFiID0gdGFic0NvbmZpZ1tpXTtcbiAgICAgIC8vIEZvciB0YWJzIHdpdGhvdXQgY29uZmlnIGlkcywgbWFwIHRoZWlyIFVSTCB0byB0aGUgY29uZmlnSURcbiAgICAgIC8vIHRvIGF2b2lkIGR1cGxpY2F0aW9uIG9mIHJlbmRlcnNcbiAgICAgIGlmICh0YWIuY29uZmlnSWQgPT09IHVuZGVmaW5lZCAmJiB0YWJzW3RhYi5jb25maWdJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YWIuY29uZmlnSWQgPSB0YWIudXJsO1xuICAgICAgfVxuXG4gICAgICB0YWJzW3RhYi5jb25maWdJZF0gPSBuZXcgVGFiKHRhYik7XG4gICAgfVxuICAgIHJldHVybiB0YWJzO1xuICB9XG59XG5cbi8qKlxuICogTmF2aWdhdGlvbkNvbXBvbmVudCBleHBvc2VzIGFuIGludGVyZmFjZSBmb3IgYnVpbGRpbmcgYSBkeW5hbWljXG4gKiBuYXZpZ2F0aW9uIHRoYXQgaXMgcG93ZXJlZCBieSB1bml2ZXJzYWwgc2VhcmNoIHVwZGF0ZXMuXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGF0YSBzdG9yYWdlIGtleVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLk5BVklHQVRJT047XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGFuZGxlYmFycyB0ZW1wbGF0ZSB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ25hdmlnYXRpb24vbmF2aWdhdGlvbic7XG5cbiAgICAvKipcbiAgICAgKiBVbm9yZGVyZWQgbWFwIG9mIGVhY2ggdGFiLCBrZXllZCBieSBWUyBjb25maWdJZFxuICAgICAqIEB0eXBlIHtPYmplY3QuPFN0cmluZywgT2JqZWN0Pn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RhYnMgPSBUYWIuZnJvbShjb25maWcudGFicyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3JkZXIgb2YgdGhlIHRhYnMsIHBhcnNlZCBmcm9tIGNvbmZpZ3VyYXRpb24gb3IgVVJMLlxuICAgICAqIFRoaXMgZ2V0cyB1cGRhdGVkIGJhc2VkIG9uIHRoZSBzZXJ2ZXIgcmVzdWx0c1xuICAgICAqIEB0eXBlIHtBcnJheS48U3RyaW5nPn0gVGhlIGxpc3Qgb2YgVlMgY29uZmlnSWRzXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90YWJPcmRlciA9IHRoaXMuZ2V0RGVmYXVsdFRhYk9yZGVyKGNvbmZpZy50YWJzLCB0aGlzLmdldFVybFBhcmFtcygpKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdOYXZpZ2F0aW9uJztcbiAgfVxuXG4gIC8qKlxuICAgKiBTaW5jZSB0aGUgc2VydmVyIGRhdGEgb25seSBwcm92aWRlcyBhIGxpc3Qgb2ZcbiAgICogVlMgY29uZmlnSWRzLCB3ZSBuZWVkIHRvIGNvbXB1dGUgYW5kIHRyYW5zZm9ybVxuICAgKiB0aGUgZGF0YSBpbnRvIHRoZSBwcm9wZXIgZm9ybWF0IGZvciByZW5kZXJpbmcuXG4gICAqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBpZiAoZGF0YS50YWJPcmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl90YWJPcmRlciA9IHRoaXMubWVyZ2VUYWJPcmRlcihkYXRhLnRhYk9yZGVyLCB0aGlzLl90YWJPcmRlcik7XG4gICAgfVxuXG4gICAgLy8gU2luY2UgdGhlIHRhYiBvcmRlcmluZyBjYW4gY2hhbmdlIGJhc2VkIG9uIHRoZSBzZXJ2ZXIgZGF0YVxuICAgIC8vIHdlIG5lZWQgdG8gdXBkYXRlIGVhY2ggdGFicyBVUkwgdG8gaW5jbHVkZSB0aGUgb3JkZXIgYXMgcGFydCBvZiB0aGVpciBwYXJhbXMuXG4gICAgLy8gVGhpcyBoZWxwcyB3aXRoIHBlcnNpc3Rpbmcgc3RhdGUgYWNyb3NzIHZlcnRpY2Fscy5cbiAgICBsZXQgdGFicyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdGFiT3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB0YWIgPSB0aGlzLl90YWJzW3RoaXMuX3RhYk9yZGVyW2ldXTtcbiAgICAgIGlmICh0YWIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YWIudXJsID0gdGhpcy5nZW5lcmF0ZVRhYlVybCh0YWIuYmFzZVVybCwgdGhpcy5nZXRVcmxQYXJhbXMoKSk7XG4gICAgICAgIHRhYnMucHVzaCh0YWIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZSh7XG4gICAgICB0YWJzOiB0YWJzXG4gICAgfSk7XG4gIH1cblxuICBnZXRVcmxQYXJhbXMgKCkge1xuICAgIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXREZWZhdWx0VGFiT3JkZXIgd2lsbCBjb21wdXRlIHRoZSBpbml0aWFsIHRhYiBvcmRlcmluZyBiYXNlZFxuICAgKiBvbiBhIGNvbWJpbmF0aW9uIG9mIHRoZSBjb25maWd1cmF0aW9uIHByb3ZpZGVkIGRpcmVjdGx5IHRvIHRoZSBjb21wb25lbnRcbiAgICogYW5kIHRoZSB1cmwgcGFyYW1zLlxuICAgKiBAcGFyYW0ge09iamVjdFtdfSB0YWJzQ29uZmlnXG4gICAqIEBwYXJhbSB7VXJsU2VhcmNoUGFyYW1zfVxuICAgKi9cbiAgZ2V0RGVmYXVsdFRhYk9yZGVyICh0YWJzQ29uZmlnLCB1cmxQYXJhbXMpIHtcbiAgICBsZXQgdGFiT3JkZXIgPSBbXTtcblxuICAgIC8vIFVzZSB0aGUgb3JkZXJpbmcgZnJvbSB0aGUgVVJMIGFzIHRoZSBwcmltYXJ5IGNvbmZpZ3VyYXRpb25cbiAgICAvLyBBbmQgdGhlbiBtZXJnZSBpdCB3aXRoIHRoZSBsb2NhbCBjb25maWd1cmF0aW9uLCBpZiBwcm92aWRlZC5cbiAgICBpZiAodXJsUGFyYW1zICYmIHVybFBhcmFtcy5oYXMoJ3RhYk9yZGVyJykpIHtcbiAgICAgIHRhYk9yZGVyID0gdXJsUGFyYW1zLmdldCgndGFiT3JkZXInKS5zcGxpdCgnLCcpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFic0NvbmZpZy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGFiID0gdGFic0NvbmZpZ1tpXTtcbiAgICAgIC8vIFNvbWUgdGFicyBkb24ndCBoYXZlIGNvbmZpZ0lkLCBzbyB3ZSBtYXAgaXQgZnJvbSBVUkxcbiAgICAgIGlmICh0YWIuY29uZmlnSWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YWIuY29uZmlnSWQgPSB0YWIudXJsO1xuICAgICAgfVxuXG4gICAgICAvLyBBdm9pZCBkdXBsaWNhdGVzIGlmIGNvbmZpZyB3YXMgcHJvdmlkZWQgZnJvbSBVUkxcbiAgICAgIGlmICh0YWJPcmRlci5pbmNsdWRlcyh0YWIuY29uZmlnSWQpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBpc0ZpcnN0IHNob3VsZCBhbHdheXMgYmUgdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhlIGxpc3RcbiAgICAgIGlmICh0YWIuaXNGaXJzdCkge1xuICAgICAgICB0YWJPcmRlci51bnNoaWZ0KHRhYi5jb25maWdJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWJPcmRlci5wdXNoKHRhYi5jb25maWdJZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhYk9yZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIG1lcmdlVGFiT3JkZXIgbWVyZ2VzIHR3byBhcnJheXMgaW50byBvbmVcbiAgICogYnkgYXBwZW5kaW5nIGFkZGl0aW9uYWwgdGFicyB0byB0aGUgZW5kIG9mIHRoZSBvcmlnaW5hbCBhcnJheVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB0YWJPcmRlciBUYWIgb3JkZXIgcHJvdmlkZWQgYnkgdGhlIHNlcnZlclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBvdGhlclRhYk9yZGVyIFRhYiBvcmRlciBwcm92aWRlZCBieSBjb25maWd1cmF0aW9uXG4gICAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICAgKi9cbiAgbWVyZ2VUYWJPcmRlciAodGFiT3JkZXIsIG90aGVyVGFiT3JkZXIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG90aGVyVGFiT3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhYkNvbmZpZyA9IG90aGVyVGFiT3JkZXJbaV07XG4gICAgICBpZiAodGFiT3JkZXIuaW5jbHVkZXModGFiQ29uZmlnKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gaXNGaXJzdCBzaG91bGQgYmUgYW4gb3ZlcnJpZGUgdG8gZHluYW1pYyB0YWIgb3JkZXJpbmcuXG4gICAgICBpZiAodGhpcy5fdGFic1t0YWJDb25maWddICYmIHRoaXMuX3RhYnNbdGFiQ29uZmlnXS5pc0ZpcnN0KSB7XG4gICAgICAgIHRhYk9yZGVyLnVuc2hpZnQodGFiQ29uZmlnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhYk9yZGVyLnB1c2godGFiQ29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFiT3JkZXI7XG4gIH1cblxuICBnZW5lcmF0ZVRhYlVybCAoYmFzZVVybCwgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpKSB7XG4gICAgLy8gV2Ugd2FudCB0byBwZXJzaXN0IHRoZSBwYXJhbXMgZnJvbSB0aGUgZXhpc3RpbmcgVVJMIHRvIHRoZSBuZXdcbiAgICAvLyBVUkxTIHdlIGNyZWF0ZS5cbiAgICBwYXJhbXMuc2V0KCd0YWJPcmRlcicsIHRoaXMuX3RhYk9yZGVyKTtcbiAgICByZXR1cm4gYmFzZVVybCArICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXIgKi9cblxuLyoqXG4gKiBSZXByZXNlbnRzIGFuIGFwaSBmaWx0ZXIgYW5kIHByb3ZpZGVzIHN0YXRpYyBtZXRob2RzIGZvciBlYXNpbHkgY29uc3RydWN0aW5nIEZpbHRlcnMuXG4gKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIueWV4dC5jb20vZG9jcy9hcGktcmVmZXJlbmNlLyNvcGVyYXRpb24vbGlzdEVudGl0aWVzIGZvciBzdHJ1Y3R1cmUgZGV0YWlsc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXIge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGEgSlNPTiBmb3JtYXQgZmlsdGVyIHJldHVybmVkIGZyb20gdGhlIHNlcnZlciBpbnRvIGEgRmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gcmVzcG9uc2VGaWx0ZXIgQSBmaWx0ZXIgaW4gSlNPTiBmb3JtYXQgcmV0dXJuZWQgZnJvbSB0aGUgYmFja2VuZFxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGZyb21SZXNwb25zZSAocmVzcG9uc2VGaWx0ZXIpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcihKU09OLnBhcnNlKHJlc3BvbnNlRmlsdGVyKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgbmV3IEZpbHRlciByZXByZXNlbnRpbmcgdGhlIE9SIG9mIGFsbCBwcm92aWRlZCBmaWx0ZXJzXG4gICAqIEBwYXJhbSAgey4uLkZpbHRlcn0gZmlsdGVycyBUaGUgZmlsdGVycyB0byBPUiB0b2dldGhlclxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIG9yICguLi5maWx0ZXJzKSB7XG4gICAgcmV0dXJuIG5ldyBGaWx0ZXIoe1xuICAgICAgJyRvcic6IGZpbHRlcnNcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBuZXcgRmlsdGVyIHJlcHJlc2VudGluZyB0aGUgQU5EIG9mIGFsbCBwcm92aWRlZCBmaWx0ZXJzXG4gICAqIEBwYXJhbSAgey4uLkZpbHRlcn0gZmlsdGVycyBUaGUgZmlsdGVycyB0byBBTkQgdG9nZXRoZXJcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBhbmQgKC4uLmZpbHRlcnMpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcih7XG4gICAgICAnJGFuZCc6IGZpbHRlcnNcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPUiBmaWx0ZXJzIHdpdGggdGhlIHNhbWUga2V5cywgdGhlbiBBTkQgdGhlIHJlc3VsdGluZyBncm91cHNcbiAgICogQHBhcmFtICB7Li4uRmlsdGVyfSBmaWx0ZXJzIFRoZSBmaWx0ZXJzIHRvIGdyb3VwXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgZ3JvdXAgKC4uLmZpbHRlcnMpIHtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiBmaWx0ZXJzKSB7XG4gICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhmaWx0ZXIpWzBdO1xuICAgICAgaWYgKCFncm91cHNba2V5XSkge1xuICAgICAgICBncm91cHNba2V5XSA9IFtdO1xuICAgICAgfVxuICAgICAgZ3JvdXBzW2tleV0ucHVzaChmaWx0ZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGdyb3VwRmlsdGVycyA9IFtdO1xuICAgIGZvciAoY29uc3QgZmllbGQgb2YgT2JqZWN0LmtleXMoZ3JvdXBzKSkge1xuICAgICAgZ3JvdXBGaWx0ZXJzLnB1c2goZ3JvdXBzW2ZpZWxkXS5sZW5ndGggPiAxID8gRmlsdGVyLm9yKC4uLmdyb3Vwc1tmaWVsZF0pIDogZ3JvdXBzW2ZpZWxkXVswXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdyb3VwRmlsdGVycy5sZW5ndGggPiAxID8gRmlsdGVyLmFuZCguLi5ncm91cEZpbHRlcnMpIDogZ3JvdXBGaWx0ZXJzWzBdO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImVxdWFsIHRvXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgZXF1YWwgdG9cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBlcXVhbCAoZmllbGQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIEZpbHRlci5fZnJvbU1hdGNoZXIoZmllbGQsICckZXEnLCB2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IFwibGVzcyB0aGFuXCIgZmlsdGVyIGZvciBhIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZCBUaGUgc3ViamVjdCBmaWVsZCBvZiB0aGUgZmlsdGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRoZSBmaWVsZCBzaG91bGQgYmUgbGVzcyB0aGFuXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgbGVzc1RoYW4gKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGx0JywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImxlc3MgdGhhbiBvciBlcXVhbCB0b1wiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0b1xuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGxlc3NUaGFuRXF1YWwgKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBGaWx0ZXIuX2Zyb21NYXRjaGVyKGZpZWxkLCAnJGxlJywgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBcImdyZWF0ZXIgdGhhblwiIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0aGUgZmllbGQgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhblxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIGdyZWF0ZXJUaGFuIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRndCcsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgXCJncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG9cIiBmaWx0ZXIgZm9yIGEgZmllbGRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkIFRoZSBzdWJqZWN0IGZpZWxkIG9mIHRoZSBmaWx0ZXJcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdGhlIGZpZWxkIHNob3VsZCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG9cbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICovXG4gIHN0YXRpYyBncmVhdGVyVGhhbkVxdWFsIChmaWVsZCwgdmFsdWUpIHtcbiAgICByZXR1cm4gRmlsdGVyLl9mcm9tTWF0Y2hlcihmaWVsZCwgJyRnZScsIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgaW5jbHVzaXZlIHJhbmdlIGZpbHRlciBmb3IgYSBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0geyp9IG1pbiBUaGUgbWluaW11bSB2YWx1ZSBvZiB0aGUgcmFuZ2VcbiAgICogQHBhcmFtIHsqfSBtYXggVGhlIG1heGltdW0gdmFsdWUgb2YgdGhlIHJhbmdlclxuICAgKiBAcmV0dXJucyB7RmlsdGVyfVxuICAgKi9cbiAgc3RhdGljIHJhbmdlIChmaWVsZCwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gRmlsdGVyLmFuZChGaWx0ZXIuZ3JlYXRlclRoYW5FcXVhbChmaWVsZCwgbWluKSwgRmlsdGVyLmxlc3NUaGFuRXF1YWwoZmllbGQsIG1heCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBmaWx0ZXIgd2l0aCB0aGUgZ2l2ZW4gbWF0Y2hlclxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGQgVGhlIHN1YmplY3QgZmllbGQgb2YgdGhlIGZpbHRlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWF0Y2hlciBUaGUgbWF0Y2hlciBmb3IgdGhlIGZpbGVyXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGZvciB0aGUgZmlsdGVyXG4gICAqIEByZXR1cm5zIHtGaWx0ZXJ9XG4gICAqL1xuICBzdGF0aWMgX2Zyb21NYXRjaGVyIChmaWVsZCwgbWF0Y2hlciwgdmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IEZpbHRlcih7XG4gICAgICBbZmllbGRdOiB7XG4gICAgICAgIFttYXRjaGVyXTogdmFsdWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgU2VhcmNoQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuLyoqXG4gKiBTZWFyY2hDb21wb25lbnQgZXhwb3NlcyBhbiBpbnRlcmZhY2UgaW4gb3JkZXIgdG8gY3JlYXRlXG4gKiBhIFVJIFNlYXJjaCBleHBlcmllbmNlIGZvciB2ZXJ0aWNhbCBhbmQgdW5pdmVyc2FsIHNlYXJjaC5cbiAqXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIG5hbWUgdG8gdXNlIGZvciByZW5kZXJpbmcgd2l0aCBoYW5kbGViYXJzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAnc2VhcmNoL3NlYXJjaCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgaW5wdXQga2V5IGZvciB0aGUgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBJZiBub3QgcHJvdmlkZWQsIGF1dG8tY29tcGxldGUgYW5kIHNlYXJjaCB3aWxsIGJlIGJhc2VkIG9uIHVuaXZlcnNhbFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYmFyS2V5ID0gb3B0cy5iYXJLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCB2ZXJ0aWNhbCBrZXkgZm9yIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCBhdXRvLWNvbXBsZXRlIGFuZCBzZWFyY2ggd2lsbCBiZSBiYXNlZCBvbiB1bml2ZXJzYWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gb3B0cy52ZXJ0aWNhbEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogUXVlcnkgc3VibWlzc2lvbiBpcyBiYXNlZCBvbiBhIGZvcm0gYXMgY29udGV4dC5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gbmF0aXZlIGZvcm0gbm9kZSB3aXRoaW4gY29udGFpbmVyXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5fZm9ybUVsID0gb3B0cy5mb3JtU2VsZWN0b3IgfHwgJ2Zvcm0nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlucHV0IGVsZW1lbnQgdXNlZCBmb3Igc2VhcmNoaW5nIGFuZCB3aXJlcyB1cCB0aGUga2V5Ym9hcmQgaW50ZXJhY3Rpb25cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2lucHV0RWwgPSBvcHRzLmlucHV0RWwgfHwgJy5qcy15ZXh0LXF1ZXJ5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB1c2VkLCBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgYXMgYSBkYXRhIHBvaW50XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudGl0bGUgPSBvcHRzLnRpdGxlIHx8ICdBbnN3ZXJzIFVuaXZlcnNhbCBTZWFyY2gnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlYXJjaCB0ZXh0IHVzZWQgZm9yIGxhYmVsaW5nIHRoZSBpbnB1dCBib3gsIGFsc28gcHJvdmlkZWQgdG8gdGVtcGxhdGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gb3B0cy5zZWFyY2hUZXh0IHx8ICdXaGF0IGFyZSB5b3UgaW50ZXJlc3RlZCBpbj8nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHRleHQgdG8gc2hvdyBhcyB0aGUgZmlyc3QgaXRlbSBmb3IgYXV0byBjb21wbGV0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnByb21wdEhlYWRlciA9IG9wdHMucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBdXRvIGZvY3VzZXMgdGhlIGlucHV0IGJveCBpZiBzZXQgdG8gdHJ1ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBkZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9Gb2N1cyA9IG9wdHMuYXV0b0ZvY3VzID09PSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogc3VibWl0VVJMIHdpbGwgZm9yY2UgdGhlIHNlYXJjaCBxdWVyeSBzdWJtaXNzaW9uIHRvIGdldFxuICAgICAqIHJlZGlyZWN0ZWQgdG8gdGhlIFVSTCBwcm92aWRlZC5cbiAgICAgKiBPcHRpb25hbCwgZGVmYXVsdHMgdG8gbnVsbC5cbiAgICAgKlxuICAgICAqIElmIG5vIHJlZGlyZWN0VXJsIHByb3ZpZGVkLCB3ZSBrZWVwIHRoZSBwYWdlIGFzIGEgc2luZ2xlIHBhZ2UgYXBwLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZWRpcmVjdFVybCA9IG9wdHMucmVkaXJlY3RVcmwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSBzdHJpbmcgdG8gdXNlIGZvciB0aGUgaW5wdXQgYm94LCBwcm92aWRlZCB0byB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlcnkgPSBvcHRzLnF1ZXJ5IHx8IHRoaXMuZ2V0VXJsUGFyYW1zKCkuZ2V0KCdxdWVyeScpIHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1NlYXJjaEJhcic7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgaWYgKHRoaXMucXVlcnkgJiYgdGhpcy5xdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNvcmUuc2V0UXVlcnkodGhpcy5xdWVyeSk7XG4gICAgICB0aGlzLnNlYXJjaCh0aGlzLnF1ZXJ5KTtcbiAgICB9XG5cbiAgICB0aGlzLmJpbmRCcm93c2VySGlzdG9yeSgpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgLy8gV2lyZSB1cCBvdXIgc2VhcmNoIGhhbmRsaW5nIGFuZCBhdXRvIGNvbXBsZXRlXG4gICAgdGhpcy5pbml0U2VhcmNoKHRoaXMuX2Zvcm1FbCk7XG4gICAgdGhpcy5pbml0QXV0b0NvbXBsZXRlKHRoaXMuX2lucHV0RWwpO1xuXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzID09PSB0cnVlICYmIHRoaXMucXVlcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gdXNlIGZvciB3aXJpbmcgdXAgc2VhcmNoaW5nIG9uIGZvcm0gc3VibWlzc2lvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybVNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBzdWJtaXQgaGFuZGxpbmcgdG9cbiAgICovXG4gIGluaXRTZWFyY2ggKGZvcm1TZWxlY3Rvcikge1xuICAgIHRoaXMuX2Zvcm1FbCA9IGZvcm1TZWxlY3RvcjtcblxuICAgIGxldCBmb3JtID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgZm9ybVNlbGVjdG9yKTtcbiAgICBpZiAoIWZvcm0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGluaXRpYWxpemUgU2VhcmNoQmFyOyBDYW4gbm90IGZpbmQge0hUTUxFbGVtZW50fSBgJywgdGhpcy5fZm9ybUVsLCAnYC4nKTtcbiAgICB9XG5cbiAgICBET00ub24oZm9ybSwgJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGxldCBxdWVyeSA9IGZvcm0ucXVlcnlTZWxlY3Rvcih0aGlzLl9pbnB1dEVsKS52YWx1ZTtcbiAgICAgIGxldCBwYXJhbXMgPSB0aGlzLmdldFVybFBhcmFtcygpO1xuICAgICAgcGFyYW1zLnNldCgncXVlcnknLCBxdWVyeSk7XG5cbiAgICAgIC8vIElmIHdlIGhhdmUgYSByZWRpcmVjdFVybCwgd2Ugd2FudCB0aGUgZm9ybSB0byBiZVxuICAgICAgLy8gc2VyaWFsaXplZCBhbmQgc3VibWl0dGVkLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlZGlyZWN0VXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMucmVkaXJlY3RVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe1xuICAgICAgICBxdWVyeTogcXVlcnlcbiAgICAgIH0sIHF1ZXJ5LCAnPycgKyBwYXJhbXMudG9TdHJpbmcoKSk7XG5cbiAgICAgIHRoaXMuY29yZS5zZXRRdWVyeShxdWVyeSk7XG4gICAgICB0aGlzLnNlYXJjaChxdWVyeSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHdpcmUgdXAgb3VyIGF1dG8gY29tcGxldGUgb24gYW4gaW5wdXQgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIGF1dG8gY29tcGxldGUgY29tcG9uZW50IHRvXG4gICAqL1xuICBpbml0QXV0b0NvbXBsZXRlIChpbnB1dFNlbGVjdG9yKSB7XG4gICAgdGhpcy5faW5wdXRFbCA9IGlucHV0U2VsZWN0b3I7XG5cbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKCdBdXRvQ29tcGxldGUnLCB7XG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmF1dG9jb21wbGV0ZWAsXG4gICAgICBjb250YWluZXI6ICcueWV4dC1zZWFyY2gtYXV0b2NvbXBsZXRlJyxcbiAgICAgIGJhcktleTogdGhpcy5fYmFyS2V5LFxuICAgICAgdmVydGljYWxLZXk6IHRoaXMuX3ZlcnRpY2FsS2V5LFxuICAgICAgcHJvbXB0SGVhZGVyOiB0aGlzLnByb21wdEhlYWRlcixcbiAgICAgIG9yaWdpbmFsUXVlcnk6IHRoaXMucXVlcnksXG4gICAgICBpbnB1dEVsOiBpbnB1dFNlbGVjdG9yLFxuICAgICAgb25TdWJtaXQ6ICgpID0+IHtcbiAgICAgICAgRE9NLnRyaWdnZXIoJ2Zvcm0nLCAnc3VibWl0Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZWFyY2ggKHF1ZXJ5KSB7XG4gICAgaWYgKHRoaXMuX3ZlcnRpY2FsS2V5KSB7XG4gICAgICBjb25zdCBhbGxGaWx0ZXJzID0gdGhpcy5jb3JlLnN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgICBjb25zdCB0b3RhbEZpbHRlciA9IGFsbEZpbHRlcnMubGVuZ3RoID4gMVxuICAgICAgICA/IEZpbHRlci5hbmQoLi4uYWxsRmlsdGVycylcbiAgICAgICAgOiBhbGxGaWx0ZXJzWzBdO1xuICAgICAgcmV0dXJuIHRoaXMuY29yZS52ZXJ0aWNhbFNlYXJjaChxdWVyeSwgdGhpcy5fdmVydGljYWxLZXksIEpTT04uc3RyaW5naWZ5KHRvdGFsRmlsdGVyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5PVEUoYmlsbHkpIFRlbXBvcmFyeSBoYWNrIGZvciBERU1PXG4gICAgICAvLyBSZW1vdmUgbWUgYWZ0ZXIgdGhlIGRlbW9cbiAgICAgIGxldCBuYXYgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXJcbiAgICAgICAgLmdldEFjdGl2ZUNvbXBvbmVudCgnTmF2aWdhdGlvbicpO1xuXG4gICAgICBpZiAobmF2KSB7XG4gICAgICAgIGxldCB0YWJzID0gbmF2LmdldFN0YXRlKCd0YWJzJyk7XG4gICAgICAgIGxldCB1cmxzID0ge307XG5cbiAgICAgICAgaWYgKHRhYnMgJiYgQXJyYXkuaXNBcnJheSh0YWJzKSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHRoaXMuZ2V0VXJsUGFyYW1zKHRhYnNbaV0udXJsLnNwbGl0KCc/JylbMV0pO1xuICAgICAgICAgICAgcGFyYW1zLnNldCgncXVlcnknLCBxdWVyeSk7XG5cbiAgICAgICAgICAgIGxldCB1cmwgPSB0YWJzW2ldLmJhc2VVcmw7XG4gICAgICAgICAgICBpZiAocGFyYW1zLnRvU3RyaW5nKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICB1cmwgKz0gJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cmxzW3RhYnNbaV0uY29uZmlnSWRdID0gdXJsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb3JlLnNlYXJjaChxdWVyeSwgdXJscyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvcmUuc2VhcmNoKHF1ZXJ5KTtcbiAgICB9XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgc2VhcmNoVGV4dDogdGhpcy5zZWFyY2hUZXh0LFxuICAgICAgcXVlcnk6IHRoaXMucXVlcnlcbiAgICB9LCBkYXRhKSk7XG4gIH1cblxuICBnZXRVcmxQYXJhbXMgKHVybCkge1xuICAgIHVybCA9IHVybCB8fCB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTtcbiAgICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyh1cmwpO1xuICB9XG5cbiAgYmluZEJyb3dzZXJIaXN0b3J5ICgpIHtcbiAgICBET00ub24od2luZG93LCAncG9wc3RhdGUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5nZXRVcmxQYXJhbXMoKS5nZXQoJ3F1ZXJ5Jyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcXVlcnk6IHRoaXMucXVlcnlcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNvcmUuc2V0UXVlcnkodGhpcy5xdWVyeSk7XG5cbiAgICAgIHRoaXMuc2VhcmNoKHRoaXMucXVlcnkpO1xuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXJTZWFyY2hDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi8uLi9jb3JlL21vZGVscy9maWx0ZXInO1xuXG4vKipcbiAqIEZpbHRlclNlYXJjaENvbXBvbmVudCBpcyB1c2VkIGZvciBhdXRvY29tcGxldGUgdXNpbmcgdGhlIEZpbHRlclNlYXJjaCBiYWNrZW5kLlxuICogSXQnbGwgYWxsb3cgeW91IHRvIHBpY2sgcHJlLXNldCBmaWx0ZXJzIHRoYXQgYXJlIHNldHVwIG9uIHRoZSBiYWNrZW5kIHdpdGhpblxuICogYSB2ZXJ0aWNhbCBzZWFyY2ggY29udGV4dC5cbiAqXG4gKiBAZXh0ZW5kcyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIG5hbWUgdG8gdXNlIGZvciByZW5kZXJpbmcgd2l0aCBoYW5kbGViYXJzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAnc2VhcmNoL2ZpbHRlcnNlYXJjaCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5wdXQga2V5IGZvciB0aGUgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2JhcktleSA9IG9wdHMuYmFyS2V5IHx8IG9wdHMuaW5wdXRLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJ0aWNhbCBrZXkgZm9yIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IG9wdHMudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFF1ZXJ5IHN1Ym1pc3Npb24gaXMgYmFzZWQgb24gYSBmb3JtIGFzIGNvbnRleHQuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIG5hdGl2ZSBmb3JtIG5vZGUgd2l0aGluIGNvbnRhaW5lclxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2Zvcm1FbCA9IG9wdHMuZm9ybVNlbGVjdG9yIHx8ICdmb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBlbGVtZW50IHVzZWQgZm9yIHNlYXJjaGluZyBhbmQgd2lyZXMgdXAgdGhlIGtleWJvYXJkIGludGVyYWN0aW9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gb3B0cy5pbnB1dEVsIHx8ICcuanMteWV4dC1xdWVyeSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgdXNlZCwgcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlIGFzIGEgZGF0YSBwb2ludFxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnRpdGxlID0gb3B0cy50aXRsZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWFyY2ggdGV4dCB1c2VkIGZvciBsYWJlbGluZyB0aGUgaW5wdXQgYm94LCBhbHNvIHByb3ZpZGVkIHRvIHRlbXBsYXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc2VhcmNoVGV4dCA9IG9wdHMuc2VhcmNoVGV4dCB8fCAnV2hhdCBhcmUgeW91IGludGVyZXN0ZWQgaW4/JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSB0ZXh0IHRvIHNob3cgYXMgdGhlIGZpcnN0IGl0ZW0gZm9yIGF1dG8gY29tcGxldGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5wcm9tcHRIZWFkZXIgPSBvcHRzLnByb21wdEhlYWRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQXV0byBmb2N1c2VzIHRoZSBpbnB1dCBib3ggaWYgc2V0IHRvIHRydWUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvRm9jdXMgPSBvcHRzLmF1dG9Gb2N1cyA9PT0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIHN1Ym1pdFVSTCB3aWxsIGZvcmNlIHRoZSBzZWFyY2ggcXVlcnkgc3VibWlzc2lvbiB0byBnZXRcbiAgICAgKiByZWRpcmVjdGVkIHRvIHRoZSBVUkwgcHJvdmlkZWQuXG4gICAgICogT3B0aW9uYWwsIGRlZmF1bHRzIHRvIG51bGwuXG4gICAgICpcbiAgICAgKiBJZiBubyByZWRpcmVjdFVybCBwcm92aWRlZCwgd2Uga2VlcCB0aGUgcGFnZSBhcyBhIHNpbmdsZSBwYWdlIGFwcC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucmVkaXJlY3RVcmwgPSBvcHRzLnJlZGlyZWN0VXJsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgc3RyaW5nIHRvIHVzZSBmb3IgdGhlIGlucHV0IGJveCwgcHJvdmlkZWQgdG8gdGVtcGxhdGUgZm9yIHJlbmRlcmluZy5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXJ5ID0gb3B0cy5xdWVyeSB8fCB0aGlzLmdldFVybFBhcmFtcygpLmdldChgJHt0aGlzLm5hbWV9LnF1ZXJ5YCkgfHwgJyc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmlsdGVyIHN0cmluZyB0byB1c2UgZm9yIHRoZSBwcm92aWRlZCBxdWVyeVxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZmlsdGVyID0gb3B0cy5maWx0ZXIgfHwgdGhpcy5nZXRVcmxQYXJhbXMoKS5nZXQoYCR7dGhpcy5uYW1lfS5maWx0ZXJgKSB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdGaWx0ZXJTZWFyY2gnO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIGlmICh0aGlzLnF1ZXJ5ICYmIHRoaXMucXVlcnkubGVuZ3RoID4gMCAmJiB0aGlzLmZpbHRlciAmJiB0aGlzLmZpbHRlci5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmdldFVybFBhcmFtcygpO1xuICAgICAgcGFyYW1zLnNldChgJHt0aGlzLm5hbWV9LnF1ZXJ5YCwgdGhpcy5xdWVyeSk7XG4gICAgICBwYXJhbXMuc2V0KGAke3RoaXMubmFtZX0uZmlsdGVyYCwgdGhpcy5maWx0ZXIpO1xuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCkpO1xuICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIEZpbHRlci5mcm9tUmVzcG9uc2UodGhpcy5maWx0ZXIpKTtcbiAgICAgIHRoaXMuc2VhcmNoKCk7XG4gICAgfVxuXG4gICAgdGhpcy5iaW5kQnJvd3Nlckhpc3RvcnkoKTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIC8vIFdpcmUgdXAgb3VyIHNlYXJjaCBoYW5kbGluZyBhbmQgYXV0byBjb21wbGV0ZVxuICAgIHRoaXMuaW5pdEF1dG9Db21wbGV0ZSh0aGlzLl9pbnB1dEVsKTtcblxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cyA9PT0gdHJ1ZSAmJiB0aGlzLnF1ZXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5faW5wdXRFbCkuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHdpcmUgdXAgb3VyIGF1dG8gY29tcGxldGUgb24gYW4gaW5wdXQgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIGF1dG8gY29tcGxldGUgY29tcG9uZW50IHRvXG4gICAqL1xuICBpbml0QXV0b0NvbXBsZXRlIChpbnB1dFNlbGVjdG9yKSB7XG4gICAgdGhpcy5faW5wdXRFbCA9IGlucHV0U2VsZWN0b3I7XG5cbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKCdBdXRvQ29tcGxldGUnLCB7XG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICBuYW1lOiBgJHt0aGlzLm5hbWV9LmF1dG9jb21wbGV0ZWAsXG4gICAgICBpc0ZpbHRlclNlYXJjaDogdHJ1ZSxcbiAgICAgIGNvbnRhaW5lcjogJy55ZXh0LXNlYXJjaC1hdXRvY29tcGxldGUnLFxuICAgICAgcHJvbXB0SGVhZGVyOiB0aGlzLnByb21wdEhlYWRlcixcbiAgICAgIG9yaWdpbmFsUXVlcnk6IHRoaXMucXVlcnksXG4gICAgICBvcmlnaW5hbEZpbHRlcjogdGhpcy5maWx0ZXIsXG4gICAgICBpbnB1dEVsOiBpbnB1dFNlbGVjdG9yLFxuICAgICAgdmVydGljYWxLZXk6IHRoaXMuX3ZlcnRpY2FsS2V5LFxuICAgICAgYmFyS2V5OiB0aGlzLl9iYXJLZXksXG4gICAgICBvblN1Ym1pdDogKHF1ZXJ5LCBmaWx0ZXIpID0+IHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy5nZXRVcmxQYXJhbXMoKTtcbiAgICAgICAgcGFyYW1zLnNldChgJHt0aGlzLm5hbWV9LnF1ZXJ5YCwgcXVlcnkpO1xuICAgICAgICBwYXJhbXMuc2V0KGAke3RoaXMubmFtZX0uZmlsdGVyYCwgZmlsdGVyKTtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgcmVkaXJlY3RVcmwsIHdlIHdhbnQgdGhlIHBhcmFtcyB0byBiZVxuICAgICAgICAvLyBzZXJpYWxpemVkIGFuZCBzdWJtaXR0ZWQuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5yZWRpcmVjdFVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMucmVkaXJlY3RVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCAnPycgKyBwYXJhbXMudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgLy8gc2F2ZSB0aGUgZmlsdGVyIHRvIHN0b3JhZ2UgZm9yIHRoZSBuZXh0IHNlYXJjaFxuICAgICAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgRmlsdGVyLmZyb21SZXNwb25zZShmaWx0ZXIpKTtcbiAgICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggd2l0aCBhbGwgc2F2ZWQgZmlsdGVycyBhbmQgcXVlcnksXG4gICAqIG9wdGlvbmFsbHkgcmVkaXJlY3RpbmcgYmFzZWQgb24gY29uZmlnXG4gICAqL1xuICBzZWFyY2ggKCkge1xuICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmNvcmUuc3RvcmFnZS5nZXRBbGwoU3RvcmFnZUtleXMuRklMVEVSKTtcbiAgICBsZXQgdG90YWxGaWx0ZXIgPSBmaWx0ZXJzWzBdO1xuICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRvdGFsRmlsdGVyID0gRmlsdGVyLmFuZCguLi5maWx0ZXJzKTtcbiAgICB9XG4gICAgY29uc3Qgc2VhcmNoUXVlcnkgPSB0aGlzLmNvcmUuc3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSkgfHwgJyc7XG5cbiAgICB0aGlzLmNvcmUudmVydGljYWxTZWFyY2goc2VhcmNoUXVlcnksIHRoaXMuX3ZlcnRpY2FsS2V5LCBKU09OLnN0cmluZ2lmeSh0b3RhbEZpbHRlcikpO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7XG4gICAgICB0aXRsZTogdGhpcy50aXRsZSxcbiAgICAgIHNlYXJjaFRleHQ6IHRoaXMuc2VhcmNoVGV4dCxcbiAgICAgIHF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlclxuICAgIH0sIGRhdGEpKTtcbiAgfVxuXG4gIGdldFVybFBhcmFtcyAodXJsKSB7XG4gICAgdXJsID0gdXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpO1xuICAgIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybCk7XG4gIH1cblxuICBiaW5kQnJvd3Nlckhpc3RvcnkgKCkge1xuICAgIERPTS5vbih3aW5kb3csICdwb3BzdGF0ZScsICgpID0+IHtcbiAgICAgIHRoaXMucXVlcnkgPSB0aGlzLmdldFVybFBhcmFtcygpLmdldChgJHt0aGlzLm5hbWV9LnF1ZXJ5YCk7XG4gICAgICB0aGlzLmZpbHRlciA9IHRoaXMuZ2V0VXJsUGFyYW1zKCkuZ2V0KGAke3RoaXMubmFtZX0uZmlsdGVyYCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcXVlcnk6IHRoaXMucXVlcnksXG4gICAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXJcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9zYXZlUXVlcnlBbmRGaWx0ZXIodGhpcy5xdWVyeSwgdGhpcy5maWx0ZXIpO1xuICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgQXV0b0NvbXBsZXRlQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuY29uc3QgS2V5cyA9IHtcbiAgQkFDS1NQQUNFOiA4LFxuICBUQUI6IDksXG4gIEVOVEVSOiAxMyxcbiAgU0hJRlQ6IDE2LFxuICBDVFJMOiAxNyxcbiAgQUxUOiAxOCxcbiAgRVNDQVBFOiAyNyxcblxuICBMRUZUOiAzNyxcbiAgUklHSFQ6IDM5LFxuICBVUDogMzgsXG5cbiAgREVMRVRFOiA0NixcbiAgRE9XTjogNDAsXG4gIExFRlRfT1NfS0VZOiA5MSxcbiAgUklHSFRfT1NfS0VZOiA5MixcbiAgU0VMRUNUX0tFWTogOTNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9Db21wbGV0ZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgYXV0b2NvbXBsZXRlIGlzIHNpbXBsZSBvciBmaWx0ZXJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmlzRmlsdGVyU2VhcmNoID0gb3B0cy5pc0ZpbHRlclNlYXJjaCB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgYmFyS2V5YCBpbiB0aGUgdmVydGljYWwgc2VhcmNoIHRvIHVzZSBmb3IgYXV0by1jb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYmFyS2V5ID0gb3B0cy5iYXJLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgdmVydGljYWxLZXlgIG9mIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggdG8gdXNlIGZvciBhdXRvLWNvbXBsZXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IG9wdHMudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBpbnB1dCBlbCBzZWxlY3RvciBmb3IgYXV0byBjb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5faW5wdXRFbCA9IG9wdHMuaW5wdXRFbCB8fCAnLmpzLXlleHQtcXVlcnknO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIGZvciB0aGUgZGF0YS1zdG9yYWdlIHRvIGxpc3RlbiBmb3IgdXBkYXRlcyBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSBgJHtTdG9yYWdlS2V5cy5BVVRPQ09NUExFVEV9LiR7dGhpcy5uYW1lfWA7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBoYW5kbGViYXJzIHRlbXBsYXRlIG5hbWUgdG8gdXNlIGZvciByZW5kZXJpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdzZWFyY2gvYXV0b2NvbXBsZXRlJztcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgaW5wdXQgdmFsdWUgd2hlbiB0eXBpbmcuXG4gICAgICogV2UgdXNlIHRoaXMgZm9yIHJlc2V0dGluZyB0aGUgc3RhdGUgb2YgdGhlIGlucHV0IHZhbHVlIHdoZW4gb3RoZXIgaW50ZXJhY3Rpb25zIChlLmcuIHJlc3VsdCBuYXZpZ2F0aW9uKVxuICAgICAqIGNoYW5nZSBiYXNlZCBvbiBpbnRlcmFjdGlvbnMuIEZvciBpbnN0YW5jZSwgaGl0dGluZyBlc2NhcGUgc2hvdWxkIHJlc2V0IHRoZSB2YWx1ZSB0byB0aGUgb3JpZ2luYWwgdHlwZWQgcXVlcnkuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gb3B0cy5vcmlnaW5hbFF1ZXJ5IHx8ICcnO1xuXG4gICAgLyoqXG4gICAgICogVXNlZCBmb3Iga2V5Ym9hcmQgbmF2aWdhdGlvbiB0aHJvdWdoIHJlc3VsdHMuXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IHNlY3Rpb24gd2UncmUgbmF2aWdhdGluZyBpbi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3NlY3Rpb25JbmRleCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uIHRocm91Z2ggcmVzdWx0cy5cbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgcmVzdWx0IGluZGV4IHdlJ3JlIG5hdmlnYXRpbmcgb24uXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZXN1bHRJbmRleCA9IC0xO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHRleHQgdG8gc2hvdyBhcyB0aGUgZmlyc3QgaXRlbSBmb3IgYXV0byBjb21wbGV0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnByb21wdEhlYWRlciA9IG9wdHMucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBpbnZva2VkIHdoZW4gdGhlIGBFbnRlcmAga2V5IGlzIHByZXNzZWQgb24gYXV0byBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICB0aGlzLl9vblN1Ym1pdCA9IG9wdHMub25TdWJtaXQgfHwgZnVuY3Rpb24gKCkge307XG4gIH1cblxuICAvKipcbiAgICogVGhlIGFsaWFzZWQgdXNlZCBieSB0aGUgY29tcG9uZW50IG1hbmFnZXIgZm9yIGNyZWF0aW9uLlxuICAgKi9cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0F1dG9Db21wbGV0ZSc7XG4gIH1cblxuICAvKipcbiAgICogc2V0U3RhdGUgaXMgb3ZlcnJpZGRlbiBzbyB0aGF0IHdlIGNhbiBwcm92aWRlIGFkZGl0aW9uYWwgbWV0YSBkYXRhXG4gICAqIHRvIHRoZSB0ZW1wbGF0ZSAoZS5nLiB0aGUgc2VjdGlvbkluZGV4IGFuZCByZXN1bHRJbmRleCksIHNpbmNlXG4gICAqIHRob3NlIGFyZSBjbGllbnQtaW50ZXJhY3Rpb24gc3BlY2lmaWMgdmFsdWVzIGFuZCBhcmVuJ3QgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyLlxuICAgKi9cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBzZWN0aW9uSW5kZXg6IHRoaXMuX3NlY3Rpb25JbmRleCxcbiAgICAgIHJlc3VsdEluZGV4OiB0aGlzLl9yZXN1bHRJbmRleCxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5fb3JpZ2luYWxRdWVyeS5sZW5ndGggPT09IDAgPyB0aGlzLnByb21wdEhlYWRlciA6IG51bGxcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogdXBkYXRlU3RhdGUgaXMgYSBoZWxwZXIgdG8gYXBwbHkgdGhlIGN1cnJlbnQgc3RhdGUgd2l0aCBuZXcgY2xpZW50LXN0YXRlLlxuICAgKi9cbiAgdXBkYXRlU3RhdGUgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fc3RhdGUuZ2V0KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uQ3JlYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgY29uc3RydWN0ZWQgZnJvbSB0aGUgZnJhbWV3b3JrLlxuICAgKiBPbmNlIHdlJ3JlIGluaXRhbGl6ZWQsIHdlIHdpcmUgdXAgYWxsIG9mIG91ciB1c2VyIGludGVyYWN0aW9uc1xuICAgKi9cbiAgb25DcmVhdGUgKCkge1xuICAgIC8vIFVzZSB0aGUgY29udGV4dCBvZiB0aGUgcGFyZW50IGNvbXBvbmVudCB0byBmaW5kIHRoZSBpbnB1dCBub2RlLlxuICAgIGxldCBxdWVyeUlucHV0ID0gRE9NLnF1ZXJ5KHRoaXMuX3BhcmVudC5fY29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKTtcbiAgICBpZiAoIXF1ZXJ5SW5wdXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGluaXRpYWxpemUgQXV0b0NvbXBsZXRlLiBDYW4gbm90IGZpbmQge0hUTUxFbGVtZW50fSBgJywgdGhpcy5faW5wdXRFbCwgJ2AuJyk7XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSB0aGUgbmF0aXZlIGF1dG8gY29tcGxldGVcbiAgICBET00uYXR0cihxdWVyeUlucHV0LCAnYXV0b0NvbXBsZXRlJywgJ29mZicpO1xuXG4gICAgLy8gVGhlIHVzZXIgZXhpdHMgdGhlIGlucHV0LCBzbyB3ZSB3YW50IHRvIHJlc2V0IHRoZSBzdGF0ZSBhbmQgY2xvc2VcbiAgICAvLyB0aGUgYXV0byBjb21wbGV0ZVxuICAgIERPTS5vbihxdWVyeUlucHV0LCAnYmx1cicsICgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIC8vIFdoZW4gYSB1c2VyIGZvY3VzZXMgdGhlIGlucHV0LCB3ZSBzaG91bGQgcG9wdWxhdGUgdGhlIGF1dG9jb21wbGV0ZSBiYXNlZFxuICAgIC8vIG9uIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdmb2N1cycsICgpID0+IHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuYXV0b0NvbXBsZXRlKHF1ZXJ5SW5wdXQudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gbmF2aWdhdGUgYmV0d2VlbiB0aGUgcmVzdWx0cyB1c2luZyB0aGUga2V5Ym9hcmRcbiAgICBET00ub24ocXVlcnlJbnB1dCwgJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVOYXZpZ2F0ZVJlc3VsdHMoZS5rZXlDb2RlLCBlKTtcbiAgICAgIHRoaXMuaGFuZGxlU3VibWl0UmVzdWx0KGUua2V5Q29kZSwgcXVlcnlJbnB1dC52YWx1ZSwgZSk7XG4gICAgfSk7XG5cbiAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBzZWxlY3QgYSByZXN1bHQgd2l0aCB0aGUgbW91c2VcbiAgICBET00uZGVsZWdhdGUodGhpcy5fY29udGFpbmVyLCAnLmpzLXlleHQtYXV0b2NvbXBsZXRlLW9wdGlvbicsICdtb3VzZWRvd24nLCAoZXZ0LCB0YXJnZXQpID0+IHtcbiAgICAgIGxldCBkYXRhID0gdGFyZ2V0LmRhdGFzZXQ7XG4gICAgICBsZXQgdmFsID0gZGF0YS5zaG9ydDtcblxuICAgICAgdGhpcy51cGRhdGVRdWVyeSh2YWwpO1xuICAgICAgdGhpcy5fb25TdWJtaXQodmFsLCBkYXRhLmZpbHRlcik7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIHRoZSB1c2VyIGlzIHR5cGluZyBpbiB0aGUgaW5wdXQsIHByb2Nlc3MgdGhlIGF1dG8gY29tcGxldGUuXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdrZXl1cCcsIChlKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZVR5cGluZyhlLmtleUNvZGUsIHF1ZXJ5SW5wdXQudmFsdWUsIGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIGNsb3NlIHdpbGwgaGlkZSB0aGUgYXV0byBjb21wbGV0ZSByZXN1bHRzIGFuZCByZXNldCB0aGUgc3RhdGUuXG4gICAqL1xuICBjbG9zZSAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7fSk7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlc2V0cyB0aGUgY2xpZW50IHN0YXRlIHRvIHRoZWlyIG9yaWdpbmFsIHZhbHVlcyBhbmQgdHJpZ2dlcnNcbiAgICogYSB0ZW1wbGF0ZS1yZXJlbmRlciB2aWEgdXBkYXRlU3RhdGVcbiAgICovXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLl9zZWN0aW9uSW5kZXggPSAwO1xuICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gLTE7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gdXBkYXRlIHRoZSBpbnB1dCB0ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRWYWx1ZSBPcHRpb24gdmFsdWUgcHJvdmlkZWQuXG4gICAqIElmIG5vIHZhbHVlIHByb3ZpZGVkLCB3ZSdsbCB0cnkgdG8gZmluZCBpdCBiYXNlZCBvbiB0aGUgc2VsZWN0aW9uIGluZGV4ZXMuXG4gICAqL1xuICB1cGRhdGVRdWVyeSAob3B0VmFsdWUpIHtcbiAgICAvLyBPbmx5IHdhbnQgdG8gdXBkYXRlIHRoZSBxdWVyeSBzdHJpbmcgaWYgdGhlcmVzIGEgdmFsdWUuXG4gICAgLy8gSWYgb25lIGlzIHByb3ZpZGVkLCBncmVhdC5cbiAgICAvLyBPdGhlcndpc2UsIGxldHMgdHJ5IHRvIGZpbmQgaXQgZnJvbSB0aGUgY3VycmVudCBzZWxlY3Rpb24gaW4gdGhlIHJlc3VsdHMuXG4gICAgaWYgKG9wdFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCBzZWN0aW9ucyA9IHRoaXMuX3N0YXRlLmdldCgnc2VjdGlvbnMnKTtcblxuICAgICAgbGV0IHJlc3VsdHMgPSBzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHM7XG4gICAgICBvcHRWYWx1ZSA9IHJlc3VsdHNbdGhpcy5fcmVzdWx0SW5kZXhdLnNob3J0VmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IHF1ZXJ5RWwgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Ll9jb250YWluZXIsICcuanMteWV4dC1xdWVyeScpO1xuICAgIHF1ZXJ5RWwudmFsdWUgPSBvcHRWYWx1ZTtcbiAgfVxuXG4gIGhhbmRsZVR5cGluZyAoa2V5LCB2YWx1ZSwgZSkge1xuICAgIGxldCBpZ25vcmVkS2V5cyA9IFtcbiAgICAgIEtleXMuRE9XTixcbiAgICAgIEtleXMuVVAsXG4gICAgICBLZXlzLkNUUkwsXG4gICAgICBLZXlzLkFMVCxcbiAgICAgIEtleXMuU0hJRlQsXG4gICAgICBLZXlzLkxFRlQsXG4gICAgICBLZXlzLlJJR0hULFxuICAgICAgS2V5cy5MRUZUX09TX0tFWSxcbiAgICAgIEtleXMuUklHSFRfT1NfS0VZLFxuICAgICAgS2V5cy5TRUxFQ1RfS0VZXG4gICAgXTtcblxuICAgIGlmIChpZ25vcmVkS2V5cy5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFVzZXIgZXNjYXBlcyBvdXQgb2YgYXV0byBjb21wbGV0ZSwgc28gd2UgcmVzZXQgaXQgdG8gdGhlIG9yaWdpbmFsIGlucHV0XG4gICAgaWYgKGtleSA9PT0gS2V5cy5FU0NBUEUpIHtcbiAgICAgIHRoaXMudXBkYXRlUXVlcnkodGhpcy5fb3JpZ2luYWxRdWVyeSk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVGFiYmluZyBvdXQgb3IgZW50ZXIgc2hvdWxkIGNsb3NlIHRoZSBhdXRvIGNvbXBsZXRlLlxuICAgIGlmIChrZXkgPT09IEtleXMuRU5URVIgfHwga2V5ID09PSBLZXlzLlRBQikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgb3JpZ2luYWwgdmFsdWUgYmFzZWQgb24gdGhlIHVzZXIgaW5wdXRcbiAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gdmFsdWU7XG5cbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgdGhpcy5hdXRvQ29tcGxldGUodmFsdWUpO1xuICB9XG5cbiAgYXV0b0NvbXBsZXRlIChpbnB1dCkge1xuICAgIGlmICh0aGlzLmlzRmlsdGVyU2VhcmNoKSB7XG4gICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlRmlsdGVyKGlucHV0LCB0aGlzLm5hbWUsIHRoaXMuX3ZlcnRpY2FsS2V5LCB0aGlzLl9iYXJLZXkpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fdmVydGljYWxLZXkgfHwgdGhpcy5fYmFyS2V5KSB7XG4gICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlVmVydGljYWwoaW5wdXQsIHRoaXMubmFtZSwgdGhpcy5fdmVydGljYWxLZXksIHRoaXMuX2JhcktleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29yZS5hdXRvQ29tcGxldGVVbml2ZXJzYWwoaW5wdXQsIHRoaXMubmFtZSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTmF2aWdhdGVSZXN1bHRzIChrZXksIGUpIHtcbiAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG4gICAgaWYgKHNlY3Rpb25zID09PSB1bmRlZmluZWQgfHwgc2VjdGlvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0cyA9IHNlY3Rpb25zW3RoaXMuX3NlY3Rpb25JbmRleF0ucmVzdWx0cztcbiAgICBpZiAoa2V5ID09PSBLZXlzLlVQKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5fcmVzdWx0SW5kZXggPD0gMCkge1xuICAgICAgICBpZiAodGhpcy5fc2VjdGlvbkluZGV4ID4gMCkge1xuICAgICAgICAgIHRoaXMuX3NlY3Rpb25JbmRleC0tO1xuICAgICAgICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzLmxlbmd0aCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVRdWVyeSh0aGlzLl9vcmlnaW5hbFF1ZXJ5KTtcbiAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3Jlc3VsdEluZGV4LS07XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gS2V5cy5ET1dOKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5fcmVzdWx0SW5kZXggPj0gcmVzdWx0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPCBzZWN0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgdGhpcy5fc2VjdGlvbkluZGV4Kys7XG4gICAgICAgICAgdGhpcy5fcmVzdWx0SW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3Jlc3VsdEluZGV4Kys7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU3VibWl0UmVzdWx0IChrZXksIHZhbHVlLCBlKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gdGhpcy5fc3RhdGUuZ2V0KCdzZWN0aW9ucycpO1xuICAgIGlmIChzZWN0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IHNlY3Rpb25zLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gc3VibWl0IHRoZSBzZWFyY2ggb24gZW50ZXJcbiAgICBpZiAoa2V5ID09PSBLZXlzLkVOVEVSKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgZmlsdGVyID0gJyc7XG4gICAgICBpZiAodGhpcy5fc2VjdGlvbkluZGV4ID49IDAgJiYgdGhpcy5fcmVzdWx0SW5kZXggPj0gMCkge1xuICAgICAgICBmaWx0ZXIgPSBKU09OLnN0cmluZ2lmeShzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHNbdGhpcy5fcmVzdWx0SW5kZXhdLmZpbHRlcik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlUXVlcnkodmFsdWUpO1xuICAgICAgdGhpcy5fb3JpZ2luYWxRdWVyeSA9IHZhbHVlO1xuICAgICAgdGhpcy5fb25TdWJtaXQodmFsdWUsIGZpbHRlcik7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXJPcHRpb25zQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEFuc3dlcnNDb21wb25lbnRFcnJvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvbW9kZWxzL2ZpbHRlcic7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgc3VwcG9ydGVkIGNvbnRyb2xzXG4gKiBAdHlwZSB7c3RyaW5nW119XG4gKi9cbmNvbnN0IFNVUFBPUlRFRF9DT05UUk9MUyA9IFtcbiAgJ3NpbmdsZW9wdGlvbicsXG4gICdtdWx0aW9wdGlvbidcbl07XG5cbi8qKlxuICogUmVuZGVycyBhIHNldCBvZiBvcHRpb25zLCBlYWNoIG9uZSByZXByZXNlbnRpbmcgYSBmaWx0ZXIgaW4gYSBzZWFyY2guXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlck9wdGlvbnNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnID0ge30pIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgaWYgKCFjb25maWcuY29udHJvbCB8fCAhU1VQUE9SVEVEX0NPTlRST0xTLmluY2x1ZGVzKGNvbmZpZy5jb250cm9sKSkge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMgcmVxdWlyZXMgYSB2YWxpZCBcImNvbnRyb2xcIiB0byBiZSBwcm92aWRlZCcsXG4gICAgICAgICdGaWx0ZXJPcHRpb25zJyk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25maWcub3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEFuc3dlcnNDb21wb25lbnRFcnJvcihcbiAgICAgICAgJ0ZpbHRlck9wdGlvbnMgY29tcG9uZW50IHJlcXVpcmVzIG9wdGlvbnMgdG8gYmUgcHJvdmlkZWQnLFxuICAgICAgICAnRmlsdGVyT3B0aW9ucycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBsaXN0IG9mIGZpbHRlciBvcHRpb25zIHRvIGRpc3BsYXkgd2l0aCBjaGVja2VkIHN0YXR1c1xuICAgICAqIEB0eXBlIHtvYmplY3RbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX29wdGlvbnMgPSBjb25maWcub3B0aW9ucy5tYXAobyA9PiBPYmplY3QuYXNzaWduKHt9LCBvLCB7IGNoZWNrZWQ6IGZhbHNlIH0pKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIGNvbnRyb2wgdG8gZGlzcGxheVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9jb250cm9sID0gY29uZmlnLmNvbnRyb2w7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0b3IgdXNlZCBmb3Igb3B0aW9ucyBpbiB0aGUgdGVtcGxhdGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb3B0aW9uU2VsZWN0b3IgPSBjb25maWcub3B0aW9uU2VsZWN0b3IgfHwgJy5qcy15ZXh0LWZpbHRlci1vcHRpb24nO1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgc3RvcmVzIHRoZSBmaWx0ZXIgdG8gc3RvcmFnZSBvbiBlYWNoIGNoYW5nZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RvcmVPbkNoYW5nZSA9IGNvbmZpZy5zdG9yZU9uQ2hhbmdlIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBjaGFuZ2VkXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBjb25maWcub25DaGFuZ2UgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgdG8gcmVuZGVyLCBiYXNlZCBvbiB0aGUgY29udHJvbFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSBgY29udHJvbHMvJHtjb25maWcuY29udHJvbH1gO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0ZpbHRlck9wdGlvbnMnO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBvcHRpb25zOiB0aGlzLl9vcHRpb25zXG4gICAgfSkpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgRE9NLmRlbGVnYXRlKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fb3B0aW9uU2VsZWN0b3IsICdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdXBkYXRlT3B0aW9uKHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4KSwgZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xuXG4gICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLl9idWlsZEZpbHRlcigpO1xuICAgICAgaWYgKHRoaXMuX3N0b3JlT25DaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5jb3JlLnNldEZpbHRlcih0aGlzLm5hbWUsIGZpbHRlcik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX29uQ2hhbmdlKGZpbHRlcik7XG4gICAgfSk7XG4gIH1cblxuICBfdXBkYXRlT3B0aW9uIChpbmRleCwgY2hlY2tlZCkge1xuICAgIGlmICh0aGlzLl9jb250cm9sID09PSAnc2luZ2xlb3B0aW9uJykge1xuICAgICAgdGhpcy5fb3B0aW9ucyA9IHRoaXMuX29wdGlvbnMubWFwKG8gPT4gT2JqZWN0LmFzc2lnbih7fSwgbywgeyBjaGVja2VkOiBmYWxzZSB9KSk7XG4gICAgfVxuXG4gICAgdGhpcy5fb3B0aW9uc1tpbmRleF0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9vcHRpb25zW2luZGV4XSwgeyBjaGVja2VkIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgb3B0aW9uc1xuICAgKi9cbiAgY2xlYXIgKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gRE9NLnF1ZXJ5QWxsKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fb3B0aW9uU2VsZWN0b3IpO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZSA9PiBlLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdmYWxzZScpKTtcbiAgICB0aGlzLl9hcHBseUZpbHRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGFuZCByZXR1cm4gdGhlIEZpbHRlciB0aGF0IHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICogQHJldHVybnMge0ZpbHRlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9idWlsZEZpbHRlciAoKSB7XG4gICAgY29uc3QgZmlsdGVycyA9IHRoaXMuX29wdGlvbnNcbiAgICAgIC5maWx0ZXIobyA9PiBvLmNoZWNrZWQpXG4gICAgICAubWFwKG8gPT4gRmlsdGVyLmVxdWFsKG8uZmllbGQsIG8udmFsdWUpKTtcblxuICAgIHJldHVybiBmaWx0ZXJzLmxlbmd0aCA+IDBcbiAgICAgID8gRmlsdGVyLmdyb3VwKC4uLmZpbHRlcnMpXG4gICAgICA6IHt9O1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBGaWx0ZXJCb3hDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5zd2Vyc0NvbXBvbmVudEVycm9yIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9lcnJvcnMvZXJyb3JzJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vY29yZS9tb2RlbHMvZmlsdGVyJztcblxuLyoqXG4gKiBSZW5kZXJzIGEgc2V0IG9mIGZpbHRlcnMsIGFuZCBzZWFyY2hlcyB3aXRoIHRoZW0gd2hlbiBhcHBsaWVkLlxuICogTXVsdGlwbGUgRmlsdGVyQm94IGNvbXBvbmVudHMgd2lsbCBBTkQgdG9nZXRoZXIgYnV0IHdpbGwgbm90IHNoYXJlIHN0YXRlLlxuICogQGV4dGVuZHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlckJveENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcgPSB7fSkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICBpZiAoIWNvbmZpZy5maWx0ZXJzIHx8ICEoY29uZmlnLmZpbHRlcnMgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIHRocm93IG5ldyBBbnN3ZXJzQ29tcG9uZW50RXJyb3IoXG4gICAgICAgICdGaWx0ZXJCb3ggcmVxdWlyZXMgZmlsdGVycyB0byBiZSBwcm92aWRlZCBhcyBhbiBhcnJheScsXG4gICAgICAgICdGaWx0ZXJCb3gnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBmaWx0ZXJzIHRvIGRpc3BsYXkgYW5kIGNvbnRyb2xcbiAgICAgKiBAdHlwZSB7b2JqZWN0W119XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9maWx0ZXJDb25maWdzID0gY29uZmlnLmZpbHRlcnM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVydGljYWwga2V5IGZvciB0aGUgc2VhcmNoXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gY29uZmlnLnZlcnRpY2FsS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0cmlnZ2VyIGEgc2VhcmNoIG9uIGVhY2ggY2hhbmdlIHRvIGEgZmlsdGVyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zZWFyY2hPbkNoYW5nZSA9IGNvbmZpZy5zZWFyY2hPbkNoYW5nZSB8fCBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RvciBvZiB0aGUgYXBwbHkgYnV0dG9uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwcGx5QnV0dG9uU2VsZWN0b3IgPSBjb25maWcuYXBwbHlCdXR0b25TZWxlY3RvciB8fCAnLmpzLXlleHQtZmlsdGVyYm94LWFwcGx5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnRzIGNyZWF0ZWQgZm9yIGVhY2ggZmlsdGVyIGNvbmZpZ1xuICAgICAqIEB0eXBlIHtDb21wb25lbnRbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlckNvbXBvbmVudHMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBmaWx0ZXIgY29tcG9uZW50cyBpbiB0aGUgYm94XG4gICAgICogQHR5cGUge0ZpbHRlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2ZpbHRlcnMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSB0byByZW5kZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gYGZpbHRlcnMvZmlsdGVyYm94YDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdGaWx0ZXJCb3gnO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgIGZpbHRlckNvbmZpZ3M6IHRoaXMuX2ZpbHRlckNvbmZpZ3MsXG4gICAgICBzaG93QXBwbHlCdXR0b246ICF0aGlzLl9zZWFyY2hPbkNoYW5nZVxuICAgIH0pKTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIC8vIEluaXRpYWxpemUgZmlsdGVycyBmcm9tIGNvbmZpZ3NcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2ZpbHRlckNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuX2ZpbHRlckNvbmZpZ3NbaV07XG4gICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKGNvbmZpZy50eXBlLCBPYmplY3QuYXNzaWduKHt9LFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgICAgbmFtZTogYCR7dGhpcy5uYW1lfS5maWx0ZXIke2l9YCxcbiAgICAgICAgICBzdG9yZU9uQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICBjb250YWluZXI6IGAuanMteWV4dC1maWx0ZXJib3gtZmlsdGVyJHtpfWAsXG4gICAgICAgICAgb25DaGFuZ2U6IChmKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uRmlsdGVyQ2hhbmdlKGksIGYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgY29tcG9uZW50Lm1vdW50KCk7XG4gICAgICB0aGlzLl9maWx0ZXJDb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICAvLyBJbml0aWFsaXplIGFwcGx5IGJ1dHRvblxuICAgIGlmICghdGhpcy5fc2VhcmNoT25DaGFuZ2UpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2FwcGx5QnV0dG9uU2VsZWN0b3IpO1xuICAgICAgRE9NLm9uKGJ1dHRvbiwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9zYXZlRmlsdGVyc1RvU3RvcmFnZSgpO1xuICAgICAgICB0aGlzLl9zZWFyY2goKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgY2hhbmdlcyB0byBjaGlsZCBmaWx0ZXIgY29tcG9uZW50c1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBjaGFuZ2VkIGZpbHRlclxuICAgKiBAcGFyYW0ge0ZpbHRlcn0gZmlsdGVyIFRoZSBuZXcgZmlsdGVyXG4gICAqL1xuICBvbkZpbHRlckNoYW5nZSAoaW5kZXgsIGZpbHRlcikge1xuICAgIHRoaXMuX2ZpbHRlcnNbaW5kZXhdID0gZmlsdGVyO1xuICAgIGlmICh0aGlzLl9zZWFyY2hPbkNoYW5nZSkge1xuICAgICAgdGhpcy5fc2F2ZUZpbHRlcnNUb1N0b3JhZ2UoKTtcbiAgICAgIHRoaXMuX3NlYXJjaCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIGN1cnJlbnQgZmlsdGVycyB0byBzdG9yYWdlIHRvIGJlIHVzZWQgaW4gdGhlIG5leHQgc2VhcmNoXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2F2ZUZpbHRlcnNUb1N0b3JhZ2UgKCkge1xuICAgIGNvbnN0IHZhbGlkRmlsdGVycyA9IHRoaXMuX2ZpbHRlcnMuZmlsdGVyKGYgPT4gZiAhPT0gdW5kZWZpbmVkICYmIGYgIT09IG51bGwpO1xuICAgIGNvbnN0IGNvbWJpbmVkRmlsdGVyID0gdmFsaWRGaWx0ZXJzLmxlbmd0aCA+IDFcbiAgICAgID8gRmlsdGVyLmFuZCguLi52YWxpZEZpbHRlcnMpXG4gICAgICA6IHZhbGlkRmlsdGVyc1swXTtcbiAgICB0aGlzLmNvcmUuc2V0RmlsdGVyKHRoaXMubmFtZSwgY29tYmluZWRGaWx0ZXIgfHwge30pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYSBzZWFyY2ggd2l0aCBhbGwgZmlsdGVycyBpbiBzdG9yYWdlXG4gICAqL1xuICBfc2VhcmNoICgpIHtcbiAgICBjb25zdCBhbGxGaWx0ZXJzID0gdGhpcy5jb3JlLnN0b3JhZ2UuZ2V0QWxsKFN0b3JhZ2VLZXlzLkZJTFRFUik7XG4gICAgY29uc3QgdG90YWxGaWx0ZXIgPSBhbGxGaWx0ZXJzLmxlbmd0aCA+IDFcbiAgICAgID8gRmlsdGVyLmFuZCguLi5hbGxGaWx0ZXJzKVxuICAgICAgOiBhbGxGaWx0ZXJzWzBdO1xuXG4gICAgY29uc3QgcXVlcnkgPSB0aGlzLmNvcmUuc3RvcmFnZS5nZXRTdGF0ZShTdG9yYWdlS2V5cy5RVUVSWSkgfHwgJyc7XG5cbiAgICB0aGlzLmNvcmUudmVydGljYWxTZWFyY2gocXVlcnksIHRoaXMuX3ZlcnRpY2FsS2V5LCBKU09OLnN0cmluZ2lmeSh0b3RhbEZpbHRlcikpO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBEaXJlY3RBbnN3ZXJDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdEFuc3dlckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMubW9kdWxlSWQgPSBTdG9yYWdlS2V5cy5ESVJFQ1RfQU5TV0VSO1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdyZXN1bHRzL2RpcmVjdGFuc3dlcic7XG4gIH1cblxuICBiZWZvcmVNb3VudCAoKSB7XG4gICAgaWYgKCF0aGlzLmhhc1N0YXRlKCdhbnN3ZXInKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0RpcmVjdEFuc3dlcic7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlc3VsdHNJdGVtQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncmVzdWx0cy9yZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50ICovXG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNJdGVtQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3Jlc3VsdHMvZXZlbnRyZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cblxuICBzdGF0aWMgYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkICgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQgKi9cblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNJdGVtQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3Jlc3VsdHMvcGVvcGxlcmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1Blb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxuXG4gIHN0YXRpYyBhcmVEdXBsaWNhdGVOYW1lc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSBNYXBQcm92aWRlciAqL1xuXG4vKipcbiAqIEEgTWFwUHJvdmlkZXIgaXMgYW4gaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB0aGF0IHNob3VsZCBiZSBpbXBsZW1lbnRlZFxuICogaW4gb3JkZXIgdG8gaW50ZWdyYXRlIHdpdGggYSBUaGlyZCBQYXJ0eSBNYXAgcHJvdmlkZXIgZm9yIGJvdGhcbiAqIHN0YXRpYyBhbmQgaW50ZXJhY3RpdmUgbWFwcy4gTWFwUHJvdmlkZXJzIGFyZSB1c2VkIGJ5IHRoZSBNYXBDb21wb25lbnQuXG4gKlxuICogSW1wbGVtZW50YXRpb25zIHNob3VsZCBleHRlbmQgdGhpcyBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcFByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHVzZWQgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIG1hcCBwcm92aWRlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYXBpS2V5ID0gb3B0cy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBtYXAgdG8gYXBwZW5kIHRvIHRoZSBET00sIGRlZmF1bHRzIHRvIDEwMCVcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX2hlaWdodCA9IG9wdHMuaGVpZ2h0IHx8IDIwMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgbWFwIHRvIGFwcGVuZCB0byB0aGUgRE9NLCBkZWZhdWx0cyB0byAxMDAlXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl93aWR0aCA9IG9wdHMud2lkdGggfHwgNjAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHpvb20gbGV2ZWwgb2YgdGhlIG1hcCwgZGVmYXVsdHMgdG8gOVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fem9vbSA9IG9wdHMuem9vbSB8fCA5O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIHVuZGVybHlpbmcgbWFwIGluc3RhbmNlLCBjcmVhdGVkIGJ5IHRoZSBleHRlcm5hbCBsaWIuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9tYXAgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGVtcG9yYXJ5IGJvb2xlYW4gdHJhY2tpbmcgd2hldGhlciBvciBub3QgdGhlIGV4dGVybmFsIEpTIGxpYnJhcnkgaXMgbG9hZGVkIChzZWUgVE9ETyBiZWxvdylcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9pc0xvYWRlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIG9uY2UgdGhlIEphdmFzY3JpcHQgaXMgbG9hZGVkXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMuX29uTG9hZGVkID0gb3B0cy5vbkxvYWRlZCB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXN0b20gY29uZmlndXJhdGlvbiBvdmVycmlkZSB0byB1c2UgZm9yIHRoZSBtYXAgbWFya2Vyc1xuICAgICAqIEB0eXBlIHtPYmplY3R8RnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5fcGluQ29uZmlnID0gdHlwZW9mIG9wdHMucGluID09PSAnZnVuY3Rpb24nID8gb3B0cy5waW4gOiBPYmplY3QuYXNzaWduKE1hcFByb3ZpZGVyLkRFRkFVTFRfUElOX0NPTkZJRywgb3B0cy5waW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gdG8gdXNlIGZvciB0aGUgbWFwIG1hcmtlcnNcbiAgICogQHR5cGUge09iamVjdH1cbiAgICogVE9ETyhiaWxseSkgQ3JlYXRlIGEgY29uZmlndXJhdGlvbiBtb2RlbFxuICAgKi9cbiAgc3RhdGljIGdldCBERUZBVUxUX1BJTl9DT05GSUcgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpY29uOiB7XG4gICAgICAgIGFuY2hvcjogbnVsbCwgLy8gZS5nLiB7IHg6IDEsIHk6IDEgfVxuICAgICAgICBzdmc6IG51bGwsXG4gICAgICAgIHVybDogbnVsbCxcbiAgICAgICAgc2NhbGVkU2l6ZTogbnVsbCAvLyBlLmcuIHsgdzogMjAsIGg6IDIwIH1cbiAgICAgIH0sXG4gICAgICBsYWJlbFR5cGU6ICdudW1lcmljJ1xuICAgIH07XG4gIH1cblxuICBvbkxvYWRlZCAoY2IpIHtcbiAgICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fb25Mb2FkZWQgPSBjYjtcbiAgICBpZiAodGhpcy5pc0xvYWRlZCgpKSB7XG4gICAgICB0aGlzLl9vbkxvYWRlZCgpO1xuICAgIH1cbiAgfVxuXG4gIGlzTG9hZGVkICgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNMb2FkZWQ7XG4gIH1cblxuICBsb2FkSlMgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCBNZXRob2Q6IGxvYWRKUycpO1xuICB9XG5cbiAgbG9hZFN0YXRpYyAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmltcGxlbWVudGVkIE1ldGhvZDogbG9hZFN0YXRpYycpO1xuICB9XG5cbiAgaW5pdCAobWFwRGF0YSkge1xuICAgIC8vIFRPRE8oYmlsbHkpIFRoaXMgc2hvdWxkIGJlIGJhc2VkIG9mZiBhIHByb21pc2UgdGhhdCBnZXRzIGNyZWF0ZWQgZnJvbSBsb2FkSlNcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaW1wbGVtZW50ZWQgTWV0aG9kOiBpbml0Jyk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIEdvb2dsZU1hcFByb3ZpZGVyICovXG5cbmltcG9ydCBNYXBQcm92aWRlciBmcm9tICcuL21hcHByb3ZpZGVyJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vLi4vZG9tL2RvbSc7XG5cbi8qIGdsb2JhbCBnb29nbGUgKi9cblxuLyoqXG4gKiBHb29nbGVNYXBQcm92aWRlciBpcyBhbiBpbXBsZW1lbnRhdGlvbiBvZiBhIE1hcFByb3ZpZGVyXG4gKiB0aGF0IGhhbmRsZXMgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIHRoaXJkIHBhcnR5IEFQSSB0byBleHBvc2UgbWFwcy5cbiAqIEBleHRlbmRzIE1hcFByb3ZpZGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvb2dsZU1hcFByb3ZpZGVyIGV4dGVuZHMgTWFwUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5fY2xpZW50SWQgPSBvcHRzLmNsaWVudElkO1xuICAgIHRoaXMuX3NpZ25hdHVyZSA9IG9wdHMuc2lnbmF0dXJlO1xuXG4gICAgaWYgKCF0aGlzLmhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMoKSAmJiAhdGhpcy5fYXBpS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dvb2dsZU1hcHNQcm92aWRlcjogTWlzc2luZyBgYXBpS2V5YCBvciB7YGNsaWVudElkYCwgYHNpZ25hdHVyZWB9Jyk7XG4gICAgfVxuICB9XG5cbiAgbG9hZEpTIChvbkxvYWQpIHtcbiAgICBpZiAoRE9NLnF1ZXJ5KCcjeWV4dC1tYXAtanMnKSkge1xuICAgICAgaWYgKHR5cGVvZiBvbkxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb25Mb2FkKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHNjcmlwdCA9IERPTS5jcmVhdGVFbCgnc2NyaXB0Jywge1xuICAgICAgaWQ6ICd5ZXh0LW1hcC1qcycsXG4gICAgICBvbmxvYWQ6ICgpID0+IHtcbiAgICAgICAgdGhpcy5faXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9vbkxvYWRlZCgpO1xuICAgICAgfSxcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgc3JjOiBgLy9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzPyR7dGhpcy5nZW5lcmF0ZUNyZWRlbnRpYWxzKCl9YFxuICAgIH0pO1xuXG4gICAgRE9NLmFwcGVuZCgnYm9keScsIHNjcmlwdCk7XG4gIH1cblxuICBnZW5lcmF0ZVN0YXRpYyAobWFwRGF0YSkge1xuICAgIGxldCBnb29nbGVNYXBNYXJrZXJDb25maWdzID0gR29vZ2xlTWFwTWFya2VyQ29uZmlnLmZyb20oXG4gICAgICBtYXBEYXRhLm1hcE1hcmtlcnMsXG4gICAgICB0aGlzLl9waW5Db25maWdcbiAgICApO1xuXG4gICAgbGV0IGVuY29kZWRNYXJrZXJzID0gR29vZ2xlTWFwTWFya2VyQ29uZmlnLnNlcmlhbGl6ZShnb29nbGVNYXBNYXJrZXJDb25maWdzKTtcbiAgICByZXR1cm4gYFxuICAgICAgPGltZyBzcmM9XCIvL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvc3RhdGljbWFwPyR7ZW5jb2RlZE1hcmtlcnN9JnNpemU9JHt0aGlzLl93aWR0aH14JHt0aGlzLl9oZWlnaHR9JiR7dGhpcy5nZW5lcmF0ZUNyZWRlbnRpYWxzKCl9XCI+YDtcbiAgfVxuXG4gIGdlbmVyYXRlQ3JlZGVudGlhbHMgKCkge1xuICAgIGlmICh0aGlzLmhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMoKSkge1xuICAgICAgcmV0dXJuIGBjbGllbnQ9JHt0aGlzLl9jbGllbnRJZH1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYGtleT0ke3RoaXMuX2FwaUtleX1gO1xuICAgIH1cbiAgfVxuXG4gIGhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMgKCkge1xuICAgIC8vIFNpZ25hdHVyZSBpcyBvbmx5IHJlcXVpcmVkIGlmIG1hcCBpcyBzdGF0aWNcbiAgICByZXR1cm4gdGhpcy5fY2xpZW50SWQgJiYgKHRoaXMuX3NpZ25hdHVyZSB8fCAhdGhpcy5faXNTdGF0aWMpO1xuICB9XG5cbiAgaW5pdCAoZWwsIG1hcERhdGEpIHtcbiAgICBpZiAoIW1hcERhdGEgfHwgbWFwRGF0YS5tYXBNYXJrZXJzLmxlbmd0aCA8PSAwKSB7XG4gICAgICB0aGlzLl9tYXAgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gTk9URShiaWxseSkgVGhpcyB0aW1lb3V0IGlzIGEgaGFjayBmb3IgZGVhbGluZyB3aXRoIGFzeW5jIG5hdHVyZS5cbiAgICAvLyBPbmx5IGhlcmUgZm9yIGRlbW8gcHVycG9zZXMsIHNvIHdlJ2xsIGZpeCBsYXRlci5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBjb250YWluZXIgPSBET00ucXVlcnkoZWwpO1xuICAgICAgRE9NLmNzcyhjb250YWluZXIsIHtcbiAgICAgICAgd2lkdGg6IHRoaXMuX3dpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuX2hlaWdodFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMubWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChjb250YWluZXIsIHtcbiAgICAgICAgem9vbTogdGhpcy5fem9vbVxuICAgICAgfSk7XG5cbiAgICAgIC8vIEFwcGx5IG91ciBzZWFyY2ggZGF0YSB0byBvdXIgR29vZ2xlTWFwXG4gICAgICBsZXQgYm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xuICAgICAgbGV0IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MgPSBHb29nbGVNYXBNYXJrZXJDb25maWcuZnJvbShcbiAgICAgICAgbWFwRGF0YS5tYXBNYXJrZXJzLFxuICAgICAgICB0aGlzLl9waW5Db25maWcsXG4gICAgICAgIHRoaXMubWFwKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnb29nbGVNYXBNYXJrZXJDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKGdvb2dsZU1hcE1hcmtlckNvbmZpZ3NbaV0pO1xuICAgICAgICBib3VuZHMuZXh0ZW5kKG1hcmtlci5wb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhib3VuZHMpO1xuICAgIH0sIDEwMCk7XG4gIH1cbn1cblxuLy8gVE9ETyhiaWxseSkgTW92ZSB0byBvd24gY2xhc3NcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXBNYXJrZXJDb25maWcge1xuICBjb25zdHJ1Y3RvciAob3B0cykge1xuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBnb29nbGUgbWFwLCB0aGF0IHRoZSBtYXJrZXIgaXMgYXBwZW5kZWQgdG9cbiAgICAgKiBAdHlwZSB7R29vZ2xlTWFwfVxuICAgICAqL1xuICAgIHRoaXMubWFwID0gb3B0cy5tYXAgfHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBtYXJrZXIgKGxhdC9sbmcpXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLnBvc2l0aW9uID0gb3B0cy5wb3NpdGlvbiB8fCB7XG4gICAgICBsYXQ6IHVuZGVmaW5lZCxcbiAgICAgIGxuZzogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBwcm9wZXJ0aWVzL3NldHRpbmdzIG9mIHRoZSBpY29uIHVzZWQgZm9yIHRoZSBtYXJrZXJcbiAgICAgKiBlLmcuIHtcbiAgICAgKiAgICAgICAgYW5jaG9yOiB7IHg6IDAsIHk6IDAgfVxuICAgICAqICAgICAgICB1cmw6ICdwYXRoL3RvL3VybC5qcGcnXG4gICAgICogICAgICAgIHNjYWxlZFNpemU6IHsgdzogMCwgaDogMCB9XG4gICAgICogICAgICAgfVxuICAgICAqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLmljb24gPSBvcHRzLmljb24gfHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIG9mIHRoZSBtYXJrZXIgdG8gdXNlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmxhYmVsID0gb3B0cy5sYWJlbCB8fCB1bmRlZmluZWQ7XG4gIH1cblxuICAvKipcbiAgICogU2VyaWFsaXplcyBhbiBhcnJheSBvZiBtYXJrZXIgY29uZmlnc1xuICAgKiBAcGFyYW0ge0dvb2dsZU1hcE1hcmtlckNvbmZpZ1tdfSBnb29nbGVNYXBNYXJrZXJDb25maWdzXG4gICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICovXG4gIHN0YXRpYyBzZXJpYWxpemUgKGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MpIHtcbiAgICBsZXQgc2VyaWFsaXplZE1hcmtlcnMgPSBbXTtcbiAgICBnb29nbGVNYXBNYXJrZXJDb25maWdzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgc2VyaWFsaXplZE1hcmtlcnMucHVzaChgbWFya2Vycz1sYWJlbDoke21hcmtlci5sYWJlbH18JHttYXJrZXIucG9zaXRpb24ubGF0fSwke21hcmtlci5wb3NpdGlvbi5sbmd9YCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZWRNYXJrZXJzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgc3RvcmFnZSBkYXRhIG1vZGVsIG9mIG1hcmtlcnMgaW50byBHb29nbGVBUElNYXJrZXJcbiAgICogQHBhcmFtIHtHb29nbGVNYXB9IEEgcmVmZXJlbmNlIHRvIHRoZSBnb29nbGUgbWFwIHRvIGFwcGx5IHRoZSBtYXJrZXIgdG9cbiAgICogQHBhcmFtIHtvYmplY3RbXX0gbWFya2VycyBUaGUgZGF0YSBvZiB0aGUgbWFya2VyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwaW5Db25maWcgVGhlIGNvbmZpZ3VyYXRpb24gdG8gYXBwbHkgdG8gdGhlIG1hcmtlclxuICAgKiBAcmV0dXJucyB7R29vZ2xlTWFwTWFya2VyQ29uZmlnW119XG4gICAqL1xuICBzdGF0aWMgZnJvbSAobWFya2VycywgcGluQ29uZmlnLCBtYXApIHtcbiAgICBsZXQgZ29vZ2xlTWFwTWFya2VyQ29uZmlncyA9IFtdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShtYXJrZXJzKSkge1xuICAgICAgbWFya2VycyA9IFttYXJrZXJzXTtcbiAgICB9XG5cbiAgICBtYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgLy8gU3VwcG9ydCBjb25maWd1cmF0aW9uIGFzIGEgZnVuY3Rpb25cbiAgICAgIGxldCBwaW5Db25maWdPYmogPSBwaW5Db25maWc7XG4gICAgICBpZiAodHlwZW9mIHBpbkNvbmZpZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwaW5Db25maWdPYmogPSBwaW5Db25maWcoXG4gICAgICAgICAgbWFya2VyLml0ZW0sXG4gICAgICAgICAgTWFwUHJvdmlkZXIuREVGQVVMVF9QSU5fQ09ORklHLFxuICAgICAgICAgIG1hcmtlcik7XG4gICAgICB9XG5cbiAgICAgIC8vIFRyYW5zZm9ybSBvdXIgQ29uZmlndXJhdGlvbiBPYmplY3QgaW50byB0aGUgZXhwZWN0ZWRcbiAgICAgIC8vIEdvb2dsZSBBUEkgZm9ybWF0LlxuICAgICAgbGV0IGljb24gPSB7fTtcbiAgICAgIGlmIChwaW5Db25maWdPYmouYW5jaG9yKSB7XG4gICAgICAgIGljb24uYW5jaG9yID0gZ29vZ2xlLm1hcHMuUG9pbnQocGluQ29uZmlnT2JqLmFuY2hvci54LCBwaW5Db25maWdPYmouYW5jaG9yLnkpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluQ29uZmlnT2JqLnNjYWxlZFNpemUpIHtcbiAgICAgICAgaWNvbi5zY2FsZWRTaXplID0gZ29vZ2xlLm1hcHMuU2l6ZShwaW5Db25maWdPYmouc2NhbGVkU2l6ZS53LCBwaW5Db25maWdPYmouc2NhbGVkU2l6ZS5oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpbkNvbmZpZ09iai51cmwpIHtcbiAgICAgICAgaWNvbi51cmwgPSBwaW5Db25maWdPYmoudXJsO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluQ29uZmlnT2JqLnN2Zykge1xuICAgICAgICBpY29uLnVybCA9IGBkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwgJHtlbmNvZGVVUklDb21wb25lbnQocGluQ29uZmlnT2JqLnN2Zyl9YDtcbiAgICAgIH1cblxuICAgICAgbGV0IGxhYmVsO1xuICAgICAgaWYgKHBpbkNvbmZpZ09iai5sYWJlbCkge1xuICAgICAgICBsYWJlbCA9IHBpbkNvbmZpZ09iai5sYWJlbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhYmVsID0gbWFya2VyLmxhYmVsLnRvU3RyaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIE5PVEUoYmlsbHkpIEdvb2dsZSBtYXBzIGRvZXNuJ3QgaGFuZGxlIGVtcHR5IGljb24gb2JqZWN0cyBuaWNlbHlcbiAgICAgIC8vIE1ha2UgZ29vZ2xlIG1hcHMgaGFwcHkgaWYgbm8gc2V0dGluZ3MgZm9yIGljb24gYXJlIHByb3ZpZGVkO1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGljb24pLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpY29uID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBnb29nbGVNYXBNYXJrZXJDb25maWdzLnB1c2goXG4gICAgICAgIG5ldyBHb29nbGVNYXBNYXJrZXJDb25maWcoe1xuICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICBsYXQ6IG1hcmtlci5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxuZzogbWFya2VyLmxvbmdpdHVkZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaWNvbjogaWNvbixcbiAgICAgICAgICBsYWJlbDogbGFiZWxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZ29vZ2xlTWFwTWFya2VyQ29uZmlncztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTWFwQm94TWFwUHJvdmlkZXIgKi9cblxuaW1wb3J0IE1hcFByb3ZpZGVyIGZyb20gJy4vbWFwcHJvdmlkZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi8uLi9kb20vZG9tJztcblxuLyogZ2xvYmFsIG1hcGJveGdsICovXG5cbi8qKlxuICogTWFwQm94TWFwUHJvdmlkZXIgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgYSBNYXBQcm92aWRlclxuICogdGhhdCBoYW5kbGVzIHRoZSBpbnRlZ3JhdGlvbiB3aXRoIHRoZSB0aGlyZCBwYXJ0eSBBUEkgdG8gZXhwb3NlIG1hcHMuXG4gKiBAZXh0ZW5kcyBNYXBQcm92aWRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBCb3hNYXBQcm92aWRlciBleHRlbmRzIE1hcFByb3ZpZGVyIHtcbiAgLyoqXG4gICAqIExvYWQgdGhlIGV4dGVybmFsIEpTIExpYnJhcnlcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25Mb2FkIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRvIGludm9rZSBvbmNlIHRoZSBKUyBpcyBsb2FkZWQuXG4gICAqL1xuICBsb2FkSlMgKG9uTG9hZCkge1xuICAgIGxldCBzY3JpcHQgPSBET00uY3JlYXRlRWwoJ3NjcmlwdCcsIHtcbiAgICAgIGlkOiAneWV4dC1tYXAtanMnLFxuICAgICAgb25sb2FkOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgbWFwYm94Z2wuYWNjZXNzVG9rZW4gPSB0aGlzLl9hcGlLZXk7XG5cbiAgICAgICAgb25Mb2FkKCk7XG4gICAgICB9LFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzcmM6ICdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MC40NC4xL21hcGJveC1nbC5qcydcbiAgICB9KTtcblxuICAgIGxldCBjc3MgPSBET00uY3JlYXRlRWwoJ2xpbmsnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWNzcycsXG4gICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgIGhyZWY6ICdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MC40NC4xL21hcGJveC1nbC5jc3MnXG4gICAgfSk7XG5cbiAgICBET00uYXBwZW5kKCdib2R5JywgY3NzKTtcbiAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgfVxuXG4gIGdlbmVyYXRlU3RhdGljIChtYXBEYXRhKSB7XG4gICAgbGV0IG1hcGJveE1hcE1hcmtlckNvbmZpZ3MgPSBNYXBCb3hNYXJrZXJDb25maWcuZnJvbShcbiAgICAgIG1hcERhdGEubWFwTWFya2VycyxcbiAgICAgIHRoaXMuX3BpbkNvbmZpZ1xuICAgICk7XG5cbiAgICBsZXQgY2VudGVyID0gbWFwRGF0YS5tYXBDZW50ZXI7XG4gICAgbGV0IHdpZHRoID0gdGhpcy5fd2lkdGggfHwgNjAwO1xuICAgIGxldCBoZWlnaHQgPSB0aGlzLl9oZWlnaHQgfHwgMjAwO1xuICAgIGxldCB6b29tID0gdGhpcy5fem9vbSB8fCA5O1xuXG4gICAgbGV0IGVuY29kZWRNYXJrZXJzID0gTWFwQm94TWFya2VyQ29uZmlnLnNlcmlhbGl6ZShtYXBib3hNYXBNYXJrZXJDb25maWdzKTtcbiAgICByZXR1cm4gYDxpbWcgc3JjPVwiaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9zdHlsZXMvdjEvbWFwYm94L3N0cmVldHMtdjExL3N0YXRpYy8ke2VuY29kZWRNYXJrZXJzfS8ke2NlbnRlci5sb25naXR1ZGV9LCR7Y2VudGVyLmxhdGl0dWRlfSwke3pvb219L2F1dG8vJHt3aWR0aH14JHtoZWlnaHR9P2FjY2Vzc190b2tlbj0ke3RoaXMuX2FwaUtleX1cIj5gO1xuICB9XG5cbiAgaW5pdCAoZWwsIG1hcERhdGEpIHtcbiAgICBpZiAoIW1hcERhdGEgfHwgbWFwRGF0YS5tYXBNYXJrZXJzLmxlbmd0aCA8PSAwKSB7XG4gICAgICB0aGlzLl9tYXAgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRhaW5lciA9IERPTS5xdWVyeShlbCk7XG4gICAgRE9NLmNzcyhjb250YWluZXIsIHtcbiAgICAgIHdpZHRoOiB0aGlzLl93aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5faGVpZ2h0XG4gICAgfSk7XG5cbiAgICB0aGlzLl9tYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgem9vbTogdGhpcy5fem9vbSxcbiAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXY5JyxcbiAgICAgIGNlbnRlcjogW21hcERhdGEubWFwQ2VudGVyLmxvbmdpdHVkZSwgbWFwRGF0YS5tYXBDZW50ZXIubGF0aXR1ZGVdXG4gICAgfSk7XG5cbiAgICBjb25zdCBtYXBib3hNYXBNYXJrZXJDb25maWdzID0gTWFwQm94TWFya2VyQ29uZmlnLmZyb20oXG4gICAgICBtYXBEYXRhLm1hcE1hcmtlcnMsXG4gICAgICB0aGlzLl9waW5Db25maWcsXG4gICAgICB0aGlzLl9tYXApO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXBib3hNYXBNYXJrZXJDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgd3JhcHBlciA9IG1hcGJveE1hcE1hcmtlckNvbmZpZ3NbaV0ud3JhcHBlcjtcbiAgICAgIGxldCBjb29yZHMgPSBuZXcgbWFwYm94Z2wuTG5nTGF0KFxuICAgICAgICBtYXBib3hNYXBNYXJrZXJDb25maWdzW2ldLnBvc2l0aW9uLmxvbmdpdHVkZSxcbiAgICAgICAgbWFwYm94TWFwTWFya2VyQ29uZmlnc1tpXS5wb3NpdGlvbi5sYXRpdHVkZSk7XG4gICAgICBsZXQgbWFya2VyID0gbmV3IG1hcGJveGdsLk1hcmtlcih3cmFwcGVyKS5zZXRMbmd0TGF0KGNvb3Jkcyk7XG4gICAgICBtYXJrZXIuYWRkVG8odGhpcy5fbWFwKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hcEJveE1hcmtlckNvbmZpZyB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIG1hcGJveCBtYXAsIHRoYXQgdGhlIG1hcmtlciBpcyBhcHBlbmRlZCB0b1xuICAgICAqIEB0eXBlIHtNYXBCb3h9XG4gICAgICovXG4gICAgdGhpcy5tYXAgPSBvcHRzLm1hcCB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1hcmtlciAobGF0L2xuZylcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMucG9zaXRpb24gPSBvcHRzLnBvc2l0aW9uIHx8IHtcbiAgICAgIGxhdGl0dWRlOiB1bmRlZmluZWQsXG4gICAgICBsb25naXR1ZGU6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaHRtbCBlbGVtZW50IHRvIGJlIHVzZWQgYXMgdGhlIG1hcCBtYXJrZXJcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMud3JhcHBlciA9IG9wdHMud3JhcHBlciB8fCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgb2YgdGhlIG1hcmtlciB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubGFiZWwgPSBvcHRzLmxhYmVsIHx8IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGFuIGFycmF5IG9mIG1hcmtlciBjb25maWdzXG4gICAqIEBwYXJhbSB7TWFwQm94TWFya2VyQ29uZmlnW119IG1hcGJveE1hcE1hcmtlckNvbmZpZ3NcbiAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgKi9cbiAgc3RhdGljIHNlcmlhbGl6ZSAobWFwYm94TWFwTWFya2VyQ29uZmlncykge1xuICAgIGxldCBzZXJpYWxpemVkTWFya2VycyA9IFtdO1xuICAgIG1hcGJveE1hcE1hcmtlckNvbmZpZ3MuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBzZXJpYWxpemVkTWFya2Vycy5wdXNoKGBwaW4tcy0ke21hcmtlci5sYWJlbH0oJHttYXJrZXIucG9zaXRpb24ubG9uZ2l0dWRlfSwke21hcmtlci5wb3NpdGlvbi5sYXRpdHVkZX0pYCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZWRNYXJrZXJzLmpvaW4oJywnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgc3RvcmFnZSBkYXRhIG1vZGVsIG9mIG1hcmtlcnMgaW50byBHb29nbGVBUElNYXJrZXJcbiAgICogQHBhcmFtIHtNYXBCb3h9IEEgcmVmZXJlbmNlIHRvIHRoZSBnb29nbGUgbWFwIHRvIGFwcGx5IHRoZSBtYXJrZXIgdG9cbiAgICogQHBhcmFtIHtvYmplY3RbXX0gbWFya2VycyBUaGUgZGF0YSBvZiB0aGUgbWFya2VyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwaW5Db25maWcgVGhlIGNvbmZpZ3VyYXRpb24gdG8gYXBwbHkgdG8gdGhlIG1hcmtlclxuICAgKiBAcmV0dXJucyB7TWFwQm94TWFya2VyQ29uZmlnW119XG4gICAqL1xuICBzdGF0aWMgZnJvbSAobWFya2VycywgcGluQ29uZmlnLCBtYXApIHtcbiAgICBsZXQgbWFwYm94TWFwTWFya2VyQ29uZmlncyA9IFtdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShtYXJrZXJzKSkge1xuICAgICAgbWFya2VycyA9IFttYXJrZXJzXTtcbiAgICB9XG5cbiAgICBtYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgLy8gU3VwcG9ydCBjb25maWd1cmF0aW9uIGFzIGEgZnVuY3Rpb25cbiAgICAgIGxldCBwaW5Db25maWdPYmogPSBwaW5Db25maWc7XG4gICAgICBpZiAodHlwZW9mIHBpbkNvbmZpZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwaW5Db25maWdPYmogPSBwaW5Db25maWcoXG4gICAgICAgICAgbWFya2VyLml0ZW0sXG4gICAgICAgICAgTWFwUHJvdmlkZXIuREVGQVVMVF9QSU5fQ09ORklHLFxuICAgICAgICAgIG1hcmtlcik7XG4gICAgICB9XG5cbiAgICAgIGxldCB3cmFwcGVyID0gcGluQ29uZmlnT2JqLndyYXBwZXIgPyBwaW5Db25maWdPYmoud3JhcHBlciA6IG51bGw7XG5cbiAgICAgIG1hcGJveE1hcE1hcmtlckNvbmZpZ3MucHVzaChcbiAgICAgICAgbmV3IE1hcEJveE1hcmtlckNvbmZpZyh7XG4gICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgIGxhdGl0dWRlOiBtYXJrZXIubGF0aXR1ZGUsXG4gICAgICAgICAgICBsb25naXR1ZGU6IG1hcmtlci5sb25naXR1ZGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHdyYXBwZXI6IHdyYXBwZXJcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWFwYm94TWFwTWFya2VyQ29uZmlncztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgTWFwQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuaW1wb3J0IEdvb2dsZU1hcFByb3ZpZGVyIGZyb20gJy4vcHJvdmlkZXJzL2dvb2dsZW1hcHByb3ZpZGVyJztcbmltcG9ydCBNYXBCb3hNYXBQcm92aWRlciBmcm9tICcuL3Byb3ZpZGVycy9tYXBib3htYXBwcm92aWRlcic7XG5cbmltcG9ydCBTdG9yYWdlS2V5cyBmcm9tICcuLi8uLi8uLi9jb3JlL3N0b3JhZ2Uvc3RvcmFnZWtleXMnO1xuXG5jb25zdCBQcm92aWRlclR5cGVzID0ge1xuICAnZ29vZ2xlJzogR29vZ2xlTWFwUHJvdmlkZXIsXG4gICdtYXBib3gnOiBNYXBCb3hNYXBQcm92aWRlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogQmluZCB0aGlzIGNvbXBvbmVudCB0byBsaXN0ZW4gdG8gdGhlIHN0b3JhZ2UgYmFzZWQgb24gdGhpcyBrZXlcbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuVkVSVElDQUxfUkVTVUxUUztcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IHRlbXBsYXRlIHRvIHVzZSB0byByZW5kZXIgdGhpcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncmVzdWx0cy9tYXAnO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWxpYXNlZCB1c2VkIHRvIGRldGVybWluZSB0aGUgdHlwZSBvZiBtYXAgcHJvdmlkZXIgdG8gdXNlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9tYXBQcm92aWRlciA9IG9wdHMubWFwUHJvdmlkZXI7XG4gICAgaWYgKCF0aGlzLl9tYXBQcm92aWRlciB8fCAhKHRoaXMuX21hcFByb3ZpZGVyLnRvTG93ZXJDYXNlKCkgaW4gUHJvdmlkZXJUeXBlcykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWFwQ29tcG9uZW50OiBJbnZhbGlkIE1hcCBQcm92aWRlcjsgbXVzdCBiZSBgZ29vZ2xlYCBvciBgbWFwQm94YCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIGluZGljYXRpb24gb2Ygd2hldGhlciBvciBub3QgdG8gdXNlIGEgc3RhdGljIG9yIGR5bmFtaWMgbWFwXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5faXNTdGF0aWMgPSBvcHRzLmlzU3RhdGljIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gYW4gaW5zdGFuY2Ugb2YgdGhlIHtNYXBQcm92aWRlcn0gdGhhdCdzIGNvbnN0cnVjdGVkXG4gICAgICogQHR5cGUge01hcFByb3ZpZGVyfVxuICAgICAqL1xuICAgIHRoaXMuX21hcCA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTWFwJztcbiAgfVxuXG4gIC8vIFRPRE8oYmlsbHkpIE1ha2UgUHJvdmlkZXJUeXBlcyBhIGZhY3RvcnkgY2xhc3NcbiAgZ2V0UHJvdmlkZXJJbnN0YW5jZSAodHlwZSkge1xuICAgIHJldHVybiBuZXcgUHJvdmlkZXJUeXBlc1t0eXBlLnRvTG93ZXJDYXNlKCldKHRoaXMuX29wdHMpO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIHRoaXMuX21hcCA9IHRoaXMuZ2V0UHJvdmlkZXJJbnN0YW5jZSh0aGlzLl9tYXBQcm92aWRlcik7XG4gICAgbGV0IG1hcERhdGEgPSB0aGlzLmdldFN0YXRlKCdtYXAnKTtcbiAgICBpZiAobWFwRGF0YSA9PT0gdW5kZWZpbmVkICYmIHRoaXMuX2lzU3RhdGljKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTdGF0aWMpIHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIFRoZSBleGlzdGluZyB0ZW1wbGF0ZSBzaG91bGQganVzdCB0YWtlIGluIHRoZSBtYXAgYGltZ1VSTGAgYXMgZGF0YVxuICAgICAgLy8gSW5zdGVhZCBvZiBvdmVycmlkaW5nIHRoZSB0ZW1wbGF0ZSBsaWtlIHNvLCBidXQgTkJEIGZvciBub3cuXG4gICAgICB0aGlzLnNldFRlbXBsYXRlKHRoaXMuX21hcC5nZW5lcmF0ZVN0YXRpYyhtYXBEYXRhKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLl9tYXAubG9hZEpTKCk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICB0aGlzLl9tYXAub25Mb2FkZWQoKCkgPT4ge1xuICAgICAgdGhpcy5fbWFwLmluaXQodGhpcy5fY29udGFpbmVyLCB0aGlzLmdldFN0YXRlKCdtYXAnKSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSwgdmFsKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKGRhdGEsIHZhbCk7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFJlc3VsdHNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL2xvY2F0aW9ucmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Blb3BsZXJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBNYXBDb21wb25lbnQgZnJvbSAnLi4vbWFwL21hcGNvbXBvbmVudCc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuY29uc3QgUmVzdWx0VHlwZSA9IHtcbiAgRVZFTlQ6ICdldmVudCcsXG4gIExPQ0FUSU9OOiAnbG9jYXRpb24nLFxuICBQRU9QTEU6ICdwZW9wbGUnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHRzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlZFUlRJQ0FMX1JFU1VMVFM7XG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3Jlc3VsdHMvcmVzdWx0cyc7XG4gICAgdGhpcy5saW1pdCA9IG9wdHMubGltaXQgfHwgNTtcbiAgICB0aGlzLl9pdGVtQ29uZmlnID0ge1xuICAgICAgZ2xvYmFsOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH0sXG4gICAgICBbRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlXToge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9LFxuICAgICAgW0xvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZV06IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIFtQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlXToge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChvcHRzLnJlbmRlckl0ZW0gPT09IHVuZGVmaW5lZCAmJiBvcHRzLl9wYXJlbnRPcHRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdHMucmVuZGVySXRlbSA9IG9wdHMuX3BhcmVudE9wdHMucmVuZGVySXRlbTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5pdGVtVGVtcGxhdGUgPT09IHVuZGVmaW5lZCAmJiBvcHRzLl9wYXJlbnRPcHRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdHMuaXRlbVRlbXBsYXRlID0gb3B0cy5fcGFyZW50T3B0cy5pdGVtVGVtcGxhdGU7XG4gICAgfVxuXG4gICAgdGhpcy5jb25maWd1cmVJdGVtKHtcbiAgICAgIHJlbmRlcjogb3B0cy5yZW5kZXJJdGVtLFxuICAgICAgdGVtcGxhdGU6IG9wdHMuaXRlbVRlbXBsYXRlXG4gICAgfSk7XG4gIH1cblxuICBtb3VudCAoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZ2V0U3RhdGUoKSkubGVuZ3RoID4gMCkge1xuICAgICAgc3VwZXIubW91bnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgZHVwbGljYXRlc0FsbG93ZWQgKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBpbmNsdWRlTWFwOiB0aGlzLl9vcHRzLmluY2x1ZGVNYXAsXG4gICAgICBtYXBDb25maWc6IHRoaXMuX29wdHMubWFwQ29uZmlnXG4gICAgfSksIHZhbCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnVmVydGljYWxSZXN1bHRzJztcbiAgfVxuXG4gIGNvbmZpZ3VyZUl0ZW0gKGNvbmZpZykge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5faXRlbUNvbmZpZy5nbG9iYWwucmVuZGVyID0gY29uZmlnLnJlbmRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbmZpZy5yZW5kZXIpIHtcbiAgICAgICAgdGhpcy5zZXRJdGVtUmVuZGVyKGtleSwgY29uZmlnLnJlbmRlcltrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2l0ZW1Db25maWcuZ2xvYmFsLnRlbXBsYXRlID0gY29uZmlnLnRlbXBsYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29uZmlnLnRlbXBsYXRlKSB7XG4gICAgICAgIHRoaXMuc2V0SXRlbVRlbXBsYXRlKGtleSwgY29uZmlnLnRlbXBsYXRlW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldEl0ZW1UZW1wbGF0ZSAodHlwZSwgdGVtcGxhdGUpIHtcbiAgICBsZXQgY2xhenogPSB0aGlzLmdldEl0ZW1Db21wb25lbnQodHlwZSk7XG4gICAgdGhpcy5faXRlbUNvbmZpZ1tjbGF6ei50eXBlXS50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICB9XG5cbiAgc2V0SXRlbVJlbmRlciAodHlwZSwgcmVuZGVyKSB7XG4gICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KHR5cGUpO1xuICAgIHRoaXMuX2l0ZW1Db25maWdbY2xhenoudHlwZV0ucmVuZGVyID0gcmVuZGVyO1xuICB9XG5cbiAgZ2V0SXRlbUNvbXBvbmVudCAodHlwZSkge1xuICAgIGxldCBjb21wID0gUmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFJlc3VsdFR5cGUuRVZFTlQ6XG4gICAgICAgIGNvbXAgPSBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUmVzdWx0VHlwZS5MT0NBVElPTjpcbiAgICAgICAgY29tcCA9IExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSZXN1bHRUeXBlLlBFT1BMRTpcbiAgICAgICAgY29tcCA9IFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcDtcbiAgfVxuXG4gIGFkZENoaWxkIChkYXRhLCB0eXBlLCBvcHRzKSB7XG4gICAgLy8gVE9ETyhiaWxseSkgUmVmYWN0b3IgdGhlIHdheSBjb25maWd1cmF0aW9uIGFuZCBkYXRhIGZsb3dzXG4gICAgLy8gdGhyb3VnaCB0b3AgbGV2ZWwgY29tcG9uZW50cyB0byBjaGlsZCBjb21wb25lbnRzLlxuICAgIGlmICh0eXBlID09PSBSZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlKSB7XG4gICAgICBsZXQgY2xhenogPSB0aGlzLmdldEl0ZW1Db21wb25lbnQoZGF0YS50eXBlKTtcbiAgICAgIGlmIChjbGF6eikge1xuICAgICAgICB0eXBlID0gY2xhenoudHlwZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IE1hcENvbXBvbmVudC50eXBlKSB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICBtYXA6IGRhdGFcbiAgICAgIH07XG4gICAgICBjb25zdCBuZXdPcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fb3B0cy5tYXBDb25maWcsIG9wdHMpO1xuICAgICAgcmV0dXJuIHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIG5ld09wdHMpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHRoZSBwcm9wZXIgaXRlbSByZW5kZXJzIHRvIHRoZSB0aGUgY29tcG9uZW50c1xuICAgIC8vIGhhdmUganVzdCBiZWVuIGNvbnN0cnVjdGVkLiBQcmlvcml0aXplIGdsb2JhbCBvdmVyIGluZGl2aWR1YWwgaXRlbXMuXG4gICAgbGV0IGNvbXAgPSBzdXBlci5hZGRDaGlsZChkYXRhLCB0eXBlLCBvcHRzKTtcbiAgICBsZXQgZ2xvYmFsQ29uZmlnID0gdGhpcy5faXRlbUNvbmZpZy5nbG9iYWw7XG4gICAgbGV0IGl0ZW1Db25maWcgPSB0aGlzLl9pdGVtQ29uZmlnW2NvbXAudHlwZV07XG4gICAgbGV0IGhhc0dsb2JhbFJlbmRlciA9IHR5cGVvZiBnbG9iYWxDb25maWcucmVuZGVyID09PSAnZnVuY3Rpb24nO1xuICAgIGxldCBoYXNHbG9iYWxUZW1wbGF0ZSA9IHR5cGVvZiBnbG9iYWxDb25maWcudGVtcGxhdGUgPT09ICdzdHJpbmcnO1xuXG4gICAgaWYgKGhhc0dsb2JhbFJlbmRlcikge1xuICAgICAgY29tcC5zZXRSZW5kZXIoZ2xvYmFsQ29uZmlnLnJlbmRlcik7XG4gICAgfVxuXG4gICAgaWYgKGhhc0dsb2JhbFRlbXBsYXRlKSB7XG4gICAgICBjb21wLnNldFRlbXBsYXRlKGdsb2JhbENvbmZpZy50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKCFpdGVtQ29uZmlnKSB7XG4gICAgICByZXR1cm4gY29tcDtcbiAgICB9XG5cbiAgICBpZiAoIWhhc0dsb2JhbFJlbmRlciAmJiBpdGVtQ29uZmlnLnJlbmRlcikge1xuICAgICAgY29tcC5zZXRSZW5kZXIoaXRlbUNvbmZpZy5yZW5kZXIpO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHRlbXBsYXRlIHNwZWNpZmljIHNpdHVhdGlvblxuICAgIGlmICghaGFzR2xvYmFsVGVtcGxhdGUgJiYgaXRlbUNvbmZpZy50ZW1wbGF0ZSkge1xuICAgICAgY29tcC5zZXRUZW1wbGF0ZShpdGVtQ29uZmlnLnRlbXBsYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXA7XG4gIH1cbn1cbiIsIi8qKiBAbW9kdWxlIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgKi9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IFN0b3JhZ2VLZXlzIGZyb20gJy4uLy4uLy4uL2NvcmUvc3RvcmFnZS9zdG9yYWdla2V5cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gU3RvcmFnZUtleXMuVU5JVkVSU0FMX1JFU1VMVFM7XG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3Jlc3VsdHMvdW5pdmVyc2FscmVzdWx0cyc7XG4gICAgdGhpcy5fbGltaXQgPSBvcHRzLmxpbWl0IHx8IDEwO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1VuaXZlcnNhbFJlc3VsdHMnO1xuICB9XG5cbiAgc3RhdGljIGFyZUR1cGxpY2F0ZU5hbWVzQWxsb3dlZCAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpbml0IChvcHRzKSB7XG4gICAgc3VwZXIuaW5pdChvcHRzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZENoaWxkIChkYXRhID0ge30sIHR5cGUpIHtcbiAgICBsZXQgb3B0cyA9IHRoaXMuZ2V0Q2hpbGRDb25maWcoW2RhdGFbJ3ZlcnRpY2FsQ29uZmlnSWQnXV0pO1xuICAgIHJldHVybiBzdXBlci5hZGRDaGlsZChkYXRhLCB0eXBlLCBvcHRzKTtcbiAgfVxuXG4gIGdldENoaWxkQ29uZmlnIChjb25maWdJZCkge1xuICAgIGxldCBjb25maWcgPSB0aGlzLl9vcHRzLmNvbmZpZztcbiAgICBpZiAoY29uZmlnID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX29wdHNbJ2NvbmZpZyddW2NvbmZpZ0lkXSB8fCB0aGlzLl9vcHRzWydjb25maWcnXTtcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50ICovXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RvcmFnZUtleXMgZnJvbSAnLi4vLi4vLi4vY29yZS9zdG9yYWdlL3N0b3JhZ2VrZXlzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9IFN0b3JhZ2VLZXlzLlVOSVZFUlNBTF9SRVNVTFRTO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3F1ZXN0aW9ucy9zdWJtaXNzaW9uJztcblxuICAgIC8qKlxuICAgICAqIFF1ZXN0aW9uIHN1Ym1pc3Npb24gaXMgYmFzZWQgb24gYSBmb3JtIGFzIGNvbnRleHQuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIG5hdGl2ZSBmb3JtIG5vZGUgd2l0aGluIGNvbnRhaW5lclxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2Zvcm1FbCA9IG9wdHMuZm9ybVNlbGVjdG9yIHx8ICdmb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB0byB1c2UgZm9yIHRoZSBlLW1haWwgYWRkcmVzcyBpbnB1dFxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBgRW1haWwgQWRkcmVzc2BcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2VtYWlsTGFiZWwgPSBvcHRzLmVtYWlsTGFiZWwgfHwgJypFbWFpbCBBZGRyZXNzOic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgbmFtZSBpbnB1dFxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBgTmFtZWBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX25hbWVMYWJlbCA9IG9wdHMubmFtZUxhYmVsIHx8ICdOYW1lOic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgUXVlc3Rpb25cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gYFdoYXQgaXMgeW91ciBxdWVzdGlvbj9gXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9xdWVzdGlvbkxhYmVsID0gb3B0cy5xdWVzdGlvbkxhYmVsIHx8ICcqV2hhdCBpcyB5b3VyIHF1ZXN0aW9uPyc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgUHJpdmFjeSBQb2xpY3lcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gYFdoYXQgaXMgeW91ciBxdWVzdGlvbj9gXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9wcml2YWN5UG9saWN5TGFiZWwgPSBvcHRzLnByaXZhY3lQb2xpY3lMYWJlbCB8fCAnSSBhZ3JlZSB0byBvdXIgUHJpdmFjeSBQb2xpY3k6JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB0byB1c2UgZm9yIHRoZSBTdWJtaXQgYnV0dG9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIGBTdWJtaXQ/YFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYnV0dG9uTGFiZWwgPSBvcHRzLmJ1dHRvbkxhYmVsIHx8ICdTdWJtaXQnO1xuICB9XG5cbiAgYmVmb3JlTW91bnQgKCkge1xuICAgIC8vIE9ubHkgbW91bnQgb3VyIGNvbXBvbmVudCBpZiB0aGUgcXVlcnkgaGFzIGJlZW4gdHJpZ2dlcmVkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRoaXMuZ2V0U3RhdGUoJ2hhc1F1ZXJpZWQnKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgdGhpcy5pbml0U3VibWl0KHRoaXMuX2Zvcm1FbCk7XG4gIH1cblxuICBpbml0U3VibWl0IChmb3JtU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9mb3JtRWwgPSBmb3JtU2VsZWN0b3I7XG5cbiAgICBsZXQgZm9ybSA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2Zvcm1FbCk7XG5cbiAgICBET00ub24oZm9ybSwgJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAvLyBUT0RPKGJpbGx5KSBTZXJpYWxpemUgZm9ybVxuICAgICAgLy8gdGhpcy5jb3JlLnN1Ym1pdFF1ZXN0aW9uKGZvcm0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1FBU3VibWlzc2lvbic7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSwgdmFsKSB7XG4gICAgLy8gU2luY2Ugd2UncmUgYmluZGluZyB0byBzZWFyY2ggcmVzdWx0cyxcbiAgICAvLyBhbmQgd2Ugb25seSB3YW50IHRvIHNob3cgdGhlIFFBIHN1Ym1pc3Npb25cbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoe1xuICAgICAgaGFzUXVlcmllZDogZGF0YS5zZWN0aW9ucyAhPT0gdW5kZWZpbmVkLFxuICAgICAgZW1haWxMYWJlbDogdGhpcy5fZW1haWxMYWJlbCxcbiAgICAgIG5hbWVMYWJlbDogdGhpcy5fbmFtZUxhYmVsLFxuICAgICAgcXVlc3Rpb25MYWJlbDogdGhpcy5fcXVlc3Rpb25MYWJlbCxcbiAgICAgIHByaXZhY3lQb2xpY3lMYWJlbDogdGhpcy5fcHJpdmFjeVBvbGljeUxhYmVsLFxuICAgICAgYnV0dG9uTGFiZWw6IHRoaXMuX2J1dHRvbkxhYmVsLFxuICAgICAgcXVlc3Rpb246IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpLmdldCgncXVlcnknKVxuICAgIH0pO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tICcuL2NvbXBvbmVudG1hbmFnZXInO1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcblxuaW1wb3J0IE5hdmlnYXRpb25Db21wb25lbnQgZnJvbSAnLi9uYXZpZ2F0aW9uL25hdmlnYXRpb25jb21wb25lbnQnO1xuXG5pbXBvcnQgU2VhcmNoQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL3NlYXJjaGNvbXBvbmVudCc7XG5pbXBvcnQgRmlsdGVyU2VhcmNoQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL2ZpbHRlcnNlYXJjaGNvbXBvbmVudCc7XG5pbXBvcnQgQXV0b0NvbXBsZXRlQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL2F1dG9jb21wbGV0ZWNvbXBvbmVudCc7XG5cbmltcG9ydCBGaWx0ZXJPcHRpb25zQ29tcG9uZW50IGZyb20gJy4vZmlsdGVycy9maWx0ZXJvcHRpb25zY29tcG9uZW50JztcbmltcG9ydCBGaWx0ZXJCb3hDb21wb25lbnQgZnJvbSAnLi9maWx0ZXJzL2ZpbHRlcmJveGNvbXBvbmVudCc7XG5cbmltcG9ydCBEaXJlY3RBbnN3ZXJDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2RpcmVjdGFuc3dlcmNvbXBvbmVudCc7XG5pbXBvcnQgUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcmVzdWx0c2NvbXBvbmVudCc7XG5pbXBvcnQgVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvdW5pdmVyc2FscmVzdWx0c2NvbXBvbmVudCc7XG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2xvY2F0aW9ucmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2V2ZW50cmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9wZW9wbGVyZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmltcG9ydCBNYXBDb21wb25lbnQgZnJvbSAnLi9tYXAvbWFwY29tcG9uZW50JztcblxuaW1wb3J0IFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCBmcm9tICcuL3F1ZXN0aW9ucy9xdWVzdGlvbnN1Ym1pc3Npb25jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX01BTkFHRVIgPSBuZXcgQ29tcG9uZW50TWFuYWdlcigpXG4vLyBDb3JlIENvbXBvbmVudFxuICAucmVnaXN0ZXIoQ29tcG9uZW50KVxuXG4vLyBOYXZpZ2F0aW9uIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKE5hdmlnYXRpb25Db21wb25lbnQpXG5cbi8vIFNlYXJjaCBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihTZWFyY2hDb21wb25lbnQpXG4gIC5yZWdpc3RlcihGaWx0ZXJTZWFyY2hDb21wb25lbnQpXG4gIC5yZWdpc3RlcihBdXRvQ29tcGxldGVDb21wb25lbnQpXG5cbi8vIEZpbHRlciBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihGaWx0ZXJCb3hDb21wb25lbnQpXG4gIC5yZWdpc3RlcihGaWx0ZXJPcHRpb25zQ29tcG9uZW50KVxuXG4vLyBSZXN1bHRzIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKERpcmVjdEFuc3dlckNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihSZXN1bHRzQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoUmVzdWx0c0l0ZW1Db21wb25lbnQpXG4gIC5yZWdpc3RlcihMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50KVxuXG4gIC5yZWdpc3RlcihNYXBDb21wb25lbnQpXG5cbi8vIFF1ZXN0aW9ucyBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQpO1xuIiwiLyoqIEBtb2R1bGUgVGVtcGxhdGVMb2FkZXIgKi9cblxuaW1wb3J0IERPTSBmcm9tICcuLi9kb20vZG9tJztcbmltcG9ydCB7IENPTVBJTEVEX1RFTVBMQVRFU19VUkwgfSBmcm9tICcuLi8uLi9jb3JlL2NvbnN0YW50cyc7XG5cbi8qKlxuICogVGVtcGxhdGVMb2FkZXIgZXhwb3NlcyBhbiBpbnRlcmZhY2UgZm9yIGxvYWRpbmcgdGVtcGxhdGVzIGFzeW5jaHJvbm91c2x5XG4gKiBmcm9tIHRoZSBzZXJ2ZXIgYW5kIHJlZ2lzdGVycyB0aGVtIHdpdGggdGhlIHByb3BlciByZW5kZXJlci5cbiAqIEl0IGFsc28gYWxsb3dzIHlvdSB0byBhc3NpZ24gdGhlbSBzeW5jaHJvbm91c2x5LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZUxvYWRlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICBpZiAoIVRlbXBsYXRlTG9hZGVyLnNldEluc3RhbmNlKHRoaXMpKSB7XG4gICAgICByZXR1cm4gVGVtcGxhdGVMb2FkZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgdXJsIHRvIGZldGNoIGNvbXBpbGVkIHRlbXBsYXRlcyBmcm9tXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlVXJsID0gY29uZmlnLnRlbXBsYXRlVXJsIHx8IENPTVBJTEVEX1RFTVBMQVRFU19VUkw7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB7fTtcbiAgICB0aGlzLl9vbkxvYWRlZCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHRoaXMuX2luaXQoKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRJbnN0YW5jZSAoaW5zdGFuY2UpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UgKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgX2luaXQgKCkge1xuICAgIHRoaXMuZmV0Y2hUZW1wbGF0ZXMoKTtcbiAgfVxuXG4gIGZldGNoVGVtcGxhdGVzICgpIHtcbiAgICAvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgdGVtcGxhdGVzIGxvYWRlZCwgZG8gbm90aGluZ1xuICAgIGxldCBub2RlID0gRE9NLnF1ZXJ5KCcjeWV4dC1hbnN3ZXJzLXRlbXBsYXRlcycpO1xuICAgIGlmIChub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSW5qZWN0IGEgc2NyaXB0IHRvIGZldGNoIHRoZSBjb21waWxlZCB0ZW1wbGF0ZXMsXG4gICAgLy8gd3JhcHBpbmcgaXQgYSBQcm9taXNlIGZvciBjbGVhbmxpbmVzc1xuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBzY3JpcHQgPSBET00uY3JlYXRlRWwoJ3NjcmlwdCcsIHtcbiAgICAgICAgaWQ6ICd5ZXh0LWFuc3dlcnMtdGVtcGxhdGVzJyxcbiAgICAgICAgb25sb2FkOiByZXNvbHZlLFxuICAgICAgICBvbmVycm9yOiByZWplY3QsXG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBzcmM6IHRoaXMuX3RlbXBsYXRlVXJsXG4gICAgICB9KTtcblxuICAgICAgRE9NLmFwcGVuZCgnYm9keScsIHNjcmlwdCk7XG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgLy8gVE9ETyhiaWxseSkgSW1wbG1lbmV0IGVycm9yIGhhbmRsaW5nIGhlcmUgKGUuZy4gcmVxdWVzdCBjb3VsZCBmYWlsKVxuICAgICAgICBjb25zb2xlLmxvZygnVGVtcGxhdGVzIGxvYWRlZCBzdWNjZXNzZnVsbHkhJyk7XG4gICAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZWdpc3RlciB0aGUgdGVtcGxhdGVzIGludGVybmFsbHkgc28gdGhhdCB0aGV5IGNhbiBiZSBsYXRlciBjb25zdW1lZFxuICAgKiAoZS5nLiBieSBjb21wb25lbnRzIGFuZCByZW5kZXJlcnMpIHdpdGggY29udmllbmllbmNlLlxuICAgKlxuICAgKiBgZmV0Y2hUZW1wbGF0ZXNgIHdpbGwgYXV0b21hdGljYWxseSBjYWxsIHRoaXMsIHByb3ZpZGluZyB0aGUgY29tcGlsZWQgdGVtcGxhdGVzIGZyb20gdGhlIHNlcnZlci5cbiAgICovXG4gIHJlZ2lzdGVyICh0ZW1wbGF0ZXMpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXM7XG5cbiAgICAvLyBOb3RpZnkgb3VyIGNvbnN1bWVycyB0aGF0IHRoZSB0ZW1wbGF0ZXMgYXJlIGhlcmUgOilcbiAgICB0aGlzLl9vbkxvYWRlZCh0aGlzLl90ZW1wbGF0ZXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb25Mb2FkZWQgKGNiKSB7XG4gICAgdGhpcy5fb25Mb2FkZWQgPSBjYjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCAodGVtcGxhdGVOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlc1t0ZW1wbGF0ZU5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4gVGhlIGludGVybmFsIHRlbXBsYXRlIGNvbGxlY3Rpb25cbiAgICovXG4gIGdldFRlbXBsYXRlcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlcztcbiAgfVxufVxuIiwiLyoqIEBtb2R1bGUgKi9cblxuZXhwb3J0IHsgQ09NUE9ORU5UX01BTkFHRVIgfSBmcm9tICcuL2NvbXBvbmVudHMvY29uc3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBET00gfSBmcm9tICcuL2RvbS9kb20nO1xuXG5leHBvcnQgeyBSZW5kZXJlcnMgfSBmcm9tICcuL3JlbmRlcmluZy9jb25zdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRlbXBsYXRlTG9hZGVyIH0gZnJvbSAnLi9yZW5kZXJpbmcvdGVtcGxhdGVsb2FkZXInO1xuIiwiLyoqIEBtb2R1bGUgRXJyb3JSZXBvcnRlciAqL1xuXG5pbXBvcnQgeyBBbnN3ZXJzQmFzZUVycm9yIH0gZnJvbSAnLi9lcnJvcnMnO1xuXG5pbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IHsgTElCX1ZFUlNJT04gfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEVycm9yUmVwb3J0ZXIgaXMgdXNlZCBmb3IgcmVwb3J0aW5nIGVycm9ycyB0byB0aGUgc2VydmVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yUmVwb3J0ZXIge1xuICBjb25zdHJ1Y3RvciAoYXBpS2V5LCBhbnN3ZXJzS2V5KSB7XG4gICAgLyoqXG4gICAgICogVGhlIGFwaUtleSB0byB1c2UgZm9yIHJlcG9ydGluZ1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5hcGlLZXkgPSBhcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYW5zd2Vyc0tleSB0byB1c2Ugd2hlbiByZXBvcnRpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuYW5zd2Vyc0tleSA9IGFuc3dlcnNLZXk7XG4gIH1cblxuICAvKipcbiAgICogcmVwb3J0IHNlbmRzIGEgbmV0d29yayByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdG8gYmUgbG9nZ2VkXG4gICAqIEBwYXJhbSB7QW5zd2Vyc0Jhc2VFcnJvcn0gVGhlIGVycm9yIHRvIGJlIHJlcG9ydGVkXG4gICAqL1xuICByZXBvcnQgKGVycikge1xuICAgIGlmICghKGVyciBpbnN0YW5jZW9mIEFuc3dlcnNCYXNlRXJyb3IpIHx8IGVyci5yZXBvcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVyci5yZXBvcnRlZCA9IHRydWU7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9lcnJvcnMnLFxuICAgICAgYXBpS2V5OiB0aGlzLmFwaUtleSxcbiAgICAgIHZlcnNpb246IDIwMTkwMzAxLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdlcnJvcic6IGVyci50b0pzb24oKSxcbiAgICAgICAgJ2xpYlZlcnNpb24nOiBMSUJfVkVSU0lPTixcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLmFuc3dlcnNLZXlcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlcXVlc3QuZ2V0KClcbiAgICAgIC5jYXRjaChjb25zb2xlLmVycik7XG5cbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG4iLCIvKiogQG1vZHVsZSAqL1xuXG5pbXBvcnQgQ29yZSBmcm9tICcuL2NvcmUvY29yZSc7XG5cbmltcG9ydCB7XG4gIFRlbXBsYXRlTG9hZGVyLFxuICBDT01QT05FTlRfTUFOQUdFUixcbiAgUmVuZGVyZXJzLFxuICBET01cbn0gZnJvbSAnLi91aS9pbmRleCc7XG5cbmltcG9ydCBFcnJvclJlcG9ydGVyIGZyb20gJy4vY29yZS9lcnJvcnMvZXJyb3JyZXBvcnRlcic7XG5pbXBvcnQgeyBBbmFseXRpY3NSZXBvcnRlciB9IGZyb20gJy4vY29yZSc7XG5cbi8qKlxuICogVGhlIG1haW4gQW5zd2VycyBpbnRlcmZhY2VcbiAqL1xuY2xhc3MgQW5zd2VycyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBpZiAoIUFuc3dlcnMuc2V0SW5zdGFuY2UodGhpcykpIHtcbiAgICAgIHJldHVybiBBbnN3ZXJzLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2Ugb2YgdGhlIHJlbmRlcmVyIHRvIHVzZSBmb3IgdGhlIGNvbXBvbmVudHNcbiAgICAgKiBUaGlzIGlzIHByb3ZpZGVkIGR1cmluZyBpbml0aWFsaXphdGlvbi5cbiAgICAgKiBAdHlwZSB7UmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcnMuSGFuZGxlYmFycygpO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCBtYW5hZ2VyXG4gICAgICogQHR5cGUge0NvbXBvbmVudE1hbmFnZXJ9XG4gICAgICovXG4gICAgdGhpcy5jb21wb25lbnRzID0gQ09NUE9ORU5UX01BTkFHRVI7XG5cbiAgICAvKipcbiAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGludm9rZSBvbmNlIHRoZSBsaWJyYXJ5IGlzIHJlYWR5LlxuICAgICAqIFR5cGljYWxseSBmaXJlZCBhZnRlciB0ZW1wbGF0ZXMgYXJlIGZldGNoZWQgZnJvbSBzZXJ2ZXIgZm9yIHJlbmRlcmluZy5cbiAgICAgKi9cbiAgICB0aGlzLl9vblJlYWR5ID0gZnVuY3Rpb24gKCkge307XG4gIH1cblxuICBzdGF0aWMgc2V0SW5zdGFuY2UgKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIGluaXQgKGNvbmZpZykge1xuICAgIHRoaXMuY29tcG9uZW50cy5zZXRDb3JlKG5ldyBDb3JlKHtcbiAgICAgIGFwaUtleTogY29uZmlnLmFwaUtleSxcbiAgICAgIGFuc3dlcnNLZXk6IGNvbmZpZy5hbnN3ZXJzS2V5LFxuICAgICAgbG9jYWxlOiBjb25maWcubG9jYWxlXG4gICAgfSkpXG4gICAgICAuc2V0UmVuZGVyZXIodGhpcy5yZW5kZXJlcilcbiAgICAgIC5zZXRBbmFseXRpY3NSZXBvcnRlcihuZXcgQW5hbHl0aWNzUmVwb3J0ZXIoY29uZmlnLmFwaUtleSwgY29uZmlnLmFuc3dlcnNLZXkpKTtcblxuICAgIHRoaXMuX29uUmVhZHkgPSBjb25maWcub25SZWFkeSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIGlmIChjb25maWcudXNlVGVtcGxhdGVzID09PSBmYWxzZSB8fCBjb25maWcudGVtcGxhdGVCdW5kbGUpIHtcbiAgICAgIGlmIChjb25maWcudGVtcGxhdGVCdW5kbGUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbml0KGNvbmZpZy50ZW1wbGF0ZUJ1bmRsZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX29uUmVhZHkoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIFRlbXBsYXRlcyBhcmUgY3VycmVudGx5IGRvd25sb2FkZWQgc2VwYXJhdGVseSBmcm9tIHRoZSBDT1JFIGFuZCBVSSBidW5kbGUuXG4gICAgLy8gRnV0dXJlIGVuaGFuY2VtZW50IGlzIHRvIHNoaXAgdGhlIGNvbXBvbmVudHMgd2l0aCB0ZW1wbGF0ZXMgaW4gYSBzZXBhcmF0ZSBidW5kbGUuXG4gICAgdGhpcy50ZW1wbGF0ZXMgPSBuZXcgVGVtcGxhdGVMb2FkZXIoe1xuICAgICAgdGVtcGxhdGVVcmw6IGNvbmZpZy50ZW1wbGF0ZVVybFxuICAgIH0pLm9uTG9hZGVkKCh0ZW1wbGF0ZXMpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuaW5pdCh0ZW1wbGF0ZXMpO1xuXG4gICAgICB0aGlzLl9vblJlYWR5KCk7XG4gICAgfSk7XG5cbiAgICBpZiAoIWNvbmZpZy5zdXBwcmVzc0Vycm9yUmVwb3J0cykge1xuICAgICAgdGhpcy5fZXJyb3JSZXBvcnRlciA9IG5ldyBFcnJvclJlcG9ydGVyKGNvbmZpZy5hcGlLZXksIGNvbmZpZy5hbnN3ZXJzS2V5KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGUgPT4gdGhpcy5fZXJyb3JSZXBvcnRlci5yZXBvcnQoZS5lcnJvcikpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VuaGFuZGxlZHJlamVjdGlvbicsIGUgPT4gdGhpcy5fZXJyb3JSZXBvcnRlci5yZXBvcnQoZS5lcnJvcikpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZG9tUmVhZHkgKGNiKSB7XG4gICAgRE9NLm9uUmVhZHkoY2IpO1xuICB9XG5cbiAgb25SZWFkeSAoY2IpIHtcbiAgICB0aGlzLl9vblJlYWR5ID0gY2I7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRDb21wb25lbnQgKHR5cGUsIG9wdHMpIHtcbiAgICBpZiAodHlwZW9mIG9wdHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHRzID0ge1xuICAgICAgICBjb250YWluZXI6IG9wdHNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzLmNyZWF0ZSh0eXBlLCBvcHRzKS5tb3VudCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY3JlYXRlQ29tcG9uZW50IChvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50cy5jcmVhdGUoJ0NvbXBvbmVudCcsIG9wdHMpLm1vdW50KCk7XG4gIH1cblxuICByZWdpc3RlckhlbHBlciAobmFtZSwgY2IpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlZ2lzdGVySGVscGVyKG5hbWUsIGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5jb25zdCBBTlNXRVJTID0gbmV3IEFuc3dlcnMoKTtcbmV4cG9ydCBkZWZhdWx0IEFOU1dFUlM7XG4iXSwibmFtZXMiOlsiTWV0aG9kcyIsIkdFVCIsIlBPU1QiLCJQVVQiLCJERUxFVEUiLCJIdHRwUmVxdWVzdGVyIiwidXJsIiwiZGF0YSIsIm9wdHMiLCJyZXF1ZXN0IiwiZW5jb2RlUGFyYW1zIiwiT2JqZWN0IiwiYXNzaWduIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjcmVkZW50aWFscyIsInVuZGVmaW5lZCIsIm1ldGhvZCIsImZldGNoIiwicGFyYW1zIiwiaGFzUGFyYW0iLCJpbmRleE9mIiwic2VhcmNoUXVlcnkiLCJrZXkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJMSUJfVkVSU0lPTiIsIkFQSV9CQVNFX1VSTCIsIkNPTVBJTEVEX1RFTVBMQVRFU19VUkwiLCJBTkFMWVRJQ1NfQkFTRV9VUkwiLCJBcGlSZXF1ZXN0IiwiX3JlcXVlc3RlciIsIl9iYXNlVXJsIiwiYmFzZVVybCIsIl9lbmRwb2ludCIsImVuZHBvaW50IiwiX2FwaUtleSIsImFwaUtleSIsIl92ZXJzaW9uIiwidmVyc2lvbiIsIl9wYXJhbXMiLCJnZXQiLCJwb3N0IiwiYmFzZVBhcmFtcyIsInVybFBhcmFtcyIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwidG9TdHJpbmciLCJzZWFyY2hQYXJhbXMiLCJoYXMiLCJrZXlzIiwiZm9yRWFjaCIsIkFuc3dlcnNCYXNlRXJyb3IiLCJlcnJvckNvZGUiLCJtZXNzYWdlIiwiYm91bmRhcnkiLCJjYXVzZWRCeSIsImVycm9yTWVzc2FnZSIsInJlcG9ydGVkIiwiYnVpbHRpbkVycm9yIiwiZXJyb3IiLCJBbnN3ZXJzQmFzaWNFcnJvciIsInN0YWNrIiwiRXJyb3IiLCJBbnN3ZXJzQ29tcG9uZW50RXJyb3IiLCJjb21wb25lbnQiLCJBbnN3ZXJzRW5kcG9pbnRFcnJvciIsIkFuc3dlcnNTdG9yYWdlRXJyb3IiLCJzdG9yYWdlS2V5IiwiQW5zd2Vyc0FuYWx5dGljc0Vycm9yIiwiZXZlbnQiLCJTZWFyY2hBcGkiLCJhbnN3ZXJzS2V5IiwiX2Fuc3dlcnNLZXkiLCJsb2NhbGUiLCJfbG9jYWxlIiwicXVlcnlTdHJpbmciLCJ2ZXJ0aWNhbEtleSIsImZpbHRlciIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJBdXRvQ29tcGxldGVEYXRhIiwic2VjdGlvbnMiLCJxdWVyeUlkIiwiZnJlZXplIiwibWFwIiwicyIsImxhYmVsIiwicmVzdWx0cyIsInIiLCJBdXRvQ29tcGxldGVSZXN1bHQiLCJoaWdobGlnaHRlZFZhbHVlIiwiaGlnaGxpZ2h0IiwibWF0Y2hlZFN1YnN0cmluZ3MiLCJ2YWx1ZSIsInNob3J0VmFsdWUiLCJ2YWwiLCJsZW5ndGgiLCJzb3J0IiwiYSIsImIiLCJvZmZzZXQiLCJuZXh0U3RhcnQiLCJqIiwic3RhcnQiLCJOdW1iZXIiLCJlbmQiLCJzbGljZSIsImpvaW4iLCJBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIiLCJtb2R1bGVJZCIsImZyb20iLCJBdXRvQ29tcGxldGVBcGkiLCJpbnB1dCIsImJhcktleSIsImNhdGNoIiwidmVydGljYWwiLCJ1bml2ZXJzYWwiLCJSZXN1bHQiLCJyZXN1bHRzRGF0YSIsImkiLCJwdXNoIiwiU2VjdGlvbiIsInZlcnRpY2FsQ29uZmlnSWQiLCJyZXN1bHRzQ291bnQiLCJlbmNvZGVkU3RhdGUiLCJhcHBsaWVkUXVlcnlGaWx0ZXJzIiwiQXBwbGllZFF1ZXJ5RmlsdGVyIiwiZmFjZXRzIiwicGFyc2VNYXAiLCJ2ZXJ0aWNhbFVSTCIsIm1hcE1hcmtlcnMiLCJjZW50ZXJDb29yZGluYXRlcyIsInJlc3VsdCIsInlleHREaXNwbGF5Q29vcmRpbmF0ZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiaXRlbSIsIm1vZHVsZXMiLCJ1cmxzIiwiQXJyYXkiLCJpc0FycmF5IiwiYXBwbGllZFF1ZXJ5RmlsdGVyIiwiZGlzcGxheUtleSIsImRpc3BsYXlWYWx1ZSIsImZpbHRlcnMiLCJVbml2ZXJzYWxSZXN1bHRzIiwiRGlyZWN0QW5zd2VyIiwiZGlyZWN0QW5zd2VyIiwiTmF2aWdhdGlvbiIsInRhYk9yZGVyIiwibmF2IiwiVmVydGljYWxSZXN1bHRzIiwiTkFWSUdBVElPTiIsIlVOSVZFUlNBTF9SRVNVTFRTIiwiVkVSVElDQUxfUkVTVUxUUyIsIkFVVE9DT01QTEVURSIsIkRJUkVDVF9BTlNXRVIiLCJGSUxURVIiLCJRVUVSWSIsIlNlYXJjaERhdGFUcmFuc2Zvcm1lciIsIlN0b3JhZ2VLZXlzIiwiRXZlbnRFbWl0dGVyIiwiX2xpc3RlbmVycyIsImV2dCIsImNiIiwib25jZSIsIm9uIiwibGlzdGVuZXJzIiwia2VlcCIsIk1vZHVsZURhdGEiLCJpZCIsIl9pZCIsIl9oaXN0b3J5IiwiX2RhdGEiLCJzZXQiLCJuZXdEYXRhIiwiY2FwdHVyZVByZXZpb3VzIiwiZW1pdCIsInNoaWZ0IiwicHJldmlvdXMiLCJfcHJldmlvdXMiLCJwYXJzZSIsInBvcCIsIlN0b3JhZ2UiLCJfbW9kdWxlRGF0YUNvbnRhaW5lciIsIl9mdXR1cmVMaXN0ZW5lcnMiLCJfaW5pdERhdGFDb250YWluZXIiLCJfYXBwbHlGdXR1cmVMaXN0ZW5lcnMiLCJyYXciLCJkYXRhS2V5Iiwic3RhcnRzV2l0aCIsIm1vZHVsZURhdGEiLCJvZmYiLCJmdXR1cmVzIiwiZnV0dXJlIiwiQ29yZSIsInN0b3JhZ2UiLCJfc2VhcmNoZXIiLCJfYXV0b0NvbXBsZXRlIiwidmVydGljYWxRdWVyeSIsInRyYW5zZm9ybVZlcnRpY2FsIiwicXVlcnkiLCJ0cmFuc2Zvcm0iLCJuYW1lc3BhY2UiLCJxdWVyeVVuaXZlcnNhbCIsInF1ZXJ5VmVydGljYWwiLCJxdWVyeUZpbHRlciIsIkNvbXBvbmVudE1hbmFnZXIiLCJzZXRJbnN0YW5jZSIsImdldEluc3RhbmNlIiwiX2NvbXBvbmVudFJlZ2lzdHJ5IiwiX2FjdGl2ZUNvbXBvbmVudHMiLCJfY29yZSIsIl9yZW5kZXJlciIsIl9hbmFseXRpY3NSZXBvcnRlciIsInJlbmRlcmVyIiwiY29yZSIsInJlcG9ydGVyIiwiY29tcG9uZW50Q2xhenoiLCJ0eXBlIiwiY29tcG9uZW50VHlwZSIsImFuYWx5dGljc1JlcG9ydGVyIiwiY29tcG9uZW50TWFuYWdlciIsImNvbXBvbmVudENsYXNzIiwiYXJlRHVwbGljYXRlTmFtZXNBbGxvd2VkIiwic29tZSIsImMiLCJuYW1lIiwiaW5pdCIsInNldFN0YXRlIiwiZmluZCIsImluc3RhbmNlIiwiUmVuZGVyZXIiLCJ0ZW1wbGF0ZSIsIkhhbmRsZWJhcnNSZW5kZXJlciIsInRlbXBsYXRlcyIsIl9oYW5kbGViYXJzIiwiX2hiIiwiX3RlbXBsYXRlcyIsIl9yZWdpc3RlckN1c3RvbUhlbHBlcnMiLCJyZWdpc3RlckhlbHBlciIsImNvbXBpbGUiLCJjb25maWciLCJ0ZW1wbGF0ZU5hbWUiLCJlIiwiYXJnMSIsImFyZzIiLCJvcHRpb25zIiwiZm4iLCJpbnZlcnNlIiwicGhvbmVOdW1iZXJTdHJpbmciLCJjbGVhbmVkIiwicmVwbGFjZSIsIm1hdGNoIiwiaW50bENvZGUiLCJhcmdzIiwiYXJndW1lbnRzIiwicm9vdCIsInYiLCJSZW5kZXJlcnMiLCJTT1kiLCJIYW5kbGViYXJzIiwiZG9jdW1lbnQiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJET00iLCJkIiwicCIsImh0bWwiLCJwYXJzZUZyb21TdHJpbmciLCJwYXJlbnQiLCJzZWxlY3RvciIsIkhUTUxFbGVtZW50IiwiV2luZG93IiwiSFRNTERvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZWFkeVN0YXRlIiwiZWwiLCJvcHRzX2RhdGEiLCJub2RlIiwiY3JlYXRlRWxlbWVudCIsInByb3BzIiwiYWRkQ2xhc3MiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJhcHBlbmRDaGlsZCIsImNsYXNzTmFtZSIsImNsYXNzZXMiLCJzcGxpdCIsImxlbiIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsInN0eWxlcyIsInByb3AiLCJzdHlsZSIsImF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJzZXR0aW5ncyIsIkV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImN0eHQiLCJ0YXJnZXQiLCJpc0VxdWFsTm9kZSIsIm1hdGNoZXMiLCJwYXJlbnROb2RlIiwiU3RhdGUiLCJfc3RhdGUiLCJvcHRWYWwiLCJfc2V0Iiwib3B0UHJvcCIsIkFuYWx5dGljc0V2ZW50IiwiZXZlbnRUeXBlIiwidG9VcHBlckNhc2UiLCJBbmFseXRpY3NSZXBvcnRlciIsImJ1c2luZXNzSWRSZXEiLCJfYnVzaW5lc3NJZCIsImJ1c2luZXNzSWQiLCJhZGRPcHRpb25zIiwidG9BcGlFdmVudCIsImNvbnNvbGUiLCJlcnIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsIl9vcHRzIiwiX3R5cGUiLCJfcGFyZW50IiwiX2NoaWxkcmVuIiwic3RhdGUiLCJjb250YWluZXIiLCJfY29udGFpbmVyIiwiY3JlYXRlRWwiLCJjbGFzcyIsInN1YnN0cmluZyIsImFwcGVuZCIsIl9jbGFzc05hbWUiLCJfcmVuZGVyIiwicmVuZGVyIiwiX3RlbXBsYXRlIiwiX3RlbXBsYXRlTmFtZSIsIl9pc01vdW50ZWQiLCJ0cmFuc2Zvcm1EYXRhIiwib25DcmVhdGUiLCJvbk1vdW50Iiwib25VcGRhdGUiLCJtb3VudCIsImNoaWxkQ29tcG9uZW50IiwiY3JlYXRlIiwiX3BhcmVudE9wdHMiLCJlbXB0eSIsInVuTW91bnQiLCJiZWZvcmVNb3VudCIsImFzSlNPTiIsIl9vbk1vdW50IiwiZG9tSG9va3MiLCJxdWVyeUFsbCIsIl9jcmVhdGVBbmFseXRpY3NIb29rIiwiYmluZCIsImNoaWxkIiwiYmVmb3JlUmVuZGVyIiwiZG9tQ29tcG9uZW50cyIsIl9jcmVhdGVTdWJjb21wb25lbnQiLCJhZnRlclJlbmRlciIsImRvbUNvbXBvbmVudCIsImRhdGFzZXQiLCJjaGlsZERhdGEiLCJhZGRDaGlsZCIsImNoaWxkSFRNTCIsImV2ZW50dHlwZSIsImV2ZW50bGFiZWwiLCJldmVudG9wdGlvbnMiLCJyZXBvcnQiLCJUYWIiLCJjb25maWdJZCIsImlzRmlyc3QiLCJpc0FjdGl2ZSIsInRhYnNDb25maWciLCJ0YWJzIiwidGFiIiwiTmF2aWdhdGlvbkNvbXBvbmVudCIsIl90YWJzIiwiX3RhYk9yZGVyIiwiZ2V0RGVmYXVsdFRhYk9yZGVyIiwiZ2V0VXJsUGFyYW1zIiwibWVyZ2VUYWJPcmRlciIsImdlbmVyYXRlVGFiVXJsIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwiaW5jbHVkZXMiLCJ1bnNoaWZ0Iiwib3RoZXJUYWJPcmRlciIsInRhYkNvbmZpZyIsIkZpbHRlciIsInJlc3BvbnNlRmlsdGVyIiwiZ3JvdXBzIiwiZ3JvdXBGaWx0ZXJzIiwiZmllbGQiLCJvciIsImFuZCIsIl9mcm9tTWF0Y2hlciIsIm1pbiIsIm1heCIsImdyZWF0ZXJUaGFuRXF1YWwiLCJsZXNzVGhhbkVxdWFsIiwibWF0Y2hlciIsIlNlYXJjaENvbXBvbmVudCIsIl9iYXJLZXkiLCJfdmVydGljYWxLZXkiLCJfZm9ybUVsIiwiZm9ybVNlbGVjdG9yIiwiX2lucHV0RWwiLCJpbnB1dEVsIiwidGl0bGUiLCJzZWFyY2hUZXh0IiwicHJvbXB0SGVhZGVyIiwiYXV0b0ZvY3VzIiwicmVkaXJlY3RVcmwiLCJzZXRRdWVyeSIsImJpbmRCcm93c2VySGlzdG9yeSIsImluaXRTZWFyY2giLCJpbml0QXV0b0NvbXBsZXRlIiwiZm9jdXMiLCJmb3JtIiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImlucHV0U2VsZWN0b3IiLCJvcmlnaW5hbFF1ZXJ5Iiwib25TdWJtaXQiLCJ0cmlnZ2VyIiwiYWxsRmlsdGVycyIsImdldEFsbCIsInRvdGFsRmlsdGVyIiwidmVydGljYWxTZWFyY2giLCJnZXRBY3RpdmVDb21wb25lbnQiLCJnZXRTdGF0ZSIsIkZpbHRlclNlYXJjaENvbXBvbmVudCIsImlucHV0S2V5Iiwic2V0RmlsdGVyIiwiZnJvbVJlc3BvbnNlIiwiaXNGaWx0ZXJTZWFyY2giLCJvcmlnaW5hbEZpbHRlciIsIl9zYXZlUXVlcnlBbmRGaWx0ZXIiLCJLZXlzIiwiQkFDS1NQQUNFIiwiVEFCIiwiRU5URVIiLCJTSElGVCIsIkNUUkwiLCJBTFQiLCJFU0NBUEUiLCJMRUZUIiwiUklHSFQiLCJVUCIsIkRPV04iLCJMRUZUX09TX0tFWSIsIlJJR0hUX09TX0tFWSIsIlNFTEVDVF9LRVkiLCJBdXRvQ29tcGxldGVDb21wb25lbnQiLCJfb3JpZ2luYWxRdWVyeSIsIl9zZWN0aW9uSW5kZXgiLCJfcmVzdWx0SW5kZXgiLCJfb25TdWJtaXQiLCJzZWN0aW9uSW5kZXgiLCJyZXN1bHRJbmRleCIsInF1ZXJ5SW5wdXQiLCJjbG9zZSIsInJlc2V0IiwiYXV0b0NvbXBsZXRlIiwiaGFuZGxlTmF2aWdhdGVSZXN1bHRzIiwia2V5Q29kZSIsImhhbmRsZVN1Ym1pdFJlc3VsdCIsImRlbGVnYXRlIiwic2hvcnQiLCJ1cGRhdGVRdWVyeSIsImhhbmRsZVR5cGluZyIsInVwZGF0ZVN0YXRlIiwib3B0VmFsdWUiLCJxdWVyeUVsIiwiaWdub3JlZEtleXMiLCJhdXRvQ29tcGxldGVGaWx0ZXIiLCJhdXRvQ29tcGxldGVWZXJ0aWNhbCIsImF1dG9Db21wbGV0ZVVuaXZlcnNhbCIsIlNVUFBPUlRFRF9DT05UUk9MUyIsIkZpbHRlck9wdGlvbnNDb21wb25lbnQiLCJjb250cm9sIiwiX29wdGlvbnMiLCJvIiwiY2hlY2tlZCIsIl9jb250cm9sIiwiX29wdGlvblNlbGVjdG9yIiwib3B0aW9uU2VsZWN0b3IiLCJfc3RvcmVPbkNoYW5nZSIsInN0b3JlT25DaGFuZ2UiLCJfb25DaGFuZ2UiLCJvbkNoYW5nZSIsIl91cGRhdGVPcHRpb24iLCJwYXJzZUludCIsImluZGV4IiwiX2J1aWxkRmlsdGVyIiwiZWxlbWVudHMiLCJfYXBwbHlGaWx0ZXIiLCJlcXVhbCIsImdyb3VwIiwiRmlsdGVyQm94Q29tcG9uZW50IiwiX2ZpbHRlckNvbmZpZ3MiLCJfc2VhcmNoT25DaGFuZ2UiLCJzZWFyY2hPbkNoYW5nZSIsIl9hcHBseUJ1dHRvblNlbGVjdG9yIiwiYXBwbHlCdXR0b25TZWxlY3RvciIsIl9maWx0ZXJDb21wb25lbnRzIiwiX2ZpbHRlcnMiLCJmaWx0ZXJDb25maWdzIiwic2hvd0FwcGx5QnV0dG9uIiwiZiIsIm9uRmlsdGVyQ2hhbmdlIiwiYnV0dG9uIiwiX3NhdmVGaWx0ZXJzVG9TdG9yYWdlIiwiX3NlYXJjaCIsInZhbGlkRmlsdGVycyIsImNvbWJpbmVkRmlsdGVyIiwiRGlyZWN0QW5zd2VyQ29tcG9uZW50IiwiaGFzU3RhdGUiLCJSZXN1bHRzSXRlbUNvbXBvbmVudCIsIkxvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQiLCJFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IiwiUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQiLCJNYXBQcm92aWRlciIsIl9oZWlnaHQiLCJoZWlnaHQiLCJfd2lkdGgiLCJ3aWR0aCIsIl96b29tIiwiem9vbSIsIl9tYXAiLCJfaXNMb2FkZWQiLCJfb25Mb2FkZWQiLCJvbkxvYWRlZCIsIl9waW5Db25maWciLCJwaW4iLCJERUZBVUxUX1BJTl9DT05GSUciLCJpc0xvYWRlZCIsIm1hcERhdGEiLCJpY29uIiwiYW5jaG9yIiwic3ZnIiwic2NhbGVkU2l6ZSIsImxhYmVsVHlwZSIsIkdvb2dsZU1hcFByb3ZpZGVyIiwiX2NsaWVudElkIiwiY2xpZW50SWQiLCJfc2lnbmF0dXJlIiwic2lnbmF0dXJlIiwiaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscyIsIm9uTG9hZCIsInNjcmlwdCIsIm9ubG9hZCIsImFzeW5jIiwic3JjIiwiZ2VuZXJhdGVDcmVkZW50aWFscyIsImdvb2dsZU1hcE1hcmtlckNvbmZpZ3MiLCJHb29nbGVNYXBNYXJrZXJDb25maWciLCJlbmNvZGVkTWFya2VycyIsInNlcmlhbGl6ZSIsIl9pc1N0YXRpYyIsInNldFRpbWVvdXQiLCJjc3MiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiYm91bmRzIiwiTGF0TG5nQm91bmRzIiwibWFya2VyIiwiTWFya2VyIiwiZXh0ZW5kIiwicG9zaXRpb24iLCJmaXRCb3VuZHMiLCJsYXQiLCJsbmciLCJzZXJpYWxpemVkTWFya2VycyIsIm1hcmtlcnMiLCJwaW5Db25maWciLCJwaW5Db25maWdPYmoiLCJQb2ludCIsIngiLCJ5IiwiU2l6ZSIsInciLCJoIiwiTWFwQm94TWFwUHJvdmlkZXIiLCJtYXBib3hnbCIsImFjY2Vzc1Rva2VuIiwicmVsIiwibWFwYm94TWFwTWFya2VyQ29uZmlncyIsIk1hcEJveE1hcmtlckNvbmZpZyIsImNlbnRlciIsIm1hcENlbnRlciIsIndyYXBwZXIiLCJjb29yZHMiLCJMbmdMYXQiLCJzZXRMbmd0TGF0IiwiYWRkVG8iLCJQcm92aWRlclR5cGVzIiwiTWFwQ29tcG9uZW50IiwiX21hcFByb3ZpZGVyIiwibWFwUHJvdmlkZXIiLCJ0b0xvd2VyQ2FzZSIsImlzU3RhdGljIiwiZ2V0UHJvdmlkZXJJbnN0YW5jZSIsInNldFRlbXBsYXRlIiwiZ2VuZXJhdGVTdGF0aWMiLCJsb2FkSlMiLCJSZXN1bHRUeXBlIiwiRVZFTlQiLCJMT0NBVElPTiIsIlBFT1BMRSIsIlJlc3VsdHNDb21wb25lbnQiLCJsaW1pdCIsIl9pdGVtQ29uZmlnIiwiZ2xvYmFsIiwicmVuZGVySXRlbSIsIml0ZW1UZW1wbGF0ZSIsImNvbmZpZ3VyZUl0ZW0iLCJpbmNsdWRlTWFwIiwibWFwQ29uZmlnIiwic2V0SXRlbVJlbmRlciIsInNldEl0ZW1UZW1wbGF0ZSIsImNsYXp6IiwiZ2V0SXRlbUNvbXBvbmVudCIsImNvbXAiLCJuZXdPcHRzIiwiZ2xvYmFsQ29uZmlnIiwiaXRlbUNvbmZpZyIsImhhc0dsb2JhbFJlbmRlciIsImhhc0dsb2JhbFRlbXBsYXRlIiwic2V0UmVuZGVyIiwiVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudCIsIl9saW1pdCIsImdldENoaWxkQ29uZmlnIiwiUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IiwiX2VtYWlsTGFiZWwiLCJlbWFpbExhYmVsIiwiX25hbWVMYWJlbCIsIm5hbWVMYWJlbCIsIl9xdWVzdGlvbkxhYmVsIiwicXVlc3Rpb25MYWJlbCIsIl9wcml2YWN5UG9saWN5TGFiZWwiLCJwcml2YWN5UG9saWN5TGFiZWwiLCJfYnV0dG9uTGFiZWwiLCJidXR0b25MYWJlbCIsImluaXRTdWJtaXQiLCJoYXNRdWVyaWVkIiwicXVlc3Rpb24iLCJDT01QT05FTlRfTUFOQUdFUiIsInJlZ2lzdGVyIiwiVGVtcGxhdGVMb2FkZXIiLCJfdGVtcGxhdGVVcmwiLCJ0ZW1wbGF0ZVVybCIsIl9pbml0IiwiZmV0Y2hUZW1wbGF0ZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uZXJyb3IiLCJsb2ciLCJFcnJvclJlcG9ydGVyIiwidG9Kc29uIiwiQW5zd2VycyIsImNvbXBvbmVudHMiLCJfb25SZWFkeSIsInNldENvcmUiLCJzZXRSZW5kZXJlciIsInNldEFuYWx5dGljc1JlcG9ydGVyIiwib25SZWFkeSIsInVzZVRlbXBsYXRlcyIsInRlbXBsYXRlQnVuZGxlIiwic3VwcHJlc3NFcnJvclJlcG9ydHMiLCJfZXJyb3JSZXBvcnRlciIsIkFOU1dFUlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBOztFQUVBOztFQUVBOzs7RUFHQSxJQUFNQSxPQUFPLEdBQUc7RUFDZEMsRUFBQUEsR0FBRyxFQUFFLEtBRFM7RUFFZEMsRUFBQUEsSUFBSSxFQUFFLE1BRlE7RUFHZEMsRUFBQUEsR0FBRyxFQUFFLEtBSFM7RUFJZEMsRUFBQUEsTUFBTSxFQUFFO0VBSk0sQ0FBaEI7RUFPQTs7Ozs7O01BS3FCQzs7Ozs7Ozs7OztFQUNuQjs7Ozs7OzBCQU1LQyxLQUFLQyxNQUFNQyxNQUFNO0VBQ3BCLGFBQU8sS0FBS0MsT0FBTCxDQUFhVCxPQUFPLENBQUNDLEdBQXJCLEVBQTBCLEtB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