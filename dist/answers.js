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
    /**
     * Create a GET HTTP request
     * @param {string} url The url to make a request to
     * @param {Object} data The data to provide (gets encoded into the URL)
     * @param {Object} opts Configuration options to use for the request
     */


    _createClass(HttpRequester, [{
      key: "get",
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
        var hasParam = url.indexOf('?') > -1,
            searchQuery = '';

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
        return Object.assign({
          'v': this._version,
          'api_key': this._apiKey
        }, _params || {});
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

      this._baseUrl = this._isLocal ? 'http://' + window.location.hostname : 'https://liveapi.yext.com';
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
      value: function verticalQuery(queryString, verticalKey) {
        var request = new ApiRequest({
          baseUrl: this._baseUrl,
          endpoint: '/v2/accounts/me/answers/vertical/query',
          apiKey: this._apiKey,
          version: this._version,
          params: {
            'input': queryString,
            'answersKey': this._answersKey,
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
        var results = response.results;
        var data = [];

        for (var i = 0; i < results.length; i++) {
          var value = results[i].value,
              subStrings = results[i].matchedSubstrings;
          data.push(AutoCompleteDataTransformer.highlight(value, subStrings));
        }

        return AutoCompleteDataTransformer.clean('autocomplete', {
          'sections': [{
            'results': data
          }]
        });
      }
    }, {
      key: "highlight",
      value: function highlight(value, subStrings) {
        if (!subStrings || subStrings.length === 0) {
          return {
            shortValue: value,
            highlightedValue: value
          };
        } // Make sure our highlighted substrings are sorted


        subStrings.sort(function (a, b) {
          if (a.offset < b.offset) {
            return -1;
          }

          if (a.offset > b.offset) {
            return 1;
          }

          return 0;
        }); // Build our new value based on the highlights

        var highlightedValue = '',
            nextStart = 0;

        for (var j = 0; j < subStrings.length; j++) {
          var start = Number(subStrings[j].offset),
              end = start + subStrings[j].length;
          highlightedValue += [value.slice(nextStart, start), '<strong>', value.slice(start, end), '</strong>'].join('');

          if (j === subStrings.length - 1 && end < value.length) {
            highlightedValue += value.slice(end);
          }

          nextStart = end;
        }

        return {
          shortValue: value,
          highlightedValue: highlightedValue
        };
      }
    }, {
      key: "vertical",
      value: function vertical(response, barKey) {
        var moduleId = 'autocomplete.' + barKey,
            sections = response.sections;
        return AutoCompleteDataTransformer.clean(moduleId, {
          'sections': sections
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

      this._baseUrl = this._isLocal ? 'http://' + window.location.hostname : 'https://liveapi.yext.com';
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
          return this._queryVeritcal(input, experienceKey, barKey);
        }

        return this._queryUniversal(input);
      }
    }, {
      key: "_queryVeritcal",
      value: function _queryVeritcal(input, experienceKey, barKey) {
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
        }).catch(function (error) {
          return console.error(error);
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
      this.appliedQueryFilters = data.appliedQueryFilters || null;
      this.facets = data.facets || null;
      this.results = Result.from(data.results);
      this.map = Section.parseMap(data.results);
      this.verticalURL = url || null;
    }

    _createClass(Section, null, [{
      key: "parseMap",
      value: function parseMap(results) {
        var mapMarkers = [],
            centerCoordinates = {};

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

        var keys = Object.keys(data),
            len = keys.length,
            isDirty = false; // Reset the object if its being applied as empty

        if (keys.length === 0) {
          this._data = data;
          isDirty = true;
        }

        for (var i = 0; i < len; i++) {
          var prop = keys[i],
              val = data[keys[i]]; // TODO(billy) For now, one level of comparison is probably fine,
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
      value: function verticalSearch(queryString, verticalKey) {
        var _this = this;

        return this._searcher.verticalQuery(queryString, verticalKey).then(function (response) {
          return SearchDataTransformer.transformVertical(response);
        }).then(function (data) {
          _this.storage.insert(data);
        }).catch(function (error) {
          return console.error(error);
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
        }).catch(function (error) {
          return console.error(error);
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

        if (this._core.storage !== null) {
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

  var document = window.document;
  var parser = new DOMParser();

  var DOM =
  /*#__PURE__*/
  function () {
    function DOM() {
      _classCallCheck(this, DOM);
    }

    _createClass(DOM, null, [{
      key: "create",

      /**
       * create a HTMLElement from and HTML string
       * @param {string} html The HTML to parse to a DOM node.
       * @return {HTMLElement}
       */
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

        if (selector instanceof HTMLElement || selector instanceof Window) {
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

        if (selector instanceof HTMLElement) {
          return selector;
        }

        return parent.querySelectorAll(selector);
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
        var node = document.createElement(el),
            props = Object.keys(opts_data);

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
        var classes = className.split(','),
            len = classes.length;

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
      this._templateUrl = opts.templateUrl || (isLocal ? '../dist/answerstemplates.compiled.min.js' : 'https://answersjs.netlify.com/answerstemplates.compiled.min.js');
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
          return arg1 == arg2 ? options.fn(this) : options.inverse(this);
        });
        this.registerHelper('ifnoteq', function (arg1, arg2, options) {
          return arg1 != arg2 ? options.fn(this) : options.inverse(this);
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
        this.registerHelper('mapBox', function (mapData, mapConfig, options) {
          var encodedMarkers = '',
              mapMarkers = mapData.mapMarkers,
              center = mapData.mapCenter;

          for (var i = 0; i < mapMarkers.length; i++) {
            var mm = mapMarkers[i];

            if (i > 0) {
              encodedMarkers += ',';
            }

            encodedMarkers += "pin-s-".concat(mm.label, "(").concat(mm.latitude, ",").concat(mm.longitude, ")");
          }

          return "<img src=\"https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/".concat(encodedMarkers, "/").concat(center.latitude, ",").concat(center.longitude, ",9.67,0.00,0.00}/1000x600@2x?access_token=").concat(mapConfig.apiKey, "\">");
        });
        this.registerHelper('googleMap', function (mapData, mapConfig, options) {
          var encodedMarkers = '',
              mapMarkers = mapData.mapMarkers,
              width = mapConfig.width || 600,
              height = mapConfig.height || 200,
              zoom = mapConfig.height || 13;

          for (var i = 0; i < mapMarkers.length; i++) {
            var mm = mapMarkers[i];
            encodedMarkers += "&markers=label:".concat(mm.label, "|").concat(mm.latitude, ",").concat(mm.longitude);
          }

          return "<img src=\"https://maps.googleapis.com/maps/api/staticmap?".concat(encodedMarkers, "&size=").concat(width, "x").concat(height, "&key=").concat(mapConfig.apiKey, "\">");
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
      }
    }]);

    return HandlebarsRenderer;
  }(Renderer);

  // E.g. Mustache, SOY, HandleBars, React, etc.

  var Renderers = {
    SOY: Renderer,
    Handlebars: HandlebarsRenderer
  };

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
      value: function init(prop, opt_val) {
        this._set(prop, opt_val);
      }
      /**
       * setter for the state
       * @param prop {string|Object} The property to set
       * @param opt_val Optional, if prop is a {string}, it will assign the value to that property
       */

    }, {
      key: "set",
      value: function set(prop, opt_val) {
        this._set(prop, opt_val);

        this.emit('update');
      }
      /**
       * setter for the state enables you to update a single property, or complete state
       * depending on the arguments provided.
       * @param prop {string|Object} The property to set
       * @param opt_val If prop is a {string}, provide its value
       * @private
       */

    }, {
      key: "_set",
      value: function _set(prop, opt_val) {
        if (opt_val === undefined) {
          this._state = prop;
        } else {
          this._state[prop] = opt_val;
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
       * @param {string} opt_prop optional property to retrieve
       */

    }, {
      key: "get",
      value: function get(opt_prop) {
        if (opt_prop === undefined) {
          return this._state;
        }

        return this._state[opt_prop];
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
        this.onMount(this);
        return this;
      }
      /**
       * render the template using the {Renderer} with the current state and template of the component
       * @returns {string}
       */

    }, {
      key: "render",
      value: function render(data) {
        this.beforeRender();
        data = this.transformData(data) || this.transformData(this._state.get());

        if (typeof this._render === 'function') {
          var _html = this._render(data);

          if (typeof _html !== 'string') {
            throw new Error('Render method must return HTML as type {string}');
          }

          this.afterRender();
          return _html;
        } // Render the existing templates as a string


        var html = this._renderer.render({
          template: this._template,
          templateName: this._templateName
        }, data); // We create an HTML Document fragment with the rendered string
        // So that we can query it for processing of sub components


        var el = DOM.create(html); // Process the DOM to determine if we should create
        // in-memory sub-components for rendering
        // TODO(billy) This should probably return a collection of components

        this._children = [];
        var domComponent = DOM.query(el, '[data-component]');

        if (domComponent !== undefined && domComponent !== null) {
          var type = domComponent.dataset.component,
              prop = domComponent.dataset.prop;
          var childData = data[prop];

          if (Array.isArray(childData)) {
            var childHTML = [];

            for (var i = 0; i < childData.length; i++) {
              var childComponent = this.addChild(childData[i], type);
              childHTML.push(childComponent.render(childData[i]));
            }

            DOM.append(domComponent, childHTML.join(''));
          }
        }

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
          isFirst: tab.isFirst === true ? true : false,
          isActive: tab.isActive === true ? true : false
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

      _this.autoFocus = opts.autoFocus === true ? true : false;
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

          var query = form.querySelector(_this2._inputEl).value,
              params = _this2.getUrlParams();

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
        var autoComplete = this.componentManager.create('AutoComplete', {
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
            var tabs = nav.getState('tabs'),
                urls = {};

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

          _this2.core.autoComplete(queryInput.value, _this2._experienceKey, _this2._barKey);
        }); // Allow the user to navigate between the results using the keyboard

        DOM.on(queryInput, 'keydown', function (e) {
          _this2.handleNavigateResults(e.keyCode, e);
        }); // Allow the user to select a result with the mouse

        DOM.delegate(this._container, '.js-yext-autocomplete-option', 'mousedown', function (evt, target) {
          var data = target.dataset,
              val = data.value,
              filter = JSON.parse(data.filter);

          _this2.updateQuery(val);

          _this2._onSubmit();

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
        this._selectedIndex = 0;
        this._resultIndex = -1;
        this.updateState();
      }
      /**
       * Helper method to update the input text
       * @param {string} opt_value Option value provided.
       * If no value provided, we'll try to find it based on the selection indexes.
       */

    }, {
      key: "updateQuery",
      value: function updateQuery(opt_value) {
        // Only want to update the query string if theres a value.
        // If one is provided, great.
        // Otherwise, lets try to find it from the current selection in the results.
        if (opt_value === undefined) {
          var sections = this._state.get('sections'),
              results = sections[this._sectionIndex].results;

          opt_value = results[this._resultIndex].shortValue;
        }

        var queryEl = DOM.query(this._parent._container, '.js-yext-query');
        queryEl.value = opt_value;
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
        this.core.autoComplete(value, this._experienceKey, this._barKey);
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
          return;
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
      value: function addChild(data, type) {
        var clazz = this.getItemComponent(data.type);

        if (clazz) {
          type = clazz.type;
        } // Apply the proper item renders to the the components
        // have just been constructed. Prioritize global over individual items.


        var comp = _get(_getPrototypeOf(ResultsComponent.prototype), "addChild", this).call(this, data, type),
            globalConfig = this._itemConfig.global,
            itemConfig = this._itemConfig[clazz.type];

        var hasGlobalRender = typeof globalConfig.render === 'function',
            hasGlobalTemplate = typeof globalConfig.template === 'string';

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
      value: function addChild(data, type) {
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

  var MapComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(MapComponent, _Component);

    function MapComponent() {
      var _this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, MapComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MapComponent).call(this, opts));
      _this.moduleId = 'verticalResults';
      _this._templateName = 'results/map';
      _this._mapProvider = opts.mapProvider;
      _this._mapApiKey = opts.mapApiKey;
      _this._width = opts.width || '100%';
      _this._height = opts.height || '100%';
      _this._zoom = opts.zoom || 20;
      _this._map = null;
      return _this;
    }

    _createClass(MapComponent, [{
      key: "onCreate",
      value: function onCreate() {
        var _this2 = this;

        var script = DOM.createEl('script', {
          id: 'google-map-js',
          onload: function onload() {
            _this2.initMap();
          },
          async: true,
          src: 'https://maps.googleapis.com/maps/api/js?key=' + this._mapApiKey
        });
        DOM.append('body', script);
      }
    }, {
      key: "onMount",
      value: function onMount() {
        this.initMap();
      }
    }, {
      key: "initMap",
      value: function initMap() {
        var _this3 = this;

        var mapData = this.getState('map');

        if (!mapData || mapData.mapMarkers.length <= 0) {
          this._map = null;
          this.unMount();
          return this;
        } // NOTE(billy) This timeout is a hack


        setTimeout(function () {
          var container = DOM.query(_this3._container);
          DOM.css(container, {
            width: _this3._width,
            height: _this3._height
          });
          _this3.map = new google.maps.Map(container, {
            zoom: _this3._zoom
          });
          var bounds = new google.maps.LatLngBounds();

          if (mapData && mapData.mapMarkers.length > 0) {
            var markers = mapData.mapMarkers;

            for (var i = 0; i < markers.length; i++) {
              var marker = new google.maps.Marker({
                map: _this3.map,
                position: {
                  lat: markers[i].latitude,
                  lng: markers[i].longitude
                }
              });
              bounds.extend(marker.position);
            }
          }

          _this3.map.fitBounds(bounds);
        }, 100);
      }
    }, {
      key: "setState",
      value: function setState(data, val) {
        if (Object.keys(data).length === 0) {
          return this;
        }

        return _get(_getPrototypeOf(MapComponent.prototype), "setState", this).call(this, Object.assign(data, {
          mapConfig: {
            mapProvider: this._mapProvider,
            mapApiKey: this._mapApiKey
          }
        }), val);
      }
    }], [{
      key: "type",
      get: function get() {
        return 'Map';
      }
    }]);

    return MapComponent;
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
  .register(SearchComponent).register(AutoCompleteComponent) // Results Components
  .register(DirectAnswerComponent).register(UniversalResultsComponent).register(ResultsComponent).register(ResultsItemComponent).register(LocationResultsItemComponent).register(EventResultsItemComponent).register(PeopleResultsItemComponent).register(MapComponent) // Questions Components
  .register(QuestionSubmissionComponent);

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

      this.components = COMPONENT_MANAGER;
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

          this._onReady.call(this);

          return this;
        } // Templates are currently downloaded separately from the CORE and UI bundle.
        // Future enhancement is to ship the components with templates in a separate bundle.


        this.templates = new TemplateLoader({
          templateUrl: opts.templateUrl
        }).onLoaded(function (templates) {
          _this.renderer.init(templates);

          _this._onReady.call(_this);
        });
        return this;
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
        console.log('Adding Standard Component...');

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
        console.log('Create Custom Component...');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2Vycy11bWQuanMiLCJzb3VyY2VzIjpbInNyYy9jb3JlL2h0dHAvaHR0cHJlcXVlc3Rlci5qcyIsInNyYy9jb3JlL2h0dHAvYXBpcmVxdWVzdC5qcyIsInNyYy9jb3JlL3NlYXJjaC9zZWFyY2guanMiLCJzcmMvY29yZS9zZWFyY2gvYXV0b2NvbXBsZXRlZGF0YXRyYW5zZm9ybWVyLmpzIiwic3JjL2NvcmUvc2VhcmNoL2F1dG9jb21wbGV0ZS5qcyIsInNyYy9jb3JlL21vZGVscy9yZXN1bHQuanMiLCJzcmMvY29yZS9tb2RlbHMvc2VjdGlvbi5qcyIsInNyYy9jb3JlL21vZGVscy91bml2ZXJzYWxyZXN1bHRzLmpzIiwic3JjL2NvcmUvbW9kZWxzL2RpcmVjdGFuc3dlci5qcyIsInNyYy9jb3JlL21vZGVscy9uYXZpZ2F0aW9uLmpzIiwic3JjL2NvcmUvbW9kZWxzL3ZlcnRpY2FscmVzdWx0cy5qcyIsInNyYy9jb3JlL3NlYXJjaC9zZWFyY2hkYXRhdHJhbnNmb3JtZXIuanMiLCJzcmMvY29yZS9ldmVudGVtaXR0ZXIvZXZlbnRlbWl0dGVyLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9tb2R1bGVkYXRhLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9zdG9yYWdlLmpzIiwic3JjL2NvcmUvY29yZS5qcyIsInNyYy91aS9jb21wb25lbnRzL2NvbXBvbmVudG1hbmFnZXIuanMiLCJzcmMvdWkvcmVuZGVyaW5nL3JlbmRlcmVyLmpzIiwic3JjL3VpL2RvbS9kb20uanMiLCJzcmMvdWkvcmVuZGVyaW5nL3RlbXBsYXRlbG9hZGVyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9oYW5kbGViYXJzcmVuZGVyZXIuanMiLCJzcmMvdWkvcmVuZGVyaW5nL2NvbnN0LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc3RhdGUuanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb25jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL2F1dG9jb21wbGV0ZWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvZGlyZWN0YW5zd2VyY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvbG9jYXRpb25yZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvZXZlbnRyZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvcGVvcGxlcmVzdWx0c2l0ZW1jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL21hcGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3F1ZXN0aW9ucy9xdWVzdGlvbnN1Ym1pc3Npb25jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb25zdC5qcyIsInNyYy9hbnN3ZXJzLXVtZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFR5cGVzIG9mIEhUVFAgcmVxdWVzdHNcbiAqL1xuY29uc3QgTWV0aG9kcyA9IHtcbiAgR0VUOiAnZ2V0JyxcbiAgUE9TVDogJ3Bvc3QnLFxuICBQVVQ6ICdwdXQnLFxuICBERUxFVEU6ICdkZWxldGUnLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwUmVxdWVzdGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBHRVQgSFRUUCByZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBwcm92aWRlIChnZXRzIGVuY29kZWQgaW50byB0aGUgVVJMKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBDb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgKi9cbiAgZ2V0KHVybCwgZGF0YSwgb3B0cykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoTWV0aG9kcy5HRVQsIHRoaXMuZW5jb2RlUGFyYW1zKHVybCwgZGF0YSksIG9wdHMpXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgUE9TVCBIVFRQIHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHByb3ZpZGUgKGdldHMgZW5jb2RlZCBpbnRvIHRoZSBVUkwpXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIENvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAqL1xuICBwb3N0KHVybCwgZGF0YSwgb3B0cykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXG4gICAgICBNZXRob2RzLlBPU1QsXG4gICAgICB1cmwsXG4gICAgICBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgIH0sIG9wdHMpXG4gICAgKTtcbiAgfVxuXG4gIHJlcXVlc3QobWV0aG9kLCB1cmwsIG9wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgfSwgb3B0cykpO1xuICB9XG5cbiAgZW5jb2RlUGFyYW1zKHVybCwgcGFyYW1zKSB7XG4gICAgbGV0IGhhc1BhcmFtID0gdXJsLmluZGV4T2YoJz8nKSA+IC0xLFxuICAgICAgICBzZWFyY2hRdWVyeSA9ICcnO1xuICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgIGlmICghaGFzUGFyYW0pIHtcbiAgICAgICAgaGFzUGFyYW0gPSB0cnVlO1xuICAgICAgICBzZWFyY2hRdWVyeSArPSAnPyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWFyY2hRdWVyeSArPSAnJic7XG4gICAgICB9XG5cbiAgICAgIHNlYXJjaFF1ZXJ5ICs9IGtleSArICc9JyArIHBhcmFtc1trZXldO1xuICAgIH1cbiAgICByZXR1cm4gZW5jb2RlVVJJKHVybCArIHNlYXJjaFF1ZXJ5KTtcbiAgfVxufSIsImltcG9ydCBIdHRwUmVxdWVzdGVyIGZyb20gJy4vaHR0cHJlcXVlc3Rlcic7XG5cbi8qKlxuICogQXBpUmVxdWVzdCBpcyB0aGUgYmFzZSBjbGFzcyBmb3IgYWxsIEFQSSByZXF1ZXN0cy5cbiAqIEl0IGRlZmluZXMgYWxsIG9mIHRoZSBjb3JlIHByb3BlcnRpZXMgcmVxdWlyZWQgdG8gbWFrZSBhIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpUmVxdWVzdCB7XG4gIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIHVzZWQgZm9yIG1ha2luZyBuZXR3b3JrIHJlcXVlc3QgYW5kIGhhbmRsaW5nIGVycm9yc1xuICAgICAqIEB0eXBlIHtIdHRwUmVxdWVzdGVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcmVxdWVzdGVyID0gbmV3IEh0dHBSZXF1ZXN0ZXIoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBiYXNlVXJsIHRvIHVzZSBmb3IgbWFraW5nIGEgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9iYXNlVXJsID0gb3B0cy5iYXNlVXJsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZW5kcG9pbnQgdG8gdXNlIGluIHRoZSB1cmwgKGFwcGVuZGVkIHRvIHRoZSB7YmFzZVVybH0pXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2VuZHBvaW50ID0gb3B0cy5lbmRwb2ludCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnNpb24gb2YgdGhlIEFQSSB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJzaW9uID0gb3B0cy52ZXJzaW9uIHx8IDIwMTkwMTAxO1xuXG4gICAgLyoqXG4gICAgICogQWRkaXRpb25hbCBkYXRhIHBhcmFtcyB0aGF0IGFyZSBzZW50IGFsb25nIHdpdGggdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcGFyYW1zID0gb3B0cy5wYXJhbXMgfHwge307XG4gIH1cblxuICAvKipcbiAgICogZ2V0IGNyZWF0ZXMgYSBuZXcgYEdFVGAgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSByZXF1ZXN0IGNsYXNzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0ZXIuZ2V0KHRoaXMuX2Jhc2VVcmwgKyB0aGlzLl9lbmRwb2ludCwgdGhpcy5wYXJhbXModGhpcy5fcGFyYW1zKSk7XG4gIH1cblxuICBwYXJhbXMocGFyYW1zKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe1xuICAgICAgJ3YnOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgJ2FwaV9rZXknOiB0aGlzLl9hcGlLZXlcbiAgICB9LCBwYXJhbXMgfHwge30pO1xuICB9XG59IiwiaW1wb3J0IEh0dHBSZXF1ZXN0ZXIgZnJvbSAnLi4vaHR0cC9odHRwcmVxdWVzdGVyJztcbmltcG9ydCBBcGlSZXF1ZXN0IGZyb20gJy4uL2h0dHAvYXBpcmVxdWVzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpKS5zZWFyY2hQYXJhbXM7XG4gICAgbGV0IGlzTG9jYWwgPSBwYXJhbXMuZ2V0KCdsb2NhbCcpO1xuXG4gICAgdGhpcy5fcmVxdWVzdGVyID0gbmV3IEh0dHBSZXF1ZXN0ZXIoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBiYXNlVXJsIHRvIHVzZSBmb3IgbWFraW5nIGEgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9iYXNlVXJsID0gdGhpcy5faXNMb2NhbCA/ICdodHRwOi8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA6ICdodHRwczovL2xpdmVhcGkueWV4dC5jb20nO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIEFuc3dlcnMgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYW5zd2Vyc0tleSA9IG9wdHMuYW5zd2Vyc0tleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnNpb24gb2YgdGhlIEFQSSB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJzaW9uID0gb3B0cy52ZXJzaW9uIHx8IDIwMTkwMTAxIHx8IDIwMTkwMzAxO1xuICB9XG5cbiAgdmVydGljYWxRdWVyeShxdWVyeVN0cmluZywgdmVydGljYWxLZXkpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGJhc2VVcmw6IHRoaXMuX2Jhc2VVcmwsXG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL3ZlcnRpY2FsL3F1ZXJ5JyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBxdWVyeVN0cmluZyxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgICAndmVydGljYWxLZXknOiB2ZXJ0aWNhbEtleVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH1cblxuICBxdWVyeShxdWVyeVN0cmluZykge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgYmFzZVVybDogdGhpcy5fYmFzZVVybCxcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvcXVlcnknLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IHF1ZXJ5U3RyaW5nLFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9XG59XG5cblxuXG4iLCIvKipcbiAqIEEgRGF0YSBUcmFuc2Zvcm1lciB0aGF0IHRha2VzIHRoZSByZXNwb25zZSBvYmplY3QgZnJvbSBhIEF1dG9Db21wbGV0ZSByZXF1ZXN0XG4gKiBBbmQgdHJhbnNmb3JtcyBpbiB0byBhIGZyb250LWVuZCBvcmllbnRlZCBkYXRhIHN0cnVjdHVyZSB0aGF0IG91clxuICogY29tcG9uZW50IGxpYnJhcnkgYW5kIGNvcmUgc3RvcmFnZSB1bmRlcnN0YW5kLlxuICpcbiAqIFRPRE8oYmlsbHkpIENyZWF0ZSBvdXIgb3duIGZyb250LWVuZCBkYXRhIG1vZGVsc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIge1xuICBzdGF0aWMgY2xlYW4obW9kdWxlSWQsIGRhdGEpIHtcbiAgICBpZiAoZGF0YS5zZWN0aW9ucyAmJiBkYXRhLnNlY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVsZXRlIGRhdGEuc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuc2VjdGlvbnMgJiYgZGF0YS5zZWN0aW9ucy5sZW5ndGggPT09IDEgJiYgZGF0YS5zZWN0aW9uc1swXS5yZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVsZXRlIGRhdGEuc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICBbbW9kdWxlSWRdOiBkYXRhXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB1bml2ZXJzYWwocmVzcG9uc2UpIHtcbiAgICBsZXQgbW9kdWxlSWQgPSAnYXV0b2NvbXBsZXRlJyxcbiAgICAgICAgcmVzdWx0cyA9IHJlc3BvbnNlLnJlc3VsdHM7XG5cbiAgICBsZXQgZGF0YSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkgKyspIHtcbiAgICAgIGxldCB2YWx1ZSA9IHJlc3VsdHNbaV0udmFsdWUsXG4gICAgICAgICAgc3ViU3RyaW5ncyA9IHJlc3VsdHNbaV0ubWF0Y2hlZFN1YnN0cmluZ3M7XG5cbiAgICAgIGRhdGEucHVzaChBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIuaGlnaGxpZ2h0KHZhbHVlLCBzdWJTdHJpbmdzKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lci5jbGVhbignYXV0b2NvbXBsZXRlJywge1xuICAgICAgJ3NlY3Rpb25zJzogW3tcbiAgICAgICAgJ3Jlc3VsdHMnOiBkYXRhXG4gICAgICB9XVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGhpZ2hsaWdodCh2YWx1ZSwgc3ViU3RyaW5ncykge1xuICAgIGlmICghc3ViU3RyaW5ncyB8fCBzdWJTdHJpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2hvcnRWYWx1ZTogdmFsdWUsXG4gICAgICAgIGhpZ2hsaWdodGVkVmFsdWU6IHZhbHVlXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSBvdXIgaGlnaGxpZ2h0ZWQgc3Vic3RyaW5ncyBhcmUgc29ydGVkXG4gICAgc3ViU3RyaW5ncy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAoYS5vZmZzZXQgPCBiLm9mZnNldCkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG5cbiAgICAgIGlmIChhLm9mZnNldCA+IGIub2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIC8vIEJ1aWxkIG91ciBuZXcgdmFsdWUgYmFzZWQgb24gdGhlIGhpZ2hsaWdodHNcbiAgICBsZXQgaGlnaGxpZ2h0ZWRWYWx1ZSA9ICcnLFxuICAgICAgICBuZXh0U3RhcnQgPSAwO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzdWJTdHJpbmdzLmxlbmd0aDsgaiArKykge1xuICAgICAgbGV0IHN0YXJ0ID0gTnVtYmVyKHN1YlN0cmluZ3Nbal0ub2Zmc2V0KSxcbiAgICAgICAgICBlbmQgPSBzdGFydCArIHN1YlN0cmluZ3Nbal0ubGVuZ3RoO1xuXG4gICAgICBoaWdobGlnaHRlZFZhbHVlICs9IFt2YWx1ZS5zbGljZShuZXh0U3RhcnQsIHN0YXJ0KSwgJzxzdHJvbmc+JywgdmFsdWUuc2xpY2Uoc3RhcnQsIGVuZCksICc8L3N0cm9uZz4nXS5qb2luKCcnKTtcblxuICAgICAgaWYgKGogPT09IHN1YlN0cmluZ3MubGVuZ3RoIC0gMSAmJiBlbmQgPCB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRWYWx1ZSArPSB2YWx1ZS5zbGljZShlbmQpO1xuICAgICAgfVxuXG4gICAgICBuZXh0U3RhcnQgPSBlbmQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3J0VmFsdWU6IHZhbHVlLFxuICAgICAgaGlnaGxpZ2h0ZWRWYWx1ZTogaGlnaGxpZ2h0ZWRWYWx1ZSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHZlcnRpY2FsKHJlc3BvbnNlLCBiYXJLZXkpIHtcbiAgICBsZXQgbW9kdWxlSWQgPSAnYXV0b2NvbXBsZXRlLicgKyBiYXJLZXksXG4gICAgICAgIHNlY3Rpb25zID0gcmVzcG9uc2Uuc2VjdGlvbnM7XG5cbiAgICByZXR1cm4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLmNsZWFuKG1vZHVsZUlkLCB7XG4gICAgICAnc2VjdGlvbnMnOiBzZWN0aW9uc1xuICAgIH0pXG4gIH1cbn0iLCJpbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lciBmcm9tICcuL2F1dG9jb21wbGV0ZWRhdGF0cmFuc2Zvcm1lcic7XG5cbi8qKlxuICogQSB3cmFwcGVyIGFyb3VuZCB0aGUgQXV0b0NvbXBsZXRlIHtBcGlSZXF1ZXN0fSBlbmRwb2ludHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlIHtcbiAgY29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKCkpLnNlYXJjaFBhcmFtcztcbiAgICBsZXQgaXNMb2NhbCA9IHBhcmFtcy5nZXQoJ2xvY2FsJyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYmFzZVVybCB0byB1c2UgZm9yIG1ha2luZyBhIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYmFzZVVybCA9IHRoaXMuX2lzTG9jYWwgPyAnaHR0cDovLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgOiAnaHR0cHM6Ly9saXZlYXBpLnlleHQuY29tJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBpS2V5ID0gb3B0cy5hcGlLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBBbnN3ZXJzIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Fuc3dlcnNLZXkgPSBvcHRzLmFuc3dlcnNLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBBUEkgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVyc2lvbiA9IG9wdHMudmVyc2lvbiB8fCAyMDE5MDEwMSB8fCAyMDE5MDMwMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBxdWVyeSBzdXBwb3J0cyBib3RoIFVuaXZlcnNhbFNlYXJjaCBhbmQgVmVydGljYWxTZWFyY2ggYXV0byBjb21wbGV0aW5nLlxuICAgKiBQcm92aWRpbmcgYW4gZXhwZXJpZW5jZUtleSBhbmQgYmFyS2V5IHdpbGwgY3JlYXRlIGEgdmVydGljYWwgc2VhcmNoIGF1dG8gY29tcGxldGUgcmVxdWVzdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0IFRoZSBpbnB1dCB0byB1c2UgZm9yIGF1dG8gY29tcGxldGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cGVyaWVuY2VLZXkgVGhlIGV4cGVyaWVuY2Uga2V5IHRvIHVzZSBmb3IgYSB2ZXJ0aWNhbCBhdXRvIGNvbXBsZXRlIHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJhcktleSBUaGUgYmFyS2V5IHRvIHVzZSBmb3IgYSB2ZXJ0aWNhbCBzZWFyY2ggYXV0byBjb21wbGV0ZSByZXF1ZXN0XG4gICAqL1xuICBxdWVyeShpbnB1dCwgZXhwZXJpZW5jZUtleSwgYmFyS2V5KSB7XG4gICAgaWYgKGV4cGVyaWVuY2VLZXkgfHwgYmFyS2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5fcXVlcnlWZXJpdGNhbChpbnB1dCwgZXhwZXJpZW5jZUtleSwgYmFyS2V5KVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9xdWVyeVVuaXZlcnNhbChpbnB1dCk7XG4gIH1cblxuICBfcXVlcnlWZXJpdGNhbChpbnB1dCwgZXhwZXJpZW5jZUtleSwgYmFyS2V5KSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICAgIGJhc2VVcmw6IHRoaXMuX2Jhc2VVcmwsXG4gICAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2VudGl0aWVzL2F1dG9jb21wbGV0ZScsXG4gICAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAnaW5wdXQnOiBpbnB1dCxcbiAgICAgICAgICAnZXhwZXJpZW5jZUtleSc6IGV4cGVyaWVuY2VLZXksXG4gICAgICAgICAgJ2JhcktleSc6IGJhcktleVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lci52ZXJ0aWNhbChyZXNwb25zZS5yZXNwb25zZSwgcmVxdWVzdC5fcGFyYW1zLmJhcktleSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpXG4gIH1cblxuICBfcXVlcnlVbml2ZXJzYWwocXVlcnlTdHJpbmcpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGJhc2VVcmw6IHRoaXMuX2Jhc2VVcmwsXG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL2F1dG9jb21wbGV0ZScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogcXVlcnlTdHJpbmcsXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5fYW5zd2Vyc0tleVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHF1ZXJ5U3RyaW5nKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLnVuaXZlcnNhbChyZXNwb25zZS5yZXNwb25zZSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0IHtcbiAgY29uc3RydWN0b3IoZGF0YSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXN1bHRzRGF0YSBleHBlY3RlZCBmb3JtYXQ6IHsgZGF0YTogeyAuLi4gfSwgaGlnaGxpZ2h0ZWRGaWVsZHM6IHsgLi4uIH19XG4gICAqL1xuICBzdGF0aWMgZnJvbShyZXN1bHRzRGF0YSkge1xuICAgIGxldCByZXN1bHRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gVE9ETyB1c2UgcmVzdWx0RGF0YS5oaWdobGlnaHRlZEZpZWxkcyB0b1xuICAgICAgLy8gdHJhbnNmb3JtIHJlc3VsdERhdGEuZGF0YSBpbnRvIGh0bWwtZnJpZW5kbHkgc3RyaW5ncyB0aGF0IGhpZ2hsaWdodCB2YWx1ZXMuXG5cbiAgICAgIC8vIENoZWNrIGZvciBuZXcgZGF0YSBmb3JtYXQsIG90aGVyd2lzZSBmYWxsYmFjayB0byBsZWdhY3lcbiAgICAgIHJlc3VsdHMucHVzaChuZXcgUmVzdWx0KHJlc3VsdHNEYXRhW2ldLmRhdGEgfHwgcmVzdWx0c0RhdGFbaV0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxufVxuIiwiaW1wb3J0IFJlc3VsdCBmcm9tICcuL3Jlc3VsdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3RvcihkYXRhLCB1cmwpIHtcbiAgICB0aGlzLnZlcnRpY2FsQ29uZmlnSWQgPSBkYXRhLnZlcnRpY2FsQ29uZmlnSWQgfHwgbnVsbDtcblxuICAgIHRoaXMucmVzdWx0c0NvdW50ID0gZGF0YS5yZXN1bHRzQ291bnQgfHwgMDtcblxuICAgIHRoaXMuZW5jb2RlZFN0YXRlID0gZGF0YS5lbmNvZGVkU3RhdGUgfHwgJyc7XG5cbiAgICB0aGlzLmFwcGxpZWRRdWVyeUZpbHRlcnMgPSBkYXRhLmFwcGxpZWRRdWVyeUZpbHRlcnMgfHwgbnVsbDtcblxuICAgIHRoaXMuZmFjZXRzID0gZGF0YS5mYWNldHMgfHwgbnVsbDtcblxuICAgIHRoaXMucmVzdWx0cyA9IFJlc3VsdC5mcm9tKGRhdGEucmVzdWx0cyk7XG5cbiAgICB0aGlzLm1hcCA9IFNlY3Rpb24ucGFyc2VNYXAoZGF0YS5yZXN1bHRzKTtcblxuICAgIHRoaXMudmVydGljYWxVUkwgPSB1cmwgfHwgbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBwYXJzZU1hcChyZXN1bHRzKSB7XG4gICAgbGV0IG1hcE1hcmtlcnMgPSBbXSxcbiAgICAgICAgY2VudGVyQ29vcmRpbmF0ZXMgPSB7fTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmVzdWx0cy5sZW5ndGg7IGogKyspIHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIFJlbW92ZSBsZWdhY3kgZmFsbGJhY2sgZnJvbSBhbGwgZGF0YSBmb3JtYXRcbiAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzW2pdLmRhdGEgfHwgcmVzdWx0c1tqXTtcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZSkge1xuICAgICAgICBpZiAoIWNlbnRlckNvb3JkaW5hdGVzLmxhdGl0dWRlKSB7XG4gICAgICAgICAgY2VudGVyQ29vcmRpbmF0ZXMgPSB7XG4gICAgICAgICAgICBsYXRpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sb25naXR1ZGVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIG1hcE1hcmtlcnMucHVzaCh7XG4gICAgICAgICAgbGFiZWw6IG1hcE1hcmtlcnMubGVuZ3RoICsgMSxcbiAgICAgICAgICBsYXRpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sYXRpdHVkZSxcbiAgICAgICAgICBsb25naXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubG9uZ2l0dWRlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICdtYXBDZW50ZXInOiBjZW50ZXJDb29yZGluYXRlcyxcbiAgICAgICdtYXBNYXJrZXJzJzogbWFwTWFya2Vyc1xuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZnJvbShtb2R1bGVzLCB1cmxzKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gW107XG4gICAgaWYgKCFtb2R1bGVzKSB7XG4gICAgICByZXR1cm4gc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmV3IFNlY3Rpb24obW9kdWxlcyk7XG4gICAgfVxuXG4gICAgLy8gT3VyIHNlY3Rpb25zIHNob3VsZCBjb250YWluIGEgcHJvcGVydHkgb2YgbWFwTWFya2VyIG9iamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpICsrKSB7XG4gICAgICBzZWN0aW9ucy5wdXNoKFxuICAgICAgICBuZXcgU2VjdGlvbihcbiAgICAgICAgICBtb2R1bGVzW2ldLFxuICAgICAgICAgIHVybHNbbW9kdWxlc1tpXS52ZXJ0aWNhbENvbmZpZ0lkXVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBzZWN0aW9ucztcbiAgfVxufSIsImltcG9ydCBTZWN0aW9uIGZyb20gJy4vc2VjdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaXZlcnNhbFJlc3VsdHMge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5xdWVyeUlkID0gZGF0YS5xdWVyeUlkIHx8IG51bGw7XG5cbiAgICB0aGlzLnNlY3Rpb25zID0gZGF0YS5zZWN0aW9ucyB8fCBbXTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tKHJlc3BvbnNlLCB1cmxzKSB7XG4gICAgcmV0dXJuIG5ldyBVbml2ZXJzYWxSZXN1bHRzKHtcbiAgICAgIHF1ZXJ5SWQ6IHJlc3BvbnNlLnF1ZXJ5SWQsXG4gICAgICBzZWN0aW9uczogU2VjdGlvbi5mcm9tKHJlc3BvbnNlLm1vZHVsZXMsIHVybHMpXG4gICAgfSlcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdEFuc3dlciB7XG4gIGNvbnN0cnVjdG9yKGRpcmVjdEFuc3dlciA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkaXJlY3RBbnN3ZXIpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHRhYk9yZGVyKSB7XG4gICAgdGhpcy50YWJPcmRlciA9IHRhYk9yZGVyIHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIGZyb20obW9kdWxlcykge1xuICAgIGxldCBuYXYgPSBbXTtcbiAgICBpZiAoIW1vZHVsZXMgfHwgIUFycmF5LmlzQXJyYXkobW9kdWxlcykpIHtcbiAgICAgIHJldHVybiBuYXY7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkgKyspIHtcbiAgICAgIG5hdi5wdXNoKG1vZHVsZXNbaV0udmVydGljYWxDb25maWdJZClcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBOYXZpZ2F0aW9uKG5hdik7XG4gIH1cbn0iLCJpbXBvcnQgU2VjdGlvbiBmcm9tICcuL3NlY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0aWNhbFJlc3VsdHMge1xuICBjb25zdHJ1Y3RvcihkYXRhID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb20ocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gbmV3IFZlcnRpY2FsUmVzdWx0cyhTZWN0aW9uLmZyb20ocmVzcG9uc2UpKTtcbiAgfVxufVxuIiwiaW1wb3J0IFVuaXZlcnNhbFJlc3VsdHMgZnJvbSAnLi4vbW9kZWxzL3VuaXZlcnNhbHJlc3VsdHMnO1xuaW1wb3J0IERpcmVjdEFuc3dlciBmcm9tICcuLi9tb2RlbHMvZGlyZWN0YW5zd2VyJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL21vZGVscy9uYXZpZ2F0aW9uJztcbmltcG9ydCBWZXJ0aWNhbFJlc3VsdHMgZnJvbSAnLi4vbW9kZWxzL3ZlcnRpY2FscmVzdWx0cyc7XG5cbi8qKlxuICogQSBEYXRhIFRyYW5zZm9ybWVyIHRoYXQgdGFrZXMgdGhlIHJlc3BvbnNlIG9iamVjdCBmcm9tIGEgU2VhcmNoIHJlcXVlc3RcbiAqIEFuZCB0cmFuc2Zvcm1zIGluIHRvIGEgZnJvbnQtZW5kIG9yaWVudGVkIGRhdGEgc3RydWN0dXJlIHRoYXQgb3VyXG4gKiBjb21wb25lbnQgbGlicmFyeSBhbmQgY29yZSBzdG9yYWdlIHVuZGVyc3RhbmQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaERhdGFUcmFuc2Zvcm1lciB7XG4gIHN0YXRpYyB0cmFuc2Zvcm0oZGF0YSwgdXJscyA9IHt9KSB7XG4gICAgbGV0IHJlc3BvbnNlID0gZGF0YS5yZXNwb25zZTtcbiAgICByZXR1cm4ge1xuICAgICAgbmF2aWdhdGlvbjogTmF2aWdhdGlvbi5mcm9tKHJlc3BvbnNlLm1vZHVsZXMpLFxuICAgICAgZGlyZWN0QW5zd2VyOiBuZXcgRGlyZWN0QW5zd2VyKHJlc3BvbnNlLmRpcmVjdEFuc3dlciksXG4gICAgICB1bml2ZXJzYWxSZXN1bHRzOiBVbml2ZXJzYWxSZXN1bHRzLmZyb20ocmVzcG9uc2UsIHVybHMpXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB0cmFuc2Zvcm1WZXJ0aWNhbChkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZlcnRpY2FsUmVzdWx0czogVmVydGljYWxSZXN1bHRzLmZyb20oZGF0YS5yZXNwb25zZSlcbiAgICB9O1xuICB9XG59IiwiLyoqXG4gKiBFdmVudEVtaXR0ZXIgaXMgYSBiYXNlIGNsYXNzIGZvciBhbnkgb2JqZWN0IHRoYXQgd2FudHMgdG8gZXhwb3NlXG4gKiBhIHB1Yi9zdWIgaW50ZXJmYWNlLCBmb3IgZW1pdHRpbmcgbWVzc2FnZXMgYW5kIHByb3ZpZGluZyBsaXN0ZW5lcnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKlxuICAgICAqIFRoZSBzdWJzY3JpYmVycyBvZiBtZXNzYWdlc1xuICAgICAqIEB0eXBlIHtBcnJheS48T2JqZWN0Pn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIG9uIGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciBzdWJzY3JpYmluZyBldmVudHMgdGhhdCBhcmUgZW1pdHRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byBsaXN0ZW4gdG9cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgVGhlIGNhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSB7ZXZ0fSBpcyBlbWl0dGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSBPcHRpb25hbCB2YWx1ZSB3aGljaCB3aWxsIG9ubHkgaGFuZGxlIHRoZSBtZXNzYWdlIG9uY2VcbiAgICovXG4gIG9uKGV2dCwgY2IsIG9uY2UpIHtcbiAgICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbGxiYWNrIGhhbmRsZXIgc2hvdWxkIGJlIG9mIHR5cGUge2Z1bmN0aW9ufScpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9saXN0ZW5lcnNbZXZ0XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XSA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuX2xpc3RlbmVyc1tldnRdLnB1c2goe1xuICAgICAgZXZlbnQ6IGV2dCxcbiAgICAgIGNiOiBjYixcbiAgICAgIG9uY2U6IG9uY2UgfHwgZmFsc2VcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uY2UgaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIHN1YnNjcmliaW5nIGV2ZW50cyB0aGF0IGFyZSBlbWl0dGVkLlxuICAgKiBUaGUgaGFuZGxlciB3aWxsIG9ubHkgYmUgdHJpZ2dlcmVkIG9uY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gbGlzdGVuIHRvXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIFRoZSBjYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUge2V2dH0gaXMgZW1pdHRlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uY2UgT3B0aW9uYWwgdmFsdWUgd2hpY2ggd2lsbCBvbmx5IGhhbmRsZSB0aGUgbWVzc2FnZSBvbmNlXG4gICAqL1xuICBvbmNlKGV2dCwgY2IpIHtcbiAgICByZXR1cm4gdGhpcy5vbihldnQsIGNiLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvZmYgaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIHVuc3Vic2NyaWJpbmcgZnJvbSBhbiBldmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIHVuc3Vic2NyaWJlIGZyb21cbiAgICovXG4gIG9mZihldnQpIHtcbiAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW2V2dF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogZW1pdCBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3IgYnJvYWRjYXN0aW5nIG1lc3NhZ2VzL2V2ZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIHB1Ymxpc2ggZnJvbVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSB0aGUgZGF0YSB0byBzZW5kIGFsb25nIHRvIHRoZSBzdWJzY3JpYmVyc1xuICAgKi9cbiAgZW1pdChldnQsIGRhdGEpIHtcbiAgICBsZXQgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2dF07XG4gICAgaWYgKGxpc3RlbmVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSW52b2tlIGVhY2ggb2YgYWxsIHRoZSBsaXN0ZW5lciBoYW5kbGVycyBhbmQgcmVtb3ZlIHRoZSBvbmVzIHRoYXQgc2hvdWxkIGZpcmUgb25seSBvbmNlLlxuICAgIGxldCBrZWVwID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpICsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0uY2IoZGF0YSk7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldLm9uY2UgPT09IHRydWUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEluc3RlYWQgb2YgaGF2aW5nIGEgJ2RpcnR5JyBhcnJheSB3aXRoIGRlbGV0ZWQgb3IgJ3VuZGVmaW5lZCcgZW50cmllcyxcbiAgICAgIC8vIHdlIGp1c3QgY3JlYXRlIGEgYnJhbmQgbmV3IGFycmF5IHdpdGhvdXQgdGhlIGxpc3RlbmVycyB0aGF0IHdlcmUgcmVtb3ZlZFxuICAgICAga2VlcC5wdXNoKGxpc3RlbmVyc1tpXSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIG91ciBvbGQgbGlzdCBvZiBsaXN0ZW5lcnMgdG8gdGhlIG5ld2x5IGNyZWF0ZWQgYXJyYXlcbiAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XSA9IGtlZXA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn0iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50ZW1pdHRlci9ldmVudGVtaXR0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2R1bGVEYXRhIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoaWQsIGRhdGEgPSB7fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLl9pZCA9IGlkO1xuXG4gICAgdGhpcy5faGlzdG9yeSA9IFtdO1xuXG4gICAgdGhpcy5fZGF0YSA9IHt9O1xuXG4gICAgdGhpcy5zZXQoZGF0YSk7XG4gIH1cblxuICBzZXQoZGF0YSkge1xuICAgIGRhdGEgPSBkYXRhIHx8IHt9O1xuXG4gICAgaWYgKHRoaXMuX2RhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fZGF0YSA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMuY2FwdHVyZVByZXZpb3VzKCk7XG5cbiAgICAvLyBUT0RPKGJpbGx5KSBUaGlzIGFzc3VtZXMgdGhlIHRvcCBsZXZlbCBwcm9wZXJ0aWVzIGFyZSBhbGwgY29udGFpbmVkIHdpdGhpblxuICAgIC8vIGFuIG9iamVjdC4gUHJvYmFibHkgbm90IGEgZ29vZCBhc3N1bXB0aW9uIHRvIG1ha2UuXG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKSxcbiAgICAgICAgbGVuID0ga2V5cy5sZW5ndGgsXG4gICAgICAgIGlzRGlydHkgPSBmYWxzZTtcblxuICAgIC8vIFJlc2V0IHRoZSBvYmplY3QgaWYgaXRzIGJlaW5nIGFwcGxpZWQgYXMgZW1wdHlcbiAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgaXNEaXJ0eSA9IHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKyspIHtcbiAgICAgIGxldCBwcm9wID0ga2V5c1tpXSxcbiAgICAgICAgICB2YWwgPSBkYXRhW2tleXNbaV1dO1xuXG4gICAgICAvLyBUT0RPKGJpbGx5KSBGb3Igbm93LCBvbmUgbGV2ZWwgb2YgY29tcGFyaXNvbiBpcyBwcm9iYWJseSBmaW5lLFxuICAgICAgLy8gaW4gdGhlIGZ1dHVyZSB3ZSdsbCBwcm9iYWJseSBuZWVkIHRvIGRvIHNvbWUgZGVlcGVyIG9iamVjdCBjb21wYXJpc29uc1xuICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGFscmVhZHkgY29ycmVjdCwgbm8gdXBkYXRlcyFcbiAgICAgIGlmICh0aGlzLl9kYXRhW3Byb3BdID09PSB2YWwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2RhdGFbcHJvcF0gPSB2YWw7XG4gICAgICBpc0RpcnR5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBPbmx5IGVtaXQgdXBkYXRlcyBpZiB0aGUgbW9kZWwgd2FzIGRpcnR5XG4gICAgaWYgKGlzRGlydHkpIHtcbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5fZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjYXB0dXJlUHJldmlvdXMoKSB7XG4gICAgaWYgKHRoaXMuX2hpc3RvcnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5faGlzdG9yeSA9IFtdO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9oaXN0b3J5Lmxlbmd0aCArIDEgPiA1KSB7XG4gICAgICB0aGlzLl9oaXN0b3J5LnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgLy8gSWYgZGF0YSBpcyBldmVyIHVuZGVmaW5lZCwgd2UgZGVmYXVsdCB0byBlbXB0eSBvYmplY3RcbiAgICB0aGlzLl9oaXN0b3J5LnB1c2goSlNPTi5zdHJpbmdpZnkodGhpcy5fZGF0YSB8fCB7fSkpO1xuICB9XG5cbiAgdW5kbygpIHtcbiAgICBsZXQgcHJldmlvdXMgPSB7fTtcbiAgICBpZiAodGhpcy5fcHJldmlvdXMubGVuZ3RoID4gMCkge1xuICAgICAgcHJldmlvdXMgPSBKU09OLnBhcnNlKHRoaXMuX3ByZXZpb3VzLnBvcCgpKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRhLnNldChwcmV2aW91cyk7XG4gIH1cblxuICByYXcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbn1cbiIsImltcG9ydCBNb2R1bGVEYXRhIGZyb20gJy4vbW9kdWxlZGF0YSc7XG5pbXBvcnQgU2VhcmNoRGF0YVRyYW5zZm9ybWVyIGZyb20gJy4uL3NlYXJjaC9zZWFyY2hkYXRhdHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lciA9IHt9XG5cbiAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnMgPSB7fTtcbiAgfTtcblxuICBpbml0KCkge1xuXG4gIH1cblxuICBpbnNlcnQoZGF0YSkge1xuICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbW9kdWxlSWRzID0gT2JqZWN0LmtleXMoZGF0YSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2R1bGVJZHMubGVuZ3RoOyBpICsrKSB7XG4gICAgICBsZXQgbW9kdWxlSWQgPSBtb2R1bGVJZHNbaV07XG4gICAgICBpZiAodGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXSA9IG5ldyBNb2R1bGVEYXRhKG1vZHVsZUlkKTtcbiAgICAgICAgdGhpcy5fYXBwbHlGdXR1cmVMaXN0ZW5lcnMobW9kdWxlSWQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5zZXQoZGF0YVttb2R1bGVJZF0pO1xuICAgIH1cbiAgfVxuXG4gIGluc2VydFVuaXZlcnNhbFJlc3VsdHMoZGF0YSkge1xuICAgIHRoaXMuaW5zZXJ0KFNlYXJjaERhdGFUcmFuc2Zvcm1lci50cmFuc2Zvcm0oZGF0YSkpO1xuICB9XG5cbiAgZ2V0U3RhdGUobW9kdWxlSWQpIHtcbiAgICBpZiAodGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5yYXcoKTtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgb24oZXZ0LCBtb2R1bGVJZCwgY2IpIHtcbiAgICBsZXQgbW9kdWxlRGF0YSA9IHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdO1xuICAgIGlmIChtb2R1bGVEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXSA9IFtdO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdLnB1c2goe1xuICAgICAgICBldmVudDogZXZ0LFxuICAgICAgICBjYjogY2JcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5vbihldnQsIGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9mZihldnQsIG1vZHVsZUlkLCBjYikge1xuICAgIGxldCBtb2R1bGVEYXRhID0gdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF07XG4gICAgaWYgKG1vZHVsZURhdGEgPT09IHVuZGVmaW5lZCkge1xuXG4gICAgICBpZiAodGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0ucG9wKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdLm9mZihldnQsIGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9hcHBseUZ1dHVyZUxpc3RlbmVycyhtb2R1bGVJZCkge1xuICAgIGxldCBmdXR1cmVzID0gdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXTtcbiAgICBpZiAoIWZ1dHVyZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZ1dHVyZXMubGVuZ3RoOyBpICsrKSB7XG4gICAgICBsZXQgZnV0dXJlID0gZnV0dXJlc1tpXTtcbiAgICAgIHRoaXMub24oZnV0dXJlLmV2ZW50LCBtb2R1bGVJZCwgZnV0dXJlLmNiKTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF07XG4gIH1cbn0iLCJpbXBvcnQgU2VhcmNoIGZyb20gJy4vc2VhcmNoL3NlYXJjaCc7XG5pbXBvcnQgQXV0b0NvbXBsZXRlIGZyb20gJy4vc2VhcmNoL2F1dG9jb21wbGV0ZSc7XG5cbmltcG9ydCBTZWFyY2hEYXRhVHJhbnNmb3JtZXIgZnJvbSAnLi9zZWFyY2gvc2VhcmNoZGF0YXRyYW5zZm9ybWVyJztcblxuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlL3N0b3JhZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmUge1xuICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcbiAgICBpZiAodHlwZW9mIG9wdHMuYXBpS2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGBhcGlLZXlgLiBUeXBlIG11c3QgYmUge3N0cmluZ30nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdHMuYW5zd2Vyc0tleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBgYW5zd2Vyc0tleWAuIFR5cGUgbXVzdCBiZSB7c3RyaW5nfScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjbGllbnQgQVBJIEtleSB1c2VkIGZvciBhbGwgcmVxdWVzdHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBpS2V5ID0gb3B0cy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IEFuc3dlcnMgS2V5IHVzZWQgZm9yIGFsbCByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hbnN3ZXJzS2V5ID0gb3B0cy5hbnN3ZXJzS2V5O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNvcmUgZGF0YSBzdG9yYWdlIHRoYXQgcG93ZXJzIHRoZSBVSVxuICAgICAqIEB0eXBlIHtTdG9yYWdlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5zdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIGNvbnRhaW5pbmcgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIFJFU1RmdWwgc2VhcmNoIEFQSVxuICAgICAqIEZvciBib3RoIHZlcnRpY2FsIGFuZCB1bml2ZXJzYWwgc2VhcmNoXG4gICAgICogQHR5cGUge1NlYXJjaH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaGVyID0gbmV3IFNlYXJjaCh7XG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIGFuc3dlcnNLZXk6IHRoaXMuX2Fuc3dlcnNLZXlcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIGNvbnRhaW5pbmcgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIFJFU1RmdWwgYXV0b2NvbXBsZXRlIEFQSVxuICAgICAqIEZvciBib3RoIHZlcnRpY2FsIGFuZCB1bml2ZXJzYWwgc2VhcmNoXG4gICAgICogQHR5cGUge1NlYXJjaH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2F1dG9Db21wbGV0ZSA9IG5ldyBBdXRvQ29tcGxldGUoe1xuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICBhbnN3ZXJzS2V5OiB0aGlzLl9hbnN3ZXJzS2V5XG4gICAgfSk7XG4gIH1cblxuICB2ZXJ0aWNhbFNlYXJjaChxdWVyeVN0cmluZywgdmVydGljYWxLZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoZXJcbiAgICAgIC52ZXJ0aWNhbFF1ZXJ5KHF1ZXJ5U3RyaW5nLCB2ZXJ0aWNhbEtleSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IFNlYXJjaERhdGFUcmFuc2Zvcm1lci50cmFuc2Zvcm1WZXJ0aWNhbChyZXNwb25zZSkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLmluc2VydChkYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5U3RyaW5nLCB1cmxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaGVyXG4gICAgICAucXVlcnkocXVlcnlTdHJpbmcpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBTZWFyY2hEYXRhVHJhbnNmb3JtZXIudHJhbnNmb3JtKHJlc3BvbnNlLCB1cmxzKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnN0b3JhZ2UuaW5zZXJ0KGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSlcbiAgfVxuXG4gIGF1dG9Db21wbGV0ZShxdWVyeVN0cmluZywgZXhwZXJpZW5jZUtleSwgYmFyS2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5KHF1ZXJ5U3RyaW5nLCBleHBlcmllbmNlS2V5LCBiYXJLZXkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLmluc2VydChkYXRhKTtcbiAgICAgIH0pXG4gIH1cblxuICBvbihldnQsIG1vZHVsZUlkLCBjYikge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2Uub24oZXZ0LCBtb2R1bGVJZCwgY2IpO1xuICB9XG59XG5cbiIsIi8qKlxuICogQ29tcG9uZW50TWFuYWdlciBpcyBhIFNpbmdsZXRvbmUgdGhhdCBjb250YWlucyBib3RoIGFuIGludGVybmFsIHJlZ2lzdHJ5IG9mXG4gKiBlbGlnaWJsZSBjb21wb25lbnRzIHRvIGJlIGNyZWF0ZWQsIGFzIHdlbGwgYXMga2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnRcbiAqIGluc3RhbnRpYXRlZCBhbmQgYWN0aXZlIGNvbXBvbmVudHMuXG4gKlxuICogQUxMIGNvbXBvbmVudHMgc2hvdWxkIGJlIGNvbnN0cnVjdGVkIHVzaW5nIHRoZSB7Q29tcG9uZW50TWFuYWdlcn0gdmlhIGl0cyBgY3JlYXRlYCBtZXRob2QuXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKCFDb21wb25lbnRNYW5hZ2VyLnNldEluc3RhbmNlKHRoaXMpKSB7XG4gICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnQgcmVnaXN0cnkgaXMgYW4gaW50ZXJuYWwgbWFwLCB0aGF0IGNvbnRhaW5zXG4gICAgICogYWxsIGF2YWlsYWJsZSBjb21wb25lbnQgQ0xBU1NFUyB1c2VkIGZvciBjcmVhdGlvbiBvciBvdmVycmlkZS5cbiAgICAgKiBFYWNoIGNvbXBvbmVudCBjbGFzcyBoYXMgYSB1bmlxdWUgVFlQRSwgd2hpY2ggaXMgdXNlZCBhcyB0aGUga2V5IGZvciB0aGUgcmVnaXN0cnlcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5ID0ge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYWN0aXZlIGNvbXBvbmVudHMgaXMgYW4gaW50ZXJuYWwgY29udGFpbmVyIHRvIGtlZXAgdHJhY2tcbiAgICAgKiBvZiBhbGwgb2YgdGhlIGNvbXBvbmVudHMgdGhhdCBoYXZlIGJlZW4gY29uc3RydWN0ZWRcbiAgICAgKi9cbiAgICB0aGlzLl9hY3RpdmVDb21wb25lbnRzID0ge307XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY29yZSBsaWJyYXJ5IGRlcGVuZGVuY3lcbiAgICAgKlxuICAgICAqIFRoZSBDb3JlIGNvbnRhaW5zIGJvdGggdGhlIHN0b3JhZ2UgQU5EIHNlcnZpY2VzIHRoYXQgYXJlIG5lZWRlZCBmb3IgcGVyZm9ybWluZyBvcGVyYXRpb25zXG4gICAgICogbGlrZSBzZWFyY2ggYW5kIGF1dG8gY29tcGxldGUuXG4gICAgICpcbiAgICAgKiBUaGUgc3RvcmFnZSBpcyB0aGUgc291cmNlIG9mIHRydXRoIGZvciB0aGUgc3RhdGUgb2YgQUxMIGNvbXBvbmVudHMuXG4gICAgICogV2hlbmV2ZXIgdGhlIHN0b3JhZ2UgaXMgdXBkYXRlZCwgdGhlIHN0YXRlIGdldHMgcHVzaGVkIGRvd24gdG8gdGhlIG5lY2Vzc2FyeSBjb21wb25lbnRzLlxuICAgICAqIEB0eXBlIHtDb3JlfVxuICAgICAqL1xuICAgIHRoaXMuX2NvcmUgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHByaW1hcnkgcmVuZGVyZXIgdG8gdXNlIGZvciBhbGwgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtIYW5kbGViYXJzUmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyZXIgPSBudWxsO1xuICB9XG5cbiAgc3RhdGljIHNldEluc3RhbmNlKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgc2V0UmVuZGVyZXIocmVuZGVyZXIpIHtcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0Q29yZShjb3JlKSB7XG4gICAgdGhpcy5fY29yZSA9IGNvcmU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXJzIGEgY29tcG9uZW50IHRvIGJlIGVsaWdpYmxlIGZvciBjcmVhdGlvbiBhbmQgb3ZlcnJpZGUuXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBUaGUgQ29tcG9uZW50IENsYXNzIHRvIHJlZ2lzdGVyXG4gICAqL1xuICByZWdpc3Rlcihjb21wb25lbnRDbGF6eikge1xuICAgIHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5W2NvbXBvbmVudENsYXp6LnR5cGVdID0gY29tcG9uZW50Q2xheno7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIGlzIHRoZSBlbnRyeSBwb2ludCBmb3IgY29uc3RydWN0aW5nIGFueSBhbmQgYWxsIGNvbXBvbmVudHMuXG4gICAqIEl0IHdpbGwgaW5zdGFudGlhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudCwgYW5kIGJvdGggYXBwbHlcbiAgICogaW5pdGlhbCBzdGF0ZSBmcm9tIHRoZSBzdG9yYWdlIGFuZCBiaW5kIGl0IHRvIHRoZSBzdG9yYWdlIGZvciB1cGRhdGVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50VHlwZSBUaGUgY29tcG9uZW50IHR5cGUgdG8gY3JlYXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIFRoZSBvcHRpb25zIHRvIHBpcGUgdG8gdGhlIGNvbnN0cnVjdGlvbiBvZiB0aGUgY29tcG9uZW50XG4gICAqL1xuICBjcmVhdGUoY29tcG9uZW50VHlwZSwgb3B0cykge1xuICAgIC8vIEV2ZXJ5IGNvbXBvbmVudCBuZWVkcyBsb2NhbCBhY2Nlc3MgdG8gdGhlIGNvbXBvbmVudCBtYW5hZ2VyXG4gICAgLy8gYmVjYXVzZSBzb21ldGltZXMgY29tcG9uZW50cyBoYXZlIHN1YmNvbXBvbmVudHMgdGhhdCBuZWVkIHRvIGJlXG4gICAgLy8gY29uc3RydWN0ZWQgZHVyaW5nIGNyZWF0aW9uXG4gICAgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29yZTogdGhpcy5fY29yZSxcbiAgICAgIHJlbmRlcmVyOiB0aGlzLl9yZW5kZXJlcixcbiAgICAgIGNvbXBvbmVudE1hbmFnZXI6IHRoaXMsXG4gICAgfSwgb3B0cyk7XG5cbiAgICAvLyBJbnN0YW50aWF0ZSBvdXIgbmV3IGNvbXBvbmVudCBhbmQga2VlcCB0cmFjayBvZiBpdFxuICAgIGxldCBjb21wb25lbnQgPVxuICAgICAgbmV3IHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5W2NvbXBvbmVudFR5cGVdKG9wdHMpXG4gICAgICAgIC5pbml0KG9wdHMpO1xuXG4gICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50c1tjb21wb25lbnRUeXBlXSA9IGNvbXBvbmVudDtcblxuICAgIC8vIElmIHRoZXJlIGlzIGEgbG9jYWwgc3RvcmFnZSB0byBwb3dlciBzdGF0ZSwgYXBwbHkgdGhlIHN0YXRlXG4gICAgLy8gZnJvbSB0aGUgc3RvcmFnZSB0byB0aGUgY29tcG9uZW50LCBhbmQgdGhlbiBiaW5kIHRoZSBjb21wb25lbnRcbiAgICAvLyBzdGF0ZSB0byB0aGUgc3RvcmFnZSB2aWEgaXRzIHVwZGF0ZXNcbiAgICBpZiAodGhpcy5fY29yZS5zdG9yYWdlICE9PSBudWxsKSB7XG4gICAgICBpZiAoY29tcG9uZW50Lm1vZHVsZUlkID09PSB1bmRlZmluZWQgfHwgY29tcG9uZW50Lm1vZHVsZUlkID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NvcmUuc3RvcmFnZVxuICAgICAgICAub24oJ3VwZGF0ZScsIGNvbXBvbmVudC5tb2R1bGVJZCwgKGRhdGEpID0+IHtcbiAgICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgfVxuXG4gIGdldEFjdGl2ZUNvbXBvbmVudCh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHNbdHlwZV07XG4gIH1cbn1cbiIsIi8qKlxuICogUmVuZGVyZXIgaXMgYW4gYWJzdHJhY3QgY2xhc3MgdGhhdCBhbGwgUmVuZGVyZXJzIHNob3VsZCBleHRlbmQgYW5kIGltcGxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciB7XG4gIC8qKlxuICAgKiByZW5kZXIgaXMgYSBjb3JlIG1ldGhvZCBmb3IgYWxsIHJlbmRlcmVycy5cbiAgICogQWxsIGltcGxlbWVudGF0aW9ucyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBjbGFzc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICovXG4gIHJlbmRlcih0ZW1wbGF0ZSwgZGF0YSkge1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHJlZ2lzdGVySGVscGVyKG5hbWUsIGNiKSB7XG5cbiAgfVxuXG4gIGNvbXBpbGUodGVtcGxhdGUpIHtcblxuICB9XG59XG4iLCJjb25zdCBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcbmNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9NIHtcbiAgLyoqXG4gICAqIGNyZWF0ZSBhIEhUTUxFbGVtZW50IGZyb20gYW5kIEhUTUwgc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBodG1sIFRoZSBIVE1MIHRvIHBhcnNlIHRvIGEgRE9NIG5vZGUuXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZShodG1sKSB7XG4gICAgcmV0dXJuIHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgJ3RleHQvaHRtbCcpLmJvZHk7XG4gIH1cblxuICAvKipcbiAgICogcXVlcnkgdGhlIERPTSBmb3IgYSBnaXZlbiBjc3Mgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50IE9wdGlvbmFsIGNvbnRleHQgdG8gdXNlIGZvciBhIHNlYXJjaC4gRGVmYXVsdHMgdG8gZG9jdW1lbnQgaWYgbm90IHByb3ZpZGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgdGhlIENTUyBzZWxlY3RvciB0byBxdWVyeSBmb3JcbiAgICpcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSB0aGUgRklSU1Qgbm9kZSBpdCBmaW5kcywgaWYgYW55XG4gICAqL1xuICBzdGF0aWMgcXVlcnkocGFyZW50LCBzZWxlY3Rvcikge1xuICAgIC8vIEZhY2FkZSwgc2hpZnRpbmcgdGhlIHNlbGVjdG9yIHRvIHRoZSBwYXJlbnQgYXJndW1lbnQgaWYgb25seSBvbmVcbiAgICAvLyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RvciA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgV2luZG93KSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBxdWVyeSB0aGUgRE9NIGZvciBhIGdpdmVuIGNzcyBzZWxlY3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgT3B0aW9uYWwgY29udGV4dCB0byB1c2UgZm9yIGEgc2VhcmNoLiBEZWZhdWx0cyB0byBkb2N1bWVudCBpZiBub3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciB0aGUgQ1NTIHNlbGVjdG9yIHRvIHF1ZXJ5IGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IHRoZSBGSVJTVCBub2RlIGl0IGZpbmRzLCBpZiBhbnlcbiAgICovXG4gIHN0YXRpYyBxdWVyeUFsbChwYXJlbnQsIHNlbGVjdG9yKSB7XG4gICAgLy8gRmFjYWRlLCBzaGlmdGluZyB0aGUgc2VsZWN0b3IgdG8gdGhlIHBhcmVudCBhcmd1bWVudCBpZiBvbmx5IG9uZVxuICAgIC8vIGFyZ3VtZW50IGlzIHByb3ZpZGVkXG4gICAgaWYgKHNlbGVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNlbGVjdG9yID0gcGFyZW50O1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICB9XG5cblxuICAvKipcbiAgICogY3JlYXRlRWxlIHdpbGwgY3JlYXRlIGEge0hUTUxFbGVtZW50fSBhbmQgYXBwbHkgdGhlIHByb3BlcnRpZXMgYXR0cmlidXRlcyB0aHJvdWdoIGFuIG9iamVjdCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGVsIFRoZSBlbGVtZW50IGB0YWdgIG5hbWUgdG8gY29uc3RydWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzX2RhdGEgT3B0aW9uYWwgYXR0cmlidXRlcyB0byBhcHBseSB0byB0aGUgbmV3IEhUTUxFbGVtZW50XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlRWwoZWwsIG9wdHNfZGF0YSA9IHt9KSB7XG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsKSxcbiAgICAgICAgcHJvcHMgPSBPYmplY3Qua2V5cyhvcHRzX2RhdGEpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByb3BzW2ldID09PSAnY2xhc3MnKSB7XG4gICAgICAgIERPTS5hZGRDbGFzcyhub2RlLCBvcHRzX2RhdGFbcHJvcHNbaV1dKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIG5vZGVbcHJvcHNbaV1dID0gb3B0c19kYXRhW3Byb3BzW2ldXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBhcHBlbmQocGFyZW50LCBub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbm9kZSA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcGFyZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgcGFyZW50ID0gRE9NLnF1ZXJ5KHBhcmVudCk7XG4gICAgfVxuXG4gICAgLy8gU3VwcG9ydCBIVE1MIGluamVjdGlvbiBhcyB3ZWxsIGFzIEhUTUxFbGVtZW50IGFwcGVuZHNcbiAgICBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlckJlZ2luJywgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKSB7XG4gICAgbGV0IGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJywnKSxcbiAgICAgICAgbGVuID0gY2xhc3Nlcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArKykge1xuICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzZXNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBlbXB0eShwYXJlbnQpIHtcbiAgICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICBzdGF0aWMgY3NzKHNlbGVjdG9yLCBzdHlsZXMpIHtcbiAgICBsZXQgbm9kZSA9IERPTS5xdWVyeShzZWxlY3Rvcik7XG5cbiAgICBmb3IgKGxldCBwcm9wIGluIHN0eWxlcykge1xuICAgICAgbm9kZS5zdHlsZVtwcm9wXSA9IHN0eWxlc1twcm9wXTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYXR0cihzZWxlY3RvciwgYXR0ciwgdmFsKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsKTtcbiAgfVxuXG4gIHN0YXRpYyB0cmlnZ2VyKHNlbGVjdG9yLCBldmVudCwgc2V0dGluZ3MpIHtcbiAgICBsZXQgZSA9IG5ldyBFdmVudChldmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAnYnViYmxlcyc6IHRydWUsXG4gICAgICAnY2FuY2VsYWJsZSc6IHRydWVcbiAgICB9LCBzZXR0aW5ncyB8fCB7fSkpXG5cbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLmRpc3BhdGNoRXZlbnQoZSk7XG4gIH1cblxuICBzdGF0aWMgb24oc2VsZWN0b3IsIGV2dCwgaGFuZGxlcikge1xuICAgIERPTS5xdWVyeShzZWxlY3RvcikuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIG9mZihzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZGVsZWdhdGUoY3R4dCwgc2VsZWN0b3IsIGV2dCwgaGFuZGxlcikge1xuICAgIGxldCBlbCA9IERPTS5xdWVyeShjdHh0KTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2dCwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgd2hpbGUgKCF0YXJnZXQuaXNFcXVhbE5vZGUoZWwpKSB7XG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICBoYW5kbGVyKGV2ZW50LCB0YXJnZXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn0iLCJpbXBvcnQgRE9NIGZyb20gJy4uL2RvbS9kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZUxvYWRlciB7XG4gIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgIGlmICghVGVtcGxhdGVMb2FkZXIuc2V0SW5zdGFuY2UodGhpcykpIHtcbiAgICAgIHJldHVybiBUZW1wbGF0ZUxvYWRlci5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpKS5zZWFyY2hQYXJhbXM7XG4gICAgbGV0IGlzTG9jYWwgPSBwYXJhbXMuZ2V0KCdsb2NhbCcpO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVVcmwgPSBvcHRzLnRlbXBsYXRlVXJsIHx8IChpc0xvY2FsID8gJy4uL2Rpc3QvYW5zd2Vyc3RlbXBsYXRlcy5jb21waWxlZC5taW4uanMnIDogJ2h0dHBzOi8vYW5zd2Vyc2pzLm5ldGxpZnkuY29tL2Fuc3dlcnN0ZW1wbGF0ZXMuY29tcGlsZWQubWluLmpzJyk7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB7fTtcblxuICAgIHRoaXMuX29uTG9hZGVkID0gZnVuY3Rpb24oKSB7fTtcblxuICAgIHRoaXMuX2luaXQoKVxuICB9XG5cbiAgc3RhdGljIHNldEluc3RhbmNlKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlKG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIF9pbml0KCkge1xuICAgIHRoaXMuZmV0Y2hUZW1wbGF0ZXMoKTtcbiAgfVxuXG4gIGZldGNoVGVtcGxhdGVzKCkge1xuICAgIC8vIElmIHdlIGFscmVhZHkgaGF2ZSB0ZW1wbGF0ZXMgbG9hZGVkLCBkbyBub3RoaW5nXG4gICAgbGV0IG5vZGUgPSBET00ucXVlcnkoJyN5ZXh0LWFuc3dlcnMtdGVtcGxhdGVzJyk7XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgLy8gSW5qZWN0IGEgc2NyaXB0IHRvIGZldGNoIHRoZSBjb21waWxlZCB0ZW1wbGF0ZXMsXG4gICAgLy8gd3JhcHBpbmcgaXQgYSBQcm9taXNlIGZvciBjbGVhbmxpbmVzc1xuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBzY3JpcHQgPSBET00uY3JlYXRlRWwoJ3NjcmlwdCcsIHtcbiAgICAgICAgaWQ6ICd5ZXh0LWFuc3dlcnMtdGVtcGxhdGVzJyxcbiAgICAgICAgb25sb2FkOiByZXNvbHZlLFxuICAgICAgICBvbmVycm9yOiByZWplY3QsXG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBzcmM6IHRoYXQuX3RlbXBsYXRlVXJsXG4gICAgICB9KTtcblxuICAgICAgRE9NLmFwcGVuZCgnYm9keScsIHNjcmlwdCk7XG4gICAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIEltcGxtZW5ldCBlcnJvciBoYW5kbGluZyBoZXJlIChlLmcuIHJlcXVlc3QgY291bGQgZmFpbClcbiAgICAgIGNvbnNvbGUubG9nKCdUZW1wbGF0ZXMgbG9hZGVkIHN1Y2Nlc3NmdWxseSEnKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZWdpc3RlciB0aGUgdGVtcGxhdGVzIGludGVybmFsbHkgc28gdGhhdCB0aGV5IGNhbiBiZSBsYXRlciBjb25zdW1lZFxuICAgKiAoZS5nLiBieSBjb21wb25lbnRzIGFuZCByZW5kZXJlcnMpIHdpdGggY29udmllbmllbmNlLlxuICAgKlxuICAgKiBgZmV0Y2hUZW1wbGF0ZXNgIHdpbGwgYXV0b21hdGljYWxseSBjYWxsIHRoaXMsIHByb3ZpZGluZyB0aGUgY29tcGlsZWQgdGVtcGxhdGVzIGZyb20gdGhlIHNlcnZlci5cbiAgICovXG4gIHJlZ2lzdGVyKHRlbXBsYXRlcykge1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHRlbXBsYXRlcztcblxuICAgIC8vIE5vdGlmeSBvdXIgY29uc3VtZXJzIHRoYXQgdGhlIHRlbXBsYXRlcyBhcmUgaGVyZSA6KVxuICAgIHRoaXMuX29uTG9hZGVkKHRoaXMuX3RlbXBsYXRlcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBvbkxvYWRlZChjYikge1xuICAgIHRoaXMuX29uTG9hZGVkID0gY2I7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQodGVtcGxhdGVOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlc1t0ZW1wbGF0ZU5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4gVGhlIGludGVybmFsIHRlbXBsYXRlIGNvbGxlY3Rpb25cbiAgICovXG4gIGdldFRlbXBsYXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVzO1xuICB9XG59IiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRlbXBsYXRlTG9hZGVyIGZyb20gJy4vdGVtcGxhdGVsb2FkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYW5kbGViYXJzUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlcyA9IHt9LCBvcHRzID0ge30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGhhbmRsZWJhcnMgY29tcGlsZXJcbiAgICAgKiBAdHlwZSB7SGFuZGxlYmFyc31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2hhbmRsZWJhcnMgPSB0ZW1wbGF0ZXMuX2hiIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgcHJlLWNvbXBpbGVkIGhhbmRsZWJhcnMgdGVtcGxhdGVzXG4gICAgICogQHR5cGUge0hhbmRsZWJhcnN9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXMgfHwge307XG4gIH1cblxuICBpbml0KHRlbXBsYXRlcykge1xuICAgIC8vIEFzc2lnbiB0aGUgaGFuZGxlYmFycyBjb21waWxlciBhbmQgdGVtcGxhdGVzIGJhc2VkIG9uXG4gICAgLy8gaW5mb3JtYXRpb24gcHJvdmlkZWQgZnJvbSBleHRlcm5hbCBkZXAgKGluIGRlZmF1bHQgY2FzZSwgaXQgY29tZXMgZnJvbSBleHRlcm5hbCBzZXJ2ZXIgcmVxdWVzdClcbiAgICB0aGlzLl9oYW5kbGViYXJzID0gdGVtcGxhdGVzLl9oYjtcbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXM7XG5cbiAgICAvLyBUT0RPKGJpbGx5KSBPbmNlIHdlIHJlLXdyaXRlIHRlbXBsYXRlcyB1c2luZyB0aGUgbmV3IGhlbHBlcnMgbGlicmFyeVxuICAgIC8vIHdlIHByb2JhYmx5IGRvbid0IG5lZWQgdGhlc2UgY3VzdG9tIGhlbHBlcnMgYW55bW9yZVxuICAgIHRoaXMuX3JlZ2lzdGVyQ3VzdG9tSGVscGVycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlZ2lzdGVySGVscGVyIGlzIGEgcHVibGljIGludGVyZmFjZSBmb3IgZXh0ZXJuYWwgZGVwZW5kZW5jaWVzIHRvXG4gICAqIHJlZ2lzdGVyIHRoZWlyIG93biBjdXN0b20gaGVscGVycyB0byBvdXIgaW50ZXJuYWwgSGFuZGxlYmFycyBDb21waWxlclxuICAgKi9cbiAgcmVnaXN0ZXJIZWxwZXIobmFtZSwgY2IpIHtcbiAgICB0aGlzLl9oYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKG5hbWUsIGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb21waWxlIGEgaGFuZGxlYmFycyB0ZW1wbGF0ZSBzbyB0aGF0IGl0IGNhbiBiZSByZW5kZXJlZCxcbiAgICogdXNpbmcgdGhlIHtIYW5kbGViYXJzfSBjb21waWxlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgVGhlIHRlbXBsYXRlIHN0cmluZyB0byBjb21waWxlXG4gICAqL1xuICBjb21waWxlKHRlbXBsYXRlKSB7XG4gICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZWJhcnMuY29tcGlsZSh0ZW1wbGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogcmVuZGVyIHdpbGwgcmVuZGVyIGEgdGVtcGxhdGUgd2l0aCBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgUHJvdmlkZSBlaXRoZXIgYSB0ZW1wbGF0ZU5hbWUgb3IgYSBwcmUtY29tcGlsZWQgdGVtcGxhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gcHJvdmlkZSB0byB0aGUgdGVtcGxhdGVcbiAgICovXG4gIHJlbmRlcihjb25maWcsIGRhdGEpIHtcbiAgICAvLyBJZiBhIGN1c3RvbSB0ZW1wbGF0ZSBpcyBwcm92aWRlZCwgdXNlIGl0LFxuICAgIC8vIG90aGVyd2lzZSBmYWxsIGJhY2sgdG8gdGhlIHRlbXBsYXRlIG5hbWVcbiAgICAvLyBUT0RPKGJpbGx5KSBUaGlzIGludGVyZmFjZSBzaG91bGQgcHJvYmFibHkgYmUgbGVzcyB1Z2x5XG4gICAgaWYgKGNvbmZpZy50ZW1wbGF0ZSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNvbmZpZy50ZW1wbGF0ZShkYXRhKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlc1tjb25maWcudGVtcGxhdGVOYW1lXShkYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgZmluZC9yZW5kZXIgdGVtcGxhdGU6ICcgKyBjb25maWcudGVtcGxhdGVOYW1lLCBlKTtcbiAgICB9XG4gIH1cblxuICBfcmVnaXN0ZXJDdXN0b21IZWxwZXJzKCkge1xuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2lmZXEnLCBmdW5jdGlvbihhcmcxLCBhcmcyLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gKGFyZzEgPT0gYXJnMikgPyBvcHRpb25zLmZuKHRoaXMpIDogb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH0pXG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdpZm5vdGVxJywgZnVuY3Rpb24oYXJnMSwgYXJnMiwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIChhcmcxICE9IGFyZzIpID8gb3B0aW9ucy5mbih0aGlzKSA6IG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2Zvcm1hdFBob25lTnVtYmVyJywgZnVuY3Rpb24ocGhvbmVOdW1iZXJTdHJpbmcpIHtcbiAgICAgIHZhciBjbGVhbmVkID0gKCcnICsgcGhvbmVOdW1iZXJTdHJpbmcpLnJlcGxhY2UoL1xcRC9nLCAnJylcbiAgICAgIHZhciBtYXRjaCA9IGNsZWFuZWQubWF0Y2goL14oMXwpPyhcXGR7M30pKFxcZHszfSkoXFxkezR9KSQvKVxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdmFyIGludGxDb2RlID0gKG1hdGNoWzFdID8gJysxICcgOiAnJylcbiAgICAgICAgICByZXR1cm4gW2ludGxDb2RlLCAnKCcsIG1hdGNoWzJdLCAnKSAnLCBtYXRjaFszXSwgJy0nLCBtYXRjaFs0XV0uam9pbignJylcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignbWFwQm94JywgZnVuY3Rpb24obWFwRGF0YSwgbWFwQ29uZmlnLCBvcHRpb25zKSB7XG4gICAgICBsZXQgZW5jb2RlZE1hcmtlcnMgPSAnJyxcbiAgICAgICAgICBtYXBNYXJrZXJzID0gbWFwRGF0YS5tYXBNYXJrZXJzLFxuICAgICAgICAgIGNlbnRlciA9IG1hcERhdGEubWFwQ2VudGVyO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcE1hcmtlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG1tID0gbWFwTWFya2Vyc1tpXTtcbiAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgZW5jb2RlZE1hcmtlcnMgKz0gJywnO1xuICAgICAgICB9XG4gICAgICAgIGVuY29kZWRNYXJrZXJzICs9IGBwaW4tcy0ke21tLmxhYmVsfSgke21tLmxhdGl0dWRlfSwke21tLmxvbmdpdHVkZX0pYFxuICAgICAgfVxuICAgICByZXR1cm4gYDxpbWcgc3JjPVwiaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9zdHlsZXMvdjEvbWFwYm94L3N0cmVldHMtdjExL3N0YXRpYy8ke2VuY29kZWRNYXJrZXJzfS8ke2NlbnRlci5sYXRpdHVkZX0sJHtjZW50ZXIubG9uZ2l0dWRlfSw5LjY3LDAuMDAsMC4wMH0vMTAwMHg2MDBAMng/YWNjZXNzX3Rva2VuPSR7bWFwQ29uZmlnLmFwaUtleX1cIj5gO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignZ29vZ2xlTWFwJywgZnVuY3Rpb24obWFwRGF0YSwgbWFwQ29uZmlnLCBvcHRpb25zKSB7XG4gICAgICBsZXQgZW5jb2RlZE1hcmtlcnMgPSAnJyxcbiAgICAgICAgICBtYXBNYXJrZXJzID0gbWFwRGF0YS5tYXBNYXJrZXJzLFxuICAgICAgICAgIHdpZHRoID0gbWFwQ29uZmlnLndpZHRoIHx8IDYwMCxcbiAgICAgICAgICBoZWlnaHQgPSBtYXBDb25maWcuaGVpZ2h0IHx8IDIwMCxcbiAgICAgICAgICB6b29tID0gbWFwQ29uZmlnLmhlaWdodCB8fCAxM1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hcE1hcmtlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG1tID0gbWFwTWFya2Vyc1tpXTtcbiAgICAgICAgZW5jb2RlZE1hcmtlcnMgKz0gYCZtYXJrZXJzPWxhYmVsOiR7bW0ubGFiZWx9fCR7bW0ubGF0aXR1ZGV9LCR7bW0ubG9uZ2l0dWRlfWBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGA8aW1nIHNyYz1cImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9zdGF0aWNtYXA/JHtlbmNvZGVkTWFya2Vyc30mc2l6ZT0ke3dpZHRofXgke2hlaWdodH0ma2V5PSR7bWFwQ29uZmlnLmFwaUtleX1cIj5gO1xuICAgIH0pXG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdhc3NpZ24nLCBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgbGV0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBvcHRpb25zID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAoIW9wdGlvbnMuZGF0YS5yb290KSB7XG4gICAgICAgIG9wdGlvbnMuZGF0YS5yb290ID0ge307XG4gICAgICB9XG5cbiAgICAgIGxldCB2ID0gJyc7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoIC0gMTsgaSArKykge1xuICAgICAgICB2ID0gdiArIGFyZ3NbaV07XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMuZGF0YS5yb290W25hbWVdID0gdjtcbiAgICB9KVxuICB9XG59IiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IEhhbmRsZWJhcnNSZW5kZXJlciBmcm9tICcuL2hhbmRsZWJhcnNyZW5kZXJlcic7XG5cbi8vIEluIHRoZSBmdXR1cmUsIHRoaXMgd2lsbCBjb250YWluIGFsbCBkaWZmZXJlbnQgdHlwZXMgb2YgcmVuZGVyZXJzXG4vLyBFLmcuIE11c3RhY2hlLCBTT1ksIEhhbmRsZUJhcnMsIFJlYWN0LCBldGMuXG5leHBvcnQgY29uc3QgUmVuZGVyZXJzID0ge1xuICBTT1k6IFJlbmRlcmVyLFxuICBIYW5kbGViYXJzOiBIYW5kbGViYXJzUmVuZGVyZXJcbn1cbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vLi4vY29yZS9ldmVudGVtaXR0ZXIvZXZlbnRlbWl0dGVyJztcblxuLyoqXG4gKiBTdGF0ZSBjb250YWlucyB0aGUgZGF0YSBmb3IgdGhlIGNvbXBvbmVudFxuICogYW5kIGV4cG9zZXMgYW4ge0V2ZW50RW1pdHRlcn0gaW50ZXJmYWNlIHNvIHRoYXQgZXh0ZXJuYWxcbiAqIGRlcGVuZGVuY2llcyBjYW4gbGlzdGVuL2hvb2sgc3Vic2NyaWJlIHRvIG1lc3NhZ2VzL3VwZGF0ZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N0YXRlID0gZGF0YSB8fCB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICogTk9URShiaWxseSk6IERvZXMgbm90IGZpcmUgYW4gdXBkYXRlIG1lc3NhZ2VcbiAgICovXG4gIGluaXQocHJvcCwgb3B0X3ZhbCkge1xuICAgIHRoaXMuX3NldChwcm9wLCBvcHRfdmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXR0ZXIgZm9yIHRoZSBzdGF0ZVxuICAgKiBAcGFyYW0gcHJvcCB7c3RyaW5nfE9iamVjdH0gVGhlIHByb3BlcnR5IHRvIHNldFxuICAgKiBAcGFyYW0gb3B0X3ZhbCBPcHRpb25hbCwgaWYgcHJvcCBpcyBhIHtzdHJpbmd9LCBpdCB3aWxsIGFzc2lnbiB0aGUgdmFsdWUgdG8gdGhhdCBwcm9wZXJ0eVxuICAgKi9cbiAgc2V0KHByb3AsIG9wdF92YWwpIHtcbiAgICB0aGlzLl9zZXQocHJvcCwgb3B0X3ZhbCk7XG4gICAgdGhpcy5lbWl0KCd1cGRhdGUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXR0ZXIgZm9yIHRoZSBzdGF0ZSBlbmFibGVzIHlvdSB0byB1cGRhdGUgYSBzaW5nbGUgcHJvcGVydHksIG9yIGNvbXBsZXRlIHN0YXRlXG4gICAqIGRlcGVuZGluZyBvbiB0aGUgYXJndW1lbnRzIHByb3ZpZGVkLlxuICAgKiBAcGFyYW0gcHJvcCB7c3RyaW5nfE9iamVjdH0gVGhlIHByb3BlcnR5IHRvIHNldFxuICAgKiBAcGFyYW0gb3B0X3ZhbCBJZiBwcm9wIGlzIGEge3N0cmluZ30sIHByb3ZpZGUgaXRzIHZhbHVlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2V0KHByb3AsIG9wdF92YWwpIHtcbiAgICBpZiAob3B0X3ZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9zdGF0ZSA9IHByb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N0YXRlW3Byb3BdID0gb3B0X3ZhbDtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoZGF0YSkge1xuICAgIHRoaXMuX3N0YXRlID0gZGF0YTtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIGEgcHJvcGVydGllcyB2YWx1ZSBmcm9tIHRoZSBzdGF0ZVxuICAgKiBJZiBubyBwcm9wZXJ0eSBwcm92aWRlZCwgcmV0dXJuIHRoZSBmdWxsIHN0YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRfcHJvcCBvcHRpb25hbCBwcm9wZXJ0eSB0byByZXRyaWV2ZVxuICAgKi9cbiAgZ2V0KG9wdF9wcm9wKSB7XG4gICAgaWYgKG9wdF9wcm9wID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlW29wdF9wcm9wXTtcbiAgfVxuXG4gIGhhcyhwcm9wKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlW3Byb3BdICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBhc0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBSZW5kZXJlcnMgfSBmcm9tICcuLi9yZW5kZXJpbmcvY29uc3QnO1xuXG5pbXBvcnQgRE9NIGZyb20gJy4uL2RvbS9kb20nO1xuaW1wb3J0IFN0YXRlIGZyb20gJy4vc3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBvcHRzID0ge30pIHtcbiAgICAvLyBTaW1wbGUgZmFjYWRlIHBhdHRlcm4gdG8gZW5hYmxlIHRoZSB1c2VyIHRvIHBhc3MgYSBzaW5nbGUgb2JqZWN0XG4gICAgLy8gY29udGFpbmluZyBhbGwgdGhlIG5lY2Vzc2FyeSBvcHRpb25zIGFuZCBzZXR0aW5nc1xuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG9wdHMgPSB0eXBlO1xuICAgICAgdHlwZSA9IG9wdHMudHlwZTtcbiAgICB9XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIENhY2hlIHRoZSBvcHRpb25zIHNvIHRoYXQgd2UgY2FuIHByb3BvZ2F0ZSBwcm9wZXJseSB0byBjaGlsZCBjb21wb25lbnRzXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9vcHRzID0gb3B0cztcblxuICAgIC8qKlxuICAgICAqIEFuIGlkZW50aWZpZXIgdXNlZCB0byBjbGFzc2lmeSB0aGUgdHlwZSBvZiBjb21wb25lbnQuXG4gICAgICogVGhlIGNvbXBvbmVudCBtYW5hZ2VyIHVzZXMgdGhpcyBpbmZvcm1hdGlvbiBpbiBvcmRlciB0byBwZXJzaXN0IGFuZCBvcmdhbml6ZSBjb21wb25lbnRzXG4gICAgICogQHR5cGUge3N0cmluZ3xDb21wb25lbnRUeXBlfVxuICAgICAqL1xuICAgIHRoaXMuX3R5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgcGFyZW50IGNvbXBvbmVudCwgaWYgZXhpc3RzXG4gICAgICogQHR5cGUge0NvbXBvbmVudH1cbiAgICAgKi9cbiAgICB0aGlzLl9wYXJlbnQgPSBvcHRzLnBhcmVudCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBjb250YWluZXIgZm9yIGFsbCB0aGUgY2hpbGQgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtBcnJheS5Db21wb25lbnR9XG4gICAgICovXG4gICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBzdGF0ZSAoZGF0YSkgb2YgdGhlIGNvbXBvbmVudCB0byBiZSBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgZm9yIHJlbmRlcmluZ1xuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgdGhpcy5fc3RhdGUgPSBuZXcgU3RhdGUob3B0cy5zdGF0ZSk7XG5cbiAgICAvKipcbiAgICAgKiBUT0RPKGJpbGx5KSBUaGlzIHNob3VsZCBiZSAnc2VydmljZXMnXG4gICAgICovXG4gICAgdGhpcy5jb3JlID0gb3B0cy5jb3JlIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IG1hbmFnZXIsIHdoaWNoIGNvbnRhaW5zIGFsbCBvZiB0aGUgY29tcG9uZW50IGNsYXNzZXNcbiAgICAgKiBlbGlnaWJsZSB0byBiZSBjcmVhdGVkXG4gICAgICogQHR5cGUge0NvbXBvbmVudE1hbmFnZXJ9XG4gICAgICovXG4gICAgdGhpcy5jb21wb25lbnRNYW5hZ2VyID0gb3B0cy5jb21wb25lbnRNYW5hZ2VyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgRE9NIG5vZGUgdGhhdCB0aGUgY29tcG9uZW50IHdpbGwgYmUgYXBwZW5kZWQgdG8gd2hlbiBtb3VudGVkL3JlbmRlcmVkLlxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAgICAgKi9cbiAgICBpZiAodGhpcy5fcGFyZW50ID09PSBudWxsKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdHMuY29udGFpbmVyICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgYGNvbnRhaW5lcmAgb3B0aW9uIGZvciBjb21wb25lbnQgY29uZmlndXJhdGlvbi4gTXVzdCBiZSBvZiB0eXBlIGBzdHJpbmdgLicpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY29udGFpbmVyID0gRE9NLnF1ZXJ5KG9wdHMuY29udGFpbmVyKSB8fCBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb250YWluZXIgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Ll9jb250YWluZXIsIG9wdHMuY29udGFpbmVyKTtcblxuICAgICAgLy8gSWYgd2UgaGF2ZSBhIHBhcmVudCwgYW5kIHRoZSBjb250YWluZXIgaXMgbWlzc2luZyBmcm9tIHRoZSBET00sXG4gICAgICAvLyB3ZSBjb25zdHJ1Y3QgdGhlIGNvbnRhaW5lciBhbmQgYXBwZW5kIGl0IHRvIHRoZSBwYXJlbnRcbiAgICAgIGlmICh0aGlzLl9jb250YWluZXIgPT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gRE9NLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IG9wdHMuY29udGFpbmVyLnN1YnN0cmluZygxLCBvcHRzLmNvbnRhaW5lci5sZW5ndGgpXG4gICAgICAgIH0pO1xuICAgICAgICBET00uYXBwZW5kKHRoaXMuX3BhcmVudC5fY29udGFpbmVyLCB0aGlzLl9jb250YWluZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb250YWluZXIgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgY29udGFpbmVyIERPTSBub2RlOiAnICsgb3B0cy5jb250YWluZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIGNsYXNzIHRvIGJlIGFwcGxpZWQgdG8ge3RoaXMuX2NvbnRhaW5lcn0gbm9kZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fY2xhc3NOYW1lID0gb3B0cy5jbGFzcyB8fCAnY29tcG9uZW50JztcblxuICAgIC8qKlxuICAgICAqIEEgY3VzdG9tIHJlbmRlciBmdW5jdGlvbiB0byBiZSB1c2VkIGluc3RlYWQgb2YgdXNpbmcgdGhlIGRlZmF1bHQgcmVuZGVyZXJcbiAgICAgKiBAdHlwZSB7UmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyID0gb3B0cy5yZW5kZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBkZWZhdWx0IHtSZW5kZXJlcn0gdGhhdCB3aWxsIGJlIHVzZWQgZm9yIHJlbmRlcmluZyB0aGUgdGVtcGxhdGVcbiAgICAgKiBAdHlwZSB7UmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyZXIgPSBvcHRzLnJlbmRlcmVyIHx8IFJlbmRlcmVycy5IYW5kbGViYXJzO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlIHN0cmluZyB0byB1c2UgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50XG4gICAgICogSWYgdGhpcyBpcyBsZWZ0IGVtcHR5LCB3ZSBsb29rdXAgdGhlIHRlbXBsYXRlIHRoZSBiYXNlIHRlbXBsYXRlcyB1c2luZyB0aGUgdGVtcGxhdGVOYW1lXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZSA9IG9wdHMudGVtcGxhdGUgPyB0aGlzLl9yZW5kZXJlci5jb21waWxlKG9wdHMudGVtcGxhdGUpIDogbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZU5hbWUgdG8gdXNlIGZvciByZW5kZXJpbmcgdGhlIGNvbXBvbmVudC5cbiAgICAgKiBUaGlzIGlzIG9ubHkgdXNlZCBpZiBfdGVtcGxhdGUgaXMgZW1wdHkuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSBvcHRzLnRlbXBsYXRlTmFtZSB8fCAnZGVmYXVsdCc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCBzdGF0ZSBpbmRpY2F0aW5nIHdoZXRoZXIgb3Igbm90IHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbW91bnRlZCB0byB0aGUgRE9NXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2ssIHRoYXRzIHVzZWQgdG8gdHJhbnNmb3JtIHRoZSBpbnRlcm5hbCBkYXRhXG4gICAgICogbW9kZWxzIG9mIHRoZSBjb21wb25lbnRzLCBiZWZvcmUgaXQgZ2V0cyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQgc3RhdGUuXG4gICAgICogQnkgZGVmYXVsdCwgbm8gdHJhbnNmb3JtYXRpb24gaGFwcGVucy5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy50cmFuc2Zvcm1EYXRhID0gb3B0cy50cmFuc2Zvcm1EYXRhIHx8IHRoaXMudHJhbnNmb3JtRGF0YSB8fCBmdW5jdGlvbigpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIGEgY29tcG9uZW50IGlzIGNyZWF0ZWQuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMub25DcmVhdGUgPSBvcHRzLm9uQ3JlYXRlIHx8IHRoaXMub25DcmVhdGUgfHwgZnVuY3Rpb24oKSB7fTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBNb3VudGVkLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLm9uTW91bnQgPSBvcHRzLm9uTW91bnQgfHwgdGhpcy5vbk1vdW50IHx8IGZ1bmN0aW9uICgpIHsgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGludm9rZWQgd2hlbiBhIGNvbXBvbmVudHMgc3RhdGUgaXMgdXBkYXRlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vblVwZGF0ZSA9IG9wdHMub25VcGRhdGUgfHwgdGhpcy5vblVwZGF0ZSB8fCBmdW5jdGlvbiAoKSB7IH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdDb21wb25lbnQnO1xuICB9XG5cbiAgaW5pdChvcHRzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShvcHRzLmRhdGEgfHwgb3B0cy5zdGF0ZSB8fCB7fSk7XG5cbiAgICB0aGlzLm9uQ3JlYXRlKClcbiAgICB0aGlzLl9zdGF0ZS5vbigndXBkYXRlJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblVwZGF0ZSgpO1xuICAgICAgdGhpcy5tb3VudCgpO1xuICAgIH0pO1xuXG4gICAgRE9NLmFkZENsYXNzKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFN0YXRlKGRhdGEpIHtcbiAgICB0aGlzLl9zdGF0ZS5zZXQoZGF0YSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRTdGF0ZShwcm9wKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlLmdldChwcm9wKTtcbiAgfVxuXG4gIGhhc1N0YXRlKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuaGFzKHByb3ApO1xuICB9XG5cbiAgdHJhbnNmb3JtRGF0YShkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBhZGRDaGlsZChkYXRhLCB0eXBlLCBvcHRzKSB7XG4gICAgbGV0IGNoaWxkQ29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRNYW5hZ2VyLmNyZWF0ZShcbiAgICAgIHR5cGUsXG4gICAgICBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9LCBvcHRzIHx8IHt9LCB7XG4gICAgICAgIF9wYXJlbnRPcHRzOiB0aGlzLl9vcHRzXG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGNoaWxkQ29tcG9uZW50KTtcbiAgICByZXR1cm4gY2hpbGRDb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSByZW5kZXIgbWV0aG9kIHRvIGJlIHVzZWQgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlbmRlclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBzZXRSZW5kZXIocmVuZGVyKSB7XG4gICAgdGhpcy5fcmVuZGVyID0gcmVuZGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgcmVuZGVyZXIgZm9yIHRoZSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtSZW5kZXJlclR5cGV9IHJlbmRlcmVyXG4gICAqL1xuICBzZXRSZW5kZXJlcihyZW5kZXJlcikge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gUmVuZGVyZXJzW3JlbmRlcmVyXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0ZW1wbGF0ZSBmb3IgdGhlIGNvbXBvbmVudCB0byB1c2Ugd2hlbiByZW5kZXJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gICAqL1xuICBzZXRUZW1wbGF0ZSh0ZW1wbGF0ZSkge1xuICAgIHRoaXMuX3RlbXBsYXRlID0gdGhpcy5fcmVuZGVyZXIuY29tcGlsZSh0ZW1wbGF0ZSk7XG4gIH1cblxuICB1bk1vdW50KCkge1xuICAgIERPTS5lbXB0eSh0aGlzLl9jb250YWluZXIpO1xuICB9XG5cbiAgbW91bnQoKSB7XG4gICAgaWYgKCF0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMudW5Nb3VudCgpO1xuICAgIGlmICh0aGlzLmJlZm9yZU1vdW50KCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBET00uYXBwZW5kKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5yZW5kZXIodGhpcy5fc3RhdGUuYXNKU09OKCkpKTtcblxuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy5vbk1vdW50KHRoaXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbmRlciB0aGUgdGVtcGxhdGUgdXNpbmcgdGhlIHtSZW5kZXJlcn0gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBhbmQgdGVtcGxhdGUgb2YgdGhlIGNvbXBvbmVudFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgcmVuZGVyKGRhdGEpIHtcbiAgICB0aGlzLmJlZm9yZVJlbmRlcigpO1xuICAgIGRhdGEgPSB0aGlzLnRyYW5zZm9ybURhdGEoZGF0YSkgfHwgdGhpcy50cmFuc2Zvcm1EYXRhKHRoaXMuX3N0YXRlLmdldCgpKTtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5fcmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsZXQgaHRtbCA9IHRoaXMuX3JlbmRlcihkYXRhKTtcbiAgICAgIGlmICh0eXBlb2YgaHRtbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW5kZXIgbWV0aG9kIG11c3QgcmV0dXJuIEhUTUwgYXMgdHlwZSB7c3RyaW5nfScpO1xuICAgICAgfVxuICAgICAgdGhpcy5hZnRlclJlbmRlcigpO1xuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuXG4gICAgLy8gUmVuZGVyIHRoZSBleGlzdGluZyB0ZW1wbGF0ZXMgYXMgYSBzdHJpbmdcbiAgICBsZXQgaHRtbCA9IHRoaXMuX3JlbmRlcmVyLnJlbmRlcih7XG4gICAgICB0ZW1wbGF0ZTogdGhpcy5fdGVtcGxhdGUsXG4gICAgICB0ZW1wbGF0ZU5hbWU6IHRoaXMuX3RlbXBsYXRlTmFtZVxuICAgIH0sIGRhdGEpO1xuXG4gICAgLy8gV2UgY3JlYXRlIGFuIEhUTUwgRG9jdW1lbnQgZnJhZ21lbnQgd2l0aCB0aGUgcmVuZGVyZWQgc3RyaW5nXG4gICAgLy8gU28gdGhhdCB3ZSBjYW4gcXVlcnkgaXQgZm9yIHByb2Nlc3Npbmcgb2Ygc3ViIGNvbXBvbmVudHNcbiAgICBsZXQgZWwgPSBET00uY3JlYXRlKGh0bWwpO1xuXG4gICAgLy8gUHJvY2VzcyB0aGUgRE9NIHRvIGRldGVybWluZSBpZiB3ZSBzaG91bGQgY3JlYXRlXG4gICAgLy8gaW4tbWVtb3J5IHN1Yi1jb21wb25lbnRzIGZvciByZW5kZXJpbmdcbiAgICAvLyBUT0RPKGJpbGx5KSBUaGlzIHNob3VsZCBwcm9iYWJseSByZXR1cm4gYSBjb2xsZWN0aW9uIG9mIGNvbXBvbmVudHNcbiAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xuICAgIGxldCBkb21Db21wb25lbnQgPSBET00ucXVlcnkoZWwsICdbZGF0YS1jb21wb25lbnRdJyk7XG4gICAgaWYgKGRvbUNvbXBvbmVudCAhPT0gdW5kZWZpbmVkICYmIGRvbUNvbXBvbmVudCAhPT0gbnVsbCkge1xuICAgICAgbGV0IHR5cGUgPSBkb21Db21wb25lbnQuZGF0YXNldC5jb21wb25lbnQsXG4gICAgICAgICAgcHJvcCA9IGRvbUNvbXBvbmVudC5kYXRhc2V0LnByb3A7XG5cbiAgICAgIGxldCBjaGlsZERhdGEgPSBkYXRhW3Byb3BdO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGREYXRhKSkge1xuICAgICAgICBsZXQgY2hpbGRIVE1MID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGREYXRhLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgIGxldCBjaGlsZENvbXBvbmVudCA9IHRoaXMuYWRkQ2hpbGQoY2hpbGREYXRhW2ldLCB0eXBlKTtcbiAgICAgICAgICBjaGlsZEhUTUwucHVzaChjaGlsZENvbXBvbmVudC5yZW5kZXIoY2hpbGREYXRhW2ldKSk7XG4gICAgICAgIH1cblxuICAgICAgICBET00uYXBwZW5kKGRvbUNvbXBvbmVudCwgY2hpbGRIVE1MLmpvaW4oJycpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFmdGVyUmVuZGVyKCk7XG4gICAgcmV0dXJuIGVsLmlubmVySFRNTDtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbkNyZWF0ZSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGNvbnN0cnVjdGVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvbkNyZWF0ZShjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25VcGRhdGUgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQgY2hhbmdlc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25VcGRhdGUoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIGJlZm9yZVJlbmRlciBldmVudCBpcyB0cmlnZ2VyZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIGJlZm9yZVJlbmRlcihjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYWZ0ZXJSZW5kZXIgZXZlbnQgaXMgdHJpZ2dlcmVkIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIGFmdGVyUmVuZGVyKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvbk1vdW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgYXBwZW5kZWQgdG8gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25Nb3VudChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25Vbk1vdW50IGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgcmVtb3ZlZCBmcm9tIHRoZSBET01cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uVW5Nb3VudChjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogYmVmb3JlTW91bnQgaXMgdHJpZ2dlcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQgdG8gdGhlIERPTVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgYmVmb3JlTW91bnQoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uRGVzdHJveSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGRlc3Ryb3llZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25EZXN0cm95KGNiKSB7XG5cbiAgfVxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRhdGEgc3RvcmFnZSBrZXlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMubW9kdWxlSWQgPSAnbmF2aWdhdGlvbic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGFuZGxlYmFycyB0ZW1wbGF0ZSB0byB1c2VcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICduYXZpZ2F0aW9uL25hdmlnYXRpb24nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9yZGVyIG9mIHRoZSB0YWJzLCBwYXJzZWQgZnJvbSBjb25maWd1cmF0aW9uLlxuICAgICAqIFRoaXMgZ2V0cyB1cGRhdGVkIGJhc2VkIG9uIHRoZSBzZXJ2ZXIgcmVzdWx0c1xuICAgICAqIEB0eXBlIHtBcnJheS48U3RyaW5nPn0gVGhlIGxpc3Qgb2YgVlMgY29uZmlnSWRzXG4gICAgICovXG4gICAgdGhpcy5fdGFiT3JkZXIgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkYXRhIGNvbnRhaW5lciBmb3IgZWFjaCB0YWIsIGtleWVkIGJ5IFZTIGNvbmZpZ0lkXG4gICAgICogQHR5cGUge09iamVjdC48U3RyaW5nLCBPYmplY3Q+fVxuICAgICAqL1xuICAgIHRoaXMuX3RhYnMgPSB7fTtcblxuICAgIC8vIFBhcnNlIHRoZSBvcHRpb25zIGFuZCBidWlsZCBvdXQgb3VyIHRhYnMgYW5kXG4gICAgLy8gdGFiT3JkZXIgZnJvbSB0aGUgc2V0dGluZ3MgcHJvdmlkZWQuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRzLnRhYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB0YWIgPSBvcHRzLnRhYnNbaV07XG4gICAgICAvLyBGb3IgdGFicyB3aXRob3V0IGNvbmZpZyBpZHMsIG1hcCB0aGVpciBVUkwgdG8gdGhlIGNvbmZpZ0lEXG4gICAgICAvLyB0byBhdm9pZCBkdXBsaWNhdGlvbiBvZiByZW5kZXJzXG4gICAgICBpZiAodGFiLmNvbmZpZ0lkID09PSB1bmRlZmluZWQgJiYgdGhpcy5fdGFic1t0YWIuY29uZmlnSWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGFiLmNvbmZpZ0lkID0gdGFiLnVybDtcbiAgICAgIH1cblxuICAgICAgLy8gaXNGaXJzdCBzaG91bGQgYWx3YXlzIGJlIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBsaXN0XG4gICAgICBpZiAodGFiLmlzRmlyc3QpIHtcbiAgICAgICAgdGhpcy5fdGFiT3JkZXIudW5zaGlmdCh0YWIuY29uZmlnSWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdGFiT3JkZXIucHVzaCh0YWIuY29uZmlnSWQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl90YWJzW3RhYi5jb25maWdJZF0gPSB7XG4gICAgICAgIGxhYmVsOiB0YWIubGFiZWwsXG4gICAgICAgIGNvbmZpZ0lkOiB0YWIuY29uZmlnSWQsXG4gICAgICAgIHVybDogdGFiLnVybCxcbiAgICAgICAgYmFzZVVybDogdGFiLnVybCxcbiAgICAgICAgaXNGaXJzdDogdGFiLmlzRmlyc3QgPT09IHRydWUgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgIGlzQWN0aXZlOiB0YWIuaXNBY3RpdmUgPT09IHRydWUgPyB0cnVlIDogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnTmF2aWdhdGlvbic7XG4gIH1cblxuICBnZXRVcmxQYXJhbXMoKSB7XG4gICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpO1xuICB9XG5cbiAgZ2VuZXJhdGVUYWJVcmwodGFiKSB7XG4gICAgbGV0IHBhcmFtcyA9IHRoaXMuZ2V0VXJsUGFyYW1zKCk7XG4gICAgaWYgKHBhcmFtcy50b1N0cmluZygpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRhYi51cmwgPSB0YWIuYmFzZVVybCArICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICAgIH1cbiAgICByZXR1cm4gdGFiO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbmNlIHRoZSBzZXJ2ZXIgZGF0YSBvbmx5IHByb3ZpZGVzIGEgbGlzdCBvZlxuICAgKiBWUyBjb25maWdJZHMsIHdlIG5lZWQgdG8gY29tcHV0ZSBhbmQgdHJhbnNmb3JtXG4gICAqIHRoZSBkYXRhIGludG8gdGhlIHByb3BlciBmb3JtYXQgZm9yIHJlbmRlcmluZy5cbiAgICpcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzZXRTdGF0ZShkYXRhKSB7XG4gICAgaWYgKGRhdGEudGFiT3JkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fdGFiT3JkZXIgPSBkYXRhLnRhYk9yZGVyO1xuICAgIH1cblxuICAgIC8vIFNpbmNlIG91ciB0YWIgY29uZmlndXJhdGlvbiBpcyBsb2NhbCwgd2UgZ2VuZXJhdGUgaXRcbiAgICAvLyBiYXNlZCBvbiB0aGUgZmVlZGJhY2sgZnJvbSB0aGUgc2VydmVyXG4gICAgbGV0IHRhYnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3RhYk9yZGVyLmxlbmd0aDsgaSArKykge1xuICAgICAgbGV0IHRhYiA9IHRoaXMuX3RhYnNbdGhpcy5fdGFiT3JkZXJbaV1dO1xuICAgICAgaWYgKHRhYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhYnMucHVzaCh0aGlzLmdlbmVyYXRlVGFiVXJsKHRhYikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEJlY2F1c2UgdGhlIHRhYiBvcmRlciBmcm9tIHNlcnZlciBvbmx5IGluY2x1ZGVzXG4gICAgLy8gc2VjdGlvbnMgdGhhdCBoYXZlIHJlc3VsdHMsIHdlIG5lZWQgdG8gbWFudWFsbHkgYWRkXG4gICAgLy8gdGhlIG90aGVyIHRhYnMgdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXlcbiAgICBmb3IgKGxldCBjb25maWdJZCBpbiB0aGlzLl90YWJzKSB7XG4gICAgICBpZiAodGhpcy5fdGFiT3JkZXIuaW5kZXhPZihjb25maWdJZCkgPD0gLTEpIHtcbiAgICAgICAgbGV0IHRhYiA9IHRoaXMuZ2VuZXJhdGVUYWJVcmwodGhpcy5fdGFic1tjb25maWdJZF0pO1xuXG4gICAgICAgIC8vIGlzRmlyc3Qgc2hvdWxkIGFsd2F5cyBiZSB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgbGlzdFxuICAgICAgICBpZiAodGFiLmlzRmlyc3QpIHtcbiAgICAgICAgICB0YWJzLnVuc2hpZnQodGFiKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhYnMucHVzaCh0YWIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZSh7XG4gICAgICB0YWJzOiB0YWJzXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5yZW5kZXIoZGF0YSk7XG4gIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZW1wbGF0ZSBuYW1lIHRvIHVzZSBmb3IgcmVuZGVyaW5nIHdpdGggaGFuZGxlYmFyc1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3NlYXJjaC9zZWFyY2gnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGlucHV0IGtleSBmb3IgdGhlIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCBhdXRvLWNvbXBsZXRlIGFuZCBzZWFyY2ggd2lsbCBiZSBiYXNlZCBvbiB1bml2ZXJzYWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2JhcktleSA9IG9wdHMuYmFyS2V5IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9uYWwgZXhwZXJpZW5jZSBrZXkgZm9yIHZlcnRpY2FsIHNlYXJjaCBjb25maWd1cmF0aW9uXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCBhdXRvLWNvbXBsZXRlIGFuZCBzZWFyY2ggd2lsbCBiZSBiYXNlZCBvbiB1bml2ZXJzYWxcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ZlcnRpY2FsS2V5ID0gb3B0cy52ZXJ0aWNhbEtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogUXVlcnkgc3VibWlzc2lvbiBpcyBiYXNlZCBvbiBhIGZvcm0gYXMgY29udGV4dC5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gbmF0aXZlIGZvcm0gbm9kZSB3aXRoaW4gY29udGFpbmVyXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5fZm9ybUVsID0gb3B0cy5mb3JtU2VsZWN0b3IgfHwgJ2Zvcm0nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlucHV0IGVsZW1lbnQgdXNlZCBmb3Igc2VhcmNoaW5nIGFuZCB3aXJlcyB1cCB0aGUga2V5Ym9hcmQgaW50ZXJhY3Rpb25cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2lucHV0RWwgPSBvcHRzLmlucHV0RWwgfHwgJy5qcy15ZXh0LXF1ZXJ5JztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB1c2VkLCBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgYXMgYSBkYXRhIHBvaW50XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMudGl0bGUgPSBvcHRzLnRpdGxlIHx8ICdBbnN3ZXJzIFVuaXZlcnNhbCBTZWFyY2gnO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHNlYXJjaCB0ZXh0IHVzZWQgZm9yIGxhYmVsaW5nIHRoZSBpbnB1dCBib3gsIGFsc28gcHJvdmlkZWQgdG8gdGVtcGxhdGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gb3B0cy5zZWFyY2hUZXh0IHx8ICdXaGF0IGFyZSB5b3UgaW50ZXJlc3RlZCBpbj8nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHRleHQgdG8gc2hvdyBhcyB0aGUgZmlyc3QgaXRlbSBmb3IgYXV0byBjb21wbGV0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnByb21wdEhlYWRlciA9IG9wdHMucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBdXRvIGZvY3VzZXMgdGhlIGlucHV0IGJveCBpZiBzZXQgdG8gdHJ1ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBkZWZhdWx0cyB0byBmYWxzZS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmF1dG9Gb2N1cyA9IG9wdHMuYXV0b0ZvY3VzID09PSB0cnVlID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogc3VibWl0VVJMIHdpbGwgZm9yY2UgdGhlIHNlYXJjaCBxdWVyeSBzdWJtaXNzaW9uIHRvIGdldFxuICAgICAqIHJlZGlyZWN0ZWQgdG8gdGhlIFVSTCBwcm92aWRlZC5cbiAgICAgKiBPcHRpb25hbCwgZGVmYXVsdHMgdG8gbnVsbC5cbiAgICAgKlxuICAgICAqIElmIG5vIHJlZGlyZWN0VXJsIHByb3ZpZGVkLCB3ZSBrZWVwIHRoZSBwYWdlIGFzIGEgc2luZ2xlIHBhZ2UgYXBwLlxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5yZWRpcmVjdFVybCA9IG9wdHMucmVkaXJlY3RVcmwgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSBzdHJpbmcgdG8gdXNlIGZvciB0aGUgaW5wdXQgYm94LCBwcm92aWRlZCB0byB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucXVlcnkgPSBvcHRzLnF1ZXJ5IHx8IHRoaXMuZ2V0VXJsUGFyYW1zKCkuZ2V0KCdxdWVyeScpIHx8ICcnO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnU2VhcmNoQmFyJztcbiAgfVxuXG4gIG9uQ3JlYXRlKCkge1xuICAgIGlmICh0aGlzLnF1ZXJ5ICYmIHRoaXMucXVlcnkubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZWFyY2godGhpcy5xdWVyeSk7XG4gICAgfVxuXG4gICAgdGhpcy5iaW5kQnJvd3Nlckhpc3RvcnkoKTtcbiAgfVxuXG4gIG9uTW91bnQoKSB7XG4gICAgLy8gV2lyZSB1cCBvdXIgc2VhcmNoIGhhbmRsaW5nIGFuZCBhdXRvIGNvbXBsZXRlXG4gICAgdGhpcy5pbml0U2VhcmNoKHRoaXMuX2Zvcm1FbCk7XG4gICAgdGhpcy5pbml0QXV0b0NvbXBsZXRlKHRoaXMuX2lucHV0RWwpO1xuXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzID09PSB0cnVlICYmIHRoaXMucXVlcnkubGVuZ3RoID09PSAwKSB7XG4gICAgICBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gdXNlIGZvciB3aXJpbmcgdXAgc2VhcmNoaW5nIG9uIGZvcm0gc3VibWlzc2lvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm9ybVNlbGVjdG9yIENTUyBzZWxlY3RvciB0byBiaW5kIG91ciBzdWJtaXQgaGFuZGxpbmcgdG9cbiAgICovXG4gIGluaXRTZWFyY2goZm9ybVNlbGVjdG9yKSB7XG4gICAgdGhpcy5fZm9ybUVsID0gZm9ybVNlbGVjdG9yO1xuXG4gICAgbGV0IGZvcm0gPSBET00ucXVlcnkodGhpcy5fY29udGFpbmVyLCBmb3JtU2VsZWN0b3IpO1xuICAgIGlmICghZm9ybSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgaW5pdGlhbGl6ZSBTZWFyY2hCYXI7IENhbiBub3QgZmluZCB7SFRNTEVsZW1lbnR9IGAnLCB0aGlzLl9mb3JtRWwsICdgLicpO1xuICAgIH1cblxuICAgIERPTS5vbihmb3JtLCAnc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IHF1ZXJ5ID0gZm9ybS5xdWVyeVNlbGVjdG9yKHRoaXMuX2lucHV0RWwpLnZhbHVlLFxuICAgICAgICAgIHBhcmFtcyA9IHRoaXMuZ2V0VXJsUGFyYW1zKCk7XG5cbiAgICAgIHBhcmFtcy5zZXQoJ3F1ZXJ5JywgcXVlcnkpO1xuXG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgcmVkaXJlY3RVcmwsIHdlIHdhbnQgdGhlIGZvcm0gdG8gYmVcbiAgICAgIC8vIHNlcmlhbGl6ZWQgYW5kIHN1Ym1pdHRlZC5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5yZWRpcmVjdFVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLnJlZGlyZWN0VXJsICsgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHtcbiAgICAgICAgcXVlcnk6IHF1ZXJ5XG4gICAgICB9LCBxdWVyeSwgJz8nICsgcGFyYW1zLnRvU3RyaW5nKCkpO1xuXG4gICAgICB0aGlzLnNlYXJjaChxdWVyeSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGhlbHBlciBtZXRob2QgdG8gd2lyZSB1cCBvdXIgYXV0byBjb21wbGV0ZSBvbiBhbiBpbnB1dCBzZWxlY3RvclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRTZWxlY3RvciBDU1Mgc2VsZWN0b3IgdG8gYmluZCBvdXIgYXV0byBjb21wbGV0ZSBjb21wb25lbnQgdG9cbiAgICovXG4gIGluaXRBdXRvQ29tcGxldGUoaW5wdXRTZWxlY3Rvcikge1xuICAgIHRoaXMuX2lucHV0RWwgPSBpbnB1dFNlbGVjdG9yO1xuXG4gICAgbGV0IGF1dG9Db21wbGV0ZSA9IHRoaXMuY29tcG9uZW50TWFuYWdlci5jcmVhdGUoJ0F1dG9Db21wbGV0ZScsIHtcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgIGNvbnRhaW5lcjogJy55ZXh0LXNlYXJjaC1hdXRvY29tcGxldGUnLFxuICAgICAgYmFyS2V5OiB0aGlzLl9iYXJLZXksXG4gICAgICBleHBlcmllbmNlS2V5OiB0aGlzLl9leHBlcmllbmNlS2V5LFxuICAgICAgcHJvbXB0SGVhZGVyOiB0aGlzLnByb21wdEhlYWRlcixcbiAgICAgIG9yaWdpbmFsUXVlcnk6IHRoaXMucXVlcnksXG4gICAgICBpbnB1dEVsOiBpbnB1dFNlbGVjdG9yLFxuICAgICAgb25TdWJtaXQ6ICgpID0+IHtcbiAgICAgICAgRE9NLnRyaWdnZXIoJ2Zvcm0nLCAnc3VibWl0Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZWFyY2gocXVlcnkpIHtcbiAgICBpZiAodGhpcy5fdmVydGljYWxLZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvcmUudmVydGljYWxTZWFyY2gocXVlcnksIHRoaXMuX3ZlcnRpY2FsS2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTk9URShiaWxseSkgVGVtcG9yYXJ5IGhhY2sgZm9yIERFTU9cbiAgICAgIC8vIFJlbW92ZSBtZSBhZnRlciB0aGUgZGVtb1xuICAgICAgbGV0IG5hdiA9IHRoaXMuY29tcG9uZW50TWFuYWdlclxuICAgICAgICAuZ2V0QWN0aXZlQ29tcG9uZW50KCdOYXZpZ2F0aW9uJyk7XG5cbiAgICAgIGlmIChuYXYpIHtcbiAgICAgICAgbGV0IHRhYnMgPSBuYXYuZ2V0U3RhdGUoJ3RhYnMnKSxcbiAgICAgICAgICAgIHVybHMgPSB7fTtcblxuICAgICAgICBpZiAodGFicyAmJiBBcnJheS5pc0FycmF5KHRhYnMpKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHRoaXMuZ2V0VXJsUGFyYW1zKHRhYnNbaV0udXJsLnNwbGl0KCc/JylbMV0pO1xuICAgICAgICAgICAgcGFyYW1zLnNldCgncXVlcnknLCBxdWVyeSk7XG5cbiAgICAgICAgICAgIGxldCB1cmwgPSB0YWJzW2ldLmJhc2VVcmw7XG4gICAgICAgICAgICBpZiAocGFyYW1zLnRvU3RyaW5nKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICB1cmwgKz0gJz8nICsgcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cmxzW3RhYnNbaV0uY29uZmlnSWRdID0gdXJsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb3JlLnNlYXJjaChxdWVyeSwgdXJscyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvcmUuc2VhcmNoKHF1ZXJ5KTtcbiAgICB9XG4gIH1cblxuICBzZXRTdGF0ZShkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICBzZWFyY2hUZXh0OiB0aGlzLnNlYXJjaFRleHQsXG4gICAgICBxdWVyeTogdGhpcy5xdWVyeVxuICAgIH0sIGRhdGEpKVxuICB9XG5cbiAgZ2V0VXJsUGFyYW1zKHVybCkge1xuICAgIHVybCA9IHVybCB8fCB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTtcbiAgICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyh1cmwpO1xuICB9XG5cbiAgYmluZEJyb3dzZXJIaXN0b3J5KCkge1xuICAgIERPTS5vbih3aW5kb3csICdwb3BzdGF0ZScsICgpID0+IHtcbiAgICAgIHRoaXMucXVlcnkgPSB0aGlzLmdldFVybFBhcmFtcygpLmdldCgncXVlcnknKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBxdWVyeTogdGhpcy5xdWVyeVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2VhcmNoKHRoaXMucXVlcnkpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG5jb25zdCBLZXlzID0ge1xuICBCQUNLU1BBQ0U6IDgsXG4gIFRBQjogOSxcbiAgRU5URVI6IDEzLFxuICBTSElGVDogMTYsXG4gIENUUkw6IDE3LFxuICBBTFQ6IDE4LFxuICBFU0NBUEU6IDI3LFxuXG4gIExFRlQ6IDM3LFxuICBSSUdIVDogMzksXG4gIFVQOiAzOCxcblxuICBERUxFVEU6IDQ2LFxuICBET1dOOiA0MCxcbiAgTEVGVF9PU19LRVk6IDkxLFxuICBSSUdIVF9PU19LRVk6IDkyLFxuICBTRUxFQ1RfS0VZOiA5M1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKVxuXG4gICAgLyoqXG4gICAgICogVGhlIGBiYXJLZXlgIGluIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggdG8gdXNlIGZvciBhdXRvLWNvbXBsZXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9iYXJLZXkgPSBvcHRzLmJhcktleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGBleHBlcmllbmNlS2V5YCBvZiB0aGUgdmVydGljYWwgc2VhcmNoIHRvIHVzZSBmb3IgYXV0by1jb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fZXhwZXJpZW5jZUtleSA9IG9wdHMuZXhwZXJpZW5jZUtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGlucHV0IGVsIHNlbGVjdG9yIGZvciBhdXRvIGNvbXBsZXRlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gb3B0cy5pbnB1dEVsIHx8ICcuanMteWV4dC1xdWVyeSc7XG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgZm9yIHRoZSBkYXRhLXN0b3JhZ2UgdG8gbGlzdGVuIGZvciB1cGRhdGVzIGZyb20gdGhlIHNlcnZlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgbGV0IG1vZHVsZUlkID0gJ2F1dG9jb21wbGV0ZSc7XG4gICAgaWYgKHRoaXMuX2JhcktleSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX2JhcktleSAhPT0gbnVsbCkge1xuICAgICAgbW9kdWxlSWQgPSAnYXV0b2NvbXBsZXRlLicgKyB0aGlzLl9iYXJLZXk7XG4gICAgfVxuICAgIHRoaXMubW9kdWxlSWQgPSBtb2R1bGVJZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGhhbmRsZWJhcnMgdGVtcGxhdGUgbmFtZSB0byB1c2UgZm9yIHJlbmRlcmluZ1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3NlYXJjaC9hdXRvY29tcGxldGUnO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBpbnB1dCB2YWx1ZSB3aGVuIHR5cGluZy5cbiAgICAgKiBXZSB1c2UgdGhpcyBmb3IgcmVzZXR0aW5nIHRoZSBzdGF0ZSBvZiB0aGUgaW5wdXQgdmFsdWUgd2hlbiBvdGhlciBpbnRlcmFjdGlvbnMgKGUuZy4gcmVzdWx0IG5hdmlnYXRpb24pXG4gICAgICogY2hhbmdlIGJhc2VkIG9uIGludGVyYWN0aW9ucy4gRm9yIGluc3RhbmNlLCBoaXR0aW5nIGVzY2FwZSBzaG91bGQgcmVzZXQgdGhlIHZhbHVlIHRvIHRoZSBvcmlnaW5hbCB0eXBlZCBxdWVyeS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX29yaWdpbmFsUXVlcnkgPSBvcHRzLm9yaWdpbmFsUXVlcnkgfHwgJyc7XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uIHRocm91Z2ggcmVzdWx0cy5cbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgc2VjdGlvbiB3ZSdyZSBuYXZpZ2F0aW5nIGluLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fc2VjdGlvbkluZGV4ID0gMDtcblxuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIGtleWJvYXJkIG5hdmlnYXRpb24gdGhyb3VnaCByZXN1bHRzLlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCByZXN1bHQgaW5kZXggd2UncmUgbmF2aWdhdGluZyBvbi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gLTE7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgdGV4dCB0byBzaG93IGFzIHRoZSBmaXJzdCBpdGVtIGZvciBhdXRvIGNvbXBsZXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucHJvbXB0SGVhZGVyID0gb3B0cy5wcm9tcHRIZWFkZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGludm9rZWQgd2hlbiB0aGUgYEVudGVyYCBrZXkgaXMgcHJlc3NlZCBvbiBhdXRvIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIHRoaXMuX29uU3VibWl0ID0gb3B0cy5vblN1Ym1pdCB8fCBmdW5jdGlvbigpIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBhbGlhc2VkIHVzZWQgYnkgdGhlIGNvbXBvbmVudCBtYW5hZ2VyIGZvciBjcmVhdGlvbi5cbiAgICovXG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ0F1dG9Db21wbGV0ZSc7XG4gIH1cblxuICAvKipcbiAgICogc2V0U3RhdGUgaXMgb3ZlcnJpZGRlbiBzbyB0aGF0IHdlIGNhbiBwcm92aWRlIGFkZGl0aW9uYWwgbWV0YSBkYXRhXG4gICAqIHRvIHRoZSB0ZW1wbGF0ZSAoZS5nLiB0aGUgc2VjdGlvbkluZGV4IGFuZCByZXN1bHRJbmRleCksIHNpbmNlXG4gICAqIHRob3NlIGFyZSBjbGllbnQtaW50ZXJhY3Rpb24gc3BlY2lmaWMgdmFsdWVzIGFuZCBhcmVuJ3QgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyLlxuICAgKi9cbiAgc2V0U3RhdGUoZGF0YSkge1xuICAgIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgc2VjdGlvbkluZGV4OiB0aGlzLl9zZWN0aW9uSW5kZXgsXG4gICAgICByZXN1bHRJbmRleDogdGhpcy5fcmVzdWx0SW5kZXgsXG4gICAgICBwcm9tcHRIZWFkZXI6IHRoaXMuX29yaWdpbmFsUXVlcnkubGVuZ3RoID09PSAwID8gdGhpcy5wcm9tcHRIZWFkZXIgOiBudWxsXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIHVwZGF0ZVN0YXRlIGlzIGEgaGVscGVyIHRvIGFwcGx5IHRoZSBjdXJyZW50IHN0YXRlIHdpdGggbmV3IGNsaWVudC1zdGF0ZS5cbiAgICovXG4gIHVwZGF0ZVN0YXRlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5fc3RhdGUuZ2V0KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uQ3JlYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgY29uc3RydWN0ZWQgZnJvbSB0aGUgZnJhbWV3b3JrLlxuICAgKiBPbmNlIHdlJ3JlIGluaXRhbGl6ZWQsIHdlIHdpcmUgdXAgYWxsIG9mIG91ciB1c2VyIGludGVyYWN0aW9uc1xuICAgKi9cbiAgb25DcmVhdGUoKSB7XG4gICAgLy8gVXNlIHRoZSBjb250ZXh0IG9mIHRoZSBwYXJlbnQgY29tcG9uZW50IHRvIGZpbmQgdGhlIGlucHV0IG5vZGUuXG4gICAgbGV0IHF1ZXJ5SW5wdXQgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Ll9jb250YWluZXIsIHRoaXMuX2lucHV0RWwpO1xuICAgIGlmICghcXVlcnlJbnB1dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgaW5pdGlhbGl6ZSBBdXRvQ29tcGxldGUuIENhbiBub3QgZmluZCB7SFRNTEVsZW1lbnR9IGAnLCB0aGlzLl9pbnB1dEVsLCAnYC4nKVxuICAgIH1cblxuICAgIC8vIERpc2FibGUgdGhlIG5hdGl2ZSBhdXRvIGNvbXBsZXRlXG4gICAgRE9NLmF0dHIocXVlcnlJbnB1dCwgJ2F1dG9Db21wbGV0ZScsICdvZmYnKTtcblxuICAgIC8vIFRoZSB1c2VyIGV4aXRzIHRoZSBpbnB1dCwgc28gd2Ugd2FudCB0byByZXNldCB0aGUgc3RhdGUgYW5kIGNsb3NlXG4gICAgLy8gdGhlIGF1dG8gY29tcGxldGVcbiAgICBET00ub24ocXVlcnlJbnB1dCwgJ2JsdXInLCAoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIGEgdXNlciBmb2N1c2VzIHRoZSBpbnB1dCwgd2Ugc2hvdWxkIHBvcHVsYXRlIHRoZSBhdXRvY29tcGxldGUgYmFzZWRcbiAgICAvLyBvbiB0aGUgY3VycmVudCB2YWx1ZVxuICAgIERPTS5vbihxdWVyeUlucHV0LCAnZm9jdXMnLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmNvcmUuYXV0b0NvbXBsZXRlKHF1ZXJ5SW5wdXQudmFsdWUsIHRoaXMuX2V4cGVyaWVuY2VLZXksIHRoaXMuX2JhcktleSk7XG4gICAgfSk7XG5cbiAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBuYXZpZ2F0ZSBiZXR3ZWVuIHRoZSByZXN1bHRzIHVzaW5nIHRoZSBrZXlib2FyZFxuICAgIERPTS5vbihxdWVyeUlucHV0LCAna2V5ZG93bicsIChlKSA9PiB7XG4gICAgIHRoaXMuaGFuZGxlTmF2aWdhdGVSZXN1bHRzKGUua2V5Q29kZSwgZSk7XG4gICAgfSk7XG5cbiAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBzZWxlY3QgYSByZXN1bHQgd2l0aCB0aGUgbW91c2VcbiAgICBET00uZGVsZWdhdGUodGhpcy5fY29udGFpbmVyLCAnLmpzLXlleHQtYXV0b2NvbXBsZXRlLW9wdGlvbicsICdtb3VzZWRvd24nLCAoZXZ0LCB0YXJnZXQpID0+IHtcbiAgICAgIGxldCBkYXRhID0gdGFyZ2V0LmRhdGFzZXQsXG4gICAgICAgICAgdmFsID0gZGF0YS52YWx1ZSxcbiAgICAgICAgICBmaWx0ZXIgPSBKU09OLnBhcnNlKGRhdGEuZmlsdGVyKTtcblxuICAgICAgdGhpcy51cGRhdGVRdWVyeSh2YWwpO1xuICAgICAgdGhpcy5fb25TdWJtaXQoKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIC8vIFdoZW4gdGhlIHVzZXIgaXMgdHlwaW5nIGluIHRoZSBpbnB1dCwgcHJvY2VzcyB0aGUgYXV0byBjb21wbGV0ZS5cbiAgICBET00ub24ocXVlcnlJbnB1dCwgJ2tleXVwJywgKGUpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlVHlwaW5nKGUua2V5Q29kZSwgcXVlcnlJbnB1dC52YWx1ZSwgZSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIGNsb3NlIHdpbGwgaGlkZSB0aGUgYXV0byBjb21wbGV0ZSByZXN1bHRzIGFuZCByZXNldCB0aGUgc3RhdGUuXG4gICAqL1xuICBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt9KTtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICAvKipcbiAgICogcmVzZXRzIHRoZSBjbGllbnQgc3RhdGUgdG8gdGhlaXIgb3JpZ2luYWwgdmFsdWVzIGFuZCB0cmlnZ2Vyc1xuICAgKiBhIHRlbXBsYXRlLXJlcmVuZGVyIHZpYSB1cGRhdGVTdGF0ZVxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgdGhpcy5fcmVzdWx0SW5kZXggPSAtMTtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIG1ldGhvZCB0byB1cGRhdGUgdGhlIGlucHV0IHRleHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdF92YWx1ZSBPcHRpb24gdmFsdWUgcHJvdmlkZWQuXG4gICAqIElmIG5vIHZhbHVlIHByb3ZpZGVkLCB3ZSdsbCB0cnkgdG8gZmluZCBpdCBiYXNlZCBvbiB0aGUgc2VsZWN0aW9uIGluZGV4ZXMuXG4gICAqL1xuICB1cGRhdGVRdWVyeShvcHRfdmFsdWUpIHtcbiAgICAvLyBPbmx5IHdhbnQgdG8gdXBkYXRlIHRoZSBxdWVyeSBzdHJpbmcgaWYgdGhlcmVzIGEgdmFsdWUuXG4gICAgLy8gSWYgb25lIGlzIHByb3ZpZGVkLCBncmVhdC5cbiAgICAvLyBPdGhlcndpc2UsIGxldHMgdHJ5IHRvIGZpbmQgaXQgZnJvbSB0aGUgY3VycmVudCBzZWxlY3Rpb24gaW4gdGhlIHJlc3VsdHMuXG4gICAgaWYgKG9wdF92YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyksXG4gICAgICAgICAgcmVzdWx0cyA9IHNlY3Rpb25zW3RoaXMuX3NlY3Rpb25JbmRleF0ucmVzdWx0cztcbiAgICAgIG9wdF92YWx1ZSA9IHJlc3VsdHNbdGhpcy5fcmVzdWx0SW5kZXhdLnNob3J0VmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IHF1ZXJ5RWwgPSBET00ucXVlcnkodGhpcy5fcGFyZW50Ll9jb250YWluZXIsICcuanMteWV4dC1xdWVyeScpO1xuICAgIHF1ZXJ5RWwudmFsdWUgPSBvcHRfdmFsdWU7XG4gIH1cblxuICBoYW5kbGVUeXBpbmcoa2V5LCB2YWx1ZSwgZSkge1xuICAgIGxldCBpZ25vcmVkS2V5cyA9IFtcbiAgICAgIEtleXMuRE9XTixcbiAgICAgIEtleXMuVVAsXG4gICAgICBLZXlzLkNUUkwsXG4gICAgICBLZXlzLkFMVCxcbiAgICAgIEtleXMuU0hJRlQsXG4gICAgICBLZXlzLkxFRlQsXG4gICAgICBLZXlzLlJJR0hULFxuICAgICAgS2V5cy5MRUZUX09TX0tFWSxcbiAgICAgIEtleXMuUklHSFRfT1NfS0VZLFxuICAgICAgS2V5cy5TRUxFQ1RfS0VZXG4gICAgXTtcblxuICAgIGlmIChpZ25vcmVkS2V5cy5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFVzZXIgZXNjYXBlcyBvdXQgb2YgYXV0byBjb21wbGV0ZSwgc28gd2UgcmVzZXQgaXQgdG8gdGhlIG9yaWdpbmFsIGlucHV0XG4gICAgaWYgKGtleSA9PT0gS2V5cy5FU0NBUEUpIHtcbiAgICAgIHRoaXMudXBkYXRlUXVlcnkodGhpcy5fb3JpZ2luYWxRdWVyeSk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVGFiYmluZyBvdXQgb3IgZW50ZXIgc2hvdWxkIGNsb3NlIHRoZSBhdXRvIGNvbXBsZXRlLlxuICAgIGlmIChrZXkgPT09IEtleXMuRU5URVIgfHwga2V5ID09PSBLZXlzLlRBQikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgb3JpZ2luYWwgdmFsdWUgYmFzZWQgb24gdGhlIHVzZXIgaW5wdXRcbiAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gdmFsdWU7XG5cbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgdGhpcy5jb3JlLmF1dG9Db21wbGV0ZSh2YWx1ZSwgdGhpcy5fZXhwZXJpZW5jZUtleSwgdGhpcy5fYmFyS2V5KTtcbiAgfVxuXG4gIGhhbmRsZU5hdmlnYXRlUmVzdWx0cyhrZXksIGUpIHtcbiAgICBsZXQgc2VjdGlvbnMgPSB0aGlzLl9zdGF0ZS5nZXQoJ3NlY3Rpb25zJyk7XG4gICAgaWYgKHNlY3Rpb25zID09PSB1bmRlZmluZWQgfHwgc2VjdGlvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0cyA9IHNlY3Rpb25zW3RoaXMuX3NlY3Rpb25JbmRleF0ucmVzdWx0cztcbiAgICBpZiAoa2V5ID09PSBLZXlzLlVQKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5fcmVzdWx0SW5kZXggPD0gMCkge1xuICAgICAgICBpZiAodGhpcy5fc2VjdGlvbkluZGV4ID4gMCkge1xuICAgICAgICAgIHRoaXMuX3NlY3Rpb25JbmRleCAtLTtcbiAgICAgICAgICB0aGlzLl9yZXN1bHRJbmRleCA9IHNlY3Rpb25zW3RoaXMuX3NlY3Rpb25JbmRleF0ucmVzdWx0cy5sZW5ndGggLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudXBkYXRlUXVlcnkodGhpcy5fb3JpZ2luYWxRdWVyeSk7XG4gICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZXN1bHRJbmRleCAtLTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSBLZXlzLkRPV04pIHtcbiAgICAgIGlmICh0aGlzLl9yZXN1bHRJbmRleCA+PSByZXN1bHRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlY3Rpb25JbmRleCA8IHNlY3Rpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLl9zZWN0aW9uSW5kZXggKys7XG4gICAgICAgICAgdGhpcy5fcmVzdWx0SW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3Jlc3VsdEluZGV4ICsrO1xuICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlyZWN0QW5zd2VyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gJ2RpcmVjdEFuc3dlcic7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncmVzdWx0cy9kaXJlY3RhbnN3ZXInO1xuICB9XG5cbiAgYmVmb3JlTW91bnQoKSB7XG4gICAgaWYgKCF0aGlzLmhhc1N0YXRlKCdhbnN3ZXInKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnRGlyZWN0QW5zd2VyJztcbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3Jlc3VsdHMvcmVzdWx0c2l0ZW0nO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnUmVzdWx0c0l0ZW1Db21wb25lbnQnO1xuICB9XG59IiwiaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdyZXN1bHRzL2xvY2F0aW9ucmVzdWx0c2l0ZW0nXG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxufVxuIiwiaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVzdWx0c0l0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdyZXN1bHRzL2V2ZW50cmVzdWx0c2l0ZW0nXG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxufVxuIiwiaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNJdGVtQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncmVzdWx0cy9wZW9wbGVyZXN1bHRzaXRlbSdcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ1Blb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuaW1wb3J0IFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vZXZlbnRyZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9wZW9wbGVyZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmNvbnN0IFJlc3VsdFR5cGUgPSB7XG4gIEVWRU5UOiAnZXZlbnQnLFxuICBMT0NBVElPTjogJ2xvY2F0aW9uJyxcbiAgUEVPUExFOiAncGVvcGxlJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0c0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9ICd2ZXJ0aWNhbFJlc3VsdHMnO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3Jlc3VsdHMvcmVzdWx0cyc7XG5cbiAgICB0aGlzLmxpbWl0ID0gb3B0cy5saW1pdCB8fCA1O1xuXG4gICAgdGhpcy5faXRlbUNvbmZpZyA9IHtcbiAgICAgIGdsb2JhbDoge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9LFxuICAgICAgW0V2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZV06IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIFtMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50LnR5cGVdOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH0sXG4gICAgICBbUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQudHlwZV06IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcHRzLnJlbmRlckl0ZW0gPT09IHVuZGVmaW5lZCAmJiBvcHRzLl9wYXJlbnRPcHRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdHMucmVuZGVySXRlbSA9IG9wdHMuX3BhcmVudE9wdHMucmVuZGVySXRlbTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5pdGVtVGVtcGxhdGUgPT09IHVuZGVmaW5lZCAmJiBvcHRzLl9wYXJlbnRPcHRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdHMuaXRlbVRlbXBsYXRlID0gb3B0cy5fcGFyZW50T3B0cy5pdGVtVGVtcGxhdGU7XG4gICAgfVxuXG4gICAgdGhpcy5jb25maWd1cmVJdGVtKHtcbiAgICAgIHJlbmRlcjogb3B0cy5yZW5kZXJJdGVtLFxuICAgICAgdGVtcGxhdGU6IG9wdHMuaXRlbVRlbXBsYXRlXG4gICAgfSk7XG4gIH1cblxuICBtb3VudCgpIHtcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5nZXRTdGF0ZSgpKS5sZW5ndGggPiAwKSB7XG4gICAgICBzdXBlci5tb3VudCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0U3RhdGUoZGF0YSwgdmFsKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgaW5jbHVkZU1hcDogdGhpcy5fb3B0cy5pbmNsdWRlTWFwLFxuICAgICAgbWFwQ29uZmlnOiB0aGlzLl9vcHRzLm1hcENvbmZpZ1xuICAgIH0pLCB2YWwpO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnVmVydGljYWxSZXN1bHRzJztcbiAgfVxuXG4gIGNvbmZpZ3VyZUl0ZW0oY29uZmlnKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVuZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLl9pdGVtQ29uZmlnLmdsb2JhbC5yZW5kZXIgPSBjb25maWcucmVuZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29uZmlnLnJlbmRlcikge1xuICAgICAgICB0aGlzLnNldEl0ZW1SZW5kZXIoa2V5LCBjb25maWcucmVuZGVyW2tleV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29uZmlnLnRlbXBsYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5faXRlbUNvbmZpZy5nbG9iYWwudGVtcGxhdGUgPSBjb25maWcudGVtcGxhdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBjb25maWcudGVtcGxhdGUpIHtcbiAgICAgICAgdGhpcy5zZXRJdGVtVGVtcGxhdGUoa2V5LCBjb25maWcudGVtcGxhdGVba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0SXRlbVRlbXBsYXRlKHR5cGUsIHRlbXBsYXRlKSB7XG4gICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KHR5cGUpO1xuICAgIHRoaXMuX2l0ZW1Db25maWdbY2xhenoudHlwZV0udGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHNldEl0ZW1SZW5kZXIodHlwZSwgcmVuZGVyKSB7XG4gICAgbGV0IGNsYXp6ID0gdGhpcy5nZXRJdGVtQ29tcG9uZW50KHR5cGUpO1xuICAgIHRoaXMuX2l0ZW1Db25maWdbY2xhenoudHlwZV0ucmVuZGVyID0gcmVuZGVyO1xuICB9XG5cbiAgZ2V0SXRlbUNvbXBvbmVudCh0eXBlKSB7XG4gICAgbGV0IGNvbXAgPSBSZXN1bHRzSXRlbUNvbXBvbmVudDtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgUmVzdWx0VHlwZS5FVkVOVDpcbiAgICAgICAgY29tcCA9IEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSZXN1bHRUeXBlLkxPQ0FUSU9OOlxuICAgICAgICBjb21wID0gTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJlc3VsdFR5cGUuUEVPUExFOlxuICAgICAgICBjb21wID0gUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wO1xuICB9XG5cbiAgYWRkQ2hpbGQoZGF0YSwgdHlwZSkge1xuICAgIGxldCBjbGF6eiA9IHRoaXMuZ2V0SXRlbUNvbXBvbmVudChkYXRhLnR5cGUpO1xuICAgIGlmIChjbGF6eikge1xuICAgICAgdHlwZSA9IGNsYXp6LnR5cGU7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdGhlIHByb3BlciBpdGVtIHJlbmRlcnMgdG8gdGhlIHRoZSBjb21wb25lbnRzXG4gICAgLy8gaGF2ZSBqdXN0IGJlZW4gY29uc3RydWN0ZWQuIFByaW9yaXRpemUgZ2xvYmFsIG92ZXIgaW5kaXZpZHVhbCBpdGVtcy5cbiAgICBsZXQgY29tcCA9IHN1cGVyLmFkZENoaWxkKGRhdGEsIHR5cGUpLFxuICAgICAgICBnbG9iYWxDb25maWcgPSB0aGlzLl9pdGVtQ29uZmlnLmdsb2JhbCxcbiAgICAgICAgaXRlbUNvbmZpZyA9IHRoaXMuX2l0ZW1Db25maWdbY2xhenoudHlwZV07XG5cbiAgICBsZXQgaGFzR2xvYmFsUmVuZGVyID0gdHlwZW9mIGdsb2JhbENvbmZpZy5yZW5kZXIgPT09ICdmdW5jdGlvbicsXG4gICAgICAgIGhhc0dsb2JhbFRlbXBsYXRlID0gdHlwZW9mIGdsb2JhbENvbmZpZy50ZW1wbGF0ZSA9PT0gJ3N0cmluZyc7XG5cbiAgICBpZiAoaGFzR2xvYmFsUmVuZGVyKSB7XG4gICAgICBjb21wLnNldFJlbmRlcihnbG9iYWxDb25maWcucmVuZGVyKTtcbiAgICB9XG5cbiAgICBpZiAoaGFzR2xvYmFsVGVtcGxhdGUpIHtcbiAgICAgIGNvbXAuc2V0VGVtcGxhdGUoZ2xvYmFsQ29uZmlnLnRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICBpZiAoIWl0ZW1Db25maWcpIHtcbiAgICAgIHJldHVybiBjb21wO1xuICAgIH1cblxuICAgIGlmICghaGFzR2xvYmFsUmVuZGVyICYmIGl0ZW1Db25maWcucmVuZGVyKSB7XG4gICAgICBjb21wLnNldFJlbmRlcihpdGVtQ29uZmlnLnJlbmRlcilcbiAgICB9XG5cbiAgICAvLyBBcHBseSB0ZW1wbGF0ZSBzcGVjaWZpYyBzaXR1YXRpb25cbiAgICBpZiAoIWhhc0dsb2JhbFRlbXBsYXRlICYmIGl0ZW1Db25maWcudGVtcGxhdGUpIHtcbiAgICAgIGNvbXAuc2V0VGVtcGxhdGUoaXRlbUNvbmZpZy50ZW1wbGF0ZSlcbiAgICB9XG4gICAgcmV0dXJuIGNvbXA7XG4gIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMubW9kdWxlSWQgPSAndW5pdmVyc2FsUmVzdWx0cyc7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncmVzdWx0cy91bml2ZXJzYWxyZXN1bHRzJztcblxuICAgIHRoaXMuX2xpbWl0ID0gb3B0cy5saW1pdCB8fCAxMDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ1VuaXZlcnNhbFJlc3VsdHMnO1xuICB9XG5cbiAgaW5pdChvcHRzKSB7XG4gICAgc3VwZXIuaW5pdChvcHRzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZENoaWxkKGRhdGEsIHR5cGUpIHtcbiAgICBsZXQgb3B0cyA9IHRoaXMuZ2V0Q2hpbGRDb25maWcoW2RhdGFbJ3ZlcnRpY2FsQ29uZmlnSWQnXV0pO1xuICAgIHJldHVybiBzdXBlci5hZGRDaGlsZChkYXRhLCB0eXBlLCBvcHRzKTtcbiAgfVxuXG4gIGdldENoaWxkQ29uZmlnKGNvbmZpZ0lkKSB7XG4gICAgbGV0IGNvbmZpZyA9IHRoaXMuX29wdHMuY29uZmlnO1xuICAgIGlmIChjb25maWcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fb3B0c1snY29uZmlnJ11bY29uZmlnSWRdIHx8IHRoaXMuX29wdHNbJ2NvbmZpZyddO1xuICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gJ3ZlcnRpY2FsUmVzdWx0cyc7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncmVzdWx0cy9tYXAnO1xuXG4gICAgdGhpcy5fbWFwUHJvdmlkZXIgPSBvcHRzLm1hcFByb3ZpZGVyO1xuXG4gICAgdGhpcy5fbWFwQXBpS2V5ID0gb3B0cy5tYXBBcGlLZXk7XG5cbiAgICB0aGlzLl93aWR0aCA9IG9wdHMud2lkdGggfHwgJzEwMCUnO1xuXG4gICAgdGhpcy5faGVpZ2h0ID0gb3B0cy5oZWlnaHQgfHwgJzEwMCUnO1xuXG4gICAgdGhpcy5fem9vbSA9IG9wdHMuem9vbSB8fCAyMDtcblxuICAgIHRoaXMuX21hcCA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdNYXAnO1xuICB9XG5cbiAgb25DcmVhdGUoKSB7XG4gICAgbGV0IHNjcmlwdCA9IERPTS5jcmVhdGVFbCgnc2NyaXB0Jywge1xuICAgICAgaWQ6ICdnb29nbGUtbWFwLWpzJyxcbiAgICAgIG9ubG9hZDogKCkgPT4geyB0aGlzLmluaXRNYXAoKSB9LFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzcmM6ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PScrdGhpcy5fbWFwQXBpS2V5XG4gICAgfSk7XG5cbiAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgfVxuXG4gIG9uTW91bnQoKSB7XG4gICAgdGhpcy5pbml0TWFwKCk7XG4gIH1cblxuICBpbml0TWFwKCkge1xuICAgIGxldCBtYXBEYXRhID0gdGhpcy5nZXRTdGF0ZSgnbWFwJyk7XG5cbiAgICBpZiAoIW1hcERhdGEgfHwgbWFwRGF0YS5tYXBNYXJrZXJzLmxlbmd0aCA8PSAwKSB7XG4gICAgICB0aGlzLl9tYXAgPSBudWxsO1xuICAgICAgdGhpcy51bk1vdW50KCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBOT1RFKGJpbGx5KSBUaGlzIHRpbWVvdXQgaXMgYSBoYWNrXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgY29udGFpbmVyID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lcik7XG4gICAgICBET00uY3NzKGNvbnRhaW5lciwge1xuICAgICAgICB3aWR0aDogdGhpcy5fd2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5faGVpZ2h0XG4gICAgICB9KTtcblxuXG4gICAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoY29udGFpbmVyLCB7XG4gICAgICAgIHpvb206IHRoaXMuX3pvb21cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgYm91bmRzID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcygpO1xuICAgICAgaWYgKG1hcERhdGEgJiYgbWFwRGF0YS5tYXBNYXJrZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IG1hcmtlcnMgPSBtYXBEYXRhLm1hcE1hcmtlcnM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFya2Vycy5sZW5ndGg7IGkgKyspIHtcblxuICAgICAgICAgIGxldCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICAgIG1hcDogdGhpcy5tYXAsXG4gICAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgICBsYXQ6IG1hcmtlcnNbaV0ubGF0aXR1ZGUsXG4gICAgICAgICAgICAgIGxuZzogbWFya2Vyc1tpXS5sb25naXR1ZGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgYm91bmRzLmV4dGVuZChtYXJrZXIucG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhib3VuZHMpO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBzZXRTdGF0ZShkYXRhLCB2YWwpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICBtYXBDb25maWc6IHtcbiAgICAgICAgbWFwUHJvdmlkZXI6IHRoaXMuX21hcFByb3ZpZGVyLFxuICAgICAgICBtYXBBcGlLZXk6IHRoaXMuX21hcEFwaUtleVxuICAgICAgfVxuICAgIH0pLCB2YWwpO1xuICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gJ3VuaXZlcnNhbFJlc3VsdHMnO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3F1ZXN0aW9ucy9zdWJtaXNzaW9uJztcblxuICAgIC8qKlxuICAgICAqIFF1ZXN0aW9uIHN1Ym1pc3Npb24gaXMgYmFzZWQgb24gYSBmb3JtIGFzIGNvbnRleHQuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIG5hdGl2ZSBmb3JtIG5vZGUgd2l0aGluIGNvbnRhaW5lclxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2Zvcm1FbCA9IG9wdHMuZm9ybVNlbGVjdG9yIHx8ICdmb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB0byB1c2UgZm9yIHRoZSBlLW1haWwgYWRkcmVzcyBpbnB1dFxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBgRW1haWwgQWRkcmVzc2BcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2VtYWlsTGFiZWwgPSBvcHRzLmVtYWlsTGFiZWwgfHwgJypFbWFpbCBBZGRyZXNzOic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgbmFtZSBpbnB1dFxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBgTmFtZWBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX25hbWVMYWJlbCA9IG9wdHMubmFtZUxhYmVsIHx8ICdOYW1lOic7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgUXVlc3Rpb25cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gYFdoYXQgaXMgeW91ciBxdWVzdGlvbj9gXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9xdWVzdGlvbkxhYmVsID0gb3B0cy5xdWVzdGlvbkxhYmVsIHx8ICcqV2hhdCBpcyB5b3VyIHF1ZXN0aW9uPyc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgdG8gdXNlIGZvciB0aGUgUHJpdmFjeSBQb2xpY3lcbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gYFdoYXQgaXMgeW91ciBxdWVzdGlvbj9gXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9wcml2YWN5UG9saWN5TGFiZWwgPSBvcHRzLnByaXZhY3lQb2xpY3lMYWJlbCB8fCAnSSBhZ3JlZSB0byBvdXIgUHJpdmFjeSBQb2xpY3k6JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB0byB1c2UgZm9yIHRoZSBTdWJtaXQgYnV0dG9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIGBTdWJtaXQ/YFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYnV0dG9uTGFiZWwgPSBvcHRzLmJ1dHRvbkxhYmVsIHx8ICdTdWJtaXQnO1xuICB9XG5cbiAgYmVmb3JlTW91bnQoKSB7XG4gICAgLy8gT25seSBtb3VudCBvdXIgY29tcG9uZW50IGlmIHRoZSBxdWVyeSBoYXMgYmVlbiB0cmlnZ2VyZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodGhpcy5nZXRTdGF0ZSgnaGFzUXVlcmllZCcpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvbk1vdW50KCkge1xuICAgIHRoaXMuaW5pdFN1Ym1pdCh0aGlzLl9mb3JtRWwpO1xuICB9XG5cbiAgaW5pdFN1Ym1pdChmb3JtU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9mb3JtRWwgPSBmb3JtU2VsZWN0b3I7XG5cbiAgICBsZXQgZm9ybSA9IERPTS5xdWVyeSh0aGlzLl9jb250YWluZXIsIHRoaXMuX2Zvcm1FbCk7XG5cbiAgICBET00ub24oZm9ybSwgJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAvLyBUT0RPKGJpbGx5KSBTZXJpYWxpemUgZm9ybVxuICAgICAgLy8gdGhpcy5jb3JlLnN1Ym1pdFF1ZXN0aW9uKGZvcm0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnUUFTdWJtaXNzaW9uJztcbiAgfVxuXG4gIHNldFN0YXRlKGRhdGEsIHZhbCkge1xuICAgIC8vIFNpbmNlIHdlJ3JlIGJpbmRpbmcgdG8gc2VhcmNoIHJlc3VsdHMsXG4gICAgLy8gYW5kIHdlIG9ubHkgd2FudCB0byBzaG93IHRoZSBRQSBzdWJtaXNzaW9uXG4gICAgcmV0dXJuIHN1cGVyLnNldFN0YXRlKHtcbiAgICAgIGhhc1F1ZXJpZWQ6IGRhdGEuc2VjdGlvbnMgIT09IHVuZGVmaW5lZCxcbiAgICAgIGVtYWlsTGFiZWw6IHRoaXMuX2VtYWlsTGFiZWwsXG4gICAgICBuYW1lTGFiZWw6IHRoaXMuX25hbWVMYWJlbCxcbiAgICAgIHF1ZXN0aW9uTGFiZWw6IHRoaXMuX3F1ZXN0aW9uTGFiZWwsXG4gICAgICBwcml2YWN5UG9saWN5TGFiZWw6IHRoaXMuX3ByaXZhY3lQb2xpY3lMYWJlbCxcbiAgICAgIGJ1dHRvbkxhYmVsOiB0aGlzLl9idXR0b25MYWJlbCxcbiAgICAgIHF1ZXN0aW9uOiBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKS5nZXQoJ3F1ZXJ5JylcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi9jb21wb25lbnRtYW5hZ2VyJztcblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XG5cbmltcG9ydCBOYXZpZ2F0aW9uQ29tcG9uZW50IGZyb20gJy4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uY29tcG9uZW50JztcblxuaW1wb3J0IFNlYXJjaENvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9zZWFyY2hjb21wb25lbnQnO1xuaW1wb3J0IEF1dG9Db21wbGV0ZUNvbXBvbmVudCBmcm9tICcuL3NlYXJjaC9hdXRvY29tcGxldGVjb21wb25lbnQnO1xuXG5pbXBvcnQgRGlyZWN0QW5zd2VyQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9kaXJlY3RhbnN3ZXJjb21wb25lbnQnO1xuaW1wb3J0IFJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Jlc3VsdHNjb21wb25lbnQnO1xuaW1wb3J0IFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHNjb21wb25lbnQnO1xuXG5pbXBvcnQgUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcGVvcGxlcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5pbXBvcnQgTWFwQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9tYXBjb21wb25lbnQnO1xuXG5pbXBvcnQgUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IGZyb20gJy4vcXVlc3Rpb25zL3F1ZXN0aW9uc3VibWlzc2lvbmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBDT01QT05FTlRfTUFOQUdFUiA9IG5ldyBDb21wb25lbnRNYW5hZ2VyKClcbiAgICAgIC8vIENvcmUgQ29tcG9uZW50XG4gICAgICAucmVnaXN0ZXIoQ29tcG9uZW50KVxuXG4gICAgICAvLyBOYXZpZ2F0aW9uIENvbXBvbmVudHNcbiAgICAgIC5yZWdpc3RlcihOYXZpZ2F0aW9uQ29tcG9uZW50KVxuXG4gICAgICAvLyBTZWFyY2ggQ29tcG9uZW50c1xuICAgICAgLnJlZ2lzdGVyKFNlYXJjaENvbXBvbmVudClcbiAgICAgIC5yZWdpc3RlcihBdXRvQ29tcGxldGVDb21wb25lbnQpXG5cbiAgICAgIC8vIFJlc3VsdHMgQ29tcG9uZW50c1xuICAgICAgLnJlZ2lzdGVyKERpcmVjdEFuc3dlckNvbXBvbmVudClcbiAgICAgIC5yZWdpc3RlcihVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50KVxuICAgICAgLnJlZ2lzdGVyKFJlc3VsdHNDb21wb25lbnQpXG4gICAgICAucmVnaXN0ZXIoUmVzdWx0c0l0ZW1Db21wb25lbnQpXG4gICAgICAucmVnaXN0ZXIoTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudClcbiAgICAgIC5yZWdpc3RlcihFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50KVxuICAgICAgLnJlZ2lzdGVyKFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50KVxuXG4gICAgICAucmVnaXN0ZXIoTWFwQ29tcG9uZW50KVxuXG4gICAgICAvLyBRdWVzdGlvbnMgQ29tcG9uZW50c1xuICAgICAgLnJlZ2lzdGVyKFF1ZXN0aW9uU3VibWlzc2lvbkNvbXBvbmVudCkiLCJpbXBvcnQgQ29yZSBmcm9tICcuL2NvcmUvY29yZSc7XG5pbXBvcnQge1xuICBUZW1wbGF0ZUxvYWRlcixcbiAgQ09NUE9ORU5UX01BTkFHRVIsXG4gIFJlbmRlcmVyc1xufSBmcm9tICcuL3VpL2luZGV4JztcblxuLyoqXG4gKiBPdXIgQVBJIHNob3VsZCBvbmx5IGJlIGluc3RhbnRpYWJsZSBvbmNlXG4gKiBAdHlwZSB7QU5TV0VSU30gVGhlIGluc3RhbmNlIG9mIEFOU1dFUlNcbiAqL1xuY2xhc3MgQW5zd2VycyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmICghQW5zd2Vycy5zZXRJbnN0YW5jZSh0aGlzKSkge1xuICAgICAgcmV0dXJuIEFuc3dlcnMuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSBvZiB0aGUgcmVuZGVyZXIgdG8gdXNlIGZvciB0aGUgY29tcG9uZW50c1xuICAgICAqIFRoaXMgaXMgcHJvdmlkZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uLlxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVycy5IYW5kbGViYXJzKCk7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IG1hbmFnZXJcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50TWFuYWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbXBvbmVudHMgPSBDT01QT05FTlRfTUFOQUdFUjtcblxuICAgIC8qKlxuICAgICAqIEEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gaW52b2tlIG9uY2UgdGhlIGxpYnJhcnkgaXMgcmVhZHkuXG4gICAgICogVHlwaWNhbGx5IGZpcmVkIGFmdGVyIHRlbXBsYXRlcyBhcmUgZmV0Y2hlZCBmcm9tIHNlcnZlciBmb3IgcmVuZGVyaW5nLlxuICAgICAqL1xuICAgIHRoaXMuX29uUmVhZHkgPSBmdW5jdGlvbigpIHt9O1xuICB9XG5cbiAgc3RhdGljIHNldEluc3RhbmNlKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlKG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIGluaXQob3B0cykge1xuICAgIHRoaXMuY29tcG9uZW50cy5zZXRDb3JlKG5ldyBDb3JlKHtcbiAgICAgIGFwaUtleTogb3B0cy5hcGlLZXksXG4gICAgICBhbnN3ZXJzS2V5OiBvcHRzLmFuc3dlcnNLZXlcbiAgICB9KSlcbiAgICAuc2V0UmVuZGVyZXIodGhpcy5yZW5kZXJlcik7XG5cbiAgICB0aGlzLl9vblJlYWR5ID0gb3B0cy5vblJlYWR5IHx8IGZ1bmN0aW9uKCkge307XG5cbiAgICBpZiAob3B0cy51c2VUZW1wbGF0ZXMgPT09IGZhbHNlIHx8IG9wdHMudGVtcGxhdGVCdW5kbGUpIHtcbiAgICAgIGlmIChvcHRzLnRlbXBsYXRlQnVuZGxlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5pdChvcHRzLnRlbXBsYXRlQnVuZGxlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fb25SZWFkeS5jYWxsKHRoaXMpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gVGVtcGxhdGVzIGFyZSBjdXJyZW50bHkgZG93bmxvYWRlZCBzZXBhcmF0ZWx5IGZyb20gdGhlIENPUkUgYW5kIFVJIGJ1bmRsZS5cbiAgICAvLyBGdXR1cmUgZW5oYW5jZW1lbnQgaXMgdG8gc2hpcCB0aGUgY29tcG9uZW50cyB3aXRoIHRlbXBsYXRlcyBpbiBhIHNlcGFyYXRlIGJ1bmRsZS5cbiAgICB0aGlzLnRlbXBsYXRlcyA9IG5ldyBUZW1wbGF0ZUxvYWRlcih7XG4gICAgICB0ZW1wbGF0ZVVybDogb3B0cy50ZW1wbGF0ZVVybFxuICAgIH0pLm9uTG9hZGVkKCh0ZW1wbGF0ZXMpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuaW5pdCh0ZW1wbGF0ZXMpO1xuXG4gICAgICB0aGlzLl9vblJlYWR5LmNhbGwodGhpcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9uUmVhZHkoY2IpIHtcbiAgICB0aGlzLl9vblJlYWR5ID0gY2I7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRDb21wb25lbnQodHlwZSwgb3B0cykge1xuICAgIGNvbnNvbGUubG9nKCdBZGRpbmcgU3RhbmRhcmQgQ29tcG9uZW50Li4uJyk7XG4gICAgaWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuICAgICAgb3B0cyA9IHtcbiAgICAgICAgY29udGFpbmVyOiBvcHRzXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzLmNyZWF0ZSh0eXBlLCBvcHRzKS5tb3VudCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY3JlYXRlQ29tcG9uZW50KG9wdHMpIHtcbiAgICBjb25zb2xlLmxvZygnQ3JlYXRlIEN1c3RvbSBDb21wb25lbnQuLi4nKTtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzLmNyZWF0ZSgnQ29tcG9uZW50Jywgb3B0cykubW91bnQoKTtcbiAgfVxuXG4gIHJlZ2lzdGVySGVscGVyKG5hbWUsIGNiKSB7XG4gICAgdGhpcy5yZW5kZXJlci5yZWdpc3RlckhlbHBlcihuYW1lLCBjYik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG59XG5cbmNvbnN0IEFOU1dFUlMgPSBuZXcgQW5zd2VycygpO1xuZXhwb3J0IGRlZmF1bHQgQU5TV0VSUztcbiJdLCJuYW1lcyI6WyJNZXRob2RzIiwiR0VUIiwiUE9TVCIsIlBVVCIsIkRFTEVURSIsIkh0dHBSZXF1ZXN0ZXIiLCJ1cmwiLCJkYXRhIiwib3B0cyIsInJlcXVlc3QiLCJlbmNvZGVQYXJhbXMiLCJPYmplY3QiLCJhc3NpZ24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1ldGhvZCIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJwYXJhbXMiLCJoYXNQYXJhbSIsImluZGV4T2YiLCJzZWFyY2hRdWVyeSIsImtleSIsImVuY29kZVVSSSIsIkFwaVJlcXVlc3QiLCJfcmVxdWVzdGVyIiwiX2Jhc2VVcmwiLCJiYXNlVXJsIiwiX2VuZHBvaW50IiwiZW5kcG9pbnQiLCJfYXBpS2V5IiwiYXBpS2V5IiwiX3ZlcnNpb24iLCJ2ZXJzaW9uIiwiX3BhcmFtcyIsImdldCIsIlNlYXJjaCIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwidG9TdHJpbmciLCJzZWFyY2hQYXJhbXMiLCJpc0xvY2FsIiwiX2lzTG9jYWwiLCJob3N0bmFtZSIsIl9hbnN3ZXJzS2V5IiwiYW5zd2Vyc0tleSIsInF1ZXJ5U3RyaW5nIiwidmVydGljYWxLZXkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyIiwibW9kdWxlSWQiLCJzZWN0aW9ucyIsImxlbmd0aCIsInJlc3VsdHMiLCJpIiwidmFsdWUiLCJzdWJTdHJpbmdzIiwibWF0Y2hlZFN1YnN0cmluZ3MiLCJwdXNoIiwiaGlnaGxpZ2h0IiwiY2xlYW4iLCJzaG9ydFZhbHVlIiwiaGlnaGxpZ2h0ZWRWYWx1ZSIsInNvcnQiLCJhIiwiYiIsIm9mZnNldCIsIm5leHRTdGFydCIsImoiLCJzdGFydCIsIk51bWJlciIsImVuZCIsInNsaWNlIiwiam9pbiIsImJhcktleSIsIkF1dG9Db21wbGV0ZSIsImlucHV0IiwiZXhwZXJpZW5jZUtleSIsIl9xdWVyeVZlcml0Y2FsIiwiX3F1ZXJ5VW5pdmVyc2FsIiwidmVydGljYWwiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsInVuaXZlcnNhbCIsIlJlc3VsdCIsInJlc3VsdHNEYXRhIiwiU2VjdGlvbiIsInZlcnRpY2FsQ29uZmlnSWQiLCJyZXN1bHRzQ291bnQiLCJlbmNvZGVkU3RhdGUiLCJhcHBsaWVkUXVlcnlGaWx0ZXJzIiwiZmFjZXRzIiwiZnJvbSIsIm1hcCIsInBhcnNlTWFwIiwidmVydGljYWxVUkwiLCJtYXBNYXJrZXJzIiwiY2VudGVyQ29vcmRpbmF0ZXMiLCJyZXN1bHQiLCJ5ZXh0RGlzcGxheUNvb3JkaW5hdGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImxhYmVsIiwibW9kdWxlcyIsInVybHMiLCJBcnJheSIsImlzQXJyYXkiLCJVbml2ZXJzYWxSZXN1bHRzIiwicXVlcnlJZCIsIkRpcmVjdEFuc3dlciIsImRpcmVjdEFuc3dlciIsIk5hdmlnYXRpb24iLCJ0YWJPcmRlciIsIm5hdiIsIlZlcnRpY2FsUmVzdWx0cyIsIlNlYXJjaERhdGFUcmFuc2Zvcm1lciIsIm5hdmlnYXRpb24iLCJ1bml2ZXJzYWxSZXN1bHRzIiwidmVydGljYWxSZXN1bHRzIiwiRXZlbnRFbWl0dGVyIiwiX2xpc3RlbmVycyIsImV2dCIsImNiIiwib25jZSIsIkVycm9yIiwidW5kZWZpbmVkIiwiZXZlbnQiLCJvbiIsImxpc3RlbmVycyIsImtlZXAiLCJNb2R1bGVEYXRhIiwiaWQiLCJfaWQiLCJfaGlzdG9yeSIsIl9kYXRhIiwic2V0IiwiY2FwdHVyZVByZXZpb3VzIiwia2V5cyIsImxlbiIsImlzRGlydHkiLCJwcm9wIiwidmFsIiwiZW1pdCIsInNoaWZ0IiwicHJldmlvdXMiLCJfcHJldmlvdXMiLCJwYXJzZSIsInBvcCIsIlN0b3JhZ2UiLCJfbW9kdWxlRGF0YUNvbnRhaW5lciIsIl9mdXR1cmVMaXN0ZW5lcnMiLCJtb2R1bGVJZHMiLCJfYXBwbHlGdXR1cmVMaXN0ZW5lcnMiLCJpbnNlcnQiLCJ0cmFuc2Zvcm0iLCJyYXciLCJtb2R1bGVEYXRhIiwib2ZmIiwiZnV0dXJlcyIsImZ1dHVyZSIsIkNvcmUiLCJzdG9yYWdlIiwiX3NlYXJjaGVyIiwiX2F1dG9Db21wbGV0ZSIsInZlcnRpY2FsUXVlcnkiLCJ0cmFuc2Zvcm1WZXJ0aWNhbCIsInF1ZXJ5IiwiQ29tcG9uZW50TWFuYWdlciIsInNldEluc3RhbmNlIiwiZ2V0SW5zdGFuY2UiLCJfY29tcG9uZW50UmVnaXN0cnkiLCJfYWN0aXZlQ29tcG9uZW50cyIsIl9jb3JlIiwiX3JlbmRlcmVyIiwicmVuZGVyZXIiLCJjb3JlIiwiY29tcG9uZW50Q2xhenoiLCJ0eXBlIiwiY29tcG9uZW50VHlwZSIsImNvbXBvbmVudE1hbmFnZXIiLCJjb21wb25lbnQiLCJpbml0Iiwic2V0U3RhdGUiLCJpbnN0YW5jZSIsIlJlbmRlcmVyIiwidGVtcGxhdGUiLCJuYW1lIiwiZG9jdW1lbnQiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJET00iLCJodG1sIiwicGFyc2VGcm9tU3RyaW5nIiwicGFyZW50Iiwic2VsZWN0b3IiLCJIVE1MRWxlbWVudCIsIldpbmRvdyIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWwiLCJvcHRzX2RhdGEiLCJub2RlIiwiY3JlYXRlRWxlbWVudCIsInByb3BzIiwiYWRkQ2xhc3MiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJhcHBlbmRDaGlsZCIsImNsYXNzTmFtZSIsImNsYXNzZXMiLCJzcGxpdCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsInN0eWxlcyIsInN0eWxlIiwiYXR0ciIsInNldEF0dHJpYnV0ZSIsInNldHRpbmdzIiwiZSIsIkV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImN0eHQiLCJ0YXJnZXQiLCJpc0VxdWFsTm9kZSIsIm1hdGNoZXMiLCJwYXJlbnROb2RlIiwiVGVtcGxhdGVMb2FkZXIiLCJfdGVtcGxhdGVVcmwiLCJ0ZW1wbGF0ZVVybCIsIl90ZW1wbGF0ZXMiLCJfb25Mb2FkZWQiLCJfaW5pdCIsImZldGNoVGVtcGxhdGVzIiwidGhhdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2NyaXB0IiwiY3JlYXRlRWwiLCJvbmxvYWQiLCJvbmVycm9yIiwiYXN5bmMiLCJzcmMiLCJhcHBlbmQiLCJsb2ciLCJ0ZW1wbGF0ZXMiLCJ0ZW1wbGF0ZU5hbWUiLCJIYW5kbGViYXJzUmVuZGVyZXIiLCJfaGFuZGxlYmFycyIsIl9oYiIsIl9yZWdpc3RlckN1c3RvbUhlbHBlcnMiLCJyZWdpc3RlckhlbHBlciIsImNvbXBpbGUiLCJjb25maWciLCJhcmcxIiwiYXJnMiIsIm9wdGlvbnMiLCJmbiIsImludmVyc2UiLCJwaG9uZU51bWJlclN0cmluZyIsImNsZWFuZWQiLCJyZXBsYWNlIiwibWF0Y2giLCJpbnRsQ29kZSIsIm1hcERhdGEiLCJtYXBDb25maWciLCJlbmNvZGVkTWFya2VycyIsImNlbnRlciIsIm1hcENlbnRlciIsIm1tIiwid2lkdGgiLCJoZWlnaHQiLCJ6b29tIiwiYXJncyIsImFyZ3VtZW50cyIsInJvb3QiLCJ2IiwiUmVuZGVyZXJzIiwiU09ZIiwiSGFuZGxlYmFycyIsIlN0YXRlIiwiX3N0YXRlIiwib3B0X3ZhbCIsIl9zZXQiLCJvcHRfcHJvcCIsIkNvbXBvbmVudCIsIl9vcHRzIiwiX3R5cGUiLCJjb25zdHJ1Y3RvciIsIl9wYXJlbnQiLCJfY2hpbGRyZW4iLCJzdGF0ZSIsImNvbnRhaW5lciIsIl9jb250YWluZXIiLCJjbGFzcyIsInN1YnN0cmluZyIsIl9jbGFzc05hbWUiLCJfcmVuZGVyIiwicmVuZGVyIiwiX3RlbXBsYXRlIiwiX3RlbXBsYXRlTmFtZSIsIl9pc01vdW50ZWQiLCJ0cmFuc2Zvcm1EYXRhIiwib25DcmVhdGUiLCJvbk1vdW50Iiwib25VcGRhdGUiLCJtb3VudCIsImhhcyIsImNoaWxkQ29tcG9uZW50IiwiY3JlYXRlIiwiX3BhcmVudE9wdHMiLCJlbXB0eSIsInVuTW91bnQiLCJiZWZvcmVNb3VudCIsImFzSlNPTiIsImJlZm9yZVJlbmRlciIsImFmdGVyUmVuZGVyIiwiZG9tQ29tcG9uZW50IiwiZGF0YXNldCIsImNoaWxkRGF0YSIsImNoaWxkSFRNTCIsImFkZENoaWxkIiwiTmF2aWdhdGlvbkNvbXBvbmVudCIsIl90YWJPcmRlciIsIl90YWJzIiwidGFicyIsInRhYiIsImNvbmZpZ0lkIiwiaXNGaXJzdCIsInVuc2hpZnQiLCJpc0FjdGl2ZSIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsImdldFVybFBhcmFtcyIsImdlbmVyYXRlVGFiVXJsIiwiU2VhcmNoQ29tcG9uZW50IiwiX2JhcktleSIsIl92ZXJ0aWNhbEtleSIsIl9mb3JtRWwiLCJmb3JtU2VsZWN0b3IiLCJfaW5wdXRFbCIsImlucHV0RWwiLCJ0aXRsZSIsInNlYXJjaFRleHQiLCJwcm9tcHRIZWFkZXIiLCJhdXRvRm9jdXMiLCJyZWRpcmVjdFVybCIsImJpbmRCcm93c2VySGlzdG9yeSIsImluaXRTZWFyY2giLCJpbml0QXV0b0NvbXBsZXRlIiwiZm9jdXMiLCJmb3JtIiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImlucHV0U2VsZWN0b3IiLCJhdXRvQ29tcGxldGUiLCJfZXhwZXJpZW5jZUtleSIsIm9yaWdpbmFsUXVlcnkiLCJvblN1Ym1pdCIsInRyaWdnZXIiLCJ2ZXJ0aWNhbFNlYXJjaCIsImdldEFjdGl2ZUNvbXBvbmVudCIsImdldFN0YXRlIiwiS2V5cyIsIkJBQ0tTUEFDRSIsIlRBQiIsIkVOVEVSIiwiU0hJRlQiLCJDVFJMIiwiQUxUIiwiRVNDQVBFIiwiTEVGVCIsIlJJR0hUIiwiVVAiLCJET1dOIiwiTEVGVF9PU19LRVkiLCJSSUdIVF9PU19LRVkiLCJTRUxFQ1RfS0VZIiwiQXV0b0NvbXBsZXRlQ29tcG9uZW50IiwiX29yaWdpbmFsUXVlcnkiLCJfc2VjdGlvbkluZGV4IiwiX3Jlc3VsdEluZGV4IiwiX29uU3VibWl0Iiwic2VjdGlvbkluZGV4IiwicmVzdWx0SW5kZXgiLCJxdWVyeUlucHV0IiwiY2xvc2UiLCJyZXNldCIsImhhbmRsZU5hdmlnYXRlUmVzdWx0cyIsImtleUNvZGUiLCJkZWxlZ2F0ZSIsImZpbHRlciIsInVwZGF0ZVF1ZXJ5IiwiaGFuZGxlVHlwaW5nIiwiX3NlbGVjdGVkSW5kZXgiLCJ1cGRhdGVTdGF0ZSIsIm9wdF92YWx1ZSIsInF1ZXJ5RWwiLCJpZ25vcmVkS2V5cyIsIkRpcmVjdEFuc3dlckNvbXBvbmVudCIsImhhc1N0YXRlIiwiUmVzdWx0c0l0ZW1Db21wb25lbnQiLCJMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IiwiRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCIsIlBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IiwiUmVzdWx0VHlwZSIsIkVWRU5UIiwiTE9DQVRJT04iLCJQRU9QTEUiLCJSZXN1bHRzQ29tcG9uZW50IiwibGltaXQiLCJfaXRlbUNvbmZpZyIsImdsb2JhbCIsInJlbmRlckl0ZW0iLCJpdGVtVGVtcGxhdGUiLCJjb25maWd1cmVJdGVtIiwiaW5jbHVkZU1hcCIsInNldEl0ZW1SZW5kZXIiLCJzZXRJdGVtVGVtcGxhdGUiLCJjbGF6eiIsImdldEl0ZW1Db21wb25lbnQiLCJjb21wIiwiZ2xvYmFsQ29uZmlnIiwiaXRlbUNvbmZpZyIsImhhc0dsb2JhbFJlbmRlciIsImhhc0dsb2JhbFRlbXBsYXRlIiwic2V0UmVuZGVyIiwic2V0VGVtcGxhdGUiLCJVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50IiwiX2xpbWl0IiwiZ2V0Q2hpbGRDb25maWciLCJNYXBDb21wb25lbnQiLCJfbWFwUHJvdmlkZXIiLCJtYXBQcm92aWRlciIsIl9tYXBBcGlLZXkiLCJtYXBBcGlLZXkiLCJfd2lkdGgiLCJfaGVpZ2h0IiwiX3pvb20iLCJfbWFwIiwiaW5pdE1hcCIsInNldFRpbWVvdXQiLCJjc3MiLCJnb29nbGUiLCJtYXBzIiwiTWFwIiwiYm91bmRzIiwiTGF0TG5nQm91bmRzIiwibWFya2VycyIsIm1hcmtlciIsIk1hcmtlciIsInBvc2l0aW9uIiwibGF0IiwibG5nIiwiZXh0ZW5kIiwiZml0Qm91bmRzIiwiUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50IiwiX2VtYWlsTGFiZWwiLCJlbWFpbExhYmVsIiwiX25hbWVMYWJlbCIsIm5hbWVMYWJlbCIsIl9xdWVzdGlvbkxhYmVsIiwicXVlc3Rpb25MYWJlbCIsIl9wcml2YWN5UG9saWN5TGFiZWwiLCJwcml2YWN5UG9saWN5TGFiZWwiLCJfYnV0dG9uTGFiZWwiLCJidXR0b25MYWJlbCIsImluaXRTdWJtaXQiLCJoYXNRdWVyaWVkIiwicXVlc3Rpb24iLCJDT01QT05FTlRfTUFOQUdFUiIsInJlZ2lzdGVyIiwiQW5zd2VycyIsImNvbXBvbmVudHMiLCJfb25SZWFkeSIsInNldENvcmUiLCJzZXRSZW5kZXJlciIsIm9uUmVhZHkiLCJ1c2VUZW1wbGF0ZXMiLCJ0ZW1wbGF0ZUJ1bmRsZSIsImNhbGwiLCJvbkxvYWRlZCIsIkFOU1dFUlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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