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
              center = mapData.mapCenter,
              width = mapConfig.width || 600,
              height = mapConfig.height || 200,
              zoom = mapConfig.zoom || 9;

          for (var i = 0; i < mapMarkers.length; i++) {
            var mm = mapMarkers[i];

            if (i > 0) {
              encodedMarkers += ',';
            }

            encodedMarkers += "pin-s-".concat(mm.label, "(").concat(mm.longitude, ",").concat(mm.latitude, ")");
          }

          return "<img src=\"https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/".concat(encodedMarkers, "/").concat(center.longitude, ",").concat(center.latitude, ",").concat(zoom, "/auto/").concat(width, "x").concat(height, "?access_token=").concat(mapConfig.apiKey, "\">");
        });
        this.registerHelper('googleMap', function (mapData, mapConfig, options) {
          var encodedMarkers = '',
              mapMarkers = mapData.mapMarkers,
              width = mapConfig.width || 600,
              height = mapConfig.height || 200,
              zoom = mapConfig.zoom || 13;

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
      this._apiKey = opts.mapApiKey;
      /**
       * The height of the map to append to the DOM, defaults to 100%
       * @type {number}
       */

      this._height = opts.height || '100%';
      /**
       * The width of the map to append to the DOM, defaults to 100%
       * @type {number}
       */

      this._width = opts.width || '100%';
      /**
       * The zoom level of the map, defaults to 20
       * @type {number}
       */

      this._zoom = opts.zoom || 20;
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
    }

    _createClass(MapProvider, [{
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
      key: "init",
      value: function init(mapData) {
        // TODO(billy) This should be based off a promise that gets created from loadJS
        throw new Error('Unimplemented Method: init');
      }
    }]);

    return MapProvider;
  }();

  var GoogleMapProvider =
  /*#__PURE__*/
  function (_MapProvider) {
    _inherits(GoogleMapProvider, _MapProvider);

    function GoogleMapProvider(opts) {
      _classCallCheck(this, GoogleMapProvider);

      return _possibleConstructorReturn(this, _getPrototypeOf(GoogleMapProvider).call(this, opts));
    }

    _createClass(GoogleMapProvider, [{
      key: "loadJS",
      value: function loadJS(onLoad) {
        var _this = this;

        var script = DOM.createEl('script', {
          id: 'yext-map-js',
          onload: function onload() {
            _this._isLoaded = true;
            onLoad();
          },
          async: true,
          src: 'https://maps.googleapis.com/maps/api/js?key=' + this._apiKey
        });
        DOM.append('body', script);
      }
    }, {
      key: "init",
      value: function init(el, mapData) {
        var _this2 = this;

        if (!mapData || mapData.mapMarkers.length <= 0) {
          this._map = null;
          return this;
        } // NOTE(billy) This timeout is a hack for dealing with async nature.
        // Only here for demo purposes, so we'll fix later.


        setTimeout(function () {
          var container = DOM.query(el);
          DOM.css(container, {
            width: _this2._width,
            height: _this2._height
          });
          _this2.map = new google.maps.Map(container, {
            zoom: _this2._zoom
          });
          var bounds = new google.maps.LatLngBounds();

          if (mapData && mapData.mapMarkers.length > 0) {
            var markers = mapData.mapMarkers;

            for (var i = 0; i < markers.length; i++) {
              var marker = new google.maps.Marker({
                map: _this2.map,
                position: {
                  lat: markers[i].latitude,
                  lng: markers[i].longitude
                }
              });
              bounds.extend(marker.position);
            }
          }

          _this2.map.fitBounds(bounds);
        }, 100);
      }
    }]);

    return GoogleMapProvider;
  }(MapProvider);

  var MapBoxMapProvider =
  /*#__PURE__*/
  function (_MapProvider) {
    _inherits(MapBoxMapProvider, _MapProvider);

    function MapBoxMapProvider(opts) {
      _classCallCheck(this, MapBoxMapProvider);

      return _possibleConstructorReturn(this, _getPrototypeOf(MapBoxMapProvider).call(this, opts));
    }
    /**
     * Load the external JS Library
     * @param {function} onLoad An optional callback to invoke once the JS is loaded.
     */


    _createClass(MapBoxMapProvider, [{
      key: "loadJS",
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
      /**
       * A reference to an instance of the {MapProvider} that's constructed
       * @type {MapProvider}
       */

      _this._map = null;
      return _this;
    }

    _createClass(MapComponent, [{
      key: "onCreate",
      value: function onCreate() {
        var _this2 = this;

        if (this._mapProvider === 'google') {
          this._map = new GoogleMapProvider(this._opts);
        } else {
          this._map = new MapBoxMapProvider(this._opts);
        }

        this._map.loadJS(function () {
          var mapData = _this2.getState('map');

          if (mapData === undefined) {
            return;
          }

          _this2._map.init(_this2._container, mapData);
        });
      }
    }, {
      key: "onMount",
      value: function onMount() {
        // NOTE(billy) This is temporary, we should create a single promise interface
        // for init to deal with the internal javascript loading
        if (this._map.isLoaded()) {
          this._map.init(this._container, this.getState('map'));
        }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5zd2Vycy11bWQuanMiLCJzb3VyY2VzIjpbInNyYy9jb3JlL2h0dHAvaHR0cHJlcXVlc3Rlci5qcyIsInNyYy9jb3JlL2h0dHAvYXBpcmVxdWVzdC5qcyIsInNyYy9jb3JlL3NlYXJjaC9zZWFyY2guanMiLCJzcmMvY29yZS9zZWFyY2gvYXV0b2NvbXBsZXRlZGF0YXRyYW5zZm9ybWVyLmpzIiwic3JjL2NvcmUvc2VhcmNoL2F1dG9jb21wbGV0ZS5qcyIsInNyYy9jb3JlL21vZGVscy9yZXN1bHQuanMiLCJzcmMvY29yZS9tb2RlbHMvc2VjdGlvbi5qcyIsInNyYy9jb3JlL21vZGVscy91bml2ZXJzYWxyZXN1bHRzLmpzIiwic3JjL2NvcmUvbW9kZWxzL2RpcmVjdGFuc3dlci5qcyIsInNyYy9jb3JlL21vZGVscy9uYXZpZ2F0aW9uLmpzIiwic3JjL2NvcmUvbW9kZWxzL3ZlcnRpY2FscmVzdWx0cy5qcyIsInNyYy9jb3JlL3NlYXJjaC9zZWFyY2hkYXRhdHJhbnNmb3JtZXIuanMiLCJzcmMvY29yZS9ldmVudGVtaXR0ZXIvZXZlbnRlbWl0dGVyLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9tb2R1bGVkYXRhLmpzIiwic3JjL2NvcmUvc3RvcmFnZS9zdG9yYWdlLmpzIiwic3JjL2NvcmUvY29yZS5qcyIsInNyYy91aS9jb21wb25lbnRzL2NvbXBvbmVudG1hbmFnZXIuanMiLCJzcmMvdWkvcmVuZGVyaW5nL3JlbmRlcmVyLmpzIiwic3JjL3VpL2RvbS9kb20uanMiLCJzcmMvdWkvcmVuZGVyaW5nL3RlbXBsYXRlbG9hZGVyLmpzIiwic3JjL3VpL3JlbmRlcmluZy9oYW5kbGViYXJzcmVuZGVyZXIuanMiLCJzcmMvdWkvcmVuZGVyaW5nL2NvbnN0LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc3RhdGUuanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb25jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvc2VhcmNoL2F1dG9jb21wbGV0ZWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvZGlyZWN0YW5zd2VyY29tcG9uZW50LmpzIiwic3JjL3VpL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvbG9jYXRpb25yZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvZXZlbnRyZXN1bHRzaXRlbWNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3Jlc3VsdHMvcGVvcGxlcmVzdWx0c2l0ZW1jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL3VuaXZlcnNhbHJlc3VsdHNjb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL21hcHMvbWFwcHJvdmlkZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL21hcHMvZ29vZ2xlbWFwcHJvdmlkZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL21hcHMvbWFwYm94bWFwcHJvdmlkZXIuanMiLCJzcmMvdWkvY29tcG9uZW50cy9yZXN1bHRzL21hcGNvbXBvbmVudC5qcyIsInNyYy91aS9jb21wb25lbnRzL3F1ZXN0aW9ucy9xdWVzdGlvbnN1Ym1pc3Npb25jb21wb25lbnQuanMiLCJzcmMvdWkvY29tcG9uZW50cy9jb25zdC5qcyIsInNyYy9hbnN3ZXJzLXVtZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFR5cGVzIG9mIEhUVFAgcmVxdWVzdHNcbiAqL1xuY29uc3QgTWV0aG9kcyA9IHtcbiAgR0VUOiAnZ2V0JyxcbiAgUE9TVDogJ3Bvc3QnLFxuICBQVVQ6ICdwdXQnLFxuICBERUxFVEU6ICdkZWxldGUnLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwUmVxdWVzdGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBHRVQgSFRUUCByZXF1ZXN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSB0byBwcm92aWRlIChnZXRzIGVuY29kZWQgaW50byB0aGUgVVJMKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBDb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgKi9cbiAgZ2V0KHVybCwgZGF0YSwgb3B0cykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoTWV0aG9kcy5HRVQsIHRoaXMuZW5jb2RlUGFyYW1zKHVybCwgZGF0YSksIG9wdHMpXG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgUE9TVCBIVFRQIHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIG1ha2UgYSByZXF1ZXN0IHRvXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIHRvIHByb3ZpZGUgKGdldHMgZW5jb2RlZCBpbnRvIHRoZSBVUkwpXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIENvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAqL1xuICBwb3N0KHVybCwgZGF0YSwgb3B0cykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoXG4gICAgICBNZXRob2RzLlBPU1QsXG4gICAgICB1cmwsXG4gICAgICBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgIH0sIG9wdHMpXG4gICAgKTtcbiAgfVxuXG4gIHJlcXVlc3QobWV0aG9kLCB1cmwsIG9wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCBPYmplY3QuYXNzaWduKHtcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgfSwgb3B0cykpO1xuICB9XG5cbiAgZW5jb2RlUGFyYW1zKHVybCwgcGFyYW1zKSB7XG4gICAgbGV0IGhhc1BhcmFtID0gdXJsLmluZGV4T2YoJz8nKSA+IC0xLFxuICAgICAgICBzZWFyY2hRdWVyeSA9ICcnO1xuICAgIGZvciAobGV0IGtleSBpbiBwYXJhbXMpIHtcbiAgICAgIGlmICghaGFzUGFyYW0pIHtcbiAgICAgICAgaGFzUGFyYW0gPSB0cnVlO1xuICAgICAgICBzZWFyY2hRdWVyeSArPSAnPyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWFyY2hRdWVyeSArPSAnJic7XG4gICAgICB9XG5cbiAgICAgIHNlYXJjaFF1ZXJ5ICs9IGtleSArICc9JyArIHBhcmFtc1trZXldO1xuICAgIH1cbiAgICByZXR1cm4gZW5jb2RlVVJJKHVybCArIHNlYXJjaFF1ZXJ5KTtcbiAgfVxufSIsImltcG9ydCBIdHRwUmVxdWVzdGVyIGZyb20gJy4vaHR0cHJlcXVlc3Rlcic7XG5cbi8qKlxuICogQXBpUmVxdWVzdCBpcyB0aGUgYmFzZSBjbGFzcyBmb3IgYWxsIEFQSSByZXF1ZXN0cy5cbiAqIEl0IGRlZmluZXMgYWxsIG9mIHRoZSBjb3JlIHByb3BlcnRpZXMgcmVxdWlyZWQgdG8gbWFrZSBhIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpUmVxdWVzdCB7XG4gIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIHVzZWQgZm9yIG1ha2luZyBuZXR3b3JrIHJlcXVlc3QgYW5kIGhhbmRsaW5nIGVycm9yc1xuICAgICAqIEB0eXBlIHtIdHRwUmVxdWVzdGVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcmVxdWVzdGVyID0gbmV3IEh0dHBSZXF1ZXN0ZXIoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBiYXNlVXJsIHRvIHVzZSBmb3IgbWFraW5nIGEgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9iYXNlVXJsID0gb3B0cy5iYXNlVXJsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZW5kcG9pbnQgdG8gdXNlIGluIHRoZSB1cmwgKGFwcGVuZGVkIHRvIHRoZSB7YmFzZVVybH0pXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2VuZHBvaW50ID0gb3B0cy5lbmRwb2ludCB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnNpb24gb2YgdGhlIEFQSSB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJzaW9uID0gb3B0cy52ZXJzaW9uIHx8IDIwMTkwMTAxO1xuXG4gICAgLyoqXG4gICAgICogQWRkaXRpb25hbCBkYXRhIHBhcmFtcyB0aGF0IGFyZSBzZW50IGFsb25nIHdpdGggdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fcGFyYW1zID0gb3B0cy5wYXJhbXMgfHwge307XG4gIH1cblxuICAvKipcbiAgICogZ2V0IGNyZWF0ZXMgYSBuZXcgYEdFVGAgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSByZXF1ZXN0IGNsYXNzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0ZXIuZ2V0KHRoaXMuX2Jhc2VVcmwgKyB0aGlzLl9lbmRwb2ludCwgdGhpcy5wYXJhbXModGhpcy5fcGFyYW1zKSk7XG4gIH1cblxuICBwYXJhbXMocGFyYW1zKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe1xuICAgICAgJ3YnOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgJ2FwaV9rZXknOiB0aGlzLl9hcGlLZXlcbiAgICB9LCBwYXJhbXMgfHwge30pO1xuICB9XG59IiwiaW1wb3J0IEh0dHBSZXF1ZXN0ZXIgZnJvbSAnLi4vaHR0cC9odHRwcmVxdWVzdGVyJztcbmltcG9ydCBBcGlSZXF1ZXN0IGZyb20gJy4uL2h0dHAvYXBpcmVxdWVzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpKS5zZWFyY2hQYXJhbXM7XG4gICAgbGV0IGlzTG9jYWwgPSBwYXJhbXMuZ2V0KCdsb2NhbCcpO1xuXG4gICAgdGhpcy5fcmVxdWVzdGVyID0gbmV3IEh0dHBSZXF1ZXN0ZXIoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBiYXNlVXJsIHRvIHVzZSBmb3IgbWFraW5nIGEgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9iYXNlVXJsID0gdGhpcy5faXNMb2NhbCA/ICdodHRwOi8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA6ICdodHRwczovL2xpdmVhcGkueWV4dC5jb20nO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIEFQSSBLZXkgdG8gdXNlIGZvciB0aGUgcmVxdWVzdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hcGlLZXkgPSBvcHRzLmFwaUtleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIEFuc3dlcnMgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYW5zd2Vyc0tleSA9IG9wdHMuYW5zd2Vyc0tleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHZlcnNpb24gb2YgdGhlIEFQSSB0byBtYWtlIGEgcmVxdWVzdCB0b1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl92ZXJzaW9uID0gb3B0cy52ZXJzaW9uIHx8IDIwMTkwMTAxIHx8IDIwMTkwMzAxO1xuICB9XG5cbiAgdmVydGljYWxRdWVyeShxdWVyeVN0cmluZywgdmVydGljYWxLZXkpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGJhc2VVcmw6IHRoaXMuX2Jhc2VVcmwsXG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL3ZlcnRpY2FsL3F1ZXJ5JyxcbiAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAnaW5wdXQnOiBxdWVyeVN0cmluZyxcbiAgICAgICAgJ2Fuc3dlcnNLZXknOiB0aGlzLl9hbnN3ZXJzS2V5LFxuICAgICAgICAndmVydGljYWxLZXknOiB2ZXJ0aWNhbEtleVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH1cblxuICBxdWVyeShxdWVyeVN0cmluZykge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IEFwaVJlcXVlc3Qoe1xuICAgICAgYmFzZVVybDogdGhpcy5fYmFzZVVybCxcbiAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2Fuc3dlcnMvcXVlcnknLFxuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICdpbnB1dCc6IHF1ZXJ5U3RyaW5nLFxuICAgICAgICAnYW5zd2Vyc0tleSc6IHRoaXMuX2Fuc3dlcnNLZXksXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiByZXF1ZXN0LmdldCgpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9XG59XG5cblxuXG4iLCIvKipcbiAqIEEgRGF0YSBUcmFuc2Zvcm1lciB0aGF0IHRha2VzIHRoZSByZXNwb25zZSBvYmplY3QgZnJvbSBhIEF1dG9Db21wbGV0ZSByZXF1ZXN0XG4gKiBBbmQgdHJhbnNmb3JtcyBpbiB0byBhIGZyb250LWVuZCBvcmllbnRlZCBkYXRhIHN0cnVjdHVyZSB0aGF0IG91clxuICogY29tcG9uZW50IGxpYnJhcnkgYW5kIGNvcmUgc3RvcmFnZSB1bmRlcnN0YW5kLlxuICpcbiAqIFRPRE8oYmlsbHkpIENyZWF0ZSBvdXIgb3duIGZyb250LWVuZCBkYXRhIG1vZGVsc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIge1xuICBzdGF0aWMgY2xlYW4obW9kdWxlSWQsIGRhdGEpIHtcbiAgICBpZiAoZGF0YS5zZWN0aW9ucyAmJiBkYXRhLnNlY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVsZXRlIGRhdGEuc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuc2VjdGlvbnMgJiYgZGF0YS5zZWN0aW9ucy5sZW5ndGggPT09IDEgJiYgZGF0YS5zZWN0aW9uc1swXS5yZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVsZXRlIGRhdGEuc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICBbbW9kdWxlSWRdOiBkYXRhXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB1bml2ZXJzYWwocmVzcG9uc2UpIHtcbiAgICBsZXQgbW9kdWxlSWQgPSAnYXV0b2NvbXBsZXRlJyxcbiAgICAgICAgcmVzdWx0cyA9IHJlc3BvbnNlLnJlc3VsdHM7XG5cbiAgICBsZXQgZGF0YSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkgKyspIHtcbiAgICAgIGxldCB2YWx1ZSA9IHJlc3VsdHNbaV0udmFsdWUsXG4gICAgICAgICAgc3ViU3RyaW5ncyA9IHJlc3VsdHNbaV0ubWF0Y2hlZFN1YnN0cmluZ3M7XG5cbiAgICAgIGRhdGEucHVzaChBdXRvQ29tcGxldGVEYXRhVHJhbnNmb3JtZXIuaGlnaGxpZ2h0KHZhbHVlLCBzdWJTdHJpbmdzKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lci5jbGVhbignYXV0b2NvbXBsZXRlJywge1xuICAgICAgJ3NlY3Rpb25zJzogW3tcbiAgICAgICAgJ3Jlc3VsdHMnOiBkYXRhXG4gICAgICB9XVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGhpZ2hsaWdodCh2YWx1ZSwgc3ViU3RyaW5ncykge1xuICAgIGlmICghc3ViU3RyaW5ncyB8fCBzdWJTdHJpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2hvcnRWYWx1ZTogdmFsdWUsXG4gICAgICAgIGhpZ2hsaWdodGVkVmFsdWU6IHZhbHVlXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSBvdXIgaGlnaGxpZ2h0ZWQgc3Vic3RyaW5ncyBhcmUgc29ydGVkXG4gICAgc3ViU3RyaW5ncy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAoYS5vZmZzZXQgPCBiLm9mZnNldCkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG5cbiAgICAgIGlmIChhLm9mZnNldCA+IGIub2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIC8vIEJ1aWxkIG91ciBuZXcgdmFsdWUgYmFzZWQgb24gdGhlIGhpZ2hsaWdodHNcbiAgICBsZXQgaGlnaGxpZ2h0ZWRWYWx1ZSA9ICcnLFxuICAgICAgICBuZXh0U3RhcnQgPSAwO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzdWJTdHJpbmdzLmxlbmd0aDsgaiArKykge1xuICAgICAgbGV0IHN0YXJ0ID0gTnVtYmVyKHN1YlN0cmluZ3Nbal0ub2Zmc2V0KSxcbiAgICAgICAgICBlbmQgPSBzdGFydCArIHN1YlN0cmluZ3Nbal0ubGVuZ3RoO1xuXG4gICAgICBoaWdobGlnaHRlZFZhbHVlICs9IFt2YWx1ZS5zbGljZShuZXh0U3RhcnQsIHN0YXJ0KSwgJzxzdHJvbmc+JywgdmFsdWUuc2xpY2Uoc3RhcnQsIGVuZCksICc8L3N0cm9uZz4nXS5qb2luKCcnKTtcblxuICAgICAgaWYgKGogPT09IHN1YlN0cmluZ3MubGVuZ3RoIC0gMSAmJiBlbmQgPCB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRWYWx1ZSArPSB2YWx1ZS5zbGljZShlbmQpO1xuICAgICAgfVxuXG4gICAgICBuZXh0U3RhcnQgPSBlbmQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3J0VmFsdWU6IHZhbHVlLFxuICAgICAgaGlnaGxpZ2h0ZWRWYWx1ZTogaGlnaGxpZ2h0ZWRWYWx1ZSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHZlcnRpY2FsKHJlc3BvbnNlLCBiYXJLZXkpIHtcbiAgICBsZXQgbW9kdWxlSWQgPSAnYXV0b2NvbXBsZXRlLicgKyBiYXJLZXksXG4gICAgICAgIHNlY3Rpb25zID0gcmVzcG9uc2Uuc2VjdGlvbnM7XG5cbiAgICByZXR1cm4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLmNsZWFuKG1vZHVsZUlkLCB7XG4gICAgICAnc2VjdGlvbnMnOiBzZWN0aW9uc1xuICAgIH0pXG4gIH1cbn0iLCJpbXBvcnQgQXBpUmVxdWVzdCBmcm9tICcuLi9odHRwL2FwaXJlcXVlc3QnO1xuaW1wb3J0IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lciBmcm9tICcuL2F1dG9jb21wbGV0ZWRhdGF0cmFuc2Zvcm1lcic7XG5cbi8qKlxuICogQSB3cmFwcGVyIGFyb3VuZCB0aGUgQXV0b0NvbXBsZXRlIHtBcGlSZXF1ZXN0fSBlbmRwb2ludHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlIHtcbiAgY29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG4gICAgbGV0IHBhcmFtcyA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKCkpLnNlYXJjaFBhcmFtcztcbiAgICBsZXQgaXNMb2NhbCA9IHBhcmFtcy5nZXQoJ2xvY2FsJyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYmFzZVVybCB0byB1c2UgZm9yIG1ha2luZyBhIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYmFzZVVybCA9IHRoaXMuX2lzTG9jYWwgPyAnaHR0cDovLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgOiAnaHR0cHM6Ly9saXZlYXBpLnlleHQuY29tJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgS2V5IHRvIHVzZSBmb3IgdGhlIHJlcXVlc3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBpS2V5ID0gb3B0cy5hcGlLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBBbnN3ZXJzIEtleSB0byB1c2UgZm9yIHRoZSByZXF1ZXN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2Fuc3dlcnNLZXkgPSBvcHRzLmFuc3dlcnNLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBBUEkgdG8gbWFrZSBhIHJlcXVlc3QgdG9cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fdmVyc2lvbiA9IG9wdHMudmVyc2lvbiB8fCAyMDE5MDEwMSB8fCAyMDE5MDMwMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBxdWVyeSBzdXBwb3J0cyBib3RoIFVuaXZlcnNhbFNlYXJjaCBhbmQgVmVydGljYWxTZWFyY2ggYXV0byBjb21wbGV0aW5nLlxuICAgKiBQcm92aWRpbmcgYW4gZXhwZXJpZW5jZUtleSBhbmQgYmFyS2V5IHdpbGwgY3JlYXRlIGEgdmVydGljYWwgc2VhcmNoIGF1dG8gY29tcGxldGUgcmVxdWVzdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0IFRoZSBpbnB1dCB0byB1c2UgZm9yIGF1dG8gY29tcGxldGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4cGVyaWVuY2VLZXkgVGhlIGV4cGVyaWVuY2Uga2V5IHRvIHVzZSBmb3IgYSB2ZXJ0aWNhbCBhdXRvIGNvbXBsZXRlIHJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJhcktleSBUaGUgYmFyS2V5IHRvIHVzZSBmb3IgYSB2ZXJ0aWNhbCBzZWFyY2ggYXV0byBjb21wbGV0ZSByZXF1ZXN0XG4gICAqL1xuICBxdWVyeShpbnB1dCwgZXhwZXJpZW5jZUtleSwgYmFyS2V5KSB7XG4gICAgaWYgKGV4cGVyaWVuY2VLZXkgfHwgYmFyS2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5fcXVlcnlWZXJpdGNhbChpbnB1dCwgZXhwZXJpZW5jZUtleSwgYmFyS2V5KVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9xdWVyeVVuaXZlcnNhbChpbnB1dCk7XG4gIH1cblxuICBfcXVlcnlWZXJpdGNhbChpbnB1dCwgZXhwZXJpZW5jZUtleSwgYmFyS2V5KSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgQXBpUmVxdWVzdCh7XG4gICAgICAgIGJhc2VVcmw6IHRoaXMuX2Jhc2VVcmwsXG4gICAgICAgIGVuZHBvaW50OiAnL3YyL2FjY291bnRzL21lL2VudGl0aWVzL2F1dG9jb21wbGV0ZScsXG4gICAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxuICAgICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAnaW5wdXQnOiBpbnB1dCxcbiAgICAgICAgICAnZXhwZXJpZW5jZUtleSc6IGV4cGVyaWVuY2VLZXksXG4gICAgICAgICAgJ2JhcktleSc6IGJhcktleVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IEF1dG9Db21wbGV0ZURhdGFUcmFuc2Zvcm1lci52ZXJ0aWNhbChyZXNwb25zZS5yZXNwb25zZSwgcmVxdWVzdC5fcGFyYW1zLmJhcktleSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpXG4gIH1cblxuICBfcXVlcnlVbml2ZXJzYWwocXVlcnlTdHJpbmcpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBBcGlSZXF1ZXN0KHtcbiAgICAgIGJhc2VVcmw6IHRoaXMuX2Jhc2VVcmwsXG4gICAgICBlbmRwb2ludDogJy92Mi9hY2NvdW50cy9tZS9hbnN3ZXJzL2F1dG9jb21wbGV0ZScsXG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgJ2lucHV0JzogcXVlcnlTdHJpbmcsXG4gICAgICAgICdhbnN3ZXJzS2V5JzogdGhpcy5fYW5zd2Vyc0tleVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcXVlc3QuZ2V0KHF1ZXJ5U3RyaW5nKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyLnVuaXZlcnNhbChyZXNwb25zZS5yZXNwb25zZSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0IHtcbiAgY29uc3RydWN0b3IoZGF0YSA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXN1bHRzRGF0YSBleHBlY3RlZCBmb3JtYXQ6IHsgZGF0YTogeyAuLi4gfSwgaGlnaGxpZ2h0ZWRGaWVsZHM6IHsgLi4uIH19XG4gICAqL1xuICBzdGF0aWMgZnJvbShyZXN1bHRzRGF0YSkge1xuICAgIGxldCByZXN1bHRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gVE9ETyB1c2UgcmVzdWx0RGF0YS5oaWdobGlnaHRlZEZpZWxkcyB0b1xuICAgICAgLy8gdHJhbnNmb3JtIHJlc3VsdERhdGEuZGF0YSBpbnRvIGh0bWwtZnJpZW5kbHkgc3RyaW5ncyB0aGF0IGhpZ2hsaWdodCB2YWx1ZXMuXG5cbiAgICAgIC8vIENoZWNrIGZvciBuZXcgZGF0YSBmb3JtYXQsIG90aGVyd2lzZSBmYWxsYmFjayB0byBsZWdhY3lcbiAgICAgIHJlc3VsdHMucHVzaChuZXcgUmVzdWx0KHJlc3VsdHNEYXRhW2ldLmRhdGEgfHwgcmVzdWx0c0RhdGFbaV0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxufVxuIiwiaW1wb3J0IFJlc3VsdCBmcm9tICcuL3Jlc3VsdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3RvcihkYXRhLCB1cmwpIHtcbiAgICB0aGlzLnZlcnRpY2FsQ29uZmlnSWQgPSBkYXRhLnZlcnRpY2FsQ29uZmlnSWQgfHwgbnVsbDtcblxuICAgIHRoaXMucmVzdWx0c0NvdW50ID0gZGF0YS5yZXN1bHRzQ291bnQgfHwgMDtcblxuICAgIHRoaXMuZW5jb2RlZFN0YXRlID0gZGF0YS5lbmNvZGVkU3RhdGUgfHwgJyc7XG5cbiAgICB0aGlzLmFwcGxpZWRRdWVyeUZpbHRlcnMgPSBkYXRhLmFwcGxpZWRRdWVyeUZpbHRlcnMgfHwgbnVsbDtcblxuICAgIHRoaXMuZmFjZXRzID0gZGF0YS5mYWNldHMgfHwgbnVsbDtcblxuICAgIHRoaXMucmVzdWx0cyA9IFJlc3VsdC5mcm9tKGRhdGEucmVzdWx0cyk7XG5cbiAgICB0aGlzLm1hcCA9IFNlY3Rpb24ucGFyc2VNYXAoZGF0YS5yZXN1bHRzKTtcblxuICAgIHRoaXMudmVydGljYWxVUkwgPSB1cmwgfHwgbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBwYXJzZU1hcChyZXN1bHRzKSB7XG4gICAgbGV0IG1hcE1hcmtlcnMgPSBbXSxcbiAgICAgICAgY2VudGVyQ29vcmRpbmF0ZXMgPSB7fTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmVzdWx0cy5sZW5ndGg7IGogKyspIHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIFJlbW92ZSBsZWdhY3kgZmFsbGJhY2sgZnJvbSBhbGwgZGF0YSBmb3JtYXRcbiAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzW2pdLmRhdGEgfHwgcmVzdWx0c1tqXTtcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZSkge1xuICAgICAgICBpZiAoIWNlbnRlckNvb3JkaW5hdGVzLmxhdGl0dWRlKSB7XG4gICAgICAgICAgY2VudGVyQ29vcmRpbmF0ZXMgPSB7XG4gICAgICAgICAgICBsYXRpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxvbmdpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sb25naXR1ZGVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIG1hcE1hcmtlcnMucHVzaCh7XG4gICAgICAgICAgbGFiZWw6IG1hcE1hcmtlcnMubGVuZ3RoICsgMSxcbiAgICAgICAgICBsYXRpdHVkZTogcmVzdWx0LnlleHREaXNwbGF5Q29vcmRpbmF0ZS5sYXRpdHVkZSxcbiAgICAgICAgICBsb25naXR1ZGU6IHJlc3VsdC55ZXh0RGlzcGxheUNvb3JkaW5hdGUubG9uZ2l0dWRlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICdtYXBDZW50ZXInOiBjZW50ZXJDb29yZGluYXRlcyxcbiAgICAgICdtYXBNYXJrZXJzJzogbWFwTWFya2Vyc1xuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZnJvbShtb2R1bGVzLCB1cmxzKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gW107XG4gICAgaWYgKCFtb2R1bGVzKSB7XG4gICAgICByZXR1cm4gc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1vZHVsZXMpKSB7XG4gICAgICByZXR1cm4gbmV3IFNlY3Rpb24obW9kdWxlcyk7XG4gICAgfVxuXG4gICAgLy8gT3VyIHNlY3Rpb25zIHNob3VsZCBjb250YWluIGEgcHJvcGVydHkgb2YgbWFwTWFya2VyIG9iamVjdHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpICsrKSB7XG4gICAgICBzZWN0aW9ucy5wdXNoKFxuICAgICAgICBuZXcgU2VjdGlvbihcbiAgICAgICAgICBtb2R1bGVzW2ldLFxuICAgICAgICAgIHVybHNbbW9kdWxlc1tpXS52ZXJ0aWNhbENvbmZpZ0lkXVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBzZWN0aW9ucztcbiAgfVxufSIsImltcG9ydCBTZWN0aW9uIGZyb20gJy4vc2VjdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVuaXZlcnNhbFJlc3VsdHMge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5xdWVyeUlkID0gZGF0YS5xdWVyeUlkIHx8IG51bGw7XG5cbiAgICB0aGlzLnNlY3Rpb25zID0gZGF0YS5zZWN0aW9ucyB8fCBbXTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tKHJlc3BvbnNlLCB1cmxzKSB7XG4gICAgcmV0dXJuIG5ldyBVbml2ZXJzYWxSZXN1bHRzKHtcbiAgICAgIHF1ZXJ5SWQ6IHJlc3BvbnNlLnF1ZXJ5SWQsXG4gICAgICBzZWN0aW9uczogU2VjdGlvbi5mcm9tKHJlc3BvbnNlLm1vZHVsZXMsIHVybHMpXG4gICAgfSlcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdEFuc3dlciB7XG4gIGNvbnN0cnVjdG9yKGRpcmVjdEFuc3dlciA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkaXJlY3RBbnN3ZXIpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHRhYk9yZGVyKSB7XG4gICAgdGhpcy50YWJPcmRlciA9IHRhYk9yZGVyIHx8IFtdO1xuICB9XG5cbiAgc3RhdGljIGZyb20obW9kdWxlcykge1xuICAgIGxldCBuYXYgPSBbXTtcbiAgICBpZiAoIW1vZHVsZXMgfHwgIUFycmF5LmlzQXJyYXkobW9kdWxlcykpIHtcbiAgICAgIHJldHVybiBuYXY7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkgKyspIHtcbiAgICAgIG5hdi5wdXNoKG1vZHVsZXNbaV0udmVydGljYWxDb25maWdJZClcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBOYXZpZ2F0aW9uKG5hdik7XG4gIH1cbn0iLCJpbXBvcnQgU2VjdGlvbiBmcm9tICcuL3NlY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0aWNhbFJlc3VsdHMge1xuICBjb25zdHJ1Y3RvcihkYXRhID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb20ocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gbmV3IFZlcnRpY2FsUmVzdWx0cyhTZWN0aW9uLmZyb20ocmVzcG9uc2UpKTtcbiAgfVxufVxuIiwiaW1wb3J0IFVuaXZlcnNhbFJlc3VsdHMgZnJvbSAnLi4vbW9kZWxzL3VuaXZlcnNhbHJlc3VsdHMnO1xuaW1wb3J0IERpcmVjdEFuc3dlciBmcm9tICcuLi9tb2RlbHMvZGlyZWN0YW5zd2VyJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL21vZGVscy9uYXZpZ2F0aW9uJztcbmltcG9ydCBWZXJ0aWNhbFJlc3VsdHMgZnJvbSAnLi4vbW9kZWxzL3ZlcnRpY2FscmVzdWx0cyc7XG5cbi8qKlxuICogQSBEYXRhIFRyYW5zZm9ybWVyIHRoYXQgdGFrZXMgdGhlIHJlc3BvbnNlIG9iamVjdCBmcm9tIGEgU2VhcmNoIHJlcXVlc3RcbiAqIEFuZCB0cmFuc2Zvcm1zIGluIHRvIGEgZnJvbnQtZW5kIG9yaWVudGVkIGRhdGEgc3RydWN0dXJlIHRoYXQgb3VyXG4gKiBjb21wb25lbnQgbGlicmFyeSBhbmQgY29yZSBzdG9yYWdlIHVuZGVyc3RhbmQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaERhdGFUcmFuc2Zvcm1lciB7XG4gIHN0YXRpYyB0cmFuc2Zvcm0oZGF0YSwgdXJscyA9IHt9KSB7XG4gICAgbGV0IHJlc3BvbnNlID0gZGF0YS5yZXNwb25zZTtcbiAgICByZXR1cm4ge1xuICAgICAgbmF2aWdhdGlvbjogTmF2aWdhdGlvbi5mcm9tKHJlc3BvbnNlLm1vZHVsZXMpLFxuICAgICAgZGlyZWN0QW5zd2VyOiBuZXcgRGlyZWN0QW5zd2VyKHJlc3BvbnNlLmRpcmVjdEFuc3dlciksXG4gICAgICB1bml2ZXJzYWxSZXN1bHRzOiBVbml2ZXJzYWxSZXN1bHRzLmZyb20ocmVzcG9uc2UsIHVybHMpXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB0cmFuc2Zvcm1WZXJ0aWNhbChkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZlcnRpY2FsUmVzdWx0czogVmVydGljYWxSZXN1bHRzLmZyb20oZGF0YS5yZXNwb25zZSlcbiAgICB9O1xuICB9XG59IiwiLyoqXG4gKiBFdmVudEVtaXR0ZXIgaXMgYSBiYXNlIGNsYXNzIGZvciBhbnkgb2JqZWN0IHRoYXQgd2FudHMgdG8gZXhwb3NlXG4gKiBhIHB1Yi9zdWIgaW50ZXJmYWNlLCBmb3IgZW1pdHRpbmcgbWVzc2FnZXMgYW5kIHByb3ZpZGluZyBsaXN0ZW5lcnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qKlxuICAgICAqIFRoZSBzdWJzY3JpYmVycyBvZiBtZXNzYWdlc1xuICAgICAqIEB0eXBlIHtBcnJheS48T2JqZWN0Pn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIG9uIGlzIHRoZSBwdWJsaWMgaW50ZXJmYWNlIGZvciBzdWJzY3JpYmluZyBldmVudHMgdGhhdCBhcmUgZW1pdHRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2dCB0aGUgZXZlbnQgbmFtZSB0byBsaXN0ZW4gdG9cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgVGhlIGNhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSB7ZXZ0fSBpcyBlbWl0dGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb25jZSBPcHRpb25hbCB2YWx1ZSB3aGljaCB3aWxsIG9ubHkgaGFuZGxlIHRoZSBtZXNzYWdlIG9uY2VcbiAgICovXG4gIG9uKGV2dCwgY2IsIG9uY2UpIHtcbiAgICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbGxiYWNrIGhhbmRsZXIgc2hvdWxkIGJlIG9mIHR5cGUge2Z1bmN0aW9ufScpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9saXN0ZW5lcnNbZXZ0XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XSA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuX2xpc3RlbmVyc1tldnRdLnB1c2goe1xuICAgICAgZXZlbnQ6IGV2dCxcbiAgICAgIGNiOiBjYixcbiAgICAgIG9uY2U6IG9uY2UgfHwgZmFsc2VcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIG9uY2UgaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIHN1YnNjcmliaW5nIGV2ZW50cyB0aGF0IGFyZSBlbWl0dGVkLlxuICAgKiBUaGUgaGFuZGxlciB3aWxsIG9ubHkgYmUgdHJpZ2dlcmVkIG9uY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldnQgdGhlIGV2ZW50IG5hbWUgdG8gbGlzdGVuIHRvXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNiIFRoZSBjYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUge2V2dH0gaXMgZW1pdHRlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uY2UgT3B0aW9uYWwgdmFsdWUgd2hpY2ggd2lsbCBvbmx5IGhhbmRsZSB0aGUgbWVzc2FnZSBvbmNlXG4gICAqL1xuICBvbmNlKGV2dCwgY2IpIHtcbiAgICByZXR1cm4gdGhpcy5vbihldnQsIGNiLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvZmYgaXMgdGhlIHB1YmxpYyBpbnRlcmZhY2UgZm9yIHVuc3Vic2NyaWJpbmcgZnJvbSBhbiBldmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIHVuc3Vic2NyaWJlIGZyb21cbiAgICovXG4gIG9mZihldnQpIHtcbiAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW2V2dF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogZW1pdCBpcyB0aGUgcHVibGljIGludGVyZmFjZSBmb3IgYnJvYWRjYXN0aW5nIG1lc3NhZ2VzL2V2ZW50c1xuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZ0IHRoZSBldmVudCBuYW1lIHRvIHB1Ymxpc2ggZnJvbVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSB0aGUgZGF0YSB0byBzZW5kIGFsb25nIHRvIHRoZSBzdWJzY3JpYmVyc1xuICAgKi9cbiAgZW1pdChldnQsIGRhdGEpIHtcbiAgICBsZXQgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2dF07XG4gICAgaWYgKGxpc3RlbmVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSW52b2tlIGVhY2ggb2YgYWxsIHRoZSBsaXN0ZW5lciBoYW5kbGVycyBhbmQgcmVtb3ZlIHRoZSBvbmVzIHRoYXQgc2hvdWxkIGZpcmUgb25seSBvbmNlLlxuICAgIGxldCBrZWVwID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpICsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0uY2IoZGF0YSk7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldLm9uY2UgPT09IHRydWUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEluc3RlYWQgb2YgaGF2aW5nIGEgJ2RpcnR5JyBhcnJheSB3aXRoIGRlbGV0ZWQgb3IgJ3VuZGVmaW5lZCcgZW50cmllcyxcbiAgICAgIC8vIHdlIGp1c3QgY3JlYXRlIGEgYnJhbmQgbmV3IGFycmF5IHdpdGhvdXQgdGhlIGxpc3RlbmVycyB0aGF0IHdlcmUgcmVtb3ZlZFxuICAgICAga2VlcC5wdXNoKGxpc3RlbmVyc1tpXSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIG91ciBvbGQgbGlzdCBvZiBsaXN0ZW5lcnMgdG8gdGhlIG5ld2x5IGNyZWF0ZWQgYXJyYXlcbiAgICB0aGlzLl9saXN0ZW5lcnNbZXZ0XSA9IGtlZXA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn0iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2V2ZW50ZW1pdHRlci9ldmVudGVtaXR0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2R1bGVEYXRhIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoaWQsIGRhdGEgPSB7fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLl9pZCA9IGlkO1xuXG4gICAgdGhpcy5faGlzdG9yeSA9IFtdO1xuXG4gICAgdGhpcy5fZGF0YSA9IHt9O1xuXG4gICAgdGhpcy5zZXQoZGF0YSk7XG4gIH1cblxuICBzZXQoZGF0YSkge1xuICAgIGRhdGEgPSBkYXRhIHx8IHt9O1xuXG4gICAgaWYgKHRoaXMuX2RhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fZGF0YSA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMuY2FwdHVyZVByZXZpb3VzKCk7XG5cbiAgICAvLyBUT0RPKGJpbGx5KSBUaGlzIGFzc3VtZXMgdGhlIHRvcCBsZXZlbCBwcm9wZXJ0aWVzIGFyZSBhbGwgY29udGFpbmVkIHdpdGhpblxuICAgIC8vIGFuIG9iamVjdC4gUHJvYmFibHkgbm90IGEgZ29vZCBhc3N1bXB0aW9uIHRvIG1ha2UuXG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKSxcbiAgICAgICAgbGVuID0ga2V5cy5sZW5ndGgsXG4gICAgICAgIGlzRGlydHkgPSBmYWxzZTtcblxuICAgIC8vIFJlc2V0IHRoZSBvYmplY3QgaWYgaXRzIGJlaW5nIGFwcGxpZWQgYXMgZW1wdHlcbiAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgaXNEaXJ0eSA9IHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKyspIHtcbiAgICAgIGxldCBwcm9wID0ga2V5c1tpXSxcbiAgICAgICAgICB2YWwgPSBkYXRhW2tleXNbaV1dO1xuXG4gICAgICAvLyBUT0RPKGJpbGx5KSBGb3Igbm93LCBvbmUgbGV2ZWwgb2YgY29tcGFyaXNvbiBpcyBwcm9iYWJseSBmaW5lLFxuICAgICAgLy8gaW4gdGhlIGZ1dHVyZSB3ZSdsbCBwcm9iYWJseSBuZWVkIHRvIGRvIHNvbWUgZGVlcGVyIG9iamVjdCBjb21wYXJpc29uc1xuICAgICAgLy8gSWYgdGhlIHZhbHVlIGlzIGFscmVhZHkgY29ycmVjdCwgbm8gdXBkYXRlcyFcbiAgICAgIGlmICh0aGlzLl9kYXRhW3Byb3BdID09PSB2YWwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2RhdGFbcHJvcF0gPSB2YWw7XG4gICAgICBpc0RpcnR5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBPbmx5IGVtaXQgdXBkYXRlcyBpZiB0aGUgbW9kZWwgd2FzIGRpcnR5XG4gICAgaWYgKGlzRGlydHkpIHtcbiAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywgdGhpcy5fZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjYXB0dXJlUHJldmlvdXMoKSB7XG4gICAgaWYgKHRoaXMuX2hpc3RvcnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5faGlzdG9yeSA9IFtdO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9oaXN0b3J5Lmxlbmd0aCArIDEgPiA1KSB7XG4gICAgICB0aGlzLl9oaXN0b3J5LnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgLy8gSWYgZGF0YSBpcyBldmVyIHVuZGVmaW5lZCwgd2UgZGVmYXVsdCB0byBlbXB0eSBvYmplY3RcbiAgICB0aGlzLl9oaXN0b3J5LnB1c2goSlNPTi5zdHJpbmdpZnkodGhpcy5fZGF0YSB8fCB7fSkpO1xuICB9XG5cbiAgdW5kbygpIHtcbiAgICBsZXQgcHJldmlvdXMgPSB7fTtcbiAgICBpZiAodGhpcy5fcHJldmlvdXMubGVuZ3RoID4gMCkge1xuICAgICAgcHJldmlvdXMgPSBKU09OLnBhcnNlKHRoaXMuX3ByZXZpb3VzLnBvcCgpKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kYXRhLnNldChwcmV2aW91cyk7XG4gIH1cblxuICByYXcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cbn1cbiIsImltcG9ydCBNb2R1bGVEYXRhIGZyb20gJy4vbW9kdWxlZGF0YSc7XG5pbXBvcnQgU2VhcmNoRGF0YVRyYW5zZm9ybWVyIGZyb20gJy4uL3NlYXJjaC9zZWFyY2hkYXRhdHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lciA9IHt9XG5cbiAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnMgPSB7fTtcbiAgfTtcblxuICBpbml0KCkge1xuXG4gIH1cblxuICBpbnNlcnQoZGF0YSkge1xuICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbW9kdWxlSWRzID0gT2JqZWN0LmtleXMoZGF0YSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2R1bGVJZHMubGVuZ3RoOyBpICsrKSB7XG4gICAgICBsZXQgbW9kdWxlSWQgPSBtb2R1bGVJZHNbaV07XG4gICAgICBpZiAodGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXSA9IG5ldyBNb2R1bGVEYXRhKG1vZHVsZUlkKTtcbiAgICAgICAgdGhpcy5fYXBwbHlGdXR1cmVMaXN0ZW5lcnMobW9kdWxlSWQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5zZXQoZGF0YVttb2R1bGVJZF0pO1xuICAgIH1cbiAgfVxuXG4gIGluc2VydFVuaXZlcnNhbFJlc3VsdHMoZGF0YSkge1xuICAgIHRoaXMuaW5zZXJ0KFNlYXJjaERhdGFUcmFuc2Zvcm1lci50cmFuc2Zvcm0oZGF0YSkpO1xuICB9XG5cbiAgZ2V0U3RhdGUobW9kdWxlSWQpIHtcbiAgICBpZiAodGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5yYXcoKTtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgb24oZXZ0LCBtb2R1bGVJZCwgY2IpIHtcbiAgICBsZXQgbW9kdWxlRGF0YSA9IHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdO1xuICAgIGlmIChtb2R1bGVEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXSA9IFtdO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9mdXR1cmVMaXN0ZW5lcnNbbW9kdWxlSWRdLnB1c2goe1xuICAgICAgICBldmVudDogZXZ0LFxuICAgICAgICBjYjogY2JcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9tb2R1bGVEYXRhQ29udGFpbmVyW21vZHVsZUlkXS5vbihldnQsIGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9mZihldnQsIG1vZHVsZUlkLCBjYikge1xuICAgIGxldCBtb2R1bGVEYXRhID0gdGhpcy5fbW9kdWxlRGF0YUNvbnRhaW5lclttb2R1bGVJZF07XG4gICAgaWYgKG1vZHVsZURhdGEgPT09IHVuZGVmaW5lZCkge1xuXG4gICAgICBpZiAodGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF0ucG9wKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMuX21vZHVsZURhdGFDb250YWluZXJbbW9kdWxlSWRdLm9mZihldnQsIGNiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9hcHBseUZ1dHVyZUxpc3RlbmVycyhtb2R1bGVJZCkge1xuICAgIGxldCBmdXR1cmVzID0gdGhpcy5fZnV0dXJlTGlzdGVuZXJzW21vZHVsZUlkXTtcbiAgICBpZiAoIWZ1dHVyZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZ1dHVyZXMubGVuZ3RoOyBpICsrKSB7XG4gICAgICBsZXQgZnV0dXJlID0gZnV0dXJlc1tpXTtcbiAgICAgIHRoaXMub24oZnV0dXJlLmV2ZW50LCBtb2R1bGVJZCwgZnV0dXJlLmNiKTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuX2Z1dHVyZUxpc3RlbmVyc1ttb2R1bGVJZF07XG4gIH1cbn0iLCJpbXBvcnQgU2VhcmNoIGZyb20gJy4vc2VhcmNoL3NlYXJjaCc7XG5pbXBvcnQgQXV0b0NvbXBsZXRlIGZyb20gJy4vc2VhcmNoL2F1dG9jb21wbGV0ZSc7XG5cbmltcG9ydCBTZWFyY2hEYXRhVHJhbnNmb3JtZXIgZnJvbSAnLi9zZWFyY2gvc2VhcmNoZGF0YXRyYW5zZm9ybWVyJztcblxuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlL3N0b3JhZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmUge1xuICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcbiAgICBpZiAodHlwZW9mIG9wdHMuYXBpS2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGBhcGlLZXlgLiBUeXBlIG11c3QgYmUge3N0cmluZ30nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdHMuYW5zd2Vyc0tleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBgYW5zd2Vyc0tleWAuIFR5cGUgbXVzdCBiZSB7c3RyaW5nfScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBjbGllbnQgQVBJIEtleSB1c2VkIGZvciBhbGwgcmVxdWVzdHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fYXBpS2V5ID0gb3B0cy5hcGlLZXk7XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgY2xpZW50IEFuc3dlcnMgS2V5IHVzZWQgZm9yIGFsbCByZXF1ZXN0c1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9hbnN3ZXJzS2V5ID0gb3B0cy5hbnN3ZXJzS2V5O1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGNvcmUgZGF0YSBzdG9yYWdlIHRoYXQgcG93ZXJzIHRoZSBVSVxuICAgICAqIEB0eXBlIHtTdG9yYWdlfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5zdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIGNvbnRhaW5pbmcgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIFJFU1RmdWwgc2VhcmNoIEFQSVxuICAgICAqIEZvciBib3RoIHZlcnRpY2FsIGFuZCB1bml2ZXJzYWwgc2VhcmNoXG4gICAgICogQHR5cGUge1NlYXJjaH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3NlYXJjaGVyID0gbmV3IFNlYXJjaCh7XG4gICAgICBhcGlLZXk6IHRoaXMuX2FwaUtleSxcbiAgICAgIGFuc3dlcnNLZXk6IHRoaXMuX2Fuc3dlcnNLZXlcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEFuIGFic3RyYWN0aW9uIGNvbnRhaW5pbmcgdGhlIGludGVncmF0aW9uIHdpdGggdGhlIFJFU1RmdWwgYXV0b2NvbXBsZXRlIEFQSVxuICAgICAqIEZvciBib3RoIHZlcnRpY2FsIGFuZCB1bml2ZXJzYWwgc2VhcmNoXG4gICAgICogQHR5cGUge1NlYXJjaH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2F1dG9Db21wbGV0ZSA9IG5ldyBBdXRvQ29tcGxldGUoe1xuICAgICAgYXBpS2V5OiB0aGlzLl9hcGlLZXksXG4gICAgICBhbnN3ZXJzS2V5OiB0aGlzLl9hbnN3ZXJzS2V5XG4gICAgfSk7XG4gIH1cblxuICB2ZXJ0aWNhbFNlYXJjaChxdWVyeVN0cmluZywgdmVydGljYWxLZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoZXJcbiAgICAgIC52ZXJ0aWNhbFF1ZXJ5KHF1ZXJ5U3RyaW5nLCB2ZXJ0aWNhbEtleSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IFNlYXJjaERhdGFUcmFuc2Zvcm1lci50cmFuc2Zvcm1WZXJ0aWNhbChyZXNwb25zZSkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLmluc2VydChkYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5U3RyaW5nLCB1cmxzKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaGVyXG4gICAgICAucXVlcnkocXVlcnlTdHJpbmcpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiBTZWFyY2hEYXRhVHJhbnNmb3JtZXIudHJhbnNmb3JtKHJlc3BvbnNlLCB1cmxzKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICB0aGlzLnN0b3JhZ2UuaW5zZXJ0KGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSlcbiAgfVxuXG4gIGF1dG9Db21wbGV0ZShxdWVyeVN0cmluZywgZXhwZXJpZW5jZUtleSwgYmFyS2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Db21wbGV0ZVxuICAgICAgLnF1ZXJ5KHF1ZXJ5U3RyaW5nLCBleHBlcmllbmNlS2V5LCBiYXJLZXkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLmluc2VydChkYXRhKTtcbiAgICAgIH0pXG4gIH1cblxuICBvbihldnQsIG1vZHVsZUlkLCBjYikge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2Uub24oZXZ0LCBtb2R1bGVJZCwgY2IpO1xuICB9XG59XG5cbiIsIi8qKlxuICogQ29tcG9uZW50TWFuYWdlciBpcyBhIFNpbmdsZXRvbmUgdGhhdCBjb250YWlucyBib3RoIGFuIGludGVybmFsIHJlZ2lzdHJ5IG9mXG4gKiBlbGlnaWJsZSBjb21wb25lbnRzIHRvIGJlIGNyZWF0ZWQsIGFzIHdlbGwgYXMga2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnRcbiAqIGluc3RhbnRpYXRlZCBhbmQgYWN0aXZlIGNvbXBvbmVudHMuXG4gKlxuICogQUxMIGNvbXBvbmVudHMgc2hvdWxkIGJlIGNvbnN0cnVjdGVkIHVzaW5nIHRoZSB7Q29tcG9uZW50TWFuYWdlcn0gdmlhIGl0cyBgY3JlYXRlYCBtZXRob2QuXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKCFDb21wb25lbnRNYW5hZ2VyLnNldEluc3RhbmNlKHRoaXMpKSB7XG4gICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBjb21wb25lbnQgcmVnaXN0cnkgaXMgYW4gaW50ZXJuYWwgbWFwLCB0aGF0IGNvbnRhaW5zXG4gICAgICogYWxsIGF2YWlsYWJsZSBjb21wb25lbnQgQ0xBU1NFUyB1c2VkIGZvciBjcmVhdGlvbiBvciBvdmVycmlkZS5cbiAgICAgKiBFYWNoIGNvbXBvbmVudCBjbGFzcyBoYXMgYSB1bmlxdWUgVFlQRSwgd2hpY2ggaXMgdXNlZCBhcyB0aGUga2V5IGZvciB0aGUgcmVnaXN0cnlcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5ID0ge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYWN0aXZlIGNvbXBvbmVudHMgaXMgYW4gaW50ZXJuYWwgY29udGFpbmVyIHRvIGtlZXAgdHJhY2tcbiAgICAgKiBvZiBhbGwgb2YgdGhlIGNvbXBvbmVudHMgdGhhdCBoYXZlIGJlZW4gY29uc3RydWN0ZWRcbiAgICAgKi9cbiAgICB0aGlzLl9hY3RpdmVDb21wb25lbnRzID0ge307XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY29yZSBsaWJyYXJ5IGRlcGVuZGVuY3lcbiAgICAgKlxuICAgICAqIFRoZSBDb3JlIGNvbnRhaW5zIGJvdGggdGhlIHN0b3JhZ2UgQU5EIHNlcnZpY2VzIHRoYXQgYXJlIG5lZWRlZCBmb3IgcGVyZm9ybWluZyBvcGVyYXRpb25zXG4gICAgICogbGlrZSBzZWFyY2ggYW5kIGF1dG8gY29tcGxldGUuXG4gICAgICpcbiAgICAgKiBUaGUgc3RvcmFnZSBpcyB0aGUgc291cmNlIG9mIHRydXRoIGZvciB0aGUgc3RhdGUgb2YgQUxMIGNvbXBvbmVudHMuXG4gICAgICogV2hlbmV2ZXIgdGhlIHN0b3JhZ2UgaXMgdXBkYXRlZCwgdGhlIHN0YXRlIGdldHMgcHVzaGVkIGRvd24gdG8gdGhlIG5lY2Vzc2FyeSBjb21wb25lbnRzLlxuICAgICAqIEB0eXBlIHtDb3JlfVxuICAgICAqL1xuICAgIHRoaXMuX2NvcmUgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHByaW1hcnkgcmVuZGVyZXIgdG8gdXNlIGZvciBhbGwgY29tcG9uZW50c1xuICAgICAqIEB0eXBlIHtIYW5kbGViYXJzUmVuZGVyZXJ9XG4gICAgICovXG4gICAgdGhpcy5fcmVuZGVyZXIgPSBudWxsO1xuICB9XG5cbiAgc3RhdGljIHNldEluc3RhbmNlKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICB9XG5cbiAgc2V0UmVuZGVyZXIocmVuZGVyZXIpIHtcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0Q29yZShjb3JlKSB7XG4gICAgdGhpcy5fY29yZSA9IGNvcmU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmVnaXN0ZXJzIGEgY29tcG9uZW50IHRvIGJlIGVsaWdpYmxlIGZvciBjcmVhdGlvbiBhbmQgb3ZlcnJpZGUuXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBUaGUgQ29tcG9uZW50IENsYXNzIHRvIHJlZ2lzdGVyXG4gICAqL1xuICByZWdpc3Rlcihjb21wb25lbnRDbGF6eikge1xuICAgIHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5W2NvbXBvbmVudENsYXp6LnR5cGVdID0gY29tcG9uZW50Q2xheno7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIGlzIHRoZSBlbnRyeSBwb2ludCBmb3IgY29uc3RydWN0aW5nIGFueSBhbmQgYWxsIGNvbXBvbmVudHMuXG4gICAqIEl0IHdpbGwgaW5zdGFudGlhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudCwgYW5kIGJvdGggYXBwbHlcbiAgICogaW5pdGlhbCBzdGF0ZSBmcm9tIHRoZSBzdG9yYWdlIGFuZCBiaW5kIGl0IHRvIHRoZSBzdG9yYWdlIGZvciB1cGRhdGVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50VHlwZSBUaGUgY29tcG9uZW50IHR5cGUgdG8gY3JlYXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIFRoZSBvcHRpb25zIHRvIHBpcGUgdG8gdGhlIGNvbnN0cnVjdGlvbiBvZiB0aGUgY29tcG9uZW50XG4gICAqL1xuICBjcmVhdGUoY29tcG9uZW50VHlwZSwgb3B0cykge1xuICAgIC8vIEV2ZXJ5IGNvbXBvbmVudCBuZWVkcyBsb2NhbCBhY2Nlc3MgdG8gdGhlIGNvbXBvbmVudCBtYW5hZ2VyXG4gICAgLy8gYmVjYXVzZSBzb21ldGltZXMgY29tcG9uZW50cyBoYXZlIHN1YmNvbXBvbmVudHMgdGhhdCBuZWVkIHRvIGJlXG4gICAgLy8gY29uc3RydWN0ZWQgZHVyaW5nIGNyZWF0aW9uXG4gICAgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29yZTogdGhpcy5fY29yZSxcbiAgICAgIHJlbmRlcmVyOiB0aGlzLl9yZW5kZXJlcixcbiAgICAgIGNvbXBvbmVudE1hbmFnZXI6IHRoaXMsXG4gICAgfSwgb3B0cyk7XG5cbiAgICAvLyBJbnN0YW50aWF0ZSBvdXIgbmV3IGNvbXBvbmVudCBhbmQga2VlcCB0cmFjayBvZiBpdFxuICAgIGxldCBjb21wb25lbnQgPVxuICAgICAgbmV3IHRoaXMuX2NvbXBvbmVudFJlZ2lzdHJ5W2NvbXBvbmVudFR5cGVdKG9wdHMpXG4gICAgICAgIC5pbml0KG9wdHMpO1xuXG4gICAgdGhpcy5fYWN0aXZlQ29tcG9uZW50c1tjb21wb25lbnRUeXBlXSA9IGNvbXBvbmVudDtcblxuICAgIC8vIElmIHRoZXJlIGlzIGEgbG9jYWwgc3RvcmFnZSB0byBwb3dlciBzdGF0ZSwgYXBwbHkgdGhlIHN0YXRlXG4gICAgLy8gZnJvbSB0aGUgc3RvcmFnZSB0byB0aGUgY29tcG9uZW50LCBhbmQgdGhlbiBiaW5kIHRoZSBjb21wb25lbnRcbiAgICAvLyBzdGF0ZSB0byB0aGUgc3RvcmFnZSB2aWEgaXRzIHVwZGF0ZXNcbiAgICBpZiAodGhpcy5fY29yZS5zdG9yYWdlICE9PSBudWxsKSB7XG4gICAgICBpZiAoY29tcG9uZW50Lm1vZHVsZUlkID09PSB1bmRlZmluZWQgfHwgY29tcG9uZW50Lm1vZHVsZUlkID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NvcmUuc3RvcmFnZVxuICAgICAgICAub24oJ3VwZGF0ZScsIGNvbXBvbmVudC5tb2R1bGVJZCwgKGRhdGEpID0+IHtcbiAgICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgfVxuXG4gIGdldEFjdGl2ZUNvbXBvbmVudCh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUNvbXBvbmVudHNbdHlwZV07XG4gIH1cbn1cbiIsIi8qKlxuICogUmVuZGVyZXIgaXMgYW4gYWJzdHJhY3QgY2xhc3MgdGhhdCBhbGwgUmVuZGVyZXJzIHNob3VsZCBleHRlbmQgYW5kIGltcGxlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciB7XG4gIC8qKlxuICAgKiByZW5kZXIgaXMgYSBjb3JlIG1ldGhvZCBmb3IgYWxsIHJlbmRlcmVycy5cbiAgICogQWxsIGltcGxlbWVudGF0aW9ucyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBjbGFzc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICovXG4gIHJlbmRlcih0ZW1wbGF0ZSwgZGF0YSkge1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHJlZ2lzdGVySGVscGVyKG5hbWUsIGNiKSB7XG5cbiAgfVxuXG4gIGNvbXBpbGUodGVtcGxhdGUpIHtcblxuICB9XG59XG4iLCJjb25zdCBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcbmNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9NIHtcbiAgLyoqXG4gICAqIGNyZWF0ZSBhIEhUTUxFbGVtZW50IGZyb20gYW5kIEhUTUwgc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBodG1sIFRoZSBIVE1MIHRvIHBhcnNlIHRvIGEgRE9NIG5vZGUuXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZShodG1sKSB7XG4gICAgcmV0dXJuIHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgJ3RleHQvaHRtbCcpLmJvZHk7XG4gIH1cblxuICAvKipcbiAgICogcXVlcnkgdGhlIERPTSBmb3IgYSBnaXZlbiBjc3Mgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50IE9wdGlvbmFsIGNvbnRleHQgdG8gdXNlIGZvciBhIHNlYXJjaC4gRGVmYXVsdHMgdG8gZG9jdW1lbnQgaWYgbm90IHByb3ZpZGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgdGhlIENTUyBzZWxlY3RvciB0byBxdWVyeSBmb3JcbiAgICpcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSB0aGUgRklSU1Qgbm9kZSBpdCBmaW5kcywgaWYgYW55XG4gICAqL1xuICBzdGF0aWMgcXVlcnkocGFyZW50LCBzZWxlY3Rvcikge1xuICAgIC8vIEZhY2FkZSwgc2hpZnRpbmcgdGhlIHNlbGVjdG9yIHRvIHRoZSBwYXJlbnQgYXJndW1lbnQgaWYgb25seSBvbmVcbiAgICAvLyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZWxlY3RvciA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgV2luZG93IHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTERvY3VtZW50KSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBxdWVyeSB0aGUgRE9NIGZvciBhIGdpdmVuIGNzcyBzZWxlY3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnQgT3B0aW9uYWwgY29udGV4dCB0byB1c2UgZm9yIGEgc2VhcmNoLiBEZWZhdWx0cyB0byBkb2N1bWVudCBpZiBub3QgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciB0aGUgQ1NTIHNlbGVjdG9yIHRvIHF1ZXJ5IGZvclxuICAgKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IHRoZSBGSVJTVCBub2RlIGl0IGZpbmRzLCBpZiBhbnlcbiAgICovXG4gIHN0YXRpYyBxdWVyeUFsbChwYXJlbnQsIHNlbGVjdG9yKSB7XG4gICAgLy8gRmFjYWRlLCBzaGlmdGluZyB0aGUgc2VsZWN0b3IgdG8gdGhlIHBhcmVudCBhcmd1bWVudCBpZiBvbmx5IG9uZVxuICAgIC8vIGFyZ3VtZW50IGlzIHByb3ZpZGVkXG4gICAgaWYgKHNlbGVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNlbGVjdG9yID0gcGFyZW50O1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQgfHwgc2VsZWN0b3IgaW5zdGFuY2VvZiBXaW5kb3cpIHtcbiAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICB9XG5cbiAgc3RhdGljIG9uUmVhZHkoY2IpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGVkJyB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKSB7XG4gICAgICBjYigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIERPTS5vbihkb2N1bWVudCwgJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYik7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlRWxlIHdpbGwgY3JlYXRlIGEge0hUTUxFbGVtZW50fSBhbmQgYXBwbHkgdGhlIHByb3BlcnRpZXMgYXR0cmlidXRlcyB0aHJvdWdoIGFuIG9iamVjdCBwcm92aWRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGVsIFRoZSBlbGVtZW50IGB0YWdgIG5hbWUgdG8gY29uc3RydWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzX2RhdGEgT3B0aW9uYWwgYXR0cmlidXRlcyB0byBhcHBseSB0byB0aGUgbmV3IEhUTUxFbGVtZW50XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlRWwoZWwsIG9wdHNfZGF0YSA9IHt9KSB7XG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsKSxcbiAgICAgICAgcHJvcHMgPSBPYmplY3Qua2V5cyhvcHRzX2RhdGEpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByb3BzW2ldID09PSAnY2xhc3MnKSB7XG4gICAgICAgIERPTS5hZGRDbGFzcyhub2RlLCBvcHRzX2RhdGFbcHJvcHNbaV1dKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIG5vZGVbcHJvcHNbaV1dID0gb3B0c19kYXRhW3Byb3BzW2ldXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBhcHBlbmQocGFyZW50LCBub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbm9kZSA9IHBhcmVudDtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcGFyZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgcGFyZW50ID0gRE9NLnF1ZXJ5KHBhcmVudCk7XG4gICAgfVxuXG4gICAgLy8gU3VwcG9ydCBIVE1MIGluamVjdGlvbiBhcyB3ZWxsIGFzIEhUTUxFbGVtZW50IGFwcGVuZHNcbiAgICBpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlckJlZ2luJywgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYWRkQ2xhc3Mobm9kZSwgY2xhc3NOYW1lKSB7XG4gICAgbGV0IGNsYXNzZXMgPSBjbGFzc05hbWUuc3BsaXQoJywnKSxcbiAgICAgICAgbGVuID0gY2xhc3Nlcy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArKykge1xuICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzZXNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBlbXB0eShwYXJlbnQpIHtcbiAgICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICBzdGF0aWMgY3NzKHNlbGVjdG9yLCBzdHlsZXMpIHtcbiAgICBsZXQgbm9kZSA9IERPTS5xdWVyeShzZWxlY3Rvcik7XG5cbiAgICBmb3IgKGxldCBwcm9wIGluIHN0eWxlcykge1xuICAgICAgbm9kZS5zdHlsZVtwcm9wXSA9IHN0eWxlc1twcm9wXTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYXR0cihzZWxlY3RvciwgYXR0ciwgdmFsKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsKTtcbiAgfVxuXG4gIHN0YXRpYyB0cmlnZ2VyKHNlbGVjdG9yLCBldmVudCwgc2V0dGluZ3MpIHtcbiAgICBsZXQgZSA9IG5ldyBFdmVudChldmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAnYnViYmxlcyc6IHRydWUsXG4gICAgICAnY2FuY2VsYWJsZSc6IHRydWVcbiAgICB9LCBzZXR0aW5ncyB8fCB7fSkpXG5cbiAgICBET00ucXVlcnkoc2VsZWN0b3IpLmRpc3BhdGNoRXZlbnQoZSk7XG4gIH1cblxuICBzdGF0aWMgb24oc2VsZWN0b3IsIGV2dCwgaGFuZGxlcikge1xuICAgIERPTS5xdWVyeShzZWxlY3RvcikuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIG9mZihzZWxlY3RvciwgZXZ0LCBoYW5kbGVyKSB7XG4gICAgRE9NLnF1ZXJ5KHNlbGVjdG9yKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZGVsZWdhdGUoY3R4dCwgc2VsZWN0b3IsIGV2dCwgaGFuZGxlcikge1xuICAgIGxldCBlbCA9IERPTS5xdWVyeShjdHh0KTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2dCwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgd2hpbGUgKCF0YXJnZXQuaXNFcXVhbE5vZGUoZWwpKSB7XG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICBoYW5kbGVyKGV2ZW50LCB0YXJnZXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn0iLCJpbXBvcnQgRE9NIGZyb20gJy4uL2RvbS9kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wbGF0ZUxvYWRlciB7XG4gIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgIGlmICghVGVtcGxhdGVMb2FkZXIuc2V0SW5zdGFuY2UodGhpcykpIHtcbiAgICAgIHJldHVybiBUZW1wbGF0ZUxvYWRlci5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpKS5zZWFyY2hQYXJhbXM7XG4gICAgbGV0IGlzTG9jYWwgPSBwYXJhbXMuZ2V0KCdsb2NhbCcpO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVVcmwgPSBvcHRzLnRlbXBsYXRlVXJsIHx8IChpc0xvY2FsID8gJy4uL2Rpc3QvYW5zd2Vyc3RlbXBsYXRlcy5jb21waWxlZC5taW4uanMnIDogJ2h0dHBzOi8vYXNzZXRzLnNpdGVzY2RuLm5ldC9hbnN3ZXJzL2Fuc3dlcnN0ZW1wbGF0ZXMuY29tcGlsZWQubWluLmpzJyk7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB7fTtcblxuICAgIHRoaXMuX29uTG9hZGVkID0gZnVuY3Rpb24oKSB7fTtcblxuICAgIHRoaXMuX2luaXQoKVxuICB9XG5cbiAgc3RhdGljIHNldEluc3RhbmNlKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlKG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIF9pbml0KCkge1xuICAgIHRoaXMuZmV0Y2hUZW1wbGF0ZXMoKTtcbiAgfVxuXG4gIGZldGNoVGVtcGxhdGVzKCkge1xuICAgIC8vIElmIHdlIGFscmVhZHkgaGF2ZSB0ZW1wbGF0ZXMgbG9hZGVkLCBkbyBub3RoaW5nXG4gICAgbGV0IG5vZGUgPSBET00ucXVlcnkoJyN5ZXh0LWFuc3dlcnMtdGVtcGxhdGVzJyk7XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgLy8gSW5qZWN0IGEgc2NyaXB0IHRvIGZldGNoIHRoZSBjb21waWxlZCB0ZW1wbGF0ZXMsXG4gICAgLy8gd3JhcHBpbmcgaXQgYSBQcm9taXNlIGZvciBjbGVhbmxpbmVzc1xuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBzY3JpcHQgPSBET00uY3JlYXRlRWwoJ3NjcmlwdCcsIHtcbiAgICAgICAgaWQ6ICd5ZXh0LWFuc3dlcnMtdGVtcGxhdGVzJyxcbiAgICAgICAgb25sb2FkOiByZXNvbHZlLFxuICAgICAgICBvbmVycm9yOiByZWplY3QsXG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBzcmM6IHRoYXQuX3RlbXBsYXRlVXJsXG4gICAgICB9KTtcblxuICAgICAgRE9NLmFwcGVuZCgnYm9keScsIHNjcmlwdCk7XG4gICAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIEltcGxtZW5ldCBlcnJvciBoYW5kbGluZyBoZXJlIChlLmcuIHJlcXVlc3QgY291bGQgZmFpbClcbiAgICAgIGNvbnNvbGUubG9nKCdUZW1wbGF0ZXMgbG9hZGVkIHN1Y2Nlc3NmdWxseSEnKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiByZWdpc3RlciB0aGUgdGVtcGxhdGVzIGludGVybmFsbHkgc28gdGhhdCB0aGV5IGNhbiBiZSBsYXRlciBjb25zdW1lZFxuICAgKiAoZS5nLiBieSBjb21wb25lbnRzIGFuZCByZW5kZXJlcnMpIHdpdGggY29udmllbmllbmNlLlxuICAgKlxuICAgKiBgZmV0Y2hUZW1wbGF0ZXNgIHdpbGwgYXV0b21hdGljYWxseSBjYWxsIHRoaXMsIHByb3ZpZGluZyB0aGUgY29tcGlsZWQgdGVtcGxhdGVzIGZyb20gdGhlIHNlcnZlci5cbiAgICovXG4gIHJlZ2lzdGVyKHRlbXBsYXRlcykge1xuICAgIHRoaXMuX3RlbXBsYXRlcyA9IHRlbXBsYXRlcztcblxuICAgIC8vIE5vdGlmeSBvdXIgY29uc3VtZXJzIHRoYXQgdGhlIHRlbXBsYXRlcyBhcmUgaGVyZSA6KVxuICAgIHRoaXMuX29uTG9hZGVkKHRoaXMuX3RlbXBsYXRlcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBvbkxvYWRlZChjYikge1xuICAgIHRoaXMuX29uTG9hZGVkID0gY2I7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQodGVtcGxhdGVOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlc1t0ZW1wbGF0ZU5hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4gVGhlIGludGVybmFsIHRlbXBsYXRlIGNvbGxlY3Rpb25cbiAgICovXG4gIGdldFRlbXBsYXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVzO1xuICB9XG59IiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vcmVuZGVyZXInO1xuaW1wb3J0IFRlbXBsYXRlTG9hZGVyIGZyb20gJy4vdGVtcGxhdGVsb2FkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYW5kbGViYXJzUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlcyA9IHt9LCBvcHRzID0ge30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGhhbmRsZWJhcnMgY29tcGlsZXJcbiAgICAgKiBAdHlwZSB7SGFuZGxlYmFyc31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX2hhbmRsZWJhcnMgPSB0ZW1wbGF0ZXMuX2hiIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgcHJlLWNvbXBpbGVkIGhhbmRsZWJhcnMgdGVtcGxhdGVzXG4gICAgICogQHR5cGUge0hhbmRsZWJhcnN9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXMgfHwge307XG4gIH1cblxuICBpbml0KHRlbXBsYXRlcykge1xuICAgIC8vIEFzc2lnbiB0aGUgaGFuZGxlYmFycyBjb21waWxlciBhbmQgdGVtcGxhdGVzIGJhc2VkIG9uXG4gICAgLy8gaW5mb3JtYXRpb24gcHJvdmlkZWQgZnJvbSBleHRlcm5hbCBkZXAgKGluIGRlZmF1bHQgY2FzZSwgaXQgY29tZXMgZnJvbSBleHRlcm5hbCBzZXJ2ZXIgcmVxdWVzdClcbiAgICB0aGlzLl9oYW5kbGViYXJzID0gdGVtcGxhdGVzLl9oYjtcbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSB0ZW1wbGF0ZXM7XG5cbiAgICAvLyBUT0RPKGJpbGx5KSBPbmNlIHdlIHJlLXdyaXRlIHRlbXBsYXRlcyB1c2luZyB0aGUgbmV3IGhlbHBlcnMgbGlicmFyeVxuICAgIC8vIHdlIHByb2JhYmx5IGRvbid0IG5lZWQgdGhlc2UgY3VzdG9tIGhlbHBlcnMgYW55bW9yZVxuICAgIHRoaXMuX3JlZ2lzdGVyQ3VzdG9tSGVscGVycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlZ2lzdGVySGVscGVyIGlzIGEgcHVibGljIGludGVyZmFjZSBmb3IgZXh0ZXJuYWwgZGVwZW5kZW5jaWVzIHRvXG4gICAqIHJlZ2lzdGVyIHRoZWlyIG93biBjdXN0b20gaGVscGVycyB0byBvdXIgaW50ZXJuYWwgSGFuZGxlYmFycyBDb21waWxlclxuICAgKi9cbiAgcmVnaXN0ZXJIZWxwZXIobmFtZSwgY2IpIHtcbiAgICB0aGlzLl9oYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKG5hbWUsIGNiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjb21waWxlIGEgaGFuZGxlYmFycyB0ZW1wbGF0ZSBzbyB0aGF0IGl0IGNhbiBiZSByZW5kZXJlZCxcbiAgICogdXNpbmcgdGhlIHtIYW5kbGViYXJzfSBjb21waWxlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgVGhlIHRlbXBsYXRlIHN0cmluZyB0byBjb21waWxlXG4gICAqL1xuICBjb21waWxlKHRlbXBsYXRlKSB7XG4gICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZWJhcnMuY29tcGlsZSh0ZW1wbGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogcmVuZGVyIHdpbGwgcmVuZGVyIGEgdGVtcGxhdGUgd2l0aCBkYXRhXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgUHJvdmlkZSBlaXRoZXIgYSB0ZW1wbGF0ZU5hbWUgb3IgYSBwcmUtY29tcGlsZWQgdGVtcGxhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGRhdGEgdG8gcHJvdmlkZSB0byB0aGUgdGVtcGxhdGVcbiAgICovXG4gIHJlbmRlcihjb25maWcsIGRhdGEpIHtcbiAgICAvLyBJZiBhIGN1c3RvbSB0ZW1wbGF0ZSBpcyBwcm92aWRlZCwgdXNlIGl0LFxuICAgIC8vIG90aGVyd2lzZSBmYWxsIGJhY2sgdG8gdGhlIHRlbXBsYXRlIG5hbWVcbiAgICAvLyBUT0RPKGJpbGx5KSBUaGlzIGludGVyZmFjZSBzaG91bGQgcHJvYmFibHkgYmUgbGVzcyB1Z2x5XG4gICAgaWYgKGNvbmZpZy50ZW1wbGF0ZSAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNvbmZpZy50ZW1wbGF0ZShkYXRhKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlc1tjb25maWcudGVtcGxhdGVOYW1lXShkYXRhKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgZmluZC9yZW5kZXIgdGVtcGxhdGU6ICcgKyBjb25maWcudGVtcGxhdGVOYW1lLCBlKTtcbiAgICB9XG4gIH1cblxuICBfcmVnaXN0ZXJDdXN0b21IZWxwZXJzKCkge1xuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2lmZXEnLCBmdW5jdGlvbihhcmcxLCBhcmcyLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gKGFyZzEgPT0gYXJnMikgPyBvcHRpb25zLmZuKHRoaXMpIDogb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH0pXG5cbiAgICB0aGlzLnJlZ2lzdGVySGVscGVyKCdpZm5vdGVxJywgZnVuY3Rpb24oYXJnMSwgYXJnMiwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIChhcmcxICE9IGFyZzIpID8gb3B0aW9ucy5mbih0aGlzKSA6IG9wdGlvbnMuaW52ZXJzZSh0aGlzKTtcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2Zvcm1hdFBob25lTnVtYmVyJywgZnVuY3Rpb24ocGhvbmVOdW1iZXJTdHJpbmcpIHtcbiAgICAgIHZhciBjbGVhbmVkID0gKCcnICsgcGhvbmVOdW1iZXJTdHJpbmcpLnJlcGxhY2UoL1xcRC9nLCAnJylcbiAgICAgIHZhciBtYXRjaCA9IGNsZWFuZWQubWF0Y2goL14oMXwpPyhcXGR7M30pKFxcZHszfSkoXFxkezR9KSQvKVxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdmFyIGludGxDb2RlID0gKG1hdGNoWzFdID8gJysxICcgOiAnJylcbiAgICAgICAgICByZXR1cm4gW2ludGxDb2RlLCAnKCcsIG1hdGNoWzJdLCAnKSAnLCBtYXRjaFszXSwgJy0nLCBtYXRjaFs0XV0uam9pbignJylcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignbWFwQm94JywgZnVuY3Rpb24obWFwRGF0YSwgbWFwQ29uZmlnLCBvcHRpb25zKSB7XG4gICAgICBsZXQgZW5jb2RlZE1hcmtlcnMgPSAnJyxcbiAgICAgICAgICBtYXBNYXJrZXJzID0gbWFwRGF0YS5tYXBNYXJrZXJzLFxuICAgICAgICAgIGNlbnRlciA9IG1hcERhdGEubWFwQ2VudGVyLFxuICAgICAgICAgIHdpZHRoID0gbWFwQ29uZmlnLndpZHRoIHx8IDYwMCxcbiAgICAgICAgICBoZWlnaHQgPSBtYXBDb25maWcuaGVpZ2h0IHx8IDIwMCxcbiAgICAgICAgICB6b29tID0gbWFwQ29uZmlnLnpvb20gfHwgOTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXBNYXJrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBtbSA9IG1hcE1hcmtlcnNbaV07XG4gICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgIGVuY29kZWRNYXJrZXJzICs9ICcsJztcbiAgICAgICAgfVxuICAgICAgICBlbmNvZGVkTWFya2VycyArPSBgcGluLXMtJHttbS5sYWJlbH0oJHttbS5sb25naXR1ZGV9LCR7bW0ubGF0aXR1ZGV9KWBcbiAgICAgIH1cbiAgICAgIHJldHVybiBgPGltZyBzcmM9XCJodHRwczovL2FwaS5tYXBib3guY29tL3N0eWxlcy92MS9tYXBib3gvc3RyZWV0cy12MTEvc3RhdGljLyR7ZW5jb2RlZE1hcmtlcnN9LyR7Y2VudGVyLmxvbmdpdHVkZX0sJHtjZW50ZXIubGF0aXR1ZGV9LCR7em9vbX0vYXV0by8ke3dpZHRofXgke2hlaWdodH0/YWNjZXNzX3Rva2VuPSR7bWFwQ29uZmlnLmFwaUtleX1cIj5gO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWdpc3RlckhlbHBlcignZ29vZ2xlTWFwJywgZnVuY3Rpb24obWFwRGF0YSwgbWFwQ29uZmlnLCBvcHRpb25zKSB7XG4gICAgICBsZXQgZW5jb2RlZE1hcmtlcnMgPSAnJyxcbiAgICAgICAgICBtYXBNYXJrZXJzID0gbWFwRGF0YS5tYXBNYXJrZXJzLFxuICAgICAgICAgIHdpZHRoID0gbWFwQ29uZmlnLndpZHRoIHx8IDYwMCxcbiAgICAgICAgICBoZWlnaHQgPSBtYXBDb25maWcuaGVpZ2h0IHx8IDIwMCxcbiAgICAgICAgICB6b29tID0gbWFwQ29uZmlnLnpvb20gfHwgMTM7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFwTWFya2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgbW0gPSBtYXBNYXJrZXJzW2ldO1xuICAgICAgICBlbmNvZGVkTWFya2VycyArPSBgJm1hcmtlcnM9bGFiZWw6JHttbS5sYWJlbH18JHttbS5sYXRpdHVkZX0sJHttbS5sb25naXR1ZGV9YFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYDxpbWcgc3JjPVwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3N0YXRpY21hcD8ke2VuY29kZWRNYXJrZXJzfSZzaXplPSR7d2lkdGh9eCR7aGVpZ2h0fSZrZXk9JHttYXBDb25maWcuYXBpS2V5fVwiPmA7XG4gICAgfSlcblxuICAgIHRoaXMucmVnaXN0ZXJIZWxwZXIoJ2Fzc2lnbicsIGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIG9wdGlvbnMgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmICghb3B0aW9ucy5kYXRhLnJvb3QpIHtcbiAgICAgICAgb3B0aW9ucy5kYXRhLnJvb3QgPSB7fTtcbiAgICAgIH1cblxuICAgICAgbGV0IHYgPSAnJztcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJncy5sZW5ndGggLSAxOyBpICsrKSB7XG4gICAgICAgIHYgPSB2ICsgYXJnc1tpXTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5kYXRhLnJvb3RbbmFtZV0gPSB2O1xuICAgIH0pXG4gIH1cbn0iLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgSGFuZGxlYmFyc1JlbmRlcmVyIGZyb20gJy4vaGFuZGxlYmFyc3JlbmRlcmVyJztcblxuLy8gSW4gdGhlIGZ1dHVyZSwgdGhpcyB3aWxsIGNvbnRhaW4gYWxsIGRpZmZlcmVudCB0eXBlcyBvZiByZW5kZXJlcnNcbi8vIEUuZy4gTXVzdGFjaGUsIFNPWSwgSGFuZGxlQmFycywgUmVhY3QsIGV0Yy5cbmV4cG9ydCBjb25zdCBSZW5kZXJlcnMgPSB7XG4gIFNPWTogUmVuZGVyZXIsXG4gIEhhbmRsZWJhcnM6IEhhbmRsZWJhcnNSZW5kZXJlclxufVxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi8uLi9jb3JlL2V2ZW50ZW1pdHRlci9ldmVudGVtaXR0ZXInO1xuXG4vKipcbiAqIFN0YXRlIGNvbnRhaW5zIHRoZSBkYXRhIGZvciB0aGUgY29tcG9uZW50XG4gKiBhbmQgZXhwb3NlcyBhbiB7RXZlbnRFbWl0dGVyfSBpbnRlcmZhY2Ugc28gdGhhdCBleHRlcm5hbFxuICogZGVwZW5kZW5jaWVzIGNhbiBsaXN0ZW4vaG9vayBzdWJzY3JpYmUgdG8gbWVzc2FnZXMvdXBkYXRlcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5fc3RhdGUgPSBkYXRhIHx8IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKiBOT1RFKGJpbGx5KTogRG9lcyBub3QgZmlyZSBhbiB1cGRhdGUgbWVzc2FnZVxuICAgKi9cbiAgaW5pdChwcm9wLCBvcHRfdmFsKSB7XG4gICAgdGhpcy5fc2V0KHByb3AsIG9wdF92YWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldHRlciBmb3IgdGhlIHN0YXRlXG4gICAqIEBwYXJhbSBwcm9wIHtzdHJpbmd8T2JqZWN0fSBUaGUgcHJvcGVydHkgdG8gc2V0XG4gICAqIEBwYXJhbSBvcHRfdmFsIE9wdGlvbmFsLCBpZiBwcm9wIGlzIGEge3N0cmluZ30sIGl0IHdpbGwgYXNzaWduIHRoZSB2YWx1ZSB0byB0aGF0IHByb3BlcnR5XG4gICAqL1xuICBzZXQocHJvcCwgb3B0X3ZhbCkge1xuICAgIHRoaXMuX3NldChwcm9wLCBvcHRfdmFsKTtcbiAgICB0aGlzLmVtaXQoJ3VwZGF0ZScpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldHRlciBmb3IgdGhlIHN0YXRlIGVuYWJsZXMgeW91IHRvIHVwZGF0ZSBhIHNpbmdsZSBwcm9wZXJ0eSwgb3IgY29tcGxldGUgc3RhdGVcbiAgICogZGVwZW5kaW5nIG9uIHRoZSBhcmd1bWVudHMgcHJvdmlkZWQuXG4gICAqIEBwYXJhbSBwcm9wIHtzdHJpbmd8T2JqZWN0fSBUaGUgcHJvcGVydHkgdG8gc2V0XG4gICAqIEBwYXJhbSBvcHRfdmFsIElmIHByb3AgaXMgYSB7c3RyaW5nfSwgcHJvdmlkZSBpdHMgdmFsdWVcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZXQocHJvcCwgb3B0X3ZhbCkge1xuICAgIGlmIChvcHRfdmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3N0YXRlID0gcHJvcDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3RhdGVbcHJvcF0gPSBvcHRfdmFsO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShkYXRhKSB7XG4gICAgdGhpcy5fc3RhdGUgPSBkYXRhO1xuICAgIHRoaXMuZW1pdCgndXBkYXRlJyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgYSBwcm9wZXJ0aWVzIHZhbHVlIGZyb20gdGhlIHN0YXRlXG4gICAqIElmIG5vIHByb3BlcnR5IHByb3ZpZGVkLCByZXR1cm4gdGhlIGZ1bGwgc3RhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdF9wcm9wIG9wdGlvbmFsIHByb3BlcnR5IHRvIHJldHJpZXZlXG4gICAqL1xuICBnZXQob3B0X3Byb3ApIHtcbiAgICBpZiAob3B0X3Byb3AgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc3RhdGVbb3B0X3Byb3BdO1xuICB9XG5cbiAgaGFzKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVbcHJvcF0gIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGFzSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IFJlbmRlcmVycyB9IGZyb20gJy4uL3JlbmRlcmluZy9jb25zdCc7XG5cbmltcG9ydCBET00gZnJvbSAnLi4vZG9tL2RvbSc7XG5pbXBvcnQgU3RhdGUgZnJvbSAnLi9zdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIG9wdHMgPSB7fSkge1xuICAgIC8vIFNpbXBsZSBmYWNhZGUgcGF0dGVybiB0byBlbmFibGUgdGhlIHVzZXIgdG8gcGFzcyBhIHNpbmdsZSBvYmplY3RcbiAgICAvLyBjb250YWluaW5nIGFsbCB0aGUgbmVjZXNzYXJ5IG9wdGlvbnMgYW5kIHNldHRpbmdzXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgb3B0cyA9IHR5cGU7XG4gICAgICB0eXBlID0gb3B0cy50eXBlO1xuICAgIH1cblxuICAgIHRoaXMubW9kdWxlSWQgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQ2FjaGUgdGhlIG9wdGlvbnMgc28gdGhhdCB3ZSBjYW4gcHJvcG9nYXRlIHByb3Blcmx5IHRvIGNoaWxkIGNvbXBvbmVudHNcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuX29wdHMgPSBvcHRzO1xuXG4gICAgLyoqXG4gICAgICogQW4gaWRlbnRpZmllciB1c2VkIHRvIGNsYXNzaWZ5IHRoZSB0eXBlIG9mIGNvbXBvbmVudC5cbiAgICAgKiBUaGUgY29tcG9uZW50IG1hbmFnZXIgdXNlcyB0aGlzIGluZm9ybWF0aW9uIGluIG9yZGVyIHRvIHBlcnNpc3QgYW5kIG9yZ2FuaXplIGNvbXBvbmVudHNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfENvbXBvbmVudFR5cGV9XG4gICAgICovXG4gICAgdGhpcy5fdHlwZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgY29tcG9uZW50LCBpZiBleGlzdHNcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50fVxuICAgICAqL1xuICAgIHRoaXMuX3BhcmVudCA9IG9wdHMucGFyZW50IHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBIGNvbnRhaW5lciBmb3IgYWxsIHRoZSBjaGlsZCBjb21wb25lbnRzXG4gICAgICogQHR5cGUge0FycmF5LkNvbXBvbmVudH1cbiAgICAgKi9cbiAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHN0YXRlIChkYXRhKSBvZiB0aGUgY29tcG9uZW50IHRvIGJlIHByb3ZpZGVkIHRvIHRoZSB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLl9zdGF0ZSA9IG5ldyBTdGF0ZShvcHRzLnN0YXRlKTtcblxuICAgIC8qKlxuICAgICAqIFRPRE8oYmlsbHkpIFRoaXMgc2hvdWxkIGJlICdzZXJ2aWNlcydcbiAgICAgKi9cbiAgICB0aGlzLmNvcmUgPSBvcHRzLmNvcmUgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgbWFuYWdlciwgd2hpY2ggY29udGFpbnMgYWxsIG9mIHRoZSBjb21wb25lbnQgY2xhc3Nlc1xuICAgICAqIGVsaWdpYmxlIHRvIGJlIGNyZWF0ZWRcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50TWFuYWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbXBvbmVudE1hbmFnZXIgPSBvcHRzLmNvbXBvbmVudE1hbmFnZXIgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBET00gbm9kZSB0aGF0IHRoZSBjb21wb25lbnQgd2lsbCBiZSBhcHBlbmRlZCB0byB3aGVuIG1vdW50ZWQvcmVuZGVyZWQuXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IG51bGwpIHtcbiAgICAgIGlmICh0eXBlb2Ygb3B0cy5jb250YWluZXIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBgY29udGFpbmVyYCBvcHRpb24gZm9yIGNvbXBvbmVudCBjb25maWd1cmF0aW9uLiBNdXN0IGJlIG9mIHR5cGUgYHN0cmluZ2AuJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jb250YWluZXIgPSBET00ucXVlcnkob3B0cy5jb250YWluZXIpIHx8IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IERPTS5xdWVyeSh0aGlzLl9wYXJlbnQuX2NvbnRhaW5lciwgb3B0cy5jb250YWluZXIpO1xuXG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgcGFyZW50LCBhbmQgdGhlIGNvbnRhaW5lciBpcyBtaXNzaW5nIGZyb20gdGhlIERPTSxcbiAgICAgIC8vIHdlIGNvbnN0cnVjdCB0aGUgY29udGFpbmVyIGFuZCBhcHBlbmQgaXQgdG8gdGhlIHBhcmVudFxuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBET00uY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogb3B0cy5jb250YWluZXIuc3Vic3RyaW5nKDEsIG9wdHMuY29udGFpbmVyLmxlbmd0aClcbiAgICAgICAgfSk7XG4gICAgICAgIERPTS5hcHBlbmQodGhpcy5fcGFyZW50Ll9jb250YWluZXIsIHRoaXMuX2NvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZmluZCBjb250YWluZXIgRE9NIG5vZGU6ICcgKyBvcHRzLmNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gY2xhc3MgdG8gYmUgYXBwbGllZCB0byB7dGhpcy5fY29udGFpbmVyfSBub2RlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9jbGFzc05hbWUgPSBvcHRzLmNsYXNzIHx8ICdjb21wb25lbnQnO1xuXG4gICAgLyoqXG4gICAgICogQSBjdXN0b20gcmVuZGVyIGZ1bmN0aW9uIHRvIGJlIHVzZWQgaW5zdGVhZCBvZiB1c2luZyB0aGUgZGVmYXVsdCByZW5kZXJlclxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXIgPSBvcHRzLnJlbmRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGRlZmF1bHQge1JlbmRlcmVyfSB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgcmVuZGVyaW5nIHRoZSB0ZW1wbGF0ZVxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZW5kZXJlciA9IG9wdHMucmVuZGVyZXIgfHwgUmVuZGVyZXJzLkhhbmRsZWJhcnM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgc3RyaW5nIHRvIHVzZSBmb3IgcmVuZGVyaW5nIHRoZSBjb21wb25lbnRcbiAgICAgKiBJZiB0aGlzIGlzIGxlZnQgZW1wdHksIHdlIGxvb2t1cCB0aGUgdGVtcGxhdGUgdGhlIGJhc2UgdGVtcGxhdGVzIHVzaW5nIHRoZSB0ZW1wbGF0ZU5hbWVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlID0gb3B0cy50ZW1wbGF0ZSA/IHRoaXMuX3JlbmRlcmVyLmNvbXBpbGUob3B0cy50ZW1wbGF0ZSkgOiBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRlbXBsYXRlTmFtZSB0byB1c2UgZm9yIHJlbmRlcmluZyB0aGUgY29tcG9uZW50LlxuICAgICAqIFRoaXMgaXMgb25seSB1c2VkIGlmIF90ZW1wbGF0ZSBpcyBlbXB0eS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9IG9wdHMudGVtcGxhdGVOYW1lIHx8ICdkZWZhdWx0JztcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHN0YXRlIGluZGljYXRpbmcgd2hldGhlciBvciBub3QgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBtb3VudGVkIHRvIHRoZSBET01cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjaywgdGhhdHMgdXNlZCB0byB0cmFuc2Zvcm0gdGhlIGludGVybmFsIGRhdGFcbiAgICAgKiBtb2RlbHMgb2YgdGhlIGNvbXBvbmVudHMsIGJlZm9yZSBpdCBnZXRzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudCBzdGF0ZS5cbiAgICAgKiBCeSBkZWZhdWx0LCBubyB0cmFuc2Zvcm1hdGlvbiBoYXBwZW5zLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLnRyYW5zZm9ybURhdGEgPSBvcHRzLnRyYW5zZm9ybURhdGEgfHwgdGhpcy50cmFuc2Zvcm1EYXRhIHx8IGZ1bmN0aW9uKCkge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYSBsb2NhbCByZWZlcmVuY2UgdG8gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdoZW4gYSBjb21wb25lbnQgaXMgY3JlYXRlZC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgdGhpcy5vbkNyZWF0ZSA9IG9wdHMub25DcmVhdGUgfHwgdGhpcy5vbkNyZWF0ZSB8fCBmdW5jdGlvbigpIHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIGEgY29tcG9uZW50IGlzIE1vdW50ZWQuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHRoaXMub25Nb3VudCA9IG9wdHMub25Nb3VudCB8fCB0aGlzLm9uTW91bnQgfHwgZnVuY3Rpb24gKCkgeyB9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGEgbG9jYWwgcmVmZXJlbmNlIHRvIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIGEgY29tcG9uZW50cyBzdGF0ZSBpcyB1cGRhdGVkLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLm9uVXBkYXRlID0gb3B0cy5vblVwZGF0ZSB8fCB0aGlzLm9uVXBkYXRlIHx8IGZ1bmN0aW9uICgpIHsgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ0NvbXBvbmVudCc7XG4gIH1cblxuICBpbml0KG9wdHMpIHtcbiAgICB0aGlzLnNldFN0YXRlKG9wdHMuZGF0YSB8fCBvcHRzLnN0YXRlIHx8IHt9KTtcblxuICAgIHRoaXMub25DcmVhdGUoKVxuICAgIHRoaXMuX3N0YXRlLm9uKCd1cGRhdGUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uVXBkYXRlKCk7XG4gICAgICB0aGlzLm1vdW50KCk7XG4gICAgfSk7XG5cbiAgICBET00uYWRkQ2xhc3ModGhpcy5fY29udGFpbmVyLCB0aGlzLl9jbGFzc05hbWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0U3RhdGUoZGF0YSkge1xuICAgIHRoaXMuX3N0YXRlLnNldChkYXRhKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldFN0YXRlKHByb3ApIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuZ2V0KHByb3ApO1xuICB9XG5cbiAgaGFzU3RhdGUocHJvcCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZS5oYXMocHJvcCk7XG4gIH1cblxuICB0cmFuc2Zvcm1EYXRhKGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGFkZENoaWxkKGRhdGEsIHR5cGUsIG9wdHMpIHtcbiAgICBsZXQgY2hpbGRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKFxuICAgICAgdHlwZSxcbiAgICAgIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0sIG9wdHMgfHwge30sIHtcbiAgICAgICAgX3BhcmVudE9wdHM6IHRoaXMuX29wdHNcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goY2hpbGRDb21wb25lbnQpO1xuICAgIHJldHVybiBjaGlsZENvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHJlbmRlciBtZXRob2QgdG8gYmUgdXNlZCBmb3IgcmVuZGVyaW5nIHRoZSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVuZGVyXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHNldFJlbmRlcihyZW5kZXIpIHtcbiAgICB0aGlzLl9yZW5kZXIgPSByZW5kZXI7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSByZW5kZXJlciBmb3IgdGhlIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge1JlbmRlcmVyVHlwZX0gcmVuZGVyZXJcbiAgICovXG4gIHNldFJlbmRlcmVyKHJlbmRlcmVyKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSBSZW5kZXJlcnNbcmVuZGVyZXJdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHRlbXBsYXRlIGZvciB0aGUgY29tcG9uZW50IHRvIHVzZSB3aGVuIHJlbmRlcmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAgICovXG4gIHNldFRlbXBsYXRlKHRlbXBsYXRlKSB7XG4gICAgdGhpcy5fdGVtcGxhdGUgPSB0aGlzLl9yZW5kZXJlci5jb21waWxlKHRlbXBsYXRlKTtcbiAgfVxuXG4gIHVuTW91bnQoKSB7XG4gICAgRE9NLmVtcHR5KHRoaXMuX2NvbnRhaW5lcik7XG4gIH1cblxuICBtb3VudCgpIHtcbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy51bk1vdW50KCk7XG4gICAgaWYgKHRoaXMuYmVmb3JlTW91bnQoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIERPTS5hcHBlbmQodGhpcy5fY29udGFpbmVyLCB0aGlzLnJlbmRlcih0aGlzLl9zdGF0ZS5hc0pTT04oKSkpO1xuXG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICB0aGlzLm9uTW91bnQodGhpcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogcmVuZGVyIHRoZSB0ZW1wbGF0ZSB1c2luZyB0aGUge1JlbmRlcmVyfSB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIGFuZCB0ZW1wbGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICByZW5kZXIoZGF0YSkge1xuICAgIHRoaXMuYmVmb3JlUmVuZGVyKCk7XG4gICAgZGF0YSA9IHRoaXMudHJhbnNmb3JtRGF0YShkYXRhKSB8fCB0aGlzLnRyYW5zZm9ybURhdGEodGhpcy5fc3RhdGUuZ2V0KCkpO1xuXG4gICAgbGV0IGh0bWwgPSAnJztcbiAgICAvLyBVc2UgZWl0aGVyIHRoZSBjdXN0b20gcmVuZGVyIGZ1bmN0aW9uIG9yIHRoZSBpbnRlcm5hbCByZW5kZXJlclxuICAgIC8vIGRlcGVuZGFudCBvbiB0aGUgY29tcG9uZW50IGNvbmZpZ3VyYXRpb25cbiAgICBpZiAodHlwZW9mIHRoaXMuX3JlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaHRtbCA9IHRoaXMuX3JlbmRlcihkYXRhKTtcbiAgICAgIGlmICh0eXBlb2YgaHRtbCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW5kZXIgbWV0aG9kIG11c3QgcmV0dXJuIEhUTUwgYXMgdHlwZSB7c3RyaW5nfScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZW5kZXIgdGhlIGV4aXN0aW5nIHRlbXBsYXRlcyBhcyBhIHN0cmluZ1xuICAgICAgaHRtbCA9IHRoaXMuX3JlbmRlcmVyLnJlbmRlcih7XG4gICAgICAgIHRlbXBsYXRlOiB0aGlzLl90ZW1wbGF0ZSxcbiAgICAgICAgdGVtcGxhdGVOYW1lOiB0aGlzLl90ZW1wbGF0ZU5hbWVcbiAgICAgIH0sIGRhdGEpO1xuICAgIH1cblxuICAgIC8vIFdlIGNyZWF0ZSBhbiBIVE1MIERvY3VtZW50IGZyYWdtZW50IHdpdGggdGhlIHJlbmRlcmVkIHN0cmluZ1xuICAgIC8vIFNvIHRoYXQgd2UgY2FuIHF1ZXJ5IGl0IGZvciBwcm9jZXNzaW5nIG9mIHN1YiBjb21wb25lbnRzXG4gICAgbGV0IGVsID0gRE9NLmNyZWF0ZShodG1sKTtcblxuICAgIC8vIFByb2Nlc3MgdGhlIERPTSB0byBkZXRlcm1pbmUgaWYgd2Ugc2hvdWxkIGNyZWF0ZVxuICAgIC8vIGluLW1lbW9yeSBzdWItY29tcG9uZW50cyBmb3IgcmVuZGVyaW5nXG4gICAgLy8gVE9ETyhiaWxseSkgVGhpcyBzaG91bGQgcHJvYmFibHkgcmV0dXJuIGEgY29sbGVjdGlvbiBvZiBjb21wb25lbnRzXG4gICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcbiAgICBsZXQgZG9tQ29tcG9uZW50ID0gRE9NLnF1ZXJ5KGVsLCAnW2RhdGEtY29tcG9uZW50XScpO1xuICAgIGlmIChkb21Db21wb25lbnQgIT09IHVuZGVmaW5lZCAmJiBkb21Db21wb25lbnQgIT09IG51bGwpIHtcbiAgICAgIGxldCB0eXBlID0gZG9tQ29tcG9uZW50LmRhdGFzZXQuY29tcG9uZW50LFxuICAgICAgICAgIHByb3AgPSBkb21Db21wb25lbnQuZGF0YXNldC5wcm9wO1xuXG4gICAgICBsZXQgY2hpbGREYXRhID0gZGF0YVtwcm9wXTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkRGF0YSkpIHtcbiAgICAgICAgbGV0IGNoaWxkSFRNTCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkRGF0YS5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICBsZXQgY2hpbGRDb21wb25lbnQgPSB0aGlzLmFkZENoaWxkKGNoaWxkRGF0YVtpXSwgdHlwZSk7XG4gICAgICAgICAgY2hpbGRIVE1MLnB1c2goY2hpbGRDb21wb25lbnQucmVuZGVyKGNoaWxkRGF0YVtpXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgRE9NLmFwcGVuZChkb21Db21wb25lbnQsIGNoaWxkSFRNTC5qb2luKCcnKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hZnRlclJlbmRlcigpO1xuICAgIHJldHVybiBlbC5pbm5lckhUTUw7XG4gIH1cblxuICAvKipcbiAgICogb25DcmVhdGUgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBjb25zdHJ1Y3RlZFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB0aGUgY2FsbGJhY2sgdG8gaW52b2tlIHVwb24gZW1pdFxuICAgKi9cbiAgb25DcmVhdGUoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uVXBkYXRlIGlzIHRyaWdnZXJlZCB3aGVuIHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50IGNoYW5nZXNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uVXBkYXRlKGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBiZWZvcmVSZW5kZXIgZXZlbnQgaXMgdHJpZ2dlcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHJlbmRlcmVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBiZWZvcmVSZW5kZXIoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIGFmdGVyUmVuZGVyIGV2ZW50IGlzIHRyaWdnZXJlZCBhZnRlciB0aGUgY29tcG9uZW50IGlzIHJlbmRlcmVkXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBhZnRlclJlbmRlcihjYikge1xuXG4gIH1cblxuICAvKipcbiAgICogb25Nb3VudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFwcGVuZGVkIHRvIHRoZSBET01cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uTW91bnQoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIG9uVW5Nb3VudCBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIHJlbW92ZWQgZnJvbSB0aGUgRE9NXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZSBjYWxsYmFjayB0byBpbnZva2UgdXBvbiBlbWl0XG4gICAqL1xuICBvblVuTW91bnQoY2IpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIGJlZm9yZU1vdW50IGlzIHRyaWdnZXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkIHRvIHRoZSBET01cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIGJlZm9yZU1vdW50KGNiKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBvbkRlc3Ryb3kgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWRcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gdGhlIGNhbGxiYWNrIHRvIGludm9rZSB1cG9uIGVtaXRcbiAgICovXG4gIG9uRGVzdHJveShjYikge1xuXG4gIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkYXRhIHN0b3JhZ2Uga2V5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gJ25hdmlnYXRpb24nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGhhbmRsZWJhcnMgdGVtcGxhdGUgdG8gdXNlXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAnbmF2aWdhdGlvbi9uYXZpZ2F0aW9uJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcmRlciBvZiB0aGUgdGFicywgcGFyc2VkIGZyb20gY29uZmlndXJhdGlvbi5cbiAgICAgKiBUaGlzIGdldHMgdXBkYXRlZCBiYXNlZCBvbiB0aGUgc2VydmVyIHJlc3VsdHNcbiAgICAgKiBAdHlwZSB7QXJyYXkuPFN0cmluZz59IFRoZSBsaXN0IG9mIFZTIGNvbmZpZ0lkc1xuICAgICAqL1xuICAgIHRoaXMuX3RhYk9yZGVyID0gW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGF0YSBjb250YWluZXIgZm9yIGVhY2ggdGFiLCBrZXllZCBieSBWUyBjb25maWdJZFxuICAgICAqIEB0eXBlIHtPYmplY3QuPFN0cmluZywgT2JqZWN0Pn1cbiAgICAgKi9cbiAgICB0aGlzLl90YWJzID0ge307XG5cbiAgICAvLyBQYXJzZSB0aGUgb3B0aW9ucyBhbmQgYnVpbGQgb3V0IG91ciB0YWJzIGFuZFxuICAgIC8vIHRhYk9yZGVyIGZyb20gdGhlIHNldHRpbmdzIHByb3ZpZGVkLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0cy50YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgdGFiID0gb3B0cy50YWJzW2ldO1xuICAgICAgLy8gRm9yIHRhYnMgd2l0aG91dCBjb25maWcgaWRzLCBtYXAgdGhlaXIgVVJMIHRvIHRoZSBjb25maWdJRFxuICAgICAgLy8gdG8gYXZvaWQgZHVwbGljYXRpb24gb2YgcmVuZGVyc1xuICAgICAgaWYgKHRhYi5jb25maWdJZCA9PT0gdW5kZWZpbmVkICYmIHRoaXMuX3RhYnNbdGFiLmNvbmZpZ0lkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRhYi5jb25maWdJZCA9IHRhYi51cmw7XG4gICAgICB9XG5cbiAgICAgIC8vIGlzRmlyc3Qgc2hvdWxkIGFsd2F5cyBiZSB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgbGlzdFxuICAgICAgaWYgKHRhYi5pc0ZpcnN0KSB7XG4gICAgICAgIHRoaXMuX3RhYk9yZGVyLnVuc2hpZnQodGFiLmNvbmZpZ0lkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3RhYk9yZGVyLnB1c2godGFiLmNvbmZpZ0lkKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fdGFic1t0YWIuY29uZmlnSWRdID0ge1xuICAgICAgICBsYWJlbDogdGFiLmxhYmVsLFxuICAgICAgICBjb25maWdJZDogdGFiLmNvbmZpZ0lkLFxuICAgICAgICB1cmw6IHRhYi51cmwsXG4gICAgICAgIGJhc2VVcmw6IHRhYi51cmwsXG4gICAgICAgIGlzRmlyc3Q6IHRhYi5pc0ZpcnN0ID09PSB0cnVlID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICBpc0FjdGl2ZTogdGFiLmlzQWN0aXZlID09PSB0cnVlID8gdHJ1ZSA6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ05hdmlnYXRpb24nO1xuICB9XG5cbiAgZ2V0VXJsUGFyYW1zKCkge1xuICAgIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgfVxuXG4gIGdlbmVyYXRlVGFiVXJsKHRhYikge1xuICAgIGxldCBwYXJhbXMgPSB0aGlzLmdldFVybFBhcmFtcygpO1xuICAgIGlmIChwYXJhbXMudG9TdHJpbmcoKS5sZW5ndGggPiAwKSB7XG4gICAgICB0YWIudXJsID0gdGFiLmJhc2VVcmwgKyAnPycgKyBwYXJhbXMudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhYjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaW5jZSB0aGUgc2VydmVyIGRhdGEgb25seSBwcm92aWRlcyBhIGxpc3Qgb2ZcbiAgICogVlMgY29uZmlnSWRzLCB3ZSBuZWVkIHRvIGNvbXB1dGUgYW5kIHRyYW5zZm9ybVxuICAgKiB0aGUgZGF0YSBpbnRvIHRoZSBwcm9wZXIgZm9ybWF0IGZvciByZW5kZXJpbmcuXG4gICAqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc2V0U3RhdGUoZGF0YSkge1xuICAgIGlmIChkYXRhLnRhYk9yZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3RhYk9yZGVyID0gZGF0YS50YWJPcmRlcjtcbiAgICB9XG5cbiAgICAvLyBTaW5jZSBvdXIgdGFiIGNvbmZpZ3VyYXRpb24gaXMgbG9jYWwsIHdlIGdlbmVyYXRlIGl0XG4gICAgLy8gYmFzZWQgb24gdGhlIGZlZWRiYWNrIGZyb20gdGhlIHNlcnZlclxuICAgIGxldCB0YWJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl90YWJPcmRlci5sZW5ndGg7IGkgKyspIHtcbiAgICAgIGxldCB0YWIgPSB0aGlzLl90YWJzW3RoaXMuX3RhYk9yZGVyW2ldXTtcbiAgICAgIGlmICh0YWIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YWJzLnB1c2godGhpcy5nZW5lcmF0ZVRhYlVybCh0YWIpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBCZWNhdXNlIHRoZSB0YWIgb3JkZXIgZnJvbSBzZXJ2ZXIgb25seSBpbmNsdWRlc1xuICAgIC8vIHNlY3Rpb25zIHRoYXQgaGF2ZSByZXN1bHRzLCB3ZSBuZWVkIHRvIG1hbnVhbGx5IGFkZFxuICAgIC8vIHRoZSBvdGhlciB0YWJzIHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5XG4gICAgZm9yIChsZXQgY29uZmlnSWQgaW4gdGhpcy5fdGFicykge1xuICAgICAgaWYgKHRoaXMuX3RhYk9yZGVyLmluZGV4T2YoY29uZmlnSWQpIDw9IC0xKSB7XG4gICAgICAgIGxldCB0YWIgPSB0aGlzLmdlbmVyYXRlVGFiVXJsKHRoaXMuX3RhYnNbY29uZmlnSWRdKTtcblxuICAgICAgICAvLyBpc0ZpcnN0IHNob3VsZCBhbHdheXMgYmUgdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhlIGxpc3RcbiAgICAgICAgaWYgKHRhYi5pc0ZpcnN0KSB7XG4gICAgICAgICAgdGFicy51bnNoaWZ0KHRhYik7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB0YWJzLnB1c2godGFiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoe1xuICAgICAgdGFiczogdGFic1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKGRhdGEpIHtcbiAgICByZXR1cm4gc3VwZXIucmVuZGVyKGRhdGEpO1xuICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGVtcGxhdGUgbmFtZSB0byB1c2UgZm9yIHJlbmRlcmluZyB3aXRoIGhhbmRsZWJhcnNcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdzZWFyY2gvc2VhcmNoJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25hbCBpbnB1dCBrZXkgZm9yIHRoZSB2ZXJ0aWNhbCBzZWFyY2ggY29uZmlndXJhdGlvblxuICAgICAqIElmIG5vdCBwcm92aWRlZCwgYXV0by1jb21wbGV0ZSBhbmQgc2VhcmNoIHdpbGwgYmUgYmFzZWQgb24gdW5pdmVyc2FsXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9iYXJLZXkgPSBvcHRzLmJhcktleSB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9wdGlvbmFsIGV4cGVyaWVuY2Uga2V5IGZvciB2ZXJ0aWNhbCBzZWFyY2ggY29uZmlndXJhdGlvblxuICAgICAqIElmIG5vdCBwcm92aWRlZCwgYXV0by1jb21wbGV0ZSBhbmQgc2VhcmNoIHdpbGwgYmUgYmFzZWQgb24gdW5pdmVyc2FsXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl92ZXJ0aWNhbEtleSA9IG9wdHMudmVydGljYWxLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFF1ZXJ5IHN1Ym1pc3Npb24gaXMgYmFzZWQgb24gYSBmb3JtIGFzIGNvbnRleHQuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIG5hdGl2ZSBmb3JtIG5vZGUgd2l0aGluIGNvbnRhaW5lclxuICAgICAqIEB0eXBlIHtzdHJpbmd9IENTUyBzZWxlY3RvclxuICAgICAqL1xuICAgIHRoaXMuX2Zvcm1FbCA9IG9wdHMuZm9ybVNlbGVjdG9yIHx8ICdmb3JtJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnB1dCBlbGVtZW50IHVzZWQgZm9yIHNlYXJjaGluZyBhbmQgd2lyZXMgdXAgdGhlIGtleWJvYXJkIGludGVyYWN0aW9uXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZC5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfSBDU1Mgc2VsZWN0b3JcbiAgICAgKi9cbiAgICB0aGlzLl9pbnB1dEVsID0gb3B0cy5pbnB1dEVsIHx8ICcuanMteWV4dC1xdWVyeSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgdXNlZCwgcHJvdmlkZWQgdG8gdGhlIHRlbXBsYXRlIGFzIGEgZGF0YSBwb2ludFxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnRpdGxlID0gb3B0cy50aXRsZSB8fCAnQW5zd2VycyBVbml2ZXJzYWwgU2VhcmNoJztcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWFyY2ggdGV4dCB1c2VkIGZvciBsYWJlbGluZyB0aGUgaW5wdXQgYm94LCBhbHNvIHByb3ZpZGVkIHRvIHRlbXBsYXRlLlxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuc2VhcmNoVGV4dCA9IG9wdHMuc2VhcmNoVGV4dCB8fCAnV2hhdCBhcmUgeW91IGludGVyZXN0ZWQgaW4/JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBxdWVyeSB0ZXh0IHRvIHNob3cgYXMgdGhlIGZpcnN0IGl0ZW0gZm9yIGF1dG8gY29tcGxldGUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5wcm9tcHRIZWFkZXIgPSBvcHRzLnByb21wdEhlYWRlciB8fCBudWxsO1xuXG4gICAgLyoqXG4gICAgICogQXV0byBmb2N1c2VzIHRoZSBpbnB1dCBib3ggaWYgc2V0IHRvIHRydWUuXG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgZGVmYXVsdHMgdG8gZmFsc2UuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5hdXRvRm9jdXMgPSBvcHRzLmF1dG9Gb2N1cyA9PT0gdHJ1ZSA/IHRydWUgOiBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIHN1Ym1pdFVSTCB3aWxsIGZvcmNlIHRoZSBzZWFyY2ggcXVlcnkgc3VibWlzc2lvbiB0byBnZXRcbiAgICAgKiByZWRpcmVjdGVkIHRvIHRoZSBVUkwgcHJvdmlkZWQuXG4gICAgICogT3B0aW9uYWwsIGRlZmF1bHRzIHRvIG51bGwuXG4gICAgICpcbiAgICAgKiBJZiBubyByZWRpcmVjdFVybCBwcm92aWRlZCwgd2Uga2VlcCB0aGUgcGFnZSBhcyBhIHNpbmdsZSBwYWdlIGFwcC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMucmVkaXJlY3RVcmwgPSBvcHRzLnJlZGlyZWN0VXJsIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcXVlcnkgc3RyaW5nIHRvIHVzZSBmb3IgdGhlIGlucHV0IGJveCwgcHJvdmlkZWQgdG8gdGVtcGxhdGUgZm9yIHJlbmRlcmluZy5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnF1ZXJ5ID0gb3B0cy5xdWVyeSB8fCB0aGlzLmdldFVybFBhcmFtcygpLmdldCgncXVlcnknKSB8fCAnJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ1NlYXJjaEJhcic7XG4gIH1cblxuICBvbkNyZWF0ZSgpIHtcbiAgICBpZiAodGhpcy5xdWVyeSAmJiB0aGlzLnF1ZXJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2VhcmNoKHRoaXMucXVlcnkpO1xuICAgIH1cblxuICAgIHRoaXMuYmluZEJyb3dzZXJIaXN0b3J5KCk7XG4gIH1cblxuICBvbk1vdW50KCkge1xuICAgIC8vIFdpcmUgdXAgb3VyIHNlYXJjaCBoYW5kbGluZyBhbmQgYXV0byBjb21wbGV0ZVxuICAgIHRoaXMuaW5pdFNlYXJjaCh0aGlzLl9mb3JtRWwpO1xuICAgIHRoaXMuaW5pdEF1dG9Db21wbGV0ZSh0aGlzLl9pbnB1dEVsKTtcblxuICAgIGlmICh0aGlzLmF1dG9Gb2N1cyA9PT0gdHJ1ZSAmJiB0aGlzLnF1ZXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5faW5wdXRFbCkuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHVzZSBmb3Igd2lyaW5nIHVwIHNlYXJjaGluZyBvbiBmb3JtIHN1Ym1pc3Npb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGZvcm1TZWxlY3RvciBDU1Mgc2VsZWN0b3IgdG8gYmluZCBvdXIgc3VibWl0IGhhbmRsaW5nIHRvXG4gICAqL1xuICBpbml0U2VhcmNoKGZvcm1TZWxlY3Rvcikge1xuICAgIHRoaXMuX2Zvcm1FbCA9IGZvcm1TZWxlY3RvcjtcblxuICAgIGxldCBmb3JtID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgZm9ybVNlbGVjdG9yKTtcbiAgICBpZiAoIWZvcm0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGluaXRpYWxpemUgU2VhcmNoQmFyOyBDYW4gbm90IGZpbmQge0hUTUxFbGVtZW50fSBgJywgdGhpcy5fZm9ybUVsLCAnYC4nKTtcbiAgICB9XG5cbiAgICBET00ub24oZm9ybSwgJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGxldCBxdWVyeSA9IGZvcm0ucXVlcnlTZWxlY3Rvcih0aGlzLl9pbnB1dEVsKS52YWx1ZSxcbiAgICAgICAgICBwYXJhbXMgPSB0aGlzLmdldFVybFBhcmFtcygpO1xuXG4gICAgICBwYXJhbXMuc2V0KCdxdWVyeScsIHF1ZXJ5KTtcblxuICAgICAgLy8gSWYgd2UgaGF2ZSBhIHJlZGlyZWN0VXJsLCB3ZSB3YW50IHRoZSBmb3JtIHRvIGJlXG4gICAgICAvLyBzZXJpYWxpemVkIGFuZCBzdWJtaXR0ZWQuXG4gICAgICBpZiAodHlwZW9mIHRoaXMucmVkaXJlY3RVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5yZWRpcmVjdFVybCArICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7XG4gICAgICAgIHF1ZXJ5OiBxdWVyeVxuICAgICAgfSwgcXVlcnksICc/JyArIHBhcmFtcy50b1N0cmluZygpKTtcblxuICAgICAgdGhpcy5zZWFyY2gocXVlcnkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQSBoZWxwZXIgbWV0aG9kIHRvIHdpcmUgdXAgb3VyIGF1dG8gY29tcGxldGUgb24gYW4gaW5wdXQgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U2VsZWN0b3IgQ1NTIHNlbGVjdG9yIHRvIGJpbmQgb3VyIGF1dG8gY29tcGxldGUgY29tcG9uZW50IHRvXG4gICAqL1xuICBpbml0QXV0b0NvbXBsZXRlKGlucHV0U2VsZWN0b3IpIHtcbiAgICB0aGlzLl9pbnB1dEVsID0gaW5wdXRTZWxlY3RvcjtcblxuICAgIGxldCBhdXRvQ29tcGxldGUgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXIuY3JlYXRlKCdBdXRvQ29tcGxldGUnLCB7XG4gICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICBjb250YWluZXI6ICcueWV4dC1zZWFyY2gtYXV0b2NvbXBsZXRlJyxcbiAgICAgIGJhcktleTogdGhpcy5fYmFyS2V5LFxuICAgICAgZXhwZXJpZW5jZUtleTogdGhpcy5fZXhwZXJpZW5jZUtleSxcbiAgICAgIHByb21wdEhlYWRlcjogdGhpcy5wcm9tcHRIZWFkZXIsXG4gICAgICBvcmlnaW5hbFF1ZXJ5OiB0aGlzLnF1ZXJ5LFxuICAgICAgaW5wdXRFbDogaW5wdXRTZWxlY3RvcixcbiAgICAgIG9uU3VibWl0OiAoKSA9PiB7XG4gICAgICAgIERPTS50cmlnZ2VyKCdmb3JtJywgJ3N1Ym1pdCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5KSB7XG4gICAgaWYgKHRoaXMuX3ZlcnRpY2FsS2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5jb3JlLnZlcnRpY2FsU2VhcmNoKHF1ZXJ5LCB0aGlzLl92ZXJ0aWNhbEtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5PVEUoYmlsbHkpIFRlbXBvcmFyeSBoYWNrIGZvciBERU1PXG4gICAgICAvLyBSZW1vdmUgbWUgYWZ0ZXIgdGhlIGRlbW9cbiAgICAgIGxldCBuYXYgPSB0aGlzLmNvbXBvbmVudE1hbmFnZXJcbiAgICAgICAgLmdldEFjdGl2ZUNvbXBvbmVudCgnTmF2aWdhdGlvbicpO1xuXG4gICAgICBpZiAobmF2KSB7XG4gICAgICAgIGxldCB0YWJzID0gbmF2LmdldFN0YXRlKCd0YWJzJyksXG4gICAgICAgICAgICB1cmxzID0ge307XG5cbiAgICAgICAgaWYgKHRhYnMgJiYgQXJyYXkuaXNBcnJheSh0YWJzKSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB0aGlzLmdldFVybFBhcmFtcyh0YWJzW2ldLnVybC5zcGxpdCgnPycpWzFdKTtcbiAgICAgICAgICAgIHBhcmFtcy5zZXQoJ3F1ZXJ5JywgcXVlcnkpO1xuXG4gICAgICAgICAgICBsZXQgdXJsID0gdGFic1tpXS5iYXNlVXJsO1xuICAgICAgICAgICAgaWYgKHBhcmFtcy50b1N0cmluZygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgdXJsICs9ICc/JyArIHBhcmFtcy50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXJsc1t0YWJzW2ldLmNvbmZpZ0lkXSA9IHVybDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29yZS5zZWFyY2gocXVlcnksIHVybHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb3JlLnNlYXJjaChxdWVyeSk7XG4gICAgfVxuICB9XG5cbiAgc2V0U3RhdGUoZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHtcbiAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxuICAgICAgc2VhcmNoVGV4dDogdGhpcy5zZWFyY2hUZXh0LFxuICAgICAgcXVlcnk6IHRoaXMucXVlcnlcbiAgICB9LCBkYXRhKSlcbiAgfVxuXG4gIGdldFVybFBhcmFtcyh1cmwpIHtcbiAgICB1cmwgPSB1cmwgfHwgd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7XG4gICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXModXJsKTtcbiAgfVxuXG4gIGJpbmRCcm93c2VySGlzdG9yeSgpIHtcbiAgICBET00ub24od2luZG93LCAncG9wc3RhdGUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5nZXRVcmxQYXJhbXMoKS5nZXQoJ3F1ZXJ5Jyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcXVlcnk6IHRoaXMucXVlcnlcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNlYXJjaCh0aGlzLnF1ZXJ5KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi9kb20vZG9tJztcblxuY29uc3QgS2V5cyA9IHtcbiAgQkFDS1NQQUNFOiA4LFxuICBUQUI6IDksXG4gIEVOVEVSOiAxMyxcbiAgU0hJRlQ6IDE2LFxuICBDVFJMOiAxNyxcbiAgQUxUOiAxOCxcbiAgRVNDQVBFOiAyNyxcblxuICBMRUZUOiAzNyxcbiAgUklHSFQ6IDM5LFxuICBVUDogMzgsXG5cbiAgREVMRVRFOiA0NixcbiAgRE9XTjogNDAsXG4gIExFRlRfT1NfS0VZOiA5MSxcbiAgUklHSFRfT1NfS0VZOiA5MixcbiAgU0VMRUNUX0tFWTogOTNcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b0NvbXBsZXRlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cylcblxuICAgIC8qKlxuICAgICAqIFRoZSBgYmFyS2V5YCBpbiB0aGUgdmVydGljYWwgc2VhcmNoIHRvIHVzZSBmb3IgYXV0by1jb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fYmFyS2V5ID0gb3B0cy5iYXJLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBgZXhwZXJpZW5jZUtleWAgb2YgdGhlIHZlcnRpY2FsIHNlYXJjaCB0byB1c2UgZm9yIGF1dG8tY29tcGxldGVcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2V4cGVyaWVuY2VLZXkgPSBvcHRzLmV4cGVyaWVuY2VLZXkgfHwgbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBpbnB1dCBlbCBzZWxlY3RvciBmb3IgYXV0byBjb21wbGV0ZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5faW5wdXRFbCA9IG9wdHMuaW5wdXRFbCB8fCAnLmpzLXlleHQtcXVlcnknO1xuXG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIGZvciB0aGUgZGF0YS1zdG9yYWdlIHRvIGxpc3RlbiBmb3IgdXBkYXRlcyBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGxldCBtb2R1bGVJZCA9ICdhdXRvY29tcGxldGUnO1xuICAgIGlmICh0aGlzLl9iYXJLZXkgIT09IHVuZGVmaW5lZCAmJiB0aGlzLl9iYXJLZXkgIT09IG51bGwpIHtcbiAgICAgIG1vZHVsZUlkID0gJ2F1dG9jb21wbGV0ZS4nICsgdGhpcy5fYmFyS2V5O1xuICAgIH1cbiAgICB0aGlzLm1vZHVsZUlkID0gbW9kdWxlSWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBoYW5kbGViYXJzIHRlbXBsYXRlIG5hbWUgdG8gdXNlIGZvciByZW5kZXJpbmdcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdzZWFyY2gvYXV0b2NvbXBsZXRlJztcblxuICAgIC8qKlxuICAgICAqIEFuIGludGVybmFsIHJlZmVyZW5jZSB0byB0aGUgaW5wdXQgdmFsdWUgd2hlbiB0eXBpbmcuXG4gICAgICogV2UgdXNlIHRoaXMgZm9yIHJlc2V0dGluZyB0aGUgc3RhdGUgb2YgdGhlIGlucHV0IHZhbHVlIHdoZW4gb3RoZXIgaW50ZXJhY3Rpb25zIChlLmcuIHJlc3VsdCBuYXZpZ2F0aW9uKVxuICAgICAqIGNoYW5nZSBiYXNlZCBvbiBpbnRlcmFjdGlvbnMuIEZvciBpbnN0YW5jZSwgaGl0dGluZyBlc2NhcGUgc2hvdWxkIHJlc2V0IHRoZSB2YWx1ZSB0byB0aGUgb3JpZ2luYWwgdHlwZWQgcXVlcnkuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9vcmlnaW5hbFF1ZXJ5ID0gb3B0cy5vcmlnaW5hbFF1ZXJ5IHx8ICcnO1xuXG4gICAgLyoqXG4gICAgICogVXNlZCBmb3Iga2V5Ym9hcmQgbmF2aWdhdGlvbiB0aHJvdWdoIHJlc3VsdHMuXG4gICAgICogQW4gaW50ZXJuYWwgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IHNlY3Rpb24gd2UncmUgbmF2aWdhdGluZyBpbi5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRoaXMuX3NlY3Rpb25JbmRleCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uIHRocm91Z2ggcmVzdWx0cy5cbiAgICAgKiBBbiBpbnRlcm5hbCByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgcmVzdWx0IGluZGV4IHdlJ3JlIG5hdmlnYXRpbmcgb24uXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9yZXN1bHRJbmRleCA9IC0xO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHF1ZXJ5IHRleHQgdG8gc2hvdyBhcyB0aGUgZmlyc3QgaXRlbSBmb3IgYXV0byBjb21wbGV0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnByb21wdEhlYWRlciA9IG9wdHMucHJvbXB0SGVhZGVyIHx8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBpbnZva2VkIHdoZW4gdGhlIGBFbnRlcmAga2V5IGlzIHByZXNzZWQgb24gYXV0byBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICB0aGlzLl9vblN1Ym1pdCA9IG9wdHMub25TdWJtaXQgfHwgZnVuY3Rpb24oKSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYWxpYXNlZCB1c2VkIGJ5IHRoZSBjb21wb25lbnQgbWFuYWdlciBmb3IgY3JlYXRpb24uXG4gICAqL1xuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdBdXRvQ29tcGxldGUnO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldFN0YXRlIGlzIG92ZXJyaWRkZW4gc28gdGhhdCB3ZSBjYW4gcHJvdmlkZSBhZGRpdGlvbmFsIG1ldGEgZGF0YVxuICAgKiB0byB0aGUgdGVtcGxhdGUgKGUuZy4gdGhlIHNlY3Rpb25JbmRleCBhbmQgcmVzdWx0SW5kZXgpLCBzaW5jZVxuICAgKiB0aG9zZSBhcmUgY2xpZW50LWludGVyYWN0aW9uIHNwZWNpZmljIHZhbHVlcyBhbmQgYXJlbid0IHJldHVybmVkIGZyb20gdGhlIHNlcnZlci5cbiAgICovXG4gIHNldFN0YXRlKGRhdGEpIHtcbiAgICBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgIHNlY3Rpb25JbmRleDogdGhpcy5fc2VjdGlvbkluZGV4LFxuICAgICAgcmVzdWx0SW5kZXg6IHRoaXMuX3Jlc3VsdEluZGV4LFxuICAgICAgcHJvbXB0SGVhZGVyOiB0aGlzLl9vcmlnaW5hbFF1ZXJ5Lmxlbmd0aCA9PT0gMCA/IHRoaXMucHJvbXB0SGVhZGVyIDogbnVsbFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB1cGRhdGVTdGF0ZSBpcyBhIGhlbHBlciB0byBhcHBseSB0aGUgY3VycmVudCBzdGF0ZSB3aXRoIG5ldyBjbGllbnQtc3RhdGUuXG4gICAqL1xuICB1cGRhdGVTdGF0ZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuX3N0YXRlLmdldCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBvbkNyZWF0ZSBpcyB0cmlnZ2VyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGNvbnN0cnVjdGVkIGZyb20gdGhlIGZyYW1ld29yay5cbiAgICogT25jZSB3ZSdyZSBpbml0YWxpemVkLCB3ZSB3aXJlIHVwIGFsbCBvZiBvdXIgdXNlciBpbnRlcmFjdGlvbnNcbiAgICovXG4gIG9uQ3JlYXRlKCkge1xuICAgIC8vIFVzZSB0aGUgY29udGV4dCBvZiB0aGUgcGFyZW50IGNvbXBvbmVudCB0byBmaW5kIHRoZSBpbnB1dCBub2RlLlxuICAgIGxldCBxdWVyeUlucHV0ID0gRE9NLnF1ZXJ5KHRoaXMuX3BhcmVudC5fY29udGFpbmVyLCB0aGlzLl9pbnB1dEVsKTtcbiAgICBpZiAoIXF1ZXJ5SW5wdXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGluaXRpYWxpemUgQXV0b0NvbXBsZXRlLiBDYW4gbm90IGZpbmQge0hUTUxFbGVtZW50fSBgJywgdGhpcy5faW5wdXRFbCwgJ2AuJylcbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIHRoZSBuYXRpdmUgYXV0byBjb21wbGV0ZVxuICAgIERPTS5hdHRyKHF1ZXJ5SW5wdXQsICdhdXRvQ29tcGxldGUnLCAnb2ZmJyk7XG5cbiAgICAvLyBUaGUgdXNlciBleGl0cyB0aGUgaW5wdXQsIHNvIHdlIHdhbnQgdG8gcmVzZXQgdGhlIHN0YXRlIGFuZCBjbG9zZVxuICAgIC8vIHRoZSBhdXRvIGNvbXBsZXRlXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdibHVyJywgKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gV2hlbiBhIHVzZXIgZm9jdXNlcyB0aGUgaW5wdXQsIHdlIHNob3VsZCBwb3B1bGF0ZSB0aGUgYXV0b2NvbXBsZXRlIGJhc2VkXG4gICAgLy8gb24gdGhlIGN1cnJlbnQgdmFsdWVcbiAgICBET00ub24ocXVlcnlJbnB1dCwgJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgdGhpcy5jb3JlLmF1dG9Db21wbGV0ZShxdWVyeUlucHV0LnZhbHVlLCB0aGlzLl9leHBlcmllbmNlS2V5LCB0aGlzLl9iYXJLZXkpO1xuICAgIH0pO1xuXG4gICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gbmF2aWdhdGUgYmV0d2VlbiB0aGUgcmVzdWx0cyB1c2luZyB0aGUga2V5Ym9hcmRcbiAgICBET00ub24ocXVlcnlJbnB1dCwgJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICB0aGlzLmhhbmRsZU5hdmlnYXRlUmVzdWx0cyhlLmtleUNvZGUsIGUpO1xuICAgIH0pO1xuXG4gICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gc2VsZWN0IGEgcmVzdWx0IHdpdGggdGhlIG1vdXNlXG4gICAgRE9NLmRlbGVnYXRlKHRoaXMuX2NvbnRhaW5lciwgJy5qcy15ZXh0LWF1dG9jb21wbGV0ZS1vcHRpb24nLCAnbW91c2Vkb3duJywgKGV2dCwgdGFyZ2V0KSA9PiB7XG4gICAgICBsZXQgZGF0YSA9IHRhcmdldC5kYXRhc2V0LFxuICAgICAgICAgIHZhbCA9IGRhdGEudmFsdWUsXG4gICAgICAgICAgZmlsdGVyID0gSlNPTi5wYXJzZShkYXRhLmZpbHRlcik7XG5cbiAgICAgIHRoaXMudXBkYXRlUXVlcnkodmFsKTtcbiAgICAgIHRoaXMuX29uU3VibWl0KCk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIHRoZSB1c2VyIGlzIHR5cGluZyBpbiB0aGUgaW5wdXQsIHByb2Nlc3MgdGhlIGF1dG8gY29tcGxldGUuXG4gICAgRE9NLm9uKHF1ZXJ5SW5wdXQsICdrZXl1cCcsIChlKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZVR5cGluZyhlLmtleUNvZGUsIHF1ZXJ5SW5wdXQudmFsdWUsIGUpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBjbG9zZSB3aWxsIGhpZGUgdGhlIGF1dG8gY29tcGxldGUgcmVzdWx0cyBhbmQgcmVzZXQgdGhlIHN0YXRlLlxuICAgKi9cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7fSk7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlc2V0cyB0aGUgY2xpZW50IHN0YXRlIHRvIHRoZWlyIG9yaWdpbmFsIHZhbHVlcyBhbmQgdHJpZ2dlcnNcbiAgICogYSB0ZW1wbGF0ZS1yZXJlbmRlciB2aWEgdXBkYXRlU3RhdGVcbiAgICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSAwO1xuICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gLTE7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhlbHBlciBtZXRob2QgdG8gdXBkYXRlIHRoZSBpbnB1dCB0ZXh0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRfdmFsdWUgT3B0aW9uIHZhbHVlIHByb3ZpZGVkLlxuICAgKiBJZiBubyB2YWx1ZSBwcm92aWRlZCwgd2UnbGwgdHJ5IHRvIGZpbmQgaXQgYmFzZWQgb24gdGhlIHNlbGVjdGlvbiBpbmRleGVzLlxuICAgKi9cbiAgdXBkYXRlUXVlcnkob3B0X3ZhbHVlKSB7XG4gICAgLy8gT25seSB3YW50IHRvIHVwZGF0ZSB0aGUgcXVlcnkgc3RyaW5nIGlmIHRoZXJlcyBhIHZhbHVlLlxuICAgIC8vIElmIG9uZSBpcyBwcm92aWRlZCwgZ3JlYXQuXG4gICAgLy8gT3RoZXJ3aXNlLCBsZXRzIHRyeSB0byBmaW5kIGl0IGZyb20gdGhlIGN1cnJlbnQgc2VsZWN0aW9uIGluIHRoZSByZXN1bHRzLlxuICAgIGlmIChvcHRfdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IHNlY3Rpb25zID0gdGhpcy5fc3RhdGUuZ2V0KCdzZWN0aW9ucycpLFxuICAgICAgICAgIHJlc3VsdHMgPSBzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHM7XG4gICAgICBvcHRfdmFsdWUgPSByZXN1bHRzW3RoaXMuX3Jlc3VsdEluZGV4XS5zaG9ydFZhbHVlO1xuICAgIH1cblxuICAgIGxldCBxdWVyeUVsID0gRE9NLnF1ZXJ5KHRoaXMuX3BhcmVudC5fY29udGFpbmVyLCAnLmpzLXlleHQtcXVlcnknKTtcbiAgICBxdWVyeUVsLnZhbHVlID0gb3B0X3ZhbHVlO1xuICB9XG5cbiAgaGFuZGxlVHlwaW5nKGtleSwgdmFsdWUsIGUpIHtcbiAgICBsZXQgaWdub3JlZEtleXMgPSBbXG4gICAgICBLZXlzLkRPV04sXG4gICAgICBLZXlzLlVQLFxuICAgICAgS2V5cy5DVFJMLFxuICAgICAgS2V5cy5BTFQsXG4gICAgICBLZXlzLlNISUZULFxuICAgICAgS2V5cy5MRUZULFxuICAgICAgS2V5cy5SSUdIVCxcbiAgICAgIEtleXMuTEVGVF9PU19LRVksXG4gICAgICBLZXlzLlJJR0hUX09TX0tFWSxcbiAgICAgIEtleXMuU0VMRUNUX0tFWVxuICAgIF07XG5cbiAgICBpZiAoaWdub3JlZEtleXMuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBVc2VyIGVzY2FwZXMgb3V0IG9mIGF1dG8gY29tcGxldGUsIHNvIHdlIHJlc2V0IGl0IHRvIHRoZSBvcmlnaW5hbCBpbnB1dFxuICAgIGlmIChrZXkgPT09IEtleXMuRVNDQVBFKSB7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHRoaXMuX29yaWdpbmFsUXVlcnkpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRhYmJpbmcgb3V0IG9yIGVudGVyIHNob3VsZCBjbG9zZSB0aGUgYXV0byBjb21wbGV0ZS5cbiAgICBpZiAoa2V5ID09PSBLZXlzLkVOVEVSIHx8IGtleSA9PT0gS2V5cy5UQUIpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIG9yaWdpbmFsIHZhbHVlIGJhc2VkIG9uIHRoZSB1c2VyIGlucHV0XG4gICAgdGhpcy5fb3JpZ2luYWxRdWVyeSA9IHZhbHVlO1xuXG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHRoaXMuY29yZS5hdXRvQ29tcGxldGUodmFsdWUsIHRoaXMuX2V4cGVyaWVuY2VLZXksIHRoaXMuX2JhcktleSk7XG4gIH1cblxuICBoYW5kbGVOYXZpZ2F0ZVJlc3VsdHMoa2V5LCBlKSB7XG4gICAgbGV0IHNlY3Rpb25zID0gdGhpcy5fc3RhdGUuZ2V0KCdzZWN0aW9ucycpO1xuICAgIGlmIChzZWN0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IHNlY3Rpb25zLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdHMgPSBzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHM7XG4gICAgaWYgKGtleSA9PT0gS2V5cy5VUCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHRoaXMuX3Jlc3VsdEluZGV4IDw9IDApIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlY3Rpb25JbmRleCA+IDApIHtcbiAgICAgICAgICB0aGlzLl9zZWN0aW9uSW5kZXggLS07XG4gICAgICAgICAgdGhpcy5fcmVzdWx0SW5kZXggPSBzZWN0aW9uc1t0aGlzLl9zZWN0aW9uSW5kZXhdLnJlc3VsdHMubGVuZ3RoIC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KHRoaXMuX29yaWdpbmFsUXVlcnkpO1xuICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVRdWVyeSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVzdWx0SW5kZXggLS07XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gS2V5cy5ET1dOKSB7XG4gICAgICBpZiAodGhpcy5fcmVzdWx0SW5kZXggPj0gcmVzdWx0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWN0aW9uSW5kZXggPCBzZWN0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgdGhpcy5fc2VjdGlvbkluZGV4ICsrO1xuICAgICAgICAgIHRoaXMuX3Jlc3VsdEluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KCk7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZXN1bHRJbmRleCArKztcbiAgICAgIHRoaXMudXBkYXRlUXVlcnkoKTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdEFuc3dlckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5tb2R1bGVJZCA9ICdkaXJlY3RBbnN3ZXInO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3Jlc3VsdHMvZGlyZWN0YW5zd2VyJztcbiAgfVxuXG4gIGJlZm9yZU1vdW50KCkge1xuICAgIGlmICghdGhpcy5oYXNTdGF0ZSgnYW5zd2VyJykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ0RpcmVjdEFuc3dlcic7XG4gIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdyZXN1bHRzL3Jlc3VsdHNpdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ1Jlc3VsdHNJdGVtQ29tcG9uZW50JztcbiAgfVxufSIsImltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNJdGVtQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncmVzdWx0cy9sb2NhdGlvbnJlc3VsdHNpdGVtJ1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cbn1cbiIsImltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCBleHRlbmRzIFJlc3VsdHNJdGVtQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncmVzdWx0cy9ldmVudHJlc3VsdHNpdGVtJ1xuICB9XG5cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cbn1cbiIsImltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBSZXN1bHRzSXRlbUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3Jlc3VsdHMvcGVvcGxlcmVzdWx0c2l0ZW0nXG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCc7XG4gIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHNpdGVtY29tcG9uZW50JztcbmltcG9ydCBMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vbG9jYXRpb25yZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5pbXBvcnQgRXZlbnRSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL2V2ZW50cmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcGVvcGxlcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuXG5jb25zdCBSZXN1bHRUeXBlID0ge1xuICBFVkVOVDogJ2V2ZW50JyxcbiAgTE9DQVRJT046ICdsb2NhdGlvbicsXG4gIFBFT1BMRTogJ3Blb3BsZSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdHNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMubW9kdWxlSWQgPSAndmVydGljYWxSZXN1bHRzJztcblxuICAgIHRoaXMuX3RlbXBsYXRlTmFtZSA9ICdyZXN1bHRzL3Jlc3VsdHMnO1xuXG4gICAgdGhpcy5saW1pdCA9IG9wdHMubGltaXQgfHwgNTtcblxuICAgIHRoaXMuX2l0ZW1Db25maWcgPSB7XG4gICAgICBnbG9iYWw6IHtcbiAgICAgICAgcmVuZGVyOiBudWxsLFxuICAgICAgICB0ZW1wbGF0ZTogbnVsbFxuICAgICAgfSxcbiAgICAgIFtFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50LnR5cGVdOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH0sXG4gICAgICBbTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudC50eXBlXToge1xuICAgICAgICByZW5kZXI6IG51bGwsXG4gICAgICAgIHRlbXBsYXRlOiBudWxsXG4gICAgICB9LFxuICAgICAgW1Blb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50LnR5cGVdOiB7XG4gICAgICAgIHJlbmRlcjogbnVsbCxcbiAgICAgICAgdGVtcGxhdGU6IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0cy5yZW5kZXJJdGVtID09PSB1bmRlZmluZWQgJiYgb3B0cy5fcGFyZW50T3B0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcHRzLnJlbmRlckl0ZW0gPSBvcHRzLl9wYXJlbnRPcHRzLnJlbmRlckl0ZW07XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuaXRlbVRlbXBsYXRlID09PSB1bmRlZmluZWQgJiYgb3B0cy5fcGFyZW50T3B0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcHRzLml0ZW1UZW1wbGF0ZSA9IG9wdHMuX3BhcmVudE9wdHMuaXRlbVRlbXBsYXRlO1xuICAgIH1cblxuICAgIHRoaXMuY29uZmlndXJlSXRlbSh7XG4gICAgICByZW5kZXI6IG9wdHMucmVuZGVySXRlbSxcbiAgICAgIHRlbXBsYXRlOiBvcHRzLml0ZW1UZW1wbGF0ZVxuICAgIH0pO1xuICB9XG5cbiAgbW91bnQoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZ2V0U3RhdGUoKSkubGVuZ3RoID4gMCkge1xuICAgICAgc3VwZXIubW91bnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFN0YXRlKGRhdGEsIHZhbCkge1xuICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgIGluY2x1ZGVNYXA6IHRoaXMuX29wdHMuaW5jbHVkZU1hcCxcbiAgICAgIG1hcENvbmZpZzogdGhpcy5fb3B0cy5tYXBDb25maWdcbiAgICB9KSwgdmFsKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ1ZlcnRpY2FsUmVzdWx0cyc7XG4gIH1cblxuICBjb25maWd1cmVJdGVtKGNvbmZpZykge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5faXRlbUNvbmZpZy5nbG9iYWwucmVuZGVyID0gY29uZmlnLnJlbmRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQga2V5IGluIGNvbmZpZy5yZW5kZXIpIHtcbiAgICAgICAgdGhpcy5zZXRJdGVtUmVuZGVyKGtleSwgY29uZmlnLnJlbmRlcltrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2l0ZW1Db25maWcuZ2xvYmFsLnRlbXBsYXRlID0gY29uZmlnLnRlbXBsYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29uZmlnLnRlbXBsYXRlKSB7XG4gICAgICAgIHRoaXMuc2V0SXRlbVRlbXBsYXRlKGtleSwgY29uZmlnLnRlbXBsYXRlW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldEl0ZW1UZW1wbGF0ZSh0eXBlLCB0ZW1wbGF0ZSkge1xuICAgIGxldCBjbGF6eiA9IHRoaXMuZ2V0SXRlbUNvbXBvbmVudCh0eXBlKTtcbiAgICB0aGlzLl9pdGVtQ29uZmlnW2NsYXp6LnR5cGVdLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gIH1cblxuICBzZXRJdGVtUmVuZGVyKHR5cGUsIHJlbmRlcikge1xuICAgIGxldCBjbGF6eiA9IHRoaXMuZ2V0SXRlbUNvbXBvbmVudCh0eXBlKTtcbiAgICB0aGlzLl9pdGVtQ29uZmlnW2NsYXp6LnR5cGVdLnJlbmRlciA9IHJlbmRlcjtcbiAgfVxuXG4gIGdldEl0ZW1Db21wb25lbnQodHlwZSkge1xuICAgIGxldCBjb21wID0gUmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFJlc3VsdFR5cGUuRVZFTlQ6XG4gICAgICAgIGNvbXAgPSBFdmVudFJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUmVzdWx0VHlwZS5MT0NBVElPTjpcbiAgICAgICAgY29tcCA9IExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSZXN1bHRUeXBlLlBFT1BMRTpcbiAgICAgICAgY29tcCA9IFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50O1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcDtcbiAgfVxuXG4gIGFkZENoaWxkKGRhdGEsIHR5cGUpIHtcbiAgICBsZXQgY2xhenogPSB0aGlzLmdldEl0ZW1Db21wb25lbnQoZGF0YS50eXBlKTtcbiAgICBpZiAoY2xhenopIHtcbiAgICAgIHR5cGUgPSBjbGF6ei50eXBlO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IHRoZSBwcm9wZXIgaXRlbSByZW5kZXJzIHRvIHRoZSB0aGUgY29tcG9uZW50c1xuICAgIC8vIGhhdmUganVzdCBiZWVuIGNvbnN0cnVjdGVkLiBQcmlvcml0aXplIGdsb2JhbCBvdmVyIGluZGl2aWR1YWwgaXRlbXMuXG4gICAgbGV0IGNvbXAgPSBzdXBlci5hZGRDaGlsZChkYXRhLCB0eXBlKSxcbiAgICAgICAgZ2xvYmFsQ29uZmlnID0gdGhpcy5faXRlbUNvbmZpZy5nbG9iYWwsXG4gICAgICAgIGl0ZW1Db25maWcgPSB0aGlzLl9pdGVtQ29uZmlnW2NsYXp6LnR5cGVdO1xuXG4gICAgbGV0IGhhc0dsb2JhbFJlbmRlciA9IHR5cGVvZiBnbG9iYWxDb25maWcucmVuZGVyID09PSAnZnVuY3Rpb24nLFxuICAgICAgICBoYXNHbG9iYWxUZW1wbGF0ZSA9IHR5cGVvZiBnbG9iYWxDb25maWcudGVtcGxhdGUgPT09ICdzdHJpbmcnO1xuXG4gICAgaWYgKGhhc0dsb2JhbFJlbmRlcikge1xuICAgICAgY29tcC5zZXRSZW5kZXIoZ2xvYmFsQ29uZmlnLnJlbmRlcik7XG4gICAgfVxuXG4gICAgaWYgKGhhc0dsb2JhbFRlbXBsYXRlKSB7XG4gICAgICBjb21wLnNldFRlbXBsYXRlKGdsb2JhbENvbmZpZy50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKCFpdGVtQ29uZmlnKSB7XG4gICAgICByZXR1cm4gY29tcDtcbiAgICB9XG5cbiAgICBpZiAoIWhhc0dsb2JhbFJlbmRlciAmJiBpdGVtQ29uZmlnLnJlbmRlcikge1xuICAgICAgY29tcC5zZXRSZW5kZXIoaXRlbUNvbmZpZy5yZW5kZXIpXG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdGVtcGxhdGUgc3BlY2lmaWMgc2l0dWF0aW9uXG4gICAgaWYgKCFoYXNHbG9iYWxUZW1wbGF0ZSAmJiBpdGVtQ29uZmlnLnRlbXBsYXRlKSB7XG4gICAgICBjb21wLnNldFRlbXBsYXRlKGl0ZW1Db25maWcudGVtcGxhdGUpXG4gICAgfVxuICAgIHJldHVybiBjb21wO1xuICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbml2ZXJzYWxSZXN1bHRzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG4gICAgc3VwZXIob3B0cyk7XG5cbiAgICB0aGlzLm1vZHVsZUlkID0gJ3VuaXZlcnNhbFJlc3VsdHMnO1xuXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3Jlc3VsdHMvdW5pdmVyc2FscmVzdWx0cyc7XG5cbiAgICB0aGlzLl9saW1pdCA9IG9wdHMubGltaXQgfHwgMTA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdVbml2ZXJzYWxSZXN1bHRzJztcbiAgfVxuXG4gIGluaXQob3B0cykge1xuICAgIHN1cGVyLmluaXQob3B0cyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRDaGlsZChkYXRhLCB0eXBlKSB7XG4gICAgbGV0IG9wdHMgPSB0aGlzLmdldENoaWxkQ29uZmlnKFtkYXRhWyd2ZXJ0aWNhbENvbmZpZ0lkJ11dKTtcbiAgICByZXR1cm4gc3VwZXIuYWRkQ2hpbGQoZGF0YSwgdHlwZSwgb3B0cyk7XG4gIH1cblxuICBnZXRDaGlsZENvbmZpZyhjb25maWdJZCkge1xuICAgIGxldCBjb25maWcgPSB0aGlzLl9vcHRzLmNvbmZpZztcbiAgICBpZiAoY29uZmlnID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX29wdHNbJ2NvbmZpZyddW2NvbmZpZ0lkXSB8fCB0aGlzLl9vcHRzWydjb25maWcnXTtcbiAgfVxufSIsIi8qKlxuICogVGhlIGNvcmUgTWFwUHJvdmlkZXIgaW50ZXJmYWNlIHRvIGltcGxlbWVudCBmb3IgdmFyaW91cyB0eXBlcyBvZiBtYXAgcHJvdmlkZXJzLlxuICogSW1wbGVtZW50YXRpb25zIHNob3VsZCBleHRlbmQgdGhpcyBpbnRlcmZhY2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBUaGUgQVBJIEtleSB1c2VkIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBtYXAgcHJvdmlkZXJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX2FwaUtleSA9IG9wdHMubWFwQXBpS2V5O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgbWFwIHRvIGFwcGVuZCB0byB0aGUgRE9NLCBkZWZhdWx0cyB0byAxMDAlXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9oZWlnaHQgPSBvcHRzLmhlaWdodCB8fCAnMTAwJSc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgdGhlIG1hcCB0byBhcHBlbmQgdG8gdGhlIERPTSwgZGVmYXVsdHMgdG8gMTAwJVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy5fd2lkdGggPSBvcHRzLndpZHRoIHx8ICcxMDAlJztcblxuICAgIC8qKlxuICAgICAqIFRoZSB6b29tIGxldmVsIG9mIHRoZSBtYXAsIGRlZmF1bHRzIHRvIDIwXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl96b29tID0gb3B0cy56b29tIHx8IDIwO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIHVuZGVybHlpbmcgbWFwIGluc3RhbmNlLCBjcmVhdGVkIGJ5IHRoZSBleHRlcm5hbCBsaWIuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLl9tYXAgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGVtcG9yYXJ5IGJvb2xlYW4gdHJhY2tpbmcgd2hldGhlciBvciBub3QgdGhlIGV4dGVybmFsIEpTIGxpYnJhcnkgaXMgbG9hZGVkIChzZWUgVE9ETyBiZWxvdylcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLl9pc0xvYWRlZCA9IGZhbHNlO1xuICB9XG5cbiAgaXNMb2FkZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzTG9hZGVkO1xuICB9XG5cbiAgbG9hZEpTKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCBNZXRob2Q6IGxvYWRKUycpO1xuICB9XG5cbiAgaW5pdChtYXBEYXRhKSB7XG4gICAgLy8gVE9ETyhiaWxseSkgVGhpcyBzaG91bGQgYmUgYmFzZWQgb2ZmIGEgcHJvbWlzZSB0aGF0IGdldHMgY3JlYXRlZCBmcm9tIGxvYWRKU1xuICAgIHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCBNZXRob2Q6IGluaXQnKVxuICB9XG59IiwiaW1wb3J0IE1hcFByb3ZpZGVyIGZyb20gJy4vbWFwcHJvdmlkZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi8uLi9kb20vZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29vZ2xlTWFwUHJvdmlkZXIgZXh0ZW5kcyBNYXBQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcihvcHRzKTtcbiAgfVxuXG4gIGxvYWRKUyhvbkxvYWQpIHtcbiAgICBsZXQgc2NyaXB0ID0gRE9NLmNyZWF0ZUVsKCdzY3JpcHQnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWpzJyxcbiAgICAgIG9ubG9hZDogKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgIG9uTG9hZCgpO1xuICAgICAgfSxcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgc3JjOiAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT0nK3RoaXMuX2FwaUtleVxuICAgIH0pO1xuXG4gICAgRE9NLmFwcGVuZCgnYm9keScsIHNjcmlwdCk7XG4gIH1cblxuICBpbml0KGVsLCBtYXBEYXRhKSB7XG4gICAgaWYgKCFtYXBEYXRhIHx8IG1hcERhdGEubWFwTWFya2Vycy5sZW5ndGggPD0gMCkge1xuICAgICAgdGhpcy5fbWFwID0gbnVsbDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIE5PVEUoYmlsbHkpIFRoaXMgdGltZW91dCBpcyBhIGhhY2sgZm9yIGRlYWxpbmcgd2l0aCBhc3luYyBuYXR1cmUuXG4gICAgLy8gT25seSBoZXJlIGZvciBkZW1vIHB1cnBvc2VzLCBzbyB3ZSdsbCBmaXggbGF0ZXIuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgY29udGFpbmVyID0gRE9NLnF1ZXJ5KGVsKTtcbiAgICAgIERPTS5jc3MoY29udGFpbmVyLCB7XG4gICAgICAgIHdpZHRoOiB0aGlzLl93aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLl9oZWlnaHRcbiAgICAgIH0pO1xuXG5cbiAgICAgIHRoaXMubWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChjb250YWluZXIsIHtcbiAgICAgICAgem9vbTogdGhpcy5fem9vbVxuICAgICAgfSk7XG5cbiAgICAgIGxldCBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG4gICAgICBpZiAobWFwRGF0YSAmJiBtYXBEYXRhLm1hcE1hcmtlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgbWFya2VycyA9IG1hcERhdGEubWFwTWFya2VycztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXJrZXJzLmxlbmd0aDsgaSArKykge1xuXG4gICAgICAgICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgbWFwOiB0aGlzLm1hcCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICAgIGxhdDogbWFya2Vyc1tpXS5sYXRpdHVkZSxcbiAgICAgICAgICAgICAgbG5nOiBtYXJrZXJzW2ldLmxvbmdpdHVkZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBib3VuZHMuZXh0ZW5kKG1hcmtlci5wb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKGJvdW5kcyk7XG4gICAgfSwgMTAwKTtcbiAgfVxufVxuIiwiaW1wb3J0IE1hcFByb3ZpZGVyIGZyb20gJy4vbWFwcHJvdmlkZXInO1xuaW1wb3J0IERPTSBmcm9tICcuLi8uLi8uLi9kb20vZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwQm94TWFwUHJvdmlkZXIgZXh0ZW5kcyBNYXBQcm92aWRlciB7XG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBzdXBlcihvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIHRoZSBleHRlcm5hbCBKUyBMaWJyYXJ5XG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uTG9hZCBBbiBvcHRpb25hbCBjYWxsYmFjayB0byBpbnZva2Ugb25jZSB0aGUgSlMgaXMgbG9hZGVkLlxuICAgKi9cbiAgbG9hZEpTKG9uTG9hZCkge1xuICAgIGxldCBzY3JpcHQgPSBET00uY3JlYXRlRWwoJ3NjcmlwdCcsIHtcbiAgICAgIGlkOiAneWV4dC1tYXAtanMnLFxuICAgICAgb25sb2FkOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2lzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgbWFwYm94Z2wuYWNjZXNzVG9rZW4gPSB0aGlzLl9hcGlLZXk7XG5cbiAgICAgICAgb25Mb2FkKCk7XG4gICAgICB9LFxuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBzcmM6ICdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MC40NC4xL21hcGJveC1nbC5qcydcbiAgICB9KTtcblxuICAgIGxldCBjc3MgPSBET00uY3JlYXRlRWwoJ2xpbmsnLCB7XG4gICAgICBpZDogJ3lleHQtbWFwLWNzcycsXG4gICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgIGhyZWY6ICdodHRwczovL2FwaS5tYXBib3guY29tL21hcGJveC1nbC1qcy92MC40NC4xL21hcGJveC1nbC5jc3MnXG4gICAgfSk7XG5cbiAgICBET00uYXBwZW5kKCdib2R5JywgY3NzKTtcbiAgICBET00uYXBwZW5kKCdib2R5Jywgc2NyaXB0KTtcbiAgfVxuXG4gIGluaXQoZWwsIG1hcERhdGEpIHtcbiAgICBpZiAoIW1hcERhdGEgfHwgbWFwRGF0YS5tYXBNYXJrZXJzLmxlbmd0aCA8PSAwKSB7XG4gICAgICB0aGlzLl9tYXAgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbGV0IGNvbnRhaW5lciA9IERPTS5xdWVyeShlbCk7XG4gICAgRE9NLmNzcyhjb250YWluZXIsIHtcbiAgICAgIHdpZHRoOiB0aGlzLl93aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5faGVpZ2h0XG4gICAgfSk7XG5cbiAgICB0aGlzLl9tYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgem9vbTogdGhpcy5fem9vbSxcbiAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXY5JyxcbiAgICAgIGNlbnRlcjogW21hcERhdGEubWFwQ2VudGVyLmxvbmdpdHVkZSwgbWFwRGF0YS5tYXBDZW50ZXIubGF0aXR1ZGVdXG4gICAgfSk7XG5cbiAgICB0aGlzLl9tYXAub24oJ2xvYWQnLCAoKSA9PiB7XG4gICAgICBpZiAobWFwRGF0YSAmJiBtYXBEYXRhLm1hcE1hcmtlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgbWFya2VycyA9IG1hcERhdGEubWFwTWFya2VycztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXJrZXJzLmxlbmd0aDsgaSArKykge1xuXG4gICAgICAgICAgbGV0IGNvb3JkcyA9IG5ldyBtYXBib3hnbC5MbmdMYXQoXG4gICAgICAgICAgICBtYXJrZXJzW2ldLmxvbmdpdHVkZSxcbiAgICAgICAgICAgIG1hcmtlcnNbaV0ubGF0aXR1ZGUpXG5cbiAgICAgICAgICBsZXQgbWFya2VyID0gbmV3IG1hcGJveGdsLk1hcmtlcigpLnNldExuZ0xhdChjb29yZHMpO1xuICAgICAgICAgIG1hcmtlci5hZGRUbyh0aGlzLl9tYXApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCBET00gZnJvbSAnLi4vLi4vZG9tL2RvbSc7XG5cbmltcG9ydCBHb29nbGVNYXBQcm92aWRlciBmcm9tICcuL21hcHMvZ29vZ2xlbWFwcHJvdmlkZXInO1xuaW1wb3J0IE1hcEJveE1hcFByb3ZpZGVyIGZyb20gJy4vbWFwcy9tYXBib3htYXBwcm92aWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgLyoqXG4gICAgICogQmluZCB0aGlzIGNvbXBvbmVudCB0byBsaXN0ZW4gdG8gdGhlIHN0b3JhZ2UgYmFzZWQgb24gdGhpcyBrZXlcbiAgICAgKi9cbiAgICB0aGlzLm1vZHVsZUlkID0gJ3ZlcnRpY2FsUmVzdWx0cyc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCB0ZW1wbGF0ZSB0byB1c2UgdG8gcmVuZGVyIHRoaXMgY29tcG9uZW50XG4gICAgICovXG4gICAgdGhpcy5fdGVtcGxhdGVOYW1lID0gJ3Jlc3VsdHMvbWFwJztcblxuICAgIC8qKlxuICAgICAqIEFuIGFsaWFzZWQgdXNlZCB0byBkZXRlcm1pbmUgdGhlIHR5cGUgb2YgbWFwIHByb3ZpZGVyIHRvIHVzZVxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fbWFwUHJvdmlkZXIgPSBvcHRzLm1hcFByb3ZpZGVyO1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gYW4gaW5zdGFuY2Ugb2YgdGhlIHtNYXBQcm92aWRlcn0gdGhhdCdzIGNvbnN0cnVjdGVkXG4gICAgICogQHR5cGUge01hcFByb3ZpZGVyfVxuICAgICAqL1xuICAgIHRoaXMuX21hcCA9IG51bGw7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdNYXAnO1xuICB9XG5cbiAgb25DcmVhdGUoKSB7XG4gICAgaWYgKHRoaXMuX21hcFByb3ZpZGVyID09PSAnZ29vZ2xlJykge1xuICAgICAgdGhpcy5fbWFwID0gbmV3IEdvb2dsZU1hcFByb3ZpZGVyKHRoaXMuX29wdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9tYXAgPSBuZXcgTWFwQm94TWFwUHJvdmlkZXIodGhpcy5fb3B0cyk7XG4gICAgfVxuXG4gICAgdGhpcy5fbWFwLmxvYWRKUygoKSA9PiB7XG4gICAgICBsZXQgbWFwRGF0YSA9IHRoaXMuZ2V0U3RhdGUoJ21hcCcpO1xuICAgICAgaWYgKG1hcERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX21hcC5pbml0KHRoaXMuX2NvbnRhaW5lciwgbWFwRGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBvbk1vdW50KCkge1xuICAgIC8vIE5PVEUoYmlsbHkpIFRoaXMgaXMgdGVtcG9yYXJ5LCB3ZSBzaG91bGQgY3JlYXRlIGEgc2luZ2xlIHByb21pc2UgaW50ZXJmYWNlXG4gICAgLy8gZm9yIGluaXQgdG8gZGVhbCB3aXRoIHRoZSBpbnRlcm5hbCBqYXZhc2NyaXB0IGxvYWRpbmdcbiAgICBpZiAodGhpcy5fbWFwLmlzTG9hZGVkKCkpIHtcbiAgICAgIHRoaXMuX21hcC5pbml0KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5nZXRTdGF0ZSgnbWFwJykpO1xuICAgIH1cbiAgfVxuXG4gIHNldFN0YXRlKGRhdGEsIHZhbCkge1xuICAgIGlmIChPYmplY3Qua2V5cyhkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5zZXRTdGF0ZShPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgIG1hcENvbmZpZzoge1xuICAgICAgICBtYXBQcm92aWRlcjogdGhpcy5fbWFwUHJvdmlkZXIsXG4gICAgICAgIG1hcEFwaUtleTogdGhpcy5fbWFwQXBpS2V5XG4gICAgICB9XG4gICAgfSksIHZhbCk7XG4gIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgRE9NIGZyb20gJy4uLy4uL2RvbS9kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcbiAgICBzdXBlcihvcHRzKTtcblxuICAgIHRoaXMubW9kdWxlSWQgPSAndW5pdmVyc2FsUmVzdWx0cyc7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZU5hbWUgPSAncXVlc3Rpb25zL3N1Ym1pc3Npb24nO1xuXG4gICAgLyoqXG4gICAgICogUXVlc3Rpb24gc3VibWlzc2lvbiBpcyBiYXNlZCBvbiBhIGZvcm0gYXMgY29udGV4dC5cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gbmF0aXZlIGZvcm0gbm9kZSB3aXRoaW4gY29udGFpbmVyXG4gICAgICogQHR5cGUge3N0cmluZ30gQ1NTIHNlbGVjdG9yXG4gICAgICovXG4gICAgdGhpcy5fZm9ybUVsID0gb3B0cy5mb3JtU2VsZWN0b3IgfHwgJ2Zvcm0nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIGUtbWFpbCBhZGRyZXNzIGlucHV0XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIGBFbWFpbCBBZGRyZXNzYFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fZW1haWxMYWJlbCA9IG9wdHMuZW1haWxMYWJlbCB8fCAnKkVtYWlsIEFkZHJlc3M6JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB0byB1c2UgZm9yIHRoZSBuYW1lIGlucHV0XG4gICAgICogT3B0aW9uYWxseSBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHRzIHRvIGBOYW1lYFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5fbmFtZUxhYmVsID0gb3B0cy5uYW1lTGFiZWwgfHwgJ05hbWU6JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB0byB1c2UgZm9yIHRoZSBRdWVzdGlvblxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBgV2hhdCBpcyB5b3VyIHF1ZXN0aW9uP2BcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3F1ZXN0aW9uTGFiZWwgPSBvcHRzLnF1ZXN0aW9uTGFiZWwgfHwgJypXaGF0IGlzIHlvdXIgcXVlc3Rpb24/JztcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCB0byB1c2UgZm9yIHRoZSBQcml2YWN5IFBvbGljeVxuICAgICAqIE9wdGlvbmFsbHkgcHJvdmlkZWQsIG90aGVyd2lzZSBkZWZhdWx0cyB0byBgV2hhdCBpcyB5b3VyIHF1ZXN0aW9uP2BcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuX3ByaXZhY3lQb2xpY3lMYWJlbCA9IG9wdHMucHJpdmFjeVBvbGljeUxhYmVsIHx8ICdJIGFncmVlIHRvIG91ciBQcml2YWN5IFBvbGljeTonO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIFN1Ym1pdCBidXR0b25cbiAgICAgKiBPcHRpb25hbGx5IHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdHMgdG8gYFN1Ym1pdD9gXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLl9idXR0b25MYWJlbCA9IG9wdHMuYnV0dG9uTGFiZWwgfHwgJ1N1Ym1pdCc7XG4gIH1cblxuICBiZWZvcmVNb3VudCgpIHtcbiAgICAvLyBPbmx5IG1vdW50IG91ciBjb21wb25lbnQgaWYgdGhlIHF1ZXJ5IGhhcyBiZWVuIHRyaWdnZXJlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0aGlzLmdldFN0YXRlKCdoYXNRdWVyaWVkJykgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uTW91bnQoKSB7XG4gICAgdGhpcy5pbml0U3VibWl0KHRoaXMuX2Zvcm1FbCk7XG4gIH1cblxuICBpbml0U3VibWl0KGZvcm1TZWxlY3Rvcikge1xuICAgIHRoaXMuX2Zvcm1FbCA9IGZvcm1TZWxlY3RvcjtcblxuICAgIGxldCBmb3JtID0gRE9NLnF1ZXJ5KHRoaXMuX2NvbnRhaW5lciwgdGhpcy5fZm9ybUVsKTtcblxuICAgIERPTS5vbihmb3JtLCAnc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vIFRPRE8oYmlsbHkpIFNlcmlhbGl6ZSBmb3JtXG4gICAgICAvLyB0aGlzLmNvcmUuc3VibWl0UXVlc3Rpb24oZm9ybSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdRQVN1Ym1pc3Npb24nO1xuICB9XG5cbiAgc2V0U3RhdGUoZGF0YSwgdmFsKSB7XG4gICAgLy8gU2luY2Ugd2UncmUgYmluZGluZyB0byBzZWFyY2ggcmVzdWx0cyxcbiAgICAvLyBhbmQgd2Ugb25seSB3YW50IHRvIHNob3cgdGhlIFFBIHN1Ym1pc3Npb25cbiAgICByZXR1cm4gc3VwZXIuc2V0U3RhdGUoe1xuICAgICAgaGFzUXVlcmllZDogZGF0YS5zZWN0aW9ucyAhPT0gdW5kZWZpbmVkLFxuICAgICAgZW1haWxMYWJlbDogdGhpcy5fZW1haWxMYWJlbCxcbiAgICAgIG5hbWVMYWJlbDogdGhpcy5fbmFtZUxhYmVsLFxuICAgICAgcXVlc3Rpb25MYWJlbDogdGhpcy5fcXVlc3Rpb25MYWJlbCxcbiAgICAgIHByaXZhY3lQb2xpY3lMYWJlbDogdGhpcy5fcHJpdmFjeVBvbGljeUxhYmVsLFxuICAgICAgYnV0dG9uTGFiZWw6IHRoaXMuX2J1dHRvbkxhYmVsLFxuICAgICAgcXVlc3Rpb246IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpLmdldCgncXVlcnknKVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tICcuL2NvbXBvbmVudG1hbmFnZXInO1xuXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcblxuaW1wb3J0IE5hdmlnYXRpb25Db21wb25lbnQgZnJvbSAnLi9uYXZpZ2F0aW9uL25hdmlnYXRpb25jb21wb25lbnQnO1xuXG5pbXBvcnQgU2VhcmNoQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL3NlYXJjaGNvbXBvbmVudCc7XG5pbXBvcnQgQXV0b0NvbXBsZXRlQ29tcG9uZW50IGZyb20gJy4vc2VhcmNoL2F1dG9jb21wbGV0ZWNvbXBvbmVudCc7XG5cbmltcG9ydCBEaXJlY3RBbnN3ZXJDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2RpcmVjdGFuc3dlcmNvbXBvbmVudCc7XG5pbXBvcnQgUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcmVzdWx0c2NvbXBvbmVudCc7XG5pbXBvcnQgVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvdW5pdmVyc2FscmVzdWx0c2NvbXBvbmVudCc7XG5cbmltcG9ydCBSZXN1bHRzSXRlbUNvbXBvbmVudCBmcm9tICcuL3Jlc3VsdHMvcmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IExvY2F0aW9uUmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2xvY2F0aW9ucmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL2V2ZW50cmVzdWx0c2l0ZW1jb21wb25lbnQnO1xuaW1wb3J0IFBlb3BsZVJlc3VsdHNJdGVtQ29tcG9uZW50IGZyb20gJy4vcmVzdWx0cy9wZW9wbGVyZXN1bHRzaXRlbWNvbXBvbmVudCc7XG5cbmltcG9ydCBNYXBDb21wb25lbnQgZnJvbSAnLi9yZXN1bHRzL21hcGNvbXBvbmVudCc7XG5cbmltcG9ydCBRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQgZnJvbSAnLi9xdWVzdGlvbnMvcXVlc3Rpb25zdWJtaXNzaW9uY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9NQU5BR0VSID0gbmV3IENvbXBvbmVudE1hbmFnZXIoKVxuICAgICAgLy8gQ29yZSBDb21wb25lbnRcbiAgICAgIC5yZWdpc3RlcihDb21wb25lbnQpXG5cbiAgICAgIC8vIE5hdmlnYXRpb24gQ29tcG9uZW50c1xuICAgICAgLnJlZ2lzdGVyKE5hdmlnYXRpb25Db21wb25lbnQpXG5cbiAgICAgIC8vIFNlYXJjaCBDb21wb25lbnRzXG4gICAgICAucmVnaXN0ZXIoU2VhcmNoQ29tcG9uZW50KVxuICAgICAgLnJlZ2lzdGVyKEF1dG9Db21wbGV0ZUNvbXBvbmVudClcblxuICAgICAgLy8gUmVzdWx0cyBDb21wb25lbnRzXG4gICAgICAucmVnaXN0ZXIoRGlyZWN0QW5zd2VyQ29tcG9uZW50KVxuICAgICAgLnJlZ2lzdGVyKFVuaXZlcnNhbFJlc3VsdHNDb21wb25lbnQpXG4gICAgICAucmVnaXN0ZXIoUmVzdWx0c0NvbXBvbmVudClcbiAgICAgIC5yZWdpc3RlcihSZXN1bHRzSXRlbUNvbXBvbmVudClcbiAgICAgIC5yZWdpc3RlcihMb2NhdGlvblJlc3VsdHNJdGVtQ29tcG9uZW50KVxuICAgICAgLnJlZ2lzdGVyKEV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQpXG4gICAgICAucmVnaXN0ZXIoUGVvcGxlUmVzdWx0c0l0ZW1Db21wb25lbnQpXG5cbiAgICAgIC5yZWdpc3RlcihNYXBDb21wb25lbnQpXG5cbiAgICAgIC8vIFF1ZXN0aW9ucyBDb21wb25lbnRzXG4gICAgICAucmVnaXN0ZXIoUXVlc3Rpb25TdWJtaXNzaW9uQ29tcG9uZW50KSIsImltcG9ydCBDb3JlIGZyb20gJy4vY29yZS9jb3JlJztcblxuaW1wb3J0IHtcbiAgVGVtcGxhdGVMb2FkZXIsXG4gIENPTVBPTkVOVF9NQU5BR0VSLFxuICBSZW5kZXJlcnMsXG4gIERPTVxufSBmcm9tICcuL3VpL2luZGV4JztcblxuLyoqXG4gKiBPdXIgQVBJIHNob3VsZCBvbmx5IGJlIGluc3RhbnRpYWJsZSBvbmNlXG4gKiBAdHlwZSB7QU5TV0VSU30gVGhlIGluc3RhbmNlIG9mIEFOU1dFUlNcbiAqL1xuY2xhc3MgQW5zd2VycyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmICghQW5zd2Vycy5zZXRJbnN0YW5jZSh0aGlzKSkge1xuICAgICAgcmV0dXJuIEFuc3dlcnMuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIHJlZmVyZW5jZSBvZiB0aGUgcmVuZGVyZXIgdG8gdXNlIGZvciB0aGUgY29tcG9uZW50c1xuICAgICAqIFRoaXMgaXMgcHJvdmlkZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uLlxuICAgICAqIEB0eXBlIHtSZW5kZXJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVycy5IYW5kbGViYXJzKCk7XG5cbiAgICAvKipcbiAgICAgKiBBIGxvY2FsIHJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IG1hbmFnZXJcbiAgICAgKiBAdHlwZSB7Q29tcG9uZW50TWFuYWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbXBvbmVudHMgPSBDT01QT05FTlRfTUFOQUdFUjtcblxuICAgIC8qKlxuICAgICAqIEEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gaW52b2tlIG9uY2UgdGhlIGxpYnJhcnkgaXMgcmVhZHkuXG4gICAgICogVHlwaWNhbGx5IGZpcmVkIGFmdGVyIHRlbXBsYXRlcyBhcmUgZmV0Y2hlZCBmcm9tIHNlcnZlciBmb3IgcmVuZGVyaW5nLlxuICAgICAqL1xuICAgIHRoaXMuX29uUmVhZHkgPSBmdW5jdGlvbigpIHt9O1xuICB9XG5cbiAgc3RhdGljIHNldEluc3RhbmNlKGluc3RhbmNlKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldEluc3RhbmNlKG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgfVxuXG4gIGluaXQob3B0cykge1xuICAgIHRoaXMuY29tcG9uZW50cy5zZXRDb3JlKG5ldyBDb3JlKHtcbiAgICAgIGFwaUtleTogb3B0cy5hcGlLZXksXG4gICAgICBhbnN3ZXJzS2V5OiBvcHRzLmFuc3dlcnNLZXlcbiAgICB9KSlcbiAgICAuc2V0UmVuZGVyZXIodGhpcy5yZW5kZXJlcik7XG5cbiAgICB0aGlzLl9vblJlYWR5ID0gb3B0cy5vblJlYWR5IHx8IGZ1bmN0aW9uKCkge307XG5cbiAgICBpZiAob3B0cy51c2VUZW1wbGF0ZXMgPT09IGZhbHNlIHx8IG9wdHMudGVtcGxhdGVCdW5kbGUpIHtcbiAgICAgIGlmIChvcHRzLnRlbXBsYXRlQnVuZGxlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW5pdChvcHRzLnRlbXBsYXRlQnVuZGxlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fb25SZWFkeS5jYWxsKHRoaXMpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gVGVtcGxhdGVzIGFyZSBjdXJyZW50bHkgZG93bmxvYWRlZCBzZXBhcmF0ZWx5IGZyb20gdGhlIENPUkUgYW5kIFVJIGJ1bmRsZS5cbiAgICAvLyBGdXR1cmUgZW5oYW5jZW1lbnQgaXMgdG8gc2hpcCB0aGUgY29tcG9uZW50cyB3aXRoIHRlbXBsYXRlcyBpbiBhIHNlcGFyYXRlIGJ1bmRsZS5cbiAgICB0aGlzLnRlbXBsYXRlcyA9IG5ldyBUZW1wbGF0ZUxvYWRlcih7XG4gICAgICB0ZW1wbGF0ZVVybDogb3B0cy50ZW1wbGF0ZVVybFxuICAgIH0pLm9uTG9hZGVkKCh0ZW1wbGF0ZXMpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuaW5pdCh0ZW1wbGF0ZXMpO1xuXG4gICAgICB0aGlzLl9vblJlYWR5LmNhbGwodGhpcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRvbVJlYWR5KGNiKSB7XG4gICAgRE9NLm9uUmVhZHkoY2IpO1xuICB9XG5cbiAgb25SZWFkeShjYikge1xuICAgIHRoaXMuX29uUmVhZHkgPSBjYjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZENvbXBvbmVudCh0eXBlLCBvcHRzKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuICAgICAgb3B0cyA9IHtcbiAgICAgICAgY29udGFpbmVyOiBvcHRzXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzLmNyZWF0ZSh0eXBlLCBvcHRzKS5tb3VudCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY3JlYXRlQ29tcG9uZW50KG9wdHMpIHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzLmNyZWF0ZSgnQ29tcG9uZW50Jywgb3B0cykubW91bnQoKTtcbiAgfVxuXG4gIHJlZ2lzdGVySGVscGVyKG5hbWUsIGNiKSB7XG4gICAgdGhpcy5yZW5kZXJlci5yZWdpc3RlckhlbHBlcihuYW1lLCBjYik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG59XG5cbmNvbnN0IEFOU1dFUlMgPSBuZXcgQW5zd2VycygpO1xuZXhwb3J0IGRlZmF1bHQgQU5TV0VSUztcbiJdLCJuYW1lcyI6WyJNZXRob2RzIiwiR0VUIiwiUE9TVCIsIlBVVCIsIkRFTEVURSIsIkh0dHBSZXF1ZXN0ZXIiLCJ1cmwiLCJkYXRhIiwib3B0cyIsInJlcXVlc3QiLCJlbmNvZGVQYXJhbXMiLCJPYmplY3QiLCJhc3NpZ24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1ldGhvZCIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJwYXJhbXMiLCJoYXNQYXJhbSIsImluZGV4T2YiLCJzZWFyY2hRdWVyeSIsImtleSIsImVuY29kZVVSSSIsIkFwaVJlcXVlc3QiLCJfcmVxdWVzdGVyIiwiX2Jhc2VVcmwiLCJiYXNlVXJsIiwiX2VuZHBvaW50IiwiZW5kcG9pbnQiLCJfYXBpS2V5IiwiYXBpS2V5IiwiX3ZlcnNpb24iLCJ2ZXJzaW9uIiwiX3BhcmFtcyIsImdldCIsIlNlYXJjaCIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwidG9TdHJpbmciLCJzZWFyY2hQYXJhbXMiLCJpc0xvY2FsIiwiX2lzTG9jYWwiLCJob3N0bmFtZSIsIl9hbnN3ZXJzS2V5IiwiYW5zd2Vyc0tleSIsInF1ZXJ5U3RyaW5nIiwidmVydGljYWxLZXkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiQXV0b0NvbXBsZXRlRGF0YVRyYW5zZm9ybWVyIiwibW9kdWxlSWQiLCJzZWN0aW9ucyIsImxlbmd0aCIsInJlc3VsdHMiLCJpIiwidmFsdWUiLCJzdWJTdHJpbmdzIiwibWF0Y2hlZFN1YnN0cmluZ3MiLCJwdXNoIiwiaGlnaGxpZ2h0IiwiY2xlYW4iLCJzaG9ydFZhbHVlIiwiaGlnaGxpZ2h0ZWRWYWx1ZSIsInNvcnQiLCJhIiwiYiIsIm9mZnNldCIsIm5leHRTdGFydCIsImoiLCJzdGFydCIsIk51bWJlciIsImVuZCIsInNsaWNlIiwiam9pbiIsImJhcktleSIsIkF1dG9Db21wbGV0ZSIsImlucHV0IiwiZXhwZXJpZW5jZUtleSIsIl9xdWVyeVZlcml0Y2FsIiwiX3F1ZXJ5VW5pdmVyc2FsIiwidmVydGljYWwiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsInVuaXZlcnNhbCIsIlJlc3VsdCIsInJlc3VsdHNEYXRhIiwiU2VjdGlvbiIsInZlcnRpY2FsQ29uZmlnSWQiLCJyZXN1bHRzQ291bnQiLCJlbmNvZGVkU3RhdGUiLCJhcHBsaWVkUXVlcnlGaWx0ZXJzIiwiZmFjZXRzIiwiZnJvbSIsIm1hcCIsInBhcnNlTWFwIiwidmVydGljYWxVUkwiLCJtYXBNYXJrZXJzIiwiY2VudGVyQ29vcmRpbmF0ZXMiLCJyZXN1bHQiLCJ5ZXh0RGlzcGxheUNvb3JkaW5hdGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImxhYmVsIiwibW9kdWxlcyIsInVybHMiLCJBcnJheSIsImlzQXJyYXkiLCJVbml2ZXJzYWxSZXN1bHRzIiwicXVlcnlJZCIsIkRpcmVjdEFuc3dlciIsImRpcmVjdEFuc3dlciIsIk5hdmlnYXRpb24iLCJ0YWJPcmRlciIsIm5hdiIsIlZlcnRpY2FsUmVzdWx0cyIsIlNlYXJjaERhdGFUcmFuc2Zvcm1lciIsIm5hdmlnYXRpb24iLCJ1bml2ZXJzYWxSZXN1bHRzIiwidmVydGljYWxSZXN1bHRzIiwiRXZlbnRFbWl0dGVyIiwiX2xpc3RlbmVycyIsImV2dCIsImNiIiwib25jZSIsIkVycm9yIiwidW5kZWZpbmVkIiwiZXZlbnQiLCJvbiIsImxpc3RlbmVycyIsImtlZXAiLCJNb2R1bGVEYXRhIiwiaWQiLCJfaWQiLCJfaGlzdG9yeSIsIl9kYXRhIiwic2V0IiwiY2FwdHVyZVByZXZpb3VzIiwia2V5cyIsImxlbiIsImlzRGlydHkiLCJwcm9wIiwidmFsIiwiZW1pdCIsInNoaWZ0IiwicHJldmlvdXMiLCJfcHJldmlvdXMiLCJwYXJzZSIsInBvcCIsIlN0b3JhZ2UiLCJfbW9kdWxlRGF0YUNvbnRhaW5lciIsIl9mdXR1cmVMaXN0ZW5lcnMiLCJtb2R1bGVJZHMiLCJfYXBwbHlGdXR1cmVMaXN0ZW5lcnMiLCJpbnNlcnQiLCJ0cmFuc2Zvcm0iLCJyYXciLCJtb2R1bGVEYXRhIiwib2ZmIiwiZnV0dXJlcyIsImZ1dHVyZSIsIkNvcmUiLCJzdG9yYWdlIiwiX3NlYXJjaGVyIiwiX2F1dG9Db21wbGV0ZSIsInZlcnRpY2FsUXVlcnkiLCJ0cmFuc2Zvcm1WZXJ0aWNhbCIsInF1ZXJ5IiwiQ29tcG9uZW50TWFuYWdlciIsInNldEluc3RhbmNlIiwiZ2V0SW5zdGFuY2UiLCJfY29tcG9uZW50UmVnaXN0cnkiLCJfYWN0aXZlQ29tcG9uZW50cyIsIl9jb3JlIiwiX3JlbmRlcmVyIiwicmVuZGVyZXIiLCJjb3JlIiwiY29tcG9uZW50Q2xhenoiLCJ0eXBlIiwiY29tcG9uZW50VHlwZSIsImNvbXBvbmVudE1hbmFnZXIiLCJjb21wb25lbnQiLCJpbml0Iiwic2V0U3RhdGUiLCJpbnN0YW5jZSIsIlJlbmRlcmVyIiwidGVtcGxhdGUiLCJuYW1lIiwiZG9jdW1lbnQiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJET00iLCJodG1sIiwicGFyc2VGcm9tU3RyaW5nIiwicGFyZW50Iiwic2VsZWN0b3IiLCJIVE1MRWxlbWVudCIsIldpbmRvdyIsIkhUTUxEb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVhZHlTdGF0ZSIsImVsIiwib3B0c19kYXRhIiwibm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJwcm9wcyIsImFkZENsYXNzIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjbGFzc05hbWUiLCJjbGFzc2VzIiwic3BsaXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJzdHlsZXMiLCJzdHlsZSIsImF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJzZXR0aW5ncyIsImUiLCJFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjdHh0IiwidGFyZ2V0IiwiaXNFcXVhbE5vZGUiLCJtYXRjaGVzIiwicGFyZW50Tm9kZSIsIlRlbXBsYXRlTG9hZGVyIiwiX3RlbXBsYXRlVXJsIiwidGVtcGxhdGVVcmwiLCJfdGVtcGxhdGVzIiwiX29uTG9hZGVkIiwiX2luaXQiLCJmZXRjaFRlbXBsYXRlcyIsInRoYXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNjcmlwdCIsImNyZWF0ZUVsIiwib25sb2FkIiwib25lcnJvciIsImFzeW5jIiwic3JjIiwiYXBwZW5kIiwibG9nIiwidGVtcGxhdGVzIiwidGVtcGxhdGVOYW1lIiwiSGFuZGxlYmFyc1JlbmRlcmVyIiwiX2hhbmRsZWJhcnMiLCJfaGIiLCJfcmVnaXN0ZXJDdXN0b21IZWxwZXJzIiwicmVnaXN0ZXJIZWxwZXIiLCJjb21waWxlIiwiY29uZmlnIiwiYXJnMSIsImFyZzIiLCJvcHRpb25zIiwiZm4iLCJpbnZlcnNlIiwicGhvbmVOdW1iZXJTdHJpbmciLCJjbGVhbmVkIiwicmVwbGFjZSIsIm1hdGNoIiwiaW50bENvZGUiLCJtYXBEYXRhIiwibWFwQ29uZmlnIiwiZW5jb2RlZE1hcmtlcnMiLCJjZW50ZXIiLCJtYXBDZW50ZXIiLCJ3aWR0aCIsImhlaWdodCIsInpvb20iLCJtbSIsImFyZ3MiLCJhcmd1bWVudHMiLCJyb290IiwidiIsIlJlbmRlcmVycyIsIlNPWSIsIkhhbmRsZWJhcnMiLCJTdGF0ZSIsIl9zdGF0ZSIsIm9wdF92YWwiLCJfc2V0Iiwib3B0X3Byb3AiLCJDb21wb25lbnQiLCJfb3B0cyIsIl90eXBlIiwiY29uc3RydWN0b3IiLCJfcGFyZW50IiwiX2NoaWxkcmVuIiwic3RhdGUiLCJjb250YWluZXIiLCJfY29udGFpbmVyIiwiY2xhc3MiLCJzdWJzdHJpbmciLCJfY2xhc3NOYW1lIiwiX3JlbmRlciIsInJlbmRlciIsIl90ZW1wbGF0ZSIsIl90ZW1wbGF0ZU5hbWUiLCJfaXNNb3VudGVkIiwidHJhbnNmb3JtRGF0YSIsIm9uQ3JlYXRlIiwib25Nb3VudCIsIm9uVXBkYXRlIiwibW91bnQiLCJoYXMiLCJjaGlsZENvbXBvbmVudCIsImNyZWF0ZSIsIl9wYXJlbnRPcHRzIiwiZW1wdHkiLCJ1bk1vdW50IiwiYmVmb3JlTW91bnQiLCJhc0pTT04iLCJiZWZvcmVSZW5kZXIiLCJkb21Db21wb25lbnQiLCJkYXRhc2V0IiwiY2hpbGREYXRhIiwiY2hpbGRIVE1MIiwiYWRkQ2hpbGQiLCJhZnRlclJlbmRlciIsIk5hdmlnYXRpb25Db21wb25lbnQiLCJfdGFiT3JkZXIiLCJfdGFicyIsInRhYnMiLCJ0YWIiLCJjb25maWdJZCIsImlzRmlyc3QiLCJ1bnNoaWZ0IiwiaXNBY3RpdmUiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJnZXRVcmxQYXJhbXMiLCJnZW5lcmF0ZVRhYlVybCIsIlNlYXJjaENvbXBvbmVudCIsIl9iYXJLZXkiLCJfdmVydGljYWxLZXkiLCJfZm9ybUVsIiwiZm9ybVNlbGVjdG9yIiwiX2lucHV0RWwiLCJpbnB1dEVsIiwidGl0bGUiLCJzZWFyY2hUZXh0IiwicHJvbXB0SGVhZGVyIiwiYXV0b0ZvY3VzIiwicmVkaXJlY3RVcmwiLCJiaW5kQnJvd3Nlckhpc3RvcnkiLCJpbml0U2VhcmNoIiwiaW5pdEF1dG9Db21wbGV0ZSIsImZvY3VzIiwiZm9ybSIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJpbnB1dFNlbGVjdG9yIiwiYXV0b0NvbXBsZXRlIiwiX2V4cGVyaWVuY2VLZXkiLCJvcmlnaW5hbFF1ZXJ5Iiwib25TdWJtaXQiLCJ0cmlnZ2VyIiwidmVydGljYWxTZWFyY2giLCJnZXRBY3RpdmVDb21wb25lbnQiLCJnZXRTdGF0ZSIsIktleXMiLCJCQUNLU1BBQ0UiLCJUQUIiLCJFTlRFUiIsIlNISUZUIiwiQ1RSTCIsIkFMVCIsIkVTQ0FQRSIsIkxFRlQiLCJSSUdIVCIsIlVQIiwiRE9XTiIsIkxFRlRfT1NfS0VZIiwiUklHSFRfT1NfS0VZIiwiU0VMRUNUX0tFWSIsIkF1dG9Db21wbGV0ZUNvbXBvbmVudCIsIl9vcmlnaW5hbFF1ZXJ5IiwiX3NlY3Rpb25JbmRleCIsIl9yZXN1bHRJbmRleCIsIl9vblN1Ym1pdCIsInNlY3Rpb25JbmRleCIsInJlc3VsdEluZGV4IiwicXVlcnlJbnB1dCIsImNsb3NlIiwicmVzZXQiLCJoYW5kbGVOYXZpZ2F0ZVJlc3VsdHMiLCJrZXlDb2RlIiwiZGVsZWdhdGUiLCJmaWx0ZXIiLCJ1cGRhdGVRdWVyeSIsImhhbmRsZVR5cGluZyIsIl9zZWxlY3RlZEluZGV4IiwidXBkYXRlU3RhdGUiLCJvcHRfdmFsdWUiLCJxdWVyeUVsIiwiaWdub3JlZEtleXMiLCJEaXJlY3RBbnN3ZXJDb21wb25lbnQiLCJoYXNTdGF0ZSIsIlJlc3VsdHNJdGVtQ29tcG9uZW50IiwiTG9jYXRpb25SZXN1bHRzSXRlbUNvbXBvbmVudCIsIkV2ZW50UmVzdWx0c0l0ZW1Db21wb25lbnQiLCJQZW9wbGVSZXN1bHRzSXRlbUNvbXBvbmVudCIsIlJlc3VsdFR5cGUiLCJFVkVOVCIsIkxPQ0FUSU9OIiwiUEVPUExFIiwiUmVzdWx0c0NvbXBvbmVudCIsImxpbWl0IiwiX2l0ZW1Db25maWciLCJnbG9iYWwiLCJyZW5kZXJJdGVtIiwiaXRlbVRlbXBsYXRlIiwiY29uZmlndXJlSXRlbSIsImluY2x1ZGVNYXAiLCJzZXRJdGVtUmVuZGVyIiwic2V0SXRlbVRlbXBsYXRlIiwiY2xhenoiLCJnZXRJdGVtQ29tcG9uZW50IiwiY29tcCIsImdsb2JhbENvbmZpZyIsIml0ZW1Db25maWciLCJoYXNHbG9iYWxSZW5kZXIiLCJoYXNHbG9iYWxUZW1wbGF0ZSIsInNldFJlbmRlciIsInNldFRlbXBsYXRlIiwiVW5pdmVyc2FsUmVzdWx0c0NvbXBvbmVudCIsIl9saW1pdCIsImdldENoaWxkQ29uZmlnIiwiTWFwUHJvdmlkZXIiLCJtYXBBcGlLZXkiLCJfaGVpZ2h0IiwiX3dpZHRoIiwiX3pvb20iLCJfbWFwIiwiX2lzTG9hZGVkIiwiR29vZ2xlTWFwUHJvdmlkZXIiLCJvbkxvYWQiLCJzZXRUaW1lb3V0IiwiY3NzIiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsImJvdW5kcyIsIkxhdExuZ0JvdW5kcyIsIm1hcmtlcnMiLCJtYXJrZXIiLCJNYXJrZXIiLCJwb3NpdGlvbiIsImxhdCIsImxuZyIsImV4dGVuZCIsImZpdEJvdW5kcyIsIk1hcEJveE1hcFByb3ZpZGVyIiwibWFwYm94Z2wiLCJhY2Nlc3NUb2tlbiIsInJlbCIsImNvb3JkcyIsIkxuZ0xhdCIsInNldExuZ0xhdCIsImFkZFRvIiwiTWFwQ29tcG9uZW50IiwiX21hcFByb3ZpZGVyIiwibWFwUHJvdmlkZXIiLCJsb2FkSlMiLCJpc0xvYWRlZCIsIl9tYXBBcGlLZXkiLCJRdWVzdGlvblN1Ym1pc3Npb25Db21wb25lbnQiLCJfZW1haWxMYWJlbCIsImVtYWlsTGFiZWwiLCJfbmFtZUxhYmVsIiwibmFtZUxhYmVsIiwiX3F1ZXN0aW9uTGFiZWwiLCJxdWVzdGlvbkxhYmVsIiwiX3ByaXZhY3lQb2xpY3lMYWJlbCIsInByaXZhY3lQb2xpY3lMYWJlbCIsIl9idXR0b25MYWJlbCIsImJ1dHRvbkxhYmVsIiwiaW5pdFN1Ym1pdCIsImhhc1F1ZXJpZWQiLCJxdWVzdGlvbiIsIkNPTVBPTkVOVF9NQU5BR0VSIiwicmVnaXN0ZXIiLCJBbnN3ZXJzIiwiY29tcG9uZW50cyIsIl9vblJlYWR5Iiwic2V0Q29yZSIsInNldFJlbmRlcmVyIiwib25SZWFkeSIsInVzZVRlbXBsYXRlcyIsInRlbXBsYXRlQnVuZGxlIiwiY2FsbCIsIm9uTG9hZGVkIiwiQU5TV0VSUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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