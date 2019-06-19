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
          body: JSON.stringify(data)
        }, opts));
      }
    }, {
      key: "request",
      value: function request(method, url, opts) {
        return fetch(url, Object.assign({
          method: 'get',
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

          searchQuery += key + '=' + params[key];
        }

        return encodeURI(url + searchQuery);
      }
    }]);

    return HttpRequester;
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

      this._baseUrl = opts.baseUrl || null;
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
          if (_params[key] === undefined) {
            delete _params[key];
          }
        });
        return Object.assign(baseParams, _params || {});
      }
    }]);

    return ApiRequest;
  }();

  var Search =
  /*#__PURE__*/
  function () {
    function Search() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Search);

      var params = new URL(window.location.toString()).searchParams;
      var isLocal = params.get('local');
      this._requester = new HttpRequester();
      /**
       * The baseUrl to use for making a request
       * @type {string}
       * @private
       */

      this._baseUrl = isLocal ? 'http://' + window.location.hostname : 'https://liveapi.yext.com';
      /**
       * A local reference to the API Key to use for the request
       * @type {string}
       * @private
       */

      this._apiKey = opts.apiKey || null;
      /**
       * A local reference to the Answers Key to use for the request
       * @type {string}
       * @private
       */

      this._answersKey = opts.answersKey || null;
      /**
       * The version of the API to make a request to
       * @type {string}
       * @private
       */

      this._version = opts.version || 20190101 || 20190301;
    }

    _createClass(Search, [{
      key: "verticalQuery",
      value: function verticalQuery(queryString, verticalKey, filter) {
        var request = new ApiRequest({
          baseUrl: this._baseUrl,
          endpoint: '/v2/accounts/me/answers/vertical/query',
          apiKey: this._apiKey,
          version: this._version,
          params: {
            'input': queryString,
            'answersKey': this._answersKey,
            'filter': filter,
            'verticalKey': verticalKey
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
          baseUrl: this._baseUrl,
          endpoint: '/v2/accounts/me/answers/query',
          apiKey: this._apiKey,
          version: this._version,
          params: {
            'input': queryString,
            'answersKey': this._answersKey
          }
        });
        return request.get().then(function (response) {
          return response.json();
        });
      }
    }]);

    return Search;
  }();

  var AutoCompleteData =
  /*#__PURE__*/
  function () {
    function AutoCompleteData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, AutoCompleteData);

      this.sections = data.sections || [];
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
          sections: sections
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
    } // TODO(jdelerme): consolidate with other highlight functions


    _createClass(AutoCompleteResult, [{
      key: "highlight",
      value: function highlight(data) {
        var value = data.value,
            matchedSubstrings = data.matchedSubstrings;

        if (!matchedSubstrings || matchedSubstrings.length === 0) {
          return value;
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
          highlightedValue += [value.slice(nextStart, start), '<strong>', value.slice(start, end), '</strong>'].join('');

          if (j === matchedSubstrings.length - 1 && end < value.length) {
            highlightedValue += value.slice(end);
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
        return AutoCompleteDataTransformer.clean('autocomplete', AutoCompleteData.from(response));
      }
    }, {
      key: "filter",
      value: function filter(response, inputKey) {
        return AutoCompleteDataTransformer.clean("autocomplete.".concat(inputKey), AutoCompleteData.from(response));
      }
    }, {
      key: "vertical",
      value: function vertical(response, inputKey) {
        return AutoCompleteDataTransformer.clean("autocomplete.".concat(inputKey), {
          sections: response.sections
        });
      }
    }]);

    return AutoCompleteDataTransformer;
  }();

  /**
   * A wrapper around the AutoComplete {ApiRequest} endpoints
   */

  var AutoComplete =
  /*#__PURE__*/
  function () {
    function AutoComplete() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, AutoComplete);

      var params = new URL(window.location.toString()).searchParams;
      var isLocal = params.get('local');
      /**
       * The baseUrl to use for making a request
       * @type {string}
       * @private
       */

      this._baseUrl = isLocal ? 'http://' + window.location.hostname : 'https://liveapi.yext.com';
      /**
       * The API Key to use for the request
       * @type {string}
       * @private
       */

      this._apiKey = opts.apiKey || null;
      /**
       * The Answers Key to use for the request
       * @type {string}
       * @private
       */

      this._answersKey = opts.answersKey || null;
      /**
       * The version of the API to make a request to
       * @type {string}
       * @private
       */

      this._version = opts.version || 20190101 || 20190301;
    }
    /**
     * query supports both UniversalSearch and VerticalSearch auto completing.
     * Providing an experienceKey and barKey will create a vertical search auto complete request.
     * @param {string} input The input to use for auto complete
     * @param {string} experienceKey The experience key to use for a vertical auto complete request
     * @param {string} barKey The barKey to use for a vertical search auto complete request
     */


    _createClass(AutoComplete, [{
      key: "query",
      value: function query(input, experienceKey, barKey) {
        if (experienceKey || barKey) {
          return this._queryVertical(input, experienceKey, barKey);
        }

        return this._queryUniversal(input);
      }
      /**
       * Autocomplete filters
       * @param {string} input The input to use for auto complete
       */

    }, {
      key: "queryFilter",
      value: function queryFilter(input, experienceKey, barKey) {
        var request = new ApiRequest({
          baseUrl: this._baseUrl,
          endpoint: '/v2/accounts/me/answers/filtersearch',
          apiKey: this._apiKey,
          version: this._version,
          params: {
            'input': input,
            'answersKey': this._answersKey,
            'experiencekey': experienceKey,
            'inputKey': barKey
          }
        });
        return request.get().then(function (response) {
          return response.json();
        }).then(function (response) {
          return AutoCompleteDataTransformer.filter(response.response, barKey);
        }).catch(function (error) {
          return console.error(error);
        });
      }
    }, {
      key: "_queryVertical",
      value: function _queryVertical(input, experienceKey, barKey) {
        var request = new ApiRequest({
          baseUrl: this._baseUrl,
          endpoint: '/v2/accounts/me/entities/autocomplete',
          apiKey: this._apiKey,
          version: this._version,
          params: {
            'input': input,
            'experienceKey': experienceKey,
            'barKey': barKey
          }
        });
        return request.get().then(function (response) {
          return response.json();
        }).then(function (response) {
          return AutoCompleteDataTransformer.vertical(response.response, request._params.barKey);
        }).catch(function (error) {
          return console.error(error);
        });
      }
    }, {
      key: "_queryUniversal",
      value: function _queryUniversal(queryString) {
        var request = new ApiRequest({
          baseUrl: this._baseUrl,
          endpoint: '/v2/accounts/me/answers/autocomplete',
          apiKey: this._apiKey,
          version: this._version,
          params: {
            'input': queryString,
            'answersKey': this._answersKey
          }
        });
        return request.get(queryString).then(function (response) {
          return response.json();
        }).then(function (response) {
          return AutoCompleteDataTransformer.universal(response.response);
        });
      }
    }]);

    return AutoComplete;
  }();

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

  var DirectAnswer = function DirectAnswer() {
    var directAnswer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, DirectAnswer);

    Object.assign(this, directAnswer);
  };

  var Navigation =
  /*#__PURE__*/
  function () {
    function Navigation(tabOrder) {
      _classCallCheck(this, Navigation);

      this.tabOrder = tabOrder || [];
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
    }

    _createClass(VerticalResults, null, [{
      key: "from",
      value: function from(response) {
        return new VerticalResults(Section.from(response));
      }
    }]);

    return VerticalResults;
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
        var urls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var response = data.response;
        return {
          navigation: Navigation.from(response.modules),
          directAnswer: new DirectAnswer(response.directAnswer),
          universalResults: UniversalResults.from(response, urls)
        };
      }
    }, {
      key: "transformVertical",
      value: function transformVertical(data) {
        return {
          navigation: new Navigation(),
          // Veritcal doesn't respond with ordering, so use empty nav.
          verticalResults: VerticalResults.from(data.response)
        };
      }
    }]);

    return SearchDataTransformer;
  }();

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
       * @type {Array.<Object>}
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

    _createClass(ModuleData, [{
      key: "set",
      value: function set(data) {
        data = data || {};

        if (this._data === undefined) {
          this._data = {};
        }

        this.capturePrevious(); // TODO(billy) This assumes the top level properties are all contained within
        // an object. Probably not a good assumption to make.

        var keys = Object.keys(data);
        var len = keys.length;
        var isDirty = false; // Reset the object if its being applied as empty

        if (keys.length === 0) {
          this._data = data;
          isDirty = true;
        }

        for (var i = 0; i < len; i++) {
          var prop = keys[i];
          var val = data[keys[i]]; // TODO(billy) For now, one level of comparison is probably fine,
          // in the future we'll probably need to do some deeper object comparisons
          // If the value is already correct, no updates!

          if (this._data[prop] === val) {
            continue;
          }

          this._data[prop] = val;
          isDirty = true;
        } // Only emit updates if the model was dirty


        if (isDirty) {
          this.emit('update', this._data);
        }

        return this;
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

  var Storage =
  /*#__PURE__*/
  function () {
    function Storage() {
      _classCallCheck(this, Storage);

      this._moduleDataContainer = {};
      this._futureListeners = {};
    }

    _createClass(Storage, [{
      key: "init",
      value: function init() {}
    }, {
      key: "insert",
      value: function insert(data) {
        if (data === undefined) {
          return;
        }

        var moduleIds = Object.keys(data);

        for (var i = 0; i < moduleIds.length; i++) {
          var moduleId = moduleIds[i];

          if (this._moduleDataContainer[moduleId] === undefined) {
            this._moduleDataContainer[moduleId] = new ModuleData(moduleId);

            this._applyFutureListeners(moduleId);
          }

          this._moduleDataContainer[moduleId].set(data[moduleId]);
        }
      }
    }, {
      key: "insertUniversalResults",
      value: function insertUniversalResults(data) {
        this.insert(SearchDataTransformer.transform(data));
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

      this._searcher = new Search({
        apiKey: this._apiKey,
        answersKey: this._answersKey
      });
      /**
       * An abstraction containing the integration with the RESTful autocomplete API
       * For both vertical and universal search
       * @type {Search}
       * @private
       */

      this._autoComplete = new AutoComplete({
        apiKey: this._apiKey,
        answersKey: this._answersKey
      });
    }

    _createClass(Core, [{
      key: "verticalSearch",
      value: function verticalSearch(queryString, verticalKey, filter) {
        var _this = this;

        return this._searcher.verticalQuery(queryString, verticalKey, filter).then(function (response) {
          return SearchDataTransformer.transformVertical(response);
        }).then(function (data) {
          _this.storage.insert(data);
        });
      }
    }, {
      key: "search",
      value: function search(queryString, urls) {
        var _this2 = this;

        return this._searcher.query(queryString).then(function (response) {
          return SearchDataTransformer.transform(response, urls);
        }).then(function (data) {
          _this2.storage.insert(data);
        });
      }
    }, {
      key: "autoComplete",
      value: function autoComplete(queryString, experienceKey, barKey) {
        var _this3 = this;

        return this._autoComplete.query(queryString, experienceKey, barKey).then(function (data) {
          _this3.storage.insert(data);
        });
      }
    }, {
      key: "autoCompleteFilter",
      value: function autoCompleteFilter(input, experienceKey, barKey) {
        var _this4 = this;

        return this._autoComplete.queryFilter(input, experienceKey, barKey).then(function (data) {
          _this4.storage.insert(data);
        });
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
   *
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

      this._activeComponents = {};
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
          componentManager: this
        }, opts); // Instantiate our new component and keep track of it

        var component = new this._componentRegistry[componentType](opts).init(opts);
        this._activeComponents[componentType] = component; // If there is a local storage to power state, apply the state
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
        return this._activeComponents[type];
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
          return name === undefined ? '' : JSON.stringify(name).replace(/"/g, '\\"');
        });
      }
    }]);

    return HandlebarsRenderer;
  }(Renderer);

  // E.g. Mustache, SOY, HandleBars, React, etc.

  var Renderers = {
    SOY: Renderer,
    Handlebars: HandlebarsRenderer
  };

  var document = window.document;
  var parser = new DOMParser();
  /* global HTMLElement, HTMLDocument, Window, Event */

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
       * @type {Array.Component}
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

        this._onMount();

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
        domComponents.forEach(function (domComponent) {
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
            var childComponent = _this2.addChild(childData, type, opts);

            DOM.append(domComponent, childComponent.render(childData));
            return;
          } // Otherwise, render the component as expected


          var childHTML = [];

          for (var i = 0; i < childData.length; i++) {
            var _childComponent = _this2.addChild(childData[i], type, opts);

            childHTML.push(_childComponent.render(childData[i]));
          }

          DOM.append(domComponent, childHTML.join(''));
        });
        this.afterRender();
        return el.innerHTML;
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
      key: "type",
      get: function get() {
        return 'Component';
      }
    }]);

    return Component;
  }();

  var NavigationComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(NavigationComponent, _Component);

    function NavigationComponent() {
      var _this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, NavigationComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(NavigationComponent).call(this, opts));
      /**
       * The data storage key
       * @type {string}
       */

      _this.moduleId = 'navigation';
      /**
       * The handlebars template to use
       * @type {string}
       */

      _this._templateName = 'navigation/navigation';
      /**
       * The order of the tabs, parsed from configuration.
       * This gets updated based on the server results
       * @type {Array.<String>} The list of VS configIds
       */

      _this._tabOrder = [];
      /**
       * The data container for each tab, keyed by VS configId
       * @type {Object.<String, Object>}
       */

      _this._tabs = {}; // Parse the options and build out our tabs and
      // tabOrder from the settings provided.

      for (var i = 0; i < opts.tabs.length; i++) {
        var tab = opts.tabs[i]; // For tabs without config ids, map their URL to the configID
        // to avoid duplication of renders

        if (tab.configId === undefined && _this._tabs[tab.configId] === undefined) {
          tab.configId = tab.url;
        } // isFirst should always be the first element in the list


        if (tab.isFirst) {
          _this._tabOrder.unshift(tab.configId);
        } else {
          _this._tabOrder.push(tab.configId);
        }

        _this._tabs[tab.configId] = {
          label: tab.label,
          configId: tab.configId,
          url: tab.url,
          baseUrl: tab.url,
          isFirst: tab.isFirst === true,
          isActive: tab.isActive === true
        };
      }

      return _this;
    }

    _createClass(NavigationComponent, [{
      key: "getUrlParams",
      value: function getUrlParams() {
        return new URLSearchParams(window.location.search.substring(1));
      }
    }, {
      key: "generateTabUrl",
      value: function generateTabUrl(tab) {
        var params = this.getUrlParams();

        if (params.toString().length > 0) {
          tab.url = tab.baseUrl + '?' + params.toString();
        }

        return tab;
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
          this._tabOrder = data.tabOrder;
        } // Since our tab configuration is local, we generate it
        // based on the feedback from the server


        var tabs = [];

        for (var i = 0; i < this._tabOrder.length; i++) {
          var tab = this._tabs[this._tabOrder[i]];

          if (tab !== undefined) {
            tabs.push(this.generateTabUrl(tab));
          }
        } // Because the tab order from server only includes
        // sections that have results, we need to manually add
        // the other tabs to the end of the array


        for (var configId in this._tabs) {
          if (this._tabOrder.indexOf(configId) <= -1) {
            var _tab = this.generateTabUrl(this._tabs[configId]); // isFirst should always be the first element in the list


            if (_tab.isFirst) {
              tabs.unshift(_tab);
              continue;
            }

            tabs.push(_tab);
          }
        }

        return _get(_getPrototypeOf(NavigationComponent.prototype), "setState", this).call(this, {
          tabs: tabs
        });
      }
    }, {
      key: "render",
      value: function render(data) {
        return _get(_getPrototypeOf(NavigationComponent.prototype), "render", this).call(this, data);
      }
    }], [{
      key: "type",
      get: function get() {
        return 'Navigation';
      }
    }]);

    return NavigationComponent;
  }(Component);

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
       * The optional experience key for vertical search configuration
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
          container: '.yext-search-autocomplete',
          barKey: this._barKey,
          experienceKey: this._experienceKey,
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
          return this.core.verticalSearch(query, this._verticalKey);
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

  var FilterPickerComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(FilterPickerComponent, _Component);

    function FilterPickerComponent() {
      var _this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, FilterPickerComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterPickerComponent).call(this, opts));
      /**
       * The template name to use for rendering with handlebars
       * @type {string}
       */

      _this._templateName = 'search/search';
      /**
       * The input key for the vertical search configuration
       * @type {string}
       */

      _this._barKey = opts.barKey || opts.inputKey || null;
      /**
       * The experience key for vertical search configuration
       * @type {string}
       */

      _this._experienceKey = opts.experienceKey || null;
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

      _this.query = opts.query || _this.getUrlParams().get('query') || '';
      /**
       * The filter string to use for the provided query
       * Optionally provided
       * @type {string}
       */

      _this.filter = opts.filter || _this.getUrlParams().get('filter') || '';
      return _this;
    }

    _createClass(FilterPickerComponent, [{
      key: "onCreate",
      value: function onCreate() {
        if (this.query && this.query.length > 0 && this.filter && this.filter.length > 0) {
          this.search(this.query, this.filter);
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
          isFilterSearch: true,
          container: '.yext-search-autocomplete',
          promptHeader: this.promptHeader,
          originalQuery: this.query,
          originalFilter: this.filter,
          inputEl: inputSelector,
          experienceKey: this._experienceKey,
          barKey: this._barKey,
          onSubmit: function onSubmit(query, filter) {
            _this2.search(query, filter);
          }
        });
      }
    }, {
      key: "search",
      value: function search(query, filter) {
        var params = this.getUrlParams();
        params.set('query', query);
        params.set('filter', filter); // If we have a redirectUrl, we want the params to be
        // serialized and submitted.

        if (typeof this.redirectUrl === 'string') {
          window.location.href = this.redirectUrl + '?' + params.toString();
          return false;
        }

        window.history.pushState({
          query: query,
          filter: filter
        }, query, '?' + params.toString());
        this.core.verticalSearch('', this._experienceKey, filter);
      }
    }, {
      key: "setState",
      value: function setState(data) {
        return _get(_getPrototypeOf(FilterPickerComponent.prototype), "setState", this).call(this, Object.assign({
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
          _this3.query = _this3.getUrlParams().get('query');
          _this3.filter = _this3.getUrlParams().get('filter');

          _this3.setState({
            query: _this3.query,
            filter: _this3.filter
          });

          _this3.search(_this3.query);
        });
      }
    }], [{
      key: "type",
      get: function get() {
        return 'FilterPicker';
      }
    }]);

    return FilterPickerComponent;
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
       * The `experienceKey` of the vertical search to use for auto-complete
       * @type {string}
       */

      _this._experienceKey = opts.experienceKey || null;
      /**
       * A reference to the input el selector for auto complete
       * @type {string}
       */

      _this._inputEl = opts.inputEl || '.js-yext-query';
      /**
       * An internal reference for the data-storage to listen for updates from the server
       * @type {string}
       */

      var moduleId = 'autocomplete';

      if (_this._barKey !== undefined && _this._barKey !== null) {
        moduleId = 'autocomplete.' + _this._barKey;
      }

      _this.moduleId = moduleId;
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
        _get(_getPrototypeOf(AutoCompleteComponent.prototype), "setState", this).call(this, Object.assign(data, {
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

          if (_this2.isFilterSearch) {
            _this2.core.autoCompleteFilter(queryInput.value, _this2._experienceKey, _this2._barKey);
          } else {
            _this2.core.autoComplete(queryInput.value, _this2._experienceKey, _this2._barKey);
          }
        }); // Allow the user to navigate between the results using the keyboard

        DOM.on(queryInput, 'keydown', function (e) {
          _this2.handleNavigateResults(e.keyCode, e);

          _this2.handleSubmitResult(e.keyCode, queryInput.value, e);
        }); // Allow the user to select a result with the mouse

        DOM.delegate(this._container, '.js-yext-autocomplete-option', 'mousedown', function (evt, target) {
          var data = target.dataset;
          var val = data.short;
          var filter = JSON.parse(data.filter);

          _this2.updateQuery(val);

          _this2._onSubmit(val, filter.filter);

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

        if (this.isFilterSearch) {
          this.core.autoCompleteFilter(value, this._experienceKey, this._barKey);
        } else {
          this.core.autoComplete(value, this._experienceKey, this._barKey);
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

  var DirectAnswerComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(DirectAnswerComponent, _Component);

    function DirectAnswerComponent() {
      var _this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, DirectAnswerComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DirectAnswerComponent).call(this, opts));
      _this.moduleId = 'directAnswer';
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
      key: "type",
      get: function get() {
        return 'PeopleResultsItemComponent';
      }
    }]);

    return PeopleResultsItemComponent;
  }(ResultsItemComponent);

  /**
   * The core MapProvider interface to implement for various types of map providers.
   * Implementations should extend this interface
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

  /* global google, iconCfg */

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
     * @param {Array.<GoogleMapMarkerConfig>} googleMapMarkerConfigs
     * @returns {Array.<String>}
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
       * @param {Array.<Object>} markers The data of the marker
       * @param {Object} pinConfig The configuration to apply to the marker
       * @returns {Array.<GoogleMapMarkerConfig>}
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
          if (typeof pinConfig === 'function') {
            pinConfig = pinConfig(marker.item, MapProvider.DEFAULT_PIN_CONFIG, marker);
          } // Transform our Configuration Object into the expected
          // Google API format.


          var icon = {};

          if (pinConfig.anchor) {
            icon.anchor = google.maps.Point(pinConfig.anchor.x, pinConfig.anchor.y);
          }

          if (pinConfig.scaledSize) {
            icon.scaledSize = google.maps.Size(pinConfig.scaledSize.w, pinConfig.scaledSize.h);
          }

          if (pinConfig.url) {
            icon.url = iconCfg.url;
          }

          if (pinConfig.svg) {
            icon.url = "data:image/svg+xml;charset=utf-8, ".concat(encodeURIComponent(pinConfig.svg));
          }

          var label;

          if (pinConfig.label) {
            label = pinConfig.label;
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
        var encodedMarkers = '';
        var mapMarkers = mapData.mapMarkers;
        var center = mapData.mapCenter;
        var width = this._width || 600;
        var height = this._height || 200;
        var zoom = this._zoom || 9;

        for (var i = 0; i < mapMarkers.length; i++) {
          var mm = mapMarkers[i];

          if (i > 0) {
            encodedMarkers += ',';
          }

          encodedMarkers += "pin-s-".concat(mm.label, "(").concat(mm.longitude, ",").concat(mm.latitude, ")");
        }

        return "<img src=\"https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/".concat(encodedMarkers, "/").concat(center.longitude, ",").concat(center.latitude, ",").concat(zoom, "/auto/").concat(width, "x").concat(height, "?access_token=").concat(this._apiKey, "\">");
      }
    }, {
      key: "init",
      value: function init(el, mapData) {
        var _this2 = this;

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

        this._map.on('load', function () {
          if (mapData && mapData.mapMarkers.length > 0) {
            var markers = mapData.mapMarkers;

            for (var i = 0; i < markers.length; i++) {
              var coords = new mapboxgl.LngLat(markers[i].longitude, markers[i].latitude);
              var marker = new mapboxgl.Marker().setLngLat(coords);
              marker.addTo(_this2._map);
            }
          }
        });
      }
    }]);

    return MapBoxMapProvider;
  }(MapProvider);

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

      _this.moduleId = 'verticalResults';
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
      _this.moduleId = 'verticalResults';
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

        return _get(_getPrototypeOf(ResultsComponent.prototype), "setState", this).call(this, Object.assign(data, {
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
          opts = Object.assign(this._opts.mapConfig, opts);
          return _get(_getPrototypeOf(ResultsComponent.prototype), "addChild", this).call(this, data, type, opts);
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
      _this.moduleId = 'universalResults';
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
      _this.moduleId = 'universalResults';
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

  var COMPONENT_MANAGER = new ComponentManager() // Core Component
  .register(Component) // Navigation Components
  .register(NavigationComponent) // Search Components
  .register(SearchComponent).register(FilterPickerComponent).register(AutoCompleteComponent) // Results Components
  .register(DirectAnswerComponent).register(UniversalResultsComponent).register(ResultsComponent).register(ResultsItemComponent).register(LocationResultsItemComponent).register(EventResultsItemComponent).register(PeopleResultsItemComponent).register(MapComponent) // Questions Components
  .register(QuestionSubmissionComponent);

  var TemplateLoader =
  /*#__PURE__*/
  function () {
    function TemplateLoader() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, TemplateLoader);

      if (!TemplateLoader.setInstance(this)) {
        return TemplateLoader.getInstance();
      }

      var params = new URL(window.location.toString()).searchParams;
      var isLocal = params.get('local');
      this._templateUrl = opts.templateUrl || (isLocal ? '../dist/answerstemplates.compiled.min.js' : 'https://assets.sitescdn.net/answers/answerstemplates.compiled.min.js');
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
        // If we already have templates loaded, do nothing
        var node = DOM.query('#yext-answers-templates');

        if (node) {
          return;
        }

        var that = this; // Inject a script to fetch the compiled templates,
        // wrapping it a Promise for cleanliness

        new Promise(function (resolve, reject) {
          var script = DOM.createEl('script', {
            id: 'yext-answers-templates',
            onload: resolve,
            onerror: reject,
            async: true,
            src: that._templateUrl
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
      value: function getInstance(opts) {
        return this.instance;
      }
    }]);

    return TemplateLoader;
  }();

  /**
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

  var LIB_VERSION = 'v0.5.2';

  var ErrorReporter =
  /*#__PURE__*/
  function () {
    function ErrorReporter(apiKey, answersKey) {
      _classCallCheck(this, ErrorReporter);

      this.apiKey = apiKey;
      this.answersKey = answersKey;
    }

    _createClass(ErrorReporter, [{
      key: "report",
      value: function report(err) {
        if (!(err instanceof AnswersBaseError) || err.reported) {
          return;
        }

        err.reported = true;
        var request = new ApiRequest({
          baseUrl: this._isDev ? 'http://' + 'localhost' : 'https://liveapi.yext.com',
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
   * Our API should only be instantiable once
   * @type {ANSWERS} The instance of ANSWERS
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

      this.components = COMPONENT_MANAGER; // TODO(jdelerme): have this populate by bundle instead
      // i.e. minified bundle is not dev, other bundle is

      this._isDev = new URL(window.location.toString()).searchParams.get('local');
      /**
       * A callback function to invoke once the library is ready.
       * Typically fired after templates are fetched from server for rendering.
       */

      this._onReady = function () {};
    }

    _createClass(Answers, [{
      key: "init",
      value: function init(opts) {
        var _this = this;

        this.components.setCore(new Core({
          apiKey: opts.apiKey,
          answersKey: opts.answersKey
        })).setRenderer(this.renderer);

        this._onReady = opts.onReady || function () {};

        if (opts.useTemplates === false || opts.templateBundle) {
          if (opts.templateBundle) {
            this.renderer.init(opts.templateBundle);
          }

          this._onReady();

          return this;
        } // Templates are currently downloaded separately from the CORE and UI bundle.
        // Future enhancement is to ship the components with templates in a separate bundle.


        this.templates = new TemplateLoader({
          templateUrl: opts.templateUrl
        }).onLoaded(function (templates) {
          _this.renderer.init(templates);

          _this._onReady();
        });

        if (!this._isDev && !opts.suppressErrorReports) {
          this._errorReporter = new ErrorReporter(opts.apiKey, opts.answersKey);
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
      value: function getInstance(opts) {
        return this.instance;
      }
    }]);

    return Answers;
  }();

  var ANSWERS = new Answers();

  return ANSWERS;

}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2Vycy11bWQuanMiLCJzb3VyY2VzIjpbInNyYy9jb3JlL2h0dHAvaHR0cHJlcXVlc3Rlci5qcyIsInNyYy9jb3JlL2h0dHAvYXBpcmVxdWVzdC5qcyIsInNyYy9jb3JlL3NlYXJjaC9zZWFyY2guanMiLCJzcmMvY29yZS9tb2RlbHMvYXV0b2NvbXBsZXRlZGF0YS5qcyIsInNyYy9jb3JlL3NlYXJjaC9hdXRvY29tcGxldGVkYXRhdHJhbnNmb3JtZXIuanMiLCJzcmMvY29yZS9zZWFyY2gvYXV0b2NvbXBsZXRlLmpzIiwic3JjL2NvcmUvbW9kZWxzL3Jlc3VsdC5qcyIsInNyYy9jb3JlL21vZGVscy9zZWN0aW9uLmpzIiwic3JjL2NvcmUvbW9kZWxzL3VuaXZlcnNhbHJlc3VsdHMuanMiLCJzcmMvY29yZS9tb2RlbHMvZGlyZWN0YW5zd2VyLmpzIiwic3JjL2NvcmUvbW9kZWxzL25hdmlnYXRpb24uanMiLCJzcmMvY29yZS9tb2RlbHMvdmVydGljYWxyZXN1bHRzLmpzIiwic3JjL2NvcmUvc2VhcmNoL3NlYXJjaGRhdGF0cmFuc2Zvcm1lci5qcyIsInNyYy9jb3JlL2V2ZW50ZW1pdHRlci9ldmVudGVtaXR0ZXIuanMiLCJzcmMvY29yZS9zdG9yYWdlL21vZHVsZWRhdGEuanMiLCJzcmMvY29yZS9zdG9yYWdlL3N0b3JhZ2UuanMiLCJzcmMvY29yZS9jb3JlLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvY29tcG9uZW50bWFuYWdlci5qcyIsInNyYy91aS9yZW5kZXJpbmcvcmVuZGVyZXIuanMiLCJzcmMvdWkvcmVuZGVyaW5nL2hhbmRsZWJhcnNyZW5kZXJlci5qcyIsInNyYy91aS9yZW5kZXJpbmcvY29uc3QuanMiLCJzcmMvdWkvZG9tL2RvbS5qcyIsInNyYy91aS9jb21wb25lbnRzL3N0YXRlLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3NlYXJjaC9maWx0ZXJwaWNrZXJjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9zZWFyY2gvYXV0b2NvbXBsZXRlY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9kaXJlY3RhbnN3ZXJjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9wZW9wbGVyZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9wcm92aWRlcnMvbWFwcHJvdmlkZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9tYXAvcHJvdmlkZXJzL2dvb2dsZW1hcHByb3ZpZGVyLmpzIiwic3JjL3VpL2NvbXBvbmVudHMvbWFwL3Byb3ZpZGVycy9tYXBib3htYXBwcm92aWRlci5qcyIsInNyYy91aS9jb21wb25lbnRzL21hcC9tYXBjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9xdWVzdGlvbnMvcXVlc3Rpb25zdWJtaXNzaW9uY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvY29uc3QuanMiLCJzcmMvdWkvcmVuZGVyaW5nL3RlbXBsYXRlbG9hZGVyLmpzIiwic3JjL2NvcmUvZXJyb3JzL2Vycm9ycy5qcyIsInNyYy9jb3JlL2NvbnN0YW50cy5qcyIsInNyYy9jb3JlL2Vycm9ycy9lcnJvcnJlcG9ydGVyLmpzIiwic3JjL2Fuc3dlcnMtdW1kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBmZXRjaCAqL1xuXG4vKipcbiAqIFR5cGVzIG9mIEhUVFAgcmVxdWVzdHNcbiAqL1xuY29uc3QgTWV0aG9kcyA9IHtcbiAgR0VUOiAnZ2V0JyxcbiAgUE9TVDogJ3Bvc3QnLFxuICBQVVQ6ICdwdXQnLFxuICBERUxFVEU6ICdkZWxldGUnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwUmVxdWVzdGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIEdFVCBIVFRQIHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHByb3ZpZGUgKGdldHMgZW5jb2RlZCBpbnRvIHRoZSBVUkwpXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIENvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAqL1xuICBnZXQgKHVybCwgZGF0YSwgb3B0cykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoTWV0aG9kcy5HRVQsIHRoaXMuZW5jb2RlUGFyYW1zKHVybCwgZGF0YSksIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIFBPU1QgSFRUUCByZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBwcm92aWRlIChnZXRzIGVuY29kZWQgaW50byB0aGUgVVJMKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBDb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgKi9cbiAgcG9zdCAodXJsLCBkYXRhLCBvcHRzKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChcbiAgICAgIE1ldGhvZHMuUE9TVCxcbiAgICAgIHVybCxcbiAgICAgIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgICAgfSwgb3B0cylcbiAgICApO1xuICB9XG5cbiAgcmVxdWVzdCAobWV0aG9kLCB1cmwsIG9wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgfSwgb3B0cykpO1xuICB9XG5cbiAgZW5jb2RlUGFyYW1zICh1cmwsIHBhcmFtcykge1xuICAgIGxldCBoYXNQYXJhbSA9IHVybC5pbmRleE9mKCc/JykgPiAtMTtcblxuICAgIGxldCBzZWFyY2hRdWVyeSA9ICcnO1xuICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgIGlmICghaGFzUGFyYW0pIHtcbiAgICAgICAgaGFzUGFyYW0gPSB0cnVlO1xuICAgICAgICBzZWFyY2hRdWVyeSArPSAnPyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWFyY2hRdWVyeSArPSAnJic7XG4gICAgICB9XG5cbiAgICAgIHNlYXJjaFF1ZXJ5ICs9IGtleSArICc9JyArIHBhcmFtc1trZXldO1xuICAgIH1cbiAgICByZXR1cm4gZW5jb2RlVVJJKHVybCArIHNlYXJjaFF1ZXJ5KTtcbiAgfVxufVxuIiwiaW1wb3J0IEh0dHBSZXF1ZXN0ZXIgZnJvbSAnLi9odHRwcmVxdWVzdGVyJztcblxuLyoqXG4gKiBBcGlSZXF1ZXN0IGlzIHRoZSBiYXNlIGNsYXNzIGZvciBhbGwgQVBJIHJlcXVlc3RzLlxuICogSXQgZGVmaW5lcyBhbGwgb2YgdGhlIGNvcmUgcHJvcGVydGllcyByZXF1aXJlZCB0byBtYWtlIGEgcmVxdWVzdFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcGlSZXF1ZXN0IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIHVzZWQgZm9yIG1ha2luZyBuZXR3b3JrIHJlcXVlc3QgYW5kIGhhbmRsaW5nIGVycm9yc1xuICAgICAqIEB0eXBlIHtIdHRwUmVxdWVzdGVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcmVxdWVzdGVyID0gbmV3IEh0dHBSZXF1ZXN0ZXIoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBiYXNlVXJsIHRvIHVzZSBmb3IgbWFraW5nIGEgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9iYXNlVXJsID0gb3B0cy5iYXNlVXJsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZW5kcG9pbnQgdG8gdXNlIGluIHRoZSB1cmwgKGFwcGVuZGVkIHRvIHRoZSB7YmFzZVVybH0pXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2VuZHBvaW50ID0gb3B0cy5lbmRwb2ludCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnNpb24gb2YgdGhlIEFQSSB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJzaW9uID0gb3B0cy52ZXJzaW9uIHx8IDIwMTkwMTAxO1xuXG4gICAgLyoqXG4gICAgICogQWRkaXRpb25hbCBkYXRhIHBhcmFtcyB0aGF0IGFyZSBzZW50IGFsb25nIHdpdGggdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcGFyYW1zID0gb3B0cy5wYXJhbXMgfHwge307XG4gIH1cblxuICAvKipcbiAgICogZ2V0IGNyZWF0ZXMgYSBuZXcgYEdFVGAgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSByZXF1ZXN0IGNsYXNzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZ2V0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdGVyLmdldCh0aGlzLl9iYXNlVXJsICsgdGhpcy5fZW5kcG9pbnQsIHRoaXMucGFyYW1zKHRoaXMuX3BhcmFtcykpO1xuICB9XG5cbiAgcGFyYW1zIChwYXJhbXMpIHtcbiAgICB2YXIgYmFzZVBhcmFtcyA9IHtcbiAgICAgICd2JzogdGhpcy5fdmVyc2lvbixcbiAgICAgICdhcGlfa2V5JzogdGhpcy5fYXBpS2V5XG4gICAgfTtcblxuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKCkpLnNlYXJjaFBhcmFtcztcblxuICAgIGlmICh1cmxQYXJhbXMuaGFzKCdiZXRhJykpIHtcbiAgICAgIGJhc2VQYXJhbXNbJ2JldGEnXSA9IHVybFBhcmFtcy5nZXQoJ2JldGEnKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYW55IHBhcmFtYXRlcnMgd2hvcyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC5cbiAgICAvL1xuICAgIC8vIE5PVEUoYmlsbHkpIFByb2JhYmx5IGJldHRlciB0byBiZSBleHBsaWNpdCBhYm91dCBob3cgdG8gaGFuZGxlIHRoaXMgYXQgdGhlIHJlcXVlc3QgYnVpbGRpbmcgbGV2ZWwsXG4gICAgLy8gYnV0IEkgY2FuJ3Qgc2VlIGFueSBjYXNlcyB3aGVyZSB3ZSdkIGV2ZXIgd2FudCB0byBzZW5kICd1bmRlZmluZWQnIGFzIGEgdmFsdWUgdG8gdGhlIHNlcnZlci5cbiAgICAvLyBTbyBpdCdzIHByb2JhYmx5IGZpbmUgdG8gJ2NsZWFuJyB0aGUgcGFyYW1zIG9iamVjdCBoZXJlXG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAocGFyYW1zW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWxldGUgcGFyYW1zW2tleV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihiYXNlUGFyYW1zLCBwYXJhbXMgfHwge30pO1xuICB9XG59XG4iLCJpbXBvcnQgSHR0cFJlcXVlc3RlciBmcm9tICcuLi9odHRwL2h0dHByZXF1ZXN0ZXInO1xuaW1wb3J0IEFwaVJlcXVlc3QgZnJvbSAnLi4vaHR0cC9hcGlyZXF1ZXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpKS5zZWFyY2hQYXJhbXM7XG4gICAgbGV0IGlzTG9jYWwgPSBwYXJhbXMuZ2V0KCdsb2NhbCcpO1xuXG4gICAgdGhpcy5fcmVxdWVzdGVyID0gbmV3IEh0dHBSZXF1ZXN0ZXIoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBiYXNlVXJsIHRvIHVzZSBmb3IgbWFraW5nIGEgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9iYXNlVXJsID0gaXNMb2NhbCA/ICdodHRwOi8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA6ICdodHRwczovL2xpdmVhcGkueWV4dC5jb20nO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIEFuc3dlcnMgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYW5zd2Vyc0tleSA9IG9wdHMuYW5zd2Vyc0tleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnNpb24gb2YgdGhlIEFQSSB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJzaW9uID0gb3B0cy52ZXJzaW9uIHx8IDIwMTkwMTAxIHx8IDIwMTkwMzAxO1xuICB9XG5cbiAgdmVydGljYWxRdWVyeSAocXVlcnlTdHJpbmcsIHZlcnRpY2FsS2V5LCBmaWx0ZXIpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGJhc2VVcmw6IHRoaXMuX2Jhc2VVcmwsXG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL3ZlcnRpY2FsL3F1ZXJ5JyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBxdWVyeVN0cmluZyxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgICAnZmlsdGVyJzogZmlsdGVyLFxuICAgICAgICAndmVydGljYWxLZXknOiB2ZXJ0aWNhbEtleVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH1cblxuICBxdWVyeSAocXVlcnlTdHJpbmcpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGJhc2VVcmw6IHRoaXMuX2Jhc2VVcmwsXG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL3F1ZXJ5JyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBxdWVyeVN0cmluZyxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlRGF0YSB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICB0aGlzLnNlY3Rpb25zID0gZGF0YS5zZWN0aW9ucyB8fCBbXTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSkge1xuICAgIGxldCBzZWN0aW9ucztcbiAgICBpZiAocmVzcG9uc2Uuc2VjdGlvbnMpIHtcbiAgICAgIHNlY3Rpb25zID0gcmVzcG9uc2Uuc2VjdGlvbnMubWFwKHMgPT4gKHtcbiAgICAgICAgbGFiZWw6IHMubGFiZWwsXG4gICAgICAgIHJlc3VsdHM6IHMucmVzdWx0cy5tYXAociA9PiBuZXcgQXV0b0NvbXBsZXRlUmVzdWx0KHIpKVxuICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWN0aW9ucyA9IFt7IHJlc3VsdHM6IHJlc3BvbnNlLnJlc3VsdHMubWFwKHIgPT4gbmV3IEF1dG9Db21wbGV0ZVJlc3VsdChyKSkgfV07XG4gICAgfVxuICAgIHJldHVybiBuZXcgQXV0b0NvbXBsZXRlRGF0YSh7IHNlY3Rpb25zIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRvQ29tcGxldGVSZXN1bHQge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgdGhpcy5maWx0ZXIgPSBkYXRhLmZpbHRlciB8fCB7fTtcbiAgICB0aGlzLmhpZ2hsaWdodGVkVmFsdWUgPSB0aGlzLmhpZ2hsaWdodChkYXRhKTtcbiAgICB0aGlzLmtleSA9IGRhdGEua2V5IHx8ICcnO1xuICAgIHRoaXMubWF0Y2hlZFN1YnN0cmluZ3MgPSBkYXRhLm1hdGNoZWRTdWJzdHJpbmdzIHx8IFtdO1xuICAgIHRoaXMudmFsdWUgPSBkYXRhLnZhbHVlIHx8ICcnO1xuICAgIHRoaXMuc2hvcnRWYWx1ZSA9IGRhdGEuc2hvcnRWYWx1ZSB8fCB0aGlzLnZhbHVlO1xuICB9XG5cbiAgLy8gVE9ETyhqZGVsZXJtZSk6IGNvbnNvbGlkYXRlIHdpdGggb3RoZXIgaGlnaGxpZ2h0IGZ1bmN0aW9uc1xuICBoaWdobGlnaHQgKGRhdGEpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBtYXRjaGVkU3Vic3RyaW5ncyB9ID0gZGF0YTtcblxuICAgIGlmICghbWF0Y2hlZFN1YnN0cmluZ3MgfHwgbWF0Y2hlZFN1YnN0cmluZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIG91ciBoaWdobGlnaHRlZCBzdWJzdHJpbmdzIGFyZSBzb3J0ZWRcbiAgICBtYXRjaGVkU3Vic3RyaW5ncy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAoYS5vZmZzZXQgPCBiLm9mZnNldCkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG5cbiAgICAgIGlmIChhLm9mZnNldCA+IGIub2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIC8vIEJ1aWxkIG91ciBuZXcgdmFsdWUgYmFzZWQgb24gdGhlIGhpZ2hsaWdodHNcbiAgICBsZXQgaGlnaGxpZ2h0ZWRWYWx1ZSA9ICcnO1xuICAgIGxldCBuZXh0U3RhcnQgPSAwO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXRjaGVkU3Vic3RyaW5ncy5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IHN0YXJ0ID0gTnVtYmVyKG1hdGNoZWRTdWJzdHJpbmdzW2pdLm9mZnNldCk7XG4gICAgICBsZXQgZW5kID0gc3RhcnQgKyBtYXRjaGVkU3Vic3RyaW5nc1tqXS5sZW5ndGg7XG5cbiAgICAgIGhpZ2hsaWdodGVkVmFsdWUgKz0gW3ZhbHVlLnNsaWNlKG5leHRTdGFydCwgc3RhcnQpLCAnPHN0cm9uZz4nLCB2YWx1ZS5zbGljZShzdGFydCwgZW5kKSwgJzwvc3Ryb25nPiddLmpvaW4oJycpO1xuXG4gICAgICBpZiAoaiA9PT0gbWF0Y2hlZFN1YnN0cmluZ3MubGVuZ3RoIC0gMSAmJiBlbmQgPCB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRWYWx1ZSArPSB2YWx1ZS5zbGljZShlbmQpO1xuICAgICAgfVxuXG4gICAgICBuZXh0U3RhcnQgPSBlbmQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhpZ2hsaWdodGVkVmFsdWU7XG4gIH1cbn1cbiIsImltcG9ydCBBdXRvQ29tcGxldGVEYXRhIGZyb20gJy4uL21vZGVscy9hdXRvY29tcGxldGVkYXRhJztcblxuLyoqXG4gKiBBIERhdGEgVHJhbnNmb3JtZXIgdGhhdCB0YWtlcyB0aGUgcmVzcG9uc2Ugb2JqZWN0IGZyb20gYSBBdXRvQ29tcGxldGUgcmVxdWVzdFxuICogQW5kIHRyYW5zZm9ybXMgaW4gdG8gYSBmcm9udC1lbmQgb3JpZW50ZWQgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBvdXJcbiAqIGNvbXBvbmVudCBsaWJyYXJ5IGFuZCBjb3JlIHN0b3JhZ2UgdW5kZXJzdGFuZC5cbiAqXG4gKiBUT0RPKGJpbGx5KSBDcmVhdGUgb3VyIG93biBmcm9udC1lbmQgZGF0YSBtb2RlbHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyIHtcbiAgc3RhdGljIGNsZWFuIChtb2R1bGVJZCwgZGF0YSkge1xuICAgIGlmIChkYXRhLnNlY3Rpb25zICYmIGRhdGEuc2VjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgZGF0YS5zZWN0aW9ucztcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5zZWN0aW9ucyAmJiBkYXRhLnNlY3Rpb25zLmxlbmd0aCA9PT0gMSAmJiBkYXRhLnNlY3Rpb25zWzBdLnJlc3VsdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgZGF0YS5zZWN0aW9ucztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgW21vZHVsZUlkXTogZGF0YVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgdW5pdmVyc2FsIChyZXNwb25zZSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIuY2xlYW4oXG4gICAgICAnYXV0b2NvbXBsZXRlJyxcbiAgICAgIEF1dG9Db21wbGV0ZURhdGEuZnJvbShyZXNwb25zZSlcbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGZpbHRlciAocmVzcG9uc2UsIGlucHV0S2V5KSB7XG4gICAgcmV0dXJuIEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lci5jbGVhbihcbiAgICAgIGBhdXRvY29tcGxldGUuJHtpbnB1dEtleX1gLFxuICAgICAgQXV0b0NvbXBsZXRlRGF0YS5mcm9tKHJlc3BvbnNlKSk7XG4gIH1cblxuICBzdGF0aWMgdmVydGljYWwgKHJlc3BvbnNlLCBpbnB1dEtleSkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIuY2xlYW4oXG4gICAgICBgYXV0b2NvbXBsZXRlLiR7aW5wdXRLZXl9YCxcbiAgICAgIHsgc2VjdGlvbnM6IHJlc3BvbnNlLnNlY3Rpb25zIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lciBmcm9tICcuL2F1dG9jb21wbGV0ZWRhdGF0cmFuc2Zvcm1lcic7XG5cbi8qKlxuICogQSB3cmFwcGVyIGFyb3VuZCB0aGUgQXV0b0NvbXBsZXRlIHtBcGlSZXF1ZXN0fSBlbmRwb2ludHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlIHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpKS5zZWFyY2hQYXJhbXM7XG4gICAgbGV0IGlzTG9jYWwgPSBwYXJhbXMuZ2V0KCdsb2NhbCcpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhc2VVcmwgdG8gdXNlIGZvciBtYWtpbmcgYSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Jhc2VVcmwgPSBpc0xvY2FsID8gJ2h0dHA6Ly8nICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lIDogJ2h0dHBzOi8vbGl2ZWFwaS55ZXh0LmNvbSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgQVBJIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwaUtleSA9IG9wdHMuYXBpS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgQW5zd2VycyBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hbnN3ZXJzS2V5ID0gb3B0cy5hbnN3ZXJzS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgQVBJIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnNpb24gPSBvcHRzLnZlcnNpb24gfHwgMjAxOTAxMDEgfHwgMjAxOTAzMDE7XG4gIH1cblxuICAvKipcbiAgICogcXVlcnkgc3VwcG9ydHMgYm90aCBVbml2ZXJzYWxTZWFyY2ggYW5kIFZlcnRpY2FsU2VhcmNoIGF1dG8gY29tcGxldGluZy5cbiAgICogUHJvdmlkaW5nIGFuIGV4cGVyaWVuY2VLZXkgYW5kIGJhcktleSB3aWxsIGNyZWF0ZSBhIHZlcnRpY2FsIHNlYXJjaCBhdXRvIGNvbXBsZXRlIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCBUaGUgaW5wdXQgdG8gdXNlIGZvciBhdXRvIGNvbXBsZXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHBlcmllbmNlS2V5IFRoZSBleHBlcmllbmNlIGtleSB0byB1c2UgZm9yIGEgdmVydGljYWwgYXV0byBjb21wbGV0ZSByZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiYXJLZXkgVGhlIGJhcktleSB0byB1c2UgZm9yIGEgdmVydGljYWwgc2VhcmNoIGF1dG8gY29tcGxldGUgcmVxdWVzdFxuICAgKi9cbiAgcXVlcnkgKGlucHV0LCBleHBlcmllbmNlS2V5LCBiYXJLZXkpIHtcbiAgICBpZiAoZXhwZXJpZW5jZUtleSB8fCBiYXJLZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9xdWVyeVZlcnRpY2FsKGlucHV0LCBleHBlcmllbmNlS2V5LCBiYXJLZXkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9xdWVyeVVuaXZlcnNhbChpbnB1dCk7XG4gIH1cblxuICAvKipcbiAgICogQXV0b2NvbXBsZXRlIGZpbHRlcnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0IFRoZSBpbnB1dCB0byB1c2UgZm9yIGF1dG8gY29tcGxldGVcbiAgICovXG4gIHF1ZXJ5RmlsdGVyIChpbnB1dCwgZXhwZXJpZW5jZUtleSwgYmFyS2V5KSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBiYXNlVXJsOiB0aGlzLl9iYXNlVXJsLFxuICAgICAgZW5kcG9pbnQ6ICcvdjIvYWNjb3VudHMvbWUvYW5zd2Vycy9maWx0ZXJzZWFyY2gnLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IGlucHV0LFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICAgICdleHBlcmllbmNla2V5JzogZXhwZXJpZW5jZUtleSxcbiAgICAgICAgJ2lucHV0S2V5JzogYmFyS2V5XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQoKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLmZpbHRlcihyZXNwb25zZS5yZXNwb25zZSwgYmFyS2V5KSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gIH1cblxuICBfcXVlcnlWZXJ0aWNhbCAoaW5wdXQsIGV4cGVyaWVuY2VLZXksIGJhcktleSkge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgYmFzZVVybDogdGhpcy5fYmFzZVVybCxcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2VudGl0aWVzL2F1dG9jb21wbGV0ZScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogaW5wdXQsXG4gICAgICAgICdleHBlcmllbmNlS2V5JzogZXhwZXJpZW5jZUtleSxcbiAgICAgICAgJ2JhcktleSc6IGJhcktleVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lci52ZXJ0aWNhbChyZXNwb25zZS5yZXNwb25zZSwgcmVxdWVzdC5fcGFyYW1zLmJhcktleSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICB9XG5cbiAgX3F1ZXJ5VW5pdmVyc2FsIChxdWVyeVN0cmluZykge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgYmFzZVVybDogdGhpcy5fYmFzZVVybCxcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvYXV0b2NvbXBsZXRlJyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBxdWVyeVN0cmluZyxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVxdWVzdC5nZXQocXVlcnlTdHJpbmcpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIudW5pdmVyc2FsKHJlc3BvbnNlLnJlc3BvbnNlKSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yIChkYXRhID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlc3VsdHNEYXRhIGV4cGVjdGVkIGZvcm1hdDogeyBkYXRhOiB7IC4uLiB9LCBoaWdobGlnaHRlZEZpZWxkczogeyAuLi4gfX1cbiAgICovXG4gIHN0YXRpYyBmcm9tIChyZXN1bHRzRGF0YSkge1xuICAgIGxldCByZXN1bHRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gVE9ETyB1c2UgcmVzdWx0RGF0YS5oaWdobGlnaHRlZEZpZWxkcyB0b1xuICAgICAgLy8gdHJhbnNmb3JtIHJlc3VsdERhdGEuZGF0YSBpbnRvIGh0bWwtZnJpZW5kbHkgc3RyaW5ncyB0aGF0IGhpZ2hsaWdodCB2YWx1ZXMuXG5cbiAgICAgIC8vIENoZWNrIGZvciBuZXcgZGF0YSBmb3JtYXQsIG90aGVyd2lzZSBmYWxsYmFjayB0byBsZWdhY3lcbiAgICAgIHJlc3VsdHMucHVzaChuZXcgUmVzdWx0KHJlc3VsdHNEYXRhW2ldLmRhdGEgfHwgcmVzdWx0c0RhdGFbaV0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxufVxuIiwiaW1wb3J0IFJlc3VsdCBmcm9tICcuL3Jlc3VsdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3RvciAoZGF0YSwgdXJsKSB7XG4gICAgdGhpcy52ZXJ0aWNhbENvbmZpZ0lkID0gZGF0YS52ZXJ0aWNhbENvbmZpZ0lkIHx8IG51bGw7XG4gICAgdGhpcy5yZXN1bHRzQ291bnQgPSBkYXRhLnJlc3VsdHNDb3VudCB8fCAwO1xuICAgIHRoaXMuZW5jb2RlZFN0YXRlID0gZGF0YS5lbmNvZGVkU3RhdGUgfHwgJyc7XG4gICAgdGhpcy5hcHBsaWVkUXVlcnlGaWx0ZXJzID0gQXBwbGllZFF1ZXJ5RmlsdGVyLmZyb20oZGF0YS5hcHBsaWVkUXVlcnlGaWx0ZXJzKTtcbiAgICB0aGlzLmZhY2V0cyA9IGRhdGEuZmFjZXRzIHx8IG51bGw7XG4gICAgdGhpcy5yZXN1bHRzID0gUmVzdWx0LmZyb20oZGF0YS5yZXN1bHRzKTtcbiAgICB0aGlzLm1hcCA9IFNlY3Rpb24ucGFyc2VNYXAoZGF0YS5yZXN1bHRzKTtcbiAgICB0aGlzLnZlcnRpY2FsVVJMID0gdXJsIHx8IG51bGw7XG4gIH1cblxuICBzdGF0aWMgcGFyc2VNYXAgKHJlc3VsdHMpIHtcbiAgICBsZXQgbWFwTWFya2VycyA9IFtdO1xuXG4gICAgbGV0IGNlbnRlckNvb3JkaW5hdGVzID0ge307XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc3VsdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIFJlbW92ZSBsZWdhY3kgZmFsbGJhY2sgZnJvbSBhbGwgZGF0YSBmb3JtYXRcbiAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzW2pdLmRhdGEgfHwgcmVzdWx0c1tqXTtcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZSkge1xuICAgICAgICBpZiAoIWNlbnRlckNvb3JkaW5hdGVzLmxhdGl0dWRlKSB7XG4gICAgICAgICAgY2VudGVyQ29vcmRpbmF0ZXMgPSB7XG4gICAgICAgICAgICBsYXRpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sb25naXR1ZGVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIG1hcE1hcmtlcnMucHVzaCh7XG4gICAgICAgICAgaXRlbTogcmVzdWx0LFxuICAgICAgICAgIGxhYmVsOiBtYXBNYXJrZXJzLmxlbmd0aCArIDEsXG4gICAgICAgICAgbGF0aXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubGF0aXR1ZGUsXG4gICAgICAgICAgbG9uZ2l0dWRlOiByZXN1bHQueWV4dERpc3BsYXlDb29yZGluYXRlLmxvbmdpdHVkZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgJ21hcENlbnRlcic6IGNlbnRlckNvb3JkaW5hdGVzLFxuICAgICAgJ21hcE1hcmtlcnMnOiBtYXBNYXJrZXJzXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChtb2R1bGVzLCB1cmxzKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gW107XG4gICAgaWYgKCFtb2R1bGVzKSB7XG4gICAgICByZXR1cm4gc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmV3IFNlY3Rpb24obW9kdWxlcyk7XG4gICAgfVxuXG4gICAgLy8gT3VyIHNlY3Rpb25zIHNob3VsZCBjb250YWluIGEgcHJvcGVydHkgb2YgbWFwTWFya2VyIG9iamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNlY3Rpb25zLnB1c2goXG4gICAgICAgIG5ldyBTZWN0aW9uKFxuICAgICAgICAgIG1vZHVsZXNbaV0sXG4gICAgICAgICAgdXJsc1ttb2R1bGVzW2ldLnZlcnRpY2FsQ29uZmlnSWRdXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlY3Rpb25zO1xuICB9XG59XG5cbmNsYXNzIEFwcGxpZWRRdWVyeUZpbHRlciB7XG4gIC8vIFN1cHBvcnQgbGVnYWN5IG1vZGVsIGFuZCBuZXcgbW9kZWwgdW50aWwgZnVsbHkgbWlncmF0ZWQuXG4gIC8vIFRPRE8oYmlsbHkpIFJlbW92ZSB0aGUgbGVmdCBleHByZXNzaW9uIGR1cmluZyBhc3NpZ25tZW50IHdoZW4gbWlncmF0ZWQuXG4gIGNvbnN0cnVjdG9yIChhcHBsaWVkUXVlcnlGaWx0ZXIpIHtcbiAgICB0aGlzLmtleSA9IGFwcGxpZWRRdWVyeUZpbHRlci5rZXkgfHwgYXBwbGllZFF1ZXJ5RmlsdGVyLmRpc3BsYXlLZXk7XG4gICAgdGhpcy52YWx1ZSA9IGFwcGxpZWRRdWVyeUZpbHRlci52YWx1ZSB8fCBhcHBsaWVkUXVlcnlGaWx0ZXIuZGlzcGxheVZhbHVlO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKGFwcGxpZWRRdWVyeUZpbHRlcnMpIHtcbiAgICBsZXQgZmlsdGVycyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXBwbGllZFF1ZXJ5RmlsdGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgZmlsdGVycy5wdXNoKG5ldyBBcHBsaWVkUXVlcnlGaWx0ZXIoYXBwbGllZFF1ZXJ5RmlsdGVyc1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsdGVycztcbiAgfVxufVxuIiwiaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9zZWN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pdmVyc2FsUmVzdWx0cyB7XG4gIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgdGhpcy5xdWVyeUlkID0gZGF0YS5xdWVyeUlkIHx8IG51bGw7XG4gICAgdGhpcy5zZWN0aW9ucyA9IGRhdGEuc2VjdGlvbnMgfHwgW107XG4gIH1cblxuICBzdGF0aWMgZnJvbSAocmVzcG9uc2UsIHVybHMpIHtcbiAgICByZXR1cm4gbmV3IFVuaXZlcnNhbFJlc3VsdHMoe1xuICAgICAgcXVlcnlJZDogcmVzcG9uc2UucXVlcnlJZCxcbiAgICAgIHNlY3Rpb25zOiBTZWN0aW9uLmZyb20ocmVzcG9uc2UubW9kdWxlcywgdXJscylcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0QW5zd2VyIHtcbiAgY29uc3RydWN0b3IgKGRpcmVjdEFuc3dlciA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkaXJlY3RBbnN3ZXIpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIHtcbiAgY29uc3RydWN0b3IgKHRhYk9yZGVyKSB7XG4gICAgdGhpcy50YWJPcmRlciA9IHRhYk9yZGVyIHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKG1vZHVsZXMpIHtcbiAgICBsZXQgbmF2ID0gW107XG4gICAgaWYgKCFtb2R1bGVzIHx8ICFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmF2O1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5hdi5wdXNoKG1vZHVsZXNbaV0udmVydGljYWxDb25maWdJZCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgTmF2aWdhdGlvbihuYXYpO1xuICB9XG59XG4iLCJpbXBvcnQgU2VjdGlvbiBmcm9tICcuL3NlY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0aWNhbFJlc3VsdHMge1xuICBjb25zdHJ1Y3RvciAoZGF0YSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tIChyZXNwb25zZSkge1xuICAgIHJldHVybiBuZXcgVmVydGljYWxSZXN1bHRzKFNlY3Rpb24uZnJvbShyZXNwb25zZSkpO1xuICB9XG59XG4iLCJpbXBvcnQgVW5pdmVyc2FsUmVzdWx0cyBmcm9tICcuLi9tb2RlbHMvdW5pdmVyc2FscmVzdWx0cyc7XG5pbXBvcnQgRGlyZWN0QW5zd2VyIGZyb20gJy4uL21vZGVscy9kaXJlY3RhbnN3ZXInO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vbW9kZWxzL25hdmlnYXRpb24nO1xuaW1wb3J0IFZlcnRpY2FsUmVzdWx0cyBmcm9tICcuLi9tb2RlbHMvdmVydGljYWxyZXN1bHRzJztcblxuLyoqXG4gKiBBIERhdGEgVHJhbnNmb3JtZXIgdGhhdCB0YWtlcyB0aGUgcmVzcG9uc2Ugb2JqZWN0IGZyb20gYSBTZWFyY2ggcmVxdWVzdFxuICogQW5kIHRyYW5zZm9ybXMgaW4gdG8gYSBmcm9udC1lbmQgb3JpZW50ZWQgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBvdXJcbiAqIGNvbXBvbmVudCBsaWJyYXJ5IGFuZCBjb3JlIHN0b3JhZ2UgdW5kZXJzdGFuZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoRGF0YVRyYW5zZm9ybWVyIHtcbiAgc3RhdGljIHRyYW5zZm9ybSAoZGF0YSwgdXJscyA9IHt9KSB7XG4gICAgbGV0IHJlc3BvbnNlID0gZGF0YS5yZXNwb25zZTtcbiAgICByZXR1cm4ge1xuICAgICAgbmF2aWdhdGlvbjogTmF2aWdhdGlvbi5mcm9tKHJlc3BvbnNlLm1vZHVsZXMpLFxuICAgICAgZGlyZWN0QW5zd2VyOiBuZXcgRGlyZWN0QW5zd2VyKHJlc3BvbnNlLmRpcmVjdEFuc3dlciksXG4gICAgICB1bml2ZXJzYWxSZXN1bHRzOiBVbml2ZXJzYWxSZXN1bHRzLmZyb20ocmVzcG9uc2UsIHVybHMpXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB0cmFuc2Zvcm1WZXJ0aWNhbCAoZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICBuYXZpZ2F0aW9uOiBuZXcgTmF2aWdhdGlvbigpLCAvLyBWZXJpdGNhbCBkb2Vzbid0IHJlc3BvbmQgd2l0aCBvcmRlcmluZywgc28gdXNlIGVtcHR5IG5hdi5cbiAgICAgIHZlcnRpY2FsUmVzdWx0czogVmVydGljYWxSZXN1bHRzLmZyb20oZGF0YS5yZXNwb25zZSlcbiAgICB9O1xuICB9XG59XG4iLCIvKipcbiAqIEV2ZW50RW1pdHRlciBpcyBhIGJhc2UgY2xhc3MgZm9yIGFueSBvYmplY3QgdGhhdCB3YW50cyB0byBleHBvc2VcbiAqIGEgcHViL3N1YiBpbnRlcmZhY2UsIGZvciBlbWl0dGluZyBtZXNzYWdlcyBhbmQgcHJvdmlkaW5nIGxpc3RlbmVycy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIC8qKlxuICAgICAqIFRoZSBzdWJzY3JpYmVycyBvZiBtZXNzYWdlc1xuICAgICAqIEB0eXBlIHtBcnJheS48T2JqZWN0Pn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIG9uIGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciBzdWJzY3JpYmluZyBldmVudHMgdGhhdCBhcmUgZW1pdHRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byBsaXN0ZW4gdG9cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgVGhlIGNhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSB7ZXZ0fSBpcyBlbWl0dGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSBPcHRpb25hbCB2YWx1ZSB3aGljaCB3aWxsIG9ubHkgaGFuZGxlIHRoZSBtZXNzYWdlIG9uY2VcbiAgICovXG4gIG9uIChldnQsIGNiLCBvbmNlKSB7XG4gICAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBoYW5kbGVyIHNob3VsZCBiZSBvZiB0eXBlIHtmdW5jdGlvbn0nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbGlzdGVuZXJzW2V2dF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzW2V2dF0gPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XS5wdXNoKHtcbiAgICAgIGV2ZW50OiBldnQsXG4gICAgICBjYjogY2IsXG4gICAgICBvbmNlOiBvbmNlIHx8IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBvbmNlIGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciBzdWJzY3JpYmluZyBldmVudHMgdGhhdCBhcmUgZW1pdHRlZC5cbiAgICogVGhlIGhhbmRsZXIgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBvbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIGxpc3RlbiB0b1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gdGhlIHtldnR9IGlzIGVtaXR0ZWRcbiAgICogQHBhcmFtIHtib29sZWFufSBvbmNlIE9wdGlvbmFsIHZhbHVlIHdoaWNoIHdpbGwgb25seSBoYW5kbGUgdGhlIG1lc3NhZ2Ugb25jZVxuICAgKi9cbiAgb25jZSAoZXZ0LCBjYikge1xuICAgIHJldHVybiB0aGlzLm9uKGV2dCwgY2IsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIG9mZiBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3IgdW5zdWJzY3JpYmluZyBmcm9tIGFuIGV2ZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gdW5zdWJzY3JpYmUgZnJvbVxuICAgKi9cbiAgb2ZmIChldnQpIHtcbiAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW2V2dF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogZW1pdCBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3IgYnJvYWRjYXN0aW5nIG1lc3NhZ2VzL2V2ZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIHB1Ymxpc2ggZnJvbVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSB0aGUgZGF0YSB0byBzZW5kIGFsb25nIHRvIHRoZSBzdWJzY3JpYmVyc1xuICAgKi9cbiAgZW1pdCAoZXZ0LCBkYXRhKSB7XG4gICAgbGV0IGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1tldnRdO1xuICAgIGlmIChsaXN0ZW5lcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEludm9rZSBlYWNoIG9mIGFsbCB0aGUgbGlzdGVuZXIgaGFuZGxlcnMgYW5kIHJlbW92ZSB0aGUgb25lcyB0aGF0IHNob3VsZCBmaXJlIG9ubHkgb25jZS5cbiAgICBsZXQga2VlcCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0uY2IoZGF0YSk7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldLm9uY2UgPT09IHRydWUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEluc3RlYWQgb2YgaGF2aW5nIGEgJ2RpcnR5JyBhcnJheSB3aXRoIGRlbGV0ZWQgb3IgJ3VuZGVmaW5lZCcgZW50cmllcyxcbiAgICAgIC8vIHdlIGp1c3QgY3JlYXRlIGEgYnJhbmQgbmV3IGFycmF5IHdpdGhvdXQgdGhlIGxpc3RlbmVycyB0aGF0IHdlcmUgcmVtb3ZlZFxuICAgICAga2VlcC5wdXNoKGxpc3RlbmVyc1tpXSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIG91ciBvbGQgbGlzdCBvZiBsaXN0ZW5lcnMgdG8gdGhlIG5ld2x5IGNyZWF0ZWQgYXJyYXlcbiAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XSA9IGtlZXA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vZXZlbnRlbWl0dGVyL2V2ZW50ZW1pdHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZHVsZURhdGEgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvciAoaWQsIGRhdGEgPSB7fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLl9pZCA9IGlkO1xuICAgIHRoaXMuX2hpc3RvcnkgPSBbXTtcbiAgICB0aGlzLl9kYXRhID0ge307XG4gICAgdGhpcy5zZXQoZGF0YSk7XG4gIH1cblxuICBzZXQgKGRhdGEpIHtcbiAgICBkYXRhID0gZGF0YSB8fCB7fTtcblxuICAgIGlmICh0aGlzLl9kYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLmNhcHR1cmVQcmV2aW91cygpO1xuXG4gICAgLy8gVE9ETyhiaWxseSkgVGhpcyBhc3N1bWVzIHRoZSB0b3AgbGV2ZWwgcHJvcGVydGllcyBhcmUgYWxsIGNvbnRhaW5lZCB3aXRoaW5cbiAgICAvLyBhbiBvYmplY3QuIFByb2JhYmx5IG5vdCBhIGdvb2QgYXNzdW1wdGlvbiB0byBtYWtlLlxuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XG4gICAgbGV0IGxlbiA9IGtleXMubGVuZ3RoO1xuICAgIGxldCBpc0RpcnR5ID0gZmFsc2U7XG5cbiAgICAvLyBSZXNldCB0aGUgb2JqZWN0IGlmIGl0cyBiZWluZyBhcHBsaWVkIGFzIGVtcHR5XG4gICAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgIGlzRGlydHkgPSB0cnVlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGxldCBwcm9wID0ga2V5c1tpXTtcbiAgICAgIGxldCB2YWwgPSBkYXRhW2tleXNbaV1dO1xuXG4gICAgICAvLyBUT0RPKGJpbGx5KSBGb3Igbm93LCBvbmUgbGV2ZWwgb2YgY29tcGFyaXNvbiBpcyBwcm9iYWJseSBmaW5lLFxuICAgICAgLy8gaW4gdGhlIGZ1dHVyZSB3ZSdsbCBwcm9iYWJseSBuZWVkIHRvIGRvIHNvbWUgZGVlcGVyIG9iamVjdCBjb21wYXJpc29uc1xuICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGFscmVhZHkgY29ycmVjdCwgbm8gdXBkYXRlcyFcbiAgICAgIGlmICh0aGlzLl9kYXRhW3Byb3BdID09PSB2YWwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2RhdGFbcHJvcF0gPSB2YWw7XG4gICAgICBpc0RpcnR5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBPbmx5IGVtaXQgdXBkYXRlcyBpZiB0aGUgbW9kZWwgd2FzIGRpcnR5XG4gICAgaWYgKGlzRGlydHkpIHtcbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5fZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjYXB0dXJlUHJldmlvdXMgKCkge1xuICAgIGlmICh0aGlzLl9oaXN0b3J5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2hpc3RvcnkgPSBbXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faGlzdG9yeS5sZW5ndGggKyAxID4gNSkge1xuICAgICAgdGhpcy5faGlzdG9yeS5zaGlmdCgpO1xuICAgIH1cblxuICAgIC8vIElmIGRhdGEgaXMgZXZlciB1bmRlZmluZWQsIHdlIGRlZmF1bHQgdG8gZW1wdHkgb2JqZWN0XG4gICAgdGhpcy5faGlzdG9yeS5wdXNoKEpTT04uc3RyaW5naWZ5KHRoaXMuX2RhdGEgfHwge30pKTtcbiAgfVxuXG4gIHVuZG8gKCkge1xuICAgIGxldCBwcmV2aW91cyA9IHt9O1xuICAgIGlmICh0aGlzLl9wcmV2aW91cy5sZW5ndGggPiAwKSB7XG4gICAgICBwcmV2aW91cyA9IEpTT04ucGFyc2UodGhpcy5fcHJldmlvdXMucG9wKCkpO1xuICAgIH1cblxuICAgIHRoaXMuX2RhdGEuc2V0KHByZXZpb3VzKTtcbiAgfVxuXG4gIHJhdyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbn1cbiIsImltcG9ydCBNb2R1bGVEYXRhIGZyb20gJy4vbW9kdWxlZGF0YSc7XG5pbXBvcnQgU2VhcmNoRGF0YVRyYW5zZm9ybWVyIGZyb20gJy4uL3NlYXJjaC9zZWFyY2hkYXRhdHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXIgPSB7fTtcbiAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnMgPSB7fTtcbiAgfVxuXG4gIGluaXQgKCkge1xuXG4gIH1cblxuICBpbnNlcnQgKGRhdGEpIHtcbiAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG1vZHVsZUlkcyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kdWxlSWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbW9kdWxlSWQgPSBtb2R1bGVJZHNbaV07XG4gICAgICBpZiAodGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXSA9IG5ldyBNb2R1bGVEYXRhKG1vZHVsZUlkKTtcbiAgICAgICAgdGhpcy5fYXBwbHlGdXR1cmVMaXN0ZW5lcnMobW9kdWxlSWQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5zZXQoZGF0YVttb2R1bGVJZF0pO1xuICAgIH1cbiAgfVxuXG4gIGluc2VydFVuaXZlcnNhbFJlc3VsdHMgKGRhdGEpIHtcbiAgICB0aGlzLmluc2VydChTZWFyY2hEYXRhVHJhbnNmb3JtZXIudHJhbnNmb3JtKGRhdGEpKTtcbiAgfVxuXG4gIGdldFN0YXRlIChtb2R1bGVJZCkge1xuICAgIGlmICh0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXSkge1xuICAgICAgcmV0dXJuIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdLnJhdygpO1xuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH1cblxuICBvbiAoZXZ0LCBtb2R1bGVJZCwgY2IpIHtcbiAgICBsZXQgbW9kdWxlRGF0YSA9IHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdO1xuICAgIGlmIChtb2R1bGVEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXSA9IFtdO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdLnB1c2goe1xuICAgICAgICBldmVudDogZXZ0LFxuICAgICAgICBjYjogY2JcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0ub24oZXZ0LCBjYik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBvZmYgKGV2dCwgbW9kdWxlSWQsIGNiKSB7XG4gICAgbGV0IG1vZHVsZURhdGEgPSB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXTtcbiAgICBpZiAobW9kdWxlRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0ucG9wKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdLm9mZihldnQsIGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9hcHBseUZ1dHVyZUxpc3RlbmVycyAobW9kdWxlSWQpIHtcbiAgICBsZXQgZnV0dXJlcyA9IHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF07XG4gICAgaWYgKCFmdXR1cmVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmdXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZnV0dXJlID0gZnV0dXJlc1tpXTtcbiAgICAgIHRoaXMub24oZnV0dXJlLmV2ZW50LCBtb2R1bGVJZCwgZnV0dXJlLmNiKTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF07XG4gIH1cbn1cbiIsImltcG9ydCBTZWFyY2ggZnJvbSAnLi9zZWFyY2gvc2VhcmNoJztcbmltcG9ydCBBdXRvQ29tcGxldGUgZnJvbSAnLi9zZWFyY2gvYXV0b2NvbXBsZXRlJztcblxuaW1wb3J0IFNlYXJjaERhdGFUcmFuc2Zvcm1lciBmcm9tICcuL3NlYXJjaC9zZWFyY2hkYXRhdHJhbnNmb3JtZXInO1xuXG5pbXBvcnQgU3RvcmFnZSBmcm9tICcuL3N0b3JhZ2Uvc3RvcmFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmUge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgaWYgKHR5cGVvZiBvcHRzLmFwaUtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBgYXBpS2V5YC4gVHlwZSBtdXN0IGJlIHtzdHJpbmd9Jyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRzLmFuc3dlcnNLZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYGFuc3dlcnNLZXlgLiBUeXBlIG11c3QgYmUge3N0cmluZ30nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IEFQSSBLZXkgdXNlZCBmb3IgYWxsIHJlcXVlc3RzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2FwaUtleSA9IG9wdHMuYXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNsaWVudCBBbnN3ZXJzIEtleSB1c2VkIGZvciBhbGwgcmVxdWVzdHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYW5zd2Vyc0tleSA9IG9wdHMuYW5zd2Vyc0tleTtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjb3JlIGRhdGEgc3RvcmFnZSB0aGF0IHBvd2VycyB0aGUgVUlcbiAgICAgKiBAdHlwZSB7U3RvcmFnZX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiBjb250YWluaW5nIHRoZSBpbnRlZ3JhdGlvbiB3aXRoIHRoZSBSRVNUZnVsIHNlYXJjaCBBUElcbiAgICAgKiBGb3IgYm90aCB2ZXJ0aWNhbCBhbmQgdW5pdmVyc2FsIHNlYXJjaFxuICAgICAqIEB0eXBlIHtTZWFyY2h9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zZWFyY2hlciA9IG5ldyBTZWFyY2goe1xuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICBhbnN3ZXJzS2V5OiB0aGlzLl9hbnN3ZXJzS2V5XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhYnN0cmFjdGlvbiBjb250YWluaW5nIHRoZSBpbnRlZ3JhdGlvbiB3aXRoIHRoZSBSRVNUZnVsIGF1dG9jb21wbGV0ZSBBUElcbiAgICAgKiBGb3IgYm90aCB2ZXJ0aWNhbCBhbmQgdW5pdmVyc2FsIHNlYXJjaFxuICAgICAqIEB0eXBlIHtTZWFyY2h9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hdXRvQ29tcGxldGUgPSBuZXcgQXV0b0NvbXBsZXRlKHtcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgYW5zd2Vyc0tleTogdGhpcy5fYW5zd2Vyc0tleVxuICAgIH0pO1xuICB9XG5cbiAgdmVydGljYWxTZWFyY2ggKHF1ZXJ5U3RyaW5nLCB2ZXJ0aWNhbEtleSwgZmlsdGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaGVyXG4gICAgICAudmVydGljYWxRdWVyeShxdWVyeVN0cmluZywgdmVydGljYWxLZXksIGZpbHRlcilcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IFNlYXJjaERhdGFUcmFuc2Zvcm1lci50cmFuc2Zvcm1WZXJ0aWNhbChyZXNwb25zZSkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLmluc2VydChkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoIChxdWVyeVN0cmluZywgdXJscykge1xuICAgIHJldHVybiB0aGlzLl9zZWFyY2hlclxuICAgICAgLnF1ZXJ5KHF1ZXJ5U3RyaW5nKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gU2VhcmNoRGF0YVRyYW5zZm9ybWVyLnRyYW5zZm9ybShyZXNwb25zZSwgdXJscykpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLmluc2VydChkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgYXV0b0NvbXBsZXRlIChxdWVyeVN0cmluZywgZXhwZXJpZW5jZUtleSwgYmFyS2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5KHF1ZXJ5U3RyaW5nLCBleHBlcmllbmNlS2V5LCBiYXJLZXkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLmluc2VydChkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgYXV0b0NvbXBsZXRlRmlsdGVyIChpbnB1dCwgZXhwZXJpZW5jZUtleSwgYmFyS2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5RmlsdGVyKGlucHV0LCBleHBlcmllbmNlS2V5LCBiYXJLZXkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLmluc2VydChkYXRhKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgb24gKGV2dCwgbW9kdWxlSWQsIGNiKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5vbihldnQsIG1vZHVsZUlkLCBjYik7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29tcG9uZW50TWFuYWdlciBpcyBhIFNpbmdsZXRvbmUgdGhhdCBjb250YWlucyBib3RoIGFuIGludGVybmFsIHJlZ2lzdHJ5IG9mXG4gKiBlbGlnaWJsZSBjb21wb25lbnRzIHRvIGJlIGNyZWF0ZWQsIGFzIHdlbGwgYXMga2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnRcbiAqIGluc3RhbnRpYXRlZCBhbmQgYWN0aXZlIGNvbXBvbmVudHMuXG4gKlxuICogQUxMIGNvbXBvbmVudHMgc2hvdWxkIGJlIGNvbnN0cnVjdGVkIHVzaW5nIHRoZSB7Q29tcG9uZW50TWFuYWdlcn0gdmlhIGl0cyBgY3JlYXRlYCBtZXRob2QuXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIGlmICghQ29tcG9uZW50TWFuYWdlci5zZXRJbnN0YW5jZSh0aGlzKSkge1xuICAgICAgcmV0dXJuIENvbXBvbmVudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcG9uZW50IHJlZ2lzdHJ5IGlzIGFuIGludGVybmFsIG1hcCwgdGhhdCBjb250YWluc1xuICAgICAqIGFsbCBhdmFpbGFibGUgY29tcG9uZW50IENMQVNTRVMgdXNlZCBmb3IgY3JlYXRpb24gb3Igb3ZlcnJpZGUuXG4gICAgICogRWFjaCBjb21wb25lbnQgY2xhc3MgaGFzIGEgdW5pcXVlIFRZUEUsIHdoaWNoIGlzIHVzZWQgYXMgdGhlIGtleSBmb3IgdGhlIHJlZ2lzdHJ5XG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9jb21wb25lbnRSZWdpc3RyeSA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFjdGl2ZSBjb21wb25lbnRzIGlzIGFuIGludGVybmFsIGNvbnRhaW5lciB0byBrZWVwIHRyYWNrXG4gICAgICogb2YgYWxsIG9mIHRoZSBjb21wb25lbnRzIHRoYXQgaGF2ZSBiZWVuIGNvbnN0cnVjdGVkXG4gICAgICovXG4gICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50cyA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNvcmUgbGlicmFyeSBkZXBlbmRlbmN5XG4gICAgICpcbiAgICAgKiBUaGUgQ29yZSBjb250YWlucyBib3RoIHRoZSBzdG9yYWdlIEFORCBzZXJ2aWNlcyB0aGF0IGFyZSBuZWVkZWQgZm9yIHBlcmZvcm1pbmcgb3BlcmF0aW9uc1xuICAgICAqIGxpa2Ugc2VhcmNoIGFuZCBhdXRvIGNvbXBsZXRlLlxuICAgICAqXG4gICAgICogVGhlIHN0b3JhZ2UgaXMgdGhlIHNvdXJjZSBvZiB0cnV0aCBmb3IgdGhlIHN0YXRlIG9mIEFMTCBjb21wb25lbnRzLlxuICAgICAqIFdoZW5ldmVyIHRoZSBzdG9yYWdlIGlzIHVwZGF0ZWQsIHRoZSBzdGF0ZSBnZXRzIHB1c2hlZCBkb3duIHRvIHRoZSBuZWNlc3NhcnkgY29tcG9uZW50cy5cbiAgICAgKiBAdHlwZSB7Q29yZX1cbiAgICAgKi9cbiAgICB0aGlzLl9jb3JlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBwcmltYXJ5IHJlbmRlcmVyIHRvIHVzZSBmb3IgYWxsIGNvbXBvbmVudHNcbiAgICAgKiBAdHlwZSB7SGFuZGxlYmFyc1JlbmRlcmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3JlbmRlcmVyID0gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBzZXRJbnN0YW5jZSAoaW5zdGFuY2UpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UgKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgc2V0UmVuZGVyZXIgKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldENvcmUgKGNvcmUpIHtcbiAgICB0aGlzLl9jb3JlID0gY29yZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZWdpc3RlcnMgYSBjb21wb25lbnQgdG8gYmUgZWxpZ2libGUgZm9yIGNyZWF0aW9uIGFuZCBvdmVycmlkZS5cbiAgICogQHBhcmFtIHtDb21wb25lbnR9IFRoZSBDb21wb25lbnQgQ2xhc3MgdG8gcmVnaXN0ZXJcbiAgICovXG4gIHJlZ2lzdGVyIChjb21wb25lbnRDbGF6eikge1xuICAgIHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5W2NvbXBvbmVudENsYXp6LnR5cGVdID0gY29tcG9uZW50Q2xheno7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIGlzIHRoZSBlbnRyeSBwb2ludCBmb3IgY29uc3RydWN0aW5nIGFueSBhbmQgYWxsIGNvbXBvbmVudHMuXG4gICAqIEl0IHdpbGwgaW5zdGFudGlhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudCwgYW5kIGJvdGggYXBwbHlcbiAgICogaW5pdGlhbCBzdGF0ZSBmcm9tIHRoZSBzdG9yYWdlIGFuZCBiaW5kIGl0IHRvIHRoZSBzdG9yYWdlIGZvciB1cGRhdGVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50VHlwZSBUaGUgY29tcG9uZW50IHR5cGUgdG8gY3JlYXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIFRoZSBvcHRpb25zIHRvIHBpcGUgdG8gdGhlIGNvbnN0cnVjdGlvbiBvZiB0aGUgY29tcG9uZW50XG4gICAqL1xuICBjcmVhdGUgKGNvbXBvbmVudFR5cGUsIG9wdHMpIHtcbiAgICAvLyBFdmVyeSBjb21wb25lbnQgbmVlZHMgbG9jYWwgYWNjZXNzIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlclxuICAgIC8vIGJlY2F1c2Ugc29tZXRpbWVzIGNvbXBvbmVudHMgaGF2ZSBzdWJjb21wb25lbnRzIHRoYXQgbmVlZCB0byBiZVxuICAgIC8vIGNvbnN0cnVjdGVkIGR1cmluZyBjcmVhdGlvblxuICAgIG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNvcmU6IHRoaXMuX2NvcmUsXG4gICAgICByZW5kZXJlcjogdGhpcy5fcmVuZGVyZXIsXG4gICAgICBjb21wb25lbnRNYW5hZ2VyOiB0aGlzXG4gICAgfSwgb3B0cyk7XG5cbiAgICAvLyBJbnN0YW50aWF0ZSBvdXIgbmV3IGNvbXBvbmVudCBhbmQga2VlcCB0cmFjayBvZiBpdFxuICAgIGxldCBjb21wb25lbnQgPVxuICAgICAgbmV3IHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5W2NvbXBvbmVudFR5cGVdKG9wdHMpXG4gICAgICAgIC5pbml0KG9wdHMpO1xuXG4gICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50c1tjb21wb25lbnRUeXBlXSA9IGNvbXBvbmVudDtcblxuICAgIC8vIElmIHRoZXJlIGlzIGEgbG9jYWwgc3RvcmFnZSB0byBwb3dlciBzdGF0ZSwgYXBwbHkgdGhlIHN0YXRlXG4gICAgLy8gZnJvbSB0aGUgc3RvcmFnZSB0byB0aGUgY29tcG9uZW50LCBhbmQgdGhlbiBiaW5kIHRoZSBjb21wb25lbnRcbiAgICAvLyBzdGF0ZSB0byB0aGUgc3RvcmFnZSB2aWEgaXRzIHVwZGF0ZXNcbiAgICBpZiAodGhpcy5fY29yZSAmJiB0aGlzLl9jb3JlLnN0b3JhZ2UgIT09IG51bGwpIHtcbiAgICAgIGlmIChjb21wb25lbnQubW9kdWxlSWQgPT09IHVuZGVmaW5lZCB8fCBjb21wb25lbnQubW9kdWxlSWQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY29yZS5zdG9yYWdlXG4gICAgICAgIC5vbigndXBkYXRlJywgY29tcG9uZW50Lm1vZHVsZUlkLCAoZGF0YSkgPT4ge1xuICAgICAgICAgIGNvbXBvbmVudC5zZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgfVxuXG4gIGdldEFjdGl2ZUNvbXBvbmVudCAodHlwZSkge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVDb21wb25lbnRzW3R5cGVdO1xuICB9XG59XG4iLCIvKipcbiAqIFJlbmRlcmVyIGlzIGFuIGFic3RyYWN0IGNsYXNzIHRoYXQgYWxsIFJlbmRlcmVycyBzaG91bGQgZXh0ZW5kIGFuZCBpbXBsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIge1xuICAvKipcbiAgICogcmVuZGVyIGlzIGEgY29yZSBtZXRob2QgZm9yIGFsbCByZW5kZXJlcnMuXG4gICAqIEFsbCBpbXBsZW1lbnRhdGlvbnMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgY2xhc3NcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqL1xuICByZW5kZXIgKHRlbXBsYXRlLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgcmVnaXN0ZXJIZWxwZXIgKG5hbWUsIGNiKSB7XG5cbiAgfVxuXG4gIGNvbXBpbGUgKHRlbXBsYXRlKSB7XG5cbiAgfVxufVxuIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFuZGxlYmFyc1JlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvciAodGVtcGxhdGVzID0ge30sIG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgaGFuZGxlYmFycyBjb21waWxlclxuICAgICAqIEB0eXBlIHtIYW5kbGViYXJzfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5faGFuZGxlYmFycyA9IHRlbXBsYXRlcy5faGIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBwcmUtY29tcGlsZWQgaGFuZGxlYmFycyB0ZW1wbGF0ZXNcbiAgICAgKiBAdHlwZSB7SGFuZGxlYmFyc31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHRlbXBsYXRlcyB8fCB7fTtcbiAgfVxuXG4gIGluaXQgKHRlbXBsYXRlcykge1xuICAgIC8vIEFzc2lnbiB0aGUgaGFuZGxlYmFycyBjb21waWxlciBhbmQgdGVtcGxhdGVzIGJhc2VkIG9uXG4gICAgLy8gaW5mb3JtYXRpb24gcHJvdmlkZWQgZnJvbSBleHRlcm5hbCBkZXAgKGluIGRlZmF1bHQgY2FzZSwgaXQgY29tZXMgZnJvbSBleHRlcm5hbCBzZXJ2ZXIgcmVxdWVzdClcbiAgICB0aGlzLl9oYW5kbGViYXJzID0gdGVtcGxhdGVzLl9oYjtcbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXM7XG5cbiAgICAvLyBUT0RPKGJpbGx5KSBPbmNlIHdlIHJlLXdyaXRlIHRlbXBsYXRlcyB1c2luZyB0aGUgbmV3IGhlbHBlcnMgbGlicmFyeVxuICAgIC8vIHdlIHByb2JhYmx5IGRvbid0IG5lZWQgdGhlc2UgY3VzdG9tIGhlbHBlcnMgYW55bW9yZVxuICAgIHRoaXMuX3JlZ2lzdGVyQ3VzdG9tSGVscGVycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlZ2lzdGVySGVscGVyIGlzIGEgcHVibGljIGludGVyZmFjZSBmb3IgZXh0ZXJuYWwgZGVwZW5kZW5jaWVzIHRvXG4gICAqIHJlZ2lzdGVyIHRoZWlyIG93biBjdXN0b20gaGVscGVycyB0byBvdXIgaW50ZXJuYWwgSGFuZGxlYmFycyBDb21waWxlclxuICAgKi9cbiAgcmVnaXN0ZXJIZWxwZXIgKG5hbWUsIGNiKSB7XG4gICAgdGhpcy5faGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihuYW1lLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogY29tcGlsZSBhIGhhbmRsZWJhcnMgdGVtcGxhdGUgc28gdGhhdCBpdCBjYW4gYmUgcmVuZGVyZWQsXG4gICAqIHVzaW5nIHRoZSB7SGFuZGxlYmFyc30gY29tcGlsZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlIFRoZSB0ZW1wbGF0ZSBzdHJpbmcgdG8gY29tcGlsZVxuICAgKi9cbiAgY29tcGlsZSAodGVtcGxhdGUpIHtcbiAgICBpZiAodHlwZW9mIHRlbXBsYXRlICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5faGFuZGxlYmFycy5jb21waWxlKHRlbXBsYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZW5kZXIgd2lsbCByZW5kZXIgYSB0ZW1wbGF0ZSB3aXRoIGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBQcm92aWRlIGVpdGhlciBhIHRlbXBsYXRlTmFtZSBvciBhIHByZS1jb21waWxlZCB0ZW1wbGF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBwcm92aWRlIHRvIHRoZSB0ZW1wbGF0ZVxuICAgKi9cbiAgcmVuZGVyIChjb25maWcsIGRhdGEpIHtcbiAgICAvLyBJZiBhIGN1c3RvbSB0ZW1wbGF0ZSBpcyBwcm92aWRlZCwgdXNlIGl0LFxuICAgIC8vIG90aGVyd2lzZSBmYWxsIGJhY2sgdG8gdGhlIHRlbXBsYXRlIG5hbWVcbiAgICAvLyBUT0RPKGJpbGx5KSBUaGlzIGludGVyZmFjZSBzaG91bGQgcHJvYmFibHkgYmUgbGVzcyB1Z2x5XG4gICAgaWYgKGNvbmZpZy50ZW1wbGF0ZSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNvbmZpZy50ZW1wbGF0ZShkYXRhKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlc1tjb25maWcudGVtcGxhdGVOYW1lXShkYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgZmluZC9yZW5kZXIgdGVtcGxhdGU6ICcgKyBjb25maWcudGVtcGxhdGVOYW1lLCBlKTtcbiAgICB9XG4gIH1cblxuICBfcmVnaXN0ZXJDdXN0b21IZWxwZXJzICgpIHtcbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdpZmVxJywgZnVuY3Rpb24gKGFyZzEsIGFyZzIsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiAoYXJnMSA9PT0gYXJnMikgPyBvcHRpb25zLmZuKHRoaXMpIDogb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignaWZub3RlcScsIGZ1bmN0aW9uIChhcmcxLCBhcmcyLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gKGFyZzEgIT09IGFyZzIpID8gb3B0aW9ucy5mbih0aGlzKSA6IG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2Zvcm1hdFBob25lTnVtYmVyJywgZnVuY3Rpb24gKHBob25lTnVtYmVyU3RyaW5nKSB7XG4gICAgICB2YXIgY2xlYW5lZCA9ICgnJyArIHBob25lTnVtYmVyU3RyaW5nKS5yZXBsYWNlKC9cXEQvZywgJycpO1xuICAgICAgdmFyIG1hdGNoID0gY2xlYW5lZC5tYXRjaCgvXigxfCk/KFxcZHszfSkoXFxkezN9KShcXGR7NH0pJC8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHZhciBpbnRsQ29kZSA9IChtYXRjaFsxXSA/ICcrMSAnIDogJycpO1xuICAgICAgICByZXR1cm4gW2ludGxDb2RlLCAnKCcsIG1hdGNoWzJdLCAnKSAnLCBtYXRjaFszXSwgJy0nLCBtYXRjaFs0XV0uam9pbignJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2Fzc2lnbicsIGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBvcHRpb25zID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAoIW9wdGlvbnMuZGF0YS5yb290KSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YS5yb290ID0ge307XG4gICAgICB9XG5cbiAgICAgIGxldCB2ID0gJyc7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIHYgPSB2ICsgYXJnc1tpXTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5kYXRhLnJvb3RbbmFtZV0gPSB2O1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignanNvbicsIGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIG5hbWUgPT09IHVuZGVmaW5lZFxuICAgICAgICA/ICcnXG4gICAgICAgIDogSlNPTi5zdHJpbmdpZnkobmFtZSkucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgSGFuZGxlYmFyc1JlbmRlcmVyIGZyb20gJy4vaGFuZGxlYmFyc3JlbmRlcmVyJztcblxuLy8gSW4gdGhlIGZ1dHVyZSwgdGhpcyB3aWxsIGNvbnRhaW4gYWxsIGRpZmZlcmVudCB0eXBlcyBvZiByZW5kZXJlcnNcbi8vIEUuZy4gTXVzdGFjaGUsIFNPWSwgSGFuZGxlQmFycywgUmVhY3QsIGV0Yy5cbmV4cG9ydCBjb25zdCBSZW5kZXJlcnMgPSB7XG4gIFNPWTogUmVuZGVyZXIsXG4gIEhhbmRsZWJhcnM6IEhhbmRsZWJhcnNSZW5kZXJlclxufTtcbiIsImxldCBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcbmxldCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG5cbi8qIGdsb2JhbCBIVE1MRWxlbWVudCwgSFRNTERvY3VtZW50LCBXaW5kb3csIEV2ZW50ICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTSB7XG4gIHN0YXRpYyBzZXR1cCAoZCwgcCkge1xuICAgIGRvY3VtZW50ID0gZDtcbiAgICBwYXJzZXIgPSBwO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZSBhIEhUTUxFbGVtZW50IGZyb20gYW5kIEhUTUwgc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBodG1sIFRoZSBIVE1MIHRvIHBhcnNlIHRvIGEgRE9NIG5vZGUuXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZSAoaHRtbCkge1xuICAgIHJldHVybiBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGh0bWwsICd0ZXh0L2h0bWwnKS5ib2R5O1xuICB9XG5cbiAgLyoqXG4gICAqIHF1ZXJ5IHRoZSBET00gZm9yIGEgZ2l2ZW4gY3NzIHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudCBPcHRpb25hbCBjb250ZXh0IHRvIHVzZSBmb3IgYSBzZWFyY2guIERlZmF1bHRzIHRvIGRvY3VtZW50IGlmIG5vdCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIHRoZSBDU1Mgc2VsZWN0b3IgdG8gcXVlcnkgZm9yXG4gICAqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gdGhlIEZJUlNUIG5vZGUgaXQgZmluZHMsIGlmIGFueVxuICAgKi9cbiAgc3RhdGljIHF1ZXJ5IChwYXJlbnQsIHNlbGVjdG9yKSB7XG4gICAgLy8gRmFjYWRlLCBzaGlmdGluZyB0aGUgc2VsZWN0b3IgdG8gdGhlIHBhcmVudCBhcmd1bWVudCBpZiBvbmx5IG9uZVxuICAgIC8vIGFyZ3VtZW50IGlzIHByb3ZpZGVkXG4gICAgaWYgKHNlbGVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNlbGVjdG9yID0gcGFyZW50O1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBXaW5kb3cgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQpIHtcbiAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIHF1ZXJ5IHRoZSBET00gZm9yIGEgZ2l2ZW4gY3NzIHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudCBPcHRpb25hbCBjb250ZXh0IHRvIHVzZSBmb3IgYSBzZWFyY2guIERlZmF1bHRzIHRvIGRvY3VtZW50IGlmIG5vdCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yIHRoZSBDU1Mgc2VsZWN0b3IgdG8gcXVlcnkgZm9yXG4gICAqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gdGhlIEZJUlNUIG5vZGUgaXQgZmluZHMsIGlmIGFueVxuICAgKi9cbiAgc3RhdGljIHF1ZXJ5QWxsIChwYXJlbnQsIHNlbGVjdG9yKSB7XG4gICAgLy8gRmFjYWRlLCBzaGlmdGluZyB0aGUgc2VsZWN0b3IgdG8gdGhlIHBhcmVudCBhcmd1bWVudCBpZiBvbmx5IG9uZVxuICAgIC8vIGFyZ3VtZW50IGlzIHByb3ZpZGVkXG4gICAgaWYgKHNlbGVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNlbGVjdG9yID0gcGFyZW50O1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBXaW5kb3cpIHtcbiAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICB9XG5cbiAgc3RhdGljIG9uUmVhZHkgKGNiKSB7XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRlZCcgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJykge1xuICAgICAgY2IoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBET00ub24oZG9jdW1lbnQsICdET01Db250ZW50TG9hZGVkJywgY2IpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZUVsZSB3aWxsIGNyZWF0ZSBhIHtIVE1MRWxlbWVudH0gYW5kIGFwcGx5IHRoZSBwcm9wZXJ0aWVzIGF0dHJpYnV0ZXMgdGhyb3VnaCBhbiBvYmplY3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbCBUaGUgZWxlbWVudCBgdGFnYCBuYW1lIHRvIGNvbnN0cnVjdFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c19kYXRhIE9wdGlvbmFsIGF0dHJpYnV0ZXMgdG8gYXBwbHkgdG8gdGhlIG5ldyBIVE1MRWxlbWVudFxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUVsIChlbCwgb3B0c19kYXRhID0ge30pIHtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwpO1xuICAgIGxldCBwcm9wcyA9IE9iamVjdC5rZXlzKG9wdHNfZGF0YSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocHJvcHNbaV0gPT09ICdjbGFzcycpIHtcbiAgICAgICAgRE9NLmFkZENsYXNzKG5vZGUsIG9wdHNfZGF0YVtwcm9wc1tpXV0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbm9kZVtwcm9wc1tpXV0gPSBvcHRzX2RhdGFbcHJvcHNbaV1dO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIGFwcGVuZCAocGFyZW50LCBub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbm9kZSA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcGFyZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgcGFyZW50ID0gRE9NLnF1ZXJ5KHBhcmVudCk7XG4gICAgfVxuXG4gICAgLy8gU3VwcG9ydCBIVE1MIGluamVjdGlvbiBhcyB3ZWxsIGFzIEhUTUxFbGVtZW50IGFwcGVuZHNcbiAgICBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlckJlZ2luJywgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYWRkQ2xhc3MgKG5vZGUsIGNsYXNzTmFtZSkge1xuICAgIGxldCBjbGFzc2VzID0gY2xhc3NOYW1lLnNwbGl0KCcsJyk7XG4gICAgbGV0IGxlbiA9IGNsYXNzZXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzZXNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBlbXB0eSAocGFyZW50KSB7XG4gICAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgc3RhdGljIGNzcyAoc2VsZWN0b3IsIHN0eWxlcykge1xuICAgIGxldCBub2RlID0gRE9NLnF1ZXJ5KHNlbGVjdG9yKTtcblxuICAgIGZvciAobGV0IHByb3AgaW4gc3R5bGVzKSB7XG4gICAgICBub2RlLnN0eWxlW3Byb3BdID0gc3R5bGVzW3Byb3BdO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhdHRyIChzZWxlY3RvciwgYXR0ciwgdmFsKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsKTtcbiAgfVxuXG4gIHN0YXRpYyB0cmlnZ2VyIChzZWxlY3RvciwgZXZlbnQsIHNldHRpbmdzKSB7XG4gICAgbGV0IGUgPSBuZXcgRXZlbnQoZXZlbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgJ2J1YmJsZXMnOiB0cnVlLFxuICAgICAgJ2NhbmNlbGFibGUnOiB0cnVlXG4gICAgfSwgc2V0dGluZ3MgfHwge30pKTtcblxuICAgIERPTS5xdWVyeShzZWxlY3RvcikuZGlzcGF0Y2hFdmVudChlKTtcbiAgfVxuXG4gIHN0YXRpYyBvbiAoc2VsZWN0b3IsIGV2dCwgaGFuZGxlcikge1xuICAgIERPTS5xdWVyeShzZWxlY3RvcikuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIG9mZiAoc2VsZWN0b3IsIGV2dCwgaGFuZGxlcikge1xuICAgIERPTS5xdWVyeShzZWxlY3RvcikucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGRlbGVnYXRlIChjdHh0LCBzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgbGV0IGVsID0gRE9NLnF1ZXJ5KGN0eHQpO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICB3aGlsZSAoIXRhcmdldC5pc0VxdWFsTm9kZShlbCkpIHtcbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgIGhhbmRsZXIoZXZlbnQsIHRhcmdldCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vLi4vY29yZS9ldmVudGVtaXR0ZXIvZXZlbnRlbWl0dGVyJztcblxuLyoqXG4gKiBTdGF0ZSBjb250YWlucyB0aGUgZGF0YSBmb3IgdGhlIGNvbXBvbmVudFxuICogYW5kIGV4cG9zZXMgYW4ge0V2ZW50RW1pdHRlcn0gaW50ZXJmYWNlIHNvIHRoYXQgZXh0ZXJuYWxcbiAqIGRlcGVuZGVuY2llcyBjYW4gbGlzdGVuL2hvb2sgc3Vic2NyaWJlIHRvIG1lc3NhZ2VzL3VwZGF0ZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGRhdGEpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9zdGF0ZSA9IGRhdGEgfHwge307XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSBjb21wb25lbnQuXG4gICAqIE5PVEUoYmlsbHkpOiBEb2VzIG5vdCBmaXJlIGFuIHVwZGF0ZSBtZXNzYWdlXG4gICAqL1xuICBpbml0IChwcm9wLCBvcHRWYWwpIHtcbiAgICB0aGlzLl9zZXQocHJvcCwgb3B0VmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXR0ZXIgZm9yIHRoZSBzdGF0ZVxuICAgKiBAcGFyYW0gcHJvcCB7c3RyaW5nfE9iamVjdH0gVGhlIHByb3BlcnR5IHRvIHNldFxuICAgKiBAcGFyYW0gb3B0VmFsIE9wdGlvbmFsLCBpZiBwcm9wIGlzIGEge3N0cmluZ30sIGl0IHdpbGwgYXNzaWduIHRoZSB2YWx1ZSB0byB0aGF0IHByb3BlcnR5XG4gICAqL1xuICBzZXQgKHByb3AsIG9wdFZhbCkge1xuICAgIHRoaXMuX3NldChwcm9wLCBvcHRWYWwpO1xuICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gIH1cblxuICAvKipcbiAgICogc2V0dGVyIGZvciB0aGUgc3RhdGUgZW5hYmxlcyB5b3UgdG8gdXBkYXRlIGEgc2luZ2xlIHByb3BlcnR5LCBvciBjb21wbGV0ZSBzdGF0ZVxuICAgKiBkZXBlbmRpbmcgb24gdGhlIGFyZ3VtZW50cyBwcm92aWRlZC5cbiAgICogQHBhcmFtIHByb3Age3N0cmluZ3xPYmplY3R9IFRoZSBwcm9wZXJ0eSB0byBzZXRcbiAgICogQHBhcmFtIG9wdFZhbCBJZiBwcm9wIGlzIGEge3N0cmluZ30sIHByb3ZpZGUgaXRzIHZhbHVlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2V0IChwcm9wLCBvcHRWYWwpIHtcbiAgICBpZiAob3B0VmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3N0YXRlID0gcHJvcDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3RhdGVbcHJvcF0gPSBvcHRWYWw7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlIChkYXRhKSB7XG4gICAgdGhpcy5fc3RhdGUgPSBkYXRhO1xuICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgYSBwcm9wZXJ0aWVzIHZhbHVlIGZyb20gdGhlIHN0YXRlXG4gICAqIElmIG5vIHByb3BlcnR5IHByb3ZpZGVkLCByZXR1cm4gdGhlIGZ1bGwgc3RhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdFByb3Agb3B0aW9uYWwgcHJvcGVydHkgdG8gcmV0cmlldmVcbiAgICovXG4gIGdldCAob3B0UHJvcCkge1xuICAgIGlmIChvcHRQcm9wID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlW29wdFByb3BdO1xuICB9XG5cbiAgaGFzIChwcm9wKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlW3Byb3BdICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBhc0pTT04gKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUmVuZGVyZXJzIH0gZnJvbSAnLi4vcmVuZGVyaW5nL2NvbnN0JztcblxuaW1wb3J0IERPTSBmcm9tICcuLi9kb20vZG9tJztcbmltcG9ydCBTdGF0ZSBmcm9tICcuL3N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHR5cGUsIG9wdHMgPSB7fSkge1xuICAgIC8vIFNpbXBsZSBmYWNhZGUgcGF0dGVybiB0byBlbmFibGUgdGhlIHVzZXIgdG8gcGFzcyBhIHNpbmdsZSBvYmplY3RcbiAgICAvLyBjb250YWluaW5nIGFsbCB0aGUgbmVjZXNzYXJ5IG9wdGlvbnMgYW5kIHNldHRpbmdzXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgb3B0cyA9IHR5cGU7XG4gICAgICB0eXBlID0gb3B0cy50eXBlO1xuICAgIH1cblxuICAgIHRoaXMubW9kdWxlSWQgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQ2FjaGUgdGhlIG9wdGlvbnMgc28gdGhhdCB3ZSBjYW4gcHJvcG9nYXRlIHByb3Blcmx5IHRvIGNoaWxkIGNvbXBvbmVudHNcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX29wdHMgPSBvcHRzO1xuXG4gICAgLyoqXG4gICAgICogQW4gaWRlbnRpZmllciB1c2VkIHRvIGNsYXNzaWZ5IHRoZSB0eXBlIG9mIGNvbXBvbmVudC5cbiAgICAgKiBUaGUgY29tcG9uZW50IG1hbmFnZXIgdXNlcyB0aGlzIGluZm9ybWF0aW9uIGluIG9yZGVyIHRvIHBlcnNpc3QgYW5kIG9yZ2FuaXplIGNvbXBvbmVudHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfENvbXBvbmVudFR5cGV9XG4gICAgICovXG4gICAgdGhpcy5fdHlwZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgY29tcG9uZW50LCBpZiBleGlzdHNcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50fVxuICAgICAqL1xuICAgIHRoaXMuX3BhcmVudCA9IG9wdHMucGFyZW50IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGNvbnRhaW5lciBmb3IgYWxsIHRoZSBjaGlsZCBjb21wb25lbnRzXG4gICAgICogQHR5cGUge0FycmF5LkNvbXBvbmVudH1cbiAgICAgKi9cbiAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN0YXRlIChkYXRhKSBvZiB0aGUgY29tcG9uZW50IHRvIGJlIHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9zdGF0ZSA9IG5ldyBTdGF0ZShvcHRzLnN0YXRlKTtcblxuICAgIC8qKlxuICAgICAqIFRPRE8oYmlsbHkpIFRoaXMgc2hvdWxkIGJlICdzZXJ2aWNlcydcbiAgICAgKi9cbiAgICB0aGlzLmNvcmUgPSBvcHRzLmNvcmUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlciwgd2hpY2ggY29udGFpbnMgYWxsIG9mIHRoZSBjb21wb25lbnQgY2xhc3Nlc1xuICAgICAqIGVsaWdpYmxlIHRvIGJlIGNyZWF0ZWRcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50TWFuYWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIgPSBvcHRzLmNvbXBvbmVudE1hbmFnZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBET00gbm9kZSB0aGF0IHRoZSBjb21wb25lbnQgd2lsbCBiZSBhcHBlbmRlZCB0byB3aGVuIG1vdW50ZWQvcmVuZGVyZWQuXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIGlmICh0eXBlb2Ygb3B0cy5jb250YWluZXIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBgY29udGFpbmVyYCBvcHRpb24gZm9yIGNvbXBvbmVudCBjb25maWd1cmF0aW9uLiBNdXN0IGJlIG9mIHR5cGUgYHN0cmluZ2AuJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jb250YWluZXIgPSBET00ucXVlcnkob3B0cy5jb250YWluZXIpIHx8IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IERPTS5xdWVyeSh0aGlzLl9wYXJlbnQuX2NvbnRhaW5lciwgb3B0cy5jb250YWluZXIpO1xuXG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgcGFyZW50LCBhbmQgdGhlIGNvbnRhaW5lciBpcyBtaXNzaW5nIGZyb20gdGhlIERPTSxcbiAgICAgIC8vIHdlIGNvbnN0cnVjdCB0aGUgY29udGFpbmVyIGFuZCBhcHBlbmQgaXQgdG8gdGhlIHBhcmVudFxuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBET00uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogb3B0cy5jb250YWluZXIuc3Vic3RyaW5nKDEsIG9wdHMuY29udGFpbmVyLmxlbmd0aClcbiAgICAgICAgfSk7XG4gICAgICAgIERPTS5hcHBlbmQodGhpcy5fcGFyZW50Ll9jb250YWluZXIsIHRoaXMuX2NvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBjb250YWluZXIgRE9NIG5vZGU6ICcgKyBvcHRzLmNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gY2xhc3MgdG8gYmUgYXBwbGllZCB0byB7dGhpcy5fY29udGFpbmVyfSBub2RlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9jbGFzc05hbWUgPSBvcHRzLmNsYXNzIHx8ICdjb21wb25lbnQnO1xuXG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gcmVuZGVyIGZ1bmN0aW9uIHRvIGJlIHVzZWQgaW5zdGVhZCBvZiB1c2luZyB0aGUgZGVmYXVsdCByZW5kZXJlclxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXIgPSBvcHRzLnJlbmRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGRlZmF1bHQge1JlbmRlcmVyfSB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgcmVuZGVyaW5nIHRoZSB0ZW1wbGF0ZVxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXJlciA9IG9wdHMucmVuZGVyZXIgfHwgUmVuZGVyZXJzLkhhbmRsZWJhcnM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgc3RyaW5nIHRvIHVzZSBmb3IgcmVuZGVyaW5nIHRoZSBjb21wb25lbnRcbiAgICAgKiBJZiB0aGlzIGlzIGxlZnQgZW1wdHksIHdlIGxvb2t1cCB0aGUgdGVtcGxhdGUgdGhlIGJhc2UgdGVtcGxhdGVzIHVzaW5nIHRoZSB0ZW1wbGF0ZU5hbWVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlID0gb3B0cy50ZW1wbGF0ZSA/IHRoaXMuX3JlbmRlcmVyLmNvbXBpbGUob3B0cy50ZW1wbGF0ZSkgOiBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlTmFtZSB0byB1c2UgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50LlxuICAgICAqIFRoaXMgaXMgb25seSB1c2VkIGlmIF90ZW1wbGF0ZSBpcyBlbXB0eS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IG9wdHMudGVtcGxhdGVOYW1lIHx8ICdkZWZhdWx0JztcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHN0YXRlIGluZGljYXRpbmcgd2hldGhlciBvciBub3QgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBtb3VudGVkIHRvIHRoZSBET01cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjaywgdGhhdHMgdXNlZCB0byB0cmFuc2Zvcm0gdGhlIGludGVybmFsIGRhdGFcbiAgICAgKiBtb2RlbHMgb2YgdGhlIGNvbXBvbmVudHMsIGJlZm9yZSBpdCBnZXRzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudCBzdGF0ZS5cbiAgICAgKiBCeSBkZWZhdWx0LCBubyB0cmFuc2Zvcm1hdGlvbiBoYXBwZW5zLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLnRyYW5zZm9ybURhdGEgPSBvcHRzLnRyYW5zZm9ybURhdGEgfHwgdGhpcy50cmFuc2Zvcm1EYXRhIHx8IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIGEgY29tcG9uZW50IGlzIGNyZWF0ZWQuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMub25DcmVhdGUgPSBvcHRzLm9uQ3JlYXRlIHx8IHRoaXMub25DcmVhdGUgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnQgaXMgTW91bnRlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vbk1vdW50ID0gb3B0cy5vbk1vdW50IHx8IHRoaXMub25Nb3VudCB8fCBmdW5jdGlvbiAoKSB7IH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnRzIHN0YXRlIGlzIHVwZGF0ZWQuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMub25VcGRhdGUgPSBvcHRzLm9uVXBkYXRlIHx8IHRoaXMub25VcGRhdGUgfHwgZnVuY3Rpb24gKCkgeyB9O1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0NvbXBvbmVudCc7XG4gIH1cblxuICBpbml0IChvcHRzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShvcHRzLmRhdGEgfHwgb3B0cy5zdGF0ZSB8fCB7fSk7XG4gICAgdGhpcy5vbkNyZWF0ZSgpO1xuICAgIHRoaXMuX3N0YXRlLm9uKCd1cGRhdGUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uVXBkYXRlKCk7XG4gICAgICB0aGlzLm1vdW50KCk7XG4gICAgfSk7XG5cbiAgICBET00uYWRkQ2xhc3ModGhpcy5fY29udGFpbmVyLCB0aGlzLl9jbGFzc05hbWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEpIHtcbiAgICB0aGlzLl9zdGF0ZS5zZXQoZGF0YSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRTdGF0ZSAocHJvcCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5nZXQocHJvcCk7XG4gIH1cblxuICBoYXNTdGF0ZSAocHJvcCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5oYXMocHJvcCk7XG4gIH1cblxuICB0cmFuc2Zvcm1EYXRhIChkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBhZGRDaGlsZCAoZGF0YSwgdHlwZSwgb3B0cykge1xuICAgIGxldCBjaGlsZENvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoXG4gICAgICB0eXBlLFxuICAgICAgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSwgb3B0cyB8fCB7fSwge1xuICAgICAgICBfcGFyZW50T3B0czogdGhpcy5fb3B0c1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5fY2hpbGRyZW4ucHVzaChjaGlsZENvbXBvbmVudCk7XG4gICAgcmV0dXJuIGNoaWxkQ29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgcmVuZGVyIG1ldGhvZCB0byBiZSB1c2VkIGZvciByZW5kZXJpbmcgdGhlIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZW5kZXJcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgc2V0UmVuZGVyIChyZW5kZXIpIHtcbiAgICB0aGlzLl9yZW5kZXIgPSByZW5kZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSByZW5kZXJlciBmb3IgdGhlIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge1JlbmRlcmVyVHlwZX0gcmVuZGVyZXJcbiAgICovXG4gIHNldFJlbmRlcmVyIChyZW5kZXJlcikge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gUmVuZGVyZXJzW3JlbmRlcmVyXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0ZW1wbGF0ZSBmb3IgdGhlIGNvbXBvbmVudCB0byB1c2Ugd2hlbiByZW5kZXJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gICAqL1xuICBzZXRUZW1wbGF0ZSAodGVtcGxhdGUpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZSA9IHRoaXMuX3JlbmRlcmVyLmNvbXBpbGUodGVtcGxhdGUpO1xuICB9XG5cbiAgdW5Nb3VudCAoKSB7XG4gICAgRE9NLmVtcHR5KHRoaXMuX2NvbnRhaW5lcik7XG4gIH1cblxuICBtb3VudCAoKSB7XG4gICAgaWYgKCF0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMudW5Nb3VudCgpO1xuICAgIGlmICh0aGlzLmJlZm9yZU1vdW50KCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBET00uYXBwZW5kKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5yZW5kZXIodGhpcy5fc3RhdGUuYXNKU09OKCkpKTtcblxuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy5fb25Nb3VudCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX29uTW91bnQgKCkge1xuICAgIHRoaXMub25Nb3VudCh0aGlzKTtcbiAgICBpZiAodGhpcy5fY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBjaGlsZC5fb25Nb3VudCgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbmRlciB0aGUgdGVtcGxhdGUgdXNpbmcgdGhlIHtSZW5kZXJlcn0gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBhbmQgdGVtcGxhdGUgb2YgdGhlIGNvbXBvbmVudFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgcmVuZGVyIChkYXRhKSB7XG4gICAgdGhpcy5iZWZvcmVSZW5kZXIoKTtcbiAgICBkYXRhID0gdGhpcy50cmFuc2Zvcm1EYXRhKGRhdGEpIHx8IHRoaXMudHJhbnNmb3JtRGF0YSh0aGlzLl9zdGF0ZS5nZXQoKSk7XG5cbiAgICBsZXQgaHRtbCA9ICcnO1xuICAgIC8vIFVzZSBlaXRoZXIgdGhlIGN1c3RvbSByZW5kZXIgZnVuY3Rpb24gb3IgdGhlIGludGVybmFsIHJlbmRlcmVyXG4gICAgLy8gZGVwZW5kYW50IG9uIHRoZSBjb21wb25lbnQgY29uZmlndXJhdGlvblxuICAgIGlmICh0eXBlb2YgdGhpcy5fcmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBodG1sID0gdGhpcy5fcmVuZGVyKGRhdGEpO1xuICAgICAgaWYgKHR5cGVvZiBodG1sICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlbmRlciBtZXRob2QgbXVzdCByZXR1cm4gSFRNTCBhcyB0eXBlIHtzdHJpbmd9Jyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlbmRlciB0aGUgZXhpc3RpbmcgdGVtcGxhdGVzIGFzIGEgc3RyaW5nXG4gICAgICBodG1sID0gdGhpcy5fcmVuZGVyZXIucmVuZGVyKHtcbiAgICAgICAgdGVtcGxhdGU6IHRoaXMuX3RlbXBsYXRlLFxuICAgICAgICB0ZW1wbGF0ZU5hbWU6IHRoaXMuX3RlbXBsYXRlTmFtZVxuICAgICAgfSwgZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gV2UgY3JlYXRlIGFuIEhUTUwgRG9jdW1lbnQgZnJhZ21lbnQgd2l0aCB0aGUgcmVuZGVyZWQgc3RyaW5nXG4gICAgLy8gU28gdGhhdCB3ZSBjYW4gcXVlcnkgaXQgZm9yIHByb2Nlc3Npbmcgb2Ygc3ViIGNvbXBvbmVudHNcbiAgICBsZXQgZWwgPSBET00uY3JlYXRlKGh0bWwpO1xuXG4gICAgLy8gUHJvY2VzcyB0aGUgRE9NIHRvIGRldGVybWluZSBpZiB3ZSBzaG91bGQgY3JlYXRlXG4gICAgLy8gaW4tbWVtb3J5IHN1Yi1jb21wb25lbnRzIGZvciByZW5kZXJpbmdcbiAgICBsZXQgZG9tQ29tcG9uZW50cyA9IERPTS5xdWVyeUFsbChlbCwgJ1tkYXRhLWNvbXBvbmVudF0nKTtcbiAgICBkb21Db21wb25lbnRzLmZvckVhY2goKGRvbUNvbXBvbmVudCkgPT4ge1xuICAgICAgbGV0IGRhdGFzZXQgPSBkb21Db21wb25lbnQuZGF0YXNldDtcbiAgICAgIGxldCB0eXBlID0gZGF0YXNldC5jb21wb25lbnQ7XG4gICAgICBsZXQgcHJvcCA9IGRhdGFzZXQucHJvcDtcbiAgICAgIGxldCBvcHRzID0gZGF0YXNldC5vcHRzID8gSlNPTi5wYXJzZShkYXRhc2V0Lm9wdHMpIDoge307XG5cbiAgICAgIC8vIFJlbmRlcmluZyBhIHN1YiBjb21wb25lbnQgc2hvdWxkIGJlIHdpdGhpbiB0aGUgY29udGV4dCxcbiAgICAgIC8vIG9mIHRoZSBub2RlIHRoYXQgd2UgcHJvY2Vzc2VkIGl0IGZyb21cbiAgICAgIG9wdHMgPSBPYmplY3QuYXNzaWduKG9wdHMsIHtcbiAgICAgICAgY29udGFpbmVyOiBkb21Db21wb25lbnRcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgY2hpbGREYXRhID0gZGF0YVtwcm9wXTtcblxuICAgICAgLy8gVE9ETyhiaWxseSkgUmlnaHQgbm93LCBpZiB3ZSBwcm92aWRlIGFuIGFycmF5IGFzIHRoZSBkYXRhIHByb3AsXG4gICAgICAvLyB0aGUgYmVoYXZpb3IgaXMgdG8gY3JlYXRlIG1hbnkgY29tcG9uZW50cyBmb3IgZWFjaCBpdGVtIGluIHRoZSBhcnJheS5cbiAgICAgIC8vIFRIQVQgaW50ZXJmYWNlIFNIT1VMRCBjaGFuZ2UgdG8gdXNlIGEgZGlmZmVyZW50IHByb3BlcnR5IHRoYXQgZGVmaW5lc1xuICAgICAgLy8gd2hldGhlciB0byBhcnJheSBkYXRhIHNob3VsZCBiZSB1c2VkIGZvciBhIHNpbmdsZSBjb21wb25lbnQgb3JcbiAgICAgIC8vIHRvIGNyZWF0ZSBtYW55IGNvbXBvbmVudHMgZm9yIGVhY2ggaXRlbS5cbiAgICAgIC8vIE92ZXJsb2FkaW5nIGFuZCBoYXZpbmcgdGhpcyBzaWRlIGVmZmVjdCBpcyB1bmludHVpdGl2ZSBhbmQgV1JPTkdcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZERhdGEpKSB7XG4gICAgICAgIGxldCBjaGlsZENvbXBvbmVudCA9IHRoaXMuYWRkQ2hpbGQoY2hpbGREYXRhLCB0eXBlLCBvcHRzKTtcbiAgICAgICAgRE9NLmFwcGVuZChkb21Db21wb25lbnQsIGNoaWxkQ29tcG9uZW50LnJlbmRlcihjaGlsZERhdGEpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBPdGhlcndpc2UsIHJlbmRlciB0aGUgY29tcG9uZW50IGFzIGV4cGVjdGVkXG4gICAgICBsZXQgY2hpbGRIVE1MID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY2hpbGRDb21wb25lbnQgPSB0aGlzLmFkZENoaWxkKGNoaWxkRGF0YVtpXSwgdHlwZSwgb3B0cyk7XG4gICAgICAgIGNoaWxkSFRNTC5wdXNoKGNoaWxkQ29tcG9uZW50LnJlbmRlcihjaGlsZERhdGFbaV0pKTtcbiAgICAgIH1cblxuICAgICAgRE9NLmFwcGVuZChkb21Db21wb25lbnQsIGNoaWxkSFRNTC5qb2luKCcnKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFmdGVyUmVuZGVyKCk7XG4gICAgcmV0dXJuIGVsLmlubmVySFRNTDtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbkNyZWF0ZSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGNvbnN0cnVjdGVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvbkNyZWF0ZSAoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uVXBkYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGNoYW5nZXNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uVXBkYXRlIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlUmVuZGVyIGV2ZW50IGlzIHRyaWdnZXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYmVmb3JlUmVuZGVyIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYWZ0ZXJSZW5kZXIgZXZlbnQgaXMgdHJpZ2dlcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIGFmdGVyUmVuZGVyIChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25Nb3VudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFwcGVuZGVkIHRvIHRoZSBET01cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvblVuTW91bnQgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyByZW1vdmVkIGZyb20gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25Vbk1vdW50IChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlTW91bnQgaXMgdHJpZ2dlcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQgdG8gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYmVmb3JlTW91bnQgKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvbkRlc3Ryb3kgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uRGVzdHJveSAoY2IpIHtcblxuICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGF0YSBzdG9yYWdlIGtleVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5tb2R1bGVJZCA9ICduYXZpZ2F0aW9uJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBoYW5kbGViYXJzIHRlbXBsYXRlIHRvIHVzZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ25hdmlnYXRpb24vbmF2aWdhdGlvbic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3JkZXIgb2YgdGhlIHRhYnMsIHBhcnNlZCBmcm9tIGNvbmZpZ3VyYXRpb24uXG4gICAgICogVGhpcyBnZXRzIHVwZGF0ZWQgYmFzZWQgb24gdGhlIHNlcnZlciByZXN1bHRzXG4gICAgICogQHR5cGUge0FycmF5LjxTdHJpbmc+fSBUaGUgbGlzdCBvZiBWUyBjb25maWdJZHNcbiAgICAgKi9cbiAgICB0aGlzLl90YWJPcmRlciA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRhdGEgY29udGFpbmVyIGZvciBlYWNoIHRhYiwga2V5ZWQgYnkgVlMgY29uZmlnSWRcbiAgICAgKiBAdHlwZSB7T2JqZWN0LjxTdHJpbmcsIE9iamVjdD59XG4gICAgICovXG4gICAgdGhpcy5fdGFicyA9IHt9O1xuXG4gICAgLy8gUGFyc2UgdGhlIG9wdGlvbnMgYW5kIGJ1aWxkIG91dCBvdXIgdGFicyBhbmRcbiAgICAvLyB0YWJPcmRlciBmcm9tIHRoZSBzZXR0aW5ncyBwcm92aWRlZC5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdHMudGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHRhYiA9IG9wdHMudGFic1tpXTtcbiAgICAgIC8vIEZvciB0YWJzIHdpdGhvdXQgY29uZmlnIGlkcywgbWFwIHRoZWlyIFVSTCB0byB0aGUgY29uZmlnSURcbiAgICAgIC8vIHRvIGF2b2lkIGR1cGxpY2F0aW9uIG9mIHJlbmRlcnNcbiAgICAgIGlmICh0YWIuY29uZmlnSWQgPT09IHVuZGVmaW5lZCAmJiB0aGlzLl90YWJzW3RhYi5jb25maWdJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YWIuY29uZmlnSWQgPSB0YWIudXJsO1xuICAgICAgfVxuXG4gICAgICAvLyBpc0ZpcnN0IHNob3VsZCBhbHdheXMgYmUgdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhlIGxpc3RcbiAgICAgIGlmICh0YWIuaXNGaXJzdCkge1xuICAgICAgICB0aGlzLl90YWJPcmRlci51bnNoaWZ0KHRhYi5jb25maWdJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl90YWJPcmRlci5wdXNoKHRhYi5jb25maWdJZCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3RhYnNbdGFiLmNvbmZpZ0lkXSA9IHtcbiAgICAgICAgbGFiZWw6IHRhYi5sYWJlbCxcbiAgICAgICAgY29uZmlnSWQ6IHRhYi5jb25maWdJZCxcbiAgICAgICAgdXJsOiB0YWIudXJsLFxuICAgICAgICBiYXNlVXJsOiB0YWIudXJsLFxuICAgICAgICBpc0ZpcnN0OiB0YWIuaXNGaXJzdCA9PT0gdHJ1ZSxcbiAgICAgICAgaXNBY3RpdmU6IHRhYi5pc0FjdGl2ZSA9PT0gdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTmF2aWdhdGlvbic7XG4gIH1cblxuICBnZXRVcmxQYXJhbXMgKCkge1xuICAgIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgfVxuXG4gIGdlbmVyYXRlVGFiVXJsICh0YWIpIHtcbiAgICBsZXQgcGFyYW1zID0gdGhpcy5nZXRVcmxQYXJhbXMoKTtcbiAgICBpZiAocGFyYW1zLnRvU3RyaW5nKCkubGVuZ3RoID4gMCkge1xuICAgICAgdGFiLnVybCA9IHRhYi5iYXNlVXJsICsgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHJldHVybiB0YWI7XG4gIH1cblxuICAvKipcbiAgICogU2luY2UgdGhlIHNlcnZlciBkYXRhIG9ubHkgcHJvdmlkZXMgYSBsaXN0IG9mXG4gICAqIFZTIGNvbmZpZ0lkcywgd2UgbmVlZCB0byBjb21wdXRlIGFuZCB0cmFuc2Zvcm1cbiAgICogdGhlIGRhdGEgaW50byB0aGUgcHJvcGVyIGZvcm1hdCBmb3IgcmVuZGVyaW5nLlxuICAgKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgaWYgKGRhdGEudGFiT3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fdGFiT3JkZXIgPSBkYXRhLnRhYk9yZGVyO1xuICAgIH1cblxuICAgIC8vIFNpbmNlIG91ciB0YWIgY29uZmlndXJhdGlvbiBpcyBsb2NhbCwgd2UgZ2VuZXJhdGUgaXRcbiAgICAvLyBiYXNlZCBvbiB0aGUgZmVlZGJhY2sgZnJvbSB0aGUgc2VydmVyXG4gICAgbGV0IHRhYnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3RhYk9yZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdGFiID0gdGhpcy5fdGFic1t0aGlzLl90YWJPcmRlcltpXV07XG4gICAgICBpZiAodGFiICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGFicy5wdXNoKHRoaXMuZ2VuZXJhdGVUYWJVcmwodGFiKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQmVjYXVzZSB0aGUgdGFiIG9yZGVyIGZyb20gc2VydmVyIG9ubHkgaW5jbHVkZXNcbiAgICAvLyBzZWN0aW9ucyB0aGF0IGhhdmUgcmVzdWx0cywgd2UgbmVlZCB0byBtYW51YWxseSBhZGRcbiAgICAvLyB0aGUgb3RoZXIgdGFicyB0byB0aGUgZW5kIG9mIHRoZSBhcnJheVxuICAgIGZvciAobGV0IGNvbmZpZ0lkIGluIHRoaXMuX3RhYnMpIHtcbiAgICAgIGlmICh0aGlzLl90YWJPcmRlci5pbmRleE9mKGNvbmZpZ0lkKSA8PSAtMSkge1xuICAgICAgICBsZXQgdGFiID0gdGhpcy5nZW5lcmF0ZVRhYlVybCh0aGlzLl90YWJzW2NvbmZpZ0lkXSk7XG5cbiAgICAgICAgLy8gaXNGaXJzdCBzaG91bGQgYWx3YXlzIGJlIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBsaXN0XG4gICAgICAgIGlmICh0YWIuaXNGaXJzdCkge1xuICAgICAgICAgIHRhYnMudW5zaGlmdCh0YWIpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFicy5wdXNoKHRhYik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKHtcbiAgICAgIHRhYnM6IHRhYnNcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlciAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5yZW5kZXIoZGF0YSk7XG4gIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSBuYW1lIHRvIHVzZSBmb3IgcmVuZGVyaW5nIHdpdGggaGFuZGxlYmFyc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3NlYXJjaC9zZWFyY2gnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGlucHV0IGtleSBmb3IgdGhlIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCBhdXRvLWNvbXBsZXRlIGFuZCBzZWFyY2ggd2lsbCBiZSBiYXNlZCBvbiB1bml2ZXJzYWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2JhcktleSA9IG9wdHMuYmFyS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgZXhwZXJpZW5jZSBrZXkgZm9yIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCBhdXRvLWNvbXBsZXRlIGFuZCBzZWFyY2ggd2lsbCBiZSBiYXNlZCBvbiB1bml2ZXJzYWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gb3B0cy52ZXJ0aWNhbEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogUXVlcnkgc3VibWlzc2lvbiBpcyBiYXNlZCBvbiBhIGZvcm0gYXMgY29udGV4dC5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gbmF0aXZlIGZvcm0gbm9kZSB3aXRoaW4gY29udGFpbmVyXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5fZm9ybUVsID0gb3B0cy5mb3JtU2VsZWN0b3IgfHwgJ2Zvcm0nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlucHV0IGVsZW1lbnQgdXNlZCBmb3Igc2VhcmNoaW5nIGFuZCB3aXJlcyB1cCB0aGUga2V5Ym9hcmQgaW50ZXJhY3Rpb25cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2lucHV0RWwgPSBvcHRzLmlucHV0RWwgfHwgJy5qcy15ZXh0LXF1ZXJ5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB1c2VkLCBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgYXMgYSBkYXRhIHBvaW50XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudGl0bGUgPSBvcHRzLnRpdGxlIHx8ICdBbnN3ZXJzIFVuaXZlcnNhbCBTZWFyY2gnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlYXJjaCB0ZXh0IHVzZWQgZm9yIGxhYmVsaW5nIHRoZSBpbnB1dCBib3gsIGFsc28gcHJvdmlkZWQgdG8gdGVtcGxhdGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gb3B0cy5zZWFyY2hUZXh0IHx8ICdXaGF0IGFyZSB5b3UgaW50ZXJlc3RlZCBpbj8nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHRleHQgdG8gc2hvdyBhcyB0aGUgZmlyc3QgaXRlbSBmb3IgYXV0byBjb21wbGV0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnByb21wdEhlYWRlciA9IG9wdHMucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBdXRvIGZvY3VzZXMgdGhlIGlucHV0IGJveCBpZiBzZXQgdG8gdHJ1ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBkZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9Gb2N1cyA9IG9wdHMuYXV0b0ZvY3VzID09PSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICogc3VibWl0VVJMIHdpbGwgZm9yY2UgdGhlIHNlYXJjaCBxdWVyeSBzdWJtaXNzaW9uIHRvIGdldFxuICAgICAqIHJlZGlyZWN0ZWQgdG8gdGhlIFVSTCBwcm92aWRlZC5cbiAgICAgKiBPcHRpb25hbCwgZGVmYXVsdHMgdG8gbnVsbC5cbiAgICAgKlxuICAgICAqIElmIG5vIHJlZGlyZWN0VXJsIHByb3ZpZGVkLCB3ZSBrZWVwIHRoZSBwYWdlIGFzIGEgc2luZ2xlIHBhZ2UgYXBwLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZWRpcmVjdFVybCA9IG9wdHMucmVkaXJlY3RVcmwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSBzdHJpbmcgdG8gdXNlIGZvciB0aGUgaW5wdXQgYm94LCBwcm92aWRlZCB0byB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlcnkgPSBvcHRzLnF1ZXJ5IHx8IHRoaXMuZ2V0VXJsUGFyYW1zKCkuZ2V0KCdxdWVyeScpIHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ1NlYXJjaEJhcic7XG4gIH1cblxuICBvbkNyZWF0ZSAoKSB7XG4gICAgaWYgKHRoaXMucXVlcnkgJiYgdGhpcy5xdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNlYXJjaCh0aGlzLnF1ZXJ5KTtcbiAgICB9XG5cbiAgICB0aGlzLmJpbmRCcm93c2VySGlzdG9yeSgpO1xuICB9XG5cbiAgb25Nb3VudCAoKSB7XG4gICAgLy8gV2lyZSB1cCBvdXIgc2VhcmNoIGhhbmRsaW5nIGFuZCBhdXRvIGNvbXBsZXRlXG4gICAgdGhpcy5pbml0U2VhcmNoKHRoaXMuX2Zvcm1FbCk7XG4gICAgdGhpcy5pbml0QXV0b0NvbXBsZXRlKHRoaXMuX2lucHV0RWwpO1xuXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzID09PSB0cnVlICYmIHRoaXMucXVlcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gdXNlIGZvciB3aXJpbmcgdXAgc2VhcmNoaW5nIG9uIGZvcm0gc3VibWlzc2lvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybVNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBzdWJtaXQgaGFuZGxpbmcgdG9cbiAgICovXG4gIGluaXRTZWFyY2ggKGZvcm1TZWxlY3Rvcikge1xuICAgIHRoaXMuX2Zvcm1FbCA9IGZvcm1TZWxlY3RvcjtcblxuICAgIGxldCBmb3JtID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgZm9ybVNlbGVjdG9yKTtcbiAgICBpZiAoIWZvcm0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGluaXRpYWxpemUgU2VhcmNoQmFyOyBDYW4gbm90IGZpbmQge0hUTUxFbGVtZW50fSBgJywgdGhpcy5fZm9ybUVsLCAnYC4nKTtcbiAgICB9XG5cbiAgICBET00ub24oZm9ybSwgJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGxldCBxdWVyeSA9IGZvcm0ucXVlcnlTZWxlY3Rvcih0aGlzLl9pbnB1dEVsKS52YWx1ZTtcbiAgICAgIGxldCBwYXJhbXMgPSB0aGlzLmdldFVybFBhcmFtcygpO1xuICAgICAgcGFyYW1zLnNldCgncXVlcnknLCBxdWVyeSk7XG5cbiAgICAgIC8vIElmIHdlIGhhdmUgYSByZWRpcmVjdFVybCwgd2Ugd2FudCB0aGUgZm9ybSB0byBiZVxuICAgICAgLy8gc2VyaWFsaXplZCBhbmQgc3VibWl0dGVkLlxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlZGlyZWN0VXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMucmVkaXJlY3RVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe1xuICAgICAgICBxdWVyeTogcXVlcnlcbiAgICAgIH0sIHF1ZXJ5LCAnPycgKyBwYXJhbXMudG9TdHJpbmcoKSk7XG5cbiAgICAgIHRoaXMuc2VhcmNoKHF1ZXJ5KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gd2lyZSB1cCBvdXIgYXV0byBjb21wbGV0ZSBvbiBhbiBpbnB1dCBzZWxlY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRTZWxlY3RvciBDU1Mgc2VsZWN0b3IgdG8gYmluZCBvdXIgYXV0byBjb21wbGV0ZSBjb21wb25lbnQgdG9cbiAgICovXG4gIGluaXRBdXRvQ29tcGxldGUgKGlucHV0U2VsZWN0b3IpIHtcbiAgICB0aGlzLl9pbnB1dEVsID0gaW5wdXRTZWxlY3RvcjtcblxuICAgIHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoJ0F1dG9Db21wbGV0ZScsIHtcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgIGNvbnRhaW5lcjogJy55ZXh0LXNlYXJjaC1hdXRvY29tcGxldGUnLFxuICAgICAgYmFyS2V5OiB0aGlzLl9iYXJLZXksXG4gICAgICBleHBlcmllbmNlS2V5OiB0aGlzLl9leHBlcmllbmNlS2V5LFxuICAgICAgcHJvbXB0SGVhZGVyOiB0aGlzLnByb21wdEhlYWRlcixcbiAgICAgIG9yaWdpbmFsUXVlcnk6IHRoaXMucXVlcnksXG4gICAgICBpbnB1dEVsOiBpbnB1dFNlbGVjdG9yLFxuICAgICAgb25TdWJtaXQ6ICgpID0+IHtcbiAgICAgICAgRE9NLnRyaWdnZXIoJ2Zvcm0nLCAnc3VibWl0Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZWFyY2ggKHF1ZXJ5KSB7XG4gICAgaWYgKHRoaXMuX3ZlcnRpY2FsS2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5jb3JlLnZlcnRpY2FsU2VhcmNoKHF1ZXJ5LCB0aGlzLl92ZXJ0aWNhbEtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5PVEUoYmlsbHkpIFRlbXBvcmFyeSBoYWNrIGZvciBERU1PXG4gICAgICAvLyBSZW1vdmUgbWUgYWZ0ZXIgdGhlIGRlbW9cbiAgICAgIGxldCBuYXYgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXJcbiAgICAgICAgLmdldEFjdGl2ZUNvbXBvbmVudCgnTmF2aWdhdGlvbicpO1xuXG4gICAgICBpZiAobmF2KSB7XG4gICAgICAgIGxldCB0YWJzID0gbmF2LmdldFN0YXRlKCd0YWJzJyk7XG4gICAgICAgIGxldCB1cmxzID0ge307XG5cbiAgICAgICAgaWYgKHRhYnMgJiYgQXJyYXkuaXNBcnJheSh0YWJzKSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHRoaXMuZ2V0VXJsUGFyYW1zKHRhYnNbaV0udXJsLnNwbGl0KCc/JylbMV0pO1xuICAgICAgICAgICAgcGFyYW1zLnNldCgncXVlcnknLCBxdWVyeSk7XG5cbiAgICAgICAgICAgIGxldCB1cmwgPSB0YWJzW2ldLmJhc2VVcmw7XG4gICAgICAgICAgICBpZiAocGFyYW1zLnRvU3RyaW5nKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICB1cmwgKz0gJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cmxzW3RhYnNbaV0uY29uZmlnSWRdID0gdXJsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb3JlLnNlYXJjaChxdWVyeSwgdXJscyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvcmUuc2VhcmNoKHF1ZXJ5KTtcbiAgICB9XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgc2VhcmNoVGV4dDogdGhpcy5zZWFyY2hUZXh0LFxuICAgICAgcXVlcnk6IHRoaXMucXVlcnlcbiAgICB9LCBkYXRhKSk7XG4gIH1cblxuICBnZXRVcmxQYXJhbXMgKHVybCkge1xuICAgIHVybCA9IHVybCB8fCB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTtcbiAgICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyh1cmwpO1xuICB9XG5cbiAgYmluZEJyb3dzZXJIaXN0b3J5ICgpIHtcbiAgICBET00ub24od2luZG93LCAncG9wc3RhdGUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5nZXRVcmxQYXJhbXMoKS5nZXQoJ3F1ZXJ5Jyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcXVlcnk6IHRoaXMucXVlcnlcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNlYXJjaCh0aGlzLnF1ZXJ5KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIG5hbWUgdG8gdXNlIGZvciByZW5kZXJpbmcgd2l0aCBoYW5kbGViYXJzXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAnc2VhcmNoL3NlYXJjaCc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5wdXQga2V5IGZvciB0aGUgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2JhcktleSA9IG9wdHMuYmFyS2V5IHx8IG9wdHMuaW5wdXRLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBleHBlcmllbmNlIGtleSBmb3IgdmVydGljYWwgc2VhcmNoIGNvbmZpZ3VyYXRpb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2V4cGVyaWVuY2VLZXkgPSBvcHRzLmV4cGVyaWVuY2VLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFF1ZXJ5IHN1Ym1pc3Npb24gaXMgYmFzZWQgb24gYSBmb3JtIGFzIGNvbnRleHQuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIG5hdGl2ZSBmb3JtIG5vZGUgd2l0aGluIGNvbnRhaW5lclxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2Zvcm1FbCA9IG9wdHMuZm9ybVNlbGVjdG9yIHx8ICdmb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBlbGVtZW50IHVzZWQgZm9yIHNlYXJjaGluZyBhbmQgd2lyZXMgdXAgdGhlIGtleWJvYXJkIGludGVyYWN0aW9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gb3B0cy5pbnB1dEVsIHx8ICcuanMteWV4dC1xdWVyeSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgdXNlZCwgcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlIGFzIGEgZGF0YSBwb2ludFxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnRpdGxlID0gb3B0cy50aXRsZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWFyY2ggdGV4dCB1c2VkIGZvciBsYWJlbGluZyB0aGUgaW5wdXQgYm94LCBhbHNvIHByb3ZpZGVkIHRvIHRlbXBsYXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc2VhcmNoVGV4dCA9IG9wdHMuc2VhcmNoVGV4dCB8fCAnV2hhdCBhcmUgeW91IGludGVyZXN0ZWQgaW4/JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSB0ZXh0IHRvIHNob3cgYXMgdGhlIGZpcnN0IGl0ZW0gZm9yIGF1dG8gY29tcGxldGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5wcm9tcHRIZWFkZXIgPSBvcHRzLnByb21wdEhlYWRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQXV0byBmb2N1c2VzIHRoZSBpbnB1dCBib3ggaWYgc2V0IHRvIHRydWUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvRm9jdXMgPSBvcHRzLmF1dG9Gb2N1cyA9PT0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqIHN1Ym1pdFVSTCB3aWxsIGZvcmNlIHRoZSBzZWFyY2ggcXVlcnkgc3VibWlzc2lvbiB0byBnZXRcbiAgICAgKiByZWRpcmVjdGVkIHRvIHRoZSBVUkwgcHJvdmlkZWQuXG4gICAgICogT3B0aW9uYWwsIGRlZmF1bHRzIHRvIG51bGwuXG4gICAgICpcbiAgICAgKiBJZiBubyByZWRpcmVjdFVybCBwcm92aWRlZCwgd2Uga2VlcCB0aGUgcGFnZSBhcyBhIHNpbmdsZSBwYWdlIGFwcC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucmVkaXJlY3RVcmwgPSBvcHRzLnJlZGlyZWN0VXJsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgc3RyaW5nIHRvIHVzZSBmb3IgdGhlIGlucHV0IGJveCwgcHJvdmlkZWQgdG8gdGVtcGxhdGUgZm9yIHJlbmRlcmluZy5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXJ5ID0gb3B0cy5xdWVyeSB8fCB0aGlzLmdldFVybFBhcmFtcygpLmdldCgncXVlcnknKSB8fCAnJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBmaWx0ZXIgc3RyaW5nIHRvIHVzZSBmb3IgdGhlIHByb3ZpZGVkIHF1ZXJ5XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5maWx0ZXIgPSBvcHRzLmZpbHRlciB8fCB0aGlzLmdldFVybFBhcmFtcygpLmdldCgnZmlsdGVyJykgfHwgJyc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnRmlsdGVyUGlja2VyJztcbiAgfVxuXG4gIG9uQ3JlYXRlICgpIHtcbiAgICBpZiAodGhpcy5xdWVyeSAmJiB0aGlzLnF1ZXJ5Lmxlbmd0aCA+IDAgJiYgdGhpcy5maWx0ZXIgJiYgdGhpcy5maWx0ZXIubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZWFyY2godGhpcy5xdWVyeSwgdGhpcy5maWx0ZXIpO1xuICAgIH1cblxuICAgIHRoaXMuYmluZEJyb3dzZXJIaXN0b3J5KCk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICAvLyBXaXJlIHVwIG91ciBzZWFyY2ggaGFuZGxpbmcgYW5kIGF1dG8gY29tcGxldGVcbiAgICB0aGlzLmluaXRBdXRvQ29tcGxldGUodGhpcy5faW5wdXRFbCk7XG5cbiAgICBpZiAodGhpcy5hdXRvRm9jdXMgPT09IHRydWUgJiYgdGhpcy5xdWVyeS5sZW5ndGggPT09IDApIHtcbiAgICAgIERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2lucHV0RWwpLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgaGVscGVyIG1ldGhvZCB0byB3aXJlIHVwIG91ciBhdXRvIGNvbXBsZXRlIG9uIGFuIGlucHV0IHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBhdXRvIGNvbXBsZXRlIGNvbXBvbmVudCB0b1xuICAgKi9cbiAgaW5pdEF1dG9Db21wbGV0ZSAoaW5wdXRTZWxlY3Rvcikge1xuICAgIHRoaXMuX2lucHV0RWwgPSBpbnB1dFNlbGVjdG9yO1xuXG4gICAgdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZSgnQXV0b0NvbXBsZXRlJywge1xuICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgaXNGaWx0ZXJTZWFyY2g6IHRydWUsXG4gICAgICBjb250YWluZXI6ICcueWV4dC1zZWFyY2gtYXV0b2NvbXBsZXRlJyxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5wcm9tcHRIZWFkZXIsXG4gICAgICBvcmlnaW5hbFF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgb3JpZ2luYWxGaWx0ZXI6IHRoaXMuZmlsdGVyLFxuICAgICAgaW5wdXRFbDogaW5wdXRTZWxlY3RvcixcbiAgICAgIGV4cGVyaWVuY2VLZXk6IHRoaXMuX2V4cGVyaWVuY2VLZXksXG4gICAgICBiYXJLZXk6IHRoaXMuX2JhcktleSxcbiAgICAgIG9uU3VibWl0OiAocXVlcnksIGZpbHRlcikgPT4ge1xuICAgICAgICB0aGlzLnNlYXJjaChxdWVyeSwgZmlsdGVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaCAocXVlcnksIGZpbHRlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuZ2V0VXJsUGFyYW1zKCk7XG5cbiAgICBwYXJhbXMuc2V0KCdxdWVyeScsIHF1ZXJ5KTtcbiAgICBwYXJhbXMuc2V0KCdmaWx0ZXInLCBmaWx0ZXIpO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSBhIHJlZGlyZWN0VXJsLCB3ZSB3YW50IHRoZSBwYXJhbXMgdG8gYmVcbiAgICAvLyBzZXJpYWxpemVkIGFuZCBzdWJtaXR0ZWQuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnJlZGlyZWN0VXJsID09PSAnc3RyaW5nJykge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLnJlZGlyZWN0VXJsICsgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHtcbiAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgIGZpbHRlcjogZmlsdGVyXG4gICAgfSwgcXVlcnksICc/JyArIHBhcmFtcy50b1N0cmluZygpKTtcblxuICAgIHRoaXMuY29yZS52ZXJ0aWNhbFNlYXJjaCgnJywgdGhpcy5fZXhwZXJpZW5jZUtleSwgZmlsdGVyKTtcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBzZWFyY2hUZXh0OiB0aGlzLnNlYXJjaFRleHQsXG4gICAgICBxdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXJcbiAgICB9LCBkYXRhKSk7XG4gIH1cblxuICBnZXRVcmxQYXJhbXMgKHVybCkge1xuICAgIHVybCA9IHVybCB8fCB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTtcbiAgICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyh1cmwpO1xuICB9XG5cbiAgYmluZEJyb3dzZXJIaXN0b3J5ICgpIHtcbiAgICBET00ub24od2luZG93LCAncG9wc3RhdGUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5nZXRVcmxQYXJhbXMoKS5nZXQoJ3F1ZXJ5Jyk7XG4gICAgICB0aGlzLmZpbHRlciA9IHRoaXMuZ2V0VXJsUGFyYW1zKCkuZ2V0KCdmaWx0ZXInKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBxdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlclxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2VhcmNoKHRoaXMucXVlcnkpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG5jb25zdCBLZXlzID0ge1xuICBCQUNLU1BBQ0U6IDgsXG4gIFRBQjogOSxcbiAgRU5URVI6IDEzLFxuICBTSElGVDogMTYsXG4gIENUUkw6IDE3LFxuICBBTFQ6IDE4LFxuICBFU0NBUEU6IDI3LFxuXG4gIExFRlQ6IDM3LFxuICBSSUdIVDogMzksXG4gIFVQOiAzOCxcblxuICBERUxFVEU6IDQ2LFxuICBET1dOOiA0MCxcbiAgTEVGVF9PU19LRVk6IDkxLFxuICBSSUdIVF9PU19LRVk6IDkyLFxuICBTRUxFQ1RfS0VZOiA5M1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBhdXRvY29tcGxldGUgaXMgc2ltcGxlIG9yIGZpbHRlclxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNGaWx0ZXJTZWFyY2ggPSBvcHRzLmlzRmlsdGVyU2VhcmNoIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGBiYXJLZXlgIGluIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggdG8gdXNlIGZvciBhdXRvLWNvbXBsZXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9iYXJLZXkgPSBvcHRzLmJhcktleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGBleHBlcmllbmNlS2V5YCBvZiB0aGUgdmVydGljYWwgc2VhcmNoIHRvIHVzZSBmb3IgYXV0by1jb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fZXhwZXJpZW5jZUtleSA9IG9wdHMuZXhwZXJpZW5jZUtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGlucHV0IGVsIHNlbGVjdG9yIGZvciBhdXRvIGNvbXBsZXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gb3B0cy5pbnB1dEVsIHx8ICcuanMteWV4dC1xdWVyeSc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgZm9yIHRoZSBkYXRhLXN0b3JhZ2UgdG8gbGlzdGVuIGZvciB1cGRhdGVzIGZyb20gdGhlIHNlcnZlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgbGV0IG1vZHVsZUlkID0gJ2F1dG9jb21wbGV0ZSc7XG4gICAgaWYgKHRoaXMuX2JhcktleSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX2JhcktleSAhPT0gbnVsbCkge1xuICAgICAgbW9kdWxlSWQgPSAnYXV0b2NvbXBsZXRlLicgKyB0aGlzLl9iYXJLZXk7XG4gICAgfVxuICAgIHRoaXMubW9kdWxlSWQgPSBtb2R1bGVJZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGhhbmRsZWJhcnMgdGVtcGxhdGUgbmFtZSB0byB1c2UgZm9yIHJlbmRlcmluZ1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3NlYXJjaC9hdXRvY29tcGxldGUnO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBpbnB1dCB2YWx1ZSB3aGVuIHR5cGluZy5cbiAgICAgKiBXZSB1c2UgdGhpcyBmb3IgcmVzZXR0aW5nIHRoZSBzdGF0ZSBvZiB0aGUgaW5wdXQgdmFsdWUgd2hlbiBvdGhlciBpbnRlcmFjdGlvbnMgKGUuZy4gcmVzdWx0IG5hdmlnYXRpb24pXG4gICAgICogY2hhbmdlIGJhc2VkIG9uIGludGVyYWN0aW9ucy4gRm9yIGluc3RhbmNlLCBoaXR0aW5nIGVzY2FwZSBzaG91bGQgcmVzZXQgdGhlIHZhbHVlIHRvIHRoZSBvcmlnaW5hbCB0eXBlZCBxdWVyeS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX29yaWdpbmFsUXVlcnkgPSBvcHRzLm9yaWdpbmFsUXVlcnkgfHwgJyc7XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uIHRocm91Z2ggcmVzdWx0cy5cbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgc2VjdGlvbiB3ZSdyZSBuYXZpZ2F0aW5nIGluLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fc2VjdGlvbkluZGV4ID0gMDtcblxuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIGtleWJvYXJkIG5hdmlnYXRpb24gdGhyb3VnaCByZXN1bHRzLlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCByZXN1bHQgaW5kZXggd2UncmUgbmF2aWdhdGluZyBvbi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gLTE7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgdGV4dCB0byBzaG93IGFzIHRoZSBmaXJzdCBpdGVtIGZvciBhdXRvIGNvbXBsZXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucHJvbXB0SGVhZGVyID0gb3B0cy5wcm9tcHRIZWFkZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGludm9rZWQgd2hlbiB0aGUgYEVudGVyYCBrZXkgaXMgcHJlc3NlZCBvbiBhdXRvIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIHRoaXMuX29uU3VibWl0ID0gb3B0cy5vblN1Ym1pdCB8fCBmdW5jdGlvbiAoKSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYWxpYXNlZCB1c2VkIGJ5IHRoZSBjb21wb25lbnQgbWFuYWdlciBmb3IgY3JlYXRpb24uXG4gICAqL1xuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnQXV0b0NvbXBsZXRlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXRTdGF0ZSBpcyBvdmVycmlkZGVuIHNvIHRoYXQgd2UgY2FuIHByb3ZpZGUgYWRkaXRpb25hbCBtZXRhIGRhdGFcbiAgICogdG8gdGhlIHRlbXBsYXRlIChlLmcuIHRoZSBzZWN0aW9uSW5kZXggYW5kIHJlc3VsdEluZGV4KSwgc2luY2VcbiAgICogdGhvc2UgYXJlIGNsaWVudC1pbnRlcmFjdGlvbiBzcGVjaWZpYyB2YWx1ZXMgYW5kIGFyZW4ndCByZXR1cm5lZCBmcm9tIHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBzZXRTdGF0ZSAoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgc2VjdGlvbkluZGV4OiB0aGlzLl9zZWN0aW9uSW5kZXgsXG4gICAgICByZXN1bHRJbmRleDogdGhpcy5fcmVzdWx0SW5kZXgsXG4gICAgICBwcm9tcHRIZWFkZXI6IHRoaXMuX29yaWdpbmFsUXVlcnkubGVuZ3RoID09PSAwID8gdGhpcy5wcm9tcHRIZWFkZXIgOiBudWxsXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIHVwZGF0ZVN0YXRlIGlzIGEgaGVscGVyIHRvIGFwcGx5IHRoZSBjdXJyZW50IHN0YXRlIHdpdGggbmV3IGNsaWVudC1zdGF0ZS5cbiAgICovXG4gIHVwZGF0ZVN0YXRlICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuX3N0YXRlLmdldCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbkNyZWF0ZSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGNvbnN0cnVjdGVkIGZyb20gdGhlIGZyYW1ld29yay5cbiAgICogT25jZSB3ZSdyZSBpbml0YWxpemVkLCB3ZSB3aXJlIHVwIGFsbCBvZiBvdXIgdXNlciBpbnRlcmFjdGlvbnNcbiAgICovXG4gIG9uQ3JlYXRlICgpIHtcbiAgICAvLyBVc2UgdGhlIGNvbnRleHQgb2YgdGhlIHBhcmVudCBjb21wb25lbnQgdG8gZmluZCB0aGUgaW5wdXQgbm9kZS5cbiAgICBsZXQgcXVlcnlJbnB1dCA9IERPTS5xdWVyeSh0aGlzLl9wYXJlbnQuX2NvbnRhaW5lciwgdGhpcy5faW5wdXRFbCk7XG4gICAgaWYgKCFxdWVyeUlucHV0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBpbml0aWFsaXplIEF1dG9Db21wbGV0ZS4gQ2FuIG5vdCBmaW5kIHtIVE1MRWxlbWVudH0gYCcsIHRoaXMuX2lucHV0RWwsICdgLicpO1xuICAgIH1cblxuICAgIC8vIERpc2FibGUgdGhlIG5hdGl2ZSBhdXRvIGNvbXBsZXRlXG4gICAgRE9NLmF0dHIocXVlcnlJbnB1dCwgJ2F1dG9Db21wbGV0ZScsICdvZmYnKTtcblxuICAgIC8vIFRoZSB1c2VyIGV4aXRzIHRoZSBpbnB1dCwgc28gd2Ugd2FudCB0byByZXNldCB0aGUgc3RhdGUgYW5kIGNsb3NlXG4gICAgLy8gdGhlIGF1dG8gY29tcGxldGVcbiAgICBET00ub24ocXVlcnlJbnB1dCwgJ2JsdXInLCAoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIGEgdXNlciBmb2N1c2VzIHRoZSBpbnB1dCwgd2Ugc2hvdWxkIHBvcHVsYXRlIHRoZSBhdXRvY29tcGxldGUgYmFzZWRcbiAgICAvLyBvbiB0aGUgY3VycmVudCB2YWx1ZVxuICAgIERPTS5vbihxdWVyeUlucHV0LCAnZm9jdXMnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICBpZiAodGhpcy5pc0ZpbHRlclNlYXJjaCkge1xuICAgICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlRmlsdGVyKHF1ZXJ5SW5wdXQudmFsdWUsIHRoaXMuX2V4cGVyaWVuY2VLZXksIHRoaXMuX2JhcktleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlKHF1ZXJ5SW5wdXQudmFsdWUsIHRoaXMuX2V4cGVyaWVuY2VLZXksIHRoaXMuX2JhcktleSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBuYXZpZ2F0ZSBiZXR3ZWVuIHRoZSByZXN1bHRzIHVzaW5nIHRoZSBrZXlib2FyZFxuICAgIERPTS5vbihxdWVyeUlucHV0LCAna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZU5hdmlnYXRlUmVzdWx0cyhlLmtleUNvZGUsIGUpO1xuICAgICAgdGhpcy5oYW5kbGVTdWJtaXRSZXN1bHQoZS5rZXlDb2RlLCBxdWVyeUlucHV0LnZhbHVlLCBlKTtcbiAgICB9KTtcblxuICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIHNlbGVjdCBhIHJlc3VsdCB3aXRoIHRoZSBtb3VzZVxuICAgIERPTS5kZWxlZ2F0ZSh0aGlzLl9jb250YWluZXIsICcuanMteWV4dC1hdXRvY29tcGxldGUtb3B0aW9uJywgJ21vdXNlZG93bicsIChldnQsIHRhcmdldCkgPT4ge1xuICAgICAgbGV0IGRhdGEgPSB0YXJnZXQuZGF0YXNldDtcblxuICAgICAgbGV0IHZhbCA9IGRhdGEuc2hvcnQ7XG5cbiAgICAgIGxldCBmaWx0ZXIgPSBKU09OLnBhcnNlKGRhdGEuZmlsdGVyKTtcblxuICAgICAgdGhpcy51cGRhdGVRdWVyeSh2YWwpO1xuICAgICAgdGhpcy5fb25TdWJtaXQodmFsLCBmaWx0ZXIuZmlsdGVyKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIC8vIFdoZW4gdGhlIHVzZXIgaXMgdHlwaW5nIGluIHRoZSBpbnB1dCwgcHJvY2VzcyB0aGUgYXV0byBjb21wbGV0ZS5cbiAgICBET00ub24ocXVlcnlJbnB1dCwgJ2tleXVwJywgKGUpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlVHlwaW5nKGUua2V5Q29kZSwgcXVlcnlJbnB1dC52YWx1ZSwgZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogY2xvc2Ugd2lsbCBoaWRlIHRoZSBhdXRvIGNvbXBsZXRlIHJlc3VsdHMgYW5kIHJlc2V0IHRoZSBzdGF0ZS5cbiAgICovXG4gIGNsb3NlICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt9KTtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICAvKipcbiAgICogcmVzZXRzIHRoZSBjbGllbnQgc3RhdGUgdG8gdGhlaXIgb3JpZ2luYWwgdmFsdWVzIGFuZCB0cmlnZ2Vyc1xuICAgKiBhIHRlbXBsYXRlLXJlcmVuZGVyIHZpYSB1cGRhdGVTdGF0ZVxuICAgKi9cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuX3NlY3Rpb25JbmRleCA9IDA7XG4gICAgdGhpcy5fcmVzdWx0SW5kZXggPSAtMTtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB0byB1cGRhdGUgdGhlIGlucHV0IHRleHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdFZhbHVlIE9wdGlvbiB2YWx1ZSBwcm92aWRlZC5cbiAgICogSWYgbm8gdmFsdWUgcHJvdmlkZWQsIHdlJ2xsIHRyeSB0byBmaW5kIGl0IGJhc2VkIG9uIHRoZSBzZWxlY3Rpb24gaW5kZXhlcy5cbiAgICovXG4gIHVwZGF0ZVF1ZXJ5IChvcHRWYWx1ZSkge1xuICAgIC8vIE9ubHkgd2FudCB0byB1cGRhdGUgdGhlIHF1ZXJ5IHN0cmluZyBpZiB0aGVyZXMgYSB2YWx1ZS5cbiAgICAvLyBJZiBvbmUgaXMgcHJvdmlkZWQsIGdyZWF0LlxuICAgIC8vIE90aGVyd2lzZSwgbGV0cyB0cnkgdG8gZmluZCBpdCBmcm9tIHRoZSBjdXJyZW50IHNlbGVjdGlvbiBpbiB0aGUgcmVzdWx0cy5cbiAgICBpZiAob3B0VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IHNlY3Rpb25zID0gdGhpcy5fc3RhdGUuZ2V0KCdzZWN0aW9ucycpO1xuXG4gICAgICBsZXQgcmVzdWx0cyA9IHNlY3Rpb25zW3RoaXMuX3NlY3Rpb25JbmRleF0ucmVzdWx0cztcbiAgICAgIG9wdFZhbHVlID0gcmVzdWx0c1t0aGlzLl9yZXN1bHRJbmRleF0uc2hvcnRWYWx1ZTtcbiAgICB9XG5cbiAgICBsZXQgcXVlcnlFbCA9IERPTS5xdWVyeSh0aGlzLl9wYXJlbnQuX2NvbnRhaW5lciwgJy5qcy15ZXh0LXF1ZXJ5Jyk7XG4gICAgcXVlcnlFbC52YWx1ZSA9IG9wdFZhbHVlO1xuICB9XG5cbiAgaGFuZGxlVHlwaW5nIChrZXksIHZhbHVlLCBlKSB7XG4gICAgbGV0IGlnbm9yZWRLZXlzID0gW1xuICAgICAgS2V5cy5ET1dOLFxuICAgICAgS2V5cy5VUCxcbiAgICAgIEtleXMuQ1RSTCxcbiAgICAgIEtleXMuQUxULFxuICAgICAgS2V5cy5TSElGVCxcbiAgICAgIEtleXMuTEVGVCxcbiAgICAgIEtleXMuUklHSFQsXG4gICAgICBLZXlzLkxFRlRfT1NfS0VZLFxuICAgICAgS2V5cy5SSUdIVF9PU19LRVksXG4gICAgICBLZXlzLlNFTEVDVF9LRVlcbiAgICBdO1xuXG4gICAgaWYgKGlnbm9yZWRLZXlzLmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVXNlciBlc2NhcGVzIG91dCBvZiBhdXRvIGNvbXBsZXRlLCBzbyB3ZSByZXNldCBpdCB0byB0aGUgb3JpZ2luYWwgaW5wdXRcbiAgICBpZiAoa2V5ID09PSBLZXlzLkVTQ0FQRSkge1xuICAgICAgdGhpcy51cGRhdGVRdWVyeSh0aGlzLl9vcmlnaW5hbFF1ZXJ5KTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUYWJiaW5nIG91dCBvciBlbnRlciBzaG91bGQgY2xvc2UgdGhlIGF1dG8gY29tcGxldGUuXG4gICAgaWYgKGtleSA9PT0gS2V5cy5FTlRFUiB8fCBrZXkgPT09IEtleXMuVEFCKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHRoZSBvcmlnaW5hbCB2YWx1ZSBiYXNlZCBvbiB0aGUgdXNlciBpbnB1dFxuICAgIHRoaXMuX29yaWdpbmFsUXVlcnkgPSB2YWx1ZTtcblxuICAgIHRoaXMucmVzZXQoKTtcbiAgICBpZiAodGhpcy5pc0ZpbHRlclNlYXJjaCkge1xuICAgICAgdGhpcy5jb3JlLmF1dG9Db21wbGV0ZUZpbHRlcih2YWx1ZSwgdGhpcy5fZXhwZXJpZW5jZUtleSwgdGhpcy5fYmFyS2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb3JlLmF1dG9Db21wbGV0ZSh2YWx1ZSwgdGhpcy5fZXhwZXJpZW5jZUtleSwgdGhpcy5fYmFyS2V5KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVOYXZpZ2F0ZVJlc3VsdHMgKGtleSwgZSkge1xuICAgIGxldCBzZWN0aW9ucyA9IHRoaXMuX3N0YXRlLmdldCgnc2VjdGlvbnMnKTtcbiAgICBpZiAoc2VjdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBzZWN0aW9ucy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCByZXN1bHRzID0gc2VjdGlvbnNbdGhpcy5fc2VjdGlvbkluZGV4XS5yZXN1bHRzO1xuICAgIGlmIChrZXkgPT09IEtleXMuVVApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLl9yZXN1bHRJbmRleCA8PSAwKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPiAwKSB7XG4gICAgICAgICAgdGhpcy5fc2VjdGlvbkluZGV4LS07XG4gICAgICAgICAgdGhpcy5fcmVzdWx0SW5kZXggPSBzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHMubGVuZ3RoIC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHRoaXMuX29yaWdpbmFsUXVlcnkpO1xuICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVzdWx0SW5kZXgtLTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSBLZXlzLkRPV04pIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLl9yZXN1bHRJbmRleCA+PSByZXN1bHRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlY3Rpb25JbmRleCA8IHNlY3Rpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLl9zZWN0aW9uSW5kZXgrKztcbiAgICAgICAgICB0aGlzLl9yZXN1bHRJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVzdWx0SW5kZXgrKztcbiAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTdWJtaXRSZXN1bHQgKGtleSwgdmFsdWUsIGUpIHtcbiAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG4gICAgaWYgKHNlY3Rpb25zID09PSB1bmRlZmluZWQgfHwgc2VjdGlvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBzdWJtaXQgdGhlIHNlYXJjaCBvbiBlbnRlclxuICAgIGlmIChrZXkgPT09IEtleXMuRU5URVIpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxldCBmaWx0ZXIgPSAnJztcbiAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPj0gMCAmJiB0aGlzLl9yZXN1bHRJbmRleCA+PSAwKSB7XG4gICAgICAgIGZpbHRlciA9IEpTT04uc3RyaW5naWZ5KHNlY3Rpb25zW3RoaXMuX3NlY3Rpb25JbmRleF0ucmVzdWx0c1t0aGlzLl9yZXN1bHRJbmRleF0uZmlsdGVyKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGVRdWVyeSh2YWx1ZSk7XG4gICAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gdmFsdWU7XG4gICAgICB0aGlzLl9vblN1Ym1pdCh2YWx1ZSwgZmlsdGVyKTtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0QW5zd2VyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9ICdkaXJlY3RBbnN3ZXInO1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdyZXN1bHRzL2RpcmVjdGFuc3dlcic7XG4gIH1cblxuICBiZWZvcmVNb3VudCAoKSB7XG4gICAgaWYgKCF0aGlzLmhhc1N0YXRlKCdhbnN3ZXInKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0RpcmVjdEFuc3dlcic7XG4gIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncmVzdWx0cy9yZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG59XG4iLCJpbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBSZXN1bHRzSXRlbUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdyZXN1bHRzL2xvY2F0aW9ucmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0xvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG59XG4iLCJpbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBSZXN1bHRzSXRlbUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdyZXN1bHRzL2V2ZW50cmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlICgpIHtcbiAgICByZXR1cm4gJ0V2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG59XG4iLCJpbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncmVzdWx0cy9wZW9wbGVyZXN1bHRzaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG59XG4iLCIvKipcbiAqIFRoZSBjb3JlIE1hcFByb3ZpZGVyIGludGVyZmFjZSB0byBpbXBsZW1lbnQgZm9yIHZhcmlvdXMgdHlwZXMgb2YgbWFwIHByb3ZpZGVycy5cbiAqIEltcGxlbWVudGF0aW9ucyBzaG91bGQgZXh0ZW5kIHRoaXMgaW50ZXJmYWNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcFByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHVzZWQgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIG1hcCBwcm92aWRlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYXBpS2V5ID0gb3B0cy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBtYXAgdG8gYXBwZW5kIHRvIHRoZSBET00sIGRlZmF1bHRzIHRvIDEwMCVcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX2hlaWdodCA9IG9wdHMuaGVpZ2h0IHx8IDIwMDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiB0aGUgbWFwIHRvIGFwcGVuZCB0byB0aGUgRE9NLCBkZWZhdWx0cyB0byAxMDAlXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl93aWR0aCA9IG9wdHMud2lkdGggfHwgNjAwO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHpvb20gbGV2ZWwgb2YgdGhlIG1hcCwgZGVmYXVsdHMgdG8gOVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fem9vbSA9IG9wdHMuem9vbSB8fCA5O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIHVuZGVybHlpbmcgbWFwIGluc3RhbmNlLCBjcmVhdGVkIGJ5IHRoZSBleHRlcm5hbCBsaWIuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9tYXAgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGVtcG9yYXJ5IGJvb2xlYW4gdHJhY2tpbmcgd2hldGhlciBvciBub3QgdGhlIGV4dGVybmFsIEpTIGxpYnJhcnkgaXMgbG9hZGVkIChzZWUgVE9ETyBiZWxvdylcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9pc0xvYWRlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gaW52b2tlIG9uY2UgdGhlIEphdmFzY3JpcHQgaXMgbG9hZGVkXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMuX29uTG9hZGVkID0gb3B0cy5vbkxvYWRlZCB8fCBmdW5jdGlvbiAoKSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXN0b20gY29uZmlndXJhdGlvbiBvdmVycmlkZSB0byB1c2UgZm9yIHRoZSBtYXAgbWFya2Vyc1xuICAgICAqIEB0eXBlIHtPYmplY3R8RnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5fcGluQ29uZmlnID0gdHlwZW9mIG9wdHMucGluID09PSAnZnVuY3Rpb24nID8gb3B0cy5waW4gOiBPYmplY3QuYXNzaWduKE1hcFByb3ZpZGVyLkRFRkFVTFRfUElOX0NPTkZJRywgb3B0cy5waW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gdG8gdXNlIGZvciB0aGUgbWFwIG1hcmtlcnNcbiAgICogQHR5cGUge09iamVjdH1cbiAgICogVE9ETyhiaWxseSkgQ3JlYXRlIGEgY29uZmlndXJhdGlvbiBtb2RlbFxuICAgKi9cbiAgc3RhdGljIGdldCBERUZBVUxUX1BJTl9DT05GSUcgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpY29uOiB7XG4gICAgICAgIGFuY2hvcjogbnVsbCwgLy8gZS5nLiB7IHg6IDEsIHk6IDEgfVxuICAgICAgICBzdmc6IG51bGwsXG4gICAgICAgIHVybDogbnVsbCxcbiAgICAgICAgc2NhbGVkU2l6ZTogbnVsbCAvLyBlLmcuIHsgdzogMjAsIGg6IDIwIH1cbiAgICAgIH0sXG4gICAgICBsYWJlbFR5cGU6ICdudW1lcmljJ1xuICAgIH07XG4gIH1cblxuICBvbkxvYWRlZCAoY2IpIHtcbiAgICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fb25Mb2FkZWQgPSBjYjtcbiAgICBpZiAodGhpcy5pc0xvYWRlZCgpKSB7XG4gICAgICB0aGlzLl9vbkxvYWRlZCgpO1xuICAgIH1cbiAgfVxuXG4gIGlzTG9hZGVkICgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNMb2FkZWQ7XG4gIH1cblxuICBsb2FkSlMgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCBNZXRob2Q6IGxvYWRKUycpO1xuICB9XG5cbiAgbG9hZFN0YXRpYyAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmltcGxlbWVudGVkIE1ldGhvZDogbG9hZFN0YXRpYycpO1xuICB9XG5cbiAgaW5pdCAobWFwRGF0YSkge1xuICAgIC8vIFRPRE8oYmlsbHkpIFRoaXMgc2hvdWxkIGJlIGJhc2VkIG9mZiBhIHByb21pc2UgdGhhdCBnZXRzIGNyZWF0ZWQgZnJvbSBsb2FkSlNcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaW1wbGVtZW50ZWQgTWV0aG9kOiBpbml0Jyk7XG4gIH1cbn1cbiIsImltcG9ydCBNYXBQcm92aWRlciBmcm9tICcuL21hcHByb3ZpZGVyJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vLi4vZG9tL2RvbSc7XG5cbi8qIGdsb2JhbCBnb29nbGUsIGljb25DZmcgKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29vZ2xlTWFwUHJvdmlkZXIgZXh0ZW5kcyBNYXBQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRzKSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl9jbGllbnRJZCA9IG9wdHMuY2xpZW50SWQ7XG4gICAgdGhpcy5fc2lnbmF0dXJlID0gb3B0cy5zaWduYXR1cmU7XG5cbiAgICBpZiAoIXRoaXMuaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscygpICYmICF0aGlzLl9hcGlLZXkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignR29vZ2xlTWFwc1Byb3ZpZGVyOiBNaXNzaW5nIGBhcGlLZXlgIG9yIHtgY2xpZW50SWRgLCBgc2lnbmF0dXJlYH0nKTtcbiAgICB9XG4gIH1cblxuICBsb2FkSlMgKG9uTG9hZCkge1xuICAgIGlmIChET00ucXVlcnkoJyN5ZXh0LW1hcC1qcycpKSB7XG4gICAgICBpZiAodHlwZW9mIG9uTG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvbkxvYWQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWpzJyxcbiAgICAgIG9ubG9hZDogKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX29uTG9hZGVkKCk7XG4gICAgICB9LFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzcmM6IGAvL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/JHt0aGlzLmdlbmVyYXRlQ3JlZGVudGlhbHMoKX1gXG4gICAgfSk7XG5cbiAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgfVxuXG4gIGdlbmVyYXRlU3RhdGljIChtYXBEYXRhKSB7XG4gICAgbGV0IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MgPSBHb29nbGVNYXBNYXJrZXJDb25maWcuZnJvbShcbiAgICAgIG1hcERhdGEubWFwTWFya2VycyxcbiAgICAgIHRoaXMuX3BpbkNvbmZpZ1xuICAgICk7XG5cbiAgICBsZXQgZW5jb2RlZE1hcmtlcnMgPSBHb29nbGVNYXBNYXJrZXJDb25maWcuc2VyaWFsaXplKGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MpO1xuICAgIHJldHVybiBgXG4gICAgICA8aW1nIHNyYz1cIi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9zdGF0aWNtYXA/JHtlbmNvZGVkTWFya2Vyc30mc2l6ZT0ke3RoaXMuX3dpZHRofXgke3RoaXMuX2hlaWdodH0mJHt0aGlzLmdlbmVyYXRlQ3JlZGVudGlhbHMoKX1cIj5gO1xuICB9XG5cbiAgZ2VuZXJhdGVDcmVkZW50aWFscyAoKSB7XG4gICAgaWYgKHRoaXMuaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscygpKSB7XG4gICAgICByZXR1cm4gYGNsaWVudD0ke3RoaXMuX2NsaWVudElkfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBga2V5PSR7dGhpcy5fYXBpS2V5fWA7XG4gICAgfVxuICB9XG5cbiAgaGFzVmFsaWRDbGllbnRDcmVkZW50aWFscyAoKSB7XG4gICAgLy8gU2lnbmF0dXJlIGlzIG9ubHkgcmVxdWlyZWQgaWYgbWFwIGlzIHN0YXRpY1xuICAgIHJldHVybiB0aGlzLl9jbGllbnRJZCAmJiAodGhpcy5fc2lnbmF0dXJlIHx8ICF0aGlzLl9pc1N0YXRpYyk7XG4gIH1cblxuICBpbml0IChlbCwgbWFwRGF0YSkge1xuICAgIGlmICghbWFwRGF0YSB8fCBtYXBEYXRhLm1hcE1hcmtlcnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHRoaXMuX21hcCA9IG51bGw7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBOT1RFKGJpbGx5KSBUaGlzIHRpbWVvdXQgaXMgYSBoYWNrIGZvciBkZWFsaW5nIHdpdGggYXN5bmMgbmF0dXJlLlxuICAgIC8vIE9ubHkgaGVyZSBmb3IgZGVtbyBwdXJwb3Nlcywgc28gd2UnbGwgZml4IGxhdGVyLlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0IGNvbnRhaW5lciA9IERPTS5xdWVyeShlbCk7XG4gICAgICBET00uY3NzKGNvbnRhaW5lciwge1xuICAgICAgICB3aWR0aDogdGhpcy5fd2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5faGVpZ2h0XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGNvbnRhaW5lciwge1xuICAgICAgICB6b29tOiB0aGlzLl96b29tXG4gICAgICB9KTtcblxuICAgICAgLy8gQXBwbHkgb3VyIHNlYXJjaCBkYXRhIHRvIG91ciBHb29nbGVNYXBcbiAgICAgIGxldCBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG4gICAgICBsZXQgZ29vZ2xlTWFwTWFya2VyQ29uZmlncyA9IEdvb2dsZU1hcE1hcmtlckNvbmZpZy5mcm9tKFxuICAgICAgICBtYXBEYXRhLm1hcE1hcmtlcnMsXG4gICAgICAgIHRoaXMuX3BpbkNvbmZpZyxcbiAgICAgICAgdGhpcy5tYXApO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoZ29vZ2xlTWFwTWFya2VyQ29uZmlnc1tpXSk7XG4gICAgICAgIGJvdW5kcy5leHRlbmQobWFya2VyLnBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKGJvdW5kcyk7XG4gICAgfSwgMTAwKTtcbiAgfVxufVxuXG4vLyBUT0RPKGJpbGx5KSBNb3ZlIHRvIG93biBjbGFzc1xuY2xhc3MgR29vZ2xlTWFwTWFya2VyQ29uZmlnIHtcbiAgY29uc3RydWN0b3IgKG9wdHMpIHtcbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgZ29vZ2xlIG1hcCwgdGhhdCB0aGUgbWFya2VyIGlzIGFwcGVuZGVkIHRvXG4gICAgICogQHR5cGUge0dvb2dsZU1hcH1cbiAgICAgKi9cbiAgICB0aGlzLm1hcCA9IG9wdHMubWFwIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb29yZGluYXRlcyBvZiB0aGUgbWFya2VyIChsYXQvbG5nKVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5wb3NpdGlvbiA9IG9wdHMucG9zaXRpb24gfHwge1xuICAgICAgbGF0OiB1bmRlZmluZWQsXG4gICAgICBsbmc6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcHJvcGVydGllcy9zZXR0aW5ncyBvZiB0aGUgaWNvbiB1c2VkIGZvciB0aGUgbWFya2VyXG4gICAgICogZS5nLiB7XG4gICAgICogICAgICAgIGFuY2hvcjogeyB4OiAwLCB5OiAwIH1cbiAgICAgKiAgICAgICAgdXJsOiAncGF0aC90by91cmwuanBnJ1xuICAgICAqICAgICAgICBzY2FsZWRTaXplOiB7IHc6IDAsIGg6IDAgfVxuICAgICAqICAgICAgIH1cbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5pY29uID0gb3B0cy5pY29uIHx8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCBvZiB0aGUgbWFya2VyIHRvIHVzZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5sYWJlbCA9IG9wdHMubGFiZWwgfHwgdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgYW4gYXJyYXkgb2YgbWFya2VyIGNvbmZpZ3NcbiAgICogQHBhcmFtIHtBcnJheS48R29vZ2xlTWFwTWFya2VyQ29uZmlnPn0gZ29vZ2xlTWFwTWFya2VyQ29uZmlnc1xuICAgKiBAcmV0dXJucyB7QXJyYXkuPFN0cmluZz59XG4gICAqL1xuICBzdGF0aWMgc2VyaWFsaXplIChnb29nbGVNYXBNYXJrZXJDb25maWdzKSB7XG4gICAgbGV0IHNlcmlhbGl6ZWRNYXJrZXJzID0gW107XG4gICAgZ29vZ2xlTWFwTWFya2VyQ29uZmlncy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIHNlcmlhbGl6ZWRNYXJrZXJzLnB1c2goYG1hcmtlcnM9bGFiZWw6JHttYXJrZXIubGFiZWx9fCR7bWFya2VyLnBvc2l0aW9uLmxhdH0sJHttYXJrZXIucG9zaXRpb24ubG5nfWApO1xuICAgIH0pO1xuICAgIHJldHVybiBzZXJpYWxpemVkTWFya2Vycy5qb2luKCcmJyk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdGhlIHN0b3JhZ2UgZGF0YSBtb2RlbCBvZiBtYXJrZXJzIGludG8gR29vZ2xlQVBJTWFya2VyXG4gICAqIEBwYXJhbSB7R29vZ2xlTWFwfSBBIHJlZmVyZW5jZSB0byB0aGUgZ29vZ2xlIG1hcCB0byBhcHBseSB0aGUgbWFya2VyIHRvXG4gICAqIEBwYXJhbSB7QXJyYXkuPE9iamVjdD59IG1hcmtlcnMgVGhlIGRhdGEgb2YgdGhlIG1hcmtlclxuICAgKiBAcGFyYW0ge09iamVjdH0gcGluQ29uZmlnIFRoZSBjb25maWd1cmF0aW9uIHRvIGFwcGx5IHRvIHRoZSBtYXJrZXJcbiAgICogQHJldHVybnMge0FycmF5LjxHb29nbGVNYXBNYXJrZXJDb25maWc+fVxuICAgKi9cbiAgc3RhdGljIGZyb20gKG1hcmtlcnMsIHBpbkNvbmZpZywgbWFwKSB7XG4gICAgbGV0IGdvb2dsZU1hcE1hcmtlckNvbmZpZ3MgPSBbXTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobWFya2VycykpIHtcbiAgICAgIG1hcmtlcnMgPSBbbWFya2Vyc107XG4gICAgfVxuXG4gICAgbWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIC8vIFN1cHBvcnQgY29uZmlndXJhdGlvbiBhcyBhIGZ1bmN0aW9uXG4gICAgICBpZiAodHlwZW9mIHBpbkNvbmZpZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwaW5Db25maWcgPSBwaW5Db25maWcoXG4gICAgICAgICAgbWFya2VyLml0ZW0sXG4gICAgICAgICAgTWFwUHJvdmlkZXIuREVGQVVMVF9QSU5fQ09ORklHLFxuICAgICAgICAgIG1hcmtlcik7XG4gICAgICB9XG5cbiAgICAgIC8vIFRyYW5zZm9ybSBvdXIgQ29uZmlndXJhdGlvbiBPYmplY3QgaW50byB0aGUgZXhwZWN0ZWRcbiAgICAgIC8vIEdvb2dsZSBBUEkgZm9ybWF0LlxuICAgICAgbGV0IGljb24gPSB7fTtcbiAgICAgIGlmIChwaW5Db25maWcuYW5jaG9yKSB7XG4gICAgICAgIGljb24uYW5jaG9yID0gZ29vZ2xlLm1hcHMuUG9pbnQocGluQ29uZmlnLmFuY2hvci54LCBwaW5Db25maWcuYW5jaG9yLnkpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGluQ29uZmlnLnNjYWxlZFNpemUpIHtcbiAgICAgICAgaWNvbi5zY2FsZWRTaXplID0gZ29vZ2xlLm1hcHMuU2l6ZShwaW5Db25maWcuc2NhbGVkU2l6ZS53LCBwaW5Db25maWcuc2NhbGVkU2l6ZS5oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpbkNvbmZpZy51cmwpIHtcbiAgICAgICAgaWNvbi51cmwgPSBpY29uQ2ZnLnVybDtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpbkNvbmZpZy5zdmcpIHtcbiAgICAgICAgaWNvbi51cmwgPSBgZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsICR7ZW5jb2RlVVJJQ29tcG9uZW50KHBpbkNvbmZpZy5zdmcpfWA7XG4gICAgICB9XG5cbiAgICAgIGxldCBsYWJlbDtcbiAgICAgIGlmIChwaW5Db25maWcubGFiZWwpIHtcbiAgICAgICAgbGFiZWwgPSBwaW5Db25maWcubGFiZWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYWJlbCA9IG1hcmtlci5sYWJlbC50b1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICAvLyBOT1RFKGJpbGx5KSBHb29nbGUgbWFwcyBkb2Vzbid0IGhhbmRsZSBlbXB0eSBpY29uIG9iamVjdHMgbmljZWx5XG4gICAgICAvLyBNYWtlIGdvb2dsZSBtYXBzIGhhcHB5IGlmIG5vIHNldHRpbmdzIGZvciBpY29uIGFyZSBwcm92aWRlZDtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhpY29uKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaWNvbiA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgZ29vZ2xlTWFwTWFya2VyQ29uZmlncy5wdXNoKFxuICAgICAgICBuZXcgR29vZ2xlTWFwTWFya2VyQ29uZmlnKHtcbiAgICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgbGF0OiBtYXJrZXIubGF0aXR1ZGUsXG4gICAgICAgICAgICBsbmc6IG1hcmtlci5sb25naXR1ZGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGljb246IGljb24sXG4gICAgICAgICAgbGFiZWw6IGxhYmVsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGdvb2dsZU1hcE1hcmtlckNvbmZpZ3M7XG4gIH1cbn1cbiIsImltcG9ydCBNYXBQcm92aWRlciBmcm9tICcuL21hcHByb3ZpZGVyJztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vLi4vZG9tL2RvbSc7XG5cbi8qIGdsb2JhbCBtYXBib3hnbCAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBCb3hNYXBQcm92aWRlciBleHRlbmRzIE1hcFByb3ZpZGVyIHtcbiAgLyoqXG4gICAqIExvYWQgdGhlIGV4dGVybmFsIEpTIExpYnJhcnlcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25Mb2FkIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRvIGludm9rZSBvbmNlIHRoZSBKUyBpcyBsb2FkZWQuXG4gICAqL1xuICBsb2FkSlMgKG9uTG9hZCkge1xuICAgIGxldCBzY3JpcHQgPSBET00uY3JlYXRlRWwoJ3NjcmlwdCcsIHtcbiAgICAgIGlkOiAneWV4dC1tYXAtanMnLFxuICAgICAgb25sb2FkOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgbWFwYm94Z2wuYWNjZXNzVG9rZW4gPSB0aGlzLl9hcGlLZXk7XG5cbiAgICAgICAgb25Mb2FkKCk7XG4gICAgICB9LFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzcmM6ICdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MC40NC4xL21hcGJveC1nbC5qcydcbiAgICB9KTtcblxuICAgIGxldCBjc3MgPSBET00uY3JlYXRlRWwoJ2xpbmsnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWNzcycsXG4gICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgIGhyZWY6ICdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MC40NC4xL21hcGJveC1nbC5jc3MnXG4gICAgfSk7XG5cbiAgICBET00uYXBwZW5kKCdib2R5JywgY3NzKTtcbiAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgfVxuXG4gIGdlbmVyYXRlU3RhdGljIChtYXBEYXRhKSB7XG4gICAgbGV0IGVuY29kZWRNYXJrZXJzID0gJyc7XG4gICAgbGV0IG1hcE1hcmtlcnMgPSBtYXBEYXRhLm1hcE1hcmtlcnM7XG4gICAgbGV0IGNlbnRlciA9IG1hcERhdGEubWFwQ2VudGVyO1xuICAgIGxldCB3aWR0aCA9IHRoaXMuX3dpZHRoIHx8IDYwMDtcbiAgICBsZXQgaGVpZ2h0ID0gdGhpcy5faGVpZ2h0IHx8IDIwMDtcbiAgICBsZXQgem9vbSA9IHRoaXMuX3pvb20gfHwgOTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFwTWFya2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG1tID0gbWFwTWFya2Vyc1tpXTtcbiAgICAgIGlmIChpID4gMCkge1xuICAgICAgICBlbmNvZGVkTWFya2VycyArPSAnLCc7XG4gICAgICB9XG4gICAgICBlbmNvZGVkTWFya2VycyArPSBgcGluLXMtJHttbS5sYWJlbH0oJHttbS5sb25naXR1ZGV9LCR7bW0ubGF0aXR1ZGV9KWA7XG4gICAgfVxuICAgIHJldHVybiBgPGltZyBzcmM9XCJodHRwczovL2FwaS5tYXBib3guY29tL3N0eWxlcy92MS9tYXBib3gvc3RyZWV0cy12MTEvc3RhdGljLyR7ZW5jb2RlZE1hcmtlcnN9LyR7Y2VudGVyLmxvbmdpdHVkZX0sJHtjZW50ZXIubGF0aXR1ZGV9LCR7em9vbX0vYXV0by8ke3dpZHRofXgke2hlaWdodH0/YWNjZXNzX3Rva2VuPSR7dGhpcy5fYXBpS2V5fVwiPmA7XG4gIH1cblxuICBpbml0IChlbCwgbWFwRGF0YSkge1xuICAgIGlmICghbWFwRGF0YSB8fCBtYXBEYXRhLm1hcE1hcmtlcnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHRoaXMuX21hcCA9IG51bGw7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBsZXQgY29udGFpbmVyID0gRE9NLnF1ZXJ5KGVsKTtcbiAgICBET00uY3NzKGNvbnRhaW5lciwge1xuICAgICAgd2lkdGg6IHRoaXMuX3dpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLl9oZWlnaHRcbiAgICB9KTtcblxuICAgIHRoaXMuX21hcCA9IG5ldyBtYXBib3hnbC5NYXAoe1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICB6b29tOiB0aGlzLl96b29tLFxuICAgICAgc3R5bGU6ICdtYXBib3g6Ly9zdHlsZXMvbWFwYm94L3N0cmVldHMtdjknLFxuICAgICAgY2VudGVyOiBbbWFwRGF0YS5tYXBDZW50ZXIubG9uZ2l0dWRlLCBtYXBEYXRhLm1hcENlbnRlci5sYXRpdHVkZV1cbiAgICB9KTtcblxuICAgIHRoaXMuX21hcC5vbignbG9hZCcsICgpID0+IHtcbiAgICAgIGlmIChtYXBEYXRhICYmIG1hcERhdGEubWFwTWFya2Vycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBtYXJrZXJzID0gbWFwRGF0YS5tYXBNYXJrZXJzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcmtlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgY29vcmRzID0gbmV3IG1hcGJveGdsLkxuZ0xhdChcbiAgICAgICAgICAgIG1hcmtlcnNbaV0ubG9uZ2l0dWRlLFxuICAgICAgICAgICAgbWFya2Vyc1tpXS5sYXRpdHVkZSk7XG5cbiAgICAgICAgICBsZXQgbWFya2VyID0gbmV3IG1hcGJveGdsLk1hcmtlcigpLnNldExuZ0xhdChjb29yZHMpO1xuICAgICAgICAgIG1hcmtlci5hZGRUbyh0aGlzLl9tYXApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuaW1wb3J0IEdvb2dsZU1hcFByb3ZpZGVyIGZyb20gJy4vcHJvdmlkZXJzL2dvb2dsZW1hcHByb3ZpZGVyJztcbmltcG9ydCBNYXBCb3hNYXBQcm92aWRlciBmcm9tICcuL3Byb3ZpZGVycy9tYXBib3htYXBwcm92aWRlcic7XG5cbmNvbnN0IFByb3ZpZGVyVHlwZXMgPSB7XG4gICdnb29nbGUnOiBHb29nbGVNYXBQcm92aWRlcixcbiAgJ21hcGJveCc6IE1hcEJveE1hcFByb3ZpZGVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICAvKipcbiAgICAgKiBCaW5kIHRoaXMgY29tcG9uZW50IHRvIGxpc3RlbiB0byB0aGUgc3RvcmFnZSBiYXNlZCBvbiB0aGlzIGtleVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSAndmVydGljYWxSZXN1bHRzJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IHRlbXBsYXRlIHRvIHVzZSB0byByZW5kZXIgdGhpcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncmVzdWx0cy9tYXAnO1xuXG4gICAgLyoqXG4gICAgICogQW4gYWxpYXNlZCB1c2VkIHRvIGRldGVybWluZSB0aGUgdHlwZSBvZiBtYXAgcHJvdmlkZXIgdG8gdXNlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9tYXBQcm92aWRlciA9IG9wdHMubWFwUHJvdmlkZXI7XG4gICAgaWYgKCF0aGlzLl9tYXBQcm92aWRlciB8fCAhKHRoaXMuX21hcFByb3ZpZGVyLnRvTG93ZXJDYXNlKCkgaW4gUHJvdmlkZXJUeXBlcykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWFwQ29tcG9uZW50OiBJbnZhbGlkIE1hcCBQcm92aWRlcjsgbXVzdCBiZSBgZ29vZ2xlYCBvciBgbWFwQm94YCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIGluZGljYXRpb24gb2Ygd2hldGhlciBvciBub3QgdG8gdXNlIGEgc3RhdGljIG9yIGR5bmFtaWMgbWFwXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5faXNTdGF0aWMgPSBvcHRzLmlzU3RhdGljIHx8IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gYW4gaW5zdGFuY2Ugb2YgdGhlIHtNYXBQcm92aWRlcn0gdGhhdCdzIGNvbnN0cnVjdGVkXG4gICAgICogQHR5cGUge01hcFByb3ZpZGVyfVxuICAgICAqL1xuICAgIHRoaXMuX21hcCA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnTWFwJztcbiAgfVxuXG4gIC8vIFRPRE8oYmlsbHkpIE1ha2UgUHJvdmlkZXJUeXBlcyBhIGZhY3RvcnkgY2xhc3NcbiAgZ2V0UHJvdmlkZXJJbnN0YW5jZSAodHlwZSkge1xuICAgIHJldHVybiBuZXcgUHJvdmlkZXJUeXBlc1t0eXBlLnRvTG93ZXJDYXNlKCldKHRoaXMuX29wdHMpO1xuICB9XG5cbiAgb25DcmVhdGUgKCkge1xuICAgIHRoaXMuX21hcCA9IHRoaXMuZ2V0UHJvdmlkZXJJbnN0YW5jZSh0aGlzLl9tYXBQcm92aWRlcik7XG4gICAgbGV0IG1hcERhdGEgPSB0aGlzLmdldFN0YXRlKCdtYXAnKTtcbiAgICBpZiAobWFwRGF0YSA9PT0gdW5kZWZpbmVkICYmIHRoaXMuX2lzU3RhdGljKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTdGF0aWMpIHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIFRoZSBleGlzdGluZyB0ZW1wbGF0ZSBzaG91bGQganVzdCB0YWtlIGluIHRoZSBtYXAgYGltZ1VSTGAgYXMgZGF0YVxuICAgICAgLy8gSW5zdGVhZCBvZiBvdmVycmlkaW5nIHRoZSB0ZW1wbGF0ZSBsaWtlIHNvLCBidXQgTkJEIGZvciBub3cuXG4gICAgICB0aGlzLnNldFRlbXBsYXRlKHRoaXMuX21hcC5nZW5lcmF0ZVN0YXRpYyhtYXBEYXRhKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLl9tYXAubG9hZEpTKCk7XG4gIH1cblxuICBvbk1vdW50ICgpIHtcbiAgICB0aGlzLl9tYXAub25Mb2FkZWQoKCkgPT4ge1xuICAgICAgdGhpcy5fbWFwLmluaXQodGhpcy5fY29udGFpbmVyLCB0aGlzLmdldFN0YXRlKCdtYXAnKSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRTdGF0ZSAoZGF0YSwgdmFsKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKGRhdGEsIHZhbCk7XG4gIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vZXZlbnRyZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9wZW9wbGVyZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgTWFwQ29tcG9uZW50IGZyb20gJy4uL21hcC9tYXBjb21wb25lbnQnO1xuXG5jb25zdCBSZXN1bHRUeXBlID0ge1xuICBFVkVOVDogJ2V2ZW50JyxcbiAgTE9DQVRJT046ICdsb2NhdGlvbicsXG4gIFBFT1BMRTogJ3Blb3BsZSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdHNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gJ3ZlcnRpY2FsUmVzdWx0cyc7XG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3Jlc3VsdHMvcmVzdWx0cyc7XG4gICAgdGhpcy5saW1pdCA9IG9wdHMubGltaXQgfHwgNTtcbiAgICB0aGlzLl9pdGVtQ29uZmlnID0ge1xuICAgICAgZ2xvYmFsOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH0sXG4gICAgICBbRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlXToge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9LFxuICAgICAgW0xvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZV06IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIFtQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlXToge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChvcHRzLnJlbmRlckl0ZW0gPT09IHVuZGVmaW5lZCAmJiBvcHRzLl9wYXJlbnRPcHRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdHMucmVuZGVySXRlbSA9IG9wdHMuX3BhcmVudE9wdHMucmVuZGVySXRlbTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5pdGVtVGVtcGxhdGUgPT09IHVuZGVmaW5lZCAmJiBvcHRzLl9wYXJlbnRPcHRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdHMuaXRlbVRlbXBsYXRlID0gb3B0cy5fcGFyZW50T3B0cy5pdGVtVGVtcGxhdGU7XG4gICAgfVxuXG4gICAgdGhpcy5jb25maWd1cmVJdGVtKHtcbiAgICAgIHJlbmRlcjogb3B0cy5yZW5kZXJJdGVtLFxuICAgICAgdGVtcGxhdGU6IG9wdHMuaXRlbVRlbXBsYXRlXG4gICAgfSk7XG4gIH1cblxuICBtb3VudCAoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZ2V0U3RhdGUoKSkubGVuZ3RoID4gMCkge1xuICAgICAgc3VwZXIubW91bnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFN0YXRlIChkYXRhLCB2YWwpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICBpbmNsdWRlTWFwOiB0aGlzLl9vcHRzLmluY2x1ZGVNYXAsXG4gICAgICBtYXBDb25maWc6IHRoaXMuX29wdHMubWFwQ29uZmlnXG4gICAgfSksIHZhbCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnVmVydGljYWxSZXN1bHRzJztcbiAgfVxuXG4gIGNvbmZpZ3VyZUl0ZW0gKGNvbmZpZykge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5faXRlbUNvbmZpZy5nbG9iYWwucmVuZGVyID0gY29uZmlnLnJlbmRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbmZpZy5yZW5kZXIpIHtcbiAgICAgICAgdGhpcy5zZXRJdGVtUmVuZGVyKGtleSwgY29uZmlnLnJlbmRlcltrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2l0ZW1Db25maWcuZ2xvYmFsLnRlbXBsYXRlID0gY29uZmlnLnRlbXBsYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29uZmlnLnRlbXBsYXRlKSB7XG4gICAgICAgIHRoaXMuc2V0SXRlbVRlbXBsYXRlKGtleSwgY29uZmlnLnRlbXBsYXRlW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldEl0ZW1UZW1wbGF0ZSAodHlwZSwgdGVtcGxhdGUpIHtcbiAgICBsZXQgY2xhenogPSB0aGlzLmdldEl0ZW1Db21wb25lbnQodHlwZSk7XG4gICAgdGhpcy5faXRlbUNvbmZpZ1tjbGF6ei50eXBlXS50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICB9XG5cbiAgc2V0SXRlbVJlbmRlciAodHlwZSwgcmVuZGVyKSB7XG4gICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KHR5cGUpO1xuICAgIHRoaXMuX2l0ZW1Db25maWdbY2xhenoudHlwZV0ucmVuZGVyID0gcmVuZGVyO1xuICB9XG5cbiAgZ2V0SXRlbUNvbXBvbmVudCAodHlwZSkge1xuICAgIGxldCBjb21wID0gUmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFJlc3VsdFR5cGUuRVZFTlQ6XG4gICAgICAgIGNvbXAgPSBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUmVzdWx0VHlwZS5MT0NBVElPTjpcbiAgICAgICAgY29tcCA9IExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSZXN1bHRUeXBlLlBFT1BMRTpcbiAgICAgICAgY29tcCA9IFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcDtcbiAgfVxuXG4gIGFkZENoaWxkIChkYXRhLCB0eXBlLCBvcHRzKSB7XG4gICAgLy8gVE9ETyhiaWxseSkgUmVmYWN0b3IgdGhlIHdheSBjb25maWd1cmF0aW9uIGFuZCBkYXRhIGZsb3dzXG4gICAgLy8gdGhyb3VnaCB0b3AgbGV2ZWwgY29tcG9uZW50cyB0byBjaGlsZCBjb21wb25lbnRzLlxuICAgIGlmICh0eXBlID09PSBSZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlKSB7XG4gICAgICBsZXQgY2xhenogPSB0aGlzLmdldEl0ZW1Db21wb25lbnQoZGF0YS50eXBlKTtcbiAgICAgIGlmIChjbGF6eikge1xuICAgICAgICB0eXBlID0gY2xhenoudHlwZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IE1hcENvbXBvbmVudC50eXBlKSB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICBtYXA6IGRhdGFcbiAgICAgIH07XG4gICAgICBvcHRzID0gT2JqZWN0LmFzc2lnbih0aGlzLl9vcHRzLm1hcENvbmZpZywgb3B0cyk7XG4gICAgICByZXR1cm4gc3VwZXIuYWRkQ2hpbGQoZGF0YSwgdHlwZSwgb3B0cyk7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdGhlIHByb3BlciBpdGVtIHJlbmRlcnMgdG8gdGhlIHRoZSBjb21wb25lbnRzXG4gICAgLy8gaGF2ZSBqdXN0IGJlZW4gY29uc3RydWN0ZWQuIFByaW9yaXRpemUgZ2xvYmFsIG92ZXIgaW5kaXZpZHVhbCBpdGVtcy5cbiAgICBsZXQgY29tcCA9IHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUsIG9wdHMpO1xuICAgIGxldCBnbG9iYWxDb25maWcgPSB0aGlzLl9pdGVtQ29uZmlnLmdsb2JhbDtcbiAgICBsZXQgaXRlbUNvbmZpZyA9IHRoaXMuX2l0ZW1Db25maWdbY29tcC50eXBlXTtcbiAgICBsZXQgaGFzR2xvYmFsUmVuZGVyID0gdHlwZW9mIGdsb2JhbENvbmZpZy5yZW5kZXIgPT09ICdmdW5jdGlvbic7XG4gICAgbGV0IGhhc0dsb2JhbFRlbXBsYXRlID0gdHlwZW9mIGdsb2JhbENvbmZpZy50ZW1wbGF0ZSA9PT0gJ3N0cmluZyc7XG5cbiAgICBpZiAoaGFzR2xvYmFsUmVuZGVyKSB7XG4gICAgICBjb21wLnNldFJlbmRlcihnbG9iYWxDb25maWcucmVuZGVyKTtcbiAgICB9XG5cbiAgICBpZiAoaGFzR2xvYmFsVGVtcGxhdGUpIHtcbiAgICAgIGNvbXAuc2V0VGVtcGxhdGUoZ2xvYmFsQ29uZmlnLnRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICBpZiAoIWl0ZW1Db25maWcpIHtcbiAgICAgIHJldHVybiBjb21wO1xuICAgIH1cblxuICAgIGlmICghaGFzR2xvYmFsUmVuZGVyICYmIGl0ZW1Db25maWcucmVuZGVyKSB7XG4gICAgICBjb21wLnNldFJlbmRlcihpdGVtQ29uZmlnLnJlbmRlcik7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdGVtcGxhdGUgc3BlY2lmaWMgc2l0dWF0aW9uXG4gICAgaWYgKCFoYXNHbG9iYWxUZW1wbGF0ZSAmJiBpdGVtQ29uZmlnLnRlbXBsYXRlKSB7XG4gICAgICBjb21wLnNldFRlbXBsYXRlKGl0ZW1Db25maWcudGVtcGxhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gY29tcDtcbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9ICd1bml2ZXJzYWxSZXN1bHRzJztcbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncmVzdWx0cy91bml2ZXJzYWxyZXN1bHRzJztcbiAgICB0aGlzLl9saW1pdCA9IG9wdHMubGltaXQgfHwgMTA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUgKCkge1xuICAgIHJldHVybiAnVW5pdmVyc2FsUmVzdWx0cyc7XG4gIH1cblxuICBpbml0IChvcHRzKSB7XG4gICAgc3VwZXIuaW5pdChvcHRzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZENoaWxkIChkYXRhID0ge30sIHR5cGUpIHtcbiAgICBsZXQgb3B0cyA9IHRoaXMuZ2V0Q2hpbGRDb25maWcoW2RhdGFbJ3ZlcnRpY2FsQ29uZmlnSWQnXV0pO1xuICAgIHJldHVybiBzdXBlci5hZGRDaGlsZChkYXRhLCB0eXBlLCBvcHRzKTtcbiAgfVxuXG4gIGdldENoaWxkQ29uZmlnIChjb25maWdJZCkge1xuICAgIGxldCBjb25maWcgPSB0aGlzLl9vcHRzLmNvbmZpZztcbiAgICBpZiAoY29uZmlnID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX29wdHNbJ2NvbmZpZyddW2NvbmZpZ0lkXSB8fCB0aGlzLl9vcHRzWydjb25maWcnXTtcbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9ICd1bml2ZXJzYWxSZXN1bHRzJztcblxuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdxdWVzdGlvbnMvc3VibWlzc2lvbic7XG5cbiAgICAvKipcbiAgICAgKiBRdWVzdGlvbiBzdWJtaXNzaW9uIGlzIGJhc2VkIG9uIGEgZm9ybSBhcyBjb250ZXh0LlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBuYXRpdmUgZm9ybSBub2RlIHdpdGhpbiBjb250YWluZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9mb3JtRWwgPSBvcHRzLmZvcm1TZWxlY3RvciB8fCAnZm9ybSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgZS1tYWlsIGFkZHJlc3MgaW5wdXRcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gYEVtYWlsIEFkZHJlc3NgXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9lbWFpbExhYmVsID0gb3B0cy5lbWFpbExhYmVsIHx8ICcqRW1haWwgQWRkcmVzczonO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIG5hbWUgaW5wdXRcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gYE5hbWVgXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9uYW1lTGFiZWwgPSBvcHRzLm5hbWVMYWJlbCB8fCAnTmFtZTonO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIFF1ZXN0aW9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIGBXaGF0IGlzIHlvdXIgcXVlc3Rpb24/YFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fcXVlc3Rpb25MYWJlbCA9IG9wdHMucXVlc3Rpb25MYWJlbCB8fCAnKldoYXQgaXMgeW91ciBxdWVzdGlvbj8nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIFByaXZhY3kgUG9saWN5XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIGBXaGF0IGlzIHlvdXIgcXVlc3Rpb24/YFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fcHJpdmFjeVBvbGljeUxhYmVsID0gb3B0cy5wcml2YWN5UG9saWN5TGFiZWwgfHwgJ0kgYWdyZWUgdG8gb3VyIFByaXZhY3kgUG9saWN5Oic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgU3VibWl0IGJ1dHRvblxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBgU3VibWl0P2BcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2J1dHRvbkxhYmVsID0gb3B0cy5idXR0b25MYWJlbCB8fCAnU3VibWl0JztcbiAgfVxuXG4gIGJlZm9yZU1vdW50ICgpIHtcbiAgICAvLyBPbmx5IG1vdW50IG91ciBjb21wb25lbnQgaWYgdGhlIHF1ZXJ5IGhhcyBiZWVuIHRyaWdnZXJlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0aGlzLmdldFN0YXRlKCdoYXNRdWVyaWVkJykgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uTW91bnQgKCkge1xuICAgIHRoaXMuaW5pdFN1Ym1pdCh0aGlzLl9mb3JtRWwpO1xuICB9XG5cbiAgaW5pdFN1Ym1pdCAoZm9ybVNlbGVjdG9yKSB7XG4gICAgdGhpcy5fZm9ybUVsID0gZm9ybVNlbGVjdG9yO1xuXG4gICAgbGV0IGZvcm0gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9mb3JtRWwpO1xuXG4gICAgRE9NLm9uKGZvcm0sICdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gVE9ETyhiaWxseSkgU2VyaWFsaXplIGZvcm1cbiAgICAgIC8vIHRoaXMuY29yZS5zdWJtaXRRdWVzdGlvbihmb3JtKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdRQVN1Ym1pc3Npb24nO1xuICB9XG5cbiAgc2V0U3RhdGUgKGRhdGEsIHZhbCkge1xuICAgIC8vIFNpbmNlIHdlJ3JlIGJpbmRpbmcgdG8gc2VhcmNoIHJlc3VsdHMsXG4gICAgLy8gYW5kIHdlIG9ubHkgd2FudCB0byBzaG93IHRoZSBRQSBzdWJtaXNzaW9uXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKHtcbiAgICAgIGhhc1F1ZXJpZWQ6IGRhdGEuc2VjdGlvbnMgIT09IHVuZGVmaW5lZCxcbiAgICAgIGVtYWlsTGFiZWw6IHRoaXMuX2VtYWlsTGFiZWwsXG4gICAgICBuYW1lTGFiZWw6IHRoaXMuX25hbWVMYWJlbCxcbiAgICAgIHF1ZXN0aW9uTGFiZWw6IHRoaXMuX3F1ZXN0aW9uTGFiZWwsXG4gICAgICBwcml2YWN5UG9saWN5TGFiZWw6IHRoaXMuX3ByaXZhY3lQb2xpY3lMYWJlbCxcbiAgICAgIGJ1dHRvbkxhYmVsOiB0aGlzLl9idXR0b25MYWJlbCxcbiAgICAgIHF1ZXN0aW9uOiBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKS5nZXQoJ3F1ZXJ5JylcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi9jb21wb25lbnRtYW5hZ2VyJztcblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XG5cbmltcG9ydCBOYXZpZ2F0aW9uQ29tcG9uZW50IGZyb20gJy4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uY29tcG9uZW50JztcblxuaW1wb3J0IFNlYXJjaENvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9zZWFyY2hjb21wb25lbnQnO1xuaW1wb3J0IEZpbHRlclBpY2tlckNvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9maWx0ZXJwaWNrZXJjb21wb25lbnQnO1xuaW1wb3J0IEF1dG9Db21wbGV0ZUNvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9hdXRvY29tcGxldGVjb21wb25lbnQnO1xuXG5pbXBvcnQgRGlyZWN0QW5zd2VyQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9kaXJlY3RhbnN3ZXJjb21wb25lbnQnO1xuaW1wb3J0IFJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Jlc3VsdHNjb21wb25lbnQnO1xuaW1wb3J0IFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHNjb21wb25lbnQnO1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcGVvcGxlcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5pbXBvcnQgTWFwQ29tcG9uZW50IGZyb20gJy4vbWFwL21hcGNvbXBvbmVudCc7XG5cbmltcG9ydCBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgZnJvbSAnLi9xdWVzdGlvbnMvcXVlc3Rpb25zdWJtaXNzaW9uY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9NQU5BR0VSID0gbmV3IENvbXBvbmVudE1hbmFnZXIoKVxuLy8gQ29yZSBDb21wb25lbnRcbiAgLnJlZ2lzdGVyKENvbXBvbmVudClcblxuLy8gTmF2aWdhdGlvbiBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihOYXZpZ2F0aW9uQ29tcG9uZW50KVxuXG4vLyBTZWFyY2ggQ29tcG9uZW50c1xuICAucmVnaXN0ZXIoU2VhcmNoQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRmlsdGVyUGlja2VyQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoQXV0b0NvbXBsZXRlQ29tcG9uZW50KVxuXG4vLyBSZXN1bHRzIENvbXBvbmVudHNcbiAgLnJlZ2lzdGVyKERpcmVjdEFuc3dlckNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQpXG4gIC5yZWdpc3RlcihSZXN1bHRzQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoUmVzdWx0c0l0ZW1Db21wb25lbnQpXG4gIC5yZWdpc3RlcihMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50KVxuICAucmVnaXN0ZXIoRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudClcbiAgLnJlZ2lzdGVyKFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50KVxuXG4gIC5yZWdpc3RlcihNYXBDb21wb25lbnQpXG5cbi8vIFF1ZXN0aW9ucyBDb21wb25lbnRzXG4gIC5yZWdpc3RlcihRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQpO1xuIiwiaW1wb3J0IERPTSBmcm9tICcuLi9kb20vZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVMb2FkZXIge1xuICBjb25zdHJ1Y3RvciAob3B0cyA9IHt9KSB7XG4gICAgaWYgKCFUZW1wbGF0ZUxvYWRlci5zZXRJbnN0YW5jZSh0aGlzKSkge1xuICAgICAgcmV0dXJuIFRlbXBsYXRlTG9hZGVyLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgbGV0IHBhcmFtcyA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKCkpLnNlYXJjaFBhcmFtcztcbiAgICBsZXQgaXNMb2NhbCA9IHBhcmFtcy5nZXQoJ2xvY2FsJyk7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZVVybCA9IG9wdHMudGVtcGxhdGVVcmwgfHwgKGlzTG9jYWwgPyAnLi4vZGlzdC9hbnN3ZXJzdGVtcGxhdGVzLmNvbXBpbGVkLm1pbi5qcycgOiAnaHR0cHM6Ly9hc3NldHMuc2l0ZXNjZG4ubmV0L2Fuc3dlcnMvYW5zd2Vyc3RlbXBsYXRlcy5jb21waWxlZC5taW4uanMnKTtcbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB7fTtcbiAgICB0aGlzLl9vbkxvYWRlZCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgIHRoaXMuX2luaXQoKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXRJbnN0YW5jZSAoaW5zdGFuY2UpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW5zdGFuY2UgKG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIF9pbml0ICgpIHtcbiAgICB0aGlzLmZldGNoVGVtcGxhdGVzKCk7XG4gIH1cblxuICBmZXRjaFRlbXBsYXRlcyAoKSB7XG4gICAgLy8gSWYgd2UgYWxyZWFkeSBoYXZlIHRlbXBsYXRlcyBsb2FkZWQsIGRvIG5vdGhpbmdcbiAgICBsZXQgbm9kZSA9IERPTS5xdWVyeSgnI3lleHQtYW5zd2Vycy10ZW1wbGF0ZXMnKTtcbiAgICBpZiAobm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAvLyBJbmplY3QgYSBzY3JpcHQgdG8gZmV0Y2ggdGhlIGNvbXBpbGVkIHRlbXBsYXRlcyxcbiAgICAvLyB3cmFwcGluZyBpdCBhIFByb21pc2UgZm9yIGNsZWFubGluZXNzXG4gICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IHNjcmlwdCA9IERPTS5jcmVhdGVFbCgnc2NyaXB0Jywge1xuICAgICAgICBpZDogJ3lleHQtYW5zd2Vycy10ZW1wbGF0ZXMnLFxuICAgICAgICBvbmxvYWQ6IHJlc29sdmUsXG4gICAgICAgIG9uZXJyb3I6IHJlamVjdCxcbiAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgIHNyYzogdGhhdC5fdGVtcGxhdGVVcmxcbiAgICAgIH0pO1xuXG4gICAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAvLyBUT0RPKGJpbGx5KSBJbXBsbWVuZXQgZXJyb3IgaGFuZGxpbmcgaGVyZSAoZS5nLiByZXF1ZXN0IGNvdWxkIGZhaWwpXG4gICAgICAgIGNvbnNvbGUubG9nKCdUZW1wbGF0ZXMgbG9hZGVkIHN1Y2Nlc3NmdWxseSEnKTtcbiAgICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlZ2lzdGVyIHRoZSB0ZW1wbGF0ZXMgaW50ZXJuYWxseSBzbyB0aGF0IHRoZXkgY2FuIGJlIGxhdGVyIGNvbnN1bWVkXG4gICAqIChlLmcuIGJ5IGNvbXBvbmVudHMgYW5kIHJlbmRlcmVycykgd2l0aCBjb252aWVuaWVuY2UuXG4gICAqXG4gICAqIGBmZXRjaFRlbXBsYXRlc2Agd2lsbCBhdXRvbWF0aWNhbGx5IGNhbGwgdGhpcywgcHJvdmlkaW5nIHRoZSBjb21waWxlZCB0ZW1wbGF0ZXMgZnJvbSB0aGUgc2VydmVyLlxuICAgKi9cbiAgcmVnaXN0ZXIgKHRlbXBsYXRlcykge1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHRlbXBsYXRlcztcblxuICAgIC8vIE5vdGlmeSBvdXIgY29uc3VtZXJzIHRoYXQgdGhlIHRlbXBsYXRlcyBhcmUgaGVyZSA6KVxuICAgIHRoaXMuX29uTG9hZGVkKHRoaXMuX3RlbXBsYXRlcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBvbkxvYWRlZCAoY2IpIHtcbiAgICB0aGlzLl9vbkxvYWRlZCA9IGNiO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0ICh0ZW1wbGF0ZU5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVzW3RlbXBsYXRlTmFtZV07XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybiBUaGUgaW50ZXJuYWwgdGVtcGxhdGUgY29sbGVjdGlvblxuICAgKi9cbiAgZ2V0VGVtcGxhdGVzICgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVzO1xuICB9XG59XG4iLCIvKipcbiAqIEVycm9yIGNvZGVzIGZhbGwgaW50byBvbmUgb2YgZm91ciBjYXRlZ29yaWVzOlxuICogMVhYIGVycm9yczogQmFzaWMgZXJyb3JzXG4gKiAyWFggZXJyb3JzOiBVSSBlcnJvcnNcbiAqIDNYWCBlcnJvcnM6IEVuZHBvaW50IGVycm9yc1xuICogNFhYIGVycm9yczogQ29yZSBlcnJvcnNcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlcnNCYXNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yIChlcnJvckNvZGUsIG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMuZXJyb3JDb2RlID0gZXJyb3JDb2RlO1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLmJvdW5kYXJ5ID0gYm91bmRhcnk7XG4gICAgdGhpcy5jYXVzZWRCeSA9IGNhdXNlZEJ5O1xuICAgIHRoaXMucmVwb3J0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHRvSnNvbiAoKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb20gKGJ1aWx0aW5FcnJvciwgYm91bmRhcnkpIHtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBBbnN3ZXJzQmFzaWNFcnJvcihidWlsdGluRXJyb3IubWVzc2FnZSwgYm91bmRhcnkpO1xuICAgIGVycm9yLnN0YWNrID0gYnVpbHRpbkVycm9yLnN0YWNrO1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0Jhc2ljRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDEwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQW5zd2Vyc1VpRXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDIwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0VuZHBvaW50RXJyb3IgZXh0ZW5kcyBBbnN3ZXJzQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IgKG1lc3NhZ2UsIGJvdW5kYXJ5LCBjYXVzZWRCeSkge1xuICAgIHN1cGVyKDMwMCwgbWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQW5zd2Vyc0NvcmVFcnJvciBleHRlbmRzIEFuc3dlcnNCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciAobWVzc2FnZSwgYm91bmRhcnksIGNhdXNlZEJ5KSB7XG4gICAgc3VwZXIoNDAwLCBtZXNzYWdlLCBib3VuZGFyeSwgY2F1c2VkQnkpO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgTElCX1ZFUlNJT04gPSAndjAuNS4yJztcbiIsImltcG9ydCB7IEFuc3dlcnNCYXNlRXJyb3IgfSBmcm9tICcuL2Vycm9ycyc7XG5cbmltcG9ydCBBcGlSZXF1ZXN0IGZyb20gJy4uL2h0dHAvYXBpcmVxdWVzdCc7XG5pbXBvcnQgeyBMSUJfVkVSU0lPTiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yUmVwb3J0ZXIge1xuICBjb25zdHJ1Y3RvciAoYXBpS2V5LCBhbnN3ZXJzS2V5KSB7XG4gICAgdGhpcy5hcGlLZXkgPSBhcGlLZXk7XG4gICAgdGhpcy5hbnN3ZXJzS2V5ID0gYW5zd2Vyc0tleTtcbiAgfVxuXG4gIHJlcG9ydCAoZXJyKSB7XG4gICAgaWYgKCEoZXJyIGluc3RhbmNlb2YgQW5zd2Vyc0Jhc2VFcnJvcikgfHwgZXJyLnJlcG9ydGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXJyLnJlcG9ydGVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICBiYXNlVXJsOiB0aGlzLl9pc0RldiA/ICdodHRwOi8vJyArICdsb2NhbGhvc3QnIDogJ2h0dHBzOi8vbGl2ZWFwaS55ZXh0LmNvbScsXG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL2Vycm9ycycsXG4gICAgICBhcGlLZXk6IHRoaXMuYXBpS2V5LFxuICAgICAgdmVyc2lvbjogMjAxOTAzMDEsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2Vycm9yJzogZXJyLnRvSnNvbigpLFxuICAgICAgICAnbGliVmVyc2lvbic6IExJQl9WRVJTSU9OLFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuYW5zd2Vyc0tleVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVxdWVzdC5nZXQoKVxuICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyKTtcblxuICAgIHJldHVybiBlcnI7XG4gIH1cbn1cbiIsImltcG9ydCBDb3JlIGZyb20gJy4vY29yZS9jb3JlJztcblxuaW1wb3J0IHtcbiAgVGVtcGxhdGVMb2FkZXIsXG4gIENPTVBPTkVOVF9NQU5BR0VSLFxuICBSZW5kZXJlcnMsXG4gIERPTVxufSBmcm9tICcuL3VpL2luZGV4JztcblxuaW1wb3J0IEVycm9yUmVwb3J0ZXIgZnJvbSAnLi9jb3JlL2Vycm9ycy9lcnJvcnJlcG9ydGVyJztcblxuLyoqXG4gKiBPdXIgQVBJIHNob3VsZCBvbmx5IGJlIGluc3RhbnRpYWJsZSBvbmNlXG4gKiBAdHlwZSB7QU5TV0VSU30gVGhlIGluc3RhbmNlIG9mIEFOU1dFUlNcbiAqL1xuY2xhc3MgQW5zd2VycyB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBpZiAoIUFuc3dlcnMuc2V0SW5zdGFuY2UodGhpcykpIHtcbiAgICAgIHJldHVybiBBbnN3ZXJzLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2Ugb2YgdGhlIHJlbmRlcmVyIHRvIHVzZSBmb3IgdGhlIGNvbXBvbmVudHNcbiAgICAgKiBUaGlzIGlzIHByb3ZpZGVkIGR1cmluZyBpbml0aWFsaXphdGlvbi5cbiAgICAgKiBAdHlwZSB7UmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcnMuSGFuZGxlYmFycygpO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCBtYW5hZ2VyXG4gICAgICogQHR5cGUge0NvbXBvbmVudE1hbmFnZXJ9XG4gICAgICovXG4gICAgdGhpcy5jb21wb25lbnRzID0gQ09NUE9ORU5UX01BTkFHRVI7XG5cbiAgICAvLyBUT0RPKGpkZWxlcm1lKTogaGF2ZSB0aGlzIHBvcHVsYXRlIGJ5IGJ1bmRsZSBpbnN0ZWFkXG4gICAgLy8gaS5lLiBtaW5pZmllZCBidW5kbGUgaXMgbm90IGRldiwgb3RoZXIgYnVuZGxlIGlzXG4gICAgdGhpcy5faXNEZXYgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpKS5zZWFyY2hQYXJhbXMuZ2V0KCdsb2NhbCcpO1xuXG4gICAgLyoqXG4gICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiB0byBpbnZva2Ugb25jZSB0aGUgbGlicmFyeSBpcyByZWFkeS5cbiAgICAgKiBUeXBpY2FsbHkgZmlyZWQgYWZ0ZXIgdGVtcGxhdGVzIGFyZSBmZXRjaGVkIGZyb20gc2VydmVyIGZvciByZW5kZXJpbmcuXG4gICAgICovXG4gICAgdGhpcy5fb25SZWFkeSA9IGZ1bmN0aW9uICgpIHt9O1xuICB9XG5cbiAgc3RhdGljIHNldEluc3RhbmNlIChpbnN0YW5jZSkge1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSAob3B0cykge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgaW5pdCAob3B0cykge1xuICAgIHRoaXMuY29tcG9uZW50cy5zZXRDb3JlKG5ldyBDb3JlKHtcbiAgICAgIGFwaUtleTogb3B0cy5hcGlLZXksXG4gICAgICBhbnN3ZXJzS2V5OiBvcHRzLmFuc3dlcnNLZXlcbiAgICB9KSlcbiAgICAgIC5zZXRSZW5kZXJlcih0aGlzLnJlbmRlcmVyKTtcblxuICAgIHRoaXMuX29uUmVhZHkgPSBvcHRzLm9uUmVhZHkgfHwgZnVuY3Rpb24gKCkge307XG5cbiAgICBpZiAob3B0cy51c2VUZW1wbGF0ZXMgPT09IGZhbHNlIHx8IG9wdHMudGVtcGxhdGVCdW5kbGUpIHtcbiAgICAgIGlmIChvcHRzLnRlbXBsYXRlQnVuZGxlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5pdChvcHRzLnRlbXBsYXRlQnVuZGxlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fb25SZWFkeSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gVGVtcGxhdGVzIGFyZSBjdXJyZW50bHkgZG93bmxvYWRlZCBzZXBhcmF0ZWx5IGZyb20gdGhlIENPUkUgYW5kIFVJIGJ1bmRsZS5cbiAgICAvLyBGdXR1cmUgZW5oYW5jZW1lbnQgaXMgdG8gc2hpcCB0aGUgY29tcG9uZW50cyB3aXRoIHRlbXBsYXRlcyBpbiBhIHNlcGFyYXRlIGJ1bmRsZS5cbiAgICB0aGlzLnRlbXBsYXRlcyA9IG5ldyBUZW1wbGF0ZUxvYWRlcih7XG4gICAgICB0ZW1wbGF0ZVVybDogb3B0cy50ZW1wbGF0ZVVybFxuICAgIH0pLm9uTG9hZGVkKCh0ZW1wbGF0ZXMpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuaW5pdCh0ZW1wbGF0ZXMpO1xuXG4gICAgICB0aGlzLl9vblJlYWR5KCk7XG4gICAgfSk7XG5cbiAgICBpZiAoIXRoaXMuX2lzRGV2ICYmICFvcHRzLnN1cHByZXNzRXJyb3JSZXBvcnRzKSB7XG4gICAgICB0aGlzLl9lcnJvclJlcG9ydGVyID0gbmV3IEVycm9yUmVwb3J0ZXIob3B0cy5hcGlLZXksIG9wdHMuYW5zd2Vyc0tleSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlID0+IHRoaXMuX2Vycm9yUmVwb3J0ZXIucmVwb3J0KGUuZXJyb3IpKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmhhbmRsZWRyZWplY3Rpb24nLCBlID0+IHRoaXMuX2Vycm9yUmVwb3J0ZXIucmVwb3J0KGUuZXJyb3IpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRvbVJlYWR5IChjYikge1xuICAgIERPTS5vblJlYWR5KGNiKTtcbiAgfVxuXG4gIG9uUmVhZHkgKGNiKSB7XG4gICAgdGhpcy5fb25SZWFkeSA9IGNiO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkQ29tcG9uZW50ICh0eXBlLCBvcHRzKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuICAgICAgb3B0cyA9IHtcbiAgICAgICAgY29udGFpbmVyOiBvcHRzXG4gICAgICB9O1xuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50cy5jcmVhdGUodHlwZSwgb3B0cykubW91bnQoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNyZWF0ZUNvbXBvbmVudCAob3B0cykge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHMuY3JlYXRlKCdDb21wb25lbnQnLCBvcHRzKS5tb3VudCgpO1xuICB9XG5cbiAgcmVnaXN0ZXJIZWxwZXIgKG5hbWUsIGNiKSB7XG4gICAgdGhpcy5yZW5kZXJlci5yZWdpc3RlckhlbHBlcihuYW1lLCBjYik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuY29uc3QgQU5TV0VSUyA9IG5ldyBBbnN3ZXJzKCk7XG5leHBvcnQgZGVmYXVsdCBBTlNXRVJTO1xuIl0sIm5hbWVzIjpbIk1ldGhvZHMiLCJHRVQiLCJQT1NUIiwiUFVUIiwiREVMRVRFIiwiSHR0cFJlcXVlc3RlciIsInVybCIsImRhdGEiLCJvcHRzIiwicmVxdWVzdCIsImVuY29kZVBhcmFtcyIsIk9iamVjdCIsImFzc2lnbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibWV0aG9kIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsInBhcmFtcyIsImhhc1BhcmFtIiwiaW5kZXhPZiIsInNlYXJjaFF1ZXJ5Iiwia2V5IiwiZW5jb2RlVVJJIiwiQXBpUmVxdWVzdCIsIl9yZXF1ZXN0ZXIiLCJfYmFzZVVybCIsImJhc2VVcmwiLCJfZW5kcG9pbnQiLCJlbmRwb2ludCIsIl9hcGlLZXkiLCJhcGlLZXkiLCJfdmVyc2lvbiIsInZlcnNpb24iLCJfcGFyYW1zIiwiZ2V0IiwiYmFzZVBhcmFtcyIsInVybFBhcmFtcyIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwidG9TdHJpbmciLCJzZWFyY2hQYXJhbXMiLCJoYXMiLCJrZXlzIiwiZm9yRWFjaCIsInVuZGVmaW5lZCIsIlNlYXJjaCIsImlzTG9jYWwiLCJob3N0bmFtZSIsIl9hbnN3ZXJzS2V5IiwiYW5zd2Vyc0tleSIsInF1ZXJ5U3RyaW5nIiwidmVydGljYWxLZXkiLCJmaWx0ZXIiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiQXV0b0NvbXBsZXRlRGF0YSIsInNlY3Rpb25zIiwibWFwIiwicyIsImxhYmVsIiwicmVzdWx0cyIsInIiLCJBdXRvQ29tcGxldGVSZXN1bHQiLCJoaWdobGlnaHRlZFZhbHVlIiwiaGlnaGxpZ2h0IiwibWF0Y2hlZFN1YnN0cmluZ3MiLCJ2YWx1ZSIsInNob3J0VmFsdWUiLCJsZW5ndGgiLCJzb3J0IiwiYSIsImIiLCJvZmZzZXQiLCJuZXh0U3RhcnQiLCJqIiwic3RhcnQiLCJOdW1iZXIiLCJlbmQiLCJzbGljZSIsImpvaW4iLCJBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIiLCJtb2R1bGVJZCIsImNsZWFuIiwiZnJvbSIsImlucHV0S2V5IiwiQXV0b0NvbXBsZXRlIiwiaW5wdXQiLCJleHBlcmllbmNlS2V5IiwiYmFyS2V5IiwiX3F1ZXJ5VmVydGljYWwiLCJfcXVlcnlVbml2ZXJzYWwiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsInZlcnRpY2FsIiwidW5pdmVyc2FsIiwiUmVzdWx0IiwicmVzdWx0c0RhdGEiLCJpIiwicHVzaCIsIlNlY3Rpb24iLCJ2ZXJ0aWNhbENvbmZpZ0lkIiwicmVzdWx0c0NvdW50IiwiZW5jb2RlZFN0YXRlIiwiYXBwbGllZFF1ZXJ5RmlsdGVycyIsIkFwcGxpZWRRdWVyeUZpbHRlciIsImZhY2V0cyIsInBhcnNlTWFwIiwidmVydGljYWxVUkwiLCJtYXBNYXJrZXJzIiwiY2VudGVyQ29vcmRpbmF0ZXMiLCJyZXN1bHQiLCJ5ZXh0RGlzcGxheUNvb3JkaW5hdGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIml0ZW0iLCJtb2R1bGVzIiwidXJscyIsIkFycmF5IiwiaXNBcnJheSIsImFwcGxpZWRRdWVyeUZpbHRlciIsImRpc3BsYXlLZXkiLCJkaXNwbGF5VmFsdWUiLCJmaWx0ZXJzIiwiVW5pdmVyc2FsUmVzdWx0cyIsInF1ZXJ5SWQiLCJEaXJlY3RBbnN3ZXIiLCJkaXJlY3RBbnN3ZXIiLCJOYXZpZ2F0aW9uIiwidGFiT3JkZXIiLCJuYXYiLCJWZXJ0aWNhbFJlc3VsdHMiLCJTZWFyY2hEYXRhVHJhbnNmb3JtZXIiLCJuYXZpZ2F0aW9uIiwidW5pdmVyc2FsUmVzdWx0cyIsInZlcnRpY2FsUmVzdWx0cyIsIkV2ZW50RW1pdHRlciIsIl9saXN0ZW5lcnMiLCJldnQiLCJjYiIsIm9uY2UiLCJFcnJvciIsImV2ZW50Iiwib24iLCJsaXN0ZW5lcnMiLCJrZWVwIiwiTW9kdWxlRGF0YSIsImlkIiwiX2lkIiwiX2hpc3RvcnkiLCJfZGF0YSIsInNldCIsImNhcHR1cmVQcmV2aW91cyIsImxlbiIsImlzRGlydHkiLCJwcm9wIiwidmFsIiwiZW1pdCIsInNoaWZ0IiwicHJldmlvdXMiLCJfcHJldmlvdXMiLCJwYXJzZSIsInBvcCIsIlN0b3JhZ2UiLCJfbW9kdWxlRGF0YUNvbnRhaW5lciIsIl9mdXR1cmVMaXN0ZW5lcnMiLCJtb2R1bGVJZHMiLCJfYXBwbHlGdXR1cmVMaXN0ZW5lcnMiLCJpbnNlcnQiLCJ0cmFuc2Zvcm0iLCJyYXciLCJtb2R1bGVEYXRhIiwib2ZmIiwiZnV0dXJlcyIsImZ1dHVyZSIsIkNvcmUiLCJzdG9yYWdlIiwiX3NlYXJjaGVyIiwiX2F1dG9Db21wbGV0ZSIsInZlcnRpY2FsUXVlcnkiLCJ0cmFuc2Zvcm1WZXJ0aWNhbCIsInF1ZXJ5IiwicXVlcnlGaWx0ZXIiLCJDb21wb25lbnRNYW5hZ2VyIiwic2V0SW5zdGFuY2UiLCJnZXRJbnN0YW5jZSIsIl9jb21wb25lbnRSZWdpc3RyeSIsIl9hY3RpdmVDb21wb25lbnRzIiwiX2NvcmUiLCJfcmVuZGVyZXIiLCJyZW5kZXJlciIsImNvcmUiLCJjb21wb25lbnRDbGF6eiIsInR5cGUiLCJjb21wb25lbnRUeXBlIiwiY29tcG9uZW50TWFuYWdlciIsImNvbXBvbmVudCIsImluaXQiLCJzZXRTdGF0ZSIsImluc3RhbmNlIiwiUmVuZGVyZXIiLCJ0ZW1wbGF0ZSIsIm5hbWUiLCJIYW5kbGViYXJzUmVuZGVyZXIiLCJ0ZW1wbGF0ZXMiLCJfaGFuZGxlYmFycyIsIl9oYiIsIl90ZW1wbGF0ZXMiLCJfcmVnaXN0ZXJDdXN0b21IZWxwZXJzIiwicmVnaXN0ZXJIZWxwZXIiLCJjb21waWxlIiwiY29uZmlnIiwidGVtcGxhdGVOYW1lIiwiZSIsImFyZzEiLCJhcmcyIiwib3B0aW9ucyIsImZuIiwiaW52ZXJzZSIsInBob25lTnVtYmVyU3RyaW5nIiwiY2xlYW5lZCIsInJlcGxhY2UiLCJtYXRjaCIsImludGxDb2RlIiwiYXJncyIsImFyZ3VtZW50cyIsInJvb3QiLCJ2IiwiUmVuZGVyZXJzIiwiU09ZIiwiSGFuZGxlYmFycyIsImRvY3VtZW50IiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiRE9NIiwiZCIsInAiLCJodG1sIiwicGFyc2VGcm9tU3RyaW5nIiwicGFyZW50Iiwic2VsZWN0b3IiLCJIVE1MRWxlbWVudCIsIldpbmRvdyIsIkhUTUxEb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVhZHlTdGF0ZSIsImVsIiwib3B0c19kYXRhIiwibm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJwcm9wcyIsImFkZENsYXNzIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjbGFzc05hbWUiLCJjbGFzc2VzIiwic3BsaXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJzdHlsZXMiLCJzdHlsZSIsImF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJzZXR0aW5ncyIsIkV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImN0eHQiLCJ0YXJnZXQiLCJpc0VxdWFsTm9kZSIsIm1hdGNoZXMiLCJwYXJlbnROb2RlIiwiU3RhdGUiLCJfc3RhdGUiLCJvcHRWYWwiLCJfc2V0Iiwib3B0UHJvcCIsIkNvbXBvbmVudCIsIl9vcHRzIiwiX3R5cGUiLCJjb25zdHJ1Y3RvciIsIl9wYXJlbnQiLCJfY2hpbGRyZW4iLCJzdGF0ZSIsImNvbnRhaW5lciIsIl9jb250YWluZXIiLCJjcmVhdGVFbCIsImNsYXNzIiwic3Vic3RyaW5nIiwiYXBwZW5kIiwiX2NsYXNzTmFtZSIsIl9yZW5kZXIiLCJyZW5kZXIiLCJfdGVtcGxhdGUiLCJfdGVtcGxhdGVOYW1lIiwiX2lzTW91bnRlZCIsInRyYW5zZm9ybURhdGEiLCJvbkNyZWF0ZSIsIm9uTW91bnQiLCJvblVwZGF0ZSIsIm1vdW50IiwiY2hpbGRDb21wb25lbnQiLCJjcmVhdGUiLCJfcGFyZW50T3B0cyIsImVtcHR5IiwidW5Nb3VudCIsImJlZm9yZU1vdW50IiwiYXNKU09OIiwiX29uTW91bnQiLCJjaGlsZCIsImJlZm9yZVJlbmRlciIsImRvbUNvbXBvbmVudHMiLCJxdWVyeUFsbCIsImRvbUNvbXBvbmVudCIsImRhdGFzZXQiLCJjaGlsZERhdGEiLCJhZGRDaGlsZCIsImNoaWxkSFRNTCIsImFmdGVyUmVuZGVyIiwiTmF2aWdhdGlvbkNvbXBvbmVudCIsIl90YWJPcmRlciIsIl90YWJzIiwidGFicyIsInRhYiIsImNvbmZpZ0lkIiwiaXNGaXJzdCIsInVuc2hpZnQiLCJpc0FjdGl2ZSIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsImdldFVybFBhcmFtcyIsImdlbmVyYXRlVGFiVXJsIiwiU2VhcmNoQ29tcG9uZW50IiwiX2JhcktleSIsIl92ZXJ0aWNhbEtleSIsIl9mb3JtRWwiLCJmb3JtU2VsZWN0b3IiLCJfaW5wdXRFbCIsImlucHV0RWwiLCJ0aXRsZSIsInNlYXJjaFRleHQiLCJwcm9tcHRIZWFkZXIiLCJhdXRvRm9jdXMiLCJyZWRpcmVjdFVybCIsImJpbmRCcm93c2VySGlzdG9yeSIsImluaXRTZWFyY2giLCJpbml0QXV0b0NvbXBsZXRlIiwiZm9jdXMiLCJmb3JtIiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImlucHV0U2VsZWN0b3IiLCJfZXhwZXJpZW5jZUtleSIsIm9yaWdpbmFsUXVlcnkiLCJvblN1Ym1pdCIsInRyaWdnZXIiLCJ2ZXJ0aWNhbFNlYXJjaCIsImdldEFjdGl2ZUNvbXBvbmVudCIsImdldFN0YXRlIiwiRmlsdGVyUGlja2VyQ29tcG9uZW50IiwiaXNGaWx0ZXJTZWFyY2giLCJvcmlnaW5hbEZpbHRlciIsIktleXMiLCJCQUNLU1BBQ0UiLCJUQUIiLCJFTlRFUiIsIlNISUZUIiwiQ1RSTCIsIkFMVCIsIkVTQ0FQRSIsIkxFRlQiLCJSSUdIVCIsIlVQIiwiRE9XTiIsIkxFRlRfT1NfS0VZIiwiUklHSFRfT1NfS0VZIiwiU0VMRUNUX0tFWSIsIkF1dG9Db21wbGV0ZUNvbXBvbmVudCIsIl9vcmlnaW5hbFF1ZXJ5IiwiX3NlY3Rpb25JbmRleCIsIl9yZXN1bHRJbmRleCIsIl9vblN1Ym1pdCIsInNlY3Rpb25JbmRleCIsInJlc3VsdEluZGV4IiwicXVlcnlJbnB1dCIsImNsb3NlIiwicmVzZXQiLCJhdXRvQ29tcGxldGVGaWx0ZXIiLCJhdXRvQ29tcGxldGUiLCJoYW5kbGVOYXZpZ2F0ZVJlc3VsdHMiLCJrZXlDb2RlIiwiaGFuZGxlU3VibWl0UmVzdWx0IiwiZGVsZWdhdGUiLCJzaG9ydCIsInVwZGF0ZVF1ZXJ5IiwiaGFuZGxlVHlwaW5nIiwidXBkYXRlU3RhdGUiLCJvcHRWYWx1ZSIsInF1ZXJ5RWwiLCJpZ25vcmVkS2V5cyIsIkRpcmVjdEFuc3dlckNvbXBvbmVudCIsImhhc1N0YXRlIiwiUmVzdWx0c0l0ZW1Db21wb25lbnQiLCJMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IiwiRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCIsIlBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IiwiTWFwUHJvdmlkZXIiLCJfaGVpZ2h0IiwiaGVpZ2h0IiwiX3dpZHRoIiwid2lkdGgiLCJfem9vbSIsInpvb20iLCJfbWFwIiwiX2lzTG9hZGVkIiwiX29uTG9hZGVkIiwib25Mb2FkZWQiLCJfcGluQ29uZmlnIiwicGluIiwiREVGQVVMVF9QSU5fQ09ORklHIiwiaXNMb2FkZWQiLCJtYXBEYXRhIiwiaWNvbiIsImFuY2hvciIsInN2ZyIsInNjYWxlZFNpemUiLCJsYWJlbFR5cGUiLCJHb29nbGVNYXBQcm92aWRlciIsIl9jbGllbnRJZCIsImNsaWVudElkIiwiX3NpZ25hdHVyZSIsInNpZ25hdHVyZSIsImhhc1ZhbGlkQ2xpZW50Q3JlZGVudGlhbHMiLCJvbkxvYWQiLCJzY3JpcHQiLCJvbmxvYWQiLCJhc3luYyIsInNyYyIsImdlbmVyYXRlQ3JlZGVudGlhbHMiLCJnb29nbGVNYXBNYXJrZXJDb25maWdzIiwiR29vZ2xlTWFwTWFya2VyQ29uZmlnIiwiZW5jb2RlZE1hcmtlcnMiLCJzZXJpYWxpemUiLCJfaXNTdGF0aWMiLCJzZXRUaW1lb3V0IiwiY3NzIiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsImJvdW5kcyIsIkxhdExuZ0JvdW5kcyIsIm1hcmtlciIsIk1hcmtlciIsImV4dGVuZCIsInBvc2l0aW9uIiwiZml0Qm91bmRzIiwibGF0IiwibG5nIiwic2VyaWFsaXplZE1hcmtlcnMiLCJtYXJrZXJzIiwicGluQ29uZmlnIiwiUG9pbnQiLCJ4IiwieSIsIlNpemUiLCJ3IiwiaCIsImljb25DZmciLCJlbmNvZGVVUklDb21wb25lbnQiLCJNYXBCb3hNYXBQcm92aWRlciIsIm1hcGJveGdsIiwiYWNjZXNzVG9rZW4iLCJyZWwiLCJjZW50ZXIiLCJtYXBDZW50ZXIiLCJtbSIsImNvb3JkcyIsIkxuZ0xhdCIsInNldExuZ0xhdCIsImFkZFRvIiwiUHJvdmlkZXJUeXBlcyIsIk1hcENvbXBvbmVudCIsIl9tYXBQcm92aWRlciIsIm1hcFByb3ZpZGVyIiwidG9Mb3dlckNhc2UiLCJpc1N0YXRpYyIsImdldFByb3ZpZGVySW5zdGFuY2UiLCJzZXRUZW1wbGF0ZSIsImdlbmVyYXRlU3RhdGljIiwibG9hZEpTIiwiUmVzdWx0VHlwZSIsIkVWRU5UIiwiTE9DQVRJT04iLCJQRU9QTEUiLCJSZXN1bHRzQ29tcG9uZW50IiwibGltaXQiLCJfaXRlbUNvbmZpZyIsImdsb2JhbCIsInJlbmRlckl0ZW0iLCJpdGVtVGVtcGxhdGUiLCJjb25maWd1cmVJdGVtIiwiaW5jbHVkZU1hcCIsIm1hcENvbmZpZyIsInNldEl0ZW1SZW5kZXIiLCJzZXRJdGVtVGVtcGxhdGUiLCJjbGF6eiIsImdldEl0ZW1Db21wb25lbnQiLCJjb21wIiwiZ2xvYmFsQ29uZmlnIiwiaXRlbUNvbmZpZyIsImhhc0dsb2JhbFJlbmRlciIsImhhc0dsb2JhbFRlbXBsYXRlIiwic2V0UmVuZGVyIiwiVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudCIsIl9saW1pdCIsImdldENoaWxkQ29uZmlnIiwiUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IiwiX2VtYWlsTGFiZWwiLCJlbWFpbExhYmVsIiwiX25hbWVMYWJlbCIsIm5hbWVMYWJlbCIsIl9xdWVzdGlvbkxhYmVsIiwicXVlc3Rpb25MYWJlbCIsIl9wcml2YWN5UG9saWN5TGFiZWwiLCJwcml2YWN5UG9saWN5TGFiZWwiLCJfYnV0dG9uTGFiZWwiLCJidXR0b25MYWJlbCIsImluaXRTdWJtaXQiLCJoYXNRdWVyaWVkIiwicXVlc3Rpb24iLCJDT01QT05FTlRfTUFOQUdFUiIsInJlZ2lzdGVyIiwiVGVtcGxhdGVMb2FkZXIiLCJfdGVtcGxhdGVVcmwiLCJ0ZW1wbGF0ZVVybCIsIl9pbml0IiwiZmV0Y2hUZW1wbGF0ZXMiLCJ0aGF0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbmVycm9yIiwibG9nIiwiQW5zd2Vyc0Jhc2VFcnJvciIsImVycm9yQ29kZSIsIm1lc3NhZ2UiLCJib3VuZGFyeSIsImNhdXNlZEJ5IiwiZXJyb3JNZXNzYWdlIiwicmVwb3J0ZWQiLCJidWlsdGluRXJyb3IiLCJBbnN3ZXJzQmFzaWNFcnJvciIsInN0YWNrIiwiTElCX1ZFUlNJT04iLCJFcnJvclJlcG9ydGVyIiwiZXJyIiwiX2lzRGV2IiwidG9Kc29uIiwiQW5zd2VycyIsImNvbXBvbmVudHMiLCJfb25SZWFkeSIsInNldENvcmUiLCJzZXRSZW5kZXJlciIsIm9uUmVhZHkiLCJ1c2VUZW1wbGF0ZXMiLCJ0ZW1wbGF0ZUJ1bmRsZSIsInN1cHByZXNzRXJyb3JSZXBvcnRzIiwiX2Vycm9yUmVwb3J0ZXIiLCJyZXBvcnQiLCJBTlNXRVJTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7O0VBRUE7OztFQUdBLElBQU1BLE9BQU8sR0FBRztFQUNkQyxFQUFBQSxHQUFHLEVBQUUsS0FEUztFQUVkQyxFQUFBQSxJQUFJLEVBQUUsTUFGUTtFQUdkQyxFQUFBQSxHQUFHLEVBQUUsS0FIUztFQUlkQyxFQUFBQSxNQUFNLEVBQUU7RUFKTSxDQUFoQjs7TUFPcUJDOzs7Ozs7Ozs7O0VBQ25COzs7Ozs7MEJBTUtDLEtBQUtDLE1BQU1DLE1BQU07RUFDcEIsYUFBTyxLQUFLQyxPQUFMLENBQWFULE9BQU8sQ0FBQ0MsR0FBckIsRUFBMEIsS0FBS1MsWUFBTCxDQUFrQkosR0FBbEIsRUFBdUJDLElBQXZCLENBQTFCLEVBQXdEQyxJQUF4RCxDQUFQO0VBQ0Q7RUFFRDs7Ozs7Ozs7OzJCQU1NRixLQUFLQyxNQUFNQyxNQUFNO0VBQ3JCLGFBQU8sS0FBS0MsT0FBTCxD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